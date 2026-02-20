// Import list of team members
import { teamMembers } from "./configurations.js";

// Boolean flag to enable grouping by section
import { groupBySectionEnabled } from "./configurations.js";

// this is the info to create the sections
import { sectionConfig } from "./configurations.js";

// Check if the device width meets desktop size (>= 500px)
const isDesktop = window.matchMedia("(min-width: 500px)").matches;

// Creates a team member card element and its popup
function createCard(member, index) {
    const card = document.createElement("button");
    card.className = "team-card";

    card.innerHTML = `
        <div class="image-wrapper">
            <img src="${member.img}" alt="${member.name}">
        </div>
        <div class="gradient-divider"></div>
        <div class="text-section">${member.name}</div>
        <div class="text-section2">${member.role}</div>
    `;

    const popup = document.createElement("div");
    popup.className = "pop-up";
    popup.id = `popup-${index}`;
    popup.innerHTML = `
        <span class="close-btn">&times;</span>
        <p>${member.popup}</p>
    `;

    card.appendChild(popup);

    card.addEventListener("click", () => (popup.style.display = "block"));
    popup.querySelector(".close-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        popup.style.display = "none";
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

// Check if there are any team members
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
} else {
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

                    groupedMembers[sectionKey].forEach((member, index) => {
                        const { card } = createCard(member, index);
                        desktopGrid.appendChild(card);
                    });
                }
            });
        } else {
            // Ignore section, just display members in order
            teamMembers.forEach((member, index) => {
                const { card } = createCard(member, index);
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
            const { card } = createCard(member, index);
            slide.appendChild(card);
            cardsContainer.appendChild(slide);
        });

        document.querySelector(".carousel-control-prev").style.display = "flex";
        document.querySelector(".carousel-control-next").style.display = "flex";
    }

    document.getElementById("viewButton").addEventListener("click", () => {
        window.location.href = "fullTeam.html";
    });
}
