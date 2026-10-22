import{o as e}from"./rolldown-runtime.js";import{t}from"./react-1.js";import{r as n}from"./SixteenByNineScaler.js";import{t as r}from"./jsx-runtime.js";import{l as i}from"./_index.js";import{n as a}from"./Button-2.js";import{f as o,t as s}from"./motion.js";import{t as c}from"./phaser.js";import{L as l,ot as u}from"./App-42.js";import{t as d}from"./Options.js";t();var f=r(),p={out:{y:`100%`,opacity:0},in:{y:0,opacity:1}},m=()=>{let e=o();return(0,f.jsx)(h,{onClick:e=>{e.stopPropagation()},initial:p.out,animate:p.in,exit:p.out,transition:{duration:e?.3:.2,ease:`easeOut`},children:(0,f.jsx)(d,{})})},h=i(s.div).attrs({className:`medium-shadow flex-column`})`
  padding: 40px;
  background: rgba(48, 28, 86, 0.97);
  color: ${a.White};
  width: 90%;
  max-width: 800px;
  height: 80%;
  max-height: 400px;
  border-radius: 10px;
  overflow: hidden;
`,g=e(c()),_={out:{background:`rgba(0,0,0,0)`},in:{background:`rgba(0,0,0,0.6)`}},v=e=>{let t=o(),r=()=>e.setToHomeScreen();return u(g.default.Input.Keyboard.KeyCodes.ESC,r,[r]),(0,f.jsxs)(n,{children:[(0,f.jsx)(y,{onClick:r,initial:_.out,animate:_.in,exit:_.out,transition:{duration:t?.3:.2,ease:`easeOut`},children:(0,f.jsx)(m,{})}),(0,f.jsx)(l,{onClick:r})]})},y=i(s.div).attrs({className:`maxAll flex-center flex-column`})`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;export{v as default};