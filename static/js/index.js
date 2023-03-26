/**
 *  页面初始化
 *  @author  guotingjie@maxthon.net
 */
$(function () {
  var lang = navigator.language.toLocaleLowerCase();
  var subfix;
  switch (lang) {
    case 'zh-cn':
      subfix = 'zh-cn';
      break;
    case 'ru':
    case 'ru-ru':
    case 'ru-by':
    case 'ru-md':
    case 'ru-ua':
    case 'be':
    case 'uk':
      subfix = 'ru-ru';
      break;
    default:
      subfix = 'en-us';
  }
  $.getScript('/static/i18n/data_' + subfix + '.js', function () {
    window.Api.Grid.getGridDataList();
  });

  // 屏蔽页面右键
  $(document).on('contextmenu', function (e) {
    if (!$(e.target).is('input')) {
      e.preventDefault();
    }
  });

  // 关闭右键菜单
  window.addEventListener('blur', function () {
    Menu.hideAndRemovePopupMenu();
  });
});
