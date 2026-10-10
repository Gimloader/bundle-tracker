import{o as e}from"./rolldown-runtime.js";import{C as t,E as n,k as r,m as i,t as a}from"./utils.js";import{t as o}from"./react-1.js";import{l as s}from"./dist-3.js";import{t as c}from"./button.js";import{t as l}from"./spin.js";import{n as u}from"./Company.js";import{t as d}from"./jsx-runtime.js";import{c as f,l as p,n as m,s as h,y as g}from"./_index.js";import{t as _}from"./stripe.esm.js";import{n as v,t as y}from"./FetchStripeToken.js";var b=e(o()),x=p.div.attrs({className:`maxWidth maxHeight flex hc vc`})`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
`,S=p.div.attrs({className:`scroll-y`})`
  background: ${m.White};
  padding: 35px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 670px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${f.SFPro};
  color: ${m.Black};
`,C=p.div.attrs({className:`maxWidth flex flex-column vc`})``,w=p.img.attrs({src:`/client/img/svgLogo.svg`})`
  height: 35px;
`,T=p.div.attrs({className:`maxWidth flex flex-column vc`})``,E={TopHeader:p.div`
    font-size: 17px;
  `,Title:p.div`
    font-size: 36px;
    font-weight: ${h.Bold};
  `,Description:p.div`
    margin-top: 16px;
    font-size: 17px;
    text-align: center;
  `},D=d(),O=()=>{let{checkout:e}=b.useContext(v),[o,d]=b.useState(!1),[f,p]=b.useState(!0),[m,h]=b.useState(``),[O,k]=b.useState(``),[A,j]=b.useState(!1),[M,N]=b.useState(null),{id:P}=s();b.useEffect(()=>{y();let e=i(`session_id`);e?r({sessionId:e,onSuccess:()=>{j(!0),F(e)},onError:e=>{p(!1),n({e,default:{title:`An error ocurred when charging your card`,content:`Please contact support.`}})}}):F()},[]);let F=e=>{t({url:`/api/billing/pay-for-me-info/${P}${e?`?session_id=${encodeURIComponent(e)}`:``}`,method:`GET`,success:e=>{d(e.isUpgraded),h(e.firstName),k(e.lastName),N(e.receiptUrl)},error:e=>n({e,default:{title:`We were unable to verify the user's id`,content:`Please try again later`}}),both:()=>p(!1)})},I=async r=>{if(e.stripePublicKey){if(f)return;p(!0);let r;try{r=await _(e.stripePublicKey)}catch{p(!1),n({default:{title:`Connection Error`,content:`An error ocurred while connecting to our payments provider. Please try again later`}})}r&&t({url:`/api/billing/create-pay-for-me-session`,method:`POST`,data:{encryptedUserId:P},success:async e=>{let t=e,i;try{if(i=await r.redirectToCheckout({sessionId:t.id}),i&&i.error)throw i.error}catch(e){p(!1),n({e,default:{title:`Connection Error`,content:`An error ocurred. Please try again later`}})}},error:e=>{p(!1),n({e,default:{title:`Connection Error`,content:`An error ocurred while connecting to our payments provider. Please try again later`}})}})}};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(a,{title:`Pay For Me`}),(0,D.jsx)(x,{children:(0,D.jsxs)(S,{children:[(0,D.jsxs)(C,{children:[(0,D.jsx)(w,{}),(0,D.jsx)(g,{})]}),(0,D.jsx)(T,{children:f?(0,D.jsx)(l,{size:`large`,style:{marginTop:10}}):(()=>{let e=i(`session_id`);return o&&!e?(0,D.jsxs)(`div`,{style:{fontSize:20},children:[m,` has already been upgraded to `,u,` Pro.`]}):e&&o&&A?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(E.TopHeader,{children:[m,` has been upgraded to`]}),(0,D.jsxs)(E.Title,{children:[u,` Pro!`]}),(0,D.jsxs)(E.Description,{children:[`We charged your card $59.88 and upgraded `,m,` to`,` `,u,` Pro for one year. This was a one-time charge and auto-renew is off.`]}),M&&(0,D.jsx)(`div`,{style:{marginTop:30},children:(0,D.jsx)(c,{type:`primary`,size:`large`,href:M,target:`_blank`,rel:`noopener noreferrer`,children:`View Receipt`})})]}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(E.TopHeader,{children:[`Purchase `,u,` Pro for`]}),(0,D.jsxs)(E.Title,{children:[m,` `,O]}),(0,D.jsxs)(E.Description,{children:[`Make a one-time $59.88 payment for `,m,` to receive one year of `,u,` Pro. Auto-renew is off, which means you will only be charged once.`]}),(0,D.jsx)(`div`,{style:{marginTop:30},children:(0,D.jsxs)(c,{type:`primary`,size:`large`,onClick:I,style:{width:400,height:60},children:[`Purchase `,u,` Pro for `,m]})})]})})()})]})})]})};export{O as default};