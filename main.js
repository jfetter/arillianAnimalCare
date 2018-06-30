'use strict';

$(document).ready(function(){
    var selectedCard = '#dogs';
    //$(selector).action()
    $(selectedCard).removeClass('invisible');
    $('#collapseOne').click(function(){
        $('#dogs').removeClass('invisible');
    })
    $('#collapseTwo').click(function(){
        $('#goats').removeClass('invisible');
    })
    $('#collapseThree').click(function(){
        $('#chickens').removeClass('invisible');
    })
    $('#collapseFour').click(function(){
        $('#accomodations').removeClass('invisible');
    })
    console.error("hello world");
});

