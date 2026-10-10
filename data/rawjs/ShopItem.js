import{o as e}from"./rolldown-runtime.js";import{C as t,E as n,O as r,w as i}from"./utils.js";import{t as a}from"./react-1.js";import{t as o}from"./jsx-runtime.js";import{t as s}from"./noop.js";import{t as c}from"./useQuery.js";import{c as l,l as u,n as d,r as f}from"./_index.js";import{t as p}from"./TrackEvent.js";import{t as m}from"./GetAssetPath.js";import{i as h,o as g,u as _}from"./Navigation.js";import{n as v}from"./App-46.js";import{i as y,l as b,o as x,t as S}from"./App-74.js";import{t as C}from"./playSound.js";var w=e(a()),T={root:null,rootMargin:`0px 0px 0px 0px`,threshold:[0,1]};function E(e,t){e===void 0&&(e=function(){}),t===void 0&&(t=T);var n=t.root,r=n===void 0?null:n,i=t.rootMargin,a=t.threshold,o=(0,w.useState)(null),c=o[0],l=o[1],u=(0,w.useState)(!1),d=u[0],f=u[1];return(0,w.useEffect)(function(){if(c){var n=new IntersectionObserver(function(t,n){t.forEach(function(e){var t=e.isIntersecting;return f(t)}),e(t,n)},t);return n.observe(c),function(){n.disconnect()}}return s},[c,e,r,i,a]),[(0,w.useCallback)(function(e){l(e)},[]),d]}var D=o(),O=e=>(0,D.jsx)(k,{style:{background:b(e.rarity)},children:(0,D.jsxs)(A,{children:[(0,D.jsxs)(`div`,{className:`flex-column`,style:{alignItems:`flex-start`},children:[e.tag?(0,D.jsx)(P,{children:e.tag}):null,(0,D.jsx)(j,{children:e.name}),(0,D.jsx)(M,{children:e.owned?`Owned`:x(e.type)})]}),(0,D.jsx)(N,{children:e.owned?null:(0,D.jsx)(h,{amount:e.cost})})]})}),k=u.div`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  color: ${d.White};
  text-transform: uppercase;
  border-bottom-left-radius: ${()=>6}px;
  border-bottom-right-radius: ${()=>6}px;
  overflow: hidden;
  line-height: 1;
`,A=u.div.attrs({className:`maxWidth flex vc between`})`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 25px;
`,j=u.div`
  font-size: 24px;
`,M=u.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-top: 6px;
`,N=u.div`
  margin-left: 10px;
`,P=u.div`
  background: #00897b;
  padding: 11px;
  border-radius: 7px;
  line-height: 1;
  margin-bottom: 11px;
  font-size: 13px;
  text-transform: uppercase;
`,F=e=>{let[t,n]=E();return(0,D.jsx)(I,{ref:t,style:{padding:e.padding,background:e.background},children:n?(0,D.jsx)(L,{draggable:!1,src:e.image}):null})},I=u.div.attrs({className:`maxAll flex-center`})`
  background: rgb(255, 255, 255);
  overflow: hidden;
`,L=u.img`
  max-width: 100%;
  max-height: 100%;
`,R=[`cosmos-item-shop`],z=()=>c(R,()=>i({url:`/api/cosmos/shop`})),B=()=>{f.removeQueries(R)},V=()=>f.refetchQueries(R),H=e=>{let[r,i]=w.useState(!1),[a,o]=w.useState(!1),{id:s,name:c,rarity:l,type:u,description:d,style:f}=e,_=e.owned||e.currentCurrency<e.cost,y=()=>{_||r||(i(!0),t({url:`/api/cosmos/purchase-item`,data:{cosmeticId:e.id},success:()=>{p({event:`cosmetic_purchased`,properties:{id:s,name:c,type:u}}),C({path:m(`cosmos/cosmeticPurchased.mp3`),volume:.6}),g(),V(),o(!0)},error:t=>{n({e:t,default:{title:`Error purchasing item.`,content:`Please try again later.`}}),e.close()}}))};return(0,D.jsx)(S,{open:e.open,close:e.close,id:s,name:c,image:v({id:s,type:u}),rarity:l,type:u,description:d,style:f,purchased:a,callToAction:()=>({text:e.owned?`Owned`:(0,D.jsxs)(`div`,{className:`flex vc`,style:{lineHeight:1,padding:`2px 0px`},children:[(0,D.jsx)(`div`,{style:{marginTop:2},children:`Purchase`}),(0,D.jsx)(`div`,{style:{margin:`0px 7px`},children:`-`}),(0,D.jsx)(h,{amount:e.cost,size:16,grayscale:_})]}),ariaLabel:e.owned?`Owned`:`Purchase`,disabled:_,onClick:y}),blockCharacterPreview:e.blockCharacterPreview,onCosmeticSelectionChanged:e.onCosmeticSelectionChanged})},U=e=>{let[t,n,i]=r(!1),[a,o,s]=r(!1),c=()=>{y(),n()},l=w.useMemo(()=>e.type===_.sticker?30:10,[e.type]);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(W,{onMouseEnter:o,onMouseLeave:s,onClick:c,children:[(0,D.jsx)(G,{children:(0,D.jsx)(K,{style:{transform:`scale(${a?1.1:1})`},children:(0,D.jsx)(F,{image:e.image,background:b(e.rarity),padding:l})})}),(0,D.jsx)(O,{name:e.name,type:e.type,rarity:e.rarity,owned:e.owned,cost:e.cost,tag:e.tag})]}),(0,D.jsx)(H,{open:t,close:i,...e})]})},W=u.div.attrs({className:`maxWidth medium-shadow`})`
  border-radius: ${6}px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
  border: 3px solid;
  font-family: ${l.FugazOne};
  &:last-child {
    margin-bottom: 0px;
  }
`,G=u.div.attrs({className:`maxWidth`})`
  height: 140px;
  overflow: hidden;
`,K=u.div.attrs({className:`maxAll`})`
  transition: transform 0.25s;
`;export{V as a,F as c,M as d,j as f,U as i,k as l,G as n,B as o,K as r,z as s,W as t,A as u};