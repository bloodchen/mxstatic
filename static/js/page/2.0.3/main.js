/**
 * string 扩展
 */
String.prototype.startWith = function (str) {
  return this.slice(0, str.length) == str;
}

String.prototype.endWith = function (str) {
  return this.slice(-str.length) == str;
}

String.prototype.notUrl = function () {
  return !this.startWith('http://') && !this.startWith('https://')
    && !this.startWith('mx://') && !this.startWith('file:///')
    && !this.startWith('ftp://');
}

String.prototype.Trim = function () {
  return this.replace(/(^\s*)|(\s*$)/g, "");
}

String.prototype.getQueryString = function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  if (this.split('?')[1]) {
    var r = this.split('?')[1].match(reg);
    if (r != null) return unescape(r[2]);
  }
  return null;
}

String.prototype.cmpVersions = String.prototype.cmpVersions || function (another) {
  var i, diff;
  var regExStrip0 = /(\.0+)+$/;
  var segmentsA = this.replace(regExStrip0, '').split('.');
  var segmentsB = another.replace(regExStrip0, '').split('.');
  var l = Math.min(segmentsA.length, segmentsB.length);

  for (i = 0; i < l; i++) {
    diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
    if (diff) {
      return diff;
    }
  }
  return segmentsA.length - segmentsB.length;
};
/**
 * 弹出框
 * @author guotingjie
 */
$.fn.dialog = function (options) {
    var maxthon = window.Api.Maxthon;
    var $this = this,
        $body = $('body'),
        $mx_mask_layer = $('#mx_mask_layer');

    var op = $.extend({
        openInDialog: false,
        init: function () {

        }, close: function () {
            return true;
        }, after: function () {

        }
    }, options);

    var closeFun = function () {
        if ($this.is(':animated')) {
            return false;
        }

        $mx_mask_layer.hide();
        $body.removeClass('mask');
        if (document.body.scrollTop < 50) {// 滚动条小于50显示搜索框
            maxthon.useApi('quickaccess.showSearchBox', { 'show': true });
        }
        $this.hide();
    }

    var show = function () {

        $mx_mask_layer.off('click').on('click', function (e) {
            if (op.close()) {
                closeFun();
            }
        }).show();

        // 隐藏搜索框
        maxthon.useApi('quickaccess.showSearchBox', { 'show': false });
        $body.addClass('mask');

        if (op.html) {
            $this.empty().append(op.html);
        }

        $this.show().animate({
            'z-index': 90,
            'opacity': 1,
            '-webkit-transform': 'translate(-50%, -50%) scale(1)'
        }, 200, function () {
            op.after($this);
        });
    }

    op.init();
    show();

    return {
        close: function () { op.close(); closeFun(); return false;},
        show: function () { show();}
    }
}
/**
 * smartTemplate - Template Engine
 */

// 模板引擎路由函数
var template = function (id, content) {
    return template[
        typeof content === 'object' ? 'render' : 'compile'
    ].apply(template, arguments);
};


template.version = '1.0.0';

// 模板配置
var iConfig = {
    openTag: '<%',
    closeTag: '%>'
};

var isNewEngine = !!String.prototype.trim;

// 模板缓存
var iCache = template.cache = {};

// 辅助函数
var iHelper = {
    include: function (id, data) {
        return iRender(id, data);
    },
    print: function (str) {
        return str;
    }
};

// 原型继承
var iExtend = Object.create || function (object) {
    function Fn() { };
    Fn.prototype = object;
    return new Fn;
};

// 模板编译
var iCompile = template.compile = function (id, tpl, options) {

    var cache = null;

    id && (cache = iCache[id]);

    if (cache) {
        return cache;
    }

    // [id | tpl]
    if (typeof tpl !== 'string') {

        var elem = document.getElementById(id);

        options = tpl;

        if (elem) {
            // [id, options]
            options = tpl;
            tpl = elem.value || elem.innerHTML;

        } else {
            //[tpl, options]
            tpl = id;
            id = null;
        }
    }

    options = options || {};
    var render = iParse(tpl, options);

    id && (iCache[id] = render);

    return render;
};


// 模板渲染
var iRender = template.render = function (id, data, options) {

    return iCompile(id, options)(data);
};


var iForEach = Array.prototype.forEach ?
    function (arr, fn) {
        arr.forEach(fn)
    } :
    function (arr, fn) {
        for (var i = 0; i < arr.length; i++) {
            fn(arr[i], i, arr)
        }
    };


// 模板解析
var iParse = function (tpl, options) {

    var html = [];

    var js = [];

    var openTag = options.openTag || iConfig['openTag'];

    var closeTag = options.closeTag || iConfig['closeTag'];

    // 根据浏览器采取不同的拼接字符串策略
    var replaces = isNewEngine
        ? ["var out='',line=1;", "out+=", ";", "out+=html[", "];", "this.result=out;"]
        : ["var out=[],line=1;", "out.push(", ");", "out.push(html[", "]);", "this.result=out.join('');"];

    // 函数体
    var body = replaces[0];

    iForEach(tpl.split(openTag), function (val, i) {

        if (!val) {
            return;
        }

        var parts = val.split(closeTag);

        var head = parts[0];

        var foot = parts[1];

        var len = parts.length;
        // html
        if (len === 1) {
            body += replaces[3] + html.length + replaces[4];
            html.push(head);

        } else {

            if (head) {
                // code
                // 去除空格
                head = head
                    .replace(/^\s+|\s+$/g, '')
                    .replace(/[\n\r]+\s*/, '')


                // 输出语句
                if (head.indexOf('=') === 0) {
                    head = head.substring(1).replace(/^[\s]+|[\s;]+$/g, '');

                    body += replaces[1] + head + replaces[2];
                } else {
                    body += head;
                }

                body += 'line+=1;';
                js.push(head);
            }
            // html
            if (foot) {
                _foot = foot.replace(/^[\n\r]+\s*/g, '');
                if (!_foot) {
                    return;
                }
                body += replaces[3] + html.length + replaces[4];
                html.push(foot);
            }
        }
    });

    body = "var Render=function(data){template.mix(this, data);try{"
        + body
        + replaces[5]
        + "}catch(e){template.log('rend error : ', line, 'line');template.log('invalid statement : ', js[line-1]);throw e;}};"
        + "var proto=Render.prototype=iExtend(iHelper);"
        + "template.mix(proto, options);"
        + "return function(data){return new Render(data).result;};";

    var render = new Function('html', 'js', 'iExtend', 'iHelper', 'options', body);

    return render(html, js, iExtend, iHelper, options);
};

template.log = function () {
    if (typeof console === 'undefined') {
        return;
    }

    var args = Array.prototype.slice.call(arguments);

    console.log.apply && console.log.apply(console, args);

};

// 合并对象
template.mix = function (target, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
};

// 注册函数
template.on = function (name, fn) {
    iHelper[name] = fn;
};

// 清除缓存
template.clearCache = function () {
    iCache = {};
};

// 更改配置
template.set = function (name, value) {
    iConfig[name] = value;
};

// 暴露接口
if (typeof module !== 'undefined' && module.exports) {
    module.exports = template;
} else {
    window.template = template;
}
function treeMenu(a) {
    this.tree = a || [];
    this.groups = {};
};
treeMenu.prototype = {
    init: function (pid) {
        this.group(this.tree);
        return this.getDom(this.groups[pid]);
    },
    group: function (tree) {

        if(tree.folders && tree.folders.length === 0) return '';

        for (var i = 0; i < tree.length; i++) {
            var t = tree[i];
            if (this.groups[t.pid]) {
                this.groups[t.pid].push(t);
            } else {
                this.groups[t.pid] = [];
                this.groups[t.pid].push(t);
            }

            if(t.folders && t.folders.length > 0) {
                this.group(t.folders);
            }
        }
    },
    getDom: function (a) {
        // if (!a) { return '\n<ul >\n</ul>\n'; }  //当前节点不存在的时候，退出
        var html = '\n<ul id="note_tree">\n';
        if(a) {
            for (var i = 0; i < a.length; i++) {
                html += '<li class="folder" uuid="' + a[i].uuid + '">';
                html += '<div class="jstree-wholerow"></div>';
                // html += '<a class="folder-head-toggle" href="javascript:void(0)"></a>';
                html += '<a class="menu-head" href="javascript:void(0)"><em class="folder-head-toggle"></em><i></i>' + a[i].fn + '</a>';
                // html += a[i].fn;
                html += this.getDom(this.groups[a[i].uuid]);
                html += '</li>\n';
            };
        }
        html += '</ul>\n';
        return html;
    }
}

/* Menu Methods */

var Menu = {
    genPopupMenuLi: function (item) {
        return '<li class="mx-menu-item" event-id="' + item.id + '">' +
            '<div class="mx-menu-item-icon"></div>' +
            '<div class="mx-menu-item-title">' + item.label + '</div>' +
            '</li>';
    },

    genPopupMenuLiDisable: function (item) {
        return '<li class="mx-menu-item-disabled" event-id="' + item.id + '">' +
            '<div class="mx-menu-item-icon"></div>' +
            '<div class="mx-menu-item-title">' + item.label + '</div>' +
            '</li>';
    },

    genPopupMenuSeparator: function () {
        return '<li class="mx-menu-item-separator"></li>';
    },

    genPopupMenu: function (menu) {
        var popupMenu = '<ul class="mx-menu-content">';

        for (var i = 0, len = menu.length; i < len; i++) {
            if (menu[i].visible == false) continue;
            if (menu[i].type) {
                popupMenu += Menu.genPopupMenuSeparator();
                continue;
            }
            if (menu[i].disabled == true) {
                popupMenu += Menu.genPopupMenuLiDisable(menu[i]);
            }
            else {
                popupMenu += Menu.genPopupMenuLi(menu[i]);
            }
        };
        popupMenu += '</ul>';
        return popupMenu;
    },

    hideAndRemovePopupMenu: function () {
        var popupMenu = document.getElementById('mx_popup_menu');
        if (popupMenu == null) return;
        document.body.removeChild(popupMenu);
        popupMenu = null;
        document.onclick = null;
    },

    calculateMinHeight: function (menu) {
        var height = 6;
        for (var i = 0, len = menu.length; i < len; i++) {
            if (menu[i].visible == false) continue;
            height += menu[i].type ? 1 : 30;
        }
        return height;
    },

    createPopupMenu: function () {

        var node = document.createElement("div");
        node.setAttribute('id', 'mx_popup_menu');
        node.setAttribute('class', 'mx-popup-menu');
        document.body.appendChild(node);
        return node;
    },
    showPopupMenu: function (clientX, clientY, menu, callback) {
        var popupMenu = Menu.genPopupMenu(menu);

        Menu.hideAndRemovePopupMenu();
        var menuContent = Menu.createPopupMenu();
        menuContent.innerHTML = popupMenu;
        var scrollTop = document.body.scrollTop,
            scrollLeft = document.body.scrollLeft,
            browserWidth = document.documentElement.clientWidth,
            offsetWidth = menuContent.offsetWidth,
            left, top;
        // if (clientY + offsetHeight >= browserHeight) {
        //     top = clientY - offsetHeight;
        // } else {
            top = clientY;
        // }

        if (clientX + offsetWidth >= browserWidth) {
            left = clientX - offsetWidth;
        } else {
            left = clientX;
        }

        menuContent.style.cssText = 'left:' + (left + scrollLeft) + 'px; top:' + (top + scrollTop) + 'px;width:' + (offsetWidth + 10) + 'px; z-index:999;';

        var items = $(menuContent).find('.mx-menu-item');
        for (var i = 0, len = items.length; i < len; i++) {
            items[i].onclick = function (e) {
                Menu.hideAndRemovePopupMenu();
                var value = this.attributes['event-id'].value;
                setTimeout(function () {
                    callback(value);
                }, 200);
            };
            items[i].oncontextmenu = function () {
                Menu.hideAndRemovePopupMenu();
                var value = this.attributes['event-id'].value;
                setTimeout(function () {
                    callback(value);
                }, 200);
            }
        }
        var items = $(menuContent).find('.mx-menu-item-disabled');
        for (var i = 0, len = items.length; i < len; i++) {
            items[i].onclick = function () {
                Menu.hideAndRemovePopupMenu();
            };
            items[i].oncontextmenu = function () {
                Menu.hideAndRemovePopupMenu();
            }
        }

        document.onclick = function (e) { Menu.hideAndRemovePopupMenu(); }
        menuContent.onclick = function (e) { return false; }
        menuContent.oncontextmenu = function (e) { return false; }
        return "none";
    }
};
/**
 * maxthon浏览器接口调用
 * @author guotingjie@maxthon.net
 * @ctime 2016-6-8
 */
'use strict';
// 我的站点
var MY_SITE = 'my_site';
$(function () {
    var SYNC_KEY_QA = 'qa_layout';
    var SYNC_KEY_QA_WIDGET = 'qa_widget';
    var MAP_LIST = {};

    window.Api = window.Api || {};
    window.Api.Maxthon = (function () {

        /**
         * API使用
         * @param  {[type]}   conf [description]
         * @param  {Function} cb   [description]
         * @return {[type]}        [description]
         */
        function useApi(name, params, cb) {
            try {
                window.maxthon.webSend(name, params, function (data) {
                    if (cb && data.status && data.status === true) {
                        cb(data.result);
                    } else {
                        cb && cb({});
                    }
                });
            } catch (e) {
                console.error('[maxthon]未定义, 请使用傲游浏览器');
            }
        }

        /**
         * 获取页面信息
         * @param
         * @return
         */
        function getLayout(layout, widget, callback) {
            var _this = this;
            _this.getSyncValue(layout, function (mx4_layout) {
                _this.getSyncValue(widget, function (mx4_widget) {
                    _this.getSyncValue('mx4_image_mapping', function (mx4_image_mapping) {
                        try {
                            if (!$.isEmptyObject(mx4_layout)) {
                                var page = mx4_layout.page || [];
                                // 此处加上预置、截图、色块标识
                                for (var i = 0; i < page.length; i++) {
                                    for (var j = 0; j < mx4_layout.page[i].content.length; j++) {
                                        var item = mx4_layout.page[i].content[j];

                                        for (var mapping in mx4_image_mapping) {
                                            if (mapping === item.url) {
                                                item.thumbType = mx4_image_mapping[mapping] === 'default' ? 0 : mx4_image_mapping[mapping] === 'snap' ? 1 : 2; //0预置1抓图2色块3自定义
                                                break;
                                            }
                                        }

                                        if (!$.isEmptyObject(mx4_widget)) {
                                            for (var attr in mx4_widget) {

                                                if (attr == item.templateDataId) { // 个性盒子
                                                    mx4_layout.page[i].content = mx4_layout.page[i].content.concat(mx4_widget[attr]);
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                                callback(mx4_layout);
                            } else {
                                callback({});
                            }
                        } catch (e) {
                            callback({});
                        }
                    });
                });
            });
        }

        /**
         * 获取浏览器版本号
         */
        var max_version = (function () {
            try {
                return external && external.max_version ? external.max_version : typeof external.maxVersion === 'function' ? external.maxVersion() : '5.0.0.0';
            } catch (e) {
                return 0;
            }
        })();

        /**
         * 写入浏览器值
         * @param {[type]} key   [description]
         * @param {[type]} value [description]
         */
        function setSyncValue(key, value) {
            if (typeof value === 'object') {
                value = JSON.stringify(value);
            }

            useApi('quickaccess.setSyncValue', {
                key: key,
                json: value
            }, function (data) {
                if (data && !data.status) {
                    // console.error('setSyncValue', key, value);
                }
            });
        }
        /**
         * 读出浏览器值
         * @param {[type]} key   [description]
         * @param {[type]} value [description]
         */
        function getSyncValue(key, next) {

            useApi('quickaccess.getSyncValue', {
                key: key
            }, function (result) {
                if (typeof result === 'string') {
                    try {
                        result = JSON.parse(result);
                    } catch (e) {
                        result = {};
                    }
                }

                next(result);
            });
        }

        /**
         * 获取用户设备信息
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
        function getUserInfo(callback) {
            try {
                useApi('account.getBrowserCurrentAccountInfo', {}, function (result) {
                    callback && callback({ uid: result.id });
                });
            } catch (e) {
                console.error('[maxthon]未定义, 请使用傲游浏览器');
            }
        }

        /**
         * mx4 数据转换 mx5
         * @param  {[type]} data [description]
         * @return {[type]}      [description]
         */
        function mx4_2_mx5(data, callback) {
            getUserInfo(function (result) {
                data.uid = result.uid;
                data.lang = navigator.language;
                data.pn = external.GetPN && external.GetPN();
                data.platform = navigator.userAgent.match('Macintosh;.*Mac.*') ? 'Mac' : 'Win';
                $.ajax({
                    type: "post",
                    async: true,
                    url: '/v1.1/api/data/convert.php',
                    data: data,
                    success: function (data) {
                        if (data.status && data.result && data.result.length > 0) {
                            // 验证数据完整性
                            if (data.result[data.result.length - 1].title && data.result[0].title) {
                                callback && callback(data.result);
                            }
                        } else {
                            callback && callback(DEFAULT_MY_SITE);
                        }
                    },
                    error: function (a, b, c) {
                        callback && callback(JSON.parse(data.mx5_layout));
                    }
                });
            });
        }

        var uid;
        getUserInfo(function(user) {
            uid = user.uid;
        })

        return {
            pn: typeof external.GetPN === 'function' ? external.GetPN() : '',
            platform: navigator.userAgent.match('Macintosh;.*Mac.*') ? 'Mac' : 'Win',
            max_version: max_version,
            uid: uid,
            getLayout: getLayout,
            useApi: useApi,
            getSyncValue: getSyncValue,
            setSyncValue: setSyncValue,
            mx4_2_mx5: mx4_2_mx5
        };
    })();

    var maxthon = window.Api.Maxthon;
    window.Api.Tools = (function () {

        /**
         * 获取客户端语言
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
        function getLocale(cb) {
            maxthon.useApi('getLocale', {}, function (result) {
                cb && cb(result);
            });
        }

        function reflushThumb(url, cb) {
            maxthon.useApi('quickaccess.reflushThumb', { 'url': url, 'reflush': 1 }, function () { cb && cb(); });
        }

        /**
         * 判断本地是否存在截图
         * @param url
         * @param cb
         */
        function isThumbExists(url, cb) {
            maxthon.useApi('quickaccess.isThumbExists', { 'urls': url }, function (data) {
                cb && cb(data);
            })
        }

        function isSupportWebp() {
            return !!!navigator.userAgent.match(/Intel Mac OS X/);
        }

        function showNoteNotFound(mark) {
            var notice = mark === 1 ? Language.getLang('NoteBeenCompleteDeleted') : Language.getLang('NoteBeenDeleted');
            var noteIsDialog = $('#note_is_delete').dialog({
                html: '<div class="dialog-header">\
                           <a class="close" href="#close">×</a>\
                        </div>\
                        <div class="dialog-content" style="padding: 0;height: 160px;">\
                        <div class="ui-icon" style="position:static;margin-top:22px;">\
                            <svg viewBox="0 0 44 44" version="1.1" width="44" height="72" style="display: block;margin: 0 auto;">\
                                <defs>\
                                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">\
                                        <stop stop-color="#FFD23A" offset="0%"></stop>\
                                        <stop stop-color="#FF901B" offset="100%"></stop>\
                                    </linearGradient>\
                                </defs>\
                                <g id="定稿方案" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                    <g id="文件夹_删除弹框" transform="translate(-791.000000, -536.000000)">\
                                        <g id="Group-36" transform="translate(719.000000, 467.000000)">\
                                            <g id="Group-55" transform="translate(72.000000, 68.000000)">\
                                                <g id="Group-51" transform="translate(0.000000, 1.000000)">\
                                                    <g id="Group-50">\
                                                        <circle id="Oval-6" fill="url(#linearGradient-1)" cx="22" cy="22" r="22"></circle>\
                                                        <path d="M20.5243773,23.3630273 L20.0951053,16.9373613 C20.0146164,15.6853116 19.9743725,14.7865322 19.9743725,14.2409963 C19.9743725,13.4987096 20.1688845,12.9196453 20.5579142,12.5037859 C20.946944,12.0879266 21.4589352,11.88 22.0939033,11.88 C22.8630195,11.88 23.3772465,12.1460566 23.6365997,12.6781777 C23.8959528,13.2102989 24.0256275,13.9771678 24.0256275,14.9788076 C24.0256275,15.5690596 23.9943267,16.1682459 23.9317242,16.7763843 L23.3548899,23.3898568 C23.2922874,24.1768595 23.1581412,24.7805173 22.9524474,25.2008482 C22.7467535,25.6211792 22.4069165,25.8313416 21.9329262,25.8313416 C21.4499928,25.8313416 21.1146273,25.6278865 20.9268199,25.2209704 C20.7390124,24.8140542 20.6048662,24.194746 20.5243773,23.3630273 L20.5243773,23.3630273 Z M22.0134148,32.1899338 C21.4678788,32.1899338 20.9916599,32.013308 20.5847437,31.6600511 C20.1778276,31.3067942 19.9743725,30.8126891 19.9743725,30.177721 C19.9743725,29.6232419 20.1688845,29.1514945 20.5579142,28.7624648 C20.946944,28.373435 21.4231629,28.1789231 21.9865852,28.1789231 C22.5500076,28.1789231 23.0306981,28.373435 23.428671,28.7624648 C23.826644,29.1514945 24.0256275,29.6232419 24.0256275,30.177721 C24.0256275,30.8037459 23.8244082,31.2956152 23.4219637,31.6533437 C23.0195191,32.0110722 22.5500075,32.1899338 22.0134148,32.1899338 L22.0134148,32.1899338 Z" id="!" fill="#FFFFFF"></path>\
                                                    </g>\
                                                </g>\
                                            </g>\
                                        </g>\
                                    </g>\
                                </g>\
                            </svg>\
                        </div>\
                        <div class="msg" style="text-align:center;margin:0 auto;overflow:hidden;width:280px;color:#333;">' + notice + '</div>\
                    </div>',
                after: function ($dialog) {
                    $dialog.one('click', '.close', function () {
                        noteIsDialog.close();
                    });
                }
            });
        }

        function showDeleteFolder(obj) {
            var deleteFolderDialog = $('#delete_folder').dialog({
                html: '<div class="dialog-header">\
                            <a class="close" href="javascript:void(0);">×</a>\
                            <h1>' + Language.getLang('DeleteFolderTitle') + '</h1>\
                        </div>\
                        <div class="dialog-content">\
                            <div class="ui-icon">\
                                <svg viewBox="0 0 44 44" version="1.1" width="44" height="72">\
                                    <defs>\
                                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">\
                                            <stop stop-color="#FFD23A" offset="0%"></stop>\
                                            <stop stop-color="#FF901B" offset="100%"></stop>\
                                        </linearGradient>\
                                    </defs>\
                                    <g id="定稿方案" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                        <g id="文件夹_删除弹框" transform="translate(-791.000000, -536.000000)">\
                                            <g id="Group-36" transform="translate(719.000000, 467.000000)">\
                                                <g id="Group-55" transform="translate(72.000000, 68.000000)">\
                                                    <g id="Group-51" transform="translate(0.000000, 1.000000)">\
                                                        <g id="Group-50">\
                                                            <circle id="Oval-6" fill="url(#linearGradient-1)" cx="22" cy="22" r="22"></circle>\
                                                            <path d="M20.5243773,23.3630273 L20.0951053,16.9373613 C20.0146164,15.6853116 19.9743725,14.7865322 19.9743725,14.2409963 C19.9743725,13.4987096 20.1688845,12.9196453 20.5579142,12.5037859 C20.946944,12.0879266 21.4589352,11.88 22.0939033,11.88 C22.8630195,11.88 23.3772465,12.1460566 23.6365997,12.6781777 C23.8959528,13.2102989 24.0256275,13.9771678 24.0256275,14.9788076 C24.0256275,15.5690596 23.9943267,16.1682459 23.9317242,16.7763843 L23.3548899,23.3898568 C23.2922874,24.1768595 23.1581412,24.7805173 22.9524474,25.2008482 C22.7467535,25.6211792 22.4069165,25.8313416 21.9329262,25.8313416 C21.4499928,25.8313416 21.1146273,25.6278865 20.9268199,25.2209704 C20.7390124,24.8140542 20.6048662,24.194746 20.5243773,23.3630273 L20.5243773,23.3630273 Z M22.0134148,32.1899338 C21.4678788,32.1899338 20.9916599,32.013308 20.5847437,31.6600511 C20.1778276,31.3067942 19.9743725,30.8126891 19.9743725,30.177721 C19.9743725,29.6232419 20.1688845,29.1514945 20.5579142,28.7624648 C20.946944,28.373435 21.4231629,28.1789231 21.9865852,28.1789231 C22.5500076,28.1789231 23.0306981,28.373435 23.428671,28.7624648 C23.826644,29.1514945 24.0256275,29.6232419 24.0256275,30.177721 C24.0256275,30.8037459 23.8244082,31.2956152 23.4219637,31.6533437 C23.0195191,32.0110722 22.5500075,32.1899338 22.0134148,32.1899338 L22.0134148,32.1899338 Z" id="!" fill="#FFFFFF"></path>\
                                                        </g>\
                                                    </g>\
                                                </g>\
                                            </g>\
                                        </g>\
                                    </g>\
                                </svg>\
                            </div>\
                            <div class="msg">\
                                <h3>' + Language.getLang('DeleteFolderWarn') + '</h3>\
                                <p>' + Language.getLang('DeleteFolderContent').replace('{name}', obj.title).replace('{count}', obj.children.length) + '</p>\
                            </div>\
                        </div>\
                        <div class="dialog-footer">\
                            <button id="ok_btn" class="button primary">' + Language.getLang('Confirm') + '</button>\
                            <button id="cancel_btn" class="button">' + Language.getLang('Cancel') + '</button>\
                        </div>',
                after: function ($dialog) {

                    $dialog.find('.close').off('click').on('click', function() {
                        deleteFolderDialog.close();
                        return false;
                    });

                    $dialog.find('.button').off('click').on('click', function () {
                        var $button = $(this);
                        switch ($button.index()) {
                            case 0:
                                deleteFolderDialog.close();
                                // 删除文件夹
                                Controller.onRemoveGrid(obj.index);
                                datacode.removeGrid(obj);
                                break;
                            case 1:
                                deleteFolderDialog.close();
                                break;
                        }
                    });
                }
            });
        }

        /**
         * 函数节流方法
         * @param Function fn 延时调用函数
         * @param Number delay 延迟多长时间
         * @param Number atleast 至少多长时间触发一次
         * @return Function 延迟执行的方法
         */
        function throttle(fn, delay, atleast) {
            var timer = null, previous = null;

            return function () {
                var now = +new Date();
                if (!previous) previous = now;
                if (now - previous > atleast) {
                    fn();
                    // 重置上一次开始时间为本次结束时间
                    previous = now;
                } else {
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        fn();
                    }, delay);
                }
            }
        }

        return {
            throttle: throttle,
            getLocale: getLocale,
            reflushThumb: reflushThumb,
            isThumbExists: isThumbExists,
            isSupportWebp: isSupportWebp,
            showNoteNotFound: showNoteNotFound,
            showDeleteFolder: showDeleteFolder
        }
    })();

    window.Api.Grid = (function () {

        function saveOrUpdate(cb) {
            maxthon.getSyncValue(MY_SITE, function (data_list) {
                if ($.isEmptyObject(data_list)) {
                    data_list = DEFAULT_MY_SITE;
                }
                cb && cb(data_list);
                maxthon.setSyncValue(MY_SITE, data_list);
            });
        }

        function getGridDataList(mapList, next) {
            if(mapList) {
                MAP_LIST = mapList
            }
            maxthon.getSyncValue(MY_SITE, function (mx5_layout) {

                if (Object.prototype.toString.call(mx5_layout).slice(8, -1) === 'Object' && Object.keys(mx5_layout).length === 0) {
                    mx5_layout = DEFAULT_MY_SITE;
                }
                maxthon.getSyncValue('needImport', function (data) {
                    if (data.needImport && data.needImport == true) { // 需要导入MX4 guest数据
                        maxthon.getLayout('qa_layout_guest', 'qa_widget_guest', function (mx4_layout_guest) {
                            maxthon.mx4_2_mx5({
                                'mx4_layout_guest': JSON.stringify(mx4_layout_guest),
                                'mx5_layout': JSON.stringify(mx5_layout),
                                'import': 'mx4'
                            }, function (result) {
                                // 设置为已导入
                                maxthon.setSyncValue('needImport', { 'needImport': false });
                                Controller.onGetGridList(result, MAP_LIST);
                            });
                        });
                        return;
                    }

                    if (data.needImport5 && data.needImport5 == true) { // 需要导入MX5 guest数据
                        maxthon.getSyncValue('my_site_guest', function(mx5_layout_guest) {
                            maxthon.mx4_2_mx5({
                                'mx5_layout_guest': JSON.stringify(mx5_layout_guest),
                                'mx5_layout': JSON.stringify(mx5_layout),
                                'import': 'mx5'
                            }, function (result) {
                                // 设置为已导入
                                maxthon.setSyncValue('needImport', { 'needImport5': false });
                                Controller.onGetGridList(result, MAP_LIST);
                            });
                        });
                        return;
                    }
                });
                Controller.onGetGridList(mx5_layout, MAP_LIST);
                next && next();
            });
        }

        function insertGridItem(i, j, item) {
            saveOrUpdate(function (data_list) {
                if (j < 0) {
                    data_list.splice(i, 0, item);
                } else {
                    data_list[j].children.splice(data_list[j].children.length, 0, data_list.splice(i, 1)[0]);
                }
            });
        }

        function moveGridItem(drag, drop) {
            saveOrUpdate(function (data_list) {
                if (drop.j < 0 && drag.j < 0) {
                    data_list.splice(drop.i, 0, data_list.splice(drag.i, 1)[0]);
                } else if (drop.j < 0 && drag.j >= 0) {
                    data_list.splice(drop.i, 0, data_list[drag.i].children.splice(drag.j, 1)[0]);
                    if (data_list[drag.i].children.length === 0) {
                        data_list.splice(drag.i, 1);
                    }
                } else {
                    data_list[drag.i].children.splice(drop.j, 0, data_list[drag.i].children.splice(drag.j, 1)[0]);
                }
            });
        }

        function removeGridItem(i, j) {
            saveOrUpdate(function (data_list) {
                if (j < 0) {
                    data_list.splice(i, 1);
                } else {
                    data_list[i].children.splice(j, 1);
                    if (data_list[i].children.length === 0) { // 删除空文件夹
                        data_list.splice(i, 1);
                    }
                }
            });
        }

        function updateGridItem(i, j, item) {
            saveOrUpdate(function (data_list) {
                if (j < 0) {
                    data_list[i] = item;
                } else {
                    data_list[i].children[j] = item;
                }
            });
        }

        function swapGridItem(drag_index, dropItem, drop_index, dragItem) {
            saveOrUpdate(function (data_list) {
                data_list.splice(drag_index, 1, dropItem);
                data_list.splice(drop_index, 1, dragItem);
            });
        }

        function addGridGroup(uiindex, drag_index, drop_index, group_name) {
            saveOrUpdate(function (data_list) {
                var group = { title: group_name, children: [] };
                var list = group.children;
                if (drag_index > drop_index) {
                    list[1] = data_list.splice(drag_index, 1)[0];
                    list[0] = data_list.splice(drop_index, 1)[0];
                } else {
                    list[0] = data_list.splice(drop_index, 1)[0];
                    list[1] = data_list.splice(drag_index, 1)[0];
                }
                data_list.splice(uiindex, 0, group);
            });
        }

        function updateGridGroup(group_index, group_name) {
            saveOrUpdate(function (data_list) {
                data_list[group_index].title = group_name;
            });
        }

        return {
            addGridGroup: addGridGroup,
            updateGridGroup: updateGridGroup,
            moveGridItem: moveGridItem,
            swapGridItem: swapGridItem,
            insertGridItem: insertGridItem,
            getGridDataList: getGridDataList,
            updateGridItem: updateGridItem,
            removeGridItem: removeGridItem
        }
    })();

    window.Api.statistic = (function () {
        var macAddress, ssid;

        function sendWebStat(data) {
            var rnd = Math.random().toString().substr(2, 5);
            var url = 'http://g.dcs.maxthon.com/mx4/web?rnd=' + rnd + '&data=';
            var str = encodeURIComponent( JSON.stringify( data ) );
            var img = new Image();
            console.log(url);
            img.src = url + str;
        }

        function webSend(data) {
            if (!data || !data.m) {
                return;
            }
            var config = {
                pt : 'mx5Qa',
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

            config.l = navigator.language || navigator.userLanguage,
            config.sv = navigator.platform || '',
            config.pm = navigator.platform || '',
            config.d = macAddress,
            config.uid = maxthon.uid,
            // 浏览器版本
            config.cv = maxthon.max_version;
            ssid = localStorage.getItem('SSID');
            if(!ssid) {
                ssid = guid();
                localStorage.setItem('SSID' , ssid);
            }
            config.ssid = ssid;
            $.extend(config.data, data.data);
            sendWebStat(config);
        }

        return {
            webSend: webSend
        }
    })()
})

/*
 * 语言包
 */
$(function () {
      var Language = {
            lang: {
                  'DocumentTitle': {
                        'zh-cn': '新标签',
                        'en': 'New tab',
                        'ar-bh': 'جديد إطار',
                        'ar-sa': 'لسان جديد',
                        'ar-ye': 'جديد إطار',
                        'be-by': 'Новая ўкладка',
                        'bg-bg': 'Нов Таб',
                        'bn-in': 'নতুন তালিকা',
                        'ca-es': 'Nova pestanya',
                        'cs-cz': 'Nová karta',
                        'da-dk': 'Ny fane',
                        'de-de': 'Neue Registerkarte',
                        'el-gr': 'Νέα καρτέλα',
                        'es-ar': 'Nueva Pestaña',
                        'es-es': 'Nueva pestaña',
                        'es-mx': 'Pestaña nueva',
                        'es-pe': 'Nueva pestaña',
                        'et-ee': 'Uus leht',
                        'eu-es': 'Hegats berria',
                        'eu': 'Hegats berria',
                        //'fa-ir': 'جديد زبانه',
                        'fi-fi': 'Uusi välilehti',
                        'fr-fr': 'Nouvel onglet',
                        'he-il': 'חדשה כרטיסייה',
                        'hi-in': 'नया टैब',
                        'hu-hu': 'Új fül',
                        'it-it': 'Nuova scheda',
                        'ja-jp': '新規タブ',
                        'ka-ge': 'ახალი დანართი',
                        'kn-in': 'ಹೊಸ ಟ್ಯಾಬು',
                        'ko-kr': '새 탭',
                        'ku-tr': 'نوێ پەڕگەی',
                        'lt-lt': 'Naujas skirtukas',
                        'ml-in': 'പുതിയ ടാബ്',
                        'mn-mn': 'Шинэ шошго',
                        'nb-no': 'Ny fane',
                        'nl-nl': 'Nieuw tabblad',
                        'pl-pl': 'Nowa karta',
                        'pt-br': 'Nova Aba',
                        'pt-pt': 'Novo Separador',
                        'ro-ro': 'Tab Nou',
                        'ru-ru': 'Новая вкладка',
                        'sk-sk': 'Nová karta',
                        'sr-cyrl' : 'Додај',
                        'sl-si': 'Nov zavihek',
                        'sr-cs': 'Нови Језичак',
                        'sv-se': 'Ny flik',
                        'ta-in': 'புதிய தத்தல்',
                        'th-th': 'แท็บใหม่',
                        'tr-tr': 'Yeni sekme',
                        'uk-ua': 'Нова вкладка',
                        'vec-it': 'Tavèƚa niova',
                        'vi-vn': 'Thẻ mới',
                        'zh-hk': '新標籤',
                        'zh-tw': '新標籤'
                  },
                  'New': {
                        'de-de': 'Hinzufügen',
                        'bg-bg': 'Добави',
                        'cs-cz': 'Přidat',
                        'es-pe': 'Añadir',
                        'eu-es': 'Gehitu',
                        'en-gb': 'Add',
                        'eu': 'Gehitu',
                        //'fa-ir': 'افزودن',
                        'fr-fr': 'Ajouter',
                        'it-it': 'Aggiungi',
                        'ko-kr': '추가',
                        'nb-no': 'Legg til',
                        'pl-pl': 'Dodaj',
                        'pt-br': 'Adicionar',
                        'sr-cyrl' : 'Додај',
                        'sr-latn' : 'Dodaj',
                        'sl-si': 'Dodaj',
                        'tr-tr': 'Ekle',
                        'vec-it': 'Xonta',
                        'zh-cn': '新增',
                        'zh-tw': '新增',
                        'ru-ru': 'Добавить',
                        'sr-cs': 'Dodaj',
                        'es-es': 'Añadir',
                        'en-us': 'Add'
                  },
                  'Url': {
                        //'fa-ir': 'نشانی',
                        'zh-cn': '网址:',
                        'zh-tw': '網址',
                        'en-us': 'Url'
                  },
                  'Title': {
                        'de-de': 'Name',
                        'bg-bg': 'Заглавие',
                        'cs-cz': 'Název',
                        'es-pe': 'Título',
                        'eu-es': 'Izenburua',
                        'en-gb': 'Title',
                        'eu': 'Izenburua',
                        //'fa-ir': 'عنوان',
                        'fr-fr': 'Titre',
                        'it-it': 'Nome',
                        'ko-kr': '제목',
                        'nb-no': 'Tittel',
                        'pl-pl': 'Tytuł strony',
                        'pt-br': 'Título',
                        'sr-cyrl' : 'Наслов',
                        'sr-latn' : 'Naslov',
                        'sl-si': 'Naslov',
                        'tr-tr': 'Başlık',
                        'vec-it': 'Tìtoƚo',
                        'zh-cn': '标题:',
                        'zh-tw': '標題',
                        'ru-ru': 'Заголовок',
                        'sr-cs': 'Naslov',
                        'es-es': 'Titulo',
                        'en-us': 'Title'
                  },
                  'CustomAdd': {
                        'de-de': 'Hinzufügen',
                        'bg-bg': 'Добави',
                        'cs-cz': 'Přidat',
                        'es-pe': 'Añadir',
                        'eu-es': 'Gehitu',
                        'en-gb': 'Add',
                        'eu': 'Gehitu',
                        //'fa-ir': 'افزودن',
                        'fr-fr': 'Ajouter',
                        'it-it': 'Aggiungi',
                        'ko-kr': '추가',
                        'nb-no': 'Legg til',
                        'pl-pl': 'Dodaj',
                        'pt-br': 'Adicionar',
                        'sr-cyrl' : 'Додај',
                        'sr-latn' : 'Dodaj',
                        'sl-si': 'Dodaj',
                        'tr-tr': 'Ekle',
                        'vec-it': 'Xonta',
                        'zh-cn': '添加此项',
                        'zh-tw': '加入此項目',
                        'ru-ru': 'Добавить',
                        'sr-cs': 'Dodaj',
                        'es-es': 'Añadir',
                        'en-us': 'Add'
                  },
                  'Add': {
                        'de-de': 'Hinzufügen',
                        'bg-bg': 'Добави',
                        'cs-cz': 'Přidat',
                        'es-pe': 'Añadir',
                        'eu-es': 'Gehitu',
                        'en-gb': 'Add',
                        'eu': 'Gehitu',
                        //'fa-ir': 'افزودن',
                        'fr-fr': 'Ajouter',
                        'it-it': 'Aggiungi',
                        'ko-kr': '추가',
                        'nb-no': 'Legg til',
                        'pl-pl': 'Dodaj',
                        'pt-br': 'Adicionar',
                        'sr-cyrl' : 'Додај',
                        'sr-latn' : 'Dodaj',
                        'sl-si': 'Vroče',
                        'tr-tr': 'Ekle',
                        'vec-it': 'Xonta',
                        'zh-cn': '添 加',
                        'zh-tw': '加入',
                        'ru-ru': 'Добавить',
                        'sr-cs': 'Dodaj',
                        'es-es': 'Añadir',
                        'en-us': 'Add'
                  },
                  'Hot': {
                        'de-de': 'Beliebt',
                        'bg-bg': 'Горещи',
                        'cs-cz': 'Horký',
                        'es-pe': 'Popular',
                        'eu-es': 'Beroa',
                        'en-gb': 'Hot',
                        'eu': 'Beroa',
                        //'fa-ir': 'محبوب',
                        'fr-fr': 'Populaire',
                        'it-it': 'Più richieste',
                        'ko-kr': '인기',
                        'nb-no': 'Populær',
                        'pl-pl': 'Gorąco',
                        'pt-br': 'Quente',
                        'sr-cyrl' : 'Популарно',
                        'sr-latn' : 'Popularno',
                        'sl-si': 'Vroče',
                        'tr-tr': 'Yeni',
                        'vec-it': 'Popoƚar',
                        'zh-cn': '推荐图片',
                        'zh-tw': '推薦圖片',
                        'ru-ru': 'Топ',
                        'sr-cs': 'Popularno',
                        'es-es': 'Popular',
                        'en-us': 'Hot'
                  },
                  'Open': {
                        'de-de': 'Öffnen',
                        'bg-bg': 'Отвори',
                        'cs-cz': 'Otevřít',
                        'es-pe': 'Abrir',
                        'eu-es': 'Ireki',
                        'en-gb': 'Open',
                        'eu': 'Ireki',
                        //'fa-ir': 'بازکردن',
                        'fr-fr': 'Ouvrir',
                        'it-it': 'Apri',
                        'ko-kr': '열기',
                        'nb-no': 'Åpne',
                        'pl-pl': 'Otwórz',
                        'pt-br': 'Abrir',
                        'sr-cyrl' : 'Отвори',
                        'sr-latn' : 'Otvori',
                        'sl-si': 'Odpri',
                        'tr-tr': 'Aç',
                        'vec-it': 'Vèrxi',
                        'zh-cn': '打开',
                        'zh-tw': '開啟',
                        'ru-ru': 'Открыть',
                        'sr-cs': 'Otvori',
                        'es-es': 'Abrir',
                        'en-us': 'Open'
                  },
                  'Save': {
                        'de-de': 'Speichern',
                        'bg-bg': 'Запиши',
                        'cs-cz': 'Uložit',
                        'es-pe': 'Guardar',
                        'eu-es': 'Gorde',
                        'en-gb': 'Save',
                        'eu': 'Gorde',
                        //'fa-ir': 'ذخيره',
                        'fr-fr': 'Enregistrer',
                        'it-it': 'Salva',
                        'ko-kr': '저장',
                        'nb-no': 'Lagre',
                        'pl-pl': 'Zapisz',
                        'pt-br': 'Salvar',
                        'sr-cyrl' : 'Сачувај',
                        'sr-latn' : 'Sačuvaj',
                        'sl-si': 'Shrani',
                        'tr-tr': 'Kaydet',
                        'vec-it': 'Salva',
                        'zh-cn': '保存',
                        'zh-tw': '儲存',
                        'ru-ru': 'Сохранить',
                        'sr-cs': 'Sačuvaj',
                        'es-es': 'Guardar',
                        'en-us': 'Save'
                  },
                  'Edit': {
                        'de-de': 'Bearbeiten',
                        'bg-bg': 'Редакция',
                        'cs-cz': 'Upravit',
                        'es-pe': 'Editar',
                        'eu-es': 'Editatu',
                        'en-gb': 'Edit',
                        'eu': 'Editatu',
                        //'fa-ir': 'ويرايش',
                        'fr-fr': 'Modifier',
                        'it-it': 'Modifica',
                        'ko-kr': '편집',
                        'nb-no': 'Rediger',
                        'pl-pl': 'Edytuj',
                        'pt-br': 'Editar',
                        'sr-cyrl' : 'Уреди',
                        'sr-latn' : 'Urеdi',
                        'sl-si': 'Uredi',
                        'tr-tr': 'Düzenle',
                        'vec-it': 'Modìfega',
                        'zh-cn': '编辑',
                        'zh-tw': '編輯',
                        'ru-ru': 'Править',
                        'sr-cs': 'Urеdi',
                        'es-es': 'Editar',
                        'en-us': 'Edit'
                  },
                  'Delete': {
                        'de-de': 'Löschen',
                        'bg-bg': 'Изтрий',
                        'cs-cz': 'Odstranit',
                        'es-pe': 'Eliminar',
                        'eu-es': 'Ezabatu',
                        'en-gb': 'Delete',
                        'eu': 'Ezabatu',
                        //'fa-ir': 'حذف',
                        'fr-fr': 'Supprimer',
                        'it-it': 'Elimina',
                        'ko-kr': '삭제',
                        'nb-no': 'Slett',
                        'pl-pl': 'Usuń',
                        'pt-br': 'Apagar',
                        'sr-cyrl' : 'Избриши',
                        'sr-latn' : 'Izbriši',
                        'sl-si': 'Zbriši',
                        'tr-tr': 'Sil',
                        'vec-it': 'Scansèƚa',
                        'zh-cn': '删除',
                        'zh-tw': '刪除',
                        'ru-ru': 'Удалить',
                        'sr-cs': 'Izbriši',
                        'es-es': 'Borrar',
                        'en-us': 'Delete'
                  },
                  'Confirm': {
                        'de-de': 'Bestätigen',
                        'bg-bg': 'Потвърдете',
                        'cs-cz': 'Potvrdit',
                        'es-pe': 'Confirmar',
                        'eu-es': 'Baieztatu',
                        'en-gb': 'Confirm',
                        'eu': 'Baieztatu',
                        //'fa-ir': 'تایید',
                        'fr-fr': 'Confirmer',
                        'it-it': 'Conferma',
                        'ko-kr': '확인',
                        'nb-no': 'Bekreft',
                        'pl-pl': 'Zatwierdź',
                        'pt-br': 'Confirmar',
                        'sr-cyrl' : 'Потврди',
                        'sr-latn' : 'Potvrdi',
                        'sl-si': 'Potrdi',
                        'tr-tr': 'Onayla',
                        'vec-it': 'Conferma',
                        'zh-cn': '确定',
                        'zh-tw': '確定',
                        'ru-ru': 'Подтвердить',
                        'sr-cs': 'Potvrdi',
                        'es-es': 'Confirmar',
                        'en-us': 'Confirm'
                  },
                  'Cancel': {
                        'de-de': 'Abbrechen',
                        'bg-bg': 'Отказ',
                        'cs-cz': 'Storno',
                        'es-pe': 'Cancelar',
                        'eu-es': 'Ezeztatu',
                        'en-gb': 'Cancel',
                        'eu': 'Ezeztatu',
                        //'fa-ir': 'لغو',
                        'fr-fr': 'Annuler',
                        'it-it': 'Annulla',
                        'ko-kr': '취소',
                        'nb-no': 'Avbryt',
                        'pl-pl': 'Anuluj',
                        'pt-br': 'Cancelar',
                        'sr-cyrl' : 'Откажи',
                        'sr-latn' : 'Otkaži',
                        'sl-si': 'Prekliči',
                        'tr-tr': 'İptal',
                        'vec-it': 'Anuƚa',
                        'zh-cn': '取消',
                        'zh-tw': '取消',
                        'ru-ru': 'Отмена',
                        'sr-cs': 'Otkaži',
                        'es-es': 'Cancelar',
                        'en-us': 'Cancel'
                  },
                  'HotTab': {
                        'de-de': 'Webseiten',
                        'bg-bg': 'Сайтове',
                        'cs-cz': 'Webové stránky',
                        'es-pe': 'Sitios web',
                        'eu-es': 'Webguneak',
                        'en-gb': 'Websites',
                        'eu': 'Webguneak',
                        //'fa-ir': 'وبگاه ها',
                        'fr-fr': 'Sites Web',
                        'it-it': 'Siti web',
                        'ko-kr': '웹사이트',
                        'nb-no': 'Nettsteder',
                        'pl-pl': 'Strony WWW',
                        'pt-br': 'Sites da Web',
                        'sr-cyrl' : 'Веб сајтови',
                        'sr-latn' : 'Vеb sajtovi',
                        'sl-si': 'Spletne strani',
                        'tr-tr': 'Web Siteleri',
                        'vec-it': 'Siti web',
                        'zh-cn': '热门网址',
                        'zh-tw': '熱門網址',
                        'ru-ru': 'Веб-сайты',
                        'sr-cs': 'Vеb sajtovi',
                        'es-es': 'Sitios web',
                        'en-us': 'Websites'
                  },
                  'CustomAddTab': {
                        'de-de': 'Benutzerdefiniert',
                        'bg-bg': 'По избор',
                        'cs-cz': 'Vlastní',
                        'es-pe': 'Personalizado',
                        'eu-es': 'Norberea',
                        'en-gb': 'Custom',
                        'eu': 'Norberea',
                        //'fa-ir': 'سفارشی',
                        'fr-fr': 'Personnalisé',
                        'it-it': 'Personalizzato',
                        'ko-kr': '사용자 정의',
                        'nb-no': 'Tilpasset',
                        'pl-pl': 'Własna',
                        'pt-br': 'Personalizado',
                        'sr-cyrl' : 'Прилагођено',
                        'sr-latn' : 'Prilagođеno',
                        'sl-si': 'Po meri',
                        'tr-tr': 'Özel',
                        'vec-it': 'Personaƚixà',
                        'zh-cn': '自定义添加',
                        'zh-tw': '自訂加入',
                        'ru-ru': 'Пользовательские',
                        'sr-cs': 'Prilagođеno',
                        'es-es': 'Personalizar',
                        'en-us': 'Custom'
                  },
                  'MyFavorites': {
                        'de-de': 'Meine Favoriten',
                        'bg-bg': 'Моите Отметки',
                        'cs-cz': 'Oblíbené',
                        'es-pe': 'Mis favoritos',
                        'eu-es': 'Nire Gogokoenak',
                        'en-gb': 'My Favourites',
                        'eu': 'Nire Gogokoenak',
                        //'fa-ir': 'من علاقمندیهای',
                        'fr-fr': 'Mes Favoris',
                        'it-it': 'Preferiti',
                        'ko-kr': '즐겨찾기',
                        'nb-no': 'Mine favoritter',
                        'pl-pl': 'Moje Ulubione',
                        'pt-br': 'Meus Favoritos',
                        'sr-cyrl' : 'Моји обележивачи',
                        'sr-latn' : 'Moji obеlеživači',
                        'sl-si': 'Moje priljubljene',
                        'tr-tr': 'Sık Kullanılanlarım',
                        'vec-it': 'I me preferidi',
                        'zh-cn': '我的站点',
                        'zh-tw': '我的網站',
                        'ru-ru': 'Закладки',
                        'sr-cs': 'Moji obеlеživači',
                        'es-es': 'Mis favoritos',
                        'en-us': 'My Favorites'
                  },
                  'SuggestedWebSite': {
                        'de-de': 'Vorgeschlagene WebSite',
                        'bg-bg': 'Предложени Сайтове',
                        'cs-cz': 'Navrhovaná stránka',
                        'es-pe': 'Sitio web sugerido',
                        'eu-es': 'Iradokitako WebGunea',
                        'en-gb': 'Suggested Websites',
                        'eu': 'Iradokitako WebGunea', // 兼容mac 语言编码不统一
                        //'fa-ir': 'وبگاه پیشنهادی',
                        'fr-fr': 'Site Web suggéré',
                        'it-it': 'WebSite suggerito',
                        'ko-kr': '추천 웹사이트',
                        'nb-no': 'Foreslått nettside',
                        'pl-pl': 'Sugerowane strony WWW',
                        'pt-br': 'Site da web sugerido',
                        'sr-cyrl' : 'Предложени сајтови',
                        'sr-latn' : 'Prеdložеni sajtovi',
                        'sl-si': 'Predlagana spletna stran',
                        'tr-tr': 'Önerilen Web Siteleri',
                        'vec-it': 'Sito web sugerìo',
                        'zh-cn': '推荐站点',
                        'zh-tw': '推薦網站',
                        'ru-ru': 'Предложенные сайты',
                        'sr-cs': 'Prеdložеni sajtovi',
                        'es-es': 'Sitios web sugeridos',
                        'en-us': 'Suggested WebSite'
                  },
                  'SearchEnterURL': {
                        'de-de': 'Suchen',
                        'bg-bg': 'Търсене',
                        'cs-cz': 'Hledat',
                        'es-pe': 'Buscar',
                        'eu-es': 'Bilatu',
                        'en-gb': 'Search',
                        'eu': 'Bilatu',
                        //'fa-ir': 'جستجو يا درج نشاني وب',
                        'fr-fr': 'Rechercher',
                        'it-it': 'Cerca',
                        'ko-kr': '검색',
                        'nb-no': 'Søk',
                        'pl-pl': 'Szukaj w sieci',
                        'pt-br': 'Buscar',
                        'sr-cyrl' : 'Тражи',
                        'sr-latn' : 'Traži',
                        'sl-si': 'Išči',
                        'tr-tr': 'Arayın',
                        'vec-it': 'Serca o inserisi indriso URL',
                        'zh-cn': '查找网站',
                        'zh-tw': '尋找網站',
                        'ru-ru': 'Поиск',
                        'sr-cs': 'Traži',
                        'es-es': 'Buscar',
                        'en-us': 'Search'
                  },
                  'SelectBackground': {
                        'de-de': 'Hintergrund ändern',
                        'bg-bg': 'Промяна на фона',
                        'cs-cz': 'Změnit pozadí',
                        'es-pe': 'Cambiar el fondo',
                        'eu-es': 'Aldatu barrena',
                        'en-gb': 'Change background',
                        'eu': 'Aldatu barrena',
                        //'fa-ir': 'پس زمینه را تغییر دهد',
                        'fr-fr': 'Modifier l\'arrière plan',
                        'it-it': 'Cambiare sfondo...',
                        'ko-kr': '배경 변경',
                        'nb-no': 'Endre bakgrunn',
                        'pl-pl': 'Zmień tło',
                        'pt-br': 'Mudar plano de fundo',
                        'sr-cyrl' : 'Промени позадину',
                        'sr-latn' : 'Promеni pozadinu',
                        'sl-si': 'Spremeni ozadje',
                        'tr-tr': 'Arka planı değiştir',
                        'vec-it': 'Canbia sfondro',
                        'zh-cn': '选择背景',
                        'zh-tw': '選擇背景',
                        'ru-ru': 'Сменить фон',
                        'sr-cs': 'Promеni pozadinu',
                        'es-es': 'Cambiar el fondo',
                        'en-us': 'Change background'
                  },
                  'SelectBackgroundNotice': {
                        'de-de': 'Wir empfehlen Ihnen, ein Bild größer als die aktuelle Bildschirmauflösung mit JPG-, PNG- oder GIF-Format hochzuladen.',
                        'bg-bg': 'Препоръчваме да се качи снимка по-голяма от резолюцията на екрана - JPG, PNG или GIF формат.',
                        'cs-cz': 'Doporučujeme nahrát obrázek větší než aktuální rozlišení obrazovky ve formátu JPG, PNG nebo GIF.',
                        'es-pe': 'Le recomendamos que cargue una imagen más grande que la resolución de pantalla actual con formato JPG, PNG o GIF.',
                        'eu-es': 'Ikusleihoaren bereizma bezain handia den argazki bat igotzea gomendatzen dizugu JPG, PNG edo GIF heuskarrian.',
                        'en-gb': 'We recommend you upload a picture larger than the current screen resolution in JPG, PNG or GIF format.',
                        'eu': 'Ikusleihoaren bereizma bezain handia den argazki bat igotzea gomendatzen dizugu JPG, PNG edo GIF heuskarrian.',
                        //'fa-ir': 'پیشنهاد میشود تصویری بزرگتر از وضوح تصویر جاری با اشکال JPG یا PNG یا GIF بارگذاری کنید.',
                        'fr-fr': 'Nous vous recommandons de télécharger une image plus grande que la résolution d\'écran actuelle au format JPG, PNG ou GIF.',
                        'it-it': 'Consigliamo di caricare un\'immagine più grande della risoluzione dello schermo corrente con formato JPG, PNG o GIF.',
                        'ko-kr': '현재 화면 해상도보다 큰 JPG, PNG 또는 GIF 형식의 사진을 업로드하길 권장합니다.',
                        'nb-no': 'Vi anbefaler deg å laste opp et bilde større enn nåværende skjermoppløsning i JPG, PNG eller GIF-format.',
                        'pl-pl': 'Zalecamy przesłać plik JPG, PNG lub GIF o rozmiarach większych od aktualnie ustawionej rozdzielczości ekranu.',
                        'pt-br': 'Recomendamos que você faça o upload de uma imagem maior que a resolução de tela atual com formato JPG, PNG ou GIF.',
                        'sr-cyrl' : 'Препоручујемо отпремање слике веће од тренутне резолуције екрана у JPG, PNG или GIF формату.',
                        'sr-latn' : 'Prеporučujеmo otprеmanjе slikе vеćе od trеnutnе rеzolucijе еkrana u JPG, PNG ili GIF formatu.',
                        'sl-si': 'Priporočamo vam nalaganje slike, ki je večja od trenutne ločljivosti zaslona, v JPG, PNG ali GIF formatu.',
                        'tr-tr': 'JPG, PNG veya GIF biçiminde olan şu anki ekran çözünürlüğünden daha büyük bir resmi yüklemenizi öneririz.',
                        'vec-it': 'Racomandemo de cargar suxo na imàxene pì granda de ƚa resoƚusion de\'l monitor, in formato JPG, PNG o GIF.',
                        'zh-cn': '建议上传大于当前屏幕分辨率的JPG、PNG或GIF格式的图片。',
                        'zh-tw': '建議上傳高於目前螢幕解析度的JPG、PNG或GIF格式圖檔。',
                        'ru-ru': 'Мы рекомендуем загружать изображения в формате JPG, PNG или GIF размером выше, чем текущее разрешение экрана.',
                        'sr-cs': 'Prеporučujеmo otprеmanjе slikе vеćе od trеnutnе rеzolucijе еkrana u JPG, PNG ili GIF formatu.',
                        'es-es': 'Le recomendamos que cargue una imagen más grande que la resolución de pantalla actual con formato JPG, PNG o GIF.',
                        'en-us': 'We recommend you upload a picture larger than the current screen resolution in JPG, PNG or GIF format.'
                  },
                  'EnterUrl': {
                        'de-de': 'URL hier eingeben',
                        'bg-bg': 'Въведете URL',
                        'cs-cz': 'Zadejte URL',
                        'es-pe': 'Escriba la dirección URL',
                        'eu-es': 'Sartu URL helbidea',
                        'en-gb': 'Enter the URL',
                        'eu': 'Sartu URL helbidea',
                        //'fa-ir': 'لطفاً نشانی وب را وارد کنید',
                        'fr-fr': 'Entrez l\'URL',
                        'it-it': 'Inserisci l\'indirizzo',
                        'ko-kr': 'URL을 입력하십시오',
                        'nb-no': 'Angi URL',
                        'pl-pl': 'Wprowadź adres URL',
                        'pt-br': 'Insira a URL',
                        'sr-cyrl' : 'Унесите адресу',
                        'sr-latn' : 'Unesite adresu',
                        'sl-si': 'Vnesi URL',
                        'tr-tr': 'URL\'yi girin',
                        'vec-it': 'Inserisi \'l indriso web',
                        'zh-cn': '请输入网址',
                        'zh-tw': '請輸入網址',
                        'ru-ru': 'Введите адрес',
                        'sr-cs': 'Unеsitе adrеsu',
                        'es-es': 'Introduzca la URL',
                        'en-us': 'Enter the URL'
                  },
                  'CheckUrl': {
                        'de-de': 'Bitte überprüfen Sie die URL.',
                        'bg-bg': 'Моля, проверете адреса.',
                        'cs-cz': 'Zkontrolujte URL adresu.',
                        'es-pe': 'Por favor, compruebe la URL.',
                        'eu-es': 'Mesedez egiaztatu URL-a.',
                        'en-gb': 'Please check the URL',
                        'eu': 'Mesedez egiaztatu URL-a.',
                        //'fa-ir': 'لطفاً نشانی وب را بررسی کنید.',
                        'fr-fr': 'Veuillez vérifiez l\'URL.',
                        'it-it': 'Verifica la URL.',
                        'ko-kr': 'URL을 확인하십시오.',
                        'nb-no': 'Kontroller URL.',
                        'pl-pl': 'Sprawdź adres URL.',
                        'pt-br': 'Verifique a URL.',
                        'sr-cyrl' : 'Проверите адресу.',
                        'sr-latn' : 'Provеritе adrеsu.',
                        'sl-si': 'Prosimo, preverite naslov URL.',
                        'tr-tr': 'Lütfen URL\'yi kontrol edin.',
                        'vec-it': 'Contròƚa el indriso WEB.',
                        'zh-cn': '网址输入不合法',
                        'zh-tw': '網址輸入不符規定',
                        'ru-ru': 'Проверьте адрес.',
                        'sr-cs': 'Provеritе adrеsu.',
                        'es-es': 'Compruebe la Url.',
                        'en-us': 'Please check the URL.'
                  },
                  'EnterTitle': {
                        'de-de': 'Name',
                        'bg-bg': 'Заглавие',
                        'cs-cz': 'Název',
                        'es-pe': 'Título',
                        'eu-es': 'Izenburua',
                        'en-gb': 'Title',
                        'eu': 'Izenburua',
                        //'fa-ir': 'لطفاً عنوان را وارد کنید',
                        'fr-fr': 'Titre',
                        'it-it': 'Nome',
                        'ko-kr': '제목',
                        'nb-no': 'Tittel',
                        'pl-pl': 'Wprowadź tytuł',
                        'pt-br': 'Título',
                        'sr-cyrl' : 'Наслов',
                        'sr-latn' : 'Naslov',
                        'sl-si': 'Naslov',
                        'tr-tr': 'Başlık',
                        'vec-it': 'Inserisi el tìtoƚo',
                        'zh-cn': '请输入标题',
                        'zh-tw': '請輸入標題',
                        'ru-ru': 'Заголовок',
                        'sr-cs': 'Unеsitе naslov',
                        'es-es': 'Título',
                        'en-us': 'Title'
                  },
                  'EnterTitleMoreThan30': {
                        'de-de': 'Geben Sie nie mehr als 30 Zeichen ein.',
                        'bg-bg': 'заглавието да не е по-голямо от 30 символа.',
                        'cs-cz': 'název není delší než 30 znaků.',
                        'es-pe': 'el título no debe tener más de 30 caracteres.',
                        'eu-es': 'izenburuak ez ditu 30 hizkirri baino gehiago.',
                        'en-gb': 'The title should be no more than 30 characters',
                        'eu': 'izenburuak ez ditu 30 hizkirri baino gehiago.',
                        //'fa-ir': 'عنوان نباید بیش از ٣٠ رقم باشد.',
                        'fr-fr': 'le titre ne doit pas dépasser 30 caractères.',
                        'it-it': 'Il titolo non è superiore a 30 caratteri.',
                        'ko-kr': '제목은 30 문자보다 적어야 합니다.',
                        'nb-no': 'tittelen kan ikke være mer enn 30 karakterer.',
                        'pl-pl': 'tytuł nie może przekraczać 30-tu znaków.',
                        'pt-br': 'o título não é mais do que 30 caracteres.',
                        'sr-cyrl' : 'Наслов не сме имати више од 30 знакова.',
                        'sr-latn' : 'Naslov nе smе imati višе od 30 znakova.',
                        'sl-si': 'naslov ne sme biti daljši od 30 znakov.',
                        'tr-tr': 'Başlık 30 karakterden fazla olamaz.',
                        'vec-it': 'el tìtoƚo no\'l pasa i 30 caràteri.',
                        'zh-cn': '标题不能超过30个字符。',
                        'zh-tw': '標題不能超過30個字元。',
                        'ru-ru': 'заголовок не длиннее 30 символов.',
                        'sr-cs': 'naslov nе smе imati višе od 30 znakova.',
                        'es-es': 'El titulo no debe tener más de 20 caracteres.',
                        'en-us': 'The title is no more than 30 characters.'
                  },
                  'CurrentlyOpen': {
                        'de-de': 'Derzeit geöffnet',
                        'bg-bg': 'Отворени в момента',
                        'cs-cz': 'Aktuálně otevřené',
                        'es-pe': 'Actualmente Abierto',
                        'eu-es': 'Orain Irekita',
                        'en-gb': 'Currently Open',
                        'eu': 'Orain Irekita',
                        //'fa-ir': 'هم اکنون بازست',
                        'fr-fr': 'Actuellement ouvert',
                        'it-it': 'Attualmente aperto',
                        'ko-kr': '열린 사이트',
                        'nb-no': 'Åpen nå',
                        'pl-pl': 'Aktualnie Otwarte',
                        'pt-br': 'Atualmente aberto',
                        'sr-cyrl' : 'Тренутно отворено',
                        'sr-latn' : 'Trеnutno otvorеno',
                        'sl-si': 'Trenutno odprto',
                        'tr-tr': 'Şu Anda Açık',
                        'vec-it': 'Atualmente vèrto',
                        'zh-cn': '当前打开',
                        'zh-tw': '目前開啟',
                        'ru-ru': 'Открытые сейчас',
                        'sr-cs': 'Trеnutno otvorеno',
                        'es-es': 'Abiertos',
                        'en-us': 'Currently Open'
                  },
                  'MostVisited': {
                        'de-de': 'Meist besucht',
                        'bg-bg': 'Най-посещавани',
                        'cs-cz': 'Nejnavštěvovanější',
                        'es-pe': 'Más visitado',
                        'eu-es': 'Ikusienak',
                        'en-gb': 'Most Visited',
                        'eu': 'Ikusienak',
                        //'fa-ir': 'پربازدیدترین',
                        'fr-fr': 'Les plus visités',
                        'it-it': 'I più visitati',
                        'ko-kr': '자주 방문',
                        'nb-no': 'Mest besøkt',
                        'pl-pl': 'Najczęściej Odwiedzane',
                        'pt-br': 'Mais visitados',
                        'sr-cyrl' : 'Најпосећеније',
                        'sr-latn' : 'Najposеćеnijе',
                        'sl-si': 'Najbolj obiskane',
                        'tr-tr': 'En Çok Ziyaret Edilen',
                        'vec-it': 'I pì vixitài',
                        'zh-cn': '最常访问',
                        'zh-tw': '最常瀏覽',
                        'ru-ru': 'Часто посещаемые',
                        'sr-cs': 'Najposеćеnijе',
                        'es-es': 'Los más visitados',
                        'en-us': 'Most Visited'
                  },
                  'Maxnote': {
                        'ko-kr': '맥스노트',
                        'zh-cn': '傲游笔记',
                        'en-gb': 'Infobox',
                        'zh-tw': 'Maxthon筆記',
                        'en-us': 'Maxnote'
                  },
                  'LastSession': {
                        'de-de': 'Letzte Sitzung',
                        'bg-bg': 'Последна сесия',
                        'cs-cz': 'Naposled otevřeno',
                        'es-pe': 'Última Sesión',
                        'eu-es': 'Azken saioa',
                        'en-gb': 'Last Session',
                        'eu': 'Azken saioa',
                        //'fa-ir': 'آخرین نشست',
                        'fr-fr': 'Dernière session',
                        'it-it': 'Ultima sessione',
                        'ko-kr': '마지막 세션',
                        'nb-no': 'Siste økt',
                        'pl-pl': 'Ostatnia Sesja',
                        'pt-br': 'Última Sessão',
                        'sr-cyrl' : 'Последња сесија',
                        'sr-latn' : 'Poslеdnja sеsija',
                        'sl-si': 'Zadnja seja',
                        'tr-tr': 'Son Oturum',
                        'vec-it': 'Sesion ùltima',
                        'zh-cn': '上次未关闭',
                        'zh-tw': '上次未關閉',
                        'ru-ru': 'Последняя сессия',
                        'sr-cs': 'Poslеdnja sеsija',
                        'es-es': 'Ultima sesion',
                        'en-us': 'Last Session'
                  },
                  'Screenshot': {
                        'de-de': 'Bildschirmfoto',
                        'bg-bg': 'Снимка на екрана',
                        'cs-cz': 'Snímek stránky',
                        'es-pe': 'Captura de pantalla',
                        'eu-es': 'Ikusleiho-argazkia',
                        'en-gb': 'Screenshot',
                        'eu': 'Ikusleiho-argazkia',
                        //'fa-ir': 'عكس فوري',
                        'fr-fr': 'Capture d\'écran',
                        'it-it': 'Cattura',
                        'ko-kr': '스크린샷',
                        'nb-no': 'Skjermdump',
                        'pl-pl': 'Zrzut ekranu',
                        'pt-br': 'Captura de tela',
                        'sr-cyrl' : 'Снимак екрана',
                        'sr-latn' : '',
                        'sl-si': 'Posnetek zaslona',
                        'tr-tr': 'Ekran Görüntüsü',
                        'vec-it': 'Catura schermada',
                        'zh-cn': '网页截图',
                        'zh-tw': '網頁截圖',
                        'ru-ru': 'Снимок экрана',
                        'sr-cs': 'Snimak еkrana',
                        'es-es': 'Captura de pantalla',
                        'en-us': 'Screenshot'
                  },
                  'ColorBlock': {
                        'de-de': 'Farbblock',
                        'bg-bg': 'Цветен блок',
                        'cs-cz': 'Barevné pozadí',
                        'es-pe': 'Bloque de color',
                        'eu-es': 'Margo Blokea',
                        'en-gb': 'Color Block',
                        'eu': 'Margo Blokea',
                        //'fa-ir': 'رنگ قطعه',
                        'fr-fr': 'Couleur de bloc',
                        'it-it': 'Blocco di colore',
                        'ko-kr': '색상 블럭',
                        'nb-no': 'Blokkfarge',
                        'pl-pl': 'Kolorowy kafelek',
                        'pt-br': 'Cor do Bloco',
                        'sr-cyrl' : 'Обојени блок',
                        'sr-latn' : 'Obojеni blok',
                        'sl-si': 'Barvni blok',
                        'tr-tr': 'Renk Bloğu',
                        'vec-it': 'Blòco coƚor',
                        'zh-cn': '色块文字',
                        'zh-tw': '色塊文字',
                        'ru-ru': 'Цвет блока',
                        'sr-cs': 'Obojеni blok',
                        'es-es': 'Bloqueo de color',
                        'en-us': 'Color Block'
                  },
                  'NoteBeenCompleteDeleted': {
                        'de-de': 'Der Rekord existierte nicht mehr. Fügen Sie Ihren Schnellzugriff wieder hinzu.',
                        'bg-bg': 'Записът вече не съществува. Добавете отново Бърз Достъп.',
                        'cs-cz': 'Záznam už neexistuje. Přidejte znovu Rychlý přístup.',
                        'es-pe': 'El registro ya no existía. Vuelva a agregar su acceso rápido.',
                        'eu-es': 'Grabaketa ez dago jadanik. Gehitu zure Sarbide Azkarra berriro.',
                        'en-gb': 'The record no longer exists. Add to your Quick Access again.',
                        'eu': 'Grabaketa ez dago jadanik. Gehitu zure Sarbide Azkarra berriro.',
                        //'fa-ir': 'این سابقه دیگر موجود نیست. بندانگشتی خود را دوباره بیفزایید.',
                        'fr-fr': 'L\'enregistrement n\'existait plus. Ajoutez à nouveau votre accès rapide.',
                        'it-it': 'Il record non esisteva più. Aggiungi nuovamente il tuo accesso rapido.',
                        'ko-kr': '레코드가 더 이상 존재하지 않습니다. 다시 빠른 액세스를 추가하십시오.',
                        'nb-no': 'Posten eksisterer ikke lenger. Legg til i Quick Access igjen.',
                        'pl-pl': 'Ta pozycja już nie istnieje. Dodaj ją ponownie do swojego Szybkiego Dostępu.',
                        'pt-br': 'O registro não existie mais. Adicione seu acesso rápido novamente.',
                        'sr-cyrl' : 'Запис више не постоји. Поново додајте Брзо бирање.',
                        'sr-latn' : 'Zapis višе nе postoji. Ponovo dodajtе Brzo biranjе.',
                        'sl-si': 'Zapis ne obstaja več. Ponovno dodajte vaš Hitri dostop.',
                        'tr-tr': 'Kayıt artık mevcut değil. Hızlı Erişim\'inizi tekrar ekleyin.',
                        'vec-it': 'El record no\'l existe altro. Xonta da novo el to Quick Access.',
                        'zh-cn': '该笔记已不存在，请重新选择。',
                        'zh-tw': '該筆記已不存在，請重新選擇。',
                        'ru-ru': 'Запись больше не существует. Добавьте свою плитку снова.',
                        'sr-cs': 'Zapis višе nе postoji. Ponovo dodajtе Brzo biranjе.',
                        'es-es': 'El registro ya no existe. Agregue su acceso rápido nuevamente',
                        'en-us': 'The record no longer existed. Add your Quick Access again.'
                  },
                  'NoteBeenDeleted': {
                        'de-de': 'Der Datensatz wurde gelöscht. Überprüfen Sie den Maxnote Trash.',
                        'bg-bg': 'Записът беше изтрит. Проверете в кошчето на Maxnote.',
                        'cs-cz': 'Záznam byl odstraněn. Zkontrolujte Koš v Maxnote.',
                        'es-pe': 'Se ha eliminado el registro. Compruebe en la Papelera de Maxnote.',
                        'eu-es': 'Grabaketa ezabatua izan da. Egiaztatu Maxnote Zakarrontzian.',
                        'en-gb': 'The record has been deleted. Check in the Maxnote Trash.',
                        'eu': 'Grabaketa ezabatua izan da. Egiaztatu Maxnote Zakarrontzian.',
                        //'fa-ir': 'سابقه مذکو Maxnote ده است. زباله دان سَبَدداده را ببینید.',
                        'fr-fr': 'L\'enregistrement a été supprimé. Vérifiez dans la poubelle de Maxnote.',
                        'it-it': 'Il record è stato eliminato. Controllate il cestino di Maxnote.',
                        'ko-kr': '레코드가 삭제되었습니다. Maxnote 휴지통을 확인하십시오.',
                        'nb-no': 'Posten er slettet. Se etter i Maxnote Trash.',
                        'pl-pl': 'Ta pozycja została skasowana. Sprawdź zawartość śmietnika Maxnote.',
                        'pt-br': 'O registro foi excluído. Verifique na lixeira do Maxnote.',
                        'sr-cyrl' : 'Запис је избрисан. Проверите отпад у Maxnote.',
                        'sr-latn' : 'Zapis jе izbrisan. Provеritе otpad u Maxnote.',
                        'sl-si': 'Zapis je bil zbrisan. Preverite v Maxnote smetnjaku.',
                        'tr-tr': 'Kayıt silindi. Maxnote Çöp Kutusunu kontrol edin.',
                        'vec-it': 'El record el xé stà scanseƚà. Varda inte i scarti de Maxnote.',
                        'zh-cn': '该笔记已被删除，请在傲游笔记回收站查看。',
                        'zh-tw': '該筆記已被刪除，請在傲遊筆記回收桶查看。',
                        'ru-ru': 'Запись была удалена. Возможно она в Корзине Maxnote.',
                        'sr-cs': 'Zapis jе izbrisan. Provеritе otpad u Maxnote.',
                        'es-es': 'Se ha eliminado el registro. Compruebe en la Papelera de Maxnote.',
                        'en-us': 'The record has been deleted. Check in the Maxnote Trash.'
                  },
                  'NewFolder': {
                        'de-de': 'Neuer Ordner',
                        'bg-bg': 'Нова папка',
                        'cs-cz': 'Nová složka',
                        'es-pe': 'Nueva carpeta',
                        'eu-es': 'Agiritegi Berria',
                        'en-gb': 'New Folder',
                        'eu': 'Agiritegi Berria',
                        //'fa-ir': 'پوشه جديد',
                        'fr-fr': 'Nouveau dossier',
                        'it-it': 'Nuova cartella',
                        'ko-kr': '새 폴더',
                        'nb-no': 'Ny mappe',
                        'pl-pl': 'Utwórz nowy katalog',
                        'pt-br': 'Nova Pasta',
                        'sr-cyrl' : 'Нова фасцикла',
                        'sr-latn' : 'Nova fascikla',
                        'sl-si': 'Nova mapa',
                        'tr-tr': 'Yeni Klasör',
                        'vec-it': 'Cartèƚa niova',
                        'zh-cn': '文件夹',
                        'zh-tw': '資料夾',
                        'ru-ru': 'Новая папка',
                        'sr-cs': 'Nova fascikla',
                        'es-es': 'Nueva carpeta',
                        'en-us': 'New Folder'
                  },
                  'DeleteFolderTitle': {
                        'de-de': 'Ordner löschen',
                        'bg-bg': 'Изтрий папка',
                        'cs-cz': 'Odstranit složku',
                        'es-pe': 'Eliminar carpeta',
                        'eu-es': 'Ezabatu agiritegia',
                        'en-gb': 'Delete folder',
                        'eu': 'Ezabatu agiritegia',
                        //'fa-ir': 'پوشه گردد',
                        'fr-fr': 'Supprimer le dossier',
                        'it-it': 'Elimina cartella',
                        'ko-kr': '폴더 삭제',
                        'nb-no': 'Slett mappe',
                        'pl-pl': 'Usuń folder',
                        'pt-br': 'Excluir pasta',
                        'sr-cyrl' : 'Избриши фасциклу',
                        'sr-latn' : '',
                        'sl-si': 'Izbriši mapo',
                        'tr-tr': 'Klasörü sil',
                        'vec-it': 'Scanseƚar ƚa cartèƚa',
                        'zh-cn': '删除文件夹',
                        'zh-tw': '刪除資料夾',
                        'ru-ru': 'Удалить папку',
                        'sr-cs': 'Izbriši fasciklu',
                        'es-es': 'Eliminar carpeta',
                        'en-us': 'Delete folder'
                  },
                  'DeleteFolderWarn': {
                        'de-de': 'Möchten Sie diesen Container wirklich löschen?',
                        'bg-bg': 'Сигурни ли сте, че искате да изтриете папката?',
                        'cs-cz': 'Opravdu chcete odstranit tuto složku?',
                        'es-pe': '¿Está seguro de eliminar esta carpeta?',
                        'eu-es': 'Zihur zaude agiritegi hau ezabatzea nahi duzula?',
                        'en-gb': 'Are you sure you want to delete this folder?',
                        'eu': 'Zihur zaude agiritegi hau ezabatzea nahi duzula?',
                        //'fa-ir': 'آیا از حذف این پوشه اطمینان دارید؟',
                        'fr-fr': 'Êtes-vous sûr de vouloir supprimer le dossier ?',
                        'it-it': 'Sei sicuro di voler eliminare la cartella?',
                        'ko-kr': '정말로 이 폴더를 삭제하시겠습니까?',
                        'nb-no': 'Er du sikker på at du vil slette mappen?',
                        'pl-pl': 'Czy jesteś pewien, że chcesz usunąć ten folder?',
                        'pt-br': 'Tem certeza de que deseja excluir esta pasta?',
                        'sr-cyrl' : 'Да ли сте сигурни да желите да избришете ову фасциклу?',
                        'sr-latn' : 'Da li stе sigurni da žеlitе da izbrišеtе ovu fasciklu?',
                        'sl-si': 'Ali zares želite izbrisati to mapo?',
                        'tr-tr': 'Bu klasörü silmek istediğinize emin misiniz?',
                        'vec-it': 'Vusto dabon scanseƚar sta cartèƚa?',
                        'zh-cn': '确定删除文件夹?',
                        'zh-tw': '確定刪除資料夾？',
                        'ru-ru': 'Вы точно хотите удалить эту папку?',
                        'sr-cs': 'Da li stе sigurni da žеlitе da izbrišеtе ovu fasciklu?',
                        'es-es': 'Confirme si desea eliminar la carpeta',
                        'en-us': 'Are you sure you want to delete this folder?'
                  },
                  'DeleteFolderContent': {
                        'de-de': 'Folder "{name}" und {count} Seite(n) werden gelöscht und können nicht wiederhergestellt werden.',
                        'bg-bg': 'Папка "{name}" и {count} сайта в нея ще бъдат изтрити и няма да могат да се възстановят.',
                        'cs-cz': 'Složka {name} a {count} stránky v ní bude odstraněna a nemůže být znovu obnovena.',
                        'es-pe': 'La carpeta "{name}" y {count} sitio(s) en él se eliminarán y no se podrán recuperar de nuevo.',
                        'eu-es': '"{name}" agiria eta {count} gune ezabatuak izango dira eta ezingo dira berreskuratu.',
                        'en-gb': 'Folder "{name}" and {count} site(s) in it will be deleted and will not be able to be recovered.',
                        'eu': '"{name}" agiria eta {count} gune ezabatuak izango dira eta ezingo dira berreskuratu.',
                        //'fa-ir': 'پوشهٔ "{name}" و پایگاه(های) {count} در آن شناسایی خواهد شد و نمیتواند دوباره بازیابی شود.',
                        'fr-fr': 'Le dossier "{name}" et les {count} site (s) contenus seront supprimés et ne pourront plus être récupérés.',
                        'it-it': 'La cartella "{name}" e {count} siti in esso verranno eliminati e non possono essere ripristinati.',
                        'ko-kr': '"{name}" 폴더 및 {count} 사이트가 삭제되며 다시 복원할 수 없습니다.',
                        'nb-no': 'Mappe "{name}" og {count} side(r) i den vil slettes og kan ikke gjenopprettes igjen.',
                        'pl-pl': 'Folder "{name}" i {count} strona/y zostanie usunięta bez możliwości ponownego przywrócenia.',
                        'pt-br': 'A Pasta "{name}" e {count} site(s) dentro dela, será excluída e não poderá ser recuperada novamente.',
                        'sr-cyrl' : 'Фасцикла "{name}" и {count} сајт(ов)а у њој ће бити избрисани и не могу се вратити поново.',
                        'sr-latn' : 'Fascikla "{name}" i {count} sajt(ov)a u njoj ćе biti izbrisani i nе mogu sе vratiti ponovo.',
                        'sl-si': 'Mapa "{name}" in{count} strani v njej bodo izbrisani in jih ne bo mogoče obnoviti.',
                        'tr-tr': 'İçindeki "{name}" klasörü ve {count} site silinecek ve tekrar kurtarılamaz.',
                        'vec-it': 'Ƚa cartèƚa "{name}" e {count} siti i vegnarà scanseƚài e no i podarà ser ricuperài.',
                        'zh-cn': '文件夹“{name}”以及其中的{count}个网址数据将被删除，删除后数据将无法恢复。',
                        'zh-tw': '資料夾"{name}"以及其中的{count}個網址資料將被刪除，刪除後資料將無法恢復。',
                        'ru-ru': 'Папка "{name}" и {count} сайтов в ней будут удалены без возможности восстановления.',
                        'sr-cs': 'Fascikla "{name}" i {count} sajt(ov)a u njoj ćе biti izbrisani i nе mogu sе vratiti ponovo.',
                        'es-es': 'La carpeta "{name}" y {count} sitios dentro de ella se eliminarán y no se pueden recuperar de nuevo.',
                        'en-us': 'Folder "{name}" and {count} site(s) in it will be deleted and will not be able to be recovered.'
                  },
                  'NewTabOpen': {
                        'de-de': 'Im Hintergrund öffnen',
                        'bg-bg': 'Отвори във фонов режим',
                        'cs-cz': 'Otevřít v kartě na pozadí',
                        'es-pe': 'Abrir en segundo plano',
                        'eu-es': 'Ireki barreneko hegatsean',
                        'en-gb': 'Open in background tab',
                        'eu': 'Ireki barreneko hegatsean',
                        //'fa-ir': 'بازکردن در زبانه پشت زمینه',
                        'fr-fr': 'Ouvrir dans un onglet en arrière-plan',
                        'it-it': 'Apri in una scheda in background',
                        'ko-kr': '백그라운드 탭에서 열기',
                        'nb-no': 'Åpne i bakgrunnsfane',
                        'pl-pl': 'Otwórz w nowej karcie w tle',
                        'pt-br': 'Abrir guia em segundo plano',
                        'sr-cyrl' : 'Отвори у картици у позадини',
                        'sr-latn' : 'Otvori u kartici u pozadini',
                        'sl-si': 'Odprto v zavihku v ozadju',
                        'tr-tr': 'Arka planda sekmede aç',
                        'vec-it': 'Vèrxi in tavèƚa background',
                        'zh-cn': '后台打开',
                        'zh-tw': '在背景開啟',
                        'ru-ru': 'Открыть в фоновой вкладке',
                        'sr-cs': 'Otvori u kartici u pozadini',
                        'es-es': 'Abrir en una pestaña en segundo plano',
                        'en-us': 'Open in background tab'
                  },
                  'NewTabOpenAll': {
                        'de-de': 'Im Hintergrund öffnen',
                        'bg-bg': 'Отваряне на всички връзки във фонов режим',
                        'cs-cz': 'Otevřít vše v kartách na pozadí',
                        'es-pe': 'Abrir todo en pestañas de fondo',
                        'eu-es': 'Ireki guztiak barreneko hegatsetan',
                        'en-gb': 'Open all in background tabs',
                        'eu': 'Ireki guztiak barreneko hegatsetan',
                        //'fa-ir': 'بازکردن همه در زبانه های پشت زمینه',
                        'fr-fr': 'Tout ouvrir dans des onglets en arrière-plan',
                        'it-it': 'Apri i link in schede in background',
                        'ko-kr': '백그라운드 탭에서 모두 열기',
                        'nb-no': 'Åpne alle i bakgrunnsfaner',
                        'pl-pl': 'Otwórz wszystkie w nowej karcie w tle',
                        'pt-br': 'Abrir tudo em guias de segundo plano',
                        'sr-cyrl' : 'Отвори све у картицима у позадини',
                        'sr-latn' : 'Otvori svе u karticima u pozadini',
                        'sl-si': 'Odprto v vseh zavihkih v ozadju',
                        'tr-tr': 'Tümünü arka planda sekmelerde aç',
                        'vec-it': 'Vèrxi tuto in tavèƚe in background',
                        'zh-cn': '后台打开全部',
                        'zh-tw': '全部於背景開啟',
                        'ru-ru': 'Открыть все в фоновых вкладках',
                        'sr-cs': 'Otvori svе u karticima u pozadini',
                        'es-es': 'Abrir vínculos en pestañas de fondo',
                        'en-us': 'Open all in background tabs'
                  },
                  'NewWindowOpen': {
                        'de-de': 'In neuem Fenster öffnen',
                        'bg-bg': 'Отвори в нов прозорец',
                        'cs-cz': 'Otevřít v novém okně',
                        'es-pe': 'Abrir una nueva ventana',
                        'eu-es': 'Ireki leiho berrian',
                        'en-gb': 'Open in new window',
                        'eu': 'Ireki leiho berrian',
                        //'fa-ir': 'درپنجره مرورجدیدبازکن',
                        'fr-fr': 'Ouvrir dans une nouvelle fenêtre',
                        'it-it': 'Apri in nuova finestra',
                        'ko-kr': '새 창에서 열기',
                        'nb-no': 'Åpne i nytt vindu',
                        'pl-pl': 'Otwórz w nowym oknie',
                        'pt-br': 'Abrir em uma nova janela',
                        'sr-cyrl' : 'Отвори у новом прозору',
                        'sr-latn' : 'Otvori u novom prozoru',
                        'sl-si': 'Odpri v novem oknu',
                        'tr-tr': 'Yeni pencerede aç',
                        'vec-it': 'Vèrxi in fenèstra niova',
                        'zh-cn': '新窗口打开',
                        'zh-tw': '開啟於新視窗',
                        'ru-ru': 'Открыть в новом окне',
                        'sr-cs': 'Otvori u novom prozoru',
                        'es-es': 'Abrir una nueva ventana',
                        'en-us': 'Open in new window'
                  },
                  'NewInvisibleOpen': {
                        'de-de': 'In neuem, privatem Fenster öffnen',
                        'bg-bg': 'Отваряне на връзката в защитен прозорец',
                        'cs-cz': 'Otevřít v soukromém okně',
                        'es-pe': 'Abrir en una ventana privada',
                        'eu-es': 'Ireki leiho pribatuan',
                        'en-gb': 'Open in private window',
                        'eu': 'Ireki leiho pribatuan',
                        //'fa-ir': 'بازکردن در پنجرهٔ خصوصی',
                        'fr-fr': 'Ouvrir dans une fenêtre privée',
                        'it-it': 'Apri in una nuova finestra privata',
                        'ko-kr': '개인 창에서 열기',
                        'nb-no': 'Åpne i privat vindu',
                        'pl-pl': 'Otwórz w oknie prywatnym',
                        'pt-br': 'Abrir em janela privativa',
                        'sr-cyrl' : 'Отвори у приватном прозору',
                        'sr-latn' : 'Otvori u privatnom prozoru',
                        'sl-si': 'Odprto v zasebnem oknu',
                        'tr-tr': 'Kişiye özel pencerede aç',
                        'vec-it': 'Vèrxi in fenèstra riservada',
                        'zh-cn': '隐身窗口打开',
                        'zh-tw': '開啟於無痕視窗',
                        'ru-ru': 'Открыть в секретном окне',
                        'sr-cs': 'Otvori u privatnom prozoru',
                        'es-es': 'Abrir todo en una ventana privada',
                        'en-us': 'Open in private window'
                  },
                  'NewWindowOpenAll': {
                        'de-de': 'Link in neuem Fenster öffnen',
                        'bg-bg': 'Отваряне на всички връзки в нов прозорец',
                        'cs-cz': 'Otevřít vše v novém okně',
                        'es-pe': 'Abrir todo en una ventana nueva',
                        'eu-es': 'Ireki guztiak leiho berrian',
                        'en-gb': 'Open all in new window',
                        'eu': 'Ireki guztiak leiho berrian',
                        //'fa-ir': 'بازکردن همه در پنجرهٔ جدید',
                        'fr-fr': 'Tout ouvrir dans une nouvelle fenêtre',
                        'it-it': 'Apri tutto in nuova finestra',
                        'ko-kr': '새 창에서 모두 열기',
                        'nb-no': 'Åpne alle i nytt vindu',
                        'pl-pl': 'Otwórz wszystko w nowym oknie',
                        'pt-br': 'Abrir tudo em uma nova janela',
                        'sr-cyrl' : 'Отвори све у новом прозору',
                        'sr-latn' : 'Otvori svе u novom prozoru',
                        'sl-si': 'Odpri vse v novem oknu',
                        'tr-tr': 'Tümünü yeni pencerede aç',
                        'vec-it': 'Vèrxi tuto in fenèstra niova',
                        'zh-cn': '新窗口打开全部',
                        'zh-tw': '全部開啟於新視窗',
                        'ru-ru': 'Открыть все в новом окне',
                        'sr-cs': 'Otvori svе u novom prozoru',
                        'es-es': 'Abrir todo en una nueva ventana',
                        'en-us': 'Open all in new window'
                  },
                  'NewInvisibleOpenAll': {
                        'de-de': 'In neuem, privatem Fenster öffnen',
                        'bg-bg': 'Отваряне на всички връзки в защитен прозорец',
                        'cs-cz': 'Otevřít vše v soukromém okně',
                        'es-pe': 'Abrir todo en una ventana privada',
                        'eu-es': 'Ireki guztiak leiho pribatuan',
                        'en-gb': 'Open all in private window',
                        'eu': 'Ireki guztiak leiho pribatuan',
                        //'fa-ir': 'بازکردن همه در پنجرهٔ خصوصی',
                        'fr-fr': 'Tout ouvrir dans une fenêtre privée',
                        'it-it': 'Apri tutto in nuova finestra privata',
                        'ko-kr': '개인 창에서 모두 열기',
                        'nb-no': 'Åpne alle i privat vindu',
                        'pl-pl': 'Otwórz wszystko w trybie prywatnym',
                        'pt-br': 'Abrir tudo em janela privativa',
                        'sr-cyrl' : 'Отвори све у приватном прозору',
                        'sr-latn' : 'Otvori svе u privatnom prozoru',
                        'sl-si': 'Odpri vse v zasebnem oknu',
                        'tr-tr': 'Tümünü kişiye özel pencerede aç',
                        'vec-it': 'Vèrxi tuto in fenèstra riservada',
                        'zh-cn': '隐身窗口打开全部',
                        'zh-tw': '全部開啟於無痕視窗',
                        'ru-ru': 'Открыть все в секретном окне',
                        'sr-cs': 'Otvori svе u privatnom prozoru',
                        'es-es': 'Abrir todo en ventana privada',
                        'en-us': 'Open all in private window'
                  }
            },

            getLang: function (key) {
                  var result;
                  return (result = this.lang[key]) ? ((result[this.Locale]) ? result[this.Locale] : (result = result['en-us']) ? result : key) : key;
            }
      };

      Language.init = function () {
            var thiz = this;
            thiz.Locale = navigator.language.toLocaleLowerCase();
            $('title').html(Language.getLang('DocumentTitle'));
      }

      Language.init();
      window.Language = Language;
});

/**
* 新标签页网页格子
* @author guotingjie@maxthon.net
* @ctime 2016-6-6
*/
var $group_dialog,
    $grid_container,
    $top_container,
    $add_grid,
    $group_list;

template.on('isThumbImge', function (src) {
    if (typeof src === 'string' && src.startWith('mx://thumbs/')) {
        return true;
    }
    return false;
});

var grid = {
    hot_grid_html: '<li class="top grid">\
                    <% if(!!this.image) {%>\
                        <a href="<%= this.url || \"\" %>" target="_blank" style="background-image:url(<%= this.image %>);">\
                        </a>\
                    <% } else { %>\
                        <a href="<%= this.url || \"\" %>" %>" target="_blank">\
                            <div colorBlock="<%=this.colorBlock || \"\" %>" class="color-block <%=this.colorBlock || \"\" %>">\
                                <%=this.title ? this.title.substring(0, 1) : \"\" %>\
                            </div>\
                        </a>\
                    <% } %>\
                    </li>',
    grid_html: '<li class="main grid">\
                    <a href="<%= this.url || \"\" %>" title="" target="_blank" <% if(!!this.image) {%> <% } else {%> class="<%=this.colorBlock || \"\" %>" <% } %>\
                        <% if(this.isThumbImge(this.image)) {%>style="background-color:#fff;"<% } %>>\
                        <% if(!!this.image) {%>\
                            <% if(this.isThumbImge(this.image)) {%>\
                                <p class="thumb" style="background-image:url(<%= this.image%>);"></p>\
                            <% } else {%>\
                                <img src="<%= this.image %>" alt="<%=this.title || \"\" %>">\
                            <% } %>\
                        <% } else { %>\
                             <div colorBlock="<%=this.colorBlock || \"\" %>" class="color-block"><%=this.title || \"\" %></div>\
                        <% } %>\
                    </a>\
                    <div class="function">\
                        <strong class="title"><%=this.title || \"\" %></strong>\
                        <% if(this.isThumbImge(this.image)) {%><button class="refresh">×</button><% } %>\
                        <button class="edit"></button>\
                        <button class="delete"></button>\
                    </div>\
                </li>',
    empty_grid_html: '<li class="top grid"><a class="empty">&nbsp;</a></li>',
    add_grid: '<li class="grid top"><a class="add" href="javascript:void(0);"><i class="sprite sprite-circle"></i></a></li>'
};
/**
 * 初始化转换数据，从mapList接口更新图片字段
 */
grid.tranData = function(item) {
    if (!item.image && !item.colorBlock) {
        item.colorBlock = 'color-block-' + (parseInt(Math.random()*9,10)+1);
    } else {
        if (item.image) {
            delete item.colorBlock;
            item.image = item.image.replace(/^http:\/\//, 'https://');
            if (!item.image.match(/^mx:\/\/thumbs\/\?/) && !item.image.match(/^https?:\/\/fastdail-img/)) {
                var img;
                if(item['sq_img'] || item['re_img']) {
                    img = item.isHot === true ? item['sq_img'] : item['re_img']
                } else {
                    var match = item.image.match(/(?:Re|Sq)\/(.+(\.jpg|png|gif)+)(?:\.webp)?/);
                    img = match ? match[1] : 'offline.png'
                }

                if(window.Api.Tools.isSupportWebp()) img += '.webp'
                if(item['sq_md5sum'] || item['re_md5sum']) {
                    img += '?md5=' + (item.isHot === true ? item['sq_md5sum'] : item['re_md5sum'])
                }
                item.image = cdnServer + '/image/logo/' + (item.isHot === true ? 'Sq/' : 'Re/') + img;
            }
        }
    }
    return item;
}

/**
 * 构建我的站点Grid
 * @return {[type]} [description]
 */
grid.render = function (tpl, item) {
    return template(tpl, grid.tranData(item));
}

$(function () {
    var api = window.Api,
        maxthon = api.Maxthon,
        current_col = 6,
        data_list = [],
        map_list = {},
        top_data_list = [],
        grid_ui_data = {},
        drag_drop_data = {},
        animation_time = 300;

    var top_container_width, drag_node, current_group, group_node, group_title, group_operate, grid_add;

    function clearDragNode() {
        if (drag_node[0]) {
            document.body.removeChild(drag_node[0]);
            drag_node = null;
        }
    }

    function hideGroup(callback) {
        if (!current_group) return;
        current_group.addLastGridThumbnailNode();
        current_group.container.removeClass('show');
        group_operate.close();
        current_group = null;
        if (callback) {
            setTimeout(function () {
                callback();
            }, animation_time);
        }
    }

    function Grid(data, uiindex) {
        var _this = this;
        _this.uiindex = uiindex;
        for (var i in data) {
            _this[i] = data[i];
        }
    }

    function getScroll() {
        return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
        }
    }

    Grid.prototype = (function () {

        var current_drag, current_drop, ban_move, animationTimer, cover_timer, scroll_state,
            addArea = 0.2, moveArea = 0.8, Math = window.Math;

        function cloneGridNode() {
            var node, xy = this.getGridFixed(), sxy = getScroll();
            node = this.node.clone();
            node.css({ 'left': xy.left + sxy.left, 'top': xy.top + sxy.top, 'width': xy.width, 'height': xy.height });
            document.body.appendChild(node[0]);
            return node;
        }

        function addGridThumbnailNode(data, parentNode) {
            var self = this;
            var nodeHtml = '';
            data = grid.tranData(data); // 转换数据
            if (data.image) {
                if (data.image.startWith('mx://thumbs')) {
                    nodeHtml += '<div class="thumbnail loading" url="' + data.url + '"></div>';
                } else {
                    nodeHtml += '<div class="thumbnail" ';
                    nodeHtml += '   style="background-image: url(' + data.image + ')">';
                    nodeHtml += '</div>';
                }
            } else {
                nodeHtml += '<div class="thumbnail ' + data.colorBlock + '">';
                nodeHtml += '   <span>' + data.title + '</span>';
                nodeHtml += '</div>';
            }

            var node = $(nodeHtml)[0];
            parentNode && parentNode.appendChild(node);
            return node;
        }

        function addLastGridThumbnailNode(parentNode, list) {
            if (!parentNode && !this.children) return;
            var self = this, parentNode = parentNode || self.list_node, list = list || self.children, i, length = list.length;
            parentNode.innerHTML = '';
            self.thumburls = [];
            for (i = 0; i < (length > 4 ? 4 : length); i++) {
                self.addGridThumbnailNode(list[i], parentNode);
                self.thumburls.push(list[i].url);
            }

            if (self.thumburls.length === 0) return;
            // 截图代码调整成异步执行
            setTimeout(function() {
                window.Api.Tools.isThumbExists(self.thumburls, function (result) {
                    var childNodes = self.list_node.childNodes;
                    result.forEach(function (item, i) {
                        var childNode = childNodes[i];
                        if (item === true && childNode.className.indexOf('loading') !== -1) {
                            var url = self.thumburls[i];
                            childNode.className = 'thumbnail';
                            childNode.style.cssText = 'background-image : url(' + newWin.getThumbsUrl(url, 0) + ')';
                        }
                    });
                });
            }, 10);
        }

        function getGridPosition(index) {
            var size = grid_ui_data, current_col, width, marginX, marginY, row, col, left, top;
            if (this.isHot === true) {
                current_col = 8;
                index = index || this.topuiindex;
                row = Math.floor(index / current_col);
                col = index % current_col;
                width = size.top_container_width * 0.125;
                left = width * col;
                top = 0;
            } else {
                index = index || this.uiindex;
                if (!this.children && this.group) {
                    width = 153, marginX = 938 * 0.012, marginY = 330 * 0.02;
                    current_col = 5;
                    row = Math.floor(index / current_col);
                    col = index % current_col;
                    left = (width + 2 * marginX) * col;
                    top = (width * 0.7 + marginY) * row;
                } else {
                    var container_width = size.container_width;//$grid_container.width();
                    if (container_width > 0) {
                        current_col = 6;
                        width = container_width * 0.15;
                        marginX = container_width * 0.008;
                        marginY = container_width * 0.01;
                        row = Math.floor(index / current_col);
                        col = index % current_col;
                        grid_top = (width * 0.7 + marginY) * row;

                        left = (width + 2 * marginX) * col;
                        top = grid_top;
                    }
                }
            }
            return {
                'left': left,
                'top': top
            };
        }

        function locate(index) {
            var xy = this.getGridPosition(index);
            this.node.css({ 'left': xy.left + 'px', 'top': xy.top + 'px' });
        }

        function reload() {
            this.node.find('.thumb').css({ 'background-image': 'url(' + newWin.getThumbsUrl(this.url, 0) + ')' });
            this.node.removeClass('loading');
        }

        function showMenu(obj, l, t) {
            var menuList = [], version = maxthon.max_version;
            if (obj.children) {
                var list = obj.children;
                // 笔记专版
                if (version === '1.5.50.3200' || version.cmpVersions('5.0.2.700') >= 0) {
                    menuList = [
                        { 'id': 'open-all-tab', 'label': Language.getLang('NewTabOpenAll') },
                        { 'id': 'delete-tab', 'label': Language.getLang('Delete') },
                        { type: true },
                        { 'id': 'open-all-newwin-tab', 'label': Language.getLang('NewWindowOpenAll') },
                        { 'id': 'open-all-invisible-tab', 'label': Language.getLang('NewInvisibleOpenAll') }
                    ];
                } else {
                    menuList = [{ id: 'delete-tab', label: Language.getLang('Delete') }];
                }
                Menu.showPopupMenu(l, t, menuList, function (data) {
                    var urls = [];
                    list.forEach(function (item, i) {
                        urls.push(item.url);
                    });
                    switch (data) {
                        case 'open-all-tab': //打开新标签
                            maxthon.useApi('openUrl', { 'urls': urls, 'mode': 'BackgroundTab' });
                            break;
                        case 'delete-tab':
                            showDelete(obj);
                            break;
                        case 'open-all-newwin-tab':
                            maxthon.useApi('openUrl', { 'urls': urls, 'mode': 'NewWindow' });
                            break;
                        case 'open-all-invisible-tab':
                            maxthon.useApi('openUrl', { 'urls': urls, 'mode': 'NewPrivateWindow' });
                            break;
                    }
                });
            } else {
                menuList = [
                    { 'id': 'open-tab', 'label': Language.getLang('NewTabOpen') },
                    { 'id': 'edit-tab', 'label': Language.getLang('Edit') },
                    { 'id': 'delete-tab', 'label': Language.getLang('Delete') }
                ];
                // 笔记专版
                if (version === '1.5.50.3200' || version.cmpVersions('5.0.2.700') >= 0) {
                    menuList.push.apply(menuList, [
                        { 'type': true },
                        { 'id': 'open-newwin-tab', 'label': Language.getLang('NewWindowOpen') },
                        { 'id': 'open-invisible-tab', 'label': Language.getLang('NewInvisibleOpen') }
                    ]);
                }

                Menu.showPopupMenu(l, t, menuList, function (data) {
                    switch (data) {
                        case 'open-tab':
                            maxthon.useApi('newTabBackground', { 'url': obj.url });
                            break;
                        case 'edit-tab':
                            showEdit(obj);
                            break;
                        case 'delete-tab':
                            showDelete(obj);
                            break;
                        case 'open-newwin-tab':
                            maxthon.useApi('openUrl', { 'url': obj.url, 'mode': 'NewWindow' });
                            current_group && hideGroup();
                            break;
                        case 'open-invisible-tab':
                            maxthon.useApi('openUrl', { 'url': obj.url, 'mode': 'NewPrivateWindow' });
                            current_group && hideGroup();
                            break;
                    }
                });
            }
        }

        function gridClick(obj) {
            // 非文件夹内
            if (!obj.group || obj.group === '') {
                var ueip_data = {
                    m: 'zoneClick',
                    data: { 'title': obj.title, 'url': obj.url, 'position': obj.isHot ? obj.topuiindex : obj.uiindex }
                };

                ueip_data.n = obj.isHot === true ? 'top' : 'myfav';
                datacode && datacode.statistic(ueip_data);
            }

            if (obj.url && obj.url.startWith('mx://note/?id')) {
                maxthon.useApi('note.openNoteInPopWindow', {
                    'pid': obj.url.getQueryString('pid'),
                    'id': obj.url.getQueryString('id')
                }, function (data) {
                    if (data === 0)
                        return;

                    if (group_operate) {
                        group_operate.close();
                    }
                    window.Api.Tools.showNoteNotFound(data);
                });
                return false;
            }

            setTimeout(function() {
                maxthon.useApi('newTabUpground', { 'url': obj.url });
            }, 10);
            // 关闭文件夹弹框
            current_group && hideGroup();
            // return false;
        }

        function showGroup() {
            var _this = this;
            if (!_this.container) return;
            current_group = _this;
            group_title.val(current_group.getGroupName());
            $group_list.find('.grid-list-container').removeClass('show');
            current_group.container.addClass('show');
            group_operate = $group_dialog.dialog({
                init: function () {
                    var urlList = [], nodeList = [];
                    current_group.children.forEach(function (item, i) {
                        if (!item.node.hasClass('loading')) {
                            return true;
                        }
                        urlList.push(item.url);
                        nodeList.push(item);
                    });

                    window.Api.Tools.isThumbExists(urlList, function (result) {
                        result.forEach(function (res, i) {
                            if (res === true) {
                                nodeList[i].reload();
                            }
                        });
                    });
                },
                close: function () {
                    // 编辑状态
                    $group_dialog.attr('edit', false);
                    if (current_group) current_group = null;
                    return true;
                }
            });
        }

        // 删除文件夹对话框
        function showDelete(obj) {
            var _this = obj;
            if (!_this.children) {
                Controller.onRemoveGrid(_this.index);
                datacode.removeGrid(obj);
                return;
            }
            window.Api.Tools.showDeleteFolder(_this);
        }

        function showEdit(obj) {
            var _this = obj, dialogModel, _current_group = current_group;

            if (obj.group && obj.group !== '') {
                if (group_operate) {
                    group_operate.close();
                    $group_dialog.attr('edit', true);
                    dialogModel = true;
                    // fix:解决在文件夹打开状态下编辑后，把current_group置空导致交互异常的问题
                    current_group = _current_group;
                }
            }
            newWin.showDialog({
                'index': _this.index,
                'uiinde': _this.topuiindex || _this.uiindex,
                'title': _this.title,
                'url': _this.url,
                'image': _this.image,
                'colorBlock': _this.colorBlock,
                'group': _this.group
            }, true, dialogModel);
        }

        function refresh(obj) {
            obj.node.addClass('loading');
            window.Api.Tools.reflushThumb(obj.url);
        }

        function getGridFixed() {
            var xy = this.node[0].getBoundingClientRect();

            return {
                left: xy.left,
                right: xy.right,
                width: xy.width,
                height: xy.height,
                top: xy.top,
                bottom: xy.bottom
            };
        }

        // 格子之间重叠面积比例计算
        function coverArea(x, y) {
            var width, height, sxy = getScroll();
            y.top += sxy.top;
            y.bottom += sxy.top;
            y.left += sxy.left;
            y.right += sxy.left;

            if (x.left > y.right || y.left > x.right ||
                x.top > y.bottom || y.top > x.bottom) {
                return 0;
            } else {
                width = x.left > y.left ? y.right - x.left : x.right - y.left;
                height = x.top > y.top ? y.bottom - x.top : x.bottom - y.top;
                var area_x = x.width * x.height, area_y = y.width * y.height;
                grid_ui_data.area = area_x < area_y ? area_x : area_y;
                return width * height / grid_ui_data.area;
            }
        }

        function isOutGroup(xy) {
            var width = 0,
                height = 0;
            var offset = $group_dialog.offset();
            var areaGroup = {
                top: offset.top,
                left: offset.left,
                right: offset.left + $group_dialog.width(),
                bottom: offset.top + $group_dialog.height()
            }
            if (xy.left - areaGroup.right > width ||
                xy.right - areaGroup.left < width ||
                xy.top - areaGroup.bottom > height ||
                xy.bottom - areaGroup.top < width) {
                return true;
            }
            return false;
        }

        var bodyScroll = (function () {

            var current_state, current_body, body_height, current_scrollTop, content_height,
                add_height, default_add_height = 5, timer, time = 15;

            function update(state) {
                current_body = document.body;
                current_state = state;
                body_height = current_body.offsetHeight;

                current_scrollTop = current_body.scrollTop;
                add_height = default_add_height * current_state;
            }

            function begin() {
                ban_move = true;
                timer = setInterval(function () {
                    current_scrollTop = current_body.scrollTop;
                    current_scrollTop += add_height;
                    current_body.scrollTop = current_scrollTop;
                    if ((add_height > 0 && (current_scrollTop + body_height) >= content_height) ||
                        (add_height < 0 && current_scrollTop <= 0)) {
                        stop();
                    }
                }, time);
            }

            function up() {
                stop();
                update(-1);
                begin();
            }

            function down() {
                stop();
                update(1);
                begin();
            }

            function stop() {
                timer && clearTimeout(timer);
                ban_move = false;
            }

            function addHeight(value) {
                add_height = (default_add_height + value) * current_state;
            }
            return {
                up: up,
                stop: stop,
                down: down,
                addHeight: addHeight
            }
        })();

        function scrollBody(xy) {

            drag_drop_data.top = document.body.scrollTop;
            drag_drop_data.bottom = drag_drop_data.top + document.documentElement.clientHeight;
            var upHeight = drag_drop_data.top + 10 - xy.top;
            var downHeight = xy.bottom - drag_drop_data.bottom + 10;

            if (upHeight > 0) {
                if (scroll_state) {
                    bodyScroll.addHeight(upHeight / 2);
                } else {
                    bodyScroll.up(xy);
                    scroll_state = true;
                }
            } else if (downHeight > 0 && xy.top < drag_drop_data.height) {
                if (scroll_state) {
                    bodyScroll.addHeight(downHeight / 2);
                } else {
                    bodyScroll.down(xy);
                    scroll_state = true;
                }
            } else {
                if (!scroll_state) return;
                bodyScroll.stop();
                scroll_state = false;
            }
        }

        function moveAnimationTimer() {
            animationTimer && clearTimeout(animationTimer);
            ban_move = true;
            animationTimer = setTimeout(function () {
                ban_move = false;
            }, animation_time);
        }

        function getDropIndex(drag, drop) {
            var drop_index, dropList;
            drop_index = drop.index;
            return drop_index;
        }

        function forEachGrid(callback) {
            var i = 0, j, list;
            if (current_group) {
                list = current_group.children;
            } else {
                list = data_list;

            }
            j = list.length;
            for (; i < j; i++) {
                if (list[i].title === 'Add' || list[i].title === 'Empty') {// 排除加号与空白
                    continue;
                }

                if (callback(list[i], i) === false) { //写成true了 O(∩_∩)O哈哈~ 太粗心大意了
                    break;
                }
            }
        }

        function isCross(current_drag, current_drop) {
            return (current_drag.isHot === true && current_drop.isHot !== true)
                || (current_drag.isHot !== true && current_drop.isHot === true);
        }

        // 移动碰撞
        function moveCollision(xy) {
            scrollBody(xy);

            if (ban_move) return;
            var children, area, item;

            // 拖动是文件夹
            if (current_drag.children) {
                children = current_drag.children;
                forEachGrid(function (item, i) {
                    if (i !== current_drag.uiindex && !isCross(current_drag, item)) {
                        area = coverArea(xy, item.getGridFixed());

                        if (area > moveArea) {
                            moveAnimationTimer();
                            Controller.onMovingGrid(current_drag.index, item.index, '');
                            return false;
                        }
                    }
                });
            } else if (current_drop) { // 可操作状态（合并、交换、插入）
                area = coverArea(xy, current_drop.getGridFixed());
                if (isCross(current_drag, current_drop)) {
                    if (area > moveArea) {
                        drag_node.addClass('swap');
                    } else {
                        drag_node.removeClass('swap');
                        current_drop.removeClass('combo');
                        current_drop.removeClass('current');
                        current_drop = null;
                    }
                } else {
                    if (area > moveArea) {
                        moveAnimationTimer();
                        Controller.onMovingGrid(current_drag.index, current_drop.index, current_drag.group);
                    }
                    if (area < addArea || area > moveArea) {
                        current_drop.removeClass('combo');
                        current_drop = null;
                    }
                }
            } else if (current_group) {

                if (isOutGroup(xy)) {
                    moveAnimationTimer();

                    if (grid_add) {
                        item = grid_add; // 增加按钮
                    }
                    Controller.onMovingGrid(current_drag.index, item.index, current_drag.group);
                    return;
                }
                forEachGrid(function (item, i) {
                    if (i !== current_drag.uiindex && coverArea(xy, item.getGridFixed()) > moveArea) {
                        moveAnimationTimer();
                        Controller.onMovingGroup(current_drag.index, item.index, current_drag.group);
                        return false;
                    }
                });
            } else {
                forEachGrid(function (item, i) {
                    if (i !== current_drag.uiindex) {
                        area = coverArea(xy, item.getGridFixed());
                        if (area > addArea) { // 合并文件夹
                            current_drop = item;
                            if (isCross(current_drag, current_drop)) {
                                current_drop.addClass('current');
                            } else {
                                if (area > moveArea) {
                                    moveAnimationTimer();
                                    Controller.onMovingGrid(current_drag.index, item.index, current_drag.group);
                                    return false;
                                }
                                current_drop.addClass('combo');
                            }
                            return false;
                        }
                    }
                });
            }
        }

        function html() {
            return grid.render(this.isHot === true ? grid.hot_grid_html : grid.grid_html, this);
        }

        function dom() {
            var _this = this;
            var grid_node, function_node, list_node, beginX, beginY, mouse_beginX, mouse_beginY, dragState, moveTimer;

            function startDrag(event) {
                if (event.button !== 0 || _this.node.hasClass('loading') || drag_node) return;

                var xy = _this.getGridFixed();
                beginX = xy.left;
                beginY = xy.top;// 解决滚屏问题
                mouse_beginX = event.clientX;
                mouse_beginY = event.clientY;

                document.addEventListener('mousemove', doDrag, false);
                document.addEventListener('mouseup', stopDrag, false);
            }

            function doDrag(event) {
                // fix: 解决点击与移动冲突的问题
                if ((Math.abs(event.clientX - mouse_beginX) === 0) || (Math.abs(event.clientY - mouse_beginY) === 0)) {
                    return;
                }

                var sxy = getScroll();
                var left = beginX + sxy.left + event.clientX - mouse_beginX;
                var top = beginY + sxy.top + event.clientY - mouse_beginY;

                var w = grid_node.width();
                var h = grid_node.innerHeight();
                var xy = {
                    left: left,
                    right: left + w,
                    top: top,
                    bottom: top + h,
                    width: w,
                    height: h
                }

                if (!dragState) {
                    grid_node.addClass('notran');
                    drag_node = _this.cloneGridNode();
                    current_drag = _this;
                    dragState = true;
                    scrollBody(xy);
                    setTimeout(function () {
                        drag_node.addClass('notran');
                    }, 20);
                    grid_node.addClass('draging');
                    drag_node.css({ 'padding': '0', 'margin': '0', 'z-index': '999' });
                }

                drag_node.css({ 'left': left, 'top': top });
                moveCollision(xy);
            }

            function rollback() {
                var xy = _this.getGridFixed(), sxy = getScroll();
                drag_node.removeClass('notran');
                drag_node.css({ 'left': xy.left + sxy.left, 'top': xy.top + sxy.top });
                setTimeout(function () {
                    grid_node.removeClass('draging');
                    setTimeout(function () {
                        grid_node.removeClass('notran');
                        clearDragNode();
                    }, 20);
                }, animation_time);
            }

            function stopDrag(event) {
                if (scroll_state) {
                    scroll_state = false;
                    bodyScroll.stop();
                }

                document.removeEventListener('mousemove', doDrag, false);
                document.removeEventListener('mouseup', stopDrag, false);

                if (!dragState) return;
                dragState = false;
                moveTimer && clearTimeout(moveTimer);
                if (!current_drop || current_group) {
                    rollback();
                } else {
                    current_drop.removeClass('combo');
                    cover_timer && clearTimeout(cover_timer);

                    // 上下互相交换
                    if (isCross(current_drag, current_drop)) {
                        if (current_drag.children || current_drop.children) {
                            rollback();
                            current_drop.removeClass('current');
                            current_drop = null;
                            return;
                        }
                        Controller.onSwappingGrid(current_drag.index, getDropIndex(current_drag, current_drop));
                    } else {
                        // fix: top8 不允许合并
                        if (current_drag.isHot === true && current_drop.isHot === true) {
                            rollback();
                        } else {
                            // 直接移动至文件夹
                            if (current_drop.children) {
                                var list = current_drop.children;
                                Controller.onMovingInGroup(current_drag.index,
                                    list[list.length - (current_drag.uiindex > current_drop.uiindex ? 1 : 1)].index,
                                    current_drop.title);
                            } else {
                                // 首次合并
                                Controller.onAddGroup(current_drag.index, current_drop.index, Language.getLang('NewFolder'));
                            }
                        }
                    }
                    current_drop = null;
                }
            }
            // 添加按钮
            if (!_this.url && !_this.children) {
                if (_this.isHot === true) {
                    if (_this.title === 'Add') {
                        grid_node = $(grid.add_grid);
                    } else {
                        grid_node = $(grid.empty_grid_html);
                    }
                } else {
                    grid_node = $(grid.add_grid.replace('top', 'main add'));
                    // fixed: 用于定位从文件夹中脱出时追加的位置
                    grid_add = _this;
                }
                grid_node.on('click', '.add', function (event) {
                    newWin.showDialog({ index: _this.index, uiindex: _this.topuiindex || _this.uiindex }, false);
                });
            } else {
                // 实体格子
                if (!_this.children) {
                    grid_node = $(_this.html());
                    grid_node.on('click', function (event) {
                        event.stopPropagation();
                        var target = $(event.target);
                        if (target.is('button')) {
                            var buttonType = target.prop('className');
                            switch (buttonType) {
                                case 'delete':
                                    showDelete(_this);
                                    break;
                                case 'edit':
                                    showEdit(_this);
                                    break;
                                case 'refresh':
                                    refresh(_this);
                                    break;
                            }
                            return false;
                        }
                        if (maxthon.max_version.cmpVersions('5.0.1.1600') > 0) {
                            gridClick(_this);
                            return false;
                        }
                        return true;
                    });

                    if (_this.image && _this.image.startWith('mx://thumbs')) {
                        grid_node.addClass('loading');
                        window.Api.Tools.isThumbExists([_this.url], function(result) {
                            result.forEach(function (item, i) {
                                if (item === true) {
                                    _this.node.removeClass('loading');
                                } else {
                                    window.Api.Tools.reflushThumb(_this.url);
                                }
                            });
                        });
                    }
                } else { // 文件夹
                    _this.group = _this.title;

                    grid_node = $('<li class="main grid group"></li>');
                    list_node = $('<div class="thumbnail-container"></div>');
                    function_node = $(['<div class="function">',
                        '<strong class="title">', _this.group, '</strong>',
                        '<button class="delete">×</button>',
                        '</div>'].join(''));
                    // 文件夹缩略图
                    _this.addLastGridThumbnailNode(list_node[0], _this.children);

                    grid_node.append(list_node);
                    grid_node.append(function_node);
                    _this.list_node = list_node[0];
                    _this.function_node = function_node[0];
                    _this.list_node.addEventListener('click', function (event) {
                        event.button === 0 && _this.showGroup();
                    });
                    _this.function_node.addEventListener('click', function (event) {
                        var target = $(event.target);
                        if (target.is('button')) {
                            var buttonType = target.prop('className');
                            switch (buttonType) {
                                case 'delete':
                                    showDelete(_this);
                                    break;
                                case 'edit':
                                    showEdit(_this);
                                    break;
                                case 'refresh':
                                    refresh(_this);
                                    break;
                            }
                            return false;
                        }
                    });
                }

                grid_node.on('mousedown', function (event) {
                    startDrag(event);
                });

                grid_node.on('contextmenu', function (event) {
                    showMenu(_this, event.clientX, event.clientY);
                    event.stopPropagation();
                    event.preventDefault();
                });
            }

            _this.node = grid_node;
            _this.locate();
            return grid_node;
        }

        function addClass(className) {
            this.node.addClass(className);
        }

        function removeClass(className) {
            this.node.removeClass(className);
        }

        function getGroupName() {
            return this.group;
        }

        function setGroupName(group_name) {
            var _this = this, list = _this.children;

            _this.group = group_name;
            if (list) {
                list.forEach(function (item) {
                    item.group = group_name;
                });

                if (group_name !== '') {
                    _this.function_node.firstChild.textContent = group_name;
                }
            }
        }

        return {
            dom: dom,
            html: html,
            locate: locate,
            reload: reload,
            addClass: addClass,
            removeClass: removeClass,
            getGroupName: getGroupName,
            setGroupName: setGroupName,
            showGroup: showGroup,
            showDelete: showDelete,
            getGridPosition: getGridPosition,
            getGridFixed: getGridFixed,
            cloneGridNode: cloneGridNode,
            addGridThumbnailNode: addGridThumbnailNode,
            addLastGridThumbnailNode: addLastGridThumbnailNode
        }
    })();
    var grid_ui_data = {};

    var Controller = (function () {

        var $grid_body;
        /**
         * 初始化UI数据
         */
        function readyInitUiData() {
            $grid_body = $('.nav-body');
            $grid_container = $('#grid_list_container');
            $group_dialog = $('#group'),
            $top_container = $('#top'),
            $add_grid = $('#add-grid'),
            $group_list = $('#group_list');

            // 清空元素
            $grid_container.empty();
            $top_container.empty();

            group_title = $('#group-title');

            group_title.on('click', function (e) {
                e.stopPropagation();
                if (group_title.hasClass('editable'))
                    return;
                group_title.addClass('editable');
                this.focus();
                document.onkeydown = function (e) {
                    if (e.keyCode === 13) {
                        group_title.removeClass('editable');
                        return false;
                    }
                    return true;
                }
            });

            group_title.on('blur', function (e) {
                var title = this.value.trim();
                var title_len = title.replace(/[^\x00-\xff]/g, '**').length;

                if (title_len === 0) {
                    title = Language.getLang('NewFolder');
                }
                if (title_len > 20) {
                    title = title.substring(0, 20);
                }
                var current_title = current_group.getGroupName();
                if (title === '' || title === current_title) {
                    this.value = current_title;
                } else {
                    var list = current_group.children;
                    onSetGroupName(current_group.index, list[list.length - 1].index, title);
                }
                // 关闭右键弹层
                Menu.hideAndRemovePopupMenu();
                group_title.removeClass('editable');
            });

            grid_ui_data.top_container_width = $top_container.width();
            grid_ui_data.container_width = $grid_body.width();
            grid_ui_data.height = grid_ui_data.container_width * 0.15 * 0.7 + grid_ui_data.container_width * 0.01;
        }

        function windowResizeWidth() {
            grid_ui_data.top_container_width = $top_container.width();
            grid_ui_data.container_width = $grid_body.width();
            resizeGridPositionAndIndex();
        }

        window.addEventListener('resize', api.Tools.throttle(windowResizeWidth, 100, 300), false);

        /**
         * 替换mx4go链接
         */
        // function replaceMx4GoUrl(url) {
        //     if (url && /http:\/\/go.maxthon.cn\/redir\/mx4\/qa.htm?/.test(url)) {
        //         var queryStr = url.getQueryString('f');
        //         if (queryStr !== null && queryStr !== 'ctrip') {
        //             url = url.replace('/redir/mx4/qa.htm', '/redir/mx5/qa.htm');
        //         }
        //     }
        //     return url;
        // }
        /**
         * 保证旧数据结构对新数据结构的兼容
         */
        function initData(data) {
            var top_data_list = [], topuiindex = 0;
            data_list = [];
            data.forEach(function (item, i) {
                if (item) {
                    // 过滤无效数据： Add 增加按钮 Empty:占位格子
                    if (item.title === 'Add' || item.title === 'Empty') {
                        return true;
                    }
                    if (item.group) delete item.group;
                    if (item.uiindex) delete item.uiindex;
                    // if (item.url) {
                    //     item.url = replaceMx4GoUrl(item.url);
                    // }
                    if (item.isHot === true) {
                        item.topuiindex = topuiindex++;
                        top_data_list.push(item);
                    } else {
                        if (item.children) {
                            item.children.forEach(function (item2, j) {
                                if (!item2) {
                                    item.children.splice(j, 1);
                                    return true;
                                }
                                // if (item2.url) {
                                //     item2.url = replaceMx4GoUrl(item2.url);
                                // }
                            });
                        }
                        data_list.push(item);
                    }
                }
            });

            var last_index = data_list.length - 1;
            // 判断是否新的结构数据
            if (data_list.length > 0
                && data_list[last_index].title === 'Add'
                && data_list[last_index].type) {
                data_list.push.apply(data_list, autoComplete(top_data_list));
            } else {
                data_list.push({ 'title': 'Add', 'type': 'button' });
                data_list.push.apply(data_list, autoComplete(top_data_list));
                // 保证数据与页面结构一致
                maxthon.setSyncValue(MY_SITE, data_list);
            }
        }

        // 自动补全Top8
        function autoComplete(list) {
            var length = list.length;

            if (length < 8) {
                list.push({ 'title': 'Add', isHot: true, topuiindex: length });
                for (var i = 0; i < 8 - length; i++) {
                    list.push({ 'title': 'Empty', isHot: true, topuiindex: length + 1 + i });
                }
            } else {
                list.splice(8);
            }
            return list;
        }

        function initMapList(item) {
            if(map_list[item.url]) { // map中有md5
                item['sq_img'] = map_list[item.url]['sq_img'] || 'offline.png';
                item['re_img'] = map_list[item.url]['re_img'] || 'offline.png';
                item['re_md5sum'] = map_list[item.url]['re_md5sum'] || '';
                item['sq_md5sum'] = map_list[item.url]['sq_md5sum'] || '';
            }
        }

        function initGridDataList(mapList) {
            var grid;
            map_list = mapList;
            data_list.forEach(function (item, i) {
                if (!item.children) { // 普通格子
                    item = new Grid(item, i);
                    initMapList(item);
                    if (item.isHot === true) {
                        $top_container.append(item.dom());
                    } else {
                        $grid_container.append(item.dom());
                    }
                } else {
                    grid = new Grid(item, i);
                    grid.container = $('<div class="grid-list-container"></div>');
                    grid.children = [];
                    item.children.forEach(function (item2, j) {
                        item2.group = grid.title;
                        item2 = new Grid(item2, j);
                        initMapList(item2);
                        grid.container.append(item2.dom());
                        grid.children[j] = item2;
                    });
                    $group_list.append(grid.container);
                    $grid_container.append(grid.dom());
                    item = grid;
                }
                item.index = i;
                data_list[i] = item;
            });
        }

        function setGroupGirdNodeSize(node, index, xy) {

            var data = grid_ui_data, top = 8, left = 12, sxy = getScroll();
            if (index > 1) {
                top += 50;
            }
            if (index % 2 == 1) {
                left += 72;
            }
            top += xy.top + sxy.top;
            left += xy.left + sxy.left;
            node.removeClass('notran');
            setTimeout(function () {
                node.addClass('small');
                setTimeout(function () {
                    node[0].style.cssText = 'left:' + left + 'px; top: ' + top + 'px; width:71px; height: 46px;';
                }, 5);
            }, 5);
        }

        function onGetGridList(list, mapList) {
            readyInitUiData();
            // 过滤一些数据
            initData(list);
            initGridDataList(mapList);
            resizeGridPositionAndIndex();
        }

        /**
         * 重新定位
         */
        function resizeGridPositionAndIndex() {
            var index = 0, topindex = 0, zIndex = 200, children, grid_height = grid_ui_data.height;

            data_list.forEach(function (item, i) {
                item.uiindex = i;
                if (item.isHot === true) {
                    if (topindex > 7) {
                        item.node.remove();
                        data_list.splice(i, 1);
                        return false;
                    }
                    item.topuiindex = topindex++;
                }
                item.locate();
                children = item.children;
                if (children) {
                    children.forEach(function (item2, j) {
                        item2.uiindex = j;
                        item2.locate(j);
                        if (item2.url) {
                            item2.index = index++;
                        } else {
                            item2.index = index;
                        }
                    });
                }
                item.index = index++;
            });

            $grid_container[0].style.height = data_list[data_list.length - 9].getGridPosition().top + grid_height + 'px';
            drag_drop_data.height = document.body.scrollHeight;
        }

        function getGridItem(index) {
            if (index !== 0 && !index) {
                return {
                    grid: grid_add,
                    i: -1,
                    j: -1
                }
            }

            var grid, item, item2,
                i = 0, j = -1, length = data_list.length, group_length;

            for1: for (; i < length; i++) {
                item = data_list[i];

                if (item.index == index) {
                    grid = item;
                    break;
                }
                if (item.children) {
                    for2: for (j = 0, group_length = item.children.length; j < group_length; j++) {
                        item2 = item.children[j];
                        if (item2.index == index) {
                            grid = item2;
                            break for1;
                            break;
                        }
                    }
                    j = -1;
                }
            }
            return !grid ? false : {
                grid: grid,
                i: i,
                j: j
            }
        }

        function onMovingGrid(drag_index, drop_index, group_name) {
            var dragGroup, dropGroup, drag = getGridItem(drag_index), drop = getGridItem(drop_index);
            var dragObj = drag.grid, dropObj = drop.grid, length;

            if (drag.j >= 0) dragGroup = data_list[drag.i];
            if (drop.j >= 0) dropGroup = data_list[drop.i];
            if (dragObj.group && dragObj.group !== '') {
                if (group_name == '') {
                    data_list.splice(drop.i, 0, data_list.splice(drag.i, 1)[0]);
                    datacode.moveGrid(dragObj.isHot, dropObj.isHot);
                } else {
                    delete dragObj.group;
                    data_list.splice(drop.i, 0, dragGroup.children.splice(drag.j, 1)[0]);
                    if (dragGroup.children.length === 0) { // 文件夹为空时，自动删除
                        data_list.splice(drag.i, 1);
                        dragGroup.node.remove();
                    } else {
                        // 只能这么删，不然事件丢失了
                        dragGroup.container[0].removeChild(dragObj.node[0]);
                        dragGroup.addLastGridThumbnailNode();
                    }
                    $grid_container.append(dragObj.node);
                    hideGroup();
                }
            } else {
                data_list.splice(drop.i, 0, data_list.splice(drag.i, 1)[0]);
                datacode.moveGrid(dragObj.isHot, dropObj.isHot);
            }
            // 持久化
            window.Api.Grid.moveGridItem({ i: drag.i, j: drag.j }, { i: drop.i, j: drop.j });
            resizeGridPositionAndIndex();
        }

        // 文件夹内移动
        function onMovingGroup(drag_index, drop_index, group_name) {
            var dragGroup, dropGroup, drag = getGridItem(drag_index), drop = getGridItem(drop_index);

            if (drag.j >= 0) dragGroup = data_list[drag.i];
            if (drop.j >= 0) dropGroup = data_list[drop.i];
            current_group.children.splice(drop.j, 0, current_group.children.splice(drag.j, 1)[0]);
            dragGroup.addLastGridThumbnailNode();
            // 持久化
            window.Api.Grid.moveGridItem({ i: drag.i, j: drag.j }, { i: drop.i, j: drop.j });
            resizeGridPositionAndIndex();
            datacode.moveGrid(false, false);
        }

        var setGroupNameTimer;
        function onSetGroupName(first_index, last_index, group_name) {
            var obj = getGridItem(first_index), obj = data_list[obj.i];

            obj.title = group_name;
            obj.setGroupName(group_name);
            clearTimeout(setGroupNameTimer);
            setGroupNameTimer = setTimeout(function () {
                // 持久化
                window.Api.Grid.updateGridGroup(obj.uiindex, group_name);
            }, animation_time);
        }

        // 移入文件夹
        function onMovingInGroup(drag_index, drop_index, group_name) {
            var dragGroup, dropGroup, drag = getGridItem(drag_index), drop = getGridItem(drop_index);
            var dragObj = drag.grid, dropObj = drop.grid, length;

            if (drag.j >= 0) dragGroup = data_list[drag.i];
            if (drop.j >= 0) dropGroup = data_list[drop.i];

            dragObj.setGroupName(group_name);
            dropGroup.children.splice(dropGroup.children.length, 0, data_list.splice(drag.i, 1)[0]);
            // 只能这么删，不然事件丢失了
            $grid_container[0].removeChild(dragObj.node[0]);
            dropGroup.container.append(dragObj.node);
            if (drag_node && !current_group) {
                dragObj.removeClass('draging');
                dragObj.removeClass('notran');
                length = dropGroup.children.length - 1;
                var xy = dropGroup.getGridFixed();

                // 设置缩略图大小
                setGroupGirdNodeSize(drag_node, length, xy);
                setTimeout(function () {
                    dropGroup.addLastGridThumbnailNode();
                    // 持久化
                    window.Api.Grid.insertGridItem(drag.i, drop.i);
                    resizeGridPositionAndIndex();
                    clearDragNode();
                }, animation_time);
            }
            datacode.moveGrid(false, false);
        }

        // 增加文件夹
        function onAddGroup(drag_index, drop_index, group_name) {
            var drag = getGridItem(drag_index), dragObj = drag.grid,
                drop = getGridItem(drop_index), dropObj = drop.grid,
                uiindex = drop.i + (drag_index > drop_index ? 0 : -1), list, drop_node, xy,
                group = new Grid({
                    title: group_name,
                    container: $('<div class="grid-list-container"></div>'),
                    children: []
                }, uiindex);

            list = group.children;
            if (drag_index > drop_index) {
                list[1] = data_list.splice(drag.i, 1)[0];
                list[0] = data_list.splice(drop.i, 1)[0];
            } else {
                list[0] = data_list.splice(drop.i, 1)[0];
                list[1] = data_list.splice(drag.i, 1)[0];
            }

            if (drag_node) {
                xy = dropObj.getGridFixed();
                drop_node = dropObj.cloneGridNode();
                drop_node.css({ padding: 0, margin: 0, overflow: 'hidden' });
            }

            var group_node = group.dom();
            group_node.css({ 'z-index': '-100' });
            $grid_container.append(group_node);
            // group.locate(drop.i);
            $group_list.append(group.container);

            data_list.splice(uiindex, 0, group);
            group.setGroupName(group_name);
            $grid_container[0].removeChild(dropObj.node[0]);
            $grid_container[0].removeChild(dragObj.node[0]);
            group.container.append(dropObj.node);
            group.container.append(dragObj.node);

            dragObj.removeClass('draging');
            dragObj.removeClass('notran');
            if (drag_node) {
                setGroupGirdNodeSize(drop_node, 0, xy);
                setGroupGirdNodeSize(drag_node, 1, xy);
                setTimeout(function () {
                    group_node.removeAttr('style');
                    // 持久化
                    window.Api.Grid.addGridGroup(uiindex, drag.i, drop.i, group_name);
                    resizeGridPositionAndIndex();
                    clearDragNode();
                    drop_node.remove();
                }, animation_time - 150);
            }

            datacode.createFolder({});
        }

        // 上下互换
        function onSwappingGrid(drag_index, drop_index) {
            var drag = getGridItem(drag_index), dragObj = drag.grid,
                drop = getGridItem(drop_index), dropObj = drop.grid,
                sxy = getScroll(),
                list, drop_node, drop_xy, drag_xy, dropItem, dragItem, dropData, dropData;

            if (drag_node) {
                drag_node.removeClass('notran');
                drop_xy = dropObj.getGridFixed();
                drop_node = dropObj.cloneGridNode();
                drop_node.css({ padding: 0, margin: 0, overflow: 'hidden' });
            }

            drag_xy = dragObj.getGridFixed();
            drop_node.css({ 'left': drag_xy.left + sxy.left, 'top': drag_xy.top + sxy.top });
            drag_node.css({ 'left': drop_xy.left + sxy.left, 'top': drop_xy.top + sxy.top });

            dropData = Object.assign({}, dropObj);
            dragData = Object.assign({}, dragObj);
            if (dragObj.isHot === true) {
                dropData.isHot = true;
                dropData.topuiindex = dragObj.topuiindex;
                dragData.isHot = false;
                delete dragData.topuiindex;
                dragData.uiindex = dropObj.uiindex;
            } else {
                dragData.isHot = true;
                dragData.topuiindex = dropObj.topuiindex;
                dropData.isHot = false;
                delete dropData.topuiindex;
                dropData.uiindex = dragObj.uiindex;
            }

            dropItem = new Grid(dropData, dragObj.uiindex);
            dragObj.node.replaceWith(dropItem.dom().addClass('draging'));
            dragItem = new Grid(dragData, dropObj.uiindex);
            dropObj.node.replaceWith(dragItem.dom().addClass('draging'));

            data_list.splice(drag.i, 1, dropItem);
            data_list.splice(drop.i, 1, dragItem);

            dragObj.removeClass('draging');
            dragObj.removeClass('notran');
            if (drag_node) {
                setTimeout(function () {
                    dragItem.node.removeClass('draging');
                    dropItem.node.removeClass('draging');
                    // 持久化
                    window.Api.Grid.swapGridItem(drag.i, clearExtraAttr(dropData), drop.i, clearExtraAttr(dragData));
                    resizeGridPositionAndIndex();
                    clearDragNode();
                    drop_node.remove();
                    datacode.moveGrid(true, false); // 上线互换统计
                }, animation_time);
            }
        }

        function clearExtraAttr(data) {
            var obj = {
                title: data.title,
                image: data.image,
                url: data.url,
                isHot: data.isHot
            }
            if(!obj.image) {
                delete obj.image;
                obj.colorBlock = data.colorBlock;
            }
            return obj;
        }

        function onInsertGridItem(data, targetObj) { // 确保targetObj 存在
            var dataindex, container, list, grid, group, obj = targetObj || grid_add;
            list = data_list;
            dataindex = obj.uiindex;
            if (obj.isHot === true) {
                data.topuiindex = obj.topuiindex;
            }

            data.uiindex = dataindex;
            grid = new Grid(data, dataindex);
            list.splice(dataindex, 0, grid);
            obj.node.parent().append(grid.dom());
            // 持久化
            window.Api.Grid.insertGridItem(dataindex, -1, clearExtraAttr(data));
            resizeGridPositionAndIndex();
        }

        function onUpdateGridItem(data) {
            var obj = getGridItem(data.index), i = obj.i, j = obj.j, parentNode, grid;
            if (j < 0) {
                if (data.isHot === true) {
                    data.topuiindex = obj.grid.topuiindex;
                }
                grid = new Grid(data, i);
                parentNode = data_list[i].node.parent();
                data_list[i] = grid;
                grid.uiindex = i;
            } else {
                data.group = obj.grid.group; // 分组名称不能丢
                grid = new Grid(data, j);
                data_list[i].children[j] = grid;
                grid.uiindex = j;
                parentNode = data_list[i].container;
                data_list[i].addLastGridThumbnailNode();
            }

            parentNode.append(grid.dom());
            obj.grid.node.remove();
            resizeGridPositionAndIndex();
            // 持久化
            window.Api.Grid.updateGridItem(i, j, clearExtraAttr(data));
        }

        //删除
        function onRemoveGrid(index) {
            var obj = getGridItem(index), grid = obj.grid, i = obj.i, j = obj.j, group;

            grid.addClass('remove');
            setTimeout(function () {
                grid.node.remove();
                if (j < 0) {
                    data_list.splice(i, 1);
                    if (grid.isHot === true) {
                        var item;
                        var uiindex = data_list.length;
                        var lastGrid = data_list[uiindex - 1];
                        if (!lastGrid.url && (lastGrid.title === 'Add' || lastGrid.title === 'Empty')) {
                            item = new Grid({ 'title': 'Empty', 'isHot': true }, uiindex);
                        } else {
                            item = new Grid({ 'title': 'Add', 'isHot': true }, uiindex);
                        }
                        item.topuiindex = grid.topuiindex;
                        data_list.splice(uiindex, 0, item);
                        $top_container.append(item.dom());
                    }
                } else {
                    group = data_list[i];
                    group.children.splice(j, 1);
                    if (group.children && group.children.length === 0) {
                        data_list.splice(i, 1);
                        group.node.remove();
                        hideGroup();
                    } else {
                        group.addLastGridThumbnailNode();
                    }
                }
                // 持久化
                window.Api.Grid.removeGridItem(i, j);
                resizeGridPositionAndIndex();
            }, animation_time);
        }

        return {
            getGridItem: getGridItem,
            onAddGroup: onAddGroup,
            onRemoveGrid: onRemoveGrid,
            onMovingGrid: onMovingGrid,
            onMovingInGroup: onMovingInGroup,
            onGetGridList: onGetGridList,
            onMovingGroup: onMovingGroup,
            onSwappingGrid: onSwappingGrid,
            onInsertGridItem: onInsertGridItem,
            onUpdateGridItem: onUpdateGridItem,
            onSetGroupName: onSetGroupName
        }
    })();

    window.Controller = Controller;
    window.Api.dialog = (function () {
        function close() {
            group_operate.close();
        }
        return { close: close }
    })();

    // window.Observer = (function() {
    //     maxthon.useApi('quickaccess.addEventListener', {}, function (res) {
    //         if ($.isEmptyObject(res)) return;
    //         console.log(res);
    //         switch (res.type) {
    //             case 'thumbUpdated': // 截图完成
    //                 var dataurl = res.data;
    //                 for(let i=0; i< data_list.length; i ++) {
    //                     var item = data_list[i];
    //                     if(dataurl === item.url && item.node.hasClass('loading')) {
    //                         item.image = newWin.getThumbsUrl(dataurl, 0);
    //                         item.node.removeClass('loading');
    //                     }
    //                 }
    //                 break;
    //             case 'guestSuccess': // MX4 guest数据导入成功
    //                 api.Grid.getGridDataList();
    //                 break;
    //             case 'guest5Success': // MX5 guest数据导入成功
    //                 api.getGridDataList();
    //                 break;
    //                 case 'dataSyncCompleted':
    //                 if (maxthon.max_version.cmpVersions('5.0.3.400') > 0) {
    //                     api.Grid.getGridDataList();
    //                     return;
    //                 }

    //                 if (!isSync) {
    //                     isSync = true;
    //                     api.Grid.getGridDataList();
    //                 }
    //                 break;
    //             case 'addNewSite':

    //                 break;
    //         }
    //     });
    // })();
});
/**
 * 新标签页换肤功能
 * @author guotingjie@maxthon.net
 * @ctime 2016-6-6
 */
/**
 * 数据结构
 * {
 *      'content' : '',
 *      'brightness' : ['light','dark']   dark 明亮度
 *      'pic' : ['','','','']
 *      'type' : '' built-in : 内置, custome 用户自定义
 *      'mode'  : '' ,
 * }
 *
 */
$(function () {
    var configPanel = (function () {
        var Maxthon = window.Api.Maxthon, platform = Maxthon.platform, version = Maxthon.max_version;
        var $wallpapers = $('#wallpapers'), $config_panel, $config_button, $background_list, $config_main,
            media = document.getElementById('media'), background = [], option;

        function init() {
            initOption();
        }

        function initOption() {
            $config_layer = $('#config-layer'), $config_button = $('#config-button'),
                $config_main = $config_layer.find('.skin-img-list'), $background_list = $config_layer.find('.skin-img-list');

            background = [
                { 'pic': 'light.jpg', 'type': 'picture', 'brightness': 'dark', 'data_code': 'defaultlight' },
                { 'pic': 'deep.jpg', 'type': 'picture', 'brightness': 'light', 'data_code': 'defaultdark' },
                { 'pic': 'harbor.jpg', 'type': 'video', 'brightness': 'light', 'data_code': 'harbor', 'play': true },
                { 'pic': 'sunny.jpg', 'type': 'video', 'brightness': 'light', 'data_code': 'sunny', 'play': true },
                { 'pic': 'yun.jpg', 'type': 'video', 'brightness': 'dark', 'data_code': 'clouds', 'play': true },
                { 'pic': 'moonlight.jpg', 'type': 'video', 'brightness': 'light', 'data_code': 'moonlight', 'play': true },
                { 'pic': 'mountains.jpg', 'type': 'video', 'brightness': 'dark', 'data_code': 'mountains', 'play': true },
                { 'pic': 'sky.jpg', 'type': 'picture', 'brightness': 'light', 'data_code': 'sky' },
                { 'pic': 'dandelion.jpg', 'type': 'picture', 'brightness': 'dark', 'data_code': 'bridge' },
                { 'pic': 'sundown.jpg', 'type': 'picture', 'brightness': 'dark', 'data_code': 'dandelion' },
                { 'pic': 'bridge.jpg', 'type': 'picture', 'brightness': 'dark', 'data_code': 'sundown' },
                { 'pic': 'old.jpg', 'type': 'picture', 'brightness': 'dark', 'data_code': 'old' },
                { 'pic': 'night.jpg', 'type': 'picture', 'brightness': 'light', 'data_code': 'night' },
                { 'pic': 'balloon.jpg', 'type': 'picture', 'brightness': 'light', 'data_code': 'balloon' }
            ];
            // 当版本小于5.0.4.400时，由于会有视频弹框需要屏蔽
            version.cmpVersions('5.0.4.400') < 0 && background.splice(2, 5);
            version.cmpVersions('5.0.3.400') < 0 && $config_layer.find(".tips").remove() && $config_layer.find(".a-upload").height(0);

            var htmlAttr = [];
            background.forEach(function (data, i) {
                htmlAttr.push('<li class="skin-img-item" name="' + data.data_code + '">');
                htmlAttr.push(' <a href="javascript:void(0);">');
                htmlAttr.push('     <img class="skin-img-item-img" src="' + buildImgUrl(data.pic, true) + '" />');
                if (data.type === 'video') {
                    htmlAttr.push('     <div class="operate-button loading"></div>     ');
                }
                htmlAttr.push(' </a>');
                htmlAttr.push('</li>');
            });

            $background_list.empty().append(htmlAttr.join(''));
            media.addEventListener('play', function () {
                $config_layer.find('.operate-button').removeClass('start').removeClass('loading').addClass('pause');
            });

            media.addEventListener('error', function () {
                $config_layer.find('.operate-button').addClass('start');
            });
            media.addEventListener('pause', function () {
                $config_layer.find('.operate-button').removeClass('pause').removeClass('loading').addClass('start');
            });

            getOption(function (config) {
                option = config;
                // 自定义图片
                var isCustomBG = localStorage.getItem('CUSTOM_BACKGROUND');
                if (isCustomBG && isCustomBG.length) {
                    option.bgIndex = -1;
                    option.customBackground = isCustomBG;
                }

                if (option.bgIndex === -1 && option.customBackground) {
                    var img = new Image();
                    img.onload = function () {
                        switchBackgroundImage(option.customBackground);
                        switchDarkOrLight();
                        saveOption();
                    }
                    img.onerror = function () {
                        option.bgIndex = 4;
                        switchBackgroundVideo(option.bgIndex, background[option.bgIndex].pic);
                        switchDarkOrLight(background[option.bgIndex].brightness);
                        saveOption();
                    }
                    img.src = option.customBackground;
                } else {
                    var backgroundData = background[option.bgIndex];
                    if (backgroundData.type === 'picture') {
                        switchBackgroundImage((buildImgUrl(backgroundData.pic, false)));
                    } else {
                        switchBackgroundVideo(option.bgIndex, backgroundData.pic);
                    }
                    $background_list.find('>li').removeClass('selected').eq(option.bgIndex).addClass('selected');
                    // UI适配
                    switchDarkOrLight(backgroundData.brightness);
                }

                // 显示活动皮肤开关
                if(skinDisplay === true) {
                    localStorage.setItem('BODY_CLASS_NAME', document.body.className);
                    document.body.className = '';
                    document.getElementById('skin').style.display = 'block';
                    document.getElementById('siderbar').style.display = 'none';
                }
                bindEvent();
            });
        }

        function bindEvent() {
            $config_layer.find(".upload").on('click', function () {
                Maxthon.useApi("quickaccess.selectBgImage", {}, function (result) {
                    if (result && result.succeed === true) {
                        var CUSTOM_BACKGROUND = 'mx://newtab/user_custom_bg_image.png?v=' + (new Date().getTime());
                        option.bgIndex = -1;
                        option.customBackground = CUSTOM_BACKGROUND;
                        saveOption();
                        switchBackgroundImage(CUSTOM_BACKGROUND);
                        switchDarkOrLight();
                        $background_list.find('>li').removeClass('selected');
                    }
                });
            });

            $config_button.on('click', function () {

                $config_layer.css({ 'right': '0px' });
                $('#mx_mask_layer').show().unbind('click').click(function () {
                    $config_layer.removeAttr('style');
                    $(this).hide();
                });

                window.onresize = function (e) {
                    if (this.resizeTimer) clearTimeout(this.resizeTimer);
                    this.resizeTimer = setTimeout(function () {
                        $config_main.height(window.innerHeight - 120);
                    }, 100);
                }
                setTimeout(function () {
                    window.onresize();
                }, 50);
            });

            $config_layer.on('click', '.close', function () {
                $config_layer.removeAttr('style');
                $('#mx_mask_layer').hide().unbind('click');
                window.onresize = null;
            });

            $background_list.on('click', 'li', function (e) {
                var $this = $(this);
                if ($this.hasClass('selected')) return;
                if ($(e.target).hasClass('operate-button')) {
                    return;
                }
                $this.siblings('li').removeClass('selected');
                $this.addClass('selected');

                var bgIndex = $this.index();
                var backgroundData = background[bgIndex];
                // 清除自定义图
                localStorage.removeItem('CUSTOM_BACKGROUND');
                if (backgroundData.type === 'picture') {
                    switchBackgroundImage(buildImgUrl(backgroundData.pic, false));
                } else {
                    switchBackgroundVideo(bgIndex, backgroundData.pic);
                }
                delete option.play;
                // UI适配
                switchDarkOrLight(backgroundData.brightness);
                option.bgIndex = bgIndex;
                option.customBackground && delete option.customBackground;
                saveOption(option);
                if (datacode) {
                    datacode.statistic({
                        n: backgroundData.data_code,
                        m: 'switchbackground'
                    });
                }
            });

            $config_layer.on('click', '.operate-button', function (e) {
                e.stopPropagation();
                if (media.networkState === 3) { // 没有找到视频源
                    media.load();
                    return;
                }
                var bgIndex = option.bgIndex;
                if (media.paused) {
                    media.play();
                    option.play = true;
                } else {
                    media.pause();
                    option.play = false;
                }
                saveOption(option);
            });
        }

        function switchBackgroundImage(src) {
            $wallpapers.css({ 'background-image': 'url(' + src + ')' });
            media.removeAttribute('src');
            media.removeAttribute('poster');
            media.style.display = 'none';
            option && delete option.play;
        }

        function switchBackgroundVideo(bgIndex, src) {
            media.poster = src.replace(/([A-Za-z]+).jpg/, function (val, $1) {
                return staticServer + '/img/bg/' + $1 + '.jpg';
            });

            media.src = src.replace(/([A-Za-z]+).jpg/, function (val, $1) {
                return staticServer + '/img/bg/video/' + $1 + '.mp4';
            });
            var isPlay = background[bgIndex].play;
            if (bgIndex === option.bgIndex) { // 代表页面初始化加载
                isPlay = option.play === false ? false : true;
            }
            if (isPlay === true) {
                media.play();
            } else {
                media.pause();
                // 初始化时不触发pause事件
                $config_layer.find('.operate-button').removeClass('loading').addClass('start');
            }
            $wallpapers.removeAttr('style');
            media.style.display = 'block';
        }

        function switchDarkOrLight(brightness) {
            var $body = $('body');
            if (!brightness) {
                if (option.bgIndex === -1) {
                    calcMeanColor(option.customBackground);
                    return false;
                } else {
                    brightness = background[option.bgIndex].brightness;
                }
            }
            $body.attr('class', brightness);
        }

        function getOption(cb) {
            Maxthon.getSyncValue('noSyncData', function (config) {
                cb(config.bgIndex !== undefined ? config : { bgIndex: version.cmpVersions('5.0.4.400') < 0 ? 2 : 4 });
            });
        }

        function saveOption() {
            Maxthon.setSyncValue('noSyncData', option);
        }

        function buildImgUrl(pic, isPreview) {
            return staticServer + '/img/bg/' + (isPreview ? 'preview/' : '') + pic + (window.Api.Tools.isSupportWebp() ? '.webp' : '');
        }

        function calcMeanColor(isCustomBG) {
            if (!isCustomBG || isCustomBG.length === 0) return;
            if(window.RGBaster) {
                colors(isCustomBG);
            } else {
                $.getScript(staticServer + '/js/lib/rgbaster.js', function () {
                    colors(isCustomBG);
                })
            }
        }

        function colors(img) {
            console.time("calc color");
            RGBaster.colors(img, {
                success: function (payload) {
                    // console.log(payload.dominant);
                    // console.log(payload.secondary);
                    // console.log(payload.palette);
                    console.timeEnd("calc color");
                    if (payload.dominant < 128) {// 代表图片是深色
                        brightness = 'light';
                    } else {
                        brightness = 'dark';
                    }
                    $('body').attr('class', brightness);
                }
            });
        }

        return {
            init: init
        }
    })();

    window.configPanel = configPanel;
});
/**
 * 新增我的站点
 * @author guotingjie@maxthon.net
 * @ctime 2016-6-6
 */
$(function () {
    var newWin = (function (window) {
        var maxthon = window.Api.Maxthon, mapList;
        var $dialog_node, $dialog_nav_node, $grid_nav_node, $grid_tab_node,
            $input_url, $input_title, $dialog_add_btn, $dialog_grid, $color_block,
            $color_block_list, $radio_list, $search_btn, $search_input, $mask_node;

        function init(map) {
            mapList = map || {}, // 用于更新图片用
            $dialog_node = $('#add-dialog'),
            $dialog_nav_node = $dialog_node.find('.dialog-nav > li'),
            $grid_nav_node = $dialog_node.find('.grid-nav > li'),
            $grid_tab_node = $dialog_node.find('.tab > li'),
            $input_url = $dialog_node.find('input[name="url"]'),
            $input_title = $dialog_node.find('input[name="title"]'),
            $dialog_add_btn = $dialog_node.find('#dialog_add_btn'),
            $dialog_grid = $dialog_node.find('.dialog-grid-list'),
            $color_block = $dialog_node.find('.color-block-list'),
            $color_block_list = $dialog_node.find('.color-block-list > li'),
            $radio_list = $dialog_node.find('.radio-list'),
            $search_btn = $dialog_node.find('#grid-search-icon'),
            $search_input = $dialog_node.find('#grid_search_btn'),
            $mask_node = $('#mx_mask_layer');

            // fixed: mac浏览器屏蔽上次未关闭标签
            if(maxthon.platform === 'Mac') {
                $grid_tab_node.eq(3).remove();
            }
            // 补丁: 兼容1.6版本客户端不支持的接口
            if( (maxthon.platform === 'Win' && maxthon.max_version.cmpVersions('5.0.3.200') < 0) ||
                (maxthon.platform === 'Mac' && maxthon.max_version.cmpVersions('5.0.16') < 0)) {
                $color_block.css({'left': '0px', 'top': '70px', 'width': '590px'});
                $color_block_list.css({'width':'50px', 'height':'50px', 'margin':'20px 15px 0 0px'});
                $dialog_node.find('.dialog-input').eq(3).css({'position': 'relative', 'top': '140px', 'left': '250px'});
                $dialog_node.find('.dialog-input').eq(1).remove();
                $('<style>.color-block-list li.selected::after{background-position:-5px -65px;}</style>').appendTo('head');
            }

            $dialog_nav_node.on('click', function () {
                var $this = $(this);
                $this.siblings().removeClass('selected');
                $this.addClass('selected');
                $dialog_node.find('article').hide().eq($this.index()).show();
            });

            // 导航切换
            $grid_nav_node.on('click', function () {
                var $this = $(this);
                $this.siblings('li').removeClass('current');
                $this.addClass('current');
                renderGridHtml(SITE_LIST[$this.index()]);
            });

            // 网址来源选
            $grid_tab_node.on('click', function () {
                var $this = $(this),
                    index = $this.index();

                $this.siblings('li').removeClass('hover');
                $this.addClass('hover');
                var $alltab = $dialog_node.find('.main-warp > div');
                $alltab.addClass('hide').eq(index).removeClass('hide');

                // 点击回调数组
                newWin.clickcalls = [
                    function () {
                        maxthon.useApi('common.getCurrentOpenedList', {}, function (data) {
                            renderUrlList(data, $alltab.eq(index));
                        });
                    },
                    function (index) {
                        maxthon.useApi('history.getTopVisitedList', {}, function (data) {
                            renderUrlList(data, $alltab.eq(index));
                        });
                    },
                    function () {
                        maxthon.useApi('note.getAllFolders', {}, function (data) {
                            var tree = new treeMenu(data.folders);
                            $alltab.eq(index).empty().append(tree.init(data.pid));

                            getNoteListByPid('00000001-0000-0000-0000-000000000000', function (html) {
                                $alltab.eq(index).append(html);
                            });
                        });
                    },
                    function () {
                        maxthon.useApi('getLastOpenList', {}, function (data) {
                            renderUrlList(data, $alltab.eq(index));
                        });
                    }
                ];

                index != -1 && newWin.clickcalls[index].call(this, index);
            });

            $input_url.on('init', function () {
                var url = $input_url.val().trim();
                if (url.length === 0) return;
                $input_url.removeClass('error');
                $dialog_node.find('.error').hide();

                var editable = editableMode() ? false : true;
                // 选择的是笔记
                if (url.startWith('mx://note/?id')) {
                    // 文本框置灰
                    $input_url.attr('disabled', 'disabled');
                    updateRadio({
                        'recommendlogo': { 'disable': true },
                        'screenshot': { 'disable': true },
                        'colorblock': { 'disable': false, 'checked': true }
                    }, editable);
                    return;
                }

                $input_url.removeAttr('disabled').removeAttr('style');
                var image = getImageFromUrl(url);
                // 匹配上推荐图片
                if (image === '') {
                    updateRadio({
                        'recommendlogo': { 'disable': true },
                        'screenshot': { 'disable': false, 'checked': true },
                        'colorblock': { 'disable': false }
                    }, editable);
                } else {
                    grid_image = image;
                    var config = {
                        'recommendlogo': { 'disable': false, 'checked': true },
                        'screenshot': { 'disable': false },
                        'colorblock': { 'disable': false }
                    };
                    updateRadio(config, editable);
                }
            }).on('blur', function () {
                $(this).trigger('init');
            }).on('focus', function () {
                $(this).removeClass('error');
            });

            $dialog_node.on('click', '.main-warp li:not(.folder) > a', function (e) {
                e.preventDefault();
                e.stopPropagation();
                var $this = $(this);

                $input_title.val($this.attr('title'));
                $input_url.val($this.attr('href')).trigger('init');
                $grid_tab_node.each(function(i,n) {
                    if ($(n).hasClass('hover')) {
                        grid_source = ['currentlyOpen','mostVisited','maxnote','lastSession'][i];
                        return false;
                    }
                });
                if(grid_source === 'maxnote') {
                    if($this.attr('et') !== '1' ) {
                        maxnoteCategory = 'record';
                    } else {
                        maxnoteCategory = 'website';
                    }
                } else {
                    maxnoteCategory = undefined;
                }
                return false;
            });

            $dialog_node.on('click', '.main-warp li.folder', function (e) {
                var $this = $(this);
                $this.toggleClass('open');
                var pid = $this.attr('uuid');

                getNoteListByPid(pid, function (html) {
                    $this.find('>ul').find('li:not(.folder)').remove().end().append(html);
                });
                return false;
            });

            $dialog_node.on('mouseover mouseout', '.main-warp .menu-head,.main-warp .jstree-note', function (e) {
                e.stopPropagation();
                if (e.type == "mouseover") {
                    $(this).siblings('.jstree-wholerow').show();
                } else if (e.type == "mouseout") {
                    $(this).siblings('.jstree-wholerow').hide();
                }
            });

            $dialog_grid.on('click', '> li', function (e) {
                e.preventDefault();
                var $this = $(this);

                if ($this.hasClass('disable')) {
                    return;
                }
                // 防止频繁点击，导致添加多次
                $this.addClass('disable');
                var $ele = $this.find('a');
                var item = {
                    'title': $ele.attr('d-title'),                                  // 标题
                    'url': $ele.attr('href'),                                       // url链接
                    'image': $ele.attr('d-image'),                                  // 图片路径
                    'sq_img' : $ele.attr('d-sq-img'),
                    'sq_md5sum' : $ele.attr('d-sq-md5'),
                    're_img' : $ele.attr('d-re-img'),
                    're_md5sum' : $ele.attr('d-re-md5'),
                    'isHot': false
                };

                setTimeout(function () {
                    // 构建动画元素
                    var target_grid = $this.clone();
                    var w = $this.width(), h = $this.innerHeight();
                    var p = $this.offset();

                    target_grid.css({ 'position': 'absolute', '-webkit-transition': 'all 0.3s', 'left': p.left, 'top': p.top + document.body.scrollTop });
                    document.body.appendChild(target_grid[0]);
                    // 获取移动位置
                    var grid = Controller.getGridItem(grid_index).grid;
                    item.index = grid_index;
                    if (grid.isHot === true) {
                        item.isHot = true;
                        // g.image = g.image.replace('/Re/', '/Sq/');
                    }

                    var editOperate = editableMode();
                    if (!editOperate) {
                        var add_uiindex = grid.isHot === true ? Math.min(grid.topuiindex + 1, 7) : grid.uiindex + 1;
                        var xy = grid.getGridPosition(add_uiindex);
                        grid.node.css({ "left": xy.left, "top": xy.top });
                    }

                    if (!grid.group) {
                        var p2 = grid.getGridFixed();
                        var l2 = p2.left;
                        var t2 = p2.top + document.body.scrollTop;
                        target_grid.css({ "left": l2, "top": t2 });
                        setTimeout(function() {
                            editOperate ? Controller.onUpdateGridItem(item) : Controller.onInsertGridItem(item, grid);
                            if (target_grid) {
                                document.body.removeChild(target_grid[0]);
                                target_grid = null;
                            }
                        }, 300);
                    } else {
                        Controller.onUpdateGridItem(item);
                        if (target_grid) {
                            document.body.removeChild(target_grid[0]);
                            target_grid = null;
                        }
                    }

                    // 关闭弹框
                    closeDialog();
                    var ueip_data = {
                        o: (grid.isHot === true ? 'top' : 'fav') + (editOperate ? 'Edit' : 'Add'),
                        m: 'managesites',
                        n: editOperate ? 'edit' : 'add',
                        p: 'success',
                        data: {
                            'addPosition': grid.isHot === true ? grid.topuiindex : grid.uiindex,
                            'addSource': 'default'
                        }
                    };
                    datacode && datacode.statistic(ueip_data);
                }, 50);
            });

            $dialog_add_btn.on('click', function (e) {
                var $this = $(this);
                if ($this.hasClass('disable')) {
                    return;
                }

                var url = $input_url.val().trim();
                var title = $input_title.val().trim();
                $dialog_node.find('.error').hide();
                if (url.length === 0) {
                    $dialog_node.find('.error').eq(0).find('>span').html(Language.getLang('EnterUrl')).end().show();
                    $input_url.addClass('error');
                    return;
                }

                if (url.indexOf('..') > 0 && url.indexOf('..')) {
                    $dialog_node.find('.error').eq(0).find('>span').html(Language.getLang('CheckUrl')).end().show();
                    $input_url.focus();
                    return;
                }

                // 防止频繁点击，导致添加多次
                $this.addClass('disable');
                if (title.length === 0) {
                    title = url;
                }
                var item = {
                    'title': title,
                    'url': url.notUrl() ? 'http://' + url : url
                };

                $radio_list.each(function (i, n) {
                    var $item = $(n);
                    if ($item.hasClass('selected')) {
                        switch (i) {
                            case 0:
                                item.image = grid_image;
                                break;
                            case 1:
                                item.image = getThumbsUrl(item.url, 0);
                                break;
                            default:
                                item.colorBlock = grid_color;
                                break;
                        }
                        return false;
                    }
                });

                var grid = Controller.getGridItem(grid_index).grid;
                if (grid.isHot === true) {
                    item.isHot = true;
                    item.image = item.image && item.image.replace('/Re/', '/Sq/');
                }
                var ueip_data = {
                    o: grid.isHot === true ? 'top' : 'fav',
                    data: {
                        'addPosition': grid.isHot === true ? grid.topuiindex : grid.uiindex,
                        'addSource': grid_source || 'custome'
                    },
                    m: 'managesites'
                };

                if(maxnoteCategory && grid_source === 'maxnote') {
                    ueip_data.data.maxnoteCategory = maxnoteCategory;
                }
                // 关闭窗口
                if (editableMode()) {
                    ueip_data.n = 'edit';
                    ueip_data.o += 'Edit';
                    item.index = grid_index;
                    Controller.onUpdateGridItem(item);
                } else {
                    ueip_data.n = 'add';
                    ueip_data.o += 'Add';
                    Controller.onInsertGridItem(item, grid);
                }

                // 关闭弹框
                closeDialog();
                setTimeout(function () {
                    ueip_data.p = 'success';
                    datacode && datacode.statistic(ueip_data);
                }, 100);
            });

            var searchTimer;
            $search_input.on('input', function () {

                if (searchTimer) {
                    clearTimeout(searchTimer);
                }
                searchTimer = setTimeout(function () {
                    searchFun();
                }, 200);
                return false;
            });

            $color_block_list.on('click', function (e) {
                var $this = $(this);
                e.stopPropagation();
                if ($this.parent().hasClass('disable')) return;
                grid_color = $this.attr('class');
                $this.siblings().removeClass('selected').end().addClass('selected');
            });

            $radio_list.on('click', function (e) {
                var $this = $(this);
                var ueip_data = { m: 'logozoneClick' };
                var index = $this.index();
                switch(index) {
                    case 0:
                        ueip_data.n = 'hot';
                        break;
                    case 1:
                        ueip_data.n = 'screenshot';
                        break;
                    default:
                        ueip_data.n = 'colorBlock';
                        break;
                }
                datacode && datacode.statistic(ueip_data);

                if ($this.hasClass('disabled')) return;
                switchRadio($this); // 切换
            });
        }

        function switchRadio($this) {
            var index = $this.index();
            var url = $input_url.val().trim();
            url = url.notUrl() ? 'http://' + url : url;
            switch (index) {
                case 0:
                    var matchimage = getImageFromUrl(url);
                    if(matchimage !== '') { // ps:自动匹配到预置图片，才重新赋值，防止第三方图没有找到预置图
                        grid_image = matchimage;
                    }
                    $color_block.addClass('disable');
                    break;
                case 1:
                    grid_image = getThumbsUrl(url, 0);
                    $color_block.addClass('disable');
                    break;
                default:
                    $color_block.removeClass('disable');
                    $color_block_list.removeClass('selected').siblings('.' + grid_color).addClass('selected');
                    break;
            }

            $this.siblings().removeClass('selected').end().addClass('selected');
        }

        function searchFun() {
            var search = $search_input.val().replace(/\s+/g, "");

            var html = [];
            if (search.length === 0) {
                renderGridHtml(SITE_LIST[search.length]);
                return;
            }
            var result = { list: [] };
            for (var i = 0; i < SITE_LIST.length; i++) {
                var list = SITE_LIST[i].list;

                for (var j = 0; j < list.length; j++) {
                    var item = list[j];
                    if (item.url.indexOf(search) !== -1 || item.title.indexOf(search) !== -1) {
                        result.list.push(item);
                        continue;
                    }
                }
            }
            renderGridHtml(result);
            // 默认高亮第一个标签
            $grid_nav_node.removeClass('current').eq(0).addClass('current');
        }

        var grid_index, grid_uiindex, grid_url, grid_image, grid_title, grid_color, grid_thumb_type, grid_source, maxnoteCategory, add_quick_dialog, openInDialog;
        /**
         * 打开新弹窗
         * @param data 数据
         * @param openFlag 弹出框中打开
         * @return {[type]} [description]
         */
        function showDialog(data, editable, openFlag) {
            var thiz = this;
            var selectIndex = editable ? 1 : 0,
                btnText = editable ? Language.getLang('Save') : Language.getLang('CustomAdd');

            $dialog_node.find('.error').hide();
            $search_input.val('');
            openInDialog = openFlag; // 用全局变量存放一个弹框打开状态

            // 默认显示热门标签
            $grid_nav_node.eq(0).click();
            $grid_tab_node.eq(0).click();
            $dialog_nav_node.eq(selectIndex).click();
            $dialog_add_btn.text(btnText);
            bindData(data);

            add_quick_dialog = $dialog_node.dialog({
                close: function () { return false; },
                after: function () {
                    $dialog_node.find('.close').off('click').on('click', function() {
                        var grid = Controller.getGridItem(grid_index).grid;
                        $dialog_nav_node.each(function(i,n) {
                            if ($(n).hasClass('selected')) {
                                grid_source = ['default','custome'][i];
                                return false;
                            }
                        });
                        var ueip_data = {
                            n: editable ? 'edit' : 'add',
                            o: (grid.isHot === true ? 'top' : 'fav') + (editable ? 'Edit' : 'Add'),
                            m: 'managesites',
                            p: 'failure',
                            data: { addSource: grid_source || 'custome' }
                        };
                        datacode && datacode.statistic(ueip_data);
                        // 关闭弹框
                        closeDialog(openInDialog);
                    });
                }
            });
        }

        function closeDialog() {
            var openFlag = openInDialog;
            clearData();
            // 重置自定义弹窗
            $dialog_add_btn.removeClass('disable');
            $input_url.removeAttr('disabled').removeAttr('style').removeClass('error');
            $radio_list.removeClass('disabled').removeClass('selected').eq(1).addClass('selected');
            $color_block_list.removeClass('selected').eq(0).addClass('selected');
            // 打开文件夹弹框
            if (openFlag === true) {
                $dialog_node.hide();
                $group_dialog.show();
                $('#mx_mask_layer').off('click').on('click', function (e) {
                    window.Api.dialog.close();
                }).show();
                return false;
            }
            add_quick_dialog.close();
        }

        /**
         * 绑定数据到自定义编辑框
         * @param data 绑定的对象
         */
        function bindData(data) {
            data = data || {};
            grid_index = data.index;
            grid_uiindex = data.uiindex;
            grid_title = data.title || '';
            grid_url = data.url || '';
            grid_image = data.image || '';
            grid_color = data.colorBlock || 'color-block-6';
            grid_thumb_type = data.thumbType;

            updateHTML();
            if(editableMode()) {
                if (grid_image === '') { // 默认 截图
                    grid_thumb_type = 2;
                } else {
                    if (grid_image.startWith('mx://thumbs/?reflush')) {
                        grid_thumb_type = 1;
                    } else {
                        grid_thumb_type = 0;
                    }
                }
            } else {
                grid_thumb_type = 1;
            }

            // 自定义添加编辑状态
            var config = {};
            switch (grid_thumb_type) {
                case 2:
                    config.colorblock = { 'disable': false, 'checked': true }
                    break;
                case 1:
                    config.screenshot = { 'disable': false, 'checked': true }
                    break;
                default:
                    config.recommendlogo = { 'disable': false, 'checked': true }
                    break;
            }
            // 判断如果是第三方图库图片，还是保留推荐图
            var matchimage = getImageFromUrl(grid_url);
            if (matchimage === '') {
                if (!(data.image && data.image.startWith('http://fastdail-img'))) {
                    config.recommendlogo = {
                        'disable': true
                    }
                }
            }

            if (grid_url.startWith('mx://note/?id')) {
                config.screenshot = { 'disable': true };
                // 文本框置灰
                $input_url.attr('disabled', 'disabled');
            }
            updateRadio(config, true);
        }

        function clearData() {
            grid_index = '';
            grid_url = '';
            grid_title = '';
            grid_image = '';
            grid_color = '';
            grid_source = undefined;
            grid_thumb_type = undefined;
            maxnoteCategory = undefined;
            openInDialog = undefined;
        }

        function editableMode() {
            return $dialog_add_btn.text() === Language.getLang('Save');
        }

        function updateHTML() {
            $input_title.val(grid_title);
            $input_url.val(grid_url);
        }
        /**
         * 根据url更新radio列表
         * @param options
         * @param editable 是否能切换
         */
        function updateRadio(options, editable) {
            var config = $.extend(true, {
                'recommendlogo': { index: 0 },
                'screenshot': { index: 1 },
                'colorblock': { index: 2 }
            }, options);

            for (var i in config) {
                if (config[i]) {
                    var index = config[i].index;
                    if (config[i].disable === true) {
                        $radio_list.eq(index).addClass('disabled');
                        if ($radio_list.eq(index).hasClass("selected")) {
                            editable = true;
                        }
                        $radio_list.eq(index).addClass('disabled');
                    } else {
                        $radio_list.eq(index).removeClass('disabled');
                        $radio_list.eq(index).removeClass('disabled');
                    }
                    if (editable && config[i].checked === true) {
                        switchRadio($radio_list.eq(index));
                    }
                }
            }
        }

        function renderGridHtml(data) {
            var _html = [];
            for (var i = 0; i < data.list.length; i++) {
                var item = data.list[i];
                var attrHtml = [];
                if(mapList[item.url]) { // map中有md5
                    item['sq_img'] = mapList[item.url]['sq_img'] || '';
                    if(item['sq_img'] && item['sq_img'] !== '') {
                        attrHtml.push('d-sq-img="' + item.sq_img + '" ');
                    }
                    item['re_img'] = mapList[item.url]['re_img'] || '';
                    if(item['re_img'] && item['re_img'] !== '') {
                        attrHtml.push('d-re-img="' + item.re_img + '" ');
                    }
                    item['re_md5sum'] = mapList[item.url]['re_md5sum'] || '';
                    if(item['re_md5sum'] && item['re_md5sum'] !== '') {
                        attrHtml.push('d-re-md5="' + item.re_md5sum + '" ');
                    }
                    item['sq_md5sum'] = mapList[item.url]['sq_md5sum'] || '';
                    if(item['sq_md5sum'] && item['sq_md5sum'] !== '') {
                        attrHtml.push('d-sq-md5="' + item.sq_md5sum + '" ');
                    }
                }
                item = grid.tranData(item);
                _html.push('<li>');
                _html.push('<a href="' + item.url + '" d-title="' + item.title + '" d-image="' + item.image + '" ' + attrHtml.join('') + ' target="_blank">');
                _html.push('<img class="grid-img" src="' + item.image + '" width="150" height="100"/>');
                _html.push('<p class="grid-title">' + item.title + '</p>');
                _html.push('</a>');
                _html.push('</li>');
            }
            $dialog_grid.empty().append(_html.join(''));
        }

        // function getGridImage(data) {
        //     var img, md = mapList[data.url] || {};
        //     if(md['re_img']) {
        //         img = md['re_img']
        //     } else {
        //         var match = data.image.match(/(?:Re|Sq)\/(.+(\.jpg|png|gif)+)(?:\.webp)?/);
        //         img = match ? match[1] : 'offline.png'
        //     }

        //     if(maxthon.platform === 'Win') img += '.webp'
        //     if(md['re_md5sum']) {
        //         img += '?md5=' + md['re_md5sum']
        //     }
        //     return cdnServer + '/image/logo/Re/' + img;
        // }

        function renderUrlList(data, $dom) {
            var html = ['<ul>'];
            for (var i = 0; i < data.length; i++) {
                var d = data[i];
                html.push('<li>\
                        <a href="' + d.url + '" title="' + d.title + '">\
                            <img src="mx://favicon/' + d.url + '" alt="' + d.title + '" height="16" width="16" onerror="this.src=\'' + staticServer + '/img/icon/6000.png\'" class="nav-icon" />\
                            <span class="nav-text">' + d.title + '</span>\
                        </a>\
                        </li>');
            }
            html.push('</ul>');
            $dom.empty().append(html.join(''));
        }

        function getNoteListByPid(pid, cb) {
            maxthon.useApi('note.getNotesByPid', { 'pid': pid }, function (data) {
                var html = '';
                for (var i = 0; i < data.notes.length; i++) {
                    var d = data.notes[i] || {};
                    html += '<li>\
                            <div class="jstree-wholerow"></div>\
                            <a class="jstree-note" href="' + (d.et !== 1 ? "mx://note/?id=" + d.uuid + "&pid=" + pid : d.url) + '" title="' + d.fn + '" et="' + d.et + '">\
                                <img src="' + (d.et !== 1 ? staticServer + "/img/icon/node_icon_note.png" : "mx://favicon/" + d.url) + '" alt="' + d.fn + '" height="16" width="16" onerror="this.src=\'' + staticServer + '/img/icon/6000.png\'" class="nav-icon" />\
                                <span class="nav-text">' + d.fn + '</span>\
                            </a>\
                        </li>';
                }
                cb && cb(html);
            });
        }

        /**
         * 根据URL匹配相关图片列表
         * @param  {[type]}   url      [description]
         * @return {[type]}            [description]
         */
        function getImageFromUrl(url, callback) {
            if (url.length == 0) return;
            var qUrl = url.notUrl() ? 'http://' + url : url;
            var urlReg = /^((https|http)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
            if (!urlReg.test(qUrl)) return '';
            if (/http:\/\/go.maxthon.(cn|com)\/redir\/mx(4|5)\//.test(url)) {
                var qStr = url.getQueryString('f');
                switch (qStr) {
                    case 'tmall':
                        qUrl = 'http://jx.tmall.com';
                        break;
                    case 'fbmx5':
                        qUrl = 'https://www.facebook.com/maxthon';
                        break;
                    case 'jumei':
                        qUrl = 'http://bj.jumei.com/';
                        break;
                    case 'juhuasuan':
                        qUrl = 'https://ju.taobao.com/';
                        break;
                    case 'meituan':
                        qUrl = 'http://bj.meituan.com/';
                        break;
                    case 'aitaobao':
                        qUrl = 'http://ai.taobao.com/';
                        break;
                    case 'vipshop':
                        qUrl = 'http://www.vip.com/';
                        break;
                    case 'amazon':
                        qUrl = 'https://www.amazon.cn';
                        break;
                    case 'gome':
                        qUrl = 'http://www.gome.com.cn/';
                        break;
                    default:
                        qUrl = 'http://www.' + qStr + '.com';
                        break;
                }
            }

            var regex = /.*\:\/\/([^\/]*).*/;
            var match = qUrl.match(regex);
            var host = '', image = '';
            if (typeof match != "undefined" && null != match) {
                if ((match[0] === 'https://vk.com/maxthon_ru' ||
                    match[0] === 'https://facebook.com/maxthon.org.ru' ||
                    match[0] === 'http://maxthon.org.ru')) {
                    host = match[0];
                } else {
                    host = match[1];
                }
            }
            if (host === 'go.maxthon.com' || host === 'go.maxthon.cn') return '';
            // 自动匹配图片
            innerloop:
            for (var i = 0; i < SITE_LIST.length; i++) {
                var category = SITE_LIST[i];
                for (var j = 0; j < category.list.length; j++) {
                    var _category = category.list[j];

                    var _url = _category.url;
                    if (_url.indexOf(host) >= 0) { // 开头// 开头
                        image = _category.image;
                        i = SITE_LIST.length;
                        break innerloop;
                    }

                    if (_category.match) {
                        for (var k = 0; k < _category.match.length; k++) {
                            var __url = _category.match[k];
                            if (__url.indexOf(host) >= 0) { // 开头
                                image = _category.image;
                                i = SITE_LIST.length;
                                break innerloop;
                            }
                        }
                    }
                }
            }
            return image;
        }
        /**
         * 获取截图URL
         * @param  {[type]} url     [description]
         * @param  {[type]} reflush [description]
         * @return {[type]}         [description]
         */
        function getThumbsUrl(url, reflush) {
            if (reflush == 0)
                return 'mx://thumbs/?reflush=' + (reflush) + '&stamp=' + (new Date().getTime()) + '&url=' + url;
            if (window.onLine == true) {
                return 'mx://thumbs/?reflush=' + (reflush) + '&stamp=' + (new Date().getTime()) + '&url=' + url;
            } else {
                return cdnServer + '/image/logo/Re/offline.png';
            }
        }

        return {
            init: init,
            getThumbsUrl: getThumbsUrl,
            getImageFromUrl: getImageFromUrl,
            showDialog: showDialog
        }
    })(window);

    window.newWin = newWin;
});

/**
 * 监听器
 */
$(function () {
    var maxthon = window.Api.Maxthon, isSync = false;
    maxthon.useApi('quickaccess.addEventListener', {}, function (result) {
        if ($.isEmptyObject(result)) return;
        console.log(result);
        switch (result.type) {
            case 'thumbUpdated': // 截图完成
                var dataurl = result.data;
                // console.log(dataurl + '截图完成!');
                // 先后对两个网站截图，永远是最后一个完成的dataurl
                window.setTimeout(function(url) {handler(url)} ,0, dataurl);
                break;
            case 'guestSuccess': // MX4 guest数据导入成功
                window.Api.Grid.getGridDataList();
                break;
            case 'guest5Success': // MX5 guest数据导入成功
                window.Api.Grid.getGridDataList();
                break;
            case 'dataSyncCompleted':
                if (maxthon.max_version.cmpVersions('5.0.3.400') > 0) {
                    window.Api.Grid.getGridDataList();
                    return;
                }

                if (!isSync) {
                    isSync = true;
                    window.Api.Grid.getGridDataList();
                }
                break;
            case 'addNewSite':
                var g = {
                    url: result.url,
                    title: result.title
                }
                var regex = /.*\:\/\/([^\/]*).*/;
                var match = g.url.match(regex);
                var host = '';
                if (typeof match != "undefined" && null != match) {
                    host = match[1];
                }

                if (host !== '') {
                    innerloop:
                    for (var i = 0; i < SITE_LIST.length; i++) {
                        var category = SITE_LIST[i];
                        for (var j = 0; j < category.list.length; j++) {
                            var _category = category.list[j];

                            var _url = _category.url;
                            if (_url.indexOf(host) >= 0) { // 开头
                                g.image = _category.image;
                                i = SITE_LIST.length;
                                break innerloop;
                            }

                            if (_category.match) {
                                for (var k = 0; k < _category.match.length; k++) {
                                    var __url = _category.match[k];
                                    if (__url.indexOf(host) >= 0) { // 开头
                                        g.image = _category.image;
                                        i = SITE_LIST.length;
                                        break innerloop;
                                    }
                                }
                            }
                        }
                    }
                }
                if (!g.image) {
                    g.image = 'mx://thumbs/?reflush=0&stamp=' + (new Date().getTime()) + '&url=' + g.url;
                }

                Controller.onInsertGridItem(g);
                datacode.statistic({
                    'm': 'sendintoqa',
                    'data': {
                        'title': g.title,
                        'href': g.href
                    }
                });
                // 优先图
                break;
        }
    });

    function handler(dataurl) {
        /**
         * 文件夹缩略图
         */
        $grid_container.find('.thumbnail[url="' + dataurl + '"]').each(function (i, n) {
            var $this = $(n);
            $this.removeClass('loading').removeAttr('url')
                .css({ 'background-image': 'url(' + newWin.getThumbsUrl(dataurl, 0) + ')' });
        });

        if ($group_dialog.is(':visible')) {
            $group_dialog.find('li.loading').each(function (i, n) {
                var $this = $(n);
                var $link = $this.find('>a'),
                    $thumb = $link.find('.thumb'),
                    url = $link.attr('href');
                if (url === dataurl) {
                    $thumb.css({ 'background-image': 'url(' + newWin.getThumbsUrl(dataurl, 0) + ')' });
                    $this.removeClass('loading');
                    return true;
                }
            });
        }

        if (!$('#add-dialog').is(':visible')) {
            $top_container.find('li.loading').each(function (i, n) {
                var $this = $(n);
                var $link = $this.find('>a'),
                    url = $link.attr('href');

                if (url === dataurl) {
                    $link.css('background-image', 'url(' + newWin.getThumbsUrl(url, 0) + ')');
                    $this.removeClass('loading');
                }
                return true;
            });

            $grid_container.find('li.loading').each(function (i, n) {
                var $this = $(n);
                var $link = $this.find('>a'),
                    url = $link.attr('href');
                console.log(url + ' === ' + dataurl);
                if (url === dataurl) {
                    if (!$this.hasClass('no-img')) {
                        var imgurl = newWin.getThumbsUrl(url, 0);
                        $link.attr('data-image', imgurl);
                        $link.find('.thumb').css('background-image', 'url(' + imgurl + ')');
                    }
                    $this.removeClass('loading');
                }
                return true;
            });
        }
    }
});
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
/**
 *  页面初始化
 *  @author  guotingjie@maxthon.net
 */
$(function () {
    template.on('getLang', function(key) {
        return Language.getLang(key);
    });

    var lang = navigator.language.toLocaleLowerCase();
    Promise.all([getPageTpl(lang), getPageData(lang)])
    .then(function(data) {
        pageinit(data[0]);
        $('#page_data').append(data[1]);
    }).catch(function(err) {
        console.error(err)
    });

    function getPageData(lang) {
        var max_version = Api.Maxthon.max_version,
            _pn = Api.Maxthon.pn;

        var subfix = lang === 'zh-cn' ? lang : 'en-us';
        if (_pn === '7201577005' && lang === 'ru-ru') { // 渠道走专版
            subfix = lang;
        }
        if (_pn === 'ruixing' && lang === 'zh-cn' && max_version === '5.1.1.1000') {
            subfix = 'ruixing';
        }
        return getStore('page_data', 'local_page_data', lang, '/static/res/i18n/data_' + subfix + '.js');
    }

    function getPageTpl(lang) {
        return getStore('page_tpl', 'local_page_template', lang, '/static/res/tpl/page.tpl');
    }

    function getStore(id, key, lang, url) {
        return new Promise(function (resolve, reject) {
            var version = document.getElementById(id).getAttribute('version');
            var local = localStorage.getItem(key);
            if (local &&
                (local = JSON.parse(local)) &&
                local.lang === lang &&
                local.version === version &&
                !$.isEmptyObject(local.data)) {
               resolve(local.data);
            } else {
                $('#' + id).load(url + '?v=' + version, function(data) {
                    resolve(data);
                    localStorage.setItem(key, JSON.stringify({ 'version': version, 'lang': lang, 'data': data }));
                });
            }
        });
    }

    function pageinit(tpl) {
        var mapList = __PRELOAD__['map_list.json'] || JSON.parse(localStorage.getItem('MAP_LIST_JSON'));
        var activity;

        if(lang === 'zh-cn' && mapList && mapList['activity'] && mapList['activity'].length > 0) {
            var now = Date.now();
            mapList['activity'].forEach(function(_activity) {
                _activity.stime = _activity['stime'];
                _activity.etime = _activity['etime'];
                if(_activity.stime < now && now < _activity.etime) { // 处理活动开始结束之间
                    activity = _activity;
                }
            });
        }

        var pageHtml = template(tpl, {lang: lang, activity: activity});
        document.getElementById('wrapper').innerHTML = pageHtml;
        window.Api.Grid.getGridDataList(mapList, function() {
            // 页面配置初始化
            configPanel.init();
            newWin.init(mapList);
            // localStorage.setItem('__PAGEHTML__', document.getElementById('main').innerHTML);
        });

        activity && loadActivity(activity);
    }

    /**
     *  加载活动
     * @param {活动信息} activity
     */
    function loadActivity(activity) {
        getStore('activity_tpl',
                'local_act_template',
                lang,
                '/static/res/tpl/activity.tpl').then(function(tpl) {
            var actHtml = /*localStorage.getItem('__ACTHTML__') ? localStorage.getItem('__ACTHTML__') :*/ template(tpl, { activity: activity });
            document.getElementById('activity').innerHTML = actHtml;
            // localStorage.setItem('__ACTHTML__', actHtml);

            var hoverTimer;
            $('.nav-header-menu li').on('mouseover mouseout', function(e) {
                e.stopPropagation();
                var $this = $(this);
                var _index = $this.index();
                if(hoverTimer) clearTimeout(hoverTimer);
                hoverTimer = setTimeout(function(type) {
                    if (type == "mouseover") {
                        $this.siblings().removeClass('active');
                        $this.addClass('active');
                        _index === 1 && window.Api.statistic.webSend({
                            'm':'activityTab',
                            'n':'activityTitle',
                            'data' : {
                                'title' : $this.attr('data-t')
                            }
                        });
                        $('.nav-body > div').hide().eq(_index).show();
                    }
                }, 300, e.type);
            })

            if(activity.is_view === 'true') {
                $('.nav-header-menu li').eq(1).trigger('mouseover');
            }

            // 添加埋点
            $('#activity_container').on('mousedown', 'li a', function(e) {
                if(e.button === 2) return;
                var $this = $(this);
                var data = {
                    m: 'activityTab',
                    n: $this.attr('data-n'),
                    data: { 'title': $this.attr('title'), 'url': $this.attr('href')}
                };
                window.Api.statistic.webSend(data);
            })
        }).catch(function(err) {
            console.error(err)
        });
    }

    // 屏蔽页面右键
    $(document).on('contextmenu', function (e) {
        if (!$(e.target).is('input')) {
            e.preventDefault();
        }
    }).on('dragstart', function (e) { // 取消拖拽
        e.preventDefault();
        return false;
    });

    function skinStatistic(m) {
        window.Api.statistic.webSend({
            'm':m,
            'data' : {
                'title' : '2017双十一皮肤',
                'url' : 'https://s.click.taobao.com/9OZ6WYw'
            }
        });
    }

    document.getElementById('skin-top-btn').addEventListener('click', function(e) {
        e.stopPropagation();// 阻止冒泡事件执行
        document.getElementById('skin').style.cssText = 'display:none;';
        document.getElementById('siderbar').style.cssText = 'display:block;';
        localStorage.setItem("skin_display", 'false');
        document.body.className = localStorage.getItem('BODY_CLASS_NAME');
        localStorage.removeItem('BODY_CLASS_NAME');
        skinStatistic('backgroundClose');
    });

    document.getElementById('skin').addEventListener('click', function(e) {
        maxthon.webSend("newTabUpground", { url:'https://s.click.taobao.com/9OZ6WYw' }, function(msg){});
        skinStatistic('activityBackground');
    });

    window.replaceErrorIcon = function (ele) {
        // var _src = ele.src;
        // if (!_src.endWith('.webp')) {
        //     ele.src = _src + '.webp';
        // } else {
        //     ele.src = cdnServer + '/image/logo/Re/offline.png';
        // }
        // ele.onerror = null;
    }

    // 配置全局一个离线状态
    window.addEventListener('blur', function() {
        Menu.hideAndRemovePopupMenu();
    });

    // 改变URL不刷新整个页面
    history.pushState(null, null, '/');

    if(Api.Maxthon.max_version !== '5.1.2.3000') return;
    var firstLoad = function() {
        Api.Maxthon.getSyncValue('isFirstVisite', function(value) {
            if(!(value && value.status)) {
                // 中英文分别显示
                $('.siderbar .download').fadeIn();
                setTimeout(function() {
                    $('.siderbar .download').fadeOut().removeAttr('style');
                    window.removeEventListener('focus', firstLoad);
                    Api.Maxthon.setSyncValue('isFirstVisite', {status: true});
                }, 5000);
            }
        });
    }

    window.addEventListener('focus', function() {
        firstLoad()
    })

    if(lang !== 'zh-cn') { //
        $('.siderbar img').attr('src', '//pc-newtab-img.maxthon.com/static/img/qcode-foreign.png')
        $('.siderbar .title').text('Try MX5 App')
    }

    $('.siderbar li').removeClass('no')
});
