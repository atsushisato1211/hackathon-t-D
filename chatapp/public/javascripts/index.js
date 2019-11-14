'use strict';

// チャットルームに入室する
function enter() {

    // 入力されたユーザ名を取得する
    const userName = $('#user1').name();

    // ユーザ名が未入力でないかチェックする
    //ユーザー名が空だったらアラート、空でなかったら入室
    if(userName === ''){
      const userAlert = "ユーザー名を入力してください。";
      alert("userAlert");
      return false;

    }else {
      document.myform.action = "room.hbs";
    }

    $('form').submit();
}

router.get(,function(request,response)){
  response.render('room',{userName1:userName})
}
