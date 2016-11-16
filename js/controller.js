// var menu = false;
// var Words = ["Bienvenue sur le porfolio de Fabien Tafforeau",
// "Etudiant en 2 ème année à l'Ecole 42"];

// function manageNav() {
// 	menu = (menu) ? (false) : (true);
// 	if (menu == true) {
// 		$( "img" ).css( "visibility", function() {
//   			return 'hidden';
// 		});
// 		$( "#welcom .block-empty .slide" ).addClass('hide');
// 		$("nav").removeClass('animated fadeOutLeft');
// 		$("nav").addClass('animated fadeInLeft');
// 	} else {
// 		$("nav").removeClass('animated fadeInLeft');
// 		$("nav").addClass('animated fadeOutLeft');
// 		$( "#welcom .block-empty .slide" ).removeClass('hide');
// 		$( "img" ).css( "visibility", function() {
//   			return 'visible';
// 		});
// 		};              // the function returns the product of p1 and p2
// 	}

// 	function recurMsg(i) {
// 		$( "#welcom .block-empty .slide" ).text(Words[i]);
// 		$( "#welcom .block-empty .slide" ).addClass("animated fadeIn" );
// 		setTimeout(function(){
//      		  $("#welcom .block-empty .slide").removeClass("animated fadeIn").addClass('animated fadeOut');
//      		  setTimeout(function(){
// 	     		  $("#welcom .block-empty .slide").removeClass("animated fadeOut");  
// 	     		  recurMsg((i == 0) ? (1) : (0));
// 	 		  }, 500);
//  		  }, 2000);
// 	}


// $(".glyphicon-align-justify").click(function() {
// 	manageNav();
// }
// );

// $("nav a").click(function() {
// 	manageNav();
// }
// );

// $("nav a").hover(function() {
// 	$( this ).addClass( "animated bounce" );
// }, function() {
// 	$( this ).removeClass( "animated bounce" );
// }
// );

// $("a img").hover(function() {
// 	$( this ).addClass( "animated pulse" );
// }, function() {
// 	$( this ).removeClass( "animated pulse" );
// }
// );


// recurMsg(0);