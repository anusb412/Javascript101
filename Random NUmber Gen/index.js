// RANDOM NUMB GENERATOR

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

//random number between 50-100

const roll = document.getElementById("myButton");
const num = document.getElementById("myLabel");
const num1 = document.getElementById("myLabel1");
const num2 = document.getElementById("myLabel2");
const min = 1;
const max = 6;
let randomNumber;
let randomNumber1;
let randomNumber2;


roll.onclick = function() {
    randomNumber = Math.floor(Math.random() * max) + min;
    randomNumber1 = Math.floor(Math.random() * max) + min;
    randomNumber2 = Math.floor(Math.random() * max) + min;
    num.textContent = randomNumber;
    num1.textContent = randomNumber1;
    num2.textContent = randomNumber2;
}