const canvas = document.getElementById('dog-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let animals = [];

class Animal {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.emoji = Math.random() > 0.5 ? '🐕' : '🐈';
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }

    draw() {
        ctx.globalAlpha = 0.15; // Bem clarinho para não atrapalhar
        ctx.font = '30px serif';
        ctx.fillText(this.emoji, this.x, this.y);
    }
}

function init() {
    for (let i = 0; i < 12; i++) {
        animals.push(new Animal());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    animals.forEach(a => {
        a.update();
        a.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();