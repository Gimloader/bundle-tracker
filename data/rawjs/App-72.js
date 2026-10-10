import{o as e}from"./rolldown-runtime.js";import{t,w as n}from"./utils.js";import{t as r}from"./react-1.js";import{r as i}from"./dist-3.js";import{t as a}from"./dropdown.js";import{n as o}from"./Company.js";import{t as s}from"./jsx-runtime.js";import{t as c}from"./useQuery.js";import{t as l}from"./useInfiniteQuery.js";import{c as u,l as d}from"./_index.js";import{t as f}from"./CircularProgress.js";import{n as p}from"./App-44.js";import{t as m}from"./MapCard.js";var h=[`creative-discovery`],g=()=>c(h,()=>n({url:`/api/created-map/listing/discovery`}),{refetchOnMount:!1,refetchOnWindowFocus:!1}),_=e(r()),v=`useDiscoverySearch`,y=(e,t={})=>l({queryKey:[v,{searchQuery:e,...t}],enabled:!!e,staleTime:6e4,refetchOnWindowFocus:!1,queryFn:({pageParam:r=0})=>n({url:`/api/created-map/listing/discovery/search`,data:{...t,query:e,page:r}}),getNextPageParam:e=>e.hasMore?e.nextPage??void 0:void 0}),b=s(),x=({list:e,id:t})=>{let n=(0,_.useRef)(null),r=(0,_.useId)(),[i,a]=(0,_.useState)({start:!0,end:!0}),o=(0,_.useCallback)(()=>{let e=n.current;if(!e)return;let t={start:e.scrollLeft<=2,end:e.scrollLeft+e.clientWidth>=e.scrollWidth-2};a(e=>e.start===t.start&&e.end===t.end?e:t)},[]);(0,_.useEffect)(()=>{o();let e=n.current;if(!e)return;let t=new ResizeObserver(o);return t.observe(e),()=>t.disconnect()},[o,e.items.length]);let s=e=>{let t=n.current;t&&t.scrollBy({left:e*t.clientWidth*.9,behavior:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches?`auto`:`smooth`})};return e.items.length?(0,b.jsx)(S,{id:t,"aria-labelledby":`${r}-title`,children:(0,b.jsxs)(C,{children:[(0,b.jsxs)(w,{children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(T,{id:`${r}-title`,children:e.name}),e.description?(0,b.jsx)(E,{children:e.description}):null]}),(0,b.jsxs)(D,{children:[(0,b.jsx)(O,{"aria-label":`Previous maps in ${e.name}`,"aria-controls":r,disabled:i.start,onClick:()=>s(-1),children:`‹`}),(0,b.jsx)(O,{"aria-label":`Next maps in ${e.name}`,"aria-controls":r,disabled:i.end,onClick:()=>s(1),children:`›`})]})]}),(0,b.jsx)(k,{id:r,ref:n,onScroll:o,tabIndex:0,"aria-label":e.name,onKeyDown:e=>{e.target===e.currentTarget&&(e.key===`ArrowLeft`||e.key===`ArrowRight`)&&(e.preventDefault(),s(e.key===`ArrowLeft`?-1:1))},children:e.items.map(e=>(0,b.jsx)(`li`,{children:(0,b.jsx)(m,{map:e})},e._id))})]})}):null},S=d.section`
  min-width: 0;
  scroll-margin-top: 24px;
`,C=d(p)`
  box-sizing: border-box;
  min-width: 0;
  padding: 28px;
  @media (max-width: 600px) {
    padding: 22px 16px;
  }
`,w=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
  > div:first-child {
    min-width: 0;
  }
`,T=d.h2`
  font-family: ${u.SFPro};
  font-size: 23px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.3px;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 21px;
  }
`,E=d.p`
  font-family: ${u.SFPro};
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  margin: 5px 0 0;
`,D=d.div`
  display: flex;
  flex-shrink: 0;
  gap: 8px;
`,O=d.button`
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  padding: 0 0 3px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 30px;
  line-height: 1;
  cursor: pointer;
  transition:
    background 150ms ease,
    border-color 150ms ease,
    transform 150ms ease;
  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.45);
    transform: translateY(-1px);
  }
  &:active:not(:disabled) {
    background: rgba(255, 255, 255, 0.26);
    transform: scale(0.96);
  }
  &:focus-visible {
    outline: 2px solid #d6c4ff;
    outline-offset: 3px;
  }
  &:disabled {
    opacity: 0.25;
    cursor: default;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover:not(:disabled),
    &:active:not(:disabled) {
      transform: none;
    }
  }
`,k=d.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: clamp(210px, 20vw, 260px);
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
  scroll-padding-inline: 4px;
  scrollbar-width: thin;
  scrollbar-color: rgba(214, 196, 255, 0.3) transparent;
  list-style: none;
  margin: 0 -4px;
  padding: 6px 4px 10px;
  > li {
    min-width: 0;
    scroll-snap-align: start;
  }
  &:focus-visible {
    outline: 2px solid #d6c4ff;
    outline-offset: 3px;
    border-radius: 10px;
  }
  @media (max-width: 600px) {
    grid-auto-columns: 72%;
    gap: 14px;
  }
`,A=[{key:`relevance`,label:`Relevance`},{key:`mostPlayed`,label:`Most played`},{key:`recentlyUpdated`,label:`Recently updated`}],j=({lists:e,isLoading:t,error:n,onRetry:r})=>{var o,s,c,l;let[u,d]=i(),f=((o=u.get(`q`))==null?void 0:o.trim())||``,[p,h]=(0,_.useState)(f),g=u.get(`sort`),v={sort:g===`mostPlayed`||g===`recentlyUpdated`?g:`relevance`},S=y(f,v),C=e=>{let t=new URLSearchParams(u);e===`relevance`?t.delete(`sort`):t.set(`sort`,e),d(t)},w=((s=S.data)==null?void 0:s.pages.flatMap(e=>e.items))??[];(0,_.useEffect)(()=>h(f),[f]);let T=e=>{let t=new URLSearchParams(u),n=e.trim();n?t.set(`q`,n):t.delete(`q`),h(n),d(t),n&&n===f&&S.refetch()};return(0,b.jsxs)(N,{children:[(0,b.jsx)(F,{children:(0,b.jsxs)(I,{role:`search`,onSubmit:e=>{e.preventDefault(),T(p)},children:[(0,b.jsx)(R,{"aria-label":`Search for maps`,placeholder:`Search for maps...`,value:p,onChange:e=>h(e.target.value)}),p||f?(0,b.jsx)(V,{type:`button`,"aria-label":`Clear search`,onClick:()=>T(``),children:(0,b.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,b.jsx)(`path`,{d:`m4 4 8 8M12 4l-8 8`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`})})}):null,(0,b.jsx)(B,{type:`submit`,"aria-label":`Search`,title:`Search`,children:(0,b.jsxs)(L,{viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:[(0,b.jsx)(`circle`,{cx:`10.5`,cy:`10.5`,r:`6.5`,stroke:`currentColor`,strokeWidth:`2`}),(0,b.jsx)(`path`,{d:`m16 16 4.5 4.5`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]})})]})}),(0,b.jsx)(P,{children:f?(0,b.jsx)(U,{"aria-label":`Search results`,children:(0,b.jsxs)(W,{children:[(0,b.jsx)($,{children:(0,b.jsx)(a,{trigger:[`click`],placement:`bottomRight`,menu:{selectable:!0,selectedKeys:[v.sort],items:A,onClick:({key:e})=>C(e)},children:(0,b.jsxs)(te,{type:`button`,"aria-label":`Sort by: ${(c=A.find(e=>e.key===v.sort))==null?void 0:c.label}`,title:`Sort search results`,children:[(0,b.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,children:(0,b.jsx)(`path`,{d:`M4 6h16M7 12h10M10 18h4`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})}),(0,b.jsxs)(ne,{children:[`Sort by:`,` `,(l=A.find(e=>e.key===v.sort))==null?void 0:l.label]}),(0,b.jsx)(re,{viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,children:(0,b.jsx)(`path`,{d:`m3 4.5 3 3 3-3`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})})}),S.isLoading?(0,b.jsx)(M,{label:`Searching for maps`}):S.isError&&!S.data?(0,b.jsxs)(ee,{children:[(0,b.jsx)(`p`,{children:`There was an error searching for maps. Please try again.`}),(0,b.jsx)(z,{onClick:()=>S.refetch(),children:`Try again`})]}):w.length?(0,b.jsx)(Y,{children:w.map(e=>(0,b.jsx)(`li`,{children:(0,b.jsx)(m,{map:e})},e._id))}):(0,b.jsxs)(G,{children:[(0,b.jsx)(K,{"aria-hidden":`true`,children:(0,b.jsxs)(`svg`,{viewBox:`0 0 48 48`,fill:`none`,children:[(0,b.jsx)(`circle`,{cx:`21`,cy:`21`,r:`13`,stroke:`currentColor`,strokeWidth:`2.5`}),(0,b.jsx)(`path`,{d:`m31 31 9 9M17 21h8`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`})]})}),(0,b.jsxs)(`div`,{role:`status`,children:[(0,b.jsx)(q,{children:`No maps found`}),(0,b.jsx)(J,{children:`Try a different search.`})]})]}),S.hasNextPage?(0,b.jsxs)(X,{children:[S.isError?(0,b.jsx)(`p`,{role:`status`,children:`Couldn't load more maps. Please try again.`}):null,(0,b.jsxs)(ie,{type:`button`,disabled:S.isFetching,"aria-busy":S.isFetchingNextPage,onClick:()=>S.fetchNextPage({cancelRefetch:!1}),children:[(0,b.jsx)(`span`,{children:S.isFetchingNextPage?`Loading more maps…`:S.isError?`Try again`:`Load more`}),S.isFetchingNextPage?null:(0,b.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,b.jsx)(`path`,{d:`m4 6 4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),S.isFetchingNextPage?(0,b.jsx)(`span`,{role:`status`,"aria-label":`Loading more maps`}):null]}):null]})}):t?(0,b.jsx)(M,{label:`Loading Discovery`}):n?(0,b.jsxs)(Z,{children:[(0,b.jsx)(`p`,{children:`There was an error loading Discovery. Please try again.`}),(0,b.jsx)(z,{onClick:r,children:`Try again`})]}):(0,b.jsx)(H,{children:e.map((e,t)=>(0,b.jsx)(x,{list:e,id:`discovery-collection-${t}`},e.name))})})]})},M=({label:e})=>(0,b.jsx)(Q,{role:`status`,"aria-label":e,children:(0,b.jsx)(f,{size:30,style:{color:`white`}})}),N=d.div`
  min-width: 0;
`,P=d.div`
  min-width: 0;
`,F=d.div`
  padding: 12px 0 40px;
`,I=d.form`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  max-width: 840px;
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  padding: 8px 8px 8px 22px;
  min-height: 64px;
  border: 1px solid rgba(214, 196, 255, 0.4);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(3px);
  box-shadow:
    0 6px 20px rgba(27, 6, 91, 0.16),
    inset 0 1px rgba(255, 255, 255, 0.08);
  &:focus-within {
    border-color: #b99ae9;
    box-shadow: 0 0 0 3px rgba(185, 154, 233, 0.15);
  }
  @media (max-width: 600px) {
    min-height: 58px;
    padding-left: 14px;
    gap: 8px;
  }
`,L=d.svg`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  display: block;
  color: currentColor;
`,R=d.input`
  flex: 1;
  min-width: 0;
  width: 100%;
  background: none;
  border: 0;
  outline: none;
  padding: 8px 0;
  color: white;
  font-family: ${u.SFPro};
  font-size: 18px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`,z=d.button`
  background: #673ab7;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  padding: 12px 20px;
  font: inherit;
  cursor: pointer;
  &:hover {
    background: #7e57c2;
  }
  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 3px;
  }
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`,B=d.button`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  position: relative;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: white;
  font-family: ${u.SFPro};
  font-size: 15px;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 10px;
    bottom: 10px;
    width: 1px;
    background: rgba(214, 196, 255, 0.3);
  }
  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
  &:active {
    background: rgba(255, 255, 255, 0.18);
  }
  &:focus-visible {
    outline: 2px solid #d6c4ff;
    outline-offset: 2px;
  }
`,V=d.button`
  display: grid;
  place-items: center;
  padding: 0;
  line-height: 1;
  flex-shrink: 0;
  border: 0;
  background: none;
  color: rgba(255, 255, 255, 0.7);
  width: 36px;
  height: 36px;
  svg {
    display: block;
  }
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: white;
  }
  &:focus-visible {
    outline: 2px solid #d6c4ff;
  }
`,H=d.div`
  display: grid;
  gap: 24px;
  min-width: 0;
`,U=d.section`
  min-width: 0;
`,W=d(p)`
  box-sizing: border-box;
  padding: 28px;
  @media (max-width: 600px) {
    padding: 22px 16px;
  }
`,ee=d.div`
  padding: 36px 12px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1.5;
  p {
    margin: 0 0 16px;
  }
  p:last-child {
    margin-bottom: 0;
  }
`,G=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 48px 16px;
  text-align: center;
  font-family: ${u.SFPro};
  @media (max-width: 600px) {
    padding: 32px 8px;
  }
`,K=d.div`
  display: grid;
  place-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(214, 196, 255, 0.12);
  color: #d6c4ff;
  svg {
    width: 44px;
    height: 44px;
  }
`,q=d.h2`
  margin: 0 0 10px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.3px;
`,J=d.p`
  max-width: 340px;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  line-height: 1.6;
`,Y=d.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 28px 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  > li {
    min-width: 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,X=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 28px;
  text-align: center;
  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
  }
`,Z=d(p)`
  box-sizing: border-box;
  text-align: center;
  p {
    margin: 0 0 16px;
  }
  p:last-child {
    margin-bottom: 0;
  }
`,Q=d.div`
  display: grid;
  place-items: center;
  min-height: 180px;
`,$=d.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`,te=d.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;
  min-height: 40px;
  padding: 0 10px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  font-family: ${u.SFPro};
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: white;
  }
  &:focus-visible {
    outline: 2px solid #d6c4ff;
    outline-offset: 2px;
  }
`,ne=d.span`
  white-space: nowrap;
`,re=d.svg`
  width: 12px;
  height: 12px;
`,ie=d.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 44px;
  min-width: 160px;
  padding: 11px 20px;
  border: 1px solid rgba(214, 196, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  color: #eee5ff;
  font-family: ${u.SFPro};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(214, 196, 255, 0.55);
  }
  &:focus-visible {
    outline: 2px solid #d6c4ff;
    outline-offset: 3px;
  }
  &:disabled {
    opacity: 0.6;
    cursor: wait;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,ae=()=>{let{isLoading:e,error:n,data:r,refetch:i}=g();return(0,b.jsxs)(oe,{children:[(0,b.jsx)(t,{title:`${o} Creative | Discovery`,override:!0}),(0,b.jsx)(se,{children:(0,b.jsx)(j,{lists:r??[],isLoading:e,error:n,onRetry:()=>i()})})]})},oe=d.div.attrs({className:`maxWidth flex hc`})`
  padding: 28px 0 64px;
  min-height: 100vh;
`,se=d.div`
  width: 92%;
  max-width: 1440px;
  min-width: 0;
`;export{ae as default};