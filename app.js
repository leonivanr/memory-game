const mazo = document.querySelectorAll('.carta');
let hayCartaVolteada = bloquearTablero = false;
let primeraCarta, segundaCarta;

mazo.forEach(carta => carta.addEventListener('click', rotarCarta));

mazo.forEach(carta => {
    const posicionAleatoria = Math.floor(Math.random() * mazo.length)
    carta.style.order = posicionAleatoria;
});

function rotarCarta() {
    if (bloquearTablero) {
        return;
    }
    if (this === primeraCarta) {
        return;
    }

    this.classList.add('rotar');

    if (!hayCartaVolteada) {
        hayCartaVolteada = true;
        primeraCarta = this;
        return;
    }
    segundaCarta = this;
    hayCartaVolteada = false;

    chequearCoincidencia();
}

function chequearCoincidencia() {
    let coinciden = primeraCarta.getAttribute('data-framework') === segundaCarta.getAttribute('data-framework');
    coinciden ? desactivarCartas() : resetearCartas();
}

function desactivarCartas() {
    primeraCarta.addEventListener('click', rotarCarta);
    segundaCarta.addEventListener('click', rotarCarta);

    resetearTablero();
}
// Vuelven a estado originial si no encuentran coincidencia.
function resetearCartas() {
    bloquearTablero = true;

    setTimeout(() => {
        primeraCarta.classList.remove('rotar');
        segundaCarta.classList.remove('rotar');

        resetearTablero();
    }, 1000);

}

function resetearTablero() {
    hayCartaVolteada = bloquearTablero = false;
    primeraCarta = segundaCarta = false;
}

