import{o as e,t}from"./rolldown-runtime.js";import{O as n}from"./utils.js";import{t as r}from"./react-1.js";import{t as i}from"./button-1.js";import{t as a}from"./input.js";import{t as o}from"./drawer.js";import{t as s}from"./space.js";import{t as c}from"./typography.js";import{n as l}from"./Company.js";import{t as u}from"./jsx-runtime.js";import{t as d}from"./useDebouncedValue.js";import{a as f,c as p,l as m,v as h,y as g}from"./_index.js";import{a as _,r as v}from"./mobxreact.esm.js";import{t as y}from"./GetAssetPath.js";import{n as b,r as x,t as S}from"./Centered.js";import{t as ee}from"./SeasonTicketName.js";import{t as C}from"./OwnsSeasonTicket.js";import{t as te}from"./lodash.js";import{t as ne}from"./phaser.js";import{T as w}from"./FixPhaserBootProcess.js";import{g as T,l as E,t as D,y as O}from"./stores-2.js";import{t as k}from"./dist-4.js";import{t as A}from"./useStore.js";import{n as re,t as ie}from"./Send.js";import{i as ae,t as j}from"./setCurrentAction.js";import{n as M,t as N}from"./TutorialConsts.js";import{a as P,i as F,n as I}from"./ActionButton.js";import{t as oe}from"./FetchDeviceOptionById.js";import{t as L}from"./CapitalizeFirstLetter.js";import{t as R}from"./playClickSound.js";import{t as se}from"./IsRoleLevelBetween.js";import{ct as ce,it as le,j as z,ot as B}from"./App-42.js";import{t as V}from"./setAddMenuScreen.js";import{n as H,t as U}from"./CanAddTerrain.js";var W=e(r()),G=u(),{useToken:ue}=h,K=e=>{let{token:{borderRadius:t}}=ue(),{name:n,description:r,icon:i}=e;return(0,G.jsx)(de,{onClick:()=>{R(),e.onClick()},borderRadius:t,children:(0,G.jsxs)(b,{className:`maxAll`,children:[(0,G.jsx)(fe,{children:(0,G.jsx)(pe,{src:i})}),(0,G.jsx)(c.Title,{level:3,style:{marginBottom:-1,fontFamily:p.FugazOne,textTransform:`uppercase`},children:L(n)}),(0,G.jsx)(c.Text,{children:r})]})})},de=m.div.attrs({className:`maxAll`})`
  cursor: pointer;
  border-radius: ${e=>e.borderRadius}px;
  background: rgba(255, 255, 255, 0.1);
  padding: 40px 0px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`,fe=m.div`
  margin-bottom: 5px;
`,pe=m.img`
  height: 70px;
`,q=e=>y(`editor/icons/${e}.png`),me=e=>(0,G.jsxs)(he,{children:[(0,G.jsx)(c.Title,{level:1,style:{fontFamily:p.FugazOne,marginBottom:25,marginTop:5},className:`allCaps`,children:`Add`}),(0,G.jsxs)(ge,{children:[(0,G.jsx)(K,{name:z.terrain.singular,description:`The floors and walls on the map`,icon:q(`terrain`),onClick:e.setToTerrain}),(0,G.jsx)(K,{name:z.prop.plural,description:`Objects and decorations`,icon:q(`prop`),onClick:e.setToProps}),(0,G.jsx)(K,{name:z.device.plural,description:`Create game mechanics!`,icon:q(`device`),onClick:e.setToDevices}),(0,G.jsx)(K,{name:z.wire.plural,description:`Connect devices together`,icon:q(`wire`),onClick:e.setToWires})]}),e.children]}),he=m.div.attrs({className:`flex-column flex-center maxWidth`})``,ge=m.div.attrs({className:`maxWidth`})`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`,_e=_(()=>{let{me:{adding:{terrain:e}}}=A(),t=e.buildTerrainAsWall,n=t=>{w()||(e.buildTerrainAsWall=t)};return(0,G.jsxs)(S,{children:[(0,G.jsxs)(c.Text,{style:{marginRight:10},children:[`Place down `,z.terrain.singular,` as a`]}),(0,G.jsxs)(i.Group,{children:[(0,G.jsx)(i,{type:t?`default`:`primary`,onClick:()=>n(!1),children:`Floor`}),(0,G.jsx)(i,{type:t?`primary`:`default`,onClick:()=>n(!0),children:`Wall`})]})]})}),J=e(ne()),Y=()=>(0,G.jsxs)(ve,{children:[ee.name,` Exclusive`]}),ve=m.div`
  color: rgb(218, 165, 32);
  background: linear-gradient(
    45deg,
    #ae8625,
    #f7ef8a,
    #d2ac47,
    #edc967,
    #ae8625,
    #f7ef8a,
    #d2ac47,
    #edc967,
    #ae8625,
    #f7ef8a
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: ${p.FugazOne};
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1;
`,{useToken:ye}=h,be=e=>{let{id:t,name:n,previewUrl:r,seasonTicketRequired:i}=e.option,a=W.useRef(null),{token:{borderRadius:o}}=ye(),s=i&&!C(),c=e=>{s||(D.me.adding.terrain.currentlySelectedTerrain=t,D.me.adding.mode=T.terrain,j(O.adding),P()&&V(E.home),I({event:F.SELECT_TERRAIN_TO_ADD,terrainId:t}),e&&e())};return B(J.default.Input.Keyboard.KeyCodes.ENTER,()=>{e.focused&&c()},[e.focused,c]),W.useEffect(()=>{if(e.focused){var t;(t=a.current)==null||t.scrollIntoView({behavior:`smooth`,block:`center`})}},[e.focused]),(0,G.jsxs)(xe,{borderRadius:o,focused:e.focused,onClick:()=>{c(()=>{R()})},ref:a,children:[(0,G.jsx)(Ce,{src:r}),(0,G.jsxs)(Se,{children:[(0,G.jsx)(we,{level:5,className:`allCaps`,style:{fontFamily:p.FugazOne},children:n}),i?(0,G.jsx)(`div`,{style:{marginTop:2},children:(0,G.jsx)(Y,{})}):null]})]})},xe=m(x)`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${e=>e.borderRadius}px;
  border: 2px solid
    ${e=>e.focused?`#ffca28`:`rgba(255, 255, 255, 0.1)`};
  padding: 10px 15px;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;m.div`
  display: flex;
  align-items: center;
`;var Se=m.div`
  display: flex;
  flex-direction: column;
`,Ce=m.img`
  height: 54px;
  border-radius: 3px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  margin-right: 15px;
`,we=m(c.Title)`
  margin-bottom: 0 !important;
`,Te=()=>(0,G.jsx)(c.Text,{italic:!0,children:`No results found. Try a different search.`}),Ee=e=>{let{worldOptions:{terrainOptions:t}}=A(),[n,r]=W.useState(-1),[i]=d(e.searchQuery,150),a=W.useMemo(()=>{var e;let n=i==null||(e=i.trim())==null?void 0:e.toLowerCase();if(!n&&!P())return t.filter(e=>U(e.id));let r=t.filter(e=>e.name.toLowerCase().includes(n)&&U(e.id));return P()?r.sort((e,t)=>{let n=N.topTerrain.indexOf(e.id),r=N.topTerrain.indexOf(t.id);return n===-1&&r===-1?0:n===-1?1:r===-1?-1:n-r}):r},[t.length,i]);return B(J.default.Input.Keyboard.KeyCodes.UP,()=>{r(Math.max(0,n-1))},[n]),B(J.default.Input.Keyboard.KeyCodes.DOWN,()=>{let e=a.length-1;r(Math.min(e,n+1))},[a.length,n]),W.useEffect(()=>{r(i?0:-1)},[i]),a.length?(0,G.jsx)(s,{direction:`vertical`,size:12,className:`maxWidth`,children:a.map((e,t)=>(0,G.jsx)(be,{option:e,focused:n===t},e.id))}):(0,G.jsx)(Te,{})},De=e=>{let[t,n]=W.useState(``),r=W.useRef(null),i=e=>{n(e.target.value)},s=e=>{if(e){var t;r==null||(t=r.current)==null||t.focus()}else n(``)},l=w();return(0,G.jsx)(o,{open:e.open,onClose:e.close,width:500,afterOpenChange:s,destroyOnClose:!0,children:(0,G.jsxs)(b,{children:[(0,G.jsx)(c.Title,{level:1,style:{fontFamily:p.FugazOne,marginBottom:12,marginTop:5},className:`allCaps`,children:L(z.terrain.singular)}),l?null:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(_e,{}),` `,(0,G.jsx)(g,{})]}),(0,G.jsx)(a.Search,{size:`large`,placeholder:`Search for ${z.terrain.plural}...`,style:{marginBottom:23},value:t,onChange:i,ref:r}),(0,G.jsx)(Ee,{searchQuery:t})]})})},Oe=e(t((e=>{Object.defineProperty(e,"__esModule",{value:!0});var t=r();function n(e){let[n,r]=(0,t.useState)(!1),i=(0,t.useMemo)(()=>new IntersectionObserver(([e])=>r(e.isIntersecting)),[]);return(0,t.useEffect)(()=>(i.observe(e.current),()=>{i.disconnect()}),[]),(0,t.useEffect)(()=>{n&&i.unobserve(e.current)},[n,i,e]),n}e.default=n}))()),{useToken:ke}=h,Ae=e=>{let{id:t,name:n,image:r,seasonTicketRequired:i}=e.option,a=W.useRef(null),o=(0,Oe.default)(a),{token:{borderRadius:s}}=ke(),c=i&&!C(),l=e=>{c||(D.me.adding.devices.selectedDeviceType=M.prop,D.me.adding.devices.currentlySelectedProp=t,D.me.adding.mode=T.device,j(O.adding),P()&&V(E.home),I({event:F.SELECT_PROP_TO_ADD,propId:t}),e&&e())};return B(J.default.Input.Keyboard.KeyCodes.ENTER,()=>{e.focused&&l()},[e.focused,l]),W.useEffect(()=>{if(e.focused){var t;(t=a.current)==null||t.scrollIntoView({block:`center`})}},[e.focused]),(0,G.jsx)(je,{ref:a,onClick:()=>{l(()=>{R()})},focused:e.focused,borderRadius:s,children:o?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Me,{children:(0,G.jsx)(Ne,{src:y(r.path)})}),(0,G.jsx)(Pe,{level:5,className:`allCaps`,style:{fontFamily:p.FugazOne},children:n}),i?(0,G.jsx)(Y,{}):null]}):null})},je=m(b)`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${e=>e.borderRadius}px;
  border: 2px solid
    ${e=>e.focused?`#ffca28`:`rgba(255, 255, 255, 0.1)`};
  padding: 10px 15px;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  height: auto;
  min-height: 168px;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`,Me=m(S)`
  width: 120px;
  height: 120px;
  padding: 10px;
`,Ne=m.img.attrs({draggable:!1})`
  max-height: 100%;
  max-width: 100%;
`,Pe=m(c.Title).attrs({className:`maxWidth`})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`,Fe=()=>(0,G.jsx)(c.Text,{italic:!0,children:`No results found. Try a different search.`}),Ie=v(e=>{let{worldOptions:t}=A(),[n,r]=W.useState(-1),[i]=d(e.searchQuery,200),a=W.useMemo(()=>{var e;let n=t.propsOptions.filter(e=>se(e.minimumRoleLevel)),r=i==null||(e=i.trim())==null?void 0:e.toLowerCase();if(!r&&!P())return n;let a=r.split(/\s+/),o=n.filter(e=>{let t=[e.name,...e.tags??[]].join(` `).toLowerCase();return a.every(e=>t.includes(e))});return P()?o.sort((e,t)=>{let n=N.topProps.indexOf(e.id),r=N.topProps.indexOf(t.id);return n===-1&&r===-1?0:n===-1?1:r===-1?-1:n-r}):o},[t.propsOptions.length,i]);f(()=>{t.requestedAllProps||(t.requestedAllProps=!0,ie(re.requestAllProps))});let o=W.useCallback(e=>{let t=Math.max(0,Math.min(a.length-1,n+e));r(t)},[a.length,n]);return B(Phaser.Input.Keyboard.KeyCodes.UP,()=>{o(-2)},[o]),B(Phaser.Input.Keyboard.KeyCodes.DOWN,()=>{o(2)},[o]),B(Phaser.Input.Keyboard.KeyCodes.LEFT,()=>{o(-1)},[o]),B(Phaser.Input.Keyboard.KeyCodes.RIGHT,()=>{o(1)},[o]),W.useEffect(()=>{r(i?0:-1)},[i]),t.hasAllProps?a.length?(0,G.jsx)(Le,{children:a.map((e,t)=>(0,G.jsx)(Ae,{focused:t===n,option:e},e.id+`-option`))}):(0,G.jsx)(Fe,{}):null}),Le=m.div.attrs({className:`maxWidth`})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 10px;
  overflow: hidden;
`,Re=e=>{let[t,n]=W.useState(``),r=W.useRef(null);return(0,G.jsx)(o,{open:e.open,onClose:e.close,width:550,afterOpenChange:e=>{if(e){var t;r==null||(t=r.current)==null||t.focus()}else n(``)},destroyOnClose:!0,children:(0,G.jsxs)(b,{children:[(0,G.jsx)(c.Title,{level:1,style:{fontFamily:p.FugazOne,marginBottom:12,marginTop:5},className:`allCaps`,children:L(z.prop.plural)}),(0,G.jsx)(a.Search,{size:`large`,placeholder:`Search for ${z.prop.plural}...`,style:{marginBottom:23},value:t,onChange:e=>{n(e.target.value)},ref:r}),(0,G.jsx)(Ie,{searchQuery:t})]})})},ze=[M.placedSticker,M.droppedItem],Be=te(),Ve={[M.characterSpawnPad]:`spawn_pad`,[M.backgroundTilesZone]:`background_tile_zone`,[M.proceduralTerrainZoneZoneInstruction]:`procedural_terrain_zone_instruction`,[M.mapOptions]:`map_settings`,[M.guiDevice]:`gui`},He=({deviceId:e})=>{let[t,n]=W.useState(!1);W.useEffect(()=>n(!1),[e]);let r=Ve[e]??(0,Be.snakeCase)(e),i=t?`editor/icons/device.png`:`devices/${r}/editing_preview.png`;return(0,G.jsx)(`img`,{src:y(i),alt:``,draggable:!1,style:{display:`block`,width:`100%`,height:`100%`,objectFit:`contain`},onError:()=>n(!0)})},{useToken:Ue}=h,We=e=>{let{option:{id:t,name:n,description:r,seasonTicketRequired:i}}=e,a=W.useRef(null),{token:{borderRadius:o}}=Ue(),s=i&&!C(),c=e=>{s||(D.me.adding.devices.selectedDeviceType=t,D.me.adding.mode=T.device,D.me.currentAction=O.adding,P()&&V(E.home),I({event:F.SELECT_DEVICE_TO_ADD,deviceTypeId:t}),e&&e())};return B(J.default.Input.Keyboard.KeyCodes.ENTER,()=>{e.focused&&c()},[e.focused,c]),W.useEffect(()=>{if(e.focused){var t;(t=a.current)==null||t.scrollIntoView({block:`center`})}},[e.focused]),(0,G.jsxs)(Ge,{ref:a,borderRadius:o,focused:e.focused,onClick:()=>{c(()=>{R()})},children:[(0,G.jsx)(Ke,{children:(0,G.jsx)(He,{deviceId:t})}),(0,G.jsxs)(qe,{children:[i?(0,G.jsx)(`div`,{style:{marginBottom:2},children:(0,G.jsx)(Y,{})}):null,(0,G.jsx)(Je,{level:5,className:`allCaps`,style:{fontFamily:p.FugazOne,marginBottom:0},children:n}),r?(0,G.jsx)(Ye,{children:r}):null]})]})},Ge=m.div.attrs({className:`flex vc`})`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${e=>e.borderRadius}px;
  border: 2px solid
    ${e=>e.focused?`#ffca28`:`rgba(255, 255, 255, 0.1)`};
  padding: 25px;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`,Ke=m(S)`
  height: 50px;
  width: 50px;
  margin-right: 20px;
  flex-shrink: 0;
`,qe=m.div``,Je=m(c.Title)``,Ye=m(c.Text)``,Xe=()=>(0,G.jsx)(c.Text,{italic:!0,children:`No results found. Try a different search.`}),Ze=e=>{let{deviceTypeId:t}=e,n=oe(t);return n?!n.supportedMapStyles||n.supportedMapStyles.includes(H()):!1},X=[...ze,M.prop,M.mapOptions],Z=_(e=>{let[t,n]=W.useState(-1),{worldOptions:{deviceOptions:r}}=A(),[i]=d(e.searchQuery,150),a=W.useMemo(()=>{let t=i==null?void 0:i.toLowerCase(),n=r.filter(e=>!X.includes(e.id)).filter(e=>ce(e.id,void 0)).filter(e=>Ze({deviceTypeId:e.id})).filter(t=>!e.list||e.list.includes(t.id)).filter(e=>{var n;return!t||e.name.toLowerCase().includes(t)||((n=e.description)==null||(n=n.toLowerCase())==null?void 0:n.includes(t))}).sort((e,n)=>{let r=e.name.toLowerCase().includes(t),i=n.name.toLowerCase().includes(t);return r&&!i?-1:!r&&i?1:e.name.length<n.name.length?-1:+(e.name.length>n.name.length)});if(P())return n.sort((e,t)=>{let n=N.topDevices.indexOf(e.id),r=N.topDevices.indexOf(t.id);return n===-1&&r===-1?0:n===-1?1:r===-1?-1:n-r});if(e.list){let t=[];return e.list.forEach(e=>{let r=n.find(t=>t.id===e);r&&t.push(r)}),t}return n},[r.length,i,e.list]);return B(J.default.Input.Keyboard.KeyCodes.UP,()=>{e.blockKeyboardNavigation||n(Math.max(0,t-1))},[t,e.blockKeyboardNavigation]),B(J.default.Input.Keyboard.KeyCodes.DOWN,()=>{if(e.blockKeyboardNavigation)return;let r=a.length-1;n(Math.min(r,t+1))},[a.length,t,e.blockKeyboardNavigation]),W.useEffect(()=>{!i||e.blockKeyboardNavigation?n(-1):n(0)},[i,e.blockKeyboardNavigation]),a.length?(0,G.jsx)(s,{direction:`vertical`,size:12,className:`maxWidth`,children:a.map((e,n)=>(0,G.jsx)(We,{option:e,focused:n===t},e.id+`-option`))}):(0,G.jsx)(Xe,{})}),{useToken:Qe}=h,$e=e=>{let{token:{borderRadius:t}}=Qe(),{collection:{icon:n,name:r,description:i,devices:a}}=e;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(et,{borderRadius:t,onClick:e.open,children:[(0,G.jsx)(tt,{src:n}),(0,G.jsx)(c.Title,{level:4,style:{fontFamily:p.FugazOne,marginBottom:2},className:`allCaps`,children:r}),(0,G.jsx)(c.Text,{children:(0,G.jsx)(k,{children:i})})]}),(0,G.jsx)(o,{open:e.isOpen,onClose:e.close,title:r,width:500,children:(0,G.jsx)(Z,{list:a})})]})},et=m(b)`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${e=>e.borderRadius}px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  text-align: center;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  min-height: 196px;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`,tt=m.img`
  height: 50px;
  margin-bottom: 15px;
  opacity: 0.85;
`,Q=`${L(z.device.plural)}`,$=e=>y(`editor/icons/device_collections/${e}.svg`),nt=[{icon:$(`starting`),name:`Starting ${Q}`,description:`${Q} you might need for every map`,devices:[M.characterSpawnPad,M.trigger,M.gimkitLiveQuestion,M.itemGranter,M.itemSpawner,M.sentry,M.startingInventory,M.wireRepeater,M.teleporter]},{icon:$(`inventory`),name:`Inventory ${Q}`,description:`${Q} to manage what items & resources players have`,devices:[M.vendingMachine,M.itemGranter,M.startingInventory,M.itemSpawner,M.inventoryItemManager]},{icon:$(`interaction`),name:`Interaction ${Q}`,description:`${Q} to create rich interactions`,devices:[M.button,M.vendingMachine,M.zone,M.textExplainer,M.dialogue,M.textBillboard]},{icon:$(`new`),name:`New ${Q}`,description:`${Q} recently added to ${l} Creative`,devices:[M.jumpGranter,M.luckyBlock,M.scalableShape,M.popupListItem,M.character,M.dialogue,M.dialogueAction,M.damager,M.cameraPoint,M.playerPositionDetector,M.itemImage,M.ball,M.ballZone]}],rt=e=>(0,G.jsx)(it,{children:nt.map(t=>(0,G.jsx)($e,{collection:t,isOpen:t.name===e.openCollectionName,open:()=>e.open(t.name),close:()=>e.open(``)},`device-collection-${t.name}`))}),it=m.div.attrs({className:`maxWidth`})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 12px;
  overflow: hidden;
`,at=e=>{let[t,n]=W.useState(``),[r,i]=W.useState(null),s=W.useRef(null),l=e=>{n(e.target.value)},u=W.useCallback(()=>{r||e.close()},[r,e.close]);return(0,G.jsxs)(o,{open:e.open,onClose:u,width:680,afterOpenChange:e=>{if(e){var t;s==null||(t=s.current)==null||t.focus()}else n(``)},destroyOnClose:!0,children:[(0,G.jsxs)(b,{children:[(0,G.jsx)(c.Title,{level:1,style:{fontFamily:p.FugazOne,marginBottom:12,marginTop:5},className:`allCaps`,children:L(z.device.plural)}),(0,G.jsx)(a.Search,{size:`large`,placeholder:`Search for ${z.device.plural}...`,style:{marginBottom:23},value:t,onChange:l,ref:s}),!t&&!P()?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(rt,{openCollectionName:r,open:i}),(0,G.jsx)(g,{children:(0,G.jsxs)(c.Text,{italic:!0,children:[`All `,L(z.device.plural)]})})]}):null]}),(0,G.jsx)(Z,{searchQuery:t,blockKeyboardNavigation:!!r})]})},ot=v(e=>{let{gui:{none:{addMenu:{screen:t}}},me:{adding:r}}=A(),[i,a,s]=n(!0),[c,l]=W.useState(!0);le();let u=W.useMemo(()=>t===E.terrain,[t]),d=W.useMemo(()=>t===E.props,[t]),f=W.useMemo(()=>t===E.devices,[t]),p=()=>{e.setToHomeScreen(),g(E.home)},m=ae();W.useEffect(()=>{m||s()},[m]);let h=W.useCallback(()=>{c?p():u||d||f||s()},[s,u,d,f,c,p]),g=e=>V(e),_=e=>{e&&l(!1),e||p()},v=()=>{g(E.home)};return(0,G.jsx)(o,{open:i,onClose:h,afterOpenChange:_,width:600,destroyOnClose:!0,children:(0,G.jsx)(st,{children:(0,G.jsxs)(me,{close:e.setToHomeScreen,setToTerrain:()=>g(E.terrain),setToProps:()=>{g(E.props)},setToDevices:()=>g(E.devices),setToWires:()=>{r.mode=T.wire,j(O.adding),I({event:F.START_ADDING_WIRE})},children:[(0,G.jsx)(De,{open:u,close:v}),(0,G.jsx)(Re,{open:d,close:v}),(0,G.jsx)(at,{open:f,close:v})]})})})}),st=m.div.attrs({className:`maxWidth`})``;export{ot as default};