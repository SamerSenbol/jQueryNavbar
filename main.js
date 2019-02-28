/* global console, $ */

$(function(){

    'use strict';

    //Calculate body Padding Top Depend On Navbar Height

    $('body').css('paddingTop', $('.navbar').innerHeight());

    // Smoothly Scroll To Element
    $('.navbar li a ').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        },1000);
    });

    // Add Active Class On Navbar Link and Remove From Siblings

    $('.navbar li a').click(function(){
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    })

    // Sync Navbar Links With Sections

    $(window).scroll(function(){

        $('.block').each(function(){
            if ($(window).scrollTop() > $(this).offset().top){

                var blockID = $(this).attr('id');
                $('.navbar a').removeClass('active');
                $('.navbar li a[data-scroll="'+blockID +'"]').addClass('active');
            }
        })
       
    });
});