const tglBtn = document.getElementById('toggle-btn');
const navBar = document.getElementById('navbar');

tglBtn.addEventListener('click', showNavBar);

function showNavBar(){
    navBar.classList.toggle('active');
}

const content = document.querySelector('.content');

content.addEventListener('click', () => {
    navBar.classList.remove('active');
});

