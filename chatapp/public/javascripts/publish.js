'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();

    // 条件分岐
    if (message =='') {
        alert("投稿文を入力してください。");
        return false;
    } else {
        // 投稿内容を送信
        socket.emit('publishevent',message);
        // 要素を空にする
        $('#message').val('');
    }
}



// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receivePublishEvent', function (data) {
    $('#thread').prepend('<p>' + userName + 'さん' + ':' + data + '</p>');
});
