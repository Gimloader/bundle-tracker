import{o as e}from"./rolldown-runtime.js";import{C as t,E as n,_ as r,g as i,h as a,k as o,m as s,v as c}from"./utils.js";import{t as l}from"./react-1.js";import{t as u}from"./modal-1.js";import{t as d}from"./spin.js";import"./Paths.js";import{t as f}from"./jsx-runtime.js";import{c as p,l as m,m as h,n as g,s as _}from"./_index.js";import{r as v}from"./mobxreact.esm.js";import{t as y}from"./NavigateTo.js";import{t as b}from"./stores-1.js";import{t as x}from"./TrackEvent.js";var S=e(l()),C=`An error ocurred on our end while upgrading your account. Please contact support.`,w=e=>{b.navigation.loadingTokenSubmit=!0,o({sessionId:e,onSuccess:i()?()=>{let e=c();h({onSuccess:()=>{if(!e){var t;x({event:`upgrade`,properties:{plan:(t=a())==null?void 0:t.type,source:`individual`},forcePostHog:!0})}window.location.href=`/me?from=upgrade`},onError:()=>u.success({title:`Upgraded!`,content:`You have upgraded but must log out and back in first.`,onOk:()=>t({url:`/logout`,both:()=>window.open(`/login`,`_self`)})})})}:()=>{u.success({title:`The purchase has been completed`,onOk:()=>y(`/`)})},onError:e=>{b.navigation.loadingTokenSubmit=!1,n({e,default:{title:`Error ocurred when upgrading account`,content:C}})}})},T=f(),E=v(()=>{let e=s(`session_id`);return S.useEffect(()=>{r()?y(`/me`):e&&w(e)},[]),(0,T.jsx)(D,{children:(0,T.jsx)(O,{children:e?(0,T.jsxs)(`div`,{className:`maxWidth flex hc vc flex-column`,children:[(0,T.jsx)(d,{size:`large`}),i()&&(0,T.jsx)(`div`,{style:{fontSize:23,fontWeight:_.UltraBold},children:`Upgrading your account...`}),(0,T.jsx)(`div`,{style:{fontSize:16},children:`Please don't close this tab`})]}):(u.error({title:`An error ocurred during checkout. Please contact customer support`}),null)})})}),D=m.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,O=m.div.attrs({className:`scroll-y`})`
  background: ${g.White};
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 640px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${p.SFPro};
  color: ${g.Black};
`;export{E as default};