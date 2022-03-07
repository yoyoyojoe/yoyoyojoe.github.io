(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[10],{279:function(e,t,c){"use strict";var a=c(21),s=c(255),n=c(194),i=c(285),r=c(12),o=c(45),l=c(253),j=c(1),d=["color","outline","size","sx"],b=function(e){var t=e.color,c=e.outline,s=e.size,n=e.sx,i=Object(o.a)(e,d),b=Object(a.a)(),m=t&&!c&&{color:b.palette.background.paper,bgcolor:"".concat(t,".main")},x=c&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:b.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},h={};switch(s){case"badge":h={width:b.spacing(3.5),height:b.spacing(3.5)};break;case"xs":h={width:b.spacing(4.25),height:b.spacing(4.25)};break;case"sm":h={width:b.spacing(5),height:b.spacing(5)};break;case"lg":h={width:b.spacing(9),height:b.spacing(9)};break;case"xl":h={width:b.spacing(10.25),height:b.spacing(10.25)};break;case"md":h={width:b.spacing(7.5),height:b.spacing(7.5)};break;default:h={}}return Object(j.jsx)(l.a,Object(r.a)({sx:Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({},m),x),h),n)},i))};t.a=function(e){var t=e.title,c=e.link,r=e.icon,o=Object(a.a)();return Object(j.jsx)(s.a,{title:t||"Reference",placement:"left",children:Object(j.jsxs)(n.a,{disableRipple:!0,children:[!r&&Object(j.jsx)(b,{component:i.a,href:c,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(j.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(j.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:o.palette.primary[800]}),Object(j.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:o.palette.primary.main}),Object(j.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:o.palette.primary[800]}),Object(j.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:o.palette.primary.main})]}),Object(j.jsx)("defs",{children:Object(j.jsx)("clipPath",{id:"clip0",children:Object(j.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),r&&Object(j.jsx)(b,{component:i.a,href:c,target:"_blank",size:"badge",color:"primary",outline:!0,children:r})]})})}},285:function(e,t,c){"use strict";var a=c(13),s=c(3),n=c(6),i=c(2),r=c(0),o=(c(9),c(7)),l=c(81),j=c(14),d=c(63),b=c(8),m=c(5),x=c(10),h=c(65),O=c(16),u=c(64),p=c(70),g=c(82);function w(e){return Object(p.a)("MuiLink",e)}var f=Object(g.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=c(1),v=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},L=Object(m.a)(u.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var c=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(c.underline))],"button"===c.component&&t.button]}})((function(e){var t=e.theme,c=e.ownerState,a=Object(j.b)(t,"palette.".concat(function(e){return k[e]||e}(c.color)))||c.color;return Object(i.a)({},"none"===c.underline&&{textDecoration:"none"},"hover"===c.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===c.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==a?Object(d.a)(a,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===c.component&&Object(s.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(f.focusVisible),{outline:"auto"}))})),V=r.forwardRef((function(e,t){var c=Object(x.a)({props:e,name:"MuiLink"}),s=c.className,j=c.color,d=void 0===j?"primary":j,m=c.component,u=void 0===m?"a":m,p=c.onBlur,g=c.onFocus,f=c.TypographyClasses,k=c.underline,V=void 0===k?"always":k,M=c.variant,S=void 0===M?"inherit":M,C=Object(n.a)(c,v),B=Object(h.a)(),R=B.isFocusVisibleRef,z=B.onBlur,D=B.onFocus,F=B.ref,Z=r.useState(!1),A=Object(a.a)(Z,2),N=A[0],P=A[1],T=Object(O.a)(t,F),H=Object(i.a)({},c,{color:d,component:u,focusVisible:N,underline:V,variant:S}),I=function(e){var t=e.classes,c=e.component,a=e.focusVisible,s=e.underline,n={root:["root","underline".concat(Object(b.a)(s)),"button"===c&&"button",a&&"focusVisible"]};return Object(l.a)(n,w,t)}(H);return Object(y.jsx)(L,Object(i.a)({className:Object(o.a)(I.root,s),classes:f,color:d,component:u,onBlur:function(e){z(e),!1===R.current&&P(!1),p&&p(e)},onFocus:function(e){D(e),!0===R.current&&P(!0),g&&g(e)},ref:T,ownerState:H,variant:S},C))}));t.a=V},466:function(e,t,c){"use strict";c.r(t);var a=c(144),s=c(259),n=c(251),i=c(103),r=c(83),o=c(279),l=c(36),j=c(1),d=function(e){var t=e.shadow;return Object(j.jsx)(a.a,{sx:{mb:3,boxShadow:t},children:Object(j.jsx)(s.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",py:4.5,bgcolor:"primary.light",color:"grey.800"},children:Object(j.jsxs)(s.a,{sx:{color:"inherit"},children:["boxShadow: ",t]})})})};t.default=function(){return Object(j.jsx)(r.a,{title:"Basic Shadow",secondary:Object(j.jsx)(o.a,{link:"https://next.material-ui.com/system/shadows/"}),children:Object(j.jsx)(n.a,{container:!0,spacing:l.b,children:Object(j.jsx)(n.a,{item:!0,xs:12,children:Object(j.jsx)(i.a,{title:"Basic Shadow",children:Object(j.jsxs)(n.a,{container:!0,spacing:l.b,children:[Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"0"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"1"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"2"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"3"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"4"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"5"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"6"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"7"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"8"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"9"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"10"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"11"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"12"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"13"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"14"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"15"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"16"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"17"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"18"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"19"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"20"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"21"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"22"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"23"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"24"})})]})})})})})}}}]);
//# sourceMappingURL=10.90d6bfd5.chunk.js.map