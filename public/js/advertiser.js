(function(c,h){var k=function(){function e(){this.url=c.location.href}e.prototype={get:function(a){var b=this.url;a=a.replace(/[\[\]]/g,"\\$&");return(a=(new RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)")).exec(b))?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null},serialize:function(a){var b=[],d;for(d in a)a.hasOwnProperty(d)&&b.push(encodeURIComponent(d)+"="+encodeURIComponent(a[d]));return b.join("&")},urlParser:function(a){var b={};if(!a)return b;var d=h.createElement("a");d.href=a;"protocol hostname port pathname search hash host".split(" ").forEach(function(a){b[a]=
d[a]});return b}};return new e}(),l=function(e){function a(){this.prefix="__vnative";this.random=(1E32*c.Math.random()).toString(36)}a.prototype={set:function(b,a,g,f){b=this.prefix+b;var c=new Date;g||(g=365);c.setTime(c.getTime()+864E5*g);g="expires="+c.toUTCString();b=b+"="+a+"; "+g+"; ";e.cookie=f?b+(" path="+f+";"):b+" path=/;"},get:function(a){a=this.prefix+a;a+="=";for(var d=e.cookie.split(";"),c=0;c<d.length;c++){for(var f=d[c];" "==f.charAt(0);)f=f.substring(1);if(0==f.indexOf(a))return f.substring(a.length,
f.length)}return""},erase:function(a){a=this.prefix+a;e.cookie=a+'=; expires=Thu, 01 Jan 1970 00:00:00 UTC";'}};return new a}(c.document);(function(){function e(){this.domain="app.vnative.com";this.ckid=null}e.prototype={_init:function(){var a=k.get("utm_content");a&&l.set("tck",a,1);this.ckid=l.get("tck")},send:function(){this._init();if(!this.ckid)return!1;var a={ckid:this.ckid,link:btoa("http://"+c.location.hostname+c.location.pathname),ref:h.referrer};(new Image).src="//"+this.domain+"/api/bounceRate?"+
k.serialize(a)}};return new e})().send()})(window,document);