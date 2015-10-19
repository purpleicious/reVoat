chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url && tab.url.indexOf('https://voat.co') === 0) {
        chrome.pageAction.show(tabId);
    }
});