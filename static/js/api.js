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
            // $.ajax({
            //     url: 'https://i.maxthon.cn:3000/interface',
            //     dataType: 'json',
            //     method: 'post',
            //     data: {
            //         name: name,
            //         params: params
            //     },
            //     success: function (data) {
            //         if (cb && data.status && data.status === true) {
            //             cb(data.result);
            //         } else {
            //             cb && cb({});
            //         }
            //     },
            //     error: function () {
            //         // debugger;
            //         console.log(arguments)
            //     }
            // });
            //     return;

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
                    url: '/api/data/convert.php',
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
                html: '<div class="dialog-warp">\
                            <div class="dialog-header">\
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
                            </div>\
                        </div>',
                autoClose: false,
                after: function ($dialog) {
                    $dialog.one('click', '.close', function () {
                        noteIsDialog.close();
                    });
                }
            });
        }

        function showDeleteFolder(obj) {
            var deleteFolderDialog = $('#delete_folder').dialog({
                html: '<div class="dialog-warp">\
                            <div class="dialog-header">\
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
                            </div>\
                        </div>',
                autoClose: false,
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
                } else {
                    mx5_layout = mx5_layout || [];
                    $.each(mx5_layout, function (index, item) {
                        if (item == null) {
                            mx5_layout.splice(index, 1);
                            return true;
                        }
                        if (item.title === 'Amazon' && item.url === "https://www.amazon.com/?&_encoding=UTF8&tag=wwwmaxthoncom-20&linkCode=ur2&linkId=03c18e2e974eec1d1c03438460a881af&camp=1789&creative=9325") {
                            item.url = 'http://go.maxthon.com/redir/mx5/qa.htm?f=mx5qaamazon';
                        }
                        if (item.title === 'Amazon' && item.url === "https://www.amazon.com/?tag=maxthon0c7-20") {
                            item.url = 'http://go.maxthon.com/redir/mx5/qa.htm?f=mx5qaamazon';
                        }
                        if ((item.title === 'Booking' || item.title === '缤客') && item.url === "http://go.maxthon.cn/redir/mx5/qa.htm?f=booking") {
                            item.title = '腾讯新闻';
                            item.url = 'http://go.maxthon.cn/redir/mx5/qa.htm?f=txxw';
                            item.image = 'https://pc-newtab-img.maxthon.com/static/v1.1/image/logo/Sq/txxw.png';
                        }
                    });
                }

                maxthon.getSyncValue('needImport', function (data) {
                    // if (data.needImport && data.needImport == true) { // 需要导入MX4 guest数据
                    //     maxthon.getLayout('qa_layout_guest', 'qa_widget_guest', function (mx4_layout_guest) {
                    //         maxthon.mx4_2_mx5({
                    //             'mx4_layout_guest': JSON.stringify(mx4_layout_guest),
                    //             'mx5_layout': JSON.stringify(mx5_layout),
                    //             'import': 'mx4'
                    //         }, function (result) {
                    //             // 设置为已导入
                    //             maxthon.setSyncValue('needImport', { 'needImport': false });
                    //             Controller.onGetGridList(result, MAP_LIST);
                    //         });
                    //     });
                    //     return;
                    // }

                    // if (data.needImport5 && data.needImport5 == true) { // 需要导入MX5 guest数据
                    //     maxthon.getSyncValue('my_site_guest', function(mx5_layout_guest) {
                    //         maxthon.mx4_2_mx5({
                    //             'mx5_layout_guest': JSON.stringify(mx5_layout_guest),
                    //             'mx5_layout': JSON.stringify(mx5_layout),
                    //             'import': 'mx5'
                    //         }, function (result) {
                    //             // 设置为已导入
                    //             maxthon.setSyncValue('needImport', { 'needImport5': false });
                    //             Controller.onGetGridList(result, MAP_LIST);
                    //         });
                    //     });
                    //     return;
                    // }
                });
                Controller.onGetGridList(mx5_layout, MAP_LIST);
                // 页面配置初始化
                configPanel.init();
                newWin.init(MAP_LIST);
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
            var _czc = window._czc || [];
            img.src = url + str;
            _czc.push(﻿['_trackEvent', data.m + (data.n||''), (data.o || data.n || data.m), data.dt]);
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
