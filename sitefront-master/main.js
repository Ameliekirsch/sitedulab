(function () {	

	if($("html").hasClass("no-cssvhunit")) {
		$('#toggle').hide();
		//Go sur le site spécial IE8
		$(".ie-unsupported").show();
		$(".site-wrap").hide();
		$("#navigation-overlay").hide();
		$("#toggle").hide();
		$( window ).resize(function() {
		  $(".ie-unsupported").height($(window).height());
		});
		$(window).trigger('resize');
	} else {
		$(".site-wrap").snapscroll({'scrollOptions':{'axis':'y'}});
	}
	
	$('.people').swiper({
        grabCursor: true,
        slidesPerView: 'auto',
		centeredSlides: true,
		initialSlide : 0
    });
	
	$('.team-button-prev').on('click', function(e){
		e.preventDefault()
		var swiper = $(this).siblings('.people').data('swiper');
		swiper.swipePrev();
	});
	
	$('.team-button-next').on('click', function(e){
		e.preventDefault()
		var swiper = $(this).siblings('.people').data('swiper');
		swiper.swipeNext();
	});
	
    $('.presentation-container').swiper({
		initialSlide : 0,
		onSlideChangeStart: function(){
			$(".presentation-arianne").removeClass("arianne-active");
			$(".presentation-arianne[data-arianneitem='"+$(".presentation-slide.swiper-slide-active").data("arianne")+"']").addClass("arianne-active");
		}
    });
	$(".presentation-pagination > a").on("click", function(e){
		e.preventDefault()
		var swiper = $(this).parent().siblings('.presentation-container').data('swiper');
		swiper.swipeTo($(this).data("arianneitem")-1);
	});
	$('.presentation-button-prev').on('click', function(e){
		e.preventDefault()
		var swiper = $(this).siblings('.presentation-container').data('swiper');
		swiper.swipePrev();
	});
	
	$('.presentation-button-next').on('click', function(e){
		e.preventDefault()
		var swiper = $(this).siblings('.presentation-container').data('swiper');
		swiper.swipeNext();
	});
	
	$('.gallery-top').swiper({
		nextButton: '.project-button-next',
		prevButton: '.project-button-prev',
		pagination: '.project-pagination',
		paginationClickable: true,
		initialSlide : 0
	});
	
	$('.project-button-prev').on('click', function(e){
		e.preventDefault()
		var swiper = $(this).siblings('.gallery-top').data('swiper');
		swiper.swipePrev();
	});
	
	$('.project-button-next').on('click', function(e){
		e.preventDefault()
		var swiper = $(this).siblings('.gallery-top').data('swiper');
		swiper.swipeNext();
	});
	
	$(".scroll-to").click( function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 750; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
		return false;
	});

	function toggleOverlay(){
		$('#toggle').toggleClass('on');
		$('body').toggleClass('overlay-active').toggleClass("overlay-hidden").delay(300).toggleClass("overlay-under");
	   return false;
	}
	
	$('#toggle').on( "click", toggleOverlay );

	$(".nav-item").on("click", toggleOverlay );
	
}());