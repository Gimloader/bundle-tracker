import {
    n as f,
    r as i,
    u as x,
    a as g,
    j as t,
    T as h,
    e,
    d as j,
    M as C,
    U as k,
    D as y
} from "./_index.js";
import {
    C as b
} from "./Centered.js";
import {
    A as P
} from "./App-41.js";
import {
    C as S
} from "./CircularProgress.js";
import {
    R as v
} from "./WarningOutlined.js";
import "./Button.js";
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
import "./index-5.js";
import "./index-18.js";
import "./context.js";
import "./FontAwesomeIcon.js";
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
import "./SixteenByNineScaler.js";
import "./index-20.js";
import "./index-22.js";
import "./index-1.js";
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
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./capitalize.js";
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
const Ht = () => {
        const {
            id: m
        } = f(), [p, n] = i.useState(""), [l, c, d] = x(!1), [s, o] = i.useState("");
        i.useEffect(() => {
            c(), o(""), g({
                url: "/api/matchmaker/intent/map/play/publish-link/create",
                data: {
                    id: m
                },
                success: r => {
                    n(r)
                },
                error: r => {
                    var a;
                    (a = r == null ? void 0 : r.message) != null && a.text ? o(r.message.text) : o("There was an error. Please try again.")
                },
                both: d
            })
        }, [m]);
        const u = () => {
            if (p) return t.jsx(P, {
                createDetails: {
                    intentId: p
                }
            });
            const r = () => l ? t.jsx(S, {
                style: {
                    color: e.White
                },
                size: 42
            }) : s ? t.jsx(C, {
                open: !0,
                closable: !1,
                footer: null,
                width: 700,
                centered: !0,
                bodyStyle: {
                    padding: 40
                },
                children: t.jsxs("div", {
                    className: "maxAll flex-column flex-center",
                    style: {
                        color: e.Black,
                        textAlign: "center",
                        font: k.SFPro
                    },
                    children: [t.jsx(v, {
                        style: {
                            color: "darkorange",
                            fontSize: 51
                        }
                    }), " ", t.jsx(y, {}), t.jsx("div", {
                        style: {
                            textAlign: "center",
                            fontSize: 23,
                            fontWeight: "bold"
                        },
                        children: s
                    })]
                })
            }) : null;
            return t.jsx(A, {
                children: r()
            })
        };
        return t.jsxs(t.Fragment, {
            children: [t.jsx(h, {
                title: "Gimkit Creative Map"
            }), u()]
        })
    },
    A = j(b)`
  flex: 1;
  padding: 20px;
  background: ${e.BackgroundPurple};
`;
export {
    Ht as
    default
};