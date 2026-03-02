const startBtn = document.getElementById('start-btn');
const layerBottom = document.getElementById('layer-bottom');
const layerMiddle = document.getElementById('layer-middle');
const layerTop = document.getElementById('layer-top');
const candle = document.getElementById('candle');
const textDisplay = document.getElementById('birthday-text');

startBtn.addEventListener('click', () => {
    // Hide the button
    startBtn.classList.add('hide');

    // 1. Drop the base layer
    setTimeout(() => { layerBottom.classList.add('drop-effect'); }, 200);
    
    // 2. Drop the middle layer
    setTimeout(() => { layerMiddle.classList.add('drop-effect'); }, 800);
    
    // 3. Drop the top layer
    setTimeout(() => { layerTop.classList.add('drop-effect'); }, 1400);
    
    // 4. Drop the candle
    setTimeout(() => { candle.classList.add('drop-effect'); }, 2000);

    // 5. Start typewriter text and confetti
    setTimeout(() => {
        textDisplay.innerText = "Happy Birthday!";
        textDisplay.classList.add('typewriter');
        launchConfetti();
    }, 2800);
});

function launchConfetti() {
    setInterval(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.width = Math.random() * 12 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.backgroundColor = ['#fff', '#ff4081', '#ffd700', '#c2185b'][Math.floor(Math.random() * 4)];
        confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
        document.getElementById('confetti-wrapper').appendChild(confetti);
        
        // Clean up memory
        setTimeout(() => confetti.remove(), 4000);
    }, 100);
}