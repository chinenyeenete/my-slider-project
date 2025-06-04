// Write JavaScript code here
document.addEventListener('DOMContentLoaded', () => {
    const rightArrow = document.getElementById('right');
    const carousel = document.querySelector('.carousel');
    rightArrow.addEventListener('click', () => {
        carousel.scrollBy({
            left: 250,
            behavior: 'smooth'
        });
    });
    const leftArrow = document.getElementById('left');
    leftArrow.addEventListener('click', () => {
        carousel.scrollBy({
            left: -250,
            behavior: 'smooth'
        })
    })
})