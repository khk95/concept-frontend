$(function(){
    console.log('init');

    $('.item').on('click', function(){
        $('.modal').modal('toggle');
    });
});