var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/*
 * Made by WebDesignCrowd
 * http://webdesigncrowd.com
 *
 */
 
(function($){
	$(function(){
	  
    var navbarHeight = 80;

    // Slide in Functionality 
    $(window).scroll(function() {
      var top = $(window).scrollTop();
      $(".slide-in").each(function () {
        var thisTop = $(this).offset().top;
        var height = $(this).height();
        if ((top > (thisTop - (height * 1.5))) && !$(this).hasClass("slid")) {
          $(this).addClass("slid");
        }
      });   
      $('body').scrollspy({ offset: navbarHeight+10, target: '#navbar' });
    });

	  // Home
	  $('.carousel').carousel({
        pause: false,
        interval: 8000
    });

    // Navbar Affix
    $('#navbar').affix({
      offset: {
        top: function () {
          return (this.top = $(window).height() - navbarHeight)
        }
      }
    })
    

    // Parallax Scripts
    function updateParallax() {
      if ($(window).width() > 768) {
        $(".parallax").each(function () {
          var bottom = $(this).offset().top + $(this).height();
          var top = $(this).offset().top;
          var windowHeight = $(window).height();
          var scrollTop = $(window).scrollTop() + windowHeight;
          var fromTop = 0;
          var isHome = true;
          if (top === 0) { 
            fromTop = $(window).scrollTop() - top; 
            isHome = true;
          }
          else { 
            fromTop = $(window).scrollTop() - top + windowHeight; 
            isHome = false;
          }
          if ((bottom > $(window).scrollTop()) && (top < scrollTop)) {   
            var parallax = -1 * (fromTop / 3);
            var revParallax = parallax;
            var percent = 1 - 1.3 *($(window).scrollTop() / $(window).height());
            if (isHome) { 
              revParallax += navbarHeight; 
              $("#home .logo").css('marginTop', parallax + "px");
              $("#home .logo, #home .welcome, #home .call-to-action, #home .macbook-preview").css('opacity', percent);
            }
            $(this).children("img").first().css('bottom', revParallax + "px");
          }
        });
      }
    }
    updateParallax();
    
    $(window).scroll(function() {
      updateParallax();
      // if ($(window).height() > $(window).scrollTop()) {   
      //   var parallax = -1 * ($(window).scrollTop() / 3);
      //   var revParallax = navbarHeight + parallax;
      //   var percent = 1 - 1.5 *($(window).scrollTop() / $(window).height());
      //   $(".bg img").css('bottom', revParallax + "px");
      //   $("#home .logo").css('marginTop', parallax + "px");
      //   $("#home .logo, #home .welcome, #home .call-to-action").css('opacity', percent);
      // }
    });
    
      
    // Contact Form Icon
    $("form .form-control").focus(function() {
      $(this).siblings("label").first().children("i").first().css({"color": "#aaa", "left": 0});
    });
    $("form .form-control").blur(function() {
      $(this).siblings("label").first().children("i").first().css({"color": "transparent", "left": "-20px"});
    });
	  
    // Blog Masonry
    var $container = $('.masonry-grid');
    
    $container.imagesLoaded(function(){
      new AnimOnScroll( document.getElementById( 'grid' ), {
        minDuration : 0.4,
        maxDuration : 0.7,
        viewportFactor : 0.2
      } );

      // Smooth Scrolling
      $("a.scroll").click(function(e) {
        e.preventDefault();
        var offset = $(this.hash).offset().top - (navbarHeight/2);
        $('html, body').animate({ scrollTop: offset }, 600);
      });
    });


    // Accordion Active Toggling 
    $("a[data-toggle='collapse']").click(function() {
      if ($(this).parent().parent(".panel-heading").hasClass("active")) {
        $(this).parent().parent().parent().parent().find('.panel-heading').removeClass("active");
      }
      else {
        $(this).parent().parent().parent().parent().find('.panel-heading').removeClass("active");  
        $(this).parent().parent(".panel-heading").addClass("active");
      }
    });



    // CONTACT PAGE

      function initialize() {
        var myLatLong = new google.maps.LatLng(40.7556,-73.9797);
        var mapOptions = {
          center: myLatLong,
          scrollwheel: false,
          zoom: 13
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        // To add the marker to the map, use the 'map' property
        var marker = new google.maps.Marker({
            position: myLatLong,
            map: map,
            title:"123 Broadway"
        });

      }
      google.maps.event.addDomListener(window, 'load', initialize);
    
    

	}); // end of document ready
})(jQuery); // end of jQuery name space
}
/*
     FILE ARCHIVED ON 15:28:49 Feb 13, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:44:58 Nov 27, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.624
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.018
  esindex: 0.009
  cdx.remote: 17.051
  LoadShardBlock: 80.672 (3)
  PetaboxLoader3.datanode: 110.397 (5)
  load_resource: 209.113 (2)
  PetaboxLoader3.resolve: 132.071 (2)
*/