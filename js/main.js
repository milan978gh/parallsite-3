// animate smooth scroll

$('#para-button').on('click', function(){
    const author = $('#author').position().top;

    $('body, html').animate({
        scrollTop: author
    }, 5000);
});