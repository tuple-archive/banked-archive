"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[943],{9943:function(t,e,n){n.r(e);var o=n(7294);function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var r=function(t){function Gist(){return t.apply(this,arguments)||this}Gist.prototype=Object.create(t.prototype),Gist.prototype.constructor=Gist,_setPrototypeOf(Gist,t);var e=Gist.prototype;return e.componentDidMount=function(){this._updateIframeContent()},e.componentDidUpdate=function(t,e){this._updateIframeContent()},e._defineUrl=function(){var t=this.props,e=t.id,n=t.file;return"https://gist.github.com/"+e+".js"+(n?"?file="+n:"")},e._updateIframeContent=function(){var t=this.props,e=t.id,n=t.file,o=this.iframeNode,r=o.document;o.contentDocument?r=o.contentDocument:o.contentWindow&&(r=o.contentWindow.document);var i=this._defineUrl();r.open(),r.writeln('<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body onload="parent.document.getElementById(\''+(n?"gist-"+e+"-"+n:"gist-"+e)+'\').style.height=document.body.scrollHeight + \'px\'"><script type="text/javascript" src="'+i+'"></script></body></html>'),r.close()},e.render=function(){var t=this,e=this.props,n=e.id,r=e.file;return o.createElement("iframe",{ref:function(e){t.iframeNode=e},width:"100%",frameBorder:0,id:r?"gist-"+n+"-"+r:"gist-"+n})},Gist}(o.PureComponent);e.default=r}}]);