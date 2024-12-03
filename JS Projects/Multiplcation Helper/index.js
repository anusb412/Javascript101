const score = document.getElementById("score");
const input = parseFloat(document.getElementById("input").value);
const submit = document.getElementById("submit");

const x =  Math.floor(Math.random() * 10) + 1;
const y = Math.floor(Math.random() * 10) + 1;

let question = `What is ${x} Multiplied by ${y}?`;


