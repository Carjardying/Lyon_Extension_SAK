// rajouter chrome storage

let tasks = [
    {
        id: 1,
        status: "a faire",
        url: "https://www.equipe.fr",
        theme: "sport",
        description: "lire article rugby"
    },
    {
        id: 2,
        status: "a faire",
        url: "https://www.darty.fr",
        theme: "achat",
        description: "commander aspirateur dyson"
    },
];

const todoList = document.querySelector(".todoList");
const inProgressList = document.querySelector(".inProgressList");
const doneList = document.querySelector(".doneList");

// const saveButton = document.querySelector("#send-button");

function saveTheme(element) {
    let theme = document.createElement("p");
    theme.innerText = element;
    todoList.appendChild(theme);
    theme.classList.add("themeClass");
}

function saveURL(element) {
    let url = document.createElement("p");
    url.innerText = element;
    todoList.appendChild(url);
    url.classList.add("urlClass");
}

function saveDescription(element) {
    let description = document.createElement("p");
    description.innerText = element;
    todoList.appendChild(description);
    description.classList.add("descriptionClass");
}

console.log(tasks);

tasks.forEach((task) => {
    console.log(task.theme);
    saveTheme(task.theme);
    saveURL(task.url);
    saveDescription(task.description);
})


// saveButton.addEventListener("click", () => {
// })

// const newTask = document.createElement("div");
//   newTask.innerText = "Je suis une nouvelle tache";
// //   newTaskZone.appendChild(newTask);
//   console.log("ok envoi");
