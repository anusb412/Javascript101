
function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1; // generates num 1-5
        values.push(value);                              // adds num to array
        images.push(`<img src="dice_images/${value}.png">`) //add imgs to array
    }

    // displays nums and pics 
    diceResult.textContent = `dice ${values.join(", ")}` 
    diceImages.innerHTML = images.join("");
}