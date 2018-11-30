// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "image";
  var title = "Google for Selected Text";
  var parent = chrome.contextMenus.create({"title": "Pictures Range", "contexts":[context],
                                           "id": "rangePics"});  
  var child1 = chrome.contextMenus.create({"title": "1.jpg", "contexts":[context],
  	                                       "parentId": parent,
                                           "id": "rangePics1"});  
  var child2 = chrome.contextMenus.create({"title": "01.jpg", "contexts":[context],
  	                                       "parentId": parent,
                                           "id": "rangePics10"});
  var child3 = chrome.contextMenus.create({"title": "001.jpg", "contexts":[context],
  	                                       "parentId": parent,
                                           "id": "rangePics100"});
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));

  if(info.menuItemId == "rangePics1") {
  	rangePics(size=1, url=info.srcUrl)
  } else if (info.menuItemId == "rangePics10") {
  	rangePics(size=2, url=info.srcUrl)
  } else if (info.menuItemId == "rangePics100") {
  	rangePics(size=3, url=info.srcUrl)
  }
}

function rangePics(size, url) {
	url_mix = url
    window.open("http://localhost/rangePics/index.php?start=1&end=25&size="+size+"&url="+url_mix, '_blank');
}

