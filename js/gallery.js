document.addEventListener('DOMContentLoaded', function() {
    // Gallery carousel functionality
    const galleryCarousel = document.querySelector('.gallery-carousel');
    const images = galleryCarousel.querySelectorAll('.gallery-image');
    const prevBtn = galleryCarousel.querySelector('.prev-img');
    const nextBtn = galleryCarousel.querySelector('.next-img');
    const dotsContainer = galleryCarousel.querySelector('.gallery-dots');
    const downloadBtn = document.querySelector('.download-btn');
    let currentIndex = 0;

    // Create dots
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('gallery-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showImage(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.gallery-dot');

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        images[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    prevBtn.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(newIndex);
    });

    nextBtn.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % images.length;
        showImage(newIndex);
    });

    // Download button functionality
    downloadBtn.addEventListener('click', function() {
        const currentImage = document.querySelector('.gallery-image.active');
        const imageUrl = currentImage.src;
        const fileName = imageUrl.split('/').pop();
        
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = fileName;
        
        // Programmatically click the link to trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Like button functionality
    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', function() {
            const likesCount = this.closest('.gallery-item-actions').querySelector('.likes-count');
            const currentLikes = parseInt(likesCount.textContent);
            
            if (this.classList.contains('liked')) {
                this.textContent = '❤️';
                this.classList.remove('liked');
                likesCount.textContent = `${currentLikes - 1} likes`;
            } else {
                this.textContent = '❤';
                this.classList.add('liked');
                likesCount.textContent = `${currentLikes + 1} likes`;
            }
        });
    });
}); 
