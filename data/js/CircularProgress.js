import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    c as n,
    s as r
} from "./assertThisInitialized.js";
import {
    nt as i,
    tt as a
} from "./Compact.js";
import {
    a as o,
    i as s,
    n as c,
    o as l,
    r as u,
    t as d
} from "./clsx.m.js";
n(), i();
var f = e(t());
c(), o(), s();
var p = 44,
    m = function(e) {
        return {
            root: {
                display: `inline-block`
            },
            static: {
                transition: e.transitions.create(`transform`)
            },
            indeterminate: {
                animation: `$circular-rotate 1.4s linear infinite`
            },
            determinate: {
                transition: e.transitions.create(`transform`)
            },
            colorPrimary: {
                color: e.palette.primary.main
            },
            colorSecondary: {
                color: e.palette.secondary.main
            },
            svg: {
                display: `block`
            },
            circle: {
                stroke: `currentColor`
            },
            circleStatic: {
                transition: e.transitions.create(`stroke-dashoffset`)
            },
            circleIndeterminate: {
                animation: `$circular-dash 1.4s ease-in-out infinite`,
                strokeDasharray: `80px, 200px`,
                strokeDashoffset: `0px`
            },
            circleDeterminate: {
                transition: e.transitions.create(`stroke-dashoffset`)
            },
            "@keyframes circular-rotate": {
                "0%": {
                    transformOrigin: `50% 50%`
                },
                "100%": {
                    transform: `rotate(360deg)`
                }
            },
            "@keyframes circular-dash": {
                "0%": {
                    strokeDasharray: `1px, 200px`,
                    strokeDashoffset: `0px`
                },
                "50%": {
                    strokeDasharray: `100px, 200px`,
                    strokeDashoffset: `-15px`
                },
                "100%": {
                    strokeDasharray: `100px, 200px`,
                    strokeDashoffset: `-125px`
                }
            },
            circleDisableShrink: {
                animation: `none`
            }
        }
    },
    h = f.forwardRef(function(e, t) {
        var n = e.classes,
            i = e.className,
            o = e.color,
            s = o === void 0 ? `primary` : o,
            c = e.disableShrink,
            l = c !== void 0 && c,
            m = e.size,
            h = m === void 0 ? 40 : m,
            g = e.style,
            _ = e.thickness,
            v = _ === void 0 ? 3.6 : _,
            y = e.value,
            b = y === void 0 ? 0 : y,
            x = e.variant,
            S = x === void 0 ? `indeterminate` : x,
            C = a(e, [`classes`, `className`, `color`, `disableShrink`, `size`, `style`, `thickness`, `value`, `variant`]),
            w = {},
            T = {},
            E = {};
        if (S === `determinate` || S === `static`) {
            var D = 2 * Math.PI * ((p - v) / 2);
            w.strokeDasharray = D.toFixed(3), E[`aria-valuenow`] = Math.round(b), w.strokeDashoffset = `${((100-b)/100*D).toFixed(3)}px`, T.transform = `rotate(-90deg)`
        }
        return f.createElement(`div`, r({
            className: d(n.root, i, s !== `inherit` && n[`color${u(s)}`], {
                determinate: n.determinate,
                indeterminate: n.indeterminate,
                static: n.static
            } [S]),
            style: r({
                width: h,
                height: h
            }, T, g),
            ref: t,
            role: `progressbar`
        }, E, C), f.createElement(`svg`, {
            className: n.svg,
            viewBox: `${p/2} ${p/2} ${p} ${p}`
        }, f.createElement(`circle`, {
            className: d(n.circle, l && n.circleDisableShrink, {
                determinate: n.circleDeterminate,
                indeterminate: n.circleIndeterminate,
                static: n.circleStatic
            } [S]),
            style: w,
            cx: p,
            cy: p,
            r: (p - v) / 2,
            fill: `none`,
            strokeWidth: v
        })))
    }),
    g = l(m, {
        name: `MuiCircularProgress`,
        flip: !1
    })(h);
export {
    g as t
};