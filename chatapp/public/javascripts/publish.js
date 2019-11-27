'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();


    var now = new Date();
    var Month = now.getMonth()+1;
    var Dates = now.getDate();
    var Hour = now.getHours();
    var Min = now.getMinutes();
    var Sec = now.getSeconds();
    var times = "(" + Month + "月" + Dates+ "日" + Hour + "時" + Min + "分" + Sec + "秒" + ")";
    // 条件分岐
    if( window.event.keyCode == 13 ){//Enterを押したとき

      if(!window.event.shiftKey && message.match(/\S/g)){//shiftを押さない＆空白、空行じゃないとき
        //改行を表示（置き換える）
        message.replace(/\r?\n/g, '<br>');

        // 投稿内容を送信
        socket.emit('publishevent',userName + 'さん' + ':'+ message + times);

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
    $('#thread').prepend('<p id="sample_text">' + data + '' +'<input type="button" value="削除" onclick="clickBtn2()"></p>');
    //元々あったタグ<xmp id="sample_text"></xmp>から<p></p>に変更しました
    var element = document.getElementById("sample_text");
    element.style.color = 'blue';


});
function clickBtn2(){
//削除用
    const div1 = document.getElementById("thread");
    if (div1.hasChildNodes()){
        div1.removeChild(div1.firstChild);
}
}
