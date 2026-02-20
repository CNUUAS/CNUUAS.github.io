import { alumni } from "./configurations.js";


// Function to create an alumni card
function createAlumniCard(alumni) {
    return `
                    <div class="col-md-6 col-lg-4">
                        <div class="card alumni-card">
                            <div class="card-body">
                                <span class="year-badge">Class of ${alumni.year}</span>
                                <h5 class="card-title mt-2">${alumni.name}</h5>
                                <h6 class="text-muted">${alumni.title}</h6>
                                <p class="card-text">${alumni.description}</p>
                            </div>
                        </div>
                    </div>
                `;
}

// Function to create empty state message
function createEmptyState() {
    return `
        <div class="col-12">
            <div class="text-center py-5">
                <h3 class="text-muted mb-3">No Alumni Listed Yet</h3>
                <p class="text-muted">Check back soon as we build our alumni network!</p>
            </div>
        </div>
    `;
}

// Function to render all alumni cards
function renderAlumni() {
    const container = document.getElementById("alumni-container");
    if (container) {
        if (alumni && alumni.length > 0) {
            container.innerHTML = alumni.map(createAlumniCard).join("");
        } else {
            container.innerHTML = createEmptyState();
        }
    }
}

// Render alumni when DOM is loaded
document.addEventListener("DOMContentLoaded", renderAlumni);