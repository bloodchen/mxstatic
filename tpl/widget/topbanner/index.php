<div id="top_banner">
    <a class="mining-go-lk" href="http://extension.maxthon.cn/detail/index.php?view_id=3127&category_id=" target="_blank">
        <div class="mining-go-inner">
            <i class="mod_actmark mod_actmark_top"></i>
            <p class="mining-go-title">最近大家都在下载：挖矿GO</p>
            <p class="mining-go-sub-title">参与浏览器挖矿, 在线使用轻松赚币!</p>
            <button class="mining-go-download-btn">下载插件</button>
            <i class="iconfont mining-go-collapse"></i>
        </div>
    </a>
</div>

<!-- 收集style片段以便在顶部输出,style标签可选 -->
<?php styleStart() ?>
    <style type="text/css">
        #navigation .mod_actmark_top{
            background-image: url(https://pc-newtab-img.maxthon.com/static/img/boot_logo/mining_logo_new.png)!important;
        }
    </style>
<?php styleEnd() ?>
<?php scriptStart(); ?>
    <script type="text/javascript">
        $(function() {
            var topbanner = require('widget/topbanner/index');
            $(document).on('click', '.switch-action', function() {
                topbanner.toggle();
            })
        })
    </script>
<?php scriptEnd(); ?>
