import {
    u as g,
    a as h
} from "./index-1.js";
import {
    j as c,
    d as u,
    b as v,
    aX as x,
    e as p,
    F as j,
    E as k
} from "./_index.js";
import {
    P as z
} from "./useClasses.js";
import {
    A as w
} from "./AccessibleAnchor.js";
import {
    g as C
} from "./getCloudinaryUrl.js";
import {
    S as P
} from "./index-2.js";
import {
    a as R
} from "./polished.esm.js";
import {
    P as y
} from "./progress.js";

function O() {}

function H(e, t, n = {}) {
    const r = F(n.polyfill),
        d = g(t);
    return h(() => {
        let s = !1;
        const l = e && "current" in e ? e.current : e;
        if (!l) return O;

        function o(i, a) {
            s || d.current(i, a)
        }
        return r.subscribe(l, o), () => {
            s = !0, r.unsubscribe(l, o)
        }
    }, [e, r, d]), r.observer
}

function A(e) {
    let t = !1,
        n = [];
    const r = new Map,
        d = new(e || window.ResizeObserver)((s, l) => {
            n = n.concat(s);

            function o() {
                const i = new Set;
                for (let a = 0; a < n.length; a++) {
                    if (i.has(n[a].target)) continue;
                    i.add(n[a].target);
                    const f = r.get(n[a].target);
                    f == null || f.forEach(b => b(n[a], l))
                }
                n = [], t = !1
            }
            t || window.requestAnimationFrame(o), t = !0
        });
    return {
        observer: d,
        subscribe(s, l) {
            var o;
            d.observe(s);
            const i = (o = r.get(s)) !== null && o !== void 0 ? o : [];
            i.push(l), r.set(s, i)
        },
        unsubscribe(s, l) {
            var o;
            const i = (o = r.get(s)) !== null && o !== void 0 ? o : [];
            if (i.length === 1) {
                d.unobserve(s), r.delete(s);
                return
            }
            const a = i.indexOf(l);
            a !== -1 && i.splice(a, 1), r.set(s, i)
        }
    }
}
let m;
const F = e => m || (m = A(e)),
    N = e => {
        const {
            total: t,
            current: n,
            onPageChange: r
        } = e;
        return c.jsx(z, {
            simple: !0,
            current: n,
            total: t,
            showSizeChanger: !1,
            onChange: r
        })
    },
    E = e => c.jsx(I, {
        onClick: t => t == null ? void 0 : t.stopPropagation(),
        to: e.to,
        children: e.children
    }),
    I = u(w)`
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.2em 0.73em;
  font-size: 0.9em;
  border-radius: 50px;
`,
    W = e => {
        const t = v(x(e.dateId)).format("MMMM Do [at] LT");
        return c.jsxs(P, {
            direction: "horizontal",
            size: 14,
            align: "center",
            children: [c.jsx("div", {
                children: c.jsx(M, {
                    src: C(e.kit.gif),
                    style: {
                        width: 55,
                        height: 55
                    }
                })
            }), c.jsxs("div", {
                children: [c.jsx($, {
                    children: e.kit.title
                }), c.jsx(_, {
                    children: t
                }), e.assignmentId ? c.jsx("div", {
                    style: {
                        marginTop: "0.25em"
                    },
                    children: c.jsx(E, {
                        to: `/assignment/${e.assignmentId}`,
                        children: "Assignment"
                    })
                }) : null]
            })]
        })
    },
    M = u.img`
  border-radius: 5px;
  border: solid ${p.Black} 1px;
  flex-shrink: 0;
  object-fit: cover;
`,
    $ = u.div`
  font-size: 1.1em;
  font-weight: ${j.Bold};
`,
    _ = u.div`
  font-size: 0.9em;
  font-style: italic;
  margin-top: 0.05em;
`,
    X = e => {
        const t = e.percent < 60 ? "#F44336" : e.percent < 80 ? "#FFC107" : "#66BB6A";
        return c.jsx(k, {
            theme: {
                components: {
                    Progress: {
                        colorText: R(.2, t)
                    }
                }
            },
            children: c.jsx(y, {
                type: "dashboard",
                percent: e.percent,
                width: 65,
                strokeColor: t,
                status: "normal"
            })
        })
    };
export {
    N as R, W as a, X as b, E as c, H as u
};