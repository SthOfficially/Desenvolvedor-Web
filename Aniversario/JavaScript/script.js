const playBtn = document.getElementById('play-button');
const layers = document.querySelectorAll('.layer');
const candle = document.querySelector('.candle');
const text = document.getElementById('birthday-text');

playBtn.addEventListener('click', () => {
    playBtn.classList.add('hide'); // Esconde o botão

    // 1. Faz as camadas do bolo caírem com atraso (delay)
    layers.forEach((layer, index) => {
        setTimeout(() => {
            layer.classList.remove('hidden-slice');
            layer.classList.add('drop-animation');
        }, index * 500); // 500ms entre cada fatia
    });

    // 2. Aparece a vela depois das fatias
    setTimeout(() => {
        candle.style.opacity = '1';
    }, 1500);

    // 3. Escreve a frase
    setTimeout(() => {
        text.innerText = "Feliz Aniversário!";
        text.classList.add('typing-animation');
        startConfetti(); // Começa os confetes
    }, 2000);
});

// Lógica de Confetes
function startConfetti() {
    setInterval(() => {
        const c = document.createElement('div');
        c.classList.add('confetti');
        c.style.left = Math.random() * 100 + 'vw';
        c.style.backgroundColor = ['#f48fb1', '#ffeb3b', '#ffffff'][Math.floor(Math.random()*3)];
        const size = Math.random() * 10 + 5 + 'px';
        c.style.width = size; c.style.height = size;
        c.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.getElementById('confetti-container').appendChild(c);
        setTimeout(() => c.remove(), 5000);
    }, 100);
}