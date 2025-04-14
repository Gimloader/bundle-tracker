function e(e, t, s, o) {
    Object.defineProperty(e, t, {
        get: s,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("6lsoB", (function(s, o) {
    var i;
    i = s.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), e(s.exports, "default", (function() {
        return v
    }));
    var r = t("hxEiv"),
        n = t("bfV0l"),
        a = t("fC6cp"),
        l = t("fywoC"),
        c = t("2FDaO"),
        d = t("lKmIF"),
        u = t("69SUA"),
        h = t("d9JL4"),
        f = t("12tgp"),
        m = t("4lImC"),
        p = t("iMOcM"),
        x = t("cO2Su");
    let g, b, k = e => e;
    var v = () => {
        const [e, t] = l.useState(0), s = () => t((e => e + 1));
        return (0, r.jsxs)(y, {
            children: [(0, r.jsx)(p.Title, {
                title: "Compatibility Check"
            }), (0, r.jsxs)(w, {
                children: [(0, r.jsx)(h.default, {}), e === m.default.length ? (0, r.jsx)(n.default, {
                    type: "success",
                    style: {
                        marginTop: 15
                    },
                    showIcon: !0,
                    message: "All Test Passed!",
                    description: "You should be all set to access everything in Gimkit properly!"
                }) : null, (0, r.jsx)(a.default, {}), m.default.map((e => (0, r.jsx)(f.default, {
                    test: e,
                    onPass: s
                }, e.name)))]
            })]
        })
    };
    const y = c.default.div.attrs({
            className: "flex hc"
        })(g || (g = k`
  flex: 1;
  background: ${0};
  font-family: ${0};
  color: ${0};
`), d.default.Snow, u.Fonts.SFPro, d.default.Black),
        w = (0, c.default)(x.default)(b || (b = k`
  width: 90%;
  max-width: 750px;
  margin: 40px 0px;
  border-radius: 8px;
  padding: 40px;
`))
})), t.register("d9JL4", (function(s, o) {
    e(s.exports, "default", (function() {
        return n
    }));
    var i = t("hxEiv");
    t("fywoC");
    var r = t("69SUA");
    var n = () => (0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
            style: {
                fontWeight: r.FontWeights.Bold,
                fontSize: 32
            },
            children: "Gimkit Compatibility Check"
        }), (0, i.jsx)("div", {
            style: {
                fontSize: 16,
                marginTop: 3
            },
            children: "If any of these tests fail, then please contact your school's IT staff and share info on how to fix the failed test. They will need to change your firewall settings to get Gimkit to work."
        })]
    })
})), t.register("12tgp", (function(s, o) {
    e(s.exports, "default", (function() {
        return y
    }));
    var i = t("hxEiv"),
        r = t("fywoC"),
        n = t("7ECC6"),
        a = t("2FDaO"),
        l = t("lKmIF"),
        c = t("9Mv96"),
        d = t("69SUA"),
        u = t("7MQbG");
    let h, f, m, p, x, g, b, k, v = e => e;
    var y = e => {
        const {
            loading: t,
            passed: s
        } = (0, u.useTest)(e.test.test), o = r.useMemo((() => t ? "#4251af" : s ? "#388e3c" : "#f44336"), [t, s]), a = r.useMemo((() => t ? "Running Test" : s ? "Test Passed" : "Test Failed"), [t, s]);
        r.useEffect((() => {
            s && e.onPass()
        }), [s]);
        const d = !t && !s;
        return (0, i.jsx)(n.default, {
            hoverable: !0,
            style: {
                marginBottom: 15
            },
            children: (0, i.jsxs)(w, {
                children: [(0, i.jsxs)(j, {
                    children: [t ? (0, i.jsx)(c.default, {
                        size: 14
                    }) : null, (0, i.jsx)("div", {
                        style: {
                            marginLeft: t ? 8 : 0,
                            color: o
                        },
                        children: a
                    })]
                }), (0, i.jsx)(C, {
                    style: {
                        color: s || t ? l.default.Black : o
                    },
                    children: e.test.name
                }), e.test.description && t ? (0, i.jsx)(F, {
                    children: e.test.description
                }) : null, d ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(T, {
                        children: [(0, i.jsx)(M, {
                            children: "What It Means"
                        }), (0, i.jsx)(I, {
                            children: e.test.whatItMeans
                        })]
                    }), (0, i.jsxs)(S, {
                        children: [(0, i.jsx)(M, {
                            children: "How To Fix"
                        }), (0, i.jsx)(I, {
                            children: e.test.howToFix
                        })]
                    })]
                }) : null]
            })
        })
    };
    const w = a.default.div(h || (h = v`
  color: ${0};
`), l.default.Black),
        j = a.default.div.attrs({
            className: "flex vc"
        })(f || (f = v`
  font-size: 16px;
`)),
        C = a.default.div(m || (m = v`
  margin-top: 1px;
  font-size: 21px;
  font-weight: ${0};
`), d.FontWeights.Bold),
        F = a.default.div(p || (p = v`
  font-size: 16px;
  opacity: 0.8;
  margin-top: 2px;
`)),
        T = a.default.div.attrs({
            className: "maxWidth"
        })(x || (x = v`
  background: #f5f5f5;
  border: 2px #78909c solid;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
`)),
        M = a.default.div(g || (g = v`
  font-style: italic;
  font-weight: ${0};
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`), d.FontWeights.Bold),
        I = a.default.div(b || (b = v`
  margin-top: 5px;
`)),
        S = a.default.div.attrs({
            className: "maxWidth"
        })(k || (k = v`
  background: #f1f8e9;
  border: 2px #66bb6a solid;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
`))
})), t.register("9Mv96", (function(s, o) {
    e(s.exports, "default", (function() {
        return f
    }));
    var i = t("kqQIs"),
        r = t("2Af7I"),
        n = t("fywoC");
    t("djNMu");
    var a = t("aWdbz"),
        l = t("cY4lv"),
        c = t("kYx4h"),
        d = 44;

    function u(e) {
        var t, s, o;
        return t = e, s = 0, o = 1, e = (Math.min(Math.max(s, t), o) - s) / (o - s), e = (e -= 1) * e * e + 1
    }
    var h = n.forwardRef((function(e, t) {
            var s, o = e.classes,
                l = e.className,
                h = e.color,
                f = void 0 === h ? "primary" : h,
                m = e.disableShrink,
                p = void 0 !== m && m,
                x = e.size,
                g = void 0 === x ? 40 : x,
                b = e.style,
                k = e.thickness,
                v = void 0 === k ? 3.6 : k,
                y = e.value,
                w = void 0 === y ? 0 : y,
                j = e.variant,
                C = void 0 === j ? "indeterminate" : j,
                F = (0, r.default)(e, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]),
                T = {},
                M = {},
                I = {};
            if ("determinate" === C || "static" === C) {
                var S = 2 * Math.PI * ((d - v) / 2);
                T.strokeDasharray = S.toFixed(3), I["aria-valuenow"] = Math.round(w), "static" === C ? (T.strokeDashoffset = "".concat(((100 - w) / 100 * S).toFixed(3), "px"), M.transform = "rotate(-90deg)") : (T.strokeDashoffset = "".concat((s = (100 - w) / 100, s * s * S).toFixed(3), "px"), M.transform = "rotate(".concat((270 * u(w / 70)).toFixed(3), "deg)"))
            }
            return n.createElement("div", (0, i.default)({
                className: (0, a.default)(o.root, l, "inherit" !== f && o["color".concat((0, c.default)(f))], {
                    indeterminate: o.indeterminate,
                    static: o.static
                } [C]),
                style: (0, i.default)({
                    width: g,
                    height: g
                }, M, b),
                ref: t,
                role: "progressbar"
            }, I, F), n.createElement("svg", {
                className: o.svg,
                viewBox: "".concat(22, " ").concat(22, " ").concat(d, " ").concat(d)
            }, n.createElement("circle", {
                className: (0, a.default)(o.circle, p && o.circleDisableShrink, {
                    indeterminate: o.circleIndeterminate,
                    static: o.circleStatic
                } [C]),
                style: T,
                cx: d,
                cy: d,
                r: (d - v) / 2,
                fill: "none",
                strokeWidth: v
            })))
        })),
        f = (0, l.default)((function(e) {
            return {
                root: {
                    display: "inline-block"
                },
                static: {
                    transition: e.transitions.create("transform")
                },
                indeterminate: {
                    animation: "$circular-rotate 1.4s linear infinite"
                },
                colorPrimary: {
                    color: e.palette.primary.main
                },
                colorSecondary: {
                    color: e.palette.secondary.main
                },
                svg: {
                    display: "block"
                },
                circle: {
                    stroke: "currentColor"
                },
                circleStatic: {
                    transition: e.transitions.create("stroke-dashoffset")
                },
                circleIndeterminate: {
                    animation: "$circular-dash 1.4s ease-in-out infinite",
                    strokeDasharray: "80px, 200px",
                    strokeDashoffset: "0px"
                },
                "@keyframes circular-rotate": {
                    "0%": {
                        transformOrigin: "50% 50%"
                    },
                    "100%": {
                        transform: "rotate(360deg)"
                    }
                },
                "@keyframes circular-dash": {
                    "0%": {
                        strokeDasharray: "1px, 200px",
                        strokeDashoffset: "0px"
                    },
                    "50%": {
                        strokeDasharray: "100px, 200px",
                        strokeDashoffset: "-15px"
                    },
                    "100%": {
                        strokeDasharray: "100px, 200px",
                        strokeDashoffset: "-125px"
                    }
                },
                circleDisableShrink: {
                    animation: "none"
                }
            }
        }), {
            name: "MuiCircularProgress",
            flip: !1
        })(h)
})), t.register("7MQbG", (function(s, o) {
    e(s.exports, "useTest", (function() {
        return n
    }));
    var i = t("fywoC"),
        r = t("iMOcM");
    const n = e => {
        const [t, , s] = (0, r.useBoolean)(!0), [o, n] = i.useState(!1), a = () => {
            n(!0), s()
        }, l = () => {
            n(!1), s()
        };
        return i.useEffect((() => {
            e(a, l)
        }), []), {
            loading: t,
            passed: o
        }
    }
})), t.register("4lImC", (function(s, o) {
    e(s.exports, "default", (function() {
        return m
    }));
    var i = t("hxEiv"),
        r = t("lJnts");
    t("fywoC");
    var n = t("kyvf1"),
        a = t("iMOcM"),
        l = t("1djzF");
    const c = e => (0, i.jsx)("div", {
            style: {
                border: "2px solid",
                fontFamily: "monospace",
                padding: "3px 10px",
                background: "#f5f5f5",
                color: "#4527a0",
                display: "inline-block",
                borderRadius: 2,
                margin: "2px 4px"
            },
            children: e.children
        }),
        d = {
            name: "Firewall check on *.gimkitconnect.com",
            whatItMeans: (0, i.jsx)("span", {
                children: "You won't be able to connect to our game servers. This will prevent you from hosting or participating in games."
            }),
            howToFix: (0, i.jsxs)("span", {
                children: ["Unblock ", (0, i.jsx)(c, {
                    children: "https://*.gimkitconnect.com"
                }), ". Please note this is a wildcard. Gimkit needs access to every subdomain on", " ", (0, i.jsx)(c, {
                    children: "gimkitconnect.com"
                }), "."]
            }),
            test: (e, t) => {
                (0, a.request)({
                    url: "/api/matchmaker/find-server-to-host-game",
                    method: "post",
                    data: {
                        source: "original"
                    },
                    success: s => {
                        s && s.url ? (0, a.request)({
                            url: s.url + "/hello",
                            success: () => e(),
                            error: e => t()
                        }) : t()
                    },
                    error: e => t()
                })
            }
        },
        u = {
            name: "WebSocket connection to *.gimkitconnect.com",
            description: "This test takes 60 seconds to complete.",
            whatItMeans: (0, i.jsx)("span", {
                children: "You won't be able to connect to our game servers. This will prevent you from hosting & participating in all game modes."
            }),
            howToFix: (0, i.jsxs)("span", {
                children: ["Unblock both of the following domains:", (0, i.jsxs)("ul", {
                    children: [(0, i.jsx)("li", {
                        children: (0, i.jsx)(c, {
                            children: "https://*.gimkitconnect.com"
                        })
                    }), (0, i.jsx)("li", {
                        children: (0, i.jsx)(c, {
                            children: "wss://*.gimkitconnect.com"
                        })
                    })]
                }), "Note that these are both wildcards. Gimkit needs access to every subdomain for both HTTP Requests & WebSockets on", " ", (0, i.jsx)(c, {
                    children: "gimkitconnect.com"
                }), " to work properly.", (0, i.jsx)("br", {}), " ", (0, i.jsx)("br", {}), "If the firewall check test below passed, this is most likely an issue with your school's proxy network. Gimkit requires secure Websockets, which can cause issues with some proxy servers. You may need to allow", " ", (0, i.jsx)(c, {
                    children: "*.gimkitconnect.com"
                }), " in your proxy’s security settings. SSL is used to encrypt data between devices and servers. Networks that monitor SSL activity sometimes replace our certificates with those of the monitoring service. This can cause authentication errors.", " ", (0, i.jsx)(c, {
                    children: "*.gimkitconnect.com"
                }), "may need to bypass network monitoring."]
            }),
            test: (e, t) => {
                (0, a.request)({
                    url: "/api/matchmaker/find-server-to-host-game",
                    method: "post",
                    data: {
                        source: "map"
                    },
                    success: s => {
                        if (s && s.url) {
                            new(0, r.Client)(s.url.replace("http", "ws")).create("ConnectionTest").then((s => {
                                let o = !1;
                                setTimeout((() => {
                                    o || (o = !0, e())
                                }), 55e3), s.onLeave((() => {
                                    o || (o = !0, t())
                                })), s.onError((() => {
                                    o || (o = !0, t())
                                }))
                            })).catch((e => {
                                t()
                            }))
                        } else t()
                    },
                    error: e => t()
                })
            }
        },
        h = {
            name: "Firewall check on media.gimkit.com",
            whatItMeans: (0, i.jsx)("span", {
                children: "You won't be able to view uploaded images & audio."
            }),
            howToFix: (0, i.jsxs)("span", {
                children: ["Unblock ", (0, i.jsx)(c, {
                    children: "media.gimkit.com"
                }), "."]
            }),
            test: (e, t) => {
                (0, a.request)({
                    url: (0, l.getCloudinaryUrl)("https://res.cloudinary.com/gimkit-production/image/upload/v1574562821/btwjkzsjb3vvd5nroxi9.png"),
                    success: e,
                    error: t
                })
            }
        },
        f = {
            name: "Firewall check on unsplash.com",
            whatItMeans: (0, i.jsx)("span", {
                children: "You won't be able to view cover photos for kits."
            }),
            howToFix: (0, i.jsxs)("span", {
                children: ["Unblock ", (0, i.jsx)(c, {
                    children: "unsplash.com"
                }), "."]
            }),
            test: (e, t) => {
                (0, a.request)({
                    url: "https://images.unsplash.com/photo-1574539299747-c0dcef95d2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                    success: e,
                    error: t
                })
            }
        };
    var m = [u, d, h, {
        name: "WebGL support",
        whatItMeans: (0, i.jsx)("span", {
            children: "You will not be able to play/host 2D game modes"
        }),
        howToFix: (0, i.jsxs)("span", {
            children: ["2D game modes utilize 2D graphics. To make this work, we use use a technology called WebGL.", (0, i.jsx)("br", {}), " ", (0, i.jsx)("br", {}), "This test failing most likely means you have WebGL disabled for your browser. Follow the steps in this article to enable WebGL for your browser:", " ", (0, i.jsx)(n.default, {
                to: "https://help.gimkit.com/en/article/how-to-enable-webgl-1wk7fgn",
                external: !0,
                children: "https://help.gimkit.com/en/article/how-to-enable-webgl-1wk7fgn"
            })]
        }),
        test: (e, t) => {
            (() => {
                try {
                    const e = document.createElement("canvas");
                    return !(!window.WebGLRenderingContext || !e.getContext("webgl") && !e.getContext("experimental-webgl"))
                } catch (e) {
                    return !1
                }
            })() ? e(): t()
        }
    }, f]
})), t.register("kyvf1", (function(s, o) {
    e(s.exports, "default", (function() {
        return n
    }));
    var i = t("hxEiv"),
        r = t("beXRF");
    t("fywoC");
    var n = e => e.external || !e.to ? (0, i.jsx)("a", {
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
    }) : (0, i.jsx)(r.Link, {
        to: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    })
})), t.register("1djzF", (function(t, s) {
    e(t.exports, "getCloudinaryUrl", (function() {
        return o
    }));
    const o = e => {
            const t = i(e);
            return t ? e.includes("/video/upload") ? `https://${r}/video/upload/${t}` : `https://${r}/image/upload/f_auto,fl_lossy,q_auto/${t}` : e
        },
        i = e => {
            if (!l.some((t => e.includes(t)))) return null;
            if (e.includes(n) && !e.includes(`/${a}/`)) return null;
            const t = e.split("/");
            if (!t || !t.length || t.length < 2) return null;
            const s = t[t.length - 2],
                o = t[t.length - 1];
            return s && o && s.startsWith("v") ? `${s}/${o}` : null
        },
        r = "media.gimkit.com",
        n = "res.cloudinary.com",
        a = "gimkit-production",
        l = [r, n]
})), t.register("cO2Su", (function(s, o) {
    e(s.exports, "default", (function() {
        return l
    }));
    var i = t("hxEiv");
    t("fywoC");
    var r = t("2FDaO"),
        n = t("lKmIF");
    let a;
    var l = e => (0, i.jsx)(c, {
        onClick: e.onClick,
        className: e.className,
        style: e.style,
        children: e.children
    });
    const c = r.default.div(a || (a = (e => e)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${0};
  padding: 20px;
`), n.default.White)
}));