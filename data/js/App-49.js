import {
    j as o,
    d as p
} from "./_index.js";
import {
    S as s
} from "./SixteenByNineScaler.js";
import {
    o as c,
    a7 as d,
    q as u
} from "./App-41.js";
import {
    P as l
} from "./FixSpinePlugin.js";
import {
    g as x,
    m as a
} from "./motion.js";
import "./index-2.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./index-20.js";
import "./index-5.js";
import "./index-22.js";
import "./index-4.js";
import "./context.js";
import "./index-1.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./MapModeType.js";
import "./GetAssetPath.js";
import "./TutorialConsts.js";
import "./ActionButton.js";
import "./playSound.js";
import "./howler.js";
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
import "./MapStyle.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
const i = {
        out: {
            background: "rgba(0,0,0,0)"
        },
        in: {
            background: "rgba(0,0,0,0.6)"
        }
    },
    r = {
        out: {
            y: "100%",
            opacity: 0
        },
        in: {
            y: 0,
            opacity: 1
        }
    },
    Do = e => {
        const m = x() ? .3 : .2,
            t = () => {
                e.setToHomeScreen()
            };
        return c(l.Input.Keyboard.KeyCodes.ESC, t, [t]), o.jsxs(s, {
            children: [o.jsx(b, {
                onClick: t,
                initial: i.out,
                animate: i.in,
                exit: i.out,
                transition: {
                    duration: m,
                    ease: "easeOut"
                },
                children: o.jsx(f, {
                    onClick: n => n.stopPropagation(),
                    initial: r.out,
                    animate: r.in,
                    exit: r.out,
                    transition: {
                        duration: m,
                        ease: "easeOut"
                    },
                    children: o.jsx(d, {})
                })
            }), o.jsx(u, {
                onClick: t
            })]
        })
    },
    b = p(a.div).attrs({
        className: "maxAll flex-center"
    })`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`,
    f = p(a.div).attrs({
        className: "medium-shadow"
    })`
  background: rgba(48, 28, 86, 0.9);
  width: 90%;
  max-width: 800px;
  height: 80%;
  border-radius: 10px;
  overflow: hidden;
`;
export {
    Do as
    default
};