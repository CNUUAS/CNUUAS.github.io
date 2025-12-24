const teamMembers = [
    {
        name: "Guy M.",
        major: "Electrical Engineering",
        img: "https://picsum.photos/600/350?random=1",
        popup: "Guy M. is a major in electrical engineering and enjoys existing on the planet earth.",
        email: "Guy.man@gmail.com",
    },
    {
        name: "Lad T.",
        major: "Computer Science",
        img: "https://picsum.photos/600/350?random=2",
        popup: "Lad T. is a major in computer science and enjoys not existing on the planet earth.",
        email: "lad.tom@gmail.com",
    },
    {
        name: "Lass G.",
        major: "Computer Engineering",
        img: "https://picsum.photos/600/350?random=3",
        popup: "Lass G. is a major in computer engineering and enjoys neither existing nor not existing on the planet earth.",
        email: "lass.guy@gmail.com",
    },
    {
        name: "Lass G.",
        major: "Computer Engineering",
        img: "https://picsum.photos/600/350?random=3",
        popup: "Lass G. is a major in computer engineering and enjoys neither existing nor not existing on the planet earth.",
        email: "lass.guy@gmail.com",
    },
    {
        name: "Lass G.",
        major: "Computer Engineering",
        img: "https://picsum.photos/600/350?random=3",
        popup: "Lass G. is a major in computer engineering and enjoys neither existing nor not existing on the planet earth.",
        email: "lass.guy@gmail.com",
    },
    {
        name: "Lass G.",
        major: "Computer Engineering",
        img: "https://picsum.photos/600/350?random=3",
        popup: "Lass G. is a major in computer engineering and enjoys neither existing nor not existing on the planet earth.",
        email: "lass.guy@gmail.com",
    },
    {
        name: "Lass G.",
        major: "Computer Engineering",
        img: "https://picsum.photos/600/350?random=3",
        popup: "Lass G. is a major in computer engineering and enjoys neither existing nor not existing on the planet earth.",
        email: "lass.guy@gmail.com",
    },
    {
        name: "Lass G.",
        major: "Computer Engineering",
        img: "https://picsum.photos/600/350?random=3",
        popup: "Lass G. is a major in computer engineering and enjoys neither existing nor not existing on the planet earth.",
        email: "lass.guy@gmail.com",
    },
    {
        name: "Lass G.",
        major: "Computer Engineering",
        img: "https://picsum.photos/600/350?random=3",
        popup: "Lass G. is a major in computer engineering and enjoys neither existing nor not existing on the planet earth.",
        email: "lass.guy@gmail.com",
    },
    {
        name: "Lass G.",
        major: "Computer Engineering",
        img: "https://picsum.photos/600/350?random=3",
        popup: "Lass G. is a major in computer engineering and enjoys neither existing nor not existing on the planet earth.",
        email: "lass.guy@gmail.com",
    },
];

const isDesktop = window.matchMedia("(min-width: 500px)").matches;

function createCard(member, index) {
    const card = document.createElement("button");
    card.className = "team-card";
    card.innerHTML = `
                <img src="${member.img}" alt="${member.name}">
                <div class="text-section">${member.name}</div>
                <div class = "text-section2">${member.major}</div>
            `;

    const popup = document.createElement("div");
    popup.className = "pop-up";
    popup.id = `popup-${index}`;
    popup.innerHTML = `<span class="close-btn">&times;</span><p>${member.popup}</p>`;

    card.appendChild(popup);

    card.addEventListener("click", () => (popup.style.display = "block"));
    popup.querySelector(".close-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        popup.style.display = "none";
    });

    return { card, popup };
}

if (isDesktop) {
    const desktopGrid = document.getElementById("desktop-team-grid");
    teamMembers.forEach((member, index) => {
        const { card } = createCard(member, index);
        desktopGrid.appendChild(card);
    });
} else {
    const cardsContainer = document.getElementById("team-cards");
    teamMembers.forEach((member, index) => {
        const slide = document.createElement("div");
        slide.className = `carousel-item ${index === 0 ? "active" : ""}`;
        const { card } = createCard(member, index);
        slide.appendChild(card);
        cardsContainer.appendChild(slide);
    });
}

document.getElementById("viewButton").addEventListener("click", () => {
    window.location.href = "fullTeam.html";
});
