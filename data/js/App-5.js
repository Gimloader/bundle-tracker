import {
    G as p,
    H as x,
    r as n,
    e as g,
    j as r,
    d as l
} from "./_index.js";
import {
    a,
    S as f
} from "./Shortcut.js";
import {
    A as v
} from "./AccessibleAnchor.js";
import {
    S as j
} from "./index-2.js";
const S = e => {
        const {
            theme: t,
            option: i
        } = e, {
            pathname: c
        } = p(), {
            label: d,
            icon: s,
            path: h,
            otherMatchingPaths: u
        } = i, b = !!(h && (x({
            path: h
        }, c) || u != null && u.length && u.some(C => x({
            path: C
        }, c)))), o = n.useMemo(() => b ? !0 : e.selected, [b, e.selected]), m = n.useMemo(() => o ? g.BackgroundPurple : "transparent", [t, o]), $ = n.useMemo(() => o ? g.White : e.customColor ? e.customColor : t === a.light ? "rgb(26, 27, 37)" : g.White, [t, o, e.customColor]), k = n.useMemo(() => o ? m : t === a.light ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.1)", [t, o, m]);
        return r.jsx(v, {
            to: h,
            target: e.option.target,
            onClick: i.onSelect,
            style: {
                cursor: "pointer"
            },
            children: r.jsxs(M, {
                $background: m,
                $color: $,
                $hoverBackground: k,
                children: [s ? r.jsx("span", {
                    style: {
                        marginRight: 6,
                        fontSize: "0.9em"
                    },
                    children: s
                }) : null, d]
            })
        })
    },
    M = l.div.attrs({
        className: "flex-center"
    })`
  line-height: 1;
  padding: 6px 12px;
  border-radius: 50px;
  background: ${e=>e.$background};
  white-space: nowrap;
  color: ${e=>e.$color};
  font-size: 15px;
  cursor: pointer;
  transition: background 0.14s ease-in-out;
  &:hover {
    background: ${e=>e.$hoverBackground};
  }
`,
    N = e => r.jsx(w, {
        children: r.jsx(j, {
            direction: "horizontal",
            size: 8,
            wrap: !0,
            children: e.options.map(t => r.jsx(S, {
                option: t,
                selected: e.selectedOption === t.id,
                theme: e.theme
            }, `option-${t.id}`))
        })
    }),
    w = l.div.attrs({
        className: "scroll-x"
    })`
  flex: 1;
`,
    O = e => {
        const t = n.useMemo(() => e.theme ?? a.light, [e.theme]),
            i = n.useMemo(() => e.alpha ?? f.standard, [e.alpha]),
            c = n.useMemo(() => {
                const s = i === f.none ? 1 : t === a.light ? .85 : .45;
                return t === a.light ? `rgba(255, 255, 255, ${s})` : `rgba(16, 16, 16, ${s})`
            }, [t, i]),
            d = n.useMemo(() => t === a.light ? "rgb(235, 238, 241)" : "rgb(143 143 143 / 60%)", [t]);
        return r.jsxs(z, {
            $background: c,
            $borderColor: d,
            children: [r.jsxs(A, {
                children: [r.jsx(N, {
                    options: e.options,
                    selectedOption: e.selectedOption,
                    theme: t
                }), r.jsx("div", {
                    children: e.rightSideContent
                })]
            }), e.bottomContent]
        })
    },
    z = l.div.attrs({
        className: "maxWidth"
    })`
  background: ${e=>e.$background};
  padding: 7px 25px;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px ${e=>e.$borderColor};
`,
    A = l.div.attrs({
        className: "maxWidth flex vc between"
    })``;
export {
    O as S
};