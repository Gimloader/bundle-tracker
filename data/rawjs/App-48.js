import{o as e}from"./rolldown-runtime.js";import{O as t,Q as n,t as r,w as i}from"./utils.js";import{t as a}from"./react-1.js";import{c as o,s}from"./assertThisInitialized.js";import{r as ee}from"./dist-3.js";import{r as c}from"./compact-item.js";import{t as l}from"./button-1.js";import{t as u}from"./select.js";import{x as d}from"./input.js";import{t as f}from"./popover.js";import{t as p}from"./radio.js";import{t as m}from"./spin.js";import{t as h}from"./space.js";import{t as g}from"./App-4.js";import{t as _}from"./jsx-runtime.js";import{n as te}from"./SiteHeaderAlpha.js";import{t as v}from"./useQuery.js";import{t as y}from"./useInfiniteQuery.js";import{l as b,n as x,s as S,y as C}from"./_index.js";import{t as w}from"./AccessibleAnchor.js";import{t as T}from"./FontAwesomeIcon.js";import{t as E}from"./getCloudinaryUrl.js";import{t as D}from"./CapitalizeFirstLetter.js";import{r as O}from"./Language.js";import{n as ne}from"./EducatorSpecificInfoStage.js";var k={icon:{tag:`svg`,attrs:{viewBox:`64 64 896 896`,focusable:`false`},children:[{tag:`path`,attrs:{d:`M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z`}}]},name:`setting`,theme:`outlined`};o();var A=e(a()),j=A.forwardRef(function(e,t){return A.createElement(c,s({},e,{ref:t,icon:k}))}),M=_(),N=e=>{var t,n,i,a;return(0,M.jsxs)(M.Fragment,{children:[e.title?(0,M.jsx)(r,{title:e.title}):null,(0,M.jsxs)(re,{style:(t=e.styles)==null?void 0:t.container,className:(n=e.classNames)==null?void 0:n.container,children:[e.noHeader?null:(0,M.jsx)(g,{includeSpacer:!0,theme:e.headerTheme}),(0,M.jsx)(P,{style:(i=e.styles)==null?void 0:i.content,className:(a=e.classNames)==null?void 0:a.content,children:e.children})]})]})},re=b.div.attrs({className:`flex-column`})`
  flex: 1;
`,P=b.div.attrs({className:`maxWidth flex-column`})`
  flex: 1;
`,F=e(n()),I=e=>e.startsWith(`https://images.unsplash.com`)?e.split(`?`)[0]+`?w=1000`:E(e),L={kit:{width:350,height:350,gap:30}},R=new Intl.NumberFormat(`en`,{notation:`compact`}),z=e=>(0,M.jsxs)(G,{children:[(0,M.jsx)(T,{name:`far ${e.icon}`}),(0,M.jsx)(`span`,{style:{marginLeft:4},children:e.text})]}),B=e=>{let[n,r,i]=t(!1),a=I(e.image);return(0,M.jsx)(w,{to:`/view/${e.id}`,style:{textDecoration:`none`},children:(0,M.jsxs)(V,{className:`maxWidth lightShadow mediumShadowOnHover`,onMouseEnter:r,onMouseLeave:i,children:[(0,M.jsx)(H,{$imageUrl:a,$isHovering:n}),(0,M.jsxs)(`div`,{className:`maxWidth`,style:{background:`rgba(0,0,0,0.4)`,backdropFilter:`blur(10px)`,padding:18},children:[(0,M.jsx)(U,{children:e.title}),(0,M.jsx)(W,{children:D(e.creatorName)}),(0,M.jsxs)(h,{direction:`horizontal`,size:16,style:{marginTop:10},children:[(0,M.jsx)(z,{icon:`fa-question-circle`,text:`${e.questionCount} questions`}),e.playCount>50?(0,M.jsx)(z,{icon:`fa-play`,text:`${R.format(e.playCount)} plays`}):null,(0,M.jsx)(z,{icon:`fa-calendar`,text:`${D((0,F.default)(e.createdAt).fromNow())}`})]})]})]})})},V=b.div.attrs({className:`flex`})`
  height: ${L.kit.height}px;
  border-radius: 12px;
  border: 2px solid ${x.Black};
  position: relative;
  overflow: hidden;
  align-items: flex-end;
  background: ${x.BackgroundPurple};
`,H=b.div.attrs({className:`maxAll`})`
  background: url(${e=>e.$imageUrl});
  background-size: cover;
  transform: scale(${e=>e.$isHovering?1.1:1});
  background-position: center;
  transition: transform 0.2s ease-in-out;
  position: absolute;
`,U=b.div`
  font-size: 18px;
  font-weight: ${S.Bold};
  color: ${x.White};
`,W=b.div`
  font-style: italic;
  color: rgba(255, 255, 255, 0.8);
`,G=b.div.attrs({className:`flex vc`})`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
`,K=function(e){return e.relevant=`relevant`,e.recent=`recent`,e}({}),q=e=>(0,M.jsxs)(h,{direction:`vertical`,size:10,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(J,{children:`Sort`}),(0,M.jsx)(`div`,{children:(0,M.jsx)(p.Group,{onChange:t=>e.setSort(t.target.value),value:e.sort,options:[{value:`relevant`,label:`Most Relevant`},{value:`recent`,label:`Most Recent`}]})})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(J,{children:`Language`}),(0,M.jsx)(u,{showSearch:!0,placeholder:`All languages`,allowClear:!0,optionFilterProp:`label`,className:`maxWidth`,value:e.language,onChange:t=>e.setLanguage(t??void 0),options:O().map(e=>({value:e.key,label:e.value}))})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(J,{children:`Subject`}),(0,M.jsx)(u,{showSearch:!0,placeholder:`All subjects`,allowClear:!0,optionFilterProp:`label`,className:`maxWidth`,value:e.subject,onChange:t=>e.setSubject(t??void 0),options:ne.map(e=>({value:e,label:e}))})]})]}),J=b.div`
  font-size: 14px;
  font-weight: ${S.Bold};
  margin-bottom: 1px;
`,Y=e=>{let{query:t,setQuery:n,search:r}=e;return(0,M.jsxs)(ie,{children:[(0,M.jsx)(ae,{placeholder:`Search for kits...`,autoFocus:!0,value:t,onChange:e=>n(e.target.value),onKeyDown:e=>{e.key===`Enter`&&r()}}),(0,M.jsx)(X,{style:{right:55},children:(0,M.jsx)(f,{content:(0,M.jsx)(q,{sort:e.sort,setSort:e.setSort,language:e.language,setLanguage:e.setLanguage,subject:e.subject,setSubject:e.setSubject}),trigger:`click`,placement:`bottom`,styles:{body:{padding:20}},children:(0,M.jsx)(l,{shape:`circle`,type:`dashed`,size:`large`,icon:(0,M.jsx)(j,{}),onClick:r})})}),(0,M.jsx)(X,{children:(0,M.jsx)(l,{shape:`circle`,type:`primary`,size:`large`,icon:(0,M.jsx)(d,{}),onClick:r})})]})},ie=b.div.attrs({className:`maxWidth`})`
  position: relative;
`,ae=b.input.attrs({className:`maxWidth`})`
  border: 2px solid ${x.Black};
  font-size: 18px;
  padding: 14px 21px;
  border-radius: 50px;
  &::placeholder {
    font-style: italic;
  }
`,X=b.div.attrs({className:`maxHeight flex-center`})`
  position: absolute;
  right: 9px;
  top: 0px;
`,oe=()=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(se,{children:`Discovery`}),(0,M.jsx)(ce,{children:`Search from our library of over 30,000,000 kits!`})]}),se=b.div`
  font-size: 56px;
  color: ${x.Black};
  font-weight: ${S.UltraBold};
  margin-bottom: 1px;
`,ce=b.div`
  font-size: 18px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.9);
  margin-top: -10px;
  margin-bottom: 20px;
`,le=e=>y({queryKey:[`search`,e.query,e.sort,e.language,e.subject],enabled:!!e.query,refetchOnMount:!1,queryFn:async({pageParam:t=0})=>{let n=await i({url:`/api/games/search`,data:{query:e.query,page:t,sort:e.sort,language:e.language,subject:e.subject}});return{data:n.results,currentPage:n.page,nextPage:n.hasMore?n.page+1:void 0}},getNextPageParam:e=>e.nextPage??!1}),ue=e=>(0,M.jsx)(`div`,{className:`maxWidth flex hc vc flex-column`,children:(0,M.jsxs)(`div`,{style:{padding:`0 38px`,marginTop:42,textAlign:`center`},children:[(0,M.jsx)(`img`,{src:`/client/img/icons/sad.svg`}),(0,M.jsxs)(`div`,{style:{marginTop:18,fontSize:20},children:[(0,M.jsx)(`div`,{style:{fontWeight:S.Bold},children:e.error?`There was an error searching for kits`:`We couldn't find any results.`}),(0,M.jsx)(`div`,{style:{marginTop:5},children:e.error?`Please try again later. If the issue persists, contact support.`:(0,M.jsxs)(M.Fragment,{children:[`Try another search or maybe`,` `,(0,M.jsx)(w,{to:`/create`,children:`make your own kit!`})]})})]})]})}),Z=e=>v({queryKey:[`gallery`],enabled:!e,queryFn:async()=>await i({url:`/api/games/gallery`})}),Q=new Map,de=(e,t)=>{Q.set(e,t)},fe=e=>{let t=Q.get(e);t&&window.scrollTo(0,t)},pe=()=>{let[e,t]=A.useState(``),[n,r]=ee(),i=n.get(`q`)??``,a=n.get(`sort`)??K.relevant,o=n.get(`lang`)??void 0,s=n.get(`subject`)??void 0,{data:c,error:u,isLoading:d,hasNextPage:f,fetchNextPage:p,isFetchingNextPage:h}=le({query:i,sort:a,language:o,subject:s}),{data:g,error:_,isLoading:v}=Z(i),y=A.useMemo(()=>i?d:v,[d,v,i]),b=A.useMemo(()=>i?u:_,[u,_,i]),S=A.useMemo(()=>i?((c==null?void 0:c.pages.flat())??[]).map(e=>e.data).flat():g??[],[i,c,g]),w=(e,t)=>{r(n=>{let r=Object.fromEntries(n);return t===void 0?delete r[e]:r[e]=t,r})},T=A.useCallback(()=>{e!==i&&w(`q`,e||void 0)},[e,i,r]),E=A.useMemo(()=>`${i}|${a}|${o}|${s}`,[i,a,o,s]);return A.useLayoutEffect(()=>{fe(E)},[E]),A.useLayoutEffect(()=>()=>{de(E,window.scrollY)},[E]),(0,M.jsxs)(N,{title:i?`Kits about "${i}"`:`Discovery`,headerTheme:te.light,classNames:{container:`flex-center`},styles:{container:{background:x.Snow},content:{padding:`40px 0px`,width:`85%`,maxWidth:1350}},children:[(0,M.jsx)(oe,{}),(0,M.jsx)(Y,{query:e,setQuery:t,search:T,sort:a,language:o,subject:s,setSort:e=>w(`sort`,e),setLanguage:e=>w(`lang`,e),setSubject:e=>w(`subject`,e)}),(0,M.jsx)(C,{style:{margin:`30px 0px`}}),y?(0,M.jsx)(`div`,{style:{flex:1},className:`flex-center`,children:(0,M.jsx)(m,{size:`large`})}):!S.length||b?(0,M.jsx)(ue,{error:!!b}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)($,{children:S.map(e=>(0,M.jsx)(B,{id:e._id,title:e.title,image:e.gif,questionCount:e.questionCount,playCount:e.playCount,creatorName:e.creator,createdAt:e.dateCreated},e._id))}),f?(0,M.jsx)(`div`,{className:`maxWidth flex-center`,style:{marginTop:L.kit.gap},children:(0,M.jsx)(l,{type:`primary`,size:`large`,onClick:()=>p(),loading:h,children:`Load more`})}):null]})]})},$=b.div.attrs({className:`maxWidth`})`
  display: grid;
  grid-gap: ${L.kit.gap}px;
  grid-template-rows: auto;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${L.kit.width}px, 100%), 1fr)
  );
`;export{$ as Items,pe as default,N as n,B as t};