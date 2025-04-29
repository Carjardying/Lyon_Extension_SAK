// init variables

const mainPage = document.querySelector('#main-page');
const addingPage = document.querySelector('#adding-page');
const goToButton = document.querySelector('#go-to-button');
const addButton = document.querySelector('#add-button');
const sendButton = document.querySelector('#send-button');
const closeButton = document.querySelector('#close-button');
const tabUrl = document.querySelector('#tab-url');
const topic = document.querySelector('#topic');
const description = document.querySelector('#description');
let tasks = [];


// init functions

function updateChromeStorage() {
    chrome.storage.local.get("myTasks", (result) => {
        if (result.myTasks) {
            chrome.storage.local.set({ myTasks: result.mytasks });
        } else {
            chrome.storage.local.set({ myTasks: tasks });
        }
    });
}

function getTabUrl() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        const url = currentTab.url;

        tabUrl.textContent = url;
    });
}

function addTask(newTask) {
    chrome.storage.local.get("myTasks", (result) => {
        const currentTasks = result.myTasks || [];

        currentTasks.push(newTask);
        chrome.storage.local.set({ myTasks: currentTasks });
    });
}


// execute code

updateChromeStorage();

goToButton.addEventListener("click", () => {
  chrome.tabs.create({
    url: "kanban.html",
  });
});

addButton.addEventListener("click", () => {
    mainPage.style.display = "none";
    addingPage.style.display = "block";
    getTabUrl();
});

closeButton.addEventListener("click", () => {
  mainPage.style.display = "block";
  addingPage.style.display = "none";
});

sendButton.addEventListener("click", () => {
    const newTask = {
        id: 1,
        status: "à faire",
        url: tabUrl.textContent,
        theme: topic.value,
        description: description.value
    }

    addTask(newTask);
    window.close();
});
