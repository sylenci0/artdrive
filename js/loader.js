$(document).ready(function () {
    //LOADER
    $('#content').hide();
    $('#loader').show();

    setTimeout(function () {
        $('#loader').fadeOut('slow', function () {
            $('#content').fadeIn('slow');
        });
    }, 1000);
});