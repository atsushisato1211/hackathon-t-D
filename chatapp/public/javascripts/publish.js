'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();

    // 条件分岐
    if( window.event.keyCode == 13 ){//Enterを押したとき

      if(!window.event.shiftKey && message.match(/\S/g)){//shiftを押さない＆空白、空行じゃないとき
        //改行を表示（置き換える）
        message.replace(/\r?\n/g, '<br>');

        // 投稿内容を送信

        socket.emit('publishevent',userName + 'さん' + ':'+ message);

        // 要素を空にする
        $('#message').val('');

      }else if(!message.match(/\S/g)){//空白、空行のみのとき
        alert("投稿文を入力してください。");
        return false;
      }


    }
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receivePublishEvent', function (data) {
    $('#thread').prepend('<xmp id="sample_text">' + data + '</xmp>');
    var element = document.getElementById("sample_text");
    element.style.color = 'blue';


});
