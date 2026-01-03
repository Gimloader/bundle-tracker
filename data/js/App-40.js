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
} from "./index-JueF_e_O.js";
import {
    C as b
} from "./Centered-Cf2wQqVp.js";
import {
    A as P
} from "./App-B0dDw-d0.js";
import {
    C as S
} from "./CircularProgress-Cjtfl07m.js";
import {
    R as v
} from "./WarningOutlined-CrJHAakp.js";
import "./Button-CBuBagqn.js";
import "./polished.esm-BFSwQt3g.js";
import "./inheritsLoose-CU-hyjUj.js";
import "./FixSpinePlugin-E56Jvrv3.js";
import "./GetAssetPath-D1U8ycN4.js";
import "./MapModeType-BXMqp17U.js";
import "./MapStyle-TMfqPjvX.js";
import "./playSound-CvicM7PA.js";
import "./howler-UOSvF1UN.js";
import "./mobxreact.esm-Ws-CV3HT.js";
import "./index-CUTNmZIZ.js";
import "./QuizTypes-SHiKhVER.js";
import "./TutorialConsts-Cbgfa92X.js";
import "./ActionButton-sk7r6RJ5.js";
import "./index-DwJM4HGs.js";
import "./index-C6DGnVdy.js";
import "./context-CjY8B7F1.js";
import "./FontAwesomeIcon-CiZylb_V.js";
import "./CapitalizeFirstLetter-BbjzObVf.js";
import "./index-C3nE64hA.js";
import "./motion-C-xmDj6Z.js";
import "./index-Dx05C7sF.js";
import "./index-D1cRRXef.js";
import "./EditOutlined-B6aDouN2.js";
import "./styleChecker-C-hCCLqu.js";
import "./index-CrBw-JUo.js";
import "./CheckOutlined-BVeheXUJ.js";
import "./CopyOutlined-D8Tnfq0_.js";
import "./SixteenByNineScaler-BZNeH1GC.js";
import "./index-Glo9ShIH.js";
import "./index-CIVQhjGU.js";
import "./index-DWUaWm5X.js";
import "./progress-9Vcji5fP.js";
import "./ElementIds-BgK3Rezn.js";
import "./SeasonTicketName-BN_q1-rH.js";
import "./useQuery-Bxz3ggSG.js";
import "./___vite-browser-external_commonjs-proxy-DeUptP8y.js";
import "./util-D-n1b5ES.js";
import "./util-nmJ0flFl.js";
import "./Shortcut-CMqBR2Ku.js";
import "./Names-DfDh6qGd.js";
import "./useWillUnmount-CP6Tyjal.js";
import "./use-motion-value-nqeTFb0U.js";
import "./use-transform-C2uDmKx-.js";
import "./index-txCQgMuj.js";
import "./AccessibleAnchor-C5KFFiup.js";
import "./index-DL0cV8G6.js";
import "./use-force-update-CUG7AAkp.js";
import "./GimkitLiveQuestion-BILd1qX5.js";
import "./Text-BG42uZ1H.js";
import "./getCloudinaryUrl-Drn97BLG.js";
import "./LazyLatexRenderer-QF7uKX2E.js";
import "./capitalize-DYAFKEJ7.js";
import "./Tooltip-vn9HqO7T.js";
import "./index-B9GXaOh9.js";
import "./index-SU-vsWE_.js";
import "./useIntervalWhen-Cb69gNsp.js";
import "./index-D2z5EOhv.js";
import "./move-BQfrK9lH.js";
import "./react-flip-move.es-DZwKnzDW.js";
import "./sounds-93SWFkZP.js";
import "./App-Cn07I0ls.js";
import "./AnimatedBackground-CStbvNAZ.js";
import "./useDebouncedValue-CPtF_pfw.js";
import "./FillRemainingSpace-Bjf2gprg.js";
import "./index-YKp-XwVu.js";
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