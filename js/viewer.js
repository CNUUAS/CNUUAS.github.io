/**
 * 360 Viewer Initialization
 * Only loads on pages that have a #viewer element
 */

function initialize360Viewer() {
    const viewerElement = document.getElementById("viewer");
    
    // Only initialize if viewer element exists
    if (!viewerElement) {
        console.log("No viewer element found on this page");
        return;
    }
    
    setTimeout(function() {
        console.log("Initializing 360 viewer...");
        
        try {
            const viewer = new eg.view360.PanoViewer(viewerElement, {
                image: "assets/homepage/view360.jpg",
                projectionType: eg.view360.PanoViewer.PROJECTION_TYPE.EQUIRECTANGULAR,
                pitch: 0,
                yaw: 0,
            });
            console.log("Viewer created successfully!", viewer);
            
            // Mobile-specific: Ensure touch controls work
            viewer.enableSensor();
            
        } catch (error) {
            console.error("Error initializing 360 viewer:", error);
        }
    }, 500);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initialize360Viewer);