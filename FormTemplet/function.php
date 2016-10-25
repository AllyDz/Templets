<?php
	/** @version 07-09-2016
		@Q Why is this @version not working?
		@A

	**/
	$error = '';
	$success = '';
	$page_url = fileName_hook_pull_requested_page_url('fileName from hooks page');
	
	echo ("Hello World");
	$c = array();

	$c[] ='<head><title>registration</title></head>
				<body><div class="registration-style-50-50 registration-style-100"
					<h3>Registration</h3>
	</body>';
//$userName = ['$user_name'];
	// conditions: assign value to variable with ? (turanery operator), you can also use switch statement
		// this can be used to check for the users name and return it in the HTML
	// swith($userName){
		//case "$userName";
			//print "Hello" " .$userName.";
	//}
?>