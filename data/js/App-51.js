import {
    r as n,
    ar as j,
    j as o,
    d as p,
    F as b
} from "./_index.js";
import {
    S as E
} from "./SixteenByNineScaler.js";
import {
    C as k
} from "./Button.js";
import {
    Q as a,
    a as I,
    P as w
} from "./FixSpinePlugin.js";
import {
    D as d
} from "./TutorialConsts.js";
import {
    a8 as y,
    o as M,
    q as N
} from "./App-41.js";
import {
    S as f
} from "./index-28.js";
import {
    g as h,
    m as S
} from "./motion.js";
import "./index-2.js";
import "./index-20.js";
import "./index-5.js";
import "./index-22.js";
import "./index-4.js";
import "./context.js";
import "./index-1.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./GetAssetPath.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./howler.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./ActionButton.js";
import "./index-18.js";
import "./FontAwesomeIcon.js";
import "./Centered.js";
import "./CapitalizeFirstLetter.js";
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
const g = e => `${e}%`,
    O = () => {
        const [e, m] = n.useState(1), [i, u] = n.useState(1);
        n.useEffect(() => {
            const t = localStorage.getItem(a.musicVolume);
            if (t) {
                let r = Number(t);
                isNaN(r) && (r = 1), m(r)
            }
            const s = localStorage.getItem(a.soundEffectVolume);
            if (s) {
                let r = Number(s);
                isNaN(r) && (r = 1), u(r)
            }
        }, []);
        const C = n.useCallback(j.throttle(() => {
                I().worldManager.devices.allDevices.forEach(t => {
                    t.deviceOption.id === d.music && t.onMasterVolumeChange(), t.deviceOption.id === d.mapOptions && t.onMasterVolumeChange()
                })
            }, 200), []),
            v = t => {
                m(t / 100), localStorage.setItem(a.musicVolume, (t / 100).toString()), C()
            },
            V = t => {
                u(t / 100), localStorage.setItem(a.soundEffectVolume, (t / 100).toString())
            };
        return o.jsxs(P, {
            children: [y() ? o.jsxs(o.Fragment, {
                children: [o.jsx(x, {
                    children: "Music Volume"
                }), o.jsx(f, {
                    min: 0,
                    max: 100,
                    step: 1,
                    value: e * 100,
                    onChange: v,
                    tooltip: {
                        formatter: g
                    }
                }), o.jsx("div", {
                    style: {
                        height: 20
                    }
                })]
            }) : null, o.jsx(x, {
                children: "Sound Effects Volume"
            }), o.jsx(f, {
                min: 0,
                max: 100,
                step: 1,
                value: i * 100,
                onChange: V,
                tooltip: {
                    formatter: g
                }
            })]
        })
    },
    P = p.div``,
    x = p.div`
  font-size: 24px;
  font-weight: ${b.Bold};
  margin-bottom: 15px;
`,
    c = {
        out: {
            y: "100%",
            opacity: 0
        },
        in: {
            y: 0,
            opacity: 1
        }
    },
    $ = () => {
        const e = h(),
            m = i => {
                i.stopPropagation()
            };
        return o.jsx(A, {
            onClick: m,
            initial: c.out,
            animate: c.in,
            exit: c.out,
            transition: {
                duration: e ? .3 : .2,
                ease: "easeOut"
            },
            children: o.jsx(O, {})
        })
    },
    A = p(S.div).attrs({
        className: "medium-shadow flex-column"
    })`
  padding: 40px;
  background: rgba(48, 28, 86, 0.97);
  color: ${k.White};
  width: 90%;
  max-width: 800px;
  height: 80%;
  max-height: 400px;
  border-radius: 10px;
  overflow: hidden;
`,
    l = {
        out: {
            background: "rgba(0,0,0,0)"
        },
        in: {
            background: "rgba(0,0,0,0.6)"
        }
    },
    ot = e => {
        const m = h(),
            i = () => e.setToHomeScreen();
        return M(w.Input.Keyboard.KeyCodes.ESC, i, [i]), o.jsxs(E, {
            children: [o.jsx(D, {
                onClick: i,
                initial: l.out,
                animate: l.in,
                exit: l.out,
                transition: {
                    duration: m ? .3 : .2,
                    ease: "easeOut"
                },
                children: o.jsx($, {})
            }), o.jsx(N, {
                onClick: i
            })]
        })
    },
    D = p(S.div).attrs({
        className: "maxAll flex-center flex-column"
    })`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;
export {
    ot as
    default
};