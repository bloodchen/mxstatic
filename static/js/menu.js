
/* Menu Methods */

var Menu = {
    genPopupMenuLi: function (item) {
        return '<li class="menu-item" event-id="' + item.id + '">' +
            '<div class="menu-item-icon"></div>' +
            '<div class="menu-item-title">' + item.label + '</div>' +
            '</li>';
    },

    genPopupMenuLiDisable: function (item) {
        return '<li class="menu-item-disabled" event-id="' + item.id + '">' +
            '<div class="menu-item-icon"></div>' +
            '<div class="menu-item-title">' + item.label + '</div>' +
            '</li>';
    },

    genPopupMenuSeparator: function () {
        return '<li class="menu-item-separator"></li>';
    },

    genPopupMenu: function (menu) {
        var popupMenu = '<ul class="mx-menu-content">';

        for (var i = 0, len = menu.length; i < len; i++) {
            if (menu[i].visible == false) continue;
            if (menu[i].type) {
                popupMenu += Menu.genPopupMenuSeparator();
                continue;
            }
            if (menu[i].disabled == true) {
                popupMenu += Menu.genPopupMenuLiDisable(menu[i]);
            }
            else {
                popupMenu += Menu.genPopupMenuLi(menu[i]);
            }
        };
        popupMenu += '</ul>';
        return popupMenu;
    },

    hideAndRemovePopupMenu: function () {
        var popupMenu = document.getElementById('pop_menu');
        if (popupMenu == null) return;
        document.body.removeChild(popupMenu);
        popupMenu = null;
        document.onclick = null;
    },

    calculateMinHeight: function (menu) {
        var height = 6;
        for (var i = 0, len = menu.length; i < len; i++) {
            if (menu[i].visible == false) continue;
            height += menu[i].type ? 1 : 30;
        }
        return height;
    },

    createPopupMenu: function () {
    
        var node = document.createElement("div");
        node.setAttribute('id', 'pop_menu');
        node.setAttribute('class', 'pop-menu');
        document.body.appendChild(node);
        return node;
    },
    showPopupMenu: function (clientX, clientY, menu, callback) {
        var popupMenu = Menu.genPopupMenu(menu);

        Menu.hideAndRemovePopupMenu();
        var menuContent = Menu.createPopupMenu();
        menuContent.innerHTML = popupMenu;
        var scrollTop = document.body.scrollTop + document.documentElement.scrollTop,
            scrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft,
            browserWidth = document.documentElement.clientWidth,
            offsetWidth = menuContent.offsetWidth,
            left, top;
        // if (clientY + offsetHeight >= browserHeight) {
        //     top = clientY - offsetHeight;
        // } else {
            top = clientY;
        // }

        if (clientX + offsetWidth >= browserWidth) {
            left = clientX - offsetWidth;
        } else {
            left = clientX;
        }
        
        menuContent.style.cssText = 'left:' + (left + scrollLeft) + 'px; top:' + (top + scrollTop) + 'px;width:' + (offsetWidth + 10) + 'px; z-index:999;';

        var items = $(menuContent).find('.menu-item');
        for (var i = 0, len = items.length; i < len; i++) {
            items[i].onclick = function (e) {
                Menu.hideAndRemovePopupMenu();
                var value = this.attributes['event-id'].value;
                setTimeout(function () {
                    callback(value);
                }, 200);
            };
            items[i].oncontextmenu = function () {
                Menu.hideAndRemovePopupMenu();
                var value = this.attributes['event-id'].value;
                setTimeout(function () {
                    callback(value);
                }, 200);
            }
        }
        var items = $(menuContent).find('.menu-item-disabled');
        for (var i = 0, len = items.length; i < len; i++) {
            items[i].onclick = function () {
                Menu.hideAndRemovePopupMenu();
            };
            items[i].oncontextmenu = function () {
                Menu.hideAndRemovePopupMenu();
            }
        }

        document.onclick = function (e) { Menu.hideAndRemovePopupMenu(); }
        menuContent.onclick = function (e) { return false; }
        menuContent.oncontextmenu = function (e) { return false; }
        return "none";
    }
};