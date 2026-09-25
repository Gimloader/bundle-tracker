import{r as p,j as o,U as b,F as _,d as l,u as B,b5 as H,w as K,ay as X}from"./_index.js";import{S as q}from"./SixteenByNineScaler.js";import{M as z,C as M}from"./Button.js";import{o as y}from"./mobxreact.esm.js";import{$ as J,a7 as Y,a8 as Z,a9 as Q,aa as tt,S as P,J as L,u as w,ab as et,ac as k,ad as O,ae as $,af as E,ag as A,o as ot,q as nt}from"./App-41.js";import{s as C,g as rt,S as st,k as it,n as at}from"./FixSpinePlugin.js";import{f as ct,g as mt,u as G,m as j,i as lt,e as T}from"./motion.js";import{u as ut}from"./use-motion-value.js";import{u as dt}from"./use-transform.js";import{I as pt}from"./InventoryItemNameWithCount.js";import{G as xt}from"./GetAssetPath.js";import{p as ft}from"./playSound.js";import{D as gt}from"./index-6.js";import"./index-2.js";import"./index-20.js";import"./index-5.js";import"./index-22.js";import"./index-4.js";import"./context.js";import"./index-1.js";import"./polished.esm.js";import"./inheritsLoose.js";import"./index-21.js";import"./QuizTypes.js";import"./MapModeType.js";import"./TutorialConsts.js";import"./ActionButton.js";import"./index-18.js";import"./FontAwesomeIcon.js";import"./Centered.js";import"./CapitalizeFirstLetter.js";import"./index-14.js";import"./EditOutlined.js";import"./styleChecker.js";import"./index-3.js";import"./CheckOutlined.js";import"./CopyOutlined.js";import"./progress.js";import"./ElementIds.js";import"./SeasonTicketName.js";import"./useQuery.js";import"./___vite-browser-external_commonjs-proxy.js";import"./util-1.js";import"./util-2.js";import"./Shortcut.js";import"./Names.js";import"./useWillUnmount.js";import"./CircularProgress.js";import"./clsx.m.js";import"./AccessibleAnchor.js";import"./index-17.js";import"./use-force-update.js";import"./GimkitLiveQuestion.js";import"./Text.js";import"./getCloudinaryUrl.js";import"./LazyLatexRenderer.js";import"./Tooltip.js";import"./howler.js";import"./index-9.js";import"./index-23.js";import"./useIntervalWhen.js";import"./index-10.js";import"./move.js";import"./react-flip-move.es.js";import"./sounds.js";import"./MapSound.js";import"./App-5.js";import"./AnimatedBackground-2.js";import"./useDebouncedValue.js";import"./MapStyle.js";import"./FillRemainingSpace.js";import"./index-24.js";const V=p.createContext(null);function It(t,r,n,i){if(!i)return t;const e=t.findIndex(d=>d.value===r);if(e===-1)return t;const c=i>0?1:-1,s=t[e+c];if(!s)return t;const f=t[e],a=s.layout,m=ct(a.min,a.max,.5);return c===1&&f.layout.max+n>m||c===-1&&f.layout.min+n<m?mt(t,e,e+c):t}function ht({children:t,as:r="ul",axis:n="y",onReorder:i,values:e,...c},s){const f=G(()=>j(r)),a=[],m=p.useRef(!1),d={axis:n,registerItem:(g,u)=>{u&&a.findIndex(x=>g===x.value)===-1&&(a.push({value:g,layout:u[n]}),a.sort(yt))},updateOrder:(g,u,x)=>{if(m.current)return;const I=It(a,g,u,x);a!==I&&(m.current=!0,i(I.map(bt).filter(h=>e.indexOf(h)!==-1)))}};return p.useEffect(()=>{m.current=!1}),p.createElement(f,{...c,ref:s},p.createElement(V.Provider,{value:d},t))}const vt=p.forwardRef(ht);function bt(t){return t.value}function yt(t,r){return t.layout.min-r.layout.min}function F(t,r=0){return lt(t)?t:ut(r)}function St({children:t,style:r={},value:n,as:i="li",onDrag:e,layout:c=!0,...s},f){const a=G(()=>j(i)),m=p.useContext(V),d={x:F(r.x),y:F(r.y)},g=dt([d.x,d.y],([v,S])=>v||S?1:"unset"),u=p.useRef(null),{axis:x,registerItem:I,updateOrder:h}=m;return p.useEffect(()=>{I(n,u.current)},[m]),p.createElement(a,{drag:x,...s,dragSnapToOrigin:!0,style:{...r,x:d.x,y:d.y,zIndex:g},layout:c,onDrag:(v,S)=>{const{velocity:R}=S;R[x]&&h(n,d[x].get(),R[x]),e&&e(v,S)},onLayoutMeasure:v=>{u.current=v},ref:f},t)}const wt=p.forwardRef(St),U={Group:vt,Item:wt},jt=()=>o.jsx(Ct,{children:"You have no items/resources in your inventory."}),Ct=l.div.attrs({className:"maxWidth"})`
  text-align: center;
  font-family: ${b.ProductSans};
  font-weight: ${_.Bold};
  font-size: 22px;
  color: rgba(255, 255, 255, 0.9);
  padding: 30px;
`,Dt=y(t=>{const r=p.useRef(null),[n,i,e]=B(!1),[c,s]=p.useState(0),f=p.useMemo(()=>n?"grabbing":t.empty?"grab":"pointer",[t.empty,n]),a=()=>{var g,u;i(),s((u=(g=r.current)==null?void 0:g.getBoundingClientRect())==null?void 0:u.x)},m=()=>{var u,x,I;const g=(x=(u=r.current)==null?void 0:u.getBoundingClientRect())==null?void 0:x.x;c===g&&((I=t.onSelect)==null||I.call(t)),e()},d=()=>t.empty?o.jsx($t,{}):o.jsxs(Mt,{style:{background:J(t.rarity)},children:[o.jsx(kt,{src:t.previewImage}),Y({durability:t.durability})?o.jsx(Z,{durability:t.durability}):null,Q({count:t.count,itemId:t.id})?o.jsx(Ot,{children:tt({count:t.count,itemId:t.id})}):null]});return o.jsx(Nt,{ref:r,style:{cursor:f},onMouseDown:a,onMouseUp:m,children:d()})}),Nt=l.div`
  height: 90px;
  width: 90px;
  margin-right: 10px !important;
  &:last-child {
    margin-right: 0px;
  }
`,$t=l.div.attrs({className:"maxAll"})`
  border-radius: 4px;
  border: 2px dashed rgba(255, 255, 255, 0.25);
  &:hover {
    border: 2px dashed rgba(255, 255, 255, 0.5);
  }
`,Mt=l.div.attrs({className:"maxAll"})`
  position: relative;
  border-radius: 4px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  &:hover {
    border: 3px solid rgba(255, 255, 0, 0.75);
  }
`,kt=l.img`
  padding: 16px;
  max-width: 100%;
  max-height: 100%;
  pointer-events: none;
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.65));
`,Ot=l.div`
  position: absolute;
  font-family: ${b.FugazOne};
  bottom: 3px;
  right: 5px;
  font-size: 12px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
  line-height: 1;
`,Rt=t=>{P(L.setInteractiveSlotsOrder,{order:t.order})},zt=y(t=>{const{me:{inventory:r}}=w(),n=et();if(n.length===0)return null;const i=e=>{const c=e.map(s=>s.slotNumber);for(let s=c.length+1;s<=5;s++)c.push(s);r.interactiveSlotsOrder.replace(c),Rt({order:c})};return o.jsxs(Et,{children:[o.jsx(At,{children:"Items"}),o.jsx(Ft,{axis:"x",values:n,onReorder:i,children:n.map(e=>o.jsx(U.Item,{value:e,transition:{duration:.35,ease:"easeOut"},children:o.jsx(Dt,{id:e.id,empty:e.empty,previewImage:e.previewImage,rarity:e.rarity,count:e.count,durability:e.durability,onSelect:e.empty?void 0:()=>t.select(e.slotNumber)})},e.slotNumber+"-item"))})]})}),Et=l.div`
  padding: 0px 30px;
`,At=l.div`
  font-family: ${b.FugazOne};
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 6px;
`,Ft=l(U.Group).attrs({className:"flex vc"})`
  margin-top: 10px;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`,Wt=t=>{const r=p.useMemo(()=>{let n=t.name;return t.amount>1&&(n+=` (${H(t.amount)})`),n},[t.name,t.amount]);return o.jsxs(Bt,{onClick:t.onSelect,children:[o.jsx(Pt,{src:t.image}),o.jsx(Lt,{children:r})]})},Bt=l.div.attrs({className:"flex vc"})`
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  &:last-child {
    margin-bottom: 0px;
  }
`,Pt=l.img`
  height: 35px;
  width: 35px;
  margin-right: 15px;
`,Lt=l.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
`,Gt=y(t=>{const{me:{inventory:r},worldOptions:n}=w(),i=[];return r.slots.forEach((e,c)=>{const s=n.itemOptions.find(f=>f.id===c);s&&!k(s.id)&&!O(s.id)&&i.push({id:s.id,previewImage:s.previewImage,name:s.name,amount:e.amount})}),o.jsxs(Tt,{children:[o.jsx(Vt,{children:"Resources"}),i.map(e=>o.jsx(Wt,{onSelect:()=>t.select(e.id),image:e.previewImage,name:$(e.id),amount:e.amount},e.id+"-resource"))]})}),Tt=l.div`
  font-family: ${b.FugazOne};
  line-height: 1;
  text-transform: uppercase;
  padding: 0px 30px;
`,Vt=l.div`
  font-size: 24px;
  margin-bottom: 14px;
`,Ut=t=>k(t)?!C.me.zoneDropOverrides.allowWeaponDrop:O(t)?!C.me.zoneDropOverrides.allowItemDrop:!C.me.zoneDropOverrides.allowResourceDrop,W=t=>{P(L.dropItem,{amount:t.amount,itemId:t.itemId,interactiveSlotNumber:t.interactiveSlotNumber})},_t=()=>{ft({path:xt("sounds/core/dropItem.mp3"),volume:rt({volume:.45,type:st.soundEffect})})},Ht=t=>{const{info:r}=t,{slotNumber:n,itemId:i,count:e}=r;if(Ut(i))return null;const c=s=>{_t(),n?W({interactiveSlotNumber:n,amount:s}):i&&W({itemId:i,amount:s}),t.closeModal()};return o.jsxs(Kt,{children:[o.jsx(z,{onClick:()=>c(e),ariaLabel:"Drop",children:e===1?"Drop":"Drop All"}),e>1?o.jsx(z,{onClick:()=>c(Math.ceil(e/2)),style:{marginLeft:10},ariaLabel:"Drop Half",children:"Drop Half"}):null]})},Kt=l.div.attrs({className:"flex vc"})`
  margin-top: 15px;
`,Xt=t=>{const{info:r}=t,{name:n,count:i,description:e,previewImage:c}=r;return o.jsxs(qt,{children:[o.jsx(Jt,{src:c}),o.jsxs(Yt,{children:[o.jsx(Zt,{children:pt(n,i)}),o.jsx(Qt,{children:e}),o.jsx(Ht,{info:r,closeModal:t.closeModal})]})]})},qt=l.div.attrs({className:"maxWidth flex vc"})``,Jt=l.img`
  height: 80px;
  width: 80px;
`,Yt=l.div`
  line-height: 1;
  margin-left: 30px;
`,Zt=l.div`
  font-family: ${b.FugazOne};
  text-transform: uppercase;
  font-size: 28px;
`,Qt=l.div`
  font-size: 18px;
  margin-top: 9px;
  color: rgba(255, 255, 255, 0.8);
`,te=y(t=>{const{open:r,close:n,selectedSlotNumber:i,selectedItemId:e}=t,{me:{inventory:c}}=w(),[s,f]=p.useState(),a=(()=>{if(!i&&!e)return null;if(i){const m=c.interactiveSlots.get(`${i}`);if(!m)return null;const d=E(m.itemId);return d?{slotNumber:i,itemId:m.itemId,name:$(m.itemId),count:m.count,description:A(m.itemId),previewImage:d.previewImage}:null}if(e){const m=c.slots.get(e);if(!m)return null;const d=E(e);return d?{itemId:e,name:$(e),count:m.amount,description:A(e),previewImage:d.previewImage}:null}return null})();return p.useEffect(()=>{a&&f(a),a||n()},[a==null?void 0:a.itemId,a==null?void 0:a.slotNumber,a==null?void 0:a.count]),o.jsxs(o.Fragment,{children:[o.jsx(gt,{open:r,onClose:n,placement:"bottom",rootClassName:"selected-item-drawer",closeIcon:o.jsx(K,{style:{color:M.White}}),height:"auto",closable:!0,bodyStyle:{padding:40,paddingTop:35},children:o.jsx(oe,{children:s?o.jsx(Xt,{info:s,closeModal:t.closeModal}):null})}),o.jsx(ee,{})]})}),ee=X`
  .selected-item-drawer .ant-drawer-content {
    background: rgba(48, 28, 86, 0.8) !important;
    backdrop-filter: blur(3px);
  }
`,oe=l.div.attrs({className:"maxWidth"})`
  color: ${M.White};
  font-family: ${b.ProductSans};
`,ne=y(t=>{const{me:{inventory:r}}=w(),[n,i,e]=B(!1),[c,s]=p.useState(),[f,a]=p.useState(0),m=u=>{a(0),s(u),i()},d=u=>{s(void 0),a(u),i()},g=()=>{const u=[];r.slots.forEach((h,v)=>{h.amount>0&&u.push(v)});const x=u.some(h=>!O(h)&&!k(h)),I=it().interactiveItemsSlots>0;return!x&&!I?o.jsx(jt,{}):o.jsxs(o.Fragment,{children:[I?o.jsx(zt,{select:d}):null,I&&x?o.jsx("div",{style:{height:30,flexShrink:0}}):null,x?o.jsx(Gt,{select:m}):null]})};return o.jsxs(o.Fragment,{children:[g(),o.jsx(te,{selectedSlotNumber:f,selectedItemId:c,open:n,close:e,closeModal:t.close})]})}),D={out:{y:"100%",opacity:0},in:{y:0,opacity:1}},re=t=>{const r=T(),n=i=>{i.stopPropagation()};return o.jsx(se,{onClick:n,initial:D.out,animate:D.in,exit:D.out,transition:{duration:r?.3:.2,ease:"easeOut"},children:o.jsx(ne,{close:t.close})})},se=l(j.div).attrs({className:"medium-shadow flex-column scroll-y"})`
  background: rgba(48, 28, 86, 0.9);
  backdrop-filter: blur(4px);
  color: ${M.White};
  width: 90%;
  max-width: 800px;
  height: auto;
  max-height: 80%;
  border-radius: 10px;
  padding: 30px 0px;
`,N={out:{background:"rgba(0,0,0,0)"},in:{background:"rgba(0,0,0,0.6)"}},Do=t=>{const r=T(),n=()=>t.setToHomeScreen();return ot(at.Input.Keyboard.KeyCodes.ESC,n,[n]),o.jsxs(q,{children:[o.jsx(ie,{onClick:n,initial:N.out,animate:N.in,exit:N.out,transition:{duration:r?.3:.2,ease:"easeOut"},children:o.jsx(re,{close:n})}),o.jsx(nt,{onClick:n})]})},ie=l(j.div).attrs({className:"maxAll flex-center flex-column"})`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;export{Do as default};
