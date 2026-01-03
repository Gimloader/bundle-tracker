import {
    r as i,
    an as F,
    aK as q,
    ao as k,
    ak as ne,
    al as oe,
    aN as ae,
    am as M,
    aO as ie,
    aH as G,
    aS as se,
    j as a,
    F as le,
    y as ce,
    E as me,
    b6 as de,
    n as pe,
    z as ue,
    T as fe,
    f as ge,
    A as be
} from "./index-JueF_e_O.js";
import {
    u as ye,
    C as he,
    G as xe,
    a as je,
    b as ve
} from "./App-CdZ9UGa2.js";
import {
    A as Oe
} from "./AccessibleAnchor-C5KFFiup.js";
import {
    R as Ce
} from "./DownOutlined-2rilSz_X.js";
import {
    a as Se
} from "./index-D2z5EOhv.js";
import {
    u as Ie
} from "./useQuery-Bxz3ggSG.js";
import {
    a as Pe,
    b as Ne,
    u as Re,
    R as we
} from "./ReportAccuracyMeter-DdK4SMWy.js";
import {
    G as Ee
} from "./GameReportCompletionLink-DFWNVURB.js";
import {
    F as Te
} from "./useClasses-BLMDwT0Q.js";
import "./Paper-Cctx9C_2.js";
import "./index-Dx05C7sF.js";
import "./index-CrBw-JUo.js";
import "./index-C3nE64hA.js";
import "./context-CjY8B7F1.js";
import "./NavigateTo-B9Fkdix9.js";
import "./index-Cb9CjGY0.js";
import "./useForm-BgB5oypL.js";
import "./useBreakpoint-CLaqhf0_.js";
import "./useForceUpdate-B8fMqphv.js";
import "./QuestionCircleOutlined-BQK1Tego.js";
import "./index-DwJM4HGs.js";
import "./FontAwesomeIcon-CiZylb_V.js";
import "./CheckOutlined-BVeheXUJ.js";
import "./EditOutlined-B6aDouN2.js";
import "./UsergroupAddOutlined-DHD6lQOl.js";
import "./DeleteOutlined-pTRLjAw2.js";
import "./StopPropagation-jekF225_.js";
import "./App-BKUv5aDr.js";
import "./Sizes-BhgpZp_e.js";
import "./motion-C-xmDj6Z.js";
import "./index-DWUaWm5X.js";
import "./price-1Xs9YDh1.js";
import "./TrackPostHogEvent-BOHwnqir.js";
import "./StarOutlined-BGGlbh6F.js";
import "./App-Cn07I0ls.js";
import "./Shortcut-CMqBR2Ku.js";
import "./Names-DfDh6qGd.js";
import "./App-CVsQbxzN.js";
import "./mobxreact.esm-Ws-CV3HT.js";
import "./index-txCQgMuj.js";
import "./index-WAenXna7.js";
import "./colors-DeP7YnlJ.js";
import "./useWarningOnMountInDevelopment-VsZQFfAu.js";
import "./move-BQfrK9lH.js";
import "./getCloudinaryUrl-Drn97BLG.js";
import "./polished.esm-BFSwQt3g.js";
import "./inheritsLoose-CU-hyjUj.js";
import "./progress-9Vcji5fP.js";
import "./Player-CRqvL7cm.js";
import "./Question-DFBLELga.js";
import "./ImagePreview-D1w737eq.js";
import "./LazyLatexRenderer-QF7uKX2E.js";
import "./index-QLK40o1i.js";
import "./useBubbleLock-iAvgPw8B.js";
import "./index-CgktaOfj.js";
import "./CopyOutlined-D8Tnfq0_.js";
import "./DownloadOutlined-BSnMj16b.js";
import "./BarChartOutlined-72EGKwIP.js";
import "./styleChecker-C-hCCLqu.js";
import "./index-7_9qGeDt.js";
import "./index-BHb_x4P0.js";
const E = ({
    children: e
}) => {
    const {
        getPrefixCls: t
    } = i.useContext(F), n = t("breadcrumb");
    return i.createElement("li", {
        className: `${n}-separator`,
        "aria-hidden": "true"
    }, e === "" ? e : e || "/")
};
E.__ANT_BREADCRUMB_SEPARATOR = !0;
var _e = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
};

function $e(e, t) {
    if (e.title === void 0 || e.title === null) return null;
    const n = Object.keys(t).join("|");
    return typeof e.title == "object" ? e.title : String(e.title).replace(new RegExp(`:(${n})`, "g"), (r, o) => t[o] || r)
}

function W(e, t, n, r) {
    if (n == null) return null;
    const {
        className: o,
        onClick: l
    } = t, c = _e(t, ["className", "onClick"]), d = Object.assign(Object.assign({}, q(c, {
        data: !0,
        aria: !0
    })), {
        onClick: l
    });
    return r !== void 0 ? i.createElement("a", Object.assign({}, d, {
        className: k(`${e}-link`, o),
        href: r
    }), n) : i.createElement("span", Object.assign({}, d, {
        className: k(`${e}-link`, o)
    }), n)
}

function Ae(e, t) {
    return (r, o, l, c, d) => {
        if (t) return t(r, o, l, c);
        const y = $e(r, o);
        return W(e, r, y, d)
    }
}
var z = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
};
const K = e => {
        const {
            prefixCls: t,
            separator: n = "/",
            children: r,
            menu: o,
            overlay: l,
            dropdownProps: c,
            href: d
        } = e, b = (p => {
            if (o || l) {
                const O = Object.assign({}, c);
                if (o) {
                    const h = o || {},
                        {
                            items: u
                        } = h,
                        g = z(h, ["items"]);
                    O.menu = Object.assign(Object.assign({}, g), {
                        items: u == null ? void 0 : u.map((f, m) => {
                            var {
                                key: x,
                                title: I,
                                label: j,
                                path: s
                            } = f, v = z(f, ["key", "title", "label", "path"]);
                            let P = j ?? I;
                            return s && (P = i.createElement("a", {
                                href: `${d}${s}`
                            }, P)), Object.assign(Object.assign({}, v), {
                                key: x ?? m,
                                label: P
                            })
                        })
                    })
                } else l && (O.overlay = l);
                return i.createElement(Se, Object.assign({
                    placement: "bottom"
                }, O), i.createElement("span", {
                    className: `${t}-overlay-link`
                }, p, i.createElement(Ce, null)))
            }
            return p
        })(r);
        return b != null ? i.createElement(i.Fragment, null, i.createElement("li", null, b), n && i.createElement(E, null, n)) : null
    },
    V = e => {
        const {
            prefixCls: t,
            children: n,
            href: r
        } = e, o = z(e, ["prefixCls", "children", "href"]), {
            getPrefixCls: l
        } = i.useContext(F), c = l("breadcrumb", t);
        return i.createElement(K, Object.assign({}, o, {
            prefixCls: c
        }), W(c, o, n, r))
    };
V.__ANT_BREADCRUMB_ITEM = !0;
const Be = e => {
        const {
            componentCls: t,
            iconCls: n,
            calc: r
        } = e;
        return {
            [t]: Object.assign(Object.assign({}, ae(e)), {
                color: e.itemColor,
                fontSize: e.fontSize,
                [n]: {
                    fontSize: e.iconFontSize
                },
                ol: {
                    display: "flex",
                    flexWrap: "wrap",
                    margin: 0,
                    padding: 0,
                    listStyle: "none"
                },
                a: Object.assign({
                    color: e.linkColor,
                    transition: `color ${e.motionDurationMid}`,
                    padding: `0 ${M(e.paddingXXS)}`,
                    borderRadius: e.borderRadiusSM,
                    height: e.fontHeight,
                    display: "inline-block",
                    marginInline: r(e.marginXXS).mul(-1).equal(),
                    "&:hover": {
                        color: e.linkHoverColor,
                        backgroundColor: e.colorBgTextHover
                    }
                }, ie(e)),
                "li:last-child": {
                    color: e.lastItemColor
                },
                [`${t}-separator`]: {
                    marginInline: e.separatorMargin,
                    color: e.separatorColor
                },
                [`${t}-link`]: {
                    [`
          > ${n} + span,
          > ${n} + a
        `]: {
                        marginInlineStart: e.marginXXS
                    }
                },
                [`${t}-overlay-link`]: {
                    borderRadius: e.borderRadiusSM,
                    height: e.fontHeight,
                    display: "inline-block",
                    padding: `0 ${M(e.paddingXXS)}`,
                    marginInline: r(e.marginXXS).mul(-1).equal(),
                    [`> ${n}`]: {
                        marginInlineStart: e.marginXXS,
                        fontSize: e.fontSizeIcon
                    },
                    "&:hover": {
                        color: e.linkHoverColor,
                        backgroundColor: e.colorBgTextHover,
                        a: {
                            color: e.linkHoverColor
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
    },
    ke = e => ({
        itemColor: e.colorTextDescription,
        lastItemColor: e.colorText,
        iconFontSize: e.fontSize,
        linkColor: e.colorTextDescription,
        linkHoverColor: e.colorText,
        separatorColor: e.colorTextDescription,
        separatorMargin: e.marginXS
    }),
    ze = ne("Breadcrumb", e => {
        const t = oe(e, {});
        return Be(t)
    }, ke);
var L = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
};

function Fe(e) {
    const {
        breadcrumbName: t,
        children: n
    } = e, r = L(e, ["breadcrumbName", "children"]), o = Object.assign({
        title: t
    }, r);
    return n && (o.menu = {
        items: n.map(l => {
            var {
                breadcrumbName: c
            } = l, d = L(l, ["breadcrumbName"]);
            return Object.assign(Object.assign({}, d), {
                title: c
            })
        })
    }), o
}

function He(e, t) {
    return i.useMemo(() => e || (t ? t.map(Fe) : null), [e, t])
}
var Xe = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
};
const De = (e, t) => {
        if (t === void 0) return t;
        let n = (t || "").replace(/^\//, "");
        return Object.keys(e).forEach(r => {
            n = n.replace(`:${r}`, e[r])
        }), n
    },
    R = e => {
        const {
            prefixCls: t,
            separator: n = "/",
            style: r,
            className: o,
            rootClassName: l,
            routes: c,
            items: d,
            children: y,
            itemRender: b,
            params: p = {}
        } = e, O = Xe(e, ["prefixCls", "separator", "style", "className", "rootClassName", "routes", "items", "children", "itemRender", "params"]), {
            getPrefixCls: h,
            direction: u,
            breadcrumb: g
        } = i.useContext(F);
        let f;
        const m = h("breadcrumb", t),
            [x, I, j] = ze(m),
            s = He(d, c),
            v = Ae(m, b);
        if (s && s.length > 0) {
            const S = [],
                N = d || c;
            f = s.map((C, w) => {
                const {
                    path: Q,
                    key: T,
                    type: J,
                    menu: H,
                    overlay: X,
                    onClick: Y,
                    className: Z,
                    separator: ee,
                    dropdownProps: re
                } = C, _ = De(p, Q);
                _ !== void 0 && S.push(_);
                const D = T ?? w;
                if (J === "separator") return i.createElement(E, {
                    key: D
                }, ee);
                const $ = {},
                    te = w === s.length - 1;
                H ? $.menu = H : X && ($.overlay = X);
                let {
                    href: A
                } = C;
                return S.length && _ !== void 0 && (A = `#/${S.join("/")}`), i.createElement(K, Object.assign({
                    key: D
                }, $, q(C, {
                    data: !0,
                    aria: !0
                }), {
                    className: Z,
                    dropdownProps: re,
                    href: A,
                    separator: te ? "" : n,
                    onClick: Y,
                    prefixCls: m
                }), v(C, p, N, S, A))
            })
        } else if (y) {
            const S = G(y).length;
            f = G(y).map((N, C) => {
                if (!N) return N;
                const w = C === S - 1;
                return se(N, {
                    separator: w ? "" : n,
                    key: C
                })
            })
        }
        const P = k(m, g == null ? void 0 : g.className, {
                [`${m}-rtl`]: u === "rtl"
            }, o, l, I, j),
            U = Object.assign(Object.assign({}, g == null ? void 0 : g.style), r);
        return x(i.createElement("nav", Object.assign({
            className: P,
            style: U
        }, O), i.createElement("ol", null, f)))
    };
R.Item = V;
R.Separator = E;
const Me = e => {
        const {
            student: t,
            group: n
        } = e;
        return !t || !n ? a.jsx("div", {
            style: {
                height: 154
            }
        }) : a.jsxs("div", {
            className: "flex maxWidth between vc",
            style: {
                padding: "40px 0px"
            },
            children: [a.jsxs("div", {
                children: [a.jsxs(R, {
                    children: [a.jsx(R.Item, {
                        children: a.jsx(Oe, {
                            to: `/class/${n._id}`,
                            children: n.name
                        })
                    }), a.jsx(R.Item, {
                        children: "Student Progress"
                    })]
                }), a.jsx("div", {
                    style: {
                        fontSize: "2em",
                        fontWeight: le.UltraBold,
                        marginTop: 2
                    },
                    children: t.name
                }), a.jsx("div", {
                    style: {
                        marginTop: "0.1em"
                    },
                    children: t.email
                })]
            }), a.jsx("div", {
                children: e.children
            })]
        })
    },
    Ge = "group-member-reports",
    Le = (e, t) => Ie({
        queryKey: [Ge, t, {
            page: e
        }],
        keepPreviousData: !0,
        staleTime: 1e3 * 60,
        retry: 2,
        queryFn: () => ce({
            url: "/api/game-report/fetch-by-group-member",
            data: {
                page: e,
                groupMemberId: t
            }
        })
    }),
    B = 35,
    qe = e => {
        const [t, n] = i.useState();
        return e.totalItems ? a.jsxs("div", {
            id: "student-report-container",
            children: [a.jsx(me, {
                theme: {
                    components: {
                        Table: {
                            cellPaddingBlock: 16,
                            cellPaddingInline: B
                        }
                    }
                },
                children: a.jsx(Te, {
                    dataSource: e.data.map(r => ({
                        key: r._id,
                        ...r
                    })),
                    columns: We,
                    bordered: !0,
                    pagination: !1,
                    tableLayout: "auto",
                    size: "large",
                    onRow: r => ({
                        onClick: () => {
                            n(r)
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
            }), e.pagination ? a.jsx("div", {
                className: "maxWidth flex-center",
                style: {
                    padding: `${B}px 0px`
                },
                children: e.pagination
            }) : null, t ? a.jsx(Ee, {
                playerName: e.playerName,
                gameReportId: t.gameReport,
                participantId: t._id,
                close: () => {
                    n(void 0)
                }
            }) : null]
        }) : a.jsxs("div", {
            style: {
                padding: B,
                flex: 1
            },
            className: "flex-column flex-center",
            children: [a.jsx("img", {
                src: "/client/img/dashboard/report.svg",
                style: {
                    height: 80
                }
            }), a.jsxs("div", {
                style: {
                    textAlign: "center",
                    fontSize: "1.15em",
                    marginTop: 10
                },
                children: ["Check back here after this student plays a live game or assignment!", " ", a.jsx("br", {}), "All of their reports will show up here for you to easily check in on their progress."]
            })]
        })
    },
    We = [{
        title: "Kit",
        dataIndex: "kit",
        key: "report-kit",
        render: (e, t) => a.jsx(Pe, {
            kit: e,
            dateId: t._id
        })
    }, {
        title: "Individual Accuracy",
        dataIndex: "accuracy",
        key: "report-accuracy",
        render: e => a.jsx(Ne, {
            percent: e
        })
    }, {
        title: "Questions Answered",
        dataIndex: "questionsAnswered",
        key: "questions-answered",
        render: e => de(e)
    }],
    et = () => {
        var j;
        const {
            id: e,
            studentId: t
        } = pe(), [n, r] = ue(), o = Math.max(1, Number(n.get("page")) ?? 1), [l, c] = i.useState(0), d = i.useRef(null);
        Re(d, s => {
            var v;
            c(((v = s.target) == null ? void 0 : v.offsetTop) ?? 0)
        });
        const {
            isLoading: y,
            error: b,
            data: p
        } = ye(e), {
            isLoading: O,
            error: h,
            data: u,
            isFetching: g
        } = Le(o, t);
        i.useEffect(() => {
            window.scrollTo(0, 0)
        }, [o]);
        const f = i.useMemo(() => {
                if (b) return b;
                if (h) return h;
                if (p && !p.members.find(v => v._id === t)) return {
                    message: {
                        text: "This link is invalid. This student may have been removed from your class."
                    }
                }
            }, [b, e, p, h]),
            m = (j = p == null ? void 0 : p.members) == null ? void 0 : j.find(s => s._id === t),
            x = !u || !(u != null && u.totalItems) ? null : a.jsx(we, {
                total: u.totalItems,
                current: o,
                onPageChange: s => {
                    r({
                        page: s
                    })
                }
            }),
            I = () => {
                var s;
                return ge() ? y || O ? a.jsx(be, {
                    paragraph: {
                        rows: 4
                    },
                    title: !1,
                    active: !0,
                    className: "maxWidth",
                    style: {
                        padding: 35
                    }
                }) : f ? a.jsx("div", {
                    style: {
                        padding: 35
                    },
                    children: ((s = f == null ? void 0 : f.message) == null ? void 0 : s.text) || "There was an error fetching this class. Please try again."
                }) : a.jsx(qe, {
                    data: u.items,
                    isFetching: g,
                    playerName: m == null ? void 0 : m.name,
                    containerTopOffset: l,
                    pagination: x,
                    totalItems: u.totalItems
                }) : a.jsx("div", {
                    style: {
                        padding: 35
                    },
                    children: "Upgrade to view student performance data."
                })
            };
        return a.jsxs(he, {
            children: [a.jsx(fe, {
                title: (m == null ? void 0 : m.name) || "Student"
            }), a.jsx(xe, {
                id: e
            }), a.jsxs(je, {
                ref: d,
                children: [f ? a.jsx("div", {
                    style: {
                        height: 35
                    }
                }) : a.jsx(Me, {
                    student: m,
                    group: p,
                    children: x
                }), a.jsx(ve, {
                    className: "flex",
                    style: {
                        padding: 0
                    },
                    children: I()
                })]
            })]
        })
    };
export {
    et as
    default
};