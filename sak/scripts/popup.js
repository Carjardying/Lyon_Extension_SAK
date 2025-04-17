const mainPage = document.querySelector("#main-page");
const addingPage = document.querySelector("#adding-page");
const goToButton = document.querySelector("#go-to-button");
const addButton = document.querySelector("#add-button");
const sendButton = document.querySelector("#send-button");
const closeButton = document.querySelector("#close-button");
const tabUrl = document.querySelector("#tab-url");
const topicInput = document.querySelector("#topic");
const descriptioninput = document.querySelector("#description");
const newTaskZone = document.querySelector("#toDoTask");

goToButton.addEventListener("click", (tab) => {
  // ouvre la page kanban dans un nouvel onglet
  chrome.tabs.create({
    url: "kanban.html",
  });
});

addButton.addEventListener("click", () => {
  // crée la nouvelle "page" pour enregistrer les informations nécéssaires pour creer le nouveau block
  mainPage.style.display = "none";
  addingPage.style.display = "block";
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    const url = currentTab.url;

    tabUrl.textContent = url;
  });
});

closeButton.addEventListener("click", () => {
  mainPage.style.display = "block";
  addingPage.style.display = "none";
});

sendButton.addEventListener("click", () => {
  // créer le bloc dans le chromeStorage grâce aux infos fournies dans le addbutton
  // faire code ...
});
