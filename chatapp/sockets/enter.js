'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('entersendEvent', function (data) {
      if(!data){
        return;
      }
      console.log('クライアントの入力値'+data);


      socket.broadcast.emit('enterreceiveEvent',data);

    });
};
