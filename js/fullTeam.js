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

function createCard(member) {
    const card = document.createElement("button");
    card.className = "team-card";
    card.innerHTML = `
                <img src="${member.img}" alt="${member.name}">
                <div class = "text-wrapper">
                    <div class = "text-section">Name: ${member.name}</div>
                    <div class = "text-section2">Major: ${member.major}</div>
                    <div class = "text-section3">E-Mail: ${member.email}</div>
                </div>
            `;
    return { card };
}

const membersWrapper = document.getElementById("membersWrapper");

teamMembers.forEach((member) => {
    const { card } = createCard(member);
    membersWrapper.appendChild(card);
});

document.getElementById("backButton").addEventListener("click", () => {
    window.location.href = "team.html";
});
