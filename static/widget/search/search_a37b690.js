define("widget/search/search",function(){"use strict";function e(e){c.css({"background-image":"url(mx://favicon/"+e.url+")"}),"5cstlvtmining201712v1"===o.pn&&o.max_version.cmpVersions("5.2.2.1000")<=0&&e.url.match(/https?:\/\/www.sogou.com\/sogou/)&&(e.url="https://www.sogou.com/web?query=%us");var n=e.url.split("?"),t=n[0];if(n[1]){var a=n[1].match(/[\w\-]+=%[\w\-]+/g),i=a[0].split("=")[0],s=new RegExp("&*"+a+"&*","g"),r=n[1].replace(s,"&").replace(/^&+|&+$/g,"");p.attr("name",i),r=r.replace(/^&+|&+$/g,"");for(var d=r.split("&"),u=$("<div>",{"class":"extra-param"}),f="",h=0;h<d.length;h++){var m=d[h].indexOf("="),v=d[h].substring(0,m),w=d[h].substring(m+1);f+='<input type="hidden" name="'+v+'" value="'+w+'">'}g.find(".extra-param").remove(),g.append(u),u.html(f)}l.text(e.name),g.attr("action",t),"百度"!=e.name||e.url.match(/^https/)||g.attr("action",t.replace("http","https"))}function n(){var e=$('<div id="zoom-box"></div>'),n=document.body.getBoundingClientRect();e.appendTo("body"),e.css({left:n.left+"px",top:n.top+"px",right:n.right+"px",bottom:n.bottom+"px"}),e.addClass("in"),setTimeout(function(){e[0].style.cssText="",e[0].style.opacity=1},10)}function t(){d.hide(),l.addClass("down"),$(document).off("keydown"),d.find("p").removeClass("hover")}function a(e,n){{var t='<div class="engine-list-inner">';u.lang}n.forEach(function(e,n){t+="<p data-engine="+n+'><img src="mx://favicon/'+e.url+'" /><span>'+e.name+"</span></p>"}),t+="</div>",e.empty().append(t),p.attr("placeholder",u.lang[s]||u.lang["en-us"]),c.attr("title",Language.getLang("SelectDefaultEngine"))}function i(){o.useApi("config.getMultiValues",{keys:"['browser.general.search_engine_list2', 'browser.general.default_search_engine2']"},function(n){n=JSON.parse(n);var i=JSON.parse(n[0]||[]),s=JSON.parse(n[1]||{});e(s),a(d,i),r.on("click",".engine-list p",function(n){var a=i[$(this).index()];e(a),o.useApi("config.set",{key:"browser.general.default_search_engine2",value:JSON.stringify(a)}),t(),n.stopPropagation()})}),o.useApi("config.onChange",{},function(n){n.key&&"browser.general.default_search_engine2"===n.key&&e(JSON.parse(n.value))})}var o=window.Api.Maxthon,s=navigator.language.toLocaleLowerCase(),r=$(".search-bar"),c=r.find(".search-engine"),l=r.find(".change-engine"),g=r.find(".search-form"),p=r.find(".button"),d=r.find(".engine-list"),u=(r.find("#s_lg_img"),{lang:{"zh-cn":"搜索","en-us":"search"}});r.on("submit",".search-form",function(){datacode.statistic({m:"oldSearch"}),o.useApi("common.reportLVTAction",{action:"p-mx5Newtab_searchResult"});var e=$(this).attr("action");if("http://s.maxthon.com/"===e){var t=p.val();return""===t?!1:(maxthon.webSend("quickaccess.multiSearch",{key:t},function(){}),!1)}n()}),r.on("click",".search-engine",function(e){var n=c.find(".engine-list");n.is(":visible")?t():n.show();var a=0,i=n.find("p").length-1;$(document).off("keydown").on("keydown",function(e){switch(e.keyCode){case 38:0>a&&(a=i),n.find("p").removeClass("hover"),n.find("p").eq(a--).addClass("hover");break;case 40:a>i&&(a=0),n.find("p").removeClass("hover"),n.find("p").eq(a++).addClass("hover");break;case 13:n.find("p").eq(a).trigger("click")}e.preventDefault()}),l.toggleClass("down"),e.stopPropagation(),e.preventDefault()}),i(),$(document).off("click",t).on("click",t)});