import{o as e}from"./rolldown-runtime.js";import{C as t,O as n,S as r}from"./utils.js";import{t as i}from"./react-1.js";import{l as a}from"./dist-3.js";import{t as o}from"./spin.js";import{n as s}from"./Company.js";import"./Paths.js";import{t as c}from"./jsx-runtime.js";import{c as l,l as u,n as d,s as f,y as p}from"./_index.js";import{t as m}from"./Paper.js";import{t as h}from"./NavigateTo.js";import{t as g}from"./Button.js";import{t as _}from"./ImagePreview.js";import v from"./PreviewComponent.js";var y=e(i()),b=c(),x=e=>(0,b.jsx)(S,{children:(0,b.jsxs)(C,{children:[(0,b.jsx)(_,{size:92,blockModalOpen:!0,image:e.image,style:{cursor:`default`}}),(0,b.jsx)(w,{children:e.title}),(0,b.jsx)(T,{children:e.creator}),(0,b.jsx)(p,{}),e.numberOfQuestions===0?(0,b.jsx)(`div`,{style:{fontSize:18},children:`This kit cannot be practiced as it does not contain any questions.`}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g,{customFontWeight:f.Bold,type:`success`,size:`large`,onClick:e.setToPreview,ariaLabel:`Practice`,children:`Practice`}),(0,b.jsxs)(E,{children:[(0,b.jsxs)(`div`,{children:[e.numberOfQuestions,` `,r(`question`,e.numberOfQuestions)]}),(0,b.jsx)(`div`,{style:{margin:`0px 12px`},className:`flex`,children:(0,b.jsx)(`i`,{className:`fas fa-circle`,style:{fontSize:10}})}),(0,b.jsxs)(`div`,{children:[`Powered by `,s]})]})]})]})}),S=u.div.attrs({className:`flex-center scroll-y maxAll`})`
  background: #303f9f;
  color: ${d.Black};
  font-family: ${l.SFPro};
`,C=u(m).attrs({className:`flex-center flex-column animated fadeIn`})`
  width: 90%;
  max-width: 700px;
  border-radius: 8px;
  padding: 40px 30px;
  margin: 40px 0px;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 50px rgba(0, 0, 0, 0.4);
`,w=u.div`
  margin-top: 14px;
  font-size: 48px;
  font-weight: ${f.UltraBold};
  text-align: center;
`,T=u.div`
  font-size: 24px;
  margin-top: -4px;
`,E=u.div.attrs({className:`flex vc`})`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 20px;
  line-height: 1;
`,D=()=>{let[e,r]=n(!1),[i,s]=y.useState(null),[c,l]=y.useState(``),{id:u}=a();return y.useEffect(()=>{t({url:`/api/games/fetch/${u}`,success:e=>{s(e.kit),l(e.creator.name)},error:()=>h(`/`)})},[]),i?e?(0,b.jsx)(v,{questions:i.questions}):(0,b.jsx)(x,{title:i.title,image:i.gif,creator:c,numberOfQuestions:i.questions.length,setToPreview:r}):(0,b.jsx)(`div`,{className:`maxAll flex-center`,style:{background:`#303f9f`},children:(0,b.jsx)(o,{size:`large`})})};export{D as default};