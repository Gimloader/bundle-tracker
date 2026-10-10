import{o as e}from"./rolldown-runtime.js";import{C as t,E as n,G as r,k as i,m as a,t as o}from"./utils.js";import{t as s}from"./react-1.js";import{t as c}from"./button.js";import{t as l}from"./spin.js";import{t as u}from"./App-4.js";import{n as d,r as f,t as p}from"./Company.js";import{w as m}from"./Paths.js";import{t as h}from"./jsx-runtime.js";import{c as g,l as _,m as v,n as y,s as b,y as x}from"./_index.js";import{n as S,r as C,t as w}from"./Styled-2.js";var T=e(s()),E=h(),D=e=>(0,E.jsxs)(`div`,{className:`flex vc flex-column`,children:[(0,E.jsx)(`img`,{src:`/client/img/quote/medal.svg`,style:{height:130}}),(0,E.jsx)(O,{children:`Woohoo!`}),(0,E.jsx)(k,{children:e.isRenewal?`Your group license renewal is complete!`:`Your group license is ready to go!`})]}),O=_.h1`
  color: ${y.Black};
  font-weight: ${b.UltraBold};
  font-size: 50px;
`,k=_.p`
  margin-top: -41px;
  font-size: 18px;
`,A=e=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(w,{children:[(0,E.jsx)(C,{children:`Invoice`}),(0,E.jsx)(S,{children:`Click the button below to print out your invoice. A copy of this invoice has also been sent to your email.`}),(0,E.jsx)(c,{style:{marginTop:5},href:e.invoiceLink,target:`_blank`,type:`primary`,block:!0,children:`Print Invoice`})]}),(0,E.jsx)(`div`,{style:{height:10}}),(0,E.jsxs)(w,{children:[(0,E.jsx)(C,{children:`Payment Information`}),(0,E.jsxs)(S,{children:[(0,E.jsx)(`div`,{style:{marginTop:3},children:`Please send your check to the following address:`}),(0,E.jsx)(`br`,{}),(0,E.jsx)(`div`,{children:(0,E.jsx)(`b`,{children:`Gimkit, Inc`})}),(0,E.jsx)(`div`,{children:f}),(0,E.jsx)(`div`,{children:p}),(0,E.jsx)(x,{}),(0,E.jsx)(`div`,{children:`With the check, please include a copy of the invoice. All Gimkit invoices on Purchase Orders have NET45 Terms.`})]})]})]}),j=e=>(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(w,{children:[(0,E.jsx)(C,{children:`Receipt`}),(0,E.jsx)(S,{children:`Click the button below to print out your receipt A copy of this receipt has also been sent to your email.`}),(0,E.jsx)(c,{style:{marginTop:5},href:e.receiptLink,target:`_blank`,type:`primary`,block:!0,children:`Print Receipt`})]})}),M=e=>{let{isRenewal:t}=e;return(0,E.jsxs)(w,{children:[(0,E.jsx)(C,{children:t?`Renewal Complete!`:`Get Started!`}),(0,E.jsx)(S,{children:t?`Your new group license is active! All of your teachers have been imported over from your expiring group. Click the button below to manage your new group license!`:`Your group license is active! Click the button below to invite your teachers to join your license and gain ${d} Pro access!`}),(0,E.jsx)(c,{href:m,type:`primary`,style:{marginTop:5},block:!0,children:`Manage Group`})]})},N=[{text:`Group license help center`,link:`https://help.gimkit.com/en/category/group-subscriptions-3m7198/`},{text:`Managing group licenses`,link:`https://help.gimkit.com/en/article/managing-group-subscriptions-117yzia/`}],P=()=>(0,E.jsxs)(F,{className:`flex vc flex-column`,children:[(0,E.jsx)(I,{children:`📚 Resources`}),(0,E.jsx)(L,{children:`Take a look at the resources below to help you use your group license!`}),N.map(e=>(0,E.jsx)(`div`,{style:{fontSize:16,marginBottom:5},children:(0,E.jsx)(`a`,{href:e.link,target:`_blank`,children:e.text})},e.link)),(0,E.jsx)(x,{}),(0,E.jsx)(I,{children:`👋 Need Help?`}),(0,E.jsx)(`div`,{style:{height:5}}),(0,E.jsxs)(L,{children:[`Just email us at`,` `,(0,E.jsx)(`a`,{href:`mailto:groups@gimkit.com`,children:`groups@gimkit.com`}),`!`]})]}),F=_.div`
  text-align: center;
`,I=_.h2`
  font-size: 32px;
  font-weight: ${b.UltraBold};
  color: ${y.Black};
`,L=_.p`
  font-size: 17px;
  margin-top: -25px;
`,R=`Error fetching subscription info. Try refreshing the page. If you continue to see this error, please contact support.`,z=()=>{let[e,s]=T.useState(!0),[c,d]=T.useState(``),[f,p]=T.useState(``),[m,h]=T.useState(``),[g,_]=T.useState(!1);return T.useEffect(()=>{v({})},[]),T.useEffect(()=>{let e=a(`session_id`);if(e)i({sessionId:e,onSuccess:e=>{t({url:`/api/bulk/complete/${e.subscriptionId}`,success:e=>{d(e.paymentMethod),p(e.receiptUrl),h(e.invoiceUrl),_(e.renewal),s(!1)},error:e=>r({title:R})})},onError:e=>r({title:R}),onBoth:()=>s(!1)});else{let e=a(`subscriptionId`);t({url:`/api/bulk/complete/${e}`,success:e=>{d(e.paymentMethod),p(e.receiptUrl),h(e.invoiceUrl),_(e.renewal),s(!1)},error:e=>n({e,default:{title:R}})})}},[]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(o,{title:`Group License Complete`}),(0,E.jsxs)(B,{className:`flex-column vc`,children:[(0,E.jsx)(u,{includeSpacer:!0}),(0,E.jsx)(V,{children:e?(0,E.jsx)(`div`,{className:`maxWidth flex hc`,children:(0,E.jsx)(l,{})}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(D,{isRenewal:g}),(0,E.jsx)(x,{}),c===`creditCard`&&(0,E.jsx)(j,{receiptLink:f}),c===`purchaseOrder`&&(0,E.jsx)(A,{invoiceLink:m}),(0,E.jsx)(`div`,{style:{height:10}}),(0,E.jsx)(M,{isRenewal:g}),(0,E.jsx)(x,{}),(0,E.jsx)(P,{})]})})]})]})},B=_.div`
  flex: 1;
  background: ${y.Snow};
  width: 100%;
  color: ${y.Black};
  font-family: ${g.SFPro};
  padding: 20px;
  min-height: 900px;
`,V=_.div`
  width: 100%;
  max-width: 550px;
`;export{z as default};