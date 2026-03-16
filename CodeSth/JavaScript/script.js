// 1. Controle do Menu Mobile
const btnMobile = document.getElementById('mobile-btn');
    const navMenu = document.getElementById('nav-menu');

    function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault();
        navMenu.classList.toggle('active');
        
        // Melhora a acessibilidade (opcional)
        const active = navMenu.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', active);
    }

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);

    // 2. Fechar o menu ao clicar em qualquer link (importante para mobile)
    const linksInternos = document.querySelectorAll('#nav-menu a');

    linksInternos.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 3. Efeito no Header ao rolar a página (Sticky Header)
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(50, 231, 222, 0.2)';
            header.style.padding = '10px 0'; // Dá um efeito de "encolher"
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
            header.style.boxShadow = 'none';
            header.style.padding = '15px 0';
        }
    });

    // 4. Animação simples de entrada (Fade-in) nos cards ao rolar
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

document.querySelectorAll('.card-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});