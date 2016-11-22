$(function() {


/* THIS IS HOW THE THANK YOU PAGE IS SHOWN */

  $(document).on('can_embed_submitted', function() {
          $('#action-thanks').css('display','block');
          $('#action-form').css('display','none');
          $('#can_thank_you h1').html('Thanks!');
     });


/* Script Expand button */

	$("#sample-script-button").click(function() {
        $('#sample-script-button').css('display', 'none');
        setTimeout(function() {
        $('#sample-script-button').css('opacity', 0);
        }, 50);
        $('#script').css('display', 'block');
        setTimeout(function() {
        $('.script').css('opacity', 1);
        }, 50);;
	})
	$("#collapse-script").click(function() {
		$('#script').css('display', 'none');
        setTimeout(function() {
        $('#script').css('opacity', 0);
        }, 50);
        $('#sample-script-button').css('display', 'block');
        setTimeout(function() {
        $('#sample-script-button').css('opacity', 1);
        }, 50);
	})

});
