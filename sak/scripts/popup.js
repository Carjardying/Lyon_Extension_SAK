const mainPage = document.querySelector('#main-page');
const addingPage = document.querySelector('#adding-page');
const goToButton = document.querySelector('#go-to-button');
const addButton = document.querySelector('#add-button');
const sendButton = document.querySelector('#send-button');
const closeButton = document.querySelector('#close-button');

goToButton.addEventListener("click", (tab) => {
    chrome.tabs.create({
        // changer url pour kanban.html
        url: "https://morgan.corroyer.fr/" 
    });
});

addButton.addEventListener("click", () => {
    mainPage.style.display = "none";
    addingPage.style.display = "block";
});

closeButton.addEventListener("click", () => {
    mainPage.style.display = "block";
    addingPage.style.display = "none";
});

sendButton.addEventListener("click", () => {
    // faire code ...
    console.log("ok envoi");
});