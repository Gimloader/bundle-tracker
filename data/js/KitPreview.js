import {
    o as e
} from "./rolldown-runtime.js";
import {
    Q as t,
    S as n,
    r
} from "./utils.js";
import {
    t as i
} from "./react-1.js";
import {
    t as a
} from "./card.js";
import {
    t as o
} from "./jsx-runtime.js";
import {
    c as s,
    l as c,
    n as l,
    s as u,
    y as d
} from "./_index.js";
import {
    t as f
} from "./AccessibleAnchor.js";
import {
    t as p
} from "./NavigateTo.js";
import {
    t as m
} from "./ImagePreview.js";
i();
var h = e(t()),
    g = o(),
    _ = 178,
    v = 148,
    y = c(f).attrs({
        className: `maxWidth`
    })`
  display: flex;
  margin-bottom: 15px;
  text-decoration: none;
`,
    b = c(a)`
  background-color: ${l.White};
  border-radius: 7px;
  border: 2px solid ${l.BorderGray};
  font-family: ${s.SFPro};
`,
    x = c.div.attrs({
        className: `flex-column`
    })`
  padding: 20px;
  width: calc(100% - ${_}px);
`,
    S = c.div`
  margin-left: 7px;
  flex: 1;
  overflow: hidden;
`,
    C = c.div`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: 0px;
  line-height: 1.2;
  font-weight: ${u.Bold};
`,
    w = c.div`
  overflow: visible;
  letter-spacing: 0px;
  line-height: 1.2;
`,
    T = c.div`
  font-size: 13px;
  margin-bottom: 6px;
  opacity: 0.8;
`,
    E = c.div`
  font-size: 13px;
  opacity: 0.8;
  font-family: ${s.SFPro};
`,
    D = c.i`
  width: 17px;
  margin-right: 10px;
  font-size: 17px;
`,
    O = c(D).attrs({
        className: `fad fa-list`
    })``,
    k = c(D).attrs({
        className: `fad fa-calendar-alt`
    })``,
    A = e => {
        let t = e.size === `normal`;
        return (0, g.jsx)(y, {
            to: e.blockRedirect ? void 0 : `/view/${e.id}`,
            children: (0, g.jsx)(b, {
                className: `maxWidth`,
                onMouseEnter: e.handleHover,
                bodyStyle: {
                    padding: 14
                },
                hoverable: !e.blockHoverable,
                style: {
                    backgroundColor: e.selected ? `#eeeeee` : l.White
                },
                children: (0, g.jsxs)(`div`, {
                    className: `flex maxWidth`,
                    children: [(0, g.jsx)(`div`, {
                        children: (0, g.jsx)(m, {
                            image: e.gif,
                            size: t ? _ : v,
                            onClick: e.redirectOnImageClick && (() => e.blockRedirect ? null : p(`/view/${e.id}`))
                        })
                    }), (0, g.jsx)(x, {
                        children: (0, g.jsxs)(S, {
                            children: [(0, g.jsx)(C, {
                                style: {
                                    fontSize: t ? 32 : 23
                                },
                                children: e.title
                            }), e.creator && (0, g.jsx)(w, {
                                style: {
                                    fontSize: t ? 18 : 16
                                },
                                children: r(e.creator)
                            }), (0, g.jsx)(d, {
                                style: {
                                    margin: `16px 0px 18px 0px`
                                }
                            }), !!e.numberOfQuestions && (0, g.jsxs)(T, {
                                children: [(0, g.jsx)(O, {}), (0, g.jsxs)(`span`, {
                                    children: [e.numberOfQuestions ? e.numberOfQuestions : ``, ` `, e.numberOfQuestions ? n(`question`, e.numberOfQuestions) : ``]
                                })]
                            }), e.dateCreated && t && (0, g.jsxs)(E, {
                                children: [(0, g.jsx)(k, {}), (0, g.jsxs)(`span`, {
                                    children: [`Created `, (0, h.default)(e.dateCreated).fromNow()]
                                })]
                            })]
                        })
                    })]
                })
            })
        })
    };
export {
    A as t
};