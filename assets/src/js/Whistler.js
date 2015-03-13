( function () {

  var Whistler = {

    init: function () {
      this.menuListener();
      this.pageEventListeners();
    },

    menuListener: function () {
      var link = document.getElementById( 'menuLink' );

      link.onclick = function ( evt ) {
        evt = evt || window.event;
        evt.preventDefault();

        var menu = document.querySelector( '.menu' );

        menu.classList.toggle( 'open' );
      };
    },

    pageEventListeners: function () {
      document.addEventListener( 'page:fetch', function () {
        NProgress.start();
      } );
      document.addEventListener( 'page:change', function () {
        NProgress.done();
      } );
      document.addEventListener( 'page:restore', function () {
        NProgress.remove();
      } );
      document.addEventListener( 'page:load', function () {
        NProgress.done();
      } );
    }

  };

  Whistler.init();

} )();