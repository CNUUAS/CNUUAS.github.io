// Import list of team members
import { teamMembers } from "./configurations.js";

// Boolean flag to enable grouping by section
import { groupBySectionEnabled } from "./configurations.js";

// this is the info to create the sections
import { sectionConfig } from "./configurations.js";

// Tracks whether the device width meets desktop size (>= 500px);
// re-render() runs again whenever this crosses, so resizing or
// rotating a device after load switches layouts instead of sticking
// with whatever was true at page-load time.
const desktopQuery = window.matchMedia("(min-width: 500px)");

// Turns a member's name into a stable, unique id fragment
function slugify(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

// Creates a team member card element and its popup
function createCard(member) {
    // Wrapper anchors the trigger button and its popup as siblings —
    // a <button> can't validly contain block content or another
    // interactive element, so the popup can't live inside it.
    const card = document.createElement("div");
    card.className = "team-card";

    // Derived from the name (not a loop index) so it stays unique even
    // when members are split across multiple per-section forEach loops
    const popupId = `popup-${slugify(member.name)}`;

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "team-card-btn";
    trigger.setAttribute("aria-haspopup", "dialog");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", popupId);
    trigger.innerHTML = `
        <div class="image-wrapper">
            <img src="${member.img}" alt="${member.name}" loading="lazy">
        </div>
        <div class="gradient-divider"></div>
        <div class="text-section">${member.name}</div>
        <div class="text-section2">${member.role}</div>
    `;

    const popup = document.createElement("div");
    popup.className = "pop-up";
    popup.id = popupId;
    popup.setAttribute("role", "dialog");
    popup.setAttribute("aria-modal", "true");
    popup.setAttribute("aria-label", `${member.name} bio`);
    popup.hidden = true;
    popup.innerHTML = `
        <button type="button" class="close-btn" aria-label="Close">&times;</button>
        <p>${member.popup}</p>
    `;

    card.appendChild(trigger);
    card.appendChild(popup);

    const closeBtn = popup.querySelector(".close-btn");

    function onKeydown(e) {
        if (e.key === "Escape") closePopup();
    }

    function openPopup() {
        popup.hidden = false;
        trigger.setAttribute("aria-expanded", "true");
        closeBtn.focus();
        document.addEventListener("keydown", onKeydown);
    }

    function closePopup() {
        popup.hidden = true;
        trigger.setAttribute("aria-expanded", "false");
        document.removeEventListener("keydown", onKeydown);
        trigger.focus();
    }

    trigger.addEventListener("click", openPopup);
    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closePopup();
    });

    return { card, popup };
}

// Create section header
function createSectionHeader(sectionKey) {
    const config = sectionConfig[sectionKey];
    const header = document.createElement("div");
    header.className = "section-header";
    header.innerHTML = `
        <div class="section-line"></div>
        <h2>${config.title}</h2>
        <p>${config.description}</p>
    `;
    return header;
}

// Group members by section
function groupBySection(members) {
    const grouped = {};
    members.forEach((member) => {
        const section = member.section || "members";
        if (!grouped[section]) grouped[section] = [];
        grouped[section].push(member);
    });
    return grouped;
}

// (Re)builds whichever layout — desktop grid or mobile carousel —
// matches the current viewport. Safe to call repeatedly: it clears
// both containers first, so switching layouts on resize doesn't
// leave stale cards behind.
function render() {
    const isDesktop = desktopQuery.matches;
    document.getElementById("desktop-team-grid").innerHTML = "";
    document.getElementById("team-cards").innerHTML = "";

    if (!teamMembers || teamMembers.length === 0) {
        const message = document.createElement("div");
        message.className = "no-team-message";
        message.innerHTML = `
            <p>No team members to display at this time.</p>
            <p>Check back soon!</p>
        `;

        if (isDesktop) {
            document.getElementById("desktop-team-grid").appendChild(message);
        } else {
            const cardsContainer = document.getElementById("team-cards");
            const slide = document.createElement("div");
            slide.className = "carousel-item active";
            slide.appendChild(message);
            cardsContainer.appendChild(slide);
        }

        document.getElementById("viewButton").style.display = "none";
        document.querySelector(".carousel-control-prev").style.display = "none";
        document.querySelector(".carousel-control-next").style.display = "none";
        return;
    }

    if (isDesktop) {
        const desktopGrid = document.getElementById("desktop-team-grid");

        if (groupBySectionEnabled) {
            const groupedMembers = groupBySection(teamMembers);

            Object.keys(sectionConfig).forEach((sectionKey) => {
                if (
                    groupedMembers[sectionKey] &&
                    groupedMembers[sectionKey].length > 0
                ) {
                    const sectionHeader = createSectionHeader(sectionKey);
                    desktopGrid.appendChild(sectionHeader);

                    groupedMembers[sectionKey].forEach((member) => {
                        const { card } = createCard(member);
                        desktopGrid.appendChild(card);
                    });
                }
            });
        } else {
            // Ignore section, just display members in order
            teamMembers.forEach((member) => {
                const { card } = createCard(member);
                desktopGrid.appendChild(card);
            });
        }

        document.querySelector(".carousel-control-prev").style.display = "none";
        document.querySelector(".carousel-control-next").style.display = "none";
    } else {
        // Mobile / carousel layout
        const cardsContainer = document.getElementById("team-cards");
        teamMembers.forEach((member, index) => {
            const slide = document.createElement("div");
            slide.className = `carousel-item ${index === 0 ? "active" : ""}`;
            const { card } = createCard(member);
            slide.appendChild(card);
            cardsContainer.appendChild(slide);
        });

        document.querySelector(".carousel-control-prev").style.display = "flex";
        document.querySelector(".carousel-control-next").style.display = "flex";
    }

    document.getElementById("viewButton").style.display = "";
}

render();
desktopQuery.addEventListener("change", render);

// Attached once (not inside render()) so resize-triggered re-renders
// don't stack up duplicate listeners on the same persistent button
document.getElementById("viewButton").addEventListener("click", () => {
    window.location.href = "fullTeam.html";
});
