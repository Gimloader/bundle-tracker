import{ar as g,j as e,U as l,d as i,F as y,D as j,r as S}from"./_index.js";import{S as z}from"./SixteenByNineScaler.js";import{ah as b,T as k,ai as M,aj as x,u as v,o as w,a2 as A,q as P,n as F}from"./App-41.js";import{s as r,O as _,P as $,N as E}from"./FixSpinePlugin.js";import{Container as N,containerAnim as p,contentAnim as d,Content as O}from"./App-50.js";import{M as f,C as U}from"./Button.js";import{S as u}from"./index-2.js";import{C as D,V as I}from"./Centered.js";import{F as L}from"./FontAwesomeIcon.js";import{m as R,e as B}from"./motion.js";import{A as W}from"./AccessibleAnchor.js";import{o as G}from"./mobxreact.esm.js";import"./index-20.js";import"./index-5.js";import"./index-22.js";import"./index-4.js";import"./context.js";import"./index-1.js";import"./index-21.js";import"./QuizTypes.js";import"./MapModeType.js";import"./GetAssetPath.js";import"./TutorialConsts.js";import"./ActionButton.js";import"./playSound.js";import"./MapSound.js";import"./howler.js";import"./index-18.js";import"./CapitalizeFirstLetter.js";import"./index-14.js";import"./EditOutlined.js";import"./styleChecker.js";import"./index-3.js";import"./CheckOutlined.js";import"./CopyOutlined.js";import"./progress.js";import"./ElementIds.js";import"./SeasonTicketName.js";import"./useQuery.js";import"./___vite-browser-external_commonjs-proxy.js";import"./util-1.js";import"./util-2.js";import"./Shortcut.js";import"./Names.js";import"./useWillUnmount.js";import"./CircularProgress.js";import"./clsx.m.js";import"./inheritsLoose.js";import"./index-6.js";import"./index-17.js";import"./use-force-update.js";import"./GimkitLiveQuestion.js";import"./Text.js";import"./getCloudinaryUrl.js";import"./LazyLatexRenderer.js";import"./Tooltip.js";import"./polished.esm.js";import"./use-motion-value.js";import"./index-9.js";import"./index-23.js";import"./useIntervalWhen.js";import"./index-10.js";import"./move.js";import"./react-flip-move.es.js";import"./sounds.js";import"./App-5.js";import"./AnimatedBackground-2.js";import"./useDebouncedValue.js";import"./MapStyle.js";import"./FillRemainingSpace.js";import"./index-24.js";const K=()=>{r.session.customTeams.characterToTeamMap.clear()},h=()=>{let t=!1;b().allowGameOwnerToSpectate&&r.session.ownerRole===_.spectator&&(t=!0);const s=k(),o=[];return r.characters.characters.forEach(m=>{m.type===M.player&&(t&&m.id===s||o.push(m))}),o},V=()=>{const t=g.shuffle(h()),s=x();let o=0;t.forEach(a=>{r.session.customTeams.characterToTeamMap.has(a.id)||(r.session.customTeams.characterToTeamMap.set(a.id,s[o].id),o++,o>=s.length&&(o=0))})},q=()=>e.jsxs(H,{children:[e.jsx(Y,{children:"Customize teams"}),e.jsx(J,{children:"Click a player's name to add them to that team. Unassigned players are assigned randomly at game start."}),e.jsxs(u,{style:{fontFamily:l.ProductSans,marginTop:18},size:15,children:[e.jsx(f,{size:"small",onClick:V,ariaLabel:"Split teams evenly",children:"Split evenly"}),e.jsx(f,{size:"small",onClick:K,ariaLabel:"Clear team assignments",children:"Clear team assignments"})]})]}),H=i.div``,Y=i.div`
  font-size: 32px;
  text-transform: uppercase;
  font-family: ${l.FugazOne};
  line-height: 1;
`,J=i.div`
  font-size: 16px;
  margin-top: 7px;
  color: rgba(255, 255, 255, 0.9);
`,Q=t=>e.jsx(R.div,{layout:!0,transition:{duration:.2},onClick:t.onSelect,children:e.jsxs(X,{selected:t.selected,children:[t.selected?e.jsx("div",{style:{marginRight:4},children:e.jsx(L,{name:"fas fa-check"})}):null,e.jsx("span",{children:t.name})]})}),X=i(D)`
  font-family: ${l.ProductSans};
  padding: 2px 8px;
  border-radius: 50px;
  font-size: 14px;
  background: ${t=>t.selected?"green":"rgba(255,255,255,0.1)"};
  cursor: pointer;
  will-change: transform, background;
  transition: background 0.1s, transform 0.2s;
  &:hover {
    transform: scale(1.05);
    background: ${t=>t.selected?"green":"rgba(255,255,255,0.2)"};
  }
`,Z=t=>{const{session:{customTeams:s}}=v(),o=h(),a=[];o.forEach(n=>{const c=s.characterToTeamMap.get(n.id);c&&c!==t||a.push({id:n.id,name:n.name,selected:c===t})});const m=a.sort((n,c)=>n.name.toLowerCase().localeCompare(c.name.toLowerCase())),T=m.filter(n=>n.selected),C=m.filter(n=>!n.selected);return T.concat(C)},tt=(t,s)=>{s?r.session.customTeams.characterToTeamMap.has(t)?r.session.customTeams.characterToTeamMap.delete(t):r.session.customTeams.characterToTeamMap.set(t,s):r.session.customTeams.characterToTeamMap.delete(t)},et=t=>{h().forEach(o=>{r.session.customTeams.characterToTeamMap.has(o.id)||r.session.customTeams.characterToTeamMap.set(o.id,t)})},st=G(t=>{const s=Z(t.id),o=s.filter(a=>a.selected).length;return e.jsxs(ot,{children:[e.jsxs(at,{children:[e.jsx(rt,{children:t.name}),e.jsx("div",{children:o!==s.length?e.jsx(W,{style:{color:U.Yellow,fontFamily:l.ProductSans,fontStyle:"italic",textDecoration:"underline"},onClick:()=>{et(t.id)},children:"Assign all remaining players"}):null})]}),e.jsx(u,{wrap:!0,direction:"horizontal",style:{marginTop:22},children:s.map(a=>e.jsx(Q,{name:a.name,selected:a.selected,onSelect:()=>{tt(a.id,t.id)}},t.id+a.id))})]})}),ot=i.div.attrs({className:"maxWidth light-shadow"})`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 6px;
`,at=i(I).attrs({className:"maxWidth between"})``,rt=i.div`
  font-family: ${l.ProductSans};
  font-weight: ${y.Bold};
  font-size: 18px;
`,it=()=>{const t=x();return e.jsxs(nt,{children:[e.jsx(q,{}),e.jsx(j,{}),e.jsx(u,{className:"maxWidth",direction:"vertical",size:15,children:t.map(s=>e.jsx(st,{id:s.id,name:s.name},s.id))})]})},nt=i.div.attrs({className:"maxAll scroll-y"})`
  padding: 35px;
`,ve=()=>{const t=B(),s=()=>{F(E.startScreen)},o=S.useMemo(()=>t?.3:.2,[t]);return w($.Input.Keyboard.KeyCodes.ESC,s,[s]),A(),e.jsxs(mt,{children:[e.jsx(N,{initial:p.out,animate:p.in,exit:p.out,transition:{duration:o,ease:"easeOut"},onClick:s,children:e.jsx(ct,{initial:d.out,animate:d.in,exit:d.out,transition:{duration:o,ease:"easeOut"},onClick:a=>a.stopPropagation(),children:e.jsx(it,{})})}),e.jsx(P,{onClick:s})]})},mt=i(z).attrs({className:"maxAll"})``,ct=i(O)`
  max-width: 1000px;
  height: 90%;
`;export{ve as default};
