import"./rolldown-runtime.js";import{w as e,x as t}from"./utils.js";import{t as n}from"./react-1.js";import{t as r}from"./jsx-runtime.js";import{t as i}from"./useQuery.js";import{c as a,l as o,n as s,r as c,s as l}from"./_index.js";import{t as u}from"./GetAssetPath.js";import{t as d}from"./SeasonTicketName.js";var f=function(e){return e.character=`character`,e.sticker=`sticker`,e.trail=`trail`,e}({}),p=function(e){return e.common=`common`,e.uncommon=`uncommon`,e.rare=`rare`,e.epic=`epic`,e.legendary=`legendary`,e.mythic=`mythic`,e}({}),m=function(e){return e.color=`color`,e.select=`select`,e}({});n();var h=r(),g=[`cosmos-basics`],_=()=>i(g,()=>e({url:`/api/cosmos/basics`}),{staleTime:2e4}),v=()=>c.invalidateQueries(g),y=function(e){return e.xp=`xp`,e.locker=`locker`,e.seasonTicket=`seasonTicket`,e.shop=`shop`,e.pack=`pack`,e}({}),b=e=>{let n=e.size||18,r=Math.ceil(n*1.22),i=Math.floor(n/3),a={height:r};return e.grayscale&&(a.filter=`grayscale(1)`),(0,h.jsxs)(x,{style:{fontSize:e.size},children:[(0,h.jsx)(S,{draggable:!1,style:a}),(0,h.jsx)(C,{style:{marginLeft:i},children:t(e.amount)})]})},x=o.div.attrs({className:`flex vc`})``,S=o.img.attrs({src:u(`cosmos/currency_v2.svg`)})``,C=o.div`
  line-height: 1;
  font-weight: ${l.Bold};
  margin-top: 0.15em;
`,w={container:`cosmos-container`,content:`cosmos-content`},T=()=>{let{data:e}=_();return e?(0,h.jsx)(E,{children:(0,h.jsx)(b,{amount:e.currency,size:16})}):null},E=o.div`
  margin-left: 20px;
  font-family: ${a.FugazOne};
  color: ${s.White};
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
`,D={[y.xp]:{title:`Home`,icon:`fas fa-home`},[y.locker]:{title:`Locker`,icon:`fas fa-th-large`},[y.seasonTicket]:{title:(0,h.jsxs)(`div`,{className:`flex vc`,children:[(0,h.jsx)(`div`,{children:d.name}),(0,h.jsx)(`div`,{style:{fontSize:`0.7em`,padding:`0.3em 0.5em`,borderRadius:50,fontWeight:l.Bold,background:`#009933`,marginLeft:`0.5em`},children:`New!`})]}),icon:`fas fa-ticket-alt`},[y.shop]:{title:`Shop`,icon:`fas fa-store`}};export{y as a,p as c,b as i,m as l,T as n,v as o,w as r,_ as s,D as t,f as u};