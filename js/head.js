// var myHeaders = new Headers();
// myHeaders.set('accept', 'application/json')
// myHeaders.set('Content-Type', 'application/json')
// myHeaders.set('Access-Control-Allow-Origin', '*')

/* 
albanija - ab1
bosna - bs9
bugarska - br2
kipar - cs5
ceska - ce7
estonija - et3 NE radimo terminale
finska - fn1
hrvatska - ct8
madjarska - hg0
litvanija - lt1
latvija - lv2
crna gora - mn7
portugal - pt2
poljska - po4
rumunija - rm4
slovacka - so5
slovenija - sv5
srbija - sb6
makedonija - md3
grcka - gr2
*/
window.onerror = function (msg, url, line, _char, err) {
  var formData = new FormData();
  var d = new Date();
  var timestamp = d.toTimeString().split(' ')[0] + ' ' + d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear();
  formData.append('data', JSON.stringify({
    terminal: location.href,
    file: url,
    error: msg,
    line: line,
    "char": _char,
    timestamp: timestamp
  }));

  if (/127.0.0.1|g3tcdn|devinfo|gr2|cs5|rm4/.test(location.href)) {
    fetch('https://g3tcdn.com/host/files/logs/errorLogs.php', {
      method: 'post',
      body: formData
    });
  }
};
var cCode, // if '' => reads cCode from folder name or query string, if 'IP' => reads cCode from IP address, or set manually
userType, // soi, doi, reg1;
contentType, // adult || familySafe
apiKey, datingApp, // default is https://dev.mojtajnisastanak.com
regRoute, // set custom reg route, default is /register-user-terminal
emailOnly, // 1 to activate email only mode, default null
googleBtnText, // set custom text or default text if empty
redirection, // choose redirection to reg1 to finish registration 
flow, // set auto picking dating app
cookieBar, // show/hide cookie bar 
storeData, // choose to store data in local storage or not
storage, // localStorage or cookie
giftCredits, // in this moment it will be null on frontend, maybe in the future we will give user some value to credit after register
customTextUrl, // define custom text file path 
stepNumbers, // shows question order number
stepNumbersStart, stepNumbersEnd, progressBarStart, accId, // familySafe only
accHash, // familySafe only
domain, // set custom domain name in tos or leave empty for deafault 
documentTitle, // random for random title, set custom title or leave empty for default title
// company data - if string is empty, company will be NPG as default
companyName, companyAddress, companyRegNumber, complianceEmail, question; // choose which questions to render and reorder them at your will