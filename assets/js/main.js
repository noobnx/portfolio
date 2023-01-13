function zoomImages(className) {
   $(`.${className}`)
      .unbind('click')
      .on('click', function () {
         $('#div-zoom-area').css('display', 'block');
         $('#img-zoom-area-content').attr('src', $(this)[0].src);

         $('#div-zoom-area').on('click', function () {
            $(this).css('display', 'none');
         });
      });
}

(function ($) {
   'use strict';

   $("a.js-scroll-trigger[href*='#']:not([href='#'])").click(function () {
      if (
         location.pathname.replace(/^\//, '') ==
            this.pathname.replace(/^\//, '') &&
         location.hostname == this.hostname
      ) {
         var target = $(this.hash);
         target = target.length
            ? target
            : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
            $('html, body').animate(
               {
                  scrollTop: target.offset().top,
               },
               500,
               'easeInOutExpo',
            );
            return false;
         }
      }
   });

   $('.js-scroll-trigger').click(function () {
      $('.navbar-collapse').collapse('hide');
   });

   $('body').scrollspy({
      target: '#sideNav',
   });

   zoomImages('img-zoomable');
})(jQuery);
