var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket) {
  console.log('已连接');
  socket.on('send', function(value){
    // console.log(value);
    this.broadcast.emit('message', value);
    console.log(`他说了${value}`);
  })
})
http.listen(666, function(){
  console.log('666');
})
