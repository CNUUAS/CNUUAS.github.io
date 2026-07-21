// Imprt list of team members

import { teamMembers } from "./teamMembers.js";

// Matches the (max-width: 499px) breakpoint used by css/teamMobile.css
const desktopQuery = window.matchMedia("(min-width: 500px)");

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

const desktopGrid = document.getElementById("desktop-team-grid");
const cardsContainer = document.getElementById("team-cards");

// Renders cards into the layout matching the current viewport width.
// Re-run on every breakpoint crossing so resizing/rotating updates the layout
// instead of being stuck with whatever matched at page load.
function renderTeamCards(isDesktop) {
    desktopGrid.innerHTML = "";
    cardsContainer.innerHTML = "";

    if (isDesktop) {
        // -------- Desktop layout --------
        teamMembers.forEach((member, index) => {
            const { card } = createCard(member, index);
            desktopGrid.appendChild(card);
        });
    } else {
        // -------- Mobile / Carousel layout --------
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
    }
}

renderTeamCards(desktopQuery.matches);
desktopQuery.addEventListener("change", (e) => renderTeamCards(e.matches));

// “View All” button takes user to full team page
document.getElementById("viewButton").addEventListener("click", () => {
    window.location.href = "fullTeam.html";
});
