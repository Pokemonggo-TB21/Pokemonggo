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
