var vanillax = function(elem, direction, calc, startPos, amount) {
	var unit = 'px';
	var target = document.getElementsByClassName(elem) ? document.getElementsByClassName(elem) : false;
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
	var parallax = function() {
		for (var i = 0; i < target.length; i++) {
			if (direction == 'top') {
				calc == '+' ? target[i].style.top = (startPos + (scrollVal() * amount)) + unit :
				calc == '-' ? target[i].style.top = (startPos - (scrollVal() * amount)) + unit : false;
			} else if (direction == 'bottom') {
				calc == '+' ? target[i].style.bottom = (startPos + (scrollVal() * amount)) + unit :
				calc == '-' ? target[i].style.bottom = (startPos - (scrollVal() * amount)) + unit : false;
			} else if (direction == 'right') {
				calc == '+' ? target[i].style.right = (startPos + (scrollVal() * amount)) + unit :
				calc == '-' ? target[i].style.right = (startPos - (scrollVal() * amount)) + unit : false;
			} else if (direction == 'left') {
				calc == '+' ? target[i].style.left = (startPos + (scrollVal() * amount)) + unit :
				calc == '-' ? target[i].style.left = (startPos - (scrollVal() * amount)) + unit : false;
			} else {
				false;
			}
		}
	}
	return (function() {
		window.addEventListener('scroll', function() {
			parallax();
		});
	})();
};
