$(document).ready(function() {

	$('.tabs_header .tab_item').equalHeights();

	$('.popup_c').magnificPopup();

	$('.popup').magnificPopup({type:'image'});

	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});

	$( ".map" ).mouseleave(function() {
		$(".mask").addClass("overlay");
	});

	$('.overlay').click(function() {
		$(this).removeClass("overlay");
	});

	$(".carusel").owlCarousel({
		responsive : {
	        0 : {
	            items : 1,
	            nav : true
	        }
	    },
	    navText: ""
	});

	function wResize(){
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize();
	});
	
	$(".contacts_top .tab").click(function() {
		$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$(".bottom_phone .wrapper .tab").click(function() {
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var t = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
				t.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});

$(window).load(function() {
	if (!window.matchMedia('screen and (max-width: 500px)').matches) {
		$(".top_header").animated("fadeInDown", "fadeOut");

		$(".tabs_header .wrapper").animated("flipInY", "fadeOut");

		$(".profi_item").animated("fadeInRight", "fadeOutRight");

		$(".s_profi form").animated("zoomInRight", "fadeOut");

		$(".s_back h3").animated("fadeInUp", "fadeOut");

		$(".s_review h2").animated("zoomIn", "zoomOut");
		$(".review_item").animated("zoomIn", "zoomOut");
		$(".owl-prev").animated("zoomInLeft", "zoomOutLeft");
		$(".owl-next").animated("zoomInRight", "zoomOutRight");
		$(".owl-dots").animated("fadeInUp", "fadeOutDown");

		$("footer").animated("fadeIn", "fadeOut");
	}
});