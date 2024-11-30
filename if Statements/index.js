//IF STATEMENTS = if a condition is true, execute some code.
// iF not doing something else.

const submitButton = document.getElementById("mySubmit");
const inp = document.getElementById("myText");
const result = document.getElementById("resultElement");
let age;

submitButton.onclick = function(){
    age = inp.value;
    age = Number(age);
    if(age >= 100) {
        result.textContent = `You are TOO OLD for this site`
    }
    else if(age == 0) {
        result.textContent = `You can't enter. YOu were just born`
    }
    
    else if(age >= 18) {
        result.textContent = `You are Old enough to enter this site`
    }
    else if(age < 0) {
        result.textContent = `Your age can't be below 0`
    }
    else {
        result.textContent = `You must be 18 to enter this site.`
    }
}





