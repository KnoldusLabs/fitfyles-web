$(function() {
	window.scrollReveal = new scrollReveal();
	"use strict";
	
	// PreLoader
	$(window).load(function() {
		$(".loader").fadeOut(400);
	});

	// Backstretchs
	$("#header").backstretch("assets/images/3.jpg");
	$("#services").backstretch("assets/images/3.jpg");			
    
});
