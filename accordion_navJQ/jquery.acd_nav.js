/*======================================
アコーディオンメニュー jQuery
======================================*/
$(function() {
	var options = {
		bp: 600, // ウィンドウのブレイクポイント
		toggle_class: 'is-cross', //メニュー開閉時につけたいクラス
		toggle: $('.toggleBtn'), //クリックでメニュー開閉するボタン
		menu: $('.slideMenu') //開閉するメニュー
	}
	if ($(window).width() <= options.bp) {
		$.each(options.toggle, function(i, e) {
			$(e).on('click', function() {
				$(this).toggleClass(options.toggle_class);
				$(options.menu[i]).slideToggle();
				return false;
			});
		});
	}
});
