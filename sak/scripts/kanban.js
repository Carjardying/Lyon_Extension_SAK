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
    createNewTaskDiv(task, currentTasks);
  });
}

function createNewTaskDiv(task, currentTasks) {
  let newTask = document.createElement("div");
  let themeAndSelect = document.createElement("div");

  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true"); // donne l'attribut "draggable" sur les divs
  newTask.classList.add("draggable"); //ajoute la class "draggable" aux divs tasks
  themeAndSelect.classList.add("themeAndSelect");

  getTheme(themeAndSelect, task);
  createStatusSelector(newTask, task, currentTasks, themeAndSelect);
  newTask.appendChild(themeAndSelect);
  getURL(newTask, task);
  getDescription(newTask, task);
  dispatchTask(newTask, task);
}
/**------------------------ TEST DRAG AND DROP ----------------------- **/
const listDraggables = document.querySelectorAll(".draggable");
const target = document.querySelector(".dropzone-test");

for (const listDraggable of listDraggables) {
  listDraggable.addEventListener("dragstart", dragStart);
}

target.addEventListener("dragover", dragOver);
target.addEventListener("drop", drop);

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const itemId = event.dataTransfer.getData("text/plain");
  const item = document.getElementById(itemId);
  target.appendChild(item);
}

/**------------------------ TEST DRAG AND DROP ----------------------- **/

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

function getTheme(themeAndSelect, task) {
  let theme = document.createElement("span");

  theme.innerText = task.theme;
  theme.classList.add("theme");

  themeAndSelect.appendChild(theme);
}

function getURL(newTask, task) {
  let link = document.createElement("a");

  link.setAttribute("href", task.url);
  link.setAttribute("target", "_blank");
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

function createStatusSelector(newTask, task, currentTasks, themeAndSelect) {
  let statusSelector = document.createElement("select");
  let optionDefault = document.createElement("option");
  let optionToDo = document.createElement("option");
  let optionInProgress = document.createElement("option");
  let optionDone = document.createElement("option");

  optionToDo.value = "à faire";
  optionInProgress.value = "en cours";
  optionDone.value = "terminé";

  optionDefault.innerText = "Changer status";
  optionToDo.innerText = "à faire";
  optionInProgress.innerText = "en cours";
  optionDone.innerText = "terminé";

  statusSelector.appendChild(optionDefault);
  statusSelector.appendChild(optionToDo);
  statusSelector.appendChild(optionInProgress);
  statusSelector.appendChild(optionDone);
  themeAndSelect.appendChild(statusSelector);

  changeStatus(newTask, task, statusSelector, currentTasks);
}

function changeStatus(newTask, task, statusSelector, currentTasks) {
  statusSelector.addEventListener("change", () => {
    task.status = statusSelector.value;
    newTask.classList.remove("lightGreen", "green", "darkGreen");
    dispatchTask(newTask, task, statusSelector);
    chrome.storage.local.set({ myTasks: currentTasks });
  });
}

// execute code

showKanban();
