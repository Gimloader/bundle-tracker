import{o as e}from"./rolldown-runtime.js";import{t}from"./react-1.js";import{s as n,u as r}from"./dist-3.js";import{t as i}from"./space.js";import{t as a}from"./jsx-runtime.js";import{n as o,t as s}from"./SiteHeaderAlpha.js";import{l as c,n as l}from"./_index.js";import{t as u}from"./AccessibleAnchor.js";var d=e(t()),f=a(),p=e=>{let{theme:t,option:i}=e,{pathname:a}=n(),{label:s,icon:c,path:p,otherMatchingPaths:h}=i,g=!!(p&&(r({path:p},a)||h!=null&&h.length&&h.some(e=>r({path:e},a)))),_=d.useMemo(()=>g?!0:e.selected,[g,e.selected]),v=d.useMemo(()=>_?l.BackgroundPurple:`transparent`,[t,_]),y=d.useMemo(()=>_?l.White:e.customColor?e.customColor:t===o.light?`rgb(26, 27, 37)`:l.White,[t,_,e.customColor]),b=d.useMemo(()=>_?v:t===o.light?`rgba(0, 0, 0, 0.05)`:`rgba(255, 255, 255, 0.1)`,[t,_,v]);return(0,f.jsx)(u,{to:p,target:e.option.target,onClick:i.onSelect,style:{cursor:`pointer`},children:(0,f.jsxs)(m,{$background:v,$color:y,$hoverBackground:b,children:[c?(0,f.jsx)(`span`,{style:{marginRight:6,fontSize:`0.9em`},children:c}):null,s]})})},m=c.div.attrs({className:`flex-center`})`
  line-height: 1;
  padding: 6px 12px;
  border-radius: 50px;
  background: ${e=>e.$background};
  white-space: nowrap;
  color: ${e=>e.$color};
  font-size: 15px;
  cursor: pointer;
  transition: background 0.14s ease-in-out;
  &:hover {
    background: ${e=>e.$hoverBackground};
  }
`,h=e=>(0,f.jsx)(g,{children:(0,f.jsx)(i,{direction:`horizontal`,size:8,wrap:!0,children:e.options.map(t=>(0,f.jsx)(p,{option:t,selected:e.selectedOption===t.id,theme:e.theme},`option-${t.id}`))})}),g=c.div.attrs({className:`scroll-x`})`
  flex: 1;
`,_=e=>{let t=d.useMemo(()=>e.theme??o.light,[e.theme]),n=d.useMemo(()=>e.alpha??s.standard,[e.alpha]),r=d.useMemo(()=>{let e=n===s.none?1:t===o.light?.85:.45;return t===o.light?`rgba(255, 255, 255, ${e})`:`rgba(16, 16, 16, ${e})`},[t,n]),i=d.useMemo(()=>t===o.light?`rgb(235, 238, 241)`:`rgb(143 143 143 / 60%)`,[t]);return(0,f.jsxs)(v,{$background:r,$borderColor:i,children:[(0,f.jsxs)(y,{children:[(0,f.jsx)(h,{options:e.options,selectedOption:e.selectedOption,theme:t}),(0,f.jsx)(`div`,{children:e.rightSideContent})]}),e.bottomContent]})},v=c.div.attrs({className:`maxWidth`})`
  background: ${e=>e.$background};
  padding: 7px 25px;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px ${e=>e.$borderColor};
`,y=c.div.attrs({className:`maxWidth flex vc between`})``;export{_ as t};