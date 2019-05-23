const mazo = document.querySelectorAll('.carta');

function rotarCarta () {
    this.classList.toggle('rotar');
}
mazo.forEach(carta => carta.addEventListener('click', rotarCarta));

