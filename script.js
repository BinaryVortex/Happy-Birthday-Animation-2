const confettiContainer = document.querySelector('.confetti-container');
const confettiColors = ['#ff4500', '#ff8c00', '#32cd32', '#1e90ff', '#ba55d3', '#fff'];

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confettiContainer.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

setInterval(createConfetti, 100);
