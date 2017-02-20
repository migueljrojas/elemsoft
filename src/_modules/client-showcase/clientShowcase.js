'use strict';

var $ = require('jquery');
// Constructor
var ClientShowcase = function() {
  this.name = 'Client Showcase';
  console.log('%s module', this.name);

  var selectors = $('[data-showcase-target]');
  var projects = $('[data-showcase-index]');

  function init() {
    $('[data-showcase-target]:first').addClass('-active');
    $('[data-showcase-index]:first').addClass('-active');
  }

  if ( selectors && projects) {

      selectors.each(function(){
         $(this).on('click',function(){
            var dataTarget = $(this).data('showcase-target');

            selectors.removeClass('-active');
            $(this).addClass('-active');

            projects.removeClass('-active');
            projects.filter(function() {
                return $(this).data('showcase-index') == dataTarget;
            }).addClass('-active');
            
         });
      });

      init();
  }

};


module.exports = ClientShowcase;
