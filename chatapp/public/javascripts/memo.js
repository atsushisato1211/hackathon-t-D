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
    if (message !=='') {

      //色変更
      　 //document.getElementById("thread").style.color = 'blue';
        $('#thread').prepend('<p>' + times + userName +'さんのメモ：'+ message + '</p>');
        //空文字
        $('#message').val('');


        //return false;
    }


        //$('#thread').prepend('<p>' + userName +'さんのメモ：'+ message + formatted + '</p>');//ここに取得した変数を囲むことで投稿文表示
//要素を空に
        //$('#message').val('');


    return false;
    // 要素を空にする


}
