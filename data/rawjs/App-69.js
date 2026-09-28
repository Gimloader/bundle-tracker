import{y as q,j as e,U as a,d as i,a5 as _,u as c,r as S,n as $,f as N,i as O,C as b,Z as W,M as Y,B as g,a as y,t as G,dS as H,K as Q,F as V,T as Z}from"./_index.js";import{u as J}from"./useQuery.js";import{h as k,P as v}from"./PublishedDate.js";import{A as l}from"./AccessibleAnchor.js";import{C as p}from"./Button.js";import{A as X}from"./TrackEvent.js";import{I as ee}from"./index-3.js";import{a as z}from"./Centered.js";import{g as A}from"./getCloudinaryUrl.js";import{C as te}from"./App-42.js";import{F as ie}from"./FontAwesomeIcon.js";import{C as re}from"./CircularProgress.js";import"./polished.esm.js";import"./inheritsLoose.js";import"./TrackPostHogEvent.js";import"./AnimatedBackground-1.js";import"./App-4.js";import"./Shortcut.js";import"./Names.js";import"./mobxreact.esm.js";import"./index-1.js";import"./index-2.js";import"./index-6.js";import"./App-2.js";import"./Sizes.js";import"./motion.js";import"./price.js";import"./index-4.js";import"./context.js";import"./StarOutlined.js";import"./NavigateTo.js";import"./index-15.js";import"./colors.js";import"./useWarningOnMountInDevelopment.js";import"./index-10.js";import"./index-5.js";import"./move.js";import"./App-5.js";import"./index-24.js";import"./GetAssetPath.js";import"./index-14.js";import"./EditOutlined.js";import"./styleChecker.js";import"./CheckOutlined.js";import"./CopyOutlined.js";import"./MapStyle.js";import"./SeasonTicketInlineUpsell.js";import"./SeasonTicketName.js";import"./OwnsSeasonTicket.js";import"./clsx.m.js";const oe=["creative-map-listing"],ne=t=>J({queryKey:[oe,t],retry:!1,queryFn:()=>q({url:`/api/created-map/listing/info/${t}`})}),ae=({username:t})=>e.jsxs(se,{to:`/creative/@${encodeURIComponent(t)}`,children:["@",t]}),se=i(_)`
  display: block;
  width: fit-content;
  max-width: 100%;
  border-radius: 3px;
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
  color: #ffe082;
  font-family: ${a.SFPro};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  text-transform: none;
  overflow-wrap: anywhere;
  &:hover {
    color: #ffe082;
    text-decoration: underline;
  }
  &:focus-visible {
    color: #ffe082;
    outline: 2px solid #ffe082;
    outline-offset: 4px;
  }
`,le=t=>e.jsxs(de,{children:[t.tags.length?e.jsx(pe,{children:t.tags.map((r,o)=>e.jsx(ge,{children:r},r+o))}):null,e.jsx(ce,{children:t.title}),t.username?e.jsx(he,{children:e.jsx(ae,{username:t.username})}):null,e.jsxs(xe,{children:[k(t.firstPublishedAt)?e.jsxs(w,{children:[e.jsx(u,{children:"Published"}),e.jsx(f,{children:e.jsx(v,{value:t.firstPublishedAt})})]}):null,t.hasBeenUpdated&&k(t.lastPublishedAt)?e.jsxs(w,{children:[e.jsx(u,{children:"Updated"}),e.jsx(f,{children:e.jsx(v,{value:t.lastPublishedAt})})]}):null,e.jsxs(me,{children:[e.jsx(u,{children:"Description"}),e.jsx(f,{children:t.description})]})]})]}),de=i.div`
  min-width: 0;
  text-align: left;
`,ce=i.h1`
  font-family: ${a.SFPro};
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.4px;
  text-wrap: balance;
  overflow-wrap: anywhere;
  margin: 0;
`,pe=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
`,xe=i.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin: 22px 0 0;
  text-align: left;
  font-family: ${a.SFPro};
`,w=i.div`
  display: grid;
  gap: 6px;
`,me=i(w)`
  grid-column: 1 / -1;
`,u=i.dt`
  font-size: 12px;
  letter-spacing: 0.2px;
  font-weight: 600;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.65);
`,f=i.dd`
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  white-space: pre-wrap;
  overflow-wrap: anywhere;

  a {
    font-size: inherit;
  }
`,he=i.div`
  margin-top: 8px;
  font-family: ${a.SFPro};
  a {
    font-size: 18px;
    font-weight: 600;
    color: #ffe082;
  }
`,ge=i.div`
  font-family: ${a.SFPro};
  background: rgba(103, 58, 183, 0.22);
  color: #eee5ff;
  line-height: 1.3;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  padding: 4px 7px;
  border-radius: 5px;
  box-shadow: inset 0 0 0 1px rgba(214, 196, 255, 0.2);
`,C="https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative",ue=t=>{const[r,o,n]=c(!1),[s,F,I]=c(!1),[j,R]=c(!1),[K,L]=S.useState(""),[U,B,x]=c(!1),{id:m}=$(),D=()=>{if(r)return;o();const d={listing:m};t.kitId&&(d.kit=t.kitId),X({event:"creative_discovery_hosted",properties:{id:m}}),y({url:"/api/matchmaker/intent/map/play/listing/create",data:d,success:h=>{window.location.href=`/host?id=${h}`},error:h=>{G({e:h,default:{title:"There was an error loading you in."}})},both:n})},E=()=>{s||(F(),y({url:`/api/created-map/listing/report/${m}`,data:{comment:K},success:()=>{R()},both:()=>{I()}}))};return e.jsxs(fe,{children:[e.jsxs(ye,{onClick:D,disabled:r,"aria-busy":r,children:[e.jsx(we,{"aria-hidden":"true",children:r?e.jsx(je,{}):e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"currentColor",focusable:"false",children:e.jsx("path",{d:"M5 2.5a1 1 0 0 1 1.5-.86l9 6.5a1 1 0 0 1 0 1.72l-9 6.5A1 1 0 0 1 5 15.5z"})})}),e.jsx("span",{children:"Play Live"})]}),!N()&&!O()?e.jsxs(ke,{children:["This map is limited to 5 players."," ",e.jsxs(l,{to:W,style:{color:"#d6c4ff",textDecoration:"underline"},children:["Upgrade to ",b," Pro"]})," ","to remove this limit."]}):null,e.jsxs(ve,{children:["This map was not created by ",b,". If anything in this map breaks our"," ",e.jsx(l,{to:C,external:!0,target:"_blank",style:{color:"#d6c4ff",textDecoration:"underline"},children:"Community Guidelines"}),", please"," ",e.jsx(l,{style:{color:"#d6c4ff",textDecoration:"underline",cursor:"pointer"},onClick:B,children:"report"})," ","and we will take proper action."]}),e.jsx(Y,{open:U,onCancel:x,title:"Report map",footer:j?e.jsx(g,{onClick:x,type:"primary",children:"Close"},"reported-close"):[e.jsx(g,{onClick:x,children:"Cancel"},"reporting-close"),e.jsx(g,{danger:!0,loading:s,onClick:E,children:"Report Map"},"reporting-submit")],children:j?e.jsx(e.Fragment,{children:"Your report was sent to our team. Thanks for keeping Gimkit safe!"}):e.jsxs(e.Fragment,{children:["Found a map that breaks our"," ",e.jsx(l,{to:C,external:!0,target:"_blank",style:{textDecoration:"underline"},children:"Community Guidelines"}),"? Report it here and our team will take a look. Thanks for keeping Gimkit safe!",e.jsx(ee.TextArea,{placeholder:"Optional comment...",style:{marginTop:10},maxLength:1e3,onChange:d=>L(d.target.value)})]})})]})},fe=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`,be=H`
  to { transform: rotate(360deg); }
`,we=i.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,je=i.span`
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: ${be} 0.8s linear infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ye=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  max-width: 350px;
  min-height: 64px;
  border: 0;
  border-radius: 10px;
  background: ${p.Purple};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18),
    0 4px 12px rgba(27, 6, 91, 0.18);
  color: white;
  font-family: ${a.SFPro};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  padding: 18px 24px;
  cursor: pointer;
  transition: background 0.15s ease, transform 0.15s ease;

  &:hover:not(:disabled) {
    background: #7e57c2;
    transform: translateY(-2px);
  }
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  &:focus-visible {
    outline: 3px solid white;
    outline-offset: 4px;
  }
  &:disabled {
    opacity: 0.8;
    cursor: wait;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,ke=i.div`
  font-size: 12px;
  line-height: 1.6;
  margin-top: 16px;
  color: rgba(255, 255, 255, 0.7);
`,ve=i.div`
  font-size: 11px;
  line-height: 1.6;
  margin-top: 16px;
  color: rgba(255, 255, 255, 0.5);
`,Ce=t=>t.kits.length?e.jsxs(P,{children:[e.jsxs(T,{children:["This map allows players to answer questions.",e.jsx("br",{}),"Select the kit you would like players to answer questions from:"]}),e.jsx(Te,{children:t.kits.map(r=>e.jsx(Pe,{onSelect:()=>t.selectKit(r._id),title:r.title,gif:r.gif},r._id))})]}):e.jsx(P,{children:e.jsxs(T,{children:["This map has players answer questions from a kit, but you"," ",e.jsx("b",{children:"do not currently have any kits with questions."}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(l,{to:Q,style:{color:"#d6c4ff",textDecoration:"underline"},children:"Create a kit,"})," ","add some questions and then come back here to play this map!"]})}),Pe=t=>e.jsxs(Me,{type:"button",onClick:t.onSelect,children:[e.jsx($e,{style:{backgroundImage:`url(${A(t.gif)})`}}),e.jsx(ze,{children:t.title}),e.jsx(Se,{"aria-hidden":"true",children:"→"})]}),P=i(z).attrs({className:"maxWidth"})``,T=i.div`
  text-align: center;
  width: 100%;
`,Te=i.div`
  display: grid;
  width: 100%;
  gap: 12px;
  margin-top: 24px;
`,Me=i.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: background 0.15s ease, border-color 0.15s ease;
  &:hover {
    background: rgba(103, 58, 183, 0.3);
    border-color: #d6c4ff;
  }
  &:focus-visible {
    outline: 2px solid #d6c4ff;
    outline-offset: 3px;
  }
  &:active {
    background: ${p.Purple};
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Se=i.span`
  margin-left: auto;
  padding-left: 8px;
  color: #d6c4ff;
  font-size: 22px;
`,$e=i.div.attrs({className:"light-shadow"})`
  flex-shrink: 0;
  height: 65px;
  width: 65px;
  border-radius: 5px;
  background-size: cover;
`,ze=i.div`
  min-width: 0;
  overflow-wrap: anywhere;
  font-weight: ${V.Bold};
  font-size: 16px;
`,Ae=t=>{const[r,o]=S.useState();return!r&&t.response.kits?e.jsx(Ce,{kits:t.response.kits,selectKit:o}):e.jsx(ue,{kitId:r})},Fe=({response:t})=>e.jsxs(Ie,{children:[e.jsx(Z,{title:`${t.title} | ${b} Creative`,override:!0}),e.jsxs(Le,{children:[e.jsx(Re,{children:e.jsx(Ke,{src:A(t.image),alt:t.title})}),e.jsx(le,{...t})]}),e.jsx(Ue,{children:e.jsx(Ae,{response:t})})]}),Ie=i(te)`
  box-sizing: border-box;
  width: 90%;
  max-width: 1120px;
  margin: 40px auto;

  @media (max-width: 600px) {
    margin: 24px auto;
    padding: 20px;
  }
`,Re=i.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  padding: 8px;
  border: 1px solid rgba(214, 196, 255, 0.35);
  border-radius: 16px;
  background: linear-gradient(
    145deg,
    rgba(214, 196, 255, 0.18),
    rgba(103, 58, 183, 0.18)
  );
  box-shadow: 0 8px 28px rgba(27, 6, 91, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
`,Ke=i.img`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  border-radius: 9px;
  object-fit: contain;
  object-position: center;
`,Le=i.div`
  display: grid;
  grid-template-columns: minmax(0, 400px) minmax(0, 1fr);
  gap: 36px;
  align-items: center;

  @media (max-width: 760px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }
`,Ue=i.div`
  min-width: 0;
  margin-top: 32px;
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`,Rt=()=>{var s;const{id:t}=$(),{data:r,isLoading:o,error:n}=ne(t);return o?e.jsx(M,{children:e.jsx(re,{style:{color:p.White,marginTop:50}})}):n?e.jsx(M,{children:e.jsxs(z,{className:"light-shadow",style:{background:"rgba(255,255,255,0.1)",padding:30,borderRadius:8,width:"90%",marginTop:25,maxWidth:500},children:[e.jsx("div",{children:e.jsx(ie,{name:"fas fa-exclamation-triangle",style:{color:p.Yellow,fontSize:42,marginBottom:20}})}),e.jsx("div",{style:{fontSize:16},children:((s=n==null?void 0:n.message)==null?void 0:s.text)||"There was an error. Please refresh and try again."})]})}):r?e.jsx(Fe,{response:r}):null},M=i.div.attrs({className:"maxWidth flex-center"})`
  padding: 35px 0px;
`;export{Rt as default};
