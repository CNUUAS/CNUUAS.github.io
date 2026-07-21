/**
 * buildLog.js
 * Loads the drone development timeline from data/build-log.json
 * and renders it as a list of cards, most recent entry first.
 */

// Formats a "YYYY-MM-DD" string without local-timezone drift
function formatDate(dateStr) {
    const [year, month, day] = dateStr.split("-").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
}

function createEntryCard(entry) {
    return `
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2 flex-wrap gap-2">
                    <span class="badge bg-secondary">${entry.tag}</span>
                    <small class="text-muted">${formatDate(entry.date)}</small>
                </div>
                <h5 class="card-title">${entry.title}</h5>
                <p class="card-text mb-0">${entry.description}</p>
            </div>
        </div>
    `;
}

function createEmptyState() {
    return `
        <div class="text-center text-muted py-4">
            <p class="mb-0">No build log entries yet. Check back soon!</p>
        </div>
    `;
}

async function loadBuildLog() {
    const container = document.getElementById("build-log");
    if (!container) return;

    try {
        const response = await fetch("data/build-log.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const entries = await response.json();

        if (!entries || entries.length === 0) {
            container.innerHTML = createEmptyState();
            return;
        }

        const sorted = [...entries].sort((a, b) =>
            b.date.localeCompare(a.date)
        );
        container.innerHTML = sorted.map(createEntryCard).join("");
    } catch (error) {
        console.error("Error loading build log:", error);
        container.innerHTML = `
            <div class="text-center text-muted py-4">
                <p class="mb-0">Unable to load the build log right now.</p>
            </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", loadBuildLog);
