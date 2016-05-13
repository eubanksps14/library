/*global $*/
/*global Firebase*/
$(document).ready(function () {
    var fbref = new Firebase("https://librarycheckout1.firebaseio.com/");

    $('.historyPage').hide();

    $('.submit').click(function(snapshot) {
        $('.historyPage').show();
        $('.checkoutPage').hide();

        var bookName = $('.title').val();
        var checkedOut = parseInt($('.checkedOut').val());
        var dateDue = parseInt($('.dateDue').val());

        console.log(bookName);
        console.log(checkedOut);
        console.log(dateDue);

        $('.recentTitle').text(bookName);

        $('.recentDate').text(checkedOut);

        $('.recentDue').text(dateDue);

        $('.fullHistory').append('<p>' + '<br>' + bookName + '<p>' + ' Checked out on: ' + checkedOut + ' Date due: ' + dateDue + '</p>' + '</p>');

        fbref.child('bookInfo').child('title').push(bookName);
        fbref.child('bookInfo').child('checkedOut').push(checkedOut);
        fbref.child('bookInfo').child('dateDue').push(dateDue);
        fbref.on('child_added', function (snapshot) {
           console.log(snapshot.val()); 
        });

        $('title').text('History');
    });

    $('.return').click(function () {
        $('.historyPage').hide();
        $('.checkoutPage').show();
        $('title').text('Checkout');
    });

i = 0;
    $('input').keypress(function() {
        $('span').text(i += 1);
    });
});