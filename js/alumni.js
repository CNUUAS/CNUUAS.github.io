// Imprt list of team members

import { alumni } from "./teamMembers.js";

// Check if the device width meets desktop size (>= 500px)
const isDesktop = window.matchMedia("(min-width: 500px)").matches;

// Creates a team member card element and its popup
function createCard(member, index) {
    // Create the clickable card container (styled as a button)
    const card = document.createElement("div");
    card.className = "team-card";

    // Card inner HTML including image, name, and major
    card.innerHTML = `
        <div class="image-wrapper">
            <img src="${member.img}" alt="${member.name}">
        </div>
        <div class="gradient-divider"></div>
        <div class="text-section">${member.name}</div>
        <div class="text-section2">${member.title}</div>
        <div class="text-section3">${member.email}</div>
    `;

    return { card };
}

// -------- Desktop layout --------
if (isDesktop) {
    // Grab grid container for desktop view
    const desktopGrid = document.getElementById("desktop-team-grid");

    // Create and append all cards directly into the grid
    alumni.forEach((member, index) => {
        const { card } = createCard(member, index);
        desktopGrid.appendChild(card);
    });

    // -------- Mobile / Carousel layout --------
} else {
    // Get Bootstrap carousel inner container
    const cardsContainer = document.getElementById("team-cards");

    alumni.forEach((member, index) => {
        // Create a carousel slide per member
        const slide = document.createElement("div");
        slide.className = `carousel-item ${index === 0 ? "active" : ""}`;

        // Create the team card for this slide
        const { card } = createCard(member, index);

        // Add the card to the slide, then slide to carousel
        slide.appendChild(card);
        cardsContainer.appendChild(slide);
    });
}

// “View All” button takes user to full team page
document.getElementById("viewButton").addEventListener("click", () => {
    window.location.href = "fullTeam.html";
});
