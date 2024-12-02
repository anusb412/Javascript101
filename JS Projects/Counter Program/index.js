const de = document.getElementById("decreaseBtn");
const inc = document.getElementById("increaseBtn");
const re = document.getElementById("resetBtn");

const numb = document.getElementById("countLabel");

let count = 0;

de.onclick = function() {
    count--;
    numb.textContent = count;
}
inc.onclick = function() {
    count++;
    numb.textContent = count;
}
re.onclick = function() {
    count = 0;
    numb.textContent = count;
}