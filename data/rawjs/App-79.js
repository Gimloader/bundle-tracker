import{o as e}from"./rolldown-runtime.js";import{E as t,O as n,Q as r,u as i,x as a,z as o}from"./utils.js";import{t as s}from"./react-1.js";import{t as c}from"./message.js";import{t as l}from"./modal.js";import{t as u}from"./button.js";import{t as d}from"./input.js";import{t as f}from"./space.js";import{t as p}from"./typography.js";import{t as m}from"./copy-to-clipboard.js";import{$ as h}from"./Paths.js";import{t as g}from"./jsx-runtime.js";import{b as _,c as v,l as y,n as b,s as x}from"./_index.js";import{t as S}from"./AccessibleAnchor.js";import{n as C}from"./Button.js";import{n as w,t as T}from"./Send.js";s();var E=e(m()),D=g(),O=y.div.attrs({className:`maxWidth`})`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
`,k=e=>(0,D.jsx)(p.Title,{style:{fontFamily:v.FugazOne,textTransform:`uppercase`,marginBottom:`0.2em`},level:3,children:e.children}),A=y(u)`
  &&& {
    background: #ffff00;
    border: 1px solid #ffff00;
    color: #32136b;
    font-weight: 700;
    box-shadow: 0 3px 0 #a8a800;
  }

  &&&:not(:disabled):not(.ant-btn-loading):hover {
    background: #ffff80;
    border-color: #ffff80;
    color: #32136b;
  }

  &&&:focus-visible {
    outline: 3px solid white;
    outline-offset: 4px;
  }

  &&&:not(:disabled):not(.ant-btn-loading):active {
    background: #e6e600;
    border-color: #e6e600;
    color: #32136b;
    box-shadow: 0 1px 0 #a8a800;
    transform: translateY(2px);
  }

  &&&:disabled {
    background: #d6cde5;
    border-color: #d6cde5;
    color: #625775;
    box-shadow: none;
  }
`,j=e=>{let t=`${i()}/creative/map/${e.id}`;return(0,D.jsxs)(O,{children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(k,{children:`Public Link`}),(0,D.jsx)(p.Text,{children:`This is a direct link to play your map! The link never expires as long as your map remains published.`})]}),(0,D.jsxs)(`div`,{className:`flex vc`,style:{marginTop:10},children:[(0,D.jsx)(d,{style:{width:`100%`},type:`text`,value:t,readOnly:!0}),(0,D.jsx)(A,{type:`primary`,onClick:()=>{(0,E.default)(t),c.success(`Link copied to clipboard!`)},style:{marginLeft:10},children:`Copy Link`})]})]})},M=e(r()),N=`https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative`,P=e=>{let[r,i,a]=n(!1),s=()=>{r||(i(),window.addEventListener(`MAP_SAVED`,()=>{o({url:`/api/created-map/listing/publish-new-version/`+window._mapId,success:()=>{l.success({title:`Changes published!`,content:`Players will now experience the latest version of your map!`}),e.refetch()},error:e=>{t({e,default:{title:`Error publishing changes`,content:`Please try again.`}})},both:a})},{once:!0}),T(w.save,{ignoreNotification:!0}))},c=M.default.unix(e.lastPublish);return(0,D.jsxs)(O,{children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(k,{children:`Publish New Version`}),(0,D.jsxs)(p.Text,{children:[`Your map was last published on`,` `,(0,D.jsxs)(`b`,{children:[c.format(`MMMM Do`),` at `,c.format(`h:mmA`),`.`]}),` `,`If you've made changes since then, click the button below to publish them!`]})]}),(0,D.jsx)(`div`,{style:{marginTop:15},children:(0,D.jsx)(A,{block:!0,type:`primary`,loading:r,onClick:s,children:`Publish Changes (Free)`})}),(0,D.jsx)(`div`,{style:{marginTop:9},children:(0,D.jsxs)(`div`,{style:{fontSize:12,lineHeight:1.2,opacity:.9,color:`rgba(255,255,255,0.9)`},children:[`Ensure everything in your map follows our`,` `,(0,D.jsx)(S,{to:N,external:!0,target:`_blank`,style:{color:C.Yellow,textDecoration:`underline`},children:`community guidelines.`}),` `,`Failure to do so may result in account suspension.`]})})]})},F=e=>(0,D.jsxs)(O,{children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(k,{children:`Analytics`}),(0,D.jsx)(p.Text,{children:`See how many times your map has been played!`})]}),(0,D.jsxs)(f,{direction:`vertical`,size:12,style:{marginTop:15},className:`maxWidth`,children:[(0,D.jsx)(I,{label:`Total Plays`,value:e.total}),(0,D.jsx)(I,{label:`Last 30 Days`,value:e.last30}),(0,D.jsx)(I,{label:`Last 7 Days`,value:e.last7})]})]}),I=e=>(0,D.jsxs)(`div`,{className:`maxWidth flex-column flex-center`,style:{padding:20,background:`rgba(255,255,255,0.1)`,color:b.White,borderRadius:6,lineHeight:1},children:[(0,D.jsx)(`div`,{style:{fontFamily:v.FugazOne,textTransform:`uppercase`,opacity:.8,fontSize:14,marginBottom:8},children:e.label}),(0,D.jsx)(`div`,{style:{fontSize:32,fontWeight:x.Black},children:a(e.value)})]}),L=e=>(0,D.jsx)(`div`,{children:(0,D.jsx)(S,{style:{color:C.Yellow,textDecoration:`underline`},onClick:()=>{l.confirm({title:`Are you sure you want to unpublish?`,content:`Unpublishing is permanent. If you republish in the future, the link to your map & play counts will reset.`,okText:`Yes`,onOk:()=>{o({url:`/api/created-map/listing/remove/${e.id}`,success:()=>{c.success(`Map unpublished!`),e.close()},error:e=>{t({e,default:{title:`Error unpublishing map`}})}})}})},children:`Unpublish map`})}),R=e=>(0,D.jsx)(_,{type:`warning`,showIcon:!0,message:`Username required to publish changes`,description:(0,D.jsxs)(D.Fragment,{children:[`Set a username in`,` `,(0,D.jsx)(S,{to:h,target:`_blank`,style:{color:C.Yellow,textDecoration:`underline`},children:`account settings`}),` `,`before publishing changes to your map.`,(0,D.jsx)(A,{block:!0,onClick:e.refetch,style:{marginTop:12},children:`I've added my username`})]})}),z=e=>{let{data:t}=e;return(0,D.jsxs)(f,{className:`maxWidth`,direction:`vertical`,size:20,children:[(0,D.jsx)(j,{id:t._id}),e.requiresUsername?(0,D.jsx)(R,{refetch:e.refetch}):(0,D.jsx)(P,{lastPublish:t.lastPublish,refetch:e.refetch}),(0,D.jsx)(F,{total:t.plays.total,last30:t.plays.last30,last7:t.plays.last7}),(0,D.jsx)(L,{id:t._id,close:e.close})]})};export{z as default};