(function(){function q(){var l="function"===typeof window.$&&window.$.fn&&window.$.fn.jquery===jQuery.fn.jquery?window.$:window.jQuery;(function(m,h){function l(){this.domain="serve.vnative.com";this.dm=this.adunit=null;this.text={}}l.prototype={get:function(b){var g=this;h.ajax({url:"//"+
	g.domain+"/?callback=?&uid=57c6c75934243d930c8b4581",type:"GET",async:!0,jsonpCallback:"jsonCallback",contentType:"application/json",dataType:"jsonp"}).done(function(c){if(!c._id)return b.call(g,!0,{});b.call(g,null,c)}).fail(function(c){b.call(g,c,null)})},modifyText:function(b){var g=this;if(3==b.nodeType){var c=h(b).text(),c=c.replace(/\s/g,"");0!=c.length&&(c.match(/readmore|ContinueReading/i)instanceof Array?b.nodeValue="Read More":11>=c.length?b.nodeValue="":g.text[c.length]=b)}else 1==b.nodeType&&h(b).contents().each(function(){g.modifyText(this)})},replace:function(b,g){var c=this.text,a=Object.keys(c),a=a.map(function(a){return Number(a)});a.sort(function(a,r){return a-r});2<=a.length&&(c[a.pop()].nodeValue=g);c[a.pop()].nodeValue=b}};var n=function(b,g){function c(){this.regions=[]}c.prototype={treeDepth:function(a){a=a.children();for(var k=0;0<a.length;)a=a.children(),k+=1;return k},_nodeIdentifier:function(a){var k="",k=k+a.prop("tagName");a.attr("id")&&(k+="#"+a.attr("id").replace(/[0-9]+/g,""));a.attr("class")&&(a=a.attr("class").split(/\s+/),3>=a.length&&(a.sort(),g.each(a,function(a,f){f=f.replace(/[0-9]+/g,"");k+="."+f})));return k},_combComparison:function(a){for(var k={},c={},f=0,b=a.length;f<b;++f){var h=g(a[f]),e=h.prop("tagName");if("SCRIPT"!=e&&"NAV"!=e&&"A"!=e){var d=this._nodeIdentifier(h);"undefined"===typeof k[d]&&(k[d]=0);k[d]++;c[d]=f}}f=!1;for(d in k)2<k[d]&&(f=!0,b=g(a[c[d]]),this.regions.push(b));return f},mdr:function(a){if(3<=this.treeDepth(a)){a=a.children();this._combComparison(a);for(var k=0,c=a.length;k<c;++k){var f=g(a[k]),b=f.prop("tagName");"SCRIPT"!=b&&"NAV"!=b&&"A"!=b&&this.mdr(f)}}}};return new c}(m,h),e=m.vNativeObject||"vnative",d=new l;d.dm=n;m[e]=d})(window,jQuery);l(document).ready(function(){for(var m=function(a){a=Object.keys(a);a=a.map(function(a){return Number(a)});a.sort(function(a,f){return a-f});return a},h=l("body").children(),p=window[window.vNativeObject||"vnative"],n=p.dm,e={},d=0,b=h.length;d<b;++d){var g=l(h[d]),c=g.prop("tagName");if("DIV"==c||"SECTION"==c||"ARTICLE"==c||"MAIN"==c)c=n.treeDepth(g),Array.isArray(e[c])||(e[c]=[]),e[c].push(g)}h=m(e);h=function(a,b){var f,c=[];for(f=b.pop();a[f]&&0<a[f].length;)c.push(a[f].pop());for(f=b.pop();a[f]&&0<a[f].length;)c.push(a[f].pop());return c}(e,h);d=0;for(b=h.length;d<b;++d)n.mdr(h[d]);var a={};l.each(n.regions,function(c,b){var f=b.parent().children().length,d=b.prop("tagName");"SCRIPT"!=d&&"NAV"!=d&&"A"!=d&&"META"!=d&&(a[f]=b)});h=m(a);n={};d=0;for(e=b=-1;d<h.length;)e=h[d],b=a[e].find("a").text().length,d++,0!==a[e].find("img").length&&(n[b]=a[e]);m=m(n);b=n[m.pop()];e=n[m.pop()];g=b.has(e).length?e:b;p.get(function(a,b){var c,d;if(!a){c=g.parent().children();var e=g.clone();e.attr("id","vNative-"+Math.floor(10*Math.random()));e.insertAfter(l(c[1]));c=e.find("a");"undefined"!==typeof c&&c.attr("href",b._url);this.modifyText(e[0]);this.replace(b._title,b._description);if(d=e.find("img"))d.each(function(){l.each(this.attributes,function(){this.specified&&this.value.match(/^http:\/\//i)&&(this.value=b._image)})}),d.attr("src",b._image),d.attr("srcset","");b._video&&1<=b._video.length&&d&&l.getScript("http://"+p.domain+"/js/player.js",function(){window.hPlayer.create(d,{_video:b._video,_image:b._image}).init()});
e.css({"border-color":"#C1E0FF","border-width":"10px","border-style":"solid"});c=l("<div><small>Sponsored by vNative</small></div>");var h=l(e.children()[0]);c.insertBefore(h.children()[0]).css({"z-index":"100","text-align":"center"});e[0].scrollIntoView()}})})}if(window.jQuery&&window.jQuery.fn)q();else{window.jQuery=null;var p=document.createElement("script");p.setAttribute("type","text/javascript");p.setAttribute("src","//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js");p.readyState?
p.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||q()}:p.onload=q;(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(p)}})();