define("widget/topbanner/index",function(i,n,o){"use strict";function e(){a.on("click",".mining-go-collapse",function(i){i.stopPropagation(),i.preventDefault(),a.removeClass("isvisible"),localStorage.setItem("banner-coin-collapse","done"),window.Api.statistic.webSend({m:"Pluginlivesone",n:"Collapse",data:{}})}),a.on("click",".mining-go-lk",function(){var i=$(this).attr("href");window.Api.statistic.webSend({m:"Pluginlivesone",n:"ClickOn",data:{url:i}})})}var a=(window.Api.Maxthon,$("#top_banner")),t=($(".header"),"zh-cn"===navigator.language.toLocaleLowerCase());t||a.html('              <a class="mining-go-lk" href="http://extension.maxthon.com/detail/index.php?view_id=3127&category_id=" target="_blank">                  <div class="mining-go-inner">                      <i class="mod_actmark mod_actmark_top"></i>                      <p class="mining-go-title">Most downloaded recently: Mining  Go</p>                      <p class="mining-go-sub-title">Join browser mining, earn LVT easily！</p>                      <button class="mining-go-download-btn" style="padding: 8px 20px;right:80px;">Download Now</button>                      <i class="iconfont mining-go-collapse"></i>                  </div>              </a>          '),"Win"===window.Api.Maxthon.platform&&window.localStorage&&!localStorage.getItem("banner-coin-collapse")&&a.addClass("isvisible"),e(),o.exports={toggle:function(){a.hasClass("isvisible")?(a.removeClass("isvisible"),localStorage.setItem("banner-coin-collapse","done"),window.Api.statistic.webSend({m:"Pluginlivesone",n:"Collapse",data:{}})):(a.addClass("isvisible"),localStorage.removeItem("banner-coin-collapse"))}}});