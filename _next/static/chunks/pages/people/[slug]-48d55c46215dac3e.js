(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[854],{1445:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people/[slug]",function(){return n(1334)}])},1342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let r=n(8754),l=(n(7294),r._(n(4304)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){let n=l.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e}),r={...r,...t};let i=r.loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?n({...r,loader:()=>null!=i?i().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete r.webpack,delete r.modules,noSSR(n,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return i}});let r=n(8754),l=r._(n(7294)),i=l.default.createContext(null)},4304:function(e,t,n){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(8754),l=r._(n(7294)),i=n(43),a=[],s=[],o=!1;function load(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function init(){if(!r){let t=new LoadableSubscription(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!o){let e=n.webpack?n.webpack():n.modules;e&&s.push(t=>{for(let n of e)if(t.includes(n))return init()})}function LoadableComponent(e,t){!function(){init();let e=l.default.useContext(i.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let a=l.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),l.default.useMemo(()=>{var t;return a.loading||a.error?l.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?l.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",l.default.forwardRef(LoadableComponent)}(load,e)}function flushInitializers(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=()=>new Promise((e,t)=>{flushInitializers(a).then(e,t)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let res=()=>(o=!0,t());flushInitializers(s,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let u=Loadable},1283:function(e,t,n){"use strict";n.d(t,{Z:function(){return ActionButtonLink}});var r=n(5893),l=n(5051),i=n(5054);function ActionButtonLink(e){let{link:t,children:n,...a}=e;return(0,r.jsx)(i.Z,{link:t,children:(0,r.jsx)(l.Z,{...a,children:n})})}},1975:function(e,t,n){"use strict";n.d(t,{Z:function(){return ActionGroup}});var r=n(5893),l=n(1283),i=n(7412),a=n(8527);function ActionGroup(e){let{items:t,sx:n,...s}=e;return(null==t?void 0:t.length)&&(null==(t=t.filter(i.bK))?void 0:t.length)?(0,r.jsx)(a.kC,{flexWrap:"wrap",sx:{m:-2,...n},...s,children:t.map((e,t)=>{let{action_text:n,action_link:i}=e;return(0,r.jsx)(a.xu,{sx:{w:{base:"100%",sm:"auto"},p:2},children:(0,r.jsx)(l.Z,{link:i,sx:{w:"100%"},children:n})},t)})}):null}},8927:function(e,t,n){"use strict";var r=n(5893),l=n(4612),i=n(7806),a=n(5728),s=n(949),o=n(8527),u=n(7294);let d=(0,a.Q1)(40),c=(0,u.forwardRef)(function(e,t){let{as:n,doc:a,sx:u,...c}=e,f=(0,s.ff)("light-grey-10","black-85"),h=null==a?void 0:a.data,p=null==h?void 0:h.full_name,m=null==h?void 0:h.role,_=null==h?void 0:h.image;return p?(0,r.jsxs)(o.xu,{ref:t,as:n,role:"a"===n?"group":null,sx:{display:"inline-flex",alignItems:"center",...u},...c,children:[(0,r.jsx)(o.xu,{width:d,height:d,mr:6,bg:_?null:f,borderRadius:"full",position:"relative",overflow:"hidden",children:(0,r.jsx)(l.Z,{image:_,layout:"fill"})}),(0,r.jsxs)(o.xu,{children:[(0,r.jsx)(i.Z,{size:"p3",variant:"emphasised",children:p}),(0,r.jsx)(i.Z,{size:"p3",children:m})]})]}):null});t.Z=c},4612:function(e,t,n){"use strict";n.d(t,{Z:function(){return PrismicImage}});var r=n(5893),l=n(8527),i=n(7178),a=n(9755),s=n.n(a);function staticImageLoader(e){let{src:t,width:n,quality:r}=e,l=new URL(t);l.searchParams.set("src",t),l.searchParams.set("width",n),l.searchParams.set("quality",r),l.searchParams.set("fit","max");let i="/images/static/w".concat(n,"_q").concat(r).concat(l.pathname),a=new URL("/api/static-image-loader","http://localhost:3000");return a.searchParams.set("url",l.toString()),a.searchParams.set("path",i),i}var o=(0,i.Gp)(function(e,t){let{src:n,alt:i,layout:a="intrinsic",sizes:o,unoptimized:u,priority:d,loading:c,className:f,quality:h=100,width:p,height:m,objectFit:_="cover",objectPosition:b,loader:g=staticImageLoader,placeholder:x,blurDataURL:v,imageRef:y,withBackground:j,withBorderRadius:w,...P}=e;return o=null,void 0===u&&n.endsWith(".svg"),(0,r.jsx)(l.xu,{ref:t,bg:j?"light-grey-05":null,borderRadius:w?"md":null,overflow:"hidden",sx:{">*":{d:"block !important"}},maxW:"intrinsic"===a?p:null,...P,children:(0,r.jsx)(s(),{ref:y,src:n,alt:i,layout:a,sizes:o,unoptimized:u,priority:d,loading:c,className:f,quality:h,width:p,height:m,objectFit:_,objectPosition:b,loader:g,placeholder:x,blurDataURL:v})})}),u=n(7412);function PrismicImage(e){let{image:t,...n}=e;if(!(0,u.wX)(t))return null;let{url:l,dimensions:i,alt:a}=t,{layout:s}=n;"fill"!==s&&(n.width=i.width,n.height=i.height);let d=l.endsWith(".svg");return(0,r.jsx)(o,{src:l,alt:a,placeholder:d?void 0:"blur",blurDataURL:d?void 0:"".concat(l,"&w=32&blur=20"),...n})}},3283:function(e,t,n){"use strict";n.d(t,{Z:function(){return SliceActions}});var r=n(5893),l=n(1283),i=n(1975),a=n(7412),s=n(8527);function SliceActions(e){let{primary:t,items:n,linkProps:o,...u}=e;if(t&&(0,a.bK)(t)){let{action_link:e,action_text:n}=t;return(0,r.jsx)(s.xu,{...u,children:(0,r.jsx)(l.Z,{link:e,...o,children:n})})}return(0,r.jsx)(i.Z,{items:n,...u})}},236:function(e,t,n){"use strict";n.d(t,{Z:function(){return Tag_Tag}});var r=n(5893),l=n(894),i=n(7178),a=n(1019),s=n(7294);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=(0,i.Gp)(function(e,t){var n=(0,i.jC)("Tag",e),r=(0,i.Lr)(e),l=_extends({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},n.container);return s.createElement(i.Fo,{value:n},s.createElement(i.m$.span,_extends({ref:t},r,{__css:l})))});a.__DEV__&&(o.displayName="Tag");var u=(0,i.Gp)(function(e,t){var n=(0,i.yK)();return s.createElement(i.m$.span,_extends({ref:t,isTruncated:!0},e,{__css:n.label}))});a.__DEV__&&(u.displayName="TagLabel");var d=(0,i.Gp)(function(e,t){return s.createElement(l.JO,_extends({ref:t,verticalAlign:"top",marginEnd:"0.5rem"},e))});a.__DEV__&&(d.displayName="TagLeftIcon");var c=(0,i.Gp)(function(e,t){return s.createElement(l.JO,_extends({ref:t,verticalAlign:"top",marginStart:"0.5rem"},e))});a.__DEV__&&(c.displayName="TagRightIcon"),a.__DEV__,a.__DEV__;var f=n(1664),h=n.n(f);function Tag_Tag(e){let{href:t,...n}=e;return t?(0,r.jsx)(h(),{href:t,passHref:!0,legacyBehavior:!0,children:(0,r.jsx)(o,{as:"a",...n})}):(0,r.jsx)(o,{...n})}},4055:function(e,t){"use strict";t.Z={pageRevalidate:!1,postDateFormat:"DD MMM YYYY"}},1334:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return PersonPage}});var r=n(5893),l=n(4216),i=n(5054),a=n(236),s=n(4055),o=n(7412),u=n(949),d=n(8527),c=n(5152),f=n.n(c);let h=f()(()=>Promise.all([n.e(885),n.e(803)]).then(n.t.bind(n,4803,23)),{loadableGenerated:{webpack:()=>[4803]}});function ArticleGroupList(e){let{heading:t,items:n,...c}=e,f=(0,u.ff)("light-grey-10","black-85"),p=(0,u.ff)("mid-grey-50","mid-grey-50");return(null==n?void 0:n.length)&&0!==(n=n.filter(o.GP)).length?(0,r.jsxs)(d.xu,{...c,children:[t&&(0,r.jsx)(d.xv,{size:"tag",pb:5,fontSize:"xs",children:t}),n.map((e,t)=>{let n=(0,o.LE)(e);return(0,r.jsx)(i.Z,{link:e,children:(0,r.jsxs)(l.Z,{title:e.data.title,gridTemplateAreas:{base:'"a" "b" "c"',sm:'"a a a" "b b c"',lg:'"a a a a b b c"'},gridAutoColumns:"1fr",gridRowGap:2,sx:{py:5,alignItems:"center",borderTopWidth:1,transitionProperty:"common",transitionDuration:"normal",borderColor:f,_hover:{borderColor:p}},children:[(0,r.jsx)(d.X6,{size:"h5",variant:"emphasised",noOfLines:{base:3,md:2,lg:1},sx:{gridArea:"a"},children:e.data.title}),(0,r.jsx)(d.kC,{sx:{gridArea:"b",justifyContent:{lg:"flex-end"}},children:(0,r.jsx)(d.Ug,{spacing:2,children:e.tags.slice(0,2).map((e,t)=>(0,r.jsx)(a.Z,{children:e},t))})}),(0,r.jsx)(d.xu,{sx:{gridArea:"c",textAlign:{sm:"right"}},children:n&&(0,r.jsx)(d.xv,{size:"p2",children:(0,r.jsx)(h,{date:n,format:s.Z.postDateFormat})})})]})},t)})]}):null}var p=n(8927),m=n(8529),_=n(3283),b=n(8627),g=!0;function PersonPage(e){var t;let{person:n,articles:i}=e,a=null==n?void 0:n.data,s=null==a?void 0:a.biography,u=(0,o.BD)(s),c=(null!==(t=null==a?void 0:a.actions)&&void 0!==t?t:[]).filter(o.bK),f=c.length>0;return(0,r.jsx)(d.W2,{size:"inner",sx:{...b.oe.sm,pb:0},children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(p.Z,{doc:n}),(0,r.jsx)(d.iz,{}),(0,r.jsxs)(l.Z,{gap:"xl",children:[(u||f)&&(0,r.jsxs)(l.Z,{columns:"common",children:[u&&(0,r.jsx)(d.X6,{as:"div",size:"h6",variant:"emphasised",gridColumn:{base:"span 4",md:"span 5"},children:(0,r.jsx)(m.Z,{text:s,underlineLinks:!0})}),(0,r.jsx)(_.Z,{items:c,justifyContent:{xl:"flex-end"},sx:{gridColumn:{base:"span 4",md:"span 8",xl:"span 7"}},linkProps:{width:{base:"100%",md:"auto"}}})]}),(0,r.jsx)(ArticleGroupList,{heading:"Articles by ".concat(null==a?void 0:a.full_name,"."),items:null==i?void 0:i.results})]})]})})}},5152:function(e,t,n){e.exports=n(1342)}},function(e){e.O(0,[755,774,888,179],function(){return e(e.s=1445)}),_N_E=e.O()}]);