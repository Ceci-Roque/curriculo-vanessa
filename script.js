function toggleMode() {
    const body = document.body;
    const isDarkMode = body.classList.contains('modo-escuro');

    if (isDarkMode) {
        body.classList.remove('modo-escuro');
        body.classList.add('modo-claro');
        localStorage.setItem('modo', 'claro');
    } else {
        body.classList.remove('modo-claro');
        body.classList.add('modo-escuro');
        localStorage.setItem('modo', 'escuro');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const savedMode = localStorage.getItem('modo');
    const body = document.body;

    if (savedMode === 'escuro') {
        body.classList.add('modo-escuro');
    } else {
        body.classList.add('modo-claro');
    }
});

document.getElementById('toggle-btn')?.addEventListener('click', toggleMode);

const elementosAnimados = document.querySelectorAll('.animado');

function animaElementos() {
    const janelaAltura = window.innerHeight;
    elementosAnimados.forEach((elemento) => {
        const distanciaElemento = elemento.getBoundingClientRect().top;

        if (distanciaElemento < janelaAltura - 100) {
            elemento.classList.add('visivel');
        }
    });
}

window.addEventListener('scroll', animaElementos);
animaElementos();

const botaoVoltarTopo = document.getElementById('voltar-topo');
botaoVoltarTopo.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function () {
    const botaoVoltarTopo = document.getElementById('voltar-topo');

    if (window.scrollY > 100) {
        botaoVoltarTopo.classList.add('visivel');
    } else {
        botaoVoltarTopo.classList.remove('visivel');
    }
});