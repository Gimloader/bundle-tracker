import{d as t}from"./_index.js";import{C as i}from"./Button.js";import{T as a}from"./index-14.js";const d=t.div.attrs({className:"maxWidth"})`
  padding: 17px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
`,o=t.div.attrs({className:"flex between vc"})`
  gap: 24px;
`,s=t.div`
  min-width: 0;
`,p=t(a.Title).attrs({level:5})`
  && {
    margin: 0 0 2px;
    color: ${i.White};
  }

  ${o} ${s} &&:only-child {
    margin-bottom: 0;
  }
`,c=t(a.Text)`
  && {
    display: block;
    line-height: 1.4;
  }
`;export{s as S,p as a,c as b,d as c,o as d};
