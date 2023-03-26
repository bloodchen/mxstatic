function treeMenu(a) {
    this.tree = a || [];
    this.groups = {};
};
treeMenu.prototype = {
    init: function (pid) {
        this.group(this.tree);
        return this.getDom(this.groups[pid]);
    },
    group: function (tree) {

        if(tree.folders && tree.folders.length === 0) return '';

        for (var i = 0; i < tree.length; i++) {
            var t = tree[i];
            if (this.groups[t.pid]) {
                this.groups[t.pid].push(t);
            } else {
                this.groups[t.pid] = [];
                this.groups[t.pid].push(t);
            }

            if(t.folders && t.folders.length > 0) {
                this.group(t.folders);
            }
        }
    },
    getDom: function (a) {
        // if (!a) { return '\n<ul >\n</ul>\n'; }  //当前节点不存在的时候，退出  
        var html = '\n<ul id="note_tree">\n';
        if(a) {
            for (var i = 0; i < a.length; i++) {
                html += '<li class="folder" uuid="' + a[i].uuid + '">';
                html += '<div class="jstree-wholerow"></div>';
                // html += '<a class="folder-head-toggle" href="javascript:void(0)"></a>';
                html += '<a class="menu-head" href="javascript:void(0)"><em class="folder-head-toggle"></em><i></i>' + a[i].fn + '</a>';
                // html += a[i].fn;
                html += this.getDom(this.groups[a[i].uuid]);
                html += '</li>\n';
            };
        }
        html += '</ul>\n';
        return html;
    } 
}