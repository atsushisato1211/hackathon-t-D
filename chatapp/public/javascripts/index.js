'use strict';

// チャットルームに入室する
function enter() {

    // 入力されたユーザ名を取得する
    const userName = $('#userName').val();

    // ユーザ名が未入力でないかチェックする
    //ユーザー名が空だったらエラーメッセージ、空でなかったら入室
    if(userName === '') {
      alert("ユーザー名を入力してください。");    //エラーメッセージを出力
      return false;    //入室ボタン本来の動作をキャンセルします

    }

    $('form').submit();
}
