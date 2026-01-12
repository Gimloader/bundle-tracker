const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/index-27.js", "assets/_index.js", "assets/index-BdOndhxL.css", "assets/mobxreact.esm.js", "assets/QuizTypes.js", "assets/howler.js", "assets/Codes.js", "assets/fonts.js", "assets/index-5.js", "assets/SixteenByNineScaler.js", "assets/index-2.js", "assets/Button.js", "assets/polished.esm.js", "assets/inheritsLoose.js", "assets/index-20.js", "assets/index-22.js", "assets/index-4.js", "assets/context.js", "assets/index-1.js", "assets/react-flip-move.es.js", "assets/index-6.js", "assets/progress.js", "assets/CheckOutlined.js", "assets/motion.js", "assets/index-18.js", "assets/index-26.js", "assets/___vite-browser-external_commonjs-proxy.js", "assets/confetti.js", "assets/colors.js", "assets/Text.js", "assets/getCloudinaryUrl.js", "assets/LazyLatexRenderer.js", "assets/capitalize.js", "assets/Tooltip.js", "assets/index-10.js", "assets/move.js", "assets/useIntervalWhen.js", "assets/use-force-update.js", "assets/use-motion-value.js", "assets/RocketOutlined.js", "assets/UsergroupAddOutlined.js", "assets/CircularProgress.js", "assets/App-41.js", "assets/FixSpinePlugin.js", "assets/GetAssetPath.js", "assets/MapModeType.js", "assets/MapStyle.js", "assets/playSound.js", "assets/index-21.js", "assets/TutorialConsts.js", "assets/ActionButton.js", "assets/FontAwesomeIcon.js", "assets/Centered.js", "assets/CapitalizeFirstLetter.js", "assets/index-14.js", "assets/EditOutlined.js", "assets/styleChecker.js", "assets/index-3.js", "assets/CopyOutlined.js", "assets/ElementIds.js", "assets/SeasonTicketName.js", "assets/useQuery.js", "assets/util-1.js", "assets/util-2.js", "assets/Shortcut.js", "assets/Names.js", "assets/useWillUnmount.js", "assets/use-transform.js", "assets/AccessibleAnchor.js", "assets/index-17.js", "assets/GimkitLiveQuestion.js", "assets/index-9.js", "assets/index-23.js", "assets/sounds.js", "assets/App-5.js", "assets/AnimatedBackground-2.js", "assets/useDebouncedValue.js", "assets/FillRemainingSpace.js", "assets/index-24.js"]))) => i.map(i => d[i]);
import {
    r as t,
    V as f,
    $ as d,
    a as p,
    j as e,
    T as m,
    p as l,
    d as x
} from "./_index.js";
import {
    E as a
} from "./QuizTypes.js";
import {
    T as _
} from "./TutorialConsts.js";
const E = {
        background: "#673ab7"
    },
    h = t.lazy(() => l(() => import("./index-27.js").then(s => s.i), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]))),
    j = t.lazy(() => l(() => import("./App-41.js").then(s => s.bb), __vite__mapDeps([42, 1, 2, 11, 12, 13, 43, 44, 45, 46, 47, 5, 3, 48, 4, 49, 50, 8, 24, 17, 51, 52, 53, 16, 23, 10, 54, 55, 56, 57, 22, 58, 9, 14, 15, 18, 21, 59, 60, 61, 26, 62, 63, 64, 65, 66, 38, 67, 20, 68, 41, 32, 69, 37, 70, 29, 30, 31, 33, 71, 72, 36, 34, 35, 19, 73, 74, 75, 76, 77, 78]))),
    k = () => {
        const [s, o] = t.useState(!0), [n, i] = t.useState(), r = f("id");
        if (t.useEffect(() => {
                if (!r) {
                    window.location.href = d;
                    return
                }
                if (r === _.mapId) {
                    i(a.map), o(!1);
                    return
                }
                p({
                    url: `/api/matchmaker/intent/fetch-source/${r}`,
                    success: u => {
                        i(u), o(!1)
                    },
                    error: () => {
                        i(a.original), o(!1)
                    }
                })
            }, []), !s && n) {
            if (n === a.original) return e.jsx(t.Suspense, {
                fallback: e.jsx(c, {}),
                children: e.jsx(h, {})
            });
            if (n === a.map) return e.jsx(t.Suspense, {
                fallback: e.jsx(c, {}),
                children: e.jsx(j, {
                    createDetails: {
                        intentId: r
                    }
                })
            })
        }
        return e.jsx(c, {
            children: e.jsx(m, {
                title: "Host"
            })
        })
    },
    c = x.div`
  flex: 1;
  background: ${E.background};
`;
export {
    k as
    default
};