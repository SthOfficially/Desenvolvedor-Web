const SERVICES_URL = "https://sthofficially.github.io/Desenvolvedor-Web/CodeSth/";
const NUM_CLOUDS = 6;
let attempts = 0;
let luckyIndex = Math.floor(Math.random() * NUM_CLOUDS);
let gameSpeed = 1500;
let moveInterval;
let clouds = [];

function init() {
    const container = document.getElementById('game-container');
    for (let i = 0; i < NUM_CLOUDS; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.innerHTML = '☁️';
        cloud.dataset.id = i;
        
        // Posição inicial aleatória
        setRandomPos(cloud);
        
        cloud.onclick = (e) => handleCapture(e, i === luckyIndex);
        container.appendChild(cloud);
        clouds.push(cloud);
    }
    startMoving();
}

function setRandomPos(el) {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 120);
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
}

function startMoving() {
    clearInterval(moveInterval);
    moveInterval = setInterval(() => {
        clouds.forEach(setRandomPos);
    }, gameSpeed);
}

function handleCapture(e, isLucky) {
    const cloud = e.target;
    if (cloud.style.opacity === "0") return;

    attempts++;
    document.getElementById('attempts').innerText = attempts;
    
    // Efeito de Chuva
    spawnRain(cloud.offsetLeft, cloud.offsetTop, isLucky);

    if (isLucky) {
        clearInterval(moveInterval);
        document.getElementById('status-text').innerText = "SUCCESS";
        document.getElementById('game-modal').classList.add('flex');
    } else {
        cloud.style.opacity = "0";
        cloud.style.pointerEvents = "none";
        // DIFICULTAR: Acelera o movimento a cada erro
        gameSpeed = Math.max(400, gameSpeed - 300);
        document.getElementById('status-text').innerText = "SPEED UP!";
        startMoving();
    }
}

function spawnRain(x, y, isLucky) {
    for (let i = 0; i < 40; i++) {
        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.left = (x + 50 + Math.random() * 60) + 'px';
        drop.style.top = (y + 40) + 'px';
        drop.style.backgroundColor = isLucky ? '#ff007a' : '#32e7de';
        drop.style.boxShadow = `0 0 5px ${isLucky ? '#ff007a' : '#32e7de'}`;
        drop.style.animationDelay = (Math.random() * 0.5) + 's';
        document.body.appendChild(drop);
        
        setTimeout(() => drop.remove(), 1000);
    }
}

function goToServices() {
    window.location.href = SERVICES_URL;
}

init();