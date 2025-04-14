function e(e, t, r, n) {
    Object.defineProperty(e, t, {
        get: r,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
r.register("hIClP", (function(t, n) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "Container", (function() {
        return O
    })), e(t.exports, "ContentContainer", (function() {
        return k
    })), e(t.exports, "Content", (function() {
        return E
    })), e(t.exports, "default", (function() {
        return C
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        s = r("69SUA"),
        u = r("iMOcM"),
        c = r("lKmIF"),
        l = r("3uz2P"),
        d = r("cO2Su"),
        f = r("dYca8"),
        p = r("4ZQfK"),
        m = r("a48Yf"),
        h = r("1lwpy"),
        v = r("4Gnmi"),
        g = r("i5Qjx"),
        x = r("1CCl5");
    let y, b, w, j = e => e;
    var C = () => {
        const {
            id: e
        } = (0, l.useParams)(), {
            isLoading: t,
            error: r,
            data: n
        } = (0, f.default)(e);
        var a, i;
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(u.Title, {
                title: null !== (a = null == n ? void 0 : n.name) && void 0 !== a ? a : "Group"
            }), (0, o.jsxs)(O, {
                children: [(0, o.jsx)(x.GroupViewTopNavigationHeader, {
                    id: e
                }), (0, o.jsxs)(k, {
                    children: [r ? (0, o.jsx)("div", {
                        style: {
                            height: 35
                        }
                    }) : (0, o.jsx)(m.GroupViewHeader, {
                        data: n
                    }), (0, o.jsx)(E, {
                        children: t ? (0, o.jsx)(v.default, {
                            paragraph: {
                                rows: 4
                            },
                            title: !1,
                            active: !0,
                            className: "maxWidth"
                        }) : r ? (0, o.jsx)("div", {
                            children: (null == r || null === (i = r.message) || void 0 === i ? void 0 : i.text) || "There was an error fetching this class. Please try again."
                        }) : (0, o.jsxs)(g.default, {
                            className: "maxWidth",
                            direction: "vertical",
                            size: 25,
                            children: [(0, o.jsx)(p.GroupViewJoin, {
                                groupId: e,
                                groupName: n.name
                            }), (0, o.jsx)(h.GroupViewMembers, {
                                members: n.members,
                                groupId: e
                            })]
                        })
                    })]
                })]
            })]
        })
    };
    const O = i.default.div.attrs({
            className: "vc flex-column"
        })(y || (y = j`
  flex: 1;
  background: ${0};
  font-family: ${0};
  color: ${0};
`), c.default.Snow, s.Fonts.SFPro, c.default.Black),
        k = i.default.div.attrs({
            className: "flex-column"
        })(b || (b = j`
  width: 90%;
  max-width: 1200px;
  flex: 1;
`)),
        E = (0, i.default)(d.default).attrs({
            className: "maxWidth"
        })(w || (w = j`
  flex: 1;
  border-radius: 9px;
  padding: 35px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
`))
})), r.register("cO2Su", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("2FDaO"),
        i = r("lKmIF");
    let s;
    var u = e => (0, a.jsx)(c, {
        onClick: e.onClick,
        className: e.className,
        style: e.style,
        children: e.children
    });
    const c = o.default.div(s || (s = (e => e)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${0};
  padding: 20px;
`), i.default.White)
})), r.register("dYca8", (function(t, n) {
    e(t.exports, "invalidateGroup", (function() {
        return u
    })), e(t.exports, "default", (function() {
        return c
    }));
    var a = r("eMRqp"),
        o = r("iMOcM"),
        i = r("bKPD8");
    const s = ["group"],
        u = e => i.default.invalidateQueries([s, e]);
    var c = e => (0, a.useQuery)({
        queryKey: [s, e],
        retry: !1,
        queryFn: () => (0, o.requestAsPromise)({
            url: `/api/v1/groups/info/${e}`
        })
    })
})), r.register("4ZQfK", (function(n, a) {
    e(n.exports, "GroupViewJoin", (function() {
        return x
    }));
    var o = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        s = r("69SUA"),
        u = r("93yIm"),
        c = r("7ECC6"),
        l = r("b9Zw0"),
        d = r("cy4A6"),
        f = r("lKmIF"),
        p = r("dhxiD"),
        m = r("iMOcM");
    let h, v, g = e => e;
    const x = e => {
            const r = `${(0,m.getDomain)()}/class/join/${e.groupId}`;
            return (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsxs)(y, {
                    children: ["Have your students visit this link to join ", (0, o.jsx)("b", {
                        children: e.groupName
                    }), ". They will have to authenticate with Google or email."]
                }), (0, o.jsx)(c.default, {
                    hoverable: !0,
                    style: {
                        color: f.default.Black,
                        fontFamily: s.Fonts.SFPro,
                        marginTop: 15
                    },
                    children: (0, o.jsxs)(b, {
                        children: [(0, o.jsx)(l.default, {
                            size: "large",
                            value: r,
                            readOnly: !0
                        }), (0, o.jsx)(u.default, {
                            onClick: () => {
                                t(p)(r), d.default.success("Link copied!")
                            },
                            type: "primary",
                            style: {
                                marginLeft: 10
                            },
                            size: "large",
                            children: "Copy Link"
                        })]
                    })
                })]
            })
        },
        y = i.default.div(h || (h = g`
  font-size: 20px;
`)),
        b = i.default.div.attrs({
            className: "flex maxWidth vc"
        })(v || (v = g``))
})), r.register("dhxiD", (function(e, t) {
    var n = r("1fK2g"),
        a = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var r, o, i, s, u, c, l = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (i = n(), s = document.createRange(), u = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var o = a[t.format] || a.default;
                            window.clipboardData.setData(o, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(c), s.selectNodeContents(c), u.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            l = !0
        } catch (n) {
            r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), l = !0
            } catch (n) {
                r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), o = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(o, e)
            }
        } finally {
            u && ("function" == typeof u.removeRange ? u.removeRange(s) : u.removeAllRanges()), c && document.body.removeChild(c), i()
        }
        return l
    }
})), r.register("1fK2g", (function(e, t) {
    e.exports = function() {
        var e = document.getSelection();
        if (!e.rangeCount) return function() {};
        for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++) r.push(e.getRangeAt(n));
        switch (t.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                t.blur();
                break;
            default:
                t = null
        }
        return e.removeAllRanges(),
            function() {
                "Caret" === e.type && e.removeAllRanges(), e.rangeCount || r.forEach((function(t) {
                    e.addRange(t)
                })), t && t.focus()
            }
    }
})), r.register("a48Yf", (function(t, n) {
    e(t.exports, "GroupViewHeader", (function() {
        return S
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("2FDaO"),
        s = r("dYca8"),
        u = r("93yIm"),
        c = r("gnAdP"),
        l = r("fBuQJ"),
        d = r("i5Qjx"),
        f = r("69SUA"),
        p = r("9g8O0"),
        m = r("83ivs"),
        h = r("90RCV"),
        v = r("dohZB"),
        g = r("iMOcM"),
        x = r("iROck"),
        y = r("140Bj"),
        b = r("kR3c9"),
        w = r("kDzZQ"),
        j = r("eEYFA"),
        C = r("8lJV1");
    let O, k, E, M, N = e => e;
    const S = e => {
            const t = o.useMemo((() => e.data ? [{
                key: "rename",
                label: "Rename class",
                icon: (0, a.jsx)(m.default, {}),
                onClick: () => {
                    (0, w.promptModal)({
                        title: "Rename class",
                        rules: [{
                            required: !0,
                            message: "Name is required"
                        }, {
                            max: 28,
                            message: "Class name must be less than 28 characters"
                        }],
                        placeholder: e.data.name,
                        okText: "Save",
                        onOk: async t => {
                            await (0, g.requestAsPromise)({
                                url: "/api/v1/groups/rename",
                                data: {
                                    groupId: e.data._id,
                                    newName: t
                                }
                            }), (0, s.invalidateGroup)(e.data._id)
                        }
                    })
                }
            }, {
                key: "modify-auto-accept",
                label: (e.data.autoAccept ? "Disable" : "Enable") + " auto-accept",
                icon: (0, a.jsx)(v.default, {}),
                onClick: () => {
                    (0, j.Request)({
                        url: "/api/v1/groups/auto-accept",
                        data: {
                            groupId: e.data._id,
                            autoAcceptOn: !e.data.autoAccept
                        },
                        success: () => {
                            l.default.success({
                                title: "Auto-accept " + (e.data.autoAccept ? "disabled" : "enabled"),
                                content: e.data.autoAccept ? "When students attempt to join this class, you will be asked to approve their request." : "Students can now join this class without manual approval by visiting the join link."
                            }), (0, s.invalidateGroup)(e.data._id)
                        },
                        error: e => {
                            (0, g.throwMessageError)({
                                e: e,
                                default: {
                                    title: "Error updating auto-accept. Please try agian."
                                }
                            })
                        }
                    })
                }
            }, {
                key: "delete-class",
                label: "Delete class",
                icon: (0, a.jsx)(p.default, {}),
                danger: !0,
                onClick: () => {
                    l.default.confirm({
                        title: "Are you sure you want to delete this class?",
                        okText: "Yes",
                        okType: "danger",
                        onOk: async () => {
                            await (0, g.requestAsPromise)({
                                url: `/api/v1/groups/delete/${e.data._id}`
                            }), (0, b.invalidateClasses)(), (0, x.NavigateTo)(y.default.navigation.homeUrl)
                        }
                    })
                }
            }] : []), [e.data]);
            return e.data ? (0, a.jsxs)(P, {
                children: [(0, a.jsxs)(z, {
                    children: [(0, a.jsxs)(d.default, {
                        direction: "horizontal",
                        size: 20,
                        wrap: !0,
                        children: [(0, a.jsx)(D, {
                            style: {
                                background: e.data.color
                            }
                        }), (0, a.jsx)(K, {
                            children: e.data.name
                        })]
                    }), (0, a.jsx)("div", {
                        children: e.customRightComponent ? e.customRightComponent : (0, a.jsx)(c.default, {
                            menu: {
                                items: t
                            },
                            children: (0, a.jsx)(u.default, {
                                icon: (0, a.jsx)(h.default, {}),
                                type: "default",
                                shape: "circle"
                            })
                        })
                    })]
                }), e.data.invites.length ? (0, a.jsx)(d.default, {
                    direction: "vertical",
                    size: 15,
                    className: "maxWidth",
                    style: {
                        marginTop: 20
                    },
                    children: e.data.invites.map((t => (0, a.jsx)(C.GroupViewInvite, {
                        id: t._id,
                        name: t.name,
                        email: t.email,
                        groupId: e.data._id
                    }, t._id)))
                }) : null]
            }) : (0, a.jsx)("div", {
                style: {
                    height: 160
                }
            })
        },
        P = i.default.div.attrs({
            className: "maxWidth"
        })(O || (O = N`
  padding: 40px 0px;
  flex-shrink: 0;
`)),
        z = i.default.div.attrs({
            className: "maxWidth flex vc between"
        })(k || (k = N``)),
        D = i.default.div(E || (E = N`
  height: 80px;
  width: 80px;
  border-radius: 8px;
`)),
        K = i.default.div(M || (M = N`
  font-size: 36px;
  font-weight: ${0};
`), f.FontWeights.UltraBold)
})), r.register("i5Qjx", (function(n, a) {
    e(n.exports, "SpaceContext", (function() {
        return m
    }), (function(e) {
        return m = e
    })), e(n.exports, "default", (function() {
        return g
    }), (function(e) {
        return g = e
    }));
    var o = r("fe1on"),
        i = r("jyxW7"),
        s = r("fywoC"),
        u = r("4gMdJ"),
        c = r("1eqVQ"),
        l = r("7yXSw"),
        d = r("c9Vcn"),
        f = r("5gjI2"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var a = 0;
                for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
            }
            return r
        };
    const m = s.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        h = {
            small: 8,
            middle: 16,
            large: 24
        };
    const v = e => {
        const {
            getPrefixCls: r,
            space: n,
            direction: a
        } = s.useContext(u.ConfigContext), {
            size: l = (null == n ? void 0 : n.size) || "small",
            align: v,
            className: g,
            rootClassName: x,
            children: y,
            direction: b = "horizontal",
            prefixCls: w,
            split: j,
            style: C,
            wrap: O = !1
        } = e, k = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), E = (0, c.default)(), [M, N] = s.useMemo((() => (Array.isArray(l) ? l : [l, l]).map((e => function(e) {
            return "string" == typeof e ? h[e] : e || 0
        }(e)))), [l]), S = (0, i.default)(y, {
            keepEmpty: !0
        }), P = void 0 === v && "horizontal" === b ? "center" : v, z = r("space", w), [D, K] = (0, f.default)(z), $ = t(o)(z, K, `${z}-${b}`, {
            [`${z}-rtl`]: "rtl" === a,
            [`${z}-align-${P}`]: P
        }, g, x), R = `${z}-item`, _ = "rtl" === a ? "marginLeft" : "marginRight";
        let I = 0;
        const F = S.map(((e, t) => {
                null != e && (I = t);
                const r = e && e.key || `${R}-${t}`;
                return s.createElement(d.default, {
                    className: R,
                    key: r,
                    direction: b,
                    index: t,
                    marginDirection: _,
                    split: j,
                    wrap: O
                }, e)
            })),
            A = s.useMemo((() => ({
                horizontalSize: M,
                verticalSize: N,
                latestIndex: I,
                supportFlexGap: E
            })), [M, N, I, E]);
        if (0 === S.length) return null;
        const W = {};
        return O && (W.flexWrap = "wrap", E || (W.marginBottom = -N)), E && (W.columnGap = M, W.rowGap = N), D(s.createElement("div", Object.assign({
            className: $,
            style: Object.assign(Object.assign({}, W), C)
        }, k), s.createElement(m.Provider, {
            value: A
        }, F)))
    };
    v.Compact = l.default;
    var g = v
})), r.register("1eqVQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("fywoC"),
        o = r("azMeL"),
        i = () => {
            const [e, t] = a.useState(!1);
            return a.useEffect((() => {
                t((0, o.detectFlexGapSupported)())
            }), []), e
        }
})), r.register("c9Vcn", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("fywoC"),
        o = r("i5Qjx");

    function i(e) {
        let {
            className: t,
            direction: r,
            index: n,
            marginDirection: i,
            children: s,
            split: u,
            wrap: c
        } = e;
        const {
            horizontalSize: l,
            verticalSize: d,
            latestIndex: f,
            supportFlexGap: p
        } = a.useContext(o.SpaceContext);
        let m = {};
        return p || ("vertical" === r ? n < f && (m = {
            marginBottom: l / (u ? 2 : 1)
        }) : m = Object.assign(Object.assign({}, n < f && {
            [i]: l / (u ? 2 : 1)
        }), c && {
            paddingBottom: d
        })), null == s ? null : a.createElement(a.Fragment, null, a.createElement("div", {
            className: t,
            style: m
        }, s), n < f && u && a.createElement("span", {
            className: `${t}-split`,
            style: m
        }, u))
    }
})), r.register("9g8O0", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("ewhoP"),
        s = r("dwKuN"),
        u = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "DeleteOutlined";
    var c = o.forwardRef(u)
})), r.register("ewhoP", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                }
            }]
        },
        name: "delete",
        theme: "outlined"
    }
})), r.register("83ivs", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("6tWM4"),
        s = r("dwKuN"),
        u = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "EditOutlined";
    var c = o.forwardRef(u)
})), r.register("6tWM4", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                }
            }]
        },
        name: "edit",
        theme: "outlined"
    }
})), r.register("dohZB", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("bVHCc"),
        s = r("dwKuN"),
        u = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "UsergroupAddOutlined";
    var c = o.forwardRef(u)
})), r.register("bVHCc", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"
                }
            }]
        },
        name: "usergroup-add",
        theme: "outlined"
    }
})), r.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return o
    }));
    var a = r("bd8je");
    const o = e => {
        a.history.push(e)
    }
})), r.register("kDzZQ", (function(n, a) {
    e(n.exports, "promptModal", (function() {
        return p
    }));
    var o = r("hxEiv"),
        i = r("fywoC"),
        s = r("kK88x"),
        u = r("cryu8"),
        c = r("b9Zw0"),
        l = r("fBuQJ");
    const d = i.forwardRef((({
        rules: e,
        placeholder: t,
        onPressEnter: r,
        value: n,
        autoFocus: a
    }, s) => {
        const [l] = u.default.useForm();
        return i.useEffect((() => {
            l.setFieldsValue({
                input: n
            })
        }), []), i.useImperativeHandle(s, (() => ({
            validate: () => l.validateFields().then((e => e.input))
        }))), (0, o.jsx)(u.default, {
            form: l,
            style: {
                marginTop: 3
            },
            children: (0, o.jsx)(u.default.Item, {
                name: "input",
                rules: e,
                children: (0, o.jsx)(c.default, {
                    placeholder: t,
                    onPressEnter: r,
                    autoFocus: a,
                    autoComplete: "off"
                })
            })
        })
    }));

    function f({
        rules: e,
        placeholder: t,
        modalProps: r = {},
        okText: n,
        visible: a,
        submit: s,
        close: u,
        title: c,
        value: f,
        afterClose: p,
        autoFocus: m
    }) {
        const h = i.useRef(null),
            v = async () => {
                try {
                    var e;
                    const t = await (null === (e = h.current) || void 0 === e ? void 0 : e.validate());
                    s(t)
                } catch (e) {}
            };
        return (0, o.jsx)(l.default, {
            ...r,
            open: a,
            onOk: v,
            okText: n,
            onCancel: () => u(),
            title: c,
            afterClose: p,
            children: (0, o.jsx)(d, {
                ref: h,
                rules: e,
                value: f,
                placeholder: t,
                onPressEnter: v,
                autoFocus: null == m || m
            })
        })
    }
    const p = e => new Promise(((r, n) => {
        const a = document.createElement("div");
        document.body.appendChild(a);
        const {
            onOk: i,
            ...u
        } = e;
        let c = {
            ...u,
            submit: async function(e) {
                if (i) {
                    const t = await i(e);
                    (t || void 0 === t) && l(e)
                } else l(e)
            },
            close: l,
            visible: !0
        };

        function l(e) {
            c = {
                ...c,
                visible: !1,
                afterClose: () => (e => {
                    t(s).unmountComponentAtNode(a) && a.parentNode && a.parentNode.removeChild(a), void 0 !== e ? r(e) : n(e)
                })(e)
            }, d(c)
        }

        function d(e) {
            t(s).render((0, o.jsx)(f, {
                ...e
            }), a)
        }
        d(c)
    }))
})), r.register("8lJV1", (function(t, n) {
    e(t.exports, "GroupViewInvite", (function() {
        return w
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("2FDaO"),
        i = r("lKmIF"),
        s = r("py2Xr"),
        u = r("93yIm"),
        c = r("gnAdP"),
        l = r("cy4A6"),
        d = r("i5Qjx"),
        f = r("e4KJZ"),
        p = r("kLpOI"),
        m = r("90RCV"),
        h = r("eEYFA"),
        v = r("iMOcM"),
        g = r("dYca8");
    let x, y, b = e => e;
    const w = e => {
            const t = (t = !0) => {
                (0, h.Request)({
                    url: "/api/v1/groups/invites/" + (t ? "accept" : "deny"),
                    data: {
                        inviteId: e.id
                    },
                    success: () => {
                        t && l.default.success("Student added to class!"), (0, g.invalidateGroup)(e.groupId)
                    },
                    error: e => {
                        (0, v.throwMessageError)({
                            e: e,
                            default: {
                                title: "Error replying to invite"
                            }
                        })
                    }
                })
            };
            return (0, a.jsxs)(j, {
                children: [(0, a.jsxs)("div", {
                    className: "flex vc",
                    style: {
                        background: "#6200EA",
                        color: i.default.White,
                        padding: "5px 35px"
                    },
                    children: [(0, a.jsx)(s.default, {
                        name: "far fa-exclamation-circle"
                    }), " ", (0, a.jsx)("div", {
                        style: {
                            marginLeft: "0.4em"
                        },
                        children: "Class Join Request"
                    })]
                }), (0, a.jsxs)(C, {
                    children: [(0, a.jsxs)("div", {
                        children: [(0, a.jsx)("div", {
                            children: (0, a.jsx)("b", {
                                children: e.name
                            })
                        }), (0, a.jsx)("div", {
                            children: (0, a.jsx)("i", {
                                children: e.email
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        children: (0, a.jsxs)(d.default, {
                            direction: "horizontal",
                            size: 10,
                            wrap: !0,
                            align: "center",
                            children: [(0, a.jsx)(f.default, {
                                title: "Accept",
                                children: (0, a.jsx)(u.default, {
                                    type: "dashed",
                                    style: {
                                        color: "#388E3C"
                                    },
                                    icon: (0, a.jsx)(p.default, {}),
                                    shape: "circle",
                                    onClick: () => {
                                        t(!0)
                                    }
                                })
                            }), (0, a.jsx)(c.default, {
                                menu: {
                                    items: [{
                                        key: "reject",
                                        label: "Decline request",
                                        danger: !0,
                                        onClick: () => {
                                            t(!1)
                                        }
                                    }]
                                },
                                children: (0, a.jsx)(m.default, {
                                    style: {
                                        cursor: "pointer"
                                    }
                                })
                            })]
                        })
                    })]
                })]
            })
        },
        j = o.default.div.attrs({
            className: "maxWidth light-shadow"
        })(x || (x = b`
  border-radius: 8px;
  background: ${0};
  overflow: hidden;
`), i.default.White),
        C = o.default.div.attrs({
            className: "maxWidth flex between vc"
        })(y || (y = b`
  padding: 20px 35px;
`))
})), r.register("py2Xr", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = e => (0, a.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), r.register("kLpOI", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("ayjhg"),
        s = r("dwKuN"),
        u = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "CheckOutlined";
    var c = o.forwardRef(u)
})), r.register("ayjhg", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                }
            }]
        },
        name: "check",
        theme: "outlined"
    }
})), r.register("1lwpy", (function(t, n) {
    e(t.exports, "GroupViewMembers", (function() {
        return C
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("dYca8"),
        s = r("93yIm"),
        u = r("gnAdP"),
        c = r("cy4A6"),
        l = r("fBuQJ"),
        d = r("i5Qjx"),
        f = r("26Lv9"),
        p = r("9g8O0"),
        m = r("83ivs"),
        h = r("90RCV"),
        v = r("jC9Ys"),
        g = r("kDzZQ"),
        x = r("iMOcM"),
        y = r("69SUA"),
        b = r("8j47p"),
        w = r("46bRO"),
        j = r("iROck");
    const C = e => {
        var t;
        const [r, n, C] = (0, x.useBoolean)(!1), O = o.useMemo((() => [{
            title: "Name",
            dataIndex: "name",
            key: "name"
        }, {
            title: "Email",
            dataIndex: "email",
            key: "email"
        }, {
            title: "",
            key: "actions",
            align: "right",
            render: (t, r) => {
                const n = [{
                    key: `${r._id}-rename`,
                    label: "Change name",
                    icon: (0, a.jsx)(m.default, {}),
                    onClick: t => {
                        (0, v.default)(t.domEvent), (0, g.promptModal)({
                            title: "Change name",
                            value: r.name,
                            placeholder: "Enter new name",
                            rules: [{
                                required: !0,
                                message: "Name is required"
                            }, {
                                max: 40,
                                message: "Name must be less than 40 characters"
                            }],
                            onOk: async t => {
                                await (0, x.requestAsPromise)({
                                    url: "/api/v1/groups/members/rename",
                                    data: {
                                        groupMemberId: r._id,
                                        newName: t
                                    }
                                }), c.default.success("Student renamed!"), (0, i.invalidateGroup)(e.groupId)
                            }
                        })
                    }
                }, {
                    key: `${r._id}-remove`,
                    label: "Remove",
                    icon: (0, a.jsx)(p.default, {}),
                    danger: !0,
                    onClick: t => {
                        (0, v.default)(t.domEvent), l.default.confirm({
                            title: (0, a.jsxs)("div", {
                                style: {
                                    fontWeight: y.FontWeights.Normal
                                },
                                children: ["Are you sure you want to remove ", (0, a.jsx)("b", {
                                    children: r.name
                                }), " from this class?"]
                            }),
                            okText: "Yes",
                            onOk: async () => {
                                await (0, x.requestAsPromise)({
                                    url: "/api/v1/groups/members/remove",
                                    data: {
                                        groupMemberId: r._id
                                    }
                                }), c.default.success("Student removed!"), (0, i.invalidateGroup)(e.groupId)
                            }
                        })
                    }
                }];
                return (0, a.jsxs)(d.default, {
                    size: "middle",
                    children: [(0, a.jsx)(s.default, {
                        children: "View Progress"
                    }), (0, a.jsx)("div", {
                        onClick: e => e.stopPropagation(),
                        children: (0, a.jsx)(u.default, {
                            menu: {
                                items: n
                            },
                            children: (0, a.jsx)(h.default, {
                                style: {
                                    cursor: "pointer"
                                }
                            })
                        })
                    })]
                })
            }
        }]), [e.groupId]);
        return (null === (t = e.members) || void 0 === t ? void 0 : t.length) ? (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(f.default, {
                size: "large",
                dataSource: e.members.sort(((e, t) => e.name.localeCompare(t.name))),
                columns: O,
                pagination: !1,
                onRow: t => ({
                    style: {
                        cursor: "pointer"
                    },
                    onClick: () => {
                        var r;
                        r = t._id, (0, x.isUpgraded)() ? (0, j.NavigateTo)(`/class/${e.groupId}/student/${r}`) : n()
                    }
                }),
                rowKey: e => e._id
            }), (0, a.jsx)(b.default, {
                visible: r,
                close: C,
                id: "student progress",
                copy: {
                    title: "View student progress with Pro",
                    description: `To view all reports for a student in one place, upgrade to ${w.COMPANY_NAME} Pro.`
                }
            })]
        }) : null
    }
})), r.register("jC9Ys", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = e => {
        null == e || e.stopPropagation()
    }
})), r.register("1CCl5", (function(t, n) {
    e(t.exports, "GroupViewTopNavigationHeader", (function() {
        return u
    }));
    var a = r("hxEiv"),
        o = r("iE2C7"),
        i = r("py2Xr"),
        s = r("cHCps");
    const u = e => (0, a.jsx)(a.Fragment, {
        children: (0, a.jsx)(s.default, {
            includeSpacer: !0,
            children: (0, a.jsx)(o.default, {
                options: [{
                    id: "home",
                    label: "Home",
                    icon: (0, a.jsx)(i.default, {
                        name: "fas fa-home"
                    }),
                    path: `/class/${e.id}`
                }, {
                    id: "reports",
                    label: "Reports",
                    icon: (0, a.jsx)(i.default, {
                        name: "fas fa-analytics"
                    }),
                    path: `/class/${e.id}/reports`
                }]
            })
        })
    })
})), r.register("iE2C7", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("2FDaO"),
        s = r("hDWWf"),
        u = r("hSz8d"),
        c = r("5zUIN");
    let l, d, f = e => e;
    var p = e => {
        const t = o.useMemo((() => {
                var t;
                return null !== (t = e.theme) && void 0 !== t ? t : s.SiteHeaderTheme.light
            }), [e.theme]),
            r = o.useMemo((() => {
                var t;
                return null !== (t = e.alpha) && void 0 !== t ? t : u.SiteHeaderAlpha.standard
            }), [e.alpha]),
            n = o.useMemo((() => {
                const e = r === u.SiteHeaderAlpha.none ? 1 : t === s.SiteHeaderTheme.light ? .85 : .45;
                return t === s.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${e})` : `rgba(16, 16, 16, ${e})`
            }), [t, r]),
            i = o.useMemo((() => t === s.SiteHeaderTheme.light ? "rgb(235, 238, 241)" : "rgb(143 143 143 / 60%)"), [t]);
        return (0, a.jsxs)(m, {
            background: n,
            borderColor: i,
            children: [(0, a.jsxs)(h, {
                children: [(0, a.jsx)(c.default, {
                    options: e.options,
                    selectedOption: e.selectedOption,
                    theme: t
                }), (0, a.jsx)("div", {
                    children: e.rightSideContent
                })]
            }), e.bottomContent]
        })
    };
    const m = i.default.div.attrs({
            className: "maxWidth"
        })(l || (l = f`
  background: ${0};
  padding: 7px 25px;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px ${0};
`), (e => e.background), (e => e.borderColor)),
        h = i.default.div.attrs({
            className: "maxWidth flex vc between"
        })(d || (d = f``))
})), r.register("hDWWf", (function(t, r) {
    let n;
    var a;
    e(t.exports, "SiteHeaderTheme", (function() {
        return n
    })), (a = n || (n = {})).light = "light", a.dark = "dark"
})), r.register("hSz8d", (function(t, r) {
    let n;
    var a;
    e(t.exports, "SiteHeaderAlpha", (function() {
        return n
    })), (a = n || (n = {})).none = "none", a.standard = "standard", a.darker = "darker"
})), r.register("5zUIN", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("hxEiv");
    r("fywoC");
    var o = r("i5Qjx"),
        i = r("cDZyt"),
        s = r("2FDaO");
    let u;
    var c = e => (0, a.jsx)(l, {
        children: (0, a.jsx)(o.default, {
            direction: "horizontal",
            size: 8,
            wrap: !0,
            children: e.options.map((t => (0, a.jsx)(i.default, {
                option: t,
                selected: e.selectedOption === t.id,
                theme: e.theme
            }, `option-${t.id}`)))
        })
    });
    const l = s.default.div.attrs({
        className: "scroll-x"
    })(u || (u = (e => e)`
  flex: 1;
`))
})), r.register("cDZyt", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var a = r("hxEiv"),
        o = r("fywoC"),
        i = r("hDWWf"),
        s = r("2FDaO"),
        u = r("4aaLU"),
        c = r("3uz2P"),
        l = r("beXRF"),
        d = r("kyvf1");
    let f;
    var p = e => {
        const {
            theme: t,
            option: r
        } = e, {
            pathname: n
        } = (0, l.useLocation)(), {
            label: s,
            icon: f,
            path: p,
            otherMatchingPaths: h
        } = r, v = (() => {
            if (p) {
                if ((0, c.matchPath)({
                        path: p
                    }, n)) return !0;
                if ((null == h ? void 0 : h.length) && h.some((e => (0, c.matchPath)({
                        path: e
                    }, n)))) return !0
            }
            return !1
        })(), g = o.useMemo((() => !!v || e.selected), [v, e.selected]), x = o.useMemo((() => g ? "#1677ff" : "transparent"), [t, g]), y = o.useMemo((() => g ? u.default.White : t === i.SiteHeaderTheme.light ? "rgb(26, 27, 37)" : u.default.White), [t, g]), b = o.useMemo((() => g ? x : t === i.SiteHeaderTheme.light ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.1)"), [t, g, x]);
        return (0, a.jsx)(d.default, {
            to: p,
            target: e.option.target,
            onClick: r.onSelect,
            style: {
                cursor: "pointer"
            },
            children: (0, a.jsxs)(m, {
                background: x,
                color: y,
                hoverBackground: b,
                children: [f ? (0, a.jsx)("span", {
                    style: {
                        marginRight: 6,
                        fontSize: "0.9em"
                    },
                    children: f
                }) : null, s]
            })
        })
    };
    const m = s.default.div.attrs({
        className: "flex-center"
    })(f || (f = (e => e)`
  line-height: 1;
  padding: 6px 12px;
  border-radius: 50px;
  background: ${0};
  white-space: nowrap;
  color: ${0};
  font-size: 15px;
  cursor: pointer;
  transition: background 0.14s ease-in-out;
  &:hover {
    background: ${0};
  }
`), (e => e.background), (e => e.color), (e => e.hoverBackground))
})), r.register("4aaLU", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        White: "white",
        Black: "black",
        BackgroundGray: "#eeeeee",
        PrimaryBlue: "#05f",
        SecondaryPurple: "#1E076B",
        DisabledGray: "#838383",
        LightSuccessGreen: "#6abf69",
        DarkSuccessGreen: "#2e7d32"
    }
})), r.register("kyvf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("hxEiv"),
        o = r("beXRF");
    r("fywoC");
    var i = e => e.external || !e.to ? (0, a.jsx)("a", {
        href: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        onKeyPress: t => {
            e.onClick && "Enter" === t.key && (t.preventDefault(), e.onClick())
        },
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    }) : (0, a.jsx)(o.Link, {
        to: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    })
})), r.register("kuEJ4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("iI4DW"),
        o = r("fywoC"),
        i = r("4gMdJ");

    function s(e, t, r) {
        return function(n) {
            const {
                prefixCls: s,
                style: u
            } = n, c = o.useRef(null), [l, d] = o.useState(0), [f, p] = o.useState(0), [m, h] = (0, a.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: v
            } = o.useContext(i.ConfigContext), g = v(t || "select", s);
            return o.useEffect((() => {
                if (h(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            d(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var n;
                            const a = r ? `.${r(g)}` : `.${g}-dropdown`,
                                o = null === (n = c.current) || void 0 === n ? void 0 : n.querySelector(a);
                            o && (clearInterval(t), e.observe(o))
                        }), 10);
                    return () => {
                        clearInterval(t), e.disconnect()
                    }
                }
            }), []), o.createElement(i.default, {
                theme: {
                    token: {
                        motionDurationFast: "0.01s",
                        motionDurationMid: "0.01s",
                        motionDurationSlow: "0.01s"
                    }
                }
            }, o.createElement("div", {
                ref: c,
                style: {
                    paddingBottom: l,
                    position: "relative",
                    width: "fit-content",
                    minWidth: f
                }
            }, o.createElement(e, Object.assign({}, n, {
                style: Object.assign(Object.assign({}, u), {
                    margin: 0
                }),
                open: m,
                visible: m,
                getPopupContainer: () => c.current
            }))))
        }
    }
})), r.register("hacAX", (function(t, n) {
    e(t.exports, "initMoveMotion", (function() {
        return p
    }));
    var a = r("lt5sb"),
        o = r("aWAHQ");
    const i = new(0, a.Keyframes)("antMoveDownIn", {
            "0%": {
                transform: "translate3d(0, 100%, 0)",
                transformOrigin: "0 0",
                opacity: 0
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            }
        }),
        s = new(0, a.Keyframes)("antMoveDownOut", {
            "0%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            },
            "100%": {
                transform: "translate3d(0, 100%, 0)",
                transformOrigin: "0 0",
                opacity: 0
            }
        }),
        u = new(0, a.Keyframes)("antMoveLeftIn", {
            "0%": {
                transform: "translate3d(-100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            }
        }),
        c = new(0, a.Keyframes)("antMoveLeftOut", {
            "0%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            },
            "100%": {
                transform: "translate3d(-100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            }
        }),
        l = new(0, a.Keyframes)("antMoveRightIn", {
            "0%": {
                transform: "translate3d(100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            }
        }),
        d = new(0, a.Keyframes)("antMoveRightOut", {
            "0%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            },
            "100%": {
                transform: "translate3d(100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            }
        }),
        f = {
            "move-up": {
                inKeyframes: new(0, a.Keyframes)("antMoveUpIn", {
                    "0%": {
                        transform: "translate3d(0, -100%, 0)",
                        transformOrigin: "0 0",
                        opacity: 0
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                        transformOrigin: "0 0",
                        opacity: 1
                    }
                }),
                outKeyframes: new(0, a.Keyframes)("antMoveUpOut", {
                    "0%": {
                        transform: "translate3d(0, 0, 0)",
                        transformOrigin: "0 0",
                        opacity: 1
                    },
                    "100%": {
                        transform: "translate3d(0, -100%, 0)",
                        transformOrigin: "0 0",
                        opacity: 0
                    }
                })
            },
            "move-down": {
                inKeyframes: i,
                outKeyframes: s
            },
            "move-left": {
                inKeyframes: u,
                outKeyframes: c
            },
            "move-right": {
                inKeyframes: l,
                outKeyframes: d
            }
        },
        p = (e, t) => {
            const {
                antCls: r
            } = e, n = `${r}-${t}`, {
                inKeyframes: a,
                outKeyframes: i
            } = f[t];
            return [(0, o.initMotion)(n, a, i, e.motionDurationMid), {
                [`\n        ${n}-enter,\n        ${n}-appear\n      `]: {
                    opacity: 0,
                    animationTimingFunction: e.motionEaseOutCirc
                },
                [`${n}-leave`]: {
                    animationTimingFunction: e.motionEaseInOutCirc
                }
            }]
        }
})), r.register("6WS0O", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        sideMargin: 50,
        optionWidth: 200
    }
})), r.register("77qSl", (function(t, n) {
    e(t.exports, "useMediaMatch", (function() {
        return o
    }));
    var a = r("fywoC");

    function o(e) {
        if ("undefined" == typeof window) return console.warn("useMediaMatch cannot function as window is undefined."), !1;
        var t = (0, a.useMemo)((function() {
                return window.matchMedia(e)
            }), [e]),
            r = (0, a.useState)((function() {
                return t.matches
            })),
            n = r[0],
            o = r[1];
        return (0, a.useEffect)((function() {
            o(t.matches);
            var e = function(e) {
                return o(e.matches)
            };
            return t.addEventListener ? (t.addEventListener("change", e), function() {
                return t.removeEventListener("change", e)
            }) : (t.addListener(e), function() {
                return t.removeListener(e)
            })
        }), [t]), n
    }
})), r.register("3bHhZ", (function(e, t) {
    var n = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        a = e.exports && e.exports.__exportStar || function(e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), a(r("coa3i"), e.exports), a(r("exKSe"), e.exports), a(r("4Nv4f"), e.exports)
})), r.register("coa3i", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useBreakpoints = e.exports.useBreakpoint = void 0;
    var n = r("4Nv4f");
    e.exports.useBreakpoint = function(e) {
        return (0, n.useWindowSize)().width < e
    }, e.exports.useBreakpoints = function(e) {
        var t = (0, n.useWindowSize)().width;
        return e.map((function(e) {
            return t < e
        }))
    }
})), r.register("4Nv4f", (function(e, t) {
    var n = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        a = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        o = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return a(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useWindowSize = void 0;
    var i = o(r("fywoC"));

    function s() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }
    e.exports.useWindowSize = function() {
        var e = i.useState(s()),
            t = e[0],
            r = e[1];
        return i.useLayoutEffect((function() {
            function e() {
                r(s())
            }
            return window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
        }), []), t
    }
})), r.register("exKSe", (function(e, t) {
    var n = e.exports && e.exports.__assign || function() {
            return n = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }, n.apply(this, arguments)
        },
        a = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        o = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        i = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && a(t, e, r);
            return o(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useComponentSize = void 0;
    var s = i(r("fywoC"));
    e.exports.useComponentSize = function() {
        var e = s.useState({
                height: 0,
                width: 0
            }),
            t = e[0],
            r = e[1],
            a = s.useRef(),
            o = s.useCallback((function() {
                if (a.current) {
                    var e = a.current.offsetHeight,
                        n = a.current.offsetWidth;
                    e === t.height && n === t.width || r({
                        height: e,
                        width: n
                    })
                }
            }), [t.height, t.width]);
        return s.useLayoutEffect((function() {
            if (a && a.current) {
                var e = new ResizeObserver(o);
                return e.observe(a.current),
                    function() {
                        return e.disconnect()
                    }
            }
        }), [a, o]), n({
            ref: a
        }, t)
    }
})), r.register("9Vz35", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = {
        name: r("2Y5iQ").default.areaName,
        iconImage: "/client/img/header/rewards.svg"
    }
})), r.register("2Y5iQ", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        areaName: "Rewards",
        level: "Level",
        xp: "XP",
        currency: "GimBucks",
        character: "Gim",
        sticker: "Sticker",
        trail: "Trail"
    }
})), r.register("kVS28", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("4GmeK"),
        s = r("dwKuN"),
        u = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "LogoutOutlined";
    var c = o.forwardRef(u)
})), r.register("4GmeK", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"
                }
            }]
        },
        name: "logout",
        theme: "outlined"
    }
})), r.register("6gxPk", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("5D7Fe"),
        s = r("dwKuN"),
        u = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "DownOutlined";
    var c = o.forwardRef(u)
})), r.register("5D7Fe", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                }
            }]
        },
        name: "down",
        theme: "outlined"
    }
})), r.register("5AR3F", (function(n, a) {
    e(n.exports, "default", (function() {
        return v
    }));
    var o = r("2ic9V"),
        i = r("iStnv"),
        s = r("hzerz"),
        u = r("46jhs"),
        c = r("hn4Tf"),
        l = r("7NK35"),
        d = r("b1RjK"),
        f = r("17aYs"),
        p = r("fywoC"),
        m = r("fe1on"),
        h = function(e) {
            (0, d.default)(n, e);
            var r = (0, f.default)(n);

            function n(e) {
                var t;
                (0, c.default)(this, n), (t = r.call(this, e)).handleChange = function(e) {
                    var r = t.props,
                        n = r.disabled,
                        a = r.onChange;
                    n || ("checked" in t.props || t.setState({
                        checked: e.target.checked
                    }), a && a({
                        target: (0, u.default)((0, u.default)({}, t.props), {}, {
                            checked: e.target.checked
                        }),
                        stopPropagation: function() {
                            e.stopPropagation()
                        },
                        preventDefault: function() {
                            e.preventDefault()
                        },
                        nativeEvent: e.nativeEvent
                    }))
                }, t.saveInput = function(e) {
                    t.input = e
                };
                var a = "checked" in e ? e.checked : e.defaultChecked;
                return t.state = {
                    checked: a
                }, t
            }
            return (0, l.default)(n, [{
                key: "focus",
                value: function() {
                    this.input.focus()
                }
            }, {
                key: "blur",
                value: function() {
                    this.input.blur()
                }
            }, {
                key: "render",
                value: function() {
                    var e, r = this.props,
                        n = r.prefixCls,
                        a = r.className,
                        u = r.style,
                        c = r.name,
                        l = r.id,
                        d = r.type,
                        f = r.disabled,
                        h = r.readOnly,
                        v = r.tabIndex,
                        g = r.onClick,
                        x = r.onFocus,
                        y = r.onBlur,
                        b = r.onKeyDown,
                        w = r.onKeyPress,
                        j = r.onKeyUp,
                        C = r.autoFocus,
                        O = r.value,
                        k = r.required,
                        E = (0, s.default)(r, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]),
                        M = Object.keys(E).reduce((function(e, t) {
                            return "aria-" !== t.substr(0, 5) && "data-" !== t.substr(0, 5) && "role" !== t || (e[t] = E[t]), e
                        }), {}),
                        N = this.state.checked,
                        S = t(m)(n, a, (e = {}, (0, i.default)(e, "".concat(n, "-checked"), N), (0, i.default)(e, "".concat(n, "-disabled"), f), e));
                    return t(p).createElement("span", {
                        className: S,
                        style: u
                    }, t(p).createElement("input", (0, o.default)({
                        name: c,
                        id: l,
                        type: d,
                        required: k,
                        readOnly: h,
                        disabled: f,
                        tabIndex: v,
                        className: "".concat(n, "-input"),
                        checked: !!N,
                        onClick: g,
                        onFocus: x,
                        onBlur: y,
                        onKeyUp: j,
                        onKeyDown: b,
                        onKeyPress: w,
                        onChange: this.handleChange,
                        autoFocus: C,
                        ref: this.saveInput,
                        value: O
                    }, M)), t(p).createElement("span", {
                        className: "".concat(n, "-inner")
                    }))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return "checked" in e ? (0, u.default)((0, u.default)({}, t), {}, {
                        checked: e.checked
                    }) : null
                }
            }]), n
        }(p.Component);
    h.defaultProps = {
        prefixCls: "rc-checkbox",
        className: "",
        style: {},
        type: "checkbox",
        defaultChecked: !1,
        onFocus: function() {},
        onBlur: function() {},
        onChange: function() {},
        onKeyDown: function() {},
        onKeyPress: function() {},
        onKeyUp: function() {}
    };
    var v = h
})), r.register("2ic9V", (function(t, r) {
    function n() {
        return n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, n.apply(this, arguments)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("iStnv", (function(t, r) {
    function n(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("hzerz", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("cK78M");

    function o(e, t) {
        if (null == e) return {};
        var r, n, o = (0, a.default)(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
        }
        return o
    }
})), r.register("cK78M", (function(t, r) {
    function n(e, t) {
        if (null == e) return {};
        var r, n, a = {},
            o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("46jhs", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("iStnv");

    function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(r), !0).forEach((function(t) {
                (0, a.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
})), r.register("hn4Tf", (function(t, r) {
    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("7NK35", (function(t, r) {
    function n(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function a(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
    }
    e(t.exports, "default", (function() {
        return a
    }))
})), r.register("b1RjK", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("63PCo");

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && (0, a.default)(e, t)
    }
})), r.register("63PCo", (function(t, r) {
    function n(e, t) {
        return n = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, n(e, t)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("17aYs", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("bArAQ"),
        o = r("lcgmN"),
        i = r("erlXZ");

    function s(e) {
        var t = (0, o.default)();
        return function() {
            var r, n = (0, a.default)(e);
            if (t) {
                var o = (0, a.default)(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return (0, i.default)(this, r)
        }
    }
})), r.register("bArAQ", (function(t, r) {
    function n(e) {
        return n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, n(e)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("lcgmN", (function(t, r) {
    function n() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("erlXZ", (function(n, a) {
    e(n.exports, "default", (function() {
        return s
    }));
    var o = r("1eKqi"),
        i = r("cdb2f");

    function s(e, r) {
        if (r && ("object" === t(o)(r) || "function" == typeof r)) return r;
        if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
        return (0, i.default)(e)
    }
})), r.register("1eKqi", (function(e, t) {
    function r(t) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = r = function(e) {
            return typeof e
        }, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = r = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e.exports.default = e.exports, e.exports.__esModule = !0), r(t)
    }
    e.exports = r, e.exports.default = e.exports, e.exports.__esModule = !0
})), r.register("cdb2f", (function(t, r) {
    function n(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("9kZfj", (function(t, n) {
    e(t.exports, "onlyOfferAnnualUpgrade", (function() {
        return o
    }));
    var a = r("hrYih");
    const o = () => "annual-only" === a.default.getFeatureFlag("annual-only-pro")
})), r.register("aYYSA", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("5UEB4"),
        s = r("dwKuN"),
        u = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "StarOutlined";
    var c = o.forwardRef(u)
})), r.register("5UEB4", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"
                }
            }]
        },
        name: "star",
        theme: "outlined"
    }
})), r.register("56tQE", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("fywoC"),
        o = r("3KQc0"),
        i = r("9iNNJ");
    var s = (e, t) => {
        const [r, n] = a.useState((() => {
            var r, n;
            const a = e && "current" in e ? e.current : e;
            return a ? [a.offsetWidth, a.offsetHeight] : [null !== (r = null == t ? void 0 : t.initialWidth) && void 0 !== r ? r : 0, null !== (n = null == t ? void 0 : t.initialHeight) && void 0 !== n ? n : 0]
        }));
        return (0, i.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && n([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, o.default)(e, (e => {
            const t = e.target;
            n([t.offsetWidth, t.offsetHeight])
        })), r
    }
})), r.register("3KQc0", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var a = r("6rvT3"),
        o = r("9iNNJ"),
        i = r("3Yjty"),
        s = r("f1PHW");
    let u;
    const c = () => u || (u = function() {
        const e = new Map,
            t = new(0, a.default)((0, s.default)(((t, r) => {
                var n;
                if (1 === t.length) null === (n = e.get(t[0].target)) || void 0 === n || n(t[0], r);
                else
                    for (let n = 0; n < t.length; n++) {
                        var a;
                        null === (a = e.get(t[n].target)) || void 0 === a || a(t[n], r)
                    }
            })));
        return {
            observer: t,
            subscribe(r, n) {
                t.observe(r), e.set(r, n)
            },
            unsubscribe(r) {
                t.unobserve(r), e.delete(r)
            }
        }
    }());
    var l = function(e, t) {
        const r = c(),
            n = (0, i.default)(t);
        return (0, o.default)((() => {
            let t = !1;
            const a = e && "current" in e ? e.current : e;
            if (a) return r.subscribe(a, ((e, r) => {
                t || n.current(e, r)
            })), () => {
                t = !0, r.unsubscribe(a)
            }
        }), [e, r, n]), r.observer
    }
})), r.register("9iNNJ", (function(n, a) {
    e(n.exports, "default", (function() {
        return o
    }));
    var o = t(r("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), r.register("3Yjty", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("fywoC");
    var o = e => {
        const t = a.useRef(e);
        return a.useEffect((() => {
            t.current = e
        })), t
    }
})), r.register("f1PHW", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = function(e) {
        var t = [],
            r = null,
            n = function() {
                for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                t = a, r || (r = requestAnimationFrame((function() {
                    r = null, e.apply(void 0, t)
                })))
            };
        return n.cancel = function() {
            r && (cancelAnimationFrame(r), r = null)
        }, n
    }
})), r.register("eFy2j", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("fywoC");

    function o() {
        const [, e] = a.useReducer((e => e + 1), 0);
        return e
    }
})), r.register("gJKjM", (function(n, a) {
    e(n.exports, "responsiveArray", (function() {
        return s
    })), e(n.exports, "default", (function() {
        return u
    }));
    var o = r("fywoC"),
        i = r("2tfup");
    const s = ["xxl", "xl", "lg", "md", "sm", "xs"];

    function u() {
        const [, e] = (0, i.useToken)(), r = (e => ({
            xs: `(max-width: ${e.screenXSMax}px)`,
            sm: `(min-width: ${e.screenSM}px)`,
            md: `(min-width: ${e.screenMD}px)`,
            lg: `(min-width: ${e.screenLG}px)`,
            xl: `(min-width: ${e.screenXL}px)`,
            xxl: `(min-width: ${e.screenXXL}px)`
        }))((e => {
            const t = e,
                r = [].concat(s).reverse();
            return r.forEach(((e, n) => {
                const a = e.toUpperCase(),
                    o = `screen${a}Min`,
                    i = `screen${a}`;
                if (!(t[o] <= t[i])) throw new Error(`${o}<=${i} fails : !(${t[o]}<=${t[i]})`);
                if (n < r.length - 1) {
                    const e = `screen${a}Max`;
                    if (!(t[i] <= t[e])) throw new Error(`${i}<=${e} fails : !(${t[i]}<=${t[e]})`);
                    const o = `screen${r[n+1].toUpperCase()}Min`;
                    if (!(t[e] <= t[o])) throw new Error(`${e}<=${o} fails : !(${t[e]}<=${t[o]})`)
                }
            })), e
        })(e));
        return t(o).useMemo((() => {
            const e = new Map;
            let t = -1,
                n = {};
            return {
                matchHandlers: {},
                dispatch: t => (n = t, e.forEach((e => e(n))), e.size >= 1),
                subscribe(r) {
                    return e.size || this.register(), t += 1, e.set(t, r), r(n), t
                },
                unsubscribe(t) {
                    e.delete(t), e.size || this.unregister()
                },
                unregister() {
                    Object.keys(r).forEach((e => {
                        const t = r[e],
                            n = this.matchHandlers[t];
                        null == n || n.mql.removeListener(null == n ? void 0 : n.listener)
                    })), e.clear()
                },
                register() {
                    Object.keys(r).forEach((e => {
                        const t = r[e],
                            a = t => {
                                let {
                                    matches: r
                                } = t;
                                this.dispatch(Object.assign(Object.assign({}, n), {
                                    [e]: r
                                }))
                            },
                            o = window.matchMedia(t);
                        o.addListener(a), this.matchHandlers[t] = {
                            mql: o,
                            listener: a
                        }, a(o)
                    }))
                },
                responsiveMap: r
            }
        }), [e])
    }
})), r.register("bmTnW", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.lazyWithPreload = void 0;
    var n = r("fywoC");

    function a(e) {
        var t, r, a = (0, n.lazy)(e),
            o = (0, n.forwardRef)((function(e, r) {
                var o = (0, n.useRef)(null != t ? t : a);
                return (0, n.createElement)(o.current, Object.assign(r ? {
                    ref: r
                } : {}, e))
            }));
        return o.preload = function() {
            return r || (r = e().then((function(e) {
                return t = e.default
            }))), r
        }, o
    }
    e.exports.lazyWithPreload = a, e.exports.default = a
})), r.register("exbzb", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        o = r("fywoC"),
        i = r("8N8s4"),
        s = r("dwKuN"),
        u = function(e, t) {
            return o.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "QuestionCircleOutlined";
    var c = o.forwardRef(u)
})), r.register("8N8s4", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            }, {
                tag: "path",
                attrs: {
                    d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
                }
            }]
        },
        name: "question-circle",
        theme: "outlined"
    }
}));