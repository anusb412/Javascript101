// How to Accept user input

// 1. EASY WAY = Window Prompt
// 2. PROFESSIONAL WAY = HTML textbox

let username;

//username = window.prompt("What's YOur Username?")

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}