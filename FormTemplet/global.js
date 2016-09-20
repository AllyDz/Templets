// @todo add the other id's that will be apart of the .toggleClass
// @todo consolidate the button action to one function
// @todo Learning jQuery
jQuery(document).ready(function(){
	
	//alert('JS Loaded');

	// @todo toggleClass button functions, one function to rule them all
	//for jQuery('id') < If this was the same id call for all buttons would that consolidate all? 
	// listen for event click
	// jQuery('.btn').each(function)(e) {
	// 	e.observe().click; //
	// }
	// console.log(.btn);
	// if/else a class then do the following
	// when event happends toggole class show/hide

	//OMGOSH this would be a lot of lines script doing it the below way.
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
		//jQuery(document).ready(function(){ < UGH! DO NOT FOR GET THIS!!! if you do your sh*t will not work right.
			// Your scrip will go in here
			//jQuery('<h1>This can write HTML into</h1>').appentTo('body');
			// @todo You might want to use this for flashcards 

		//});