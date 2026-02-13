import {
    j as t,
    d as v,
    U as m,
    aa as k,
    B as c,
    u as w,
    b as T,
    aW as p,
    t as d,
    M as u,
    e as C,
    b5 as L,
    F as S
} from "./_index.js";
import {
    c as M,
    S as h
} from "./index-2.js";
import {
    T as s
} from "./index-14.js";
import {
    I as P
} from "./index-3.js";
import {
    s as x
} from "./index-4.js";
import {
    A as y
} from "./AccessibleAnchor.js";
import {
    C as g
} from "./Button.js";
import {
    S as A,
    J as N
} from "./App-41.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./index-5.js";
import "./CheckOutlined.js";
import "./CopyOutlined.js";
import "./context.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./FixSpinePlugin.js";
import "./GetAssetPath.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./howler.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./TutorialConsts.js";
import "./ActionButton.js";
import "./index-18.js";
import "./FontAwesomeIcon.js";
import "./Centered.js";
import "./CapitalizeFirstLetter.js";
import "./motion.js";
import "./SixteenByNineScaler.js";
import "./index-20.js";
import "./index-22.js";
import "./index-1.js";
import "./progress.js";
import "./ElementIds.js";
import "./SeasonTicketName.js";
import "./useQuery.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./util-1.js";
import "./util-2.js";
import "./Shortcut.js";
import "./Names.js";
import "./useWillUnmount.js";
import "./use-motion-value.js";
import "./use-transform.js";
import "./index-6.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
import "./index-9.js";
import "./index-23.js";
import "./useIntervalWhen.js";
import "./index-10.js";
import "./move.js";
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./useDebouncedValue.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
const a = v.div.attrs({
        className: "maxWidth"
    })`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 8px;
`,
    n = i => t.jsx(s.Title, {
        style: {
            fontFamily: m.FugazOne,
            textTransform: "uppercase",
            marginBottom: "0.2em"
        },
        level: 3,
        children: i.children
    }),
    E = i => {
        const e = `${k()}/creative/map/${i.id}`,
            r = () => {
                M(e), x.success("Link copied to clipboard!")
            };
        return t.jsxs(a, {
            children: [t.jsxs("div", {
                children: [t.jsx(n, {
                    children: "Public Link"
                }), t.jsx(s.Text, {
                    children: "This is a direct link to play your map! The link never expires as long as your map remains published."
                })]
            }), t.jsxs("div", {
                className: "flex vc",
                style: {
                    marginTop: 10
                },
                children: [t.jsx(P, {
                    style: {
                        width: "100%"
                    },
                    type: "text",
                    value: e,
                    readOnly: !0
                }), t.jsx(c, {
                    type: "primary",
                    onClick: r,
                    style: {
                        marginLeft: 10
                    },
                    children: "Copy Link"
                })]
            })]
        })
    },
    F = "https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative",
    W = i => {
        const [e, r, b] = w(!1), j = () => {
            e || (r(), window.addEventListener("MAP_SAVED", () => {
                p({
                    url: "/api/created-map/listing/publish-new-version/" + window._mapId,
                    success: () => {
                        u.success({
                            title: "Changes published!",
                            content: "Players will now experience the latest version of your map!"
                        }), i.refetch()
                    },
                    error: f => {
                        d({
                            e: f,
                            default: {
                                title: "Error publishing changes",
                                content: "Please try again."
                            }
                        })
                    },
                    both: b
                })
            }, {
                once: !0
            }), A(N.save, {
                ignoreNotification: !0
            }))
        }, l = T.unix(i.lastPublish);
        return t.jsxs(a, {
            children: [t.jsxs("div", {
                children: [t.jsx(n, {
                    children: "Publish New Version"
                }), t.jsxs(s.Text, {
                    children: ["Your map was last published on", " ", t.jsxs("b", {
                        children: [l.format("MMMM Do"), " at ", l.format("h:mmA"), "."]
                    }), " ", "If you've made changes since then, click the button below to publish them!"]
                })]
            }), t.jsx("div", {
                style: {
                    marginTop: 15
                },
                children: t.jsx(c, {
                    block: !0,
                    type: "primary",
                    loading: e,
                    onClick: j,
                    children: "Publish Changes (Free)"
                })
            }), t.jsx("div", {
                style: {
                    marginTop: 9
                },
                children: t.jsxs("div", {
                    style: {
                        fontSize: 12,
                        lineHeight: 1.2,
                        opacity: .9,
                        color: "rgba(255,255,255,0.9)"
                    },
                    children: ["Ensure everything in your map follows our", " ", t.jsx(y, {
                        to: F,
                        external: !0,
                        target: "_blank",
                        style: {
                            color: g.Yellow,
                            textDecoration: "underline"
                        },
                        children: "community guidelines."
                    }), " ", "Failure to do so may result in account suspension."]
                })
            })]
        })
    },
    D = i => t.jsxs(a, {
        children: [t.jsxs("div", {
            children: [t.jsx(n, {
                children: "Analytics"
            }), t.jsx(s.Text, {
                children: "See how many times your map has been played!"
            })]
        }), t.jsxs(h, {
            direction: "vertical",
            size: 12,
            style: {
                marginTop: 15
            },
            className: "maxWidth",
            children: [t.jsx(o, {
                label: "Total Plays",
                value: i.total
            }), t.jsx(o, {
                label: "Last 30 Days",
                value: i.last30
            }), t.jsx(o, {
                label: "Last 7 Days",
                value: i.last7
            })]
        })]
    }),
    o = i => t.jsxs("div", {
        className: "maxWidth flex-column flex-center",
        style: {
            padding: 20,
            background: "rgba(255,255,255,0.1)",
            color: C.White,
            borderRadius: 6,
            lineHeight: 1
        },
        children: [t.jsx("div", {
            style: {
                fontFamily: m.FugazOne,
                textTransform: "uppercase",
                opacity: .8,
                fontSize: 14,
                marginBottom: 8
            },
            children: i.label
        }), t.jsx("div", {
            style: {
                fontSize: 32,
                fontWeight: S.Black
            },
            children: L(i.value)
        })]
    }),
    I = i => {
        const e = () => {
            u.confirm({
                title: "Are you sure you want to unpublish?",
                content: "Unpublishing is permanent. If you republish in the future, the link to your map & play counts will reset.",
                okText: "Yes",
                onOk: () => {
                    p({
                        url: `/api/created-map/listing/remove/${i.id}`,
                        success: () => {
                            x.success("Map unpublished!"), i.close()
                        },
                        error: r => {
                            d({
                                e: r,
                                default: {
                                    title: "Error unpublishing map"
                                }
                            })
                        }
                    })
                }
            })
        };
        return t.jsx("div", {
            children: t.jsx(y, {
                style: {
                    color: g.Yellow,
                    textDecoration: "underline"
                },
                onClick: e,
                children: "Unpublish map"
            })
        })
    },
    Zt = i => {
        const {
            data: e
        } = i;
        return t.jsxs(h, {
            className: "maxWidth",
            direction: "vertical",
            size: 20,
            children: [t.jsx(E, {
                id: e._id
            }), t.jsx(W, {
                lastPublish: e.lastPublish,
                refetch: i.refetch
            }), t.jsx(D, {
                total: e.plays.total,
                last30: e.plays.last30,
                last7: e.plays.last7
            }), t.jsx(I, {
                id: e._id,
                close: i.close
            })]
        })
    };
export {
    Zt as
    default
};