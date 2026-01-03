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
} from "./index-JueF_e_O.js";
import {
    u as G,
    C as F,
    G as S,
    a as L,
    c as M,
    b as O
} from "./App-CdZ9UGa2.js";
import {
    u as V
} from "./useQuery-Bxz3ggSG.js";
import {
    N as x
} from "./NavigateTo-B9Fkdix9.js";
import {
    a as _,
    b as $,
    u as z,
    R as W
} from "./ReportAccuracyMeter-DdK4SMWy.js";
import {
    R as q
} from "./ReportParticipantsAndGroups-CfxGvP0V.js";
import {
    F as H
} from "./useClasses-BLMDwT0Q.js";
import {
    U as K
} from "./App-BKUv5aDr.js";
import "./Paper-Cctx9C_2.js";
import "./index-Dx05C7sF.js";
import "./index-CrBw-JUo.js";
import "./index-C3nE64hA.js";
import "./context-CjY8B7F1.js";
import "./index-Cb9CjGY0.js";
import "./index-D2z5EOhv.js";
import "./index-DwJM4HGs.js";
import "./move-BQfrK9lH.js";
import "./useForm-BgB5oypL.js";
import "./useBreakpoint-CLaqhf0_.js";
import "./useForceUpdate-B8fMqphv.js";
import "./QuestionCircleOutlined-BQK1Tego.js";
import "./FontAwesomeIcon-CiZylb_V.js";
import "./CheckOutlined-BVeheXUJ.js";
import "./EditOutlined-B6aDouN2.js";
import "./UsergroupAddOutlined-DHD6lQOl.js";
import "./DeleteOutlined-pTRLjAw2.js";
import "./StopPropagation-jekF225_.js";
import "./App-Cn07I0ls.js";
import "./Shortcut-CMqBR2Ku.js";
import "./Names-DfDh6qGd.js";
import "./AccessibleAnchor-C5KFFiup.js";
import "./App-CVsQbxzN.js";
import "./mobxreact.esm-Ws-CV3HT.js";
import "./index-DWUaWm5X.js";
import "./index-txCQgMuj.js";
import "./index-WAenXna7.js";
import "./colors-DeP7YnlJ.js";
import "./motion-C-xmDj6Z.js";
import "./useWarningOnMountInDevelopment-VsZQFfAu.js";
import "./getCloudinaryUrl-Drn97BLG.js";
import "./polished.esm-BFSwQt3g.js";
import "./inheritsLoose-CU-hyjUj.js";
import "./progress-9Vcji5fP.js";
import "./styleChecker-C-hCCLqu.js";
import "./index-7_9qGeDt.js";
import "./DownOutlined-2rilSz_X.js";
import "./index-QLK40o1i.js";
import "./useBubbleLock-iAvgPw8B.js";
import "./index-BHb_x4P0.js";
import "./Sizes-BhgpZp_e.js";
import "./price-1Xs9YDh1.js";
import "./TrackPostHogEvent-BOHwnqir.js";
import "./StarOutlined-BGGlbh6F.js";
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