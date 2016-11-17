var toggle_menu = true;

$("#toggle-icon").click(function() {
	$("#toggle-nav").slideToggle(100, function() {
		if (toggle_menu) {
			toggle_menu = false;
			$("#toggle-icon i").removeClass("fa-caret-right");
			$("#toggle-icon i").addClass("fa-caret-up");
		} else {
			toggle_menu = true;
			$("#toggle-icon i").removeClass("fa-caret-up");
			$("#toggle-icon i").addClass("fa-caret-right");
		}
  });
});

$("#toggle-nav li").click(function() {
	console.log(this.id);
	$( "#content" ).load( "partials/" + this.id + ".html" );
});
// var current_page = "presentation"

// $("#toggle-nav li").click(function() {
// 	var that = this;
// 	console.log(this);
// $( "#new-projects" ).load( "/resources/load.html #projects li" );
// 	$(".content #" + current_page).hide(100, function() {
// 		current_page = that.id;
// 		$(".content #" + current_page).show(100);
// 	});
// });
