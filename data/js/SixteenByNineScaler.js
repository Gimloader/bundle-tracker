import {
    r as o,
    I as m,
    _ as g,
    j as t,
    S as x,
    F as w,
    d as a,
    aa as v
} from "./_index.js";
import {
    c as p
} from "./index-2.js";
import {
    C as l,
    M as C
} from "./Button.js";
import {
    P as y
} from "./index-20.js";
import {
    Q as j
} from "./index-22.js";
import {
    s as z
} from "./index-4.js";
import {
    b as L
} from "./index-1.js";
var S = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"
                }
            }]
        },
        name: "redo",
        theme: "outlined"
    },
    b = function(n, i) {
        return o.createElement(m, g({}, n, {
            ref: i,
            icon: S
        }))
    },
    V = o.forwardRef(b),
    W = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 00-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0021.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0021.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 00-21.7-5.9L746 287.8a15.99 15.99 0 00-5.8 21.8L760 344z"
                }
            }]
        },
        name: "sound",
        theme: "outlined"
    },
    k = function(n, i) {
        return o.createElement(m, g({}, n, {
            ref: i,
            icon: W
        }))
    },
    U = o.forwardRef(k),
    H = typeof window > "u" ? o.useEffect : o.useLayoutEffect,
    R = {
        innerHeight: null,
        innerWidth: null,
        outerHeight: null,
        outerWidth: null
    };

function f() {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth
    }
}

function q() {
    var e = o.useState(function() {
            return typeof window > "u" ? R : f()
        }),
        n = e[0],
        i = e[1];

    function s() {
        i(f())
    }
    return H(function() {
        return typeof window > "u" ? function() {} : (window.addEventListener("resize", s), function() {
            window.removeEventListener("resize", s)
        })
    }, []), n
}
const E = e => {
        const n = i => {
            i.stopPropagation(), e.onClick && e.onClick(i)
        };
        return t.jsx("div", {
            style: {
                ...e.style || {},
                pointerEvents: e.disable ? "none" : "all"
            },
            className: e.className,
            onMouseDown: n,
            onTouchStart: n,
            children: e.children
        })
    },
    $ = e => e.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0],
    A = e => {
        const {
            gameCode: n
        } = e, i = () => !window || !window.location ? "" : $(window.location.hostname) + "/join", s = () => `${v()}/join?gc=${n}`, r = () => {
            p(s()), z.success("Game link copied")
        };
        return t.jsxs(M, {
            style: {
                background: e.background ?? "rgba(48, 28, 86, 0.9)",
                color: e.color ?? l.White,
                height: e.height ?? "auto"
            },
            children: [t.jsxs(N, {
                children: ["Go to ", t.jsx("b", {
                    children: i()
                }), " and enter code"]
            }), e.gameCode ? t.jsx(y, {
                styles: {
                    body: {
                        padding: 20
                    }
                },
                content: t.jsxs("div", {
                    children: [t.jsx(j, {
                        value: s(),
                        size: 350,
                        bordered: !1,
                        bgColor: l.White,
                        color: l.Black,
                        style: {
                            padding: 12,
                            borderRadius: 8
                        }
                    }), t.jsx(C, {
                        block: !0,
                        onClick: r,
                        customFontWeight: w.Bold,
                        type: "success",
                        style: {
                            marginTop: 11
                        },
                        ariaLabel: "Copy Join Link",
                        children: "Copy Join Link"
                    })]
                }),
                children: t.jsx(B, {
                    onClick: r,
                    children: n
                })
            }) : t.jsx("div", {
                className: "flex-center",
                style: {
                    height: 106,
                    marginTop: 13
                },
                children: t.jsx(x, {
                    size: "large"
                })
            })]
        })
    },
    M = a(E).attrs({
        className: "medium-shadow flex-column flex-center maxWidth"
    })`
  line-height: 1;
  padding: 25px 40px;
`,
    N = a.div`
  font-size: 32px;
`,
    B = a.div`
  font-size: 106px;
  margin-top: 13px;
  font-weight: ${w.UltraBold};
  cursor: pointer;
`,
    u = 450,
    h = 800,
    K = e => {
        const n = o.useRef(null),
            [i, s] = L(n),
            r = Math.min(i / h, s / u);
        let c = u * r;
        isNaN(c) && (c = 0);
        let d = h * r;
        return isNaN(d) && (d = 0), t.jsx(I, {
            ref: n,
            children: t.jsx(T, {
                style: {
                    height: c,
                    width: d
                },
                children: t.jsx(D, {
                    style: {
                        transform: `scale(${r})`
                    },
                    children: e.children
                })
            })
        })
    },
    I = a.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,
    T = a.div``,
    D = a.div`
  height: ${u}px;
  width: ${h}px;
  transform-origin: top left;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export {
    A as G, V as R, E as S, K as a, U as b, q as u
};