$(document).ready(function()    {
    
    var fbRef = new Firebase('https://librarycheckout1.firebaseio.com/');
    
    var loggedIn;
    
    $('.username').click(function()  {
        
        $('.submit').click(function()    {
            
            var name = $('.username').val();
            console.log(name);
            fbRef.child('userName').child('name').push(name);
            
            var loggedIn = true;
            fbRef.child('userName').child('name')(loggedIn);
                
            });

        });
    
    });