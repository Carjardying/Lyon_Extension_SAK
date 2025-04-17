const todoList = document.querySelector(".todoList");
const inProgressList = document.querySelector(".inProgressList");
const doneList = document.querySelector(".doneList");

const saveButton = document.querySelector(".saveButton");

function saveTheme(theme) {
    let theme = document.createElement("p");
    theme.innerText = "";
    theme.classList.add("themeClass");
    todoList.appendChild(theme);
}

function saveURL(url) {
    let url = document.createElement("p");
    url.innerText ="";
    url.classList.add("urlClass");
    todoList.appendChild(url);
}

function saveDescription(description) {
    let description = document.createElement("p");
    description.innerText = "";
    description.classList.add("descriptionClass");
    todoList.appendChild(description);
}

saveButton.addEventListener("click", () => {
    saveTheme();
    saveURL();
    saveDescription();
})
