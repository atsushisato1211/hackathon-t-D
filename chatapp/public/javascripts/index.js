'use strict';

// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName = $('#user1').name();
    // ユーザ名が未入力でないかチェックする
    if(userName === ''){
      const userAlert = "ユーザー名を入力してください。";
      alert("userAlert");
    }

    $('form').submit();
}
