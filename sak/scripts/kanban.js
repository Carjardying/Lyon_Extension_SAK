/** INIT VARIABLES **/

const inProgressContainer = document.querySelector("#in-progress-container");
const doneContainer = document.querySelector("#done-container");
const toDoContainer = document.querySelector("#to-do-container");

/** INIT FUNCTIONS **/

function getChromeStorage() {
  chrome.storage.local.get("myTasks", (result) => {
    const currentTasks = result.myTasks || [];
    console.log("get chrome storage se lance" + currentTasks); //vérifier que chrome storage fonctionne

    return currentTasks;
  });
}

function createNewTaskDiv() {
  let newTask = document.createElement("div");
  newTask.classList.add("task lightGreen");
  toDoContainer.appendChild(newTask);
  return newTask;
}

function saveTheme(taskHTML, element) {
  let theme = document.createElement("span");
  theme.innerText = element;
  theme.classList.add("theme");
  taskHTML.appendChild(theme);
}

function saveURL(taskHTML, element) {
  let link = document.createElement("span");
  link.innerText = element;
  link.classList.add("link");
  taskHTML.appendChild(link);
}

function saveDescription(taskHTML, element) {
  let description = document.createElement("span");
  description.innerText = `Description :\n${element}`;
  description.classList.add("description");
  taskHTML.appendChild(description);

}

function addTaskToContainer(tasksObject) {
  tasksObject.forEach((task) => {
    let newTask = createNewTaskDiv();
    console.log(newTask, task.theme); //console.log
    saveTheme(newTask, task.theme);
    saveURL(newTask, task.url);
    saveDescription(newTask, task.description);
  });
}

/** EXECUTE CODE **/

const tasksObject = getChromeStorage();
addTaskToContainer(tasksObject);