import{j as e,d,U as u,B as k,aa as w,u as T,b as S,aB as h,t as x,M as b,e as C,aU as L,F as P,a4 as A,dP as M}from"./_index.js";import{c as I,S as f}from"./index-2.js";import{T as r}from"./index-14.js";import{I as N}from"./index-3.js";import{s as g}from"./index-4.js";import{A as n}from"./AccessibleAnchor.js";import{C as a}from"./Button.js";import{S as E,J as F}from"./App-41.js";import"./EditOutlined.js";import"./styleChecker.js";import"./index-5.js";import"./CheckOutlined.js";import"./CopyOutlined.js";import"./context.js";import"./polished.esm.js";import"./inheritsLoose.js";import"./FixSpinePlugin.js";import"./GetAssetPath.js";import"./MapModeType.js";import"./MapStyle.js";import"./MapSound.js";import"./howler.js";import"./playSound.js";import"./mobxreact.esm.js";import"./index-21.js";import"./QuizTypes.js";import"./TutorialConsts.js";import"./ActionButton.js";import"./index-18.js";import"./FontAwesomeIcon.js";import"./Centered.js";import"./CapitalizeFirstLetter.js";import"./motion.js";import"./SixteenByNineScaler.js";import"./index-20.js";import"./index-22.js";import"./index-1.js";import"./progress.js";import"./ElementIds.js";import"./SeasonTicketName.js";import"./useQuery.js";import"./___vite-browser-external_commonjs-proxy.js";import"./util-1.js";import"./util-2.js";import"./Shortcut.js";import"./Names.js";import"./useWillUnmount.js";import"./CircularProgress.js";import"./clsx.m.js";import"./index-6.js";import"./index-17.js";import"./use-force-update.js";import"./GimkitLiveQuestion.js";import"./Text.js";import"./getCloudinaryUrl.js";import"./LazyLatexRenderer.js";import"./Tooltip.js";import"./use-motion-value.js";import"./index-9.js";import"./index-23.js";import"./useIntervalWhen.js";import"./index-10.js";import"./move.js";import"./react-flip-move.es.js";import"./sounds.js";import"./App-5.js";import"./AnimatedBackground-2.js";import"./useDebouncedValue.js";import"./CloseCircleOutlined.js";import"./FillRemainingSpace.js";import"./index-24.js";const l=d.div.attrs({className:"maxWidth"})`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
`,c=t=>e.jsx(r.Title,{style:{fontFamily:u.FugazOne,textTransform:"uppercase",marginBottom:"0.2em"},level:3,children:t.children}),m=d(k)`
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
`,U=t=>{const i=`${w()}/creative/map/${t.id}`,o=()=>{I(i),g.success("Link copied to clipboard!")};return e.jsxs(l,{children:[e.jsxs("div",{children:[e.jsx(c,{children:"Public Link"}),e.jsx(r.Text,{children:"This is a direct link to play your map! The link never expires as long as your map remains published."})]}),e.jsxs("div",{className:"flex vc",style:{marginTop:10},children:[e.jsx(N,{style:{width:"100%"},type:"text",value:i,readOnly:!0}),e.jsx(m,{type:"primary",onClick:o,style:{marginLeft:10},children:"Copy Link"})]})]})},D="https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative",B=t=>{const[i,o,y]=T(!1),j=()=>{i||(o(),window.addEventListener("MAP_SAVED",()=>{h({url:"/api/created-map/listing/publish-new-version/"+window._mapId,success:()=>{b.success({title:"Changes published!",content:"Players will now experience the latest version of your map!"}),t.refetch()},error:v=>{x({e:v,default:{title:"Error publishing changes",content:"Please try again."}})},both:y})},{once:!0}),E(F.save,{ignoreNotification:!0}))},p=S.unix(t.lastPublish);return e.jsxs(l,{children:[e.jsxs("div",{children:[e.jsx(c,{children:"Publish New Version"}),e.jsxs(r.Text,{children:["Your map was last published on"," ",e.jsxs("b",{children:[p.format("MMMM Do")," at ",p.format("h:mmA"),"."]})," ","If you've made changes since then, click the button below to publish them!"]})]}),e.jsx("div",{style:{marginTop:15},children:e.jsx(m,{block:!0,type:"primary",loading:i,onClick:j,children:"Publish Changes (Free)"})}),e.jsx("div",{style:{marginTop:9},children:e.jsxs("div",{style:{fontSize:12,lineHeight:1.2,opacity:.9,color:"rgba(255,255,255,0.9)"},children:["Ensure everything in your map follows our"," ",e.jsx(n,{to:D,external:!0,target:"_blank",style:{color:a.Yellow,textDecoration:"underline"},children:"community guidelines."})," ","Failure to do so may result in account suspension."]})})]})},W=t=>e.jsxs(l,{children:[e.jsxs("div",{children:[e.jsx(c,{children:"Analytics"}),e.jsx(r.Text,{children:"See how many times your map has been played!"})]}),e.jsxs(f,{direction:"vertical",size:12,style:{marginTop:15},className:"maxWidth",children:[e.jsx(s,{label:"Total Plays",value:t.total}),e.jsx(s,{label:"Last 30 Days",value:t.last30}),e.jsx(s,{label:"Last 7 Days",value:t.last7})]})]}),s=t=>e.jsxs("div",{className:"maxWidth flex-column flex-center",style:{padding:20,background:"rgba(255,255,255,0.1)",color:C.White,borderRadius:6,lineHeight:1},children:[e.jsx("div",{style:{fontFamily:u.FugazOne,textTransform:"uppercase",opacity:.8,fontSize:14,marginBottom:8},children:t.label}),e.jsx("div",{style:{fontSize:32,fontWeight:P.Black},children:L(t.value)})]}),z=t=>{const i=()=>{b.confirm({title:"Are you sure you want to unpublish?",content:"Unpublishing is permanent. If you republish in the future, the link to your map & play counts will reset.",okText:"Yes",onOk:()=>{h({url:`/api/created-map/listing/remove/${t.id}`,success:()=>{g.success("Map unpublished!"),t.close()},error:o=>{x({e:o,default:{title:"Error unpublishing map"}})}})}})};return e.jsx("div",{children:e.jsx(n,{style:{color:a.Yellow,textDecoration:"underline"},onClick:i,children:"Unpublish map"})})},Y=t=>e.jsx(A,{type:"warning",showIcon:!0,message:"Username required to publish changes",description:e.jsxs(e.Fragment,{children:["Set a username in"," ",e.jsx(n,{to:M,target:"_blank",style:{color:a.Yellow,textDecoration:"underline"},children:"account settings"})," ","before publishing changes to your map.",e.jsx(m,{block:!0,onClick:t.refetch,style:{marginTop:12},children:"I've added my username"})]})}),rt=t=>{const{data:i}=t;return e.jsxs(f,{className:"maxWidth",direction:"vertical",size:20,children:[e.jsx(U,{id:i._id}),t.requiresUsername?e.jsx(Y,{refetch:t.refetch}):e.jsx(B,{lastPublish:i.lastPublish,refetch:t.refetch}),e.jsx(W,{total:i.plays.total,last30:i.plays.last30,last7:i.plays.last7}),e.jsx(z,{id:i._id,close:t.close})]})};export{rt as default};
