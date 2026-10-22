const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/App-73.js","assets/rolldown-runtime.js","assets/utils.js","assets/dist-1.js","assets/react-1.js","assets/modal-1.js","assets/assertThisInitialized.js","assets/Compact.js","assets/color.js","assets/ContextIsolator.js","assets/dist-2.js","assets/wrapNativeSuper.js","assets/InfoCircleFilled.js","assets/compact-item.js","assets/useLocale.js","assets/useCSSVarCls.js","assets/pickAttrs.js","assets/button-1.js","assets/PurePanel.js","assets/Company.js","assets/Paths.js","assets/decorate.js","assets/jsx-runtime.js","assets/space.js","assets/ShopItem.js","assets/noop.js","assets/useQuery.js","assets/QueryClientProvider.js","assets/_index.js","assets/dist-3.js","assets/spin.js","assets/queryClient.js","assets/infiniteQueryBehavior.js","assets/index-Tu04tXLf.css","assets/TrackEvent.js","assets/TrackPostHogEvent.js","assets/GetAssetPath.js","assets/Navigation.js","assets/SeasonTicketName.js","assets/App-74.js","assets/FontAwesomeIcon.js","assets/Centered.js","assets/Names.js","assets/Button-2.js","assets/polished.esm.js","assets/inheritsLoose.js","assets/lodash.js","assets/playSound.js","assets/MapSound.js","assets/howler.js","assets/confetti.js","assets/AccessibleAnchor.js","assets/OwnsSeasonTicket.js","assets/Benefits.js","assets/App-75.js","assets/dropdown.js","assets/tooltip-1.js","assets/es-1.js","assets/es-2.js","assets/collapse.js","assets/move.js","assets/es-3.js","assets/EllipsisOutlined.js","assets/useDebouncedValue.js","assets/module-1.js","assets/CircularProgress.js","assets/clsx.m.js","assets/App-76.js","assets/useIntervalWhen.js","assets/useWillUnmount.js","assets/Pack.js","assets/App-77.js","assets/AnimatePresence.js","assets/motion.js","assets/use-force-update.js","assets/toNumber.js","assets/toInteger.js","assets/use-motion-value.js","assets/use-transform.js"])))=>i.map(i=>d[i]);
import{o as e}from"./rolldown-runtime.js";import{O as t,t as n,x as r,y as i}from"./utils.js";import{t as a}from"./react-1.js";import{a as o}from"./InfoCircleFilled.js";import{t as s}from"./space.js";import{t as c}from"./jsx-runtime.js";import{a as l,c as u,h as d,l as f,n as p,s as m,v as h}from"./_index.js";import{t as g}from"./GetAssetPath.js";import{a as _,s as v,u as y}from"./Navigation.js";import{n as b,t as x}from"./Centered.js";import{t as S}from"./Names.js";import{n as C,t as ee}from"./SeasonTicketName.js";import{t as te}from"./SeasonTicketInlineUpsell.js";import{t as w}from"./CircularProgress.js";var T=e(a()),E=f.div`
  padding: 30px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.09);
  border: 4px solid ${p.White};
`,D=e=>{if(e.type===y.character){let t=e.id.replace(`character_`,``);return g(`characters/spine/preview/${t}.png`)}if(e.type===y.trail){let t=e.id.replace(/^trail_/,``);return g(`trails/${t}/preview.png`)}if(e.type===y.sticker){let t=e.id.replace(/^sticker_/,``);return g(`stickers/${t}.png`)}return`/`},O=c(),k=e=>{let t=T.useMemo(()=>e.selectedCharacter?D({type:y.character,id:e.selectedCharacter}):g(`characters/spine/preview/default_yellow.png`),[e.selectedCharacter]);return(0,O.jsx)(A,{children:(0,O.jsx)(j,{src:t})})},A=f.div.attrs({className:`flex-center`})`
  height: ${150}px;
  width: ${150}px;
  border-radius: 50%;
  margin-top: ${-105}px;
  background-image: linear-gradient(
    -225deg,
    #3d4e81 0%,
    #5753c9 48%,
    #6e7ff3 100%
  );
  border: 4px solid ${p.White};
`,j=f.img`
  max-height: 85%;
  max-width: 85%;
  margin-left: 2px;
  transform: rotate(354deg);
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5));
  transform: rotate(354deg);
  user-drag: none;
`,M=e=>(0,O.jsxs)(b,{style:{marginTop:20,textAlign:`center`},children:[(0,O.jsxs)(N,{children:[C.seasonName,` `,C.seasonNumber]}),(0,O.jsxs)(P,{children:[S.level,` `,e.currentLevel]})]}),N=f.div`
  font-size: 18px;
  font-style: italic;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  font-weight: ${m.Bold};
`,P=f.div`
  font-family: ${u.FugazOne};
  text-transform: uppercase;
  font-size: 52px;
  margin-top: -6px;
  text-shadow: 1px 1px 21px rgba(0, 0, 0, 0.4);
`,F=()=>(0,O.jsxs)(`div`,{style:{fontSize:16,marginTop:20,color:`rgba(255,255,255,0.9)`},children:[(0,O.jsxs)(I,{children:[`Earn `,S.xp,` to level up.`]}),` Each time you level up, you'll earn `,(0,O.jsxs)(I,{children:[`100 `,S.currency]}),` which you can use to purchase items in the Shop.`,(0,O.jsx)(`br`,{}),` `,(0,O.jsx)(`br`,{}),`You can earn `,S.xp,` by playing 2D modes. `,S.xp,` is granted every minute you play and answer questions correctly!`]}),I=f.span`
  font-weight: ${m.Bold};
`,L=e=>(0,O.jsxs)(R,{style:{height:e.height},children:[(0,O.jsx)(z,{children:e.children}),(0,O.jsx)(B,{style:{width:`${Math.max(e.percentageComplete,2)}%`}})]}),R=f.div.attrs({className:`maxWidth`})`
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
  position: relative;
`,z=f.div.attrs({className:`maxAll`})`
  position: absolute;
  top: 0;
  left: 0;
`,B=f.div.attrs({className:`maxHeight`})`
  width: 50%;
  background: #00c853;
`,V=e=>{let t=Math.min(e.xpNeededPerLevel-1,e.unredeemedXP),n=Math.max(1,e.xpNeededPerLevel-t),i=t/e.xpNeededPerLevel*100;return(0,O.jsxs)(H,{children:[(0,O.jsxs)(U,{children:[(0,O.jsxs)(`div`,{children:[r(t),`/`,r(e.xpNeededPerLevel),`XP`]}),(0,O.jsxs)(`div`,{children:[r(n),` `,S.xp,` to`,` `,S.level,` `,e.currentLevel+1]})]}),(0,O.jsx)(L,{height:60,percentageComplete:i})]})},H=f.div.attrs({className:`maxWidth`})`
  margin-top: 14px;
`,U=f.div.attrs({className:`maxWidth flex between vc`})`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.95);
  text-transform: uppercase;
  font-family: ${u.FugazOne};
  margin-bottom: 8px;
`,ne=e=>(0,O.jsxs)(W,{style:{backgroundImage:`linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%)`},children:[(0,O.jsx)(k,{selectedCharacter:e.selectedCharacter}),(0,O.jsx)(M,{currentLevel:e.currentLevel}),(0,O.jsx)(V,{currentLevel:e.currentLevel,unredeemedXP:e.unredeemedXP,xpNeededPerLevel:e.xpNeededPerLevel}),(0,O.jsx)(F,{})]}),W=f(E).attrs({className:`flex-center flex-column`})`
  margin-top: ${75}px;
`,G=e=>(0,O.jsxs)(K,{children:[(0,O.jsx)(q,{children:e.name}),(0,O.jsx)(J,{children:e.description}),(0,O.jsx)(L,{height:45,percentageComplete:e.percentageComplete,children:(0,O.jsx)(`div`,{className:`maxAll flex vc`,children:(0,O.jsx)(`span`,{style:{fontFamily:u.FugazOne,textTransform:`uppercase`,textShadow:`1px 1px 10px rgba(0,0,0,0.2)`,color:`rgba(255,255,255,0.9)`,fontSize:12,marginLeft:15},children:e.progressText})})})]}),K=f.div``,q=f.div`
  font-size: 20px;
  font-weight: ${m.UltraBold};
`,J=f.div`
  font-size: 16px;
  margin-bottom: 11px;
  color: rgba(255, 255, 255, 0.85);
  font-style: italic;
  margin-top: -2px;
`,Y=e=>{Math.min(e.dailyXpLimit,e.dailyXp+e.notSyncedXP);let t=Math.min(e.periodXpLimit,e.periodXp+e.notSyncedXP),{dailyXpLimit:n,periodXpLimit:i}=e;return(0,O.jsxs)(X,{children:[(0,O.jsx)(Z,{children:`Limits`}),(0,O.jsx)(E,{children:(0,O.jsx)(s,{direction:`vertical`,size:22,className:`maxWidth`,children:(0,O.jsxs)(`div`,{children:[(0,O.jsx)(G,{name:`Weekly ${S.xp}`,description:`Resets on Wednesdays at 2:00pm EST`,percentageComplete:Math.floor(t/i*100),progressText:`${r(t)}/${r(i)} ${S.xp}`}),(0,O.jsx)(te,{text:`Increase your Weekly ${S.xp} limit to 20,000`,marginTop:10})]})})})]})},X=f.div``,Z=f.div`
  font-family: ${u.FugazOne};
  text-transform: uppercase;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 6px;
`,Q=e=>(0,O.jsx)(re,{children:(0,O.jsx)(ie,{style:{maxWidth:e.customWidth??721},children:e.children})}),re=f.div.attrs({className:`maxWidth flex hc`})``,ie=f.div.attrs({className:`maxWidth`})``,ae=e=>{let{data:n,error:r,isLoading:i}=v(),[a,o,c]=t(!1);if(i)return(0,O.jsx)(x,{className:`maxAll`,children:(0,O.jsx)(w,{style:{color:p.White}})});if(r)return(0,O.jsx)(x,{className:`maxAll`,children:`There was an error loading your info. Please refresh and try again.`});let l=e.notSyncedXP||0,u=Math.min(l+(n.unredeemedXP||0),n.xpNeededPerLevel);return(0,O.jsxs)(s,{direction:`vertical`,size:35,className:`maxAll`,children:[(0,O.jsx)(ne,{...n,unredeemedXP:u}),(0,O.jsx)(Y,{notSyncedXP:l,dailyXp:n.xpGainedToday,periodXp:n.xpGainedInPeriod,dailyXpLimit:n.maxXpToday,periodXpLimit:n.maxXpInPeriod})]})},oe=e=>(0,O.jsx)(Q,{children:(0,O.jsx)(ae,{...e})}),$=T.lazy(()=>d(()=>import(`./App-73.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]))),se=T.lazy(()=>d(()=>import(`./App-75.js`),__vite__mapDeps([54,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,55,56,57,58,28,29,30,27,31,32,33,59,60,61,62,23,63,64,40,36,37,26,38,41,42,65,66,45,39,43,44,46,47,48,49,50]))),ce=T.lazy(()=>d(()=>import(`./App-76.js`),__vite__mapDeps([67,1,4,23,7,6,22,68,25,24,2,3,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,69,65,66,70,51]))),le=T.lazy(()=>d(()=>import(`./App-77.js`),__vite__mapDeps([71,1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,29,23,72,25,73,74,26,27,28,30,31,32,33,40,75,76,36,37,38,41,42,66,45,65,39,43,44,46,47,48,49,50,70,51,77,78]))),ue=e=>{let{screen:t}=e;return l(()=>{i(`https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap`)}),(0,O.jsx)(de,{children:(0,O.jsx)(o,{theme:{algorithm:h.defaultAlgorithm},children:(0,O.jsxs)(T.Suspense,{fallback:(0,O.jsx)(`div`,{}),children:[e.pageMode?t===_.locker?(0,O.jsx)(n,{title:`Locker`}):t===_.shop?(0,O.jsx)(n,{title:`Shop`}):t===_.seasonTicket?(0,O.jsx)(n,{title:ee.name}):t===_.pack?(0,O.jsx)(n,{title:`Pack`}):(0,O.jsx)(n,{title:`Rewards`}):null,t===_.locker?(0,O.jsx)(se,{onCosmeticSelectionChanged:e.onCosmeticSelectionChanged,blockCharacterPreview:e.blockCharacterPreview}):t===_.shop?(0,O.jsx)(ce,{onCosmeticSelectionChanged:e.onCosmeticSelectionChanged,blockCharacterPreview:e.blockCharacterPreview,setToPackScreen:e.pageMode?void 0:t=>{e==null||e.setMetadata(t),e==null||e.setScreen(_.pack)}}):t===_.seasonTicket?(0,O.jsx)($,{pageMode:e.pageMode}):t===_.pack?(0,O.jsx)(le,{pageMode:e.pageMode,metadata:e.metadata}):(0,O.jsx)(oe,{notSyncedXP:e.notSyncedXP,blockDiscord:e.blockDiscord})]})})})},de=f.div`
  flex: 1;
  color: ${p.White};
  user-select: none;
`;export{ue as default,D as n,Q as t};