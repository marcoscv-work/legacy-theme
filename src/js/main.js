AUI().ready(

	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/

	function() {
	}
);

Liferay.Portlet.ready(

	/*
	This function gets loaded after each and every portlet on the page.

	portletId: the current portlet's id
	node: the Alloy Node object of the current portlet
	*/

	function(portletId, node) {
	}
);

Liferay.on(
	'allPortletsReady',

	/*
	This function gets loaded when everything, including the portlets, is on
	the page.
	*/

	function() {
	}
);


$(document).ready(function(){

	$('.show-menu').on('click',function(){
	
		$(this).find('.icon-bar').toggleClass('active');
		
		if($('#wrapper').hasClass('aside-bar-active')){
			
			$('#wrapper').addClass('aside-bar-closed');
			$('#wrapper').removeClass('aside-bar-active');
			
		}
		
		else{
			$('#wrapper').addClass('aside-bar-active');
			$('#wrapper').removeClass('aside-bar-closed');
			
		}
		
	});

});