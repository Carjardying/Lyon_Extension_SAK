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


const toDoList = document.querySelector("#toDoTask");
const inProgressList = document.querySelector(".inProgressList");
const doneList = document.querySelector(".doneList");



function saveTheme(element) {
    let theme = document.createElement("p");
    theme.innerText = element ;
    theme.classList.add("themeClass");
    toDoList.appendChild(theme);
    console.log(theme);
}

function saveURL(element) {
    let url = document.createElement("p");
    url.innerText = element;
    url.classList.add("urlClass");
    toDoList.appendChild(url);
    console.log(url);
}

function saveDescription(element) {
    let description = document.createElement("p");
    description.innerText = element;
    description.classList.add("descriptionClass");
    console.log(description);
    toDoList.appendChild(description);
}

// saveButton.addEventListener("click", () => {
    
// })


/** **/
tasks.forEach((task) => {
    console.log(task.theme);
    saveTheme(task.theme);
    saveURL(task.url);
    saveDescription(task.description);
})