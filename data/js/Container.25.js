function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _l;
    });
    var g = c('.....');
    c('.....');
    var h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....');
    var _l = () => (0, g.jsx)(k.default.Provider, {
        value: i.default,
        children: (0, g.jsx)(h.Provider, {
            ...i.default,
            children: (0, g.jsx)(j.default, {})
        })
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    var _h = {
        navigation: new(0, f.default)(),
        kits: new(0, g.default)()
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....');
    class h {
        constructor() {
            this.archiveModalShow = !1, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], h.prototype, 'archiveModalShow', void 0);
    var _i = h;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....');
    class h {
        constructor() {
            this.kitAttemptedAction = 'open', (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], h.prototype, 'kitAttemptedAction', void 0);
    var _i = h;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _J;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....'),
        t = c('.....'),
        u = c('.....'),
        v = c('.....'),
        w = c('.....'),
        x = c('.....'),
        y = c('.....'),
        z = c('.....'),
        A = c('.....'),
        B = c('.....');
    let C, D, E, F = G => G;
    const G = h.default.div.attrs({
            className: 'maxAll flex-column'
        })(C || (C = F``)),
        H = h.default.div(D || (D = F`
  flex: 1;
  display: flex;
  font-family: ${ 0 };
`), k.Fonts.SFPro),
        I = h.default.div.attrs({
            id: 'mainContainer',
            className: 'flex-column'
        })(E || (E = F`
  height: 100%;
  background: ${ 0 };
`), i.default.Snow);
    var _J = () => {
        const [K, L, M] = (0, l.useBoolean)(!1), [N, O] = g.useState(!1), [P, Q] = g.useState(!1), R = g.useRef(null), S = (0, B.useMediaMatch)('(max-width: 680px)'), T = (0, l.getUser)();
        if (!T)
            return null;
        const U = (() => {
            const V = [];
            return (0, l.isStudent)() && V.push({
                id: 'home',
                label: 'Home',
                icon: (0, f.jsx)(y.default, {
                    name: 'fas fa-home'
                }),
                path: x.HOME,
                otherMatchingPaths: [x.DASHBOARD]
            }), V.push({
                id: 'kits',
                label: 'Kits',
                icon: (0, f.jsx)(y.default, {
                    name: 'fas fa-box-open'
                }),
                path: x.KITS,
                otherMatchingPaths: (0, z.IsEducator)() ? [
                    x.DASHBOARD,
                    x.KITS_SELECTION
                ] : [x.KITS_SELECTION]
            }), (0, l.isStudent)() || V.push({
                id: 'reports',
                label: 'Reports',
                icon: (0, f.jsx)(y.default, {
                    name: 'fas fa-analytics'
                }),
                path: x.REPORTS
            }, {
                id: 'assignments',
                label: 'Assignments',
                path: x.ASSIGNMENTS,
                icon: (0, f.jsx)(y.default, {
                    name: 'fas fa-file-alt'
                })
            }, {
                id: 'classes',
                label: 'Classes',
                path: x.CLASSES,
                icon: (0, f.jsx)(y.default, {
                    name: 'fas fa-users-class'
                })
            }), (0, l.isStudent)() && V.push({
                id: 'join-game',
                label: 'Join Game',
                path: x.JOIN,
                target: '_blank',
                icon: (0, f.jsx)(y.default, {
                    name: 'fas fa-gamepad'
                })
            }), V;
        })();
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(t.default, {
                    alpha: w.SiteHeaderAlpha.none,
                    children: (0, f.jsx)(v.default, {
                        options: U,
                        rightSideContent: S ? null : (0, f.jsx)(A.default, {})
                    })
                }),
                (0, f.jsxs)(G, {
                    children: [
                        (0, f.jsxs)(H, {
                            className: 'disable-scrollbars',
                            children: [
                                (0, f.jsx)(l.Title, {
                                    title: 'Dashboard'
                                }),
                                (0, f.jsxs)(I, {
                                    style: {
                                        flex: 1
                                    },
                                    ref: R,
                                    children: [
                                        (0, f.jsx)(u.default, {}),
                                        (0, f.jsx)(j.default, {})
                                    ]
                                }),
                                (0, f.jsx)(m.default, {})
                            ]
                        }),
                        (0, f.jsx)(n.default, {
                            openUpgradeModal: V => {
                                O(null != V && V), L();
                            }
                        })
                    ]
                }),
                (0, f.jsx)(p.default, {
                    upgradeModalVisible: K,
                    proUpsellModalVisible: P
                }),
                (0, f.jsx)(q.default, {}),
                (0, f.jsx)(o.default, {
                    id: N ? 'dashboard-auto' : 'dashboard',
                    visible: K,
                    close: M,
                    showModes: !0
                }),
                T.type === s.PlanIds.proPass ? (0, f.jsx)(r.default, {
                    onVisibleChange: Q
                }) : null
            ]
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....');
    let s;
    const t = j.default.div.attrs({
        className: 'flex-column'
    })(s || (s = (u => u)`
  color: ${ 0 };
  flex: 1;
`), k.default.Black);
    let u;
    var v;
    (v = u || (u = {})).kits = 'kits', v.reports = 'reports', v.assignments = 'assignments', v.classes = 'classes', v.hub = 'hub';
    var _w = () => {
        const {
            pathname: x
        } = (0, o.useLocation)(), y = g.useMemo(() => x ? (0, n.matchPath)({
            path: p.REPORTS
        }, x) ? u.reports : (0, n.matchPath)({
            path: p.ASSIGNMENTS
        }, x) ? u.assignments : (0, n.matchPath)({
            path: p.CLASSES
        }, x) ? u.classes : (0, n.matchPath)({
            path: p.HOME
        }, x) ? u.hub : (0, n.matchPath)({
            path: p.KITS
        }, x) || (0, n.matchPath)({
            path: p.KITS_SELECTION
        }, x) ? u.kits : (0, q.isStudent)() ? u.hub : u.kits : u.kits, [x]), z = g.useMemo(() => {
            switch (y) {
                case u.reports:
                    return (0, f.jsx)(r.DashboardReports, {});
                case u.assignments:
                    return (0, f.jsx)(i.default, {});
                case u.classes:
                    return (0, f.jsx)(l.default, {});
                case u.hub:
                    return (0, f.jsx)(m.default, {});
                default:
                    return (0, f.jsx)(h.default, {});
            }
        }, [y]);
        return (0, f.jsx)(t, {
            children: z
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....');
    const t = g.lazy(() => c('.....'));
    var _u = () => {
        var v, w, x, y, z;
        const {
            data: A,
            isLoading: B
        } = (0, p.default)(), {
            id: C
        } = (0, r.useParams)(), D = (0, s.IsEducator)() && (null === (v = (0, l.getUser)()) || void 0 === v ? void 0 : v.schoolId) && 'school' === C;
        var E;
        const F = null !== (E = null === (w = null == A || null === (x = A.folders) || void 0 === x ? void 0 : x.find(G => G._id === C)) || void 0 === w ? void 0 : w._id) && void 0 !== E ? E : '';
        if (B)
            return null;
        const G = () => {
                var H;
                return (null == A || null === (H = A.games) || void 0 === H ? void 0 : H.length) ? (0, f.jsx)(h.default, {
                    kits: null == A ? void 0 : A.games,
                    folders: null == A ? void 0 : A.folders,
                    selectedFolder: F
                }) : (0, f.jsx)(j.default, {
                    image: 'kit',
                    title: 'Kits',
                    description: (0, l.isStudent)() ? 'Kits contain multiple choice questions. Create a kit and study it with any of our game modes!' : 'Kits are live learning games for your class. They include all the content your students will learn in a game.',
                    button: 'New Kit',
                    onClick: () => (0, m.NavigateTo)(k.KIT_CREATOR)
                });
            },
            H = (null == A ? void 0 : A.folders.length) || (null === (y = (0, l.getUser)()) || void 0 === y ? void 0 : y.schoolId);
        return H || (null == A || null === (z = A.games) || void 0 === z ? void 0 : z.length) ? (0, f.jsx)(o.default, {
            header: (0, f.jsx)('div', {
                className: 'maxWidth',
                children: (0, f.jsx)(i.default, {
                    title: 'Kits',
                    customUnderTitleComponent: H ? (0, f.jsx)('div', {
                        style: {
                            marginTop: 13
                        },
                        children: (0, f.jsx)(q.default, {
                            schoolLibraryScreenOpen: D,
                            openSchoolLibraryScreen: () => {
                                (0, m.NavigateTo)('/kits/school');
                            },
                            folders: null !== (_I = null == A ? void 0 : A.folders) && void 0 !== _I ? _I : [],
                            selectedFolder: F
                        })
                    }) : null,
                    buttonIcon: (0, f.jsx)(n.default, {}),
                    buttonLink: k.KIT_CREATOR,
                    buttonText: 'New Kit'
                })
            }),
            children: (0, f.jsx)(g.Suspense, {
                fallback: null,
                children: D ? (0, f.jsx)(t, {}) : G()
            })
        }) : G();
        var _I;
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....');
    var _k = l => {
        var m;
        const n = [],
            o = [],
            p = null === (m = l.folders) || void 0 === m ? void 0 : m.find(q => q._id === l.selectedFolder);
        l.kits.forEach(q => {
            if (l.selectedFolder) {
                if (!p)
                    return;
                if (!p.games.includes(q._id))
                    return;
            }
            q.isArchived ? o.push(q) : n.push(q);
        });
        const q = [
            ...n,
            ...o
        ];
        var r;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(j.Title, {
                    title: null !== (r = null == p ? void 0 : p.title) && void 0 !== r ? r : 'Kits'
                }),
                !q.length && l.selectedFolder ? (0, f.jsxs)('div', {
                    className: 'maxAll flex-center flex-column',
                    children: [
                        (0, f.jsx)('div', {
                            style: {
                                fontSize: 62
                            },
                            children: (0, f.jsx)(i.default, {
                                name: 'fas fa-folder-open'
                            })
                        }),
                        (0, f.jsx)('div', {
                            style: {
                                fontSize: 16
                            },
                            children: 'There are no kits in this folder.'
                        })
                    ]
                }) : (0, f.jsx)(f.Fragment, {
                    children: (0, f.jsx)(h.default, {
                        duration: 400,
                        children: q.map(s => (0, f.jsx)('div', {
                            children: (0, f.jsx)(g.default, {
                                game: s,
                                folderId: l.selectedFolder
                            })
                        }, 'dashboard-kit-' + s._id))
                    })
                })
            ]
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'IMAGE_SIZE', function() {
        return _$;
    }), a(d.exports, 'Content', function() {
        return _ab;
    }), a(d.exports, 'LeftSide', function() {
        return _bb;
    }), a(d.exports, 'KitInfo', function() {
        return _cb;
    }), a(d.exports, 'KitTitle', function() {
        return _db;
    }), a(d.exports, 'KitDescription', function() {
        return _fb;
    }), a(d.exports, 'default', function() {
        return _jb;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....'),
        t = c('.....'),
        u = c('.....'),
        v = c('.....'),
        w = c('.....'),
        x = c('.....'),
        y = c('.....'),
        z = c('.....'),
        A = c('.....'),
        B = c('.....'),
        C = c('.....'),
        D = c('.....'),
        E = c('.....'),
        F = c('.....'),
        G = c('.....'),
        H = c('.....'),
        I = c('.....'),
        J = c('.....'),
        K = c('.....'),
        L = c('.....'),
        M = c('.....'),
        N = c('.....'),
        O = c('.....'),
        P = c('.....');
    let Q, R, S, T, U, V, W, X, Y, Z = $ => $;
    const _$ = 80,
        _ab = w.default.div(Q || (Q = Z`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`)),
        _bb = w.default.div(R || (R = Z`
  display: flex;
  align-items: center;
  width: calc(100% - 182px);
`)),
        _cb = w.default.div(S || (S = Z`
  margin-right: 20px;
  flex: 1;
  margin-left: 12px;
  overflow: hidden;
  max-width: 100%;
`)),
        _db = w.default.div(T || (T = Z`
  font-weight: ${ 0 };
  font-size: 23px;
  max-width: 100%;
  display: flex;
  align-items: center;
`), y.FontWeights.Bold),
        eb = w.default.div(U || (U = Z`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`)),
        _fb = w.default.div(V || (V = Z`
  opacity: 0.7;
  font-size: 15;
  margin-top: -7px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`)),
        gb = w.default.div(W || (W = Z`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`)),
        hb = w.default.div(X || (X = Z`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`)),
        ib = w.default.div(Y || (Y = Z`
  display: flex;
  align-items: center;
  justify-content: center;
`));
    var _jb = (0, z.observer)(kb => {
        const {
            kits: lb,
            navigation: mb
        } = g.useContext(F.default), [nb, ob, pb] = (0, A.useBoolean)(!1), [qb, rb, sb] = (0, A.useBoolean)(!1), [tb, ub] = g.useState(E.IExperiencePickerMode.liveGame), [vb, wb] = g.useState(null), {
            game: xb
        } = kb, yb = g.useMemo(() => xb.createdAt ? `Created ${ b(J)(xb.createdAt).fromNow() }` : '', [
            xb.editCount,
            xb.updatedAt,
            xb.createdAt
        ]), zb = g.useCallback(Ab => !!xb.isArchived && (lb.kitAttemptedAction = Ab, mb.archiveModalShow = !0, !0), [xb.isArchived]), Ab = () => {
            zb('open') || (0, I.NavigateTo)(`/view/${ xb._id }`);
        }, Bb = () => {
            zb('edit') || (0, I.NavigateTo)(B.KIT_CREATOR + `/${ xb._id }/editor`);
        }, Cb = () => {
            zb('copy') || (!(0, P.IsEducator)() || (0, A.isUpgraded)() ? (0, A.copyKit)({
                kitId: xb._id,
                onSuccess: () => {
                    (0, K.invalidateKits)(), (0, I.NavigateTo)(B.KITS);
                },
                onFailure: () => (0, M.throwError)({
                    title: 'Error copying kit'
                })
            }) : wb({
                id: 'self-copy',
                ...N.UpgradeModal_CopyKit
            }));
        }, Db = () => {
            zb('make changes to') || (!(0, P.IsEducator)() || (0, A.isUpgraded)() ? ob() : wb({
                id: 'folders',
                ...O.UpgradeModal_Folders
            }));
        }, Eb = Fb => {
            (0, A.request)({
                url: '/api/games/archived',
                data: {
                    id: xb._id,
                    archived: Fb
                },
                success: () => (0, K.invalidateKits)()
            });
        }, Fb = () => Eb(!0), Gb = () => Eb(!1), Hb = () => {
            (0, A.request)({
                url: '/api/folders/removeGame',
                method: 'post',
                data: {
                    gameId: xb._id,
                    folderId: kb.folderId
                },
                success: () => {
                    (0, K.invalidateKits)();
                },
                error: Ib => {
                    (0, A.throwMessageError)({
                        e: Ib,
                        default: {
                            title: 'There was an error removing this Kit from this folder.'
                        }
                    });
                }
            });
        }, Ib = () => {
            u.default.confirm({
                title: 'Are you sure you want to delete this kit?',
                cancelText: 'No',
                okText: 'Yes',
                onOk: () => {
                    (0, A.request)({
                        url: '/api/games/delete',
                        data: {
                            id: xb._id
                        },
                        success: () => {
                            (0, K.invalidateKits)();
                        },
                        error: Jb => (0, A.throwMessageError)({
                            e: Jb,
                            default: {
                                title: 'There was an error deleting this kit'
                            }
                        })
                    });
                }
            });
        };
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)('div', {
                    children: (0, f.jsx)(r.default, {
                        hoverable: !0,
                        style: {
                            width: '100%',
                            color: x.default.Black,
                            marginBottom: 12,
                            overflow: 'hidden'
                        },
                        children: (0, f.jsxs)(_ab, {
                            children: [
                                (0, f.jsxs)(_bb, {
                                    onClick: Ab,
                                    children: [
                                        (0, f.jsx)('div', {
                                            children: (0, f.jsx)(C.default, {
                                                image: xb.gif,
                                                size: _$,
                                                blockModalOpen: !0,
                                                onClick: Ab
                                            })
                                        }),
                                        (0, f.jsxs)(_cb, {
                                            children: [
                                                (0, f.jsxs)(_db, {
                                                    children: [
                                                        (0, f.jsx)(eb, {
                                                            children: xb.title
                                                        }),
                                                        xb.isArchived && (0, f.jsx)(v.default, {
                                                            style: {
                                                                marginLeft: 5
                                                            },
                                                            children: 'Archived'
                                                        })
                                                    ]
                                                }),
                                                (0, f.jsx)(_fb, {
                                                    children: yb
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, f.jsxs)(gb, {
                                    children: [
                                        (0, f.jsxs)(hb, {
                                            children: [
                                                (0, f.jsx)(q.default, {
                                                    size: 'large',
                                                    type: 'primary',
                                                    icon: (0, f.jsx)(p.default, {}),
                                                    style: {
                                                        width: 140,
                                                        backgroundColor: '#2e7d32',
                                                        borderColor: '#2e7d32'
                                                    },
                                                    onClick: () => {
                                                        zb('play') || (ub(E.IExperiencePickerMode.liveGame), rb());
                                                    },
                                                    children: 'Play Live'
                                                }),
                                                !(0, A.isStudent)() && (0, f.jsx)(q.default, {
                                                    size: 'large',
                                                    type: 'primary',
                                                    icon: (0, f.jsx)(o.default, {}),
                                                    style: {
                                                        marginTop: 5,
                                                        width: 140,
                                                        backgroundColor: '#3849aa',
                                                        borderColor: '#3849aa'
                                                    },
                                                    onClick: () => {
                                                        zb('assign') || (ub(E.IExperiencePickerMode.assignment), rb());
                                                    },
                                                    children: 'Assign HW'
                                                })
                                            ]
                                        }),
                                        (0, f.jsx)(ib, {
                                            children: (0, f.jsx)(s.default, {
                                                overlay: (() => {
                                                    const {
                                                        isArchived: Jb
                                                    } = xb;
                                                    return (0, f.jsxs)(t.default, {
                                                        children: [
                                                            (0, f.jsxs)(t.default.Item, {
                                                                onClick: Ab,
                                                                children: [
                                                                    (0, f.jsx)(n.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    'Open'
                                                                ]
                                                            }, 'open'),
                                                            (0, f.jsxs)(t.default.Item, {
                                                                onClick: Bb,
                                                                children: [
                                                                    (0, f.jsx)(j.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    'Edit'
                                                                ]
                                                            }, 'edit'),
                                                            (0, f.jsxs)(t.default.Item, {
                                                                onClick: Cb,
                                                                children: [
                                                                    (0, f.jsx)(h.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    'Copy'
                                                                ]
                                                            }, 'copy'),
                                                            kb.folderId ? null : (0, f.jsxs)(t.default.Item, {
                                                                onClick: Db,
                                                                children: [
                                                                    (0, f.jsx)(m.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    'Add to Folder'
                                                                ]
                                                            }, 'folder'),
                                                            kb.folderId ? (0, f.jsxs)(t.default.Item, {
                                                                onClick: Hb,
                                                                children: [
                                                                    (0, f.jsx)(m.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    'Remove from Folder'
                                                                ]
                                                            }, 'folder') : null,
                                                            Jb ? (0, f.jsxs)(t.default.Item, {
                                                                onClick: Ib,
                                                                children: [
                                                                    (0, f.jsx)(i.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    'Delete'
                                                                ]
                                                            }, 'delete') : null,
                                                            (0, f.jsxs)(t.default.Item, {
                                                                onClick: Jb ? Gb : Fb,
                                                                children: [
                                                                    (0, f.jsx)(l.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    Jb ? 'Unarchive' : 'Archive'
                                                                ]
                                                            }, 'archive')
                                                        ]
                                                    });
                                                })(),
                                                mouseLeaveDelay: 0.4,
                                                children: (0, f.jsx)(q.default, {
                                                    shape: 'circle',
                                                    size: 'middle',
                                                    children: (0, f.jsx)(k.default, {})
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                (0, f.jsx)(L.default, {
                    open: nb,
                    close: pb,
                    kitId: xb._id
                }),
                qb ? tb !== E.IExperiencePickerMode.assignment || (0, A.isUpgraded)() ? (0, f.jsx)(D.default, {
                    gameId: xb._id,
                    close: sb,
                    mode: tb
                }) : (0, f.jsx)(G.default, {
                    id: 'assignment creation',
                    visible: qb,
                    close: sb,
                    copy: {
                        title: H.ASSIGNMENT_UPSELL_TITLE,
                        description: H.ASSIGNMENT_UPSELL_DESCRIPTION
                    }
                }) : null,
                vb ? (0, f.jsx)(G.default, {
                    id: vb.id,
                    visible: !0,
                    close: () => wb(null),
                    copy: {
                        title: vb.title,
                        description: vb.description
                    }
                }) : null
            ]
        });
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CopyOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z'
                }
            }]
        },
        name: 'copy',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DeleteOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z'
                }
            }]
        },
        name: 'delete',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'EditOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z'
                }
            }]
        },
        name: 'edit',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'FilterOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z'
                }
            }]
        },
        name: 'filter',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'FullscreenOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z'
                }
            }]
        },
        name: 'fullscreen',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'PaperClipOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z'
                }
            }]
        },
        name: 'paper-clip',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'PlayCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: {
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z'
                    }
                }
            ]
        },
        name: 'play-circle',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    }, function(f) {
        return _q = f;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = function(o, p) {
            var q = {};
            for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && p.indexOf(r) < 0 && (q[r] = o[r]);
            if (null != o && 'function' == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (r = Object.getOwnPropertySymbols(o); s < r.length; s++)
                    p.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(o, r[s]) && (q[r[s]] = o[r[s]]);
            }
            return q;
        };
    const o = (p, q) => {
            var {
                prefixCls: r,
                className: s,
                rootClassName: t,
                style: u,
                children: v,
                icon: w,
                color: x,
                onClose: y,
                closeIcon: z,
                closable: A = !1
            } = p, B = n(p, [
                'prefixCls',
                'className',
                'rootClassName',
                'style',
                'children',
                'icon',
                'color',
                'onClose',
                'closeIcon',
                'closable'
            ]);
            const {
                getPrefixCls: C,
                direction: D
            } = h.useContext(i.ConfigContext), [E, F] = h.useState(!0);
            h.useEffect(() => {
                'visible' in B && F(B.visible);
            }, [B.visible]);
            const G = (0, j.isPresetColor)(x) || (0, j.isPresetStatusColor)(x),
                H = Object.assign({
                    backgroundColor: x && !G ? x : void 0
                }, u),
                I = C('tag', r),
                [J, K] = (0, m.default)(I),
                L = b(g)(I, {
                    [`${ I }-${ x }`]: G,
                    [`${ I }-has-color`]: x && !G,
                    [`${ I }-hidden`]: !E,
                    [`${ I }-rtl`]: 'rtl' === D
                }, s, t, K),
                M = N => {
                    N.stopPropagation(), null == y || y(N), N.defaultPrevented || F(!1);
                },
                N = 'function' == typeof B.onClick || v && 'a' === v.type,
                O = w || null,
                P = O ? h.createElement(h.Fragment, null, O, h.createElement('span', null, v)) : v,
                Q = h.createElement('span', Object.assign({}, B, {
                    ref: q,
                    className: L,
                    style: H
                }), P, A ? z ? h.createElement('span', {
                    className: `${ I }-close-icon`,
                    onClick: M
                }, z) : h.createElement(f.default, {
                    className: `${ I }-close-icon`,
                    onClick: M
                }) : null);
            return J(N ? h.createElement(k.default, null, Q) : Q);
        },
        p = h.forwardRef(o);
    p.CheckableTag = l.default;
    var _q = p;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    }, function(f) {
        return _k = f;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            var m = {};
            for (var n in k)
                Object.prototype.hasOwnProperty.call(k, n) && l.indexOf(n) < 0 && (m[n] = k[n]);
            if (null != k && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(k); o < n.length; o++)
                    l.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(k, n[o]) && (m[n[o]] = k[n[o]]);
            }
            return m;
        };
    var _k = l => {
        var {
            prefixCls: m,
            className: n,
            checked: o,
            onChange: p,
            onClick: q
        } = l, r = j(l, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: s
        } = g.useContext(h.ConfigContext), t = s('tag', m), [u, v] = (0, i.default)(t), w = b(f)(t, {
            [`${ t }-checkable`]: !0,
            [`${ t }-checkable-checked`]: o
        }, n, v);
        return u(g.createElement('span', Object.assign({}, r, {
            className: w,
            onClick: x => {
                null == p || p(!o), null == q || q(x);
            }
        })));
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....');
    const k = (l, m, n) => {
            const o = (0, h.default)(n);
            return {
                [`${ l.componentCls }-${ m }`]: {
                    color: l[`color${ n }`],
                    background: l[`color${ o }Bg`],
                    borderColor: l[`color${ o }Border`]
                }
            };
        },
        l = m => (0, i.genPresetColor)(m, (n, o) => {
            let {
                textColor: p,
                lightBorderColor: q,
                lightColor: r,
                darkColor: s
            } = o;
            return {
                [`${ m.componentCls }-${ n }`]: {
                    color: p,
                    background: r,
                    borderColor: q,
                    '&-inverse': {
                        color: m.colorTextLightSolid,
                        background: s,
                        borderColor: s
                    }
                }
            };
        }),
        m = n => {
            const {
                paddingXXS: o,
                lineWidth: p,
                tagPaddingHorizontal: q,
                componentCls: r
            } = n, s = q - p, t = o - p;
            return {
                [r]: Object.assign(Object.assign({}, (0, j.resetComponent)(n)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: n.marginXS,
                    paddingInline: s,
                    fontSize: n.tagFontSize,
                    lineHeight: `${ n.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: n.tagDefaultBg,
                    border: `${ n.lineWidth }px ${ n.lineType } ${ n.colorBorder }`,
                    borderRadius: n.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ n.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ r }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: n.tagDefaultColor
                    },
                    [`${ r }-close-icon`]: {
                        marginInlineStart: t,
                        color: n.colorTextDescription,
                        fontSize: n.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ n.motionDurationMid }`,
                        '&:hover': {
                            color: n.colorTextHeading
                        }
                    },
                    [`&${ r }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ n.iconCls }-close, ${ n.iconCls }-close:hover`]: {
                            color: n.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ r }-checkable-checked):hover`]: {
                            color: n.colorPrimary,
                            backgroundColor: n.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: n.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: n.colorPrimary,
                            '&:hover': {
                                backgroundColor: n.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: n.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ n.iconCls } + span, > span + ${ n.iconCls }`]: {
                        marginInlineStart: s
                    }
                })
            };
        };
    var _n = (0, f.default)('Tag', o => {
        const {
            fontSize: p,
            lineHeight: q,
            lineWidth: r,
            fontSizeIcon: s
        } = o, t = Math.round(p * q), u = o.fontSizeSM, v = t - 2 * r, w = o.colorFillAlter, x = o.colorText, y = (0, g.merge)(o, {
            tagFontSize: u,
            tagLineHeight: v,
            tagDefaultBg: w,
            tagDefaultColor: x,
            tagIconSize: s - 2 * r,
            tagPaddingHorizontal: 8
        });
        return [
            m(y),
            l(y),
            k(y, 'success', 'Success'),
            k(y, 'processing', 'Info'),
            k(y, 'error', 'Error'),
            k(y, 'warning', 'Warning')
        ];
    });
}), c.register('.....', function(d, e) {
    function f(g) {
        if ('string' != typeof g)
            return g;
        return g.charAt(0).toUpperCase() + g.slice(1);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....');
    let l;
    const m = h.default.img.attrs(n => ({
        src: n.image
    }))(l || (l = (n => n)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), n => n.size, n => n.size, n => n.customRightMargin ? n.customRightMargin : 0, n => n.showBorder && `border: solid ${ j.default.Black } 1px;`);
    var _n = o => {
        const [p, q] = g.useState(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(m, {
                    ...o,
                    onClick: r => {
                        r.stopPropagation(), o.onClick && o.onClick(), o.blockModalOpen || q(!0);
                    }
                }),
                (0, f.jsx)(i.default, {
                    open: p,
                    onCancel: r => {
                        r.stopPropagation(), q(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, f.jsx)('img', {
                        src: (0, k.getCloudinaryUrl)(o.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'getCloudinaryUrl', function() {
        return _f;
    });
    const _f = g => {
            const h = _g(g);
            return h ? g.includes('/video/upload') ? `https://${ _h }/video/upload/${ h }` : `https://${ _h }/image/upload/f_auto,fl_lossy,q_auto/${ h }` : g;
        },
        _g = h => {
            if (!_k.some(i => h.includes(i)))
                return null;
            if (h.includes(_i) && !h.includes(`/${ _j }/`))
                return null;
            const i = h.split('/');
            if (!i || !i.length || i.length < 2)
                return null;
            const j = i[i.length - 2],
                k = i[i.length - 1];
            return j && k && j.startsWith('v') ? `${ j }/${ k }` : null;
        },
        _h = 'media.gimkit.com',
        _i = 'res.cloudinary.com',
        _j = 'gimkit-production',
        _k = [
            _h,
            _i
        ];
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    var _h = f.createContext(g.default);
}), c.register('.....', function(d, e) {
    a(d.exports, 'NavigateTo', function() {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        f.history.push(h);
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....');
    let s;
    const t = u => {
        const [v, w, x] = (0, q.useBoolean)(!1);
        return (0, f.jsx)(m.default, {
            direction: 'vertical',
            size: 7,
            className: 'maxWidth',
            children: u.folders.map(y => (0, f.jsxs)(_v, {
                onClick: () => {
                    return f = y._id, void(v || (w(), (0, q.request)({
                        url: '/api/folders/addGame',
                        data: {
                            folderId: f,
                            gameId: u.kitId
                        },
                        success: () => {
                            u.close(), (0, r.invalidateKits)(), l.default.success({
                                content: 'Kit added to folder!'
                            });
                        },
                        error: z => {
                            (0, q.throwMessageError)({
                                e: z,
                                default: {
                                    title: 'Error adding kit to folder'
                                }
                            });
                        },
                        both: x
                    })));
                    var z;
                },
                children: [
                    (0, f.jsx)('div', {
                        style: {
                            marginRight: 8
                        },
                        children: (0, f.jsx)(p.default, {
                            name: 'fas fa-folder'
                        })
                    }),
                    (0, f.jsx)('div', {
                        children: y.name
                    })
                ]
            }, y._id))
        });
    };
    var _u = v => {
        const {
            data: {
                folders: w
            },
            isLoading: x
        } = (0, r.default)(), [y, z, A] = (0, q.useBoolean)(!1), [B, C] = g.useState('');
        g.useEffect(() => {
            v.open || C('');
        }, [v.open]);
        const D = B.length < 2,
            E = () => {
                D || y || (z(), (0, q.request)({
                    url: '/api/folders/new',
                    data: {
                        title: B
                    },
                    success: F => {
                        (0, q.request)({
                            url: '/api/folders/addGame',
                            data: {
                                folderId: F,
                                gameId: v.kitId
                            },
                            success: () => {
                                v.close(), (0, r.invalidateKits)();
                            },
                            error: G => {
                                (0, q.throwMessageError)({
                                    e: G,
                                    default: {
                                        title: 'Error adding kit to folder'
                                    }
                                });
                            },
                            both: A
                        });
                    },
                    error: F => {
                        (0, q.throwMessageError)({
                            e: F,
                            default: {
                                title: 'Error creating folder'
                            }
                        }), A();
                    }
                }));
            };
        return (0, f.jsx)(j.default, {
            open: v.open,
            onClose: v.close,
            width: 375,
            placement: 'right',
            closable: !0,
            title: 'Add To Folder',
            drawerStyle: {
                height: '100%',
                overflowY: 'auto'
            },
            children: (() => {
                if (x)
                    return (0, f.jsx)('div', {
                        className: 'maxAll flex-center',
                        children: (0, f.jsx)(n.default, {
                            size: 'large'
                        })
                    });
                const F = null == w ? void 0 : w.filter(G => !G.games.includes(v.kitId)).sort((G, H) => G.title.localeCompare(H.title));
                return (0, f.jsxs)('div', {
                    children: [
                        (0, f.jsx)(k.default, {
                            placeholder: 'New folder name...',
                            value: B,
                            onChange: G => C(G.target.value),
                            onPressEnter: E
                        }),
                        (0, f.jsx)(h.default, {
                            block: !0,
                            type: 'primary',
                            style: {
                                marginTop: 7
                            },
                            disabled: D,
                            loading: y,
                            onClick: E,
                            children: 'Create Folder'
                        }),
                        F.length ? (0, f.jsxs)(f.Fragment, {
                            children: [
                                (0, f.jsx)(i.default, {}),
                                (0, f.jsx)(t, {
                                    folders: F.map(G => ({
                                        _id: G._id,
                                        name: G.title
                                    })),
                                    kitId: v.kitId,
                                    close: v.close
                                })
                            ]
                        }) : null
                    ]
                });
            })()
        });
    };
    const _v = o.default.div.attrs({
        className: 'flex vc'
    })(s || (s = (w => w)`
  padding: 12px 20px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'SpaceContext', function() {
        return _o;
    }, function(f) {
        return _o = f;
    }), a(d.exports, 'default', function() {
        return _r;
    }, function(f) {
        return _r = f;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = function(o, p) {
            var q = {};
            for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && p.indexOf(r) < 0 && (q[r] = o[r]);
            if (null != o && 'function' == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (r = Object.getOwnPropertySymbols(o); s < r.length; s++)
                    p.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(o, r[s]) && (q[r[s]] = o[r[s]]);
            }
            return q;
        };
    const _o = h.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        p = {
            small: 8,
            middle: 16,
            large: 24
        };
    const q = r => {
        const {
            getPrefixCls: s,
            space: t,
            direction: u
        } = h.useContext(i.ConfigContext), {
            size: v = (null == t ? void 0 : t.size) || 'small',
            align: w,
            className: x,
            rootClassName: y,
            children: z,
            direction: A = 'horizontal',
            prefixCls: B,
            split: C,
            style: D,
            wrap: E = !1
        } = r, F = n(r, [
            'size',
            'align',
            'className',
            'rootClassName',
            'children',
            'direction',
            'prefixCls',
            'split',
            'style',
            'wrap'
        ]), G = (0, j.default)(), [H, I] = h.useMemo(() => (Array.isArray(v) ? v : [
            v,
            v
        ]).map(J => function(K) {
            return 'string' == typeof K ? p[K] : K || 0;
        }(J)), [v]), J = (0, g.default)(z, {
            keepEmpty: !0
        }), K = void 0 === w && 'horizontal' === A ? 'center' : w, L = s('space', B), [M, N] = (0, m.default)(L), O = b(f)(L, N, `${ L }-${ A }`, {
            [`${ L }-rtl`]: 'rtl' === u,
            [`${ L }-align-${ K }`]: K
        }, x, y), P = `${ L }-item`, Q = 'rtl' === u ? 'marginLeft' : 'marginRight';
        let R = 0;
        const S = J.map((T, U) => {
                null != T && (R = U);
                const V = T && T.key || `${ P }-${ U }`;
                return h.createElement(l.default, {
                    className: P,
                    key: V,
                    direction: A,
                    index: U,
                    marginDirection: Q,
                    split: C,
                    wrap: E
                }, T);
            }),
            T = h.useMemo(() => ({
                horizontalSize: H,
                verticalSize: I,
                latestIndex: R,
                supportFlexGap: G
            }), [
                H,
                I,
                R,
                G
            ]);
        if (0 === J.length)
            return null;
        const U = {};
        return E && (U.flexWrap = 'wrap', G || (U.marginBottom = -I)), G && (U.columnGap = H, U.rowGap = I), M(h.createElement('div', Object.assign({
            className: O,
            style: Object.assign(Object.assign({}, U), D)
        }, F), h.createElement(_o.Provider, {
            value: T
        }, S)));
    };
    q.Compact = k.default;
    var _r = q;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....'),
        _h = () => {
            const [i, j] = f.useState(!1);
            return f.useEffect(() => {
                j((0, g.detectFlexGapSupported)());
            }, []), i;
        };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');

    function _h(i) {
        let {
            className: j,
            direction: k,
            index: l,
            marginDirection: m,
            children: n,
            split: o,
            wrap: p
        } = i;
        const {
            horizontalSize: q,
            verticalSize: r,
            latestIndex: s,
            supportFlexGap: t
        } = f.useContext(g.SpaceContext);
        let u = {};
        return t || ('vertical' === k ? l < s && (u = {
            marginBottom: q / (o ? 2 : 1)
        }) : u = Object.assign(Object.assign({}, l < s && {
            [m]: q / (o ? 2 : 1)
        }), p && {
            paddingBottom: r
        })), null == n ? null : f.createElement(f.Fragment, null, f.createElement('div', {
            className: j,
            style: u
        }, n), l < s && o && f.createElement('span', {
            className: `${ j }-split`,
            style: u
        }, o));
    }
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('.....');
    c('.....');
    var _g = h => (0, f.jsx)('i', {
        className: `${ h.name }${ h.className ? ` ${ h.className }` : '' }`,
        style: h.style
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'UpgradeModal_CopyKit', function() {
        return _h;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....');
    const _h = {
        title: (0, f.jsx)(f.Fragment, {
            children: 'Copy kits with Pro'
        }),
        description: (0, f.jsxs)(f.Fragment, {
            children: [
                'To copy kits and make them your own, upgrade to ',
                g.COMPANY_NAME,
                ' Pro.'
            ]
        })
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'UpgradeModal_Folders', function() {
        return _h;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....');
    const _h = {
        title: (0, f.jsx)(f.Fragment, {
            children: 'Create folders with Pro'
        }),
        description: (0, f.jsxs)(f.Fragment, {
            children: [
                'Upgrade to ',
                g.COMPANY_NAME,
                ' Pro to create folders and organize your kits easily.'
            ]
        })
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _E;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....'),
        t = c('.....'),
        u = c('.....');
    let v, w, x, y = z => z;
    const z = A => {
            const B = A ? '#1677ff' : 'rgba(0,0,0,0.07)';
            return {
                color: A ? o.default.White : o.default.Black,
                backgroundColor: B,
                hoverBackgroundColor: A ? B : 'rgba(0,0,0,0.11)'
            };
        },
        A = B => {
            const {
                color: C,
                backgroundColor: D,
                hoverBackgroundColor: E
            } = z(B.selected);
            return (0, f.jsx)(t.default, {
                to: B.path,
                children: (0, f.jsxs)(_G, {
                    background: D,
                    color: C,
                    hoverBackgroundColor: E,
                    children: [
                        (0, f.jsx)('span', {
                            style: {
                                marginRight: 6
                            },
                            children: (0, f.jsx)(p.default, {
                                name: B.icon
                            })
                        }),
                        B.label
                    ]
                })
            });
        },
        B = C => {
            const {
                color: D,
                backgroundColor: E,
                hoverBackgroundColor: F
            } = z(C.selected), [G, H, I] = (0, r.useBoolean)(!1), [J, K, L] = (0, r.useBoolean)(!1);
            return (0, f.jsx)(t.default, {
                to: C.path,
                children: (0, f.jsxs)(_G, {
                    background: E,
                    color: D,
                    hoverBackgroundColor: F,
                    children: [
                        C.icon && !C.selected ? (0, f.jsx)('span', {
                            style: {
                                marginRight: 6
                            },
                            children: C.icon
                        }) : null,
                        (0, f.jsx)(q.motion.span, {
                            layout: !0,
                            children: C.name
                        }),
                        C.selected ? (0, f.jsx)(i.default, {
                            menu: {
                                items: [{
                                        key: 'rename-folder',
                                        label: 'Rename Folder',
                                        onClick: H
                                    },
                                    {
                                        key: 'delete-folder',
                                        label: 'Delete Folder',
                                        danger: !0,
                                        onClick: K
                                    }
                                ]
                            },
                            children: (0, f.jsx)(_H, {
                                children: (0, f.jsx)(p.default, {
                                    name: 'far fa-ellipsis-h'
                                })
                            })
                        }) : null,
                        (0, f.jsx)(_C, {
                            open: G,
                            close: I,
                            folderId: C.id,
                            folderName: C.name
                        }),
                        (0, f.jsx)(_D, {
                            open: J,
                            close: L,
                            folderId: C.id
                        })
                    ]
                })
            });
        },
        _C = D => {
            const [E, F, G] = (0, r.useBoolean)(!1), [H, I] = g.useState(''), J = g.useMemo(() => H.length < 2, [H]);
            g.useEffect(() => {
                D.open || I('');
            }, [D.open]);
            const K = () => {
                E || (F(), (0, r.request)({
                    url: '/api/folders/rename',
                    data: {
                        id: D.folderId,
                        title: H
                    },
                    success: () => {
                        D.close(), (0, u.invalidateKits)();
                    },
                    both: G,
                    error: L => {
                        (0, r.throwMessageError)({
                            e: L,
                            default: {
                                title: 'Error renaming folder'
                            }
                        });
                    }
                }));
            };
            return (0, f.jsxs)(k.default, {
                open: D.open,
                onCancel: D.close,
                title: 'Rename',
                footer: [
                    (0, f.jsx)(h.default, {
                        onClick: D.close,
                        children: 'Cancel'
                    }, 'cancel-rename-folder'),
                    (0, f.jsx)(h.default, {
                        type: 'primary',
                        onClick: K,
                        disabled: J,
                        loading: E,
                        children: 'Rename'
                    }, 'rename-folder')
                ],
                children: [
                    (0, f.jsxs)(m.default.Text, {
                        children: [
                            'Enter a new name for ',
                            (0, f.jsxs)('b', {
                                children: [
                                    D.folderName,
                                    ':'
                                ]
                            })
                        ]
                    }),
                    (0, f.jsx)(j.default, {
                        value: H,
                        style: {
                            marginTop: 5
                        },
                        placeholder: 'New name...',
                        maxLength: 24,
                        onChange: L => I(L.target.value),
                        onPressEnter: K
                    })
                ]
            });
        },
        _D = E => {
            const [F, G, H] = (0, r.useBoolean)(!1);
            return (0, f.jsx)(k.default, {
                open: E.open,
                onCancel: E.close,
                title: 'Delete Folder',
                footer: [
                    (0, f.jsx)(h.default, {
                        onClick: E.close,
                        children: 'Cancel'
                    }, 'cancel-delete-folder'),
                    (0, f.jsx)(h.default, {
                        type: 'primary',
                        danger: !0,
                        onClick: () => {
                            G(), (0, r.request)({
                                url: '/api/folders/delete',
                                data: {
                                    id: E.folderId
                                },
                                success: () => {
                                    E.close(), (0, u.invalidateKits)();
                                },
                                error: I => {
                                    (0, r.throwMessageError)({
                                        e: I,
                                        default: {
                                            title: 'Error deleting folder'
                                        }
                                    });
                                },
                                both: H
                            });
                        },
                        loading: F,
                        children: 'Delete Folder'
                    }, 'delete-folder')
                ],
                children: (0, f.jsx)(m.default.Text, {
                    children: 'Are you sure you want to delete this folder? The kits within the folder will not be deleted.'
                })
            });
        };
    var _E = F => {
        var G;
        const H = !(0, r.isStudent)() && (null === (G = (0, r.getUser)()) || void 0 === G ? void 0 : G.schoolId),
            I = J => J === F.selectedFolder && !F.schoolLibraryScreenOpen;
        return (0, f.jsx)(_F, {
            children: (0, f.jsxs)(l.default, {
                direction: 'horizontal',
                size: 10,
                wrap: !0,
                className: 'maxWidth',
                children: [
                    (0, f.jsx)(A, {
                        label: 'All kits',
                        icon: 'fas fa-box-open',
                        selected: I(''),
                        path: s.KITS
                    }),
                    H ? (0, f.jsx)(A, {
                        label: 'My school',
                        icon: 'fas fa-school',
                        selected: F.schoolLibraryScreenOpen,
                        path: `${ s.KITS }/school`
                    }) : null,
                    F.folders.sort((J, K) => J.title.localeCompare(K.title)).map(J => (0, f.jsx)(B, {
                        id: J._id,
                        name: J.title,
                        selected: I(J._id),
                        path: `${ s.KITS }/${ J._id }`,
                        icon: (0, f.jsx)(p.default, {
                            name: 'fas fa-folder'
                        })
                    }, `folder-${ J._id }`))
                ]
            })
        });
    };
    const _F = n.default.div(v || (v = y`
  .ant-space-item {
    flex-shrink: 0;
  }
`)),
        _G = n.default.div.attrs({
            className: 'flex-center'
        })(w || (w = y`
  background: ${ 0 };
  color: ${ 0 };
  font-size: 15px;
  padding: 4px 14px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  &:hover {
    background: ${ 0 };
  }
`), H => H.background, H => H.color, H => H.hoverBackgroundColor),
        _H = n.default.div(x || (x = y`
  margin-left: 12px;
  transition: 0.15s background ease-in-out;
  padding: 0px 6px;
  border-radius: 4px;
  margin-right: -6px;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    c('.....');
    var _h = i => i.external || !i.to ? (0, f.jsx)('a', {
        href: i.to,
        tabIndex: Number(i.tabIndex || '0'),
        onClick: i.onClick,
        onKeyPress: j => {
            i.onClick && 'Enter' === j.key && (j.preventDefault(), i.onClick());
        },
        className: i.className,
        target: i.target,
        style: i.style,
        children: i.children
    }) : (0, f.jsx)(g.Link, {
        to: i.to,
        tabIndex: Number(i.tabIndex || '0'),
        onClick: i.onClick,
        className: i.className,
        target: i.target,
        style: i.style,
        children: i.children
    });
}), c.register('.....', function(d, e) {
    d.exports = import('./' + c('.....').resolve('iEAx1')).then(() => c('.....'));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....');
    var _t = () => {
        const {
            data: u,
            isLoading: v
        } = (0, o.default)();
        (0, p.useDidMount)(() => {
            (0, q.CLASSES)() && (0, r.ReplaceToHomePage)();
        });
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(s.Title, {
                    title: 'Classes'
                }),
                v ? null : u.length ? (0, f.jsx)(m.default, {
                    header: (0, f.jsx)(g.default, {
                        title: 'Classes',
                        buttonIcon: (0, f.jsx)(l.default, {}),
                        buttonLink: j.NEW_CLASS,
                        buttonText: 'New Class'
                    }),
                    children: (0, f.jsx)(n.default, {
                        direction: 'vertical',
                        className: 'maxWidth',
                        size: 10,
                        children: u.map(w => (0, f.jsx)(h.default, {
                            group: w,
                            to: `/class/${ w._id }`
                        }, w._id))
                    })
                }) : (0, f.jsx)(i.default, {
                    image: 'groups',
                    title: 'Classes',
                    description: 'Keep your games safe and secure! Use classes to force students to use their real names and control who can join your games.',
                    button: 'New Class',
                    onClick: () => (0, k.NavigateTo)(j.NEW_CLASS)
                })
            ]
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....');
    let n;
    const o = j.default.div(n || (n = (p => p)`
  background: ${ 0 };
  height: ${ 0 }px;
  width: ${ 0 }px;
  border-radius: 5px;
  margin-right: 10px;
`), p => p.color, k.IMAGE_SIZE, k.IMAGE_SIZE);
    class p extends g.Component {
        render() {
            const q = {
                    ...{
                        width: '100%',
                        color: i.default.Black
                    },
                    ...this.props.style || {}
                },
                {
                    group: r
                } = this.props;
            return (0, f.jsx)(m.default, {
                to: this.props.to,
                style: {
                    textDecoration: 'none'
                },
                children: (0, f.jsx)(h.default, {
                    hoverable: !0,
                    style: q,
                    children: (0, f.jsx)(k.Content, {
                        children: (0, f.jsxs)(k.LeftSide, {
                            children: [
                                (0, f.jsx)(o, {
                                    color: r.color
                                }),
                                (0, f.jsxs)(k.KitInfo, {
                                    children: [
                                        (0, f.jsx)(k.KitTitle, {
                                            children: r.name
                                        }),
                                        (0, f.jsx)(k.KitDescription, {
                                            children: r.memberCount + ' ' + (0, l.plural)('member', r.memberCount)
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            });
        }
    }
    var _q = p;
}), c.register('.....', function(d, e) {
    a(d.exports, 'GetHomepagePath', function() {
        return _j;
    }), a(d.exports, 'RedirectToHomepage', function() {
        return _k;
    }), a(d.exports, 'ReplaceToHomePage', function() {
        return _l;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    const _j = () => (0, h.isLoggedIn)() ? (0, h.isStudent)() ? f.HOME : f.KITS : '/',
        _k = () => {
            (0, i.NavigateTo)(_j());
        },
        _l = () => {
            g.history.replace(_j());
        };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....');
    var _m = () => ((0, j.useDidMount)(() => {
        (0, k.isStudent)() || (0, l.ReplaceToHomePage)();
    }), (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(k.Title, {
                title: 'Home'
            }),
            (0, f.jsx)(i.default, {
                header: (0, f.jsx)(g.default, {
                    title: 'Home',
                    hideButton: !0
                }),
                children: (0, f.jsx)(h.default, {})
            })
        ]
    }));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....');
    var _m = () => {
        const [n, o] = b(g).useState(!0), [p, q] = b(g).useState([]);
        return b(g).useEffect(() => {
            (0, h.isStudent)() && (0, h.request)({
                url: '/api/v1/groups/part-of',
                success: r => q(r),
                both: () => o(!1)
            });
        }, []), (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(i.default, {
                    groups: p.map(r => r._id)
                }),
                (0, f.jsx)(j.default, {}),
                (0, f.jsx)(l.default, {}),
                (0, f.jsx)(k.default, {
                    groups: p,
                    loading: n
                })
            ]
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....');
    var _i = j => (0, f.jsx)(h.default, {
        children: (0, f.jsx)(g.default, {
            groups: j.groups
        })
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _r;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....');
    let n, o, p, q = r => r;
    var _r = s => {
        const [t, u] = g.useState();
        return g.useEffect(() => {
            if (s.groups.length) {
                const v = () => {
                    (0, l.request)({
                        url: '/api/matchmaker/instant-join',
                        success: w => {
                            w && w.code && u(w.code);
                        }
                    });
                };
                v();
                const w = setInterval(v, 30000);
                return () => clearInterval(w);
            }
        }, [s.groups.length]), t ? (0, f.jsx)(f.Fragment, {
            children: (0, f.jsxs)(_s, {
                children: [
                    (0, f.jsxs)('div', {
                        children: [
                            (0, f.jsx)(_t, {
                                children: 'Join your teacher\'s live game!'
                            }),
                            (0, f.jsx)(_u, {
                                children: t
                            })
                        ]
                    }),
                    (0, f.jsx)('div', {
                        style: {
                            marginLeft: 20
                        },
                        children: (0, f.jsx)(j.default, {
                            background: '#2e7d32',
                            color: k.default.White,
                            icon: 'fas fa-gamepad',
                            text: 'Join Game',
                            customWidth: 200,
                            className: 'hc',
                            style: {
                                textDecoration: 'none'
                            },
                            to: `/join?gc=${ t }`
                        })
                    }),
                    (0, f.jsx)(m.default, {})
                ]
            })
        }) : null;
    };
    const _s = h.default.div.attrs({
            className: 'flex vc wrap'
        })(n || (n = q`
  justify-content: space-between;
`)),
        _t = h.default.div(o || (o = q`
  line-height: 16px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
`)),
        _u = h.default.div(p || (p = q`
  font-size: 50px;
  line-height: 50px;
  margin-top: 10px;
  font-weight: ${ 0 };
`), i.FontWeights.UltraBold);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....');
    let i;
    var _j = k => (0, f.jsxs)(_k, {
        href: k.to,
        customWidth: k.customWidth,
        className: `flex vc ${ k.className }`,
        style: k.style,
        children: [
            (0, f.jsx)('div', {
                className: 'flex hc vc',
                style: {
                    color: k.color,
                    background: k.background,
                    height: 36,
                    width: 36,
                    borderRadius: '50%',
                    marginRight: 11
                },
                children: (0, f.jsx)('i', {
                    className: k.icon
                })
            }),
            (0, f.jsx)('span', {
                children: k.text
            })
        ]
    });
    const _k = h.default.a(i || (i = (l => l)`
  background: ${ 0 };
  color: ${ 0 };
  width: ${ 0 }px;
  border-radius: 9px;
  padding: 10px 20px;
  border-style: solid;
  border-color: ${ 0 };
  border-width: 1px;
  font-size: 16px;
  line-height: 16px;
  transition: background 0.3s;
  cursor: pointer;
  &:hover {
    background: #fafafa;
    color: ${ 0 };
  }
`), g.default.White, g.default.Black, l => l.customWidth || 350, g.default.BorderGray, g.default.Black);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    c('.....');
    var _h = () => (0, f.jsx)(g.default, {
        style: {
            marginTop: 40,
            marginBottom: 40
        }
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....');
    let h;
    var _i = f.default.div.attrs({
        className: 'maxWidth'
    })(h || (h = (j => j)`
  color: ${ 0 };
`), g.default.Black);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....');
    let q, r, s, t = u => u;
    var u;
    (u = s || (s = {})).nextSevenDays = 'nextSevenDays', u.nextFortyFiveDays = 'nextFortyFiveDays', u.lastThirtyDays = 'lastThirtyDays';
    const v = () => (0, f.jsxs)('div', {
        style: {
            borderStyle: 'dashed',
            borderColor: k.default.BorderGray,
            minHeight: 145,
            borderWidth: 1,
            fontSize: 20,
            padding: 10,
            borderRadius: 8
        },
        className: 'maxWidth flex hc vc flex-column',
        children: [
            (0, f.jsx)('div', {
                children: (0, f.jsx)('i', {
                    className: 'fas fa-stars',
                    style: {
                        color: '#1a237e',
                        fontSize: 28
                    }
                })
            }),
            (0, f.jsx)('div', {
                style: {
                    marginTop: 5
                },
                children: 'No assignments for this time period.'
            })
        ]
    });
    var _w = () => {
        const [x, y] = g.useState(!0), [z, A] = g.useState(!1), [B, C] = g.useState(null), [D, E] = g.useState([]), F = (G, H) => {
            x && z || (y(!0), A(!0), (0, m.request)({
                url: `/api/hub/hub-items?startDate=${ G.format('MM-DD-YYYY') }&endDate=${ H.format('MM-DD-YYYY') }`,
                success: I => {
                    E(I);
                },
                both: () => y(!1)
            }));
        }, G = () => !x || !z, H = () => {
            B !== s.nextSevenDays && G() && (C(s.nextSevenDays), F(b(p)(), b(p)().add(15, 'days')));
        };
        return g.useEffect(() => {
            H();
        }, []), (0, f.jsxs)(h.default, {
            children: [
                (0, f.jsx)(_x, {
                    children: 'Assignments'
                }),
                (0, f.jsxs)('div', {
                    className: 'flex vc wrap',
                    style: {
                        marginTop: 15
                    },
                    children: [
                        (0, f.jsx)(_y, {
                            onClick: H,
                            selected: B === s.nextSevenDays,
                            children: 'Next 14 days'
                        }),
                        (0, f.jsx)(_y, {
                            onClick: () => {
                                B !== s.nextFortyFiveDays && G() && (C(s.nextFortyFiveDays), F(b(p)(), b(p)().add(46, 'days')));
                            },
                            selected: B === s.nextFortyFiveDays,
                            children: 'Next 45 days'
                        }),
                        (0, f.jsx)(_y, {
                            onClick: () => {
                                B !== s.lastThirtyDays && G() && (C(s.lastThirtyDays), F(b(p)().subtract(31, 'days'), b(p)()));
                            },
                            selected: B === s.lastThirtyDays,
                            children: 'Last 30 days'
                        })
                    ]
                }),
                (0, f.jsx)('div', {
                    style: {
                        height: 20
                    }
                }),
                x ? (0, f.jsx)('div', {
                    className: 'maxWidth flex hc',
                    style: {
                        marginTop: 20
                    },
                    children: (0, f.jsx)(o.default, {
                        size: 'large'
                    })
                }) : D.length ? (0, f.jsx)(f.Fragment, {
                    children: D.sort((I, J) => new Date(I.dueDate).getTime() - new Date(J.dueDate).getTime()).map(I => I.type === n.HubItemType.mapAssignment ? (0, f.jsx)(l.default, {
                        groupColor: I.group.color,
                        groupName: I.group.name,
                        dueDate: I.dueDate,
                        title: I.title,
                        status: I.status,
                        link: `/join/${ I.resourceId }`
                    }, I.resourceId + I.group._id) : null)
                }) : (0, f.jsx)(v, {})
            ]
        });
    };
    const _x = i.default.div(q || (q = t`
  font-size: 38px;
  line-height: 38px;
  font-weight: ${ 0 };
`), j.FontWeights.UltraBold),
        _y = i.default.div.attrs({
            className: 'flex vc'
        })(r || (r = t`
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 15px;
  border-style: solid;
  border-width: 1px;
  background: ${ 0 };
  color: ${ 0 };
  border-color: ${ 0 };
  margin-right: 10px;
  font-size: 16px;
  height: 30px;
  cursor: pointer;
  transition: all 0.3s;
  ${ 0 }
`), z => z.selected ? '#1a237e' : k.default.White, z => z.selected ? k.default.White : k.default.Black, z => z.selected ? '#1a237e' : k.default.BorderGray, z => !z.selected && '\n  &:hover {\n    background: #fafafa;\n  }\n  ');
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....');
    var _m = n => {
        const o = g.useMemo(() => n.status === j.HubItemStatus.completed ? 'Completed' : n.status === j.HubItemStatus.inProgress ? 'In Progress...' : b(l)().isAfter(b(l)(n.dueDate)) ? 'Past Due' : null, [
            n.status,
            n.dueDate
        ]);
        return (0, f.jsxs)(i.Container, {
            children: [
                (0, f.jsxs)(i.TopContainer, {
                    children: [
                        (0, f.jsx)(i.Color, {
                            style: {
                                background: n.groupColor
                            }
                        }),
                        (0, f.jsxs)(i.ClassAndDueDate, {
                            children: [
                                n.groupName,
                                ' - due ',
                                b(l)(n.dueDate).format('MMMM Do')
                            ]
                        })
                    ]
                }),
                (0, f.jsx)(k.default, {
                    to: n.link,
                    className: 'maxWidth',
                    target: '_parent',
                    style: {
                        textDecoration: 'none'
                    },
                    children: (0, f.jsx)(h.default, {
                        hoverable: !0,
                        style: {
                            borderRadius: 8,
                            width: '100%',
                            borderTopLeftRadius: 0
                        },
                        children: (0, f.jsxs)(i.CardContainer, {
                            children: [
                                (0, f.jsx)(i.IconContainer, {
                                    children: (0, f.jsx)('i', {
                                        className: 'fal fa-file-alt'
                                    })
                                }),
                                (0, f.jsxs)(i.RightSide, {
                                    children: [
                                        (0, f.jsxs)(i.DetailsSection, {
                                            children: [
                                                (0, f.jsx)(i.Title, {
                                                    children: n.title
                                                }),
                                                o ? (0, f.jsx)(i.Description, {
                                                    children: o
                                                }) : null
                                            ]
                                        }),
                                        (0, f.jsx)(i.Status, {
                                            children: n.status === j.HubItemStatus.completed ? (0, f.jsx)('i', {
                                                style: {
                                                    color: '#388e3c'
                                                },
                                                className: 'fas fa-check-circle'
                                            }) : null
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'Container', function() {
        return _u;
    }), a(d.exports, 'TopContainer', function() {
        return _v;
    }), a(d.exports, 'Color', function() {
        return _w;
    }), a(d.exports, 'ClassAndDueDate', function() {
        return _x;
    }), a(d.exports, 'CardContainer', function() {
        return _y;
    }), a(d.exports, 'RightSide', function() {
        return _z;
    }), a(d.exports, 'DetailsSection', function() {
        return _A;
    }), a(d.exports, 'IconContainer', function() {
        return _B;
    }), a(d.exports, 'Title', function() {
        return _C;
    }), a(d.exports, 'Description', function() {
        return _D;
    }), a(d.exports, 'Status', function() {
        return _E;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    let i, j, k, l, m, n, o, p, q, r, s, t = u => u;
    const _u = h.default.div.attrs({
            className: 'flex maxWidth flex-column'
        })(i || (i = t`
  align-items: flex-start;
  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`)),
        _v = h.default.div.attrs({
            className: 'flex vc'
        })(j || (j = t`
  border-style: solid;
  border-width: 1px;
  border-color: ${ 0 };
  border-bottom-style: none;
  padding: 7px 15px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`), f.default.BorderGray),
        _w = h.default.div(k || (k = t`
  height: 14px;
  width: 14px;
  border-radius: 50%;
`)),
        _x = h.default.div(l || (l = t`
  margin-left: 7px;
  font-size: 14px;
  line-height: 14px;
`)),
        _y = h.default.div.attrs({
            className: 'flex maxWidth vc'
        })(m || (m = t`
  color: ${ 0 };
`), f.default.Black),
        _z = h.default.div.attrs({
            className: 'flex maxWidth vc'
        })(n || (n = t`
  margin-left: 25px;
  justify-content: space-between;
`)),
        _A = h.default.div(o || (o = t`
  line-height: 1;
`)),
        _B = h.default.div(p || (p = t`
  font-size: 26px;
  color: #263238;
`)),
        _C = h.default.div(q || (q = t`
  font-size: 20px;
  font-weight: ${ 0 };
`), g.FontWeights.Bold),
        _D = h.default.div(r || (r = t`
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  margin-top: 6px;
`)),
        _E = h.default.div(s || (s = t`
  font-size: 32px;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....');
    let n;
    const o = () => (0, f.jsxs)('div', {
        style: {
            borderStyle: 'dashed',
            borderColor: l.default.BorderGray,
            minHeight: 145,
            borderWidth: 1,
            fontSize: 20,
            padding: 10,
            borderRadius: 8
        },
        className: 'maxWidth flex hc vc flex-column',
        children: [
            (0, f.jsx)('div', {
                children: (0, f.jsx)('i', {
                    className: 'fas fa-users-class',
                    style: {
                        color: '#004d40',
                        fontSize: 28
                    }
                })
            }),
            (0, f.jsx)('div', {
                style: {
                    marginTop: 5
                },
                children: 'You\'re not part of any classes.'
            })
        ]
    });
    var _p = q => {
        const [r, s] = g.useState([]), t = q.groups.filter(u => !r.includes(u._id)), u = v => {
            s(w => [
                ...w,
                v
            ]);
        };
        return (0, f.jsxs)(h.default, {
            style: {
                marginTop: 30
            },
            children: [
                (0, f.jsx)(_q, {
                    children: 'Classes'
                }),
                q.loading ? (0, f.jsx)('div', {
                    className: 'maxWidth flex hc',
                    style: {
                        marginTop: 20
                    },
                    children: (0, f.jsx)(m.default, {
                        size: 'large'
                    })
                }) : t.length ? t.map(v => (0, f.jsx)(k.default, {
                    name: v.name,
                    color: v.color,
                    creator: v.creatorName,
                    groupId: v._id,
                    onUnenroll: u
                }, v._id)) : (0, f.jsx)(o, {})
            ]
        });
    };
    const _q = i.default.div(n || (n = (r => r)`
  font-size: 38px;
  line-height: 38px;
  font-weight: ${ 0 };
  margin-bottom: 20px;
`), j.FontWeights.UltraBold);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _v;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....');
    let q, r, s, t, u = v => v;
    var _v = w => (0, f.jsx)(f.Fragment, {
        children: (0, f.jsx)(h.default, {
            style: {
                borderRadius: 8,
                marginBottom: 10
            },
            children: (0, f.jsxs)(_w, {
                children: [
                    (0, f.jsxs)('div', {
                        className: 'flex vc',
                        children: [
                            (0, f.jsx)('div', {
                                style: {
                                    borderRadius: 5,
                                    height: 55,
                                    width: 55,
                                    background: w.color
                                }
                            }),
                            (0, f.jsxs)(_x, {
                                children: [
                                    (0, f.jsx)(_y, {
                                        children: w.name
                                    }),
                                    (0, f.jsx)(_z, {
                                        children: w.creator
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, f.jsx)('div', {
                        children: (0, f.jsx)(k.default, {
                            title: 'Unenroll from class',
                            children: (0, f.jsx)(g.default, {
                                onClick: () => {
                                    j.default.confirm({
                                        title: 'Are you sure you want to unenroll from this class?',
                                        okText: 'Yes',
                                        cancelText: 'No',
                                        onOk: () => {
                                            (0, p.request)({
                                                url: '/api/v1/groups/unenroll',
                                                data: {
                                                    groupId: w.groupId
                                                },
                                                success: () => {
                                                    i.default.success(`Unenrolled from "${ w.name }"!`), w.onUnenroll(w.groupId);
                                                }
                                            });
                                        }
                                    });
                                },
                                shape: 'circle',
                                type: 'dashed',
                                icon: (0, f.jsx)(o.default, {})
                            })
                        })
                    })
                ]
            })
        })
    });
    const _w = l.default.div.attrs({
            className: 'flex maxWidth vc between'
        })(q || (q = u`
  color: ${ 0 };
`), m.default.Black),
        _x = l.default.div(r || (r = u`
  margin-left: 25px;
`)),
        _y = l.default.div(s || (s = u`
  font-size: 20px;
  line-height: 20px;
  font-weight: ${ 0 };
`), n.FontWeights.Bold),
        _z = l.default.div(t || (t = u`
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  line-height: 15px;
  margin-top: 6px;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'DashboardReports', function() {
        return _A;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = (g = c('.....'), c('.....')),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....'),
        t = c('.....'),
        u = c('.....'),
        v = c('.....'),
        w = c('.....'),
        x = c('.....');
    let y;
    const z = [{
                title: 'Kit',
                dataIndex: 'kit',
                key: 'report-kit',
                render: (A, B) => (0, f.jsx)(s.ReportKit, {
                    kit: A,
                    dateId: B._id,
                    assignmentId: B.mapAssignment
                })
            },
            {
                title: 'Accuracy',
                dataIndex: 'accuracy',
                key: 'report-accuracy',
                render: A => (0, f.jsx)(t.ReportProgressAccuracyMeter, {
                    percent: A
                })
            },
            {
                title: 'Participants',
                dataIndex: 'groups',
                key: 'report-groups',
                render: (A, B) => (0, f.jsx)(u.ReportParticipantsAndGroups, {
                    reportId: B._id,
                    participants: B.participants,
                    groups: A
                })
            }
        ],
        _A = () => {
            const [B, C] = (0, r.useSearchParams)();
            var D;
            const E = Math.max(1, null !== (D = Number(B.get('page'))) && void 0 !== D ? D : 1),
                [F, G] = g.useState(0),
                H = (0, g.useRef)(null),
                [I, J, K] = (0, k.useBoolean)(!1),
                {
                    data: L,
                    isLoading: M,
                    isError: N,
                    isFetching: O
                } = (0, q.useReports)(E);
            (0, n.default)(H, P => {
                var Q, R;
                G(null !== (R = null === (Q = P.target) || void 0 === Q ? void 0 : Q.offsetTop) && void 0 !== R ? R : 0);
            }), g.useEffect(() => {
                window.scrollTo(0, 0);
            }, [E]);
            const P = L ? (0, f.jsx)(p.ReportPagination, {
                total: L.totalItems,
                current: E,
                onPageChange: Q => {
                    (0, k.isUpgraded)() ? C({
                        page: Q
                    }): J();
                }
            }) : null;
            return (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(k.Title, {
                        title: 'Reports'
                    }),
                    L && !(null == L ? void 0 : L.totalItems) ? (0, f.jsx)(w.default, {
                        image: 'report',
                        title: 'Reports',
                        description: 'View and analyze student performance data. Reports for live games and assignments appear here when you host a game with one of your kits.',
                        hideButton: !0
                    }) : (0, f.jsxs)(f.Fragment, {
                        children: [
                            (0, f.jsx)(_B, {
                                ref: H,
                                children: (0, f.jsx)(m.default, {
                                    header: (0, f.jsx)(l.default, {
                                        title: 'Reports',
                                        customRightComponent: null != P ? P : (0, f.jsx)(f.Fragment, {})
                                    }),
                                    contentStyle: {
                                        padding: 0
                                    },
                                    children: M ? (0, f.jsx)(i.default, {
                                        paragraph: {
                                            rows: 4
                                        },
                                        title: !1,
                                        active: !0,
                                        className: 'maxWidth',
                                        style: {
                                            padding: 35
                                        }
                                    }) : N ? (0, f.jsx)('div', {
                                        className: 'maxAll flex-center center',
                                        style: {
                                            padding: 35
                                        },
                                        children: 'There was an error loading your reports. Please try again later.'
                                    }) : (0, f.jsxs)('div', {
                                        id: 'reports-container',
                                        children: [
                                            (0, f.jsx)(h.default, {
                                                theme: {
                                                    token: {
                                                        padding: 35
                                                    }
                                                },
                                                children: (0, f.jsx)(j.default, {
                                                    dataSource: L.items.map(Q => ({
                                                        key: Q._id,
                                                        ...Q
                                                    })),
                                                    columns: z,
                                                    bordered: !0,
                                                    pagination: !1,
                                                    tableLayout: 'auto',
                                                    size: 'large',
                                                    onRow: Q => ({
                                                        onClick: () => {
                                                            (0, v.NavigateTo)(`/report/${ Q._id }`);
                                                        },
                                                        style: {
                                                            cursor: 'pointer'
                                                        }
                                                    }),
                                                    loading: {
                                                        spinning: O,
                                                        indicator: null
                                                    },
                                                    sticky: {
                                                        offsetHeader: F,
                                                        getContainer: () => document.getElementById('reports-container')
                                                    }
                                                })
                                            }),
                                            (0, f.jsx)('div', {
                                                className: 'maxWidth flex-center',
                                                style: {
                                                    padding: '35px 0px'
                                                },
                                                children: P
                                            })
                                        ]
                                    })
                                })
                            }),
                            (0, f.jsx)(x.ReportUpgradeModal, {
                                visible: I,
                                close: K
                            })
                        ]
                    })
                ]
            });
        },
        _B = o.default.div.attrs({
            className: 'maxWidth flex'
        })(y || (y = (C => C)`
  flex: 1;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....');

    function h() {}
    let i;
    const j = k => i || (i = function(l) {
        let m = !1,
            n = [];
        const o = new Map(),
            p = new(l || window.ResizeObserver)((q, r) => {
                n = n.concat(q), m || window.requestAnimationFrame(function() {
                    const s = new Set();
                    for (let t = 0; t < n.length; t++) {
                        if (s.has(n[t].target))
                            continue;
                        s.add(n[t].target);
                        const u = o.get(n[t].target);
                        null == u || u.forEach(v => v(n[t], r));
                    }
                    n = [], t = !1;
                }), m = !0;
            });
        return {
            observer: p,
            subscribe(q, r) {
                var s;
                p.observe(q);
                const t = null !== (s = o.get(q)) && void 0 !== s ? s : [];
                t.push(r), o.set(q, t);
            },
            unsubscribe(q, r) {
                var s;
                const t = null !== (s = o.get(q)) && void 0 !== s ? s : [];
                if (1 === t.length)
                    return p.unobserve(q), void o.delete(q);
                const u = t.indexOf(r); -
                1 !== u && t.splice(u, 1), o.set(q, t);
            }
        };
    }(k));
    var _k = function(l, m, n = {}) {
        const o = j(n.polyfill),
            p = (0, g.default)(m);
        return (0, f.default)(() => {
            let q = !1;
            const r = l && 'current' in l ? l.current : l;
            if (!r)
                return h;

            function s(t, u) {
                q || p.current(t, u);
            }
            return o.subscribe(r, s), () => {
                q = !0, o.unsubscribe(r, s);
            };
        }, [
            l,
            o,
            p
        ]), o.observer;
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = b(c('.....'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('.....');
    var _g = h => {
        const i = f.useRef(h);
        return f.useEffect(() => {
            i.current = h;
        }), i;
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'ReportPagination', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    c('.....');
    const _h = i => {
        const {
            total: j,
            current: k,
            onPageChange: l
        } = i;
        return (0, f.jsx)(g.default, {
            simple: !0,
            current: k,
            total: j,
            defaultPageSize: 10,
            onChange: l
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'useReports', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    const _h = i => (0, f.useQuery)({
        queryKey: [
            'dashboard-repports',
            {
                page: i
            }
        ],
        keepPreviousData: !0,
        staleTime: 60000,
        retry: 2,
        queryFn: () => (0, g.requestAsPromise)({
            url: '/api/game-report/fetch-all',
            data: {
                page: i
            }
        })
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'ReportKit', function() {
        return _s;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....');
    let o, p, q, r = s => s;
    const _s = t => {
            const u = b(i)((0, j.dateFromObjectId)(t.dateId)).format('MMMM Do [at] LT');
            return (0, f.jsxs)(h.default, {
                direction: 'horizontal',
                size: 14,
                align: 'center',
                children: [
                    (0, f.jsx)('div', {
                        children: (0, f.jsx)(_t, {
                            src: (0, n.getCloudinaryUrl)(t.kit.gif),
                            style: {
                                width: 55,
                                height: 55
                            }
                        })
                    }),
                    (0, f.jsxs)('div', {
                        children: [
                            (0, f.jsx)(_u, {
                                children: t.kit.title
                            }),
                            (0, f.jsx)(_v, {
                                children: u
                            }),
                            t.assignmentId ? (0, f.jsx)('div', {
                                style: {
                                    marginTop: '0.25em'
                                },
                                children: (0, f.jsx)(l.ReportLinkTag, {
                                    to: `/assignment/${ t.assignmentId }`,
                                    children: 'Assignment'
                                })
                            }) : null
                        ]
                    })
                ]
            });
        },
        _t = g.default.img(o || (o = r`
  border-radius: 5px;
  border: solid ${ 0 } 1px;
  flex-shrink: 0;
  object-fit: cover;
`), m.default.Black),
        _u = g.default.div(p || (p = r`
  font-size: 1.1em;
  font-weight: ${ 0 };
`), k.FontWeights.Bold),
        _v = g.default.div(q || (q = r`
  font-size: 0.9em;
  font-style: italic;
  margin-top: 0.05em;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'ReportLinkTag', function() {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....');
    let i;
    const _j = k => (0, f.jsx)(_k, {
            onClick: l => null == l ? void 0 : l.stopPropagation(),
            to: k.to,
            children: k.children
        }),
        _k = (0, h.default)(g.default)(i || (i = (l => l)`
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.2em 0.73em;
  font-size: 0.9em;
  border-radius: 50px;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'ReportProgressAccuracyMeter', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    c('.....');
    var i = c('.....');
    const _j = k => {
        const l = k.percent < 60 ? '#F44336' : k.percent < 80 ? '#FFC107' : '#66BB6A';
        return (0, f.jsx)(g.default, {
            theme: {
                components: {
                    Progress: {
                        colorText: (0, i.darken)(0.2, l)
                    }
                }
            },
            children: (0, f.jsx)(h.default, {
                type: 'dashboard',
                percent: k.percent,
                width: 65,
                strokeColor: l,
                status: 'normal'
            })
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'ReportParticipantsAndGroups', function() {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....');
    const _j = k => {
        var l;
        return (0, f.jsxs)('div', {
            children: [
                (0, f.jsxs)('div', {
                    style: {
                        fontStyle: 'italic'
                    },
                    children: [
                        k.participants,
                        ' ',
                        (0, g.plural)('participant', k.participants)
                    ]
                }),
                (null === (l = k.groups) || void 0 === l ? void 0 : l.length) ? (0, f.jsx)(h.default, {
                    direction: 'horizontal',
                    wrap: !0,
                    size: 'small',
                    style: {
                        marginTop: '0.3em'
                    },
                    children: k.groups.map(m => (0, f.jsx)(i.ReportLinkTag, {
                        to: `/class/${ m._id }`,
                        children: m.name
                    }, k.reportId + m._id))
                }) : null
            ]
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'ReportUpgradeModal', function() {
        return _i;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....');
    const _i = j => (0, f.jsx)(g.default, {
        id: 'view more reports',
        ...j,
        copy: {
            title: 'More reports with Pro',
            description: `To view more of your past reports, upgrade to ${ h.COMPANY_NAME } Pro.`
        }
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....');
    let o = class extends i.Component {
        render() {
            return (0, h.jsxs)(k.default, {
                onCancel: this.handleClose,
                open: this.props.navigation.archiveModalShow,
                closable: !0,
                footer: null,
                bodyStyle: {
                    fontFamily: m.Fonts.SFPro,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: n.default.Black
                },
                width: 600,
                children: [
                    (0, h.jsx)('div', {
                        style: {
                            fontSize: 42,
                            fontWeight: m.FontWeights.UltraBold
                        },
                        children: 'Kit is Archived'
                    }),
                    (0, h.jsxs)('div', {
                        style: {
                            fontSize: 19,
                            marginTop: -10,
                            marginBottom: 20,
                            textAlign: 'center'
                        },
                        children: [
                            'In order to ',
                            this.props.kits.kitAttemptedAction,
                            ' this kit, you must unarchive it first.'
                        ]
                    }),
                    (0, h.jsx)(j.default, {
                        onClick: this.handleClose,
                        type: 'primary',
                        size: 'large',
                        children: 'Got It!'
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, f.default)(this, 'handleClose', () => this.props.navigation.archiveModalShow = !1);
        }
    };
    o = (0, g.__decorate)([
        (0, l.inject)('navigation', 'kits'),
        l.observer
    ], o);
    var _p = o;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    c('.....');
    var i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....');
    let n;
    var _o = p => {
        const q = (0, l.getUser)();
        return (0, l.isStudent)() ? null : (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)(_p, {
                    children: [
                        (() => {
                            const {
                                freeTrial: r
                            } = q;
                            return !!((0, l.isUpgraded)() && r && r.currentlyOnFreeTrial);
                        })() && (0, f.jsx)(k.default, {
                            user: q,
                            openUpgradeModal: () => {
                                p.openUpgradeModal(!1);
                            }
                        }),
                        !(0, l.isUpgraded)() && (0, f.jsx)(j.default, {
                            openUpgradeModal: p.openUpgradeModal
                        })
                    ]
                }),
                (0, f.jsx)(m.default, {})
            ]
        });
    };
    const _p = i.default.div.attrs({
        className: 'maxWidth'
    })(n || (n = (q => q)`
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  color: ${ 0 };
  font-family: ${ 0 };
`), g.default.Black, h.Fonts.SFPro);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....');
    h = c('.....');
    const n = 'hub_upgrade_modal_last_seen';
    var _o = p => {
        const {
            isLoading: q,
            data: r
        } = (0, k.default)();
        g.useEffect(() => {
            (() => {
                if (!localStorage.getItem(n))
                    return !0;
                const s = localStorage.getItem(n),
                    t = Number(s);
                if (!t || isNaN(t))
                    return !0;
                const u = b(i).unix(t);
                return Math.abs(b(i)().diff(u, 'hour')) >= 48;
            })() && (localStorage.setItem(n, b(i)().unix().toString()), p.openUpgradeModal(!0));
        }, []);
        const s = g.useMemo(() => (0, l.getFreePlanType)() === l.FreePlanType.limitedGames && (null == r ? void 0 : r.count) < (0, l.getLimitedGameLimit)() ? h.BACKGROUND_COLOR : '#c62828', [r]);
        return (0, l.getFreePlanType)() === l.FreePlanType.limitedGames && q ? null : (0, f.jsxs)(h.Container, {
            background: s,
            children: [
                (0, f.jsx)(h.Text, {
                    children: (() => {
                        if ((0, l.getFreePlanType)() === l.FreePlanType.limitedGames) {
                            const t = (0, l.getLimitedGameLimit)() - r.count;
                            return t <= 0 ? (0, f.jsx)(f.Fragment, {
                                children: 'You are out of hosted games for this month'
                            }) : (0, f.jsxs)(f.Fragment, {
                                children: [
                                    'You can host',
                                    ' ',
                                    (0, f.jsxs)(h.Bold, {
                                        children: [
                                            t,
                                            ' more ',
                                            (0, m.plural)('game', t)
                                        ]
                                    }),
                                    ' ',
                                    'this month'
                                ]
                            });
                        }
                        return (0, f.jsxs)(f.Fragment, {
                            children: [
                                'You are on the limited free version of ',
                                j.COMPANY_NAME,
                                '.'
                            ]
                        });
                    })()
                }),
                (0, f.jsx)(h.ActionButton, {
                    onClick: () => {
                        p.openUpgradeModal(!1);
                    },
                    background: s,
                    children: 'Learn more'
                })
            ]
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'BACKGROUND_COLOR', function() {
        return _t;
    }), a(d.exports, 'Container', function() {
        return _v;
    }), a(d.exports, 'Text', function() {
        return _w;
    }), a(d.exports, 'Bold', function() {
        return _x;
    }), a(d.exports, 'ActionButton', function() {
        return _y;
    }), a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....');
    let o, p, q, r, s = t => t;
    const _t = '#0a2540';
    var _u = v => {
        const [w, x] = j.useState(0), [y, z] = j.useState(''), A = () => {
            const {
                user: B
            } = v;
            if (!B && !B.freeTrial)
                return;
            const C = b(n).duration(b(n)(B.freeTrial.freeTrialExpiration).diff(b(n)())),
                D = C.asDays(),
                E = C.asHours(),
                F = C.asMinutes(),
                G = C.asSeconds();
            if (D >= 1) {
                let H = D;
                31 === D && (H = 30), z('day'), x(Math.ceil(H));
            } else
                E >= 1 && E < 24 ? (z('hour'), x(Math.ceil(E))) : F >= 1 && F < 60 ? (z('minute'), x(Math.ceil(F))) : G > 0 && G < 60 && (z('second'), x(Math.ceil(G)));
        };
        return j.useEffect(() => {
            A();
        }, []), (0, m.useIntervalWhen)(A, 1000), y ? (0, f.jsxs)(_v, {
            background: _t,
            children: [
                (0, f.jsxs)(_w, {
                    children: [
                        'Your trial of ',
                        (0, f.jsx)(_x, {
                            children: 'Gimkit Pro'
                        }),
                        ' ends in',
                        ' ',
                        (0, f.jsxs)(_x, {
                            children: [
                                w,
                                ' ',
                                (0, l.plural)(y, w),
                                '.'
                            ]
                        })
                    ]
                }),
                (0, f.jsx)(_y, {
                    onClick: v.openUpgradeModal,
                    background: _t,
                    children: 'Learn more'
                })
            ]
        }) : null;
    };
    const _v = k.default.div.attrs({
            className: 'maxWidth flex vc'
        })(o || (o = s`
  background: ${ 0 };
  padding: 15px 20px;
  color: ${ 0 };
  justify-content: space-between;
  @media (max-width: 678px) {
    justify-content: center;
    text-align: center;
  }
`), w => w.background, g.default.White),
        _w = k.default.div(p || (p = s`
  font-size: 18px;
`)),
        _x = k.default.span(q || (q = s`
  font-weight: ${ 0 };
`), h.FontWeights.Bold),
        _y = (0, k.default)(i.default)(r || (r = s`
  background: ${ 0 };
  color: ${ 0 };
  font-size: 15px;
  border-radius: 50px;
  padding: 5px 18px;
  border-style: solid;
  border-width: 2px;
  border-color: ${ 0 };
  transition: color 0.25s, background 0.25s;
  cursor: pointer;
  &:hover {
    color: ${ 0 };
    background: ${ 0 };
  }
  @media (max-width: 678px) {
    display: none;
  }
`), z => z.background, g.default.White, g.default.White, z => z.background, g.default.White);
}), c.register('.....', function(d, e) {
    a(d.exports, 'useIntervalWhen', function() {
        return _g;
    });
    var f = c('.....');

    function _g(h, i, j, k) {
        void 0 === i && (i = 0), void 0 === j && (j = !0), void 0 === k && (k = !1);
        var l = (0, f.useRef)();

        function m() {
            _g.current && _g.current();
        }
        (0, f.useEffect)(function() {
            _g.current = h;
        }), (0, f.useEffect)(function() {
            if ('undefined' != typeof window) {
                if (j) {
                    k && m();
                    var n = window.setInterval(m, i);
                    return function() {
                        window.clearInterval(n);
                    };
                }
            } else
                console.warn('useIntervalWhen: window is undefined.');
        }, [
            j,
            i
        ]);
    }
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....');
    var _l = () => {
        const [m, n] = g.useState(!1);
        g.useEffect(() => {
            const o = (0, k.getUrlVariable)('from');
            o && 'upgrade' === o && n(!0);
        }, []);
        return (0, f.jsx)(h.default, {
            onCancel: () => n(!1),
            open: m,
            footer: null,
            width: 600,
            closable: !0,
            style: {
                top: 30
            },
            children: (0, f.jsxs)('div', {
                style: {
                    fontFamily: i.Fonts.SFPro,
                    color: j.default.Black
                },
                className: 'flex hc vc flex-column',
                children: [
                    (0, f.jsx)('div', {
                        style: {
                            backgroundImage: 'url(/client/img/home/me.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            height: 100,
                            width: 100,
                            borderRadius: '50%',
                            borderStyle: 'solid',
                            borderWidth: 2,
                            borderColor: j.default.BorderGray
                        }
                    }),
                    (0, f.jsx)('div', {
                        style: {
                            fontWeight: i.FontWeights.UltraBold,
                            fontSize: 33,
                            marginTop: 6
                        },
                        children: 'Thank you.'
                    }),
                    (0, f.jsxs)('div', {
                        style: {
                            fontSize: 19,
                            marginTop: 10,
                            textAlign: 'left'
                        },
                        children: [
                            'Thank you so much for supporting us by upgrading to Gimkit Pro.',
                            (0, f.jsx)('br', {}),
                            (0, f.jsx)('br', {}),
                            'Gimkit started as a high school project. Now that I\'ve graduated, it\'s such a privilege to be able to continue to work on Gimkit. Your support is the reason why we can keep going.',
                            (0, f.jsx)('br', {}),
                            ' ',
                            (0, f.jsx)('br', {}),
                            'In addition to purchasing a product your students love, you\'re helping support a small four-person independent company. We don\'t serve ads or sell user information. We\'re not funded by VC firms. 100% of our revenue is from subscriptions like this one.',
                            (0, f.jsx)('br', {}),
                            ' ',
                            (0, f.jsx)('br', {}),
                            'Thank you for not only supporting a small business, but a student-started business. It means so much to me.',
                            (0, f.jsx)('br', {}),
                            ' ',
                            (0, f.jsx)('br', {}),
                            'If you ever need anything, feel free to reach me personally - josh@gimkit.com.',
                            (0, f.jsx)('br', {}),
                            ' ',
                            (0, f.jsx)('br', {}),
                            'Enjoy Gimkit!',
                            (0, f.jsx)('br', {}),
                            (0, f.jsx)('br', {}),
                            (0, f.jsx)('b', {
                                children: '- Josh Feinsilber'
                            }),
                            ', creator of Gimkit'
                        ]
                    })
                ]
            })
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....');
    var _j = k => ((0, h.useSeasonTicketOpener)(), (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(g.default, {}),
            (0, f.jsx)(i.default, {
                upgradeModalVisible: k.upgradeModalVisible,
                proUpsellModalVisible: k.proUpsellModalVisible
            })
        ]
    }));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    var _i = () => (f.useEffect(() => {
        const j = (0, g.getUser)().tokenIssued || 0;
        Math.round(new Date().getTime() / 1000) - j >= 86400 && (0, h.default)({});
    }, []), null);
}), c.register('.....', function(d, e) {
    a(d.exports, 'useSeasonTicketOpener', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    const _j = () => {
        f.useEffect(() => {
            var k, l;
            const m = (0, g.getUser)();
            m && (null == m || null === (k = m.seasonTicket) || void 0 === k ? void 0 : k.active) && !(null == m || null === (l = m.seasonTicket) || void 0 === l ? void 0 : l.viewed) && (0, h.NavigateTo)(i.SEASON_TICKET_BASE);
        }, []);
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    c('.....');
    var i = c('.....');
    var _j = k => (() => {
        if (k.upgradeModalVisible)
            return !0;
        if (k.proUpsellModalVisible)
            return !0;
        if ((0, g.getUrlVariable)('from'))
            return !0;
        const l = (0, g.getUser)(),
            m = (0, g.dateFromId)(l._id);
        return b(h)().diff(b(h)(m), 'days') < 3;
    })() ? null : (0, f.jsx)(i.default, {
        allowAutoOpen: !0
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....');
    let n;
    var _o = () => {
        const [p, q, r] = (0, j.useBoolean)(!1), [s, t] = k.useState(0), u = k.useMemo(() => !(0, j.isStudent)() && !!sessionStorage.getItem('NEW_USER'), []);
        k.useEffect(() => {
            u && (q(), sessionStorage.removeItem('NEW_USER'));
        }, []);
        return u ? (0, f.jsx)(g.default, {
            width: 730,
            open: p,
            footer: null,
            style: {
                top: 35
            },
            bodyStyle: {
                padding: 50
            },
            closable: !1,
            children: (0, f.jsx)(_p, {
                children: (0, f.jsx)(m.default, {
                    currentStage: s,
                    nextStage: () => t(v => v + 1),
                    close: r
                })
            })
        }) : null;
    };
    const _p = l.default.div.attrs({
        className: 'maxWidth'
    })(n || (n = (q => q)`
  font-family: ${ 0 };
  color: ${ 0 };
`), i.Fonts.SFPro, h.default.Black);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('.....'),
        g = c('.....');
    c('.....');
    var h = c('.....'),
        i = c('.....'),
        j = c('.....');
    let k, l, m, n, o, p = q => q;
    var _q = r => {
        const s = i.default[r.currentStage];
        return (0, f.jsxs)(_r, {
            children: [
                s.image ? (0, f.jsx)(_t, {
                    src: `/client/img/dashboard/onboarding/${ s.image }.svg`
                }, s.image) : (0, f.jsx)(_s, {}),
                (0, f.jsx)(_u, {
                    children: s.title
                }),
                (0, f.jsx)(_v, {
                    children: s.content
                }),
                (0, f.jsx)(j.default, {
                    currentStage: r.currentStage,
                    nextStage: r.nextStage,
                    close: r.close
                })
            ]
        });
    };
    const _r = h.default.div.attrs({
            className: 'flex-center flex-column maxWidth'
        })(k || (k = p``)),
        _s = h.default.div(l || (l = p`
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
        _t = h.default.img(m || (m = p`
  height: 80px;
`)),
        _u = h.default.div(n || (n = p`
  font-size: 34px;
  font-weight: ${ 0 };
  margin-top: 20px;
`), g.FontWeights.Bold),
        _v = h.default.div(o || (o = p`
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 25px;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('.....');
    var _g = [{
            title: 'Hey, welcome to Gimkit!',
            content: (0, f.jsxs)(f.Fragment, {
                children: [
                    'Thanks for signing up! I\'m Josh, and I started Gimkit as a high school project. Games really helped me get engaged in school, so I decided to build my own!',
                    (0, f.jsx)('br', {}),
                    ' ',
                    (0, f.jsx)('br', {}),
                    'Click "Next" and I\'ll walk you through a few of the basics.'
                ]
            })
        },
        {
            image: 'kit',
            title: 'Kit = your content',
            content: (0, f.jsxs)(f.Fragment, {
                children: [
                    'What you might call a question set...we call a kit. A kit contains all of the questions & terms you\'ll want students to learn & review when you play.',
                    (0, f.jsx)('br', {}),
                    ' ',
                    (0, f.jsx)('br', {}),
                    'You can create your own, or find existing kits made by other teachers.'
                ]
            })
        },
        {
            image: 'modes',
            title: 'Tons of ways to play.',
            content: (0, f.jsxs)(f.Fragment, {
                children: [
                    'Part of what makes Gimkit special are all of the different game modes you can explore with your students! ',
                    (0, f.jsx)('br', {}),
                    ' ',
                    (0, f.jsx)('br', {}),
                    'Try out our selection of modes, and stay tuned for new ones coming in the future!'
                ]
            })
        },
        {
            image: 'classes',
            title: 'Classes keep it safe.',
            content: (0, f.jsxs)(f.Fragment, {
                children: [
                    'Ever host other games in class and have a kid enter in an inappropriate name? I get it. I sat next to that kid.',
                    (0, f.jsx)('br', {}),
                    ' ',
                    (0, f.jsx)('br', {}),
                    'Using classes forces students to use their real names. Plus, it makes it impossible for students outside your class to join.'
                ]
            })
        },
        {
            title: 'You\'re all set!',
            content: (0, f.jsxs)(f.Fragment, {
                children: [
                    'That\'s all you need to know for now! Have fun exploring and we hope your students have fun playing. If you ever need help, email us at',
                    ' ',
                    (0, f.jsx)('a', {
                        href: 'mailto:hello@gimkit.com',
                        children: 'hello@gimkit.com'
                    }),
                    ' & we\'ll get back to you. Enjoy!'
                ]
            })
        }
    ];
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....');
    var _k = l => {
        const m = g.useMemo(() => l.currentStage === j.default.length - 1, [l.currentStage]),
            n = g.useCallback(() => {
                m ? l.close() : l.nextStage();
            }, [m]);
        return (0, f.jsxs)('div', {
            className: 'flex-column flex-center',
            children: [
                (0, f.jsx)(h.default, {
                    size: 'large',
                    type: 'primary',
                    style: {
                        height: 50,
                        width: 300
                    },
                    onClick: n,
                    children: m ? 'Close' : 'Next'
                }),
                !m && (0, f.jsx)(i.default, {
                    onClick: l.close,
                    style: {
                        marginTop: 10
                    },
                    children: '...or close this screen'
                })
            ]
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....');
    let r, s, t, u = v => v;
    const v = 'pro-monthly-modal-last-shown';
    var _w = x => {
        const [y, z, A] = (0, p.useBoolean)(!1);
        return k.useEffect(() => {
            const B = (0, p.getUser)();
            if (!B)
                return;
            if (!B.planStartDate)
                return;
            const C = b(j).unix(B.planStartDate);
            if (Math.abs(b(j)().diff(C, 'days')) < 40)
                return;
            const D = localStorage.getItem(v);
            if (D) {
                const E = b(j).unix(Number(D));
                if (Math.abs(b(j)().diff(E, 'days')) < 21)
                    return;
            }
            z(), localStorage.setItem(v, b(j)().unix().toString());
        }, []), k.useEffect(() => {
            x.onVisibleChange(y);
        }, [y]), (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(_x, {}),
                (0, f.jsx)(i.default, {
                    className: 'pro-upsell-modal',
                    open: y,
                    onCancel: A,
                    footer: null,
                    width: 850,
                    style: {
                        top: 30
                    },
                    bodyStyle: {
                        padding: '0px',
                        background: m.default.Snow
                    },
                    closable: !1,
                    children: (0, f.jsxs)(_y, {
                        children: [
                            (0, f.jsx)(q.default, {
                                user: (0, p.getUser)(),
                                close: A,
                                copy: {
                                    title: (0, f.jsx)('div', {
                                        style: {
                                            marginTop: 25
                                        },
                                        children: 'Pay annually, save $60.'
                                    }),
                                    description: (0, f.jsxs)(f.Fragment, {
                                        children: [
                                            'Think you\'ll continue to use Gimkit?',
                                            (0, f.jsx)('br', {}),
                                            ' If so, switch to paying annually and save 65% per year.'
                                        ]
                                    })
                                },
                                showingModes: !0
                            }),
                            (0, f.jsxs)('div', {
                                className: 'maxWidth flex-center flex-column',
                                style: {
                                    marginTop: -140,
                                    marginBottom: 30
                                },
                                children: [
                                    (0, f.jsx)(h.default, {
                                        size: 'large',
                                        type: 'primary',
                                        icon: (0, f.jsx)(g.default, {}),
                                        style: {
                                            width: 380,
                                            height: 70,
                                            display: 'flex'
                                        },
                                        className: 'flex-center',
                                        href: o.CHECKOUT,
                                        children: 'Switch To Annual Billing'
                                    }),
                                    (0, f.jsx)(_z, {
                                        onClick: A,
                                        children: 'No thanks!'
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    };
    const _x = (0, l.createGlobalStyle)(r || (r = u`
  .pro-upsell-modal > .ant-modal-content {
    border-radius: 10px;
    overflow: hidden;
    padding: 0px !important;
  }
`)),
        _y = l.default.div.attrs({
            className: 'maxWidth'
        })(s || (s = u`
  color: ${ 0 };
  font-family: ${ 0 };
`), m.default.Black, n.Fonts.SFPro),
        _z = l.default.div(t || (t = u`
  z-index: 999;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  margin-top: 14px;
  cursor: pointer;
  text-decoration: underline;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'StarOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z'
                }
            }]
        },
        name: 'star',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....');
    let l, m, n = o => o;
    var _o = p => {
        const q = g.useMemo(() => {
                var r;
                return null !== (r = p.theme) && void 0 !== r ? r : i.SiteHeaderTheme.light;
            }, [p.theme]),
            r = g.useMemo(() => {
                var s;
                return null !== (s = p.alpha) && void 0 !== s ? s : j.SiteHeaderAlpha.standard;
            }, [p.alpha]),
            s = g.useMemo(() => {
                const t = r === j.SiteHeaderAlpha.none ? 1 : q === i.SiteHeaderTheme.light ? 0.85 : 0.45;
                return q === i.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${ t })` : `rgba(16, 16, 16, ${ t })`;
            }, [
                q,
                r
            ]),
            t = g.useMemo(() => q === i.SiteHeaderTheme.light ? 'rgb(235, 238, 241)' : 'rgb(143 143 143 / 60%)', [q]);
        return (0, f.jsxs)(_p, {
            background: s,
            borderColor: t,
            children: [
                (0, f.jsxs)(_q, {
                    children: [
                        (0, f.jsx)(k.default, {
                            options: p.options,
                            selectedOption: p.selectedOption,
                            theme: q
                        }),
                        (0, f.jsx)('div', {
                            children: p.rightSideContent
                        })
                    ]
                }),
                p.bottomContent
            ]
        });
    };
    const _p = h.default.div.attrs({
            className: 'maxWidth'
        })(l || (l = n`
  background: ${ 0 };
  padding: 7px 25px;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px ${ 0 };
`), q => q.background, q => q.borderColor),
        _q = h.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(m || (m = n``));
}), c.register('.....', function(d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderTheme', function() {
        return f;
    }), (g = f || (f = {})).light = 'light', g.dark = 'dark';
}), c.register('.....', function(d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderAlpha', function() {
        return f;
    }), (g = f || (f = {})).none = 'none', g.standard = 'standard', g.darker = 'darker';
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....');
    let j;
    var _k = l => (0, f.jsx)(_l, {
        children: (0, f.jsx)(g.default, {
            direction: 'horizontal',
            size: 8,
            wrap: !0,
            children: l.options.map(m => (0, f.jsx)(h.default, {
                option: m,
                selected: l.selectedOption === m.id,
                theme: l.theme
            }, `option-${ m.id }`))
        })
    });
    const _l = i.default.div.attrs({
        className: 'scroll-x'
    })(j || (j = (m => m)`
  flex: 1;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....');
    let n;
    var _o = p => {
        const {
            theme: q,
            option: r
        } = p, {
            pathname: s
        } = (0, l.useLocation)(), {
            label: t,
            icon: u,
            path: v,
            otherMatchingPaths: w
        } = r, x = (() => {
            if (v) {
                if ((0, k.matchPath)({
                        path: v
                    }, s))
                    return !0;
                if ((null == w ? void 0 : w.length) && w.some(y => (0, k.matchPath)({
                        path: y
                    }, s)))
                    return !0;
            }
            return !1;
        })(), y = g.useMemo(() => !!x || p.selected, [
            x,
            p.selected
        ]), z = g.useMemo(() => y ? '#1677ff' : 'transparent', [
            q,
            y
        ]), A = g.useMemo(() => y ? j.default.White : q === h.SiteHeaderTheme.light ? 'rgb(26, 27, 37)' : j.default.White, [
            q,
            y
        ]), B = g.useMemo(() => y ? z : q === h.SiteHeaderTheme.light ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)', [
            q,
            y,
            z
        ]);
        return (0, f.jsx)(m.default, {
            to: v,
            target: p.option.target,
            onClick: r.onSelect,
            style: {
                cursor: 'pointer'
            },
            children: (0, f.jsxs)(_p, {
                background: z,
                color: A,
                hoverBackground: B,
                children: [
                    u ? (0, f.jsx)('span', {
                        style: {
                            marginRight: 6,
                            fontSize: '0.9em'
                        },
                        children: u
                    }) : null,
                    t
                ]
            })
        });
    };
    const _p = i.default.div.attrs({
        className: 'flex-center'
    })(n || (n = (q => q)`
  line-height: 1;
  padding: 6px 12px;
  border-radius: 50px;
  background: ${ 0 };
  white-space: nowrap;
  color: ${ 0 };
  font-size: 15px;
  cursor: pointer;
  transition: background 0.14s ease-in-out;
  &:hover {
    background: ${ 0 };
  }
`), q => q.background, q => q.color, q => q.hoverBackground);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....');
    c('.....');
    var h = c('.....'),
        i = c('.....');
    let j;
    var _k = () => (0, f.jsx)(_l, {
        children: (0, f.jsx)(g.default.Search, {
            style: {
                width: 285
            },
            enterButton: !0,
            placeholder: 'Search for kits...',
            onSearch: l => {
                l && (0, i.NavigateTo)(`/search?q=${ l }`);
            }
        })
    });
    const _l = h.default.div(j || (j = (m => m)`
  margin-right: -4px;
  margin-left: 30px;
`));
}), c.register('.....', function(d, e) {
    a(d.exports, 'useMediaMatch', function() {
        return _g;
    });
    var f = c('.....');

    function _g(h) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var i = (0, f.useMemo)(function() {
                return window.matchMedia(h);
            }, [h]),
            j = (0, f.useState)(function() {
                return i.matches;
            }),
            k = j[0],
            l = j[1];
        return (0, f.useEffect)(function() {
            _g(i.matches);
            var m = function(n) {
                return _g(n.matches);
            };
            return i.addEventListener ? (i.addEventListener('change', m), function() {
                return i.removeEventListener('change', m);
            }) : (i.addListener(m), function() {
                return i.removeListener(m);
            });
        }, [i]), k;
    }
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');

    function _i(j, k, l) {
        return function(m) {
            const {
                prefixCls: n,
                style: o
            } = m, p = g.useRef(null), [q, r] = g.useState(0), [s, t] = g.useState(0), [u, v] = (0, f.default)(!1, {
                value: m.open
            }), {
                getPrefixCls: w
            } = g.useContext(h.ConfigContext), x = w(k || 'select', n);
            return g.useEffect(() => {
                if (v(!0), 'undefined' != typeof ResizeObserver) {
                    const y = new ResizeObserver(z => {
                            const A = z[0].target;
                            r(A.offsetHeight + 8), t(A.offsetWidth);
                        }),
                        z = setInterval(() => {
                            var A;
                            const B = l ? `.${ l(x) }` : `.${ x }-dropdown`,
                                C = null === (A = p.current) || void 0 === A ? void 0 : A.querySelector(B);
                            C && (clearInterval(z), y.observe(C));
                        }, 10);
                    return () => {
                        clearInterval(z), y.disconnect();
                    };
                }
            }, []), g.createElement(h.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, g.createElement('div', {
                ref: p,
                style: {
                    paddingBottom: q,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: s
                }
            }, g.createElement(j, Object.assign({}, m, {
                style: Object.assign(Object.assign({}, o), {
                    margin: 0
                }),
                open: u,
                visible: u,
                getPopupContainer: () => p.current
            }))));
        };
    }
}), c.register('.....', function(d, e) {
    a(d.exports, 'initMoveMotion', function() {
        return _o;
    });
    var f = c('.....'),
        g = c('.....');
    const h = new(0, f.Keyframes)('antMoveDownIn', {
            '0%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        i = new(0, f.Keyframes)('antMoveDownOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        j = new(0, f.Keyframes)('antMoveLeftIn', {
            '0%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        k = new(0, f.Keyframes)('antMoveLeftOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        l = new(0, f.Keyframes)('antMoveRightIn', {
            '0%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        m = new(0, f.Keyframes)('antMoveRightOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        n = {
            'move-up': {
                inKeyframes: new(0, f.Keyframes)('antMoveUpIn', {
                    '0%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    }
                }),
                outKeyframes: new(0, f.Keyframes)('antMoveUpOut', {
                    '0%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    },
                    '100%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    }
                })
            },
            'move-down': {
                inKeyframes: h,
                outKeyframes: i
            },
            'move-left': {
                inKeyframes: j,
                outKeyframes: k
            },
            'move-right': {
                inKeyframes: l,
                outKeyframes: m
            }
        },
        _o = (p, q) => {
            const {
                antCls: r
            } = p, s = `${ r }-${ q }`, {
                inKeyframes: t,
                outKeyframes: u
            } = n[q];
            return [
                (0, g.initMotion)(s, t, u, p.motionDurationMid),
                {
                    [`\n        ${ s }-enter,\n        ${ s }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: p.motionEaseOutCirc
                    },
                    [`${ s }-leave`]: {
                        animationTimingFunction: p.motionEaseInOutCirc
                    }
                }
            ];
        };
}), c.register('.....', function(d, e) {
    var f = c('.....'),
        g = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    d.exports = function(h, i) {
        var j, k, l, m, n, o, p = !1;
        i || (i = {}), j = i.debug || !1;
        try {
            if (l = f(), m = document.createRange(), n = document.getSelection(), (o = document.createElement('span')).textContent = h, o.ariaHidden = 'true', o.style.all = 'unset', o.style.position = 'fixed', o.style.top = 0, o.style.clip = 'rect(0, 0, 0, 0)', o.style.whiteSpace = 'pre', o.style.webkitUserSelect = 'text', o.style.MozUserSelect = 'text', o.style.msUserSelect = 'text', o.style.userSelect = 'text', o.addEventListener('copy', function(q) {
                    if (q.stopPropagation(), i.format)
                        if (q.preventDefault(), void 0 === q.clipboardData) {
                            j && console.warn('unable to use e.clipboardData'), j && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var r = g[i.format] || g.default;
                            window.clipboardData.setData(r, h);
                        } else
                            q.clipboardData.clearData(), q.clipboardData.setData(i.format, h);
                    i.onCopy && (q.preventDefault(), i.onCopy(q.clipboardData));
                }), document.body.appendChild(o), m.selectNodeContents(o), n.addRange(m), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            p = !0;
        } catch (f) {
            j && console.error('unable to copy using execCommand: ', f), j && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(i.format || 'text', h), i.onCopy && i.onCopy(window.clipboardData), p = !0;
            } catch (f) {
                j && console.error('unable to copy using clipboardData: ', f), j && console.error('falling back to prompt'), k = function(q) {
                    var r = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return q.replace(/#{\s*key\s*}/g, r);
                }('message' in i ? i.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(k, h);
            }
        } finally {
            n && ('function' == typeof n.removeRange ? n.removeRange(m) : n.removeAllRanges()), o && document.body.removeChild(o), l();
        }
        return p;
    };
}), c.register('.....', function(d, e) {
    d.exports = function() {
        var f = document.getSelection();
        if (!f.rangeCount)
            return function() {};
        for (var g = document.activeElement, h = [], i = 0; i < f.rangeCount; i++)
            h.push(f.getRangeAt(i));
        switch (g.tagName.toUpperCase()) {
            case 'INPUT':
            case 'TEXTAREA':
                g.blur();
                break;
            default:
                g = null;
        }
        return f.removeAllRanges(),
            function() {
                'Caret' === f.type && f.removeAllRanges(), f.rangeCount || h.forEach(function(j) {
                    f.addRange(j);
                }), g && g.focus();
            };
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        sideMargin: 50,
        optionWidth: 200
    };
}), c.register('.....', function(d, e) {
    var f = d.exports && d.exports.__createBinding || (Object.create ? function(g, h, i, j) {
            void 0 === j && (j = i), Object.defineProperty(g, j, {
                enumerable: !0,
                get: function() {
                    return h[i];
                }
            });
        } : function(g, h, i, j) {
            void 0 === j && (j = i), g[j] = h[i];
        }),
        g = d.exports && d.exports.__exportStar || function(h, i) {
            for (var j in h)
                'default' === j || Object.prototype.hasOwnProperty.call(i, j) || f(i, h, j);
        };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), g(c('.....'), d.exports), g(c('.....'), d.exports), g(c('.....'), d.exports);
}), c.register('.....', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useBreakpoints = d.exports.useBreakpoint = void 0;
    var f = c('.....');
    d.exports.useBreakpoint = function(g) {
        return (0, f.useWindowSize)().width < g;
    }, d.exports.useBreakpoints = function(g) {
        var h = (0, f.useWindowSize)().width;
        return g.map(function(i) {
            return h < i;
        });
    };
}), c.register('.....', function(d, e) {
    var f = d.exports && d.exports.__createBinding || (Object.create ? function(g, h, i, j) {
            void 0 === j && (j = i), Object.defineProperty(g, j, {
                enumerable: !0,
                get: function() {
                    return h[i];
                }
            });
        } : function(g, h, i, j) {
            void 0 === j && (j = i), g[j] = h[i];
        }),
        g = d.exports && d.exports.__setModuleDefault || (Object.create ? function(h, i) {
            Object.defineProperty(h, 'default', {
                enumerable: !0,
                value: i
            });
        } : function(h, i) {
            h.default = i;
        }),
        h = d.exports && d.exports.__importStar || function(i) {
            if (i && i.__esModule)
                return i;
            var j = {};
            if (null != i)
                for (var k in i)
                    'default' !== k && Object.prototype.hasOwnProperty.call(i, k) && f(j, i, k);
            return g(j, i), j;
        };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useWindowSize = void 0;
    var i = h(c('.....'));

    function j() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    d.exports.useWindowSize = function() {
        var k = i.useState(j()),
            l = k[0],
            m = k[1];
        return i.useLayoutEffect(function() {
            function n() {
                m(j());
            }
            return window.addEventListener('resize', n),
                function() {
                    return window.removeEventListener('resize', n);
                };
        }, []), l;
    };
}), c.register('.....', function(d, e) {
    var f = d.exports && d.exports.__assign || function() {
            return f = Object.assign || function(g) {
                for (var h, i = 1, j = arguments.length; i < j; i++)
                    for (var k in h = arguments[i])
                        Object.prototype.hasOwnProperty.call(h, k) && (g[k] = h[k]);
                return g;
            }, f.apply(this, arguments);
        },
        g = d.exports && d.exports.__createBinding || (Object.create ? function(h, i, j, k) {
            void 0 === k && (k = j), Object.defineProperty(h, k, {
                enumerable: !0,
                get: function() {
                    return i[j];
                }
            });
        } : function(h, i, j, k) {
            void 0 === k && (k = j), h[k] = i[j];
        }),
        h = d.exports && d.exports.__setModuleDefault || (Object.create ? function(i, j) {
            Object.defineProperty(i, 'default', {
                enumerable: !0,
                value: j
            });
        } : function(i, j) {
            i.default = j;
        }),
        i = d.exports && d.exports.__importStar || function(j) {
            if (j && j.__esModule)
                return j;
            var k = {};
            if (null != j)
                for (var l in j)
                    'default' !== l && Object.prototype.hasOwnProperty.call(j, l) && g(k, j, l);
            return h(k, j), k;
        };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useComponentSize = void 0;
    var j = i(c('.....'));
    d.exports.useComponentSize = function() {
        var k = j.useState({
                height: 0,
                width: 0
            }),
            l = k[0],
            m = k[1],
            n = j.useRef(),
            o = j.useCallback(function() {
                if (n.current) {
                    var p = n.current.offsetHeight,
                        q = n.current.offsetWidth;
                    p === l.height && q === l.width || m({
                        height: p,
                        width: q
                    });
                }
            }, [
                l.height,
                l.width
            ]);
        return j.useLayoutEffect(function() {
            if (n && n.current) {
                var p = new ResizeObserver(o);
                return p.observe(n.current),
                    function() {
                        return p.disconnect();
                    };
            }
        }, [
            n,
            o
        ]), f({
            ref: n
        }, l);
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        name: c('.....').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    const i = h.lazy(() => c('.....'));
    var _j = k => {
        const l = k.hideSkeleton ? (0, f.jsx)('div', {
            className: 'maxWidth'
        }) : (0, f.jsx)('div', {
            className: 'maxWidth',
            children: (0, f.jsx)(g.default, {
                active: !0,
                title: !1,
                paragraph: {
                    rows: 9
                }
            })
        });
        return (0, f.jsx)(h.Suspense, {
            fallback: l,
            children: (0, f.jsx)(i, {
                ...k
            })
        });
    };
}), c.register('.....', function(d, e) {
    d.exports = Promise.all([
        c('.....')(new URL(c('.....').resolve('2nG1U'), import.meta.url).toString()),
        import('./' + c('.....').resolve('6iUO5'))
    ]).then(() => c('.....'));
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'ClockCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: {
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z'
                    }
                }
            ]
        },
        name: 'clock-circle',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'TrophyOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z'
                }
            }]
        },
        name: 'trophy',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        normal: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 400;\n',
        bold: '\n    font-family: \'Product Sans\', sans-serif;\n    font-weight: 800;\n  ',
        black: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 900;\n',
        fontFamilyName: 'Product Sans, sans-serif'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'UsergroupAddOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z'
                }
            }]
        },
        name: 'usergroup-add',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'LogoutOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z'
                }
            }]
        },
        name: 'logout',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CheckOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
                }
            }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'
                }
            }]
        },
        name: 'down',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'CLASSIC', function() {
        return _f;
    }), a(d.exports, 'TEAMS', function() {
        return _g;
    }), a(d.exports, 'THANOS', function() {
        return _h;
    }), a(d.exports, 'BOSS_BATTLE', function() {
        return _i;
    }), a(d.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function() {
        return _j;
    }), a(d.exports, 'LAVA', function() {
        return _k;
    }), a(d.exports, 'IMPOSTER', function() {
        return _l;
    }), a(d.exports, 'DRAW', function() {
        return _m;
    }), a(d.exports, 'PARDY', function() {
        return _n;
    });
    const _f = 'CLASSIC',
        _g = 'TEAMS',
        _h = 'THANOS',
        _i = 'BOSS_BATTLE',
        _j = 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE',
        _k = 'LAVA',
        _l = 'IMPOSTER',
        _m = 'DRAW',
        _n = 'PARDY';
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = function(q) {
            (0, l.default)(d, q);
            var r = (0, m.default)(d);

            function s(t) {
                var u;
                (0, j.default)(this, s), (u = r.call(this, t)).handleChange = function(v) {
                    var w = u.props,
                        x = w.disabled,
                        y = w.onChange;
                    x || ('checked' in u.props || u.setState({
                        checked: v.target.checked
                    }), y && y({
                        target: (0, i.default)((0, i.default)({}, u.props), {}, {
                            checked: v.target.checked
                        }),
                        stopPropagation: function() {
                            v.stopPropagation();
                        },
                        preventDefault: function() {
                            v.preventDefault();
                        },
                        nativeEvent: v.nativeEvent
                    }));
                }, u.saveInput = function(v) {
                    u.input = v;
                };
                var v = 'checked' in t ? t.checked : t.defaultChecked;
                return u.state = {
                    checked: v
                }, u;
            }
            return (0, k.default)(s, [{
                    key: 'focus',
                    value: function() {
                        this.input.focus();
                    }
                },
                {
                    key: 'blur',
                    value: function() {
                        this.input.blur();
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var v, w = this.props,
                            x = w.prefixCls,
                            y = w.className,
                            z = w.style,
                            A = w.name,
                            B = w.id,
                            C = w.type,
                            D = w.disabled,
                            E = w.readOnly,
                            F = w.tabIndex,
                            G = w.onClick,
                            H = w.onFocus,
                            I = w.onBlur,
                            J = w.onKeyDown,
                            K = w.onKeyPress,
                            L = w.onKeyUp,
                            M = w.autoFocus,
                            N = w.value,
                            O = w.required,
                            P = (0, h.default)(w, [
                                'prefixCls',
                                'className',
                                'style',
                                'name',
                                'id',
                                'type',
                                'disabled',
                                'readOnly',
                                'tabIndex',
                                'onClick',
                                'onFocus',
                                'onBlur',
                                'onKeyDown',
                                'onKeyPress',
                                'onKeyUp',
                                'autoFocus',
                                'value',
                                'required'
                            ]),
                            Q = Object.keys(P).reduce(function(R, S) {
                                return 'aria-' !== S.substr(0, 5) && 'data-' !== S.substr(0, 5) && 'role' !== S || (R[S] = P[S]), R;
                            }, {}),
                            R = this.state.checked,
                            S = u(o)(x, y, (v = {}, (0, g.default)(v, ''.concat(x, '-checked'), R), (0, g.default)(v, ''.concat(x, '-disabled'), D), v));
                        return u(n).createElement('span', {
                            className: S,
                            style: z
                        }, u(n).createElement('input', (0, f.default)({
                            name: A,
                            id: B,
                            type: C,
                            required: O,
                            readOnly: E,
                            disabled: D,
                            tabIndex: F,
                            className: ''.concat(x, '-input'),
                            checked: !!R,
                            onClick: G,
                            onFocus: H,
                            onBlur: I,
                            onKeyUp: L,
                            onKeyDown: J,
                            onKeyPress: K,
                            onChange: this.handleChange,
                            autoFocus: M,
                            ref: this.saveInput,
                            value: N
                        }, Q)), u(n).createElement('span', {
                            className: ''.concat(x, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(v, w) {
                    return 'checked' in v ? (0, i.default)((0, i.default)({}, w), {}, {
                        checked: v.checked
                    }) : null;
                }
            }]), s;
        }(n.Component);
    p.defaultProps = {
        prefixCls: 'rc-checkbox',
        className: '',
        style: {},
        type: 'checkbox',
        defaultChecked: !1,
        onFocus: function() {},
        onBlur: function() {},
        onChange: function() {},
        onKeyDown: function() {},
        onKeyPress: function() {},
        onKeyUp: function() {}
    };
    var _q = p;
}), c.register('.....', function(d, e) {
    function f() {
        return f = Object.assign || function(g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        }, f.apply(this, arguments);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('.....', function(d, e) {
    function f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('.....');

    function _g(h, i) {
        if (null == h)
            return {};
        var j, k, l = (0, f.default)(h, i);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(h);
            for (k = 0; k < m.length; k++)
                j = m[k], i.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(h, j) && (_g[j] = h[j]);
        }
        return _g;
    }
}), c.register('.....', function(d, e) {
    function f(g, h) {
        if (null == g)
            return {};
        var i, j, k = {},
            l = Object.keys(g);
        for (f = 0; f < l.length; f++)
            i = l[f], h.indexOf(i) >= 0 || (k[i] = g[i]);
        return k;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....');

    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function(l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, k);
        }
        return j;
    }

    function _j(k) {
        for (var l = 1; l < arguments.length; l++) {
            var m = null != arguments[l] ? arguments[l] : {};
            l % 2 ? g(Object(m), !0).forEach(function(n) {
                (0, f.default)(k, n, m[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(m)) : g(Object(m)).forEach(function(n) {
                Object.defineProperty(k, n, Object.getOwnPropertyDescriptor(m, n));
            });
        }
        return k;
    }
}), c.register('.....', function(d, e) {
    function f(g, h) {
        if (!(g instanceof h))
            throw new TypeError('Cannot call a class as a function');
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('.....', function(d, e) {
    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(g, f.key, f);
        }
    }

    function i(j, k, l) {
        return k && f(j.prototype, k), l && f(j, l), j;
    }
    a(d.exports, 'default', function() {
        return i;
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('.....');

    function _g(h, i) {
        if ('function' != typeof i && null !== i)
            throw new TypeError('Super expression must either be null or a function');
        h.prototype = Object.create(i && i.prototype, {
            constructor: {
                value: h,
                writable: !0,
                configurable: !0
            }
        }), i && (0, f.default)(h, i);
    }
}), c.register('.....', function(d, e) {
    function f(g, h) {
        return f = Object.setPrototypeOf || function(i, j) {
            return i.__proto__ = j, i;
        }, f(g, h);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');

    function _i(j) {
        var k = (0, g.default)();
        return function() {
            var l, m = (0, f.default)(j);
            if (k) {
                var n = (0, f.default)(this).constructor;
                l = Reflect.construct(m, arguments, n);
            } else
                l = m.apply(this, arguments);
            return (0, h.default)(this, l);
        };
    }
}), c.register('.....', function(d, e) {
    function f(g) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(h) {
            return h.__proto__ || Object.getPrototypeOf(h);
        }, f(g);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('.....', function(d, e) {
    function f() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (a) {
            return !1;
        }
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');

    function _h(i, j) {
        if (j && ('object' === b(f)(j) || 'function' == typeof j))
            return j;
        if (void 0 !== j)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, g.default)(i);
    }
}), c.register('.....', function(d, e) {
    function f(g) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (d.exports = f = function(h) {
            return typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0) : (d.exports = f = function(h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0), f(g);
    }
    d.exports = f, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function(d, e) {
    function f(g) {
        if (void 0 === g)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return g;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....');
    const h = g.lazy(() => c('.....'));
    var _i = j => (0, f.jsx)(g.Suspense, {
        fallback: j.fallback || null,
        children: (0, f.jsx)(h, {
            latex: j.latex
        })
    });
}), c.register('.....', function(d, e) {
    d.exports = Promise.all([
        import('./' + c('.....').resolve('emcKB')),
        import('./' + c('.....').resolve('5OCdz'))
    ]).then(() => c('.....'));
}), c.register('.....', function(d, e) {
    let f;
    var g;
    a(d.exports, 'HookType', function() {
        return f;
    }), (g = f || (f = {})).selectBox = 'selectBox', g.kit = 'kit', g.number = 'number';
}), c.register('.....', function(d, e) {
    let f;
    var g;
    let h;
    var i;
    a(d.exports, 'LocalStorageNames', function() {
        return h;
    }), (g = f || (f = {})).time = 'time', g.target = 'target', g.race = 'race', g.allIn = 'allIn', (i = h || (h = {})).language = 'gimkit-3.0-game-language', i.currency = 'gimkit-game-currency', i.music = 'gimkit-music-track', i.allowGoogleTranslate = 'gimkit-google-translate-allowed', i.editorDefaultLanguage = 'gimkit-editor-v4-default-language', i.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', i.editorDefaultSubject = 'gimkit-editor-v4-default-subject', i.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', i.hookSavedOptions = 'gimkit-hook-saved-options';
}), c.register('.....', function(d, e) {
    a(d.exports, 'onlyOfferAnnualUpgrade', function() {
        return _f;
    });
    const _f = () => !1;
}), c.register('.....', function(d, e) {
    let f;
    var g;
    let h;
    var i;
    let j;
    var k;
    let l;
    let m;
    var n;
    a(d.exports, 'QuestionType', function() {
        return f;
    }), a(d.exports, 'Privacy', function() {
        return h;
    }), a(d.exports, 'GameStatus', function() {
        return j;
    }), a(d.exports, 'GameType', function() {
        return l;
    }), a(d.exports, 'GameGoal', function() {
        return m;
    }), a(d.exports, 'themes', function() {
        return _s;
    }), a(d.exports, 'ExperienceSource', function() {
        return _t;
    }), (g = f || (f = {})).multipleChoice = 'mc', g.textInput = 'text', (i = h || (h = {})).public = 'public', i.private = 'private', (k = j || (j = {})).setup = 'setup', k.join = 'join', k.teams = 'teams', k.gameplay = 'gameplay', k.results = 'results', (l || (l = {})).live = 'live', (n = m || (m = {})).time = 'time', n.race = 'race', n.allIn = 'allIn';
    const o = '#ffffff',
        p = '#000000';
    let q;
    var r;
    (r = q || (q = {})).easy = 'easy', r.medium = 'medium', r.hard = 'hard', r.veryHard = 'veryHard', r.veryVeryHard = 'veryVeryHard';
    const _s = [{
            cost: 0,
            name: 'Default',
            description: 'Works fine, that\'s all',
            question: {
                background: '#303f9f',
                text: o
            },
            palette: [{
                    background: '#771322',
                    text: o
                },
                {
                    background: '#A85C15',
                    text: o
                },
                {
                    background: '#0D6B33',
                    text: o
                },
                {
                    background: '#076296',
                    text: o
                }
            ],
            owned: !0,
            isActive: !0
        },
        {
            cost: 5,
            name: 'Thanksgiving',
            description: 'The perfect theme to show your thanks',
            question: {
                background: '#6C2F00',
                text: o
            },
            palette: [{
                    background: '#9E682A',
                    text: o
                },
                {
                    background: '#B54730',
                    text: o
                },
                {
                    background: '#8A9748',
                    text: o
                },
                {
                    background: '#F1B930',
                    text: o
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 10,
            name: 'Night',
            description: 'A little easier on the eyes',
            question: {
                background: '#000a12',
                text: o
            },
            palette: [{
                    background: '#263238',
                    text: o
                },
                {
                    background: '#37474f',
                    text: o
                },
                {
                    background: '#455a64',
                    text: o
                },
                {
                    background: '#546e7a',
                    text: o
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 500000,
            name: 'Thanos',
            description: 'Perfectly balanced, as all things should be',
            question: {
                background: '#0D0019',
                text: o
            },
            palette: [{
                    background: '#220044',
                    text: o
                },
                {
                    background: '#330066',
                    text: o
                },
                {
                    background: '#3E007C',
                    text: o
                },
                {
                    background: '#4F1787',
                    text: o
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 2000,
            name: 'Ocean',
            description: 'Under the sea...',
            question: {
                background: '#000063',
                text: o
            },
            palette: [{
                    background: '#283593',
                    text: o
                },
                {
                    background: '#076296',
                    text: o
                },
                {
                    background: '#0277bd',
                    text: o
                },
                {
                    background: '#1565c0',
                    text: o
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 100000,
            name: 'Forest',
            description: 'A walk through the woods',
            question: {
                background: '#4c3d33',
                text: o
            },
            palette: [{
                    background: '#385645',
                    text: o
                },
                {
                    background: '#425C49',
                    text: o
                },
                {
                    background: '#415641',
                    text: o
                },
                {
                    background: '#4C6349',
                    text: o
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 1250,
            name: 'Sunset',
            description: 'Take a breather',
            question: {
                background: '#7F7496',
                text: o
            },
            palette: [{
                    background: '#F46F5A',
                    text: o
                },
                {
                    background: '#ED712D',
                    text: o
                },
                {
                    background: '#7A596A',
                    text: o
                },
                {
                    background: '#E8AB3C',
                    text: o
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 750,
            name: 'Pastel',
            description: 'Lighten the mood',
            question: {
                background: '#FFbfd1',
                text: '#434343'
            },
            palette: [{
                    background: '#FFA69E',
                    text: '#5b5b5b'
                },
                {
                    background: '#FCF6BF',
                    text: '#5b5b5b'
                },
                {
                    background: '#D0F4DE',
                    text: '#5b5b5b'
                },
                {
                    background: '#93E1D8',
                    text: '#5b5b5b'
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 500,
            name: 'Retro',
            description: 'Old school...',
            question: {
                background: '#9C0022',
                text: o
            },
            palette: [{
                    background: '#001D3B',
                    text: o
                },
                {
                    background: '#FFAE52',
                    text: o
                },
                {
                    background: '#FE5963',
                    text: o
                },
                {
                    background: '#A71C94',
                    text: o
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 100000000,
            name: 'Pure Gold',
            description: 'Now you\'re just showing off',
            question: {
                background: p,
                text: '#FFCD2B'
            },
            palette: [{
                    background: '#FFCD2B',
                    text: p
                },
                {
                    background: '#FFC721',
                    text: p
                },
                {
                    background: '#FFD147',
                    text: p
                },
                {
                    background: '#FFCD38',
                    text: p
                }
            ],
            owned: !1,
            isActive: !1
        }
    ];
    let _t;
    var u;
    (u = _t || (_t = {})).original = 'original', u.map = 'map';
}), c.register('.....', function(d, e) {
    let f;
    var g;
    a(d.exports, 'MapModeType', function() {
        return f;
    }), (g = f || (f = {})).liveGame = 'liveGame', g.assignment = 'assignment';
}), c.register('.....', function(d, e) {
    a(d.exports, 'AnalyticsTrackEvent', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    const _j = k => {
        var l, m, n;
        if ((window.gtag && !(null === (l = k.blockedSource) || void 0 === l ? void 0 : l.google) && window.gtag('event', k.event, k.properties), h.AnalyticsFlags.educatorOnly) && (null === (n = (0, g.getUser)()) || void 0 === n ? void 0 : n.accountType) !== f.default.educator)
            return;
        (null === (m = k.blockedSource) || void 0 === m ? void 0 : m.posthog) || (0, i.TrackPostHogEvent)({
            event: k.event,
            properties: k.properties,
            force: k.forcePostHog
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'TrackPostHogEvent', function() {
        return _f;
    });
    c('.....');
    const _f = g => {};
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    var _i = (j, k) => {
        const [l, m] = f.useState(() => {
            var n, o;
            const p = j && 'current' in j ? j.current : j;
            return p ? [
                p.offsetWidth,
                p.offsetHeight
            ] : [
                null !== (n = null == k ? void 0 : k.initialWidth) && void 0 !== n ? n : 0,
                null !== (o = null == k ? void 0 : k.initialHeight) && void 0 !== o ? o : 0
            ];
        });
        return (0, h.default)(() => {
            const n = j && 'current' in j ? j.current : j;
            n && m([
                n.offsetWidth,
                n.offsetHeight
            ]);
        }, [j]), (0, g.default)(j, n => {
            const o = n.target;
            m([
                o.offsetWidth,
                o.offsetHeight
            ]);
        }), l;
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    let j;
    const k = () => j || (j = function() {
        const l = new Map(),
            m = new(0, f.default)((0, i.default)((n, o) => {
                var p;
                if (1 === n.length)
                    null === (p = l.get(n[0].target)) || void 0 === p || p(n[0], o);
                else
                    for (let q = 0; q < n.length; q++) {
                        var r;
                        null === (r = l.get(n[q].target)) || void 0 === r || r(n[q], o);
                    }
            }));
        return {
            observer: m,
            subscribe(n, o) {
                m.observe(n), l.set(n, o);
            },
            unsubscribe(n) {
                m.unobserve(n), l.delete(n);
            }
        };
    }());
    var _l = function(m, n) {
        const o = k(),
            p = (0, h.default)(n);
        return (0, g.default)(() => {
            let q = !1;
            const r = m && 'current' in m ? m.current : m;
            if (r)
                return o.subscribe(r, (s, t) => {
                    q || p.current(s, t);
                }), () => {
                    q = !0, o.unsubscribe(r);
                };
        }, [
            m,
            o,
            p
        ]), o.observer;
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = function(g) {
        var h = [],
            i = null,
            j = function() {
                for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++)
                    l[m] = arguments[m];
                h = l, i || (i = requestAnimationFrame(function() {
                    i = null, g.apply(void 0, h);
                }));
            };
        return j.cancel = function() {
            i && (cancelAnimationFrame(i), i = null);
        }, j;
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _r;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    c('.....');
    var i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = 44;

    function m(n) {
        var o, p, q;
        return o = n, p = 0, q = 1, n = (Math.min(Math.max(p, o), q) - p) / (q - p), n = (n -= 1) * n * n + 1;
    }
    var q = h.forwardRef(function(r, s) {
            var t, u = r.classes,
                v = r.className,
                w = r.color,
                x = void 0 === w ? 'primary' : w,
                y = r.disableShrink,
                z = void 0 !== y && y,
                A = r.size,
                B = void 0 === A ? 40 : A,
                C = r.style,
                D = r.thickness,
                E = void 0 === D ? 3.6 : D,
                F = r.value,
                G = void 0 === F ? 0 : F,
                H = r.variant,
                I = void 0 === H ? 'indeterminate' : H,
                J = (0, g.default)(r, [
                    'classes',
                    'className',
                    'color',
                    'disableShrink',
                    'size',
                    'style',
                    'thickness',
                    'value',
                    'variant'
                ]),
                K = {},
                L = {},
                M = {};
            if ('determinate' === I || 'static' === I) {
                var N = 2 * Math.PI * ((l - E) / 2);
                K.strokeDasharray = N.toFixed(3), M['aria-valuenow'] = Math.round(G), 'static' === I ? (K.strokeDashoffset = ''.concat(((100 - G) / 100 * N).toFixed(3), 'px'), L.transform = 'rotate(-90deg)') : (K.strokeDashoffset = ''.concat((t = (100 - G) / 100, t * t * N).toFixed(3), 'px'), L.transform = 'rotate('.concat((270 * m(G / 70)).toFixed(3), 'deg)'));
            }
            return h.createElement('div', (0, f.default)({
                className: (0, i.default)(u.root, v, 'inherit' !== x && u['color'.concat((0, k.default)(x))], {
                    indeterminate: u.indeterminate,
                    static: u.static
                } [I]),
                style: (0, f.default)({
                    width: B,
                    height: B
                }, L, C),
                ref: s,
                role: 'progressbar'
            }, M, J), h.createElement('svg', {
                className: u.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(l, ' ').concat(l)
            }, h.createElement('circle', {
                className: (0, i.default)(u.circle, z && u.circleDisableShrink, {
                    indeterminate: u.circleIndeterminate,
                    static: u.circleStatic
                } [I]),
                style: K,
                cx: l,
                cy: l,
                r: (l - E) / 2,
                fill: 'none',
                strokeWidth: E
            })));
        }),
        _r = (0, j.default)(function(s) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: s.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: s.palette.primary.main
                },
                colorSecondary: {
                    color: s.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: s.transitions.create('stroke-dashoffset')
                },
                circleIndeterminate: {
                    animation: '$circular-dash 1.4s ease-in-out infinite',
                    strokeDasharray: '80px, 200px',
                    strokeDashoffset: '0px'
                },
                '@keyframes circular-rotate': {
                    '0%': {
                        transformOrigin: '50% 50%'
                    },
                    '100%': {
                        transform: 'rotate(360deg)'
                    }
                },
                '@keyframes circular-dash': {
                    '0%': {
                        strokeDasharray: '1px, 200px',
                        strokeDashoffset: '0px'
                    },
                    '50%': {
                        strokeDasharray: '100px, 200px',
                        strokeDashoffset: '-15px'
                    },
                    '100%': {
                        strokeDasharray: '100px, 200px',
                        strokeDashoffset: '-125px'
                    }
                },
                circleDisableShrink: {
                    animation: 'none'
                }
            };
        }, {
            name: 'MuiCircularProgress',
            flip: !1
        })(q);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    var _j = k => {
        const [l, m] = g.useState([]), [n] = g.useState(k.limit), [o, p] = g.useState(k.defaultPage), [q, r] = g.useState(!0), [s, t] = g.useState([]), [u, v] = g.useState(!1), w = g.useMemo(() => (k.modifyItems ? k.modifyItems(s) : s).map((x, y) => k.toRender(x, y)), [
            s.length,
            k.toRender
        ]), x = () => {
            if (l.includes(o))
                return;
            m(y => [
                ...y,
                o
            ]);
            const y = {
                page: o,
                limit: n
            };
            (0, i.request)({
                url: k.url,
                method: 'post',
                cacheKey: k.cacheKey,
                data: k.modifyBody ? k.modifyBody(y) : y,
                success: (z, A) => {
                    k.onTotalItems && !u && (k.onTotalItems(z.totalItems), v(!0)), z.items.forEach(B => {
                        k.onItemFetched && k.onItemFetched(B, A);
                    }), t(B => [
                        ...B,
                        ...z.items
                    ]), r(z.hasNextPage), p(z.nextPage);
                },
                error: () => {
                    k.onTotalItems && !u && (k.onTotalItems(0), v(!0)), r(!1);
                },
                both: () => m(z => z.filter(A => A !== y.page))
            });
        };
        return g.useEffect(x, []), !q && k.forceEmptyMessage || !q && 0 === s.length && k.emptyMessage ? k.emptyMessage(s) : (0, f.jsxs)(h.default, {
            dataLength: s.length,
            hasMore: q,
            style: k.scrollStyle,
            next: x,
            loader: k.loader || (0, f.jsx)('div', {}),
            scrollThreshold: k.scrollThreshold,
            endMessage: k.endMessage ? k.endMessage(s) : null,
            scrollableTarget: k.scrollableTarget,
            children: [
                k.prefix ? k.prefix() : null,
                w
            ]
        });
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('.....'),
        g = function(h, i) {
            return g = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(j, k) {
                j.__proto__ = k;
            } || function(j, k) {
                for (var l in k)
                    k.hasOwnProperty(l) && (j[l] = k[l]);
            }, g(h, i);
        };
    var h = function() {
        return h = Object.assign || function(i) {
            for (var j, k = 1, l = arguments.length; k < l; k++)
                for (var m in j = arguments[k])
                    Object.prototype.hasOwnProperty.call(j, m) && (i[m] = j[m]);
            return i;
        }, h.apply(this, arguments);
    };
    var i = 'Pixel',
        j = 'Percent',
        k = {
            unit: j,
            value: 0.8
        };

    function l(m) {
        return 'number' == typeof m ? {
            unit: j,
            value: 100 * m
        } : 'string' == typeof m ? m.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: i,
            value: parseFloat(m)
        } : m.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: j,
            value: parseFloat(m)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), k) : (console.warn('scrollThreshold should be string or number'), k);
    }
    var m = function(n) {
            function o(p) {
                var q = n.call(this, p) || this;
                return o.lastScrollTop = 0, o.actionTriggered = !1, o.startY = 0, o.currentY = 0, o.dragging = !1, o.maxPullDownDistance = 0, o.getScrollableTarget = function() {
                    return o.props.scrollableTarget instanceof HTMLElement ? o.props.scrollableTarget : 'string' == typeof o.props.scrollableTarget ? document.getElementById(o.props.scrollableTarget) : (null === o.props.scrollableTarget && console.warn('You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '), null);
                }, o.onStart = function(r) {
                    o.lastScrollTop || (o.dragging = !0, r instanceof MouseEvent ? o.startY = r.pageY : r instanceof TouchEvent && (o.startY = r.touches[0].pageY), o.currentY = o.startY, o._infScroll && (o._infScroll.style.willChange = 'transform', o._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'));
                }, o.onMove = function(r) {
                    o.dragging && (r instanceof MouseEvent ? o.currentY = r.pageY : r instanceof TouchEvent && (o.currentY = r.touches[0].pageY), o.currentY < o.startY || (o.currentY - o.startY >= Number(o.props.pullDownToRefreshThreshold) && o.setState({
                        pullToRefreshThresholdBreached: !0
                    }), o.currentY - o.startY > 1.5 * o.maxPullDownDistance || o._infScroll && (o._infScroll.style.overflow = 'visible', o._infScroll.style.transform = 'translate3d(0px, ' + (o.currentY - o.startY) + 'px, 0px)')));
                }, o.onEnd = function() {
                    o.startY = 0, o.currentY = 0, o.dragging = !1, o.state.pullToRefreshThresholdBreached && (o.props.refreshFunction && o.props.refreshFunction(), o.setState({
                        pullToRefreshThresholdBreached: !1
                    })), requestAnimationFrame(function() {
                        o._infScroll && (o._infScroll.style.overflow = 'auto', o._infScroll.style.transform = 'none', o._infScroll.style.willChange = 'none');
                    });
                }, o.onScrollListener = function(r) {
                    'function' == typeof o.props.onScroll && setTimeout(function() {
                        return o.props.onScroll && o.props.onScroll(r);
                    }, 0);
                    var s = o.props.height || o._scrollableNode ? r.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    o.actionTriggered || ((o.props.inverse ? o.isElementAtTop(s, o.props.scrollThreshold) : o.isElementAtBottom(s, o.props.scrollThreshold)) && o.props.hasMore && (o.actionTriggered = !0, o.setState({
                        showLoader: !0
                    }), o.props.next && o.props.next()), o.lastScrollTop = s.scrollTop);
                }, o.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, o.throttledOnScrollListener = function(r, s, t, u) {
                    var v, w = !1,
                        x = 0;

                    function y() {
                        v && clearTimeout(v);
                    }

                    function z() {
                        var A = this,
                            B = Date.now() - x,
                            C = arguments;

                        function D() {
                            x = Date.now(), t.apply(z, C);
                        }

                        function E() {
                            v = void 0;
                        }
                        w || (u && !v && D(), y(), void 0 === u && B > r ? D() : !0 !== s && (v = setTimeout(u ? E : D, void 0 === u ? r - B : r)));
                    }
                    return 'boolean' != typeof s && (u = t, t = s, s = void 0), z.cancel = function() {
                        y(), w = !0;
                    }, z;
                }(150, o.onScrollListener).bind(o), o.onStart = o.onStart.bind(o), o.onMove = o.onMove.bind(o), o.onEnd = o.onEnd.bind(o), o;
            }
            return function(q, r) {
                function s() {
                    this.constructor = q;
                }
                g(q, r), q.prototype = null === r ? Object.create(r) : (s.prototype = r.prototype, new s());
            }(o, n), o.prototype.componentDidMount = function() {
                if (void 0 === this.props.dataLength)
                    throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener('scroll', this.throttledOnScrollListener), 'number' == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener('touchstart', this.onStart), this.el.addEventListener('touchmove', this.onMove), this.el.addEventListener('touchend', this.onEnd), this.el.addEventListener('mousedown', this.onStart), this.el.addEventListener('mousemove', this.onMove), this.el.addEventListener('mouseup', this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), 'function' != typeof this.props.refreshFunction))
                    throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'');
            }, o.prototype.componentWillUnmount = function() {
                this.el && (this.el.removeEventListener('scroll', this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener('touchstart', this.onStart), this.el.removeEventListener('touchmove', this.onMove), this.el.removeEventListener('touchend', this.onEnd), this.el.removeEventListener('mousedown', this.onStart), this.el.removeEventListener('mousemove', this.onMove), this.el.removeEventListener('mouseup', this.onEnd)));
            }, o.prototype.UNSAFE_componentWillReceiveProps = function(q) {
                this.props.dataLength !== q.dataLength && (this.actionTriggered = !1, this.setState({
                    showLoader: !1
                }));
            }, o.prototype.isElementAtTop = function(q, r) {
                void 0 === r && (r = 0.8);
                var s = q === document.body || q === document.documentElement ? window.screen.availHeight : q.clientHeight,
                    t = l(r);
                return t.unit === i ? q.scrollTop <= t.value + s - q.scrollHeight + 1 || 0 === q.scrollTop : q.scrollTop <= t.value / 100 + s - q.scrollHeight + 1 || 0 === q.scrollTop;
            }, o.prototype.isElementAtBottom = function(q, r) {
                void 0 === r && (r = 0.8);
                var s = q === document.body || q === document.documentElement ? window.screen.availHeight : q.clientHeight,
                    t = l(r);
                return t.unit === i ? q.scrollTop + s >= q.scrollHeight - t.value : q.scrollTop + s >= t.value / 100 * q.scrollHeight;
            }, o.prototype.render = function() {
                var q = this,
                    r = h({
                        height: this.props.height || 'auto',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch'
                    }, this.props.style),
                    s = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                    t = this.props.pullDownToRefresh && this.props.height ? {
                        overflow: 'auto'
                    } : {};
                return b(f).createElement('div', {
                    style: t,
                    className: 'infinite-scroll-component__outerdiv'
                }, b(f).createElement('div', {
                    className: 'infinite-scroll-component ' + (this.props.className || ''),
                    ref: function(u) {
                        return q._infScroll = u;
                    },
                    style: r
                }, this.props.pullDownToRefresh && b(f).createElement('div', {
                    style: {
                        position: 'relative'
                    },
                    ref: function(u) {
                        return q._pullDown = u;
                    }
                }, b(f).createElement('div', {
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !s && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage));
            }, o;
        }(f.Component),
        _n = m;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....');
    let i;
    var _j = k => (0, f.jsx)(_k, {
        onClick: k.onClick,
        className: k.className,
        style: k.style,
        children: k.children
    });
    const _k = g.default.div(i || (i = (l => l)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), h.default.White);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'EnterOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'enter',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('.....');

    function _g() {
        const [, h] = f.useReducer(i => i + 1, 0);
        return h;
    }
}), c.register('.....', function(d, e) {
    a(d.exports, 'responsiveArray', function() {
        return _h;
    }), a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....');
    const _h = [
        'xxl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs'
    ];

    function _i() {
        const [, j] = (0, g.useToken)(), k = (l => ({
            xs: `(max-width: ${ l.screenXSMax }px)`,
            sm: `(min-width: ${ l.screenSM }px)`,
            md: `(min-width: ${ l.screenMD }px)`,
            lg: `(min-width: ${ l.screenLG }px)`,
            xl: `(min-width: ${ l.screenXL }px)`,
            xxl: `(min-width: ${ l.screenXXL }px)`
        }))((l => {
            const m = l,
                n = [].concat(_h).reverse();
            return n.forEach((o, p) => {
                const q = o.toUpperCase(),
                    r = `screen${ q }Min`,
                    s = `screen${ q }`;
                if (!(m[r] <= m[s]))
                    throw new Error(`${ r }<=${ s } fails : !(${ m[r] }<=${ m[s] })`);
                if (p < n.length - 1) {
                    const t = `screen${ q }Max`;
                    if (!(m[s] <= m[t]))
                        throw new Error(`${ s }<=${ t } fails : !(${ m[s] }<=${ m[t] })`);
                    const u = `screen${ n[p + 1].toUpperCase() }Min`;
                    if (!(m[t] <= m[u]))
                        throw new Error(`${ t }<=${ u } fails : !(${ m[t] }<=${ m[u] })`);
                }
            }), l;
        })(j));
        return b(f).useMemo(() => {
            const l = new Map();
            let m = -1,
                n = {};
            return {
                matchHandlers: {},
                dispatch: o => (n = o, l.forEach(p => p(n)), l.size >= 1),
                subscribe(o) {
                    return l.size || this.register(), m += 1, l.set(m, o), o(n), m;
                },
                unsubscribe(o) {
                    l.delete(o), l.size || this.unregister();
                },
                unregister() {
                    Object.keys(k).forEach(o => {
                        const p = k[o],
                            q = this.matchHandlers[p];
                        null == q || q.mql.removeListener(null == q ? void 0 : q.listener);
                    }), l.clear();
                },
                register() {
                    Object.keys(k).forEach(o => {
                        const p = k[o],
                            q = r => {
                                let {
                                    matches: s
                                } = r;
                                this.dispatch(Object.assign(Object.assign({}, n), {
                                    [o]: s
                                }));
                            },
                            r = window.matchMedia(p);
                        r.addListener(q), this.matchHandlers[p] = {
                            mql: r,
                            listener: q
                        }, q(r);
                    });
                },
                responsiveMap: k
            };
        }, [j]);
    }
}), c.register('.....', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.lazyWithPreload = void 0;
    var f = c('.....');

    function g(h) {
        var i, j, k = (0, f.lazy)(h),
            l = (0, f.forwardRef)(function(m, n) {
                var o = (0, f.useRef)(null != i ? i : g);
                return (0, f.createElement)(o.current, Object.assign(n ? {
                    ref: n
                } : {}, m));
            });
        return l.preload = function() {
            return j || (j = h().then(function(m) {
                return i = m.default;
            })), j;
        }, l;
    }
    d.exports.lazyWithPreload = g, d.exports.default = g;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'QuestionCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: {
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z'
                    }
                }
            ]
        },
        name: 'question-circle',
        theme: 'outlined'
    };
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....');
    const h = f.default;
    h.Group = g.default, h.__ANT_CHECKBOX = !0;
    var _i = h;
}), c.register('.....', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    }, function(f) {
        return _p = f;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = function(o, p) {
            var q = {};
            for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && p.indexOf(r) < 0 && (q[r] = o[r]);
            if (null != o && 'function' == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (r = Object.getOwnPropertySymbols(o); s < r.length; s++)
                    p.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(o, r[s]) && (q[r[s]] = o[r[s]]);
            }
            return q;
        };
    const o = (p, q) => {
        var r, {
                prefixCls: s,
                className: t,
                rootClassName: u,
                children: v,
                indeterminate: w = !1,
                style: x,
                onMouseEnter: y,
                onMouseLeave: z,
                skipGroup: A = !1,
                disabled: B
            } = p,
            C = n(p, [
                'prefixCls',
                'className',
                'rootClassName',
                'children',
                'indeterminate',
                'style',
                'onMouseEnter',
                'onMouseLeave',
                'skipGroup',
                'disabled'
            ]);
        const {
            getPrefixCls: D,
            direction: E
        } = h.useContext(i.ConfigContext), F = h.useContext(k.GroupContext), {
            isFormItemInput: G
        } = h.useContext(j.FormItemInputContext), H = h.useContext(l.default), I = null !== (r = (null == F ? void 0 : F.disabled) || B) && void 0 !== r ? r : H, J = h.useRef(C.value);
        h.useEffect(() => {
            null == F || F.registerValue(C.value);
        }, []), h.useEffect(() => {
            if (!A)
                return C.value !== J.current && (null == F || F.cancelValue(J.current), null == F || F.registerValue(C.value), J.current = C.value), () => null == F ? void 0 : F.cancelValue(C.value);
        }, [C.value]);
        const K = D('checkbox', s),
            [L, M] = (0, m.default)(K),
            N = Object.assign({}, C);
        F && !A && (N.onChange = function() {
            C.onChange && C.onChange.apply(C, arguments), F.toggleOption && F.toggleOption({
                label: v,
                value: C.value
            });
        }, N.name = F.name, N.checked = F.value.includes(C.value));
        const O = b(f)({
                [`${ K }-wrapper`]: !0,
                [`${ K }-rtl`]: 'rtl' === E,
                [`${ K }-wrapper-checked`]: N.checked,
                [`${ K }-wrapper-disabled`]: I,
                [`${ K }-wrapper-in-form-item`]: G
            }, t, u, M),
            P = b(f)({
                [`${ K }-indeterminate`]: w
            }, M),
            Q = w ? 'mixed' : void 0;
        return L(h.createElement('label', {
            className: O,
            style: x,
            onMouseEnter: y,
            onMouseLeave: z
        }, h.createElement(g.default, Object.assign({
            'aria-checked': Q
        }, N, {
            prefixCls: K,
            className: P,
            disabled: I,
            ref: q
        })), void 0 !== v && h.createElement('span', null, v)));
    };
    var _p = h.forwardRef(o);
}), c.register('.....', function(d, e) {
    a(d.exports, 'GroupContext', function() {
        return _n;
    }, function(f) {
        return _n = f;
    }), a(d.exports, 'default', function() {
        return _q;
    }, function(f) {
        return _q = f;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = function(n, o) {
            var p = {};
            for (var q in n)
                Object.prototype.hasOwnProperty.call(n, q) && o.indexOf(q) < 0 && (p[q] = n[q]);
            if (null != n && 'function' == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (q = Object.getOwnPropertySymbols(n); r < q.length; r++)
                    o.indexOf(q[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, q[r]) && (p[q[r]] = n[q[r]]);
            }
            return p;
        };
    const _n = i.createContext(null),
        o = (p, q) => {
            var {
                defaultValue: r,
                children: s,
                options: t = [],
                prefixCls: u,
                className: v,
                rootClassName: w,
                style: x,
                onChange: y
            } = p, z = m(p, [
                'defaultValue',
                'children',
                'options',
                'prefixCls',
                'className',
                'rootClassName',
                'style',
                'onChange'
            ]);
            const {
                getPrefixCls: A,
                direction: B
            } = i.useContext(j.ConfigContext), [C, D] = i.useState(z.value || r || []), [E, F] = i.useState([]);
            i.useEffect(() => {
                'value' in z && D(z.value || []);
            }, [z.value]);
            const G = () => t.map(H => 'string' == typeof H || 'number' == typeof H ? {
                    label: H,
                    value: H
                } : H),
                H = A('checkbox', u),
                I = `${ H }-group`,
                [J, K] = (0, l.default)(H),
                L = (0, h.default)(z, [
                    'value',
                    'disabled'
                ]);
            t && t.length > 0 && (s = G().map(M => i.createElement(k.default, {
                prefixCls: H,
                key: M.value.toString(),
                disabled: 'disabled' in M ? M.disabled : z.disabled,
                value: M.value,
                checked: C.includes(M.value),
                onChange: M.onChange,
                className: `${ I }-item`,
                style: M.style
            }, M.label)));
            const M = {
                    toggleOption: N => {
                        const O = C.indexOf(N.value),
                            P = (0, f.default)(C); -
                        1 === O ? P.push(N.value) : P.splice(O, 1), 'value' in z || D(P);
                        const Q = G();
                        null == y || y(P.filter(R => E.includes(R)).sort((R, S) => Q.findIndex(T => T.value === R) - Q.findIndex(T => T.value === S)));
                    },
                    value: C,
                    disabled: z.disabled,
                    name: z.name,
                    registerValue: N => {
                        F(O => [].concat((0, f.default)(O), [N]));
                    },
                    cancelValue: N => {
                        F(O => O.filter(P => P !== N));
                    }
                },
                N = b(g)(I, {
                    [`${ I }-rtl`]: 'rtl' === B
                }, v, w, K);
            return J(i.createElement('div', Object.assign({
                className: N,
                style: x
            }, L, {
                ref: q
            }), i.createElement(_n.Provider, {
                value: M
            }, s)));
        },
        p = i.forwardRef(o);
    var _q = i.memo(p);
}), c.register('.....', function(d, e) {
    a(d.exports, 'getStyle', function() {
        return _l;
    }), a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    const j = new(0, f.Keyframes)('antCheckboxEffect', {
            '0%': {
                transform: 'scale(1)',
                opacity: 0.5
            },
            '100%': {
                transform: 'scale(1.6)',
                opacity: 0
            }
        }),
        k = l => {
            const {
                checkboxCls: m
            } = l, n = `${ m }-wrapper`;
            return [{
                    [`${ m }-group`]: Object.assign(Object.assign({}, (0, i.resetComponent)(l)), {
                        display: 'inline-flex'
                    }),
                    [n]: Object.assign(Object.assign({}, (0, i.resetComponent)(l)), {
                        display: 'inline-flex',
                        alignItems: 'baseline',
                        cursor: 'pointer',
                        '&:after': {
                            display: 'inline-block',
                            width: 0,
                            overflow: 'hidden',
                            content: '\'\\a0\''
                        },
                        [`& + ${ n }`]: {
                            marginInlineStart: l.marginXS
                        },
                        [`&${ n }-in-form-item`]: {
                            'input[type="checkbox"]': {
                                width: 14,
                                height: 14
                            }
                        }
                    }),
                    [m]: Object.assign(Object.assign({}, (0, i.resetComponent)(l)), {
                        top: '0.2em',
                        position: 'relative',
                        whiteSpace: 'nowrap',
                        lineHeight: 1,
                        cursor: 'pointer',
                        [`${ m }-input`]: {
                            position: 'absolute',
                            inset: 0,
                            zIndex: 1,
                            width: '100%',
                            height: '100%',
                            cursor: 'pointer',
                            opacity: 0,
                            [`&:focus-visible + ${ m }-inner`]: Object.assign({}, (0, i.genFocusOutline)(l))
                        },
                        [`${ m }-inner`]: {
                            boxSizing: 'border-box',
                            position: 'relative',
                            top: 0,
                            insetInlineStart: 0,
                            display: 'block',
                            width: l.checkboxSize,
                            height: l.checkboxSize,
                            direction: 'ltr',
                            backgroundColor: l.colorBgContainer,
                            border: `${ l.lineWidth }px ${ l.lineType } ${ l.colorBorder }`,
                            borderRadius: l.borderRadiusSM,
                            borderCollapse: 'separate',
                            transition: `all ${ l.motionDurationSlow }`,
                            '&:after': {
                                boxSizing: 'border-box',
                                position: 'absolute',
                                top: '50%',
                                insetInlineStart: '21.5%',
                                display: 'table',
                                width: l.checkboxSize / 14 * 5,
                                height: l.checkboxSize / 14 * 8,
                                border: `${ l.lineWidthBold }px solid ${ l.colorWhite }`,
                                borderTop: 0,
                                borderInlineStart: 0,
                                transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                                opacity: 0,
                                content: '""',
                                transition: `all ${ l.motionDurationFast } ${ l.motionEaseInBack }, opacity ${ l.motionDurationFast }`
                            }
                        },
                        '& + span': {
                            paddingInlineStart: l.paddingXS,
                            paddingInlineEnd: l.paddingXS
                        }
                    })
                },
                {
                    [m]: {
                        '&-indeterminate': {
                            [`${ m }-inner`]: {
                                '&:after': {
                                    top: '50%',
                                    insetInlineStart: '50%',
                                    width: l.fontSizeLG / 2,
                                    height: l.fontSizeLG / 2,
                                    backgroundColor: l.colorPrimary,
                                    border: 0,
                                    transform: 'translate(-50%, -50%) scale(1)',
                                    opacity: 1,
                                    content: '""'
                                }
                            }
                        }
                    }
                },
                {
                    [`${ n }:hover ${ m }:after`]: {
                        visibility: 'visible'
                    },
                    [`\n        ${ n }:not(${ n }-disabled),\n        ${ m }:not(${ m }-disabled)\n      `]: {
                        [`&:hover ${ m }-inner`]: {
                            borderColor: l.colorPrimary
                        }
                    },
                    [`${ n }:not(${ n }-disabled)`]: {
                        [`&:hover ${ m }-checked:not(${ m }-disabled) ${ m }-inner`]: {
                            backgroundColor: l.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ m }-checked:not(${ m }-disabled):after`]: {
                            borderColor: l.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ m }-checked`]: {
                        [`${ m }-inner`]: {
                            backgroundColor: l.colorPrimary,
                            borderColor: l.colorPrimary,
                            '&:after': {
                                opacity: 1,
                                transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                                transition: `all ${ l.motionDurationMid } ${ l.motionEaseOutBack } ${ l.motionDurationFast }`
                            }
                        },
                        '&:after': {
                            position: 'absolute',
                            top: 0,
                            insetInlineStart: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: l.borderRadiusSM,
                            visibility: 'hidden',
                            border: `${ l.lineWidthBold }px solid ${ l.colorPrimary }`,
                            animationName: j,
                            animationDuration: l.motionDurationSlow,
                            animationTimingFunction: 'ease-in-out',
                            animationFillMode: 'backwards',
                            content: '""',
                            transition: `all ${ l.motionDurationSlow }`
                        }
                    },
                    [`\n        ${ n }-checked:not(${ n }-disabled),\n        ${ m }-checked:not(${ m }-disabled)\n      `]: {
                        [`&:hover ${ m }-inner`]: {
                            backgroundColor: l.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ m }:after`]: {
                            borderColor: l.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ n }-disabled`]: {
                        cursor: 'not-allowed'
                    },
                    [`${ m }-disabled`]: {
                        [`&, ${ m }-input`]: {
                            cursor: 'not-allowed',
                            pointerEvents: 'none'
                        },
                        [`${ m }-inner`]: {
                            background: l.colorBgContainerDisabled,
                            borderColor: l.colorBorder,
                            '&:after': {
                                borderColor: l.colorTextDisabled
                            }
                        },
                        '&:after': {
                            display: 'none'
                        },
                        '& + span': {
                            color: l.colorTextDisabled
                        },
                        [`&${ m }-indeterminate ${ m }-inner::after`]: {
                            background: l.colorTextDisabled
                        }
                    }
                }
            ];
        };

    function _l(m, n) {
        const o = (0, h.merge)(n, {
            checkboxCls: `.${ m }`,
            checkboxSize: n.controlInteractiveSize
        });
        return [k(o)];
    }
    var _n = (0, g.default)('Checkbox', (o, p) => {
        let {
            prefixCls: q
        } = p;
        return [_l(q, o)];
    });
});