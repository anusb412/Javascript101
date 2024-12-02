const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let list = [];

function addTask() {
    let newLi = document.createElement("li").
    newLi.textContent = taskInput.value;
    taskList.appendChild(newLi)
    taskInput.value = ""
}
