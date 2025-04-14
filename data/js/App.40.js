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
r.register("6udk0", (function(t, n) {
    var a;
    a = t.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return y
    }));
    var i = r("hxEiv");
    r("fywoC");
    var o = r("2FDaO"),
        s = r("lKmIF"),
        l = r("iMOcM"),
        c = r("b1oE9"),
        u = r("dDBEp"),
        d = r("4IGCI"),
        f = r("3uz2P"),
        p = r("4gMdJ"),
        m = r("cPGmn"),
        x = r("cHCps");
    let g, h, v = e => e;
    var y = () => {
        const e = (0, l.isLoggedIn)();
        return (0, m.useDidMount)((() => {
            e || (0, l.loadFont)("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap")
        })), e ? (0, i.jsx)(f.Navigate, {
            to: c.DASHBOARD,
            replace: !0
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Title, {
                title: "Gimkit - live learning game show",
                override: !0
            }), (0, i.jsx)(w, {
                children: (0, i.jsxs)(p.default, {
                    theme: {
                        token: {
                            fontFamily: "Rubik, sans-serif"
                        }
                    },
                    children: [(0, i.jsx)(x.default, {
                        includeSpacer: !0
                    }), (0, i.jsxs)(b, {
                        children: [(0, i.jsx)(u.default, {}), (0, i.jsx)(d.default, {})]
                    })]
                })
            })]
        })
    };
    const w = o.default.div.attrs({
            className: "flex-column vc maxWidth"
        })(g || (g = v`
  flex: 1;
  background: ${0};
  font-family: 'Rubik', sans-serif;
  color: ${0};
`), s.default.Snow, s.default.White),
        b = o.default.div.attrs({
            className: "flex-center flex-column maxWidth"
        })(h || (h = v`
  color: ${0};
`), s.default.Black)
})), r.register("dDBEp", (function(t, n) {
    e(t.exports, "default", (function() {
        return E
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        o = r("97s6z"),
        s = r("iBohx"),
        l = r("93yIm"),
        c = r("fC6cp"),
        u = r("lKmIF"),
        d = r("kyvf1"),
        f = r("b1oE9");
    let p, m, x, g, h, v, y, w = e => e;
    const b = i.default.div.attrs({
            className: "maxWidth flex hc"
        })(p || (p = w`
  align-items: center;
  margin-top: 40px;
  margin-bottom: 60px;
  width: 90%;
  @media (max-width: ${0}px) {
    margin-top: 26px;
    margin-bottom: 40px;
  }
  @media (max-width: 460px) {
    margin-top: 16px;
  }
`), 890),
        j = i.default.div.attrs({
            className: "flex hc vc flex-column"
        })(m || (m = w`
  background: ${0};
  padding: 48px;
  border-style: solid;
  border-color: ${0};
  border-width: 14px;
  border-radius: 45px;
  max-width: 620px;
  @media (max-width: ${0}px) {
    border-radius: 14px;
    border-width: 7px;
    max-width: 100%;
  }
  @media (max-width: 460px) {
    background: transparent;
    padding: 0px;
    border-style: none;
  }
`), u.default.White, u.default.Black, 890),
        C = i.default.h1(x || (x = w`
  color: ${0};
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
  @media (max-width: 975px) {
    font-size: 44px;
  }
  @media (max-width: 460px) {
    font-size: 33px;
  }
`), u.default.Black),
        O = i.default.div(g || (g = w`
  font-size: 17px;
  color: #1d2d35;
  margin-bottom: 31px;
  @media (max-width: 460px) {
    font-size: 15px;
  }
`)),
        S = i.default.div.attrs({
            className: "flex"
        })(h || (h = w`
  width: 150px;
  align-items: flex-start; // for Safari
  justify-content: flex-end;
  flex-shrink: 0;
  @media (min-width: 1200px) {
    width: 175px;
  }
  @media (max-width: ${0}px) {
    display: none;
  }
`), 890),
        k = i.default.div(v || (v = w`
  height: 40px;
  width: 40px;
  background-image: url(/client/img/home/me.jpg);
  background-size: cover;
  background-position: center center;
  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
  border-color: #1d2d35;
  margin-right: 10px;
`)),
        z = i.default.div.attrs({
            className: "flex vc"
        })(y || (y = w`
  @media (max-width: 950px) {
    display: none;
  }
`));
    var E = () => (0, a.jsxs)(b, {
        children: [(0, a.jsx)(S, {
            children: (0, a.jsx)("img", {
                src: "/client/img/home/left.png",
                style: {
                    width: "100%"
                }
            })
        }), (0, a.jsxs)(j, {
            children: [(0, a.jsx)(C, {
                children: "Next level."
            }), (0, a.jsxs)(O, {
                children: ["Hey, I'm Josh! I started Gimkit as a high school project.", (0, a.jsx)("br", {}), " ", (0, a.jsx)("br", {}), "Games really helped me become engaged in school. That's why I built Gimkit — to be the kind of game I'd want to play in class.", (0, a.jsx)("br", {}), " ", (0, a.jsx)("br", {}), "Can't wait for you to give it a try!", (0, a.jsx)("br", {}), " ", (0, a.jsx)("br", {}), (0, a.jsxs)("div", {
                    className: "flex vc",
                    children: [(0, a.jsx)(k, {}), " - Josh F."]
                })]
            }), (0, a.jsx)("div", {
                className: "flex flex-column vc"
            }), (0, a.jsx)(d.default, {
                to: f.REGISTER_BASE,
                children: (0, a.jsx)(l.default, {
                    style: {
                        width: 277,
                        height: 61
                    },
                    size: "large",
                    icon: (0, a.jsx)(s.default, {}),
                    type: "primary",
                    children: "Sign Up For Free"
                })
            }), (0, a.jsxs)("div", {
                className: "flex wrap vc",
                style: {
                    marginTop: 15
                },
                children: [(0, a.jsx)(d.default, {
                    to: "/join",
                    external: !0,
                    children: (0, a.jsxs)(l.default, {
                        type: "link",
                        children: [(0, a.jsx)("i", {
                            className: "far fa-gamepad-alt"
                        }), "  Join Game"]
                    })
                }), (0, a.jsx)(c.default, {
                    type: "vertical"
                }), (0, a.jsx)(d.default, {
                    to: f.LOGIN,
                    children: (0, a.jsxs)(l.default, {
                        type: "link",
                        children: [(0, a.jsx)(o.default, {}), "Login"]
                    })
                }), (0, a.jsxs)(z, {
                    children: [(0, a.jsx)(c.default, {
                        type: "vertical"
                    }), (0, a.jsx)(d.default, {
                        to: f.GROUP_PRICING,
                        children: (0, a.jsxs)(l.default, {
                            type: "link",
                            children: [(0, a.jsx)("i", {
                                className: "far fa-users"
                            }), "  Group Pricing"]
                        })
                    })]
                })]
            })]
        }), (0, a.jsx)(S, {
            children: (0, a.jsx)("img", {
                src: "/client/img/home/right.png",
                style: {
                    width: "100%"
                }
            })
        })]
    })
})), r.register("iBohx", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("cvJFc"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    l.displayName = "UserAddOutlined";
    var c = i.forwardRef(l)
})), r.register("cvJFc", (function(t, r) {
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
                    d: "M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "user-add",
        theme: "outlined"
    }
})), r.register("kyvf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("hxEiv"),
        i = r("beXRF");
    r("fywoC");
    var o = e => e.external || !e.to ? (0, a.jsx)("a", {
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
    }) : (0, a.jsx)(i.Link, {
        to: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    })
})), r.register("4IGCI", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        o = r("iDXeY"),
        s = r("cB8PI"),
        l = r("6X5EI"),
        c = r("iUYxx");
    let u;
    const d = e => (0, a.jsx)("div", {
        style: {
            height: e.height
        }
    });
    var f = () => (0, a.jsxs)(p, {
        children: [(0, a.jsx)(o.default, {
            title: "Answer",
            description: "Students answer questions on their own device at their own pace.\n            Throughout a Kit, each student will get exposure to the questions\n            multiple times to ensure mastery.",
            image: "/client/img/home/answer.png",
            imageSide: "right"
        }), (0, a.jsx)(d, {
            height: 50
        }), (0, a.jsx)(o.default, {
            title: "Earn",
            description: "Students earn in-game cash by answering questions correctly. But be careful, an incorrect answer will cost you!",
            image: "/client/img/home/earn.png",
            imageSide: "left"
        }), (0, a.jsx)(d, {
            height: 50
        }), (0, a.jsx)(o.default, {
            title: "Shop",
            description: "Students can reinvest their money by purchasing upgrades & powerups. With millions of combinations, students can make purchases that suit their strengths.",
            image: "/client/img/home/shop.png",
            imageSide: "right"
        }), (0, a.jsx)(d, {
            height: 50
        }), (0, a.jsx)(s.default, {}), (0, a.jsx)(d, {
            height: 100
        }), (0, a.jsx)(l.default, {
            title: "Home works.",
            description: (0, a.jsxs)(a.Fragment, {
                children: ["Gimkit doesn't just have to be used in class. You can also assign it as homework. ", (0, a.jsx)("br", {}), " ", (0, a.jsx)("br", {}), "Students love it and assignments are graded for you automatically."]
            }),
            image: "/client/img/home/assignment.png",
            imageSide: "right"
        }), (0, a.jsx)(d, {
            height: 100
        }), (0, a.jsx)(l.default, {
            title: "KitCollab",
            description: (0, a.jsxs)(a.Fragment, {
                children: ["With KitCollab, students create questions for the game!", (0, a.jsx)("br", {}), " ", (0, a.jsx)("br", {}), "In realtime, students submit questions, you accept them, and then the class plays a game with the questions they wrote!"]
            }),
            image: "/client/img/home/kitcollab.png",
            imageSide: "left"
        }), (0, a.jsx)(d, {
            height: 100
        }), (0, a.jsx)(c.default, {})]
    });
    const p = i.default.div.attrs({
        className: "flex-center flex-column maxWidth"
    })(u || (u = (e => e)``))
})), r.register("iDXeY", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var a = r("hxEiv"),
        i = r("69SUA");
    r("fywoC");
    var o = r("2FDaO"),
        s = r("9OL3G");
    let l, c, u, d, f, p = e => e;
    const m = 670;
    var x = e => {
        const t = "right" === e.imageSide;
        return (0, a.jsx)(s.default, {
            children: (0, a.jsxs)(g, {
                row: t,
                children: [(0, a.jsxs)(h, {
                    marginLeft: t ? 0 : 55,
                    marginRight: t ? 55 : 0,
                    children: [(0, a.jsx)(v, {
                        children: e.title
                    }), (0, a.jsx)(y, {
                        children: e.description
                    })]
                }), (0, a.jsx)(w, {
                    style: {
                        transform: `rotate(${t?2:-2}deg)`
                    },
                    src: e.image
                })]
            })
        })
    };
    const g = o.default.div.attrs({
            className: "flex vc hc"
        })(l || (l = p`
  flex-direction: ${0};
  @media (max-width: ${0}px) {
    flex-direction: column;
  }
`), (e => e.row ? "row" : "row-reverse"), m),
        h = o.default.div(c || (c = p`
  max-width: 530px;
  margin-left: ${0}px;
  margin-right: ${0}px;
  @media (max-width: ${0}px) {
    margin-left: 0px;
    margin-right: 0px;
    text-align: center;
  }
`), (e => e.marginLeft), (e => e.marginRight), m),
        v = o.default.div(u || (u = p`
  font-size: 40px;
  font-weight: ${0};
  @media (max-width: ${0}px) {
    font-size: 32px;
  }
`), i.FontWeights.Bold, m),
        y = o.default.div(d || (d = p`
  font-size: 19px;
  @media (max-width: ${0}px) {
    font-size: 16px;
  }
`), m),
        w = o.default.img(f || (f = p`
  height: 390px;
  @media (max-width: ${0}px) {
    margin-top: 20px;
    height: 320px;
  }
`), m)
})), r.register("9OL3G", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    let a;
    var i = r("2FDaO").default.div(a || (a = (e => e)`
  width: 90%;
  max-width: 900px;
`))
})), r.register("cB8PI", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var a = r("hxEiv"),
        i = r("lKmIF"),
        o = r("69SUA");
    r("fywoC");
    var s = r("2FDaO");
    let l, c, u, d, f, p = e => e;
    var m = () => (0, a.jsxs)(x, {
        children: [(0, a.jsxs)(g, {
            children: [(0, a.jsx)(h, {
                children: "Always new ways to play..."
            }), (0, a.jsx)(v, {
                children: "That's just the core of Gimkit. With 10+ unique game modes and more in development, there's always a new way to play."
            })]
        }), (0, a.jsx)(y, {})]
    });
    const x = s.default.div.attrs({
            className: "maxWidth flex flex-column vc"
        })(l || (l = p`
  background: #0a2540;
  color: ${0};
  padding: 100px 30px;
`), i.default.White),
        g = s.default.div(c || (c = p`
  max-width: 600px;
  text-align: center;
`)),
        h = s.default.div(u || (u = p`
  color: ${0};
  font-size: 40px;
  font-weight: ${0};
  @media (max-width: 580px) {
    font-size: 27px;
  }
`), i.default.White, o.FontWeights.Bold),
        v = s.default.div(d || (d = p`
  color: #adbdcc;
  font-size: 19px;
  margin-top: 4px;
  @media (max-width: 580px) {
    font-size: 17px;
  }
`)),
        y = s.default.img.attrs({
            src: "/client/img/home/modes.png"
        })(f || (f = p`
  width: 100%;
  max-width: 1000px;
  margin-top: 35px;
  @media (max-width: 800px) {
    display: none;
  }
`))
})), r.register("6X5EI", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var a = r("hxEiv"),
        i = r("69SUA");
    r("fywoC");
    var o = r("2FDaO"),
        s = r("9OL3G");
    let l, c, u, d, f, p, m = e => e;
    var x = e => {
        const t = "left" === e.imageSide;
        return (0, a.jsx)(s.default, {
            children: (0, a.jsxs)(g, {
                flexDirection: t ? "row-reverse" : "row",
                children: [(0, a.jsxs)(h, {
                    children: [(0, a.jsx)(v, {
                        children: e.title
                    }), (0, a.jsx)(y, {
                        children: e.description
                    })]
                }), (0, a.jsx)(w, {
                    marginLeft: t ? 0 : 50,
                    marginRight: t ? 50 : 0,
                    children: (0, a.jsx)(b, {
                        src: e.image
                    })
                })]
            })
        })
    };
    const g = o.default.div.attrs({
            className: "maxWidth flex vc"
        })(l || (l = m`
  flex-direction: ${0};
  @media (max-width: 890px) {
    flex-direction: column !important;
  }
`), (e => e.flexDirection)),
        h = o.default.div(c || (c = m`
  width: 100%;
  max-width: 420px;
  @media (max-width: 890px) {
    margin-bottom: 25px;
    text-align: center;
  }
`)),
        v = o.default.div(u || (u = m`
  font-size: 40px;
  font-weight: ${0};
`), i.FontWeights.Bold),
        y = o.default.div(d || (d = m`
  font-size: 19px;
  margin-top: 8px;
`)),
        w = o.default.div(f || (f = m`
  width: 465px;
  max-width: 100%;
  flex-shrink: 0;
  margin-left: ${0}px;
  margin-right: ${0}px;
  @media (max-width: 890px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
    max-width: 465px;
  }
`), (e => e.marginLeft), (e => e.marginRight)),
        b = o.default.img.attrs({
            className: "maxWidth"
        })(p || (p = m``))
})), r.register("iUYxx", (function(t, n) {
    e(t.exports, "default", (function() {
        return h
    }));
    var a = r("hxEiv"),
        i = r("iBohx"),
        o = r("93yIm"),
        s = r("lKmIF"),
        l = r("69SUA"),
        c = r("b1oE9"),
        u = r("kyvf1");
    r("fywoC");
    var d = r("2FDaO");
    let f, p, m, x, g = e => e;
    var h = () => (0, a.jsxs)(v, {
        children: [(0, a.jsxs)(y, {
            children: [(0, a.jsx)(w, {
                children: "Game on."
            }), (0, a.jsx)(b, {
                children: "Get your first game going and see your students engaged like never before!"
            })]
        }), (0, a.jsx)(u.default, {
            to: c.REGISTER_BASE,
            children: (0, a.jsx)(o.default, {
                icon: (0, a.jsx)(i.default, {}),
                type: "primary",
                size: "large",
                style: {
                    width: 277,
                    height: 61
                },
                children: "Sign Up For Free"
            })
        })]
    });
    const v = d.default.div.attrs({
            className: "maxWidth flex flex-column vc"
        })(f || (f = g`
  background: #0a2540;
  color: ${0};
  padding: 100px 30px;
`), s.default.White),
        y = d.default.div(p || (p = g`
  max-width: 770px;
  text-align: center;
`)),
        w = d.default.div(m || (m = g`
  font-size: 48px;
  font-weight: ${0};
  @media (max-width: 580px) {
    font-size: 36px;
  }
`), l.FontWeights.Bold),
        b = d.default.div(x || (x = g`
  font-size: 22px;
  margin-top: -5px;
  margin-bottom: 20px;
  color: #adbdcc;
  @media (max-width: 580px) {
    font-size: 18px;
    margin-top: -1px;
  }
`))
})), r.register("kuEJ4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var a = r("iI4DW"),
        i = r("fywoC"),
        o = r("4gMdJ");

    function s(e, t, r) {
        return function(n) {
            const {
                prefixCls: s,
                style: l
            } = n, c = i.useRef(null), [u, d] = i.useState(0), [f, p] = i.useState(0), [m, x] = (0, a.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: g
            } = i.useContext(o.ConfigContext), h = g(t || "select", s);
            return i.useEffect((() => {
                if (x(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            d(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var n;
                            const a = r ? `.${r(h)}` : `.${h}-dropdown`,
                                i = null === (n = c.current) || void 0 === n ? void 0 : n.querySelector(a);
                            i && (clearInterval(t), e.observe(i))
                        }), 10);
                    return () => {
                        clearInterval(t), e.disconnect()
                    }
                }
            }), []), i.createElement(o.default, {
                theme: {
                    token: {
                        motionDurationFast: "0.01s",
                        motionDurationMid: "0.01s",
                        motionDurationSlow: "0.01s"
                    }
                }
            }, i.createElement("div", {
                ref: c,
                style: {
                    paddingBottom: u,
                    position: "relative",
                    width: "fit-content",
                    minWidth: f
                }
            }, i.createElement(e, Object.assign({}, n, {
                style: Object.assign(Object.assign({}, l), {
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
        i = r("aWAHQ");
    const o = new(0, a.Keyframes)("antMoveDownIn", {
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
        l = new(0, a.Keyframes)("antMoveLeftIn", {
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
        u = new(0, a.Keyframes)("antMoveRightIn", {
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
                inKeyframes: o,
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
                antCls: r
            } = e, n = `${r}-${t}`, {
                inKeyframes: a,
                outKeyframes: o
            } = f[t];
            return [(0, i.initMotion)(n, a, o, e.motionDurationMid), {
                [`\n        ${n}-enter,\n        ${n}-appear\n      `]: {
                    opacity: 0,
                    animationTimingFunction: e.motionEaseOutCirc
                },
                [`${n}-leave`]: {
                    animationTimingFunction: e.motionEaseInOutCirc
                }
            }]
        }
})), r.register("i5Qjx", (function(n, a) {
    e(n.exports, "SpaceContext", (function() {
        return m
    }), (function(e) {
        return m = e
    })), e(n.exports, "default", (function() {
        return h
    }), (function(e) {
        return h = e
    }));
    var i = r("fe1on"),
        o = r("jyxW7"),
        s = r("fywoC"),
        l = r("4gMdJ"),
        c = r("1eqVQ"),
        u = r("7yXSw"),
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
        x = {
            small: 8,
            middle: 16,
            large: 24
        };
    const g = e => {
        const {
            getPrefixCls: r,
            space: n,
            direction: a
        } = s.useContext(l.ConfigContext), {
            size: u = (null == n ? void 0 : n.size) || "small",
            align: g,
            className: h,
            rootClassName: v,
            children: y,
            direction: w = "horizontal",
            prefixCls: b,
            split: j,
            style: C,
            wrap: O = !1
        } = e, S = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), k = (0, c.default)(), [z, E] = s.useMemo((() => (Array.isArray(u) ? u : [u, u]).map((e => function(e) {
            return "string" == typeof e ? x[e] : e || 0
        }(e)))), [u]), N = (0, o.default)(y, {
            keepEmpty: !0
        }), M = void 0 === g && "horizontal" === w ? "center" : g, D = r("space", b), [I, $] = (0, f.default)(D), W = t(i)(D, $, `${D}-${w}`, {
            [`${D}-rtl`]: "rtl" === a,
            [`${D}-align-${M}`]: M
        }, h, v), R = `${D}-item`, B = "rtl" === a ? "marginLeft" : "marginRight";
        let F = 0;
        const P = N.map(((e, t) => {
                null != e && (F = t);
                const r = e && e.key || `${R}-${t}`;
                return s.createElement(d.default, {
                    className: R,
                    key: r,
                    direction: w,
                    index: t,
                    marginDirection: B,
                    split: j,
                    wrap: O
                }, e)
            })),
            K = s.useMemo((() => ({
                horizontalSize: z,
                verticalSize: E,
                latestIndex: F,
                supportFlexGap: k
            })), [z, E, F, k]);
        if (0 === N.length) return null;
        const _ = {};
        return O && (_.flexWrap = "wrap", k || (_.marginBottom = -E)), k && (_.columnGap = z, _.rowGap = E), I(s.createElement("div", Object.assign({
            className: W,
            style: Object.assign(Object.assign({}, _), C)
        }, S), s.createElement(m.Provider, {
            value: K
        }, P)))
    };
    g.Compact = u.default;
    var h = g
})), r.register("1eqVQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("fywoC"),
        i = r("azMeL"),
        o = () => {
            const [e, t] = a.useState(!1);
            return a.useEffect((() => {
                t((0, i.detectFlexGapSupported)())
            }), []), e
        }
})), r.register("c9Vcn", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var a = r("fywoC"),
        i = r("i5Qjx");

    function o(e) {
        let {
            className: t,
            direction: r,
            index: n,
            marginDirection: o,
            children: s,
            split: l,
            wrap: c
        } = e;
        const {
            horizontalSize: u,
            verticalSize: d,
            latestIndex: f,
            supportFlexGap: p
        } = a.useContext(i.SpaceContext);
        let m = {};
        return p || ("vertical" === r ? n < f && (m = {
            marginBottom: u / (l ? 2 : 1)
        }) : m = Object.assign(Object.assign({}, n < f && {
            [o]: u / (l ? 2 : 1)
        }), c && {
            paddingBottom: d
        })), null == s ? null : a.createElement(a.Fragment, null, a.createElement("div", {
            className: t,
            style: m
        }, s), n < f && l && a.createElement("span", {
            className: `${t}-split`,
            style: m
        }, l))
    }
})), r.register("dhxiD", (function(e, t) {
    var n = r("1fK2g"),
        a = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var r, i, o, s, l, c, u = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (o = n(), s = document.createRange(), l = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var i = a[t.format] || a.default;
                            window.clipboardData.setData(i, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(c), s.selectNodeContents(c), l.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            u = !0
        } catch (n) {
            r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
            } catch (n) {
                r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), i = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(i, e)
            }
        } finally {
            l && ("function" == typeof l.removeRange ? l.removeRange(s) : l.removeAllRanges()), c && document.body.removeChild(c), o()
        }
        return u
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
        return i
    }));
    var a = r("fywoC");

    function i(e) {
        if ("undefined" == typeof window) return console.warn("useMediaMatch cannot function as window is undefined."), !1;
        var t = (0, a.useMemo)((function() {
                return window.matchMedia(e)
            }), [e]),
            r = (0, a.useState)((function() {
                return t.matches
            })),
            n = r[0],
            i = r[1];
        return (0, a.useEffect)((function() {
            i(t.matches);
            var e = function(e) {
                return i(e.matches)
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
        i = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return a(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useWindowSize = void 0;
    var o = i(r("fywoC"));

    function s() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }
    e.exports.useWindowSize = function() {
        var e = o.useState(s()),
            t = e[0],
            r = e[1];
        return o.useLayoutEffect((function() {
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
        i = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
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
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && a(t, e, r);
            return i(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useComponentSize = void 0;
    var s = o(r("fywoC"));
    e.exports.useComponentSize = function() {
        var e = s.useState({
                height: 0,
                width: 0
            }),
            t = e[0],
            r = e[1],
            a = s.useRef(),
            i = s.useCallback((function() {
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
                var e = new ResizeObserver(i);
                return e.observe(a.current),
                    function() {
                        return e.disconnect()
                    }
            }
        }), [a, i]), n({
            ref: a
        }, t)
    }
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
})), r.register("dohZB", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("bVHCc"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    l.displayName = "UsergroupAddOutlined";
    var c = i.forwardRef(l)
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
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("4GmeK"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    l.displayName = "LogoutOutlined";
    var c = i.forwardRef(l)
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
})), r.register("9kZfj", (function(t, n) {
    e(t.exports, "onlyOfferAnnualUpgrade", (function() {
        return i
    }));
    var a = r("hrYih");
    const i = () => "annual-only" === a.default.getFeatureFlag("annual-only-pro")
})), r.register("aYYSA", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("5UEB4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    l.displayName = "StarOutlined";
    var c = i.forwardRef(l)
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
        i = r("3KQc0"),
        o = r("9iNNJ");
    var s = (e, t) => {
        const [r, n] = a.useState((() => {
            var r, n;
            const a = e && "current" in e ? e.current : e;
            return a ? [a.offsetWidth, a.offsetHeight] : [null !== (r = null == t ? void 0 : t.initialWidth) && void 0 !== r ? r : 0, null !== (n = null == t ? void 0 : t.initialHeight) && void 0 !== n ? n : 0]
        }));
        return (0, o.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && n([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, i.default)(e, (e => {
            const t = e.target;
            n([t.offsetWidth, t.offsetHeight])
        })), r
    }
})), r.register("3KQc0", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var a = r("6rvT3"),
        i = r("9iNNJ"),
        o = r("3Yjty"),
        s = r("f1PHW");
    let l;
    const c = () => l || (l = function() {
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
    var u = function(e, t) {
        const r = c(),
            n = (0, o.default)(t);
        return (0, i.default)((() => {
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
        return i
    }));
    var i = t(r("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), r.register("3Yjty", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("fywoC");
    var i = e => {
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
                for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                t = a, r || (r = requestAnimationFrame((function() {
                    r = null, e.apply(void 0, t)
                })))
            };
        return n.cancel = function() {
            r && (cancelAnimationFrame(r), r = null)
        }, n
    }
})), r.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return i
    }));
    var a = r("bd8je");
    const i = e => {
        a.history.push(e)
    }
})), r.register("py2Xr", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = e => (0, a.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), r.register("bmTnW", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.lazyWithPreload = void 0;
    var n = r("fywoC");

    function a(e) {
        var t, r, a = (0, n.lazy)(e),
            i = (0, n.forwardRef)((function(e, r) {
                var i = (0, n.useRef)(null != t ? t : a);
                return (0, n.createElement)(i.current, Object.assign(r ? {
                    ref: r
                } : {}, e))
            }));
        return i.preload = function() {
            return r || (r = e().then((function(e) {
                return t = e.default
            }))), r
        }, i
    }
    e.exports.lazyWithPreload = a, e.exports.default = a
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
    var a = r("dnh3u"),
        i = r("fywoC"),
        o = r("8N8s4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return i.createElement(s.default, (0, a.default)((0, a.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    l.displayName = "QuestionCircleOutlined";
    var c = i.forwardRef(l)
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