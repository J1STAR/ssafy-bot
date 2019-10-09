var s = document.createElement('script');
s.src = chrome.runtime.getURL('js/app.98d588b0.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

s = document.createElement('script');
s.src = chrome.runtime.getURL('js/chunk-vendors.bd33d734.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

s = document.createElement('style');
s.src = chrome.runtime.getURL('css/app.c65c1356.css');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

fetch(chrome.runtime.getURL('/index.html'))
    .then(response => response.text())
    .then(data => {
        document.body.innerHTML += data;
        console.log(data)
        // other code
        // eg update injected elements,
        // add event listeners or logic to connect to other parts of the app
    }).catch(err => {
    // handle error
});