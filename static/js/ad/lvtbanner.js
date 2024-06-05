/**
 * 旷工召集令
 * @return {[type]} [description]
 */
$(function () {
    var $bannerDom = $('.banner');

    if ($bannerDom.length === 0) return;
    var isZh = navigator.language.toLocaleLowerCase() === 'zh-cn';
    // if(!isZh) return;

    var suffix = '/?l=en-us&f=mx5qa&channel=mx5qa';
    if (window.localStorage && !localStorage.getItem('banner-coin-collapse')) {
        $bannerDom.addClass('visible');
    };

    $bannerDom.on('click', '#banner-collapse', function (ev) {
        $bannerDom.removeClass('visible');
        localStorage.setItem('banner-coin-collapse', 'done');
    });

    $bannerDom.on('click', '#banner-build', function (ev) {
        ev.stopPropagation();
        $bannerDom.addClass('visible');
        localStorage.removeItem('banner-coin-collapse');
    });

    if (isZh) {
        suffix = '/?l=zh-cn&f=mx5qa&channel=mx5qa';
        $bannerDom.find('.ad-text').text('广告');
        $bannerDom.find('#banner-appointment').text('马上开挖');
    } else {
        $bannerDom.addClass('en');
        $bannerDom.find('.ad-text').remove(); //.text('AD');
        $bannerDom.find('#banner-appointment').text('Mine LVT Now');
    }

    $bannerDom.on('click', '#banner-appointment', function (ev) {
        ev.preventDefault();
        maxthon.webSend("newTabUpground", { url: 'https://www.lives.one/lives/mining' + suffix }, function (msg) { });
    });
});
