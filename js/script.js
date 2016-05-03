$(document).ready(function () {
		
	
		$('#submit').click(function () {

var name = $('#username').val();

		$('#welcome').append(name + '...');
		
		});
		
});