// Array of team members

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

// Function that creates a single team member card element
function createCard(member) {
    // Create a new <div> to act as the card
    const card = document.createElement("div");

    // Add a CSS class so you can style it with CSS
    card.className = "team-card";

    // Set the HTML content of the card using the member’s data
    card.innerHTML = `
        <img src="${member.img}" alt="${member.name}">
        <div class="text-wrapper">
            <div class="text-section">Name: ${member.name}</div>
            <div class="text-section2">Major: ${member.major}</div>
            <div class="text-section3">E-Mail: ${member.email}</div>
        </div>
    `;

    // Return the card wrapped in an object, in case you want to add more later
    return { card };
}

// Get the container element where all team member cards will be placed
const membersWrapper = document.getElementById("membersWrapper");

// Loop through each team member in the array
teamMembers.forEach((member) => {
    // Create a card for the current member
    const { card } = createCard(member);

    // Add the card to the page inside the wrapper container
    membersWrapper.appendChild(card);
});

// Add functionality to the "Back" button
document.getElementById("backButton").addEventListener("click", () => {
    // When clicked, go back to team.html
    window.location.href = "team.html";
});
