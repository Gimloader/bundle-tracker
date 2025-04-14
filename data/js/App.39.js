function e(e, n, a, i) {
    Object.defineProperty(e, n, {
        get: a,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("ffu8f", (function(a, i) {
    var t;
    t = a.exports, Object.defineProperty(t, "__esModule", {
        value: !0,
        configurable: !0
    }), e(a.exports, "default", (function() {
        return h
    }));
    var o = n("hxEiv"),
        r = n("fywoC"),
        c = n("bcnSK"),
        s = n("bSGy0"),
        l = n("2FDaO"),
        u = n("1V6T6"),
        m = n("iMOcM"),
        g = n("b1oE9"),
        d = n("6fFlL"),
        p = n("beXRF"),
        F = n("iROck"),
        v = n("d9u0V");
    let U;
    var h = () => {
        const [e, n] = r.useState(!1), a = (0, p.useLocation)(), i = new URLSearchParams(a.search).get("accountType"), t = (0, m.getUrlVariable)("class");
        return i && d.default[i] && (s.default.login.accountType = d.default[i]), r.useEffect((() => {
            s.default.navigation.redirectUri = "";
            let e = (0, m.getUrlVariable)("location") ? decodeURIComponent((0, m.getUrlVariable)("location")) : "";
            e && !(0, v.IsURLFromUs)(e) && (e = "");
            const a = () => {
                s.default.navigation.reset(), s.default.login.reset()
            };
            return e && (s.default.navigation.redirectUri = e), (0, m.isLoggedIn)() ? ((0, F.NavigateTo)(e || g.DASHBOARD), a) : (window.location.href.includes("login") && n(!0), a)
        }), []), (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(m.Title, {
                title: t ? "Join Class" : e ? "Login" : "Sign Up"
            }), (0, o.jsx)(c.default.Provider, {
                value: s.default,
                children: (0, o.jsx)(f, {
                    children: (0, o.jsx)(u.default, {})
                })
            })]
        })
    };
    const f = l.default.div(U || (U = (e => e)`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`))
})), n.register("bcnSK", (function(a, i) {
    e(a.exports, "default", (function() {
        return r
    }));
    var t = n("fywoC"),
        o = n("bSGy0");
    var r = t.createContext(o.default)
})), n.register("bSGy0", (function(a, i) {
    e(a.exports, "default", (function() {
        return r
    }));
    var t = n("g4NpA"),
        o = n("lvpm8");
    var r = {
        login: new(0, t.default),
        navigation: new(0, o.default)
    }
})), n.register("g4NpA", (function(a, i) {
    e(a.exports, "informationTypes", (function() {
        return r
    })), e(a.exports, "default", (function() {
        return A
    }));
    var t = n("kHqmx"),
        o = n("4MuSt");
    const r = {
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
        c = {
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
            userExists: s,
            email: l,
            accountType: u,
            googleToken: m,
            firstName: g,
            lastName: d,
            password: p,
            schoolId: F,
            districtId: v,
            country: U,
            areaOfExpertise: h,
            gradeLevel: f,
            organization: y,
            acceptsLatestPolicies: j,
            authenticated: E
        } = c;
    class S {
        constructor() {
            this.userExists = s, this.email = l, this.accountType = u, this.googleToken = m, this.firstName = g, this.lastName = d, this.password = p, this.schoolId = F, this.districtId = v, this.country = U, this.areaOfExpertise = h, this.gradeLevel = f, this.organization = y, this.acceptsLatestPolicies = j, this.authenticated = E, this.informationNeeded = o.observable.array([r.email]), this.reset = () => {
                Object.keys(c).forEach((e => this[e] = c[e])), this.informationNeeded.replace([r.email])
            }, (0, o.makeObservable)(this)
        }
    }(0, t.__decorate)([o.observable], S.prototype, "userExists", void 0), (0, t.__decorate)([o.observable], S.prototype, "email", void 0), (0, t.__decorate)([o.observable], S.prototype, "accountType", void 0), (0, t.__decorate)([o.observable], S.prototype, "googleToken", void 0), (0, t.__decorate)([o.observable], S.prototype, "firstName", void 0), (0, t.__decorate)([o.observable], S.prototype, "lastName", void 0), (0, t.__decorate)([o.observable], S.prototype, "password", void 0), (0, t.__decorate)([o.observable], S.prototype, "schoolId", void 0), (0, t.__decorate)([o.observable], S.prototype, "districtId", void 0), (0, t.__decorate)([o.observable], S.prototype, "country", void 0), (0, t.__decorate)([o.observable], S.prototype, "areaOfExpertise", void 0), (0, t.__decorate)([o.observable], S.prototype, "gradeLevel", void 0), (0, t.__decorate)([o.observable], S.prototype, "organization", void 0), (0, t.__decorate)([o.observable], S.prototype, "acceptsLatestPolicies", void 0), (0, t.__decorate)([o.observable], S.prototype, "authenticated", void 0), (0, t.__decorate)([o.observable], S.prototype, "informationNeeded", void 0), (0, t.__decorate)([o.action], S.prototype, "reset", void 0);
    var A = S
})), n.register("lvpm8", (function(a, i) {
    e(a.exports, "default", (function() {
        return h
    }));
    var t = n("kHqmx"),
        o = n("4MuSt");
    const r = {
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
            currentStage: c,
            emailSignInBlocked: s,
            creatingAccount: l,
            loggingIn: u,
            updatingAccountInformation: m,
            loginError: g,
            redirectUri: d,
            classJoiningId: p,
            classJoiningName: F,
            classJoiningTeacherName: v
        } = r;
    class U {
        constructor() {
            this.currentStage = c, this.emailSignInBlocked = s, this.creatingAccount = l, this.loggingIn = u, this.updatingAccountInformation = m, this.loginError = g, this.redirectUri = d, this.classJoiningId = p, this.classJoiningName = F, this.classJoiningTeacherName = v, this.reset = () => {
                Object.keys(r).forEach((e => this[e] = r[e]))
            }, (0, o.makeObservable)(this)
        }
    }(0, t.__decorate)([o.observable], U.prototype, "currentStage", void 0), (0, t.__decorate)([o.observable], U.prototype, "emailSignInBlocked", void 0), (0, t.__decorate)([o.observable], U.prototype, "creatingAccount", void 0), (0, t.__decorate)([o.observable], U.prototype, "loggingIn", void 0), (0, t.__decorate)([o.observable], U.prototype, "updatingAccountInformation", void 0), (0, t.__decorate)([o.observable], U.prototype, "loginError", void 0), (0, t.__decorate)([o.observable], U.prototype, "redirectUri", void 0), (0, t.__decorate)([o.observable], U.prototype, "classJoiningId", void 0), (0, t.__decorate)([o.observable], U.prototype, "classJoiningName", void 0), (0, t.__decorate)([o.observable], U.prototype, "classJoiningTeacherName", void 0), (0, t.__decorate)([o.action], U.prototype, "reset", void 0);
    var h = U
})), n.register("9ZLc2", (function(n, a) {
    let i;
    var t;
    e(n.exports, "default", (function() {
        return o
    })), (t = i || (i = {})).email = "email", t.password = "password", t.accountType = "accountType", t.studentSpecificInfo = "studentSpecificInfo", t.nameAndPassword = "nameAndPassword", t.school = "school", t.educatorSpecificInfo = "educatorSpecificInfo", t.nonSchoolSpecificInfo = "nonSchoolSpecificInfo", t.acceptPolicies = "acceptPolicies", t.verifyClass = "verifyClass";
    var o = i
})), n.register("1V6T6", (function(a, i) {
    e(a.exports, "default", (function() {
        return k
    }));
    var t = n("hxEiv"),
        o = n("fywoC"),
        r = n("lpEVe"),
        c = n("2FDaO"),
        s = n("lKmIF"),
        l = n("kgZr8"),
        u = n("9GWez"),
        m = n("9ZLc2"),
        g = n("dknAM"),
        d = n("52VTT"),
        p = n("fpJ5B"),
        F = n("dEUk2"),
        v = n("5qjf8"),
        U = n("44D8I"),
        h = n("bcnSK"),
        f = n("3mLmI"),
        y = n("gHmyG"),
        j = n("69SUA"),
        E = n("8YORm"),
        S = n("iMOcM"),
        A = n("dliBm"),
        b = n("9BRL0"),
        C = n("iROck");
    let N;
    var k = (0, r.observer)((() => {
        const {
            login: e,
            navigation: n
        } = o.useContext(h.default), {
            currentStage: a
        } = (0, l.default)(), [i, r] = o.useState(!0), [c, N] = o.useState(!1);
        o.useEffect((() => {
            e.informationNeeded.length || (0, f.default)()
        }), [e.informationNeeded.length]), o.useEffect((() => {
            (0, S.getUrlVariable)("pwr") && N(!0);
            const a = (0, S.getUrlVariable)("class");
            a ? (0, S.request)({
                url: `/api/v1/groups/details/${a}`,
                success: i => {
                    n.classJoiningId = a, n.classJoiningName = i.groupName, n.classJoiningTeacherName = i.teacherName, e.accountType = b.default.student, n.redirectUri || (n.redirectUri = `/class/join/${a}`), r(!1)
                },
                error: () => (0, C.NavigateTo)("/")
            }) : r(!1)
        }), []);
        return i ? (0, t.jsx)(x, {}) : (0, t.jsxs)(x, {
            children: [(0, t.jsx)(u.default, {
                message: a === m.default.email && c ? "Password changed successfully!" : ""
            }), (() => {
                if (n.creatingAccount || n.loggingIn && !e.informationNeeded.length || n.updatingAccountInformation && !e.informationNeeded.length) {
                    const a = e.accountType === b.default.student;
                    return (0, t.jsxs)("div", {
                        className: "flex hc vc maxWidth flex-column",
                        children: [(0, t.jsx)(y.default, {
                            size: "large"
                        }), (0, t.jsx)("div", {
                            style: {
                                marginTop: 5,
                                fontWeight: j.FontWeights.Bold,
                                color: s.default.Black,
                                fontSize: 23
                            },
                            children: n.updatingAccountInformation || n.loggingIn ? n.classJoiningName ? "Just a second..." : "Logging you in..." : a ? "Just a second...." : "Creating your account..."
                        })]
                    })
                }
                return a === m.default.email ? (0, t.jsx)(g.default, {}) : a === m.default.password ? (0, t.jsx)(d.default, {}) : a === m.default.accountType ? (0, t.jsx)(p.default, {}) : a === m.default.nameAndPassword ? (0, t.jsx)(F.default, {}) : a === m.default.school ? (0, t.jsx)(v.default, {}) : a === m.default.educatorSpecificInfo ? (0, t.jsx)(U.default, {}) : a === m.default.acceptPolicies ? (0, t.jsx)(E.default, {}) : a === m.default.nonSchoolSpecificInfo ? (0, t.jsx)(A.default, {}) : null
            })()]
        })
    }));
    const x = c.default.div.attrs({
        className: "scroll-y"
    })(N || (N = (e => e)`
  width: 90%;
  max-width: 520px;
  padding: 20px;
  background: ${0};
  border-radius: 7px;
  max-height: 90vh;
`), s.default.White)
})), n.register("kgZr8", (function(a, i) {
    e(a.exports, "default", (function() {
        return c
    }));
    var t = n("9ZLc2"),
        o = n("bSGy0"),
        r = n("g4NpA");
    var c = () => {
        const {
            informationNeeded: e
        } = o.default.login, n = (e => e.includes(r.informationTypes.email) ? t.default.email : e.includes(r.informationTypes.password) ? t.default.password : e.includes(r.informationTypes.acceptedLatestPolicies) ? t.default.acceptPolicies : e.includes(r.informationTypes.accountType) ? t.default.accountType : e.includes(r.informationTypes.accountPassword) || e.includes(r.informationTypes.firstName) || e.includes(r.informationTypes.lastName) ? t.default.nameAndPassword : e.includes(r.informationTypes.country) ? t.default.school : e.includes(r.informationTypes.areaOfExpertise) || e.includes(r.informationTypes.gradeLevel) ? t.default.educatorSpecificInfo : e.includes(r.informationTypes.organization) ? t.default.nonSchoolSpecificInfo : null)(e);
        return {
            currentStage: n
        }
    }
})), n.register("9GWez", (function(a, i) {
    e(a.exports, "default", (function() {
        return f
    }));
    var t = n("hxEiv"),
        o = n("fywoC"),
        r = n("2FDaO"),
        c = n("bfV0l"),
        s = n("fC6cp"),
        l = n("beXRF"),
        u = n("lpEVe"),
        m = n("bcnSK"),
        g = n("lKmIF"),
        d = n("69SUA");
    let p, F, v, U, h = e => e;
    var f = (0, u.observer)((e => {
        const {
            navigation: n
        } = o.useContext(m.default), a = !!n.classJoiningName, i = a ? "/client/img/gimkitGIcon.svg" : "/client/img/svgLogo.svg", r = a ? 55 : 42;
        return (0, t.jsxs)(y, {
            children: [e.message && (0, t.jsx)(c.default, {
                style: {
                    marginBottom: 5
                },
                message: e.message,
                type: "success",
                showIcon: !0
            }), (0, t.jsx)(l.Link, {
                to: "/",
                children: (0, t.jsx)(j, {
                    style: {
                        height: r,
                        marginBottom: a ? 5 : 0
                    },
                    src: i
                })
            }), n.classJoiningName ? (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(E, {
                    children: n.classJoiningName
                }), (0, t.jsx)(S, {
                    children: n.classJoiningTeacherName
                })]
            }) : null, (0, t.jsx)(s.default, {})]
        })
    }));
    const y = r.default.div(p || (p = h`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`)),
        j = r.default.img(F || (F = h`
  margin-top: 11px;
`)),
        E = r.default.div(v || (v = h`
  color: ${0};
  font-size: 28px;
  font-weight: ${0};
`), g.default.Black, d.FontWeights.Bold),
        S = r.default.div(U || (U = h`
  color: rgba(0, 0, 0, 0.9);
  font-size: 15px;
`))
})), n.register("52VTT", (function(a, i) {
    e(a.exports, "default", (function() {
        return F
    }));
    var t = n("hxEiv"),
        o = n("fywoC"),
        r = n("69SUA"),
        c = n("fC6cp"),
        s = n("b9Zw0"),
        l = n("lKmIF"),
        u = n("7abSH"),
        m = n("54fdb"),
        g = n("krV2e"),
        d = n("bcnSK"),
        p = n("g4NpA");
    var F = (0, n("lpEVe").observer)((() => {
        const {
            login: e,
            navigation: n
        } = o.useContext(d.default), [a, i] = o.useState(""), [F, v] = o.useState(!1), U = !a, h = () => {
            U || n.loggingIn || (e.password = a, e.informationNeeded.replace(e.informationNeeded.filter((e => e !== p.informationTypes.password))))
        };
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
                style: {
                    fontWeight: r.FontWeights.Black,
                    fontSize: 24,
                    color: l.default.Black
                },
                children: "Enter your password"
            }), (0, t.jsx)(s.default.Password, {
                placeholder: "Password",
                size: "large",
                style: {
                    height: 40
                },
                autoFocus: !0,
                onPressEnter: h,
                onChange: e => {
                    n.loginError = null, i(e.target.value)
                }
            }), (0, t.jsx)(u.default, {
                onClick: h,
                disabled: U,
                style: {
                    width: "100%",
                    marginTop: 5
                },
                loading: n.loggingIn,
                children: "Login"
            }), (0, t.jsx)(g.default, {}), (0, t.jsx)(c.default, {}), (0, t.jsx)("div", {
                onClick: () => v(!0),
                style: {
                    cursor: "pointer",
                    fontSize: 12
                },
                children: "Forgot password?"
            }), (0, t.jsx)(m.default, {
                open: F,
                close: () => v(!1),
                defaultEmail: e.email
            })]
        })
    }))
})), n.register("7abSH", (function(a, i) {
    e(a.exports, "default", (function() {
        return c
    }));
    var t = n("hxEiv");
    n("fywoC");
    var o = n("lpEVe"),
        r = n("93yIm");
    var c = (0, o.observer)((e => (0, t.jsx)(r.default, {
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
})), n.register("fpJ5B", (function(a, i) {
    e(a.exports, "default", (function() {
        return y
    }));
    var t = n("hxEiv"),
        o = n("fywoC"),
        r = n("lpEVe"),
        c = n("69SUA"),
        s = n("lKmIF"),
        l = n("2FDaO"),
        u = n("bcnSK"),
        m = n("9BRL0"),
        g = n("g4NpA"),
        d = n("93yIm"),
        p = n("6edaj"),
        F = n("b1oE9");
    let v, U, h = e => e;
    const f = e => (0, t.jsx)(E, {
        backgroundColor: e.background,
        onClick: e.handleSelect,
        children: e.children
    });
    var y = (0, r.observer)((() => {
        const [e, n] = o.useState(!0), {
            login: a
        } = o.useContext(u.default), i = () => a.informationNeeded.replace(a.informationNeeded.filter((e => e !== g.informationTypes.accountType))), r = () => a.googleToken || a.userExists ? [] : [g.informationTypes.firstName, g.informationTypes.lastName, g.informationTypes.accountPassword], l = () => {
            a.accountType = m.default.educator, a.informationNeeded.replace([...a.informationNeeded, ...r(), g.informationTypes.country, g.informationTypes.areaOfExpertise, g.informationTypes.gradeLevel]), i()
        }, p = e => {
            a.accountType = m.default.student, a.informationNeeded.replace([...a.informationNeeded, ...r()]), i()
        };
        if (a.accountType) switch (a.accountType) {
            case m.default.educator:
                l();
                break;
            case m.default.guardian:
                a.accountType = m.default.guardian, a.informationNeeded.replace([...a.informationNeeded, ...r()]), i();
                break;
            case m.default.nonSchool:
                a.accountType = m.default.nonSchool, a.informationNeeded.replace([...a.informationNeeded, ...r(), g.informationTypes.organization]), i();
                break;
            case m.default.student:
                p()
        }
        return e ? (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
                style: {
                    fontWeight: c.FontWeights.Black,
                    fontSize: 29,
                    color: s.default.Black,
                    width: "100%",
                    textAlign: "center",
                    marginBottom: 8
                },
                children: "Select your account type..."
            }), (0, t.jsxs)(j, {
                children: [(0, t.jsxs)(f, {
                    handleSelect: l,
                    background: "#33691e",
                    children: [(0, t.jsx)("div", {
                        children: (0, t.jsx)("i", {
                            className: "fas fa-chalkboard-teacher"
                        })
                    }), "Educator"]
                }), (0, t.jsxs)(f, {
                    handleSelect: () => n(!1),
                    background: "#9E5F28",
                    children: [(0, t.jsx)("div", {
                        children: (0, t.jsx)("i", {
                            className: "fas fa-user"
                        })
                    }), "Student"]
                })]
            })]
        }) : (0, t.jsxs)("div", {
            children: [(0, t.jsxs)("div", {
                style: {
                    fontSize: 18,
                    color: s.default.Black,
                    marginBottom: 20,
                    fontWeight: c.FontWeights.Bold
                },
                children: ["I am at least 13 years of age (or 16+ outside the US) and agree to Gimkit's", " ", (0, t.jsx)("a", {
                    href: F.PRIVACY_POLICY,
                    target: "_blank",
                    children: "Privacy Policy"
                }), " ", "&", " ", (0, t.jsx)("a", {
                    href: F.TERMS_OF_SERVICE,
                    target: "_blank",
                    children: "Terms of Service"
                }), "."]
            }), (0, t.jsx)(d.default, {
                onClick: () => p(),
                block: !0,
                size: "large",
                style: {
                    height: 60
                },
                type: "primary",
                children: "I Agree"
            })]
        })
    }));
    const j = l.default.div(v || (v = h`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`)),
        E = l.default.div.attrs({
            className: "flex-center flex-column light-shadow"
        })(U || (U = h`
  border-radius: 4px;
  font-weight: ${0};
  color: ${0};
  background: ${0};
  width: 46%;
  height: 170px;
  cursor: pointer;
  font-size: 24px;
  transition: all 0.25s;
  will-change: transform;
  &:hover {
    background: ${0};
    transform: scale(1.03);
  }
`), c.FontWeights.Bold, s.default.White, (e => e.backgroundColor), (e => (0, p.lighten)(.1, e.backgroundColor)))
})), n.register("9BRL0", (function(n, a) {
    let i;
    var t;
    e(n.exports, "default", (function() {
        return o
    })), (t = i || (i = {})).educator = "educator", t.student = "student", t.guardian = "guardian", t.nonSchool = "nonSchool";
    var o = i
})), n.register("dEUk2", (function(a, i) {
    e(a.exports, "MAX_LENGTH_FIRST_NAME", (function() {
        return F
    })), e(a.exports, "MAX_LENGTH_LAST_NAME", (function() {
        return v
    })), e(a.exports, "Title", (function() {
        return U
    })), e(a.exports, "default", (function() {
        return f
    }));
    var t = n("hxEiv"),
        o = n("fywoC"),
        r = n("bcnSK"),
        c = n("69SUA"),
        s = n("lKmIF"),
        l = n("fC6cp"),
        u = n("b9Zw0"),
        m = n("7abSH"),
        g = n("g4NpA"),
        d = n("lLJEv"),
        p = n("9BRL0");
    const F = 20,
        v = 25,
        U = e => (0, t.jsx)("div", {
            style: {
                fontFamily: c.Fonts.SFPro,
                fontWeight: c.FontWeights.Bold,
                color: s.default.Black,
                fontSize: 18
            },
            children: e.children
        }),
        h = {
            width: "100%",
            display: "flex",
            marginTop: 0,
            minHeight: 0
        };
    var f = () => {
        const {
            login: e
        } = o.useContext(r.default), [n, a] = o.useState(e.firstName), [i, c] = o.useState(e.lastName), [s, f] = o.useState(e.password), y = () => {
            let a = !0;
            return e.informationNeeded.includes(g.informationTypes.firstName) && (n || (a = !1)), e.informationNeeded.includes(g.informationTypes.lastName) && (i || (a = !1)), e.informationNeeded.includes(g.informationTypes.accountPassword) && (!s || s.length < 6) && (a = !1), a
        }, j = () => {
            y() && (n && (e.firstName = n), i && (e.lastName = i), s && (e.password = s), e.informationNeeded.replace(e.informationNeeded.filter((e => e !== g.informationTypes.firstName && e !== g.informationTypes.lastName && e !== g.informationTypes.accountPassword))))
        }, E = e.accountType === p.default.student;
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(U, {
                children: "First Name"
            }), (0, t.jsx)(u.default, {
                maxLength: F,
                style: h,
                size: "large",
                placeholder: "First Name here...",
                onChange: e => a(e.target.value),
                onPressEnter: j,
                autoFocus: !0
            }), (0, t.jsx)("div", {
                style: {
                    height: 10
                }
            }), (0, t.jsxs)(U, {
                children: ["Last ", E ? "Initial" : "Name"]
            }), (0, t.jsx)(u.default, {
                maxLength: E ? 1 : v,
                style: h,
                size: "large",
                placeholder: `Last ${E?"Initial":"Name"} here...`,
                onChange: e => c(e.target.value),
                onPressEnter: j
            }), e.informationNeeded.includes(g.informationTypes.accountPassword) && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(l.default, {}), (0, t.jsx)(U, {
                    children: "Password"
                }), (0, t.jsx)("div", {
                    style: {
                        fontSize: 12,
                        marginTop: -5,
                        marginBottom: 4
                    },
                    children: "Must contain at least 6 characters"
                }), (0, t.jsx)(u.default.Password, {
                    style: h,
                    onChange: e => f(e.target.value),
                    placeholder: "Password here...",
                    size: "large",
                    maxLength: 96,
                    onPressEnter: j
                })]
            }), (0, t.jsx)(l.default, {}), (0, t.jsx)(m.default, {
                disabled: !y(),
                onClick: j,
                style: {
                    width: "100%"
                },
                size: "large",
                children: "Continue"
            }), (0, t.jsx)("div", {
                style: {
                    height: 10
                }
            }), !E && (0, t.jsx)(d.default, {
                link: "https://www.notion.so/gimkit/First-Last-Name-8983e473b6bb4450aaf2f413702cc061"
            })]
        })
    }
})), n.register("lLJEv", (function(a, i) {
    e(a.exports, "default", (function() {
        return r
    }));
    var t = n("hxEiv");
    n("fywoC");
    var o = n("bNqCy");
    var r = e => (0, t.jsxs)("div", {
        style: {
            justifyContent: "space-between"
        },
        className: "flex maxWidth",
        children: [(0, t.jsx)("div", {}), (0, t.jsx)(o.default, {
            link: e.link
        })]
    })
})), n.register("bNqCy", (function(a, i) {
    e(a.exports, "default", (function() {
        return s
    }));
    var t = n("hxEiv");
    n("fywoC");
    var o = n("d55E8"),
        r = n("93yIm"),
        c = n("e4KJZ");
    var s = e => (0, t.jsx)(c.default, {
        title: "Learn more on why we collect this data",
        children: (0, t.jsx)(r.default, {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            shape: "circle",
            icon: (0, t.jsx)(o.default, {}),
            href: e.link || "",
            target: "_blank"
        })
    })
})), n.register("d55E8", (function(a, i) {
    e(a.exports, "default", (function() {
        return l
    }));
    var t = n("dnh3u"),
        o = n("fywoC"),
        r = n("l6faa"),
        c = n("dwKuN"),
        s = function(e, n) {
            return o.createElement(c.default, (0, t.default)((0, t.default)({}, e), {}, {
                ref: n,
                icon: r.default
            }))
        };
    s.displayName = "LockOutlined";
    var l = o.forwardRef(s)
})), n.register("l6faa", (function(n, a) {
    e(n.exports, "default", (function() {
        return i
    }));
    var i = {
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
})), n.register("5qjf8", (function(a, i) {
    e(a.exports, "default", (function() {
        return y
    }));
    var t = n("hxEiv"),
        o = n("fywoC"),
        r = n("5b7Rw"),
        c = n("bfV0l"),
        s = n("fC6cp"),
        l = n("b9Zw0"),
        u = n("lqzWa"),
        m = n("gHmyG"),
        g = n("dEUk2"),
        d = n("iMOcM"),
        p = n("6UYrI"),
        F = n("69SUA"),
        v = n("lKmIF"),
        U = n("bcnSK"),
        h = n("g4NpA"),
        f = n("lLJEv");
    var y = () => {
        const {
            login: e
        } = o.useContext(U.default), [n, a] = o.useState(""), [i, y] = o.useState(!1), [j, E] = o.useState(""), [S, A] = o.useState(!1), [b, C] = o.useState(!1), [N, k] = o.useState([]);
        o.useEffect((() => {
            j && (C(!0), (0, d.request)({
                url: "/api/users/fetch-schools",
                method: "post",
                data: {
                    zipCode: j
                },
                success: e => {
                    e && e.schoolList && e.schoolList.length ? (k(e.schoolList), y(!1)) : x()
                },
                error: () => x(),
                both: () => C(!1)
            }))
        }), [j]);
        const x = a => {
                e.country = a || n, e.informationNeeded.replace(e.informationNeeded.filter((e => e !== h.informationTypes.country)))
            },
            T = (n, a) => {
                e.schoolId = n, e.districtId = a, x()
            };
        return (0, t.jsxs)(t.Fragment, {
            children: [N && N.length && !i ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsxs)("div", {
                    style: {
                        color: "blue",
                        cursor: "pointer"
                    },
                    onClick: () => {
                        k([]), E(""), y(!0), A(!1)
                    },
                    children: [(0, t.jsx)("i", {
                        className: "fad fa-long-arrow-left"
                    }), " Go Back"]
                })
            }) : null, (0, t.jsx)("div", {
                style: {
                    fontWeight: F.FontWeights.Black,
                    fontSize: 30,
                    color: v.default.Black,
                    marginBottom: 13
                },
                children: "🏫 Find your school"
            }), !N.length && (0, t.jsxs)(t.Fragment, {
                children: [!i && (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(g.Title, {
                        children: "🗺️ Country"
                    }), (0, t.jsx)(u.default, {
                        style: {
                            width: "100%"
                        },
                        showSearch: !0,
                        placeholder: "Select country...",
                        onChange: e => {
                            a(e), "US" !== e ? x(e) : y(!0)
                        },
                        filterOption: (e, n) => n.props.children.toLowerCase().indexOf(e.toLowerCase()) >= 0,
                        size: "large",
                        children: Object.keys(r.countries).sort((e => "US" === e ? 1 : -1)).reverse().map((e => {
                            const n = r.countries[e];
                            let a = "";
                            return n.emoji && (a += `${n.emoji} `), n.name && ("United States" === n.name ? a += "United States Of America" : a += n.name), (0, t.jsx)(u.default.Option, {
                                value: e,
                                children: a
                            }, e)
                        }))
                    })]
                }), !b && i && (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(g.Title, {
                        children: "🇺🇲 Zip Code of School"
                    }), (0, t.jsx)(l.default, {
                        onChange: e => {
                            const n = e.target.value;
                            A(!1), n && 5 === String(n).length && E(n)
                        },
                        type: "number",
                        placeholder: "Zip code here...",
                        maxLength: 5,
                        size: "large",
                        autoFocus: !0
                    }), S && (0, t.jsx)(c.default, {
                        style: {
                            marginTop: 10
                        },
                        showIcon: !0,
                        type: "error",
                        message: "Invalid Zip Code",
                        description: (0, t.jsxs)(t.Fragment, {
                            children: ["Try entering another zip code or", " ", (0, t.jsx)("a", {
                                onClick: () => x(),
                                children: "skip this step."
                            })]
                        })
                    })]
                })]
            }), b && (0, t.jsx)(m.default, {
                size: "large"
            }), N && N.length ? (0, t.jsxs)(t.Fragment, {
                children: [N.map((e => (0, t.jsx)(p.default, {
                    name: e.schoolName,
                    description: `${e.address.city}, ${e.address.stateFull}`,
                    onSelect: () => T(e && e.schoolid ? e.schoolid : null, e && e.district && e.district.districtID ? e.district.districtID : null)
                }, e.schoolid))), (0, t.jsx)(p.default, {
                    name: "Other",
                    description: "School not listed",
                    onSelect: () => T(null, null)
                })]
            }) : null, (0, t.jsx)(s.default, {}), (0, t.jsx)(f.default, {
                link: "https://www.notion.so/gimkit/Country-Zip-Code-School-9bca6de77686407cad0a4298a4a1d00e"
            })]
        })
    }
})), n.register("5b7Rw", (function(e, n) {
    /*! countries-list v2.5.6 by Annexare | MIT */
    e.exports, e.exports = function(e) {
        var n = {};

        function a(i) {
            if (n[i]) return n[i].exports;
            var t = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(t.exports, t, t.exports, a), t.l = !0, t.exports
        }
        return a.m = e, a.c = n, a.d = function(e, n, i) {
            a.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: i
            })
        }, a.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, a.t = function(e, n) {
            if (1 & n && (e = a(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (a.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var t in e) a.d(i, t, function(n) {
                    return e[n]
                }.bind(null, t));
            return i
        }, a.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return a.d(n, "a", n), n
        }, a.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, a.p = "", a(a.s = 1)
    }([function(e, n) {
        (function(n) {
            e.exports = n
        }).call(this, {})
    }, function(e, n, a) {
        var i = a(2),
            t = a(3),
            o = a(4),
            r = a(5),
            c = a(6).ucs2,
            s = 127462 - "A".charCodeAt(0),
            l = /^[A-Z]{2}$/;
        e.exports = {
            continents: i,
            countries: t,
            languages: o,
            languagesAll: r,
            getEmojiFlag: function(e) {
                return l.test(e) ? c.encode(e.split("").map((function(e) {
                    return s + e.charCodeAt(0)
                }))) : ""
            },
            getUnicode: function(e) {
                return c.decode(e).map((function(e) {
                    return "U+" + Number(e).toString(16).toUpperCase()
                })).join(" ")
            }
        }
    }, function(e) {
        e.exports = JSON.parse('{"AF":"Africa","AN":"Antarctica","AS":"Asia","EU":"Europe","NA":"North America","OC":"Oceania","SA":"South America"}')
    }, function(e) {
        e.exports = JSON.parse('{"AD":{"name":"Andorra","native":"Andorra","phone":"376","continent":"EU","capital":"Andorra la Vella","currency":"EUR","languages":["ca"],"emoji":"🇦🇩","emojiU":"U+1F1E6 U+1F1E9"},"AE":{"name":"United Arab Emirates","native":"دولة الإمارات العربية المتحدة","phone":"971","continent":"AS","capital":"Abu Dhabi","currency":"AED","languages":["ar"],"emoji":"🇦🇪","emojiU":"U+1F1E6 U+1F1EA"},"AF":{"name":"Afghanistan","native":"افغانستان","phone":"93","continent":"AS","capital":"Kabul","currency":"AFN","languages":["ps","uz","tk"],"emoji":"🇦🇫","emojiU":"U+1F1E6 U+1F1EB"},"AG":{"name":"Antigua and Barbuda","native":"Antigua and Barbuda","phone":"1268","continent":"NA","capital":"Saint John\'s","currency":"XCD","languages":["en"],"emoji":"🇦🇬","emojiU":"U+1F1E6 U+1F1EC"},"AI":{"name":"Anguilla","native":"Anguilla","phone":"1264","continent":"NA","capital":"The Valley","currency":"XCD","languages":["en"],"emoji":"🇦🇮","emojiU":"U+1F1E6 U+1F1EE"},"AL":{"name":"Albania","native":"Shqipëria","phone":"355","continent":"EU","capital":"Tirana","currency":"ALL","languages":["sq"],"emoji":"🇦🇱","emojiU":"U+1F1E6 U+1F1F1"},"AM":{"name":"Armenia","native":"Հայաստան","phone":"374","continent":"AS","capital":"Yerevan","currency":"AMD","languages":["hy","ru"],"emoji":"🇦🇲","emojiU":"U+1F1E6 U+1F1F2"},"AO":{"name":"Angola","native":"Angola","phone":"244","continent":"AF","capital":"Luanda","currency":"AOA","languages":["pt"],"emoji":"🇦🇴","emojiU":"U+1F1E6 U+1F1F4"},"AQ":{"name":"Antarctica","native":"Antarctica","phone":"672","continent":"AN","capital":"","currency":"","languages":[],"emoji":"🇦🇶","emojiU":"U+1F1E6 U+1F1F6"},"AR":{"name":"Argentina","native":"Argentina","phone":"54","continent":"SA","capital":"Buenos Aires","currency":"ARS","languages":["es","gn"],"emoji":"🇦🇷","emojiU":"U+1F1E6 U+1F1F7"},"AS":{"name":"American Samoa","native":"American Samoa","phone":"1684","continent":"OC","capital":"Pago Pago","currency":"USD","languages":["en","sm"],"emoji":"🇦🇸","emojiU":"U+1F1E6 U+1F1F8"},"AT":{"name":"Austria","native":"Österreich","phone":"43","continent":"EU","capital":"Vienna","currency":"EUR","languages":["de"],"emoji":"🇦🇹","emojiU":"U+1F1E6 U+1F1F9"},"AU":{"name":"Australia","native":"Australia","phone":"61","continent":"OC","capital":"Canberra","currency":"AUD","languages":["en"],"emoji":"🇦🇺","emojiU":"U+1F1E6 U+1F1FA"},"AW":{"name":"Aruba","native":"Aruba","phone":"297","continent":"NA","capital":"Oranjestad","currency":"AWG","languages":["nl","pa"],"emoji":"🇦🇼","emojiU":"U+1F1E6 U+1F1FC"},"AX":{"name":"Åland","native":"Åland","phone":"358","continent":"EU","capital":"Mariehamn","currency":"EUR","languages":["sv"],"emoji":"🇦🇽","emojiU":"U+1F1E6 U+1F1FD"},"AZ":{"name":"Azerbaijan","native":"Azərbaycan","phone":"994","continent":"AS","capital":"Baku","currency":"AZN","languages":["az"],"emoji":"🇦🇿","emojiU":"U+1F1E6 U+1F1FF"},"BA":{"name":"Bosnia and Herzegovina","native":"Bosna i Hercegovina","phone":"387","continent":"EU","capital":"Sarajevo","currency":"BAM","languages":["bs","hr","sr"],"emoji":"🇧🇦","emojiU":"U+1F1E7 U+1F1E6"},"BB":{"name":"Barbados","native":"Barbados","phone":"1246","continent":"NA","capital":"Bridgetown","currency":"BBD","languages":["en"],"emoji":"🇧🇧","emojiU":"U+1F1E7 U+1F1E7"},"BD":{"name":"Bangladesh","native":"Bangladesh","phone":"880","continent":"AS","capital":"Dhaka","currency":"BDT","languages":["bn"],"emoji":"🇧🇩","emojiU":"U+1F1E7 U+1F1E9"},"BE":{"name":"Belgium","native":"België","phone":"32","continent":"EU","capital":"Brussels","currency":"EUR","languages":["nl","fr","de"],"emoji":"🇧🇪","emojiU":"U+1F1E7 U+1F1EA"},"BF":{"name":"Burkina Faso","native":"Burkina Faso","phone":"226","continent":"AF","capital":"Ouagadougou","currency":"XOF","languages":["fr","ff"],"emoji":"🇧🇫","emojiU":"U+1F1E7 U+1F1EB"},"BG":{"name":"Bulgaria","native":"България","phone":"359","continent":"EU","capital":"Sofia","currency":"BGN","languages":["bg"],"emoji":"🇧🇬","emojiU":"U+1F1E7 U+1F1EC"},"BH":{"name":"Bahrain","native":"‏البحرين","phone":"973","continent":"AS","capital":"Manama","currency":"BHD","languages":["ar"],"emoji":"🇧🇭","emojiU":"U+1F1E7 U+1F1ED"},"BI":{"name":"Burundi","native":"Burundi","phone":"257","continent":"AF","capital":"Bujumbura","currency":"BIF","languages":["fr","rn"],"emoji":"🇧🇮","emojiU":"U+1F1E7 U+1F1EE"},"BJ":{"name":"Benin","native":"Bénin","phone":"229","continent":"AF","capital":"Porto-Novo","currency":"XOF","languages":["fr"],"emoji":"🇧🇯","emojiU":"U+1F1E7 U+1F1EF"},"BL":{"name":"Saint Barthélemy","native":"Saint-Barthélemy","phone":"590","continent":"NA","capital":"Gustavia","currency":"EUR","languages":["fr"],"emoji":"🇧🇱","emojiU":"U+1F1E7 U+1F1F1"},"BM":{"name":"Bermuda","native":"Bermuda","phone":"1441","continent":"NA","capital":"Hamilton","currency":"BMD","languages":["en"],"emoji":"🇧🇲","emojiU":"U+1F1E7 U+1F1F2"},"BN":{"name":"Brunei","native":"Negara Brunei Darussalam","phone":"673","continent":"AS","capital":"Bandar Seri Begawan","currency":"BND","languages":["ms"],"emoji":"🇧🇳","emojiU":"U+1F1E7 U+1F1F3"},"BO":{"name":"Bolivia","native":"Bolivia","phone":"591","continent":"SA","capital":"Sucre","currency":"BOB,BOV","languages":["es","ay","qu"],"emoji":"🇧🇴","emojiU":"U+1F1E7 U+1F1F4"},"BQ":{"name":"Bonaire","native":"Bonaire","phone":"5997","continent":"NA","capital":"Kralendijk","currency":"USD","languages":["nl"],"emoji":"🇧🇶","emojiU":"U+1F1E7 U+1F1F6"},"BR":{"name":"Brazil","native":"Brasil","phone":"55","continent":"SA","capital":"Brasília","currency":"BRL","languages":["pt"],"emoji":"🇧🇷","emojiU":"U+1F1E7 U+1F1F7"},"BS":{"name":"Bahamas","native":"Bahamas","phone":"1242","continent":"NA","capital":"Nassau","currency":"BSD","languages":["en"],"emoji":"🇧🇸","emojiU":"U+1F1E7 U+1F1F8"},"BT":{"name":"Bhutan","native":"ʼbrug-yul","phone":"975","continent":"AS","capital":"Thimphu","currency":"BTN,INR","languages":["dz"],"emoji":"🇧🇹","emojiU":"U+1F1E7 U+1F1F9"},"BV":{"name":"Bouvet Island","native":"Bouvetøya","phone":"47","continent":"AN","capital":"","currency":"NOK","languages":["no","nb","nn"],"emoji":"🇧🇻","emojiU":"U+1F1E7 U+1F1FB"},"BW":{"name":"Botswana","native":"Botswana","phone":"267","continent":"AF","capital":"Gaborone","currency":"BWP","languages":["en","tn"],"emoji":"🇧🇼","emojiU":"U+1F1E7 U+1F1FC"},"BY":{"name":"Belarus","native":"Белару́сь","phone":"375","continent":"EU","capital":"Minsk","currency":"BYN","languages":["be","ru"],"emoji":"🇧🇾","emojiU":"U+1F1E7 U+1F1FE"},"BZ":{"name":"Belize","native":"Belize","phone":"501","continent":"NA","capital":"Belmopan","currency":"BZD","languages":["en","es"],"emoji":"🇧🇿","emojiU":"U+1F1E7 U+1F1FF"},"CA":{"name":"Canada","native":"Canada","phone":"1","continent":"NA","capital":"Ottawa","currency":"CAD","languages":["en","fr"],"emoji":"🇨🇦","emojiU":"U+1F1E8 U+1F1E6"},"CC":{"name":"Cocos [Keeling] Islands","native":"Cocos (Keeling) Islands","phone":"61","continent":"AS","capital":"West Island","currency":"AUD","languages":["en"],"emoji":"🇨🇨","emojiU":"U+1F1E8 U+1F1E8"},"CD":{"name":"Democratic Republic of the Congo","native":"République démocratique du Congo","phone":"243","continent":"AF","capital":"Kinshasa","currency":"CDF","languages":["fr","ln","kg","sw","lu"],"emoji":"🇨🇩","emojiU":"U+1F1E8 U+1F1E9"},"CF":{"name":"Central African Republic","native":"Ködörösêse tî Bêafrîka","phone":"236","continent":"AF","capital":"Bangui","currency":"XAF","languages":["fr","sg"],"emoji":"🇨🇫","emojiU":"U+1F1E8 U+1F1EB"},"CG":{"name":"Republic of the Congo","native":"République du Congo","phone":"242","continent":"AF","capital":"Brazzaville","currency":"XAF","languages":["fr","ln"],"emoji":"🇨🇬","emojiU":"U+1F1E8 U+1F1EC"},"CH":{"name":"Switzerland","native":"Schweiz","phone":"41","continent":"EU","capital":"Bern","currency":"CHE,CHF,CHW","languages":["de","fr","it"],"emoji":"🇨🇭","emojiU":"U+1F1E8 U+1F1ED"},"CI":{"name":"Ivory Coast","native":"Côte d\'Ivoire","phone":"225","continent":"AF","capital":"Yamoussoukro","currency":"XOF","languages":["fr"],"emoji":"🇨🇮","emojiU":"U+1F1E8 U+1F1EE"},"CK":{"name":"Cook Islands","native":"Cook Islands","phone":"682","continent":"OC","capital":"Avarua","currency":"NZD","languages":["en"],"emoji":"🇨🇰","emojiU":"U+1F1E8 U+1F1F0"},"CL":{"name":"Chile","native":"Chile","phone":"56","continent":"SA","capital":"Santiago","currency":"CLF,CLP","languages":["es"],"emoji":"🇨🇱","emojiU":"U+1F1E8 U+1F1F1"},"CM":{"name":"Cameroon","native":"Cameroon","phone":"237","continent":"AF","capital":"Yaoundé","currency":"XAF","languages":["en","fr"],"emoji":"🇨🇲","emojiU":"U+1F1E8 U+1F1F2"},"CN":{"name":"China","native":"中国","phone":"86","continent":"AS","capital":"Beijing","currency":"CNY","languages":["zh"],"emoji":"🇨🇳","emojiU":"U+1F1E8 U+1F1F3"},"CO":{"name":"Colombia","native":"Colombia","phone":"57","continent":"SA","capital":"Bogotá","currency":"COP","languages":["es"],"emoji":"🇨🇴","emojiU":"U+1F1E8 U+1F1F4"},"CR":{"name":"Costa Rica","native":"Costa Rica","phone":"506","continent":"NA","capital":"San José","currency":"CRC","languages":["es"],"emoji":"🇨🇷","emojiU":"U+1F1E8 U+1F1F7"},"CU":{"name":"Cuba","native":"Cuba","phone":"53","continent":"NA","capital":"Havana","currency":"CUC,CUP","languages":["es"],"emoji":"🇨🇺","emojiU":"U+1F1E8 U+1F1FA"},"CV":{"name":"Cape Verde","native":"Cabo Verde","phone":"238","continent":"AF","capital":"Praia","currency":"CVE","languages":["pt"],"emoji":"🇨🇻","emojiU":"U+1F1E8 U+1F1FB"},"CW":{"name":"Curacao","native":"Curaçao","phone":"5999","continent":"NA","capital":"Willemstad","currency":"ANG","languages":["nl","pa","en"],"emoji":"🇨🇼","emojiU":"U+1F1E8 U+1F1FC"},"CX":{"name":"Christmas Island","native":"Christmas Island","phone":"61","continent":"AS","capital":"Flying Fish Cove","currency":"AUD","languages":["en"],"emoji":"🇨🇽","emojiU":"U+1F1E8 U+1F1FD"},"CY":{"name":"Cyprus","native":"Κύπρος","phone":"357","continent":"EU","capital":"Nicosia","currency":"EUR","languages":["el","tr","hy"],"emoji":"🇨🇾","emojiU":"U+1F1E8 U+1F1FE"},"CZ":{"name":"Czech Republic","native":"Česká republika","phone":"420","continent":"EU","capital":"Prague","currency":"CZK","languages":["cs","sk"],"emoji":"🇨🇿","emojiU":"U+1F1E8 U+1F1FF"},"DE":{"name":"Germany","native":"Deutschland","phone":"49","continent":"EU","capital":"Berlin","currency":"EUR","languages":["de"],"emoji":"🇩🇪","emojiU":"U+1F1E9 U+1F1EA"},"DJ":{"name":"Djibouti","native":"Djibouti","phone":"253","continent":"AF","capital":"Djibouti","currency":"DJF","languages":["fr","ar"],"emoji":"🇩🇯","emojiU":"U+1F1E9 U+1F1EF"},"DK":{"name":"Denmark","native":"Danmark","phone":"45","continent":"EU","capital":"Copenhagen","currency":"DKK","languages":["da"],"emoji":"🇩🇰","emojiU":"U+1F1E9 U+1F1F0"},"DM":{"name":"Dominica","native":"Dominica","phone":"1767","continent":"NA","capital":"Roseau","currency":"XCD","languages":["en"],"emoji":"🇩🇲","emojiU":"U+1F1E9 U+1F1F2"},"DO":{"name":"Dominican Republic","native":"República Dominicana","phone":"1809,1829,1849","continent":"NA","capital":"Santo Domingo","currency":"DOP","languages":["es"],"emoji":"🇩🇴","emojiU":"U+1F1E9 U+1F1F4"},"DZ":{"name":"Algeria","native":"الجزائر","phone":"213","continent":"AF","capital":"Algiers","currency":"DZD","languages":["ar"],"emoji":"🇩🇿","emojiU":"U+1F1E9 U+1F1FF"},"EC":{"name":"Ecuador","native":"Ecuador","phone":"593","continent":"SA","capital":"Quito","currency":"USD","languages":["es"],"emoji":"🇪🇨","emojiU":"U+1F1EA U+1F1E8"},"EE":{"name":"Estonia","native":"Eesti","phone":"372","continent":"EU","capital":"Tallinn","currency":"EUR","languages":["et"],"emoji":"🇪🇪","emojiU":"U+1F1EA U+1F1EA"},"EG":{"name":"Egypt","native":"مصر‎","phone":"20","continent":"AF","capital":"Cairo","currency":"EGP","languages":["ar"],"emoji":"🇪🇬","emojiU":"U+1F1EA U+1F1EC"},"EH":{"name":"Western Sahara","native":"الصحراء الغربية","phone":"212","continent":"AF","capital":"El Aaiún","currency":"MAD,DZD,MRU","languages":["es"],"emoji":"🇪🇭","emojiU":"U+1F1EA U+1F1ED"},"ER":{"name":"Eritrea","native":"ኤርትራ","phone":"291","continent":"AF","capital":"Asmara","currency":"ERN","languages":["ti","ar","en"],"emoji":"🇪🇷","emojiU":"U+1F1EA U+1F1F7"},"ES":{"name":"Spain","native":"España","phone":"34","continent":"EU","capital":"Madrid","currency":"EUR","languages":["es","eu","ca","gl","oc"],"emoji":"🇪🇸","emojiU":"U+1F1EA U+1F1F8"},"ET":{"name":"Ethiopia","native":"ኢትዮጵያ","phone":"251","continent":"AF","capital":"Addis Ababa","currency":"ETB","languages":["am"],"emoji":"🇪🇹","emojiU":"U+1F1EA U+1F1F9"},"FI":{"name":"Finland","native":"Suomi","phone":"358","continent":"EU","capital":"Helsinki","currency":"EUR","languages":["fi","sv"],"emoji":"🇫🇮","emojiU":"U+1F1EB U+1F1EE"},"FJ":{"name":"Fiji","native":"Fiji","phone":"679","continent":"OC","capital":"Suva","currency":"FJD","languages":["en","fj","hi","ur"],"emoji":"🇫🇯","emojiU":"U+1F1EB U+1F1EF"},"FK":{"name":"Falkland Islands","native":"Falkland Islands","phone":"500","continent":"SA","capital":"Stanley","currency":"FKP","languages":["en"],"emoji":"🇫🇰","emojiU":"U+1F1EB U+1F1F0"},"FM":{"name":"Micronesia","native":"Micronesia","phone":"691","continent":"OC","capital":"Palikir","currency":"USD","languages":["en"],"emoji":"🇫🇲","emojiU":"U+1F1EB U+1F1F2"},"FO":{"name":"Faroe Islands","native":"Føroyar","phone":"298","continent":"EU","capital":"Tórshavn","currency":"DKK","languages":["fo"],"emoji":"🇫🇴","emojiU":"U+1F1EB U+1F1F4"},"FR":{"name":"France","native":"France","phone":"33","continent":"EU","capital":"Paris","currency":"EUR","languages":["fr"],"emoji":"🇫🇷","emojiU":"U+1F1EB U+1F1F7"},"GA":{"name":"Gabon","native":"Gabon","phone":"241","continent":"AF","capital":"Libreville","currency":"XAF","languages":["fr"],"emoji":"🇬🇦","emojiU":"U+1F1EC U+1F1E6"},"GB":{"name":"United Kingdom","native":"United Kingdom","phone":"44","continent":"EU","capital":"London","currency":"GBP","languages":["en"],"emoji":"🇬🇧","emojiU":"U+1F1EC U+1F1E7"},"GD":{"name":"Grenada","native":"Grenada","phone":"1473","continent":"NA","capital":"St. George\'s","currency":"XCD","languages":["en"],"emoji":"🇬🇩","emojiU":"U+1F1EC U+1F1E9"},"GE":{"name":"Georgia","native":"საქართველო","phone":"995","continent":"AS","capital":"Tbilisi","currency":"GEL","languages":["ka"],"emoji":"🇬🇪","emojiU":"U+1F1EC U+1F1EA"},"GF":{"name":"French Guiana","native":"Guyane française","phone":"594","continent":"SA","capital":"Cayenne","currency":"EUR","languages":["fr"],"emoji":"🇬🇫","emojiU":"U+1F1EC U+1F1EB"},"GG":{"name":"Guernsey","native":"Guernsey","phone":"44","continent":"EU","capital":"St. Peter Port","currency":"GBP","languages":["en","fr"],"emoji":"🇬🇬","emojiU":"U+1F1EC U+1F1EC"},"GH":{"name":"Ghana","native":"Ghana","phone":"233","continent":"AF","capital":"Accra","currency":"GHS","languages":["en"],"emoji":"🇬🇭","emojiU":"U+1F1EC U+1F1ED"},"GI":{"name":"Gibraltar","native":"Gibraltar","phone":"350","continent":"EU","capital":"Gibraltar","currency":"GIP","languages":["en"],"emoji":"🇬🇮","emojiU":"U+1F1EC U+1F1EE"},"GL":{"name":"Greenland","native":"Kalaallit Nunaat","phone":"299","continent":"NA","capital":"Nuuk","currency":"DKK","languages":["kl"],"emoji":"🇬🇱","emojiU":"U+1F1EC U+1F1F1"},"GM":{"name":"Gambia","native":"Gambia","phone":"220","continent":"AF","capital":"Banjul","currency":"GMD","languages":["en"],"emoji":"🇬🇲","emojiU":"U+1F1EC U+1F1F2"},"GN":{"name":"Guinea","native":"Guinée","phone":"224","continent":"AF","capital":"Conakry","currency":"GNF","languages":["fr","ff"],"emoji":"🇬🇳","emojiU":"U+1F1EC U+1F1F3"},"GP":{"name":"Guadeloupe","native":"Guadeloupe","phone":"590","continent":"NA","capital":"Basse-Terre","currency":"EUR","languages":["fr"],"emoji":"🇬🇵","emojiU":"U+1F1EC U+1F1F5"},"GQ":{"name":"Equatorial Guinea","native":"Guinea Ecuatorial","phone":"240","continent":"AF","capital":"Malabo","currency":"XAF","languages":["es","fr"],"emoji":"🇬🇶","emojiU":"U+1F1EC U+1F1F6"},"GR":{"name":"Greece","native":"Ελλάδα","phone":"30","continent":"EU","capital":"Athens","currency":"EUR","languages":["el"],"emoji":"🇬🇷","emojiU":"U+1F1EC U+1F1F7"},"GS":{"name":"South Georgia and the South Sandwich Islands","native":"South Georgia","phone":"500","continent":"AN","capital":"King Edward Point","currency":"GBP","languages":["en"],"emoji":"🇬🇸","emojiU":"U+1F1EC U+1F1F8"},"GT":{"name":"Guatemala","native":"Guatemala","phone":"502","continent":"NA","capital":"Guatemala City","currency":"GTQ","languages":["es"],"emoji":"🇬🇹","emojiU":"U+1F1EC U+1F1F9"},"GU":{"name":"Guam","native":"Guam","phone":"1671","continent":"OC","capital":"Hagåtña","currency":"USD","languages":["en","ch","es"],"emoji":"🇬🇺","emojiU":"U+1F1EC U+1F1FA"},"GW":{"name":"Guinea-Bissau","native":"Guiné-Bissau","phone":"245","continent":"AF","capital":"Bissau","currency":"XOF","languages":["pt"],"emoji":"🇬🇼","emojiU":"U+1F1EC U+1F1FC"},"GY":{"name":"Guyana","native":"Guyana","phone":"592","continent":"SA","capital":"Georgetown","currency":"GYD","languages":["en"],"emoji":"🇬🇾","emojiU":"U+1F1EC U+1F1FE"},"HK":{"name":"Hong Kong","native":"香港","phone":"852","continent":"AS","capital":"City of Victoria","currency":"HKD","languages":["zh","en"],"emoji":"🇭🇰","emojiU":"U+1F1ED U+1F1F0"},"HM":{"name":"Heard Island and McDonald Islands","native":"Heard Island and McDonald Islands","phone":"61","continent":"AN","capital":"","currency":"AUD","languages":["en"],"emoji":"🇭🇲","emojiU":"U+1F1ED U+1F1F2"},"HN":{"name":"Honduras","native":"Honduras","phone":"504","continent":"NA","capital":"Tegucigalpa","currency":"HNL","languages":["es"],"emoji":"🇭🇳","emojiU":"U+1F1ED U+1F1F3"},"HR":{"name":"Croatia","native":"Hrvatska","phone":"385","continent":"EU","capital":"Zagreb","currency":"HRK","languages":["hr"],"emoji":"🇭🇷","emojiU":"U+1F1ED U+1F1F7"},"HT":{"name":"Haiti","native":"Haïti","phone":"509","continent":"NA","capital":"Port-au-Prince","currency":"HTG,USD","languages":["fr","ht"],"emoji":"🇭🇹","emojiU":"U+1F1ED U+1F1F9"},"HU":{"name":"Hungary","native":"Magyarország","phone":"36","continent":"EU","capital":"Budapest","currency":"HUF","languages":["hu"],"emoji":"🇭🇺","emojiU":"U+1F1ED U+1F1FA"},"ID":{"name":"Indonesia","native":"Indonesia","phone":"62","continent":"AS","capital":"Jakarta","currency":"IDR","languages":["id"],"emoji":"🇮🇩","emojiU":"U+1F1EE U+1F1E9"},"IE":{"name":"Ireland","native":"Éire","phone":"353","continent":"EU","capital":"Dublin","currency":"EUR","languages":["ga","en"],"emoji":"🇮🇪","emojiU":"U+1F1EE U+1F1EA"},"IL":{"name":"Israel","native":"יִשְׂרָאֵל","phone":"972","continent":"AS","capital":"Jerusalem","currency":"ILS","languages":["he","ar"],"emoji":"🇮🇱","emojiU":"U+1F1EE U+1F1F1"},"IM":{"name":"Isle of Man","native":"Isle of Man","phone":"44","continent":"EU","capital":"Douglas","currency":"GBP","languages":["en","gv"],"emoji":"🇮🇲","emojiU":"U+1F1EE U+1F1F2"},"IN":{"name":"India","native":"भारत","phone":"91","continent":"AS","capital":"New Delhi","currency":"INR","languages":["hi","en"],"emoji":"🇮🇳","emojiU":"U+1F1EE U+1F1F3"},"IO":{"name":"British Indian Ocean Territory","native":"British Indian Ocean Territory","phone":"246","continent":"AS","capital":"Diego Garcia","currency":"USD","languages":["en"],"emoji":"🇮🇴","emojiU":"U+1F1EE U+1F1F4"},"IQ":{"name":"Iraq","native":"العراق","phone":"964","continent":"AS","capital":"Baghdad","currency":"IQD","languages":["ar","ku"],"emoji":"🇮🇶","emojiU":"U+1F1EE U+1F1F6"},"IR":{"name":"Iran","native":"ایران","phone":"98","continent":"AS","capital":"Tehran","currency":"IRR","languages":["fa"],"emoji":"🇮🇷","emojiU":"U+1F1EE U+1F1F7"},"IS":{"name":"Iceland","native":"Ísland","phone":"354","continent":"EU","capital":"Reykjavik","currency":"ISK","languages":["is"],"emoji":"🇮🇸","emojiU":"U+1F1EE U+1F1F8"},"IT":{"name":"Italy","native":"Italia","phone":"39","continent":"EU","capital":"Rome","currency":"EUR","languages":["it"],"emoji":"🇮🇹","emojiU":"U+1F1EE U+1F1F9"},"JE":{"name":"Jersey","native":"Jersey","phone":"44","continent":"EU","capital":"Saint Helier","currency":"GBP","languages":["en","fr"],"emoji":"🇯🇪","emojiU":"U+1F1EF U+1F1EA"},"JM":{"name":"Jamaica","native":"Jamaica","phone":"1876","continent":"NA","capital":"Kingston","currency":"JMD","languages":["en"],"emoji":"🇯🇲","emojiU":"U+1F1EF U+1F1F2"},"JO":{"name":"Jordan","native":"الأردن","phone":"962","continent":"AS","capital":"Amman","currency":"JOD","languages":["ar"],"emoji":"🇯🇴","emojiU":"U+1F1EF U+1F1F4"},"JP":{"name":"Japan","native":"日本","phone":"81","continent":"AS","capital":"Tokyo","currency":"JPY","languages":["ja"],"emoji":"🇯🇵","emojiU":"U+1F1EF U+1F1F5"},"KE":{"name":"Kenya","native":"Kenya","phone":"254","continent":"AF","capital":"Nairobi","currency":"KES","languages":["en","sw"],"emoji":"🇰🇪","emojiU":"U+1F1F0 U+1F1EA"},"KG":{"name":"Kyrgyzstan","native":"Кыргызстан","phone":"996","continent":"AS","capital":"Bishkek","currency":"KGS","languages":["ky","ru"],"emoji":"🇰🇬","emojiU":"U+1F1F0 U+1F1EC"},"KH":{"name":"Cambodia","native":"Kâmpŭchéa","phone":"855","continent":"AS","capital":"Phnom Penh","currency":"KHR","languages":["km"],"emoji":"🇰🇭","emojiU":"U+1F1F0 U+1F1ED"},"KI":{"name":"Kiribati","native":"Kiribati","phone":"686","continent":"OC","capital":"South Tarawa","currency":"AUD","languages":["en"],"emoji":"🇰🇮","emojiU":"U+1F1F0 U+1F1EE"},"KM":{"name":"Comoros","native":"Komori","phone":"269","continent":"AF","capital":"Moroni","currency":"KMF","languages":["ar","fr"],"emoji":"🇰🇲","emojiU":"U+1F1F0 U+1F1F2"},"KN":{"name":"Saint Kitts and Nevis","native":"Saint Kitts and Nevis","phone":"1869","continent":"NA","capital":"Basseterre","currency":"XCD","languages":["en"],"emoji":"🇰🇳","emojiU":"U+1F1F0 U+1F1F3"},"KP":{"name":"North Korea","native":"북한","phone":"850","continent":"AS","capital":"Pyongyang","currency":"KPW","languages":["ko"],"emoji":"🇰🇵","emojiU":"U+1F1F0 U+1F1F5"},"KR":{"name":"South Korea","native":"대한민국","phone":"82","continent":"AS","capital":"Seoul","currency":"KRW","languages":["ko"],"emoji":"🇰🇷","emojiU":"U+1F1F0 U+1F1F7"},"KW":{"name":"Kuwait","native":"الكويت","phone":"965","continent":"AS","capital":"Kuwait City","currency":"KWD","languages":["ar"],"emoji":"🇰🇼","emojiU":"U+1F1F0 U+1F1FC"},"KY":{"name":"Cayman Islands","native":"Cayman Islands","phone":"1345","continent":"NA","capital":"George Town","currency":"KYD","languages":["en"],"emoji":"🇰🇾","emojiU":"U+1F1F0 U+1F1FE"},"KZ":{"name":"Kazakhstan","native":"Қазақстан","phone":"76,77","continent":"AS","capital":"Astana","currency":"KZT","languages":["kk","ru"],"emoji":"🇰🇿","emojiU":"U+1F1F0 U+1F1FF"},"LA":{"name":"Laos","native":"ສປປລາວ","phone":"856","continent":"AS","capital":"Vientiane","currency":"LAK","languages":["lo"],"emoji":"🇱🇦","emojiU":"U+1F1F1 U+1F1E6"},"LB":{"name":"Lebanon","native":"لبنان","phone":"961","continent":"AS","capital":"Beirut","currency":"LBP","languages":["ar","fr"],"emoji":"🇱🇧","emojiU":"U+1F1F1 U+1F1E7"},"LC":{"name":"Saint Lucia","native":"Saint Lucia","phone":"1758","continent":"NA","capital":"Castries","currency":"XCD","languages":["en"],"emoji":"🇱🇨","emojiU":"U+1F1F1 U+1F1E8"},"LI":{"name":"Liechtenstein","native":"Liechtenstein","phone":"423","continent":"EU","capital":"Vaduz","currency":"CHF","languages":["de"],"emoji":"🇱🇮","emojiU":"U+1F1F1 U+1F1EE"},"LK":{"name":"Sri Lanka","native":"śrī laṃkāva","phone":"94","continent":"AS","capital":"Colombo","currency":"LKR","languages":["si","ta"],"emoji":"🇱🇰","emojiU":"U+1F1F1 U+1F1F0"},"LR":{"name":"Liberia","native":"Liberia","phone":"231","continent":"AF","capital":"Monrovia","currency":"LRD","languages":["en"],"emoji":"🇱🇷","emojiU":"U+1F1F1 U+1F1F7"},"LS":{"name":"Lesotho","native":"Lesotho","phone":"266","continent":"AF","capital":"Maseru","currency":"LSL,ZAR","languages":["en","st"],"emoji":"🇱🇸","emojiU":"U+1F1F1 U+1F1F8"},"LT":{"name":"Lithuania","native":"Lietuva","phone":"370","continent":"EU","capital":"Vilnius","currency":"EUR","languages":["lt"],"emoji":"🇱🇹","emojiU":"U+1F1F1 U+1F1F9"},"LU":{"name":"Luxembourg","native":"Luxembourg","phone":"352","continent":"EU","capital":"Luxembourg","currency":"EUR","languages":["fr","de","lb"],"emoji":"🇱🇺","emojiU":"U+1F1F1 U+1F1FA"},"LV":{"name":"Latvia","native":"Latvija","phone":"371","continent":"EU","capital":"Riga","currency":"EUR","languages":["lv"],"emoji":"🇱🇻","emojiU":"U+1F1F1 U+1F1FB"},"LY":{"name":"Libya","native":"‏ليبيا","phone":"218","continent":"AF","capital":"Tripoli","currency":"LYD","languages":["ar"],"emoji":"🇱🇾","emojiU":"U+1F1F1 U+1F1FE"},"MA":{"name":"Morocco","native":"المغرب","phone":"212","continent":"AF","capital":"Rabat","currency":"MAD","languages":["ar"],"emoji":"🇲🇦","emojiU":"U+1F1F2 U+1F1E6"},"MC":{"name":"Monaco","native":"Monaco","phone":"377","continent":"EU","capital":"Monaco","currency":"EUR","languages":["fr"],"emoji":"🇲🇨","emojiU":"U+1F1F2 U+1F1E8"},"MD":{"name":"Moldova","native":"Moldova","phone":"373","continent":"EU","capital":"Chișinău","currency":"MDL","languages":["ro"],"emoji":"🇲🇩","emojiU":"U+1F1F2 U+1F1E9"},"ME":{"name":"Montenegro","native":"Црна Гора","phone":"382","continent":"EU","capital":"Podgorica","currency":"EUR","languages":["sr","bs","sq","hr"],"emoji":"🇲🇪","emojiU":"U+1F1F2 U+1F1EA"},"MF":{"name":"Saint Martin","native":"Saint-Martin","phone":"590","continent":"NA","capital":"Marigot","currency":"EUR","languages":["en","fr","nl"],"emoji":"🇲🇫","emojiU":"U+1F1F2 U+1F1EB"},"MG":{"name":"Madagascar","native":"Madagasikara","phone":"261","continent":"AF","capital":"Antananarivo","currency":"MGA","languages":["fr","mg"],"emoji":"🇲🇬","emojiU":"U+1F1F2 U+1F1EC"},"MH":{"name":"Marshall Islands","native":"M̧ajeļ","phone":"692","continent":"OC","capital":"Majuro","currency":"USD","languages":["en","mh"],"emoji":"🇲🇭","emojiU":"U+1F1F2 U+1F1ED"},"MK":{"name":"North Macedonia","native":"Северна Македонија","phone":"389","continent":"EU","capital":"Skopje","currency":"MKD","languages":["mk"],"emoji":"🇲🇰","emojiU":"U+1F1F2 U+1F1F0"},"ML":{"name":"Mali","native":"Mali","phone":"223","continent":"AF","capital":"Bamako","currency":"XOF","languages":["fr"],"emoji":"🇲🇱","emojiU":"U+1F1F2 U+1F1F1"},"MM":{"name":"Myanmar [Burma]","native":"မြန်မာ","phone":"95","continent":"AS","capital":"Naypyidaw","currency":"MMK","languages":["my"],"emoji":"🇲🇲","emojiU":"U+1F1F2 U+1F1F2"},"MN":{"name":"Mongolia","native":"Монгол улс","phone":"976","continent":"AS","capital":"Ulan Bator","currency":"MNT","languages":["mn"],"emoji":"🇲🇳","emojiU":"U+1F1F2 U+1F1F3"},"MO":{"name":"Macao","native":"澳門","phone":"853","continent":"AS","capital":"","currency":"MOP","languages":["zh","pt"],"emoji":"🇲🇴","emojiU":"U+1F1F2 U+1F1F4"},"MP":{"name":"Northern Mariana Islands","native":"Northern Mariana Islands","phone":"1670","continent":"OC","capital":"Saipan","currency":"USD","languages":["en","ch"],"emoji":"🇲🇵","emojiU":"U+1F1F2 U+1F1F5"},"MQ":{"name":"Martinique","native":"Martinique","phone":"596","continent":"NA","capital":"Fort-de-France","currency":"EUR","languages":["fr"],"emoji":"🇲🇶","emojiU":"U+1F1F2 U+1F1F6"},"MR":{"name":"Mauritania","native":"موريتانيا","phone":"222","continent":"AF","capital":"Nouakchott","currency":"MRU","languages":["ar"],"emoji":"🇲🇷","emojiU":"U+1F1F2 U+1F1F7"},"MS":{"name":"Montserrat","native":"Montserrat","phone":"1664","continent":"NA","capital":"Plymouth","currency":"XCD","languages":["en"],"emoji":"🇲🇸","emojiU":"U+1F1F2 U+1F1F8"},"MT":{"name":"Malta","native":"Malta","phone":"356","continent":"EU","capital":"Valletta","currency":"EUR","languages":["mt","en"],"emoji":"🇲🇹","emojiU":"U+1F1F2 U+1F1F9"},"MU":{"name":"Mauritius","native":"Maurice","phone":"230","continent":"AF","capital":"Port Louis","currency":"MUR","languages":["en"],"emoji":"🇲🇺","emojiU":"U+1F1F2 U+1F1FA"},"MV":{"name":"Maldives","native":"Maldives","phone":"960","continent":"AS","capital":"Malé","currency":"MVR","languages":["dv"],"emoji":"🇲🇻","emojiU":"U+1F1F2 U+1F1FB"},"MW":{"name":"Malawi","native":"Malawi","phone":"265","continent":"AF","capital":"Lilongwe","currency":"MWK","languages":["en","ny"],"emoji":"🇲🇼","emojiU":"U+1F1F2 U+1F1FC"},"MX":{"name":"Mexico","native":"México","phone":"52","continent":"NA","capital":"Mexico City","currency":"MXN","languages":["es"],"emoji":"🇲🇽","emojiU":"U+1F1F2 U+1F1FD"},"MY":{"name":"Malaysia","native":"Malaysia","phone":"60","continent":"AS","capital":"Kuala Lumpur","currency":"MYR","languages":["ms"],"emoji":"🇲🇾","emojiU":"U+1F1F2 U+1F1FE"},"MZ":{"name":"Mozambique","native":"Moçambique","phone":"258","continent":"AF","capital":"Maputo","currency":"MZN","languages":["pt"],"emoji":"🇲🇿","emojiU":"U+1F1F2 U+1F1FF"},"NA":{"name":"Namibia","native":"Namibia","phone":"264","continent":"AF","capital":"Windhoek","currency":"NAD,ZAR","languages":["en","af"],"emoji":"🇳🇦","emojiU":"U+1F1F3 U+1F1E6"},"NC":{"name":"New Caledonia","native":"Nouvelle-Calédonie","phone":"687","continent":"OC","capital":"Nouméa","currency":"XPF","languages":["fr"],"emoji":"🇳🇨","emojiU":"U+1F1F3 U+1F1E8"},"NE":{"name":"Niger","native":"Niger","phone":"227","continent":"AF","capital":"Niamey","currency":"XOF","languages":["fr"],"emoji":"🇳🇪","emojiU":"U+1F1F3 U+1F1EA"},"NF":{"name":"Norfolk Island","native":"Norfolk Island","phone":"672","continent":"OC","capital":"Kingston","currency":"AUD","languages":["en"],"emoji":"🇳🇫","emojiU":"U+1F1F3 U+1F1EB"},"NG":{"name":"Nigeria","native":"Nigeria","phone":"234","continent":"AF","capital":"Abuja","currency":"NGN","languages":["en"],"emoji":"🇳🇬","emojiU":"U+1F1F3 U+1F1EC"},"NI":{"name":"Nicaragua","native":"Nicaragua","phone":"505","continent":"NA","capital":"Managua","currency":"NIO","languages":["es"],"emoji":"🇳🇮","emojiU":"U+1F1F3 U+1F1EE"},"NL":{"name":"Netherlands","native":"Nederland","phone":"31","continent":"EU","capital":"Amsterdam","currency":"EUR","languages":["nl"],"emoji":"🇳🇱","emojiU":"U+1F1F3 U+1F1F1"},"NO":{"name":"Norway","native":"Norge","phone":"47","continent":"EU","capital":"Oslo","currency":"NOK","languages":["no","nb","nn"],"emoji":"🇳🇴","emojiU":"U+1F1F3 U+1F1F4"},"NP":{"name":"Nepal","native":"नपल","phone":"977","continent":"AS","capital":"Kathmandu","currency":"NPR","languages":["ne"],"emoji":"🇳🇵","emojiU":"U+1F1F3 U+1F1F5"},"NR":{"name":"Nauru","native":"Nauru","phone":"674","continent":"OC","capital":"Yaren","currency":"AUD","languages":["en","na"],"emoji":"🇳🇷","emojiU":"U+1F1F3 U+1F1F7"},"NU":{"name":"Niue","native":"Niuē","phone":"683","continent":"OC","capital":"Alofi","currency":"NZD","languages":["en"],"emoji":"🇳🇺","emojiU":"U+1F1F3 U+1F1FA"},"NZ":{"name":"New Zealand","native":"New Zealand","phone":"64","continent":"OC","capital":"Wellington","currency":"NZD","languages":["en","mi"],"emoji":"🇳🇿","emojiU":"U+1F1F3 U+1F1FF"},"OM":{"name":"Oman","native":"عمان","phone":"968","continent":"AS","capital":"Muscat","currency":"OMR","languages":["ar"],"emoji":"🇴🇲","emojiU":"U+1F1F4 U+1F1F2"},"PA":{"name":"Panama","native":"Panamá","phone":"507","continent":"NA","capital":"Panama City","currency":"PAB,USD","languages":["es"],"emoji":"🇵🇦","emojiU":"U+1F1F5 U+1F1E6"},"PE":{"name":"Peru","native":"Perú","phone":"51","continent":"SA","capital":"Lima","currency":"PEN","languages":["es"],"emoji":"🇵🇪","emojiU":"U+1F1F5 U+1F1EA"},"PF":{"name":"French Polynesia","native":"Polynésie française","phone":"689","continent":"OC","capital":"Papeetē","currency":"XPF","languages":["fr"],"emoji":"🇵🇫","emojiU":"U+1F1F5 U+1F1EB"},"PG":{"name":"Papua New Guinea","native":"Papua Niugini","phone":"675","continent":"OC","capital":"Port Moresby","currency":"PGK","languages":["en"],"emoji":"🇵🇬","emojiU":"U+1F1F5 U+1F1EC"},"PH":{"name":"Philippines","native":"Pilipinas","phone":"63","continent":"AS","capital":"Manila","currency":"PHP","languages":["en"],"emoji":"🇵🇭","emojiU":"U+1F1F5 U+1F1ED"},"PK":{"name":"Pakistan","native":"Pakistan","phone":"92","continent":"AS","capital":"Islamabad","currency":"PKR","languages":["en","ur"],"emoji":"🇵🇰","emojiU":"U+1F1F5 U+1F1F0"},"PL":{"name":"Poland","native":"Polska","phone":"48","continent":"EU","capital":"Warsaw","currency":"PLN","languages":["pl"],"emoji":"🇵🇱","emojiU":"U+1F1F5 U+1F1F1"},"PM":{"name":"Saint Pierre and Miquelon","native":"Saint-Pierre-et-Miquelon","phone":"508","continent":"NA","capital":"Saint-Pierre","currency":"EUR","languages":["fr"],"emoji":"🇵🇲","emojiU":"U+1F1F5 U+1F1F2"},"PN":{"name":"Pitcairn Islands","native":"Pitcairn Islands","phone":"64","continent":"OC","capital":"Adamstown","currency":"NZD","languages":["en"],"emoji":"🇵🇳","emojiU":"U+1F1F5 U+1F1F3"},"PR":{"name":"Puerto Rico","native":"Puerto Rico","phone":"1787,1939","continent":"NA","capital":"San Juan","currency":"USD","languages":["es","en"],"emoji":"🇵🇷","emojiU":"U+1F1F5 U+1F1F7"},"PS":{"name":"Palestine","native":"فلسطين","phone":"970","continent":"AS","capital":"Ramallah","currency":"ILS","languages":["ar"],"emoji":"🇵🇸","emojiU":"U+1F1F5 U+1F1F8"},"PT":{"name":"Portugal","native":"Portugal","phone":"351","continent":"EU","capital":"Lisbon","currency":"EUR","languages":["pt"],"emoji":"🇵🇹","emojiU":"U+1F1F5 U+1F1F9"},"PW":{"name":"Palau","native":"Palau","phone":"680","continent":"OC","capital":"Ngerulmud","currency":"USD","languages":["en"],"emoji":"🇵🇼","emojiU":"U+1F1F5 U+1F1FC"},"PY":{"name":"Paraguay","native":"Paraguay","phone":"595","continent":"SA","capital":"Asunción","currency":"PYG","languages":["es","gn"],"emoji":"🇵🇾","emojiU":"U+1F1F5 U+1F1FE"},"QA":{"name":"Qatar","native":"قطر","phone":"974","continent":"AS","capital":"Doha","currency":"QAR","languages":["ar"],"emoji":"🇶🇦","emojiU":"U+1F1F6 U+1F1E6"},"RE":{"name":"Réunion","native":"La Réunion","phone":"262","continent":"AF","capital":"Saint-Denis","currency":"EUR","languages":["fr"],"emoji":"🇷🇪","emojiU":"U+1F1F7 U+1F1EA"},"RO":{"name":"Romania","native":"România","phone":"40","continent":"EU","capital":"Bucharest","currency":"RON","languages":["ro"],"emoji":"🇷🇴","emojiU":"U+1F1F7 U+1F1F4"},"RS":{"name":"Serbia","native":"Србија","phone":"381","continent":"EU","capital":"Belgrade","currency":"RSD","languages":["sr"],"emoji":"🇷🇸","emojiU":"U+1F1F7 U+1F1F8"},"RU":{"name":"Russia","native":"Россия","phone":"7","continent":"EU","capital":"Moscow","currency":"RUB","languages":["ru"],"emoji":"🇷🇺","emojiU":"U+1F1F7 U+1F1FA"},"RW":{"name":"Rwanda","native":"Rwanda","phone":"250","continent":"AF","capital":"Kigali","currency":"RWF","languages":["rw","en","fr"],"emoji":"🇷🇼","emojiU":"U+1F1F7 U+1F1FC"},"SA":{"name":"Saudi Arabia","native":"العربية السعودية","phone":"966","continent":"AS","capital":"Riyadh","currency":"SAR","languages":["ar"],"emoji":"🇸🇦","emojiU":"U+1F1F8 U+1F1E6"},"SB":{"name":"Solomon Islands","native":"Solomon Islands","phone":"677","continent":"OC","capital":"Honiara","currency":"SBD","languages":["en"],"emoji":"🇸🇧","emojiU":"U+1F1F8 U+1F1E7"},"SC":{"name":"Seychelles","native":"Seychelles","phone":"248","continent":"AF","capital":"Victoria","currency":"SCR","languages":["fr","en"],"emoji":"🇸🇨","emojiU":"U+1F1F8 U+1F1E8"},"SD":{"name":"Sudan","native":"السودان","phone":"249","continent":"AF","capital":"Khartoum","currency":"SDG","languages":["ar","en"],"emoji":"🇸🇩","emojiU":"U+1F1F8 U+1F1E9"},"SE":{"name":"Sweden","native":"Sverige","phone":"46","continent":"EU","capital":"Stockholm","currency":"SEK","languages":["sv"],"emoji":"🇸🇪","emojiU":"U+1F1F8 U+1F1EA"},"SG":{"name":"Singapore","native":"Singapore","phone":"65","continent":"AS","capital":"Singapore","currency":"SGD","languages":["en","ms","ta","zh"],"emoji":"🇸🇬","emojiU":"U+1F1F8 U+1F1EC"},"SH":{"name":"Saint Helena","native":"Saint Helena","phone":"290","continent":"AF","capital":"Jamestown","currency":"SHP","languages":["en"],"emoji":"🇸🇭","emojiU":"U+1F1F8 U+1F1ED"},"SI":{"name":"Slovenia","native":"Slovenija","phone":"386","continent":"EU","capital":"Ljubljana","currency":"EUR","languages":["sl"],"emoji":"🇸🇮","emojiU":"U+1F1F8 U+1F1EE"},"SJ":{"name":"Svalbard and Jan Mayen","native":"Svalbard og Jan Mayen","phone":"4779","continent":"EU","capital":"Longyearbyen","currency":"NOK","languages":["no"],"emoji":"🇸🇯","emojiU":"U+1F1F8 U+1F1EF"},"SK":{"name":"Slovakia","native":"Slovensko","phone":"421","continent":"EU","capital":"Bratislava","currency":"EUR","languages":["sk"],"emoji":"🇸🇰","emojiU":"U+1F1F8 U+1F1F0"},"SL":{"name":"Sierra Leone","native":"Sierra Leone","phone":"232","continent":"AF","capital":"Freetown","currency":"SLL","languages":["en"],"emoji":"🇸🇱","emojiU":"U+1F1F8 U+1F1F1"},"SM":{"name":"San Marino","native":"San Marino","phone":"378","continent":"EU","capital":"City of San Marino","currency":"EUR","languages":["it"],"emoji":"🇸🇲","emojiU":"U+1F1F8 U+1F1F2"},"SN":{"name":"Senegal","native":"Sénégal","phone":"221","continent":"AF","capital":"Dakar","currency":"XOF","languages":["fr"],"emoji":"🇸🇳","emojiU":"U+1F1F8 U+1F1F3"},"SO":{"name":"Somalia","native":"Soomaaliya","phone":"252","continent":"AF","capital":"Mogadishu","currency":"SOS","languages":["so","ar"],"emoji":"🇸🇴","emojiU":"U+1F1F8 U+1F1F4"},"SR":{"name":"Suriname","native":"Suriname","phone":"597","continent":"SA","capital":"Paramaribo","currency":"SRD","languages":["nl"],"emoji":"🇸🇷","emojiU":"U+1F1F8 U+1F1F7"},"SS":{"name":"South Sudan","native":"South Sudan","phone":"211","continent":"AF","capital":"Juba","currency":"SSP","languages":["en"],"emoji":"🇸🇸","emojiU":"U+1F1F8 U+1F1F8"},"ST":{"name":"São Tomé and Príncipe","native":"São Tomé e Príncipe","phone":"239","continent":"AF","capital":"São Tomé","currency":"STN","languages":["pt"],"emoji":"🇸🇹","emojiU":"U+1F1F8 U+1F1F9"},"SV":{"name":"El Salvador","native":"El Salvador","phone":"503","continent":"NA","capital":"San Salvador","currency":"SVC,USD","languages":["es"],"emoji":"🇸🇻","emojiU":"U+1F1F8 U+1F1FB"},"SX":{"name":"Sint Maarten","native":"Sint Maarten","phone":"1721","continent":"NA","capital":"Philipsburg","currency":"ANG","languages":["nl","en"],"emoji":"🇸🇽","emojiU":"U+1F1F8 U+1F1FD"},"SY":{"name":"Syria","native":"سوريا","phone":"963","continent":"AS","capital":"Damascus","currency":"SYP","languages":["ar"],"emoji":"🇸🇾","emojiU":"U+1F1F8 U+1F1FE"},"SZ":{"name":"Swaziland","native":"Swaziland","phone":"268","continent":"AF","capital":"Lobamba","currency":"SZL","languages":["en","ss"],"emoji":"🇸🇿","emojiU":"U+1F1F8 U+1F1FF"},"TC":{"name":"Turks and Caicos Islands","native":"Turks and Caicos Islands","phone":"1649","continent":"NA","capital":"Cockburn Town","currency":"USD","languages":["en"],"emoji":"🇹🇨","emojiU":"U+1F1F9 U+1F1E8"},"TD":{"name":"Chad","native":"Tchad","phone":"235","continent":"AF","capital":"N\'Djamena","currency":"XAF","languages":["fr","ar"],"emoji":"🇹🇩","emojiU":"U+1F1F9 U+1F1E9"},"TF":{"name":"French Southern Territories","native":"Territoire des Terres australes et antarctiques fr","phone":"262","continent":"AN","capital":"Port-aux-Français","currency":"EUR","languages":["fr"],"emoji":"🇹🇫","emojiU":"U+1F1F9 U+1F1EB"},"TG":{"name":"Togo","native":"Togo","phone":"228","continent":"AF","capital":"Lomé","currency":"XOF","languages":["fr"],"emoji":"🇹🇬","emojiU":"U+1F1F9 U+1F1EC"},"TH":{"name":"Thailand","native":"ประเทศไทย","phone":"66","continent":"AS","capital":"Bangkok","currency":"THB","languages":["th"],"emoji":"🇹🇭","emojiU":"U+1F1F9 U+1F1ED"},"TJ":{"name":"Tajikistan","native":"Тоҷикистон","phone":"992","continent":"AS","capital":"Dushanbe","currency":"TJS","languages":["tg","ru"],"emoji":"🇹🇯","emojiU":"U+1F1F9 U+1F1EF"},"TK":{"name":"Tokelau","native":"Tokelau","phone":"690","continent":"OC","capital":"Fakaofo","currency":"NZD","languages":["en"],"emoji":"🇹🇰","emojiU":"U+1F1F9 U+1F1F0"},"TL":{"name":"East Timor","native":"Timor-Leste","phone":"670","continent":"OC","capital":"Dili","currency":"USD","languages":["pt"],"emoji":"🇹🇱","emojiU":"U+1F1F9 U+1F1F1"},"TM":{"name":"Turkmenistan","native":"Türkmenistan","phone":"993","continent":"AS","capital":"Ashgabat","currency":"TMT","languages":["tk","ru"],"emoji":"🇹🇲","emojiU":"U+1F1F9 U+1F1F2"},"TN":{"name":"Tunisia","native":"تونس","phone":"216","continent":"AF","capital":"Tunis","currency":"TND","languages":["ar"],"emoji":"🇹🇳","emojiU":"U+1F1F9 U+1F1F3"},"TO":{"name":"Tonga","native":"Tonga","phone":"676","continent":"OC","capital":"Nuku\'alofa","currency":"TOP","languages":["en","to"],"emoji":"🇹🇴","emojiU":"U+1F1F9 U+1F1F4"},"TR":{"name":"Turkey","native":"Türkiye","phone":"90","continent":"AS","capital":"Ankara","currency":"TRY","languages":["tr"],"emoji":"🇹🇷","emojiU":"U+1F1F9 U+1F1F7"},"TT":{"name":"Trinidad and Tobago","native":"Trinidad and Tobago","phone":"1868","continent":"NA","capital":"Port of Spain","currency":"TTD","languages":["en"],"emoji":"🇹🇹","emojiU":"U+1F1F9 U+1F1F9"},"TV":{"name":"Tuvalu","native":"Tuvalu","phone":"688","continent":"OC","capital":"Funafuti","currency":"AUD","languages":["en"],"emoji":"🇹🇻","emojiU":"U+1F1F9 U+1F1FB"},"TW":{"name":"Taiwan","native":"臺灣","phone":"886","continent":"AS","capital":"Taipei","currency":"TWD","languages":["zh"],"emoji":"🇹🇼","emojiU":"U+1F1F9 U+1F1FC"},"TZ":{"name":"Tanzania","native":"Tanzania","phone":"255","continent":"AF","capital":"Dodoma","currency":"TZS","languages":["sw","en"],"emoji":"🇹🇿","emojiU":"U+1F1F9 U+1F1FF"},"UA":{"name":"Ukraine","native":"Україна","phone":"380","continent":"EU","capital":"Kyiv","currency":"UAH","languages":["uk"],"emoji":"🇺🇦","emojiU":"U+1F1FA U+1F1E6"},"UG":{"name":"Uganda","native":"Uganda","phone":"256","continent":"AF","capital":"Kampala","currency":"UGX","languages":["en","sw"],"emoji":"🇺🇬","emojiU":"U+1F1FA U+1F1EC"},"UM":{"name":"U.S. Minor Outlying Islands","native":"United States Minor Outlying Islands","phone":"1","continent":"OC","capital":"","currency":"USD","languages":["en"],"emoji":"🇺🇲","emojiU":"U+1F1FA U+1F1F2"},"US":{"name":"United States","native":"United States","phone":"1","continent":"NA","capital":"Washington D.C.","currency":"USD,USN,USS","languages":["en"],"emoji":"🇺🇸","emojiU":"U+1F1FA U+1F1F8"},"UY":{"name":"Uruguay","native":"Uruguay","phone":"598","continent":"SA","capital":"Montevideo","currency":"UYI,UYU","languages":["es"],"emoji":"🇺🇾","emojiU":"U+1F1FA U+1F1FE"},"UZ":{"name":"Uzbekistan","native":"O‘zbekiston","phone":"998","continent":"AS","capital":"Tashkent","currency":"UZS","languages":["uz","ru"],"emoji":"🇺🇿","emojiU":"U+1F1FA U+1F1FF"},"VA":{"name":"Vatican City","native":"Vaticano","phone":"379","continent":"EU","capital":"Vatican City","currency":"EUR","languages":["it","la"],"emoji":"🇻🇦","emojiU":"U+1F1FB U+1F1E6"},"VC":{"name":"Saint Vincent and the Grenadines","native":"Saint Vincent and the Grenadines","phone":"1784","continent":"NA","capital":"Kingstown","currency":"XCD","languages":["en"],"emoji":"🇻🇨","emojiU":"U+1F1FB U+1F1E8"},"VE":{"name":"Venezuela","native":"Venezuela","phone":"58","continent":"SA","capital":"Caracas","currency":"VES","languages":["es"],"emoji":"🇻🇪","emojiU":"U+1F1FB U+1F1EA"},"VG":{"name":"British Virgin Islands","native":"British Virgin Islands","phone":"1284","continent":"NA","capital":"Road Town","currency":"USD","languages":["en"],"emoji":"🇻🇬","emojiU":"U+1F1FB U+1F1EC"},"VI":{"name":"U.S. Virgin Islands","native":"United States Virgin Islands","phone":"1340","continent":"NA","capital":"Charlotte Amalie","currency":"USD","languages":["en"],"emoji":"🇻🇮","emojiU":"U+1F1FB U+1F1EE"},"VN":{"name":"Vietnam","native":"Việt Nam","phone":"84","continent":"AS","capital":"Hanoi","currency":"VND","languages":["vi"],"emoji":"🇻🇳","emojiU":"U+1F1FB U+1F1F3"},"VU":{"name":"Vanuatu","native":"Vanuatu","phone":"678","continent":"OC","capital":"Port Vila","currency":"VUV","languages":["bi","en","fr"],"emoji":"🇻🇺","emojiU":"U+1F1FB U+1F1FA"},"WF":{"name":"Wallis and Futuna","native":"Wallis et Futuna","phone":"681","continent":"OC","capital":"Mata-Utu","currency":"XPF","languages":["fr"],"emoji":"🇼🇫","emojiU":"U+1F1FC U+1F1EB"},"WS":{"name":"Samoa","native":"Samoa","phone":"685","continent":"OC","capital":"Apia","currency":"WST","languages":["sm","en"],"emoji":"🇼🇸","emojiU":"U+1F1FC U+1F1F8"},"XK":{"name":"Kosovo","native":"Republika e Kosovës","phone":"377,381,383,386","continent":"EU","capital":"Pristina","currency":"EUR","languages":["sq","sr"],"emoji":"🇽🇰","emojiU":"U+1F1FD U+1F1F0"},"YE":{"name":"Yemen","native":"اليَمَن","phone":"967","continent":"AS","capital":"Sana\'a","currency":"YER","languages":["ar"],"emoji":"🇾🇪","emojiU":"U+1F1FE U+1F1EA"},"YT":{"name":"Mayotte","native":"Mayotte","phone":"262","continent":"AF","capital":"Mamoudzou","currency":"EUR","languages":["fr"],"emoji":"🇾🇹","emojiU":"U+1F1FE U+1F1F9"},"ZA":{"name":"South Africa","native":"South Africa","phone":"27","continent":"AF","capital":"Pretoria","currency":"ZAR","languages":["af","en","nr","st","ss","tn","ts","ve","xh","zu"],"emoji":"🇿🇦","emojiU":"U+1F1FF U+1F1E6"},"ZM":{"name":"Zambia","native":"Zambia","phone":"260","continent":"AF","capital":"Lusaka","currency":"ZMW","languages":["en"],"emoji":"🇿🇲","emojiU":"U+1F1FF U+1F1F2"},"ZW":{"name":"Zimbabwe","native":"Zimbabwe","phone":"263","continent":"AF","capital":"Harare","currency":"USD,ZAR,BWP,GBP,AUD,CNY,INR,JPY","languages":["en","sn","nd"],"emoji":"🇿🇼","emojiU":"U+1F1FF U+1F1FC"}}')
    }, function(e) {
        e.exports = JSON.parse('{"af":{"name":"Afrikaans","native":"Afrikaans"},"am":{"name":"Amharic","native":"አማርኛ"},"ar":{"name":"Arabic","native":"العربية","rtl":1},"ay":{"name":"Aymara","native":"Aymar"},"az":{"name":"Azerbaijani","native":"Azərbaycanca / آذربايجان"},"be":{"name":"Belarusian","native":"Беларуская"},"bg":{"name":"Bulgarian","native":"Български"},"bi":{"name":"Bislama","native":"Bislama"},"bn":{"name":"Bengali","native":"বাংলা"},"bs":{"name":"Bosnian","native":"Bosanski"},"ca":{"name":"Catalan","native":"Català"},"ch":{"name":"Chamorro","native":"Chamoru"},"cs":{"name":"Czech","native":"Čeština"},"da":{"name":"Danish","native":"Dansk"},"de":{"name":"German","native":"Deutsch"},"dv":{"name":"Divehi","native":"ދިވެހިބަސް","rtl":1},"dz":{"name":"Dzongkha","native":"ཇོང་ཁ"},"el":{"name":"Greek","native":"Ελληνικά"},"en":{"name":"English","native":"English"},"es":{"name":"Spanish","native":"Español"},"et":{"name":"Estonian","native":"Eesti"},"eu":{"name":"Basque","native":"Euskara"},"fa":{"name":"Persian","native":"فارسی","rtl":1},"ff":{"name":"Peul","native":"Fulfulde"},"fi":{"name":"Finnish","native":"Suomi"},"fj":{"name":"Fijian","native":"Na Vosa Vakaviti"},"fo":{"name":"Faroese","native":"Føroyskt"},"fr":{"name":"French","native":"Français"},"ga":{"name":"Irish","native":"Gaeilge"},"gl":{"name":"Galician","native":"Galego"},"gn":{"name":"Guarani","native":"Avañe\'ẽ"},"gv":{"name":"Manx","native":"Gaelg"},"he":{"name":"Hebrew","native":"עברית","rtl":1},"hi":{"name":"Hindi","native":"हिन्दी"},"hr":{"name":"Croatian","native":"Hrvatski"},"ht":{"name":"Haitian","native":"Krèyol ayisyen"},"hu":{"name":"Hungarian","native":"Magyar"},"hy":{"name":"Armenian","native":"Հայերեն"},"id":{"name":"Indonesian","native":"Bahasa Indonesia"},"is":{"name":"Icelandic","native":"Íslenska"},"it":{"name":"Italian","native":"Italiano"},"ja":{"name":"Japanese","native":"日本語"},"ka":{"name":"Georgian","native":"ქართული"},"kg":{"name":"Kongo","native":"KiKongo"},"kk":{"name":"Kazakh","native":"Қазақша"},"kl":{"name":"Greenlandic","native":"Kalaallisut"},"km":{"name":"Cambodian","native":"ភាសាខ្មែរ"},"ko":{"name":"Korean","native":"한국어"},"ku":{"name":"Kurdish","native":"Kurdî / كوردی","rtl":1},"ky":{"name":"Kyrgyz","native":"Кыргызча"},"la":{"name":"Latin","native":"Latina"},"lb":{"name":"Luxembourgish","native":"Lëtzebuergesch"},"ln":{"name":"Lingala","native":"Lingála"},"lo":{"name":"Laotian","native":"ລາວ / Pha xa lao"},"lt":{"name":"Lithuanian","native":"Lietuvių"},"lu":{"name":"Luba-Katanga","native":"Tshiluba"},"lv":{"name":"Latvian","native":"Latviešu"},"mg":{"name":"Malagasy","native":"Malagasy"},"mh":{"name":"Marshallese","native":"Kajin Majel / Ebon"},"mi":{"name":"Maori","native":"Māori"},"mk":{"name":"Macedonian","native":"Македонски"},"mn":{"name":"Mongolian","native":"Монгол"},"ms":{"name":"Malay","native":"Bahasa Melayu"},"mt":{"name":"Maltese","native":"bil-Malti"},"my":{"name":"Burmese","native":"မြန်မာစာ"},"na":{"name":"Nauruan","native":"Dorerin Naoero"},"nb":{"name":"Norwegian Bokmål","native":"Norsk bokmål"},"nd":{"name":"North Ndebele","native":"Sindebele"},"ne":{"name":"Nepali","native":"नेपाली"},"nl":{"name":"Dutch","native":"Nederlands"},"nn":{"name":"Norwegian Nynorsk","native":"Norsk nynorsk"},"no":{"name":"Norwegian","native":"Norsk"},"nr":{"name":"South Ndebele","native":"isiNdebele"},"ny":{"name":"Chichewa","native":"Chi-Chewa"},"oc":{"name":"Occitan","native":"Occitan"},"pa":{"name":"Panjabi / Punjabi","native":"ਪੰਜਾਬੀ / पंजाबी / پنجابي"},"pl":{"name":"Polish","native":"Polski"},"ps":{"name":"Pashto","native":"پښتو","rtl":1},"pt":{"name":"Portuguese","native":"Português"},"qu":{"name":"Quechua","native":"Runa Simi"},"rn":{"name":"Kirundi","native":"Kirundi"},"ro":{"name":"Romanian","native":"Română"},"ru":{"name":"Russian","native":"Русский"},"rw":{"name":"Rwandi","native":"Kinyarwandi"},"sg":{"name":"Sango","native":"Sängö"},"si":{"name":"Sinhalese","native":"සිංහල"},"sk":{"name":"Slovak","native":"Slovenčina"},"sl":{"name":"Slovenian","native":"Slovenščina"},"sm":{"name":"Samoan","native":"Gagana Samoa"},"sn":{"name":"Shona","native":"chiShona"},"so":{"name":"Somalia","native":"Soomaaliga"},"sq":{"name":"Albanian","native":"Shqip"},"sr":{"name":"Serbian","native":"Српски"},"ss":{"name":"Swati","native":"SiSwati"},"st":{"name":"Southern Sotho","native":"Sesotho"},"sv":{"name":"Swedish","native":"Svenska"},"sw":{"name":"Swahili","native":"Kiswahili"},"ta":{"name":"Tamil","native":"தமிழ்"},"tg":{"name":"Tajik","native":"Тоҷикӣ"},"th":{"name":"Thai","native":"ไทย / Phasa Thai"},"ti":{"name":"Tigrinya","native":"ትግርኛ"},"tk":{"name":"Turkmen","native":"Туркмен / تركمن"},"tn":{"name":"Tswana","native":"Setswana"},"to":{"name":"Tonga","native":"Lea Faka-Tonga"},"tr":{"name":"Turkish","native":"Türkçe"},"ts":{"name":"Tsonga","native":"Xitsonga"},"uk":{"name":"Ukrainian","native":"Українська"},"ur":{"name":"Urdu","native":"اردو","rtl":1},"uz":{"name":"Uzbek","native":"Ўзбек"},"ve":{"name":"Venda","native":"Tshivenḓa"},"vi":{"name":"Vietnamese","native":"Tiếng Việt"},"xh":{"name":"Xhosa","native":"isiXhosa"},"zh":{"name":"Chinese","native":"中文"},"zu":{"name":"Zulu","native":"isiZulu"}}')
    }, function(e) {
        e.exports = JSON.parse('{"aa":{"name":"Afar","native":"Afar"},"ab":{"name":"Abkhazian","native":"Аҧсуа"},"af":{"name":"Afrikaans","native":"Afrikaans"},"ak":{"name":"Akan","native":"Akana"},"am":{"name":"Amharic","native":"አማርኛ"},"an":{"name":"Aragonese","native":"Aragonés"},"ar":{"name":"Arabic","native":"العربية","rtl":1},"as":{"name":"Assamese","native":"অসমীয়া"},"av":{"name":"Avar","native":"Авар"},"ay":{"name":"Aymara","native":"Aymar"},"az":{"name":"Azerbaijani","native":"Azərbaycanca / آذربايجان"},"ba":{"name":"Bashkir","native":"Башҡорт"},"be":{"name":"Belarusian","native":"Беларуская"},"bg":{"name":"Bulgarian","native":"Български"},"bh":{"name":"Bihari","native":"भोजपुरी"},"bi":{"name":"Bislama","native":"Bislama"},"bm":{"name":"Bambara","native":"Bamanankan"},"bn":{"name":"Bengali","native":"বাংলা"},"bo":{"name":"Tibetan","native":"བོད་ཡིག / Bod skad"},"br":{"name":"Breton","native":"Brezhoneg"},"bs":{"name":"Bosnian","native":"Bosanski"},"ca":{"name":"Catalan","native":"Català"},"ce":{"name":"Chechen","native":"Нохчийн"},"ch":{"name":"Chamorro","native":"Chamoru"},"co":{"name":"Corsican","native":"Corsu"},"cr":{"name":"Cree","native":"Nehiyaw"},"cs":{"name":"Czech","native":"Čeština"},"cu":{"name":"Old Church Slavonic / Old Bulgarian","native":"словѣньскъ / slověnĭskŭ"},"cv":{"name":"Chuvash","native":"Чăваш"},"cy":{"name":"Welsh","native":"Cymraeg"},"da":{"name":"Danish","native":"Dansk"},"de":{"name":"German","native":"Deutsch"},"dv":{"name":"Divehi","native":"ދިވެހިބަސް","rtl":1},"dz":{"name":"Dzongkha","native":"ཇོང་ཁ"},"ee":{"name":"Ewe","native":"Ɛʋɛ"},"el":{"name":"Greek","native":"Ελληνικά"},"en":{"name":"English","native":"English"},"eo":{"name":"Esperanto","native":"Esperanto"},"es":{"name":"Spanish","native":"Español"},"et":{"name":"Estonian","native":"Eesti"},"eu":{"name":"Basque","native":"Euskara"},"fa":{"name":"Persian","native":"فارسی","rtl":1},"ff":{"name":"Peul","native":"Fulfulde"},"fi":{"name":"Finnish","native":"Suomi"},"fj":{"name":"Fijian","native":"Na Vosa Vakaviti"},"fo":{"name":"Faroese","native":"Føroyskt"},"fr":{"name":"French","native":"Français"},"fy":{"name":"West Frisian","native":"Frysk"},"ga":{"name":"Irish","native":"Gaeilge"},"gd":{"name":"Scottish Gaelic","native":"Gàidhlig"},"gl":{"name":"Galician","native":"Galego"},"gn":{"name":"Guarani","native":"Avañe\'ẽ"},"gu":{"name":"Gujarati","native":"ગુજરાતી"},"gv":{"name":"Manx","native":"Gaelg"},"ha":{"name":"Hausa","native":"هَوُسَ","rtl":1},"he":{"name":"Hebrew","native":"עברית","rtl":1},"hi":{"name":"Hindi","native":"हिन्दी"},"ho":{"name":"Hiri Motu","native":"Hiri Motu"},"hr":{"name":"Croatian","native":"Hrvatski"},"ht":{"name":"Haitian","native":"Krèyol ayisyen"},"hu":{"name":"Hungarian","native":"Magyar"},"hy":{"name":"Armenian","native":"Հայերեն"},"hz":{"name":"Herero","native":"Otsiherero"},"ia":{"name":"Interlingua","native":"Interlingua"},"id":{"name":"Indonesian","native":"Bahasa Indonesia"},"ie":{"name":"Interlingue","native":"Interlingue"},"ig":{"name":"Igbo","native":"Igbo"},"ii":{"name":"Sichuan Yi","native":"ꆇꉙ / 四川彝语"},"ik":{"name":"Inupiak","native":"Iñupiak"},"io":{"name":"Ido","native":"Ido"},"is":{"name":"Icelandic","native":"Íslenska"},"it":{"name":"Italian","native":"Italiano"},"iu":{"name":"Inuktitut","native":"ᐃᓄᒃᑎᑐᑦ"},"ja":{"name":"Japanese","native":"日本語"},"jv":{"name":"Javanese","native":"Basa Jawa"},"ka":{"name":"Georgian","native":"ქართული"},"kg":{"name":"Kongo","native":"KiKongo"},"ki":{"name":"Kikuyu","native":"Gĩkũyũ"},"kj":{"name":"Kuanyama","native":"Kuanyama"},"kk":{"name":"Kazakh","native":"Қазақша"},"kl":{"name":"Greenlandic","native":"Kalaallisut"},"km":{"name":"Cambodian","native":"ភាសាខ្មែរ"},"kn":{"name":"Kannada","native":"ಕನ್ನಡ"},"ko":{"name":"Korean","native":"한국어"},"kr":{"name":"Kanuri","native":"Kanuri"},"ks":{"name":"Kashmiri","native":"कश्मीरी / كشميري","rtl":1},"ku":{"name":"Kurdish","native":"Kurdî / كوردی","rtl":1},"kv":{"name":"Komi","native":"Коми"},"kw":{"name":"Cornish","native":"Kernewek"},"ky":{"name":"Kyrgyz","native":"Кыргызча"},"la":{"name":"Latin","native":"Latina"},"lb":{"name":"Luxembourgish","native":"Lëtzebuergesch"},"lg":{"name":"Ganda","native":"Luganda"},"li":{"name":"Limburgian","native":"Limburgs"},"ln":{"name":"Lingala","native":"Lingála"},"lo":{"name":"Laotian","native":"ລາວ / Pha xa lao"},"lt":{"name":"Lithuanian","native":"Lietuvių"},"lu":{"name":"Luba-Katanga","native":"Tshiluba"},"lv":{"name":"Latvian","native":"Latviešu"},"mg":{"name":"Malagasy","native":"Malagasy"},"mh":{"name":"Marshallese","native":"Kajin Majel / Ebon"},"mi":{"name":"Maori","native":"Māori"},"mk":{"name":"Macedonian","native":"Македонски"},"ml":{"name":"Malayalam","native":"മലയാളം"},"mn":{"name":"Mongolian","native":"Монгол"},"mo":{"name":"Moldovan","native":"Moldovenească"},"mr":{"name":"Marathi","native":"मराठी"},"ms":{"name":"Malay","native":"Bahasa Melayu"},"mt":{"name":"Maltese","native":"bil-Malti"},"my":{"name":"Burmese","native":"မြန်မာစာ"},"na":{"name":"Nauruan","native":"Dorerin Naoero"},"nb":{"name":"Norwegian Bokmål","native":"Norsk bokmål"},"nd":{"name":"North Ndebele","native":"Sindebele"},"ne":{"name":"Nepali","native":"नेपाली"},"ng":{"name":"Ndonga","native":"Oshiwambo"},"nl":{"name":"Dutch","native":"Nederlands"},"nn":{"name":"Norwegian Nynorsk","native":"Norsk nynorsk"},"no":{"name":"Norwegian","native":"Norsk"},"nr":{"name":"South Ndebele","native":"isiNdebele"},"nv":{"name":"Navajo","native":"Diné bizaad"},"ny":{"name":"Chichewa","native":"Chi-Chewa"},"oc":{"name":"Occitan","native":"Occitan"},"oj":{"name":"Ojibwa","native":"ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin"},"om":{"name":"Oromo","native":"Oromoo"},"or":{"name":"Oriya","native":"ଓଡ଼ିଆ"},"os":{"name":"Ossetian / Ossetic","native":"Иронау"},"pa":{"name":"Panjabi / Punjabi","native":"ਪੰਜਾਬੀ / पंजाबी / پنجابي"},"pi":{"name":"Pali","native":"Pāli / पाऴि"},"pl":{"name":"Polish","native":"Polski"},"ps":{"name":"Pashto","native":"پښتو","rtl":1},"pt":{"name":"Portuguese","native":"Português"},"qu":{"name":"Quechua","native":"Runa Simi"},"rm":{"name":"Raeto Romance","native":"Rumantsch"},"rn":{"name":"Kirundi","native":"Kirundi"},"ro":{"name":"Romanian","native":"Română"},"ru":{"name":"Russian","native":"Русский"},"rw":{"name":"Rwandi","native":"Kinyarwandi"},"sa":{"name":"Sanskrit","native":"संस्कृतम्"},"sc":{"name":"Sardinian","native":"Sardu"},"sd":{"name":"Sindhi","native":"सिनधि"},"se":{"name":"Northern Sami","native":"Sámegiella"},"sg":{"name":"Sango","native":"Sängö"},"sh":{"name":"Serbo-Croatian","native":"Srpskohrvatski / Српскохрватски"},"si":{"name":"Sinhalese","native":"සිංහල"},"sk":{"name":"Slovak","native":"Slovenčina"},"sl":{"name":"Slovenian","native":"Slovenščina"},"sm":{"name":"Samoan","native":"Gagana Samoa"},"sn":{"name":"Shona","native":"chiShona"},"so":{"name":"Somalia","native":"Soomaaliga"},"sq":{"name":"Albanian","native":"Shqip"},"sr":{"name":"Serbian","native":"Српски"},"ss":{"name":"Swati","native":"SiSwati"},"st":{"name":"Southern Sotho","native":"Sesotho"},"su":{"name":"Sundanese","native":"Basa Sunda"},"sv":{"name":"Swedish","native":"Svenska"},"sw":{"name":"Swahili","native":"Kiswahili"},"ta":{"name":"Tamil","native":"தமிழ்"},"te":{"name":"Telugu","native":"తెలుగు"},"tg":{"name":"Tajik","native":"Тоҷикӣ"},"th":{"name":"Thai","native":"ไทย / Phasa Thai"},"ti":{"name":"Tigrinya","native":"ትግርኛ"},"tk":{"name":"Turkmen","native":"Туркмен / تركمن"},"tl":{"name":"Tagalog / Filipino","native":"Tagalog"},"tn":{"name":"Tswana","native":"Setswana"},"to":{"name":"Tonga","native":"Lea Faka-Tonga"},"tr":{"name":"Turkish","native":"Türkçe"},"ts":{"name":"Tsonga","native":"Xitsonga"},"tt":{"name":"Tatar","native":"Tatarça"},"tw":{"name":"Twi","native":"Twi"},"ty":{"name":"Tahitian","native":"Reo Mā`ohi"},"ug":{"name":"Uyghur","native":"Uyƣurqə / ئۇيغۇرچە"},"uk":{"name":"Ukrainian","native":"Українська"},"ur":{"name":"Urdu","native":"اردو","rtl":1},"uz":{"name":"Uzbek","native":"Ўзбек"},"ve":{"name":"Venda","native":"Tshivenḓa"},"vi":{"name":"Vietnamese","native":"Tiếng Việt"},"vo":{"name":"Volapük","native":"Volapük"},"wa":{"name":"Walloon","native":"Walon"},"wo":{"name":"Wolof","native":"Wollof"},"xh":{"name":"Xhosa","native":"isiXhosa"},"yi":{"name":"Yiddish","native":"ייִדיש","rtl":1},"yo":{"name":"Yoruba","native":"Yorùbá"},"za":{"name":"Zhuang","native":"Cuengh / Tôô / 壮语"},"zh":{"name":"Chinese","native":"中文"},"zu":{"name":"Zulu","native":"isiZulu"}}')
    }, function(e, n, a) {
        (function(e, i) {
            var t;

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            /*! https://mths.be/punycode v1.4.1 by @mathias */
            ! function(r) {
                var c = "object" == o(n) && n && !n.nodeType && n,
                    s = "object" == o(e) && e && !e.nodeType && e,
                    l = "object" == (void 0 === i ? "undefined" : o(i)) && i;
                l.global !== l && l.window !== l && l.self !== l || (r = l);
                var u, m, g = 2147483647,
                    d = /^xn--/,
                    p = /[^\x20-\x7E]/,
                    F = /[\x2E\u3002\uFF0E\uFF61]/g,
                    v = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    },
                    U = Math.floor,
                    h = String.fromCharCode;

                function f(e) {
                    throw new RangeError(v[e])
                }

                function y(e, n) {
                    for (var a = e.length, i = []; a--;) i[a] = n(e[a]);
                    return i
                }

                function j(e, n) {
                    var a = e.split("@"),
                        i = "";
                    return a.length > 1 && (i = a[0] + "@", e = a[1]), i + y((e = e.replace(F, ".")).split("."), n).join(".")
                }

                function E(e) {
                    for (var n, a, i = [], t = 0, o = e.length; t < o;)(n = e.charCodeAt(t++)) >= 55296 && n <= 56319 && t < o ? 56320 == (64512 & (a = e.charCodeAt(t++))) ? i.push(((1023 & n) << 10) + (1023 & a) + 65536) : (i.push(n), t--) : i.push(n);
                    return i
                }

                function S(e) {
                    return y(e, (function(e) {
                        var n = "";
                        return e > 65535 && (n += h((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), n + h(e)
                    })).join("")
                }

                function A(e, n) {
                    return e + 22 + 75 * (e < 26) - ((0 != n) << 5)
                }

                function b(e, n, a) {
                    var i = 0;
                    for (e = a ? U(e / 700) : e >> 1, e += U(e / n); e > 455; i += 36) e = U(e / 35);
                    return U(i + 36 * e / (e + 38))
                }

                function C(e) {
                    var n, a, i, t, o, r, c, s, l, u, m, d = [],
                        p = e.length,
                        F = 0,
                        v = 128,
                        h = 72;
                    for ((a = e.lastIndexOf("-")) < 0 && (a = 0), i = 0; i < a; ++i) e.charCodeAt(i) >= 128 && f("not-basic"), d.push(e.charCodeAt(i));
                    for (t = a > 0 ? a + 1 : 0; t < p;) {
                        for (o = F, r = 1, c = 36; t >= p && f("invalid-input"), ((s = (m = e.charCodeAt(t++)) - 48 < 10 ? m - 22 : m - 65 < 26 ? m - 65 : m - 97 < 26 ? m - 97 : 36) >= 36 || s > U((g - F) / r)) && f("overflow"), F += s * r, !(s < (l = c <= h ? 1 : c >= h + 26 ? 26 : c - h)); c += 36) r > U(g / (u = 36 - l)) && f("overflow"), r *= u;
                        h = b(F - o, n = d.length + 1, 0 == o), U(F / n) > g - v && f("overflow"), v += U(F / n), F %= n, d.splice(F++, 0, v)
                    }
                    return S(d)
                }

                function N(e) {
                    var n, a, i, t, o, r, c, s, l, u, m, d, p, F, v, y = [];
                    for (d = (e = E(e)).length, n = 128, a = 0, o = 72, r = 0; r < d; ++r)(m = e[r]) < 128 && y.push(h(m));
                    for (i = t = y.length, t && y.push("-"); i < d;) {
                        for (c = g, r = 0; r < d; ++r)(m = e[r]) >= n && m < c && (c = m);
                        for (c - n > U((g - a) / (p = i + 1)) && f("overflow"), a += (c - n) * p, n = c, r = 0; r < d; ++r)
                            if ((m = e[r]) < n && ++a > g && f("overflow"), m == n) {
                                for (s = a, l = 36; !(s < (u = l <= o ? 1 : l >= o + 26 ? 26 : l - o)); l += 36) v = s - u, F = 36 - u, y.push(h(A(u + v % F, 0))), s = U(v / F);
                                y.push(h(A(s, 0))), o = b(a, p, i == t), a = 0, ++i
                            }++ a, ++n
                    }
                    return y.join("")
                }
                if (u = {
                        version: "1.4.1",
                        ucs2: {
                            decode: E,
                            encode: S
                        },
                        decode: C,
                        encode: N,
                        toASCII: function(e) {
                            return j(e, (function(e) {
                                return p.test(e) ? "xn--" + N(e) : e
                            }))
                        },
                        toUnicode: function(e) {
                            return j(e, (function(e) {
                                return d.test(e) ? C(e.slice(4).toLowerCase()) : e
                            }))
                        }
                    }, "object" == o(a(0)) && a(0)) void 0 === (t = function() {
                    return u
                }.call(n, a, n, e)) || (e.exports = t);
                else if (c && s)
                    if (e.exports == c) s.exports = u;
                    else
                        for (m in u) u.hasOwnProperty(m) && (c[m] = u[m]);
                else r.punycode = u
            }(this)
        }).call(this, a(7)(e), a(8))
    }, function(e, n) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, function(e, n) {
        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : a(window)) && (i = window)
        }
        e.exports = i
    }])
})), n.register("6UYrI", (function(a, i) {
    e(a.exports, "default", (function() {
        return s
    }));
    var t = n("hxEiv");
    n("fywoC");
    var o = n("7ECC6"),
        r = n("69SUA"),
        c = n("lKmIF");
    var s = e => (0, t.jsx)(o.default, {
        hoverable: !0,
        style: {
            marginBottom: 10
        },
        onClick: e.onSelect,
        children: (0, t.jsxs)("div", {
            style: {
                fontFamily: r.Fonts.SFPro,
                color: c.default.Black
            },
            children: [(0, t.jsx)("div", {
                style: {
                    fontSize: 18,
                    fontWeight: r.FontWeights.Bold
                },
                children: e.name
            }), (0, t.jsx)("div", {
                style: {
                    fontSize: 14
                },
                children: e.description
            })]
        })
    })
})), n.register("44D8I", (function(a, i) {
    e(a.exports, "optionsForAreaOfExpertise", (function() {
        return p
    })), e(a.exports, "default", (function() {
        return v
    }));
    var t = n("hxEiv"),
        o = n("fywoC"),
        r = n("dEUk2"),
        c = n("fC6cp"),
        s = n("lqzWa"),
        l = n("7abSH"),
        u = n("bcnSK"),
        m = n("g4NpA"),
        g = n("lLJEv"),
        d = n("b1oE9");
    const p = ["STEM", "Arts", "Communications", "Computer Science", "Counselor", "Deaf Education", "World Languages", "Speech and Language", "English/Language Arts", "American Sign Language", "Science", "Special Education", "Gifted and Talented", "Technology", "Engineering", "Math", "History and Social Studies", "Health/Physical Education", "English Language Learner (ELL)", "Family & Consumer Science (FACS)", "Homeschool", "School Administrator", "Librarian", "Technology/Instructional Coach", "Other"].sort(),
        F = ["Pre-K", "Elementary School", "Middle School", "High School", "Post High School", "Other School", "Not Using For School", "Other"];
    var v = () => {
        const {
            login: e
        } = o.useContext(u.default), [n, a] = o.useState(""), [i, v] = o.useState(""), U = !n || !i;
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(r.Title, {
                children: "💡 Area of Expertise"
            }), (0, t.jsx)(s.default, {
                style: {
                    width: "100%"
                },
                placeholder: "Select one...",
                size: "large",
                onChange: e => a(e),
                optionFilterProp: "label",
                showSearch: !0,
                options: p.map((e => ({
                    value: e,
                    label: e
                })))
            }), (0, t.jsx)("div", {
                style: {
                    height: 10
                }
            }), (0, t.jsx)(r.Title, {
                children: "🎂 Grade Level"
            }), (0, t.jsx)(s.default, {
                style: {
                    width: "100%"
                },
                placeholder: "Select one...",
                size: "large",
                onChange: e => v(e),
                optionFilterProp: "label",
                showSearch: !0,
                options: F.map((e => ({
                    value: e,
                    label: e
                })))
            }), (0, t.jsx)(l.default, {
                size: "large",
                style: {
                    marginTop: 10
                },
                disabled: U,
                onClick: () => {
                    U || (e.areaOfExpertise = n, e.gradeLevel = i, e.informationNeeded.replace(e.informationNeeded.filter((e => e !== m.informationTypes.areaOfExpertise && e !== m.informationTypes.gradeLevel))))
                },
                children: "Continue"
            }), (0, t.jsx)(c.default, {}), (0, t.jsxs)("div", {
                style: {
                    textAlign: "center"
                },
                children: ["By continuing, you agree to our", " ", (0, t.jsx)("a", {
                    href: d.PRIVACY_POLICY,
                    target: "_blank",
                    children: "Privacy Policy"
                }), " ", "and", " ", (0, t.jsx)("a", {
                    href: d.TERMS_OF_SERVICE,
                    target: "_blank",
                    children: "Terms Of Service"
                }), "."]
            }), (0, t.jsx)("div", {
                style: {
                    height: 25
                }
            }), (0, t.jsx)(g.default, {
                link: "https://www.notion.so/gimkit/Area-of-Expertise-Grade-Level-a435b570d18844c78f323708686e0f52"
            })]
        })
    }
})), n.register("3mLmI", (function(a, i) {
    e(a.exports, "default", (function() {
        return p
    }));
    var t = n("bSGy0"),
        o = n("iMOcM"),
        r = n("sgWtV"),
        c = n("b1oE9"),
        s = n("fBuQJ"),
        l = n("g4NpA"),
        u = n("140Bj"),
        m = n("4MuSt"),
        g = n("iROck"),
        d = n("ewSWc");
    var p = () => {
        const {
            login: e,
            navigation: n
        } = t.default, a = "true" === (0, o.getUrlVariable)("blockRedirect"), i = () => {
            window && window.parent && window.parent.postMessage && window.parent.postMessage({
                type: "_authenticated_",
                user: (0, m.toJS)((0, o.getUser)())
            }, d.inProductionOrStaging ? (0, o.getDomain)() : "*")
        };
        if (e.userExists) {
            const m = () => {
                const r = {
                    email: e.email,
                    password: e.password,
                    googleToken: e.googleToken
                };
                n.loggingIn = !0, (0, o.request)({
                    url: "/api/login",
                    method: "post",
                    data: r,
                    success: n => {
                        if (u.default.user.setUser(n.user, !0), e.authenticated = !0, n.modal && n.modal.type && s.default[n.modal.type]({
                                title: "Account Information",
                                content: n.modal.message
                            }), n.informationNeeded.length) e.informationNeeded.replace([...e.informationNeeded, ...n.informationNeeded]);
                        else {
                            let e = t.default.navigation.redirectUri;
                            e || (e = c.DASHBOARD), e.includes("logout") && (e = c.DASHBOARD), a ? i() : (0, g.NavigateTo)(e)
                        }
                    },
                    error: e => {
                        t.default.navigation.loginError = e, t.default.login.password ? t.default.login.informationNeeded.replace([...t.default.login.informationNeeded, l.informationTypes.password]) : t.default.login.informationNeeded.replace([...t.default.login.informationNeeded, l.informationTypes.email])
                    },
                    both: () => t.default.navigation.loggingIn = !1
                })
            };
            if (e.authenticated) {
                const e = (() => {
                    const {
                        login: e
                    } = t.default, n = Object.keys(e), a = [];
                    return n.forEach((n => {
                        const i = e[n];
                        "" !== i && null != i && ("accountType" === n && a.push({
                            key: l.informationTypes.accountType,
                            value: i
                        }), "firstName" === n && a.push({
                            key: l.informationTypes.firstName,
                            value: i
                        }), "lastName" === n && a.push({
                            key: l.informationTypes.lastName,
                            value: i
                        }), "schoolId" === n && a.push({
                            key: l.informationTypes.schoolId,
                            value: i
                        }), "districtId" === n && a.push({
                            key: l.informationTypes.districtId,
                            value: i
                        }), "country" === n && a.push({
                            key: l.informationTypes.country,
                            value: i
                        }), "areaOfExpertise" === n && a.push({
                            key: l.informationTypes.areaOfExpertise,
                            value: i
                        }), "gradeLevel" === n && a.push({
                            key: l.informationTypes.gradeLevel,
                            value: i
                        }), "acceptsLatestPolicies" === n && a.push({
                            key: l.informationTypes.acceptedLatestPolicies,
                            value: i
                        }), "organization" === n && a.push({
                            key: l.informationTypes.organization,
                            value: i
                        }))
                    })), a
                })();
                e && e.length ? (t.default.navigation.updatingAccountInformation = !0, (0, o.request)({
                    url: "/api/users/update-information",
                    method: "post",
                    data: {
                        changes: e
                    },
                    success: () => {
                        m()
                    },
                    error: () => {
                        t.default.navigation.updatingAccountInformation = !1, (0, r.throwError)({
                            title: "Error updating account information",
                            content: "Please contact support."
                        })
                    }
                })) : m()
            } else m()
        } else {
            const r = {
                firstName: e.firstName,
                lastName: e.lastName,
                email: e.email,
                googleToken: e.googleToken,
                password: e.password,
                accountType: e.accountType,
                country: e.country,
                schoolId: e.schoolId,
                districtId: e.districtId,
                areaOfExpertise: e.areaOfExpertise,
                organization: e.organization,
                gradeLevel: e.gradeLevel,
                groupJoining: n.classJoiningId
            };
            if (t.default.navigation.creatingAccount) return;
            t.default.navigation.creatingAccount = !0, (0, o.request)({
                url: "/api/register",
                method: "post",
                data: r,
                success: e => {
                    sessionStorage.setItem("NEW_USER", "YES"), u.default.user.setUser(e, !0);
                    let n = t.default.navigation.redirectUri;
                    n || (n = c.DASHBOARD), a ? i() : (0, g.NavigateTo)(n)
                },
                error: e => {
                    (0, o.throwMessageError)({
                        e: e,
                        default: {
                            title: "Error creating account",
                            content: "Please try again later"
                        },
                        onOk: () => window.location.reload()
                    })
                },
                both: () => t.default.navigation.creatingAccount = !1
            })
        }
    }
})), n.register("iROck", (function(a, i) {
    e(a.exports, "NavigateTo", (function() {
        return o
    }));
    var t = n("bd8je");
    const o = e => {
        t.history.push(e)
    }
})), n.register("8YORm", (function(a, i) {
    e(a.exports, "default", (function() {
        return d
    }));
    var t = n("hxEiv"),
        o = n("fywoC"),
        r = n("lpEVe"),
        c = n("bcnSK"),
        s = n("g4NpA"),
        l = n("lKmIF"),
        u = n("69SUA"),
        m = n("7abSH"),
        g = n("b1oE9");
    var d = (0, r.observer)((() => {
        const {
            login: e
        } = o.useContext(c.default);
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("div", {
                style: {
                    color: l.default.Black,
                    fontWeight: u.FontWeights.Normal,
                    fontSize: 19
                },
                children: ["We've updated our", " ", (0, t.jsx)("a", {
                    href: g.TERMS_OF_SERVICE,
                    target: "_blank",
                    children: "Terms Of Service"
                }), " ", "&", " ", (0, t.jsx)("a", {
                    href: g.PRIVACY_POLICY,
                    target: "_blank",
                    children: "Privacy Policy"
                }), "."]
            }), (0, t.jsx)(m.default, {
                style: {
                    marginTop: 5
                },
                size: "large",
                onClick: () => {
                    e.acceptsLatestPolicies = !0, e.informationNeeded.replace(e.informationNeeded.filter((e => e !== s.informationTypes.acceptedLatestPolicies)))
                },
                children: "I Agree"
            })]
        })
    }))
})), n.register("dliBm", (function(a, i) {
    e(a.exports, "default", (function() {
        return g
    }));
    var t = n("hxEiv"),
        o = n("fywoC"),
        r = n("dEUk2"),
        c = n("b9Zw0"),
        s = n("7abSH"),
        l = n("bcnSK"),
        u = n("g4NpA"),
        m = n("lLJEv");
    var g = () => {
        const [e, n] = o.useState(""), {
            login: a
        } = o.useContext(l.default), i = () => {
            a.organization = e, a.informationNeeded.replace(a.informationNeeded.filter((e => e !== u.informationTypes.organization)))
        };
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(r.Title, {
                children: "Organization (optional)"
            }), (0, t.jsx)(c.default, {
                size: "large",
                style: {
                    width: "100%"
                },
                placeholder: "Gimkit Productions...",
                onChange: e => {
                    n(e.target.value)
                },
                onPressEnter: i,
                autoFocus: !0
            }), (0, t.jsx)(s.default, {
                onClick: i,
                style: {
                    marginTop: 5,
                    width: "100%"
                },
                children: "Continue"
            }), (0, t.jsx)("div", {
                style: {
                    height: 10
                }
            }), (0, t.jsx)(m.default, {
                link: "https://www.notion.so/gimkit/Organization-0931f4ca9b48423c97663801d8b95387"
            })]
        })
    }
})), n.register("d9u0V", (function(n, a) {
    e(n.exports, "IsURLFromUs", (function() {
        return i
    }));
    const i = e => e.startsWith(window.location.origin) || e.startsWith("/")
})), n.register("kuEJ4", (function(a, i) {
    e(a.exports, "default", (function() {
        return c
    }));
    var t = n("iI4DW"),
        o = n("fywoC"),
        r = n("4gMdJ");

    function c(e, n, a) {
        return function(i) {
            const {
                prefixCls: c,
                style: s
            } = i, l = o.useRef(null), [u, m] = o.useState(0), [g, d] = o.useState(0), [p, F] = (0, t.default)(!1, {
                value: i.open
            }), {
                getPrefixCls: v
            } = o.useContext(r.ConfigContext), U = v(n || "select", c);
            return o.useEffect((() => {
                if (F(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const n = e[0].target;
                            m(n.offsetHeight + 8), d(n.offsetWidth)
                        })),
                        n = setInterval((() => {
                            var i;
                            const t = a ? `.${a(U)}` : `.${U}-dropdown`,
                                o = null === (i = l.current) || void 0 === i ? void 0 : i.querySelector(t);
                            o && (clearInterval(n), e.observe(o))
                        }), 10);
                    return () => {
                        clearInterval(n), e.disconnect()
                    }
                }
            }), []), o.createElement(r.default, {
                theme: {
                    token: {
                        motionDurationFast: "0.01s",
                        motionDurationMid: "0.01s",
                        motionDurationSlow: "0.01s"
                    }
                }
            }, o.createElement("div", {
                ref: l,
                style: {
                    paddingBottom: u,
                    position: "relative",
                    width: "fit-content",
                    minWidth: g
                }
            }, o.createElement(e, Object.assign({}, i, {
                style: Object.assign(Object.assign({}, s), {
                    margin: 0
                }),
                open: p,
                visible: p,
                getPopupContainer: () => l.current
            }))))
        }
    }
})), n.register("hacAX", (function(a, i) {
    e(a.exports, "initMoveMotion", (function() {
        return d
    }));
    var t = n("lt5sb"),
        o = n("aWAHQ");
    const r = new(0, t.Keyframes)("antMoveDownIn", {
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
        c = new(0, t.Keyframes)("antMoveDownOut", {
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
        s = new(0, t.Keyframes)("antMoveLeftIn", {
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
        l = new(0, t.Keyframes)("antMoveLeftOut", {
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
        u = new(0, t.Keyframes)("antMoveRightIn", {
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
        m = new(0, t.Keyframes)("antMoveRightOut", {
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
        g = {
            "move-up": {
                inKeyframes: new(0, t.Keyframes)("antMoveUpIn", {
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
                outKeyframes: new(0, t.Keyframes)("antMoveUpOut", {
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
                inKeyframes: r,
                outKeyframes: c
            },
            "move-left": {
                inKeyframes: s,
                outKeyframes: l
            },
            "move-right": {
                inKeyframes: u,
                outKeyframes: m
            }
        },
        d = (e, n) => {
            const {
                antCls: a
            } = e, i = `${a}-${n}`, {
                inKeyframes: t,
                outKeyframes: r
            } = g[n];
            return [(0, o.initMotion)(i, t, r, e.motionDurationMid), {
                [`\n        ${i}-enter,\n        ${i}-appear\n      `]: {
                    opacity: 0,
                    animationTimingFunction: e.motionEaseOutCirc
                },
                [`${i}-leave`]: {
                    animationTimingFunction: e.motionEaseInOutCirc
                }
            }]
        }
})), n.register("kLpOI", (function(a, i) {
    e(a.exports, "default", (function() {
        return l
    }));
    var t = n("dnh3u"),
        o = n("fywoC"),
        r = n("ayjhg"),
        c = n("dwKuN"),
        s = function(e, n) {
            return o.createElement(c.default, (0, t.default)((0, t.default)({}, e), {}, {
                ref: n,
                icon: r.default
            }))
        };
    s.displayName = "CheckOutlined";
    var l = o.forwardRef(s)
})), n.register("ayjhg", (function(n, a) {
    e(n.exports, "default", (function() {
        return i
    }));
    var i = {
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
})), n.register("6gxPk", (function(a, i) {
    e(a.exports, "default", (function() {
        return l
    }));
    var t = n("dnh3u"),
        o = n("fywoC"),
        r = n("5D7Fe"),
        c = n("dwKuN"),
        s = function(e, n) {
            return o.createElement(c.default, (0, t.default)((0, t.default)({}, e), {}, {
                ref: n,
                icon: r.default
            }))
        };
    s.displayName = "DownOutlined";
    var l = o.forwardRef(s)
})), n.register("5D7Fe", (function(n, a) {
    e(n.exports, "default", (function() {
        return i
    }));
    var i = {
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
})), n.register("da8gK", (function(a, i) {
    e(a.exports, "default", (function() {
        return r
    }));
    var t = n("hxEiv");
    n("fywoC");
    var o = n("bfV0l");
    var r = e => e.error ? (0, t.jsx)(o.default, {
        message: "Error",
        style: e.style,
        type: "error",
        description: e.error && e.error.message && e.error.message.text ? e.error.message.text : "string" == typeof e.error ? e.error : "Unknown Error. Please try again.",
        showIcon: !0
    }) : null
}));