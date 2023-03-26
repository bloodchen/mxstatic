/*!widget/header/header.js*/
define("widget/header/header", function () {
  "use strict";
  function a(a, n) {
    o.useApi(
      "common.UIStatus",
      { type: a.type || 0, action: a.action || 0, status: a.status || 0 },
      function (a) {
        n && n(a);
      }
    );
  }
  function n(a, n) {
    if (
      ((a = parseFloat(a)), (n = parseFloat(n)), isNaN(a) || isNaN(n) || 0 >= n)
    )
      return "1%";
    var t = Math.round((a / n) * 1e4) / 100;
    return 0 >= t ? "1%" : t + "%";
  }
  function t(a) {
    a.nickname == "" + a.id && (a.nickname = a.email);
    var t = navigator.language.toLocaleLowerCase();
    (a.suffix =
      "?uid=" + a.id + "ln=" + t + "&mxver=" + o.max_version + "&mxpn=" + o.pn),
      (a.progress = n(a.usedSpace, a.totalSpace)),
      e(a);
  }
  function e(a) {
    var n =
      '<ul class="header-action fr">\n				' +
      s(a) +
      '\n				<li class="fl">\n					<span class="line">|</span>\n				</li>\n				' +
      i(a) +
      "\n			</ul>";
    l.find(".header-action").replaceWith(n),
      "Mac" === o.platform && l.find(".switch-action").hide();
  }
  function s(a) {
    var n =
      '\n		<li class="fl">\n			<a class="switch-action" href="#">' +
      Language.getLang("HotAddons") +
      '<i></i></a>		</li>\n		<li class="fl">\n			<span class="line">|</span>\n		</li>\n		<li class="fl">\n			<a href="mx://note/index.htm?id=' +
      a.id +
      '" target="_blank" data-m="builtInpage" data-n="maxNote">' +
      Language.getLang("Maxnote") +
      '</a>\n		</li>\n		<li class="fl">\n			<a href="mx://password" target="_blank" data-m="builtInpage" data-n="passKeeper">' +
      Language.getLang("Passkeeper") +
      "</a>\n		</li>";
    return (
      -1 !== a.id &&
        (n +=
          '<li class="fl">\n					<a href="https://pc-uc.uu.me/mail/' +
          a.suffix +
          '" target="_blank" data-m="builtInpage" data-n="UUMail">' +
          Language.getLang("UUMail") +
          "</a>\n				</li>"),
      n
    );
  }
  function i(a) {
    return -1 === a.id
      ? '<li class="fl profile">\n			<span class="login">' +
          Language.getLang("Login") +
          '</span>\n			<div class="profile-dropdown">\n				<img src="//pc-newtab-img.maxthon.com/static/img/guest.png" alt="photo"/>\n			</div>\n		</li>'
      : '<li class="fl profile">\n			<span class="login-user">' +
          a.nickname +
          '</span>\n			<div class="profile-dropdown">\n				<img src="' +
          a.avatarUrl.replace(
            /^(https?:\/\/.+\.maxthon)/,
            "https://avatar.maxthon"
          ) +
          '" alt="头像" onerror="//pc-newtab-img.maxthon.com/static/img/icon/default.png"/>\n				<div class="profile-continer">\n					<div class="profile-detail">\n						<h4>\n							<span class="user">' +
          a.nickname +
          "</span>\n							" +
          (a.vipLevel > 0
            ? '<span class="grade">VIP' + a.vipLevel + "</span>"
            : "") +
          '\n						</h4>\n						<p class="use-space-info">' +
          Language.getLang("CloudUseInfo")
            .replace("$used$", (a.usedSpace / 1048576).toFixed(2))
            .replace("$total$", a.totalSpace / 1073741824) +
          '</p>\n						<p class="progress">\n							<span class="extend" style="width: ' +
          a.progress +
          ';"></span>\n						</p>\n						<p class="async-date">\n							' +
          Language.getLang("LastSyncDate") +
          "：<span>" +
          a.syncTime +
          '</span>\n						</p>\n					</div>\n					<ul>\n						<li>\n							<a href="https://pc-uc.uu.me/i/' +
          a.suffix +
          '" target="_blank" data-m="hoverPhoto" data-n="userInformation">' +
          Language.getLang("AccountInfo") +
          '</a>\n						</li>\n						<li>\n							<a href="https://pc-uc.uu.me/i/security.html' +
          a.suffix +
          '" target="_blank" data-m="hoverPhoto" data-n="userSafe">' +
          Language.getLang("AccountSecur") +
          '</a>\n						</li>\n						<li>\n							<p class="logout">' +
          Language.getLang("Logout") +
          "</p>\n						</li>\n					</ul>\n				</div>\n			</div>\n		</li>";
  }
  var o = window.Api.Maxthon,
    l = $(".header"),
    c = function () {
      o.useApi("account.getCurrentAccount", {}, function (a) {
        t(a);
      });
    };
  c();
  var r = { favbar: 1, sidebar: 1 };
  a({ type: 1, action: 0 }, function (n) {
    1 === n &&
      a({ type: 0, action: 0 }, function (a) {
        1 === a
          ? $(".gl").addClass("gt").show()
          : $(".gl").addClass("lt").show(),
          (r.sidebar = a);
      }),
      (r.favbar = n);
  }),
    l.on("click", ".logout, .login", function (a) {
      a.preventDefault(),
        o.useApi("account.logout", {}, function () {}),
        datacode.statistic({ m: "hoverPhoto", n: "logout" });
    }),
    l.on("click", "ul > li > a", function (a) {
      a.preventDefault();
      var n = this.getAttribute("href"),
        t = window.Api.Maxthon.max_version,
        e = this.getAttribute("data-n");
      switch (e) {
        case "maxNote":
          o.useApi("common.reportLVTAction", {
            action: "p-mx5Newtab_clickMolebox",
          });
          break;
        case "passKeeper":
          ("5.1.42" === t || "5.1.106" === t) && (n = "maxthon://password"),
            o.useApi("common.reportLVTAction", {
              action: "p-mx5Newtab_clickPasskeeper",
            });
          break;
        case "UUMail":
          o.useApi("common.reportLVTAction", {
            action: "p-mx5Newtab_clickUUmail",
          });
      }
      o.useApi("newTabUpground", { url: n });
    }),
    l.on("click", ".gl", function () {
      var n = $(this);
      n.hasClass("lt")
        ? a({ action: 1, status: 1 }, function () {
            n.removeClass("lt").addClass("gt");
          })
        : a({ action: 1, status: 0 }, function () {
            n.removeClass("gt").addClass("lt");
          });
    }),
    o.useApi("account.profileChanged", {}, function () {
      c();
    }),
    o.useApi("common.registerUIStatusChanged", {}, function (a) {
      $(".gl").removeClass("gt").removeClass("lt").hide(),
        1 === a.type
          ? (1 === a.status &&
              (1 === r.sidebar
                ? $(".gl").addClass("gt").show()
                : $(".gl").addClass("lt").show()),
            (r.favbar = a.status))
          : (1 === r.favbar &&
              (1 === a.status
                ? $(".gl").addClass("gt").show()
                : $(".gl").addClass("lt").show()),
            (r.sidebar = a.status));
    });
}); /*!widget/search/search.js*/
define("widget/search/search", function () {
  "use strict";
  function e(e) {
    c.css({ "background-image": "url(mx://favicon/" + e.url + ")" }),
      "5cstlvtmining201712v1" === r.pn &&
        r.max_version.cmpVersions("5.2.2.1000") <= 0 &&
        e.url.match(/https?:\/\/www.sogou.com\/sogou/) &&
        (e.url = "https://www.sogou.com/web?query=%us");
    var n = e.url.split("?"),
      a = n[0];
    if (n[1]) {
      var t = n[1].match(/[\w\-]+=%[\w\-]+/g),
        i = t[0].split("=")[0],
        s = new RegExp("&*" + t + "&*", "g"),
        o = n[1].replace(s, "&").replace(/^&+|&+$/g, "");
      d.attr("name", i), (o = o.replace(/^&+|&+$/g, ""));
      for (
        var f = o.split("&"),
          g = $("<div>", { class: "extra-param" }),
          p = "",
          h = 0;
        h < f.length;
        h++
      ) {
        var m = f[h].indexOf("="),
          v = f[h].substring(0, m),
          y = f[h].substring(m + 1);
        p += '<input type="hidden" name="' + v + '" value="' + y + '">';
      }
      u.find(".extra-param").remove(), u.append(g), g.html(p);
    }
    l.text(e.name),
      u.attr("action", a),
      "百度" != e.name ||
        e.url.match(/^https/) ||
        u.attr("action", a.replace("http", "https"));
  }
  function n() {
    var e = $('<div id="zoom-box"></div>'),
      n = document.body.getBoundingClientRect();
    e.appendTo("body"),
      e.css({
        left: n.left + "px",
        top: n.top + "px",
        right: n.right + "px",
        bottom: n.bottom + "px",
      }),
      e.addClass("in"),
      setTimeout(function () {
        (e[0].style.cssText = ""), (e[0].style.opacity = 1);
      }, 10);
  }
  function a() {
    f.hide(),
      l.addClass("down"),
      $(document).off("keydown"),
      f.find("p").removeClass("hover");
  }
  function t(e, n) {
    {
      var a = '<div class="engine-list-inner">';
      g.lang;
    }
    n.forEach(function (e, n) {
      a +=
        "<p data-engine=" +
        n +
        '><img src="mx://favicon/' +
        e.url +
        '" /><span>' +
        e.name +
        "</span></p>";
    }),
      (a += "</div>"),
      e.empty().append(a),
      d.attr("placeholder", g.lang[s] || g.lang["en-us"]),
      c.attr("title", Language.getLang("SelectDefaultEngine"));
  }
  function i() {
    function n(n, a) {
      e(n), t(f, a);
    }
    r.useApi(
      "config.getMultiValues",
      {
        keys: "['browser.general.search_engine_list2', 'browser.general.default_search_engine2']",
      },
      function (t) {
        var i = JSON.parse(t),
          c = JSON.parse(i[0] || []),
          l = JSON.parse(i[1] || {});
        "ru-ru" == s
          ? r.useApi("config.get", { key: "newtab.ru_yandex" }, function (e) {
              if ("1" == e) return void n(l, c);
              var a;
              if (t.indexOf("yandex") < 0)
                (a = {
                  id: "9d072286-432f-1d00-28f7-6cf014386898",
                  name: "Yandex",
                  label: "Yandex",
                  url: "http://yandex.ru/yandsearch?clid=45370&text=%s",
                  hotkey: "",
                  editable: !1,
                  url_addressbar:
                    "http://yandex.ru/yandsearch?clid=45370&text=%s",
                  url_quickaccess:
                    "http://yandex.ru/yandsearch?clid=45370&text=%s",
                }),
                  c.push(a);
              else {
                var i = c.filter(function (e) {
                  return "yandex" === e.name.toLowerCase();
                });
                a = i[0];
              }
              (l = a),
                n(l, c),
                r.useApi("config.set", { key: "newtab.ru_yandex", value: "1" }),
                r.useApi("config.set", {
                  key: "browser.general.search_engine_list2",
                  value: JSON.stringify(c),
                }),
                r.useApi("config.set", {
                  key: "browser.general.default_search_engine2",
                  value: JSON.stringify(l),
                });
            })
          : n(l, c),
          o.on("click", ".engine-list p", function (n) {
            var t = c[$(this).index()];
            e(t),
              r.useApi("config.set", {
                key: "browser.general.default_search_engine2",
                value: JSON.stringify(t),
              }),
              a(),
              n.stopPropagation();
          });
      }
    ),
      r.useApi("config.onChange", {}, function (n) {
        n.key &&
          "browser.general.default_search_engine2" === n.key &&
          e(JSON.parse(n.value));
      });
  }
  var r = window.Api.Maxthon,
    s = navigator.language.toLocaleLowerCase(),
    o = $(".search-bar"),
    c = o.find(".search-engine"),
    l = o.find(".change-engine"),
    u = o.find(".search-form"),
    d = o.find(".button"),
    f = o.find(".engine-list"),
    g = (o.find("#s_lg_img"), { lang: { "zh-cn": "搜索", "en-us": "search" } });
  o.on("submit", ".search-form", function () {
    datacode.statistic({ m: "oldSearch" }),
      r.useApi("common.reportLVTAction", {
        action: "p-mx5Newtab_searchResult",
      });
    var e = $(this).attr("action");
    if ("http://s.maxthon.com/" === e) {
      var a = d.val();
      return "" === a
        ? !1
        : (maxthon.webSend(
            "quickaccess.multiSearch",
            { key: a },
            function () {}
          ),
          !1);
    }
    n();
  }),
    o.on("click", ".search-engine", function (e) {
      var n = c.find(".engine-list");
      n.is(":visible") ? a() : n.show();
      var t = 0,
        i = n.find("p").length - 1;
      $(document)
        .off("keydown")
        .on("keydown", function (e) {
          switch (e.keyCode) {
            case 38:
              0 > t && (t = i),
                n.find("p").removeClass("hover"),
                n
                  .find("p")
                  .eq(t--)
                  .addClass("hover");
              break;
            case 40:
              t > i && (t = 0),
                n.find("p").removeClass("hover"),
                n
                  .find("p")
                  .eq(t++)
                  .addClass("hover");
              break;
            case 13:
              n.find("p").eq(t).trigger("click");
          }
          e.preventDefault();
        }),
        l.toggleClass("down"),
        e.stopPropagation(),
        e.preventDefault();
    }),
    i(),
    $(document).off("click", a).on("click", a);
}); /*!widget/topbanner/index.js*/
define("widget/topbanner/index", function (i, n, o) {
  "use strict";
  function e() {
    a.on("click", ".mining-go-collapse", function (i) {
      i.stopPropagation(),
        i.preventDefault(),
        a.removeClass("isvisible"),
        localStorage.setItem("banner-coin-collapse", "done"),
        window.Api.statistic.webSend({
          m: "Pluginlivesone",
          n: "Collapse",
          data: {},
        });
    }),
      a.on("click", ".mining-go-lk", function () {
        var i = $(this).attr("href");
        window.Api.statistic.webSend({
          m: "Pluginlivesone",
          n: "ClickOn",
          data: { url: i },
        });
      });
  }
  var a = (window.Api.Maxthon, $("#top_banner")),
    t = ($(".header"), "zh-cn" === navigator.language.toLocaleLowerCase());
  t ||
    a.html(
      '              <a class="mining-go-lk" href="http://extension.maxthon.com/detail/index.php?view_id=3127&category_id=" target="_blank">                  <div class="mining-go-inner">                      <i class="mod_actmark mod_actmark_top"></i>                      <p class="mining-go-title">Most downloaded recently: Mining  Go</p>                      <p class="mining-go-sub-title">Join browser mining, earn LVTC easily！</p>                      <button class="mining-go-download-btn" style="padding: 8px 20px;right:80px;">Download Now</button>                      <i class="iconfont mining-go-collapse"></i>                  </div>              </a>          '
    ),
    "Win" === window.Api.Maxthon.platform &&
      window.localStorage &&
      !localStorage.getItem("banner-coin-collapse") &&
      a.addClass("isvisible"),
    e(),
    (o.exports = {
      toggle: function () {
        a.hasClass("isvisible")
          ? (a.removeClass("isvisible"),
            localStorage.setItem("banner-coin-collapse", "done"),
            window.Api.statistic.webSend({
              m: "Pluginlivesone",
              n: "Collapse",
              data: {},
            }))
          : (a.addClass("isvisible"),
            localStorage.removeItem("banner-coin-collapse"));
      },
    });
}); /*!static/js/newWin.js*/
("use strict");
$(function () {
  var e = (function (t) {
    function i(t) {
      (v = t || {}),
        (b = $("#add-dialog")),
        (x = b.find(".dialog-nav > li")),
        (k = b.find(".grid-nav > li")),
        (C = b.find(".tab > li")),
        (w = b.find('input[name="url"]')),
        (_ = b.find('input[name="title"]')),
        (q = b.find("#dialog_add_btn")),
        (T = b.find(".dialog-grid-list")),
        (S = b.find(".color-block-list")),
        (I = b.find(".color-block-list > li")),
        (y = b.find(".radio-list")),
        (L = b.find("#grid-search-icon")),
        (A = b.find("#grid_search_btn")),
        (j = $("#mx_mask_layer")),
        "Mac" === E.platform && C.eq(3).remove(),
        (("Win" === E.platform && E.max_version.cmpVersions("5.0.3.200") < 0) ||
          ("Mac" === E.platform && E.max_version.cmpVersions("5.0.16") < 0)) &&
          (S.css({ left: "0px", top: "70px", width: "590px" }),
          I.css({ width: "50px", height: "50px", margin: "20px 15px 0 0px" }),
          b
            .find(".dialog-input")
            .eq(3)
            .css({ position: "relative", top: "140px", left: "250px" }),
          b.find(".dialog-input").eq(1).remove(),
          $(
            "<style>.color-block-list li.selected::after{background-position:-5px -65px;}</style>"
          ).appendTo("head")),
        x.on("click", function () {
          var e = $(this);
          e.siblings().removeClass("selected"),
            e.addClass("selected"),
            b.find("article").hide().eq(e.index()).show();
        }),
        k.on("click", function () {
          var e = $(this);
          e.siblings("li").removeClass("current"),
            e.addClass("current"),
            u(SITE_LIST[e.index()]);
        }),
        C.on("click", function () {
          var t = $(this),
            i = t.index();
          t.siblings("li").removeClass("hover"), t.addClass("hover");
          var a = b.find(".main-warp > div");
          a.addClass("hide").eq(i).removeClass("hide"),
            (e.clickcalls = [
              function () {
                E.useApi("common.getCurrentOpenedList", {}, function (e) {
                  f(e, a.eq(i));
                });
              },
              function (e) {
                E.useApi("history.getTopVisitedList", {}, function (t) {
                  f(t, a.eq(e));
                });
              },
              function () {
                E.useApi(H, {}, function (e) {
                  if (e.folders) {
                    var t = new treeMenu(e.folders);
                    a.eq(i).empty().append(t.init(e.pid)),
                      "note.getFoldersTree" !== H &&
                        h("00000001-0000-0000-0000-000000000000", function (e) {
                          a.eq(i).append(e);
                        });
                  }
                });
              },
              function () {
                E.useApi("getLastOpenList", {}, function (e) {
                  f(e, a.eq(i));
                });
              },
            ]),
            -1 != i && e.clickcalls[i].call(this, i);
        }),
        w
          .on("init", function () {
            var e = w.val().trim();
            if (0 !== e.length) {
              w.removeClass("error"), b.find(".error").hide();
              var t = d() ? !1 : !0;
              if (e.startWith("mx://note/?id"))
                return (
                  w.attr("disabled", "disabled"),
                  void m(
                    {
                      recommendlogo: { disable: !0 },
                      screenshot: { disable: !0 },
                      colorblock: { disable: !1, checked: !0 },
                    },
                    t
                  )
                );
              w.removeAttr("disabled").removeAttr("style");
              var i = g(e);
              if ("" === i)
                m(
                  {
                    recommendlogo: { disable: !0 },
                    screenshot: { disable: !1, checked: !0 },
                    colorblock: { disable: !1 },
                  },
                  t
                );
              else {
                W = i;
                var a = {
                  recommendlogo: { disable: !1, checked: !0 },
                  screenshot: { disable: !1 },
                  colorblock: { disable: !1 },
                };
                m(a, t);
              }
            }
          })
          .on("blur", function () {
            $(this).trigger("init");
          })
          .on("focus", function () {
            $(this).removeClass("error");
          }),
        b.on("click", ".main-warp li:not(.folder) > a", function (e) {
          e.preventDefault(), e.stopPropagation();
          var t = $(this);
          return (
            _.val(t.attr("title")),
            w.val(t.attr("href")).trigger("init"),
            C.each(function (e, t) {
              return $(t).hasClass("hover")
                ? ((B = [
                    "currentlyOpen",
                    "mostVisited",
                    "maxnote",
                    "lastSession",
                  ][e]),
                  !1)
                : void 0;
            }),
            (F =
              "maxnote" === B
                ? "1" !== t.attr("et")
                  ? "record"
                  : "website"
                : void 0),
            !1
          );
        }),
        b.on("click", ".main-warp li.folder", function () {
          var e = $(this);
          e.toggleClass("open");
          var t = e.attr("uuid");
          return (
            h(t, function (t) {
              e.find(">ul").find("li:not(.folder)").remove().end().append(t);
            }),
            !1
          );
        }),
        b.on(
          "mouseover mouseout",
          ".main-warp .menu-head,.main-warp .jstree-note",
          function (e) {
            e.stopPropagation(),
              "mouseover" == e.type
                ? $(this).siblings(".jstree-wholerow").show()
                : "mouseout" == e.type &&
                  $(this).siblings(".jstree-wholerow").hide();
          }
        ),
        T.on("click", "> li", function (e) {
          e.preventDefault();
          var t = $(this);
          if (!t.hasClass("disable")) {
            t.addClass("disable");
            var i = t.find("a"),
              a = {
                title: i.attr("d-title"),
                url: i.attr("href"),
                image: i.attr("d-image"),
                sq_img: i.attr("d-sq-img"),
                sq_md5sum: i.attr("d-sq-md5"),
                re_img: i.attr("d-re-img"),
                re_md5sum: i.attr("d-re-md5"),
                isHot: !1,
              };
            setTimeout(function () {
              var e = t.clone(),
                i = (t.width(), t.innerHeight(), t.offset());
              e.css({
                position: "absolute",
                "-webkit-transition": "all 0.3s",
                left: i.left,
                top: i.top + document.body.scrollTop,
              }),
                document.body.appendChild(e[0]);
              var o = Controller.getGridItem(U).grid;
              (a.index = U), o.isHot === !0 && (a.isHot = !0);
              var s = d();
              if (!s) {
                var n =
                    o.isHot === !0
                      ? Math.min(o.topuiindex + 1, 7)
                      : o.uiindex + 1,
                  l = o.getGridPosition(n);
                o.node.css({ left: l.left, top: l.top });
              }
              if (o.group)
                Controller.onUpdateGridItem(a),
                  e && (document.body.removeChild(e[0]), (e = null));
              else {
                var c = o.getGridFixed(),
                  m = c.left,
                  u =
                    c.top +
                    document.body.scrollTop +
                    document.documentElement.scrollTop;
                e.css({ left: m, top: u }),
                  setTimeout(function () {
                    s
                      ? Controller.onUpdateGridItem(a)
                      : Controller.onInsertGridItem(a, o),
                      e && (document.body.removeChild(e[0]), (e = null));
                  }, 300);
              }
              r();
              var f = {
                o: (o.isHot === !0 ? "top" : "fav") + (s ? "Edit" : "Add"),
                m: "managesites",
                n: s ? "edit" : "add",
                p: "success",
                data: {
                  addPosition: o.isHot === !0 ? o.topuiindex : o.uiindex,
                  addSource: "default",
                },
              };
              datacode && datacode.statistic(f);
            }, 50);
          }
        }),
        q.on("click", function () {
          var e = $(this);
          if (!e.hasClass("disable")) {
            var t = w.val().trim(),
              i = _.val().trim();
            if ((b.find(".error").hide(), 0 === t.length))
              return (
                b
                  .find(".error")
                  .eq(0)
                  .find(">span")
                  .html(Language.getLang("EnterUrl"))
                  .end()
                  .show(),
                void w.addClass("error")
              );
            if (t.indexOf("..") > 0 && t.indexOf(".."))
              return (
                b
                  .find(".error")
                  .eq(0)
                  .find(">span")
                  .html(Language.getLang("CheckUrl"))
                  .end()
                  .show(),
                void w.focus()
              );
            e.addClass("disable"), 0 === i.length && (i = t);
            var a = { title: i, url: t.notUrl() ? "http://" + t : t };
            y.each(function (e, t) {
              var i = $(t);
              if (i.hasClass("selected")) {
                switch (e) {
                  case 0:
                    a.image = W;
                    break;
                  case 1:
                    a.image = p(a.url, 0);
                    break;
                  default:
                    a.colorBlock = V;
                }
                return !1;
              }
            });
            var o = Controller.getGridItem(U).grid;
            o.isHot === !0 &&
              ((a.isHot = !0),
              (a.image = a.image && a.image.replace("/Re/", "/Sq/")));
            var s = {
              o: o.isHot === !0 ? "top" : "fav",
              data: {
                addPosition: o.isHot === !0 ? o.topuiindex : o.uiindex,
                addSource: B || "custome",
              },
              m: "managesites",
            };
            F && "maxnote" === B && (s.data.maxnoteCategory = F),
              d()
                ? ((s.n = "edit"),
                  (s.o += "Edit"),
                  (a.index = U),
                  Controller.onUpdateGridItem(a))
                : ((s.n = "add"),
                  (s.o += "Add"),
                  Controller.onInsertGridItem(a, o),
                  E.useApi("common.reportLVTAction", {
                    action: "p-mx5Newtab_addWebSite",
                  })),
              r(),
              setTimeout(function () {
                (s.p = "success"), datacode && datacode.statistic(s);
              }, 100);
          }
        });
      var i;
      A.on("input", function () {
        return (
          i && clearTimeout(i),
          (i = setTimeout(function () {
            o();
          }, 200)),
          !1
        );
      }),
        I.on("click", function (e) {
          var t = $(this);
          e.stopPropagation(),
            t.parent().hasClass("disable") ||
              ((V = t.attr("class")),
              t.siblings().removeClass("selected").end().addClass("selected"));
        }),
        y.on("click", function () {
          var e = $(this),
            t = { m: "logozoneClick" },
            i = e.index();
          switch (i) {
            case 0:
              t.n = "hot";
              break;
            case 1:
              t.n = "screenshot";
              break;
            default:
              t.n = "colorBlock";
          }
          datacode && datacode.statistic(t), e.hasClass("disabled") || a(e);
        });
    }
    function a(e) {
      var t = e.index(),
        i = w.val().trim();
      switch (((i = i.notUrl() ? "http://" + i : i), t)) {
        case 0:
          var a = g(i);
          "" !== a && (W = a), S.addClass("disable");
          break;
        case 1:
          (W = p(i, 0)), S.addClass("disable");
          break;
        default:
          S.removeClass("disable"),
            I.removeClass("selected")
              .siblings("." + V)
              .addClass("selected");
      }
      e.siblings().removeClass("selected").end().addClass("selected");
    }
    function o() {
      var e = A.val().replace(/\s+/g, "");
      if (0 === e.length) return void u(SITE_LIST[e.length]);
      for (var t = { list: [] }, i = 0; i < SITE_LIST.length; i++)
        for (var a = SITE_LIST[i].list, o = 0; o < a.length; o++) {
          var s = a[o];
          (-1 === s.url.indexOf(e) && -1 === s.title.indexOf(e)) ||
            t.list.push(s);
        }
      u(t), k.removeClass("current").eq(0).addClass("current");
    }
    function s(e, t, i) {
      var a = t ? 1 : 0,
        o = Language.getLang(t ? "Save" : "CustomAdd");
      b.find(".error").hide(),
        A.val(""),
        (N = i),
        k.eq(0).click(),
        C.eq(0).click(),
        x.eq(a).click(),
        q.text(o),
        n(e),
        (M = b.dialog({
          autoClose: !1,
          close: function () {
            return !1;
          },
          after: function () {
            b.find(".close")
              .off("click")
              .on("click", function () {
                var e = Controller.getGridItem(U).grid;
                x.each(function (e, t) {
                  return $(t).hasClass("selected")
                    ? ((B = ["default", "custome"][e]), !1)
                    : void 0;
                });
                var i = {
                  n: t ? "edit" : "add",
                  o: (e.isHot === !0 ? "top" : "fav") + (t ? "Edit" : "Add"),
                  m: "managesites",
                  p: "failure",
                  data: { addSource: B || "custome" },
                };
                datacode && datacode.statistic(i), r(N);
              });
          },
        }));
    }
    function r() {
      var e = N;
      return (
        l(),
        q.removeClass("disable"),
        w.removeAttr("disabled").removeAttr("style").removeClass("error"),
        y
          .removeClass("disabled")
          .removeClass("selected")
          .eq(1)
          .addClass("selected"),
        I.removeClass("selected").eq(0).addClass("selected"),
        e === !0 ? (b.hide(), $group_dialog.show(), !1) : void M.close()
      );
    }
    function n(e) {
      (e = e || {}),
        (U = e.index),
        (O = e.uiindex),
        (D = e.title || ""),
        (P = e.url || ""),
        (W = e.image || ""),
        (V = e.colorBlock || "color-block-6"),
        (z = e.thumbType),
        c(),
        (z = d()
          ? "" === W
            ? 2
            : W.startWith("mx://thumbs/?reflush")
            ? 1
            : 0
          : 1);
      var t = {};
      switch (z) {
        case 2:
          t.colorblock = { disable: !1, checked: !0 };
          break;
        case 1:
          t.screenshot = { disable: !1, checked: !0 };
          break;
        default:
          t.recommendlogo = { disable: !1, checked: !0 };
      }
      var i = g(P);
      "" === i &&
        ((e.image && e.image.startWith("http://fastdail-img")) ||
          (t.recommendlogo = { disable: !0 })),
        P.startWith("mx://note/?id") &&
          ((t.screenshot = { disable: !0 }), w.attr("disabled", "disabled")),
        m(t, !0);
    }
    function l() {
      (U = ""),
        (P = ""),
        (D = ""),
        (W = ""),
        (V = ""),
        (B = void 0),
        (z = void 0),
        (F = void 0),
        (N = void 0);
    }
    function d() {
      return q.text() === Language.getLang("Save");
    }
    function c() {
      _.val(D), w.val(P);
    }
    function m(e, t) {
      var i = $.extend(
        !0,
        {
          recommendlogo: { index: 0 },
          screenshot: { index: 1 },
          colorblock: { index: 2 },
        },
        e
      );
      for (var o in i)
        if (i[o]) {
          var s = i[o].index;
          i[o].disable === !0
            ? (y.eq(s).addClass("disabled"),
              y.eq(s).hasClass("selected") && (t = !0),
              y.eq(s).addClass("disabled"))
            : (y.eq(s).removeClass("disabled"),
              y.eq(s).removeClass("disabled")),
            t && i[o].checked === !0 && a(y.eq(s));
        }
    }
    function u(e) {
      for (var t = [], i = 0; i < e.list.length; i++) {
        var a = e.list[i],
          o = [];
        v[a.url] &&
          ((a.sq_img = v[a.url].sq_img || ""),
          a.sq_img && "" !== a.sq_img && o.push('d-sq-img="' + a.sq_img + '" '),
          (a.re_img = v[a.url].re_img || ""),
          a.re_img && "" !== a.re_img && o.push('d-re-img="' + a.re_img + '" '),
          (a.re_md5sum = v[a.url].re_md5sum || ""),
          a.re_md5sum &&
            "" !== a.re_md5sum &&
            o.push('d-re-md5="' + a.re_md5sum + '" '),
          (a.sq_md5sum = v[a.url].sq_md5sum || ""),
          a.sq_md5sum &&
            "" !== a.sq_md5sum &&
            o.push('d-sq-md5="' + a.sq_md5sum + '" ')),
          (a = grid.tranData(a)),
          t.push("<li>"),
          t.push(
            '<a href="' +
              a.url +
              '" d-title="' +
              a.title +
              '" d-image="' +
              a.image +
              '" ' +
              o.join("") +
              ' target="_blank">'
          ),
          t.push(
            '<img class="grid-img" src="' +
              a.image +
              '" width="150" height="100"/>'
          ),
          t.push('<p class="grid-title">' + a.title + "</p>"),
          t.push("</a>"),
          t.push("</li>");
      }
      T.empty().append(t.join(""));
    }
    function f(e, t) {
      for (var i = ["<ul>"], a = 0; a < e.length; a++) {
        var o = e[a];
        i.push(
          '<li>                        <a href="' +
            o.url +
            '" title="' +
            o.title +
            '">                            <img src="mx://favicon/' +
            o.url +
            '" alt="' +
            o.title +
            '" height="16" width="16" onerror="this.src=\'' +
            staticServer +
            '/img/icon/6000.png\'" class="nav-icon" />                            <span class="nav-text">' +
            o.title +
            "</span>                        </a>                        </li>"
        );
      }
      i.push("</ul>"), t.empty().append(i.join(""));
    }
    function h(e, t) {
      E.useApi(G, { pid: e }, function (i) {
        var a = "",
          o = i.notes || i.nodes;
        if (o) {
          for (var s = 0; s < o.length; s++) {
            var r = o[s] || {};
            a +=
              '<li>                            <div class="jstree-wholerow"></div>                            <a class="jstree-note" href="' +
              (1 !== r.et ? "mx://note/?id=" + r.uuid + "&pid=" + e : r.url) +
              '" title="' +
              r.fn +
              '" et="' +
              r.et +
              '">                                <img src="' +
              (1 !== r.et
                ? staticServer + "/img/icon/note.svg"
                : "mx://favicon/" + r.url) +
              '" alt="' +
              r.fn +
              '" height="16" width="16" onerror="this.src=\'' +
              staticServer +
              '/img/icon/6000.png\'" class="nav-icon" />                                <span class="nav-text">' +
              r.fn +
              "</span>                            </a>                        </li>";
          }
          t && t(a);
        }
      });
    }
    function g(e) {
      if (0 != e.length) {
        var t = e.notUrl() ? "http://" + e : e,
          i =
            /^((https|http)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
        if (!i.test(t)) return "";
        if (/http:\/\/go.maxthon.(cn|com)\/redir\/mx(4|5)\//.test(e)) {
          var a = e.getQueryString("f");
          switch (a) {
            case "tmall":
              t = "http://jx.tmall.com";
              break;
            case "fbmx5":
              t = "https://www.facebook.com/maxthon";
              break;
            case "jumei":
              t = "http://bj.jumei.com/";
              break;
            case "juhuasuan":
              t = "https://ju.taobao.com/";
              break;
            case "meituan":
              t = "http://bj.meituan.com/";
              break;
            case "aitaobao":
              t = "http://ai.taobao.com/";
              break;
            case "vipshop":
              t = "http://www.vip.com/";
              break;
            case "amazon":
              t = "https://www.amazon.cn";
              break;
            case "gome":
              t = "http://www.gome.com.cn/";
              break;
            default:
              t = "http://www." + a + ".com";
          }
        }
        var o = /.*\:\/\/([^\/]*).*/,
          s = t.match(o),
          r = "",
          n = "";
        if (
          ("undefined" != typeof s &&
            null != s &&
            (r =
              "https://vk.com/maxthon_ru" === s[0] ||
              "https://facebook.com/maxthon.org.ru" === s[0] ||
              "http://maxthon.org.ru" === s[0]
                ? s[0]
                : s[1]),
          "go.maxthon.com" === r || "go.maxthon.cn" === r)
        )
          return "";
        e: for (var l = 0; l < SITE_LIST.length; l++)
          for (var d = SITE_LIST[l], c = 0; c < d.list.length; c++) {
            var m = d.list[c],
              u = m.url;
            if (u.indexOf(r) >= 0) {
              (n = m.image), (l = SITE_LIST.length);
              break e;
            }
            if (m.match)
              for (var f = 0; f < m.match.length; f++) {
                var h = m.match[f];
                if (h.indexOf(r) >= 0) {
                  (n = m.image), (l = SITE_LIST.length);
                  break e;
                }
              }
          }
        return n;
      }
    }
    function p(e, i) {
      return 0 == i
        ? "mx://thumbs/?reflush=" +
            i +
            "&stamp=" +
            new Date().getTime() +
            "&url=" +
            e
        : 1 == t.onLine
        ? "mx://thumbs/?reflush=" +
          i +
          "&stamp=" +
          new Date().getTime() +
          "&url=" +
          e
        : cdnServer + "/image/logo/Re/offline.png";
    }
    var v,
      b,
      x,
      k,
      C,
      w,
      _,
      q,
      T,
      S,
      I,
      y,
      L,
      A,
      j,
      E = t.Api.Maxthon,
      H = "note.getAllFolders",
      G = "note.getNotesByPid";
    "Win" === E.platform &&
      E.max_version.cmpVersions("5.1.4.800") >= 0 &&
      ((H = "note.getFoldersTree"), (G = "note.getEntriesByPid"));
    var U, O, P, W, D, V, z, B, F, M, N;
    return { init: i, getThumbsUrl: p, getImageFromUrl: g, showDialog: s };
  })(window);
  window.newWin = e;
}); /*!static/js/settings.js*/
("use strict");
$(function () {
  var e = (function () {
    function e() {
      t();
    }
    function t() {
      ($config_layer = $("#config-layer")),
        (p = $("#config-button")),
        (m = $config_layer.find(".skin-img-list")),
        (u = $config_layer.find(".skin-img-list")),
        (k = [
          {
            pic: "light.jpg",
            type: "picture",
            brightness: "dark",
            data_code: "defaultlight",
          },
          {
            pic: "deep.jpg",
            type: "picture",
            brightness: "light",
            data_code: "defaultdark",
          },
          {
            pic: "harbor.jpg",
            type: "video",
            brightness: "light",
            data_code: "harbor",
            play: !0,
          },
          {
            pic: "sunny.jpg",
            type: "video",
            brightness: "light",
            data_code: "sunny",
            play: !0,
          },
          {
            pic: "yun.jpg",
            type: "video",
            brightness: "dark",
            data_code: "clouds",
            play: !0,
          },
          {
            pic: "moonlight.jpg",
            type: "video",
            brightness: "light",
            data_code: "moonlight",
            play: !0,
          },
          {
            pic: "mountains.jpg",
            type: "video",
            brightness: "dark",
            data_code: "mountains",
            play: !0,
          },
          {
            pic: "sky.jpg",
            type: "picture",
            brightness: "light",
            data_code: "sky",
          },
          {
            pic: "dandelion.jpg",
            type: "picture",
            brightness: "dark",
            data_code: "bridge",
          },
          {
            pic: "sundown.jpg",
            type: "picture",
            brightness: "dark",
            data_code: "dandelion",
          },
          {
            pic: "bridge.jpg",
            type: "picture",
            brightness: "dark",
            data_code: "sundown",
          },
          {
            pic: "old.jpg",
            type: "picture",
            brightness: "dark",
            data_code: "old",
          },
          {
            pic: "night.jpg",
            type: "picture",
            brightness: "light",
            data_code: "night",
          },
          {
            pic: "balloon.jpg",
            type: "picture",
            brightness: "light",
            data_code: "balloon",
          },
        ]),
        f.cmpVersions("5.0.4.400") < 0 &&
          (k.splice(2, 5), k.splice(k.length - 1, 1)),
        f.cmpVersions("5.0.3.400") < 0 &&
          $config_layer.find(".tips").remove() &&
          $config_layer.find(".a-upload").height(0);
      var e = [];
      k.forEach(function (t) {
        e.push('<li class="skin-img-item" name="' + t.data_code + '">'),
          e.push(' <a href="javascript:void(0);">'),
          e.push(
            '     <img class="skin-img-item-img" src="' + d(t.pic, !0) + '" />'
          ),
          "video" === t.type &&
            e.push('     <div class="operate-button loading"></div>     '),
          e.push(" </a>"),
          e.push("</li>");
      }),
        u.empty().append(e.join("")),
        v.addEventListener("play", function () {
          $config_layer
            .find(".operate-button")
            .removeClass("start")
            .removeClass("loading")
            .addClass("pause");
        }),
        v.addEventListener("error", function () {
          $config_layer.find(".operate-button").addClass("start");
        }),
        v.addEventListener("pause", function () {
          $config_layer
            .find(".operate-button")
            .removeClass("pause")
            .removeClass("loading")
            .addClass("start");
        }),
        c(function (e) {
          y = e;
          var t = localStorage.getItem("CUSTOM_BACKGROUND");
          if (
            (t && t.length && ((y.bgIndex = -1), (y.customBackground = t)),
            -1 === y.bgIndex && y.customBackground)
          ) {
            var s = new Image();
            (s.onload = function () {
              n(y.customBackground), o(), r();
            }),
              (s.onerror = function () {
                (y.bgIndex = 4),
                  a(y.bgIndex, k[y.bgIndex].pic),
                  o(k[y.bgIndex].brightness),
                  r();
              }),
              (s.src = y.customBackground);
          } else {
            var c = k[y.bgIndex];
            c || (c = k[0]),
              "picture" === c.type ? n(d(c.pic, !1)) : a(y.bgIndex, c.pic),
              u
                .find(">li")
                .removeClass("selected")
                .eq(y.bgIndex)
                .addClass("selected"),
              o(c.brightness);
          }
          skinDisplay &&
            skinDisplay === !0 &&
            (localStorage.setItem("BODY_CLASS_NAME", document.body.className),
            (document.body.className = ""),
            (document.getElementById("skin").style.display = "block"),
            (document.getElementById("siderbar").style.display = "none")),
            i();
        });
    }
    function i() {
      function e(e) {
        var i = e.target.webkitHidden;
        i
          ? v.paused || (s(!1), (t = !0))
          : t === !0 && v.paused && (s(!0), (t = !1));
      }
      $config_layer.find(".upload").on("click", function () {
        b.useApi("quickaccess.selectBgImage", {}, function (e) {
          if (e && e.succeed === !0) {
            var t =
              "mx://newtab/user_custom_bg_image.png?v=" + new Date().getTime();
            (y.bgIndex = -1),
              (y.customBackground = t),
              r(),
              n(t),
              o(),
              u.find(">li").removeClass("selected");
          }
        });
      }),
        p.on("click", function () {
          $config_layer.css({ right: "0px" }),
            $("#mx_mask_layer")
              .show()
              .unbind("click")
              .click(function () {
                $config_layer.removeAttr("style"), $(this).hide();
              }),
            (window.onresize = function () {
              this.resizeTimer && clearTimeout(this.resizeTimer),
                (this.resizeTimer = setTimeout(function () {
                  m.height(window.innerHeight - 120);
                }, 100));
            }),
            setTimeout(function () {
              window.onresize();
            }, 50);
        }),
        $config_layer.on("click", ".close", function () {
          $config_layer.removeAttr("style"),
            $("#mx_mask_layer").hide().unbind("click"),
            (window.onresize = null);
        }),
        u.on("click", "li", function (e) {
          var t = $(this);
          if (
            !t.hasClass("selected") &&
            !$(e.target).hasClass("operate-button")
          ) {
            t.siblings("li").removeClass("selected"), t.addClass("selected");
            var i = t.index(),
              s = k[i];
            localStorage.removeItem("CUSTOM_BACKGROUND"),
              "picture" === s.type ? n(d(s.pic, !1)) : a(i, s.pic),
              delete y.play,
              o(s.brightness),
              (y.bgIndex = i),
              y.customBackground && delete y.customBackground,
              r(y),
              datacode &&
                datacode.statistic({ n: s.data_code, m: "switchbackground" });
          }
        }),
        $config_layer.on("click", ".operate-button", function (e) {
          if ((e.stopPropagation(), 3 === v.networkState)) return void v.load();
          y.bgIndex;
          v.paused ? (s(!0), (y.play = !0)) : (s(!1), (y.play = !1)), r(y);
        });
      var t = !1;
      document.addEventListener("webkitvisibilitychange", e, !1);
    }
    function n(e) {
      h.css({ "background-image": "url(" + e + ")" }),
        v.removeAttribute("src"),
        v.removeAttribute("poster"),
        (v.style.display = "none"),
        s(!1),
        y && delete y.play;
    }
    function a(e, t) {
      (v.poster = t.replace(/([A-Za-z]+).jpg/, function (e, t) {
        return staticServer + "/img/bg/" + t + ".jpg";
      })),
        (v.src = t.replace(/([A-Za-z]+).jpg/, function (e, t) {
          return staticServer + "/img/bg/video/" + t + ".mp4";
        }));
      var i = k[e].play;
      e === y.bgIndex && (i = y.play === !1 ? !1 : !0),
        i === !0
          ? s(!0)
          : (s(!1),
            $config_layer
              .find(".operate-button")
              .removeClass("loading")
              .addClass("start")),
        h.removeAttr("style"),
        (v.style.display = "block");
    }
    function o(e) {
      var t = $("body");
      if (!e) {
        if (-1 === y.bgIndex) return l(y.customBackground), !1;
        e = k[y.bgIndex].brightness;
      }
      t.attr("class", e);
    }
    function s(e) {
      e ? v.play() : v.pause(), (v.autoplay = !!e);
    }
    function c(e) {
      b.getSyncValue("noSyncData", function (t) {
        (void 0 === t.bgIndex || 14 === t.bgIndex) && (t.bgIndex = 4), e(t);
      });
    }
    function r() {
      b.setSyncValue("noSyncData", y);
    }
    function d(e, t) {
      return (
        staticServer +
        "/img/bg/" +
        (t ? "preview/" : "") +
        e +
        (window.Api.Tools.isSupportWebp() ? ".webp" : "")
      );
    }
    function l(e) {
      e &&
        0 !== e.length &&
        (window.RGBaster
          ? g(e)
          : $.getScript(staticServer + "/js/lib/rgbaster.js", function () {
              g(e);
            }));
    }
    function g(e) {
      console.time("calc color"),
        RGBaster.colors(e, {
          success: function (e) {
            console.timeEnd("calc color"),
              (brightness = e.dominant < 128 ? "light" : "dark"),
              $("body").attr("class", brightness);
          },
        });
    }
    var p,
      u,
      m,
      y,
      b = window.Api.Maxthon,
      f = (b.platform, b.max_version),
      h = $("#wallpapers"),
      v = document.getElementById("media"),
      k = [];
    return { init: e };
  })();
  window.configPanel = e;
}); /*!static/js/grid.js*/
("use strict");
var $group_dialog, $grid_container, $top_container, $add_grid, $group_list;
template.on("isThumbImge", function (e) {
  return "string" == typeof e && e.startWith("mx://thumbs/") ? !0 : !1;
});
var grid = {
  hot_grid_html:
    '<li class="top grid">                    <% if(!!this.image) {%>                        <a href="<%= this.url || "" %>" target="_blank" class="thumb" style="background-image:url(<%= this.image %>);">                        </a>                    <% } else { %>                        <a href="<%= this.url || "" %>" %>" target="_blank">                            <div colorBlock="<%=this.colorBlock || "" %>" class="color-block <%=this.colorBlock || "" %>">                                <%=this.title ? this.title.substring(0, 1) : "" %>                            </div>                        </a>                    <% } %>                    </li>',
  grid_html:
    '<li class="main grid">                    <a href="<%= this.url || "" %>" title="" target="_blank" <% if(!!this.image) {%> <% } else {%> class="<%=this.colorBlock || "" %>" <% } %>                        <% if(this.isThumbImge(this.image)) {%>style="background-color:#fff;"<% } %>>                        <% if(!!this.image) {%>                            <% if(this.isThumbImge(this.image)) {%>                                <p class="thumb" style="background-image:url(<%= this.image%>);"></p>                            <% } else {%>                                <img src="<%= this.image %>" alt="<%=this.title || "" %>">                            <% } %>                        <% } else { %>                             <div colorBlock="<%=this.colorBlock || "" %>" class="color-block"><%=this.title || "" %></div>                        <% } %>                    </a>                    <div class="function">                        <strong class="title"><%=this.title || "" %></strong>                        <% if(this.isThumbImge(this.image)) {%><button class="refresh">×</button><% } %>                        <button class="edit"></button>                        <button class="delete"></button>                    </div>                </li>',
  empty_grid_html: '<li class="top grid"><a class="empty">&nbsp;</a></li>',
  add_grid:
    '<li class="grid top"><a class="add" href="javascript:void(0);"><i class="sprite sprite-circle"></i></a></li>',
};
(grid.tranData = function (e) {
  if (e.image || e.colorBlock) {
    if (
      e.image &&
      (delete e.colorBlock,
      (e.image = e.image.replace(/^http:\/\//, "https://")),
      !e.image.match(/^mx:\/\/thumbs\/\?/) &&
        !e.image.match(/^https?:\/\/fastdail-img/))
    ) {
      var i;
      if (e.sq_img || e.re_img) i = e.isHot === !0 ? e.sq_img : e.re_img;
      else {
        var t = e.image.match(/(?:Re|Sq)\/(.+(\.jpg|png|gif)+)(?:\.webp)?/);
        i = t ? t[1] : "offline.png";
      }
      window.Api.Tools.isSupportWebp() && (i += ".webp"),
        (e.sq_md5sum || e.re_md5sum) &&
          (i += "?md5=" + (e.isHot === !0 ? e.sq_md5sum : e.re_md5sum)),
        (e.image =
          cdnServer + "/image/logo/" + (e.isHot === !0 ? "Sq/" : "Re/") + i);
    }
  } else e.colorBlock = "color-block-" + (parseInt(9 * Math.random(), 10) + 1);
  return e;
}),
  (grid.render = function (e, i) {
    return template(e, grid.tranData(i));
  }),
  $(function () {
    function e() {
      o[0] && (document.body.removeChild(o[0]), (o = null));
    }
    function i(e) {
      r &&
        (r.addLastGridThumbnailNode(),
        r.container.removeClass("show"),
        a.close(),
        (r = null),
        e &&
          setTimeout(function () {
            e();
          }, h));
    }
    function t(e, i) {
      var t = this;
      t.uiindex = i;
      for (var n in e) t[n] = e[n];
    }
    function n() {
      return {
        top: document.body.scrollTop + document.documentElement.scrollTop,
        left: document.body.scrollLeft,
      };
    }
    var o,
      r,
      d,
      a,
      l,
      s = window.Api,
      u = s.Maxthon,
      c = [],
      p = {},
      g = {},
      m = {},
      h = 300;
    t.prototype = (function () {
      function t() {
        var e,
          i = this.getGridFixed(),
          t = n();
        return (
          (e = this.node.clone()),
          e.css({
            left: i.left + t.left,
            top: i.top + t.top,
            width: i.width,
            height: i.height,
          }),
          document.body.appendChild(e[0]),
          e
        );
      }
      function s(e, i) {
        var t = "";
        (e = grid.tranData(e)),
          e.image
            ? e.image.startWith("mx://thumbs")
              ? (t +=
                  '<div class="thumbnail loading" url="' + e.url + '"></div>')
              : ((t += '<div class="thumbnail" '),
                (t += '   style="background-image: url(' + e.image + ')">'),
                (t += "</div>"))
            : ((t += '<div class="thumbnail ' + e.colorBlock + '">'),
              (t += "   <span>" + e.title + "</span>"),
              (t += "</div>"));
        var n = $(t)[0];
        return i && i.appendChild(n), n;
      }
      function p(e, i) {
        if (e || this.children) {
          var t,
            n = this,
            e = e || n.list_node,
            i = i || n.children,
            o = i.length;
          for (
            e.innerHTML = "", n.thumburls = [], t = 0;
            (o > 4 ? 4 : o) > t;
            t++
          )
            n.addGridThumbnailNode(i[t], e), n.thumburls.push(i[t].url);
          0 !== n.thumburls.length &&
            setTimeout(function () {
              window.Api.Tools.isThumbExists(n.thumburls, function (e) {
                var i = n.list_node.childNodes;
                e.forEach(function (e, t) {
                  var o = i[t];
                  if (e === !0 && -1 !== o.className.indexOf("loading")) {
                    var r = n.thumburls[t];
                    (o.className = "thumbnail"),
                      (o.style.cssText =
                        "background-image : url(" +
                        newWin.getThumbsUrl(r, 0) +
                        ")");
                  }
                });
              });
            }, 10);
        }
      }
      function v(e) {
        var i,
          t,
          n,
          o,
          r,
          d,
          a,
          l,
          s = g;
        if (this.isHot === !0)
          (i = 8),
            (e = e || this.topuiindex),
            (r = J.floor(e / i)),
            (d = e % i),
            (t = 0.125 * s.top_container_width),
            (a = t * d),
            (l = 0);
        else if (((e = e || this.uiindex), !this.children && this.group))
          (t = 153),
            (n = 11.256),
            (o = 330 * 0.02),
            (i = 5),
            (r = J.floor(e / i)),
            (d = e % i),
            (a = (t + 2 * n) * d),
            (l = (0.7 * t + o) * r);
        else {
          var u = s.container_width;
          u > 0 &&
            ((i = 6),
            (t = 0.15 * u),
            (n = 0.008 * u),
            (o = 0.01 * u),
            (r = J.floor(e / i)),
            (d = e % i),
            (grid_top = (0.7 * t + o) * r),
            (a = (t + 2 * n) * d),
            (l = grid_top));
        }
        return { left: a, top: l };
      }
      function b(e) {
        var i = this.getGridPosition(e);
        this.node.css({ left: i.left + "px", top: i.top + "px" });
      }
      function w() {
        this.node.find(".thumb").css({
          "background-image": "url(" + newWin.getThumbsUrl(this.url, 0) + ")",
        }),
          this.node.removeClass("loading");
      }
      function x(e, t, n) {
        var o = [],
          d = u.max_version;
        if (e.children) {
          var a = e.children;
          (o =
            "1.5.50.3200" === d || d.cmpVersions("5.0.2.700") >= 0
              ? [
                  {
                    id: "open-all-tab",
                    label: Language.getLang("NewTabOpenAll"),
                  },
                  { id: "delete-tab", label: Language.getLang("Delete") },
                  { type: !0 },
                  {
                    id: "open-all-newwin-tab",
                    label: Language.getLang("NewWindowOpenAll"),
                  },
                  {
                    id: "open-all-invisible-tab",
                    label: Language.getLang("NewInvisibleOpenAll"),
                  },
                ]
              : [{ id: "delete-tab", label: Language.getLang("Delete") }]),
            Menu.showPopupMenu(t, n, o, function (i) {
              var t = [];
              switch (
                (a.forEach(function (e) {
                  t.push(e.url);
                }),
                i)
              ) {
                case "open-all-tab":
                  u.useApi("openUrl", { urls: t, mode: "BackgroundTab" });
                  break;
                case "delete-tab":
                  C(e);
                  break;
                case "open-all-newwin-tab":
                  u.useApi("openUrl", { urls: t, mode: "NewWindow" });
                  break;
                case "open-all-invisible-tab":
                  u.useApi("openUrl", { urls: t, mode: "NewPrivateWindow" });
              }
            });
        } else
          (o = [
            { id: "open-tab", label: Language.getLang("NewTabOpen") },
            { id: "edit-tab", label: Language.getLang("Edit") },
            { id: "delete-tab", label: Language.getLang("Delete") },
          ]),
            ("1.5.50.3200" === d || d.cmpVersions("5.0.2.700") >= 0) &&
              o.push.apply(o, [
                { type: !0 },
                {
                  id: "open-newwin-tab",
                  label: Language.getLang("NewWindowOpen"),
                },
                {
                  id: "open-invisible-tab",
                  label: Language.getLang("NewInvisibleOpen"),
                },
              ]),
            Menu.showPopupMenu(t, n, o, function (t) {
              switch (t) {
                case "open-tab":
                  u.useApi("newTabBackground", { url: e.url }), _(e);
                  break;
                case "edit-tab":
                  k(e);
                  break;
                case "delete-tab":
                  C(e);
                  break;
                case "open-newwin-tab":
                  u.useApi("openUrl", { url: e.url, mode: "NewWindow" }),
                    _(e),
                    r && i();
                  break;
                case "open-invisible-tab":
                  u.useApi("openUrl", { url: e.url, mode: "NewPrivateWindow" }),
                    _(e),
                    r && i();
              }
            });
      }
      function _(e) {
        "https://www.baidu.com/index.php?tn=maxthon2&ch=2" === e.url &&
          window.Api.statistic.webSend({
            m: "mx5Commerciallink",
            n: "baidu",
            data: {
              title: "MX5新标签页百度站点",
              url: "https://www.baidu.com/index.php?tn=maxthon2&ch=2",
            },
          });
      }
      function G(e) {
        if (!e.group || "" === e.group) {
          var t = {
            m: "zoneClick",
            data: {
              title: e.title,
              url: e.url,
              position: e.isHot ? e.topuiindex : e.uiindex,
            },
          };
          (t.n = e.isHot === !0 ? "top" : "myfav"),
            datacode && datacode.statistic(t),
            _(e);
        }
        return (
          e.isHot === !0 &&
            u.useApi("common.reportLVTAction", {
              action: "p-mx5Newtab_addTop8",
            }),
          e.url && e.url.startWith("mx://note/?id")
            ? (u.useApi(
                "note.openNoteInPopWindow",
                {
                  pid: e.url.getQueryString("pid"),
                  id: e.url.getQueryString("id"),
                },
                function (e) {
                  0 !== e &&
                    (a && a.close(), window.Api.Tools.showNoteNotFound(e));
                }
              ),
              !1)
            : (e.url.match(/^file:\/\/.*/) || e.url.match(/^mx:\/\/.*/)
                ? setTimeout(function () {
                    u.useApi("newTabUpground", { url: e.url });
                  }, 0)
                : (window.location.href = e.url),
              void (r && i()))
        );
      }
      function T() {
        var e = this;
        e.container &&
          ((r = e),
          d.val(r.getGroupName()),
          $group_list.find(".grid-list-container").removeClass("show"),
          r.container.addClass("show"),
          (a = $group_dialog.dialog({
            init: function () {
              var e = [],
                i = [];
              r.children.forEach(function (t) {
                return t.node.hasClass("loading")
                  ? (e.push(t.url), void i.push(t))
                  : !0;
              }),
                window.Api.Tools.isThumbExists(e, function (e) {
                  e.forEach(function (e, t) {
                    e === !0 && i[t].reload();
                  });
                });
            },
            close: function () {
              return $group_dialog.attr("edit", !1), r && (r = null), !0;
            },
          })));
      }
      function C(e) {
        var i = e;
        return i.children
          ? void window.Api.Tools.showDeleteFolder(i)
          : (f.onRemoveGrid(i.index), void datacode.removeGrid(e));
      }
      function k(e) {
        var i,
          t = e,
          n = r;
        e.group &&
          "" !== e.group &&
          a &&
          (a.close(), $group_dialog.attr("edit", !0), (i = !0), (r = n)),
          newWin.showDialog(
            {
              index: t.index,
              uiinde: t.topuiindex || t.uiindex,
              title: t.title,
              url: t.url,
              image: t.image,
              colorBlock: t.colorBlock,
              group: t.group,
            },
            !0,
            i
          );
      }
      function L(e) {
        e.node.addClass("loading"), window.Api.Tools.reflushThumb(e.url);
      }
      function N() {
        var e = this.node[0].getBoundingClientRect();
        return {
          left: e.left,
          right: e.right,
          width: e.width,
          height: e.height,
          top: e.top,
          bottom: e.bottom,
        };
      }
      function A(e, i) {
        var t,
          o,
          r = n();
        if (
          ((i.top += r.top),
          (i.bottom += r.top),
          (i.left += r.left),
          (i.right += r.left),
          e.left > i.right ||
            i.left > e.right ||
            e.top > i.bottom ||
            i.top > e.bottom)
        )
          return 0;
        (t = e.left > i.left ? i.right - e.left : e.right - i.left),
          (o = e.top > i.top ? i.bottom - e.top : e.bottom - i.top);
        var d = e.width * e.height,
          a = i.width * i.height;
        return (g.area = a > d ? d : a), (t * o) / g.area;
      }
      function y(e) {
        var i = 0,
          t = 0,
          n = $group_dialog.find(".dialog-warp").offset(),
          o = {
            top: n.top,
            left: n.left,
            right: n.left + 948,
            bottom: n.top + 440,
          };
        return e.left - o.right > i ||
          e.right - o.left < i ||
          e.top - o.bottom > t ||
          e.bottom - o.top < i
          ? !0
          : !1;
      }
      function H(e) {
        (m.top = document.body.scrollTop + document.documentElement.scrollTop),
          (m.bottom = m.top + document.documentElement.clientHeight);
        var i = m.top + 10 - e.top,
          t = e.bottom - m.bottom + 10;
        if (i > 0) Y ? K.addHeight(i / 2) : (K.up(e), (Y = !0));
        else if (t > 0 && e.top < m.height)
          Y ? K.addHeight(t / 2) : (K.down(e), (Y = !0));
        else {
          if (!Y) return;
          K.stop(), (Y = !1);
        }
      }
      function E() {
        V && clearTimeout(V),
          (R = !0),
          (V = setTimeout(function () {
            R = !1;
          }, h));
      }
      function I(e, i) {
        var t;
        return (t = i.index);
      }
      function j(e) {
        var i,
          t,
          n = 0;
        for (
          t = r ? r.children : c, i = t.length;
          i > n &&
          ("Add" === t[n].title || "Empty" === t[n].title || e(t[n], n) !== !1);
          n++
        );
      }
      function D(e, i) {
        return (
          (e.isHot === !0 && i.isHot !== !0) ||
          (e.isHot !== !0 && i.isHot === !0)
        );
      }
      function S(e) {
        if ((H(e), !R)) {
          var i, t, n;
          if (O.children)
            (i = O.children),
              j(function (i, n) {
                return n !== O.uiindex &&
                  !D(O, i) &&
                  ((t = A(e, i.getGridFixed())), t > Q)
                  ? (E(), f.onMovingGrid(O.index, i.index, ""), !1)
                  : void 0;
              });
          else if (U)
            (t = A(e, U.getGridFixed())),
              D(O, U)
                ? t > Q
                  ? o.addClass("swap")
                  : (o.removeClass("swap"),
                    U.removeClass("combo"),
                    U.removeClass("current"),
                    (U = null))
                : (t > Q && (E(), f.onMovingGrid(O.index, U.index, O.group)),
                  (z > t || t > Q) && (U.removeClass("combo"), (U = null)));
          else if (r) {
            if (y(e))
              return (
                E(),
                l && (n = l),
                void f.onMovingGrid(O.index, n.index, O.group)
              );
            j(function (i, t) {
              return t !== O.uiindex && A(e, i.getGridFixed()) > Q
                ? (E(), f.onMovingGroup(O.index, i.index, O.group), !1)
                : void 0;
            });
          } else
            j(function (i, n) {
              if (n !== O.uiindex && ((t = A(e, i.getGridFixed())), t > z)) {
                if (((U = i), D(O, U))) U.addClass("current");
                else {
                  if (t > Q)
                    return E(), f.onMovingGrid(O.index, i.index, O.group), !1;
                  U.addClass("combo");
                }
                return !1;
              }
            });
        }
      }
      function M() {
        return grid.render(
          this.isHot === !0 ? grid.hot_grid_html : grid.grid_html,
          this
        );
      }
      function W() {
        function i(e) {
          if (0 === e.button && !N.node.hasClass("loading") && !o) {
            var i = N.getGridFixed();
            (g = i.left),
              (m = i.top),
              (v = e.clientX),
              (b = e.clientY),
              document.addEventListener("mousemove", t, !1),
              document.addEventListener("mouseup", a, !1);
          }
        }
        function t(e) {
          if (0 !== J.abs(e.clientX - v) && 0 !== J.abs(e.clientY - b)) {
            var i = n(),
              t = g + i.left + e.clientX - v,
              r = m + i.top + e.clientY - b,
              d = s.width(),
              a = s.innerHeight(),
              l = {
                left: t,
                right: t + d,
                top: r,
                bottom: r + a,
                width: d,
                height: a,
              };
            w ||
              (s.addClass("notran"),
              (o = N.cloneGridNode()),
              (O = N),
              (w = !0),
              H(l),
              setTimeout(function () {
                o.addClass("notran");
              }, 20),
              s.addClass("draging"),
              o.css({ padding: "0", margin: "0", "z-index": "999" })),
              o.css({ left: t, top: r }),
              S(l);
          }
        }
        function d() {
          var i = N.getGridFixed(),
            t = n();
          o.removeClass("notran"),
            o.css({ left: i.left + t.left, top: i.top + t.top }),
            setTimeout(function () {
              s.removeClass("draging"),
                setTimeout(function () {
                  s.removeClass("notran"), e();
                }, 20);
            }, h);
        }
        function a() {
          if (
            (Y && ((Y = !1), K.stop()),
            document.removeEventListener("mousemove", t, !1),
            document.removeEventListener("mouseup", a, !1),
            w)
          )
            if (((w = !1), T && clearTimeout(T), !U || r)) d();
            else {
              if ((U.removeClass("combo"), X && clearTimeout(X), D(O, U))) {
                if (O.children || U.children)
                  return d(), U.removeClass("current"), void (U = null);
                f.onSwappingGrid(O.index, I(O, U));
              } else if (O.isHot === !0 && U.isHot === !0) d();
              else if (U.children) {
                var e = U.children;
                f.onMovingInGroup(
                  O.index,
                  e[e.length - (O.uiindex > U.uiindex ? 1 : 1)].index,
                  U.title
                );
              } else
                f.onAddGroup(O.index, U.index, Language.getLang("NewFolder"));
              U = null;
            }
        }
        var s,
          c,
          p,
          g,
          m,
          v,
          b,
          w,
          T,
          N = this;
        return (
          N.url || N.children
            ? (N.children
                ? ((N.group = N.title),
                  (s = $('<li class="main grid group"></li>')),
                  (p = $('<div class="thumbnail-container"></div>')),
                  (c = $(
                    [
                      '<div class="function">',
                      '<strong class="title">',
                      N.group,
                      "</strong>",
                      '<button class="delete">×</button>',
                      "</div>",
                    ].join("")
                  )),
                  N.addLastGridThumbnailNode(p[0], N.children),
                  s.append(p),
                  s.append(c),
                  (N.list_node = p[0]),
                  (N.function_node = c[0]),
                  N.list_node.addEventListener("click", function (e) {
                    0 === e.button && N.showGroup();
                  }),
                  N.function_node.addEventListener("click", function (e) {
                    var i = $(e.target);
                    if (i.is("button")) {
                      var t = i.prop("className");
                      switch (t) {
                        case "delete":
                          C(N);
                          break;
                        case "edit":
                          k(N);
                          break;
                        case "refresh":
                          L(N);
                      }
                      return !1;
                    }
                  }))
                : ((s = $(N.html())),
                  s.on("click", function (e) {
                    e.stopPropagation();
                    var i = $(e.target);
                    if (i.is("button")) {
                      var t = i.prop("className");
                      switch (t) {
                        case "delete":
                          C(N);
                          break;
                        case "edit":
                          k(N);
                          break;
                        case "refresh":
                          L(N);
                      }
                      return !1;
                    }
                    return u.max_version.cmpVersions("5.0.1.1600") > 0
                      ? (G(N), !1)
                      : !0;
                  }),
                  N.image &&
                    N.image.startWith("mx://thumbs") &&
                    (s.addClass("loading"),
                    window.Api.Tools.isThumbExists([N.url], function (e) {
                      e.forEach(function (e) {
                        e === !0
                          ? N.node.removeClass("loading")
                          : window.Api.Tools.reflushThumb(N.url);
                      });
                    }))),
              s.on("mousedown", function (e) {
                e.stopPropagation(),
                  e.preventDefault(),
                  i(e),
                  1 === e.button && _(N);
              }),
              s.on("contextmenu", function (e) {
                x(N, e.clientX, e.clientY),
                  e.stopPropagation(),
                  e.preventDefault();
              }))
            : (N.isHot === !0
                ? (s = $(
                    "Add" === N.title ? grid.add_grid : grid.empty_grid_html
                  ))
                : ((s = $(grid.add_grid.replace("top", "main add"))), (l = N)),
              s.on("click", ".add", function () {
                newWin.showDialog(
                  { index: N.index, uiindex: N.topuiindex || N.uiindex },
                  !1
                );
              })),
          (N.node = s),
          N.locate(),
          s
        );
      }
      function B(e) {
        this.node.addClass(e);
      }
      function F(e) {
        this.node.removeClass(e);
      }
      function P() {
        return this.group;
      }
      function q(e) {
        var i = this,
          t = i.children;
        (i.group = e),
          t &&
            (t.forEach(function (i) {
              i.group = e;
            }),
            "" !== e && (i.function_node.firstChild.textContent = e));
      }
      var O,
        U,
        R,
        V,
        X,
        Y,
        z = 0.2,
        Q = 0.8,
        J = window.Math,
        K = (function () {
          function e(e) {
            (d = e), (a = p.offsetHeight), (l = p.scrollTop()), (u = g * d);
          }
          function i() {
            (R = !0),
              (c = setInterval(function () {
                (l = p.scrollTop()),
                  (l += u),
                  p.scrollTop(l),
                  ((u > 0 && l + a >= s) || (0 > u && 0 >= l)) && o();
              }, m));
          }
          function t() {
            o(), e(-1), i();
          }
          function n() {
            o(), e(1), i();
          }
          function o() {
            c && clearTimeout(c), (R = !1);
          }
          function r(e) {
            u = (g + e) * d;
          }
          var d,
            a,
            l,
            s,
            u,
            c,
            p = $(document),
            g = 5,
            m = 15;
          return { up: t, stop: o, down: n, addHeight: r };
        })();
      return {
        dom: W,
        html: M,
        locate: b,
        reload: w,
        addClass: B,
        removeClass: F,
        getGroupName: P,
        setGroupName: q,
        showGroup: T,
        showDelete: C,
        getGridPosition: v,
        getGridFixed: N,
        cloneGridNode: t,
        addGridThumbnailNode: s,
        addLastGridThumbnailNode: p,
      };
    })();
    var f = (function () {
        function a() {
          (S = $(".nav-body")),
            ($grid_container = $("#grid_list_container")),
            ($group_dialog = $("#group")),
            ($top_container = $("#top")),
            ($add_grid = $("#add-grid")),
            ($group_list = $("#group_list")),
            $grid_container.empty(),
            $top_container.empty(),
            (d = $("#group-title")),
            d.on("click", function (e) {
              e.stopPropagation(),
                d.hasClass("editable") ||
                  (d.addClass("editable"),
                  this.focus(),
                  (document.onkeydown = function (e) {
                    return 13 === e.keyCode
                      ? (d.removeClass("editable"), !1)
                      : !0;
                  }));
            }),
            d.on("blur", function () {
              var e = this.value.trim(),
                i = e.replace(/[^\x00-\xff]/g, "**").length;
              0 === i && (e = Language.getLang("NewFolder")),
                i > 20 && (e = e.substring(0, 20));
              var t = r.getGroupName();
              if ("" === e || e === t) this.value = t;
              else {
                var n = r.children;
                N(r.index, n[n.length - 1].index, e);
              }
              Menu.hideAndRemovePopupMenu(), d.removeClass("editable");
            }),
            (g.top_container_width = $top_container.width()),
            (g.container_width = S.width()),
            (g.height =
              0.15 * g.container_width * 0.7 + 0.01 * g.container_width);
        }
        function f() {
          (g.top_container_width = $top_container.width()),
            (g.container_width = S.width()),
            T();
        }
        function v(e) {
          var i = [],
            t = 0;
          (c = []),
            e.forEach(function (e) {
              if (e) {
                if ("Add" === e.title || "Empty" === e.title) return !0;
                e.group && delete e.group,
                  e.uiindex && delete e.uiindex,
                  e.isHot === !0
                    ? ((e.topuiindex = t++), i.push(e))
                    : (e.children &&
                        e.children.forEach(function (i, t) {
                          return i ? void 0 : (e.children.splice(t, 1), !0);
                        }),
                      c.push(e));
              }
            });
          var n = c.length - 1;
          c.length > 0 && "Add" === c[n].title && c[n].type
            ? c.push.apply(c, b(i))
            : (c.push({ title: "Add", type: "button" }),
              c.push.apply(c, b(i)),
              u.setSyncValue(MY_SITE, c));
        }
        function b(e) {
          var i = e.length;
          if (8 > i) {
            e.push({ title: "Add", isHot: !0, topuiindex: i });
            for (var t = 0; 8 - i > t; t++)
              e.push({ title: "Empty", isHot: !0, topuiindex: i + 1 + t });
          } else e.splice(8);
          return e;
        }
        function w(e) {
          p[e.url] &&
            ((e.sq_img = p[e.url].sq_img || "offline.png"),
            (e.re_img = p[e.url].re_img || "offline.png"),
            (e.re_md5sum = p[e.url].re_md5sum || ""),
            (e.sq_md5sum = p[e.url].sq_md5sum || ""));
        }
        function x(e) {
          var i;
          (p = e),
            c.forEach(function (e, n) {
              e.children
                ? ((i = new t(e, n)),
                  (i.container = $('<div class="grid-list-container"></div>')),
                  (i.children = []),
                  e.children.forEach(function (e, n) {
                    (e.group = i.title),
                      (e = new t(e, n)),
                      w(e),
                      i.container.append(e.dom()),
                      (i.children[n] = e);
                  }),
                  $group_list.append(i.container),
                  $grid_container.append(i.dom()),
                  (e = i))
                : ((e = new t(e, n)),
                  w(e),
                  e.isHot === !0
                    ? $top_container.append(e.dom())
                    : $grid_container.append(e.dom())),
                (e.index = n),
                (c[n] = e);
            });
        }
        function _(e, i, t) {
          var o = 8,
            r = 12,
            d = n();
          i > 1 && (o += 50),
            i % 2 == 1 && (r += 72),
            (o += t.top + d.top),
            (r += t.left + d.left),
            e.removeClass("notran"),
            setTimeout(function () {
              e.addClass("small"),
                setTimeout(function () {
                  e[0].style.cssText =
                    "left:" +
                    r +
                    "px; top: " +
                    o +
                    "px; width:71px; height: 46px;";
                }, 5);
            }, 5);
        }
        function G(e, i) {
          a(), v(e), x(i), T();
        }
        function T() {
          var e,
            i = 0,
            t = 0,
            n = g.height;
          c.forEach(function (n, o) {
            if (((n.uiindex = o), n.isHot === !0)) {
              if (t > 7) return n.node.remove(), c.splice(o, 1), !1;
              n.topuiindex = t++;
            }
            n.locate(),
              (e = n.children),
              e &&
                e.forEach(function (e, t) {
                  (e.uiindex = t), e.locate(t), (e.index = e.url ? i++ : i);
                }),
              (n.index = i++);
          }),
            ($grid_container[0].style.height =
              c[c.length - 9].getGridPosition().top + n + "px"),
            (m.height = document.body.scrollHeight);
        }
        function C(e) {
          if (0 !== e && !e) return { grid: l, i: -1, j: -1 };
          var i,
            t,
            n,
            o,
            r = 0,
            d = -1,
            a = c.length;
          e: for (; a > r; r++) {
            if (((t = c[r]), t.index == e)) {
              i = t;
              break;
            }
            if (t.children) {
              for (d = 0, o = t.children.length; o > d; d++)
                if (((n = t.children[d]), n.index == e)) {
                  i = n;
                  break e;
                }
              d = -1;
            }
          }
          return i ? { grid: i, i: r, j: d } : !1;
        }
        function k(e, t, n) {
          var o,
            r,
            d = C(e),
            a = C(t),
            l = d.grid,
            s = a.grid;
          d.j >= 0 && (o = c[d.i]),
            a.j >= 0 && (r = c[a.i]),
            l.group && "" !== l.group
              ? "" == n
                ? (c.splice(a.i, 0, c.splice(d.i, 1)[0]),
                  datacode.moveGrid(l.isHot, s.isHot))
                : (delete l.group,
                  c.splice(a.i, 0, o.children.splice(d.j, 1)[0]),
                  0 === o.children.length
                    ? (c.splice(d.i, 1), o.node.remove())
                    : (o.container[0].removeChild(l.node[0]),
                      o.addLastGridThumbnailNode()),
                  $grid_container.append(l.node),
                  i())
              : (c.splice(a.i, 0, c.splice(d.i, 1)[0]),
                datacode.moveGrid(l.isHot, s.isHot)),
            window.Api.Grid.moveGridItem(
              { i: d.i, j: d.j },
              { i: a.i, j: a.j }
            ),
            T();
        }
        function L(e, i) {
          var t,
            n,
            o = C(e),
            d = C(i);
          o.j >= 0 && (t = c[o.i]),
            d.j >= 0 && (n = c[d.i]),
            r.children.splice(d.j, 0, r.children.splice(o.j, 1)[0]),
            t.addLastGridThumbnailNode(),
            window.Api.Grid.moveGridItem(
              { i: o.i, j: o.j },
              { i: d.i, j: d.j }
            ),
            T(),
            datacode.moveGrid(!1, !1);
        }
        function N(e, i, t) {
          var n = C(e),
            n = c[n.i];
          (n.title = t),
            n.setGroupName(t),
            clearTimeout(M),
            (M = setTimeout(function () {
              window.Api.Grid.updateGridGroup(n.uiindex, t);
            }, h));
        }
        function A(i, t, n) {
          {
            var d,
              a,
              l,
              s = C(i),
              u = C(t),
              p = s.grid;
            u.grid;
          }
          if (
            (s.j >= 0 && (d = c[s.i]),
            u.j >= 0 && (a = c[u.i]),
            p.setGroupName(n),
            a.children.splice(a.children.length, 0, c.splice(s.i, 1)[0]),
            $grid_container[0].removeChild(p.node[0]),
            a.container.append(p.node),
            o && !r)
          ) {
            p.removeClass("draging"),
              p.removeClass("notran"),
              (l = a.children.length - 1);
            var g = a.getGridFixed();
            _(o, l, g),
              setTimeout(function () {
                a.addLastGridThumbnailNode(),
                  window.Api.Grid.insertGridItem(s.i, u.i),
                  T(),
                  e();
              }, h);
          }
          datacode.moveGrid(!1, !1);
        }
        function y(i, n, r) {
          var d,
            a,
            l,
            s = C(i),
            u = s.grid,
            p = C(n),
            g = p.grid,
            m = p.i + (i > n ? 0 : -1),
            f = new t(
              {
                title: r,
                container: $('<div class="grid-list-container"></div>'),
                children: [],
              },
              m
            );
          (d = f.children),
            i > n
              ? ((d[1] = c.splice(s.i, 1)[0]), (d[0] = c.splice(p.i, 1)[0]))
              : ((d[0] = c.splice(p.i, 1)[0]), (d[1] = c.splice(s.i, 1)[0])),
            o &&
              ((l = g.getGridFixed()),
              (a = g.cloneGridNode()),
              a.css({ padding: 0, margin: 0, overflow: "hidden" }));
          var v = f.dom();
          v.css({ "z-index": "-100" }),
            $grid_container.append(v),
            $group_list.append(f.container),
            c.splice(m, 0, f),
            f.setGroupName(r),
            $grid_container[0].removeChild(g.node[0]),
            $grid_container[0].removeChild(u.node[0]),
            f.container.append(g.node),
            f.container.append(u.node),
            u.removeClass("draging"),
            u.removeClass("notran"),
            o &&
              (_(a, 0, l),
              _(o, 1, l),
              setTimeout(function () {
                v.removeAttr("style"),
                  window.Api.Grid.addGridGroup(m, s.i, p.i, r),
                  T(),
                  e(),
                  a.remove();
              }, h - 150)),
            datacode.createFolder({});
        }
        function H(i, r) {
          var d,
            a,
            l,
            s,
            u,
            p,
            p,
            g = C(i),
            m = g.grid,
            f = C(r),
            v = f.grid,
            b = n();
          o &&
            (o.removeClass("notran"),
            (a = v.getGridFixed()),
            (d = v.cloneGridNode()),
            d.css({ padding: 0, margin: 0, overflow: "hidden" })),
            (l = m.getGridFixed()),
            d.css({ left: l.left + b.left, top: l.top + b.top }),
            o.css({ left: a.left + b.left, top: a.top + b.top }),
            (p = $.extend({}, v)),
            (dragData = $.extend({}, m)),
            m.isHot === !0
              ? ((p.isHot = !0),
                (p.topuiindex = m.topuiindex),
                (dragData.isHot = !1),
                delete dragData.topuiindex,
                (dragData.uiindex = v.uiindex))
              : ((dragData.isHot = !0),
                (dragData.topuiindex = v.topuiindex),
                (p.isHot = !1),
                delete p.topuiindex,
                (p.uiindex = m.uiindex)),
            (s = new t(p, m.uiindex)),
            m.node.replaceWith(s.dom().addClass("draging")),
            (u = new t(dragData, v.uiindex)),
            v.node.replaceWith(u.dom().addClass("draging")),
            c.splice(g.i, 1, s),
            c.splice(f.i, 1, u),
            m.removeClass("draging"),
            m.removeClass("notran"),
            o &&
              setTimeout(function () {
                u.node.removeClass("draging"),
                  s.node.removeClass("draging"),
                  window.Api.Grid.swapGridItem(g.i, E(p), f.i, E(dragData)),
                  T(),
                  e(),
                  d.remove(),
                  datacode.moveGrid(!0, !1);
              }, h);
        }
        function E(e) {
          var i = {
            title: e.title,
            image: e.image,
            url: e.url,
            isHot: e.isHot,
          };
          return i.image || (delete i.image, (i.colorBlock = e.colorBlock)), i;
        }
        function I(e, i) {
          var n,
            o,
            r,
            d = i || l;
          (o = c),
            (n = d.uiindex),
            d.isHot === !0 && (e.topuiindex = d.topuiindex),
            (e.uiindex = n),
            (r = new t(e, n)),
            o.splice(n, 0, r),
            d.node.parent().append(r.dom()),
            window.Api.Grid.insertGridItem(n, -1, E(e)),
            T();
        }
        function j(e) {
          var i,
            n,
            o = C(e.index),
            r = o.i,
            d = o.j;
          0 > d
            ? (e.isHot === !0 && (e.topuiindex = o.grid.topuiindex),
              (n = new t(e, r)),
              (i = c[r].node.parent()),
              (c[r] = n),
              (n.uiindex = r))
            : ((e.group = o.grid.group),
              (n = new t(e, d)),
              (c[r].children[d] = n),
              (n.uiindex = d),
              (i = c[r].container),
              c[r].addLastGridThumbnailNode()),
            i.append(n.dom()),
            o.grid.node.remove(),
            T(),
            window.Api.Grid.updateGridItem(r, d, E(e));
        }
        function D(e) {
          var n,
            o = C(e),
            r = o.grid,
            d = o.i,
            a = o.j;
          r.addClass("remove"),
            setTimeout(function () {
              if ((r.node.remove(), 0 > a)) {
                if ((c.splice(d, 1), r.isHot === !0)) {
                  var e,
                    o = c.length,
                    l = c[o - 1];
                  (e =
                    l.url || ("Add" !== l.title && "Empty" !== l.title)
                      ? new t({ title: "Add", isHot: !0 }, o)
                      : new t({ title: "Empty", isHot: !0 }, o)),
                    (e.topuiindex = r.topuiindex),
                    c.splice(o, 0, e),
                    $top_container.append(e.dom());
                }
              } else (n = c[d]), n.children.splice(a, 1), n.children && 0 === n.children.length ? (c.splice(d, 1), n.node.remove(), i()) : n.addLastGridThumbnailNode();
              window.Api.Grid.removeGridItem(d, a), T();
            }, h);
        }
        var S;
        window.addEventListener("resize", s.Tools.throttle(f, 100, 300), !1);
        var M;
        return {
          getGridItem: C,
          onAddGroup: y,
          onRemoveGrid: D,
          onMovingGrid: k,
          onMovingInGroup: A,
          onGetGridList: G,
          onMovingGroup: L,
          onSwappingGrid: H,
          onInsertGridItem: I,
          onUpdateGridItem: j,
          onSetGroupName: N,
        };
      })(),
      v = !1;
    u.useApi("quickaccess.addEventListener", {}, function (e) {
      if (!$.isEmptyObject(e))
        switch ((console.log(e), e.type)) {
          case "thumbUpdated":
            var i = e.data;
            setTimeout(
              function (e) {
                for (var i = 0; i < c.length; i++) {
                  var t = c[i];
                  if (t.node.hasClass("loading") && e === t.url) {
                    t.reload();
                    break;
                  }
                  if (t.children && t.children.length > 0)
                    for (
                      var n = t.children,
                        o = t.list_node.childNodes,
                        r = Math.min(n.length, 4),
                        d = 0;
                      r > d;
                      d++
                    ) {
                      var a = o[d];
                      if (
                        ((t = n[d]),
                        -1 !== a.className.indexOf("loading") && e === t.url)
                      ) {
                        (a.className = "thumbnail"),
                          (a.style.cssText =
                            "background-image : url(" +
                            newWin.getThumbsUrl(t.url, 0) +
                            ")");
                        break;
                      }
                    }
                }
              },
              0,
              i
            );
            break;
          case "guestSuccess":
            s.Grid.getGridDataList();
            break;
          case "guest5Success":
            s.Grid.getGridDataList();
            break;
          case "dataSyncCompleted":
            if (u.max_version.cmpVersions("5.0.3.400") > 0)
              return void s.Grid.getGridDataList();
            v || ((v = !0), s.Grid.getGridDataList());
            break;
          case "addNewSite":
            var t = { url: e.url, title: e.title },
              n = /.*\:\/\/([^\/]*).*/,
              o = t.url.match(n),
              r = "";
            if (("undefined" != typeof o && null != o && (r = o[1]), "" !== r))
              e: for (var d = 0; d < SITE_LIST.length; d++)
                for (var a = SITE_LIST[d], l = 0; l < a.list.length; l++) {
                  var p = a.list[l],
                    g = p.url;
                  if (g.indexOf(r) >= 0) {
                    (t.image = p.image), (d = SITE_LIST.length);
                    break e;
                  }
                  if (p.match)
                    for (var m = 0; m < p.match.length; m++) {
                      var h = p.match[m];
                      if (h.indexOf(r) >= 0) {
                        (t.image = p.image), (d = SITE_LIST.length);
                        break e;
                      }
                    }
                }
            t.image ||
              (t.image =
                "mx://thumbs/?reflush=0&stamp=" +
                new Date().getTime() +
                "&url=" +
                t.url),
              f.onInsertGridItem(t),
              datacode.statistic({
                m: "sendintoqa",
                data: { title: t.title, href: t.href },
              });
        }
    }),
      (window.Controller = f),
      (window.Api.dialog = (function () {
        function e() {
          a.close();
        }
        return { close: e };
      })());
  }); /*!static/js/index.js*/
("use strict");
$(function () {
  function t(t) {
    var e = Api.Maxthon.max_version,
      n = Api.Maxthon.pn,
      i = "zh-cn" === t ? t : "en-us";
    return (
      "ru-ru" === t && (i = "ru-base"),
      "7201577005" === n && "ru-ru" === t && (i = t),
      "ruixing" !== n ||
        "zh-cn" !== t ||
        ("5.1.1.1000" !== e && "5.1.2.3000" !== e) ||
        (i = "ruixing"),
      ("5cstbaidu201811v1" === n || "5cstbaidu201811v2" === n) &&
        (i = "baidu_201811"),
      a("page_data", "local_page_data", t, "/static/res/i18n/data_" + i + ".js")
    );
  }
  function e(t) {
    return a("page_tpl", "local_page_template", t, "/static/res/tpl/page.tpl");
  }
  function a(t, e, a, n) {
    return new Promise(function (i) {
      var o = document.getElementById(t).getAttribute("version"),
        r = localStorage.getItem(e);
      r &&
      (r = JSON.parse(r)) &&
      r.lang === a &&
      r.version === o &&
      !$.isEmptyObject(r.data)
        ? i(r.data)
        : $("#" + t).load(n + "?v=" + o, function (t) {
            i(t),
              localStorage.setItem(
                e,
                JSON.stringify({ version: o, lang: a, data: t })
              );
          });
    });
  }
  function n(t) {
    var e,
      a =
        __PRELOAD__["map_list.json"] ||
        JSON.parse(localStorage.getItem("MAP_LIST_JSON")),
      n = window.Api.Maxthon;
    if ("zh-cn" === l && a && a.activity && a.activity.length > 0) {
      var c = Date.now();
      a.activity.forEach(function (t) {
        (t.stime = t.stime),
          (t.etime = t.etime),
          t.stime < c && c < t.etime && (e = t);
      });
    }
    var s = template(t, { lang: l, activity: e });
    (document.getElementById("wrapper").innerHTML = s),
      window.Api.Grid.getGridDataList(a),
      e && i(e),
      "zh-cn" == l && r("2020-10-21-0", "2020-11-12-0") && o();
    var v = !0,
      d = null;
    if (
      ($(".nav-header-menu li").on("mouseover mouseout", function (t) {
        t.stopPropagation();
        var e = $(this),
          a = e.index(),
          i = e.data("menu-name");
        d && clearTimeout(d),
          (d = setTimeout(
            function (t) {
              "mouseover" == t &&
                ("feed" !== i && u
                  ? $("#activity-floater").show()
                  : $("#activity-floater").hide(),
                e.siblings().removeClass("active"),
                e.addClass("active"),
                "activity" === i &&
                  window.Api.statistic.webSend({
                    m: "activityTab",
                    n: "activityTitle",
                    data: { title: e.attr("data-t") },
                  }),
                "feed" === i && v && (window.infoService.init(), (v = !1)),
                $(".nav-body > div").hide().eq(a).show(),
                n.useApi(
                  "config.set",
                  { key: "newtab.nav_menu", value: i },
                  function () {}
                ));
            },
            300,
            t.type
          ));
      }),
      e && "true" === e.is_view)
    ) {
      $('.nav-header-menu [data-menu-name="activity"]').trigger("mouseover");
    } else
      n.useApi("config.get", { key: "newtab.nav_menu" }, function (t) {
        var e = t && "string" == typeof t ? t : "favor",
          a = $(".nav-header-menu [data-menu-name=" + e + "]");
        a.length
          ? a.trigger("mouseover")
          : ($(".nav-header-menu li").eq(0).trigger("mouseover"),
            n.useApi(
              "config.set",
              { key: "newtab.nav_menu", value: "favor" },
              function () {}
            ));
      });
  }
  function i(t) {
    a("activity_tpl", "local_act_template", l, "/static/res/tpl/activity.tpl")
      .then(function (e) {
        var a = template(e, { activity: t });
        (document.getElementById("activity").innerHTML = a),
          $("#activity_container").on("mousedown", "li a", function (t) {
            if (2 !== t.button) {
              var e = $(this),
                a = {
                  m: "activityTab",
                  n: e.attr("data-n"),
                  data: { title: e.attr("title"), url: e.attr("href") },
                };
              window.Api.statistic.webSend(a);
            }
          });
      })
      ["catch"](function (t) {
        console.error(t);
      });
  }
  function o() {
    var t = window.Api.statistic.webSend,
      e = localStorage.getItem("floater_2018d12"),
      a = $("#activity-floater");
    (e && e === a.attr("tags")) ||
      ((u = !0),
      $("#activity-floater").show(),
      t({ m: "floater", m: "2020_1111", o: "rbag_show" })),
      a.on("click", "span", function (e) {
        (u = !1),
          e.preventDefault(),
          e.stopPropagation(),
          $("#activity-floater").hide(),
          localStorage.setItem("floater_2018d12", a.attr("tags")),
          localStorage.removeItem("floater"),
          t({ m: "floater", m: "2020_1111", o: "rbag_close" });
      }),
      a.on("click", function () {
        t({ m: "floater", m: "2020_1111", o: "rbag_click" });
      });
  }
  function r(t, e) {
    return !c(t) && c(e) ? !0 : void 0;
  }
  function c(t) {
    var e = new Date(),
      a = t.split("-"),
      n =
        1e6 * e.getFullYear() +
        1e4 * (e.getMonth() + 1) +
        100 * e.getDate() +
        e.getHours(),
      i = 0 - 1e6 * a[0] - 1e4 * a[1] - 100 * a[2] - a[3];
    return -i > n ? !0 : !1;
  }
  function s() {
    var t = window.Api.statistic.webSend,
      e = "2020-12-05-0",
      a = "2020-12-13-0",
      n = "https://s.click.taobao.com/BYPRgtu";
    !c(e) && c(a)
      ? (localStorage.getItem("skin-closed") || $("#skin").show(),
        t({ m: "skin", m: "2020_1212", o: "show" }))
      : localStorage.removeItem("skin-closed"),
      $("#skin-top-btn").on("click", function (e) {
        e.preventDefault(),
          e.stopPropagation(),
          localStorage.setItem("skin-closed", 1),
          $("#skin").hide(),
          t({ m: "skin", m: "2020_1212", o: "close" });
      }),
      $("#skin").on("click", function () {
        window.open(n, "_blank"), t({ m: "skin", m: "2020_1212", o: "click" });
      });
  }
  require("widget/header/header"),
    require("widget/search/search"),
    template.on("getLang", function (t) {
      return Language.getLang(t);
    });
  var l = navigator.language.toLocaleLowerCase();
  Promise.all([e(l), t(l)])
    .then(function (t) {
      $("#page_data").append(t[1]), n(t[0]);
    })
    ["catch"](function (t) {
      console.error(t);
    }),
    $(document)
      .on("contextmenu", function (t) {
        $(t.target).is("input") || t.preventDefault();
      })
      .on("dragstart", function (t) {
        return $(t.target).closest(".allow-drag").length
          ? void 0
          : (t.preventDefault(), !1);
      }),
    window.addEventListener("blur", function () {
      Menu.hideAndRemovePopupMenu();
    });
  var u = !1;
  "zh-cn" == l && s();
}); /*!static/js/hot-plugin.js*/
("use strict");
$(function () {
  function n(n) {
    $.getJSON(p + "/server/hot.php", i)
      .done(function () {})
      .fail(function () {
        console.log(arguments);
      }),
      "function" == typeof n && n();
  }
  function i(n) {
    (n = n || {}),
      n.lastmodify != localStorage.getItem("has-update-plugin-" + g) &&
        ((f = n.lastmodify), $(".switch-action").addClass("has-update")),
      l(n.data.slice(0, 2)),
      e(n.data.slice(2, 6)),
      o();
  }
  function l(n) {
    $("#plugin-new").html(n.map(t));
  }
  function t(n) {
    return (
      '<div class="plugin-new-item" file_def="' +
      n.file_def +
      '" file_url="' +
      n.download_url +
      '" file_id="' +
      n.file_id +
      '"><a href="' +
      n.url +
      '" target="_blank"><div class="plugin-new-tag"></div><img src="' +
      n.icon_img +
      '" alt="" class="plugin-new-img"><div class="plugin-new-info"><div class="plugin-new-title">' +
      n.title +
      '</div><div class="plugin-new-desc">' +
      n.desc +
      '</div></div></a><a href="' +
      n.download_url +
      '" class="plugin-new-add">' +
      Language.getLang("hotPluginAdd") +
      "</a></div>"
    );
  }
  function e(n) {
    var i = n.map(a);
    i.push(u()), $("#plugin-list").html(i);
  }
  function a(n) {
    return (
      '<div class="plugin-list-item" file_def="' +
      n.file_def +
      '" file_url="' +
      n.download_url +
      '" file_id="' +
      n.file_id +
      '"><a href="' +
      n.url +
      '" target="_blank"><img src="' +
      n.icon_img +
      '" alt=""><div class="plugin-list-title">' +
      n.title +
      '</div><a href="' +
      n.download_url +
      '" class="plugin-list-btn">' +
      Language.getLang("hotPluginAdd") +
      "</a></a></div>"
    );
  }
  function u() {
    return (
      '<a href="' +
      p +
      '/all/hot.php" target="_blank" class="plugin-list-add"><i></i><div class="plugin-list-title">' +
      Language.getLang("hotPluginMore") +
      "</div></div>"
    );
  }
  function o() {
    $(".plugin-list-btn, .plugin-new-add").on("click", function (n) {
      window.external &&
        external.mxCall &&
        (n.preventDefault(), s($(this).parent(), "app"));
    });
  }
  function s(n, i) {
    if ("skin" === i) var l = external.mxCall("GetSkinFxVersion");
    else if ("app" === i) {
      var l = external.mxCall("GetAppFxVersion");
      "1.0.0" === l && (l = "1.0.1");
    }
    var t = n.attr("file_def"),
      e = n.attr("file_url"),
      a = n.attr("file_id");
    r(l, t, e, i, a);
  }
  function r(n, i, l, t) {
    var e = d(n, i);
    -1 !== e
      ? ((l = l.replace(/^https/, "http")),
        "skin" === t
          ? external.mxCall("InstallSkin", l)
          : "app" === t && external.mxCall("InstallApp", l))
      : window.open(l);
  }
  function d(n, i) {
    for (var l, t, n = c(n), i = c(i), e = 0; ; ) {
      if (((l = n[e]), (t = i[e]), null == l && null == t)) return 0;
      if (null == l) return -1;
      if (null == t) return 1;
      if (l != t) {
        var a = l > t ? 1 : -1;
        return a;
      }
      e++;
    }
  }
  function c(n) {
    for (var i = n.split("."), l = 0; l < i.length; l++)
      i[l] = parseInt(i[l], 10);
    return i;
  }
  var f,
    g = navigator.language.toLowerCase(),
    p = "zh-cn" == g ? "//extension.maxthon.cn" : "//extension.maxthon.com";
  $(document).on("click", ".switch-action", function () {
    var n = $("#hot-plugin-dialog");
    f && localStorage.setItem("has-update-plugin-" + g, f),
      $(this).removeClass("has-update"),
      n.show(),
      n.find(".close").one("click", function () {
        n.hide();
      });
  }),
    n();
}); /*!static/js/info-service.js*/
("use strict");
!(function () {
  function e() {
    var e = "",
      t = "";
    $.each(h, function (i, n) {
      (e +=
        '<a href="#"data-category="' + n.category + '">' + n.title + "</a>"),
        (t += '<div class="feed-pane"></div>');
    }),
      $("#news-feed").find(".feed-header").html(e),
      $("#news-feed").find(".feed-content").append(t);
  }
  function t() {
    var e = $.ajax({
      url: "//pc-newtab.maxthon.com/static/newtab/hot-words.json",
      dataType: "json",
      cache: !1,
      success: function (e) {
        (u.hotWord = e), n();
      },
      error: function () {},
    });
    return e;
  }
  function i() {
    var e = t();
    $("#word-header-fresh").on("click", function (i) {
      i.preventDefault(),
        200 !== e.status ? (e.abort(), (e = t())) : n(),
        window.Api.statistic.webSend({
          m: "hot search",
          o: "change",
          dt: "user",
        });
    });
  }
  function n(e) {
    var t = "",
      e = u.hotWord.slice((v % 2) * g, (v++ % 2) * g + g);
    $.each(e, function (e, i) {
      t += a(e + 1, i);
    }),
      $("#word-content").html(t);
  }
  function a(e, t) {
    return (
      '<a class="word-item" href="' +
      t.url +
      '" target="_blank"><div class="word-item-left">' +
      e +
      '.<span class="word-item-title">' +
      t.key +
      '</span></div><div class="word-item-right">' +
      (t.tendency > 0 ? "<i></i>" : "") +
      t.count +
      "</div></a>"
    );
  }
  function o() {
    i(), e(), c(), m(), $(".feed-header a").eq(w).trigger("click");
  }
  function c() {
    $(".feed-header").on("click", "a", function (e) {
      e.preventDefault();
      var t = $(this),
        i = t.index();
      t.hasClass("active") ||
        (t.siblings(".active").removeClass("active"),
        t.addClass("active"),
        (w = i),
        d(i));
    }),
      $(window).on("scroll", function () {
        $("#infobox").is(":visible") &&
          ($(document).height() - ($(window).height() + window.scrollY) < 100 &&
            r(w),
          m());
      }),
      $("#news-feed").on("click", ".feed-item", function () {
        window.Api.statistic.webSend({
          m: "information flow",
          n: h[w].category,
          o: "click",
          dt: "user",
          data: {
            title: $(this).find(".feed-item-header").text(),
            url: $(this).attr("href"),
          },
        });
      }),
      $("#hot-word").on("click", ".word-item", function () {
        window.Api.statistic.webSend({
          m: "hot search",
          o: "click",
          dt: "user",
          data: {
            title: $(this).find(".word-item-title").text(),
            url: $(this).attr("href"),
          },
        });
      }),
      $("#back_top").on("click", function (e) {
        e.preventDefault(), $("html,body").animate({ scrollTop: 0 }, 300);
      }),
      $(".news-load-error").on("click", "a", function (e) {
        e.preventDefault(), d(w);
      });
  }
  function s(e) {
    e
      ? ($(".feed-pane").hide(), $(".news-loading").show())
      : ($(".feed-pane").eq(w).show(), $(".news-loading").hide()),
      $(".news-load-error").hide();
  }
  function d(e) {
    var t;
    ("number" == typeof e && e in h) || (e = 0),
      (t = h[e].category),
      s(!0),
      $.ajax({
        url: "//pc-newtab.maxthon.com/static/newtab/" + t + ".json",
        dataType: "json",
        cache: !1,
        timeout: 6e3,
        success: function (i) {
          var n;
          (u[t] = i), $(".feed-pane").eq(e).empty(), (n = r(e)), s(!1);
        },
        error: function () {
          $(".feed-pane").hide(),
            $(".news-loading").hide(),
            $(".news-load-error").show();
        },
      });
  }
  function r(e) {
    var t = (u[h[e].category] || []).splice(0, 10),
      i = "";
    $.each(t, function (e, t) {
      i += t.images && t.images.length >= 3 ? l(t) : f(t);
    }),
      $(".feed-pane").eq(e).append(i);
  }
  function l(e) {
    var t = "";
    return (
      $.each(e.images, function (i, n) {
        t +=
          '<div class="feed-item-img"><img src="' +
          n +
          '" alt="' +
          e.title +
          '"></div>';
      }),
      (t +=
        '<div class="feed-item-img-more"><span>查看更多&nbsp;&gt;</span></div>'),
      '<a class="feed-item" target="_blank" href="' +
        e.link +
        '"><h4 class="feed-item-header">' +
        e.title +
        '</h4><div class="feed-item-img-list clearfix">' +
        t +
        '</div><div class="feed-item-info"><span class="feed-item-time">' +
        (e.ctime || e.time) +
        "</span></div></a>"
    );
  }
  function f(e) {
    return (
      '<a class="feed-item single clearfix" href="' +
      e.link +
      '" target="_blank"><div class="feed-item-img-list clearfix"><div class="feed-item-img"><img src="' +
      e.images[0] +
      '" alt="' +
      e.title +
      '"></div></div><h4 class="feed-item-header">' +
      e.title +
      '</h4><div class="feed-item-info"><span class="feed-item-time">' +
      (e.ctime || e.time) +
      "</span></div></a>"
    );
  }
  function m() {
    document.documentElement.scrollTop > 300
      ? $("#back_top").fadeIn()
      : $("#back_top").fadeOut();
  }
  var h = [
      { category: "military", title: "军事" },
      { category: "ent", title: "娱乐" },
      { category: "sports", title: "体育" },
      { category: "society", title: "社会" },
      { category: "tech", title: "科技" },
      { category: "auto", title: "汽车" },
    ],
    u = {},
    w = 0,
    v = 0,
    g = 10,
    p = { getFeedData: d, getHotWord: t, initHotWord: i, init: o };
  window.infoService = p;
})();
