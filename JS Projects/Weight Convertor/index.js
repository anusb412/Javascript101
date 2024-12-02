const input = document.getElementById("input");
const result = document.getElementById("result");
const error = document.getElementById("error");



input.addEventListener('keypress', function(event) {
    if(event.key === "Enter"){
        let pounds = input.value * 0.45359237;
        result.textContent = pounds.toFixed(2);
    }
    else {
        result.textContent = " PRESS ENTER PLEASE"
    }

})