(function(){

	var socket = io.connect('http://localhost'),
        title = $('h1');

	socket.on('start', function (data) {
		title.innerText = data.text;

		socket.emit('started', { text: 'client started' });
	});

})();