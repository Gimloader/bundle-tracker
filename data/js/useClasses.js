import {
    o as e
} from "./rolldown-runtime.js";
import {
    w as t
} from "./utils.js";
import {
    t as n
} from "./react-1.js";
import {
    c as r,
    l as i,
    n as a,
    s as o,
    t as s
} from "./assertThisInitialized.js";
import {
    Bt as c,
    C as l,
    Ct as u,
    Dt as d,
    E as f,
    Et as p,
    Ft as m,
    H as h,
    Ht as g,
    It as _,
    J as v,
    Lt as y,
    Mt as b,
    Pt as x,
    Tt as S,
    Ut as C,
    Vt as w,
    X as T,
    _ as E,
    a as D,
    b as O,
    c as k,
    ct as A,
    d as j,
    et as M,
    g as N,
    gt as P,
    ht as F,
    k as I,
    kt as L,
    l as ee,
    lt as R,
    m as z,
    nt as B,
    p as V,
    s as H,
    tt as U,
    u as W,
    ut as G,
    wt as te,
    x as K,
    xt as ne,
    zt as q
} from "./Compact.js";
import {
    _ as re,
    b as ie,
    d as J,
    i as ae,
    r as oe,
    s as se,
    v as Y
} from "./color.js";
import {
    t as ce
} from "./es-2.js";
import {
    n as le,
    r as ue
} from "./compact-item.js";
import {
    A as de,
    N as fe,
    O as pe,
    v as me,
    w as he,
    y as ge
} from "./ContextIsolator.js";
import {
    a as _e,
    r as X,
    t as ve
} from "./useLocale.js";
import {
    t as ye
} from "./tooltip.js";
import {
    t as be
} from "./useCSSVarCls.js";
import {
    t as xe
} from "./pickAttrs.js";
import {
    c as Se
} from "./modal.js";
import {
    t as Ce
} from "./button.js";
import {
    a as we,
    i as Te,
    o as Ee,
    r as De,
    t as Oe
} from "./dropdown.js";
import {
    t as ke
} from "./collapse.js";
import {
    t as Ae
} from "./styleChecker.js";
import {
    a as je,
    o as Me,
    s as Ne,
    t as Pe
} from "./select.js";
import {
    b as Fe,
    d as Ie,
    i as Le,
    l as Re,
    p as ze,
    s as Be,
    x as Ve,
    y as He
} from "./input.js";
import {
    t as Ue
} from "./DownOutlined.js";
import {
    t as Z
} from "./useBreakpoint.js";
import {
    t as We
} from "./useForceUpdate.js";
import {
    t as Ge
} from "./radio.js";
import {
    t as Ke
} from "./spin.js";
import {
    n as qe,
    t as Je
} from "./checkbox.js";
import {
    t as Ye
} from "./useQuery.js";
import {
    r as Xe
} from "./_index.js";
var Q = e(n()),
    Ze = e(i()),
    $ = e(C());
r(), g(), y(), P(), G(), B();

function Qe(e) {
    return e != null && e === e.window
}
var $e = e => {
    var t;
    if (typeof window > `u`) return 0;
    let n = 0;
    return Qe(e) ? n = e.pageYOffset : e instanceof Document ? n = e.documentElement.scrollTop : (e instanceof HTMLElement || e) && (n = e.scrollTop), e && !Qe(e) && typeof n != `number` && (n = (t = (e.ownerDocument ?? e).documentElement) == null ? void 0 : t.scrollTop), n
};

function et(e, t, n, r) {
    let i = n - t;
    return e /= r / 2, e < 1 ? i / 2 * e * e * e + t : i / 2 * ((e -= 2) * e * e + 2) + t
}

function tt(e, t = {}) {
    let {
        getContainer: n = () => window,
        callback: r,
        duration: i = 450
    } = t, a = n(), o = $e(a), s = Date.now(), c = () => {
        let t = Date.now() - s,
            n = et(t > i ? i : t, o, e, i);
        Qe(a) ? a.scrollTo(window.pageXOffset, n) : a instanceof Document || a.constructor.name === `HTMLDocument` ? a.documentElement.scrollTop = n : a.scrollTop = n, t < i ? Y(c) : typeof r == `function` && r()
    };
    Y(c)
}

function nt(e, t) {
    return e[t]
}
var rt = [`children`];

function it(e, t) {
    return `${e}-${t}`
}

function at(e) {
    return e && e.type && e.type.isTreeNode
}

function ot(e, t) {
    return e ?? t
}

function st(e) {
    var t = e || {},
        n = t.title,
        r = t._title,
        i = t.key,
        a = t.children,
        o = n || `title`;
    return {
        title: o,
        _title: r || [o],
        key: i || `key`,
        children: a || `children`
    }
}

function ct(e) {
    function t(e) {
        return c(e).map(function(e) {
            if (!at(e)) return q(!e, `Tree/TreeNode can only accept TreeNode as children.`), null;
            var n = e.key,
                r = e.props,
                i = r.children,
                a = U(r, rt),
                o = m({
                    key: n
                }, a),
                s = t(i);
            return s.length && (o.children = s), o
        }).filter(function(e) {
            return e
        })
    }
    return t(e)
}

function lt(e, t, n) {
    var r = st(n),
        i = r._title,
        a = r.key,
        o = r.children,
        s = new Set(t === !0 ? [] : t),
        c = [];

    function l(e) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        return e.map(function(r, u) {
            for (var d = it(n ? n.pos : `0`, u), f = ot(r[a], d), p, m = 0; m < i.length; m += 1) {
                var h = i[m];
                if (r[h] !== void 0) {
                    p = r[h];
                    break
                }
            }
            var g = Object.assign(ae(r, [].concat(F(i), [a, o])), {
                title: p,
                key: f,
                parent: n,
                pos: d,
                children: null,
                data: r,
                isStart: [].concat(F(n ? n.isStart : []), [u === 0]),
                isEnd: [].concat(F(n ? n.isEnd : []), [u === e.length - 1])
            });
            return c.push(g), g.children = t === !0 || s.has(f) ? l(r[o] || [], g) : [], g
        })
    }
    return l(e), c
}

function ut(e, t, n) {
    var r = {};
    r = w(n) === `object` ? n : {
        externalGetKey: n
    }, r = r || {};
    var i = r,
        a = i.childrenPropName,
        o = i.externalGetKey,
        s = i.fieldNames,
        c = st(s),
        l = c.key,
        u = c.children,
        d = a || u,
        f;
    o ? typeof o == `string` ? f = function(e) {
        return e[o]
    } : typeof o == `function` && (f = function(e) {
        return o(e)
    }) : f = function(e, t) {
        return ot(e[l], t)
    };

    function p(n, r, i, a) {
        var o = n ? n[d] : e,
            s = n ? it(i.pos, r) : `0`,
            c = n ? [].concat(F(a), [n]) : [];
        n && t({
            node: n,
            index: r,
            pos: s,
            key: f(n, s),
            parentPos: i.node ? i.pos : null,
            level: i.level + 1,
            nodes: c
        }), o && o.forEach(function(e, t) {
            p(e, t, {
                node: n,
                pos: s,
                level: i ? i.level + 1 : -1
            }, c)
        })
    }
    p(null)
}

function dt(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = t.initWrapper,
        r = t.processEntity,
        i = t.onProcessFinished,
        a = t.externalGetKey,
        o = t.childrenPropName,
        s = t.fieldNames,
        c = arguments.length > 2 ? arguments[2] : void 0,
        l = a || c,
        u = {},
        d = {},
        f = {
            posEntities: u,
            keyEntities: d
        };
    return n && (f = n(f) || f), ut(e, function(e) {
        var t = e.node,
            n = e.index,
            i = e.pos,
            a = e.key,
            o = e.parentPos,
            s = e.level,
            c = {
                node: t,
                nodes: e.nodes,
                index: n,
                key: a,
                pos: i,
                level: s
            },
            l = ot(a, i);
        u[i] = c, d[l] = c, c.parent = u[o], c.parent && (c.parent.children = c.parent.children || [], c.parent.children.push(c)), r && r(c, f)
    }, {
        externalGetKey: l,
        childrenPropName: o,
        fieldNames: s
    }), i && i(f), f
}

function ft(e, t) {
    var n = t.expandedKeys,
        r = t.selectedKeys,
        i = t.loadedKeys,
        a = t.loadingKeys,
        o = t.checkedKeys,
        s = t.halfCheckedKeys,
        c = t.dragOverNodeKey,
        l = t.dropPosition,
        u = t.keyEntities,
        d = nt(u, e);
    return {
        eventKey: e,
        expanded: n.indexOf(e) !== -1,
        selected: r.indexOf(e) !== -1,
        loaded: i.indexOf(e) !== -1,
        loading: a.indexOf(e) !== -1,
        checked: o.indexOf(e) !== -1,
        halfChecked: s.indexOf(e) !== -1,
        pos: String(d ? d.pos : ``),
        dragOver: c === e && l === 0,
        dragOverGapTop: c === e && l === -1,
        dragOverGapBottom: c === e && l === 1
    }
}

function pt(e) {
    var t = e.data,
        n = e.expanded,
        r = e.selected,
        i = e.checked,
        a = e.loaded,
        o = e.loading,
        s = e.halfChecked,
        c = e.dragOver,
        l = e.dragOverGapTop,
        u = e.dragOverGapBottom,
        d = e.pos,
        f = e.active,
        p = e.eventKey,
        h = m(m({}, t), {}, {
            expanded: n,
            selected: r,
            checked: i,
            loaded: a,
            loading: o,
            halfChecked: s,
            dragOver: c,
            dragOverGapTop: l,
            dragOverGapBottom: u,
            pos: d,
            active: f,
            key: p
        });
    return `props` in h || Object.defineProperty(h, "props", {
        get: function() {
            return q(!1, "Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."), e
        }
    }), h
}

function mt(e, t) {
    var n = new Set;
    return e.forEach(function(e) {
        t.has(e) || n.add(e)
    }), n
}

function ht(e) {
    var t = e || {},
        n = t.disabled,
        r = t.disableCheckbox,
        i = t.checkable;
    return !!(n || r) || i === !1
}

function gt(e, t, n, r) {
    for (var i = new Set(e), a = new Set, o = 0; o <= n; o += 1)(t.get(o) || new Set).forEach(function(e) {
        var t = e.key,
            n = e.node,
            a = e.children,
            o = a === void 0 ? [] : a;
        i.has(t) && !r(n) && o.filter(function(e) {
            return !r(e.node)
        }).forEach(function(e) {
            i.add(e.key)
        })
    });
    for (var s = new Set, c = n; c >= 0; --c)(t.get(c) || new Set).forEach(function(e) {
        var t = e.parent,
            n = e.node;
        if (!(r(n) || !e.parent || s.has(e.parent.key))) {
            if (r(e.parent.node)) s.add(t.key);
            else {
                var o = !0,
                    c = !1;
                (t.children || []).filter(function(e) {
                    return !r(e.node)
                }).forEach(function(e) {
                    var t = e.key,
                        n = i.has(t);
                    o && !n && (o = !1), !c && (n || a.has(t)) && (c = !0)
                }), o && i.add(t.key), c && a.add(t.key), s.add(t.key)
            }
        }
    });
    return {
        checkedKeys: Array.from(i),
        halfCheckedKeys: Array.from(mt(a, i))
    }
}

function _t(e, t, n, r, i) {
    for (var a = new Set(e), o = new Set(t), s = 0; s <= r; s += 1)(n.get(s) || new Set).forEach(function(e) {
        var t = e.key,
            n = e.node,
            r = e.children,
            s = r === void 0 ? [] : r;
        !a.has(t) && !o.has(t) && !i(n) && s.filter(function(e) {
            return !i(e.node)
        }).forEach(function(e) {
            a.delete(e.key)
        })
    });
    o = new Set;
    for (var c = new Set, l = r; l >= 0; --l)(n.get(l) || new Set).forEach(function(e) {
        var t = e.parent,
            n = e.node;
        if (!(i(n) || !e.parent || c.has(e.parent.key))) {
            if (i(e.parent.node)) c.add(t.key);
            else {
                var r = !0,
                    s = !1;
                (t.children || []).filter(function(e) {
                    return !i(e.node)
                }).forEach(function(e) {
                    var t = e.key,
                        n = a.has(t);
                    r && !n && (r = !1), !s && (n || o.has(t)) && (s = !0)
                }), r || a.delete(t.key), s && o.add(t.key), c.add(t.key)
            }
        }
    });
    return {
        checkedKeys: Array.from(a),
        halfCheckedKeys: Array.from(mt(o, a))
    }
}

function vt(e, t, n, r) {
    var i = [],
        a = r || ht,
        o = new Set(e.filter(function(e) {
            var t = !!nt(n, e);
            return t || i.push(e), t
        })),
        s = new Map,
        c = 0;
    return Object.keys(n).forEach(function(e) {
        var t = n[e],
            r = t.level,
            i = s.get(r);
        i || (i = new Set, s.set(r, i)), i.add(t), c = Math.max(c, r)
    }), q(!i.length, `Tree missing follow keys: ${i.slice(0,100).map(function(e){return`'${e}'`}).join(`, `)}`), t === !0 ? gt(o, s, c, a) : _t(o, t.halfCheckedKeys, s, c, a)
}

function yt(e, t, n, r) {
    var i = Ze.unstable_batchedUpdates ? function(e) {
        Ze.unstable_batchedUpdates(n, e)
    } : n;
    return e != null && e.addEventListener && e.addEventListener(t, i, r), {
        remove: function() {
            e != null && e.removeEventListener && e.removeEventListener(t, i, r)
        }
    }
}
var bt = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z`
                }
            }]
        },
        name: `double-left`,
        theme: `outlined`
    },
    xt = Q.forwardRef(function(e, t) {
        return Q.createElement(ue, o({}, e, {
            ref: t,
            icon: bt
        }))
    }),
    St = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z`
                }
            }]
        },
        name: `double-right`,
        theme: `outlined`
    };
r();
var Ct = Q.forwardRef(function(e, t) {
        return Q.createElement(ue, o({}, e, {
            ref: t,
            icon: St
        }))
    }),
    wt = {
        items_per_page: `条/页`,
        jump_to: `跳至`,
        jump_to_confirm: `确定`,
        page: `页`,
        prev_page: `上一页`,
        next_page: `下一页`,
        prev_5: `向前 5 页`,
        next_5: `向后 5 页`,
        prev_3: `向前 3 页`,
        next_3: `向后 3 页`,
        page_size: `页码`
    },
    Tt = [10, 20, 50, 100],
    Et = function(e) {
        var t = e.pageSizeOptions,
            n = t === void 0 ? Tt : t,
            r = e.locale,
            i = e.changeSize,
            a = e.pageSize,
            o = e.goButton,
            s = e.quickGo,
            c = e.rootPrefixCls,
            l = e.disabled,
            u = e.buildOptionText,
            d = e.showSizeChanger,
            f = e.sizeChangerRender,
            p = Q.useState(``),
            m = R(p, 2),
            h = m[0],
            g = m[1],
            _ = function() {
                return !h || Number.isNaN(h) ? void 0 : Number(h)
            },
            v = typeof u == `function` ? u : function(e) {
                return `${e} ${r.items_per_page}`
            },
            y = function(e) {
                g(e.target.value)
            },
            b = function(e) {
                o || h === `` || (g(``), !(e.relatedTarget && (e.relatedTarget.className.indexOf(`${c}-item-link`) >= 0 || e.relatedTarget.className.indexOf(`${c}-item`) >= 0)) && (s == null || s(_())))
            },
            x = function(e) {
                h !== `` && (e.keyCode === pe.ENTER || e.type === `click`) && (g(``), s == null || s(_()))
            },
            S = function() {
                return n.some(function(e) {
                    return e.toString() === a.toString()
                }) ? n : n.concat([a]).sort(function(e, t) {
                    return (Number.isNaN(Number(e)) ? 0 : Number(e)) - (Number.isNaN(Number(t)) ? 0 : Number(t))
                })
            },
            C = `${c}-options`;
        if (!d && !s) return null;
        var w = null,
            T = null,
            E = null;
        return d && f && (w = f({
            disabled: l,
            size: a,
            onSizeChange: function(e) {
                i == null || i(Number(e))
            },
            "aria-label": r.page_size,
            className: `${C}-size-changer`,
            options: S().map(function(e) {
                return {
                    label: v(e),
                    value: e
                }
            })
        })), s && (o && (E = typeof o == `boolean` ? Q.createElement(`button`, {
            type: `button`,
            onClick: x,
            onKeyUp: x,
            disabled: l,
            className: `${C}-quick-jumper-button`
        }, r.jump_to_confirm) : Q.createElement(`span`, {
            onClick: x,
            onKeyUp: x
        }, o)), T = Q.createElement(`div`, {
            className: `${C}-quick-jumper`
        }, r.jump_to, Q.createElement(`input`, {
            disabled: l,
            type: `text`,
            value: h,
            onChange: y,
            onKeyUp: x,
            onBlur: b,
            "aria-label": r.page
        }), r.page, E)), Q.createElement(`li`, {
            className: C
        }, w, T)
    },
    Dt = function(e) {
        var t = e.rootPrefixCls,
            n = e.page,
            r = e.active,
            i = e.className,
            a = e.showTitle,
            o = e.onClick,
            s = e.onKeyPress,
            c = e.itemRender,
            l = `${t}-item`,
            u = (0, $.default)(l, `${l}-${n}`, _(_({}, `${l}-active`, r), `${l}-disabled`, !n), i),
            d = function() {
                o(n)
            },
            f = function(e) {
                s(e, o, n)
            },
            p = c(n, `page`, Q.createElement(`a`, {
                rel: `nofollow`
            }, n));
        return p ? Q.createElement(`li`, {
            title: a ? String(n) : null,
            className: u,
            onClick: d,
            onKeyDown: f,
            tabIndex: 0
        }, p) : null
    };
y(), r(), g(), G();
var Ot = function(e, t, n) {
    return n
};

function kt() {}

function At(e) {
    var t = Number(e);
    return typeof t == `number` && !Number.isNaN(t) && isFinite(t) && Math.floor(t) === t
}

function jt(e, t, n) {
    var r = e === void 0 ? t : e;
    return Math.floor((n - 1) / r) + 1
}
var Mt = function(e) {
        var t = e.prefixCls,
            n = t === void 0 ? `rc-pagination` : t,
            r = e.selectPrefixCls,
            i = r === void 0 ? `rc-select` : r,
            a = e.className,
            s = e.current,
            c = e.defaultCurrent,
            l = c === void 0 ? 1 : c,
            u = e.total,
            d = u === void 0 ? 0 : u,
            f = e.pageSize,
            p = e.defaultPageSize,
            h = p === void 0 ? 10 : p,
            g = e.onChange,
            v = g === void 0 ? kt : g,
            y = e.hideOnSinglePage,
            b = e.align,
            x = e.showPrevNextJumpers,
            S = x === void 0 || x,
            C = e.showQuickJumper,
            T = e.showLessItems,
            E = e.showTitle,
            D = E === void 0 || E,
            O = e.onShowSizeChange,
            k = O === void 0 ? kt : O,
            A = e.locale,
            j = A === void 0 ? wt : A,
            M = e.style,
            N = e.totalBoundaryShowSizeChanger,
            P = N === void 0 ? 50 : N,
            F = e.disabled,
            I = e.simple,
            L = e.showTotal,
            ee = e.showSizeChanger,
            z = ee === void 0 ? d > P : ee,
            B = e.sizeChangerRender,
            V = e.pageSizeOptions,
            H = e.itemRender,
            U = H === void 0 ? Ot : H,
            W = e.jumpPrevIcon,
            G = e.jumpNextIcon,
            te = e.prevIcon,
            ne = e.nextIcon,
            q = Q.useRef(null),
            re = K(10, {
                value: f,
                defaultValue: h
            }),
            ie = R(re, 2),
            J = ie[0],
            ae = ie[1],
            oe = K(1, {
                value: s,
                defaultValue: l,
                postState: function(e) {
                    return Math.max(1, Math.min(e, jt(void 0, J, d)))
                }
            }),
            se = R(oe, 2),
            Y = se[0],
            ce = se[1],
            le = Q.useState(Y),
            ue = R(le, 2),
            de = ue[0],
            fe = ue[1];
        (0, Q.useEffect)(function() {
            fe(Y)
        }, [Y]), `current` in e;
        var me = Math.max(1, Y - (T ? 3 : 5)),
            he = Math.min(jt(void 0, J, d), Y + (T ? 3 : 5));

        function ge(t, r) {
            var i = t || Q.createElement(`button`, {
                type: `button`,
                "aria-label": r,
                className: `${n}-item-link`
            });
            return typeof t == `function` && (i = Q.createElement(t, m({}, e))), i
        }

        function _e(e) {
            var t = e.target.value,
                n = jt(void 0, J, d);
            return t === `` ? t : Number.isNaN(Number(t)) ? de : t >= n ? n : Number(t)
        }

        function X(e) {
            return At(e) && e !== Y && At(d) && d > 0
        }
        var ve = d > J && C;

        function ye(e) {
            (e.keyCode === pe.UP || e.keyCode === pe.DOWN) && e.preventDefault()
        }

        function be(e) {
            var t = _e(e);
            switch (t !== de && fe(t), e.keyCode) {
                case pe.ENTER:
                    we(t);
                    break;
                case pe.UP:
                    we(t - 1);
                    break;
                case pe.DOWN:
                    we(t + 1)
            }
        }

        function Se(e) {
            we(_e(e))
        }

        function Ce(e) {
            var t = jt(e, J, d),
                n = Y > t && t !== 0 ? t : Y;
            ae(e), fe(n), k == null || k(Y, e), ce(n), v == null || v(n, e)
        }

        function we(e) {
            if (X(e) && !F) {
                var t = jt(void 0, J, d),
                    n = e;
                return e > t ? n = t : e < 1 && (n = 1), n !== de && fe(n), ce(n), v == null || v(n, J), n
            }
            return Y
        }
        var Te = Y > 1,
            Ee = Y < jt(void 0, J, d);

        function De() {
            Te && we(Y - 1)
        }

        function Oe() {
            Ee && we(Y + 1)
        }

        function ke() {
            we(me)
        }

        function Ae() {
            we(he)
        }

        function je(e, t) {
            if (e.key === `Enter` || e.charCode === pe.ENTER || e.keyCode === pe.ENTER) {
                var n = [...arguments].slice(2);
                t.apply(void 0, n)
            }
        }

        function Me(e) {
            je(e, De)
        }

        function Ne(e) {
            je(e, Oe)
        }

        function Pe(e) {
            je(e, ke)
        }

        function Fe(e) {
            je(e, Ae)
        }

        function Ie(e) {
            var t = U(e, `prev`, ge(te, `prev page`));
            return Q.isValidElement(t) ? Q.cloneElement(t, {
                disabled: !Te
            }) : t
        }

        function Le(e) {
            var t = U(e, `next`, ge(ne, `next page`));
            return Q.isValidElement(t) ? Q.cloneElement(t, {
                disabled: !Ee
            }) : t
        }

        function Re(e) {
            (e.type === `click` || e.keyCode === pe.ENTER) && we(de)
        }
        var ze = null,
            Be = xe(e, {
                aria: !0,
                data: !0
            }),
            Ve = L && Q.createElement(`li`, {
                className: `${n}-total-text`
            }, L(d, [d === 0 ? 0 : (Y - 1) * J + 1, Y * J > d ? d : Y * J])),
            He = null,
            Ue = jt(void 0, J, d);
        if (y && d <= J) return null;
        var Z = [],
            We = {
                rootPrefixCls: n,
                onClick: we,
                onKeyPress: je,
                showTitle: D,
                itemRender: U,
                page: -1
            },
            Ge = Y - 1 > 0 ? Y - 1 : 0,
            Ke = Y + 1 < Ue ? Y + 1 : Ue,
            qe = C && C.goButton,
            Je = w(I) === `object` ? I.readOnly : !I,
            Ye = qe,
            Xe = null;
        I && (qe && (Ye = typeof qe == `boolean` ? Q.createElement(`button`, {
            type: `button`,
            onClick: Re,
            onKeyUp: Re
        }, j.jump_to_confirm) : Q.createElement(`span`, {
            onClick: Re,
            onKeyUp: Re
        }, qe), Ye = Q.createElement(`li`, {
            title: D ? `${j.jump_to}${Y}/${Ue}` : null,
            className: `${n}-simple-pager`
        }, Ye)), Xe = Q.createElement(`li`, {
            title: D ? `${Y}/${Ue}` : null,
            className: `${n}-simple-pager`
        }, Je ? de : Q.createElement(`input`, {
            type: `text`,
            "aria-label": j.jump_to,
            value: de,
            disabled: F,
            onKeyDown: ye,
            onKeyUp: be,
            onChange: be,
            onBlur: Se,
            size: 3
        }), Q.createElement(`span`, {
            className: `${n}-slash`
        }, `/`), Ue));
        var Ze = T ? 1 : 2;
        if (Ue <= 3 + Ze * 2) {
            Ue || Z.push(Q.createElement(Dt, o({}, We, {
                key: `noPager`,
                page: 1,
                className: `${n}-item-disabled`
            })));
            for (var Qe = 1; Qe <= Ue; Qe += 1) Z.push(Q.createElement(Dt, o({}, We, {
                key: Qe,
                page: Qe,
                active: Y === Qe
            })))
        } else {
            var $e = T ? j.prev_3 : j.prev_5,
                et = T ? j.next_3 : j.next_5,
                tt = U(me, `jump-prev`, ge(W, `prev page`)),
                nt = U(he, `jump-next`, ge(G, `next page`));
            S && (ze = tt ? Q.createElement(`li`, {
                title: D ? $e : null,
                key: `prev`,
                onClick: ke,
                tabIndex: 0,
                onKeyDown: Pe,
                className: (0, $.default)(`${n}-jump-prev`, _({}, `${n}-jump-prev-custom-icon`, !!W))
            }, tt) : null, He = nt ? Q.createElement(`li`, {
                title: D ? et : null,
                key: `next`,
                onClick: Ae,
                tabIndex: 0,
                onKeyDown: Fe,
                className: (0, $.default)(`${n}-jump-next`, _({}, `${n}-jump-next-custom-icon`, !!G))
            }, nt) : null);
            var rt = Math.max(1, Y - Ze),
                it = Math.min(Y + Ze, Ue);
            Y - 1 <= Ze && (it = 1 + Ze * 2), Ue - Y <= Ze && (rt = Ue - Ze * 2);
            for (var at = rt; at <= it; at += 1) Z.push(Q.createElement(Dt, o({}, We, {
                key: at,
                page: at,
                active: Y === at
            })));
            if (Y - 1 >= Ze * 2 && Y !== 3 && (Z[0] = Q.cloneElement(Z[0], {
                    className: (0, $.default)(`${n}-item-after-jump-prev`, Z[0].props.className)
                }), Z.unshift(ze)), Ue - Y >= Ze * 2 && Y !== Ue - 2) {
                var ot = Z[Z.length - 1];
                Z[Z.length - 1] = Q.cloneElement(ot, {
                    className: (0, $.default)(`${n}-item-before-jump-next`, ot.props.className)
                }), Z.push(He)
            }
            rt !== 1 && Z.unshift(Q.createElement(Dt, o({}, We, {
                key: 1,
                page: 1
            }))), it !== Ue && Z.push(Q.createElement(Dt, o({}, We, {
                key: Ue,
                page: Ue
            })))
        }
        var st = Ie(Ge);
        if (st) {
            var ct = !Te || !Ue;
            st = Q.createElement(`li`, {
                title: D ? j.prev_page : null,
                onClick: De,
                tabIndex: ct ? null : 0,
                onKeyDown: Me,
                className: (0, $.default)(`${n}-prev`, _({}, `${n}-disabled`, ct)),
                "aria-disabled": ct
            }, st)
        }
        var lt = Le(Ke);
        if (lt) {
            var ut, dt;
            I ? (ut = !Ee, dt = Te ? 0 : null) : (ut = !Ee || !Ue, dt = ut ? null : 0), lt = Q.createElement(`li`, {
                title: D ? j.next_page : null,
                onClick: Oe,
                tabIndex: dt,
                onKeyDown: Ne,
                className: (0, $.default)(`${n}-next`, _({}, `${n}-disabled`, ut)),
                "aria-disabled": ut
            }, lt)
        }
        var ft = (0, $.default)(n, a, _(_(_(_(_({}, `${n}-start`, b === `start`), `${n}-center`, b === `center`), `${n}-end`, b === `end`), `${n}-simple`, I), `${n}-disabled`, F));
        return Q.createElement(`ul`, o({
            className: ft,
            style: M,
            ref: q
        }, Be), Ve, st, I ? Xe : Z, lt, Q.createElement(Et, {
            locale: j,
            rootPrefixCls: n,
            disabled: F,
            selectPrefixCls: i,
            changeSize: Ce,
            pageSize: J,
            pageSizeOptions: V,
            quickGo: ve ? we : null,
            goButton: Ye,
            showSizeChanger: z,
            sizeChangerRender: B
        }))
    },
    Nt = e => {
        let {
            componentCls: t
        } = e;
        return {
            [`${t}-disabled`]: {
                "&, &:hover": {
                    cursor: `not-allowed`,
                    [`${t}-item-link`]: {
                        color: e.colorTextDisabled,
                        cursor: `not-allowed`
                    }
                },
                "&:focus-visible": {
                    cursor: `not-allowed`,
                    [`${t}-item-link`]: {
                        color: e.colorTextDisabled,
                        cursor: `not-allowed`
                    }
                }
            },
            [`&${t}-disabled`]: {
                cursor: `not-allowed`,
                [`${t}-item`]: {
                    cursor: `not-allowed`,
                    backgroundColor: `transparent`,
                    "&:hover, &:active": {
                        backgroundColor: `transparent`
                    },
                    a: {
                        color: e.colorTextDisabled,
                        backgroundColor: `transparent`,
                        border: `none`,
                        cursor: `not-allowed`
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
                    cursor: `not-allowed`,
                    "&:hover, &:active": {
                        backgroundColor: `transparent`
                    },
                    [`${t}-simple&`]: {
                        backgroundColor: `transparent`,
                        "&:hover, &:active": {
                            backgroundColor: `transparent`
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
    Pt = e => {
        let {
            componentCls: t
        } = e;
        return {
            [`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]: {
                height: e.itemSizeSM,
                lineHeight: T(e.itemSizeSM)
            },
            [`&${t}-mini ${t}-item`]: {
                minWidth: e.itemSizeSM,
                height: e.itemSizeSM,
                margin: 0,
                lineHeight: T(e.calc(e.itemSizeSM).sub(2).equal())
            },
            [`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]: {
                minWidth: e.itemSizeSM,
                height: e.itemSizeSM,
                margin: 0,
                lineHeight: T(e.itemSizeSM)
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
                        backgroundColor: `transparent`
                    }
                }
            },
            [`
    &${t}-mini ${t}-prev ${t}-item-link,
    &${t}-mini ${t}-next ${t}-item-link
    `]: {
                backgroundColor: `transparent`,
                borderColor: `transparent`,
                "&::after": {
                    height: e.itemSizeSM,
                    lineHeight: T(e.itemSizeSM)
                }
            },
            [`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]: {
                height: e.itemSizeSM,
                marginInlineEnd: 0,
                lineHeight: T(e.itemSizeSM)
            },
            [`&${t}-mini ${t}-options`]: {
                marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
                "&-size-changer": {
                    top: e.miniOptionsSizeChangerTop
                },
                "&-quick-jumper": {
                    height: e.itemSizeSM,
                    lineHeight: T(e.itemSizeSM),
                    input: Object.assign(Object.assign({}, Re(e)), {
                        width: e.paginationMiniQuickJumperInputWidth,
                        height: e.controlHeightSM
                    })
                }
            }
        }
    },
    Ft = e => {
        let {
            componentCls: t
        } = e;
        return {
            [`&${t}-simple`]: {
                [`${t}-prev, ${t}-next`]: {
                    height: e.itemSize,
                    lineHeight: T(e.itemSize),
                    verticalAlign: `top`,
                    [`${t}-item-link`]: {
                        height: e.itemSize,
                        backgroundColor: `transparent`,
                        border: 0,
                        "&:hover": {
                            backgroundColor: e.colorBgTextHover
                        },
                        "&:active": {
                            backgroundColor: e.colorBgTextActive
                        },
                        "&::after": {
                            height: e.itemSize,
                            lineHeight: T(e.itemSize)
                        }
                    }
                },
                [`${t}-simple-pager`]: {
                    display: `inline-flex`,
                    alignItems: `center`,
                    height: e.itemSize,
                    marginInlineEnd: e.marginXS,
                    input: {
                        boxSizing: `border-box`,
                        height: `100%`,
                        width: e.quickJumperInputWidth,
                        padding: `0 ${T(e.paginationItemPaddingInline)}`,
                        textAlign: `center`,
                        backgroundColor: e.itemInputBg,
                        border: `${T(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                        borderRadius: e.borderRadius,
                        outline: `none`,
                        transition: `border-color ${e.motionDurationMid}`,
                        color: `inherit`,
                        "&:hover": {
                            borderColor: e.colorPrimary
                        },
                        "&:focus": {
                            borderColor: e.colorPrimaryHover,
                            boxShadow: `${T(e.inputOutlineOffset)} 0 ${T(e.controlOutlineWidth)} ${e.controlOutline}`
                        },
                        "&[disabled]": {
                            color: e.colorTextDisabled,
                            backgroundColor: e.colorBgContainerDisabled,
                            borderColor: e.colorBorder,
                            cursor: `not-allowed`
                        }
                    }
                },
                [`&${t}-disabled`]: {
                    [`${t}-prev, ${t}-next`]: {
                        [`${t}-item-link`]: {
                            "&:hover, &:active": {
                                backgroundColor: `transparent`
                            }
                        }
                    }
                },
                [`&${t}-mini`]: {
                    [`${t}-prev, ${t}-next`]: {
                        height: e.itemSizeSM,
                        lineHeight: T(e.itemSizeSM),
                        [`${t}-item-link`]: {
                            height: e.itemSizeSM,
                            "&::after": {
                                height: e.itemSizeSM,
                                lineHeight: T(e.itemSizeSM)
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
    It = e => {
        let {
            componentCls: t
        } = e;
        return {
            [`${t}-jump-prev, ${t}-jump-next`]: {
                outline: 0,
                [`${t}-item-container`]: {
                    position: `relative`,
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
                            margin: `auto`
                        }
                    },
                    [`${t}-item-ellipsis`]: {
                        position: `absolute`,
                        top: 0,
                        insetInlineEnd: 0,
                        bottom: 0,
                        insetInlineStart: 0,
                        display: `block`,
                        margin: `auto`,
                        color: e.colorTextDisabled,
                        letterSpacing: e.paginationEllipsisLetterSpacing,
                        textAlign: `center`,
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
                display: `inline-block`,
                minWidth: e.itemSize,
                height: e.itemSize,
                color: e.colorText,
                fontFamily: e.fontFamily,
                lineHeight: T(e.itemSize),
                textAlign: `center`,
                verticalAlign: `middle`,
                listStyle: `none`,
                borderRadius: e.borderRadius,
                cursor: `pointer`,
                transition: `all ${e.motionDurationMid}`
            },
            [`${t}-prev, ${t}-next`]: {
                outline: 0,
                button: {
                    color: e.colorText,
                    cursor: `pointer`,
                    userSelect: `none`
                },
                [`${t}-item-link`]: {
                    display: `block`,
                    width: `100%`,
                    height: `100%`,
                    padding: 0,
                    fontSize: e.fontSizeSM,
                    textAlign: `center`,
                    backgroundColor: `transparent`,
                    border: `${T(e.lineWidth)} ${e.lineType} transparent`,
                    borderRadius: e.borderRadius,
                    outline: `none`,
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
                        backgroundColor: `transparent`
                    }
                }
            },
            [`${t}-slash`]: {
                marginInlineEnd: e.paginationSlashMarginInlineEnd,
                marginInlineStart: e.paginationSlashMarginInlineStart
            },
            [`${t}-options`]: {
                display: `inline-block`,
                marginInlineStart: e.margin,
                verticalAlign: `middle`,
                "&-size-changer": {
                    display: `inline-block`,
                    width: `auto`
                },
                "&-quick-jumper": {
                    display: `inline-block`,
                    height: e.controlHeight,
                    marginInlineStart: e.marginXS,
                    lineHeight: T(e.controlHeight),
                    verticalAlign: `top`,
                    input: Object.assign(Object.assign(Object.assign({}, Be(e)), Ie(e, {
                        borderColor: e.colorBorder,
                        hoverBorderColor: e.colorPrimaryHover,
                        activeBorderColor: e.colorPrimary,
                        activeShadow: e.activeShadow
                    })), {
                        "&[disabled]": Object.assign({}, ze(e)),
                        width: e.quickJumperInputWidth,
                        height: e.controlHeight,
                        boxSizing: `border-box`,
                        margin: 0,
                        marginInlineStart: e.marginXS,
                        marginInlineEnd: e.marginXS
                    })
                }
            }
        }
    },
    Lt = e => {
        let {
            componentCls: t
        } = e;
        return {
            [`${t}-item`]: {
                display: `inline-block`,
                minWidth: e.itemSize,
                height: e.itemSize,
                marginInlineEnd: e.marginXS,
                fontFamily: e.fontFamily,
                lineHeight: T(e.calc(e.itemSize).sub(2).equal()),
                textAlign: `center`,
                verticalAlign: `middle`,
                listStyle: `none`,
                backgroundColor: e.itemBg,
                border: `${T(e.lineWidth)} ${e.lineType} transparent`,
                borderRadius: e.borderRadius,
                outline: 0,
                cursor: `pointer`,
                userSelect: `none`,
                a: {
                    display: `block`,
                    padding: `0 ${T(e.paginationItemPaddingInline)}`,
                    color: e.colorText,
                    "&:hover": {
                        textDecoration: `none`
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
    Rt = e => {
        let {
            componentCls: t
        } = e;
        return {
            [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, z(e)), {
                display: `flex`,
                "&-start": {
                    justifyContent: `start`
                },
                "&-center": {
                    justifyContent: `center`
                },
                "&-end": {
                    justifyContent: `end`
                },
                "ul, ol": {
                    margin: 0,
                    padding: 0,
                    listStyle: `none`
                },
                "&::after": {
                    display: `block`,
                    clear: `both`,
                    height: 0,
                    overflow: `hidden`,
                    visibility: `hidden`,
                    content: `""`
                },
                [`${t}-total-text`]: {
                    display: `inline-block`,
                    height: e.itemSize,
                    marginInlineEnd: e.marginXS,
                    lineHeight: T(e.calc(e.itemSize).sub(2).equal()),
                    verticalAlign: `middle`
                }
            }), Lt(e)), It(e)), Ft(e)), Pt(e)), Nt(e)), {
                [`@media only screen and (max-width: ${e.screenLG}px)`]: {
                    [`${t}-item`]: {
                        "&-after-jump-prev, &-before-jump-next": {
                            display: `none`
                        }
                    }
                },
                [`@media only screen and (max-width: ${e.screenSM}px)`]: {
                    [`${t}-options`]: {
                        display: `none`
                    }
                }
            }),
            [`&${e.componentCls}-rtl`]: {
                direction: `rtl`
            }
        }
    },
    zt = e => {
        let {
            componentCls: t
        } = e;
        return {
            [`${t}:not(${t}-disabled)`]: {
                [`${t}-item`]: Object.assign({}, j(e)),
                [`${t}-jump-prev, ${t}-jump-next`]: {
                    "&:focus-visible": Object.assign({
                        [`${t}-item-link-icon`]: {
                            opacity: 1
                        },
                        [`${t}-item-ellipsis`]: {
                            opacity: 0
                        }
                    }, W(e))
                },
                [`${t}-prev, ${t}-next`]: {
                    [`&:focus-visible ${t}-item-link`]: W(e)
                }
            }
        }
    },
    Bt = e => Object.assign({
        itemBg: e.colorBgContainer,
        itemSize: e.controlHeight,
        itemSizeSM: e.controlHeightSM,
        itemActiveBg: e.colorBgContainer,
        itemLinkBg: e.colorBgContainer,
        itemActiveColorDisabled: e.colorTextDisabled,
        itemActiveBgDisabled: e.controlItemBgActiveDisabled,
        itemInputBg: e.colorBgContainer,
        miniOptionsSizeChangerTop: 0
    }, He(e)),
    Vt = e => O(e, {
        inputOutlineOffset: 0,
        quickJumperInputWidth: e.calc(e.controlHeightLG).mul(1.25).equal(),
        paginationMiniOptionsMarginInlineStart: e.calc(e.marginXXS).div(2).equal(),
        paginationMiniQuickJumperInputWidth: e.calc(e.controlHeightLG).mul(1.1).equal(),
        paginationItemPaddingInline: e.calc(e.marginXXS).mul(1.5).equal(),
        paginationEllipsisLetterSpacing: e.calc(e.marginXXS).div(2).equal(),
        paginationSlashMarginInlineStart: e.marginSM,
        paginationSlashMarginInlineEnd: e.marginSM,
        paginationEllipsisTextIndent: `0.13em`
    }, Fe(e)),
    Ht = H(`Pagination`, e => {
        let t = Vt(e);
        return [Rt(t), zt(t)]
    }, Bt),
    Ut = e => {
        let {
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
                    border: `${T(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
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
    Wt = k([`Pagination`, `bordered`], e => Ut(Vt(e)), Bt);

function Gt(e) {
    return (0, Q.useMemo)(() => typeof e == `boolean` ? [e, {}] : e && typeof e == `object` ? [!0, e] : [void 0, void 0], [e])
}
var Kt = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    qt = e => {
        let {
            align: t,
            prefixCls: n,
            selectPrefixCls: r,
            className: i,
            rootClassName: a,
            style: o,
            size: s,
            locale: c,
            responsive: l,
            showSizeChanger: u,
            selectComponentClass: d,
            pageSizeOptions: f
        } = e, p = Kt(e, [`align`, `prefixCls`, `selectPrefixCls`, `className`, `rootClassName`, `style`, `size`, `locale`, `responsive`, `showSizeChanger`, `selectComponentClass`, `pageSizeOptions`]), {
            xs: m
        } = Z(l), [, h] = E(), {
            getPrefixCls: g,
            direction: _,
            showSizeChanger: v,
            className: y,
            style: b
        } = I(`pagination`), x = g(`pagination`, n), [S, C, w] = Ht(x), T = D(s), O = T === `small` || !!(m && !T && l), [k] = ve(`Pagination`, _e), A = Object.assign(Object.assign({}, k), c), [j, M] = Gt(u), [N, P] = Gt(v), F = j ?? N, L = M ?? P, ee = d || Pe, R = Q.useMemo(() => f ? f.map(e => Number(e)) : void 0, [f]), z = e => {
            var t;
            let {
                disabled: n,
                size: r,
                onSizeChange: i,
                "aria-label": a,
                className: o,
                options: s
            } = e, {
                className: c,
                onChange: l
            } = L || {}, u = (t = s.find(e => String(e.value) === String(r))) == null ? void 0 : t.value;
            return Q.createElement(ee, Object.assign({
                disabled: n,
                showSearch: !0,
                popupMatchSelectWidth: !1,
                getPopupContainer: e => e.parentNode,
                "aria-label": a,
                options: s
            }, L, {
                value: u,
                onChange: (e, t) => {
                    i == null || i(e), l == null || l(e, t)
                },
                size: O ? `small` : `middle`,
                className: (0, $.default)(o, c)
            }))
        }, B = Q.useMemo(() => {
            let e = Q.createElement(`span`, {
                className: `${x}-item-ellipsis`
            }, `•••`);
            return {
                prevIcon: Q.createElement(`button`, {
                    className: `${x}-item-link`,
                    type: `button`,
                    tabIndex: -1
                }, _ === `rtl` ? Q.createElement(Ee, null) : Q.createElement(we, null)),
                nextIcon: Q.createElement(`button`, {
                    className: `${x}-item-link`,
                    type: `button`,
                    tabIndex: -1
                }, _ === `rtl` ? Q.createElement(we, null) : Q.createElement(Ee, null)),
                jumpPrevIcon: Q.createElement(`a`, {
                    className: `${x}-item-link`
                }, Q.createElement(`div`, {
                    className: `${x}-item-container`
                }, _ === `rtl` ? Q.createElement(Ct, {
                    className: `${x}-item-link-icon`
                }) : Q.createElement(xt, {
                    className: `${x}-item-link-icon`
                }), e)),
                jumpNextIcon: Q.createElement(`a`, {
                    className: `${x}-item-link`
                }, Q.createElement(`div`, {
                    className: `${x}-item-container`
                }, _ === `rtl` ? Q.createElement(xt, {
                    className: `${x}-item-link-icon`
                }) : Q.createElement(Ct, {
                    className: `${x}-item-link-icon`
                }), e))
            }
        }, [_, x]), V = g(`select`, r), H = (0, $.default)({
            [`${x}-${t}`]: !!t,
            [`${x}-mini`]: O,
            [`${x}-rtl`]: _ === `rtl`,
            [`${x}-bordered`]: h.wireframe
        }, y, i, a, C, w), U = Object.assign(Object.assign({}, b), o);
        return S(Q.createElement(Q.Fragment, null, h.wireframe && Q.createElement(Wt, {
            prefixCls: x
        }), Q.createElement(Mt, Object.assign({}, B, p, {
            style: U,
            prefixCls: x,
            selectPrefixCls: V,
            className: H,
            locale: A,
            pageSizeOptions: R,
            showSizeChanger: F,
            sizeChangerRender: z
        }))))
    };
d(), S(), a();
var Jt = {
    icon: {
        tag: `svg`,
        attrs: {
            viewBox: `0 0 1024 1024`,
            focusable: `false`
        },
        children: [{
            tag: `path`,
            attrs: {
                d: `M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z`
            }
        }]
    },
    name: `caret-down`,
    theme: `filled`
};
r();
var Yt = Q.forwardRef(function(e, t) {
        return Q.createElement(ue, o({}, e, {
            ref: t,
            icon: Jt
        }))
    }),
    Xt = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `0 0 1024 1024`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z`
                }
            }]
        },
        name: `caret-down`,
        theme: `outlined`
    };
r();
var Zt = Q.forwardRef(function(e, t) {
        return Q.createElement(ue, o({}, e, {
            ref: t,
            icon: Xt
        }))
    }),
    Qt = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `0 0 1024 1024`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z`
                }
            }]
        },
        name: `caret-up`,
        theme: `outlined`
    };
r();
var $t = Q.forwardRef(function(e, t) {
        return Q.createElement(ue, o({}, e, {
            ref: t,
            icon: Qt
        }))
    }),
    en = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z`
                }
            }]
        },
        name: `file`,
        theme: `outlined`
    };
r();
var tn = Q.forwardRef(function(e, t) {
        return Q.createElement(ue, o({}, e, {
            ref: t,
            icon: en
        }))
    }),
    nn = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z`
                }
            }]
        },
        name: `filter`,
        theme: `filled`
    };
r();
var rn = Q.forwardRef(function(e, t) {
        return Q.createElement(ue, o({}, e, {
            ref: t,
            icon: nn
        }))
    }),
    an = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z`
                }
            }]
        },
        name: `folder-open`,
        theme: `outlined`
    };
r();
var on = Q.forwardRef(function(e, t) {
        return Q.createElement(ue, o({}, e, {
            ref: t,
            icon: an
        }))
    }),
    sn = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z`
                }
            }]
        },
        name: `folder`,
        theme: `outlined`
    };
r();
var cn = Q.forwardRef(function(e, t) {
        return Q.createElement(ue, o({}, e, {
            ref: t,
            icon: sn
        }))
    }),
    ln = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z`
                }
            }]
        },
        name: `holder`,
        theme: `outlined`
    };
r();
var un = Q.forwardRef(function(e, t) {
        return Q.createElement(ue, o({}, e, {
            ref: t,
            icon: ln
        }))
    }),
    dn = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z`
                }
            }, {
                tag: `path`,
                attrs: {
                    d: `M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z`
                }
            }]
        },
        name: `minus-square`,
        theme: `outlined`
    };
r();
var fn = Q.forwardRef(function(e, t) {
        return Q.createElement(ue, o({}, e, {
            ref: t,
            icon: dn
        }))
    }),
    pn = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z`
                }
            }, {
                tag: `path`,
                attrs: {
                    d: `M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z`
                }
            }]
        },
        name: `plus-square`,
        theme: `outlined`
    };
r();
var mn = Q.forwardRef(function(e, t) {
        return Q.createElement(ue, o({}, e, {
            ref: t,
            icon: pn
        }))
    }),
    hn = {},
    gn = `rc-table-internal-hook`;
G();

function _n(e) {
    var t = Q.createContext(void 0);
    return {
        Context: t,
        Provider: function(e) {
            var n = e.value,
                r = e.children,
                i = Q.useRef(n);
            i.current = n;
            var a = Q.useState(function() {
                    return {
                        getValue: function() {
                            return i.current
                        },
                        listeners: new Set
                    }
                }),
                o = R(a, 1)[0];
            return v(function() {
                (0, Ze.unstable_batchedUpdates)(function() {
                    o.listeners.forEach(function(e) {
                        e(n)
                    })
                })
            }, [n]), Q.createElement(t.Provider, {
                value: o
            }, r)
        },
        defaultValue: e
    }
}

function vn(e, t) {
    var n = l(typeof t == `function` ? t : function(e) {
            if (t === void 0) return e;
            if (!Array.isArray(t)) return e[t];
            var n = {};
            return t.forEach(function(t) {
                n[t] = e[t]
            }), n
        }),
        r = Q.useContext(e == null ? void 0 : e.Context),
        i = r || {},
        a = i.listeners,
        o = i.getValue,
        s = Q.useRef();
    s.current = n(r ? o() : e == null ? void 0 : e.defaultValue);
    var c = Q.useState({}),
        u = R(c, 2)[1];
    return v(function() {
        if (!r) return;

        function e(e) {
            var t = n(e);
            M(s.current, t, !0) || u({})
        }
        return a.add(e),
            function() {
                a.delete(e)
            }
    }, [r]), s.current
}
r();

function yn() {
    var e = Q.createContext(null);

    function t() {
        return Q.useContext(e)
    }

    function n(n, r) {
        var i = b(n),
            a = function(a, s) {
                var c = i ? {
                        ref: s
                    } : {},
                    l = Q.useRef(0),
                    u = Q.useRef(a);
                return t() === null ? ((!r || r(u.current, a)) && (l.current += 1), u.current = a, Q.createElement(e.Provider, {
                    value: l.current
                }, Q.createElement(n, o({}, a, c)))) : Q.createElement(n, o({}, a, c))
            };
        return i ? Q.forwardRef(a) : a
    }

    function r(e, n) {
        var r = b(e),
            i = function(n, i) {
                var a = r ? {
                    ref: i
                } : {};
                return t(), Q.createElement(e, o({}, n, a))
            };
        return r ? Q.memo(Q.forwardRef(i), n) : Q.memo(i, n)
    }
    return {
        makeImmutable: n,
        responseImmutable: r,
        useImmutableMark: t
    }
}
var bn = yn();
bn.makeImmutable, bn.responseImmutable, bn.useImmutableMark;
var xn = yn(),
    Sn = xn.makeImmutable,
    Cn = xn.responseImmutable,
    wn = xn.useImmutableMark,
    Tn = _n(),
    En = Q.createContext({
        renderWithProps: !1
    }),
    Dn = `RC_TABLE_KEY`;

function On(e) {
    return e == null ? [] : Array.isArray(e) ? e : [e]
}

function kn(e) {
    var t = [],
        n = {};
    return e.forEach(function(e) {
        for (var r = e || {}, i = r.key, a = r.dataIndex, o = i || On(a).join(`-`) || Dn; n[o];) o = `${o}_next`;
        n[o] = !0, t.push(o)
    }), t
}

function An(e) {
    return e != null
}

function jn(e) {
    return typeof e == `number` && !Number.isNaN(e)
}
G(), g();

function Mn(e) {
    return e && w(e) === `object` && !Array.isArray(e) && !Q.isValidElement(e)
}

function Nn(e, t, n, r, i, a) {
    var o = Q.useContext(En),
        s = wn();
    return x(function() {
        if (An(r)) return [r];
        var a = fe(e, t == null || t === `` ? [] : Array.isArray(t) ? t : [t]),
            s = a,
            c = void 0;
        if (i) {
            var l = i(a, e, n);
            Mn(l) ? (s = l.children, c = l.props, o.renderWithProps = !0) : s = l
        }
        return [s, c]
    }, [s, e, r, t, i, n], function(e, t) {
        if (a) {
            var n = R(e, 2)[1],
                r = R(t, 2)[1];
            return a(r, n)
        }
        return o.renderWithProps ? !0 : !M(e, t, !0)
    })
}

function Pn(e, t, n, r) {
    var i = e + t - 1;
    return e <= r && i >= n
}

function Fn(e, t) {
    return vn(Tn, function(n) {
        return [Pn(e, t || 1, n.hoverStartRow, n.hoverEndRow), n.onHover]
    })
}
r(), g(), y(), G();
var In = function(e) {
    var t = e.ellipsis,
        n = e.rowType,
        r = e.children,
        i, a = t === !0 ? {
            showTitle: !0
        } : t;
    return a && (a.showTitle || n === `header`) && (typeof r == `string` || typeof r == `number` ? i = r.toString() : Q.isValidElement(r) && typeof r.props.children == `string` && (i = r.props.children)), i
};

function Ln(e) {
    var t, n = e.component,
        r = e.children,
        i = e.ellipsis,
        a = e.scope,
        s = e.prefixCls,
        c = e.className,
        u = e.align,
        d = e.record,
        f = e.render,
        p = e.dataIndex,
        h = e.renderIndex,
        g = e.shouldCellUpdate,
        v = e.index,
        y = e.rowType,
        b = e.colSpan,
        x = e.rowSpan,
        S = e.fixLeft,
        C = e.fixRight,
        T = e.firstFixLeft,
        E = e.lastFixLeft,
        D = e.firstFixRight,
        O = e.lastFixRight,
        k = e.appendNode,
        A = e.additionalProps,
        j = A === void 0 ? {} : A,
        M = e.isSticky,
        N = `${s}-cell`,
        P = vn(Tn, [`supportSticky`, `allColumnsFixedLeft`, `rowHoverable`]),
        F = P.supportSticky,
        I = P.allColumnsFixedLeft,
        L = P.rowHoverable,
        ee = Nn(d, p, h, r, f, g),
        z = R(ee, 2),
        B = z[0],
        V = z[1],
        H = {},
        U = typeof S == `number` && F,
        W = typeof C == `number` && F;
    U && (H.position = `sticky`, H.left = S), W && (H.position = `sticky`, H.right = C);
    var G = (V == null ? void 0 : V.colSpan) ?? j.colSpan ?? b ?? 1,
        te = (V == null ? void 0 : V.rowSpan) ?? j.rowSpan ?? x ?? 1,
        K = Fn(v, te),
        ne = R(K, 2),
        q = ne[0],
        re = ne[1],
        ie = l(function(e) {
            var t;
            d && re(v, v + te - 1), j == null || (t = j.onMouseEnter) == null || t.call(j, e)
        }),
        J = l(function(e) {
            var t;
            d && re(-1, -1), j == null || (t = j.onMouseLeave) == null || t.call(j, e)
        });
    if (G === 0 || te === 0) return null;
    var ae = j.title ?? In({
            rowType: y,
            ellipsis: i,
            children: B
        }),
        oe = (0, $.default)(N, c, (t = {}, _(_(_(_(_(_(_(_(_(_(t, `${N}-fix-left`, U && F), `${N}-fix-left-first`, T && F), `${N}-fix-left-last`, E && F), `${N}-fix-left-all`, E && I && F), `${N}-fix-right`, W && F), `${N}-fix-right-first`, D && F), `${N}-fix-right-last`, O && F), `${N}-ellipsis`, i), `${N}-with-append`, k), `${N}-fix-sticky`, (U || W) && M && F), _(t, `${N}-row-hover`, !V && q)), j.className, V == null ? void 0 : V.className),
        se = {};
    u && (se.textAlign = u);
    var Y = m(m(m(m({}, V == null ? void 0 : V.style), H), se), j.style),
        ce = B;
    return w(ce) === `object` && !Array.isArray(ce) && !Q.isValidElement(ce) && (ce = null), i && (E || D) && (ce = Q.createElement(`span`, {
        className: `${N}-content`
    }, ce)), Q.createElement(n, o({}, V, j, {
        className: oe,
        style: Y,
        title: ae,
        scope: a,
        onMouseEnter: L ? ie : void 0,
        onMouseLeave: L ? J : void 0,
        colSpan: G === 1 ? null : G,
        rowSpan: te === 1 ? null : te
    }), k, ce)
}
var Rn = Q.memo(Ln);

function zn(e, t, n, r, i) {
    var a = n[e] || {},
        o = n[t] || {},
        s, c;
    a.fixed === `left` ? s = r.left[i === `rtl` ? t : e] : o.fixed === `right` && (c = r.right[i === `rtl` ? e : t]);
    var l = !1,
        u = !1,
        d = !1,
        f = !1,
        p = n[t + 1],
        m = n[e - 1],
        h = p && !p.fixed || m && !m.fixed || n.every(function(e) {
            return e.fixed === `left`
        });
    return i === `rtl` ? s === void 0 ? c !== void 0 && (d = !(p && p.fixed === `right`) && h) : f = !(m && m.fixed === `left`) && h : s === void 0 ? c !== void 0 && (u = !(m && m.fixed === `right`) && h) : l = !(p && p.fixed === `left`) && h, {
        fixLeft: s,
        fixRight: c,
        lastFixLeft: l,
        firstFixRight: u,
        lastFixRight: d,
        firstFixLeft: f,
        isSticky: r.isSticky
    }
}
var Bn = Q.createContext({});
r();

function Vn(e) {
    var t = e.className,
        n = e.index,
        r = e.children,
        i = e.colSpan,
        a = i === void 0 ? 1 : i,
        s = e.rowSpan,
        c = e.align,
        l = vn(Tn, [`prefixCls`, `direction`]),
        u = l.prefixCls,
        d = l.direction,
        f = Q.useContext(Bn),
        p = f.scrollColumnIndex,
        m = f.stickyOffsets,
        h = f.flattenColumns,
        g = n + a - 1 + 1 === p ? a + 1 : a,
        _ = zn(n, n + g - 1, h, m, d);
    return Q.createElement(Rn, o({
        className: t,
        index: n,
        component: `td`,
        prefixCls: u,
        record: null,
        dataIndex: null,
        align: c,
        colSpan: g,
        rowSpan: s,
        render: function() {
            return r
        }
    }, _))
}
B();
var Hn = [`children`];

function Un(e) {
    var t = e.children,
        n = U(e, Hn);
    return Q.createElement(`tr`, n, t)
}

function Wn(e) {
    return e.children
}
Wn.Row = Un, Wn.Cell = Vn;

function Gn(e) {
    var t = e.children,
        n = e.stickyOffsets,
        r = e.flattenColumns,
        i = vn(Tn, `prefixCls`),
        a = r.length - 1,
        o = r[a],
        s = Q.useMemo(function() {
            return {
                stickyOffsets: n,
                flattenColumns: r,
                scrollColumnIndex: o != null && o.scrollbar ? a : null
            }
        }, [o, r, a, n]);
    return Q.createElement(Bn.Provider, {
        value: s
    }, Q.createElement(`tfoot`, {
        className: `${i}-summary`
    }, t))
}
var Kn = Cn(Gn),
    qn = Wn;

function Jn(e) {
    return null
}

function Yn(e) {
    return null
}

function Xn(e, t, n, r, i, a, o) {
    var s = a(t, o);
    e.push({
        record: t,
        indent: n,
        index: o,
        rowKey: s
    });
    var c = i == null ? void 0 : i.has(s);
    if (t && Array.isArray(t[r]) && c)
        for (var l = 0; l < t[r].length; l += 1) Xn(e, t[r][l], n + 1, r, i, a, l)
}

function Zn(e, t, n, r) {
    return Q.useMemo(function() {
        if (n != null && n.size) {
            for (var i = [], a = 0; a < (e == null ? void 0 : e.length); a += 1) {
                var o = e[a];
                Xn(i, o, 0, t, n, r, a)
            }
            return i
        }
        return e == null ? void 0 : e.map(function(e, t) {
            return {
                record: e,
                indent: 0,
                index: t,
                rowKey: r(e, t)
            }
        })
    }, [e, t, n, r])
}

function Qn(e, t, n, r) {
    var i = vn(Tn, [`prefixCls`, `fixedInfoList`, `flattenColumns`, `expandableType`, `expandRowByClick`, `onTriggerExpand`, `rowClassName`, `expandedRowClassName`, `indentSize`, `expandIcon`, `expandedRowRender`, `expandIconColumnIndex`, `expandedKeys`, `childrenColumnName`, `rowExpandable`, `onRow`]),
        a = i.flattenColumns,
        o = i.expandableType,
        s = i.expandedKeys,
        c = i.childrenColumnName,
        u = i.onTriggerExpand,
        d = i.rowExpandable,
        f = i.onRow,
        p = i.expandRowByClick,
        h = i.rowClassName,
        g = o === `nest`,
        _ = o === `row` && (!d || d(e)),
        v = _ || g,
        y = s && s.has(t),
        b = c && e && e[c],
        x = l(u),
        S = f == null ? void 0 : f(e, n),
        C = S == null ? void 0 : S.onClick,
        w = function(t) {
            p && v && u(e, t);
            var n = [...arguments].slice(1);
            C == null || C.apply(void 0, [t].concat(n))
        },
        T;
    typeof h == `string` ? T = h : typeof h == `function` && (T = h(e, n, r));
    var E = kn(a);
    return m(m({}, i), {}, {
        columnsKey: E,
        nestExpandable: g,
        expanded: y,
        hasNestChildren: b,
        record: e,
        onTriggerExpand: x,
        rowSupportExpand: _,
        expandable: v,
        rowProps: m(m({}, S), {}, {
            className: (0, $.default)(T, S == null ? void 0 : S.className),
            onClick: w
        })
    })
}

function $n(e) {
    var t = e.prefixCls,
        n = e.children,
        r = e.component,
        i = e.cellComponent,
        a = e.className,
        o = e.expanded,
        s = e.colSpan,
        c = e.isEmpty,
        l = e.stickyOffset,
        u = l === void 0 ? 0 : l,
        d = vn(Tn, [`scrollbarSize`, `fixHeader`, `fixColumn`, `componentWidth`, `horizonScroll`]),
        f = d.scrollbarSize,
        p = d.fixHeader,
        m = d.fixColumn,
        h = d.componentWidth,
        g = d.horizonScroll,
        _ = n;
    return (c ? g && h : m) && (_ = Q.createElement(`div`, {
        style: {
            width: h - u - (p && !c ? f : 0),
            position: `sticky`,
            left: u,
            overflow: `hidden`
        },
        className: `${t}-expanded-row-fixed`
    }, _)), Q.createElement(r, {
        className: a,
        style: {
            display: o ? null : `none`
        }
    }, Q.createElement(Rn, {
        component: i,
        prefixCls: t,
        colSpan: s
    }, _))
}
y();

function er(e) {
    var t = e.prefixCls,
        n = e.record,
        r = e.onExpand,
        i = e.expanded,
        a = e.expandable,
        o = `${t}-row-expand-icon`;
    return a ? Q.createElement(`span`, {
        className: (0, $.default)(o, _(_({}, `${t}-row-expanded`, i), `${t}-row-collapsed`, !i)),
        onClick: function(e) {
            r(n, e), e.stopPropagation()
        }
    }) : Q.createElement(`span`, {
        className: (0, $.default)(o, `${t}-row-spaced`)
    })
}

function tr(e, t, n) {
    var r = [];

    function i(e) {
        (e || []).forEach(function(e, a) {
            r.push(t(e, a)), i(e[n])
        })
    }
    return i(e), r
}

function nr(e, t, n, r) {
    return typeof e == `string` ? e : typeof e == `function` ? e(t, n, r) : ``
}
r(), y();

function rr(e, t, n, r, i) {
    var a, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [],
        s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 0,
        c = e.record,
        l = e.prefixCls,
        u = e.columnsKey,
        d = e.fixedInfoList,
        f = e.expandIconColumnIndex,
        p = e.nestExpandable,
        m = e.indentSize,
        h = e.expandIcon,
        g = e.expanded,
        _ = e.hasNestChildren,
        v = e.onTriggerExpand,
        y = e.expandable,
        b = e.expandedKeys,
        x = u[n],
        S = d[n],
        C;
    n === (f || 0) && p && (C = Q.createElement(Q.Fragment, null, Q.createElement(`span`, {
        style: {
            paddingLeft: `${m*r}px`
        },
        className: `${l}-row-indent indent-level-${r}`
    }), h({
        prefixCls: l,
        expanded: g,
        expandable: _,
        record: c,
        onExpand: v
    })));
    var w = ((a = t.onCell) == null ? void 0 : a.call(t, c, i)) || {};
    if (s) {
        var T = w.rowSpan,
            E = T === void 0 ? 1 : T;
        if (y && E && n < s) {
            for (var D = E, O = i; O < i + E; O += 1) {
                var k = o[O];
                b.has(k) && (D += 1)
            }
            w.rowSpan = D
        }
    }
    return {
        key: x,
        fixedInfo: S,
        appendCellNode: C,
        additionalCellProps: w
    }
}

function ir(e) {
    var t = e.className,
        n = e.style,
        r = e.record,
        i = e.index,
        a = e.renderIndex,
        s = e.rowKey,
        c = e.rowKeys,
        l = e.indent,
        u = l === void 0 ? 0 : l,
        d = e.rowComponent,
        f = e.cellComponent,
        p = e.scopeCellComponent,
        h = e.expandedRowInfo,
        g = Qn(r, s, i, u),
        v = g.prefixCls,
        y = g.flattenColumns,
        b = g.expandedRowClassName,
        x = g.expandedRowRender,
        S = g.rowProps,
        C = g.expanded,
        w = g.rowSupportExpand,
        T = Q.useRef(!1);
    T.current || (T.current = C);
    var E = nr(b, r, i, u),
        D = Q.createElement(d, o({}, S, {
            "data-row-key": s,
            className: (0, $.default)(t, `${v}-row`, `${v}-row-level-${u}`, S == null ? void 0 : S.className, _({}, E, u >= 1)),
            style: m(m({}, n), S == null ? void 0 : S.style)
        }), y.map(function(e, t) {
            var n = e.render,
                s = e.dataIndex,
                l = e.className,
                d = rr(g, e, t, u, i, c, h == null ? void 0 : h.offset),
                m = d.key,
                _ = d.fixedInfo,
                y = d.appendCellNode,
                b = d.additionalCellProps;
            return Q.createElement(Rn, o({
                className: l,
                ellipsis: e.ellipsis,
                align: e.align,
                scope: e.rowScope,
                component: e.rowScope ? p : f,
                prefixCls: v,
                key: m,
                record: r,
                index: i,
                renderIndex: a,
                dataIndex: s,
                render: n,
                shouldCellUpdate: e.shouldCellUpdate
            }, _, {
                appendNode: y,
                additionalProps: b
            }))
        })),
        O;
    if (w && (T.current || C)) {
        var k = x(r, i, u + 1, C);
        O = Q.createElement($n, {
            expanded: C,
            className: (0, $.default)(`${v}-expanded-row`, `${v}-expanded-row-level-${u+1}`, E),
            prefixCls: v,
            component: d,
            cellComponent: f,
            colSpan: h ? h.colSpan : y.length,
            stickyOffset: h == null ? void 0 : h.sticky,
            isEmpty: !1
        }, k)
    }
    return Q.createElement(Q.Fragment, null, D, O)
}
var ar = Cn(ir);

function or(e) {
    var t = e.columnKey,
        n = e.onColumnResize,
        r = Q.useRef();
    return v(function() {
        r.current && n(t, r.current.offsetWidth)
    }, []), Q.createElement(ce, {
        data: t
    }, Q.createElement(`td`, {
        ref: r,
        style: {
            padding: 0,
            border: 0,
            height: 0
        }
    }, Q.createElement(`div`, {
        style: {
            height: 0,
            overflow: `hidden`
        }
    }, `\xA0`)))
}

function sr(e) {
    var t = e.prefixCls,
        n = e.columnsKey,
        r = e.onColumnResize,
        i = Q.useRef(null);
    return Q.createElement(`tr`, {
        "aria-hidden": `true`,
        className: `${t}-measure-row`,
        style: {
            height: 0,
            fontSize: 0
        },
        ref: i
    }, Q.createElement(ce.Collection, {
        onBatchResize: function(e) {
            oe(i.current) && e.forEach(function(e) {
                var t = e.data,
                    n = e.size;
                r(t, n.offsetWidth)
            })
        }
    }, n.map(function(e) {
        return Q.createElement(or, {
            key: e,
            columnKey: e,
            onColumnResize: r
        })
    })))
}

function cr(e) {
    var t = e.data,
        n = e.measureColumnWidth,
        r = vn(Tn, [`prefixCls`, `getComponent`, `onColumnResize`, `flattenColumns`, `getRowKey`, `expandedKeys`, `childrenColumnName`, `emptyNode`, `expandedRowOffset`, `fixedInfoList`, `colWidths`]),
        i = r.prefixCls,
        a = r.getComponent,
        o = r.onColumnResize,
        s = r.flattenColumns,
        c = r.getRowKey,
        l = r.expandedKeys,
        u = r.childrenColumnName,
        d = r.emptyNode,
        f = r.expandedRowOffset,
        p = f === void 0 ? 0 : f,
        m = r.colWidths,
        h = Zn(t, u, l, c),
        g = Q.useMemo(function() {
            return h.map(function(e) {
                return e.rowKey
            })
        }, [h]),
        _ = Q.useRef({
            renderWithProps: !1
        }),
        v = Q.useMemo(function() {
            for (var e = s.length - p, t = 0, n = 0; n < p; n += 1) t += m[n] || 0;
            return {
                offset: p,
                colSpan: e,
                sticky: t
            }
        }, [s.length, p, m]),
        y = a([`body`, `wrapper`], `tbody`),
        b = a([`body`, `row`], `tr`),
        x = a([`body`, `cell`], `td`),
        S = a([`body`, `cell`], `th`),
        C = t.length ? h.map(function(e, t) {
            var n = e.record,
                r = e.indent,
                i = e.index,
                a = e.rowKey;
            return Q.createElement(ar, {
                key: a,
                rowKey: a,
                rowKeys: g,
                record: n,
                index: t,
                renderIndex: i,
                rowComponent: b,
                cellComponent: x,
                scopeCellComponent: S,
                indent: r,
                expandedRowInfo: v
            })
        }) : Q.createElement($n, {
            expanded: !0,
            className: `${i}-placeholder`,
            prefixCls: i,
            component: b,
            cellComponent: x,
            colSpan: s.length,
            isEmpty: !0
        }, d),
        w = kn(s);
    return Q.createElement(En.Provider, {
        value: _.current
    }, Q.createElement(y, {
        className: `${i}-tbody`
    }, n && Q.createElement(sr, {
        prefixCls: i,
        columnsKey: w,
        onColumnResize: o
    }), C))
}
var lr = Cn(cr);
B();
var ur = [`expandable`],
    dr = `RC_TABLE_INTERNAL_COL_DEFINE`;

function fr(e) {
    var t = e.expandable,
        n = U(e, ur),
        r = `expandable` in e ? m(m({}, n), t) : n;
    return r.showExpandColumn === !1 && (r.expandIconColumnIndex = -1), r
}
r(), B();
var pr = [`columnType`];

function mr(e) {
    for (var t = e.colWidths, n = e.columns, r = e.columCount, i = vn(Tn, [`tableLayout`]).tableLayout, a = [], s = r || n.length, c = !1, l = s - 1; l >= 0; --l) {
        var u = t[l],
            d = n && n[l],
            f = void 0,
            p = void 0;
        if (d && (f = d[dr], i === `auto` && (p = d.minWidth)), u || p || f || c) {
            var m = f || {};
            m.columnType;
            var h = U(m, pr);
            a.unshift(Q.createElement(`col`, o({
                key: l,
                style: {
                    width: u,
                    minWidth: p
                }
            }, h))), c = !0
        }
    }
    return Q.createElement(`colgroup`, null, a)
}
y(), P(), B();
var hr = [`className`, `noData`, `columns`, `flattenColumns`, `colWidths`, `columCount`, `stickyOffsets`, `direction`, `fixHeader`, `stickyTopOffset`, `stickyBottomOffset`, `stickyClassName`, `onScroll`, `maxContentScroll`, `children`];

function gr(e, t) {
    return (0, Q.useMemo)(function() {
        for (var n = [], r = 0; r < t; r += 1) {
            var i = e[r];
            if (i !== void 0) n[r] = i;
            else return null
        }
        return n
    }, [e.join(`_`), t])
}
var _r = Q.forwardRef(function(e, t) {
        var n = e.className,
            r = e.noData,
            i = e.columns,
            a = e.flattenColumns,
            o = e.colWidths,
            s = e.columCount,
            c = e.stickyOffsets,
            l = e.direction,
            u = e.fixHeader,
            d = e.stickyTopOffset,
            f = e.stickyBottomOffset,
            p = e.stickyClassName,
            h = e.onScroll,
            g = e.maxContentScroll,
            v = e.children,
            y = U(e, hr),
            b = vn(Tn, [`prefixCls`, `scrollbarSize`, `isSticky`, `getComponent`]),
            x = b.prefixCls,
            S = b.scrollbarSize,
            C = b.isSticky,
            w = b.getComponent,
            T = w([`header`, `table`], `table`),
            E = C && !u ? 0 : S,
            D = Q.useRef(null),
            O = Q.useCallback(function(e) {
                L(t, e), L(D, e)
            }, []);
        Q.useEffect(function() {
            function e(e) {
                var t = e,
                    n = t.currentTarget,
                    r = t.deltaX;
                r && (h({
                    currentTarget: n,
                    scrollLeft: n.scrollLeft + r
                }), e.preventDefault())
            }
            var t = D.current;
            return t == null || t.addEventListener(`wheel`, e, {
                    passive: !1
                }),
                function() {
                    t == null || t.removeEventListener(`wheel`, e)
                }
        }, []);
        var k = Q.useMemo(function() {
                return a.every(function(e) {
                    return e.width
                })
            }, [a]),
            A = a[a.length - 1],
            j = {
                fixed: A ? A.fixed : null,
                scrollbar: !0,
                onHeaderCell: function() {
                    return {
                        className: `${x}-cell-scrollbar`
                    }
                }
            },
            M = (0, Q.useMemo)(function() {
                return E ? [].concat(F(i), [j]) : i
            }, [E, i]),
            N = (0, Q.useMemo)(function() {
                return E ? [].concat(F(a), [j]) : a
            }, [E, a]),
            P = (0, Q.useMemo)(function() {
                var e = c.right,
                    t = c.left;
                return m(m({}, c), {}, {
                    left: l === `rtl` ? [].concat(F(t.map(function(e) {
                        return e + E
                    })), [0]) : t,
                    right: l === `rtl` ? e : [].concat(F(e.map(function(e) {
                        return e + E
                    })), [0]),
                    isSticky: C
                })
            }, [E, c, C]),
            I = gr(o, s);
        return Q.createElement(`div`, {
            style: m({
                overflow: `hidden`
            }, C ? {
                top: d,
                bottom: f
            } : {}),
            ref: O,
            className: (0, $.default)(n, _({}, p, !!p))
        }, Q.createElement(T, {
            style: {
                tableLayout: `fixed`,
                visibility: r || I ? null : `hidden`
            }
        }, (!r || !g || k) && Q.createElement(mr, {
            colWidths: I ? [].concat(F(I), [E]) : [],
            columCount: s + 1,
            columns: N
        }), v(m(m({}, y), {}, {
            stickyOffsets: P,
            columns: M,
            flattenColumns: N
        }))))
    }),
    vr = Q.memo(_r);
r();
var yr = function(e) {
    var t = e.cells,
        n = e.stickyOffsets,
        r = e.flattenColumns,
        i = e.rowComponent,
        a = e.cellComponent,
        s = e.onHeaderRow,
        c = e.index,
        l = vn(Tn, [`prefixCls`, `direction`]),
        u = l.prefixCls,
        d = l.direction,
        f;
    s && (f = s(t.map(function(e) {
        return e.column
    }), c));
    var p = kn(t.map(function(e) {
        return e.column
    }));
    return Q.createElement(i, f, t.map(function(e, t) {
        var i = e.column,
            s = zn(e.colStart, e.colEnd, r, n, d),
            c;
        return i && i.onHeaderCell && (c = e.column.onHeaderCell(i)), Q.createElement(Rn, o({}, e, {
            scope: i.title ? e.colSpan > 1 ? `colgroup` : `col` : null,
            ellipsis: i.ellipsis,
            align: i.align,
            component: a,
            prefixCls: u,
            key: p[t]
        }, s, {
            additionalProps: c,
            rowType: `header`
        }))
    }))
};

function br(e) {
    var t = [];

    function n(e, r) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        t[i] = t[i] || [];
        var a = r;
        return e.filter(Boolean).map(function(e) {
            var r = {
                    key: e.key,
                    className: e.className || ``,
                    children: e.title,
                    column: e,
                    colStart: a
                },
                o = 1,
                s = e.children;
            return s && s.length > 0 && (o = n(s, a, i + 1).reduce(function(e, t) {
                return e + t
            }, 0), r.hasSubColumns = !0), `colSpan` in e && (o = e.colSpan), `rowSpan` in e && (r.rowSpan = e.rowSpan), r.colSpan = o, r.colEnd = r.colStart + o - 1, t[i].push(r), a += o, o
        })
    }
    n(e, 0);
    for (var r = t.length, i = function(e) {
            t[e].forEach(function(t) {
                !(`rowSpan` in t) && !t.hasSubColumns && (t.rowSpan = r - e)
            })
        }, a = 0; a < r; a += 1) i(a);
    return t
}
var xr = Cn(function(e) {
    var t = e.stickyOffsets,
        n = e.columns,
        r = e.flattenColumns,
        i = e.onHeaderRow,
        a = vn(Tn, [`prefixCls`, `getComponent`]),
        o = a.prefixCls,
        s = a.getComponent,
        c = Q.useMemo(function() {
            return br(n)
        }, [n]),
        l = s([`header`, `wrapper`], `thead`),
        u = s([`header`, `row`], `tr`),
        d = s([`header`, `cell`], `th`);
    return Q.createElement(l, {
        className: `${o}-thead`
    }, c.map(function(e, n) {
        return Q.createElement(yr, {
            key: n,
            flattenColumns: r,
            cells: e,
            stickyOffsets: t,
            rowComponent: u,
            cellComponent: d,
            onHeaderRow: i,
            index: n
        })
    }))
});

function Sr(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ``;
    return typeof t == `number` ? t : t.endsWith(`%`) ? e * parseFloat(t) / 100 : null
}

function Cr(e, t, n) {
    return Q.useMemo(function() {
        if (t && t > 0) {
            var r = 0,
                i = 0;
            e.forEach(function(e) {
                var n = Sr(t, e.width);
                n ? r += n : i += 1
            });
            var a = Math.max(t, n),
                o = Math.max(a - r, i),
                s = i,
                c = o / i,
                l = 0,
                u = e.map(function(e) {
                    var n = m({}, e),
                        r = Sr(t, n.width);
                    if (r) n.width = r;
                    else {
                        var i = Math.floor(c);
                        n.width = s === 1 ? o : i, o -= i, --s
                    }
                    return l += n.width, n
                });
            if (l < a) {
                var d = a / l;
                o = a, u.forEach(function(e, t) {
                    var n = Math.floor(e.width * d);
                    e.width = t === u.length - 1 ? o : n, o -= n
                })
            }
            return [u, Math.max(l, a)]
        }
        return [e, t]
    }, [e, t, n])
}
G(), y(), P(), g(), B();
var wr = [`children`],
    Tr = [`fixed`];

function Er(e) {
    return c(e).filter(function(e) {
        return Q.isValidElement(e)
    }).map(function(e) {
        var t = e.key,
            n = e.props,
            r = n.children,
            i = U(n, wr),
            a = m({
                key: t
            }, i);
        return r && (a.children = Er(r)), a
    })
}

function Dr(e) {
    return e.filter(function(e) {
        return e && w(e) === `object` && !e.hidden
    }).map(function(e) {
        var t = e.children;
        return t && t.length > 0 ? m(m({}, e), {}, {
            children: Dr(t)
        }) : e
    })
}

function Or(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `key`;
    return e.filter(function(e) {
        return e && w(e) === `object`
    }).reduce(function(e, n, r) {
        var i = n.fixed,
            a = i === !0 ? `left` : i,
            o = `${t}-${r}`,
            s = n.children;
        return s && s.length > 0 ? [].concat(F(e), F(Or(s, o).map(function(e) {
            return m({
                fixed: a
            }, e)
        }))) : [].concat(F(e), [m(m({
            key: o
        }, n), {}, {
            fixed: a
        })])
    }, [])
}

function kr(e) {
    return e.map(function(e) {
        var t = e.fixed,
            n = U(e, Tr),
            r = t;
        return t === `left` ? r = `right` : t === `right` && (r = `left`), m({
            fixed: r
        }, n)
    })
}

function Ar(e, t) {
    var n = e.prefixCls,
        r = e.columns,
        i = e.children,
        a = e.expandable,
        o = e.expandedKeys,
        s = e.columnTitle,
        c = e.getRowKey,
        l = e.onTriggerExpand,
        u = e.expandIcon,
        d = e.rowExpandable,
        f = e.expandIconColumnIndex,
        p = e.expandedRowOffset,
        h = p === void 0 ? 0 : p,
        g = e.direction,
        v = e.expandRowByClick,
        y = e.columnWidth,
        b = e.fixed,
        x = e.scrollWidth,
        S = e.clientWidth,
        C = Q.useMemo(function() {
            return Dr((r || Er(i) || []).slice())
        }, [r, i]),
        w = Q.useMemo(function() {
            if (a) {
                var e = C.slice();
                if (!e.includes(hn)) {
                    var t = f || 0;
                    t >= 0 && (t || b === `left` || !b) && e.splice(t, 0, hn), b === `right` && e.splice(C.length, 0, hn)
                }
                var r = e.indexOf(hn);
                e = e.filter(function(e, t) {
                    return e !== hn || t === r
                });
                var i = C[r],
                    p = b || (i ? i.fixed : null),
                    g = _(_(_(_(_(_({}, dr, {
                        className: `${n}-expand-icon-col`,
                        columnType: `EXPAND_COLUMN`
                    }), `title`, s), `fixed`, p), `className`, `${n}-row-expand-icon-cell`), `width`, y), `render`, function(e, t, r) {
                        var i = c(t, r),
                            a = u({
                                prefixCls: n,
                                expanded: o.has(i),
                                expandable: !d || d(t),
                                record: t,
                                onExpand: l
                            });
                        return v ? Q.createElement(`span`, {
                            onClick: function(e) {
                                return e.stopPropagation()
                            }
                        }, a) : a
                    });
                return e.map(function(e, t) {
                    var n = e === hn ? g : e;
                    return t < h ? m(m({}, n), {}, {
                        fixed: n.fixed || `left`
                    }) : n
                })
            }
            return C.filter(function(e) {
                return e !== hn
            })
        }, [a, C, c, o, u, g, h]),
        T = Q.useMemo(function() {
            var e = w;
            return t && (e = t(e)), e.length || (e = [{
                render: function() {
                    return null
                }
            }]), e
        }, [t, w, g]),
        E = Q.useMemo(function() {
            return g === `rtl` ? kr(Or(T)) : Or(T)
        }, [T, g, x]),
        D = Q.useMemo(function() {
            for (var e = -1, t = E.length - 1; t >= 0; --t) {
                var n = E[t].fixed;
                if (n === `left` || n === !0) {
                    e = t;
                    break
                }
            }
            if (e >= 0)
                for (var r = 0; r <= e; r += 1) {
                    var i = E[r].fixed;
                    if (i !== `left` && i !== !0) return !0
                }
            var a = E.findIndex(function(e) {
                return e.fixed === `right`
            });
            if (a >= 0) {
                for (var o = a; o < E.length; o += 1)
                    if (E[o].fixed !== `right`) return !0
            }
            return !1
        }, [E]),
        O = Cr(E, x, S),
        k = R(O, 2);
    return [T, k[0], k[1], D]
}
P(), G(), g();

function jr(e, t, n) {
    var r = fr(e),
        i = r.expandIcon,
        a = r.expandedRowKeys,
        o = r.defaultExpandedRowKeys,
        s = r.defaultExpandAllRows,
        c = r.expandedRowRender,
        l = r.onExpand,
        u = r.onExpandedRowsChange,
        d = r.childrenColumnName,
        f = i || er,
        p = d || `children`,
        m = Q.useMemo(function() {
            return c ? `row` : e.expandable && e.internalHooks === `rc-table-internal-hook` && e.expandable.__PARENT_RENDER_ICON__ || t.some(function(e) {
                return e && w(e) === `object` && e[p]
            }) ? `nest` : !1
        }, [!!c, t]),
        h = Q.useState(function() {
            return o || (s ? tr(t, n, p) : [])
        }),
        g = R(h, 2),
        _ = g[0],
        v = g[1],
        y = Q.useMemo(function() {
            return new Set(a || _ || [])
        }, [a, _]);
    return [r, m, y, f, p, Q.useCallback(function(e) {
        var r = n(e, t.indexOf(e)),
            i, a = y.has(r);
        a ? (y.delete(r), i = F(y)) : i = [].concat(F(y), [r]), v(i), l && l(!a, e), u && u(i)
    }, [n, y, t, l, u])]
}

function Mr(e, t, n) {
    var r = e.map(function(r, i) {
        return zn(i, i, e, t, n)
    });
    return x(function() {
        return r
    }, [r], function(e, t) {
        return !M(e, t)
    })
}
G();

function Nr(e) {
    var t = (0, Q.useRef)(e),
        n = (0, Q.useState)({}),
        r = R(n, 2)[1],
        i = (0, Q.useRef)(null),
        a = (0, Q.useRef)([]);

    function o(e) {
        a.current.push(e);
        var n = Promise.resolve();
        i.current = n, n.then(function() {
            if (i.current === n) {
                var e = a.current,
                    o = t.current;
                a.current = [], e.forEach(function(e) {
                    t.current = e(t.current)
                }), i.current = null, o !== t.current && r({})
            }
        })
    }
    return (0, Q.useEffect)(function() {
        return function() {
            i.current = null
        }
    }, []), [t.current, o]
}

function Pr(e) {
    var t = (0, Q.useRef)(e || null),
        n = (0, Q.useRef)();

    function r() {
        window.clearTimeout(n.current)
    }

    function i(e) {
        t.current = e, r(), n.current = window.setTimeout(function() {
            t.current = null, n.current = void 0
        }, 100)
    }

    function a() {
        return t.current
    }
    return (0, Q.useEffect)(function() {
        return r
    }, []), [i, a]
}
G();

function Fr() {
    var e = Q.useState(-1),
        t = R(e, 2),
        n = t[0],
        r = t[1],
        i = Q.useState(-1),
        a = R(i, 2),
        o = a[0],
        s = a[1];
    return [n, o, Q.useCallback(function(e, t) {
        r(e), s(t)
    }, [])]
}
g();
var Ir = A() ? window : null;

function Lr(e, t) {
    var n = w(e) === `object` ? e : {},
        r = n.offsetHeader,
        i = r === void 0 ? 0 : r,
        a = n.offsetSummary,
        o = a === void 0 ? 0 : a,
        s = n.offsetScroll,
        c = s === void 0 ? 0 : s,
        l = n.getContainer,
        u = (l === void 0 ? function() {
            return Ir
        } : l)() || Ir,
        d = !!e;
    return Q.useMemo(function() {
        return {
            isSticky: d,
            stickyClassName: d ? `${t}-sticky-holder` : ``,
            offsetHeader: i,
            offsetSummary: o,
            offsetScroll: c,
            container: u
        }
    }, [d, c, i, o, t, u])
}

function Rr(e, t, n) {
    return (0, Q.useMemo)(function() {
        var r = t.length,
            i = function(n, r, i) {
                for (var a = [], o = 0, s = n; s !== r; s += i) a.push(o), t[s].fixed && (o += e[s] || 0);
                return a
            },
            a = i(0, r, 1),
            o = i(r - 1, -1, -1).reverse();
        return n === `rtl` ? {
            left: o,
            right: a
        } : {
            left: a,
            right: o
        }
    }, [e, t, n])
}

function zr(e) {
    var t = e.className,
        n = e.children;
    return Q.createElement(`div`, {
        className: t
    }, n)
}

function Br(e) {
    var t = ie(e).getBoundingClientRect(),
        n = document.documentElement;
    return {
        left: t.left + (window.pageXOffset || n.scrollLeft) - (n.clientLeft || document.body.clientLeft || 0),
        top: t.top + (window.pageYOffset || n.scrollTop) - (n.clientTop || document.body.clientTop || 0)
    }
}
y(), G();
var Vr = Q.forwardRef(function(e, t) {
    var n, r, i = e.scrollBodyRef,
        a = e.onScroll,
        o = e.offsetScroll,
        s = e.container,
        c = e.direction,
        l = vn(Tn, `prefixCls`),
        u = ((n = i.current) == null ? void 0 : n.scrollWidth) || 0,
        d = ((r = i.current) == null ? void 0 : r.clientWidth) || 0,
        f = u && d / u * d,
        p = Q.useRef(),
        h = Nr({
            scrollLeft: 0,
            isHiddenScrollBar: !0
        }),
        g = R(h, 2),
        v = g[0],
        y = g[1],
        b = Q.useRef({
            delta: 0,
            x: 0
        }),
        x = Q.useState(!1),
        S = R(x, 2),
        C = S[0],
        w = S[1],
        T = Q.useRef(null);
    Q.useEffect(function() {
        return function() {
            Y.cancel(T.current)
        }
    }, []);
    var E = function() {
            w(!1)
        },
        D = function(e) {
            e.persist(), b.current.delta = e.pageX - v.scrollLeft, b.current.x = 0, w(!0), e.preventDefault()
        },
        O = function(e) {
            var t, n = (e || ((t = window) == null ? void 0 : t.event)).buttons;
            if (!C || n === 0) C && w(!1);
            else {
                var r = b.current.x + e.pageX - b.current.x - b.current.delta,
                    i = c === `rtl`;
                r = Math.max(i ? f - d : 0, Math.min(i ? 0 : d - f, r)), (!i || Math.abs(r) + Math.abs(f) < d) && (a({
                    scrollLeft: r / d * (u + 2)
                }), b.current.x = e.pageX)
            }
        },
        k = function() {
            Y.cancel(T.current), T.current = Y(function() {
                if (i.current) {
                    var e = Br(i.current).top,
                        t = e + i.current.offsetHeight,
                        n = s === window ? document.documentElement.scrollTop + window.innerHeight : Br(s).top + s.clientHeight;
                    t - me() <= n || e >= n - o ? y(function(e) {
                        return m(m({}, e), {}, {
                            isHiddenScrollBar: !0
                        })
                    }) : y(function(e) {
                        return m(m({}, e), {}, {
                            isHiddenScrollBar: !1
                        })
                    })
                }
            })
        },
        A = function(e) {
            y(function(t) {
                return m(m({}, t), {}, {
                    scrollLeft: e / u * d || 0
                })
            })
        };
    return Q.useImperativeHandle(t, function() {
        return {
            setScrollLeft: A,
            checkScrollBarVisible: k
        }
    }), Q.useEffect(function() {
        var e = yt(document.body, `mouseup`, E, !1),
            t = yt(document.body, `mousemove`, O, !1);
        return k(),
            function() {
                e.remove(), t.remove()
            }
    }, [f, C]), Q.useEffect(function() {
        if (i.current) {
            for (var e = [], t = ie(i.current); t;) e.push(t), t = t.parentElement;
            return e.forEach(function(e) {
                    return e.addEventListener(`scroll`, k, !1)
                }), window.addEventListener(`resize`, k, !1), window.addEventListener(`scroll`, k, !1), s.addEventListener(`scroll`, k, !1),
                function() {
                    e.forEach(function(e) {
                        return e.removeEventListener(`scroll`, k)
                    }), window.removeEventListener(`resize`, k), window.removeEventListener(`scroll`, k), s.removeEventListener(`scroll`, k)
                }
        }
    }, [s]), Q.useEffect(function() {
        v.isHiddenScrollBar || y(function(e) {
            var t = i.current;
            return t ? m(m({}, e), {}, {
                scrollLeft: t.scrollLeft / t.scrollWidth * t.clientWidth
            }) : e
        })
    }, [v.isHiddenScrollBar]), u <= d || !f || v.isHiddenScrollBar ? null : Q.createElement(`div`, {
        style: {
            height: me(),
            width: d,
            bottom: o
        },
        className: `${l}-sticky-scroll`
    }, Q.createElement(`div`, {
        onMouseDown: D,
        ref: p,
        className: (0, $.default)(`${l}-sticky-scroll-bar`, _({}, `${l}-sticky-scroll-bar-active`, C)),
        style: {
            width: `${f}px`,
            transform: `translate3d(${v.scrollLeft}px, 0, 0)`
        }
    }))
});
y(), r(), G();
var Hr = `rc-table`,
    Ur = [],
    Wr = {};

function Gr() {
    return `No Data`
}

function Kr(e, t) {
    var n = m({
            rowKey: `key`,
            prefixCls: Hr,
            emptyText: Gr
        }, e),
        r = n.prefixCls,
        i = n.className,
        a = n.rowClassName,
        s = n.style,
        c = n.data,
        u = n.rowKey,
        d = n.scroll,
        f = n.tableLayout,
        p = n.direction,
        h = n.title,
        g = n.footer,
        y = n.summary,
        b = n.caption,
        x = n.id,
        S = n.showHeader,
        C = n.components,
        w = n.emptyText,
        T = n.onRow,
        E = n.onHeaderRow,
        D = n.onScroll,
        O = n.internalHooks,
        k = n.transformColumns,
        A = n.internalRefs,
        j = n.tailor,
        M = n.getContainerWidth,
        N = n.sticky,
        P = n.rowHoverable,
        F = P === void 0 || P,
        I = c || Ur,
        L = !!I.length,
        ee = O === gn,
        z = Q.useCallback(function(e, t) {
            return fe(C, e) || t
        }, [C]),
        B = Q.useMemo(function() {
            return typeof u == `function` ? u : function(e) {
                return e && e[u]
            }
        }, [u]),
        V = z([`body`]),
        H = Fr(),
        U = R(H, 3),
        W = U[0],
        G = U[1],
        te = U[2],
        K = jr(n, I, B),
        ne = R(K, 6),
        q = ne[0],
        re = ne[1],
        J = ne[2],
        ae = ne[3],
        oe = ne[4],
        se = ne[5],
        Y = d == null ? void 0 : d.x,
        le = Q.useState(0),
        ue = R(le, 2),
        de = ue[0],
        pe = ue[1],
        me = Ar(m(m(m({}, n), q), {}, {
            expandable: !!q.expandedRowRender,
            columnTitle: q.columnTitle,
            expandedKeys: J,
            getRowKey: B,
            onTriggerExpand: se,
            expandIcon: ae,
            expandIconColumnIndex: q.expandIconColumnIndex,
            direction: p,
            scrollWidth: ee && j && typeof Y == `number` ? Y : null,
            clientWidth: de
        }), ee ? k : null),
        he = R(me, 4),
        _e = he[0],
        X = he[1],
        ve = he[2],
        ye = he[3],
        be = ve ?? Y,
        Se = Q.useMemo(function() {
            return {
                columns: _e,
                flattenColumns: X
            }
        }, [_e, X]),
        Ce = Q.useRef(),
        we = Q.useRef(),
        Te = Q.useRef(),
        Ee = Q.useRef();
    Q.useImperativeHandle(t, function() {
        return {
            nativeElement: Ce.current,
            scrollTo: function(e) {
                var t;
                if (Te.current instanceof HTMLElement) {
                    var n = e.index,
                        r = e.top,
                        i = e.key;
                    if (jn(r)) {
                        var a;
                        (a = Te.current) == null || a.scrollTo({
                            top: r
                        })
                    } else {
                        var o, s = i ?? B(I[n]);
                        (o = Te.current.querySelector(`[data-row-key="${s}"]`)) == null || o.scrollIntoView()
                    }
                } else(t = Te.current) != null && t.scrollTo && Te.current.scrollTo(e)
            }
        }
    });
    var De = Q.useRef(),
        Oe = Q.useState(!1),
        ke = R(Oe, 2),
        je = ke[0],
        Me = ke[1],
        Ne = Q.useState(!1),
        Pe = R(Ne, 2),
        Fe = Pe[0],
        Ie = Pe[1],
        Le = Q.useState(new Map),
        Re = R(Le, 2),
        ze = Re[0],
        Be = Re[1],
        Ve = kn(X).map(function(e) {
            return ze.get(e)
        }),
        He = Q.useMemo(function() {
            return Ve
        }, [Ve.join(`_`)]),
        Ue = Rr(He, X, p),
        Z = d && An(d.y),
        We = d && An(be) || !!q.fixed,
        Ge = We && X.some(function(e) {
            return e.fixed
        }),
        Ke = Q.useRef(),
        qe = Lr(N, r),
        Je = qe.isSticky,
        Ye = qe.offsetHeader,
        Xe = qe.offsetSummary,
        Ze = qe.offsetScroll,
        Qe = qe.stickyClassName,
        $e = qe.container,
        et = Q.useMemo(function() {
            return y == null ? void 0 : y(I)
        }, [y, I]),
        tt = (Z || Je) && Q.isValidElement(et) && et.type === Wn && et.props.fixed,
        nt, rt, it;
    Z && (rt = {
        overflowY: L ? `scroll` : `auto`,
        maxHeight: d.y
    }), We && (nt = {
        overflowX: `auto`
    }, Z || (rt = {
        overflowY: `hidden`
    }), it = {
        width: be === !0 ? `auto` : be,
        minWidth: `100%`
    });
    var at = Q.useCallback(function(e, t) {
            Be(function(n) {
                if (n.get(e) !== t) {
                    var r = new Map(n);
                    return r.set(e, t), r
                }
                return n
            })
        }, []),
        ot = Pr(null),
        st = R(ot, 2),
        ct = st[0],
        lt = st[1];

    function ut(e, t) {
        t && (typeof t == `function` ? t(e) : t.scrollLeft !== e && (t.scrollLeft = e, t.scrollLeft !== e && setTimeout(function() {
            t.scrollLeft = e
        }, 0)))
    }
    var dt = l(function(e) {
            var t = e.currentTarget,
                n = e.scrollLeft,
                r = p === `rtl`,
                i = typeof n == `number` ? n : t.scrollLeft,
                a = t || Wr;
            if (!lt() || lt() === a) {
                var o;
                ct(a), ut(i, we.current), ut(i, Te.current), ut(i, De.current), ut(i, (o = Ke.current) == null ? void 0 : o.setScrollLeft)
            }
            var s = t || we.current;
            if (s) {
                var c = ee && j && typeof be == `number` ? be : s.scrollWidth,
                    l = s.clientWidth;
                if (c === l) {
                    Me(!1), Ie(!1);
                    return
                }
                r ? (Me(-i < c - l), Ie(-i > 0)) : (Me(i > 0), Ie(i < c - l))
            }
        }),
        ft = l(function(e) {
            dt(e), D == null || D(e)
        }),
        pt = function() {
            if (We && Te.current) {
                var e;
                dt({
                    currentTarget: ie(Te.current),
                    scrollLeft: (e = Te.current) == null ? void 0 : e.scrollLeft
                })
            } else Me(!1), Ie(!1)
        },
        mt = function(e) {
            var t, n = e.width;
            (t = Ke.current) == null || t.checkScrollBarVisible();
            var r = Ce.current ? Ce.current.offsetWidth : n;
            ee && M && Ce.current && (r = M(Ce.current, r) || r), r !== de && (pt(), pe(r))
        },
        ht = Q.useRef(!1);
    Q.useEffect(function() {
        ht.current && pt()
    }, [We, c, _e.length]), Q.useEffect(function() {
        ht.current = !0
    }, []);
    var gt = Q.useState(0),
        _t = R(gt, 2),
        vt = _t[0],
        yt = _t[1],
        bt = Q.useState(!0),
        xt = R(bt, 2),
        St = xt[0],
        Ct = xt[1];
    v(function() {
        (!j || !ee) && (Te.current instanceof Element ? yt(ge(Te.current).width) : yt(ge(Ee.current).width)), Ct(Ae(`position`, `sticky`))
    }, []), Q.useEffect(function() {
        ee && A && (A.body.current = Te.current)
    });
    var wt = Q.useCallback(function(e) {
            return Q.createElement(Q.Fragment, null, Q.createElement(xr, e), tt === `top` && Q.createElement(Kn, e, et))
        }, [tt, et]),
        Tt = Q.useCallback(function(e) {
            return Q.createElement(Kn, e, et)
        }, [et]),
        Et = z([`table`], `table`),
        Dt = Q.useMemo(function() {
            return f || (Ge ? be === `max-content` ? `auto` : `fixed` : Z || Je || X.some(function(e) {
                return e.ellipsis
            }) ? `fixed` : `auto`)
        }, [Z, Ge, X, f, Je]),
        Ot, kt = {
            colWidths: He,
            columCount: X.length,
            stickyOffsets: Ue,
            onHeaderRow: E,
            fixHeader: Z,
            scroll: d
        },
        At = Q.useMemo(function() {
            return L ? null : typeof w == `function` ? w() : w
        }, [L, w]),
        jt = Q.createElement(lr, {
            data: I,
            measureColumnWidth: Z || We || Je
        }),
        Mt = Q.createElement(mr, {
            colWidths: X.map(function(e) {
                return e.width
            }),
            columns: X
        }),
        Nt = b == null ? void 0 : Q.createElement(`caption`, {
            className: `${r}-caption`
        }, b),
        Pt = xe(n, {
            data: !0
        }),
        Ft = xe(n, {
            aria: !0
        });
    if (Z || Je) {
        var It;
        typeof V == `function` ? (It = V(I, {
            scrollbarSize: vt,
            ref: Te,
            onScroll: dt
        }), kt.colWidths = X.map(function(e, t) {
            var n = e.width,
                r = t === X.length - 1 ? n - vt : n;
            return typeof r == `number` && !Number.isNaN(r) ? r : 0
        })) : It = Q.createElement(`div`, {
            style: m(m({}, nt), rt),
            onScroll: ft,
            ref: Te,
            className: (0, $.default)(`${r}-body`)
        }, Q.createElement(Et, o({
            style: m(m({}, it), {}, {
                tableLayout: Dt
            })
        }, Ft), Nt, Mt, jt, !tt && et && Q.createElement(Kn, {
            stickyOffsets: Ue,
            flattenColumns: X
        }, et)));
        var Lt = m(m(m({
            noData: !I.length,
            maxContentScroll: We && be === `max-content`
        }, kt), Se), {}, {
            direction: p,
            stickyClassName: Qe,
            onScroll: dt
        });
        Ot = Q.createElement(Q.Fragment, null, S !== !1 && Q.createElement(vr, o({}, Lt, {
            stickyTopOffset: Ye,
            className: `${r}-header`,
            ref: we
        }), wt), It, tt && tt !== `top` && Q.createElement(vr, o({}, Lt, {
            stickyBottomOffset: Xe,
            className: `${r}-summary`,
            ref: De
        }), Tt), Je && Te.current && Te.current instanceof Element && Q.createElement(Vr, {
            ref: Ke,
            offsetScroll: Ze,
            scrollBodyRef: Te,
            onScroll: dt,
            container: $e,
            direction: p
        }))
    } else Ot = Q.createElement(`div`, {
        style: m(m({}, nt), rt),
        className: (0, $.default)(`${r}-content`),
        onScroll: dt,
        ref: Te
    }, Q.createElement(Et, o({
        style: m(m({}, it), {}, {
            tableLayout: Dt
        })
    }, Ft), Nt, Mt, S !== !1 && Q.createElement(xr, o({}, kt, Se)), jt, et && Q.createElement(Kn, {
        stickyOffsets: Ue,
        flattenColumns: X
    }, et)));
    var Rt = Q.createElement(`div`, o({
        className: (0, $.default)(r, i, _(_(_(_(_(_(_(_(_(_({}, `${r}-rtl`, p === `rtl`), `${r}-ping-left`, je), `${r}-ping-right`, Fe), `${r}-layout-fixed`, f === `fixed`), `${r}-fixed-header`, Z), `${r}-fixed-column`, Ge), `${r}-fixed-column-gapped`, Ge && ye), `${r}-scroll-horizontal`, We), `${r}-has-fix-left`, X[0] && X[0].fixed), `${r}-has-fix-right`, X[X.length - 1] && X[X.length - 1].fixed === `right`)),
        style: s,
        id: x,
        ref: Ce
    }, Pt), h && Q.createElement(zr, {
        className: `${r}-title`
    }, h(I)), Q.createElement(`div`, {
        ref: Ee,
        className: `${r}-container`
    }, Ot), g && Q.createElement(zr, {
        className: `${r}-footer`
    }, g(I)));
    We && (Rt = Q.createElement(ce, {
        onResize: mt
    }, Rt));
    var zt = Mr(X, Ue, p),
        Bt = Q.useMemo(function() {
            return {
                scrollX: be,
                prefixCls: r,
                getComponent: z,
                scrollbarSize: vt,
                direction: p,
                fixedInfoList: zt,
                isSticky: Je,
                supportSticky: St,
                componentWidth: de,
                fixHeader: Z,
                fixColumn: Ge,
                horizonScroll: We,
                tableLayout: Dt,
                rowClassName: a,
                expandedRowClassName: q.expandedRowClassName,
                expandIcon: ae,
                expandableType: re,
                expandRowByClick: q.expandRowByClick,
                expandedRowRender: q.expandedRowRender,
                expandedRowOffset: q.expandedRowOffset,
                onTriggerExpand: se,
                expandIconColumnIndex: q.expandIconColumnIndex,
                indentSize: q.indentSize,
                allColumnsFixedLeft: X.every(function(e) {
                    return e.fixed === `left`
                }),
                emptyNode: At,
                columns: _e,
                flattenColumns: X,
                onColumnResize: at,
                colWidths: He,
                hoverStartRow: W,
                hoverEndRow: G,
                onHover: te,
                rowExpandable: q.rowExpandable,
                onRow: T,
                getRowKey: B,
                expandedKeys: J,
                childrenColumnName: oe,
                rowHoverable: F
            }
        }, [be, r, z, vt, p, zt, Je, St, de, Z, Ge, We, Dt, a, q.expandedRowClassName, ae, re, q.expandRowByClick, q.expandedRowRender, q.expandedRowOffset, se, q.expandIconColumnIndex, q.indentSize, At, _e, X, at, He, W, G, te, q.rowExpandable, T, B, J, oe, F]);
    return Q.createElement(Tn.Provider, {
        value: Bt
    }, Rt)
}
var qr = Q.forwardRef(Kr);

function Jr(e) {
    return Sn(qr, e)
}
var Yr = Jr();
Yr.EXPAND_COLUMN = hn, Yr.INTERNAL_HOOKS = gn, Yr.Column = Jn, Yr.ColumnGroup = Yn, Yr.Summary = qn;
var Xr = _n(null),
    Zr = _n(null);
r();

function Qr(e, t, n) {
    return n[e + (t || 1)] - (n[e] || 0)
}

function $r(e) {
    var t = e.rowInfo,
        n = e.column,
        r = e.colIndex,
        i = e.indent,
        a = e.index,
        s = e.component,
        c = e.renderIndex,
        l = e.record,
        u = e.style,
        d = e.className,
        f = e.inverse,
        p = e.getHeight,
        h = n.render,
        g = n.dataIndex,
        _ = n.className,
        v = n.width,
        y = vn(Zr, [`columnsOffset`]).columnsOffset,
        b = rr(t, n, r, i, a),
        x = b.key,
        S = b.fixedInfo,
        C = b.appendCellNode,
        w = b.additionalCellProps,
        T = w.style,
        E = w.colSpan,
        D = E === void 0 ? 1 : E,
        O = w.rowSpan,
        k = O === void 0 ? 1 : O,
        A = Qr(r - 1, D, y),
        j = D > 1 ? v - A : 0,
        M = m(m(m({}, T), u), {}, {
            flex: `0 0 ${A}px`,
            width: `${A}px`,
            marginRight: j,
            pointerEvents: `auto`
        }),
        N = Q.useMemo(function() {
            return f ? k <= 1 : D === 0 || k === 0 || k > 1
        }, [k, D, f]);
    N ? M.visibility = `hidden` : f && (M.height = p == null ? void 0 : p(k));
    var P = N ? function() {
            return null
        } : h,
        F = {};
    return (k === 0 || D === 0) && (F.rowSpan = 1, F.colSpan = 1), Q.createElement(Rn, o({
        className: (0, $.default)(_, d),
        ellipsis: n.ellipsis,
        align: n.align,
        scope: n.rowScope,
        component: s,
        prefixCls: t.prefixCls,
        key: x,
        record: l,
        index: a,
        renderIndex: c,
        dataIndex: g,
        render: P,
        shouldCellUpdate: n.shouldCellUpdate
    }, S, {
        appendNode: C,
        additionalProps: m(m({}, w), {}, {
            style: M
        }, F)
    }))
}
r(), y(), B();
var ei = [`data`, `index`, `className`, `rowKey`, `style`, `extra`, `getHeight`],
    ti = Cn(Q.forwardRef(function(e, t) {
        var n = e.data,
            r = e.index,
            i = e.className,
            a = e.rowKey,
            s = e.style,
            c = e.extra,
            l = e.getHeight,
            u = U(e, ei),
            d = n.record,
            f = n.indent,
            p = n.index,
            h = vn(Tn, [`prefixCls`, `flattenColumns`, `fixColumn`, `componentWidth`, `scrollX`]),
            g = h.scrollX,
            v = h.flattenColumns,
            y = h.prefixCls,
            b = h.fixColumn,
            x = h.componentWidth,
            S = vn(Xr, [`getComponent`]).getComponent,
            C = Qn(d, a, r, f),
            w = S([`body`, `row`], `div`),
            T = S([`body`, `cell`], `div`),
            E = C.rowSupportExpand,
            D = C.expanded,
            O = C.rowProps,
            k = C.expandedRowRender,
            A = C.expandedRowClassName,
            j;
        if (E && D) {
            var M = k(d, r, f + 1, D),
                N = nr(A, d, r, f),
                P = {};
            b && (P = {
                style: _({}, `--virtual-width`, `${x}px`)
            });
            var F = `${y}-expanded-row-cell`;
            j = Q.createElement(w, {
                className: (0, $.default)(`${y}-expanded-row`, `${y}-expanded-row-level-${f+1}`, N)
            }, Q.createElement(Rn, {
                component: T,
                prefixCls: y,
                className: (0, $.default)(F, _({}, `${F}-fixed`, b)),
                additionalProps: P
            }, M))
        }
        var I = m(m({}, s), {}, {
            width: g
        });
        c && (I.position = `absolute`, I.pointerEvents = `none`);
        var L = Q.createElement(w, o({}, O, u, {
            "data-row-key": a,
            ref: E ? null : t,
            className: (0, $.default)(i, `${y}-row`, O == null ? void 0 : O.className, _({}, `${y}-row-extra`, c)),
            style: m(m({}, I), O == null ? void 0 : O.style)
        }), v.map(function(e, t) {
            return Q.createElement($r, {
                key: t,
                component: T,
                rowInfo: C,
                column: e,
                colIndex: t,
                indent: f,
                index: r,
                renderIndex: p,
                record: d,
                inverse: c,
                getHeight: l
            })
        }));
        return E ? Q.createElement(`div`, {
            ref: t
        }, L, j) : L
    }));
g(), G();
var ni = Cn(Q.forwardRef(function(e, t) {
    var n = e.data,
        r = e.onScroll,
        i = vn(Tn, [`flattenColumns`, `onColumnResize`, `getRowKey`, `prefixCls`, `expandedKeys`, `childrenColumnName`, `scrollX`, `direction`]),
        a = i.flattenColumns,
        o = i.onColumnResize,
        s = i.getRowKey,
        c = i.expandedKeys,
        l = i.prefixCls,
        u = i.childrenColumnName,
        d = i.scrollX,
        f = i.direction,
        p = vn(Xr),
        m = p.sticky,
        h = p.scrollY,
        g = p.listItemHeight,
        _ = p.getComponent,
        v = p.onScroll,
        y = Q.useRef(),
        b = Zn(n, u, c, s),
        x = Q.useMemo(function() {
            var e = 0;
            return a.map(function(t) {
                var n = t.width,
                    r = t.key;
                return e += n, [r, n, e]
            })
        }, [a]),
        S = Q.useMemo(function() {
            return x.map(function(e) {
                return e[2]
            })
        }, [x]);
    Q.useEffect(function() {
        x.forEach(function(e) {
            var t = R(e, 2),
                n = t[0],
                r = t[1];
            o(n, r)
        })
    }, [x]), Q.useImperativeHandle(t, function() {
        var e, t = {
            scrollTo: function(e) {
                var t;
                (t = y.current) == null || t.scrollTo(e)
            },
            nativeElement: (e = y.current) == null ? void 0 : e.nativeElement
        };
        return Object.defineProperty(t, "scrollLeft", {
            get: function() {
                var e;
                return ((e = y.current) == null ? void 0 : e.getScrollInfo().x) || 0
            },
            set: function(e) {
                var t;
                (t = y.current) == null || t.scrollTo({
                    left: e
                })
            }
        }), t
    });
    var C = function(e, t) {
            var n, r = (n = b[t]) == null ? void 0 : n.record,
                i = e.onCell;
            if (i) {
                var a = i(r, t);
                return (a == null ? void 0 : a.rowSpan) ?? 1
            }
            return 1
        },
        T = function(e) {
            var t = e.start,
                n = e.end,
                r = e.getSize,
                i = e.offsetY;
            if (n < 0) return null;
            for (var o = a.filter(function(e) {
                    return C(e, t) === 0
                }), c = t, l = function(e) {
                    if (o = o.filter(function(t) {
                            return C(t, e) === 0
                        }), !o.length) return c = e, 1
                }, u = t; u >= 0 && !l(u); --u);
            for (var d = a.filter(function(e) {
                    return C(e, n) !== 1
                }), f = n, p = function(e) {
                    if (d = d.filter(function(t) {
                            return C(t, e) !== 1
                        }), !d.length) return f = Math.max(e - 1, n), 1
                }, m = n; m < b.length && !p(m); m += 1);
            for (var h = [], g = function(e) {
                    if (!b[e]) return 1;
                    a.some(function(t) {
                        return C(t, e) > 1
                    }) && h.push(e)
                }, _ = c; _ <= f; _ += 1)
                if (g(_)) continue;
            return h.map(function(e) {
                var t = b[e],
                    n = s(t.record, e),
                    a = function(t) {
                        var i = e + t - 1,
                            a = r(n, s(b[i].record, i));
                        return a.bottom - a.top
                    },
                    o = r(n);
                return Q.createElement(ti, {
                    key: e,
                    data: t,
                    rowKey: n,
                    index: e,
                    style: {
                        top: -i + o.top
                    },
                    extra: !0,
                    getHeight: a
                })
            })
        },
        E = Q.useMemo(function() {
            return {
                columnsOffset: S
            }
        }, [S]),
        D = `${l}-tbody`,
        O = _([`body`, `wrapper`]),
        k = {};
    return m && (k.position = `sticky`, k.bottom = 0, w(m) === `object` && m.offsetScroll && (k.bottom = m.offsetScroll)), Q.createElement(Zr.Provider, {
        value: E
    }, Q.createElement(Ne, {
        fullHeight: !1,
        ref: y,
        prefixCls: `${D}-virtual`,
        styles: {
            horizontalScrollBar: k
        },
        className: D,
        height: h,
        itemHeight: g || 24,
        data: b,
        itemKey: function(e) {
            return s(e.record)
        },
        component: O,
        scrollWidth: d,
        direction: f,
        onVirtualScroll: function(e) {
            var t, n = e.x;
            r({
                currentTarget: (t = y.current) == null ? void 0 : t.nativeElement,
                scrollLeft: n
            })
        },
        onScroll: v,
        extraRender: T
    }, function(e, t, n) {
        var r = s(e.record, t);
        return Q.createElement(ti, {
            data: e,
            rowKey: r,
            index: t,
            style: n.style
        })
    }))
}));
r();
var ri = function(e, t) {
    var n = t.ref,
        r = t.onScroll;
    return Q.createElement(ni, {
        ref: n,
        data: e,
        onScroll: r
    })
};

function ii(e, t) {
    var n = e.data,
        r = e.columns,
        i = e.scroll,
        a = e.sticky,
        s = e.prefixCls,
        c = s === void 0 ? Hr : s,
        u = e.className,
        d = e.listItemHeight,
        f = e.components,
        p = e.onScroll,
        h = i || {},
        g = h.x,
        _ = h.y;
    typeof g != `number` && (g = 1), typeof _ != `number` && (_ = 500);
    var v = l(function(e, t) {
            return fe(f, e) || t
        }),
        y = l(p),
        b = Q.useMemo(function() {
            return {
                sticky: a,
                scrollY: _,
                listItemHeight: d,
                getComponent: v,
                onScroll: y
            }
        }, [a, _, d, v, y]);
    return Q.createElement(Xr.Provider, {
        value: b
    }, Q.createElement(Yr, o({}, e, {
        className: (0, $.default)(u, `${c}-virtual`),
        scroll: m(m({}, i), {}, {
            x: g
        }),
        components: m(m({}, f), {}, {
            body: n != null && n.length ? ri : void 0
        }),
        columns: r,
        internalHooks: gn,
        tailor: !0,
        ref: t
    })))
}
var ai = Q.forwardRef(ii);

function oi(e) {
    return Sn(ai, e)
}
oi();
var si = e => null,
    ci = e => null,
    li = Q.createContext(null),
    ui = Q.createContext({});
y();
var di = Q.memo(function(e) {
    for (var t = e.prefixCls, n = e.level, r = e.isStart, i = e.isEnd, a = `${t}-indent-unit`, o = [], s = 0; s < n; s += 1) o.push(Q.createElement(`span`, {
        key: s,
        className: (0, $.default)(a, _(_({}, `${a}-start`, r[s]), `${a}-end`, i[s]))
    }));
    return Q.createElement(`span`, {
        "aria-hidden": `true`,
        className: `${t}-indent`
    }, o)
});
r(), y(), G(), B();
var fi = [`eventKey`, `className`, `style`, `dragOver`, `dragOverGapTop`, `dragOverGapBottom`, `isLeaf`, `isStart`, `isEnd`, `expanded`, `selected`, `checked`, `halfChecked`, `loading`, `domRef`, `active`, `data`, `onMouseMove`, `selectable`],
    pi = `open`,
    mi = `close`,
    hi = `---`,
    gi = function(e) {
        var t, n, r, i = e.eventKey,
            a = e.className,
            s = e.style,
            c = e.dragOver,
            l = e.dragOverGapTop,
            u = e.dragOverGapBottom,
            d = e.isLeaf,
            f = e.isStart,
            p = e.isEnd,
            h = e.expanded,
            g = e.selected,
            v = e.checked,
            y = e.halfChecked,
            b = e.loading,
            x = e.domRef,
            S = e.active,
            C = e.data,
            w = e.onMouseMove,
            T = e.selectable,
            E = U(e, fi),
            D = Q.useContext(li),
            O = Q.useContext(ui),
            k = Q.useRef(null),
            A = Q.useState(!1),
            j = R(A, 2),
            M = j[0],
            N = j[1],
            P = !!(D.disabled || e.disabled || (t = O.nodeDisabled) != null && t.call(O, C)),
            F = Q.useMemo(function() {
                return !D.checkable || e.checkable === !1 ? !1 : D.checkable
            }, [D.checkable, e.checkable]),
            I = function(t) {
                P || D.onNodeSelect(t, pt(e))
            },
            L = function(t) {
                P || F && !e.disableCheckbox && D.onNodeCheck(t, pt(e), !v)
            },
            ee = Q.useMemo(function() {
                return typeof T == `boolean` ? T : D.selectable
            }, [T, D.selectable]),
            z = function(t) {
                D.onNodeClick(t, pt(e)), ee ? I(t) : L(t)
            },
            B = function(t) {
                D.onNodeDoubleClick(t, pt(e))
            },
            V = function(t) {
                D.onNodeMouseEnter(t, pt(e))
            },
            H = function(t) {
                D.onNodeMouseLeave(t, pt(e))
            },
            W = function(t) {
                D.onNodeContextMenu(t, pt(e))
            },
            G = Q.useMemo(function() {
                return !(!D.draggable || D.draggable.nodeDraggable && !D.draggable.nodeDraggable(C))
            }, [D.draggable, C]),
            te = function(t) {
                t.stopPropagation(), N(!0), D.onNodeDragStart(t, e);
                try {
                    t.dataTransfer.setData(`text/plain`, ``)
                } catch {}
            },
            K = function(t) {
                t.preventDefault(), t.stopPropagation(), D.onNodeDragEnter(t, e)
            },
            ne = function(t) {
                t.preventDefault(), t.stopPropagation(), D.onNodeDragOver(t, e)
            },
            q = function(t) {
                t.stopPropagation(), D.onNodeDragLeave(t, e)
            },
            re = function(t) {
                t.stopPropagation(), N(!1), D.onNodeDragEnd(t, e)
            },
            ie = function(t) {
                t.preventDefault(), t.stopPropagation(), N(!1), D.onNodeDrop(t, e)
            },
            J = function(t) {
                b || D.onNodeExpand(t, pt(e))
            },
            ae = Q.useMemo(function() {
                return !!((nt(D.keyEntities, i) || {}).children || []).length
            }, [D.keyEntities, i]),
            oe = Q.useMemo(function() {
                return d === !1 ? !1 : d || !D.loadData && !ae || D.loadData && e.loaded && !ae
            }, [d, D.loadData, ae, e.loaded]);
        Q.useEffect(function() {
            b || typeof D.loadData == `function` && h && !oe && !e.loaded && D.onNodeLoad(pt(e))
        }, [b, D.loadData, D.onNodeLoad, h, oe, e]);
        var se = Q.useMemo(function() {
                var e;
                return (e = D.draggable) != null && e.icon ? Q.createElement(`span`, {
                    className: `${D.prefixCls}-draggable-icon`
                }, D.draggable.icon) : null
            }, [D.draggable]),
            Y = function(t) {
                var n = e.switcherIcon || D.switcherIcon;
                return typeof n == `function` ? n(m(m({}, e), {}, {
                    isLeaf: t
                })) : n
            },
            ce = function() {
                if (oe) {
                    var e = Y(!0);
                    return e === !1 ? null : Q.createElement(`span`, {
                        className: (0, $.default)(`${D.prefixCls}-switcher`, `${D.prefixCls}-switcher-noop`)
                    }, e)
                }
                var t = Y(!1);
                return t === !1 ? null : Q.createElement(`span`, {
                    onClick: J,
                    className: (0, $.default)(`${D.prefixCls}-switcher`, `${D.prefixCls}-switcher_${h?pi:mi}`)
                }, t)
            },
            le = Q.useMemo(function() {
                if (!F) return null;
                var t = typeof F == `boolean` ? null : F;
                return Q.createElement(`span`, {
                    className: (0, $.default)(`${D.prefixCls}-checkbox`, _(_(_({}, `${D.prefixCls}-checkbox-checked`, v), `${D.prefixCls}-checkbox-indeterminate`, !v && y), `${D.prefixCls}-checkbox-disabled`, P || e.disableCheckbox)),
                    onClick: L,
                    role: `checkbox`,
                    "aria-checked": y ? `mixed` : v,
                    "aria-disabled": P || e.disableCheckbox,
                    "aria-label": `Select ${typeof e.title==`string`?e.title:`tree node`}`
                }, t)
            }, [F, v, y, P, e.disableCheckbox, e.title]),
            ue = Q.useMemo(function() {
                return oe ? null : h ? pi : mi
            }, [oe, h]),
            de = Q.useMemo(function() {
                return Q.createElement(`span`, {
                    className: (0, $.default)(`${D.prefixCls}-iconEle`, `${D.prefixCls}-icon__${ue||`docu`}`, _({}, `${D.prefixCls}-icon_loading`, b))
                })
            }, [D.prefixCls, ue, b]),
            fe = Q.useMemo(function() {
                var t = !!D.draggable;
                return e.disabled || !t || D.dragOverNodeKey !== i ? null : D.dropIndicatorRender({
                    dropPosition: D.dropPosition,
                    dropLevelOffset: D.dropLevelOffset,
                    indent: D.indent,
                    prefixCls: D.prefixCls,
                    direction: D.direction
                })
            }, [D.dropPosition, D.dropLevelOffset, D.indent, D.prefixCls, D.direction, D.draggable, D.dragOverNodeKey, D.dropIndicatorRender]),
            pe = Q.useMemo(function() {
                var t = e.title,
                    n = t === void 0 ? hi : t,
                    r = `${D.prefixCls}-node-content-wrapper`,
                    i;
                if (D.showIcon) {
                    var a = e.icon || D.icon;
                    i = a ? Q.createElement(`span`, {
                        className: (0, $.default)(`${D.prefixCls}-iconEle`, `${D.prefixCls}-icon__customize`)
                    }, typeof a == `function` ? a(e) : a) : de
                } else D.loadData && b && (i = de);
                var o = typeof n == `function` ? n(C) : D.titleRender ? D.titleRender(C) : n;
                return Q.createElement(`span`, {
                    ref: k,
                    title: typeof n == `string` ? n : ``,
                    className: (0, $.default)(r, `${r}-${ue||`normal`}`, _({}, `${D.prefixCls}-node-selected`, !P && (g || M))),
                    onMouseEnter: V,
                    onMouseLeave: H,
                    onContextMenu: W,
                    onClick: z,
                    onDoubleClick: B
                }, i, Q.createElement(`span`, {
                    className: `${D.prefixCls}-title`
                }, o), fe)
            }, [D.prefixCls, D.showIcon, e, D.icon, de, D.titleRender, C, ue, V, H, W, z, B]),
            me = xe(E, {
                aria: !0,
                data: !0
            }),
            he = (nt(D.keyEntities, i) || {}).level,
            ge = p[p.length - 1],
            _e = !P && G,
            X = D.draggingNodeKey === i,
            ve = T === void 0 ? void 0 : {
                "aria-selected": !!T
            };
        return Q.createElement(`div`, o({
            ref: x,
            role: `treeitem`,
            "aria-expanded": d ? void 0 : h,
            className: (0, $.default)(a, `${D.prefixCls}-treenode`, (r = {}, _(_(_(_(_(_(_(_(_(_(r, `${D.prefixCls}-treenode-disabled`, P), `${D.prefixCls}-treenode-switcher-${h?`open`:`close`}`, !d), `${D.prefixCls}-treenode-checkbox-checked`, v), `${D.prefixCls}-treenode-checkbox-indeterminate`, y), `${D.prefixCls}-treenode-selected`, g), `${D.prefixCls}-treenode-loading`, b), `${D.prefixCls}-treenode-active`, S), `${D.prefixCls}-treenode-leaf-last`, ge), `${D.prefixCls}-treenode-draggable`, G), `dragging`, X), _(_(_(_(_(_(_(r, `drop-target`, D.dropTargetKey === i), `drop-container`, D.dropContainerKey === i), `drag-over`, !P && c), `drag-over-gap-top`, !P && l), `drag-over-gap-bottom`, !P && u), `filter-node`, (n = D.filterTreeNode) == null ? void 0 : n.call(D, pt(e))), `${D.prefixCls}-treenode-leaf`, oe))),
            style: s,
            draggable: _e,
            onDragStart: _e ? te : void 0,
            onDragEnter: G ? K : void 0,
            onDragOver: G ? ne : void 0,
            onDragLeave: G ? q : void 0,
            onDrop: G ? ie : void 0,
            onDragEnd: G ? re : void 0,
            onMouseMove: w
        }, ve, me), Q.createElement(di, {
            prefixCls: D.prefixCls,
            level: he,
            isStart: f,
            isEnd: p
        }), se, ce(), le, pe)
    };
gi.isTreeNode = 1, P(), g();

function _i(e, t) {
    if (!e) return [];
    var n = e.slice(),
        r = n.indexOf(t);
    return r >= 0 && n.splice(r, 1), n
}

function vi(e, t) {
    var n = (e || []).slice();
    return n.indexOf(t) === -1 && n.push(t), n
}

function yi(e) {
    return e.split(`-`)
}

function bi(e, t) {
    var n = [],
        r = nt(t, e);

    function i() {
        (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).forEach(function(e) {
            var t = e.key,
                r = e.children;
            n.push(t), i(r)
        })
    }
    return i(r.children), n
}

function xi(e) {
    if (e.parent) {
        var t = yi(e.pos);
        return Number(t[t.length - 1]) === e.parent.children.length - 1
    }
    return !1
}

function Si(e) {
    var t = yi(e.pos);
    return Number(t[t.length - 1]) === 0
}

function Ci(e, t, n, r, i, a, o, s, c, l) {
    var u, d = e.clientX,
        f = e.clientY,
        p = e.target.getBoundingClientRect(),
        m = p.top,
        h = p.height,
        g = ((l === `rtl` ? -1 : 1) * (((i == null ? void 0 : i.x) || 0) - d) - 12) / r,
        _ = c.filter(function(e) {
            var t;
            return (t = s[e]) == null || (t = t.children) == null ? void 0 : t.length
        }),
        v = nt(s, n.eventKey);
    if (f < m + h / 2) {
        var y = o.findIndex(function(e) {
                return e.key === v.key
            }),
            b = o[y <= 0 ? 0 : y - 1].key;
        v = nt(s, b)
    }
    var x = v.key,
        S = v,
        C = v.key,
        w = 0,
        T = 0;
    if (!_.includes(x))
        for (var E = 0; E < g && xi(v); E += 1) v = v.parent, T += 1;
    var D = t.data,
        O = v.node,
        k = !0;
    return Si(v) && v.level === 0 && f < m + h / 2 && a({
        dragNode: D,
        dropNode: O,
        dropPosition: -1
    }) && v.key === n.eventKey ? w = -1 : (S.children || []).length && _.includes(C) ? a({
        dragNode: D,
        dropNode: O,
        dropPosition: 0
    }) ? w = 0 : k = !1 : T === 0 ? g > -1.5 ? a({
        dragNode: D,
        dropNode: O,
        dropPosition: 1
    }) ? w = 1 : k = !1 : a({
        dragNode: D,
        dropNode: O,
        dropPosition: 0
    }) ? w = 0 : a({
        dragNode: D,
        dropNode: O,
        dropPosition: 1
    }) ? w = 1 : k = !1 : a({
        dragNode: D,
        dropNode: O,
        dropPosition: 1
    }) ? w = 1 : k = !1, {
        dropPosition: w,
        dropLevelOffset: T,
        dropTargetKey: v.key,
        dropTargetPos: v.pos,
        dragOverNodeKey: C,
        dropContainerKey: w === 0 ? null : ((u = v.parent) == null ? void 0 : u.key) || null,
        dropAllowed: k
    }
}

function wi(e, t) {
    if (e) return t.multiple ? e.slice() : e.length ? [e[0]] : e
}

function Ti(e) {
    if (!e) return null;
    var t;
    if (Array.isArray(e)) t = {
        checkedKeys: e,
        halfCheckedKeys: void 0
    };
    else if (w(e) === `object`) t = {
        checkedKeys: e.checked || void 0,
        halfCheckedKeys: e.halfChecked || void 0
    };
    else return q(!1, "`checkedKeys` is not an array or an object"), null;
    return t
}

function Ei(e, t) {
    var n = new Set;

    function r(e) {
        if (!n.has(e)) {
            var i = nt(t, e);
            if (i) {
                n.add(e);
                var a = i.parent;
                i.node.disabled || a && r(a.key)
            }
        }
    }
    return (e || []).forEach(function(e) {
        r(e)
    }), F(n)
}

function Di(e) {
    let [t, n] = (0, Q.useState)(null);
    return [(0, Q.useCallback)((r, i, a) => {
        let o = t ?? r,
            s = Math.min(o || 0, r),
            c = Math.max(o || 0, r),
            l = i.slice(s, c + 1).map(t => e(t)),
            u = l.some(e => !a.has(e)),
            d = [];
        return l.forEach(e => {
            u ? (a.has(e) || d.push(e), a.add(e)) : (a.delete(e), d.push(e))
        }), n(u ? c : null), d
    }, [t]), e => {
        n(e)
    }]
}
P();
var Oi = {},
    ki = `SELECT_ALL`,
    Ai = `SELECT_INVERT`,
    ji = `SELECT_NONE`,
    Mi = [],
    Ni = (e, t, n = []) => ((t || []).forEach(t => {
        n.push(t), t && typeof t == `object` && e in t && Ni(e, t[e], n)
    }), n),
    Pi = (e, t) => {
        let {
            preserveSelectedRowKeys: n,
            selectedRowKeys: r,
            defaultSelectedRowKeys: i,
            getCheckboxProps: a,
            getTitleCheckboxProps: o,
            onChange: s,
            onSelect: c,
            onSelectAll: l,
            onSelectInvert: u,
            onSelectNone: d,
            onSelectMultiple: f,
            columnWidth: p,
            type: m,
            selections: h,
            fixed: g,
            renderCell: _,
            hideSelectAll: v,
            checkStrictly: y = !0
        } = t || {}, {
            prefixCls: b,
            data: x,
            pageData: S,
            getRecordByKey: C,
            getRowKey: w,
            expandType: T,
            childrenColumnName: E,
            locale: D,
            getPopupContainer: O
        } = e, k = de(`Table`), [A, j] = Di(e => e), [M, N] = K(r || i || Mi, {
            value: r
        }), P = Q.useRef(new Map), I = (0, Q.useCallback)(e => {
            if (n) {
                let t = new Map;
                e.forEach(e => {
                    let n = C(e);
                    !n && P.current.has(e) && (n = P.current.get(e)), t.set(e, n)
                }), P.current = t
            }
        }, [C, n]);
        Q.useEffect(() => {
            I(M)
        }, [M]);
        let L = (0, Q.useMemo)(() => Ni(E, S), [E, S]),
            {
                keyEntities: ee
            } = (0, Q.useMemo)(() => {
                if (y) return {
                    keyEntities: null
                };
                let e = x;
                if (n) {
                    let t = new Set(L.map((e, t) => w(e, t))),
                        n = Array.from(P.current).reduce((e, [n, r]) => t.has(n) ? e : e.concat(r), []);
                    e = [].concat(F(e), F(n))
                }
                return dt(e, {
                    externalGetKey: w,
                    childrenPropName: E
                })
            }, [x, w, y, E, n, L]),
            R = (0, Q.useMemo)(() => {
                let e = new Map;
                return L.forEach((t, n) => {
                    let r = w(t, n),
                        i = (a ? a(t) : null) || {};
                    e.set(r, i)
                }), e
            }, [L, w, a]),
            z = (0, Q.useCallback)(e => {
                let t = w(e),
                    n;
                return n = R.has(t) ? R.get(w(e)) : a ? a(e) : void 0, !!(n != null && n.disabled)
            }, [R, w]),
            [B, V] = (0, Q.useMemo)(() => {
                if (y) return [M || [],
                    []
                ];
                let {
                    checkedKeys: e,
                    halfCheckedKeys: t
                } = vt(M, !0, ee, z);
                return [e || [], t]
            }, [M, y, ee, z]),
            H = (0, Q.useMemo)(() => {
                let e = m === `radio` ? B.slice(0, 1) : B;
                return new Set(e)
            }, [B, m]),
            U = (0, Q.useMemo)(() => m === `radio` ? new Set : new Set(V), [V, m]);
        Q.useEffect(() => {
            t || N(Mi)
        }, [!!t]);
        let W = (0, Q.useCallback)((e, t) => {
                let r, i;
                I(e), n ? (r = e, i = e.map(e => P.current.get(e))) : (r = [], i = [], e.forEach(e => {
                    let t = C(e);
                    t !== void 0 && (r.push(e), i.push(t))
                })), N(r), s == null || s(r, i, {
                    type: t
                })
            }, [N, C, s, n]),
            G = (0, Q.useCallback)((e, t, n, r) => {
                if (c) {
                    let i = n.map(e => C(e));
                    c(C(e), t, i, r)
                }
                W(n, `single`)
            }, [c, C, W]),
            te = (0, Q.useMemo)(() => !h || v ? null : (h === !0 ? [ki, Ai, ji] : h).map(e => e === `SELECT_ALL` ? {
                key: `all`,
                text: D.selectionAll,
                onSelect() {
                    W(x.map((e, t) => w(e, t)).filter(e => {
                        let t = R.get(e);
                        return !(t != null && t.disabled) || H.has(e)
                    }), `all`)
                }
            } : e === `SELECT_INVERT` ? {
                key: `invert`,
                text: D.selectInvert,
                onSelect() {
                    let e = new Set(H);
                    S.forEach((t, n) => {
                        let r = w(t, n),
                            i = R.get(r);
                        i != null && i.disabled || (e.has(r) ? e.delete(r) : e.add(r))
                    });
                    let t = Array.from(e);
                    u && (k.deprecated(!1, `onSelectInvert`, `onChange`), u(t)), W(t, `invert`)
                }
            } : e === `SELECT_NONE` ? {
                key: `none`,
                text: D.selectNone,
                onSelect() {
                    d == null || d(), W(Array.from(H).filter(e => {
                        let t = R.get(e);
                        return t == null ? void 0 : t.disabled
                    }), `none`)
                }
            } : e).map(e => Object.assign(Object.assign({}, e), {
                onSelect: (...t) => {
                    var n, r;
                    (r = e.onSelect) == null || (n = r).call.apply(n, [e].concat(t)), j(null)
                }
            })), [h, H, S, w, u, W]);
        return [(0, Q.useCallback)(e => {
            var n;
            if (!t) return e.filter(e => e !== Oi);
            let r = F(e),
                i = new Set(H),
                a = L.map(w).filter(e => !R.get(e).disabled),
                s = a.every(e => i.has(e)),
                c = a.some(e => i.has(e)),
                u = () => {
                    let e = [];
                    s ? a.forEach(t => {
                        i.delete(t), e.push(t)
                    }) : a.forEach(t => {
                        i.has(t) || (i.add(t), e.push(t))
                    });
                    let t = Array.from(i);
                    l == null || l(!s, t.map(e => C(e)), e.map(e => C(e))), W(t, `all`), j(null)
                },
                d, x;
            if (m !== `radio`) {
                let e;
                if (te) {
                    let t = {
                        getPopupContainer: O,
                        items: te.map((e, t) => {
                            let {
                                key: n,
                                text: r,
                                onSelect: i
                            } = e;
                            return {
                                key: n ?? t,
                                onClick: () => {
                                    i == null || i(a)
                                },
                                label: r
                            }
                        })
                    };
                    e = Q.createElement(`div`, {
                        className: `${b}-selection-extra`
                    }, Q.createElement(Oe, {
                        menu: t,
                        getPopupContainer: O
                    }, Q.createElement(`span`, null, Q.createElement(Ue, null))))
                }
                let t = L.map((e, t) => {
                        let n = w(e, t),
                            r = R.get(n) || {};
                        return Object.assign({
                            checked: i.has(n)
                        }, r)
                    }).filter(({
                        disabled: e
                    }) => e),
                    n = !!t.length && t.length === L.length,
                    r = n && t.every(({
                        checked: e
                    }) => e),
                    l = n && t.some(({
                        checked: e
                    }) => e),
                    f = (o == null ? void 0 : o()) || {},
                    {
                        onChange: p,
                        disabled: m
                    } = f;
                x = Q.createElement(Je, Object.assign({
                    "aria-label": e ? `Custom selection` : `Select all`
                }, f, {
                    checked: n ? r : !!L.length && s,
                    indeterminate: n ? !r && l : !s && c,
                    onChange: e => {
                        u(), p == null || p(e)
                    },
                    disabled: m ?? (L.length === 0 || n),
                    skipGroup: !0
                })), d = !v && Q.createElement(`div`, {
                    className: `${b}-selection`
                }, x, e)
            }
            let S;
            S = m === `radio` ? (e, t, n) => {
                let r = w(t, n),
                    a = i.has(r),
                    o = R.get(r);
                return {
                    node: Q.createElement(Ge, Object.assign({}, o, {
                        checked: a,
                        onClick: e => {
                            var t;
                            e.stopPropagation(), (t = o == null ? void 0 : o.onClick) == null || t.call(o, e)
                        },
                        onChange: e => {
                            var t;
                            i.has(r) || G(r, !0, [r], e.nativeEvent), (t = o == null ? void 0 : o.onChange) == null || t.call(o, e)
                        }
                    })),
                    checked: a
                }
            } : (e, t, n) => {
                let r = w(t, n),
                    o = i.has(r),
                    s = U.has(r),
                    c = R.get(r),
                    l;
                return l = T === `nest` ? s : (c == null ? void 0 : c.indeterminate) ?? s, {
                    node: Q.createElement(Je, Object.assign({}, c, {
                        indeterminate: l,
                        checked: o,
                        skipGroup: !0,
                        onClick: e => {
                            var t;
                            e.stopPropagation(), (t = c == null ? void 0 : c.onClick) == null || t.call(c, e)
                        },
                        onChange: e => {
                            var t;
                            let {
                                nativeEvent: n
                            } = e, {
                                shiftKey: s
                            } = n, l = a.findIndex(e => e === r), u = B.some(e => a.includes(e));
                            if (s && y && u) {
                                let e = A(l, a, i),
                                    t = Array.from(i);
                                f == null || f(!o, t.map(e => C(e)), e.map(e => C(e))), W(t, `multiple`)
                            } else {
                                let e = B;
                                if (y) {
                                    let t = o ? _i(e, r) : vi(e, r);
                                    G(r, !o, t, n)
                                } else {
                                    let {
                                        checkedKeys: t,
                                        halfCheckedKeys: i
                                    } = vt([].concat(F(e), [r]), !0, ee, z), a = t;
                                    if (o) {
                                        let e = new Set(t);
                                        e.delete(r), a = vt(Array.from(e), {
                                            checked: !1,
                                            halfCheckedKeys: i
                                        }, ee, z).checkedKeys
                                    }
                                    G(r, !o, a, n)
                                }
                            }
                            j(o ? null : l), (t = c == null ? void 0 : c.onChange) == null || t.call(c, e)
                        }
                    })),
                    checked: o
                }
            };
            let E = (e, t, n) => {
                let {
                    node: r,
                    checked: i
                } = S(e, t, n);
                return _ ? _(i, t, n, r) : r
            };
            if (!r.includes(Oi)) {
                if (r.findIndex(e => {
                        var t;
                        return ((t = e.RC_TABLE_INTERNAL_COL_DEFINE) == null ? void 0 : t.columnType) === `EXPAND_COLUMN`
                    }) === 0) {
                    let [e, ...t] = r;
                    r = [e, Oi].concat(F(t))
                } else r = [Oi].concat(F(r))
            }
            let D = r.indexOf(Oi);
            r = r.filter((e, t) => e !== Oi || t === D);
            let k = r[D - 1],
                M = r[D + 1],
                N = g;
            N === void 0 && ((M == null ? void 0 : M.fixed) === void 0 ? (k == null ? void 0 : k.fixed) !== void 0 && (N = k.fixed) : N = M.fixed), N && k && ((n = k.RC_TABLE_INTERNAL_COL_DEFINE) == null ? void 0 : n.columnType) === `EXPAND_COLUMN` && k.fixed === void 0 && (k.fixed = N);
            let P = (0, $.default)(`${b}-selection-col`, {
                    [`${b}-selection-col-with-dropdown`]: h && m === `checkbox`
                }),
                I = {
                    fixed: N,
                    width: p,
                    className: `${b}-selection-column`,
                    title: t != null && t.columnTitle ? typeof t.columnTitle == `function` ? t.columnTitle(x) : t.columnTitle : d,
                    render: E,
                    onCell: t.onCell,
                    align: t.align,
                    [dr]: {
                        className: P
                    }
                };
            return r.map(e => e === Oi ? I : e)
        }, [w, L, t, B, H, U, p, te, T, R, f, G, z]), H]
    };

function Fi(e, t) {
    return e._antProxy = e._antProxy || {}, Object.keys(t).forEach(n => {
        if (!(n in e._antProxy)) {
            let r = e[n];
            e._antProxy[n] = r, e[n] = t[n]
        }
    }), e
}

function Ii(e, t) {
    return (0, Q.useImperativeHandle)(e, () => {
        let e = t(),
            {
                nativeElement: n
            } = e;
        return typeof Proxy < `u` ? new Proxy(n, {
            get(t, n) {
                return e[n] ? e[n] : Reflect.get(t, n)
            }
        }) : Fi(n, e)
    })
}

function Li(e) {
    return t => {
        let {
            prefixCls: n,
            onExpand: r,
            record: i,
            expanded: a,
            expandable: o
        } = t, s = `${n}-row-expand-icon`;
        return Q.createElement(`button`, {
            type: `button`,
            onClick: e => {
                r(i, e), e.stopPropagation()
            },
            className: (0, $.default)(s, {
                [`${s}-spaced`]: !o,
                [`${s}-expanded`]: o && a,
                [`${s}-collapsed`]: o && !a
            }),
            "aria-label": a ? e.collapse : e.expand,
            "aria-expanded": a
        })
    }
}

function Ri(e) {
    return (t, n) => {
        let r = t.querySelector(`.${e}-container`),
            i = n;
        if (r) {
            let e = getComputedStyle(r),
                t = parseInt(e.borderLeftWidth, 10),
                a = parseInt(e.borderRightWidth, 10);
            i = n - t - a
        }
        return i
    }
}
var zi = (e, t) => `key` in e && e.key !== void 0 && e.key !== null ? e.key : e.dataIndex ? Array.isArray(e.dataIndex) ? e.dataIndex.join(`.`) : e.dataIndex : t;

function Bi(e, t) {
    return t ? `${t}-${e}` : `${e}`
}
var Vi = (e, t) => typeof e == `function` ? e(t) : e,
    Hi = (e, t) => {
        let n = Vi(e, t);
        return Object.prototype.toString.call(n) === `[object Object]` ? `` : n
    };

function Ui(e) {
    let t = Q.useRef(e),
        n = We();
    return [() => t.current, e => {
        t.current = e, n()
    }]
}
var Wi = function(e) {
    var t = e.dropPosition,
        n = e.dropLevelOffset,
        r = e.indent,
        i = {
            pointerEvents: `none`,
            position: `absolute`,
            right: 0,
            backgroundColor: `red`,
            height: 2
        };
    switch (t) {
        case -1:
            i.top = 0, i.left = -n * r;
            break;
        case 1:
            i.bottom = 0, i.left = -n * r;
            break;
        case 0:
            i.bottom = 0, i.left = r
    }
    return Q.createElement(`div`, {
        style: i
    })
};

function Gi(e) {
    if (e == null) throw TypeError(`Cannot destructure ` + e)
}
G();

function Ki(e, t) {
    var n = Q.useState(!1),
        r = R(n, 2),
        i = r[0],
        a = r[1];
    v(function() {
        if (i) return e(),
            function() {
                t()
            }
    }, [i]), v(function() {
        return a(!0),
            function() {
                a(!1)
            }
    }, [])
}
r(), G(), B();
var qi = [`className`, `style`, `motion`, `motionNodes`, `motionType`, `onMotionStart`, `onMotionEnd`, `active`, `treeNodeRequiredProps`],
    Ji = Q.forwardRef(function(e, t) {
        var n = e.className,
            r = e.style,
            i = e.motion,
            a = e.motionNodes,
            s = e.motionType,
            c = e.onMotionStart,
            l = e.onMotionEnd,
            u = e.active,
            d = e.treeNodeRequiredProps,
            f = U(e, qi),
            p = Q.useState(!0),
            m = R(p, 2),
            h = m[0],
            g = m[1],
            _ = Q.useContext(li).prefixCls,
            y = a && s !== `hide`;
        v(function() {
            a && y !== h && g(y)
        }, [a]);
        var b = function() {
                a && c()
            },
            x = Q.useRef(!1),
            S = function() {
                a && !x.current && (x.current = !0, l())
            };
        return Ki(b, S), a ? Q.createElement(J, o({
            ref: t,
            visible: h
        }, i, {
            motionAppear: s === `show`,
            onVisibleChanged: function(e) {
                y === e && S()
            }
        }), function(e, t) {
            var n = e.className,
                r = e.style;
            return Q.createElement(`div`, {
                ref: t,
                className: (0, $.default)(`${_}-treenode-motion`, n),
                style: r
            }, a.map(function(e) {
                var t = Object.assign({}, (Gi(e.data), e.data)),
                    n = e.title,
                    r = e.key,
                    i = e.isStart,
                    a = e.isEnd;
                delete t.children;
                var s = ft(r, d);
                return Q.createElement(gi, o({}, t, s, {
                    title: n,
                    active: u,
                    data: e.data,
                    key: r,
                    isStart: i,
                    isEnd: a
                }))
            }))
        }) : Q.createElement(gi, o({
            domRef: t,
            className: n,
            style: r
        }, f, {
            active: u
        }))
    });

function Yi() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
        n = e.length,
        r = t.length;
    if (Math.abs(n - r) !== 1) return {
        add: !1,
        key: null
    };

    function i(e, t) {
        var n = new Map;
        e.forEach(function(e) {
            n.set(e, !0)
        });
        var r = t.filter(function(e) {
            return !n.has(e)
        });
        return r.length === 1 ? r[0] : null
    }
    return n < r ? {
        add: !0,
        key: i(e, t)
    } : {
        add: !1,
        key: i(t, e)
    }
}

function Xi(e, t, n) {
    var r = e[e.findIndex(function(e) {
            return e.key === n
        }) + 1],
        i = t.findIndex(function(e) {
            return e.key === n
        });
    if (r) {
        var a = t.findIndex(function(e) {
            return e.key === r.key
        });
        return t.slice(i + 1, a)
    }
    return t.slice(i + 1)
}
r(), G(), B();
var Zi = `prefixCls.data.selectable.checkable.expandedKeys.selectedKeys.checkedKeys.loadedKeys.loadingKeys.halfCheckedKeys.keyEntities.disabled.dragging.dragOverNodeKey.dropPosition.motion.height.itemHeight.virtual.scrollWidth.focusable.activeItem.focused.tabIndex.onKeyDown.onFocus.onBlur.onActiveChange.onListChangeStart.onListChangeEnd`.split(`.`),
    Qi = {
        width: 0,
        height: 0,
        display: `flex`,
        overflow: `hidden`,
        opacity: 0,
        border: 0,
        padding: 0,
        margin: 0
    },
    $i = function() {},
    ea = `RC_TREE_MOTION_${Math.random()}`,
    ta = {
        key: ea
    },
    na = {
        key: ea,
        level: 0,
        index: 0,
        pos: `0`,
        node: ta,
        nodes: [ta]
    },
    ra = {
        parent: null,
        children: [],
        pos: na.pos,
        data: ta,
        title: null,
        key: ea,
        isStart: [],
        isEnd: []
    };

function ia(e, t, n, r) {
    return t === !1 || !n ? e : e.slice(0, Math.ceil(n / r) + 1)
}

function aa(e) {
    var t = e.key,
        n = e.pos;
    return ot(t, n)
}

function oa(e) {
    for (var t = String(e.data.key), n = e; n.parent;) n = n.parent, t = `${n.data.key} > ${t}`;
    return t
}
var sa = Q.forwardRef(function(e, t) {
    var n = e.prefixCls,
        r = e.data;
    e.selectable, e.checkable;
    var i = e.expandedKeys,
        a = e.selectedKeys,
        s = e.checkedKeys,
        c = e.loadedKeys,
        l = e.loadingKeys,
        u = e.halfCheckedKeys,
        d = e.keyEntities,
        f = e.disabled,
        p = e.dragging,
        m = e.dragOverNodeKey,
        h = e.dropPosition,
        g = e.motion,
        _ = e.height,
        y = e.itemHeight,
        b = e.virtual,
        x = e.scrollWidth,
        S = e.focusable,
        C = e.activeItem,
        w = e.focused,
        T = e.tabIndex,
        E = e.onKeyDown,
        D = e.onFocus,
        O = e.onBlur,
        k = e.onActiveChange,
        A = e.onListChangeStart,
        j = e.onListChangeEnd,
        M = U(e, Zi),
        N = Q.useRef(null),
        P = Q.useRef(null);
    Q.useImperativeHandle(t, function() {
        return {
            scrollTo: function(e) {
                N.current.scrollTo(e)
            },
            getIndentWidth: function() {
                return P.current.offsetWidth
            }
        }
    });
    var F = Q.useState(i),
        I = R(F, 2),
        L = I[0],
        ee = I[1],
        z = Q.useState(r),
        B = R(z, 2),
        V = B[0],
        H = B[1],
        W = Q.useState(r),
        G = R(W, 2),
        te = G[0],
        K = G[1],
        ne = Q.useState([]),
        q = R(ne, 2),
        re = q[0],
        ie = q[1],
        J = Q.useState(null),
        ae = R(J, 2),
        oe = ae[0],
        se = ae[1],
        Y = Q.useRef(r);
    Y.current = r;

    function ce() {
        var e = Y.current;
        H(e), K(e), ie([]), se(null), j()
    }
    v(function() {
        ee(i);
        var e = Yi(L, i);
        if (e.key !== null) {
            if (e.add) {
                var t = V.findIndex(function(t) {
                        return t.key === e.key
                    }),
                    n = ia(Xi(V, r, e.key), b, _, y),
                    a = V.slice();
                a.splice(t + 1, 0, ra), K(a), ie(n), se(`show`)
            } else {
                var o = r.findIndex(function(t) {
                        return t.key === e.key
                    }),
                    s = ia(Xi(r, V, e.key), b, _, y),
                    c = r.slice();
                c.splice(o + 1, 0, ra), K(c), ie(s), se(`hide`)
            }
        } else V !== r && (H(r), K(r))
    }, [i, r]), Q.useEffect(function() {
        p || ce()
    }, [p]);
    var le = g ? te : r,
        ue = {
            expandedKeys: i,
            selectedKeys: a,
            loadedKeys: c,
            loadingKeys: l,
            checkedKeys: s,
            halfCheckedKeys: u,
            dragOverNodeKey: m,
            dropPosition: h,
            keyEntities: d
        };
    return Q.createElement(Q.Fragment, null, w && C && Q.createElement(`span`, {
        style: Qi,
        "aria-live": `assertive`
    }, oa(C)), Q.createElement(`div`, null, Q.createElement(`input`, {
        style: Qi,
        disabled: S === !1 || f,
        tabIndex: S === !1 ? null : T,
        onKeyDown: E,
        onFocus: D,
        onBlur: O,
        value: ``,
        onChange: $i,
        "aria-label": `for screen reader`
    })), Q.createElement(`div`, {
        className: `${n}-treenode`,
        "aria-hidden": !0,
        style: {
            position: `absolute`,
            pointerEvents: `none`,
            visibility: `hidden`,
            height: 0,
            overflow: `hidden`,
            border: 0,
            padding: 0
        }
    }, Q.createElement(`div`, {
        className: `${n}-indent`
    }, Q.createElement(`div`, {
        ref: P,
        className: `${n}-indent-unit`
    }))), Q.createElement(Ne, o({}, M, {
        data: le,
        itemKey: aa,
        height: _,
        fullHeight: !1,
        virtual: b,
        itemHeight: y,
        scrollWidth: x,
        prefixCls: `${n}-list`,
        ref: N,
        role: `tree`,
        onVisibleChange: function(e) {
            e.every(function(e) {
                return aa(e) !== ea
            }) && ce()
        }
    }), function(e) {
        var t = e.pos,
            n = Object.assign({}, (Gi(e.data), e.data)),
            r = e.title,
            i = e.key,
            a = e.isStart,
            s = e.isEnd,
            c = ot(i, t);
        delete n.key, delete n.children;
        var l = ft(c, ue);
        return Q.createElement(Ji, o({}, n, l, {
            title: r,
            active: !!C && i === C.key,
            pos: t,
            data: e.data,
            isStart: a,
            isEnd: s,
            motion: g,
            motionNodes: i === ea ? re : null,
            motionType: oe,
            onMotionStart: A,
            onMotionEnd: ce,
            treeNodeRequiredProps: ue,
            onMouseMove: function() {
                k(null)
            }
        }))
    }))
});
r(), g(), P(), y();
var ca = 10,
    la = function(e) {
        u(n, e);
        var t = ne(n);

        function n() {
            var e;
            p(this, n);
            var r = [...arguments];
            return e = t.call.apply(t, [this].concat(r)), _(s(e), `destroyed`, !1), _(s(e), `delayedDragEnterLogic`, void 0), _(s(e), `loadingRetryTimes`, {}), _(s(e), `state`, {
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
                fieldNames: st()
            }), _(s(e), `dragStartMousePosition`, null), _(s(e), `dragNodeProps`, null), _(s(e), `currentMouseOverDroppableNodeKey`, null), _(s(e), `listRef`, Q.createRef()), _(s(e), `onNodeDragStart`, function(t, n) {
                var r = e.state,
                    i = r.expandedKeys,
                    a = r.keyEntities,
                    o = e.props.onDragStart,
                    s = n.eventKey;
                e.dragNodeProps = n, e.dragStartMousePosition = {
                    x: t.clientX,
                    y: t.clientY
                };
                var c = _i(i, s);
                e.setState({
                    draggingNodeKey: s,
                    dragChildrenKeys: bi(s, a),
                    indent: e.listRef.current.getIndentWidth()
                }), e.setExpandedKeys(c), window.addEventListener(`dragend`, e.onWindowDragEnd), o == null || o({
                    event: t,
                    node: pt(n)
                })
            }), _(s(e), `onNodeDragEnter`, function(t, n) {
                var r = e.state,
                    i = r.expandedKeys,
                    a = r.keyEntities,
                    o = r.dragChildrenKeys,
                    s = r.flattenNodes,
                    c = r.indent,
                    l = e.props,
                    u = l.onDragEnter,
                    d = l.onExpand,
                    f = l.allowDrop,
                    p = l.direction,
                    m = n.pos,
                    h = n.eventKey;
                if (e.currentMouseOverDroppableNodeKey !== h && (e.currentMouseOverDroppableNodeKey = h), !e.dragNodeProps) e.resetDragState();
                else {
                    var g = Ci(t, e.dragNodeProps, n, c, e.dragStartMousePosition, f, s, a, i, p),
                        _ = g.dropPosition,
                        v = g.dropLevelOffset,
                        y = g.dropTargetKey,
                        b = g.dropContainerKey,
                        x = g.dropTargetPos,
                        S = g.dropAllowed,
                        C = g.dragOverNodeKey;
                    o.includes(y) || !S ? e.resetDragState() : (e.delayedDragEnterLogic || (e.delayedDragEnterLogic = {}), Object.keys(e.delayedDragEnterLogic).forEach(function(t) {
                        clearTimeout(e.delayedDragEnterLogic[t])
                    }), e.dragNodeProps.eventKey !== n.eventKey && (t.persist(), e.delayedDragEnterLogic[m] = window.setTimeout(function() {
                        if (e.state.draggingNodeKey !== null) {
                            var r = F(i),
                                o = nt(a, n.eventKey);
                            o && (o.children || []).length && (r = vi(i, n.eventKey)), e.props.hasOwnProperty(`expandedKeys`) || e.setExpandedKeys(r), d == null || d(r, {
                                node: pt(n),
                                expanded: !0,
                                nativeEvent: t.nativeEvent
                            })
                        }
                    }, 800)), e.dragNodeProps.eventKey === y && v === 0 ? e.resetDragState() : (e.setState({
                        dragOverNodeKey: C,
                        dropPosition: _,
                        dropLevelOffset: v,
                        dropTargetKey: y,
                        dropContainerKey: b,
                        dropTargetPos: x,
                        dropAllowed: S
                    }), u == null || u({
                        event: t,
                        node: pt(n),
                        expandedKeys: i
                    })))
                }
            }), _(s(e), `onNodeDragOver`, function(t, n) {
                var r = e.state,
                    i = r.dragChildrenKeys,
                    a = r.flattenNodes,
                    o = r.keyEntities,
                    s = r.expandedKeys,
                    c = r.indent,
                    l = e.props,
                    u = l.onDragOver,
                    d = l.allowDrop,
                    f = l.direction;
                if (e.dragNodeProps) {
                    var p = Ci(t, e.dragNodeProps, n, c, e.dragStartMousePosition, d, a, o, s, f),
                        m = p.dropPosition,
                        h = p.dropLevelOffset,
                        g = p.dropTargetKey,
                        _ = p.dropContainerKey,
                        v = p.dropTargetPos,
                        y = p.dropAllowed,
                        b = p.dragOverNodeKey;
                    !i.includes(g) && y && (e.dragNodeProps.eventKey === g && h === 0 ? (e.state.dropPosition !== null || e.state.dropLevelOffset !== null || e.state.dropTargetKey !== null || e.state.dropContainerKey !== null || e.state.dropTargetPos !== null || e.state.dropAllowed !== !1 || e.state.dragOverNodeKey !== null) && e.resetDragState() : (m !== e.state.dropPosition || h !== e.state.dropLevelOffset || g !== e.state.dropTargetKey || _ !== e.state.dropContainerKey || v !== e.state.dropTargetPos || y !== e.state.dropAllowed || b !== e.state.dragOverNodeKey) && e.setState({
                        dropPosition: m,
                        dropLevelOffset: h,
                        dropTargetKey: g,
                        dropContainerKey: _,
                        dropTargetPos: v,
                        dropAllowed: y,
                        dragOverNodeKey: b
                    }), u == null || u({
                        event: t,
                        node: pt(n)
                    }))
                }
            }), _(s(e), `onNodeDragLeave`, function(t, n) {
                e.currentMouseOverDroppableNodeKey === n.eventKey && !t.currentTarget.contains(t.relatedTarget) && (e.resetDragState(), e.currentMouseOverDroppableNodeKey = null);
                var r = e.props.onDragLeave;
                r == null || r({
                    event: t,
                    node: pt(n)
                })
            }), _(s(e), `onWindowDragEnd`, function(t) {
                e.onNodeDragEnd(t, null, !0), window.removeEventListener(`dragend`, e.onWindowDragEnd)
            }), _(s(e), `onNodeDragEnd`, function(t, n) {
                var r = e.props.onDragEnd;
                e.setState({
                    dragOverNodeKey: null
                }), e.cleanDragState(), r == null || r({
                    event: t,
                    node: pt(n)
                }), e.dragNodeProps = null, window.removeEventListener(`dragend`, e.onWindowDragEnd)
            }), _(s(e), `onNodeDrop`, function(t, n) {
                var r, i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2],
                    a = e.state,
                    o = a.dragChildrenKeys,
                    s = a.dropPosition,
                    c = a.dropTargetKey,
                    l = a.dropTargetPos;
                if (a.dropAllowed) {
                    var u = e.props.onDrop;
                    if (e.setState({
                            dragOverNodeKey: null
                        }), e.cleanDragState(), c !== null) {
                        var d = m(m({}, ft(c, e.getTreeNodeRequiredProps())), {}, {
                                active: ((r = e.getActiveItem()) == null ? void 0 : r.key) === c,
                                data: nt(e.state.keyEntities, c).node
                            }),
                            f = o.includes(c);
                        q(!f, `Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.`);
                        var p = yi(l),
                            h = {
                                event: t,
                                node: pt(d),
                                dragNode: e.dragNodeProps ? pt(e.dragNodeProps) : null,
                                dragNodesKeys: [e.dragNodeProps.eventKey].concat(o),
                                dropToGap: s !== 0,
                                dropPosition: s + Number(p[p.length - 1])
                            };
                        i || u == null || u(h), e.dragNodeProps = null
                    }
                }
            }), _(s(e), `cleanDragState`, function() {
                e.state.draggingNodeKey !== null && e.setState({
                    draggingNodeKey: null,
                    dropPosition: null,
                    dropContainerKey: null,
                    dropTargetKey: null,
                    dropLevelOffset: null,
                    dropAllowed: !0,
                    dragOverNodeKey: null
                }), e.dragStartMousePosition = null, e.currentMouseOverDroppableNodeKey = null
            }), _(s(e), `triggerExpandActionExpand`, function(t, n) {
                var r = e.state,
                    i = r.expandedKeys,
                    a = r.flattenNodes,
                    o = n.expanded,
                    s = n.key;
                if (!(n.isLeaf || t.shiftKey || t.metaKey || t.ctrlKey)) {
                    var c = a.filter(function(e) {
                            return e.key === s
                        })[0],
                        l = pt(m(m({}, ft(s, e.getTreeNodeRequiredProps())), {}, {
                            data: c.data
                        }));
                    e.setExpandedKeys(o ? _i(i, s) : vi(i, s)), e.onNodeExpand(t, l)
                }
            }), _(s(e), `onNodeClick`, function(t, n) {
                var r = e.props,
                    i = r.onClick;
                r.expandAction === `click` && e.triggerExpandActionExpand(t, n), i == null || i(t, n)
            }), _(s(e), `onNodeDoubleClick`, function(t, n) {
                var r = e.props,
                    i = r.onDoubleClick;
                r.expandAction === `doubleClick` && e.triggerExpandActionExpand(t, n), i == null || i(t, n)
            }), _(s(e), `onNodeSelect`, function(t, n) {
                var r = e.state.selectedKeys,
                    i = e.state,
                    a = i.keyEntities,
                    o = i.fieldNames,
                    s = e.props,
                    c = s.onSelect,
                    l = s.multiple,
                    u = n.selected,
                    d = n[o.key],
                    f = !u;
                r = f ? l ? vi(r, d) : [d] : _i(r, d);
                var p = r.map(function(e) {
                    var t = nt(a, e);
                    return t ? t.node : null
                }).filter(Boolean);
                e.setUncontrolledState({
                    selectedKeys: r
                }), c == null || c(r, {
                    event: `select`,
                    selected: f,
                    node: n,
                    selectedNodes: p,
                    nativeEvent: t.nativeEvent
                })
            }), _(s(e), `onNodeCheck`, function(t, n, r) {
                var i = e.state,
                    a = i.keyEntities,
                    o = i.checkedKeys,
                    s = i.halfCheckedKeys,
                    c = e.props,
                    l = c.checkStrictly,
                    u = c.onCheck,
                    d = n.key,
                    f, p = {
                        event: `check`,
                        node: n,
                        checked: r,
                        nativeEvent: t.nativeEvent
                    };
                if (l) {
                    var m = r ? vi(o, d) : _i(o, d);
                    f = {
                        checked: m,
                        halfChecked: _i(s, d)
                    }, p.checkedNodes = m.map(function(e) {
                        return nt(a, e)
                    }).filter(Boolean).map(function(e) {
                        return e.node
                    }), e.setUncontrolledState({
                        checkedKeys: m
                    })
                } else {
                    var h = vt([].concat(F(o), [d]), !0, a),
                        g = h.checkedKeys,
                        _ = h.halfCheckedKeys;
                    if (!r) {
                        var v = new Set(g);
                        v.delete(d);
                        var y = vt(Array.from(v), {
                            checked: !1,
                            halfCheckedKeys: _
                        }, a);
                        g = y.checkedKeys, _ = y.halfCheckedKeys
                    }
                    f = g, p.checkedNodes = [], p.checkedNodesPositions = [], p.halfCheckedKeys = _, g.forEach(function(e) {
                        var t = nt(a, e);
                        if (t) {
                            var n = t.node,
                                r = t.pos;
                            p.checkedNodes.push(n), p.checkedNodesPositions.push({
                                node: n,
                                pos: r
                            })
                        }
                    }), e.setUncontrolledState({
                        checkedKeys: g
                    }, !1, {
                        halfCheckedKeys: _
                    })
                }
                u == null || u(f, p)
            }), _(s(e), `onNodeLoad`, function(t) {
                var n, r = t.key,
                    i = e.state.keyEntities,
                    a = nt(i, r);
                if (!(a != null && (n = a.children) != null && n.length)) {
                    var o = new Promise(function(n, i) {
                        e.setState(function(a) {
                            var o = a.loadedKeys,
                                s = o === void 0 ? [] : o,
                                c = a.loadingKeys,
                                l = c === void 0 ? [] : c,
                                u = e.props,
                                d = u.loadData,
                                f = u.onLoad;
                            return !d || s.includes(r) || l.includes(r) ? null : (d(t).then(function() {
                                var i = e.state.loadedKeys,
                                    a = vi(i, r);
                                f == null || f(a, {
                                    event: `load`,
                                    node: t
                                }), e.setUncontrolledState({
                                    loadedKeys: a
                                }), e.setState(function(e) {
                                    return {
                                        loadingKeys: _i(e.loadingKeys, r)
                                    }
                                }), n()
                            }).catch(function(t) {
                                if (e.setState(function(e) {
                                        return {
                                            loadingKeys: _i(e.loadingKeys, r)
                                        }
                                    }), e.loadingRetryTimes[r] = (e.loadingRetryTimes[r] || 0) + 1, e.loadingRetryTimes[r] >= ca) {
                                    var a = e.state.loadedKeys;
                                    q(!1, "Retry for `loadData` many times but still failed. No more retry."), e.setUncontrolledState({
                                        loadedKeys: vi(a, r)
                                    }), n()
                                }
                                i(t)
                            }), {
                                loadingKeys: vi(l, r)
                            })
                        })
                    });
                    return o.catch(function() {}), o
                }
            }), _(s(e), `onNodeMouseEnter`, function(t, n) {
                var r = e.props.onMouseEnter;
                r == null || r({
                    event: t,
                    node: n
                })
            }), _(s(e), `onNodeMouseLeave`, function(t, n) {
                var r = e.props.onMouseLeave;
                r == null || r({
                    event: t,
                    node: n
                })
            }), _(s(e), `onNodeContextMenu`, function(t, n) {
                var r = e.props.onRightClick;
                r && (t.preventDefault(), r({
                    event: t,
                    node: n
                }))
            }), _(s(e), `onFocus`, function() {
                var t = e.props.onFocus;
                e.setState({
                    focused: !0
                });
                var n = [...arguments];
                t == null || t.apply(void 0, n)
            }), _(s(e), `onBlur`, function() {
                var t = e.props.onBlur;
                e.setState({
                    focused: !1
                }), e.onActiveChange(null);
                var n = [...arguments];
                t == null || t.apply(void 0, n)
            }), _(s(e), `getTreeNodeRequiredProps`, function() {
                var t = e.state,
                    n = t.expandedKeys,
                    r = t.selectedKeys,
                    i = t.loadedKeys,
                    a = t.loadingKeys,
                    o = t.checkedKeys,
                    s = t.halfCheckedKeys,
                    c = t.dragOverNodeKey,
                    l = t.dropPosition,
                    u = t.keyEntities;
                return {
                    expandedKeys: n || [],
                    selectedKeys: r || [],
                    loadedKeys: i || [],
                    loadingKeys: a || [],
                    checkedKeys: o || [],
                    halfCheckedKeys: s || [],
                    dragOverNodeKey: c,
                    dropPosition: l,
                    keyEntities: u
                }
            }), _(s(e), `setExpandedKeys`, function(t) {
                var n = e.state,
                    r = n.treeData,
                    i = n.fieldNames,
                    a = lt(r, t, i);
                e.setUncontrolledState({
                    expandedKeys: t,
                    flattenNodes: a
                }, !0)
            }), _(s(e), `onNodeExpand`, function(t, n) {
                var r = e.state.expandedKeys,
                    i = e.state,
                    a = i.listChanging,
                    o = i.fieldNames,
                    s = e.props,
                    c = s.onExpand,
                    l = s.loadData,
                    u = n.expanded,
                    d = n[o.key];
                if (!a) {
                    var f = r.includes(d),
                        p = !u;
                    if (q(u && f || !u && !f, `Expand state not sync with index check`), r = p ? vi(r, d) : _i(r, d), e.setExpandedKeys(r), c == null || c(r, {
                            node: n,
                            expanded: p,
                            nativeEvent: t.nativeEvent
                        }), p && l) {
                        var m = e.onNodeLoad(n);
                        m && m.then(function() {
                            var t = lt(e.state.treeData, r, o);
                            e.setUncontrolledState({
                                flattenNodes: t
                            })
                        }).catch(function() {
                            var t = e.state.expandedKeys,
                                n = _i(t, d);
                            e.setExpandedKeys(n)
                        })
                    }
                }
            }), _(s(e), `onListChangeStart`, function() {
                e.setUncontrolledState({
                    listChanging: !0
                })
            }), _(s(e), `onListChangeEnd`, function() {
                setTimeout(function() {
                    e.setUncontrolledState({
                        listChanging: !1
                    })
                })
            }), _(s(e), `onActiveChange`, function(t) {
                var n = e.state.activeKey,
                    r = e.props,
                    i = r.onActiveChange,
                    a = r.itemScrollOffset,
                    o = a === void 0 ? 0 : a;
                n !== t && (e.setState({
                    activeKey: t
                }), t !== null && e.scrollTo({
                    key: t,
                    offset: o
                }), i == null || i(t))
            }), _(s(e), `getActiveItem`, function() {
                var t = e.state,
                    n = t.activeKey,
                    r = t.flattenNodes;
                return n === null ? null : r.find(function(e) {
                    return e.key === n
                }) || null
            }), _(s(e), `offsetActiveKey`, function(t) {
                var n = e.state,
                    r = n.flattenNodes,
                    i = n.activeKey,
                    a = r.findIndex(function(e) {
                        return e.key === i
                    });
                a === -1 && t < 0 && (a = r.length), a = (a + t + r.length) % r.length;
                var o = r[a];
                if (o) {
                    var s = o.key;
                    e.onActiveChange(s)
                } else e.onActiveChange(null)
            }), _(s(e), `onKeyDown`, function(t) {
                var n = e.state,
                    r = n.activeKey,
                    i = n.expandedKeys,
                    a = n.checkedKeys,
                    o = n.fieldNames,
                    s = e.props,
                    c = s.onKeyDown,
                    l = s.checkable,
                    u = s.selectable;
                switch (t.which) {
                    case pe.UP:
                        e.offsetActiveKey(-1), t.preventDefault();
                        break;
                    case pe.DOWN:
                        e.offsetActiveKey(1), t.preventDefault()
                }
                var d = e.getActiveItem();
                if (d && d.data) {
                    var f = e.getTreeNodeRequiredProps(),
                        p = d.data.isLeaf === !1 || !!(d.data[o.children] || []).length,
                        h = pt(m(m({}, ft(r, f)), {}, {
                            data: d.data,
                            active: !0
                        }));
                    switch (t.which) {
                        case pe.LEFT:
                            p && i.includes(r) ? e.onNodeExpand({}, h) : d.parent && e.onActiveChange(d.parent.key), t.preventDefault();
                            break;
                        case pe.RIGHT:
                            p && !i.includes(r) ? e.onNodeExpand({}, h) : d.children && d.children.length && e.onActiveChange(d.children[0].key), t.preventDefault();
                            break;
                        case pe.ENTER:
                        case pe.SPACE:
                            l && !h.disabled && h.checkable !== !1 && !h.disableCheckbox ? e.onNodeCheck({}, h, !a.includes(r)) : !l && u && !h.disabled && h.selectable !== !1 && e.onNodeSelect({}, h)
                    }
                }
                c == null || c(t)
            }), _(s(e), `setUncontrolledState`, function(t) {
                var n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1],
                    r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                if (!e.destroyed) {
                    var i = !1,
                        a = !0,
                        o = {};
                    Object.keys(t).forEach(function(n) {
                        e.props.hasOwnProperty(n) ? a = !1 : (i = !0, o[n] = t[n])
                    }), i && (!n || a) && e.setState(m(m({}, o), r))
                }
            }), _(s(e), `scrollTo`, function(t) {
                e.listRef.current.scrollTo(t)
            }), e
        }
        return te(n, [{
            key: `componentDidMount`,
            value: function() {
                this.destroyed = !1, this.onUpdated()
            }
        }, {
            key: `componentDidUpdate`,
            value: function() {
                this.onUpdated()
            }
        }, {
            key: `onUpdated`,
            value: function() {
                var e = this.props,
                    t = e.activeKey,
                    n = e.itemScrollOffset,
                    r = n === void 0 ? 0 : n;
                t !== void 0 && t !== this.state.activeKey && (this.setState({
                    activeKey: t
                }), t !== null && this.scrollTo({
                    key: t,
                    offset: r
                }))
            }
        }, {
            key: `componentWillUnmount`,
            value: function() {
                window.removeEventListener(`dragend`, this.onWindowDragEnd), this.destroyed = !0
            }
        }, {
            key: `resetDragState`,
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
            key: `render`,
            value: function() {
                var e = this.state,
                    t = e.focused,
                    n = e.flattenNodes,
                    r = e.keyEntities,
                    i = e.draggingNodeKey,
                    a = e.activeKey,
                    s = e.dropLevelOffset,
                    c = e.dropContainerKey,
                    l = e.dropTargetKey,
                    u = e.dropPosition,
                    d = e.dragOverNodeKey,
                    f = e.indent,
                    p = this.props,
                    m = p.prefixCls,
                    h = p.className,
                    g = p.style,
                    v = p.showLine,
                    y = p.focusable,
                    b = p.tabIndex,
                    x = b === void 0 ? 0 : b,
                    S = p.selectable,
                    C = p.showIcon,
                    T = p.icon,
                    E = p.switcherIcon,
                    D = p.draggable,
                    O = p.checkable,
                    k = p.checkStrictly,
                    A = p.disabled,
                    j = p.motion,
                    M = p.loadData,
                    N = p.filterTreeNode,
                    P = p.height,
                    F = p.itemHeight,
                    I = p.scrollWidth,
                    L = p.virtual,
                    ee = p.titleRender,
                    R = p.dropIndicatorRender,
                    z = p.onContextMenu,
                    B = p.onScroll,
                    V = p.direction,
                    H = p.rootClassName,
                    U = p.rootStyle,
                    W = xe(this.props, {
                        aria: !0,
                        data: !0
                    }),
                    G;
                D && (G = w(D) === `object` ? D : typeof D == `function` ? {
                    nodeDraggable: D
                } : {});
                var te = {
                    prefixCls: m,
                    selectable: S,
                    showIcon: C,
                    icon: T,
                    switcherIcon: E,
                    draggable: G,
                    draggingNodeKey: i,
                    checkable: O,
                    checkStrictly: k,
                    disabled: A,
                    keyEntities: r,
                    dropLevelOffset: s,
                    dropContainerKey: c,
                    dropTargetKey: l,
                    dropPosition: u,
                    dragOverNodeKey: d,
                    indent: f,
                    direction: V,
                    dropIndicatorRender: R,
                    loadData: M,
                    filterTreeNode: N,
                    titleRender: ee,
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
                return Q.createElement(li.Provider, {
                    value: te
                }, Q.createElement(`div`, {
                    className: (0, $.default)(m, h, H, _(_(_({}, `${m}-show-line`, v), `${m}-focused`, t), `${m}-active-focused`, a !== null)),
                    style: U
                }, Q.createElement(sa, o({
                    ref: this.listRef,
                    prefixCls: m,
                    style: g,
                    data: n,
                    disabled: A,
                    selectable: S,
                    checkable: !!O,
                    motion: j,
                    dragging: i !== null,
                    height: P,
                    itemHeight: F,
                    virtual: L,
                    focusable: y,
                    focused: t,
                    tabIndex: x,
                    activeItem: this.getActiveItem(),
                    onFocus: this.onFocus,
                    onBlur: this.onBlur,
                    onKeyDown: this.onKeyDown,
                    onActiveChange: this.onActiveChange,
                    onListChangeStart: this.onListChangeStart,
                    onListChangeEnd: this.onListChangeEnd,
                    onContextMenu: z,
                    onScroll: B,
                    scrollWidth: I
                }, this.getTreeNodeRequiredProps(), W))))
            }
        }], [{
            key: `getDerivedStateFromProps`,
            value: function(e, t) {
                var n = t.prevProps,
                    r = {
                        prevProps: e
                    };

                function i(t) {
                    return !n && e.hasOwnProperty(t) || n && n[t] !== e[t]
                }
                var a, o = t.fieldNames;
                if (i(`fieldNames`) && (o = st(e.fieldNames), r.fieldNames = o), i(`treeData`) ? a = e.treeData : i(`children`) && (q(!1, "`children` of Tree is deprecated. Please use `treeData` instead."), a = ct(e.children)), a) {
                    r.treeData = a;
                    var s = dt(a, {
                        fieldNames: o
                    });
                    r.keyEntities = m(_({}, ea, na), s.keyEntities)
                }
                var c = r.keyEntities || t.keyEntities;
                if (i(`expandedKeys`) || n && i(`autoExpandParent`)) r.expandedKeys = e.autoExpandParent || !n && e.defaultExpandParent ? Ei(e.expandedKeys, c) : e.expandedKeys;
                else if (!n && e.defaultExpandAll) {
                    var l = m({}, c);
                    delete l[ea];
                    var u = [];
                    Object.keys(l).forEach(function(e) {
                        var t = l[e];
                        t.children && t.children.length && u.push(t.key)
                    }), r.expandedKeys = u
                } else !n && e.defaultExpandedKeys && (r.expandedKeys = e.autoExpandParent || e.defaultExpandParent ? Ei(e.defaultExpandedKeys, c) : e.defaultExpandedKeys);
                if (r.expandedKeys || delete r.expandedKeys, (a || r.expandedKeys) && (r.flattenNodes = lt(a || t.treeData, r.expandedKeys || t.expandedKeys, o)), e.selectable && (i(`selectedKeys`) ? r.selectedKeys = wi(e.selectedKeys, e) : !n && e.defaultSelectedKeys && (r.selectedKeys = wi(e.defaultSelectedKeys, e))), e.checkable) {
                    var d;
                    if (i(`checkedKeys`) ? d = Ti(e.checkedKeys) || {} : !n && e.defaultCheckedKeys ? d = Ti(e.defaultCheckedKeys) || {} : a && (d = Ti(e.checkedKeys) || {
                            checkedKeys: t.checkedKeys,
                            halfCheckedKeys: t.halfCheckedKeys
                        }), d) {
                        var f = d,
                            p = f.checkedKeys,
                            h = p === void 0 ? [] : p,
                            g = f.halfCheckedKeys,
                            v = g === void 0 ? [] : g;
                        if (!e.checkStrictly) {
                            var y = vt(h, !0, c);
                            h = y.checkedKeys, v = y.halfCheckedKeys
                        }
                        r.checkedKeys = h, r.halfCheckedKeys = v
                    }
                }
                return i(`loadedKeys`) && (r.loadedKeys = e.loadedKeys), r
            }
        }]), n
    }(Q.Component);
_(la, `defaultProps`, {
    prefixCls: `rc-tree`,
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
    dropIndicatorRender: Wi,
    allowDrop: function() {
        return !0
    },
    expandAction: !1
}), _(la, `TreeNode`, gi);
var ua = la,
    da = ({
        treeCls: e,
        treeNodeCls: t,
        directoryNodeSelectedBg: n,
        directoryNodeSelectedColor: r,
        motionDurationMid: i,
        borderRadius: a,
        controlItemBgHover: o
    }) => ({
        [`${e}${e}-directory ${t}`]: {
            [`${e}-node-content-wrapper`]: {
                position: `static`,
                [`&:has(${e}-drop-indicator)`]: {
                    position: `relative`
                },
                [`> *:not(${e}-drop-indicator)`]: {
                    position: `relative`
                },
                "&:hover": {
                    background: `transparent`
                },
                "&:before": {
                    position: `absolute`,
                    inset: 0,
                    transition: `background-color ${i}`,
                    content: `""`,
                    borderRadius: a
                },
                "&:hover:before": {
                    background: o
                }
            },
            [`${e}-switcher, ${e}-checkbox, ${e}-draggable-icon`]: {
                zIndex: 1
            },
            "&-selected": {
                background: n,
                borderRadius: a,
                [`${e}-switcher, ${e}-draggable-icon`]: {
                    color: r
                },
                [`${e}-node-content-wrapper`]: {
                    color: r,
                    background: `transparent`,
                    "&:before, &:hover:before": {
                        background: n
                    }
                }
            }
        }
    }),
    fa = new re(`ant-tree-node-fx-do-not-use`, {
        "0%": {
            opacity: 0
        },
        "100%": {
            opacity: 1
        }
    }),
    pa = (e, t) => ({
        [`.${e}-switcher-icon`]: {
            display: `inline-block`,
            fontSize: 10,
            verticalAlign: `baseline`,
            svg: {
                transition: `transform ${t.motionDurationSlow}`
            }
        }
    }),
    ma = (e, t) => ({
        [`.${e}-drop-indicator`]: {
            position: `absolute`,
            zIndex: 1,
            height: 2,
            backgroundColor: t.colorPrimary,
            borderRadius: 1,
            pointerEvents: `none`,
            "&:after": {
                position: `absolute`,
                top: -3,
                insetInlineStart: -6,
                width: 8,
                height: 8,
                backgroundColor: `transparent`,
                border: `${T(t.lineWidthBold)} solid ${t.colorPrimary}`,
                borderRadius: `50%`,
                content: `""`
            }
        }
    }),
    ha = (e, t) => {
        let {
            treeCls: n,
            treeNodeCls: r,
            treeNodePadding: i,
            titleHeight: a,
            indentSize: o,
            nodeSelectedBg: s,
            nodeHoverBg: c,
            colorTextQuaternary: l,
            controlItemBgActiveDisabled: u
        } = t;
        return {
            [n]: Object.assign(Object.assign({}, z(t)), {
                "--rc-virtual-list-scrollbar-bg": t.colorSplit,
                background: t.colorBgContainer,
                borderRadius: t.borderRadius,
                transition: `background-color ${t.motionDurationSlow}`,
                "&-rtl": {
                    direction: `rtl`
                },
                [`&${n}-rtl ${n}-switcher_close ${n}-switcher-icon svg`]: {
                    transform: `rotate(90deg)`
                },
                [`&-focused:not(:hover):not(${n}-active-focused)`]: W(t),
                [`${n}-list-holder-inner`]: {
                    alignItems: `flex-start`
                },
                [`&${n}-block-node`]: {
                    [`${n}-list-holder-inner`]: {
                        alignItems: `stretch`,
                        [`${n}-node-content-wrapper`]: {
                            flex: `auto`
                        },
                        [`${r}.dragging:after`]: {
                            position: `absolute`,
                            inset: 0,
                            border: `1px solid ${t.colorPrimary}`,
                            opacity: 0,
                            animationName: fa,
                            animationDuration: t.motionDurationSlow,
                            animationPlayState: `running`,
                            animationFillMode: `forwards`,
                            content: `""`,
                            pointerEvents: `none`,
                            borderRadius: t.borderRadius
                        }
                    }
                },
                [r]: {
                    display: `flex`,
                    alignItems: `flex-start`,
                    marginBottom: i,
                    lineHeight: T(a),
                    position: `relative`,
                    "&:before": {
                        content: `""`,
                        position: `absolute`,
                        zIndex: 1,
                        insetInlineStart: 0,
                        width: `100%`,
                        top: `100%`,
                        height: i
                    },
                    [`&-disabled ${n}-node-content-wrapper`]: {
                        color: t.colorTextDisabled,
                        cursor: `not-allowed`,
                        "&:hover": {
                            background: `transparent`
                        }
                    },
                    [`${n}-checkbox-disabled + ${n}-node-selected,&${r}-disabled${r}-selected ${n}-node-content-wrapper`]: {
                        backgroundColor: u
                    },
                    [`${n}-checkbox-disabled`]: {
                        pointerEvents: `unset`
                    },
                    [`&:not(${r}-disabled)`]: {
                        [`${n}-node-content-wrapper`]: {
                            "&:hover": {
                                color: t.nodeHoverColor
                            }
                        }
                    },
                    [`&-active ${n}-node-content-wrapper`]: {
                        background: t.controlItemBgHover
                    },
                    [`&:not(${r}-disabled).filter-node ${n}-title`]: {
                        color: t.colorPrimary,
                        fontWeight: t.fontWeightStrong
                    },
                    "&-draggable": {
                        cursor: `grab`,
                        [`${n}-draggable-icon`]: {
                            flexShrink: 0,
                            width: a,
                            textAlign: `center`,
                            visibility: `visible`,
                            color: l
                        },
                        [`&${r}-disabled ${n}-draggable-icon`]: {
                            visibility: `hidden`
                        }
                    }
                },
                [`${n}-indent`]: {
                    alignSelf: `stretch`,
                    whiteSpace: `nowrap`,
                    userSelect: `none`,
                    "&-unit": {
                        display: `inline-block`,
                        width: o
                    }
                },
                [`${n}-draggable-icon`]: {
                    visibility: `hidden`
                },
                [`${n}-switcher, ${n}-checkbox`]: {
                    marginInlineEnd: t.calc(t.calc(a).sub(t.controlInteractiveSize)).div(2).equal()
                },
                [`${n}-switcher`]: Object.assign(Object.assign({}, pa(e, t)), {
                    position: `relative`,
                    flex: `none`,
                    alignSelf: `stretch`,
                    width: a,
                    textAlign: `center`,
                    cursor: `pointer`,
                    userSelect: `none`,
                    transition: `all ${t.motionDurationSlow}`,
                    "&-noop": {
                        cursor: `unset`
                    },
                    "&:before": {
                        pointerEvents: `none`,
                        content: `""`,
                        width: a,
                        height: a,
                        position: `absolute`,
                        left: {
                            _skip_check_: !0,
                            value: 0
                        },
                        top: 0,
                        borderRadius: t.borderRadius,
                        transition: `all ${t.motionDurationSlow}`
                    },
                    [`&:not(${n}-switcher-noop):hover:before`]: {
                        backgroundColor: t.colorBgTextHover
                    },
                    [`&_close ${n}-switcher-icon svg`]: {
                        transform: `rotate(-90deg)`
                    },
                    "&-loading-icon": {
                        color: t.colorPrimary
                    },
                    "&-leaf-line": {
                        position: `relative`,
                        zIndex: 1,
                        display: `inline-block`,
                        width: `100%`,
                        height: `100%`,
                        "&:before": {
                            position: `absolute`,
                            top: 0,
                            insetInlineEnd: t.calc(a).div(2).equal(),
                            bottom: t.calc(i).mul(-1).equal(),
                            marginInlineStart: -1,
                            borderInlineEnd: `1px solid ${t.colorBorder}`,
                            content: `""`
                        },
                        "&:after": {
                            position: `absolute`,
                            width: t.calc(t.calc(a).div(2).equal()).mul(.8).equal(),
                            height: t.calc(a).div(2).equal(),
                            borderBottom: `1px solid ${t.colorBorder}`,
                            content: `""`
                        }
                    }
                }),
                [`${n}-node-content-wrapper`]: Object.assign(Object.assign({
                    position: `relative`,
                    minHeight: a,
                    paddingBlock: 0,
                    paddingInline: t.paddingXS,
                    background: `transparent`,
                    borderRadius: t.borderRadius,
                    cursor: `pointer`,
                    transition: `all ${t.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`
                }, ma(e, t)), {
                    "&:hover": {
                        backgroundColor: c
                    },
                    [`&${n}-node-selected`]: {
                        color: t.nodeSelectedColor,
                        backgroundColor: s
                    },
                    [`${n}-iconEle`]: {
                        display: `inline-block`,
                        width: a,
                        height: a,
                        textAlign: `center`,
                        verticalAlign: `top`,
                        "&:empty": {
                            display: `none`
                        }
                    }
                }),
                [`${n}-unselectable ${n}-node-content-wrapper:hover`]: {
                    backgroundColor: `transparent`
                },
                [`${r}.drop-container > [draggable]`]: {
                    boxShadow: `0 0 0 2px ${t.colorPrimary}`
                },
                "&-show-line": {
                    [`${n}-indent-unit`]: {
                        position: `relative`,
                        height: `100%`,
                        "&:before": {
                            position: `absolute`,
                            top: 0,
                            insetInlineEnd: t.calc(a).div(2).equal(),
                            bottom: t.calc(i).mul(-1).equal(),
                            borderInlineEnd: `1px solid ${t.colorBorder}`,
                            content: `""`
                        },
                        "&-end:before": {
                            display: `none`
                        }
                    },
                    [`${n}-switcher`]: {
                        background: `transparent`,
                        "&-line-icon": {
                            verticalAlign: `-0.15em`
                        }
                    }
                },
                [`${r}-leaf-last ${n}-switcher-leaf-line:before`]: {
                    top: `auto !important`,
                    bottom: `auto !important`,
                    height: `${T(t.calc(a).div(2).equal())} !important`
                }
            })
        }
    },
    ga = (e, t, n = !0) => {
        let r = `.${e}`,
            i = `${r}-treenode`,
            a = t.calc(t.paddingXS).div(2).equal(),
            o = O(t, {
                treeCls: r,
                treeNodeCls: i,
                treeNodePadding: a
            });
        return [ha(e, o), n && da(o)].filter(Boolean)
    },
    _a = e => {
        let {
            controlHeightSM: t,
            controlItemBgHover: n,
            controlItemBgActive: r
        } = e, i = t;
        return {
            titleHeight: i,
            indentSize: i,
            nodeHoverBg: n,
            nodeHoverColor: e.colorText,
            nodeSelectedBg: r,
            nodeSelectedColor: e.colorText
        }
    },
    va = H(`Tree`, (e, {
        prefixCls: t
    }) => [{
        [e.componentCls]: qe(`${t}-checkbox`, e)
    }, ga(t, e), ke(e)], e => {
        let {
            colorTextLightSolid: t,
            colorPrimary: n
        } = e;
        return Object.assign(Object.assign({}, _a(e)), {
            directoryNodeSelectedColor: t,
            directoryNodeSelectedBg: n
        })
    });

function ya(e) {
    let {
        dropPosition: t,
        dropLevelOffset: n,
        prefixCls: r,
        indent: i,
        direction: a = `ltr`
    } = e, o = a === `ltr` ? `left` : `right`, s = a === `ltr` ? `right` : `left`, c = {
        [o]: -n * i + 4,
        [s]: 0
    };
    switch (t) {
        case -1:
            c.top = -3;
            break;
        case 1:
            c.bottom = -3;
            break;
        default:
            c.bottom = -3, c[o] = i + 4
    }
    return Q.createElement(`div`, {
        style: c,
        className: `${r}-drop-indicator`
    })
}
var ba = e => {
        var t, n;
        let {
            prefixCls: r,
            switcherIcon: i,
            treeNodeProps: a,
            showLine: o,
            switcherLoadingIcon: s
        } = e, {
            isLeaf: c,
            expanded: l,
            loading: u
        } = a;
        if (u) return Q.isValidElement(s) ? s : Q.createElement(le, {
            className: `${r}-switcher-loading-icon`
        });
        let d;
        if (o && typeof o == `object` && (d = o.showLeafIcon), c) {
            if (!o) return null;
            if (typeof d != `boolean` && d) {
                let e = typeof d == `function` ? d(a) : d,
                    n = `${r}-switcher-line-custom-icon`;
                return Q.isValidElement(e) ? se(e, {
                    className: (0, $.default)((t = e.props) == null ? void 0 : t.className, n)
                }) : e
            }
            return d ? Q.createElement(tn, {
                className: `${r}-switcher-line-icon`
            }) : Q.createElement(`span`, {
                className: `${r}-switcher-leaf-line`
            })
        }
        let f = `${r}-switcher-icon`,
            p = typeof i == `function` ? i(a) : i;
        return Q.isValidElement(p) ? se(p, {
            className: (0, $.default)((n = p.props) == null ? void 0 : n.className, f)
        }) : p === void 0 ? o ? l ? Q.createElement(fn, {
            className: `${r}-switcher-line-icon`
        }) : Q.createElement(mn, {
            className: `${r}-switcher-line-icon`
        }) : Q.createElement(Yt, {
            className: f
        }) : p
    },
    xa = Q.forwardRef((e, t) => {
        var n;
        let {
            getPrefixCls: r,
            direction: i,
            virtual: a,
            tree: o
        } = Q.useContext(f), {
            prefixCls: s,
            className: c,
            showIcon: l = !1,
            showLine: u,
            switcherIcon: d,
            switcherLoadingIcon: p,
            blockNode: m = !1,
            children: h,
            checkable: g = !1,
            selectable: _ = !0,
            draggable: v,
            motion: y,
            style: b
        } = e, x = r(`tree`, s), S = r(), C = y ?? Object.assign(Object.assign({}, he(S)), {
            motionAppear: !1
        }), w = Object.assign(Object.assign({}, e), {
            checkable: g,
            selectable: _,
            showIcon: l,
            motion: C,
            blockNode: m,
            showLine: !!u,
            dropIndicatorRender: ya
        }), [T, D, O] = va(x), [, k] = E(), A = k.paddingXS / 2 + (((n = k.Tree) == null ? void 0 : n.titleHeight) || k.controlHeightSM), j = Q.useMemo(() => {
            if (!v) return !1;
            let e = {};
            switch (typeof v) {
                case `function`:
                    e.nodeDraggable = v;
                    break;
                case `object`:
                    e = Object.assign({}, v)
            }
            return e.icon !== !1 && (e.icon = e.icon || Q.createElement(un, null)), e
        }, [v]), M = e => Q.createElement(ba, {
            prefixCls: x,
            switcherIcon: d,
            switcherLoadingIcon: p,
            treeNodeProps: e,
            showLine: u
        });
        return T(Q.createElement(ua, Object.assign({
            itemHeight: A,
            ref: t,
            virtual: a
        }, w, {
            style: Object.assign(Object.assign({}, o == null ? void 0 : o.style), b),
            prefixCls: x,
            className: (0, $.default)({
                [`${x}-icon-hide`]: !l,
                [`${x}-block-node`]: m,
                [`${x}-unselectable`]: !_,
                [`${x}-rtl`]: i === `rtl`
            }, o == null ? void 0 : o.className, c, D, O),
            direction: i,
            checkable: g && Q.createElement(`span`, {
                className: `${x}-checkbox-inner`
            }),
            selectable: _,
            switcherIcon: M,
            draggable: j
        }), h))
    });
P();
var Sa = 0,
    Ca = 1,
    wa = 2;

function Ta(e, t, n) {
    let {
        key: r,
        children: i
    } = n;

    function a(e) {
        let a = e[r],
            o = e[i];
        t(a, e) !== !1 && Ta(o || [], t, n)
    }
    e.forEach(a)
}

function Ea({
    treeData: e,
    expandedKeys: t,
    startKey: n,
    endKey: r,
    fieldNames: i
}) {
    let a = [],
        o = Sa;
    if (n && n === r) return [n];
    if (!n || !r) return [];

    function s(e) {
        return e === n || e === r
    }
    return Ta(e, e => {
        if (o === wa) return !1;
        if (s(e)) {
            if (a.push(e), o === Sa) o = Ca;
            else if (o === Ca) return o = wa, !1
        } else o === Ca && a.push(e);
        return t.includes(e)
    }, st(i)), a
}

function Da(e, t, n) {
    let r = F(t),
        i = [];
    return Ta(e, (e, t) => {
        let n = r.indexOf(e);
        return n !== -1 && (i.push(t), r.splice(n, 1)), !!r.length
    }, st(n)), i
}
P();
var Oa = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == `function`)
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
};

function ka(e) {
    let {
        isLeaf: t,
        expanded: n
    } = e;
    return t ? Q.createElement(tn, null) : n ? Q.createElement(on, null) : Q.createElement(cn, null)
}

function Aa({
    treeData: e,
    children: t
}) {
    return e || ct(t)
}
var ja = Q.forwardRef((e, t) => {
        var {
            defaultExpandAll: n,
            defaultExpandParent: r,
            defaultExpandedKeys: i
        } = e, a = Oa(e, [`defaultExpandAll`, `defaultExpandParent`, `defaultExpandedKeys`]);
        let o = Q.useRef(null),
            s = Q.useRef(null),
            c = () => {
                let {
                    keyEntities: e
                } = dt(Aa(a)), t;
                return t = n ? Object.keys(e) : r ? Ei(a.expandedKeys || i || [], e) : a.expandedKeys || i || [], t
            },
            [l, u] = Q.useState(a.selectedKeys || a.defaultSelectedKeys || []),
            [d, p] = Q.useState(() => c());
        Q.useEffect(() => {
            `selectedKeys` in a && u(a.selectedKeys)
        }, [a.selectedKeys]), Q.useEffect(() => {
            `expandedKeys` in a && p(a.expandedKeys)
        }, [a.expandedKeys]);
        let m = (e, t) => {
                var n;
                return `expandedKeys` in a || p(e), (n = a.onExpand) == null ? void 0 : n.call(a, e, t)
            },
            h = (e, t) => {
                var n;
                let {
                    multiple: r,
                    fieldNames: i
                } = a, {
                    node: c,
                    nativeEvent: l
                } = t, {
                    key: f = ``
                } = c, p = Aa(a), m = Object.assign(Object.assign({}, t), {
                    selected: !0
                }), h = (l == null ? void 0 : l.ctrlKey) || (l == null ? void 0 : l.metaKey), g = l == null ? void 0 : l.shiftKey, _;
                r && h ? (_ = e, o.current = f, s.current = _, m.selectedNodes = Da(p, _, i)) : r && g ? (_ = Array.from(new Set([].concat(F(s.current || []), F(Ea({
                    treeData: p,
                    expandedKeys: d,
                    startKey: f,
                    endKey: o.current,
                    fieldNames: i
                }))))), m.selectedNodes = Da(p, _, i)) : (_ = [f], o.current = f, s.current = _, m.selectedNodes = Da(p, _, i)), (n = a.onSelect) == null || n.call(a, _, m), `selectedKeys` in a || u(_)
            },
            {
                getPrefixCls: g,
                direction: _
            } = Q.useContext(f),
            {
                prefixCls: v,
                className: y,
                showIcon: b = !0,
                expandAction: x = `click`
            } = a,
            S = Oa(a, [`prefixCls`, `className`, `showIcon`, `expandAction`]),
            C = g(`tree`, v),
            w = (0, $.default)(`${C}-directory`, {
                [`${C}-directory-rtl`]: _ === `rtl`
            }, y);
        return Q.createElement(xa, Object.assign({
            icon: ka,
            ref: t,
            blockNode: !0
        }, S, {
            showIcon: b,
            expandAction: x,
            prefixCls: C,
            className: w,
            expandedKeys: d,
            selectedKeys: l,
            onSelect: h,
            onExpand: m
        }))
    }),
    Ma = xa;
Ma.DirectoryTree = ja, Ma.TreeNode = gi;
var Na = e => {
        let {
            value: t,
            filterSearch: n,
            tablePrefixCls: r,
            locale: i,
            onChange: a
        } = e;
        return n ? Q.createElement(`div`, {
            className: `${r}-filter-dropdown-search`
        }, Q.createElement(Le, {
            prefix: Q.createElement(Ve, null),
            placeholder: i.filterSearchPlaceholder,
            onChange: a,
            value: t,
            htmlSize: 1,
            className: `${r}-filter-dropdown-search-input`
        })) : null
    },
    Pa = e => {
        let {
            keyCode: t
        } = e;
        t === pe.ENTER && e.stopPropagation()
    },
    Fa = Q.forwardRef((e, t) => Q.createElement(`div`, {
        className: e.className,
        onClick: e => e.stopPropagation(),
        onKeyDown: Pa,
        ref: t
    }, e.children));
P();

function Ia(e) {
    let t = [];
    return (e || []).forEach(({
        value: e,
        children: n
    }) => {
        t.push(e), n && (t = [].concat(F(t), F(Ia(n))))
    }), t
}

function La(e) {
    return e.some(({
        children: e
    }) => e)
}

function Ra(e, t) {
    return typeof t == `string` || typeof t == `number` ? t == null ? void 0 : t.toString().toLowerCase().includes(e.trim().toLowerCase()) : !1
}

function za({
    filters: e,
    prefixCls: t,
    filteredKeys: n,
    filterMultiple: r,
    searchValue: i,
    filterSearch: a
}) {
    return e.map((e, o) => {
        let s = String(e.value);
        if (e.children) return {
            key: s || o,
            label: e.text,
            popupClassName: `${t}-dropdown-submenu`,
            children: za({
                filters: e.children,
                prefixCls: t,
                filteredKeys: n,
                filterMultiple: r,
                searchValue: i,
                filterSearch: a
            })
        };
        let c = r ? Je : Ge,
            l = {
                key: e.value === void 0 ? o : s,
                label: Q.createElement(Q.Fragment, null, Q.createElement(c, {
                    checked: n.includes(s)
                }), Q.createElement(`span`, null, e.text))
            };
        return i.trim() ? typeof a == `function` ? a(i, e) ? l : null : Ra(i, e.text) ? l : null : l
    })
}

function Ba(e) {
    return e || []
}
var Va = e => {
    var t;
    let {
        tablePrefixCls: n,
        prefixCls: r,
        column: i,
        dropdownPrefixCls: a,
        columnKey: o,
        filterOnClose: s,
        filterMultiple: c,
        filterMode: l = `menu`,
        filterSearch: u = !1,
        filterState: d,
        triggerFilter: p,
        locale: m,
        children: h,
        getPopupContainer: g,
        rootClassName: _
    } = e, {
        filterResetToDefaultFilteredValue: v,
        defaultFilteredValue: y,
        filterDropdownProps: b = {},
        filterDropdownOpen: x,
        filterDropdownVisible: S,
        onFilterDropdownVisibleChange: C,
        onFilterDropdownOpenChange: w
    } = i, [T, E] = Q.useState(!1), D = !!(d && ((t = d.filteredKeys) != null && t.length || d.forceFiltered)), O = e => {
        var t;
        E(e), (t = b.onOpenChange) == null || t.call(b, e), w == null || w(e), C == null || C(e)
    }, k = b.open ?? x ?? S ?? T, A = d == null ? void 0 : d.filteredKeys, [j, N] = Ui(Ba(A)), P = ({
        selectedKeys: e
    }) => {
        N(e)
    }, F = (e, {
        node: t,
        checked: n
    }) => {
        P(c ? {
            selectedKeys: e
        } : {
            selectedKeys: n && t.key ? [t.key] : []
        })
    };
    Q.useEffect(() => {
        T && P({
            selectedKeys: Ba(A)
        })
    }, [A]);
    let [I, L] = Q.useState([]), ee = e => {
        L(e)
    }, [R, z] = Q.useState(``), B = e => {
        let {
            value: t
        } = e.target;
        z(t)
    };
    Q.useEffect(() => {
        T || z(``)
    }, [T]);
    let V = e => {
            let t = e != null && e.length ? e : null;
            if (t === null && (!d || !d.filteredKeys) || M(t, d == null ? void 0 : d.filteredKeys, !0)) return null;
            p({
                column: i,
                key: o,
                filteredKeys: t
            })
        },
        H = () => {
            O(!1), V(j())
        },
        U = ({
            confirm: e,
            closeDropdown: t
        } = {
            confirm: !1,
            closeDropdown: !1
        }) => {
            e && V([]), t && O(!1), z(``), N(v ? (y || []).map(e => String(e)) : [])
        },
        W = ({
            closeDropdown: e
        } = {
            closeDropdown: !0
        }) => {
            e && O(!1), V(j())
        },
        G = (e, t) => {
            t.source === `trigger` && (e && A !== void 0 && N(Ba(A)), O(e), !e && !i.filterDropdown && s && H())
        },
        te = (0, $.default)({
            [`${a}-menu-without-submenu`]: !La(i.filters || [])
        }),
        K = e => {
            if (e.target.checked) {
                let e = Ia(i == null ? void 0 : i.filters).map(e => String(e));
                N(e)
            } else N([])
        },
        ne = ({
            filters: e
        }) => (e || []).map((e, t) => {
            let n = String(e.value),
                r = {
                    title: e.text,
                    key: e.value === void 0 ? String(t) : n
                };
            return e.children && (r.children = ne({
                filters: e.children
            })), r
        }),
        q = e => {
            var t;
            return Object.assign(Object.assign({}, e), {
                text: e.title,
                value: e.key,
                children: ((t = e.children) == null ? void 0 : t.map(e => q(e))) || []
            })
        },
        re, {
            direction: ie,
            renderEmpty: J
        } = Q.useContext(f);
    if (typeof i.filterDropdown == `function`) re = i.filterDropdown({
        prefixCls: `${a}-custom`,
        setSelectedKeys: e => P({
            selectedKeys: e
        }),
        selectedKeys: j(),
        confirm: W,
        clearFilters: U,
        filters: i.filters,
        visible: k,
        close: () => {
            O(!1)
        }
    });
    else if (i.filterDropdown) re = i.filterDropdown;
    else {
        let e = j() || [];
        re = Q.createElement(Q.Fragment, null, (() => {
            let t = (J == null ? void 0 : J(`Table.filter`)) ?? Q.createElement(Me, {
                image: Me.PRESENTED_IMAGE_SIMPLE,
                description: m.filterEmptyText,
                styles: {
                    image: {
                        height: 24
                    }
                },
                style: {
                    margin: 0,
                    padding: `16px 0`
                }
            });
            if ((i.filters || []).length === 0) return t;
            if (l === `tree`) return Q.createElement(Q.Fragment, null, Q.createElement(Na, {
                filterSearch: u,
                value: R,
                onChange: B,
                tablePrefixCls: n,
                locale: m
            }), Q.createElement(`div`, {
                className: `${n}-filter-dropdown-tree`
            }, c ? Q.createElement(Je, {
                checked: e.length === Ia(i.filters).length,
                indeterminate: e.length > 0 && e.length < Ia(i.filters).length,
                className: `${n}-filter-dropdown-checkall`,
                onChange: K
            }, (m == null ? void 0 : m.filterCheckall) ?? (m == null ? void 0 : m.filterCheckAll)) : null, Q.createElement(Ma, {
                checkable: !0,
                selectable: !1,
                blockNode: !0,
                multiple: c,
                checkStrictly: !c,
                className: `${a}-menu`,
                onCheck: F,
                checkedKeys: e,
                selectedKeys: e,
                showIcon: !1,
                treeData: ne({
                    filters: i.filters
                }),
                autoExpandParent: !0,
                defaultExpandAll: !0,
                filterTreeNode: R.trim() ? e => typeof u == `function` ? u(R, q(e)) : Ra(R, e.title) : void 0
            })));
            let o = za({
                    filters: i.filters || [],
                    filterSearch: u,
                    prefixCls: r,
                    filteredKeys: j(),
                    filterMultiple: c,
                    searchValue: R
                }),
                s = o.every(e => e === null);
            return Q.createElement(Q.Fragment, null, Q.createElement(Na, {
                filterSearch: u,
                value: R,
                onChange: B,
                tablePrefixCls: n,
                locale: m
            }), s ? t : Q.createElement(De, {
                selectable: !0,
                multiple: c,
                prefixCls: `${a}-menu`,
                className: te,
                onSelect: P,
                onDeselect: P,
                selectedKeys: e,
                getPopupContainer: g,
                openKeys: I,
                onOpenChange: ee,
                items: o
            }))
        })(), Q.createElement(`div`, {
            className: `${r}-dropdown-btns`
        }, Q.createElement(Ce, {
            type: `link`,
            size: `small`,
            disabled: v ? M((y || []).map(e => String(e)), e, !0) : e.length === 0,
            onClick: () => U()
        }, m.filterReset), Q.createElement(Ce, {
            type: `primary`,
            size: `small`,
            onClick: H
        }, m.filterConfirm)))
    }
    i.filterDropdown && (re = Q.createElement(Te, {
        selectable: void 0
    }, re)), re = Q.createElement(Fa, {
        className: `${r}-dropdown`
    }, re);
    let ae = Se({
        trigger: [`click`],
        placement: ie === `rtl` ? `bottomLeft` : `bottomRight`,
        children: (() => {
            let e;
            return e = typeof i.filterIcon == `function` ? i.filterIcon(D) : i.filterIcon ? i.filterIcon : Q.createElement(rn, null), Q.createElement(`span`, {
                role: `button`,
                tabIndex: -1,
                className: (0, $.default)(`${r}-trigger`, {
                    active: D
                }),
                onClick: e => {
                    e.stopPropagation()
                }
            }, e)
        })(),
        getPopupContainer: g
    }, Object.assign(Object.assign({}, b), {
        rootClassName: (0, $.default)(_, b.rootClassName),
        open: k,
        onOpenChange: G,
        popupRender: () => typeof(b == null ? void 0 : b.dropdownRender) == `function` ? b.dropdownRender(re) : re
    }));
    return Q.createElement(`div`, {
        className: `${r}-column`
    }, Q.createElement(`span`, {
        className: `${n}-column-title`
    }, h), Q.createElement(Oe, Object.assign({}, ae)))
};
P();
var Ha = (e, t, n) => {
    let r = [];
    return (e || []).forEach((e, i) => {
        let a = Bi(i, n),
            o = e.filterDropdown !== void 0;
        if (e.filters || o || `onFilter` in e) {
            if (`filteredValue` in e) {
                let t = e.filteredValue;
                o || (t = (t == null ? void 0 : t.map(String)) ?? t), r.push({
                    column: e,
                    key: zi(e, a),
                    filteredKeys: t,
                    forceFiltered: e.filtered
                })
            } else r.push({
                column: e,
                key: zi(e, a),
                filteredKeys: t && e.defaultFilteredValue ? e.defaultFilteredValue : void 0,
                forceFiltered: e.filtered
            })
        }
        `children` in e && (r = [].concat(F(r), F(Ha(e.children, t, a))))
    }), r
};

function Ua(e, t, n, r, i, a, o, s, c) {
    return n.map((n, l) => {
        let u = Bi(l, s),
            {
                filterOnClose: d = !0,
                filterMultiple: f = !0,
                filterMode: p,
                filterSearch: m
            } = n,
            h = n;
        if (h.filters || h.filterDropdown) {
            let s = zi(h, u),
                l = r.find(({
                    key: e
                }) => s === e);
            h = Object.assign(Object.assign({}, h), {
                title: r => Q.createElement(Va, {
                    tablePrefixCls: e,
                    prefixCls: `${e}-filter`,
                    dropdownPrefixCls: t,
                    column: h,
                    columnKey: s,
                    filterState: l,
                    filterOnClose: d,
                    filterMultiple: f,
                    filterMode: p,
                    filterSearch: m,
                    triggerFilter: a,
                    locale: i,
                    getPopupContainer: o,
                    rootClassName: c
                }, Vi(n.title, r))
            })
        }
        return `children` in h && (h = Object.assign(Object.assign({}, h), {
            children: Ua(e, t, h.children, r, i, a, o, u, c)
        })), h
    })
}
var Wa = e => {
        let t = {};
        return e.forEach(({
            key: e,
            filteredKeys: n,
            column: r
        }) => {
            let i = e,
                {
                    filters: a,
                    filterDropdown: o
                } = r;
            if (o) t[i] = n || null;
            else if (Array.isArray(n)) {
                let e = Ia(a);
                t[i] = e.filter(e => n.includes(String(e)))
            } else t[i] = null
        }), t
    },
    Ga = (e, t, n) => t.reduce((e, r) => {
        let {
            column: {
                onFilter: i,
                filters: a
            },
            filteredKeys: o
        } = r;
        return i && o && o.length ? e.map(e => Object.assign({}, e)).filter(e => o.some(r => {
            let o = Ia(a),
                s = o.findIndex(e => String(e) === String(r)),
                c = s === -1 ? r : o[s];
            return e[n] && (e[n] = Ga(e[n], t, n)), i(c, e)
        })) : e
    }, e),
    Ka = e => e.flatMap(e => `children` in e ? [e].concat(F(Ka(e.children || []))) : [e]),
    qa = e => {
        let {
            prefixCls: t,
            dropdownPrefixCls: n,
            mergedColumns: r,
            onFilterChange: i,
            getPopupContainer: a,
            locale: o,
            rootClassName: s
        } = e;
        de(`Table`);
        let c = Q.useMemo(() => Ka(r || []), [r]),
            [l, u] = Q.useState(() => Ha(c, !0)),
            d = Q.useMemo(() => {
                let e = Ha(c, !1);
                if (e.length === 0) return e;
                let t = !0;
                if (e.forEach(({
                        filteredKeys: e
                    }) => {
                        e !== void 0 && (t = !1)
                    }), t) {
                    let e = (c || []).map((e, t) => zi(e, Bi(t)));
                    return l.filter(({
                        key: t
                    }) => e.includes(t)).map(t => {
                        let n = c[e.findIndex(e => e === t.key)];
                        return Object.assign(Object.assign({}, t), {
                            column: Object.assign(Object.assign({}, t.column), n),
                            forceFiltered: n.filtered
                        })
                    })
                }
                return e
            }, [c, l]),
            f = Q.useMemo(() => Wa(d), [d]),
            p = e => {
                let t = d.filter(({
                    key: t
                }) => t !== e.key);
                t.push(e), u(t), i(Wa(t), t)
            };
        return [e => Ua(t, n, e, d, o, p, a, void 0, s), d, f]
    },
    Ja = (e, t, n) => {
        let r = Q.useRef({});

        function i(i) {
            var a;
            if (!r.current || r.current.data !== e || r.current.childrenColumnName !== t || r.current.getRowKey !== n) {
                let i = new Map;

                function a(e) {
                    e.forEach((e, r) => {
                        let o = n(e, r);
                        i.set(o, e), e && typeof e == `object` && t in e && a(e[t] || [])
                    })
                }
                a(e), r.current = {
                    data: e,
                    childrenColumnName: t,
                    kvMap: i,
                    getRowKey: n
                }
            }
            return (a = r.current.kvMap) == null ? void 0 : a.get(i)
        }
        return [i]
    },
    Ya = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    };

function Xa(e, t) {
    let n = {
        current: e.current,
        pageSize: e.pageSize
    };
    return Object.keys(t && typeof t == `object` ? t : {}).forEach(t => {
        let r = e[t];
        typeof r != `function` && (n[t] = r)
    }), n
}

function Za(e, t, n) {
    let r = n && typeof n == `object` ? n : {},
        {
            total: i = 0
        } = r,
        a = Ya(r, [`total`]),
        [o, s] = (0, Q.useState)(() => ({
            current: `defaultCurrent` in a ? a.defaultCurrent : 1,
            pageSize: `defaultPageSize` in a ? a.defaultPageSize : 10
        })),
        c = Se(o, a, {
            total: i > 0 ? i : e
        }),
        l = Math.ceil((i || e) / c.pageSize);
    c.current > l && (c.current = l || 1);
    let u = (e, t) => {
        s({
            current: e ?? 1,
            pageSize: t || c.pageSize
        })
    };
    return n === !1 ? [{}, () => {}] : [Object.assign(Object.assign({}, c), {
        onChange: (e, r) => {
            var i;
            n && ((i = n.onChange) == null || i.call(n, e, r)), u(e, r), t(e, r || (c == null ? void 0 : c.pageSize))
        }
    }), u]
}
P();
var Qa = `ascend`,
    $a = `descend`,
    eo = e => typeof e.sorter == `object` && typeof e.sorter.multiple == `number` && e.sorter.multiple,
    to = e => typeof e == `function` ? e : e && typeof e == `object` && e.compare ? e.compare : !1,
    no = (e, t) => t ? e[e.indexOf(t) + 1] : e[0],
    ro = (e, t, n) => {
        let r = [],
            i = (e, t) => {
                r.push({
                    column: e,
                    key: zi(e, t),
                    multiplePriority: eo(e),
                    sortOrder: e.sortOrder
                })
            };
        return (e || []).forEach((e, a) => {
            let o = Bi(a, n);
            e.children ? (`sortOrder` in e && i(e, o), r = [].concat(F(r), F(ro(e.children, t, o)))) : e.sorter && (`sortOrder` in e ? i(e, o) : t && e.defaultSortOrder && r.push({
                column: e,
                key: zi(e, o),
                multiplePriority: eo(e),
                sortOrder: e.defaultSortOrder
            }))
        }), r
    },
    io = (e, t, n, r, i, a, o, s) => (t || []).map((t, c) => {
        let l = Bi(c, s),
            u = t;
        if (u.sorter) {
            let s = u.sortDirections || i,
                c = u.showSorterTooltip === void 0 ? o : u.showSorterTooltip,
                d = zi(u, l),
                f = n.find(({
                    key: e
                }) => e === d),
                p = f ? f.sortOrder : null,
                m = no(s, p),
                h;
            if (t.sortIcon) h = t.sortIcon({
                sortOrder: p
            });
            else {
                let t = s.includes(Qa) && Q.createElement($t, {
                        className: (0, $.default)(`${e}-column-sorter-up`, {
                            active: p === Qa
                        })
                    }),
                    n = s.includes($a) && Q.createElement(Zt, {
                        className: (0, $.default)(`${e}-column-sorter-down`, {
                            active: p === $a
                        })
                    });
                h = Q.createElement(`span`, {
                    className: (0, $.default)(`${e}-column-sorter`, {
                        [`${e}-column-sorter-full`]: !!(t && n)
                    })
                }, Q.createElement(`span`, {
                    className: `${e}-column-sorter-inner`,
                    "aria-hidden": `true`
                }, t, n))
            }
            let {
                cancelSort: g,
                triggerAsc: _,
                triggerDesc: v
            } = a || {}, y = g;
            m === $a ? y = v : m === Qa && (y = _);
            let b = typeof c == `object` ? Object.assign({
                title: y
            }, c) : {
                title: y
            };
            u = Object.assign(Object.assign({}, u), {
                className: (0, $.default)(u.className, {
                    [`${e}-column-sort`]: p
                }),
                title: n => {
                    let r = `${e}-column-sorters`,
                        i = Q.createElement(`span`, {
                            className: `${e}-column-title`
                        }, Vi(t.title, n)),
                        a = Q.createElement(`div`, {
                            className: r
                        }, i, h);
                    return c ? typeof c != `boolean` && (c == null ? void 0 : c.target) === `sorter-icon` ? Q.createElement(`div`, {
                        className: `${r} ${e}-column-sorters-tooltip-target-sorter`
                    }, i, Q.createElement(ye, Object.assign({}, b), h)) : Q.createElement(ye, Object.assign({}, b), a) : a
                },
                onHeaderCell: n => {
                    var i;
                    let a = ((i = t.onHeaderCell) == null ? void 0 : i.call(t, n)) || {},
                        o = a.onClick,
                        s = a.onKeyDown;
                    a.onClick = e => {
                        r({
                            column: t,
                            key: d,
                            sortOrder: m,
                            multiplePriority: eo(t)
                        }), o == null || o(e)
                    }, a.onKeyDown = e => {
                        e.keyCode === pe.ENTER && (r({
                            column: t,
                            key: d,
                            sortOrder: m,
                            multiplePriority: eo(t)
                        }), s == null || s(e))
                    };
                    let c = Hi(t.title, {}),
                        l = c == null ? void 0 : c.toString();
                    return p && (a[`aria-sort`] = p === `ascend` ? `ascending` : `descending`), a[`aria-label`] = l || ``, a.className = (0, $.default)(a.className, `${e}-column-has-sorters`), a.tabIndex = 0, t.ellipsis && (a.title = (c ?? ``).toString()), a
                }
            })
        }
        return `children` in u && (u = Object.assign(Object.assign({}, u), {
            children: io(e, u.children, n, r, i, a, o, l)
        })), u
    }),
    ao = e => {
        let {
            column: t,
            sortOrder: n
        } = e;
        return {
            column: t,
            order: n,
            field: t.dataIndex,
            columnKey: t.key
        }
    },
    oo = e => {
        let t = e.filter(({
            sortOrder: e
        }) => e).map(ao);
        if (t.length === 0 && e.length) {
            let t = e.length - 1;
            return Object.assign(Object.assign({}, ao(e[t])), {
                column: void 0,
                order: void 0,
                field: void 0,
                columnKey: void 0
            })
        }
        return t.length <= 1 ? t[0] || {} : t
    },
    so = (e, t, n) => {
        let r = t.slice().sort((e, t) => t.multiplePriority - e.multiplePriority),
            i = e.slice(),
            a = r.filter(({
                column: {
                    sorter: e
                },
                sortOrder: t
            }) => to(e) && t);
        return a.length ? i.sort((e, t) => {
            for (let n = 0; n < a.length; n += 1) {
                let {
                    column: {
                        sorter: r
                    },
                    sortOrder: i
                } = a[n], o = to(r);
                if (o && i) {
                    let n = o(e, t, i);
                    if (n !== 0) return i === Qa ? n : -n
                }
            }
            return 0
        }).map(e => {
            let r = e[n];
            return r ? Object.assign(Object.assign({}, e), {
                [n]: so(r, t, n)
            }) : e
        }) : i
    },
    co = e => {
        let {
            prefixCls: t,
            mergedColumns: n,
            sortDirections: r,
            tableLocale: i,
            showSorterTooltip: a,
            onSorterChange: o
        } = e, [s, c] = Q.useState(() => ro(n, !0)), l = (e, t) => {
            let n = [];
            return e.forEach((e, r) => {
                let i = Bi(r, t);
                if (n.push(zi(e, i)), Array.isArray(e.children)) {
                    let t = l(e.children, i);
                    n.push.apply(n, F(t))
                }
            }), n
        }, u = Q.useMemo(() => {
            let e = !0,
                t = ro(n, !1);
            if (!t.length) {
                let e = l(n);
                return s.filter(({
                    key: t
                }) => e.includes(t))
            }
            let r = [];

            function i(t) {
                e ? r.push(t) : r.push(Object.assign(Object.assign({}, t), {
                    sortOrder: null
                }))
            }
            let a = null;
            return t.forEach(t => {
                a === null ? (i(t), t.sortOrder && (t.multiplePriority === !1 ? e = !1 : a = !0)) : (a && t.multiplePriority !== !1 || (e = !1), i(t))
            }), r
        }, [n, s]), d = Q.useMemo(() => {
            var e, t;
            let n = u.map(({
                column: e,
                sortOrder: t
            }) => ({
                column: e,
                order: t
            }));
            return {
                sortColumns: n,
                sortColumn: (e = n[0]) == null ? void 0 : e.column,
                sortOrder: (t = n[0]) == null ? void 0 : t.order
            }
        }, [u]), f = e => {
            let t;
            t = e.multiplePriority === !1 || !u.length || u[0].multiplePriority === !1 ? [e] : [].concat(F(u.filter(({
                key: t
            }) => t !== e.key)), [e]), c(t), o(oo(t), t)
        };
        return [e => io(t, e, u, f, r, i, a), u, d, () => oo(u)]
    },
    lo = (e, t) => e.map(e => {
        let n = Object.assign({}, e);
        return n.title = Vi(e.title, t), `children` in n && (n.children = lo(n.children, t)), n
    }),
    uo = e => [Q.useCallback(t => lo(t, e), [e])],
    fo = Jr((e, t) => {
        let {
            _renderTimes: n
        } = e, {
            _renderTimes: r
        } = t;
        return n !== r
    }),
    po = oi((e, t) => {
        let {
            _renderTimes: n
        } = e, {
            _renderTimes: r
        } = t;
        return n !== r
    }),
    mo = e => {
        let {
            componentCls: t,
            lineWidth: n,
            lineType: r,
            tableBorderColor: i,
            tableHeaderBg: a,
            tablePaddingVertical: o,
            tablePaddingHorizontal: s,
            calc: c
        } = e, l = `${T(n)} ${r} ${i}`, u = (e, r, i) => ({
            [`&${t}-${e}`]: {
                [`> ${t}-container`]: {
                    [`> ${t}-content, > ${t}-body`]: {
                        "\n            > table > tbody > tr > th,\n            > table > tbody > tr > td\n          ": {
                            [`> ${t}-expanded-row-fixed`]: {
                                margin: `${T(c(r).mul(-1).equal())}
              ${T(c(c(i).add(n)).mul(-1).equal())}`
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
                        border: l,
                        borderBottom: 0
                    },
                    [`> ${t}-container`]: {
                        borderInlineStart: l,
                        borderTop: l,
                        [`
            > ${t}-content,
            > ${t}-header,
            > ${t}-body,
            > ${t}-summary
          `]: {
                            "> table": {
                                "\n                > thead > tr > th,\n                > thead > tr > td,\n                > tbody > tr > th,\n                > tbody > tr > td,\n                > tfoot > tr > th,\n                > tfoot > tr > td\n              ": {
                                    borderInlineEnd: l
                                },
                                "> thead": {
                                    "> tr:not(:last-child) > th": {
                                        borderBottom: l
                                    },
                                    "> tr > th::before": {
                                        backgroundColor: `transparent !important`
                                    }
                                },
                                "\n                > thead > tr,\n                > tbody > tr,\n                > tfoot > tr\n              ": {
                                    [`> ${t}-cell-fix-right-first::after`]: {
                                        borderInlineEnd: l
                                    }
                                },
                                "\n                > tbody > tr > th,\n                > tbody > tr > td\n              ": {
                                    [`> ${t}-expanded-row-fixed`]: {
                                        margin: `${T(c(o).mul(-1).equal())} ${T(c(c(s).add(n)).mul(-1).equal())}`,
                                        "&::after": {
                                            position: `absolute`,
                                            top: 0,
                                            insetInlineEnd: n,
                                            bottom: 0,
                                            borderInlineEnd: l,
                                            content: `""`
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
                }, u(`middle`, e.tablePaddingVerticalMiddle, e.tablePaddingHorizontalMiddle)), u(`small`, e.tablePaddingVerticalSmall, e.tablePaddingHorizontalSmall)), {
                    [`> ${t}-footer`]: {
                        border: l,
                        borderTop: 0
                    }
                }),
                [`${t}-cell`]: {
                    [`${t}-container:first-child`]: {
                        borderTop: 0
                    },
                    "&-scrollbar:not([rowspan])": {
                        boxShadow: `0 ${T(n)} 0 ${T(n)} ${a}`
                    }
                },
                [`${t}-bordered ${t}-cell-scrollbar`]: {
                    borderInlineEnd: l
                }
            }
        }
    },
    ho = e => {
        let {
            componentCls: t
        } = e;
        return {
            [`${t}-wrapper`]: {
                [`${t}-cell-ellipsis`]: Object.assign(Object.assign({}, N), {
                    wordBreak: `keep-all`,
                    [`
          &${t}-cell-fix-left-last,
          &${t}-cell-fix-right-first
        `]: {
                        overflow: `visible`,
                        [`${t}-cell-content`]: {
                            display: `block`,
                            overflow: `hidden`,
                            textOverflow: `ellipsis`
                        }
                    },
                    [`${t}-column-title`]: {
                        overflow: `hidden`,
                        textOverflow: `ellipsis`,
                        wordBreak: `keep-all`
                    }
                })
            }
        }
    },
    go = e => {
        let {
            componentCls: t
        } = e;
        return {
            [`${t}-wrapper`]: {
                [`${t}-tbody > tr${t}-placeholder`]: {
                    textAlign: `center`,
                    color: e.colorTextDisabled,
                    "\n          &:hover > th,\n          &:hover > td,\n        ": {
                        background: e.colorBgContainer
                    }
                }
            }
        }
    },
    _o = e => {
        let {
            componentCls: t,
            antCls: n,
            motionDurationSlow: r,
            lineWidth: i,
            paddingXS: a,
            lineType: o,
            tableBorderColor: s,
            tableExpandIconBg: c,
            tableExpandColumnWidth: l,
            borderRadius: u,
            tablePaddingVertical: d,
            tablePaddingHorizontal: f,
            tableExpandedRowBg: p,
            paddingXXS: m,
            expandIconMarginTop: h,
            expandIconSize: g,
            expandIconHalfInner: _,
            expandIconScale: v,
            calc: y
        } = e, b = `${T(i)} ${o} ${s}`, x = y(m).sub(i).equal();
        return {
            [`${t}-wrapper`]: {
                [`${t}-expand-icon-col`]: {
                    width: l
                },
                [`${t}-row-expand-icon-cell`]: {
                    textAlign: `center`,
                    [`${t}-row-expand-icon`]: {
                        display: `inline-flex`,
                        float: `none`,
                        verticalAlign: `sub`
                    }
                },
                [`${t}-row-indent`]: {
                    height: 1,
                    float: `left`
                },
                [`${t}-row-expand-icon`]: Object.assign(Object.assign({}, V(e)), {
                    position: `relative`,
                    float: `left`,
                    width: g,
                    height: g,
                    color: `inherit`,
                    lineHeight: T(g),
                    background: c,
                    border: b,
                    borderRadius: u,
                    transform: `scale(${v})`,
                    "&:focus, &:hover, &:active": {
                        borderColor: `currentcolor`
                    },
                    "&::before, &::after": {
                        position: `absolute`,
                        background: `currentcolor`,
                        transition: `transform ${r} ease-out`,
                        content: `""`
                    },
                    "&::before": {
                        top: _,
                        insetInlineEnd: x,
                        insetInlineStart: x,
                        height: i
                    },
                    "&::after": {
                        top: x,
                        bottom: x,
                        insetInlineStart: _,
                        width: i,
                        transform: `rotate(90deg)`
                    },
                    "&-collapsed::before": {
                        transform: `rotate(-180deg)`
                    },
                    "&-collapsed::after": {
                        transform: `rotate(0deg)`
                    },
                    "&-spaced": {
                        "&::before, &::after": {
                            display: `none`,
                            content: `none`
                        },
                        background: `transparent`,
                        border: 0,
                        visibility: `hidden`
                    }
                }),
                [`${t}-row-indent + ${t}-row-expand-icon`]: {
                    marginTop: h,
                    marginInlineEnd: a
                },
                [`tr${t}-expanded-row`]: {
                    "&, &:hover": {
                        "> th, > td": {
                            background: p
                        }
                    },
                    [`${n}-descriptions-view`]: {
                        display: `flex`,
                        table: {
                            flex: `auto`,
                            width: `100%`
                        }
                    }
                },
                [`${t}-expanded-row-fixed`]: {
                    position: `relative`,
                    margin: `${T(y(d).mul(-1).equal())} ${T(y(f).mul(-1).equal())}`,
                    padding: `${T(d)} ${T(f)}`
                }
            }
        }
    },
    vo = e => {
        let {
            componentCls: t,
            antCls: n,
            iconCls: r,
            tableFilterDropdownWidth: i,
            tableFilterDropdownSearchWidth: a,
            paddingXXS: o,
            paddingXS: s,
            colorText: c,
            lineWidth: l,
            lineType: u,
            tableBorderColor: d,
            headerIconColor: f,
            fontSizeSM: p,
            tablePaddingHorizontal: m,
            borderRadius: h,
            motionDurationSlow: g,
            colorIcon: _,
            colorPrimary: v,
            tableHeaderFilterActiveBg: y,
            colorTextDisabled: b,
            tableFilterDropdownBg: x,
            tableFilterDropdownHeight: S,
            controlItemBgHover: C,
            controlItemBgActive: w,
            boxShadowSecondary: E,
            filterDropdownMenuBg: D,
            calc: O
        } = e, k = `${n}-dropdown`, A = `${t}-filter-dropdown`, j = `${n}-tree`, M = `${T(l)} ${u} ${d}`;
        return [{
            [`${t}-wrapper`]: {
                [`${t}-filter-column`]: {
                    display: `flex`,
                    justifyContent: `space-between`
                },
                [`${t}-filter-trigger`]: {
                    position: `relative`,
                    display: `flex`,
                    alignItems: `center`,
                    marginBlock: O(o).mul(-1).equal(),
                    marginInline: `${T(o)} ${T(O(m).div(2).mul(-1).equal())}`,
                    padding: `0 ${T(o)}`,
                    color: f,
                    fontSize: p,
                    borderRadius: h,
                    cursor: `pointer`,
                    transition: `all ${g}`,
                    "&:hover": {
                        color: _,
                        background: y
                    },
                    "&.active": {
                        color: v
                    }
                }
            }
        }, {
            [`${n}-dropdown`]: {
                [A]: Object.assign(Object.assign({}, z(e)), {
                    minWidth: i,
                    backgroundColor: x,
                    borderRadius: h,
                    boxShadow: E,
                    overflow: `hidden`,
                    [`${k}-menu`]: {
                        maxHeight: S,
                        overflowX: `hidden`,
                        border: 0,
                        boxShadow: `none`,
                        borderRadius: `unset`,
                        backgroundColor: D,
                        "&:empty::after": {
                            display: `block`,
                            padding: `${T(s)} 0`,
                            color: b,
                            fontSize: p,
                            textAlign: `center`,
                            content: `"Not Found"`
                        }
                    },
                    [`${A}-tree`]: {
                        paddingBlock: `${T(s)} 0`,
                        paddingInline: s,
                        [j]: {
                            padding: 0
                        },
                        [`${j}-treenode ${j}-node-content-wrapper:hover`]: {
                            backgroundColor: C
                        },
                        [`${j}-treenode-checkbox-checked ${j}-node-content-wrapper`]: {
                            "&, &:hover": {
                                backgroundColor: w
                            }
                        }
                    },
                    [`${A}-search`]: {
                        padding: s,
                        borderBottom: M,
                        "&-input": {
                            input: {
                                minWidth: a
                            },
                            [r]: {
                                color: b
                            }
                        }
                    },
                    [`${A}-checkall`]: {
                        width: `100%`,
                        marginBottom: o,
                        marginInlineStart: o
                    },
                    [`${A}-btns`]: {
                        display: `flex`,
                        justifyContent: `space-between`,
                        padding: `${T(O(s).sub(l).equal())} ${T(s)}`,
                        overflow: `hidden`,
                        borderTop: M
                    }
                })
            }
        }, {
            [`${n}-dropdown ${A}, ${A}-submenu`]: {
                [`${n}-checkbox-wrapper + span`]: {
                    paddingInlineStart: s,
                    color: c
                },
                "> ul": {
                    maxHeight: `calc(100vh - 130px)`,
                    overflowX: `hidden`,
                    overflowY: `auto`
                }
            }
        }]
    },
    yo = e => {
        let {
            componentCls: t,
            lineWidth: n,
            colorSplit: r,
            motionDurationSlow: i,
            zIndexTableFixed: a,
            tableBg: o,
            zIndexTableSticky: s,
            calc: c
        } = e, l = r;
        return {
            [`${t}-wrapper`]: {
                [`
        ${t}-cell-fix-left,
        ${t}-cell-fix-right
      `]: {
                    position: `sticky !important`,
                    zIndex: a,
                    background: o
                },
                [`
        ${t}-cell-fix-left-first::after,
        ${t}-cell-fix-left-last::after
      `]: {
                    position: `absolute`,
                    top: 0,
                    right: {
                        _skip_check_: !0,
                        value: 0
                    },
                    bottom: c(n).mul(-1).equal(),
                    width: 30,
                    transform: `translateX(100%)`,
                    transition: `box-shadow ${i}`,
                    content: `""`,
                    pointerEvents: `none`,
                    willChange: `transform`
                },
                [`${t}-cell-fix-left-all::after`]: {
                    display: `none`
                },
                [`
        ${t}-cell-fix-right-first::after,
        ${t}-cell-fix-right-last::after
      `]: {
                    position: `absolute`,
                    top: 0,
                    bottom: c(n).mul(-1).equal(),
                    left: {
                        _skip_check_: !0,
                        value: 0
                    },
                    width: 30,
                    transform: `translateX(-100%)`,
                    transition: `box-shadow ${i}`,
                    content: `""`,
                    pointerEvents: `none`
                },
                [`${t}-container`]: {
                    position: `relative`,
                    "&::before, &::after": {
                        position: `absolute`,
                        top: 0,
                        bottom: 0,
                        zIndex: c(s).add(1).equal({
                            unit: !1
                        }),
                        width: 30,
                        transition: `box-shadow ${i}`,
                        content: `""`,
                        pointerEvents: `none`
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
                        boxShadow: `inset 10px 0 8px -8px ${l}`
                    },
                    [`
          ${t}-cell-fix-left-first::after,
          ${t}-cell-fix-left-last::after
        `]: {
                        boxShadow: `inset 10px 0 8px -8px ${l}`
                    },
                    [`${t}-cell-fix-left-last::before`]: {
                        backgroundColor: `transparent !important`
                    }
                },
                [`${t}-ping-right`]: {
                    [`&:not(${t}-has-fix-right) ${t}-container::after`]: {
                        boxShadow: `inset -10px 0 8px -8px ${l}`
                    },
                    [`
          ${t}-cell-fix-right-first::after,
          ${t}-cell-fix-right-last::after
        `]: {
                        boxShadow: `inset -10px 0 8px -8px ${l}`
                    }
                },
                [`${t}-fixed-column-gapped`]: {
                    [`
        ${t}-cell-fix-left-first::after,
        ${t}-cell-fix-left-last::after,
        ${t}-cell-fix-right-first::after,
        ${t}-cell-fix-right-last::after
      `]: {
                        boxShadow: `none`
                    }
                }
            }
        }
    },
    bo = e => {
        let {
            componentCls: t,
            antCls: n,
            margin: r
        } = e;
        return {
            [`${t}-wrapper`]: {
                [`${t}-pagination${n}-pagination`]: {
                    margin: `${T(r)} 0`
                },
                [`${t}-pagination`]: {
                    display: `flex`,
                    flexWrap: `wrap`,
                    rowGap: e.paddingXS,
                    "> *": {
                        flex: `none`
                    },
                    "&-left": {
                        justifyContent: `flex-start`
                    },
                    "&-center": {
                        justifyContent: `center`
                    },
                    "&-right": {
                        justifyContent: `flex-end`
                    }
                }
            }
        }
    },
    xo = e => {
        let {
            componentCls: t,
            tableRadius: n
        } = e;
        return {
            [`${t}-wrapper`]: {
                [t]: {
                    [`${t}-title, ${t}-header`]: {
                        borderRadius: `${T(n)} ${T(n)} 0 0`
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
                        borderStartStartRadius: n,
                        borderStartEndRadius: n,
                        "table > thead > tr:first-child": {
                            "> *:first-child": {
                                borderStartStartRadius: n
                            },
                            "> *:last-child": {
                                borderStartEndRadius: n
                            }
                        }
                    },
                    "&-footer": {
                        borderRadius: `0 0 ${T(n)} ${T(n)}`
                    }
                }
            }
        }
    },
    So = e => {
        let {
            componentCls: t
        } = e;
        return {
            [`${t}-wrapper-rtl`]: {
                direction: `rtl`,
                table: {
                    direction: `rtl`
                },
                [`${t}-pagination-left`]: {
                    justifyContent: `flex-end`
                },
                [`${t}-pagination-right`]: {
                    justifyContent: `flex-start`
                },
                [`${t}-row-expand-icon`]: {
                    float: `right`,
                    "&::after": {
                        transform: `rotate(-90deg)`
                    },
                    "&-collapsed::before": {
                        transform: `rotate(180deg)`
                    },
                    "&-collapsed::after": {
                        transform: `rotate(0deg)`
                    }
                },
                [`${t}-container`]: {
                    "&::before": {
                        insetInlineStart: `unset`,
                        insetInlineEnd: 0
                    },
                    "&::after": {
                        insetInlineStart: 0,
                        insetInlineEnd: `unset`
                    },
                    [`${t}-row-indent`]: {
                        float: `right`
                    }
                }
            }
        }
    },
    Co = e => {
        let {
            componentCls: t,
            antCls: n,
            iconCls: r,
            fontSizeIcon: i,
            padding: a,
            paddingXS: o,
            headerIconColor: s,
            headerIconHoverColor: c,
            tableSelectionColumnWidth: l,
            tableSelectedRowBg: u,
            tableSelectedRowHoverBg: d,
            tableRowHoverBg: f,
            tablePaddingHorizontal: p,
            calc: m
        } = e;
        return {
            [`${t}-wrapper`]: {
                [`${t}-selection-col`]: {
                    width: l,
                    [`&${t}-selection-col-with-dropdown`]: {
                        width: m(l).add(i).add(m(a).div(4)).equal()
                    }
                },
                [`${t}-bordered ${t}-selection-col`]: {
                    width: m(l).add(m(o).mul(2)).equal(),
                    [`&${t}-selection-col-with-dropdown`]: {
                        width: m(l).add(i).add(m(a).div(4)).add(m(o).mul(2)).equal()
                    }
                },
                [`
        table tr th${t}-selection-column,
        table tr td${t}-selection-column,
        ${t}-selection-column
      `]: {
                    paddingInlineEnd: e.paddingXS,
                    paddingInlineStart: e.paddingXS,
                    textAlign: `center`,
                    [`${n}-radio-wrapper`]: {
                        marginInlineEnd: 0
                    }
                },
                [`table tr th${t}-selection-column${t}-cell-fix-left`]: {
                    zIndex: m(e.zIndexTableFixed).add(1).equal({
                        unit: !1
                    })
                },
                [`table tr th${t}-selection-column::after`]: {
                    backgroundColor: `transparent !important`
                },
                [`${t}-selection`]: {
                    position: `relative`,
                    display: `inline-flex`,
                    flexDirection: `column`
                },
                [`${t}-selection-extra`]: {
                    position: `absolute`,
                    top: 0,
                    zIndex: 1,
                    cursor: `pointer`,
                    transition: `all ${e.motionDurationSlow}`,
                    marginInlineStart: `100%`,
                    paddingInlineStart: T(m(p).div(4).equal()),
                    [r]: {
                        color: s,
                        fontSize: i,
                        verticalAlign: `baseline`,
                        "&:hover": {
                            color: c
                        }
                    }
                },
                [`${t}-tbody`]: {
                    [`${t}-row`]: {
                        [`&${t}-row-selected`]: {
                            [`> ${t}-cell`]: {
                                background: u,
                                "&-row-hover": {
                                    background: d
                                }
                            }
                        },
                        [`> ${t}-cell-row-hover`]: {
                            background: f
                        }
                    }
                }
            }
        }
    },
    wo = e => {
        let {
            componentCls: t,
            tableExpandColumnWidth: n,
            calc: r
        } = e, i = (e, i, a, o) => ({
            [`${t}${t}-${e}`]: {
                fontSize: o,
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
                    padding: `${T(i)} ${T(a)}`
                },
                [`${t}-filter-trigger`]: {
                    marginInlineEnd: T(r(a).div(2).mul(-1).equal())
                },
                [`${t}-expanded-row-fixed`]: {
                    margin: `${T(r(i).mul(-1).equal())} ${T(r(a).mul(-1).equal())}`
                },
                [`${t}-tbody`]: {
                    [`${t}-wrapper:only-child ${t}`]: {
                        marginBlock: T(r(i).mul(-1).equal()),
                        marginInline: `${T(r(n).sub(a).equal())} ${T(r(a).mul(-1).equal())}`
                    }
                },
                [`${t}-selection-extra`]: {
                    paddingInlineStart: T(r(a).div(4).equal())
                }
            }
        });
        return {
            [`${t}-wrapper`]: Object.assign(Object.assign({}, i(`middle`, e.tablePaddingVerticalMiddle, e.tablePaddingHorizontalMiddle, e.tableFontSizeMiddle)), i(`small`, e.tablePaddingVerticalSmall, e.tablePaddingHorizontalSmall, e.tableFontSizeSmall))
        }
    },
    To = e => {
        let {
            componentCls: t,
            marginXXS: n,
            fontSizeIcon: r,
            headerIconColor: i,
            headerIconHoverColor: a
        } = e;
        return {
            [`${t}-wrapper`]: {
                [`${t}-thead th${t}-column-has-sorters`]: {
                    outline: `none`,
                    cursor: `pointer`,
                    transition: `all ${e.motionDurationSlow}, left 0s`,
                    "&:hover": {
                        background: e.tableHeaderSortHoverBg,
                        "&::before": {
                            backgroundColor: `transparent !important`
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
                        backgroundColor: `transparent !important`
                    }
                },
                [`td${t}-column-sort`]: {
                    background: e.tableBodySortBg
                },
                [`${t}-column-title`]: {
                    position: `relative`,
                    zIndex: 1,
                    flex: 1,
                    minWidth: 0
                },
                [`${t}-column-sorters`]: {
                    display: `flex`,
                    flex: `auto`,
                    alignItems: `center`,
                    justifyContent: `space-between`,
                    "&::after": {
                        position: `absolute`,
                        inset: 0,
                        width: `100%`,
                        height: `100%`,
                        content: `""`
                    }
                },
                [`${t}-column-sorters-tooltip-target-sorter`]: {
                    "&::after": {
                        content: `none`
                    }
                },
                [`${t}-column-sorter`]: {
                    marginInlineStart: n,
                    color: i,
                    fontSize: 0,
                    transition: `color ${e.motionDurationSlow}`,
                    "&-inner": {
                        display: `inline-flex`,
                        flexDirection: `column`,
                        alignItems: `center`
                    },
                    "&-up, &-down": {
                        fontSize: r,
                        "&.active": {
                            color: e.colorPrimary
                        }
                    },
                    [`${t}-column-sorter-up + ${t}-column-sorter-down`]: {
                        marginTop: `-0.3em`
                    }
                },
                [`${t}-column-sorters:hover ${t}-column-sorter`]: {
                    color: a
                }
            }
        }
    },
    Eo = e => {
        let {
            componentCls: t,
            opacityLoading: n,
            tableScrollThumbBg: r,
            tableScrollThumbBgHover: i,
            tableScrollThumbSize: a,
            tableScrollBg: o,
            zIndexTableSticky: s,
            stickyScrollBarBorderRadius: c,
            lineWidth: l,
            lineType: u,
            tableBorderColor: d
        } = e, f = `${T(l)} ${u} ${d}`;
        return {
            [`${t}-wrapper`]: {
                [`${t}-sticky`]: {
                    "&-holder": {
                        position: `sticky`,
                        zIndex: s,
                        background: e.colorBgContainer
                    },
                    "&-scroll": {
                        position: `sticky`,
                        bottom: 0,
                        height: `${T(a)} !important`,
                        zIndex: s,
                        display: `flex`,
                        alignItems: `center`,
                        background: o,
                        borderTop: f,
                        opacity: n,
                        "&:hover": {
                            transformOrigin: `center bottom`
                        },
                        "&-bar": {
                            height: a,
                            backgroundColor: r,
                            borderRadius: c,
                            transition: `all ${e.motionDurationSlow}, transform 0s`,
                            position: `absolute`,
                            bottom: 0,
                            "&:hover, &-active": {
                                backgroundColor: i
                            }
                        }
                    }
                }
            }
        }
    },
    Do = e => {
        let {
            componentCls: t,
            lineWidth: n,
            tableBorderColor: r,
            calc: i
        } = e, a = `${T(n)} ${e.lineType} ${r}`;
        return {
            [`${t}-wrapper`]: {
                [`${t}-summary`]: {
                    position: `relative`,
                    zIndex: e.zIndexTableFixed,
                    background: e.tableBg,
                    "> tr": {
                        "> th, > td": {
                            borderBottom: a
                        }
                    }
                },
                [`div${t}-summary`]: {
                    boxShadow: `0 ${T(i(n).mul(-1).equal())} 0 ${r}`
                }
            }
        }
    },
    Oo = e => {
        let {
            componentCls: t,
            motionDurationMid: n,
            lineWidth: r,
            lineType: i,
            tableBorderColor: a,
            calc: o
        } = e, s = `${T(r)} ${i} ${a}`, c = `${t}-expanded-row-cell`;
        return {
            [`${t}-wrapper`]: {
                [`${t}-tbody-virtual`]: {
                    [`${t}-tbody-virtual-holder-inner`]: {
                        [`
            & > ${t}-row, 
            & > div:not(${t}-row) > ${t}-row
          `]: {
                            display: `flex`,
                            boxSizing: `border-box`,
                            width: `100%`
                        }
                    },
                    [`${t}-cell`]: {
                        borderBottom: s,
                        transition: `background ${n}`
                    },
                    [`${t}-expanded-row`]: {
                        [`${c}${c}-fixed`]: {
                            position: `sticky`,
                            insetInlineStart: 0,
                            overflow: `hidden`,
                            width: `calc(var(--virtual-width) - ${T(r)})`,
                            borderInlineEnd: `none`
                        }
                    }
                },
                [`${t}-bordered`]: {
                    [`${t}-tbody-virtual`]: {
                        "&:after": {
                            content: `""`,
                            insetInline: 0,
                            bottom: 0,
                            borderBottom: s,
                            position: `absolute`
                        },
                        [`${t}-cell`]: {
                            borderInlineEnd: s,
                            [`&${t}-cell-fix-right-first:before`]: {
                                content: `""`,
                                position: `absolute`,
                                insetBlock: 0,
                                insetInlineStart: o(r).mul(-1).equal(),
                                borderInlineStart: s
                            }
                        }
                    },
                    [`&${t}-virtual`]: {
                        [`${t}-placeholder ${t}-cell`]: {
                            borderInlineEnd: s,
                            borderBottom: s
                        }
                    }
                }
            }
        }
    },
    ko = e => {
        let {
            componentCls: t,
            fontWeightStrong: n,
            tablePaddingVertical: r,
            tablePaddingHorizontal: i,
            tableExpandColumnWidth: a,
            lineWidth: o,
            lineType: s,
            tableBorderColor: c,
            tableFontSize: l,
            tableBg: u,
            tableRadius: d,
            tableHeaderTextColor: f,
            motionDurationMid: p,
            tableHeaderBg: m,
            tableHeaderCellSplitColor: h,
            tableFooterTextColor: g,
            tableFooterBg: _,
            calc: v
        } = e, y = `${T(o)} ${s} ${c}`;
        return {
            [`${t}-wrapper`]: Object.assign(Object.assign({
                clear: `both`,
                maxWidth: `100%`,
                "--rc-virtual-list-scrollbar-bg": e.tableScrollBg
            }, ee()), {
                [t]: Object.assign(Object.assign({}, z(e)), {
                    fontSize: l,
                    background: u,
                    borderRadius: `${T(d)} ${T(d)} 0 0`,
                    scrollbarColor: `${e.tableScrollThumbBg} ${e.tableScrollBg}`
                }),
                table: {
                    width: `100%`,
                    textAlign: `start`,
                    borderRadius: `${T(d)} ${T(d)} 0 0`,
                    borderCollapse: `separate`,
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
                    position: `relative`,
                    padding: `${T(r)} ${T(i)}`,
                    overflowWrap: `break-word`
                },
                [`${t}-title`]: {
                    padding: `${T(r)} ${T(i)}`
                },
                [`${t}-thead`]: {
                    "\n          > tr > th,\n          > tr > td\n        ": {
                        position: `relative`,
                        color: f,
                        fontWeight: n,
                        textAlign: `start`,
                        background: m,
                        borderBottom: y,
                        transition: `background ${p} ease`,
                        "&[colspan]:not([colspan='1'])": {
                            textAlign: `center`
                        },
                        [`&:not(:last-child):not(${t}-selection-column):not(${t}-row-expand-icon-cell):not([colspan])::before`]: {
                            position: `absolute`,
                            top: `50%`,
                            insetInlineEnd: 0,
                            width: 1,
                            height: `1.6em`,
                            backgroundColor: h,
                            transform: `translateY(-50%)`,
                            transition: `background-color ${p}`,
                            content: `""`
                        }
                    },
                    "> tr:not(:last-child) > th[colspan]": {
                        borderBottom: 0
                    }
                },
                [`${t}-tbody`]: {
                    "> tr": {
                        "> th, > td": {
                            transition: `background ${p}, border-color ${p}`,
                            borderBottom: y,
                            [`
              > ${t}-wrapper:only-child,
              > ${t}-expanded-row-fixed > ${t}-wrapper:only-child
            `]: {
                                [t]: {
                                    marginBlock: T(v(r).mul(-1).equal()),
                                    marginInline: `${T(v(a).sub(i).equal())}
                ${T(v(i).mul(-1).equal())}`,
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
                            position: `relative`,
                            color: f,
                            fontWeight: n,
                            textAlign: `start`,
                            background: m,
                            borderBottom: y,
                            transition: `background ${p} ease`
                        }
                    }
                },
                [`${t}-footer`]: {
                    padding: `${T(r)} ${T(i)}`,
                    color: g,
                    background: _
                }
            })
        }
    },
    Ao = e => {
        let {
            colorFillAlter: t,
            colorBgContainer: n,
            colorTextHeading: r,
            colorFillSecondary: i,
            colorFillContent: a,
            controlItemBgActive: o,
            controlItemBgActiveHover: s,
            padding: c,
            paddingSM: l,
            paddingXS: u,
            colorBorderSecondary: d,
            borderRadiusLG: f,
            controlHeight: p,
            colorTextPlaceholder: m,
            fontSize: g,
            fontSizeSM: _,
            lineHeight: v,
            lineWidth: y,
            colorIcon: b,
            colorIconHover: x,
            opacityLoading: S,
            controlInteractiveSize: C
        } = e, w = new h(i).onBackground(n).toHexString(), T = new h(a).onBackground(n).toHexString(), E = new h(t).onBackground(n).toHexString(), D = new h(b), O = new h(x), k = C / 2 - y, A = k * 2 + y * 3;
        return {
            headerBg: E,
            headerColor: r,
            headerSortActiveBg: w,
            headerSortHoverBg: T,
            bodySortBg: E,
            rowHoverBg: E,
            rowSelectedBg: o,
            rowSelectedHoverBg: s,
            rowExpandedBg: t,
            cellPaddingBlock: c,
            cellPaddingInline: c,
            cellPaddingBlockMD: l,
            cellPaddingInlineMD: u,
            cellPaddingBlockSM: u,
            cellPaddingInlineSM: u,
            borderColor: d,
            headerBorderRadius: f,
            footerBg: E,
            footerColor: r,
            cellFontSize: g,
            cellFontSizeMD: g,
            cellFontSizeSM: g,
            headerSplitColor: d,
            fixedHeaderSortActiveBg: w,
            headerFilterHoverBg: a,
            filterDropdownMenuBg: n,
            filterDropdownBg: n,
            expandIconBg: n,
            selectionColumnWidth: p,
            stickyScrollBarBg: m,
            stickyScrollBarBorderRadius: 100,
            expandIconMarginTop: (g * v - y * 3) / 2 - Math.ceil((_ * 1.4 - y * 3) / 2),
            headerIconColor: D.clone().setA(D.a * S).toRgbString(),
            headerIconHoverColor: O.clone().setA(O.a * S).toRgbString(),
            expandIconHalfInner: k,
            expandIconSize: A,
            expandIconScale: C / A
        }
    },
    jo = 2,
    Mo = H(`Table`, e => {
        let {
            colorTextHeading: t,
            colorSplit: n,
            colorBgContainer: r,
            controlInteractiveSize: i,
            headerBg: a,
            headerColor: o,
            headerSortActiveBg: s,
            headerSortHoverBg: c,
            bodySortBg: l,
            rowHoverBg: u,
            rowSelectedBg: d,
            rowSelectedHoverBg: f,
            rowExpandedBg: p,
            cellPaddingBlock: m,
            cellPaddingInline: h,
            cellPaddingBlockMD: g,
            cellPaddingInlineMD: _,
            cellPaddingBlockSM: v,
            cellPaddingInlineSM: y,
            borderColor: b,
            footerBg: x,
            footerColor: S,
            headerBorderRadius: C,
            cellFontSize: w,
            cellFontSizeMD: T,
            cellFontSizeSM: E,
            headerSplitColor: D,
            fixedHeaderSortActiveBg: k,
            headerFilterHoverBg: A,
            filterDropdownBg: j,
            expandIconBg: M,
            selectionColumnWidth: N,
            stickyScrollBarBg: P,
            calc: F
        } = e, I = O(e, {
            tableFontSize: w,
            tableBg: r,
            tableRadius: C,
            tablePaddingVertical: m,
            tablePaddingHorizontal: h,
            tablePaddingVerticalMiddle: g,
            tablePaddingHorizontalMiddle: _,
            tablePaddingVerticalSmall: v,
            tablePaddingHorizontalSmall: y,
            tableBorderColor: b,
            tableHeaderTextColor: o,
            tableHeaderBg: a,
            tableFooterTextColor: S,
            tableFooterBg: x,
            tableHeaderCellSplitColor: D,
            tableHeaderSortBg: s,
            tableHeaderSortHoverBg: c,
            tableBodySortBg: l,
            tableFixedHeaderSortActiveBg: k,
            tableHeaderFilterActiveBg: A,
            tableFilterDropdownBg: j,
            tableRowHoverBg: u,
            tableSelectedRowBg: d,
            tableSelectedRowHoverBg: f,
            zIndexTableFixed: jo,
            zIndexTableSticky: F(jo).add(1).equal({
                unit: !1
            }),
            tableFontSizeMiddle: T,
            tableFontSizeSmall: E,
            tableSelectionColumnWidth: N,
            tableExpandIconBg: M,
            tableExpandColumnWidth: F(i).add(F(e.padding).mul(2)).equal(),
            tableExpandedRowBg: p,
            tableFilterDropdownWidth: 120,
            tableFilterDropdownHeight: 264,
            tableFilterDropdownSearchWidth: 140,
            tableScrollThumbSize: 8,
            tableScrollThumbBg: P,
            tableScrollThumbBgHover: t,
            tableScrollBg: n
        });
        return [ko(I), bo(I), Do(I), To(I), vo(I), mo(I), xo(I), _o(I), Do(I), go(I), Co(I), yo(I), Eo(I), ho(I), wo(I), So(I), Oo(I)]
    }, Ao, {
        unitless: {
            expandIconScale: !0
        }
    }),
    No = [],
    Po = Q.forwardRef((e, t) => {
        var n;
        let {
            prefixCls: r,
            className: i,
            rootClassName: a,
            style: o,
            size: s,
            bordered: c,
            dropdownPrefixCls: l,
            dataSource: u,
            pagination: d,
            rowSelection: p,
            rowKey: m = `key`,
            rowClassName: h,
            columns: g,
            children: _,
            childrenColumnName: v,
            onChange: y,
            getPopupContainer: b,
            loading: x,
            expandIcon: S,
            expandable: C,
            expandedRowRender: w,
            expandIconColumnIndex: T,
            indentSize: O,
            scroll: k,
            sortDirections: A,
            locale: j,
            showSorterTooltip: M = {
                target: `full-header`
            },
            virtual: N
        } = e;
        de(`Table`);
        let P = Q.useMemo(() => g || Er(_), [g, _]),
            F = Q.useMemo(() => P.some(e => e.responsive), [P]),
            I = Z(F),
            L = Q.useMemo(() => {
                let e = new Set(Object.keys(I).filter(e => I[e]));
                return P.filter(t => !t.responsive || t.responsive.some(t => e.has(t)))
            }, [P, I]),
            ee = ae(e, [`className`, `style`, `columns`]),
            {
                locale: R = X,
                direction: z,
                table: B,
                renderEmpty: V,
                getPrefixCls: H,
                getPopupContainer: U
            } = Q.useContext(f),
            W = D(s),
            G = Object.assign(Object.assign({}, R.Table), j),
            te = u || No,
            K = H(`table`, r),
            ne = H(`dropdown`, l),
            [, q] = E(),
            re = be(K),
            [ie, J, oe] = Mo(K, re),
            se = Object.assign(Object.assign({
                childrenColumnName: v,
                expandIconColumnIndex: T
            }, C), {
                expandIcon: (C == null ? void 0 : C.expandIcon) ?? ((n = B == null ? void 0 : B.expandable) == null ? void 0 : n.expandIcon)
            }),
            {
                childrenColumnName: Y = `children`
            } = se,
            ce = Q.useMemo(() => te.some(e => e == null ? void 0 : e[Y]) ? `nest` : w || C != null && C.expandedRowRender ? `row` : null, [te]),
            le = {
                body: Q.useRef(null)
            },
            ue = Ri(K),
            fe = Q.useRef(null),
            pe = Q.useRef(null);
        Ii(t, () => Object.assign(Object.assign({}, pe.current), {
            nativeElement: fe.current
        }));
        let me = Q.useMemo(() => typeof m == `function` ? m : e => e == null ? void 0 : e[m], [m]),
            [he] = Ja(te, Y, me),
            ge = {},
            _e = (e, t, n = !1) => {
                var r, i, a, o;
                let s = Object.assign(Object.assign({}, ge), e);
                n && ((r = ge.resetPagination) == null || r.call(ge), (i = s.pagination) != null && i.current && (s.pagination.current = 1), d && ((a = d.onChange) == null || a.call(d, 1, (o = s.pagination) == null ? void 0 : o.pageSize))), k && k.scrollToFirstRowOnChange !== !1 && le.body.current && tt(0, {
                    getContainer: () => le.body.current
                }), y == null || y(s.pagination, s.filters, s.sorter, {
                    currentDataSource: Ga(so(te, s.sorterStates, Y), s.filterStates, Y),
                    action: t
                })
            },
            [ve, ye, xe, Se] = co({
                prefixCls: K,
                mergedColumns: L,
                onSorterChange: (e, t) => {
                    _e({
                        sorter: e,
                        sorterStates: t
                    }, `sort`, !1)
                },
                sortDirections: A || [`ascend`, `descend`],
                tableLocale: G,
                showSorterTooltip: M
            }),
            Ce = Q.useMemo(() => so(te, ye, Y), [te, ye]);
        ge.sorter = Se(), ge.sorterStates = ye;
        let [we, Te, Ee] = qa({
            prefixCls: K,
            locale: G,
            dropdownPrefixCls: ne,
            mergedColumns: L,
            onFilterChange: (e, t) => {
                _e({
                    filters: e,
                    filterStates: t
                }, `filter`, !0)
            },
            getPopupContainer: b || U,
            rootClassName: (0, $.default)(a, re)
        }), De = Ga(Ce, Te, Y);
        ge.filters = Ee, ge.filterStates = Te;
        let [Oe] = uo(Q.useMemo(() => {
            let e = {};
            return Object.keys(Ee).forEach(t => {
                Ee[t] !== null && (e[t] = Ee[t])
            }), Object.assign(Object.assign({}, xe), {
                filters: e
            })
        }, [xe, Ee])), [ke, Ae] = Za(De.length, (e, t) => {
            _e({
                pagination: Object.assign(Object.assign({}, ge.pagination), {
                    current: e,
                    pageSize: t
                })
            }, `paginate`)
        }, d);
        ge.pagination = d === !1 ? {} : Xa(ke, d), ge.resetPagination = Ae;
        let Me = Q.useMemo(() => {
                if (d === !1 || !ke.pageSize) return De;
                let {
                    current: e = 1,
                    total: t,
                    pageSize: n = 10
                } = ke;
                return De.length < t ? De.length > n ? De.slice((e - 1) * n, e * n) : De : De.slice((e - 1) * n, e * n)
            }, [!!d, De, ke == null ? void 0 : ke.current, ke == null ? void 0 : ke.pageSize, ke == null ? void 0 : ke.total]),
            [Ne, Pe] = Pi({
                prefixCls: K,
                data: De,
                pageData: Me,
                getRowKey: me,
                getRecordByKey: he,
                expandType: ce,
                childrenColumnName: Y,
                locale: G,
                getPopupContainer: b || U
            }, p),
            Fe = (e, t, n) => {
                let r;
                return r = typeof h == `function` ? (0, $.default)(h(e, t, n)) : (0, $.default)(h), (0, $.default)({
                    [`${K}-row-selected`]: Pe.has(me(e, t))
                }, r)
            };
        se.__PARENT_RENDER_ICON__ = se.expandIcon, se.expandIcon = se.expandIcon || S || Li(G), ce === `nest` && se.expandIconColumnIndex === void 0 ? se.expandIconColumnIndex = +!!p : se.expandIconColumnIndex > 0 && p && --se.expandIconColumnIndex, typeof se.indentSize != `number` && (se.indentSize = typeof O == `number` ? O : 15);
        let Ie = Q.useCallback(e => Oe(Ne(we(ve(e)))), [ve, we, Ne]),
            Le, Re;
        if (d !== !1 && ke != null && ke.total) {
            let e;
            e = ke.size ? ke.size : W === `small` || W === `middle` ? `small` : void 0;
            let t = t => Q.createElement(qt, Object.assign({}, ke, {
                    className: (0, $.default)(`${K}-pagination ${K}-pagination-${t}`, ke.className),
                    size: e
                })),
                n = z === `rtl` ? `left` : `right`,
                {
                    position: r
                } = ke;
            if (r !== null && Array.isArray(r)) {
                let e = r.find(e => e.includes(`top`)),
                    i = r.find(e => e.includes(`bottom`)),
                    a = r.every(e => `${e}` == `none`);
                !e && !i && !a && (Re = t(n)), e && (Le = t(e.toLowerCase().replace(`top`, ``))), i && (Re = t(i.toLowerCase().replace(`bottom`, ``)))
            } else Re = t(n)
        }
        let ze;
        typeof x == `boolean` ? ze = {
            spinning: x
        } : typeof x == `object` && (ze = Object.assign({
            spinning: !0
        }, x));
        let Be = (0, $.default)(oe, re, `${K}-wrapper`, B == null ? void 0 : B.className, {
                [`${K}-wrapper-rtl`]: z === `rtl`
            }, i, a, J),
            Ve = Object.assign(Object.assign({}, B == null ? void 0 : B.style), o),
            He = (j == null ? void 0 : j.emptyText) === void 0 ? (V == null ? void 0 : V(`Table`)) || Q.createElement(je, {
                componentName: `Table`
            }) : j.emptyText,
            Ue = N ? po : fo,
            We = {},
            Ge = Q.useMemo(() => {
                let {
                    fontSize: e,
                    lineHeight: t,
                    lineWidth: n,
                    padding: r,
                    paddingXS: i,
                    paddingSM: a
                } = q, o = Math.floor(e * t);
                switch (W) {
                    case `middle`:
                        return a * 2 + o + n;
                    case `small`:
                        return i * 2 + o + n;
                    default:
                        return r * 2 + o + n
                }
            }, [q, W]);
        return N && (We.listItemHeight = Ge), ie(Q.createElement(`div`, {
            ref: fe,
            className: Be,
            style: Ve
        }, Q.createElement(Ke, Object.assign({
            spinning: !1
        }, ze), Le, Q.createElement(Ue, Object.assign({}, We, ee, {
            ref: pe,
            columns: L,
            direction: z,
            expandable: se,
            prefixCls: K,
            className: (0, $.default)({
                [`${K}-middle`]: W === `middle`,
                [`${K}-small`]: W === `small`,
                [`${K}-bordered`]: c,
                [`${K}-empty`]: te.length === 0
            }, oe, re, J),
            data: Me,
            rowKey: me,
            rowClassName: Fe,
            emptyText: He,
            internalHooks: gn,
            internalRefs: le,
            transformColumns: Ie,
            getContainerWidth: ue
        })), Re)))
    }),
    Fo = Q.forwardRef((e, t) => {
        let n = Q.useRef(0);
        return n.current += 1, Q.createElement(Po, Object.assign({}, e, {
            ref: t,
            _renderTimes: n.current
        }))
    });
Fo.SELECTION_COLUMN = Oi, Fo.EXPAND_COLUMN = hn, Fo.SELECTION_ALL = ki, Fo.SELECTION_INVERT = Ai, Fo.SELECTION_NONE = ji, Fo.Column = si, Fo.ColumnGroup = ci, Fo.Summary = qn;
var Io = Fo,
    Lo = [`dashboard-classes`],
    Ro = () => Ye(Lo, () => t({
        url: `/api/v1/groups`
    })),
    zo = () => Xe.invalidateQueries(Lo);
export {
    qt as a, cn as i, Ro as n, Io as r, zo as t
};