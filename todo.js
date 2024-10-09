"use strict";

// function to add a task
function addTask(task, taskList){
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
}

// function to clear the input field
function clearInput(inputField){
    inputField.value = "";

}

// alternate method to export
export function sayHelllo(){
    alert("Hello, World!");
}

// exporting function
export { addTask, clearInput };