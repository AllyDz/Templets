// @todo add the other id's that will be apart of the .toggleClass
// @todo Learning jQuery
jQuery(document).ready(function(){
	
	//alert('JS Loaded');

	//button functions	
	// jQuery('#creat-deck, #pick-deck, #play, #answer').click(function() {
	// 	jQuery('#step2, #step3, #inplay, #definition').toggleClass('show');
	// });
	// jQuery('#creat-deck, #pick-deck, #play, #answer').click(function() {
	// 	jQuery('#step2, #step3, #inplay, #definition').toggleClass('show');
	// });
	jQuery('#answer').click(function() {
		jQuery('#definition').toggleClass('show');
	});
	jQuery('#play').click(function() {
		jQuery('#inplay').toggleClass('show');
	});
	jQuery('#pick-deck').click(function() {
		jQuery('#step3').toggleClass('show');
	});
	jQuery('#creat-deck').click(function() {
		jQuery('#step2').toggleClass('show');
	});
	//alert('JS Completed');
});

// @todo Learn you some jQuery JS chick
	
	// A jQuery(callback) is a 
		//jQuery(document).ready(function(){
			// Your scrip will go in here
			//jQuery('<h1>This can write HTML into</h1>').appentTo('body');
			// @todo How could you use this?
			
		//});