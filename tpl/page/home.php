<!doctype html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="renderer" content="webkit" />
    <!-- 使用modjs作为资源加载器 -->
    <?php framework('static/js/lib/mod.js'); ?>

    <!-- 标记css输出位置 -->
    <?php placeholder('css');?>

    <!-- 加载css -->
    <?php import('static/css/reset.css'); ?>
    <?php import('static/css/common.css'); ?>
    <?php import('static/css/layout.css'); ?>
    <?php import('static/css/menu.css'); ?>
    <?php import('static/css/poup.css'); ?>
    <?php import('static/css/main.css'); ?>
    <?php import('static/css/siderbar.css'); ?>
    <?php import('static/css/hot-plugin.css'); ?>
    <?php import('static/css/infobox.css'); ?>
    <!-- 加载同步的js -->
    <?php import('static/js/lib/jquery-2.2.4.min.js'); ?>
    <?php import('static/js/lib/string.js'); ?>
    <?php import('static/js/lib/dialog.js'); ?>
    <?php import('static/js/lib/jsTree.js'); ?>
    <?php import('static/js/lib/template.js'); ?>
    <?php import('static/js/menu.js'); ?>
    <?php import('static/js/api.js'); ?>
    <?php import('static/js/language.js'); ?>
    <?php import('static/js/grid.js'); ?>
    <?php import('static/js/settings.js'); ?>
    <?php import('static/js/newWin.js'); ?>
    <?php import('static/js/datacode.js'); ?>
    <?php import('static/js/index.js'); ?>
    <?php import('static/js/info-service.js'); ?>
    <?php import('static/js/hot-plugin.js'); ?>
    <script type="text/javascript">
      // 数据请求提前发出， 提升一秒左右的速度
      var __PRELOAD__ = {
          mackCb: function(cgi) {
              return function(data) {
                  if (typeof __PRELOAD__[cgi] === 'function') {
                      __PRELOAD__[cgi](data);
                  }
                  __PRELOAD__[cgi] = data || {};
                  localStorage.setItem('MAP_LIST_JSON', JSON.stringify(data || {}));
              }
          }
      }
      var __PRELOAD__CB__0 = __PRELOAD__.mackCb('map_list.json');
    </script>
    <script src="//pc-newtab.maxthon.com/api/data/misc.php?res=map&callback=__PRELOAD__CB__0&lang=zh-cn"></script>
</head>
<body class="light">
  <!-- 节日皮肤组件 -->
  <?php widget("widget/skin/skin.php"); ?>
  <!-- 横幅广告 -->
  <?php //widget("widget/topbanner/index.php"); ?>
  <!-- 个人信息组件 -->
  <?php widget("widget/header/header.php"); ?>

  <!-- 搜索引擎组件 -->
  <?php widget("widget/search/search.php"); ?>

  <!-- 我的站点 -->
  <div id="wrapper">
      <ul id="top" class="clearfix"></ul>
      <div id="main"></div>
  </div>

  <!-- 引入侧边栏组件 -->
  <?php //widget("widget/sidebar/sidebar.php"); ?>
  <div id="siderbar" class="siderbar">
      <ul>
          <li>
              <span id="config-button"></span>
          </li>
      </ul>
  </div>
  <!-- 引入文件夹弹框组件 -->
  <?php widget("widget/group/group.php"); ?>
  <!-- 加载一些对开发有用的片段 -->
  <?php widget("widget/fragment/fragment.php"); ?>
  <!-- 加载组件及对应依赖的js和css -->
  <div id="wallpapers">
    <div class="anim_fade_image"></div>
    <!-- poster 一个初始化的画面, 解决黑屏的问题  -->
    <video id="media" autoplay muted preload="true" loop="loop"></video>
  </div>
  <script type="text/javascript">
    var staticServer = 'https://pc-newtab-img.maxthon.com/static',
      cdnServer = staticServer + '/v1.1',
      skinDisplay;
  </script>
  <!--
    收集script片段并分析其依赖。
    如果不想改变内嵌js的位置可以不用php包裹，但注意此时可能modjs还没加载
  -->
  <?php scriptStart(); ?>
    <script type="text/javascript">
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js', { scope: '/' })
                .then(function (reg) {
                    // 注册
                    if (reg.installing) {
                        console.log('Service worker installing at scope: ' + reg.scope);
                    } else if (reg.waiting) {
                        console.log('Service worker installed at scope: ' + reg.scope);
                    } else if (reg.active) {
                        console.log('Service worker active at scope: ' + reg.scope);
                    }
                });
        } else {
            console.log('Service Worker is not supported in this browser.');
        }
    </script>
  <?php scriptEnd(); ?>
  <!-- js输出位置，放在底部加快页面解析 -->
  <?php placeholder('js'); ?>
  <div class="hide">
    <script type="text/javascript" src='https://w.cnzz.com/c.php?id=1277867296&l=3'></script>
  </div>
</body>
</html>
