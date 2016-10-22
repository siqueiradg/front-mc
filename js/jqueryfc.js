$(document).ready(function(){

     $(".button-collapse").sideNav({
                menuWidth: 240, // Default is 240
                edge: 'left', // Choose the horizontal origin
                closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });



	/*MOSTRAR E OCULTAR MENU - DESKTOP*/
    $("#click-menu").click(function(){

    	var menu = $("#menu-topo").css( "display" );

    	if (menu == "none") {
    		$("#menu-topo").show(50);
    	}
    	if (menu == "block") {
    		$("#menu-topo").hide(50);
    	}
	});

    /*MOSTRAR E OCULTAR busca - DESKTOP*/
    $("#click-busca").click(function(){

        var menu = $("#box-s").css( "display" );

        if (menu == "none") {
            $("#box-s").show(500);
        }
        if (menu == "block") {
            $("#box-s").hide(50);
        }
    });


});


