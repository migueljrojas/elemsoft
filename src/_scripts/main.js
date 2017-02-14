// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');

var header = require('../_modules/header/header');

$(function() {
    require('bootstrap-sass');
    new header();
    console.log('Welcome to Yeogurt!');
});
