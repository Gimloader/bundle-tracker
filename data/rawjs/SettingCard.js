import{t as e}from"./typography.js";import{l as t}from"./_index.js";import{n}from"./Button.js";var r=t.div.attrs({className:`maxWidth`})`
  padding: 17px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
`,i=t.div.attrs({className:`flex between vc`})`
  gap: 24px;
`,a=t.div`
  min-width: 0;
`,o=t(e.Title).attrs({level:5})`
  && {
    margin: 0 0 2px;
    color: ${n.White};
  }

  ${i} ${a} &&:only-child {
    margin-bottom: 0;
  }
`,s=t(e.Text)`
  && {
    display: block;
    line-height: 1.4;
  }
`;export{o as a,i,a as n,s as r,r as t};