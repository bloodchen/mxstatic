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
            $config_layer = $('#config-layer');
            $config_button = $('#config-button');
            $config_main = $config_layer.find('.skin-img-list');
            $background_list = $config_layer.find('.skin-img-list');

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
            if(version.cmpVersions('5.0.4.400') < 0) {
                background.splice(2, 5);
                background.splice(background.length - 1, 1);
            }
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
                    if(!backgroundData) { // 兼容显示
                        backgroundData = background[0];
                    }
                    if (backgroundData.type === 'picture') {
                        switchBackgroundImage((buildImgUrl(backgroundData.pic, false)));
                    } else {
                        switchBackgroundVideo(option.bgIndex, backgroundData.pic);
                    }
                    $background_list.find('>li').removeClass('selected').eq(option.bgIndex).addClass('selected');
                    // UI适配
                    switchDarkOrLight(backgroundData.brightness);
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
                    switchVideoPlayStatus(true);
                    option.play = true;
                } else {
                    switchVideoPlayStatus(false);
                    option.play = false;
                }
                saveOption(option);
            });

            var playFlag = false;
            function onVisibilityChanged(event) {
                var hidden = event.target.webkitHidden;
                if (hidden) {
                    if(!media.paused) {
                        switchVideoPlayStatus(false);
                        playFlag = true;
                    }
                } else {
                    if(playFlag === true && media.paused) {
                        switchVideoPlayStatus(true);
                        playFlag = false;
                    }
                }
            }
            // 解决新标签页进入后台后，暂停播放，显示到前台继续播放
            document.addEventListener("webkitvisibilitychange", onVisibilityChanged, false);
        }

        function switchBackgroundImage(src) {
            $wallpapers.css({ 'background-image': 'url(' + src + ')' });
            media.removeAttribute('src');
            media.removeAttribute('poster');
            media.style.display = 'none';
            switchVideoPlayStatus(false);
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
                switchVideoPlayStatus(true);
            } else {
                switchVideoPlayStatus(false);
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

        function switchVideoPlayStatus(isPlay) {
            if (isPlay) {
                media.play();
            } else {
                media.pause();
            }
            media.autoplay = !!isPlay;
        }

        function getOption(cb) {
            Maxthon.getSyncValue('noSyncData', function (config) {
                if(config.bgIndex === undefined || config.bgIndex === 14) { // 陈小醋恢复默认
                    config.bgIndex = 4;
                }
                cb(config);
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
                $.getScript('/static/js/lib/rgbaster.js', function () {
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
