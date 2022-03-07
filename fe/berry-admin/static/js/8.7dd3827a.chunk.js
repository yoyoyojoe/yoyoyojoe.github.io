(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[8],{279:function(e,t,r){"use strict";var a=r(21),c=r(255),l=r(194),i=r(285),o=r(12),n=r(45),s=r(253),b=r(1),j=["color","outline","size","sx"],d=function(e){var t=e.color,r=e.outline,c=e.size,l=e.sx,i=Object(n.a)(e,j),d=Object(a.a)(),m=t&&!r&&{color:d.palette.background.paper,bgcolor:"".concat(t,".main")},x=r&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:d.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},g={};switch(c){case"badge":g={width:d.spacing(3.5),height:d.spacing(3.5)};break;case"xs":g={width:d.spacing(4.25),height:d.spacing(4.25)};break;case"sm":g={width:d.spacing(5),height:d.spacing(5)};break;case"lg":g={width:d.spacing(9),height:d.spacing(9)};break;case"xl":g={width:d.spacing(10.25),height:d.spacing(10.25)};break;case"md":g={width:d.spacing(7.5),height:d.spacing(7.5)};break;default:g={}}return Object(b.jsx)(s.a,Object(o.a)({sx:Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({},m),x),g),l)},i))};t.a=function(e){var t=e.title,r=e.link,o=e.icon,n=Object(a.a)();return Object(b.jsx)(c.a,{title:t||"Reference",placement:"left",children:Object(b.jsxs)(l.a,{disableRipple:!0,children:[!o&&Object(b.jsx)(d,{component:i.a,href:r,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(b.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(b.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:n.palette.primary[800]}),Object(b.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:n.palette.primary.main}),Object(b.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:n.palette.primary[800]}),Object(b.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:n.palette.primary.main})]}),Object(b.jsx)("defs",{children:Object(b.jsx)("clipPath",{id:"clip0",children:Object(b.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),o&&Object(b.jsx)(d,{component:i.a,href:r,target:"_blank",size:"badge",color:"primary",outline:!0,children:o})]})})}},285:function(e,t,r){"use strict";var a=r(13),c=r(3),l=r(6),i=r(2),o=r(0),n=(r(9),r(7)),s=r(81),b=r(14),j=r(63),d=r(8),m=r(5),x=r(10),g=r(65),O=r(16),h=r(64),p=r(70),u=r(82);function y(e){return Object(p.a)("MuiLink",e)}var f=Object(u.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),k=r(1),v=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C=Object(m.a)(h.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["underline".concat(Object(d.a)(r.underline))],"button"===r.component&&t.button]}})((function(e){var t=e.theme,r=e.ownerState,a=Object(b.b)(t,"palette.".concat(function(e){return w[e]||e}(r.color)))||r.color;return Object(i.a)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==a?Object(j.a)(a,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===r.component&&Object(c.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(f.focusVisible),{outline:"auto"}))})),L=o.forwardRef((function(e,t){var r=Object(x.a)({props:e,name:"MuiLink"}),c=r.className,b=r.color,j=void 0===b?"primary":b,m=r.component,h=void 0===m?"a":m,p=r.onBlur,u=r.onFocus,f=r.TypographyClasses,w=r.underline,L=void 0===w?"always":w,V=r.variant,D=void 0===V?"inherit":V,G=Object(l.a)(r,v),A=Object(g.a)(),F=A.isFocusVisibleRef,P=A.onBlur,M=A.onFocus,B=A.ref,R=o.useState(!1),S=Object(a.a)(R,2),z=S[0],W=S[1],Z=Object(O.a)(t,B),E=Object(i.a)({},r,{color:j,component:h,focusVisible:z,underline:L,variant:D}),N=function(e){var t=e.classes,r=e.component,a=e.focusVisible,c=e.underline,l={root:["root","underline".concat(Object(d.a)(c)),"button"===r&&"button",a&&"focusVisible"]};return Object(s.a)(l,y,t)}(E);return Object(k.jsx)(C,Object(i.a)({className:Object(n.a)(N.root,c),classes:f,color:j,component:h,onBlur:function(e){P(e),!1===F.current&&W(!1),p&&p(e)},onFocus:function(e){M(e),!0===F.current&&W(!0),u&&u(e)},ref:Z,ownerState:E,variant:D},G))}));t.a=L},465:function(e,t,r){"use strict";r.r(t);var a=r(144),c=r(259),l=r(64),i=r(251),o=r(103),n=r(83),s=r(279),b=r(36),j=r(1),d=function(e){var t=e.bgcolor,r=e.title,o=e.data,n=e.dark;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(a.a,{sx:{mb:3},children:Object(j.jsxs)(c.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",py:4.5,bgcolor:t,color:n?"grey.800":"#ffffff"},children:[r&&Object(j.jsx)(l.a,{variant:"subtitle1",color:"inherit",children:r}),!r&&Object(j.jsx)(c.a,{sx:{p:1.15}})]})}),o&&Object(j.jsxs)(i.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(j.jsx)(i.a,{item:!0,children:Object(j.jsx)(l.a,{variant:"subtitle2",children:o.label})}),Object(j.jsx)(i.a,{item:!0,children:Object(j.jsx)(l.a,{variant:"subtitle1",sx:{textTransform:"uppercase"},children:o.color})})]})]})};t.default=function(){return Object(j.jsx)(n.a,{title:"Color Palette",secondary:Object(j.jsx)(s.a,{link:"https://next.material-ui.com/system/palette/"}),children:Object(j.jsxs)(i.a,{container:!0,spacing:b.b,children:[Object(j.jsx)(i.a,{item:!0,xs:12,children:Object(j.jsx)(o.a,{title:"Primary Color",children:Object(j.jsxs)(i.a,{container:!0,spacing:b.b,children:[Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"primary.light",data:{label:"Blue-50",color:"#E3F2FD"},title:"primary.light",dark:!0})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"primary.200",data:{label:"Blue-200",color:"#90CAF9"},title:"primary[200]",dark:!0})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"primary.main",data:{label:"Blue-500",color:"#2196F3"},title:"primary.main"})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"primary.dark",data:{label:"Blue-600",color:"#1E88E5"},title:"primary.dark"})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"primary.800",data:{label:"Blue-800",color:"#1565C0"},title:"primary[800]"})})]})})}),Object(j.jsx)(i.a,{item:!0,xs:12,children:Object(j.jsx)(o.a,{title:"Secondary Color",children:Object(j.jsxs)(i.a,{container:!0,spacing:b.b,children:[Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"secondary.light",data:{label:"DeepPurple-50",color:"#ede7f6"},title:"secondary.light",dark:!0})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"secondary.200",data:{label:"DeepPurple-200",color:"#b39ddb"},title:"secondary[200]",dark:!0})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"secondary.main",data:{label:"DeepPurple-500",color:"#673ab7"},title:"secondary.main"})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"secondary.dark",data:{label:"DeepPurple-600",color:"#5e35b1"},title:"secondary.dark"})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"secondary.800",data:{label:"DeepPurple-800",color:"#4527a0"},title:"secondary[800]"})})]})})}),Object(j.jsx)(i.a,{item:!0,xs:12,children:Object(j.jsx)(o.a,{title:"Success Color",children:Object(j.jsxs)(i.a,{container:!0,spacing:b.b,children:[Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"success.light",data:{label:"Green-A100",color:"#b9f6ca"},title:"success.light",dark:!0})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"success.main",data:{label:"Green-A200",color:"#69f0ae"},title:"success[200]"})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"success.main",data:{label:"Green-A400",color:"#69f0ae"},title:"success.main"})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"success.dark",data:{label:"Green-A700",color:"#00c853"},title:"success.dark"})})]})})}),Object(j.jsx)(i.a,{item:!0,xs:12,children:Object(j.jsx)(o.a,{title:"Orange Color",children:Object(j.jsxs)(i.a,{container:!0,spacing:b.b,children:[Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"orange.light",data:{label:"DeepOrange-50",color:"#fbe9e7"},title:"orange.light",dark:!0})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"orange.main",data:{label:"DeepOrange-200",color:"#ffab91"},title:"orange.main"})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"orange.dark",data:{label:"DeepOrange-800",color:"#d84315"},title:"orange.dark"})})]})})}),Object(j.jsx)(i.a,{item:!0,xs:12,children:Object(j.jsx)(o.a,{title:"Error Color",children:Object(j.jsxs)(i.a,{container:!0,spacing:b.b,children:[Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"error.light",data:{label:"Red-50",color:"#ef9a9a"},title:"error.light",dark:!0})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"error.main",data:{label:"Red-200",color:"#f44336"},title:"error.main"})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"error.dark",data:{label:"Red-800",color:"#c62828"},title:"error.dark"})})]})})}),Object(j.jsx)(i.a,{item:!0,xs:12,children:Object(j.jsx)(o.a,{title:"Warning Color",children:Object(j.jsxs)(i.a,{container:!0,spacing:b.b,children:[Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"warning.light",data:{label:"Amber-50",color:"#b9f6ca"},title:"warning.light",dark:!0})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"warning.main",data:{label:"Amber-100",color:"#ffe57f"},title:"warning.main",dark:!0})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"warning.dark",data:{label:"Amber-500",color:"#FFC107"},title:"warning.dark"})})]})})}),Object(j.jsx)(i.a,{item:!0,xs:12,children:Object(j.jsx)(o.a,{title:"Grey Color",children:Object(j.jsxs)(i.a,{container:!0,spacing:b.b,children:[Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"grey.50",data:{label:"Grey-50",color:"#fafafa"},title:"grey[50]",dark:!0})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"grey.100",data:{label:"Grey-100",color:"#f5f5f5"},title:"grey[100]",dark:!0})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"grey.200",data:{label:"Grey-200",color:"#eeeeee"},title:"grey[200]",dark:!0})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"grey.300",data:{label:"Grey-300",color:"#e0e0e0"},title:"grey[300]",dark:!0})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"grey.500",data:{label:"Grey-500",color:"#9e9e9e"},title:"grey[500]"})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"grey.700",data:{label:"Grey-600",color:"#757575"},title:"grey[600]"})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"grey.700",data:{label:"Grey-700",color:"#616161"},title:"grey[700]"})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"grey.900",data:{label:"Grey-900",color:"#212121"},title:"grey[900]"})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(j.jsx)(d,{bgcolor:"#fff",data:{label:"Pure White",color:"#ffffff"},title:"Pure White",dark:!0})})]})})})]})})}}}]);
//# sourceMappingURL=8.7dd3827a.chunk.js.map