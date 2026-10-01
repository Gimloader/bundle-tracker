import{j as t,d as i,r as l,U as c,a5 as v}from"./_index.js";import{h as w,P as j}from"./PublishedDate.js";import{g as y}from"./getCloudinaryUrl.js";const q=({map:e})=>{const n=w(e.lastPublishedAt);return t.jsxs(P,{children:[t.jsx(T,{to:`/creative/map/${e._id}`,"aria-label":e.title}),t.jsx(z,{children:t.jsx(d,{src:y(e.image),alt:"",loading:"lazy"})}),t.jsxs($,{children:[t.jsx(k,{tags:e.tags}),t.jsx(F,{title:e.title,children:e.title}),e.username||n?t.jsxs(R,{children:[e.username?t.jsxs(A,{children:["@",e.username]}):null,n?t.jsxs(S,{children:[e.hasBeenUpdated?"Updated":"Published"," ",t.jsx(j,{value:e.lastPublishedAt})]}):null]}):null]})]})},k=({tags:e})=>{const n=l.useRef(null),h=l.useRef(null),[f,b]=l.useState([]);return l.useEffect(()=>{let r=!0;const o=()=>{if(!r||!n.current||!h.current)return;let p=n.current.clientWidth;const s=[];Array.from(h.current.children).forEach((a,m)=>{const u=a.getBoundingClientRect().width+(s.length?6:0);u<=p&&(s.push(m),p-=u)}),b(a=>a.join(",")===s.join(",")?a:s)},x=new ResizeObserver(o);return n.current&&x.observe(n.current),o(),document.fonts.ready.then(o),()=>{r=!1,x.disconnect()}},[e]),t.jsxs(C,{ref:n,children:[t.jsx(M,{ref:h,"aria-hidden":"true",children:e.map((r,o)=>t.jsx(g,{children:r},o))}),f.length?t.jsx(D,{children:f.map(r=>t.jsx(g,{children:e[r]},r))}):null]})},d=i.img`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.22s ease;
`,P=i.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 12px;
  color: white;
  background: transparent;
  text-decoration: none;
  transition:
    transform 0.18s ease,
    background 0.18s ease,
    box-shadow 0.18s ease;

  &:hover,
  &:focus-within {
    color: white;
    background: transparent;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
    }
    &:hover ${d} {
      transform: scale(1.035);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    &,
    ${d} {
      transition: none;
    }
    &:hover,
    &:hover ${d} {
      transform: none;
    }
  }
`,z=i.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  overflow: hidden;
  background: rgba(27, 6, 91, 0.25);
`,$=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  padding: 12px 4px 6px;
`,C=i.div`
  position: relative;
  min-width: 0;
`,M=i.div`
  position: absolute;
  display: flex;
  visibility: hidden;
  pointer-events: none;
  width: max-content;
`,D=i.div`
  margin-bottom: 8px;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  gap: 6px;
`,g=i.span`
  flex-shrink: 0;
  white-space: nowrap;
  font-family: ${c.SFPro};
  font-size: 10px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #eee5ff;
  background: rgba(103, 58, 183, 0.22);
  box-shadow: inset 0 0 0 1px rgba(214, 196, 255, 0.2);
  border-radius: 5px;
  padding: 4px 7px;
`,F=i.h3`
  font-family: ${c.SFPro};
  font-size: 17px;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: -0.15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`,R=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 5px;
  font-family: ${c.SFPro};
`,S=i.div`
  color: rgba(255, 255, 255, 0.65);
  font-family: ${c.SFPro};
  font-size: 12px;
  line-height: 1.4;
`,T=i(v)`
  position: absolute;
  inset: 0;
  z-index: 1;
  border-radius: inherit;
  &:focus-visible {
    outline: 3px solid #d6c4ff;
    outline-offset: -3px;
  }
`,A=i.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  overflow-wrap: anywhere;
`;export{q as M};
