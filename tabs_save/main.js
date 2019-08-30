
downloadDir = "DL/Chrome/Zilo/"

function basename(path) {
     return path.replace(/.*\//, '');
}

// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  parent = chrome.contextMenus.create(
    {
      "title": "Save Tabs",
      "contexts": ["all"],
      "id": "saveTabs"
   });
  child1 = chrome.contextMenus.create(
    {
      "title": "Save",
      "contexts": ["all"],
      "parentId": parent,
      "id": "save"
     });
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(tabs) {
  tab1 = chrome.tabs.query(
    {
      'currentWindow': true
    },
    selectedTabs);
}

function selectedTabs(tabs) {
  tabs.forEach(function(tab) {
    //console.log(tab.url);
    //console.log(basename(tab.url));
    //console.log(downloadDir);
    chrome.downloads.download(
      {
        url: tab.url,
        filename: downloadDir + basename(tab.url),
        saveAs: false
      });
  });
}


/*
chrome.tabs.getSelected(tabId, function(){
  console.log("Tab ID: " + tabId);
})
*/
