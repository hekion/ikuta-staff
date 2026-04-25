// auth.js
(function() {
    const WP = "1997"; // パスワード設定
    let msg = "パスワードを入力してください"; // 初期のメッセージ

    while (sessionStorage.getItem('auth') !== 'true') {
        const input = prompt(msg);

        if (input === WP) {
            sessionStorage.setItem('auth', 'true');
        } else if (input === null) {
            // キャンセルされたらリロードして最初から
            location.reload();
            break;
        } else {
            // 間違えた場合、メッセージを書き換えてループの最初に戻る
            msg = "パスワードが違います。正しく入力してください。";
        }
    }
})();
