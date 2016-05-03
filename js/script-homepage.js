$(document).ready(function () {
		var fbref = new Firebase("https://librarycheckout1.firebaseio.com/");
	
		fbref.child('userName').child('name').on('child_added', function(snapshot) {
		    var name = snapshot.child('userName').child('name').val();
		    console.log(name);
		    $('.username').text(name);
		});
});