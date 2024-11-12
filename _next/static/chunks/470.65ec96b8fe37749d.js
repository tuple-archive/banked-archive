"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[470],{1283:function(t,e,r){r.d(e,{Z:function(){return ActionButtonLink}});var n=r(5893),i=r(5051),a=r(5054);function ActionButtonLink(t){let{link:e,children:r,...l}=t;return(0,n.jsx)(a.Z,{link:e,children:(0,n.jsx)(i.Z,{...l,children:r})})}},3645:function(t,e,r){r.d(e,{Z:function(){return LogoBox}});var n=r(5893),i=r(8527);function LogoBox(t){let{children:e,...r}=t;return(0,n.jsx)(i.xu,{borderWidth:1,borderColor:"light-grey-10",borderRadius:"md",...r,children:(0,n.jsx)(i.oM,{ratio:176/112,children:e})})}},4612:function(t,e,r){r.d(e,{Z:function(){return PrismicImage}});var n=r(5893),i=r(8527),a=r(7178),l=r(9755),s=r.n(l);function staticImageLoader(t){let{src:e,width:r,quality:n}=t,i=new URL(e);i.searchParams.set("src",e),i.searchParams.set("width",r),i.searchParams.set("quality",n),i.searchParams.set("fit","max");let a="/images/static/w".concat(r,"_q").concat(n).concat(i.pathname),l=new URL("/api/static-image-loader","http://localhost:3000");return l.searchParams.set("url",i.toString()),l.searchParams.set("path",a),a}var c=(0,a.Gp)(function(t,e){let{src:r,alt:a,layout:l="intrinsic",sizes:c,unoptimized:o,priority:u,loading:d,className:h,quality:f=100,width:m,height:x,objectFit:g="cover",objectPosition:j,loader:p=staticImageLoader,placeholder:v,blurDataURL:Z,imageRef:b,withBackground:L,withBorderRadius:k,...w}=t;return c=null,void 0===o&&r.endsWith(".svg"),(0,n.jsx)(i.xu,{ref:e,bg:L?"light-grey-05":null,borderRadius:k?"md":null,overflow:"hidden",sx:{">*":{d:"block !important"}},maxW:"intrinsic"===l?m:null,...w,children:(0,n.jsx)(s(),{ref:b,src:r,alt:a,layout:l,sizes:c,unoptimized:o,priority:u,loading:d,className:h,quality:f,width:m,height:x,objectFit:g,objectPosition:j,loader:p,placeholder:v,blurDataURL:Z})})}),o=r(7412);function PrismicImage(t){let{image:e,...r}=t;if(!(0,o.wX)(e))return null;let{url:i,dimensions:a,alt:l}=e,{layout:s}=r;"fill"!==s&&(r.width=a.width,r.height=a.height);let u=i.endsWith(".svg");return(0,n.jsx)(c,{src:i,alt:l,placeholder:u?void 0:"blur",blurDataURL:u?void 0:"".concat(i,"&w=32&blur=20"),...r})}},5726:function(t,e,r){r.d(e,{Z:function(){return SliceIntro}});var n=r(5893),i=r(3541),a=r(8529),l=r(7412);function SliceIntro(t){let{heading:e,text:r}=t,s=(0,l.BD)(r);return e||s?(0,n.jsxs)(n.Fragment,{children:[e&&(0,n.jsx)(i.Z,{size:"h4",variant:"emphasised",children:e}),s&&(0,n.jsx)(a.Z,{text:r,underlineLinks:!0})]}):null}},470:function(t,e,r){r.r(e),r.d(e,{default:function(){return LogoCanvasStacked}});var n=r(5893),i=r(1283),a=r(4216),l=r(1912),s=r(3645),c=r(4612),o=r(5726),u=r(7412),d=r(8527);function LogoCanvasStacked(t){let{primary:e,items:r}=t,{heading:h,text:f,action_text:m,action_link:x}=e,g=(0,u.bK)({action_text:m,action_link:x});return(0,n.jsx)(d.W2,{size:"inner",children:(0,n.jsxs)(a.Z,{variant:"lg",children:[(0,n.jsx)(l.Z,{children:(0,n.jsx)(o.Z,{heading:h,text:f})}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(a.Z,{gridTemplateColumns:{base:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(6, 1fr)"},children:r.map((t,e)=>{let{image:r}=t;return(0,n.jsx)(s.Z,{children:(0,n.jsx)(c.Z,{image:r,layout:"fill"})},e)})})}),g&&(0,n.jsx)(l.Z,{children:(0,n.jsx)(i.Z,{link:x,children:m})})]})})}}}]);