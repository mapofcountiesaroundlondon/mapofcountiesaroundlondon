jQuery(function($){
  "use strict";
    jQuery('.gb_navigation > ul').superfish({
    delay:       500,
    animation:   {opacity:'show',height:'show'},
    speed:       'fast'
  });
});

function unique_startup_gb_Menu_open() {
  jQuery(".side_gb_nav").addClass('show');
}
function unique_startup_gb_Menu_close() {
  jQuery(".side_gb_nav").removeClass('show');
}

jQuery('.gb_toggle').click(function () {
  unique_startup_Keyboard_loop(jQuery('.side_gb_nav'));
});

var unique_startup_Keyboard_loop = function (elem) {
  var unique_startup_tabbable = elem.find('select, input, textarea, button, a').filter(':visible');
  var unique_startup_firstTabbable = unique_startup_tabbable.first();
  var unique_startup_lastTabbable = unique_startup_tabbable.last();
  unique_startup_firstTabbable.focus();

  unique_startup_lastTabbable.on('keydown', function (e) {
    if ((e.which === 9 && !e.shiftKey)) {
      e.preventDefault();
      unique_startup_firstTabbable.focus();
    }
  });

  unique_startup_firstTabbable.on('keydown', function (e) {
    if ((e.which === 9 && e.shiftKey)) {
      e.preventDefault();
      unique_startup_lastTabbable.focus();
    }
  });

  elem.on('keyup', function (e) {
    if (e.keyCode === 27) {
      elem.hide();
    };
  });
};

( function( $ ) {

  jQuery(document).ready(function($){
    // Implement go to top.
    var $scroll_obj = jQuery( '#btn-scrollup' );
    jQuery( window ).on( 'scroll',function(){
      if ( $( this ).scrollTop() > 100 ) {
        $scroll_obj.fadeIn();
      } else {
        $scroll_obj.fadeOut();
      }
    });

    $scroll_obj.on( 'click',function(){
      jQuery( 'html, body' ).animate( { scrollTop: 0 }, 600 );
      return false;
    });
  });

} )( jQuery );
