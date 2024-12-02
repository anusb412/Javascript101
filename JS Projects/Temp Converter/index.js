
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelisus = document.getElementById("toCelisus");
const result = document.getElementById("result");
let temp;


// F = (9/5)C + 32.

function convert() {
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "Fahrenheit";
    }
    else if (toCelisus.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "Celisus";
    }
    else {
        result.textContent = "SELECT A UNIT"
    }
}