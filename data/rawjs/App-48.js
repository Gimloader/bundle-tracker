import{u as d,r as h,i as x,M as i,j as e,T as f,e as u,W as g,d as t,F as a,a as j,t as b,cs as w,a1 as y}from"./_index.js";import{M as G}from"./Button.js";import{N as s}from"./NavigateTo.js";import{S as k}from"./App-4.js";import"./polished.esm.js";import"./inheritsLoose.js";import"./Shortcut.js";import"./Names.js";import"./mobxreact.esm.js";import"./AccessibleAnchor.js";import"./index-1.js";import"./index-2.js";import"./index-6.js";import"./FontAwesomeIcon.js";import"./App-2.js";import"./Sizes.js";import"./motion.js";import"./price.js";import"./TrackPostHogEvent.js";import"./index-3.js";import"./index-4.js";import"./context.js";import"./StarOutlined.js";import"./index-15.js";import"./colors.js";import"./useWarningOnMountInDevelopment.js";import"./index-10.js";import"./index-5.js";import"./move.js";const o="Projecto",A="projector",M="May 11th",ae=()=>{const[n,c,p]=d(!1);h.useEffect(()=>{x()&&(i.error({title:"Not for students...",content:`Sorry, the ${o} Gim is only for teachers.`}),s(y))},[]);const m=()=>{n||(c(),j({url:"/api/cosmos/teacher-appreciation",success:()=>{i.success({title:`${o} Gim Redeemed!`,content:`You now own the ${o} Gim! You can find it in your Locker.`,onOk:()=>{s(w+"/locker")}})},error:l=>{b({e:l,default:{title:"There was an error. Please try again later."}})},both:p}))};return e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Teacher Appreciation Week"}),e.jsxs(S,{children:[e.jsx(k,{}),e.jsxs(v,{children:[e.jsx(T,{}),e.jsx(E,{children:"Happy Teacher Appreciation Week!"}),e.jsxs($,{children:["As part of the celebration, we're giving out the"," ",e.jsxs(r,{children:[o," Gim"]})," out exclusively to teachers for"," ",e.jsx(r,{children:"free!"}),e.jsx("br",{})," ",e.jsx("br",{}),"Click the button below to redeem, and make sure you do so before the end of Teacher Appreciation Week (",M,").",e.jsx("br",{})," ",e.jsx("br",{}),"Once you redeem, you'll be able to"," ",e.jsx(r,{children:"select the Gim in your Locker and wear it in-game!"})]}),e.jsxs(G,{onClick:m,size:"large",ariaLabel:"Get Gim",children:["Get ",o," Gim"]})]})]})]})},S=t.div.attrs({className:"flex hc"})`
  flex: 1;
  color: ${u.White};
  background: linear-gradient(0deg, #3b3f43 0%, #91b4c6 80%);
  font-family: ${g.SFPro};
`,v=t.div.attrs({className:"flex-column vc"})`
  padding-top: 70px;
  width: 90%;
  max-width: 700px;
  padding-bottom: 100px;
`,T=t.img.attrs({src:`/assets/map/characters/spine/preview/${A}.png`})`
  height: 300px;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
`,E=t.div`
  font-size: 42px;
  font-weight: ${a.UltraBold};
`,$=t.div`
  font-size: 22px;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 20px;
  margin-bottom: 30px;
`,r=t.span`
  color: #ffcc80;
  font-weight: ${a.Bold};
`;export{ae as default};