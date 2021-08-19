const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');
const bravo = document.querySelector('.bravo');

const ring = (key) => {
    const audio = new Audio();
    audio.src = './assets/ring/' + key + '.mp3';
    audio.play();
}

document.addEventListener('keypress', (e) => {
    key.textContent = e.key;
    if (e.key === 'i') {
        bravo.classList.add('active');
    } else {
        bravo.classList.remove('active');
    }
    ring(e.key);
});

