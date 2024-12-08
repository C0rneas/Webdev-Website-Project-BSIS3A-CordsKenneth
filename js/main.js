// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page in navigation
    highlightCurrentPage();
    
    // Add smooth scrolling
    addSmoothScrolling();
    
    // Initialize recipe carousel if on recipes page
    if (document.querySelector('.recipe')) {
        initializeRecipeCarousel();
    }
    
    // Add popcorn effect to certain buttons
    addPopcornEffect();
});

// Highlight current page in navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Add smooth scrolling
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Recipe carousel functionality
function initializeRecipeCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentSlideIndex = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            showSlide(currentSlideIndex);
        });
        
        nextButton.addEventListener('click', () => {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        });
    }
}

// Add popcorn effect
function addPopcornEffect() {
    document.querySelectorAll('.hero-cta').forEach(button => {
        button.addEventListener('click', createPopcorn);
    });
}

// Create popcorn animation
function createPopcorn(e) {
    const popcorn = document.createElement('div');
    popcorn.className = 'popcorn';
    popcorn.style.left = `${e.clientX}px`;
    popcorn.style.top = `${e.clientY}px`;
    document.body.appendChild(popcorn);
    
    setTimeout(() => {
        popcorn.remove();
    }, 1000);
} 
