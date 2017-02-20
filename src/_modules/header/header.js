'use strict';
var $ = require('jquery');

// Constructor
var Header = function() {
  this.name = 'header';
  console.log('%s module', this.name);

  $('.hamburguer').on('click', function(){
     $('.header').toggleClass('-open');
  });
};

module.exports = Header;
