var Api = require('static/js/api.js');
var $navigation = $('#navigation');
var $liList = $navigation.find('li');
var timer;
var cArr = ["p5", "p4", "p3", "p2", /*"p1"*/];
// var $s = $(".buttons span");

var index = 0;
if (window.localStorage && !localStorage.getItem('banner-coin-collapse')) {
    initList();
    begin();
} else {
    $('#small_hanger').addClass('visible');
}

bindeEvent();

/**
 * 切换样式
 */
function switchClass() {
    $navigation.toggleClass('height24');
    $navigation.find('#small_hanger').toggleClass('visible');
}

function bindeEvent() {

    $navigation.on('click', ".next", function () {
        nextImg();
    });

    $navigation.on('click', ".prve", function () {
        preImg();
    });

    $navigation.on('click', '.close', function () {
        switchClass();
        setTimeout(function() {
            $('.header').removeAttr('style');
        }, 500);
        clearTimeout(timer);
        localStorage.setItem('banner-coin-collapse', 'done');
    });
    //点击图片能切换的功能
    //点击class为p3的图片
    $navigation.on("click", ".p3", function () {
        nextImg();
    });
    //点击class为p5的图片
    $navigation.on("click", ".p5", function () {
        preImg();
    });

    $navigation.on('click', '.click-btn', function () {
        var url = 'https://www.lives.one/oppoint/?l=' + navigator.language.toLocaleLowerCase() + '&f=mx5qa';
        Api.useApi('openUrl', { 'urls': [url], 'mode': 'BackgroundTab' });
    });

    $navigation.on('click', '.small-hanger', function () {
        switchClass();
        initList();
        begin();
        localStorage.removeItem('banner-coin-collapse');
    });
}

function nextImg() {
    cArr.unshift(cArr[2]);//向开头添加p1
    cArr.pop();//把最后的p1删掉，最终数组是【p1,p5,p4,p3,p2】
    $liList.each(function (i, e) {
        $(e).removeClass().addClass(cArr[i]);
    })
    index++;
    if (index > 2) {
        index = 0;
    }
}

function preImg() {
    cArr.push(cArr[0]); // 向数组末尾添加p5
    cArr.shift();       // 把开头的p5删掉，最终数组是【p4,p3,p2,p1,p5】
    $liList.each(function (i, e) {
        $(e).removeClass().addClass(cArr[i]);
    })
    index--;
    if (index < 0) {
        index = 2;
    }
}

function begin() {

    // 展示轮播区域
    $navigation.addClass('height24');
    $('.header').hide();

    //自动播放功能
    var $container = $navigation.find('.container');
    //鼠标移入box时清除定时器
    $container.mouseover(function () {
        clearInterval(timer);
    });

    // // //鼠标移出box时开始定时器
    $container.mouseleave(function () {
        timer = setInterval(nextImg, 4000);
    });

    // // 进入页面自动开始定时器
    timer = setInterval(nextImg, 4000);
}

function initList() {
    var attr = navigator.language.toLocaleLowerCase() !== 'zh-cn' ? 'en-src' : 'zh-src';

    $liList.each(function (i, dom) {
        var image = dom.getElementsByTagName('img')[0];
        if (image.getAttribute(attr)) {
            image.setAttribute('src', image.getAttribute(attr));
        }
    });

    $navigation.find('ul').removeClass('hide');
}