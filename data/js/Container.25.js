function a(a, b, c, L) {
    Object.defineProperty(a, b, {
        get: c,
        set: L,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('jymCQ', function(b, L) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return j;
    });
    var e = c('8kSQZ');
    c('uPP4W');
    var f = c('Vlfxs'),
        g = c('NgrHi'),
        h = c('U6pqh'),
        i = c('Efyfk');
    var j = () => (0, e.jsx)(i.default.Provider, {
        value: g.default,
        children: (0, e.jsx)(f.Provider, {
            ...g.default,
            children: (0, e.jsx)(h.default, {})
        })
    });
}), c.register('NgrHi', function(b, L) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('2n/bI'),
        e = c('llXb0');
    var f = {
        navigation: new(0, d.default)(),
        kits: new(0, e.default)()
    };
}), c.register('2n/bI', function(b, L) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('6gioo'),
        e = c('UnUp5');
    class f {
        constructor() {
            this.archiveModalShow = !1, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], f.prototype, 'archiveModalShow', void 0);
    var g = h;
}), c.register('llXb0', function(b, L) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('6gioo'),
        e = c('UnUp5');
    class f {
        constructor() {
            this.kitAttemptedAction = 'open', (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], f.prototype, 'kitAttemptedAction', void 0);
    var g = h;
}), c.register('U6pqh', function(b, L) {
    a(b.exports, 'default', function() {
        return H;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('lmfrI'),
        h = c('K+Amk'),
        i = c('gSUVO'),
        j = c('PjB0f'),
        k = c('tWHf2'),
        l = c('FZpPT'),
        m = c('VsZIM'),
        n = c('FYnQ/'),
        o = c('5nKLo'),
        p = c('idY0Q'),
        q = c('TO+cq'),
        r = c('1//3g'),
        s = c('C891a'),
        t = c('EKzax2'),
        u = c('dN+BG24'),
        v = c('q721a'),
        w = c('iMnBi'),
        x = c('oHiD0'),
        y = c('LhAcK'),
        z = c('QNMlx24');
    let A, B, C, D = a => a;
    const E = f.default.div.attrs({
            className: 'maxAll flex-column'
        })(A || (A = D``)),
        F = f.default.div(B || (B = D`
  flex: 1;
  display: flex;
  font-family: ${ 0 };
`), i.Fonts.SFPro),
        G = f.default.div.attrs({
            id: 'mainContainer',
            className: 'flex-column'
        })(C || (C = D`
  height: 100%;
  background: ${ 0 };
`), g.default.Snow);
    var H = () => {
        const [I, J, K] = (0, j.useBoolean)(!1), [L, M] = e.useState(!1), [N, O] = e.useState(!1), P = e.useRef(null), Q = (0, z.useMediaMatch)('(max-width: 680px)'), R = (0, j.getUser)();
        if (!R)
            return null;
        const S = (() => {
            const T = [];
            return (0, j.isStudent)() && T.push({
                id: 'home',
                label: 'Home',
                icon: (0, d.jsx)(w.default, {
                    name: 'fas fa-home'
                }),
                path: v.HOME,
                otherMatchingPaths: [v.DASHBOARD]
            }), T.push({
                id: 'kits',
                label: 'Kits',
                icon: (0, d.jsx)(w.default, {
                    name: 'fas fa-box-open'
                }),
                path: v.KITS,
                otherMatchingPaths: (0, x.IsEducator)() ? [
                    v.DASHBOARD,
                    v.KITS_SELECTION
                ] : [v.KITS_SELECTION]
            }), (0, j.isStudent)() || T.push({
                id: 'reports',
                label: 'Reports',
                icon: (0, d.jsx)(w.default, {
                    name: 'fas fa-analytics'
                }),
                path: v.REPORTS
            }, {
                id: 'assignments',
                label: 'Assignments',
                path: v.ASSIGNMENTS,
                icon: (0, d.jsx)(w.default, {
                    name: 'fas fa-file-alt'
                })
            }, {
                id: 'classes',
                label: 'Classes',
                path: v.CLASSES,
                icon: (0, d.jsx)(w.default, {
                    name: 'fas fa-users-class'
                })
            }), (0, j.isStudent)() && T.push({
                id: 'join-game',
                label: 'Join Game',
                path: v.JOIN,
                target: '_blank',
                icon: (0, d.jsx)(w.default, {
                    name: 'fas fa-gamepad'
                })
            }), T;
        })();
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(r.default, {
                    alpha: u.SiteHeaderAlpha.none,
                    children: (0, d.jsx)(t.default, {
                        options: S,
                        rightSideContent: Q ? null : (0, d.jsx)(y.default, {})
                    })
                }),
                (0, d.jsxs)(E, {
                    children: [
                        (0, d.jsxs)(F, {
                            className: 'disable-scrollbars',
                            children: [
                                (0, d.jsx)(j.Title, {
                                    title: 'Dashboard'
                                }),
                                (0, d.jsxs)(G, {
                                    style: {
                                        flex: 1
                                    },
                                    ref: P,
                                    children: [
                                        (0, d.jsx)(s.default, {}),
                                        (0, d.jsx)(h.default, {})
                                    ]
                                }),
                                (0, d.jsx)(k.default, {})
                            ]
                        }),
                        (0, d.jsx)(l.default, {
                            openUpgradeModal: I => {
                                M(null != I && I), J();
                            }
                        })
                    ]
                }),
                (0, d.jsx)(n.default, {
                    upgradeModalVisible: I,
                    proUpsellModalVisible: N
                }),
                (0, d.jsx)(o.default, {}),
                (0, d.jsx)(m.default, {
                    id: L ? 'dashboard-auto' : 'dashboard',
                    visible: I,
                    close: K,
                    showModes: !0
                }),
                R.type === q.PlanIds.proPass ? (0, d.jsx)(p.default, {
                    onVisibleChange: O
                }) : null
            ]
        });
    };
}), c.register('K+Amk', function(b, w) {
    a(b.exports, 'default', function() {
        return u;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('4AgMW'),
        g = c('9+7u2'),
        h = c('h99Nu'),
        i = c('lmfrI'),
        j = c('YUx3/'),
        k = c('bdnvC'),
        l = c('0R8EW'),
        m = c('KzqIz'),
        n = c('q721a'),
        o = c('PjB0f'),
        p = c('0UqiX');
    let q;
    const r = h.default.div.attrs({
        className: 'flex-column'
    })(q || (q = (a => a)`
  color: ${ 0 };
  flex: 1;
`), i.default.Black);
    let s;
    var t;
    (t = s || (s = {})).kits = 'kits', t.reports = 'reports', t.assignments = 'assignments', t.classes = 'classes', t.hub = 'hub';
    var u = () => {
        const {
            pathname: v
        } = (0, m.useLocation)(), w = e.useMemo(() => v ? (0, l.matchPath)({
            path: n.REPORTS
        }, v) ? s.reports : (0, l.matchPath)({
            path: n.ASSIGNMENTS
        }, v) ? s.assignments : (0, l.matchPath)({
            path: n.CLASSES
        }, v) ? s.classes : (0, l.matchPath)({
            path: n.HOME
        }, v) ? s.hub : (0, l.matchPath)({
            path: n.KITS
        }, v) || (0, l.matchPath)({
            path: n.KITS_SELECTION
        }, v) ? s.kits : (0, o.isStudent)() ? s.hub : s.kits : s.kits, [v]), x = e.useMemo(() => {
            switch (w) {
                case s.reports:
                    return (0, d.jsx)(p.DashboardReports, {});
                case s.assignments:
                    return (0, d.jsx)(g.default, {});
                case s.classes:
                    return (0, d.jsx)(j.default, {});
                case s.hub:
                    return (0, d.jsx)(k.default, {});
                default:
                    return (0, d.jsx)(f.default, {});
            }
        }, [w]);
        return (0, d.jsx)(r, {
            children: x
        });
    };
}), c.register('4AgMW', function(b, w) {
    a(b.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('ibalz'),
        g = c('BZxk+'),
        h = c('BXJqG'),
        i = c('q721a'),
        j = c('PjB0f'),
        k = c('k0s2g17'),
        l = c('Y0KLM'),
        m = c('dVxNw'),
        n = c('1PHI/'),
        o = c('qmTad'),
        p = c('0R8EW'),
        q = c('oHiD0');
    const r = e.lazy(() => c('hRL1+'));
    var s = () => {
        var t, u, v, w, x;
        const {
            data: y,
            isLoading: z
        } = (0, n.default)(), {
            id: A
        } = (0, p.useParams)(), B = (0, q.IsEducator)() && (null === (t = (0, j.getUser)()) || void 0 === t ? void 0 : t.schoolId) && 'school' === A;
        var C;
        const D = null !== (C = null === (u = null == y || null === (v = y.folders) || void 0 === v ? void 0 : v.find(t => t._id === A)) || void 0 === u ? void 0 : u._id) && void 0 !== C ? C : '';
        if (z)
            return null;
        const E = () => {
                var F;
                return (null == y || null === (F = y.games) || void 0 === F ? void 0 : F.length) ? (0, d.jsx)(f.default, {
                    kits: null == y ? void 0 : y.games,
                    folders: null == y ? void 0 : y.folders,
                    selectedFolder: D
                }) : (0, d.jsx)(h.default, {
                    image: 'kit',
                    title: 'Kits',
                    description: (0, j.isStudent)() ? 'Kits contain multiple choice questions. Create a kit and study it with any of our game modes!' : 'Kits are live learning games for your class. They include all the content your students will learn in a game.',
                    button: 'New Kit',
                    onClick: () => (0, k.NavigateTo)(i.KIT_CREATOR)
                });
            },
            F = (null == y ? void 0 : y.folders.length) || (null === (w = (0, j.getUser)()) || void 0 === w ? void 0 : w.schoolId);
        return F || (null == y || null === (x = y.games) || void 0 === x ? void 0 : x.length) ? (0, d.jsx)(m.default, {
            header: (0, d.jsx)('div', {
                className: 'maxWidth',
                children: (0, d.jsx)(g.default, {
                    title: 'Kits',
                    customUnderTitleComponent: F ? (0, d.jsx)('div', {
                        style: {
                            marginTop: 13
                        },
                        children: (0, d.jsx)(o.default, {
                            schoolLibraryScreenOpen: B,
                            openSchoolLibraryScreen: () => {
                                (0, k.NavigateTo)('/kits/school');
                            },
                            folders: null !== (G = null == y ? void 0 : y.folders) && void 0 !== G ? G : [],
                            selectedFolder: D
                        })
                    }) : null,
                    buttonIcon: (0, d.jsx)(l.default, {}),
                    buttonLink: i.KIT_CREATOR,
                    buttonText: 'New Kit'
                })
            }),
            children: (0, d.jsx)(e.Suspense, {
                fallback: null,
                children: B ? (0, d.jsx)(r, {}) : E()
            })
        }) : E();
        var G;
    };
}), c.register('ibalz', function(b, l) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('54CO/'),
        f = c('cBb/w'),
        g = c('iMnBi'),
        h = c('PjB0f');
    var i = a => {
        var j;
        const k = [],
            l = [],
            m = null === (j = a.folders) || void 0 === j ? void 0 : j.find(j => j._id === a.selectedFolder);
        a.kits.forEach(j => {
            if (a.selectedFolder) {
                if (!m)
                    return;
                if (!m.games.includes(j._id))
                    return;
            }
            j.isArchived ? l.push(j) : k.push(j);
        });
        const n = [
            ...k,
            ...l
        ];
        var o;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(h.Title, {
                    title: null !== (o = null == m ? void 0 : m.title) && void 0 !== o ? o : 'Kits'
                }),
                !n.length && a.selectedFolder ? (0, d.jsxs)('div', {
                    className: 'maxAll flex-center flex-column',
                    children: [
                        (0, d.jsx)('div', {
                            style: {
                                fontSize: 62
                            },
                            children: (0, d.jsx)(g.default, {
                                name: 'fas fa-folder-open'
                            })
                        }),
                        (0, d.jsx)('div', {
                            style: {
                                fontSize: 16
                            },
                            children: 'There are no kits in this folder.'
                        })
                    ]
                }) : (0, d.jsx)(d.Fragment, {
                    children: (0, d.jsx)(f.default, {
                        duration: 400,
                        children: n.map(j => (0, d.jsx)('div', {
                            children: (0, d.jsx)(e.default, {
                                game: j,
                                folderId: a.selectedFolder
                            })
                        }, 'dashboard-kit-' + j._id))
                    })
                })
            ]
        });
    };
}), c.register('54CO/', function(ib, jb) {
    a(ib.exports, 'IMAGE_SIZE', function() {
        return Y;
    }), a(ib.exports, 'Content', function() {
        return Z;
    }), a(ib.exports, 'LeftSide', function() {
        return $;
    }), a(ib.exports, 'KitInfo', function() {
        return _;
    }), a(ib.exports, 'KitTitle', function() {
        return ab;
    }), a(ib.exports, 'KitDescription', function() {
        return cb;
    }), a(ib.exports, 'default', function() {
        return gb;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('SHiyt7'),
        g = c('4jOgw8'),
        h = c('Ynp9Z7'),
        i = c('j/N3t'),
        j = c('GnnOG1'),
        k = c('bZPNK'),
        l = c('2mOKd'),
        m = c('avBUI3'),
        n = c('2Hg8W4'),
        o = c('IsmrL'),
        p = c('f9f+a'),
        q = c('M1Vx4'),
        r = c('u3X1v'),
        s = c('cR5QE'),
        t = c('JQ8A18'),
        u = c('h99Nu'),
        v = c('lmfrI'),
        w = c('gSUVO'),
        x = c('Vlfxs'),
        y = c('PjB0f'),
        z = c('q721a'),
        A = c('qLhB38'),
        B = c('uZVdU'),
        C = c('wPd42'),
        D = c('Efyfk'),
        E = c('VsZIM'),
        F = c('ExPmN'),
        G = c('k0s2g17'),
        H = c('2MCaL'),
        I = c('1PHI/'),
        J = c('y2Sw9'),
        K = c('GFgjD'),
        L = c('DksGO1'),
        M = c('EzxpY'),
        N = c('oHiD0');
    let O, P, Q, R, S, T, U, V, W, X = a => a;
    const Y = 80,
        Z = u.default.div(O || (O = X`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`)),
        $ = u.default.div(P || (P = X`
  display: flex;
  align-items: center;
  width: calc(100% - 182px);
`)),
        _ = u.default.div(Q || (Q = X`
  margin-right: 20px;
  flex: 1;
  margin-left: 12px;
  overflow: hidden;
  max-width: 100%;
`)),
        ab = u.default.div(R || (R = X`
  font-weight: ${ 0 };
  font-size: 23px;
  max-width: 100%;
  display: flex;
  align-items: center;
`), w.FontWeights.Bold),
        bb = u.default.div(S || (S = X`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`)),
        cb = u.default.div(T || (T = X`
  opacity: 0.7;
  font-size: 15;
  margin-top: -7px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`)),
        db = u.default.div(U || (U = X`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`)),
        eb = u.default.div(V || (V = X`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`)),
        fb = u.default.div(W || (W = X`
  display: flex;
  align-items: center;
  justify-content: center;
`));
    var gb = (0, x.observer)(a => {
        const {
            kits: hb,
            navigation: ib
        } = e.useContext(D.default), [jb, kb, lb] = (0, y.useBoolean)(!1), [mb, nb, ob] = (0, y.useBoolean)(!1), [pb, qb] = e.useState(C.IExperiencePickerMode.liveGame), [rb, sb] = e.useState(null), {
            game: tb
        } = ub, vb = e.useMemo(() => tb.createdAt ? `Created ${ b(H)(tb.createdAt).fromNow() }` : '', [
            tb.editCount,
            tb.updatedAt,
            tb.createdAt
        ]), wb = e.useCallback(ub => !!tb.isArchived && (hb.kitAttemptedAction = ub, ib.archiveModalShow = !0, !0), [tb.isArchived]), xb = () => {
            wb('open') || (0, G.NavigateTo)(`/view/${ tb._id }`);
        }, yb = () => {
            wb('edit') || (0, G.NavigateTo)(z.KIT_CREATOR + `/${ tb._id }/editor`);
        }, zb = () => {
            wb('copy') || (!(0, N.IsEducator)() || (0, y.isUpgraded)() ? (0, y.copyKit)({
                kitId: tb._id,
                onSuccess: () => {
                    (0, I.invalidateKits)(), (0, G.NavigateTo)(z.KITS);
                },
                onFailure: () => (0, K.throwError)({
                    title: 'Error copying kit'
                })
            }) : sb({
                id: 'self-copy',
                ...L.UpgradeModal_CopyKit
            }));
        }, Ab = () => {
            wb('make changes to') || (!(0, N.IsEducator)() || (0, y.isUpgraded)() ? kb() : sb({
                id: 'folders',
                ...M.UpgradeModal_Folders
            }));
        }, Bb = ub => {
            (0, y.request)({
                url: '/api/games/archived',
                data: {
                    id: tb._id,
                    archived: ub
                },
                success: () => (0, I.invalidateKits)()
            });
        }, Cb = () => Bb(!0), Db = () => Bb(!1), Eb = () => {
            (0, y.request)({
                url: '/api/folders/removeGame',
                method: 'post',
                data: {
                    gameId: tb._id,
                    folderId: ub.folderId
                },
                success: () => {
                    (0, I.invalidateKits)();
                },
                error: ub => {
                    (0, y.throwMessageError)({
                        e: ub,
                        default: {
                            title: 'There was an error removing this Kit from this folder.'
                        }
                    });
                }
            });
        }, Fb = () => {
            s.default.confirm({
                title: 'Are you sure you want to delete this kit?',
                cancelText: 'No',
                okText: 'Yes',
                onOk: () => {
                    (0, y.request)({
                        url: '/api/games/delete',
                        data: {
                            id: tb._id
                        },
                        success: () => {
                            (0, I.invalidateKits)();
                        },
                        error: ub => (0, y.throwMessageError)({
                            e: ub,
                            default: {
                                title: 'There was an error deleting this kit'
                            }
                        })
                    });
                }
            });
        };
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)('div', {
                    children: (0, d.jsx)(p.default, {
                        hoverable: !0,
                        style: {
                            width: '100%',
                            color: v.default.Black,
                            marginBottom: 12,
                            overflow: 'hidden'
                        },
                        children: (0, d.jsxs)(Z, {
                            children: [
                                (0, d.jsxs)($, {
                                    onClick: xb,
                                    children: [
                                        (0, d.jsx)('div', {
                                            children: (0, d.jsx)(A.default, {
                                                image: tb.gif,
                                                size: Y,
                                                blockModalOpen: !0,
                                                onClick: xb
                                            })
                                        }),
                                        (0, d.jsxs)(_, {
                                            children: [
                                                (0, d.jsxs)(ab, {
                                                    children: [
                                                        (0, d.jsx)(bb, {
                                                            children: tb.title
                                                        }),
                                                        tb.isArchived && (0, d.jsx)(t.default, {
                                                            style: {
                                                                marginLeft: 5
                                                            },
                                                            children: 'Archived'
                                                        })
                                                    ]
                                                }),
                                                (0, d.jsx)(cb, {
                                                    children: vb
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, d.jsxs)(db, {
                                    children: [
                                        (0, d.jsxs)(eb, {
                                            children: [
                                                (0, d.jsx)(o.default, {
                                                    size: 'large',
                                                    type: 'primary',
                                                    icon: (0, d.jsx)(n.default, {}),
                                                    style: {
                                                        width: 140,
                                                        backgroundColor: '#2e7d32',
                                                        borderColor: '#2e7d32'
                                                    },
                                                    onClick: () => {
                                                        wb('play') || (qb(C.IExperiencePickerMode.liveGame), nb());
                                                    },
                                                    children: 'Play Live'
                                                }),
                                                !(0, y.isStudent)() && (0, d.jsx)(o.default, {
                                                    size: 'large',
                                                    type: 'primary',
                                                    icon: (0, d.jsx)(m.default, {}),
                                                    style: {
                                                        marginTop: 5,
                                                        width: 140,
                                                        backgroundColor: '#3849aa',
                                                        borderColor: '#3849aa'
                                                    },
                                                    onClick: () => {
                                                        wb('assign') || (qb(C.IExperiencePickerMode.assignment), nb());
                                                    },
                                                    children: 'Assign HW'
                                                })
                                            ]
                                        }),
                                        (0, d.jsx)(fb, {
                                            children: (0, d.jsx)(q.default, {
                                                overlay: (() => {
                                                    const {
                                                        isArchived: Gb
                                                    } = Hb;
                                                    return (0, d.jsxs)(r.default, {
                                                        children: [
                                                            (0, d.jsxs)(r.default.Item, {
                                                                onClick: xb,
                                                                children: [
                                                                    (0, d.jsx)(l.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    'Open'
                                                                ]
                                                            }, 'open'),
                                                            (0, d.jsxs)(r.default.Item, {
                                                                onClick: yb,
                                                                children: [
                                                                    (0, d.jsx)(h.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    'Edit'
                                                                ]
                                                            }, 'edit'),
                                                            (0, d.jsxs)(r.default.Item, {
                                                                onClick: zb,
                                                                children: [
                                                                    (0, d.jsx)(f.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    'Copy'
                                                                ]
                                                            }, 'copy'),
                                                            ub.folderId ? null : (0, d.jsxs)(r.default.Item, {
                                                                onClick: Ab,
                                                                children: [
                                                                    (0, d.jsx)(k.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    'Add to Folder'
                                                                ]
                                                            }, 'folder'),
                                                            ub.folderId ? (0, d.jsxs)(r.default.Item, {
                                                                onClick: Eb,
                                                                children: [
                                                                    (0, d.jsx)(k.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    'Remove from Folder'
                                                                ]
                                                            }, 'folder') : null,
                                                            Gb ? (0, d.jsxs)(r.default.Item, {
                                                                onClick: Fb,
                                                                children: [
                                                                    (0, d.jsx)(g.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    'Delete'
                                                                ]
                                                            }, 'delete') : null,
                                                            (0, d.jsxs)(r.default.Item, {
                                                                onClick: Gb ? Db : Cb,
                                                                children: [
                                                                    (0, d.jsx)(j.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    Gb ? 'Unarchive' : 'Archive'
                                                                ]
                                                            }, 'archive')
                                                        ]
                                                    });
                                                })(),
                                                mouseLeaveDelay: 0.4,
                                                children: (0, d.jsx)(o.default, {
                                                    shape: 'circle',
                                                    size: 'middle',
                                                    children: (0, d.jsx)(i.default, {})
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                (0, d.jsx)(J.default, {
                    open: jb,
                    close: lb,
                    kitId: tb._id
                }),
                mb ? pb !== C.IExperiencePickerMode.assignment || (0, y.isUpgraded)() ? (0, d.jsx)(B.default, {
                    gameId: tb._id,
                    close: ob,
                    mode: pb
                }) : (0, d.jsx)(E.default, {
                    id: 'assignment creation',
                    visible: mb,
                    close: ob,
                    copy: {
                        title: F.ASSIGNMENT_UPSELL_TITLE,
                        description: F.ASSIGNMENT_UPSELL_DESCRIPTION
                    }
                }) : null,
                rb ? (0, d.jsx)(E.default, {
                    id: rb.id,
                    visible: !0,
                    close: () => sb(null),
                    copy: {
                        title: rb.title,
                        description: rb.description
                    }
                }) : null
            ]
        });
    });
}), c.register('SHiyt7', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('Gxa0x7'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'CopyOutlined';
    var i = e.forwardRef(h);
}), c.register('Gxa0x7', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('4jOgw8', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('4LDCB8'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'DeleteOutlined';
    var i = e.forwardRef(h);
}), c.register('4LDCB8', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('Ynp9Z7', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('6bYDI7'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'EditOutlined';
    var i = e.forwardRef(h);
}), c.register('6bYDI7', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('GnnOG1', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('aRBoD1'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'FilterOutlined';
    var i = e.forwardRef(h);
}), c.register('aRBoD1', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('2mOKd', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('+W5iJ'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'FullscreenOutlined';
    var i = e.forwardRef(h);
}), c.register('+W5iJ', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('avBUI3', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('oImfG3'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'PaperClipOutlined';
    var i = e.forwardRef(h);
}), c.register('oImfG3', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('2Hg8W4', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('Yt9re4'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'PlayCircleOutlined';
    var i = e.forwardRef(h);
}), c.register('Yt9re4', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('JQ8A18', function(n, o) {
    a(n.exports, 'default', function() {
        return s;
    }, function(a) {
        return s = a;
    });
    var d = c('obWo+'),
        e = c('VAIs1'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('HVIEA'),
        i = c('PYjVb'),
        j = c('13lgq8'),
        k = c('RdtDA8'),
        l = function(a, b) {
            var m = {};
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && b.indexOf(n) < 0 && (m[n] = a[n]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(a); o < n.length; o++)
                    b.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (m[n[o]] = a[n[o]]);
            }
            return m;
        };
    const m = (a, c) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: p,
                style: q,
                children: r,
                icon: s,
                color: t,
                onClose: u,
                closeIcon: v,
                closable: w = !1
            } = x, y = l(x, [
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
                getPrefixCls: z,
                direction: A
            } = f.useContext(g.ConfigContext), [B, C] = f.useState(!0);
            f.useEffect(() => {
                'visible' in y && C(y.visible);
            }, [y.visible]);
            const D = (0, h.isPresetColor)(t) || (0, h.isPresetStatusColor)(t),
                E = Object.assign({
                    backgroundColor: t && !D ? t : void 0
                }, q),
                F = z('tag', n),
                [G, H] = (0, k.default)(F),
                I = b(e)(F, {
                    [`${ F }-${ t }`]: D,
                    [`${ F }-has-color`]: t && !D,
                    [`${ F }-hidden`]: !B,
                    [`${ F }-rtl`]: 'rtl' === A
                }, o, p, H),
                J = x => {
                    x.stopPropagation(), null == u || u(x), x.defaultPrevented || C(!1);
                },
                K = 'function' == typeof y.onClick || r && 'a' === r.type,
                L = s || null,
                M = L ? f.createElement(f.Fragment, null, L, f.createElement('span', null, r)) : r,
                N = f.createElement('span', Object.assign({}, y, {
                    ref: c,
                    className: I,
                    style: E
                }), M, w ? v ? f.createElement('span', {
                    className: `${ F }-close-icon`,
                    onClick: J
                }, v) : f.createElement(d.default, {
                    className: `${ F }-close-icon`,
                    onClick: J
                }) : null);
            return G(K ? f.createElement(i.default, null, N) : N);
        },
        n = f.forwardRef(m);
    n.CheckableTag = j.default;
    var o = p;
}), c.register('13lgq8', function(j, k) {
    a(j.exports, 'default', function() {
        return i;
    }, function(a) {
        return i = a;
    });
    var d = c('VAIs1'),
        e = c('uPP4W'),
        f = c('qEw51'),
        g = c('RdtDA8'),
        h = function(a, b) {
            var i = {};
            for (var j in a)
                Object.prototype.hasOwnProperty.call(a, j) && b.indexOf(j) < 0 && (i[j] = a[j]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var k = 0;
                for (j = Object.getOwnPropertySymbols(a); k < j.length; k++)
                    b.indexOf(j[k]) < 0 && Object.prototype.propertyIsEnumerable.call(a, j[k]) && (i[j[k]] = a[j[k]]);
            }
            return i;
        };
    var i = a => {
        var {
            prefixCls: j,
            className: k,
            checked: l,
            onChange: m,
            onClick: n
        } = o, p = h(o, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: q
        } = e.useContext(f.ConfigContext), r = q('tag', j), [s, t] = (0, g.default)(r), u = b(d)(r, {
            [`${ r }-checkable`]: !0,
            [`${ r }-checkable-checked`]: l
        }, k, t);
        return s(e.createElement('span', Object.assign({}, p, {
            className: u,
            onClick: o => {
                null == m || m(!l), null == n || n(o);
            }
        })));
    };
}), c.register('RdtDA8', function(b, j) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('vvwoA'),
        e = c('jnIuq'),
        f = c('hTZV68'),
        g = c('JkiNt'),
        h = c('P38j/');
    const i = (a, b, c) => {
            const j = (0, f.default)(c);
            return {
                [`${ a.componentCls }-${ b }`]: {
                    color: a[`color${ c }`],
                    background: a[`color${ j }Bg`],
                    borderColor: a[`color${ j }Border`]
                }
            };
        },
        j = a => (0, g.genPresetColor)(a, (b, c) => {
            let {
                textColor: k,
                lightBorderColor: l,
                lightColor: m,
                darkColor: n
            } = o;
            return {
                [`${ a.componentCls }-${ b }`]: {
                    color: k,
                    background: m,
                    borderColor: l,
                    '&-inverse': {
                        color: a.colorTextLightSolid,
                        background: n,
                        borderColor: n
                    }
                }
            };
        }),
        k = a => {
            const {
                paddingXXS: l,
                lineWidth: m,
                tagPaddingHorizontal: n,
                componentCls: o
            } = p, q = n - m, r = l - m;
            return {
                [o]: Object.assign(Object.assign({}, (0, h.resetComponent)(p)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: p.marginXS,
                    paddingInline: q,
                    fontSize: p.tagFontSize,
                    lineHeight: `${ p.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: p.tagDefaultBg,
                    border: `${ p.lineWidth }px ${ p.lineType } ${ p.colorBorder }`,
                    borderRadius: p.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ p.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ o }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: p.tagDefaultColor
                    },
                    [`${ o }-close-icon`]: {
                        marginInlineStart: r,
                        color: p.colorTextDescription,
                        fontSize: p.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ p.motionDurationMid }`,
                        '&:hover': {
                            color: p.colorTextHeading
                        }
                    },
                    [`&${ o }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ p.iconCls }-close, ${ p.iconCls }-close:hover`]: {
                            color: p.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ o }-checkable-checked):hover`]: {
                            color: p.colorPrimary,
                            backgroundColor: p.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: p.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: p.colorPrimary,
                            '&:hover': {
                                backgroundColor: p.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: p.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ p.iconCls } + span, > span + ${ p.iconCls }`]: {
                        marginInlineStart: q
                    }
                })
            };
        };
    var l = (0, d.default)('Tag', a => {
        const {
            fontSize: m,
            lineHeight: n,
            lineWidth: o,
            fontSizeIcon: p
        } = q, r = Math.round(m * n), s = q.fontSizeSM, t = r - 2 * o, u = q.colorFillAlter, v = q.colorText, w = (0, e.merge)(q, {
            tagFontSize: s,
            tagLineHeight: t,
            tagDefaultBg: u,
            tagDefaultColor: v,
            tagIconSize: p - 2 * o,
            tagPaddingHorizontal: 8
        });
        return [
            k(w),
            j(w),
            i(w, 'success', 'Success'),
            i(w, 'processing', 'Info'),
            i(w, 'error', 'Error'),
            i(w, 'warning', 'Warning')
        ];
    });
}), c.register('hTZV68', function(b, c) {
    function d(a) {
        if ('string' != typeof a)
            return a;
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('qLhB38', function(b, d) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('cR5QE'),
        h = c('lmfrI'),
        i = c('2WDH6');
    let j;
    const k = f.default.img.attrs(a => ({
        src: a.image
    }))(j || (j = (a => a)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), a => a.size, a => a.size, a => a.customRightMargin ? a.customRightMargin : 0, a => a.showBorder && `border: solid ${ h.default.Black } 1px;`);
    var l = a => {
        const [m, n] = e.useState(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(k, {
                    ...a,
                    onClick: m => {
                        m.stopPropagation(), a.onClick && a.onClick(), a.blockModalOpen || n(!0);
                    }
                }),
                (0, d.jsx)(g.default, {
                    open: m,
                    onCancel: a => {
                        a.stopPropagation(), n(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, d.jsx)('img', {
                        src: (0, i.getCloudinaryUrl)(a.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), c.register('2WDH6', function(b, c) {
    a(b.exports, 'getCloudinaryUrl', function() {
        return d;
    });
    const d = a => {
            const e = e(a);
            return e ? a.includes('/video/upload') ? `https://${ f }/video/upload/${ e }` : `https://${ f }/image/upload/f_auto,fl_lossy,q_auto/${ e }` : a;
        },
        e = a => {
            if (!i.some(b => a.includes(b)))
                return null;
            if (a.includes(g) && !a.includes(`/${ h }/`))
                return null;
            const f = a.split('/');
            if (!f || !f.length || f.length < 2)
                return null;
            const g = f[f.length - 2],
                h = f[f.length - 1];
            return g && h && g.startsWith('v') ? `${ g }/${ h }` : null;
        },
        f = 'media.gimkit.com',
        g = 'res.cloudinary.com',
        h = 'gimkit-production',
        i = [
            f,
            g
        ];
}), c.register('Efyfk', function(b, u) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('NgrHi');
    var f = d.createContext(e.default);
}), c.register('k0s2g17', function(b, u) {
    a(b.exports, 'NavigateTo', function() {
        return e;
    });
    var d = c('Cr/BM');
    const e = a => {
        d.history.push(a);
    };
}), c.register('y2Sw9', function(b, u) {
    a(b.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('IsmrL'),
        g = c('ExtIT'),
        h = c('KV+OV'),
        i = c('c6x8w'),
        j = c('jrTkz0'),
        k = c('5nJMd26'),
        l = c('iHElh'),
        m = c('h99Nu'),
        n = c('iMnBi'),
        o = c('PjB0f'),
        p = c('1PHI/');
    let q;
    const r = a => {
        const [s, t, u] = (0, o.useBoolean)(!1);
        return (0, d.jsx)(k.default, {
            direction: 'vertical',
            size: 7,
            className: 'maxWidth',
            children: a.folders.map(e => (0, d.jsxs)(t, {
                onClick: () => {
                    return d = e._id, void(s || (t(), (0, o.request)({
                        url: '/api/folders/addGame',
                        data: {
                            folderId: d,
                            gameId: a.kitId
                        },
                        success: () => {
                            a.close(), (0, p.invalidateKits)(), j.default.success({
                                content: 'Kit added to folder!'
                            });
                        },
                        error: a => {
                            (0, o.throwMessageError)({
                                e: a,
                                default: {
                                    title: 'Error adding kit to folder'
                                }
                            });
                        },
                        both: u
                    })));
                    var v;
                },
                children: [
                    (0, d.jsx)('div', {
                        style: {
                            marginRight: 8
                        },
                        children: (0, d.jsx)(n.default, {
                            name: 'fas fa-folder'
                        })
                    }),
                    (0, d.jsx)('div', {
                        children: e.name
                    })
                ]
            }, e._id))
        });
    };
    var s = a => {
        const {
            data: {
                folders: t
            },
            isLoading: u
        } = (0, p.default)(), [v, w, x] = (0, o.useBoolean)(!1), [y, z] = e.useState('');
        e.useEffect(() => {
            a.open || z('');
        }, [a.open]);
        const A = y.length < 2,
            B = () => {
                A || v || (w(), (0, o.request)({
                    url: '/api/folders/new',
                    data: {
                        title: y
                    },
                    success: t => {
                        (0, o.request)({
                            url: '/api/folders/addGame',
                            data: {
                                folderId: t,
                                gameId: a.kitId
                            },
                            success: () => {
                                a.close(), (0, p.invalidateKits)();
                            },
                            error: a => {
                                (0, o.throwMessageError)({
                                    e: a,
                                    default: {
                                        title: 'Error adding kit to folder'
                                    }
                                });
                            },
                            both: x
                        });
                    },
                    error: a => {
                        (0, o.throwMessageError)({
                            e: a,
                            default: {
                                title: 'Error creating folder'
                            }
                        }), x();
                    }
                }));
            };
        return (0, d.jsx)(h.default, {
            open: a.open,
            onClose: a.close,
            width: 375,
            placement: 'right',
            closable: !0,
            title: 'Add To Folder',
            drawerStyle: {
                height: '100%',
                overflowY: 'auto'
            },
            children: (() => {
                if (u)
                    return (0, d.jsx)('div', {
                        className: 'maxAll flex-center',
                        children: (0, d.jsx)(l.default, {
                            size: 'large'
                        })
                    });
                const C = null == t ? void 0 : t.filter(t => !t.games.includes(a.kitId)).sort((a, t) => a.title.localeCompare(t.title));
                return (0, d.jsxs)('div', {
                    children: [
                        (0, d.jsx)(i.default, {
                            placeholder: 'New folder name...',
                            value: y,
                            onChange: a => z(a.target.value),
                            onPressEnter: B
                        }),
                        (0, d.jsx)(f.default, {
                            block: !0,
                            type: 'primary',
                            style: {
                                marginTop: 7
                            },
                            disabled: A,
                            loading: v,
                            onClick: B,
                            children: 'Create Folder'
                        }),
                        C.length ? (0, d.jsxs)(d.Fragment, {
                            children: [
                                (0, d.jsx)(g.default, {}),
                                (0, d.jsx)(r, {
                                    folders: C.map(a => ({
                                        _id: a._id,
                                        name: a.title
                                    })),
                                    kitId: a.kitId,
                                    close: a.close
                                })
                            ]
                        }) : null
                    ]
                });
            })()
        });
    };
    const t = m.default.div.attrs({
        className: 'flex vc'
    })(q || (q = (a => a)`
  padding: 12px 20px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`));
}), c.register('5nJMd26', function(n, o) {
    a(n.exports, 'SpaceContext', function() {
        return m;
    }, function(a) {
        return m = a;
    }), a(n.exports, 'default', function() {
        return u;
    }, function(a) {
        return u = a;
    });
    var d = c('VAIs1'),
        e = c('8N2Yw'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('azbx226'),
        i = c('okyqG'),
        j = c('W5kb426'),
        k = c('pGyzR'),
        l = function(a, b) {
            var m = {};
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && b.indexOf(n) < 0 && (m[n] = a[n]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(a); o < n.length; o++)
                    b.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (m[n[o]] = a[n[o]]);
            }
            return m;
        };
    const m = f.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        n = {
            small: 8,
            middle: 16,
            large: 24
        };
    const o = a => {
        const {
            getPrefixCls: p,
            space: q,
            direction: r
        } = f.useContext(g.ConfigContext), {
            size: s = (null == q ? void 0 : q.size) || 'small',
            align: t,
            className: u,
            rootClassName: v,
            children: w,
            direction: x = 'horizontal',
            prefixCls: y,
            split: z,
            style: A,
            wrap: B = !1
        } = C, D = l(C, [
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
        ]), E = (0, h.default)(), [F, G] = f.useMemo(() => (Array.isArray(s) ? s : [
            s,
            s
        ]).map(C => function(C) {
            return 'string' == typeof C ? n[C] : C || 0;
        }(C)), [s]), H = (0, e.default)(w, {
            keepEmpty: !0
        }), I = void 0 === t && 'horizontal' === x ? 'center' : t, J = p('space', y), [K, L] = (0, k.default)(J), M = b(d)(J, L, `${ J }-${ x }`, {
            [`${ J }-rtl`]: 'rtl' === r,
            [`${ J }-align-${ I }`]: I
        }, u, v), N = `${ J }-item`, O = 'rtl' === r ? 'marginLeft' : 'marginRight';
        let P = 0;
        const Q = H.map((C, b) => {
                null != C && (P = b);
                const R = C && C.key || `${ N }-${ b }`;
                return f.createElement(j.default, {
                    className: N,
                    key: R,
                    direction: x,
                    index: b,
                    marginDirection: O,
                    split: z,
                    wrap: B
                }, C);
            }),
            R = f.useMemo(() => ({
                horizontalSize: F,
                verticalSize: G,
                latestIndex: P,
                supportFlexGap: E
            }), [
                F,
                G,
                P,
                E
            ]);
        if (0 === H.length)
            return null;
        const S = {};
        return B && (S.flexWrap = 'wrap', E || (S.marginBottom = -G)), E && (S.columnGap = F, S.rowGap = G), K(f.createElement('div', Object.assign({
            className: M,
            style: Object.assign(Object.assign({}, S), A)
        }, D), f.createElement(m.Provider, {
            value: R
        }, Q)));
    };
    o.Compact = i.default;
    var p = q;
}), c.register('azbx226', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('94UTy'),
        f = () => {
            const [g, h] = d.useState(!1);
            return d.useEffect(() => {
                h((0, e.detectFlexGapSupported)());
            }, []), g;
        };
}), c.register('W5kb426', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('5nJMd26');

    function f(a) {
        let {
            className: g,
            direction: h,
            index: i,
            marginDirection: j,
            children: k,
            split: l,
            wrap: m
        } = n;
        const {
            horizontalSize: o,
            verticalSize: p,
            latestIndex: q,
            supportFlexGap: r
        } = d.useContext(e.SpaceContext);
        let s = {};
        return r || ('vertical' === h ? i < q && (s = {
            marginBottom: o / (l ? 2 : 1)
        }) : s = Object.assign(Object.assign({}, i < q && {
            [j]: o / (l ? 2 : 1)
        }), m && {
            paddingBottom: p
        })), null == k ? null : d.createElement(d.Fragment, null, d.createElement('div', {
            className: g,
            style: s
        }, k), i < q && l && d.createElement('span', {
            className: `${ g }-split`,
            style: s
        }, l));
    }
}), c.register('iMnBi', function(b, B) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = a => (0, d.jsx)('i', {
        className: `${ a.name }${ a.className ? ` ${ a.className }` : '' }`,
        style: a.style
    });
}), c.register('DksGO1', function(b, B) {
    a(b.exports, 'UpgradeModal_CopyKit', function() {
        return f;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('0wLl2');
    const f = {
        title: (0, d.jsx)(d.Fragment, {
            children: 'Copy kits with Pro'
        }),
        description: (0, d.jsxs)(d.Fragment, {
            children: [
                'To copy kits and make them your own, upgrade to ',
                e.COMPANY_NAME,
                ' Pro.'
            ]
        })
    };
}), c.register('EzxpY', function(b, B) {
    a(b.exports, 'UpgradeModal_Folders', function() {
        return f;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('0wLl2');
    const f = {
        title: (0, d.jsx)(d.Fragment, {
            children: 'Create folders with Pro'
        }),
        description: (0, d.jsxs)(d.Fragment, {
            children: [
                'Upgrade to ',
                e.COMPANY_NAME,
                ' Pro to create folders and organize your kits easily.'
            ]
        })
    };
}), c.register('qmTad', function(b, B) {
    a(b.exports, 'default', function() {
        return C;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('IsmrL'),
        g = c('M1Vx4'),
        h = c('c6x8w'),
        i = c('cR5QE'),
        j = c('5nJMd26'),
        k = c('UzdPH'),
        l = c('h99Nu'),
        m = c('lmfrI'),
        n = c('iMnBi'),
        o = c('b9Bct'),
        p = c('PjB0f'),
        q = c('q721a'),
        r = c('iYEuk12'),
        s = c('1PHI/');
    let t, u, v, w = a => a;
    const x = a => {
            const y = a ? '#1677ff' : 'rgba(0,0,0,0.07)';
            return {
                color: a ? m.default.White : m.default.Black,
                backgroundColor: y,
                hoverBackgroundColor: a ? y : 'rgba(0,0,0,0.11)'
            };
        },
        y = a => {
            const {
                color: z,
                backgroundColor: A,
                hoverBackgroundColor: B
            } = x(a.selected);
            return (0, d.jsx)(r.default, {
                to: a.path,
                children: (0, d.jsxs)(E, {
                    background: A,
                    color: z,
                    hoverBackgroundColor: B,
                    children: [
                        (0, d.jsx)('span', {
                            style: {
                                marginRight: 6
                            },
                            children: (0, d.jsx)(n.default, {
                                name: a.icon
                            })
                        }),
                        a.label
                    ]
                })
            });
        },
        z = a => {
            const {
                color: A,
                backgroundColor: B,
                hoverBackgroundColor: C
            } = x(a.selected), [D, E, F] = (0, p.useBoolean)(!1), [G, H, I] = (0, p.useBoolean)(!1);
            return (0, d.jsx)(r.default, {
                to: a.path,
                children: (0, d.jsxs)(E, {
                    background: B,
                    color: A,
                    hoverBackgroundColor: C,
                    children: [
                        a.icon && !a.selected ? (0, d.jsx)('span', {
                            style: {
                                marginRight: 6
                            },
                            children: a.icon
                        }) : null,
                        (0, d.jsx)(o.motion.span, {
                            layout: !0,
                            children: a.name
                        }),
                        a.selected ? (0, d.jsx)(g.default, {
                            menu: {
                                items: [{
                                        key: 'rename-folder',
                                        label: 'Rename Folder',
                                        onClick: E
                                    },
                                    {
                                        key: 'delete-folder',
                                        label: 'Delete Folder',
                                        danger: !0,
                                        onClick: H
                                    }
                                ]
                            },
                            children: (0, d.jsx)(F, {
                                children: (0, d.jsx)(n.default, {
                                    name: 'far fa-ellipsis-h'
                                })
                            })
                        }) : null,
                        (0, d.jsx)(A, {
                            open: D,
                            close: F,
                            folderId: a.id,
                            folderName: a.name
                        }),
                        (0, d.jsx)(B, {
                            open: G,
                            close: I,
                            folderId: a.id
                        })
                    ]
                })
            });
        },
        A = a => {
            const [B, C, D] = (0, p.useBoolean)(!1), [E, F] = e.useState(''), G = e.useMemo(() => E.length < 2, [E]);
            e.useEffect(() => {
                a.open || F('');
            }, [a.open]);
            const H = () => {
                B || (C(), (0, p.request)({
                    url: '/api/folders/rename',
                    data: {
                        id: a.folderId,
                        title: E
                    },
                    success: () => {
                        a.close(), (0, s.invalidateKits)();
                    },
                    both: D,
                    error: a => {
                        (0, p.throwMessageError)({
                            e: a,
                            default: {
                                title: 'Error renaming folder'
                            }
                        });
                    }
                }));
            };
            return (0, d.jsxs)(i.default, {
                open: a.open,
                onCancel: a.close,
                title: 'Rename',
                footer: [
                    (0, d.jsx)(f.default, {
                        onClick: a.close,
                        children: 'Cancel'
                    }, 'cancel-rename-folder'),
                    (0, d.jsx)(f.default, {
                        type: 'primary',
                        onClick: H,
                        disabled: G,
                        loading: B,
                        children: 'Rename'
                    }, 'rename-folder')
                ],
                children: [
                    (0, d.jsxs)(k.default.Text, {
                        children: [
                            'Enter a new name for ',
                            (0, d.jsxs)('b', {
                                children: [
                                    a.folderName,
                                    ':'
                                ]
                            })
                        ]
                    }),
                    (0, d.jsx)(h.default, {
                        value: E,
                        style: {
                            marginTop: 5
                        },
                        placeholder: 'New name...',
                        maxLength: 24,
                        onChange: a => F(a.target.value),
                        onPressEnter: H
                    })
                ]
            });
        },
        B = a => {
            const [C, D, E] = (0, p.useBoolean)(!1);
            return (0, d.jsx)(i.default, {
                open: a.open,
                onCancel: a.close,
                title: 'Delete Folder',
                footer: [
                    (0, d.jsx)(f.default, {
                        onClick: a.close,
                        children: 'Cancel'
                    }, 'cancel-delete-folder'),
                    (0, d.jsx)(f.default, {
                        type: 'primary',
                        danger: !0,
                        onClick: () => {
                            D(), (0, p.request)({
                                url: '/api/folders/delete',
                                data: {
                                    id: a.folderId
                                },
                                success: () => {
                                    a.close(), (0, s.invalidateKits)();
                                },
                                error: a => {
                                    (0, p.throwMessageError)({
                                        e: a,
                                        default: {
                                            title: 'Error deleting folder'
                                        }
                                    });
                                },
                                both: E
                            });
                        },
                        loading: C,
                        children: 'Delete Folder'
                    }, 'delete-folder')
                ],
                children: (0, d.jsx)(k.default.Text, {
                    children: 'Are you sure you want to delete this folder? The kits within the folder will not be deleted.'
                })
            });
        };
    var C = a => {
        var D;
        const E = !(0, p.isStudent)() && (null === (D = (0, p.getUser)()) || void 0 === D ? void 0 : D.schoolId),
            F = D => D === a.selectedFolder && !a.schoolLibraryScreenOpen;
        return (0, d.jsx)(D, {
            children: (0, d.jsxs)(j.default, {
                direction: 'horizontal',
                size: 10,
                wrap: !0,
                className: 'maxWidth',
                children: [
                    (0, d.jsx)(y, {
                        label: 'All kits',
                        icon: 'fas fa-box-open',
                        selected: F(''),
                        path: q.KITS
                    }),
                    E ? (0, d.jsx)(y, {
                        label: 'My school',
                        icon: 'fas fa-school',
                        selected: a.schoolLibraryScreenOpen,
                        path: `${ q.KITS }/school`
                    }) : null,
                    a.folders.sort((a, D) => a.title.localeCompare(D.title)).map(a => (0, d.jsx)(z, {
                        id: a._id,
                        name: a.title,
                        selected: F(a._id),
                        path: `${ q.KITS }/${ a._id }`,
                        icon: (0, d.jsx)(n.default, {
                            name: 'fas fa-folder'
                        })
                    }, `folder-${ a._id }`))
                ]
            })
        });
    };
    const D = l.default.div(t || (t = w`
  .ant-space-item {
    flex-shrink: 0;
  }
`)),
        E = l.default.div.attrs({
            className: 'flex-center'
        })(u || (u = w`
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
`), a => a.background, a => a.color, a => a.hoverBackgroundColor),
        F = l.default.div(v || (v = w`
  margin-left: 12px;
  transition: 0.15s background ease-in-out;
  padding: 0px 6px;
  border-radius: 4px;
  margin-right: -6px;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`));
}), c.register('iYEuk12', function(b, n) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('8kSQZ'),
        e = c('KzqIz');
    c('uPP4W');
    var f = a => a.external || !a.to ? (0, d.jsx)('a', {
        href: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        onKeyPress: b => {
            a.onClick && 'Enter' === b.key && (b.preventDefault(), a.onClick());
        },
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    }) : (0, d.jsx)(e.Link, {
        to: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    });
}), c.register('hRL1+', function(a, b) {
    a.exports = import('./' + c('tIOy4').resolve('iEAx1')).then(() => c('CIJ2q'));
}), c.register('YUx3/', function(b, n) {
    a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('BZxk+'),
        f = c('vcKQ9'),
        g = c('BXJqG'),
        h = c('q721a'),
        i = c('k0s2g17'),
        j = c('Y0KLM'),
        k = c('dVxNw'),
        l = c('5nJMd26'),
        m = c('XZQjh'),
        n = c('laJ/S'),
        o = c('x9KnF'),
        p = c('zZ+yD1'),
        q = c('PjB0f');
    var r = () => {
        const {
            data: s,
            isLoading: t
        } = (0, m.default)();
        (0, n.useDidMount)(() => {
            (0, o.CLASSES)() && (0, p.ReplaceToHomePage)();
        });
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(q.Title, {
                    title: 'Classes'
                }),
                t ? null : s.length ? (0, d.jsx)(k.default, {
                    header: (0, d.jsx)(e.default, {
                        title: 'Classes',
                        buttonIcon: (0, d.jsx)(j.default, {}),
                        buttonLink: h.NEW_CLASS,
                        buttonText: 'New Class'
                    }),
                    children: (0, d.jsx)(l.default, {
                        direction: 'vertical',
                        className: 'maxWidth',
                        size: 10,
                        children: s.map(s => (0, d.jsx)(f.default, {
                            group: s,
                            to: `/class/${ s._id }`
                        }, s._id))
                    })
                }) : (0, d.jsx)(g.default, {
                    image: 'groups',
                    title: 'Classes',
                    description: 'Keep your games safe and secure! Use classes to force students to use their real names and control who can join your games.',
                    button: 'New Class',
                    onClick: () => (0, i.NavigateTo)(h.NEW_CLASS)
                })
            ]
        });
    };
}), c.register('vcKQ9', function(b, n) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('f9f+a'),
        g = c('lmfrI'),
        h = c('h99Nu'),
        i = c('54CO/'),
        j = c('PjB0f'),
        k = c('iYEuk12');
    let l;
    const m = h.default.div(l || (l = (a => a)`
  background: ${ 0 };
  height: ${ 0 }px;
  width: ${ 0 }px;
  border-radius: 5px;
  margin-right: 10px;
`), a => a.color, i.IMAGE_SIZE, i.IMAGE_SIZE);
    class n extends e.Component {
        render() {
            const o = {
                    ...{
                        width: '100%',
                        color: g.default.Black
                    },
                    ...this.props.style || {}
                },
                {
                    group: p
                } = this.props;
            return (0, d.jsx)(k.default, {
                to: this.props.to,
                style: {
                    textDecoration: 'none'
                },
                children: (0, d.jsx)(f.default, {
                    hoverable: !0,
                    style: o,
                    children: (0, d.jsx)(i.Content, {
                        children: (0, d.jsxs)(i.LeftSide, {
                            children: [
                                (0, d.jsx)(m, {
                                    color: p.color
                                }),
                                (0, d.jsxs)(i.KitInfo, {
                                    children: [
                                        (0, d.jsx)(i.KitTitle, {
                                            children: p.name
                                        }),
                                        (0, d.jsx)(i.KitDescription, {
                                            children: p.memberCount + ' ' + (0, j.plural)('member', p.memberCount)
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
    var o = p;
}), c.register('zZ+yD1', function(b, n) {
    a(b.exports, 'GetHomepagePath', function() {
        return h;
    }), a(b.exports, 'RedirectToHomepage', function() {
        return i;
    }), a(b.exports, 'ReplaceToHomePage', function() {
        return j;
    });
    var d = c('q721a'),
        e = c('Cr/BM'),
        f = c('PjB0f'),
        g = c('k0s2g17');
    const h = () => (0, f.isLoggedIn)() ? (0, f.isStudent)() ? d.HOME : d.KITS : '/',
        i = () => {
            (0, g.NavigateTo)(h());
        },
        j = () => {
            e.history.replace(h());
        };
}), c.register('bdnvC', function(b, n) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('BZxk+'),
        f = c('qLl1O'),
        g = c('dVxNw'),
        h = c('laJ/S'),
        i = c('PjB0f'),
        j = c('zZ+yD1');
    var k = () => ((0, h.useDidMount)(() => {
        (0, i.isStudent)() || (0, j.ReplaceToHomePage)();
    }), (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(i.Title, {
                title: 'Home'
            }),
            (0, d.jsx)(g.default, {
                header: (0, d.jsx)(e.default, {
                    title: 'Home',
                    hideButton: !0
                }),
                children: (0, d.jsx)(f.default, {})
            })
        ]
    }));
}), c.register('qLl1O', function(n, o) {
    a(n.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('PjB0f'),
        g = c('ST0//'),
        h = c('RSeJg'),
        i = c('VjPN6'),
        j = c('V9i4F');
    var k = () => {
        const [l, m] = b(e).useState(!0), [n, o] = b(e).useState([]);
        return b(e).useEffect(() => {
            (0, f.isStudent)() && (0, f.request)({
                url: '/api/v1/groups/part-of',
                success: l => o(l),
                both: () => m(!1)
            });
        }, []), (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(g.default, {
                    groups: n.map(l => l._id)
                }),
                (0, d.jsx)(h.default, {}),
                (0, d.jsx)(j.default, {}),
                (0, d.jsx)(i.default, {
                    groups: n,
                    loading: l
                })
            ]
        });
    };
}), c.register('ST0//', function(b, x) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('t3ErB'),
        f = c('zJgr8');
    var g = a => (0, d.jsx)(f.default, {
        children: (0, d.jsx)(e.default, {
            groups: a.groups
        })
    });
}), c.register('t3ErB', function(b, x) {
    a(b.exports, 'default', function() {
        return p;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('gSUVO'),
        h = c('04QlH'),
        i = c('lmfrI'),
        j = c('PjB0f'),
        k = c('V9i4F');
    let l, m, n, o = a => a;
    var p = a => {
        const [q, r] = e.useState();
        return e.useEffect(() => {
            if (a.groups.length) {
                const s = () => {
                    (0, j.request)({
                        url: '/api/matchmaker/instant-join',
                        success: s => {
                            s && s.code && r(s.code);
                        }
                    });
                };
                s();
                const t = setInterval(s, 30000);
                return () => clearInterval(t);
            }
        }, [a.groups.length]), q ? (0, d.jsx)(d.Fragment, {
            children: (0, d.jsxs)(q, {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(r, {
                                children: 'Join your teacher\'s live game!'
                            }),
                            (0, d.jsx)(s, {
                                children: q
                            })
                        ]
                    }),
                    (0, d.jsx)('div', {
                        style: {
                            marginLeft: 20
                        },
                        children: (0, d.jsx)(h.default, {
                            background: '#2e7d32',
                            color: i.default.White,
                            icon: 'fas fa-gamepad',
                            text: 'Join Game',
                            customWidth: 200,
                            className: 'hc',
                            style: {
                                textDecoration: 'none'
                            },
                            to: `/join?gc=${ q }`
                        })
                    }),
                    (0, d.jsx)(k.default, {})
                ]
            })
        }) : null;
    };
    const q = f.default.div.attrs({
            className: 'flex vc wrap'
        })(l || (l = o`
  justify-content: space-between;
`)),
        r = f.default.div(m || (m = o`
  line-height: 16px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
`)),
        s = f.default.div(n || (n = o`
  font-size: 50px;
  line-height: 50px;
  margin-top: 10px;
  font-weight: ${ 0 };
`), g.FontWeights.UltraBold);
}), c.register('04QlH', function(b, x) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('lmfrI'),
        f = c('h99Nu');
    let g;
    var h = a => (0, d.jsxs)(i, {
        href: a.to,
        customWidth: a.customWidth,
        className: `flex vc ${ a.className }`,
        style: a.style,
        children: [
            (0, d.jsx)('div', {
                className: 'flex hc vc',
                style: {
                    color: a.color,
                    background: a.background,
                    height: 36,
                    width: 36,
                    borderRadius: '50%',
                    marginRight: 11
                },
                children: (0, d.jsx)('i', {
                    className: a.icon
                })
            }),
            (0, d.jsx)('span', {
                children: a.text
            })
        ]
    });
    const i = f.default.a(g || (g = (a => a)`
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
`), e.default.White, e.default.Black, a => a.customWidth || 350, e.default.BorderGray, e.default.Black);
}), c.register('V9i4F', function(b, x) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('8kSQZ'),
        e = c('ExtIT');
    c('uPP4W');
    var f = () => (0, d.jsx)(e.default, {
        style: {
            marginTop: 40,
            marginBottom: 40
        }
    });
}), c.register('zJgr8', function(b, x) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('h99Nu'),
        e = c('lmfrI');
    let f;
    var g = d.default.div.attrs({
        className: 'maxWidth'
    })(f || (f = (a => a)`
  color: ${ 0 };
`), e.default.Black);
}), c.register('RSeJg', function(x, y) {
    a(x.exports, 'default', function() {
        return u;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('zJgr8'),
        g = c('h99Nu'),
        h = c('gSUVO'),
        i = c('lmfrI'),
        j = c('RVinC'),
        k = c('PjB0f'),
        l = c('o/FCM'),
        m = c('iHElh'),
        n = c('2MCaL');
    let o, p, q, r = a => a;
    var s;
    (s = q || (q = {})).nextSevenDays = 'nextSevenDays', s.nextFortyFiveDays = 'nextFortyFiveDays', s.lastThirtyDays = 'lastThirtyDays';
    const t = () => (0, d.jsxs)('div', {
        style: {
            borderStyle: 'dashed',
            borderColor: i.default.BorderGray,
            minHeight: 145,
            borderWidth: 1,
            fontSize: 20,
            padding: 10,
            borderRadius: 8
        },
        className: 'maxWidth flex hc vc flex-column',
        children: [
            (0, d.jsx)('div', {
                children: (0, d.jsx)('i', {
                    className: 'fas fa-stars',
                    style: {
                        color: '#1a237e',
                        fontSize: 28
                    }
                })
            }),
            (0, d.jsx)('div', {
                style: {
                    marginTop: 5
                },
                children: 'No assignments for this time period.'
            })
        ]
    });
    var u = () => {
        const [v, w] = e.useState(!0), [x, y] = e.useState(!1), [z, A] = e.useState(null), [B, C] = e.useState([]), D = (b, d) => {
            v && x || (w(!0), y(!0), (0, k.request)({
                url: `/api/hub/hub-items?startDate=${ b.format('MM-DD-YYYY') }&endDate=${ d.format('MM-DD-YYYY') }`,
                success: v => {
                    C(v);
                },
                both: () => w(!1)
            }));
        }, E = () => !v || !x, F = () => {
            z !== q.nextSevenDays && E() && (A(q.nextSevenDays), D(b(n)(), b(n)().add(15, 'days')));
        };
        return e.useEffect(() => {
            F();
        }, []), (0, d.jsxs)(f.default, {
            children: [
                (0, d.jsx)(v, {
                    children: 'Assignments'
                }),
                (0, d.jsxs)('div', {
                    className: 'flex vc wrap',
                    style: {
                        marginTop: 15
                    },
                    children: [
                        (0, d.jsx)(w, {
                            onClick: F,
                            selected: z === q.nextSevenDays,
                            children: 'Next 14 days'
                        }),
                        (0, d.jsx)(w, {
                            onClick: () => {
                                z !== q.nextFortyFiveDays && E() && (A(q.nextFortyFiveDays), D(b(n)(), b(n)().add(46, 'days')));
                            },
                            selected: z === q.nextFortyFiveDays,
                            children: 'Next 45 days'
                        }),
                        (0, d.jsx)(w, {
                            onClick: () => {
                                z !== q.lastThirtyDays && E() && (A(q.lastThirtyDays), D(b(n)().subtract(31, 'days'), b(n)()));
                            },
                            selected: z === q.lastThirtyDays,
                            children: 'Last 30 days'
                        })
                    ]
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 20
                    }
                }),
                v ? (0, d.jsx)('div', {
                    className: 'maxWidth flex hc',
                    style: {
                        marginTop: 20
                    },
                    children: (0, d.jsx)(m.default, {
                        size: 'large'
                    })
                }) : B.length ? (0, d.jsx)(d.Fragment, {
                    children: B.sort((v, b) => new Date(v.dueDate).getTime() - new Date(b.dueDate).getTime()).map(v => v.type === l.HubItemType.mapAssignment ? (0, d.jsx)(j.default, {
                        groupColor: v.group.color,
                        groupName: v.group.name,
                        dueDate: v.dueDate,
                        title: v.title,
                        status: v.status,
                        link: `/join/${ v.resourceId }`
                    }, v.resourceId + v.group._id) : null)
                }) : (0, d.jsx)(t, {})
            ]
        });
    };
    const v = g.default.div(o || (o = r`
  font-size: 38px;
  line-height: 38px;
  font-weight: ${ 0 };
`), h.FontWeights.UltraBold),
        w = g.default.div.attrs({
            className: 'flex vc'
        })(p || (p = r`
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
`), a => a.selected ? '#1a237e' : i.default.White, a => a.selected ? i.default.White : i.default.Black, a => a.selected ? '#1a237e' : i.default.BorderGray, a => !a.selected && '\n  &:hover {\n    background: #fafafa;\n  }\n  ');
}), c.register('RVinC', function(q, d) {
    a(q.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('f9f+a'),
        g = c('s3Yi7'),
        h = c('o/FCM'),
        i = c('iYEuk12'),
        j = c('2MCaL');
    var k = a => {
        const l = e.useMemo(() => a.status === h.HubItemStatus.completed ? 'Completed' : a.status === h.HubItemStatus.inProgress ? 'In Progress...' : b(j)().isAfter(b(j)(a.dueDate)) ? 'Past Due' : null, [
            a.status,
            a.dueDate
        ]);
        return (0, d.jsxs)(g.Container, {
            children: [
                (0, d.jsxs)(g.TopContainer, {
                    children: [
                        (0, d.jsx)(g.Color, {
                            style: {
                                background: a.groupColor
                            }
                        }),
                        (0, d.jsxs)(g.ClassAndDueDate, {
                            children: [
                                a.groupName,
                                ' - due ',
                                b(j)(a.dueDate).format('MMMM Do')
                            ]
                        })
                    ]
                }),
                (0, d.jsx)(i.default, {
                    to: a.link,
                    className: 'maxWidth',
                    target: '_parent',
                    style: {
                        textDecoration: 'none'
                    },
                    children: (0, d.jsx)(f.default, {
                        hoverable: !0,
                        style: {
                            borderRadius: 8,
                            width: '100%',
                            borderTopLeftRadius: 0
                        },
                        children: (0, d.jsxs)(g.CardContainer, {
                            children: [
                                (0, d.jsx)(g.IconContainer, {
                                    children: (0, d.jsx)('i', {
                                        className: 'fal fa-file-alt'
                                    })
                                }),
                                (0, d.jsxs)(g.RightSide, {
                                    children: [
                                        (0, d.jsxs)(g.DetailsSection, {
                                            children: [
                                                (0, d.jsx)(g.Title, {
                                                    children: a.title
                                                }),
                                                l ? (0, d.jsx)(g.Description, {
                                                    children: l
                                                }) : null
                                            ]
                                        }),
                                        (0, d.jsx)(g.Status, {
                                            children: a.status === h.HubItemStatus.completed ? (0, d.jsx)('i', {
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
}), c.register('s3Yi7', function(b, q) {
    a(b.exports, 'Container', function() {
        return s;
    }), a(b.exports, 'TopContainer', function() {
        return t;
    }), a(b.exports, 'Color', function() {
        return u;
    }), a(b.exports, 'ClassAndDueDate', function() {
        return v;
    }), a(b.exports, 'CardContainer', function() {
        return w;
    }), a(b.exports, 'RightSide', function() {
        return x;
    }), a(b.exports, 'DetailsSection', function() {
        return y;
    }), a(b.exports, 'IconContainer', function() {
        return z;
    }), a(b.exports, 'Title', function() {
        return A;
    }), a(b.exports, 'Description', function() {
        return B;
    }), a(b.exports, 'Status', function() {
        return C;
    });
    var d = c('lmfrI'),
        e = c('gSUVO'),
        f = c('h99Nu');
    let g, h, i, j, k, l, m, n, o, p, q, r = a => a;
    const s = f.default.div.attrs({
            className: 'flex maxWidth flex-column'
        })(g || (g = r`
  align-items: flex-start;
  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`)),
        t = f.default.div.attrs({
            className: 'flex vc'
        })(h || (h = r`
  border-style: solid;
  border-width: 1px;
  border-color: ${ 0 };
  border-bottom-style: none;
  padding: 7px 15px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`), d.default.BorderGray),
        u = f.default.div(i || (i = r`
  height: 14px;
  width: 14px;
  border-radius: 50%;
`)),
        v = f.default.div(j || (j = r`
  margin-left: 7px;
  font-size: 14px;
  line-height: 14px;
`)),
        w = f.default.div.attrs({
            className: 'flex maxWidth vc'
        })(k || (k = r`
  color: ${ 0 };
`), d.default.Black),
        x = f.default.div.attrs({
            className: 'flex maxWidth vc'
        })(l || (l = r`
  margin-left: 25px;
  justify-content: space-between;
`)),
        y = f.default.div(m || (m = r`
  line-height: 1;
`)),
        z = f.default.div(n || (n = r`
  font-size: 26px;
  color: #263238;
`)),
        A = f.default.div(o || (o = r`
  font-size: 20px;
  font-weight: ${ 0 };
`), e.FontWeights.Bold),
        B = f.default.div(p || (p = r`
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  margin-top: 6px;
`)),
        C = f.default.div(q || (q = r`
  font-size: 32px;
`));
}), c.register('VjPN6', function(b, q) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('zJgr8'),
        g = c('h99Nu'),
        h = c('gSUVO'),
        i = c('m401Z'),
        j = c('lmfrI'),
        k = c('iHElh');
    let l;
    const m = () => (0, d.jsxs)('div', {
        style: {
            borderStyle: 'dashed',
            borderColor: j.default.BorderGray,
            minHeight: 145,
            borderWidth: 1,
            fontSize: 20,
            padding: 10,
            borderRadius: 8
        },
        className: 'maxWidth flex hc vc flex-column',
        children: [
            (0, d.jsx)('div', {
                children: (0, d.jsx)('i', {
                    className: 'fas fa-users-class',
                    style: {
                        color: '#004d40',
                        fontSize: 28
                    }
                })
            }),
            (0, d.jsx)('div', {
                style: {
                    marginTop: 5
                },
                children: 'You\'re not part of any classes.'
            })
        ]
    });
    var n = a => {
        const [o, p] = e.useState([]), q = a.groups.filter(a => !o.includes(a._id)), r = a => {
            p(o => [
                ...o,
                a
            ]);
        };
        return (0, d.jsxs)(f.default, {
            style: {
                marginTop: 30
            },
            children: [
                (0, d.jsx)(o, {
                    children: 'Classes'
                }),
                a.loading ? (0, d.jsx)('div', {
                    className: 'maxWidth flex hc',
                    style: {
                        marginTop: 20
                    },
                    children: (0, d.jsx)(k.default, {
                        size: 'large'
                    })
                }) : q.length ? q.map(a => (0, d.jsx)(i.default, {
                    name: a.name,
                    color: a.color,
                    creator: a.creatorName,
                    groupId: a._id,
                    onUnenroll: r
                }, a._id)) : (0, d.jsx)(m, {})
            ]
        });
    };
    const o = g.default.div(l || (l = (a => a)`
  font-size: 38px;
  line-height: 38px;
  font-weight: ${ 0 };
  margin-bottom: 20px;
`), h.FontWeights.UltraBold);
}), c.register('m401Z', function(b, C) {
    a(b.exports, 'default', function() {
        return t;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('IsmrL'),
        f = c('f9f+a'),
        g = c('jrTkz0'),
        h = c('cR5QE'),
        i = c('YfLmS'),
        j = c('h99Nu'),
        k = c('lmfrI'),
        l = c('gSUVO'),
        m = c('obWo+'),
        n = c('PjB0f');
    let o, p, q, r, s = a => a;
    var t = a => (0, d.jsx)(d.Fragment, {
        children: (0, d.jsx)(f.default, {
            style: {
                borderRadius: 8,
                marginBottom: 10
            },
            children: (0, d.jsxs)(u, {
                children: [
                    (0, d.jsxs)('div', {
                        className: 'flex vc',
                        children: [
                            (0, d.jsx)('div', {
                                style: {
                                    borderRadius: 5,
                                    height: 55,
                                    width: 55,
                                    background: a.color
                                }
                            }),
                            (0, d.jsxs)(v, {
                                children: [
                                    (0, d.jsx)(w, {
                                        children: a.name
                                    }),
                                    (0, d.jsx)(x, {
                                        children: a.creator
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, d.jsx)('div', {
                        children: (0, d.jsx)(i.default, {
                            title: 'Unenroll from class',
                            children: (0, d.jsx)(e.default, {
                                onClick: () => {
                                    h.default.confirm({
                                        title: 'Are you sure you want to unenroll from this class?',
                                        okText: 'Yes',
                                        cancelText: 'No',
                                        onOk: () => {
                                            (0, n.request)({
                                                url: '/api/v1/groups/unenroll',
                                                data: {
                                                    groupId: a.groupId
                                                },
                                                success: () => {
                                                    g.default.success(`Unenrolled from "${ a.name }"!`), a.onUnenroll(a.groupId);
                                                }
                                            });
                                        }
                                    });
                                },
                                shape: 'circle',
                                type: 'dashed',
                                icon: (0, d.jsx)(m.default, {})
                            })
                        })
                    })
                ]
            })
        })
    });
    const u = j.default.div.attrs({
            className: 'flex maxWidth vc between'
        })(o || (o = s`
  color: ${ 0 };
`), k.default.Black),
        v = j.default.div(p || (p = s`
  margin-left: 25px;
`)),
        w = j.default.div(q || (q = s`
  font-size: 20px;
  line-height: 20px;
  font-weight: ${ 0 };
`), l.FontWeights.Bold),
        x = j.default.div(r || (r = s`
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  line-height: 15px;
  margin-top: 6px;
`));
}), c.register('0UqiX', function(b, C) {
    a(b.exports, 'DashboardReports', function() {
        return y;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('qEw51'),
        g = c('+98NM'),
        h = c('VaygL'),
        i = c('PjB0f'),
        j = c('BZxk+'),
        k = c('dVxNw'),
        l = c('qpNcE0'),
        m = (e = c('uPP4W'), c('h99Nu')),
        n = c('dlNtt1'),
        o = c('1nlZK'),
        p = c('KzqIz'),
        q = c('cKlnM'),
        r = c('gl+210'),
        s = c('9d2W5'),
        t = c('k0s2g17'),
        u = c('BXJqG'),
        v = c('ynLQk');
    let w;
    const x = [{
                title: 'Kit',
                dataIndex: 'kit',
                key: 'report-kit',
                render: (a, b) => (0, d.jsx)(q.ReportKit, {
                    kit: a,
                    dateId: b._id,
                    assignmentId: b.mapAssignment
                })
            },
            {
                title: 'Accuracy',
                dataIndex: 'accuracy',
                key: 'report-accuracy',
                render: a => (0, d.jsx)(r.ReportProgressAccuracyMeter, {
                    percent: a
                })
            },
            {
                title: 'Participants',
                dataIndex: 'groups',
                key: 'report-groups',
                render: (a, b) => (0, d.jsx)(s.ReportParticipantsAndGroups, {
                    reportId: b._id,
                    participants: b.participants,
                    groups: a
                })
            }
        ],
        y = () => {
            const [z, A] = (0, p.useSearchParams)();
            var B;
            const C = Math.max(1, null !== (B = Number(z.get('page'))) && void 0 !== B ? B : 1),
                [D, E] = e.useState(0),
                F = (0, e.useRef)(null),
                [G, H, I] = (0, i.useBoolean)(!1),
                {
                    data: J,
                    isLoading: K,
                    isError: L,
                    isFetching: M
                } = (0, o.useReports)(C);
            (0, l.default)(F, z => {
                var N, O;
                E(null !== (O = null === (N = z.target) || void 0 === N ? void 0 : N.offsetTop) && void 0 !== O ? O : 0);
            }), e.useEffect(() => {
                window.scrollTo(0, 0);
            }, [C]);
            const N = J ? (0, d.jsx)(n.ReportPagination, {
                total: J.totalItems,
                current: C,
                onPageChange: z => {
                    (0, i.isUpgraded)() ? A({
                        page: z
                    }): H();
                }
            }) : null;
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(i.Title, {
                        title: 'Reports'
                    }),
                    J && !(null == J ? void 0 : J.totalItems) ? (0, d.jsx)(u.default, {
                        image: 'report',
                        title: 'Reports',
                        description: 'View and analyze student performance data. Reports for live games and assignments appear here when you host a game with one of your kits.',
                        hideButton: !0
                    }) : (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(z, {
                                ref: F,
                                children: (0, d.jsx)(k.default, {
                                    header: (0, d.jsx)(j.default, {
                                        title: 'Reports',
                                        customRightComponent: null != N ? N : (0, d.jsx)(d.Fragment, {})
                                    }),
                                    contentStyle: {
                                        padding: 0
                                    },
                                    children: K ? (0, d.jsx)(g.default, {
                                        paragraph: {
                                            rows: 4
                                        },
                                        title: !1,
                                        active: !0,
                                        className: 'maxWidth',
                                        style: {
                                            padding: 35
                                        }
                                    }) : L ? (0, d.jsx)('div', {
                                        className: 'maxAll flex-center center',
                                        style: {
                                            padding: 35
                                        },
                                        children: 'There was an error loading your reports. Please try again later.'
                                    }) : (0, d.jsxs)('div', {
                                        id: 'reports-container',
                                        children: [
                                            (0, d.jsx)(f.default, {
                                                theme: {
                                                    token: {
                                                        padding: 35
                                                    }
                                                },
                                                children: (0, d.jsx)(h.default, {
                                                    dataSource: J.items.map(z => ({
                                                        key: z._id,
                                                        ...z
                                                    })),
                                                    columns: x,
                                                    bordered: !0,
                                                    pagination: !1,
                                                    tableLayout: 'auto',
                                                    size: 'large',
                                                    onRow: z => ({
                                                        onClick: () => {
                                                            (0, t.NavigateTo)(`/report/${ z._id }`);
                                                        },
                                                        style: {
                                                            cursor: 'pointer'
                                                        }
                                                    }),
                                                    loading: {
                                                        spinning: M,
                                                        indicator: null
                                                    },
                                                    sticky: {
                                                        offsetHeader: D,
                                                        getContainer: () => document.getElementById('reports-container')
                                                    }
                                                })
                                            }),
                                            (0, d.jsx)('div', {
                                                className: 'maxWidth flex-center',
                                                style: {
                                                    padding: '35px 0px'
                                                },
                                                children: N
                                            })
                                        ]
                                    })
                                })
                            }),
                            (0, d.jsx)(v.ReportUpgradeModal, {
                                visible: G,
                                close: I
                            })
                        ]
                    })
                ]
            });
        },
        z = m.default.div.attrs({
            className: 'maxWidth flex'
        })(w || (w = (a => a)`
  flex: 1;
`));
}), c.register('qpNcE0', function(b, k) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('vxwW1'),
        e = c('X8LPJ');

    function f() {}
    let g;
    const h = a => g || (g = function(a) {
        let i = !1,
            j = [];
        const k = new Map(),
            l = new(a || window.ResizeObserver)((a, l) => {
                j = j.concat(a), i || window.requestAnimationFrame(function() {
                    const m = new Set();
                    for (let n = 0; n < j.length; n++) {
                        if (m.has(j[n].target))
                            continue;
                        m.add(j[n].target);
                        const o = k.get(j[n].target);
                        null == o || o.forEach(m => m(j[n], l));
                    }
                    j = [], n = !1;
                }), i = !0;
            });
        return {
            observer: l,
            subscribe(a, i) {
                var m;
                l.observe(a);
                const n = null !== (m = k.get(a)) && void 0 !== m ? m : [];
                n.push(i), k.set(a, n);
            },
            unsubscribe(a, i) {
                var m;
                const n = null !== (m = k.get(a)) && void 0 !== m ? m : [];
                if (1 === n.length)
                    return l.unobserve(a), void k.delete(a);
                const o = n.indexOf(i); -
                1 !== o && n.splice(o, 1), k.set(a, n);
            }
        };
    }(a));
    var i = function(a, b, j = {}) {
        const k = h(j.polyfill),
            l = (0, e.default)(b);
        return (0, d.default)(() => {
            let m = !1;
            const n = a && 'current' in a ? a.current : a;
            if (!n)
                return f;

            function o(a, n) {
                m || l.current(a, n);
            }
            return k.subscribe(n, o), () => {
                m = !0, k.unsubscribe(n, o);
            };
        }, [
            a,
            k,
            l
        ]), k.observer;
    };
}), c.register('vxwW1', function(i, d) {
    a(i.exports, 'default', function() {
        return d;
    });
    var d = b(c('uPP4W'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), c.register('X8LPJ', function(b, i) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('uPP4W');
    var e = a => {
        const f = d.useRef(a);
        return d.useEffect(() => {
            f.current = a;
        }), f;
    };
}), c.register('dlNtt1', function(b, i) {
    a(b.exports, 'ReportPagination', function() {
        return f;
    });
    var d = c('8kSQZ'),
        e = c('+WsvB');
    c('uPP4W');
    const f = a => {
        const {
            total: g,
            current: h,
            onPageChange: i
        } = j;
        return (0, d.jsx)(e.default, {
            simple: !0,
            current: h,
            total: g,
            defaultPageSize: 10,
            onChange: i
        });
    };
}), c.register('1nlZK', function(b, o) {
    a(b.exports, 'useReports', function() {
        return f;
    });
    var d = c('IsAdf'),
        e = c('PjB0f');
    const f = a => (0, d.useQuery)({
        queryKey: [
            'dashboard-repports',
            {
                page: a
            }
        ],
        keepPreviousData: !0,
        staleTime: 60000,
        retry: 2,
        queryFn: () => (0, e.requestAsPromise)({
            url: '/api/game-report/fetch-all',
            data: {
                page: a
            }
        })
    });
}), c.register('cKlnM', function(o, d) {
    a(o.exports, 'ReportKit', function() {
        return q;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('5nJMd26'),
        g = c('2MCaL'),
        h = c('PjB0f'),
        i = c('gSUVO'),
        j = c('DorSq'),
        k = c('lmfrI'),
        l = c('2WDH6');
    let m, n, o, p = a => a;
    const q = a => {
            const r = b(g)((0, h.dateFromObjectId)(a.dateId)).format('MMMM Do [at] LT');
            return (0, d.jsxs)(f.default, {
                direction: 'horizontal',
                size: 14,
                align: 'center',
                children: [
                    (0, d.jsx)('div', {
                        children: (0, d.jsx)(r, {
                            src: (0, l.getCloudinaryUrl)(a.kit.gif),
                            style: {
                                width: 55,
                                height: 55
                            }
                        })
                    }),
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(s, {
                                children: a.kit.title
                            }),
                            (0, d.jsx)(t, {
                                children: r
                            }),
                            a.assignmentId ? (0, d.jsx)('div', {
                                style: {
                                    marginTop: '0.25em'
                                },
                                children: (0, d.jsx)(j.ReportLinkTag, {
                                    to: `/assignment/${ a.assignmentId }`,
                                    children: 'Assignment'
                                })
                            }) : null
                        ]
                    })
                ]
            });
        },
        r = e.default.img(m || (m = p`
  border-radius: 5px;
  border: solid ${ 0 } 1px;
  flex-shrink: 0;
  object-fit: cover;
`), k.default.Black),
        s = e.default.div(n || (n = p`
  font-size: 1.1em;
  font-weight: ${ 0 };
`), i.FontWeights.Bold),
        t = e.default.div(o || (o = p`
  font-size: 0.9em;
  font-style: italic;
  margin-top: 0.05em;
`));
}), c.register('DorSq', function(b, o) {
    a(b.exports, 'ReportLinkTag', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('iYEuk12'),
        f = c('h99Nu');
    let g;
    const h = a => (0, d.jsx)(i, {
            onClick: a => null == a ? void 0 : a.stopPropagation(),
            to: a.to,
            children: a.children
        }),
        i = (0, f.default)(e.default)(g || (g = (a => a)`
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.2em 0.73em;
  font-size: 0.9em;
  border-radius: 50px;
`));
}), c.register('gl+210', function(b, o) {
    a(b.exports, 'ReportProgressAccuracyMeter', function() {
        return h;
    });
    var d = c('8kSQZ'),
        e = c('qEw51'),
        f = c('0x1Q5');
    c('uPP4W');
    var g = c('CDq40');
    const h = a => {
        const i = a.percent < 60 ? '#F44336' : a.percent < 80 ? '#FFC107' : '#66BB6A';
        return (0, d.jsx)(e.default, {
            theme: {
                components: {
                    Progress: {
                        colorText: (0, g.darken)(0.2, i)
                    }
                }
            },
            children: (0, d.jsx)(f.default, {
                type: 'dashboard',
                percent: a.percent,
                width: 65,
                strokeColor: i,
                status: 'normal'
            })
        });
    };
}), c.register('9d2W5', function(b, o) {
    a(b.exports, 'ReportParticipantsAndGroups', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('PjB0f'),
        f = c('5nJMd26'),
        g = c('DorSq');
    const h = a => {
        var i;
        return (0, d.jsxs)('div', {
            children: [
                (0, d.jsxs)('div', {
                    style: {
                        fontStyle: 'italic'
                    },
                    children: [
                        a.participants,
                        ' ',
                        (0, e.plural)('participant', a.participants)
                    ]
                }),
                (null === (i = a.groups) || void 0 === i ? void 0 : i.length) ? (0, d.jsx)(f.default, {
                    direction: 'horizontal',
                    wrap: !0,
                    size: 'small',
                    style: {
                        marginTop: '0.3em'
                    },
                    children: a.groups.map(i => (0, d.jsx)(g.ReportLinkTag, {
                        to: `/class/${ i._id }`,
                        children: i.name
                    }, a.reportId + i._id))
                }) : null
            ]
        });
    };
}), c.register('ynLQk', function(b, o) {
    a(b.exports, 'ReportUpgradeModal', function() {
        return g;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('VsZIM'),
        f = c('0wLl2');
    const g = a => (0, d.jsx)(e.default, {
        id: 'view more reports',
        ...a,
        copy: {
            title: 'More reports with Pro',
            description: `To view more of your past reports, upgrade to ${ f.COMPANY_NAME } Pro.`
        }
    });
}), c.register('tWHf2', function(b, o) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('UM8oI'),
        e = c('6gioo'),
        f = c('8kSQZ'),
        g = c('uPP4W'),
        h = c('IsmrL'),
        i = c('cR5QE'),
        j = c('Vlfxs'),
        k = c('gSUVO'),
        l = c('lmfrI');
    let m = class extends g.Component {
        render() {
            return (0, f.jsxs)(i.default, {
                onCancel: this.handleClose,
                open: this.props.navigation.archiveModalShow,
                closable: !0,
                footer: null,
                bodyStyle: {
                    fontFamily: k.Fonts.SFPro,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: l.default.Black
                },
                width: 600,
                children: [
                    (0, f.jsx)('div', {
                        style: {
                            fontSize: 42,
                            fontWeight: k.FontWeights.UltraBold
                        },
                        children: 'Kit is Archived'
                    }),
                    (0, f.jsxs)('div', {
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
                    (0, f.jsx)(h.default, {
                        onClick: this.handleClose,
                        type: 'primary',
                        size: 'large',
                        children: 'Got It!'
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, d.default)(this, 'handleClose', () => this.props.navigation.archiveModalShow = !1);
        }
    };
    m = (0, e.__decorate)([
        (0, j.inject)('navigation', 'kits'),
        j.observer
    ], m);
    var n = o;
}), c.register('FZpPT', function(b, o) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('lmfrI'),
        f = c('gSUVO');
    c('uPP4W');
    var g = c('h99Nu'),
        h = c('vmc1R'),
        i = c('ybfE3'),
        j = c('PjB0f'),
        k = c('zToGr');
    let l;
    var m = a => {
        const n = (0, j.getUser)();
        return (0, j.isStudent)() ? null : (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(n, {
                    children: [
                        (() => {
                            const {
                                freeTrial: o
                            } = p;
                            return !!((0, j.isUpgraded)() && o && o.currentlyOnFreeTrial);
                        })() && (0, d.jsx)(i.default, {
                            user: n,
                            openUpgradeModal: () => {
                                a.openUpgradeModal(!1);
                            }
                        }),
                        !(0, j.isUpgraded)() && (0, d.jsx)(h.default, {
                            openUpgradeModal: a.openUpgradeModal
                        })
                    ]
                }),
                (0, d.jsx)(k.default, {})
            ]
        });
    };
    const n = g.default.div.attrs({
        className: 'maxWidth'
    })(l || (l = (a => a)`
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  color: ${ 0 };
  font-family: ${ 0 };
`), e.default.Black, f.Fonts.SFPro);
}), c.register('vmc1R', function(o, p) {
    a(o.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('ybfE3'),
        g = c('2MCaL'),
        h = c('0wLl2'),
        i = c('lQpd5'),
        j = c('QcyFw'),
        k = c('PjB0f');
    f = c('ybfE3');
    const l = 'hub_upgrade_modal_last_seen';
    var m = a => {
        const {
            isLoading: n,
            data: o
        } = (0, i.default)();
        e.useEffect(() => {
            (() => {
                if (!localStorage.getItem(l))
                    return !0;
                const p = localStorage.getItem(l),
                    q = Number(p);
                if (!q || isNaN(q))
                    return !0;
                const r = b(g).unix(q);
                return Math.abs(b(g)().diff(r, 'hour')) >= 48;
            })() && (localStorage.setItem(l, b(g)().unix().toString()), a.openUpgradeModal(!0));
        }, []);
        const p = e.useMemo(() => (0, j.getFreePlanType)() === j.FreePlanType.limitedGames && (null == o ? void 0 : o.count) < (0, j.getLimitedGameLimit)() ? f.BACKGROUND_COLOR : '#c62828', [o]);
        return (0, j.getFreePlanType)() === j.FreePlanType.limitedGames && n ? null : (0, d.jsxs)(f.Container, {
            background: p,
            children: [
                (0, d.jsx)(f.Text, {
                    children: (() => {
                        if ((0, j.getFreePlanType)() === j.FreePlanType.limitedGames) {
                            const q = (0, j.getLimitedGameLimit)() - o.count;
                            return q <= 0 ? (0, d.jsx)(d.Fragment, {
                                children: 'You are out of hosted games for this month'
                            }) : (0, d.jsxs)(d.Fragment, {
                                children: [
                                    'You can host',
                                    ' ',
                                    (0, d.jsxs)(f.Bold, {
                                        children: [
                                            q,
                                            ' more ',
                                            (0, k.plural)('game', q)
                                        ]
                                    }),
                                    ' ',
                                    'this month'
                                ]
                            });
                        }
                        return (0, d.jsxs)(d.Fragment, {
                            children: [
                                'You are on the limited free version of ',
                                h.COMPANY_NAME,
                                '.'
                            ]
                        });
                    })()
                }),
                (0, d.jsx)(f.ActionButton, {
                    onClick: () => {
                        a.openUpgradeModal(!1);
                    },
                    background: p,
                    children: 'Learn more'
                })
            ]
        });
    };
}), c.register('ybfE3', function(u, v) {
    a(u.exports, 'BACKGROUND_COLOR', function() {
        return r;
    }), a(u.exports, 'Container', function() {
        return t;
    }), a(u.exports, 'Text', function() {
        return u;
    }), a(u.exports, 'Bold', function() {
        return v;
    }), a(u.exports, 'ActionButton', function() {
        return w;
    }), a(u.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('lmfrI'),
        f = c('gSUVO'),
        g = c('iYEuk12'),
        h = c('uPP4W'),
        i = c('h99Nu'),
        j = c('PjB0f'),
        k = c('uIVkr'),
        l = c('2MCaL');
    let m, n, o, p, q = a => a;
    const r = '#0a2540';
    var s = a => {
        const [t, u] = h.useState(0), [v, w] = h.useState(''), x = () => {
            const {
                user: y
            } = z;
            if (!y && !y.freeTrial)
                return;
            const A = b(l).duration(b(l)(y.freeTrial.freeTrialExpiration).diff(b(l)())),
                B = A.asDays(),
                C = A.asHours(),
                D = A.asMinutes(),
                E = A.asSeconds();
            if (B >= 1) {
                let F = G;
                31 === G && (F = 30), w('day'), u(Math.ceil(F));
            } else
                C >= 1 && C < 24 ? (w('hour'), u(Math.ceil(C))) : D >= 1 && D < 60 ? (w('minute'), u(Math.ceil(D))) : E > 0 && E < 60 && (w('second'), u(Math.ceil(E)));
        };
        return h.useEffect(() => {
            x();
        }, []), (0, k.useIntervalWhen)(x, 1000), v ? (0, d.jsxs)(t, {
            background: r,
            children: [
                (0, d.jsxs)(u, {
                    children: [
                        'Your trial of ',
                        (0, d.jsx)(v, {
                            children: 'Gimkit Pro'
                        }),
                        ' ends in',
                        ' ',
                        (0, d.jsxs)(v, {
                            children: [
                                t,
                                ' ',
                                (0, j.plural)(v, t),
                                '.'
                            ]
                        })
                    ]
                }),
                (0, d.jsx)(w, {
                    onClick: a.openUpgradeModal,
                    background: r,
                    children: 'Learn more'
                })
            ]
        }) : null;
    };
    const t = i.default.div.attrs({
            className: 'maxWidth flex vc'
        })(m || (m = q`
  background: ${ 0 };
  padding: 15px 20px;
  color: ${ 0 };
  justify-content: space-between;
  @media (max-width: 678px) {
    justify-content: center;
    text-align: center;
  }
`), a => a.background, e.default.White),
        u = i.default.div(n || (n = q`
  font-size: 18px;
`)),
        v = i.default.span(o || (o = q`
  font-weight: ${ 0 };
`), f.FontWeights.Bold),
        w = (0, i.default)(g.default)(p || (p = q`
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
`), a => a.background, e.default.White, e.default.White, a => a.background, e.default.White);
}), c.register('uIVkr', function(b, j) {
    a(b.exports, 'useIntervalWhen', function() {
        return e;
    });
    var d = c('uPP4W');

    function e(a, b, c, j) {
        void 0 === b && (b = 0), void 0 === c && (c = !0), void 0 === j && (j = !1);
        var f = (0, d.useRef)();

        function g() {
            f.current && f.current();
        }
        (0, d.useEffect)(function() {
            f.current = a;
        }), (0, d.useEffect)(function() {
            if ('undefined' != typeof window) {
                if (c) {
                    j && g();
                    var h = window.setInterval(g, b);
                    return function() {
                        window.clearInterval(h);
                    };
                }
            } else
                console.warn('useIntervalWhen: window is undefined.');
        }, [
            c,
            b
        ]);
    }
}), c.register('zToGr', function(b, j) {
    a(b.exports, 'default', function() {
        return j;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('cR5QE'),
        g = c('gSUVO'),
        h = c('lmfrI'),
        i = c('PjB0f');
    var j = () => {
        const [k, l] = e.useState(!1);
        e.useEffect(() => {
            const m = (0, i.getUrlVariable)('from');
            m && 'upgrade' === m && l(!0);
        }, []);
        return (0, d.jsx)(f.default, {
            onCancel: () => l(!1),
            open: k,
            footer: null,
            width: 600,
            closable: !0,
            style: {
                top: 30
            },
            children: (0, d.jsxs)('div', {
                style: {
                    fontFamily: g.Fonts.SFPro,
                    color: h.default.Black
                },
                className: 'flex hc vc flex-column',
                children: [
                    (0, d.jsx)('div', {
                        style: {
                            backgroundImage: 'url(/client/img/home/me.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            height: 100,
                            width: 100,
                            borderRadius: '50%',
                            borderStyle: 'solid',
                            borderWidth: 2,
                            borderColor: h.default.BorderGray
                        }
                    }),
                    (0, d.jsx)('div', {
                        style: {
                            fontWeight: g.FontWeights.UltraBold,
                            fontSize: 33,
                            marginTop: 6
                        },
                        children: 'Thank you.'
                    }),
                    (0, d.jsxs)('div', {
                        style: {
                            fontSize: 19,
                            marginTop: 10,
                            textAlign: 'left'
                        },
                        children: [
                            'Thank you so much for supporting us by upgrading to Gimkit Pro.',
                            (0, d.jsx)('br', {}),
                            (0, d.jsx)('br', {}),
                            'Gimkit started as a high school project. Now that I\'ve graduated, it\'s such a privilege to be able to continue to work on Gimkit. Your support is the reason why we can keep going.',
                            (0, d.jsx)('br', {}),
                            ' ',
                            (0, d.jsx)('br', {}),
                            'In addition to purchasing a product your students love, you\'re helping support a small four-person independent company. We don\'t serve ads or sell user information. We\'re not funded by VC firms. 100% of our revenue is from subscriptions like this one.',
                            (0, d.jsx)('br', {}),
                            ' ',
                            (0, d.jsx)('br', {}),
                            'Thank you for not only supporting a small business, but a student-started business. It means so much to me.',
                            (0, d.jsx)('br', {}),
                            ' ',
                            (0, d.jsx)('br', {}),
                            'If you ever need anything, feel free to reach me personally - josh@gimkit.com.',
                            (0, d.jsx)('br', {}),
                            ' ',
                            (0, d.jsx)('br', {}),
                            'Enjoy Gimkit!',
                            (0, d.jsx)('br', {}),
                            (0, d.jsx)('br', {}),
                            (0, d.jsx)('b', {
                                children: '- Josh Feinsilber'
                            }),
                            ', creator of Gimkit'
                        ]
                    })
                ]
            })
        });
    };
}), c.register('FYnQ/', function(b, j) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('RVzU3'),
        f = c('3PO2Q'),
        g = c('UHRHF');
    var h = a => ((0, f.useSeasonTicketOpener)(), (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(e.default, {}),
            (0, d.jsx)(g.default, {
                upgradeModalVisible: a.upgradeModalVisible,
                proUpsellModalVisible: a.proUpsellModalVisible
            })
        ]
    }));
}), c.register('RVzU3', function(b, j) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('uPP4W'),
        e = c('PjB0f'),
        f = c('I9mdQ');
    var g = () => (d.useEffect(() => {
        const h = (0, e.getUser)().tokenIssued || 0;
        Math.round(new Date().getTime() / 1000) - h >= 86400 && (0, f.default)({});
    }, []), null);
}), c.register('3PO2Q', function(b, j) {
    a(b.exports, 'useSeasonTicketOpener', function() {
        return h;
    });
    var d = c('uPP4W'),
        e = c('PjB0f'),
        f = c('k0s2g17'),
        g = c('q721a');
    const h = () => {
        d.useEffect(() => {
            var i, j;
            const k = (0, e.getUser)();
            k && (null == k || null === (i = k.seasonTicket) || void 0 === i ? void 0 : i.active) && !(null == k || null === (j = k.seasonTicket) || void 0 === j ? void 0 : j.viewed) && (0, f.NavigateTo)(g.SEASON_TICKET_BASE);
        }, []);
    };
}), c.register('UHRHF', function(j, d) {
    a(j.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ'),
        e = c('PjB0f'),
        f = c('2MCaL');
    c('uPP4W');
    var g = c('EOKUI');
    var h = a => (() => {
        if (a.upgradeModalVisible)
            return !0;
        if (a.proUpsellModalVisible)
            return !0;
        if ((0, e.getUrlVariable)('from'))
            return !0;
        const i = (0, e.getUser)(),
            j = (0, e.dateFromId)(i._id);
        return b(f)().diff(b(f)(j), 'days') < 3;
    })() ? null : (0, d.jsx)(g.default, {
        allowAutoOpen: !0
    });
}), c.register('5nKLo', function(b, q) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('cR5QE'),
        f = c('lmfrI'),
        g = c('gSUVO'),
        h = c('PjB0f'),
        i = c('uPP4W'),
        j = c('h99Nu'),
        k = c('sjJGN');
    let l;
    var m = () => {
        const [n, o, p] = (0, h.useBoolean)(!1), [q, r] = i.useState(0), s = i.useMemo(() => !(0, h.isStudent)() && !!sessionStorage.getItem('NEW_USER'), []);
        i.useEffect(() => {
            s && (o(), sessionStorage.removeItem('NEW_USER'));
        }, []);
        return s ? (0, d.jsx)(e.default, {
            width: 730,
            open: n,
            footer: null,
            style: {
                top: 35
            },
            bodyStyle: {
                padding: 50
            },
            closable: !1,
            children: (0, d.jsx)(n, {
                children: (0, d.jsx)(k.default, {
                    currentStage: q,
                    nextStage: () => r(n => n + 1),
                    close: p
                })
            })
        }) : null;
    };
    const n = j.default.div.attrs({
        className: 'maxWidth'
    })(l || (l = (a => a)`
  font-family: ${ 0 };
  color: ${ 0 };
`), g.Fonts.SFPro, f.default.Black);
}), c.register('sjJGN', function(b, w) {
    a(b.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('gSUVO');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('HfzrP'),
        h = c('PgT5i');
    let i, j, k, l, m, n = a => a;
    var o = a => {
        const p = g.default[a.currentStage];
        return (0, d.jsxs)(p, {
            children: [
                p.image ? (0, d.jsx)(r, {
                    src: `/client/img/dashboard/onboarding/${ p.image }.svg`
                }, p.image) : (0, d.jsx)(q, {}),
                (0, d.jsx)(s, {
                    children: p.title
                }),
                (0, d.jsx)(t, {
                    children: p.content
                }),
                (0, d.jsx)(h.default, {
                    currentStage: a.currentStage,
                    nextStage: a.nextStage,
                    close: a.close
                })
            ]
        });
    };
    const p = f.default.div.attrs({
            className: 'flex-center flex-column maxWidth'
        })(i || (i = n``)),
        q = f.default.div(j || (j = n`
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
        r = f.default.img(k || (k = n`
  height: 80px;
`)),
        s = f.default.div(l || (l = n`
  font-size: 34px;
  font-weight: ${ 0 };
  margin-top: 20px;
`), e.FontWeights.Bold),
        t = f.default.div(m || (m = n`
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 25px;
`));
}), c.register('HfzrP', function(b, w) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('8kSQZ');
    var e = [{
            title: 'Hey, welcome to Gimkit!',
            content: (0, d.jsxs)(d.Fragment, {
                children: [
                    'Thanks for signing up! I\'m Josh, and I started Gimkit as a high school project. Games really helped me get engaged in school, so I decided to build my own!',
                    (0, d.jsx)('br', {}),
                    ' ',
                    (0, d.jsx)('br', {}),
                    'Click "Next" and I\'ll walk you through a few of the basics.'
                ]
            })
        },
        {
            image: 'kit',
            title: 'Kit = your content',
            content: (0, d.jsxs)(d.Fragment, {
                children: [
                    'What you might call a question set...we call a kit. A kit contains all of the questions & terms you\'ll want students to learn & review when you play.',
                    (0, d.jsx)('br', {}),
                    ' ',
                    (0, d.jsx)('br', {}),
                    'You can create your own, or find existing kits made by other teachers.'
                ]
            })
        },
        {
            image: 'modes',
            title: 'Tons of ways to play.',
            content: (0, d.jsxs)(d.Fragment, {
                children: [
                    'Part of what makes Gimkit special are all of the different game modes you can explore with your students! ',
                    (0, d.jsx)('br', {}),
                    ' ',
                    (0, d.jsx)('br', {}),
                    'Try out our selection of modes, and stay tuned for new ones coming in the future!'
                ]
            })
        },
        {
            image: 'classes',
            title: 'Classes keep it safe.',
            content: (0, d.jsxs)(d.Fragment, {
                children: [
                    'Ever host other games in class and have a kid enter in an inappropriate name? I get it. I sat next to that kid.',
                    (0, d.jsx)('br', {}),
                    ' ',
                    (0, d.jsx)('br', {}),
                    'Using classes forces students to use their real names. Plus, it makes it impossible for students outside your class to join.'
                ]
            })
        },
        {
            title: 'You\'re all set!',
            content: (0, d.jsxs)(d.Fragment, {
                children: [
                    'That\'s all you need to know for now! Have fun exploring and we hope your students have fun playing. If you ever need help, email us at',
                    ' ',
                    (0, d.jsx)('a', {
                        href: 'mailto:hello@gimkit.com',
                        children: 'hello@gimkit.com'
                    }),
                    ' & we\'ll get back to you. Enjoy!'
                ]
            })
        }
    ];
}), c.register('PgT5i', function(b, w) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('IsmrL'),
        g = c('iYEuk12'),
        h = c('HfzrP');
    var i = a => {
        const j = e.useMemo(() => a.currentStage === h.default.length - 1, [a.currentStage]),
            k = e.useCallback(() => {
                j ? a.close() : a.nextStage();
            }, [j]);
        return (0, d.jsxs)('div', {
            className: 'flex-column flex-center',
            children: [
                (0, d.jsx)(f.default, {
                    size: 'large',
                    type: 'primary',
                    style: {
                        height: 50,
                        width: 300
                    },
                    onClick: k,
                    children: j ? 'Close' : 'Next'
                }),
                !j && (0, d.jsx)(g.default, {
                    onClick: a.close,
                    style: {
                        marginTop: 10
                    },
                    children: '...or close this screen'
                })
            ]
        });
    };
}), c.register('idY0Q', function(w, x) {
    a(w.exports, 'default', function() {
        return u;
    });
    var d = c('8kSQZ'),
        e = c('zgQWX27'),
        f = c('IsmrL'),
        g = c('cR5QE'),
        h = c('2MCaL'),
        i = c('uPP4W'),
        j = c('h99Nu'),
        k = c('lmfrI'),
        l = c('gSUVO'),
        m = c('q721a'),
        n = c('PjB0f'),
        o = c('d/j4H');
    let p, q, r, s = a => a;
    const t = 'pro-monthly-modal-last-shown';
    var u = a => {
        const [v, w, x] = (0, n.useBoolean)(!1);
        return i.useEffect(() => {
            const y = (0, n.getUser)();
            if (!y)
                return;
            if (!y.planStartDate)
                return;
            const z = b(h).unix(y.planStartDate);
            if (Math.abs(b(h)().diff(z, 'days')) < 40)
                return;
            const A = localStorage.getItem(t);
            if (A) {
                const B = b(h).unix(Number(A));
                if (Math.abs(b(h)().diff(B, 'days')) < 21)
                    return;
            }
            w(), localStorage.setItem(t, b(h)().unix().toString());
        }, []), i.useEffect(() => {
            a.onVisibleChange(v);
        }, [v]), (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(v, {}),
                (0, d.jsx)(g.default, {
                    className: 'pro-upsell-modal',
                    open: v,
                    onCancel: x,
                    footer: null,
                    width: 850,
                    style: {
                        top: 30
                    },
                    bodyStyle: {
                        padding: '0px',
                        background: k.default.Snow
                    },
                    closable: !1,
                    children: (0, d.jsxs)(w, {
                        children: [
                            (0, d.jsx)(o.default, {
                                user: (0, n.getUser)(),
                                close: x,
                                copy: {
                                    title: (0, d.jsx)('div', {
                                        style: {
                                            marginTop: 25
                                        },
                                        children: 'Pay annually, save $60.'
                                    }),
                                    description: (0, d.jsxs)(d.Fragment, {
                                        children: [
                                            'Think you\'ll continue to use Gimkit?',
                                            (0, d.jsx)('br', {}),
                                            ' If so, switch to paying annually and save 65% per year.'
                                        ]
                                    })
                                },
                                showingModes: !0
                            }),
                            (0, d.jsxs)('div', {
                                className: 'maxWidth flex-center flex-column',
                                style: {
                                    marginTop: -140,
                                    marginBottom: 30
                                },
                                children: [
                                    (0, d.jsx)(f.default, {
                                        size: 'large',
                                        type: 'primary',
                                        icon: (0, d.jsx)(e.default, {}),
                                        style: {
                                            width: 380,
                                            height: 70,
                                            display: 'flex'
                                        },
                                        className: 'flex-center',
                                        href: m.CHECKOUT,
                                        children: 'Switch To Annual Billing'
                                    }),
                                    (0, d.jsx)(x, {
                                        onClick: x,
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
    const v = (0, j.createGlobalStyle)(p || (p = s`
  .pro-upsell-modal > .ant-modal-content {
    border-radius: 10px;
    overflow: hidden;
    padding: 0px !important;
  }
`)),
        w = j.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = s`
  color: ${ 0 };
  font-family: ${ 0 };
`), k.default.Black, l.Fonts.SFPro),
        x = j.default.div(r || (r = s`
  z-index: 999;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  margin-top: 14px;
  cursor: pointer;
  text-decoration: underline;
`));
}), c.register('zgQWX27', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('+Ag0S27'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'StarOutlined';
    var i = e.forwardRef(h);
}), c.register('+Ag0S27', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('EKzax2', function(b, p) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('UnfL724'),
        h = c('dN+BG24'),
        i = c('HKMol0');
    let j, k, l = a => a;
    var m = a => {
        const n = e.useMemo(() => {
                var o;
                return null !== (o = a.theme) && void 0 !== o ? o : g.SiteHeaderTheme.light;
            }, [a.theme]),
            o = e.useMemo(() => {
                var p;
                return null !== (p = a.alpha) && void 0 !== p ? p : h.SiteHeaderAlpha.standard;
            }, [a.alpha]),
            p = e.useMemo(() => {
                const q = o === h.SiteHeaderAlpha.none ? 1 : n === g.SiteHeaderTheme.light ? 0.85 : 0.45;
                return n === g.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${ q })` : `rgba(16, 16, 16, ${ q })`;
            }, [
                n,
                o
            ]),
            q = e.useMemo(() => n === g.SiteHeaderTheme.light ? 'rgb(235, 238, 241)' : 'rgb(143 143 143 / 60%)', [n]);
        return (0, d.jsxs)(n, {
            background: p,
            borderColor: q,
            children: [
                (0, d.jsxs)(o, {
                    children: [
                        (0, d.jsx)(i.default, {
                            options: a.options,
                            selectedOption: a.selectedOption,
                            theme: n
                        }),
                        (0, d.jsx)('div', {
                            children: a.rightSideContent
                        })
                    ]
                }),
                a.bottomContent
            ]
        });
    };
    const n = f.default.div.attrs({
            className: 'maxWidth'
        })(j || (j = l`
  background: ${ 0 };
  padding: 7px 25px;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px ${ 0 };
`), a => a.background, a => a.borderColor),
        o = f.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(k || (k = l``));
}), c.register('UnfL724', function(b, c) {
    let d;
    var e;
    a(b.exports, 'SiteHeaderTheme', function() {
        return d;
    }), (e = d || (d = {})).light = 'light', e.dark = 'dark';
}), c.register('dN+BG24', function(b, c) {
    let d;
    var e;
    a(b.exports, 'SiteHeaderAlpha', function() {
        return d;
    }), (e = d || (d = {})).none = 'none', e.standard = 'standard', e.darker = 'darker';
}), c.register('HKMol0', function(b, q) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('5nJMd26'),
        f = c('pSEDe2'),
        g = c('h99Nu');
    let h;
    var i = a => (0, d.jsx)(j, {
        children: (0, d.jsx)(e.default, {
            direction: 'horizontal',
            size: 8,
            wrap: !0,
            children: a.options.map(b => (0, d.jsx)(f.default, {
                option: b,
                selected: a.selectedOption === b.id,
                theme: a.theme
            }, `option-${ b.id }`))
        })
    });
    const j = g.default.div.attrs({
        className: 'scroll-x'
    })(h || (h = (a => a)`
  flex: 1;
`));
}), c.register('pSEDe2', function(b, q) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('UnfL724'),
        g = c('h99Nu'),
        h = c('cdiGP23'),
        i = c('0R8EW'),
        j = c('KzqIz'),
        k = c('iYEuk12');
    let l;
    var m = a => {
        const {
            theme: n,
            option: o
        } = p, {
            pathname: q
        } = (0, j.useLocation)(), {
            label: r,
            icon: s,
            path: t,
            otherMatchingPaths: u
        } = v, w = (() => {
            if (t) {
                if ((0, i.matchPath)({
                        path: t
                    }, q))
                    return !0;
                if ((null == u ? void 0 : u.length) && u.some(p => (0, i.matchPath)({
                        path: p
                    }, q)))
                    return !0;
            }
            return !1;
        })(), x = e.useMemo(() => !!w || p.selected, [
            w,
            p.selected
        ]), y = e.useMemo(() => x ? '#1677ff' : 'transparent', [
            n,
            x
        ]), z = e.useMemo(() => x ? h.default.White : n === f.SiteHeaderTheme.light ? 'rgb(26, 27, 37)' : h.default.White, [
            n,
            x
        ]), A = e.useMemo(() => x ? y : n === f.SiteHeaderTheme.light ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)', [
            n,
            x,
            y
        ]);
        return (0, d.jsx)(k.default, {
            to: t,
            target: p.option.target,
            onClick: v.onSelect,
            style: {
                cursor: 'pointer'
            },
            children: (0, d.jsxs)(n, {
                background: y,
                color: z,
                hoverBackground: A,
                children: [
                    s ? (0, d.jsx)('span', {
                        style: {
                            marginRight: 6,
                            fontSize: '0.9em'
                        },
                        children: s
                    }) : null,
                    r
                ]
            })
        });
    };
    const n = g.default.div.attrs({
        className: 'flex-center'
    })(l || (l = (a => a)`
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
`), a => a.background, a => a.color, a => a.hoverBackground);
}), c.register('cdiGP23', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), c.register('LhAcK', function(b, h) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ'),
        e = c('c6x8w');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('k0s2g17');
    let h;
    var i = () => (0, d.jsx)(j, {
        children: (0, d.jsx)(e.default.Search, {
            style: {
                width: 285
            },
            enterButton: !0,
            placeholder: 'Search for kits...',
            onSearch: a => {
                a && (0, g.NavigateTo)(`/search?q=${ a }`);
            }
        })
    });
    const j = f.default.div(h || (h = (a => a)`
  margin-right: -4px;
  margin-left: 30px;
`));
}), c.register('QNMlx24', function(b, h) {
    a(b.exports, 'useMediaMatch', function() {
        return e;
    });
    var d = c('uPP4W');

    function e(a) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var f = (0, d.useMemo)(function() {
                return window.matchMedia(a);
            }, [a]),
            g = (0, d.useState)(function() {
                return f.matches;
            }),
            h = g[0],
            i = g[1];
        return (0, d.useEffect)(function() {
            i(f.matches);
            var j = function(j) {
                return i(j.matches);
            };
            return f.addEventListener ? (f.addEventListener('change', j), function() {
                return f.removeEventListener('change', j);
            }) : (f.addListener(j), function() {
                return f.removeListener(j);
            });
        }, [f]), h;
    }
}), c.register('XRX1525', function(b, j) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('xgR9K'),
        e = c('uPP4W'),
        f = c('qEw51');

    function g(a, b, c) {
        return function(j) {
            const {
                prefixCls: h,
                style: i
            } = j, k = e.useRef(null), [l, m] = e.useState(0), [n, o] = e.useState(0), [p, q] = (0, d.default)(!1, {
                value: j.open
            }), {
                getPrefixCls: r
            } = e.useContext(f.ConfigContext), s = r(b || 'select', h);
            return e.useEffect(() => {
                if (q(!0), 'undefined' != typeof ResizeObserver) {
                    const t = new ResizeObserver(t => {
                            const u = t[0].target;
                            m(u.offsetHeight + 8), o(u.offsetWidth);
                        }),
                        u = setInterval(() => {
                            var v;
                            const w = c ? `.${ c(s) }` : `.${ s }-dropdown`,
                                x = null === (v = k.current) || void 0 === v ? void 0 : v.querySelector(w);
                            x && (clearInterval(u), t.observe(x));
                        }, 10);
                    return () => {
                        clearInterval(u), t.disconnect();
                    };
                }
            }, []), e.createElement(f.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, e.createElement('div', {
                ref: k,
                style: {
                    paddingBottom: l,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: n
                }
            }, e.createElement(a, Object.assign({}, j, {
                style: Object.assign(Object.assign({}, i), {
                    margin: 0
                }),
                open: p,
                visible: p,
                getPopupContainer: () => k.current
            }))));
        };
    }
}), c.register('2TjlJ25', function(b, p) {
    a(b.exports, 'initMoveMotion', function() {
        return m;
    });
    var d = c('M5GjZ'),
        e = c('YNerC');
    const f = new(0, d.Keyframes)('antMoveDownIn', {
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
        g = new(0, d.Keyframes)('antMoveDownOut', {
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
        h = new(0, d.Keyframes)('antMoveLeftIn', {
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
        i = new(0, d.Keyframes)('antMoveLeftOut', {
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
        j = new(0, d.Keyframes)('antMoveRightIn', {
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
        k = new(0, d.Keyframes)('antMoveRightOut', {
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
        l = {
            'move-up': {
                inKeyframes: new(0, d.Keyframes)('antMoveUpIn', {
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
                outKeyframes: new(0, d.Keyframes)('antMoveUpOut', {
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
                inKeyframes: f,
                outKeyframes: g
            },
            'move-left': {
                inKeyframes: h,
                outKeyframes: i
            },
            'move-right': {
                inKeyframes: j,
                outKeyframes: k
            }
        },
        m = (a, b) => {
            const {
                antCls: n
            } = o, p = `${ n }-${ b }`, {
                inKeyframes: q,
                outKeyframes: r
            } = l[b];
            return [
                (0, e.initMotion)(p, q, r, o.motionDurationMid),
                {
                    [`\n        ${ p }-enter,\n        ${ p }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: o.motionEaseOutCirc
                    },
                    [`${ p }-leave`]: {
                        animationTimingFunction: o.motionEaseInOutCirc
                    }
                }
            ];
        };
}), c.register('SlNZ027', function(a, b) {
    var d = c('QMiH027'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    a.exports = function(a, b) {
        var f, g, h, i, j, k, l = !1;
        b || (b = {}), f = b.debug || !1;
        try {
            if (h = d(), i = document.createRange(), j = document.getSelection(), (k = document.createElement('span')).textContent = a, k.ariaHidden = 'true', k.style.all = 'unset', k.style.position = 'fixed', k.style.top = 0, k.style.clip = 'rect(0, 0, 0, 0)', k.style.whiteSpace = 'pre', k.style.webkitUserSelect = 'text', k.style.MozUserSelect = 'text', k.style.msUserSelect = 'text', k.style.userSelect = 'text', k.addEventListener('copy', function(d) {
                    if (d.stopPropagation(), b.format)
                        if (d.preventDefault(), void 0 === d.clipboardData) {
                            f && console.warn('unable to use e.clipboardData'), f && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var m = e[b.format] || e.default;
                            window.clipboardData.setData(m, a);
                        } else
                            d.clipboardData.clearData(), d.clipboardData.setData(b.format, a);
                    b.onCopy && (d.preventDefault(), b.onCopy(d.clipboardData));
                }), document.body.appendChild(k), i.selectNodeContents(k), j.addRange(i), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            l = !0;
        } catch (d) {
            f && console.error('unable to copy using execCommand: ', d), f && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(b.format || 'text', a), b.onCopy && b.onCopy(window.clipboardData), l = !0;
            } catch (d) {
                f && console.error('unable to copy using clipboardData: ', d), f && console.error('falling back to prompt'), g = function(a) {
                    var m = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return a.replace(/#{\s*key\s*}/g, m);
                }('message' in b ? b.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(g, a);
            }
        } finally {
            j && ('function' == typeof j.removeRange ? j.removeRange(i) : j.removeAllRanges()), k && document.body.removeChild(k), h();
        }
        return l;
    };
}), c.register('QMiH027', function(a, b) {
    a.exports = function() {
        var d = document.getSelection();
        if (!d.rangeCount)
            return function() {};
        for (var e = document.activeElement, f = [], g = 0; g < d.rangeCount; g++)
            f.push(d.getRangeAt(g));
        switch (e.tagName.toUpperCase()) {
            case 'INPUT':
            case 'TEXTAREA':
                e.blur();
                break;
            default:
                e = null;
        }
        return d.removeAllRanges(),
            function() {
                'Caret' === d.type && d.removeAllRanges(), d.rangeCount || f.forEach(function(e) {
                    d.addRange(e);
                }), e && e.focus();
            };
    };
}), c.register('2gkXu26', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        sideMargin: 50,
        optionWidth: 200
    };
}), c.register('tYruc25', function(a, b) {
    var d = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        e = a.exports && a.exports.__exportStar || function(a, b) {
            for (var f in a)
                'default' === f || Object.prototype.hasOwnProperty.call(b, f) || d(b, a, f);
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), e(c('v2PV625'), a.exports), e(c('IqYAK22'), a.exports), e(c('50wG025'), a.exports);
}), c.register('v2PV625', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useBreakpoints = a.exports.useBreakpoint = void 0;
    var d = c('50wG025');
    a.exports.useBreakpoint = function(a) {
        return (0, d.useWindowSize)().width < a;
    }, a.exports.useBreakpoints = function(a) {
        var e = (0, d.useWindowSize)().width;
        return a.map(function(a) {
            return e < a;
        });
    };
}), c.register('50wG025', function(a, b) {
    var d = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        e = a.exports && a.exports.__setModuleDefault || (Object.create ? function(a, b) {
            Object.defineProperty(a, 'default', {
                enumerable: !0,
                value: b
            });
        } : function(a, b) {
            a.default = b;
        }),
        f = a.exports && a.exports.__importStar || function(a) {
            if (a && a.__esModule)
                return a;
            var g = {};
            if (null != a)
                for (var h in a)
                    'default' !== h && Object.prototype.hasOwnProperty.call(a, h) && d(g, a, h);
            return e(g, a), g;
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useWindowSize = void 0;
    var g = f(c('uPP4W'));

    function h() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    a.exports.useWindowSize = function() {
        var i = g.useState(h()),
            j = i[0],
            k = i[1];
        return g.useLayoutEffect(function() {
            function l() {
                k(h());
            }
            return window.addEventListener('resize', l),
                function() {
                    return window.removeEventListener('resize', l);
                };
        }, []), j;
    };
}), c.register('IqYAK22', function(a, b) {
    var d = a.exports && a.exports.__assign || function() {
            return d = Object.assign || function(a) {
                for (var e, f = 1, g = v.length; f < g; f++)
                    for (var h in e = v[f])
                        Object.prototype.hasOwnProperty.call(e, h) && (a[h] = e[h]);
                return a;
            }, d.apply(this, v);
        },
        e = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        f = a.exports && a.exports.__setModuleDefault || (Object.create ? function(a, b) {
            Object.defineProperty(a, 'default', {
                enumerable: !0,
                value: b
            });
        } : function(a, b) {
            a.default = b;
        }),
        g = a.exports && a.exports.__importStar || function(a) {
            if (a && a.__esModule)
                return a;
            var h = {};
            if (null != a)
                for (var i in a)
                    'default' !== i && Object.prototype.hasOwnProperty.call(a, i) && e(h, a, i);
            return f(h, a), h;
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useComponentSize = void 0;
    var h = g(c('uPP4W'));
    a.exports.useComponentSize = function() {
        var i = h.useState({
                height: 0,
                width: 0
            }),
            j = i[0],
            k = i[1],
            l = h.useRef(),
            m = h.useCallback(function() {
                if (l.current) {
                    var n = l.current.offsetHeight,
                        o = l.current.offsetWidth;
                    n === j.height && o === j.width || k({
                        height: n,
                        width: o
                    });
                }
            }, [
                j.height,
                j.width
            ]);
        return h.useLayoutEffect(function() {
            if (l && l.current) {
                var n = new ResizeObserver(m);
                return n.observe(l.current),
                    function() {
                        return n.disconnect();
                    };
            }
        }, [
            l,
            m
        ]), d({
            ref: l
        }, j);
    };
}), c.register('mblWO24', function(b, d) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        name: c('y8lS825').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), c.register('y8lS825', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), c.register('QzKef2', function(b, d) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ'),
        e = c('+98NM'),
        f = c('uPP4W');
    const g = f.lazy(() => c('nRwdv4'));
    var h = a => {
        const i = a.hideSkeleton ? (0, d.jsx)('div', {
            className: 'maxWidth'
        }) : (0, d.jsx)('div', {
            className: 'maxWidth',
            children: (0, d.jsx)(e.default, {
                active: !0,
                title: !1,
                paragraph: {
                    rows: 9
                }
            })
        });
        return (0, d.jsx)(f.Suspense, {
            fallback: i,
            children: (0, d.jsx)(g, {
                ...a
            })
        });
    };
}), c.register('nRwdv4', function(a, b) {
    a.exports = Promise.all([
        c('wqdSG')(new URL(c('tIOy4').resolve('2nG1U'), import.meta.url).toString()),
        import('./' + c('tIOy4').resolve('6iUO5'))
    ]).then(() => c('NBVgF'));
}), c.register('Ftbrq', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('U2LJa'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'ClockCircleOutlined';
    var i = e.forwardRef(h);
}), c.register('U2LJa', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('js2PD', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('Kd1D+'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'TrophyOutlined';
    var i = e.forwardRef(h);
}), c.register('Kd1D+', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('0iTfX', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        normal: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 400;\n',
        bold: '\n    font-family: \'Product Sans\', sans-serif;\n    font-weight: 800;\n  ',
        black: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 900;\n',
        fontFamilyName: 'Product Sans, sans-serif'
    };
}), c.register('qgO2124', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('wOJzl24'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'UsergroupAddOutlined';
    var i = e.forwardRef(h);
}), c.register('wOJzl24', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('tK/kr24', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('XEZLJ24'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'LogoutOutlined';
    var i = e.forwardRef(h);
}), c.register('XEZLJ24', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('oSNZM', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('lByv9'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'CheckOutlined';
    var i = e.forwardRef(h);
}), c.register('lByv9', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('JegR3', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('WKaIG'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var i = e.forwardRef(h);
}), c.register('WKaIG', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('0wOVz', function(b, c) {
    a(b.exports, 'CLASSIC', function() {
        return d;
    }), a(b.exports, 'TEAMS', function() {
        return e;
    }), a(b.exports, 'THANOS', function() {
        return f;
    }), a(b.exports, 'BOSS_BATTLE', function() {
        return g;
    }), a(b.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function() {
        return h;
    }), a(b.exports, 'LAVA', function() {
        return i;
    }), a(b.exports, 'IMPOSTER', function() {
        return j;
    }), a(b.exports, 'DRAW', function() {
        return k;
    }), a(b.exports, 'PARDY', function() {
        return l;
    });
    const d = 'CLASSIC',
        e = 'TEAMS',
        f = 'THANOS',
        g = 'BOSS_BATTLE',
        h = 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE',
        i = 'LAVA',
        j = 'IMPOSTER',
        k = 'DRAW',
        l = 'PARDY';
}), c.register('CrMLT9', function(p, t) {
    a(p.exports, 'default', function() {
        return A;
    });
    var d = c('b5p1k13'),
        e = c('WfHYJ18'),
        f = c('cabca9'),
        g = c('aCkIb5'),
        h = c('PKxjP16'),
        i = c('zTitA16'),
        j = c('MvitG9'),
        k = c('oG3bd5'),
        l = c('uPP4W'),
        m = c('VAIs1'),
        n = function(a) {
            (0, j.default)(p, a);
            var o = (0, k.default)(p);

            function p(a) {
                var q;
                (0, h.default)(this, p), (q = o.call(this, a)).handleChange = function(a) {
                    var r = q.props,
                        s = r.disabled,
                        t = r.onChange;
                    s || ('checked' in q.props || q.setState({
                        checked: a.target.checked
                    }), t && t({
                        target: (0, g.default)((0, g.default)({}, q.props), {}, {
                            checked: a.target.checked
                        }),
                        stopPropagation: function() {
                            a.stopPropagation();
                        },
                        preventDefault: function() {
                            a.preventDefault();
                        },
                        nativeEvent: a.nativeEvent
                    }));
                }, q.saveInput = function(a) {
                    q.input = a;
                };
                var r = 'checked' in a ? a.checked : a.defaultChecked;
                return q.state = {
                    checked: r
                }, q;
            }
            return (0, i.default)(p, [{
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
                        var q, r = this.props,
                            s = r.prefixCls,
                            t = r.className,
                            u = r.style,
                            v = r.name,
                            w = r.id,
                            x = r.type,
                            y = r.disabled,
                            z = r.readOnly,
                            A = r.tabIndex,
                            B = r.onClick,
                            C = r.onFocus,
                            D = r.onBlur,
                            E = r.onKeyDown,
                            F = r.onKeyPress,
                            G = r.onKeyUp,
                            H = r.autoFocus,
                            I = r.value,
                            J = r.required,
                            K = (0, f.default)(r, [
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
                            L = Object.keys(K).reduce(function(q, b) {
                                return 'aria-' !== b.substr(0, 5) && 'data-' !== b.substr(0, 5) && 'role' !== b || (q[b] = K[b]), q;
                            }, {}),
                            M = this.state.checked,
                            N = b(m)(s, t, (q = {}, (0, e.default)(q, ''.concat(s, '-checked'), M), (0, e.default)(q, ''.concat(s, '-disabled'), y), q));
                        return b(l).createElement('span', {
                            className: N,
                            style: u
                        }, b(l).createElement('input', (0, d.default)({
                            name: v,
                            id: w,
                            type: x,
                            required: J,
                            readOnly: z,
                            disabled: y,
                            tabIndex: A,
                            className: ''.concat(s, '-input'),
                            checked: !!M,
                            onClick: B,
                            onFocus: C,
                            onBlur: D,
                            onKeyUp: G,
                            onKeyDown: E,
                            onKeyPress: F,
                            onChange: this.handleChange,
                            autoFocus: H,
                            ref: this.saveInput,
                            value: I
                        }, L)), b(l).createElement('span', {
                            className: ''.concat(s, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(a, b) {
                    return 'checked' in a ? (0, g.default)((0, g.default)({}, b), {}, {
                        checked: a.checked
                    }) : null;
                }
            }]), p;
        }(l.Component);
    n.defaultProps = {
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
    var o = p;
}), c.register('b5p1k13', function(b, c) {
    function d() {
        return d = Object.assign || function(a) {
            for (var e = 1; e < v.length; e++) {
                var f = v[e];
                for (var g in f)
                    Object.prototype.hasOwnProperty.call(f, g) && (a[g] = f[g]);
            }
            return a;
        }, d.apply(this, v);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('WfHYJ18', function(b, c) {
    function d(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('cabca9', function(b, g) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('l2czd17');

    function e(a, b) {
        if (null == a)
            return {};
        var f, g, h = (0, d.default)(a, b);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(a);
            for (g = 0; g < i.length; g++)
                f = i[g], b.indexOf(f) >= 0 || Object.prototype.propertyIsEnumerable.call(a, f) && (h[f] = a[f]);
        }
        return h;
    }
}), c.register('l2czd17', function(b, c) {
    function d(a, b) {
        if (null == a)
            return {};
        var e, f, g = {},
            h = Object.keys(a);
        for (f = 0; f < h.length; f++)
            e = h[f], b.indexOf(e) >= 0 || (g[e] = a[e]);
        return g;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('aCkIb5', function(b, g) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('WfHYJ18');

    function e(a, b) {
        var f = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols(a);
            b && (g = g.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), f.push.apply(f, g);
        }
        return f;
    }

    function f(a) {
        for (var g = 1; g < v.length; g++) {
            var h = null != v[g] ? v[g] : {};
            g % 2 ? e(Object(h), !0).forEach(function(g) {
                (0, d.default)(a, g, h[g]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(h)) : e(Object(h)).forEach(function(g) {
                Object.defineProperty(a, g, Object.getOwnPropertyDescriptor(h, g));
            });
        }
        return a;
    }
}), c.register('PKxjP16', function(b, c) {
    function d(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('zTitA16', function(b, c) {
    function d(a, b) {
        for (var e = 0; e < b.length; e++) {
            var f = b[e];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(a, f.key, f);
        }
    }

    function e(a, b, c) {
        return b && d(a.prototype, b), c && d(a, c), a;
    }
    a(b.exports, 'default', function() {
        return e;
    });
}), c.register('MvitG9', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('/jzVl15');

    function e(a, b) {
        if ('function' != typeof b && null !== b)
            throw new TypeError('Super expression must either be null or a function');
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                writable: !0,
                configurable: !0
            }
        }), b && (0, d.default)(a, b);
    }
}), c.register('/jzVl15', function(b, c) {
    function d(a, b) {
        return d = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, d(a, b);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('oG3bd5', function(b, j) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('fmP4g15'),
        e = c('5UNjR15'),
        f = c('EDgo89');

    function g(a) {
        var h = (0, e.default)();
        return function() {
            var i, j = (0, d.default)(a);
            if (h) {
                var k = (0, d.default)(this).constructor;
                i = Reflect.construct(j, v, k);
            } else
                i = j.apply(this, v);
            return (0, f.default)(this, i);
        };
    }
}), c.register('fmP4g15', function(b, c) {
    function d(a) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, d(a);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('5UNjR15', function(b, c) {
    function d() {
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
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('EDgo89', function(d, d) {
    a(d.exports, 'default', function() {
        return f;
    });
    var d = c('V09ZX15'),
        e = c('//YgM17');

    function f(a, c) {
        if (c && ('object' === b(d)(c) || 'function' == typeof c))
            return c;
        if (void 0 !== c)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, e.default)(a);
    }
}), c.register('V09ZX15', function(a, b) {
    function d(b) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (a.exports = d = function(a) {
            return typeof a;
        }, a.exports.default = a.exports, a.exports.__esModule = !0) : (a.exports = d = function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, a.exports.default = a.exports, a.exports.__esModule = !0), d(b);
    }
    a.exports = d, a.exports.default = a.exports, a.exports.__esModule = !0;
}), c.register('//YgM17', function(b, c) {
    function d(a) {
        if (void 0 === a)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return a;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('bTRJM', function(b, d) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W');
    const f = e.lazy(() => c('FhxEZ0'));
    var g = a => (0, d.jsx)(e.Suspense, {
        fallback: a.fallback || null,
        children: (0, d.jsx)(f, {
            latex: a.latex
        })
    });
}), c.register('FhxEZ0', function(a, b) {
    a.exports = Promise.all([
        import('./' + c('tIOy4').resolve('8pe9D')),
        import('./' + c('tIOy4').resolve('5OCdz'))
    ]).then(() => c('feyVh'));
}), c.register('uzjvO4', function(b, c) {
    let d;
    var e;
    a(b.exports, 'HookType', function() {
        return d;
    }), (e = d || (d = {})).selectBox = 'selectBox', e.kit = 'kit', e.number = 'number';
}), c.register('SprP3', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    a(b.exports, 'LocalStorageNames', function() {
        return f;
    }), (e = d || (d = {})).time = 'time', e.target = 'target', e.race = 'race', e.allIn = 'allIn', (g = f || (f = {})).language = 'gimkit-3.0-game-language', g.currency = 'gimkit-game-currency', g.music = 'gimkit-music-track', g.allowGoogleTranslate = 'gimkit-google-translate-allowed', g.editorDefaultLanguage = 'gimkit-editor-v4-default-language', g.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', g.editorDefaultSubject = 'gimkit-editor-v4-default-subject', g.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', g.hookSavedOptions = 'gimkit-hook-saved-options';
}), c.register('bdX0N23', function(b, d) {
    a(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return e;
    });
    var d = c('3EnRx');
    const e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
}), c.register('PDLD/2', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    let h;
    var i;
    let j;
    let k;
    var l;
    a(b.exports, 'QuestionType', function() {
        return d;
    }), a(b.exports, 'Privacy', function() {
        return f;
    }), a(b.exports, 'GameStatus', function() {
        return h;
    }), a(b.exports, 'GameType', function() {
        return j;
    }), a(b.exports, 'GameGoal', function() {
        return k;
    }), a(b.exports, 'themes', function() {
        return q;
    }), a(b.exports, 'ExperienceSource', function() {
        return r;
    }), (e = d || (d = {})).multipleChoice = 'mc', e.textInput = 'text', (g = f || (f = {})).public = 'public', g.private = 'private', (i = h || (h = {})).setup = 'setup', i.join = 'join', i.teams = 'teams', i.gameplay = 'gameplay', i.results = 'results', (j || (j = {})).live = 'live', (l = k || (k = {})).time = 'time', l.race = 'race', l.allIn = 'allIn';
    const m = '#ffffff',
        n = '#000000';
    let o;
    var p;
    (p = o || (o = {})).easy = 'easy', p.medium = 'medium', p.hard = 'hard', p.veryHard = 'veryHard', p.veryVeryHard = 'veryVeryHard';
    const q = [{
            cost: 0,
            name: 'Default',
            description: 'Works fine, that\'s all',
            question: {
                background: '#303f9f',
                text: m
            },
            palette: [{
                    background: '#771322',
                    text: m
                },
                {
                    background: '#A85C15',
                    text: m
                },
                {
                    background: '#0D6B33',
                    text: m
                },
                {
                    background: '#076296',
                    text: m
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
                text: m
            },
            palette: [{
                    background: '#9E682A',
                    text: m
                },
                {
                    background: '#B54730',
                    text: m
                },
                {
                    background: '#8A9748',
                    text: m
                },
                {
                    background: '#F1B930',
                    text: m
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
                text: m
            },
            palette: [{
                    background: '#263238',
                    text: m
                },
                {
                    background: '#37474f',
                    text: m
                },
                {
                    background: '#455a64',
                    text: m
                },
                {
                    background: '#546e7a',
                    text: m
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
                text: m
            },
            palette: [{
                    background: '#220044',
                    text: m
                },
                {
                    background: '#330066',
                    text: m
                },
                {
                    background: '#3E007C',
                    text: m
                },
                {
                    background: '#4F1787',
                    text: m
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
                text: m
            },
            palette: [{
                    background: '#283593',
                    text: m
                },
                {
                    background: '#076296',
                    text: m
                },
                {
                    background: '#0277bd',
                    text: m
                },
                {
                    background: '#1565c0',
                    text: m
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
                text: m
            },
            palette: [{
                    background: '#385645',
                    text: m
                },
                {
                    background: '#425C49',
                    text: m
                },
                {
                    background: '#415641',
                    text: m
                },
                {
                    background: '#4C6349',
                    text: m
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
                text: m
            },
            palette: [{
                    background: '#F46F5A',
                    text: m
                },
                {
                    background: '#ED712D',
                    text: m
                },
                {
                    background: '#7A596A',
                    text: m
                },
                {
                    background: '#E8AB3C',
                    text: m
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
                text: m
            },
            palette: [{
                    background: '#001D3B',
                    text: m
                },
                {
                    background: '#FFAE52',
                    text: m
                },
                {
                    background: '#FE5963',
                    text: m
                },
                {
                    background: '#A71C94',
                    text: m
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
                background: n,
                text: '#FFCD2B'
            },
            palette: [{
                    background: '#FFCD2B',
                    text: n
                },
                {
                    background: '#FFC721',
                    text: n
                },
                {
                    background: '#FFD147',
                    text: n
                },
                {
                    background: '#FFCD38',
                    text: n
                }
            ],
            owned: !1,
            isActive: !1
        }
    ];
    let r;
    var s;
    (s = r || (r = {})).original = 'original', s.map = 'map';
}), c.register('+WQL73', function(b, c) {
    let d;
    var e;
    a(b.exports, 'MapModeType', function() {
        return d;
    }), (e = d || (d = {})).liveGame = 'liveGame', e.assignment = 'assignment';
}), c.register('CJCMN4', function(b, k) {
    a(b.exports, 'AnalyticsTrackEvent', function() {
        return h;
    });
    var d = c('pvZv3'),
        e = c('PjB0f'),
        f = c('61G7M'),
        g = c('OW/xn');
    const h = a => {
        var i, j, k;
        if ((window.gtag && !(null === (i = a.blockedSource) || void 0 === i ? void 0 : i.google) && window.gtag('event', a.event, a.properties), f.AnalyticsFlags.educatorOnly) && (null === (k = (0, e.getUser)()) || void 0 === k ? void 0 : k.accountType) !== d.default.educator)
            return;
        (null === (j = a.blockedSource) || void 0 === j ? void 0 : j.posthog) || (0, g.TrackPostHogEvent)({
            event: a.event,
            properties: a.properties,
            force: a.forcePostHog
        });
    };
}), c.register('U8PGt', function(b, i) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('uPP4W'),
        e = c('KBP3q'),
        f = c('vxwW1');
    var g = (a, b) => {
        const [h, i] = d.useState(() => {
            var j, k;
            const l = a && 'current' in a ? a.current : a;
            return l ? [
                l.offsetWidth,
                l.offsetHeight
            ] : [
                null !== (j = null == b ? void 0 : b.initialWidth) && void 0 !== j ? j : 0,
                null !== (k = null == b ? void 0 : b.initialHeight) && void 0 !== k ? k : 0
            ];
        });
        return (0, f.default)(() => {
            const j = a && 'current' in a ? a.current : a;
            j && i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }, [a]), (0, e.default)(a, a => {
            const j = a.target;
            i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }), h;
    };
}), c.register('KBP3q', function(b, l) {
    a(b.exports, 'default', function() {
        return j;
    });
    var d = c('tDeyh'),
        e = c('vxwW1'),
        f = c('X8LPJ'),
        g = c('wZuO1');
    let h;
    const i = () => h || (h = function() {
        const j = new Map(),
            k = new(0, d.default)((0, g.default)((k, c) => {
                var l;
                if (1 === k.length)
                    null === (l = j.get(k[0].target)) || void 0 === l || l(k[0], c);
                else
                    for (let m = 0; m < k.length; m++) {
                        var n;
                        null === (n = j.get(k[m].target)) || void 0 === n || n(k[m], c);
                    }
            }));
        return {
            observer: k,
            subscribe(c, l) {
                k.observe(c), j.set(c, l);
            },
            unsubscribe(c) {
                k.unobserve(c), j.delete(c);
            }
        };
    }());
    var j = function(a, b) {
        const k = i(),
            l = (0, f.default)(b);
        return (0, e.default)(() => {
            let m = !1;
            const n = a && 'current' in a ? a.current : a;
            if (n)
                return k.subscribe(n, (a, k) => {
                    m || l.current(a, k);
                }), () => {
                    m = !0, k.unsubscribe(n);
                };
        }, [
            a,
            k,
            l
        ]), k.observer;
    };
}), c.register('wZuO1', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = function(a) {
        var e = [],
            f = null,
            g = function() {
                for (var h = v.length, i = new Array(h), j = 0; j < h; j++)
                    i[j] = v[j];
                e = i, f || (f = requestAnimationFrame(function() {
                    f = null, a.apply(void 0, e);
                }));
            };
        return g.cancel = function() {
            f && (cancelAnimationFrame(f), f = null);
        }, g;
    };
}), c.register('fgVTE0', function(b, n) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('b5p1k12'),
        e = c('lWzbN'),
        f = c('uPP4W');
    c('uj3CK');
    var g = c('LS7Qv'),
        h = c('knVNm'),
        i = c('l/I4j'),
        j = 44;

    function k(a) {
        var l, m, n;
        return l = a, m = 0, n = 1, a = (Math.min(Math.max(m, l), n) - m) / (n - m), a = (a -= 1) * a * a + 1;
    }
    var l = f.forwardRef(function(a, b) {
            var m, n = a.classes,
                o = a.className,
                p = a.color,
                q = void 0 === p ? 'primary' : p,
                r = a.disableShrink,
                s = void 0 !== r && r,
                t = a.size,
                u = void 0 === t ? 40 : t,
                v = a.style,
                w = a.thickness,
                x = void 0 === w ? 3.6 : w,
                y = a.value,
                z = void 0 === y ? 0 : y,
                A = a.variant,
                B = void 0 === A ? 'indeterminate' : A,
                C = (0, e.default)(a, [
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
                D = {},
                E = {},
                F = {};
            if ('determinate' === B || 'static' === B) {
                var G = 2 * Math.PI * ((j - x) / 2);
                D.strokeDasharray = G.toFixed(3), F['aria-valuenow'] = Math.round(z), 'static' === B ? (D.strokeDashoffset = ''.concat(((100 - z) / 100 * G).toFixed(3), 'px'), E.transform = 'rotate(-90deg)') : (D.strokeDashoffset = ''.concat((m = (100 - z) / 100, m * m * G).toFixed(3), 'px'), E.transform = 'rotate('.concat((270 * k(z / 70)).toFixed(3), 'deg)'));
            }
            return f.createElement('div', (0, d.default)({
                className: (0, g.default)(n.root, o, 'inherit' !== q && n['color'.concat((0, i.default)(q))], {
                    indeterminate: n.indeterminate,
                    static: n.static
                } [B]),
                style: (0, d.default)({
                    width: u,
                    height: u
                }, E, v),
                ref: b,
                role: 'progressbar'
            }, F, C), f.createElement('svg', {
                className: n.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(j, ' ').concat(j)
            }, f.createElement('circle', {
                className: (0, g.default)(n.circle, s && n.circleDisableShrink, {
                    indeterminate: n.circleIndeterminate,
                    static: n.circleStatic
                } [B]),
                style: D,
                cx: j,
                cy: j,
                r: (j - x) / 2,
                fill: 'none',
                strokeWidth: x
            })));
        }),
        m = (0, h.default)(function(a) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: a.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: a.palette.primary.main
                },
                colorSecondary: {
                    color: a.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: a.transitions.create('stroke-dashoffset')
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
        })(l);
}), c.register('fzOja2', function(b, k) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('Nsg/l3'),
        g = c('PjB0f');
    var h = a => {
        const [i, j] = e.useState([]), [k] = e.useState(a.limit), [l, m] = e.useState(a.defaultPage), [n, o] = e.useState(!0), [p, q] = e.useState([]), [r, s] = e.useState(!1), t = e.useMemo(() => (a.modifyItems ? a.modifyItems(p) : p).map((i, j) => a.toRender(i, j)), [
            p.length,
            a.toRender
        ]), u = () => {
            if (i.includes(l))
                return;
            j(a => [
                ...a,
                l
            ]);
            const v = {
                page: l,
                limit: k
            };
            (0, g.request)({
                url: a.url,
                method: 'post',
                cacheKey: a.cacheKey,
                data: a.modifyBody ? a.modifyBody(v) : v,
                success: (i, j) => {
                    a.onTotalItems && !r && (a.onTotalItems(i.totalItems), s(!0)), i.items.forEach(i => {
                        a.onItemFetched && a.onItemFetched(i, j);
                    }), q(a => [
                        ...a,
                        ...i.items
                    ]), o(i.hasNextPage), m(i.nextPage);
                },
                error: () => {
                    a.onTotalItems && !r && (a.onTotalItems(0), s(!0)), o(!1);
                },
                both: () => j(a => a.filter(a => a !== v.page))
            });
        };
        return e.useEffect(u, []), !n && a.forceEmptyMessage || !n && 0 === p.length && a.emptyMessage ? a.emptyMessage(p) : (0, d.jsxs)(f.default, {
            dataLength: p.length,
            hasMore: n,
            style: a.scrollStyle,
            next: u,
            loader: a.loader || (0, d.jsx)('div', {}),
            scrollThreshold: a.scrollThreshold,
            endMessage: a.endMessage ? a.endMessage(p) : null,
            scrollableTarget: a.scrollableTarget,
            children: [
                a.prefix ? a.prefix() : null,
                t
            ]
        });
    };
}), c.register('Nsg/l3', function(i, j) {
    a(i.exports, 'default', function() {
        return l;
    });
    var d = c('uPP4W'),
        e = function(a, b) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(a, b) {
                a.__proto__ = b;
            } || function(a, b) {
                for (var f in b)
                    b.hasOwnProperty(f) && (a[f] = b[f]);
            }, e(a, b);
        };
    var f = function() {
        return f = Object.assign || function(a) {
            for (var g, h = 1, i = v.length; h < i; h++)
                for (var j in g = v[h])
                    Object.prototype.hasOwnProperty.call(g, j) && (a[j] = g[j]);
            return a;
        }, f.apply(this, v);
    };
    var g = 'Pixel',
        h = 'Percent',
        i = {
            unit: h,
            value: 0.8
        };

    function j(a) {
        return 'number' == typeof a ? {
            unit: h,
            value: 100 * a
        } : 'string' == typeof a ? a.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: g,
            value: parseFloat(a)
        } : a.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: h,
            value: parseFloat(a)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), i) : (console.warn('scrollThreshold should be string or number'), i);
    }
    var k = function(a) {
            function l(b) {
                var m = a.call(this, b) || this;
                return m.lastScrollTop = 0, m.actionTriggered = !1, m.startY = 0, m.currentY = 0, m.dragging = !1, m.maxPullDownDistance = 0, m.getScrollableTarget = function() {
                    return m.props.scrollableTarget instanceof HTMLElement ? m.props.scrollableTarget : 'string' == typeof m.props.scrollableTarget ? document.getElementById(m.props.scrollableTarget) : (null === m.props.scrollableTarget && console.warn('You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '), null);
                }, m.onStart = function(a) {
                    m.lastScrollTop || (m.dragging = !0, a instanceof MouseEvent ? m.startY = a.pageY : a instanceof TouchEvent && (m.startY = a.touches[0].pageY), m.currentY = m.startY, m._infScroll && (m._infScroll.style.willChange = 'transform', m._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'));
                }, m.onMove = function(a) {
                    m.dragging && (a instanceof MouseEvent ? m.currentY = a.pageY : a instanceof TouchEvent && (m.currentY = a.touches[0].pageY), m.currentY < m.startY || (m.currentY - m.startY >= Number(m.props.pullDownToRefreshThreshold) && m.setState({
                        pullToRefreshThresholdBreached: !0
                    }), m.currentY - m.startY > 1.5 * m.maxPullDownDistance || m._infScroll && (m._infScroll.style.overflow = 'visible', m._infScroll.style.transform = 'translate3d(0px, ' + (m.currentY - m.startY) + 'px, 0px)')));
                }, m.onEnd = function() {
                    m.startY = 0, m.currentY = 0, m.dragging = !1, m.state.pullToRefreshThresholdBreached && (m.props.refreshFunction && m.props.refreshFunction(), m.setState({
                        pullToRefreshThresholdBreached: !1
                    })), requestAnimationFrame(function() {
                        m._infScroll && (m._infScroll.style.overflow = 'auto', m._infScroll.style.transform = 'none', m._infScroll.style.willChange = 'none');
                    });
                }, m.onScrollListener = function(a) {
                    'function' == typeof m.props.onScroll && setTimeout(function() {
                        return m.props.onScroll && m.props.onScroll(a);
                    }, 0);
                    var n = m.props.height || m._scrollableNode ? a.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    m.actionTriggered || ((m.props.inverse ? m.isElementAtTop(n, m.props.scrollThreshold) : m.isElementAtBottom(n, m.props.scrollThreshold)) && m.props.hasMore && (m.actionTriggered = !0, m.setState({
                        showLoader: !0
                    }), m.props.next && m.props.next()), m.lastScrollTop = n.scrollTop);
                }, m.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, m.throttledOnScrollListener = function(a, b, m, n) {
                    var n, o = !1,
                        p = 0;

                    function q() {
                        n && clearTimeout(n);
                    }

                    function r() {
                        var s = this,
                            t = Date.now() - p,
                            u = v;

                        function w() {
                            p = Date.now(), m.apply(s, u);
                        }

                        function x() {
                            n = void 0;
                        }
                        o || (n && !n && w(), q(), void 0 === n && t > a ? w() : !0 !== b && (n = setTimeout(n ? x : w, void 0 === n ? a - t : a)));
                    }
                    return 'boolean' != typeof b && (n = m, m = b, b = void 0), r.cancel = function() {
                        q(), o = !0;
                    }, r;
                }(150, m.onScrollListener).bind(m), m.onStart = m.onStart.bind(m), m.onMove = m.onMove.bind(m), m.onEnd = m.onEnd.bind(m), m;
            }
            return function(a, b) {
                function m() {
                    this.constructor = a;
                }
                e(a, b), a.prototype = null === b ? Object.create(b) : (m.prototype = b.prototype, new m());
            }(l, a), l.prototype.componentDidMount = function() {
                if (void 0 === this.props.dataLength)
                    throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener('scroll', this.throttledOnScrollListener), 'number' == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener('touchstart', this.onStart), this.el.addEventListener('touchmove', this.onMove), this.el.addEventListener('touchend', this.onEnd), this.el.addEventListener('mousedown', this.onStart), this.el.addEventListener('mousemove', this.onMove), this.el.addEventListener('mouseup', this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), 'function' != typeof this.props.refreshFunction))
                    throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'');
            }, l.prototype.componentWillUnmount = function() {
                this.el && (this.el.removeEventListener('scroll', this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener('touchstart', this.onStart), this.el.removeEventListener('touchmove', this.onMove), this.el.removeEventListener('touchend', this.onEnd), this.el.removeEventListener('mousedown', this.onStart), this.el.removeEventListener('mousemove', this.onMove), this.el.removeEventListener('mouseup', this.onEnd)));
            }, l.prototype.UNSAFE_componentWillReceiveProps = function(a) {
                this.props.dataLength !== a.dataLength && (this.actionTriggered = !1, this.setState({
                    showLoader: !1
                }));
            }, l.prototype.isElementAtTop = function(a, b) {
                void 0 === b && (b = 0.8);
                var m = a === document.body || a === document.documentElement ? window.screen.availHeight : a.clientHeight,
                    n = j(b);
                return n.unit === g ? a.scrollTop <= n.value + m - a.scrollHeight + 1 || 0 === a.scrollTop : a.scrollTop <= n.value / 100 + m - a.scrollHeight + 1 || 0 === a.scrollTop;
            }, l.prototype.isElementAtBottom = function(a, b) {
                void 0 === b && (b = 0.8);
                var m = a === document.body || a === document.documentElement ? window.screen.availHeight : a.clientHeight,
                    n = j(b);
                return n.unit === g ? a.scrollTop + m >= a.scrollHeight - n.value : a.scrollTop + m >= n.value / 100 * a.scrollHeight;
            }, l.prototype.render = function() {
                var m = this,
                    n = f({
                        height: this.props.height || 'auto',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch'
                    }, this.props.style),
                    o = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                    p = this.props.pullDownToRefresh && this.props.height ? {
                        overflow: 'auto'
                    } : {};
                return b(d).createElement('div', {
                    style: p,
                    className: 'infinite-scroll-component__outerdiv'
                }, b(d).createElement('div', {
                    className: 'infinite-scroll-component ' + (this.props.className || ''),
                    ref: function(b) {
                        return m._infScroll = b;
                    },
                    style: n
                }, this.props.pullDownToRefresh && b(d).createElement('div', {
                    style: {
                        position: 'relative'
                    },
                    ref: function(b) {
                        return m._pullDown = b;
                    }
                }, b(d).createElement('div', {
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !o && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage));
            }, l;
        }(d.Component),
        l = m;
}), c.register('FfkIK1', function(b, d) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('lmfrI');
    let g;
    var h = a => (0, d.jsx)(i, {
        onClick: a.onClick,
        className: a.className,
        style: a.style,
        children: a.children
    });
    const i = e.default.div(g || (g = (a => a)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), f.default.White);
}), c.register('0Vm3k', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('3nT4r'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'EnterOutlined';
    var i = e.forwardRef(h);
}), c.register('3nT4r', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('eb1oQ2', function(b, l) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('uPP4W');

    function e() {
        const [, f] = d.useReducer(f => f + 1, 0);
        return f;
    }
}), c.register('hulaC5', function(l, m) {
    a(l.exports, 'responsiveArray', function() {
        return f;
    }), a(l.exports, 'default', function() {
        return g;
    });
    var d = c('uPP4W'),
        e = c('ffwc8');
    const f = [
        'xxl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs'
    ];

    function g() {
        const [, h] = (0, e.useToken)(), i = (h => ({
            xs: `(max-width: ${ h.screenXSMax }px)`,
            sm: `(min-width: ${ h.screenSM }px)`,
            md: `(min-width: ${ h.screenMD }px)`,
            lg: `(min-width: ${ h.screenLG }px)`,
            xl: `(min-width: ${ h.screenXL }px)`,
            xxl: `(min-width: ${ h.screenXXL }px)`
        }))((h => {
            const j = k,
                l = [].concat(f).reverse();
            return l.forEach((k, l) => {
                const m = k.toUpperCase(),
                    n = `screen${ m }Min`,
                    o = `screen${ m }`;
                if (!(j[n] <= j[o]))
                    throw new Error(`${ n }<=${ o } fails : !(${ j[n] }<=${ j[o] })`);
                if (l < l.length - 1) {
                    const p = `screen${ m }Max`;
                    if (!(j[o] <= j[p]))
                        throw new Error(`${ o }<=${ p } fails : !(${ j[o] }<=${ j[p] })`);
                    const q = `screen${ l[l + 1].toUpperCase() }Min`;
                    if (!(j[p] <= j[q]))
                        throw new Error(`${ p }<=${ q } fails : !(${ j[p] }<=${ j[q] })`);
                }
            }), k;
        })(h));
        return b(d).useMemo(() => {
            const j = new Map();
            let k = -1,
                l = {};
            return {
                matchHandlers: {},
                dispatch: k => (l = k, j.forEach(j => j(l)), j.size >= 1),
                subscribe(i) {
                    return j.size || this.register(), k += 1, j.set(k, i), i(l), k;
                },
                unsubscribe(k) {
                    j.delete(k), j.size || this.unregister();
                },
                unregister() {
                    Object.keys(i).forEach(j => {
                        const m = i[j],
                            n = this.matchHandlers[m];
                        null == n || n.mql.removeListener(null == n ? void 0 : n.listener);
                    }), j.clear();
                },
                register() {
                    Object.keys(i).forEach(j => {
                        const m = i[j],
                            n = m => {
                                let {
                                    matches: o
                                } = p;
                                this.dispatch(Object.assign(Object.assign({}, l), {
                                    [j]: o
                                }));
                            },
                            o = window.matchMedia(m);
                        o.addListener(n), this.matchHandlers[m] = {
                            mql: o,
                            listener: n
                        }, n(o);
                    });
                },
                responsiveMap: i
            };
        }, [h]);
    }
}), c.register('u1rFO25', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.lazyWithPreload = void 0;
    var d = c('uPP4W');

    function e(a) {
        var f, g, h = (0, d.lazy)(a),
            i = (0, d.forwardRef)(function(a, g) {
                var j = (0, d.useRef)(null != f ? f : h);
                return (0, d.createElement)(j.current, Object.assign(g ? {
                    ref: g
                } : {}, a));
            });
        return i.preload = function() {
            return g || (g = a().then(function(a) {
                return f = a.default;
            })), g;
        }, i;
    }
    a.exports.lazyWithPreload = e, a.exports.default = e;
}), c.register('b+LEP25', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('Kl7ed13'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'QuestionCircleOutlined';
    var i = e.forwardRef(h);
}), c.register('Kl7ed13', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('QtkH71', function(b, n) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('0RCfO0'),
        e = c('WjvOI1');
    const f = d.default;
    f.Group = e.default, f.__ANT_CHECKBOX = !0;
    var g = h;
}), c.register('0RCfO0', function(n, o) {
    a(n.exports, 'default', function() {
        return q;
    }, function(a) {
        return q = a;
    });
    var d = c('VAIs1'),
        e = c('CrMLT9'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('LhviC'),
        i = c('WjvOI1'),
        j = c('Cm5dS'),
        k = c('qBaIr0'),
        l = function(a, b) {
            var m = {};
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && b.indexOf(n) < 0 && (m[n] = a[n]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(a); o < n.length; o++)
                    b.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (m[n[o]] = a[n[o]]);
            }
            return m;
        };
    const m = (a, c) => {
        var n, {
                prefixCls: o,
                className: p,
                rootClassName: q,
                children: r,
                indeterminate: s = !1,
                style: t,
                onMouseEnter: u,
                onMouseLeave: v,
                skipGroup: w = !1,
                disabled: x
            } = y,
            z = l(y, [
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
            getPrefixCls: A,
            direction: B
        } = f.useContext(g.ConfigContext), C = f.useContext(i.GroupContext), {
            isFormItemInput: D
        } = f.useContext(h.FormItemInputContext), E = f.useContext(j.default), F = null !== (n = (null == C ? void 0 : C.disabled) || x) && void 0 !== n ? n : E, G = f.useRef(z.value);
        f.useEffect(() => {
            null == C || C.registerValue(z.value);
        }, []), f.useEffect(() => {
            if (!w)
                return z.value !== G.current && (null == C || C.cancelValue(G.current), null == C || C.registerValue(z.value), G.current = z.value), () => null == C ? void 0 : C.cancelValue(z.value);
        }, [z.value]);
        const H = A('checkbox', o),
            [I, J] = (0, k.default)(H),
            K = Object.assign({}, z);
        C && !w && (K.onChange = function() {
            z.onChange && z.onChange.apply(z, arguments), C.toggleOption && C.toggleOption({
                label: r,
                value: z.value
            });
        }, K.name = C.name, K.checked = C.value.includes(z.value));
        const L = b(d)({
                [`${ H }-wrapper`]: !0,
                [`${ H }-rtl`]: 'rtl' === B,
                [`${ H }-wrapper-checked`]: K.checked,
                [`${ H }-wrapper-disabled`]: F,
                [`${ H }-wrapper-in-form-item`]: D
            }, p, q, J),
            M = b(d)({
                [`${ H }-indeterminate`]: s
            }, J),
            N = s ? 'mixed' : void 0;
        return I(f.createElement('label', {
            className: L,
            style: t,
            onMouseEnter: u,
            onMouseLeave: v
        }, f.createElement(e.default, Object.assign({
            'aria-checked': N
        }, K, {
            prefixCls: H,
            className: M,
            disabled: F,
            ref: c
        })), void 0 !== r && f.createElement('span', null, r)));
    };
    var n = f.forwardRef(m);
}), c.register('WjvOI1', function(m, n) {
    a(m.exports, 'GroupContext', function() {
        return l;
    }, function(a) {
        return l = a;
    }), a(m.exports, 'default', function() {
        return r;
    }, function(a) {
        return r = a;
    });
    var d = c('P7Ub/'),
        e = c('VAIs1'),
        f = c('xORK+'),
        g = c('uPP4W'),
        h = c('qEw51'),
        i = c('0RCfO0'),
        j = c('qBaIr0'),
        k = function(a, b) {
            var l = {};
            for (var m in a)
                Object.prototype.hasOwnProperty.call(a, m) && b.indexOf(m) < 0 && (l[m] = a[m]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for (m = Object.getOwnPropertySymbols(a); n < m.length; n++)
                    b.indexOf(m[n]) < 0 && Object.prototype.propertyIsEnumerable.call(a, m[n]) && (l[m[n]] = a[m[n]]);
            }
            return l;
        };
    const l = g.createContext(null),
        m = (a, c) => {
            var {
                defaultValue: n,
                children: o,
                options: p = [],
                prefixCls: q,
                className: r,
                rootClassName: s,
                style: t,
                onChange: u
            } = v, w = k(v, [
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
                getPrefixCls: x,
                direction: y
            } = g.useContext(h.ConfigContext), [z, A] = g.useState(w.value || n || []), [B, C] = g.useState([]);
            g.useEffect(() => {
                'value' in w && A(w.value || []);
            }, [w.value]);
            const D = () => p.map(v => 'string' == typeof v || 'number' == typeof v ? {
                    label: v,
                    value: v
                } : v),
                E = x('checkbox', q),
                F = `${ E }-group`,
                [G, H] = (0, j.default)(E),
                I = (0, f.default)(w, [
                    'value',
                    'disabled'
                ]);
            p && p.length > 0 && (o = D().map(v => g.createElement(i.default, {
                prefixCls: E,
                key: v.value.toString(),
                disabled: 'disabled' in v ? v.disabled : w.disabled,
                value: v.value,
                checked: z.includes(v.value),
                onChange: v.onChange,
                className: `${ F }-item`,
                style: v.style
            }, v.label)));
            const J = {
                    toggleOption: v => {
                        const K = z.indexOf(v.value),
                            L = (0, d.default)(z); -
                        1 === K ? L.push(v.value) : L.splice(K, 1), 'value' in w || A(L);
                        const M = D();
                        null == u || u(L.filter(v => B.includes(v)).sort((v, K) => M.findIndex(K => K.value === v) - M.findIndex(v => v.value === K)));
                    },
                    value: z,
                    disabled: w.disabled,
                    name: w.name,
                    registerValue: v => {
                        C(b => [].concat((0, d.default)(b), [v]));
                    },
                    cancelValue: v => {
                        C(b => b.filter(b => b !== v));
                    }
                },
                K = b(e)(F, {
                    [`${ F }-rtl`]: 'rtl' === y
                }, r, s, H);
            return G(g.createElement('div', Object.assign({
                className: K,
                style: t
            }, I, {
                ref: c
            }), g.createElement(l.Provider, {
                value: J
            }, o)));
        },
        n = g.forwardRef(m);
    var o = g.memo(n);
}), c.register('qBaIr0', function(b, n) {
    a(b.exports, 'getStyle', function() {
        return j;
    }), a(b.exports, 'default', function() {
        return k;
    });
    var d = c('M5GjZ'),
        e = c('vvwoA'),
        f = c('jnIuq'),
        g = c('P38j/');
    const h = new(0, d.Keyframes)('antCheckboxEffect', {
            '0%': {
                transform: 'scale(1)',
                opacity: 0.5
            },
            '100%': {
                transform: 'scale(1.6)',
                opacity: 0
            }
        }),
        i = a => {
            const {
                checkboxCls: j
            } = k, l = `${ j }-wrapper`;
            return [{
                    [`${ j }-group`]: Object.assign(Object.assign({}, (0, g.resetComponent)(k)), {
                        display: 'inline-flex'
                    }),
                    [l]: Object.assign(Object.assign({}, (0, g.resetComponent)(k)), {
                        display: 'inline-flex',
                        alignItems: 'baseline',
                        cursor: 'pointer',
                        '&:after': {
                            display: 'inline-block',
                            width: 0,
                            overflow: 'hidden',
                            content: '\'\\a0\''
                        },
                        [`& + ${ l }`]: {
                            marginInlineStart: k.marginXS
                        },
                        [`&${ l }-in-form-item`]: {
                            'input[type="checkbox"]': {
                                width: 14,
                                height: 14
                            }
                        }
                    }),
                    [j]: Object.assign(Object.assign({}, (0, g.resetComponent)(k)), {
                        top: '0.2em',
                        position: 'relative',
                        whiteSpace: 'nowrap',
                        lineHeight: 1,
                        cursor: 'pointer',
                        [`${ j }-input`]: {
                            position: 'absolute',
                            inset: 0,
                            zIndex: 1,
                            width: '100%',
                            height: '100%',
                            cursor: 'pointer',
                            opacity: 0,
                            [`&:focus-visible + ${ j }-inner`]: Object.assign({}, (0, g.genFocusOutline)(k))
                        },
                        [`${ j }-inner`]: {
                            boxSizing: 'border-box',
                            position: 'relative',
                            top: 0,
                            insetInlineStart: 0,
                            display: 'block',
                            width: k.checkboxSize,
                            height: k.checkboxSize,
                            direction: 'ltr',
                            backgroundColor: k.colorBgContainer,
                            border: `${ k.lineWidth }px ${ k.lineType } ${ k.colorBorder }`,
                            borderRadius: k.borderRadiusSM,
                            borderCollapse: 'separate',
                            transition: `all ${ k.motionDurationSlow }`,
                            '&:after': {
                                boxSizing: 'border-box',
                                position: 'absolute',
                                top: '50%',
                                insetInlineStart: '21.5%',
                                display: 'table',
                                width: k.checkboxSize / 14 * 5,
                                height: k.checkboxSize / 14 * 8,
                                border: `${ k.lineWidthBold }px solid ${ k.colorWhite }`,
                                borderTop: 0,
                                borderInlineStart: 0,
                                transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                                opacity: 0,
                                content: '""',
                                transition: `all ${ k.motionDurationFast } ${ k.motionEaseInBack }, opacity ${ k.motionDurationFast }`
                            }
                        },
                        '& + span': {
                            paddingInlineStart: k.paddingXS,
                            paddingInlineEnd: k.paddingXS
                        }
                    })
                },
                {
                    [j]: {
                        '&-indeterminate': {
                            [`${ j }-inner`]: {
                                '&:after': {
                                    top: '50%',
                                    insetInlineStart: '50%',
                                    width: k.fontSizeLG / 2,
                                    height: k.fontSizeLG / 2,
                                    backgroundColor: k.colorPrimary,
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
                    [`${ l }:hover ${ j }:after`]: {
                        visibility: 'visible'
                    },
                    [`\n        ${ l }:not(${ l }-disabled),\n        ${ j }:not(${ j }-disabled)\n      `]: {
                        [`&:hover ${ j }-inner`]: {
                            borderColor: k.colorPrimary
                        }
                    },
                    [`${ l }:not(${ l }-disabled)`]: {
                        [`&:hover ${ j }-checked:not(${ j }-disabled) ${ j }-inner`]: {
                            backgroundColor: k.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ j }-checked:not(${ j }-disabled):after`]: {
                            borderColor: k.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ j }-checked`]: {
                        [`${ j }-inner`]: {
                            backgroundColor: k.colorPrimary,
                            borderColor: k.colorPrimary,
                            '&:after': {
                                opacity: 1,
                                transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                                transition: `all ${ k.motionDurationMid } ${ k.motionEaseOutBack } ${ k.motionDurationFast }`
                            }
                        },
                        '&:after': {
                            position: 'absolute',
                            top: 0,
                            insetInlineStart: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: k.borderRadiusSM,
                            visibility: 'hidden',
                            border: `${ k.lineWidthBold }px solid ${ k.colorPrimary }`,
                            animationName: h,
                            animationDuration: k.motionDurationSlow,
                            animationTimingFunction: 'ease-in-out',
                            animationFillMode: 'backwards',
                            content: '""',
                            transition: `all ${ k.motionDurationSlow }`
                        }
                    },
                    [`\n        ${ l }-checked:not(${ l }-disabled),\n        ${ j }-checked:not(${ j }-disabled)\n      `]: {
                        [`&:hover ${ j }-inner`]: {
                            backgroundColor: k.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ j }:after`]: {
                            borderColor: k.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ l }-disabled`]: {
                        cursor: 'not-allowed'
                    },
                    [`${ j }-disabled`]: {
                        [`&, ${ j }-input`]: {
                            cursor: 'not-allowed',
                            pointerEvents: 'none'
                        },
                        [`${ j }-inner`]: {
                            background: k.colorBgContainerDisabled,
                            borderColor: k.colorBorder,
                            '&:after': {
                                borderColor: k.colorTextDisabled
                            }
                        },
                        '&:after': {
                            display: 'none'
                        },
                        '& + span': {
                            color: k.colorTextDisabled
                        },
                        [`&${ j }-indeterminate ${ j }-inner::after`]: {
                            background: k.colorTextDisabled
                        }
                    }
                }
            ];
        };

    function j(a, b) {
        const k = (0, f.merge)(b, {
            checkboxCls: `.${ a }`,
            checkboxSize: b.controlInteractiveSize
        });
        return [i(k)];
    }
    var k = (0, e.default)('Checkbox', (a, b) => {
        let {
            prefixCls: l
        } = m;
        return [j(l, a)];
    });
});