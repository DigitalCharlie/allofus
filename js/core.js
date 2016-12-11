$(function() {


/* THIS IS HOW THE THANK YOU PAGE IS SHOWN */

  $(document).on('can_embed_submitted', function() {
          $('#action-thanks').css('display','block');
          $('#action-form').css('display','none');
          $('#can_thank_you h1').html('Thanks!');
     });

/* THIS IS THE HEADER SCROLL STUFF */

  /* ALWAYS VISIBLE NOW
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 500){
        $(".header").css('height', '50px');
      } else {
        $(".header").css('height', '0');    
      }
    });
  */

/* Script Expand button */

	$("#homepage-read-more-link").click(function() {
        $('#homepage-read-more-link').css('display', 'none');
        setTimeout(function() {
        $('#homepage-read-more-link').css('opacity', 0);
        }, 50);
        $('#homepage-read-more-content').css('display', 'block');
        setTimeout(function() {
        $('.homepage-read-more-content').css('opacity', 1);
        }, 50);;
	})

});

/* TEXT CHANGE */

  $(document).ready(function() {
    $('.widget_title').html("Don't see an event near you and want to host one?");
  });
