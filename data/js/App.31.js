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
r.register("9NPRq", (function(t, n) {
    var o;
    o = t.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "GiveKitScreen", (function() {
        return b
    })), e(t.exports, "default", (function() {
        return O
    }));
    var a = r("hxEiv"),
        i = r("lKmIF"),
        s = r("69SUA"),
        u = r("fywoC"),
        c = r("2FDaO"),
        l = r("lOLmy"),
        f = r("2sSUe"),
        d = r("kDvW4"),
        p = r("1Y2q5"),
        m = r("j3eFH"),
        h = r("cO2Su"),
        g = r("cHCps");
    let y, x, v, b, w = e => e;
    var j;
    (j = b || (b = {})).apply = "apply", j.pastProjects = "pastProjects";
    var O = () => {
        const [e, t] = u.useState(b.apply);
        return (0, a.jsxs)(C, {
            children: [(0, a.jsx)(g.default, {
                includeSpacer: !0
            }), (0, a.jsx)(k, {}), (0, a.jsx)(p.default, {
                currentScreen: e,
                setScreen: e => {
                    t(e)
                }
            }), (0, a.jsx)(S, {
                children: e === b.apply ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.default, {}), (0, a.jsx)(f.default, {}), (0, a.jsx)(d.default, {})]
                }) : (0, a.jsx)(m.default, {})
            })]
        })
    };
    const C = c.default.div.attrs({
            className: "flex flex-column vc"
        })(y || (y = w`
  flex: 1;
  background: ${0};
  color: #1d2d35;
  font-family: ${0};
  .ant-row.ant-form-item {
    margin: 0px;
  }
`), i.default.Snow, s.Fonts.SFPro),
        k = c.default.img.attrs({
            src: "/client/img/givekit/header.png",
            alt: "GiveKit"
        })(x || (x = w`
  height: 225px;
  margin: 45px;
  margin-bottom: 35px;
  max-width: 80%;
`)),
        S = (0, c.default)(h.default)(v || (v = w`
  flex: 1;
  width: 90%;
  max-width: 720px;
  padding: 45px;
  border-radius: 9px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  font-size: 18px;

  h2 {
    font-size: 28px;
    font-weight: ${0};
  }
`), s.FontWeights.Bold)
})), r.register("lOLmy", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv"),
        a = r("fC6cp"),
        i = r("kyvf1");
    r("fywoC");
    var s = () => (0, o.jsxs)("div", {
        children: ["One giant obstacle for teachers is classroom funding: The average teacher in the US spends nearly $750 a year on classroom supplies. ", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), " ", "That's an eye-popping number. For us, it's also a motivating one. ", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), "And that's why we created GiveKit!", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), (0, o.jsx)("b", {
            children: "With GiveKit, we're donating $500 in funding every month to help pay for your school materials, first aid kits, tech tools, furniture, and anything else you may need to do your best work."
        }), (0, o.jsx)(a.default, {}), (0, o.jsx)("h2", {
            children: "How it works"
        }), (0, o.jsxs)("b", {
            children: ["Every month we’ll fund $500 to educator-led projects via", " ", (0, o.jsx)(i.default, {
                external: !0,
                to: "https://www.donorschoose.org",
                target: "_blank",
                children: "DonorsChoose.org."
            })]
        }), (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), "We may fund one project in a month or several. If you don't get picked one month, no worries, we might always come back to fund it in the future.", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), "We've decided to donate through", " ", (0, o.jsx)(i.default, {
            external: !0,
            to: "https://www.donorschoose.org",
            target: "_blank",
            children: "DonorsChoose.org"
        }), " ", "—- they help take care of all the complexities in getting money from us to you.", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), (0, o.jsx)("b", {
            children: "To apply for GiveKit, simply:"
        }), (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), "1. Register and start a project at", " ", (0, o.jsx)(i.default, {
            external: !0,
            to: "https://www.donorschoose.org",
            target: "_blank",
            children: "DonorsChoose.org"
        }), " ", (0, o.jsx)("br", {}), "2. Fill out the form below with a link to your project ", (0, o.jsx)("br", {}), "3. Keep up your incredible work! ", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), "We'll review applications monthly and select a project or projects to fund.", (0, o.jsx)("br", {})]
    })
})), r.register("kyvf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("hxEiv"),
        a = r("beXRF");
    r("fywoC");
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
})), r.register("2sSUe", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv"),
        a = r("fC6cp");
    r("fywoC");
    var i = r("c71eP");
    var s = () => (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(a.default, {}), (0, o.jsx)("h2", {
            children: "Apply for GiveKit funding"
        }), (0, o.jsx)(i.default, {})]
    })
})), r.register("c71eP", (function(t, n) {
    e(t.exports, "default", (function() {
        return b
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("93yIm"),
        s = r("7ECC6"),
        u = r("4I2uy"),
        c = r("cryu8"),
        l = r("b9Zw0"),
        f = r("fBuQJ"),
        d = r("2FDaO"),
        p = r("lKmIF"),
        m = r("69SUA"),
        h = r("iMOcM");
    let g, y, x = e => e;
    const v = "Thank you so much for applying! If you're selected, we'll send you an email. Take care and have a great rest of your day!";
    var b = () => {
        const [e, t] = a.useState(!1), [r, n] = a.useState(!1);
        return r ? (0, o.jsx)(s.default, {
            style: {
                fontSize: 18,
                color: p.default.Black
            },
            children: v
        }) : (0, o.jsxs)(c.default, {
            onFinish: o => {
                e || r || (t(!0), (0, h.request)({
                    url: "/api/v1/givekit/apply",
                    data: o,
                    success: () => {
                        n(!0), f.default.success({
                            title: "Applied!",
                            content: v
                        })
                    },
                    error: e => {
                        (0, h.throwMessageError)({
                            e: e,
                            default: {
                                title: "Error applying. Please try again later"
                            }
                        })
                    },
                    both: () => {
                        t(!1)
                    }
                }))
            },
            style: {
                width: "100%"
            },
            children: [(0, o.jsx)(w, {
                children: "First Name*"
            }), (0, o.jsx)(c.default.Item, {
                name: "firstName",
                rules: [{
                    required: !0,
                    message: "Please enter your first name."
                }],
                children: (0, o.jsx)(l.default, {})
            }), (0, o.jsx)(w, {
                children: "Last Name*"
            }), (0, o.jsx)(c.default.Item, {
                name: "lastName",
                rules: [{
                    required: !0,
                    message: "Please enter your last name."
                }],
                children: (0, o.jsx)(l.default, {})
            }), (0, o.jsx)(w, {
                children: "Role*"
            }), (0, o.jsx)(c.default.Item, {
                name: "role",
                rules: [{
                    required: !0,
                    message: "Please enter your role."
                }],
                children: (0, o.jsx)(l.default, {})
            }), (0, o.jsx)(w, {
                children: "Email Address*"
            }), (0, o.jsx)(c.default.Item, {
                name: "email",
                rules: [{
                    required: !0,
                    type: "email",
                    message: "Please enter a valid email."
                }],
                children: (0, o.jsx)(l.default, {
                    type: "email"
                })
            }), (0, o.jsx)(w, {
                children: "DonorsChoose Project Link*"
            }), (0, o.jsx)(j, {
                children: "Paste the link to your project on DonorsChoose.org"
            }), (0, o.jsx)(c.default.Item, {
                name: "projectLink",
                rules: [{
                    required: !0,
                    message: "Please enter the project link."
                }],
                children: (0, o.jsx)(l.default, {
                    placeholder: "https://www.donorschoose.org/project/my-project"
                })
            }), (0, o.jsx)(w, {
                children: "Date Needed"
            }), (0, o.jsx)(j, {
                children: "If your project is time sensitive, let us know!"
            }), (0, o.jsx)(c.default.Item, {
                name: "dateNeeded",
                children: (0, o.jsx)(l.default, {})
            }), (0, o.jsx)(w, {
                children: "Comments"
            }), (0, o.jsx)(c.default.Item, {
                name: "comments",
                children: (0, o.jsx)(l.default, {})
            }), (0, o.jsx)(w, {
                children: "Permission"
            }), (0, o.jsx)(j, {
                children: "Check the box below if you give us permission to use your name and project info. If you're not comfortable, no worries! Checking this box does not increase your chances of being selected."
            }), (0, o.jsx)(c.default.Item, {
                name: "permission",
                valuePropName: "checked",
                initialValue: !1,
                children: (0, o.jsx)(u.default, {
                    children: "Yes, you may use my name and project info!"
                })
            }), (0, o.jsx)(c.default.Item, {
                children: (0, o.jsx)(i.default, {
                    style: {
                        marginTop: 20
                    },
                    type: "primary",
                    htmlType: "submit",
                    size: "large",
                    block: !0,
                    loading: e,
                    children: "Submit"
                })
            })]
        })
    };
    const w = d.default.div(g || (g = x`
  font-size: 18px;
  color: ${0};
  font-family: ${0};
  margin-top: 12px;
  font-weight: ${0};
`), p.default.Black, m.Fonts.SFPro, m.FontWeights.Bold),
        j = d.default.div(y || (y = x``))
})), r.register("kDvW4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv"),
        a = r("fC6cp"),
        i = r("kyvf1");
    r("fywoC");
    var s = () => (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(a.default, {}), (0, o.jsx)("h2", {
            children: "FAQ"
        }), (0, o.jsx)("b", {
            children: "What kind of projects are you looking for? "
        }), " ", (0, o.jsx)("br", {}), "We’re looking for projects that have the largest possible positive impact on students. That could be anything! Classroom materials, first aid kits, resources that celebrate diversity, supplies for ambitious project-based learning ideas — Anything. If you need it, we want to know about it. The only thing we’re not looking for are requests for Gimkit subscriptions or licenses.", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), (0, o.jsx)("b", {
            children: "Why not give money directly to teachers?"
        }), " ", (0, o.jsx)("br", {}), "Because DonorsChoose specializes in funding classroom projects and they're great at what they do. They’ve helped donors give more than $1 billion to teachers, funding nearly 2 million projects. They take care of the hard parts of giving including vetting requests, purchasing items, and shipping materials directly to verified schools. Simply, working with them makes it easy to give!", " ", (0, o.jsx)(i.default, {
            external: !0,
            target: "_blank",
            to: "https://www.donorschoose.org",
            children: "Learn more about DonorsChoose.org."
        }), (0, o.jsx)(a.default, {}), (0, o.jsx)("b", {
            children: "Need more info?"
        }), " ", (0, o.jsx)("br", {}), "Write us at", " ", (0, o.jsx)(i.default, {
            to: "mailto:hello@gimkit.com",
            external: !0,
            children: "hello@gimkit.com"
        }), " ", "and put GiveKit in the subject line."]
    })
})), r.register("1Y2q5", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = r("hxEiv"),
        a = r("lKmIF"),
        i = r("69SUA"),
        s = r("kyvf1");
    r("fywoC");
    var u = r("2FDaO"),
        c = r("9NPRq");
    let l, f, d = e => e;
    var p = e => {
        const t = t => t === e.currentScreen;
        return (0, o.jsxs)(m, {
            children: [(0, o.jsx)(h, {
                onClick: () => e.setScreen(c.GiveKitScreen.apply),
                style: {
                    marginRight: 5,
                    fontWeight: t(c.GiveKitScreen.apply) ? i.FontWeights.Bold : i.FontWeights.Normal
                },
                children: "About & Apply"
            }), (0, o.jsx)(h, {
                onClick: () => e.setScreen(c.GiveKitScreen.pastProjects),
                style: {
                    fontWeight: t(c.GiveKitScreen.pastProjects) ? i.FontWeights.Bold : i.FontWeights.Normal
                },
                children: "Previously funded projects"
            })]
        })
    };
    const m = u.default.div.attrs({
            className: "flex vc"
        })(l || (l = d`
  margin-bottom: 25px;
`)),
        h = (0, u.default)(s.default)(f || (f = d`
  padding: 4px 15px;
  background: ${0};
  border: solid 1px;
  border-radius: 500px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`), a.default.White)
})), r.register("j3eFH", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("69bEv");
    var i = () => (0, o.jsx)(a.default, {
        id: "382c29c71fa14d5a99358c8e5c9b1e43"
    })
})), r.register("69bEv", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = r("hxEiv"),
        a = r("4Gnmi"),
        i = r("fywoC");
    const s = i.lazy((() => r("9mi4b")));
    var u = e => {
        const t = e.hideSkeleton ? (0, o.jsx)("div", {
            className: "maxWidth"
        }) : (0, o.jsx)("div", {
            className: "maxWidth",
            children: (0, o.jsx)(a.default, {
                active: !0,
                title: !1,
                paragraph: {
                    rows: 9
                }
            })
        });
        return (0, o.jsx)(i.Suspense, {
            fallback: t,
            children: (0, o.jsx)(s, {
                ...e
            })
        })
    }
})), r.register("9mi4b", (function(e, t) {
    e.exports = Promise.all([r("g2MeW")(new URL(r("ihc6Q").resolve("2nG1U"), import.meta.url).toString()), import("./" + r("ihc6Q").resolve("6iUO5"))]).then((() => r("jLITb")))
})), r.register("cO2Su", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        i = r("lKmIF");
    let s;
    var u = e => (0, o.jsx)(c, {
        onClick: e.onClick,
        className: e.className,
        style: e.style,
        children: e.children
    });
    const c = a.default.div(s || (s = (e => e)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${0};
  padding: 20px;
`), i.default.White)
})), r.register("kuEJ4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("iI4DW"),
        a = r("fywoC"),
        i = r("4gMdJ");

    function s(e, t, r) {
        return function(n) {
            const {
                prefixCls: s,
                style: u
            } = n, c = a.useRef(null), [l, f] = a.useState(0), [d, p] = a.useState(0), [m, h] = (0, o.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: g
            } = a.useContext(i.ConfigContext), y = g(t || "select", s);
            return a.useEffect((() => {
                if (h(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            f(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var n;
                            const o = r ? `.${r(y)}` : `.${y}-dropdown`,
                                a = null === (n = c.current) || void 0 === n ? void 0 : n.querySelector(o);
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
                    paddingBottom: l,
                    position: "relative",
                    width: "fit-content",
                    minWidth: d
                }
            }, a.createElement(e, Object.assign({}, n, {
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
    var o = r("lt5sb"),
        a = r("aWAHQ");
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
        u = new(0, o.Keyframes)("antMoveLeftIn", {
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
        l = new(0, o.Keyframes)("antMoveRightIn", {
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
        f = new(0, o.Keyframes)("antMoveRightOut", {
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
        d = {
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
                inKeyframes: u,
                outKeyframes: c
            },
            "move-right": {
                inKeyframes: l,
                outKeyframes: f
            }
        },
        p = (e, t) => {
            const {
                antCls: r
            } = e, n = `${r}-${t}`, {
                inKeyframes: o,
                outKeyframes: i
            } = d[t];
            return [(0, a.initMotion)(n, o, i, e.motionDurationMid), {
                [`\n        ${n}-enter,\n        ${n}-appear\n      `]: {
                    opacity: 0,
                    animationTimingFunction: e.motionEaseOutCirc
                },
                [`${n}-leave`]: {
                    animationTimingFunction: e.motionEaseInOutCirc
                }
            }]
        }
})), r.register("i5Qjx", (function(n, o) {
    e(n.exports, "SpaceContext", (function() {
        return m
    }), (function(e) {
        return m = e
    })), e(n.exports, "default", (function() {
        return y
    }), (function(e) {
        return y = e
    }));
    var a = r("fe1on"),
        i = r("jyxW7"),
        s = r("fywoC"),
        u = r("4gMdJ"),
        c = r("1eqVQ"),
        l = r("7yXSw"),
        f = r("c9Vcn"),
        d = r("5gjI2"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
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
    const g = e => {
        const {
            getPrefixCls: r,
            space: n,
            direction: o
        } = s.useContext(u.ConfigContext), {
            size: l = (null == n ? void 0 : n.size) || "small",
            align: g,
            className: y,
            rootClassName: x,
            children: v,
            direction: b = "horizontal",
            prefixCls: w,
            split: j,
            style: O,
            wrap: C = !1
        } = e, k = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), S = (0, c.default)(), [E, P] = s.useMemo((() => (Array.isArray(l) ? l : [l, l]).map((e => function(e) {
            return "string" == typeof e ? h[e] : e || 0
        }(e)))), [l]), N = (0, i.default)(v, {
            keepEmpty: !0
        }), K = void 0 === g && "horizontal" === b ? "center" : g, M = r("space", w), [z, D] = (0, d.default)(M), _ = t(a)(M, D, `${M}-${b}`, {
            [`${M}-rtl`]: "rtl" === o,
            [`${M}-align-${K}`]: K
        }, y, x), $ = `${M}-item`, F = "rtl" === o ? "marginLeft" : "marginRight";
        let I = 0;
        const W = N.map(((e, t) => {
                null != e && (I = t);
                const r = e && e.key || `${$}-${t}`;
                return s.createElement(f.default, {
                    className: $,
                    key: r,
                    direction: b,
                    index: t,
                    marginDirection: F,
                    split: j,
                    wrap: C
                }, e)
            })),
            R = s.useMemo((() => ({
                horizontalSize: E,
                verticalSize: P,
                latestIndex: I,
                supportFlexGap: S
            })), [E, P, I, S]);
        if (0 === N.length) return null;
        const L = {};
        return C && (L.flexWrap = "wrap", S || (L.marginBottom = -P)), S && (L.columnGap = E, L.rowGap = P), z(s.createElement("div", Object.assign({
            className: _,
            style: Object.assign(Object.assign({}, L), O)
        }, k), s.createElement(m.Provider, {
            value: R
        }, W)))
    };
    g.Compact = l.default;
    var y = g
})), r.register("1eqVQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("fywoC"),
        a = r("azMeL"),
        i = () => {
            const [e, t] = o.useState(!1);
            return o.useEffect((() => {
                t((0, a.detectFlexGapSupported)())
            }), []), e
        }
})), r.register("c9Vcn", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("fywoC"),
        a = r("i5Qjx");

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
            verticalSize: f,
            latestIndex: d,
            supportFlexGap: p
        } = o.useContext(a.SpaceContext);
        let m = {};
        return p || ("vertical" === r ? n < d && (m = {
            marginBottom: l / (u ? 2 : 1)
        }) : m = Object.assign(Object.assign({}, n < d && {
            [i]: l / (u ? 2 : 1)
        }), c && {
            paddingBottom: f
        })), null == s ? null : o.createElement(o.Fragment, null, o.createElement("div", {
            className: t,
            style: m
        }, s), n < d && u && o.createElement("span", {
            className: `${t}-split`,
            style: m
        }, u))
    }
})), r.register("dhxiD", (function(e, t) {
    var n = r("1fK2g"),
        o = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var r, a, i, s, u, c, l = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (i = n(), s = document.createRange(), u = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var a = o[t.format] || o.default;
                            window.clipboardData.setData(a, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(c), s.selectNodeContents(c), u.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            l = !0
        } catch (n) {
            r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), l = !0
            } catch (n) {
                r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), a = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(a, e)
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
        return a
    }));
    var o = r("fywoC");

    function a(e) {
        if ("undefined" == typeof window) return console.warn("useMediaMatch cannot function as window is undefined."), !1;
        var t = (0, o.useMemo)((function() {
                return window.matchMedia(e)
            }), [e]),
            r = (0, o.useState)((function() {
                return t.matches
            })),
            n = r[0],
            a = r[1];
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
        o = e.exports && e.exports.__exportStar || function(e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), o(r("coa3i"), e.exports), o(r("exKSe"), e.exports), o(r("4Nv4f"), e.exports)
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
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return o(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useWindowSize = void 0;
    var i = a(r("fywoC"));

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
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, n.apply(this, arguments)
        },
        o = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
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
        i = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
            return a(t, e), t
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
            o = s.useRef(),
            a = s.useCallback((function() {
                if (o.current) {
                    var e = o.current.offsetHeight,
                        n = o.current.offsetWidth;
                    e === t.height && n === t.width || r({
                        height: e,
                        width: n
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
        }), [o, a]), n({
            ref: o
        }, t)
    }
})), r.register("hDWWf", (function(t, r) {
    let n;
    var o;
    e(t.exports, "SiteHeaderTheme", (function() {
        return n
    })), (o = n || (n = {})).light = "light", o.dark = "dark"
})), r.register("hSz8d", (function(t, r) {
    let n;
    var o;
    e(t.exports, "SiteHeaderAlpha", (function() {
        return n
    })), (o = n || (n = {})).none = "none", o.standard = "standard", o.darker = "darker"
})), r.register("9Vz35", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var o = {
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
})), r.register("dohZB", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("bVHCc"),
        s = r("dwKuN"),
        u = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "UsergroupAddOutlined";
    var c = a.forwardRef(u)
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
})), r.register("kVS28", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("4GmeK"),
        s = r("dwKuN"),
        u = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "LogoutOutlined";
    var c = a.forwardRef(u)
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
})), r.register("5AR3F", (function(n, o) {
    e(n.exports, "default", (function() {
        return g
    }));
    var a = r("2ic9V"),
        i = r("iStnv"),
        s = r("hzerz"),
        u = r("46jhs"),
        c = r("hn4Tf"),
        l = r("7NK35"),
        f = r("b1RjK"),
        d = r("17aYs"),
        p = r("fywoC"),
        m = r("fe1on"),
        h = function(e) {
            (0, f.default)(n, e);
            var r = (0, d.default)(n);

            function n(e) {
                var t;
                (0, c.default)(this, n), (t = r.call(this, e)).handleChange = function(e) {
                    var r = t.props,
                        n = r.disabled,
                        o = r.onChange;
                    n || ("checked" in t.props || t.setState({
                        checked: e.target.checked
                    }), o && o({
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
                var o = "checked" in e ? e.checked : e.defaultChecked;
                return t.state = {
                    checked: o
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
                        o = r.className,
                        u = r.style,
                        c = r.name,
                        l = r.id,
                        f = r.type,
                        d = r.disabled,
                        h = r.readOnly,
                        g = r.tabIndex,
                        y = r.onClick,
                        x = r.onFocus,
                        v = r.onBlur,
                        b = r.onKeyDown,
                        w = r.onKeyPress,
                        j = r.onKeyUp,
                        O = r.autoFocus,
                        C = r.value,
                        k = r.required,
                        S = (0, s.default)(r, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]),
                        E = Object.keys(S).reduce((function(e, t) {
                            return "aria-" !== t.substr(0, 5) && "data-" !== t.substr(0, 5) && "role" !== t || (e[t] = S[t]), e
                        }), {}),
                        P = this.state.checked,
                        N = t(m)(n, o, (e = {}, (0, i.default)(e, "".concat(n, "-checked"), P), (0, i.default)(e, "".concat(n, "-disabled"), d), e));
                    return t(p).createElement("span", {
                        className: N,
                        style: u
                    }, t(p).createElement("input", (0, a.default)({
                        name: c,
                        id: l,
                        type: f,
                        required: k,
                        readOnly: h,
                        disabled: d,
                        tabIndex: g,
                        className: "".concat(n, "-input"),
                        checked: !!P,
                        onClick: y,
                        onFocus: x,
                        onBlur: v,
                        onKeyUp: j,
                        onKeyDown: b,
                        onKeyPress: w,
                        onChange: this.handleChange,
                        autoFocus: O,
                        ref: this.saveInput,
                        value: C
                    }, E)), t(p).createElement("span", {
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
    var g = h
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
        return a
    }));
    var o = r("cK78M");

    function a(e, t) {
        if (null == e) return {};
        var r, n, a = (0, o.default)(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
    }
})), r.register("cK78M", (function(t, r) {
    function n(e, t) {
        if (null == e) return {};
        var r, n, o = {},
            a = Object.keys(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("46jhs", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("iStnv");

    function a(e, t) {
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
            t % 2 ? a(Object(r), !0).forEach((function(t) {
                (0, o.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
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

    function o(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
    }
    e(t.exports, "default", (function() {
        return o
    }))
})), r.register("b1RjK", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("63PCo");

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
    var o = r("bArAQ"),
        a = r("lcgmN"),
        i = r("erlXZ");

    function s(e) {
        var t = (0, a.default)();
        return function() {
            var r, n = (0, o.default)(e);
            if (t) {
                var a = (0, o.default)(this).constructor;
                r = Reflect.construct(n, arguments, a)
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
})), r.register("erlXZ", (function(n, o) {
    e(n.exports, "default", (function() {
        return s
    }));
    var a = r("1eKqi"),
        i = r("cdb2f");

    function s(e, r) {
        if (r && ("object" === t(a)(r) || "function" == typeof r)) return r;
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
        return a
    }));
    var o = r("hrYih");
    const a = () => "annual-only" === o.default.getFeatureFlag("annual-only-pro")
})), r.register("aYYSA", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("5UEB4"),
        s = r("dwKuN"),
        u = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "StarOutlined";
    var c = a.forwardRef(u)
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
    var o = r("fywoC"),
        a = r("3KQc0"),
        i = r("9iNNJ");
    var s = (e, t) => {
        const [r, n] = o.useState((() => {
            var r, n;
            const o = e && "current" in e ? e.current : e;
            return o ? [o.offsetWidth, o.offsetHeight] : [null !== (r = null == t ? void 0 : t.initialWidth) && void 0 !== r ? r : 0, null !== (n = null == t ? void 0 : t.initialHeight) && void 0 !== n ? n : 0]
        }));
        return (0, i.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && n([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, a.default)(e, (e => {
            const t = e.target;
            n([t.offsetWidth, t.offsetHeight])
        })), r
    }
})), r.register("3KQc0", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("6rvT3"),
        a = r("9iNNJ"),
        i = r("3Yjty"),
        s = r("f1PHW");
    let u;
    const c = () => u || (u = function() {
        const e = new Map,
            t = new(0, o.default)((0, s.default)(((t, r) => {
                var n;
                if (1 === t.length) null === (n = e.get(t[0].target)) || void 0 === n || n(t[0], r);
                else
                    for (let n = 0; n < t.length; n++) {
                        var o;
                        null === (o = e.get(t[n].target)) || void 0 === o || o(t[n], r)
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
        return (0, a.default)((() => {
            let t = !1;
            const o = e && "current" in e ? e.current : e;
            if (o) return r.subscribe(o, ((e, r) => {
                t || n.current(e, r)
            })), () => {
                t = !0, r.unsubscribe(o)
            }
        }), [e, r, n]), r.observer
    }
})), r.register("9iNNJ", (function(n, o) {
    e(n.exports, "default", (function() {
        return a
    }));
    var a = t(r("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), r.register("3Yjty", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("fywoC");
    var a = e => {
        const t = o.useRef(e);
        return o.useEffect((() => {
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
                for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                t = o, r || (r = requestAnimationFrame((function() {
                    r = null, e.apply(void 0, t)
                })))
            };
        return n.cancel = function() {
            r && (cancelAnimationFrame(r), r = null)
        }, n
    }
})), r.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return a
    }));
    var o = r("bd8je");
    const a = e => {
        o.history.push(e)
    }
})), r.register("py2Xr", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = e => (0, o.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), r.register("gJKjM", (function(n, o) {
    e(n.exports, "responsiveArray", (function() {
        return s
    })), e(n.exports, "default", (function() {
        return u
    }));
    var a = r("fywoC"),
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
                const o = e.toUpperCase(),
                    a = `screen${o}Min`,
                    i = `screen${o}`;
                if (!(t[a] <= t[i])) throw new Error(`${a}<=${i} fails : !(${t[a]}<=${t[i]})`);
                if (n < r.length - 1) {
                    const e = `screen${o}Max`;
                    if (!(t[i] <= t[e])) throw new Error(`${i}<=${e} fails : !(${t[i]}<=${t[e]})`);
                    const a = `screen${r[n+1].toUpperCase()}Min`;
                    if (!(t[e] <= t[a])) throw new Error(`${e}<=${a} fails : !(${t[e]}<=${t[a]})`)
                }
            })), e
        })(e));
        return t(a).useMemo((() => {
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
                            o = t => {
                                let {
                                    matches: r
                                } = t;
                                this.dispatch(Object.assign(Object.assign({}, n), {
                                    [e]: r
                                }))
                            },
                            a = window.matchMedia(t);
                        a.addListener(o), this.matchHandlers[t] = {
                            mql: a,
                            listener: o
                        }, o(a)
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

    function o(e) {
        var t, r, o = (0, n.lazy)(e),
            a = (0, n.forwardRef)((function(e, r) {
                var a = (0, n.useRef)(null != t ? t : o);
                return (0, n.createElement)(a.current, Object.assign(r ? {
                    ref: r
                } : {}, e))
            }));
        return a.preload = function() {
            return r || (r = e().then((function(e) {
                return t = e.default
            }))), r
        }, a
    }
    e.exports.lazyWithPreload = o, e.exports.default = o
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
})), r.register("exbzb", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("8N8s4"),
        s = r("dwKuN"),
        u = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    u.displayName = "QuestionCircleOutlined";
    var c = a.forwardRef(u)
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