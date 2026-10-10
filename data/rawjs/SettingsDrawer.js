import{o as e}from"./rolldown-runtime.js";import{t}from"./react-1.js";import{a as n}from"./InfoCircleFilled.js";import{t as r}from"./modal.js";import{t as ee}from"./button.js";import{t as i}from"./select.js";import{t as a}from"./drawer.js";import{t as o}from"./space.js";import{t as s}from"./typography.js";import{t as c}from"./switch.js";import{t as l}from"./jsx-runtime.js";import{c as u,l as d,s as f,v as p,y as m}from"./_index.js";import{n as te}from"./Button.js";import{a as h,i as g,n as _,o as v,s as y}from"./MapSound.js";import{s as b}from"./stores-2.js";import{t as x}from"./FetchScene.js";import{t as S}from"./Shortcut.js";import{At as C,R as ne,at as re,d as ie,f as w}from"./App-42.js";import{a as T,i as E,n as D,r as O,t as k}from"./SettingCard.js";import{n as A,t as j}from"./Options.js";var M=e(t()),N=l(),P=()=>{let e=M.useSyncExternalStore(y,()=>_(`muted`));return(0,N.jsx)(k,{children:(0,N.jsxs)(E,{children:[(0,N.jsx)(D,{children:(0,N.jsx)(T,{children:`Mute`})}),(0,N.jsx)(c,{checked:e,onChange:e=>v(`muted`,e),"aria-label":`Mute All Sounds`})]})})},F=e=>Math.round(e*100),I=[{value:25,label:`Minimum`},{value:50,label:`Low`},{value:75,label:`Medium`},{value:100,label:`Standard`},{value:125,label:`High`},{value:150,label:`Very High`},{value:175,label:`Ultra`},{value:200,label:`Maximum`}],L=e=>I.reduce((t,n)=>Math.abs(n.value-e)<Math.abs(t-e)?n.value:t,I[0].value),R=()=>{let e=A(`renderingQuality`),t=e===null,n=L(F(e??x().resizeManager.usedDpi));return(0,N.jsxs)(z,{children:[(0,N.jsx)(k,{children:(0,N.jsxs)(E,{children:[(0,N.jsxs)(D,{children:[(0,N.jsx)(T,{children:`Automatic Quality`}),(0,N.jsx)(O,{children:`Automatically adjust graphics quality based on your device's performance`})]}),(0,N.jsx)(c,{checked:t,onChange:e=>{e?ie():w(n/100)},"aria-label":`Auto Graphics`})]})}),t?null:(0,N.jsxs)(k,{children:[(0,N.jsx)(T,{children:`Graphics Quality`}),(0,N.jsx)(O,{children:`Manually adjust the graphics quality`}),(0,N.jsx)(i,{className:`maxWidth`,style:{marginTop:14},value:n,onChange:e=>w(e/100),options:I})]})]})},z=d.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,B=()=>{let e=A(`readToMe`);return(0,N.jsx)(k,{children:(0,N.jsxs)(E,{children:[(0,N.jsxs)(D,{children:[(0,N.jsx)(T,{children:`Read Aloud`}),(0,N.jsx)(O,{children:`Hear questions and answers read aloud`})]}),(0,N.jsx)(c,{checked:e,onChange:e=>v(`readToMe`,e),"aria-label":`Read Aloud`})]})})},V=()=>{let e=A(`largeFontMode`);return(0,N.jsx)(k,{children:(0,N.jsxs)(E,{children:[(0,N.jsxs)(D,{children:[(0,N.jsx)(T,{children:`Large Text`}),(0,N.jsx)(O,{children:`Make question & answer text larger`})]}),(0,N.jsx)(c,{checked:e,onChange:e=>v(`largeFontMode`,e),"aria-label":`Large Text`})]})})},H=()=>{let e=A(`highContrast`);return(0,N.jsx)(k,{children:(0,N.jsxs)(E,{children:[(0,N.jsxs)(D,{children:[(0,N.jsx)(T,{children:`High Contrast`}),(0,N.jsx)(O,{children:`Make question and answer text stand out more`})]}),(0,N.jsx)(c,{checked:e,onChange:e=>v(`highContrast`,e),"aria-label":`Clearer Question Colors`})]})})},U=()=>{let e=A(`lexend`);return M.useEffect(()=>{e&&ne()},[e]),(0,N.jsx)(k,{children:(0,N.jsxs)(E,{children:[(0,N.jsxs)(D,{children:[(0,N.jsx)(T,{children:`Easy-to-Read Font`}),(0,N.jsx)(O,{children:`Use a more readable font for clearer question & answer text`})]}),(0,N.jsx)(c,{checked:e,onChange:e=>v(`lexend`,e),"aria-label":`Easy-to-Read Font`})]})})},W=()=>{let e=A(`teamSymbol`);return(0,N.jsx)(k,{children:(0,N.jsxs)(E,{children:[(0,N.jsxs)(D,{children:[(0,N.jsx)(T,{children:`Team Symbols`}),(0,N.jsx)(O,{children:`Add symbols by player names to help tell teams apart`})]}),(0,N.jsx)(c,{checked:e,onChange:e=>v(`teamSymbol`,e),"aria-label":`Team Symbols`})]})})},G=()=>{let e=A(`simpleCharacters`);return(0,N.jsx)(k,{children:(0,N.jsxs)(E,{children:[(0,N.jsxs)(D,{children:[(0,N.jsx)(T,{children:`Simple Gim Mode`}),(0,N.jsx)(O,{children:`Use a simpler rendering mode of other Gims to improve performance`})]}),(0,N.jsx)(c,{checked:e,onChange:e=>v(`simpleCharacters`,e),"aria-label":`Simpler Characters`})]})})},K=()=>{let e=!A(`otherPlayerTrails`);return(0,N.jsx)(k,{children:(0,N.jsxs)(E,{children:[(0,N.jsxs)(D,{children:[(0,N.jsx)(T,{children:`Hide Other Player Trails`}),(0,N.jsx)(O,{children:`Hide trails behind other players`})]}),(0,N.jsx)(c,{checked:e,onChange:e=>v(`otherPlayerTrails`,!e),"aria-label":`Hide Other Player Trails`})]})})},q=`#00c853`,J=e=>{let t=M.useSyncExternalStore(y,g),i=M.useSyncExternalStore(y,()=>_(`muted`)),{token:{borderRadius:c}}=p.useToken(),l=()=>{e.close(),re()},u=()=>{e.close(),C(b.playerManager)},d=e.showRewards||e.showPlayers;return(0,N.jsx)(n,{theme:{components:{Switch:{colorPrimary:q,colorPrimaryHover:`#00e676`}}},children:(0,N.jsxs)(a,{title:`Settings`,placement:`right`,open:e.open,onClose:e.close,width:450,destroyOnHidden:!1,children:[d?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(ae,{children:[e.showRewards?(0,N.jsxs)(Y,{type:`button`,onClick:l,$borderRadius:c,children:[(0,N.jsx)(X,{children:(0,N.jsx)(`img`,{src:S.iconImage,alt:``})}),(0,N.jsx)(Z,{children:(0,N.jsx)(s.Title,{level:4,children:S.name})})]}):null,e.showPlayers?(0,N.jsxs)(Y,{type:`button`,onClick:u,$borderRadius:c,children:[(0,N.jsx)(X,{children:(0,N.jsx)(`i`,{className:`far fa-users`,"aria-hidden":`true`})}),(0,N.jsxs)(Z,{children:[(0,N.jsx)(s.Title,{level:4,children:`Players`}),(0,N.jsx)(s.Text,{children:`Manage the players in-game`})]})]}):null]}),(0,N.jsx)(m,{})]}):null,(0,N.jsxs)(Q,{children:[(0,N.jsx)($,{level:4,children:`Sound`}),(0,N.jsxs)(o,{direction:`vertical`,size:14,className:`maxWidth`,children:[(0,N.jsx)(P,{}),i?null:(0,N.jsx)(j,{cardLayout:!0})]})]}),(0,N.jsx)(m,{}),(0,N.jsxs)(Q,{children:[(0,N.jsx)($,{level:4,children:`Graphics`}),(0,N.jsxs)(o,{direction:`vertical`,size:14,className:`maxWidth`,children:[(0,N.jsx)(R,{}),(0,N.jsx)(K,{}),(0,N.jsx)(G,{})]})]}),(0,N.jsx)(m,{}),(0,N.jsxs)(Q,{children:[(0,N.jsx)($,{level:4,children:`Accessibility`}),(0,N.jsxs)(o,{direction:`vertical`,size:14,className:`maxWidth`,children:[(0,N.jsx)(B,{}),(0,N.jsx)(W,{}),(0,N.jsx)(V,{}),(0,N.jsx)(H,{}),(0,N.jsx)(U,{})]})]}),t?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(m,{}),(0,N.jsx)(ee,{type:`link`,size:`small`,style:{color:`#FADB14`},onClick:()=>{r.confirm({title:`Reset all settings?`,content:`Reset all settings to their default values.`,okText:`Reset settings`,cancelText:`Cancel`,onOk:h})},children:`Reset settings to default`})]}):null]})})},ae=d.div.attrs({className:`maxWidth`})`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 10px;
`,Y=d.button.attrs({className:`flex vc maxWidth`})`
  gap: 24px;
  padding: 20px 24px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-radius: ${e=>e.$borderRadius}px;
  background: rgba(255, 255, 255, 0.1);
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition: background 0.2s ease-in-out, border-color 0.2s ease-in-out,
    transform 0.1s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.3);
  }

  &:focus-visible {
    outline: none;
    border-color: ${te.Yellow};
  }

  &:active {
    transform: scale(0.99);
  }
`,X=d.div.attrs({className:`flex-center`})`
  width: 40px;
  height: 40px;
  flex: 0 0 40px;

  img,
  i {
    max-width: 40px;
    font-size: 34px;
    text-align: center;
  }

  img {
    max-height: 40px;
    object-fit: contain;
  }
`,Z=d.div`
  min-width: 0;

  .ant-typography {
    margin: 0;
  }

  h4.ant-typography {
    margin-bottom: -1px;
    font-family: ${u.FugazOne};
    font-weight: ${f.Bold};
    font-size: 18px;
    text-transform: uppercase;
  }
`,Q=d.section``,$=d(s.Title)`
  && {
    margin: 0 0 14px;
    font-family: ${u.FugazOne};
    text-transform: uppercase;
  }
`;export{J as default};