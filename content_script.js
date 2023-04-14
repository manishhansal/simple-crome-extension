// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "replaceCatsWithDogs") {
    // Replace all instances of "cat" with "dog" on the current tab
    chrome.tabs.executeScript({
      code: "document.body.innerHTML = document.body.innerHTML.replace(/cat/gi, 'dog');",
    });
  } else if (message.action === "replaceDogsWithCats") {
    // Replace all instances of "cat" with "dog" on the current tab
    chrome.tabs.executeScript({
      code: "document.body.innerHTML = document.body.innerHTML.replace(/dog/gi, 'cat');",
    });
  }
});
