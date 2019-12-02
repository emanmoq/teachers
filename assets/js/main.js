jQuery(function ($) {

$('.ClassifiedSlider').owlCarousel({
	autoplay:true,
    loop:true,
    margin:10,
	nav:false,
	dots:true,
	items:1,
});

$('select').selectric({
	disableOnMobile: false,
	nativeOnMobile: false
  });
})