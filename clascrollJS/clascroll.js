var ClaScroll = function(elem, afterName, margin) {
	var plxOptions = {
		return: false // trueでスクロールが上に戻ると戻す設定。
	}
	var target = document.getElementsByClassName(elem);
	var getScrollElement = function() {
		var ua = navigator.userAgent.toLowerCase();
		var dom = {
			body: document.body,
			elem: document.documentElement,
			scrl: document.scrollingElement
		}
		return ua.indexOf('chrome') != -1 ? dom.scrl :
			ua.indexOf('safari') != -1 ? dom.body :
			ua.indexOf('edge') != -1 ? dom.body :
			ua.indexOf('msie') != -1 ? dom.body :
			ua.indexOf('firefox') != -1 ? dom.elem :
			ua.indexOf('opera') != -1 ? dom.body :
			ua.indexOf('gecko') != -1 ? dom.elem :
			ua.indexOf('ie') != -1 ? dom.body : dom.body;
	}
	var getWindowHeight = function() {
		return window.innerHeight;
	}
	var getNowPos = function() {
		return getScrollElement().scrollTop;
	}
  var getTargetPosition = function(elem) {
    return parseInt(elem.getBoundingClientRect().top);
  }
  return (function() {
		window.addEventListener('scroll', function() {
			for (var i =0; i < target.length; i++) {
	      if (getNowPos() > (getTargetPosition(target[i]) + getNowPos()) - getWindowHeight() + margin) {
	        target[i].classList.add(afterName);
	      } else {
					plxOptions.return ? target[i].classList.remove(afterName): false;
					// スクロールが上に戻ると戻す設定。
				}
	    }
		});
  })();
}
