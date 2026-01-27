const btnMobile = document.getElementById('mobile-btn');
const navMenu = document.getElementById('nav-menu');
const menuLinks = document.querySelectorAll('.menu a');
const header = document.querySelector('header');
// Adicionado .card-cert aqui para ganhar o efeito 3D
const cards = document.querySelectorAll('.card-projeto, .card-curso, .card-cert'); 
let lastScrollTop = 0;

// 1. Menu Responsivo (Hambúrguer)
btnMobile.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = btnMobile.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// 2. Sumir ao descer / Aparecer ao subir
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Só começa a esconder depois de 100px de scroll
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, { passive: true });

// 3. Rotação 3D dos Cards
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = (y - (rect.height / 2)) / 10;
        const rotateY = (x - (rect.width / 2)) / -10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
});

// 4. Scroll Suave + Círculo Ativo
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        menuLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        navMenu.classList.remove('active'); // Fecha menu no mobile
    });
});