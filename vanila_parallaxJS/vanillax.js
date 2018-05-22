var vanillax = function(elem, direction, calc, startPos, amount) {
	var unit = 'px';
	var getScrollPos = function() {
		// JavaScriptエンジンで分岐
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
	var getScrollPos = getScrollPos();
	var scrollVal = function() {
		return getScrollPos.scrollTop;
	}
	return (function() {
		if (direction == 'top') {
			if (calc == '+') {
				return window.addEventListener('scroll', function() {
					document.getElementById(elem).style.top = (startPos + (scrollVal() * amount)) + unit;
					console.log(elem);
				})
			} else {
				return window.addEventListener('scroll', function() {
					document.getElementById(elem).style.top = (startPos - (scrollVal() * amount)) + unit;
				})
			}
		}
		if (direction == 'bottom') {
			if (calc == '+') {
				return window.addEventListener('scroll', function() {
					document.getElementById(elem).style.bottom = (startPos + (scrollVal() * amount)) + unit;
				})
			} else {
				return window.addEventListener('scroll', function() {
					document.getElementById(elem).style.bottom = (startPos - (scrollVal() * amount)) + unit;
				})
			}
		}
		if (direction == 'right') {
			if (calc == '+') {
				return window.addEventListener('scroll', function() {
					document.getElementById(elem).style.right = (startPos + (scrollVal() * amount)) + unit;
				})
			} else {
				return window.addEventListener('scroll', function() {
					document.getElementById(elem).style.right = (startPos - (scrollVal() * amount)) + unit;
				})
			}
		}
		if (direction == 'left') {
			if (calc == '+') {
				return window.addEventListener('scroll', function() {
					document.getElementById(elem).style.left = (startPos + (scrollVal() * amount)) + unit;
				})
			} else {
				return window.addEventListener('scroll', function() {
					document.getElementById(elem).style.left = (startPos - (scrollVal() * amount)) + unit;
				})
			}
		}
	})();
};
