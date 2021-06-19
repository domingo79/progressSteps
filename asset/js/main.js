// seleziono i miei id e la classe cicle 
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

//aggiungo e controllo l'evento click fino a circles.length
next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
    console.log(currentActive);
});

// diminuisco il currentActive fino a 1
prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }
    // collego le 2 funzioni con update()
    update()
    console.log(currentActive);
})

// funzione update per ciclare le classi circles con class active per il colore dei pallini
function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
    // qui mi occupo della progressione della linea 
    const actives = document.querySelectorAll('.active');
    // converto il console.log() in progress.style.width
    // console.log((actives.length / circles.length) * 100);
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    // condizione per il bottore prev next 
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}