const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  menu.classList.toggle('show');
});

// Animação ao rolar
const sections = document.querySelectorAll('section');

function mostrarSecao() {
  const gatilho = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const topo = sec.getBoundingClientRect().top;
    if (topo < gatilho) {
      sec.classList.add('show');
    }
  });
}
window.addEventListener('scroll', mostrarSecao);
mostrarSecao(); // Chama a função ao carregar a página para mostrar seções já visíveis