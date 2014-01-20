(function(){

	//var socket = io.connect('http://localhost'), //DEV
    var socket = io.connect('192.241.162.182'), //PRODUCTION 
        title = $('h1');

	socket.on('start', function (data) {
		title.innerText = data.text;

		socket.emit('started', { text: 'client started' });
	});


    $('.send').on('click', function () {

        var input = $('.input-field').val();

        socket.emit('message', { msg: input });

    });

    socket.on('chat', function (data) {

        $('.chat').append('<p>' + data.msg + '</p>');
    });

})();