jQuery(function() {
    'use strict';

    //SECTION PRODUCT CARD INFO START
    jQuery('ul.product_card_info_options li .with_dropdown').on('click', function(e) {
        e.preventDefault();

        let $this = jQuery(this),
            $li = $this.closest('li');

        jQuery('ul.product_card_info_options li.active')
            .not($li)
            .removeClass('active')
            .find('.options_content')
            .slideUp(200);

        $li.find('.options_content').slideToggle(200);
        $li.toggleClass('active');
    });
    // SECTION PRODUCT CARD INFO END

    // SECTION PRODUCT OVERLOOK START
    jQuery('.product_carousel').slick({
        infinite: true,
        slidesToShow: 4,
        vertical: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    vertical: false,
                    slidesToScroll: 1,
                    prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
                    nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></i></button>'
                }
            }],
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fa fa-angle-up" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa fa-angle-down" aria-hidden="true"></i></i></button>'
    });

    jQuery(document).on('click', '[data-show-product-image-id]', function(e) {
        e.preventDefault();

        let image_id = jQuery(this).data('show-product-image-id');

        jQuery('[data-product-image-id]').each(function() {
            let $this = jQuery(this);
            $this.toggleClass('active', $this.data('product-image-id') === image_id);
        });
    });

    //SECTION PRODUCT OVERLOOK END

    jQuery('#modal-telephone-input').mask('+7 (999) 999-99-99');

    // TIMER START
    (function() {
        let $timer = jQuery('[data-timer-initial-time]'),
            total = parseInt(`${localStorage.timerSeconds || $timer.data('timer-initial-time')}`);

        $timer.text(getTimerText(total));

        let interval = setInterval(() => {
            --total;

            if (total <= 0) {
                // что сделать если таймер кончился
                delete localStorage.timerSeconds;

                clearInterval(interval);

                return;
            }

            localStorage.timerSeconds = total;

            $timer.text(getTimerText(total));
        }, 1000);

        function getTimerText(totalSeconds) {
            let hours = Math.floor(totalSeconds / 3600),
                minutes = Math.floor(totalSeconds / 60) % 60,
                seconds = totalSeconds % 60;

            return `${hours} час : ${minutes} мин.`;
        }
    })();
    // TIMER END

    // MOBILE MENU START
    let $body = jQuery('body');
    jQuery('.mobile_menu_btn').on('click', function(e) {
        e.preventDefault();
        $body.toggleClass('mobile-menu-opened');
    });

    jQuery('.mobile_menu_bg').on('click', function() {
        $body.removeClass('mobile-menu-opened');
    });
    // MOBILE MENU END

    // SCROLL BAR START
    jQuery('#up_to_scroll').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
    // SCROLL BAR END

});