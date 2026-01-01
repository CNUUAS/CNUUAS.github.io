/**
 * Main JavaScript - Shared functionality across all pages
 */

// Load shared components (navbar, footer)
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        
        // After navbar loads, set active link
        if (elementId === 'navbar-placeholder') {
            setActiveNavLink();
            setupMobileMenuClose();
        }
    } catch (error) {
        console.error(`Error loading component from ${filePath}:`, error);
    }
}

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href').split('#')[0];
        
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Close mobile menu when clicking a link
function setupMobileMenuClose() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            const navCollapse = document.getElementById('nav');
            if (navCollapse && window.innerWidth < 768) {
                const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('navbar-placeholder', 'components/navbar.html');
    loadComponent('footer-placeholder', 'components/footer.html');
});