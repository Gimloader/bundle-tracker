import{o as e}from"./rolldown-runtime.js";import{O as t}from"./utils.js";import{t as n}from"./react-1.js";import{a as r}from"./InfoCircleFilled.js";import{t as i}from"./dropdown.js";import{t as a}from"./EllipsisOutlined.js";import{t as o}from"./space.js";import{t as s}from"./jsx-runtime.js";import{t as c}from"./useDebouncedValue.js";import{c as l,l as u,n as d,v as f}from"./_index.js";import{t as p}from"./module-1.js";import{t as m}from"./FontAwesomeIcon.js";import{t as h}from"./GetAssetPath.js";import{c as g,u as _}from"./Navigation.js";import{n as v,t as y}from"./Centered.js";import{t as b}from"./Names.js";import{t as ee}from"./CircularProgress.js";import{n as x,t as te}from"./App-46.js";import{c as S,d as C,i as w,l as T,n as E,o as D,p as ne,s as re,t as O}from"./App-74.js";import{n as k}from"./Button.js";var A=e(n());function j(e){if(typeof localStorage>`u`)return null;var t=localStorage.getItem(e)??`null`;try{return JSON.parse(t)}catch(e){console.error(e)}return t}function ie(e,t){return typeof localStorage>`u`?null:localStorage.setItem(e,JSON.stringify(t))}function ae(e,t){var n=j(e);return n===null?t:n}function M(e,t){var n=(0,A.useState)(function(){return ae(e,t)}),r=n[0],i=n[1],a=(0,A.useRef)(!1),o=(0,A.useRef)(!1),s=(0,A.useMemo)(function(){return`rooks-${e}-localstorage-update`},[e]);(0,A.useEffect)(function(){(!a.current||!o.current)&&ie(e,r)},[e,r]);var c=(0,A.useCallback)(function(t){if(t.storageArea===localStorage&&t.key===e)try{a.current=!0;var n=JSON.parse(t.newValue??`null`);r!==n&&i(n)}catch(e){console.log(e)}},[e,r]);(0,A.useEffect)(function(){return typeof window<`u`?(window.addEventListener(`storage`,c),function(){window.removeEventListener(`storage`,c)}):(console.warn(`useLocalstorageState: window is undefined.`),function(){})},[c]);var l=(0,A.useCallback)(function(e){try{o.current=!0;var t=e.detail.newValue;r!==t&&i(t)}catch(e){console.log(e)}},[r]);(0,A.useEffect)(function(){return typeof document<`u`?(document.addEventListener(s,l),function(){document.removeEventListener(s,l)}):(console.warn(`[useLocalstorageState] document is undefined.`),function(){})},[s,l]);var u=(0,A.useCallback)(function(e){if(typeof document<`u`){var t=new CustomEvent(s,{detail:{newValue:e}});document.dispatchEvent(t)}else console.warn(`[useLocalstorageState] document is undefined.`)},[s]);return[r,(0,A.useCallback)(function(e){a.current=!1,o.current=!1,i(e),u(e)},[u]),(0,A.useCallback)(function(){localStorage.removeItem(e)},[e])]}var N=s(),oe=e=>(0,N.jsx)(P,{selected:e.selected,children:(0,N.jsxs)(o,{className:`maxWidth`,direction:`horizontal`,size:20,wrap:!0,children:[(0,N.jsx)(F,{style:{background:e.background,padding:e.imagePadding||8},children:(0,N.jsx)(I,{src:e.image})}),(0,N.jsx)(L,{children:e.name})]})}),se=e=>(0,N.jsx)(P,{selected:e.selected,style:{cursor:`pointer`},onClick:e.onSelect,children:(0,N.jsxs)(o,{className:`maxWidth`,direction:`horizontal`,size:20,wrap:!0,children:[(0,N.jsx)(F,{style:{background:`radial-gradient( circle, rgba(78,77,77,1) 0%, rgba(32,32,32,1) 100% )`,fontSize:22},children:(0,N.jsx)(m,{name:`fas fa-times`})}),(0,N.jsx)(L,{children:`Empty Selection`})]})}),P=u.div.attrs({className:`maxWidth`})`
  padding: 12px 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-style: solid;
  border-color: #fdd835;
  border-width: ${e=>e.selected?4:0}px;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.23);
  }
`,F=u.div.attrs({className:`flex-center`})`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 2px solid ${d.White};
`,I=u.img`
  max-height: 100%;
  max-width: 100%;
  user-drag: none;
`,L=u.div`
  font-family: ${l.FugazOne};
  text-transform: uppercase;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.93);
`,R=e=>{let[n,r,i]=t(!1),a=x({id:e.id,type:e.type}),o=T(e.rarity);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`div`,{onClick:()=>{w(),r()},style:{cursor:`pointer`},children:e.gridView?(0,N.jsx)(`div`,{style:{width:e.gridViewWidth,flexShrink:0},children:(0,N.jsx)(S,{selected:e.selected,image:a,background:o,imagePadding:e.type===_.sticker?24:void 0,count:e.count})}):(0,N.jsx)(oe,{selected:e.selected,image:a,background:o,name:e.name,imagePadding:e.type===_.sticker?12:void 0})}),(0,N.jsx)(O,{open:n,close:i,id:e.id,name:e.name,count:e.count,sellCost:e.sellCost,image:a,rarity:e.rarity,type:e.type,description:e.description,pack:e.pack,style:e.style,editStyles:e.editStyles,callToAction:t=>{if(e.type===_.sticker)return{text:`Close`,ariaLabel:`Close`,onClick:()=>{w(),i()}};let n=t.editStyles!==void 0&&JSON.stringify(t.editStyles)!==`{}`&&JSON.stringify(t.editStyles)!==JSON.stringify(e.editStyles),r=e.selected?n?`Update`:`Selected`:`Select`;return{text:r,ariaLabel:r,disabled:e.selected&&!n,onClick:()=>{w(),E({cosmeticId:e.id,cosmeticType:e.type,editStyles:t.editStyles,onSuccess:()=>{e.onCosmeticSelectionChanged&&e.onCosmeticSelectionChanged(),C(),i()}})}}},blockCharacterPreview:e.blockCharacterPreview})]})},z=e=>{let t=A.useRef(null),[n]=p(t),r=A.useMemo(()=>{let e=n-1,t=Math.floor((e-B.gapBetweenItems)/(B.itemWidth+B.gapBetweenItems));if(t<2)return e;let r=e-(t*(B.itemWidth+B.gapBetweenItems)-B.gapBetweenItems);return B.itemWidth+r/t},[n]);return(0,N.jsx)(V,{ref:t,children:(0,N.jsxs)(o,{className:`maxWidth`,direction:e.gridView?`horizontal`:`vertical`,size:e.gridView?B.gapBetweenItems:15,wrap:!0,children:[e.cosmetics.map(t=>{var n,i;let{cosmetic:a,count:o}=t,s=!1;if((t==null||(n=t.cosmetic)==null?void 0:n.type)===_.character){var c;s=((c=e.selectedCosmetics)==null||(c=c.character)==null?void 0:c.id)===a.id}else if((t==null||(i=t.cosmetic)==null?void 0:i.type)===_.trail){var l;s=((l=e.selectedCosmetics)==null?void 0:l.trail)===a.id}return(0,N.jsx)(R,{id:a.id,count:o,name:a.name,description:a.description,pack:a.packName,type:a.type,rarity:a.rarity,style:a.style,sellCost:a.sellCost,gridView:e.gridView,gridViewWidth:r,selected:s,editStyles:e.selectedCosmeticEditStyles&&s?e.selectedCosmeticEditStyles:void 0,blockCharacterPreview:e.blockCharacterPreview,onCosmeticSelectionChanged:e.onCosmeticSelectionChanged},a.id+e.gridView)}),(()=>{var t,n;if(!e.requiresSelection||!e.cosmeticType)return null;let i=!1;(!((t=e.selectedCosmetics)!=null&&(t=t.character)!=null&&t.id)&&e.cosmeticType===_.character||!((n=e.selectedCosmetics)!=null&&n.trail)&&e.cosmeticType===_.trail)&&(i=!0);let a=()=>{i||(w(),E({cosmeticType:e.cosmeticType,onSuccess:()=>{C(),e.onCosmeticSelectionChanged&&e.onCosmeticSelectionChanged()}}))};return e.gridView?(0,N.jsx)(re,{selected:i,onSelect:a,width:r}):(0,N.jsx)(se,{selected:i,onSelect:a})})()]})})},B={itemWidth:120,gapBetweenItems:10},V=u.div.attrs({className:`maxWidth`})``,H=e=>{let{value:t,onChange:n}=e;return(0,N.jsxs)(U,{children:[(0,N.jsx)(W,{children:(0,N.jsx)(m,{name:`fas fa-search`})}),(0,N.jsx)(G,{value:t,onChange:e=>n(e.target.value),placeholder:`Search...`})]})},U=u.div.attrs({className:`maxWidth flex vc`})`
  border-radius: 30px;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.07);
  position: relative;
`,W=u.div`
  top: 11px;
  left: 20px;
  position: absolute;
`,G=u.input.attrs({className:`maxWidth`})`
  border: none;
  background: transparent;
  padding: 10px 20px;
  padding-left: 50px;
  border-radius: 30px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`,K=`#3d9241`,ce=e=>{let t=t=>e.tab===t,n=t=>()=>{t!==e.tab&&(w(),e.setTab(t))};return(0,N.jsxs)(o,{direction:`horizontal`,size:8,style:{marginTop:8,marginBottom:20},wrap:!0,children:[(0,N.jsx)(q,{selected:t(X.All),onClick:n(X.All),children:`All`}),(0,N.jsxs)(q,{selected:t(X.Characters),onClick:n(X.Characters),children:[b.character,`s`]}),(0,N.jsxs)(q,{selected:t(X.Trails),onClick:n(X.Trails),children:[b.trail,`s`]}),(0,N.jsxs)(q,{selected:t(X.Stickers),onClick:n(X.Stickers),children:[b.sticker,`s`]})]})},q=u.div`
  background: ${e=>e.selected?K:`rgba(255, 255, 255, 0.1)`};
  padding: 8px 18px;
  line-height: 1;
  font-size: 16px;
  border-radius: 50px;
  cursor: pointer;
  transition: background ${e=>e.selected?.1:.2}s,
    transform 0.2s;
  will-change: background, transform;
  &:hover {
    background: ${e=>e.selected?K:`rgba(255, 255, 255, 0.15)`};
    transform: scale(1.05);
  }
`,J=(0,N.jsx)(m,{name:`fas fa-check`,style:{color:`#673AB7`}}),le=e=>{let t=t=>{if(e.sort===t)return J},n=t=>{if(e.view===t)return J},o=t=>{if(e.showAll===t)return J},s=[{key:`sort_group`,type:`group`,label:`Sort`,children:[{key:`sort_recent`,label:`Most Recent`,icon:t(Z.recent),onClick:()=>e.setSort(Z.recent)},{key:`sort_rarity`,label:`Rarity`,icon:t(Z.rarity),onClick:()=>e.setSort(Z.rarity)},{key:`sort_name`,label:`Name`,icon:t(Z.alphabetical),onClick:()=>e.setSort(Z.alphabetical)}]},{key:`view_group`,type:`group`,label:`View`,children:[{key:`view_grid`,label:`Grid`,icon:n(Q.grid),onClick:()=>e.setView(Q.grid)},{key:`view_list`,label:`List`,icon:n(Q.list),onClick:()=>e.setView(Q.list)}]},{key:`filter_group`,type:`group`,label:`Filter`,children:[{key:`filter_all`,label:`All`,icon:o(!0),onClick:()=>e.setShowAll(!0)},{key:`filter_duplicates`,label:`Duplicates`,icon:o(!1),onClick:()=>e.setShowAll(!1)}]}];return(0,N.jsx)(r,{theme:{algorithm:f.defaultAlgorithm,token:{colorBgBase:`#ffffff`}},children:(0,N.jsx)(`div`,{style:{cursor:`pointer`,fontSize:20},children:(0,N.jsx)(i,{menu:{items:s},children:(0,N.jsx)(a,{})})})})},Y=e=>{let t=A.useMemo(()=>e.mode===`search`?`We couldn't find any cosmetics matching your search`:e.mode===`filter`?`No cosmetics match your filter`:e.cosmeticType?(0,N.jsxs)(N.Fragment,{children:[`Visit The Shop to add`,` `,(0,N.jsxs)(`b`,{style:{color:k.Yellow},children:[D(e.cosmeticType),`s`]}),` `,`to your collection!`]}):(0,N.jsxs)(N.Fragment,{children:[`You don't own any cosmetics...yet! Visit`,` `,(0,N.jsx)(`b`,{style:{color:k.Yellow},children:`The Shop`}),` to add some to your collection!`]}),[e.mode,e.cosmeticType]),n=A.useMemo(()=>e.mode===`search`||e.mode===`filter`?`cosmos/searchEmpty.png`:`cosmos/cosmeticsEmpty.png`,[e.mode]);return(0,N.jsxs)(ue,{children:[(0,N.jsx)(de,{src:h(n)}),(0,N.jsx)(fe,{children:t})]})},ue=u(v).attrs({className:`maxWidth`})`
  padding: 20px 0px;
`,de=u.img`
  max-height: 175px;
  max-width: 90%;
`,fe=u.div`
  font-size: 16px;
  font-style: italic;
  opacity: 0.9;
  margin-top: 35px;
  text-align: center;
`,X=function(e){return e.All=`all`,e.Characters=`characters`,e.Trails=`trails`,e.Stickers=`stickers`,e}({}),Z=function(e){return e.recent=`recent`,e.alphabetical=`alphabetical`,e.rarity=`rarity`,e}({}),Q=function(e){return e.grid=`grid`,e.list=`list`,e}({}),$=[g.mythic,g.legendary,g.epic,g.rare,g.uncommon,g.common],pe=e=>{var t;let{data:n,isLoading:r,error:i}=ne(),[a,s]=A.useState(``),[l]=c(a,150),[u,f]=A.useState(`all`),[p,m]=M(`cosmos_sortMode`,`recent`),[h,g]=M(`cosmos_view`,`grid`),[v,b]=A.useState(!0),x=A.useMemo(()=>u===`characters`?_.character:u===`trails`?_.trail:u===`stickers`?_.sticker:null,[u]),S=A.useMemo(()=>{if(!(n!=null&&n.ownedCosmetics))return[];let e=l.toLowerCase(),t=n.ownedCosmetics.filter(t=>{var n,r;if(x&&t.cosmetic.type!==x||!v&&t.count<=1)return!1;let i=t.cosmetic.name.toLowerCase(),a=((n=t.cosmetic.description)==null?void 0:n.toLowerCase())??``,o=((r=t.cosmetic.packName)==null?void 0:r.toLowerCase())??``;return i.includes(e)||a.includes(e)||o.includes(e)});return p===`rarity`?t.sort((e,t)=>$.indexOf(e.cosmetic.rarity)-$.indexOf(t.cosmetic.rarity)):p===`alphabetical`?t.sort((e,t)=>e.cosmetic.name.localeCompare(t.cosmetic.name)):t},[n,l,x,p,v]);return r?(0,N.jsx)(y,{className:`maxAll`,children:(0,N.jsx)(ee,{style:{color:d.White}})}):i?(0,N.jsx)(y,{className:`maxAll`,children:`There was an error loading your locker. Please refresh and try again.`}):(0,N.jsxs)(te,{customWidth:900,children:[(0,N.jsxs)(me,{children:[(0,N.jsx)(he,{children:`Locker`}),(0,N.jsxs)(o,{size:30,className:`maxWidth`,style:{justifyContent:`space-between`},children:[(0,N.jsx)(ce,{tab:u,setTab:f}),(0,N.jsx)(le,{view:h,setView:g,sort:p,setSort:m,showAll:v,setShowAll:b})]})]}),(0,N.jsxs)(ge,{children:[(0,N.jsx)(H,{value:a,onChange:s}),S.length?(0,N.jsx)(z,{cosmetics:S,cosmeticType:x,gridView:h===`grid`,selectedCosmetics:n.selected,selectedCosmeticEditStyles:(t=n.selected)==null||(t=t.character)==null?void 0:t.editStyleData,requiresSelection:l?!1:x===_.character||x===_.trail,onCosmeticSelectionChanged:e.onCosmeticSelectionChanged,blockCharacterPreview:e.blockCharacterPreview}):(0,N.jsx)(Y,{mode:l?`search`:v?`none`:`filter`,cosmeticType:x})]})]})},me=u.div.attrs({className:`maxWidth`})``,he=u.div`
  font-family: ${l.FugazOne};
  text-transform: uppercase;
  color: ${d.White};
  font-size: 32px;
`,ge=u.div.attrs({className:`maxWidth`})`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
`;export{Z as SortMode,X as Tab,Q as View,pe as default};