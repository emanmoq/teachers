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
  $('.PremiumSlider').owlCarousel({
	autoplay:true,
    loop:true,
    margin:10,
	nav:false,
	dots:false,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:2
		}

	}
});
$('.AdvertisersSlider').owlCarousel({
	autoplay:true,
    loop:true,
    margin:10,
	nav:false,
	dots:false,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:2
		}

	}
});
})