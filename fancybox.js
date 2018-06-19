$().ready(function(){
	$(".lightbox").fancybox();

	$('a[href^="#"]').click(function(){
	$("html, body").animate({
		scrollTop: $( $.attr(this, "href")).offset().top
	}, 600);

	return false;
});