var project2Mobile={
	keyvisual: function(){
		$(".keyvisual").mobileDragEvent2({total:4});
	},
	event:function(){
		var swiper=new Swiper("#event .swiper-container", {
			slidesPerView: 2.2,
			spaceBetween: 5,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			}
		});
	},
	post:function(){
		var swiper = new Swiper('.post .swiper-container', {
			spaceBetween: 30,
			centeredSlides: true,

			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.post .swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.post .swiper-button-next',
				prevEl: '.post .swiper-button-prev',
			},
		});
	},
	search:function(){
		$(".campus_find dt a").click(function(e){
			e.preventDefault();
			if($(this).parent().next("dd").css("display") == "none"){
				$(this).addClass("active");
				$(".campus_find dd").slideUp(300);
				$(this).parent().next("dd").slideDown(300);
			}
			else{
				$(this).removeClass("active");
				$(this).parent().next("dd").slideUp(300);
			}
		});

		$(".campus_find dd a").click(function(e){
			e.preventDefault();
			var $dd=$(this).parent().parent().parent();
			listName=$(this).text();

			$dd.slideUp(300);
			$dd.prev("dt").find("a").removeClass("active");
			$dd.prev("dt").find("a").text(listName);
		});
	},
	tabMobile:function(){
		var $menuTab=$(".menu_tab");
		var $mobileTab=$(".mobile_tab");
		var $mobileDepth=$(".mobile_tab > ul > li");
		$menuTab.click(function(e){
				e.preventDefault();
				$("body").addClass("fixed");
				$mobileTab.addClass("active");
				$(this).fadeOut(400);
		});


		$(".closeup").click(function(e){
			e.preventDefault();
			$("body").removeClass("fixed");
			$mobileTab.removeClass("active");
			$menuTab.fadeIn(400);
			$mobileDepth.find("ul").slideUp();
			$mobileDepth.removeClass("active");
		});


		$mobileDepth.click(function(e){
			e.preventDefault();


			if($(this).hasClass("active") == false){
				$mobileDepth.removeClass("active");
				$(this).addClass("active");
				$mobileDepth.find("ul").slideUp(400);
				$(this).find("ul").slideDown(400);
			}
			else{
				$(this).removeClass("active");
				$(this).find("ul").slideUp(400);
			}
		});
	}

}
