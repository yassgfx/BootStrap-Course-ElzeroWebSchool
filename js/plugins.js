/*global $, jslint, document, window, console */

$(function () {

    'use strict';
    // Trigger Nice Scroll
    $('html').niceScroll({
        cursorcolor: '#e41b17',
        cursorwidth: '7px',
        cursorborder: 0,
        cursorborderradius: 0
    });


    $('.carousel').carousel({
        intervall: 2000
    });

    /* Show Color Option Div When Click On The Gear */
    $('.gear-check').click(function () {
        $('.color-option').toggle('slow');
    });

    /* Change Theme Color Om click */
    var colorLi = $('.color-option ul li'),
        scrollButton = $("#scroll-top");

    colorLi
        .eq(0).css("backgroundColor", "#e41b17").end()
        .eq(1).css("backgroundColor", "#8c6239").end()
        .eq(2).css("backgroundColor", "#009aff").end()
        .eq(3).css("backgroundColor", "#ceae00").end()
        .eq(4).css("backgroundColor", "#a8129c").end()
        .eq(5).css("backgroundColor", "#028e0c");

    colorLi.click(function () {

        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        $('.nicescroll-cursors').css("backgroundColor", $(this).attr("data-colors"));
    });

    // Caching The scroll top element
    $(window).on("scroll", function () {

        if ($(this).scrollTop() >= 700) {
            scrollButton.show(1500);
        } else {
            scrollButton.hide(1500);
        }

    });

    // Click On button To Scroll Top
    scrollButton.click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600);
    });

    /* Loading Screen */

    $(window).load(function () {

        // Loading Element 
        $(".loading-overlay .sk-cube-grid").fadeOut(1000, function () {

            // Show The Scroll
            $("body").css("overflow", "auto");
            $(this).parent().fadeOut(1000, function () {
                $(this).remove();
            });
        });
    });



});
