/************************* Keypress Event ************************ */

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');
const bravo = document.querySelector('.bravo');

const ring = (key) => {
    const audio = new Audio();
    audio.src = './assets/ring/' + key + '.mp3';
    audio.play();
};

document.addEventListener('keypress', (e) => {
    key.textContent = e.key;
    if (e.key === 'i') {
        bravo.classList.add('active');
    } else {
        bravo.classList.remove('active');
    }

    if (e.key === "i") {
        ring(e.key);
    }
});


/************************* Scroll Event ************************ */

const scrollBar = document.getElementById('scrollBar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        scrollBar.style.top = 0; 
    } else {
        scrollBar.style.top = "-80px";
    }
});

/************************* Form Event ************************ */

const name = document.getElementById('name');
const select = document.getElementById('select');
const form = document.querySelector('.form');

let show = document.querySelector('.showForm');
let pseudo = "";
let language ="";

name.addEventListener('input', (e) => {
    pseudo = e.target.value;
});

select.addEventListener('input', (e) => {
    language = e.target.value;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (cg.checked) {
        show.innerHTML = `Le langage préféré de ${pseudo} est ${language} !`;
    } else {
        alert('Veuillez accepter les conditions générales');
    }
});