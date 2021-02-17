$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};


	//btn tgl
    $('.js-btn-tgl').on('click', function() {
        $(this).toggleClass('active');
        return false;
    })


    //search toggle
    $('.js-search-toggle-view').on('click', function() {
        $(this).parents('.frm-search-result-wrap').toggleClass('result-history');
        return false;
    })


    //img to bg
    $('.js-bg-box').each(function() {
        var picUrl = $(this).find('.js-bg-photo').attr('src');
        $(this).css('background-image', 'url('+picUrl+')');
        $(this).find('.js-bg-photo').hide();
    })

	//popup block
	$('.js-popup-wrap .js-btn-toggle').on('click touchstart', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('menu-show');
		} else {
			$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
			$(this).addClass('active');
			if ($(this).parent().hasClass('main-menu-wrap')) {
				$('body').addClass('menu-show');
			}
		}
		return false;
	})
	$('.js-popup-wrap .js-btn-close').on('click', function() {
		$(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
		$('body').removeClass('menu-show');
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".js-popup-block").length) return;
	    $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
	    $('body').removeClass('menu-show');
	    event.stopPropagation();
	});
	$('.js-popup-wrap').each(function() {
		if ($(this).hasClass('js-popup-select')) {
			// alert(1)
			if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
				$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
			}
			var currentSelect = $(this).find('.js-popup-block').find('.active').html();
			$(this).find('.js-btn-toggle').html(currentSelect);
		}
	})
	$('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
			$(this).addClass('active');
		}
		$('.js-popup-wrap').each(function() {
			if ($(this).hasClass('js-popup-select')) {
				if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
					$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
				}
				var currentSelect = $(this).find('.js-popup-block').find('.active').html();
				$(this).find('.js-btn-toggle').html(currentSelect);
			}
		})
		$(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
		return false;
	})

	//tabs
	$('.js-tabs-nav').each(function() {
		$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
	})
	$('.js-tab-title').each(function() {
		if ($(this).hasClass('active')) {
			$(this).next('.js-tab-content').show(0);
		}
	})
	$('.js-tabs-nav li a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$('.js-tab-block').removeClass('active');
			$(this).parents('.js-tabs-nav').find('.active').removeClass('active');
			$(this).addClass('active');
			$('.js-tabs-nav').each(function() {
				$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
			})
		}
		return false;
	})
	$('.js-tab-title').on('click' , function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next('.js-tab-content').slideUp(200);
		} else {
			$(this).addClass('active').next('.js-tab-content').slideDown(200);
		}
	})


    //side menu
    $('.nav .menu-outer-wrap a').on('click', function() {
        let menuHeight = 0;
        if ($(this).next('ul').length > 0) {
            if ($(window).innerWidth() > 1023) {
                if ($(this).parent('li').hasClass('open')) {

                } else {
                    $(this).parent('li').parent('ul').children('li').removeClass('open');
                    $(this).parent('li').addClass('open');
                }
            } else {
                if ($(this).parent('li').hasClass('open')) {
                    $(this).parent('li').removeClass('open');
                } else {
                    $(this).parent('li').addClass('open');
                }
            }
            $('.menu-outer-wrap li.open').each(function() {
                if ($(this).children('ul').outerHeight() > menuHeight) {
                    menuHeight = $(this).children('ul').outerHeight();
                }
            })
            $('.nav .menu-wrap').css('min-height', menuHeight)
            return false;
        }
    })
    $(window).on('resize', function() {
        $('.nav .open').removeClass('open');
    })


    //selection slider
    let selSlider = $('.selection-box .slider').owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        fluidSpeed: 1000,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        dotsSpeed: 1000,
        dragEndSpeed: 1000,
        responsiveRefreshRate: 100,
        autoHeight: true,
        autoplay: false,
        autoplayTimeout: 5000,
        mouseDrag: false,
        touchDrag: false,
        onTranslated: function (event) {
            if (event.item.index > 0) {
                $('.selection-box .js-selection-prev').removeClass('button-disabled');
            } else {
                $('.selection-box .js-selection-prev').addClass('button-disabled');
            }
            if ((event.item.index + 1) == event.item.count) {
                $('.selection-box .js-selection-next').addClass('button-disabled');
            } else {
                $('.selection-box .js-selection-next').removeClass('button-disabled');
            }
        }
    })
    $('.js-selection-prev').on('click', function() {
        selSlider.trigger('prev.owl.carousel');
        return false;
    })
    $('.js-selection-next').on('click', function() {
        selSlider.trigger('next.owl.carousel');
        return false;
    })


    //search result show
    $('.frm-main-search input').on('focus', function() {
        $(this).parents('.search-wrap').find('.frm-search-result-wrap ').addClass('active');
    })
    $('.frm-main-search input').on('blur', function() {
        $(this).parents('.search-wrap').find('.frm-search-result-wrap ').removeClass('active');
    })
	
});