import{y as R,r as g,j as e,d as r,U as u,z as D,T as E,C as W}from"./_index.js";import{u as N}from"./useQuery.js";import{u as T}from"./useInfiniteQuery.js";import{M}from"./MapCard.js";import{C as w}from"./App-42.js";import{D as B}from"./index-10.js";import{C as A}from"./CircularProgress.js";import"./PublishedDate.js";import"./getCloudinaryUrl.js";import"./AnimatedBackground-1.js";import"./App-4.js";import"./Shortcut.js";import"./Names.js";import"./mobxreact.esm.js";import"./AccessibleAnchor.js";import"./index-1.js";import"./index-2.js";import"./index-6.js";import"./FontAwesomeIcon.js";import"./App-2.js";import"./Sizes.js";import"./motion.js";import"./price.js";import"./TrackPostHogEvent.js";import"./index-3.js";import"./index-4.js";import"./context.js";import"./StarOutlined.js";import"./NavigateTo.js";import"./index-15.js";import"./colors.js";import"./useWarningOnMountInDevelopment.js";import"./App-5.js";import"./Centered.js";import"./index-24.js";import"./Button.js";import"./polished.esm.js";import"./inheritsLoose.js";import"./GetAssetPath.js";import"./index-14.js";import"./EditOutlined.js";import"./styleChecker.js";import"./index-5.js";import"./CheckOutlined.js";import"./CopyOutlined.js";import"./TrackEvent.js";import"./MapStyle.js";import"./SeasonTicketInlineUpsell.js";import"./SeasonTicketName.js";import"./OwnsSeasonTicket.js";import"./move.js";import"./clsx.m.js";const q=["creative-discovery"],I=()=>N(q,()=>R({url:"/api/created-map/listing/discovery"}),{refetchOnMount:!1,refetchOnWindowFocus:!1}),O="useDiscoverySearch",U=(o,p={})=>T({queryKey:[O,{searchQuery:o,...p}],enabled:!!o,staleTime:6e4,refetchOnWindowFocus:!1,queryFn:({pageParam:a=0})=>R({url:"/api/created-map/listing/discovery/search",data:{...p,query:o,page:a}}),getNextPageParam:a=>a.hasMore?a.nextPage??void 0:void 0}),H=({list:o,id:p})=>{const a=g.useRef(null),l=g.useId(),[h,b]=g.useState({start:!0,end:!0}),d=g.useCallback(()=>{const t=a.current;if(!t)return;const s={start:t.scrollLeft<=2,end:t.scrollLeft+t.clientWidth>=t.scrollWidth-2};b(x=>x.start===s.start&&x.end===s.end?x:s)},[]);g.useEffect(()=>{d();const t=a.current;if(!t)return;const s=new ResizeObserver(d);return s.observe(t),()=>s.disconnect()},[d,o.items.length]);const m=t=>{const s=a.current;s&&s.scrollBy({left:t*s.clientWidth*.9,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})};return o.items.length?e.jsx(K,{id:p,"aria-labelledby":`${l}-title`,children:e.jsxs(_,{children:[e.jsxs(Y,{children:[e.jsxs("div",{children:[e.jsx(G,{id:`${l}-title`,children:o.name}),o.description?e.jsx(J,{children:o.description}):null]}),e.jsxs(Q,{children:[e.jsx(L,{"aria-label":`Previous maps in ${o.name}`,"aria-controls":l,disabled:h.start,onClick:()=>m(-1),children:"‹"}),e.jsx(L,{"aria-label":`Next maps in ${o.name}`,"aria-controls":l,disabled:h.end,onClick:()=>m(1),children:"›"})]})]}),e.jsx(V,{id:l,ref:a,onScroll:d,tabIndex:0,"aria-label":o.name,onKeyDown:t=>{t.target===t.currentTarget&&(t.key==="ArrowLeft"||t.key==="ArrowRight")&&(t.preventDefault(),m(t.key==="ArrowLeft"?-1:1))},children:o.items.map(t=>e.jsx("li",{children:e.jsx(M,{map:t})},t._id))})]})}):null},K=r.section`
  min-width: 0;
  scroll-margin-top: 24px;
`,_=r(w)`
  box-sizing: border-box;
  min-width: 0;
  padding: 28px;
  @media (max-width: 600px) {
    padding: 22px 16px;
  }
`,Y=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
  > div:first-child {
    min-width: 0;
  }
`,G=r.h2`
  font-family: ${u.SFPro};
  font-size: 23px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.3px;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 21px;
  }
`,J=r.p`
  font-family: ${u.SFPro};
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  margin: 5px 0 0;
`,Q=r.div`
  display: flex;
  flex-shrink: 0;
  gap: 8px;
`,L=r.button`
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
`,V=r.ul`
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
`,y=[{key:"relevance",label:"Relevance"},{key:"mostPlayed",label:"Most played"},{key:"recentlyUpdated",label:"Recently updated"}],X=({lists:o,isLoading:p,error:a,onRetry:l})=>{var k,S,P,C;const[h,b]=D(),d=((k=h.get("q"))==null?void 0:k.trim())||"",[m,t]=g.useState(d),s=h.get("sort"),x={sort:s==="mostPlayed"||s==="recentlyUpdated"?s:"relevance"},n=U(d,x),$=i=>{const c=new URLSearchParams(h);i!=="relevance"?c.set("sort",i):c.delete("sort"),b(c)},v=((S=n.data)==null?void 0:S.pages.flatMap(i=>i.items))??[];g.useEffect(()=>t(d),[d]);const j=i=>{const c=new URLSearchParams(h),f=i.trim();f?c.set("q",f):c.delete("q"),t(f),b(c),f&&f===d&&n.refetch()};return e.jsxs(Z,{children:[e.jsx(re,{children:e.jsxs(te,{role:"search",onSubmit:i=>{i.preventDefault(),j(m)},children:[e.jsx(oe,{"aria-label":"Search for maps",placeholder:"Search for maps...",value:m,onChange:i=>t(i.target.value)}),m||d?e.jsx(se,{type:"button","aria-label":"Clear search",onClick:()=>j(""),children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"m4 4 8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})})}):null,e.jsx(ne,{type:"submit","aria-label":"Search",title:"Search",children:e.jsxs(ie,{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{cx:"10.5",cy:"10.5",r:"6.5",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"m16 16 4.5 4.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})})]})}),e.jsx(ee,{children:d?e.jsx(de,{"aria-label":"Search results",children:e.jsxs(le,{children:[e.jsx(ye,{children:e.jsx(B,{trigger:["click"],placement:"bottomRight",menu:{selectable:!0,selectedKeys:[x.sort],items:y,onClick:({key:i})=>$(i)},children:e.jsxs(we,{type:"button","aria-label":`Sort by: ${(P=y.find(i=>i.key===x.sort))==null?void 0:P.label}`,title:"Sort search results",children:[e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M4 6h16M7 12h10M10 18h4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),e.jsxs(ve,{children:["Sort by:"," ",(C=y.find(i=>i.key===x.sort))==null?void 0:C.label]}),e.jsx(je,{viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"m3 4.5 3 3 3-3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})})}),n.isLoading?e.jsx(z,{label:"Searching for maps"}):n.isError&&!n.data?e.jsxs(ce,{children:[e.jsx("p",{children:"There was an error searching for maps. Please try again."}),e.jsx(F,{onClick:()=>n.refetch(),children:"Try again"})]}):v.length?e.jsx(ge,{children:v.map(i=>e.jsx("li",{children:e.jsx(M,{map:i})},i._id))}):e.jsxs(pe,{children:[e.jsx(xe,{"aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",children:[e.jsx("circle",{cx:"21",cy:"21",r:"13",stroke:"currentColor",strokeWidth:"2.5"}),e.jsx("path",{d:"m31 31 9 9M17 21h8",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"})]})}),e.jsxs("div",{role:"status",children:[e.jsx(he,{children:"No maps found"}),e.jsx(me,{children:"Try a different search."})]})]}),n.hasNextPage?e.jsxs(ue,{children:[n.isError?e.jsx("p",{role:"status",children:"Couldn't load more maps. Please try again."}):null,e.jsxs(ke,{type:"button",disabled:n.isFetching,"aria-busy":n.isFetchingNextPage,onClick:()=>n.fetchNextPage({cancelRefetch:!1}),children:[e.jsx("span",{children:n.isFetchingNextPage?"Loading more maps…":n.isError?"Try again":"Load more"}),n.isFetchingNextPage?null:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"m4 6 4 4 4-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),n.isFetchingNextPage?e.jsx("span",{role:"status","aria-label":"Loading more maps"}):null]}):null]})}):p?e.jsx(z,{label:"Loading Discovery"}):a?e.jsxs(fe,{children:[e.jsx("p",{children:"There was an error loading Discovery. Please try again."}),e.jsx(F,{onClick:l,children:"Try again"})]}):e.jsx(ae,{children:o.map((i,c)=>e.jsx(H,{list:i,id:`discovery-collection-${c}`},i.name))})})]})},z=({label:o})=>e.jsx(be,{role:"status","aria-label":o,children:e.jsx(A,{size:30,style:{color:"white"}})}),Z=r.div`
  min-width: 0;
`,ee=r.div`
  min-width: 0;
`,re=r.div`
  padding: 12px 0 40px;
`,te=r.form`
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
`,ie=r.svg`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  display: block;
  color: currentColor;
`,oe=r.input`
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
`,F=r.button`
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
`,ne=r.button`
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
`,se=r.button`
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
`,ae=r.div`
  display: grid;
  gap: 24px;
  min-width: 0;
`,de=r.section`
  min-width: 0;
`,le=r(w)`
  box-sizing: border-box;
  padding: 28px;
  @media (max-width: 600px) {
    padding: 22px 16px;
  }
`,ce=r.div`
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
`,pe=r.div`
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
`,xe=r.div`
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
`,he=r.h2`
  margin: 0 0 10px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.3px;
`,me=r.p`
  max-width: 340px;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  line-height: 1.6;
`,ge=r.ul`
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
`,ue=r.div`
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
`,fe=r(w)`
  box-sizing: border-box;
  text-align: center;
  p {
    margin: 0 0 16px;
  }
  p:last-child {
    margin-bottom: 0;
  }
`,be=r.div`
  display: grid;
  place-items: center;
  min-height: 180px;
`,ye=r.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`,we=r.button`
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
`,ve=r.span`
  white-space: nowrap;
`,je=r.svg`
  width: 12px;
  height: 12px;
`,ke=r.button`
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
`,Sr=()=>{const{isLoading:o,error:p,data:a,refetch:l}=I();return e.jsxs(Se,{children:[e.jsx(E,{title:`${W} Creative | Discovery`,override:!0}),e.jsx(Pe,{children:e.jsx(X,{lists:a??[],isLoading:o,error:p,onRetry:()=>l()})})]})},Se=r.div.attrs({className:"maxWidth flex hc"})`
  padding: 28px 0 64px;
  min-height: 100vh;
`,Pe=r.div`
  width: 92%;
  max-width: 1440px;
  min-width: 0;
`;export{Sr as default};
