import {
    b8 as tn,
    aJ as vt,
    aD as W,
    aH as Et,
    aS as fo,
    aK as Ee,
    aF as vo,
    aB as mt,
    b9 as br,
    r as i,
    I as ut,
    _ as fe,
    x as U,
    az as Se,
    aC as Ze,
    am as Q,
    aA as D,
    aG as Pn,
    aI as on,
    ai as qn,
    aj as Xn,
    aL as pn,
    ak as j,
    ba as Tn,
    aM as la,
    bb as ia,
    bc as Un,
    aO as sa,
    aP as mo,
    bd as ca,
    be as da,
    bf as $t,
    bg as ua,
    bh as Nt,
    bi as an,
    bj as xr,
    bk as po,
    bl as Gn,
    bm as Yn,
    bn as fa,
    bo as Cr,
    bp as va,
    bq as Jn,
    br as Sr,
    bs as wr,
    bt as Qn,
    aE as ma,
    bu as pa,
    bv as ga,
    bw as ha,
    bx as be,
    by as ya,
    bz as ba,
    bA as xa,
    aQ as Er,
    al as gn,
    aR as Ca,
    B as $r,
    bB as go,
    bC as Sa,
    bD as wa,
    bE as Ea,
    bF as Zt,
    bG as $a,
    bH as Na,
    S as Ra,
    b6 as ka,
    y as Ia
} from "./_index.js";
import {
    i as Ka
} from "./styleChecker.js";
import {
    S as Oa,
    L as ho,
    E as Nr,
    D as Pa
} from "./index-8.js";
import {
    R as Ta
} from "./DownOutlined.js";
import {
    C as vn,
    g as Da
} from "./index-11.js";
import {
    b as Rr,
    R as kr,
    D as yo,
    g as Ma,
    M as Ba,
    O as za
} from "./index-10.js";
import {
    R as bo
} from "./index-13.js";
import {
    u as xo
} from "./useBreakpoint.js";
import {
    i as La,
    a as _a,
    g as Ha,
    b as ja,
    c as Aa,
    d as Fa,
    e as Wa,
    R as Va
} from "./index-3.js";
import {
    u as qa
} from "./useForceUpdate.js";
import {
    T as Ir
} from "./index-5.js";
import {
    u as Xa
} from "./useQuery.js";

function Dn(e) {
    return e != null && e === e.window
}
const Ua = e => {
    var t, r;
    if (typeof window > "u") return 0;
    let n = 0;
    return Dn(e) ? n = e.pageYOffset : e instanceof Document ? n = e.documentElement.scrollTop : (e instanceof HTMLElement || e) && (n = e.scrollTop), e && !Dn(e) && typeof n != "number" && (n = (r = ((t = e.ownerDocument) !== null && t !== void 0 ? t : e).documentElement) === null || r === void 0 ? void 0 : r.scrollTop), n
};

function Ga(e, t, r, n) {
    const o = r - t;
    return e /= n / 2, e < 1 ? o / 2 * e * e * e + t : o / 2 * ((e -= 2) * e * e + 2) + t
}

function Ya(e, t = {}) {
    const {
        getContainer: r = () => window,
        callback: n,
        duration: o = 450
    } = t, a = r(), d = Ua(a), l = Date.now(), c = () => {
        const f = Date.now() - l,
            u = Ga(f > o ? o : f, d, e, o);
        Dn(a) ? a.scrollTo(window.pageXOffset, u) : a instanceof Document || a.constructor.name === "HTMLDocument" ? a.documentElement.scrollTop = u : a.scrollTop = u, f < o ? tn(c) : typeof n == "function" && n()
    };
    tn(c)
}

function it(e, t) {
    return e[t]
}
var Ja = ["children"];

function Co(e, t) {
    return "".concat(e, "-").concat(t)
}

function Qa(e) {
    return e && e.type && e.type.isTreeNode
}

function sn(e, t) {
    return e ?? t
}

function At(e) {
    var t = e || {},
        r = t.title,
        n = t._title,
        o = t.key,
        a = t.children,
        d = r || "title";
    return {
        title: d,
        _title: n || [d],
        key: o || "key",
        children: a || "children"
    }
}

function So(e) {
    function t(r) {
        var n = vo(r);
        return n.map(function(o) {
            if (!Qa(o)) return Et(!o, "Tree/TreeNode can only accept TreeNode as children."), null;
            var a = o.key,
                d = o.props,
                l = d.children,
                c = mt(d, Ja),
                s = W({
                    key: a
                }, c),
                f = t(l);
            return f.length && (s.children = f), s
        }).filter(function(o) {
            return o
        })
    }
    return t(e)
}

function Nn(e, t, r) {
    var n = At(r),
        o = n._title,
        a = n.key,
        d = n.children,
        l = new Set(t === !0 ? [] : t),
        c = [];

    function s(f) {
        var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        return f.map(function(m, v) {
            for (var p = Co(u ? u.pos : "0", v), h = sn(m[a], p), g, b = 0; b < o.length; b += 1) {
                var S = o[b];
                if (m[S] !== void 0) {
                    g = m[S];
                    break
                }
            }
            var x = Object.assign(fo(m, [].concat(Ee(o), [a, d])), {
                title: g,
                key: h,
                parent: u,
                pos: p,
                children: null,
                data: m,
                isStart: [].concat(Ee(u ? u.isStart : []), [v === 0]),
                isEnd: [].concat(Ee(u ? u.isEnd : []), [v === f.length - 1])
            });
            return c.push(x), t === !0 || l.has(h) ? x.children = s(m[d] || [], x) : x.children = [], x
        })
    }
    return s(e), c
}

function Za(e, t, r) {
    var n = {};
    vt(r) === "object" ? n = r : n = {
        externalGetKey: r
    }, n = n || {};
    var o = n,
        a = o.childrenPropName,
        d = o.externalGetKey,
        l = o.fieldNames,
        c = At(l),
        s = c.key,
        f = c.children,
        u = a || f,
        m;
    d ? typeof d == "string" ? m = function(h) {
        return h[d]
    } : typeof d == "function" && (m = function(h) {
        return d(h)
    }) : m = function(h, g) {
        return sn(h[s], g)
    };

    function v(p, h, g, b) {
        var S = p ? p[u] : e,
            x = p ? Co(g.pos, h) : "0",
            w = p ? [].concat(Ee(b), [p]) : [];
        if (p) {
            var C = m(p, x),
                I = {
                    node: p,
                    index: h,
                    pos: x,
                    key: C,
                    parentPos: g.node ? g.pos : null,
                    level: g.level + 1,
                    nodes: w
                };
            t(I)
        }
        S && S.forEach(function(R, N) {
            v(R, N, {
                node: p,
                pos: x,
                level: g ? g.level + 1 : -1
            }, w)
        })
    }
    v(null)
}

function Zn(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = t.initWrapper,
        n = t.processEntity,
        o = t.onProcessFinished,
        a = t.externalGetKey,
        d = t.childrenPropName,
        l = t.fieldNames,
        c = arguments.length > 2 ? arguments[2] : void 0,
        s = a || c,
        f = {},
        u = {},
        m = {
            posEntities: f,
            keyEntities: u
        };
    return r && (m = r(m) || m), Za(e, function(v) {
        var p = v.node,
            h = v.index,
            g = v.pos,
            b = v.key,
            S = v.parentPos,
            x = v.level,
            w = v.nodes,
            C = {
                node: p,
                nodes: w,
                index: h,
                key: b,
                pos: g,
                level: x
            },
            I = sn(b, g);
        f[g] = C, u[I] = C, C.parent = f[S], C.parent && (C.parent.children = C.parent.children || [], C.parent.children.push(C)), n && n(C, m)
    }, {
        externalGetKey: s,
        childrenPropName: d,
        fieldNames: l
    }), o && o(m), m
}

function nn(e, t) {
    var r = t.expandedKeys,
        n = t.selectedKeys,
        o = t.loadedKeys,
        a = t.loadingKeys,
        d = t.checkedKeys,
        l = t.halfCheckedKeys,
        c = t.dragOverNodeKey,
        s = t.dropPosition,
        f = t.keyEntities,
        u = it(f, e),
        m = {
            eventKey: e,
            expanded: r.indexOf(e) !== -1,
            selected: n.indexOf(e) !== -1,
            loaded: o.indexOf(e) !== -1,
            loading: a.indexOf(e) !== -1,
            checked: d.indexOf(e) !== -1,
            halfChecked: l.indexOf(e) !== -1,
            pos: String(u ? u.pos : ""),
            dragOver: c === e && s === 0,
            dragOverGapTop: c === e && s === -1,
            dragOverGapBottom: c === e && s === 1
        };
    return m
}

function Ve(e) {
    var t = e.data,
        r = e.expanded,
        n = e.selected,
        o = e.checked,
        a = e.loaded,
        d = e.loading,
        l = e.halfChecked,
        c = e.dragOver,
        s = e.dragOverGapTop,
        f = e.dragOverGapBottom,
        u = e.pos,
        m = e.active,
        v = e.eventKey,
        p = W(W({}, t), {}, {
            expanded: r,
            selected: n,
            checked: o,
            loaded: a,
            loading: d,
            halfChecked: l,
            dragOver: c,
            dragOverGapTop: s,
            dragOverGapBottom: f,
            pos: u,
            active: m,
            key: v
        });
    return "props" in p || Object.defineProperty(p, "props", {
        get: function() {
            return Et(!1, "Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."), e
        }
    }), p
}

function wo(e, t) {
    var r = new Set;
    return e.forEach(function(n) {
        t.has(n) || r.add(n)
    }), r
}

function el(e) {
    var t = e || {},
        r = t.disabled,
        n = t.disableCheckbox,
        o = t.checkable;
    return !!(r || n) || o === !1
}

function tl(e, t, r, n) {
    for (var o = new Set(e), a = new Set, d = 0; d <= r; d += 1) {
        var l = t.get(d) || new Set;
        l.forEach(function(u) {
            var m = u.key,
                v = u.node,
                p = u.children,
                h = p === void 0 ? [] : p;
            o.has(m) && !n(v) && h.filter(function(g) {
                return !n(g.node)
            }).forEach(function(g) {
                o.add(g.key)
            })
        })
    }
    for (var c = new Set, s = r; s >= 0; s -= 1) {
        var f = t.get(s) || new Set;
        f.forEach(function(u) {
            var m = u.parent,
                v = u.node;
            if (!(n(v) || !u.parent || c.has(u.parent.key))) {
                if (n(u.parent.node)) {
                    c.add(m.key);
                    return
                }
                var p = !0,
                    h = !1;
                (m.children || []).filter(function(g) {
                    return !n(g.node)
                }).forEach(function(g) {
                    var b = g.key,
                        S = o.has(b);
                    p && !S && (p = !1), !h && (S || a.has(b)) && (h = !0)
                }), p && o.add(m.key), h && a.add(m.key), c.add(m.key)
            }
        })
    }
    return {
        checkedKeys: Array.from(o),
        halfCheckedKeys: Array.from(wo(a, o))
    }
}

function nl(e, t, r, n, o) {
    for (var a = new Set(e), d = new Set(t), l = 0; l <= n; l += 1) {
        var c = r.get(l) || new Set;
        c.forEach(function(m) {
            var v = m.key,
                p = m.node,
                h = m.children,
                g = h === void 0 ? [] : h;
            !a.has(v) && !d.has(v) && !o(p) && g.filter(function(b) {
                return !o(b.node)
            }).forEach(function(b) {
                a.delete(b.key)
            })
        })
    }
    d = new Set;
    for (var s = new Set, f = n; f >= 0; f -= 1) {
        var u = r.get(f) || new Set;
        u.forEach(function(m) {
            var v = m.parent,
                p = m.node;
            if (!(o(p) || !m.parent || s.has(m.parent.key))) {
                if (o(m.parent.node)) {
                    s.add(v.key);
                    return
                }
                var h = !0,
                    g = !1;
                (v.children || []).filter(function(b) {
                    return !o(b.node)
                }).forEach(function(b) {
                    var S = b.key,
                        x = a.has(S);
                    h && !x && (h = !1), !g && (x || d.has(S)) && (g = !0)
                }), h || a.delete(v.key), g && d.add(v.key), s.add(v.key)
            }
        })
    }
    return {
        checkedKeys: Array.from(a),
        halfCheckedKeys: Array.from(wo(d, a))
    }
}

function Ht(e, t, r, n) {
    var o = [],
        a;
    n ? a = n : a = el;
    var d = new Set(e.filter(function(f) {
            var u = !!it(r, f);
            return u || o.push(f), u
        })),
        l = new Map,
        c = 0;
    Object.keys(r).forEach(function(f) {
        var u = r[f],
            m = u.level,
            v = l.get(m);
        v || (v = new Set, l.set(m, v)), v.add(u), c = Math.max(c, m)
    }), Et(!o.length, "Tree missing follow keys: ".concat(o.slice(0, 100).map(function(f) {
        return "'".concat(f, "'")
    }).join(", ")));
    var s;
    return t === !0 ? s = tl(d, l, c, a) : s = nl(d, t.halfCheckedKeys, l, c, a), s
}

function Kr(e, t, r, n) {
    var o = br.unstable_batchedUpdates ? function(d) {
        br.unstable_batchedUpdates(r, d)
    } : r;
    return e != null && e.addEventListener && e.addEventListener(t, o, n), {
        remove: function() {
            e != null && e.removeEventListener && e.removeEventListener(t, o, n)
        }
    }
}
var rl = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"
                }
            }]
        },
        name: "double-left",
        theme: "outlined"
    },
    ol = function(t, r) {
        return i.createElement(ut, fe({}, t, {
            ref: r,
            icon: rl
        }))
    },
    Or = i.forwardRef(ol),
    al = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"
                }
            }]
        },
        name: "double-right",
        theme: "outlined"
    },
    ll = function(t, r) {
        return i.createElement(ut, fe({}, t, {
            ref: r,
            icon: al
        }))
    },
    Pr = i.forwardRef(ll),
    il = {
        items_per_page: "条/页",
        jump_to: "跳至",
        jump_to_confirm: "确定",
        page: "页",
        prev_page: "上一页",
        next_page: "下一页",
        prev_5: "向前 5 页",
        next_5: "向后 5 页",
        prev_3: "向前 3 页",
        next_3: "向后 3 页",
        page_size: "页码"
    },
    sl = [10, 20, 50, 100],
    cl = function(t) {
        var r = t.pageSizeOptions,
            n = r === void 0 ? sl : r,
            o = t.locale,
            a = t.changeSize,
            d = t.pageSize,
            l = t.goButton,
            c = t.quickGo,
            s = t.rootPrefixCls,
            f = t.disabled,
            u = t.buildOptionText,
            m = t.showSizeChanger,
            v = t.sizeChangerRender,
            p = U.useState(""),
            h = Se(p, 2),
            g = h[0],
            b = h[1],
            S = function() {
                return !g || Number.isNaN(g) ? void 0 : Number(g)
            },
            x = typeof u == "function" ? u : function(P) {
                return "".concat(P, " ").concat(o.items_per_page)
            },
            w = function(O) {
                b(O.target.value)
            },
            C = function(O) {
                l || g === "" || (b(""), !(O.relatedTarget && (O.relatedTarget.className.indexOf("".concat(s, "-item-link")) >= 0 || O.relatedTarget.className.indexOf("".concat(s, "-item")) >= 0)) && (c == null || c(S())))
            },
            I = function(O) {
                g !== "" && (O.keyCode === Ze.ENTER || O.type === "click") && (b(""), c == null || c(S()))
            },
            R = function() {
                return n.some(function(O) {
                    return O.toString() === d.toString()
                }) ? n : n.concat([d]).sort(function(O, E) {
                    var $ = Number.isNaN(Number(O)) ? 0 : Number(O),
                        k = Number.isNaN(Number(E)) ? 0 : Number(E);
                    return $ - k
                })
            },
            N = "".concat(s, "-options");
        if (!m && !c) return null;
        var y = null,
            K = null,
            T = null;
        return m && v && (y = v({
            disabled: f,
            size: d,
            onSizeChange: function(O) {
                a == null || a(Number(O))
            },
            "aria-label": o.page_size,
            className: "".concat(N, "-size-changer"),
            options: R().map(function(P) {
                return {
                    label: x(P),
                    value: P
                }
            })
        })), c && (l && (T = typeof l == "boolean" ? U.createElement("button", {
            type: "button",
            onClick: I,
            onKeyUp: I,
            disabled: f,
            className: "".concat(N, "-quick-jumper-button")
        }, o.jump_to_confirm) : U.createElement("span", {
            onClick: I,
            onKeyUp: I
        }, l)), K = U.createElement("div", {
            className: "".concat(N, "-quick-jumper")
        }, o.jump_to, U.createElement("input", {
            disabled: f,
            type: "text",
            value: g,
            onChange: w,
            onKeyUp: I,
            onBlur: C,
            "aria-label": o.page
        }), o.page, T)), U.createElement("li", {
            className: N
        }, y, K)
    },
    en = function(t) {
        var r = t.rootPrefixCls,
            n = t.page,
            o = t.active,
            a = t.className,
            d = t.showTitle,
            l = t.onClick,
            c = t.onKeyPress,
            s = t.itemRender,
            f = "".concat(r, "-item"),
            u = Q(f, "".concat(f, "-").concat(n), D(D({}, "".concat(f, "-active"), o), "".concat(f, "-disabled"), !n), a),
            m = function() {
                l(n)
            },
            v = function(g) {
                c(g, l, n)
            },
            p = s(n, "page", U.createElement("a", {
                rel: "nofollow"
            }, n));
        return p ? U.createElement("li", {
            title: d ? String(n) : null,
            className: u,
            onClick: m,
            onKeyDown: v,
            tabIndex: 0
        }, p) : null
    },
    dl = function(t, r, n) {
        return n
    };

function Tr() {}

function Dr(e) {
    var t = Number(e);
    return typeof t == "number" && !Number.isNaN(t) && isFinite(t) && Math.floor(t) === t
}

function Mt(e, t, r) {
    var n = typeof e > "u" ? t : e;
    return Math.floor((r - 1) / n) + 1
}
var ul = function(t) {
    var r = t.prefixCls,
        n = r === void 0 ? "rc-pagination" : r,
        o = t.selectPrefixCls,
        a = o === void 0 ? "rc-select" : o,
        d = t.className,
        l = t.current,
        c = t.defaultCurrent,
        s = c === void 0 ? 1 : c,
        f = t.total,
        u = f === void 0 ? 0 : f,
        m = t.pageSize,
        v = t.defaultPageSize,
        p = v === void 0 ? 10 : v,
        h = t.onChange,
        g = h === void 0 ? Tr : h,
        b = t.hideOnSinglePage,
        S = t.align,
        x = t.showPrevNextJumpers,
        w = x === void 0 ? !0 : x,
        C = t.showQuickJumper,
        I = t.showLessItems,
        R = t.showTitle,
        N = R === void 0 ? !0 : R,
        y = t.onShowSizeChange,
        K = y === void 0 ? Tr : y,
        T = t.locale,
        P = T === void 0 ? il : T,
        O = t.style,
        E = t.totalBoundaryShowSizeChanger,
        $ = E === void 0 ? 50 : E,
        k = t.disabled,
        M = t.simple,
        A = t.showTotal,
        B = t.showSizeChanger,
        q = B === void 0 ? u > $ : B,
        oe = t.sizeChangerRender,
        te = t.pageSizeOptions,
        ne = t.itemRender,
        de = ne === void 0 ? dl : ne,
        Oe = t.jumpPrevIcon,
        ae = t.jumpNextIcon,
        Z = t.prevIcon,
        Y = t.nextIcon,
        me = U.useRef(null),
        le = Pn(10, {
            value: m,
            defaultValue: p
        }),
        pe = Se(le, 2),
        H = pe[0],
        J = pe[1],
        V = Pn(1, {
            value: l,
            defaultValue: s,
            postState: function(xe) {
                return Math.max(1, Math.min(xe, Mt(void 0, H, u)))
            }
        }),
        X = Se(V, 2),
        _ = X[0],
        ee = X[1],
        we = U.useState(_),
        je = Se(we, 2),
        Ie = je[0],
        z = je[1];
    i.useEffect(function() {
        z(_)
    }, [_]);
    var F = Math.max(1, _ - (I ? 3 : 5)),
        ve = Math.min(Mt(void 0, H, u), _ + (I ? 3 : 5));

    function $e(re, xe) {
        var He = re || U.createElement("button", {
            type: "button",
            "aria-label": xe,
            className: "".concat(n, "-item-link")
        });
        return typeof re == "function" && (He = U.createElement(re, W({}, t))), He
    }

    function ie(re) {
        var xe = re.target.value,
            He = Mt(void 0, H, u),
            pt;
        return xe === "" ? pt = xe : Number.isNaN(Number(xe)) ? pt = Ie : xe >= He ? pt = He : pt = Number(xe), pt
    }

    function Pe(re) {
        return Dr(re) && re !== _ && Dr(u) && u > 0
    }
    var Te = u > H ? C : !1;

    function We(re) {
        (re.keyCode === Ze.UP || re.keyCode === Ze.DOWN) && re.preventDefault()
    }

    function ge(re) {
        var xe = ie(re);
        switch (xe !== Ie && z(xe), re.keyCode) {
            case Ze.ENTER:
                L(xe);
                break;
            case Ze.UP:
                L(xe - 1);
                break;
            case Ze.DOWN:
                L(xe + 1);
                break
        }
    }

    function st(re) {
        L(ie(re))
    }

    function G(re) {
        var xe = Mt(re, H, u),
            He = _ > xe && xe !== 0 ? xe : _;
        J(re), z(He), K == null || K(_, re), ee(He), g == null || g(He, re)
    }

    function L(re) {
        if (Pe(re) && !k) {
            var xe = Mt(void 0, H, u),
                He = re;
            return re > xe ? He = xe : re < 1 && (He = 1), He !== Ie && z(He), ee(He), g == null || g(He, H), He
        }
        return _
    }
    var ce = _ > 1,
        Me = _ < Mt(void 0, H, u);

    function Ke() {
        ce && L(_ - 1)
    }

    function Ne() {
        Me && L(_ + 1)
    }

    function Le() {
        L(F)
    }

    function he() {
        L(ve)
    }

    function Be(re, xe) {
        if (re.key === "Enter" || re.charCode === Ze.ENTER || re.keyCode === Ze.ENTER) {
            for (var He = arguments.length, pt = new Array(He > 2 ? He - 2 : 0), Pt = 2; Pt < He; Pt++) pt[Pt - 2] = arguments[Pt];
            xe.apply(void 0, pt)
        }
    }

    function rt(re) {
        Be(re, Ke)
    }

    function qe(re) {
        Be(re, Ne)
    }

    function Re(re) {
        Be(re, Le)
    }

    function ht(re) {
        Be(re, he)
    }

    function ct(re) {
        var xe = de(re, "prev", $e(Z, "prev page"));
        return U.isValidElement(xe) ? U.cloneElement(xe, {
            disabled: !ce
        }) : xe
    }

    function yt(re) {
        var xe = de(re, "next", $e(Y, "next page"));
        return U.isValidElement(xe) ? U.cloneElement(xe, {
            disabled: !Me
        }) : xe
    }

    function Fe(re) {
        (re.type === "click" || re.keyCode === Ze.ENTER) && L(Ie)
    }
    var tt = null,
        Ae = on(t, {
            aria: !0,
            data: !0
        }),
        Ge = A && U.createElement("li", {
            className: "".concat(n, "-total-text")
        }, A(u, [u === 0 ? 0 : (_ - 1) * H + 1, _ * H > u ? u : _ * H])),
        Ye = null,
        De = Mt(void 0, H, u);
    if (b && u <= H) return null;
    var _e = [],
        nt = {
            rootPrefixCls: n,
            onClick: L,
            onKeyPress: Be,
            showTitle: N,
            itemRender: de,
            page: -1
        },
        Xt = _ - 1 > 0 ? _ - 1 : 0,
        Ut = _ + 1 < De ? _ + 1 : De,
        bt = C && C.goButton,
        Gt = vt(M) === "object" ? M.readOnly : !M,
        se = bt,
        ue = null;
    M && (bt && (typeof bt == "boolean" ? se = U.createElement("button", {
        type: "button",
        onClick: Fe,
        onKeyUp: Fe
    }, P.jump_to_confirm) : se = U.createElement("span", {
        onClick: Fe,
        onKeyUp: Fe
    }, bt), se = U.createElement("li", {
        title: N ? "".concat(P.jump_to).concat(_, "/").concat(De) : null,
        className: "".concat(n, "-simple-pager")
    }, se)), ue = U.createElement("li", {
        title: N ? "".concat(_, "/").concat(De) : null,
        className: "".concat(n, "-simple-pager")
    }, Gt ? Ie : U.createElement("input", {
        type: "text",
        "aria-label": P.jump_to,
        value: Ie,
        disabled: k,
        onKeyDown: We,
        onKeyUp: ge,
        onChange: ge,
        onBlur: st,
        size: 3
    }), U.createElement("span", {
        className: "".concat(n, "-slash")
    }, "/"), De));
    var ke = I ? 1 : 2;
    if (De <= 3 + ke * 2) {
        De || _e.push(U.createElement(en, fe({}, nt, {
            key: "noPager",
            page: 1,
            className: "".concat(n, "-item-disabled")
        })));
        for (var ze = 1; ze <= De; ze += 1) _e.push(U.createElement(en, fe({}, nt, {
            key: ze,
            page: ze,
            active: _ === ze
        })))
    } else {
        var Ue = I ? P.prev_3 : P.prev_5,
            ot = I ? P.next_3 : P.next_5,
            at = de(F, "jump-prev", $e(Oe, "prev page")),
            Xe = de(ve, "jump-next", $e(ae, "next page"));
        w && (tt = at ? U.createElement("li", {
            title: N ? Ue : null,
            key: "prev",
            onClick: Le,
            tabIndex: 0,
            onKeyDown: Re,
            className: Q("".concat(n, "-jump-prev"), D({}, "".concat(n, "-jump-prev-custom-icon"), !!Oe))
        }, at) : null, Ye = Xe ? U.createElement("li", {
            title: N ? ot : null,
            key: "next",
            onClick: he,
            tabIndex: 0,
            onKeyDown: ht,
            className: Q("".concat(n, "-jump-next"), D({}, "".concat(n, "-jump-next-custom-icon"), !!ae))
        }, Xe) : null);
        var zt = Math.max(1, _ - ke),
            Yt = Math.min(_ + ke, De);
        _ - 1 <= ke && (Yt = 1 + ke * 2), De - _ <= ke && (zt = De - ke * 2);
        for (var St = zt; St <= Yt; St += 1) _e.push(U.createElement(en, fe({}, nt, {
            key: St,
            page: St,
            active: _ === St
        })));
        if (_ - 1 >= ke * 2 && _ !== 3 && (_e[0] = U.cloneElement(_e[0], {
                className: Q("".concat(n, "-item-after-jump-prev"), _e[0].props.className)
            }), _e.unshift(tt)), De - _ >= ke * 2 && _ !== De - 2) {
            var It = _e[_e.length - 1];
            _e[_e.length - 1] = U.cloneElement(It, {
                className: Q("".concat(n, "-item-before-jump-next"), It.props.className)
            }), _e.push(Ye)
        }
        zt !== 1 && _e.unshift(U.createElement(en, fe({}, nt, {
            key: 1,
            page: 1
        }))), Yt !== De && _e.push(U.createElement(en, fe({}, nt, {
            key: De,
            page: De
        })))
    }
    var ft = ct(Xt);
    if (ft) {
        var Jt = !ce || !De;
        ft = U.createElement("li", {
            title: N ? P.prev_page : null,
            onClick: Ke,
            tabIndex: Jt ? null : 0,
            onKeyDown: rt,
            className: Q("".concat(n, "-prev"), D({}, "".concat(n, "-disabled"), Jt)),
            "aria-disabled": Jt
        }, ft)
    }
    var Kt = yt(Ut);
    if (Kt) {
        var Ot, Lt;
        M ? (Ot = !Me, Lt = ce ? 0 : null) : (Ot = !Me || !De, Lt = Ot ? null : 0), Kt = U.createElement("li", {
            title: N ? P.next_page : null,
            onClick: Ne,
            tabIndex: Lt,
            onKeyDown: qe,
            className: Q("".concat(n, "-next"), D({}, "".concat(n, "-disabled"), Ot)),
            "aria-disabled": Ot
        }, Kt)
    }
    var xn = Q(n, d, D(D(D(D(D({}, "".concat(n, "-start"), S === "start"), "".concat(n, "-center"), S === "center"), "".concat(n, "-end"), S === "end"), "".concat(n, "-simple"), M), "".concat(n, "-disabled"), k));
    return U.createElement("ul", fe({
        className: xn,
        style: O,
        ref: me
    }, Ae), Ge, ft, M ? ue : _e, Kt, U.createElement(cl, {
        locale: P,
        rootPrefixCls: n,
        disabled: k,
        selectPrefixCls: a,
        changeSize: G,
        pageSize: H,
        pageSizeOptions: te,
        quickGo: Te ? L : null,
        goButton: se,
        showSizeChanger: q,
        sizeChangerRender: oe
    }))
};
const fl = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}-disabled`]: {
                "&, &:hover": {
                    cursor: "not-allowed",
                    [`${t}-item-link`]: {
                        color: e.colorTextDisabled,
                        cursor: "not-allowed"
                    }
                },
                "&:focus-visible": {
                    cursor: "not-allowed",
                    [`${t}-item-link`]: {
                        color: e.colorTextDisabled,
                        cursor: "not-allowed"
                    }
                }
            },
            [`&${t}-disabled`]: {
                cursor: "not-allowed",
                [`${t}-item`]: {
                    cursor: "not-allowed",
                    backgroundColor: "transparent",
                    "&:hover, &:active": {
                        backgroundColor: "transparent"
                    },
                    a: {
                        color: e.colorTextDisabled,
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "not-allowed"
                    },
                    "&-active": {
                        borderColor: e.colorBorder,
                        backgroundColor: e.itemActiveBgDisabled,
                        "&:hover, &:active": {
                            backgroundColor: e.itemActiveBgDisabled
                        },
                        a: {
                            color: e.itemActiveColorDisabled
                        }
                    }
                },
                [`${t}-item-link`]: {
                    color: e.colorTextDisabled,
                    cursor: "not-allowed",
                    "&:hover, &:active": {
                        backgroundColor: "transparent"
                    },
                    [`${t}-simple&`]: {
                        backgroundColor: "transparent",
                        "&:hover, &:active": {
                            backgroundColor: "transparent"
                        }
                    }
                },
                [`${t}-simple-pager`]: {
                    color: e.colorTextDisabled
                },
                [`${t}-jump-prev, ${t}-jump-next`]: {
                    [`${t}-item-link-icon`]: {
                        opacity: 0
                    },
                    [`${t}-item-ellipsis`]: {
                        opacity: 1
                    }
                }
            }
        }
    },
    vl = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]: {
                height: e.itemSizeSM,
                lineHeight: j(e.itemSizeSM)
            },
            [`&${t}-mini ${t}-item`]: {
                minWidth: e.itemSizeSM,
                height: e.itemSizeSM,
                margin: 0,
                lineHeight: j(e.calc(e.itemSizeSM).sub(2).equal())
            },
            [`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]: {
                minWidth: e.itemSizeSM,
                height: e.itemSizeSM,
                margin: 0,
                lineHeight: j(e.itemSizeSM)
            },
            [`&${t}-mini:not(${t}-disabled)`]: {
                [`${t}-prev, ${t}-next`]: {
                    [`&:hover ${t}-item-link`]: {
                        backgroundColor: e.colorBgTextHover
                    },
                    [`&:active ${t}-item-link`]: {
                        backgroundColor: e.colorBgTextActive
                    },
                    [`&${t}-disabled:hover ${t}-item-link`]: {
                        backgroundColor: "transparent"
                    }
                }
            },
            [`
    &${t}-mini ${t}-prev ${t}-item-link,
    &${t}-mini ${t}-next ${t}-item-link
    `]: {
                backgroundColor: "transparent",
                borderColor: "transparent",
                "&::after": {
                    height: e.itemSizeSM,
                    lineHeight: j(e.itemSizeSM)
                }
            },
            [`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]: {
                height: e.itemSizeSM,
                marginInlineEnd: 0,
                lineHeight: j(e.itemSizeSM)
            },
            [`&${t}-mini ${t}-options`]: {
                marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
                "&-size-changer": {
                    top: e.miniOptionsSizeChangerTop
                },
                "&-quick-jumper": {
                    height: e.itemSizeSM,
                    lineHeight: j(e.itemSizeSM),
                    input: Object.assign(Object.assign({}, Fa(e)), {
                        width: e.paginationMiniQuickJumperInputWidth,
                        height: e.controlHeightSM
                    })
                }
            }
        }
    },
    ml = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`&${t}-simple`]: {
                [`${t}-prev, ${t}-next`]: {
                    height: e.itemSize,
                    lineHeight: j(e.itemSize),
                    verticalAlign: "top",
                    [`${t}-item-link`]: {
                        height: e.itemSize,
                        backgroundColor: "transparent",
                        border: 0,
                        "&:hover": {
                            backgroundColor: e.colorBgTextHover
                        },
                        "&:active": {
                            backgroundColor: e.colorBgTextActive
                        },
                        "&::after": {
                            height: e.itemSize,
                            lineHeight: j(e.itemSize)
                        }
                    }
                },
                [`${t}-simple-pager`]: {
                    display: "inline-flex",
                    alignItems: "center",
                    height: e.itemSize,
                    marginInlineEnd: e.marginXS,
                    input: {
                        boxSizing: "border-box",
                        height: "100%",
                        width: e.quickJumperInputWidth,
                        padding: `0 ${j(e.paginationItemPaddingInline)}`,
                        textAlign: "center",
                        backgroundColor: e.itemInputBg,
                        border: `${j(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                        borderRadius: e.borderRadius,
                        outline: "none",
                        transition: `border-color ${e.motionDurationMid}`,
                        color: "inherit",
                        "&:hover": {
                            borderColor: e.colorPrimary
                        },
                        "&:focus": {
                            borderColor: e.colorPrimaryHover,
                            boxShadow: `${j(e.inputOutlineOffset)} 0 ${j(e.controlOutlineWidth)} ${e.controlOutline}`
                        },
                        "&[disabled]": {
                            color: e.colorTextDisabled,
                            backgroundColor: e.colorBgContainerDisabled,
                            borderColor: e.colorBorder,
                            cursor: "not-allowed"
                        }
                    }
                },
                [`&${t}-disabled`]: {
                    [`${t}-prev, ${t}-next`]: {
                        [`${t}-item-link`]: {
                            "&:hover, &:active": {
                                backgroundColor: "transparent"
                            }
                        }
                    }
                },
                [`&${t}-mini`]: {
                    [`${t}-prev, ${t}-next`]: {
                        height: e.itemSizeSM,
                        lineHeight: j(e.itemSizeSM),
                        [`${t}-item-link`]: {
                            height: e.itemSizeSM,
                            "&::after": {
                                height: e.itemSizeSM,
                                lineHeight: j(e.itemSizeSM)
                            }
                        }
                    },
                    [`${t}-simple-pager`]: {
                        height: e.itemSizeSM,
                        width: e.paginationMiniQuickJumperInputWidth
                    }
                }
            }
        }
    },
    pl = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}-jump-prev, ${t}-jump-next`]: {
                outline: 0,
                [`${t}-item-container`]: {
                    position: "relative",
                    [`${t}-item-link-icon`]: {
                        color: e.colorPrimary,
                        fontSize: e.fontSizeSM,
                        opacity: 0,
                        transition: `all ${e.motionDurationMid}`,
                        "&-svg": {
                            top: 0,
                            insetInlineEnd: 0,
                            bottom: 0,
                            insetInlineStart: 0,
                            margin: "auto"
                        }
                    },
                    [`${t}-item-ellipsis`]: {
                        position: "absolute",
                        top: 0,
                        insetInlineEnd: 0,
                        bottom: 0,
                        insetInlineStart: 0,
                        display: "block",
                        margin: "auto",
                        color: e.colorTextDisabled,
                        letterSpacing: e.paginationEllipsisLetterSpacing,
                        textAlign: "center",
                        textIndent: e.paginationEllipsisTextIndent,
                        opacity: 1,
                        transition: `all ${e.motionDurationMid}`
                    }
                },
                "&:hover": {
                    [`${t}-item-link-icon`]: {
                        opacity: 1
                    },
                    [`${t}-item-ellipsis`]: {
                        opacity: 0
                    }
                }
            },
            [`
    ${t}-prev,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
                marginInlineEnd: e.marginXS
            },
            [`
    ${t}-prev,
    ${t}-next,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
                display: "inline-block",
                minWidth: e.itemSize,
                height: e.itemSize,
                color: e.colorText,
                fontFamily: e.fontFamily,
                lineHeight: j(e.itemSize),
                textAlign: "center",
                verticalAlign: "middle",
                listStyle: "none",
                borderRadius: e.borderRadius,
                cursor: "pointer",
                transition: `all ${e.motionDurationMid}`
            },
            [`${t}-prev, ${t}-next`]: {
                outline: 0,
                button: {
                    color: e.colorText,
                    cursor: "pointer",
                    userSelect: "none"
                },
                [`${t}-item-link`]: {
                    display: "block",
                    width: "100%",
                    height: "100%",
                    padding: 0,
                    fontSize: e.fontSizeSM,
                    textAlign: "center",
                    backgroundColor: "transparent",
                    border: `${j(e.lineWidth)} ${e.lineType} transparent`,
                    borderRadius: e.borderRadius,
                    outline: "none",
                    transition: `all ${e.motionDurationMid}`
                },
                [`&:hover ${t}-item-link`]: {
                    backgroundColor: e.colorBgTextHover
                },
                [`&:active ${t}-item-link`]: {
                    backgroundColor: e.colorBgTextActive
                },
                [`&${t}-disabled:hover`]: {
                    [`${t}-item-link`]: {
                        backgroundColor: "transparent"
                    }
                }
            },
            [`${t}-slash`]: {
                marginInlineEnd: e.paginationSlashMarginInlineEnd,
                marginInlineStart: e.paginationSlashMarginInlineStart
            },
            [`${t}-options`]: {
                display: "inline-block",
                marginInlineStart: e.margin,
                verticalAlign: "middle",
                "&-size-changer": {
                    display: "inline-block",
                    width: "auto"
                },
                "&-quick-jumper": {
                    display: "inline-block",
                    height: e.controlHeight,
                    marginInlineStart: e.marginXS,
                    lineHeight: j(e.controlHeight),
                    verticalAlign: "top",
                    input: Object.assign(Object.assign(Object.assign({}, Ha(e)), ja(e, {
                        borderColor: e.colorBorder,
                        hoverBorderColor: e.colorPrimaryHover,
                        activeBorderColor: e.colorPrimary,
                        activeShadow: e.activeShadow
                    })), {
                        "&[disabled]": Object.assign({}, Aa(e)),
                        width: e.quickJumperInputWidth,
                        height: e.controlHeight,
                        boxSizing: "border-box",
                        margin: 0,
                        marginInlineStart: e.marginXS,
                        marginInlineEnd: e.marginXS
                    })
                }
            }
        }
    },
    gl = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}-item`]: {
                display: "inline-block",
                minWidth: e.itemSize,
                height: e.itemSize,
                marginInlineEnd: e.marginXS,
                fontFamily: e.fontFamily,
                lineHeight: j(e.calc(e.itemSize).sub(2).equal()),
                textAlign: "center",
                verticalAlign: "middle",
                listStyle: "none",
                backgroundColor: e.itemBg,
                border: `${j(e.lineWidth)} ${e.lineType} transparent`,
                borderRadius: e.borderRadius,
                outline: 0,
                cursor: "pointer",
                userSelect: "none",
                a: {
                    display: "block",
                    padding: `0 ${j(e.paginationItemPaddingInline)}`,
                    color: e.colorText,
                    "&:hover": {
                        textDecoration: "none"
                    }
                },
                [`&:not(${t}-item-active)`]: {
                    "&:hover": {
                        transition: `all ${e.motionDurationMid}`,
                        backgroundColor: e.colorBgTextHover
                    },
                    "&:active": {
                        backgroundColor: e.colorBgTextActive
                    }
                },
                "&-active": {
                    fontWeight: e.fontWeightStrong,
                    backgroundColor: e.itemActiveBg,
                    borderColor: e.colorPrimary,
                    a: {
                        color: e.colorPrimary
                    },
                    "&:hover": {
                        borderColor: e.colorPrimaryHover
                    },
                    "&:hover a": {
                        color: e.colorPrimaryHover
                    }
                }
            }
        }
    },
    hl = e => {
        const {
            componentCls: t
        } = e;
        return {
            [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, pn(e)), {
                display: "flex",
                "&-start": {
                    justifyContent: "start"
                },
                "&-center": {
                    justifyContent: "center"
                },
                "&-end": {
                    justifyContent: "end"
                },
                "ul, ol": {
                    margin: 0,
                    padding: 0,
                    listStyle: "none"
                },
                "&::after": {
                    display: "block",
                    clear: "both",
                    height: 0,
                    overflow: "hidden",
                    visibility: "hidden",
                    content: '""'
                },
                [`${t}-total-text`]: {
                    display: "inline-block",
                    height: e.itemSize,
                    marginInlineEnd: e.marginXS,
                    lineHeight: j(e.calc(e.itemSize).sub(2).equal()),
                    verticalAlign: "middle"
                }
            }), gl(e)), pl(e)), ml(e)), vl(e)), fl(e)), {
                [`@media only screen and (max-width: ${e.screenLG}px)`]: {
                    [`${t}-item`]: {
                        "&-after-jump-prev, &-before-jump-next": {
                            display: "none"
                        }
                    }
                },
                [`@media only screen and (max-width: ${e.screenSM}px)`]: {
                    [`${t}-options`]: {
                        display: "none"
                    }
                }
            }),
            [`&${e.componentCls}-rtl`]: {
                direction: "rtl"
            }
        }
    },
    yl = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}:not(${t}-disabled)`]: {
                [`${t}-item`]: Object.assign({}, la(e)),
                [`${t}-jump-prev, ${t}-jump-next`]: {
                    "&:focus-visible": Object.assign({
                        [`${t}-item-link-icon`]: {
                            opacity: 1
                        },
                        [`${t}-item-ellipsis`]: {
                            opacity: 0
                        }
                    }, Tn(e))
                },
                [`${t}-prev, ${t}-next`]: {
                    [`&:focus-visible ${t}-item-link`]: Tn(e)
                }
            }
        }
    },
    Eo = e => Object.assign({
        itemBg: e.colorBgContainer,
        itemSize: e.controlHeight,
        itemSizeSM: e.controlHeightSM,
        itemActiveBg: e.colorBgContainer,
        itemLinkBg: e.colorBgContainer,
        itemActiveColorDisabled: e.colorTextDisabled,
        itemActiveBgDisabled: e.controlItemBgActiveDisabled,
        itemInputBg: e.colorBgContainer,
        miniOptionsSizeChangerTop: 0
    }, _a(e)),
    $o = e => Xn(e, {
        inputOutlineOffset: 0,
        quickJumperInputWidth: e.calc(e.controlHeightLG).mul(1.25).equal(),
        paginationMiniOptionsMarginInlineStart: e.calc(e.marginXXS).div(2).equal(),
        paginationMiniQuickJumperInputWidth: e.calc(e.controlHeightLG).mul(1.1).equal(),
        paginationItemPaddingInline: e.calc(e.marginXXS).mul(1.5).equal(),
        paginationEllipsisLetterSpacing: e.calc(e.marginXXS).div(2).equal(),
        paginationSlashMarginInlineStart: e.marginSM,
        paginationSlashMarginInlineEnd: e.marginSM,
        paginationEllipsisTextIndent: "0.13em"
    }, La(e)),
    bl = qn("Pagination", e => {
        const t = $o(e);
        return [hl(t), yl(t)]
    }, Eo),
    xl = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}${t}-bordered${t}-disabled:not(${t}-mini)`]: {
                "&, &:hover": {
                    [`${t}-item-link`]: {
                        borderColor: e.colorBorder
                    }
                },
                "&:focus-visible": {
                    [`${t}-item-link`]: {
                        borderColor: e.colorBorder
                    }
                },
                [`${t}-item, ${t}-item-link`]: {
                    backgroundColor: e.colorBgContainerDisabled,
                    borderColor: e.colorBorder,
                    [`&:hover:not(${t}-item-active)`]: {
                        backgroundColor: e.colorBgContainerDisabled,
                        borderColor: e.colorBorder,
                        a: {
                            color: e.colorTextDisabled
                        }
                    },
                    [`&${t}-item-active`]: {
                        backgroundColor: e.itemActiveBgDisabled
                    }
                },
                [`${t}-prev, ${t}-next`]: {
                    "&:hover button": {
                        backgroundColor: e.colorBgContainerDisabled,
                        borderColor: e.colorBorder,
                        color: e.colorTextDisabled
                    },
                    [`${t}-item-link`]: {
                        backgroundColor: e.colorBgContainerDisabled,
                        borderColor: e.colorBorder
                    }
                }
            },
            [`${t}${t}-bordered:not(${t}-mini)`]: {
                [`${t}-prev, ${t}-next`]: {
                    "&:hover button": {
                        borderColor: e.colorPrimaryHover,
                        backgroundColor: e.itemBg
                    },
                    [`${t}-item-link`]: {
                        backgroundColor: e.itemLinkBg,
                        borderColor: e.colorBorder
                    },
                    [`&:hover ${t}-item-link`]: {
                        borderColor: e.colorPrimary,
                        backgroundColor: e.itemBg,
                        color: e.colorPrimary
                    },
                    [`&${t}-disabled`]: {
                        [`${t}-item-link`]: {
                            borderColor: e.colorBorder,
                            color: e.colorTextDisabled
                        }
                    }
                },
                [`${t}-item`]: {
                    backgroundColor: e.itemBg,
                    border: `${j(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                    [`&:hover:not(${t}-item-active)`]: {
                        borderColor: e.colorPrimary,
                        backgroundColor: e.itemBg,
                        a: {
                            color: e.colorPrimary
                        }
                    },
                    "&-active": {
                        borderColor: e.colorPrimary
                    }
                }
            }
        }
    },
    Cl = ia(["Pagination", "bordered"], e => {
        const t = $o(e);
        return xl(t)
    }, Eo);

function Mr(e) {
    return i.useMemo(() => typeof e == "boolean" ? [e, {}] : e && typeof e == "object" ? [!0, e] : [void 0, void 0], [e])
}
var Sl = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};
const wl = e => {
    const {
        align: t,
        prefixCls: r,
        selectPrefixCls: n,
        className: o,
        rootClassName: a,
        style: d,
        size: l,
        locale: c,
        responsive: s,
        showSizeChanger: f,
        selectComponentClass: u,
        pageSizeOptions: m
    } = e, v = Sl(e, ["align", "prefixCls", "selectPrefixCls", "className", "rootClassName", "style", "size", "locale", "responsive", "showSizeChanger", "selectComponentClass", "pageSizeOptions"]), {
        xs: p
    } = xo(s), [, h] = Un(), {
        getPrefixCls: g,
        direction: b,
        showSizeChanger: S,
        className: x,
        style: w
    } = sa("pagination"), C = g("pagination", r), [I, R, N] = bl(C), y = mo(l), K = y === "small" || !!(p && !y && s), [T] = ca("Pagination", da), P = Object.assign(Object.assign({}, T), c), [O, E] = Mr(f), [$, k] = Mr(S), M = O ?? $, A = E ?? k, B = u || Oa, q = i.useMemo(() => m ? m.map(ae => Number(ae)) : void 0, [m]), oe = ae => {
        var Z;
        const {
            disabled: Y,
            size: me,
            onSizeChange: le,
            "aria-label": pe,
            className: H,
            options: J
        } = ae, {
            className: V,
            onChange: X
        } = A || {}, _ = (Z = J.find(ee => String(ee.value) === String(me))) === null || Z === void 0 ? void 0 : Z.value;
        return i.createElement(B, Object.assign({
            disabled: Y,
            showSearch: !0,
            popupMatchSelectWidth: !1,
            getPopupContainer: ee => ee.parentNode,
            "aria-label": pe,
            options: J
        }, A, {
            value: _,
            onChange: (ee, we) => {
                le == null || le(ee), X == null || X(ee, we)
            },
            size: K ? "small" : "middle",
            className: Q(H, V)
        }))
    }, te = i.useMemo(() => {
        const ae = i.createElement("span", {
                className: `${C}-item-ellipsis`
            }, "•••"),
            Z = i.createElement("button", {
                className: `${C}-item-link`,
                type: "button",
                tabIndex: -1
            }, b === "rtl" ? i.createElement(kr, null) : i.createElement(Rr, null)),
            Y = i.createElement("button", {
                className: `${C}-item-link`,
                type: "button",
                tabIndex: -1
            }, b === "rtl" ? i.createElement(Rr, null) : i.createElement(kr, null)),
            me = i.createElement("a", {
                className: `${C}-item-link`
            }, i.createElement("div", {
                className: `${C}-item-container`
            }, b === "rtl" ? i.createElement(Pr, {
                className: `${C}-item-link-icon`
            }) : i.createElement(Or, {
                className: `${C}-item-link-icon`
            }), ae)),
            le = i.createElement("a", {
                className: `${C}-item-link`
            }, i.createElement("div", {
                className: `${C}-item-container`
            }, b === "rtl" ? i.createElement(Or, {
                className: `${C}-item-link-icon`
            }) : i.createElement(Pr, {
                className: `${C}-item-link-icon`
            }), ae));
        return {
            prevIcon: Z,
            nextIcon: Y,
            jumpPrevIcon: me,
            jumpNextIcon: le
        }
    }, [b, C]), ne = g("select", n), de = Q({
        [`${C}-${t}`]: !!t,
        [`${C}-mini`]: K,
        [`${C}-rtl`]: b === "rtl",
        [`${C}-bordered`]: h.wireframe
    }, x, o, a, R, N), Oe = Object.assign(Object.assign({}, w), d);
    return I(i.createElement(i.Fragment, null, h.wireframe && i.createElement(Cl, {
        prefixCls: C
    }), i.createElement(ul, Object.assign({}, te, v, {
        style: Oe,
        prefixCls: C,
        selectPrefixCls: ne,
        className: de,
        locale: P,
        pageSizeOptions: q,
        showSizeChanger: M,
        sizeChangerRender: oe
    }))))
};
var El = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "0 0 1024 1024",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                }
            }]
        },
        name: "caret-down",
        theme: "filled"
    },
    $l = function(t, r) {
        return i.createElement(ut, fe({}, t, {
            ref: r,
            icon: El
        }))
    },
    Nl = i.forwardRef($l),
    Rl = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "0 0 1024 1024",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                }
            }]
        },
        name: "caret-down",
        theme: "outlined"
    },
    kl = function(t, r) {
        return i.createElement(ut, fe({}, t, {
            ref: r,
            icon: Rl
        }))
    },
    Il = i.forwardRef(kl),
    Kl = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "0 0 1024 1024",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
                }
            }]
        },
        name: "caret-up",
        theme: "outlined"
    },
    Ol = function(t, r) {
        return i.createElement(ut, fe({}, t, {
            ref: r,
            icon: Kl
        }))
    },
    Pl = i.forwardRef(Ol),
    Tl = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"
                }
            }]
        },
        name: "file",
        theme: "outlined"
    },
    Dl = function(t, r) {
        return i.createElement(ut, fe({}, t, {
            ref: r,
            icon: Tl
        }))
    },
    No = i.forwardRef(Dl),
    Ml = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z"
                }
            }]
        },
        name: "filter",
        theme: "filled"
    },
    Bl = function(t, r) {
        return i.createElement(ut, fe({}, t, {
            ref: r,
            icon: Ml
        }))
    },
    zl = i.forwardRef(Bl),
    Ll = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"
                }
            }]
        },
        name: "folder-open",
        theme: "outlined"
    },
    _l = function(t, r) {
        return i.createElement(ut, fe({}, t, {
            ref: r,
            icon: Ll
        }))
    },
    Hl = i.forwardRef(_l),
    jl = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"
                }
            }]
        },
        name: "folder",
        theme: "outlined"
    },
    Al = function(t, r) {
        return i.createElement(ut, fe({}, t, {
            ref: r,
            icon: jl
        }))
    },
    Fl = i.forwardRef(Al),
    Wl = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"
                }
            }]
        },
        name: "holder",
        theme: "outlined"
    },
    Vl = function(t, r) {
        return i.createElement(ut, fe({}, t, {
            ref: r,
            icon: Wl
        }))
    },
    ql = i.forwardRef(Vl),
    Xl = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
                }
            }, {
                tag: "path",
                attrs: {
                    d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
                }
            }]
        },
        name: "minus-square",
        theme: "outlined"
    },
    Ul = function(t, r) {
        return i.createElement(ut, fe({}, t, {
            ref: r,
            icon: Xl
        }))
    },
    Gl = i.forwardRef(Ul),
    Yl = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
                }
            }, {
                tag: "path",
                attrs: {
                    d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
                }
            }]
        },
        name: "plus-square",
        theme: "outlined"
    },
    Jl = function(t, r) {
        return i.createElement(ut, fe({}, t, {
            ref: r,
            icon: Yl
        }))
    },
    Ql = i.forwardRef(Jl),
    Ct = {},
    cn = "rc-table-internal-hook";

function er(e) {
    var t = i.createContext(void 0),
        r = function(o) {
            var a = o.value,
                d = o.children,
                l = i.useRef(a);
            l.current = a;
            var c = i.useState(function() {
                    return {
                        getValue: function() {
                            return l.current
                        },
                        listeners: new Set
                    }
                }),
                s = Se(c, 1),
                f = s[0];
            return $t(function() {
                ua.unstable_batchedUpdates(function() {
                    f.listeners.forEach(function(u) {
                        u(a)
                    })
                })
            }, [a]), i.createElement(t.Provider, {
                value: f
            }, d)
        };
    return {
        Context: t,
        Provider: r,
        defaultValue: e
    }
}

function et(e, t) {
    var r = Nt(typeof t == "function" ? t : function(u) {
            if (t === void 0) return u;
            if (!Array.isArray(t)) return u[t];
            var m = {};
            return t.forEach(function(v) {
                m[v] = u[v]
            }), m
        }),
        n = i.useContext(e == null ? void 0 : e.Context),
        o = n || {},
        a = o.listeners,
        d = o.getValue,
        l = i.useRef();
    l.current = r(n ? d() : e == null ? void 0 : e.defaultValue);
    var c = i.useState({}),
        s = Se(c, 2),
        f = s[1];
    return $t(function() {
        if (!n) return;

        function u(m) {
            var v = r(m);
            an(l.current, v, !0) || f({})
        }
        return a.add(u),
            function() {
                a.delete(u)
            }
    }, [n]), l.current
}

function Zl() {
    var e = i.createContext(null);

    function t() {
        return i.useContext(e)
    }

    function r(o, a) {
        var d = xr(o),
            l = function(s, f) {
                var u = d ? {
                        ref: f
                    } : {},
                    m = i.useRef(0),
                    v = i.useRef(s),
                    p = t();
                return p !== null ? i.createElement(o, fe({}, s, u)) : ((!a || a(v.current, s)) && (m.current += 1), v.current = s, i.createElement(e.Provider, {
                    value: m.current
                }, i.createElement(o, fe({}, s, u))))
            };
        return d ? i.forwardRef(l) : l
    }

    function n(o, a) {
        var d = xr(o),
            l = function(s, f) {
                var u = d ? {
                    ref: f
                } : {};
                return t(), i.createElement(o, fe({}, s, u))
            };
        return d ? i.memo(i.forwardRef(l), a) : i.memo(l, a)
    }
    return {
        makeImmutable: r,
        responseImmutable: n,
        useImmutableMark: t
    }
}
var tr = Zl(),
    Ro = tr.makeImmutable,
    Ft = tr.responseImmutable,
    ei = tr.useImmutableMark,
    lt = er(),
    ko = i.createContext({
        renderWithProps: !1
    }),
    ti = "RC_TABLE_KEY";

function ni(e) {
    return e == null ? [] : Array.isArray(e) ? e : [e]
}

function hn(e) {
    var t = [],
        r = {};
    return e.forEach(function(n) {
        for (var o = n || {}, a = o.key, d = o.dataIndex, l = a || ni(d).join("-") || ti; r[l];) l = "".concat(l, "_next");
        r[l] = !0, t.push(l)
    }), t
}

function Mn(e) {
    return e != null
}

function ri(e) {
    return typeof e == "number" && !Number.isNaN(e)
}

function oi(e) {
    return e && vt(e) === "object" && !Array.isArray(e) && !i.isValidElement(e)
}

function ai(e, t, r, n, o, a) {
    var d = i.useContext(ko),
        l = ei(),
        c = po(function() {
            if (Mn(n)) return [n];
            var s = t == null || t === "" ? [] : Array.isArray(t) ? t : [t],
                f = Gn(e, s),
                u = f,
                m = void 0;
            if (o) {
                var v = o(f, e, r);
                oi(v) ? (u = v.children, m = v.props, d.renderWithProps = !0) : u = v
            }
            return [u, m]
        }, [l, e, n, t, o, r], function(s, f) {
            if (a) {
                var u = Se(s, 2),
                    m = u[1],
                    v = Se(f, 2),
                    p = v[1];
                return a(p, m)
            }
            return d.renderWithProps ? !0 : !an(s, f, !0)
        });
    return c
}

function li(e, t, r, n) {
    var o = e + t - 1;
    return e <= n && o >= r
}

function ii(e, t) {
    return et(lt, function(r) {
        var n = li(e, t || 1, r.hoverStartRow, r.hoverEndRow);
        return [n, r.onHover]
    })
}
var si = function(t) {
    var r = t.ellipsis,
        n = t.rowType,
        o = t.children,
        a, d = r === !0 ? {
            showTitle: !0
        } : r;
    return d && (d.showTitle || n === "header") && (typeof o == "string" || typeof o == "number" ? a = o.toString() : i.isValidElement(o) && typeof o.props.children == "string" && (a = o.props.children)), a
};

function ci(e) {
    var t, r, n, o, a, d, l, c, s = e.component,
        f = e.children,
        u = e.ellipsis,
        m = e.scope,
        v = e.prefixCls,
        p = e.className,
        h = e.align,
        g = e.record,
        b = e.render,
        S = e.dataIndex,
        x = e.renderIndex,
        w = e.shouldCellUpdate,
        C = e.index,
        I = e.rowType,
        R = e.colSpan,
        N = e.rowSpan,
        y = e.fixLeft,
        K = e.fixRight,
        T = e.firstFixLeft,
        P = e.lastFixLeft,
        O = e.firstFixRight,
        E = e.lastFixRight,
        $ = e.appendNode,
        k = e.additionalProps,
        M = k === void 0 ? {} : k,
        A = e.isSticky,
        B = "".concat(v, "-cell"),
        q = et(lt, ["supportSticky", "allColumnsFixedLeft", "rowHoverable"]),
        oe = q.supportSticky,
        te = q.allColumnsFixedLeft,
        ne = q.rowHoverable,
        de = ai(g, S, x, f, b, w),
        Oe = Se(de, 2),
        ae = Oe[0],
        Z = Oe[1],
        Y = {},
        me = typeof y == "number" && oe,
        le = typeof K == "number" && oe;
    me && (Y.position = "sticky", Y.left = y), le && (Y.position = "sticky", Y.right = K);
    var pe = (t = (r = (n = Z == null ? void 0 : Z.colSpan) !== null && n !== void 0 ? n : M.colSpan) !== null && r !== void 0 ? r : R) !== null && t !== void 0 ? t : 1,
        H = (o = (a = (d = Z == null ? void 0 : Z.rowSpan) !== null && d !== void 0 ? d : M.rowSpan) !== null && a !== void 0 ? a : N) !== null && o !== void 0 ? o : 1,
        J = ii(C, H),
        V = Se(J, 2),
        X = V[0],
        _ = V[1],
        ee = Nt(function($e) {
            var ie;
            g && _(C, C + H - 1), M == null || (ie = M.onMouseEnter) === null || ie === void 0 || ie.call(M, $e)
        }),
        we = Nt(function($e) {
            var ie;
            g && _(-1, -1), M == null || (ie = M.onMouseLeave) === null || ie === void 0 || ie.call(M, $e)
        });
    if (pe === 0 || H === 0) return null;
    var je = (l = M.title) !== null && l !== void 0 ? l : si({
            rowType: I,
            ellipsis: u,
            children: ae
        }),
        Ie = Q(B, p, (c = {}, D(D(D(D(D(D(D(D(D(D(c, "".concat(B, "-fix-left"), me && oe), "".concat(B, "-fix-left-first"), T && oe), "".concat(B, "-fix-left-last"), P && oe), "".concat(B, "-fix-left-all"), P && te && oe), "".concat(B, "-fix-right"), le && oe), "".concat(B, "-fix-right-first"), O && oe), "".concat(B, "-fix-right-last"), E && oe), "".concat(B, "-ellipsis"), u), "".concat(B, "-with-append"), $), "".concat(B, "-fix-sticky"), (me || le) && A && oe), D(c, "".concat(B, "-row-hover"), !Z && X)), M.className, Z == null ? void 0 : Z.className),
        z = {};
    h && (z.textAlign = h);
    var F = W(W(W(W({}, Z == null ? void 0 : Z.style), Y), z), M.style),
        ve = ae;
    return vt(ve) === "object" && !Array.isArray(ve) && !i.isValidElement(ve) && (ve = null), u && (P || O) && (ve = i.createElement("span", {
        className: "".concat(B, "-content")
    }, ve)), i.createElement(s, fe({}, Z, M, {
        className: Ie,
        style: F,
        title: je,
        scope: m,
        onMouseEnter: ne ? ee : void 0,
        onMouseLeave: ne ? we : void 0,
        colSpan: pe !== 1 ? pe : null,
        rowSpan: H !== 1 ? H : null
    }), $, ve)
}
const Wt = i.memo(ci);

function nr(e, t, r, n, o) {
    var a = r[e] || {},
        d = r[t] || {},
        l, c;
    a.fixed === "left" ? l = n.left[o === "rtl" ? t : e] : d.fixed === "right" && (c = n.right[o === "rtl" ? e : t]);
    var s = !1,
        f = !1,
        u = !1,
        m = !1,
        v = r[t + 1],
        p = r[e - 1],
        h = v && !v.fixed || p && !p.fixed || r.every(function(w) {
            return w.fixed === "left"
        });
    if (o === "rtl") {
        if (l !== void 0) {
            var g = p && p.fixed === "left";
            m = !g && h
        } else if (c !== void 0) {
            var b = v && v.fixed === "right";
            u = !b && h
        }
    } else if (l !== void 0) {
        var S = v && v.fixed === "left";
        s = !S && h
    } else if (c !== void 0) {
        var x = p && p.fixed === "right";
        f = !x && h
    }
    return {
        fixLeft: l,
        fixRight: c,
        lastFixLeft: s,
        firstFixRight: f,
        lastFixRight: u,
        firstFixLeft: m,
        isSticky: n.isSticky
    }
}
var Io = i.createContext({});

function di(e) {
    var t = e.className,
        r = e.index,
        n = e.children,
        o = e.colSpan,
        a = o === void 0 ? 1 : o,
        d = e.rowSpan,
        l = e.align,
        c = et(lt, ["prefixCls", "direction"]),
        s = c.prefixCls,
        f = c.direction,
        u = i.useContext(Io),
        m = u.scrollColumnIndex,
        v = u.stickyOffsets,
        p = u.flattenColumns,
        h = r + a - 1,
        g = h + 1 === m ? a + 1 : a,
        b = nr(r, r + g - 1, p, v, f);
    return i.createElement(Wt, fe({
        className: t,
        index: r,
        component: "td",
        prefixCls: s,
        record: null,
        dataIndex: null,
        align: l,
        colSpan: g,
        rowSpan: d,
        render: function() {
            return n
        }
    }, b))
}
var ui = ["children"];

function fi(e) {
    var t = e.children,
        r = mt(e, ui);
    return i.createElement("tr", r, t)
}

function yn(e) {
    var t = e.children;
    return t
}
yn.Row = fi;
yn.Cell = di;

function vi(e) {
    var t = e.children,
        r = e.stickyOffsets,
        n = e.flattenColumns,
        o = et(lt, "prefixCls"),
        a = n.length - 1,
        d = n[a],
        l = i.useMemo(function() {
            return {
                stickyOffsets: r,
                flattenColumns: n,
                scrollColumnIndex: d != null && d.scrollbar ? a : null
            }
        }, [d, n, a, r]);
    return i.createElement(Io.Provider, {
        value: l
    }, i.createElement("tfoot", {
        className: "".concat(o, "-summary")
    }, t))
}
const un = Ft(vi);
var Ko = yn;

function mi(e) {
    return null
}

function pi(e) {
    return null
}

function Oo(e, t, r, n, o, a, d) {
    var l = a(t, d);
    e.push({
        record: t,
        indent: r,
        index: d,
        rowKey: l
    });
    var c = o == null ? void 0 : o.has(l);
    if (t && Array.isArray(t[n]) && c)
        for (var s = 0; s < t[n].length; s += 1) Oo(e, t[n][s], r + 1, n, o, a, s)
}

function Po(e, t, r, n) {
    var o = i.useMemo(function() {
        if (r != null && r.size) {
            for (var a = [], d = 0; d < (e == null ? void 0 : e.length); d += 1) {
                var l = e[d];
                Oo(a, l, 0, t, r, n, d)
            }
            return a
        }
        return e == null ? void 0 : e.map(function(c, s) {
            return {
                record: c,
                indent: 0,
                index: s,
                rowKey: n(c, s)
            }
        })
    }, [e, t, r, n]);
    return o
}

function To(e, t, r, n) {
    var o = et(lt, ["prefixCls", "fixedInfoList", "flattenColumns", "expandableType", "expandRowByClick", "onTriggerExpand", "rowClassName", "expandedRowClassName", "indentSize", "expandIcon", "expandedRowRender", "expandIconColumnIndex", "expandedKeys", "childrenColumnName", "rowExpandable", "onRow"]),
        a = o.flattenColumns,
        d = o.expandableType,
        l = o.expandedKeys,
        c = o.childrenColumnName,
        s = o.onTriggerExpand,
        f = o.rowExpandable,
        u = o.onRow,
        m = o.expandRowByClick,
        v = o.rowClassName,
        p = d === "nest",
        h = d === "row" && (!f || f(e)),
        g = h || p,
        b = l && l.has(t),
        S = c && e && e[c],
        x = Nt(s),
        w = u == null ? void 0 : u(e, r),
        C = w == null ? void 0 : w.onClick,
        I = function(K) {
            m && g && s(e, K);
            for (var T = arguments.length, P = new Array(T > 1 ? T - 1 : 0), O = 1; O < T; O++) P[O - 1] = arguments[O];
            C == null || C.apply(void 0, [K].concat(P))
        },
        R;
    typeof v == "string" ? R = v : typeof v == "function" && (R = v(e, r, n));
    var N = hn(a);
    return W(W({}, o), {}, {
        columnsKey: N,
        nestExpandable: p,
        expanded: b,
        hasNestChildren: S,
        record: e,
        onTriggerExpand: x,
        rowSupportExpand: h,
        expandable: g,
        rowProps: W(W({}, w), {}, {
            className: Q(R, w == null ? void 0 : w.className),
            onClick: I
        })
    })
}

function Do(e) {
    var t = e.prefixCls,
        r = e.children,
        n = e.component,
        o = e.cellComponent,
        a = e.className,
        d = e.expanded,
        l = e.colSpan,
        c = e.isEmpty,
        s = e.stickyOffset,
        f = s === void 0 ? 0 : s,
        u = et(lt, ["scrollbarSize", "fixHeader", "fixColumn", "componentWidth", "horizonScroll"]),
        m = u.scrollbarSize,
        v = u.fixHeader,
        p = u.fixColumn,
        h = u.componentWidth,
        g = u.horizonScroll,
        b = r;
    return (c ? g && h : p) && (b = i.createElement("div", {
        style: {
            width: h - f - (v && !c ? m : 0),
            position: "sticky",
            left: f,
            overflow: "hidden"
        },
        className: "".concat(t, "-expanded-row-fixed")
    }, b)), i.createElement(n, {
        className: a,
        style: {
            display: d ? null : "none"
        }
    }, i.createElement(Wt, {
        component: o,
        prefixCls: t,
        colSpan: l
    }, b))
}

function gi(e) {
    var t = e.prefixCls,
        r = e.record,
        n = e.onExpand,
        o = e.expanded,
        a = e.expandable,
        d = "".concat(t, "-row-expand-icon");
    if (!a) return i.createElement("span", {
        className: Q(d, "".concat(t, "-row-spaced"))
    });
    var l = function(s) {
        n(r, s), s.stopPropagation()
    };
    return i.createElement("span", {
        className: Q(d, D(D({}, "".concat(t, "-row-expanded"), o), "".concat(t, "-row-collapsed"), !o)),
        onClick: l
    })
}

function hi(e, t, r) {
    var n = [];

    function o(a) {
        (a || []).forEach(function(d, l) {
            n.push(t(d, l)), o(d[r])
        })
    }
    return o(e), n
}

function Mo(e, t, r, n) {
    return typeof e == "string" ? e : typeof e == "function" ? e(t, r, n) : ""
}

function Bo(e, t, r, n, o) {
    var a, d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 0,
        c = e.record,
        s = e.prefixCls,
        f = e.columnsKey,
        u = e.fixedInfoList,
        m = e.expandIconColumnIndex,
        v = e.nestExpandable,
        p = e.indentSize,
        h = e.expandIcon,
        g = e.expanded,
        b = e.hasNestChildren,
        S = e.onTriggerExpand,
        x = e.expandable,
        w = e.expandedKeys,
        C = f[r],
        I = u[r],
        R;
    r === (m || 0) && v && (R = i.createElement(i.Fragment, null, i.createElement("span", {
        style: {
            paddingLeft: "".concat(p * n, "px")
        },
        className: "".concat(s, "-row-indent indent-level-").concat(n)
    }), h({
        prefixCls: s,
        expanded: g,
        expandable: b,
        record: c,
        onExpand: S
    })));
    var N = ((a = t.onCell) === null || a === void 0 ? void 0 : a.call(t, c, o)) || {};
    if (l) {
        var y = N.rowSpan,
            K = y === void 0 ? 1 : y;
        if (x && K && r < l) {
            for (var T = K, P = o; P < o + K; P += 1) {
                var O = d[P];
                w.has(O) && (T += 1)
            }
            N.rowSpan = T
        }
    }
    return {
        key: C,
        fixedInfo: I,
        appendCellNode: R,
        additionalCellProps: N
    }
}

function yi(e) {
    var t = e.className,
        r = e.style,
        n = e.record,
        o = e.index,
        a = e.renderIndex,
        d = e.rowKey,
        l = e.rowKeys,
        c = e.indent,
        s = c === void 0 ? 0 : c,
        f = e.rowComponent,
        u = e.cellComponent,
        m = e.scopeCellComponent,
        v = e.expandedRowInfo,
        p = To(n, d, o, s),
        h = p.prefixCls,
        g = p.flattenColumns,
        b = p.expandedRowClassName,
        S = p.expandedRowRender,
        x = p.rowProps,
        w = p.expanded,
        C = p.rowSupportExpand,
        I = i.useRef(!1);
    I.current || (I.current = w);
    var R = Mo(b, n, o, s),
        N = i.createElement(f, fe({}, x, {
            "data-row-key": d,
            className: Q(t, "".concat(h, "-row"), "".concat(h, "-row-level-").concat(s), x == null ? void 0 : x.className, D({}, R, s >= 1)),
            style: W(W({}, r), x == null ? void 0 : x.style)
        }), g.map(function(T, P) {
            var O = T.render,
                E = T.dataIndex,
                $ = T.className,
                k = Bo(p, T, P, s, o, l, v == null ? void 0 : v.offset),
                M = k.key,
                A = k.fixedInfo,
                B = k.appendCellNode,
                q = k.additionalCellProps;
            return i.createElement(Wt, fe({
                className: $,
                ellipsis: T.ellipsis,
                align: T.align,
                scope: T.rowScope,
                component: T.rowScope ? m : u,
                prefixCls: h,
                key: M,
                record: n,
                index: o,
                renderIndex: a,
                dataIndex: E,
                render: O,
                shouldCellUpdate: T.shouldCellUpdate
            }, A, {
                appendNode: B,
                additionalProps: q
            }))
        })),
        y;
    if (C && (I.current || w)) {
        var K = S(n, o, s + 1, w);
        y = i.createElement(Do, {
            expanded: w,
            className: Q("".concat(h, "-expanded-row"), "".concat(h, "-expanded-row-level-").concat(s + 1), R),
            prefixCls: h,
            component: f,
            cellComponent: u,
            colSpan: v ? v.colSpan : g.length,
            stickyOffset: v == null ? void 0 : v.sticky,
            isEmpty: !1
        }, K)
    }
    return i.createElement(i.Fragment, null, N, y)
}
const bi = Ft(yi);

function xi(e) {
    var t = e.columnKey,
        r = e.onColumnResize,
        n = i.useRef();
    return $t(function() {
        n.current && r(t, n.current.offsetWidth)
    }, []), i.createElement(Yn, {
        data: t
    }, i.createElement("td", {
        ref: n,
        style: {
            padding: 0,
            border: 0,
            height: 0
        }
    }, i.createElement("div", {
        style: {
            height: 0,
            overflow: "hidden"
        }
    }, " ")))
}

function Ci(e) {
    var t = e.prefixCls,
        r = e.columnsKey,
        n = e.onColumnResize,
        o = i.useRef(null);
    return i.createElement("tr", {
        "aria-hidden": "true",
        className: "".concat(t, "-measure-row"),
        style: {
            height: 0,
            fontSize: 0
        },
        ref: o
    }, i.createElement(Yn.Collection, {
        onBatchResize: function(d) {
            fa(o.current) && d.forEach(function(l) {
                var c = l.data,
                    s = l.size;
                n(c, s.offsetWidth)
            })
        }
    }, r.map(function(a) {
        return i.createElement(xi, {
            key: a,
            columnKey: a,
            onColumnResize: n
        })
    })))
}

function Si(e) {
    var t = e.data,
        r = e.measureColumnWidth,
        n = et(lt, ["prefixCls", "getComponent", "onColumnResize", "flattenColumns", "getRowKey", "expandedKeys", "childrenColumnName", "emptyNode", "expandedRowOffset", "fixedInfoList", "colWidths"]),
        o = n.prefixCls,
        a = n.getComponent,
        d = n.onColumnResize,
        l = n.flattenColumns,
        c = n.getRowKey,
        s = n.expandedKeys,
        f = n.childrenColumnName,
        u = n.emptyNode,
        m = n.expandedRowOffset,
        v = m === void 0 ? 0 : m,
        p = n.colWidths,
        h = Po(t, f, s, c),
        g = i.useMemo(function() {
            return h.map(function(y) {
                return y.rowKey
            })
        }, [h]),
        b = i.useRef({
            renderWithProps: !1
        }),
        S = i.useMemo(function() {
            for (var y = l.length - v, K = 0, T = 0; T < v; T += 1) K += p[T] || 0;
            return {
                offset: v,
                colSpan: y,
                sticky: K
            }
        }, [l.length, v, p]),
        x = a(["body", "wrapper"], "tbody"),
        w = a(["body", "row"], "tr"),
        C = a(["body", "cell"], "td"),
        I = a(["body", "cell"], "th"),
        R;
    t.length ? R = h.map(function(y, K) {
        var T = y.record,
            P = y.indent,
            O = y.index,
            E = y.rowKey;
        return i.createElement(bi, {
            key: E,
            rowKey: E,
            rowKeys: g,
            record: T,
            index: K,
            renderIndex: O,
            rowComponent: w,
            cellComponent: C,
            scopeCellComponent: I,
            indent: P,
            expandedRowInfo: S
        })
    }) : R = i.createElement(Do, {
        expanded: !0,
        className: "".concat(o, "-placeholder"),
        prefixCls: o,
        component: w,
        cellComponent: C,
        colSpan: l.length,
        isEmpty: !0
    }, u);
    var N = hn(l);
    return i.createElement(ko.Provider, {
        value: b.current
    }, i.createElement(x, {
        className: "".concat(o, "-tbody")
    }, r && i.createElement(Ci, {
        prefixCls: o,
        columnsKey: N,
        onColumnResize: d
    }), R))
}
const wi = Ft(Si);
var Ei = ["expandable"],
    rn = "RC_TABLE_INTERNAL_COL_DEFINE";

function $i(e) {
    var t = e.expandable,
        r = mt(e, Ei),
        n;
    return "expandable" in e ? n = W(W({}, r), t) : n = r, n.showExpandColumn === !1 && (n.expandIconColumnIndex = -1), n
}
var Ni = ["columnType"];

function zo(e) {
    for (var t = e.colWidths, r = e.columns, n = e.columCount, o = et(lt, ["tableLayout"]), a = o.tableLayout, d = [], l = n || r.length, c = !1, s = l - 1; s >= 0; s -= 1) {
        var f = t[s],
            u = r && r[s],
            m = void 0,
            v = void 0;
        if (u && (m = u[rn], a === "auto" && (v = u.minWidth)), f || v || m || c) {
            var p = m || {};
            p.columnType;
            var h = mt(p, Ni);
            d.unshift(i.createElement("col", fe({
                key: s,
                style: {
                    width: f,
                    minWidth: v
                }
            }, h))), c = !0
        }
    }
    return i.createElement("colgroup", null, d)
}
var Ri = ["className", "noData", "columns", "flattenColumns", "colWidths", "columCount", "stickyOffsets", "direction", "fixHeader", "stickyTopOffset", "stickyBottomOffset", "stickyClassName", "onScroll", "maxContentScroll", "children"];

function ki(e, t) {
    return i.useMemo(function() {
        for (var r = [], n = 0; n < t; n += 1) {
            var o = e[n];
            if (o !== void 0) r[n] = o;
            else return null
        }
        return r
    }, [e.join("_"), t])
}
var Ii = i.forwardRef(function(e, t) {
    var r = e.className,
        n = e.noData,
        o = e.columns,
        a = e.flattenColumns,
        d = e.colWidths,
        l = e.columCount,
        c = e.stickyOffsets,
        s = e.direction,
        f = e.fixHeader,
        u = e.stickyTopOffset,
        m = e.stickyBottomOffset,
        v = e.stickyClassName,
        p = e.onScroll,
        h = e.maxContentScroll,
        g = e.children,
        b = mt(e, Ri),
        S = et(lt, ["prefixCls", "scrollbarSize", "isSticky", "getComponent"]),
        x = S.prefixCls,
        w = S.scrollbarSize,
        C = S.isSticky,
        I = S.getComponent,
        R = I(["header", "table"], "table"),
        N = C && !f ? 0 : w,
        y = i.useRef(null),
        K = i.useCallback(function(A) {
            Cr(t, A), Cr(y, A)
        }, []);
    i.useEffect(function() {
        function A(q) {
            var oe = q,
                te = oe.currentTarget,
                ne = oe.deltaX;
            ne && (p({
                currentTarget: te,
                scrollLeft: te.scrollLeft + ne
            }), q.preventDefault())
        }
        var B = y.current;
        return B == null || B.addEventListener("wheel", A, {
                passive: !1
            }),
            function() {
                B == null || B.removeEventListener("wheel", A)
            }
    }, []);
    var T = i.useMemo(function() {
            return a.every(function(A) {
                return A.width
            })
        }, [a]),
        P = a[a.length - 1],
        O = {
            fixed: P ? P.fixed : null,
            scrollbar: !0,
            onHeaderCell: function() {
                return {
                    className: "".concat(x, "-cell-scrollbar")
                }
            }
        },
        E = i.useMemo(function() {
            return N ? [].concat(Ee(o), [O]) : o
        }, [N, o]),
        $ = i.useMemo(function() {
            return N ? [].concat(Ee(a), [O]) : a
        }, [N, a]),
        k = i.useMemo(function() {
            var A = c.right,
                B = c.left;
            return W(W({}, c), {}, {
                left: s === "rtl" ? [].concat(Ee(B.map(function(q) {
                    return q + N
                })), [0]) : B,
                right: s === "rtl" ? A : [].concat(Ee(A.map(function(q) {
                    return q + N
                })), [0]),
                isSticky: C
            })
        }, [N, c, C]),
        M = ki(d, l);
    return i.createElement("div", {
        style: W({
            overflow: "hidden"
        }, C ? {
            top: u,
            bottom: m
        } : {}),
        ref: K,
        className: Q(r, D({}, v, !!v))
    }, i.createElement(R, {
        style: {
            tableLayout: "fixed",
            visibility: n || M ? null : "hidden"
        }
    }, (!n || !h || T) && i.createElement(zo, {
        colWidths: M ? [].concat(Ee(M), [N]) : [],
        columCount: l + 1,
        columns: $
    }), g(W(W({}, b), {}, {
        stickyOffsets: k,
        columns: E,
        flattenColumns: $
    }))))
});
const Br = i.memo(Ii);
var Ki = function(t) {
    var r = t.cells,
        n = t.stickyOffsets,
        o = t.flattenColumns,
        a = t.rowComponent,
        d = t.cellComponent,
        l = t.onHeaderRow,
        c = t.index,
        s = et(lt, ["prefixCls", "direction"]),
        f = s.prefixCls,
        u = s.direction,
        m;
    l && (m = l(r.map(function(p) {
        return p.column
    }), c));
    var v = hn(r.map(function(p) {
        return p.column
    }));
    return i.createElement(a, m, r.map(function(p, h) {
        var g = p.column,
            b = nr(p.colStart, p.colEnd, o, n, u),
            S;
        return g && g.onHeaderCell && (S = p.column.onHeaderCell(g)), i.createElement(Wt, fe({}, p, {
            scope: g.title ? p.colSpan > 1 ? "colgroup" : "col" : null,
            ellipsis: g.ellipsis,
            align: g.align,
            component: d,
            prefixCls: f,
            key: v[h]
        }, b, {
            additionalProps: S,
            rowType: "header"
        }))
    }))
};

function Oi(e) {
    var t = [];

    function r(d, l) {
        var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        t[c] = t[c] || [];
        var s = l,
            f = d.filter(Boolean).map(function(u) {
                var m = {
                        key: u.key,
                        className: u.className || "",
                        children: u.title,
                        column: u,
                        colStart: s
                    },
                    v = 1,
                    p = u.children;
                return p && p.length > 0 && (v = r(p, s, c + 1).reduce(function(h, g) {
                    return h + g
                }, 0), m.hasSubColumns = !0), "colSpan" in u && (v = u.colSpan), "rowSpan" in u && (m.rowSpan = u.rowSpan), m.colSpan = v, m.colEnd = m.colStart + v - 1, t[c].push(m), s += v, v
            });
        return f
    }
    r(e, 0);
    for (var n = t.length, o = function(l) {
            t[l].forEach(function(c) {
                !("rowSpan" in c) && !c.hasSubColumns && (c.rowSpan = n - l)
            })
        }, a = 0; a < n; a += 1) o(a);
    return t
}
var Pi = function(t) {
    var r = t.stickyOffsets,
        n = t.columns,
        o = t.flattenColumns,
        a = t.onHeaderRow,
        d = et(lt, ["prefixCls", "getComponent"]),
        l = d.prefixCls,
        c = d.getComponent,
        s = i.useMemo(function() {
            return Oi(n)
        }, [n]),
        f = c(["header", "wrapper"], "thead"),
        u = c(["header", "row"], "tr"),
        m = c(["header", "cell"], "th");
    return i.createElement(f, {
        className: "".concat(l, "-thead")
    }, s.map(function(v, p) {
        var h = i.createElement(Ki, {
            key: p,
            flattenColumns: o,
            cells: v,
            stickyOffsets: r,
            rowComponent: u,
            cellComponent: m,
            onHeaderRow: a,
            index: p
        });
        return h
    }))
};
const zr = Ft(Pi);

function Lr(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return typeof t == "number" ? t : t.endsWith("%") ? e * parseFloat(t) / 100 : null
}

function Ti(e, t, r) {
    return i.useMemo(function() {
        if (t && t > 0) {
            var n = 0,
                o = 0;
            e.forEach(function(m) {
                var v = Lr(t, m.width);
                v ? n += v : o += 1
            });
            var a = Math.max(t, r),
                d = Math.max(a - n, o),
                l = o,
                c = d / o,
                s = 0,
                f = e.map(function(m) {
                    var v = W({}, m),
                        p = Lr(t, v.width);
                    if (p) v.width = p;
                    else {
                        var h = Math.floor(c);
                        v.width = l === 1 ? d : h, d -= h, l -= 1
                    }
                    return s += v.width, v
                });
            if (s < a) {
                var u = a / s;
                d = a, f.forEach(function(m, v) {
                    var p = Math.floor(m.width * u);
                    m.width = v === f.length - 1 ? d : p, d -= p
                })
            }
            return [f, Math.max(s, a)]
        }
        return [e, t]
    }, [e, t, r])
}
var Di = ["children"],
    Mi = ["fixed"];

function rr(e) {
    return vo(e).filter(function(t) {
        return i.isValidElement(t)
    }).map(function(t) {
        var r = t.key,
            n = t.props,
            o = n.children,
            a = mt(n, Di),
            d = W({
                key: r
            }, a);
        return o && (d.children = rr(o)), d
    })
}

function Lo(e) {
    return e.filter(function(t) {
        return t && vt(t) === "object" && !t.hidden
    }).map(function(t) {
        var r = t.children;
        return r && r.length > 0 ? W(W({}, t), {}, {
            children: Lo(r)
        }) : t
    })
}

function Bn(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key";
    return e.filter(function(r) {
        return r && vt(r) === "object"
    }).reduce(function(r, n, o) {
        var a = n.fixed,
            d = a === !0 ? "left" : a,
            l = "".concat(t, "-").concat(o),
            c = n.children;
        return c && c.length > 0 ? [].concat(Ee(r), Ee(Bn(c, l).map(function(s) {
            return W({
                fixed: d
            }, s)
        }))) : [].concat(Ee(r), [W(W({
            key: l
        }, n), {}, {
            fixed: d
        })])
    }, [])
}

function Bi(e) {
    return e.map(function(t) {
        var r = t.fixed,
            n = mt(t, Mi),
            o = r;
        return r === "left" ? o = "right" : r === "right" && (o = "left"), W({
            fixed: o
        }, n)
    })
}

function zi(e, t) {
    var r = e.prefixCls,
        n = e.columns,
        o = e.children,
        a = e.expandable,
        d = e.expandedKeys,
        l = e.columnTitle,
        c = e.getRowKey,
        s = e.onTriggerExpand,
        f = e.expandIcon,
        u = e.rowExpandable,
        m = e.expandIconColumnIndex,
        v = e.expandedRowOffset,
        p = v === void 0 ? 0 : v,
        h = e.direction,
        g = e.expandRowByClick,
        b = e.columnWidth,
        S = e.fixed,
        x = e.scrollWidth,
        w = e.clientWidth,
        C = i.useMemo(function() {
            var E = n || rr(o) || [];
            return Lo(E.slice())
        }, [n, o]),
        I = i.useMemo(function() {
            if (a) {
                var E = C.slice();
                if (!E.includes(Ct)) {
                    var $ = m || 0;
                    $ >= 0 && ($ || S === "left" || !S) && E.splice($, 0, Ct), S === "right" && E.splice(C.length, 0, Ct)
                }
                var k = E.indexOf(Ct);
                E = E.filter(function(q, oe) {
                    return q !== Ct || oe === k
                });
                var M = C[k],
                    A;
                S ? A = S : A = M ? M.fixed : null;
                var B = D(D(D(D(D(D({}, rn, {
                    className: "".concat(r, "-expand-icon-col"),
                    columnType: "EXPAND_COLUMN"
                }), "title", l), "fixed", A), "className", "".concat(r, "-row-expand-icon-cell")), "width", b), "render", function(oe, te, ne) {
                    var de = c(te, ne),
                        Oe = d.has(de),
                        ae = u ? u(te) : !0,
                        Z = f({
                            prefixCls: r,
                            expanded: Oe,
                            expandable: ae,
                            record: te,
                            onExpand: s
                        });
                    return g ? i.createElement("span", {
                        onClick: function(me) {
                            return me.stopPropagation()
                        }
                    }, Z) : Z
                });
                return E.map(function(q, oe) {
                    var te = q === Ct ? B : q;
                    return oe < p ? W(W({}, te), {}, {
                        fixed: te.fixed || "left"
                    }) : te
                })
            }
            return C.filter(function(q) {
                return q !== Ct
            })
        }, [a, C, c, d, f, h, p]),
        R = i.useMemo(function() {
            var E = I;
            return t && (E = t(E)), E.length || (E = [{
                render: function() {
                    return null
                }
            }]), E
        }, [t, I, h]),
        N = i.useMemo(function() {
            return h === "rtl" ? Bi(Bn(R)) : Bn(R)
        }, [R, h, x]),
        y = i.useMemo(function() {
            for (var E = -1, $ = N.length - 1; $ >= 0; $ -= 1) {
                var k = N[$].fixed;
                if (k === "left" || k === !0) {
                    E = $;
                    break
                }
            }
            if (E >= 0)
                for (var M = 0; M <= E; M += 1) {
                    var A = N[M].fixed;
                    if (A !== "left" && A !== !0) return !0
                }
            var B = N.findIndex(function(te) {
                var ne = te.fixed;
                return ne === "right"
            });
            if (B >= 0)
                for (var q = B; q < N.length; q += 1) {
                    var oe = N[q].fixed;
                    if (oe !== "right") return !0
                }
            return !1
        }, [N]),
        K = Ti(N, x, w),
        T = Se(K, 2),
        P = T[0],
        O = T[1];
    return [R, P, O, y]
}

function Li(e, t, r) {
    var n = $i(e),
        o = n.expandIcon,
        a = n.expandedRowKeys,
        d = n.defaultExpandedRowKeys,
        l = n.defaultExpandAllRows,
        c = n.expandedRowRender,
        s = n.onExpand,
        f = n.onExpandedRowsChange,
        u = n.childrenColumnName,
        m = o || gi,
        v = u || "children",
        p = i.useMemo(function() {
            return c ? "row" : e.expandable && e.internalHooks === cn && e.expandable.__PARENT_RENDER_ICON__ || t.some(function(C) {
                return C && vt(C) === "object" && C[v]
            }) ? "nest" : !1
        }, [!!c, t]),
        h = i.useState(function() {
            return d || (l ? hi(t, r, v) : [])
        }),
        g = Se(h, 2),
        b = g[0],
        S = g[1],
        x = i.useMemo(function() {
            return new Set(a || b || [])
        }, [a, b]),
        w = i.useCallback(function(C) {
            var I = r(C, t.indexOf(C)),
                R, N = x.has(I);
            N ? (x.delete(I), R = Ee(x)) : R = [].concat(Ee(x), [I]), S(R), s && s(!N, C), f && f(R)
        }, [r, x, t, s, f]);
    return [n, p, x, m, v, w]
}

function _i(e, t, r) {
    var n = e.map(function(o, a) {
        return nr(a, a, e, t, r)
    });
    return po(function() {
        return n
    }, [n], function(o, a) {
        return !an(o, a)
    })
}

function Hi(e) {
    var t = i.useRef(e),
        r = i.useState({}),
        n = Se(r, 2),
        o = n[1],
        a = i.useRef(null),
        d = i.useRef([]);

    function l(c) {
        d.current.push(c);
        var s = Promise.resolve();
        a.current = s, s.then(function() {
            if (a.current === s) {
                var f = d.current,
                    u = t.current;
                d.current = [], f.forEach(function(m) {
                    t.current = m(t.current)
                }), a.current = null, u !== t.current && o({})
            }
        })
    }
    return i.useEffect(function() {
        return function() {
            a.current = null
        }
    }, []), [t.current, l]
}

function ji(e) {
    var t = i.useRef(null),
        r = i.useRef();

    function n() {
        window.clearTimeout(r.current)
    }

    function o(d) {
        t.current = d, n(), r.current = window.setTimeout(function() {
            t.current = null, r.current = void 0
        }, 100)
    }

    function a() {
        return t.current
    }
    return i.useEffect(function() {
        return n
    }, []), [o, a]
}

function Ai() {
    var e = i.useState(-1),
        t = Se(e, 2),
        r = t[0],
        n = t[1],
        o = i.useState(-1),
        a = Se(o, 2),
        d = a[0],
        l = a[1],
        c = i.useCallback(function(s, f) {
            n(s), l(f)
        }, []);
    return [r, d, c]
}
var _r = va() ? window : null;

function Fi(e, t) {
    var r = vt(e) === "object" ? e : {},
        n = r.offsetHeader,
        o = n === void 0 ? 0 : n,
        a = r.offsetSummary,
        d = a === void 0 ? 0 : a,
        l = r.offsetScroll,
        c = l === void 0 ? 0 : l,
        s = r.getContainer,
        f = s === void 0 ? function() {
            return _r
        } : s,
        u = f() || _r,
        m = !!e;
    return i.useMemo(function() {
        return {
            isSticky: m,
            stickyClassName: m ? "".concat(t, "-sticky-holder") : "",
            offsetHeader: o,
            offsetSummary: d,
            offsetScroll: c,
            container: u
        }
    }, [m, c, o, d, t, u])
}

function Wi(e, t, r) {
    var n = i.useMemo(function() {
        var o = t.length,
            a = function(s, f, u) {
                for (var m = [], v = 0, p = s; p !== f; p += u) m.push(v), t[p].fixed && (v += e[p] || 0);
                return m
            },
            d = a(0, o, 1),
            l = a(o - 1, -1, -1).reverse();
        return r === "rtl" ? {
            left: l,
            right: d
        } : {
            left: d,
            right: l
        }
    }, [e, t, r]);
    return n
}

function Hr(e) {
    var t = e.className,
        r = e.children;
    return i.createElement("div", {
        className: t
    }, r)
}

function jr(e) {
    var t = Jn(e),
        r = t.getBoundingClientRect(),
        n = document.documentElement;
    return {
        left: r.left + (window.pageXOffset || n.scrollLeft) - (n.clientLeft || document.body.clientLeft || 0),
        top: r.top + (window.pageYOffset || n.scrollTop) - (n.clientTop || document.body.clientTop || 0)
    }
}
var Vi = function(t, r) {
    var n, o, a = t.scrollBodyRef,
        d = t.onScroll,
        l = t.offsetScroll,
        c = t.container,
        s = t.direction,
        f = et(lt, "prefixCls"),
        u = ((n = a.current) === null || n === void 0 ? void 0 : n.scrollWidth) || 0,
        m = ((o = a.current) === null || o === void 0 ? void 0 : o.clientWidth) || 0,
        v = u && m * (m / u),
        p = i.useRef(),
        h = Hi({
            scrollLeft: 0,
            isHiddenScrollBar: !0
        }),
        g = Se(h, 2),
        b = g[0],
        S = g[1],
        x = i.useRef({
            delta: 0,
            x: 0
        }),
        w = i.useState(!1),
        C = Se(w, 2),
        I = C[0],
        R = C[1],
        N = i.useRef(null);
    i.useEffect(function() {
        return function() {
            tn.cancel(N.current)
        }
    }, []);
    var y = function() {
            R(!1)
        },
        K = function($) {
            $.persist(), x.current.delta = $.pageX - b.scrollLeft, x.current.x = 0, R(!0), $.preventDefault()
        },
        T = function($) {
            var k, M = $ || ((k = window) === null || k === void 0 ? void 0 : k.event),
                A = M.buttons;
            if (!I || A === 0) {
                I && R(!1);
                return
            }
            var B = x.current.x + $.pageX - x.current.x - x.current.delta,
                q = s === "rtl";
            B = Math.max(q ? v - m : 0, Math.min(q ? 0 : m - v, B));
            var oe = !q || Math.abs(B) + Math.abs(v) < m;
            oe && (d({
                scrollLeft: B / m * (u + 2)
            }), x.current.x = $.pageX)
        },
        P = function() {
            tn.cancel(N.current), N.current = tn(function() {
                if (a.current) {
                    var $ = jr(a.current).top,
                        k = $ + a.current.offsetHeight,
                        M = c === window ? document.documentElement.scrollTop + window.innerHeight : jr(c).top + c.clientHeight;
                    k - Sr() <= M || $ >= M - l ? S(function(A) {
                        return W(W({}, A), {}, {
                            isHiddenScrollBar: !0
                        })
                    }) : S(function(A) {
                        return W(W({}, A), {}, {
                            isHiddenScrollBar: !1
                        })
                    })
                }
            })
        },
        O = function($) {
            S(function(k) {
                return W(W({}, k), {}, {
                    scrollLeft: $ / u * m || 0
                })
            })
        };
    return i.useImperativeHandle(r, function() {
        return {
            setScrollLeft: O,
            checkScrollBarVisible: P
        }
    }), i.useEffect(function() {
        var E = Kr(document.body, "mouseup", y, !1),
            $ = Kr(document.body, "mousemove", T, !1);
        return P(),
            function() {
                E.remove(), $.remove()
            }
    }, [v, I]), i.useEffect(function() {
        if (a.current) {
            for (var E = [], $ = Jn(a.current); $;) E.push($), $ = $.parentElement;
            return E.forEach(function(k) {
                    return k.addEventListener("scroll", P, !1)
                }), window.addEventListener("resize", P, !1), window.addEventListener("scroll", P, !1), c.addEventListener("scroll", P, !1),
                function() {
                    E.forEach(function(k) {
                        return k.removeEventListener("scroll", P)
                    }), window.removeEventListener("resize", P), window.removeEventListener("scroll", P), c.removeEventListener("scroll", P)
                }
        }
    }, [c]), i.useEffect(function() {
        b.isHiddenScrollBar || S(function(E) {
            var $ = a.current;
            return $ ? W(W({}, E), {}, {
                scrollLeft: $.scrollLeft / $.scrollWidth * $.clientWidth
            }) : E
        })
    }, [b.isHiddenScrollBar]), u <= m || !v || b.isHiddenScrollBar ? null : i.createElement("div", {
        style: {
            height: Sr(),
            width: m,
            bottom: l
        },
        className: "".concat(f, "-sticky-scroll")
    }, i.createElement("div", {
        onMouseDown: K,
        ref: p,
        className: Q("".concat(f, "-sticky-scroll-bar"), D({}, "".concat(f, "-sticky-scroll-bar-active"), I)),
        style: {
            width: "".concat(v, "px"),
            transform: "translate3d(".concat(b.scrollLeft, "px, 0, 0)")
        }
    }))
};
const qi = i.forwardRef(Vi);
var _o = "rc-table",
    Xi = [],
    Ui = {};

function Gi() {
    return "No Data"
}

function Yi(e, t) {
    var r = W({
            rowKey: "key",
            prefixCls: _o,
            emptyText: Gi
        }, e),
        n = r.prefixCls,
        o = r.className,
        a = r.rowClassName,
        d = r.style,
        l = r.data,
        c = r.rowKey,
        s = r.scroll,
        f = r.tableLayout,
        u = r.direction,
        m = r.title,
        v = r.footer,
        p = r.summary,
        h = r.caption,
        g = r.id,
        b = r.showHeader,
        S = r.components,
        x = r.emptyText,
        w = r.onRow,
        C = r.onHeaderRow,
        I = r.onScroll,
        R = r.internalHooks,
        N = r.transformColumns,
        y = r.internalRefs,
        K = r.tailor,
        T = r.getContainerWidth,
        P = r.sticky,
        O = r.rowHoverable,
        E = O === void 0 ? !0 : O,
        $ = l || Xi,
        k = !!$.length,
        M = R === cn,
        A = i.useCallback(function(ye, Ce) {
            return Gn(S, ye) || Ce
        }, [S]),
        B = i.useMemo(function() {
            return typeof c == "function" ? c : function(ye) {
                var Ce = ye && ye[c];
                return Ce
            }
        }, [c]),
        q = A(["body"]),
        oe = Ai(),
        te = Se(oe, 3),
        ne = te[0],
        de = te[1],
        Oe = te[2],
        ae = Li(r, $, B),
        Z = Se(ae, 6),
        Y = Z[0],
        me = Z[1],
        le = Z[2],
        pe = Z[3],
        H = Z[4],
        J = Z[5],
        V = s == null ? void 0 : s.x,
        X = i.useState(0),
        _ = Se(X, 2),
        ee = _[0],
        we = _[1],
        je = zi(W(W(W({}, r), Y), {}, {
            expandable: !!Y.expandedRowRender,
            columnTitle: Y.columnTitle,
            expandedKeys: le,
            getRowKey: B,
            onTriggerExpand: J,
            expandIcon: pe,
            expandIconColumnIndex: Y.expandIconColumnIndex,
            direction: u,
            scrollWidth: M && K && typeof V == "number" ? V : null,
            clientWidth: ee
        }), M ? N : null),
        Ie = Se(je, 4),
        z = Ie[0],
        F = Ie[1],
        ve = Ie[2],
        $e = Ie[3],
        ie = ve ?? V,
        Pe = i.useMemo(function() {
            return {
                columns: z,
                flattenColumns: F
            }
        }, [z, F]),
        Te = i.useRef(),
        We = i.useRef(),
        ge = i.useRef(),
        st = i.useRef();
    i.useImperativeHandle(t, function() {
        return {
            nativeElement: Te.current,
            scrollTo: function(Ce) {
                var Je;
                if (ge.current instanceof HTMLElement) {
                    var dt = Ce.index,
                        Qe = Ce.top,
                        _t = Ce.key;
                    if (ri(Qe)) {
                        var Tt;
                        (Tt = ge.current) === null || Tt === void 0 || Tt.scrollTo({
                            top: Qe
                        })
                    } else {
                        var Dt, Qt = _t ?? B($[dt]);
                        (Dt = ge.current.querySelector('[data-row-key="'.concat(Qt, '"]'))) === null || Dt === void 0 || Dt.scrollIntoView()
                    }
                } else(Je = ge.current) !== null && Je !== void 0 && Je.scrollTo && ge.current.scrollTo(Ce)
            }
        }
    });
    var G = i.useRef(),
        L = i.useState(!1),
        ce = Se(L, 2),
        Me = ce[0],
        Ke = ce[1],
        Ne = i.useState(!1),
        Le = Se(Ne, 2),
        he = Le[0],
        Be = Le[1],
        rt = i.useState(new Map),
        qe = Se(rt, 2),
        Re = qe[0],
        ht = qe[1],
        ct = hn(F),
        yt = ct.map(function(ye) {
            return Re.get(ye)
        }),
        Fe = i.useMemo(function() {
            return yt
        }, [yt.join("_")]),
        tt = Wi(Fe, F, u),
        Ae = s && Mn(s.y),
        Ge = s && Mn(ie) || !!Y.fixed,
        Ye = Ge && F.some(function(ye) {
            var Ce = ye.fixed;
            return Ce
        }),
        De = i.useRef(),
        _e = Fi(P, n),
        nt = _e.isSticky,
        Xt = _e.offsetHeader,
        Ut = _e.offsetSummary,
        bt = _e.offsetScroll,
        Gt = _e.stickyClassName,
        se = _e.container,
        ue = i.useMemo(function() {
            return p == null ? void 0 : p($)
        }, [p, $]),
        ke = (Ae || nt) && i.isValidElement(ue) && ue.type === yn && ue.props.fixed,
        ze, Ue, ot;
    Ae && (Ue = {
        overflowY: k ? "scroll" : "auto",
        maxHeight: s.y
    }), Ge && (ze = {
        overflowX: "auto"
    }, Ae || (Ue = {
        overflowY: "hidden"
    }), ot = {
        width: ie === !0 ? "auto" : ie,
        minWidth: "100%"
    });
    var at = i.useCallback(function(ye, Ce) {
            ht(function(Je) {
                if (Je.get(ye) !== Ce) {
                    var dt = new Map(Je);
                    return dt.set(ye, Ce), dt
                }
                return Je
            })
        }, []),
        Xe = ji(),
        zt = Se(Xe, 2),
        Yt = zt[0],
        St = zt[1];

    function It(ye, Ce) {
        Ce && (typeof Ce == "function" ? Ce(ye) : Ce.scrollLeft !== ye && (Ce.scrollLeft = ye, Ce.scrollLeft !== ye && setTimeout(function() {
            Ce.scrollLeft = ye
        }, 0)))
    }
    var ft = Nt(function(ye) {
            var Ce = ye.currentTarget,
                Je = ye.scrollLeft,
                dt = u === "rtl",
                Qe = typeof Je == "number" ? Je : Ce.scrollLeft,
                _t = Ce || Ui;
            if (!St() || St() === _t) {
                var Tt;
                Yt(_t), It(Qe, We.current), It(Qe, ge.current), It(Qe, G.current), It(Qe, (Tt = De.current) === null || Tt === void 0 ? void 0 : Tt.setScrollLeft)
            }
            var Dt = Ce || We.current;
            if (Dt) {
                var Qt = M && K && typeof ie == "number" ? ie : Dt.scrollWidth,
                    $n = Dt.clientWidth;
                if (Qt === $n) {
                    Ke(!1), Be(!1);
                    return
                }
                dt ? (Ke(-Qe < Qt - $n), Be(-Qe > 0)) : (Ke(Qe > 0), Be(Qe < Qt - $n))
            }
        }),
        Jt = Nt(function(ye) {
            ft(ye), I == null || I(ye)
        }),
        Kt = function() {
            if (Ge && ge.current) {
                var Ce;
                ft({
                    currentTarget: Jn(ge.current),
                    scrollLeft: (Ce = ge.current) === null || Ce === void 0 ? void 0 : Ce.scrollLeft
                })
            } else Ke(!1), Be(!1)
        },
        Ot = function(Ce) {
            var Je, dt = Ce.width;
            (Je = De.current) === null || Je === void 0 || Je.checkScrollBarVisible();
            var Qe = Te.current ? Te.current.offsetWidth : dt;
            M && T && Te.current && (Qe = T(Te.current, Qe) || Qe), Qe !== ee && (Kt(), we(Qe))
        },
        Lt = i.useRef(!1);
    i.useEffect(function() {
        Lt.current && Kt()
    }, [Ge, l, z.length]), i.useEffect(function() {
        Lt.current = !0
    }, []);
    var xn = i.useState(0),
        re = Se(xn, 2),
        xe = re[0],
        He = re[1],
        pt = i.useState(!0),
        Pt = Se(pt, 2),
        dr = Pt[0],
        ta = Pt[1];
    $t(function() {
        (!K || !M) && (ge.current instanceof Element ? He(wr(ge.current).width) : He(wr(st.current).width)), ta(Ka("position", "sticky"))
    }, []), i.useEffect(function() {
        M && y && (y.body.current = ge.current)
    });
    var na = i.useCallback(function(ye) {
            return i.createElement(i.Fragment, null, i.createElement(zr, ye), ke === "top" && i.createElement(un, ye, ue))
        }, [ke, ue]),
        ra = i.useCallback(function(ye) {
            return i.createElement(un, ye, ue)
        }, [ue]),
        ur = A(["table"], "table"),
        dn = i.useMemo(function() {
            return f || (Ye ? ie === "max-content" ? "auto" : "fixed" : Ae || nt || F.some(function(ye) {
                var Ce = ye.ellipsis;
                return Ce
            }) ? "fixed" : "auto")
        }, [Ae, Ye, F, f, nt]),
        Cn, Sn = {
            colWidths: Fe,
            columCount: F.length,
            stickyOffsets: tt,
            onHeaderRow: C,
            fixHeader: Ae,
            scroll: s
        },
        fr = i.useMemo(function() {
            return k ? null : typeof x == "function" ? x() : x
        }, [k, x]),
        vr = i.createElement(wi, {
            data: $,
            measureColumnWidth: Ae || Ge || nt
        }),
        mr = i.createElement(zo, {
            colWidths: F.map(function(ye) {
                var Ce = ye.width;
                return Ce
            }),
            columns: F
        }),
        pr = h != null ? i.createElement("caption", {
            className: "".concat(n, "-caption")
        }, h) : void 0,
        oa = on(r, {
            data: !0
        }),
        gr = on(r, {
            aria: !0
        });
    if (Ae || nt) {
        var wn;
        typeof q == "function" ? (wn = q($, {
            scrollbarSize: xe,
            ref: ge,
            onScroll: ft
        }), Sn.colWidths = F.map(function(ye, Ce) {
            var Je = ye.width,
                dt = Ce === F.length - 1 ? Je - xe : Je;
            return typeof dt == "number" && !Number.isNaN(dt) ? dt : 0
        })) : wn = i.createElement("div", {
            style: W(W({}, ze), Ue),
            onScroll: Jt,
            ref: ge,
            className: Q("".concat(n, "-body"))
        }, i.createElement(ur, fe({
            style: W(W({}, ot), {}, {
                tableLayout: dn
            })
        }, gr), pr, mr, vr, !ke && ue && i.createElement(un, {
            stickyOffsets: tt,
            flattenColumns: F
        }, ue)));
        var hr = W(W(W({
            noData: !$.length,
            maxContentScroll: Ge && ie === "max-content"
        }, Sn), Pe), {}, {
            direction: u,
            stickyClassName: Gt,
            onScroll: ft
        });
        Cn = i.createElement(i.Fragment, null, b !== !1 && i.createElement(Br, fe({}, hr, {
            stickyTopOffset: Xt,
            className: "".concat(n, "-header"),
            ref: We
        }), na), wn, ke && ke !== "top" && i.createElement(Br, fe({}, hr, {
            stickyBottomOffset: Ut,
            className: "".concat(n, "-summary"),
            ref: G
        }), ra), nt && ge.current && ge.current instanceof Element && i.createElement(qi, {
            ref: De,
            offsetScroll: bt,
            scrollBodyRef: ge,
            onScroll: ft,
            container: se,
            direction: u
        }))
    } else Cn = i.createElement("div", {
        style: W(W({}, ze), Ue),
        className: Q("".concat(n, "-content")),
        onScroll: ft,
        ref: ge
    }, i.createElement(ur, fe({
        style: W(W({}, ot), {}, {
            tableLayout: dn
        })
    }, gr), pr, mr, b !== !1 && i.createElement(zr, fe({}, Sn, Pe)), vr, ue && i.createElement(un, {
        stickyOffsets: tt,
        flattenColumns: F
    }, ue)));
    var En = i.createElement("div", fe({
        className: Q(n, o, D(D(D(D(D(D(D(D(D(D({}, "".concat(n, "-rtl"), u === "rtl"), "".concat(n, "-ping-left"), Me), "".concat(n, "-ping-right"), he), "".concat(n, "-layout-fixed"), f === "fixed"), "".concat(n, "-fixed-header"), Ae), "".concat(n, "-fixed-column"), Ye), "".concat(n, "-fixed-column-gapped"), Ye && $e), "".concat(n, "-scroll-horizontal"), Ge), "".concat(n, "-has-fix-left"), F[0] && F[0].fixed), "".concat(n, "-has-fix-right"), F[F.length - 1] && F[F.length - 1].fixed === "right")),
        style: d,
        id: g,
        ref: Te
    }, oa), m && i.createElement(Hr, {
        className: "".concat(n, "-title")
    }, m($)), i.createElement("div", {
        ref: st,
        className: "".concat(n, "-container")
    }, Cn), v && i.createElement(Hr, {
        className: "".concat(n, "-footer")
    }, v($)));
    Ge && (En = i.createElement(Yn, {
        onResize: Ot
    }, En));
    var yr = _i(F, tt, u),
        aa = i.useMemo(function() {
            return {
                scrollX: ie,
                prefixCls: n,
                getComponent: A,
                scrollbarSize: xe,
                direction: u,
                fixedInfoList: yr,
                isSticky: nt,
                supportSticky: dr,
                componentWidth: ee,
                fixHeader: Ae,
                fixColumn: Ye,
                horizonScroll: Ge,
                tableLayout: dn,
                rowClassName: a,
                expandedRowClassName: Y.expandedRowClassName,
                expandIcon: pe,
                expandableType: me,
                expandRowByClick: Y.expandRowByClick,
                expandedRowRender: Y.expandedRowRender,
                expandedRowOffset: Y.expandedRowOffset,
                onTriggerExpand: J,
                expandIconColumnIndex: Y.expandIconColumnIndex,
                indentSize: Y.indentSize,
                allColumnsFixedLeft: F.every(function(ye) {
                    return ye.fixed === "left"
                }),
                emptyNode: fr,
                columns: z,
                flattenColumns: F,
                onColumnResize: at,
                colWidths: Fe,
                hoverStartRow: ne,
                hoverEndRow: de,
                onHover: Oe,
                rowExpandable: Y.rowExpandable,
                onRow: w,
                getRowKey: B,
                expandedKeys: le,
                childrenColumnName: H,
                rowHoverable: E
            }
        }, [ie, n, A, xe, u, yr, nt, dr, ee, Ae, Ye, Ge, dn, a, Y.expandedRowClassName, pe, me, Y.expandRowByClick, Y.expandedRowRender, Y.expandedRowOffset, J, Y.expandIconColumnIndex, Y.indentSize, fr, z, F, at, Fe, ne, de, Oe, Y.rowExpandable, w, B, le, H, E]);
    return i.createElement(lt.Provider, {
        value: aa
    }, En)
}
var Ji = i.forwardRef(Yi);

function Ho(e) {
    return Ro(Ji, e)
}
var Vt = Ho();
Vt.EXPAND_COLUMN = Ct;
Vt.INTERNAL_HOOKS = cn;
Vt.Column = mi;
Vt.ColumnGroup = pi;
Vt.Summary = Ko;
var or = er(null),
    jo = er(null);

function Qi(e, t, r) {
    var n = t || 1;
    return r[e + n] - (r[e] || 0)
}

function Zi(e) {
    var t = e.rowInfo,
        r = e.column,
        n = e.colIndex,
        o = e.indent,
        a = e.index,
        d = e.component,
        l = e.renderIndex,
        c = e.record,
        s = e.style,
        f = e.className,
        u = e.inverse,
        m = e.getHeight,
        v = r.render,
        p = r.dataIndex,
        h = r.className,
        g = r.width,
        b = et(jo, ["columnsOffset"]),
        S = b.columnsOffset,
        x = Bo(t, r, n, o, a),
        w = x.key,
        C = x.fixedInfo,
        I = x.appendCellNode,
        R = x.additionalCellProps,
        N = R.style,
        y = R.colSpan,
        K = y === void 0 ? 1 : y,
        T = R.rowSpan,
        P = T === void 0 ? 1 : T,
        O = n - 1,
        E = Qi(O, K, S),
        $ = K > 1 ? g - E : 0,
        k = W(W(W({}, N), s), {}, {
            flex: "0 0 ".concat(E, "px"),
            width: "".concat(E, "px"),
            marginRight: $,
            pointerEvents: "auto"
        }),
        M = i.useMemo(function() {
            return u ? P <= 1 : K === 0 || P === 0 || P > 1
        }, [P, K, u]);
    M ? k.visibility = "hidden" : u && (k.height = m == null ? void 0 : m(P));
    var A = M ? function() {
            return null
        } : v,
        B = {};
    return (P === 0 || K === 0) && (B.rowSpan = 1, B.colSpan = 1), i.createElement(Wt, fe({
        className: Q(h, f),
        ellipsis: r.ellipsis,
        align: r.align,
        scope: r.rowScope,
        component: d,
        prefixCls: t.prefixCls,
        key: w,
        record: c,
        index: a,
        renderIndex: l,
        dataIndex: p,
        render: A,
        shouldCellUpdate: r.shouldCellUpdate
    }, C, {
        appendNode: I,
        additionalProps: W(W({}, R), {}, {
            style: k
        }, B)
    }))
}
var es = ["data", "index", "className", "rowKey", "style", "extra", "getHeight"],
    ts = i.forwardRef(function(e, t) {
        var r = e.data,
            n = e.index,
            o = e.className,
            a = e.rowKey,
            d = e.style,
            l = e.extra,
            c = e.getHeight,
            s = mt(e, es),
            f = r.record,
            u = r.indent,
            m = r.index,
            v = et(lt, ["prefixCls", "flattenColumns", "fixColumn", "componentWidth", "scrollX"]),
            p = v.scrollX,
            h = v.flattenColumns,
            g = v.prefixCls,
            b = v.fixColumn,
            S = v.componentWidth,
            x = et(or, ["getComponent"]),
            w = x.getComponent,
            C = To(f, a, n, u),
            I = w(["body", "row"], "div"),
            R = w(["body", "cell"], "div"),
            N = C.rowSupportExpand,
            y = C.expanded,
            K = C.rowProps,
            T = C.expandedRowRender,
            P = C.expandedRowClassName,
            O;
        if (N && y) {
            var E = T(f, n, u + 1, y),
                $ = Mo(P, f, n, u),
                k = {};
            b && (k = {
                style: D({}, "--virtual-width", "".concat(S, "px"))
            });
            var M = "".concat(g, "-expanded-row-cell");
            O = i.createElement(I, {
                className: Q("".concat(g, "-expanded-row"), "".concat(g, "-expanded-row-level-").concat(u + 1), $)
            }, i.createElement(Wt, {
                component: R,
                prefixCls: g,
                className: Q(M, D({}, "".concat(M, "-fixed"), b)),
                additionalProps: k
            }, E))
        }
        var A = W(W({}, d), {}, {
            width: p
        });
        l && (A.position = "absolute", A.pointerEvents = "none");
        var B = i.createElement(I, fe({}, K, s, {
            "data-row-key": a,
            ref: N ? null : t,
            className: Q(o, "".concat(g, "-row"), K == null ? void 0 : K.className, D({}, "".concat(g, "-row-extra"), l)),
            style: W(W({}, A), K == null ? void 0 : K.style)
        }), h.map(function(q, oe) {
            return i.createElement(Zi, {
                key: oe,
                component: R,
                rowInfo: C,
                column: q,
                colIndex: oe,
                indent: u,
                index: n,
                renderIndex: m,
                record: f,
                inverse: l,
                getHeight: c
            })
        }));
        return N ? i.createElement("div", {
            ref: t
        }, B, O) : B
    }),
    Ar = Ft(ts),
    ns = i.forwardRef(function(e, t) {
        var r = e.data,
            n = e.onScroll,
            o = et(lt, ["flattenColumns", "onColumnResize", "getRowKey", "prefixCls", "expandedKeys", "childrenColumnName", "scrollX", "direction"]),
            a = o.flattenColumns,
            d = o.onColumnResize,
            l = o.getRowKey,
            c = o.expandedKeys,
            s = o.prefixCls,
            f = o.childrenColumnName,
            u = o.scrollX,
            m = o.direction,
            v = et(or),
            p = v.sticky,
            h = v.scrollY,
            g = v.listItemHeight,
            b = v.getComponent,
            S = v.onScroll,
            x = i.useRef(),
            w = Po(r, f, c, l),
            C = i.useMemo(function() {
                var O = 0;
                return a.map(function(E) {
                    var $ = E.width,
                        k = E.key;
                    return O += $, [k, $, O]
                })
            }, [a]),
            I = i.useMemo(function() {
                return C.map(function(O) {
                    return O[2]
                })
            }, [C]);
        i.useEffect(function() {
            C.forEach(function(O) {
                var E = Se(O, 2),
                    $ = E[0],
                    k = E[1];
                d($, k)
            })
        }, [C]), i.useImperativeHandle(t, function() {
            var O, E = {
                scrollTo: function(k) {
                    var M;
                    (M = x.current) === null || M === void 0 || M.scrollTo(k)
                },
                nativeElement: (O = x.current) === null || O === void 0 ? void 0 : O.nativeElement
            };
            return Object.defineProperty(E, "scrollLeft", {
                get: function() {
                    var k;
                    return ((k = x.current) === null || k === void 0 ? void 0 : k.getScrollInfo().x) || 0
                },
                set: function(k) {
                    var M;
                    (M = x.current) === null || M === void 0 || M.scrollTo({
                        left: k
                    })
                }
            }), E
        });
        var R = function(E, $) {
                var k, M = (k = w[$]) === null || k === void 0 ? void 0 : k.record,
                    A = E.onCell;
                if (A) {
                    var B, q = A(M, $);
                    return (B = q == null ? void 0 : q.rowSpan) !== null && B !== void 0 ? B : 1
                }
                return 1
            },
            N = function(E) {
                var $ = E.start,
                    k = E.end,
                    M = E.getSize,
                    A = E.offsetY;
                if (k < 0) return null;
                for (var B = a.filter(function(pe) {
                        return R(pe, $) === 0
                    }), q = $, oe = function(H) {
                        if (B = B.filter(function(J) {
                                return R(J, H) === 0
                            }), !B.length) return q = H, 1
                    }, te = $; te >= 0 && !oe(te); te -= 1);
                for (var ne = a.filter(function(pe) {
                        return R(pe, k) !== 1
                    }), de = k, Oe = function(H) {
                        if (ne = ne.filter(function(J) {
                                return R(J, H) !== 1
                            }), !ne.length) return de = Math.max(H - 1, k), 1
                    }, ae = k; ae < w.length && !Oe(ae); ae += 1);
                for (var Z = [], Y = function(H) {
                        var J = w[H];
                        if (!J) return 1;
                        a.some(function(V) {
                            return R(V, H) > 1
                        }) && Z.push(H)
                    }, me = q; me <= de; me += 1) Y(me);
                var le = Z.map(function(pe) {
                    var H = w[pe],
                        J = l(H.record, pe),
                        V = function(ee) {
                            var we = pe + ee - 1,
                                je = l(w[we].record, we),
                                Ie = M(J, je);
                            return Ie.bottom - Ie.top
                        },
                        X = M(J);
                    return i.createElement(Ar, {
                        key: pe,
                        data: H,
                        rowKey: J,
                        index: pe,
                        style: {
                            top: -A + X.top
                        },
                        extra: !0,
                        getHeight: V
                    })
                });
                return le
            },
            y = i.useMemo(function() {
                return {
                    columnsOffset: I
                }
            }, [I]),
            K = "".concat(s, "-tbody"),
            T = b(["body", "wrapper"]),
            P = {};
        return p && (P.position = "sticky", P.bottom = 0, vt(p) === "object" && p.offsetScroll && (P.bottom = p.offsetScroll)), i.createElement(jo.Provider, {
            value: y
        }, i.createElement(ho, {
            fullHeight: !1,
            ref: x,
            prefixCls: "".concat(K, "-virtual"),
            styles: {
                horizontalScrollBar: P
            },
            className: K,
            height: h,
            itemHeight: g || 24,
            data: w,
            itemKey: function(E) {
                return l(E.record)
            },
            component: T,
            scrollWidth: u,
            direction: m,
            onVirtualScroll: function(E) {
                var $, k = E.x;
                n({
                    currentTarget: ($ = x.current) === null || $ === void 0 ? void 0 : $.nativeElement,
                    scrollLeft: k
                })
            },
            onScroll: S,
            extraRender: N
        }, function(O, E, $) {
            var k = l(O.record, E);
            return i.createElement(Ar, {
                data: O,
                rowKey: k,
                index: E,
                style: $.style
            })
        }))
    }),
    rs = Ft(ns),
    os = function(t, r) {
        var n = r.ref,
            o = r.onScroll;
        return i.createElement(rs, {
            ref: n,
            data: t,
            onScroll: o
        })
    };

function as(e, t) {
    var r = e.data,
        n = e.columns,
        o = e.scroll,
        a = e.sticky,
        d = e.prefixCls,
        l = d === void 0 ? _o : d,
        c = e.className,
        s = e.listItemHeight,
        f = e.components,
        u = e.onScroll,
        m = o || {},
        v = m.x,
        p = m.y;
    typeof v != "number" && (v = 1), typeof p != "number" && (p = 500);
    var h = Nt(function(S, x) {
            return Gn(f, S) || x
        }),
        g = Nt(u),
        b = i.useMemo(function() {
            return {
                sticky: a,
                scrollY: p,
                listItemHeight: s,
                getComponent: h,
                onScroll: g
            }
        }, [a, p, s, h, g]);
    return i.createElement(or.Provider, {
        value: b
    }, i.createElement(Vt, fe({}, e, {
        className: Q(c, "".concat(l, "-virtual")),
        scroll: W(W({}, o), {}, {
            x: v
        }),
        components: W(W({}, f), {}, {
            body: r != null && r.length ? os : void 0
        }),
        columns: n,
        internalHooks: cn,
        tailor: !0,
        ref: t
    })))
}
var ls = i.forwardRef(as);

function Ao(e) {
    return Ro(ls, e)
}
Ao();
const is = e => null,
    ss = e => null;
var ar = i.createContext(null),
    cs = i.createContext({}),
    ds = function(t) {
        for (var r = t.prefixCls, n = t.level, o = t.isStart, a = t.isEnd, d = "".concat(r, "-indent-unit"), l = [], c = 0; c < n; c += 1) l.push(i.createElement("span", {
            key: c,
            className: Q(d, D(D({}, "".concat(d, "-start"), o[c]), "".concat(d, "-end"), a[c]))
        }));
        return i.createElement("span", {
            "aria-hidden": "true",
            className: "".concat(r, "-indent")
        }, l)
    };
const us = i.memo(ds);
var fs = ["eventKey", "className", "style", "dragOver", "dragOverGapTop", "dragOverGapBottom", "isLeaf", "isStart", "isEnd", "expanded", "selected", "checked", "halfChecked", "loading", "domRef", "active", "data", "onMouseMove", "selectable"],
    Fr = "open",
    Wr = "close",
    vs = "---",
    ln = function(t) {
        var r, n, o, a = t.eventKey,
            d = t.className,
            l = t.style,
            c = t.dragOver,
            s = t.dragOverGapTop,
            f = t.dragOverGapBottom,
            u = t.isLeaf,
            m = t.isStart,
            v = t.isEnd,
            p = t.expanded,
            h = t.selected,
            g = t.checked,
            b = t.halfChecked,
            S = t.loading,
            x = t.domRef,
            w = t.active,
            C = t.data,
            I = t.onMouseMove,
            R = t.selectable,
            N = mt(t, fs),
            y = U.useContext(ar),
            K = U.useContext(cs),
            T = U.useRef(null),
            P = U.useState(!1),
            O = Se(P, 2),
            E = O[0],
            $ = O[1],
            k = !!(y.disabled || t.disabled || (r = K.nodeDisabled) !== null && r !== void 0 && r.call(K, C)),
            M = U.useMemo(function() {
                return !y.checkable || t.checkable === !1 ? !1 : y.checkable
            }, [y.checkable, t.checkable]),
            A = function(L) {
                k || y.onNodeSelect(L, Ve(t))
            },
            B = function(L) {
                k || !M || t.disableCheckbox || y.onNodeCheck(L, Ve(t), !g)
            },
            q = U.useMemo(function() {
                return typeof R == "boolean" ? R : y.selectable
            }, [R, y.selectable]),
            oe = function(L) {
                y.onNodeClick(L, Ve(t)), q ? A(L) : B(L)
            },
            te = function(L) {
                y.onNodeDoubleClick(L, Ve(t))
            },
            ne = function(L) {
                y.onNodeMouseEnter(L, Ve(t))
            },
            de = function(L) {
                y.onNodeMouseLeave(L, Ve(t))
            },
            Oe = function(L) {
                y.onNodeContextMenu(L, Ve(t))
            },
            ae = U.useMemo(function() {
                return !!(y.draggable && (!y.draggable.nodeDraggable || y.draggable.nodeDraggable(C)))
            }, [y.draggable, C]),
            Z = function(L) {
                L.stopPropagation(), $(!0), y.onNodeDragStart(L, t);
                try {
                    L.dataTransfer.setData("text/plain", "")
                } catch {}
            },
            Y = function(L) {
                L.preventDefault(), L.stopPropagation(), y.onNodeDragEnter(L, t)
            },
            me = function(L) {
                L.preventDefault(), L.stopPropagation(), y.onNodeDragOver(L, t)
            },
            le = function(L) {
                L.stopPropagation(), y.onNodeDragLeave(L, t)
            },
            pe = function(L) {
                L.stopPropagation(), $(!1), y.onNodeDragEnd(L, t)
            },
            H = function(L) {
                L.preventDefault(), L.stopPropagation(), $(!1), y.onNodeDrop(L, t)
            },
            J = function(L) {
                S || y.onNodeExpand(L, Ve(t))
            },
            V = U.useMemo(function() {
                var G = it(y.keyEntities, a) || {},
                    L = G.children;
                return !!(L || []).length
            }, [y.keyEntities, a]),
            X = U.useMemo(function() {
                return u === !1 ? !1 : u || !y.loadData && !V || y.loadData && t.loaded && !V
            }, [u, y.loadData, V, t.loaded]);
        U.useEffect(function() {
            S || typeof y.loadData == "function" && p && !X && !t.loaded && y.onNodeLoad(Ve(t))
        }, [S, y.loadData, y.onNodeLoad, p, X, t]);
        var _ = U.useMemo(function() {
                var G;
                return (G = y.draggable) !== null && G !== void 0 && G.icon ? U.createElement("span", {
                    className: "".concat(y.prefixCls, "-draggable-icon")
                }, y.draggable.icon) : null
            }, [y.draggable]),
            ee = function(L) {
                var ce = t.switcherIcon || y.switcherIcon;
                return typeof ce == "function" ? ce(W(W({}, t), {}, {
                    isLeaf: L
                })) : ce
            },
            we = function() {
                if (X) {
                    var L = ee(!0);
                    return L !== !1 ? U.createElement("span", {
                        className: Q("".concat(y.prefixCls, "-switcher"), "".concat(y.prefixCls, "-switcher-noop"))
                    }, L) : null
                }
                var ce = ee(!1);
                return ce !== !1 ? U.createElement("span", {
                    onClick: J,
                    className: Q("".concat(y.prefixCls, "-switcher"), "".concat(y.prefixCls, "-switcher_").concat(p ? Fr : Wr))
                }, ce) : null
            },
            je = U.useMemo(function() {
                if (!M) return null;
                var G = typeof M != "boolean" ? M : null;
                return U.createElement("span", {
                    className: Q("".concat(y.prefixCls, "-checkbox"), D(D(D({}, "".concat(y.prefixCls, "-checkbox-checked"), g), "".concat(y.prefixCls, "-checkbox-indeterminate"), !g && b), "".concat(y.prefixCls, "-checkbox-disabled"), k || t.disableCheckbox)),
                    onClick: B,
                    role: "checkbox",
                    "aria-checked": b ? "mixed" : g,
                    "aria-disabled": k || t.disableCheckbox,
                    "aria-label": "Select ".concat(typeof t.title == "string" ? t.title : "tree node")
                }, G)
            }, [M, g, b, k, t.disableCheckbox, t.title]),
            Ie = U.useMemo(function() {
                return X ? null : p ? Fr : Wr
            }, [X, p]),
            z = U.useMemo(function() {
                return U.createElement("span", {
                    className: Q("".concat(y.prefixCls, "-iconEle"), "".concat(y.prefixCls, "-icon__").concat(Ie || "docu"), D({}, "".concat(y.prefixCls, "-icon_loading"), S))
                })
            }, [y.prefixCls, Ie, S]),
            F = U.useMemo(function() {
                var G = !!y.draggable,
                    L = !t.disabled && G && y.dragOverNodeKey === a;
                return L ? y.dropIndicatorRender({
                    dropPosition: y.dropPosition,
                    dropLevelOffset: y.dropLevelOffset,
                    indent: y.indent,
                    prefixCls: y.prefixCls,
                    direction: y.direction
                }) : null
            }, [y.dropPosition, y.dropLevelOffset, y.indent, y.prefixCls, y.direction, y.draggable, y.dragOverNodeKey, y.dropIndicatorRender]),
            ve = U.useMemo(function() {
                var G = t.title,
                    L = G === void 0 ? vs : G,
                    ce = "".concat(y.prefixCls, "-node-content-wrapper"),
                    Me;
                if (y.showIcon) {
                    var Ke = t.icon || y.icon;
                    Me = Ke ? U.createElement("span", {
                        className: Q("".concat(y.prefixCls, "-iconEle"), "".concat(y.prefixCls, "-icon__customize"))
                    }, typeof Ke == "function" ? Ke(t) : Ke) : z
                } else y.loadData && S && (Me = z);
                var Ne;
                return typeof L == "function" ? Ne = L(C) : y.titleRender ? Ne = y.titleRender(C) : Ne = L, U.createElement("span", {
                    ref: T,
                    title: typeof L == "string" ? L : "",
                    className: Q(ce, "".concat(ce, "-").concat(Ie || "normal"), D({}, "".concat(y.prefixCls, "-node-selected"), !k && (h || E))),
                    onMouseEnter: ne,
                    onMouseLeave: de,
                    onContextMenu: Oe,
                    onClick: oe,
                    onDoubleClick: te
                }, Me, U.createElement("span", {
                    className: "".concat(y.prefixCls, "-title")
                }, Ne), F)
            }, [y.prefixCls, y.showIcon, t, y.icon, z, y.titleRender, C, Ie, ne, de, Oe, oe, te]),
            $e = on(N, {
                aria: !0,
                data: !0
            }),
            ie = it(y.keyEntities, a) || {},
            Pe = ie.level,
            Te = v[v.length - 1],
            We = !k && ae,
            ge = y.draggingNodeKey === a,
            st = R !== void 0 ? {
                "aria-selected": !!R
            } : void 0;
        return U.createElement("div", fe({
            ref: x,
            role: "treeitem",
            "aria-expanded": u ? void 0 : p,
            className: Q(d, "".concat(y.prefixCls, "-treenode"), (o = {}, D(D(D(D(D(D(D(D(D(D(o, "".concat(y.prefixCls, "-treenode-disabled"), k), "".concat(y.prefixCls, "-treenode-switcher-").concat(p ? "open" : "close"), !u), "".concat(y.prefixCls, "-treenode-checkbox-checked"), g), "".concat(y.prefixCls, "-treenode-checkbox-indeterminate"), b), "".concat(y.prefixCls, "-treenode-selected"), h), "".concat(y.prefixCls, "-treenode-loading"), S), "".concat(y.prefixCls, "-treenode-active"), w), "".concat(y.prefixCls, "-treenode-leaf-last"), Te), "".concat(y.prefixCls, "-treenode-draggable"), ae), "dragging", ge), D(D(D(D(D(D(D(o, "drop-target", y.dropTargetKey === a), "drop-container", y.dropContainerKey === a), "drag-over", !k && c), "drag-over-gap-top", !k && s), "drag-over-gap-bottom", !k && f), "filter-node", (n = y.filterTreeNode) === null || n === void 0 ? void 0 : n.call(y, Ve(t))), "".concat(y.prefixCls, "-treenode-leaf"), X))),
            style: l,
            draggable: We,
            onDragStart: We ? Z : void 0,
            onDragEnter: ae ? Y : void 0,
            onDragOver: ae ? me : void 0,
            onDragLeave: ae ? le : void 0,
            onDrop: ae ? H : void 0,
            onDragEnd: ae ? pe : void 0,
            onMouseMove: I
        }, st, $e), U.createElement(us, {
            prefixCls: y.prefixCls,
            level: Pe,
            isStart: m,
            isEnd: v
        }), _, we(), je, ve)
    };
ln.isTreeNode = 1;

function gt(e, t) {
    if (!e) return [];
    var r = e.slice(),
        n = r.indexOf(t);
    return n >= 0 && r.splice(n, 1), r
}

function xt(e, t) {
    var r = (e || []).slice();
    return r.indexOf(t) === -1 && r.push(t), r
}

function lr(e) {
    return e.split("-")
}

function ms(e, t) {
    var r = [],
        n = it(t, e);

    function o() {
        var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        a.forEach(function(d) {
            var l = d.key,
                c = d.children;
            r.push(l), o(c)
        })
    }
    return o(n.children), r
}

function ps(e) {
    if (e.parent) {
        var t = lr(e.pos);
        return Number(t[t.length - 1]) === e.parent.children.length - 1
    }
    return !1
}

function gs(e) {
    var t = lr(e.pos);
    return Number(t[t.length - 1]) === 0
}

function Vr(e, t, r, n, o, a, d, l, c, s) {
    var f, u = e.clientX,
        m = e.clientY,
        v = e.target.getBoundingClientRect(),
        p = v.top,
        h = v.height,
        g = (s === "rtl" ? -1 : 1) * (((o == null ? void 0 : o.x) || 0) - u),
        b = (g - 12) / n,
        S = c.filter(function(k) {
            var M;
            return (M = l[k]) === null || M === void 0 || (M = M.children) === null || M === void 0 ? void 0 : M.length
        }),
        x = it(l, r.eventKey);
    if (m < p + h / 2) {
        var w = d.findIndex(function(k) {
                return k.key === x.key
            }),
            C = w <= 0 ? 0 : w - 1,
            I = d[C].key;
        x = it(l, I)
    }
    var R = x.key,
        N = x,
        y = x.key,
        K = 0,
        T = 0;
    if (!S.includes(R))
        for (var P = 0; P < b && ps(x); P += 1) x = x.parent, T += 1;
    var O = t.data,
        E = x.node,
        $ = !0;
    return gs(x) && x.level === 0 && m < p + h / 2 && a({
        dragNode: O,
        dropNode: E,
        dropPosition: -1
    }) && x.key === r.eventKey ? K = -1 : (N.children || []).length && S.includes(y) ? a({
        dragNode: O,
        dropNode: E,
        dropPosition: 0
    }) ? K = 0 : $ = !1 : T === 0 ? b > -1.5 ? a({
        dragNode: O,
        dropNode: E,
        dropPosition: 1
    }) ? K = 1 : $ = !1 : a({
        dragNode: O,
        dropNode: E,
        dropPosition: 0
    }) ? K = 0 : a({
        dragNode: O,
        dropNode: E,
        dropPosition: 1
    }) ? K = 1 : $ = !1 : a({
        dragNode: O,
        dropNode: E,
        dropPosition: 1
    }) ? K = 1 : $ = !1, {
        dropPosition: K,
        dropLevelOffset: T,
        dropTargetKey: x.key,
        dropTargetPos: x.pos,
        dragOverNodeKey: y,
        dropContainerKey: K === 0 ? null : ((f = x.parent) === null || f === void 0 ? void 0 : f.key) || null,
        dropAllowed: $
    }
}

function qr(e, t) {
    if (e) {
        var r = t.multiple;
        return r ? e.slice() : e.length ? [e[0]] : e
    }
}

function Rn(e) {
    if (!e) return null;
    var t;
    if (Array.isArray(e)) t = {
        checkedKeys: e,
        halfCheckedKeys: void 0
    };
    else if (vt(e) === "object") t = {
        checkedKeys: e.checked || void 0,
        halfCheckedKeys: e.halfChecked || void 0
    };
    else return Et(!1, "`checkedKeys` is not an array or an object"), null;
    return t
}

function zn(e, t) {
    var r = new Set;

    function n(o) {
        if (!r.has(o)) {
            var a = it(t, o);
            if (a) {
                r.add(o);
                var d = a.parent,
                    l = a.node;
                l.disabled || d && n(d.key)
            }
        }
    }
    return (e || []).forEach(function(o) {
        n(o)
    }), Ee(r)
}

function hs(e) {
    const [t, r] = i.useState(null);
    return [i.useCallback((a, d, l) => {
        const c = t ?? a,
            s = Math.min(c || 0, a),
            f = Math.max(c || 0, a),
            u = d.slice(s, f + 1).map(p => e(p)),
            m = u.some(p => !l.has(p)),
            v = [];
        return u.forEach(p => {
            m ? (l.has(p) || v.push(p), l.add(p)) : (l.delete(p), v.push(p))
        }), r(m ? f : null), v
    }, [t]), a => {
        r(a)
    }]
}
const wt = {},
    Ln = "SELECT_ALL",
    _n = "SELECT_INVERT",
    Hn = "SELECT_NONE",
    Xr = [],
    Fo = (e, t, r = []) => ((t || []).forEach(n => {
        r.push(n), n && typeof n == "object" && e in n && Fo(e, n[e], r)
    }), r),
    ys = (e, t) => {
        const {
            preserveSelectedRowKeys: r,
            selectedRowKeys: n,
            defaultSelectedRowKeys: o,
            getCheckboxProps: a,
            getTitleCheckboxProps: d,
            onChange: l,
            onSelect: c,
            onSelectAll: s,
            onSelectInvert: f,
            onSelectNone: u,
            onSelectMultiple: m,
            columnWidth: v,
            type: p,
            selections: h,
            fixed: g,
            renderCell: b,
            hideSelectAll: S,
            checkStrictly: x = !0
        } = t || {}, {
            prefixCls: w,
            data: C,
            pageData: I,
            getRecordByKey: R,
            getRowKey: N,
            expandType: y,
            childrenColumnName: K,
            locale: T,
            getPopupContainer: P
        } = e, O = Qn(), [E, $] = hs(H => H), [k, M] = Pn(n || o || Xr, {
            value: n
        }), A = i.useRef(new Map), B = i.useCallback(H => {
            if (r) {
                const J = new Map;
                H.forEach(V => {
                    let X = R(V);
                    !X && A.current.has(V) && (X = A.current.get(V)), J.set(V, X)
                }), A.current = J
            }
        }, [R, r]);
        i.useEffect(() => {
            B(k)
        }, [k]);
        const q = i.useMemo(() => Fo(K, I), [K, I]),
            {
                keyEntities: oe
            } = i.useMemo(() => {
                if (x) return {
                    keyEntities: null
                };
                let H = C;
                if (r) {
                    const J = new Set(q.map((X, _) => N(X, _))),
                        V = Array.from(A.current).reduce((X, [_, ee]) => J.has(_) ? X : X.concat(ee), []);
                    H = [].concat(Ee(H), Ee(V))
                }
                return Zn(H, {
                    externalGetKey: N,
                    childrenPropName: K
                })
            }, [C, N, x, K, r, q]),
            te = i.useMemo(() => {
                const H = new Map;
                return q.forEach((J, V) => {
                    const X = N(J, V),
                        _ = (a ? a(J) : null) || {};
                    H.set(X, _)
                }), H
            }, [q, N, a]),
            ne = i.useCallback(H => {
                const J = N(H);
                let V;
                return te.has(J) ? V = te.get(N(H)) : V = a ? a(H) : void 0, !!(V != null && V.disabled)
            }, [te, N]),
            [de, Oe] = i.useMemo(() => {
                if (x) return [k || [],
                    []
                ];
                const {
                    checkedKeys: H,
                    halfCheckedKeys: J
                } = Ht(k, !0, oe, ne);
                return [H || [], J]
            }, [k, x, oe, ne]),
            ae = i.useMemo(() => {
                const H = p === "radio" ? de.slice(0, 1) : de;
                return new Set(H)
            }, [de, p]),
            Z = i.useMemo(() => p === "radio" ? new Set : new Set(Oe), [Oe, p]);
        i.useEffect(() => {
            t || M(Xr)
        }, [!!t]);
        const Y = i.useCallback((H, J) => {
                let V, X;
                B(H), r ? (V = H, X = H.map(_ => A.current.get(_))) : (V = [], X = [], H.forEach(_ => {
                    const ee = R(_);
                    ee !== void 0 && (V.push(_), X.push(ee))
                })), M(V), l == null || l(V, X, {
                    type: J
                })
            }, [M, R, l, r]),
            me = i.useCallback((H, J, V, X) => {
                if (c) {
                    const _ = V.map(ee => R(ee));
                    c(R(H), J, _, X)
                }
                Y(V, "single")
            }, [c, R, Y]),
            le = i.useMemo(() => !h || S ? null : (h === !0 ? [Ln, _n, Hn] : h).map(J => J === Ln ? {
                key: "all",
                text: T.selectionAll,
                onSelect() {
                    Y(C.map((V, X) => N(V, X)).filter(V => {
                        const X = te.get(V);
                        return !(X != null && X.disabled) || ae.has(V)
                    }), "all")
                }
            } : J === _n ? {
                key: "invert",
                text: T.selectInvert,
                onSelect() {
                    const V = new Set(ae);
                    I.forEach((_, ee) => {
                        const we = N(_, ee),
                            je = te.get(we);
                        je != null && je.disabled || (V.has(we) ? V.delete(we) : V.add(we))
                    });
                    const X = Array.from(V);
                    f && (O.deprecated(!1, "onSelectInvert", "onChange"), f(X)), Y(X, "invert")
                }
            } : J === Hn ? {
                key: "none",
                text: T.selectNone,
                onSelect() {
                    u == null || u(), Y(Array.from(ae).filter(V => {
                        const X = te.get(V);
                        return X == null ? void 0 : X.disabled
                    }), "none")
                }
            } : J).map(J => Object.assign(Object.assign({}, J), {
                onSelect: (...V) => {
                    var X, _;
                    (_ = J.onSelect) === null || _ === void 0 || (X = _).call.apply(X, [J].concat(V)), $(null)
                }
            })), [h, ae, I, N, f, Y]);
        return [i.useCallback(H => {
            var J;
            if (!t) return H.filter(G => G !== wt);
            let V = Ee(H);
            const X = new Set(ae),
                _ = q.map(N).filter(G => !te.get(G).disabled),
                ee = _.every(G => X.has(G)),
                we = _.some(G => X.has(G)),
                je = () => {
                    const G = [];
                    ee ? _.forEach(ce => {
                        X.delete(ce), G.push(ce)
                    }) : _.forEach(ce => {
                        X.has(ce) || (X.add(ce), G.push(ce))
                    });
                    const L = Array.from(X);
                    s == null || s(!ee, L.map(ce => R(ce)), G.map(ce => R(ce))), Y(L, "all"), $(null)
                };
            let Ie, z;
            if (p !== "radio") {
                let G;
                if (le) {
                    const Be = {
                        getPopupContainer: P,
                        items: le.map((rt, qe) => {
                            const {
                                key: Re,
                                text: ht,
                                onSelect: ct
                            } = rt;
                            return {
                                key: Re ?? qe,
                                onClick: () => {
                                    ct == null || ct(_)
                                },
                                label: ht
                            }
                        })
                    };
                    G = i.createElement("div", {
                        className: `${w}-selection-extra`
                    }, i.createElement(yo, {
                        menu: Be,
                        getPopupContainer: P
                    }, i.createElement("span", null, i.createElement(Ta, null))))
                }
                const L = q.map((Be, rt) => {
                        const qe = N(Be, rt),
                            Re = te.get(qe) || {};
                        return Object.assign({
                            checked: X.has(qe)
                        }, Re)
                    }).filter(({
                        disabled: Be
                    }) => Be),
                    ce = !!L.length && L.length === q.length,
                    Me = ce && L.every(({
                        checked: Be
                    }) => Be),
                    Ke = ce && L.some(({
                        checked: Be
                    }) => Be),
                    Ne = (d == null ? void 0 : d()) || {},
                    {
                        onChange: Le,
                        disabled: he
                    } = Ne;
                z = i.createElement(vn, Object.assign({
                    "aria-label": G ? "Custom selection" : "Select all"
                }, Ne, {
                    checked: ce ? Me : !!q.length && ee,
                    indeterminate: ce ? !Me && Ke : !ee && we,
                    onChange: Be => {
                        je(), Le == null || Le(Be)
                    },
                    disabled: he ?? (q.length === 0 || ce),
                    skipGroup: !0
                })), Ie = !S && i.createElement("div", {
                    className: `${w}-selection`
                }, z, G)
            }
            let F;
            p === "radio" ? F = (G, L, ce) => {
                const Me = N(L, ce),
                    Ke = X.has(Me),
                    Ne = te.get(Me);
                return {
                    node: i.createElement(bo, Object.assign({}, Ne, {
                        checked: Ke,
                        onClick: Le => {
                            var he;
                            Le.stopPropagation(), (he = Ne == null ? void 0 : Ne.onClick) === null || he === void 0 || he.call(Ne, Le)
                        },
                        onChange: Le => {
                            var he;
                            X.has(Me) || me(Me, !0, [Me], Le.nativeEvent), (he = Ne == null ? void 0 : Ne.onChange) === null || he === void 0 || he.call(Ne, Le)
                        }
                    })),
                    checked: Ke
                }
            } : F = (G, L, ce) => {
                var Me;
                const Ke = N(L, ce),
                    Ne = X.has(Ke),
                    Le = Z.has(Ke),
                    he = te.get(Ke);
                let Be;
                return y === "nest" ? Be = Le : Be = (Me = he == null ? void 0 : he.indeterminate) !== null && Me !== void 0 ? Me : Le, {
                    node: i.createElement(vn, Object.assign({}, he, {
                        indeterminate: Be,
                        checked: Ne,
                        skipGroup: !0,
                        onClick: rt => {
                            var qe;
                            rt.stopPropagation(), (qe = he == null ? void 0 : he.onClick) === null || qe === void 0 || qe.call(he, rt)
                        },
                        onChange: rt => {
                            var qe;
                            const {
                                nativeEvent: Re
                            } = rt, {
                                shiftKey: ht
                            } = Re, ct = _.findIndex(Fe => Fe === Ke), yt = de.some(Fe => _.includes(Fe));
                            if (ht && x && yt) {
                                const Fe = E(ct, _, X),
                                    tt = Array.from(X);
                                m == null || m(!Ne, tt.map(Ae => R(Ae)), Fe.map(Ae => R(Ae))), Y(tt, "multiple")
                            } else {
                                const Fe = de;
                                if (x) {
                                    const tt = Ne ? gt(Fe, Ke) : xt(Fe, Ke);
                                    me(Ke, !Ne, tt, Re)
                                } else {
                                    const tt = Ht([].concat(Ee(Fe), [Ke]), !0, oe, ne),
                                        {
                                            checkedKeys: Ae,
                                            halfCheckedKeys: Ge
                                        } = tt;
                                    let Ye = Ae;
                                    if (Ne) {
                                        const De = new Set(Ae);
                                        De.delete(Ke), Ye = Ht(Array.from(De), {
                                            halfCheckedKeys: Ge
                                        }, oe, ne).checkedKeys
                                    }
                                    me(Ke, !Ne, Ye, Re)
                                }
                            }
                            $(Ne ? null : ct), (qe = he == null ? void 0 : he.onChange) === null || qe === void 0 || qe.call(he, rt)
                        }
                    })),
                    checked: Ne
                }
            };
            const ve = (G, L, ce) => {
                const {
                    node: Me,
                    checked: Ke
                } = F(G, L, ce);
                return b ? b(Ke, L, ce, Me) : Me
            };
            if (!V.includes(wt))
                if (V.findIndex(G => {
                        var L;
                        return ((L = G[rn]) === null || L === void 0 ? void 0 : L.columnType) === "EXPAND_COLUMN"
                    }) === 0) {
                    const [G, ...L] = V;
                    V = [G, wt].concat(Ee(L))
                } else V = [wt].concat(Ee(V));
            const $e = V.indexOf(wt);
            V = V.filter((G, L) => G !== wt || L === $e);
            const ie = V[$e - 1],
                Pe = V[$e + 1];
            let Te = g;
            Te === void 0 && ((Pe == null ? void 0 : Pe.fixed) !== void 0 ? Te = Pe.fixed : (ie == null ? void 0 : ie.fixed) !== void 0 && (Te = ie.fixed)), Te && ie && ((J = ie[rn]) === null || J === void 0 ? void 0 : J.columnType) === "EXPAND_COLUMN" && ie.fixed === void 0 && (ie.fixed = Te);
            const We = Q(`${w}-selection-col`, {
                    [`${w}-selection-col-with-dropdown`]: h && p === "checkbox"
                }),
                ge = () => t != null && t.columnTitle ? typeof t.columnTitle == "function" ? t.columnTitle(z) : t.columnTitle : Ie,
                st = {
                    fixed: Te,
                    width: v,
                    className: `${w}-selection-column`,
                    title: ge(),
                    render: ve,
                    onCell: t.onCell,
                    align: t.align,
                    [rn]: {
                        className: We
                    }
                };
            return V.map(G => G === wt ? st : G)
        }, [N, q, t, de, ae, Z, v, le, y, te, m, me, ne]), ae]
    };

function bs(e, t) {
    return e._antProxy = e._antProxy || {}, Object.keys(t).forEach(r => {
        if (!(r in e._antProxy)) {
            const n = e[r];
            e._antProxy[r] = n, e[r] = t[r]
        }
    }), e
}

function xs(e, t) {
    return i.useImperativeHandle(e, () => {
        const r = t(),
            {
                nativeElement: n
            } = r;
        return typeof Proxy < "u" ? new Proxy(n, {
            get(o, a) {
                return r[a] ? r[a] : Reflect.get(o, a)
            }
        }) : bs(n, r)
    })
}

function Cs(e) {
    return t => {
        const {
            prefixCls: r,
            onExpand: n,
            record: o,
            expanded: a,
            expandable: d
        } = t, l = `${r}-row-expand-icon`;
        return i.createElement("button", {
            type: "button",
            onClick: c => {
                n(o, c), c.stopPropagation()
            },
            className: Q(l, {
                [`${l}-spaced`]: !d,
                [`${l}-expanded`]: d && a,
                [`${l}-collapsed`]: d && !a
            }),
            "aria-label": a ? e.collapse : e.expand,
            "aria-expanded": a
        })
    }
}

function Ss(e) {
    return (r, n) => {
        const o = r.querySelector(`.${e}-container`);
        let a = n;
        if (o) {
            const d = getComputedStyle(o),
                l = parseInt(d.borderLeftWidth, 10),
                c = parseInt(d.borderRightWidth, 10);
            a = n - l - c
        }
        return a
    }
}
const Rt = (e, t) => "key" in e && e.key !== void 0 && e.key !== null ? e.key : e.dataIndex ? Array.isArray(e.dataIndex) ? e.dataIndex.join(".") : e.dataIndex : t;

function qt(e, t) {
    return t ? `${t}-${e}` : `${e}`
}
const bn = (e, t) => typeof e == "function" ? e(t) : e,
    ws = (e, t) => {
        const r = bn(e, t);
        return Object.prototype.toString.call(r) === "[object Object]" ? "" : r
    };

function Es(e) {
    const t = i.useRef(e),
        r = qa();
    return [() => t.current, n => {
        t.current = n, r()
    }]
}
var $s = function(t) {
    var r = t.dropPosition,
        n = t.dropLevelOffset,
        o = t.indent,
        a = {
            pointerEvents: "none",
            position: "absolute",
            right: 0,
            backgroundColor: "red",
            height: 2
        };
    switch (r) {
        case -1:
            a.top = 0, a.left = -n * o;
            break;
        case 1:
            a.bottom = 0, a.left = -n * o;
            break;
        case 0:
            a.bottom = 0, a.left = o;
            break
    }
    return U.createElement("div", {
        style: a
    })
};

function Wo(e) {
    if (e == null) throw new TypeError("Cannot destructure " + e)
}

function Ns(e, t) {
    var r = i.useState(!1),
        n = Se(r, 2),
        o = n[0],
        a = n[1];
    $t(function() {
        if (o) return e(),
            function() {
                t()
            }
    }, [o]), $t(function() {
        return a(!0),
            function() {
                a(!1)
            }
    }, [])
}
var Rs = ["className", "style", "motion", "motionNodes", "motionType", "onMotionStart", "onMotionEnd", "active", "treeNodeRequiredProps"],
    ks = i.forwardRef(function(e, t) {
        var r = e.className,
            n = e.style,
            o = e.motion,
            a = e.motionNodes,
            d = e.motionType,
            l = e.onMotionStart,
            c = e.onMotionEnd,
            s = e.active,
            f = e.treeNodeRequiredProps,
            u = mt(e, Rs),
            m = i.useState(!0),
            v = Se(m, 2),
            p = v[0],
            h = v[1],
            g = i.useContext(ar),
            b = g.prefixCls,
            S = a && d !== "hide";
        $t(function() {
            a && S !== p && h(S)
        }, [a]);
        var x = function() {
                a && l()
            },
            w = i.useRef(!1),
            C = function() {
                a && !w.current && (w.current = !0, c())
            };
        Ns(x, C);
        var I = function(N) {
            S === N && C()
        };
        return a ? i.createElement(ma, fe({
            ref: t,
            visible: p
        }, o, {
            motionAppear: d === "show",
            onVisibleChanged: I
        }), function(R, N) {
            var y = R.className,
                K = R.style;
            return i.createElement("div", {
                ref: N,
                className: Q("".concat(b, "-treenode-motion"), y),
                style: K
            }, a.map(function(T) {
                var P = Object.assign({}, (Wo(T.data), T.data)),
                    O = T.title,
                    E = T.key,
                    $ = T.isStart,
                    k = T.isEnd;
                delete P.children;
                var M = nn(E, f);
                return i.createElement(ln, fe({}, P, M, {
                    title: O,
                    active: s,
                    data: T.data,
                    key: E,
                    isStart: $,
                    isEnd: k
                }))
            }))
        }) : i.createElement(ln, fe({
            domRef: t,
            className: r,
            style: n
        }, u, {
            active: s
        }))
    });

function Is() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
        r = e.length,
        n = t.length;
    if (Math.abs(r - n) !== 1) return {
        add: !1,
        key: null
    };

    function o(a, d) {
        var l = new Map;
        a.forEach(function(s) {
            l.set(s, !0)
        });
        var c = d.filter(function(s) {
            return !l.has(s)
        });
        return c.length === 1 ? c[0] : null
    }
    return r < n ? {
        add: !0,
        key: o(e, t)
    } : {
        add: !1,
        key: o(t, e)
    }
}

function Ur(e, t, r) {
    var n = e.findIndex(function(l) {
            return l.key === r
        }),
        o = e[n + 1],
        a = t.findIndex(function(l) {
            return l.key === r
        });
    if (o) {
        var d = t.findIndex(function(l) {
            return l.key === o.key
        });
        return t.slice(a + 1, d)
    }
    return t.slice(a + 1)
}
var Ks = ["prefixCls", "data", "selectable", "checkable", "expandedKeys", "selectedKeys", "checkedKeys", "loadedKeys", "loadingKeys", "halfCheckedKeys", "keyEntities", "disabled", "dragging", "dragOverNodeKey", "dropPosition", "motion", "height", "itemHeight", "virtual", "scrollWidth", "focusable", "activeItem", "focused", "tabIndex", "onKeyDown", "onFocus", "onBlur", "onActiveChange", "onListChangeStart", "onListChangeEnd"],
    Gr = {
        width: 0,
        height: 0,
        display: "flex",
        overflow: "hidden",
        opacity: 0,
        border: 0,
        padding: 0,
        margin: 0
    },
    Os = function() {},
    Bt = "RC_TREE_MOTION_".concat(Math.random()),
    jn = {
        key: Bt
    },
    Vo = {
        key: Bt,
        level: 0,
        index: 0,
        pos: "0",
        node: jn,
        nodes: [jn]
    },
    Yr = {
        parent: null,
        children: [],
        pos: Vo.pos,
        data: jn,
        title: null,
        key: Bt,
        isStart: [],
        isEnd: []
    };

function Jr(e, t, r, n) {
    return t === !1 || !r ? e : e.slice(0, Math.ceil(r / n) + 1)
}

function Qr(e) {
    var t = e.key,
        r = e.pos;
    return sn(t, r)
}

function Ps(e) {
    for (var t = String(e.data.key), r = e; r.parent;) r = r.parent, t = "".concat(r.data.key, " > ").concat(t);
    return t
}
var Ts = i.forwardRef(function(e, t) {
        var r = e.prefixCls,
            n = e.data;
        e.selectable, e.checkable;
        var o = e.expandedKeys,
            a = e.selectedKeys,
            d = e.checkedKeys,
            l = e.loadedKeys,
            c = e.loadingKeys,
            s = e.halfCheckedKeys,
            f = e.keyEntities,
            u = e.disabled,
            m = e.dragging,
            v = e.dragOverNodeKey,
            p = e.dropPosition,
            h = e.motion,
            g = e.height,
            b = e.itemHeight,
            S = e.virtual,
            x = e.scrollWidth,
            w = e.focusable,
            C = e.activeItem,
            I = e.focused,
            R = e.tabIndex,
            N = e.onKeyDown,
            y = e.onFocus,
            K = e.onBlur,
            T = e.onActiveChange,
            P = e.onListChangeStart,
            O = e.onListChangeEnd,
            E = mt(e, Ks),
            $ = i.useRef(null),
            k = i.useRef(null);
        i.useImperativeHandle(t, function() {
            return {
                scrollTo: function(F) {
                    $.current.scrollTo(F)
                },
                getIndentWidth: function() {
                    return k.current.offsetWidth
                }
            }
        });
        var M = i.useState(o),
            A = Se(M, 2),
            B = A[0],
            q = A[1],
            oe = i.useState(n),
            te = Se(oe, 2),
            ne = te[0],
            de = te[1],
            Oe = i.useState(n),
            ae = Se(Oe, 2),
            Z = ae[0],
            Y = ae[1],
            me = i.useState([]),
            le = Se(me, 2),
            pe = le[0],
            H = le[1],
            J = i.useState(null),
            V = Se(J, 2),
            X = V[0],
            _ = V[1],
            ee = i.useRef(n);
        ee.current = n;

        function we() {
            var z = ee.current;
            de(z), Y(z), H([]), _(null), O()
        }
        $t(function() {
            q(o);
            var z = Is(B, o);
            if (z.key !== null)
                if (z.add) {
                    var F = ne.findIndex(function(We) {
                            var ge = We.key;
                            return ge === z.key
                        }),
                        ve = Jr(Ur(ne, n, z.key), S, g, b),
                        $e = ne.slice();
                    $e.splice(F + 1, 0, Yr), Y($e), H(ve), _("show")
                } else {
                    var ie = n.findIndex(function(We) {
                            var ge = We.key;
                            return ge === z.key
                        }),
                        Pe = Jr(Ur(n, ne, z.key), S, g, b),
                        Te = n.slice();
                    Te.splice(ie + 1, 0, Yr), Y(Te), H(Pe), _("hide")
                }
            else ne !== n && (de(n), Y(n))
        }, [o, n]), i.useEffect(function() {
            m || we()
        }, [m]);
        var je = h ? Z : n,
            Ie = {
                expandedKeys: o,
                selectedKeys: a,
                loadedKeys: l,
                loadingKeys: c,
                checkedKeys: d,
                halfCheckedKeys: s,
                dragOverNodeKey: v,
                dropPosition: p,
                keyEntities: f
            };
        return i.createElement(i.Fragment, null, I && C && i.createElement("span", {
            style: Gr,
            "aria-live": "assertive"
        }, Ps(C)), i.createElement("div", null, i.createElement("input", {
            style: Gr,
            disabled: w === !1 || u,
            tabIndex: w !== !1 ? R : null,
            onKeyDown: N,
            onFocus: y,
            onBlur: K,
            value: "",
            onChange: Os,
            "aria-label": "for screen reader"
        })), i.createElement("div", {
            className: "".concat(r, "-treenode"),
            "aria-hidden": !0,
            style: {
                position: "absolute",
                pointerEvents: "none",
                visibility: "hidden",
                height: 0,
                overflow: "hidden",
                border: 0,
                padding: 0
            }
        }, i.createElement("div", {
            className: "".concat(r, "-indent")
        }, i.createElement("div", {
            ref: k,
            className: "".concat(r, "-indent-unit")
        }))), i.createElement(ho, fe({}, E, {
            data: je,
            itemKey: Qr,
            height: g,
            fullHeight: !1,
            virtual: S,
            itemHeight: b,
            scrollWidth: x,
            prefixCls: "".concat(r, "-list"),
            ref: $,
            role: "tree",
            onVisibleChange: function(F) {
                F.every(function(ve) {
                    return Qr(ve) !== Bt
                }) && we()
            }
        }), function(z) {
            var F = z.pos,
                ve = Object.assign({}, (Wo(z.data), z.data)),
                $e = z.title,
                ie = z.key,
                Pe = z.isStart,
                Te = z.isEnd,
                We = sn(ie, F);
            delete ve.key, delete ve.children;
            var ge = nn(We, Ie);
            return i.createElement(ks, fe({}, ve, ge, {
                title: $e,
                active: !!C && ie === C.key,
                pos: F,
                data: z.data,
                isStart: Pe,
                isEnd: Te,
                motion: h,
                motionNodes: ie === Bt ? pe : null,
                motionType: X,
                onMotionStart: P,
                onMotionEnd: we,
                treeNodeRequiredProps: Ie,
                onMouseMove: function() {
                    T(null)
                }
            }))
        }))
    }),
    Ds = 10,
    ir = (function(e) {
        pa(r, e);
        var t = ga(r);

        function r() {
            var n;
            ha(this, r);
            for (var o = arguments.length, a = new Array(o), d = 0; d < o; d++) a[d] = arguments[d];
            return n = t.call.apply(t, [this].concat(a)), D(be(n), "destroyed", !1), D(be(n), "delayedDragEnterLogic", void 0), D(be(n), "loadingRetryTimes", {}), D(be(n), "state", {
                keyEntities: {},
                indent: null,
                selectedKeys: [],
                checkedKeys: [],
                halfCheckedKeys: [],
                loadedKeys: [],
                loadingKeys: [],
                expandedKeys: [],
                draggingNodeKey: null,
                dragChildrenKeys: [],
                dropTargetKey: null,
                dropPosition: null,
                dropContainerKey: null,
                dropLevelOffset: null,
                dropTargetPos: null,
                dropAllowed: !0,
                dragOverNodeKey: null,
                treeData: [],
                flattenNodes: [],
                focused: !1,
                activeKey: null,
                listChanging: !1,
                prevProps: null,
                fieldNames: At()
            }), D(be(n), "dragStartMousePosition", null), D(be(n), "dragNodeProps", null), D(be(n), "currentMouseOverDroppableNodeKey", null), D(be(n), "listRef", i.createRef()), D(be(n), "onNodeDragStart", function(l, c) {
                var s = n.state,
                    f = s.expandedKeys,
                    u = s.keyEntities,
                    m = n.props.onDragStart,
                    v = c.eventKey;
                n.dragNodeProps = c, n.dragStartMousePosition = {
                    x: l.clientX,
                    y: l.clientY
                };
                var p = gt(f, v);
                n.setState({
                    draggingNodeKey: v,
                    dragChildrenKeys: ms(v, u),
                    indent: n.listRef.current.getIndentWidth()
                }), n.setExpandedKeys(p), window.addEventListener("dragend", n.onWindowDragEnd), m == null || m({
                    event: l,
                    node: Ve(c)
                })
            }), D(be(n), "onNodeDragEnter", function(l, c) {
                var s = n.state,
                    f = s.expandedKeys,
                    u = s.keyEntities,
                    m = s.dragChildrenKeys,
                    v = s.flattenNodes,
                    p = s.indent,
                    h = n.props,
                    g = h.onDragEnter,
                    b = h.onExpand,
                    S = h.allowDrop,
                    x = h.direction,
                    w = c.pos,
                    C = c.eventKey;
                if (n.currentMouseOverDroppableNodeKey !== C && (n.currentMouseOverDroppableNodeKey = C), !n.dragNodeProps) {
                    n.resetDragState();
                    return
                }
                var I = Vr(l, n.dragNodeProps, c, p, n.dragStartMousePosition, S, v, u, f, x),
                    R = I.dropPosition,
                    N = I.dropLevelOffset,
                    y = I.dropTargetKey,
                    K = I.dropContainerKey,
                    T = I.dropTargetPos,
                    P = I.dropAllowed,
                    O = I.dragOverNodeKey;
                if (m.includes(y) || !P) {
                    n.resetDragState();
                    return
                }
                if (n.delayedDragEnterLogic || (n.delayedDragEnterLogic = {}), Object.keys(n.delayedDragEnterLogic).forEach(function(E) {
                        clearTimeout(n.delayedDragEnterLogic[E])
                    }), n.dragNodeProps.eventKey !== c.eventKey && (l.persist(), n.delayedDragEnterLogic[w] = window.setTimeout(function() {
                        if (n.state.draggingNodeKey !== null) {
                            var E = Ee(f),
                                $ = it(u, c.eventKey);
                            $ && ($.children || []).length && (E = xt(f, c.eventKey)), n.props.hasOwnProperty("expandedKeys") || n.setExpandedKeys(E), b == null || b(E, {
                                node: Ve(c),
                                expanded: !0,
                                nativeEvent: l.nativeEvent
                            })
                        }
                    }, 800)), n.dragNodeProps.eventKey === y && N === 0) {
                    n.resetDragState();
                    return
                }
                n.setState({
                    dragOverNodeKey: O,
                    dropPosition: R,
                    dropLevelOffset: N,
                    dropTargetKey: y,
                    dropContainerKey: K,
                    dropTargetPos: T,
                    dropAllowed: P
                }), g == null || g({
                    event: l,
                    node: Ve(c),
                    expandedKeys: f
                })
            }), D(be(n), "onNodeDragOver", function(l, c) {
                var s = n.state,
                    f = s.dragChildrenKeys,
                    u = s.flattenNodes,
                    m = s.keyEntities,
                    v = s.expandedKeys,
                    p = s.indent,
                    h = n.props,
                    g = h.onDragOver,
                    b = h.allowDrop,
                    S = h.direction;
                if (n.dragNodeProps) {
                    var x = Vr(l, n.dragNodeProps, c, p, n.dragStartMousePosition, b, u, m, v, S),
                        w = x.dropPosition,
                        C = x.dropLevelOffset,
                        I = x.dropTargetKey,
                        R = x.dropContainerKey,
                        N = x.dropTargetPos,
                        y = x.dropAllowed,
                        K = x.dragOverNodeKey;
                    f.includes(I) || !y || (n.dragNodeProps.eventKey === I && C === 0 ? n.state.dropPosition === null && n.state.dropLevelOffset === null && n.state.dropTargetKey === null && n.state.dropContainerKey === null && n.state.dropTargetPos === null && n.state.dropAllowed === !1 && n.state.dragOverNodeKey === null || n.resetDragState() : w === n.state.dropPosition && C === n.state.dropLevelOffset && I === n.state.dropTargetKey && R === n.state.dropContainerKey && N === n.state.dropTargetPos && y === n.state.dropAllowed && K === n.state.dragOverNodeKey || n.setState({
                        dropPosition: w,
                        dropLevelOffset: C,
                        dropTargetKey: I,
                        dropContainerKey: R,
                        dropTargetPos: N,
                        dropAllowed: y,
                        dragOverNodeKey: K
                    }), g == null || g({
                        event: l,
                        node: Ve(c)
                    }))
                }
            }), D(be(n), "onNodeDragLeave", function(l, c) {
                n.currentMouseOverDroppableNodeKey === c.eventKey && !l.currentTarget.contains(l.relatedTarget) && (n.resetDragState(), n.currentMouseOverDroppableNodeKey = null);
                var s = n.props.onDragLeave;
                s == null || s({
                    event: l,
                    node: Ve(c)
                })
            }), D(be(n), "onWindowDragEnd", function(l) {
                n.onNodeDragEnd(l, null, !0), window.removeEventListener("dragend", n.onWindowDragEnd)
            }), D(be(n), "onNodeDragEnd", function(l, c) {
                var s = n.props.onDragEnd;
                n.setState({
                    dragOverNodeKey: null
                }), n.cleanDragState(), s == null || s({
                    event: l,
                    node: Ve(c)
                }), n.dragNodeProps = null, window.removeEventListener("dragend", n.onWindowDragEnd)
            }), D(be(n), "onNodeDrop", function(l, c) {
                var s, f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
                    u = n.state,
                    m = u.dragChildrenKeys,
                    v = u.dropPosition,
                    p = u.dropTargetKey,
                    h = u.dropTargetPos,
                    g = u.dropAllowed;
                if (g) {
                    var b = n.props.onDrop;
                    if (n.setState({
                            dragOverNodeKey: null
                        }), n.cleanDragState(), p !== null) {
                        var S = W(W({}, nn(p, n.getTreeNodeRequiredProps())), {}, {
                                active: ((s = n.getActiveItem()) === null || s === void 0 ? void 0 : s.key) === p,
                                data: it(n.state.keyEntities, p).node
                            }),
                            x = m.includes(p);
                        Et(!x, "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
                        var w = lr(h),
                            C = {
                                event: l,
                                node: Ve(S),
                                dragNode: n.dragNodeProps ? Ve(n.dragNodeProps) : null,
                                dragNodesKeys: [n.dragNodeProps.eventKey].concat(m),
                                dropToGap: v !== 0,
                                dropPosition: v + Number(w[w.length - 1])
                            };
                        f || b == null || b(C), n.dragNodeProps = null
                    }
                }
            }), D(be(n), "cleanDragState", function() {
                var l = n.state.draggingNodeKey;
                l !== null && n.setState({
                    draggingNodeKey: null,
                    dropPosition: null,
                    dropContainerKey: null,
                    dropTargetKey: null,
                    dropLevelOffset: null,
                    dropAllowed: !0,
                    dragOverNodeKey: null
                }), n.dragStartMousePosition = null, n.currentMouseOverDroppableNodeKey = null
            }), D(be(n), "triggerExpandActionExpand", function(l, c) {
                var s = n.state,
                    f = s.expandedKeys,
                    u = s.flattenNodes,
                    m = c.expanded,
                    v = c.key,
                    p = c.isLeaf;
                if (!(p || l.shiftKey || l.metaKey || l.ctrlKey)) {
                    var h = u.filter(function(b) {
                            return b.key === v
                        })[0],
                        g = Ve(W(W({}, nn(v, n.getTreeNodeRequiredProps())), {}, {
                            data: h.data
                        }));
                    n.setExpandedKeys(m ? gt(f, v) : xt(f, v)), n.onNodeExpand(l, g)
                }
            }), D(be(n), "onNodeClick", function(l, c) {
                var s = n.props,
                    f = s.onClick,
                    u = s.expandAction;
                u === "click" && n.triggerExpandActionExpand(l, c), f == null || f(l, c)
            }), D(be(n), "onNodeDoubleClick", function(l, c) {
                var s = n.props,
                    f = s.onDoubleClick,
                    u = s.expandAction;
                u === "doubleClick" && n.triggerExpandActionExpand(l, c), f == null || f(l, c)
            }), D(be(n), "onNodeSelect", function(l, c) {
                var s = n.state.selectedKeys,
                    f = n.state,
                    u = f.keyEntities,
                    m = f.fieldNames,
                    v = n.props,
                    p = v.onSelect,
                    h = v.multiple,
                    g = c.selected,
                    b = c[m.key],
                    S = !g;
                S ? h ? s = xt(s, b) : s = [b] : s = gt(s, b);
                var x = s.map(function(w) {
                    var C = it(u, w);
                    return C ? C.node : null
                }).filter(Boolean);
                n.setUncontrolledState({
                    selectedKeys: s
                }), p == null || p(s, {
                    event: "select",
                    selected: S,
                    node: c,
                    selectedNodes: x,
                    nativeEvent: l.nativeEvent
                })
            }), D(be(n), "onNodeCheck", function(l, c, s) {
                var f = n.state,
                    u = f.keyEntities,
                    m = f.checkedKeys,
                    v = f.halfCheckedKeys,
                    p = n.props,
                    h = p.checkStrictly,
                    g = p.onCheck,
                    b = c.key,
                    S, x = {
                        event: "check",
                        node: c,
                        checked: s,
                        nativeEvent: l.nativeEvent
                    };
                if (h) {
                    var w = s ? xt(m, b) : gt(m, b),
                        C = gt(v, b);
                    S = {
                        checked: w,
                        halfChecked: C
                    }, x.checkedNodes = w.map(function(T) {
                        return it(u, T)
                    }).filter(Boolean).map(function(T) {
                        return T.node
                    }), n.setUncontrolledState({
                        checkedKeys: w
                    })
                } else {
                    var I = Ht([].concat(Ee(m), [b]), !0, u),
                        R = I.checkedKeys,
                        N = I.halfCheckedKeys;
                    if (!s) {
                        var y = new Set(R);
                        y.delete(b);
                        var K = Ht(Array.from(y), {
                            halfCheckedKeys: N
                        }, u);
                        R = K.checkedKeys, N = K.halfCheckedKeys
                    }
                    S = R, x.checkedNodes = [], x.checkedNodesPositions = [], x.halfCheckedKeys = N, R.forEach(function(T) {
                        var P = it(u, T);
                        if (P) {
                            var O = P.node,
                                E = P.pos;
                            x.checkedNodes.push(O), x.checkedNodesPositions.push({
                                node: O,
                                pos: E
                            })
                        }
                    }), n.setUncontrolledState({
                        checkedKeys: R
                    }, !1, {
                        halfCheckedKeys: N
                    })
                }
                g == null || g(S, x)
            }), D(be(n), "onNodeLoad", function(l) {
                var c, s = l.key,
                    f = n.state.keyEntities,
                    u = it(f, s);
                if (!(u != null && (c = u.children) !== null && c !== void 0 && c.length)) {
                    var m = new Promise(function(v, p) {
                        n.setState(function(h) {
                            var g = h.loadedKeys,
                                b = g === void 0 ? [] : g,
                                S = h.loadingKeys,
                                x = S === void 0 ? [] : S,
                                w = n.props,
                                C = w.loadData,
                                I = w.onLoad;
                            if (!C || b.includes(s) || x.includes(s)) return null;
                            var R = C(l);
                            return R.then(function() {
                                var N = n.state.loadedKeys,
                                    y = xt(N, s);
                                I == null || I(y, {
                                    event: "load",
                                    node: l
                                }), n.setUncontrolledState({
                                    loadedKeys: y
                                }), n.setState(function(K) {
                                    return {
                                        loadingKeys: gt(K.loadingKeys, s)
                                    }
                                }), v()
                            }).catch(function(N) {
                                if (n.setState(function(K) {
                                        return {
                                            loadingKeys: gt(K.loadingKeys, s)
                                        }
                                    }), n.loadingRetryTimes[s] = (n.loadingRetryTimes[s] || 0) + 1, n.loadingRetryTimes[s] >= Ds) {
                                    var y = n.state.loadedKeys;
                                    Et(!1, "Retry for `loadData` many times but still failed. No more retry."), n.setUncontrolledState({
                                        loadedKeys: xt(y, s)
                                    }), v()
                                }
                                p(N)
                            }), {
                                loadingKeys: xt(x, s)
                            }
                        })
                    });
                    return m.catch(function() {}), m
                }
            }), D(be(n), "onNodeMouseEnter", function(l, c) {
                var s = n.props.onMouseEnter;
                s == null || s({
                    event: l,
                    node: c
                })
            }), D(be(n), "onNodeMouseLeave", function(l, c) {
                var s = n.props.onMouseLeave;
                s == null || s({
                    event: l,
                    node: c
                })
            }), D(be(n), "onNodeContextMenu", function(l, c) {
                var s = n.props.onRightClick;
                s && (l.preventDefault(), s({
                    event: l,
                    node: c
                }))
            }), D(be(n), "onFocus", function() {
                var l = n.props.onFocus;
                n.setState({
                    focused: !0
                });
                for (var c = arguments.length, s = new Array(c), f = 0; f < c; f++) s[f] = arguments[f];
                l == null || l.apply(void 0, s)
            }), D(be(n), "onBlur", function() {
                var l = n.props.onBlur;
                n.setState({
                    focused: !1
                }), n.onActiveChange(null);
                for (var c = arguments.length, s = new Array(c), f = 0; f < c; f++) s[f] = arguments[f];
                l == null || l.apply(void 0, s)
            }), D(be(n), "getTreeNodeRequiredProps", function() {
                var l = n.state,
                    c = l.expandedKeys,
                    s = l.selectedKeys,
                    f = l.loadedKeys,
                    u = l.loadingKeys,
                    m = l.checkedKeys,
                    v = l.halfCheckedKeys,
                    p = l.dragOverNodeKey,
                    h = l.dropPosition,
                    g = l.keyEntities;
                return {
                    expandedKeys: c || [],
                    selectedKeys: s || [],
                    loadedKeys: f || [],
                    loadingKeys: u || [],
                    checkedKeys: m || [],
                    halfCheckedKeys: v || [],
                    dragOverNodeKey: p,
                    dropPosition: h,
                    keyEntities: g
                }
            }), D(be(n), "setExpandedKeys", function(l) {
                var c = n.state,
                    s = c.treeData,
                    f = c.fieldNames,
                    u = Nn(s, l, f);
                n.setUncontrolledState({
                    expandedKeys: l,
                    flattenNodes: u
                }, !0)
            }), D(be(n), "onNodeExpand", function(l, c) {
                var s = n.state.expandedKeys,
                    f = n.state,
                    u = f.listChanging,
                    m = f.fieldNames,
                    v = n.props,
                    p = v.onExpand,
                    h = v.loadData,
                    g = c.expanded,
                    b = c[m.key];
                if (!u) {
                    var S = s.includes(b),
                        x = !g;
                    if (Et(g && S || !g && !S, "Expand state not sync with index check"), s = x ? xt(s, b) : gt(s, b), n.setExpandedKeys(s), p == null || p(s, {
                            node: c,
                            expanded: x,
                            nativeEvent: l.nativeEvent
                        }), x && h) {
                        var w = n.onNodeLoad(c);
                        w && w.then(function() {
                            var C = Nn(n.state.treeData, s, m);
                            n.setUncontrolledState({
                                flattenNodes: C
                            })
                        }).catch(function() {
                            var C = n.state.expandedKeys,
                                I = gt(C, b);
                            n.setExpandedKeys(I)
                        })
                    }
                }
            }), D(be(n), "onListChangeStart", function() {
                n.setUncontrolledState({
                    listChanging: !0
                })
            }), D(be(n), "onListChangeEnd", function() {
                setTimeout(function() {
                    n.setUncontrolledState({
                        listChanging: !1
                    })
                })
            }), D(be(n), "onActiveChange", function(l) {
                var c = n.state.activeKey,
                    s = n.props,
                    f = s.onActiveChange,
                    u = s.itemScrollOffset,
                    m = u === void 0 ? 0 : u;
                c !== l && (n.setState({
                    activeKey: l
                }), l !== null && n.scrollTo({
                    key: l,
                    offset: m
                }), f == null || f(l))
            }), D(be(n), "getActiveItem", function() {
                var l = n.state,
                    c = l.activeKey,
                    s = l.flattenNodes;
                return c === null ? null : s.find(function(f) {
                    var u = f.key;
                    return u === c
                }) || null
            }), D(be(n), "offsetActiveKey", function(l) {
                var c = n.state,
                    s = c.flattenNodes,
                    f = c.activeKey,
                    u = s.findIndex(function(p) {
                        var h = p.key;
                        return h === f
                    });
                u === -1 && l < 0 && (u = s.length), u = (u + l + s.length) % s.length;
                var m = s[u];
                if (m) {
                    var v = m.key;
                    n.onActiveChange(v)
                } else n.onActiveChange(null)
            }), D(be(n), "onKeyDown", function(l) {
                var c = n.state,
                    s = c.activeKey,
                    f = c.expandedKeys,
                    u = c.checkedKeys,
                    m = c.fieldNames,
                    v = n.props,
                    p = v.onKeyDown,
                    h = v.checkable,
                    g = v.selectable;
                switch (l.which) {
                    case Ze.UP: {
                        n.offsetActiveKey(-1), l.preventDefault();
                        break
                    }
                    case Ze.DOWN: {
                        n.offsetActiveKey(1), l.preventDefault();
                        break
                    }
                }
                var b = n.getActiveItem();
                if (b && b.data) {
                    var S = n.getTreeNodeRequiredProps(),
                        x = b.data.isLeaf === !1 || !!(b.data[m.children] || []).length,
                        w = Ve(W(W({}, nn(s, S)), {}, {
                            data: b.data,
                            active: !0
                        }));
                    switch (l.which) {
                        case Ze.LEFT: {
                            x && f.includes(s) ? n.onNodeExpand({}, w) : b.parent && n.onActiveChange(b.parent.key), l.preventDefault();
                            break
                        }
                        case Ze.RIGHT: {
                            x && !f.includes(s) ? n.onNodeExpand({}, w) : b.children && b.children.length && n.onActiveChange(b.children[0].key), l.preventDefault();
                            break
                        }
                        case Ze.ENTER:
                        case Ze.SPACE: {
                            h && !w.disabled && w.checkable !== !1 && !w.disableCheckbox ? n.onNodeCheck({}, w, !u.includes(s)) : !h && g && !w.disabled && w.selectable !== !1 && n.onNodeSelect({}, w);
                            break
                        }
                    }
                }
                p == null || p(l)
            }), D(be(n), "setUncontrolledState", function(l) {
                var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                    s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                if (!n.destroyed) {
                    var f = !1,
                        u = !0,
                        m = {};
                    Object.keys(l).forEach(function(v) {
                        if (n.props.hasOwnProperty(v)) {
                            u = !1;
                            return
                        }
                        f = !0, m[v] = l[v]
                    }), f && (!c || u) && n.setState(W(W({}, m), s))
                }
            }), D(be(n), "scrollTo", function(l) {
                n.listRef.current.scrollTo(l)
            }), n
        }
        return ya(r, [{
            key: "componentDidMount",
            value: function() {
                this.destroyed = !1, this.onUpdated()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.onUpdated()
            }
        }, {
            key: "onUpdated",
            value: function() {
                var o = this.props,
                    a = o.activeKey,
                    d = o.itemScrollOffset,
                    l = d === void 0 ? 0 : d;
                a !== void 0 && a !== this.state.activeKey && (this.setState({
                    activeKey: a
                }), a !== null && this.scrollTo({
                    key: a,
                    offset: l
                }))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                window.removeEventListener("dragend", this.onWindowDragEnd), this.destroyed = !0
            }
        }, {
            key: "resetDragState",
            value: function() {
                this.setState({
                    dragOverNodeKey: null,
                    dropPosition: null,
                    dropLevelOffset: null,
                    dropTargetKey: null,
                    dropContainerKey: null,
                    dropTargetPos: null,
                    dropAllowed: !1
                })
            }
        }, {
            key: "render",
            value: function() {
                var o = this.state,
                    a = o.focused,
                    d = o.flattenNodes,
                    l = o.keyEntities,
                    c = o.draggingNodeKey,
                    s = o.activeKey,
                    f = o.dropLevelOffset,
                    u = o.dropContainerKey,
                    m = o.dropTargetKey,
                    v = o.dropPosition,
                    p = o.dragOverNodeKey,
                    h = o.indent,
                    g = this.props,
                    b = g.prefixCls,
                    S = g.className,
                    x = g.style,
                    w = g.showLine,
                    C = g.focusable,
                    I = g.tabIndex,
                    R = I === void 0 ? 0 : I,
                    N = g.selectable,
                    y = g.showIcon,
                    K = g.icon,
                    T = g.switcherIcon,
                    P = g.draggable,
                    O = g.checkable,
                    E = g.checkStrictly,
                    $ = g.disabled,
                    k = g.motion,
                    M = g.loadData,
                    A = g.filterTreeNode,
                    B = g.height,
                    q = g.itemHeight,
                    oe = g.scrollWidth,
                    te = g.virtual,
                    ne = g.titleRender,
                    de = g.dropIndicatorRender,
                    Oe = g.onContextMenu,
                    ae = g.onScroll,
                    Z = g.direction,
                    Y = g.rootClassName,
                    me = g.rootStyle,
                    le = on(this.props, {
                        aria: !0,
                        data: !0
                    }),
                    pe;
                P && (vt(P) === "object" ? pe = P : typeof P == "function" ? pe = {
                    nodeDraggable: P
                } : pe = {});
                var H = {
                    prefixCls: b,
                    selectable: N,
                    showIcon: y,
                    icon: K,
                    switcherIcon: T,
                    draggable: pe,
                    draggingNodeKey: c,
                    checkable: O,
                    checkStrictly: E,
                    disabled: $,
                    keyEntities: l,
                    dropLevelOffset: f,
                    dropContainerKey: u,
                    dropTargetKey: m,
                    dropPosition: v,
                    dragOverNodeKey: p,
                    indent: h,
                    direction: Z,
                    dropIndicatorRender: de,
                    loadData: M,
                    filterTreeNode: A,
                    titleRender: ne,
                    onNodeClick: this.onNodeClick,
                    onNodeDoubleClick: this.onNodeDoubleClick,
                    onNodeExpand: this.onNodeExpand,
                    onNodeSelect: this.onNodeSelect,
                    onNodeCheck: this.onNodeCheck,
                    onNodeLoad: this.onNodeLoad,
                    onNodeMouseEnter: this.onNodeMouseEnter,
                    onNodeMouseLeave: this.onNodeMouseLeave,
                    onNodeContextMenu: this.onNodeContextMenu,
                    onNodeDragStart: this.onNodeDragStart,
                    onNodeDragEnter: this.onNodeDragEnter,
                    onNodeDragOver: this.onNodeDragOver,
                    onNodeDragLeave: this.onNodeDragLeave,
                    onNodeDragEnd: this.onNodeDragEnd,
                    onNodeDrop: this.onNodeDrop
                };
                return i.createElement(ar.Provider, {
                    value: H
                }, i.createElement("div", {
                    className: Q(b, S, Y, D(D(D({}, "".concat(b, "-show-line"), w), "".concat(b, "-focused"), a), "".concat(b, "-active-focused"), s !== null)),
                    style: me
                }, i.createElement(Ts, fe({
                    ref: this.listRef,
                    prefixCls: b,
                    style: x,
                    data: d,
                    disabled: $,
                    selectable: N,
                    checkable: !!O,
                    motion: k,
                    dragging: c !== null,
                    height: B,
                    itemHeight: q,
                    virtual: te,
                    focusable: C,
                    focused: a,
                    tabIndex: R,
                    activeItem: this.getActiveItem(),
                    onFocus: this.onFocus,
                    onBlur: this.onBlur,
                    onKeyDown: this.onKeyDown,
                    onActiveChange: this.onActiveChange,
                    onListChangeStart: this.onListChangeStart,
                    onListChangeEnd: this.onListChangeEnd,
                    onContextMenu: Oe,
                    onScroll: ae,
                    scrollWidth: oe
                }, this.getTreeNodeRequiredProps(), le))))
            }
        }], [{
            key: "getDerivedStateFromProps",
            value: function(o, a) {
                var d = a.prevProps,
                    l = {
                        prevProps: o
                    };

                function c(R) {
                    return !d && o.hasOwnProperty(R) || d && d[R] !== o[R]
                }
                var s, f = a.fieldNames;
                if (c("fieldNames") && (f = At(o.fieldNames), l.fieldNames = f), c("treeData") ? s = o.treeData : c("children") && (Et(!1, "`children` of Tree is deprecated. Please use `treeData` instead."), s = So(o.children)), s) {
                    l.treeData = s;
                    var u = Zn(s, {
                        fieldNames: f
                    });
                    l.keyEntities = W(D({}, Bt, Vo), u.keyEntities)
                }
                var m = l.keyEntities || a.keyEntities;
                if (c("expandedKeys") || d && c("autoExpandParent")) l.expandedKeys = o.autoExpandParent || !d && o.defaultExpandParent ? zn(o.expandedKeys, m) : o.expandedKeys;
                else if (!d && o.defaultExpandAll) {
                    var v = W({}, m);
                    delete v[Bt];
                    var p = [];
                    Object.keys(v).forEach(function(R) {
                        var N = v[R];
                        N.children && N.children.length && p.push(N.key)
                    }), l.expandedKeys = p
                } else !d && o.defaultExpandedKeys && (l.expandedKeys = o.autoExpandParent || o.defaultExpandParent ? zn(o.defaultExpandedKeys, m) : o.defaultExpandedKeys);
                if (l.expandedKeys || delete l.expandedKeys, s || l.expandedKeys) {
                    var h = Nn(s || a.treeData, l.expandedKeys || a.expandedKeys, f);
                    l.flattenNodes = h
                }
                if (o.selectable && (c("selectedKeys") ? l.selectedKeys = qr(o.selectedKeys, o) : !d && o.defaultSelectedKeys && (l.selectedKeys = qr(o.defaultSelectedKeys, o))), o.checkable) {
                    var g;
                    if (c("checkedKeys") ? g = Rn(o.checkedKeys) || {} : !d && o.defaultCheckedKeys ? g = Rn(o.defaultCheckedKeys) || {} : s && (g = Rn(o.checkedKeys) || {
                            checkedKeys: a.checkedKeys,
                            halfCheckedKeys: a.halfCheckedKeys
                        }), g) {
                        var b = g,
                            S = b.checkedKeys,
                            x = S === void 0 ? [] : S,
                            w = b.halfCheckedKeys,
                            C = w === void 0 ? [] : w;
                        if (!o.checkStrictly) {
                            var I = Ht(x, !0, m);
                            x = I.checkedKeys, C = I.halfCheckedKeys
                        }
                        l.checkedKeys = x, l.halfCheckedKeys = C
                    }
                }
                return c("loadedKeys") && (l.loadedKeys = o.loadedKeys), l
            }
        }]), r
    })(i.Component);
D(ir, "defaultProps", {
    prefixCls: "rc-tree",
    showLine: !1,
    showIcon: !0,
    selectable: !0,
    multiple: !1,
    checkable: !1,
    disabled: !1,
    checkStrictly: !1,
    draggable: !1,
    defaultExpandParent: !0,
    autoExpandParent: !1,
    defaultExpandAll: !1,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: [],
    dropIndicatorRender: $s,
    allowDrop: function() {
        return !0
    },
    expandAction: !1
});
D(ir, "TreeNode", ln);
const Ms = ({
        treeCls: e,
        treeNodeCls: t,
        directoryNodeSelectedBg: r,
        directoryNodeSelectedColor: n,
        motionDurationMid: o,
        borderRadius: a,
        controlItemBgHover: d
    }) => ({
        [`${e}${e}-directory ${t}`]: {
            [`${e}-node-content-wrapper`]: {
                position: "static",
                [`&:has(${e}-drop-indicator)`]: {
                    position: "relative"
                },
                [`> *:not(${e}-drop-indicator)`]: {
                    position: "relative"
                },
                "&:hover": {
                    background: "transparent"
                },
                "&:before": {
                    position: "absolute",
                    inset: 0,
                    transition: `background-color ${o}`,
                    content: '""',
                    borderRadius: a
                },
                "&:hover:before": {
                    background: d
                }
            },
            [`${e}-switcher, ${e}-checkbox, ${e}-draggable-icon`]: {
                zIndex: 1
            },
            "&-selected": {
                background: r,
                borderRadius: a,
                [`${e}-switcher, ${e}-draggable-icon`]: {
                    color: n
                },
                [`${e}-node-content-wrapper`]: {
                    color: n,
                    background: "transparent",
                    "&:before, &:hover:before": {
                        background: r
                    }
                }
            }
        }
    }),
    Bs = new ba("ant-tree-node-fx-do-not-use", {
        "0%": {
            opacity: 0
        },
        "100%": {
            opacity: 1
        }
    }),
    zs = (e, t) => ({
        [`.${e}-switcher-icon`]: {
            display: "inline-block",
            fontSize: 10,
            verticalAlign: "baseline",
            svg: {
                transition: `transform ${t.motionDurationSlow}`
            }
        }
    }),
    Ls = (e, t) => ({
        [`.${e}-drop-indicator`]: {
            position: "absolute",
            zIndex: 1,
            height: 2,
            backgroundColor: t.colorPrimary,
            borderRadius: 1,
            pointerEvents: "none",
            "&:after": {
                position: "absolute",
                top: -3,
                insetInlineStart: -6,
                width: 8,
                height: 8,
                backgroundColor: "transparent",
                border: `${j(t.lineWidthBold)} solid ${t.colorPrimary}`,
                borderRadius: "50%",
                content: '""'
            }
        }
    }),
    _s = (e, t) => {
        const {
            treeCls: r,
            treeNodeCls: n,
            treeNodePadding: o,
            titleHeight: a,
            indentSize: d,
            nodeSelectedBg: l,
            nodeHoverBg: c,
            colorTextQuaternary: s,
            controlItemBgActiveDisabled: f
        } = t;
        return {
            [r]: Object.assign(Object.assign({}, pn(t)), {
                "--rc-virtual-list-scrollbar-bg": t.colorSplit,
                background: t.colorBgContainer,
                borderRadius: t.borderRadius,
                transition: `background-color ${t.motionDurationSlow}`,
                "&-rtl": {
                    direction: "rtl"
                },
                [`&${r}-rtl ${r}-switcher_close ${r}-switcher-icon svg`]: {
                    transform: "rotate(90deg)"
                },
                [`&-focused:not(:hover):not(${r}-active-focused)`]: Tn(t),
                [`${r}-list-holder-inner`]: {
                    alignItems: "flex-start"
                },
                [`&${r}-block-node`]: {
                    [`${r}-list-holder-inner`]: {
                        alignItems: "stretch",
                        [`${r}-node-content-wrapper`]: {
                            flex: "auto"
                        },
                        [`${n}.dragging:after`]: {
                            position: "absolute",
                            inset: 0,
                            border: `1px solid ${t.colorPrimary}`,
                            opacity: 0,
                            animationName: Bs,
                            animationDuration: t.motionDurationSlow,
                            animationPlayState: "running",
                            animationFillMode: "forwards",
                            content: '""',
                            pointerEvents: "none",
                            borderRadius: t.borderRadius
                        }
                    }
                },
                [n]: {
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: o,
                    lineHeight: j(a),
                    position: "relative",
                    "&:before": {
                        content: '""',
                        position: "absolute",
                        zIndex: 1,
                        insetInlineStart: 0,
                        width: "100%",
                        top: "100%",
                        height: o
                    },
                    [`&-disabled ${r}-node-content-wrapper`]: {
                        color: t.colorTextDisabled,
                        cursor: "not-allowed",
                        "&:hover": {
                            background: "transparent"
                        }
                    },
                    [`${r}-checkbox-disabled + ${r}-node-selected,&${n}-disabled${n}-selected ${r}-node-content-wrapper`]: {
                        backgroundColor: f
                    },
                    [`${r}-checkbox-disabled`]: {
                        pointerEvents: "unset"
                    },
                    [`&:not(${n}-disabled)`]: {
                        [`${r}-node-content-wrapper`]: {
                            "&:hover": {
                                color: t.nodeHoverColor
                            }
                        }
                    },
                    [`&-active ${r}-node-content-wrapper`]: {
                        background: t.controlItemBgHover
                    },
                    [`&:not(${n}-disabled).filter-node ${r}-title`]: {
                        color: t.colorPrimary,
                        fontWeight: t.fontWeightStrong
                    },
                    "&-draggable": {
                        cursor: "grab",
                        [`${r}-draggable-icon`]: {
                            flexShrink: 0,
                            width: a,
                            textAlign: "center",
                            visibility: "visible",
                            color: s
                        },
                        [`&${n}-disabled ${r}-draggable-icon`]: {
                            visibility: "hidden"
                        }
                    }
                },
                [`${r}-indent`]: {
                    alignSelf: "stretch",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                    "&-unit": {
                        display: "inline-block",
                        width: d
                    }
                },
                [`${r}-draggable-icon`]: {
                    visibility: "hidden"
                },
                [`${r}-switcher, ${r}-checkbox`]: {
                    marginInlineEnd: t.calc(t.calc(a).sub(t.controlInteractiveSize)).div(2).equal()
                },
                [`${r}-switcher`]: Object.assign(Object.assign({}, zs(e, t)), {
                    position: "relative",
                    flex: "none",
                    alignSelf: "stretch",
                    width: a,
                    textAlign: "center",
                    cursor: "pointer",
                    userSelect: "none",
                    transition: `all ${t.motionDurationSlow}`,
                    "&-noop": {
                        cursor: "unset"
                    },
                    "&:before": {
                        pointerEvents: "none",
                        content: '""',
                        width: a,
                        height: a,
                        position: "absolute",
                        left: {
                            _skip_check_: !0,
                            value: 0
                        },
                        top: 0,
                        borderRadius: t.borderRadius,
                        transition: `all ${t.motionDurationSlow}`
                    },
                    [`&:not(${r}-switcher-noop):hover:before`]: {
                        backgroundColor: t.colorBgTextHover
                    },
                    [`&_close ${r}-switcher-icon svg`]: {
                        transform: "rotate(-90deg)"
                    },
                    "&-loading-icon": {
                        color: t.colorPrimary
                    },
                    "&-leaf-line": {
                        position: "relative",
                        zIndex: 1,
                        display: "inline-block",
                        width: "100%",
                        height: "100%",
                        "&:before": {
                            position: "absolute",
                            top: 0,
                            insetInlineEnd: t.calc(a).div(2).equal(),
                            bottom: t.calc(o).mul(-1).equal(),
                            marginInlineStart: -1,
                            borderInlineEnd: `1px solid ${t.colorBorder}`,
                            content: '""'
                        },
                        "&:after": {
                            position: "absolute",
                            width: t.calc(t.calc(a).div(2).equal()).mul(.8).equal(),
                            height: t.calc(a).div(2).equal(),
                            borderBottom: `1px solid ${t.colorBorder}`,
                            content: '""'
                        }
                    }
                }),
                [`${r}-node-content-wrapper`]: Object.assign(Object.assign({
                    position: "relative",
                    minHeight: a,
                    paddingBlock: 0,
                    paddingInline: t.paddingXS,
                    background: "transparent",
                    borderRadius: t.borderRadius,
                    cursor: "pointer",
                    transition: `all ${t.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`
                }, Ls(e, t)), {
                    "&:hover": {
                        backgroundColor: c
                    },
                    [`&${r}-node-selected`]: {
                        color: t.nodeSelectedColor,
                        backgroundColor: l
                    },
                    [`${r}-iconEle`]: {
                        display: "inline-block",
                        width: a,
                        height: a,
                        textAlign: "center",
                        verticalAlign: "top",
                        "&:empty": {
                            display: "none"
                        }
                    }
                }),
                [`${r}-unselectable ${r}-node-content-wrapper:hover`]: {
                    backgroundColor: "transparent"
                },
                [`${n}.drop-container > [draggable]`]: {
                    boxShadow: `0 0 0 2px ${t.colorPrimary}`
                },
                "&-show-line": {
                    [`${r}-indent-unit`]: {
                        position: "relative",
                        height: "100%",
                        "&:before": {
                            position: "absolute",
                            top: 0,
                            insetInlineEnd: t.calc(a).div(2).equal(),
                            bottom: t.calc(o).mul(-1).equal(),
                            borderInlineEnd: `1px solid ${t.colorBorder}`,
                            content: '""'
                        },
                        "&-end:before": {
                            display: "none"
                        }
                    },
                    [`${r}-switcher`]: {
                        background: "transparent",
                        "&-line-icon": {
                            verticalAlign: "-0.15em"
                        }
                    }
                },
                [`${n}-leaf-last ${r}-switcher-leaf-line:before`]: {
                    top: "auto !important",
                    bottom: "auto !important",
                    height: `${j(t.calc(a).div(2).equal())} !important`
                }
            })
        }
    },
    Hs = (e, t, r = !0) => {
        const n = `.${e}`,
            o = `${n}-treenode`,
            a = t.calc(t.paddingXS).div(2).equal(),
            d = Xn(t, {
                treeCls: n,
                treeNodeCls: o,
                treeNodePadding: a
            });
        return [_s(e, d), r && Ms(d)].filter(Boolean)
    },
    js = e => {
        const {
            controlHeightSM: t,
            controlItemBgHover: r,
            controlItemBgActive: n
        } = e, o = t;
        return {
            titleHeight: o,
            indentSize: o,
            nodeHoverBg: r,
            nodeHoverColor: e.colorText,
            nodeSelectedBg: n,
            nodeSelectedColor: e.colorText
        }
    },
    As = e => {
        const {
            colorTextLightSolid: t,
            colorPrimary: r
        } = e;
        return Object.assign(Object.assign({}, js(e)), {
            directoryNodeSelectedColor: t,
            directoryNodeSelectedBg: r
        })
    },
    Fs = qn("Tree", (e, {
        prefixCls: t
    }) => [{
        [e.componentCls]: Da(`${t}-checkbox`, e)
    }, Hs(t, e), Ma(e)], As),
    Zr = 4;

function Ws(e) {
    const {
        dropPosition: t,
        dropLevelOffset: r,
        prefixCls: n,
        indent: o,
        direction: a = "ltr"
    } = e, d = a === "ltr" ? "left" : "right", l = a === "ltr" ? "right" : "left", c = {
        [d]: -r * o + Zr,
        [l]: 0
    };
    switch (t) {
        case -1:
            c.top = -3;
            break;
        case 1:
            c.bottom = -3;
            break;
        default:
            c.bottom = -3, c[d] = o + Zr;
            break
    }
    return U.createElement("div", {
        style: c,
        className: `${n}-drop-indicator`
    })
}
const Vs = e => {
        var t, r;
        const {
            prefixCls: n,
            switcherIcon: o,
            treeNodeProps: a,
            showLine: d,
            switcherLoadingIcon: l
        } = e, {
            isLeaf: c,
            expanded: s,
            loading: f
        } = a;
        if (f) return i.isValidElement(l) ? l : i.createElement(xa, {
            className: `${n}-switcher-loading-icon`
        });
        let u;
        if (d && typeof d == "object" && (u = d.showLeafIcon), c) {
            if (!d) return null;
            if (typeof u != "boolean" && u) {
                const p = typeof u == "function" ? u(a) : u,
                    h = `${n}-switcher-line-custom-icon`;
                return i.isValidElement(p) ? Er(p, {
                    className: Q((t = p.props) === null || t === void 0 ? void 0 : t.className, h)
                }) : p
            }
            return u ? i.createElement(No, {
                className: `${n}-switcher-line-icon`
            }) : i.createElement("span", {
                className: `${n}-switcher-leaf-line`
            })
        }
        const m = `${n}-switcher-icon`,
            v = typeof o == "function" ? o(a) : o;
        return i.isValidElement(v) ? Er(v, {
            className: Q((r = v.props) === null || r === void 0 ? void 0 : r.className, m)
        }) : v !== void 0 ? v : d ? s ? i.createElement(Gl, {
            className: `${n}-switcher-line-icon`
        }) : i.createElement(Ql, {
            className: `${n}-switcher-line-icon`
        }) : i.createElement(Nl, {
            className: m
        })
    },
    qo = U.forwardRef((e, t) => {
        var r;
        const {
            getPrefixCls: n,
            direction: o,
            virtual: a,
            tree: d
        } = U.useContext(gn), {
            prefixCls: l,
            className: c,
            showIcon: s = !1,
            showLine: f,
            switcherIcon: u,
            switcherLoadingIcon: m,
            blockNode: v = !1,
            children: p,
            checkable: h = !1,
            selectable: g = !0,
            draggable: b,
            motion: S,
            style: x
        } = e, w = n("tree", l), C = n(), I = S ?? Object.assign(Object.assign({}, Ca(C)), {
            motionAppear: !1
        }), R = Object.assign(Object.assign({}, e), {
            checkable: h,
            selectable: g,
            showIcon: s,
            motion: I,
            blockNode: v,
            showLine: !!f,
            dropIndicatorRender: Ws
        }), [N, y, K] = Fs(w), [, T] = Un(), P = T.paddingXS / 2 + (((r = T.Tree) === null || r === void 0 ? void 0 : r.titleHeight) || T.controlHeightSM), O = U.useMemo(() => {
            if (!b) return !1;
            let $ = {};
            switch (typeof b) {
                case "function":
                    $.nodeDraggable = b;
                    break;
                case "object":
                    $ = Object.assign({}, b);
                    break
            }
            return $.icon !== !1 && ($.icon = $.icon || U.createElement(ql, null)), $
        }, [b]), E = $ => U.createElement(Vs, {
            prefixCls: w,
            switcherIcon: u,
            switcherLoadingIcon: m,
            treeNodeProps: $,
            showLine: f
        });
        return N(U.createElement(ir, Object.assign({
            itemHeight: P,
            ref: t,
            virtual: a
        }, R, {
            style: Object.assign(Object.assign({}, d == null ? void 0 : d.style), x),
            prefixCls: w,
            className: Q({
                [`${w}-icon-hide`]: !s,
                [`${w}-block-node`]: v,
                [`${w}-unselectable`]: !g,
                [`${w}-rtl`]: o === "rtl"
            }, d == null ? void 0 : d.className, c, y, K),
            direction: o,
            checkable: h && U.createElement("span", {
                className: `${w}-checkbox-inner`
            }),
            selectable: g,
            switcherIcon: E,
            draggable: O
        }), p))
    }),
    eo = 0,
    kn = 1,
    to = 2;

function sr(e, t, r) {
    const {
        key: n,
        children: o
    } = r;

    function a(d) {
        const l = d[n],
            c = d[o];
        t(l, d) !== !1 && sr(c || [], t, r)
    }
    e.forEach(a)
}

function qs({
    treeData: e,
    expandedKeys: t,
    startKey: r,
    endKey: n,
    fieldNames: o
}) {
    const a = [];
    let d = eo;
    if (r && r === n) return [r];
    if (!r || !n) return [];

    function l(c) {
        return c === r || c === n
    }
    return sr(e, c => {
        if (d === to) return !1;
        if (l(c)) {
            if (a.push(c), d === eo) d = kn;
            else if (d === kn) return d = to, !1
        } else d === kn && a.push(c);
        return t.includes(c)
    }, At(o)), a
}

function In(e, t, r) {
    const n = Ee(t),
        o = [];
    return sr(e, (a, d) => {
        const l = n.indexOf(a);
        return l !== -1 && (o.push(d), n.splice(l, 1)), !!n.length
    }, At(r)), o
}
var no = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};

function Xs(e) {
    const {
        isLeaf: t,
        expanded: r
    } = e;
    return t ? i.createElement(No, null) : r ? i.createElement(Hl, null) : i.createElement(Fl, null)
}

function ro({
    treeData: e,
    children: t
}) {
    return e || So(t)
}
const Us = (e, t) => {
        var {
            defaultExpandAll: r,
            defaultExpandParent: n,
            defaultExpandedKeys: o
        } = e, a = no(e, ["defaultExpandAll", "defaultExpandParent", "defaultExpandedKeys"]);
        const d = i.useRef(null),
            l = i.useRef(null),
            c = () => {
                const {
                    keyEntities: N
                } = Zn(ro(a));
                let y;
                return r ? y = Object.keys(N) : n ? y = zn(a.expandedKeys || o || [], N) : y = a.expandedKeys || o || [], y
            },
            [s, f] = i.useState(a.selectedKeys || a.defaultSelectedKeys || []),
            [u, m] = i.useState(() => c());
        i.useEffect(() => {
            "selectedKeys" in a && f(a.selectedKeys)
        }, [a.selectedKeys]), i.useEffect(() => {
            "expandedKeys" in a && m(a.expandedKeys)
        }, [a.expandedKeys]);
        const v = (N, y) => {
                var K;
                return "expandedKeys" in a || m(N), (K = a.onExpand) === null || K === void 0 ? void 0 : K.call(a, N, y)
            },
            p = (N, y) => {
                var K;
                const {
                    multiple: T,
                    fieldNames: P
                } = a, {
                    node: O,
                    nativeEvent: E
                } = y, {
                    key: $ = ""
                } = O, k = ro(a), M = Object.assign(Object.assign({}, y), {
                    selected: !0
                }), A = (E == null ? void 0 : E.ctrlKey) || (E == null ? void 0 : E.metaKey), B = E == null ? void 0 : E.shiftKey;
                let q;
                T && A ? (q = N, d.current = $, l.current = q, M.selectedNodes = In(k, q, P)) : T && B ? (q = Array.from(new Set([].concat(Ee(l.current || []), Ee(qs({
                    treeData: k,
                    expandedKeys: u,
                    startKey: $,
                    endKey: d.current,
                    fieldNames: P
                }))))), M.selectedNodes = In(k, q, P)) : (q = [$], d.current = $, l.current = q, M.selectedNodes = In(k, q, P)), (K = a.onSelect) === null || K === void 0 || K.call(a, q, M), "selectedKeys" in a || f(q)
            },
            {
                getPrefixCls: h,
                direction: g
            } = i.useContext(gn),
            {
                prefixCls: b,
                className: S,
                showIcon: x = !0,
                expandAction: w = "click"
            } = a,
            C = no(a, ["prefixCls", "className", "showIcon", "expandAction"]),
            I = h("tree", b),
            R = Q(`${I}-directory`, {
                [`${I}-directory-rtl`]: g === "rtl"
            }, S);
        return i.createElement(qo, Object.assign({
            icon: Xs,
            ref: t,
            blockNode: !0
        }, C, {
            showIcon: x,
            expandAction: w,
            prefixCls: I,
            className: R,
            expandedKeys: u,
            selectedKeys: s,
            onSelect: p,
            onExpand: v
        }))
    },
    Gs = i.forwardRef(Us),
    cr = qo;
cr.DirectoryTree = Gs;
cr.TreeNode = ln;
const oo = e => {
        const {
            value: t,
            filterSearch: r,
            tablePrefixCls: n,
            locale: o,
            onChange: a
        } = e;
        return r ? i.createElement("div", {
            className: `${n}-filter-dropdown-search`
        }, i.createElement(Wa, {
            prefix: i.createElement(Va, null),
            placeholder: o.filterSearchPlaceholder,
            onChange: a,
            value: t,
            htmlSize: 1,
            className: `${n}-filter-dropdown-search-input`
        })) : null
    },
    Ys = e => {
        const {
            keyCode: t
        } = e;
        t === Ze.ENTER && e.stopPropagation()
    },
    Js = i.forwardRef((e, t) => i.createElement("div", {
        className: e.className,
        onClick: r => r.stopPropagation(),
        onKeyDown: Ys,
        ref: t
    }, e.children));

function jt(e) {
    let t = [];
    return (e || []).forEach(({
        value: r,
        children: n
    }) => {
        t.push(r), n && (t = [].concat(Ee(t), Ee(jt(n))))
    }), t
}

function Qs(e) {
    return e.some(({
        children: t
    }) => t)
}

function Xo(e, t) {
    return typeof t == "string" || typeof t == "number" ? t == null ? void 0 : t.toString().toLowerCase().includes(e.trim().toLowerCase()) : !1
}

function Uo({
    filters: e,
    prefixCls: t,
    filteredKeys: r,
    filterMultiple: n,
    searchValue: o,
    filterSearch: a
}) {
    return e.map((d, l) => {
        const c = String(d.value);
        if (d.children) return {
            key: c || l,
            label: d.text,
            popupClassName: `${t}-dropdown-submenu`,
            children: Uo({
                filters: d.children,
                prefixCls: t,
                filteredKeys: r,
                filterMultiple: n,
                searchValue: o,
                filterSearch: a
            })
        };
        const s = n ? vn : bo,
            f = {
                key: d.value !== void 0 ? c : l,
                label: i.createElement(i.Fragment, null, i.createElement(s, {
                    checked: r.includes(c)
                }), i.createElement("span", null, d.text))
            };
        return o.trim() ? typeof a == "function" ? a(o, d) ? f : null : Xo(o, d.text) ? f : null : f
    })
}

function Kn(e) {
    return e || []
}
const Zs = e => {
        var t, r, n, o;
        const {
            tablePrefixCls: a,
            prefixCls: d,
            column: l,
            dropdownPrefixCls: c,
            columnKey: s,
            filterOnClose: f,
            filterMultiple: u,
            filterMode: m = "menu",
            filterSearch: v = !1,
            filterState: p,
            triggerFilter: h,
            locale: g,
            children: b,
            getPopupContainer: S,
            rootClassName: x
        } = e, {
            filterResetToDefaultFilteredValue: w,
            defaultFilteredValue: C,
            filterDropdownProps: I = {},
            filterDropdownOpen: R,
            filterDropdownVisible: N,
            onFilterDropdownVisibleChange: y,
            onFilterDropdownOpenChange: K
        } = l, [T, P] = i.useState(!1), O = !!(p && (!((t = p.filteredKeys) === null || t === void 0) && t.length || p.forceFiltered)), E = z => {
            var F;
            P(z), (F = I.onOpenChange) === null || F === void 0 || F.call(I, z), K == null || K(z), y == null || y(z)
        }, $ = (o = (n = (r = I.open) !== null && r !== void 0 ? r : R) !== null && n !== void 0 ? n : N) !== null && o !== void 0 ? o : T, k = p == null ? void 0 : p.filteredKeys, [M, A] = Es(Kn(k)), B = ({
            selectedKeys: z
        }) => {
            A(z)
        }, q = (z, {
            node: F,
            checked: ve
        }) => {
            B(u ? {
                selectedKeys: z
            } : {
                selectedKeys: ve && F.key ? [F.key] : []
            })
        };
        i.useEffect(() => {
            T && B({
                selectedKeys: Kn(k)
            })
        }, [k]);
        const [oe, te] = i.useState([]), ne = z => {
            te(z)
        }, [de, Oe] = i.useState(""), ae = z => {
            const {
                value: F
            } = z.target;
            Oe(F)
        };
        i.useEffect(() => {
            T || Oe("")
        }, [T]);
        const Z = z => {
                const F = z != null && z.length ? z : null;
                if (F === null && (!p || !p.filteredKeys) || an(F, p == null ? void 0 : p.filteredKeys, !0)) return null;
                h({
                    column: l,
                    key: s,
                    filteredKeys: F
                })
            },
            Y = () => {
                E(!1), Z(M())
            },
            me = ({
                confirm: z,
                closeDropdown: F
            } = {
                confirm: !1,
                closeDropdown: !1
            }) => {
                z && Z([]), F && E(!1), Oe(""), A(w ? (C || []).map(ve => String(ve)) : [])
            },
            le = ({
                closeDropdown: z
            } = {
                closeDropdown: !0
            }) => {
                z && E(!1), Z(M())
            },
            pe = (z, F) => {
                F.source === "trigger" && (z && k !== void 0 && A(Kn(k)), E(z), !z && !l.filterDropdown && f && Y())
            },
            H = Q({
                [`${c}-menu-without-submenu`]: !Qs(l.filters || [])
            }),
            J = z => {
                if (z.target.checked) {
                    const F = jt(l == null ? void 0 : l.filters).map(ve => String(ve));
                    A(F)
                } else A([])
            },
            V = ({
                filters: z
            }) => (z || []).map((F, ve) => {
                const $e = String(F.value),
                    ie = {
                        title: F.text,
                        key: F.value !== void 0 ? $e : String(ve)
                    };
                return F.children && (ie.children = V({
                    filters: F.children
                })), ie
            }),
            X = z => {
                var F;
                return Object.assign(Object.assign({}, z), {
                    text: z.title,
                    value: z.key,
                    children: ((F = z.children) === null || F === void 0 ? void 0 : F.map(ve => X(ve))) || []
                })
            };
        let _;
        const {
            direction: ee,
            renderEmpty: we
        } = i.useContext(gn);
        if (typeof l.filterDropdown == "function") _ = l.filterDropdown({
            prefixCls: `${c}-custom`,
            setSelectedKeys: z => B({
                selectedKeys: z
            }),
            selectedKeys: M(),
            confirm: le,
            clearFilters: me,
            filters: l.filters,
            visible: $,
            close: () => {
                E(!1)
            }
        });
        else if (l.filterDropdown) _ = l.filterDropdown;
        else {
            const z = M() || [],
                F = () => {
                    var $e, ie;
                    const Pe = ($e = we == null ? void 0 : we("Table.filter")) !== null && $e !== void 0 ? $e : i.createElement(Nr, {
                        image: Nr.PRESENTED_IMAGE_SIMPLE,
                        description: g.filterEmptyText,
                        styles: {
                            image: {
                                height: 24
                            }
                        },
                        style: {
                            margin: 0,
                            padding: "16px 0"
                        }
                    });
                    if ((l.filters || []).length === 0) return Pe;
                    if (m === "tree") return i.createElement(i.Fragment, null, i.createElement(oo, {
                        filterSearch: v,
                        value: de,
                        onChange: ae,
                        tablePrefixCls: a,
                        locale: g
                    }), i.createElement("div", {
                        className: `${a}-filter-dropdown-tree`
                    }, u ? i.createElement(vn, {
                        checked: z.length === jt(l.filters).length,
                        indeterminate: z.length > 0 && z.length < jt(l.filters).length,
                        className: `${a}-filter-dropdown-checkall`,
                        onChange: J
                    }, (ie = g == null ? void 0 : g.filterCheckall) !== null && ie !== void 0 ? ie : g == null ? void 0 : g.filterCheckAll) : null, i.createElement(cr, {
                        checkable: !0,
                        selectable: !1,
                        blockNode: !0,
                        multiple: u,
                        checkStrictly: !u,
                        className: `${c}-menu`,
                        onCheck: q,
                        checkedKeys: z,
                        selectedKeys: z,
                        showIcon: !1,
                        treeData: V({
                            filters: l.filters
                        }),
                        autoExpandParent: !0,
                        defaultExpandAll: !0,
                        filterTreeNode: de.trim() ? ge => typeof v == "function" ? v(de, X(ge)) : Xo(de, ge.title) : void 0
                    })));
                    const Te = Uo({
                            filters: l.filters || [],
                            filterSearch: v,
                            prefixCls: d,
                            filteredKeys: M(),
                            filterMultiple: u,
                            searchValue: de
                        }),
                        We = Te.every(ge => ge === null);
                    return i.createElement(i.Fragment, null, i.createElement(oo, {
                        filterSearch: v,
                        value: de,
                        onChange: ae,
                        tablePrefixCls: a,
                        locale: g
                    }), We ? Pe : i.createElement(Ba, {
                        selectable: !0,
                        multiple: u,
                        prefixCls: `${c}-menu`,
                        className: H,
                        onSelect: B,
                        onDeselect: B,
                        selectedKeys: z,
                        getPopupContainer: S,
                        openKeys: oe,
                        onOpenChange: ne,
                        items: Te
                    }))
                },
                ve = () => w ? an((C || []).map($e => String($e)), z, !0) : z.length === 0;
            _ = i.createElement(i.Fragment, null, F(), i.createElement("div", {
                className: `${d}-dropdown-btns`
            }, i.createElement($r, {
                type: "link",
                size: "small",
                disabled: ve(),
                onClick: () => me()
            }, g.filterReset), i.createElement($r, {
                type: "primary",
                size: "small",
                onClick: Y
            }, g.filterConfirm)))
        }
        l.filterDropdown && (_ = i.createElement(za, {
            selectable: void 0
        }, _)), _ = i.createElement(Js, {
            className: `${d}-dropdown`
        }, _);
        const Ie = go({
            trigger: ["click"],
            placement: ee === "rtl" ? "bottomLeft" : "bottomRight",
            children: (() => {
                let z;
                return typeof l.filterIcon == "function" ? z = l.filterIcon(O) : l.filterIcon ? z = l.filterIcon : z = i.createElement(zl, null), i.createElement("span", {
                    role: "button",
                    tabIndex: -1,
                    className: Q(`${d}-trigger`, {
                        active: O
                    }),
                    onClick: F => {
                        F.stopPropagation()
                    }
                }, z)
            })(),
            getPopupContainer: S
        }, Object.assign(Object.assign({}, I), {
            rootClassName: Q(x, I.rootClassName),
            open: $,
            onOpenChange: pe,
            popupRender: () => typeof(I == null ? void 0 : I.dropdownRender) == "function" ? I.dropdownRender(_) : _
        }));
        return i.createElement("div", {
            className: `${d}-column`
        }, i.createElement("span", {
            className: `${a}-column-title`
        }, b), i.createElement(yo, Object.assign({}, Ie)))
    },
    An = (e, t, r) => {
        let n = [];
        return (e || []).forEach((o, a) => {
            var d;
            const l = qt(a, r),
                c = o.filterDropdown !== void 0;
            if (o.filters || c || "onFilter" in o)
                if ("filteredValue" in o) {
                    let s = o.filteredValue;
                    c || (s = (d = s == null ? void 0 : s.map(String)) !== null && d !== void 0 ? d : s), n.push({
                        column: o,
                        key: Rt(o, l),
                        filteredKeys: s,
                        forceFiltered: o.filtered
                    })
                } else n.push({
                    column: o,
                    key: Rt(o, l),
                    filteredKeys: t && o.defaultFilteredValue ? o.defaultFilteredValue : void 0,
                    forceFiltered: o.filtered
                });
            "children" in o && (n = [].concat(Ee(n), Ee(An(o.children, t, l))))
        }), n
    };

function Go(e, t, r, n, o, a, d, l, c) {
    return r.map((s, f) => {
        const u = qt(f, l),
            {
                filterOnClose: m = !0,
                filterMultiple: v = !0,
                filterMode: p,
                filterSearch: h
            } = s;
        let g = s;
        if (g.filters || g.filterDropdown) {
            const b = Rt(g, u),
                S = n.find(({
                    key: x
                }) => b === x);
            g = Object.assign(Object.assign({}, g), {
                title: x => i.createElement(Zs, {
                    tablePrefixCls: e,
                    prefixCls: `${e}-filter`,
                    dropdownPrefixCls: t,
                    column: g,
                    columnKey: b,
                    filterState: S,
                    filterOnClose: m,
                    filterMultiple: v,
                    filterMode: p,
                    filterSearch: h,
                    triggerFilter: a,
                    locale: o,
                    getPopupContainer: d,
                    rootClassName: c
                }, bn(s.title, x))
            })
        }
        return "children" in g && (g = Object.assign(Object.assign({}, g), {
            children: Go(e, t, g.children, n, o, a, d, u, c)
        })), g
    })
}
const ao = e => {
        const t = {};
        return e.forEach(({
            key: r,
            filteredKeys: n,
            column: o
        }) => {
            const a = r,
                {
                    filters: d,
                    filterDropdown: l
                } = o;
            if (l) t[a] = n || null;
            else if (Array.isArray(n)) {
                const c = jt(d);
                t[a] = c.filter(s => n.includes(String(s)))
            } else t[a] = null
        }), t
    },
    Fn = (e, t, r) => t.reduce((o, a) => {
        const {
            column: {
                onFilter: d,
                filters: l
            },
            filteredKeys: c
        } = a;
        return d && c && c.length ? o.map(s => Object.assign({}, s)).filter(s => c.some(f => {
            const u = jt(l),
                m = u.findIndex(p => String(p) === String(f)),
                v = m !== -1 ? u[m] : f;
            return s[r] && (s[r] = Fn(s[r], t, r)), d(v, s)
        })) : o
    }, e),
    Yo = e => e.flatMap(t => "children" in t ? [t].concat(Ee(Yo(t.children || []))) : [t]),
    ec = e => {
        const {
            prefixCls: t,
            dropdownPrefixCls: r,
            mergedColumns: n,
            onFilterChange: o,
            getPopupContainer: a,
            locale: d,
            rootClassName: l
        } = e;
        Qn();
        const c = i.useMemo(() => Yo(n || []), [n]),
            [s, f] = i.useState(() => An(c, !0)),
            u = i.useMemo(() => {
                const h = An(c, !1);
                if (h.length === 0) return h;
                let g = !0;
                if (h.forEach(({
                        filteredKeys: b
                    }) => {
                        b !== void 0 && (g = !1)
                    }), g) {
                    const b = (c || []).map((S, x) => Rt(S, qt(x)));
                    return s.filter(({
                        key: S
                    }) => b.includes(S)).map(S => {
                        const x = c[b.findIndex(w => w === S.key)];
                        return Object.assign(Object.assign({}, S), {
                            column: Object.assign(Object.assign({}, S.column), x),
                            forceFiltered: x.filtered
                        })
                    })
                }
                return h
            }, [c, s]),
            m = i.useMemo(() => ao(u), [u]),
            v = h => {
                const g = u.filter(({
                    key: b
                }) => b !== h.key);
                g.push(h), f(g), o(ao(g), g)
            };
        return [h => Go(t, r, h, u, d, v, a, void 0, l), u, m]
    },
    tc = (e, t, r) => {
        const n = i.useRef({});

        function o(a) {
            var d;
            if (!n.current || n.current.data !== e || n.current.childrenColumnName !== t || n.current.getRowKey !== r) {
                let c = function(s) {
                    s.forEach((f, u) => {
                        const m = r(f, u);
                        l.set(m, f), f && typeof f == "object" && t in f && c(f[t] || [])
                    })
                };
                const l = new Map;
                c(e), n.current = {
                    data: e,
                    childrenColumnName: t,
                    kvMap: l,
                    getRowKey: r
                }
            }
            return (d = n.current.kvMap) === null || d === void 0 ? void 0 : d.get(a)
        }
        return [o]
    };
var nc = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
};
const Jo = 10;

function rc(e, t) {
    const r = {
        current: e.current,
        pageSize: e.pageSize
    };
    return Object.keys(t && typeof t == "object" ? t : {}).forEach(o => {
        const a = e[o];
        typeof a != "function" && (r[o] = a)
    }), r
}

function oc(e, t, r) {
    const n = r && typeof r == "object" ? r : {},
        {
            total: o = 0
        } = n,
        a = nc(n, ["total"]),
        [d, l] = i.useState(() => ({
            current: "defaultCurrent" in a ? a.defaultCurrent : 1,
            pageSize: "defaultPageSize" in a ? a.defaultPageSize : Jo
        })),
        c = go(d, a, {
            total: o > 0 ? o : e
        }),
        s = Math.ceil((o || e) / c.pageSize);
    c.current > s && (c.current = s || 1);
    const f = (m, v) => {
            l({
                current: m ?? 1,
                pageSize: v || c.pageSize
            })
        },
        u = (m, v) => {
            var p;
            r && ((p = r.onChange) === null || p === void 0 || p.call(r, m, v)), f(m, v), t(m, v || (c == null ? void 0 : c.pageSize))
        };
    return r === !1 ? [{}, () => {}] : [Object.assign(Object.assign({}, c), {
        onChange: u
    }), f]
}
const fn = "ascend",
    On = "descend",
    mn = e => typeof e.sorter == "object" && typeof e.sorter.multiple == "number" ? e.sorter.multiple : !1,
    lo = e => typeof e == "function" ? e : e && typeof e == "object" && e.compare ? e.compare : !1,
    ac = (e, t) => t ? e[e.indexOf(t) + 1] : e[0],
    Wn = (e, t, r) => {
        let n = [];
        const o = (a, d) => {
            n.push({
                column: a,
                key: Rt(a, d),
                multiplePriority: mn(a),
                sortOrder: a.sortOrder
            })
        };
        return (e || []).forEach((a, d) => {
            const l = qt(d, r);
            a.children ? ("sortOrder" in a && o(a, l), n = [].concat(Ee(n), Ee(Wn(a.children, t, l)))) : a.sorter && ("sortOrder" in a ? o(a, l) : t && a.defaultSortOrder && n.push({
                column: a,
                key: Rt(a, l),
                multiplePriority: mn(a),
                sortOrder: a.defaultSortOrder
            }))
        }), n
    },
    Qo = (e, t, r, n, o, a, d, l) => (t || []).map((s, f) => {
        const u = qt(f, l);
        let m = s;
        if (m.sorter) {
            const v = m.sortDirections || o,
                p = m.showSorterTooltip === void 0 ? d : m.showSorterTooltip,
                h = Rt(m, u),
                g = r.find(({
                    key: y
                }) => y === h),
                b = g ? g.sortOrder : null,
                S = ac(v, b);
            let x;
            if (s.sortIcon) x = s.sortIcon({
                sortOrder: b
            });
            else {
                const y = v.includes(fn) && i.createElement(Pl, {
                        className: Q(`${e}-column-sorter-up`, {
                            active: b === fn
                        })
                    }),
                    K = v.includes(On) && i.createElement(Il, {
                        className: Q(`${e}-column-sorter-down`, {
                            active: b === On
                        })
                    });
                x = i.createElement("span", {
                    className: Q(`${e}-column-sorter`, {
                        [`${e}-column-sorter-full`]: !!(y && K)
                    })
                }, i.createElement("span", {
                    className: `${e}-column-sorter-inner`,
                    "aria-hidden": "true"
                }, y, K))
            }
            const {
                cancelSort: w,
                triggerAsc: C,
                triggerDesc: I
            } = a || {};
            let R = w;
            S === On ? R = I : S === fn && (R = C);
            const N = typeof p == "object" ? Object.assign({
                title: R
            }, p) : {
                title: R
            };
            m = Object.assign(Object.assign({}, m), {
                className: Q(m.className, {
                    [`${e}-column-sort`]: b
                }),
                title: y => {
                    const K = `${e}-column-sorters`,
                        T = i.createElement("span", {
                            className: `${e}-column-title`
                        }, bn(s.title, y)),
                        P = i.createElement("div", {
                            className: K
                        }, T, x);
                    return p ? typeof p != "boolean" && (p == null ? void 0 : p.target) === "sorter-icon" ? i.createElement("div", {
                        className: `${K} ${e}-column-sorters-tooltip-target-sorter`
                    }, T, i.createElement(Ir, Object.assign({}, N), x)) : i.createElement(Ir, Object.assign({}, N), P) : P
                },
                onHeaderCell: y => {
                    var K;
                    const T = ((K = s.onHeaderCell) === null || K === void 0 ? void 0 : K.call(s, y)) || {},
                        P = T.onClick,
                        O = T.onKeyDown;
                    T.onClick = k => {
                        n({
                            column: s,
                            key: h,
                            sortOrder: S,
                            multiplePriority: mn(s)
                        }), P == null || P(k)
                    }, T.onKeyDown = k => {
                        k.keyCode === Ze.ENTER && (n({
                            column: s,
                            key: h,
                            sortOrder: S,
                            multiplePriority: mn(s)
                        }), O == null || O(k))
                    };
                    const E = ws(s.title, {}),
                        $ = E == null ? void 0 : E.toString();
                    return b && (T["aria-sort"] = b === "ascend" ? "ascending" : "descending"), T["aria-label"] = $ || "", T.className = Q(T.className, `${e}-column-has-sorters`), T.tabIndex = 0, s.ellipsis && (T.title = (E ?? "").toString()), T
                }
            })
        }
        return "children" in m && (m = Object.assign(Object.assign({}, m), {
            children: Qo(e, m.children, r, n, o, a, d, u)
        })), m
    }),
    io = e => {
        const {
            column: t,
            sortOrder: r
        } = e;
        return {
            column: t,
            order: r,
            field: t.dataIndex,
            columnKey: t.key
        }
    },
    so = e => {
        const t = e.filter(({
            sortOrder: r
        }) => r).map(io);
        if (t.length === 0 && e.length) {
            const r = e.length - 1;
            return Object.assign(Object.assign({}, io(e[r])), {
                column: void 0,
                order: void 0,
                field: void 0,
                columnKey: void 0
            })
        }
        return t.length <= 1 ? t[0] || {} : t
    },
    Vn = (e, t, r) => {
        const n = t.slice().sort((d, l) => l.multiplePriority - d.multiplePriority),
            o = e.slice(),
            a = n.filter(({
                column: {
                    sorter: d
                },
                sortOrder: l
            }) => lo(d) && l);
        return a.length ? o.sort((d, l) => {
            for (let c = 0; c < a.length; c += 1) {
                const s = a[c],
                    {
                        column: {
                            sorter: f
                        },
                        sortOrder: u
                    } = s,
                    m = lo(f);
                if (m && u) {
                    const v = m(d, l, u);
                    if (v !== 0) return u === fn ? v : -v
                }
            }
            return 0
        }).map(d => {
            const l = d[r];
            return l ? Object.assign(Object.assign({}, d), {
                [r]: Vn(l, t, r)
            }) : d
        }) : o
    },
    lc = e => {
        const {
            prefixCls: t,
            mergedColumns: r,
            sortDirections: n,
            tableLocale: o,
            showSorterTooltip: a,
            onSorterChange: d
        } = e, [l, c] = i.useState(() => Wn(r, !0)), s = (h, g) => {
            const b = [];
            return h.forEach((S, x) => {
                const w = qt(x, g);
                if (b.push(Rt(S, w)), Array.isArray(S.children)) {
                    const C = s(S.children, w);
                    b.push.apply(b, Ee(C))
                }
            }), b
        }, f = i.useMemo(() => {
            let h = !0;
            const g = Wn(r, !1);
            if (!g.length) {
                const w = s(r);
                return l.filter(({
                    key: C
                }) => w.includes(C))
            }
            const b = [];

            function S(w) {
                h ? b.push(w) : b.push(Object.assign(Object.assign({}, w), {
                    sortOrder: null
                }))
            }
            let x = null;
            return g.forEach(w => {
                x === null ? (S(w), w.sortOrder && (w.multiplePriority === !1 ? h = !1 : x = !0)) : (x && w.multiplePriority !== !1 || (h = !1), S(w))
            }), b
        }, [r, l]), u = i.useMemo(() => {
            var h, g;
            const b = f.map(({
                column: S,
                sortOrder: x
            }) => ({
                column: S,
                order: x
            }));
            return {
                sortColumns: b,
                sortColumn: (h = b[0]) === null || h === void 0 ? void 0 : h.column,
                sortOrder: (g = b[0]) === null || g === void 0 ? void 0 : g.order
            }
        }, [f]), m = h => {
            let g;
            h.multiplePriority === !1 || !f.length || f[0].multiplePriority === !1 ? g = [h] : g = [].concat(Ee(f.filter(({
                key: b
            }) => b !== h.key)), [h]), c(g), d(so(g), g)
        };
        return [h => Qo(t, h, f, m, n, o, a), f, u, () => so(f)]
    },
    Zo = (e, t) => e.map(n => {
        const o = Object.assign({}, n);
        return o.title = bn(n.title, t), "children" in o && (o.children = Zo(o.children, t)), o
    }),
    ic = e => [i.useCallback(r => Zo(r, e), [e])],
    sc = Ho((e, t) => {
        const {
            _renderTimes: r
        } = e, {
            _renderTimes: n
        } = t;
        return r !== n
    }),
    cc = Ao((e, t) => {
        const {
            _renderTimes: r
        } = e, {
            _renderTimes: n
        } = t;
        return r !== n
    }),
    dc = e => {
        const {
            componentCls: t,
            lineWidth: r,
            lineType: n,
            tableBorderColor: o,
            tableHeaderBg: a,
            tablePaddingVertical: d,
            tablePaddingHorizontal: l,
            calc: c
        } = e, s = `${j(r)} ${n} ${o}`, f = (u, m, v) => ({
            [`&${t}-${u}`]: {
                [`> ${t}-container`]: {
                    [`> ${t}-content, > ${t}-body`]: {
                        "\n            > table > tbody > tr > th,\n            > table > tbody > tr > td\n          ": {
                            [`> ${t}-expanded-row-fixed`]: {
                                margin: `${j(c(m).mul(-1).equal())}
              ${j(c(c(v).add(r)).mul(-1).equal())}`
                            }
                        }
                    }
                }
            }
        });
        return {
            [`${t}-wrapper`]: {
                [`${t}${t}-bordered`]: Object.assign(Object.assign(Object.assign({
                    [`> ${t}-title`]: {
                        border: s,
                        borderBottom: 0
                    },
                    [`> ${t}-container`]: {
                        borderInlineStart: s,
                        borderTop: s,
                        [`
            > ${t}-content,
            > ${t}-header,
            > ${t}-body,
            > ${t}-summary
          `]: {
                            "> table": {
                                "\n                > thead > tr > th,\n                > thead > tr > td,\n                > tbody > tr > th,\n                > tbody > tr > td,\n                > tfoot > tr > th,\n                > tfoot > tr > td\n              ": {
                                    borderInlineEnd: s
                                },
                                "> thead": {
                                    "> tr:not(:last-child) > th": {
                                        borderBottom: s
                                    },
                                    "> tr > th::before": {
                                        backgroundColor: "transparent !important"
                                    }
                                },
                                "\n                > thead > tr,\n                > tbody > tr,\n                > tfoot > tr\n              ": {
                                    [`> ${t}-cell-fix-right-first::after`]: {
                                        borderInlineEnd: s
                                    }
                                },
                                "\n                > tbody > tr > th,\n                > tbody > tr > td\n              ": {
                                    [`> ${t}-expanded-row-fixed`]: {
                                        margin: `${j(c(d).mul(-1).equal())} ${j(c(c(l).add(r)).mul(-1).equal())}`,
                                        "&::after": {
                                            position: "absolute",
                                            top: 0,
                                            insetInlineEnd: r,
                                            bottom: 0,
                                            borderInlineEnd: s,
                                            content: '""'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    [`&${t}-scroll-horizontal`]: {
                        [`> ${t}-container > ${t}-body`]: {
                            "> table > tbody": {
                                [`
                > tr${t}-expanded-row,
                > tr${t}-placeholder
              `]: {
                                    "> th, > td": {
                                        borderInlineEnd: 0
                                    }
                                }
                            }
                        }
                    }
                }, f("middle", e.tablePaddingVerticalMiddle, e.tablePaddingHorizontalMiddle)), f("small", e.tablePaddingVerticalSmall, e.tablePaddingHorizontalSmall)), {
                    [`> ${t}-footer`]: {
                        border: s,
                        borderTop: 0
                    }
                }),
                [`${t}-cell`]: {
                    [`${t}-container:first-child`]: {
                        borderTop: 0
                    },
                    "&-scrollbar:not([rowspan])": {
                        boxShadow: `0 ${j(r)} 0 ${j(r)} ${a}`
                    }
                },
                [`${t}-bordered ${t}-cell-scrollbar`]: {
                    borderInlineEnd: s
                }
            }
        }
    },
    uc = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}-wrapper`]: {
                [`${t}-cell-ellipsis`]: Object.assign(Object.assign({}, Sa), {
                    wordBreak: "keep-all",
                    [`
          &${t}-cell-fix-left-last,
          &${t}-cell-fix-right-first
        `]: {
                        overflow: "visible",
                        [`${t}-cell-content`]: {
                            display: "block",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }
                    },
                    [`${t}-column-title`]: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        wordBreak: "keep-all"
                    }
                })
            }
        }
    },
    fc = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}-wrapper`]: {
                [`${t}-tbody > tr${t}-placeholder`]: {
                    textAlign: "center",
                    color: e.colorTextDisabled,
                    "\n          &:hover > th,\n          &:hover > td,\n        ": {
                        background: e.colorBgContainer
                    }
                }
            }
        }
    },
    vc = e => {
        const {
            componentCls: t,
            antCls: r,
            motionDurationSlow: n,
            lineWidth: o,
            paddingXS: a,
            lineType: d,
            tableBorderColor: l,
            tableExpandIconBg: c,
            tableExpandColumnWidth: s,
            borderRadius: f,
            tablePaddingVertical: u,
            tablePaddingHorizontal: m,
            tableExpandedRowBg: v,
            paddingXXS: p,
            expandIconMarginTop: h,
            expandIconSize: g,
            expandIconHalfInner: b,
            expandIconScale: S,
            calc: x
        } = e, w = `${j(o)} ${d} ${l}`, C = x(p).sub(o).equal();
        return {
            [`${t}-wrapper`]: {
                [`${t}-expand-icon-col`]: {
                    width: s
                },
                [`${t}-row-expand-icon-cell`]: {
                    textAlign: "center",
                    [`${t}-row-expand-icon`]: {
                        display: "inline-flex",
                        float: "none",
                        verticalAlign: "sub"
                    }
                },
                [`${t}-row-indent`]: {
                    height: 1,
                    float: "left"
                },
                [`${t}-row-expand-icon`]: Object.assign(Object.assign({}, wa(e)), {
                    position: "relative",
                    float: "left",
                    width: g,
                    height: g,
                    color: "inherit",
                    lineHeight: j(g),
                    background: c,
                    border: w,
                    borderRadius: f,
                    transform: `scale(${S})`,
                    "&:focus, &:hover, &:active": {
                        borderColor: "currentcolor"
                    },
                    "&::before, &::after": {
                        position: "absolute",
                        background: "currentcolor",
                        transition: `transform ${n} ease-out`,
                        content: '""'
                    },
                    "&::before": {
                        top: b,
                        insetInlineEnd: C,
                        insetInlineStart: C,
                        height: o
                    },
                    "&::after": {
                        top: C,
                        bottom: C,
                        insetInlineStart: b,
                        width: o,
                        transform: "rotate(90deg)"
                    },
                    "&-collapsed::before": {
                        transform: "rotate(-180deg)"
                    },
                    "&-collapsed::after": {
                        transform: "rotate(0deg)"
                    },
                    "&-spaced": {
                        "&::before, &::after": {
                            display: "none",
                            content: "none"
                        },
                        background: "transparent",
                        border: 0,
                        visibility: "hidden"
                    }
                }),
                [`${t}-row-indent + ${t}-row-expand-icon`]: {
                    marginTop: h,
                    marginInlineEnd: a
                },
                [`tr${t}-expanded-row`]: {
                    "&, &:hover": {
                        "> th, > td": {
                            background: v
                        }
                    },
                    [`${r}-descriptions-view`]: {
                        display: "flex",
                        table: {
                            flex: "auto",
                            width: "100%"
                        }
                    }
                },
                [`${t}-expanded-row-fixed`]: {
                    position: "relative",
                    margin: `${j(x(u).mul(-1).equal())} ${j(x(m).mul(-1).equal())}`,
                    padding: `${j(u)} ${j(m)}`
                }
            }
        }
    },
    mc = e => {
        const {
            componentCls: t,
            antCls: r,
            iconCls: n,
            tableFilterDropdownWidth: o,
            tableFilterDropdownSearchWidth: a,
            paddingXXS: d,
            paddingXS: l,
            colorText: c,
            lineWidth: s,
            lineType: f,
            tableBorderColor: u,
            headerIconColor: m,
            fontSizeSM: v,
            tablePaddingHorizontal: p,
            borderRadius: h,
            motionDurationSlow: g,
            colorIcon: b,
            colorPrimary: S,
            tableHeaderFilterActiveBg: x,
            colorTextDisabled: w,
            tableFilterDropdownBg: C,
            tableFilterDropdownHeight: I,
            controlItemBgHover: R,
            controlItemBgActive: N,
            boxShadowSecondary: y,
            filterDropdownMenuBg: K,
            calc: T
        } = e, P = `${r}-dropdown`, O = `${t}-filter-dropdown`, E = `${r}-tree`, $ = `${j(s)} ${f} ${u}`;
        return [{
            [`${t}-wrapper`]: {
                [`${t}-filter-column`]: {
                    display: "flex",
                    justifyContent: "space-between"
                },
                [`${t}-filter-trigger`]: {
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    marginBlock: T(d).mul(-1).equal(),
                    marginInline: `${j(d)} ${j(T(p).div(2).mul(-1).equal())}`,
                    padding: `0 ${j(d)}`,
                    color: m,
                    fontSize: v,
                    borderRadius: h,
                    cursor: "pointer",
                    transition: `all ${g}`,
                    "&:hover": {
                        color: b,
                        background: x
                    },
                    "&.active": {
                        color: S
                    }
                }
            }
        }, {
            [`${r}-dropdown`]: {
                [O]: Object.assign(Object.assign({}, pn(e)), {
                    minWidth: o,
                    backgroundColor: C,
                    borderRadius: h,
                    boxShadow: y,
                    overflow: "hidden",
                    [`${P}-menu`]: {
                        maxHeight: I,
                        overflowX: "hidden",
                        border: 0,
                        boxShadow: "none",
                        borderRadius: "unset",
                        backgroundColor: K,
                        "&:empty::after": {
                            display: "block",
                            padding: `${j(l)} 0`,
                            color: w,
                            fontSize: v,
                            textAlign: "center",
                            content: '"Not Found"'
                        }
                    },
                    [`${O}-tree`]: {
                        paddingBlock: `${j(l)} 0`,
                        paddingInline: l,
                        [E]: {
                            padding: 0
                        },
                        [`${E}-treenode ${E}-node-content-wrapper:hover`]: {
                            backgroundColor: R
                        },
                        [`${E}-treenode-checkbox-checked ${E}-node-content-wrapper`]: {
                            "&, &:hover": {
                                backgroundColor: N
                            }
                        }
                    },
                    [`${O}-search`]: {
                        padding: l,
                        borderBottom: $,
                        "&-input": {
                            input: {
                                minWidth: a
                            },
                            [n]: {
                                color: w
                            }
                        }
                    },
                    [`${O}-checkall`]: {
                        width: "100%",
                        marginBottom: d,
                        marginInlineStart: d
                    },
                    [`${O}-btns`]: {
                        display: "flex",
                        justifyContent: "space-between",
                        padding: `${j(T(l).sub(s).equal())} ${j(l)}`,
                        overflow: "hidden",
                        borderTop: $
                    }
                })
            }
        }, {
            [`${r}-dropdown ${O}, ${O}-submenu`]: {
                [`${r}-checkbox-wrapper + span`]: {
                    paddingInlineStart: l,
                    color: c
                },
                "> ul": {
                    maxHeight: "calc(100vh - 130px)",
                    overflowX: "hidden",
                    overflowY: "auto"
                }
            }
        }]
    },
    pc = e => {
        const {
            componentCls: t,
            lineWidth: r,
            colorSplit: n,
            motionDurationSlow: o,
            zIndexTableFixed: a,
            tableBg: d,
            zIndexTableSticky: l,
            calc: c
        } = e, s = n;
        return {
            [`${t}-wrapper`]: {
                [`
        ${t}-cell-fix-left,
        ${t}-cell-fix-right
      `]: {
                    position: "sticky !important",
                    zIndex: a,
                    background: d
                },
                [`
        ${t}-cell-fix-left-first::after,
        ${t}-cell-fix-left-last::after
      `]: {
                    position: "absolute",
                    top: 0,
                    right: {
                        _skip_check_: !0,
                        value: 0
                    },
                    bottom: c(r).mul(-1).equal(),
                    width: 30,
                    transform: "translateX(100%)",
                    transition: `box-shadow ${o}`,
                    content: '""',
                    pointerEvents: "none",
                    willChange: "transform"
                },
                [`${t}-cell-fix-left-all::after`]: {
                    display: "none"
                },
                [`
        ${t}-cell-fix-right-first::after,
        ${t}-cell-fix-right-last::after
      `]: {
                    position: "absolute",
                    top: 0,
                    bottom: c(r).mul(-1).equal(),
                    left: {
                        _skip_check_: !0,
                        value: 0
                    },
                    width: 30,
                    transform: "translateX(-100%)",
                    transition: `box-shadow ${o}`,
                    content: '""',
                    pointerEvents: "none"
                },
                [`${t}-container`]: {
                    position: "relative",
                    "&::before, &::after": {
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        zIndex: c(l).add(1).equal({
                            unit: !1
                        }),
                        width: 30,
                        transition: `box-shadow ${o}`,
                        content: '""',
                        pointerEvents: "none"
                    },
                    "&::before": {
                        insetInlineStart: 0
                    },
                    "&::after": {
                        insetInlineEnd: 0
                    }
                },
                [`${t}-ping-left`]: {
                    [`&:not(${t}-has-fix-left) ${t}-container::before`]: {
                        boxShadow: `inset 10px 0 8px -8px ${s}`
                    },
                    [`
          ${t}-cell-fix-left-first::after,
          ${t}-cell-fix-left-last::after
        `]: {
                        boxShadow: `inset 10px 0 8px -8px ${s}`
                    },
                    [`${t}-cell-fix-left-last::before`]: {
                        backgroundColor: "transparent !important"
                    }
                },
                [`${t}-ping-right`]: {
                    [`&:not(${t}-has-fix-right) ${t}-container::after`]: {
                        boxShadow: `inset -10px 0 8px -8px ${s}`
                    },
                    [`
          ${t}-cell-fix-right-first::after,
          ${t}-cell-fix-right-last::after
        `]: {
                        boxShadow: `inset -10px 0 8px -8px ${s}`
                    }
                },
                [`${t}-fixed-column-gapped`]: {
                    [`
        ${t}-cell-fix-left-first::after,
        ${t}-cell-fix-left-last::after,
        ${t}-cell-fix-right-first::after,
        ${t}-cell-fix-right-last::after
      `]: {
                        boxShadow: "none"
                    }
                }
            }
        }
    },
    gc = e => {
        const {
            componentCls: t,
            antCls: r,
            margin: n
        } = e;
        return {
            [`${t}-wrapper`]: {
                [`${t}-pagination${r}-pagination`]: {
                    margin: `${j(n)} 0`
                },
                [`${t}-pagination`]: {
                    display: "flex",
                    flexWrap: "wrap",
                    rowGap: e.paddingXS,
                    "> *": {
                        flex: "none"
                    },
                    "&-left": {
                        justifyContent: "flex-start"
                    },
                    "&-center": {
                        justifyContent: "center"
                    },
                    "&-right": {
                        justifyContent: "flex-end"
                    }
                }
            }
        }
    },
    hc = e => {
        const {
            componentCls: t,
            tableRadius: r
        } = e;
        return {
            [`${t}-wrapper`]: {
                [t]: {
                    [`${t}-title, ${t}-header`]: {
                        borderRadius: `${j(r)} ${j(r)} 0 0`
                    },
                    [`${t}-title + ${t}-container`]: {
                        borderStartStartRadius: 0,
                        borderStartEndRadius: 0,
                        [`${t}-header, table`]: {
                            borderRadius: 0
                        },
                        "table > thead > tr:first-child": {
                            "th:first-child, th:last-child, td:first-child, td:last-child": {
                                borderRadius: 0
                            }
                        }
                    },
                    "&-container": {
                        borderStartStartRadius: r,
                        borderStartEndRadius: r,
                        "table > thead > tr:first-child": {
                            "> *:first-child": {
                                borderStartStartRadius: r
                            },
                            "> *:last-child": {
                                borderStartEndRadius: r
                            }
                        }
                    },
                    "&-footer": {
                        borderRadius: `0 0 ${j(r)} ${j(r)}`
                    }
                }
            }
        }
    },
    yc = e => {
        const {
            componentCls: t
        } = e;
        return {
            [`${t}-wrapper-rtl`]: {
                direction: "rtl",
                table: {
                    direction: "rtl"
                },
                [`${t}-pagination-left`]: {
                    justifyContent: "flex-end"
                },
                [`${t}-pagination-right`]: {
                    justifyContent: "flex-start"
                },
                [`${t}-row-expand-icon`]: {
                    float: "right",
                    "&::after": {
                        transform: "rotate(-90deg)"
                    },
                    "&-collapsed::before": {
                        transform: "rotate(180deg)"
                    },
                    "&-collapsed::after": {
                        transform: "rotate(0deg)"
                    }
                },
                [`${t}-container`]: {
                    "&::before": {
                        insetInlineStart: "unset",
                        insetInlineEnd: 0
                    },
                    "&::after": {
                        insetInlineStart: 0,
                        insetInlineEnd: "unset"
                    },
                    [`${t}-row-indent`]: {
                        float: "right"
                    }
                }
            }
        }
    },
    bc = e => {
        const {
            componentCls: t,
            antCls: r,
            iconCls: n,
            fontSizeIcon: o,
            padding: a,
            paddingXS: d,
            headerIconColor: l,
            headerIconHoverColor: c,
            tableSelectionColumnWidth: s,
            tableSelectedRowBg: f,
            tableSelectedRowHoverBg: u,
            tableRowHoverBg: m,
            tablePaddingHorizontal: v,
            calc: p
        } = e;
        return {
            [`${t}-wrapper`]: {
                [`${t}-selection-col`]: {
                    width: s,
                    [`&${t}-selection-col-with-dropdown`]: {
                        width: p(s).add(o).add(p(a).div(4)).equal()
                    }
                },
                [`${t}-bordered ${t}-selection-col`]: {
                    width: p(s).add(p(d).mul(2)).equal(),
                    [`&${t}-selection-col-with-dropdown`]: {
                        width: p(s).add(o).add(p(a).div(4)).add(p(d).mul(2)).equal()
                    }
                },
                [`
        table tr th${t}-selection-column,
        table tr td${t}-selection-column,
        ${t}-selection-column
      `]: {
                    paddingInlineEnd: e.paddingXS,
                    paddingInlineStart: e.paddingXS,
                    textAlign: "center",
                    [`${r}-radio-wrapper`]: {
                        marginInlineEnd: 0
                    }
                },
                [`table tr th${t}-selection-column${t}-cell-fix-left`]: {
                    zIndex: p(e.zIndexTableFixed).add(1).equal({
                        unit: !1
                    })
                },
                [`table tr th${t}-selection-column::after`]: {
                    backgroundColor: "transparent !important"
                },
                [`${t}-selection`]: {
                    position: "relative",
                    display: "inline-flex",
                    flexDirection: "column"
                },
                [`${t}-selection-extra`]: {
                    position: "absolute",
                    top: 0,
                    zIndex: 1,
                    cursor: "pointer",
                    transition: `all ${e.motionDurationSlow}`,
                    marginInlineStart: "100%",
                    paddingInlineStart: j(p(v).div(4).equal()),
                    [n]: {
                        color: l,
                        fontSize: o,
                        verticalAlign: "baseline",
                        "&:hover": {
                            color: c
                        }
                    }
                },
                [`${t}-tbody`]: {
                    [`${t}-row`]: {
                        [`&${t}-row-selected`]: {
                            [`> ${t}-cell`]: {
                                background: f,
                                "&-row-hover": {
                                    background: u
                                }
                            }
                        },
                        [`> ${t}-cell-row-hover`]: {
                            background: m
                        }
                    }
                }
            }
        }
    },
    xc = e => {
        const {
            componentCls: t,
            tableExpandColumnWidth: r,
            calc: n
        } = e, o = (a, d, l, c) => ({
            [`${t}${t}-${a}`]: {
                fontSize: c,
                [`
        ${t}-title,
        ${t}-footer,
        ${t}-cell,
        ${t}-thead > tr > th,
        ${t}-tbody > tr > th,
        ${t}-tbody > tr > td,
        tfoot > tr > th,
        tfoot > tr > td
      `]: {
                    padding: `${j(d)} ${j(l)}`
                },
                [`${t}-filter-trigger`]: {
                    marginInlineEnd: j(n(l).div(2).mul(-1).equal())
                },
                [`${t}-expanded-row-fixed`]: {
                    margin: `${j(n(d).mul(-1).equal())} ${j(n(l).mul(-1).equal())}`
                },
                [`${t}-tbody`]: {
                    [`${t}-wrapper:only-child ${t}`]: {
                        marginBlock: j(n(d).mul(-1).equal()),
                        marginInline: `${j(n(r).sub(l).equal())} ${j(n(l).mul(-1).equal())}`
                    }
                },
                [`${t}-selection-extra`]: {
                    paddingInlineStart: j(n(l).div(4).equal())
                }
            }
        });
        return {
            [`${t}-wrapper`]: Object.assign(Object.assign({}, o("middle", e.tablePaddingVerticalMiddle, e.tablePaddingHorizontalMiddle, e.tableFontSizeMiddle)), o("small", e.tablePaddingVerticalSmall, e.tablePaddingHorizontalSmall, e.tableFontSizeSmall))
        }
    },
    Cc = e => {
        const {
            componentCls: t,
            marginXXS: r,
            fontSizeIcon: n,
            headerIconColor: o,
            headerIconHoverColor: a
        } = e;
        return {
            [`${t}-wrapper`]: {
                [`${t}-thead th${t}-column-has-sorters`]: {
                    outline: "none",
                    cursor: "pointer",
                    transition: `all ${e.motionDurationSlow}, left 0s`,
                    "&:hover": {
                        background: e.tableHeaderSortHoverBg,
                        "&::before": {
                            backgroundColor: "transparent !important"
                        }
                    },
                    "&:focus-visible": {
                        color: e.colorPrimary
                    },
                    [`
          &${t}-cell-fix-left:hover,
          &${t}-cell-fix-right:hover
        `]: {
                        background: e.tableFixedHeaderSortActiveBg
                    }
                },
                [`${t}-thead th${t}-column-sort`]: {
                    background: e.tableHeaderSortBg,
                    "&::before": {
                        backgroundColor: "transparent !important"
                    }
                },
                [`td${t}-column-sort`]: {
                    background: e.tableBodySortBg
                },
                [`${t}-column-title`]: {
                    position: "relative",
                    zIndex: 1,
                    flex: 1,
                    minWidth: 0
                },
                [`${t}-column-sorters`]: {
                    display: "flex",
                    flex: "auto",
                    alignItems: "center",
                    justifyContent: "space-between",
                    "&::after": {
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        content: '""'
                    }
                },
                [`${t}-column-sorters-tooltip-target-sorter`]: {
                    "&::after": {
                        content: "none"
                    }
                },
                [`${t}-column-sorter`]: {
                    marginInlineStart: r,
                    color: o,
                    fontSize: 0,
                    transition: `color ${e.motionDurationSlow}`,
                    "&-inner": {
                        display: "inline-flex",
                        flexDirection: "column",
                        alignItems: "center"
                    },
                    "&-up, &-down": {
                        fontSize: n,
                        "&.active": {
                            color: e.colorPrimary
                        }
                    },
                    [`${t}-column-sorter-up + ${t}-column-sorter-down`]: {
                        marginTop: "-0.3em"
                    }
                },
                [`${t}-column-sorters:hover ${t}-column-sorter`]: {
                    color: a
                }
            }
        }
    },
    Sc = e => {
        const {
            componentCls: t,
            opacityLoading: r,
            tableScrollThumbBg: n,
            tableScrollThumbBgHover: o,
            tableScrollThumbSize: a,
            tableScrollBg: d,
            zIndexTableSticky: l,
            stickyScrollBarBorderRadius: c,
            lineWidth: s,
            lineType: f,
            tableBorderColor: u
        } = e, m = `${j(s)} ${f} ${u}`;
        return {
            [`${t}-wrapper`]: {
                [`${t}-sticky`]: {
                    "&-holder": {
                        position: "sticky",
                        zIndex: l,
                        background: e.colorBgContainer
                    },
                    "&-scroll": {
                        position: "sticky",
                        bottom: 0,
                        height: `${j(a)} !important`,
                        zIndex: l,
                        display: "flex",
                        alignItems: "center",
                        background: d,
                        borderTop: m,
                        opacity: r,
                        "&:hover": {
                            transformOrigin: "center bottom"
                        },
                        "&-bar": {
                            height: a,
                            backgroundColor: n,
                            borderRadius: c,
                            transition: `all ${e.motionDurationSlow}, transform 0s`,
                            position: "absolute",
                            bottom: 0,
                            "&:hover, &-active": {
                                backgroundColor: o
                            }
                        }
                    }
                }
            }
        }
    },
    co = e => {
        const {
            componentCls: t,
            lineWidth: r,
            tableBorderColor: n,
            calc: o
        } = e, a = `${j(r)} ${e.lineType} ${n}`;
        return {
            [`${t}-wrapper`]: {
                [`${t}-summary`]: {
                    position: "relative",
                    zIndex: e.zIndexTableFixed,
                    background: e.tableBg,
                    "> tr": {
                        "> th, > td": {
                            borderBottom: a
                        }
                    }
                },
                [`div${t}-summary`]: {
                    boxShadow: `0 ${j(o(r).mul(-1).equal())} 0 ${n}`
                }
            }
        }
    },
    wc = e => {
        const {
            componentCls: t,
            motionDurationMid: r,
            lineWidth: n,
            lineType: o,
            tableBorderColor: a,
            calc: d
        } = e, l = `${j(n)} ${o} ${a}`, c = `${t}-expanded-row-cell`;
        return {
            [`${t}-wrapper`]: {
                [`${t}-tbody-virtual`]: {
                    [`${t}-tbody-virtual-holder-inner`]: {
                        [`
            & > ${t}-row, 
            & > div:not(${t}-row) > ${t}-row
          `]: {
                            display: "flex",
                            boxSizing: "border-box",
                            width: "100%"
                        }
                    },
                    [`${t}-cell`]: {
                        borderBottom: l,
                        transition: `background ${r}`
                    },
                    [`${t}-expanded-row`]: {
                        [`${c}${c}-fixed`]: {
                            position: "sticky",
                            insetInlineStart: 0,
                            overflow: "hidden",
                            width: `calc(var(--virtual-width) - ${j(n)})`,
                            borderInlineEnd: "none"
                        }
                    }
                },
                [`${t}-bordered`]: {
                    [`${t}-tbody-virtual`]: {
                        "&:after": {
                            content: '""',
                            insetInline: 0,
                            bottom: 0,
                            borderBottom: l,
                            position: "absolute"
                        },
                        [`${t}-cell`]: {
                            borderInlineEnd: l,
                            [`&${t}-cell-fix-right-first:before`]: {
                                content: '""',
                                position: "absolute",
                                insetBlock: 0,
                                insetInlineStart: d(n).mul(-1).equal(),
                                borderInlineStart: l
                            }
                        }
                    },
                    [`&${t}-virtual`]: {
                        [`${t}-placeholder ${t}-cell`]: {
                            borderInlineEnd: l,
                            borderBottom: l
                        }
                    }
                }
            }
        }
    },
    Ec = e => {
        const {
            componentCls: t,
            fontWeightStrong: r,
            tablePaddingVertical: n,
            tablePaddingHorizontal: o,
            tableExpandColumnWidth: a,
            lineWidth: d,
            lineType: l,
            tableBorderColor: c,
            tableFontSize: s,
            tableBg: f,
            tableRadius: u,
            tableHeaderTextColor: m,
            motionDurationMid: v,
            tableHeaderBg: p,
            tableHeaderCellSplitColor: h,
            tableFooterTextColor: g,
            tableFooterBg: b,
            calc: S
        } = e, x = `${j(d)} ${l} ${c}`;
        return {
            [`${t}-wrapper`]: Object.assign(Object.assign({
                clear: "both",
                maxWidth: "100%",
                "--rc-virtual-list-scrollbar-bg": e.tableScrollBg
            }, Ea()), {
                [t]: Object.assign(Object.assign({}, pn(e)), {
                    fontSize: s,
                    background: f,
                    borderRadius: `${j(u)} ${j(u)} 0 0`,
                    scrollbarColor: `${e.tableScrollThumbBg} ${e.tableScrollBg}`
                }),
                table: {
                    width: "100%",
                    textAlign: "start",
                    borderRadius: `${j(u)} ${j(u)} 0 0`,
                    borderCollapse: "separate",
                    borderSpacing: 0
                },
                [`
          ${t}-cell,
          ${t}-thead > tr > th,
          ${t}-tbody > tr > th,
          ${t}-tbody > tr > td,
          tfoot > tr > th,
          tfoot > tr > td
        `]: {
                    position: "relative",
                    padding: `${j(n)} ${j(o)}`,
                    overflowWrap: "break-word"
                },
                [`${t}-title`]: {
                    padding: `${j(n)} ${j(o)}`
                },
                [`${t}-thead`]: {
                    "\n          > tr > th,\n          > tr > td\n        ": {
                        position: "relative",
                        color: m,
                        fontWeight: r,
                        textAlign: "start",
                        background: p,
                        borderBottom: x,
                        transition: `background ${v} ease`,
                        "&[colspan]:not([colspan='1'])": {
                            textAlign: "center"
                        },
                        [`&:not(:last-child):not(${t}-selection-column):not(${t}-row-expand-icon-cell):not([colspan])::before`]: {
                            position: "absolute",
                            top: "50%",
                            insetInlineEnd: 0,
                            width: 1,
                            height: "1.6em",
                            backgroundColor: h,
                            transform: "translateY(-50%)",
                            transition: `background-color ${v}`,
                            content: '""'
                        }
                    },
                    "> tr:not(:last-child) > th[colspan]": {
                        borderBottom: 0
                    }
                },
                [`${t}-tbody`]: {
                    "> tr": {
                        "> th, > td": {
                            transition: `background ${v}, border-color ${v}`,
                            borderBottom: x,
                            [`
              > ${t}-wrapper:only-child,
              > ${t}-expanded-row-fixed > ${t}-wrapper:only-child
            `]: {
                                [t]: {
                                    marginBlock: j(S(n).mul(-1).equal()),
                                    marginInline: `${j(S(a).sub(o).equal())}
                ${j(S(o).mul(-1).equal())}`,
                                    [`${t}-tbody > tr:last-child > td`]: {
                                        borderBottomWidth: 0,
                                        "&:first-child, &:last-child": {
                                            borderRadius: 0
                                        }
                                    }
                                }
                            }
                        },
                        "> th": {
                            position: "relative",
                            color: m,
                            fontWeight: r,
                            textAlign: "start",
                            background: p,
                            borderBottom: x,
                            transition: `background ${v} ease`
                        }
                    }
                },
                [`${t}-footer`]: {
                    padding: `${j(n)} ${j(o)}`,
                    color: g,
                    background: b
                }
            })
        }
    },
    $c = e => {
        const {
            colorFillAlter: t,
            colorBgContainer: r,
            colorTextHeading: n,
            colorFillSecondary: o,
            colorFillContent: a,
            controlItemBgActive: d,
            controlItemBgActiveHover: l,
            padding: c,
            paddingSM: s,
            paddingXS: f,
            colorBorderSecondary: u,
            borderRadiusLG: m,
            controlHeight: v,
            colorTextPlaceholder: p,
            fontSize: h,
            fontSizeSM: g,
            lineHeight: b,
            lineWidth: S,
            colorIcon: x,
            colorIconHover: w,
            opacityLoading: C,
            controlInteractiveSize: I
        } = e, R = new Zt(o).onBackground(r).toHexString(), N = new Zt(a).onBackground(r).toHexString(), y = new Zt(t).onBackground(r).toHexString(), K = new Zt(x), T = new Zt(w), P = I / 2 - S, O = P * 2 + S * 3;
        return {
            headerBg: y,
            headerColor: n,
            headerSortActiveBg: R,
            headerSortHoverBg: N,
            bodySortBg: y,
            rowHoverBg: y,
            rowSelectedBg: d,
            rowSelectedHoverBg: l,
            rowExpandedBg: t,
            cellPaddingBlock: c,
            cellPaddingInline: c,
            cellPaddingBlockMD: s,
            cellPaddingInlineMD: f,
            cellPaddingBlockSM: f,
            cellPaddingInlineSM: f,
            borderColor: u,
            headerBorderRadius: m,
            footerBg: y,
            footerColor: n,
            cellFontSize: h,
            cellFontSizeMD: h,
            cellFontSizeSM: h,
            headerSplitColor: u,
            fixedHeaderSortActiveBg: R,
            headerFilterHoverBg: a,
            filterDropdownMenuBg: r,
            filterDropdownBg: r,
            expandIconBg: r,
            selectionColumnWidth: v,
            stickyScrollBarBg: p,
            stickyScrollBarBorderRadius: 100,
            expandIconMarginTop: (h * b - S * 3) / 2 - Math.ceil((g * 1.4 - S * 3) / 2),
            headerIconColor: K.clone().setA(K.a * C).toRgbString(),
            headerIconHoverColor: T.clone().setA(T.a * C).toRgbString(),
            expandIconHalfInner: P,
            expandIconSize: O,
            expandIconScale: I / O
        }
    },
    uo = 2,
    Nc = qn("Table", e => {
        const {
            colorTextHeading: t,
            colorSplit: r,
            colorBgContainer: n,
            controlInteractiveSize: o,
            headerBg: a,
            headerColor: d,
            headerSortActiveBg: l,
            headerSortHoverBg: c,
            bodySortBg: s,
            rowHoverBg: f,
            rowSelectedBg: u,
            rowSelectedHoverBg: m,
            rowExpandedBg: v,
            cellPaddingBlock: p,
            cellPaddingInline: h,
            cellPaddingBlockMD: g,
            cellPaddingInlineMD: b,
            cellPaddingBlockSM: S,
            cellPaddingInlineSM: x,
            borderColor: w,
            footerBg: C,
            footerColor: I,
            headerBorderRadius: R,
            cellFontSize: N,
            cellFontSizeMD: y,
            cellFontSizeSM: K,
            headerSplitColor: T,
            fixedHeaderSortActiveBg: P,
            headerFilterHoverBg: O,
            filterDropdownBg: E,
            expandIconBg: $,
            selectionColumnWidth: k,
            stickyScrollBarBg: M,
            calc: A
        } = e, B = Xn(e, {
            tableFontSize: N,
            tableBg: n,
            tableRadius: R,
            tablePaddingVertical: p,
            tablePaddingHorizontal: h,
            tablePaddingVerticalMiddle: g,
            tablePaddingHorizontalMiddle: b,
            tablePaddingVerticalSmall: S,
            tablePaddingHorizontalSmall: x,
            tableBorderColor: w,
            tableHeaderTextColor: d,
            tableHeaderBg: a,
            tableFooterTextColor: I,
            tableFooterBg: C,
            tableHeaderCellSplitColor: T,
            tableHeaderSortBg: l,
            tableHeaderSortHoverBg: c,
            tableBodySortBg: s,
            tableFixedHeaderSortActiveBg: P,
            tableHeaderFilterActiveBg: O,
            tableFilterDropdownBg: E,
            tableRowHoverBg: f,
            tableSelectedRowBg: u,
            tableSelectedRowHoverBg: m,
            zIndexTableFixed: uo,
            zIndexTableSticky: A(uo).add(1).equal({
                unit: !1
            }),
            tableFontSizeMiddle: y,
            tableFontSizeSmall: K,
            tableSelectionColumnWidth: k,
            tableExpandIconBg: $,
            tableExpandColumnWidth: A(o).add(A(e.padding).mul(2)).equal(),
            tableExpandedRowBg: v,
            tableFilterDropdownWidth: 120,
            tableFilterDropdownHeight: 264,
            tableFilterDropdownSearchWidth: 140,
            tableScrollThumbSize: 8,
            tableScrollThumbBg: M,
            tableScrollThumbBgHover: t,
            tableScrollBg: r
        });
        return [Ec(B), gc(B), co(B), Cc(B), mc(B), dc(B), hc(B), vc(B), co(B), fc(B), bc(B), pc(B), Sc(B), uc(B), xc(B), yc(B), wc(B)]
    }, $c, {
        unitless: {
            expandIconScale: !0
        }
    }),
    Rc = [],
    kc = (e, t) => {
        var r, n;
        const {
            prefixCls: o,
            className: a,
            rootClassName: d,
            style: l,
            size: c,
            bordered: s,
            dropdownPrefixCls: f,
            dataSource: u,
            pagination: m,
            rowSelection: v,
            rowKey: p = "key",
            rowClassName: h,
            columns: g,
            children: b,
            childrenColumnName: S,
            onChange: x,
            getPopupContainer: w,
            loading: C,
            expandIcon: I,
            expandable: R,
            expandedRowRender: N,
            expandIconColumnIndex: y,
            indentSize: K,
            scroll: T,
            sortDirections: P,
            locale: O,
            showSorterTooltip: E = {
                target: "full-header"
            },
            virtual: $
        } = e;
        Qn();
        const k = i.useMemo(() => g || rr(b), [g, b]),
            M = i.useMemo(() => k.some(se => se.responsive), [k]),
            A = xo(M),
            B = i.useMemo(() => {
                const se = new Set(Object.keys(A).filter(ue => A[ue]));
                return k.filter(ue => !ue.responsive || ue.responsive.some(ke => se.has(ke)))
            }, [k, A]),
            q = fo(e, ["className", "style", "columns"]),
            {
                locale: oe = $a,
                direction: te,
                table: ne,
                renderEmpty: de,
                getPrefixCls: Oe,
                getPopupContainer: ae
            } = i.useContext(gn),
            Z = mo(c),
            Y = Object.assign(Object.assign({}, oe.Table), O),
            me = u || Rc,
            le = Oe("table", o),
            pe = Oe("dropdown", f),
            [, H] = Un(),
            J = Na(le),
            [V, X, _] = Nc(le, J),
            ee = Object.assign(Object.assign({
                childrenColumnName: S,
                expandIconColumnIndex: y
            }, R), {
                expandIcon: (r = R == null ? void 0 : R.expandIcon) !== null && r !== void 0 ? r : (n = ne == null ? void 0 : ne.expandable) === null || n === void 0 ? void 0 : n.expandIcon
            }),
            {
                childrenColumnName: we = "children"
            } = ee,
            je = i.useMemo(() => me.some(se => se == null ? void 0 : se[we]) ? "nest" : N || R != null && R.expandedRowRender ? "row" : null, [me]),
            Ie = {
                body: i.useRef(null)
            },
            z = Ss(le),
            F = i.useRef(null),
            ve = i.useRef(null);
        xs(t, () => Object.assign(Object.assign({}, ve.current), {
            nativeElement: F.current
        }));
        const $e = i.useMemo(() => typeof p == "function" ? p : se => se == null ? void 0 : se[p], [p]),
            [ie] = tc(me, we, $e),
            Pe = {},
            Te = (se, ue, ke = !1) => {
                var ze, Ue, ot, at;
                const Xe = Object.assign(Object.assign({}, Pe), se);
                ke && ((ze = Pe.resetPagination) === null || ze === void 0 || ze.call(Pe), !((Ue = Xe.pagination) === null || Ue === void 0) && Ue.current && (Xe.pagination.current = 1), m && ((ot = m.onChange) === null || ot === void 0 || ot.call(m, 1, (at = Xe.pagination) === null || at === void 0 ? void 0 : at.pageSize))), T && T.scrollToFirstRowOnChange !== !1 && Ie.body.current && Ya(0, {
                    getContainer: () => Ie.body.current
                }), x == null || x(Xe.pagination, Xe.filters, Xe.sorter, {
                    currentDataSource: Fn(Vn(me, Xe.sorterStates, we), Xe.filterStates, we),
                    action: ue
                })
            },
            We = (se, ue) => {
                Te({
                    sorter: se,
                    sorterStates: ue
                }, "sort", !1)
            },
            [ge, st, G, L] = lc({
                prefixCls: le,
                mergedColumns: B,
                onSorterChange: We,
                sortDirections: P || ["ascend", "descend"],
                tableLocale: Y,
                showSorterTooltip: E
            }),
            ce = i.useMemo(() => Vn(me, st, we), [me, st]);
        Pe.sorter = L(), Pe.sorterStates = st;
        const Me = (se, ue) => {
                Te({
                    filters: se,
                    filterStates: ue
                }, "filter", !0)
            },
            [Ke, Ne, Le] = ec({
                prefixCls: le,
                locale: Y,
                dropdownPrefixCls: pe,
                mergedColumns: B,
                onFilterChange: Me,
                getPopupContainer: w || ae,
                rootClassName: Q(d, J)
            }),
            he = Fn(ce, Ne, we);
        Pe.filters = Le, Pe.filterStates = Ne;
        const Be = i.useMemo(() => {
                const se = {};
                return Object.keys(Le).forEach(ue => {
                    Le[ue] !== null && (se[ue] = Le[ue])
                }), Object.assign(Object.assign({}, G), {
                    filters: se
                })
            }, [G, Le]),
            [rt] = ic(Be),
            qe = (se, ue) => {
                Te({
                    pagination: Object.assign(Object.assign({}, Pe.pagination), {
                        current: se,
                        pageSize: ue
                    })
                }, "paginate")
            },
            [Re, ht] = oc(he.length, qe, m);
        Pe.pagination = m === !1 ? {} : rc(Re, m), Pe.resetPagination = ht;
        const ct = i.useMemo(() => {
                if (m === !1 || !Re.pageSize) return he;
                const {
                    current: se = 1,
                    total: ue,
                    pageSize: ke = Jo
                } = Re;
                return he.length < ue ? he.length > ke ? he.slice((se - 1) * ke, se * ke) : he : he.slice((se - 1) * ke, se * ke)
            }, [!!m, he, Re == null ? void 0 : Re.current, Re == null ? void 0 : Re.pageSize, Re == null ? void 0 : Re.total]),
            [yt, Fe] = ys({
                prefixCls: le,
                data: he,
                pageData: ct,
                getRowKey: $e,
                getRecordByKey: ie,
                expandType: je,
                childrenColumnName: we,
                locale: Y,
                getPopupContainer: w || ae
            }, v),
            tt = (se, ue, ke) => {
                let ze;
                return typeof h == "function" ? ze = Q(h(se, ue, ke)) : ze = Q(h), Q({
                    [`${le}-row-selected`]: Fe.has($e(se, ue))
                }, ze)
            };
        ee.__PARENT_RENDER_ICON__ = ee.expandIcon, ee.expandIcon = ee.expandIcon || I || Cs(Y), je === "nest" && ee.expandIconColumnIndex === void 0 ? ee.expandIconColumnIndex = v ? 1 : 0 : ee.expandIconColumnIndex > 0 && v && (ee.expandIconColumnIndex -= 1), typeof ee.indentSize != "number" && (ee.indentSize = typeof K == "number" ? K : 15);
        const Ae = i.useCallback(se => rt(yt(Ke(ge(se)))), [ge, Ke, yt]);
        let Ge, Ye;
        if (m !== !1 && (Re != null && Re.total)) {
            let se;
            Re.size ? se = Re.size : se = Z === "small" || Z === "middle" ? "small" : void 0;
            const ue = Ue => i.createElement(wl, Object.assign({}, Re, {
                    className: Q(`${le}-pagination ${le}-pagination-${Ue}`, Re.className),
                    size: se
                })),
                ke = te === "rtl" ? "left" : "right",
                {
                    position: ze
                } = Re;
            if (ze !== null && Array.isArray(ze)) {
                const Ue = ze.find(Xe => Xe.includes("top")),
                    ot = ze.find(Xe => Xe.includes("bottom")),
                    at = ze.every(Xe => `${Xe}` == "none");
                !Ue && !ot && !at && (Ye = ue(ke)), Ue && (Ge = ue(Ue.toLowerCase().replace("top", ""))), ot && (Ye = ue(ot.toLowerCase().replace("bottom", "")))
            } else Ye = ue(ke)
        }
        let De;
        typeof C == "boolean" ? De = {
            spinning: C
        } : typeof C == "object" && (De = Object.assign({
            spinning: !0
        }, C));
        const _e = Q(_, J, `${le}-wrapper`, ne == null ? void 0 : ne.className, {
                [`${le}-wrapper-rtl`]: te === "rtl"
            }, a, d, X),
            nt = Object.assign(Object.assign({}, ne == null ? void 0 : ne.style), l),
            Xt = typeof(O == null ? void 0 : O.emptyText) < "u" ? O.emptyText : (de == null ? void 0 : de("Table")) || i.createElement(Pa, {
                componentName: "Table"
            }),
            Ut = $ ? cc : sc,
            bt = {},
            Gt = i.useMemo(() => {
                const {
                    fontSize: se,
                    lineHeight: ue,
                    lineWidth: ke,
                    padding: ze,
                    paddingXS: Ue,
                    paddingSM: ot
                } = H, at = Math.floor(se * ue);
                switch (Z) {
                    case "middle":
                        return ot * 2 + at + ke;
                    case "small":
                        return Ue * 2 + at + ke;
                    default:
                        return ze * 2 + at + ke
                }
            }, [H, Z]);
        return $ && (bt.listItemHeight = Gt), V(i.createElement("div", {
            ref: F,
            className: _e,
            style: nt
        }, i.createElement(Ra, Object.assign({
            spinning: !1
        }, De), Ge, i.createElement(Ut, Object.assign({}, bt, q, {
            ref: ve,
            columns: B,
            direction: te,
            expandable: ee,
            prefixCls: le,
            className: Q({
                [`${le}-middle`]: Z === "middle",
                [`${le}-small`]: Z === "small",
                [`${le}-bordered`]: s,
                [`${le}-empty`]: me.length === 0
            }, _, J, X),
            data: ct,
            rowKey: $e,
            rowClassName: tt,
            emptyText: Xt,
            internalHooks: cn,
            internalRefs: Ie,
            transformColumns: Ae,
            getContainerWidth: z
        })), Ye)))
    },
    Ic = i.forwardRef(kc),
    Kc = (e, t) => {
        const r = i.useRef(0);
        return r.current += 1, i.createElement(Ic, Object.assign({}, e, {
            ref: t,
            _renderTimes: r.current
        }))
    },
    kt = i.forwardRef(Kc);
kt.SELECTION_COLUMN = wt;
kt.EXPAND_COLUMN = Ct;
kt.SELECTION_ALL = Ln;
kt.SELECTION_INVERT = _n;
kt.SELECTION_NONE = Hn;
kt.Column = is;
kt.ColumnGroup = ss;
kt.Summary = Ko;
const ea = ["dashboard-classes"],
    Fc = () => Xa(ea, () => Ia({
        url: "/api/v1/groups"
    })),
    Wc = () => ka.invalidateQueries(ea);
export {
    kt as F, wl as P, Fl as R, Wc as i, Fc as u
};