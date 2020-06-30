// animate smooth scroll

$('#para-button').on('click', function(){
    const author = $('#author').position().top;

    $('html, body').animate({
        scrollTop: author
    }, 5000);
});