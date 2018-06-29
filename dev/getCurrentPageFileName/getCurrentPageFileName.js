// 表示中のページのファイル名を取得する
function getCurrentPageFileName() {
    return window.location.href.split('/').pop();
}
