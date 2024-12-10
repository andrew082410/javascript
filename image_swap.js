"use strict";


$(document).ready( () => {
	// preload images
	$("#image_list a").each( (index, element) => {
		const swappedImage = new Image();
		swappedImage.src = $(element).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click( evt => {
		const link = evt.currentTarget;
		
		const imageURL = $(link).attr("href");
		$("#image").attr("src", imageURL);
				
		const caption = $(link).attr("title");
		$("#caption").text(caption);

		$('#caption').fadeOut(1000, function(){$
		('#caption').fadeOut(1000, function(){$
		('#image').fadeOut(1000);

		$('#caption').text(newCaption).fadeIn(1000);
		$('#image').attr('src',newImage).fadeIn(1000);});});
		
		// cancel the default action of the link
	    evt.preventDefault();
		}); // end click
	function myfun(){
		var $active =$('#mygallery.active');
		var $next =($('#mygallery.active').next().length >0)
		? $('#mygallery.active').next(): $('mygallery img:first');
		$active.fadeOut(function(){
			$active.removeClass('active');
			$next.fadeIn().addclass('active');
		});}
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready