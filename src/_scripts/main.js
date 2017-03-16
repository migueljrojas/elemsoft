// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
// var bootstrap = require('../../bower_components/bootstrap-sass/assets/javascripts/Bootstrap');
var header = require('../_modules/header/header');
var home = require('./pages/home.js');
var home = require('./pages/servicios.js');
var clientShowcase = require('../_modules/client-showcase/clientShowcase');

$(function() {
    require('../../bower_components/slick-carousel/slick/slick');
    new header();
    new home();
    new servicios();
    new clientShowcase();
    console.log('Welcome to Yeogurt!');
});
