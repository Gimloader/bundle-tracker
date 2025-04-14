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
n.register("hm1OC", (function(t, r) {
    var o;
    o = t.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return v
    }));
    var a = n("hxEiv"),
        i = n("fywoC"),
        s = n("fBwf1"),
        l = n("jIVjI"),
        c = n("2FDaO"),
        u = n("jFKgv"),
        d = n("jWQfa"),
        f = n("iMOcM"),
        p = n("9XhDS"),
        g = n("lJSKF"),
        h = n("cHCps");
    let m;
    var v = () => (i.useEffect((() => {
        const e = (0, f.getUrlVariable)("tab");
        e && e === p.default.billing && (l.default.navigation.currentTab = p.default.billing)
    }), []), (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(s.default.Provider, {
            value: l.default,
            children: (0, a.jsxs)(g.default, {
                className: "flex-column",
                children: [(0, a.jsx)(h.default, {}), (0, a.jsxs)(y, {
                    children: [(0, a.jsx)(u.default, {}), (0, a.jsx)(d.default, {})]
                })]
            })
        }), (0, a.jsx)(f.Title, {
            title: "Settings"
        })]
    }));
    const y = c.default.div.attrs({
        className: "flex"
    })(m || (m = (e => e)`
  flex: 1;
  overflow: hidden;
`))
})), n.register("jFKgv", (function(t, r) {
    e(t.exports, "default", (function() {
        return C
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("2FDaO"),
        s = n("lKmIF"),
        l = n("lpEVe"),
        c = n("fBwf1"),
        u = n("9XhDS"),
        d = n("iMOcM"),
        f = n("dv9KL"),
        p = n("5WQCk"),
        g = n("exbzb"),
        h = n("6k5Wv"),
        m = n("kyvf1"),
        v = n("b1oE9"),
        y = n("69SUA"),
        x = n("aYjbz"),
        b = n("hFybW");
    let w, j, S = e => e;
    var C = (0, l.observer)((() => {
        const {
            navigation: e
        } = a.useContext(c.default), t = t => e.currentTab === t, n = t => e.currentTab = t, r = !(0, d.isStudent)();
        return (0, o.jsxs)(k, {
            children: [(0, o.jsx)(x.default, {}), (0, o.jsx)(b.default, {
                title: (0, d.isStudent)() ? "General Settings" : "Account Information",
                icon: h.default,
                onClick: () => n(u.default.accountInformation),
                selected: t(u.default.accountInformation)
            }), !(0, d.isStudent)() && (0, o.jsx)(b.default, {
                title: "Game Settings",
                icon: p.default,
                onClick: () => n(u.default.gameSettings),
                selected: t(u.default.gameSettings)
            }), r && (0, o.jsx)(b.default, {
                title: "Plan & Billing",
                icon: f.default,
                selected: t(u.default.billing),
                onClick: () => n(u.default.billing)
            }), !(0, d.isStudent)() && (0, o.jsx)(b.default, {
                title: "Help & Support",
                icon: g.default,
                selected: t(u.default.support),
                onClick: () => n(u.default.support)
            }), (0, d.isStudent)() ? null : (0, o.jsxs)(E, {
                children: ["Looking to manage a group license?", (0, o.jsx)("br", {}), (0, o.jsx)("br", {}), "We moved license management to a dedicated page:", (0, o.jsx)("br", {}), (0, o.jsx)("br", {}), (0, o.jsxs)(m.default, {
                    to: v.GROUP_DASHBOARD,
                    style: {
                        fontWeight: y.FontWeights.Bold
                    },
                    children: [(0, d.getDomain)(), "/groups"]
                })]
            })]
        })
    }));
    const k = i.default.div.attrs({
            className: "scroll-y"
        })(w || (w = S`
  height: 100%;
  width: 320px;
  border-right: 1px solid ${0};
`), s.default.BorderGray),
        E = i.default.div(j || (j = S`
  padding: 20px 15px;
  background: rgba(0, 0, 0, 0.07);
  font-size: 12px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 22px;
  width: 84%;
`))
})), n.register("5WQCk", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("wzfg8"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "PlayCircleOutlined";
    var c = a.forwardRef(l)
})), n.register("wzfg8", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
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
                    d: "M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"
                }
            }]
        },
        name: "play-circle",
        theme: "outlined"
    }
})), n.register("exbzb", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("8N8s4"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "QuestionCircleOutlined";
    var c = a.forwardRef(l)
})), n.register("8N8s4", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
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
})), n.register("6k5Wv", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("bjlWa"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "UserOutlined";
    var c = a.forwardRef(l)
})), n.register("bjlWa", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
                }
            }]
        },
        name: "user",
        theme: "outlined"
    }
})), n.register("kyvf1", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("hxEiv"),
        a = n("beXRF");
    n("fywoC");
    var i = e => e.external || !e.to ? (0, o.jsx)("a", {
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
    }) : (0, o.jsx)(a.Link, {
        to: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    })
})), n.register("hFybW", (function(t, r) {
    e(t.exports, "default", (function() {
        return y
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("2FDaO"),
        s = n("lKmIF"),
        l = n("69SUA");
    let c, u, d, f = e => e;
    const p = "#1890FF",
        g = i.default.div(c || (c = f`
  width: 100%;
  box-sizing: border-box;
  font-family: ${0};
  margin-top: 4px;
  margin-bottom: 4px;
  height: 40px;
  display: flex;
  cursor: pointer;
  font-size: ${0}px;
  align-items: center;
  padding-left: 24px;
  padding-right: 16px;
  background: ${0};
  color: ${0};
  ${0}
  transition: all 0.25s;
  &:hover {
    color: ${0};
  }
`), l.Fonts.SFPro, 14, (e => e.selected && !e.blockBackground ? "#E5F7FE" : s.default.White), (e => e.selected ? p : "rgba(0,0,0,.65)"), (e => e.selected && !e.blockStripe && "border-right: 3px solid " + p + ";"), p),
        h = i.default.div.attrs({
            className: "flex vc maxWidth"
        })(u || (u = f``)),
        m = i.default.div(d || (d = f``));
    class v extends a.Component {
        render() {
            const {
                title: e,
                onClick: t,
                selected: n,
                blockStripe: r,
                blockBackground: a
            } = this.props, i = this.props.icon;
            return (0, o.jsxs)(g, {
                selected: n,
                blockStripe: r,
                blockBackground: a,
                onClick: t,
                className: this.props.className,
                ...this.props.style,
                children: [i ? (0, o.jsx)(i, {
                    style: {
                        fontSize: 14,
                        marginRight: 10
                    },
                    theme: this.props.customIconColor ? "twoTone" : "outlined",
                    twoToneColor: this.props.customIconColor || ""
                }) : null, (0, o.jsxs)(h, {
                    children: [(0, o.jsx)(m, {
                        children: e
                    }), this.props.customRightComponent ? this.props.customRightComponent : null]
                })]
            })
        }
    }
    var y = v
})), n.register("jWQfa", (function(t, r) {
    e(t.exports, "default", (function() {
        return y
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("2FDaO"),
        s = n("j5hiB"),
        l = n("69SUA"),
        c = n("lKmIF"),
        u = n("lpEVe"),
        d = n("fBwf1"),
        f = n("9XhDS"),
        p = n("1rwOd"),
        g = n("fDrJ5"),
        h = n("jj5oh"),
        m = n("aYjbz");
    let v;
    var y = (0, u.observer)((() => {
        const {
            navigation: e
        } = a.useContext(d.default);
        return (0, o.jsxs)(x, {
            children: [(0, o.jsx)(m.default, {}), (() => {
                const {
                    currentTab: t
                } = e;
                return t === f.default.accountInformation ? (0, o.jsx)(s.default, {}) : t === f.default.gameSettings ? (0, o.jsx)(p.default, {}) : t === f.default.billing ? (0, o.jsx)(g.default, {}) : t === f.default.support ? (0, o.jsx)(h.default, {}) : null
            })()]
        })
    }));
    const x = i.default.div.attrs({
        className: "scroll"
    })(v || (v = (e => e)`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  font-family: ${0};
  color: ${0};
`), l.Fonts.SFPro, c.default.Black)
})), n.register("j5hiB", (function(t, r) {
    e(t.exports, "default", (function() {
        return m
    }));
    var o = n("hxEiv");
    n("fywoC");
    var a = n("2FDaO"),
        i = n("69SUA"),
        s = n("7ECC6"),
        l = n("fFg10"),
        c = n("lKmIF"),
        u = n("4JSj3"),
        d = n("iSrZy"),
        f = n("lO0ye"),
        p = n("iMOcM");
    let g;
    const h = e => (0, o.jsx)(s.default, {
        style: {
            fontFamily: i.Fonts.SFPro,
            color: c.default.Black,
            marginBottom: 20
        },
        ...e
    });
    var m = () => (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(v, {
                children: "👋 Name"
            }), (0, o.jsx)(h, {
                children: (0, o.jsx)(l.default, {})
            }), (0, o.jsx)(v, {
                children: "🔑 Authentication"
            }), (0, o.jsx)(h, {
                children: (0, o.jsx)(u.default, {})
            }), !(0, p.isStudent)() && (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(v, {
                    children: "🏫 School"
                }), (0, o.jsx)(h, {
                    children: (0, o.jsx)(f.default, {})
                })]
            })]
        }), (0, o.jsx)(v, {
            children: (0, p.isStudent)() ? "⌨️ Manage" : "🔒 Account"
        }), (0, o.jsx)(h, {
            children: (0, o.jsx)(d.default, {})
        })]
    });
    const v = a.default.div(g || (g = (e => e)`
  font-size: 30px;
  font-weight: ${0};
  margin-bottom: 5px;
`), i.FontWeights.UltraBold)
})), n.register("fFg10", (function(t, r) {
    e(t.exports, "Description", (function() {
        return y
    })), e(t.exports, "default", (function() {
        return m
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("2FDaO"),
        s = n("69SUA"),
        l = n("b9Zw0"),
        c = n("8IHxU"),
        u = n("g4NpA"),
        d = n("dEUk2"),
        f = n("iMOcM");
    let p, g, h = e => e;
    var m = () => {
        const [e, t] = a.useState((0, f.getUser)().firstName), [n, r] = a.useState((0, f.getUser)().lastName), i = (0, f.isStudent)() && (0, f.getUser)().lastName.length < 2 ? "Last Initial" : "Last Name", s = (0, f.isStudent)() && (0, f.getUser)().lastName.length < 2 ? 1 : d.MAX_LENGTH_LAST_NAME;
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)(v, {
                children: [(0, o.jsx)(y, {
                    children: "First Name"
                }), (0, o.jsx)(l.default, {
                    onBlur: () => {
                        e && (0, c.default)({
                            changes: [{
                                key: u.informationTypes.firstName,
                                value: e
                            }]
                        })
                    },
                    onChange: e => t(e.target.value),
                    value: e,
                    maxLength: d.MAX_LENGTH_FIRST_NAME
                })]
            }), (0, o.jsxs)(v, {
                children: [(0, o.jsx)(y, {
                    children: i
                }), (0, o.jsx)(l.default, {
                    onBlur: () => {
                        n && (0, c.default)({
                            changes: [{
                                key: u.informationTypes.lastName,
                                value: n
                            }]
                        })
                    },
                    onChange: e => r(e.target.value),
                    value: n,
                    maxLength: s
                })]
            })]
        })
    };
    const v = i.default.div(p || (p = h`
  margin-bottom: 8px;
`)),
        y = i.default.div(g || (g = h`
  font-weight: ${0};
  font-size: 18px;
`), s.FontWeights.Bold)
})), n.register("8IHxU", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("iMOcM"),
        a = n("bGoag");
    var i = e => {
        (0, o.request)({
            url: "/api/users/update-information",
            method: "post",
            data: {
                changes: e.changes
            },
            success: t => {
                e.onSuccess && e.onSuccess(t), (0, a.default)({})
            },
            error: t => {
                e.onError && e.onError(t)
            }
        })
    }
})), n.register("g4NpA", (function(t, r) {
    e(t.exports, "informationTypes", (function() {
        return i
    })), e(t.exports, "default", (function() {
        return C
    }));
    var o = n("kHqmx"),
        a = n("4MuSt");
    const i = {
            email: "EMAIL",
            password: "PASSWORD",
            accountPassword: "ACCOUNT_PASSWORD",
            firstName: "FIRST_NAME",
            lastName: "LAST_NAME",
            accountType: "ACCOUNT_TYPE",
            country: "COUNTRY",
            areaOfExpertise: "AREA_OF_EXPERTISE",
            gradeLevel: "GRADE_LEVEL",
            organization: "ORGANIZATION",
            acceptedLatestPolicies: "ACCEPTED_LATEST_POLICIES",
            schoolId: "SCHOOL_ID",
            districtId: "DISTRICT_ID"
        },
        s = {
            userExists: !1,
            email: "",
            accountType: null,
            googleToken: "",
            firstName: "",
            lastName: "",
            password: "",
            schoolId: "",
            districtId: "",
            country: "",
            areaOfExpertise: "",
            gradeLevel: "",
            organization: "",
            acceptsLatestPolicies: !1,
            authenticated: !1
        },
        {
            userExists: l,
            email: c,
            accountType: u,
            googleToken: d,
            firstName: f,
            lastName: p,
            password: g,
            schoolId: h,
            districtId: m,
            country: v,
            areaOfExpertise: y,
            gradeLevel: x,
            organization: b,
            acceptsLatestPolicies: w,
            authenticated: j
        } = s;
    class S {
        constructor() {
            this.userExists = l, this.email = c, this.accountType = u, this.googleToken = d, this.firstName = f, this.lastName = p, this.password = g, this.schoolId = h, this.districtId = m, this.country = v, this.areaOfExpertise = y, this.gradeLevel = x, this.organization = b, this.acceptsLatestPolicies = w, this.authenticated = j, this.informationNeeded = a.observable.array([i.email]), this.reset = () => {
                Object.keys(s).forEach((e => this[e] = s[e])), this.informationNeeded.replace([i.email])
            }, (0, a.makeObservable)(this)
        }
    }(0, o.__decorate)([a.observable], S.prototype, "userExists", void 0), (0, o.__decorate)([a.observable], S.prototype, "email", void 0), (0, o.__decorate)([a.observable], S.prototype, "accountType", void 0), (0, o.__decorate)([a.observable], S.prototype, "googleToken", void 0), (0, o.__decorate)([a.observable], S.prototype, "firstName", void 0), (0, o.__decorate)([a.observable], S.prototype, "lastName", void 0), (0, o.__decorate)([a.observable], S.prototype, "password", void 0), (0, o.__decorate)([a.observable], S.prototype, "schoolId", void 0), (0, o.__decorate)([a.observable], S.prototype, "districtId", void 0), (0, o.__decorate)([a.observable], S.prototype, "country", void 0), (0, o.__decorate)([a.observable], S.prototype, "areaOfExpertise", void 0), (0, o.__decorate)([a.observable], S.prototype, "gradeLevel", void 0), (0, o.__decorate)([a.observable], S.prototype, "organization", void 0), (0, o.__decorate)([a.observable], S.prototype, "acceptsLatestPolicies", void 0), (0, o.__decorate)([a.observable], S.prototype, "authenticated", void 0), (0, o.__decorate)([a.observable], S.prototype, "informationNeeded", void 0), (0, o.__decorate)([a.action], S.prototype, "reset", void 0);
    var C = S
})), n.register("dEUk2", (function(t, r) {
    e(t.exports, "MAX_LENGTH_FIRST_NAME", (function() {
        return h
    })), e(t.exports, "MAX_LENGTH_LAST_NAME", (function() {
        return m
    })), e(t.exports, "Title", (function() {
        return v
    })), e(t.exports, "default", (function() {
        return x
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("bcnSK"),
        s = n("69SUA"),
        l = n("lKmIF"),
        c = n("fC6cp"),
        u = n("b9Zw0"),
        d = n("7abSH"),
        f = n("g4NpA"),
        p = n("lLJEv"),
        g = n("9BRL0");
    const h = 20,
        m = 25,
        v = e => (0, o.jsx)("div", {
            style: {
                fontFamily: s.Fonts.SFPro,
                fontWeight: s.FontWeights.Bold,
                color: l.default.Black,
                fontSize: 18
            },
            children: e.children
        }),
        y = {
            width: "100%",
            display: "flex",
            marginTop: 0,
            minHeight: 0
        };
    var x = () => {
        const {
            login: e
        } = a.useContext(i.default), [t, n] = a.useState(e.firstName), [r, s] = a.useState(e.lastName), [l, x] = a.useState(e.password), b = () => {
            let n = !0;
            return e.informationNeeded.includes(f.informationTypes.firstName) && (t || (n = !1)), e.informationNeeded.includes(f.informationTypes.lastName) && (r || (n = !1)), e.informationNeeded.includes(f.informationTypes.accountPassword) && (!l || l.length < 6) && (n = !1), n
        }, w = () => {
            b() && (t && (e.firstName = t), r && (e.lastName = r), l && (e.password = l), e.informationNeeded.replace(e.informationNeeded.filter((e => e !== f.informationTypes.firstName && e !== f.informationTypes.lastName && e !== f.informationTypes.accountPassword))))
        }, j = e.accountType === g.default.student;
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(v, {
                children: "First Name"
            }), (0, o.jsx)(u.default, {
                maxLength: h,
                style: y,
                size: "large",
                placeholder: "First Name here...",
                onChange: e => n(e.target.value),
                onPressEnter: w,
                autoFocus: !0
            }), (0, o.jsx)("div", {
                style: {
                    height: 10
                }
            }), (0, o.jsxs)(v, {
                children: ["Last ", j ? "Initial" : "Name"]
            }), (0, o.jsx)(u.default, {
                maxLength: j ? 1 : m,
                style: y,
                size: "large",
                placeholder: `Last ${j?"Initial":"Name"} here...`,
                onChange: e => s(e.target.value),
                onPressEnter: w
            }), e.informationNeeded.includes(f.informationTypes.accountPassword) && (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(c.default, {}), (0, o.jsx)(v, {
                    children: "Password"
                }), (0, o.jsx)("div", {
                    style: {
                        fontSize: 12,
                        marginTop: -5,
                        marginBottom: 4
                    },
                    children: "Must contain at least 6 characters"
                }), (0, o.jsx)(u.default.Password, {
                    style: y,
                    onChange: e => x(e.target.value),
                    placeholder: "Password here...",
                    size: "large",
                    maxLength: 96,
                    onPressEnter: w
                })]
            }), (0, o.jsx)(c.default, {}), (0, o.jsx)(d.default, {
                disabled: !b(),
                onClick: w,
                style: {
                    width: "100%"
                },
                size: "large",
                children: "Continue"
            }), (0, o.jsx)("div", {
                style: {
                    height: 10
                }
            }), !j && (0, o.jsx)(p.default, {
                link: "https://www.notion.so/gimkit/First-Last-Name-8983e473b6bb4450aaf2f413702cc061"
            })]
        })
    }
})), n.register("bcnSK", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("fywoC"),
        a = n("bSGy0");
    var i = o.createContext(a.default)
})), n.register("bSGy0", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("g4NpA"),
        a = n("lvpm8");
    var i = {
        login: new(0, o.default),
        navigation: new(0, a.default)
    }
})), n.register("lvpm8", (function(t, r) {
    e(t.exports, "default", (function() {
        return y
    }));
    var o = n("kHqmx"),
        a = n("4MuSt");
    const i = {
            currentStage: n("9ZLc2").default.email,
            emailSignInBlocked: !1,
            creatingAccount: !1,
            loggingIn: !1,
            updatingAccountInformation: !1,
            loginError: null,
            redirectUri: "",
            classJoiningId: "",
            classJoiningName: "",
            classJoiningTeacherName: ""
        },
        {
            currentStage: s,
            emailSignInBlocked: l,
            creatingAccount: c,
            loggingIn: u,
            updatingAccountInformation: d,
            loginError: f,
            redirectUri: p,
            classJoiningId: g,
            classJoiningName: h,
            classJoiningTeacherName: m
        } = i;
    class v {
        constructor() {
            this.currentStage = s, this.emailSignInBlocked = l, this.creatingAccount = c, this.loggingIn = u, this.updatingAccountInformation = d, this.loginError = f, this.redirectUri = p, this.classJoiningId = g, this.classJoiningName = h, this.classJoiningTeacherName = m, this.reset = () => {
                Object.keys(i).forEach((e => this[e] = i[e]))
            }, (0, a.makeObservable)(this)
        }
    }(0, o.__decorate)([a.observable], v.prototype, "currentStage", void 0), (0, o.__decorate)([a.observable], v.prototype, "emailSignInBlocked", void 0), (0, o.__decorate)([a.observable], v.prototype, "creatingAccount", void 0), (0, o.__decorate)([a.observable], v.prototype, "loggingIn", void 0), (0, o.__decorate)([a.observable], v.prototype, "updatingAccountInformation", void 0), (0, o.__decorate)([a.observable], v.prototype, "loginError", void 0), (0, o.__decorate)([a.observable], v.prototype, "redirectUri", void 0), (0, o.__decorate)([a.observable], v.prototype, "classJoiningId", void 0), (0, o.__decorate)([a.observable], v.prototype, "classJoiningName", void 0), (0, o.__decorate)([a.observable], v.prototype, "classJoiningTeacherName", void 0), (0, o.__decorate)([a.action], v.prototype, "reset", void 0);
    var y = v
})), n.register("9ZLc2", (function(t, n) {
    let r;
    var o;
    e(t.exports, "default", (function() {
        return a
    })), (o = r || (r = {})).email = "email", o.password = "password", o.accountType = "accountType", o.studentSpecificInfo = "studentSpecificInfo", o.nameAndPassword = "nameAndPassword", o.school = "school", o.educatorSpecificInfo = "educatorSpecificInfo", o.nonSchoolSpecificInfo = "nonSchoolSpecificInfo", o.acceptPolicies = "acceptPolicies", o.verifyClass = "verifyClass";
    var a = r
})), n.register("7abSH", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = n("hxEiv");
    n("fywoC");
    var a = n("lpEVe"),
        i = n("93yIm");
    var s = (0, a.observer)((e => (0, o.jsx)(i.default, {
        disabled: e.disabled,
        size: e.size || "middle",
        type: "primary",
        onClick: e.onClick,
        style: Object.assign({
            width: "100%"
        }, e.style),
        loading: e.loading,
        children: e.children
    })))
})), n.register("lLJEv", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("hxEiv");
    n("fywoC");
    var a = n("bNqCy");
    var i = e => (0, o.jsxs)("div", {
        style: {
            justifyContent: "space-between"
        },
        className: "flex maxWidth",
        children: [(0, o.jsx)("div", {}), (0, o.jsx)(a.default, {
            link: e.link
        })]
    })
})), n.register("bNqCy", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = n("hxEiv");
    n("fywoC");
    var a = n("d55E8"),
        i = n("93yIm"),
        s = n("e4KJZ");
    var l = e => (0, o.jsx)(s.default, {
        title: "Learn more on why we collect this data",
        children: (0, o.jsx)(i.default, {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            shape: "circle",
            icon: (0, o.jsx)(a.default, {}),
            href: e.link || "",
            target: "_blank"
        })
    })
})), n.register("d55E8", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("l6faa"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "LockOutlined";
    var c = a.forwardRef(l)
})), n.register("l6faa", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"
                }
            }]
        },
        name: "lock",
        theme: "outlined"
    }
})), n.register("9BRL0", (function(t, n) {
    let r;
    var o;
    e(t.exports, "default", (function() {
        return a
    })), (o = r || (r = {})).educator = "educator", o.student = "student", o.guardian = "guardian", o.nonSchool = "nonSchool";
    var a = r
})), n.register("4JSj3", (function(t, r) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("b9Zw0"),
        s = n("fBuQJ"),
        l = n("fFg10"),
        c = n("ha6eO"),
        u = n("54fdb"),
        d = n("iMOcM"),
        f = n("kyvf1");
    var p = () => {
        const [e, t] = a.useState((0, d.getUser)().email), [n, r] = a.useState(!1), [p, g] = a.useState(!1), h = () => r(!n), m = (0, d.getUser)().passwordless;
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(l.Description, {
                children: "Email"
            }), (0, o.jsx)(i.default, {
                readOnly: !0,
                value: e,
                onFocus: h
            }), (0, o.jsxs)("div", {
                style: {
                    justifyContent: "space-between"
                },
                className: "maxWidth flex",
                children: [(0, o.jsx)("div", {}), (0, o.jsx)(f.default, {
                    style: {
                        marginTop: 9,
                        fontSize: 14
                    },
                    onClick: () => g(!0),
                    children: m ? "Add password" : "Change password"
                })]
            }), n && (0, o.jsx)(c.default, {
                onEmailChange: e => {
                    s.default.success({
                        title: "Email changed!",
                        content: `Email changed to "${e}"`
                    }), t(e), r(!1)
                },
                close: h
            }), (0, o.jsx)(u.default, {
                open: p,
                close: () => g(!1),
                defaultEmail: (0, d.getUser)().email
            })]
        })
    }
})), n.register("ha6eO", (function(t, r) {
    e(t.exports, "default", (function() {
        return v
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("93yIm"),
        s = n("b9Zw0"),
        l = n("fBuQJ"),
        c = n("69SUA"),
        u = n("dknAM"),
        d = n("lKmIF"),
        f = n("da8gK"),
        p = n("iMOcM"),
        g = n("bGoag");
    let h;
    var m;
    (m = h || (h = {})).newEmail = "newEmail", m.code = "code";
    var v = e => {
        const [t, n] = a.useState(h.newEmail), [r, m] = a.useState(""), [v, y] = a.useState(!1), [x, b] = a.useState(!1), [w, j] = a.useState(""), [S, C] = a.useState(""), [k, E] = a.useState(null), O = e => m(e.target.value.toLowerCase()), N = r && (0, u.validateEmail)(r) && r !== (0, p.getUser)().email, F = () => {
            N && (y(!0), (0, p.request)({
                url: "/api/users/register/email-info",
                method: "post",
                data: {
                    email: r
                },
                success: e => {
                    e.accountExists ? (E(`Account already exists with email "${r}"`), y(!1)) : (0, p.request)({
                        url: "/api/users/requestEmailChange",
                        method: "post",
                        data: {
                            emailToChangeTo: r
                        },
                        success: e => {
                            j(e.encryptedToken), n(h.code)
                        },
                        error: e => E(e),
                        both: () => y(!1)
                    })
                },
                error: () => y(!1)
            }))
        }, T = e => C(e.target.value), I = !!S, M = () => {
            I && (b(!0), (0, p.request)({
                url: "/api/users/changeEmail",
                method: "post",
                data: {
                    changeToken: w,
                    encryptCode: S
                },
                success: () => {
                    (0, g.default)({
                        onSuccess: () => e.onEmailChange(r)
                    })
                },
                error: e => E(e),
                both: () => b(!1)
            }))
        };
        return (0, o.jsxs)(l.default, {
            style: {
                fontFamily: c.Fonts.SFPro,
                color: d.default.Black
            },
            footer: null,
            open: !0,
            onCancel: e.close,
            closable: !0,
            children: [t === h.newEmail ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)("div", {
                    style: {
                        fontWeight: c.FontWeights.UltraBold,
                        fontSize: 31
                    },
                    children: "New Account Email"
                }), (0, o.jsx)(s.default, {
                    onChange: O,
                    placeholder: "please-do-not-ice-me@gimkit.com",
                    size: "large",
                    value: r,
                    autoFocus: !0,
                    onPressEnter: F,
                    maxLength: 256
                }), (0, o.jsx)(i.default, {
                    type: "primary",
                    disabled: !N,
                    style: {
                        width: "100%",
                        marginTop: 7
                    },
                    size: "large",
                    onClick: F,
                    loading: v,
                    children: "Continue"
                })]
            }) : t === h.code ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)("div", {
                    style: {
                        fontWeight: c.FontWeights.UltraBold,
                        fontSize: 31
                    },
                    children: "Enter Code"
                }), (0, o.jsxs)("div", {
                    style: {
                        marginBottom: 9
                    },
                    children: ["A code was just sent to ", (0, o.jsx)("b", {
                        children: r
                    }), ". Please check that email and enter it here. The code expires in 30 minutes."]
                }), (0, o.jsx)(s.default, {
                    onChange: T,
                    placeholder: "Enter code here...",
                    size: "large",
                    value: S,
                    autoFocus: !0,
                    onPressEnter: M
                }), (0, o.jsx)(i.default, {
                    type: "primary",
                    disabled: !I,
                    style: {
                        width: "100%",
                        marginTop: 7
                    },
                    size: "large",
                    onClick: M,
                    loading: x,
                    children: "Submit"
                })]
            }) : null, (0, o.jsx)(f.default, {
                error: k,
                style: {
                    marginTop: 10
                }
            })]
        })
    }
})), n.register("da8gK", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("hxEiv");
    n("fywoC");
    var a = n("bfV0l");
    var i = e => e.error ? (0, o.jsx)(a.default, {
        message: "Error",
        style: e.style,
        type: "error",
        description: e.error && e.error.message && e.error.message.text ? e.error.message.text : "string" == typeof e.error ? e.error : "Unknown Error. Please try again.",
        showIcon: !0
    }) : null
})), n.register("iSrZy", (function(t, r) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = n("hxEiv");
    n("fywoC");
    var a = n("6fFlL"),
        i = n("69SUA"),
        s = n("6a0ds"),
        l = n("fC6cp"),
        c = n("fBuQJ"),
        u = n("iMOcM"),
        d = n("kyvf1"),
        f = n("b1oE9");
    var p = () => {
        const e = e => {
                (0, u.request)({
                    url: "/api/user/reset-account-type",
                    success: () => {
                        (0, u.request)({
                            url: "/logout",
                            both: () => {
                                c.default.success({
                                    title: "One more thing!",
                                    content: `When you log back in, choose "${e}" as your role.`,
                                    onOk: () => {
                                        window.location.href = f.LOGIN
                                    }
                                })
                            }
                        })
                    }
                })
            },
            t = (0, u.getUser)();
        let n = [];
        var r;
        return n.push(["Account Email", t.email]), n.push(["Account Type", (r = t.accountType, r === a.default.educator ? "Educator" : r === a.default.student ? "Student" : r === a.default.guardian ? "Parent/Guardian" : r === a.default.nonSchool ? "Other" : "")]), (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("div", {
                style: {
                    fontSize: 22,
                    fontWeight: i.FontWeights.Bold
                },
                children: "Account Information"
            }), (0, o.jsxs)("div", {
                className: "flex maxWidth between",
                style: {
                    alignItems: "flex-end"
                },
                children: [(0, o.jsx)("div", {
                    style: {
                        marginTop: 10
                    },
                    children: n.map((e => (0, o.jsxs)("div", {
                        children: [(0, o.jsxs)("b", {
                            children: [e[0], ":"]
                        }), " ", e[1]]
                    }, e[0])))
                }), (0, o.jsx)("div", {
                    children: (0, o.jsxs)(d.default, {
                        onClick: () => {
                            (0, u.isStudent)() ? c.default.confirm({
                                title: "Are you sure you want to switch to an educator account?",
                                content: "Doing so will remove you from all your current classes.",
                                okText: "Yes",
                                onOk: () => e("Educator")
                            }): c.default.confirm({
                                title: "Are you sure you want to switch to a student account?",
                                content: "Many educator features are not available with student accounts.",
                                okText: "Yes",
                                onOk: () => e("Student")
                            })
                        },
                        children: ["Switch to ", (0, u.isStudent)() ? "educator" : "student", " account"]
                    })
                })]
            }), (0, o.jsx)(l.default, {}), (0, o.jsx)("div", {
                children: (0, o.jsxs)(s.default, {
                    children: [(0, o.jsx)(s.default.Panel, {
                        header: "Support",
                        children: (0, o.jsx)(d.default, {
                            onClick: () => (0, u.request)({
                                url: "/api/user/request-info",
                                success: e => {
                                    c.default.info({
                                        title: "Information",
                                        content: (0, o.jsx)("div", {
                                            children: Object.keys(e).map((t => (0, o.jsxs)("div", {
                                                children: [(0, o.jsx)("span", {
                                                    style: {
                                                        fontWeight: i.FontWeights.Bold
                                                    },
                                                    children: t
                                                }), ":", " ", e[t], (0, o.jsx)("br", {})]
                                            }, `info-item-${t}`)))
                                        })
                                    })
                                }
                            }),
                            children: "Information Gimkit has collected on me"
                        })
                    }, "support"), (0, o.jsx)(s.default.Panel, {
                        header: "Danger Zone",
                        children: (0, o.jsx)(d.default, {
                            to: f.DELETE_ACCOUNT,
                            children: "Delete my account"
                        })
                    }, "danger")]
                })
            })]
        })
    }
})), n.register("6a0ds", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var o = n("e5nzn").default
})), n.register("e5nzn", (function(r, o) {
    e(r.exports, "default", (function() {
        return y
    }));
    var a = n("Rl1bs"),
        i = n("fe1on"),
        s = n("d4wNM"),
        l = n("fywoC"),
        c = n("jyxW7"),
        u = n("8mdco"),
        d = n("4gMdJ"),
        f = n("8pkwz"),
        p = n("aNsvV"),
        g = n("3Ocec"),
        h = n("3EOzF"),
        m = n("a8mFs");
    const v = l.forwardRef(((e, n) => {
        const {
            getPrefixCls: r,
            direction: o
        } = l.useContext(d.ConfigContext), h = l.useContext(g.default), {
            prefixCls: v,
            className: y,
            rootClassName: x,
            bordered: b = !0,
            ghost: w,
            size: j,
            expandIconPosition: S = "start"
        } = e, C = j || h || "middle", k = r("collapse", v), E = r(), [O, N] = (0, m.default)(k), F = l.useMemo((() => "left" === S ? "start" : "right" === S ? "end" : S), [S]), T = t(i)(`${k}-icon-position-${F}`, {
            [`${k}-borderless`]: !b,
            [`${k}-rtl`]: "rtl" === o,
            [`${k}-ghost`]: !!w,
            [`${k}-${C}`]: "middle" !== C
        }, y, x, N), I = Object.assign(Object.assign({}, (0, f.default)(E)), {
            motionAppear: !1,
            leavedClassName: `${k}-content-hidden`
        });
        return O(l.createElement(s.default, Object.assign({
            ref: n,
            openMotion: I
        }, (0, u.default)(e, ["rootClassName"]), {
            expandIcon: function() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const {
                    expandIcon: r
                } = e, o = r ? r(n) : l.createElement(a.default, {
                    rotate: n.isActive ? 90 : void 0
                });
                return (0, p.cloneElement)(o, (() => ({
                    className: t(i)(o.props.className, `${k}-arrow`)
                })))
            },
            prefixCls: k,
            className: T
        }), (() => {
            const {
                children: t
            } = e;
            return (0, c.default)(t).map(((e, t) => {
                var n;
                if (null === (n = e.props) || void 0 === n ? void 0 : n.disabled) {
                    const n = e.key || String(t),
                        {
                            disabled: r,
                            collapsible: o
                        } = e.props,
                        a = Object.assign(Object.assign({}, (0, u.default)(e.props, ["disabled"])), {
                            key: n,
                            collapsible: null != o ? o : r ? "disabled" : void 0
                        });
                    return (0, p.cloneElement)(e, a)
                }
                return e
            }))
        })()))
    }));
    var y = Object.assign(v, {
        Panel: h.default
    })
})), n.register("d4wNM", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = n("fFuf8"),
        a = o.default;
    o.default.Panel
})), n.register("fFuf8", (function(r, o) {
    e(r.exports, "default", (function() {
        return h
    }));
    var a = n("8gTvA"),
        i = n("2n8Yx"),
        s = n("k1uZX"),
        l = n("fe1on"),
        c = n("jyxW7"),
        u = n("iI4DW"),
        d = n("fywoC"),
        f = n("j98f0");

    function p(e) {
        var t = e;
        if (!Array.isArray(t)) {
            var n = (0, s.default)(t);
            t = "number" === n || "string" === n ? [t] : []
        }
        return t.map((function(e) {
            return String(e)
        }))
    }
    var g = t(d).forwardRef((function(e, n) {
            var r = e.prefixCls,
                o = void 0 === r ? "rc-collapse" : r,
                s = e.destroyInactivePanel,
                f = void 0 !== s && s,
                g = e.style,
                h = e.accordion,
                m = e.className,
                v = e.children,
                y = e.collapsible,
                x = e.openMotion,
                b = e.expandIcon,
                w = e.activeKey,
                j = e.defaultActiveKey,
                S = e.onChange,
                C = t(l)(o, m),
                k = (0, u.default)([], {
                    value: w,
                    onChange: function(e) {
                        return null == S ? void 0 : S(e)
                    },
                    defaultValue: j,
                    postState: p
                }),
                E = (0, a.default)(k, 2),
                O = E[0],
                N = E[1],
                F = (0, c.default)(v).map((function(e, n) {
                    if (!e) return null;
                    var r = e.key || String(n),
                        a = e.props,
                        s = a.header,
                        l = a.headerClass,
                        c = a.destroyInactivePanel,
                        u = a.collapsible,
                        p = a.onItemClick,
                        g = !1;
                    g = h ? O[0] === r : O.indexOf(r) > -1;
                    var m = null != u ? u : y,
                        v = {
                            key: r,
                            panelKey: r,
                            header: s,
                            headerClass: l,
                            isActive: g,
                            prefixCls: o,
                            destroyInactivePanel: null != c ? c : f,
                            openMotion: x,
                            accordion: h,
                            children: e.props.children,
                            onItemClick: function(e) {
                                "disabled" !== m && (! function(e) {
                                    N((function() {
                                        return h ? O[0] === e ? [] : [e] : O.indexOf(e) > -1 ? O.filter((function(t) {
                                            return t !== e
                                        })) : [].concat((0, i.default)(O), [e])
                                    }))
                                }(e), null == p || p(e))
                            },
                            expandIcon: b,
                            collapsible: m
                        };
                    return "string" == typeof e.type ? e : (Object.keys(v).forEach((function(e) {
                        void 0 === v[e] && delete v[e]
                    })), t(d).cloneElement(e, v))
                }));
            return t(d).createElement("div", {
                ref: n,
                className: C,
                style: g,
                role: h ? "tablist" : void 0
            }, F)
        })),
        h = Object.assign(g, {
            Panel: f.default
        })
})), n.register("8gTvA", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = n("LZ7o3"),
        a = n("imxTP"),
        i = n("1cSOU"),
        s = n("f9nfF");

    function l(e, t) {
        return (0, o.default)(e) || (0, a.default)(e, t) || (0, i.default)(e, t) || (0, s.default)()
    }
})), n.register("LZ7o3", (function(t, n) {
    function r(e) {
        if (Array.isArray(e)) return e
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("imxTP", (function(t, n) {
    function r(e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
            var r, o, a = [],
                i = !0,
                s = !1;
            try {
                for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
            } catch (e) {
                s = !0, o = e
            } finally {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
            return a
        }
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("1cSOU", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = n("cHUYg");

    function a(e, t) {
        if (e) {
            if ("string" == typeof e) return (0, o.default)(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0, o.default)(e, t) : void 0
        }
    }
})), n.register("cHUYg", (function(t, n) {
    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("f9nfF", (function(t, n) {
    function r() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("2n8Yx", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = n("enYSm"),
        a = n("4FKhC"),
        i = n("1cSOU"),
        s = n("lrNGt");

    function l(e) {
        return (0, o.default)(e) || (0, a.default)(e) || (0, i.default)(e) || (0, s.default)()
    }
})), n.register("enYSm", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = n("cHUYg");

    function a(e) {
        if (Array.isArray(e)) return (0, o.default)(e)
    }
})), n.register("4FKhC", (function(t, n) {
    function r(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("lrNGt", (function(t, n) {
    function r() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("k1uZX", (function(t, n) {
    function r(e) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, r(e)
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("j98f0", (function(r, o) {
    e(r.exports, "default", (function() {
        return g
    }));
    var a = n("7ZLyl"),
        i = n("u4MvJ"),
        s = n("ebAg8"),
        l = n("fe1on"),
        c = n("3I4IM"),
        u = n("l9yjv"),
        d = n("fywoC"),
        f = n("1KHbm"),
        p = ["showArrow", "headerClass", "isActive", "onItemClick", "forceRender", "className", "prefixCls", "collapsible", "accordion", "panelKey", "extra", "header", "expandIcon", "openMotion", "destroyInactivePanel", "children"],
        g = t(d).forwardRef((function(e, n) {
            var r, o, g = e.showArrow,
                h = void 0 === g || g,
                m = e.headerClass,
                v = e.isActive,
                y = e.onItemClick,
                x = e.forceRender,
                b = e.className,
                w = e.prefixCls,
                j = e.collapsible,
                S = e.accordion,
                C = e.panelKey,
                k = e.extra,
                E = e.header,
                O = e.expandIcon,
                N = e.openMotion,
                F = e.destroyInactivePanel,
                T = e.children,
                I = (0, s.default)(e, p),
                M = "disabled" === j,
                P = "header" === j,
                A = "icon" === j,
                z = null != k && "boolean" != typeof k,
                B = function() {
                    null == y || y(C)
                },
                L = "function" == typeof O ? O(e) : t(d).createElement("i", {
                    className: "arrow"
                });
            L && (L = t(d).createElement("div", {
                className: "".concat(w, "-expand-icon"),
                onClick: ["header", "icon"].includes(j) ? B : void 0
            }, L));
            var _ = t(l)((r = {}, (0, a.default)(r, "".concat(w, "-item"), !0), (0, a.default)(r, "".concat(w, "-item-active"), v), (0, a.default)(r, "".concat(w, "-item-disabled"), M), r), b),
                $ = {
                    className: t(l)((o = {}, (0, a.default)(o, "".concat(w, "-header"), !0), (0, a.default)(o, "headerClass", m), (0, a.default)(o, "".concat(w, "-header-collapsible-only"), P), (0, a.default)(o, "".concat(w, "-icon-collapsible-only"), A), o)),
                    "aria-expanded": v,
                    "aria-disabled": M,
                    onKeyPress: function(e) {
                        "Enter" !== e.key && e.keyCode !== u.default.ENTER && e.which !== u.default.ENTER || B()
                    }
                };
            return P || A || ($.onClick = B, $.role = S ? "tab" : "button", $.tabIndex = M ? -1 : 0), t(d).createElement("div", (0, i.default)({}, I, {
                ref: n,
                className: _
            }), t(d).createElement("div", $, h && L, t(d).createElement("span", {
                className: "".concat(w, "-header-text"),
                onClick: "header" === j ? B : void 0
            }, E), z && t(d).createElement("div", {
                className: "".concat(w, "-extra")
            }, k)), t(d).createElement(c.default, (0, i.default)({
                visible: v,
                leavedClassName: "".concat(w, "-content-hidden")
            }, N, {
                forceRender: x,
                removeOnLeave: F
            }), (function(e, n) {
                var r = e.className,
                    o = e.style;
                return t(d).createElement(f.default, {
                    ref: n,
                    prefixCls: w,
                    className: r,
                    style: o,
                    isActive: v,
                    forceRender: x,
                    role: S ? "tabpanel" : void 0
                }, T)
            })))
        }))
})), n.register("7ZLyl", (function(t, n) {
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("u4MvJ", (function(t, n) {
    function r() {
        return r = Object.assign || function(e) {
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
})), n.register("ebAg8", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = n("iYOH2");

    function a(e, t) {
        if (null == e) return {};
        var n, r, a = (0, o.default)(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
    }
})), n.register("iYOH2", (function(t, n) {
    function r(e, t) {
        if (null == e) return {};
        var n, r, o = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("1KHbm", (function(r, o) {
    e(r.exports, "default", (function() {
        return u
    }));
    var a = n("7ZLyl"),
        i = n("8gTvA"),
        s = n("fe1on"),
        l = n("fywoC"),
        c = t(l).forwardRef((function(e, n) {
            var r, o = e.prefixCls,
                c = e.forceRender,
                u = e.className,
                d = e.style,
                f = e.children,
                p = e.isActive,
                g = e.role,
                h = t(l).useState(p || c),
                m = (0, i.default)(h, 2),
                v = m[0],
                y = m[1];
            return t(l).useEffect((function() {
                (c || p) && y(!0)
            }), [c, p]), v ? t(l).createElement("div", {
                ref: n,
                className: t(s)("".concat(o, "-content"), (r = {}, (0, a.default)(r, "".concat(o, "-content-active"), p), (0, a.default)(r, "".concat(o, "-content-inactive"), !p), r), u),
                style: d,
                role: g
            }, t(l).createElement("div", {
                className: "".concat(o, "-content-box")
            }, f)) : null
        }));
    c.displayName = "PanelContent";
    var u = c
})), n.register("3EOzF", (function(r, o) {
    e(r.exports, "default", (function() {
        return c
    }));
    var a = n("fe1on"),
        i = n("d4wNM"),
        s = n("fywoC"),
        l = n("4gMdJ");
    var c = s.forwardRef(((e, n) => {
        const {
            getPrefixCls: r
        } = s.useContext(l.ConfigContext), {
            prefixCls: o,
            className: c = "",
            showArrow: u = !0
        } = e, d = r("collapse", o), f = t(a)({
            [`${d}-no-arrow`]: !u
        }, c);
        return s.createElement(i.default.Panel, Object.assign({
            ref: n
        }, e, {
            prefixCls: d,
            className: f
        }))
    }))
})), n.register("a8mFs", (function(t, r) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = n("lQguf"),
        a = n("huF4L"),
        i = n("1QMe3"),
        s = n("kCC5O");
    const l = e => {
            const {
                componentCls: t,
                collapseContentBg: n,
                padding: r,
                collapseContentPaddingHorizontal: o,
                collapseHeaderBg: a,
                collapseHeaderPadding: i,
                collapseHeaderPaddingSM: l,
                collapseHeaderPaddingLG: c,
                collapsePanelBorderRadius: u,
                lineWidth: d,
                lineType: f,
                colorBorder: p,
                colorText: g,
                colorTextHeading: h,
                colorTextDisabled: m,
                fontSize: v,
                fontSizeLG: y,
                lineHeight: x,
                marginSM: b,
                paddingSM: w,
                paddingLG: j,
                motionDurationSlow: S,
                fontSizeIcon: C
            } = e, k = `${d}px ${f} ${p}`;
            return {
                [t]: Object.assign(Object.assign({}, (0, s.resetComponent)(e)), {
                    backgroundColor: a,
                    border: k,
                    borderBottom: 0,
                    borderRadius: `${u}px`,
                    "&-rtl": {
                        direction: "rtl"
                    },
                    [`& > ${t}-item`]: {
                        borderBottom: k,
                        "&:last-child": {
                            [`\n            &,\n            & > ${t}-header`]: {
                                borderRadius: `0 0 ${u}px ${u}px`
                            }
                        },
                        [`> ${t}-header`]: {
                            position: "relative",
                            display: "flex",
                            flexWrap: "nowrap",
                            alignItems: "flex-start",
                            padding: i,
                            color: h,
                            lineHeight: x,
                            cursor: "pointer",
                            transition: `all ${S}, visibility 0s`,
                            [`> ${t}-header-text`]: {
                                flex: "auto"
                            },
                            "&:focus": {
                                outline: "none"
                            },
                            [`${t}-expand-icon`]: {
                                height: v * x,
                                display: "flex",
                                alignItems: "center",
                                paddingInlineEnd: b
                            },
                            [`${t}-arrow`]: Object.assign(Object.assign({}, (0, s.resetIcon)()), {
                                fontSize: C,
                                svg: {
                                    transition: `transform ${S}`
                                }
                            }),
                            [`${t}-header-text`]: {
                                marginInlineEnd: "auto"
                            }
                        },
                        [`${t}-header-collapsible-only`]: {
                            cursor: "default",
                            [`${t}-header-text`]: {
                                flex: "none",
                                cursor: "pointer"
                            }
                        },
                        [`${t}-icon-collapsible-only`]: {
                            cursor: "default",
                            [`${t}-expand-icon`]: {
                                cursor: "pointer"
                            }
                        },
                        [`&${t}-no-arrow`]: {
                            [`> ${t}-header`]: {
                                paddingInlineStart: w
                            }
                        }
                    },
                    [`${t}-content`]: {
                        color: g,
                        backgroundColor: n,
                        borderTop: k,
                        [`& > ${t}-content-box`]: {
                            padding: `${r}px ${o}px`
                        },
                        "&-hidden": {
                            display: "none"
                        }
                    },
                    "&-small": {
                        [`> ${t}-item`]: {
                            [`> ${t}-header`]: {
                                padding: l
                            },
                            [`> ${t}-content > ${t}-content-box`]: {
                                padding: w
                            }
                        }
                    },
                    "&-large": {
                        [`> ${t}-item`]: {
                            fontSize: y,
                            [`> ${t}-header`]: {
                                padding: c,
                                [`> ${t}-expand-icon`]: {
                                    height: y * x
                                }
                            },
                            [`> ${t}-content > ${t}-content-box`]: {
                                padding: j
                            }
                        }
                    },
                    [`${t}-item:last-child`]: {
                        [`> ${t}-content`]: {
                            borderRadius: `0 0 ${u}px ${u}px`
                        }
                    },
                    [`& ${t}-item-disabled > ${t}-header`]: {
                        "\n          &,\n          & > .arrow\n        ": {
                            color: m,
                            cursor: "not-allowed"
                        }
                    },
                    [`&${t}-icon-position-end`]: {
                        [`& > ${t}-item`]: {
                            [`> ${t}-header`]: {
                                [`${t}-expand-icon`]: {
                                    order: 1,
                                    paddingInlineEnd: 0,
                                    paddingInlineStart: b
                                }
                            }
                        }
                    }
                })
            }
        },
        c = e => {
            const {
                componentCls: t
            } = e;
            return {
                [`${t}-rtl`]: {
                    [`> ${t}-item > ${t}-header ${t}-arrow svg`]: {
                        transform: "rotate(180deg)"
                    }
                }
            }
        },
        u = e => {
            const {
                componentCls: t,
                collapseHeaderBg: n,
                paddingXXS: r,
                colorBorder: o
            } = e;
            return {
                [`${t}-borderless`]: {
                    backgroundColor: n,
                    border: 0,
                    [`> ${t}-item`]: {
                        borderBottom: `1px solid ${o}`
                    },
                    [`\n        > ${t}-item:last-child,\n        > ${t}-item:last-child ${t}-header\n      `]: {
                        borderRadius: 0
                    },
                    [`> ${t}-item:last-child`]: {
                        borderBottom: 0
                    },
                    [`> ${t}-item > ${t}-content`]: {
                        backgroundColor: "transparent",
                        borderTop: 0
                    },
                    [`> ${t}-item > ${t}-content > ${t}-content-box`]: {
                        paddingTop: r
                    }
                }
            }
        },
        d = e => {
            const {
                componentCls: t,
                paddingSM: n
            } = e;
            return {
                [`${t}-ghost`]: {
                    backgroundColor: "transparent",
                    border: 0,
                    [`> ${t}-item`]: {
                        borderBottom: 0,
                        [`> ${t}-content`]: {
                            backgroundColor: "transparent",
                            border: 0,
                            [`> ${t}-content-box`]: {
                                paddingBlock: n
                            }
                        }
                    }
                }
            }
        };
    var f = (0, a.default)("Collapse", (e => {
        const t = (0, i.merge)(e, {
            collapseContentBg: e.colorBgContainer,
            collapseHeaderBg: e.colorFillAlter,
            collapseHeaderPadding: `${e.paddingSM}px ${e.padding}px`,
            collapseHeaderPaddingSM: `${e.paddingXS}px ${e.paddingSM}px`,
            collapseHeaderPaddingLG: `${e.padding}px ${e.paddingLG}px`,
            collapsePanelBorderRadius: e.borderRadiusLG,
            collapseContentPaddingHorizontal: 16
        });
        return [l(t), u(t), d(t), c(t), (0, o.default)(t)]
    }))
})), n.register("lO0ye", (function(t, r) {
    e(t.exports, "default", (function() {
        return g
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("iMOcM"),
        s = n("fC6cp"),
        l = n("fBuQJ"),
        c = n("bGoag"),
        u = n("kyvf1"),
        d = n("69SUA"),
        f = n("a6ojy"),
        p = n("7jANd");
    var g = (0, n("lpEVe").observer)((() => {
        var e;
        const [t, n] = a.useState(!1), r = e => {
            (0, i.request)({
                url: "/api/user/update-school",
                data: {
                    schoolDiggerId: null == e ? void 0 : e.schoolid
                },
                success: () => {
                    n(!1), (0, c.default)({
                        onSuccess: () => {
                            (0, i.deleteRequestCache)(f.LIBRARY_CACHE_KEY)
                        }
                    })
                },
                error: () => {
                    (0, i.throwMessageError)({
                        default: {
                            title: "An error ocurred while trying to update your school",
                            content: "Please try again later or contact support"
                        }
                    })
                }
            })
        }, g = null === (e = (0, i.getUser)()) || void 0 === e ? void 0 : e.schoolName;
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)("div", {
                style: {
                    fontSize: 18
                },
                children: [(0, o.jsx)("span", {
                    style: {
                        fontWeight: d.FontWeights.Bold
                    },
                    children: "School:"
                }), " ", g || "None"]
            }), (0, o.jsx)(s.default, {
                style: {
                    margin: "12px 0px"
                }
            }), (0, o.jsxs)("div", {
                className: "maxWidth flex",
                style: {
                    justifyContent: "space-between",
                    fontSize: 14
                },
                children: [(0, o.jsxs)(u.default, {
                    onClick: () => {
                        n(!0)
                    },
                    children: [g ? "Change" : "Add", " school"]
                }), g && (0, o.jsx)(u.default, {
                    onClick: () => {
                        l.default.confirm({
                            title: "Are you sure you want to unenroll from your current school?",
                            cancelText: "No",
                            okText: "Yes",
                            onOk: () => r(null)
                        })
                    },
                    children: "Unenroll from school"
                })]
            }), (0, o.jsx)(p.default, {
                visible: t,
                close: () => n(!1),
                selectSchool: r
            })]
        })
    }))
})), n.register("7jANd", (function(t, r) {
    e(t.exports, "default", (function() {
        return x
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("jNBFu"),
        s = n("bfV0l"),
        l = n("fC6cp"),
        c = n("9xElQ"),
        u = n("b9Zw0"),
        d = n("fBuQJ"),
        f = n("lKmIF"),
        p = n("69SUA"),
        g = n("2FDaO"),
        h = n("iMOcM"),
        m = n("sgWtV"),
        v = n("6UYrI");
    let y;
    var x = e => {
        const {
            visible: t,
            close: n
        } = e, [r, i] = a.useState(null), [f, p] = a.useState(!1), [g, y] = a.useState([]);
        return (0, o.jsxs)(c.default, {
            open: t,
            onClose: n,
            placement: "left",
            width: 560,
            closable: !0,
            drawerStyle: {
                height: "100%",
                overflowY: "auto",
                scrollbarWidth: "none"
            },
            children: [(0, o.jsx)(w, {
                children: "School search"
            }), (0, o.jsx)(s.default, {
                type: "info",
                showIcon: !0,
                banner: !0,
                style: {
                    width: "100%"
                },
                message: "We currently only support schools in the US."
            }), (0, o.jsx)(l.default, {}), (0, o.jsx)(u.default.Search, {
                placeholder: "Zip Code",
                onSearch: () => {
                    r && (5 === String(r).length ? (p(!0), (0, h.request)({
                        url: "/api/users/fetch-schools",
                        method: "post",
                        data: {
                            zipCode: r
                        },
                        success: e => {
                            e && e.schoolList && e.schoolList.length ? y(e.schoolList) : (0, m.throwError)({
                                title: "No schools found for this zip code."
                            })
                        },
                        error: e => {
                            (0, m.throwError)({
                                title: "An error occurred while searching for your school",
                                content: "Please try again later"
                            })
                        },
                        both: () => {
                            p(!1)
                        }
                    })) : d.default.warning({
                        title: "Please enter a 5 digit zip code"
                    }))
                },
                size: "large",
                enterButton: "Search",
                autoFocus: !0,
                style: {
                    flex: 1
                },
                maxLength: 5,
                loading: f,
                value: r,
                onChange: e => {
                    const t = e.target.value;
                    i(t)
                }
            }), (0, o.jsx)("div", {
                style: {
                    marginTop: 25
                }
            }), g && g.length ? (0, o.jsx)(o.Fragment, {
                children: g.map((t => (0, o.jsx)(v.default, {
                    name: t.schoolName,
                    description: `${t.address.city}, ${t.address.stateFull}`,
                    onSelect: () => e.selectSchool(t)
                }, t.schoolid)))
            }) : (0, o.jsx)(b, {})]
        })
    };
    const b = () => (0, o.jsxs)("div", {
            className: "flex hc vc flex-column",
            style: {
                color: f.default.Black,
                marginTop: 10
            },
            children: [(0, o.jsx)(i.default, {
                style: {
                    fontSize: 50,
                    marginBottom: 5
                }
            }), (0, o.jsx)("div", {
                style: {
                    fontSize: 15,
                    textAlign: "center"
                },
                children: "Enter your school's zip code above!"
            })]
        }),
        w = g.default.div(y || (y = (e => e)`
  font-weight: ${0};
  font-size: 42px;
  color: ${0};
  line-height: 1;
  margin-bottom: 10px;
`), p.FontWeights.UltraBold, f.default.Black)
})), n.register("6UYrI", (function(t, r) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = n("hxEiv");
    n("fywoC");
    var a = n("7ECC6"),
        i = n("69SUA"),
        s = n("lKmIF");
    var l = e => (0, o.jsx)(a.default, {
        hoverable: !0,
        style: {
            marginBottom: 10
        },
        onClick: e.onSelect,
        children: (0, o.jsxs)("div", {
            style: {
                fontFamily: i.Fonts.SFPro,
                color: s.default.Black
            },
            children: [(0, o.jsx)("div", {
                style: {
                    fontSize: 18,
                    fontWeight: i.FontWeights.Bold
                },
                children: e.name
            }), (0, o.jsx)("div", {
                style: {
                    fontSize: 14
                },
                children: e.description
            })]
        })
    })
})), n.register("1rwOd", (function(t, r) {
    e(t.exports, "Setting", (function() {
        return y
    })), e(t.exports, "default", (function() {
        return x
    }));
    var o = n("hxEiv");
    n("fywoC");
    var a = n("2FDaO"),
        i = n("69SUA"),
        s = n("7ECC6"),
        l = n("i5Qjx"),
        c = n("lKmIF"),
        u = n("jeoGE"),
        d = n("4BedU"),
        f = n("iMOcM"),
        p = n("azS2v"),
        g = n("4sWGN");
    let h, m, v = e => e;
    const y = e => (0, o.jsx)(s.default, {
        style: {
            fontFamily: i.Fonts.SFPro,
            color: c.default.Black
        },
        children: (0, o.jsxs)("div", {
            className: "maxWidth flex vc between",
            children: [(0, o.jsxs)("div", {
                style: {
                    marginRight: 40
                },
                children: [(0, o.jsx)(b, {
                    children: e.title
                }), (0, o.jsx)(w, {
                    children: e.description
                })]
            }), (0, o.jsx)("div", {
                children: e.children
            })]
        })
    });
    var x = () => {
        const [e, t] = (0, f.useBoolean)(!1);
        return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)(l.default, {
                direction: "vertical",
                size: 10,
                className: "maxWidth",
                children: [(0, o.jsx)(p.default, {}), (0, o.jsx)(g.default, {}), (0, o.jsx)(u.default, {}), (0, o.jsx)(d.Language, {}), (0, o.jsx)(d.GoogleTranslate, {})]
            })
        })
    };
    const b = a.default.div(h || (h = v`
  font-weight: ${0};
  font-size: 18px;
`), i.FontWeights.UltraBold),
        w = a.default.div(m || (m = v`
  font-size: 14px;
`))
})), n.register("i5Qjx", (function(r, o) {
    e(r.exports, "SpaceContext", (function() {
        return g
    }), (function(e) {
        return g = e
    })), e(r.exports, "default", (function() {
        return v
    }), (function(e) {
        return v = e
    }));
    var a = n("fe1on"),
        i = n("jyxW7"),
        s = n("fywoC"),
        l = n("4gMdJ"),
        c = n("1eqVQ"),
        u = n("7yXSw"),
        d = n("c9Vcn"),
        f = n("5gjI2"),
        p = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        };
    const g = s.createContext({
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
    const m = e => {
        const {
            getPrefixCls: n,
            space: r,
            direction: o
        } = s.useContext(l.ConfigContext), {
            size: u = (null == r ? void 0 : r.size) || "small",
            align: m,
            className: v,
            rootClassName: y,
            children: x,
            direction: b = "horizontal",
            prefixCls: w,
            split: j,
            style: S,
            wrap: C = !1
        } = e, k = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), E = (0, c.default)(), [O, N] = s.useMemo((() => (Array.isArray(u) ? u : [u, u]).map((e => function(e) {
            return "string" == typeof e ? h[e] : e || 0
        }(e)))), [u]), F = (0, i.default)(x, {
            keepEmpty: !0
        }), T = void 0 === m && "horizontal" === b ? "center" : m, I = n("space", w), [M, P] = (0, f.default)(I), A = t(a)(I, P, `${I}-${b}`, {
            [`${I}-rtl`]: "rtl" === o,
            [`${I}-align-${T}`]: T
        }, v, y), z = `${I}-item`, B = "rtl" === o ? "marginLeft" : "marginRight";
        let L = 0;
        const _ = F.map(((e, t) => {
                null != e && (L = t);
                const n = e && e.key || `${z}-${t}`;
                return s.createElement(d.default, {
                    className: z,
                    key: n,
                    direction: b,
                    index: t,
                    marginDirection: B,
                    split: j,
                    wrap: C
                }, e)
            })),
            $ = s.useMemo((() => ({
                horizontalSize: O,
                verticalSize: N,
                latestIndex: L,
                supportFlexGap: E
            })), [O, N, L, E]);
        if (0 === F.length) return null;
        const D = {};
        return C && (D.flexWrap = "wrap", E || (D.marginBottom = -N)), E && (D.columnGap = O, D.rowGap = N), M(s.createElement("div", Object.assign({
            className: A,
            style: Object.assign(Object.assign({}, D), S)
        }, k), s.createElement(g.Provider, {
            value: $
        }, _)))
    };
    m.Compact = u.default;
    var v = m
})), n.register("1eqVQ", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("fywoC"),
        a = n("azMeL"),
        i = () => {
            const [e, t] = o.useState(!1);
            return o.useEffect((() => {
                t((0, a.detectFlexGapSupported)())
            }), []), e
        }
})), n.register("c9Vcn", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("fywoC"),
        a = n("i5Qjx");

    function i(e) {
        let {
            className: t,
            direction: n,
            index: r,
            marginDirection: i,
            children: s,
            split: l,
            wrap: c
        } = e;
        const {
            horizontalSize: u,
            verticalSize: d,
            latestIndex: f,
            supportFlexGap: p
        } = o.useContext(a.SpaceContext);
        let g = {};
        return p || ("vertical" === n ? r < f && (g = {
            marginBottom: u / (l ? 2 : 1)
        }) : g = Object.assign(Object.assign({}, r < f && {
            [i]: u / (l ? 2 : 1)
        }), c && {
            paddingBottom: d
        })), null == s ? null : o.createElement(o.Fragment, null, o.createElement("div", {
            className: t,
            style: g
        }, s), r < f && l && o.createElement("span", {
            className: `${t}-split`,
            style: g
        }, l))
    }
})), n.register("jeoGE", (function(t, r) {
    e(t.exports, "default", (function() {
        return d
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("5mRwo"),
        s = n("1rwOd"),
        l = n("lqzWa");
    const {
        Option: c
    } = l.default, u = ["$", "€", "¥", "£", "X̶", "₩"];
    var d = () => {
        const [e, t] = a.useState(localStorage.getItem(i.LocalStorageNames.currency) || "$");
        return (0, o.jsx)(s.Setting, {
            title: "Currency",
            description: "Currency to be used while playing Gimkit (non-2D modes)",
            children: (0, o.jsx)(l.default, {
                value: e,
                style: {
                    width: 200
                },
                onChange: e => {
                    localStorage.setItem(i.LocalStorageNames.currency, e), t(e)
                },
                children: u.map((e => (0, o.jsx)(c, {
                    value: e,
                    children: e
                }, e)))
            })
        })
    }
})), n.register("5mRwo", (function(t, n) {
    let r;
    var o;
    let a;
    var i;
    e(t.exports, "LocalStorageNames", (function() {
        return a
    })), (o = r || (r = {})).time = "time", o.target = "target", o.race = "race", o.allIn = "allIn", (i = a || (a = {})).language = "gimkit-3.0-game-language", i.currency = "gimkit-game-currency", i.music = "gimkit-music-track", i.allowGoogleTranslate = "gimkit-google-translate-allowed", i.editorDefaultLanguage = "gimkit-editor-v4-default-language", i.editorDefaultGradeLevel = "gimkit-editor-v4-default-grade-level", i.editorDefaultSubject = "gimkit-editor-v4-default-subject", i.cosmosBlockedInGame = "gimkit-cosmos-blocked-in-game", i.hookSavedOptions = "gimkit-hook-saved-options"
})), n.register("4BedU", (function(t, r) {
    e(t.exports, "Language", (function() {
        return p
    })), e(t.exports, "GoogleTranslate", (function() {
        return g
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("1rwOd"),
        s = n("7c9vD"),
        l = n("lqzWa"),
        c = n("l89Zc"),
        u = n("5mRwo");
    const {
        Option: d
    } = l.default, f = (0, s.getListOfLanguages)(), p = () => {
        const [e, t] = a.useState((0, s.getLanguageName)(localStorage.getItem(u.LocalStorageNames.language)) || "English");
        return (0, o.jsx)(i.Setting, {
            title: "Language",
            description: "Language used for upgrade names and other text while playing Gimkit (non-2D modes)",
            children: (0, o.jsx)(l.default, {
                value: e,
                style: {
                    width: 200
                },
                onChange: e => {
                    const n = (0, s.getLanguageKey)(e);
                    localStorage.setItem(u.LocalStorageNames.language, n), t(e)
                },
                children: f.map((e => (0, o.jsx)(d, {
                    value: e,
                    children: e
                }, e)))
            })
        })
    }, g = () => {
        const [e, t] = a.useState(!!localStorage.getItem(u.LocalStorageNames.allowGoogleTranslate));
        return (0, o.jsx)(i.Setting, {
            title: "Allow Google Translate",
            description: "Allow Google Chrome to translate text inside of live games?",
            children: (0, o.jsx)(c.default, {
                onClick: e => {
                    e ? localStorage.setItem(u.LocalStorageNames.allowGoogleTranslate, "allow") : localStorage.removeItem(u.LocalStorageNames.allowGoogleTranslate), t(e)
                },
                checked: e
            })
        })
    }
})), n.register("7c9vD", (function(t, n) {
    e(t.exports, "getListOfLanguages", (function() {
        return o
    })), e(t.exports, "getLanguageKey", (function() {
        return a
    })), e(t.exports, "getLanguageName", (function() {
        return i
    }));
    const r = {
            en: "English",
            af: "Afrikaans",
            sq: "Albanian",
            am: "Amharic",
            ar: "Arabic",
            hy: "Armenian",
            az: "Azerbaijani",
            eu: "Basque",
            be: "Belarusian",
            bn: "Bengali",
            bs: "Bosnian",
            bg: "Bulgarian",
            ca: "Catalan",
            ceb: "Cebuano",
            ny: "Chichewa",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            co: "Corsican",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            eo: "Esperanto",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            fy: "Frisian",
            gl: "Galician",
            ka: "Georgian",
            de: "German",
            el: "Greek",
            gu: "Gujarati",
            ht: "Haitian Creole",
            ha: "Hausa",
            haw: "Hawaiian",
            iw: "Hebrew",
            hi: "Hindi",
            hmn: "Hmong",
            hu: "Hungarian",
            is: "Icelandic",
            ig: "Igbo",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            jw: "Javanese",
            kn: "Kannada",
            kk: "Kazakh",
            km: "Khmer",
            ko: "Korean",
            ku: "Kurdish (Kurmanji)",
            ky: "Kyrgyz",
            lo: "Lao",
            la: "Latin",
            lv: "Latvian",
            lt: "Lithuanian",
            lb: "Luxembourgish",
            mk: "Macedonian",
            mg: "Malagasy",
            ms: "Malay",
            ml: "Malayalam",
            mt: "Maltese",
            mi: "Maori",
            mr: "Marathi",
            mn: "Mongolian",
            my: "Myanmar (Burmese)",
            ne: "Nepali",
            no: "Norwegian",
            ps: "Pashto",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ma: "Punjabi",
            ro: "Romanian",
            ru: "Russian",
            sm: "Samoan",
            gd: "Scots Gaelic",
            sr: "Serbian",
            st: "Sesotho",
            sn: "Shona",
            sd: "Sindhi",
            si: "Sinhala",
            sk: "Slovak",
            sl: "Slovenian",
            so: "Somali",
            es: "Spanish",
            su: "Sundanese",
            sw: "Swahili",
            sv: "Swedish",
            tg: "Tajik",
            ta: "Tamil",
            te: "Telugu",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            ur: "Urdu",
            uz: "Uzbek",
            vi: "Vietnamese",
            cy: "Welsh",
            xh: "Xhosa",
            yi: "Yiddish",
            yo: "Yoruba",
            zu: "Zulu"
        },
        o = () => Object.keys(r).map((e => r[e])),
        a = e => Object.keys(r).filter((t => r[t] === e))[0],
        i = e => r[e]
})), n.register("azS2v", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("1rwOd"),
        s = n("l89Zc"),
        l = n("5mRwo");
    var c = () => {
        const [e, t] = a.useState(!!localStorage.getItem(l.LocalStorageNames.cosmosBlockedInGame));
        return (0, o.jsx)(i.Setting, {
            title: "Disable Cosmetics",
            description: "Gims, trails, and stickers are disabled in-game. All players appear as default Gims.",
            children: (0, o.jsx)(s.default, {
                onClick: e => {
                    e ? localStorage.setItem(l.LocalStorageNames.cosmosBlockedInGame, "true") : localStorage.removeItem(l.LocalStorageNames.cosmosBlockedInGame), t(e)
                },
                checked: e
            })
        })
    }
})), n.register("4sWGN", (function(t, r) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("1rwOd"),
        s = n("93yIm"),
        l = n("b9Zw0"),
        c = n("cy4A6"),
        u = n("iMOcM"),
        d = n("cPGmn"),
        f = n("eEYFA");
    var p = () => {
        const [e, t] = a.useState(!0), [n, r] = a.useState(!1), [p, g] = a.useState(""), h = () => {
            if (n) return;
            let e = p;
            e && (e = e.trim(), e.length < 2) ? (0, u.throwMessageError)({
                default: {
                    title: "Display name must be at least 2 characters long"
                }
            }) : (r(!0), (0, f.Request)({
                url: "/api/user/display-name",
                data: {
                    name: e
                },
                success: e => {
                    c.default.success("Display name updated!"), g(e.name)
                },
                error: e => {
                    (0, u.throwMessageError)({
                        e: e,
                        default: {
                            title: "Error updating display name"
                        }
                    })
                },
                both: () => r(!1)
            }))
        };
        return (0, d.useDidMount)((() => {
            (0, f.Request)({
                url: "/api/user/display-name",
                success: e => {
                    g(e.name)
                },
                both: () => t(!1)
            })
        })), (0, o.jsx)(i.Setting, {
            title: "Display Name",
            description: "The name you appear as in-game when hosting a game. Leave empty to use your account name.",
            children: (0, o.jsxs)("div", {
                className: "flex vc",
                children: [(0, o.jsx)(l.default, {
                    disabled: e,
                    value: p,
                    maxLength: 20,
                    style: {
                        width: 200,
                        marginRight: 10
                    },
                    placeholder: "Ms. Gimkit",
                    onPressEnter: h,
                    onChange: e => {
                        g(e.target.value)
                    }
                }), (0, o.jsx)(s.default, {
                    loading: n,
                    onClick: h,
                    type: "primary",
                    children: "Save"
                })]
            })
        })
    }
})), n.register("fDrJ5", (function(t, r) {
    e(t.exports, "default", (function() {
        return g
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("1ixrO"),
        s = n("4Fti7"),
        l = n("4XiJY"),
        c = n("jUuRe"),
        u = n("eEGHi"),
        d = n("hCau8"),
        f = n("1LcNe"),
        p = n("gMNFn");
    var g = () => (a.useEffect((() => {
        (0, d.default)()
    }), []), (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(i.default, {}), (0, o.jsx)(l.default, {}), (0, o.jsx)(p.default, {}), (0, o.jsx)(s.default, {}), (0, o.jsx)(u.default, {}), (0, o.jsx)(c.default, {}), (0, o.jsx)(f.default, {})]
    }))
})), n.register("1ixrO", (function(t, r) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("lpEVe"),
        s = n("7ECC6"),
        l = n("69SUA"),
        c = n("fBwf1"),
        u = n("lKmIF"),
        d = n("iMOcM");
    var f = (0, i.observer)((() => {
        const {
            billing: e
        } = a.useContext(c.default);
        return (0, o.jsx)(s.default, {
            style: {
                fontFamily: l.Fonts.SFPro,
                color: u.default.Black
            },
            children: (0, o.jsxs)("div", {
                className: "flex vc",
                children: [(0, o.jsx)("div", {
                    children: (0, o.jsx)("img", {
                        src: `/client/img/settings/${(0,d.isUpgraded)()?"launch":"sprout"}.svg`,
                        style: {
                            height: 87
                        }
                    })
                }), (0, o.jsxs)("div", {
                    style: {
                        marginLeft: 20
                    },
                    children: [(0, o.jsx)("div", {
                        style: {
                            fontWeight: l.FontWeights.UltraBold,
                            fontSize: 28
                        },
                        children: e.planName
                    }), (0, o.jsx)("div", {
                        style: {
                            marginTop: -8
                        },
                        children: e.downgradeMessage || e.planDescription
                    })]
                })]
            })
        })
    }))
})), n.register("4Fti7", (function(r, o) {
    e(r.exports, "default", (function() {
        return m
    }));
    var a = n("hxEiv"),
        i = n("fywoC"),
        s = n("7ECC6"),
        l = n("5g49A"),
        c = n("lKmIF"),
        u = n("69SUA"),
        d = n("lpEVe"),
        f = n("fBwf1"),
        p = n("2KDwk"),
        g = n("2nCEo");
    const h = e => {
        const t = !!e.amountRefunded,
            n = t && e.amountRefunded === e.amount;
        return (0, a.jsx)("a", {
            href: e.link,
            target: "_blank",
            children: (0, a.jsx)(s.default, {
                style: {
                    color: c.default.Black,
                    fontFamily: u.Fonts.SFPro,
                    marginBottom: 5
                },
                hoverable: !0,
                children: (0, a.jsxs)("div", {
                    className: "flex vc",
                    style: {
                        justifyContent: "space-between"
                    },
                    children: [(0, a.jsxs)("div", {
                        children: [(0, a.jsx)("div", {
                            style: {
                                fontSize: 11,
                                marginBottom: -5,
                                opacity: .7
                            },
                            children: e.date
                        }), (0, a.jsx)("div", {
                            style: {
                                fontSize: 14
                            },
                            children: (0, p.centsToFormatedMoney)(e.amount)
                        })]
                    }), (0, a.jsx)("div", {
                        children: t && (0, a.jsx)(l.default, {
                            color: "green",
                            children: n ? "Refunded" : "Partially Refunded"
                        })
                    })]
                })
            })
        })
    };
    var m = (0, d.observer)((() => {
        const {
            billing: e
        } = i.useContext(f.default);
        return e.charges.length ? (0, a.jsxs)(s.default, {
            style: {
                color: c.default.Black,
                fontFamily: u.Fonts.SFPro,
                marginTop: 10
            },
            children: [(0, a.jsx)("div", {
                style: {
                    fontSize: 22,
                    fontWeight: u.FontWeights.UltraBold,
                    marginBottom: -7
                },
                children: "Receipts"
            }), (0, a.jsx)("div", {
                style: {
                    marginBottom: 7
                },
                children: "Click a charge to open the receipt"
            }), e.charges.map((e => (0, a.jsx)(h, {
                date: t(g).unix(e.unixDate).format("MMMM Do, YYYY"),
                amount: e.amount,
                link: e.receiptUrl,
                amountRefunded: e.amountRefunded
            }, e.id)))]
        }) : null
    }))
})), n.register("5g49A", (function(r, o) {
    e(r.exports, "default", (function() {
        return m
    }), (function(e) {
        return m = e
    }));
    var a = n("legzE"),
        i = n("fe1on"),
        s = n("fywoC"),
        l = n("4gMdJ"),
        c = n("2iORQ"),
        u = n("eM84N"),
        d = n("8elTB"),
        f = n("jfXop"),
        p = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        };
    const g = (e, n) => {
            var {
                prefixCls: r,
                className: o,
                rootClassName: d,
                style: g,
                children: h,
                icon: m,
                color: v,
                onClose: y,
                closeIcon: x,
                closable: b = !1
            } = e, w = p(e, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);
            const {
                getPrefixCls: j,
                direction: S
            } = s.useContext(l.ConfigContext), [C, k] = s.useState(!0);
            s.useEffect((() => {
                "visible" in w && k(w.visible)
            }), [w.visible]);
            const E = (0, c.isPresetColor)(v) || (0, c.isPresetStatusColor)(v),
                O = Object.assign({
                    backgroundColor: v && !E ? v : void 0
                }, g),
                N = j("tag", r),
                [F, T] = (0, f.default)(N),
                I = t(i)(N, {
                    [`${N}-${v}`]: E,
                    [`${N}-has-color`]: v && !E,
                    [`${N}-hidden`]: !C,
                    [`${N}-rtl`]: "rtl" === S
                }, o, d, T),
                M = e => {
                    e.stopPropagation(), null == y || y(e), e.defaultPrevented || k(!1)
                },
                P = "function" == typeof w.onClick || h && "a" === h.type,
                A = m || null,
                z = A ? s.createElement(s.Fragment, null, A, s.createElement("span", null, h)) : h,
                B = s.createElement("span", Object.assign({}, w, {
                    ref: n,
                    className: I,
                    style: O
                }), z, b ? x ? s.createElement("span", {
                    className: `${N}-close-icon`,
                    onClick: M
                }, x) : s.createElement(a.default, {
                    className: `${N}-close-icon`,
                    onClick: M
                }) : null);
            return F(P ? s.createElement(u.default, null, B) : B)
        },
        h = s.forwardRef(g);
    h.CheckableTag = d.default;
    var m = h
})), n.register("8elTB", (function(r, o) {
    e(r.exports, "default", (function() {
        return u
    }), (function(e) {
        return u = e
    }));
    var a = n("fe1on"),
        i = n("fywoC"),
        s = n("4gMdJ"),
        l = n("jfXop"),
        c = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        };
    var u = e => {
        var {
            prefixCls: n,
            className: r,
            checked: o,
            onChange: u,
            onClick: d
        } = e, f = c(e, ["prefixCls", "className", "checked", "onChange", "onClick"]);
        const {
            getPrefixCls: p
        } = i.useContext(s.ConfigContext), g = p("tag", n), [h, m] = (0, l.default)(g), v = t(a)(g, {
            [`${g}-checkable`]: !0,
            [`${g}-checkable-checked`]: o
        }, r, m);
        return h(i.createElement("span", Object.assign({}, f, {
            className: v,
            onClick: e => {
                null == u || u(!o), null == d || d(e)
            }
        })))
    }
})), n.register("jfXop", (function(t, r) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = n("huF4L"),
        a = n("1QMe3"),
        i = n("3pCmM"),
        s = n("10VQw"),
        l = n("kCC5O");
    const c = (e, t, n) => {
            const r = (0, i.default)(n);
            return {
                [`${e.componentCls}-${t}`]: {
                    color: e[`color${n}`],
                    background: e[`color${r}Bg`],
                    borderColor: e[`color${r}Border`]
                }
            }
        },
        u = e => (0, s.genPresetColor)(e, ((t, n) => {
            let {
                textColor: r,
                lightBorderColor: o,
                lightColor: a,
                darkColor: i
            } = n;
            return {
                [`${e.componentCls}-${t}`]: {
                    color: r,
                    background: a,
                    borderColor: o,
                    "&-inverse": {
                        color: e.colorTextLightSolid,
                        background: i,
                        borderColor: i
                    }
                }
            }
        })),
        d = e => {
            const {
                paddingXXS: t,
                lineWidth: n,
                tagPaddingHorizontal: r,
                componentCls: o
            } = e, a = r - n, i = t - n;
            return {
                [o]: Object.assign(Object.assign({}, (0, l.resetComponent)(e)), {
                    display: "inline-block",
                    height: "auto",
                    marginInlineEnd: e.marginXS,
                    paddingInline: a,
                    fontSize: e.tagFontSize,
                    lineHeight: `${e.tagLineHeight}px`,
                    whiteSpace: "nowrap",
                    background: e.tagDefaultBg,
                    border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
                    borderRadius: e.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${e.motionDurationMid}`,
                    textAlign: "start",
                    [`&${o}-rtl`]: {
                        direction: "rtl"
                    },
                    "&, a, a:hover": {
                        color: e.tagDefaultColor
                    },
                    [`${o}-close-icon`]: {
                        marginInlineStart: i,
                        color: e.colorTextDescription,
                        fontSize: e.tagIconSize,
                        cursor: "pointer",
                        transition: `all ${e.motionDurationMid}`,
                        "&:hover": {
                            color: e.colorTextHeading
                        }
                    },
                    [`&${o}-has-color`]: {
                        borderColor: "transparent",
                        [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]: {
                            color: e.colorTextLightSolid
                        }
                    },
                    "&-checkable": {
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        cursor: "pointer",
                        [`&:not(${o}-checkable-checked):hover`]: {
                            color: e.colorPrimary,
                            backgroundColor: e.colorFillSecondary
                        },
                        "&:active, &-checked": {
                            color: e.colorTextLightSolid
                        },
                        "&-checked": {
                            backgroundColor: e.colorPrimary,
                            "&:hover": {
                                backgroundColor: e.colorPrimaryHover
                            }
                        },
                        "&:active": {
                            backgroundColor: e.colorPrimaryActive
                        }
                    },
                    "&-hidden": {
                        display: "none"
                    },
                    [`> ${e.iconCls} + span, > span + ${e.iconCls}`]: {
                        marginInlineStart: a
                    }
                })
            }
        };
    var f = (0, o.default)("Tag", (e => {
        const {
            fontSize: t,
            lineHeight: n,
            lineWidth: r,
            fontSizeIcon: o
        } = e, i = Math.round(t * n), s = e.fontSizeSM, l = i - 2 * r, f = e.colorFillAlter, p = e.colorText, g = (0, a.merge)(e, {
            tagFontSize: s,
            tagLineHeight: l,
            tagDefaultBg: f,
            tagDefaultColor: p,
            tagIconSize: o - 2 * r,
            tagPaddingHorizontal: 8
        });
        return [d(g), u(g), c(g, "success", "Success"), c(g, "processing", "Info"), c(g, "error", "Error"), c(g, "warning", "Warning")]
    }))
})), n.register("3pCmM", (function(t, n) {
    function r(e) {
        if ("string" != typeof e) return e;
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("2KDwk", (function(t, n) {
    e(t.exports, "centsToFormatedMoney", (function() {
        return r
    }));
    const r = e => (e / 100).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
})), n.register("4XiJY", (function(t, r) {
    e(t.exports, "default", (function() {
        return d
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("lpEVe"),
        s = n("fBwf1"),
        l = n("7ECC6"),
        c = n("lKmIF"),
        u = n("69SUA");
    var d = (0, i.observer)((() => {
        const {
            billing: e
        } = a.useContext(s.default);
        return !e.hasNextCharge || e.planName.toLowerCase().includes("basic") ? null : (0, o.jsxs)(l.default, {
            style: {
                marginTop: 10,
                color: c.default.Black
            },
            children: [(0, o.jsx)("div", {
                style: {
                    fontSize: 14,
                    marginBottom: -5
                },
                children: "Next Charge"
            }), (0, o.jsxs)("div", {
                className: "flex vc",
                children: [(0, o.jsx)("div", {
                    style: {
                        fontSize: 27,
                        fontWeight: u.FontWeights.UltraBold
                    },
                    children: e.nextChargeAmount
                }), (0, o.jsxs)("div", {
                    style: {
                        opacity: .8,
                        fontSize: 12,
                        marginLeft: 7
                    },
                    children: ["on ", e.nextChargeDate]
                })]
            })]
        })
    }))
})), n.register("jUuRe", (function(t, r) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("lpEVe"),
        s = n("7ECC6"),
        l = n("lKmIF"),
        c = n("69SUA"),
        u = n("2KDwk"),
        d = n("fBwf1");
    var f = (0, i.observer)((() => {
        const {
            billing: e
        } = a.useContext(d.default);
        return e.accountBalance ? (0, o.jsxs)(s.default, {
            style: {
                color: l.default.Black,
                fontFamily: c.Fonts.SFPro,
                marginTop: 10
            },
            children: [(0, o.jsx)("div", {
                style: {
                    fontSize: 12
                },
                children: "Account Credit"
            }), (0, o.jsx)("div", {
                style: {
                    fontSize: 19,
                    marginTop: -5,
                    fontWeight: c.FontWeights.UltraBold
                },
                children: (0, u.centsToFormatedMoney)(e.accountBalance)
            })]
        }) : null
    }))
})), n.register("eEGHi", (function(t, r) {
    e(t.exports, "default", (function() {
        return y
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("dv9KL"),
        s = n("93yIm"),
        l = n("7ECC6"),
        c = n("cy4A6"),
        u = n("lKmIF"),
        d = n("69SUA"),
        f = n("fBwf1"),
        p = n("lpEVe"),
        g = n("kgPjU"),
        h = n("iMOcM"),
        m = n("keUUQ"),
        v = (s = n("93yIm"), l = n("7ECC6"), c = n("cy4A6"), n("sgWtV"));
    var y = (0, p.observer)((() => {
        const [e, t] = a.useState(!1), {
            billing: {
                last4DigitsOfCard: n,
                stripePublicKey: r,
                cardName: p
            }
        } = a.useContext(f.default);
        if (a.useEffect((() => {
                const e = (0, h.getUrlVariable)("session_id");
                e && (t(!0), (0, h.verifyStripe)({
                    sessionId: e,
                    onSuccess: () => {
                        (0, m.default)(), c.default.success("Credit card updated successfully")
                    },
                    onError: () => (0, v.throwError)({
                        title: "Error updating credit card",
                        content: "Please try again or contact support"
                    }),
                    onBoth: () => {
                        t(!1)
                    },
                    invokeImmediately: !0
                }))
            }), []), !n || !p) return null;
        return (0, o.jsxs)(l.default, {
            style: {
                color: u.default.Black,
                fontFamily: d.Fonts.SFPro,
                marginTop: 10
            },
            children: [(0, o.jsx)("div", {
                style: {
                    fontSize: 17,
                    fontWeight: d.FontWeights.UltraBold,
                    marginBottom: 1
                },
                children: "Payment Method"
            }), (0, o.jsx)(l.default, {
                children: (0, o.jsxs)("div", {
                    className: "flex vc",
                    style: {
                        color: u.default.Black,
                        fontFamily: d.Fonts.SFPro
                    },
                    children: [(0, o.jsx)(i.default, {
                        style: {
                            fontSize: 24,
                            marginRight: 10
                        }
                    }), (0, o.jsxs)("div", {
                        children: [(0, o.jsx)("span", {
                            style: {
                                fontWeight: d.FontWeights.UltraBold
                            },
                            children: p.toUpperCase()
                        }), " ", "ending in", " ", (0, o.jsx)("span", {
                            style: {
                                fontWeight: d.FontWeights.UltraBold
                            },
                            children: n
                        })]
                    })]
                })
            }), (0, o.jsxs)("div", {
                style: {
                    marginTop: 5,
                    justifyContent: "space-between"
                },
                className: "flex maxWidth",
                children: [(0, o.jsx)("div", {}), r && (0, o.jsx)(s.default, {
                    type: "primary",
                    size: "large",
                    onClick: async () => {
                        let e;
                        t(!0);
                        try {
                            e = await (0, g.loadStripe)(r)
                        } catch (e) {
                            t(!1), (0, h.throwMessageError)({
                                e: e,
                                default: {
                                    title: "Our payment processor is currently down",
                                    content: "Please try again later"
                                }
                            })
                        }
                        e && (0, h.request)({
                            url: "/api/billing/create-billing-info-session",
                            method: "POST",
                            success: async t => {
                                const n = t;
                                let r;
                                try {
                                    if (r = await e.redirectToCheckout({
                                            sessionId: n.id
                                        }), r && r.error) throw r.error
                                } catch (e) {
                                    (0, h.throwMessageError)({
                                        e: e,
                                        default: {
                                            title: "Error",
                                            content: "An error ocurred. Please try again later"
                                        }
                                    })
                                }
                            },
                            error: e => {
                                t(!1), (0, h.throwMessageError)({
                                    e: e,
                                    default: {
                                        title: "Connection Error",
                                        content: "An error ocurred while connecting to our payments provider. Please try again later"
                                    }
                                })
                            }
                        })
                    },
                    loading: e,
                    children: "Change Credit Card"
                })]
            })]
        })
    }))
})), n.register("kgPjU", (function(t, n) {
    e(t.exports, "loadStripe", (function() {
        return d
    }));
    var r = "https://js.stripe.com/v3",
        o = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        a = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
        i = null,
        s = function(e) {
            return null !== i || (i = new Promise((function(t, n) {
                if ("undefined" != typeof window)
                    if (window.Stripe && e && console.warn(a), window.Stripe) t(window.Stripe);
                    else try {
                        var i = function() {
                            for (var e = document.querySelectorAll('script[src^="'.concat(r, '"]')), t = 0; t < e.length; t++) {
                                var n = e[t];
                                if (o.test(n.src)) return n
                            }
                            return null
                        }();
                        i && e ? console.warn(a) : i || (i = function(e) {
                            var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                                n = document.createElement("script");
                            n.src = "".concat(r).concat(t);
                            var o = document.head || document.body;
                            if (!o) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                            return o.appendChild(n), n
                        }(e)), i.addEventListener("load", (function() {
                            window.Stripe ? t(window.Stripe) : n(new Error("Stripe.js not available"))
                        })), i.addEventListener("error", (function() {
                            n(new Error("Failed to load Stripe.js"))
                        }))
                    } catch (e) {
                        return void n(e)
                    } else t(null)
            }))), i
        },
        l = function(e, t, n) {
            if (null === e) return null;
            var r = e.apply(void 0, t);
            return function(e, t) {
                e && e._registerWrapper && e._registerWrapper({
                    name: "stripe-js",
                    version: "1.9.0",
                    startTime: t
                })
            }(r, n), r
        },
        c = Promise.resolve().then((function() {
            return s(null)
        })),
        u = !1;
    c.catch((function(e) {
        u || console.warn(e)
    }));
    var d = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        u = !0;
        var r = Date.now();
        return c.then((function(e) {
            return l(e, t, r)
        }))
    }
})), n.register("keUUQ", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("iMOcM"),
        a = n("jIVjI");
    var i = () => {
        (0, o.request)({
            url: "/api/billing/payment-source",
            success: e => {
                a.default.billing.cardName = e.source.cardType, a.default.billing.last4DigitsOfCard = e.source.last4Digits, (0, o.request)({
                    url: "/api/billing/stripe-key",
                    success: e => a.default.billing.stripePublicKey = e.key
                })
            }
        })
    }
})), n.register("hCau8", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("4FVYx"),
        a = n("GuZjp"),
        i = n("108zU"),
        s = n("keUUQ"),
        l = n("bGoag");
    var c = () => {
        (0, l.default)({
            onSuccess: () => {
                (0, o.default)(), (0, a.default)(), (0, i.default)(), (0, s.default)()
            }
        })
    }
})), n.register("4FVYx", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = n("iMOcM"),
        a = n("jIVjI"),
        i = n("6HXn4"),
        s = n("6yM66"),
        l = n("2KDwk"),
        c = n("24Ao0");
    var u = () => {
        (0, o.isUpgraded)() && (0, c.default)(), (0, o.request)({
            url: "/api/billing/plan-info",
            success: e => {
                const {
                    info: t
                } = e;
                a.default.billing.planName = (0, i.default)(t.plan), a.default.billing.planDescription = (e => {
                    if ("basic" === e.info.plan) return "Free Forever!";
                    if (e.info.info) {
                        const t = e.info.info;
                        if (t.providedByMessage) return t.providedByMessage;
                        if (t.cost && t.timePeriod) return `${(0,l.centsToFormatedMoney)(t.cost)} per ${t.timePeriod}`;
                        if (t.bulkName) return `Paid by ${t.bulkName}.`
                    }
                    return ""
                })(e), t.info && t.info.timePeriod && (a.default.billing.billingInterval = t.info.timePeriod), "stripe" === t.source && (0, s.default)()
            }
        })
    }
})), n.register("6yM66", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = n("iMOcM"),
        a = n("jIVjI"),
        i = n("2KDwk");
    var s = () => {
        (0, o.request)({
            url: "/api/billing/upcoming-invoice",
            success: e => {
                a.default.billing.nextChargeAmount = (0, i.centsToFormatedMoney)(e.amount), a.default.billing.nextChargeDate = e.date, a.default.billing.hasNextCharge = !0
            }
        })
    }
})), n.register("24Ao0", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("iMOcM"),
        a = n("jIVjI");
    var i = () => {
        (0, o.request)({
            url: "/api/billing/downgrade-details",
            success: e => {
                a.default.billing.canDowngrade = e.canDowngrade, e.message && (a.default.billing.downgradeMessage = e.message), e.subscriptionEndDateText && (a.default.billing.downgradeDateMessage = e.subscriptionEndDateText)
            }
        })
    }
})), n.register("GuZjp", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("iMOcM"),
        a = n("jIVjI");
    var i = () => {
        (0, o.request)({
            url: "/api/billing/charges",
            success: e => a.default.billing.charges.replace(e.charges)
        })
    }
})), n.register("108zU", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("iMOcM"),
        a = n("jIVjI");
    var i = () => {
        (0, o.request)({
            url: "/api/billing/account-balance",
            success: e => {
                a.default.billing.accountBalance = e.balance
            }
        })
    }
})), n.register("1LcNe", (function(t, r) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("93yIm"),
        s = n("7ECC6"),
        l = n("69SUA"),
        c = n("lKmIF"),
        u = n("lpEVe"),
        d = n("fBwf1"),
        f = n("bHdhn");
    var p = (0, u.observer)((() => {
        const {
            billing: e
        } = a.useContext(d.default), [t, n] = a.useState(!1), r = () => n(!t);
        if (!e.canDowngrade) {
            if (e.downgradeMessage && e.downgradeMessage.includes("set to end")) {
                const t = e.downgradeMessage.split("end on ")[1];
                return t ? (0, o.jsxs)(s.default, {
                    style: {
                        fontFamily: l.Fonts.SFPro,
                        color: c.default.Black,
                        marginTop: 10
                    },
                    children: [(0, o.jsx)("b", {
                        children: "You've already canceled your subscription."
                    }), " You won't be charged again and will keep Pro access until ", t]
                }) : null
            }
            return null
        }
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(s.default, {
                style: {
                    fontFamily: l.Fonts.SFPro,
                    color: c.default.Black,
                    marginTop: 10
                },
                children: (0, o.jsxs)("div", {
                    className: "flex maxWidth",
                    style: {
                        justifyContent: "space-between"
                    },
                    children: [(0, o.jsx)("div", {}), e.canDowngrade && (0, o.jsx)(i.default, {
                        onClick: r,
                        type: "primary",
                        danger: !0,
                        children: "Cancel Subscription"
                    })]
                })
            }), (0, o.jsx)(f.default, {
                visible: t,
                close: r
            })]
        })
    }))
})), n.register("bHdhn", (function(t, r) {
    e(t.exports, "default", (function() {
        return j
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("lpEVe"),
        s = n("93yIm"),
        l = n("fC6cp"),
        c = n("b9Zw0"),
        u = n("fBuQJ"),
        d = n("f1yKZ"),
        f = n("69SUA"),
        p = n("lKmIF"),
        g = n("6HXn4"),
        h = n("fBwf1"),
        m = n("iMOcM"),
        v = n("sgWtV"),
        y = n("hCau8"),
        x = n("cmvpZ");
    let b;
    var w;
    (w = b || (b = {})).firstAsk = "firstAsk", w.reason = "reason", w.groupOrder = "groupOrder";
    var j = (0, i.observer)((e => {
        const {
            billing: t
        } = a.useContext(h.default), [n, r] = a.useState(b.firstAsk), [i, x] = a.useState(""), [w, j] = a.useState(""), [C, k] = a.useState(!1), E = !C, O = e => x(e.target.value), N = e => j(e.target.value), F = () => {
            E && (k(!0), (0, m.request)({
                url: "/api/billing/downgrade",
                data: {
                    reasonId: i,
                    otherReason: w
                },
                success: () => {
                    u.default.success({
                        title: `You've canceled your ${(0,g.default)((0,m.getUser)().type)} subscription${t.downgradeDateMessage&&" to end on "+t.downgradeDateMessage}.`
                    }), t.reset(), (0, y.default)(), e.close()
                },
                error: () => (0, v.throwError)({
                    title: "Error canceling subscription",
                    content: "Please contact support"
                }),
                both: () => k(!1)
            }))
        }, T = () => r(b.reason), I = () => r(b.groupOrder);
        return (0, o.jsx)(u.default, {
            open: e.visible,
            onCancel: e.close,
            style: {
                fontFamily: f.Fonts.SFPro,
                color: p.default.Black
            },
            footer: null,
            closable: !1,
            children: n === b.firstAsk ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)("div", {
                    style: {
                        textAlign: "center",
                        fontWeight: f.FontWeights.Bold,
                        fontSize: 25
                    },
                    children: "Are you canceling because you're joining a group license?"
                }), (0, o.jsx)(l.default, {}), (0, o.jsx)(s.default, {
                    style: {
                        marginBottom: 5
                    },
                    onClick: I,
                    block: !0,
                    size: "large",
                    children: "Yes"
                }), (0, o.jsx)(s.default, {
                    block: !0,
                    size: "large",
                    onClick: T,
                    children: "No"
                })]
            }) : n === b.groupOrder ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)("div", {
                    style: {
                        fontWeight: f.FontWeights.Bold,
                        fontSize: 27,
                        lineHeight: "30px"
                    },
                    children: "To get a refund, don't cancel your subscription just yet!"
                }), (0, o.jsx)(l.default, {}), (0, o.jsxs)("div", {
                    style: {
                        fontSize: 15
                    },
                    children: ["If you're joining a group license, ask your group manager for the", " ", (0, o.jsx)("b", {
                        children: "invite link."
                    }), " ", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), "When you open the invite link, your current subscription will automatically be canceled, and you will receive a refund for your unused time on ", (0, g.default)((0, m.getUser)().type), ". ", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), " If you cancel now, you will not be refunded for your unused time."]
                }), (0, o.jsx)(l.default, {}), (0, o.jsx)(s.default, {
                    block: !0,
                    type: "primary",
                    size: "large",
                    onClick: e.close,
                    children: "Got It!"
                }), (0, o.jsx)("div", {
                    className: "maxWidth",
                    style: {
                        textAlign: "center",
                        marginTop: 10
                    },
                    children: (0, o.jsx)("a", {
                        onClick: T,
                        children: "Cancel subscription anyway"
                    })
                })]
            }) : n === b.reason ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)("div", {
                    style: {
                        fontWeight: f.FontWeights.UltraBold,
                        fontSize: 32
                    },
                    children: "Cancel Subscription"
                }), (0, o.jsxs)("div", {
                    style: {
                        fontSize: 15,
                        marginTop: 10
                    },
                    children: ["Your ", (0, o.jsx)("b", {
                        children: (0, g.default)((0, m.getUser)().type)
                    }), " subscription will end on", " ", (0, o.jsx)("b", {
                        children: t.downgradeDateMessage
                    }), ". ", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), " You won’t be charged again. You’ll keep everything you’ve created and you can restart your subscription anytime after your subscription ends.", " ", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), " If you have a moment, let us know what made you cancel by selecting an option below. Thanks so much!"]
                }), (0, o.jsx)(d.default.Group, {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 20
                    },
                    onChange: O,
                    value: i,
                    children: S.map((e => (0, o.jsx)(d.default, {
                        value: e.id,
                        style: {
                            fontSize: 15,
                            color: p.default.Black,
                            marginBottom: 4
                        },
                        children: e.text
                    }, e.id)))
                }), "other" === i ? (0, o.jsx)(c.default, {
                    placeholder: "Reason...",
                    autoFocus: !0,
                    style: {
                        marginTop: 10
                    },
                    value: w,
                    onChange: N
                }) : null, (0, o.jsx)(s.default, {
                    block: !0,
                    style: {
                        marginTop: 25
                    },
                    type: "primary",
                    danger: !0,
                    onClick: F,
                    loading: C,
                    disabled: !E,
                    children: "Cancel Subscription"
                })]
            }) : null
        })
    }));
    const S = [{
        id: "break",
        text: "Summer break/taking a break"
    }, ...(0, x.shuffle)([{
        id: "didNotUse",
        text: "Didn’t use it much"
    }, {
        id: "anotherService",
        text: "Using another service"
    }, {
        id: "unhappy",
        text: "Unhappy with the product"
    }, {
        id: "couldNotGetItToWork",
        text: "Couldn't get it to work"
    }, {
        id: "cost",
        text: "Too expensive"
    }, {
        id: "schoolNoPay",
        text: "My school won’t pay for it"
    }, {
        id: "noAutoRenew",
        text: "Don't want subscription to autorenew"
    }, {
        id: "leaving",
        text: "Leaving the classroom"
    }, {
        id: "retiring",
        text: "Retiring"
    }]), {
        id: "other",
        text: "Other"
    }]
})), n.register("gMNFn", (function(t, r) {
    e(t.exports, "default", (function() {
        return y
    }));
    var o = n("hxEiv"),
        a = n("lpEVe"),
        i = n("fywoC"),
        s = n("fBwf1"),
        l = n("iMOcM"),
        c = n("93yIm"),
        u = n("7ECC6"),
        d = n("69SUA"),
        f = n("lKmIF"),
        p = n("aYYSA"),
        g = n("46bRO"),
        h = n("kyvf1"),
        m = n("b1oE9");
    const v = e => (0, o.jsx)(u.default, {
        style: {
            fontFamily: d.Fonts.SFPro,
            color: f.default.White,
            marginTop: 10,
            overflow: "hidden"
        },
        ...e
    });
    var y = (0, a.observer)((() => {
        const {
            billing: e
        } = i.useContext(s.default);
        return (0, l.isUpgraded)() && e.billingInterval && "year" !== e.billingInterval ? (0, o.jsx)(v, {
            bodyStyle: {
                backgroundImage: "linear-gradient(to left, #434343 0%, #1c1c1c 100%)",
                padding: 40
            },
            children: (0, o.jsxs)("div", {
                className: "flex-column flex-center",
                style: {
                    textAlign: "center"
                },
                children: [(0, o.jsx)("div", {
                    style: {
                        fontSize: 22,
                        fontWeight: d.FontWeights.Bold,
                        textAlign: "center"
                    },
                    children: "Switch to annual billing and save 65%!"
                }), (0, o.jsxs)("div", {
                    style: {
                        fontSize: 14,
                        color: "rgba(255,255,255,0.9)",
                        marginTop: 2
                    },
                    children: ["If you use ", g.COMPANY_NAME, " more than 3 months a year, you'll save money by switching to annual billing!"]
                }), (0, o.jsx)("div", {
                    style: {
                        marginTop: 20
                    },
                    children: (0, o.jsx)(h.default, {
                        to: m.CHECKOUT,
                        children: (0, o.jsx)(c.default, {
                            size: "large",
                            icon: (0, o.jsx)(p.default, {}),
                            type: "primary",
                            children: "Switch To Annual Billing"
                        })
                    })
                })]
            })
        }) : null
    }))
})), n.register("aYYSA", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("5UEB4"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "StarOutlined";
    var c = a.forwardRef(l)
})), n.register("5UEB4", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
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
})), n.register("jj5oh", (function(t, r) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = n("hxEiv");
    n("fywoC");
    var a = n("69SUA"),
        i = n("lKmIF"),
        s = n("fC6cp"),
        l = n("2FDaO");
    let c;
    const u = e => (0, o.jsx)("div", {
            style: {
                backgroundImage: `url(${e.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
                height: 70,
                width: 70,
                margin: 10,
                borderStyle: "solid",
                borderColor: "#607d8b"
            }
        }),
        d = e => (0, o.jsxs)("div", {
            className: "flex wrap vc",
            children: [(0, o.jsx)("div", {
                children: (0, o.jsx)("img", {
                    src: e.image,
                    style: {
                        height: 99,
                        marginRight: 22
                    }
                })
            }), (0, o.jsx)("div", {
                style: {
                    flex: 1
                },
                children: e.content
            })]
        }),
        f = () => (0, o.jsx)("div", {
            style: {
                height: 35
            }
        });
    var p = () => {
        const e = () => {
            window.open("https://help.gimkit.com")
        };
        return (0, o.jsx)(g, {
            className: "flex hc",
            children: (0, o.jsxs)("div", {
                style: {
                    color: i.default.Black,
                    fontFamily: a.Fonts.SFPro,
                    maxWidth: 700,
                    width: "100%"
                },
                className: "flex flex-column wrap",
                children: [(0, o.jsxs)("div", {
                    className: "flex hc vc flex-column",
                    children: [(0, o.jsxs)("div", {
                        className: "flex wrap",
                        children: [(0, o.jsx)(u, {
                            src: "/client/img/settings/pharlain.jpg"
                        }), (0, o.jsx)(u, {
                            src: "/client/img/settings/jeff.jpg"
                        }), (0, o.jsx)(u, {
                            src: "/client/img/settings/rebecca.png"
                        })]
                    }), (0, o.jsx)("div", {
                        style: {
                            fontWeight: a.FontWeights.UltraBold,
                            fontSize: 40,
                            marginTop: -6,
                            marginBottom: -2
                        },
                        children: "Friendly folks, here to help."
                    }), (0, o.jsxs)("div", {
                        style: {
                            fontSize: 19,
                            textAlign: "center"
                        },
                        children: ["No robots, ", (0, o.jsx)("b", {
                            children: "just real humans!"
                        }), " Need something? We'll get back to you within ", (0, o.jsx)("b", {
                            children: "2 business days."
                        })]
                    })]
                }), (0, o.jsx)(s.default, {}), (0, o.jsx)(d, {
                    image: "/client/img/settings/question.svg",
                    content: (0, o.jsxs)("div", {
                        children: [(0, o.jsxs)("div", {
                            style: {
                                fontWeight: a.FontWeights.UltraBold,
                                fontSize: 28
                            },
                            children: ["Check our", " ", (0, o.jsx)("a", {
                                onClick: e,
                                href: "#",
                                children: "helpdesk"
                            })]
                        }), (0, o.jsxs)("div", {
                            style: {
                                fontSize: 20,
                                lineHeight: "22px"
                            },
                            children: ["Your question might have already been answered!", " ", (0, o.jsx)("a", {
                                href: "#",
                                onClick: e,
                                children: "Click here"
                            }), " ", "to search our helpdesk for an answer!"]
                        })]
                    })
                }), (0, o.jsx)(s.default, {
                    style: {
                        marginTop: 30,
                        marginBottom: 30
                    },
                    children: (0, o.jsx)("span", {
                        style: {
                            fontSize: 20
                        },
                        children: "If you couldn't find your answer..."
                    })
                }), (0, o.jsx)(d, {
                    image: "/client/img/settings/email.svg",
                    content: (0, o.jsxs)("div", {
                        children: [(0, o.jsxs)("div", {
                            style: {
                                fontWeight: a.FontWeights.UltraBold,
                                fontSize: 28
                            },
                            children: ["Send us", " ", (0, o.jsx)("a", {
                                target: "_blank",
                                href: "mailto:hello@gimkit.com",
                                children: "an email"
                            })]
                        }), (0, o.jsxs)("div", {
                            style: {
                                fontSize: 20,
                                lineHeight: "22px"
                            },
                            children: ["Email us at", " ", (0, o.jsx)("a", {
                                target: "_blank",
                                href: "mailto:hello@gimkit.com",
                                children: "hello@gimkit.com"
                            }), " ", "and we'll get back to you soon!"]
                        })]
                    })
                }), (0, o.jsx)(f, {}), (0, o.jsx)(d, {
                    image: "/client/img/settings/heart.svg",
                    content: (0, o.jsxs)("div", {
                        children: [(0, o.jsxs)("div", {
                            style: {
                                fontWeight: a.FontWeights.UltraBold,
                                fontSize: 28
                            },
                            children: ["Suggest a", " ", (0, o.jsx)("a", {
                                target: "_blank",
                                href: "https://gimkit.nolt.io/",
                                children: "new feature"
                            })]
                        }), (0, o.jsxs)("div", {
                            style: {
                                fontSize: 20,
                                lineHeight: "22px"
                            },
                            children: ["Have something you want to see in Gimkit?", " ", (0, o.jsx)("a", {
                                href: "https://gimkit.nolt.io/",
                                target: "_blank",
                                children: "Click here"
                            }), " ", "to visit our feedback center and suggest a new feature."]
                        })]
                    })
                }), (0, o.jsx)(f, {})]
            })
        })
    };
    const g = l.default.div(c || (c = (e => e)``))
})), n.register("lJSKF", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("hxEiv");
    n("fywoC");
    var a = n("kQLx6");
    var i = e => {
        const t = (0, a.use100vh)();
        return (0, o.jsx)("div", {
            style: {
                height: t,
                width: "100%"
            },
            className: e.className,
            children: e.children
        })
    }
})), n.register("kQLx6", (function(r, o) {
    e(r.exports, "use100vh", (function() {
        return u
    }), (function(e) {
        return u = e
    }));
    var a = n("fywoC"),
        i = function() {
            return i = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        },
        s = function(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        },
        l = !1,
        c = (0, a.forwardRef)((function(e, n) {
            var r = e.style,
                o = s(e, ["style"]),
                c = u();
            !l && (null == r ? void 0 : r.height) && (l = !0, console.warn("<Div100vh /> overrides the height property of the style prop"));
            var d = i(i({}, r), {
                height: c ? c + "px" : "100vh"
            });
            return t(a).createElement("div", i({
                ref: n,
                style: d
            }, o))
        }));
    c.displayName = "Div100vh";

    function u() {
        var e = (0, a.useState)(d),
            t = e[0],
            n = e[1],
            r = function() {
                var e = (0, a.useState)(!1),
                    t = e[0],
                    n = e[1];
                return (0, a.useEffect)((function() {
                    f() && n(!0)
                }), []), t
            }();
        return (0, a.useEffect)((function() {
            if (r) return window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                };

            function e() {
                var e = d();
                n(e)
            }
        }), [r]), r ? t : null
    }

    function d() {
        return f() ? window.innerHeight : null
    }

    function f() {
        return "undefined" != typeof window && "undefined" != typeof document
    }
})), n.register("kuEJ4", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = n("iI4DW"),
        a = n("fywoC"),
        i = n("4gMdJ");

    function s(e, t, n) {
        return function(r) {
            const {
                prefixCls: s,
                style: l
            } = r, c = a.useRef(null), [u, d] = a.useState(0), [f, p] = a.useState(0), [g, h] = (0, o.default)(!1, {
                value: r.open
            }), {
                getPrefixCls: m
            } = a.useContext(i.ConfigContext), v = m(t || "select", s);
            return a.useEffect((() => {
                if (h(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            d(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var r;
                            const o = n ? `.${n(v)}` : `.${v}-dropdown`,
                                a = null === (r = c.current) || void 0 === r ? void 0 : r.querySelector(o);
                            a && (clearInterval(t), e.observe(a))
                        }), 10);
                    return () => {
                        clearInterval(t), e.disconnect()
                    }
                }
            }), []), a.createElement(i.default, {
                theme: {
                    token: {
                        motionDurationFast: "0.01s",
                        motionDurationMid: "0.01s",
                        motionDurationSlow: "0.01s"
                    }
                }
            }, a.createElement("div", {
                ref: c,
                style: {
                    paddingBottom: u,
                    position: "relative",
                    width: "fit-content",
                    minWidth: f
                }
            }, a.createElement(e, Object.assign({}, r, {
                style: Object.assign(Object.assign({}, l), {
                    margin: 0
                }),
                open: g,
                visible: g,
                getPopupContainer: () => c.current
            }))))
        }
    }
})), n.register("hacAX", (function(t, r) {
    e(t.exports, "initMoveMotion", (function() {
        return p
    }));
    var o = n("lt5sb"),
        a = n("aWAHQ");
    const i = new(0, o.Keyframes)("antMoveDownIn", {
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
        s = new(0, o.Keyframes)("antMoveDownOut", {
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
        l = new(0, o.Keyframes)("antMoveLeftIn", {
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
        c = new(0, o.Keyframes)("antMoveLeftOut", {
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
        u = new(0, o.Keyframes)("antMoveRightIn", {
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
        d = new(0, o.Keyframes)("antMoveRightOut", {
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
                inKeyframes: new(0, o.Keyframes)("antMoveUpIn", {
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
                outKeyframes: new(0, o.Keyframes)("antMoveUpOut", {
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
                inKeyframes: l,
                outKeyframes: c
            },
            "move-right": {
                inKeyframes: u,
                outKeyframes: d
            }
        },
        p = (e, t) => {
            const {
                antCls: n
            } = e, r = `${n}-${t}`, {
                inKeyframes: o,
                outKeyframes: i
            } = f[t];
            return [(0, a.initMotion)(r, o, i, e.motionDurationMid), {
                [`\n        ${r}-enter,\n        ${r}-appear\n      `]: {
                    opacity: 0,
                    animationTimingFunction: e.motionEaseOutCirc
                },
                [`${r}-leave`]: {
                    animationTimingFunction: e.motionEaseInOutCirc
                }
            }]
        }
})), n.register("dhxiD", (function(e, t) {
    var r = n("1fK2g"),
        o = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var n, a, i, s, l, c, u = !1;
        t || (t = {}), n = t.debug || !1;
        try {
            if (i = r(), s = document.createRange(), l = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(r) {
                    if (r.stopPropagation(), t.format)
                        if (r.preventDefault(), void 0 === r.clipboardData) {
                            n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var a = o[t.format] || o.default;
                            window.clipboardData.setData(a, e)
                        } else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e);
                    t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData))
                })), document.body.appendChild(c), s.selectNodeContents(c), l.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            u = !0
        } catch (r) {
            n && console.error("unable to copy using execCommand: ", r), n && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
            } catch (r) {
                n && console.error("unable to copy using clipboardData: ", r), n && console.error("falling back to prompt"), a = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(a, e)
            }
        } finally {
            l && ("function" == typeof l.removeRange ? l.removeRange(s) : l.removeAllRanges()), c && document.body.removeChild(c), i()
        }
        return u
    }
})), n.register("1fK2g", (function(e, t) {
    e.exports = function() {
        var e = document.getSelection();
        if (!e.rangeCount) return function() {};
        for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
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
                "Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach((function(t) {
                    e.addRange(t)
                })), t && t.focus()
            }
    }
})), n.register("fK8ya", (function(t, r) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = n("hxEiv"),
        a = n("fywoC"),
        i = n("2FDaO"),
        s = n("fBuQJ"),
        l = n("lKmIF"),
        c = n("1djzF");
    let u;
    const d = i.default.img.attrs((e => ({
        src: e.image
    })))(u || (u = (e => e)`
  cursor: pointer;
  height: ${0}px;
  width: ${0}px;
  margin-right: ${0}px;
  border-radius: 5px;
  ${0}
  flex-shrink: 0;
  object-fit: cover;
`), (e => e.size), (e => e.size), (e => e.customRightMargin ? e.customRightMargin : 0), (e => e.showBorder && `border: solid ${l.default.Black} 1px;`));
    var f = e => {
        const [t, n] = a.useState(!1);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(d, {
                ...e,
                onClick: t => {
                    t.stopPropagation(), e.onClick && e.onClick(), e.blockModalOpen || n(!0)
                }
            }), (0, o.jsx)(s.default, {
                open: t,
                onCancel: e => {
                    e.stopPropagation(), n(!1)
                },
                footer: null,
                closable: !1,
                children: (0, o.jsx)("img", {
                    src: (0, c.getCloudinaryUrl)(e.image),
                    style: {
                        width: "100%"
                    }
                })
            })]
        })
    }
})), n.register("1djzF", (function(t, n) {
    e(t.exports, "getCloudinaryUrl", (function() {
        return r
    }));
    const r = e => {
            const t = o(e);
            return t ? e.includes("/video/upload") ? `https://${a}/video/upload/${t}` : `https://${a}/image/upload/f_auto,fl_lossy,q_auto/${t}` : e
        },
        o = e => {
            if (!l.some((t => e.includes(t)))) return null;
            if (e.includes(i) && !e.includes(`/${s}/`)) return null;
            const t = e.split("/");
            if (!t || !t.length || t.length < 2) return null;
            const n = t[t.length - 2],
                r = t[t.length - 1];
            return n && r && n.startsWith("v") ? `${n}/${r}` : null
        },
        a = "media.gimkit.com",
        i = "res.cloudinary.com",
        s = "gimkit-production",
        l = [a, i]
})), n.register("6WS0O", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        sideMargin: 50,
        optionWidth: 200
    }
})), n.register("77qSl", (function(t, r) {
    e(t.exports, "useMediaMatch", (function() {
        return a
    }));
    var o = n("fywoC");

    function a(e) {
        if ("undefined" == typeof window) return console.warn("useMediaMatch cannot function as window is undefined."), !1;
        var t = (0, o.useMemo)((function() {
                return window.matchMedia(e)
            }), [e]),
            n = (0, o.useState)((function() {
                return t.matches
            })),
            r = n[0],
            a = n[1];
        return (0, o.useEffect)((function() {
            a(t.matches);
            var e = function(e) {
                return a(e.matches)
            };
            return t.addEventListener ? (t.addEventListener("change", e), function() {
                return t.removeEventListener("change", e)
            }) : (t.addListener(e), function() {
                return t.removeListener(e)
            })
        }), [t]), r
    }
})), n.register("3bHhZ", (function(e, t) {
    var r = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n), Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        } : function(e, t, n, r) {
            void 0 === r && (r = n), e[r] = t[n]
        }),
        o = e.exports && e.exports.__exportStar || function(e, t) {
            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), o(n("coa3i"), e.exports), o(n("exKSe"), e.exports), o(n("4Nv4f"), e.exports)
})), n.register("coa3i", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useBreakpoints = e.exports.useBreakpoint = void 0;
    var r = n("4Nv4f");
    e.exports.useBreakpoint = function(e) {
        return (0, r.useWindowSize)().width < e
    }, e.exports.useBreakpoints = function(e) {
        var t = (0, r.useWindowSize)().width;
        return e.map((function(e) {
            return t < e
        }))
    }
})), n.register("4Nv4f", (function(e, t) {
    var r = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n), Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        } : function(e, t, n, r) {
            void 0 === r && (r = n), e[r] = t[n]
        }),
        o = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        a = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
            return o(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useWindowSize = void 0;
    var i = a(n("fywoC"));

    function s() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }
    e.exports.useWindowSize = function() {
        var e = i.useState(s()),
            t = e[0],
            n = e[1];
        return i.useLayoutEffect((function() {
            function e() {
                n(s())
            }
            return window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
        }), []), t
    }
})), n.register("exKSe", (function(e, t) {
    var r = e.exports && e.exports.__assign || function() {
            return r = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, r.apply(this, arguments)
        },
        o = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n), Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        } : function(e, t, n, r) {
            void 0 === r && (r = n), e[r] = t[n]
        }),
        a = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
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
                for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && o(t, e, n);
            return a(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useComponentSize = void 0;
    var s = i(n("fywoC"));
    e.exports.useComponentSize = function() {
        var e = s.useState({
                height: 0,
                width: 0
            }),
            t = e[0],
            n = e[1],
            o = s.useRef(),
            a = s.useCallback((function() {
                if (o.current) {
                    var e = o.current.offsetHeight,
                        r = o.current.offsetWidth;
                    e === t.height && r === t.width || n({
                        height: e,
                        width: r
                    })
                }
            }), [t.height, t.width]);
        return s.useLayoutEffect((function() {
            if (o && o.current) {
                var e = new ResizeObserver(a);
                return e.observe(o.current),
                    function() {
                        return e.disconnect()
                    }
            }
        }), [o, a]), r({
            ref: o
        }, t)
    }
})), n.register("hDWWf", (function(t, n) {
    let r;
    var o;
    e(t.exports, "SiteHeaderTheme", (function() {
        return r
    })), (o = r || (r = {})).light = "light", o.dark = "dark"
})), n.register("hSz8d", (function(t, n) {
    let r;
    var o;
    e(t.exports, "SiteHeaderAlpha", (function() {
        return r
    })), (o = r || (r = {})).none = "none", o.standard = "standard", o.darker = "darker"
})), n.register("9Vz35", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var o = {
        name: n("2Y5iQ").default.areaName,
        iconImage: "/client/img/header/rewards.svg"
    }
})), n.register("2Y5iQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        areaName: "Rewards",
        level: "Level",
        xp: "XP",
        currency: "GimBucks",
        character: "Gim",
        sticker: "Sticker",
        trail: "Trail"
    }
})), n.register("dohZB", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("bVHCc"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "UsergroupAddOutlined";
    var c = a.forwardRef(l)
})), n.register("bVHCc", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
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
})), n.register("kVS28", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("4GmeK"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "LogoutOutlined";
    var c = a.forwardRef(l)
})), n.register("4GmeK", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
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
})), n.register("kLpOI", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("ayjhg"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "CheckOutlined";
    var c = a.forwardRef(l)
})), n.register("ayjhg", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
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
})), n.register("6gxPk", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = n("dnh3u"),
        a = n("fywoC"),
        i = n("5D7Fe"),
        s = n("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "DownOutlined";
    var c = a.forwardRef(l)
})), n.register("5D7Fe", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
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
})), n.register("5AR3F", (function(r, o) {
    e(r.exports, "default", (function() {
        return m
    }));
    var a = n("2ic9V"),
        i = n("iStnv"),
        s = n("hzerz"),
        l = n("46jhs"),
        c = n("hn4Tf"),
        u = n("7NK35"),
        d = n("b1RjK"),
        f = n("17aYs"),
        p = n("fywoC"),
        g = n("fe1on"),
        h = function(e) {
            (0, d.default)(r, e);
            var n = (0, f.default)(r);

            function r(e) {
                var t;
                (0, c.default)(this, r), (t = n.call(this, e)).handleChange = function(e) {
                    var n = t.props,
                        r = n.disabled,
                        o = n.onChange;
                    r || ("checked" in t.props || t.setState({
                        checked: e.target.checked
                    }), o && o({
                        target: (0, l.default)((0, l.default)({}, t.props), {}, {
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
                var o = "checked" in e ? e.checked : e.defaultChecked;
                return t.state = {
                    checked: o
                }, t
            }
            return (0, u.default)(r, [{
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
                    var e, n = this.props,
                        r = n.prefixCls,
                        o = n.className,
                        l = n.style,
                        c = n.name,
                        u = n.id,
                        d = n.type,
                        f = n.disabled,
                        h = n.readOnly,
                        m = n.tabIndex,
                        v = n.onClick,
                        y = n.onFocus,
                        x = n.onBlur,
                        b = n.onKeyDown,
                        w = n.onKeyPress,
                        j = n.onKeyUp,
                        S = n.autoFocus,
                        C = n.value,
                        k = n.required,
                        E = (0, s.default)(n, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]),
                        O = Object.keys(E).reduce((function(e, t) {
                            return "aria-" !== t.substr(0, 5) && "data-" !== t.substr(0, 5) && "role" !== t || (e[t] = E[t]), e
                        }), {}),
                        N = this.state.checked,
                        F = t(g)(r, o, (e = {}, (0, i.default)(e, "".concat(r, "-checked"), N), (0, i.default)(e, "".concat(r, "-disabled"), f), e));
                    return t(p).createElement("span", {
                        className: F,
                        style: l
                    }, t(p).createElement("input", (0, a.default)({
                        name: c,
                        id: u,
                        type: d,
                        required: k,
                        readOnly: h,
                        disabled: f,
                        tabIndex: m,
                        className: "".concat(r, "-input"),
                        checked: !!N,
                        onClick: v,
                        onFocus: y,
                        onBlur: x,
                        onKeyUp: j,
                        onKeyDown: b,
                        onKeyPress: w,
                        onChange: this.handleChange,
                        autoFocus: S,
                        ref: this.saveInput,
                        value: C
                    }, O)), t(p).createElement("span", {
                        className: "".concat(r, "-inner")
                    }))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return "checked" in e ? (0, l.default)((0, l.default)({}, t), {}, {
                        checked: e.checked
                    }) : null
                }
            }]), r
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
    var m = h
})), n.register("2ic9V", (function(t, n) {
    function r() {
        return r = Object.assign || function(e) {
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
})), n.register("iStnv", (function(t, n) {
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("hzerz", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = n("cK78M");

    function a(e, t) {
        if (null == e) return {};
        var n, r, a = (0, o.default)(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
    }
})), n.register("cK78M", (function(t, n) {
    function r(e, t) {
        if (null == e) return {};
        var n, r, o = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("46jhs", (function(t, r) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = n("iStnv");

    function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(Object(n), !0).forEach((function(t) {
                (0, o.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
})), n.register("hn4Tf", (function(t, n) {
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("7NK35", (function(t, n) {
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
    }
    e(t.exports, "default", (function() {
        return o
    }))
})), n.register("b1RjK", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = n("63PCo");

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && (0, o.default)(e, t)
    }
})), n.register("63PCo", (function(t, n) {
    function r(e, t) {
        return r = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, r(e, t)
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("17aYs", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = n("bArAQ"),
        a = n("lcgmN"),
        i = n("erlXZ");

    function s(e) {
        var t = (0, a.default)();
        return function() {
            var n, r = (0, o.default)(e);
            if (t) {
                var a = (0, o.default)(this).constructor;
                n = Reflect.construct(r, arguments, a)
            } else n = r.apply(this, arguments);
            return (0, i.default)(this, n)
        }
    }
})), n.register("bArAQ", (function(t, n) {
    function r(e) {
        return r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, r(e)
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("lcgmN", (function(t, n) {
    function r() {
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
        return r
    }))
})), n.register("erlXZ", (function(r, o) {
    e(r.exports, "default", (function() {
        return s
    }));
    var a = n("1eKqi"),
        i = n("cdb2f");

    function s(e, n) {
        if (n && ("object" === t(a)(n) || "function" == typeof n)) return n;
        if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
        return (0, i.default)(e)
    }
})), n.register("1eKqi", (function(e, t) {
    function n(t) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = n = function(e) {
            return typeof e
        }, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = n = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e.exports.default = e.exports, e.exports.__esModule = !0), n(t)
    }
    e.exports = n, e.exports.default = e.exports, e.exports.__esModule = !0
})), n.register("cdb2f", (function(t, n) {
    function r(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    e(t.exports, "default", (function() {
        return r
    }))
})), n.register("9kZfj", (function(t, r) {
    e(t.exports, "onlyOfferAnnualUpgrade", (function() {
        return a
    }));
    var o = n("hrYih");
    const a = () => "annual-only" === o.default.getFeatureFlag("annual-only-pro")
})), n.register("56tQE", (function(t, r) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = n("fywoC"),
        a = n("3KQc0"),
        i = n("9iNNJ");
    var s = (e, t) => {
        const [n, r] = o.useState((() => {
            var n, r;
            const o = e && "current" in e ? e.current : e;
            return o ? [o.offsetWidth, o.offsetHeight] : [null !== (n = null == t ? void 0 : t.initialWidth) && void 0 !== n ? n : 0, null !== (r = null == t ? void 0 : t.initialHeight) && void 0 !== r ? r : 0]
        }));
        return (0, i.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && r([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, a.default)(e, (e => {
            const t = e.target;
            r([t.offsetWidth, t.offsetHeight])
        })), n
    }
})), n.register("3KQc0", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = n("6rvT3"),
        a = n("9iNNJ"),
        i = n("3Yjty"),
        s = n("f1PHW");
    let l;
    const c = () => l || (l = function() {
        const e = new Map,
            t = new(0, o.default)((0, s.default)(((t, n) => {
                var r;
                if (1 === t.length) null === (r = e.get(t[0].target)) || void 0 === r || r(t[0], n);
                else
                    for (let r = 0; r < t.length; r++) {
                        var o;
                        null === (o = e.get(t[r].target)) || void 0 === o || o(t[r], n)
                    }
            })));
        return {
            observer: t,
            subscribe(n, r) {
                t.observe(n), e.set(n, r)
            },
            unsubscribe(n) {
                t.unobserve(n), e.delete(n)
            }
        }
    }());
    var u = function(e, t) {
        const n = c(),
            r = (0, i.default)(t);
        return (0, a.default)((() => {
            let t = !1;
            const o = e && "current" in e ? e.current : e;
            if (o) return n.subscribe(o, ((e, n) => {
                t || r.current(e, n)
            })), () => {
                t = !0, n.unsubscribe(o)
            }
        }), [e, n, r]), n.observer
    }
})), n.register("9iNNJ", (function(r, o) {
    e(r.exports, "default", (function() {
        return a
    }));
    var a = t(n("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), n.register("3Yjty", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = n("fywoC");
    var a = e => {
        const t = o.useRef(e);
        return o.useEffect((() => {
            t.current = e
        })), t
    }
})), n.register("f1PHW", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = function(e) {
        var t = [],
            n = null,
            r = function() {
                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                t = o, n || (n = requestAnimationFrame((function() {
                    n = null, e.apply(void 0, t)
                })))
            };
        return r.cancel = function() {
            n && (cancelAnimationFrame(n), n = null)
        }, r
    }
})), n.register("1HsHH", (function(r, o) {
    e(r.exports, "default", (function() {
        return p
    }));
    var a = n("fywoC"),
        i = function(e, t) {
            return i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            }, i(e, t)
        };
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var s = function() {
        return s = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }, s.apply(this, arguments)
    };
    var l = "Pixel",
        c = "Percent",
        u = {
            unit: c,
            value: .8
        };

    function d(e) {
        return "number" == typeof e ? {
            unit: c,
            value: 100 * e
        } : "string" == typeof e ? e.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: l,
            value: parseFloat(e)
        } : e.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: c,
            value: parseFloat(e)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), u) : (console.warn("scrollThreshold should be string or number"), u)
    }
    var f = function(e) {
            function n(t) {
                var n = e.call(this, t) || this;
                return n.lastScrollTop = 0, n.actionTriggered = !1, n.startY = 0, n.currentY = 0, n.dragging = !1, n.maxPullDownDistance = 0, n.getScrollableTarget = function() {
                    return n.props.scrollableTarget instanceof HTMLElement ? n.props.scrollableTarget : "string" == typeof n.props.scrollableTarget ? document.getElementById(n.props.scrollableTarget) : (null === n.props.scrollableTarget && console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "), null)
                }, n.onStart = function(e) {
                    n.lastScrollTop || (n.dragging = !0, e instanceof MouseEvent ? n.startY = e.pageY : e instanceof TouchEvent && (n.startY = e.touches[0].pageY), n.currentY = n.startY, n._infScroll && (n._infScroll.style.willChange = "transform", n._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)"))
                }, n.onMove = function(e) {
                    n.dragging && (e instanceof MouseEvent ? n.currentY = e.pageY : e instanceof TouchEvent && (n.currentY = e.touches[0].pageY), n.currentY < n.startY || (n.currentY - n.startY >= Number(n.props.pullDownToRefreshThreshold) && n.setState({
                        pullToRefreshThresholdBreached: !0
                    }), n.currentY - n.startY > 1.5 * n.maxPullDownDistance || n._infScroll && (n._infScroll.style.overflow = "visible", n._infScroll.style.transform = "translate3d(0px, " + (n.currentY - n.startY) + "px, 0px)")))
                }, n.onEnd = function() {
                    n.startY = 0, n.currentY = 0, n.dragging = !1, n.state.pullToRefreshThresholdBreached && (n.props.refreshFunction && n.props.refreshFunction(), n.setState({
                        pullToRefreshThresholdBreached: !1
                    })), requestAnimationFrame((function() {
                        n._infScroll && (n._infScroll.style.overflow = "auto", n._infScroll.style.transform = "none", n._infScroll.style.willChange = "none")
                    }))
                }, n.onScrollListener = function(e) {
                    "function" == typeof n.props.onScroll && setTimeout((function() {
                        return n.props.onScroll && n.props.onScroll(e)
                    }), 0);
                    var t = n.props.height || n._scrollableNode ? e.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    n.actionTriggered || ((n.props.inverse ? n.isElementAtTop(t, n.props.scrollThreshold) : n.isElementAtBottom(t, n.props.scrollThreshold)) && n.props.hasMore && (n.actionTriggered = !0, n.setState({
                        showLoader: !0
                    }), n.props.next && n.props.next()), n.lastScrollTop = t.scrollTop)
                }, n.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, n.throttledOnScrollListener = function(e, t, n, r) {
                    var o, a = !1,
                        i = 0;

                    function s() {
                        o && clearTimeout(o)
                    }

                    function l() {
                        var l = this,
                            c = Date.now() - i,
                            u = arguments;

                        function d() {
                            i = Date.now(), n.apply(l, u)
                        }

                        function f() {
                            o = void 0
                        }
                        a || (r && !o && d(), s(), void 0 === r && c > e ? d() : !0 !== t && (o = setTimeout(r ? f : d, void 0 === r ? e - c : e)))
                    }
                    return "boolean" != typeof t && (r = n, n = t, t = void 0), l.cancel = function() {
                        s(), a = !0
                    }, l
                }(150, n.onScrollListener).bind(n), n.onStart = n.onStart.bind(n), n.onMove = n.onMove.bind(n), n.onEnd = n.onEnd.bind(n), n
            }
            return function(e, t) {
                function n() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }(n, e), n.prototype.componentDidMount = function() {
                if (void 0 === this.props.dataLength) throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener("scroll", this.throttledOnScrollListener), "number" == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener("touchstart", this.onStart), this.el.addEventListener("touchmove", this.onMove), this.el.addEventListener("touchend", this.onEnd), this.el.addEventListener("mousedown", this.onStart), this.el.addEventListener("mousemove", this.onMove), this.el.addEventListener("mouseup", this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), "function" != typeof this.props.refreshFunction)) throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')
            }, n.prototype.componentWillUnmount = function() {
                this.el && (this.el.removeEventListener("scroll", this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener("touchstart", this.onStart), this.el.removeEventListener("touchmove", this.onMove), this.el.removeEventListener("touchend", this.onEnd), this.el.removeEventListener("mousedown", this.onStart), this.el.removeEventListener("mousemove", this.onMove), this.el.removeEventListener("mouseup", this.onEnd)))
            }, n.prototype.UNSAFE_componentWillReceiveProps = function(e) {
                this.props.dataLength !== e.dataLength && (this.actionTriggered = !1, this.setState({
                    showLoader: !1
                }))
            }, n.prototype.isElementAtTop = function(e, t) {
                void 0 === t && (t = .8);
                var n = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                    r = d(t);
                return r.unit === l ? e.scrollTop <= r.value + n - e.scrollHeight + 1 || 0 === e.scrollTop : e.scrollTop <= r.value / 100 + n - e.scrollHeight + 1 || 0 === e.scrollTop
            }, n.prototype.isElementAtBottom = function(e, t) {
                void 0 === t && (t = .8);
                var n = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                    r = d(t);
                return r.unit === l ? e.scrollTop + n >= e.scrollHeight - r.value : e.scrollTop + n >= r.value / 100 * e.scrollHeight
            }, n.prototype.render = function() {
                var e = this,
                    n = s({
                        height: this.props.height || "auto",
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch"
                    }, this.props.style),
                    r = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                    o = this.props.pullDownToRefresh && this.props.height ? {
                        overflow: "auto"
                    } : {};
                return t(a).createElement("div", {
                    style: o,
                    className: "infinite-scroll-component__outerdiv"
                }, t(a).createElement("div", {
                    className: "infinite-scroll-component " + (this.props.className || ""),
                    ref: function(t) {
                        return e._infScroll = t
                    },
                    style: n
                }, this.props.pullDownToRefresh && t(a).createElement("div", {
                    style: {
                        position: "relative"
                    },
                    ref: function(t) {
                        return e._pullDown = t
                    }
                }, t(a).createElement("div", {
                    style: {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !r && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage))
            }, n
        }(a.Component),
        p = f
})), n.register("iROck", (function(t, r) {
    e(t.exports, "NavigateTo", (function() {
        return a
    }));
    var o = n("bd8je");
    const a = e => {
        o.history.push(e)
    }
})), n.register("py2Xr", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = n("hxEiv");
    n("fywoC");
    var a = e => (0, o.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), n.register("bmTnW", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.lazyWithPreload = void 0;
    var r = n("fywoC");

    function o(e) {
        var t, n, o = (0, r.lazy)(e),
            a = (0, r.forwardRef)((function(e, n) {
                var a = (0, r.useRef)(null != t ? t : o);
                return (0, r.createElement)(a.current, Object.assign(n ? {
                    ref: n
                } : {}, e))
            }));
        return a.preload = function() {
            return n || (n = e().then((function(e) {
                return t = e.default
            }))), n
        }, a
    }
    e.exports.lazyWithPreload = o, e.exports.default = o
})), n.register("4aaLU", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        White: "white",
        Black: "black",
        BackgroundGray: "#eeeeee",
        PrimaryBlue: "#05f",
        SecondaryPurple: "#1E076B",
        DisabledGray: "#838383",
        LightSuccessGreen: "#6abf69",
        DarkSuccessGreen: "#2e7d32"
    }
}));