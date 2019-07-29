'use strict';
const contador = document.querySelector('.tries');
const containNumber = document.querySelector('.contain');
const btn = document.querySelector('.btn');
const pistaContainer = document.querySelector('.pista');
const tries = document.querySelector('.tries');
let numberTries = 0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);

function checkNumber() {

    const input = parseInt(containNumber.value);
    console.log('El numero introducido es ', input);
    if (input > myRandomNumber) {
        console.log(pistaContainer.innerHTML = 'Demasiado alto');
        numberTries = numberTries + 1;
        tries.innerHTML = numberTries;
    } else if (input === myRandomNumber) {
        pistaContainer.innerHTML = '¡HAS GANADO, CAMPEONA!';
        tries.innerHTML = numberTries;
    } else {
        pistaContainer.innerHTML = 'Demasiado bajo';
        numberTries = numberTries + 1;
        tries.innerHTML = numberTries;
    }

}

btn.addEventListener('click', checkNumber);