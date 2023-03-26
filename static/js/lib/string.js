/**
 * string 扩展
 */
String.prototype.startWith = function (str) {
  return this.slice(0, str.length) == str;
}

String.prototype.endWith = function (str) {
  return this.slice(-str.length) == str;
}

String.prototype.notUrl = function () {
  return !this.startWith('http://') && !this.startWith('https://')
    && !this.startWith('mx://') && !this.startWith('file:///')
    && !this.startWith('ftp://');
}

String.prototype.Trim = function () {
  return this.replace(/(^\s*)|(\s*$)/g, "");
}

String.prototype.getQueryString = function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  if (this.split('?')[1]) {
    var r = this.split('?')[1].match(reg);
    if (r != null) return unescape(r[2]);
  }
  return null;
}

String.prototype.cmpVersions = String.prototype.cmpVersions || function (another) {
  var i, diff;
  var regExStrip0 = /(\.0+)+$/;
  var segmentsA = this.replace(regExStrip0, '').split('.');
  var segmentsB = another.replace(regExStrip0, '').split('.');
  var l = Math.min(segmentsA.length, segmentsB.length);

  for (i = 0; i < l; i++) {
    diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
    if (diff) {
      return diff;
    }
  }
  return segmentsA.length - segmentsB.length;
};