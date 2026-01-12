import {
    r as x,
    j as i,
    D as d,
    B as e,
    d as C,
    e as s
} from "./_index.js";
import {
    F as l,
    s as o,
    a,
    P as g
} from "./FixSpinePlugin.js";
import {
    T as p,
    o as w,
    af as S
} from "./App-41.js";
import {
    S as U
} from "./SixteenByNineScaler.js";
import {
    S as h
} from "./index-28.js";
import "./GetAssetPath.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./howler.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
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
import "./motion.js";
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
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
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
const k = () => {
        const t = l(p());
        t && (t.alpha.cinematicModeAlpha = 0, o.me.cinematicMode.mainCharacterVisible = !1)
    },
    b = () => {
        o.me.cinematicMode.nameTagsVisible = !0
    },
    y = () => {
        o.me.cinematicMode.nameTagsVisible = !1
    },
    v = () => {
        const t = l(p());
        t && (t.alpha.cinematicModeAlpha = 1, o.me.cinematicMode.mainCharacterVisible = !0)
    },
    F = () => {
        const t = l(p());
        t && (a().cameraHelper.startFollowingObject({
            object: t.body
        }), o.me.cinematicMode.followingMainCharacter = !0)
    },
    N = () => {
        a().cameraHelper.stopFollow(), o.me.cinematicMode.followingMainCharacter = !1
    },
    _ = () => {
        o.me.cinematicMode.hidingGUI = !1
    },
    H = () => {
        o.me.cinematicMode.hidingGUI = !0
    },
    n = t => {
        const r = a().cameras.main;
        r.centerOn(r.worldView.centerX + t.x, r.worldView.centerY + t.y)
    },
    I = t => {
        const r = a().cameras.main;
        a().cameraHelper.setBounds(o.world.width, o.world.height), r.setZoom(t)
    },
    V = () => {
        const [t, r] = x.useState(50), m = f => {
            I(f)
        }, c = () => {
            n({
                x: -t,
                y: 0
            })
        }, M = () => {
            n({
                x: t,
                y: 0
            })
        }, u = () => {
            n({
                x: 0,
                y: -t
            })
        }, j = () => {
            n({
                x: 0,
                y: t
            })
        };
        return i.jsxs("div", {
            className: "maxWidth",
            children: [i.jsx(d, {}), i.jsx("div", {
                className: "maxWidth flex-center",
                children: i.jsx(e, {
                    onClick: u,
                    children: "Up"
                })
            }), i.jsxs("div", {
                className: "maxWidth flex between",
                children: [i.jsx(e, {
                    onClick: c,
                    children: "Left"
                }), i.jsx(e, {
                    onClick: M,
                    children: "Right"
                })]
            }), i.jsx("div", {
                className: "maxWidth flex-center",
                children: i.jsx(e, {
                    onClick: j,
                    children: "Down"
                })
            }), i.jsx(h, {
                value: t,
                onChange: r,
                min: 1,
                max: 200,
                step: 1
            }), i.jsx(d, {}), i.jsx("p", {
                children: "Zoom"
            }), i.jsx(h, {
                onChange: m,
                min: .2,
                max: 10,
                step: .1
            })]
        })
    },
    Qi = () => {
        const [t, r] = x.useState(!0), m = () => r(c => !c);
        return w(g.Input.Keyboard.KeyCodes.SPACE, m), t ? i.jsx(G, {
            children: i.jsxs(A, {
                children: [i.jsx("h2", {
                    children: "Cinematic Mode"
                }), i.jsxs("div", {
                    className: "flex-column",
                    children: [i.jsx(e, {
                        onClick: N,
                        children: "Stop Focus Main Character"
                    }), i.jsx(e, {
                        onClick: F,
                        children: "Start Focus Main Character"
                    }), i.jsx(e, {
                        onClick: v,
                        children: "Show Main Character"
                    }), i.jsx(e, {
                        onClick: k,
                        children: "Hide Main Character"
                    }), i.jsx(e, {
                        onClick: b,
                        children: "Show Nametags"
                    }), i.jsx(e, {
                        onClick: y,
                        children: "Hide Nametags"
                    }), i.jsx(e, {
                        onClick: _,
                        children: "Show GUI"
                    }), i.jsx(e, {
                        onClick: H,
                        children: "Hide GUI"
                    }), i.jsx(V, {})]
                })]
            })
        }) : null
    },
    G = C.div.attrs({
        className: "maxAll flex"
    })`
  position: absolute;
  top: 0;
  left: 0;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;
  padding-bottom: 75px;
  z-index: ${S.overlayContent};
`,
    A = C(U)`
  padding: 20px;
  background: ${s.White};
  border: 4px solid ${s.Black};
  color: ${s.Black};
`;
export {
    Qi as
    default
};