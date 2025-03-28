const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const authButtons = document.querySelector('.auth-buttons');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    authButtons.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target) && !authButtons.contains(e.target)) {
        navLinks.classList.remove('active');
        authButtons.classList.remove('active');
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        authButtons.classList.remove('active');
    });
});

function generateTrainerId() {
    const numbers = Array.from({length: 12}, () => Math.floor(Math.random() * 10));
    return numbers.join('').replace(/(\d{4})/g, '$1 ').trim();
}

function animateTrainerId() {
    const trainerIdElement = document.getElementById('trainerId');
    const finalId = generateTrainerId();
    let currentIndex = 0;
    const interval = 50; // Speed of animation in milliseconds

    trainerIdElement.textContent = 'Generating...';
    
    const animation = setInterval(() => {
        if (currentIndex < finalId.length) {
            trainerIdElement.textContent = finalId.substring(0, currentIndex + 1);
            currentIndex++;
        } else {
            clearInterval(animation);
            trainerIdElement.textContent = finalId;
        }
    }, interval);
}

document.addEventListener('DOMContentLoaded', () => {
    animateTrainerId();
});
