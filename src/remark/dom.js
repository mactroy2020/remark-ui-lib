module.exports = Dom;

function Dom() { }

Dom.prototype.XMLHttpRequest = XMLHttpRequest;

Dom.prototype.getHTMLElement = function () {
  return document.getElementsByTagName('html')[0];
};

Dom.prototype.getBodyElement = function () {
  return document.body;
};

Dom.prototype.getElementById = function (id) {
  return document.getElementById(id);
};

Dom.prototype.getLocationHash = function () {
  return window.location.hash;
};

Dom.prototype.setLocationHash = function (hash) {
  if (
    typeof window.history.replaceState === 'function' &&
    window.origin !== 'null'
  ) {
    var currentUrl = window.location.href;
    if (currentUrl.indexOf('#') > 0) {
      currentUrl = currentUrl.substr(0, currentUrl.indexOf('#'));
    }

    window.history.replaceState(undefined, undefined, currentUrl + hash);
    window.top.postMessage({
      type: 'nav',
      url: currentUrl,
      hash: hash,
      fullUrl: currentUrl + hash,
    });
  } else {
    window.location.hash = hash;
  }
};
