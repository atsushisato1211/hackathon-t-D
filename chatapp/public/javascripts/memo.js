'use strict';


// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    //require('date-utils');
    //var dt = new Date();
    //var formatted = dt.toFormat("YYYYMMDDHH24MISS");

    const userName = $('#userName').val();

    // 入力されたメッセージを取得
    const message = $('#message').val();
    //日時を表示
    var now = new Date();
    var Month = now.getMonth()+1;
    var Dates = now.getDate();
    var Hour = now.getHours();
    var Min = now.getMinutes();
    var Sec = now.getSeconds();
    var times = "(" + Month + "月" + Dates+ "日" + Hour + "時" + Min + "分" + Sec + "秒" + ")";
    //色変更
    var element = document.getElementById("thread");
    element.style.color = 'blue';


    // メモの内容を表示
    // 条件分岐
      if( message.match(/\S/g)){ //空白、空行じゃないとき
        //改行を表示（置き換える）
        message.replace(/\r?\n/g, '<br>');

        //色変更
        　 //document.getElementById("thread").style.color = 'blue';
          $('#thread').prepend('<xmp>' + times + userName +'さんのメモ：'+ message +'\n'+'</xmp>');
          //空文字
          $('#message').val('');


      }


    }
