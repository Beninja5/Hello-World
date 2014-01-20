var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app),
    io      = require('socket.io').listen(server);

var port = 8080;

server.listen(port);

app.configure(function() {

    app.use(express.static(__dirname + '/public'));

});

io.sockets.on('connection', function (socket) {

	socket.emit('start', { text: 'Socket.io started' });

	socket.on('started', function (data) {
		console.log(data.text);
	});

    socket.on('move', function (data) {

        socket.emit('move');
    });
});