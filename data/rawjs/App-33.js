import{d as a,e as y,U as $,F as z,x as s,n as A,V as j,ac as W,a as P,j as e,T as _,D as I,S as R,t as l,C as n,B as v}from"./_index.js";import{l as D}from"./stripe.esm.js";import{S as L,F as B}from"./FetchStripeToken.js";import"./stores.js";import"./NavigateTo.js";const H=a.div.attrs({className:"maxWidth maxHeight flex hc vc"})`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
`,V=a.div.attrs({className:"scroll-y"})`
  background: ${y.White};
  padding: 35px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 670px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${$.SFPro};
  color: ${y.Black};
`,K=a.div.attrs({className:"maxWidth flex flex-column vc"})``,O=a.img.attrs({src:"/client/img/svgLogo.svg"})`
  height: 35px;
`,q=a.div.attrs({className:"maxWidth flex flex-column vc"})``,c={TopHeader:a.div`
    font-size: 17px;
  `,Title:a.div`
    font-size: 36px;
    font-weight: ${z.Bold};
  `,Description:a.div`
    margin-top: 16px;
    font-size: 17px;
    text-align: center;
  `},Z=()=>{const{checkout:p}=s.useContext(L);let[h,w]=s.useState(!1),[g,o]=s.useState(!0),[i,S]=s.useState(""),[b,T]=s.useState(""),[C,F]=s.useState(!1);const[f,k]=s.useState(null),{id:m}=A();s.useEffect(()=>{B();const r=j("session_id");r?W({sessionId:r,onSuccess:()=>{F(!0),x(r)},onError:t=>{o(!1),l({e:t,default:{title:"An error ocurred when charging your card",content:"Please contact support."}})}}):x()},[]);const x=r=>{P({url:`/api/billing/pay-for-me-info/${m}${r?`?session_id=${encodeURIComponent(r)}`:""}`,method:"GET",success:t=>{w(t.isUpgraded),S(t.firstName),T(t.lastName),k(t.receiptUrl)},error:t=>l({e:t,default:{title:"We were unable to verify the user's id",content:"Please try again later"}}),both:()=>o(!1)})},N=async r=>{if(p.stripePublicKey){if(g)return;o(!0);let t;try{t=await D(p.stripePublicKey)}catch{o(!1),l({default:{title:"Connection Error",content:"An error ocurred while connecting to our payments provider. Please try again later"}})}t&&P({url:"/api/billing/create-pay-for-me-session",method:"POST",data:{encryptedUserId:m},success:async d=>{const E=d;let u;try{if(u=await t.redirectToCheckout({sessionId:E.id}),u&&u.error)throw u.error}catch(M){o(!1),l({e:M,default:{title:"Connection Error",content:"An error ocurred. Please try again later"}})}},error:d=>{o(!1),l({e:d,default:{title:"Connection Error",content:"An error ocurred while connecting to our payments provider. Please try again later"}})}})}},U=()=>{const r=j("session_id");return h&&!r?e.jsxs("div",{style:{fontSize:20},children:[i," has already been upgraded to ",n," Pro."]}):r&&h&&C?e.jsxs(e.Fragment,{children:[e.jsxs(c.TopHeader,{children:[i," has been upgraded to"]}),e.jsxs(c.Title,{children:[n," Pro!"]}),e.jsxs(c.Description,{children:["We charged your card $59.88 and upgraded ",i," to"," ",n," Pro for one year. This was a one-time charge and auto-renew is off."]}),f&&e.jsx("div",{style:{marginTop:30},children:e.jsx(v,{type:"primary",size:"large",href:f,target:"_blank",rel:"noopener noreferrer",children:"View Receipt"})})]}):e.jsxs(e.Fragment,{children:[e.jsxs(c.TopHeader,{children:["Purchase ",n," Pro for"]}),e.jsxs(c.Title,{children:[i," ",b]}),e.jsxs(c.Description,{children:["Make a one-time $59.88 payment for ",i," to receive one year of ",n," Pro. Auto-renew is off, which means you will only be charged once."]}),e.jsx("div",{style:{marginTop:30},children:e.jsxs(v,{type:"primary",size:"large",onClick:N,style:{width:400,height:60},children:["Purchase ",n," Pro for ",i]})})]})};return e.jsxs(e.Fragment,{children:[e.jsx(_,{title:"Pay For Me"}),e.jsx(H,{children:e.jsxs(V,{children:[e.jsxs(K,{children:[e.jsx(O,{}),e.jsx(I,{})]}),e.jsx(q,{children:g?e.jsx(R,{size:"large",style:{marginTop:10}}):U()})]})})]})};export{Z as default};
