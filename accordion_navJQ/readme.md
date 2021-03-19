# アコーディオン　多階層　jQuery

多階層式のグローバルナビゲーション用にアコーディオンjQueryを作ってみました。
それぞれのトグルボタンをクリックしても、他のメニューは閉じない様になっています。
クラス名"slideMenu"と"toggleBtn"を付与し、入れ子にしていくと自動的にアコーディオンメニューになります。
<br />
初期設定ではウィンドウサイズが600px以下の時のみトグルメニューとして動作します。
600px以上はCSSを調整してください。

## jQuery2.2.4依存
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

実装方法がわからない場合はindex.htmlを参照してください。

<br />
<hr />
<br />

I made an accordion jQuery for multi-level global navigation.
Even if you click each toggle button, other menus will not close.
Give the class names "slideMenu" and "toggleBtn" and automatically become an accordion menu as you nest.

<br />
<hr />
<br />

## jQuery 2.2.4 dependency
`<script src = "http://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"> </ script>`

By default, it operates as a toggle menu only when the window size is 600px or less.
Please adjust CSS for more than 600px.

## Usage
使い方

<br />

### HTML
```
<nav>
  <ul class="menu slideMenu">
    <li class="menu__list">
      <div class="toggleBtn"><a href="#" class="menu__item">listA</a></div>
      <div class="slideMenu">
        <ul>
          <li class="menu__list"><a class="menu__item" href="#">listA__listA</a></li>
          <li class="menu__list">
            <div class="toggleBtn"><a class="menu__item" href="#">listA__listB</a></div>
            <div class="slideMenu">
              <ul>
                <li class="menu__list"><a href="#" class="menu__item">listA__listB__listA</a></li>
                <li class="menu__list"><a href="#" class="menu__item">listA__listB__listB</a></li>
                <li class="menu__list"><a href="#" class="menu__item">listA__listB__listC</a></li>
                <li class="menu__list">
                  <div class="toggleBtn"><a href="#" class="menu__item">listA__listB__listD</a></div>
                  <div class="slideMenu">
                    <ul>
                        <li class="menu__list"><a href="#" class="menu__item">listA__listB__listD__listA</a></li>
                        <li class="menu__list"><a href="#" class="menu__item">listA__listB__listD__listB</a></li>
                        <li class="menu__list"><a href="#" class="menu__item">listA__listB__listD__listC</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </li>
    <li class="menu__list">
      <div class="toggleBtn"><a class="menu__item" href="#">listB</a></div>
      <div class="slideMenu">
        <ul>
          <li class="menu__list"><a href="#" class="menu__item">listB__listA</a></li>
          <li class="menu__list"><a href="#" class="menu__item">listB__listB</a></li>
          <li class="menu__list"><a href="#" class="menu__item">listB__listC</a></li>
        </ul>
      </div>
    </li>
    <li class="menu__list"><a class="menu__item" href="#">listC</a></li>
    <li class="menu__list"><a class="menu__item" href="#">listD</a></li>
    <li class="menu__list"><a class="menu__item" href="#">listE</a></li>
  </ul>
</nav>
```

<br />

### jQuery

```
<script>
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
</script>
```