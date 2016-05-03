$(document).ready(function () {
    var fbref = new Firebase("https://librarycheckout1.firebaseio.com/");
    
    fbref.on('child_added', function (snapshot) {
        
    });
});