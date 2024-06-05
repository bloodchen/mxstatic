/**
 * 618活动
 * @return {[type]} [description]
 */
$(function () {

    function skinStatistic(m) {
        window.Api.statistic.webSend({
            'm':m,
            'data' : {
                'title' : '618活动',
                'url' : 'https://s.click.taobao.com/gKjj8Qw'
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
        maxthon.webSend("newTabUpground", { url:'https://s.click.taobao.com/gKjj8Qw' }, function(msg){});
        skinStatistic('activityBackground');
    });

    var skinDisplay = false; // 时间区间判断

    try {
        var now = Date.now();
        if(navigator.language.toLocaleLowerCase() === 'zh-cn' && 
            (now > (new Date('2018-06-14 00:00:00').getTime()) && now < (new Date('2018-06-15 00:00:00')).getTime())) {
            skinDisplay = JSON.parse(localStorage.getItem("skin_display") || true);
        }
    } catch(e) {
        skinDisplay = false;
    }
    
    // 显示活动皮肤开关
    if(skinDisplay === true) {
        localStorage.setItem('BODY_CLASS_NAME', document.body.className);
        document.body.className = '';
        document.getElementById('skin').style.display = 'block';
        document.getElementById('siderbar').style.display = 'none';
    }
});
