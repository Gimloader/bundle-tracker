const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/App-76.js", "assets/_index.js", "assets/index-BdOndhxL.css", "assets/ItemNameWithAmount.js", "assets/FixSpinePlugin.js", "assets/GetAssetPath.js", "assets/MapModeType.js", "assets/MapStyle.js", "assets/playSound.js", "assets/howler.js", "assets/CapitalizeFirstLetter.js", "assets/App-41.js", "assets/Button.js", "assets/polished.esm.js", "assets/inheritsLoose.js", "assets/mobxreact.esm.js", "assets/index-21.js", "assets/QuizTypes.js", "assets/TutorialConsts.js", "assets/ActionButton.js", "assets/index-5.js", "assets/index-18.js", "assets/context.js", "assets/FontAwesomeIcon.js", "assets/Centered.js", "assets/index-4.js", "assets/motion.js", "assets/index-2.js", "assets/index-14.js", "assets/EditOutlined.js", "assets/styleChecker.js", "assets/index-3.js", "assets/CheckOutlined.js", "assets/CopyOutlined.js", "assets/SixteenByNineScaler.js", "assets/index-20.js", "assets/index-22.js", "assets/index-1.js", "assets/progress.js", "assets/ElementIds.js", "assets/SeasonTicketName.js", "assets/useQuery.js", "assets/___vite-browser-external_commonjs-proxy.js", "assets/util-1.js", "assets/util-2.js", "assets/Shortcut.js", "assets/Names.js", "assets/useWillUnmount.js", "assets/use-motion-value.js", "assets/use-transform.js", "assets/index-6.js", "assets/AccessibleAnchor.js", "assets/CircularProgress.js", "assets/capitalize.js", "assets/index-17.js", "assets/use-force-update.js", "assets/GimkitLiveQuestion.js", "assets/Text.js", "assets/getCloudinaryUrl.js", "assets/LazyLatexRenderer.js", "assets/Tooltip.js", "assets/index-9.js", "assets/index-23.js", "assets/useIntervalWhen.js", "assets/index-10.js", "assets/move.js", "assets/react-flip-move.es.js", "assets/sounds.js", "assets/App-5.js", "assets/AnimatedBackground-2.js", "assets/useDebouncedValue.js", "assets/FillRemainingSpace.js", "assets/index-24.js", "assets/confetti.js"]))) => i.map(i => d[i]);
import {
    j as i,
    r as m,
    d as o,
    p
} from "./_index.js";
import {
    ae as s,
    o as n,
    af as l
} from "./App-41.js";
import {
    S as c
} from "./SixteenByNineScaler.js";
import {
    m as e
} from "./motion.js";
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
const d = m.lazy(() => p(() => import("./App-76.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73]))),
    r = .3,
    x = t => (n(Phaser.Input.Keyboard.KeyCodes.ESC, t.close, []), i.jsx(u, {
        children: i.jsx(f, {
            initial: {
                background: "rgba(0,0,0,0)"
            },
            animate: {
                background: "rgba(0,0,0,0.4)"
            },
            exit: {
                background: "rgba(0,0,0,0)"
            },
            transition: {
                duration: r
            },
            onClick: t.close,
            children: i.jsx(C, {
                initial: {
                    x: "125%"
                },
                animate: {
                    x: "0%"
                },
                exit: {
                    x: "125%"
                },
                transition: {
                    duration: r,
                    ease: "easeOut"
                },
                onClick: a => a.stopPropagation(),
                children: i.jsx(m.Suspense, {
                    fallback: i.jsx("div", {}),
                    children: i.jsx(d, {
                        status: t.status,
                        style: t.style,
                        tableGroup: t.tableGroup,
                        craft: t.craft,
                        collect: t.collect,
                        item: t.item,
                        itemAmount: t.itemAmount,
                        craftingDurationMs: t.craftingDurationMs,
                        itemFinishesCraftingAt: t.itemFinishesCraftingAt,
                        itemDisposalMs: t.itemDisposalMs,
                        itemDisposedAt: t.itemDisposedAt,
                        itemCrafterCharacterId: t.itemCrafterCharacterId,
                        useCrafterCollectionAdvantage: t.useCrafterCollectionAdvantage,
                        close: t.close
                    })
                })
            })
        })
    })),
    Ot = s(x),
    u = o(c).attrs({
        className: "maxAll"
    })`
  overflow: hidden;
  z-index: ${l.primaryContent};
`,
    f = o(e.div).attrs({
        className: "maxAll"
    })`
  position: relative;
`,
    C = o(e.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  max-width: 420px;
  box-shadow: -13px 2px 54px 1px rgba(0, 0, 0, 0.41);
  overflow: hidden;
`;
export {
    Ot as
    default
};