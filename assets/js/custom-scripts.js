
	
$(document).ready(function() {
	/*navigayion toggle for small screen*/
  new WOW().init();
	$('#navIcon-toggle').click(function(){
	   $(this).toggleClass('open');
	   $('#navigation').toggleClass('show');
  });

  /*types of hosting to keep one block in active state*/

	$( ".block" ).hover(function() {
		$(".block.state").removeClass('active');},function(){
	$(".block.state").addClass('active');
  	});

	/*owl carousel slider for testimonials*/
    var owl = $('.owl-carousel');
  	owl.owlCarousel({
        margin: 10,
        nav: true,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 2
          }
        }
  	});

  	/*owl carousel navigation next and previous*/

    $('.button-next').click(function() {
  	owl.trigger('next.owl.carousel');
	});

	$('.button-prev').click(function() {
  	owl.trigger('prev.owl.carousel');
	});
});