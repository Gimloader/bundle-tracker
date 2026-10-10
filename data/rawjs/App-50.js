import{o as e}from"./rolldown-runtime.js";import{C as t,E as n}from"./utils.js";import{t as r}from"./react-1.js";import{t as i}from"./modal.js";import{t as a}from"./button.js";import{t as o}from"./input.js";import{t as s}from"./card.js";import{t as c}from"./checkbox.js";import{t as l}from"./form.js";import{t as u}from"./App-4.js";import{t as d}from"./jsx-runtime.js";import{c as f,l as p,n as m,s as h,y as g}from"./_index.js";import{t as _}from"./AccessibleAnchor.js";import{t as v}from"./Paper.js";import{t as y}from"./NotionContentWrapper.js";var b=e(r()),x=d(),S=()=>(0,x.jsxs)(`div`,{children:[`One giant obstacle for teachers is classroom funding: The average teacher in the US spends nearly $750 a year on classroom supplies. `,(0,x.jsx)(`br`,{}),` `,(0,x.jsx)(`br`,{}),` `,`That's an eye-popping number. For us, it's also a motivating one. `,(0,x.jsx)(`br`,{}),` `,(0,x.jsx)(`br`,{}),`And that's why we created GiveKit!`,(0,x.jsx)(`br`,{}),` `,(0,x.jsx)(`br`,{}),(0,x.jsx)(`b`,{children:`With GiveKit, we're donating $500 in funding every month to help pay for your school materials, first aid kits, tech tools, furniture, and anything else you may need to do your best work.`}),(0,x.jsx)(g,{}),(0,x.jsx)(`h2`,{children:`How it works`}),(0,x.jsxs)(`b`,{children:[`Every month we’ll fund $500 to educator-led projects via`,` `,(0,x.jsx)(_,{external:!0,to:`https://www.donorschoose.org`,target:`_blank`,children:`DonorsChoose.org.`})]}),(0,x.jsx)(`br`,{}),` `,(0,x.jsx)(`br`,{}),`We may fund one project in a month or several. If you don't get picked one month, no worries, we might always come back to fund it in the future.`,(0,x.jsx)(`br`,{}),` `,(0,x.jsx)(`br`,{}),`We've decided to donate through`,` `,(0,x.jsx)(_,{external:!0,to:`https://www.donorschoose.org`,target:`_blank`,children:`DonorsChoose.org`}),` `,`—- they help take care of all the complexities in getting money from us to you.`,(0,x.jsx)(`br`,{}),` `,(0,x.jsx)(`br`,{}),(0,x.jsx)(`b`,{children:`To apply for GiveKit, simply:`}),(0,x.jsx)(`br`,{}),` `,(0,x.jsx)(`br`,{}),`1. Register and start a project at`,` `,(0,x.jsx)(_,{external:!0,to:`https://www.donorschoose.org`,target:`_blank`,children:`DonorsChoose.org`}),` `,(0,x.jsx)(`br`,{}),`2. Fill out the form below with a link to your project `,(0,x.jsx)(`br`,{}),`3. Keep up your incredible work! `,(0,x.jsx)(`br`,{}),` `,(0,x.jsx)(`br`,{}),`We'll review applications monthly and select a project or projects to fund.`,(0,x.jsx)(`br`,{})]}),C=`Thank you so much for applying! If you're selected, we'll send you an email. Take care and have a great rest of your day!`,w=()=>{let[e,r]=b.useState(!1),[u,d]=b.useState(!1);return u?(0,x.jsx)(s,{style:{fontSize:18,color:m.Black},children:C}):(0,x.jsxs)(l,{onFinish:a=>{e||u||(r(!0),t({url:`/api/v1/givekit/apply`,data:a,success:()=>{d(!0),i.success({title:`Applied!`,content:C})},error:e=>{n({e,default:{title:`Error applying. Please try again later`}})},both:()=>{r(!1)}}))},style:{width:`100%`},children:[(0,x.jsx)(T,{children:`First Name*`}),(0,x.jsx)(l.Item,{name:`firstName`,rules:[{required:!0,message:`Please enter your first name.`}],children:(0,x.jsx)(o,{})}),(0,x.jsx)(T,{children:`Last Name*`}),(0,x.jsx)(l.Item,{name:`lastName`,rules:[{required:!0,message:`Please enter your last name.`}],children:(0,x.jsx)(o,{})}),(0,x.jsx)(T,{children:`Role*`}),(0,x.jsx)(l.Item,{name:`role`,rules:[{required:!0,message:`Please enter your role.`}],children:(0,x.jsx)(o,{})}),(0,x.jsx)(T,{children:`Email Address*`}),(0,x.jsx)(l.Item,{name:`email`,rules:[{required:!0,type:`email`,message:`Please enter a valid email.`}],children:(0,x.jsx)(o,{type:`email`})}),(0,x.jsx)(T,{children:`DonorsChoose Project Link*`}),(0,x.jsx)(E,{children:`Paste the link to your project on DonorsChoose.org`}),(0,x.jsx)(l.Item,{name:`projectLink`,rules:[{required:!0,message:`Please enter the project link.`}],children:(0,x.jsx)(o,{placeholder:`https://www.donorschoose.org/project/my-project`})}),(0,x.jsx)(T,{children:`Date Needed`}),(0,x.jsx)(E,{children:`If your project is time sensitive, let us know!`}),(0,x.jsx)(l.Item,{name:`dateNeeded`,children:(0,x.jsx)(o,{})}),(0,x.jsx)(T,{children:`Comments`}),(0,x.jsx)(l.Item,{name:`comments`,children:(0,x.jsx)(o,{})}),(0,x.jsx)(T,{children:`Permission`}),(0,x.jsx)(E,{children:`Check the box below if you give us permission to use your name and project info. If you're not comfortable, no worries! Checking this box does not increase your chances of being selected.`}),(0,x.jsx)(l.Item,{name:`permission`,valuePropName:`checked`,initialValue:!1,children:(0,x.jsx)(c,{children:`Yes, you may use my name and project info!`})}),(0,x.jsx)(l.Item,{children:(0,x.jsx)(a,{style:{marginTop:20},type:`primary`,htmlType:`submit`,size:`large`,block:!0,loading:e,children:`Submit`})})]})},T=p.div`
  font-size: 18px;
  color: ${m.Black};
  font-family: ${f.SFPro};
  margin-top: 12px;
  font-weight: ${h.Bold};
`,E=p.div``,D=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{}),(0,x.jsx)(`h2`,{children:`Apply for GiveKit funding`}),(0,x.jsx)(w,{})]}),O=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{}),(0,x.jsx)(`h2`,{children:`FAQ`}),(0,x.jsx)(`b`,{children:`What kind of projects are you looking for? `}),` `,(0,x.jsx)(`br`,{}),`We’re looking for projects that have the largest possible positive impact on students. That could be anything! Classroom materials, first aid kits, resources that celebrate diversity, supplies for ambitious project-based learning ideas — Anything. If you need it, we want to know about it. The only thing we’re not looking for are requests for Gimkit subscriptions or licenses.`,(0,x.jsx)(`br`,{}),` `,(0,x.jsx)(`br`,{}),(0,x.jsx)(`b`,{children:`Why not give money directly to teachers?`}),` `,(0,x.jsx)(`br`,{}),`Because DonorsChoose specializes in funding classroom projects and they're great at what they do. They’ve helped donors give more than $1 billion to teachers, funding nearly 2 million projects. They take care of the hard parts of giving including vetting requests, purchasing items, and shipping materials directly to verified schools. Simply, working with them makes it easy to give!`,` `,(0,x.jsx)(_,{external:!0,target:`_blank`,to:`https://www.donorschoose.org`,children:`Learn more about DonorsChoose.org.`}),(0,x.jsx)(g,{}),(0,x.jsx)(`b`,{children:`Need more info?`}),` `,(0,x.jsx)(`br`,{}),`Write us at`,` `,(0,x.jsx)(_,{to:`mailto:hello@gimkit.com`,external:!0,children:`hello@gimkit.com`}),` `,`and put GiveKit in the subject line.`]}),k=e=>{let t=t=>t===e.currentScreen;return(0,x.jsxs)(A,{children:[(0,x.jsx)(j,{onClick:()=>e.setScreen(N.apply),style:{marginRight:5,fontWeight:t(N.apply)?h.Bold:h.Normal},children:`About & Apply`}),(0,x.jsx)(j,{onClick:()=>e.setScreen(N.pastProjects),style:{fontWeight:t(N.pastProjects)?h.Bold:h.Normal},children:`Previously funded projects`})]})},A=p.div.attrs({className:`flex vc`})`
  margin-bottom: 25px;
`,j=p(_)`
  padding: 4px 15px;
  background: ${m.White};
  border: solid 1px;
  border-radius: 500px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`,M=()=>(0,x.jsx)(y,{id:`382c29c71fa14d5a99358c8e5c9b1e43`}),N=function(e){return e.apply=`apply`,e.pastProjects=`pastProjects`,e}({}),P=()=>{let[e,t]=b.useState(`apply`);return(0,x.jsxs)(F,{children:[(0,x.jsx)(u,{includeSpacer:!0}),(0,x.jsx)(I,{}),(0,x.jsx)(k,{currentScreen:e,setScreen:e=>{t(e)}}),(0,x.jsx)(L,{children:e===`apply`?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(S,{}),(0,x.jsx)(D,{}),(0,x.jsx)(O,{})]}):(0,x.jsx)(M,{})})]})},F=p.div.attrs({className:`flex flex-column vc`})`
  flex: 1;
  background: ${m.Snow};
  color: #1d2d35;
  font-family: ${f.SFPro};
  .ant-row.ant-form-item {
    margin: 0px;
  }
`,I=p.img.attrs({src:`/client/img/givekit/header.png`,alt:`GiveKit`})`
  height: 225px;
  margin: 45px;
  margin-bottom: 35px;
  max-width: 80%;
`,L=p(v)`
  flex: 1;
  width: 90%;
  max-width: 720px;
  padding: 45px;
  border-radius: 9px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  font-size: 18px;

  h2 {
    font-size: 28px;
    font-weight: ${h.Bold};
  }
`;export{N as GiveKitScreen,P as default};