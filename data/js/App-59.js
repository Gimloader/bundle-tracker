import {
    j as e,
    d as r,
    u as f,
    r as m
} from "./_index.js";
import {
    ai as y,
    q as C,
    ae as h,
    o as g,
    af as b
} from "./App-41.js";
import {
    S as v
} from "./SixteenByNineScaler.js";
import {
    g as I,
    m as l
} from "./motion.js";
import {
    L as j,
    u as B,
    a as A,
    C as N,
    d as k
} from "./useItemAmount.js";
import {
    M as P
} from "./Button.js";
import "./FixSpinePlugin.js";
import "./GetAssetPath.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./howler.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./TutorialConsts.js";
import "./ActionButton.js";
import "./index-5.js";
import "./index-18.js";
import "./context.js";
import "./FontAwesomeIcon.js";
import "./Centered.js";
import "./CapitalizeFirstLetter.js";
import "./index-4.js";
import "./index-2.js";
import "./index-14.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./index-3.js";
import "./CheckOutlined.js";
import "./CopyOutlined.js";
import "./progress.js";
import "./ElementIds.js";
import "./SeasonTicketName.js";
import "./useQuery.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./util-1.js";
import "./util-2.js";
import "./Shortcut.js";
import "./Names.js";
import "./useWillUnmount.js";
import "./use-motion-value.js";
import "./use-transform.js";
import "./index-6.js";
import "./AccessibleAnchor.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./inheritsLoose.js";
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
import "./polished.esm.js";
import "./index-1.js";
import "./index-9.js";
import "./index-23.js";
import "./useIntervalWhen.js";
import "./index-10.js";
import "./move.js";
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./useDebouncedValue.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
import "./index-20.js";
import "./index-22.js";
const M = {
        emptyMessage: "Nothing in here...yet! End the game and modify this device to include your content."
    },
    U = t => {
        const o = () => e.jsx(e.Fragment, {
            children: e.jsx("div", {
                style: t.isBanner ? void 0 : {
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    flexDirection: "column"
                },
                children: e.jsx(D, {
                    children: t.code ? e.jsx(j, {
                        noInline: !0,
                        code: t.code,
                        scope: {
                            MapButton: P,
                            CallAction: N,
                            usePropertyValue: A,
                            useItemAmount: B
                        },
                        children: e.jsx(k, {})
                    }) : M.emptyMessage
                })
            })
        });
        return e.jsx(e.Fragment, {
            children: t.isBanner ? e.jsx(w, {
                children: o()
            }) : e.jsx(F, {
                children: o()
            })
        })
    },
    w = r.div.attrs({
        className: "maxWidth flex vc"
    })`
  width: 100%;
  display: flex;
  justify-content: space-between;
`,
    F = r.div.attrs({
        className: "maxWidth flex-column vc"
    })``,
    D = r.div`
  font-size: 24px;
  margin: 6px;
`,
    s = {
        y: " 100%",
        opacity: 0
    },
    W = {
        y: "0%",
        opacity: 1
    },
    _ = t => {
        const o = I(),
            [n, a] = f(!1),
            p = () => {
                o && n && t.close()
            },
            u = y(t.defaultBackgroundColor),
            x = m.useMemo(() => {
                let i = {
                    background: t.defaultBackgroundColor,
                    color: u,
                    fontFamily: t.defaultFontFamily
                };
                return t.isBanner ? {
                    ...i,
                    ...{
                        padding: "30px 40px",
                        width: "100%",
                        maxWidth: "100%",
                        borderRadius: 0
                    }
                } : {
                    ...i,
                    ...{
                        padding: "40px 30px",
                        width: "90%",
                        maxWidth: 650,
                        borderRadius: 5
                    }
                }
            }, [t.defaultBackgroundColor, t.isBanner]);
        return e.jsxs(E, {
            onClick: p,
            style: t.isBanner ? {
                alignItems: "flex-end",
                justifyContent: "center"
            } : {
                justifyContent: "center",
                alignItems: "center"
            },
            children: [e.jsx(O, {
                initial: s,
                animate: W,
                exit: s,
                transition: {
                    duration: d,
                    ease: "easeOut"
                },
                onClick: i => i.stopPropagation(),
                onAnimationComplete: a,
                style: x,
                children: e.jsx(U, {
                    ...t
                })
            }), t.closableByUser ? e.jsx(C, {
                onClick: t.close
            }) : null]
        })
    },
    E = r.div.attrs({
        className: "maxAll flex"
    })``,
    O = r(l.div).attrs({
        className: "medium-shadow flex-column vc scroll-y"
    })`
  max-height: 80%;
`;
var c = (t => (t.modal = "modal", t.banner = "banner", t))(c || {});
const d = .3,
    R = t => {
        const o = m.useCallback(() => {
            t.closableByUser && t.close()
        }, [t.closableByUser]);
        g(Phaser.Input.Keyboard.KeyCodes.ESC, o, [o]);
        const n = () => {
            const a = {
                ...t,
                isBanner: t.style === c.banner,
                close: o,
                code: t.code
            };
            return e.jsx(_, {
                ...a
            })
        };
        return e.jsx(T, {
            children: e.jsx(z, {
                initial: {
                    background: "rgba(0,0,0,0)"
                },
                animate: {
                    background: "rgba(0,0,0,0.7)"
                },
                exit: {
                    background: "rgba(0,0,0,0)"
                },
                transition: {
                    duration: d
                },
                children: n()
            })
        })
    },
    ae = h(R),
    T = r(v).attrs({
        className: "maxAll"
    })`
  overflow: hidden;
  z-index: ${b.primaryContent};
`,
    z = r(l.div).attrs({
        className: "maxAll"
    })``;
export {
    d as ANIMATION_DURATION, ae as
    default
};