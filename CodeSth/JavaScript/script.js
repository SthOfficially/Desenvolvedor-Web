/* ==========================================================================
   LÓGICA CODESTH - BLINDAGEM & TECNOLOGIA
   ========================================================================== */

const btnMobile = document.getElementById('mobile-btn');
const navMenu = document.getElementById('nav-menu');
const menuLinks = document.querySelectorAll('.menu a');
const header = document.querySelector('header');
// Seleciona todos os cards para o efeito 3D (Projetos, Cursos e Certificados)
const cards = document.querySelectorAll('.card-projeto, .card-curso, .card-cert'); 
let lastScrollTop = 0;

// 1. Menu Responsivo (Hambúrguer)
btnMobile.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = btnMobile.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// 2. Header Inteligente (Sumir ao descer / Aparecer ao subir)
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, { passive: true });

// 3. Efeito de Rotação 3D nos Cards (Hacker Style)
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

// 4. Scroll Suave + Gerenciamento de Classe Ativa
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Se for um link interno (#), aplica scroll suave
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }

        // Atualiza classe ativa e fecha menu mobile
        menuLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        navMenu.classList.remove('active');
        
        // Reseta o ícone do menu mobile
        const icon = btnMobile.querySelector('i');
        if(icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});

// 5. Proteção de Imagem (Evita cópia direta dos Certificados)
document.querySelectorAll('.cert-foto').forEach(img => {
    img.addEventListener('contextmenu', e => e.preventDefault());
    img.addEventListener('dragstart', e => e.preventDefault());
});