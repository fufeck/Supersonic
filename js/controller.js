var toggle_menu = true;
$( "#content" ).load( "partials/welcom.html" );

$("#toggle-icon").click(function() {
	if (toggle_menu) {
		toggle_menu = false;
		$("#toggle-icon #caret").removeClass("fa-caret-right");
		$("#toggle-icon #caret").addClass("fa-caret-up");
		$("#toggle-icon #folder").removeClass("fa-folder-open-o");
		$("#toggle-icon #folder").addClass("fa-folder-o");
	} else {
		toggle_menu = true;
		$("#toggle-icon #caret").removeClass("fa-caret-up");
		$("#toggle-icon #caret").addClass("fa-caret-right");
		$("#toggle-icon #folder").removeClass("fa-folder-o");
		$("#toggle-icon #folder").addClass("fa-folder-open-o");
	}
	$("#toggle-nav").slideToggle(100);
});

$("#toggle-nav li").click(function() {
	console.log(this.id);
	if (this.id != "cv") {	
		$( "#content" ).load( "partials/" + this.id + ".html" );
	}
});
