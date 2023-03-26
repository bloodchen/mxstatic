/**
 * 弹出框
 * @author guotingjie
 */
$.fn.dialog = function (options) {
    var maxthon = window.Api.Maxthon;
    var $this = this,
        $body = $('body');

    var op = $.extend({
        openInDialog: false,
        autoClose: true,
        init: function () {

        }, close: function () {
            return true;
        }, after: function () {

        }
    }, options);

    var closeFun = function () {
        if ($this.is(':animated')) {
            return false;
        }
        // $mx_mask_layer.hide();
        $body.removeClass('mask');
        $this.removeAttr('style');
    }

    var show = function () {
    
        $body.addClass('mask');

        if (op.html) {
            $this.empty().append(op.html);
        }

        $this.show();
        op.after($this);
    }

    if(op.autoClose === true) { 
        $this.off('click').on('click', function(event) {
            if(event.target === $this[0]) {
                if (op.close()) {
                    closeFun();
                }
            }
        });
    }

    op.init();
    show();

    return {
        close: function () { op.close(); closeFun(); return false;},
        show: function () { show();}
    }
}