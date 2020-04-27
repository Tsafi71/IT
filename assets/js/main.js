(function($) {
  
  "use strict";  

  $(window).on('load', function() {
   console.log(lod.cashLang+'zz')
   //console.log("main")
     if(lod.cashLang=="pt"){
		 selectLangPt();
		 
	  }else if(lod.cashLang=="sp"){
		 // selectLangSp();
			// console.log(tsafi.conLang +"spani");   
	}else{
		 selectLang();
	}
   
	  console.log(lod.cashLang+'xx')
  /* 
   MixitUp
   ========================================================================== */
  $('#portfolio').mixItUp();

  /*Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* Auto Close Responsive Navbar on Click
    ========================================================*/
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-inverse a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);

    // one page navigation 
    $('.navbar-nav').onePageNav({
      currentClass: 'active'
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
        closedSymbol: '<i class="lni-chevron-right"></i>',
        openedSymbol: '<i class="lni-chevron-down"></i>',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();

    /* 
   VIDEO POP-UP
   ========================================================================== */
   $('.video-popup').magnificPopup({
      disableOn: 700,
     type: 'iframe',
     mainClass: 'mfp-fade',
     removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
  });
	//$('.video-popu').magnificPopup({
   // delegate: 'a',
   // type: 'inline',
   // callbacks: {
       // open: function() {

            // https://github.com/dimsemenov/Magnific-Popup/issues/125
           // $('html').css('margin-right', 0);

            // Play video on open:
           // $(this.content).find('video')[0].play();

       // },
       // close: function() {

            // Reset video on close:
           // $(this.content).find('video')[0].load();

        //}
    //}
//});  
    
    /* Nivo Lightbox
    ========================================================*/   
    // $('.lightbox').nivoLightbox({
    //  effect: 'fadeScale',
     // keyboardNav: true,
    //});

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });
	  

	  


  }); 
	


}(jQuery));

