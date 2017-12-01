'use strict'
window.document.addEventListener('DOMContentLoaded', function() {
  var elem = document.getElementById('scroller');
  var start = elem.getBoundingClientRect().top;
  var DHTML;
  var ua = navigator.userAgent.toLowerCase(),
      domBody = document.body,
      domHtml = document.documentElement,
      scrElm = document.scrollingElement;
  // JavaScriptエンジンで分岐
  if (ua.indexOf('msie') != -1) {
    // edge.
    DHTML = domBody;
  } else if (ua.indexOf('chrome') != -1) {
    // Google Chrome.
    DHTML = scrElm;
  } else if (ua.indexOf('firefox') != -1) {
    // FireFox.
    DHTML = domHtml;
  } else if (ua.indexOf('safari') != -1) {
    // Safari.
    DHTML = domBody;
  } else if (ua.indexOf('opera') != -1) {
    // Opera.
    DHTML = domBody;
  } else if (ua.indexOf('gecko') != -1) {
    // Gecko.
    DHTML = domHtml;
  } else if (ua.indexOf('ie') != -1) {
    // IE.
    DHTML = domBody;
  } else {
    // others.
    DHTML = domBody;
  }
  var end = -90;
  DHTML.id = 'top';

  function move() {
    elem.href = '#top';
    elem.style.position = 'fixed';
    elem.style.right = 0;
    elem.style.left = 'auto';
  }
  function remove() {
    elem.href = '#tg';
    elem.style.right = '';
    elem.style.left = '';
    elem.style.position = '';
  }
  var scroll = function() {
    var pos = elem.getBoundingClientRect().top;
    var from = DHTML.scrollTop;
    if (from > 100) {
      move();
      // DHTML.id = 'top';
    } else if (from < 100) {
      remove();
      // DHTML.id = '';
    }

  }
  document.addEventListener('scroll', scroll);
});
