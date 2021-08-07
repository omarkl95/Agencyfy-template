(function ($) {
    "use strict";

    /*-- Document-Ready-Function --*/
    $(document).on('ready', function () {

        /*-- Scroll-To-Top --*/
        $.scrollUp({
            scrollText: '<i class="icofont-swoosh-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });
        /*-- Drop-Down-Menu--*/
        function dropdown_menu() {
            $('.hamburger .mainmenu').hide();
            var sub_menu = $('.mainmenu .sub-menu'),
                menu_a = $('.mainmenu ul li a');
            sub_menu.siblings('a').append('<i class="icofont-rounded-right"></i>')
            sub_menu.hide();
            sub_menu.siblings('a').on('click', function (event) {
                event.preventDefault();
                $(this).parent('li').siblings('li').find('.sub-menu').slideUp();
                $(this).siblings('.sub-menu').find('.sub-menu').slideUp();
                $(this).siblings('.sub-menu').slideToggle();
                $(this).parents('li').siblings('li').removeClass('open');
                $(this).siblings('.sub-menu').find('li.open').removeClass('open');
                $(this).parent('li').toggleClass('open');
                return false;
            });
        }
        dropdown_menu();

        /*-- Burger-Menu --*/
        function burger_menu() {
            var burger = $('.burger'),
                hm_menu = $('.hamburger .mainmenu');
            burger.on('click', function () {
                $(this).toggleClass('play');
                $(this).siblings('.mainmenu').fadeToggle();
            });

        }
        burger_menu();

    });



    /*-- Window-Load-Function --*/
    $(window).on("load", function () {

        /*-- Hide-Preloader --*/
        $('.preloader').fadeOut(500);

        /*-- WoW-Animation-JS --*/
        new WOW().init({
            mobile: true,
        });

    });


}(jQuery));