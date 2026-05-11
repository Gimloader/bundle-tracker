import {
    j as t,
    e as s,
    aq as d,
    D as c,
    q as x,
    b as m,
    d as i,
    U as a,
    F as f,
    c as h
} from "./_index.js";
import {
    I as u
} from "./ImagePreview.js";
import {
    A as v
} from "./AccessibleAnchor.js";
import {
    N as g
} from "./NavigateTo.js";
const o = 178,
    b = 148,
    j = i(v).attrs({
        className: "maxWidth"
    })`
  display: flex;
  margin-bottom: 15px;
  text-decoration: none;
`,
    C = i(h)`
  background-color: ${s.White};
  border-radius: 7px;
  border: 2px solid ${s.BorderGray};
  font-family: ${a.SFPro};
`,
    w = i.div.attrs({
        className: "flex-column"
    })`
  padding: 20px;
  width: calc(100% - ${o}px);
`,
    y = i.div`
  margin-left: 7px;
  flex: 1;
  overflow: hidden;
`,
    I = i.div`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: 0px;
  line-height: 1.2;
  font-weight: ${f.Bold};
`,
    N = i.div`
  overflow: visible;
  letter-spacing: 0px;
  line-height: 1.2;
`,
    z = i.div`
  font-size: 13px;
  margin-bottom: 6px;
  opacity: 0.8;
`,
    k = i.div`
  font-size: 13px;
  opacity: 0.8;
  font-family: ${a.SFPro};
`,
    l = i.i`
  width: 17px;
  margin-right: 10px;
  font-size: 17px;
`,
    S = i(l).attrs({
        className: "fad fa-list"
    })``,
    W = i(l).attrs({
        className: "fad fa-calendar-alt"
    })``,
    Q = e => {
        const n = e.size === "normal",
            r = () => e.blockRedirect ? null : g(`/view/${e.id}`);
        return t.jsx(j, {
            to: e.blockRedirect ? void 0 : `/view/${e.id}`,
            children: t.jsx(C, {
                className: "maxWidth",
                onMouseEnter: e.handleHover,
                bodyStyle: {
                    padding: 14
                },
                hoverable: !e.blockHoverable,
                style: {
                    backgroundColor: e.selected ? "#eeeeee" : s.White
                },
                children: t.jsxs("div", {
                    className: "flex maxWidth",
                    children: [t.jsx("div", {
                        children: t.jsx(u, {
                            image: e.gif,
                            size: n ? o : b,
                            onClick: e.redirectOnImageClick && r
                        })
                    }), t.jsx(w, {
                        children: t.jsxs(y, {
                            children: [t.jsx(I, {
                                style: {
                                    fontSize: n ? 32 : 23
                                },
                                children: e.title
                            }), e.creator && t.jsx(N, {
                                style: {
                                    fontSize: n ? 18 : 16
                                },
                                children: d(e.creator)
                            }), t.jsx(c, {
                                style: {
                                    margin: "16px 0px 18px 0px"
                                }
                            }), !!e.numberOfQuestions && t.jsxs(z, {
                                children: [t.jsx(S, {}), t.jsxs("span", {
                                    children: [e.numberOfQuestions ? e.numberOfQuestions : "", " ", e.numberOfQuestions ? x("question", e.numberOfQuestions) : ""]
                                })]
                            }), e.dateCreated && n && t.jsxs(k, {
                                children: [t.jsx(W, {}), t.jsxs("span", {
                                    children: ["Created ", m(e.dateCreated).fromNow()]
                                })]
                            })]
                        })
                    })]
                })
            })
        })
    };
export {
    Q as K
};