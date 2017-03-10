'use strict';
var $ = require('jquery');

var Home = function() {
    $('._product-slider').slick({
        dots: true
    });

    var thumbs = $('[data-gallery-index]');
    var photos = $('[data-gallery]');

    function galleryInit() {
        $('[data-gallery-index]:first-child').addClass('-active');
        $('[data-gallery]:first-child').addClass('-active');
    }

    if ( thumbs && photos) {

        thumbs.each(function(){
           $(this).on('click',function(){
              var dataTarget = $(this).data('gallery-index');

              thumbs.removeClass('-active');
              $(this).addClass('-active');

              photos.removeClass('-active');
              photos.filter(function() {
                  return $(this).data('gallery') == dataTarget;
              }).addClass('-active');

           });
        });

        galleryInit();
    }

    $('._service:first').addClass('-visible');

    $('._service-selector select').change(function(){
        var index = $(this).children(':selected').index();
        var index = index + 1;

        $('._service').removeClass('-visible');
        $('._service:nth-child('+ index +')').addClass('-visible');

    });

    $('.mobile-drop').each(function(){
        $(this).on('click', function(){
            $(this).toggleClass('-open');
            $(this).siblings('.mobile-collapse').toggleClass('-expanded');
        })
    });




};

module.exports = Home;
