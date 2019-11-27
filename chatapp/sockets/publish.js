'use strict';

module.exports = function (socket, io) {
    // メッセージ入力イベント(sendMessageEvent)を受信する
    socket.on('publishevent', function (data) {
        // if (!data) {
        //     return;
        // }
        //
        // console.log('クライアントの入力値:' + data);

        // 全クライアントが受信するメッセージ表示イベント(receiveMessageEvent)を送信する
        io.sockets.emit('receivePublishEvent', data);
       });

       // 再開イベント(sendMessageEvent)を受信する
       socket.on('restartevent', function (data) {
           // if (!data) {
           //     return;
           // }
           //
           // console.log('クライアントの入力値:' + data);

           // 全クライアントが受信するメッセージ表示イベント(receiveMessageEvent)を送信する
           io.sockets.emit('receiveRestartevent', data);
          });

          // 離脱イベント(sendMessageEvent)を受信する
          socket.on('sleepevent', function (data) {
              // if (!data) {
              //     return;
              // }
              //
              // console.log('クライアントの入力値:' + data);

              // 全クライアントが受信するメッセージ表示イベント(receiveMessageEvent)を送信する
              io.sockets.emit('receiveSleepevent', data);
             });



};
