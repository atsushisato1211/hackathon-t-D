'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('exitsendEvent', function (data) {
      if(!data){
        return;
      }
      console.log('クライアントの入力値' + data);

      socket.broadcast.emit('exitreceiveEvent',data);
    });
};
