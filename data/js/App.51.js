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
r.register("7QrTb", (function(t, n) {
    var o;
    o = t.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return x
    }));
    var a = r("hxEiv"),
        i = r("fywoC"),
        l = r("hIClP"),
        s = r("3uz2P"),
        c = r("beXRF"),
        d = r("dYca8"),
        u = r("iMOcM"),
        f = r("bZ9p8"),
        p = r("1CCl5"),
        g = r("i7sXG"),
        m = r("4Gnmi"),
        h = r("d8JxI"),
        b = r("eRL7n"),
        v = r("dTIa6");
    var x = () => {
        var e;
        const {
            id: t,
            studentId: r
        } = (0, s.useParams)(), [n, o] = (0, c.useSearchParams)();
        var x;
        const y = Math.max(1, null !== (x = Number(n.get("page"))) && void 0 !== x ? x : 1),
            [C, j] = i.useState(0),
            k = i.useRef(null);
        (0, h.default)(k, (e => {
            var t, r;
            j(null !== (r = null === (t = e.target) || void 0 === t ? void 0 : t.offsetTop) && void 0 !== r ? r : 0)
        }));
        const {
            isLoading: w,
            error: S,
            data: O
        } = (0, d.default)(t), {
            isLoading: I,
            error: M,
            data: $,
            isFetching: E
        } = (0, g.useMemberReports)(y, r);
        i.useEffect((() => {
            window.scrollTo(0, 0)
        }), [y]);
        const P = i.useMemo((() => {
                if (S) return S;
                if (M) return M;
                if (O) {
                    if (!O.members.find((e => e._id === r))) return {
                        message: {
                            text: "This link is invalid. This student may have been removed from your class."
                        }
                    }
                }
            }), [S, t, O, M]),
            z = null == O || null === (e = O.members) || void 0 === e ? void 0 : e.find((e => e._id === r)),
            N = $ && (null == $ ? void 0 : $.totalItems) ? (0, a.jsx)(b.ReportPagination, {
                total: $.totalItems,
                current: y,
                onPageChange: e => {
                    o({
                        page: e
                    })
                }
            }) : null;
        return (0, a.jsxs)(l.Container, {
            children: [(0, a.jsx)(u.Title, {
                title: (null == z ? void 0 : z.name) || "Student"
            }), (0, a.jsx)(p.GroupViewTopNavigationHeader, {
                id: t
            }), (0, a.jsxs)(l.ContentContainer, {
                ref: k,
                children: [P ? (0, a.jsx)("div", {
                    style: {
                        height: 35
                    }
                }) : (0, a.jsx)(f.GroupViewStudentHeader, {
                    student: z,
                    group: O,
                    children: N
                }), (0, a.jsx)(l.Content, {
                    className: "flex",
                    style: {
                        padding: 0
                    },
                    children: (0, u.isUpgraded)() ? w || I ? (0, a.jsx)(m.default, {
                        paragraph: {
                            rows: 4
                        },
                        title: !1,
                        active: !0,
                        className: "maxWidth",
                        style: {
                            padding: 35
                        }
                    }) : P ? (0, a.jsx)("div", {
                        style: {
                            padding: 35
                        },
                        children: (null == P || null === (R = P.message) || void 0 === R ? void 0 : R.text) || "There was an error fetching this class. Please try again."
                    }) : (0, a.jsx)(v.GroupViewStudentTable, {
                        data: $.items,
                        isFetching: E,
                        playerName: null == z ? void 0 : z.name,
                        containerTopOffset: C,
                        pagination: N,
                        totalItems: $.totalItems
                    }) : (0, a.jsx)("div", {
                        style: {
                            padding: 35
                        },
                        children: "Upgrade to view student performance data."
                    })
                })]
            })]
        });
        var R
    }
})), r.register("bZ9p8", (function(t, n) {
    e(t.exports, "GroupViewStudentHeader", (function() {
        return s
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("69SUA"),
        i = r("dpejg"),
        l = r("kyvf1");
    const s = e => {
        const {
            student: t,
            group: r
        } = e;
        return t && r ? (0, o.jsxs)("div", {
            className: "flex maxWidth between vc",
            style: {
                padding: "40px 0px"
            },
            children: [(0, o.jsxs)("div", {
                children: [(0, o.jsxs)(i.default, {
                    children: [(0, o.jsx)(i.default.Item, {
                        children: (0, o.jsx)(l.default, {
                            to: `/class/${r._id}`,
                            children: r.name
                        })
                    }), (0, o.jsx)(i.default.Item, {
                        children: "Student Progress"
                    })]
                }), (0, o.jsx)("div", {
                    style: {
                        fontSize: "2em",
                        fontWeight: a.FontWeights.UltraBold,
                        marginTop: 2
                    },
                    children: t.name
                }), (0, o.jsx)("div", {
                    style: {
                        marginTop: "0.1em"
                    },
                    children: t.email
                })]
            }), (0, o.jsx)("div", {
                children: e.children
            })]
        }) : (0, o.jsx)("div", {
            style: {
                height: 154
            }
        })
    }
})), r.register("dpejg", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var o = r("ku1lM").default
})), r.register("ku1lM", (function(n, o) {
    e(n.exports, "default", (function() {
        return y
    }), (function(e) {
        return y = e
    }));
    var a = r("5Toxq"),
        i = r("fe1on"),
        l = r("jyxW7"),
        s = r("fywoC"),
        c = r("4gMdJ"),
        d = r("13AMv"),
        u = r("aNsvV"),
        f = r("86iPJ"),
        p = r("83m4I"),
        g = r("5Df3a"),
        m = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };

    function h(e, t, r, n) {
        const o = r.indexOf(e) === r.length - 1,
            a = function(e, t) {
                if (!e.breadcrumbName) return null;
                const r = Object.keys(t).join("|");
                return e.breadcrumbName.replace(new RegExp(`:(${r})`, "g"), ((e, r) => t[r] || e))
            }(e, t);
        return o ? s.createElement("span", null, a) : s.createElement("a", {
            href: `#/${n.join("/")}`
        }, a)
    }
    const b = (e, t) => (e = (e || "").replace(/^\//, ""), Object.keys(t).forEach((r => {
            e = e.replace(`:${r}`, t[r])
        })), e),
        v = (e, t, r) => {
            const n = (0, a.default)(e),
                o = b(t || "", r);
            return o && n.push(o), n
        },
        x = e => {
            var {
                prefixCls: r,
                separator: n = "/",
                style: o,
                className: a,
                rootClassName: p,
                routes: x,
                children: y,
                itemRender: C = h,
                params: j = {}
            } = e, k = m(e, ["prefixCls", "separator", "style", "className", "rootClassName", "routes", "children", "itemRender", "params"]);
            const {
                getPrefixCls: w,
                direction: S
            } = s.useContext(c.ConfigContext);
            let O;
            const I = w("breadcrumb", r),
                [M, $] = (0, g.default)(I);
            if (x && x.length > 0) {
                const e = [];
                O = x.map((t => {
                    const r = b(t.path, j);
                    let o;
                    r && e.push(r), t.children && t.children.length && (o = s.createElement(d.default, {
                        items: t.children.map((t => ({
                            key: t.path || t.breadcrumbName,
                            label: C(t, j, x, v(e, t.path, j))
                        })))
                    }));
                    const a = {
                        separator: n
                    };
                    return o && (a.overlay = o), s.createElement(f.default, Object.assign({}, a, {
                        key: r || t.breadcrumbName
                    }), C(t, j, x, e))
                }))
            } else y && (O = (0, l.default)(y).map(((e, t) => e ? (0, u.cloneElement)(e, {
                separator: n,
                key: t
            }) : e)));
            const E = t(i)(I, {
                [`${I}-rtl`]: "rtl" === S
            }, a, p, $);
            return M(s.createElement("nav", Object.assign({
                className: E,
                style: o
            }, k), s.createElement("ol", null, O)))
        };
    x.Item = f.default, x.Separator = p.default;
    var y = x
})), r.register("86iPJ", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }), (function(e) {
        return d = e
    }));
    var o = r("6gxPk"),
        a = r("fywoC"),
        i = r("4gMdJ"),
        l = r("er4Xs"),
        s = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const c = e => {
        const {
            prefixCls: t,
            separator: r = "/",
            children: n,
            menu: c,
            overlay: d,
            dropdownProps: u
        } = e, f = s(e, ["prefixCls", "separator", "children", "menu", "overlay", "dropdownProps"]), {
            getPrefixCls: p
        } = a.useContext(i.ConfigContext), g = p("breadcrumb", t);
        let m;
        return m = "href" in f ? a.createElement("a", Object.assign({
            className: `${g}-link`
        }, f), n) : a.createElement("span", Object.assign({
            className: `${g}-link`
        }, f), n), m = (t => {
            if (c || d) {
                const r = Object.assign({}, u);
                return "overlay" in e && (r.overlay = d), a.createElement(l.default, Object.assign({
                    menu: c,
                    placement: "bottom"
                }, r), a.createElement("span", {
                    className: `${g}-overlay-link`
                }, t, a.createElement(o.default, null)))
            }
            return t
        })(m), null != n ? a.createElement("li", null, m, r && a.createElement("span", {
            className: `${g}-separator`
        }, r)) : null
    };
    c.__ANT_BREADCRUMB_ITEM = !0;
    var d = c
})), r.register("83m4I", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("fywoC"),
        a = r("4gMdJ");
    const i = e => {
        let {
            children: t
        } = e;
        const {
            getPrefixCls: r
        } = o.useContext(a.ConfigContext), n = r("breadcrumb");
        return o.createElement("span", {
            className: `${n}-separator`
        }, t || "/")
    };
    i.__ANT_BREADCRUMB_SEPARATOR = !0;
    var l = i
})), r.register("5Df3a", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("huF4L"),
        a = r("1QMe3"),
        i = r("kCC5O");
    const l = e => {
        const {
            componentCls: t,
            iconCls: r
        } = e;
        return {
            [t]: Object.assign(Object.assign({}, (0, i.resetComponent)(e)), {
                color: e.breadcrumbBaseColor,
                fontSize: e.breadcrumbFontSize,
                [r]: {
                    fontSize: e.breadcrumbIconFontSize
                },
                ol: {
                    display: "flex",
                    flexWrap: "wrap",
                    margin: 0,
                    padding: 0,
                    listStyle: "none"
                },
                a: Object.assign({
                    color: e.breadcrumbLinkColor,
                    transition: `color ${e.motionDurationMid}`,
                    padding: `0 ${e.paddingXXS}px`,
                    borderRadius: e.borderRadiusSM,
                    height: e.lineHeight * e.fontSize,
                    display: "inline-block",
                    marginInline: -e.marginXXS,
                    "&:hover": {
                        color: e.breadcrumbLinkColorHover,
                        backgroundColor: e.colorBgTextHover
                    }
                }, (0, i.genFocusStyle)(e)),
                "li:last-child": {
                    color: e.breadcrumbLastItemColor,
                    [`& > ${t}-separator`]: {
                        display: "none"
                    }
                },
                [`${t}-separator`]: {
                    marginInline: e.breadcrumbSeparatorMargin,
                    color: e.breadcrumbSeparatorColor
                },
                [`${t}-link`]: {
                    [`\n          > ${r} + span,\n          > ${r} + a\n        `]: {
                        marginInlineStart: e.marginXXS
                    }
                },
                [`${t}-overlay-link`]: {
                    borderRadius: e.borderRadiusSM,
                    height: e.lineHeight * e.fontSize,
                    display: "inline-block",
                    padding: `0 ${e.paddingXXS}px`,
                    marginInline: -e.marginXXS,
                    [`> ${r}`]: {
                        marginInlineStart: e.marginXXS,
                        fontSize: e.fontSizeIcon
                    },
                    "&:hover": {
                        color: e.breadcrumbLinkColorHover,
                        backgroundColor: e.colorBgTextHover,
                        a: {
                            color: e.breadcrumbLinkColorHover
                        }
                    },
                    a: {
                        "&:hover": {
                            backgroundColor: "transparent"
                        }
                    }
                },
                [`&${e.componentCls}-rtl`]: {
                    direction: "rtl"
                }
            })
        }
    };
    var s = (0, o.default)("Breadcrumb", (e => {
        const t = (0, a.merge)(e, {
            breadcrumbBaseColor: e.colorTextDescription,
            breadcrumbFontSize: e.fontSize,
            breadcrumbIconFontSize: e.fontSize,
            breadcrumbLinkColor: e.colorTextDescription,
            breadcrumbLinkColorHover: e.colorText,
            breadcrumbLastItemColor: e.colorText,
            breadcrumbSeparatorMargin: e.marginXS,
            breadcrumbSeparatorColor: e.colorTextDescription
        });
        return [l(t)]
    }))
})), r.register("i7sXG", (function(t, n) {
    e(t.exports, "useMemberReports", (function() {
        return i
    }));
    var o = r("eMRqp"),
        a = r("iMOcM");
    const i = (e, t) => (0, o.useQuery)({
        queryKey: ["group-member-reports", t, {
            page: e
        }],
        keepPreviousData: !0,
        staleTime: 6e4,
        retry: 2,
        queryFn: () => (0, a.requestAsPromise)({
            url: "/api/game-report/fetch-by-group-member",
            data: {
                page: e,
                groupMemberId: t
            }
        })
    })
})), r.register("d8JxI", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("9iNNJ"),
        a = r("3Yjty");

    function i() {}
    let l;
    const s = e => l || (l = function(e) {
        let t = !1,
            r = [];
        const n = new Map,
            o = new(e || window.ResizeObserver)(((e, o) => {
                r = r.concat(e), t || window.requestAnimationFrame((function() {
                    const e = new Set;
                    for (let t = 0; t < r.length; t++) {
                        if (e.has(r[t].target)) continue;
                        e.add(r[t].target);
                        const a = n.get(r[t].target);
                        null == a || a.forEach((e => e(r[t], o)))
                    }
                    r = [], t = !1
                })), t = !0
            }));
        return {
            observer: o,
            subscribe(e, t) {
                var r;
                o.observe(e);
                const a = null !== (r = n.get(e)) && void 0 !== r ? r : [];
                a.push(t), n.set(e, a)
            },
            unsubscribe(e, t) {
                var r;
                const a = null !== (r = n.get(e)) && void 0 !== r ? r : [];
                if (1 === a.length) return o.unobserve(e), void n.delete(e);
                const i = a.indexOf(t); - 1 !== i && a.splice(i, 1), n.set(e, a)
            }
        }
    }(e));
    var c = function(e, t, r = {}) {
        const n = s(r.polyfill),
            l = (0, a.default)(t);
        return (0, o.default)((() => {
            let t = !1;
            const r = e && "current" in e ? e.current : e;
            if (!r) return i;

            function o(e, r) {
                t || l.current(e, r)
            }
            return n.subscribe(r, o), () => {
                t = !0, n.unsubscribe(r, o)
            }
        }), [e, n, l]), n.observer
    }
})), r.register("eRL7n", (function(t, n) {
    e(t.exports, "ReportPagination", (function() {
        return i
    }));
    var o = r("hxEiv"),
        a = r("7jcHh");
    r("fywoC");
    const i = e => {
        const {
            total: t,
            current: r,
            onPageChange: n
        } = e;
        return (0, o.jsx)(a.default, {
            simple: !0,
            current: r,
            total: t,
            defaultPageSize: 10,
            onChange: n
        })
    }
})), r.register("dTIa6", (function(t, n) {
    e(t.exports, "GroupViewStudentTable", (function() {
        return f
    }));
    var o = r("hxEiv"),
        a = r("4gMdJ"),
        i = r("26Lv9"),
        l = r("fywoC"),
        s = r("ipbvF"),
        c = r("7QXuE"),
        d = r("iMOcM"),
        u = r("5LAkU");
    const f = e => {
            const [t, r] = l.useState();
            return e.totalItems ? (0, o.jsxs)("div", {
                id: "student-report-container",
                children: [(0, o.jsx)(a.default, {
                    theme: {
                        token: {
                            padding: 35
                        }
                    },
                    children: (0, o.jsx)(i.default, {
                        dataSource: e.data.map((e => ({
                            key: e._id,
                            ...e
                        }))),
                        columns: p,
                        bordered: !0,
                        pagination: !1,
                        tableLayout: "auto",
                        size: "large",
                        onRow: e => ({
                            onClick: () => {
                                r(e)
                            },
                            style: {
                                cursor: "pointer"
                            }
                        }),
                        loading: {
                            spinning: e.isFetching,
                            indicator: null
                        },
                        sticky: {
                            offsetHeader: e.containerTopOffset,
                            getContainer: () => document.getElementById("student-report-container")
                        }
                    })
                }), e.pagination ? (0, o.jsx)("div", {
                    className: "maxWidth flex-center",
                    style: {
                        padding: "35px 0px"
                    },
                    children: e.pagination
                }) : null, t ? (0, o.jsx)(u.GameReportCompletionModal, {
                    playerName: e.playerName,
                    gameReportId: t.gameReport,
                    participantId: t._id,
                    close: () => {
                        r(void 0)
                    }
                }) : null]
            }) : (0, o.jsxs)("div", {
                style: {
                    padding: 35,
                    flex: 1
                },
                className: "flex-column flex-center",
                children: [(0, o.jsx)("img", {
                    src: "/client/img/dashboard/report.svg",
                    style: {
                        height: 80
                    }
                }), (0, o.jsxs)("div", {
                    style: {
                        textAlign: "center",
                        fontSize: "1.15em",
                        marginTop: 10
                    },
                    children: ["Check back here after this student plays a live game or assignment!", " ", (0, o.jsx)("br", {}), "All of their reports will show up here for you to easily check in on their progress."]
                })]
            })
        },
        p = [{
            title: "Kit",
            dataIndex: "kit",
            key: "report-kit",
            render: (e, t) => (0, o.jsx)(s.ReportKit, {
                kit: e,
                dateId: t._id
            })
        }, {
            title: "Individual Accuracy",
            dataIndex: "accuracy",
            key: "report-accuracy",
            render: e => (0, o.jsx)(c.ReportProgressAccuracyMeter, {
                percent: e
            })
        }, {
            title: "Questions Answered",
            dataIndex: "questionsAnswered",
            key: "questions-answered",
            render: e => (0, d.numberWithCommas)(e)
        }]
})), r.register("ipbvF", (function(n, o) {
    e(n.exports, "ReportKit", (function() {
        return v
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        l = r("i5Qjx"),
        s = r("2nCEo"),
        c = r("iMOcM"),
        d = r("69SUA"),
        u = r("gmwFZ"),
        f = r("lKmIF"),
        p = r("1djzF");
    let g, m, h, b = e => e;
    const v = e => {
            const r = t(s)((0, c.dateFromObjectId)(e.dateId)).format("MMMM Do [at] LT");
            return (0, a.jsxs)(l.default, {
                direction: "horizontal",
                size: 14,
                align: "center",
                children: [(0, a.jsx)("div", {
                    children: (0, a.jsx)(x, {
                        src: (0, p.getCloudinaryUrl)(e.kit.gif),
                        style: {
                            width: 55,
                            height: 55
                        }
                    })
                }), (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(y, {
                        children: e.kit.title
                    }), (0, a.jsx)(C, {
                        children: r
                    }), e.assignmentId ? (0, a.jsx)("div", {
                        style: {
                            marginTop: "0.25em"
                        },
                        children: (0, a.jsx)(u.ReportLinkTag, {
                            to: `/assignment/${e.assignmentId}`,
                            children: "Assignment"
                        })
                    }) : null]
                })]
            })
        },
        x = i.default.img(g || (g = b`
  border-radius: 5px;
  border: solid ${0} 1px;
  flex-shrink: 0;
  object-fit: cover;
`), f.default.Black),
        y = i.default.div(m || (m = b`
  font-size: 1.1em;
  font-weight: ${0};
`), d.FontWeights.Bold),
        C = i.default.div(h || (h = b`
  font-size: 0.9em;
  font-style: italic;
  margin-top: 0.05em;
`))
})), r.register("gmwFZ", (function(t, n) {
    e(t.exports, "ReportLinkTag", (function() {
        return s
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("kyvf1"),
        i = r("2FDaO");
    let l;
    const s = e => (0, o.jsx)(c, {
            onClick: e => null == e ? void 0 : e.stopPropagation(),
            to: e.to,
            children: e.children
        }),
        c = (0, i.default)(a.default)(l || (l = (e => e)`
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.2em 0.73em;
  font-size: 0.9em;
  border-radius: 50px;
`))
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
})), r.register("7QXuE", (function(t, n) {
    e(t.exports, "ReportProgressAccuracyMeter", (function() {
        return s
    }));
    var o = r("hxEiv"),
        a = r("4gMdJ"),
        i = r("fI2SP");
    r("fywoC");
    var l = r("6edaj");
    const s = e => {
        const t = e.percent < 60 ? "#F44336" : e.percent < 80 ? "#FFC107" : "#66BB6A";
        return (0, o.jsx)(a.default, {
            theme: {
                components: {
                    Progress: {
                        colorText: (0, l.darken)(.2, t)
                    }
                }
            },
            children: (0, o.jsx)(i.default, {
                type: "dashboard",
                percent: e.percent,
                width: 65,
                strokeColor: t,
                status: "normal"
            })
        })
    }
})), r.register("5LAkU", (function(t, n) {
    e(t.exports, "GameReportCompletionLink", (function() {
        return u
    })), e(t.exports, "GameReportCompletionModal", (function() {
        return f
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("3UhQK"),
        l = r("fBuQJ"),
        s = r("4Gnmi"),
        c = r("iMOcM"),
        d = r("9WFo8");
    const u = {
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
                children: n ? (0, o.jsx)(d.default, {
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
})), r.register("5g49A", (function(n, o) {
    e(n.exports, "default", (function() {
        return h
    }), (function(e) {
        return h = e
    }));
    var a = r("legzE"),
        i = r("fe1on"),
        l = r("fywoC"),
        s = r("4gMdJ"),
        c = r("2iORQ"),
        d = r("eM84N"),
        u = r("8elTB"),
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
                rootClassName: u,
                style: g,
                children: m,
                icon: h,
                color: b,
                onClose: v,
                closeIcon: x,
                closable: y = !1
            } = e, C = p(e, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);
            const {
                getPrefixCls: j,
                direction: k
            } = l.useContext(s.ConfigContext), [w, S] = l.useState(!0);
            l.useEffect((() => {
                "visible" in C && S(C.visible)
            }), [C.visible]);
            const O = (0, c.isPresetColor)(b) || (0, c.isPresetStatusColor)(b),
                I = Object.assign({
                    backgroundColor: b && !O ? b : void 0
                }, g),
                M = j("tag", n),
                [$, E] = (0, f.default)(M),
                P = t(i)(M, {
                    [`${M}-${b}`]: O,
                    [`${M}-has-color`]: b && !O,
                    [`${M}-hidden`]: !w,
                    [`${M}-rtl`]: "rtl" === k
                }, o, u, E),
                z = e => {
                    e.stopPropagation(), null == v || v(e), e.defaultPrevented || S(!1)
                },
                N = "function" == typeof C.onClick || m && "a" === m.type,
                R = h || null,
                T = R ? l.createElement(l.Fragment, null, R, l.createElement("span", null, m)) : m,
                F = l.createElement("span", Object.assign({}, C, {
                    ref: r,
                    className: P,
                    style: I
                }), T, y ? x ? l.createElement("span", {
                    className: `${M}-close-icon`,
                    onClick: z
                }, x) : l.createElement(a.default, {
                    className: `${M}-close-icon`,
                    onClick: z
                }) : null);
            return $(N ? l.createElement(d.default, null, F) : F)
        },
        m = l.forwardRef(g);
    m.CheckableTag = u.default;
    var h = m
})), r.register("8elTB", (function(n, o) {
    e(n.exports, "default", (function() {
        return d
    }), (function(e) {
        return d = e
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
    var d = e => {
        var {
            prefixCls: r,
            className: n,
            checked: o,
            onChange: d,
            onClick: u
        } = e, f = c(e, ["prefixCls", "className", "checked", "onChange", "onClick"]);
        const {
            getPrefixCls: p
        } = i.useContext(l.ConfigContext), g = p("tag", r), [m, h] = (0, s.default)(g), b = t(a)(g, {
            [`${g}-checkable`]: !0,
            [`${g}-checkable-checked`]: o
        }, n, h);
        return m(i.createElement("span", Object.assign({}, f, {
            className: b,
            onClick: e => {
                null == d || d(!o), null == u || u(e)
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
        d = e => (0, l.genPresetColor)(e, ((t, r) => {
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
        u = e => {
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
        return [u(g), d(g), c(g, "success", "Success"), c(g, "processing", "Info"), c(g, "error", "Error"), c(g, "warning", "Warning")]
    }))
})), r.register("3pCmM", (function(t, r) {
    function n(e) {
        if ("string" != typeof e) return e;
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    e(t.exports, "default", (function() {
        return n
    }))
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
    let d;
    const u = i.default.img.attrs((e => ({
        src: e.image
    })))(d || (d = (e => e)`
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
            children: [(0, o.jsx)(u, {
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