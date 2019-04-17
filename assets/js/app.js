import Scrollbar from 'smooth-scrollbar';
import '@fancyapps/fancybox';
import 'select2/dist/js/select2.full';

let app = {
    init() {
        func.jsScale();
        func.jsSelect();
    },
    load() {

    },
    resize() {
        func.jsScale();
    },
    scroll() {

    },
    minWindowWidth: 1920
    //minWindowWidth: 1430
};

let func = {
    jsScale() {
        let currentWidth = document.documentElement.clientWidth;
        let $el = $('body');
        let $elContent = $('.wrapper');
        let $elScaleMinHeight = $('.js-scale-min-height');

        if (currentWidth < app.minWindowWidth) {

            /*$el.css({
                'transform': `scale(${currentWidth / app.minWindowWidth})`
            });

            $elContent.css({
                'max-width': $elContent[0].scrollWidth * currentWidth / app.minWindowWidth,
                //'overflow': 'hidden'
            });*/

            //$('html, body').css('font-size', `${(currentWidth / app.minWindowWidth) * 100}%`);
            $('html, body').css('font-size', `${(currentWidth / app.minWindowWidth) * 17}px`);

            /*$elScaleMinHeight.css({
                'min-height': document.documentElement.scrollHeight * app.minWindowWidth / currentWidth
            });*/
        } else {

            $('html, body').css('font-size', '');

            $el.css({
                'transform': ''
            });

            $elContent.css({
                'max-height': '',
                'overflow': ''
            });

            $elScaleMinHeight.css({
                'min-height': ''
            });
        }
    },
    jsSelect() {
        $('.js-select').select2({
            minimumResultsForSearch: -1,
            containerCssClass: 'raif-select__select',
            dropdownCssClass: 'raif-select__results',
            width: '100%',
            theme: 'raif-select'
        });
    }
};

$(function () {

    app.init();

    if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
        var evt = document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(evt);
    } else {
        window.dispatchEvent(new Event('resize'));
    }

    $(window).on('load', function () {
        app.load();
    });

    $(window, document).on('resize', function () {
        app.resize();
    });

    $(window).on('scroll', function () {
        app.scroll();
    });

});
