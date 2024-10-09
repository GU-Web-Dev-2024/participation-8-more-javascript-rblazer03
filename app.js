"use strict";

// import modules
import { addTask, clearInput } from "./todo";
import { saveTasks,loadTask } from "./storage";

// import * as storage from "./storage.js"

// setup DOM references
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");

// load tasks from local storage
const tasks = loadTasks();

// add event listener for new task
addTaskButton.addEventListener("click", ()=>{
    const task = newTaskInput.value.trim();
    tasks.push(task);
    saveTasks(tasks);
    clearInput(newTaskInput);
});

