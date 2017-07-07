/* global $, jslint, document, window, console */

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
        intervall: 5000
    });


});