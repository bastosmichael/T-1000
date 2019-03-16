// Custom Scripts for Primal Template //

jQuery(function($) {
    "use strict";


/* --------- Wow Init ------ */

  new WOW().init();


  /* ------ Countdown ----- */

  $('#countdown').countdown({
  			date: '12/01/2016 17:00:00',
  			offset: +2,
  			day: 'Day',
  			days: 'Days'
  		}, function () {
  			// alert('Done!');
  		});


/*----- Preloader ----- */

    $(window).onload = function() {
  		setTimeout(function() {
        $('#loading').fadeOut('slow', function() {
        });
      }, 500);
    };


});
