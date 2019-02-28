/* global console, $ */

$(function(){

    'use strict';

    // Smoothly Scroll To Element
    $('.navbar li a ').click(function(e){
        e.preventDefault();

        window.console.log($(this).data('scroll'));
    });
});