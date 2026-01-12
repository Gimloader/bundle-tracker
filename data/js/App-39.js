import {
    j as e,
    D as p,
    F as o,
    q as d,
    C as f,
    e as u,
    U as g,
    d as r,
    u as h,
    r as i,
    n as j,
    a as v,
    S as b,
    a2 as P
} from "./_index.js";
import {
    N as w
} from "./NavigateTo.js";
import {
    M as N
} from "./Button.js";
import {
    P as y
} from "./Paper.js";
import {
    I as S
} from "./ImagePreview.js";
import C from "./PreviewComponent.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./getCloudinaryUrl.js";
import "./GimkitLiveQuestion.js";
import "./mobxreact.esm.js";
import "./Text.js";
import "./LazyLatexRenderer.js";
import "./capitalize.js";
import "./Tooltip.js";
import "./howler.js";
import "./index-1.js";
import "./motion.js";
import "./index-17.js";
import "./use-force-update.js";
import "./use-motion-value.js";
import "./sounds.js";
import "./GetAssetPath.js";
const z = t => e.jsx(k, {
        children: e.jsxs(q, {
            children: [e.jsx(S, {
                size: 92,
                blockModalOpen: !0,
                image: t.image,
                style: {
                    cursor: "default"
                }
            }), e.jsx(O, {
                children: t.title
            }), e.jsx(B, {
                children: t.creator
            }), e.jsx(p, {}), t.numberOfQuestions === 0 ? e.jsx("div", {
                style: {
                    fontSize: 18
                },
                children: "This kit cannot be practiced as it does not contain any questions."
            }) : e.jsxs(e.Fragment, {
                children: [e.jsx(N, {
                    customFontWeight: o.Bold,
                    type: "success",
                    size: "large",
                    onClick: t.setToPreview,
                    ariaLabel: "Practice",
                    children: "Practice"
                }), e.jsxs(E, {
                    children: [e.jsxs("div", {
                        children: [t.numberOfQuestions, " ", d("question", t.numberOfQuestions)]
                    }), e.jsx("div", {
                        style: {
                            margin: "0px 12px"
                        },
                        className: "flex",
                        children: e.jsx("i", {
                            className: "fas fa-circle",
                            style: {
                                fontSize: 10
                            }
                        })
                    }), e.jsxs("div", {
                        children: ["Powered by ", f]
                    })]
                })]
            })]
        })
    }),
    k = r.div.attrs({
        className: "flex-center scroll-y maxAll"
    })`
  background: #303f9f;
  color: ${u.Black};
  font-family: ${g.SFPro};
`,
    q = r(y).attrs({
        className: "flex-center flex-column animated fadeIn"
    })`
  width: 90%;
  max-width: 700px;
  border-radius: 8px;
  padding: 40px 30px;
  margin: 40px 0px;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 50px rgba(0, 0, 0, 0.4);
`,
    O = r.div`
  margin-top: 14px;
  font-size: 48px;
  font-weight: ${o.UltraBold};
  text-align: center;
`,
    B = r.div`
  font-size: 24px;
  margin-top: -4px;
`,
    E = r.div.attrs({
        className: "flex vc"
    })`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 20px;
  line-height: 1;
`,
    se = () => {
        const [t, n] = h(!1), [s, c] = i.useState(null), [l, m] = i.useState(""), {
            id: x
        } = j();
        return i.useEffect(() => {
            v({
                url: `/api/games/fetch/${x}`,
                success: a => {
                    c(a.kit), m(a.creator.name)
                },
                error: () => w(P)
            })
        }, []), s ? t ? e.jsx(C, {
            questions: s.questions
        }) : e.jsx(z, {
            title: s.title,
            image: s.gif,
            creator: l,
            numberOfQuestions: s.questions.length,
            setToPreview: n
        }) : e.jsx("div", {
            className: "maxAll flex-center",
            style: {
                background: "#303f9f"
            },
            children: e.jsx(b, {
                size: "large"
            })
        })
    };
export {
    se as
    default
};