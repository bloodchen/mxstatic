$(function () {

    var locale = navigator.language.toLowerCase();
    var baseUrl = locale == 'zh-cn' ? '//extension.maxthon.cn' : '//extension.maxthon.com';
    var lastmodify;

    $(document).on('click', '.switch-action', function (ev) {
        var dialog = $('#hot-plugin-dialog');
        if (lastmodify) {
            localStorage.setItem('has-update-plugin-' + locale, lastmodify);
        }
        $(this).removeClass('has-update');
        dialog.show();
        dialog.find('.close').one('click', function (ev) {
            dialog.hide();
        });
    });

    getData();

    function getData (cb) {
        $.getJSON(baseUrl + '/server/hot.php', parseDate).done(function () {
            // console.log(arguments);
        }).fail(function () {
            console.log(arguments);
        });

        if (typeof cb == 'function') {
            cb();
        }
    }

    function parseDate (data) {
        data = data || {};
        if (data.lastmodify != localStorage.getItem('has-update-plugin-' + locale)) {
            lastmodify = data.lastmodify;
            $('.switch-action').addClass('has-update');
        }
        buildNew(data.data.slice(0, 2));
        buildList(data.data.slice(2, 6));
        registerEvent();
    }

    function buildNew (data) {
        $('#plugin-new').html(data.map(buildNewItem));
    }

    function buildNewItem (item) {
        return '<div class="plugin-new-item" file_def="' + item.file_def + '" file_url="' + item.download_url + '" file_id="' + item.file_id + '">' +
                    '<a href="' + item.url + '" target="_blank">' +
                        '<div class="plugin-new-tag"></div>' +
                        '<img src="' + item.icon_img + '" alt="" class="plugin-new-img">' +
                        '<div class="plugin-new-info">' +
                            '<div class="plugin-new-title">' + item.title +'</div>' +
                            '<div class="plugin-new-desc">' + item.desc + '</div>' +
                        '</div>' +
                    '</a>' +
                    '<a href="' + item.download_url + '" class="plugin-new-add">' + Language.getLang('hotPluginAdd') + '</a>' +
                '</div>';
    }

    function buildList (data) {
        var list = data.map(buildListItem);
        list.push(buildListMore());
        $('#plugin-list').html(list);
    }

    function buildListItem (item) {
        return '<div class="plugin-list-item" file_def="' + item.file_def + '" file_url="' + item.download_url + '" file_id="' + item.file_id + '">' +
                    '<a href="' + item.url + '" target="_blank">' +
                        '<img src="' + item.icon_img + '" alt="">' +
                        '<div class="plugin-list-title">' + item.title + '</div>' +
                        '<a href="' + item.download_url + '" class="plugin-list-btn">' + Language.getLang('hotPluginAdd') + '</a>' +
                    '</a>' +
                '</div>';
    }

    function buildListMore () {
        return '<a href="' + baseUrl + '/all/hot.php" target="_blank" class="plugin-list-add">' +
                    '<i></i>' +
                    '<div class="plugin-list-title">' + Language.getLang('hotPluginMore') + '</div>' +
                '</div>';
    }

    function registerEvent () {
        $('.plugin-list-btn, .plugin-new-add').on('click', function (ev) {
            if (window.external && external.mxCall) {
                ev.preventDefault();
                getInstallMessage($(this).parent(), 'app');
            }
        });
    }

    function getInstallMessage(packMxAttr, type) {
        if (type === 'skin') {
            // 浏览器框架版本号
            var frameVersion = external.mxCall('GetSkinFxVersion');
        }
        else if (type === 'app') {
        // 浏览器框架版本号
            var frameVersion = external.mxCall('GetAppFxVersion');
            // 下个版本上了就删掉--
            if (frameVersion === '1.0.0') {
                frameVersion = '1.0.1';
            }
            // --下个版本上了就删掉
        }
        // 插件包框架版本号
        var packMxVersion = packMxAttr.attr('file_def');
        // 插件包url
        var packUrl = packMxAttr.attr('file_url');
        // 插件id
        var packId = packMxAttr.attr('file_id');
        installPack(frameVersion, packMxVersion, packUrl, type, packId);
    }

    function installPack(frameVersion, packMxVersion, packUrl, type, packId) {
        var isInstall = returnIsInstall(frameVersion, packMxVersion);
        if (isInstall !== -1) {
            packUrl = packUrl.replace(/^https/, 'http');
            if (type === 'skin') {
                external.mxCall('InstallSkin', packUrl);
            }
            else if (type === 'app') {
                external.mxCall('InstallApp', packUrl);
            }
        } else {
            window.open(packUrl);
        }
    }

    function returnIsInstall(frameVersion, packMxVersion) {
        var fvItem;
        var pvItem;
        var frameVersion = getVersionArr(frameVersion);
        var packMxVersion = getVersionArr(packMxVersion);
        // 定义增长索引值.
        var i = 0;
        while (1) {
            fvItem = frameVersion[i];
            pvItem = packMxVersion[i];
            if (fvItem == null && pvItem == null) {
                return 0;
            }
            if (fvItem == null) {
                return -1;
            }
            if (pvItem == null) {
                return 1;
            }
            if (fvItem != pvItem) {
                var value = fvItem > pvItem ? 1 : -1
                return value;
            }
            i++;
        }
    }

    function getVersionArr(version) {
        var versionArr = version.split('.');
        for (var i = 0; i < versionArr.length; i++) {
            versionArr[i] = parseInt(versionArr[i], 10);
        };
        return versionArr;
    }

});
