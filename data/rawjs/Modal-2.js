import{o as e}from"./rolldown-runtime.js";import{O as t,S as n,y as r}from"./utils.js";import{t as i}from"./react-1.js";import{t as a}from"./jsx-runtime.js";import{n as o}from"./useDebouncedValue.js";import{a as s,l as c,s as l}from"./_index.js";import{t as u}from"./Button-2.js";import{f as d,t as f}from"./motion.js";import{L as p}from"./App-42.js";import{ANIMATION_DURATION as m}from"./App-62.js";var h=e(i()),g=a(),_=e=>{let[r,i]=h.useState(``),[a,s,c]=t(!1),l=e=>{i(e.target.value),c()},d=e=>{e.key===`Enter`&&f()},f=()=>{let t=r.trim();t.length&&e.guess(t)};o(()=>{s(),i(``)},[e.incorrectCounter]),h.useEffect(()=>{e.useMaxAttempts&&e.attempts>=e.maxAttempts&&i(``)},[e.attempts,e.maxAttempts,e.useMaxAttempts]);let p=h.useMemo(()=>{if(!e.useMaxAttempts)return null;if(e.attempts>=e.maxAttempts)return{message:`No More Guesses Allowed`,color:`red`};let t=e.maxAttempts-e.attempts;return{message:`${t} ${n(`attempt`,t)} remaining`,color:`yellow`}},[e.maxAttempts,e.attempts,e.useMaxAttempts]),m=e.useMaxAttempts&&e.attempts>=e.maxAttempts;return(0,g.jsxs)(v,{children:[(0,g.jsx)(y,{children:`Enter Password:`}),p?(0,g.jsx)(b,{style:{color:p.color},children:p.message}):null,(0,g.jsx)(x,{className:a?`animated shake`:``,placeholder:`Enter password here...`,type:`text`,autoFocus:!0,value:r,onChange:l,maxLength:`64`,onKeyDown:d,disabled:m,style:m?{}:{cursor:`not-allowed`}}),(0,g.jsx)(u,{size:`small`,type:`success`,onClick:f,ariaLabel:`Submit`,children:`Submit`})]})},v=c.div.attrs({className:`maxWidth flex-center flex-column`})`
  line-height: 1;
`,y=c.div`
  font-size: 26px;
`,b=c.div`
  font-size: 14px;
  margin-top: 11px;
`,x=c.input.attrs({className:`maxWidth`})`
  background: rgba(255, 255, 255, 0.1);
  border: 0px;
  border-radius: 2px;
  padding: 10px;
  font-size: 18px;
  margin-top: 22px;
  margin-bottom: 22px;
`,S={y:` 100%`,opacity:0},C={y:`0%`,opacity:1},w=e=>{let n=d(),[i,a]=t(!1);return s(()=>{r(`https://fonts.googleapis.com/css2?family=PT+Mono&display=swap`)}),(0,g.jsxs)(T,{onClick:()=>{n&&i&&e.close()},children:[(0,g.jsx)(E,{initial:S,animate:C,exit:S,transition:{duration:m,ease:`easeOut`},onClick:e=>e.stopPropagation(),onAnimationComplete:a,children:(0,g.jsx)(_,{...e})}),(0,g.jsx)(p,{onClick:e.close})]})},T=c.div.attrs({className:`maxAll flex-center`})``,E=c(f.div).attrs({className:`medium-shadow scroll-y`})`
  max-height: 80%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(3px);
  padding: 45px;
  width: 90%;
  border-radius: 14px;
  max-width: 650px;
  font-family: 'PT Mono', monospace;
  font-weight: ${l.Bold};
`;export{w as default};