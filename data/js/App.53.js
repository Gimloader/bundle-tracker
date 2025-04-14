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
r.register("aTija", (function(t, n) {
    var i;
    i = t.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return w
    }));
    var o = r("hxEiv"),
        s = r("3uz2P"),
        a = r("beXRF"),
        l = r("hIClP"),
        d = r("1CCl5"),
        c = r("dYca8"),
        u = r("4Gnmi"),
        p = r("a48Yf"),
        g = r("8L7R7"),
        f = r("Cw8yg"),
        h = r("fywoC"),
        m = r("eRL7n"),
        v = r("iMOcM"),
        x = r("d8JxI"),
        y = r("8j47p"),
        j = r("iROck"),
        b = r("46bRO");
    var w = () => {
        const {
            id: e
        } = (0, s.useParams)(), [t, r] = (0, a.useSearchParams)();
        var n;
        const i = Math.max(1, null !== (n = Number(t.get("page"))) && void 0 !== n ? n : 1),
            {
                isLoading: w,
                error: C,
                data: R
            } = (0, c.default)(e),
            {
                isLoading: k,
                error: P,
                data: M,
                isFetching: T
            } = (0, g.useClassReports)(i, e),
            [I, F] = h.useState(0),
            O = h.useRef(null);
        (0, x.default)(O, (e => {
            var t, r;
            F(null !== (r = null === (t = e.target) || void 0 === t ? void 0 : t.offsetTop) && void 0 !== r ? r : 0)
        }));
        const A = h.useMemo((() => C || (P || void 0)), [C, e, R, P]);
        h.useEffect((() => {
            window.scrollTo(0, 0)
        }), [i]);
        const $ = M && M.totalItems ? (0, o.jsx)(m.ReportPagination, {
                total: M.totalItems,
                current: i,
                onPageChange: e => {
                    r({
                        page: e
                    })
                }
            }) : null,
            z = (0, v.isUpgraded)();
        return (0, o.jsxs)(l.Container, {
            style: z ? void 0 : {
                filter: "blur(4px)"
            },
            children: [(0, o.jsx)(y.default, {
                id: "class progress",
                visible: !z,
                copy: {
                    title: "View class progress with Pro",
                    description: `To view all reports for a class in one place, upgrade to ${b.COMPANY_NAME} Pro.`
                },
                close: () => {
                    (0, j.NavigateTo)(`/class/${e}`)
                }
            }), (0, o.jsx)(v.Title, {
                title: (null == R ? void 0 : R.name) ? `${null==R?void 0:R.name} | Reports` : "Class Reports"
            }), (0, o.jsx)(d.GroupViewTopNavigationHeader, {
                id: e
            }), (0, o.jsxs)(l.ContentContainer, {
                ref: O,
                children: [A ? (0, o.jsx)("div", {
                    style: {
                        height: 35
                    }
                }) : (0, o.jsx)(p.GroupViewHeader, {
                    data: R,
                    customRightComponent: $
                }), (0, o.jsx)(l.Content, {
                    className: "flex",
                    style: {
                        padding: 0
                    },
                    children: w || k ? (0, o.jsx)(u.default, {
                        paragraph: {
                            rows: 4
                        },
                        title: !1,
                        active: !0,
                        className: "maxWidth",
                        style: {
                            padding: 35
                        }
                    }) : A ? (0, o.jsx)("div", {
                        style: {
                            padding: 35
                        },
                        children: (null == A || null === (E = A.message) || void 0 === E ? void 0 : E.text) || "There was an error fetching this class. Please try again."
                    }) : (0, o.jsx)(f.GroupViewReportsTable, {
                        data: null !== (N = null == M ? void 0 : M.items) && void 0 !== N ? N : [],
                        pagination: $,
                        containerTopOffset: I,
                        isFetching: T,
                        totalItems: null !== (_ = null == M ? void 0 : M.totalItems) && void 0 !== _ ? _ : 0
                    })
                })]
            })]
        });
        var E, N, _
    }
})), r.register("8L7R7", (function(t, n) {
    e(t.exports, "useClassReports", (function() {
        return s
    }));
    var i = r("eMRqp"),
        o = r("iMOcM");
    const s = (e, t) => (0, i.useQuery)({
        queryKey: ["group-reports", t, {
            page: e
        }],
        keepPreviousData: !0,
        staleTime: 6e4,
        retry: 2,
        queryFn: () => (0, o.requestAsPromise)({
            url: "/api/game-report/fetch-all",
            data: {
                page: e,
                groupId: t
            }
        })
    })
})), r.register("Cw8yg", (function(t, n) {
    e(t.exports, "GroupViewReportsTable", (function() {
        return u
    }));
    var i = r("hxEiv"),
        o = r("4gMdJ"),
        s = r("26Lv9"),
        a = r("iROck"),
        l = r("ipbvF"),
        d = r("7QXuE"),
        c = r("haemy");
    const u = e => e.totalItems ? (0, i.jsxs)("div", {
            id: "group-reports-container",
            className: "maxWidth",
            children: [(0, i.jsx)(o.default, {
                theme: {
                    token: {
                        padding: 35
                    }
                },
                children: (0, i.jsx)(s.default, {
                    className: "maxWidth",
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
                            (0, a.NavigateTo)(`/report/${e._id}`)
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
                        getContainer: () => document.getElementById("group-reports-container")
                    }
                })
            }), e.pagination ? (0, i.jsx)("div", {
                className: "maxWidth flex-center",
                style: {
                    padding: "35px 0px"
                },
                children: e.pagination
            }) : null]
        }) : (0, i.jsxs)("div", {
            style: {
                padding: 35,
                flex: 1
            },
            className: "flex-column flex-center",
            children: [(0, i.jsx)("img", {
                src: "/client/img/dashboard/report.svg",
                style: {
                    height: 80
                }
            }), (0, i.jsxs)("div", {
                style: {
                    textAlign: "center",
                    fontSize: "1.15em",
                    marginTop: 10
                },
                children: ["Check back here after you host a live game or assignment with this class! ", (0, i.jsx)("br", {}), "All their reports will be displayed here for you to easily check in on their progress."]
            })]
        }),
        p = [{
            title: "Kit",
            dataIndex: "kit",
            key: "report-kit",
            render: (e, t) => (0, i.jsx)(l.ReportKit, {
                kit: e,
                dateId: t._id,
                assignmentId: t.mapAssignment
            })
        }, {
            title: "Accuracy",
            dataIndex: "accuracy",
            key: "report-accuracy",
            render: e => (0, i.jsx)(d.ReportProgressAccuracyMeter, {
                percent: e
            })
        }, {
            title: "Participants",
            dataIndex: "groups",
            key: "report-groups",
            render: (e, t) => (0, i.jsx)(c.ReportParticipantsAndGroups, {
                reportId: t._id,
                participants: t.participants,
                groups: []
            })
        }]
})), r.register("ipbvF", (function(n, i) {
    e(n.exports, "ReportKit", (function() {
        return x
    }));
    var o = r("hxEiv");
    r("fywoC");
    var s = r("2FDaO"),
        a = r("i5Qjx"),
        l = r("2nCEo"),
        d = r("iMOcM"),
        c = r("69SUA"),
        u = r("gmwFZ"),
        p = r("lKmIF"),
        g = r("1djzF");
    let f, h, m, v = e => e;
    const x = e => {
            const r = t(l)((0, d.dateFromObjectId)(e.dateId)).format("MMMM Do [at] LT");
            return (0, o.jsxs)(a.default, {
                direction: "horizontal",
                size: 14,
                align: "center",
                children: [(0, o.jsx)("div", {
                    children: (0, o.jsx)(y, {
                        src: (0, g.getCloudinaryUrl)(e.kit.gif),
                        style: {
                            width: 55,
                            height: 55
                        }
                    })
                }), (0, o.jsxs)("div", {
                    children: [(0, o.jsx)(j, {
                        children: e.kit.title
                    }), (0, o.jsx)(b, {
                        children: r
                    }), e.assignmentId ? (0, o.jsx)("div", {
                        style: {
                            marginTop: "0.25em"
                        },
                        children: (0, o.jsx)(u.ReportLinkTag, {
                            to: `/assignment/${e.assignmentId}`,
                            children: "Assignment"
                        })
                    }) : null]
                })]
            })
        },
        y = s.default.img(f || (f = v`
  border-radius: 5px;
  border: solid ${0} 1px;
  flex-shrink: 0;
  object-fit: cover;
`), p.default.Black),
        j = s.default.div(h || (h = v`
  font-size: 1.1em;
  font-weight: ${0};
`), c.FontWeights.Bold),
        b = s.default.div(m || (m = v`
  font-size: 0.9em;
  font-style: italic;
  margin-top: 0.05em;
`))
})), r.register("gmwFZ", (function(t, n) {
    e(t.exports, "ReportLinkTag", (function() {
        return l
    }));
    var i = r("hxEiv");
    r("fywoC");
    var o = r("kyvf1"),
        s = r("2FDaO");
    let a;
    const l = e => (0, i.jsx)(d, {
            onClick: e => null == e ? void 0 : e.stopPropagation(),
            to: e.to,
            children: e.children
        }),
        d = (0, s.default)(o.default)(a || (a = (e => e)`
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
            const t = i(e);
            return t ? e.includes("/video/upload") ? `https://${o}/video/upload/${t}` : `https://${o}/image/upload/f_auto,fl_lossy,q_auto/${t}` : e
        },
        i = e => {
            if (!l.some((t => e.includes(t)))) return null;
            if (e.includes(s) && !e.includes(`/${a}/`)) return null;
            const t = e.split("/");
            if (!t || !t.length || t.length < 2) return null;
            const r = t[t.length - 2],
                n = t[t.length - 1];
            return r && n && r.startsWith("v") ? `${r}/${n}` : null
        },
        o = "media.gimkit.com",
        s = "res.cloudinary.com",
        a = "gimkit-production",
        l = [o, s]
})), r.register("7QXuE", (function(t, n) {
    e(t.exports, "ReportProgressAccuracyMeter", (function() {
        return l
    }));
    var i = r("hxEiv"),
        o = r("4gMdJ"),
        s = r("fI2SP");
    r("fywoC");
    var a = r("6edaj");
    const l = e => {
        const t = e.percent < 60 ? "#F44336" : e.percent < 80 ? "#FFC107" : "#66BB6A";
        return (0, i.jsx)(o.default, {
            theme: {
                components: {
                    Progress: {
                        colorText: (0, a.darken)(.2, t)
                    }
                }
            },
            children: (0, i.jsx)(s.default, {
                type: "dashboard",
                percent: e.percent,
                width: 65,
                strokeColor: t,
                status: "normal"
            })
        })
    }
})), r.register("haemy", (function(t, n) {
    e(t.exports, "ReportParticipantsAndGroups", (function() {
        return l
    }));
    var i = r("hxEiv");
    r("fywoC");
    var o = r("iMOcM"),
        s = r("i5Qjx"),
        a = r("gmwFZ");
    const l = e => {
        var t;
        return (0, i.jsxs)("div", {
            children: [(0, i.jsxs)("div", {
                style: {
                    fontStyle: "italic"
                },
                children: [e.participants, " ", (0, o.plural)("participant", e.participants)]
            }), (null === (t = e.groups) || void 0 === t ? void 0 : t.length) ? (0, i.jsx)(s.default, {
                direction: "horizontal",
                wrap: !0,
                size: "small",
                style: {
                    marginTop: "0.3em"
                },
                children: e.groups.map((t => (0, i.jsx)(a.ReportLinkTag, {
                    to: `/class/${t._id}`,
                    children: t.name
                }, e.reportId + t._id)))
            }) : null]
        })
    }
})), r.register("eRL7n", (function(t, n) {
    e(t.exports, "ReportPagination", (function() {
        return s
    }));
    var i = r("hxEiv"),
        o = r("7jcHh");
    r("fywoC");
    const s = e => {
        const {
            total: t,
            current: r,
            onPageChange: n
        } = e;
        return (0, i.jsx)(o.default, {
            simple: !0,
            current: r,
            total: t,
            defaultPageSize: 10,
            onChange: n
        })
    }
})), r.register("d8JxI", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var i = r("9iNNJ"),
        o = r("3Yjty");

    function s() {}
    let a;
    const l = e => a || (a = function(e) {
        let t = !1,
            r = [];
        const n = new Map,
            i = new(e || window.ResizeObserver)(((e, i) => {
                r = r.concat(e), t || window.requestAnimationFrame((function() {
                    const e = new Set;
                    for (let t = 0; t < r.length; t++) {
                        if (e.has(r[t].target)) continue;
                        e.add(r[t].target);
                        const o = n.get(r[t].target);
                        null == o || o.forEach((e => e(r[t], i)))
                    }
                    r = [], t = !1
                })), t = !0
            }));
        return {
            observer: i,
            subscribe(e, t) {
                var r;
                i.observe(e);
                const o = null !== (r = n.get(e)) && void 0 !== r ? r : [];
                o.push(t), n.set(e, o)
            },
            unsubscribe(e, t) {
                var r;
                const o = null !== (r = n.get(e)) && void 0 !== r ? r : [];
                if (1 === o.length) return i.unobserve(e), void n.delete(e);
                const s = o.indexOf(t); - 1 !== s && o.splice(s, 1), n.set(e, o)
            }
        }
    }(e));
    var d = function(e, t, r = {}) {
        const n = l(r.polyfill),
            a = (0, o.default)(t);
        return (0, i.default)((() => {
            let t = !1;
            const r = e && "current" in e ? e.current : e;
            if (!r) return s;

            function i(e, r) {
                t || a.current(e, r)
            }
            return n.subscribe(r, i), () => {
                t = !0, n.unsubscribe(r, i)
            }
        }), [e, n, a]), n.observer
    }
}));