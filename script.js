// JavaScript for slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Automatically change slides every 3 seconds
setInterval(nextSlide, 3000);

// Initialize the slider
showSlide(currentSlide);

// Event listener for the "Start Game" button on the first card
document.getElementById('start-game-1').addEventListener('click', () => {
    window.location.href = 'game.html'; // Redirects to the new game page
});
