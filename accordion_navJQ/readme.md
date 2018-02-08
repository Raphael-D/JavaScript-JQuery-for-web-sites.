多階層式のグローバルナビゲーション用にアコーディオンjQueryを作ってみました。
それぞれのトグルボタンをクリックしても、他のメニューは閉じない様になっています。
クラス名"slideMenu"と"toggleBtn"を付与し、入れ子にしていくと自動的にアコーディオンメニューになります。

初期設定ではウィンドウサイズが600px以下の時のみトグルメニューとして動作します。
600px以上はCSSを調整してください。

jQuery2.2.4依存
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

実装方法がわからない場合はindex.htmlを参照してください。



I made an accordion jQuery for multi-level global navigation.
Even if you click each toggle button, other menus will not close.
Give the class names "slideMenu" and "toggleBtn" and automatically become an accordion menu as you nest.

jQuery 2.2.4 dependency
<script src = "http://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"> </ script>

By default, it operates as a toggle menu only when the window size is 600px or less.
Please adjust CSS for more than 600px.
