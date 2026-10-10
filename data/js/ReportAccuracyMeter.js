import {
    o as e
} from "./rolldown-runtime.js";
import {
    Q as t,
    o as n
} from "./utils.js";
import {
    t as r
} from "./react-1.js";
import {
    a as i
} from "./InfoCircleFilled.js";
import {
    a
} from "./useClasses.js";
import {
    t as o
} from "./space.js";
import {
    t as s
} from "./progress.js";
import {
    t as c
} from "./jsx-runtime.js";
import {
    l,
    n as u,
    s as d
} from "./_index.js";
import {
    t as f
} from "./AccessibleAnchor.js";
import {
    n as p,
    r as m
} from "./module-1.js";
import {
    t as h
} from "./polished.esm.js";
import {
    t as g
} from "./getCloudinaryUrl.js";

function _() {}

function v(e, t, n = {}) {
    let r = x(n.polyfill),
        i = p(t);
    return m(() => {
        let t = !1,
            n = e && `current` in e ? e.current : e;
        if (!n) return _;

        function a(e, n) {
            t || i.current(e, n)
        }
        return r.subscribe(n, a), () => {
            t = !0, r.unsubscribe(n, a)
        }
    }, [e, r, i]), r.observer
}

function y(e) {
    let t = !1,
        n = [],
        r = new Map,
        i = new(e || window.ResizeObserver)((e, i) => {
            n = n.concat(e);

            function a() {
                let e = new Set;
                for (let t = 0; t < n.length; t++) {
                    if (e.has(n[t].target)) continue;
                    e.add(n[t].target);
                    let a = r.get(n[t].target);
                    a == null || a.forEach(e => e(n[t], i))
                }
                n = [], t = !1
            }
            t || window.requestAnimationFrame(a), t = !0
        });
    return {
        observer: i,
        subscribe(e, t) {
            i.observe(e);
            let n = r.get(e) ?? [];
            n.push(t), r.set(e, n)
        },
        unsubscribe(e, t) {
            let n = r.get(e) ?? [];
            if (n.length === 1) {
                i.unobserve(e), r.delete(e);
                return
            }
            let a = n.indexOf(t);
            a !== -1 && n.splice(a, 1), r.set(e, n)
        }
    }
}
var b, x = e => b || (b = y(e));
r();
var S = c(),
    C = e => {
        let {
            total: t,
            current: n,
            onPageChange: r
        } = e;
        return (0, S.jsx)(a, {
            simple: !0,
            current: n,
            total: t,
            showSizeChanger: !1,
            onChange: r
        })
    },
    w = e(t()),
    T = e => (0, S.jsx)(E, {
        onClick: e => e == null ? void 0 : e.stopPropagation(),
        to: e.to,
        children: e.children
    }),
    E = l(f)`
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.2em 0.73em;
  font-size: 0.9em;
  border-radius: 50px;
`,
    D = e => {
        let t = (0, w.default)(n(e.dateId)).format(`MMMM Do [at] LT`);
        return (0, S.jsxs)(o, {
            direction: `horizontal`,
            size: 14,
            align: `center`,
            children: [(0, S.jsx)(`div`, {
                children: (0, S.jsx)(O, {
                    src: g(e.kit.gif),
                    style: {
                        width: 55,
                        height: 55
                    }
                })
            }), (0, S.jsxs)(`div`, {
                children: [(0, S.jsx)(k, {
                    children: e.kit.title
                }), (0, S.jsx)(A, {
                    children: t
                }), e.assignmentId ? (0, S.jsx)(`div`, {
                    style: {
                        marginTop: `0.25em`
                    },
                    children: (0, S.jsx)(T, {
                        to: `/assignment/${e.assignmentId}`,
                        children: `Assignment`
                    })
                }) : null]
            })]
        })
    },
    O = l.img`
  border-radius: 5px;
  border: solid ${u.Black} 1px;
  flex-shrink: 0;
  object-fit: cover;
`,
    k = l.div`
  font-size: 1.1em;
  font-weight: ${d.Bold};
`,
    A = l.div`
  font-size: 0.9em;
  font-style: italic;
  margin-top: 0.05em;
`,
    j = e => {
        let t = e.percent < 60 ? `#F44336` : e.percent < 80 ? `#FFC107` : `#66BB6A`;
        return (0, S.jsx)(i, {
            theme: {
                components: {
                    Progress: {
                        colorText: h(.2, t)
                    }
                }
            },
            children: (0, S.jsx)(s, {
                type: `dashboard`,
                percent: e.percent,
                width: 65,
                strokeColor: t,
                status: `normal`
            })
        })
    };
export {
    v as a, C as i, D as n, T as r, j as t
};