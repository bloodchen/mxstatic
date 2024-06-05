<div class="after"></div>
<div class="sb-header">
    <ul class="sb-header-nav">
        <li>
            <a class="sb-nav-link">${data.Recommend}</a>
        </li>
        <li>
            <a class="sb-nav-link">${data.Customize}</a>
        </li>
        <li>
            <a class="sb-nav-link">${data.Background}</a>
        </li>
        <li>
            <a class="sb-nav-link">${data.Settings}</a>
        </li>
    </ul>
    <button class="close close-btn"></button>
</div>
<div class="sb-content">
<div class="sb-section pl20">
    <h3>添加推荐站点</h3>
    <div class="sb-search-box clearfix">
        <input type="text" id="search_url" class="input" placeholder="输入网址..." autocomplete="off" />
    </div>
    <ul class="left-nav fl">
        <li class="current">热门网址</li>
        <li>新闻资讯</li>
        <li>影视频道</li>
        <li>网上购物</li>
        <li>社交网络</li>
        <li>文学小说</li>
        <li>游戏娱乐</li>
        <li>生活服务</li>
    </ul>
    <div class="right-content fr">
    </div>
</div>
<div class="sb-section pl20 pr20 hide">
    <h3>图标预览</h3>
    <div class="preview-wrap">
        <div class="preview">
            <a href="javascript:void(0);" class="empty"></a>
            <input type="hidden" id="custome_image" />
            <button id="upload_btn" class="upload">上传图标</button>
        </div>
        <p class="describe">建议图标尺寸：128 <em>x</em> 128<em>px</em></p>
        <p class="describe">建议图标大小：100<em>kb</em> 以内</p>
    </div>
    <div class="input-box clearfix">
        <span class="fl label">网址</span>
        <div class="fl">
            <input type="hidden" id="custome_index" />
            <input type="text" id="custome_url" placeholder="请输入网址..." autocomplete="off" />
        </div>
    </div>
    <div class="input-box clearfix">
        <span class="fl label">标题</span>
        <div class="fl"><input type="text" id="custome_title" placeholder="请输入标题..." autocomplete="off"></div>
    </div>
    <div class="btn-group clearfix">
        <button id="save_btn" class="btn fl"><span>保存</span></button>
    </div>
</div>
<div class="sb-section pl20 hide">
    <h3 class="help">
        <span>${data.SelectBackground}</span>
        <p class="help-tips">${data.SelectBackgroundNotice}</p>
    </h3>
    <ul class="sb-bg clearfix">
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-01.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-02.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-03.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-04.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-05.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-06.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-07.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-08.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-09.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-10.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-11.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-12.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-13.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-14.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-15.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-16.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-17.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-18.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-19.png" alt="" width="150" height="100" />
        </li>
        <li class="fl sb-bg-item">
            <button class="bg-btn play"></button>
            <img src="/static/img/bg/preview/bj-20.png" alt="" width="150" height="100" />
        </li>
    </ul>
    <div class="btn-group fixed-bar">
        <button id="custome_upload_bg_btn" class="btn fl"></button>
    </div>
</div>
<div class="sb-section pl20 pr20 hide">
    <h3>${data.SyncDataAutomatically}</h3>
    <div class="split-line">
        <div class="toggle">
            <input type="checkbox" id="open-async-data" class="toggle-checkbox" checked="checked"/>
            <label class="toggle-btn" for="open-async-data">
                <span class="toggle-feature" data-label-on="on" data-label-off="off"></span>
            </label>
        </div>
        <p>${data.SyncDataAutomaticallyNotice}</p>
    </div>
    <h3>${data.DynamicBackground}</h3>
    <div class="split-line">
        <div class="toggle">
            <input type="checkbox" id="open-dynamic-background" class="toggle-checkbox" checked="checked"/>
            <label class="toggle-btn" for="open-dynamic-background">
                <span class="toggle-feature" data-label-on="on" data-label-off="off"></span>
            </label>
        </div>
        <p>${data.DynamicBackgroundNotice}</p>
    </div>
    <h3>${data.OftenVisit}</h3>
    <div class="split-line">
        <div class="toggle">
            <input type="checkbox" id="open-most-visit" class="toggle-checkbox" checked="checked"/>
            <label class="toggle-btn" for="open-most-visit">
                <span class="toggle-feature" data-label-on="on" data-label-off="off"></span>
            </label>
        </div>
        <p>${data.OftenVisitNotice}</p>
    </div>
    <h3>${data.RecoverDefaultSettings}</h3>
    <div class="split-line">
        <button class="reset-btn">${data.RecoverNow}</button>
        <p>${data.RecoverDefaultSettingsNotice}</p>
    </div>
</div>
</div>