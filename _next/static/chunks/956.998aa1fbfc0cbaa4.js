"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[956],{4612:function(e,t,i){i.d(t,{Z:function(){return PrismicImage}});var a=i(5893),n=i(8527),r=i(7178),s=i(9755),l=i.n(s);function staticImageLoader(e){let{src:t,width:i,quality:a}=e,n=new URL(t);n.searchParams.set("src",t),n.searchParams.set("width",i),n.searchParams.set("quality",a),n.searchParams.set("fit","max");let r="/images/static/w".concat(i,"_q").concat(a).concat(n.pathname),s=new URL("/api/static-image-loader","http://localhost:3000");return s.searchParams.set("url",n.toString()),s.searchParams.set("path",r),r}var c=(0,r.Gp)(function(e,t){let{src:i,alt:r,layout:s="intrinsic",sizes:c,unoptimized:o,priority:d,loading:u,className:h,quality:m=100,width:x,height:g,objectFit:f="cover",objectPosition:j,loader:p=staticImageLoader,placeholder:v,blurDataURL:w,imageRef:b,withBackground:P,withBorderRadius:Z,...z}=e;return c=null,void 0===o&&i.endsWith(".svg"),(0,a.jsx)(n.xu,{ref:t,bg:P?"light-grey-05":null,borderRadius:Z?"md":null,overflow:"hidden",sx:{">*":{d:"block !important"}},maxW:"intrinsic"===s?x:null,...z,children:(0,a.jsx)(l(),{ref:b,src:i,alt:r,layout:s,sizes:c,unoptimized:o,priority:d,loading:u,className:h,quality:m,width:x,height:g,objectFit:f,objectPosition:j,loader:p,placeholder:v,blurDataURL:w})})}),o=i(7412);function PrismicImage(e){let{image:t,...i}=e;if(!(0,o.wX)(t))return null;let{url:n,dimensions:r,alt:s}=t,{layout:l}=i;"fill"!==l&&(i.width=r.width,i.height=r.height);let d=n.endsWith(".svg");return(0,a.jsx)(c,{src:n,alt:s,placeholder:d?void 0:"blur",blurDataURL:d?void 0:"".concat(n,"&w=32&blur=20"),...i})}},7755:function(e,t,i){i.r(t),i.d(t,{default:function(){return Testimonial}});var a=i(5893),n=i(4216),r=i(1912),s=i(3541),l=i(4612),c=i(8529),o=i(7806),d=i(7412),u=i(5728),h=i(949),m=i(8527);function Testimonial(e){let{slice:t}=e,{primary:i}=t,{logo:x,text:g,credit:f}=i,j=(0,d.wX)(x),p=(0,d.BD)(g),v=(0,d.BD)(f);return j||p||v?(0,a.jsx)(h.t7,{children:(0,a.jsx)(m.W2,{size:"xl",variant:"banner",children:(0,a.jsx)(m.W2,{size:"inner",children:(0,a.jsx)(n.Z,{size:"common",children:(0,a.jsx)(r.Z,{size:"common",gridColumn:{md:"2/8",xl:"3/11"},textAlign:"center",children:(0,a.jsxs)(n.Z,{children:[j&&(0,a.jsx)(m.xu,{maxW:(0,u.Q1)(160),mx:"auto",children:(0,a.jsx)(l.Z,{image:x})}),p&&(0,a.jsx)(s.Z,{as:"div",size:"h4",variant:"emphasised",children:(0,a.jsx)(c.Z,{text:g,underlineLinks:!0})}),v&&(0,a.jsx)(o.Z,{as:"div",size:"p5",variant:"tag",children:(0,a.jsx)(c.Z,{text:f,underlineLinks:!0})})]})})})})})}):null}}}]);