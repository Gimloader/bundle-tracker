import {
    y as T,
    j as t,
    E as b,
    n as k,
    z as w,
    r as n,
    f as I,
    C as N,
    T as A,
    A as E
} from "./_index.js";
import {
    u as G,
    C as F,
    G as S,
    a as L,
    c as M,
    b as O
} from "./App-16.js";
import {
    u as V
} from "./useQuery.js";
import {
    N as x
} from "./NavigateTo.js";
import {
    a as _,
    b as $,
    u as z,
    R as W
} from "./ReportAccuracyMeter.js";
import {
    R as q
} from "./ReportParticipantsAndGroups.js";
import {
    F as H
} from "./useClasses.js";
import {
    U as K
} from "./App-2.js";
import "./Paper.js";
import "./index-2.js";
import "./index-3.js";
import "./index-4.js";
import "./context.js";
import "./index-16.js";
import "./index-10.js";
import "./index-5.js";
import "./move.js";
import "./useForm.js";
import "./useBreakpoint.js";
import "./useForceUpdate.js";
import "./QuestionCircleOutlined.js";
import "./FontAwesomeIcon.js";
import "./CheckOutlined.js";
import "./EditOutlined.js";
import "./UsergroupAddOutlined.js";
import "./DeleteOutlined.js";
import "./StopPropagation.js";
import "./App-5.js";
import "./Shortcut.js";
import "./Names.js";
import "./AccessibleAnchor.js";
import "./App-4.js";
import "./mobxreact.esm.js";
import "./index-1.js";
import "./index-6.js";
import "./index-15.js";
import "./colors.js";
import "./motion.js";
import "./useWarningOnMountInDevelopment.js";
import "./getCloudinaryUrl.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./progress.js";
import "./styleChecker.js";
import "./index-8.js";
import "./DownOutlined.js";
import "./index-11.js";
import "./useBubbleLock.js";
import "./index-13.js";
import "./Sizes.js";
import "./price.js";
import "./TrackPostHogEvent.js";
import "./StarOutlined.js";
const U = "group-reports",
    B = (e, r) => V({
        queryKey: [U, r, {
            page: e
        }],
        keepPreviousData: !0,
        staleTime: 1e3 * 60,
        retry: 2,
        queryFn: () => T({
            url: "/api/game-report/fetch-all",
            data: {
                page: e,
                groupId: r
            }
        })
    }),
    c = 35,
    Q = e => e.totalItems ? t.jsxs("div", {
        id: "group-reports-container",
        className: "maxWidth",
        children: [t.jsx(b, {
            theme: {
                components: {
                    Table: {
                        cellPaddingBlock: 16,
                        cellPaddingInline: c
                    }
                }
            },
            children: t.jsx(H, {
                className: "maxWidth",
                dataSource: e.data.map(r => ({
                    key: r._id,
                    ...r
                })),
                columns: Y,
                bordered: !0,
                pagination: !1,
                tableLayout: "auto",
                size: "large",
                onRow: r => ({
                    onClick: () => {
                        x(`/report/${r._id}`)
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
        }), e.pagination ? t.jsx("div", {
            className: "maxWidth flex-center",
            style: {
                padding: `${c}px 0px`
            },
            children: e.pagination
        }) : null]
    }) : t.jsxs("div", {
        style: {
            padding: c,
            flex: 1
        },
        className: "flex-column flex-center",
        children: [t.jsx("img", {
            src: "/client/img/dashboard/report.svg",
            style: {
                height: 80
            }
        }), t.jsxs("div", {
            style: {
                textAlign: "center",
                fontSize: "1.15em",
                marginTop: 10
            },
            children: ["Check back here after you host a live game or assignment with this class! ", t.jsx("br", {}), "All their reports will be displayed here for you to easily check in on their progress."]
        })]
    }),
    Y = [{
        title: "Kit",
        dataIndex: "kit",
        key: "report-kit",
        render: (e, r) => t.jsx(_, {
            kit: e,
            dateId: r._id,
            assignmentId: r.mapAssignment
        })
    }, {
        title: "Accuracy",
        dataIndex: "accuracy",
        key: "report-accuracy",
        render: e => t.jsx($, {
            percent: e
        })
    }, {
        title: "Participants",
        dataIndex: "groups",
        key: "report-groups",
        render: (e, r) => t.jsx(q, {
            reportId: r._id,
            participants: r.participants,
            groups: []
        })
    }],
    Yt = () => {
        const {
            id: e
        } = k(), [r, h] = w(), p = Math.max(1, Number(r.get("page")) ?? 1), {
            isLoading: y,
            error: m,
            data: o
        } = G(e), {
            isLoading: j,
            error: l,
            data: i,
            isFetching: P
        } = B(p, e), [v, C] = n.useState(0), d = n.useRef(null);
        z(d, s => {
            var f;
            C(((f = s.target) == null ? void 0 : f.offsetTop) ?? 0)
        });
        const a = n.useMemo(() => {
            if (m) return m;
            if (l) return l
        }, [m, e, o, l]);
        n.useEffect(() => {
            window.scrollTo(0, 0)
        }, [p]);
        const u = !i || !i.totalItems ? null : t.jsx(W, {
                total: i.totalItems,
                current: p,
                onPageChange: s => {
                    h({
                        page: s
                    })
                }
            }),
            R = () => {
                var s;
                return y || j ? t.jsx(E, {
                    paragraph: {
                        rows: 4
                    },
                    title: !1,
                    active: !0,
                    className: "maxWidth",
                    style: {
                        padding: 35
                    }
                }) : a ? t.jsx("div", {
                    style: {
                        padding: 35
                    },
                    children: ((s = a == null ? void 0 : a.message) == null ? void 0 : s.text) || "There was an error fetching this class. Please try again."
                }) : t.jsx(Q, {
                    data: (i == null ? void 0 : i.items) ?? [],
                    pagination: u,
                    containerTopOffset: v,
                    isFetching: P,
                    totalItems: (i == null ? void 0 : i.totalItems) ?? 0
                })
            },
            g = I();
        return t.jsxs(F, {
            style: g ? void 0 : {
                filter: "blur(4px)"
            },
            children: [t.jsx(K, {
                id: "class progress",
                visible: !g,
                copy: {
                    title: "View class progress with Pro",
                    description: `To view all reports for a class in one place, upgrade to ${N} Pro.`
                },
                close: () => {
                    x(`/class/${e}`)
                }
            }), t.jsx(A, {
                title: o != null && o.name ? `${o==null?void 0:o.name} | Reports` : "Class Reports"
            }), t.jsx(S, {
                id: e
            }), t.jsxs(L, {
                ref: d,
                children: [a ? t.jsx("div", {
                    style: {
                        height: 35
                    }
                }) : t.jsx(M, {
                    data: o,
                    customRightComponent: u
                }), t.jsx(O, {
                    className: "flex",
                    style: {
                        padding: 0
                    },
                    children: R()
                })]
            })]
        })
    };
export {
    Yt as
    default
};