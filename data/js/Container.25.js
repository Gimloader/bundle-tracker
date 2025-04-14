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
r.register("lpcl1", (function(t, n) {
    var o;
    o = t.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return u
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("lpEVe"),
        s = r("kbKdI"),
        l = r("6qq5i"),
        c = r("cGP26");
    var u = () => (0, a.jsx)(c.default.Provider, {
        value: s.default,
        children: (0, a.jsx)(i.Provider, {
            ...s.default,
            children: (0, a.jsx)(l.default, {})
        })
    })
})), r.register("kbKdI", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("akYb4"),
        a = r("gwd5b");
    var i = {
        navigation: new(0, o.default),
        kits: new(0, a.default)
    }
})), r.register("akYb4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("kHqmx"),
        a = r("4MuSt");
    class i {
        constructor() {
            this.archiveModalShow = !1, (0, a.makeObservable)(this)
        }
    }(0, o.__decorate)([a.observable], i.prototype, "archiveModalShow", void 0);
    var s = i
})), r.register("gwd5b", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("kHqmx"),
        a = r("4MuSt");
    class i {
        constructor() {
            this.kitAttemptedAction = "open", (0, a.makeObservable)(this)
        }
    }(0, o.__decorate)([a.observable], i.prototype, "kitAttemptedAction", void 0);
    var s = i
})), r.register("6qq5i", (function(t, n) {
    e(t.exports, "default", (function() {
        return P
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("2FDaO"),
        s = r("lKmIF"),
        l = r("9lPoC"),
        c = r("69SUA"),
        u = r("iMOcM"),
        d = r("90GFX"),
        f = r("453BZ"),
        p = r("8j47p"),
        h = r("2ZILj"),
        g = r("fzXfF"),
        m = r("6kjRl"),
        x = r("91OKC"),
        v = r("cHCps"),
        y = r("aYjbz"),
        b = r("iE2C7"),
        w = r("hSz8d"),
        j = r("b1oE9"),
        k = r("py2Xr"),
        C = r("03waW"),
        S = r("3cEI4"),
        E = r("77qSl");
    let O, M, T, I = e => e;
    const F = i.default.div.attrs({
            className: "maxAll flex-column"
        })(O || (O = I``)),
        N = i.default.div(M || (M = I`
  flex: 1;
  display: flex;
  font-family: ${0};
`), c.Fonts.SFPro),
        D = i.default.div.attrs({
            id: "mainContainer",
            className: "flex-column"
        })(T || (T = I`
  height: 100%;
  background: ${0};
`), s.default.Snow);
    var P = () => {
        const [e, t, r] = (0, u.useBoolean)(!1), [n, i] = a.useState(!1), [s, c] = a.useState(!1), O = a.useRef(null), M = (0, E.useMediaMatch)("(max-width: 680px)"), T = (0, u.getUser)();
        if (!T) return null;
        const I = (() => {
            const e = [];
            return (0, u.isStudent)() && e.push({
                id: "home",
                label: "Home",
                icon: (0, o.jsx)(k.default, {
                    name: "fas fa-home"
                }),
                path: j.HOME,
                otherMatchingPaths: [j.DASHBOARD]
            }), e.push({
                id: "kits",
                label: "Kits",
                icon: (0, o.jsx)(k.default, {
                    name: "fas fa-box-open"
                }),
                path: j.KITS,
                otherMatchingPaths: (0, C.IsEducator)() ? [j.DASHBOARD, j.KITS_SELECTION] : [j.KITS_SELECTION]
            }), (0, u.isStudent)() || e.push({
                id: "reports",
                label: "Reports",
                icon: (0, o.jsx)(k.default, {
                    name: "fas fa-analytics"
                }),
                path: j.REPORTS
            }, {
                id: "assignments",
                label: "Assignments",
                path: j.ASSIGNMENTS,
                icon: (0, o.jsx)(k.default, {
                    name: "fas fa-file-alt"
                })
            }, {
                id: "classes",
                label: "Classes",
                path: j.CLASSES,
                icon: (0, o.jsx)(k.default, {
                    name: "fas fa-users-class"
                })
            }), (0, u.isStudent)() && e.push({
                id: "join-game",
                label: "Join Game",
                path: j.JOIN,
                target: "_blank",
                icon: (0, o.jsx)(k.default, {
                    name: "fas fa-gamepad"
                })
            }), e
        })();
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(v.default, {
                alpha: w.SiteHeaderAlpha.none,
                children: (0, o.jsx)(b.default, {
                    options: I,
                    rightSideContent: M ? null : (0, o.jsx)(S.default, {})
                })
            }), (0, o.jsxs)(F, {
                children: [(0, o.jsxs)(N, {
                    className: "disable-scrollbars",
                    children: [(0, o.jsx)(u.Title, {
                        title: "Dashboard"
                    }), (0, o.jsxs)(D, {
                        style: {
                            flex: 1
                        },
                        ref: O,
                        children: [(0, o.jsx)(y.default, {}), (0, o.jsx)(l.default, {})]
                    }), (0, o.jsx)(d.default, {})]
                }), (0, o.jsx)(f.default, {
                    openUpgradeModal: e => {
                        i(null != e && e), t()
                    }
                })]
            }), (0, o.jsx)(h.default, {
                upgradeModalVisible: e,
                proUpsellModalVisible: s
            }), (0, o.jsx)(g.default, {}), (0, o.jsx)(p.default, {
                id: n ? "dashboard-auto" : "dashboard",
                visible: e,
                close: r,
                showModes: !0
            }), T.type === x.PlanIds.proPass ? (0, o.jsx)(m.default, {
                onVisibleChange: c
            }) : null]
        })
    }
})), r.register("9lPoC", (function(t, n) {
    e(t.exports, "default", (function() {
        return w
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("5AtWd"),
        s = r("4jvIr"),
        l = r("2FDaO"),
        c = r("lKmIF"),
        u = r("LVqvj"),
        d = r("e9YHL"),
        f = r("3uz2P"),
        p = r("beXRF"),
        h = r("b1oE9"),
        g = r("iMOcM"),
        m = r("OzMyT");
    let x;
    const v = l.default.div.attrs({
        className: "flex-column"
    })(x || (x = (e => e)`
  color: ${0};
  flex: 1;
`), c.default.Black);
    let y;
    var b;
    (b = y || (y = {})).kits = "kits", b.reports = "reports", b.assignments = "assignments", b.classes = "classes", b.hub = "hub";
    var w = () => {
        const {
            pathname: e
        } = (0, p.useLocation)(), t = a.useMemo((() => e ? (0, f.matchPath)({
            path: h.REPORTS
        }, e) ? y.reports : (0, f.matchPath)({
            path: h.ASSIGNMENTS
        }, e) ? y.assignments : (0, f.matchPath)({
            path: h.CLASSES
        }, e) ? y.classes : (0, f.matchPath)({
            path: h.HOME
        }, e) ? y.hub : (0, f.matchPath)({
            path: h.KITS
        }, e) || (0, f.matchPath)({
            path: h.KITS_SELECTION
        }, e) ? y.kits : (0, g.isStudent)() ? y.hub : y.kits : y.kits), [e]), r = a.useMemo((() => {
            switch (t) {
                case y.reports:
                    return (0, o.jsx)(m.DashboardReports, {});
                case y.assignments:
                    return (0, o.jsx)(s.default, {});
                case y.classes:
                    return (0, o.jsx)(u.default, {});
                case y.hub:
                    return (0, o.jsx)(d.default, {});
                default:
                    return (0, o.jsx)(i.default, {})
            }
        }), [t]);
        return (0, o.jsx)(v, {
            children: r
        })
    }
})), r.register("5AtWd", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("gvbd1"),
        s = r("5KsG5"),
        l = r("8cYLR"),
        c = r("b1oE9"),
        u = r("iMOcM"),
        d = r("iROck"),
        f = r("jbbXK"),
        p = r("jSP09"),
        h = r("jo1jb"),
        g = r("9WwVc"),
        m = r("3uz2P"),
        x = r("03waW");
    const v = a.lazy((() => r("bQjWy")));
    var y = () => {
        var e, t, r, n, y;
        const {
            data: b,
            isLoading: w
        } = (0, h.default)(), {
            id: j
        } = (0, m.useParams)(), k = (0, x.IsEducator)() && (null === (e = (0, u.getUser)()) || void 0 === e ? void 0 : e.schoolId) && "school" === j;
        var C;
        const S = null !== (C = null === (t = null == b || null === (r = b.folders) || void 0 === r ? void 0 : r.find((e => e._id === j))) || void 0 === t ? void 0 : t._id) && void 0 !== C ? C : "";
        if (w) return null;
        const E = () => {
                var e;
                return (null == b || null === (e = b.games) || void 0 === e ? void 0 : e.length) ? (0, o.jsx)(i.default, {
                    kits: null == b ? void 0 : b.games,
                    folders: null == b ? void 0 : b.folders,
                    selectedFolder: S
                }) : (0, o.jsx)(l.default, {
                    image: "kit",
                    title: "Kits",
                    description: (0, u.isStudent)() ? "Kits contain multiple choice questions. Create a kit and study it with any of our game modes!" : "Kits are live learning games for your class. They include all the content your students will learn in a game.",
                    button: "New Kit",
                    onClick: () => (0, d.NavigateTo)(c.KIT_CREATOR)
                })
            },
            O = (null == b ? void 0 : b.folders.length) || (null === (n = (0, u.getUser)()) || void 0 === n ? void 0 : n.schoolId);
        return O || (null == b || null === (y = b.games) || void 0 === y ? void 0 : y.length) ? (0, o.jsx)(p.default, {
            header: (0, o.jsx)("div", {
                className: "maxWidth",
                children: (0, o.jsx)(s.default, {
                    title: "Kits",
                    customUnderTitleComponent: O ? (0, o.jsx)("div", {
                        style: {
                            marginTop: 13
                        },
                        children: (0, o.jsx)(g.default, {
                            schoolLibraryScreenOpen: k,
                            openSchoolLibraryScreen: () => {
                                (0, d.NavigateTo)("/kits/school")
                            },
                            folders: null !== (M = null == b ? void 0 : b.folders) && void 0 !== M ? M : [],
                            selectedFolder: S
                        })
                    }) : null,
                    buttonIcon: (0, o.jsx)(f.default, {}),
                    buttonLink: c.KIT_CREATOR,
                    buttonText: "New Kit"
                })
            }),
            children: (0, o.jsx)(a.Suspense, {
                fallback: null,
                children: k ? (0, o.jsx)(v, {}) : E()
            })
        }) : E();
        var M
    }
})), r.register("gvbd1", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2QWuZ"),
        i = r("2cVVi"),
        s = r("py2Xr"),
        l = r("iMOcM");
    var c = e => {
        var t;
        const r = [],
            n = [],
            c = null === (t = e.folders) || void 0 === t ? void 0 : t.find((t => t._id === e.selectedFolder));
        e.kits.forEach((t => {
            if (e.selectedFolder) {
                if (!c) return;
                if (!c.games.includes(t._id)) return
            }
            t.isArchived ? n.push(t) : r.push(t)
        }));
        const u = [...r, ...n];
        var d;
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(l.Title, {
                title: null !== (d = null == c ? void 0 : c.title) && void 0 !== d ? d : "Kits"
            }), !u.length && e.selectedFolder ? (0, o.jsxs)("div", {
                className: "maxAll flex-center flex-column",
                children: [(0, o.jsx)("div", {
                    style: {
                        fontSize: 62
                    },
                    children: (0, o.jsx)(s.default, {
                        name: "fas fa-folder-open"
                    })
                }), (0, o.jsx)("div", {
                    style: {
                        fontSize: 16
                    },
                    children: "There are no kits in this folder."
                })]
            }) : (0, o.jsx)(o.Fragment, {
                children: (0, o.jsx)(i.default, {
                    duration: 400,
                    children: u.map((t => (0, o.jsx)("div", {
                        children: (0, o.jsx)(a.default, {
                            game: t,
                            folderId: e.selectedFolder
                        })
                    }, "dashboard-kit-" + t._id)))
                })
            })]
        })
    }
})), r.register("2QWuZ", (function(n, o) {
    e(n.exports, "IMAGE_SIZE", (function() {
        return X
    })), e(n.exports, "Content", (function() {
        return Z
    })), e(n.exports, "LeftSide", (function() {
        return ee
    })), e(n.exports, "KitInfo", (function() {
        return te
    })), e(n.exports, "KitTitle", (function() {
        return re
    })), e(n.exports, "KitDescription", (function() {
        return oe
    })), e(n.exports, "default", (function() {
        return le
    }));
    var a = r("hxEiv"),
        i = r("fywoC"),
        s = r("90UiM"),
        l = r("9g8O0"),
        c = r("83ivs"),
        u = r("90RCV"),
        d = r("fetBE"),
        f = r("7Sfsk"),
        p = r("fJ49E"),
        h = r("hy09K"),
        g = r("5WQCk"),
        m = r("93yIm"),
        x = r("7ECC6"),
        v = r("gnAdP"),
        y = r("13AMv"),
        b = r("fBuQJ"),
        w = r("5g49A"),
        j = r("2FDaO"),
        k = r("lKmIF"),
        C = r("69SUA"),
        S = r("lpEVe"),
        E = r("iMOcM"),
        O = r("b1oE9"),
        M = r("fK8ya"),
        T = r("gFDLo"),
        I = r("fke46"),
        F = r("cGP26"),
        N = r("8j47p"),
        D = r("E8kW5"),
        P = r("iROck"),
        $ = r("2nCEo"),
        z = r("jo1jb"),
        A = r("5wtYs"),
        R = r("sgWtV"),
        L = r("dFdNj"),
        B = r("lkPkP"),
        _ = r("03waW");
    let K, W, H, U, G, Y, V, Q, q, J = e => e;
    const X = 80,
        Z = j.default.div(K || (K = J`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`)),
        ee = j.default.div(W || (W = J`
  display: flex;
  align-items: center;
  width: calc(100% - 182px);
`)),
        te = j.default.div(H || (H = J`
  margin-right: 20px;
  flex: 1;
  margin-left: 12px;
  overflow: hidden;
  max-width: 100%;
`)),
        re = j.default.div(U || (U = J`
  font-weight: ${0};
  font-size: 23px;
  max-width: 100%;
  display: flex;
  align-items: center;
`), C.FontWeights.Bold),
        ne = j.default.div(G || (G = J`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`)),
        oe = j.default.div(Y || (Y = J`
  opacity: 0.7;
  font-size: 15;
  margin-top: -7px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`)),
        ae = j.default.div(V || (V = J`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`)),
        ie = j.default.div(Q || (Q = J`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`)),
        se = j.default.div(q || (q = J`
  display: flex;
  align-items: center;
  justify-content: center;
`));
    var le = (0, S.observer)((e => {
        const {
            kits: r,
            navigation: n
        } = i.useContext(F.default), [o, j, C] = (0, E.useBoolean)(!1), [S, K, W] = (0, E.useBoolean)(!1), [H, U] = i.useState(I.IExperiencePickerMode.liveGame), [G, Y] = i.useState(null), {
            game: V
        } = e, Q = i.useMemo((() => V.createdAt ? `Created ${t($)(V.createdAt).fromNow()}` : ""), [V.editCount, V.updatedAt, V.createdAt]), q = i.useCallback((e => !!V.isArchived && (r.kitAttemptedAction = e, n.archiveModalShow = !0, !0)), [V.isArchived]), J = () => {
            q("open") || (0, P.NavigateTo)(`/view/${V._id}`)
        }, le = () => {
            q("edit") || (0, P.NavigateTo)(O.KIT_CREATOR + `/${V._id}/editor`)
        }, ce = () => {
            q("copy") || (!(0, _.IsEducator)() || (0, E.isUpgraded)() ? (0, E.copyKit)({
                kitId: V._id,
                onSuccess: () => {
                    (0, z.invalidateKits)(), (0, P.NavigateTo)(O.KITS)
                },
                onFailure: () => (0, R.throwError)({
                    title: "Error copying kit"
                })
            }) : Y({
                id: "self-copy",
                ...L.UpgradeModal_CopyKit
            }))
        }, ue = () => {
            q("make changes to") || (!(0, _.IsEducator)() || (0, E.isUpgraded)() ? j() : Y({
                id: "folders",
                ...B.UpgradeModal_Folders
            }))
        }, de = e => {
            (0, E.request)({
                url: "/api/games/archived",
                data: {
                    id: V._id,
                    archived: e
                },
                success: () => (0, z.invalidateKits)()
            })
        }, fe = () => de(!0), pe = () => de(!1), he = () => {
            (0, E.request)({
                url: "/api/folders/removeGame",
                method: "post",
                data: {
                    gameId: V._id,
                    folderId: e.folderId
                },
                success: () => {
                    (0, z.invalidateKits)()
                },
                error: e => {
                    (0, E.throwMessageError)({
                        e: e,
                        default: {
                            title: "There was an error removing this Kit from this folder."
                        }
                    })
                }
            })
        }, ge = () => {
            b.default.confirm({
                title: "Are you sure you want to delete this kit?",
                cancelText: "No",
                okText: "Yes",
                onOk: () => {
                    (0, E.request)({
                        url: "/api/games/delete",
                        data: {
                            id: V._id
                        },
                        success: () => {
                            (0, z.invalidateKits)()
                        },
                        error: e => (0, E.throwMessageError)({
                            e: e,
                            default: {
                                title: "There was an error deleting this kit"
                            }
                        })
                    })
                }
            })
        };
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("div", {
                children: (0, a.jsx)(x.default, {
                    hoverable: !0,
                    style: {
                        width: "100%",
                        color: k.default.Black,
                        marginBottom: 12,
                        overflow: "hidden"
                    },
                    children: (0, a.jsxs)(Z, {
                        children: [(0, a.jsxs)(ee, {
                            onClick: J,
                            children: [(0, a.jsx)("div", {
                                children: (0, a.jsx)(M.default, {
                                    image: V.gif,
                                    size: X,
                                    blockModalOpen: !0,
                                    onClick: J
                                })
                            }), (0, a.jsxs)(te, {
                                children: [(0, a.jsxs)(re, {
                                    children: [(0, a.jsx)(ne, {
                                        children: V.title
                                    }), V.isArchived && (0, a.jsx)(w.default, {
                                        style: {
                                            marginLeft: 5
                                        },
                                        children: "Archived"
                                    })]
                                }), (0, a.jsx)(oe, {
                                    children: Q
                                })]
                            })]
                        }), (0, a.jsxs)(ae, {
                            children: [(0, a.jsxs)(ie, {
                                children: [(0, a.jsx)(m.default, {
                                    size: "large",
                                    type: "primary",
                                    icon: (0, a.jsx)(g.default, {}),
                                    style: {
                                        width: 140,
                                        backgroundColor: "#2e7d32",
                                        borderColor: "#2e7d32"
                                    },
                                    onClick: () => {
                                        q("play") || (U(I.IExperiencePickerMode.liveGame), K())
                                    },
                                    children: "Play Live"
                                }), !(0, E.isStudent)() && (0, a.jsx)(m.default, {
                                    size: "large",
                                    type: "primary",
                                    icon: (0, a.jsx)(h.default, {}),
                                    style: {
                                        marginTop: 5,
                                        width: 140,
                                        backgroundColor: "#3849aa",
                                        borderColor: "#3849aa"
                                    },
                                    onClick: () => {
                                        q("assign") || (U(I.IExperiencePickerMode.assignment), K())
                                    },
                                    children: "Assign HW"
                                })]
                            }), (0, a.jsx)(se, {
                                children: (0, a.jsx)(v.default, {
                                    overlay: (() => {
                                        const {
                                            isArchived: t
                                        } = V;
                                        return (0, a.jsxs)(y.default, {
                                            children: [(0, a.jsxs)(y.default.Item, {
                                                onClick: J,
                                                children: [(0, a.jsx)(p.default, {
                                                    style: {
                                                        marginRight: 7
                                                    }
                                                }), "Open"]
                                            }, "open"), (0, a.jsxs)(y.default.Item, {
                                                onClick: le,
                                                children: [(0, a.jsx)(c.default, {
                                                    style: {
                                                        marginRight: 7
                                                    }
                                                }), "Edit"]
                                            }, "edit"), (0, a.jsxs)(y.default.Item, {
                                                onClick: ce,
                                                children: [(0, a.jsx)(s.default, {
                                                    style: {
                                                        marginRight: 7
                                                    }
                                                }), "Copy"]
                                            }, "copy"), e.folderId ? null : (0, a.jsxs)(y.default.Item, {
                                                onClick: ue,
                                                children: [(0, a.jsx)(f.default, {
                                                    style: {
                                                        marginRight: 7
                                                    }
                                                }), "Add to Folder"]
                                            }, "folder"), e.folderId ? (0, a.jsxs)(y.default.Item, {
                                                onClick: he,
                                                children: [(0, a.jsx)(f.default, {
                                                    style: {
                                                        marginRight: 7
                                                    }
                                                }), "Remove from Folder"]
                                            }, "folder") : null, t ? (0, a.jsxs)(y.default.Item, {
                                                onClick: ge,
                                                children: [(0, a.jsx)(l.default, {
                                                    style: {
                                                        marginRight: 7
                                                    }
                                                }), "Delete"]
                                            }, "delete") : null, (0, a.jsxs)(y.default.Item, {
                                                onClick: t ? pe : fe,
                                                children: [(0, a.jsx)(d.default, {
                                                    style: {
                                                        marginRight: 7
                                                    }
                                                }), t ? "Unarchive" : "Archive"]
                                            }, "archive")]
                                        })
                                    })(),
                                    mouseLeaveDelay: .4,
                                    children: (0, a.jsx)(m.default, {
                                        shape: "circle",
                                        size: "middle",
                                        children: (0, a.jsx)(u.default, {})
                                    })
                                })
                            })]
                        })]
                    })
                })
            }), (0, a.jsx)(A.default, {
                open: o,
                close: C,
                kitId: V._id
            }), S ? H !== I.IExperiencePickerMode.assignment || (0, E.isUpgraded)() ? (0, a.jsx)(T.default, {
                gameId: V._id,
                close: W,
                mode: H
            }) : (0, a.jsx)(N.default, {
                id: "assignment creation",
                visible: S,
                close: W,
                copy: {
                    title: D.ASSIGNMENT_UPSELL_TITLE,
                    description: D.ASSIGNMENT_UPSELL_DESCRIPTION
                }
            }) : null, G ? (0, a.jsx)(N.default, {
                id: G.id,
                visible: !0,
                close: () => Y(null),
                copy: {
                    title: G.title,
                    description: G.description
                }
            }) : null]
        })
    }))
})), r.register("90UiM", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("7WFzL"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "CopyOutlined";
    var c = a.forwardRef(l)
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
})), r.register("9g8O0", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("ewhoP"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "DeleteOutlined";
    var c = a.forwardRef(l)
})), r.register("ewhoP", (function(t, r) {
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
                    d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                }
            }]
        },
        name: "delete",
        theme: "outlined"
    }
})), r.register("83ivs", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("6tWM4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "EditOutlined";
    var c = a.forwardRef(l)
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
})), r.register("fetBE", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("d22pb"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "FilterOutlined";
    var c = a.forwardRef(l)
})), r.register("d22pb", (function(t, r) {
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
                    d: "M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"
                }
            }]
        },
        name: "filter",
        theme: "outlined"
    }
})), r.register("fJ49E", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("dQIx5"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "FullscreenOutlined";
    var c = a.forwardRef(l)
})), r.register("dQIx5", (function(t, r) {
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
                    d: "M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"
                }
            }]
        },
        name: "fullscreen",
        theme: "outlined"
    }
})), r.register("hy09K", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("eLGc8"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "PaperClipOutlined";
    var c = a.forwardRef(l)
})), r.register("eLGc8", (function(t, r) {
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
                    d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"
                }
            }]
        },
        name: "paper-clip",
        theme: "outlined"
    }
})), r.register("5WQCk", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("wzfg8"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "PlayCircleOutlined";
    var c = a.forwardRef(l)
})), r.register("wzfg8", (function(t, r) {
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
                    d: "M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"
                }
            }]
        },
        name: "play-circle",
        theme: "outlined"
    }
})), r.register("5g49A", (function(n, o) {
    e(n.exports, "default", (function() {
        return m
    }), (function(e) {
        return m = e
    }));
    var a = r("legzE"),
        i = r("fe1on"),
        s = r("fywoC"),
        l = r("4gMdJ"),
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
    const h = (e, r) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: d,
                style: h,
                children: g,
                icon: m,
                color: x,
                onClose: v,
                closeIcon: y,
                closable: b = !1
            } = e, w = p(e, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);
            const {
                getPrefixCls: j,
                direction: k
            } = s.useContext(l.ConfigContext), [C, S] = s.useState(!0);
            s.useEffect((() => {
                "visible" in w && S(w.visible)
            }), [w.visible]);
            const E = (0, c.isPresetColor)(x) || (0, c.isPresetStatusColor)(x),
                O = Object.assign({
                    backgroundColor: x && !E ? x : void 0
                }, h),
                M = j("tag", n),
                [T, I] = (0, f.default)(M),
                F = t(i)(M, {
                    [`${M}-${x}`]: E,
                    [`${M}-has-color`]: x && !E,
                    [`${M}-hidden`]: !C,
                    [`${M}-rtl`]: "rtl" === k
                }, o, d, I),
                N = e => {
                    e.stopPropagation(), null == v || v(e), e.defaultPrevented || S(!1)
                },
                D = "function" == typeof w.onClick || g && "a" === g.type,
                P = m || null,
                $ = P ? s.createElement(s.Fragment, null, P, s.createElement("span", null, g)) : g,
                z = s.createElement("span", Object.assign({}, w, {
                    ref: r,
                    className: F,
                    style: O
                }), $, b ? y ? s.createElement("span", {
                    className: `${M}-close-icon`,
                    onClick: N
                }, y) : s.createElement(a.default, {
                    className: `${M}-close-icon`,
                    onClick: N
                }) : null);
            return T(D ? s.createElement(u.default, null, z) : z)
        },
        g = s.forwardRef(h);
    g.CheckableTag = d.default;
    var m = g
})), r.register("8elTB", (function(n, o) {
    e(n.exports, "default", (function() {
        return u
    }), (function(e) {
        return u = e
    }));
    var a = r("fe1on"),
        i = r("fywoC"),
        s = r("4gMdJ"),
        l = r("jfXop"),
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
        } = i.useContext(s.ConfigContext), h = p("tag", r), [g, m] = (0, l.default)(h), x = t(a)(h, {
            [`${h}-checkable`]: !0,
            [`${h}-checkable-checked`]: o
        }, n, m);
        return g(i.createElement("span", Object.assign({}, f, {
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
        s = r("10VQw"),
        l = r("kCC5O");
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
        u = e => (0, s.genPresetColor)(e, ((t, r) => {
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
                [o]: Object.assign(Object.assign({}, (0, l.resetComponent)(e)), {
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
        } = e, i = Math.round(t * r), s = e.fontSizeSM, l = i - 2 * n, f = e.colorFillAlter, p = e.colorText, h = (0, a.merge)(e, {
            tagFontSize: s,
            tagLineHeight: l,
            tagDefaultBg: f,
            tagDefaultColor: p,
            tagIconSize: o - 2 * n,
            tagPaddingHorizontal: 8
        });
        return [d(h), u(h), c(h, "success", "Success"), c(h, "processing", "Info"), c(h, "error", "Error"), c(h, "warning", "Warning")]
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
        s = r("fBuQJ"),
        l = r("lKmIF"),
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
`), (e => e.size), (e => e.size), (e => e.customRightMargin ? e.customRightMargin : 0), (e => e.showBorder && `border: solid ${l.default.Black} 1px;`));
    var f = e => {
        const [t, r] = a.useState(!1);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(d, {
                ...e,
                onClick: t => {
                    t.stopPropagation(), e.onClick && e.onClick(), e.blockModalOpen || r(!0)
                }
            }), (0, o.jsx)(s.default, {
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
            if (!l.some((t => e.includes(t)))) return null;
            if (e.includes(i) && !e.includes(`/${s}/`)) return null;
            const t = e.split("/");
            if (!t || !t.length || t.length < 2) return null;
            const r = t[t.length - 2],
                n = t[t.length - 1];
            return r && n && r.startsWith("v") ? `${r}/${n}` : null
        },
        a = "media.gimkit.com",
        i = "res.cloudinary.com",
        s = "gimkit-production",
        l = [a, i]
})), r.register("cGP26", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("fywoC"),
        a = r("kbKdI");
    var i = o.createContext(a.default)
})), r.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return a
    }));
    var o = r("bd8je");
    const a = e => {
        o.history.push(e)
    }
})), r.register("5wtYs", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("93yIm"),
        s = r("fC6cp"),
        l = r("9xElQ"),
        c = r("b9Zw0"),
        u = r("cy4A6"),
        d = r("i5Qjx"),
        f = r("gHmyG"),
        p = r("2FDaO"),
        h = r("py2Xr"),
        g = r("iMOcM"),
        m = r("jo1jb");
    let x;
    const v = e => {
        const [t, r, n] = (0, g.useBoolean)(!1);
        return (0, o.jsx)(d.default, {
            direction: "vertical",
            size: 7,
            className: "maxWidth",
            children: e.folders.map((a => (0, o.jsxs)(b, {
                onClick: () => {
                    return o = a._id, void(t || (r(), (0, g.request)({
                        url: "/api/folders/addGame",
                        data: {
                            folderId: o,
                            gameId: e.kitId
                        },
                        success: () => {
                            e.close(), (0, m.invalidateKits)(), u.default.success({
                                content: "Kit added to folder!"
                            })
                        },
                        error: e => {
                            (0, g.throwMessageError)({
                                e: e,
                                default: {
                                    title: "Error adding kit to folder"
                                }
                            })
                        },
                        both: n
                    })));
                    var o
                },
                children: [(0, o.jsx)("div", {
                    style: {
                        marginRight: 8
                    },
                    children: (0, o.jsx)(h.default, {
                        name: "fas fa-folder"
                    })
                }), (0, o.jsx)("div", {
                    children: a.name
                })]
            }, a._id)))
        })
    };
    var y = e => {
        const {
            data: {
                folders: t
            },
            isLoading: r
        } = (0, m.default)(), [n, u, d] = (0, g.useBoolean)(!1), [p, h] = a.useState("");
        a.useEffect((() => {
            e.open || h("")
        }), [e.open]);
        const x = p.length < 2,
            y = () => {
                x || n || (u(), (0, g.request)({
                    url: "/api/folders/new",
                    data: {
                        title: p
                    },
                    success: t => {
                        (0, g.request)({
                            url: "/api/folders/addGame",
                            data: {
                                folderId: t,
                                gameId: e.kitId
                            },
                            success: () => {
                                e.close(), (0, m.invalidateKits)()
                            },
                            error: e => {
                                (0, g.throwMessageError)({
                                    e: e,
                                    default: {
                                        title: "Error adding kit to folder"
                                    }
                                })
                            },
                            both: d
                        })
                    },
                    error: e => {
                        (0, g.throwMessageError)({
                            e: e,
                            default: {
                                title: "Error creating folder"
                            }
                        }), d()
                    }
                }))
            };
        return (0, o.jsx)(l.default, {
            open: e.open,
            onClose: e.close,
            width: 375,
            placement: "right",
            closable: !0,
            title: "Add To Folder",
            drawerStyle: {
                height: "100%",
                overflowY: "auto"
            },
            children: (() => {
                if (r) return (0, o.jsx)("div", {
                    className: "maxAll flex-center",
                    children: (0, o.jsx)(f.default, {
                        size: "large"
                    })
                });
                const a = null == t ? void 0 : t.filter((t => !t.games.includes(e.kitId))).sort(((e, t) => e.title.localeCompare(t.title)));
                return (0, o.jsxs)("div", {
                    children: [(0, o.jsx)(c.default, {
                        placeholder: "New folder name...",
                        value: p,
                        onChange: e => h(e.target.value),
                        onPressEnter: y
                    }), (0, o.jsx)(i.default, {
                        block: !0,
                        type: "primary",
                        style: {
                            marginTop: 7
                        },
                        disabled: x,
                        loading: n,
                        onClick: y,
                        children: "Create Folder"
                    }), a.length ? (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(s.default, {}), (0, o.jsx)(v, {
                            folders: a.map((e => ({
                                _id: e._id,
                                name: e.title
                            }))),
                            kitId: e.kitId,
                            close: e.close
                        })]
                    }) : null]
                })
            })()
        })
    };
    const b = p.default.div.attrs({
        className: "flex vc"
    })(x || (x = (e => e)`
  padding: 12px 20px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`))
})), r.register("i5Qjx", (function(n, o) {
    e(n.exports, "SpaceContext", (function() {
        return h
    }), (function(e) {
        return h = e
    })), e(n.exports, "default", (function() {
        return x
    }), (function(e) {
        return x = e
    }));
    var a = r("fe1on"),
        i = r("jyxW7"),
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
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const h = s.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        g = {
            small: 8,
            middle: 16,
            large: 24
        };
    const m = e => {
        const {
            getPrefixCls: r,
            space: n,
            direction: o
        } = s.useContext(l.ConfigContext), {
            size: u = (null == n ? void 0 : n.size) || "small",
            align: m,
            className: x,
            rootClassName: v,
            children: y,
            direction: b = "horizontal",
            prefixCls: w,
            split: j,
            style: k,
            wrap: C = !1
        } = e, S = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), E = (0, c.default)(), [O, M] = s.useMemo((() => (Array.isArray(u) ? u : [u, u]).map((e => function(e) {
            return "string" == typeof e ? g[e] : e || 0
        }(e)))), [u]), T = (0, i.default)(y, {
            keepEmpty: !0
        }), I = void 0 === m && "horizontal" === b ? "center" : m, F = r("space", w), [N, D] = (0, f.default)(F), P = t(a)(F, D, `${F}-${b}`, {
            [`${F}-rtl`]: "rtl" === o,
            [`${F}-align-${I}`]: I
        }, x, v), $ = `${F}-item`, z = "rtl" === o ? "marginLeft" : "marginRight";
        let A = 0;
        const R = T.map(((e, t) => {
                null != e && (A = t);
                const r = e && e.key || `${$}-${t}`;
                return s.createElement(d.default, {
                    className: $,
                    key: r,
                    direction: b,
                    index: t,
                    marginDirection: z,
                    split: j,
                    wrap: C
                }, e)
            })),
            L = s.useMemo((() => ({
                horizontalSize: O,
                verticalSize: M,
                latestIndex: A,
                supportFlexGap: E
            })), [O, M, A, E]);
        if (0 === T.length) return null;
        const B = {};
        return C && (B.flexWrap = "wrap", E || (B.marginBottom = -M)), E && (B.columnGap = O, B.rowGap = M), N(s.createElement("div", Object.assign({
            className: P,
            style: Object.assign(Object.assign({}, B), k)
        }, S), s.createElement(h.Provider, {
            value: L
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
            children: s,
            split: l,
            wrap: c
        } = e;
        const {
            horizontalSize: u,
            verticalSize: d,
            latestIndex: f,
            supportFlexGap: p
        } = o.useContext(a.SpaceContext);
        let h = {};
        return p || ("vertical" === r ? n < f && (h = {
            marginBottom: u / (l ? 2 : 1)
        }) : h = Object.assign(Object.assign({}, n < f && {
            [i]: u / (l ? 2 : 1)
        }), c && {
            paddingBottom: d
        })), null == s ? null : o.createElement(o.Fragment, null, o.createElement("div", {
            className: t,
            style: h
        }, s), n < f && l && o.createElement("span", {
            className: `${t}-split`,
            style: h
        }, l))
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
})), r.register("dFdNj", (function(t, n) {
    e(t.exports, "UpgradeModal_CopyKit", (function() {
        return i
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("46bRO");
    const i = {
        title: (0, o.jsx)(o.Fragment, {
            children: "Copy kits with Pro"
        }),
        description: (0, o.jsxs)(o.Fragment, {
            children: ["To copy kits and make them your own, upgrade to ", a.COMPANY_NAME, " Pro."]
        })
    }
})), r.register("lkPkP", (function(t, n) {
    e(t.exports, "UpgradeModal_Folders", (function() {
        return i
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("46bRO");
    const i = {
        title: (0, o.jsx)(o.Fragment, {
            children: "Create folders with Pro"
        }),
        description: (0, o.jsxs)(o.Fragment, {
            children: ["Upgrade to ", a.COMPANY_NAME, " Pro to create folders and organize your kits easily."]
        })
    }
})), r.register("9WwVc", (function(t, n) {
    e(t.exports, "default", (function() {
        return T
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("93yIm"),
        s = r("gnAdP"),
        l = r("b9Zw0"),
        c = r("fBuQJ"),
        u = r("i5Qjx"),
        d = r("4y75y"),
        f = r("2FDaO"),
        p = r("lKmIF"),
        h = r("py2Xr"),
        g = r("6vbUb"),
        m = r("iMOcM"),
        x = r("b1oE9"),
        v = r("kyvf1"),
        y = r("jo1jb");
    let b, w, j, k = e => e;
    const C = e => {
            const t = e ? "#1677ff" : "rgba(0,0,0,0.07)";
            return {
                color: e ? p.default.White : p.default.Black,
                backgroundColor: t,
                hoverBackgroundColor: e ? t : "rgba(0,0,0,0.11)"
            }
        },
        S = e => {
            const {
                color: t,
                backgroundColor: r,
                hoverBackgroundColor: n
            } = C(e.selected);
            return (0, o.jsx)(v.default, {
                to: e.path,
                children: (0, o.jsxs)(F, {
                    background: r,
                    color: t,
                    hoverBackgroundColor: n,
                    children: [(0, o.jsx)("span", {
                        style: {
                            marginRight: 6
                        },
                        children: (0, o.jsx)(h.default, {
                            name: e.icon
                        })
                    }), e.label]
                })
            })
        },
        E = e => {
            const {
                color: t,
                backgroundColor: r,
                hoverBackgroundColor: n
            } = C(e.selected), [a, i, l] = (0, m.useBoolean)(!1), [c, u, d] = (0, m.useBoolean)(!1);
            return (0, o.jsx)(v.default, {
                to: e.path,
                children: (0, o.jsxs)(F, {
                    background: r,
                    color: t,
                    hoverBackgroundColor: n,
                    children: [e.icon && !e.selected ? (0, o.jsx)("span", {
                        style: {
                            marginRight: 6
                        },
                        children: e.icon
                    }) : null, (0, o.jsx)(g.motion.span, {
                        layout: !0,
                        children: e.name
                    }), e.selected ? (0, o.jsx)(s.default, {
                        menu: {
                            items: [{
                                key: "rename-folder",
                                label: "Rename Folder",
                                onClick: i
                            }, {
                                key: "delete-folder",
                                label: "Delete Folder",
                                danger: !0,
                                onClick: u
                            }]
                        },
                        children: (0, o.jsx)(N, {
                            children: (0, o.jsx)(h.default, {
                                name: "far fa-ellipsis-h"
                            })
                        })
                    }) : null, (0, o.jsx)(O, {
                        open: a,
                        close: l,
                        folderId: e.id,
                        folderName: e.name
                    }), (0, o.jsx)(M, {
                        open: c,
                        close: d,
                        folderId: e.id
                    })]
                })
            })
        },
        O = e => {
            const [t, r, n] = (0, m.useBoolean)(!1), [s, u] = a.useState(""), f = a.useMemo((() => s.length < 2), [s]);
            a.useEffect((() => {
                e.open || u("")
            }), [e.open]);
            const p = () => {
                t || (r(), (0, m.request)({
                    url: "/api/folders/rename",
                    data: {
                        id: e.folderId,
                        title: s
                    },
                    success: () => {
                        e.close(), (0, y.invalidateKits)()
                    },
                    both: n,
                    error: e => {
                        (0, m.throwMessageError)({
                            e: e,
                            default: {
                                title: "Error renaming folder"
                            }
                        })
                    }
                }))
            };
            return (0, o.jsxs)(c.default, {
                open: e.open,
                onCancel: e.close,
                title: "Rename",
                footer: [(0, o.jsx)(i.default, {
                    onClick: e.close,
                    children: "Cancel"
                }, "cancel-rename-folder"), (0, o.jsx)(i.default, {
                    type: "primary",
                    onClick: p,
                    disabled: f,
                    loading: t,
                    children: "Rename"
                }, "rename-folder")],
                children: [(0, o.jsxs)(d.default.Text, {
                    children: ["Enter a new name for ", (0, o.jsxs)("b", {
                        children: [e.folderName, ":"]
                    })]
                }), (0, o.jsx)(l.default, {
                    value: s,
                    style: {
                        marginTop: 5
                    },
                    placeholder: "New name...",
                    maxLength: 24,
                    onChange: e => u(e.target.value),
                    onPressEnter: p
                })]
            })
        },
        M = e => {
            const [t, r, n] = (0, m.useBoolean)(!1);
            return (0, o.jsx)(c.default, {
                open: e.open,
                onCancel: e.close,
                title: "Delete Folder",
                footer: [(0, o.jsx)(i.default, {
                    onClick: e.close,
                    children: "Cancel"
                }, "cancel-delete-folder"), (0, o.jsx)(i.default, {
                    type: "primary",
                    danger: !0,
                    onClick: () => {
                        r(), (0, m.request)({
                            url: "/api/folders/delete",
                            data: {
                                id: e.folderId
                            },
                            success: () => {
                                e.close(), (0, y.invalidateKits)()
                            },
                            error: e => {
                                (0, m.throwMessageError)({
                                    e: e,
                                    default: {
                                        title: "Error deleting folder"
                                    }
                                })
                            },
                            both: n
                        })
                    },
                    loading: t,
                    children: "Delete Folder"
                }, "delete-folder")],
                children: (0, o.jsx)(d.default.Text, {
                    children: "Are you sure you want to delete this folder? The kits within the folder will not be deleted."
                })
            })
        };
    var T = e => {
        var t;
        const r = !(0, m.isStudent)() && (null === (t = (0, m.getUser)()) || void 0 === t ? void 0 : t.schoolId),
            n = t => t === e.selectedFolder && !e.schoolLibraryScreenOpen;
        return (0, o.jsx)(I, {
            children: (0, o.jsxs)(u.default, {
                direction: "horizontal",
                size: 10,
                wrap: !0,
                className: "maxWidth",
                children: [(0, o.jsx)(S, {
                    label: "All kits",
                    icon: "fas fa-box-open",
                    selected: n(""),
                    path: x.KITS
                }), r ? (0, o.jsx)(S, {
                    label: "My school",
                    icon: "fas fa-school",
                    selected: e.schoolLibraryScreenOpen,
                    path: `${x.KITS}/school`
                }) : null, e.folders.sort(((e, t) => e.title.localeCompare(t.title))).map((e => (0, o.jsx)(E, {
                    id: e._id,
                    name: e.title,
                    selected: n(e._id),
                    path: `${x.KITS}/${e._id}`,
                    icon: (0, o.jsx)(h.default, {
                        name: "fas fa-folder"
                    })
                }, `folder-${e._id}`)))]
            })
        })
    };
    const I = f.default.div(b || (b = k`
  .ant-space-item {
    flex-shrink: 0;
  }
`)),
        F = f.default.div.attrs({
            className: "flex-center"
        })(w || (w = k`
  background: ${0};
  color: ${0};
  font-size: 15px;
  padding: 4px 14px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  &:hover {
    background: ${0};
  }
`), (e => e.background), (e => e.color), (e => e.hoverBackgroundColor)),
        N = f.default.div(j || (j = k`
  margin-left: 12px;
  transition: 0.15s background ease-in-out;
  padding: 0px 6px;
  border-radius: 4px;
  margin-right: -6px;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
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
})), r.register("bQjWy", (function(e, t) {
    e.exports = import("./" + r("ihc6Q").resolve("iEAx1")).then((() => r("a6ojy")))
})), r.register("LVqvj", (function(t, n) {
    e(t.exports, "default", (function() {
        return v
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("5KsG5"),
        i = r("b04tG"),
        s = r("8cYLR"),
        l = r("b1oE9"),
        c = r("iROck"),
        u = r("jbbXK"),
        d = r("jSP09"),
        f = r("i5Qjx"),
        p = r("kR3c9"),
        h = r("cPGmn"),
        g = r("kVUKx"),
        m = r("bM2u5"),
        x = r("iMOcM");
    var v = () => {
        const {
            data: e,
            isLoading: t
        } = (0, p.default)();
        (0, h.useDidMount)((() => {
            (0, g.CLASSES)() && (0, m.ReplaceToHomePage)()
        }));
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(x.Title, {
                title: "Classes"
            }), t ? null : e.length ? (0, o.jsx)(d.default, {
                header: (0, o.jsx)(a.default, {
                    title: "Classes",
                    buttonIcon: (0, o.jsx)(u.default, {}),
                    buttonLink: l.NEW_CLASS,
                    buttonText: "New Class"
                }),
                children: (0, o.jsx)(f.default, {
                    direction: "vertical",
                    className: "maxWidth",
                    size: 10,
                    children: e.map((e => (0, o.jsx)(i.default, {
                        group: e,
                        to: `/class/${e._id}`
                    }, e._id)))
                })
            }) : (0, o.jsx)(s.default, {
                image: "groups",
                title: "Classes",
                description: "Keep your games safe and secure! Use classes to force students to use their real names and control who can join your games.",
                button: "New Class",
                onClick: () => (0, c.NavigateTo)(l.NEW_CLASS)
            })]
        })
    }
})), r.register("b04tG", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("7ECC6"),
        s = r("lKmIF"),
        l = r("2FDaO"),
        c = r("2QWuZ"),
        u = r("iMOcM"),
        d = r("kyvf1");
    let f;
    const p = l.default.div(f || (f = (e => e)`
  background: ${0};
  height: ${0}px;
  width: ${0}px;
  border-radius: 5px;
  margin-right: 10px;
`), (e => e.color), c.IMAGE_SIZE, c.IMAGE_SIZE);
    class h extends a.Component {
        render() {
            const e = {
                    ...{
                        width: "100%",
                        color: s.default.Black
                    },
                    ...this.props.style || {}
                },
                {
                    group: t
                } = this.props;
            return (0, o.jsx)(d.default, {
                to: this.props.to,
                style: {
                    textDecoration: "none"
                },
                children: (0, o.jsx)(i.default, {
                    hoverable: !0,
                    style: e,
                    children: (0, o.jsx)(c.Content, {
                        children: (0, o.jsxs)(c.LeftSide, {
                            children: [(0, o.jsx)(p, {
                                color: t.color
                            }), (0, o.jsxs)(c.KitInfo, {
                                children: [(0, o.jsx)(c.KitTitle, {
                                    children: t.name
                                }), (0, o.jsx)(c.KitDescription, {
                                    children: t.memberCount + " " + (0, u.plural)("member", t.memberCount)
                                })]
                            })]
                        })
                    })
                })
            })
        }
    }
    var g = h
})), r.register("bM2u5", (function(t, n) {
    e(t.exports, "GetHomepagePath", (function() {
        return l
    })), e(t.exports, "RedirectToHomepage", (function() {
        return c
    })), e(t.exports, "ReplaceToHomePage", (function() {
        return u
    }));
    var o = r("b1oE9"),
        a = r("bd8je"),
        i = r("iMOcM"),
        s = r("iROck");
    const l = () => (0, i.isLoggedIn)() ? (0, i.isStudent)() ? o.HOME : o.KITS : "/",
        c = () => {
            (0, s.NavigateTo)(l())
        },
        u = () => {
            a.history.replace(l())
        }
})), r.register("e9YHL", (function(t, n) {
    e(t.exports, "default", (function() {
        return d
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("5KsG5"),
        i = r("aeWc1"),
        s = r("jSP09"),
        l = r("cPGmn"),
        c = r("iMOcM"),
        u = r("bM2u5");
    var d = () => ((0, l.useDidMount)((() => {
        (0, c.isStudent)() || (0, u.ReplaceToHomePage)()
    })), (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(c.Title, {
            title: "Home"
        }), (0, o.jsx)(s.default, {
            header: (0, o.jsx)(a.default, {
                title: "Home",
                hideButton: !0
            }),
            children: (0, o.jsx)(i.default, {})
        })]
    }))
})), r.register("aeWc1", (function(n, o) {
    e(n.exports, "default", (function() {
        return f
    }));
    var a = r("hxEiv"),
        i = r("fywoC"),
        s = r("iMOcM"),
        l = r("hCepm"),
        c = r("9iTiM"),
        u = r("5FwCc"),
        d = r("haVWx");
    var f = () => {
        const [e, r] = t(i).useState(!0), [n, o] = t(i).useState([]);
        return t(i).useEffect((() => {
            (0, s.isStudent)() && (0, s.request)({
                url: "/api/v1/groups/part-of",
                success: e => o(e),
                both: () => r(!1)
            })
        }), []), (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(l.default, {
                groups: n.map((e => e._id))
            }), (0, a.jsx)(c.default, {}), (0, a.jsx)(d.default, {}), (0, a.jsx)(u.default, {
                groups: n,
                loading: e
            })]
        })
    }
})), r.register("hCepm", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("i0unB"),
        i = r("kVDpQ");
    var s = e => (0, o.jsx)(i.default, {
        children: (0, o.jsx)(a.default, {
            groups: e.groups
        })
    })
})), r.register("i0unB", (function(t, n) {
    e(t.exports, "default", (function() {
        return m
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("2FDaO"),
        s = r("69SUA"),
        l = r("9eikj"),
        c = r("lKmIF"),
        u = r("iMOcM"),
        d = r("haVWx");
    let f, p, h, g = e => e;
    var m = e => {
        const [t, r] = a.useState();
        return a.useEffect((() => {
            if (e.groups.length) {
                const e = () => {
                    (0, u.request)({
                        url: "/api/matchmaker/instant-join",
                        success: e => {
                            e && e.code && r(e.code)
                        }
                    })
                };
                e();
                const t = setInterval(e, 3e4);
                return () => clearInterval(t)
            }
        }), [e.groups.length]), t ? (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)(x, {
                children: [(0, o.jsxs)("div", {
                    children: [(0, o.jsx)(v, {
                        children: "Join your teacher's live game!"
                    }), (0, o.jsx)(y, {
                        children: t
                    })]
                }), (0, o.jsx)("div", {
                    style: {
                        marginLeft: 20
                    },
                    children: (0, o.jsx)(l.default, {
                        background: "#2e7d32",
                        color: c.default.White,
                        icon: "fas fa-gamepad",
                        text: "Join Game",
                        customWidth: 200,
                        className: "hc",
                        style: {
                            textDecoration: "none"
                        },
                        to: `/join?gc=${t}`
                    })
                }), (0, o.jsx)(d.default, {})]
            })
        }) : null
    };
    const x = i.default.div.attrs({
            className: "flex vc wrap"
        })(f || (f = g`
  justify-content: space-between;
`)),
        v = i.default.div(p || (p = g`
  line-height: 16px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
`)),
        y = i.default.div(h || (h = g`
  font-size: 50px;
  line-height: 50px;
  margin-top: 10px;
  font-weight: ${0};
`), s.FontWeights.UltraBold)
})), r.register("9eikj", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("lKmIF"),
        i = r("2FDaO");
    let s;
    var l = e => (0, o.jsxs)(c, {
        href: e.to,
        customWidth: e.customWidth,
        className: `flex vc ${e.className}`,
        style: e.style,
        children: [(0, o.jsx)("div", {
            className: "flex hc vc",
            style: {
                color: e.color,
                background: e.background,
                height: 36,
                width: 36,
                borderRadius: "50%",
                marginRight: 11
            },
            children: (0, o.jsx)("i", {
                className: e.icon
            })
        }), (0, o.jsx)("span", {
            children: e.text
        })]
    });
    const c = i.default.a(s || (s = (e => e)`
  background: ${0};
  color: ${0};
  width: ${0}px;
  border-radius: 9px;
  padding: 10px 20px;
  border-style: solid;
  border-color: ${0};
  border-width: 1px;
  font-size: 16px;
  line-height: 16px;
  transition: background 0.3s;
  cursor: pointer;
  &:hover {
    background: #fafafa;
    color: ${0};
  }
`), a.default.White, a.default.Black, (e => e.customWidth || 350), a.default.BorderGray, a.default.Black)
})), r.register("haVWx", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("hxEiv"),
        a = r("fC6cp");
    r("fywoC");
    var i = () => (0, o.jsx)(a.default, {
        style: {
            marginTop: 40,
            marginBottom: 40
        }
    })
})), r.register("kVDpQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("2FDaO"),
        a = r("lKmIF");
    let i;
    var s = o.default.div.attrs({
        className: "maxWidth"
    })(i || (i = (e => e)`
  color: ${0};
`), a.default.Black)
})), r.register("9iTiM", (function(n, o) {
    e(n.exports, "default", (function() {
        return j
    }));
    var a = r("hxEiv"),
        i = r("fywoC"),
        s = r("kVDpQ"),
        l = r("2FDaO"),
        c = r("69SUA"),
        u = r("lKmIF"),
        d = r("4gsFJ"),
        f = r("iMOcM"),
        p = r("iUwFC"),
        h = r("gHmyG"),
        g = r("2nCEo");
    let m, x, v, y = e => e;
    var b;
    (b = v || (v = {})).nextSevenDays = "nextSevenDays", b.nextFortyFiveDays = "nextFortyFiveDays", b.lastThirtyDays = "lastThirtyDays";
    const w = () => (0, a.jsxs)("div", {
        style: {
            borderStyle: "dashed",
            borderColor: u.default.BorderGray,
            minHeight: 145,
            borderWidth: 1,
            fontSize: 20,
            padding: 10,
            borderRadius: 8
        },
        className: "maxWidth flex hc vc flex-column",
        children: [(0, a.jsx)("div", {
            children: (0, a.jsx)("i", {
                className: "fas fa-stars",
                style: {
                    color: "#1a237e",
                    fontSize: 28
                }
            })
        }), (0, a.jsx)("div", {
            style: {
                marginTop: 5
            },
            children: "No assignments for this time period."
        })]
    });
    var j = () => {
        const [e, r] = i.useState(!0), [n, o] = i.useState(!1), [l, c] = i.useState(null), [u, m] = i.useState([]), x = (t, a) => {
            e && n || (r(!0), o(!0), (0, f.request)({
                url: `/api/hub/hub-items?startDate=${t.format("MM-DD-YYYY")}&endDate=${a.format("MM-DD-YYYY")}`,
                success: e => {
                    m(e)
                },
                both: () => r(!1)
            }))
        }, y = () => !e || !n, b = () => {
            l !== v.nextSevenDays && y() && (c(v.nextSevenDays), x(t(g)(), t(g)().add(15, "days")))
        };
        return i.useEffect((() => {
            b()
        }), []), (0, a.jsxs)(s.default, {
            children: [(0, a.jsx)(k, {
                children: "Assignments"
            }), (0, a.jsxs)("div", {
                className: "flex vc wrap",
                style: {
                    marginTop: 15
                },
                children: [(0, a.jsx)(C, {
                    onClick: b,
                    selected: l === v.nextSevenDays,
                    children: "Next 14 days"
                }), (0, a.jsx)(C, {
                    onClick: () => {
                        l !== v.nextFortyFiveDays && y() && (c(v.nextFortyFiveDays), x(t(g)(), t(g)().add(46, "days")))
                    },
                    selected: l === v.nextFortyFiveDays,
                    children: "Next 45 days"
                }), (0, a.jsx)(C, {
                    onClick: () => {
                        l !== v.lastThirtyDays && y() && (c(v.lastThirtyDays), x(t(g)().subtract(31, "days"), t(g)()))
                    },
                    selected: l === v.lastThirtyDays,
                    children: "Last 30 days"
                })]
            }), (0, a.jsx)("div", {
                style: {
                    height: 20
                }
            }), e ? (0, a.jsx)("div", {
                className: "maxWidth flex hc",
                style: {
                    marginTop: 20
                },
                children: (0, a.jsx)(h.default, {
                    size: "large"
                })
            }) : u.length ? (0, a.jsx)(a.Fragment, {
                children: u.sort(((e, t) => new Date(e.dueDate).getTime() - new Date(t.dueDate).getTime())).map((e => e.type === p.HubItemType.mapAssignment ? (0, a.jsx)(d.default, {
                    groupColor: e.group.color,
                    groupName: e.group.name,
                    dueDate: e.dueDate,
                    title: e.title,
                    status: e.status,
                    link: `/join/${e.resourceId}`
                }, e.resourceId + e.group._id) : null))
            }) : (0, a.jsx)(w, {})]
        })
    };
    const k = l.default.div(m || (m = y`
  font-size: 38px;
  line-height: 38px;
  font-weight: ${0};
`), c.FontWeights.UltraBold),
        C = l.default.div.attrs({
            className: "flex vc"
        })(x || (x = y`
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 15px;
  border-style: solid;
  border-width: 1px;
  background: ${0};
  color: ${0};
  border-color: ${0};
  margin-right: 10px;
  font-size: 16px;
  height: 30px;
  cursor: pointer;
  transition: all 0.3s;
  ${0}
`), (e => e.selected ? "#1a237e" : u.default.White), (e => e.selected ? u.default.White : u.default.Black), (e => e.selected ? "#1a237e" : u.default.BorderGray), (e => !e.selected && "\n  &:hover {\n    background: #fafafa;\n  }\n  "))
})), r.register("4gsFJ", (function(n, o) {
    e(n.exports, "default", (function() {
        return f
    }));
    var a = r("hxEiv"),
        i = r("fywoC"),
        s = r("7ECC6"),
        l = r("kgyHA"),
        c = r("iUwFC"),
        u = r("kyvf1"),
        d = r("2nCEo");
    var f = e => {
        const r = i.useMemo((() => e.status === c.HubItemStatus.completed ? "Completed" : e.status === c.HubItemStatus.inProgress ? "In Progress..." : t(d)().isAfter(t(d)(e.dueDate)) ? "Past Due" : null), [e.status, e.dueDate]);
        return (0, a.jsxs)(l.Container, {
            children: [(0, a.jsxs)(l.TopContainer, {
                children: [(0, a.jsx)(l.Color, {
                    style: {
                        background: e.groupColor
                    }
                }), (0, a.jsxs)(l.ClassAndDueDate, {
                    children: [e.groupName, " - due ", t(d)(e.dueDate).format("MMMM Do")]
                })]
            }), (0, a.jsx)(u.default, {
                to: e.link,
                className: "maxWidth",
                target: "_parent",
                style: {
                    textDecoration: "none"
                },
                children: (0, a.jsx)(s.default, {
                    hoverable: !0,
                    style: {
                        borderRadius: 8,
                        width: "100%",
                        borderTopLeftRadius: 0
                    },
                    children: (0, a.jsxs)(l.CardContainer, {
                        children: [(0, a.jsx)(l.IconContainer, {
                            children: (0, a.jsx)("i", {
                                className: "fal fa-file-alt"
                            })
                        }), (0, a.jsxs)(l.RightSide, {
                            children: [(0, a.jsxs)(l.DetailsSection, {
                                children: [(0, a.jsx)(l.Title, {
                                    children: e.title
                                }), r ? (0, a.jsx)(l.Description, {
                                    children: r
                                }) : null]
                            }), (0, a.jsx)(l.Status, {
                                children: e.status === c.HubItemStatus.completed ? (0, a.jsx)("i", {
                                    style: {
                                        color: "#388e3c"
                                    },
                                    className: "fas fa-check-circle"
                                }) : null
                            })]
                        })]
                    })
                })
            })]
        })
    }
})), r.register("kgyHA", (function(t, n) {
    e(t.exports, "Container", (function() {
        return y
    })), e(t.exports, "TopContainer", (function() {
        return b
    })), e(t.exports, "Color", (function() {
        return w
    })), e(t.exports, "ClassAndDueDate", (function() {
        return j
    })), e(t.exports, "CardContainer", (function() {
        return k
    })), e(t.exports, "RightSide", (function() {
        return C
    })), e(t.exports, "DetailsSection", (function() {
        return S
    })), e(t.exports, "IconContainer", (function() {
        return E
    })), e(t.exports, "Title", (function() {
        return O
    })), e(t.exports, "Description", (function() {
        return M
    })), e(t.exports, "Status", (function() {
        return T
    }));
    var o = r("lKmIF"),
        a = r("69SUA"),
        i = r("2FDaO");
    let s, l, c, u, d, f, p, h, g, m, x, v = e => e;
    const y = i.default.div.attrs({
            className: "flex maxWidth flex-column"
        })(s || (s = v`
  align-items: flex-start;
  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`)),
        b = i.default.div.attrs({
            className: "flex vc"
        })(l || (l = v`
  border-style: solid;
  border-width: 1px;
  border-color: ${0};
  border-bottom-style: none;
  padding: 7px 15px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`), o.default.BorderGray),
        w = i.default.div(c || (c = v`
  height: 14px;
  width: 14px;
  border-radius: 50%;
`)),
        j = i.default.div(u || (u = v`
  margin-left: 7px;
  font-size: 14px;
  line-height: 14px;
`)),
        k = i.default.div.attrs({
            className: "flex maxWidth vc"
        })(d || (d = v`
  color: ${0};
`), o.default.Black),
        C = i.default.div.attrs({
            className: "flex maxWidth vc"
        })(f || (f = v`
  margin-left: 25px;
  justify-content: space-between;
`)),
        S = i.default.div(p || (p = v`
  line-height: 1;
`)),
        E = i.default.div(h || (h = v`
  font-size: 26px;
  color: #263238;
`)),
        O = i.default.div(g || (g = v`
  font-size: 20px;
  font-weight: ${0};
`), a.FontWeights.Bold),
        M = i.default.div(m || (m = v`
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  margin-top: 6px;
`)),
        T = i.default.div(x || (x = v`
  font-size: 32px;
`))
})), r.register("5FwCc", (function(t, n) {
    e(t.exports, "default", (function() {
        return h
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("kVDpQ"),
        s = r("2FDaO"),
        l = r("69SUA"),
        c = r("dekvA"),
        u = r("lKmIF"),
        d = r("gHmyG");
    let f;
    const p = () => (0, o.jsxs)("div", {
        style: {
            borderStyle: "dashed",
            borderColor: u.default.BorderGray,
            minHeight: 145,
            borderWidth: 1,
            fontSize: 20,
            padding: 10,
            borderRadius: 8
        },
        className: "maxWidth flex hc vc flex-column",
        children: [(0, o.jsx)("div", {
            children: (0, o.jsx)("i", {
                className: "fas fa-users-class",
                style: {
                    color: "#004d40",
                    fontSize: 28
                }
            })
        }), (0, o.jsx)("div", {
            style: {
                marginTop: 5
            },
            children: "You're not part of any classes."
        })]
    });
    var h = e => {
        const [t, r] = a.useState([]), n = e.groups.filter((e => !t.includes(e._id))), s = e => {
            r((t => [...t, e]))
        };
        return (0, o.jsxs)(i.default, {
            style: {
                marginTop: 30
            },
            children: [(0, o.jsx)(g, {
                children: "Classes"
            }), e.loading ? (0, o.jsx)("div", {
                className: "maxWidth flex hc",
                style: {
                    marginTop: 20
                },
                children: (0, o.jsx)(d.default, {
                    size: "large"
                })
            }) : n.length ? n.map((e => (0, o.jsx)(c.default, {
                name: e.name,
                color: e.color,
                creator: e.creatorName,
                groupId: e._id,
                onUnenroll: s
            }, e._id))) : (0, o.jsx)(p, {})]
        })
    };
    const g = s.default.div(f || (f = (e => e)`
  font-size: 38px;
  line-height: 38px;
  font-weight: ${0};
  margin-bottom: 20px;
`), l.FontWeights.UltraBold)
})), r.register("dekvA", (function(t, n) {
    e(t.exports, "default", (function() {
        return b
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("93yIm"),
        i = r("7ECC6"),
        s = r("cy4A6"),
        l = r("fBuQJ"),
        c = r("e4KJZ"),
        u = r("2FDaO"),
        d = r("lKmIF"),
        f = r("69SUA"),
        p = r("legzE"),
        h = r("iMOcM");
    let g, m, x, v, y = e => e;
    var b = e => (0, o.jsx)(o.Fragment, {
        children: (0, o.jsx)(i.default, {
            style: {
                borderRadius: 8,
                marginBottom: 10
            },
            children: (0, o.jsxs)(w, {
                children: [(0, o.jsxs)("div", {
                    className: "flex vc",
                    children: [(0, o.jsx)("div", {
                        style: {
                            borderRadius: 5,
                            height: 55,
                            width: 55,
                            background: e.color
                        }
                    }), (0, o.jsxs)(j, {
                        children: [(0, o.jsx)(k, {
                            children: e.name
                        }), (0, o.jsx)(C, {
                            children: e.creator
                        })]
                    })]
                }), (0, o.jsx)("div", {
                    children: (0, o.jsx)(c.default, {
                        title: "Unenroll from class",
                        children: (0, o.jsx)(a.default, {
                            onClick: () => {
                                l.default.confirm({
                                    title: "Are you sure you want to unenroll from this class?",
                                    okText: "Yes",
                                    cancelText: "No",
                                    onOk: () => {
                                        (0, h.request)({
                                            url: "/api/v1/groups/unenroll",
                                            data: {
                                                groupId: e.groupId
                                            },
                                            success: () => {
                                                s.default.success(`Unenrolled from "${e.name}"!`), e.onUnenroll(e.groupId)
                                            }
                                        })
                                    }
                                })
                            },
                            shape: "circle",
                            type: "dashed",
                            icon: (0, o.jsx)(p.default, {})
                        })
                    })
                })]
            })
        })
    });
    const w = u.default.div.attrs({
            className: "flex maxWidth vc between"
        })(g || (g = y`
  color: ${0};
`), d.default.Black),
        j = u.default.div(m || (m = y`
  margin-left: 25px;
`)),
        k = u.default.div(x || (x = y`
  font-size: 20px;
  line-height: 20px;
  font-weight: ${0};
`), f.FontWeights.Bold),
        C = u.default.div(v || (v = y`
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  line-height: 15px;
  margin-top: 6px;
`))
})), r.register("OzMyT", (function(t, n) {
    e(t.exports, "DashboardReports", (function() {
        return S
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("4gMdJ"),
        s = r("4Gnmi"),
        l = r("26Lv9"),
        c = r("iMOcM"),
        u = r("5KsG5"),
        d = r("jSP09"),
        f = r("d8JxI"),
        p = (a = r("fywoC"), r("2FDaO")),
        h = r("eRL7n"),
        g = r("5ZjEQ"),
        m = r("beXRF"),
        x = r("ipbvF"),
        v = r("7QXuE"),
        y = r("haemy"),
        b = r("iROck"),
        w = r("8cYLR"),
        j = r("f99oo");
    let k;
    const C = [{
            title: "Kit",
            dataIndex: "kit",
            key: "report-kit",
            render: (e, t) => (0, o.jsx)(x.ReportKit, {
                kit: e,
                dateId: t._id,
                assignmentId: t.mapAssignment
            })
        }, {
            title: "Accuracy",
            dataIndex: "accuracy",
            key: "report-accuracy",
            render: e => (0, o.jsx)(v.ReportProgressAccuracyMeter, {
                percent: e
            })
        }, {
            title: "Participants",
            dataIndex: "groups",
            key: "report-groups",
            render: (e, t) => (0, o.jsx)(y.ReportParticipantsAndGroups, {
                reportId: t._id,
                participants: t.participants,
                groups: e
            })
        }],
        S = () => {
            const [e, t] = (0, m.useSearchParams)();
            var r;
            const n = Math.max(1, null !== (r = Number(e.get("page"))) && void 0 !== r ? r : 1),
                [p, x] = a.useState(0),
                v = (0, a.useRef)(null),
                [y, k, S] = (0, c.useBoolean)(!1),
                {
                    data: O,
                    isLoading: M,
                    isError: T,
                    isFetching: I
                } = (0, g.useReports)(n);
            (0, f.default)(v, (e => {
                var t, r;
                x(null !== (r = null === (t = e.target) || void 0 === t ? void 0 : t.offsetTop) && void 0 !== r ? r : 0)
            })), a.useEffect((() => {
                window.scrollTo(0, 0)
            }), [n]);
            const F = O ? (0, o.jsx)(h.ReportPagination, {
                total: O.totalItems,
                current: n,
                onPageChange: e => {
                    (0, c.isUpgraded)() ? t({
                        page: e
                    }): k()
                }
            }) : null;
            return (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(c.Title, {
                    title: "Reports"
                }), O && !(null == O ? void 0 : O.totalItems) ? (0, o.jsx)(w.default, {
                    image: "report",
                    title: "Reports",
                    description: "View and analyze student performance data. Reports for live games and assignments appear here when you host a game with one of your kits.",
                    hideButton: !0
                }) : (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(E, {
                        ref: v,
                        children: (0, o.jsx)(d.default, {
                            header: (0, o.jsx)(u.default, {
                                title: "Reports",
                                customRightComponent: null != F ? F : (0, o.jsx)(o.Fragment, {})
                            }),
                            contentStyle: {
                                padding: 0
                            },
                            children: M ? (0, o.jsx)(s.default, {
                                paragraph: {
                                    rows: 4
                                },
                                title: !1,
                                active: !0,
                                className: "maxWidth",
                                style: {
                                    padding: 35
                                }
                            }) : T ? (0, o.jsx)("div", {
                                className: "maxAll flex-center center",
                                style: {
                                    padding: 35
                                },
                                children: "There was an error loading your reports. Please try again later."
                            }) : (0, o.jsxs)("div", {
                                id: "reports-container",
                                children: [(0, o.jsx)(i.default, {
                                    theme: {
                                        token: {
                                            padding: 35
                                        }
                                    },
                                    children: (0, o.jsx)(l.default, {
                                        dataSource: O.items.map((e => ({
                                            key: e._id,
                                            ...e
                                        }))),
                                        columns: C,
                                        bordered: !0,
                                        pagination: !1,
                                        tableLayout: "auto",
                                        size: "large",
                                        onRow: e => ({
                                            onClick: () => {
                                                (0, b.NavigateTo)(`/report/${e._id}`)
                                            },
                                            style: {
                                                cursor: "pointer"
                                            }
                                        }),
                                        loading: {
                                            spinning: I,
                                            indicator: null
                                        },
                                        sticky: {
                                            offsetHeader: p,
                                            getContainer: () => document.getElementById("reports-container")
                                        }
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "maxWidth flex-center",
                                    style: {
                                        padding: "35px 0px"
                                    },
                                    children: F
                                })]
                            })
                        })
                    }), (0, o.jsx)(j.ReportUpgradeModal, {
                        visible: y,
                        close: S
                    })]
                })]
            })
        },
        E = p.default.div.attrs({
            className: "maxWidth flex"
        })(k || (k = (e => e)`
  flex: 1;
`))
})), r.register("d8JxI", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("9iNNJ"),
        a = r("3Yjty");

    function i() {}
    let s;
    const l = e => s || (s = function(e) {
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
        const n = l(r.polyfill),
            s = (0, a.default)(t);
        return (0, o.default)((() => {
            let t = !1;
            const r = e && "current" in e ? e.current : e;
            if (!r) return i;

            function o(e, r) {
                t || s.current(e, r)
            }
            return n.subscribe(r, o), () => {
                t = !0, n.unsubscribe(r, o)
            }
        }), [e, n, s]), n.observer
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
})), r.register("5ZjEQ", (function(t, n) {
    e(t.exports, "useReports", (function() {
        return i
    }));
    var o = r("eMRqp"),
        a = r("iMOcM");
    const i = e => (0, o.useQuery)({
        queryKey: ["dashboard-repports", {
            page: e
        }],
        keepPreviousData: !0,
        staleTime: 6e4,
        retry: 2,
        queryFn: () => (0, a.requestAsPromise)({
            url: "/api/game-report/fetch-all",
            data: {
                page: e
            }
        })
    })
})), r.register("ipbvF", (function(n, o) {
    e(n.exports, "ReportKit", (function() {
        return v
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        s = r("i5Qjx"),
        l = r("2nCEo"),
        c = r("iMOcM"),
        u = r("69SUA"),
        d = r("gmwFZ"),
        f = r("lKmIF"),
        p = r("1djzF");
    let h, g, m, x = e => e;
    const v = e => {
            const r = t(l)((0, c.dateFromObjectId)(e.dateId)).format("MMMM Do [at] LT");
            return (0, a.jsxs)(s.default, {
                direction: "horizontal",
                size: 14,
                align: "center",
                children: [(0, a.jsx)("div", {
                    children: (0, a.jsx)(y, {
                        src: (0, p.getCloudinaryUrl)(e.kit.gif),
                        style: {
                            width: 55,
                            height: 55
                        }
                    })
                }), (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(b, {
                        children: e.kit.title
                    }), (0, a.jsx)(w, {
                        children: r
                    }), e.assignmentId ? (0, a.jsx)("div", {
                        style: {
                            marginTop: "0.25em"
                        },
                        children: (0, a.jsx)(d.ReportLinkTag, {
                            to: `/assignment/${e.assignmentId}`,
                            children: "Assignment"
                        })
                    }) : null]
                })]
            })
        },
        y = i.default.img(h || (h = x`
  border-radius: 5px;
  border: solid ${0} 1px;
  flex-shrink: 0;
  object-fit: cover;
`), f.default.Black),
        b = i.default.div(g || (g = x`
  font-size: 1.1em;
  font-weight: ${0};
`), u.FontWeights.Bold),
        w = i.default.div(m || (m = x`
  font-size: 0.9em;
  font-style: italic;
  margin-top: 0.05em;
`))
})), r.register("gmwFZ", (function(t, n) {
    e(t.exports, "ReportLinkTag", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("kyvf1"),
        i = r("2FDaO");
    let s;
    const l = e => (0, o.jsx)(c, {
            onClick: e => null == e ? void 0 : e.stopPropagation(),
            to: e.to,
            children: e.children
        }),
        c = (0, i.default)(a.default)(s || (s = (e => e)`
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.2em 0.73em;
  font-size: 0.9em;
  border-radius: 50px;
`))
})), r.register("7QXuE", (function(t, n) {
    e(t.exports, "ReportProgressAccuracyMeter", (function() {
        return l
    }));
    var o = r("hxEiv"),
        a = r("4gMdJ"),
        i = r("fI2SP");
    r("fywoC");
    var s = r("6edaj");
    const l = e => {
        const t = e.percent < 60 ? "#F44336" : e.percent < 80 ? "#FFC107" : "#66BB6A";
        return (0, o.jsx)(a.default, {
            theme: {
                components: {
                    Progress: {
                        colorText: (0, s.darken)(.2, t)
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
})), r.register("haemy", (function(t, n) {
    e(t.exports, "ReportParticipantsAndGroups", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("iMOcM"),
        i = r("i5Qjx"),
        s = r("gmwFZ");
    const l = e => {
        var t;
        return (0, o.jsxs)("div", {
            children: [(0, o.jsxs)("div", {
                style: {
                    fontStyle: "italic"
                },
                children: [e.participants, " ", (0, a.plural)("participant", e.participants)]
            }), (null === (t = e.groups) || void 0 === t ? void 0 : t.length) ? (0, o.jsx)(i.default, {
                direction: "horizontal",
                wrap: !0,
                size: "small",
                style: {
                    marginTop: "0.3em"
                },
                children: e.groups.map((t => (0, o.jsx)(s.ReportLinkTag, {
                    to: `/class/${t._id}`,
                    children: t.name
                }, e.reportId + t._id)))
            }) : null]
        })
    }
})), r.register("f99oo", (function(t, n) {
    e(t.exports, "ReportUpgradeModal", (function() {
        return s
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("8j47p"),
        i = r("46bRO");
    const s = e => (0, o.jsx)(a.default, {
        id: "view more reports",
        ...e,
        copy: {
            title: "More reports with Pro",
            description: `To view more of your past reports, upgrade to ${i.COMPANY_NAME} Pro.`
        }
    })
})), r.register("90GFX", (function(t, n) {
    e(t.exports, "default", (function() {
        return h
    }));
    var o = r("divCp"),
        a = r("kHqmx"),
        i = r("hxEiv"),
        s = r("fywoC"),
        l = r("93yIm"),
        c = r("fBuQJ"),
        u = r("lpEVe"),
        d = r("69SUA"),
        f = r("lKmIF");
    let p = class extends s.Component {
        render() {
            return (0, i.jsxs)(c.default, {
                onCancel: this.handleClose,
                open: this.props.navigation.archiveModalShow,
                closable: !0,
                footer: null,
                bodyStyle: {
                    fontFamily: d.Fonts.SFPro,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: f.default.Black
                },
                width: 600,
                children: [(0, i.jsx)("div", {
                    style: {
                        fontSize: 42,
                        fontWeight: d.FontWeights.UltraBold
                    },
                    children: "Kit is Archived"
                }), (0, i.jsxs)("div", {
                    style: {
                        fontSize: 19,
                        marginTop: -10,
                        marginBottom: 20,
                        textAlign: "center"
                    },
                    children: ["In order to ", this.props.kits.kitAttemptedAction, " this kit, you must unarchive it first."]
                }), (0, i.jsx)(l.default, {
                    onClick: this.handleClose,
                    type: "primary",
                    size: "large",
                    children: "Got It!"
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "handleClose", (() => this.props.navigation.archiveModalShow = !1))
        }
    };
    p = (0, a.__decorate)([(0, u.inject)("navigation", "kits"), u.observer], p);
    var h = p
})), r.register("453BZ", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = r("hxEiv"),
        a = r("lKmIF"),
        i = r("69SUA");
    r("fywoC");
    var s = r("2FDaO"),
        l = r("j2Kzj"),
        c = r("iJmz2"),
        u = r("iMOcM"),
        d = r("hizUK");
    let f;
    var p = e => {
        const t = (0, u.getUser)();
        return (0, u.isStudent)() ? null : (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)(h, {
                children: [(() => {
                    const {
                        freeTrial: e
                    } = t;
                    return !!((0, u.isUpgraded)() && e && e.currentlyOnFreeTrial)
                })() && (0, o.jsx)(c.default, {
                    user: t,
                    openUpgradeModal: () => {
                        e.openUpgradeModal(!1)
                    }
                }), !(0, u.isUpgraded)() && (0, o.jsx)(l.default, {
                    openUpgradeModal: e.openUpgradeModal
                })]
            }), (0, o.jsx)(d.default, {})]
        })
    };
    const h = s.default.div.attrs({
        className: "maxWidth"
    })(f || (f = (e => e)`
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  color: ${0};
  font-family: ${0};
`), a.default.Black, i.Fonts.SFPro)
})), r.register("j2Kzj", (function(n, o) {
    e(n.exports, "default", (function() {
        return h
    }));
    var a = r("hxEiv"),
        i = r("fywoC"),
        s = r("iJmz2"),
        l = r("2nCEo"),
        c = r("46bRO"),
        u = r("fxO9H"),
        d = r("17sBx"),
        f = r("iMOcM");
    s = r("iJmz2");
    const p = "hub_upgrade_modal_last_seen";
    var h = e => {
        const {
            isLoading: r,
            data: n
        } = (0, u.default)();
        i.useEffect((() => {
            (() => {
                if (!localStorage.getItem(p)) return !0;
                const e = localStorage.getItem(p),
                    r = Number(e);
                if (!r || isNaN(r)) return !0;
                const n = t(l).unix(r);
                return Math.abs(t(l)().diff(n, "hour")) >= 48
            })() && (localStorage.setItem(p, t(l)().unix().toString()), e.openUpgradeModal(!0))
        }), []);
        const o = i.useMemo((() => (0, d.getFreePlanType)() === d.FreePlanType.limitedGames && (null == n ? void 0 : n.count) < (0, d.getLimitedGameLimit)() ? s.BACKGROUND_COLOR : "#c62828"), [n]);
        return (0, d.getFreePlanType)() === d.FreePlanType.limitedGames && r ? null : (0, a.jsxs)(s.Container, {
            background: o,
            children: [(0, a.jsx)(s.Text, {
                children: (() => {
                    if ((0, d.getFreePlanType)() === d.FreePlanType.limitedGames) {
                        const e = (0, d.getLimitedGameLimit)() - n.count;
                        return e <= 0 ? (0, a.jsx)(a.Fragment, {
                            children: "You are out of hosted games for this month"
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: ["You can host", " ", (0, a.jsxs)(s.Bold, {
                                children: [e, " more ", (0, f.plural)("game", e)]
                            }), " ", "this month"]
                        })
                    }
                    return (0, a.jsxs)(a.Fragment, {
                        children: ["You are on the limited free version of ", c.COMPANY_NAME, "."]
                    })
                })()
            }), (0, a.jsx)(s.ActionButton, {
                onClick: () => {
                    e.openUpgradeModal(!1)
                },
                background: o,
                children: "Learn more"
            })]
        })
    }
})), r.register("iJmz2", (function(n, o) {
    e(n.exports, "BACKGROUND_COLOR", (function() {
        return y
    })), e(n.exports, "Container", (function() {
        return w
    })), e(n.exports, "Text", (function() {
        return j
    })), e(n.exports, "Bold", (function() {
        return k
    })), e(n.exports, "ActionButton", (function() {
        return C
    })), e(n.exports, "default", (function() {
        return b
    }));
    var a = r("hxEiv"),
        i = r("lKmIF"),
        s = r("69SUA"),
        l = r("kyvf1"),
        c = r("fywoC"),
        u = r("2FDaO"),
        d = r("iMOcM"),
        f = r("7a91g"),
        p = r("2nCEo");
    let h, g, m, x, v = e => e;
    const y = "#0a2540";
    var b = e => {
        const [r, n] = c.useState(0), [o, i] = c.useState(""), s = () => {
            const {
                user: r
            } = e;
            if (!r && !r.freeTrial) return;
            const o = t(p).duration(t(p)(r.freeTrial.freeTrialExpiration).diff(t(p)())),
                a = o.asDays(),
                s = o.asHours(),
                l = o.asMinutes(),
                c = o.asSeconds();
            if (a >= 1) {
                let e = a;
                31 === a && (e = 30), i("day"), n(Math.ceil(e))
            } else s >= 1 && s < 24 ? (i("hour"), n(Math.ceil(s))) : l >= 1 && l < 60 ? (i("minute"), n(Math.ceil(l))) : c > 0 && c < 60 && (i("second"), n(Math.ceil(c)))
        };
        return c.useEffect((() => {
            s()
        }), []), (0, f.useIntervalWhen)(s, 1e3), o ? (0, a.jsxs)(w, {
            background: y,
            children: [(0, a.jsxs)(j, {
                children: ["Your trial of ", (0, a.jsx)(k, {
                    children: "Gimkit Pro"
                }), " ends in", " ", (0, a.jsxs)(k, {
                    children: [r, " ", (0, d.plural)(o, r), "."]
                })]
            }), (0, a.jsx)(C, {
                onClick: e.openUpgradeModal,
                background: y,
                children: "Learn more"
            })]
        }) : null
    };
    const w = u.default.div.attrs({
            className: "maxWidth flex vc"
        })(h || (h = v`
  background: ${0};
  padding: 15px 20px;
  color: ${0};
  justify-content: space-between;
  @media (max-width: 678px) {
    justify-content: center;
    text-align: center;
  }
`), (e => e.background), i.default.White),
        j = u.default.div(g || (g = v`
  font-size: 18px;
`)),
        k = u.default.span(m || (m = v`
  font-weight: ${0};
`), s.FontWeights.Bold),
        C = (0, u.default)(l.default)(x || (x = v`
  background: ${0};
  color: ${0};
  font-size: 15px;
  border-radius: 50px;
  padding: 5px 18px;
  border-style: solid;
  border-width: 2px;
  border-color: ${0};
  transition: color 0.25s, background 0.25s;
  cursor: pointer;
  &:hover {
    color: ${0};
    background: ${0};
  }
  @media (max-width: 678px) {
    display: none;
  }
`), (e => e.background), i.default.White, i.default.White, (e => e.background), i.default.White)
})), r.register("7a91g", (function(t, n) {
    e(t.exports, "useIntervalWhen", (function() {
        return a
    }));
    var o = r("fywoC");

    function a(e, t, r, n) {
        void 0 === t && (t = 0), void 0 === r && (r = !0), void 0 === n && (n = !1);
        var a = (0, o.useRef)();

        function i() {
            a.current && a.current()
        }(0, o.useEffect)((function() {
            a.current = e
        })), (0, o.useEffect)((function() {
            if ("undefined" != typeof window) {
                if (r) {
                    n && i();
                    var e = window.setInterval(i, t);
                    return function() {
                        window.clearInterval(e)
                    }
                }
            } else console.warn("useIntervalWhen: window is undefined.")
        }), [r, t])
    }
})), r.register("hizUK", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("fBuQJ"),
        s = r("69SUA"),
        l = r("lKmIF"),
        c = r("iMOcM");
    var u = () => {
        const [e, t] = a.useState(!1);
        a.useEffect((() => {
            const e = (0, c.getUrlVariable)("from");
            e && "upgrade" === e && t(!0)
        }), []);
        return (0, o.jsx)(i.default, {
            onCancel: () => t(!1),
            open: e,
            footer: null,
            width: 600,
            closable: !0,
            style: {
                top: 30
            },
            children: (0, o.jsxs)("div", {
                style: {
                    fontFamily: s.Fonts.SFPro,
                    color: l.default.Black
                },
                className: "flex hc vc flex-column",
                children: [(0, o.jsx)("div", {
                    style: {
                        backgroundImage: "url(/client/img/home/me.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        height: 100,
                        width: 100,
                        borderRadius: "50%",
                        borderStyle: "solid",
                        borderWidth: 2,
                        borderColor: l.default.BorderGray
                    }
                }), (0, o.jsx)("div", {
                    style: {
                        fontWeight: s.FontWeights.UltraBold,
                        fontSize: 33,
                        marginTop: 6
                    },
                    children: "Thank you."
                }), (0, o.jsxs)("div", {
                    style: {
                        fontSize: 19,
                        marginTop: 10,
                        textAlign: "left"
                    },
                    children: ["Thank you so much for supporting us by upgrading to Gimkit Pro.", (0, o.jsx)("br", {}), (0, o.jsx)("br", {}), "Gimkit started as a high school project. Now that I've graduated, it's such a privilege to be able to continue to work on Gimkit. Your support is the reason why we can keep going.", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), "In addition to purchasing a product your students love, you're helping support a small four-person independent company. We don't serve ads or sell user information. We're not funded by VC firms. 100% of our revenue is from subscriptions like this one.", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), "Thank you for not only supporting a small business, but a student-started business. It means so much to me.", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), "If you ever need anything, feel free to reach me personally - josh@gimkit.com.", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), "Enjoy Gimkit!", (0, o.jsx)("br", {}), (0, o.jsx)("br", {}), (0, o.jsx)("b", {
                        children: "- Josh Feinsilber"
                    }), ", creator of Gimkit"]
                })]
            })
        })
    }
})), r.register("2ZILj", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("b24gd"),
        i = r("cHblW"),
        s = r("35bWr");
    var l = e => ((0, i.useSeasonTicketOpener)(), (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(a.default, {}), (0, o.jsx)(s.default, {
            upgradeModalVisible: e.upgradeModalVisible,
            proUpsellModalVisible: e.proUpsellModalVisible
        })]
    }))
})), r.register("b24gd", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("fywoC"),
        a = r("iMOcM"),
        i = r("bGoag");
    var s = () => (o.useEffect((() => {
        const e = (0, a.getUser)().tokenIssued || 0;
        Math.round((new Date).getTime() / 1e3) - e >= 86400 && (0, i.default)({})
    }), []), null)
})), r.register("cHblW", (function(t, n) {
    e(t.exports, "useSeasonTicketOpener", (function() {
        return l
    }));
    var o = r("fywoC"),
        a = r("iMOcM"),
        i = r("iROck"),
        s = r("b1oE9");
    const l = () => {
        o.useEffect((() => {
            var e, t;
            const r = (0, a.getUser)();
            r && (null == r || null === (e = r.seasonTicket) || void 0 === e ? void 0 : e.active) && !(null == r || null === (t = r.seasonTicket) || void 0 === t ? void 0 : t.viewed) && (0, i.NavigateTo)(s.SEASON_TICKET_BASE)
        }), [])
    }
})), r.register("35bWr", (function(n, o) {
    e(n.exports, "default", (function() {
        return c
    }));
    var a = r("hxEiv"),
        i = r("iMOcM"),
        s = r("2nCEo");
    r("fywoC");
    var l = r("2XIEk");
    var c = e => (() => {
        if (e.upgradeModalVisible) return !0;
        if (e.proUpsellModalVisible) return !0;
        if ((0, i.getUrlVariable)("from")) return !0;
        const r = (0, i.getUser)(),
            n = (0, i.dateFromId)(r._id);
        return t(s)().diff(t(s)(n), "days") < 3
    })() ? null : (0, a.jsx)(l.default, {
        allowAutoOpen: !0
    })
})), r.register("fzXfF", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = r("hxEiv"),
        a = r("fBuQJ"),
        i = r("lKmIF"),
        s = r("69SUA"),
        l = r("iMOcM"),
        c = r("fywoC"),
        u = r("2FDaO"),
        d = r("ka0Mx");
    let f;
    var p = () => {
        const [e, t, r] = (0, l.useBoolean)(!1), [n, i] = c.useState(0), s = c.useMemo((() => !(0, l.isStudent)() && !!sessionStorage.getItem("NEW_USER")), []);
        c.useEffect((() => {
            s && (t(), sessionStorage.removeItem("NEW_USER"))
        }), []);
        return s ? (0, o.jsx)(a.default, {
            width: 730,
            open: e,
            footer: null,
            style: {
                top: 35
            },
            bodyStyle: {
                padding: 50
            },
            closable: !1,
            children: (0, o.jsx)(h, {
                children: (0, o.jsx)(d.default, {
                    currentStage: n,
                    nextStage: () => i((e => e + 1)),
                    close: r
                })
            })
        }) : null
    };
    const h = u.default.div.attrs({
        className: "maxWidth"
    })(f || (f = (e => e)`
  font-family: ${0};
  color: ${0};
`), s.Fonts.SFPro, i.default.Black)
})), r.register("ka0Mx", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var o = r("hxEiv"),
        a = r("69SUA");
    r("fywoC");
    var i = r("2FDaO"),
        s = r("d8zi6"),
        l = r("3ytPT");
    let c, u, d, f, p, h = e => e;
    var g = e => {
        const t = s.default[e.currentStage];
        return (0, o.jsxs)(m, {
            children: [t.image ? (0, o.jsx)(v, {
                src: `/client/img/dashboard/onboarding/${t.image}.svg`
            }, t.image) : (0, o.jsx)(x, {}), (0, o.jsx)(y, {
                children: t.title
            }), (0, o.jsx)(b, {
                children: t.content
            }), (0, o.jsx)(l.default, {
                currentStage: e.currentStage,
                nextStage: e.nextStage,
                close: e.close
            })]
        })
    };
    const m = i.default.div.attrs({
            className: "flex-center flex-column maxWidth"
        })(c || (c = h``)),
        x = i.default.div(u || (u = h`
  height: 80px;
  width: 80px;
  background-image: url(/client/img/home/me.jpg);
  background-size: cover;
  background-position: center center;
  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
  border-color: #1d2d35;
`)),
        v = i.default.img(d || (d = h`
  height: 80px;
`)),
        y = i.default.div(f || (f = h`
  font-size: 34px;
  font-weight: ${0};
  margin-top: 20px;
`), a.FontWeights.Bold),
        b = i.default.div(p || (p = h`
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 25px;
`))
})), r.register("d8zi6", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("hxEiv");
    var a = [{
        title: "Hey, welcome to Gimkit!",
        content: (0, o.jsxs)(o.Fragment, {
            children: ["Thanks for signing up! I'm Josh, and I started Gimkit as a high school project. Games really helped me get engaged in school, so I decided to build my own!", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), 'Click "Next" and I\'ll walk you through a few of the basics.']
        })
    }, {
        image: "kit",
        title: "Kit = your content",
        content: (0, o.jsxs)(o.Fragment, {
            children: ["What you might call a question set...we call a kit. A kit contains all of the questions & terms you'll want students to learn & review when you play.", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), "You can create your own, or find existing kits made by other teachers."]
        })
    }, {
        image: "modes",
        title: "Tons of ways to play.",
        content: (0, o.jsxs)(o.Fragment, {
            children: ["Part of what makes Gimkit special are all of the different game modes you can explore with your students! ", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), "Try out our selection of modes, and stay tuned for new ones coming in the future!"]
        })
    }, {
        image: "classes",
        title: "Classes keep it safe.",
        content: (0, o.jsxs)(o.Fragment, {
            children: ["Ever host other games in class and have a kid enter in an inappropriate name? I get it. I sat next to that kid.", (0, o.jsx)("br", {}), " ", (0, o.jsx)("br", {}), "Using classes forces students to use their real names. Plus, it makes it impossible for students outside your class to join."]
        })
    }, {
        title: "You're all set!",
        content: (0, o.jsxs)(o.Fragment, {
            children: ["That's all you need to know for now! Have fun exploring and we hope your students have fun playing. If you ever need help, email us at", " ", (0, o.jsx)("a", {
                href: "mailto:hello@gimkit.com",
                children: "hello@gimkit.com"
            }), " & we'll get back to you. Enjoy!"]
        })
    }]
})), r.register("3ytPT", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("93yIm"),
        s = r("kyvf1"),
        l = r("d8zi6");
    var c = e => {
        const t = a.useMemo((() => e.currentStage === l.default.length - 1), [e.currentStage]),
            r = a.useCallback((() => {
                t ? e.close() : e.nextStage()
            }), [t]);
        return (0, o.jsxs)("div", {
            className: "flex-column flex-center",
            children: [(0, o.jsx)(i.default, {
                size: "large",
                type: "primary",
                style: {
                    height: 50,
                    width: 300
                },
                onClick: r,
                children: t ? "Close" : "Next"
            }), !t && (0, o.jsx)(s.default, {
                onClick: e.close,
                style: {
                    marginTop: 10
                },
                children: "...or close this screen"
            })]
        })
    }
})), r.register("6kjRl", (function(n, o) {
    e(n.exports, "default", (function() {
        return j
    }));
    var a = r("hxEiv"),
        i = r("aYYSA"),
        s = r("93yIm"),
        l = r("fBuQJ"),
        c = r("2nCEo"),
        u = r("fywoC"),
        d = r("2FDaO"),
        f = r("lKmIF"),
        p = r("69SUA"),
        h = r("b1oE9"),
        g = r("iMOcM"),
        m = r("adidf");
    let x, v, y, b = e => e;
    const w = "pro-monthly-modal-last-shown";
    var j = e => {
        const [r, n, o] = (0, g.useBoolean)(!1);
        return u.useEffect((() => {
            const e = (0, g.getUser)();
            if (!e) return;
            if (!e.planStartDate) return;
            const r = t(c).unix(e.planStartDate);
            if (Math.abs(t(c)().diff(r, "days")) < 40) return;
            const o = localStorage.getItem(w);
            if (o) {
                const e = t(c).unix(Number(o));
                if (Math.abs(t(c)().diff(e, "days")) < 21) return
            }
            n(), localStorage.setItem(w, t(c)().unix().toString())
        }), []), u.useEffect((() => {
            e.onVisibleChange(r)
        }), [r]), (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(k, {}), (0, a.jsx)(l.default, {
                className: "pro-upsell-modal",
                open: r,
                onCancel: o,
                footer: null,
                width: 850,
                style: {
                    top: 30
                },
                bodyStyle: {
                    padding: "0px",
                    background: f.default.Snow
                },
                closable: !1,
                children: (0, a.jsxs)(C, {
                    children: [(0, a.jsx)(m.default, {
                        user: (0, g.getUser)(),
                        close: o,
                        copy: {
                            title: (0, a.jsx)("div", {
                                style: {
                                    marginTop: 25
                                },
                                children: "Pay annually, save $60."
                            }),
                            description: (0, a.jsxs)(a.Fragment, {
                                children: ["Think you'll continue to use Gimkit?", (0, a.jsx)("br", {}), " If so, switch to paying annually and save 65% per year."]
                            })
                        },
                        showingModes: !0
                    }), (0, a.jsxs)("div", {
                        className: "maxWidth flex-center flex-column",
                        style: {
                            marginTop: -140,
                            marginBottom: 30
                        },
                        children: [(0, a.jsx)(s.default, {
                            size: "large",
                            type: "primary",
                            icon: (0, a.jsx)(i.default, {}),
                            style: {
                                width: 380,
                                height: 70,
                                display: "flex"
                            },
                            className: "flex-center",
                            href: h.CHECKOUT,
                            children: "Switch To Annual Billing"
                        }), (0, a.jsx)(S, {
                            onClick: o,
                            children: "No thanks!"
                        })]
                    })]
                })
            })]
        })
    };
    const k = (0, d.createGlobalStyle)(x || (x = b`
  .pro-upsell-modal > .ant-modal-content {
    border-radius: 10px;
    overflow: hidden;
    padding: 0px !important;
  }
`)),
        C = d.default.div.attrs({
            className: "maxWidth"
        })(v || (v = b`
  color: ${0};
  font-family: ${0};
`), f.default.Black, p.Fonts.SFPro),
        S = d.default.div(y || (y = b`
  z-index: 999;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  margin-top: 14px;
  cursor: pointer;
  text-decoration: underline;
`))
})), r.register("aYYSA", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("5UEB4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "StarOutlined";
    var c = a.forwardRef(l)
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
})), r.register("iE2C7", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("2FDaO"),
        s = r("hDWWf"),
        l = r("hSz8d"),
        c = r("5zUIN");
    let u, d, f = e => e;
    var p = e => {
        const t = a.useMemo((() => {
                var t;
                return null !== (t = e.theme) && void 0 !== t ? t : s.SiteHeaderTheme.light
            }), [e.theme]),
            r = a.useMemo((() => {
                var t;
                return null !== (t = e.alpha) && void 0 !== t ? t : l.SiteHeaderAlpha.standard
            }), [e.alpha]),
            n = a.useMemo((() => {
                const e = r === l.SiteHeaderAlpha.none ? 1 : t === s.SiteHeaderTheme.light ? .85 : .45;
                return t === s.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${e})` : `rgba(16, 16, 16, ${e})`
            }), [t, r]),
            i = a.useMemo((() => t === s.SiteHeaderTheme.light ? "rgb(235, 238, 241)" : "rgb(143 143 143 / 60%)"), [t]);
        return (0, o.jsxs)(h, {
            background: n,
            borderColor: i,
            children: [(0, o.jsxs)(g, {
                children: [(0, o.jsx)(c.default, {
                    options: e.options,
                    selectedOption: e.selectedOption,
                    theme: t
                }), (0, o.jsx)("div", {
                    children: e.rightSideContent
                })]
            }), e.bottomContent]
        })
    };
    const h = i.default.div.attrs({
            className: "maxWidth"
        })(u || (u = f`
  background: ${0};
  padding: 7px 25px;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px ${0};
`), (e => e.background), (e => e.borderColor)),
        g = i.default.div.attrs({
            className: "maxWidth flex vc between"
        })(d || (d = f``))
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
})), r.register("5zUIN", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("i5Qjx"),
        i = r("cDZyt"),
        s = r("2FDaO");
    let l;
    var c = e => (0, o.jsx)(u, {
        children: (0, o.jsx)(a.default, {
            direction: "horizontal",
            size: 8,
            wrap: !0,
            children: e.options.map((t => (0, o.jsx)(i.default, {
                option: t,
                selected: e.selectedOption === t.id,
                theme: e.theme
            }, `option-${t.id}`)))
        })
    });
    const u = s.default.div.attrs({
        className: "scroll-x"
    })(l || (l = (e => e)`
  flex: 1;
`))
})), r.register("cDZyt", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("hDWWf"),
        s = r("2FDaO"),
        l = r("4aaLU"),
        c = r("3uz2P"),
        u = r("beXRF"),
        d = r("kyvf1");
    let f;
    var p = e => {
        const {
            theme: t,
            option: r
        } = e, {
            pathname: n
        } = (0, u.useLocation)(), {
            label: s,
            icon: f,
            path: p,
            otherMatchingPaths: g
        } = r, m = (() => {
            if (p) {
                if ((0, c.matchPath)({
                        path: p
                    }, n)) return !0;
                if ((null == g ? void 0 : g.length) && g.some((e => (0, c.matchPath)({
                        path: e
                    }, n)))) return !0
            }
            return !1
        })(), x = a.useMemo((() => !!m || e.selected), [m, e.selected]), v = a.useMemo((() => x ? "#1677ff" : "transparent"), [t, x]), y = a.useMemo((() => x ? l.default.White : t === i.SiteHeaderTheme.light ? "rgb(26, 27, 37)" : l.default.White), [t, x]), b = a.useMemo((() => x ? v : t === i.SiteHeaderTheme.light ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.1)"), [t, x, v]);
        return (0, o.jsx)(d.default, {
            to: p,
            target: e.option.target,
            onClick: r.onSelect,
            style: {
                cursor: "pointer"
            },
            children: (0, o.jsxs)(h, {
                background: v,
                color: y,
                hoverBackground: b,
                children: [f ? (0, o.jsx)("span", {
                    style: {
                        marginRight: 6,
                        fontSize: "0.9em"
                    },
                    children: f
                }) : null, s]
            })
        })
    };
    const h = s.default.div.attrs({
        className: "flex-center"
    })(f || (f = (e => e)`
  line-height: 1;
  padding: 6px 12px;
  border-radius: 50px;
  background: ${0};
  white-space: nowrap;
  color: ${0};
  font-size: 15px;
  cursor: pointer;
  transition: background 0.14s ease-in-out;
  &:hover {
    background: ${0};
  }
`), (e => e.background), (e => e.color), (e => e.hoverBackground))
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
})), r.register("3cEI4", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("hxEiv"),
        a = r("b9Zw0");
    r("fywoC");
    var i = r("2FDaO"),
        s = r("iROck");
    let l;
    var c = () => (0, o.jsx)(u, {
        children: (0, o.jsx)(a.default.Search, {
            style: {
                width: 285
            },
            enterButton: !0,
            placeholder: "Search for kits...",
            onSearch: e => {
                e && (0, s.NavigateTo)(`/search?q=${e}`)
            }
        })
    });
    const u = i.default.div(l || (l = (e => e)`
  margin-right: -4px;
  margin-left: 30px;
`))
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
})), r.register("kuEJ4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("iI4DW"),
        a = r("fywoC"),
        i = r("4gMdJ");

    function s(e, t, r) {
        return function(n) {
            const {
                prefixCls: s,
                style: l
            } = n, c = a.useRef(null), [u, d] = a.useState(0), [f, p] = a.useState(0), [h, g] = (0, o.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: m
            } = a.useContext(i.ConfigContext), x = m(t || "select", s);
            return a.useEffect((() => {
                if (g(!0), "undefined" != typeof ResizeObserver) {
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
                style: Object.assign(Object.assign({}, l), {
                    margin: 0
                }),
                open: h,
                visible: h,
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
        s = new(0, o.Keyframes)("antMoveDownOut", {
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
        l = new(0, o.Keyframes)("antMoveLeftIn", {
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
})), r.register("dhxiD", (function(e, t) {
    var n = r("1fK2g"),
        o = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var r, a, i, s, l, c, u = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (i = n(), s = document.createRange(), l = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var a = o[t.format] || o.default;
                            window.clipboardData.setData(a, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(c), s.selectNodeContents(c), l.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
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
            l && ("function" == typeof l.removeRange ? l.removeRange(s) : l.removeAllRanges()), c && document.body.removeChild(c), i()
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

    function s() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }
    e.exports.useWindowSize = function() {
        var e = i.useState(s()),
            t = e[0],
            r = e[1];
        return i.useLayoutEffect((function() {
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
    var s = i(r("fywoC"));
    e.exports.useComponentSize = function() {
        var e = s.useState({
                height: 0,
                width: 0
            }),
            t = e[0],
            r = e[1],
            o = s.useRef(),
            a = s.useCallback((function() {
                if (o.current) {
                    var e = o.current.offsetHeight,
                        n = o.current.offsetWidth;
                    e === t.height && n === t.width || r({
                        height: e,
                        width: n
                    })
                }
            }), [t.height, t.width]);
        return s.useLayoutEffect((function() {
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
})), r.register("69bEv", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv"),
        a = r("4Gnmi"),
        i = r("fywoC");
    const s = i.lazy((() => r("9mi4b")));
    var l = e => {
        const t = e.hideSkeleton ? (0, o.jsx)("div", {
            className: "maxWidth"
        }) : (0, o.jsx)("div", {
            className: "maxWidth",
            children: (0, o.jsx)(a.default, {
                active: !0,
                title: !1,
                paragraph: {
                    rows: 9
                }
            })
        });
        return (0, o.jsx)(i.Suspense, {
            fallback: t,
            children: (0, o.jsx)(s, {
                ...e
            })
        })
    }
})), r.register("9mi4b", (function(e, t) {
    e.exports = Promise.all([r("g2MeW")(new URL(r("ihc6Q").resolve("2nG1U"), import.meta.url).toString()), import("./" + r("ihc6Q").resolve("6iUO5"))]).then((() => r("jLITb")))
})), r.register("l5RHB", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("5xGm1"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "ClockCircleOutlined";
    var c = a.forwardRef(l)
})), r.register("5xGm1", (function(t, r) {
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
                    d: "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"
                }
            }]
        },
        name: "clock-circle",
        theme: "outlined"
    }
})), r.register("lOxf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("cpDNt"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "TrophyOutlined";
    var c = a.forwardRef(l)
})), r.register("cpDNt", (function(t, r) {
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
                    d: "M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"
                }
            }]
        },
        name: "trophy",
        theme: "outlined"
    }
})), r.register("bbvHy", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        normal: "\n  font-family: 'Product Sans', sans-serif;\n  font-weight: 400;\n",
        bold: "\n    font-family: 'Product Sans', sans-serif;\n    font-weight: 800;\n  ",
        black: "\n  font-family: 'Product Sans', sans-serif;\n  font-weight: 900;\n",
        fontFamilyName: "Product Sans, sans-serif"
    }
})), r.register("dohZB", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("bVHCc"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "UsergroupAddOutlined";
    var c = a.forwardRef(l)
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
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "LogoutOutlined";
    var c = a.forwardRef(l)
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
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "CheckOutlined";
    var c = a.forwardRef(l)
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
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "DownOutlined";
    var c = a.forwardRef(l)
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
})), r.register("5vs73", (function(t, r) {
    e(t.exports, "CLASSIC", (function() {
        return n
    })), e(t.exports, "TEAMS", (function() {
        return o
    })), e(t.exports, "THANOS", (function() {
        return a
    })), e(t.exports, "BOSS_BATTLE", (function() {
        return i
    })), e(t.exports, "HUMAN_ZOMBIE_DEFENDING_HOMEBASE", (function() {
        return s
    })), e(t.exports, "LAVA", (function() {
        return l
    })), e(t.exports, "IMPOSTER", (function() {
        return c
    })), e(t.exports, "DRAW", (function() {
        return u
    })), e(t.exports, "PARDY", (function() {
        return d
    }));
    const n = "CLASSIC",
        o = "TEAMS",
        a = "THANOS",
        i = "BOSS_BATTLE",
        s = "HUMAN_ZOMBIE_DEFENDING_HOMEBASE",
        l = "LAVA",
        c = "IMPOSTER",
        u = "DRAW",
        d = "PARDY"
})), r.register("5AR3F", (function(n, o) {
    e(n.exports, "default", (function() {
        return m
    }));
    var a = r("2ic9V"),
        i = r("iStnv"),
        s = r("hzerz"),
        l = r("46jhs"),
        c = r("hn4Tf"),
        u = r("7NK35"),
        d = r("b1RjK"),
        f = r("17aYs"),
        p = r("fywoC"),
        h = r("fe1on"),
        g = function(e) {
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
                        target: (0, l.default)((0, l.default)({}, t.props), {}, {
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
                        l = r.style,
                        c = r.name,
                        u = r.id,
                        d = r.type,
                        f = r.disabled,
                        g = r.readOnly,
                        m = r.tabIndex,
                        x = r.onClick,
                        v = r.onFocus,
                        y = r.onBlur,
                        b = r.onKeyDown,
                        w = r.onKeyPress,
                        j = r.onKeyUp,
                        k = r.autoFocus,
                        C = r.value,
                        S = r.required,
                        E = (0, s.default)(r, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]),
                        O = Object.keys(E).reduce((function(e, t) {
                            return "aria-" !== t.substr(0, 5) && "data-" !== t.substr(0, 5) && "role" !== t || (e[t] = E[t]), e
                        }), {}),
                        M = this.state.checked,
                        T = t(h)(n, o, (e = {}, (0, i.default)(e, "".concat(n, "-checked"), M), (0, i.default)(e, "".concat(n, "-disabled"), f), e));
                    return t(p).createElement("span", {
                        className: T,
                        style: l
                    }, t(p).createElement("input", (0, a.default)({
                        name: c,
                        id: u,
                        type: d,
                        required: S,
                        readOnly: g,
                        disabled: f,
                        tabIndex: m,
                        className: "".concat(n, "-input"),
                        checked: !!M,
                        onClick: x,
                        onFocus: v,
                        onBlur: y,
                        onKeyUp: j,
                        onKeyDown: b,
                        onKeyPress: w,
                        onChange: this.handleChange,
                        autoFocus: k,
                        ref: this.saveInput,
                        value: C
                    }, O)), t(p).createElement("span", {
                        className: "".concat(n, "-inner")
                    }))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return "checked" in e ? (0, l.default)((0, l.default)({}, t), {}, {
                        checked: e.checked
                    }) : null
                }
            }]), n
        }(p.Component);
    g.defaultProps = {
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
    var m = g
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
        return s
    }));
    var o = r("bArAQ"),
        a = r("lcgmN"),
        i = r("erlXZ");

    function s(e) {
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
        return s
    }));
    var a = r("1eKqi"),
        i = r("cdb2f");

    function s(e, r) {
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
        return s
    }));
    var o = r("hxEiv"),
        a = r("fywoC");
    const i = a.lazy((() => r("h3n1W")));
    var s = e => (0, o.jsx)(a.Suspense, {
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
})), r.register("j2XHK", (function(t, r) {
    let n;
    var o;
    let a;
    var i;
    let s;
    var l;
    let c;
    let u;
    var d;
    e(t.exports, "QuestionType", (function() {
        return n
    })), e(t.exports, "Privacy", (function() {
        return a
    })), e(t.exports, "GameStatus", (function() {
        return s
    })), e(t.exports, "GameType", (function() {
        return c
    })), e(t.exports, "GameGoal", (function() {
        return u
    })), e(t.exports, "themes", (function() {
        return m
    })), e(t.exports, "ExperienceSource", (function() {
        return x
    })), (o = n || (n = {})).multipleChoice = "mc", o.textInput = "text", (i = a || (a = {})).public = "public", i.private = "private", (l = s || (s = {})).setup = "setup", l.join = "join", l.teams = "teams", l.gameplay = "gameplay", l.results = "results", (c || (c = {})).live = "live", (d = u || (u = {})).time = "time", d.race = "race", d.allIn = "allIn";
    const f = "#ffffff",
        p = "#000000";
    let h;
    var g;
    (g = h || (h = {})).easy = "easy", g.medium = "medium", g.hard = "hard", g.veryHard = "veryHard", g.veryVeryHard = "veryVeryHard";
    const m = [{
        cost: 0,
        name: "Default",
        description: "Works fine, that's all",
        question: {
            background: "#303f9f",
            text: f
        },
        palette: [{
            background: "#771322",
            text: f
        }, {
            background: "#A85C15",
            text: f
        }, {
            background: "#0D6B33",
            text: f
        }, {
            background: "#076296",
            text: f
        }],
        owned: !0,
        isActive: !0
    }, {
        cost: 5,
        name: "Thanksgiving",
        description: "The perfect theme to show your thanks",
        question: {
            background: "#6C2F00",
            text: f
        },
        palette: [{
            background: "#9E682A",
            text: f
        }, {
            background: "#B54730",
            text: f
        }, {
            background: "#8A9748",
            text: f
        }, {
            background: "#F1B930",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 10,
        name: "Night",
        description: "A little easier on the eyes",
        question: {
            background: "#000a12",
            text: f
        },
        palette: [{
            background: "#263238",
            text: f
        }, {
            background: "#37474f",
            text: f
        }, {
            background: "#455a64",
            text: f
        }, {
            background: "#546e7a",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 5e5,
        name: "Thanos",
        description: "Perfectly balanced, as all things should be",
        question: {
            background: "#0D0019",
            text: f
        },
        palette: [{
            background: "#220044",
            text: f
        }, {
            background: "#330066",
            text: f
        }, {
            background: "#3E007C",
            text: f
        }, {
            background: "#4F1787",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 2e3,
        name: "Ocean",
        description: "Under the sea...",
        question: {
            background: "#000063",
            text: f
        },
        palette: [{
            background: "#283593",
            text: f
        }, {
            background: "#076296",
            text: f
        }, {
            background: "#0277bd",
            text: f
        }, {
            background: "#1565c0",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1e5,
        name: "Forest",
        description: "A walk through the woods",
        question: {
            background: "#4c3d33",
            text: f
        },
        palette: [{
            background: "#385645",
            text: f
        }, {
            background: "#425C49",
            text: f
        }, {
            background: "#415641",
            text: f
        }, {
            background: "#4C6349",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1250,
        name: "Sunset",
        description: "Take a breather",
        question: {
            background: "#7F7496",
            text: f
        },
        palette: [{
            background: "#F46F5A",
            text: f
        }, {
            background: "#ED712D",
            text: f
        }, {
            background: "#7A596A",
            text: f
        }, {
            background: "#E8AB3C",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 750,
        name: "Pastel",
        description: "Lighten the mood",
        question: {
            background: "#FFbfd1",
            text: "#434343"
        },
        palette: [{
            background: "#FFA69E",
            text: "#5b5b5b"
        }, {
            background: "#FCF6BF",
            text: "#5b5b5b"
        }, {
            background: "#D0F4DE",
            text: "#5b5b5b"
        }, {
            background: "#93E1D8",
            text: "#5b5b5b"
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 500,
        name: "Retro",
        description: "Old school...",
        question: {
            background: "#9C0022",
            text: f
        },
        palette: [{
            background: "#001D3B",
            text: f
        }, {
            background: "#FFAE52",
            text: f
        }, {
            background: "#FE5963",
            text: f
        }, {
            background: "#A71C94",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1e8,
        name: "Pure Gold",
        description: "Now you're just showing off",
        question: {
            background: p,
            text: "#FFCD2B"
        },
        palette: [{
            background: "#FFCD2B",
            text: p
        }, {
            background: "#FFC721",
            text: p
        }, {
            background: "#FFD147",
            text: p
        }, {
            background: "#FFCD38",
            text: p
        }],
        owned: !1,
        isActive: !1
    }];
    let x;
    var v;
    (v = x || (x = {})).original = "original", v.map = "map"
})), r.register("3aHwG", (function(t, r) {
    let n;
    var o;
    e(t.exports, "MapModeType", (function() {
        return n
    })), (o = n || (n = {})).liveGame = "liveGame", o.assignment = "assignment"
})), r.register("8p0tB", (function(t, n) {
    e(t.exports, "AnalyticsTrackEvent", (function() {
        return l
    }));
    var o = r("6fFlL"),
        a = r("iMOcM"),
        i = r("dOsOD"),
        s = r("amvOw");
    const l = e => {
        var t, r, n;
        if ((window.gtag && !(null === (t = e.blockedSource) || void 0 === t ? void 0 : t.google) && window.gtag("event", e.event, e.properties), i.AnalyticsFlags.educatorOnly) && (null === (n = (0, a.getUser)()) || void 0 === n ? void 0 : n.accountType) !== o.default.educator) return;
        (null === (r = e.blockedSource) || void 0 === r ? void 0 : r.posthog) || (0, s.TrackPostHogEvent)({
            event: e.event,
            properties: e.properties,
            force: e.forcePostHog
        })
    }
})), r.register("56tQE", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("fywoC"),
        a = r("3KQc0"),
        i = r("9iNNJ");
    var s = (e, t) => {
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
        s = r("f1PHW");
    let l;
    const c = () => l || (l = function() {
        const e = new Map,
            t = new(0, o.default)((0, s.default)(((t, r) => {
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
})), r.register("9Mv96", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = r("kqQIs"),
        a = r("2Af7I"),
        i = r("fywoC");
    r("djNMu");
    var s = r("aWdbz"),
        l = r("cY4lv"),
        c = r("kYx4h"),
        u = 44;

    function d(e) {
        var t, r, n;
        return t = e, r = 0, n = 1, e = (Math.min(Math.max(r, t), n) - r) / (n - r), e = (e -= 1) * e * e + 1
    }
    var f = i.forwardRef((function(e, t) {
            var r, n = e.classes,
                l = e.className,
                f = e.color,
                p = void 0 === f ? "primary" : f,
                h = e.disableShrink,
                g = void 0 !== h && h,
                m = e.size,
                x = void 0 === m ? 40 : m,
                v = e.style,
                y = e.thickness,
                b = void 0 === y ? 3.6 : y,
                w = e.value,
                j = void 0 === w ? 0 : w,
                k = e.variant,
                C = void 0 === k ? "indeterminate" : k,
                S = (0, a.default)(e, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]),
                E = {},
                O = {},
                M = {};
            if ("determinate" === C || "static" === C) {
                var T = 2 * Math.PI * ((u - b) / 2);
                E.strokeDasharray = T.toFixed(3), M["aria-valuenow"] = Math.round(j), "static" === C ? (E.strokeDashoffset = "".concat(((100 - j) / 100 * T).toFixed(3), "px"), O.transform = "rotate(-90deg)") : (E.strokeDashoffset = "".concat((r = (100 - j) / 100, r * r * T).toFixed(3), "px"), O.transform = "rotate(".concat((270 * d(j / 70)).toFixed(3), "deg)"))
            }
            return i.createElement("div", (0, o.default)({
                className: (0, s.default)(n.root, l, "inherit" !== p && n["color".concat((0, c.default)(p))], {
                    indeterminate: n.indeterminate,
                    static: n.static
                } [C]),
                style: (0, o.default)({
                    width: x,
                    height: x
                }, O, v),
                ref: t,
                role: "progressbar"
            }, M, S), i.createElement("svg", {
                className: n.svg,
                viewBox: "".concat(22, " ").concat(22, " ").concat(u, " ").concat(u)
            }, i.createElement("circle", {
                className: (0, s.default)(n.circle, g && n.circleDisableShrink, {
                    indeterminate: n.circleIndeterminate,
                    static: n.circleStatic
                } [C]),
                style: E,
                cx: u,
                cy: u,
                r: (u - b) / 2,
                fill: "none",
                strokeWidth: b
            })))
        })),
        p = (0, l.default)((function(e) {
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
        })(f)
})), r.register("lvQ9C", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("1HsHH"),
        s = r("iMOcM");
    var l = e => {
        const [t, r] = a.useState([]), [n] = a.useState(e.limit), [l, c] = a.useState(e.defaultPage), [u, d] = a.useState(!0), [f, p] = a.useState([]), [h, g] = a.useState(!1), m = a.useMemo((() => (e.modifyItems ? e.modifyItems(f) : f).map(((t, r) => e.toRender(t, r)))), [f.length, e.toRender]), x = () => {
            if (t.includes(l)) return;
            r((e => [...e, l]));
            const o = {
                page: l,
                limit: n
            };
            (0, s.request)({
                url: e.url,
                method: "post",
                cacheKey: e.cacheKey,
                data: e.modifyBody ? e.modifyBody(o) : o,
                success: (t, r) => {
                    e.onTotalItems && !h && (e.onTotalItems(t.totalItems), g(!0)), t.items.forEach((t => {
                        e.onItemFetched && e.onItemFetched(t, r)
                    })), p((e => [...e, ...t.items])), d(t.hasNextPage), c(t.nextPage)
                },
                error: () => {
                    e.onTotalItems && !h && (e.onTotalItems(0), g(!0)), d(!1)
                },
                both: () => r((e => e.filter((e => e !== o.page))))
            })
        };
        return a.useEffect(x, []), !u && e.forceEmptyMessage || !u && 0 === f.length && e.emptyMessage ? e.emptyMessage(f) : (0, o.jsxs)(i.default, {
            dataLength: f.length,
            hasMore: u,
            style: e.scrollStyle,
            next: x,
            loader: e.loader || (0, o.jsx)("div", {}),
            scrollThreshold: e.scrollThreshold,
            endMessage: e.endMessage ? e.endMessage(f) : null,
            scrollableTarget: e.scrollableTarget,
            children: [e.prefix ? e.prefix() : null, m]
        })
    }
})), r.register("1HsHH", (function(n, o) {
    e(n.exports, "default", (function() {
        return p
    }));
    var a = r("fywoC"),
        i = function(e, t) {
            return i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            }, i(e, t)
        };
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var s = function() {
        return s = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }, s.apply(this, arguments)
    };
    var l = "Pixel",
        c = "Percent",
        u = {
            unit: c,
            value: .8
        };

    function d(e) {
        return "number" == typeof e ? {
            unit: c,
            value: 100 * e
        } : "string" == typeof e ? e.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: l,
            value: parseFloat(e)
        } : e.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: c,
            value: parseFloat(e)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), u) : (console.warn("scrollThreshold should be string or number"), u)
    }
    var f = function(e) {
            function r(t) {
                var r = e.call(this, t) || this;
                return r.lastScrollTop = 0, r.actionTriggered = !1, r.startY = 0, r.currentY = 0, r.dragging = !1, r.maxPullDownDistance = 0, r.getScrollableTarget = function() {
                    return r.props.scrollableTarget instanceof HTMLElement ? r.props.scrollableTarget : "string" == typeof r.props.scrollableTarget ? document.getElementById(r.props.scrollableTarget) : (null === r.props.scrollableTarget && console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "), null)
                }, r.onStart = function(e) {
                    r.lastScrollTop || (r.dragging = !0, e instanceof MouseEvent ? r.startY = e.pageY : e instanceof TouchEvent && (r.startY = e.touches[0].pageY), r.currentY = r.startY, r._infScroll && (r._infScroll.style.willChange = "transform", r._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)"))
                }, r.onMove = function(e) {
                    r.dragging && (e instanceof MouseEvent ? r.currentY = e.pageY : e instanceof TouchEvent && (r.currentY = e.touches[0].pageY), r.currentY < r.startY || (r.currentY - r.startY >= Number(r.props.pullDownToRefreshThreshold) && r.setState({
                        pullToRefreshThresholdBreached: !0
                    }), r.currentY - r.startY > 1.5 * r.maxPullDownDistance || r._infScroll && (r._infScroll.style.overflow = "visible", r._infScroll.style.transform = "translate3d(0px, " + (r.currentY - r.startY) + "px, 0px)")))
                }, r.onEnd = function() {
                    r.startY = 0, r.currentY = 0, r.dragging = !1, r.state.pullToRefreshThresholdBreached && (r.props.refreshFunction && r.props.refreshFunction(), r.setState({
                        pullToRefreshThresholdBreached: !1
                    })), requestAnimationFrame((function() {
                        r._infScroll && (r._infScroll.style.overflow = "auto", r._infScroll.style.transform = "none", r._infScroll.style.willChange = "none")
                    }))
                }, r.onScrollListener = function(e) {
                    "function" == typeof r.props.onScroll && setTimeout((function() {
                        return r.props.onScroll && r.props.onScroll(e)
                    }), 0);
                    var t = r.props.height || r._scrollableNode ? e.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    r.actionTriggered || ((r.props.inverse ? r.isElementAtTop(t, r.props.scrollThreshold) : r.isElementAtBottom(t, r.props.scrollThreshold)) && r.props.hasMore && (r.actionTriggered = !0, r.setState({
                        showLoader: !0
                    }), r.props.next && r.props.next()), r.lastScrollTop = t.scrollTop)
                }, r.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, r.throttledOnScrollListener = function(e, t, r, n) {
                    var o, a = !1,
                        i = 0;

                    function s() {
                        o && clearTimeout(o)
                    }

                    function l() {
                        var l = this,
                            c = Date.now() - i,
                            u = arguments;

                        function d() {
                            i = Date.now(), r.apply(l, u)
                        }

                        function f() {
                            o = void 0
                        }
                        a || (n && !o && d(), s(), void 0 === n && c > e ? d() : !0 !== t && (o = setTimeout(n ? f : d, void 0 === n ? e - c : e)))
                    }
                    return "boolean" != typeof t && (n = r, r = t, t = void 0), l.cancel = function() {
                        s(), a = !0
                    }, l
                }(150, r.onScrollListener).bind(r), r.onStart = r.onStart.bind(r), r.onMove = r.onMove.bind(r), r.onEnd = r.onEnd.bind(r), r
            }
            return function(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }(r, e), r.prototype.componentDidMount = function() {
                if (void 0 === this.props.dataLength) throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener("scroll", this.throttledOnScrollListener), "number" == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener("touchstart", this.onStart), this.el.addEventListener("touchmove", this.onMove), this.el.addEventListener("touchend", this.onEnd), this.el.addEventListener("mousedown", this.onStart), this.el.addEventListener("mousemove", this.onMove), this.el.addEventListener("mouseup", this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), "function" != typeof this.props.refreshFunction)) throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')
            }, r.prototype.componentWillUnmount = function() {
                this.el && (this.el.removeEventListener("scroll", this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener("touchstart", this.onStart), this.el.removeEventListener("touchmove", this.onMove), this.el.removeEventListener("touchend", this.onEnd), this.el.removeEventListener("mousedown", this.onStart), this.el.removeEventListener("mousemove", this.onMove), this.el.removeEventListener("mouseup", this.onEnd)))
            }, r.prototype.UNSAFE_componentWillReceiveProps = function(e) {
                this.props.dataLength !== e.dataLength && (this.actionTriggered = !1, this.setState({
                    showLoader: !1
                }))
            }, r.prototype.isElementAtTop = function(e, t) {
                void 0 === t && (t = .8);
                var r = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                    n = d(t);
                return n.unit === l ? e.scrollTop <= n.value + r - e.scrollHeight + 1 || 0 === e.scrollTop : e.scrollTop <= n.value / 100 + r - e.scrollHeight + 1 || 0 === e.scrollTop
            }, r.prototype.isElementAtBottom = function(e, t) {
                void 0 === t && (t = .8);
                var r = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                    n = d(t);
                return n.unit === l ? e.scrollTop + r >= e.scrollHeight - n.value : e.scrollTop + r >= n.value / 100 * e.scrollHeight
            }, r.prototype.render = function() {
                var e = this,
                    r = s({
                        height: this.props.height || "auto",
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch"
                    }, this.props.style),
                    n = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                    o = this.props.pullDownToRefresh && this.props.height ? {
                        overflow: "auto"
                    } : {};
                return t(a).createElement("div", {
                    style: o,
                    className: "infinite-scroll-component__outerdiv"
                }, t(a).createElement("div", {
                    className: "infinite-scroll-component " + (this.props.className || ""),
                    ref: function(t) {
                        return e._infScroll = t
                    },
                    style: r
                }, this.props.pullDownToRefresh && t(a).createElement("div", {
                    style: {
                        position: "relative"
                    },
                    ref: function(t) {
                        return e._pullDown = t
                    }
                }, t(a).createElement("div", {
                    style: {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !n && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage))
            }, r
        }(a.Component),
        p = f
})), r.register("cO2Su", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        i = r("lKmIF");
    let s;
    var l = e => (0, o.jsx)(c, {
        onClick: e.onClick,
        className: e.className,
        style: e.style,
        children: e.children
    });
    const c = a.default.div(s || (s = (e => e)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${0};
  padding: 20px;
`), i.default.White)
})), r.register("7uYFt", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("hC3BQ"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "EnterOutlined";
    var c = a.forwardRef(l)
})), r.register("hC3BQ", (function(t, r) {
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
                    d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "enter",
        theme: "outlined"
    }
})), r.register("eFy2j", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("fywoC");

    function a() {
        const [, e] = o.useReducer((e => e + 1), 0);
        return e
    }
})), r.register("gJKjM", (function(n, o) {
    e(n.exports, "responsiveArray", (function() {
        return s
    })), e(n.exports, "default", (function() {
        return l
    }));
    var a = r("fywoC"),
        i = r("2tfup");
    const s = ["xxl", "xl", "lg", "md", "sm", "xs"];

    function l() {
        const [, e] = (0, i.useToken)(), r = (e => ({
            xs: `(max-width: ${e.screenXSMax}px)`,
            sm: `(min-width: ${e.screenSM}px)`,
            md: `(min-width: ${e.screenMD}px)`,
            lg: `(min-width: ${e.screenLG}px)`,
            xl: `(min-width: ${e.screenXL}px)`,
            xxl: `(min-width: ${e.screenXXL}px)`
        }))((e => {
            const t = e,
                r = [].concat(s).reverse();
            return r.forEach(((e, n) => {
                const o = e.toUpperCase(),
                    a = `screen${o}Min`,
                    i = `screen${o}`;
                if (!(t[a] <= t[i])) throw new Error(`${a}<=${i} fails : !(${t[a]}<=${t[i]})`);
                if (n < r.length - 1) {
                    const e = `screen${o}Max`;
                    if (!(t[i] <= t[e])) throw new Error(`${i}<=${e} fails : !(${t[i]}<=${t[e]})`);
                    const a = `screen${r[n+1].toUpperCase()}Min`;
                    if (!(t[e] <= t[a])) throw new Error(`${e}<=${a} fails : !(${t[e]}<=${t[a]})`)
                }
            })), e
        })(e));
        return t(a).useMemo((() => {
            const e = new Map;
            let t = -1,
                n = {};
            return {
                matchHandlers: {},
                dispatch: t => (n = t, e.forEach((e => e(n))), e.size >= 1),
                subscribe(r) {
                    return e.size || this.register(), t += 1, e.set(t, r), r(n), t
                },
                unsubscribe(t) {
                    e.delete(t), e.size || this.unregister()
                },
                unregister() {
                    Object.keys(r).forEach((e => {
                        const t = r[e],
                            n = this.matchHandlers[t];
                        null == n || n.mql.removeListener(null == n ? void 0 : n.listener)
                    })), e.clear()
                },
                register() {
                    Object.keys(r).forEach((e => {
                        const t = r[e],
                            o = t => {
                                let {
                                    matches: r
                                } = t;
                                this.dispatch(Object.assign(Object.assign({}, n), {
                                    [e]: r
                                }))
                            },
                            a = window.matchMedia(t);
                        a.addListener(o), this.matchHandlers[t] = {
                            mql: a,
                            listener: o
                        }, o(a)
                    }))
                },
                responsiveMap: r
            }
        }), [e])
    }
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
})), r.register("exbzb", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("8N8s4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "QuestionCircleOutlined";
    var c = a.forwardRef(l)
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
})), r.register("4I2uy", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("dtIp3"),
        a = r("eFQZy");
    const i = o.default;
    i.Group = a.default, i.__ANT_CHECKBOX = !0;
    var s = i
})), r.register("dtIp3", (function(n, o) {
    e(n.exports, "default", (function() {
        return g
    }), (function(e) {
        return g = e
    }));
    var a = r("fe1on"),
        i = r("5AR3F"),
        s = r("fywoC"),
        l = r("4gMdJ"),
        c = r("jIMUD"),
        u = r("eFQZy"),
        d = r("cmARv"),
        f = r("m9O7S"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const h = (e, r) => {
        var n, {
                prefixCls: o,
                className: h,
                rootClassName: g,
                children: m,
                indeterminate: x = !1,
                style: v,
                onMouseEnter: y,
                onMouseLeave: b,
                skipGroup: w = !1,
                disabled: j
            } = e,
            k = p(e, ["prefixCls", "className", "rootClassName", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]);
        const {
            getPrefixCls: C,
            direction: S
        } = s.useContext(l.ConfigContext), E = s.useContext(u.GroupContext), {
            isFormItemInput: O
        } = s.useContext(c.FormItemInputContext), M = s.useContext(d.default), T = null !== (n = (null == E ? void 0 : E.disabled) || j) && void 0 !== n ? n : M, I = s.useRef(k.value);
        s.useEffect((() => {
            null == E || E.registerValue(k.value)
        }), []), s.useEffect((() => {
            if (!w) return k.value !== I.current && (null == E || E.cancelValue(I.current), null == E || E.registerValue(k.value), I.current = k.value), () => null == E ? void 0 : E.cancelValue(k.value)
        }), [k.value]);
        const F = C("checkbox", o),
            [N, D] = (0, f.default)(F),
            P = Object.assign({}, k);
        E && !w && (P.onChange = function() {
            k.onChange && k.onChange.apply(k, arguments), E.toggleOption && E.toggleOption({
                label: m,
                value: k.value
            })
        }, P.name = E.name, P.checked = E.value.includes(k.value));
        const $ = t(a)({
                [`${F}-wrapper`]: !0,
                [`${F}-rtl`]: "rtl" === S,
                [`${F}-wrapper-checked`]: P.checked,
                [`${F}-wrapper-disabled`]: T,
                [`${F}-wrapper-in-form-item`]: O
            }, h, g, D),
            z = t(a)({
                [`${F}-indeterminate`]: x
            }, D),
            A = x ? "mixed" : void 0;
        return N(s.createElement("label", {
            className: $,
            style: v,
            onMouseEnter: y,
            onMouseLeave: b
        }, s.createElement(i.default, Object.assign({
            "aria-checked": A
        }, P, {
            prefixCls: F,
            className: z,
            disabled: T,
            ref: r
        })), void 0 !== m && s.createElement("span", null, m)))
    };
    var g = s.forwardRef(h)
})), r.register("eFQZy", (function(n, o) {
    e(n.exports, "GroupContext", (function() {
        return p
    }), (function(e) {
        return p = e
    })), e(n.exports, "default", (function() {
        return m
    }), (function(e) {
        return m = e
    }));
    var a = r("5Toxq"),
        i = r("fe1on"),
        s = r("8mdco"),
        l = r("fywoC"),
        c = r("4gMdJ"),
        u = r("dtIp3"),
        d = r("m9O7S"),
        f = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const p = l.createContext(null),
        h = (e, r) => {
            var {
                defaultValue: n,
                children: o,
                options: h = [],
                prefixCls: g,
                className: m,
                rootClassName: x,
                style: v,
                onChange: y
            } = e, b = f(e, ["defaultValue", "children", "options", "prefixCls", "className", "rootClassName", "style", "onChange"]);
            const {
                getPrefixCls: w,
                direction: j
            } = l.useContext(c.ConfigContext), [k, C] = l.useState(b.value || n || []), [S, E] = l.useState([]);
            l.useEffect((() => {
                "value" in b && C(b.value || [])
            }), [b.value]);
            const O = () => h.map((e => "string" == typeof e || "number" == typeof e ? {
                    label: e,
                    value: e
                } : e)),
                M = w("checkbox", g),
                T = `${M}-group`,
                [I, F] = (0, d.default)(M),
                N = (0, s.default)(b, ["value", "disabled"]);
            h && h.length > 0 && (o = O().map((e => l.createElement(u.default, {
                prefixCls: M,
                key: e.value.toString(),
                disabled: "disabled" in e ? e.disabled : b.disabled,
                value: e.value,
                checked: k.includes(e.value),
                onChange: e.onChange,
                className: `${T}-item`,
                style: e.style
            }, e.label))));
            const D = {
                    toggleOption: e => {
                        const t = k.indexOf(e.value),
                            r = (0, a.default)(k); - 1 === t ? r.push(e.value) : r.splice(t, 1), "value" in b || C(r);
                        const n = O();
                        null == y || y(r.filter((e => S.includes(e))).sort(((e, t) => n.findIndex((t => t.value === e)) - n.findIndex((e => e.value === t)))))
                    },
                    value: k,
                    disabled: b.disabled,
                    name: b.name,
                    registerValue: e => {
                        E((t => [].concat((0, a.default)(t), [e])))
                    },
                    cancelValue: e => {
                        E((t => t.filter((t => t !== e))))
                    }
                },
                P = t(i)(T, {
                    [`${T}-rtl`]: "rtl" === j
                }, m, x, F);
            return I(l.createElement("div", Object.assign({
                className: P,
                style: v
            }, N, {
                ref: r
            }), l.createElement(p.Provider, {
                value: D
            }, o)))
        },
        g = l.forwardRef(h);
    var m = l.memo(g)
})), r.register("m9O7S", (function(t, n) {
    e(t.exports, "getStyle", (function() {
        return u
    })), e(t.exports, "default", (function() {
        return d
    }));
    var o = r("lt5sb"),
        a = r("huF4L"),
        i = r("1QMe3"),
        s = r("kCC5O");
    const l = new(0, o.Keyframes)("antCheckboxEffect", {
            "0%": {
                transform: "scale(1)",
                opacity: .5
            },
            "100%": {
                transform: "scale(1.6)",
                opacity: 0
            }
        }),
        c = e => {
            const {
                checkboxCls: t
            } = e, r = `${t}-wrapper`;
            return [{
                [`${t}-group`]: Object.assign(Object.assign({}, (0, s.resetComponent)(e)), {
                    display: "inline-flex"
                }),
                [r]: Object.assign(Object.assign({}, (0, s.resetComponent)(e)), {
                    display: "inline-flex",
                    alignItems: "baseline",
                    cursor: "pointer",
                    "&:after": {
                        display: "inline-block",
                        width: 0,
                        overflow: "hidden",
                        content: "'\\a0'"
                    },
                    [`& + ${r}`]: {
                        marginInlineStart: e.marginXS
                    },
                    [`&${r}-in-form-item`]: {
                        'input[type="checkbox"]': {
                            width: 14,
                            height: 14
                        }
                    }
                }),
                [t]: Object.assign(Object.assign({}, (0, s.resetComponent)(e)), {
                    top: "0.2em",
                    position: "relative",
                    whiteSpace: "nowrap",
                    lineHeight: 1,
                    cursor: "pointer",
                    [`${t}-input`]: {
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                        opacity: 0,
                        [`&:focus-visible + ${t}-inner`]: Object.assign({}, (0, s.genFocusOutline)(e))
                    },
                    [`${t}-inner`]: {
                        boxSizing: "border-box",
                        position: "relative",
                        top: 0,
                        insetInlineStart: 0,
                        display: "block",
                        width: e.checkboxSize,
                        height: e.checkboxSize,
                        direction: "ltr",
                        backgroundColor: e.colorBgContainer,
                        border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
                        borderRadius: e.borderRadiusSM,
                        borderCollapse: "separate",
                        transition: `all ${e.motionDurationSlow}`,
                        "&:after": {
                            boxSizing: "border-box",
                            position: "absolute",
                            top: "50%",
                            insetInlineStart: "21.5%",
                            display: "table",
                            width: e.checkboxSize / 14 * 5,
                            height: e.checkboxSize / 14 * 8,
                            border: `${e.lineWidthBold}px solid ${e.colorWhite}`,
                            borderTop: 0,
                            borderInlineStart: 0,
                            transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
                            opacity: 0,
                            content: '""',
                            transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`
                        }
                    },
                    "& + span": {
                        paddingInlineStart: e.paddingXS,
                        paddingInlineEnd: e.paddingXS
                    }
                })
            }, {
                [t]: {
                    "&-indeterminate": {
                        [`${t}-inner`]: {
                            "&:after": {
                                top: "50%",
                                insetInlineStart: "50%",
                                width: e.fontSizeLG / 2,
                                height: e.fontSizeLG / 2,
                                backgroundColor: e.colorPrimary,
                                border: 0,
                                transform: "translate(-50%, -50%) scale(1)",
                                opacity: 1,
                                content: '""'
                            }
                        }
                    }
                }
            }, {
                [`${r}:hover ${t}:after`]: {
                    visibility: "visible"
                },
                [`\n        ${r}:not(${r}-disabled),\n        ${t}:not(${t}-disabled)\n      `]: {
                    [`&:hover ${t}-inner`]: {
                        borderColor: e.colorPrimary
                    }
                },
                [`${r}:not(${r}-disabled)`]: {
                    [`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]: {
                        backgroundColor: e.colorPrimaryHover,
                        borderColor: "transparent"
                    },
                    [`&:hover ${t}-checked:not(${t}-disabled):after`]: {
                        borderColor: e.colorPrimaryHover
                    }
                }
            }, {
                [`${t}-checked`]: {
                    [`${t}-inner`]: {
                        backgroundColor: e.colorPrimary,
                        borderColor: e.colorPrimary,
                        "&:after": {
                            opacity: 1,
                            transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
                            transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`
                        }
                    },
                    "&:after": {
                        position: "absolute",
                        top: 0,
                        insetInlineStart: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: e.borderRadiusSM,
                        visibility: "hidden",
                        border: `${e.lineWidthBold}px solid ${e.colorPrimary}`,
                        animationName: l,
                        animationDuration: e.motionDurationSlow,
                        animationTimingFunction: "ease-in-out",
                        animationFillMode: "backwards",
                        content: '""',
                        transition: `all ${e.motionDurationSlow}`
                    }
                },
                [`\n        ${r}-checked:not(${r}-disabled),\n        ${t}-checked:not(${t}-disabled)\n      `]: {
                    [`&:hover ${t}-inner`]: {
                        backgroundColor: e.colorPrimaryHover,
                        borderColor: "transparent"
                    },
                    [`&:hover ${t}:after`]: {
                        borderColor: e.colorPrimaryHover
                    }
                }
            }, {
                [`${r}-disabled`]: {
                    cursor: "not-allowed"
                },
                [`${t}-disabled`]: {
                    [`&, ${t}-input`]: {
                        cursor: "not-allowed",
                        pointerEvents: "none"
                    },
                    [`${t}-inner`]: {
                        background: e.colorBgContainerDisabled,
                        borderColor: e.colorBorder,
                        "&:after": {
                            borderColor: e.colorTextDisabled
                        }
                    },
                    "&:after": {
                        display: "none"
                    },
                    "& + span": {
                        color: e.colorTextDisabled
                    },
                    [`&${t}-indeterminate ${t}-inner::after`]: {
                        background: e.colorTextDisabled
                    }
                }
            }]
        };

    function u(e, t) {
        const r = (0, i.merge)(t, {
            checkboxCls: `.${e}`,
            checkboxSize: t.controlInteractiveSize
        });
        return [c(r)]
    }
    var d = (0, a.default)("Checkbox", ((e, t) => {
        let {
            prefixCls: r
        } = t;
        return [u(r, e)]
    }))
}));