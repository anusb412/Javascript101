
// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// Math.floor(Math.random() * (maxNum - minNum + 1)) // 1-100

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a Number between ${minNum} - ${maxNum}`)
    guess = Number(guess);
    if(isNaN(guess)){
        Window.alert("Please enter a Valid Number")
    }   
    else if(guess < minNum || guess > maxNum) {
        console.log("Please enter a Valid Number")
    }
    else {
        attempts++;
        if(guess < answer) {
            window.alert("TOO LOW! TRY AGAIN!")
        }
        else if(guess > answer) {
            window.alert("TOO HIGH! TRY AGAIN!")
        }
        else {
            window.alert(`CORRECT! The answer was ${answer}. It took ${attempts}`)
            running = false;
        }
    }
     
}