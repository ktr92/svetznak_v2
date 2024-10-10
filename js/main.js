$(document).ready(function () {


	$('.js-contact-link').on('click', function(e){
		let link = $('.headercontact__contact a', $(this).parent().parent())[0];
        let linkEvent = null;
        if (document.createEvent) {
            linkEvent = document.createEvent('MouseEvents');
            linkEvent.initEvent('click', true, true);
            link.dispatchEvent(linkEvent);
        }
        else if (document.createEventObject) {
            linkEvent = document.createEventObject();
            link.fireEvent('onclick', linkEvent);
        }

        e.preventDefault();
	});

	try {
		$('.mainslider__slider').each(function () {
			$(this).slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				  autoplaySpeed: 3000,
				arrows: false,
				dots: true,
				fade: true,
				responsive: [{

				}]
			});
		});
	} catch (err) {
	}


	$('.productimg__images').slick({
		slidesToShow: 1,
		slidesToScroll: 1,

		infinite: true,
		fade: true,
				arrows: false,


		asNavFor: '.productimg__previews',
		responsive: [

				{
				  breakpoint: 1023,
				  settings: {

					dots: true
				  }
				},

				]
	});

	$('.productimg__previews').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		fade: false,
		dots: false,
		infinite: true,
		vertical: true,
		verticalSwiping: true,
		centerMode: false,
		asNavFor: '.productimg__images',
		arrows: true,
		nextArrow: $('.productimg__down'),
		prevArrow: $('.productimg__up'),
		   focusOnSelect: true
	});


	$('.partners__slider').each(function () {
    $(this).slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: false,
      fade: false,
      nextArrow: $(this).parent().find('.productslider__right'),
      prevArrow: $(this).parent().find('.productslider__left'),
      responsive: [{
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });
  });




	// position the div
	var tbox = $('.search input[type="text"]'),
		   pholder = $('.search__placeholder')

	pholder
		.on('mousedown', 'a', function() {
			pholder.hide();
			var text = $(this).text();
			setTimeout(function() {
				tbox.val(text).focus();
			}, 50);
			return false;
		})
		.on('mousedown', function() {
			pholder.hide();
			setTimeout(function() {
				tbox.val('').focus();
			}, 50);
		});

	tbox.on('blur', function() {
		if($(this).val() === '') pholder.show();
	});

	$('.dselect_js').each(function() {
		$(this).select2();
	});

	/* $('.productlist__item').each(function() {

		$(this).css('height', '424px');
	}); */

	if ($(window).width() > 1023) {
		$('.radiotype2').each(function() {
			var radioheight;
			radioheight = 29 * ($('.radiotype2 > label').length / 2);
			$(this).css('height', radioheight);
		});
	}

	/* new WOW().init(); */
	try {
		$('.productslider__slider-menu').each(function () {
			$(this).slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				/* autoplay: true,
				  autoplaySpeed: 3000,*/
				arrows: false,
				dots: true,
				/* dotsClass: 'mainslider__dots_slick',*/
				responsive: [{

				}]
			});
		});
	} catch (err) {
	}
	/* new WOW().init(); */
	try {
		$('.productslider__slider-five').each(function () {
			$(this).slick({
				infinite: false,
				slidesToShow: 5,
				slidesToScroll: 1,
				autoplay: true,
				  autoplaySpeed: 3000,
				arrows: true,
				  centerPadding: '0',
				  nextArrow: $(this).parent().find('.productslider__right'),
				  prevArrow: $(this).parent().find('.productslider__left'),
					dots: false,
					centerPadding: 20,
					responsive: [
				 {
				  breakpoint: 1385,
				  settings: {
					slidesToShow: 3,

				  }
				},
				{
				  breakpoint: 1023,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 720,
				  settings: {
					slidesToShow: 2,
					}
				}
				]
			});
		});
	} catch (err) {
	}
	try {
		$('.newslist__items_slider').each(function () {
			$(this).slick({
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true,
				  centerPadding: '0',
				  nextArrow: $(this).parent().find('.newslist__right'),
				  prevArrow: $(this).parent().find('.newslist__left'),
					dots: false,
					centerPadding: 20,
					responsive: [

				{
				  breakpoint: 1023,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 720,
				  settings: {
					slidesToShow: 1,
					}
				}
				]
			});
		});
	} catch (err) {
	}


	/*
	$(".productslider__right").click(function (e) {
		$(this).parent().parent().find(".slick-slider").slick("slickNext");
	});
	$(".productslider__left").click(function (e) {
		$(this).parent().parent().find(".slick-slider").slick("slickPrev");
	}); */

	$("input[type=tel]").mask("+7 (999) 999-99-99");
	$('#bx-soa-order input[name=ORDER_PROP_14]').mask("+7 (999) 999-99-99");
	/* if ($(window).width() > 767) {
		$(window).scroll(function () {
			scroll = $(window).scrollTop();
			if (scroll >= 250) {
				$('#header').addClass('fixed');
				$('#header.fixed .header__menu').hide();
			} else {
				$('#header').removeClass('fixed');
				$('.header__menu').show();
				$('#header.fixed .header__menu').hide();
			}
		});
	} else {
		$(window).scroll(function () {
			scroll = $(window).scrollTop();
			if (scroll >= 104) {
				$('.header__menu').addClass('fixed');
				$('#header').addClass('body_scroll');
			} else {
				$('.header__menu').removeClass('fixed');
				$('#header').removeClass('body_scroll');
			}
		});
	} */
	$('.accordeon-titlejs').click(function (event) {
		/* $(this).closest('.accordeon-js').find('.accordeon-contentjs').not($(this).next()).hide(300).removeClass('active'); */
		$(this).closest('.accordeon-js').find('.accordeon-titlejs').not($(this)).removeClass('active');
		$(this).toggleClass('active');
		$(this).next('.accordeon-contentjs').slideToggle();
	});


	var something = (function () {
    var executed = false;
    return function () {
      if (!executed) {
        executed = true;
        $('.stats__number span').each(function () {
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now));
            }
          });
        });
      }
    };
  })();



  $(window).scroll(function () {
    var top_of_element = $(".stats").offset().top;
    var bottom_of_element = $(".stats").offset().top + $(".stats").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
      something()
    } else {

    }
  });


	$('.hiddentext').find('.hiddentext__hidden').hide();
  $('.hiddentext .hiddentext__visible').append('<a href="#" class="link link_hiddentext link_hiddentext--show">Читать далее</a>');
  $('.link_hiddentext--show').on('click', function (event) {
    event.preventDefault()
    $(this).css({
      'opacity': 0,
      'z-index': -1,
      'position': 'relative'
    })
    $(this).closest('.hiddentext').find('.hiddentext__hidden').slideToggle()
  })



});
$(function () {

	// $('.location__content').click(function (event) {
	// 	$(this).toggleClass('active');
	// 	$('.location_tooltip').slideToggle();
	// });

	$('.login__content').click(function (event) {
		event.preventDefault;
		$(this).toggleClass('active');
		$('.login_tooltip').slideToggle();
	});

	function showSlider() {
		$('.productslider__slider-menu.slick-slider').css('opacity', '1');
	}
	function hideSlider() {
		$('.productslider__slider-menu.slick-slider').css('opacity', '0');
	}
	if ($(window).width() > 1023) {
		$(".mainmenu__links ul li").on({
			'mouseenter': function () {
				$(this).find('.productslider__slider-menu').slick('refresh');

				setTimeout(showSlider,	'300');


				$(this).addClass('active');
				if ($(this).find('.mainmenu__wrapper').length) {
					$(this).find('.mainmenu__wrapper').addClass('active');
					if ($('.mainmenu__wrapper').hasClass('active')) {
						$('.mainmenu__content').css('width', '100%');

					}
				}
			},
			'mouseleave': function () {
				$(this).removeClass('active');
				$(this).find('.mainmenu__wrapper').removeClass('active');
				if ($('.mainmenu__wrapper').hasClass('active')) {
						$('.mainmenu__content').css('width', '100%');
					}
					else {
						$('.mainmenu__content').css('width', 'initial');
						 hideSlider();
					}
			}
		});
	}
	else {
		$(".mainmenu__links ul li").on({
			'click': function () {
				$(this).toggleClass('active');
				$(this).find('.mainmenu__wrapper').slideToggle('active');
			}
		});
	}

	let hamburger = document.querySelector('.menubtn');
	let menu = document.querySelector('.mainmenu');

	const toggleMenu = () => {
	  menu.classList.toggle('active');
	}

	hamburger.addEventListener('click', e => {
	  e.stopPropagation();

	  toggleMenu();
		$('.mainmenu').find('.productslider__slider-menu').slick('refresh');

	});

	document.addEventListener('click', e => {
	  let target = e.target;
	  let its_menu = target == menu || menu.contains(target);
	  let its_hamburger = target == hamburger;
	  let menu_is_active = menu.classList.contains('active');

	  if (!its_menu && !its_hamburger && menu_is_active) {
		toggleMenu();
	  }
})



	/* $(".menubtn").on({
		'click': function () {
			if ($(".mainmenu").hasClass('active')) {
				$('.mainmenu').removeClass('active');
			} else
			{
				$('.mainmenu').addClass('active');
			}

		}
	});


	jQuery(function($){

			$(document).mouseup(function (e){ // событие клика по веб-документу
			if ($(".mainmenu").hasClass('active')) {
				var div = $(".mainmenu"); // тут указываем ID элемента
				if (!div.is(e.target) // если клик был не по нашему блоку
					&& div.has(e.target).length === 0) { // и не по его дочерним элементам
					div.removeClass('active'); // скрываем его
				}
			}
			});

	});
	 */



	$('.burger-mobile_unactive').click(function (event) {

		/* $('.topmenu').slideToggle().toggleClass('active');
		 */$('.topmenu').slideToggle();
		 $(this).hide();
		$('.burger-mobile_active').show();

	});

	$('.burger-mobile_active').click(function (event) {

		/* $('.topmenu').slideToggle().toggleClass('active'); */
		$('.topmenu').slideToggle();
			$(this).hide();
		$('.burger-mobile_unactive').show();

	});



	$('.search-mobile_unactive').click(function (event) {
		$('.search').toggleClass('search_open');
		 $(this).hide();
		$('.search-mobile_active').show();

	});

	$('.search-mobile_active').click(function (event) {
		$('.search').toggleClass('search_open');
			$(this).hide();
		$('.search-mobile_unactive').show();

	});



	$('.closemenu').click(function (event) {
		$('.topmenu').slideToggle();
	});






	$('.menufixed').click(function (event) {
		$('.header__menu').slideToggle();
	});
	$('.topmenumobile').click(function (event) {
		$('.topmenu').slideToggle();
	});
	$('.mainmenu ul > li .fa-angle-down').click(function (e) {
		if ($(window).width() < 1024) {
			e.preventDefault();
			$(this).parent().parent().find('.mainmenu__child').stop(true, true).slideToggle(250).end().siblings().find('.mainmenu__child').slideUp(250);
		}
	});


	(function($) {
	$(function() {

		$('ul.tabs__caption_js').on('click', 'li:not(.active)', function() {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		});

	});
	})(jQuery);

	$('.filter__header').on('click', function() {
		$(this).parent().toggleClass('filter__item_open');
		//$(this).siblings('.filter__form').slideToggle();


	});

	$('.mask-button').on('click', function() {
		$(this).siblings('.dtext').animate({
				height: $('.dtext').get(0).scrollHeight
			}, 1000, function(){
				$(this).height('auto');
		});
		$(this).siblings('.dtext').find('.mask-hidden').hide();

		$(this).hide();
	});

/*
	if ($(window).width() < 720) {
		$(window).scroll(function () {
			let hei = $('.filter__content').height() - $(window).height() + 72;

            if ($(window).scrollTop() > hei) {

                $(".filter__buttons").addClass("absolute");
            } else {
                $(".filter__buttons").removeClass("absolute");
            }

        });


		$(window).on('click', function() {
			$(this).parent().toggleClass('filter__item_open');
			$(this).siblings('.filter__form').slideToggle();
			let hei = $('.filter__content').height() - $(window).height() + 72;

            if ($(window).scrollTop() > hei) {

                $(".filter__buttons").addClass("absolute");
            } else {
                $(".filter__buttons").removeClass("absolute");
            }
		});
	}
	 */

	function checkHeight() {
		let hei2 = $('.filter__content').height() - $(window).height() + 72;

		if ($(window).scrollTop() > hei2) {
			$(".filter__buttons").addClass("absolute");
		} else {
			$(".filter__buttons").removeClass("absolute");
		}
	};

	if ($(window).width() < 720) {
		$(window).scroll(function () {
			checkHeight()
        });
		$(window).on('click', function() {
			setTimeout(checkHeight(),900);
		});
	}

	$('.buttonfilter').on('click', function() {
		$('.filter').slideToggle();
	});
	$('.filter__close').on('click', function() {
		$('.filter').slideToggle();
	});

	function incrementValue(e) {
	  e.preventDefault();
	  var fieldName = $(e.target).data('field');
	  var parent = $(e.target).closest('div');
	  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

	  if (!isNaN(currentVal)) {
		parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
	  } else {
		parent.find('input[name=' + fieldName + ']').val(1);
	  }
	}

	function decrementValue(e) {
	  e.preventDefault();
	  var fieldName = $(e.target).data('field');
	  var parent = $(e.target).closest('div');
	  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

	  if (!isNaN(currentVal) && currentVal > 1) {
		parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
	  } else {
		parent.find('input[name=' + fieldName + ']').val(1);
	  }
	}

	$('.quantity').on('click', '.quantity-plus', function(e) {
	  incrementValue(e);
	});

	$('.quantity').on('click', '.quantity-minus', function(e) {
	  decrementValue(e);
	});

	if ($(window).width() > 719) {
		(function($) {
		$(function() {

			$('.producttabs__header ul').on('click', 'li:not(.active)', function() {
				$(this)
					.addClass('active').siblings().removeClass('active')
					.closest('div.producttabs').find('div.producttabs__content').removeClass('active').eq($(this).index()).addClass('active');
			});

		});
		})(jQuery);
	}
	else {
		$('.producttabs__content h2').click(function (event) {
		/* $(this).closest('.accordeon-js').find('.accordeon-contentjs').not($(this).next()).hide(300).removeClass('active'); */
		$(this).closest('.producttabs__content').find('.producttabs__main h2').not($(this)).removeClass('active');
		$(this).toggleClass('active');
		$(this).next('.producttabs__main').slideToggle().toggleClass('active');
	});
	}


	(function($) {
		$(function() {

			$('.contacttabs__header ul').on('click', 'li:not(.active)', function() {
				$(this)
					.addClass('active').siblings().removeClass('active')
					.closest('div.contacttabs').find('div.contacttabs__content').removeClass('active').eq($(this).index()).addClass('active');
			});

		});
		})(jQuery);

	if ($(window).width() < 720) {
		let tabs = $('.tabs');
		let sel = $(this).find('.tabs__caption li.active').html();
		$(this).find('.tabs__selector').html(sel);

		$('.tabs__selector').on("click", function(){
			$(this).siblings('.tabs__caption').slideToggle();
		});
		$('.tabs__caption li').on("click", function(){
			$(this).parent().parent().find('.tabs__caption').hide();
			let sel = $(this).html();
			$(this).parent().parent().find('.tabs__selector').html(sel);
			$(this).siblings('.tabs__caption').slideToggle();
		});



	}



	$('.icblock__button a').on('click', function(e) {
		if ($(this).attr("data-tabs")) {
			e.preventDefault();
			let datatarget = $(this).attr("data-tabs");
			console.log(datatarget);
			let target = $('li.btn_tabs');
			$('html, body').stop().animate({
			 'scrollTop': target.offset().top - 100
			 }, 500, 'swing', function () {
			 window.location.hash = target;
			 });
			 $('li.btn_tabs[data-tabs^="'+datatarget+'"]').trigger("click");

			 }


	});
	if ($(window).width() > 1023) {
		$(".various").each(function() {
			$(this).fancybox({
						maxWidth    : 800,
						maxHeight   : 600,
						fitToView   : false,
						width       : '70%',
						height      : '70%',
						autoSize    : false,
						closeClick  : false,
						openEffect  : 'none',
						closeEffect : 'none'
				});
			console.log($(this).attr('href'));
			var variousId = $(this).attr('href').match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
			$(this).append('<img src="//img.youtube.com/vi/'+variousId+'/0.jpg">');
		})
	}
	else {
		$(".various_mobile").each(function() {
			$(this).fancybox({
						maxWidth    : 320,
						maxHeight   : 250,
						fitToView   : false,
						width       : '100%',
						height      : '100%',
						autoSize    : false,
						closeClick  : false,
						openEffect  : 'none',
						closeEffect : 'none'
				});
			console.log($(this).attr('href'));
			var variousId = $(this).attr('href').match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
			$(this).append('<img src="//img.youtube.com/vi/'+variousId+'/0.jpg">');
		})
	}

});






$(document).ready(function () {
	$('.js-ajax-form').on('submit', function (e) {
		e.preventDefault();
		var $form = $(this),
			data = $form.serialize();
		grecaptcha.execute('6LfhWIQpAAAAAEO0AXZKhvuzAeIPCvcO3lXtUSNB',{action:'action_name'}).then(function(token) {

			$.post($form.data('url'), data + '&token=' + token, function (result) {

				$form.trigger('reset');
				$form.find('.alert-success').removeClass('hidden');
				setTimeout(() => {
					$form.find('.alert-success').addClass('hidden');
					$('.modal').modal('hide');
				}, 4000);
			})
		});
	})
})

$(document).ready(function () {
	$('form#FEEDBACK').on('submit', function (e) {
		var $form = $(this);
    let valid = true
    $('form#FEEDBACK .help-block').each(function() {
      if ($(this).is(":visible")) {
        valid = false
      }
    })

    if (valid) {
      ym(90528650,'reachGoal','zadat_vopros')
    }

	})

	$('[name="Register"]').on('click', function (e) {
		const $btn = $(this);
		e.preventDefault();

		if ($('#token').length) {
			$('#token').remove();
		}
		grecaptcha.execute('6LfhWIQpAAAAAEO0AXZKhvuzAeIPCvcO3lXtUSNB',{action:'action_name'}).then(function(token) {
			$('<input>', {
				type: 'hidden',
				id: 'token',
				name: 'token',
				value: token
			}).appendTo('form');

			$btn.parents('form').submit();
		})
	})
})
