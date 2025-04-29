// init variables

const inProgressContainer = document.querySelector("#in-progress-container");
const doneContainer = document.querySelector("#done-container");
const toDoContainer = document.querySelector("#to-do-container");


// init functions

function showKanban() {
  chrome.storage.local.get("myTasks", (result) => {
    const currentTasks = result.myTasks || [];

    createTasks(currentTasks);
  });
}

function createTasks(currentTasks) {
  currentTasks.forEach((task) => {
    createNewTaskDiv(task);
  });
}

function createNewTaskDiv(task) {
  let newTask = document.createElement("div");

  newTask.classList.add("task");
  
  getTheme(newTask, task);
  getURL(newTask, task);
  getDescription(newTask, task);
  createStatusSelector(newTask);
  dispatchTask(newTask, task);
}

function dispatchTask(newTask, task) {
  if (task.status === "à faire") {
    toDoContainer.appendChild(newTask);
    newTask.classList.add("lightGreen");
  } else if (task.status === "en cours") {
    inProgressContainer.appendChild(newTask);
    newTask.classList.add("green");
  } else if (task.status === "terminé") {
    doneContainer.appendChild(newTask);
    newTask.classList.add("darkGreen");
  }
}

function getTheme(newTask, task) {
  let theme = document.createElement("span");

  theme.innerText = task.theme;
  theme.classList.add("theme");

  newTask.appendChild(theme);
}

function getURL(newTask, task) {
  let link = document.createElement("a");

  link.setAttribute("href", task.url);
  link.innerText = task.url;
  link.classList.add("link");

  newTask.appendChild(link);
}

function getDescription(newTask, task) {
  let description = document.createElement("span");
  let label = document.createElement("label");
  let textDescription = document.createElement("p");

  label.innerText = `Description :`;
  textDescription.innerText = task.description;
  textDescription.classList.add("description");

  description.appendChild(label);
  description.appendChild(textDescription);
  newTask.appendChild(description);
}

function createStatusSelector(newTask) {
  let statusSelector = document.createElement("select");
  let optionToDo = document.createElement("option");
  let optionInProgress = document.createElement("option");
  let optionDone = document.createElement("option");

  optionToDo.setAttribute("value", "à faire");
  optionInProgress.setAttribute("value", "en cours");
  optionDone.setAttribute("value", "terminé");

  optionToDo.innerText = "à faire";
  optionInProgress.innerText = "en cours";
  optionDone.innerText = "terminé";

  statusSelector.appendChild(optionToDo);
  statusSelector.appendChild(optionInProgress);
  statusSelector.appendChild(optionDone);

  newTask.appendChild(statusSelector);
}


// execute code

showKanban();

