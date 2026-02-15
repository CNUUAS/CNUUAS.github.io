// Import list of team members
import { teamMembers } from "./teamMembers.js";

// Check if the device width meets desktop size (>= 500px)
const isDesktop = window.matchMedia("(min-width: 500px)").matches;

// Define section order and titles
const sectionConfig = {
    officers: { title: "Officers", description: "Team Leadership" },
    software: { title: "Software Team", description: "Software Development" },
    hardware: { title: "Hardware Team", description: "Hardware Engineering" },
    flight: {title: "Flight Team", description: "Flight Control"},
    members: { title: "Members", description: "General Members" }

};

// Creates a team member card element and its popup
function createCard(member, index) {
    // Create the clickable card container (styled as a button)
    const card = document.createElement("button");
    card.className = "team-card";

    // Card inner HTML including image, name, and major
    card.innerHTML = `
        <div class="image-wrapper">
            <img src="${member.img}" alt="${member.name}">
        </div>
        <div class="gradient-divider"></div>
        <div class="text-section">${member.name}</div>
        <div class="text-section2">${member.role}</div>
    `;

    // Create popup element that appears when the card is clicked
    const popup = document.createElement("div");
    popup.className = "pop-up";
    popup.id = `popup-${index}`;
    popup.innerHTML = `
        <span class="close-btn">&times;</span>
        <p>${member.popup}</p>
    `;

    // Attach popup to the card
    card.appendChild(popup);

    // When card is clicked, show the popup
    card.addEventListener("click", () => (popup.style.display = "block"));

    // Close button inside popup — prevents card click from firing again
    popup.querySelector(".close-btn").addEventListener("click", (e) => {
        e.stopPropagation(); // Stop event from bubbling back to card
        popup.style.display = "none"; // Hide popup
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
    members.forEach(member => {
        const section = member.section || 'members';
        if (!grouped[section]) {
            grouped[section] = [];
        }
        grouped[section].push(member);
    });
    return grouped;
}

// Check if there are any team members
if (!teamMembers || teamMembers.length === 0) {
    // Display message when no team members exist
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

    // Hide the "More Info" button when there are no team members
    document.getElementById("viewButton").style.display = "none";

    // Hide carousel control buttons
    document.querySelector(".carousel-control-prev").style.display = "none";
    document.querySelector(".carousel-control-next").style.display = "none";
} else {
    // -------- Desktop layout --------
    if (isDesktop) {
        const groupedMembers = groupBySection(teamMembers);
        const desktopGrid = document.getElementById("desktop-team-grid");
        
        // Render each section
        Object.keys(sectionConfig).forEach(sectionKey => {
            if (groupedMembers[sectionKey] && groupedMembers[sectionKey].length > 0) {
                // Add section header
                const sectionHeader = createSectionHeader(sectionKey);
                desktopGrid.appendChild(sectionHeader);
                
                // Add all cards for this section directly to the main grid
                groupedMembers[sectionKey].forEach((member, index) => {
                    const { card } = createCard(member, index);
                    desktopGrid.appendChild(card);
                });
            }
        });

        document.querySelector(".carousel-control-prev").style.display = "none";
        document.querySelector(".carousel-control-next").style.display = "none";

    // -------- Mobile / Carousel layout (NO SECTIONS) --------
    } else {
        // Get Bootstrap carousel inner container
        const cardsContainer = document.getElementById("team-cards");

        teamMembers.forEach((member, index) => {
            // Create a carousel slide per member
            const slide = document.createElement("div");
            slide.className = `carousel-item ${index === 0 ? "active" : ""}`;

            // Create the team card for this slide
            const { card } = createCard(member, index);

            // Add the card to the slide, then slide to carousel
            slide.appendChild(card);
            cardsContainer.appendChild(slide);
        });

        // Show arrows for mobile carousel view
        document.querySelector(".carousel-control-prev").style.display = "flex";
        document.querySelector(".carousel-control-next").style.display = "flex";
    }

    // "View All" button takes user to full team page
    document.getElementById("viewButton").addEventListener("click", () => {
        window.location.href = "fullTeam.html";
    });
}
