import{j as r,d as a,F as P,r as n,dQ as f}from"./_index.js";import{o as j}from"./mobxreact.esm.js";import{M as h,C as I}from"./Button.js";import{S as N}from"./SixteenByNineScaler.js";import{s as d,a as M,P as w,e as A,I as F,N as y}from"./FixSpinePlugin.js";import{T as E,ai as B,ak as S,al as L,S as $,J as G,u as k,o as K,q as T,n as g}from"./App-41.js";import{e as W,m as v}from"./motion.js";import"./polished.esm.js";import"./inheritsLoose.js";import"./index-2.js";import"./index-20.js";import"./index-5.js";import"./index-22.js";import"./index-4.js";import"./context.js";import"./index-1.js";import"./GetAssetPath.js";import"./MapModeType.js";import"./MapStyle.js";import"./MapSound.js";import"./howler.js";import"./playSound.js";import"./index-21.js";import"./QuizTypes.js";import"./TutorialConsts.js";import"./ActionButton.js";import"./index-18.js";import"./FontAwesomeIcon.js";import"./Centered.js";import"./CapitalizeFirstLetter.js";import"./index-14.js";import"./EditOutlined.js";import"./styleChecker.js";import"./index-3.js";import"./CheckOutlined.js";import"./CopyOutlined.js";import"./progress.js";import"./ElementIds.js";import"./SeasonTicketName.js";import"./useQuery.js";import"./___vite-browser-external_commonjs-proxy.js";import"./util-1.js";import"./util-2.js";import"./Shortcut.js";import"./Names.js";import"./useWillUnmount.js";import"./CircularProgress.js";import"./clsx.m.js";import"./index-6.js";import"./AccessibleAnchor.js";import"./index-17.js";import"./use-force-update.js";import"./GimkitLiveQuestion.js";import"./Text.js";import"./getCloudinaryUrl.js";import"./LazyLatexRenderer.js";import"./Tooltip.js";import"./use-motion-value.js";import"./index-9.js";import"./index-23.js";import"./useIntervalWhen.js";import"./index-10.js";import"./move.js";import"./react-flip-move.es.js";import"./sounds.js";import"./App-5.js";import"./AnimatedBackground-2.js";import"./useDebouncedValue.js";import"./FillRemainingSpace.js";import"./index-24.js";const m=()=>{const e=[];return d.characters.characters.forEach((t,o)=>{E()!==t.id&&t.name!==void 0&&t.isActive&&t.type===B.player&&e.push({id:t.id,name:t.name,selected:t.id===d.gui.selectedPlayerId})}),e.sort((t,o)=>t.name.localeCompare(o.name,"en",{sensitivity:"base"})),e},z=e=>{if(!S())return;let t=d.characters.characters.get(e);t&&(M().characterManager.spectating.setShuffle(!1,!1),L(t))},O=e=>{$(G.kickPlayer,{characterId:e})},R=e=>{const t=()=>{O(e.selectedPlayer.id)},o=()=>{z(e.selectedPlayer.id),e.close()};return r.jsxs(U,{children:[r.jsx(q,{children:e.selectedPlayer.name}),r.jsxs(D,{children:[r.jsx(h,{type:"danger",onClick:t,ariaLabel:"Remove From Game",children:"Remove From Game"}),S()?r.jsx(h,{style:{marginLeft:10},onClick:o,ariaLabel:"Spectate",children:"Spectate"}):null]})]})},U=a.div.attrs({className:"maxWidth"})`
  padding: 35px;
  background: rgba(0, 0, 0, 0.3);
`,q=a.div`
  font-size: 44px;
  font-weight: ${P.Bold};
`,D=a.div.attrs({className:"flex vc"})`
  margin-top: 17px;
`,H=e=>r.jsx(V,{onClick:e.select,style:{background:e.selected?"#1565c0":"rgba(255, 255, 255, 0.2)"},children:e.name}),J=e=>{const{gui:t}=k(),o=i=>t.selectedPlayerId=i;return r.jsx(Q,{children:e.players.map(i=>r.jsx(H,{name:i.name,selected:i.selected,select:()=>o(i.id)},`player-item-${i.id}`))})},Q=a.div.attrs({className:"flex wrap scroll-y"})`
  padding: 20px 35px;
`,V=a.div`
  padding: 5px 12px;
  border-radius: 4px;
  font-size: 22px;
  margin: 6px 8px 6px 0px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`,l={out:{background:"rgba(0,0,0,0)"},in:{background:"rgba(0,0,0,0.6)"}},p={out:{y:"100%",opacity:0},in:{y:0,opacity:1}},ft=j(()=>{const{gui:e}=k(),t=W(),o=()=>{e.selectedPlayerId="",A()&&F()?g(y.startScreen):g(y.home)};K(w.Input.Keyboard.KeyCodes.ESC,o,[o]);const[i,u]=n.useState(m());n.useEffect(()=>{const s=f(()=>e.playersManagerUpdateCounter,()=>{u(m())},{fireImmediately:!0}),C=f(()=>e.selectedPlayerId,()=>{u(m())},{fireImmediately:!0});return()=>{s(),C()}},[]);const c=n.useMemo(()=>e.selectedPlayerId?i.find(s=>s.id===e.selectedPlayerId):null,[e.selectedPlayerId,i.length]);n.useEffect(()=>{!c&&i.length&&(e.selectedPlayerId=i[0].id)},[c,i.length]);const x=n.useMemo(()=>t?.3:.2,[t]),b=()=>i.length?c?r.jsxs(r.Fragment,{children:[r.jsx(R,{selectedPlayer:c,close:o}),r.jsx(J,{players:i})]}):null:r.jsx("div",{className:"flex-center maxAll",style:{padding:10,fontSize:18,fontWeight:P.Bold},children:"No other players have joined this game."});return r.jsxs(X,{children:[r.jsx(Y,{initial:l.out,animate:l.in,exit:l.out,transition:{duration:x,ease:"easeOut"},onClick:o,children:r.jsx(Z,{initial:p.out,animate:p.in,exit:p.out,transition:{duration:x,ease:"easeOut"},onClick:s=>s.stopPropagation(),children:b()})}),r.jsx(T,{onClick:o})]})}),X=a(N).attrs({className:"maxAll"})``,Y=a(v.div).attrs({className:"maxAll flex-center"})`
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`,Z=a(v.div).attrs({className:"medium-shadow flex-column"})`
  position: relative;
  background: rgba(48, 28, 86, 0.94);
  color: ${I.White};
  width: 90%;
  max-width: 800px;
  height: 80%;
  border-radius: 10px;
  overflow: hidden;
`;export{Y as Container,Z as Content,l as containerAnim,p as contentAnim,ft as default};
