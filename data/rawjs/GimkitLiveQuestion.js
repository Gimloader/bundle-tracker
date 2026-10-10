import{o as e}from"./rolldown-runtime.js";import{B as t,C as n,O as r}from"./utils.js";import{t as i}from"./react-1.js";import{t as a}from"./jsx-runtime.js";import{n as o,t as s}from"./AnimatePresence.js";import{l as c,s as l}from"./_index.js";import{r as u}from"./mobxreact.esm.js";import{t as d}from"./module-1.js";import{a as f,d as p,h as m,i as h,l as g,m as _,n as v,p as y,r as b,t as x}from"./Text.js";import{n as S}from"./polished.esm.js";import{t as C}from"./lodash.js";import{n as w,t as T}from"./motion.js";import{t as E}from"./use-motion-value.js";import{t as ee}from"./getCloudinaryUrl.js";import{t as te}from"./LazyLatexRenderer.js";var ne=C(),D=e(i()),re=m(),O=a(),k,ie={backgroundColor:`rgba(255,255,31, 0.21)`,boxShadow:`10px 0 0 rgba(255,255,31, 0.21), -10px 0 0 rgba(255,255,31, 0.21)`,borderRadius:9},ae=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`,A=class extends D.Component{render(){let{paddingHorizontal:e,paddingVertical:t,...n}=this.props;return delete n.text,delete n.highlighted,(0,O.jsx)(ae,{className:this.props.customClass,style:this.props.customStyle,children:(0,O.jsx)(re.Textfit,{style:{height:`100%`,width:`100%`,display:`flex`,justifyContent:this.props.disableHorizontalCentering?`flex-start`:`center`,alignItems:`center`,paddingTop:t,paddingBottom:t,paddingLeft:this.props.paddingLeft||e,paddingRight:e,boxSizing:`border-box`,fontWeight:this.props.noBold?`normal`:900},...n,children:(0,O.jsx)(`div`,{style:this.props.highlighted?ie:void 0,children:this.props.text})})})}};k=A,k.defaultProps={paddingHorizontal:`6%`,paddingVertical:15,max:50,mode:`single`,forceSingleModeWidth:!1};var j=`"Product Sans"`,M={mainFontName:j,name:`${j}, sans-serif`,important:`${j}, sans-serif !important`},N=D.createContext(f),oe=c.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
`,P=u(e=>{let{readToMe:t}=D.useContext(N),{text:n,image:r,audio:i,latex:a}=e;return(0,O.jsx)(oe,{children:n?!r&&!i&&!a?(0,O.jsx)(x,{text:n,highlighted:t.currentlyPlayingQuestionText,allowGoogleTranslate:e.allowGoogleTranslate}):(0,O.jsx)(b,{text:n,image:r,latex:a,audio:i,highlighted:t.currentlyPlayingQuestionText,allowGoogleTranslate:e.allowGoogleTranslate||!1}):(0,O.jsx)(v,{image:r,latex:a,audio:i})})}),F=e=>{D.useEffect(()=>(document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)),[]);let t=t=>{e.canAnswer&&p(t,()=>{e.onQuestionAnswered(e.answer)})},n=n=>{if(e.blockKeyboardEvent)return;let{keyCode:r}=n;r===e.keyCode&&t(n)},r=e.containerWidth>=e.desktopBreakpoint,i=D.useMemo(()=>e.answerCount===4?e.gridView||r?{height:50,width:50}:{height:25,width:100}:r?{width:100/e.answerCount,height:100}:{width:100,height:100/e.answerCount},[e.answerCount,r,e.gridView]);return(0,O.jsx)(I,{onClick:t,gridView:e.gridView,isOnDesktop:r,heightPercentage:i.height,widthPercentage:i.width,children:(0,O.jsx)(se,{position:e.position,answerColors:e.answerColors,isOnDesktop:r,children:e.children})})},I=c.div`
  text-align: center;
  height: ${e=>e.heightPercentage}%;
  width: ${e=>e.widthPercentage}%;
  cursor: pointer;
`,se=c.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${e=>e.answerColors[e.position].background};
  color: ${e=>e.answerColors[e.position].text};
  opacity: 1;
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 6px;
  border-style: solid;
  ${e=>e.isOnDesktop&&`
    transition: background 0.18s ease-in-out;
    &:hover {
      background: ${e.answerColors[e.position].hoverBackground||S(.1,e.answerColors[e.position].background)};
    }
  `}
`,L=e=>{let[t,r]=D.useState(e.text),i=()=>{e.language!==`en`&&(e.disableIfContains&&e.text.includes(e.disableIfContains)||(e.translations&&e.translations[e.text]?r(e.translations[e.text]):n({url:``,data:{to:e.language,text:e.text},success:t=>{r(t),e.translations[e.text]=t}})))};return D.useEffect(()=>{e.text!==t&&(r(e.text),i())},[e.text]),(0,O.jsx)(O.Fragment,{children:(()=>{let n=t;return e.suffix&&(n+=e.suffix),n})()})},R={White:`white`,Black:`black`,BackgroundGray:`#eeeeee`,PrimaryBlue:`#05f`,SecondaryPurple:`#1E076B`,DisabledGray:`#838383`,LightSuccessGreen:`#6abf69`,DarkSuccessGreen:`#2e7d32`},ce=e=>{let[t,n]=D.useState(``),[r,i]=D.useState(!0),a=e=>{n(e.target.value)},o=e=>{e.preventDefault(),s()},s=()=>{t&&r&&(i(!1),e.onQuestionAnswered(t))};return(0,O.jsxs)(le,{children:[(0,O.jsx)(ue,{onSubmit:o,children:(0,O.jsx)(de,{autoFocus:!0,value:t,onChange:a,placeholder:`Enter answer here...`})}),(0,O.jsx)(z,{buttonColor:e.buttonColor,onClick:s,children:(0,O.jsx)(L,{language:e.language,translations:e.translations,text:`Submit`})})]})},le=c.div`
  height: 100%;
  width: 100%;
`,ue=c.form`
  height: 55%;
  width: 100%;
`,de=c.input`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 27px;
  border-style: solid;
  border-color: ${R.DisabledGray};
  color: ${R.Black};
  border-width: 6px;
  font-family: ${M.name};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`,z=c.div`
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 6px;
  border-style: solid;
  transition: background 0.18s ease-in-out;
  height: 45%;
  background: ${e=>e.buttonColor.background};
  color: ${e=>e.buttonColor.text};
  &:hover {
    background: ${e=>e.buttonColor.hoverBackground||S(.1,e.buttonColor.background)};
  }
  font-weight: bold;
  font-size: 32px;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,B=e=>(0,O.jsxs)(O.Fragment,{children:[e.text&&(0,O.jsx)(g,{mode:`multi`,text:y(e.allowGoogleTranslate,e.text),paddingVertical:e.customTextHorizontalPadding||7,paddingHorizontal:e.customTextHorizontalPadding,max:e.customMaxTextSize||25,highlighted:e.highlighted}),e.image&&(0,O.jsx)(`img`,{src:ee(e.image),alt:`Answer Choice`,style:{maxHeight:e.customImageHeight||`90%`,height:e.customImageHeight||`90%`,maxWidth:e.customImageWidth||`90%`,borderRadius:4,objectFit:`contain`}}),e.latex&&(0,O.jsx)(g,{text:(0,O.jsx)(te,{latex:e.latex}),paddingVertical:e.customTextHorizontalPadding||7,paddingHorizontal:e.customTextHorizontalPadding,max:e.customMaxTextSize||25,noBold:!0})]}),V=new Map,H=new Map,U=new Map,W=1,fe=()=>{let e=W.toString();return W++,e},G=(e,t)=>{let n=fe();if(t){let e=V.get(t);e&&(U.delete(e),H.set(e,n)),V.set(t,n)}return U.set(n,e),n},K=e=>{if(!e)return;let t=H.get(e);return t?K(t):U.get(e)},pe=[49,50,51,52],me=u(e=>{let[t,n]=D.useState(!0),[r,i]=D.useState(),{readToMe:a}=D.useContext(N),o=D.useRef(null),[s]=d(o),c=D.useMemo(()=>(0,ne.take)(K(e.eas),4),[]);if(D.useEffect(()=>{r&&e.onQuestionAnswered(r)},[r]),e.type===_.textInput)return(0,O.jsx)(q,{defaultBackgroundColor:e.defaultBackgroundColor,children:(0,O.jsx)(ce,{language:e.language,translations:e.translations,onQuestionAnswered:e.onQuestionAnswered,buttonColor:e.textInputButtonColor})});let l=c.some(e=>!!(e&&e.image)),u=e=>{n(!1),i(e)};return(0,O.jsx)(q,{ref:o,defaultBackgroundColor:e.defaultBackgroundColor,children:c.map((n,r)=>(0,O.jsx)(F,{id:n._id,position:r,canAnswer:t,keyCode:pe[r],gridView:l,onQuestionAnswered:u,answer:n._id,blockKeyboardEvent:e.blockKeyboardEvent,answerColors:e.answerColors,containerWidth:s,desktopBreakpoint:e.desktopBreakpoint,answerCount:c.length,children:(0,O.jsx)(B,{allowGoogleTranslate:e.allowGoogleTranslate,text:n.text,image:n.image,latex:n.latex,highlighted:a.currentlyPlayingAnswerAudio&&r===f.readToMe.answerIndex})},r))})}),q=c.div`
  background: ${e=>e.defaultBackgroundColor};
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`,he=e=>{let t=e.textColor,n=D.useMemo(()=>e.textShownWhenAnsweringCorrectly,[]);return(0,O.jsx)(ge,{style:{color:t,animationDuration:`${e.customCorrectTextAnimation&&e.customCorrectTextAnimation.duration?e.customCorrectTextAnimation.duration:1}s`},className:e.customCorrectTextAnimation&&e.customCorrectTextAnimation.className?e.customCorrectTextAnimation.className:`animated tada`,children:(0,O.jsx)(g,{max:170,mode:`single`,text:n})})},ge=c.div.attrs({className:`maxAll flex-center`})``,_e=e=>(0,O.jsx)(ve,{backgroundColor:e.correctAnswerColor.background,children:(0,O.jsx)(he,{textShownWhenAnsweringCorrectly:e.textShownWhenAnsweringCorrectly,customCorrectTextAnimation:e.customCorrectTextAnimation,textColor:e.correctAnswerColor.text})}),ve=c.div.attrs({className:`maxWidth flex-center`})`
  height: 40%;
  background: ${e=>e.backgroundColor};
`,ye=e=>(0,O.jsx)(`span`,{onClick:t=>{e.onClick&&e.onClick(t)},children:e.children}),be=e=>{let t=D.useRef(null),[n]=d(t);return(0,O.jsx)(ye,{onClick:t=>{p(t,()=>{var t;(t=e.onActionSound)==null||t.play(),e.handleClick&&e.handleClick()})},children:(0,O.jsx)(J,{ref:t,background:e.background,heightPercentage:e.heightPercentage,isOnDesktop:n>=e.desktopBreakpoint,children:(0,O.jsx)(g,{text:(0,O.jsx)(L,{language:e.language,translations:e.translations,text:e.text}),max:40})})})},J=c.div.attrs({className:`flex-center maxWidth`})`
  height: ${e=>e.heightPercentage}%;
  background: ${e=>e.background};
  color: ${R.White};
  box-sizing: border-box;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 6px;
  border-style: solid;
  cursor: pointer;
  ${e=>e.isOnDesktop&&`transition: background 0.15s;
    &:hover {
      background: ${S(.1,e.background)};
    }

  `}
`,xe=e=>{let t=1/e.actions.length*100;return(0,O.jsx)(Se,{children:e.actions.filter(e=>e!==null).map(n=>(0,O.jsx)(be,{...n,heightPercentage:t,language:e.language,translations:e.translations,desktopBreakpoint:e.desktopBreakpoint,onActionSound:e.onActionSound},n.text))})},Se=c.div.attrs({className:`maxWidth`})`
  height: 60%;
  text-align: center;
`,Ce=e=>{D.useEffect(()=>(document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`keydown`,t)}),[e.canAdvanceToQuestions,e.blockKeyboardEvents]);let t=t=>{e.blockKeyboardEvents||t.key&&t.key===`Enter`&&e.canAdvanceToQuestions&&e.continueToQuestions()};return(0,O.jsxs)(we,{defaultBackgroundColor:e.defaultBackgroundColor,children:[(0,O.jsx)(_e,{textShownWhenAnsweringCorrectly:e.textShownWhenAnsweringCorrectly,customCorrectTextAnimation:e.customCorrectTextAnimation,correctAnswerColor:e.correctAnswerColor}),(0,O.jsx)(xe,{actions:e.actions,language:e.language,translations:e.translations,desktopBreakpoint:e.desktopBreakpoint,onActionSound:e.onActionSound})]})},we=c.div.attrs({className:`flex-column maxAll`})`
  color: ${R.White};
  background: ${e=>e.defaultBackgroundColor};
`,Te=c(T.div).attrs({className:`maxAll`})`
  overflow: hidden;
`,Ee=c.div.attrs({className:`maxAll animated headShake`})``,De=c.div.attrs({className:`maxAll flex-center animated fadeIn`})``,Oe=c(T.div).attrs({layout:!0})`
  width: 90%;
  height: 80%;
`,ke=c.div.attrs({className:`maxWidth`})`
  text-align: center;
`,Ae=c(T.div).attrs({className:`maxWidth maxHeight`,layout:!0,animate:{opacity:1},transition:{delay:.15},initial:{opacity:0}})``,je=c.div.attrs({className:`maxAll flex flex-column`})`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`,Me=c.div.attrs({className:`maxWidth`})`
  background: rgba(0, 0, 0, 0.2);
  padding: 16px;
`,Y=c.div`
  font-size: 22px;
  opacity: 0.7;
  font-weight: ${l.Normal};
  font-style: italic;
`,Ne=c.div`
  flex: 1;
  overflow: hidden;
`,X=c.div.attrs({className:`maxWidth`})`
  position: relative;
  background: gray;
`,Pe=c(T.div).attrs({animate:{width:`100%`},initial:{width:`0%`},className:`maxHeight`})`
  position: absolute;
  top: 0;
`,Fe=c.div.attrs({className:`maxAll`})`
  position: absolute;
  top: 0;
`,Ie=c.div.attrs({className:`maxAll`})``,Le=c.div.attrs({className:`flex vc`})``,Z={textHeightPercentage:.08,maxTextWidthPercentage:.5,marginPercentage:.04,continueButtonHeightPercentage:.3},Re=class extends D.Component{constructor(...e){super(...e),this.state={text:this.props.text},this.buildString=()=>{let e=this.state.text;return this.props.suffix&&(e+=this.props.suffix),e},this.requestTranslation=async()=>{try{return(await t.post(`/api/translate`,{to:this.props.language,text:this.props.text})).data}catch{return this.props.text}}}componentDidUpdate(e){e.text!==this.props.text&&(this.setState({text:this.props.text}),this.onTranslate())}componentDidMount(){this.onTranslate()}onTranslate(){if(this.props.language!==`en`&&!this.props.text.includes(this.props.disableIfContains)){if(this.props.translations&&this.props.translations[this.props.text])return this.setState({text:this.props.translations[this.props.text]});this.requestTranslation().then(e=>{this.props.translations[this.props.text]=e,this.setState({text:e})}).catch()}}render(){return this.buildString()}},ze=e=>(0,O.jsxs)(je,{style:{height:e.answerBoxHeight,marginBottom:e.margin,borderRadius:10,marginLeft:e.margin,width:e.containerWidth-e.margin*2},children:[(0,O.jsx)(Me,{children:(0,O.jsxs)(Y,{children:[(0,O.jsx)(Re,{text:`Correct Answer`,language:e.language,translations:e.translations}),`:`]})}),(0,O.jsx)(Ne,{style:{padding:`${Math.max(e.containerHeight*.1,30)}px ${Math.max(e.containerWidth*.1,30)}px`},children:(0,O.jsx)(B,{allowGoogleTranslate:e.allowGoogleTranslate,text:e.correctAnswer?e.correctAnswer.text:`No Correct Answer`,image:e.correctAnswer?e.correctAnswer.image:void 0,latex:e.correctAnswer?e.correctAnswer.latex:void 0,customTextHorizontalPadding:`0px`,customTextVerticalPadding:`0px`,customImageHeight:`100%`,customImageWidth:`100%`,customMaxTextSize:40})})]}),Be=e=>{let[t,r]=D.useState(e.text),i=()=>{e.language!==`en`&&(e.disableIfContains&&e.text.includes(e.disableIfContains)||(e.translations&&e.translations[e.text]?r(e.translations[e.text]):n({url:``,data:{to:e.language,text:e.text},success:t=>{r(t),e.translations[e.text]=t}})))};return D.useEffect(()=>{e.text!==t&&(r(e.text),i())},[e.text]),(()=>{let n=t;return e.suffix&&(n+=e.suffix),n})()},Ve=e=>{let[t,n]=r(!1),[i,a]=D.useState(e.secondsToWait),o=D.useMemo(()=>e.canAdvanceToQuestions&&i>0,[i,e.canAdvanceToQuestions]);D.useEffect(()=>{e.onLockedChange&&e.onLockedChange(o)},[o,e.onLockedChange]);let s=Be({text:`Continue`,language:e.language,translations:e.translations}),c=D.useCallback(()=>{o||e.continueToQuestions()},[e.continueToQuestions,o]),l=D.useCallback(t=>{e.blockKeyboardEvents||t.key&&t.key===`Enter`&&c()},[e.blockKeyboardEvents,c]);D.useEffect(()=>(document.addEventListener(`keydown`,l),()=>{document.removeEventListener(`keydown`,l)}),[l]);let u=D.useCallback(()=>{var t;o||((t=e.onActionSound)==null||t.play(),c())},[o,c,e.onActionSound]);return D.useEffect(()=>{if(t&&i){let e=setTimeout(()=>{a(i-1)},1e3);return()=>clearTimeout(e)}return()=>null},[t,i]),(0,O.jsxs)(X,{style:{height:e.continueButtonHeight},children:[(0,O.jsx)(Pe,{style:{background:e.continueButtonColor.background},transition:{duration:e.secondsToWait,ease:`linear`},onAnimationStart:n}),(0,O.jsx)(Fe,{children:(0,O.jsx)(J,{heightPercentage:100,isOnDesktop:e.containerWidth>=e.desktopBreakpoint,background:i?`transparent`:e.continueButtonColor.background,style:{cursor:i?`not-allowed`:`pointer`,color:e.continueButtonColor.text},onClick:u,children:(0,O.jsx)(Ie,{children:(0,O.jsx)(A,{text:(0,O.jsxs)(Le,{children:[(0,O.jsx)(`div`,{children:s}),(0,O.jsxs)(T.div,{animate:{width:i>0?`auto`:0,opacity:+(i>0)},initial:{width:`auto`,opacity:1},transition:{width:{duration:.3},opacity:{duration:0}},children:[`\xA0(`,Math.max(1,i),`s)`]})]}),max:40})})})})]})},He=e=>{let[t,n]=D.useState(`message`),r=D.useRef(null),[i,a]=d(r),c=D.useRef(null),[l,u]=d(c),f=D.useMemo(()=>e.secondsToWaitBeforeContinue?e.secondsToWaitBeforeContinue:3,[e.secondsToWaitBeforeContinue]),p=D.useMemo(()=>e.lastQuestion?e.lastQuestion.answers.find(e=>e.correct):null,[e.lastQuestion]);o(()=>{n(`answer`)},e.showCorrectAnswerAfterMs||800);let m=D.useMemo(()=>t===`message`?e.incorrectAnswerColor.background:S(.2,e.incorrectAnswerColor.background),[t,e.incorrectAnswerColor.background]),h=D.useMemo(()=>t===`message`,[t]),g=D.useMemo(()=>t===`answer`,[t]),_=D.useMemo(()=>a*Z.marginPercentage,[a]),v=D.useMemo(()=>{let e=Z.textHeightPercentage*a/u,t=i*Z.maxTextWidthPercentage/l;return Math.min(e,t)},[a,u,l,i]),y=D.useMemo(()=>{if(h)return 0;let e=-(a/2);return e+=u*v/2,e+=_,e},[h,a,v,u,_]),b=D.useMemo(()=>a-u*v-a*Z.marginPercentage*2,[a,u,v]),x=D.useMemo(()=>b-a*Z.continueButtonHeightPercentage-_,[b,a,_]),C=D.useMemo(()=>a*Z.continueButtonHeightPercentage,[a]);return D.useEffect(()=>(e.onLockedChange&&e.onLockedChange(!0),()=>{e.onLockedChange&&e.onLockedChange(!1)}),[e.onLockedChange]),(0,O.jsx)(s,{mode:`wait`,children:(0,O.jsx)(Te,{animate:{background:m},transition:{duration:.3},ref:r,children:(0,O.jsxs)(Ee,{style:{color:e.incorrectAnswerColor.text},children:[(0,O.jsx)(De,{style:{marginTop:y},children:(0,O.jsx)(Oe,{layout:!0,animate:{scale:h?1:v,opacity:h?1:.8},children:(0,O.jsx)(A,{max:170,mode:`single`,text:(0,O.jsx)(`div`,{ref:c,children:e.textShownWhenAnsweringIncorrectly})})})}),g?(0,O.jsx)(ke,{style:{marginTop:y,height:b,overflow:`hidden`},children:(0,O.jsxs)(Ae,{children:[(0,O.jsx)(ze,{containerWidth:i,containerHeight:a,answerBoxHeight:x,margin:_,correctAnswer:p,allowGoogleTranslate:e.allowGoogleTranslate,language:e.language,translations:e.translations}),(0,O.jsx)(Ve,{continueButtonHeight:C,containerWidth:i,secondsToWait:f,continueToQuestions:e.continueToQuestions,desktopBreakpoint:e.desktopBreakpoint,language:e.language,translations:e.translations,onActionSound:e.onActionSound,continueButtonColor:e.continueButtonColor,blockKeyboardEvents:e.blockKeyboardEvents,canAdvanceToQuestions:e.canAdvanceToQuestions,onLockedChange:e.onLockedChange})]})}):null]})})})},Ue=e=>e.lastQuestionCorrect?(0,O.jsx)(Ce,{textShownWhenAnsweringCorrectly:e.textShownWhenAnsweringCorrectly,customCorrectTextAnimation:e.customCorrectTextAnimation,onActionSound:e.onActionSound,language:e.language,translations:e.translations,allowGoogleTranslate:e.allowGoogleTranslate,continueToQuestions:e.continueToQuestions,actions:e.actions,desktopBreakpoint:e.desktopBreakpoint,defaultBackgroundColor:e.defaultBackgroundColor,correctAnswerColor:e.correctAnswerColor,blockKeyboardEvents:e.blockKeyboardEvents,canAdvanceToQuestions:e.canAdvanceToQuestions}):(0,O.jsx)(He,{textShownWhenAnsweringIncorrectly:e.textShownWhenAnsweringIncorrectly,lastQuestion:e.lastQuestion,onActionSound:e.onActionSound,language:e.language,translations:e.translations,allowGoogleTranslate:e.allowGoogleTranslate,desktopBreakpoint:e.desktopBreakpoint,canAdvanceToQuestions:e.canAdvanceToQuestions,blockKeyboardEvents:e.blockKeyboardEvents,continueToQuestions:e.continueToQuestions,incorrectAnswerColor:e.incorrectAnswerColor,continueButtonColor:e.continueButtonColor,onLockedChange:e.onLockedChange}),Q={defaultBackground:`#303f9f`,question:{background:`#303f9f`,text:R.White},palette:[{background:`#771322`,text:R.White},{background:`#A85C15`,text:R.White},{background:`#0D6B33`,text:R.White},{background:`#076296`,text:R.White}],response:{correctAnswer:{background:`#388E3C`,text:R.White},incorrectAnswer:{background:`#B71C1C`,text:R.White},shop:{background:`#311B92`,text:R.White},continue:{background:`#1A237E`,text:R.White}},desktopBreakpoint:650},We=c(T.div)`
  background: ${e=>e.defaultBackgroundColor};
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  will-change: transform;
`,$=u(e=>(D.useEffect(()=>(f.readToMe.canPlayAgain=!0,()=>{f.readToMe.canPlayAgain=!1}),[]),(0,O.jsx)(We,{style:{opacity:e.opacity,y:e.yPosition},defaultBackgroundColor:e.defaultBackgroundColor||Q.defaultBackground,children:e.children}))),Ge=u(e=>{let[t,n]=D.useState(!1),[r,i]=D.useState(`questions`),[a,o]=D.useState(!1),[c,l]=D.useState(e.ecc),[u,d]=D.useState(),p=E(`0%`),m=E(1),g=E(+!!e.disableFadeInOnMount);D.useEffect(()=>{d(e.ecc)},[e.ecc]),D.useEffect(()=>{c||l(e.ecc)},[e.ecc]);let v=D.useMemo(()=>{if(c)return K(c)},[c]),y=D.useMemo(()=>{if(v)return G(v.answers,`${v._id}-answers`)},[v]);D.useEffect(()=>(e.onMount&&e.onMount(),e.disableFadeInOnMount||w(g,1,{duration:.25,delay:.01,ease:`easeOut`}),()=>{h.stop()}),[]),D.useEffect(()=>{f.readToMe.enabled=e.readToMeEnabled||!1,r===`response`?h.stop():r===`questions`&&c&&h.play(v)},[e.readToMeEnabled,r]);let b=t=>{if(t){var n;(n=e.correctSound)==null||n.play()}else{var r;(r=e.incorrectSound)==null||r.play()}},x=t=>{if(!a){e.onActionSound&&e.onActionSound.play(),o(!0);let n=e.onQuestionAnswered(t);w(p,`100%`,{ease:`easeIn`,duration:.23,onComplete:()=>{o(!1),b(n),e.nextQuestion&&e.nextQuestion(),S()}})}},S=()=>{let r=.3;h.stop(),m.set(0),e.beforeOpenAnswerResponse&&e.beforeOpenAnswerResponse(),i(`response`),w(m,1,{duration:r,onUpdate:e=>{!t&&e>=r*.75&&n(!0)}})},C=()=>{p.set(`0%`),n(!1),h.stop(),e.continueAction&&e.continueAction(),l(u),i(`questions`),g.set(0),w(g,1,{duration:.2})};return(0,O.jsx)(s,{mode:`wait`,children:r===`questions`?c?(0,O.jsxs)($,{opacity:g,yPosition:p,defaultBackgroundColor:e.defaultBackgroundColor||Q.defaultBackground,children:[(0,O.jsx)(Ke,{questionColor:e.questionColor||Q.question,children:(0,O.jsx)(P,{text:v==null?void 0:v.text,image:v==null?void 0:v.image,audio:v==null?void 0:v.audio,latex:v==null?void 0:v.latex,allowGoogleTranslate:e.allowGoogleTranslate})}),(0,O.jsx)(me,{onQuestionAnswered:x,eas:y,type:(v==null?void 0:v.type)||_.multipleChoice,blockKeyboardEvent:e.blockKeyboardEvents||!1,allowGoogleTranslate:e.allowGoogleTranslate||!1,language:e.language||`en`,translations:e.translations||{},answerColors:e.answerColors||Q.palette,desktopBreakpoint:e.desktopBreakpoint||Q.desktopBreakpoint,defaultBackgroundColor:e.defaultBackgroundColor||Q.defaultBackground,textInputButtonColor:e.textInputButtonColor||Q.palette[2]})]}):e.noQuestionContent||null:(0,O.jsx)(qe,{style:{opacity:m},children:(0,O.jsx)(Ue,{canAdvanceToQuestions:t,correctAnswer:e.lastQuestionCorrectAnswer,continueToQuestions:C,blockKeyboardEvents:e.blockKeyboardEvents,lastQuestionCorrect:e.lastQuestionAnsweredCorrect||!1,actions:(()=>{var t;let n={background:(e==null||(t=e.continueButtonColor)==null?void 0:t.background)||Q.response.continue.background,text:`Continue`,handleClick:()=>{C()}};return e.responseActions?[...e.responseActions,n]:[n]})(),lastQuestion:e.lastQuestion,allowGoogleTranslate:e.allowGoogleTranslate||!1,textShownWhenAnsweringCorrectly:e.textShownWhenAnsweringCorrectly||`Correct!`,textShownWhenAnsweringIncorrectly:e.textShownWhenAnsweringIncorrectly||`Incorrect!`,customCorrectTextAnimation:e.customCorrectTextAnimation,language:e.language||`en`,translations:e.translations||{},desktopBreakpoint:e.desktopBreakpoint||Q.desktopBreakpoint,defaultBackgroundColor:e.defaultBackgroundColor||Q.defaultBackground,correctAnswerColor:e.correctAnswerColor||Q.response.correctAnswer,incorrectAnswerColor:e.incorrectAnswerColor||Q.response.incorrectAnswer,continueButtonColor:e.continueButtonColor||Q.response.continue,onActionSound:e.onActionSound,onLockedChange:e.onLockedChange})})})}),Ke=c.div`
  color: ${e=>e.questionColor.text};
  height: 35%;
  background-color: ${e=>e.questionColor.background};
`,qe=c(T.div)`
  width: 100%;
  height: 100%;
  will-change: opacity;
`;export{G as a,A as c,K as i,X as n,N as o,Y as r,M as s,Ge as t};