# スクロールで近づいたらクラスをつけるJavaScript
## Scroll closer and addtional a class

ターゲットの要素についているクラス名、スクロールで近づいたときにつけるクラス、スクロールで反応するマージンの３つのプロパティを設定して使います。

## 使用例
```
<sctipt src="clascroll.js"></script>
<script>
	ClaScroll('is-fadeR', 'is-fadeR--slide', 200);
	// 'is-fadeR'というクラスがついているところに、'is-fadeR--slide'というクラスを200px圏内で付与。
</script>

```



= ファイル説明 ===========================

	clascroll.js
	- スクロールで近づいた要素にクラスをつけるプラグイン。付与するクラスにCSSでアニメーション設定してください。



= 使い方 ===========================

	①  clascroll.jsを使用するhtmlファイルへ読み込みます。

	② <script>ClaScroll(引数A, 引数B, 引数C)</script>で呼び出し。引数については下記参照ください。

	③ CSSでクラス付与前からクラス付与後のアニメーションを作成してください。（決してCSS in JSを作るのが面倒なのではなく、CSSライクなんです！）



= 引数について ==========================

	引数A：クラスを付与したい要素についているクラスを指定（'hoge' クォーテーションで囲む）

	引数B：付与後のクラス名を指定（'hoge--moved' クォーテーションで囲む）

	引数C：マージンを数値で指定してください。単位はpxです。（クォーテーションなしで数値のみ）



= 呼び出し例 ==========================

	◾️スクロールして200px圏内でis-fadeRというクラスがついた要素にis-fadeR--slideというクラスを付与
	ClaScroll('is-fadeR', 'is-fadeR--slide', 200);

	◾️重ねがけ。is-fadeRというクラスがついた要素が600px圏内でis-fadeR--slideというクラスを付与し、さらに300px圏内でis-fadeR--slide-moreというクラスを付与する。
	ClaScroll('is-fadeR', 'is-fadeR--slide', 600);
	ClaScroll('is-fadeR', 'is-fadeR--slide-more', 300);


= ほか ==========================

	clascroll.jsのplxOptionsのreturnをtrueにすると、スクロールで上まで戻った時に付与したクラスを外して元の状態に戻します。

	クラス名で指定するので、複数の同じクラス名を持つ要素にも対応しております。
