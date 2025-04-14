function e(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("4y75y", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = n("dMqR3"),
        i = n("3Pot1"),
        l = n("jAGNH"),
        a = n("bZQlk");
    const c = n("1XdQH").default;
    c.Text = l.default, c.Link = o.default, c.Title = a.default, c.Paragraph = i.default;
    var s = c
})), n.register("dMqR3", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }), (function(e) {
        return a = e
    }));
    var o = n("fywoC"),
        i = n("hDK3X"),
        l = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        };
    var a = o.forwardRef(((e, t) => {
        var {
            ellipsis: n,
            rel: r
        } = e, a = l(e, ["ellipsis", "rel"]);
        const c = Object.assign(Object.assign({}, a), {
            rel: void 0 === r && "_blank" === a.target ? "noopener noreferrer" : r
        });
        return delete c.navigate, o.createElement(i.default, Object.assign({}, c, {
            ref: t,
            ellipsis: !!n,
            component: "a"
        }))
    }))
})), n.register("hDK3X", (function(r, o) {
    e(r.exports, "default", (function() {
        return $
    }), (function(e) {
        return $ = e
    }));
    var i = n("kLpOI"),
        l = n("90UiM"),
        a = n("83ivs"),
        c = n("fe1on"),
        s = n("cdB24"),
        u = n("3j1S6"),
        f = n("jyxW7"),
        d = n("1gwNV"),
        p = n("iI4DW"),
        g = n("8mdco"),
        b = n("fk9zJ"),
        y = n("fywoC"),
        m = n("4gMdJ"),
        v = n("4AA25"),
        h = n("c5tWo"),
        x = n("632Zb"),
        w = n("e4KJZ"),
        O = n("irQIv"),
        E = n("540a3"),
        S = n("7ETbK"),
        C = n("1XdQH"),
        j = n("6FF1p"),
        k = n("2E81P"),
        R = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        };

    function P(e, t, n) {
        return !0 === e || void 0 === e ? t : e || n && t
    }

    function D(e) {
        return !1 === e ? [!1, !1] : Array.isArray(e) ? e : [e]
    }
    var $ = y.forwardRef(((e, n) => {
        var r, o, $;
        const {
            prefixCls: I,
            className: T,
            style: z,
            type: M,
            disabled: H,
            children: W,
            ellipsis: B,
            editable: N,
            copyable: F,
            component: K,
            title: L
        } = e, A = R(e, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]), {
            getPrefixCls: V,
            direction: X
        } = y.useContext(m.ConfigContext), q = (0, v.useLocaleReceiver)("Text")[0], Q = y.useRef(null), U = y.useRef(null), J = V("typography", I), Z = (0, g.default)(A, ["mark", "code", "delete", "underline", "strong", "keyboard", "italic"]), [G, Y] = (0, E.default)(N), [_, ee] = (0, p.default)(!1, {
            value: Y.editing
        }), {
            triggerType: te = ["icon"]
        } = Y, ne = e => {
            var t;
            e && (null === (t = Y.onStart) || void 0 === t || t.call(Y)), ee(e)
        };
        (0, S.default)((() => {
            var e;
            _ || null === (e = U.current) || void 0 === e || e.focus()
        }), [_]);
        const re = e => {
                null == e || e.preventDefault(), ne(!0)
            },
            [oe, ie] = (0, E.default)(F),
            [le, ae] = y.useState(!1),
            ce = y.useRef(),
            se = {};
        ie.format && (se.format = ie.format);
        const ue = () => {
                window.clearTimeout(ce.current)
            },
            fe = e => {
                var n;
                null == e || e.preventDefault(), null == e || e.stopPropagation(), t(s)(ie.text || String(W) || "", se), ae(!0), ue(), ce.current = window.setTimeout((() => {
                    ae(!1)
                }), 3e3), null === (n = ie.onCopy) || void 0 === n || n.call(ie, e)
            };
        y.useEffect((() => ue), []);
        const [de, pe] = y.useState(!1), [ge, be] = y.useState(!1), [ye, me] = y.useState(!1), [ve, he] = y.useState(!1), [xe, we] = y.useState(!1), [Oe, Ee] = y.useState(!0), [Se, Ce] = (0, E.default)(B, {
            expandable: !1
        }), je = Se && !ye, {
            rows: ke = 1
        } = Ce, Re = y.useMemo((() => !je || void 0 !== Ce.suffix || Ce.onEllipsis || Ce.expandable || G || oe), [je, Ce, G, oe]);
        (0, d.default)((() => {
            Se && !Re && (pe((0, x.isStyleSupport)("webkitLineClamp")), be((0, x.isStyleSupport)("textOverflow")))
        }), [Re, Se]);
        const Pe = y.useMemo((() => !Re && (1 === ke ? ge : de)), [Re, ge, de]),
            De = je && (Pe ? xe : ve),
            $e = je && 1 === ke && Pe,
            Ie = je && ke > 1 && Pe,
            Te = e => {
                var t;
                me(!0), null === (t = Ce.onExpand) || void 0 === t || t.call(Ce, e)
            },
            [ze, Me] = y.useState(0),
            [He, We] = y.useState(0),
            Be = e => {
                var t;
                he(e), ve !== e && (null === (t = Ce.onEllipsis) || void 0 === t || t.call(Ce, e))
            };
        y.useEffect((() => {
            const e = Q.current;
            if (Se && Pe && e) {
                const t = Ie ? e.offsetHeight < e.scrollHeight : e.offsetWidth < e.scrollWidth;
                xe !== t && we(t)
            }
        }), [Se, Pe, W, Ie, Oe]), y.useEffect((() => {
            const e = Q.current;
            if ("undefined" == typeof IntersectionObserver || !e || !Pe || !je) return;
            const t = new IntersectionObserver((() => {
                Ee(!!e.offsetParent)
            }));
            return t.observe(e), () => {
                t.disconnect()
            }
        }), [Pe, je]);
        let Ne = {};
        Ne = !0 === Ce.tooltip ? {
            title: null !== (r = Y.text) && void 0 !== r ? r : W
        } : y.isValidElement(Ce.tooltip) ? {
            title: Ce.tooltip
        } : "object" == typeof Ce.tooltip ? Object.assign({
            title: null !== (o = Y.text) && void 0 !== o ? o : W
        }, Ce.tooltip) : {
            title: Ce.tooltip
        };
        const Fe = y.useMemo((() => {
            const e = e => ["string", "number"].includes(typeof e);
            if (Se && !Pe) return e(Y.text) ? Y.text : e(W) ? W : e(L) ? L : e(Ne.title) ? Ne.title : void 0
        }), [Se, Pe, L, Ne.title, De]);
        if (_) return y.createElement(O.default, {
            value: null !== ($ = Y.text) && void 0 !== $ ? $ : "string" == typeof W ? W : "",
            onSave: e => {
                var t;
                null === (t = Y.onChange) || void 0 === t || t.call(Y, e), ne(!1)
            },
            onCancel: () => {
                var e;
                null === (e = Y.onCancel) || void 0 === e || e.call(Y), ne(!1)
            },
            onEnd: Y.onEnd,
            prefixCls: J,
            className: T,
            style: z,
            direction: X,
            component: K,
            maxLength: Y.maxLength,
            autoSize: Y.autoSize,
            enterIcon: Y.enterIcon
        });
        const Ke = () => {
                const {
                    expandable: e,
                    symbol: t
                } = Ce;
                if (!e) return null;
                let n;
                return n = t || q.expand, y.createElement("a", {
                    key: "expand",
                    className: `${J}-expand`,
                    onClick: Te,
                    "aria-label": q.expand
                }, n)
            },
            Le = () => {
                if (!G) return;
                const {
                    icon: e,
                    tooltip: t
                } = Y, n = (0, f.default)(t)[0] || q.edit, r = "string" == typeof n ? n : "";
                return te.includes("icon") ? y.createElement(w.default, {
                    key: "edit",
                    title: !1 === t ? "" : n
                }, y.createElement(h.default, {
                    ref: U,
                    className: `${J}-edit`,
                    onClick: re,
                    "aria-label": r
                }, e || y.createElement(a.default, {
                    role: "button"
                }))) : null
            },
            Ae = () => {
                if (!oe) return;
                const {
                    tooltips: e,
                    icon: n
                } = ie, r = D(e), o = D(n), a = le ? P(r[1], q.copied) : P(r[0], q.copy), s = le ? q.copied : q.copy, u = "string" == typeof a ? a : s;
                return y.createElement(w.default, {
                    key: "copy",
                    title: a
                }, y.createElement(h.default, {
                    className: t(c)(`${J}-copy`, le && `${J}-copy-success`),
                    onClick: fe,
                    "aria-label": u
                }, le ? P(o[1], y.createElement(i.default, null), !0) : P(o[0], y.createElement(l.default, null), !0)))
            };
        return y.createElement(u.default, {
            onResize: (e, t) => {
                let {
                    offsetWidth: n
                } = e;
                var r;
                Me(n), We(parseInt(null === (r = window.getComputedStyle) || void 0 === r ? void 0 : r.call(window, t).fontSize, 10) || 0)
            },
            disabled: !je || Pe
        }, (r => y.createElement(k.default, {
            tooltipProps: Ne,
            enabledEllipsis: je,
            isEllipsis: De
        }, y.createElement(C.default, Object.assign({
            className: t(c)({
                [`${J}-${M}`]: M,
                [`${J}-disabled`]: H,
                [`${J}-ellipsis`]: Se,
                [`${J}-single-line`]: je && 1 === ke,
                [`${J}-ellipsis-single-line`]: $e,
                [`${J}-ellipsis-multiple-line`]: Ie
            }, T),
            prefixCls: I,
            style: Object.assign(Object.assign({}, z), {
                WebkitLineClamp: Ie ? ke : void 0
            }),
            component: K,
            ref: (0, b.composeRef)(r, Q, n),
            direction: X,
            onClick: te.includes("text") ? re : void 0,
            "aria-label": null == Fe ? void 0 : Fe.toString(),
            title: L
        }, Z), y.createElement(j.default, {
            enabledMeasure: je && !Pe,
            text: W,
            rows: ke,
            width: ze,
            fontSize: He,
            onEllipsis: Be
        }, ((t, n) => {
            let r = t;
            t.length && n && Fe && (r = y.createElement("span", {
                key: "show-content",
                "aria-hidden": !0
            }, r));
            const o = function(e, t) {
                let {
                    mark: n,
                    code: r,
                    underline: o,
                    delete: i,
                    strong: l,
                    keyboard: a,
                    italic: c
                } = e, s = t;

                function u(e, t) {
                    t && (s = y.createElement(e, {}, s))
                }
                return u("strong", l), u("u", o), u("del", i), u("code", r), u("mark", n), u("kbd", a), u("i", c), s
            }(e, y.createElement(y.Fragment, null, r, (e => {
                return [e && y.createElement("span", {
                    "aria-hidden": !0,
                    key: "ellipsis"
                }, "..."), Ce.suffix, (t = e, [t && Ke(), Le(), Ae()])];
                var t
            })(n)));
            return o
        }))))))
    }))
})), n.register("cdB24", (function(e, t) {
    var r = n("1fK2g"),
        o = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var n, i, l, a, c, s, u = !1;
        t || (t = {}), n = t.debug || !1;
        try {
            if (l = r(), a = document.createRange(), c = document.getSelection(), (s = document.createElement("span")).textContent = e, s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", (function(r) {
                    if (r.stopPropagation(), t.format)
                        if (r.preventDefault(), void 0 === r.clipboardData) {
                            n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var i = o[t.format] || o.default;
                            window.clipboardData.setData(i, e)
                        } else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e);
                    t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData))
                })), document.body.appendChild(s), a.selectNodeContents(s), c.addRange(a), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            u = !0
        } catch (r) {
            n && console.error("unable to copy using execCommand: ", r), n && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
            } catch (r) {
                n && console.error("unable to copy using clipboardData: ", r), n && console.error("falling back to prompt"), i = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(i, e)
            }
        } finally {
            c && ("function" == typeof c.removeRange ? c.removeRange(a) : c.removeAllRanges()), s && document.body.removeChild(s), l()
        }
        return u
    }
})), n.register("3j1S6", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = n("bzBGv"),
        i = n("fywoC"),
        l = n("jyxW7");
    n("bqnVH");
    var a = n("bnnlu"),
        c = n("bW7BF");

    function s(e) {
        var t = e.children;
        return ("function" == typeof t ? [t] : (0, l.default)(t)).map((function(t, n) {
            var r = (null == t ? void 0 : t.key) || "".concat("rc-observer-key", "-").concat(n);
            return i.createElement(a.default, (0, o.default)({}, e, {
                key: r
            }), t)
        }))
    }
    s.Collection = c.Collection;
    var u = s
})), n.register("bzBGv", (function(t, n) {
    function r() {
        return r = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, r.apply(this, arguments)
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("bnnlu", (function(t, r) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = n("9wPgI"),
        i = n("fk9zJ"),
        l = n("fywoC"),
        a = n("3qdcB"),
        c = n("h1Qwd"),
        s = n("dt5pk"),
        u = n("bW7BF");

    function f(e) {
        var t = e.children,
            n = e.disabled,
            r = l.useRef(null),
            f = l.useRef(null),
            d = l.useContext(u.CollectionContext),
            p = "function" == typeof t,
            g = p ? t(r) : t,
            b = l.useRef({
                width: -1,
                height: -1,
                offsetWidth: -1,
                offsetHeight: -1
            }),
            y = !p && l.isValidElement(g) && (0, i.supportRef)(g),
            m = y ? g.ref : null,
            v = l.useMemo((function() {
                return (0, i.composeRef)(m, r)
            }), [m, r]),
            h = l.useRef(e);
        h.current = e;
        var x = l.useCallback((function(e) {
            var t = h.current,
                n = t.onResize,
                r = t.data,
                i = e.getBoundingClientRect(),
                l = i.width,
                a = i.height,
                c = e.offsetWidth,
                s = e.offsetHeight,
                u = Math.floor(l),
                f = Math.floor(a);
            if (b.current.width !== u || b.current.height !== f || b.current.offsetWidth !== c || b.current.offsetHeight !== s) {
                var p = {
                    width: u,
                    height: f,
                    offsetWidth: c,
                    offsetHeight: s
                };
                b.current = p;
                var g = c === Math.round(l) ? l : c,
                    y = s === Math.round(a) ? a : s,
                    m = (0, o.default)((0, o.default)({}, p), {}, {
                        offsetWidth: g,
                        offsetHeight: y
                    });
                null == d || d(m, e, r), n && Promise.resolve().then((function() {
                    n(m, e)
                }))
            }
        }), []);
        return l.useEffect((function() {
            var e = (0, a.default)(r.current) || (0, a.default)(f.current);
            return e && !n && (0, c.observe)(e, x),
                function() {
                    return (0, c.unobserve)(e, x)
                }
        }), [r.current, n]), l.createElement(s.default, {
            ref: f
        }, y ? l.cloneElement(g, {
            ref: v
        }) : g)
    }
})), n.register("9wPgI", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = n("ftWaY");

    function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? i(Object(n), !0).forEach((function(t) {
                (0, o.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
})), n.register("ftWaY", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("hfPDZ");

    function i(e, t, n) {
        return (t = (0, o.default)(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
})), n.register("h1Qwd", (function(t, r) {
    e(t.exports, "observe", (function() {
        return a
    })), e(t.exports, "unobserve", (function() {
        return c
    }));
    var o = n("6rvT3"),
        i = new Map;
    var l = new(0, o.default)((function(e) {
        e.forEach((function(e) {
            var t, n = e.target;
            null === (t = i.get(n)) || void 0 === t || t.forEach((function(e) {
                return e(n)
            }))
        }))
    }));

    function a(e, t) {
        i.has(e) || (i.set(e, new Set), l.observe(e)), i.get(e).add(t)
    }

    function c(e, t) {
        i.has(e) && (i.get(e).delete(t), i.get(e).size || (l.unobserve(e), i.delete(e)))
    }
})), n.register("dt5pk", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("b9q3V"),
        i = n("az7Yp"),
        l = n("dbB2G"),
        a = n("gFtPo"),
        c = function(e) {
            (0, l.default)(n, e);
            var t = (0, a.default)(n);

            function n() {
                return (0, o.default)(this, n), t.apply(this, arguments)
            }
            return (0, i.default)(n, [{
                key: "render",
                value: function() {
                    return this.props.children
                }
            }]), n
        }(n("fywoC").Component)
})), n.register("bW7BF", (function(t, r) {
    e(t.exports, "CollectionContext", (function() {
        return i
    })), e(t.exports, "Collection", (function() {
        return l
    }));
    var o = n("fywoC"),
        i = o.createContext(null);

    function l(e) {
        var t = e.children,
            n = e.onBatchResize,
            r = o.useRef(0),
            l = o.useRef([]),
            a = o.useContext(i),
            c = o.useCallback((function(e, t, o) {
                r.current += 1;
                var i = r.current;
                l.current.push({
                    size: e,
                    element: t,
                    data: o
                }), Promise.resolve().then((function() {
                    i === r.current && (null == n || n(l.current), l.current = [])
                })), null == a || a(e, t, o)
            }), [n, a]);
        return o.createElement(i.Provider, {
            value: c
        }, t)
    }
})), n.register("c5tWo", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }), (function(e) {
        return c = e
    }));
    var o = n("l9yjv"),
        i = n("fywoC"),
        l = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        };
    const a = {
        border: 0,
        background: "transparent",
        padding: 0,
        lineHeight: "inherit",
        display: "inline-block"
    };
    var c = i.forwardRef(((e, t) => {
        const {
            style: n,
            noStyle: r,
            disabled: c
        } = e, s = l(e, ["style", "noStyle", "disabled"]);
        let u = {};
        return r || (u = Object.assign({}, a)), c && (u.pointerEvents = "none"), u = Object.assign(Object.assign({}, u), n), i.createElement("div", Object.assign({
            role: "button",
            tabIndex: 0,
            ref: t
        }, s, {
            onKeyDown: e => {
                const {
                    keyCode: t
                } = e;
                t === o.default.ENTER && e.preventDefault()
            },
            onKeyUp: t => {
                const {
                    keyCode: n
                } = t, {
                    onClick: r
                } = e;
                n === o.default.ENTER && r && r()
            },
            style: u
        }))
    }))
})), n.register("irQIv", (function(r, o) {
    e(r.exports, "default", (function() {
        return d
    }));
    var i = n("7uYFt"),
        l = n("fe1on"),
        a = n("l9yjv"),
        c = n("fywoC"),
        s = n("iwiMV"),
        u = n("aNsvV"),
        f = n("8yg8g");
    var d = e => {
        let {
            prefixCls: n,
            "aria-label": r,
            className: o,
            style: d,
            direction: p,
            maxLength: g,
            autoSize: b = !0,
            value: y,
            onSave: m,
            onCancel: v,
            onEnd: h,
            component: x,
            enterIcon: w = c.createElement(i.default, null)
        } = e;
        const O = c.useRef(null),
            E = c.useRef(!1),
            S = c.useRef(),
            [C, j] = c.useState(y);
        c.useEffect((() => {
            j(y)
        }), [y]), c.useEffect((() => {
            if (O.current && O.current.resizableTextArea) {
                const {
                    textArea: e
                } = O.current.resizableTextArea;
                e.focus();
                const {
                    length: t
                } = e.value;
                e.setSelectionRange(t, t)
            }
        }), []);
        const k = () => {
                m(C.trim())
            },
            R = x ? `${n}-${x}` : "",
            [P, D] = (0, f.default)(n),
            $ = t(l)(n, `${n}-edit-content`, {
                [`${n}-rtl`]: "rtl" === p
            }, o, R, D);
        return P(c.createElement("div", {
            className: $,
            style: d
        }, c.createElement(s.default, {
            ref: O,
            maxLength: g,
            value: C,
            onChange: e => {
                let {
                    target: t
                } = e;
                j(t.value.replace(/[\n\r]/g, ""))
            },
            onKeyDown: e => {
                let {
                    keyCode: t
                } = e;
                E.current || (S.current = t)
            },
            onKeyUp: e => {
                let {
                    keyCode: t,
                    ctrlKey: n,
                    altKey: r,
                    metaKey: o,
                    shiftKey: i
                } = e;
                S.current !== t || E.current || n || r || o || i || (t === a.default.ENTER ? (k(), null == h || h()) : t === a.default.ESC && v())
            },
            onCompositionStart: () => {
                E.current = !0
            },
            onCompositionEnd: () => {
                E.current = !1
            },
            onBlur: () => {
                k()
            },
            "aria-label": r,
            rows: 1,
            autoSize: b
        }), null !== w ? (0, u.cloneElement)(w, {
            className: `${n}-edit-content-confirm`
        }) : null))
    }
})), n.register("8yg8g", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("huF4L"),
        i = n("dRbI2"),
        l = n("irgE1");
    const a = e => {
        const {
            componentCls: t,
            sizeMarginHeadingVerticalStart: n
        } = e;
        return {
            [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
                color: e.colorText,
                wordBreak: "break-word",
                lineHeight: e.lineHeight,
                [`&${t}-secondary`]: {
                    color: e.colorTextDescription
                },
                [`&${t}-success`]: {
                    color: e.colorSuccess
                },
                [`&${t}-warning`]: {
                    color: e.colorWarning
                },
                [`&${t}-danger`]: {
                    color: e.colorError,
                    "a&:active, a&:focus": {
                        color: e.colorErrorActive
                    },
                    "a&:hover": {
                        color: e.colorErrorHover
                    }
                },
                [`&${t}-disabled`]: {
                    color: e.colorTextDisabled,
                    cursor: "not-allowed",
                    userSelect: "none"
                },
                "\n        div&,\n        p\n      ": {
                    marginBottom: "1em"
                }
            }, (0, i.getTitleStyles)(e)), {
                [`\n      & + h1${t},\n      & + h2${t},\n      & + h3${t},\n      & + h4${t},\n      & + h5${t}\n      `]: {
                    marginTop: n
                },
                "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5": {
                    "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ": {
                        marginTop: n
                    }
                }
            }), (0, i.getResetStyles)(e)), (0, i.getLinkStyles)(e)), {
                [`\n        ${t}-expand,\n        ${t}-edit,\n        ${t}-copy\n      `]: Object.assign(Object.assign({}, (0, l.operationUnit)(e)), {
                    marginInlineStart: e.marginXXS
                })
            }), (0, i.getEditableStyles)(e)), (0, i.getCopiableStyles)(e)), (0, i.getEllipsisStyles)()), {
                "&-rtl": {
                    direction: "rtl"
                }
            })
        }
    };
    var c = (0, o.default)("Typography", (e => [a(e)]), {
        sizeMarginHeadingVerticalStart: "1.2em",
        sizeMarginHeadingVerticalEnd: "0.5em"
    })
})), n.register("dRbI2", (function(t, r) {
    e(t.exports, "getTitleStyles", (function() {
        return a
    })), e(t.exports, "getLinkStyles", (function() {
        return c
    })), e(t.exports, "getResetStyles", (function() {
        return s
    })), e(t.exports, "getEditableStyles", (function() {
        return u
    })), e(t.exports, "getCopiableStyles", (function() {
        return f
    })), e(t.exports, "getEllipsisStyles", (function() {
        return d
    }));
    var o = n("ewAdL"),
        i = n("7qtjB"),
        l = n("irgE1");
    const a = e => {
            const t = {};
            return [1, 2, 3, 4, 5].forEach((n => {
                t[`\n      h${n}&,\n      div&-h${n},\n      div&-h${n} > textarea,\n      h${n}\n    `] = ((e, t, n, r) => {
                    const {
                        sizeMarginHeadingVerticalEnd: o,
                        fontWeightStrong: i
                    } = r;
                    return {
                        marginBottom: o,
                        color: n,
                        fontWeight: i,
                        fontSize: e,
                        lineHeight: t
                    }
                })(e[`fontSizeHeading${n}`], e[`lineHeightHeading${n}`], e.colorTextHeading, e)
            })), t
        },
        c = e => {
            const {
                componentCls: t
            } = e;
            return {
                "a&, a": Object.assign(Object.assign({}, (0, l.operationUnit)(e)), {
                    textDecoration: e.linkDecoration,
                    "&:active, &:hover": {
                        textDecoration: e.linkHoverDecoration
                    },
                    [`&[disabled], &${t}-disabled`]: {
                        color: e.colorTextDisabled,
                        cursor: "not-allowed",
                        "&:active, &:hover": {
                            color: e.colorTextDisabled
                        },
                        "&:active": {
                            pointerEvents: "none"
                        }
                    }
                })
            }
        },
        s = e => ({
            code: {
                margin: "0 0.2em",
                paddingInline: "0.4em",
                paddingBlock: "0.2em 0.1em",
                fontSize: "85%",
                fontFamily: e.fontFamilyCode,
                background: "rgba(150, 150, 150, 0.1)",
                border: "1px solid rgba(100, 100, 100, 0.2)",
                borderRadius: 3
            },
            kbd: {
                margin: "0 0.2em",
                paddingInline: "0.4em",
                paddingBlock: "0.15em 0.1em",
                fontSize: "90%",
                fontFamily: e.fontFamilyCode,
                background: "rgba(150, 150, 150, 0.06)",
                border: "1px solid rgba(100, 100, 100, 0.2)",
                borderBottomWidth: 2,
                borderRadius: 3
            },
            mark: {
                padding: 0,
                backgroundColor: o.gold[2]
            },
            "u, ins": {
                textDecoration: "underline",
                textDecorationSkipInk: "auto"
            },
            "s, del": {
                textDecoration: "line-through"
            },
            strong: {
                fontWeight: 600
            },
            "ul, ol": {
                marginInline: 0,
                marginBlock: "0 1em",
                padding: 0,
                li: {
                    marginInline: "20px 0",
                    marginBlock: 0,
                    paddingInline: "4px 0",
                    paddingBlock: 0
                }
            },
            ul: {
                listStyleType: "circle",
                ul: {
                    listStyleType: "disc"
                }
            },
            ol: {
                listStyleType: "decimal"
            },
            "pre, blockquote": {
                margin: "1em 0"
            },
            pre: {
                padding: "0.4em 0.6em",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                background: "rgba(150, 150, 150, 0.1)",
                border: "1px solid rgba(100, 100, 100, 0.2)",
                borderRadius: 3,
                fontFamily: e.fontFamilyCode,
                code: {
                    display: "inline",
                    margin: 0,
                    padding: 0,
                    fontSize: "inherit",
                    fontFamily: "inherit",
                    background: "transparent",
                    border: 0
                }
            },
            blockquote: {
                paddingInline: "0.6em 0",
                paddingBlock: 0,
                borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
                opacity: .85
            }
        }),
        u = e => {
            const {
                componentCls: t
            } = e, n = (0, i.initInputToken)(e).inputPaddingVertical + 1;
            return {
                "&-edit-content": {
                    position: "relative",
                    "div&": {
                        insetInlineStart: -e.paddingSM,
                        marginTop: -n,
                        marginBottom: `calc(1em - ${n}px)`
                    },
                    [`${t}-edit-content-confirm`]: {
                        position: "absolute",
                        insetInlineEnd: e.marginXS + 2,
                        insetBlockEnd: e.marginXS,
                        color: e.colorTextDescription,
                        fontWeight: "normal",
                        fontSize: e.fontSize,
                        fontStyle: "normal",
                        pointerEvents: "none"
                    },
                    textarea: {
                        margin: "0!important",
                        MozTransition: "none",
                        height: "1em"
                    }
                }
            }
        },
        f = e => ({
            "&-copy-success": {
                "\n    &,\n    &:hover,\n    &:focus": {
                    color: e.colorSuccess
                }
            }
        }),
        d = () => ({
            "\n  a&-ellipsis,\n  span&-ellipsis\n  ": {
                display: "inline-block",
                maxWidth: "100%"
            },
            "&-single-line": {
                whiteSpace: "nowrap"
            },
            "&-ellipsis-single-line": {
                overflow: "hidden",
                textOverflow: "ellipsis",
                "a&, span&": {
                    verticalAlign: "bottom"
                }
            },
            "&-ellipsis-multiple-line": {
                display: "-webkit-box",
                overflow: "hidden",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical"
            }
        })
})), n.register("540a3", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("fywoC");

    function i(e, t) {
        return o.useMemo((() => {
            const n = !!e;
            return [n, Object.assign(Object.assign({}, t), n && "object" == typeof e ? e : null)]
        }), [e])
    }
})), n.register("7ETbK", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("fywoC");
    var i = (e, t) => {
        const n = o.useRef(!1);
        o.useEffect((() => {
            n.current ? e() : n.current = !0
        }), t)
    }
})), n.register("1XdQH", (function(r, o) {
    e(r.exports, "default", (function() {
        return f
    }), (function(e) {
        return f = e
    }));
    var i = n("fe1on"),
        l = n("fk9zJ"),
        a = n("fywoC"),
        c = n("4gMdJ"),
        s = n("8yg8g"),
        u = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        };
    var f = a.forwardRef(((e, n) => {
        var {
            prefixCls: r,
            component: o = "article",
            className: f,
            rootClassName: d,
            setContentRef: p,
            children: g,
            direction: b
        } = e, y = u(e, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction"]);
        const {
            getPrefixCls: m,
            direction: v
        } = a.useContext(c.ConfigContext), h = null != b ? b : v;
        let x = n;
        p && (x = (0, l.composeRef)(n, p));
        const w = m("typography", r),
            [O, E] = (0, s.default)(w),
            S = t(i)(w, {
                [`${w}-rtl`]: "rtl" === h
            }, f, d, E);
        return O(a.createElement(o, Object.assign({
            className: S,
            ref: x
        }, y), g))
    }))
})), n.register("6FF1p", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = n("jyxW7"),
        i = n("1gwNV"),
        l = n("fywoC");

    function a(e) {
        const t = typeof e;
        return "string" === t || "number" === t
    }

    function c(e, t) {
        let n = 0;
        const r = [];
        for (let o = 0; o < e.length; o += 1) {
            if (n === t) return r;
            const i = e[o],
                l = n + (a(i) ? String(i).length : 1);
            if (l > t) {
                const e = t - n;
                return r.push(String(i).slice(0, e)), r
            }
            r.push(i), n = l
        }
        return e
    }
    var s = e => {
        let {
            enabledMeasure: t,
            children: n,
            text: r,
            width: s,
            fontSize: u,
            rows: f,
            onEllipsis: d
        } = e;
        const [
            [p, g, b], y
        ] = l.useState([0, 0, 0]), [m, v] = l.useState(0), [h, x] = l.useState(0), w = l.useRef(null), O = l.useRef(null), E = l.useMemo((() => (0, o.default)(r)), [r]), S = l.useMemo((() => function(e) {
            let t = 0;
            return e.forEach((e => {
                a(e) ? t += String(e).length : t += 1
            })), t
        }(E)), [E]), C = l.useMemo((() => t && 3 === m ? n(c(E, g), g < S) : n(E, !1)), [t, m, n, E, g, S]);
        (0, i.default)((() => {
            t && s && u && S && (v(1), y([0, Math.ceil(S / 2), S]))
        }), [t, s, u, r, S, f]), (0, i.default)((() => {
            var e;
            1 === m && x((null === (e = w.current) || void 0 === e ? void 0 : e.offsetHeight) || 0)
        }), [m]), (0, i.default)((() => {
            var e, t;
            if (h)
                if (1 === m) {
                    ((null === (e = O.current) || void 0 === e ? void 0 : e.offsetHeight) || 0) <= f * h ? (v(4), d(!1)) : v(2)
                } else if (2 === m)
                if (p !== b) {
                    const e = (null === (t = O.current) || void 0 === t ? void 0 : t.offsetHeight) || 0;
                    let n = p,
                        r = b;
                    p === b - 1 ? r = p : e <= f * h ? n = g : r = g;
                    const o = Math.ceil((n + r) / 2);
                    y([n, o, r])
                } else v(3), d(!0)
        }), [m, p, b, f, h]);
        const j = {
                width: s,
                whiteSpace: "normal",
                margin: 0,
                padding: 0
            },
            k = (e, t, n) => l.createElement("span", {
                "aria-hidden": !0,
                ref: t,
                style: Object.assign({
                    position: "fixed",
                    display: "block",
                    left: 0,
                    top: 0,
                    zIndex: -9999,
                    visibility: "hidden",
                    pointerEvents: "none",
                    fontSize: 2 * Math.floor(u / 2)
                }, n)
            }, e);
        return l.createElement(l.Fragment, null, C, t && 3 !== m && 4 !== m && l.createElement(l.Fragment, null, k("lg", w, {
            wordBreak: "keep-all",
            whiteSpace: "nowrap"
        }), 1 === m ? k(n(E, !1), O, j) : ((e, t) => {
            const r = c(E, e);
            return k(n(r, !0), t, j)
        })(g, O)))
    }
})), n.register("2E81P", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = n("fywoC"),
        i = n("e4KJZ");
    var l = e => {
        let {
            enabledEllipsis: t,
            isEllipsis: n,
            children: r,
            tooltipProps: l
        } = e;
        return (null == l ? void 0 : l.title) && t ? o.createElement(i.default, Object.assign({
            open: !!n && void 0
        }, l), r) : r
    }
})), n.register("3Pot1", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = n("fywoC"),
        i = n("hDK3X");
    var l = o.forwardRef(((e, t) => o.createElement(i.default, Object.assign({
        ref: t
    }, e, {
        component: "div"
    }))))
})), n.register("jAGNH", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }), (function(e) {
        return s = e
    }));
    var o = n("8mdco"),
        i = n("fywoC"),
        l = n("hDK3X"),
        a = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        };
    const c = (e, t) => {
        var {
            ellipsis: n
        } = e, r = a(e, ["ellipsis"]);
        const c = i.useMemo((() => n && "object" == typeof n ? (0, o.default)(n, ["expandable", "rows"]) : n), [n]);
        return i.createElement(l.default, Object.assign({
            ref: t
        }, r, {
            ellipsis: c,
            component: "span"
        }))
    };
    var s = i.forwardRef(c)
})), n.register("bZQlk", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }), (function(e) {
        return c = e
    }));
    var o = n("fywoC"),
        i = n("hDK3X"),
        l = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        };
    const a = [1, 2, 3, 4, 5];
    var c = o.forwardRef(((e, t) => {
        const {
            level: n = 1
        } = e, r = l(e, ["level"]);
        let c;
        return c = a.includes(n) ? `h${n}` : "h1", o.createElement(i.default, Object.assign({
            ref: t
        }, r, {
            component: c
        }))
    }))
}));