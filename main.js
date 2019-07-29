'use strict';
const contador = document.querySelector('.tries');
const containNumber = document.querySelector('.contain');
const btn = document.querySelector('.btn');
const pistaContainer = document.querySelector('.pista');
const tries = document.querySelector('.tries');
let numberTries = 1;

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// Anda, chacho, píntame en la consola un número random hasta 100;
const myRandomNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${myRandomNumber}`);
function checkNumber() {
    // Recoger el valor del input
    const input = parseInt(containNumber.value);
    //Comprobar que el contenido del input es un numero
    
    console.log('El numero introducido es ',input);
    // Comprobar si el input es mayor que myRandomNumber
    if (input > myRandomNumber ){
        //Escribir en pista 
         console.log(pistaContainer.innerHTML = 'Demasiado alto');
       
        tries.innerHTML = numberTries;
         //Sumar contador
         numberTries = numberTries + 1;
         //Escribir en tries el valor contador

    } //Comprobar si el input es menor que myRandomNumber
    else if(input < myRandomNumber){
         //Escribir en pista 
         pistaContainer.innerHTML = 'Demasiado bajo';
        //Escribir en tries el valor contador
        tries.innerHTML = numberTries;
         //Sumar contador
         numberTries = numberTries+1;
    }else{
        //Escribir en pista 
        pistaContainer.innerHTML = '¡HAS GANADO, CAMPEONA!';
        //Escribir en tries el valor contador
        tries.innerHTML = numberTries;
        
    }
    //Comprobar si el input es mayor que myRandomNumber
    // Comprobar si el input es igual a myRandomNumber
}
//Crear el Listener al Btn cuando hace click
btn.addEventListener('click', checkNumber);