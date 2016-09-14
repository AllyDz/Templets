// @todo add the other id's that will be apart of the .toggleClass
jQuery(document).ready(function(){
	
	//alert('JS Loaded');

	//button functions	
	jQuery('#creat-deck, #pick-deck, #play, #answer').click(function() {
		jQuery('#step2, #step3, #inplay, #definition').toggleClass('show');
	});

	//alert('JS Completed');
});