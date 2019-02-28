/* global console, $ */

$(function(){

    'use strict';

    // Smoothly Scroll To Element
    $('.navbar li a ').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        },1000);

        //window.console.log('#' + $(this).data('scroll'));
    });
});