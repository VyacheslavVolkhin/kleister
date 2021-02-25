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


	//profile section toggle
    $('.js-section-toggle-view').on('click', function() {
        $(this).parents('.profile-section-wrap').removeClass('section-view');
        return false;
    })
    $('.js-section-cancel').on('click', function() {
        $(this).parents('.profile-section-wrap').addClass('section-view');
        return false;
    })
    $('.js-section-save').on('click', function() {
        $(this).parents('.profile-section-wrap').addClass('section-view');
        return false;
    })


	//password view toggle
    $('.js-btn-view-toggle').on('click', function() {
        if ($(this).next('input').attr('type')=='text') {
            $(this).next('input').attr('type', 'password');
        } else {
            $(this).next('input').attr('type', 'text');
        }
        return false;
    })


	//btn tgl
    $('.js-btn-tgl').on('click', function() {
        $(this).toggleClass('active');
        return false;
    })


    //select style
    $('select.js-select').styler({

    })


    //frm counter
    $('.js-counter .js-button-counter-minus').on('click', function(){
        var cnt=$(this).parents('.js-counter').find('.js-input-counter').val();
        cnt=parseInt(cnt);
        if (cnt>0) {
            $(this).parents('.js-counter').find('.js-input-counter').val(cnt-1);
        }
        return false;
    })
    $('.js-counter .js-button-counter-plus').on('click', function(){
        var cnt=$(this).parents('.js-counter').find('.js-input-counter').val();
        $(this).parents('.js-counter').find('.js-input-counter').val(cnt-1+2);
        return false;
    })


    //filter
    $('.js-filter-toggle').on('click', function() {
        $('.catalog-outer-wrap').toggleClass('filter-active');
        return false;
    })
    $('.js-btn-filter-toggle').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').next('.filter-section-content').slideUp(200);
        } else {
            $(this).addClass('active').next('.filter-section-content').slideDown(200);
        }
        return false;
    })
    $('.js-btn-filter-hidden-toggle').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').parents('.filter-section').find('.section-content-hidden').slideUp(200);
        } else {
            $(this).addClass('active').parents('.filter-section').find('.section-content-hidden').slideDown(200);
        }
        return false;
    })
    $('select.js-catalog-view-toggle').on('change', function() {
        if ($(this).val() === 'list') {
            $('.catalog-box').addClass('view-list');
        } else {
            $('.catalog-box').removeClass('view-list');
        }
    })


    //unit input
    $('[data-unit] input').on('blur', function() {
        $('[data-unit]').each(function() {
            $(this).children('input').val(parseInt($(this).children('input').val()) + ' ' + $(this).attr('data-unit'));
        })
    })
    $('[data-unit] input').on('focus', function() {
        $(this).val(parseInt($(this).val()))
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


    //catalog list box
    $('.catalog-list-box .slider').owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        fluidSpeed: 1000,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        dotsSpeed: 1000,
        dragEndSpeed: 1000,
        responsiveRefreshRate: 100,
        autoHeight: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoWidth: true,
        navClass: ['btn btn-action-ico button-nav nav-prev','btn btn-action-ico button-nav'],
        responsive: {
            0: {items: 1},
            1024: {items: 3, autoWidth: false, nav: true},
            1600: {items: 4, autoWidth: false, nav: true},
        },
        onInitialized: function() {
            $('.elm-scroll').each(function() {
                let scrollSize = $(this).parents('.scroll-wrapper').find('.owl-item').length;
                let scrollActive = $(this).parents('.scroll-wrapper').find('.owl-item.active').length
                let scrollCurrent = $(this).parents('.scroll-wrapper').find('.owl-item.active:first').index();
                let scrollWidth = 100/(scrollSize/(scrollActive+scrollCurrent));
                console.log(scrollSize + '+' + scrollActive + '+' + scrollWidth)
                $(this).children('.scroll-track').width(scrollWidth+'%');
            })
        },
        onTranslated: function() {
            $('.elm-scroll').each(function() {
                let scrollSize = $(this).parents('.scroll-wrapper').find('.owl-item').length;
                let scrollActive = $(this).parents('.scroll-wrapper').find('.owl-item.active').length
                let scrollCurrent = $(this).parents('.scroll-wrapper').find('.owl-item.active:first').index();
                let scrollWidth = 100/(scrollSize/(scrollActive+scrollCurrent));
                console.log(scrollSize + '+' + scrollActive + '+' + scrollWidth)
                $(this).children('.scroll-track').width(scrollWidth+'%');
            })
        },
    })



    //search result show
    $('.frm-main-search input').on('focus', function() {
        $(this).parents('.search-wrap').find('.frm-search-result-wrap ').addClass('active');
    })
    $('.frm-main-search input').on('blur', function() {
        $(this).parents('.search-wrap').find('.frm-search-result-wrap ').removeClass('active');
    })


    //range price
    $('#range').slider({
        range: true,
        min: 0,
        max: 25000,
        values: [4999, 15999],
        slide: function( event, ui ) {
            $('#min').val(ui.values[0]);
            $('#max').val(ui.values[1]);
            $('[data-unit]').each(function() {
                $(this).children('input').val(parseInt($(this).children('input').val()) + ' ' + $(this).attr('data-unit'));
            })
        }
    })
    $('#min').val($('#range').slider('values', 0));
    $('#max').val($('#range').slider('values', 1));
    $('[data-unit]').each(function() {
        $(this).children('input').val(parseInt($(this).children('input').val()) + ' ' + $(this).attr('data-unit'));
    })
    $('#min').bind('focusout', function() {
        if ($(this).val()>$('#range').slider('values', 1)) {
            $(this).val($('#range').slider('values', 0));
        }
        $('#range').slider('values', 0, $(this).val());
    })
    $('#max').bind('focusout', function() {
        if ($(this).val()<$('#range').slider('values', 0)) {
            $(this).val($('#range').slider('values', 1));
        }
        $('#range').slider('values', 1, $(this).val());
    })
    $('#min').bind('keypress', function(e) {
        if (e.keyCode==13) {
            if ($(this).val()>$('#range').slider('values', 1)) {
                $(this).val($('#range').slider('values', 0));
            }
            $('#range').slider('values', 0, $(this).val());
        }
    })
    $('#max').bind('keypress', function(e) {
        if (e.keyCode==13) {
            if ($(this).val()<$('#range').slider('values', 0)) {
                $(this).val($('#range').slider('values', 1));
            }
            $('#range').slider('values', 1, $(this).val());
        }
    })
    $('#widget').draggable();
	
});
$(window).on('load', function () {

    //catalog menu
    $('.page-actions-box .menu-box .slider').owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        fluidSpeed: 1000,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        dotsSpeed: 1000,
        dragEndSpeed: 1000,
        responsiveRefreshRate: 100,
        autoHeight: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoWidth: true
    })


    //card photo view
    let slMain = $('.card-photos-wrap .slider-wrap .slider').owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        fluidSpeed: 1000,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        dotsSpeed: 1000,
        dragEndSpeed: 1000,
        responsiveRefreshRate: 100,
        autoHeight: false,
        autoplay: false,
        autoplayTimeout: 5000,
        onTranslated: function() {
            let newSlide = $('.card-photos-wrap .slider-wrap .owl-item.active .sl-wrap').attr('data-slide');
            $('.card-photos-wrap .slider-preview-wrap .item-photo').removeClass('active');
            $('.card-photos-wrap .slider-preview-wrap .sl-wrap[data-slide="'+newSlide+'"] .item-photo').addClass('active');
        }
    })
    $('.card-photos-wrap .slider-preview-wrap .slider').owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        fluidSpeed: 1000,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        dotsSpeed: 1000,
        dragEndSpeed: 1000,
        responsiveRefreshRate: 100,
        autoHeight: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoWidth: true
    })
    $('.card-photos-wrap .slider-preview-wrap .item-photo').on('click', function() {
        let newPSlide = $(this).parent().attr('data-slide');
        slMain.trigger('to.owl.carousel', [newPSlide, 300, true]);
        return false;
    })
});