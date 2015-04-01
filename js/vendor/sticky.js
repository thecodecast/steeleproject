var cbpAnimatedHeader = (function() {

  var docElem = document.documentElement,
    header = document.querySelector( '.top-header' ),
    didScroll = false,
    changeHeaderOn = document.getElementById('about').offsetTop - 200;

  function init() {
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 250 );
      }
    }, false );
  }

  function scrollPage() {
    var sy = scrollY();
    if ( sy >= changeHeaderOn ) {
      if (header.classList) {
        header.classList.add('shrink-nav');
      }else{
        header.className += " shrink-nav";
      }
    }
    else {
      if (header.classList) {
        header.classList.remove('shrink-nav');
      }else{
        header.className = "top-header";
      }
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();