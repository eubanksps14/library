/*global $*/
/*global Firebase*/
/* For checkout.html */
$(document).ready(function () {
    var fbref = new Firebase("https://librarycheckout1.firebaseio.com/");
    
    
    

    
    $('.btn-success').click(function () {
        var title = $('.title').val();
        var checkOut = parseInt($('.author').val());
        var dateDue = parseInt($('.checkout').val());
        
        fbref.child('books').child('title').push(title);
        fbref.child('books').child('checkOut').push(checkOut);
        fbref.child('books').child('dateDue').push(dateDue);
        
        console.log(title);
        console.log(checkOut);
        console.log(dateDue);
        
    });
    
    var person = {
        
        username: fbref.child(name).on('child_added', function(snapshot)  {
            
             
            
        }) 
        
    };
    
});