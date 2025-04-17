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
r.register("6m9Hm", (function(t, n) {
    var o;
    o = t.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return b
    }));
    var a = r("hxEiv"),
        i = r("gHmyG"),
        l = r("fywoC"),
        s = r("2FDaO"),
        c = r("lKmIF"),
        u = r("69SUA"),
        d = r("iMOcM"),
        f = r("3C5wC"),
        p = r("b1oE9"),
        g = r("3uz2P"),
        h = r("iROck"),
        m = r("cHCps");
    let x, v, y = e => e;
    var b = () => {
        const [e, t] = l.useState(), {
            id: r
        } = (0, g.useParams)();
        l.useEffect((() => {
            (0, d.request)({
                url: `/api/map-assignment/basic-info/${r}`,
                success: e => {
                    t(e)
                },
                error: () => (0, h.NavigateTo)(p.DASHBOARD)
            })
        }), []);
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(d.Title, {
                title: "Assignment"
            }), (0, a.jsxs)(C, {
                children: [(0, a.jsx)(m.default, {
                    includeSpacer: !0
                }), e ? (0, a.jsx)(f.default, {
                    id: r,
                    info: e
                }) : (0, a.jsx)(j, {
                    children: (0, a.jsx)(i.default, {
                        size: "large"
                    })
                })]
            })]
        })
    };
    const C = s.default.div.attrs({
            className: "flex flex-column"
        })(x || (x = y`
  flex: 1;
  background: ${0};
  color: ${0};
  font-family: ${0};
`), c.default.Snow, c.default.Black, u.Fonts.SFPro),
        j = s.default.div.attrs({
            className: "maxAll flex-center"
        })(v || (v = y``))
})), r.register("3C5wC", (function(n, o) {
    e(n.exports, "Tab", (function() {
        return h
    })), e(n.exports, "default", (function() {
        return x
    }));
    var a = r("hxEiv"),
        i = r("fywoC"),
        l = r("2FDaO"),
        s = r("9Cd5Q"),
        c = r("bg7mV"),
        u = r("3zcPg"),
        d = r("iMOcM"),
        f = r("bfV0l"),
        p = r("2nCEo");
    let g, h;
    var m;
    (m = h || (h = {})).share = "share", m.results = "results", m.info = "info";
    var x = e => {
        const {
            title: r,
            dueDate: n
        } = e.info, [o, l] = i.useState(h.share), g = t(p)().isAfter(t(p)(n));
        i.useEffect((() => {
            g && l(h.results)
        }), [g]);
        const m = t(p)((0, d.dateFromObjectId)(e.id)).add(546, "days"),
            x = !t(p)().isAfter(m) && Math.abs(t(p)().diff(m, "months")) < 3;
        return (0, a.jsxs)(a.Fragment, {
            children: [x ? (0, a.jsx)(f.default, {
                banner: !0,
                message: `Assignments are automatically deleted after 1.5 years. This assignment will be deleted on ${m.format("MMMM Do")}.`
            }) : null, (0, a.jsxs)(v, {
                children: [(0, a.jsx)(s.default, {
                    id: e.id,
                    title: r,
                    dueDate: n
                }), (0, a.jsx)(u.default, {
                    tab: o,
                    onTabChange: l,
                    info: e.info,
                    isPastDue: g
                }), (0, a.jsx)(c.default, {
                    id: e.id,
                    info: e.info,
                    tab: o
                })]
            }), (0, a.jsx)(d.Title, {
                title: `${r} | Assignment`
            })]
        })
    };
    const v = l.default.div.attrs({
        className: "maxWidth flex-column vc"
    })(g || (g = (e => e)`
  flex: 1;
  padding: 40px 20px 0px 20px;
`))
})), r.register("9Cd5Q", (function(n, o) {
    e(n.exports, "default", (function() {
        return w
    }));
    var a = r("hxEiv"),
        i = r("93yIm"),
        l = r("b9Zw0"),
        s = r("fBuQJ"),
        c = r("e4KJZ"),
        u = r("2nCEo"),
        d = r("fywoC"),
        f = r("2FDaO"),
        p = r("lKmIF"),
        g = r("69SUA"),
        h = r("iMOcM");
    let m, x, v, y, b, C, j = e => e;
    var w = e => {
        const [r, n, o] = (0, h.useBoolean)(!1), [f, p] = d.useState(e.title), [g, m] = d.useState(""), [x, v, y] = (0, h.useBoolean)(!1), b = () => {
            x || (v(), (0, h.request)({
                url: "/api/map-assignment/change-title",
                data: {
                    id: e.id,
                    title: g
                },
                success: e => {
                    p(e.title), m(""), o()
                },
                both: () => {
                    y()
                }
            }))
        };
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsxs)(k, {
                children: [(0, a.jsxs)(O, {
                    children: ["Assignment - Due ", t(u)(e.dueDate).format("MMMM Do")]
                }), (0, a.jsx)("div", {
                    children: (0, a.jsx)(c.default, {
                        title: "Change Name",
                        placement: "left",
                        children: (0, a.jsx)(S, {
                            onClick: n,
                            children: f
                        })
                    })
                })]
            }), (0, a.jsx)(s.default, {
                open: r,
                onCancel: o,
                closable: !0,
                footer: (0, a.jsx)(i.default, {
                    type: "primary",
                    loading: x,
                    onClick: b,
                    children: "Save"
                }),
                width: 600,
                children: (0, a.jsxs)(N, {
                    children: [(0, a.jsx)(E, {
                        children: "New Name"
                    }), (0, a.jsx)(M, {
                        children: "Leave empty to use the name of the game mode for this assignment!"
                    }), (0, a.jsx)(l.default, {
                        size: "large",
                        style: {
                            width: "100%"
                        },
                        maxLength: 32,
                        placeholder: e.title || "Assignment...",
                        value: g,
                        onChange: e => m(e.target.value),
                        onPressEnter: b
                    })]
                })
            })]
        })
    };
    const k = f.default.div.attrs({
            className: "maxWidth flex-center flex-column"
        })(m || (m = j``)),
        O = f.default.div(x || (x = j`
  font-size: 18px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.85);
`)),
        S = f.default.div(v || (v = j`
  font-size: 56px;
  font-weight: ${0};
  text-align: center;
  cursor: pointer;
`), g.FontWeights.UltraBold),
        N = f.default.div(y || (y = j`
  color: ${0};
  font-family: ${0};
`), p.default.Black, g.Fonts.SFPro),
        E = f.default.div(b || (b = j`
  font-size: 22px;
  font-weight: ${0};
`), g.FontWeights.Bold),
        M = f.default.div(C || (C = j`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 10px;
`))
})), r.register("bg7mV", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("3C5wC"),
        i = r("2FDaO"),
        l = r("cO2Su"),
        s = r("lKmIF"),
        c = r("69SUA"),
        u = r("2rIGF"),
        d = r("3rWfW"),
        f = r("cJAvK");
    let p;
    var g = e => {
        const {
            tab: t,
            id: r,
            info: n
        } = e;
        return (0, o.jsx)(h, {
            children: t === a.Tab.share ? (0, o.jsx)(u.default, {
                id: r
            }) : t === a.Tab.results ? (0, o.jsx)(d.default, {
                id: r,
                groups: n.groups
            }) : t === a.Tab.info ? (0, o.jsx)(f.default, {
                info: n
            }) : null
        })
    };
    const h = (0, i.default)(l.default).attrs({
        className: "scroll-x"
    })(p || (p = (e => e)`
  width: 1000px;
  max-width: 90%;
  flex: 1;
  padding: 0px;
  border-radius: 8px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  color: ${0};
  font-family: ${0};
`), s.default.Black, c.Fonts.SFPro)
})), r.register("cO2Su", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        i = r("lKmIF");
    let l;
    var s = e => (0, o.jsx)(c, {
        onClick: e.onClick,
        className: e.className,
        style: e.style,
        children: e.children
    });
    const c = a.default.div(l || (l = (e => e)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${0};
  padding: 20px;
`), i.default.White)
})), r.register("2rIGF", (function(n, o) {
    e(n.exports, "default", (function() {
        return x
    }));
    var a = r("hxEiv"),
        i = r("93yIm"),
        l = r("b9Zw0"),
        s = r("cy4A6"),
        c = r("dhxiD");
    r("fywoC");
    var u = r("2FDaO"),
        d = r("lKmIF"),
        f = r("iMOcM");
    let p, g, h, m = e => e;
    var x = e => {
        const r = (0, f.getDomain)() + "/join/" + e.id;
        return (0, a.jsxs)(v, {
            children: [(0, a.jsx)(y, {
                children: "Share this link with your students to have them complete this assignment!"
            }), (0, a.jsxs)(b, {
                children: [(0, a.jsx)(l.default, {
                    value: r,
                    style: {
                        color: d.default.Black
                    },
                    size: "large"
                }), (0, a.jsx)(i.default, {
                    size: "large",
                    type: "primary",
                    style: {
                        marginLeft: 10
                    },
                    onClick: () => {
                        t(c)(r), s.default.success("Link copied to clipboard!")
                    },
                    children: "Copy Link"
                })]
            })]
        })
    };
    const v = u.default.div(p || (p = m`
  padding: 35px;
`)),
        y = u.default.div(g || (g = m`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.9);
`)),
        b = u.default.div.attrs({
            className: "flex vc "
        })(h || (h = m`
  padding: 20px;
  margin-top: 20px;
  border: 1px solid ${0};
  border-radius: 4px;
  margin-top: 10px;
`), d.default.BorderGray)
})), r.register("dhxiD", (function(e, t) {
    var n = r("1fK2g"),
        o = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var r, a, i, l, s, c, u = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (i = n(), l = document.createRange(), s = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var a = o[t.format] || o.default;
                            window.clipboardData.setData(a, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(c), l.selectNodeContents(c), s.addRange(l), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            u = !0
        } catch (n) {
            r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
            } catch (n) {
                r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), a = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(a, e)
            }
        } finally {
            s && ("function" == typeof s.removeRange ? s.removeRange(l) : s.removeAllRanges()), c && document.body.removeChild(c), i()
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
})), r.register("3rWfW", (function(t, n) {
    e(t.exports, "Status", (function() {
        return p
    })), e(t.exports, "Sort", (function() {
        return m
    })), e(t.exports, "default", (function() {
        return v
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("2FDaO"),
        l = r("dOEnL"),
        s = r("b6C6Z"),
        c = r("eeHSy"),
        u = r("7CG9X");
    let d, f, p, g = e => e;
    var h;
    let m;
    var x;
    (h = p || (p = {})).completed = "completed", h.inProgress = "in-progress", h.notStarted = "not-started", (x = m || (m = {})).firstName = "firstName", x.lastName = "lastName";
    var v = e => {
        const [t, r] = a.useState(p.completed), [n, i] = a.useState(""), [d, f] = a.useState(m.firstName);
        return (0, o.jsxs)(y, {
            children: [(0, o.jsx)(s.default, {
                group: n,
                onGroupChange: i,
                groups: e.groups,
                status: t,
                onStatusChange: r,
                sort: d,
                onSortChange: f
            }), (0, o.jsx)(b, {
                children: t === p.completed ? (0, o.jsx)(l.default, {
                    id: e.id,
                    group: n,
                    sort: d
                }) : t === p.inProgress ? (0, o.jsx)(c.default, {
                    id: e.id,
                    group: n,
                    sort: d
                }) : t === p.notStarted ? (0, o.jsx)(u.default, {
                    id: e.id,
                    group: n,
                    sort: d
                }) : null
            })]
        })
    };
    const y = i.default.div.attrs({
            className: "flex"
        })(d || (d = g`
  padding: 0px 30px;
`)),
        b = i.default.div.attrs({
            className: "flex"
        })(f || (f = g`
  flex: 1;
  padding: 30px;
  padding-right: 0px;
`))
})), r.register("dOEnL", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var o = r("hxEiv"),
        a = r("bfV0l"),
        i = r("fC6cp"),
        l = r("fywoC"),
        s = r("69SUA"),
        c = r("iMOcM"),
        u = r("lSghq"),
        d = r("ba7GA"),
        f = r("bBShD"),
        p = r("hM6vB"),
        g = r("3rWfW"),
        h = r("d1m73");
    var m = e => {
        const [t, r, n] = (0, c.useBoolean)(!0), [m, x] = l.useState([]);
        if (l.useEffect((() => {
                r(), (0, c.request)({
                    url: "/api/map-assignment/completions",
                    data: {
                        id: e.id,
                        group: e.group
                    },
                    success: e => x(e),
                    both: n,
                    cacheKey: "ASSIGNMENT_COMPLETED"
                })
            }), [e.group]), t) return (0, o.jsx)(p.default, {});
        if (!m.length) return (0, o.jsx)(f.default, {
            children: e.group ? "Nobody in this class has completed this assignment yet" : "Nobody has completed this assignment yet"
        });
        const v = e.sort === g.Sort.firstName ? (0, u.default)(m, (e => e.name)) : (0, d.default)(m, (e => e.name));
        return (0, o.jsxs)("div", {
            className: "maxWidth",
            children: [v.length >= 1e3 ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(a.default, {
                    message: (0, o.jsx)("span", {
                        style: {
                            fontWeight: s.FontWeights.Bold
                        },
                        children: "Only 1,000 Completions Shown"
                    }),
                    description: "This assignment has been completed 1,000+ times. Only the first 1,000 completions are shown, meaning data for some students may be missing.",
                    showIcon: !0,
                    type: "warning"
                }), (0, o.jsx)(i.default, {})]
            }) : null, v.map(((e, t) => (0, o.jsxs)(l.Fragment, {
                children: [(0, o.jsx)(h.default, {
                    data: e
                }), t !== m.length - 1 && (0, o.jsx)("div", {
                    style: {
                        height: 10
                    }
                })]
            }, e._id + "-player")))]
        })
    }
})), r.register("lSghq", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = (e, t) => e.sort(((e, r) => {
        const n = t(e),
            o = t(r);
        return n.localeCompare(o)
    }))
})), r.register("ba7GA", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    const n = e => e.split(" ").pop() || e;
    var o = (e, t) => e.sort(((e, r) => {
        const o = n(t(e)),
            a = n(t(r));
        return o.localeCompare(a)
    }))
})), r.register("bBShD", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        i = r("69SUA");
    let l, s, c, u, d = e => e;
    var f = e => (0, o.jsxs)(p, {
        children: [(0, o.jsx)(g, {}), (0, o.jsx)(h, {
            children: "Nothing yet..."
        }), (0, o.jsx)(m, {
            children: e.children
        })]
    });
    const p = a.default.div.attrs({
            className: "flex-column flex-center maxWidth"
        })(l || (l = d`
  flex: 1;
  min-height: 400px;
  text-align: center;
`)),
        g = a.default.img.attrs({
            src: "/client/img/assignment/box.svg"
        })(s || (s = d`
  height: 80px;
`)),
        h = a.default.div(c || (c = d`
  font-weight: ${0};
  font-size: 28px;
  margin-top: 15px;
`), i.FontWeights.UltraBold),
        m = a.default.div(u || (u = d`
  font-size: 18px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.9);
`))
})), r.register("hM6vB", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv"),
        a = r("4Gnmi");
    r("fywoC");
    var i = r("2FDaO");
    let l;
    var s = () => (0, o.jsx)(c, {
        children: (0, o.jsx)(a.default, {
            active: !0,
            title: !1,
            paragraph: {
                rows: 14
            }
        })
    });
    const c = i.default.div.attrs({
        className: "maxWidth"
    })(l || (l = (e => e)`
  .ant-skeleton-paragraph li {
    width: 100% !important;
  }
`))
})), r.register("d1m73", (function(t, n) {
    e(t.exports, "Name", (function() {
        return k
    })), e(t.exports, "Description", (function() {
        return O
    })), e(t.exports, "default", (function() {
        return b
    }));
    var o = r("hxEiv"),
        a = r("7ECC6"),
        i = r("fywoC"),
        l = r("2FDaO"),
        s = r("lKmIF"),
        c = r("69SUA"),
        u = r("TINDh"),
        d = r("AaYhe"),
        f = r("idp1R");
    let p, g, h, m, x, v, y = e => e;
    var b = e => {
        const {
            data: {
                name: t,
                completions: r
            }
        } = e, n = r.length > 1;
        return (0, o.jsx)(a.default, {
            children: (0, o.jsxs)(C, {
                children: [(0, o.jsxs)(j, {
                    children: [(0, o.jsxs)(w, {
                        children: [(0, o.jsx)(k, {
                            children: t
                        }), (0, o.jsx)(O, {
                            children: n ? `Completed ${r.length} times` : `Completed ${(0,f.default)(r[0].completedAt)}`
                        })]
                    }), (0, o.jsx)(S, {
                        children: n ? null : (0, o.jsx)(d.default, {
                            links: r[0].links || [],
                            playerName: t
                        })
                    })]
                }), n ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("div", {
                        style: {
                            height: 17
                        }
                    }), r.map(((n, a) => (0, o.jsxs)(i.Fragment, {
                        children: [(0, o.jsx)(u.default, {
                            completion: n,
                            playerName: t
                        }), a !== r.length - 1 && (0, o.jsx)("div", {
                            style: {
                                height: 10
                            }
                        })]
                    }, `${e.data._id}-completion-${a}`)))]
                }) : null]
            })
        })
    };
    const C = l.default.div(p || (p = y`
  color: ${0};
`), s.default.Black),
        j = l.default.div.attrs({
            className: "flex between vc"
        })(g || (g = y``)),
        w = l.default.div(h || (h = y``)),
        k = l.default.div(m || (m = y`
  font-size: 18px;
  font-weight: ${0};
  color: rgba(0, 0, 0, 0.9);
`), c.FontWeights.Bold),
        O = l.default.div(x || (x = y`
  font-size: 15px;
  margin-top: 2px;
`)),
        S = l.default.div(v || (v = y``))
})), r.register("TINDh", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var o = r("hxEiv"),
        a = r("7ECC6");
    r("fywoC");
    var i = r("idp1R"),
        l = r("2FDaO"),
        s = r("lKmIF"),
        c = r("AaYhe");
    let u, d, f, p = e => e;
    var g = e => {
        const {
            playerName: t,
            completion: r
        } = e;
        return (0, o.jsx)(a.default, {
            bodyStyle: {
                padding: "15px 20px",
                background: s.default.Snow
            },
            style: {
                overflow: "hidden"
            },
            children: (0, o.jsxs)(h, {
                children: [(0, o.jsxs)(m, {
                    children: ["Completed ", (0, i.default)(r.completedAt)]
                }), (0, o.jsx)(x, {
                    children: (0, o.jsx)(c.default, {
                        links: r.links || [],
                        playerName: t
                    })
                })]
            })
        })
    };
    const h = l.default.div.attrs({
            className: "flex between vc"
        })(u || (u = p`
  color: rgba(0,0,0,0.9);
  font-size: 14px;
  line-height: 1;
`)),
        m = l.default.div(d || (d = p``)),
        x = l.default.div(f || (f = p``))
})), r.register("idp1R", (function(n, o) {
    e(n.exports, "default", (function() {
        return i
    }));
    var a = r("2nCEo");
    var i = e => `${t(a)(e).format("MMMM Do")} at ${t(a)(e).format("h:mma")}`
})), r.register("AaYhe", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = r("hxEiv"),
        a = r("90RCV"),
        i = r("93yIm"),
        l = r("gnAdP"),
        s = r("13AMv"),
        c = r("e4KJZ"),
        u = r("fywoC"),
        d = r("5K9iV"),
        f = r("5LAkU");
    var p = e => {
        const [t, r] = u.useState(), {
            links: n
        } = e, p = u.useMemo((() => e.links.map((e => e.type === d.MapAssignmentResultLinkType.gameReport ? {
            link: e,
            handler: f.GameReportCompletionLink
        } : null)).filter((e => !!e))), [n.length]), g = u.useMemo((() => {
            if (!t) return null;
            const n = p.find((e => e.link._id === t));
            return n && n.handler.hiddenRender ? n.handler.hiddenRender({
                link: n.link,
                playerName: e.playerName,
                close: () => r("")
            }) : null
        }), [t, p.length]);
        if (!p.length) return null;
        if (1 === p.length) {
            var h;
            const e = null === (h = p[0]) || void 0 === h ? void 0 : h.handler;
            return (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(c.default, {
                    title: e.label,
                    children: (0, o.jsx)(i.default, {
                        shape: "circle",
                        icon: (0, o.jsx)(e.icon, {}),
                        onClick: () => r(p[0].link._id)
                    })
                }), g]
            })
        }
        const m = (0, o.jsx)(s.default, {
            children: p.map((e => (0, o.jsx)(s.default.Item, {
                onClick: () => r(e.link._id),
                icon: (0, o.jsx)(e.handler.icon, {}),
                children: e.handler.label
            }, e.link._id)))
        });
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(l.default, {
                overlay: m,
                children: (0, o.jsx)(i.default, {
                    shape: "circle",
                    icon: (0, o.jsx)(a.default, {})
                })
            }), g]
        })
    }
})), r.register("5K9iV", (function(t, r) {
    let n;
    e(t.exports, "MapAssignmentResultLinkType", (function() {
        return n
    })), (n || (n = {})).gameReport = "gameReport"
})), r.register("5LAkU", (function(t, n) {
    e(t.exports, "GameReportCompletionLink", (function() {
        return d
    })), e(t.exports, "GameReportCompletionModal", (function() {
        return f
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("3UhQK"),
        l = r("fBuQJ"),
        s = r("4Gnmi"),
        c = r("iMOcM"),
        u = r("9WFo8");
    const d = {
            icon: i.default,
            label: "View Report",
            hiddenRender: e => (0, o.jsx)(f, {
                playerName: e.playerName,
                gameReportId: e.link.resultLinkId,
                participantId: e.link.completionLinkId,
                close: e.close
            })
        },
        f = e => {
            const [t, , r] = (0, c.useBoolean)(!0), [n, i] = a.useState();
            return a.useEffect((() => {
                (0, c.request)({
                    url: "/api/game-report/fetch-participant-data",
                    data: {
                        gameReportId: e.gameReportId,
                        participantId: e.participantId
                    },
                    success: e => i(e),
                    error: e => {
                        r()
                    }
                })
            }), [e.participantId]), (0, o.jsx)(l.default, {
                open: t,
                onCancel: r,
                afterClose: e.close,
                style: {
                    top: 20,
                    maxWidth: 1200
                },
                bodyStyle: {
                    minHeight: "max-content"
                },
                closable: !0,
                width: "85%",
                footer: null,
                children: n ? (0, o.jsx)(u.default, {
                    preventScroll: !0,
                    player: {
                        name: e.playerName,
                        correctQuestionIds: n.correctQuestionIds,
                        incorrectQuestionIds: n.incorrectQuestionIds
                    },
                    questions: n.questions
                }) : (0, o.jsx)("div", {
                    className: "maxWidth flex-center",
                    children: (0, o.jsx)(s.default, {
                        paragraph: {
                            rows: 16
                        }
                    })
                })
            })
        }
})), r.register("3UhQK", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("5yo7K"),
        l = r("dwKuN"),
        s = function(e, t) {
            return a.createElement(l.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    s.displayName = "BarChartOutlined";
    var c = a.forwardRef(s)
})), r.register("5yo7K", (function(t, r) {
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
                    d: "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"
                }
            }]
        },
        name: "bar-chart",
        theme: "outlined"
    }
})), r.register("b6C6Z", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var o = r("hxEiv"),
        a = r("f1yKZ"),
        i = r("i5Qjx");
    r("fywoC");
    var l = r("2FDaO"),
        s = r("69SUA"),
        c = r("3rWfW");
    let u, d, f, p = e => e;
    const g = {
            marginLeft: 15
        },
        h = {
            fontSize: 16,
            color: "rgba(0,0,0,0.9)"
        },
        m = "NO_GROUP";
    var x = e => (0, o.jsxs)(v, {
        children: [e.groups && e.groups.length ? (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(y, {
                children: "Class"
            }), (0, o.jsx)(a.default.Group, {
                value: e.group || m,
                onChange: t => {
                    t.target.value === m ? e.onGroupChange("") : e.onGroupChange(t.target.value)
                },
                className: "flex-column",
                style: g,
                children: (0, o.jsxs)(i.default, {
                    direction: "vertical",
                    children: [(0, o.jsx)(a.default, {
                        value: m,
                        style: h,
                        children: "Any Class"
                    }), e.groups.map((e => (0, o.jsx)(a.default, {
                        value: e._id,
                        style: h,
                        children: e.name
                    }, e._id + "-class-option")))]
                })
            }), (0, o.jsx)("div", {
                style: {
                    height: 40
                }
            })]
        }) : null, e.groups && e.groups.length ? (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(y, {
                children: "Status"
            }), (0, o.jsx)(a.default.Group, {
                value: e.status,
                onChange: t => {
                    e.onStatusChange(t.target.value)
                },
                style: g,
                children: (0, o.jsxs)(i.default, {
                    direction: "vertical",
                    children: [(0, o.jsx)(a.default, {
                        value: c.Status.completed,
                        style: h,
                        children: "Completed"
                    }), (0, o.jsx)(a.default, {
                        value: c.Status.inProgress,
                        style: h,
                        children: "In Progress"
                    }), (0, o.jsx)(a.default, {
                        value: c.Status.notStarted,
                        style: h,
                        children: "Has Not Started"
                    })]
                })
            }), (0, o.jsx)("div", {
                style: {
                    height: 40
                }
            })]
        }) : null, (0, o.jsx)(y, {
            children: "Sort"
        }), (0, o.jsx)(a.default.Group, {
            value: e.sort,
            onChange: t => {
                e.onSortChange(t.target.value)
            },
            style: g,
            children: (0, o.jsxs)(i.default, {
                direction: "vertical",
                children: [(0, o.jsx)(a.default, {
                    value: c.Sort.firstName,
                    style: h,
                    children: "First Name"
                }), (0, o.jsx)(a.default, {
                    value: c.Sort.lastName,
                    style: h,
                    children: "Last Initial"
                })]
            })
        })]
    });
    const v = l.default.div(u || (u = p`
  width: 220px;
  flex-shrink: 0;
  min-height: calc(100vh - 305px); // height of the top section
  border-right: 1px solid rgb(240, 240, 240);
  padding: 30px 0px 40px 0px;
`)),
        y = ({
            children: e
        }) => (0, o.jsx)(b, {
            children: (0, o.jsx)(C, {
                children: e
            })
        }),
        b = l.default.div.attrs({
            className: "flex vc"
        })(d || (d = p`
  margin-bottom: 15px;
`)),
        C = l.default.div(f || (f = p`
  font-size: 18px;
  font-weight: ${0};
  line-height: 1;
`), s.FontWeights.Bold)
})), r.register("i5Qjx", (function(n, o) {
    e(n.exports, "SpaceContext", (function() {
        return g
    }), (function(e) {
        return g = e
    })), e(n.exports, "default", (function() {
        return x
    }), (function(e) {
        return x = e
    }));
    var a = r("fe1on"),
        i = r("jyxW7"),
        l = r("fywoC"),
        s = r("4gMdJ"),
        c = r("1eqVQ"),
        u = r("7yXSw"),
        d = r("c9Vcn"),
        f = r("5gjI2"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const g = l.createContext({
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
            getPrefixCls: r,
            space: n,
            direction: o
        } = l.useContext(s.ConfigContext), {
            size: u = (null == n ? void 0 : n.size) || "small",
            align: m,
            className: x,
            rootClassName: v,
            children: y,
            direction: b = "horizontal",
            prefixCls: C,
            split: j,
            style: w,
            wrap: k = !1
        } = e, O = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), S = (0, c.default)(), [N, E] = l.useMemo((() => (Array.isArray(u) ? u : [u, u]).map((e => function(e) {
            return "string" == typeof e ? h[e] : e || 0
        }(e)))), [u]), M = (0, i.default)(y, {
            keepEmpty: !0
        }), z = void 0 === m && "horizontal" === b ? "center" : m, P = r("space", C), [F, D] = (0, f.default)(P), $ = t(a)(P, D, `${P}-${b}`, {
            [`${P}-rtl`]: "rtl" === o,
            [`${P}-align-${z}`]: z
        }, x, v), I = `${P}-item`, K = "rtl" === o ? "marginLeft" : "marginRight";
        let B = 0;
        const R = M.map(((e, t) => {
                null != e && (B = t);
                const r = e && e.key || `${I}-${t}`;
                return l.createElement(d.default, {
                    className: I,
                    key: r,
                    direction: b,
                    index: t,
                    marginDirection: K,
                    split: j,
                    wrap: k
                }, e)
            })),
            A = l.useMemo((() => ({
                horizontalSize: N,
                verticalSize: E,
                latestIndex: B,
                supportFlexGap: S
            })), [N, E, B, S]);
        if (0 === M.length) return null;
        const _ = {};
        return k && (_.flexWrap = "wrap", S || (_.marginBottom = -E)), S && (_.columnGap = N, _.rowGap = E), F(l.createElement("div", Object.assign({
            className: $,
            style: Object.assign(Object.assign({}, _), w)
        }, O), l.createElement(g.Provider, {
            value: A
        }, R)))
    };
    m.Compact = u.default;
    var x = m
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
            children: l,
            split: s,
            wrap: c
        } = e;
        const {
            horizontalSize: u,
            verticalSize: d,
            latestIndex: f,
            supportFlexGap: p
        } = o.useContext(a.SpaceContext);
        let g = {};
        return p || ("vertical" === r ? n < f && (g = {
            marginBottom: u / (s ? 2 : 1)
        }) : g = Object.assign(Object.assign({}, n < f && {
            [i]: u / (s ? 2 : 1)
        }), c && {
            paddingBottom: d
        })), null == l ? null : o.createElement(o.Fragment, null, o.createElement("div", {
            className: t,
            style: g
        }, l), n < f && s && o.createElement("span", {
            className: `${t}-split`,
            style: g
        }, s))
    }
})), r.register("eeHSy", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("iMOcM"),
        l = r("gdw6O"),
        s = r("hM6vB"),
        c = r("3rWfW"),
        u = r("lSghq"),
        d = r("ba7GA"),
        f = r("bBShD");
    var p = e => {
        const [t, r] = a.useState([]), [n, p, g] = (0, i.useBoolean)(!0);
        if (a.useEffect((() => {
                p(), (0, i.request)({
                    url: "/api/map-assignment/in-progress",
                    data: {
                        id: e.id,
                        group: e.group
                    },
                    success: e => r(e),
                    both: g,
                    cacheKey: "ASSIGNMENT_IN_PROGRESS"
                })
            }), [e.group]), n) return (0, o.jsx)(s.default, {});
        if (!t.length) return (0, o.jsx)(f.default, {
            children: e.group ? "No students in this class are currently working on this assignment" : "Nobody is currently working on this assignment"
        });
        const h = e.sort === c.Sort.firstName ? (0, u.default)(t, (e => e.name)) : (0, d.default)(t, (e => e.name));
        return (0, o.jsx)("div", {
            className: "maxWidth",
            children: h.map(((e, r) => (0, o.jsxs)(a.Fragment, {
                children: [(0, o.jsx)(l.default, {
                    name: e.name,
                    percentageComplete: e.percentageComplete
                }), r !== t.length - 1 && (0, o.jsx)("div", {
                    style: {
                        height: 10
                    }
                })]
            }, e._id + "-in-progress")))
        })
    }
})), r.register("gdw6O", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("hxEiv"),
        a = r("7ECC6"),
        i = r("cmvpZ");
    r("fywoC");
    var l = r("lKmIF"),
        s = r("d1m73");
    var c = e => (0, o.jsxs)(a.default, {
        style: {
            color: l.default.Black
        },
        children: [(0, o.jsx)(s.Name, {
            children: e.name
        }), (0, i.isNil)(e.percentageComplete) ? null : (0, o.jsxs)(s.Description, {
            children: [e.percentageComplete, "% complete"]
        })]
    })
})), r.register("7CG9X", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("iMOcM"),
        l = r("gdw6O"),
        s = r("hM6vB"),
        c = r("3rWfW"),
        u = r("lSghq"),
        d = r("ba7GA"),
        f = r("bBShD");
    var p = e => {
        const [t, r] = a.useState([]), [n, p, g] = (0, i.useBoolean)(!0);
        if (a.useEffect((() => {
                p(), (0, i.request)({
                    url: "/api/map-assignment/not-started",
                    data: {
                        id: e.id,
                        group: e.group
                    },
                    success: e => r(e),
                    both: g,
                    cacheKey: "ASSIGNMENT_NOT_STARTED"
                })
            }), [e.group]), n) return (0, o.jsx)(s.default, {});
        if (!t.length) return (0, o.jsx)(f.default, {
            children: "Looks like everybody has either completed this assignment or is working on it!"
        });
        const h = e.sort === c.Sort.firstName ? (0, u.default)(t, (e => e.name)) : (0, d.default)(t, (e => e.name));
        return (0, o.jsx)("div", {
            className: "maxWidth",
            children: h.map(((e, r) => (0, o.jsxs)(a.Fragment, {
                children: [(0, o.jsx)(l.default, {
                    name: e.name
                }), r !== t.length - 1 && (0, o.jsx)("div", {
                    style: {
                        height: 10
                    }
                })]
            }, e._id + "-not-started")))
        })
    }
})), r.register("cJAvK", (function(t, n) {
    e(t.exports, "default", (function() {
        return h
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("duwmE"),
        l = r("ijMF4"),
        s = r("2FDaO"),
        c = r("fC6cp"),
        u = r("bqUJp"),
        d = r("3aHwG");
    let f, p, g = e => e;
    var h = e => {
        const {
            hooks: t
        } = e.info, [r, n] = a.useState([]);
        return (0, o.jsx)(m, {
            children: (0, o.jsx)(i.default, {
                hooks: t.template,
                defaultState: t.values,
                readOnly: !0,
                modeType: d.MapModeType.assignment,
                location: l.HookFormLocation.experiencePicker,
                onConnectedResourcesChange: n,
                header: e => e || r.length ? e ? (0, o.jsx)(x, {
                    children: "These are the options you set when creating this assignment. They cannot be changed."
                }) : null : (0, o.jsx)(x, {
                    children: "There is currently no info to show for this assignment."
                }),
                footer: e => r.length ? (0, o.jsxs)(o.Fragment, {
                    children: [e > 0 ? (0, o.jsx)(c.default, {
                        style: {
                            marginTop: 30,
                            marginBottom: 30
                        }
                    }) : null, (0, o.jsx)(x, {
                        children: "Here are the resources connected to this assignment. They cannot be changed."
                    }), r.map(((e, t) => (0, o.jsxs)(a.Fragment, {
                        children: [(0, o.jsx)(u.default, {
                            connectedResource: e
                        }), t + 1 !== r.length ? (0, o.jsx)("div", {
                            style: {
                                height: 10
                            }
                        }) : null]
                    }, `connected-resource-${e.value}`)))]
                }) : null
            })
        })
    };
    const m = s.default.div(f || (f = g`
  padding: 35px;
`)),
        x = s.default.div(p || (p = g`
  font-size: 16px;
  margin-bottom: 16px;
`))
})), r.register("bqUJp", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("ijMF4"),
        i = r("lLk3x");
    var l = e => {
        const {
            connectedResource: {
                value: t,
                type: r
            }
        } = e;
        return r !== a.IHookConnectedResourceType.kit ? null : (0, o.jsx)(i.default, {
            id: t
        })
    }
})), r.register("lLk3x", (function(t, n) {
    e(t.exports, "default", (function() {
        return b
    }));
    var o = r("hxEiv"),
        a = r("7ECC6"),
        i = r("gHmyG"),
        l = r("fywoC"),
        s = r("2FDaO"),
        c = r("lKmIF"),
        u = r("69SUA"),
        d = r("kyvf1"),
        f = r("iMOcM"),
        p = r("fK8ya");
    let g, h, m, x, v, y = e => e;
    var b = e => {
        const [t, r, n] = (0, f.useBoolean)(!0), [s, c] = l.useState();
        return l.useEffect((() => {
            (0, f.request)({
                url: `/api/games/basic-info/${e.id}`,
                success: e => c(e),
                cacheKey: "SIMPLE_KIT",
                both: n
            })
        }), [e.id]), t ? (0, o.jsx)(a.default, {
            style: {
                height: 110
            },
            bodyStyle: {
                height: "100%"
            },
            children: (0, o.jsx)("div", {
                className: "maxAll flex-center",
                children: (0, o.jsx)(i.default, {})
            })
        }) : (0, o.jsx)(a.default, {
            hoverable: !0,
            children: (0, o.jsx)(d.default, {
                to: s ? `/view/${s._id}` : void 0,
                children: (0, o.jsxs)(C, {
                    children: [(null == s ? void 0 : s.gif) ? (0, o.jsx)(p.default, {
                        size: 60,
                        blockModalOpen: !0,
                        image: s.gif
                    }) : (0, o.jsx)(j, {}), (0, o.jsxs)(w, {
                        children: [(0, o.jsx)(k, {
                            children: (null == s ? void 0 : s.title) || "Deleted Kit"
                        }), (0, o.jsx)(O, {
                            children: "Kit"
                        })]
                    })]
                })
            })
        })
    };
    const C = s.default.div.attrs({
            className: "flex vc"
        })(g || (g = y`
  color: ${0};
`), c.default.Black),
        j = s.default.div(h || (h = y`
  height: 60px;
  width: 60px;
  border-radius: 5px;
  background: ${0};
`), c.default.BackgroundPurple),
        w = s.default.div(m || (m = y`
  margin-left: 20px;
`)),
        k = s.default.div(x || (x = y`
  font-size: 16px;
  font-weight: ${0};
`), u.FontWeights.Bold),
        O = s.default.div(v || (v = y`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 3px;
  font-style: italic;
`))
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
})), r.register("fK8ya", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("2FDaO"),
        l = r("fBuQJ"),
        s = r("lKmIF"),
        c = r("1djzF");
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
`), (e => e.size), (e => e.size), (e => e.customRightMargin ? e.customRightMargin : 0), (e => e.showBorder && `border: solid ${s.default.Black} 1px;`));
    var f = e => {
        const [t, r] = a.useState(!1);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(d, {
                ...e,
                onClick: t => {
                    t.stopPropagation(), e.onClick && e.onClick(), e.blockModalOpen || r(!0)
                }
            }), (0, o.jsx)(l.default, {
                open: t,
                onCancel: e => {
                    e.stopPropagation(), r(!1)
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
})), r.register("1djzF", (function(t, r) {
    e(t.exports, "getCloudinaryUrl", (function() {
        return n
    }));
    const n = e => {
            const t = o(e);
            return t ? e.includes("/video/upload") ? `https://${a}/video/upload/${t}` : `https://${a}/image/upload/f_auto,fl_lossy,q_auto/${t}` : e
        },
        o = e => {
            if (!s.some((t => e.includes(t)))) return null;
            if (e.includes(i) && !e.includes(`/${l}/`)) return null;
            const t = e.split("/");
            if (!t || !t.length || t.length < 2) return null;
            const r = t[t.length - 2],
                n = t[t.length - 1];
            return r && n && r.startsWith("v") ? `${r}/${n}` : null
        },
        a = "media.gimkit.com",
        i = "res.cloudinary.com",
        l = "gimkit-production",
        s = [a, i]
})), r.register("3aHwG", (function(t, r) {
    let n;
    var o;
    e(t.exports, "MapModeType", (function() {
        return n
    })), (o = n || (n = {})).liveGame = "liveGame", o.assignment = "assignment"
})), r.register("3zcPg", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        i = r("lKmIF"),
        l = r("69SUA"),
        s = r("kyvf1"),
        c = r("3C5wC"),
        u = r("5K9iV");
    let d, f, p = e => e;
    var g = e => {
        const t = t => t === e.tab,
            r = t => () => e.onTabChange(t);
        return (0, o.jsxs)(m, {
            children: [e.isPastDue ? null : (0, o.jsx)(h, {
                selected: t(c.Tab.share),
                onClick: r(c.Tab.share),
                title: "Share",
                icon: "fa-share"
            }), (0, o.jsx)(h, {
                selected: t(c.Tab.results),
                onClick: r(c.Tab.results),
                title: "Results",
                icon: "fa-poll"
            }), e.info.hooks.template.hooks.length ? (0, o.jsx)(h, {
                selected: t(c.Tab.info),
                onClick: r(c.Tab.info),
                title: "Info",
                icon: "fa-info-circle"
            }) : null, e.info.links.length ? (0, o.jsx)(o.Fragment, {
                children: e.info.links.map((e => e.linkType === u.MapAssignmentResultLinkType.gameReport ? (0, o.jsx)(h, {
                    icon: "fa-external-link",
                    title: "Open Report",
                    to: `/report/${e.linkId}`
                }, `link-${e._id}`) : null))
            }) : null]
        })
    };
    const h = e => (0, o.jsxs)(x, {
            selected: e.selected,
            onClick: e.onClick,
            to: e.to,
            target: e.to ? "_blank" : void 0,
            children: [(0, o.jsx)("i", {
                className: `far ${e.icon}`,
                style: {
                    marginRight: 10
                }
            }), (0, o.jsx)("span", {
                children: e.title
            })]
        }),
        m = a.default.div.attrs({
            className: "flex-center wrap"
        })(d || (d = p`
  padding: 0px 20px;
  margin-bottom: 30px;
  margin-top: 15px;
  column-gap: 12px;
  row-gap: 12px;
`)),
        x = (0, a.default)(s.default).attrs({
            className: "flex vc hc"
        })(f || (f = p`
  color: rgba(0, 0, 0, 0.8);
  font-family: ${0};
  background: ${0};
  border-style: solid;
  border-color: ${0};
  border-width: 2px;
  height: 43px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 5px;
  font-size: 18px;
  transition: border-color 0.3s;
  line-height: 1;
  cursor: pointer;
  &:hover {
    color: #66bb6a;
  }
`), l.Fonts.SFPro, i.default.White, (e => e.selected ? "#66bb6a" : i.default.BorderGray))
})), r.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return a
    }));
    var o = r("bd8je");
    const a = e => {
        o.history.push(e)
    }
})), r.register("90UiM", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("7WFzL"),
        l = r("dwKuN"),
        s = function(e, t) {
            return a.createElement(l.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    s.displayName = "CopyOutlined";
    var c = a.forwardRef(s)
})), r.register("7WFzL", (function(t, r) {
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
                    d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
                }
            }]
        },
        name: "copy",
        theme: "outlined"
    }
})), r.register("83ivs", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("6tWM4"),
        l = r("dwKuN"),
        s = function(e, t) {
            return a.createElement(l.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    s.displayName = "EditOutlined";
    var c = a.forwardRef(s)
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
})), r.register("kuEJ4", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("iI4DW"),
        a = r("fywoC"),
        i = r("4gMdJ");

    function l(e, t, r) {
        return function(n) {
            const {
                prefixCls: l,
                style: s
            } = n, c = a.useRef(null), [u, d] = a.useState(0), [f, p] = a.useState(0), [g, h] = (0, o.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: m
            } = a.useContext(i.ConfigContext), x = m(t || "select", l);
            return a.useEffect((() => {
                if (h(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            d(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var n;
                            const o = r ? `.${r(x)}` : `.${x}-dropdown`,
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
                    paddingBottom: u,
                    position: "relative",
                    width: "fit-content",
                    minWidth: f
                }
            }, a.createElement(e, Object.assign({}, n, {
                style: Object.assign(Object.assign({}, s), {
                    margin: 0
                }),
                open: g,
                visible: g,
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
        l = new(0, o.Keyframes)("antMoveDownOut", {
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
        s = new(0, o.Keyframes)("antMoveLeftIn", {
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
                outKeyframes: l
            },
            "move-left": {
                inKeyframes: s,
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
                inKeyframes: o,
                outKeyframes: i
            } = f[t];
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
})), r.register("5g49A", (function(n, o) {
    e(n.exports, "default", (function() {
        return m
    }), (function(e) {
        return m = e
    }));
    var a = r("legzE"),
        i = r("fe1on"),
        l = r("fywoC"),
        s = r("4gMdJ"),
        c = r("2iORQ"),
        u = r("eM84N"),
        d = r("8elTB"),
        f = r("jfXop"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const g = (e, r) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: d,
                style: g,
                children: h,
                icon: m,
                color: x,
                onClose: v,
                closeIcon: y,
                closable: b = !1
            } = e, C = p(e, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);
            const {
                getPrefixCls: j,
                direction: w
            } = l.useContext(s.ConfigContext), [k, O] = l.useState(!0);
            l.useEffect((() => {
                "visible" in C && O(C.visible)
            }), [C.visible]);
            const S = (0, c.isPresetColor)(x) || (0, c.isPresetStatusColor)(x),
                N = Object.assign({
                    backgroundColor: x && !S ? x : void 0
                }, g),
                E = j("tag", n),
                [M, z] = (0, f.default)(E),
                P = t(i)(E, {
                    [`${E}-${x}`]: S,
                    [`${E}-has-color`]: x && !S,
                    [`${E}-hidden`]: !k,
                    [`${E}-rtl`]: "rtl" === w
                }, o, d, z),
                F = e => {
                    e.stopPropagation(), null == v || v(e), e.defaultPrevented || O(!1)
                },
                D = "function" == typeof C.onClick || h && "a" === h.type,
                $ = m || null,
                I = $ ? l.createElement(l.Fragment, null, $, l.createElement("span", null, h)) : h,
                K = l.createElement("span", Object.assign({}, C, {
                    ref: r,
                    className: P,
                    style: N
                }), I, b ? y ? l.createElement("span", {
                    className: `${E}-close-icon`,
                    onClick: F
                }, y) : l.createElement(a.default, {
                    className: `${E}-close-icon`,
                    onClick: F
                }) : null);
            return M(D ? l.createElement(u.default, null, K) : K)
        },
        h = l.forwardRef(g);
    h.CheckableTag = d.default;
    var m = h
})), r.register("8elTB", (function(n, o) {
    e(n.exports, "default", (function() {
        return u
    }), (function(e) {
        return u = e
    }));
    var a = r("fe1on"),
        i = r("fywoC"),
        l = r("4gMdJ"),
        s = r("jfXop"),
        c = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    var u = e => {
        var {
            prefixCls: r,
            className: n,
            checked: o,
            onChange: u,
            onClick: d
        } = e, f = c(e, ["prefixCls", "className", "checked", "onChange", "onClick"]);
        const {
            getPrefixCls: p
        } = i.useContext(l.ConfigContext), g = p("tag", r), [h, m] = (0, s.default)(g), x = t(a)(g, {
            [`${g}-checkable`]: !0,
            [`${g}-checkable-checked`]: o
        }, n, m);
        return h(i.createElement("span", Object.assign({}, f, {
            className: x,
            onClick: e => {
                null == u || u(!o), null == d || d(e)
            }
        })))
    }
})), r.register("jfXop", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = r("huF4L"),
        a = r("1QMe3"),
        i = r("3pCmM"),
        l = r("10VQw"),
        s = r("kCC5O");
    const c = (e, t, r) => {
            const n = (0, i.default)(r);
            return {
                [`${e.componentCls}-${t}`]: {
                    color: e[`color${r}`],
                    background: e[`color${n}Bg`],
                    borderColor: e[`color${n}Border`]
                }
            }
        },
        u = e => (0, l.genPresetColor)(e, ((t, r) => {
            let {
                textColor: n,
                lightBorderColor: o,
                lightColor: a,
                darkColor: i
            } = r;
            return {
                [`${e.componentCls}-${t}`]: {
                    color: n,
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
                lineWidth: r,
                tagPaddingHorizontal: n,
                componentCls: o
            } = e, a = n - r, i = t - r;
            return {
                [o]: Object.assign(Object.assign({}, (0, s.resetComponent)(e)), {
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
            lineHeight: r,
            lineWidth: n,
            fontSizeIcon: o
        } = e, i = Math.round(t * r), l = e.fontSizeSM, s = i - 2 * n, f = e.colorFillAlter, p = e.colorText, g = (0, a.merge)(e, {
            tagFontSize: l,
            tagLineHeight: s,
            tagDefaultBg: f,
            tagDefaultColor: p,
            tagIconSize: o - 2 * n,
            tagPaddingHorizontal: 8
        });
        return [d(g), u(g), c(g, "success", "Success"), c(g, "processing", "Info"), c(g, "error", "Error"), c(g, "warning", "Warning")]
    }))
})), r.register("3pCmM", (function(t, r) {
    function n(e) {
        if ("string" != typeof e) return e;
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    e(t.exports, "default", (function() {
        return n
    }))
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

    function l() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }
    e.exports.useWindowSize = function() {
        var e = i.useState(l()),
            t = e[0],
            r = e[1];
        return i.useLayoutEffect((function() {
            function e() {
                r(l())
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
    var l = i(r("fywoC"));
    e.exports.useComponentSize = function() {
        var e = l.useState({
                height: 0,
                width: 0
            }),
            t = e[0],
            r = e[1],
            o = l.useRef(),
            a = l.useCallback((function() {
                if (o.current) {
                    var e = o.current.offsetHeight,
                        n = o.current.offsetWidth;
                    e === t.height && n === t.width || r({
                        height: e,
                        width: n
                    })
                }
            }), [t.height, t.width]);
        return l.useLayoutEffect((function() {
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
        l = r("dwKuN"),
        s = function(e, t) {
            return a.createElement(l.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    s.displayName = "UsergroupAddOutlined";
    var c = a.forwardRef(s)
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
        l = r("dwKuN"),
        s = function(e, t) {
            return a.createElement(l.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    s.displayName = "LogoutOutlined";
    var c = a.forwardRef(s)
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
})), r.register("kLpOI", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("ayjhg"),
        l = r("dwKuN"),
        s = function(e, t) {
            return a.createElement(l.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    s.displayName = "CheckOutlined";
    var c = a.forwardRef(s)
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
})), r.register("6gxPk", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("5D7Fe"),
        l = r("dwKuN"),
        s = function(e, t) {
            return a.createElement(l.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    s.displayName = "DownOutlined";
    var c = a.forwardRef(s)
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
})), r.register("5AR3F", (function(n, o) {
    e(n.exports, "default", (function() {
        return m
    }));
    var a = r("2ic9V"),
        i = r("iStnv"),
        l = r("hzerz"),
        s = r("46jhs"),
        c = r("hn4Tf"),
        u = r("7NK35"),
        d = r("b1RjK"),
        f = r("17aYs"),
        p = r("fywoC"),
        g = r("fe1on"),
        h = function(e) {
            (0, d.default)(n, e);
            var r = (0, f.default)(n);

            function n(e) {
                var t;
                (0, c.default)(this, n), (t = r.call(this, e)).handleChange = function(e) {
                    var r = t.props,
                        n = r.disabled,
                        o = r.onChange;
                    n || ("checked" in t.props || t.setState({
                        checked: e.target.checked
                    }), o && o({
                        target: (0, s.default)((0, s.default)({}, t.props), {}, {
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
            return (0, u.default)(n, [{
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
                        s = r.style,
                        c = r.name,
                        u = r.id,
                        d = r.type,
                        f = r.disabled,
                        h = r.readOnly,
                        m = r.tabIndex,
                        x = r.onClick,
                        v = r.onFocus,
                        y = r.onBlur,
                        b = r.onKeyDown,
                        C = r.onKeyPress,
                        j = r.onKeyUp,
                        w = r.autoFocus,
                        k = r.value,
                        O = r.required,
                        S = (0, l.default)(r, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]),
                        N = Object.keys(S).reduce((function(e, t) {
                            return "aria-" !== t.substr(0, 5) && "data-" !== t.substr(0, 5) && "role" !== t || (e[t] = S[t]), e
                        }), {}),
                        E = this.state.checked,
                        M = t(g)(n, o, (e = {}, (0, i.default)(e, "".concat(n, "-checked"), E), (0, i.default)(e, "".concat(n, "-disabled"), f), e));
                    return t(p).createElement("span", {
                        className: M,
                        style: s
                    }, t(p).createElement("input", (0, a.default)({
                        name: c,
                        id: u,
                        type: d,
                        required: O,
                        readOnly: h,
                        disabled: f,
                        tabIndex: m,
                        className: "".concat(n, "-input"),
                        checked: !!E,
                        onClick: x,
                        onFocus: v,
                        onBlur: y,
                        onKeyUp: j,
                        onKeyDown: b,
                        onKeyPress: C,
                        onChange: this.handleChange,
                        autoFocus: w,
                        ref: this.saveInput,
                        value: k
                    }, N)), t(p).createElement("span", {
                        className: "".concat(n, "-inner")
                    }))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return "checked" in e ? (0, s.default)((0, s.default)({}, t), {}, {
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
    var m = h
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
        return l
    }));
    var o = r("bArAQ"),
        a = r("lcgmN"),
        i = r("erlXZ");

    function l(e) {
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
        return l
    }));
    var a = r("1eKqi"),
        i = r("cdb2f");

    function l(e, r) {
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
})), r.register("fgoFz", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv"),
        a = r("fywoC");
    const i = a.lazy((() => r("h3n1W")));
    var l = e => (0, o.jsx)(a.Suspense, {
        fallback: e.fallback || null,
        children: (0, o.jsx)(i, {
            latex: e.latex
        })
    })
})), r.register("h3n1W", (function(e, t) {
    e.exports = Promise.all([import("./" + r("ihc6Q").resolve("8pe9D")), import("./" + r("ihc6Q").resolve("5OCdz"))]).then((() => r("9YSp3")))
})), r.register("f9d7r", (function(t, r) {
    let n;
    var o;
    e(t.exports, "HookType", (function() {
        return n
    })), (o = n || (n = {})).selectBox = "selectBox", o.kit = "kit", o.number = "number"
})), r.register("5mRwo", (function(t, r) {
    let n;
    var o;
    let a;
    var i;
    e(t.exports, "LocalStorageNames", (function() {
        return a
    })), (o = n || (n = {})).time = "time", o.target = "target", o.race = "race", o.allIn = "allIn", (i = a || (a = {})).language = "gimkit-3.0-game-language", i.currency = "gimkit-game-currency", i.music = "gimkit-music-track", i.allowGoogleTranslate = "gimkit-google-translate-allowed", i.editorDefaultLanguage = "gimkit-editor-v4-default-language", i.editorDefaultGradeLevel = "gimkit-editor-v4-default-grade-level", i.editorDefaultSubject = "gimkit-editor-v4-default-subject", i.cosmosBlockedInGame = "gimkit-cosmos-blocked-in-game", i.hookSavedOptions = "gimkit-hook-saved-options"
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
        l = r("dwKuN"),
        s = function(e, t) {
            return a.createElement(l.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    s.displayName = "StarOutlined";
    var c = a.forwardRef(s)
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
        return l
    }));
    var o = r("fywoC"),
        a = r("3KQc0"),
        i = r("9iNNJ");
    var l = (e, t) => {
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
        return u
    }));
    var o = r("6rvT3"),
        a = r("9iNNJ"),
        i = r("3Yjty"),
        l = r("f1PHW");
    let s;
    const c = () => s || (s = function() {
        const e = new Map,
            t = new(0, o.default)((0, l.default)(((t, r) => {
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
    var u = function(e, t) {
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
        l = r("dwKuN"),
        s = function(e, t) {
            return a.createElement(l.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    s.displayName = "QuestionCircleOutlined";
    var c = a.forwardRef(s)
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
})), r.register("4eEdH", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("ddWN5"),
        l = r("dwKuN"),
        s = function(e, t) {
            return a.createElement(l.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    s.displayName = "DownloadOutlined";
    var c = a.forwardRef(s)
})), r.register("ddWN5", (function(t, r) {
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
                    d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "download",
        theme: "outlined"
    }
}));