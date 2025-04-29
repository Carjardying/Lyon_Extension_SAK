/** INIT VARIABLES **/



// let tasks = [
//   {
//     id: 1,
//     status: "a faire",
//     url: "https://www.equipe.fr",
//     theme: "sport",
//     description: "lire article rugby",
//   },
//   {
//     id: 2,
//     status: "a faire",
//     url: "https://www.darty.fr",
//     theme: "achat",
//     description: "commander aspirateur dyson",
//   },
// ];

const inProgressList = document.querySelector("#inProgressList");
const doneList = document.querySelector("#doneList");
const toDoContainer = document.querySelector("#toDoContainer");

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
  newTask.setAttribute("id", "toDoTask");
  newTask.setAttribute("class", "toDoTask");
  toDoContainer.appendChild(newTask);
  return newTask;
}

function saveTheme(taskHTML, element) {
  let theme = document.createElement("p");
  theme.innerText = `Thème :\n ${element}`;
  taskHTML.appendChild(theme);
  theme.classList.add("themeClass");
}

function saveURL(taskHTML, element) {
  let url = document.createElement("p");
  url.innerText = `URL : ${element}`;
  taskHTML.appendChild(url);
  url.classList.add("urlClass");
}

function saveDescription(taskHTML, element) {
  let description = document.createElement("p");
  description.innerText = `Description :\n ${element}`;
  taskHTML.appendChild(description);
  description.classList.add("descriptionClass");
}

function addTaskToContainer() {
  const tasksObject = getChromeStorage();
  tasksObject.forEach((task) => {
    let newTask = createNewTaskDiv();
    console.log(newTask, task.theme); //console.log

    saveTheme(newTask, task.theme);
    saveURL(newTask, task.url);
    saveDescription(newTask, task.description);
  });
}

/** EXECUTE CODE **/

addTaskToContainer();
