/** INIT VARIABLES **/

const inProgressContainer = document.querySelector("#in-progress-container");
const doneContainer = document.querySelector("#done-container");
const toDoContainer = document.querySelector("#to-do-container");

/** INIT FUNCTIONS **/

function getChromeStorage() {
  chrome.storage.local.get("myTasks", (result) => {
    const currentTasks = result.myTasks || [];
    addTaskToContainer(currentTasks);
  });
}

function createNewTaskDiv(task) {
  let newTask = document.createElement("div");

  newTask.classList.add("task");
  newTask.classList.add("lightGreen");

  getTheme(newTask, task);
  getURL(newTask, task);
  getDescription(newTask, task);

  toDoContainer.appendChild(newTask);
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

function addTaskToContainer(currentTasks) {
  currentTasks.forEach((task) => {
    createNewTaskDiv(task);
  });
}

/** EXECUTE CODE **/
getChromeStorage();
