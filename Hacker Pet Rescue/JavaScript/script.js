let score = 0;
let timeLeft = 20;
let gameActive = true;
const pets = document.querySelectorAll('.pet-runner');

// Função para mover os pets para lugares aleatórios
function movePets() {
    if (!gameActive) return;

    pets.forEach(pet => {
        if (!pet.classList.contains('captured')) {
            // Gera coordenadas aleatórias baseadas no tamanho da tela
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 150) + 100;
            
            pet.style.left = `${x}px`;
            pet.style.top = `${y}px`;
            
            // Inverte o lado do emoji dependendo da direção
            const direction = Math.random() > 0.5 ? 1 : -1;
            pet.style.transform = `scaleX(${direction})`;
        }
    });
}

// Timer do jogo
const timerInterval = setInterval(() => {
    if (gameActive) {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) endGame(false);
    }
}, 1000);

// Move os pets a cada 600ms (ajuste para ficar mais difícil ou fácil)
const moveInterval = setInterval(movePets, 600);

// Captura do pet
pets.forEach(pet => {
    pet.addEventListener('mousedown', () => {
        if (gameActive && !pet.classList.contains('captured')) {
            pet.classList.add('captured');
            score++;
            document.getElementById('score').innerText = score;
            
            if (score === pets.length) endGame(true);
        }
    });
});

function endGame(win) {
    gameActive = false;
    clearInterval(timerInterval);
    clearInterval(moveInterval);
    
    const modal = document.getElementById('game-modal');
    const title = document.getElementById('modal-title');
    const text = document.getElementById('modal-text');
    
    modal.style.display = 'flex';
    if (win) {
        title.innerText = "HACKER ELITE!";
        title.style.color = "var(--principal)";
        text.innerText = "Você capturou todos os pets antes do sistema cair!";
    } else {
        title.innerText = "SISTEMA CORROMPIDO";
        title.style.color = "var(--alerta)";
        text.innerText = "Tempo esgotado. Os pets fugiram pelo firewall.";
    }
}

function resetGame() {
    location.reload();
}

// Inicia os pets em posições aleatórias
movePets();