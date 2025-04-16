const openButton = document.querySelector('#open-button');

openButton.addEventListener("click", (tab) => {
    chrome.tabs.create({
        url: "https://morgan.corroyer.fr/"
    });
});