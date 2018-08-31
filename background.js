chrome.runtime.onInstalled.addListener(function() {
  let minutes = 25;
  let seconds = 0;
  runTheTime();
  // chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  //   chrome.declarativeContent.onPageChanged.addRules([{
  //     conditions: [new chrome.declarativeContent.PageStateMatcher({
  //       pageUrl: {hostEquals: 'developer.chrome.com'},
  //     })
  //     ],
  //       actions: [new chrome.declarativeContent.ShowPageAction()]
  //   }]);
  // });
});

function runTheTime(minutes, seconds) {
  while (minutes > 0) {
    setTimeout(() => {
      chrome.storage.sync.set({time: `${minutes}`}, function() {
        console.log(`the time is ${minutes}`);
      });
      minutes -= 1;
    }, 1000);
  }
}
