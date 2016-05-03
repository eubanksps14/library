/*global $*/
/*global Firebase*/
/* For checkout.html */
$(document).ready(function () {
    var fbref = new Firebase("https://librarycheckout1.firebaseio.com/");
    
    
    

    
    $('.btn-success').click(function () {
        var title = $('.title').val();
        var author = $('.author').val();
        var checkoutDate = $('.checkout').val();
        
        
        fbref.child('userName').child('name').child('')
        
        
        console.log(title);
        console.log(author);
        console.log(checkoutDate);
        
        
    });
    
    var person = {
        
        username: fbref.child(name).on('child_added', function(snapshot)  {
            
             
            
        }) 
        
    };
    
});