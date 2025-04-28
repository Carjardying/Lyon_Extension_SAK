// rajouter chrome storage

let tasks = [
  {
    id: 1,
    status: "a faire",
    url: "https://www.equipe.fr",
    theme: "sport",
    description: "lire article rugby",
  },
  {
    id: 2,
    status: "a faire",
    url: "https://www.darty.fr",
    theme: "achat",
    description: "commander aspirateur dyson",
  },
];

const inProgressList = document.querySelector("#inProgressList");
const doneList = document.querySelector("#doneList");
const toDoContainer = document.querySelector("#toDoContainer");

/** CREATION DIVS **/
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

// saveButton.addEventListener("click", () => {

// })
 
/** AFFICHE LE TABLEAU DE TACHE **/
function addTaskToContainer () {
    tasks.forEach((task) => {
        let newTask = createNewTaskDiv();
        console.log(task.theme);
        saveTheme(newTask, task.theme);
        saveURL(newTask, task.url);
        saveDescription(newTask, task.description);
      });
}

addTaskToContainer();
