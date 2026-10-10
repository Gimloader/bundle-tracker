import{o as e,r as t}from"./rolldown-runtime.js";import{C as n,E as r,O as i,_ as a,h as o,u as s,v as c,y as l}from"./utils.js";import{t as u}from"./react-1.js";import{a as d}from"./InfoCircleFilled.js";import{t as f}from"./message.js";import{t as p}from"./modal.js";import{t as m}from"./button.js";import{t as ee}from"./input.js";import{t as te}from"./spin.js";import{t as ne}from"./StarOutlined.js";import{t as re}from"./copy-to-clipboard.js";import{n as h}from"./Company.js";import{E as ie,r as ae}from"./Paths.js";import{t as oe}from"./jsx-runtime.js";import{c as g,l as _,n as v,s as y,v as se,y as b}from"./_index.js";import{t as x}from"./AccessibleAnchor.js";import{t as ce}from"./module-1.js";import{t as S}from"./tiny-invariant.js";import"./TrackPostHogEvent.js";import{c as le,i as C,t as ue}from"./price.js";import{t as w}from"./motion.js";import{t as T}from"./Sizes.js";var E={titleFont:g.FugazOne},D=e(u()),O=new Map([[`Win`,`Meta`],[`Scroll`,`ScrollLock`],[`Spacebar`,` `],[`Down`,`ArrowDown`],[`Left`,`ArrowLeft`],[`Right`,`ArrowRight`],[`Up`,`ArrowUp`],[`Del`,`Delete`],[`Crsel`,`CrSel`],[`Exsel`,`ExSel`],[`Apps`,`ContextMenu`],[`Esc`,`Escape`],[`Decimal`,`.`],[`Multiply`,`*`],[`Add`,`+`],[`Subtract`,`-`],[`Divide`,`/`]]),de=function(e){if(O.has(e.key)){var t=O.get(e.key);Object.defineProperty(e,"key",{configurable:!0,enumerable:!0,get:function(){return t}})}},k=function(e,t){!(Array.isArray(e)||typeof e==`string`)&&S(!1),Array.isArray(e)&&e.forEach(function(e,t){typeof e!=`string`&&S(!1)}),typeof t!=`function`&&t!=null&&S(!1);var n=(0,D.useRef)();(0,D.useEffect)(function(){n.current=function(n){de(n),(Array.isArray(e)?e.includes(n.key):e===n.key)&&(t==null||t(n))}},[e,t]),(0,D.useEffect)(function(){var e=function(e){n.current(e)};return window.addEventListener(`keydown`,e),function(){window.removeEventListener(`keydown`,e)}},[])},A=function(e){return e.limitedModes=`limitedModes`,e.limitedGames=`limitedGames`,e}({}),j=()=>`limitedModes`,M=()=>5,N=oe(),P=.2,F=e=>{let[t,n,r]=i(!1),o=j(),s=D.useMemo(()=>e.isProExperience&&!a()&&o===A.limitedModes&&!c(),[e.isProExperience,o]);return(0,N.jsxs)(I,{onMouseEnter:n,onMouseLeave:r,style:{backgroundImage:`url('${e.image}')`,borderColor:e.currentlySelected?`#fdd835`:v.White},onClick:e.onSelect,className:e.noShadowOnContainer?``:`light-shadow`,children:[e.forcePremiumBadge||s?(0,N.jsx)(L,{animate:{opacity:+!t},initial:{opacity:1},transition:{duration:P},children:(0,N.jsx)(R,{})}):(0,N.jsx)(`div`,{}),(0,N.jsxs)(z,{children:[s?(0,N.jsx)(B,{animate:{opacity:+!t},initial:{opacity:1},transition:{duration:P},children:`Gimkit Pro Exclusive`}):null,!s&&e.tag?(0,N.jsx)(V,{animate:{opacity:+!t},initial:{opacity:1},transition:{duration:P},children:e.tag}):null,(0,N.jsx)(H,{children:e.name}),(0,N.jsx)(fe,{animate:{height:t?`auto`:0},initial:{height:0},transition:{duration:P},children:e.tagline})]})]})},I=_.div.attrs({className:`flex flex-column between`})`
  border-width: 4px;
  border-style: solid;
  width: ${350}px;
  height: 180px;
  border-radius: 4px;
  background-image: url('');
  background-size: cover;
  background-position: center;
  align-items: flex-end;
  flex-shrink: 0;
  cursor: pointer;
  transition: border-color 0.3s;
`,L=_(w.div).attrs({className:`maxWidth`})`
  padding: 10px 15px;
`,R=_.img.attrs({src:`/client/img/pro/star.svg`})`
  height: 20px;
`,z=_.div.attrs({className:`maxWidth flex-column`})`
  padding: 10px 15px;
  background: linear-gradient(
    to top,
    hsla(0, 0%, 0%, 0.69) 0%,
    hsla(0, 0%, 0%, 0.681) 8.1%,
    hsla(0, 0%, 0%, 0.656) 15.5%,
    hsla(0, 0%, 0%, 0.618) 22.4%,
    hsla(0, 0%, 0%, 0.569) 28.9%,
    hsla(0, 0%, 0%, 0.511) 35%,
    hsla(0, 0%, 0%, 0.447) 41%,
    hsla(0, 0%, 0%, 0.379) 46.7%,
    hsla(0, 0%, 0%, 0.311) 52.5%,
    hsla(0, 0%, 0%, 0.243) 58.3%,
    hsla(0, 0%, 0%, 0.179) 64.3%,
    hsla(0, 0%, 0%, 0.121) 70.5%,
    hsla(0, 0%, 0%, 0.072) 77.1%,
    hsla(0, 0%, 0%, 0.034) 84.2%,
    hsla(0, 0%, 0%, 0.009) 91.8%,
    hsla(0, 0%, 0%, 0) 100%
  );
  overflow: hidden;
  align-items: flex-start;
`,B=_(w.div)`
  font-family: ${E.titleFont};
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: -2px;
  text-shadow: 1px 1px 1px ${v.Black};
  color: ${v.White};
`,V=_(w.div)`
  font-family: ${E.titleFont};
  text-transform: uppercase;
  background: rgba(255, 87, 34, 0.8);
  padding: 7px 10px;
  font-size: 11px;
  line-height: 1;
  border-radius: 10px;
  margin-bottom: 4px;
`,H=_.div`
  font-family: ${E.titleFont};
  text-transform: uppercase;
  font-size: 22px;
  text-shadow: 2px 2px 2px ${v.Black};
  color: ${v.White};
`,fe=_(w.div)`
  font-size: 14px;
  text-shadow: 1px 1px 1px ${v.Black};
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1px;
  overflow: hidden;
  font-family: ${g.ProductSans};
`,U=e=>{let[t,n]=D.useState(0),r=D.useRef(!1),i=D.useRef(null),[a]=ce(i),o=D.useMemo(()=>e.verticalList?0:t*360*-1+T.sideMargin,[t,e.verticalList]),s=D.useMemo(()=>!(t<=0),[t]),c=()=>{r.current=!0},l=()=>{r.current=!1};k([`ArrowLeft`,`ArrowRight`],e=>{r.current&&(e.key===`ArrowLeft`&&d(),e.key===`ArrowRight`&&f())});let u=D.useMemo(()=>{if(t+1===e.list.items.length)return!1;let n=(a-T.sideMargin)/360;return!(t>=e.list.items.length-n)},[a,t,e.list.items.length]),d=()=>{s&&n(Math.max(0,t-1))},f=()=>{u&&n(t+1)};return(0,N.jsxs)(pe,{onMouseEnter:c,onMouseLeave:l,children:[e.hideListName?null:(0,N.jsx)(me,{children:e.list.name}),(0,N.jsxs)(he,{children:[(0,N.jsx)(ge,{animate:{x:o},initial:{x:e.verticalList?0:T.sideMargin},transition:{duration:.3,ease:`easeOut`},style:e.verticalList?{display:`grid`,gridTemplateColumns:`repeat(auto-fill, 350px)`,justifyContent:`center`,gap:20,margin:`0px 25px`}:{gap:10},ref:i,children:e.list.items.map(t=>(0,N.jsx)(F,{name:t.name,tagline:t.tagline,image:t.imageUrl,currentlySelected:e.forceAllSelected?!0:e.currentlySelectedExperienceId===t._id,onSelect:e.onExperienceSelected?()=>e.onExperienceSelected(t._id):null,isProExperience:t.isPremiumExperience,noShadowOnContainer:e.noShadowOnItems,forcePremiumBadge:e.forcePremiumBadge,tag:t.tag},`list-${e.list._id}-${t._id}`))}),e.verticalList?null:(0,N.jsxs)(_e,{children:[(0,N.jsx)(ve,{animate:{opacity:+!!s},initial:{opacity:0},onClick:d,children:(0,N.jsx)(G,{style:{cursor:s?`pointer`:`auto`},children:(0,N.jsx)(`i`,{className:`fas fa-chevron-left`})})}),(0,N.jsx)(ye,{animate:{opacity:+!!u},initial:{opacity:0},onClick:f,children:(0,N.jsx)(G,{style:{cursor:u?`pointer`:`auto`},children:(0,N.jsx)(`i`,{className:`fas fa-chevron-right`})})})]})]})]})},pe=_.div.attrs({className:`maxWidth`})``,me=_.div`
  font-family: ${E.titleFont};
  text-align: center;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
`,he=_.div.attrs({className:`maxWidth`})`
  position: relative;
  overflow: hidden;
`,ge=_(w.div).attrs({className:`flex`})``,_e=_.div.attrs({className:`maxAll flex vc between`})`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`,W=_(w.div).attrs({className:`flex-center maxHeight`})`
  width: 60px;
  line-height: 1;
  color: ${v.White};
`,ve=_(W)`
  background: linear-gradient(
    to right,
    hsla(0, 0%, 0%, 0.61) 0%,
    hsla(0, 0%, 0%, 0.603) 8.3%,
    hsla(0, 0%, 0%, 0.583) 16.2%,
    hsla(0, 0%, 0%, 0.551) 23.9%,
    hsla(0, 0%, 0%, 0.511) 31.4%,
    hsla(0, 0%, 0%, 0.463) 38.6%,
    hsla(0, 0%, 0%, 0.409) 45.6%,
    hsla(0, 0%, 0%, 0.352) 52.3%,
    hsla(0, 0%, 0%, 0.294) 58.9%,
    hsla(0, 0%, 0%, 0.236) 65.2%,
    hsla(0, 0%, 0%, 0.18) 71.4%,
    hsla(0, 0%, 0%, 0.128) 77.4%,
    hsla(0, 0%, 0%, 0.082) 83.3%,
    hsla(0, 0%, 0%, 0.044) 89%,
    hsla(0, 0%, 0%, 0.016) 94.5%,
    hsla(0, 0%, 0%, 0) 100%
  );
`,ye=_(W)`
  background: linear-gradient(
    to left,
    hsla(0, 0%, 0%, 0.61) 0%,
    hsla(0, 0%, 0%, 0.603) 8.3%,
    hsla(0, 0%, 0%, 0.583) 16.2%,
    hsla(0, 0%, 0%, 0.551) 23.9%,
    hsla(0, 0%, 0%, 0.511) 31.4%,
    hsla(0, 0%, 0%, 0.463) 38.6%,
    hsla(0, 0%, 0%, 0.409) 45.6%,
    hsla(0, 0%, 0%, 0.352) 52.3%,
    hsla(0, 0%, 0%, 0.294) 58.9%,
    hsla(0, 0%, 0%, 0.236) 65.2%,
    hsla(0, 0%, 0%, 0.18) 71.4%,
    hsla(0, 0%, 0%, 0.128) 77.4%,
    hsla(0, 0%, 0%, 0.082) 83.3%,
    hsla(0, 0%, 0%, 0.044) 89%,
    hsla(0, 0%, 0%, 0.016) 94.5%,
    hsla(0, 0%, 0%, 0) 100%
  );
`,G=_.div.attrs({className:`flex-center`})`
  font-size: 32px;
  pointer-events: all;
  will-change: transform;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`,be=[{question:`What happens if I pay now and my school pays later?`,answer:(0,N.jsxs)(`span`,{children:[`If your school purchases a group license and you've already purchased Gimkit Pro, you’ll get refunded for your unused time.`,` `,(0,N.jsx)(`b`,{children:`So if you purchase a year of Gimkit Pro today and your school upgrades next month, we’d refund you $54.89.`}),` `,`That refund happens automatically. No need to contact support!`]})},{question:`What's included with Gimkit Pro?`,answer:(0,N.jsxs)(`span`,{children:[j()===A.limitedModes?`Unrestricted access to all modes, including Gimkit Pro Exclusives.`:`No game limits, host as many games as you'd like!`,` `,`You'll also be able to create assignments (play Gimkit asynchronously) and upload audio + images to your questions.`]})},{question:`What's your refund policy?`,answer:(0,N.jsxs)(`span`,{children:[`Bad refund policies are infuriating. You feel like the company is just trying to rip you off. We never want our customers to feel that way, so our refund policy is simple: If you’re ever unhappy with your subscription for any reason, just contact us and we’ll take care of you.`,` `,(0,N.jsx)(`a`,{href:`https://www.notion.so/gimkit/A-fair-refund-policy-a1688f61330b49a495a48bd0fd08697b`,target:`_blank`,children:`Check out our full refund policy here.`})]})}],xe=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(b,{style:{margin:`26px 0px`}}),(0,N.jsx)(Se,{children:be.map(e=>(0,N.jsxs)(Ce,{children:[(0,N.jsx)(we,{children:e.question}),(0,N.jsx)(Te,{children:e.answer})]},e.question))})]}),Se=_.div.attrs({className:`maxWidth`})`
  padding: 0px ${()=>Q}px;
`,Ce=_.div`
  margin-bottom: 15px;
  background: ${v.White};
  padding: 30px;
  border-radius: 6px;
  border-style: solid;
  border-color: ${v.BorderGray};
  border-width: 2px;
  &:last-child {
    margin-bottom: 0px;
  }
`,we=_.div`
  font-size: 21px;
  font-weight: ${y.Bold};
`,Te=_.div`
  font-size: 16px;
  margin-top: 5px;
`,Ee=e(re()),De=e=>{let[t,i]=D.useState(!0),[a,o]=D.useState(null),[c,l]=D.useState(null),u=()=>`${s()}/pay-for-me/${c}`;return D.useEffect(()=>{n({method:`GET`,url:`/api/billing/pay-for-me-link`,success:e=>{l(e)},error:e=>{o(e),r({e,default:{title:`Error connecting to our server`,content:`An error ocurred while connecting to our server. Please try again later.`}})},both:()=>i(!1)})},[]),(0,N.jsx)(p,{open:e.showPayForMeModal,onCancel:e.onCancel,footer:null,closable:!1,width:690,bodyStyle:{padding:0},children:t?(0,N.jsx)(`div`,{style:{height:361},className:`flex maxWidth maxHeight hc vc`,children:(0,N.jsx)(te,{size:`large`})}):(0,N.jsxs)(Oe,{children:[(0,N.jsx)(je,{onClick:e.onCancel}),(0,N.jsxs)(ke,{children:[(0,N.jsx)(`span`,{style:{fontWeight:y.UltraBold},children:`Pay For Me`}),` `,`link`]}),(0,N.jsxs)(Ae,{children:[`Send this link to someone to allow them to pay for your`,` `,h,` Pro subscription. Once they pay, you'll get one full year of `,h,` Pro and we'll make sure autorenew is off so they aren't charged again.`,(0,N.jsx)(`br`,{}),` `,(0,N.jsx)(`br`,{}),`One more thing: once they pay for your subscription, we'll send you an email letting you know!`]}),(0,N.jsx)(b,{}),!a&&(0,N.jsxs)(`div`,{className:`flex`,children:[(0,N.jsx)(ee,{value:u(),size:`large`,readOnly:!0}),(0,N.jsx)(m,{size:`large`,type:`primary`,style:{marginLeft:10},onClick:()=>{(0,Ee.default)(u()),f.success(`Pay For Me link copied to clipboard!`)},children:`Copy Link`})]})]})})},Oe=_.div.attrs({className:`maxWidth`})`
  color: ${v.Black};
  font-family: ${g.SFPro};
  padding: 30px;
`,ke=_.div`
  font-size: 32px;
`,Ae=_.div`
  font-size: 17px;
  margin-top: 14px;
`,je=_.i.attrs({className:`fal fa-times`})`
  position: absolute;
  font-size: 24px;
  top: 30px;
  right: 30px;
  opacity: 0.8;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`,Me=e=>{let[t,n]=D.useState(!1),[r,i]=D.useState(!1);return(0,N.jsxs)(`div`,{className:`flex flex-column vc`,style:{marginTop:e.showingModes?25:20,paddingBottom:30},children:[(0,N.jsx)(x,{to:ae,children:(0,N.jsx)(m,{type:`primary`,size:`large`,icon:(0,N.jsx)(ne,{}),style:{width:380,height:70},children:c()?`Upgrade to Gimkit Pro early`:`Upgrade to Gimkit Pro`})}),le()?(0,N.jsxs)(Ne,{children:[ue({simple:!0,roundUp:!0}),` a year - works out to `,C({simple:!0}),` a month`]}):null,(0,N.jsx)(b,{style:{margin:`26px 0px`}}),(0,N.jsxs)(`div`,{className:`flex vc`,children:[(0,N.jsx)(K,{to:ie,children:`Group license pricing`}),(0,N.jsx)(q,{}),(0,N.jsx)(K,{onClick:()=>i(!0),children:`Pay For Me Link`}),!t&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(q,{}),(0,N.jsx)(K,{onClick:()=>n(!0),children:`FAQ`})]})]}),t&&(0,N.jsx)(xe,{}),(0,N.jsx)(De,{showPayForMeModal:r,onCancel:()=>i(!1)})]})},Ne=_.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 12px;
`,K=_(x)`
  font-size: 16px;
  display: block;
  color: ${v.Black};
  text-decoration: underline;
`,q=_.i.attrs({className:`fas fa-circle`})`
  margin: 0px 12px;
  font-size: 10px;
`,J=e=>{let{copy:t}=e;return(0,N.jsxs)(Pe,{background:e.showingModes?`#0A2540`:`transparent`,color:e.showingModes?v.White:v.Black,bottomPadding:e.showingModes?180:0,maskImage:!!e.showingModes,children:[(0,N.jsx)(Y,{onClick:e.close}),(0,N.jsxs)(Fe,{children:[(0,N.jsx)(Ie,{children:t&&t.title?t.title:c()?(0,N.jsx)(N.Fragment,{children:`Your trial ends soon.`}):j()===A.limitedGames?(0,N.jsx)(N.Fragment,{children:`Upgrade to host unlimited games`}):(0,N.jsxs)(`div`,{style:{fontSize:40,marginTop:30},children:[`Get all game modes for `,C({simple:!0}),` a month.`]})}),(0,N.jsx)(Le,{style:{marginTop:e.showingModes?10:5},children:(()=>{if(t&&t.description)return t.description;let e=j(),n=e===A.limitedModes?`a few game modes that rotate every few weeks`:`host ${M()} games per month`;return(0,N.jsxs)(`div`,{className:`maxWidth`,style:{textAlign:`left`},children:[c()?`After your Pro trial ends, you'll be placed on our free plan. Under the free plan, you're limited to ${n}.`:`You're on the free version of Gimkit, which limits you to ${n}.`,(0,N.jsx)(`br`,{}),` `,(0,N.jsx)(`br`,{}),e===A.limitedModes?`Want access to every single mode?`:`Want to host unlimited games?`,` `,`Upgrade to Gimkit Pro! It’s just`,` `,C({simple:!0}),` a month and you’ll be helping support us, an independent small business.`,e===A.limitedModes?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`br`,{}),` `,(0,N.jsx)(`br`,{}),`Upgrade to get access to these game modes and more:`]}):null]})})()})]})]})},Pe=_.div.attrs({className:`maxWidth flex flex-column vc`})`
  padding: ${()=>Q}px 0px;
  padding-top: 30px;
  background: ${e=>e.background};
  color: ${e=>e.color};
  text-align: center;
  padding-bottom: ${e=>e.bottomPadding}px;
  ${e=>e.maskImage?`mask-image: linear-gradient(
    to bottom,
    ${e.background} 50%,
    transparent 100%);`:``}
`,Y=_.i.attrs({className:`fal fa-times`})`
  position: absolute;
  font-size: 24px;
  top: 25px;
  right: ${()=>Q}px;
  opacity: 0.8;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`,Fe=_.div.attrs({className:`maxWidth`})`
  padding: 0px ${()=>Q}px;
`,Ie=_.div`
  font-size: 42px;
  font-weight: ${y.UltraBold};
`,Le=_.div`
  font-size: 20px;
`,X={Classic:1},Re=()=>{let[e,t]=D.useState([]);return D.useEffect(()=>{n({url:`/api/experiences`,data:{mode:`liveGame`},cacheKey:`EXPERIENCES`,success:e=>{let n=[],r=[],i=e.every(e=>e.items.every(e=>!e.isPremiumExperience));e.forEach(e=>{e.items.forEach(e=>{(e.isPremiumExperience||i)&&(r.includes(e._id)||(n.push({...e,isPremiumExperience:!0}),r.push(e._id)))})}),Object.keys(X).forEach(e=>{let t=X[e],r=n.find(t=>t.name===e);r&&(n=n.filter(t=>t.name!==e),n.splice(t,0,r))}),t(n)}})},[]),e.length?(0,N.jsx)(Z,{children:(0,N.jsx)(U,{list:{_id:`_`,name:`_`,items:e},hideListName:!0,noShadowOnItems:!0,forceAllSelected:!0,forcePremiumBadge:!0})}):(0,N.jsx)(Z,{children:(0,N.jsx)(`div`,{style:{height:180}})})},Z=_.div.attrs({className:`maxWidth`})`
  margin-top: ${()=>-155}px;
`,ze=t({PADDING:()=>Q,default:()=>$}),Q=T.sideMargin,$=e=>{D.useEffect(()=>{e.visible&&e.showModes&&l(`https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap`)},[e.visible,e.showModes]),D.useEffect(()=>{e.visible&&e.id},[e.visible,e.id]);let t=o();if(!t)return null;let n=j(),r=e.showModes&&n===A.limitedModes;return(0,N.jsx)(d,{theme:{algorithm:se.defaultAlgorithm},children:(0,N.jsx)(p,{footer:null,width:850,style:{top:30},styles:{content:{padding:0,borderRadius:10,overflow:`hidden`},body:{padding:0,color:v.Snow}},open:e.visible,onCancel:e.close,closable:!1,children:(0,N.jsxs)(Be,{children:[(0,N.jsx)(J,{user:t,close:e.close,copy:e.copy,showingModes:r}),r?(0,N.jsx)(Re,{}):null,(0,N.jsx)(Me,{showingModes:r})]})})})},Be=_.div.attrs({className:`maxWidth`})`
  color: ${v.Black};
  font-family: ${g.SFPro};
`;export{A as a,k as c,U as i,E as l,$ as n,j as o,J as r,M as s,ze as t};