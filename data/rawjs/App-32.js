import{o as e}from"./rolldown-runtime.js";import{C as t,E as n,g as r,m as i,t as a}from"./utils.js";import{t as o}from"./react-1.js";import{l as s}from"./dist-3.js";import{t as c}from"./modal.js";import{t as l}from"./button.js";import{t as u}from"./spin.js";import{t as d}from"./App-4.js";import"./Paths.js";import{t as f}from"./jsx-runtime.js";import{c as p,l as m,m as h,n as g,s as _}from"./_index.js";import{t as v}from"./NavigateTo.js";import{t as y}from"./Centered.js";import{t as b}from"./IsURLFromUs.js";var x=e(o()),S=f(),C=e=>{let{groupName:t,groupColor:n,groupCreator:r,icon:i,iconColor:a,response:o,bottomResponse:s}=e;return(0,S.jsx)(w,{children:(0,S.jsxs)(T,{children:[(0,S.jsx)(E,{style:{background:n}}),(0,S.jsx)(D,{children:t}),(0,S.jsx)(O,{children:r}),(0,S.jsxs)(k,{children:[(0,S.jsxs)(A,{children:[(0,S.jsx)(`div`,{children:(0,S.jsx)(j,{className:i,style:{color:a}})}),(0,S.jsx)(`div`,{children:(0,S.jsx)(M,{children:o})})]}),s||null]})]})})},w=m.div.attrs({className:`flex hc`})`
  background: ${g.Snow};
  color: ${g.Black};
  align-items: flex-start;
  font-family: ${p.SFPro};
  flex: 1;
`,T=m.div.attrs({className:`flex flex-column hc vc`})`
  max-width: 700px;
  width: 90%;
  margin-top: 50px;
  margin-bottom: 50px;
`,E=m.div.attrs({className:`light-shadow`})`
  height: 115px;
  width: 115px;
  border-radius: 8px;
`,D=m.div`
  margin-top: 10px;
  text-align: center;
  font-size: 50px;
  font-weight: ${_.UltraBold};
`,O=m.div`
  font-size: 22px;
  margin-top: -4px;
  color: rgba(0, 0, 0, 0.7);
`,k=m.div.attrs({className:`maxWidth`})`
  background: ${g.White};
  padding: 30px;
  border-radius: 7px;
  border-style: solid;
  border-width: 2px;
  border-color: ${g.BorderGray};
  margin-top: 25px;
`,A=m.div.attrs({className:`flex maxWidth vc`})``,j=m.i`
  font-size: 40px;
`,M=m.div`
  margin-left: 30px;
  font-size: 18px;
`,N=()=>{let[e,o]=x.useState(!0),[f,p]=x.useState(null),[m,_]=x.useState(!1),y=s().id,w=i(`redirect`);w&&(b(decodeURIComponent(w))||(w=null)),x.useEffect(()=>{if(r())t({url:`/api/v1/groups/request-access`,method:`post`,data:{group:y},success:e=>{e&&e.result&&e.result.response&&e.result.response===`IN`&&e.result.existing&&w?window.location.href=decodeURIComponent(w):(p(e),o(!1))},error:e=>{n({e,default:{title:`Error joining class`,content:`Please contact support if this issue persists.`}}),o(!1),v(`/me`)}});else{if(w){window.location.href=`/join-class?class=${y}&location=${encodeURIComponent(window.location.pathname+window.location.search+window.location.hash)}`;return}window.location.href=`/join-class?class=${y}`}},[]);let T=()=>{m||c.confirm({title:`Are you sure you want to switch to a student?`,content:(0,S.jsxs)(`div`,{style:{color:g.Black},children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`b`,{children:`Students`}),`- you're almost there! Keep going!`]}),(0,S.jsx)(`br`,{}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`b`,{children:`Teachers`}),` - Don't switch! Doing so will cause you to lose many features.`]})]}),onOk:()=>{_(!0),t({url:`/api/user/change-to-student`,success:()=>{c.destroyAll(),h({}),c.success({title:`Switched to a student!`,content:`Click 'OK' to join this class`,onOk:()=>window.location.reload()})},error:()=>{c.error({title:`There was an error switching to a student`,content:`Please try again later`,onOk:()=>window.location.reload()})},both:()=>_(!1)})},okText:`Switch to a student`,cancelText:`Stay as a teacher`})};return(0,S.jsxs)(P,{children:[(0,S.jsx)(d,{includeSpacer:!0}),(0,S.jsx)(F,{children:(()=>{if(!r())return null;if(e)return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{title:`Class`}),(0,S.jsx)(u,{size:`large`})]});if(!f)return null;let{group:t}=f,n=(()=>{let{result:e}=f;return e.response===`ERROR`?e.reason&&e.reason===`NOT_TEACHER`?{icon:`fas fa-chalkboard-teacher`,iconColor:`#311b92`,response:(0,S.jsx)(`span`,{children:`It looks like you created an account as a teacher. Only students can join classes. Switch to a student to join this class.`}),bottomResponse:(0,S.jsx)(l,{size:`large`,block:!0,style:{marginTop:30},type:`primary`,onClick:T,loading:m,children:`Switch To A Student`})}:{icon:`fas fa-school`,iconColor:`red`,response:`There was an error joining this class. Please try again.`}:e.response===`WAITING`?{icon:`fad fa-traffic-cone`,iconColor:`#ff8f00`,response:`You've requested to join this class! Once your teacher accepts you, you'll be able to access their live games and assignments.`}:e.response===`OWNER`?{icon:`fas fa-thumbs-up`,iconColor:`#43a047`,response:`You're in the right place! Once your students visit this link, they'll ${t.autoAccept?`be part of your class!`:`request to join your class!`}`}:{icon:`fas fa-check`,iconColor:`#43a047`,response:`You're now part of this class! That means you can access live games and assignments from your teacher.`,bottomResponse:w?(0,S.jsx)(l,{size:`large`,block:!0,style:{marginTop:30},type:`primary`,href:decodeURIComponent(w),children:`Go Back`}):null}})();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{title:t.name}),(0,S.jsx)(C,{groupName:t.name,groupColor:t.color,groupCreator:t.creator,icon:n.icon,iconColor:n.iconColor,response:n.response,bottomResponse:n.bottomResponse})]})})()})]})},P=m.div.attrs({className:`maxWidth flex-column`})`
  background: ${g.Snow};
  flex: 1;
`,F=m(y)`
  flex: 1;
`;export{N as default};