'use strict';


// メモを画面上に表示する
function memo() {
    // ユーザ名を取得

    //const userName = '';

    // 入力されたメッセージを取得
    const message = $('#message').val();
    // メモの内容を表示

    $('#thread').prepend('<p>' + userName +':'+ message + '</p>');//ここに取得した変数を囲むことで投稿文表示


    return false;
}
