
$(function(){
	var navItems = $(".steele-nav a");
	var body = $("html, body");
	var scrollTop = $("#scrollTop");
	navItems.click(function(e){
		e.preventDefault();
		$this = $(this);
		$this.parent().siblings().children().removeClass("activated");
		$this.addClass('activated');
		var target = $( $this.attr('href') );
		body.animate({
			scrollTop: target.offset().top 
			}, '2000');
	});
	scrollTop.click(function(e){
		e.preventDefault();
		body.animate({
			scrollTop: 0
			}, '2000');
	});
});