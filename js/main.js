// let bigNumber = document.querySelector('h1');
let plusButton = document.getElementById('plus-button');
let minusButton = document.getElementById('minus-button');
// let textField = document.getElementById('text-box');

function addNumber() {
    let i = document.querySelector('input').value;
    let x = document.querySelector('h1').textContent;
    let y = i + x;
    document.querySelector('h1').textContent = y;
    return;
}
plusButton.addEventListener('click', addNumber);

function subtractNumber() {
    let i = document.querySelector('input').value;
    let x = document.querySelector('h1').textContent;
    let y = x - i;
    document.querySelector('h1').textContent = y;
    return;
}
minusButton.addEventListener('click', subtractNumber);