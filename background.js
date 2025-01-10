chrome.runtime.onInstalled.addListener(() => {
    // Create a context menu
    chrome.contextMenus.create({
      id: 'resetTimer',
      title: 'Restart Timer',
      contexts: ['all'],
    });
  
    // Add a listener for the context menu click event
    chrome.contextMenus.onClicked.addListener((info) => {
      if (info.menuItemId === 'resetTimer') {
        chrome.storage.local.set({ restart: true }, () => {
        });
      }
    });
  });
  