// Send a message to the background script to replace all instances of "cat" with "dog"

const replaceButton1 = document.getElementById("replaceButton1");
const replaceButton2 = document.getElementById("replaceButton2");
const sendMessage1 = () => {
  chrome.runtime.sendMessage({ action: "replaceCatsWithDogs" });
};
const sendMessage2 = () => {
    chrome.runtime.sendMessage({ action: "replaceDogsWithCats" });
};
    
replaceButton1.addEventListener("click", sendMessage1);
replaceButton2.addEventListener("click", sendMessage2);

