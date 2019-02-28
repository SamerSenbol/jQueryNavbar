/* global console, $ */

$(function(){

    'use strict';

    //Calculate body Padding Top Depend On Navbar Height

    $('body').css('paddingTop', $('.navbar').innerHeight() + 11);

    // Smoothly Scroll To Element
    $('.navbar li a ').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        },1000);
    });
});