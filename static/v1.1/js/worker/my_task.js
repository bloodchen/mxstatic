String.prototype.getQueryString = function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  if (this.split('?')[1]) {
    var r = this.split('?')[1].match(reg);
    if (r != null) return unescape(r[2]);
  }
  return null;
}

function replaceGo(url) {

    if(!url) {
        return url;
    }

    var newUrl = url;
    if (/redir\/public\/feature_post.htm?/.test(url)) {
        newUrl = url.replace('/redir/public/feature_post.htm?f=qa_nuomi', '/redir/mx5/qa.htm?f=nuomi');
    }
    if (/CtripRedirect.aspx/.test(url)) {
        newUrl = url.replace('http://u.ctrip.com/union/CtripRedirect.aspx?TypeID=2&Allianceid=18105&sid=449687&OUID=&jumpUrl=http://www.ctrip.com', 'http://go.maxthon.cn/redir/mx5/qa.htm?f=ctrip');
    }

    newUrl = url.replace('https://www.huanqiu.com/', 'http://www.huanqiu.com/');
    newUrl = url.replace('http://www.langao.com/go.php?site=jiayuan&uid=308&m=http://www.jiayuan.com', 'http://go.maxthon.cn/redir/mx5/qa.htm?f=jiayuan');
    newUrl = url.replace('http://p.yiqifa.com/n?k=2mLErntm1NjSrI6H2mLErI6H6Ete1ZLOWEbH1NDOWnUHN5onYyuerZyH2mq869W7W5Py3QLE&spm=1.1.1.1&t=http://t.dianping.com', 'http://go.maxthon.cn/redir/mx5/qa.htm?f=dianping');
    newUrl = url.replace('http://s.click.taobao.com/t?e=m%3D2%26s%3DjVK3GINMOswcQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAvHDY8Now%2BeooQBScTlIlmEqdXuB2ywoyFJnKOsTZCUFJjzv0O4s9q%2B353tkt4', 'http://go.maxthon.cn/redir/mx5/qa.htm?f=juhuasuan');
    newUrl = url.replace('http://a.union.mi.com/mua?c=10741.0002', 'http://go.maxthon.cn/redir/mx5/qa.htm?f=mi');
    newUrl = url.replace('http://union.dangdang.com/transfer.php?from=P-303956-9gongge&ad_type=10&sys_id=1&backurl=http%3A%2F%2Fwww.dangdang.com', 'http://go.maxthon.cn/redir/mx5/qa.htm?f=dangdang');
    newUrl = url.replace('http://r.union.meituan.com/link/hqbdt ', 'http://go.maxthon.cn/redir/mx5/qa.htm?f=meituan');

    // 修订用户已保存的go跳转链接
    if (url && /http:\/\/go.maxthon.cn\/redir\/mx4\/qa.htm?/.test(url)) {

        var queryStr = url.getQueryString('f');
        // if (queryStr !== null && (queryStr == 'tmall' || queryStr == 'taobao')) {
        //     dataparam = {
        //         m: 'replaceGo',
        //         n: queryStr,
        //         o: '',
        //         p: '',
        //         data: { url: d.url }
        //     }
        //     datacode && datacode.statistic(dataparam);
        // }

        if (queryStr !== null && queryStr !== 'ctrip') {
            newUrl = url.replace('/redir/mx4/qa.htm', '/redir/mx5/qa.htm');
        }
    }

    return newUrl;
}

function replaceImage(image) {
    
}

// mxApi.getSyncValue('my_site', function(data) { 
//     var myWorker = new Worker("http://pc-newtab.maxthon.com/v1.1/js/worker/my_task.js");
//     myWorker.onmessage = function(event) {
//         console.log(event.data);
//         // grid.saveLayout(event.data);
//     };
//     // startworker
//     myWorker.postMessage(data);
// });

        // d.url = replaceGo(d.url);

onmessage = function (oEvent) {
    // mxApi.getSyncValue('my_site', function(data) { 
        var _list = oEvent.data;
        for (var i = 0; i < _list.length; i++) {
            var d = _list[i];

            if(d === null || d === undefined) continue;
            d.url = replaceGo(d.url);
            
            if (d.children && d.children.length > 0) {
                for (var j = 0; j < d.children.length; j++) {
                    var fd = d.children[j];
                    if(fd) fd.url = replaceGo(fd.url);
                }
            }
        }
    // })
    postMessage(_list);
};