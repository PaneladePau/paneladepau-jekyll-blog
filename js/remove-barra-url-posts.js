var url = document.URL.replace(/\/$/, '').substr(document.URL.replace(/\/$/, '').lastIndexOf('/') + 1);

window.history.replaceState('', '', '/' + url);