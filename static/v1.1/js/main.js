/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

/**
 * 简易cookie工具
 */
var cookie = {
    get: function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    },
    set: function (name, value) {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    },
    remove: function (name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.get(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}
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
/**
 * 弹出框
 * @author guotingjie
 */
$.fn.dialog = function (options) {
    var $this = this,
        $body = $('body'),
        $mx_mask_layer = $('#mx_mask_layer');

    var op = $.extend({
        openInDialog: false,
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

        $mx_mask_layer.hide();
        $body.removeClass('blur');
        if (document.body.scrollTop < 50) {// 滚动条小于50显示搜索框
            mxApi.useApi('quickaccess.showSearchBox', { 'show': true });
        }
        $this.hide();
    }

    var show = function () {
        
        $mx_mask_layer.off('click').on('click', function (e) {
            if (op.close()) {
                closeFun();
            }
        }).show();

        // 隐藏搜索框
        mxApi.useApi('quickaccess.showSearchBox', { 'show': false });
        $body.addClass('blur');

        if (op.html) {
            $this.empty().append(op.html);
        }

        $this.show().animate({
            'z-index': 90,
            'opacity': 1,
            '-webkit-transform': 'translate(-50%, -50%) scale(1)',
            '-webkit-transition-property': 'all'
        }, 200, function () {
            op.after($this);
        });
    }

    op.init();
    show();

    return {
        close: function () { op.close(); closeFun(); },
        show: function () { show(); }
    }
}
$.fn.kpdragsort = function (options) {
    var thiz = this;
    var $container = $(thiz),
        $document = $(document),
        $mx_drag_div = $('.mx-drag-div'),
        $mx_swap_div = $('.mx-swap-div'),
        moveTimer = undefined;

    $container.off("mousedown").on('mousedown', 'li:not(.add,.empty)', function (e) {
         var _this = $(this); // 点击选中块

        if(e.button === 1) {
            // 发送中键打开统计
            if (datacode) {
                datacode.statistic({
                    'm': 'myfavoritesClick',
                    'n': 'middleClick',
                    'data': {
                        'title': _this.find('>a').attr('data-title'),
                        'href': _this.find('>a').attr('href')
                    }
                });
            }
            return;
        }
        if (e.button != 0 || window.kp_only) return; // 排除非左击和表单元素
        e.preventDefault(); // 阻止选中文本
        // 关闭并移除右键菜单
        Menu.hideAndRemovePopupMenu();
        var x = e.pageX;
        var y = e.pageY;

        var w = _this.width();
        var h = _this.innerHeight();//.height();
        var w2 = w / 2;
        var h2 = h / 2;
        var p = _this.offset();
        var left = p.left;
        var top = p.top;
        window.kp_only = true;
        var swap_x = 0;
        var swap_y = 0;
        var swap_grid = null;
        var scrollHeight = $(document).height();
        var $addGrid = $quick_dial_my_site.find('.add');

        // 文件夹显示
        var folder_visible = $folder_quick_dial.is(':visible');
        var is_move = false;

        $mx_drag_div.html(_this.prop('outerHTML')).css({ "width": w, "height": h, "position": "absolute", "z-index": 999 });

        // 绑定mousemove事件
        $document.on('mousemove', function (e) {
            e.preventDefault();
            // 移动选中块
            var l = left + e.pageX - x;
            var t = top + e.pageY - y;

            // 没有发生移动
            if ((Math.abs(e.pageX - x) === 0) || (Math.abs(e.pageY - y) === 0)) {
                return;
            }

            // 滚到底部停止拖拽
            if (t + h > scrollHeight) {
                return;
            }

            // 标示为移动
            is_move = true;
            _this[0].style.visibility = 'hidden';
            $mx_drag_div.css({ "left": l, "top": t }).show();
            autoScroll(t, h);

            // 选中块的中心坐标
            var ml = l + w2;
            var mt = t + h2;
            if (folder_visible) {
                var f_p = $folder_quick_dial.offset();
                var f_p_1 = f_p.left;
                var f_p_2 = f_p_1 + $folder_quick_dial.width();
                var f_p_3 = f_p.top;
                var f_p_4 = f_p_3 + $folder_quick_dial.height();

                if ($folder_quick_dial.is(':visible')) {
                    // 判断在弹层外面
                    if (!(f_p_1 < ml && ml < f_p_2 && f_p_3 < mt && mt < f_p_4)) {
                        // 关闭弹框
                        folder.dialog.close();

                        var pp = $addGrid.offset();
                        $mx_swap_div.removeClass('zoom-out').empty().append($addGrid[0].outerHTML);
                        swap_grid = $addGrid;
                        swap_x = pp.left;
                        swap_y = pp.top;
                        return ;
                    }
                } else {
                    // clear定时器
                    if (moveTimer) clearTimeout(moveTimer);
                    moveTimer = setTimeout(function () {
                        // 重置对象
                        swap_grid.removeAttr('style');
                        var pp = $addGrid.offset();
                        swap_grid = $addGrid;
                        // 去除合并样式
                        $mx_swap_div.removeClass('zoom-out');
                        // 继续合并
                        $('.dragable').eq(1).children().not('.add,.empty').each(function () {
                            var obj = $(this);
                            var p = obj.offset();
                            var a1 = p.left;
                            var a2 = p.left + obj.width();
                            var a3 = p.top;
                            var a4 = p.top + obj.innerHeight();

                            swap_x = pp.left;
                            swap_y = pp.top;
                            // $mx_swap_div.removeClass('zoom-out').empty().removeAttr('style');
                            // 移动虚线框
                            if (a1 + (w2 - 30) < ml && ml < a2 - (w2 - 30) && a3 + (h2 - 30) < mt && mt < a4 - (h2 - 30)) {
                                var cloneObj = obj.removeAttr('style').clone();
                                obj[0].style.visibility = 'hidden';
                                // 触发合并文件夹操作
                                swap_x = a1;
                                swap_y = a3;
                                swap_grid = obj;
                                $mx_swap_div.html(cloneObj.prop('outerHTML'));

                                if (!$mx_swap_div.hasClass('zoom-out')) {
                                    $mx_swap_div.removeClass('zoom-in').addClass('zoom-out');
                                }

                                if (!$mx_drag_div.hasClass('zoom-in')) {
                                    $mx_drag_div.removeClass('is-current-target').addClass('zoom-in');
                                }
                                $mx_swap_div.css({ "width": obj.width(), "height": obj.innerHeight(), "position": "absolute", "z-index": 99, "left": swap_x, "top": swap_y }).show();
                                return false;
                            }
                        });
                    }, 100);
                    return;
                }
            }
            // clear定时器
            if (moveTimer) clearTimeout(moveTimer);
            moveTimer = setTimeout(function () {
                var all_grid = $container.children().not('.add,.empty').not(_this);
                // 遍历所有块的坐标
                all_grid.each(function (index) {
                    var obj = $(this);
                    var p = obj.offset();
                    var a1 = p.left;
                    var a2 = p.left + obj.width();
                    var a3 = p.top;
                    var a4 = p.top + obj.innerHeight();
                    
                    // 移动虚线框
                    if (a1 < ml && ml < a2 && a3 < mt && mt < a4) {

                        all_grid.not(obj).removeAttr('style');
                        var cloneObj = obj.removeAttr('style').clone();
                        obj[0].style.visibility = 'hidden';
                        swap_grid = obj;
                        swap_x = a1;
                        swap_y = a3;

                        $mx_swap_div.html(cloneObj.prop('outerHTML'));
                        // 以下情况不允许合并文件夹
                        // 1、文件夹 2、文件夹内部 3、顶部导航
                        if (folder_visible || _this.hasClass('folder') || _this.hasClass('hot-nav-grid')) {
                            // 非文件夹与顶部导航
                            if(!(_this.hasClass('folder') && obj.hasClass('hot-nav-grid'))) {
                                $mx_swap_div.removeClass('zoom-out').addClass('zoom-in');
                                $mx_drag_div.addClass('is-current-target');
                            }
                        } else {
                            // 文件夹合并
                            if (!obj.hasClass('hot-nav-grid') && (a1 + (w2 - 30) < ml && ml < a2 - (w2 - 30) && a3 + (h2 - 30) < mt && mt < a4 - (h2 - 30))) { 

                                if (!$mx_swap_div.hasClass('zoom-out')) {
                                    $mx_swap_div.removeClass('zoom-in').addClass('zoom-out');
                                }
                                
                                if (!$mx_drag_div.hasClass('zoom-in')) {
                                    $mx_drag_div.removeClass('is-current-target').addClass('zoom-in');
                                }
                            } else {
                                $mx_swap_div.addClass('zoom-in').removeClass('zoom-out');
                                $mx_drag_div.addClass('is-current-target').removeClass('zoom-in');
                            }
                        }
                        $mx_swap_div.css({ "width": obj.width(), "height": obj.innerHeight(), "position": "absolute", opacity: 0.8, "z-index": 99, "left": swap_x, "top": swap_y }).show();
                        return false;
                    }
                    
                    // fix bug: 最后重置数据
                    if(index === all_grid.length - 1) {
                        if(swap_grid != $addGrid) {
                            setSwapObj(null);
                        }
                    }
                });
            }, 100);
        });

        /**
         * 自动滚屏
         * @param top 坐标
         */
        function autoScroll(t, h) {
            if (thiz.scrollTimer) clearTimeout(thiz.scrollTimer);

            thiz.scrollTimer = setTimeout(function () {
                var scrollTop = document.body.scrollTop;
                if (scrollTop > 0 && t < scrollTop) {
                    // console.log('up');
                    $("body").animate({ scrollTop: scrollTop - 500 }, 500);
                    $mx_drag_div.animate({ top: t - 500 }, 500);
                }

                var _scrollHeight = scrollTop + document.documentElement.clientHeight;
                // console.log('t = ' + t + ' h = ' + h + '  scrollHeight = ' + scrollHeight + '  _scrollHeight = ' + _scrollHeight);
                if(t + h > _scrollHeight) {
                    // console.log('down');
                    if ((scrollTop + h) < _scrollHeight) {
                        if(scrollTop + h > scrollHeight) {
                            $("body").animate({ scrollTop: scrollHeight }, 500);
                            $mx_drag_div.animate({ top: scrollHeight }, 500);
                        } else {
                            $("body").animate({ scrollTop: scrollTop + h }, 500);
                            $mx_drag_div.animate({ top: t + h }, 500);
                        }
                    }
                }
            }, 100);
        }

        /**
         * 清除交换标记
         * @param target 重置交互对象
         */
        function setSwapObj(target) {
            if (swap_grid !== null) {
                setHeigth(swap_grid);
                $mx_swap_div.removeAttr('style').removeClass('zoom-in');
                $mx_drag_div.removeClass('is-current-target').removeClass('zoom-in');
                swap_grid = target;
            }
        }

        /**
         * 动画删除
         */
        function animateRemove(_this) {
            _this.hide(200, function () {
                _this.remove();
            });
        }

        function setHeigth($ele) {
            if ($ele == null) return;
            $ele.removeAttr('style');
        }

        /**
         * 开始交换位置
         */
        function swapGrid(gridA, gridB) {

            if (!gridA.hasClass('no-img')) {

                var imgsrc = gridA.find('a').attr('data-image') || '';

                if (/\/image\/logo\/Re\//.test(imgsrc)) {
                    imgsrc = imgsrc.replace('/Re/', '/Sq/');
                } else {
                    imgsrc = imgsrc.replace('/big/', '/small/');
                }
            
                var swap_grid_html = grid.render(grid.hot_grid_html, {
                    'url': gridA.find('a').attr('href'),
                    'title': gridA.find('a').attr('data-title'),
                    'image': imgsrc
                });

                // 截图loading
                if (gridA.hasClass('loading')) {
                    swap_grid_html = swap_grid_html.replace('hot-nav-grid', 'hot-nav-grid loading');
                }

                gridB.replaceWith(swap_grid_html);
            } else {

                var swap_grid_html = grid.render(grid.hot_grid_html, {
                    'url': gridA.find('a').attr('href'),
                    'title': gridA.find('a').attr('data-title'),
                    'colorBlock': gridA.find('div').eq(0).attr('colorblock') || ''
                });

                gridB.replaceWith(swap_grid_html);
            }

            if (!gridB.hasClass('no-img')) {
                var imgsrc = gridB.find('a').attr('data-image') || '';

                if (/\/image\/logo\/Sq\//.test(imgsrc)) {
                    imgsrc = imgsrc.replace('/Sq/', '/Re/');
                } else {
                    imgsrc = imgsrc.replace('/small/', '/big/');
                }

                gridA.replaceWith(grid.render(grid.grid_html, {
                    'title': gridB.find('a').attr('data-title'),
                    'url': gridB.find('a').attr('href'),
                    'image': imgsrc
                }));
            } else {
                gridA.replaceWith(grid.render(grid.grid_html, {
                    'title': gridB.find('a').attr('data-title'),
                    'url': gridB.find('a').attr('href'),
                    'colorBlock': gridB.find('div').eq(0).attr('colorblock') || ''
                }));
            }
        }

        /**
         * 合并到一个文件夹
         */
        function appendToFolder(_this, swap_grid, appendGrid, folder_data) {
            var _html = [];

            if (folder_data.children && folder_data.children.length > 4) { // 当文件夹文件数量超过4个时

                var p = swap_grid.offset();
                $mx_drag_div.animate({ 'width': 66, 'height': 44, 'top': p.top + swap_grid.innerHeight() / 2 - 22, 'left': p.left + swap_grid.width() / 2 - 33 }, 300, function () {
                    animateRemove(_this);
                    $mx_swap_div.removeAttr('style').removeClass('folder');
                    $mx_drag_div.removeAttr('style');
                    swap_grid.removeAttr('style');
                });
                return;
            }

            if (swap_grid.hasClass('loading')) {
                _html.push('<div class="my-site-thumbnail loading" url="' + folder_data.children[0].url + '"></div>');
            } else {
                if (folder_data.children[0].image) {
                    var image = folder_data.children[0].image;
                    if(image.startWith('mx://thumbs')) { //截图
                        image = newWin.getThumbsUrl(appendGrid.url, 0);
                    } else{
                        image = grid.imageFilter && grid.imageFilter(image);
                    }
                    _html.push('<div class="my-site-thumbnail" style="background-image: url(' + image + ');"></div>');
                } else {
                    _html.push('<div class="my-site-thumbnail ' + folder_data.children[0].colorBlock + '"><span>' + folder_data.children[0].title + '</span></div>');
                }
            }

            if (_this.hasClass('loading')) {
                _html.push('<div class="my-site-thumbnail loading" url="' + appendGrid.url + '"></div>');
            } else {
                if (appendGrid.image) {
                    if(appendGrid.image.startWith('mx://thumbs')) { //截图
                        appendGrid.image = newWin.getThumbsUrl(appendGrid.url, 0);
                    } else{
                        appendGrid.image = grid.imageFilter && grid.imageFilter(appendGrid.image);
                    }

                    _html.push('<div class="my-site-thumbnail" style="background-image: url(' + appendGrid.image + ');"></div>');
                } else {
                    _html.push('<div class="my-site-thumbnail ' + appendGrid.colorBlock + '"><span>' + appendGrid.title + '</span></div>');
                }
            }

            var drag_pos = { x: 0, y: 0 };
            var swap_pos = { x: 0, y: 0 };
            if (!swap_grid.hasClass('folder')) {
                swap_grid.replaceWith('<li class="my-site-grid folder" data-folderid="' + folder_data.folderId + '">\
                                        <div class="my-site-thumbnail-container">\
                                            ' + _html.join('') + '\
                                        </div>\
                                        <div class="my-site-nav">\
                                            <strong class="title">'+ folder_data.title + '</strong>\
                                            <button class="delete">×</button>\
                                        </div>\
                                    </li>');
                drag_pos.x = swap_x + 19 + 54;
                drag_pos.y = swap_y + 11;
                swap_pos.x = swap_x + 19;
                swap_pos.y = swap_y + 11;
            } else {
                swap_grid.find('.my-site-thumbnail-container').append(_html.splice(1, 1).join(''));
                var type = swap_grid.find('.my-site-thumbnail-container>div').length;
                switch (type) {
                    case 2:
                        drag_pos.x = swap_x + 9 + 10 + 44 + 10;
                        drag_pos.y = swap_y + 11;
                        break;
                    case 3:
                        drag_pos.x = swap_x + 9 + 10;
                        drag_pos.y = swap_y + 11 + 44 + 11;
                        break;
                    case 4:
                        drag_pos.x = swap_x + 9 + 10 + 44 + 10;
                        drag_pos.y = swap_y + 11 + 44 + 11;
                        break;
                }
            }

            // animate 开始
            if (swap_pos.x !== 0 && swap_pos.y !== 0) {
                $mx_drag_div.animate({ "left": drag_pos.x, "top": drag_pos.y, 'width': 66, 'height': 44 }, 300, function () {
                    $mx_drag_div.removeAttr('style');
                    animateRemove(_this);
                });
                $mx_swap_div.removeClass('zoom-out').animate({ "left": swap_pos.x, "top": swap_pos.y, 'width': 66, 'height': 44 }, 300, function () {
                    $mx_swap_div.removeClass('folder').removeAttr('style');
                });
            } else {
                $mx_drag_div.animate({ "left": drag_pos.x, "top": drag_pos.y, 'width': 66, 'height': 44 }, 300, function () {
                    $mx_drag_div.removeAttr('style');
                    $mx_swap_div.removeAttr('style').removeClass('folder');
                    setHeigth(swap_grid);
                    animateRemove(_this);
                });
            }
        }

        function rollback() {
            // 拖拽回位，并删除虚线框
            var p = _this.offset();

            $mx_drag_div.animate({ "left": p.left, "top": p.top }, 300, function () {
                _this.removeAttr('style');
                if(swap_grid !== null ) swap_grid.removeAttr('style');
                $mx_swap_div.removeClass('is-current-target').removeClass('zoom-out').removeAttr('style');
                $mx_drag_div.removeClass('is-current-target').removeClass('zoom-in').removeAttr('style');
            });
        }

        // 绑定mouseup事件
        $document.on('mouseup', function (e) {
            $document.off('mouseup').off('mousemove');
            // debugger;
            // 鼠标放开的时候取消移动定时器
            if (moveTimer) clearTimeout(moveTimer);
            // is_move = false;
            // 清空内存
            window.kp_only = null;
            if (is_move === false) {
                return;
            }
            if (swap_grid === null || (_this.hasClass('folder') && swap_grid.hasClass('hot-nav-grid'))
                || (swap_grid.hasClass('folder') && _this.hasClass('hot-nav-grid'))) {
                rollback();
                return;
            }

            swap_grid[0].style.visibility = 'hidden';
            var isMerge = $mx_swap_div.hasClass('zoom-out');
            var origin = _this.index();     // 源坐标
            var target = swap_grid.index(); // 目标坐标
            // 合并文件夹操作
            if (isMerge) {
                mxApi.loadAndSave(function (data) {
                    var folder_data = {};
                    var datapara = {'m' : 'event'};
                    if (folder_visible && !$folder_quick_dial.is(':visible')) {
                        // 从文件夹删除
                        var selecteIndex = $folder_quick_dial.data('selecteIndex');
                        if (data[selecteIndex].folderId && data[selecteIndex].children) {
                            var deleteItem = data[selecteIndex].children[origin] || {};

                            if (data[target].folderId && data[target].children) {
                                folder_data = data[target];
                                folder_data.children.push(deleteItem);
                            } else {
                                var targetItem = data[target];
                                folder_data = {
                                    'folderId': guid(),
                                    'title': Language.getLang('NewFolder'),
                                    'children': [
                                        targetItem, deleteItem
                                    ],
                                    'isHot': false
                                };
                                data.splice(target, 1, folder_data);
                            }
                            appendToFolder(_this, swap_grid, deleteItem, folder_data);
                            // 更新html
                            folder.update(data, origin, false);
                            datapara.n = 'dragInFolder';
                        }
                    } else {
                        if (data[target].folderId && data[target].children) {
                            folder_data = data[target];
                            folder_data.children.push(data[origin]);
                            datapara.n = 'dragInFolder';
                        } else {
                            folder_data = {
                                'folderId': guid(),
                                'title': Language.getLang('NewFolder'),
                                'children': [
                                    data[target], data[origin]
                                ],
                                'isHot': false
                            };
                            data.splice(target, 1, folder_data);
                            datapara.n = 'createFolder';
                        }

                        // console.log(swap_grid);
                        // console.log(data[origin]);
                        if(swap_grid && data[origin]) {
                            appendToFolder(_this, swap_grid, data[origin], folder_data);
                            data.splice(origin, 1); // 删除
                        } else {
                            rollback();
                        }
                    }
                    // 发送数据统计请求
                    if (datacode) {
                        datapara.data = {'title':_this.find('>a').attr('data-title'), 'href': _this.find('>a').attr('href')};
                        datacode.statistic(datapara);
                    }
                    return data;
                });
            } else {
                var flag = folder_visible && !$folder_quick_dial.is(':visible');
                if (!flag) {
                    $mx_swap_div.animate({ "left": left, "top": top }, 300, function () {

                        if (swap_grid === null) return;
                        var class1 = _this.attr('class').split(' ')[0];
                        var class2 = swap_grid.attr('class').split(' ')[0];
                        // 同区域
                        if (class1 === class2) {
                            _this.replaceWith($mx_swap_div.html());
                            swap_grid.replaceWith(_this);
                        } else {
                            class1 === 'hot-nav-grid' ? swapGrid(swap_grid, _this) : swapGrid(_this, swap_grid);
                        }
                        // 保存
                        grid.saveLayout();
                        // 发送数据统计请求
                        if (datacode) {
                            datacode.statistic({
                                n: 'change',
                                m: 'event',
                                'data': {
                                    'title' : _this.find('>a').attr('data-title'),
                                    'href'  : _this.find('>a').attr('href')
                                }
                            });
                        }
                    });
                }
                
                $mx_drag_div.animate({ "left": swap_x, "top": swap_y }, 300, function () {
                    setHeigth(_this);
                    $mx_swap_div.removeClass('is-current-target').removeAttr('style');
                    if (flag) {
                        mxApi.loadAndSave(function (data) {
                            var selecteIndex = $folder_quick_dial.data('selecteIndex');
                            $(template(grid.grid_html,data[selecteIndex].children[origin])).insertBefore(swap_grid.removeAttr('style'));
                            folder.update(data, origin, true);
                            return data;
                        });
                        // 发送数据统计请求
                        if (datacode) {
                            datacode.statistic({
                                'm': 'event',
                                'n': 'dragOutFolder',
                                'data': {
                                    'title' : _this.find('>a').attr('data-title'),
                                    'href'  : _this.find('>a').attr('href')
                                }
                            });
                        }
                    }
                    $mx_drag_div.removeClass('is-current-target').removeAttr("style");
                });
            }
        });
    });
}
/**
 * smartTemplate - Template Engine
 */

// 模板引擎路由函数
var template = function (id, content) {
    return template[
        typeof content === 'object' ? 'render' : 'compile'
    ].apply(template, arguments);
};


template.version = '1.0.0';

// 模板配置
var iConfig = {
    openTag: '<%',
    closeTag: '%>'
};

var isNewEngine = !!String.prototype.trim;

// 模板缓存
var iCache = template.cache = {};

// 辅助函数
var iHelper = {
    include: function (id, data) {
        return iRender(id, data);
    },
    print: function (str) {
        return str;
    }
};

// 原型继承
var iExtend = Object.create || function (object) {
    function Fn() { };
    Fn.prototype = object;
    return new Fn;
};

// 模板编译
var iCompile = template.compile = function (id, tpl, options) {

    var cache = null;

    id && (cache = iCache[id]);

    if (cache) {
        return cache;
    }

    // [id | tpl]
    if (typeof tpl !== 'string') {

        var elem = document.getElementById(id);

        options = tpl;

        if (elem) {
            // [id, options]
            options = tpl;
            tpl = elem.value || elem.innerHTML;

        } else {
            //[tpl, options]
            tpl = id;
            id = null;
        }
    }

    options = options || {};
    var render = iParse(tpl, options);

    id && (iCache[id] = render);

    return render;
};


// 模板渲染
var iRender = template.render = function (id, data, options) {

    return iCompile(id, options)(data);
};


var iForEach = Array.prototype.forEach ?
    function (arr, fn) {
        arr.forEach(fn)
    } :
    function (arr, fn) {
        for (var i = 0; i < arr.length; i++) {
            fn(arr[i], i, arr)
        }
    };


// 模板解析
var iParse = function (tpl, options) {

    var html = [];

    var js = [];

    var openTag = options.openTag || iConfig['openTag'];

    var closeTag = options.closeTag || iConfig['closeTag'];

    // 根据浏览器采取不同的拼接字符串策略
    var replaces = isNewEngine
        ? ["var out='',line=1;", "out+=", ";", "out+=html[", "];", "this.result=out;"]
        : ["var out=[],line=1;", "out.push(", ");", "out.push(html[", "]);", "this.result=out.join('');"];

    // 函数体
    var body = replaces[0];

    iForEach(tpl.split(openTag), function (val, i) {

        if (!val) {
            return;
        }

        var parts = val.split(closeTag);

        var head = parts[0];

        var foot = parts[1];

        var len = parts.length;
        // html
        if (len === 1) {
            body += replaces[3] + html.length + replaces[4];
            html.push(head);

        } else {

            if (head) {
                // code
                // 去除空格
                head = head
                    .replace(/^\s+|\s+$/g, '')
                    .replace(/[\n\r]+\s*/, '')


                // 输出语句
                if (head.indexOf('=') === 0) {
                    head = head.substring(1).replace(/^[\s]+|[\s;]+$/g, '');

                    body += replaces[1] + head + replaces[2];
                } else {
                    body += head;
                }

                body += 'line+=1;';
                js.push(head);
            }
            // html
            if (foot) {
                _foot = foot.replace(/^[\n\r]+\s*/g, '');
                if (!_foot) {
                    return;
                }
                body += replaces[3] + html.length + replaces[4];
                html.push(foot);
            }
        }
    });

    body = "var Render=function(data){template.mix(this, data);try{"
        + body
        + replaces[5]
        + "}catch(e){template.log('rend error : ', line, 'line');template.log('invalid statement : ', js[line-1]);throw e;}};"
        + "var proto=Render.prototype=iExtend(iHelper);"
        + "template.mix(proto, options);"
        + "return function(data){return new Render(data).result;};";

    var render = new Function('html', 'js', 'iExtend', 'iHelper', 'options', body);

    return render(html, js, iExtend, iHelper, options);
};

template.log = function () {
    if (typeof console === 'undefined') {
        return;
    }

    var args = Array.prototype.slice.call(arguments);

    console.log.apply && console.log.apply(console, args);

};

// 合并对象
template.mix = function (target, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
};

// 注册函数
template.on = function (name, fn) {
    iHelper[name] = fn;
};

// 清除缓存
template.clearCache = function () {
    iCache = {};
};

// 更改配置
template.set = function (name, value) {
    iConfig[name] = value;
};

// 暴露接口
if (typeof module !== 'undefined' && module.exports) {
    module.exports = template;
} else {
    window.template = template;
}

/* Menu Methods */

var Menu = {
    genPopupMenuLi: function(item) {
        return '<li class="mx-menu-item" event-id="'+ item.id +'">' +
                    '<div class="mx-menu-item-icon"></div>' +
                    '<div class="mx-menu-item-title">' + item.label + '</div>' +
                '</li>';
    },

    genPopupMenuLiDisable: function(item) {
        return '<li class="mx-menu-item-disabled" event-id="'+ item.id +'">' +
                    '<div class="mx-menu-item-icon"></div>' +
                    '<div class="mx-menu-item-title">' + item.label + '</div>' +
                '</li>';
    },

    genPopupMenuSeparator: function(){
        return  '<li class="mx-menu-item-separator">' +
                '</li>';
    },

    genPopupMenu: function (menu){
        var popupMenu = '<ul class="mx-menu-content">';

        for (var i = 0, len = menu.length; i < len; i++) {
            if(menu[i].visible == false) continue;
            if(menu[i].type ){
                popupMenu += Menu.genPopupMenuSeparator();
                continue;
            }
            if(menu[i].disabled == true){
                popupMenu += Menu.genPopupMenuLiDisable(menu[i]);
            }
            else {
                popupMenu += Menu.genPopupMenuLi(menu[i]);
            }
        };
        popupMenu += '</ul>';
        return popupMenu;
    },

    hideAndRemovePopupMenu: function (){
        var menuContent = $("#layers .mx-popup-menu")[0];
        menuContent.innerHTML = '';

        document.onclick = null;
    },

    calculateMinHeight: function(menu) {
        var height = 6;
        for(var i=0,len=menu.length;i<len;i++){
            if(menu[i].visible == false) continue;
            height += menu[i].type ? 1 : 30;
        }
        return height;
    },

    showPopupMenu: function(left, top, menu, callback) {
        var popupMenu = Menu.genPopupMenu(menu);

        var menuContent = $("#layers .mx-popup-menu")[0];

        menuContent.innerHTML = popupMenu;
        var menuDom = $("#layers .mx-popup-menu")[0];
        // var menuHeight = Menu.calculateMinHeight(menu);
        var menuWidth = 100;
        var maxLeft = document.documentElement.clientWidth - menuWidth - 130;
        var maxTop = document.body.scrollTop + document.documentElement.clientHeight - 150;
        left =  maxLeft > left ? left : maxLeft;
        top = maxTop > top ? top : maxTop;

        menuDom.style.left = left + 'px';
        menuDom.style.top = top + 'px';
        menuDom.style.zIndex = 999;

        var items = $("#layers .mx-menu-item");
        for(var i=0, len=items.length; i<len; i++){
            items[i].onclick = function(e){
                Menu.hideAndRemovePopupMenu();
                var value = this.attributes['event-id'].value;
                setTimeout(function(){
                    callback(value);
                }, 200);
            };
            items[i].oncontextmenu = function(){
                Menu.hideAndRemovePopupMenu();
                var value = this.attributes['event-id'].value;
                setTimeout(function(){
                    callback(value);
                }, 200);
            }
        }
        var items = $("#layers .mx-menu-item-disabled");
        for(var i=0, len=items.length; i<len; i++){
            items[i].onclick = function(){
                Menu.hideAndRemovePopupMenu();
            };
            items[i].oncontextmenu = function(){
                Menu.hideAndRemovePopupMenu();
            }
        }

        document.onclick = function(e) {Menu.hideAndRemovePopupMenu();}
        menuContent.onclick = function(e){return false;}
        menuContent.oncontextmenu = function(e){return false;}
        return "none";
    }
};
/**
 * maxthon浏览器接口调用
 * @author guotingjie@maxthon.net
 * @ctime 2016-6-8
 */
'use strict';
var SYNC_KEY_QA = 'qa_layout';
var SYNC_KEY_QA_WIDGET = 'qa_widget';
// 我的站点
var MY_SITE = 'my_site';

var mxApi = {
    // orignDataLength: 0
};

/**
 * 获取页面信息
 * @param  
 * @return 
 */
mxApi.getLayout = function (layout, widget, callback) {
    var _this = this;
    _this.getSyncValue(layout, function (mx4_layout) {
        _this.getSyncValue(widget, function (mx4_widget) {
            _this.getSyncValue('mx4_image_mapping', function (mx4_image_mapping) {
                try {
                    if (!$.isEmptyObject(mx4_layout)) {
                        var page = mx4_layout.page || [];
                        // 此处加上预置、截图、色块标识
                        for (var i = 0; i < page.length; i++) {
                            for (var j = 0; j < mx4_layout.page[i].content.length; j++) {
                                var item = mx4_layout.page[i].content[j];

                                for (var mapping in mx4_image_mapping) {
                                    if (mapping === item.url) {
                                        item.thumbType = mx4_image_mapping[mapping] === 'default' ? 0 : mx4_image_mapping[mapping] === 'snap' ? 1 : 2; //0预置1抓图2色块3自定义
                                        break;
                                    }
                                }

                                if (!$.isEmptyObject(mx4_widget)) {
                                    for (var attr in mx4_widget) {

                                        if (attr == item.templateDataId) { // 个性盒子
                                            mx4_layout.page[i].content = mx4_layout.page[i].content.concat(mx4_widget[attr]);
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        callback(mx4_layout);
                    } else {
                        callback({});
                    }
                } catch (e) {
                    callback({});
                }
            });
        });
    });
}

/**
 * 获取客户端语言
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
mxApi.getLocale = function (callback) {

    this.useApi('getLocale', {}, function (data) {
        callback && callback(data.result);
    });
}

/**
 * 获取用户设备信息
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
mxApi.getUserAndMacAdress = function (callback) {
    try {
        var result = {};
        mxApi.useApi('getMacAddresses', {}, function (data) {
            if (data.status && data.status === true) {
                result.macAddress = data.result;
                mxApi.useApi('account.getBrowserCurrentAccountInfo', {}, function (data) {
                    if (data.status && data.status === true) {
                        result.uid = data.result.id;
                    }
                    callback && callback(result);
                });
            }
        });
    } catch (e) {
        console.error('[maxthon]未定义, 请使用傲游浏览器');
    }
}

/**
 * 写入浏览器值
 * @param {[type]} key   [description]
 * @param {[type]} value [description]
 */
mxApi.setSyncValue = function (key, value) {

    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }

    this.useApi('quickaccess.setSyncValue', {
        key: key,
        json: value
    }, function (data) {
        if (!data.status) {
            console.error('setSyncValue', key, value);
        };

        // 更新至缓存
        // localStorage.setItem(MY_SITE, value);
    });
}

/**
 * 读出浏览器值
 * @param {[type]} key   [description]
 * @param {[type]} value [description]
 */
mxApi.getSyncValue = function (key, next) {

    this.useApi('quickaccess.getSyncValue', {
        key: key
    }, function (data) {
        if (data.status) {
            if (typeof data.result === 'string') {
                try { data.result = JSON.parse(data.result); } catch (e) {
                    data.result = {};
                }
            }
            next(data.result);
        } else {
            console.error('getSyncValue', key);
            next({});
        }
    });
}

/**
 * API使用
 * @param  {[type]}   conf [description]
 * @param  {Function} cb   [description]
 * @return {[type]}        [description]
 */
mxApi.useApi = function (name, params, cb) {
    var time, callbackName;

    try {
        maxthon.webSend(name, params, function (data) {
            if (cb) {
                data.status && data.status === true ? cb(data) : cb({});
            }
        });
    } catch (e) {
        console.error('[maxthon]未定义, 请使用傲游浏览器');
    }
}

mxApi.callbackFunc = function (callback, args) {
    if (callback && typeof (callback) == 'function') {
        return callback.call(this, args);
    }
}

/**
 * mx4 数据转换 mx5
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
mxApi.mx4_2_mx5 = function (data, callback) {
    
    data.uid = uid;
    data.lang = navigator.language;
    data.platform = navigator.userAgent.match('Macintosh;.*Mac.*') ? 'Mac' : 'Win';
    $.ajax({
        type: "post",
        async: true,
        url: '/v1.1/api/data/convert.php',
        data: data,
        success: function (data) {
            if (data.status && data.result && data.result.length > 0) {
                // 验证数据完整性
                // if (data.result[data.result.length - 1].title && data.result[0].title) {
                    callback && callback(data.result);
                // }
            } else {
                callback && callback(DEFAULT_MY_SITE);
            }
        },
        error: function (a, b, c) {
            callback && callback(JSON.parse(data.mx5_layout));
        }
    });
}

/**
 * 获取浏览器版本号
 */
mxApi.getVersion = function () {

    try {
        return external && external.max_version ? external.max_version : typeof external.maxVersion === 'function' ? external.maxVersion() : '5.0.0.0';
    } catch (e) {
        return 0;
    }
}

/**
 * 判断是否截屏
 * @param  {Function} callback [description]
 * @return {Boolean}           [description]
 */
mxApi.hasCapture = function (url, callback) {

    this.useApi('quickaccess.isThumbExists', { 'urls': [url] }, function (data) {

        if (data && data.result && data.result[0] && data.result[0] === true) {
            callback(data.result[0]);
        } else {
            callback(false);
        }
    });
}

/**
 * 是否支持截屏
 */
mxApi.isSupportCaptrue = function () {
    return this.getVersion().cmpVersions('5.0.1.1200') >= 0;
}

/**
 * 判断是否支持webp格式
 */
mxApi.isSupportWebp = function() {
    return !!!navigator.userAgent.match(/Intel Mac OS X/);
}

/**
 * 获取我的站点数据
 * @param cb 回调函数
 */
mxApi.getMySite = function (cb) {
    var thiz = this;
    
    if (thiz.pagedata) {
        thiz.callbackFunc(cb, thiz.pagedata);
        return;
    }

    thiz.getSyncValue(MY_SITE, function (data) {
        thiz.callbackFunc(cb, data);
    });
}

/**
 * 保存我的站点
 * @param cb 回调函数
 */
mxApi.loadAndSave = function (cb) {
    var thiz = this;

    if (thiz.pagedata) {
        var pagedata = thiz.callbackFunc(cb, thiz.pagedata);
        
        thiz.setSyncValue(MY_SITE, pagedata);
        thiz.pagedata = pagedata;
        return;
    }

    thiz.getSyncValue(MY_SITE, function (data) {
        var pagedata = thiz.callbackFunc(cb, data);
        thiz.setSyncValue(MY_SITE, pagedata);
        thiz.pagedata = pagedata;
    });
}

mxApi.addEventListener = function (callback) {
    var _this = this;
    _this.useApi('quickaccess.addEventListener', {}, function (data) {
        
        if ($.isEmptyObject(data)) return;
        console.log(data);
        switch (data.result.type) {
            case 'thumbUpdated': // 截图完成
                var dataurl = data.result.data,
                    datatitle = data.result.title;
                /**
                 * 文件夹缩略图
                 */
                $my_site_nav_list.find('.my-site-thumbnail[url="' + dataurl + '"]').each(function (i, n) {
                    var $this = $(n);

                    $this.removeClass('loading').removeAttr('url')
                        .css({ 'background-image': 'url(' + newWin.getThumbsUrl(dataurl, 0) + ')' });
                });

                if ($folder_quick_dial.is(':visible')) {

                    $folder_quick_dial.find('li.loading').each(function (i, n) {
                        var $this = $(n);
                        var $link = $this.find('>a'),
                            $img = $link.find('>img'),
                            url = $link.attr('href');
                        if (url === dataurl) {
                            $img.attr('src', newWin.getThumbsUrl(url, 0));
                            $this.removeClass('loading');
                            return true;
                        }
                    });
                    // return;
                }

                if ($add_quick_dial.is(':visible')) {
                    var $input_title = $add_quick_dial.find('input[name="title"]');
                    var url = $add_quick_dial.find('input[name="url"]').val();
                    url = url.notUrl() ? 'http://' + url : url;
                    // 返回的URL不匹配，直接return
                    if (dataurl != url) return;
                    // 标题不为空，直接return
                    if ($input_title.val() === '') {
                        $input_title.val(datatitle).attr('default', datatitle);
                        $add_quick_dial.find('#color_font>li>span').text(datatitle);
                    }

                    newWin.setScreenShot(newWin.getThumbsUrl(dataurl, 0));
                } else {

                    $hot_nav_list.find('li.loading').each(function (i, n) {
                        var $this = $(n);

                        if ($this.hasClass('loading')) {
                            var $link = $this.find('>a'),
                                // $img = $link.attr('data-image'),
                                url = $link.attr('href');

                            if (url === dataurl) {
                                $link.css('background-image', 'url(' + newWin.getThumbsUrl(url, 0) + ')');
                                $this.removeClass('loading');
                            }
                            return true;
                        }
                    });

                    $my_site_nav_list.find('li.loading').each(function (i, n) {
                        var $this = $(n);

                        if ($this.hasClass('loading')) {
                            var $link = $this.find('>a'),
                                url = $link.attr('href');

                            if (url === dataurl) {
                                if (!$this.hasClass('no-img')) {
                                    var imgurl = newWin.getThumbsUrl(url, 0);
                                    $link.find('>p.my-site-mask').css('background-image', 'url(' + imgurl + ')');
                                }
                                $this.removeClass('loading');
                            }
                            return true;
                        }
                    });
                }
                break;
            case 'guestSuccess': // MX4 guest数据导入成功
                grid.buildGrid();
                break;
            case 'guest5Success':
                grid.buildGrid();
                break;
            case 'dataSyncCompleted':
                if (!!navigator.userAgent.match(/Intel Mac OS X/) || mxApi.getVersion().cmpVersions('5.0.1.1900') >= 0) {
                    grid.isSync = true;
                    grid.buildGrid();
                } else {
                    // maxthon.webSend('quickaccess.getSyncValue', { key: MY_SITE }, function (data) {
                    //     if (_this.orignDataLength !== data.result.length) {
                    //         grid.init();
                    //     }
                    // });
                }
                break;
            case 'addNewSite':
                var g = {
                    url : data.result.url,
                    title: data.result.title
                }
                
                innerloop:
                for (var i = 0; i < SITE_LIST.length; i++) {
                    var category = SITE_LIST[i];
                    for(var j=0;j<category.list.length; j++) {
                        var _category = category.list[j];

                        var _url = _category.url;
                        
                        if(_url.indexOf(g.url) === 0) { // 开头
                            g.image = _category.image;
                            i = SITE_LIST.length;
                            break innerloop;
                        }
                        
                        if(_category.match) {
                            for(var k = 0; k< _category.match.length; k ++) {
                                var __url = _category.match[k];
                                if(g.url.indexOf(__url) === 0) { // 开头
                                    g.image = _category.image;
                                    i = SITE_LIST.length;
                                    break innerloop;
                                }
                            }
                        }
                    }
                }

                if(!g.image) {
                    g.image = 'mx://thumbs/?reflush=0&stamp=' + (new Date().getTime()) + '&url=' + g.url;
                }
                grid.addGrid(g);
                datacode.statistic({
                    'm': 'sendintoqa',
                    'data': {
                        'title' : g.title,
                        'href'  : g.href
                    }
                });
                // 优先图
                break;
        }
    });
}

mxApi.addEventListener();
/*
 * 语言包
 */
var Language = {
      lang: {
            'New' : {
                  'zh-cn': '新增',
                  'en-us': 'Add'
            },
            'Url': {
                  'zh-cn': '网址:',
                  'en-us': 'URL'
            },
            'Title': {
                  'zh-cn': '标题:',
                  'en-us': 'Title'
            },
            'Confirm': {
                  'zh-cn': '确定',
                  'en-us': 'Confirm'
            },
            'Cancel': {
                  'zh-cn': '取消',
                  'en-us': 'Cancel'
            },
            'NewTabOpen': {
                  'zh-cn': '后台打开',
                  'en-us': 'Open in background tab'
            },
            'NewTabOpenAll': {
                  'zh-cn': '后台打开全部',
                  'en-us': 'Open all in background tabs'
            },
            'NewWindowOpen' : {
                  'zh-cn': '新窗口打开',
                  'en-us': 'Open in new window'
            },
            'NewInvisibleOpen' : {
                  'zh-cn': '隐身窗口打开',
                  'en-us': 'Open in private window'
            },
            'NewWindowOpenAll' : {
                  'zh-cn': '新窗口打开全部',
                  'en-us': 'Open all in new window'
            },
            'NewInvisibleOpenAll' : {
                  'zh-cn': '隐身窗口打开全部',
                  'en-us': 'Open all in private window'
            },
            'SearchTab': {
                  'zh-cn': '查找网站',
                  'en-us': 'Search'
            },
            'CustomAdd': {
                  'zh-cn': '添加此项',
                  'en-us': 'Add'
            },
            'Add': {
                  'zh-cn': '添 加',
                  'en-us': 'Add'
            },
            'Open': {
                  'zh-cn': '打开',
                  'en-us': 'Open'
            },
            'Edit': {
                  'zh-cn': '编辑',
                  'en-us': 'Edit'
            },
            'Delete': {
                  'zh-cn': '删除',
                  'en-us': 'Delete'
            },
            'HotTab': {
                  'zh-cn': '热门网址',
                  'en-us': 'Websites'
            },
            'Save': {
                  'zh-cn': '保存',
                  'en-us': 'Save'
            },
            'EnterUrl': {
                  'zh-cn': '请输入网址',
                  'en-us': 'Please enter the URL.'  
            },
            'CheckUrl': {
                  'zh-cn': '网址输入不合法',
                  'en-us': 'Please check the URL.'  
            },
            'EnterTitle': {
                  'zh-cn': '请输入标题',
                  'en-us': 'Please enter the title.'  
            },
            'EnterTitleMoreThan30': {
                  'zh-cn': '标题不能超过30个字符',
                  'en-us': 'the title is no more than 30 characters.'  
            },
            'Recommend': {
                  'zh-cn': '推荐',
                  'en-us': 'HOT'
            },
            'WebShot' : {
                  'zh-cn': '网页截图',
                  'en-us': 'WebShot'
            },
            'Words' : {
                  'zh-cn': '色块文字',
                  'en-us': 'Color Words'
            },
            'NewFolder' : {
                  'zh-cn': '文件夹',
                  'en-us': 'New Folder'
            },
            'DeleteFolderTitle' : {
                  'zh-cn' : '删除文件夹',
                  'en-us' : 'Delete folder'
            },
            'DeleteFolderWarn' : {
                  'zh-cn' : '确定删除文件夹?',
                  'en-us' : 'Are you sure to delete this folder?'
            },
            'DeleteFolderContent' : {
                  'zh-cn' : '文件夹“{name}”以及其中的{count}个网址数据将被删除，删除后数据将无法恢复。',
                  'en-us' : 'Folder "{name}" and {count} site(s) in it will be deleted and can\'t be recovered again.'
            }
      },
      getLang: function(key) {
            var result;
            return (result = this.lang[key]) ? ((result[this.Locale]) ? result[this.Locale] : (result = result['en-us']) ? result : key) : key; 
      }
};

Language.init = function() {
      var thiz = this;
      mxApi.getLocale( function(result) {
            thiz.Locale = result;
      });
}

Language.init();
/**
 * 新标签页网页格子
 * @author guotingjie@maxthon.net
 * @ctime 2016-6-6
 */
var $quick_dial_my_site = $('#quick_dial_my_site'),
    $folder_quick_dial = $('#folder_quick_dial'),
    $my_site_nav_list = $('#my_site_nav_list'),
    $hot_nav_list = $('#hot_nav_list'),
    $add_grid = $('#add-grid');
var isMac = !!navigator.userAgent.match(/Intel Mac OS X/);
var grid = {
    isSync: false, // 与服务器是否同步
    hot_grid_html: '<li class="hot-nav-grid <% if(this.image == null || this.image == undefined) {%>no-img<%}%>">\
                            <% if(this.image && this.image !== null) {%>\
                                <a href="<%=this.url || \"\" %>" title="<%=this.title || \"\" %>" target="_blank" data-title="<%= this.title %>" data-image="<%= this.imageFilter(this.image)%>" style="background-image:url(<%= this.imageFilter(this.image)%>);">\
                                    <span class="hot-nav-grid-title"><%=this.title || \"\" %></span>\
                                </a>\
                            <% } else { %>\
                                <a href="<%=this.url || \"\" %>" title="<%=this.title || \"\" %>" target="_blank" data-title="<%= this.title %>">\
                                    <div colorBlock="<%=this.colorBlock || \"\" %>" class="color-block <%=this.colorBlock || \"\" %>"><span><%=this.title ? this.title.substring(0, 1) : \"\" %></span></div>\
                                    <span class="hot-nav-grid-title"><%=this.title || \"\" %></span>\
                                </a>\
                            <% } %>\
                    </li>',
    folder_grid_html: '<li class="my-site-grid folder" data-folderid="<%= this.folderId %>">\
                    <div class="my-site-thumbnail-container">\
                        <% var max_len = this.children.length > 4 ? 4 : this.children.length;%>\
                        <% for(var i=0;i< max_len; i++){ %>\
                            <% if(this.children[i].image !== null) {%>\
                                <div class="my-site-thumbnail" style="background-image: url(<%= this.children[i].image%>);"></div>\
                            <% } else { %>\
                                <div class="my-site-thumbnail <%= this.children[i].colorBlock %>"><span><%= this.children[i].title %></span></div>\
                            <% } %>\
                         <% } %>\
                    </div>\
                    <p class="my-site-nav">\
                        <strong class="title"><%=this.title || \"\" %></strong>\
                        <button class="delete">×</button>\
                    </p>\
                </li>',
    grid_html: '<li class="my-site-grid <% if(this.image == null || this.image == undefined) {%>no-img<%}%>">\
                    <a href="<%=this.url || \"\" %>" title="" target="_blank" data-title="<%= this.title %>" data-image="<%= this.imageFilter(this.image)%>" class="<%=this.colorBlock || \"\" %>" <% if(this.isThumbImge(this.image)) {%>style="background-color:#fff;"<% } %>>\
                        <% if(this.image && this.image !== null) {%>\
                            <% if(this.isThumbImge(this.image)) {%>\
                                <p class="my-site-mask" style="background-image:url(<%= this.image%>);"></p>\
                            <% } else {%>\
                                <img src="<%= this.imageFilter(this.image) %>" alt="<%=this.title || \"\" %>" onerror="replaceErrorIcon(this);">\
                            <% } %>\
                        <% } else { %>\
                             <div colorBlock="<%=this.colorBlock || \"\" %>" class="color-block"><%=this.title || \"\" %></div>\
                        <% } %>\
                        <p class="my-site-nav">\
                            <strong class="title"><%=this.title || \"\" %></strong>\
                            <% if(this.isThumbImge(this.image)) {%><button class="refresh">×</button><% } %>\
                            <button class="edit">×</button>\
                            <button class="delete">×</button>\
                        </p>\
                    </a>\
                </li>',
    empty_grid_html: '<li class="my-site-grid empty"><div class="grid-empty"></div></li>',
    getAddGridHtml: function() {
        return template('<li class="my-site-grid add"><div class="grid-empty"><a href="javascript:void(0);" title="<%= this.title %>" target="_blank">+</a></div></li>', {title : Language.getLang('New')});
    }
};

grid.init = function (opt) {
    grid.buildGrid();
    grid.bindEvent();
}

/**
 * 根据用户数据构建我的站点
 * @return {[type]} [description]
 */
grid.buildGrid = function () {
    var thiz = this;
    // console.log('buildgrid ....');
    mxApi.getSyncValue(MY_SITE, function (mx5_layout) {
        
        if(Object.prototype.toString.call(mx5_layout).slice(8, -1) === 'Object' && Object.keys(mx5_layout).length === 0) {
            mx5_layout = DEFAULT_MY_SITE;
            mxApi.pagedata = mx5_layout;
            thiz.isSync = false;
        }

        mxApi.getSyncValue('needImport', function (data) {

            if (data.needImport && data.needImport == true) { // 需要导入MX4 guest数据
                mxApi.getLayout('qa_layout_guest', 'qa_widget_guest', function (mx4_layout_guest) {
                    mxApi.mx4_2_mx5({
                        'mx4_layout_guest': JSON.stringify(mx4_layout_guest),
                        'mx5_layout': JSON.stringify(mx5_layout),
                        'import': 'mx4'
                    }, function (result) {
                        thiz.isSync = true;
                        // 设置为已导入
                        mxApi.setSyncValue('needImport', { "needImport": false });
                        grid.buildGridHtml(result);
                    });
                });
                return;
            }

            if (data.needImport5 && data.needImport5 == true) { // 需要导入MX5 guest数据
                mxApi.getSyncValue('my_site_guest', function (mx5_layout_guest) {
                    mxApi.mx4_2_mx5({
                        'mx5_layout_guest': JSON.stringify(mx5_layout_guest),
                        'mx5_layout': JSON.stringify(mx5_layout),
                        'import': 'mx5'
                    }, function (result) {
                        thiz.isSync = true;
                        // 设置为已导入
                        mxApi.setSyncValue('needImport', { "needImport5": false });
                        grid.buildGridHtml(result);
                    });
                });
                return;
            }

            grid.buildGridHtml(mx5_layout);
        });
    });
}

grid.imageFilter = function(src) {
    if(!src) return '';
    
    if(src.endWith('.webp')) {
        src = isMac ? src.replace('.webp','') : src;
    } else {
        src = !isMac && src.startWith(cdnServer) ? src + '.webp' : src;
    }

    return src;
}

/**
 * 构造 grid HTML
 * @param  {[type]} list 数据集合
 * @return {[type]}      html
 */
grid.buildGridHtml = function (list) {
    var _my_site_html = [],
        _hot_site_html = [],
        _list = list,
        _thumbsList = [];
    
    

    template.on('imageFilter', this.imageFilter);

    template.on('isThumbImge', function(src) {

        if(src &&src.startWith('mx://thumbs/')) {
            return true;
        }
        return false;
    });

    var dataparam = {};
    for (var i = 0; i < _list.length; i++) {
        var d = _list[i];

        if (d === null) continue;

        if (d.image === undefined || d.image === null) {// 随机生成色块
            d.colorBlock = d.colorBlock ? d.colorBlock : 'color-block-' + parseInt(Math.random() * 9 + 1);
        }

        d.image = d.image ? d.image.replace('pc-newtab.maxthon.com/image', 'pc-newtab.maxthon.com/v1.1/image') : d.image;

        if (d.isHot && d.isHot === true) {

            if (d.image && (d.image.endWith('/offline.png') || d.image.endWith('/offline.png.webp'))) {
                d.image = newWin.getThumbsUrl(d.url, 1);
            }

            var _grid_html = this.render(this.hot_grid_html, d);
            if (d.image && d.image.startWith('mx://thumbs')) {
                _thumbsList.push(d.url);
                _grid_html = _grid_html.replace('hot-nav-grid', 'hot-nav-grid loading');
            }
            _hot_site_html.push(_grid_html);
        } else {
            if (d.children && d.children.length > 0) {
                _my_site_html.push('<li class="my-site-grid folder" data-folderid="' + d.folderId + '">\
                                        <div class="my-site-thumbnail-container">');
                for (var j = 0; j < d.children.length; j++) {
                    var fd = d.children[j];
                    if(!fd) continue;
                    if (fd.image === undefined || fd.image === null) { // 随机生成色块
                        fd.colorBlock = fd.colorBlock ? fd.colorBlock : 'color-block-' + parseInt(Math.random() * 9 + 1);
                    } else {
                        if (fd.image && (fd.image.endWith('/offline.png') || fd.image.endWith('/offline.png.webp'))) {
                            fd.image = newWin.getThumbsUrl(fd.url, 1);
                        }
                        if(fd.image && isMac) { // Mac
                            fd.image = fd.image.replace('.webp','');
                        }
                    }

                    if (j < 4) {
                        if (fd.image !== null) {
                            if (fd.image && fd.image.startWith('mx://thumbs')) { // 是截图
                                _thumbsList.push(fd.url);
                                _my_site_html.push('<div class="my-site-thumbnail loading" url="' + fd.url + '"></div>');
                            } else {
                                _my_site_html.push('<div class="my-site-thumbnail" style="background-image: url(' + this.imageFilter(fd.image) + ');"></div>');
                            }
                        } else {
                            _my_site_html.push('<div class="my-site-thumbnail ' + fd.colorBlock + '"><span>' + fd.title + '</span></div>');
                        }
                        continue;
                    }
                }
                _my_site_html.push('</div>\
                                        <p class="my-site-nav">\
                                            <strong class="title">'+ d.title + '</strong>\
                                            <button class="delete">×</button>\
                                        </p>\
                                    </li>');
                // _my_site_html.push(template(this.folder_grid_html, d));
            } else {
                
                if (d.image && (d.image.endWith('/offline.png') || d.image.endWith('/offline.png.webp'))) {
                    d.image = newWin.getThumbsUrl(d.url, 1);
                }

                var _grid_html = this.render(this.grid_html, d);

                if (d.image && d.image.startWith('mx://thumbs')) {
                    _thumbsList.push(d.url);
                    _grid_html = _grid_html.replace('my-site-grid', 'my-site-grid loading');
                }
                _my_site_html.push(_grid_html);
            }
        }
    }

    _my_site_html.push(this.getAddGridHtml());
    if (_hot_site_html.length > 8) {
        _hot_site_html.splice(8);
    }
    $hot_nav_list.empty().append(_hot_site_html.join(''));
    $my_site_nav_list.empty().append(_my_site_html.join(''));

    // 判断本地是否存在截图，如不存在需要重新截图
    if (_thumbsList.length > 0) {
        mxApi.useApi('quickaccess.isThumbExists', { 'urls': _thumbsList }, function (data) {
            for (var i = 0; i < data.result.length; i++) {
                if (data.result[i] === true) {

                    // 去除loading
                    $hot_nav_list.find('li.loading').each(function (index, n) {
                        var $this = $(n);

                        if ($this.hasClass('loading')) {
                            var url = $this.find('>a').attr('href');
                            if (url === _thumbsList[i]) {
                                $this.removeClass('loading');
                            }
                            return true;
                        }
                    });

                    $my_site_nav_list.find('li:not(.add,.empty,.folder)').each(function (index, n) {
                        var $this = $(n);

                        if ($this.hasClass('loading')) {
                            var url = $this.find('>a').attr('href');
                            if (url === _thumbsList[i]) {
                                $this.removeClass('loading');
                            }
                            return true;
                        }
                    });

                    $my_site_nav_list.find('.my-site-thumbnail[url="' + _thumbsList[i] + '"]').removeClass('loading').removeAttr('url')
                        .css({ 'background-image': 'url(' + newWin.getThumbsUrl(_thumbsList[i], 0) + ')','background-size':'cover'});
                } else {
                    if (window.onLine === true) {
                        mxApi.useApi('quickaccess.reflushThumb', { 'url': _thumbsList[i], 'reflush': 1 });
                    } else {
                        
                    }
                }
            }
        });
    }

    grid.autoComplete();

    $('.dragable').kpdragsort();
    // 数据是否同步
    if (this.isSync == true) {
        // 保存数据
        grid.saveLayout(list);
        var myWorker = new Worker("http://pc-newtab.maxthon.com/v1.1/js/worker/my_task.js");
        myWorker.onmessage = function(event) {
            console.log(event.data);
            // grid.saveLayout(event.data);
        };
        // startworker
        myWorker.postMessage(list);
    }
}

/**
 * 事件绑定
 */
grid.bindEvent = function () {
    var thiz = this;
    // 增加
    $quickdial.on('click', '.add', function (e) {
        e.preventDefault();
        $(this).addClass('selected');
        newWin.open();
    });

    $quick_dial_my_site.on('contextmenu', '.folder', function (e) {
        var $this = $(this);
        var folderId = $this.attr('data-folderid');
        folder.contextmenu(e.pageX, e.pageY, folderId);
    });

    $quick_dial_my_site.on('click', '.my-site-nav > button', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var $this = $(this),
            className = $this.attr('class'),
            $grid = $this.parents('li.my-site-grid');

        var ueip_data = {
            m: 'hoverMenu'
        };
        switch (className) {
            case 'delete':
                mxApi.getMySite(function (data) {
                    if ($grid.hasClass('folder')) {
                        var folder_data = {};
                        var folderId = $grid.attr('data-folderid');
                        $.each(data, function (index, item) {
                            if (item.folderId === folderId) {
                                folder_data = item;
                                folder_data.index = index;
                                return false;
                            }
                            return true;
                        });
                        ueip_data.n = 'folderDelete';
                        ueip_data.data = {
                            'title' : folder_data.title
                        };
                        folder.delete(folder_data, ueip_data);
                    } else {
                        var targetIndex = $grid.index();
                        $grid.hide(300, function () {
                            $grid.remove();
                            thiz.autoComplete();
                            // 保存数据
                            mxApi.loadAndSave(function (data) {
                                data.splice(targetIndex, 1);
                                return data;
                            });
                        });
                    }
                });
                if(!$grid.hasClass('folder')) {
                    ueip_data.n = 'hoverDelete';
                }
                break;
            case 'edit':
                $grid.addClass('selected');
                newWin.open({
                    'url': $grid.find('a').attr('href'),
                    'title': $grid.find('a').attr('data-title'),
                    'colorBlock': $grid.find('a>div').eq(0).attr('colorBlock'),
                    'image': $grid.find('a').attr('data-image')
                });
                ueip_data.n = 'hoverEdit';
                break;
            case 'refresh':
                if (window.onLine == false) return;
                $grid.addClass('loading');
                mxApi.useApi('quickaccess.reflushThumb', { 'url': $grid.find('a').attr('href'), 'reflush': 1 });
                ueip_data.n = 'hoverRefresh';
                break;
        }
        // 增加hover统计
        if(ueip_data.n && ueip_data.n !== 'folderDelete') {
            ueip_data.data = {
                'title' : $grid.find('a').attr('data-title'),
                'href'  : $grid.find('a').attr('href')
            }
            datacode && datacode.statistic(ueip_data);
        } 
    });

    // 绑定右键菜单
    $quickdial.on('contextmenu', '.dragable>li:not(".folder,.empty,.add,.loading")', function (e) {
        e.preventDefault();
        var $this = $(this),
            index = $this.index(),
            url = $this.find('a').attr('href');
        var data = {
            'url': url,
            'title': $this.find('a').attr('data-title'),
            'colorBlock': $this.find('a>div').eq(0).attr('colorBlock'),
            'image': $this.find('a').attr('data-image'),
            'isHot' : $this.hasClass('hot-nav-grid') ? true : false
        };
        
        thiz.contextmenu(e.pageX, e.pageY, data, function () {
            newWin.open(data);
            $this.addClass('selected');
        }, function () {
            if (data.isHot === true) { // top删除
                $this.hide(300, function () {
                    $this.remove();
                    grid.autoComplete();
                    // 保存数据
                    mxApi.loadAndSave(function (data) {
                        var array = $.grep(data, function (n, i) {
                            return !(n.isHot && n.isHot === true);
                        });
                        data.splice(array.length + index, 1);
                        return data;
                    });
                });
            } else {
                $this.hide(300, function () {
                    $this.remove();
                    // 保存数据
                    mxApi.loadAndSave(function (data) {
                        data.splice(index, 1);
                        return data;
                    });
                });
            }
        });
    });
}

/**
 * 自动补齐空格

 * @return {[type]} [description]
 */
grid.autoComplete = function () {

    var auto_len = 8 - $hot_nav_list.find('li:not(.empty,.add)').length;
    var auto_html = [];

    if (auto_len === 0) {
        $hot_nav_list.find('.empty,.add').remove();
        return false;
    }

    if ($hot_nav_list.find('li.add').length === 0) {
        if (auto_len >= 1) {
            auto_html.push(this.getAddGridHtml().replace('my-site-grid', 'hot-nav-grid'));
        }
    }

    for (var i = 1; i < auto_len; i++) {
        auto_html.push(this.empty_grid_html.replace('my-site-grid', 'hot-nav-grid'));
    }

    if (auto_html.length === 0) {
        $hot_nav_list.find('.empty').remove();
        return false;
    }

    $hot_nav_list.find('.empty').remove().end().append(auto_html.join(''));
}

/**
 * 增加站点格子
 * @param {[type]} data [description]
 */
grid.addGrid = function (data) {
    var thiz = this;
    grid.insert(data, function () {
        thiz.autoComplete();
        thiz.saveLayout();
    });
}

/**
 * 获取当前选中格子
 * @param  
 * @return {[dom]}      [description]
 */
grid.currentGrid = function () {
    var _index = $hot_nav_list.find('.selected').index();

    if (_index === -1) {
        _index = $quick_dial_my_site.find('.selected').index();

        // 如果找不到说明是新增，直接返回
        if (_index === -1) {
            _index = $folder_quick_dial.find('.selected').index();

            if (_index === -1)
                return $my_site_nav_list.find('.add');
            return $folder_quick_dial.find('li').eq(_index);
        }

        return $quick_dial_my_site.find('.my-site-grid').eq(_index);
    }

    return $hot_nav_list.find('>li').eq(_index);
}

/**
 * 增加格子
 * @param  {[type]} data [description]
 * @param  {[function]} callback  增加回调
 * @return {[type]}      [description]
 */
grid.insert = function (data, callback) {

    var $currentGrid = grid.currentGrid();
    var tpl = this.grid_html;
    var ueip_data = {
        data: { 'title': data.title, 'url': data.url },
        m: 'event'
    };
    if ($currentGrid.hasClass('hot-nav-grid')) {
        tpl = this.hot_grid_html;
        if(data.image) {
            data.image = data.image.replace('/Re/', '/Sq/');
            data.image = data.image.replace('/big/','/small/');
        }
        ueip_data.n = 'addtop';
    } else {
        ueip_data.n = 'addbottom';
    }
    var $tpl = $(grid.render(tpl, data));

    var cb = function () {
        $tpl.insertBefore($currentGrid);
        callback && callback();
        datacode && datacode.statistic(ueip_data);
    }

    if (data.image && data.image.startWith('mx://thumbs')) {
        mxApi.hasCapture(data.url, function (ready) {
            if (!ready) {
                $tpl.addClass('loading');
            }
            cb();
        });
    } else {
        cb();
    }
}

/**
 * 补齐格子
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
grid.replace = function (data) {
    grid.insert(data);
    $quick_dial_my_site.find('.empty').eq(0).remove();
}

/**
 * 更新站点格子
 * @param {[type]} data [description]
 */
grid.updateGrid = function (data) {

    var _index = $quick_dial_my_site.find('.selected').index();
    if (_index === -1) {
        _index = $hot_nav_list.find('.selected').index();
        if (_index === -1) {
            _index = $folder_quick_dial.find('.selected').index();
            $folder_quick_dial.find('li').eq(_index).replaceWith(this.render(this.grid_html, data));
        } else {
            if(data.image) {
                data.image = data.image.replace('/Re/', '/Sq/');
                data.image = data.image.replace('/big/','/small/');
            }
            $hot_nav_list.find('li').eq(_index).replaceWith(this.render(this.hot_grid_html, data));
            $hot_nav_list.find('li').eq(_index).addClass('selected');
        }
    } else {
        $quick_dial_my_site.find('li').eq(_index).replaceWith(this.render(this.grid_html, data));
        $quick_dial_my_site.find('li').eq(_index).addClass('selected');
    }

    grid.saveLayout();
}

/**
 * 保存页面站点信息
 * @param initdata
 * @return {[type]}      []
 */
grid.saveLayout = function (initdata) {
    var thiz = this;
    mxApi.loadAndSave(function (pagedata) {
        // fixd bug: 数据导入成功后，没来得及保存
        if (initdata) {
            pagedata = initdata;
        }
        // 文件夹交互
        // $folder_quick_dial.is(':visible') 解决文件夹显示状态时保存
        // $folder_quick_dial.attr('edit') === 'true' 解决文件夹内右键编辑状态下保存问题
        if ( $folder_quick_dial.is(':visible') || $folder_quick_dial.attr('edit') === 'true') { // 编辑状态
            var selecteIndex = $folder_quick_dial.data('selecteIndex');
            pagedata[selecteIndex].children = [];
            $folder_quick_dial.find('.a-quick-dial-img-list > li').each(function (i, n) {
                var $ele = $(n);
                pagedata[selecteIndex].children.push({
                    'title': $ele.find('>a').attr('data-title'),                                                 // 标题
                    'url': $ele.find('>a').attr('href'),                                                    // url链接
                    'image': $ele.hasClass('no-img') ? null : $ele.find('>a').attr('data-image'),           // 图片路径
                    'isHot': false,                                                                         // 是否热门网址
                    'colorBlock': $ele.find('div').attr('colorblock')                                       // 色块
                });
            });
            $quick_dial_my_site.find('.my-site-grid').eq(selecteIndex).replaceWith(template(thiz.folder_grid_html, pagedata[selecteIndex]));
            return pagedata;
        } else {
            var tempdata = [], index = 0;
            $my_site_nav_list.find('li:not(.add,.empty)').each(function (i, n) {
                var $ele = $(n);
                index++;
                if ($ele.hasClass('folder')) {
                    var folderData = $.grep(pagedata, function (item, index) {
                        return !!item && item.folderId === $ele.attr('data-folderid');
                    });
                    tempdata[i] = folderData[0];
                    return true;
                }

                tempdata[i] = {
                    'title': $ele.find('>a').attr('data-title') || '',                                        // 标题
                    'url': $ele.find('>a').attr('href') || '',                                           // url链接
                    'image': $ele.hasClass('no-img') ? null : $ele.find('>a').attr('data-image'),              // 图片路径
                    'isHot': false,                                                                      // 是否热门网址
                    'colorBlock': $ele.hasClass('no-img') ? $ele.find('div').attr('colorblock') : null   // 色块
                }
            });

            $hot_nav_list.find('li:not(.add,.empty)').each(function (i, n) {
                var $ele = $(n);

                tempdata[i + index] = {
                    'title': $ele.find('>a').attr('data-title') || '',                                      // 标题
                    'url': $ele.find('>a').attr('href'),                                                    // url链接
                    'image':  $ele.hasClass('no-img') ? null : $ele.find('>a').attr('data-image'),          // 图片路径
                    'isHot': true,                                                                          // 是否热门网址
                    'colorBlock': $ele.hasClass('no-img') ? $ele.find('.color-block').attr('colorblock') : null        // 色块
                }
            });
            pagedata = null;
            return tempdata;
        }
    });
}

/**
 * 创建我的站点Grid
 * @return {[type]} [description]
 */
grid.render = function (tpl, data) {
    if (!data) return 'no data';
    var grid_html = '';

    if (data.customeStyle) { // 新数据结构
        var customeStyle = data.customeStyle,
            logo = customeStyle.logo || {};

        if (customeStyle.colorBlock) {
            data.colorBlock = customeStyle.colorBlock || '';
            data.noImg = 'no-img';
        } else {

            if (logo.isShot === true) { // 网页截图
                data.image = data.image || 'mx://thumbs/?reflush=1&stamp=' + (new Date().getTime()) + '&url=' + data.url;
                // data.isShot = true;
            }
        }
    } else {

        if (data.image && data.image != null && data.image != '') {
            // if (data.image.startWith('mx://thumbs')) {
            //     data.isShot = true;
            // }
        } else {
            if (data.colorBlock && data.colorBlock != '') {
                data.colorBlock = data.colorBlock;
            } else {
                // 当前颜色块               
                if (!this.colorBlockIndex) {
                    this.colorBlockIndex = 1;
                }
                this.colorBlockIndex === 7 ? this.colorBlockIndex = 1 : this.colorBlockIndex++;
                data.colorBlock = 'color-block-' + (this.colorBlockIndex);
            }
            data.noImg = 'no-img';
        }
    }
    
    grid_html = template(tpl, data);
    return grid_html;
}

/**
 * 右键菜单
 */
grid.contextmenu = function (pageX, pageY, data) {
    var listData = [];
    listData.push({
        id: 'open-tab',
        label: Language.getLang('NewTabOpen')
    });
    listData.push({
        id: 'edit-tab',
        label: Language.getLang('Edit')
    });
    listData.push({
        id: 'delete-tab',
        label: Language.getLang('Delete')
    });
    if (mxApi.getVersion().cmpVersions('5.0.2.400') >= 0) {
        listData.push({
            type: true
        });
        listData.push({
            id: 'open-newwin-tab',
            label: Language.getLang('NewWindowOpen')
        });
        listData.push({
            id: 'open-invisible-tab',
            label: Language.getLang('NewInvisibleOpen')
        });
    }

    var args = arguments;
    Menu.showPopupMenu(pageX, pageY, listData, function (result) {
        var ueip_data = {
            'm': data.isHot === true ? 'toprightmenu' : 'sitesrightmenu',
            'data': {
                'title' : data.title,
                'href'  : data.url
            }
        };
        switch (result) {
            case 'open-tab':
                ueip_data.n = 'openinnewtab';
                mxApi.useApi('newTabBackground', { 'url': data.url });
                break;
            case 'edit-tab':
                ueip_data.n = 'edit';
                (typeof args[3] === 'function') ? args[3]() : void (0);
                break;
            case 'delete-tab':
                ueip_data.n = 'delete';
                (typeof args[4] === 'function') ? args[4]() : void (0);
                break;
            case 'open-newwin-tab':
                ueip_data.n = 'openinnewwindow';
                mxApi.useApi('openUrl', { 'url': data.url, 'mode': 'NewWindow' });
                (typeof args[5] === 'function') ? args[5]() : void (0);
                break;
            case 'open-invisible-tab':
                ueip_data.n = 'openinprivatewindow';
                mxApi.useApi('openUrl', { 'url': data.url, 'mode': 'NewPrivateWindow' });
                (typeof args[6] === 'function') ? args[6]() : void (0);
                break;
        }
        // 统计操作行为
        datacode && datacode.statistic(ueip_data);
        // 统计右键行为
        datacode && datacode.statistic({
            'data' : ueip_data.data,
            'm': 'myfavoritesClick',
            'n': 'rightClick'
        });
    });
}
/**
 * 文件夹操作
 * @author guotingjie@maxthon.net
 * @ctime 2016-9-12
 */
var $folderTitle = $folder_quick_dial.find('.title');
var folder = {
    tpl: '<li class="my-site-grid <% if(this.image == null || this.image == undefined) {%>no-img<%}%>">\
            <a href="<%= this.url %>" title="" data-title="<%= this.title %>" data-image="<%= this.imageFilter(this.image)%>" target="_blank" class="<%= this.colorBlock %>" >\
                <% if(this.image !== null) {%>\
                    <img class="a-quick-dial-img" src="<%= this.imageFilter(this.image) %>" onerror="replaceErrorIcon(this);" alt="<%= this.title %>">\
                <% } else { %>\
                    <div colorBlock="<%= this.colorBlock %>" class="color-block"><%= this.title %></div>\
                <% } %>\
                <p class="my-site-nav">\
                    <strong class="title"><%=this.title || \"\" %></strong>\
                    <% if(this.isThumbImge(this.image)) {%><button class="refresh">×</button><% } %>\
                    <button class="edit">×</button>\
                    <button class="delete">×</button>\
                </p>\
            </a>\
        </li>'//,
    // /**
    //  * 隐藏文件夹窗口
    //  */
    // hidden: function () {
    //     $folder_quick_dial.css({ 'visibility': 'hidden' });
    // },
    // /**
    //  * 显示文件夹窗口
    //  */
    // visible: function () {
    //     $folder_quick_dial.css({ 'visibility': 'visible' });
    // },
    // /**
    //  * 判断窗口可见性
    //  */
    // isVisibility: function () {
    //     return $folder_quick_dial.css('visibility') === 'hidden';
    // }
}

folder.init = function () {
    // 文件夹弹窗
    $quick_dial_my_site.on('click', '.folder', function (e) {
        e.preventDefault();
        var $folder = $(this);

        folder.dialog = $folder_quick_dial.dialog({
            init: function () {
                // 文件夹列表
                mxApi.getMySite(function (data) {
                    var folderId = $folder.attr('data-folderid');
                    var folder_data = {};//folder.loadById(folderId, data);
                    
                    $.each(data, function (index, item) {
                        
                        if (item && item.folderId === folderId) {
                            $folder_quick_dial.data('selecteIndex', index);
                            folder_data = item;
                            return false;
                        }
                        return true;
                    });

                    // 空文件夹
                    if ($.isEmptyObject(folder_data)) {
                        return false;
                    }

                    var folder_html = [];
                    // 需判断截图是否存在列表
                    var _thumbsList = [];
                    for (var i = 0; i < folder_data.children.length; i++) {
                        var fd = folder_data.children[i];
                        if(!fd) continue;
                        if (fd.image) {
                            if (fd.image.endWith('/offline.png') || fd.image.endWith('/offline.png.webp')) {
                                fd.image = newWin.getThumbsUrl(fd.url, 1);
                            }
                            if (fd.image.startWith('mx://thumbs')) {
                                _thumbsList.push(fd.url);
                            }
                        }

                        folder_html.push(template(folder.tpl, fd));
                    }

                    $folder_quick_dial.find('.a-quick-dial-img-list').empty()
                        .append(folder_html.join(''));

                    folder.loadTimer = setTimeout(function () {
                        // 判断本地是否存在截图，如不存在需要重新截图
                        if (_thumbsList.length > 0) {
                            mxApi.useApi('quickaccess.isThumbExists', { 'urls': _thumbsList }, function (data) {
                                for (var i = 0; i < data.result.length; i++) {
                                    // 去除loading
                                    $folder_quick_dial.find('li.loading').each(function (index, n) {
                                        var $this = $(n);
                                        var $link = $this.find('>a'),
                                            $img = $link.find('>img'),
                                            url = $link.attr('href');

                                        if (url === _thumbsList[i]) {
                                            if (data.result[i] === true) {
                                                $this.removeClass('loading');
                                            } else {
                                                $this.addClass('loading');
                                            }
                                            return true;
                                        }
                                    });

                                }
                            });
                        }
                    });

                    $folderTitle.html(folder_data.title);
                });
            },
            close: function () {
                // 编辑状态
                $folder_quick_dial.attr('edit', false);
                folder.saveTitle();
                return true;
            },
            after: function () {
                // 拖拽
                $folder_quick_dial.find('.a-quick-dial-img-list').kpdragsort();
            }
        });
    });

    folder.addEventListener();
}

/**
 * 保存标题
 */
folder.saveTitle = function () {

    if ($folderTitle.attr('contenteditable') == 'false')
        return;

    $folderTitle.attr('contenteditable', false);
    var text = $folderTitle.text();
    var text_len = text.replace(/[^\x00-\xff]/g, '**').length;

    if (text_len === 0) {
        text = Language.getLang('NewFolder');
    }
    if (text_len > 20) {
        text = text.substring(0, 20);
    }

    $folderTitle.text(text);
    var _index = $folder_quick_dial.data('selecteIndex');

    mxApi.loadAndSave(function (data) {
        // 更新标题
        $quick_dial_my_site.find('.my-site-grid[data-folderid="' + data[_index].folderId + '"]').find('.my-site-nav > .title').html(text);
        data[_index].title = text;
        return data;
    });
}

/**
 * 文件夹更新
 * @param data 数据
 * @param origin 位置坐标
 * @param append 是否追加
 */
folder.update = function (data, origin, append) {

    var selecteIndex = $folder_quick_dial.data('selecteIndex');
    var folder_data = data[selecteIndex];
    if (folder_data.children && folder_data.children.length >= 1) {
        var removeItem = data[selecteIndex].children.splice(origin, 1);

        append ? data.splice(data.length - $hot_nav_list.find('li:not(.empty,.add)').length, 0, removeItem[0]) : void (0);

        // 文件夹为空，文件夹自动删除
        if (folder_data.children.length === 0) {
            $quick_dial_my_site.find('.my-site-grid[data-folderid="' + data[selecteIndex].folderId + '"]').hide(function () {
                $(this).remove();
                grid.autoComplete();
            });
            data.splice(selecteIndex, 1);
            // 关闭文件夹弹框
            folder.dialog.close();
        } else {
            if (origin < 4) {
                var $folder = $quick_dial_my_site.find('.my-site-grid').eq(selecteIndex);
                if ($folder.hasClass('folder')) {
                    if (folder_data.children.length < 4) {
                        $folder.find('.my-site-thumbnail').eq(origin).remove();
                    } else {
                        $folder.replaceWith(template(grid.folder_grid_html, folder_data));
                    }
                }
            }
        }
    }
}

/**
 * 删除文件夹
 * @param folder_data
 */
folder.delete = function (folder_data, ueip_data) {

    var deleteFolderDialog = $('#delete_folder').dialog({
        html: '<div class="dialog-header">\
                    <a class="close" href="#close">×</a>\
                    <h1>' + Language.getLang('DeleteFolderTitle') + '</h1>\
                </div>\
                <div class="dialog-content">\
                    <div class="ui-icon">\
                        <svg viewBox="0 0 44 44" version="1.1" width="44" height="72">\
                            <defs>\
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">\
                                    <stop stop-color="#FFD23A" offset="0%"></stop>\
                                    <stop stop-color="#FF901B" offset="100%"></stop>\
                                </linearGradient>\
                            </defs>\
                            <g id="定稿方案" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                <g id="文件夹_删除弹框" transform="translate(-791.000000, -536.000000)">\
                                    <g id="Group-36" transform="translate(719.000000, 467.000000)">\
                                        <g id="Group-55" transform="translate(72.000000, 68.000000)">\
                                            <g id="Group-51" transform="translate(0.000000, 1.000000)">\
                                                <g id="Group-50">\
                                                    <circle id="Oval-6" fill="url(#linearGradient-1)" cx="22" cy="22" r="22"></circle>\
                                                    <path d="M20.5243773,23.3630273 L20.0951053,16.9373613 C20.0146164,15.6853116 19.9743725,14.7865322 19.9743725,14.2409963 C19.9743725,13.4987096 20.1688845,12.9196453 20.5579142,12.5037859 C20.946944,12.0879266 21.4589352,11.88 22.0939033,11.88 C22.8630195,11.88 23.3772465,12.1460566 23.6365997,12.6781777 C23.8959528,13.2102989 24.0256275,13.9771678 24.0256275,14.9788076 C24.0256275,15.5690596 23.9943267,16.1682459 23.9317242,16.7763843 L23.3548899,23.3898568 C23.2922874,24.1768595 23.1581412,24.7805173 22.9524474,25.2008482 C22.7467535,25.6211792 22.4069165,25.8313416 21.9329262,25.8313416 C21.4499928,25.8313416 21.1146273,25.6278865 20.9268199,25.2209704 C20.7390124,24.8140542 20.6048662,24.194746 20.5243773,23.3630273 L20.5243773,23.3630273 Z M22.0134148,32.1899338 C21.4678788,32.1899338 20.9916599,32.013308 20.5847437,31.6600511 C20.1778276,31.3067942 19.9743725,30.8126891 19.9743725,30.177721 C19.9743725,29.6232419 20.1688845,29.1514945 20.5579142,28.7624648 C20.946944,28.373435 21.4231629,28.1789231 21.9865852,28.1789231 C22.5500076,28.1789231 23.0306981,28.373435 23.428671,28.7624648 C23.826644,29.1514945 24.0256275,29.6232419 24.0256275,30.177721 C24.0256275,30.8037459 23.8244082,31.2956152 23.4219637,31.6533437 C23.0195191,32.0110722 22.5500075,32.1899338 22.0134148,32.1899338 L22.0134148,32.1899338 Z" id="!" fill="#FFFFFF"></path>\
                                                </g>\
                                            </g>\
                                        </g>\
                                    </g>\
                                </g>\
                            </g>\
                        </svg>\
                    </div>\
                    <div class="msg">\
                        <h3>' + Language.getLang('DeleteFolderWarn') + '</h3>\
                        <p>' + Language.getLang('DeleteFolderContent').replace('{name}', folder_data.title).replace('{count}', folder_data.children.length) + '</p>\
                    </div>\
                </div>\
                <div class="dialog-footer">\
                    <button id="ok_btn" class="button primary">' + Language.getLang('Confirm') + '</button>\
                    <button id="cancel_btn" class="button">' + Language.getLang('Cancel') + '</button>\
                </div>',
        after: function ($dialog) {
            $dialog.one('click', '.close', function() {
                deleteFolderDialog.close();
            });
            $dialog.one('click', '.button', function () {
                var $button = $(this);
                switch ($button.index()) {
                    case 0:
                        deleteFolderDialog.close();
                        $quick_dial_my_site.find('.my-site-grid[data-folderid="' + folder_data.folderId + '"]').hide(function () {
                            $(this).remove();
                            grid.autoComplete();
                        });

                        // 保存数据
                        mxApi.loadAndSave(function (data) {
                            data.splice(folder_data.index, 1);
                            return data;
                        });

                        // ueip
                        datacode && datacode.statistic(ueip_data);
                        break;
                    case 1:
                        deleteFolderDialog.close();
                        break;
                }
            });
        }
    });
}
/**
 * 文件夹右键菜单
 */
folder.contextmenu = function (pageX, pageY, folderId) {
    var MenuList = [];
    if (mxApi.getVersion().cmpVersions('5.0.2.700') >= 0) {
        MenuList = [
            {
                id: 'open-all-tab',
                label: Language.getLang('NewTabOpenAll')
            },
            {
                id: 'delete-tab',
                label: Language.getLang('Delete')
            },
            {
                type: true
            },
            {
                id: 'open-all-newwin-tab',
                label: Language.getLang('NewWindowOpenAll')
            },
            {
                id: 'open-all-invisible-tab',
                label: Language.getLang('NewInvisibleOpenAll')
            }
        ];
    } else {
        MenuList = [{ id: 'delete-tab', label: Language.getLang('Delete') }];
    }
    Menu.showPopupMenu(pageX, pageY, MenuList, function (result) {
        mxApi.getMySite(function (data) {
            var folder_data = {}; //folder.loadById(folderId, data);
            $.each(data, function (index, item) {
                if (item.folderId === folderId) {
                    $folder_quick_dial.data('selecteIndex', index);
                    folder_data = item;
                    folder_data.index = index;
                    return false;
                }
                return true;
            });
            var ueip_data = {
                'm': 'folderrightmenu',
                'data': {
                    'title' : folder_data.title
                }
            };
            switch (result) {
                // 打开新标签
                case 'open-all-tab':
                    ueip_data.n = 'openall';
                    mxApi.useApi('openUrl', { 'urls': folder.getAllUrls(folder_data.children), 'mode': 'BackgroundTab' });
                    break;
                case 'delete-tab':
                    ueip_data.n = 'delete';
                    folder.delete(folder_data , ueip_data);
                    break;
                case 'open-all-newwin-tab':
                    ueip_data.n = 'openallinnewwindow';
                    mxApi.useApi('openUrl', { 'urls': folder.getAllUrls(folder_data.children), 'mode': 'NewWindow' });
                    break;
                case 'open-all-invisible-tab':
                    ueip_data.n = 'openallinprivatewindow';
                    mxApi.useApi('openUrl', { 'urls': folder.getAllUrls(folder_data.children), 'mode': 'NewPrivateWindow' });
                    break;
            }
            // 统计操作行为
            ueip_data.n && ueip_data.n !== 'delete' && datacode && datacode.statistic(ueip_data);
        });
    });
}

/**
 * 获取所有的url
 */
folder.getAllUrls = function (children) {
    var urls = [];
    $.each(children, function (index, item) {
        urls.push(item.url);
    });
    return urls;
}

/**
 * 文件夹事件监听处理
 */
folder.addEventListener = function () {

    // 右键菜单
    $folder_quick_dial.on('contextmenu', '.a-quick-dial-img-list > li', function (e) {
        e.preventDefault();
        var $this = $(this),
            url = $this.find('a').attr('href'),
            thisIndex = $this.index();
        var grid_data = {
            'url': url,
            'title': $this.find('a').attr('data-title'),
            'colorBlock': $this.find('a>div').eq(0).attr('colorBlock'),
            'image': $this.find('a').attr('data-image')
        };

        grid.contextmenu(e.pageX, e.pageY, grid_data, function () {
            $this.addClass('selected');
            folder.dialog.close();
            // 编辑状态
            $folder_quick_dial.attr('edit', true);
            newWin.open(grid_data, true);
        }, function () {
            $this.hide(300, function () {
                $this.remove();
                // 保存数据
                mxApi.loadAndSave(function (data) {
                    folder.update(data, thisIndex, false);
                    return data;
                });
            });
        }, function () {
            folder.dialog.close();
        }, function () {
            folder.dialog.close();
        });
    }).on('click', '.my-site-nav > button', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var $this = $(this),
            className = $this.attr('class'),
            $grid = $this.parents('li.my-site-grid');
        var data = { m: 'hoverMenu' };
        switch (className) {
            case 'delete':
                mxApi.getMySite(function (data) {
                    var thisIndex = $grid.index();
                    $grid.hide(300, function () {
                        $grid.remove();
                        // 保存数据
                        mxApi.loadAndSave(function (data) {
                            folder.update(data, thisIndex, false);
                            return data;
                        });
                    });
                });
                break;
            case 'edit':
                $grid.addClass('selected');
                folder.dialog.close();
                // 编辑状态
                $folder_quick_dial.attr('edit', true);
                newWin.open({
                    'url': $grid.find('a').attr('href'),
                    'title': $grid.find('a').attr('data-title'),
                    'colorBlock': $grid.find('a>div').eq(0).attr('colorBlock'),
                    'image': $grid.find('a').attr('data-image')
                }, true);
                break;
            case 'refresh':
                if (window.onLine == false) return;
                $grid.addClass('loading');
                mxApi.useApi('quickaccess.reflushThumb', { 'url': $grid.find('a').attr('href'), 'reflush': 1 });
                break;
        }

        if (datacode) {
            datacode.statistic(data);
        }
    });

    // 点击编辑文件夹名称
    $folder_quick_dial.on('click', 'span.title', function (e) {
        e.stopPropagation();
        var $this = $(this);
        if ($this.attr('contenteditable') == 'true')
            return;
        $this.attr('contenteditable', true);
        this.focus();
        document.onkeydown = function (e) {
            if (e.keyCode === 13) {
                folder.saveTitle();
                return false;
            }
            return true;
        }
    }).on('click', ':not(.title)', function (e) { // 保存文件夹名称
        console.log('not title click   ' + e.target.nodeName);
        e.stopPropagation();
        var $target = $(e.target);
        if ($target.is('img') || /*$target.is('button') || $target.is('strong') ||*/ $target.is('p') || ($target.is('div') && $target.hasClass('color-block')) || $target.is('a')) {
            // 前台打开接口
            var href = '';
            if ($target.is('a')) {
                href = $(e.target).attr('href');
            } else {
                href = $(e.target).parents('a').attr('href');
            }

            // 关闭文件夹
            folder.dialog.close();
            if (mxApi.getVersion().cmpVersions('5.0.1.1600') >= 0) {
                mxApi.useApi('newTabUpground', { 'url': href });
                return false;
            }

            if (href.startWith('mx://') || href.startWith('file:///')) {
                mxApi.useApi('newTabUpground', { 'url': href });
                return false;
            }

            return true;
        };
        document.onkeydown = null;
        // 关闭右键弹层
        Menu.hideAndRemovePopupMenu();
        folder.saveTitle();
    });
}

/**
 * 根据id查找文件夹数据
 */
// folder.loadById = (function () {
//     var cache = {};

//     return function (id, data) {

//         if (cache[id]) {
//             $folder_quick_dial.data('selecteIndex', cache[id].index);
//             return cache[id];
//         }

//         var result = {};
//         $.each(data, function (index, item) {
//             if (item.folderId === id) {
//                 $folder_quick_dial.data('selecteIndex', index);
//                 result = item;
//                 result.index = index;
//                 return false;
//             }
//             return true;
//         });

//         return cache[id] = result;
//     }
// })();
/**
 * 新标签页换肤功能
 * @author guotingjie@maxthon.net
 * @ctime 2016-6-6
 */
var switchSkin = {};

var $s_skin_button = $('#s_skin_button'),
    $s_skin_layer = $('#s_skin_layer'),
    $mx_mask_layer = $('#mx_mask_layer'),
    $skin_img_list = $s_skin_layer.find('.skin-img-list'),
    $s_skin_container = $('.s-skin-container');

switchSkin.init = function () {

    $s_skin_button.on('click', function () {

        $s_skin_layer.find('.skin-img-item img').each(function (i, n) {
            $(n).attr('src', $(n).attr('mx-src') + (mxApi.isSupportWebp() ? '.webp' : ''));
        });
        $s_skin_layer.animate({ 'right': '0px', 'opacity': '1' });

        $mx_mask_layer.show().unbind('click').click(function () {

            $s_skin_layer.animate({ 'right': '-215px', 'opacity': '0' });
            $mx_mask_layer.hide();
        });

        window.onresize = function (e) {
            if (this.resizeTimer) clearTimeout(this.resizeTimer);

            this.resizeTimer = setTimeout(function () {
                // if (window.innerHeight < 70) {
                    $skin_img_list.height(window.innerHeight - 80);
                // } else {
                //     $skin_img_list.removeAttr('style');
                // }
            }, 100);
        }
        setTimeout(function () {
            window.onresize();
        }, 50);
    });

    $s_skin_layer.on('click', '.s-kin-layer-close', function () {

        $s_skin_layer.animate({ 'right': '-215px', 'opacity': '0' });
        $mx_mask_layer.hide().unbind('click');

        window.onresize = null;
    });

    $s_skin_layer.on('click', 'ul > li', function () {
        var $this = $(this);

        $this.siblings('li').find('em').removeClass('img-item-choose');
        $this.find('em').addClass('img-item-choose');

        var image = $this.find('img').attr('mx-src').replace('/preview', '') + (mxApi.isSupportWebp() ? '.webp' : '');

        var json = { 'index': $this.index(), 'image': image };
        json.index === 1 || json.index === 2 || json.index === 7 || json.index === 8 ? $('body').addClass('transparent') : $('body').removeClass('transparent');

        // 清除活动背景
        localStorage.removeItem('NTab_activity');
        localStorage.setItem('backgroundImageJSON', JSON.stringify(json));
        switchSkin.setBackGround(image);
    });

    this.setBackGround();
}

switchSkin.setBackGround = function (backgroundImage) {

    if (backgroundImage) {
        var css = {};
        css['background-image'] = 'url(' + backgroundImage + ')';
        $s_skin_container.removeAttr('style').css(css).animate({ 'opacity': '1' });
        return;
    }

    var json = localStorage.getItem('backgroundImageJSON') !== null ? JSON.parse(localStorage.getItem('backgroundImageJSON')) : { 'index': '2' };
    var $this = $s_skin_layer.find('ul > li').eq(json.index).click();
    if (datacode) {
        datacode.statistic({
            n: $this.attr('name'),
            m: 'switchbackground'
        });
    }
}
/**
 * 新增我的站点
 * @author guotingjie@maxthon.net
 * @ctime 2016-6-6
 */
var newWin = {};

var $quickdial = $('.quickdial'),
    $add_quick_dial = $('#add_quick_dial'),
    $mx_mask_layer = $('#mx_mask_layer'),
    $screen_shot = $add_quick_dial.find('#screen_shot');

var $a_quick_dial_search_icon = $add_quick_dial.find('.a-quick-dial-search-icon');

var $window = $(window);

newWin.init = function () {

    $add_quick_dial.on('click', '.a-quick-dial-tab > li', function () {
        var $this = $(this);

        $this.siblings().removeClass('selected');
        $this.addClass('selected');

        $add_quick_dial.find('article').hide().eq($this.index()).show();
    });

    // 导航切换
    $add_quick_dial.on('click', '.a-quick-dial-nav li', function () {
        var $this = $(this);
        $this.siblings('li').removeClass('current');
        $this.addClass('current');
        newWin.render(SITE_LIST[$this.index()]);
    });

    $add_quick_dial.on('click', '.a-quick-dial-img-list li', function (e) {
        e.preventDefault();
        var $this = $(this);

        if ($this.hasClass('disable')) {
            return;
        }
        // 防止频繁点击，导致添加多次
        $this.addClass('disable');

        var $ele = $this.find('a');
        var g = {
            'title': $ele.attr('title'),                     // 标题
            'url': $ele.attr('href'),                        // url链接
            'image': $this.find('img').attr('src'),          // 图片路径
            'preset': true                                   // 预置网址
        };

        setTimeout(function () {
            // 构建动画元素
            var $mx_drag_div = $('.mx-drag-div');

            $mx_drag_div.html($this.prop('outerHTML'));
            var w = $this.width(), h = $this.innerHeight();
            var p = $this.offset();
            var l = p.left;
            var t = p.top;
            $mx_drag_div.css({ "width": w, "height": h, "position": "absolute", opacity: 0.85, "z-index": 999 });
            $mx_drag_div.css({ "left": l, "top": t }).show();

            // 获取移动位置
            var currentGrid = grid.currentGrid();
            var p2 = currentGrid.offset();
            var l2 = p2.left;
            var t2 = p2.top;

            if ($('#a_quick_dial_add_btn').text() === Language.getLang('Save')) {

                currentGrid[0].style.visibility = 'hidden';
                if ($folder_quick_dial.attr('edit') === 'true') {
                    $mx_drag_div.removeAttr('style');
                    grid.updateGrid(g);
                    // 关闭弹框
                    $add_quick_dial.find('.close').click();
                } else {
                    $mx_drag_div.animate({ "left": l2, "top": t2 }, 300, function () {
                        var tpl = grid.grid_html;
                        if (currentGrid.hasClass('hot-nav-grid')) {
                            tpl = grid.hot_grid_html;
                            if (g.image) {
                                g.image = g.image.replace('/Re/', '/Sq/');
                                g.image = g.image.replace('/big/', '/small/');
                            }
                        }
                        currentGrid.replaceWith(grid.render(tpl, g));
                        grid.saveLayout();
                        $mx_drag_div.removeAttr('style');
                    });
                    // 关闭弹框
                    $add_quick_dial.find('.close').click();
                }
            } else {
                
                $mx_drag_div.animate({ "left": l2, "top": t2 }, 300, function () {
                    var tpl = grid.grid_html;
                    if (currentGrid.hasClass('hot-nav-grid')) {
                        tpl = grid.hot_grid_html;
                        if (g.image) {
                            g.image = g.image.replace('/Re/', '/Sq/');
                            g.image = g.image.replace('/big/', '/small/');
                        }
                    }
                    currentGrid.replaceWith(grid.render(tpl, g));
                    grid.saveLayout();
                    $mx_drag_div.removeAttr('style');
                });

                // 构建动画元素
                var next = currentGrid.next();
                if (next.length === 0 && !currentGrid.hasClass('hot-nav-grid')) { // bottom 
                    next = currentGrid.clone();
                    // 设置为隐藏
                    next[0].style.visibility = 'hidden';
                    next.appendTo('#my_site_nav_list');
                } else {
                    if(next.length === 0) {
                        next = currentGrid;
                    }
                    // 设置为隐藏
                    next[0].style.visibility = 'hidden';
                }
                var flag = next.length !== 0 || !currentGrid.hasClass('hot-nav-grid');
                if (flag) {
                    var p3 = next.offset();
                    var $mx_swap_div = $('.mx-swap-div');
                    $mx_swap_div.html(currentGrid.prop('outerHTML'));
                    $mx_swap_div.css({ "width": currentGrid.width(), "height": currentGrid.innerHeight(), "position": "absolute", opacity: 0.85, "z-index": 999 , "left": l2, "top": t2}).show();
                    
                    $mx_swap_div.animate({ "left": p3.left, "top": p3.top }, 300, function () {
                        $mx_swap_div.removeAttr('style');
                        currentGrid.removeAttr('style');
                        next.replaceWith(currentGrid.prop('outerHTML'));
                    });
                }
                              
                currentGrid[0].style.visibility = 'hidden';
                // setTimeout(function() {
                // 关闭弹框
                    $add_quick_dial.find('.close').click();
                // }, 100);
            }

            if (datacode) {
                datacode.statistic({
                    n:  $('.a-quick-dial-nav>li.current').attr('data-code') || '',
                    data: { 'title': g.title, 'url': g.url },
                    m: navigator.language.toLocaleLowerCase() === 'zh-cn' ? 'zhcustomeURLSource' : 'encustomeURLSource'
                });
            }
        }, 50);
    });

    $add_quick_dial.on('click', '.a-quick-dial-custome-style li', function (e) {
        var $this = $(this);

        $this.siblings('li').removeClass('selected');
        $this.addClass('selected');

        $add_quick_dial.find('.a-quick-dial-custome-style')
            .animate({ scrollLeft: $this.index() * 120 });

        if ($this.find('>a').hasClass('loading')) {
            $('#a_quick_dial_add_btn').addClass('disable-add-btn');
        } else {
            $('#a_quick_dial_add_btn').removeClass('disable-add-btn');
        }
    });

    $add_quick_dial.on('click', '#a_quick_dial_add_btn', function (e) {
        var $this = $(this);
        if (newWin.shotTimer) clearTimeout(newWin.shotTimer);
        if ($this.hasClass('disable') || $this.hasClass('disable-add-btn')) {
            return;
        }

        var url = $add_quick_dial.find('input[name="url"]').val().trim();
        var title = $add_quick_dial.find('input[name="title"]').val().trim();

        $add_quick_dial.find('.error').hide();
        if (url.length === 0) {
            $add_quick_dial.find('.error').eq(0).find('>span').html(Language.getLang('EnterUrl')).end().show();
            $add_quick_dial.find('input[name="url"]').focus();
            return;
        }

        if (url.indexOf('..') > 0 && url.indexOf('..')) { //
            $add_quick_dial.find('.error').eq(0).find('>span').html(Language.getLang('CheckUrl')).end().show();
            $add_quick_dial.find('input[name="url"]').focus();
            return;
        }

        // 防止频繁点击，导致添加多次
        $this.addClass('disable');

        if (title.length === 0) {
            title = url;
        }

        var item = {
            'title': title,
            'url': url.notUrl() ? 'http://' + url : url
        };

        var ueip_data = {
            data: { 'title': item.title, 'url': item.url },
            m: 'imageType'
        };
        if ($add_quick_dial.find('.radio:checked').val() === '0') { // 选择的是图片Logo

            item.customeStyle = {
                'logo': {
                    'preSet': false,    // 是否预置
                    'isShot': true,     // 是否截图
                }
            }
            var $selectedLogo = $add_quick_dial.find('#screen_shot>li.selected');
            // 属于截图类型
            if ($selectedLogo.index() === 0) {
                ueip_data.n = 'screenshot';
            } else {
                item.customeStyle.logo.isShot = false;
                if ($selectedLogo.hasClass('commend')) { // 属于推荐图片
                    item.customeStyle.logo.preSet = true;
                    ueip_data.n = 'default';
                } else {
                    ueip_data.n = 'api';
                }
            }

            item.image = $selectedLogo.attr('urlimg');
        } else { // 选择的是色块文字
            item.customeStyle = {
                'colorBlock': $add_quick_dial.find('#color_font>li.selected').attr('class').replace(' selected', '')
            }
            ueip_data.n = 'colorBlock';
        }

        // 关闭窗口
        if ($this.text() === Language.getLang('Save')) {
            var isHot = $add_quick_dial.find('input[name="isHot"]').val();
            if (isHot != '' && isHot === 'true' && item.image && item.image !== '') {
                item.image = item.image.replace('/Re/', '/Sq/').replace('/big/', '/small/');
            }
            grid.updateGrid(item);
        } else {
            grid.addGrid(item);
        }

        setTimeout(function () {
            $add_quick_dial.find('.close').click();
            if (datacode) {
                datacode.statistic(ueip_data);
                // 统计自定义网址来源
                datacode.statistic({
                    n:  'inputURL',
                    data: ueip_data.data,
                    m: navigator.language.toLocaleLowerCase() === 'zh-cn' ? 'zhcustomeURLSource' : 'encustomeURLSource'
                });
            }
        }, 100);
    });

    $add_quick_dial.on('click', '.a-quick-dial-search-icon', function (e) {

        var search = $('#a_quick_dial_search_btn').val().replace(/\s+/g, "");

        var html = [];
        if (search.length === 0) {
            newWin.render(SITE_LIST[search.length]);
            return;
        }
        var result = {list: []};
        for (var i = 0; i < SITE_LIST.length; i++) {
            var list = SITE_LIST[i].list;

            for (var j = 0; j < list.length; j++) {

                var item = list[j];
                if (item.url.indexOf(search) !== -1 || item.title.indexOf(search) !== -1) {
                    result.list.push(item);
                    continue;
                }
            }
        }
        newWin.render(result);
        // 默认高亮第一个标签
        $add_quick_dial.find('.a-quick-dial-nav li').removeClass('current').eq(0).addClass('current');
    });

    $add_quick_dial.on('click', '.radio', function (e) {
        var $this = $(this);
        var val = $this.val();
        var $ul = $add_quick_dial.find('.a-quick-dial-custome-style ul').hide().eq(val).show();
        $ul.find('>li').each(function (i, n) {
            var $ele = $(n);
            if ($ele.hasClass('selected')) {
                $add_quick_dial.find('.a-quick-dial-custome-style')
                    .animate({ scrollLeft: i * 120 });
                return false;
            }
        });

        if(val === '1') {
            $add_quick_dial.find('#a_quick_dial_add_btn').removeClass('disable-add-btn');
        } else {
            var $screenHotLI = $add_quick_dial.find('#screen_shot li');
            if($screenHotLI.eq(0).hasClass('selected')) {
                if($screenHotLI.eq(0).find('>a').hasClass('loading')) {
                    $add_quick_dial.find('#a_quick_dial_add_btn').addClass('disable-add-btn');
                }
            } else {
                $add_quick_dial.find('#a_quick_dial_add_btn').removeClass('disable-add-btn');
            }
        }
    });

    $add_quick_dial.on('input', 'input[name="title"]', function (e) {
        var value = $(this).val().replace(/\s+/g, "");
        $add_quick_dial.find('#color_font>li>span').text(value === '' ? '色块文字' : value);
    });

    $add_quick_dial.on('blur', 'input[name="url"]', function (e) {
        var url = $(this).val().replace(/\s+/g, "");

        if (url.length === 0) {
            return;
        }

        url = url.notUrl() ? 'http://' + url : url;
        newWin.queryMatchURL(url.toLocaleLowerCase(), function (num) {
            
            var $screenHotLI = $add_quick_dial.find('#screen_shot li').removeClass('selected');
            if ($screenHotLI.length >= 2 && $screenHotLI.eq(1).hasClass('commend')) {
                $screenHotLI.eq(1).addClass('selected');
            } else {
                $screenHotLI.eq(0).addClass('selected');
            }

            num > 3 ? $add_quick_dial.find('#screen_shot').addClass('w900') : $add_quick_dial.find('#screen_shot').removeClass('w900');

            // 获取选中的自定义样式
            var selectStyle = $add_quick_dial.find('input:radio[name="style"]:checked').val();
            
            var image = $add_quick_dial.find('input[name="image"]').val();

            if(image && image.startWith('mx://thumbs')) { // 是截图默认选中第一个
                $screenHotLI.removeClass('selected').eq(0).addClass('selected');
            }

            if (selectStyle === '0' && $screenHotLI.eq(0).hasClass('selected') /*|| image === ''*/) {
                if ($screenHotLI.eq(0).find('>a').hasClass('loading')) {
                    $add_quick_dial.find('#a_quick_dial_add_btn').addClass('disable-add-btn');
                }
            }

            $add_quick_dial.find('#a_quick_dial_add_btn').removeClass('disable-add-btn');
            
            if (/\/big\//.test(image) || /\/small\//.test(image) ||
                /\/image\/logo\/Re\//.test(image) || /\/image\/logo\/Sq\//.test(image)) {

                if (mxApi.isSupportCaptrue()) {
                    $screenHotLI.eq(1).click();
                } else {
                    $screenHotLI.eq(0).click();
                }
                return false;
            }
            
            $screenHotLI.each(function (i, n) {
                var $ele = $(n);
                if ($ele.attr('urlimg') === image) {
                    $screenHotLI.removeClass('selected');
                    $ele.addClass('selected');
                    return false;
                }
            });
        });

        var colorBlock = $add_quick_dial.find('input[name="colorblock"]').val();
        var title = $add_quick_dial.find('input[name="title"]').val().replace(/\s+/g, "");
        $add_quick_dial.find('#color_font>li>span').text(title);
        var $colorFontLI = $add_quick_dial.find('#color_font li').removeClass('selected');
        if (colorBlock === '') {
            $colorFontLI.eq(0).addClass('selected');
            return;
        }

        $colorFontLI.each(function (i, n) {
            var $ele = $(n);
            if ($ele.hasClass(colorBlock)) {
                $colorFontLI.removeClass('selected');
                $ele.addClass('selected');
                return false;
            }
        });
    });

    $add_quick_dial.on('input', '#a_quick_dial_search_btn', function () {
        var thiz = this;
        if (thiz.searchTimer) {
            clearTimeout(thiz.searchTimer);
        }

        thiz.searchTimer = setTimeout(function () {
            $a_quick_dial_search_icon.click();
        }, 200);
        return false;
    });
}

/**
 * 根据URl匹配相关图片列表
 * @param  {[type]}   url      [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
newWin.queryMatchURL = function (url, callback) {

    var qUrl = url;
    if (/http:\/\/go.maxthon.cn\/redir\/mx(4|5)\/qa.htm?/.test(url)) {
        var qStr = url.getQueryString('f');
        switch (qStr) {
            case 'tmall':
                qUrl = 'http://jx.tmall.com/?ali_trackid=2:mm_12431063_2220385_66140205:1479719250_2k6_831389943';
                break;
            case 'jd':
                qUrl = 'http://re.jd.com/index/standard';
                break;
            case 'aitaobao':
                qUrl = 'http://ai.taobao.com/';
                break;
            case 'ctrip':
                qUrl = 'http://www.ctrip.com/';
                break;
           case 'taobao':
                qUrl = 'https://www.taobao.com/';
                break;
            case 'juhuasuan':
                qUrl = 'https://ju.taobao.com/';
                break;
            case 'amazon':
                qUrl = 'https://www.amazon.cn';
                break;
            case 'vipshop':
                qUrl = 'http://www.vip.com/';
                break;
            case 'hao123':
                qUrl = 'https://www.hao123.com/';
                break;
            case 'yhd':
                qUrl = 'http://www.yhd.com/';
                break;
            case 'jumei':
                qUrl = 'http://bj.jumei.com/';
                break;
            case 'suning':
                qUrl = 'http://www.suning.com/';
                break;
            case 'nuomi':
                qUrl = 'https://www.nuomi.com/';
                break;
            case 'gome':
                qUrl = 'http://www.gome.com.cn/';
                break;
            case 'vancl':
                qUrl = 'http://www.vancl.com/';
                break;
            case 'tuniu':
                qUrl = 'http://www.tuniu.com/';
                break;
            case 'jiayuan':
                qUrl = 'http://www.jiayuan.com/';
                break;
            case 'dangdang':
                qUrl = 'http://www.dangdang.com/';
                break;
            case 'mi':
                qUrl = 'http://www.mi.com/';
                break;
            case 'meituan':
                qUrl = 'http://bj.meituan.com/';
                break;
            case 'dianping':
                qUrl = 'http://www.dianping.com/';
                break;
        }
    }
    if (!mxApi.isSupportCaptrue()) {
        $screen_shot.empty();
    } else {
        // 截图loading ..... 
        $screen_shot.find('>li:eq(0)').find('>a').addClass('loading').removeAttr('style');
        $screen_shot.find(">li:gt(0)").remove();
        newWin.refreshThumb(url);
    }
    $screen_shot.removeClass('w900');
    var host = navigator.language.toLocaleLowerCase() === 'zh-cn' ? 'http://fastdail-img.maxthon.cn' : 'http://fastdail-img.maxthon.com';
    // send
    $.ajax({
        type: "get",
        async: true,
        url: host + '/fastimg/v1/res?host=' + encodeURIComponent(qUrl) + '&count=5',
        dataType: "jsonp",
        jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
        jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
        success: function (result) {
            if (result.status.code === 0) {
                var html = [];
                var length = result.data.length;

                for (var i = 0; i < length; i++) {
                    var _url = result.data[i].url;
                    _url = url === 'http://i.maxthon.com' ? _url.replace('/big/i_maxthon.png', '/big/i_maxthon_en.png') : _url;
                    html.push('<li urlimg="', _url, '" class="', (result.data[i].preset === true ? " commend" : ""), '">\
                        <ins>', Language.getLang('Recommend') , '</ins>\
                        <a href="javascript:void(0);" style="background-image: url(', _url, '); background-size: contain;">\
                        </a>\
                    </li>');
                }
                $screen_shot.append(html.join(''));
                var num = $screen_shot.find('>li').length;
                // 执行回调
                callback(num);
            } else {
                callback(0);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

/**
 * 获取截图URL
 * @param  {[type]} url     [description]
 * @param  {[type]} reflush [description]
 * @return {[type]}         [description]
 */
newWin.getThumbsUrl = function (url, reflush) {
    if (reflush == 0)
        return 'mx://thumbs/?reflush=' + (reflush) + '&stamp=' + (new Date().getTime()) + '&url=' + url;
    if (window.onLine == true) {
        return 'mx://thumbs/?reflush=' + (reflush) + '&stamp=' + (new Date().getTime()) + '&url=' + url;
    } else {
        return cdnServer + '/image/logo/Re/offline.png';
    }
}

/**
 * 判断是否存在截图 重新加载截图
 * @return {[type]} [description]
 */
newWin.refreshThumb = function (url) {
    var thiz = this;
    if (window.onLine == true) {
        mxApi.hasCapture(url, function (data) {
            if (data) {
                // 启用之前截图
                urlimg = thiz.getThumbsUrl(url, 0);
                // 主动截取标题
                mxApi.useApi('quickaccess.reflushThumb', { 'url': url, 'reflush': 0 });
                newWin.setScreenShot(urlimg);
            } else {
                // 主动重新截图
                mxApi.useApi('quickaccess.reflushThumb', { 'url': url, 'reflush': 1 });
            }
        });
    } else {
        newWin.setScreenShot(thiz.getThumbsUrl(url, 0));
    }
}

/**
 * 渲染截图占位符
 * @param {[type]} urlimg [description]
 */
newWin.setScreenShot = function (thumbUrl) {

    var $screen_shot_li = $screen_shot.find('>li:eq(0)').attr('urlimg', thumbUrl);
    if (window.onLine !== true) {
        thumbUrl = cdnServer + '/image/logo/Re/offline.png';
    }

    $screen_shot_li.find('>a')
        .css({
            'background-size': 'contain',
            'text-indent': '-999px',
            'background-image': 'url(' + thumbUrl + ')',
            'background-position': 'center center'
        }).removeClass('loading');

    if ($screen_shot_li.hasClass('selected')) {
        $('#a_quick_dial_add_btn').removeClass('disable-add-btn');
    }
}

/**
 * 打开新弹窗
 * @param data 数据
 * @param openInDialog 弹出框中打开
 * @return {[type]} [description]
 */
newWin.open = function (data, openInDialog) {
    var selectIndex = data ? 1 : 0,
        btnText = data ? Language.getLang('Save') : Language.getLang('CustomAdd');
    
    $add_quick_dial.find('.a-quick-dial-tab>li').eq(selectIndex).click();
    $add_quick_dial.find('#a_quick_dial_add_btn').text(btnText);
    
    data = data || {};
    $add_quick_dial.find('input[name="url"]').val(data.url || '');
    $add_quick_dial.find('input[name="title"]').val(data.title || '').attr('default', data.title || '');
    $add_quick_dial.find('input[name="image"]').val(data.image || '');
    $add_quick_dial.find('input[name="colorblock"]').val(data.colorBlock || '');
    $add_quick_dial.find('input[name="isHot"]').val(data.isHot || '');
    $add_quick_dial.find('#color_font>li>span').text(data.title || '');

    if (selectIndex === 1) { // 编辑状态
        $add_quick_dial.find('input[name="url"]').trigger('blur');
        // 调用图库接口
        if (data.colorBlock && data.colorBlock !== '') {
            $add_quick_dial.find('.radio').eq(1).trigger('click');
        } else {
            $add_quick_dial.find('.radio').eq(0).trigger('click');
        }
    }

    $add_quick_dial.find('.error').hide();
    $add_quick_dial.find('#a_quick_dial_search_btn').val('');
    // 默认显示热门标签
    $add_quick_dial.find('.a-quick-dial-nav li').eq(0).click();
    var add_quick_dial = $add_quick_dial.dialog({
        close: function () {
            return false;
        },
        after: function () {
            $add_quick_dial.one('click', '.close', function () {
                
                // 取消选中状态
                var $currentGrid = grid.currentGrid();
                $currentGrid.removeClass('selected');
                // 重置自定义弹窗
                $screen_shot.empty();
                if (mxApi.isSupportCaptrue()) {
                    $screen_shot.append('\
                    <li class="selected">\
                        <a href="javascript:void(0);">' + Language.getLang('WebShot') + '</a>\
                    </li>');
                }

                $add_quick_dial.find('#a_quick_dial_add_btn').removeClass('disable');
                $add_quick_dial.find('.a-quick-dial-custome-style').scrollLeft(0);
                $add_quick_dial.find('#color_font>li').removeClass('selected').eq(0).addClass('selected');
                $add_quick_dial.find('#color_font>li>span').html(Language.getLang('Words'));
                $add_quick_dial.find('#screen_shot').removeClass('w900');
                $add_quick_dial.find('input[name="url"]').val('');
                $add_quick_dial.find('input[name="image"]').val('');
                $add_quick_dial.find('input[name="colorblock"]').val('');
                $add_quick_dial.find('input[name="isHot"]').val('');
                $add_quick_dial.find('.radio').eq(0).trigger('click');
                // 打开文件夹弹框
                if (openInDialog === true) {
                    $add_quick_dial.hide();
                    $folder_quick_dial.show();
                    $mx_mask_layer.off('click').on('click', function (e) {
                        folder.dialog.close();
                    }).show();
                    return false;
                }
                add_quick_dial.close();
            });
        }
    });
}

/**
 * 渲染节点
 * @type {[type]}
 */
newWin.render = function (list) {
    var _html = '\
        <% for(var i=0;i<this.list.length; i++) {%>\
        <li>\
            <a href="<%=this.list[i].url %>" title="<%=this.list[i].title %>" target="_blank">\
                <img class="a-quick-dial-img" src="<%=this.imageFilter(this.list[i].image) %>" width="150" height="100"/>\
                <div class="my-site-title">\
                    <p class="my-site-title-text"><span><%=this.list[i].title %></span></p>\
                </div>\
            </a>\
        </li>\
        <% } %>\
        ';
    $add_quick_dial.find('.a-quick-dial-img-list').empty().append(template(_html, list));
}
/**
 * 数据统计
 * @author guotingjie@maxthon.net
 * @ctime 2016-7-8
 */
// var ssid = cookie.get('SSID');
// if (!ssid) {
//     ssid = guid();
//     cookie.set('SSID', ssid);
// }
var datacode = {};

datacode.statistic = function (data) {
    var thiz = this;
    if (!data || !data.m) {
        return;
    }
    var config = {
        // 产品标识
        pt: 'mx5Newtab',
        // 层级
        m: data.m,
        n: data.n,
        o: data.o,
        p: data.p,
        // 数据
        data: {
            ref: document.referrer,
            c: getQueryString('c')
        },
        // 访问页面的浏览器(unused)
        br: ''
    }

    if (data.u) {
        config.dt = 'content';
        config.data.url = data.u;
        config.data.title = data.t || data.n;
    } else {
        config.dt = 'ui';
    }

    $.extend(config.data, data.data);
    mxApi.useApi('setUeip2', config, function() {});
}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function guid() {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
/**
 *  页面初始化
 *  @author  guotingjie@maxthon.net
 */
$(function () {

    var $quick_dial_tabpanels = $('#quick_dial_tabpanels'),
        $document = $(document);

    $quick_dial_tabpanels.on('click', '.quick-dial-nav-tab > li', function () {
        var $this = $(this);

        if ($this.hasClass('active')) return;

        $this.siblings('li').removeClass('active');
        $this.addClass('active');

        var _index = $this.index();
        $quick_dial_tabpanels.find('.quick-dial-nav-body > div').hide().eq(_index).show();
    });

    mxApi.getUserAndMacAdress(function (result) {
        if (result.macAddress) {
            macAddress = result.macAddress;
        }
        if (result.uid) {
            uid = result.uid;
        }
    });

    grid.init();

    folder.init();
    // 切换背景
    switchSkin.init();

    newWin.init();

    // 屏蔽页面右键
    $document.on('contextmenu', function (e) {

        if (!$(e.target).is('input')) {
            e.preventDefault();
        }
    });

    window.replaceErrorIcon = function (ele) {
        var _src = ele.src;

        if (!_src.endWith('.webp')) {
            ele.src = _src + '.webp';
        } else {
            ele.src = cdnServer + '/image/logo/Re/offline.png';
        }
        ele.onerror = null;
    }

    // 配置全局一个离线状态
    window.onLine = navigator.onLine;
    window.addEventListener("offline", function (e) {
        this.onLine = false;
    });
    window.addEventListener("online", function (e) {
        this.onLine = true;
    });

    // 取消拖拽
    $document.on('dragstart', function (e) {
        e.preventDefault();
        return false;
    });

    $quickdial.on('click', '.dragable>li:not(".folder,.empty,.add,.loading")', function (e) {
        var $this = $(this),
            $link = $this.find('>a'),
            href = $link.attr('href');

        var ueip_data = {
            m: 'myfavoritesClick',
            data: { 'title': $link.attr('title'), 'url': href }
        };

        ueip_data.n = 'leftClick';
        datacode && datacode.statistic(ueip_data);
        if (mxApi.getVersion().cmpVersions('5.0.1.1600') >= 0) {
            mxApi.useApi('newTabUpground', { 'url': href });
            return false;
        }

        return true;
    });

    // 推荐站点 数据统计
    if (document.getElementById('quick_dial_hot_site')) {

        $('#quick_dial_hot_site').on('click', 'a', function (event) {
            var $this = $(event.target);

            if (datacode) {
                var ueip_data = {
                    m: 'recommendedsites',
                    data: { 'title': $this.attr('title'), 'url': $this.attr('href') }
                };
                if ($this.parents('ol')[0]) {
                    ueip_data.n = 'top';
                } else {
                    switch ($this.parents('.container').index()) {
                        case 0:
                            ueip_data.n = 'news';
                            break;
                        case 1:
                            ueip_data.n = 'shopping';
                            break;
                        case 2:
                            ueip_data.n = 'funny';
                            break;
                        case 3:
                            ueip_data.n = 'content';
                            break;
                        case 4:
                            ueip_data.n = 'social';
                            break;
                        case 5:
                            ueip_data.n = 'service';
                            break;
                        case 6:
                            ueip_data.n = 'game';
                            break;
                        case 7:
                            ueip_data.n = 'reading';
                            break;
                        case 8:
                            ueip_data.n = 'others';
                            break;
                    }
                }
                datacode.statistic(ueip_data);
            }
            return true;
        });
    }
});