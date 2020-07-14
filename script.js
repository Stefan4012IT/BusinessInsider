$(document).ready(function() {
    
    /* Sticky-nav*/
    $('.js--section-karakteristike').waypoint(function(direction) {
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset:'65px;'
    });
    
    /* Scroll on buttons */
    
    $('.js--scroll-to-kontakt').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-kontakt').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-kontakt').click(function() {
       $('.js--pravo-racunovodstvo').addClass('animated jackInTheBox');
    });
    
    $('.js--scroll-to-usluge').click(function() {
        var anim = $ ('.js--pravo-racunovodstvo');
       $('html, body').animate({scrollTop: $('.js--usluge').offset().top}, 900);
        anim.addClass('animated jackInTheBox');
        anim.addClass('animate pulse');
    });
    
    /* Navigation scroll */
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    /* Mobile navigation*/
    
    $('.js--nav-icon').click(function() {
        var nav = $ ('.js--main-nav');
        nav.slideToggle(200);
        
    });
    
    
    
   
});