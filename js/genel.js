// slider tıklama //
function FixIt(){
	$('span.swiper-pagination-bullet').hover(function(e){$(this).trigger('click' );});
	 window.setTimeout(FixIt, 8000);
}
window.setTimeout(FixIt, 100);
// slider tıklama //

// anasayfa slider sol //
var swiper = new Swiper('.solSlider', {
	spaceBetween: 0,
	centeredSlides: true,
	autoplay: {
		delay: 99999999999999999,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',

	},
});
// anasayfa slider sol //
// 		delay: 2500,
// anasayfa ikili slider sol //
var swiper = new Swiper('.ikiliSlider', {
	slidesPerView: 2,
	spaceBetween: 30,
	autoplay: {
		delay: 157500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
// anasayfa ikili slider sol //

// anasayfa tekli slider sağ //
var swiper = new Swiper('.tekliSlider', {
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 157500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
// anasayfa tekli slider sağ //


// single galeri slider

var swiper = new Swiper('.singleGaleri', {
	 pagination: {
		 el: '.swiper-pagination',
		 	 clickable: true,
		 renderBullet: function (index, className) {
			 return '<span class="' + className + '">' + (index + 1) + '</span>';
		 },
	 },
 });
 // single galeri slider

// responsive menü

// responsive menü
