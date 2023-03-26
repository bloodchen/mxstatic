/**
 * 数据统计
 * @author guotingjie@maxthon.net
 * @ctime 2016-7-8
 */
var datacode = { silent : true };
datacode.statistic = function (data) {
    var thiz = this;
    // 设置静音模式，不上报
    if(thiz.silent === false) return;
    if (!data || !data.m) {
        return;
    }
    var config = {
        // 产品标识
        pt: 'mx5Newtab',
        // 层级
        m: data.m,
        n: data.n,
        o: data.o,
        p: data.p,
        data: {}
    }

    if (data.u) {
        config.dt = 'content';
        config.data.url = data.u;
        config.data.title = data.t || data.n;
    } else {
        config.dt = 'ui';
    }
    config.data = JSON.stringify($.extend(config.data, data.data));
    // console.log('ueip', config);
    window.Api.Maxthon.useApi('setUeip2', config, function() {});
}
datacode.createFolder = function(data) {
    this.statistic({ m: 'managesites', n: 'createFolder' });
}
datacode.moveGrid = function(a, b) {
    var ueip = { m: 'managesites', n: 'move' };
    if(a===undefined) a = false;
    if(b===undefined) b = false;
    if(a === b && a === true) {
        ueip.o = 'topMove';
    } else if(a === b && a === false) {
        ueip.o = 'favMove';
    } else {
        ueip.o = 'topAndfav';
    }
    this.statistic(ueip);
}
datacode.removeGrid = function(obj) {
    var ueip = { m: 'managesites', n: 'delete' };
    if(obj.isHot === true) {
        ueip.o = 'deleteTop';
    } else {
        ueip.o = 'deleteFav';
    }
    ueip.data = {title: obj.title, url: obj.url};
    this.statistic(ueip);
}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function guid() {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}