const buttons = document.querySelectorAll('.btn-calc');
const result = document.getElementById('result');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        result.textContent += e.target.id;
    })
});

equal.addEventListener('click', () => {
    result.textContent = eval(result.textContent);
});

clear.addEventListener('click', () => {
    result.textContent = "";
});