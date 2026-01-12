import {
    r as l,
    u as x,
    q as h,
    j as e,
    d as i,
    s as A,
    ah as M,
    F as y
} from "./_index.js";
import {
    ANIMATION_DURATION as b
} from "./App-56.js";
import {
    q as w
} from "./App-41.js";
import {
    M as C
} from "./Button.js";
import {
    a as N
} from "./useDebouncedValue.js";
import {
    g as j,
    m as I
} from "./motion.js";
import "./SixteenByNineScaler.js";
import "./index-2.js";
import "./index-20.js";
import "./index-5.js";
import "./index-22.js";
import "./index-4.js";
import "./context.js";
import "./index-1.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
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
import "./FillRemainingSpace.js";
import "./index-24.js";
const k = t => {
        const [s, r] = l.useState(""), [m, a, n] = x(!1), f = o => {
            r(o.target.value), n()
        }, g = o => {
            o.key === "Enter" && c()
        }, c = () => {
            const o = s.trim();
            o.length && t.guess(o)
        };
        N(() => {
            a(), r("")
        }, [t.incorrectCounter]), l.useEffect(() => {
            t.useMaxAttempts && t.attempts >= t.maxAttempts && r("")
        }, [t.attempts, t.maxAttempts, t.useMaxAttempts]);
        const p = l.useMemo(() => {
                if (!t.useMaxAttempts) return null;
                if (t.attempts >= t.maxAttempts) return {
                    message: "No More Guesses Allowed",
                    color: "red"
                };
                const o = t.maxAttempts - t.attempts;
                return {
                    message: `${o} ${h("attempt",o)} remaining`,
                    color: "yellow"
                }
            }, [t.maxAttempts, t.attempts, t.useMaxAttempts]),
            d = t.useMaxAttempts && t.attempts >= t.maxAttempts;
        return e.jsxs(E, {
            children: [e.jsx(T, {
                children: "Enter Password:"
            }), p ? e.jsx(S, {
                style: {
                    color: p.color
                },
                children: p.message
            }) : null, e.jsx(v, {
                className: m ? "animated shake" : "",
                placeholder: "Enter password here...",
                type: "text",
                autoFocus: !0,
                value: s,
                onChange: f,
                maxLength: "64",
                onKeyDown: g,
                disabled: d,
                style: d ? {} : {
                    cursor: "not-allowed"
                }
            }), e.jsx(C, {
                size: "small",
                type: "success",
                onClick: c,
                ariaLabel: "Submit",
                children: "Submit"
            })]
        })
    },
    E = i.div.attrs({
        className: "maxWidth flex-center flex-column"
    })`
  line-height: 1;
`,
    T = i.div`
  font-size: 26px;
`,
    S = i.div`
  font-size: 14px;
  margin-top: 11px;
`,
    v = i.input.attrs({
        className: "maxWidth"
    })`
  background: rgba(255, 255, 255, 0.1);
  border: 0px;
  border-radius: 2px;
  padding: 10px;
  font-size: 18px;
  margin-top: 22px;
  margin-bottom: 22px;
`,
    u = {
        y: " 100%",
        opacity: 0
    },
    P = {
        y: "0%",
        opacity: 1
    },
    Yt = t => {
        const s = j(),
            [r, m] = x(!1);
        A(() => {
            M("https://fonts.googleapis.com/css2?family=PT+Mono&display=swap")
        });
        const a = () => {
            s && r && t.close()
        };
        return e.jsxs(D, {
            onClick: a,
            children: [e.jsx(F, {
                initial: u,
                animate: P,
                exit: u,
                transition: {
                    duration: b,
                    ease: "easeOut"
                },
                onClick: n => n.stopPropagation(),
                onAnimationComplete: m,
                children: e.jsx(k, {
                    ...t
                })
            }), e.jsx(w, {
                onClick: t.close
            })]
        })
    },
    D = i.div.attrs({
        className: "maxAll flex-center"
    })``,
    F = i(I.div).attrs({
        className: "medium-shadow scroll-y"
    })`
  max-height: 80%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(3px);
  padding: 45px;
  width: 90%;
  border-radius: 14px;
  max-width: 650px;
  font-family: 'PT Mono', monospace;
  font-weight: ${y.Bold};
`;
export {
    Yt as
    default
};