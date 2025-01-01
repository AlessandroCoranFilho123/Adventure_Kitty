const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeToggle.textContent = 'Modo Escuro';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeToggle.textContent = 'Modo Claro';
    }
});

body.classList.add('dark-mode');