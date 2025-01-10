document.getElementById('startButton').addEventListener('click', () => {
    const time = parseInt(document.getElementById('timeInput').value, 10) * 60;
    chrome.storage.local.set({ presentationTime: time, startTime: Date.now() }, () => {
    });
  

  });
  