import {
    r as i,
    al as F,
    aI as q,
    am as k,
    ai as ne,
    aj as oe,
    aL as ae,
    ak as H,
    aM as ie,
    aF as L,
    aQ as se,
    j as a,
    F as le,
    y as ce,
    E as me,
    b5 as de,
    n as pe,
    z as ue,
    T as fe,
    f as ge,
    A as be
} from "./_index.js";
import {
    u as ye,
    C as he,
    G as xe,
    a as je,
    b as ve
} from "./App-16.js";
import {
    A as Oe
} from "./AccessibleAnchor.js";
import {
    R as Ce
} from "./DownOutlined.js";
import {
    a as Se
} from "./index-10.js";
import {
    u as Ie
} from "./useQuery.js";
import {
    a as Pe,
    b as Re,
    u as Ne,
    R as we
} from "./ReportAccuracyMeter.js";
import {
    G as Ee
} from "./GameReportCompletionLink.js";
import {
    F as Te
} from "./useClasses.js";
import "./Paper.js";
import "./index-2.js";
import "./index-3.js";
import "./index-4.js";
import "./context.js";
import "./NavigateTo.js";
import "./index-16.js";
import "./useForm.js";
import "./useBreakpoint.js";
import "./useForceUpdate.js";
import "./QuestionCircleOutlined.js";
import "./index-5.js";
import "./FontAwesomeIcon.js";
import "./CheckOutlined.js";
import "./EditOutlined.js";
import "./UsergroupAddOutlined.js";
import "./DeleteOutlined.js";
import "./StopPropagation.js";
import "./App-2.js";
import "./Sizes.js";
import "./motion.js";
import "./index-1.js";
import "./price.js";
import "./TrackPostHogEvent.js";
import "./StarOutlined.js";
import "./App-5.js";
import "./Shortcut.js";
import "./Names.js";
import "./App-4.js";
import "./mobxreact.esm.js";
import "./index-6.js";
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
import "./move.js";
import "./getCloudinaryUrl.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./progress.js";
import "./Player.js";
import "./Question.js";
import "./ImagePreview.js";
import "./LazyLatexRenderer.js";
import "./index-11.js";
import "./useBubbleLock.js";
import "./index-12.js";
import "./CopyOutlined.js";
import "./DownloadOutlined.js";
import "./BarChartOutlined.js";
import "./styleChecker.js";
import "./index-8.js";
import "./index-13.js";
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
const V = e => {
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
    K = e => {
        const {
            prefixCls: t,
            children: n,
            href: r
        } = e, o = z(e, ["prefixCls", "children", "href"]), {
            getPrefixCls: l
        } = i.useContext(F), c = l("breadcrumb", t);
        return i.createElement(V, Object.assign({}, o, {
            prefixCls: c
        }), W(c, o, n, r))
    };
K.__ANT_BREADCRUMB_ITEM = !0;
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
                    padding: `0 ${H(e.paddingXXS)}`,
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
                    padding: `0 ${H(e.paddingXXS)}`,
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
var G = function(e, t) {
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
    } = e, r = G(e, ["breadcrumbName", "children"]), o = Object.assign({
        title: t
    }, r);
    return n && (o.menu = {
        items: n.map(l => {
            var {
                breadcrumbName: c
            } = l, d = G(l, ["breadcrumbName"]);
            return Object.assign(Object.assign({}, d), {
                title: c
            })
        })
    }), o
}

function Me(e, t) {
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
    N = e => {
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
            s = Me(d, c),
            v = Ae(m, b);
        if (s && s.length > 0) {
            const S = [],
                R = d || c;
            f = s.map((C, w) => {
                const {
                    path: Q,
                    key: T,
                    type: J,
                    menu: M,
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
                M ? $.menu = M : X && ($.overlay = X);
                let {
                    href: A
                } = C;
                return S.length && _ !== void 0 && (A = `#/${S.join("/")}`), i.createElement(V, Object.assign({
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
                }), v(C, p, R, S, A))
            })
        } else if (y) {
            const S = L(y).length;
            f = L(y).map((R, C) => {
                if (!R) return R;
                const w = C === S - 1;
                return se(R, {
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
N.Item = K;
N.Separator = E;
const He = e => {
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
                children: [a.jsxs(N, {
                    children: [a.jsx(N.Item, {
                        children: a.jsx(Oe, {
                            to: `/class/${n._id}`,
                            children: n.name
                        })
                    }), a.jsx(N.Item, {
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
    Le = "group-member-reports",
    Ge = (e, t) => Ie({
        queryKey: [Le, t, {
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
        render: e => a.jsx(Re, {
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
        Ne(d, s => {
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
        } = Ge(o, t);
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
                }) : a.jsx(He, {
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