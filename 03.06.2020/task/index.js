import { renderTasks, tasks } from "./render.js"
import { createTask } from "./createTask.js"
import { updateTask } from "./updateTask.js"

renderTasks(tasks)

const createBtn = document.querySelector(".create-task-btn")
createBtn.addEventListener("click", createTask);

const listElem = document.querySelector(".list");
listElem.addEventListener('click', updateTask)