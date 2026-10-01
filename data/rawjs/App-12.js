import{r as l,I as T,_ as O,m as E,o as R,j as e,b as u,aG as $,T as _,q as A,e as p,a4 as z,D as I,d,F as S,aH as x,c as N,n as F,a as H,U as L,S as W,h as V,$ as q}from"./_index.js";import{o as g}from"./mobxreact.esm.js";import{M as h}from"./MenuItem.js";import{I as G}from"./ImagePreview.js";import{A as Q}from"./AccessibleAnchor.js";import{a as D,S as U}from"./App-4.js";import{R as J}from"./QuestionCircleOutlined.js";import{R as K}from"./TeamOutlined.js";import{C as j,H as b,I as y,a as w,B as X,Q as Y,P as Z}from"./Player.js";import{p as B}from"./papaparse.min.js";import{F as ee}from"./FillRemainingSpace.js";import{N as te}from"./NavigateTo.js";import"./getCloudinaryUrl.js";import"./Shortcut.js";import"./Names.js";import"./index-1.js";import"./index-2.js";import"./index-6.js";import"./FontAwesomeIcon.js";import"./App-2.js";import"./Sizes.js";import"./motion.js";import"./price.js";import"./TrackPostHogEvent.js";import"./index-3.js";import"./index-4.js";import"./context.js";import"./StarOutlined.js";import"./index-15.js";import"./colors.js";import"./useWarningOnMountInDevelopment.js";import"./index-10.js";import"./index-5.js";import"./move.js";import"./Question.js";import"./LazyLatexRenderer.js";import"./index-11.js";import"./useBubbleLock.js";import"./index-12.js";import"./CopyOutlined.js";import"./EditOutlined.js";import"./DownloadOutlined.js";var re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"project",theme:"outlined"},ne=function(t,r){return l.createElement(T,O({},t,{ref:r,icon:re}))},oe=l.forwardRef(ne),c=(o=>(o.general="general",o.breakdown="breakdown",o.player="player",o.overview="overview",o))(c||{}),se=Object.defineProperty,M=(o,t,r,s)=>{for(var n=void 0,a=o.length-1,i;a>=0;a--)(i=o[a])&&(n=i(t,r,n)||n);return n&&se(t,r,n),n};class C{constructor(){this.currentTab=c.breakdown,this.currentPlayer=null,E(this)}}M([R],C.prototype,"currentTab");M([R],C.prototype,"currentPlayer");const ae={navigation:new C},v=l.createContext(ae),ie=(o,t)=>{var r=o.name.toLowerCase(),s=t.name.toLowerCase();return r<s?-1:r>s?1:0},ce=g(o=>{const{gameReport:t}=o,{navigation:r}=l.useContext(v);return e.jsx(e.Fragment,{children:t.players.sort(ie).map((s,n)=>e.jsx(h,{icon:null,title:s.name,onClick:()=>{r.currentTab=c.player,r.currentPlayer=n},selected:r.currentTab===c.player&&r.currentPlayer===n},n))})}),le=d.div.attrs({className:"scroll-y"})`
  width: 390px;
  background: ${p.White};
  border-right: 1px solid ${p.BorderGray};
  box-sizing: border-box;
  flex-shrink: 0;

  @media print {
    display: none;
  }
`,de=d.div`
  font-weight: ${S.UltraBold};
  font-size: 42px;
  line-height: 42px;
  margin-top: 10px;
`,ue=d.div`
  font-size: 16px;
  font-weight: 300;
  margin-top: 7px;
`,me=g(o=>{const{gameReport:t}=o,{navigation:r}=l.useContext(v),s=t.expiration?u(t.expiration):u($(t._id)).add(546,"days"),n=s.diff(u($(t._id)),"days"),i=!u().isAfter(s)&&Math.abs(u().diff(s,"months"))<3;return e.jsxs(le,{children:[e.jsx(_,{title:`Report - ${t.game.title} - ${t.players.length} ${A("participant",t.players.length)} - ${u(t.dateCreated).format("L")}`}),e.jsx(D,{}),e.jsxs("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",textAlign:"center",padding:15},children:[e.jsx(G,{size:150,image:t.game.gif,style:{marginTop:27}}),e.jsx(Q,{style:{color:p.Black,textDecoration:"none"},to:`/view/${t.game._id}`,children:e.jsx(de,{children:t.game.title})}),e.jsxs(ue,{children:[t.players.length+" "+A("participant",t.players.length)," ","-"," ",t.mapAssignment?e.jsx(Q,{to:`/assignment/${t.mapAssignment}`,children:"Assignment"}):u(t.dateCreated).format("MMMM Do [at] LT")]})]}),i?e.jsx(z,{banner:!0,message:`${n>=365?"Reports are automatically deleted after 1.5 years. ":""}This report will be deleted on ${s.format("MMMM Do")}.`}):null,e.jsx(I,{style:{marginBottom:10}}),e.jsxs("div",{children:[e.jsx(h,{icon:J,onClick:()=>r.currentTab=c.breakdown,title:"Question Breakdown",selected:r.currentTab===c.breakdown},"breakdown"),e.jsx(h,{icon:K,onClick:()=>r.currentTab=c.overview,title:"Student Overview",selected:r.currentTab===c.overview},"studentOverview"),e.jsx(h,{icon:oe,onClick:()=>r.currentTab=c.general,title:"Quick Stats",selected:r.currentTab===c.general},"overview"),e.jsx(I,{}),e.jsx(ce,{gameReport:t})]})]})}),pe=o=>{const{gameReport:t}=o,r=l.useMemo(()=>t.players.reduce((a,i)=>i.correctQuestionIds.length+a,0),[t.players.length]),s=l.useMemo(()=>t.players.reduce((a,i)=>i.incorrectQuestionIds.length+a,0),[t.players.length]),n=l.useMemo(()=>x(r,s),[r,s]);return e.jsx(j,{children:e.jsxs("div",{children:[e.jsx(b,{title:"Quick Stats",description:"The stats on how the game went down"}),e.jsx(y,{header:"Questions Answered Correctly",content:r,contentColor:w.Green}),e.jsx(y,{header:"Questions Answered Incorrectly",content:s,contentColor:w.Red}),e.jsx(y,{header:"Accuracy",content:`${n}%`,contentColor:w.Blue})]})})},P=o=>{const t=new Blob([o.csv],{type:"text/csv"}),r=URL.createObjectURL(t),s=document.createElement("a");s.href=r;let n=o.fileName;n=n.replace(/ /g,"_"),s.download=`${n}.csv`,s.click()},he=o=>{const{players:t,questions:r}=o.gameReport,n=l.useMemo(()=>r.map(a=>{let i=0,m=0;return t.forEach(k=>{k.correctQuestionIds.forEach(f=>{f===a._id&&i++}),k.incorrectQuestionIds.forEach(f=>{f===a._id&&m++})}),{question:a,resultData:{correct:i,incorrect:m,accuracy:x(i,m)}}}),[t.length,r.length]).sort((a,i)=>a.resultData.accuracy>i.resultData.accuracy?1:-1);return e.jsxs(j,{children:[e.jsx(b,{title:"Question Breakdown",description:"See which questions students have down or need help with",download:()=>{const a=B.unparse(n.map(i=>{var m;return{Question:((m=i.question)==null?void 0:m.text)??"Media Question","Correct Count":i.resultData.correct,"Incorrect Count":i.resultData.incorrect,Accuracy:i.resultData.accuracy+"%"}}));P({csv:a,fileName:`${o.gameReport.game.title} Question Breakdown`})}}),e.jsx("div",{children:n.map(a=>e.jsx(X,{question:a.question,correct:a.resultData.correct,incorrect:a.resultData.incorrect,accuracy:a.resultData.accuracy},a.question._id+"-breakdown"))})]})},xe=d.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5px;
  min-height: max-content;
`,ge=d(N)`
  width: 100%;
  font-size: 26px !important;
  font-weight: ${S.Bold} !important;
  color: ${p.Black} !important;
`,ve=g(o=>{const{gameReport:t}=o,{navigation:r}=l.useContext(v);return e.jsxs(j,{children:[e.jsx(b,{title:"Student Overview",description:"Quick look on how each student performed",download:()=>{const s=B.unparse(t.players.map(n=>{const a=x(n.correctQuestionIds.length,n.incorrectQuestionIds.length);return{"Player Name":n.name,"Questions Answered Correctly":n.correctQuestionIds.length??0,"Questions Answered Incorrectly":n.incorrectQuestionIds.length??0,Accuracy:a+"%"}}));P({csv:s,fileName:`${o.gameReport.game.title} Student Overview`})}}),e.jsx("div",{children:t.players.map((s,n)=>{const a=x(s.correctQuestionIds.length,s.incorrectQuestionIds.length);return e.jsxs(xe,{children:[e.jsx(ge,{hoverable:!0,onClick:()=>{r.currentPlayer=n,r.currentTab=c.player},children:e.jsx("div",{children:s.name})}),e.jsx(Y,{correct:s.correctQuestionIds.length,incorrect:s.incorrectQuestionIds.length,accuracy:a})]},`student-overview-student-${n}`)})})]})}),fe=g(o=>{const{navigation:t}=l.useContext(v),{gameReport:r}=o,{currentTab:s,currentPlayer:n}=t,a=()=>s===c.general?e.jsx(pe,{gameReport:r}):s===c.overview?e.jsx(ve,{gameReport:r}):s===c.breakdown?e.jsx(he,{gameReport:r}):s===c.player&&r.players[n]?e.jsx(Z,{player:r.players[n],questions:r.questions}):null;return e.jsxs(ye,{children:[e.jsx(D,{}),a()]},`${s}-${n}`)}),ye=d.div.attrs({className:"maxWidth scroll-y"})`
  @media print {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`,we=d.div`
  height: 100%;
  display: flex;
  background: ${o=>o.customBackgroundColor||p.Snow};
  font-family: ${L.SFPro};
  color: ${p.Black};
`,dt=()=>{const[o,t]=l.useState(null),{id:r}=F();l.useEffect(()=>{H({url:`/api/game-report/fetch/${r}`,method:"GET",success:n=>{t(n)},error:()=>V({title:"Failed to fetch report",content:"Please try again or contact support",onOk:()=>te(q)})})},[]);const s=()=>o?e.jsxs("div",{className:"maxAll flex",style:{flex:1,overflow:"hidden"},children:[e.jsx(me,{gameReport:o}),e.jsx(fe,{gameReport:o})]}):e.jsx("div",{className:"flex-center maxAll",children:e.jsx(W,{size:"large"})});return e.jsx(je,{children:e.jsxs(we,{children:[e.jsx(U,{}),s()]})})},je=d(ee)`
  @media print {
    height: auto !important;
    ::-webkit-scrollbar {
      visibility: hidden;
    }
  }
`;export{dt as default};
