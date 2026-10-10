import{o as e}from"./rolldown-runtime.js";import{t}from"./react-1.js";import{r as n}from"./SixteenByNineScaler.js";import{m as r}from"./decorate.js";import{t as i}from"./jsx-runtime.js";import{l as a,s as o}from"./_index.js";import{r as s}from"./mobxreact.esm.js";import{n as c,t as l}from"./Button.js";import{f as u,t as d}from"./motion.js";import{t as f}from"./phaser.js";import{s as p,t as m}from"./stores-2.js";import{t as h}from"./FetchScene.js";import{t as g}from"./isVersion.js";import{r as _}from"./InPhase.js";import{t as v}from"./useStore.js";import{t as y}from"./FetchMyId.js";import{n as b}from"./FetchSpectatedId.js";import{n as x,t as S}from"./Send.js";import{t as C}from"./CharacterType.js";import{At as w,L as T,jt as E,ot as D}from"./App-42.js";var O=e(t()),k=e(f()),A=()=>{let e=[];return m.characters.characters.forEach((t,n)=>{y()!==t.id&&t.name!==void 0&&t.isActive&&t.type===C.player&&e.push({id:t.id,name:t.name,selected:t.id===m.gui.selectedPlayerId})}),e.sort((e,t)=>e.name.localeCompare(t.name,`en`,{sensitivity:`base`})),e},j=e=>{if(!b())return;let t=m.characters.characters.get(e);t&&(h().characterManager.spectating.setShuffle(!1,!1),E(t))},M=e=>{S(x.kickPlayer,{characterId:e})},N=i(),P=e=>(0,N.jsxs)(F,{children:[(0,N.jsx)(I,{children:e.selectedPlayer.name}),(0,N.jsxs)(L,{children:[(0,N.jsx)(l,{type:`danger`,onClick:()=>{M(e.selectedPlayer.id)},ariaLabel:`Remove From Game`,children:`Remove From Game`}),b()?(0,N.jsx)(l,{style:{marginLeft:10},onClick:()=>{j(e.selectedPlayer.id),e.close()},ariaLabel:`Spectate`,children:`Spectate`}):null]})]}),F=a.div.attrs({className:`maxWidth`})`
  padding: 35px;
  background: rgba(0, 0, 0, 0.3);
`,I=a.div`
  font-size: 44px;
  font-weight: ${o.Bold};
`,L=a.div.attrs({className:`flex vc`})`
  margin-top: 17px;
`,R=e=>(0,N.jsx)(V,{onClick:e.select,style:{background:e.selected?`#1565c0`:`rgba(255, 255, 255, 0.2)`},children:e.name}),z=e=>{let{gui:t}=v(),n=e=>t.selectedPlayerId=e;return(0,N.jsx)(B,{children:e.players.map(e=>(0,N.jsx)(R,{name:e.name,selected:e.selected,select:()=>n(e.id)},`player-item-${e.id}`))})},B=a.div.attrs({className:`flex wrap scroll-y`})`
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
`,H={out:{background:`rgba(0,0,0,0)`},in:{background:`rgba(0,0,0,0.6)`}},U={out:{y:`100%`,opacity:0},in:{y:0,opacity:1}},W=s(()=>{let{gui:e}=v(),t=u(),n=()=>{e.selectedPlayerId=``,g()&&_()?w(p.startScreen):w(p.home)};D(k.default.Input.Keyboard.KeyCodes.ESC,n,[n]);let[i,a]=O.useState(A());O.useEffect(()=>{let t=r(()=>e.playersManagerUpdateCounter,()=>{a(A())},{fireImmediately:!0}),n=r(()=>e.selectedPlayerId,()=>{a(A())},{fireImmediately:!0});return()=>{t(),n()}},[]);let s=O.useMemo(()=>e.selectedPlayerId?i.find(t=>t.id===e.selectedPlayerId):null,[e.selectedPlayerId,i.length]);O.useEffect(()=>{!s&&i.length&&(e.selectedPlayerId=i[0].id)},[s,i.length]);let c=O.useMemo(()=>t?.3:.2,[t]);return(0,N.jsxs)(G,{children:[(0,N.jsx)(K,{initial:H.out,animate:H.in,exit:H.out,transition:{duration:c,ease:`easeOut`},onClick:n,children:(0,N.jsx)(q,{initial:U.out,animate:U.in,exit:U.out,transition:{duration:c,ease:`easeOut`},onClick:e=>e.stopPropagation(),children:i.length?s?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(P,{selectedPlayer:s,close:n}),(0,N.jsx)(z,{players:i})]}):null:(0,N.jsx)(`div`,{className:`flex-center maxAll`,style:{padding:10,fontSize:18,fontWeight:o.Bold},children:`No other players have joined this game.`})})}),(0,N.jsx)(T,{onClick:n})]})}),G=a(n).attrs({className:`maxAll`})``,K=a(d.div).attrs({className:`maxAll flex-center`})`
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`,q=a(d.div).attrs({className:`medium-shadow flex-column`})`
  position: relative;
  background: rgba(48, 28, 86, 0.94);
  color: ${c.White};
  width: 90%;
  max-width: 800px;
  height: 80%;
  border-radius: 10px;
  overflow: hidden;
`;export{K as Container,q as Content,H as containerAnim,U as contentAnim,W as default};