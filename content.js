chrome.storage.local.get(['presentationTime', 'startTime'], ({ presentationTime, startTime }) => {
    if (!presentationTime || !startTime) return;
  
    let progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.bottom = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '10px';
    progressBar.style.width = '0';
    progressBar.style.backgroundColor = '#4caf50';
    progressBar.style.zIndex = '10000';
    document.body.appendChild(progressBar);
    let startTimeFun=startTime;
    
    let endTime = startTimeFun + presentationTime * 1000;
  
    const updateProgressBar = () => {

        chrome.storage.local.get(['restart'], ({restart}) =>{
            if (restart){
                console.log('restarted');
                chrome.storage.local.set({ restart: false }, () => {
                });
                endTime =  Date.now() + presentationTime * 1000;
                startTimeFun =  Date.now() ;
            }

        });
      const now = Date.now();
      const progress = ((now - startTimeFun) / (endTime - startTimeFun)) * 100;
      progressBar.style.width = Math.min(progress, 100) + '%';
  
      if (now < endTime) {
        requestAnimationFrame(updateProgressBar);
      } else {
        progressBar.style.backgroundColor = 'red'; // Indicate completion
      }
    };
  
    updateProgressBar();
  });
  