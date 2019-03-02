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
    });

    // Popup
    $('.show-popup').click(function(){
        $($(this).data('popup')).fadeIn();
    });

    $('.popup').click(function(){
        $(this).fadeOut();
    });

    $('.popup .inner').click(function(e){
       e.stopPropagation();
    });

    $('.popup .close').click(function(e){
        e.preventDefault();
       $(this).parentsUntil('.popup').parent().fadeOut();
    });

    $(document).keydown(function(e){
        if(e.keyCode == 27){
            $('.popup').fadeOut();
        }
    });

    // Animated Progress
    $('.animated-progress span').each(function(){
        $(this).animate({
            width: $(this).attr('data-progress') + '%'
        }, 1000, function(){
            $(this).text($(this).attr('data-progress') + '%');
        })

    });

    // Fixed Menu
    $('.fixed-menu .fa-cog').on('click',function(){
        $(this).parent('.fixed-menu').toggleClass('is-visible');
        if ($(this).parent('.fixed-menu').hasClass('is-visible')){
            $(this).parent('.fixed-menu').animate({
                left: 0
            }, 1000);

            $('body').animate({
                paddingLeft: '240px'
            }, 1000);
        }else{
            $(this).parent('.fixed-menu').animate({
                left: '-240px'
            }, 1000);
            $('body').animate({
                paddingLeft: 0
            }, 1000);
        }
    });

});