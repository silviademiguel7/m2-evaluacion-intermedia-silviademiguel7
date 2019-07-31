'use strict';
const contador = document.querySelector('.tries');
const containNumber = document.querySelector('.contain');
const btn = document.querySelector('.btn');
const pistaContainer = document.querySelector('.pista');
const tries = document.querySelector('.tries');
let numberTries = 0;
const btnReset = document.querySelector('.btnreset');


function getRandomNumber(max) {
    
    return Math.ceil(Math.random() * max);
}

let myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);

function checkNumber() {
    const input = parseInt(containNumber.value);
    if (containNumber.value.length === 0) {
        pistaContainer.innerHTML = 'Debes introducir un numero entre 0 y 100';
    } else {
        console.log('El numero introducido es ', input);
        if (input > myRandomNumber) {
            if (input > 100) {
                pistaContainer.innerHTML = 'El numero no puede ser mayor que 100';
            } else {
                console.log(pistaContainer.innerHTML = 'Demasiado alto');
                numberTries = numberTries + 1;
                tries.innerHTML = numberTries;
            }
        } 
        else if (input < myRandomNumber) {
            if (input < 0) {
                pistaContainer.innerHTML = 'El numero no puede ser menor que 0';
            } else {
                pistaContainer.innerHTML = 'Demasiado bajo';
                numberTries = numberTries + 1;
                tries.innerHTML = numberTries;  
            }
        } else {
            pistaContainer.innerHTML = '¡HAS GANADO, CAMPEONA!';
            tries.innerHTML = numberTries;
        }
    } 
}

function resetPlay(e) {
    tries.innerHTML = 0;
    numberTries = 0;
    pistaContainer.innerHTML = 'Escribe un numero y dale a Prueba';
    containNumber.value = '';
    myRandomNumber=getRandomNumber(100);
    console.log(`Mi número aleatorio es ${myRandomNumber}`);
}

btn.addEventListener('click', checkNumber);
btnReset.addEventListener('click', resetPlay);

