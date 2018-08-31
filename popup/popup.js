let changeColor = document.getElementById('time-container');

chrome.storage.sync.get('time', function(data) {
  changeColor.innerText = data.time;
});

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };
