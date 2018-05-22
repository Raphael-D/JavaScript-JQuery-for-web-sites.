window.addEventListener('DOMContentLoaded', function() {
	var target = function(elem) {
		return document.getElementById(elem);
	}
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
	var pallaxImage = function(elem, direction, calc, startPos, amount) {
		if (direction == 'top') {
			if (calc == '+') {
				target(elem).style.top = (startPos + (scrollVal() * amount)) + unit;
			} else {
				target(elem).style.top = (startPos - (scrollVal() * amount)) + unit;
			}
		}
		if (direction == 'bottom') {
			if (calc == '+') {
				target(elem).style.bottom = (startPos + (scrollVal() * amount)) + unit;
			} else {
				target(elem).style.bottom = (startPos - (scrollVal() * amount)) + unit;
			}
		}
		if (direction == 'right') {
			if (calc == '+') {
				target(elem).style.right = (startPos + (scrollVal() * amount)) + unit;
			} else {
				target(elem).style.right = (startPos - (scrollVal() * amount)) + unit;
			}
		}
		if (direction == 'left') {
			if (calc == '+') {
				target(elem).style.left = (startPos + (scrollVal() * amount)) + unit;
			} else {
				target(elem).style.left = (startPos - (scrollVal() * amount)) + unit;
			}
		}
	}

	window.addEventListener('scroll', function() {

		pallaxImage('service-img', 'top', '+', -1000, .4);
		// 開始位置top-20%でスクロールに応じて20%遅らせる状態

		pallaxImage('service-img2', 'bottom', '-', 400, .3);
		// 開始位置bottom10%でスクロールに応じて20%遅らせる状態

		pallaxImage('news-img', 'bottom', '-', 400, .3);
		// 開始位置top-90%でスクロールに応じて30%遅らせる状態

	});
	///////////////////////////////////////////////////////////
	// IDと指定すれば様々な要素で使えるが、親要素にかならずrelativeをつけること。
	// 動かしたい要素、つまりIDを指定した要素にもabsoluteを指定しましょう。
	///////////////////////////////////////////////////////////
});
