const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

mouseEvent.addEventListener('mousemove', (e) => {
    console.log(e);
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y
})
