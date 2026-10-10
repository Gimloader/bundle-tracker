import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    t as n
} from "./jsx-runtime.js";
import {
    l as r,
    s as i
} from "./_index.js";
import {
    t as a
} from "./polished.esm.js";
var o = e(t()),
    s = {
        White: `#FFFFFF`,
        Black: `#000000`,
        Yellow: `#FFFF00`,
        Purple: `#673ab7`
    },
    c = n(),
    l = e => {
        let t = e.size || `default`,
            n = o.useMemo(() => e.customColor ? e.customColor : e.disabled ? `#546e7a` : e.type === `success` ? `#2e7d32` : e.type === `danger` ? `#c62828` : `#3f51b5`, [e.disabled, e.type, e.customColor]),
            r = o.useMemo(() => a(.1, n), [n]),
            s = o.useMemo(() => t === `small` || t === "default" ? 14 : 20, [t]),
            l = o.useMemo(() => t === `small` ? 6 : t === "default" ? 8 : 12, [t]),
            d = o.useMemo(() => {
                let n = t === `small` ? `8px` : `12px`;
                return e.customHorizontalPadding ? `${n} ${e.customHorizontalPadding}px` : t === `small` ? `${n} 24px` : t === "default" ? `${n} 28px` : `${n} 42px`
            }, [t, e.customHorizontalPadding]),
            f = o.useMemo(() => t === `small` ? 41 : 49, [t]),
            p = o.useMemo(() => e.customFontWeight ? e.customFontWeight : t === `large` ? i.Bold : i.Normal, [e.customFontWeight, t]),
            m = () => {
                e.disabled || e.onClick && e.onClick()
            };
        return (0, c.jsx)(u, {
            style: Object.assign({
                pointerEvents: `all`,
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: f
            }, e.style || {}),
            children: (0, c.jsxs)(`button`, {
                className: `btn-pushable`,
                "aria-label": e.ariaLabel,
                onClick: e.usePointerDownEvent ? void 0 : m,
                onPointerDown: e.usePointerDownEvent ? m : void 0,
                style: {
                    cursor: e.disabled ? `not-allowed` : `pointer`,
                    width: e.block ? `100%` : `auto`
                },
                children: [(0, c.jsx)(`span`, {
                    className: `btn-shadow`,
                    style: {
                        borderRadius: l
                    }
                }), (0, c.jsx)(`span`, {
                    className: `btn-edge`,
                    style: {
                        background: r,
                        borderRadius: l
                    }
                }), (0, c.jsx)(`span`, {
                    className: `btn-front`,
                    style: {
                        background: n,
                        fontSize: s,
                        borderRadius: l,
                        padding: d,
                        fontWeight: p
                    },
                    children: e.children
                })]
            })
        })
    },
    u = r.div.attrs({
        className: `flex`
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
    color: ${s.White};
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
    s as n, l as t
};