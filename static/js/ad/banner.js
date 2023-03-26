// var TOP_BANNER_DATA = {
//     "1": {
//         "title": "MX5浏览器评分",
//         // "name": "index2_none_dtgg_cs0100",
//         // "bgColor": "#6e07de", 
//         "link": "http://sale.suning.com/sc/o2ogwj2015/index.html",
//         "picture": ""
//         // "picNarrow": "http://image4.suning.cn/uimg/cms/img/144719051370525194.jpg", 
//         // "picWide": "http://image5.suning.cn/uimg/cms/img/144719051796952851.jpg" 
//     }
// };

var Banner = function (data) {
    var _this = this;
    for (var i in data) {
        _this[i] = data[i];
    }
}

Banner.prototype = (function () {

    var __TOP_BANNER__ = $('#__TOP_BANNER__');

    function render(list) {
        var _this = this;
        if (list && list.length > 0) {
            var data = list[0];
            var topSrc = data.pic;
            nameWide = data.name;
            topTitle = data.title;
            topHref = data.link;
            var html = '<a name="' + topTitle + '" target="_blank" title="' + topTitle + '" href="' + topHref + '">';
            html += '<img src="' + topSrc + '" />';
            html += '</a>';
            __TOP_BANNER__.find('.top-banner-wrap').empty().append(html).end().show();
            __TOP_BANNER__.find('.btn').click(function () {
                _this.ajax({ 'close': 'N' });
                __TOP_BANNER__.hide();
            });
        } else {
            _this.destroy();
        }
    }

    function destroy() {
        __TOP_BANNER__.remove();
        delete this;
    }

    function ajax(param) {
        var _this = this;
        $.ajax({
            type: 'post',
            // async: true,
            dataType: 'json',
            // jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
            // jsonpCallback:"success",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
            url: 'http://www.maxthon.cn/hd/survey/tomx4-1/tab_api.php',
            data: {
                'deviceid': _this.deviceid,
                'pn': _this.pn,
                'ver': _this.ver,
                'encrypt': _this.encrypt, // md5(deviceid+M^T@*Wq!*#)@NXsaj+ver+pn)
                'close': param.close, //  N是关闭，Y是正常请求
                'language': _this.language
            },
            success: function (data) {
                if (data.code === 0) {
                    param.close === 'Y' ? _this.render(data.result) : void (0);
                }
            },
            error: function (a, b, c) {
                console.error(a);
            }
        });
    }

    return {
        render: render,
        destroy: destroy,
        ajax: ajax
    }
})();

window.onload = function () {
    var maxthon = window.Api.Maxthon;
    var deviceid;
    maxthon.useApi("getDeviceID", {}, function(data){
        deviceid = data;
    });

    function loadBanner() {
        $.getScript(staticServer + '/js/lib/jquery.md5.js', function () {
            var pn = maxthon.pn(), ver = maxthon.max_version;
            var encrypt = $.md5(deviceid + 'M^T@*Wq!*#)@NXsaj' + ver + pn);
            var banner = new Banner({
                'deviceid': deviceid,
                'pn': pn,
                'ver': ver,
                'encrypt': encrypt, // md5(deviceid+M^T@*Wq!*#)@NXsaj+ver+pn)
                 // 'close': 'Y', //  N是关闭，Y是正常请求
                'language': navigator.language
            });
            banner.ajax({ 'close': 'Y' });
        });
    }

    setTimeout(loadBanner, 2000);
}