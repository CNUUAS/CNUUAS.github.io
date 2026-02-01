/**
 * carousel.js
 * Dynamically loads carousel images from JSON data with responsive images
 */

/**
 * Load and render carousel images
 */
async function loadCarousel() {
    try {
        // Fetch the carousel data
        const response = await fetch('data/carousel-images.json');
        
        // Check if fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const images = await response.json();
        
        // Get carousel container elements
        const carouselInner = document.querySelector('#photoCarousel .carousel-inner');
        const indicators = document.querySelector('#photoCarousel .carousel-indicators');
        
        // Check if elements exist
        if (!carouselInner || !indicators) {
            console.error('Carousel elements not found');
            return;
        }
        
        // Generate carousel items HTML with responsive images
        const carouselItemsHTML = images.map((img, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img srcset="${img.imageSmall} 640w,
                             ${img.imageMedium} 1280w,
                             ${img.imageLarge} 1920w"
                     sizes="(max-width: 640px) 640px,
                            (max-width: 1280px) 1280px,
                            1920px"
                     src="${img.imageMedium}" 
                     class="d-block w-100" 
                     alt="${img.alt}"
                     loading="${index === 0 ? 'eager' : 'lazy'}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${img.title}</h5>
                    <p>${img.description}</p>
                </div>
            </div>
        `).join('');
        
        // Generate indicators HTML
        const indicatorsHTML = images.map((_, index) => `
            <button type="button" 
                    data-bs-target="#photoCarousel" 
                    data-bs-slide-to="${index}" 
                    ${index === 0 ? 'class="active" aria-current="true"' : ''}
                    aria-label="Slide ${index + 1}"></button>
        `).join('');
        
        // Insert HTML into DOM
        carouselInner.innerHTML = carouselItemsHTML;
        indicators.innerHTML = indicatorsHTML;
        
        console.log(`✓ Loaded ${images.length} carousel images with responsive sizing`);
        
    } catch (error) {
        console.error('Error loading carousel:', error);
        
        // Fallback: Show error message in carousel
        const carouselInner = document.querySelector('#photoCarousel .carousel-inner');
        if (carouselInner) {
            carouselInner.innerHTML = `
                <div class="carousel-item active">
                    <div class="d-flex align-items-center justify-content-center bg-light" style="height: 500px;">
                        <div class="text-center p-4">
                            <h3>Unable to load images</h3>
                            <p class="text-muted">Please check the console for details</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}

/**
 * Initialize carousel when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCarousel);
} else {
    // DOM already loaded
    loadCarousel();
}
