// 1. Efeito de Scroll Suave para os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Animação simples de fundo no Canvas (Partículas Tech)
const canvas = document.getElementById('dog-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.01;
    }
    draw() {
        ctx.fillStyle = '#00f2ff33';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.3) {
            particles.splice(i, 1);
            i--;
            particles.push(new Particle());
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

// Inicializa partículas
for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
}
animate();

// 3. Header dinâmico (muda cor ao rolar)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 11, 16, 0.95)';
        header.style.padding = '0.5rem 0';
    } else {
        header.style.background = 'rgba(10, 11, 16, 0.8)';
        header.style.padding = '1rem 0';
    }
});