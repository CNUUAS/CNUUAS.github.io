
// Load carousel images dynamically
async function loadCarousel() {
    const response = await fetch('data/carousel-images.json');
    const images = await response.json();
    
    const carouselInner = document.querySelector('#photoCarousel .carousel-inner');
    const indicators = document.querySelector('#photoCarousel .carousel-indicators');
    
    carouselInner.innerHTML = images.map((img, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${img.image}" class="d-block w-100" alt="${img.alt}">
            <div class="carousel-caption d-none d-md-block">
                <h5>${img.title}</h5>
                <p>${img.description}</p>
            </div>
        </div>
    `).join('');
    
    indicators.innerHTML = images.map((_, index) => `
        <button type="button" data-bs-target="#photoCarousel" 
                data-bs-slide-to="${index}" 
                ${index === 0 ? 'class="active"' : ''}></button>
    `).join('');
}

// Call on page load
document.addEventListener('DOMContentLoaded', loadCarousel);