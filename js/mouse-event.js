const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const mouseMove = document.getElementById('mouseMove');
const container = document.querySelector('.mouseEventContainer');
const coord = document.querySelector('.coordinates');
// const tglBtn = document.getElementById('toggle-btn');
// const navBar = document.getElementById('navbar');




// ************* Affichage dynamique des coordonnées de la souris **********************

mouseEvent.addEventListener('mousemove', (e) => {
    // console.log(e);
    horizontal.innerHTML = e.pageX;
    vertical.innerHTML = e.pageY;
});




// ************** Modification du style du cercle de la souris *************************

function enter () {
    mouseMove.style.border = "3px solid var(--color5)";
    mouseMove.style.filter = "blur(1.1px)";
}

mouseEvent.addEventListener('mouseenter', enter);
container.addEventListener('mouseenter', enter);
horizontal.addEventListener('mouseenter', enter);
vertical.addEventListener('mouseenter', enter);
coord.addEventListener('mouseenter', enter);


mouseEvent.addEventListener('mouseout', () => {
    mouseMove.style.border = "3px solid var(--color3)";
    mouseMove.style.filter = "blur(0)";
});

window.addEventListener('mousemove', (e) => {
    mouseMove.style.left = e.pageX + "px";
    mouseMove.style.top = e.pageY + "px";
    mouseMove.style.visibility = "visible";
    mouseMove.style.transform = "translate(-50%, -50%)";
    
});



// ************* Cache le cercle de la souris sur hover de la navbar et son bouton ***************

tglBtn.addEventListener('mouseover', () => {
    mouseMove.style.opacity = '0';
});

tglBtn.addEventListener('mouseout', () => {
    mouseMove.style.opacity = '1';
})

navBar.addEventListener('mouseover', () => {
    mouseMove.style.opacity = '0';
});

navBar.addEventListener('mouseout', () => {
    mouseMove.style.opacity = '1';
})