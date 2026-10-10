import"./rolldown-runtime.js";import{g as e,t}from"./utils.js";import{t as n}from"./react-1.js";import{t as r}from"./card.js";import{t as i}from"./App-4.js";import{r as a}from"./Paths.js";import{t as o}from"./jsx-runtime.js";import{c as s,l as c,n as l,s as u,y as d}from"./_index.js";import{t as f}from"./AccessibleAnchor.js";n();var p=o(),m=[`Simple and transparent pricing.`,`No quote forms asking a million things.`,`No calls with the sales team.`],h=()=>(0,p.jsx)(r,{style:{color:l.Black,textAlign:`left`},children:m.map(e=>(0,p.jsx)(g,{children:e},e))}),g=c.div`
  font-size: 23px;
  font-weight: ${u.Bold};
`,_=c.div`
  background: ${e=>e.background||`#101da5`};
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  color: ${l.White};
  font-family: ${s.SFPro};
  text-align: left;
  transition: all 0.25s;
  &:hover {
    transform: scale(1.04);
  }
`,v=t=>{let n=t.size==`large`,r={imageHeight:n?14:10,planNameFontSize:n?48:30,planNameMarginTop:n?5:7,planNameLineHeight:n?`35px`:`17px`,priceFontSize:n?37:24,priceDescriptionFontSize:n?11:9,priceDescriptionMarginTop:n?-9:-7},i=e()&&t.plan.id?a:t.plan.link;return(0,p.jsx)(f,{to:i,className:`maxWidth`,onClick:t.onClick,style:{textDecoration:`none`},children:(0,p.jsx)(_,{background:t.plan.background,children:(0,p.jsxs)(`div`,{className:`flex flex-wrap vc`,style:{justifyContent:`space-between`},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`img`,{src:`/client/img/svgLogoWhite.svg`,style:{opacity:.7,height:r.imageHeight}}),(0,p.jsx)(`div`,{style:{fontWeight:u.UltraBold,fontSize:r.planNameFontSize,marginTop:r.planNameMarginTop,lineHeight:r.planNameLineHeight},children:t.plan.name})]}),(0,p.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,p.jsx)(`div`,{style:{fontSize:r.priceFontSize,fontWeight:u.UltraBold},children:t.plan.price}),t.plan.description&&(0,p.jsx)(`div`,{style:{fontSize:r.priceDescriptionFontSize,opacity:.7,marginTop:r.priceDescriptionMarginTop},children:t.plan.description})]})]})})})},y={name:`Department`,price:`$650`,description:(0,p.jsx)(`span`,{style:{fontSize:16},children:`per year, Pro for 20 teachers`}),background:`#311b92`,link:`/quote/new/department-1`},b={name:`School`,price:`$1,000`,description:(0,p.jsx)(`span`,{style:{fontSize:16},children:`per year, Pro for every teacher at your school`}),background:`#2e7d32`,link:`/quote/new/school-1`},x=()=>(0,p.jsxs)(`div`,{className:`flex vc maxWidth hc flex-column`,style:{marginTop:35},children:[(0,p.jsx)(`img`,{src:`/client/img/svgLogo.svg`,style:{height:36,opacity:.86}}),(0,p.jsx)(`div`,{style:{fontSize:83,marginTop:-28,fontWeight:u.UltraBold},children:`Groups`})]}),S=e=>(0,p.jsxs)(`div`,{className:`flex vc`,style:{margin:10},children:[(0,p.jsx)(`div`,{style:{marginRight:7,fontSize:25},children:e.good?(0,p.jsx)(`i`,{className:`fad fa-check-circle`,style:{color:`green`}}):(0,p.jsx)(`i`,{className:`fad fa-times-circle`,style:{color:`red`}})}),(0,p.jsx)(`div`,{children:e.text})]}),C=e=>(0,p.jsx)(w,{className:`flex maxWidth wrap vc hc`,children:e.features.map(e=>(0,p.jsx)(S,{good:e.good,text:e.text},`feat-${e.good}-${e.text}`))}),w=c.div`
  text-align: left;
  font-size: 17px;
`,T={width:`calc(100% - 10px)`,color:l.Black,textAlign:`center`,fontFamily:s.SFPro,fontSize:25,fontWeight:u.Bold,cursor:`pointer`},E=()=>(0,p.jsxs)(`div`,{className:`maxWidth flex`,children:[(0,p.jsx)(r,{onClick:()=>window.open(`https://help.gimkit.com/en/category/group-subscriptions-3m7198/`),style:T,hoverable:!0,children:`FAQ`}),(0,p.jsx)(`div`,{style:{width:20}}),(0,p.jsx)(r,{onClick:()=>window.open(`mailto:groups@gimkit.com`,`_self`),style:T,hoverable:!0,children:`Ask a question`})]}),D=[`Payment with purchase order`,`Payment with credit/debit card`,`Group admin panel`,`Discounted pricing`],O=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t,{title:`Group Pricing`}),(0,p.jsxs)(k,{children:[(0,p.jsx)(i,{includeSpacer:!0}),(0,p.jsxs)(A,{style:{maxWidth:700},children:[(0,p.jsx)(x,{}),(0,p.jsx)(h,{}),(0,p.jsx)(`div`,{style:{height:20}}),(0,p.jsx)(C,{features:D.map(e=>({good:!0,text:e}))}),(0,p.jsx)(`div`,{style:{height:20}}),(0,p.jsx)(d,{children:(0,p.jsx)(`div`,{style:{fontSize:23},children:`Choose a plan to get a quote`})}),(0,p.jsx)(v,{plan:b,size:`large`}),(0,p.jsx)(`div`,{style:{height:10}}),(0,p.jsx)(v,{plan:y,size:`small`}),(0,p.jsx)(`div`,{style:{height:10}}),(0,p.jsxs)(d,{children:[` `,(0,p.jsx)(`div`,{style:{fontSize:23},children:`Have some more questions?`})]}),(0,p.jsx)(E,{}),(0,p.jsx)(`div`,{style:{height:40}})]})]})]}),k=c.div.attrs({className:`flex-column vc maxWidth`})`
  background: ${l.Snow};
  font-family: ${s.SFPro};
  color: ${l.Black};
`,A=c.div`
  width: 90%;
  max-width: 1000px;
`;export{O as default};