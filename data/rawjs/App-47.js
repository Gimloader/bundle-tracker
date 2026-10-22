import{o as e}from"./rolldown-runtime.js";import{E as t,O as n,g as r,h as i,k as a,m as o,t as s,u as c,y as l,z as u}from"./utils.js";import{t as d}from"./react-1.js";import{l as f}from"./dist-3.js";import{t as p}from"./message.js";import{t as m}from"./button-1.js";import{t as ee}from"./input.js";import{t as h}from"./space.js";import{t as te}from"./StarOutlined.js";import{t as ne}from"./copy-to-clipboard.js";import{d as g}from"./Paths.js";import{t as _}from"./jsx-runtime.js";import{a as v,c as y,l as b,m as x,n as S,s as C}from"./_index.js";import{t as w}from"./AccessibleAnchor.js";import{t as T}from"./stripe.esm.js";import{t as E}from"./Centered.js";import{n as D,t as O}from"./SeasonTicketName.js";import{t as k}from"./CircularProgress.js";import{t as A}from"./Button-2.js";import{n as j,r as M,t as N}from"./Benefits.js";import{t as P}from"./AnimatedBackground-2.js";import{n as F,r as I,t as L}from"./RedirectToHomepage.js";import{t as R}from"./react-2.js";var z=e(d()),B=_(),V=e=>{let[r,i,a]=n(!1),{info:o}=e,{id:s}=f(),c=!o.linkId&&o.firstName,l=e=>{t({e,default:{title:`There was an error connecting with our payments provider.`,content:`Please try again.`}}),a()};return(0,B.jsxs)(H,{children:[(0,B.jsxs)(h,{direction:`vertical`,size:12,style:{fontFamily:y.SFPro,fontSize:16},children:[c?(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)(U,{children:[`You are purchasing a Gimkit `,O.name,` for`,` `,(0,B.jsxs)(`b`,{children:[o.firstName,`.`]})]})}):null,(0,B.jsxs)(U,{children:[`The `,O.name,` is not a subscription.`,` `,(0,B.jsx)(`b`,{children:`You will only be charged once.`})]}),(0,B.jsxs)(U,{children:[`Includes access to all the `,O.name,` benefits until the end of the season on `,j,`.`]})]}),(0,B.jsxs)(m,{style:{height:65,marginTop:15},size:`large`,block:!0,icon:(0,B.jsx)(te,{}),type:`primary`,loading:r,onClick:()=>{i(),u({url:`/api/billing/stripe-key`,success:async e=>{let t;t=await T(e.key),u({url:`/api/billing/create-season-ticket-session`,method:`POST`,data:s?{encryptedUserId:s}:void 0,success:async e=>{await t.redirectToCheckout({sessionId:e.id}).catch(e=>l(e))},error:e=>{l(e)}})},error:e=>{l(e)}})},children:[`Purchase `,O.name,` - $5.00`]})]})},H=b.div``,U=b.div``,W=e(ne()),G=e=>{let t=`${c()}/season-ticket/${e.info.linkId}`;return(0,B.jsxs)(K,{children:[(0,B.jsxs)(`div`,{children:[`Need somebody else to pay for your `,O.singularName,`? Send this link to them and they can purchase the `,O.name,` for you!`]}),(0,B.jsxs)(`div`,{className:`flex vc`,style:{gap:6,marginTop:12},children:[(0,B.jsx)(ee,{value:t,readOnly:!0}),(0,B.jsx)(m,{onClick:()=>{(0,W.default)(t),p.success(`Link copied to clipboard!`)},type:`primary`,children:`Copy Link`})]})]})},K=b.div`
  font-size: 15px;
`,q=e=>{let t=!e.info.linkId&&e.info.firstName;return(0,B.jsx)(J,{children:(0,B.jsxs)(h,{direction:`vertical`,size:20,className:`maxWidth`,children:[(0,B.jsx)(Y,{children:(0,B.jsx)(V,{info:e.info})}),t?null:(0,B.jsx)(Y,{children:(0,B.jsx)(G,{info:e.info})})]})})},J=b.div`
  max-width: 440px;
  position: sticky;
  top: 20px;
  @media (max-width: 820px) {
    position: relative;
    max-width: 100%;
    width: 100%;
  }
`,Y=b.div.attrs({className:`medium-shadow`})`
  box-shadow: -13px 2px 54px 1px rgba(0, 0, 0, 0.41);
  background: rgba(255, 255, 255, 0.98);
  color: ${S.Black};
  padding: 35px;
  border-radius: 8px;
`,X=()=>(0,B.jsxs)(Z,{children:[(0,B.jsxs)(re,{children:[D.seasonName,` `,D.seasonNumber]}),(0,B.jsx)(ie,{children:O.name})]}),Z=b.div`
  font-family: ${y.FugazOne};
  text-transform: uppercase;
  @media (max-width: 820px) {
    text-align: center;
  }
`,re=b.div`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 820px) {
    font-size: 18px;
  }
`,ie=b.div`
  font-size: 48px;
  margin-top: -12px;
  @media (max-width: 820px) {
    font-size: 40px;
    margin-top: -8px;
  }
`,ae=e=>{let t=!e.info.linkId&&e.info.firstName;return(0,B.jsxs)(oe,{children:[(0,B.jsx)(se,{className:`flex-center`,children:(0,B.jsx)(w,{to:L(),children:(0,B.jsx)(ce,{src:`/client/img/svgLogoWhite.svg`})})}),(0,B.jsx)(Q,{children:(0,B.jsx)(X,{})}),(0,B.jsxs)(le,{children:[(0,B.jsx)(`div`,{children:(0,B.jsx)(N,{forSelf:!t})}),(0,B.jsx)(q,{info:e.info})]})]})},oe=b.div.attrs({className:`maxWidth flex-column vc`})`
  padding: 35px;
  @media (max-width: 820px) {
    padding: 36px 16px;
  }
`,se=b.div`
  margin-bottom: 30px;
`,ce=b.img`
  height: 36px;
  opacity: 0.9;
  @media (max-width: 820px) {
    height: 26px;
  }
`,Q=b.div`
  width: 100%;
  max-width: 1200px;
`,le=b(Q).attrs({className:`flex`})`
  margin-top: 20px;
  align-items: flex-start;
  gap: 30px;
  @media (max-width: 820px) {
    flex-direction: column-reverse;
    gap: 40px;
    margin-top: 10px;
  }
`,ue=R(),de={intensity:13,acceleration:1.01,brightness:{min:50,max:80},autoresize:!0,flickering:0,traceSpeed:1,explosion:5,particles:60,rocketsPoint:{min:0,max:100}},fe={width:`100%`,height:`100%`},pe=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches?null:(0,B.jsx)(me,{children:(0,B.jsx)(ue.Fireworks,{options:de,style:fe})}),me=b.div.attrs({className:`maxWidth maxHeight`})`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`,he=e=>(z.useEffect(()=>{var t;e.boughtForSelf&&r()&&!((t=i())!=null&&(t=t.seasonTicket)!=null&&t.viewed)&&x({})},[e.boughtForSelf]),(0,B.jsxs)(ge,{children:[(0,B.jsx)(_e,{children:(0,B.jsxs)(ve,{children:[(0,B.jsx)(ye,{children:(0,B.jsx)(be,{src:M})}),(0,B.jsxs)($,{children:[(0,B.jsxs)(`div`,{style:{fontFamily:y.FugazOne,textTransform:`uppercase`},children:[(0,B.jsx)(xe,{children:O.name}),(0,B.jsxs)(Se,{children:[e.hasSessionId?`Purchased`:`Activated`,`!`]})]}),(0,B.jsx)(Ce,{children:e.boughtForSelf?(0,B.jsx)(B.Fragment,{children:`Enjoy exclusive cosmetics, increased XP limits, additional creative slots, and more!`}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`b`,{children:e.info.firstName}),` now has access to all Season Ticket benefits. Thanks for your support!`]})}),r()?(0,B.jsx)(`div`,{style:{marginTop:25},children:(0,B.jsx)(w,{to:g+`/locker`,style:{textDecoration:`none`},children:(0,B.jsx)(A,{type:`success`,customFontWeight:C.Bold,ariaLabel:`Continue`,children:`Continue`})})}):null]})]})}),(0,B.jsx)(pe,{})]})),ge=b(E).attrs({className:`maxAll`})`
  padding: 40px;
  position: relative;
  overflow-x: hidden;
  @media (max-width: 820px) {
    padding: 40px 20px;
  }
`,_e=b.div.attrs({className:`animated bounceIn`})`
  width: 100%;
  max-width: 900px;
  z-index: 1;
`,ve=b(E)`
  gap: 50px;
  @media (max-width: 820px) {
    flex-direction: column;
    gap: 20px;
  }
`,ye=b.div``,be=b.img`
  height: 170px;
  @media (max-width: 820px) {
    height: 120px;
  }
  transform: rotate(351deg);
`,$=b.div``,xe=b.div`
  font-size: 28px;
  color: rgba(255, 255, 255, 0.92);
  @media (max-width: 820px) {
    font-size: 22px;
  }
`,Se=b.div`
  font-size: 64px;
  margin-top: -15px;
  @media (max-width: 820px) {
    font-size: 38px;
    margin-top: -10px;
  }
`,Ce=b.div`
  font-size: 18px;
  max-width: 400px;
`,we=()=>{let[e,n]=z.useState(null),i=o(`session_id`),[c,d]=z.useState(!!i),{id:p}=f();v(()=>{l(`https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap`)});let m=()=>{r()||p?u({url:p?`/api/billing/season-ticket/info/${p}`:`/api/billing/season-ticket/info`,success:e=>n(e),error:e=>t({e,default:{title:`Error loading season ticket info`,content:`Please refresh and try again.`},onOk:F})}):I()};return v(()=>{i?a({sessionId:i,onSuccess:()=>{d(!1),m()},onError:e=>{t({e,default:{title:`Error completion purchase`,content:`Refresh and try again. If the issue persists, please contact support.`},onOk:F})}}):m()}),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(s,{title:O.name}),(0,B.jsx)(Te,{children:(0,B.jsx)(P,{children:!e||c?(0,B.jsx)(E,{className:`maxAll`,children:(0,B.jsx)(k,{style:{color:S.White}})}):e.hasSeasonTicket?(0,B.jsx)(he,{info:e,hasSessionId:!!i,boughtForSelf:!p}):(0,B.jsx)(ae,{info:e})})})]})},Te=b.div`
  flex: 1;
  color: ${S.White};
`;export{we as default};