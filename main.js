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

    $(window).scroll(function(){

         // Sync Navbar Links With Sections

        $('.block').each(function(){
            if ($(window).scrollTop() > $(this).offset().top){

                var blockID = $(this).attr('id');
                $('.navbar a').removeClass('active');
                $('.navbar li a[data-scroll="'+blockID +'"]').addClass('active');
            }
        });
        // Scroll To Top Button 
        var scrollToTop = $('.scroll-to-top');

        if ($(window).scrollTop() >= 1000){

            if(scrollToTop.is(':hidden')){
                scrollToTop.fadeIn(400);
            }

        }else{
        scrollToTop.fadeOut(400);
        }
    });

    // Click On Scroll To Top To Go Up
    $('.scroll-to-top').click(function(event){
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            },1000);

    })
});