import {
    o as e,
    r as t
} from "./rolldown-runtime.js";
import {
    t as n
} from "./react-1.js";
import {
    c as r,
    s as i
} from "./assertThisInitialized.js";
import {
    r as a
} from "./compact-item.js";
import {
    t as o
} from "./tooltip-1.js";
import {
    t as s
} from "./message.js";
import {
    t as c
} from "./button-1.js";
import {
    t as l
} from "./space.js";
import {
    t as u
} from "./typography.js";
import {
    t as d
} from "./progress.js";
import {
    o as f
} from "./SixteenByNineScaler.js";
import {
    t as p
} from "./jsx-runtime.js";
import {
    t as m
} from "./noop.js";
import {
    c as h,
    l as g
} from "./_index.js";
import {
    r as _
} from "./mobxreact.esm.js";
import {
    t as v
} from "./FontAwesomeIcon.js";
import {
    i as y,
    n as b,
    t as x
} from "./Centered.js";
import {
    n as S
} from "./Button-2.js";
import {
    t as C
} from "./useStore.js";
import {
    n as w,
    r as T,
    t as E
} from "./DrawToCanvas.js";
import {
    t as D
} from "./CapitalizeFirstLetter.js";
var O = e(n());
r();
var k = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z`
                }
            }]
        },
        name: `undo`,
        theme: `outlined`
    },
    A = O.forwardRef(function(e, t) {
        return O.createElement(a, i({}, e, {
            ref: t,
            icon: k
        }))
    });

function j(e, t) {
    t === void 0 && (t = 300);
    var n = (0, O.useState)(!0),
        r = n[0],
        i = n[1],
        a = (0, O.useRef)(void 0),
        o = (0, O.useCallback)(function() {
            var t = [...arguments];
            r && (i(!1), e.apply(void 0, t))
        }, [r, e]);
    return (0, O.useEffect)(function() {
        return r ? m : (a.current = window.setTimeout(function() {
            i(!0)
        }, t), function() {
            return window.clearTimeout(a.current)
        })
    }, [r, t]), [o, r]
}
var M = e => !(JSON.stringify(e).length > T.maxDataSize + T.emptyDataSize),
    ee = e => ({
        usedMemory: JSON.stringify(e.data).length - T.emptyDataSize,
        availableMemory: T.maxDataSize - T.emptyDataSize
    }),
    N = () => ({
        shapes: {
            paths: [],
            circles: [],
            rects: [],
            lines: []
        }
    }),
    P = `memory`,
    F = p(),
    I = `#b52100`,
    L = _(() => {
        let {
            memorySystem: e,
            editing: {
                showMemoryBarAtAllTimes: t
            }
        } = C(), n = Math.floor(e.usedMemoryCost / e.maxUsedMemory * 100);
        return n < 75 && !t ? null : (0, F.jsx)(R, {
            children: (0, F.jsxs)(z, {
                children: [(0, F.jsx)(B, {
                    style: {
                        width: `${Math.min(100,n)}%`
                    }
                }), (0, F.jsx)(V, {
                    children: (0, F.jsxs)(H, {
                        children: [D(P), ` Usage: `, n, `%`]
                    })
                })]
            })
        })
    }),
    R = g(x).attrs({
        className: `maxWidth`
    })`
  margin-top: 10px;
`,
    z = g.div.attrs({
        className: `light-shadow`
    })`
  width: 90%;
  max-width: 320px;
  height: 34px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.9);
`,
    B = g.div.attrs({
        className: `maxHeight`
    })`
  background: ${I};
`,
    V = g(y).attrs({
        className: `maxAll`
    })`
  position: absolute;
  top: 0px;
  left: 0px;
`,
    H = g.div`
  padding-left: 10px;
  font-size: 12px;
  text-transform: uppercase;
  font-family: ${h.FugazOne};
  line-height: 1;
  margin-top: 2px;
`,
    U = t({
        default: () => W
    }),
    W = () => {
        let {
            me: {
                customAssets: e
            }
        } = C(), [t, n] = O.useState(w.path), [r, i] = O.useState(!1), [a, p] = O.useState([]), [m, h] = O.useState(null), [g, _] = O.useState(null), [y, b] = s.useMessage(), [x, D] = O.useState({
            usedMemory: 0,
            availableMemory: 0
        }), [k, L] = O.useState(N()), [R, z] = O.useState([]), [B, V] = O.useState(-1), H = O.useRef(null), U = O.useRef(null), [W, K] = O.useState(null);
        O.useEffect(() => {
            W !== e.currentId && (K(e.currentId), L((e == null ? void 0 : e.currentData) || N()))
        }, [e == null ? void 0 : e.currentId, e == null ? void 0 : e.currentData]), O.useEffect(() => {
            let e = H.current,
                t = T.editor.supportRetina ? 2 : 1,
                n = T.editor.baseSize * t;
            e.width = n, e.height = n;
            let r = e.getContext(`2d`);
            r.lineCap = `round`, r.lineJoin = `round`, r.scale(t, t), U.current = r, Y(), q()
        }, []), O.useEffect(() => {
            Y(), q()
        }, [k, a, m, g]);
        let q = () => {
                let e = ee({
                    data: k
                });
                e && D({
                    usedMemory: e.usedMemory || 0,
                    availableMemory: e.availableMemory || 0
                })
            },
            J = () => {
                K(e.currentId), e.currentData = k
            };
        O.useEffect(() => {
            J()
        }, [k]);
        let Y = () => {
                let e = U.current;
                if (!e) return;
                e.clearRect(0, 0, e.canvas.width, e.canvas.height);
                let n = r && m && g ? {
                    type: t,
                    path: a,
                    start: m,
                    current: g
                } : null;
                E({
                    ctx: e,
                    shapes: k.shapes,
                    fillColor: T.editor.fillColor,
                    borderColor: T.editor.borderColor,
                    borderWidth: T.editor.borderWidth,
                    scale: 1,
                    currentShape: n
                })
            },
            X = e => {
                let t = H.current,
                    n = t.getBoundingClientRect(),
                    r = t.width / n.width,
                    i = t.height / n.height;
                return {
                    x: (e.clientX - n.left) * (r / 2),
                    y: (e.clientY - n.top) * (i / 2)
                }
            },
            Z = e => {
                let t = [...R.slice(0, B + 1), e].slice(-T.editor.maxHistory);
                z(t), V(Math.min(B + 1, T.editor.maxHistory - 1))
            },
            ae = e => {
                let n = X(e);
                i(!0), h(n), _({
                    x: n.x,
                    y: n.y
                }), t === w.path && p([n.x, n.y, n.x, n.y])
            },
            [oe] = j(e => {
                if (!r) return;
                let n = X(e);
                _(n), t === `path` && p([...a, n.x, n.y])
            }, 1e3 / 60),
            Q = e => {
                if (!r) return;
                let n = X(e),
                    o;
                switch (t) {
                    case w.path:
                        o = a;
                        break;
                    case w.circle: {
                        let e = n.x - m.x,
                            t = n.y - m.y,
                            r = Math.round(Math.sqrt(e * e + t * t));
                        o = [m.x, m.y, r];
                        break
                    }
                    case w.rect:
                        o = [Math.min(m.x, n.x), Math.min(m.y, n.y), Math.abs(n.x - m.x), Math.abs(n.y - m.y)];
                        break;
                    case w.line:
                        o = [m.x, m.y, n.x, n.y]
                }
                let s = `${t}s`,
                    c = {
                        shapes: {
                            ...k.shapes,
                            [s]: [...k.shapes[s], o]
                        }
                    };
                M(c) ? (Z({
                    type: `addShape`,
                    shapeType: t,
                    data: o
                }), L(c), J()) : y.error({
                    content: `Not enough ${P} to add to this shape`,
                    duration: 3,
                    style: {
                        top: `25vh`
                    }
                }), i(!1), h(null), _(null), p([])
            },
            se = () => {
                if (B >= 0) {
                    let e = R[B];
                    L(t => {
                        let n = {
                            ...t
                        };
                        switch (e.type) {
                            case `addShape`:
                                switch (e.shapeType) {
                                    case w.path:
                                        n.shapes.paths = n.shapes.paths.slice(0, -1);
                                        break;
                                    case w.circle:
                                        n.shapes.circles = n.shapes.circles.slice(0, -1);
                                        break;
                                    case w.rect:
                                        n.shapes.rects = n.shapes.rects.slice(0, -1);
                                        break;
                                    case w.line:
                                        n.shapes.lines = n.shapes.lines.slice(0, -1)
                                }
                                break;
                            case `clearAll`:
                                return e.data
                        }
                        return n
                    }), V(B - 1), J()
                }
            },
            ce = () => {
                if (B < R.length - 1) {
                    let e = R[B + 1];
                    L(t => {
                        let n = {
                            ...t
                        };
                        switch (e.type) {
                            case `addShape`:
                                switch (e.shapeType) {
                                    case w.path:
                                        n.shapes.paths = [...n.shapes.paths, e.data];
                                        break;
                                    case w.circle:
                                        n.shapes.circles = [...n.shapes.circles, e.data];
                                        break;
                                    case w.rect:
                                        n.shapes.rects = [...n.shapes.rects, e.data];
                                        break;
                                    case w.line:
                                        n.shapes.lines = [...n.shapes.lines, e.data]
                                }
                                break;
                            case `clearAll`:
                                return N()
                        }
                        return n
                    }), V(B + 1), J()
                }
            },
            le = () => {
                let e = {
                    ...k
                };
                Z({
                    type: `clearAll`,
                    data: e
                }), L(N()), J()
            },
            $ = e => t === e;
        return (0, F.jsxs)(te, {
            children: [b, (0, F.jsxs)(l, {
                className: `maxWidth`,
                size: 20,
                children: [(0, F.jsx)(ne, {
                    children: (0, F.jsx)(re, {
                        ref: H,
                        onMouseDown: ae,
                        onMouseMove: oe,
                        onMouseUp: Q,
                        onMouseLeave: Q
                    })
                }), (0, F.jsxs)(l, {
                    className: `maxWidth`,
                    direction: `vertical`,
                    size: 25,
                    children: [(0, F.jsxs)(G, {
                        children: [(0, F.jsx)(u.Title, {
                            level: 5,
                            children: `Tools`
                        }), (0, F.jsxs)(l.Compact, {
                            direction: `vertical`,
                            className: `maxWidth`,
                            children: [(0, F.jsx)(c, {
                                size: `large`,
                                block: !0,
                                icon: (0, F.jsx)(v, {
                                    name: `far fa-pencil`,
                                    style: {
                                        marginRight: 5
                                    }
                                }),
                                type: $(w.path) ? `primary` : `default`,
                                onClick: () => n(w.path),
                                children: `Draw`
                            }), (0, F.jsxs)(l.Compact, {
                                children: [(0, F.jsx)(o, {
                                    title: `Line`,
                                    children: (0, F.jsx)(c, {
                                        size: `large`,
                                        style: {
                                            flex: 1
                                        },
                                        icon: (0, F.jsx)(v, {
                                            name: `far fa-ruler-horizontal`
                                        }),
                                        type: $(w.line) ? `primary` : `default`,
                                        onClick: () => n(w.line)
                                    })
                                }), (0, F.jsx)(o, {
                                    title: `Circle`,
                                    children: (0, F.jsx)(c, {
                                        size: `large`,
                                        style: {
                                            flex: 1
                                        },
                                        icon: (0, F.jsx)(v, {
                                            name: `far fa-circle`
                                        }),
                                        type: $(w.circle) ? `primary` : `default`,
                                        onClick: () => n(w.circle)
                                    })
                                }), (0, F.jsx)(o, {
                                    title: `Rectangle`,
                                    children: (0, F.jsx)(c, {
                                        size: `large`,
                                        style: {
                                            flex: 1
                                        },
                                        icon: (0, F.jsx)(v, {
                                            name: `far fa-rectangle-portrait`
                                        }),
                                        type: $(w.rect) ? `primary` : `default`,
                                        onClick: () => n(w.rect)
                                    })
                                })]
                            })]
                        })]
                    }), (0, F.jsxs)(G, {
                        children: [(0, F.jsx)(u.Title, {
                            level: 5,
                            children: `Actions`
                        }), (0, F.jsxs)(`div`, {
                            children: [(0, F.jsxs)(l.Compact, {
                                className: `maxWidth`,
                                children: [(0, F.jsx)(c, {
                                    size: `large`,
                                    icon: (0, F.jsx)(A, {}),
                                    disabled: B === -1,
                                    onClick: se,
                                    block: !0,
                                    children: `Undo`
                                }), (0, F.jsx)(c, {
                                    size: `large`,
                                    icon: (0, F.jsx)(f, {}),
                                    disabled: B === R.length - 1,
                                    onClick: ce,
                                    block: !0,
                                    children: `Redo`
                                })]
                            }), (0, F.jsx)(u.Link, {
                                style: {
                                    fontSize: 12,
                                    color: S.Yellow,
                                    textDecoration: `underline`,
                                    fontStyle: `italic`
                                },
                                onClick: le,
                                children: `Clear shape...`
                            })]
                        })]
                    }), (0, F.jsxs)(G, {
                        children: [(0, F.jsxs)(u.Title, {
                            level: 5,
                            children: [`Shape `, P]
                        }), (0, F.jsx)(ie, {
                            children: (0, F.jsx)(d, {
                                percent: Math.floor(x.usedMemory / x.availableMemory * 100),
                                strokeColor: I
                            })
                        })]
                    })]
                })]
            })]
        })
    },
    te = g.div.attrs({
        className: `maxWidth`
    })`
  padding-top: 4px;
`,
    ne = g(b).attrs({
        className: `maxWidth`
    })``,
    re = g.canvas`
  width: 512px;
  height: 512px;
  background-color: ${S.White};
  image-rendering: smooth;
  image-rendering: -webkit-optimize-contrast;
  border-radius: 8px;
`,
    G = g.div.attrs({
        className: `maxWidth`
    })``,
    ie = g.div`
  .ant-progress-bg {
    height: 14px !important;
  }
`;
export {
    N as a, P as i, U as n, L as r, W as t
};