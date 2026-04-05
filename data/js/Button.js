import {
    r as n,
    F as l,
    j as r,
    d as f
} from "./_index.js";
import {
    a as h
} from "./polished.esm.js";
const g = {
        White: "#FFFFFF",
        Black: "#000000",
        Yellow: "#FFFF00",
        Purple: "#673ab7"
    },
    v = t => {
        const e = t.size || "default",
            s = n.useMemo(() => t.customColor ? t.customColor : t.disabled ? "#546e7a" : t.type === "success" ? "#2e7d32" : t.type === "danger" ? "#c62828" : "#3f51b5", [t.disabled, t.type, t.customColor]),
            u = n.useMemo(() => h(.1, s), [s]),
            c = n.useMemo(() => e === "small" || e === "default" ? 14 : 20, [e]),
            o = n.useMemo(() => e === "small" ? 6 : e === "default" ? 8 : 12, [e]),
            d = n.useMemo(() => {
                const a = e === "small" ? "8px" : "12px";
                return t.customHorizontalPadding ? `${a} ${t.customHorizontalPadding}px` : e === "small" ? `${a} 24px` : e === "default" ? `${a} 28px` : `${a} 42px`
            }, [e, t.customHorizontalPadding]),
            b = n.useMemo(() => e === "small" ? 41 : 49, [e]),
            m = n.useMemo(() => t.customFontWeight ? t.customFontWeight : e === "large" ? l.Bold : l.Normal, [t.customFontWeight, e]),
            i = () => {
                t.disabled || t.onClick && t.onClick()
            };
        return r.jsx(x, {
            style: Object.assign({
                pointerEvents: "all",
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: b
            }, t.style || {}),
            children: r.jsxs("button", {
                className: "btn-pushable",
                "aria-label": t.ariaLabel,
                onClick: t.usePointerDownEvent ? void 0 : i,
                onPointerDown: t.usePointerDownEvent ? i : void 0,
                style: {
                    cursor: t.disabled ? "not-allowed" : "pointer",
                    width: t.block ? "100%" : "auto"
                },
                children: [r.jsx("span", {
                    className: "btn-shadow",
                    style: {
                        borderRadius: o
                    }
                }), r.jsx("span", {
                    className: "btn-edge",
                    style: {
                        background: u,
                        borderRadius: o
                    }
                }), r.jsx("span", {
                    className: "btn-front",
                    style: {
                        background: s,
                        fontSize: c,
                        borderRadius: o,
                        padding: d,
                        fontWeight: m
                    },
                    children: t.children
                })]
            })
        })
    },
    x = f.div.attrs({
        className: "flex"
    })`
  align-items: flex-end;

  .btn-pushable {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    outline: none;
    transition: filter 250ms;
  }
  .btn-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }
  .btn-edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background 0.25s;
  }
  .btn-front {
    display: block;
    position: relative;
    color: ${g.White};
    will-change: transform;
    transform: translateY(-4px);
    transition: background 0.25s, transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    user-select: none;
  }
  .btn-pushable:hover {
    filter: brightness(110%);
  }
  .btn-pushable:hover .btn-front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  .btn-pushable:active .btn-front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  .btn-pushable:hover .btn-shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  .btn-pushable:active .btn-shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }
`;
export {
    g as C, v as M
};