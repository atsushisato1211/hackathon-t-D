'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();

    //投稿時間
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
    $('#thread').prepend('<pre id="sample_text">' + data + '' +'<input type="button" value="削除" onclick="clickBtn2()"></pre>');
    //元々あったタグ<xmp id="sample_text"></xmp>から<p></p>に変更しました
    //そこからさらに<pre>に変更しました
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


//一時離脱機能
function sleep() {
    // ユーザ名を取得
    const userName = $('#userName').val();

    document.getElementById("message").placeholder = "離脱中です";
    document.getElementById("message").disabled = "disabled";

    socket.emit('sleepevent', '[一時離脱]'+''+ userName+'さん' );

    //離脱ボタン機能停止
    document.getElementById("common-button1").disabled = true;
    //再開ボタン機能再開
    document.getElementById("common-button2").disabled = false;


  }



  // サーバから受信した離脱メッセージを画面上に表示する
  socket.on('receiveSleepevent', function (data) {
      $('#thread').prepend('<pre id="sleep_text">' + data +'</pre>');

      var element1 = document.getElementById("sleep_text");
      element1.style.color =　'#75A9FF';

    });


//再開機能
function restart(){
        // ユーザ名を取得
        const userName = $('#userName').val();
        document.getElementById("message").placeholder = "投稿文を入力してください(Enterで送信)";
        document.getElementById("message").disabled = "";

        socket.emit('restartevent','[再開]'+""+ userName+'さん' );

        //離脱ボタン機能再開
        document.getElementById("common-button1").disabled = false;
        //再開ボタン機能停止
        document.getElementById("common-button2").disabled = true;

      }


      // サーバから受信した再開メッセージを画面上に表示する
      socket.on('receiveRestartevent', function (data) {
          $('#thread').prepend('<pre id="restart_text">' + data +'</pre>');

          var element2 = document.getElementById("restart_text");
          element2.style.color = '#75A9FF';

      });
