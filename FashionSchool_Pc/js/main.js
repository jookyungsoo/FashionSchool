var $window, $body;

var project2PC={
	navigation:function(){
		var $depth1=$(".menu > ul > li");
		$depth1.hover(
			function(){
				$(this).addClass("active");
				$(this).children().next(".sub1").stop().slideDown(300);
			},
			function(){
				$(this).removeClass("active");
				$(this).children().next(".sub1").stop().slideUp(300);
			}
		);

		$depth1.children("a").focusin(function(){
			$(this).parent().addClass("active");

			$(this).next(".sub1").stop().slideDown(300);
		});

		var total=$depth1.length; //length 노드의개수
		console.log(total);

		$depth1.find("li:last-child a").focusout(function(){
			var $depth1Li=$(this).parent().parent().parent();
			$depth1Li.removeClass("active");

			$(this).parent().parent(".sub1").stop().slideUp(300);
		});
	},
	slider:function(){
		var mediaN=0;
		var mediaPos=0;
		var $buttonLi=$(".button li");

		$buttonLi.eq(mediaN).addClass("active");

		$buttonLi.click(function(e){
			e.preventDefault();
			$buttonLi.removeClass("active");
			$(this).addClass("active");

			mediaN=$(this).index();
			mediaPos=mediaN*(-1)*368;
			$(".congrat ul").animate({left:mediaPos},300);
		});
	},
	noticeTab:function(){
		var $noti=$(".text .noti");
		var $none=$(".text .none");
		$noti.click(function(e){
			e.preventDefault();
			$(".detail").show();
			$(".news").hide();
			$noti.addClass("active");
			$none.removeClass("active");
		});
		$none.click(function(e){
			e.preventDefault();
			$(".detail").hide();
			$(".news").show();
			$noti.removeClass("active");
			$none.addClass("active");
		});
	},
	searchCampus: function(){
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
	footBanner: function(){
		var gallery=$(".photos");
		var gallerypos=0;
		var galleryw=160;

		$(".left").click(function(e){
			e.preventDefault();
			rightMoving();
		});
		$(".right").click(function(e){
			e.preventDefault();
			leftMoving();
		});

		function leftMoving(node=gallery, pos=gallerypos, w=galleryw){
			pos=pos-w;
			$(node).animate({left:pos},400,function(){
				$(this).append(node.find("li").first());

				pos=pos+w;
				$(this).css({left:pos});
			});
		}

		function rightMoving(node=gallery, pos=gallerypos, w=galleryw){
			$(node).prepend(node.find("li").last());
			pos=pos-w;
			$(node).css({left:pos});

			pos=pos+w;
			$(node).animate({left:pos},400);
		}

		var id=setInterval(rightMoving, 3000);

		$(".left, .right").hover(
			function(){
				clearInterval(id);
			},
			function(){
				id=setInterval(rightMoving, 3000);
			}
		);
	},
	admission: function(){
		var $dim=$(".admission .dim");
		$(".admission").hover(
			function(){
				$dim.animate({height: "100%"},400);
				$dim.find("a").addClass("active");
				$(".admission .sub_txt").hide();
			},
			function(){
				$dim.animate({height: 0});
				$dim.find("a").removeClass("active");
				$(".admission .sub_txt").show(300);
			}
		);

	},
	study:function(){
		var $dim=$(".study .dim");
		$(".study").hover(
			function(){
				$dim.animate({width: "100%"},400);
				$dim.find("a").addClass("active");
				$(".study .sub_txt").hide();
			},
			function(){
				$dim.animate({width: 0});
				$dim.find("a").removeClass("active");
				$(".study .sub_txt").show(300);
			}
		);
	},
	carousel:function(){
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			responsive:{
				0:{
					items:1
				}
			}
		});
		$(".owl-carousel").trigger("refresh.owl.carousel");
	}

}
