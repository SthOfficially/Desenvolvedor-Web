function toggleMenu() {
    const nav = document.getElementById('nav-links');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '70px';
        nav.style.right = '0';
        nav.style.width = '100%';
        nav.style.background = '#F9F7F2';
        nav.style.textAlign = 'center';
        nav.style.padding = '20px 0';
        nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
    }
}