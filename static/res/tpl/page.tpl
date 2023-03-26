<ul id="top" class="clearfix"></ul>
<div id="main">
    <div class="nav-header clearfix">
        <ul class="nav-header-menu">
            <% if (this.activity) { %>
                <li <% if(this.activity.is_view !== 'true') {%> class="active menu-favor" <% } %> data-menu-name="favor">
                    <a href="javascript:void(0);"><%= this.getLang('MyFavorites') %></a>
                </li>
                <!-- <% if (this.lang && this.lang === 'zh-cn') { %>
                <li class="menu-feed spotlight" data-menu-name="feed">
                    <a href="javascript:void(0);">头条新闻</a>
                </li>
                <% } %> -->
                <li <% if(this.activity.is_view === 'true') {%> class="active menu-activity" <% } %>  data-t="<%= this.activity.title %>" data-menu-name="activity">
                    <a href="javascript:void(0);">
                        <img src="<%= this.activity.img %>" alt="<%= this.activity.title %>" style="vertical-align:middle;width:100%;position:relative;top:-12px;"/>
                    </a>
                </li>
            <% } else {%>
               <li class="active menu-favor" data-menu-name="favor">
                    <a href="javascript:void(0);"><%= this.getLang('MyFavorites') %></a>
                </li>
                <!-- <% if (this.lang && this.lang === 'zh-cn') { %>
                <li class="menu-feed spotlight" data-menu-name="feed">
                    <a href="javascript:void(0);">头条新闻</a>
                </li>
                <% } %> -->
            <% } %>
        </ul>
    </div>
    <div class="nav-body">
        <div id="quickaccess" class="quickaccess">
            <ul id="grid_list_container" class="grid-list-container"></ul>
        </div>
        <% if (this.lang && this.lang === 'zh-cn') { %>
        <div id="infobox" class="infobox clearfix">
            <div id="news-feed" class="news-feed">
                <div class="feed-header-box">
                    <div class="feed-header"></div>
                </div>
                <div class="feed-content allow-drag">
                    <div class="news-loading"><i></i>加载中...</div>
                    <div class="news-load-error"><i></i>加载失败，请<a href="javascript:;">重试</a></div>
                </div>
            </div>
            <div id="hot-word" class="hot-word">
                <div class="word-header-box">
                    <span>知乎热搜榜</span>
                    <a id="word-header-fresh" class="word-header-fresh" href="#"><i></i>换一换</a>
                </div>
                <div class="word-content allow-drag" id="word-content">
                </div>
            </div>
            <a href="javascript:;" id="back_top" class="back_top" title="返回顶部"><i></i></a>
        </div>
        <% } %>
        <% if (this.activity) { %>
            <div id="activity" class="activity">
                <ul id="activity_container" class="activity-container"></ul>
            </div>
        <% } %>
        <a id="activity-floater" target="_blank" href="https://s.click.taobao.com/fxQuJvu" class="floater" tags='tmall_20201111'><span></span></a>
    </div>
</div>
<!-- 添加快速拨号 -->
<div id="add-dialog" class="dialog">
    <div class="dialog-warp">
        <div class="dialog-header">
            <ul class="dialog-nav">
                <li class="selected"><%= this.getLang('SuggestedWebSite') %></li>
                <li><%= this.getLang('CustomAddTab')%></li>
            </ul>
            <a class="close">×</a>
        </div>
        <div class="dialog-body">
            <article id="grid_list" class="clearfix">
                <ul class="grid-nav">
                    <% if (this.lang && this.lang === 'zh-cn') { %>
                    <li class="current" data-code="default">
                        <a href="javascript:void(0);">热门网址</a>
                    </li>
                    <li data-code="news">
                        <a href="javascript:void(0);">新闻资讯</a>
                    </li>
                    <li data-code="videos">
                        <a href="javascript:void(0);">影视频道</a>
                    </li>
                    <li data-code="shopping">
                        <a href="javascript:void(0);">网上购物</a>
                    </li>
                    <li data-code="social">
                        <a href="javascript:void(0);">社交网络</a>
                    </li>
                    <li data-code="fiction">
                        <a href="javascript:void(0);">文学小说</a>
                    </li>
                    <li data-code="game">
                        <a href="javascript:void(0);">游戏娱乐</a>
                    </li>
                    <li data-code="service">
                        <a href="javascript:void(0);">生活服务</a>
                    </li>
                    <% } else {%>
                    <li class="current" data-code="default">
                        <a href="javascript:void(0);">Featured</a>
                    </li>
                    <li data-code="social">
                        <a href="javascript:void(0);">Social</a>
                    </li>
                    <li data-code="newsmedia">
                        <a href="javascript:void(0);">News&Media</a>
                    </li>
                    <li data-code="shopping">
                        <a href="javascript:void(0);">Shopping</a>
                    </li>
                    <li data-code="tools">
                        <a href="javascript:void(0);">Tools</a>
                    </li>
                    <% }%>
                </ul>
                <div class="grid-search">
                    <input id="grid_search_btn" name="" type="input" placeholder="<%= this.getLang('SearchEnterURL') %>" />
                    <span class="grid-search-icon"></span>
                </div>
                <ul class="dialog-grid-list"></ul>
            </article>
            <article class="dialog-custome-add clearfix" style="display:none;">
                <div class="dialog-input clearfix">
                    <input name="title" type="input" class="input fl" placeholder="<%= this.getLang('EnterTitle') %>" style="width: 30%;margin-left: 0px;margin-right: 2px;"/>
                    <input name="url" type="input" class="input fr" placeholder="<%= this.getLang('EnterUrl') %>*" autocomplete="off" />
                    <p class="error"><em>icon</em><span><%= this.getLang('EnterTitle') %></span></p>
                </div>
                <div class="dialog-input clearfix">
                    <ul class="tab">
                        <li class="hover" title="<%= this.getLang('CurrentlyOpen') %>"><%= this.getLang('CurrentlyOpen') %></li>
                        <li title="<%= this.getLang('MostVisited') %>"><%= this.getLang('MostVisited') %></li>
                        <li title="<%= this.getLang('Maxnote') %>"><%= this.getLang('Maxnote') %></li>
                        <li title="<%= this.getLang('LastSession') %>"><%= this.getLang('LastSession') %></li>
                    </ul>
                    <div class="main-warp">
                        <div class="main"></div>
                        <div class="main hide"></div>
                        <div class="main hide"></div>
                        <div class="main hide"></div>
                    </div>
                </div>
                <div class="dialog-input clearfix">
                    <div class="radio-list">
                        <label for="recommendlogo" title="<%= this.getLang('Hot') %>"><%= this.getLang('Hot') %></label>
                    </div>
                    <div class="radio-list selected">
                        <label for="screenshot" title="<%= this.getLang('Screenshot') %>"><%= this.getLang('Screenshot') %></label>
                    </div>
                    <div class="radio-list">
                        <label for="colorblock" title="<%= this.getLang('ColorBlock') %>"><%= this.getLang('ColorBlock') %></label>
                    </div>
                    <ul id="color_font" class="color-block-list disable">
                        <li class="color-block-6 selected"></li>
                        <li class="color-block-5"></li>
                        <li class="color-block-4"></li>
                        <li class="color-block-8"></li>
                        <li class="color-block-1"></li>
                        <li class="color-block-3"></li>
                        <li class="color-block-7"></li>
                        <li class="color-block-2"></li>
                        <li class="color-block-9"></li>
                    </ul>
                </div>
                <div class="dialog-input clearfix">
                    <button id="dialog_add_btn" type="button">添加此项</button>
                </div>
            </article>
        </div>
    </div>
</div>
<div id="config-layer">
    <h4>
        <i class="close">×</i>
    </h4>
    <div class="c-layer-main">
        <div class="c-layer-title">
            <span title="<%= this.getLang('SelectBackground') %>"><%= this.getLang('SelectBackground') %></span>
            <i class="tips">
                <p><%= this.getLang('SelectBackgroundNotice') %></p>
            </i>
        </div>
        <div class="a-upload">
            <a href="javascript:void(0);" class="upload" id="upload">+</a>
        </div>
        <ul class="skin-img-list"></ul>
    </div>
</div>

<!-- 热门插件弹窗 -->
<div id="hot-plugin-dialog" class="dialog hot-plugin">
    <div class="dialog-warp">
        <div class="dialog-header">
            <ul class="dialog-nav">
                <li><%= this.getLang('hotPluginTitle') %></li>
            </ul>
            <a class="close">×</a>
        </div>
        <div class="dialog-body">
            <div class="plugin-new-wrapper">
                <div class="plugin-new clearfix" id="plugin-new">
                </div>
            </div>
            <div class="plugin-list-wrapper">
                <div class="plugin-list" id="plugin-list">
                </div>
            </div>
        </div>
    </div>
<div>
