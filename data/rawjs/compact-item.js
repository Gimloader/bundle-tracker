import{o as e}from"./rolldown-runtime.js";import{t}from"./react-1.js";import{c as n,s as r}from"./assertThisInitialized.js";import{Ft as i,Ht as a,It as o,Lt as s,R as c,Ut as l,V as u,Vt as d,lt as f,nt as p,ot as m,tt as h,ut as g,zt as _}from"./Compact.js";import{u as v}from"./color.js";var y=e(l());n(),s(),g(),p();var b=e(t()),x=(0,b.createContext)({});a();function S(e){return e.replace(/-(.)/g,function(e,t){return t.toUpperCase()})}function C(e,t){_(e,`[@ant-design/icons] ${t}`)}function w(e){return d(e)===`object`&&typeof e.name==`string`&&typeof e.theme==`string`&&(d(e.icon)===`object`||typeof e.icon==`function`)}function T(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(t,n){var r=e[n];switch(n){case`class`:t.className=r,delete t.class;break;default:delete t[n],t[S(n)]=r}return t},{})}function E(e,t,n){return n?b.createElement(e.tag,i(i({key:t},T(e.attrs)),n),(e.children||[]).map(function(n,r){return E(n,`${t}-${e.tag}-${r}`)})):b.createElement(e.tag,i({key:t},T(e.attrs)),(e.children||[]).map(function(n,r){return E(n,`${t}-${e.tag}-${r}`)}))}function D(e){return u(e)[0]}function O(e){return e?Array.isArray(e)?e:[e]:[]}var k=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,A=function(e){var t=(0,b.useContext)(x),n=t.csp,r=t.prefixCls,i=t.layer,a=k;r&&(a=a.replace(/anticon/g,r)),i&&(a=`@layer ${i} {
${a}
}`),(0,b.useEffect)(function(){var t=e.current,r=v(t);m(a,`@ant-design-icons`,{prepend:!i,csp:n,attachTo:r})},[])},j=[`icon`,`className`,`onClick`,`style`,`primaryColor`,`secondaryColor`],M={primaryColor:`#333`,secondaryColor:`#E6E6E6`,calculated:!1};function N(e){var t=e.primaryColor,n=e.secondaryColor;M.primaryColor=t,M.secondaryColor=n||D(t),M.calculated=!!n}function P(){return i({},M)}var F=function(e){var t=e.icon,n=e.className,r=e.onClick,a=e.style,o=e.primaryColor,s=e.secondaryColor,c=h(e,j),l=b.useRef(),u=M;if(o&&(u={primaryColor:o,secondaryColor:s||D(o)}),A(l),C(w(t),`icon should be icon definiton, but got ${t}`),!w(t))return null;var d=t;return d&&typeof d.icon==`function`&&(d=i(i({},d),{},{icon:d.icon(u.primaryColor,u.secondaryColor)})),E(d.icon,`svg-${d.name}`,i(i({className:n,onClick:r,style:a,"data-icon":d.name,width:`1em`,height:`1em`,fill:`currentColor`,"aria-hidden":`true`},c),{},{ref:l}))};F.displayName=`IconReact`,F.getTwoToneColors=P,F.setTwoToneColors=N;function I(e){var t=O(e),n=f(t,2),r=n[0],i=n[1];return F.setTwoToneColors({primaryColor:r,secondaryColor:i})}function L(){var e=F.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}g(),p();var R=[`className`,`icon`,`spin`,`rotate`,`tabIndex`,`onClick`,`twoToneColor`];I(c.primary);var z=b.forwardRef(function(e,t){var n=e.className,i=e.icon,a=e.spin,s=e.rotate,c=e.tabIndex,l=e.onClick,u=e.twoToneColor,d=h(e,R),p=b.useContext(x),m=p.prefixCls,g=m===void 0?`anticon`:m,_=p.rootClassName,v=(0,y.default)(_,g,o(o({},`${g}-${i.name}`,!!i.name),`${g}-spin`,!!a||i.name===`loading`),n),S=c;S===void 0&&l&&(S=-1);var C=s?{msTransform:`rotate(${s}deg)`,transform:`rotate(${s}deg)`}:void 0,w=O(u),T=f(w,2),E=T[0],D=T[1];return b.createElement(`span`,r({role:`img`,"aria-label":i.name},d,{ref:t,tabIndex:S,onClick:l,className:v}),b.createElement(F,{icon:i,primaryColor:E,secondaryColor:D,style:C}))});z.displayName=`AntdIcon`,z.getTwoToneColor=L,z.setTwoToneColor=I;var B={icon:{tag:`svg`,attrs:{viewBox:`0 0 1024 1024`,focusable:`false`},children:[{tag:`path`,attrs:{d:`M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z`}}]},name:`loading`,theme:`outlined`};n();var V=b.forwardRef(function(e,t){return b.createElement(z,r({},e,{ref:t,icon:B}))});function H(e,t,n,r){let{focusElCls:i,focus:a,borderElCls:o}=n,s=o?`> *`:``,c=[`hover`,a?`focus`:null,`active`].filter(Boolean).map(e=>`&:${e} ${s}`).join(`,`);return{[`&-item:not(${t}-last-item)`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal()},[`&-item:not(${r}-status-success)`]:{zIndex:2},"&-item":Object.assign(Object.assign({[c]:{zIndex:3}},i?{[`&${i}`]:{zIndex:3}}:{}),{[`&[disabled] ${s}`]:{zIndex:0}})}}function U(e,t,n){let{borderElCls:r}=n,i=r?`> ${r}`:``;return{[`&-item:not(${t}-first-item):not(${t}-last-item) ${i}`]:{borderRadius:0},[`&-item:not(${t}-last-item)${t}-first-item`]:{[`& ${i}, &${e}-sm ${i}, &${e}-lg ${i}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${t}-first-item)${t}-last-item`]:{[`& ${i}, &${e}-sm ${i}, &${e}-lg ${i}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function W(e,t={focus:!0}){let{componentCls:n}=e,r=`${n}-compact`;return{[r]:Object.assign(Object.assign({},H(e,r,t,n)),U(n,r,t))}}export{x as i,V as n,z as r,W as t};