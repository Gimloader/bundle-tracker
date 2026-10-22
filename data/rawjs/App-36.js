import{o as e}from"./rolldown-runtime.js";import{C as t,E as n,O as r,f as i,g as a,t as o}from"./utils.js";import{t as s}from"./react-1.js";import{l as c}from"./dist-3.js";import{t as l}from"./tooltip-1.js";import{t as u}from"./modal-1.js";import{t as d}from"./button-1.js";import{t as f}from"./notification.js";import{t as p}from"./input.js";import{t as m}from"./card.js";import{t as h}from"./spin.js";import{t as g}from"./Question.js";import{t as _}from"./App-15.js";import{t as v}from"./jsx-runtime.js";import{t as y}from"./useIntervalWhen.js";import{c as b,l as x,n as S,s as C,y as w}from"./_index.js";import{t as T}from"./Paper.js";import{t as ee}from"./react-flip-move.es.js";import{i as te,r as E}from"./mobxreact.esm.js";import{t as D}from"./NavigateTo.js";import{t as O}from"./FontAwesomeIcon.js";var k=e(s()),A=v(),j=()=>(0,A.jsxs)(M,{children:[(0,A.jsx)(N,{}),(0,A.jsx)(P,{children:`KitCollab`}),(0,A.jsx)(w,{})]}),M=x.div``,N=x.img.attrs({src:`/client/img/svgLogo.svg`})`
  height: 22px;
  opacity: 0.8;
`,P=x.div`
  font-size: 45px;
  font-weight: ${C.UltraBold};
  line-height: 1;
  margin-top: 15px;
`,F=e=>({text:e.text,type:e.type,answers:e.answers.map(e=>{let t={text:e.text,correct:e.correct};return e.textType?{...t,textType:e.textType}:t})}),I=e=>{let t=k.useMemo(()=>e.status===G.accepted?`Accepted`:e.status===G.rejected?`Rejected`:`Waiting For Approval`,[e.status]),n=k.useMemo(()=>e.status===G.accepted?`#1b5e20`:e.status===G.rejected?`#b71c1c`:`#283593`,[e.status]);return(0,A.jsxs)(R,{style:{backgroundColor:n},children:[(0,A.jsx)(z,{children:t}),(0,A.jsx)(B,{children:e.canEdit?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(l,{title:`Edit Question`,children:(0,A.jsx)(`div`,{onClick:e.openEditor,children:(0,A.jsx)(O,{style:{marginRight:10},name:`far fa-edit`})})}),(0,A.jsx)(l,{title:`Delete Question`,children:(0,A.jsx)(`div`,{onClick:e.deleteQuestion,children:(0,A.jsx)(O,{name:`far fa-trash-alt`})})})]}):null})]})},L=E(e=>{let i=te(()=>({_id:e.id,text:e.question.text,type:e.question.type,answers:e.question.answers.map((t,n)=>({_id:`${e.id}-answer-${n}`,text:t.text,correct:t.correct,textType:t.textType}))})),[a,o,s]=r(!1),[c,l]=k.useState(e.status),[u,p,m]=r(!1),h=k.useCallback(()=>{e.deleteQuestion(e.id)},[e.id]);k.useEffect(()=>{if(c!==e.status&&(l(e.status),e.status===G.accepted&&f.success({message:`Question Accepted!`,description:`Your question was added to the kit!`}),e.status===G.rejected)){let e=Math.random().toString();f.error({message:`Question Rejected`,description:`Your question was rejected and sent back for you to modify.`,btn:(0,A.jsx)(d,{onClick:()=>{o(),f.destroy(e)},children:`Modify Question`}),key:e})}},[e.status]);let v=c!==G.accepted,y=e=>{Object.keys(e).forEach(t=>{i[t]=e[t]})};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(g,{question:i,showAllAnswers:!0,blockToggleShowAnswers:!0,customStyle:{marginBottom:20},customBodyStyle:{padding:0},customTopComponent:(0,A.jsx)(I,{canEdit:v,openEditor:o,deleteQuestion:h,status:c}),customContentStyle:{padding:24,paddingTop:14}}),(0,A.jsx)(_,{visible:!!(a&&v),close:s,existingQuestion:i,submitQuestion:r=>{if(u)return;p();let i=F(r);t({url:`/api/kitcollab/question/edit`,data:{questionId:e.id,question:i,userSessionId:e.userSessionId},success:()=>{l(G.waiting),y(r),s()},error:e=>{n({e,default:{title:`Error updating question. Try again later.`}})},both:()=>m()})},imagesBlocked:!0,audioBlocked:!0,latexBlocked:!0,loading:u,buttonLabel:c===G.rejected?`Resubmit`:`Save`})]})}),R=x.div.attrs({className:`maxWidth flex vc between`})`
  transition: background 0.3s;
  color: ${S.White};
  padding: 14px 24px;
  z-index: 999;
`,z=x.div.attrs({className:`flex vc`})`
  font-size: 16px;
  line-height: 1;
`,B=x.div.attrs({className:`flex vc`})`
  font-size: 16px;
`,V=e=>{let i=k.useRef(),[a,o,s]=r(!1),[c,l]=k.useState(!1),[u,d,f]=r(!1);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(m,{style:{marginBottom:20},hoverable:!0,onClick:o,children:(0,A.jsx)(H,{children:(0,A.jsxs)(`div`,{className:`flex-center flex-column maxWidth`,children:[(0,A.jsx)(U,{children:(0,A.jsx)(O,{name:`fas fa-plus`})}),(0,A.jsx)(W,{children:`Contribute New Question`})]})})}),(0,A.jsx)(_,{ref:i,visible:a,close:s,submitQuestion:r=>{if(u)return;d();let i=F(r);t({url:`/api/kitcollab/contribute/question/${e.sessionId}`,data:{question:i,userName:e.userName,userSessionId:e.userSessionId},success:t=>{l(!0),e.addQuestion(t,i),s()},error:e=>{n({e,default:{title:`Error submitting question. Try again later.`}})},both:()=>f()})},imagesBlocked:!0,audioBlocked:!0,latexBlocked:!0,loading:u,afterClose:()=>{c&&i.current&&i.current.clear(),l(!1)}})]})},H=x.div`
  color: ${S.Black};
  font-family: ${b.SFPro};
  padding: 30px;
  text-align: center;
  @media (max-width: 660px) {
    padding: 30px 10px;
  }
`,U=x.div.attrs({className:`flex-center`})`
  font-size: 22px;
  background: #2e7d32;
  color: ${S.White};
  height: 43px;
  width: 43px;
  border-radius: 50%;
`,W=x.div`
  font-size: 26px;
  line-height: 1;
  margin-top: 16px;
  font-weight: ${C.Bold};
  @media (max-width: 660px) {
    line-height: 1.5;
  }
`,G=function(e){return e.waiting=`waiting`,e.rejected=`rejected`,e.accepted=`accepted`,e}({}),K=e=>{let[n,r]=k.useState([]),i=()=>{t({url:`/api/kitcollab/my-questions/${e.sessionId}`,data:{userSessionId:e.userSessionId},success:e=>{r(e)}})},a=(e,t)=>{r(n=>[{_id:e,status:`waiting`,question:t},...n])},o=n=>{u.confirm({title:`Are you sure you want to delete this question?`,okText:`Yes`,onOk:()=>{r(e=>e.filter(e=>e._id!==n)),t({url:`/api/kitcollab/question/remove`,data:{questionId:n,userSessionId:e.userSessionId}})}})};return k.useEffect(()=>{i()},[]),y(()=>i(),8e3),(0,A.jsxs)(`div`,{style:{minHeight:500},children:[(0,A.jsx)(j,{}),(0,A.jsx)(V,{sessionId:e.sessionId,userName:e.userName,userSessionId:e.userSessionId,addQuestion:a}),(0,A.jsx)(ee,{children:n.map(t=>(0,A.jsx)(`div`,{className:`maxWidth`,children:(0,A.jsx)(L,{id:t._id,question:t.question,status:t.status,deleteQuestion:o,userSessionId:e.userSessionId})},`submitted-question-${t._id}`))})]})},ne=e=>(0,A.jsxs)(q,{children:[(0,A.jsx)(J,{}),(0,A.jsx)(Y,{children:`KitCollab`}),(0,A.jsxs)(X,{children:[(0,A.jsx)(`b`,{children:e.creatorName}),` invited you to contribute questions to their`,` `,(0,A.jsx)(`b`,{children:e.gameName}),` kit. Once you enter, you can submit questions to be added to the kit.`]}),(0,A.jsx)(w,{style:{margin:`30px 0px`}})]}),q=x.div.attrs({className:`maxWidth flex-center flex-column`})``,J=x.img.attrs({src:`/client/img/svgLogo.svg`})`
  height: 24px;
  opacity: 0.8;
`,Y=x.div`
  font-size: 48px;
  font-weight: ${C.UltraBold};
  line-height: 1;
  margin-top: 10px;
`,X=x.div`
  font-size: 18px;
  margin-top: 15px;
`,Z=e=>(0,A.jsx)(d,{size:`large`,block:!0,type:`primary`,style:Object.assign({height:50},e.style||{}),onClick:e.onClick,loading:e.loading,disabled:e.disabled,children:e.label}),re=e=>{let[t,n]=k.useState(``);k.useEffect(()=>{e.onNameChange(t)},[t]);let r=e=>{n(e.target.value.trimStart())},i=()=>{t&&e.join()};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(p,{size:`large`,placeholder:`Enter your name...`,style:{height:45,marginBottom:10},autoFocus:!0,value:t,onChange:r,maxLength:48,onPressEnter:i}),(0,A.jsx)(Z,{onClick:i,loading:e.loading,label:`Enter`,disabled:!t})]})},ie=e=>(0,A.jsx)(Z,{onClick:e.join,loading:e.loading,label:`Enter`}),ae=e=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Z,{label:`Login`,onClick:()=>{D(i(window.location.pathname))},style:{marginBottom:15}}),(0,A.jsxs)(ce,{children:[`To enter, you must be in a class ran by `,e.creatorName,`.`]})]}),oe=e=>(0,A.jsxs)(le,{children:[`This KitCollab is only open to those in a class ran by `,e.creatorName,`.`]}),se=e=>{let{sessionId:r,creatorName:i,canAccess:o,mustBeLoggedIn:s}=e,[c,l]=k.useState(!1),[u,d]=k.useState(``),f=()=>{c||(l(!0),t({url:`/api/kitcollab/session/join/${r}`,data:{name:u},success:t=>{t&&t.id&&(u&&e.setUserName(u),e.setUserSessionId(t.id)),e.switchToDashboardScreen()},error:e=>{n({e,default:{title:`Error joining. Please try again later.`}}),l(!1)}}))};return(0,A.jsx)(Q,{children:(()=>{let e=a();return!s&&!e?(0,A.jsx)(re,{join:f,onNameChange:d,loading:c}):e?o?(0,A.jsx)(ie,{join:f,loading:c}):(0,A.jsx)(oe,{creatorName:i}):(0,A.jsx)(ae,{creatorName:i})})()})},Q=x.div.attrs({className:`maxWidth`})``,ce=x.div.attrs({className:`maxWidth`})`
  font-size: 16px;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
`,le=x.div.attrs({className:`maxWidth`})`
  font-size: 16px;
  text-align: center;
  padding: 20px 30px;
  border-radius: 50px;
  background: #ffebee;
  border: 2px solid #e53935;
`,ue=e=>(0,A.jsxs)(de,{children:[(0,A.jsx)(ne,{creatorName:e.creatorName,gameName:e.gameName}),(0,A.jsx)(se,{sessionId:e.sessionId,creatorName:e.creatorName,canAccess:e.canAccess,mustBeLoggedIn:e.mustBeLoggedIn,switchToDashboardScreen:e.switchToDashboardScreen,setUserName:e.setUserName,setUserSessionId:e.setUserSessionId})]}),de=x.div``,fe=()=>{let e=c().id,[n,r]=k.useState(``),[i,a]=k.useState(``),[s,l]=k.useState(`join`),[u,d]=k.useState(!0),[f,p]=k.useState(``),[m,g]=k.useState(``),[_,v]=k.useState(!1),[y,b]=k.useState(!1),[x,S]=k.useState(``);return k.useEffect(()=>{t({url:`/api/kitcollab/contributor/session-info/${e}`,success:e=>{p(e.sessionOwnerName),g(e.gameName),v(e.canAccess),b(e.mustBeLoggedIn)},error:e=>{e&&e.message&&e.message.text?S(e.message.text):S(`There was an error. Please try again later.`)},both:()=>{d(!1)}})},[]),u?(0,A.jsx)($,{children:(0,A.jsx)(h,{size:`large`})}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)($,{children:(0,A.jsx)(pe,{children:x?(0,A.jsx)(`div`,{style:{fontSize:18},children:x}):s===`dashboard`?(0,A.jsx)(K,{sessionId:e,userName:n,userSessionId:i}):(0,A.jsx)(ue,{sessionId:e,creatorName:f,canAccess:_,gameName:m,mustBeLoggedIn:y,switchToDashboardScreen:()=>l(`dashboard`),setUserName:r,setUserSessionId:a})})}),(0,A.jsx)(o,{title:`KitCollab`})]})},$=x.div.attrs({className:`flex-center scroll-y`})`
  flex: 1;
  background: ${S.Snow};
  color: ${S.Black};
  font-family: ${b.SFPro};
`,pe=x(T)`
  width: 90%;
  max-width: 640px;
  border-radius: 8px;
  padding: 40px 30px;
  margin: 40px 0px;
`;export{fe as default};