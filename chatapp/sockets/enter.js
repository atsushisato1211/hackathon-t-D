'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendMessageEvent'', function (data) {
      if(!data){
        return;
      }
      console.log('クライアントの入力値'+data);

      io.socket.emit('receiveMessageEvent',data);

    });
};
