'use strict';


// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
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
    

    // メモの内容を表示
    if (message !=='') {
        $('#memo').prepend('<p>' + userName +'さんのメモ：'+ message + times + '<input type="button" value="削除" onclick="clickBtn1()"></p>');
        //空文字
        $('#message').val('');
    }
    return false;
}
function clickBtn1(){
//削除用
    const div1 = document.getElementById("memo");
    if (div1.hasChildNodes()){
        div1.removeChild(div1.firstChild);
}
}
