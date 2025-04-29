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
c.register('0MIsA', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _l;
    });
    var g = c('gRbUn');
    c('O0Kav');
    var h = c('6jmvl'),
        i = c('/1vqe'),
        j = c('yCoVs'),
        k = c('CNMH3');
    var _l = () => (0, g.jsx)(k.default.Provider, {
        value: i.default,
        children: (0, g.jsx)(h.Provider, {
            ...i.default,
            children: (0, g.jsx)(j.default, {})
        })
    });
}), c.register('/1vqe', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('1VAOL'),
        g = c('aDNRx');
    var _h = {
        navigation: new(0, f.default)(),
        kits: new(0, g.default)()
    };
}), c.register('1VAOL', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('4F2ZN'),
        g = c('JkQCT');
    class h {
        constructor() {
            this.archiveModalShow = !1, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], h.prototype, 'archiveModalShow', void 0);
    var _i = h;
}), c.register('aDNRx', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('4F2ZN'),
        g = c('JkQCT');
    class h {
        constructor() {
            this.kitAttemptedAction = 'open', (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], h.prototype, 'kitAttemptedAction', void 0);
    var _i = h;
}), c.register('yCoVs', function(d, e) {
    a(d.exports, 'default', function() {
        return _J;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('8KqQ+'),
        j = c('4z4j7'),
        k = c('Eh2Wh'),
        l = c('quE27'),
        m = c('/6ufv'),
        n = c('NtS6m'),
        o = c('hecDa'),
        p = c('aYtVg'),
        q = c('iJ5QR'),
        r = c('rjK4/'),
        s = c('X8He6'),
        t = c('tBC08'),
        u = c('tJvRE'),
        v = c('M3OCl2'),
        w = c('zOtFd24'),
        x = c('nKuOQ'),
        y = c('t52Ep'),
        z = c('qkIKn'),
        A = c('cSZGQ'),
        B = c('ZIYAX24');
    let C, D, E, F = a => a;
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
                            openUpgradeModal: K => {
                                O(null != K && K), L();
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
}), c.register('4z4j7', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('F5A7G'),
        i = c('wkclq'),
        j = c('u4s09'),
        k = c('8KqQ+'),
        l = c('g3mPI'),
        m = c('IGWGM'),
        n = c('zcfNM'),
        o = c('+cTfn'),
        p = c('nKuOQ'),
        q = c('quE27'),
        r = c('47Z69');
    let s;
    const t = j.default.div.attrs({
        className: 'flex-column'
    })(s || (s = (a => a)`
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
}), c.register('F5A7G', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('Jypf5'),
        i = c('/rHXU'),
        j = c('poCGZ'),
        k = c('nKuOQ'),
        l = c('quE27'),
        m = c('KxkP827'),
        n = c('rLXLn'),
        o = c('YhH4+'),
        p = c('zFJz/'),
        q = c('IPaxn'),
        r = c('zcfNM'),
        s = c('qkIKn');
    const t = g.lazy(() => c('anQ/T'));
    var _u = () => {
        var v, w, x, y, z;
        const {
            data: A,
            isLoading: B
        } = (0, p.default)(), {
            id: C
        } = (0, r.useParams)(), D = (0, s.IsEducator)() && (null === (v = (0, l.getUser)()) || void 0 === v ? void 0 : v.schoolId) && 'school' === C;
        var E;
        const F = null !== (E = null === (w = null == A || null === (x = A.folders) || void 0 === x ? void 0 : x.find(v => v._id === C)) || void 0 === w ? void 0 : w._id) && void 0 !== E ? E : '';
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
}), c.register('Jypf5', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('g7mv/'),
        h = c('hQxzs'),
        i = c('t52Ep'),
        j = c('quE27');
    var _k = a => {
        var l;
        const m = [],
            n = [],
            o = null === (l = a.folders) || void 0 === l ? void 0 : l.find(l => l._id === a.selectedFolder);
        a.kits.forEach(l => {
            if (a.selectedFolder) {
                if (!o)
                    return;
                if (!o.games.includes(l._id))
                    return;
            }
            l.isArchived ? n.push(l) : m.push(l);
        });
        const p = [
            ...m,
            ...n
        ];
        var q;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(j.Title, {
                    title: null !== (q = null == o ? void 0 : o.title) && void 0 !== q ? q : 'Kits'
                }),
                !p.length && a.selectedFolder ? (0, f.jsxs)('div', {
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
                        children: p.map(l => (0, f.jsx)('div', {
                            children: (0, f.jsx)(g.default, {
                                game: l,
                                folderId: a.selectedFolder
                            })
                        }, 'dashboard-kit-' + l._id))
                    })
                })
            ]
        });
    };
}), c.register('g7mv/', function(d, e) {
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
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('rLQJQ7'),
        i = c('Y6i538'),
        j = c('+Nyqr7'),
        k = c('1ZCzi'),
        l = c('0L+oa1'),
        m = c('blgvS'),
        n = c('6G7ga'),
        o = c('LCFQW3'),
        p = c('zcv8p4'),
        q = c('P1KtI'),
        r = c('QZ0Z+'),
        s = c('M3JwW'),
        t = c('xAv1a'),
        u = c('AE7vR'),
        v = c('LBLT38'),
        w = c('u4s09'),
        x = c('8KqQ+'),
        y = c('Eh2Wh'),
        z = c('6jmvl'),
        A = c('quE27'),
        B = c('nKuOQ'),
        C = c('HFnro8'),
        D = c('zM0vP'),
        E = c('Ja2o7'),
        F = c('CNMH3'),
        G = c('hecDa'),
        H = c('jRlyE'),
        I = c('KxkP827'),
        J = c('Tzf4u'),
        K = c('zFJz/'),
        L = c('Rskyt'),
        M = c('lptuh'),
        N = c('7GnGD2'),
        O = c('BFmAg'),
        P = c('qkIKn');
    let Q, R, S, T, U, V, W, X, Y, Z = a => a;
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
    var _jb = (0, z.observer)(a => {
        const {
            kits: kb,
            navigation: lb
        } = g.useContext(F.default), [mb, nb, ob] = (0, A.useBoolean)(!1), [pb, qb, rb] = (0, A.useBoolean)(!1), [sb, tb] = g.useState(E.IExperiencePickerMode.liveGame), [ub, vb] = g.useState(null), {
            game: wb
        } = a, xb = g.useMemo(() => wb.createdAt ? `Created ${ b(J)(wb.createdAt).fromNow() }` : '', [
            wb.editCount,
            wb.updatedAt,
            wb.createdAt
        ]), yb = g.useCallback(a => !!wb.isArchived && (kb.kitAttemptedAction = a, lb.archiveModalShow = !0, !0), [wb.isArchived]), zb = () => {
            yb('open') || (0, I.NavigateTo)(`/view/${ wb._id }`);
        }, Ab = () => {
            yb('edit') || (0, I.NavigateTo)(B.KIT_CREATOR + `/${ wb._id }/editor`);
        }, Bb = () => {
            yb('copy') || (!(0, P.IsEducator)() || (0, A.isUpgraded)() ? (0, A.copyKit)({
                kitId: wb._id,
                onSuccess: () => {
                    (0, K.invalidateKits)(), (0, I.NavigateTo)(B.KITS);
                },
                onFailure: () => (0, M.throwError)({
                    title: 'Error copying kit'
                })
            }) : vb({
                id: 'self-copy',
                ...N.UpgradeModal_CopyKit
            }));
        }, Cb = () => {
            yb('make changes to') || (!(0, P.IsEducator)() || (0, A.isUpgraded)() ? nb() : vb({
                id: 'folders',
                ...O.UpgradeModal_Folders
            }));
        }, Db = a => {
            (0, A.request)({
                url: '/api/games/archived',
                data: {
                    id: wb._id,
                    archived: a
                },
                success: () => (0, K.invalidateKits)()
            });
        }, Eb = () => Db(!0), Fb = () => Db(!1), Gb = () => {
            (0, A.request)({
                url: '/api/folders/removeGame',
                method: 'post',
                data: {
                    gameId: wb._id,
                    folderId: a.folderId
                },
                success: () => {
                    (0, K.invalidateKits)();
                },
                error: a => {
                    (0, A.throwMessageError)({
                        e: a,
                        default: {
                            title: 'There was an error removing this Kit from this folder.'
                        }
                    });
                }
            });
        }, Hb = () => {
            u.default.confirm({
                title: 'Are you sure you want to delete this kit?',
                cancelText: 'No',
                okText: 'Yes',
                onOk: () => {
                    (0, A.request)({
                        url: '/api/games/delete',
                        data: {
                            id: wb._id
                        },
                        success: () => {
                            (0, K.invalidateKits)();
                        },
                        error: a => (0, A.throwMessageError)({
                            e: a,
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
                                    onClick: zb,
                                    children: [
                                        (0, f.jsx)('div', {
                                            children: (0, f.jsx)(C.default, {
                                                image: wb.gif,
                                                size: _$,
                                                blockModalOpen: !0,
                                                onClick: zb
                                            })
                                        }),
                                        (0, f.jsxs)(_cb, {
                                            children: [
                                                (0, f.jsxs)(_db, {
                                                    children: [
                                                        (0, f.jsx)(eb, {
                                                            children: wb.title
                                                        }),
                                                        wb.isArchived && (0, f.jsx)(v.default, {
                                                            style: {
                                                                marginLeft: 5
                                                            },
                                                            children: 'Archived'
                                                        })
                                                    ]
                                                }),
                                                (0, f.jsx)(_fb, {
                                                    children: xb
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
                                                        yb('play') || (tb(E.IExperiencePickerMode.liveGame), qb());
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
                                                        yb('assign') || (tb(E.IExperiencePickerMode.assignment), qb());
                                                    },
                                                    children: 'Assign HW'
                                                })
                                            ]
                                        }),
                                        (0, f.jsx)(ib, {
                                            children: (0, f.jsx)(s.default, {
                                                overlay: (() => {
                                                    const {
                                                        isArchived: Ib
                                                    } = wb;
                                                    return (0, f.jsxs)(t.default, {
                                                        children: [
                                                            (0, f.jsxs)(t.default.Item, {
                                                                onClick: zb,
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
                                                                onClick: Ab,
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
                                                                onClick: Bb,
                                                                children: [
                                                                    (0, f.jsx)(h.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    'Copy'
                                                                ]
                                                            }, 'copy'),
                                                            a.folderId ? null : (0, f.jsxs)(t.default.Item, {
                                                                onClick: Cb,
                                                                children: [
                                                                    (0, f.jsx)(m.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    'Add to Folder'
                                                                ]
                                                            }, 'folder'),
                                                            a.folderId ? (0, f.jsxs)(t.default.Item, {
                                                                onClick: Gb,
                                                                children: [
                                                                    (0, f.jsx)(m.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    'Remove from Folder'
                                                                ]
                                                            }, 'folder') : null,
                                                            Ib ? (0, f.jsxs)(t.default.Item, {
                                                                onClick: Hb,
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
                                                                onClick: Ib ? Fb : Eb,
                                                                children: [
                                                                    (0, f.jsx)(l.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    Ib ? 'Unarchive' : 'Archive'
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
                    open: mb,
                    close: ob,
                    kitId: wb._id
                }),
                pb ? sb !== E.IExperiencePickerMode.assignment || (0, A.isUpgraded)() ? (0, f.jsx)(D.default, {
                    gameId: wb._id,
                    close: rb,
                    mode: sb
                }) : (0, f.jsx)(G.default, {
                    id: 'assignment creation',
                    visible: pb,
                    close: rb,
                    copy: {
                        title: H.ASSIGNMENT_UPSELL_TITLE,
                        description: H.ASSIGNMENT_UPSELL_DESCRIPTION
                    }
                }) : null,
                ub ? (0, f.jsx)(G.default, {
                    id: ub.id,
                    visible: !0,
                    close: () => vb(null),
                    copy: {
                        title: ub.title,
                        description: ub.description
                    }
                }) : null
            ]
        });
    });
}), c.register('rLQJQ7', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('M2CB57'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CopyOutlined';
    var _k = g.forwardRef(j);
}), c.register('M2CB57', function(d, e) {
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
}), c.register('Y6i538', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('goKxN8'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DeleteOutlined';
    var _k = g.forwardRef(j);
}), c.register('goKxN8', function(d, e) {
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
}), c.register('+Nyqr7', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('lzm1Z7'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'EditOutlined';
    var _k = g.forwardRef(j);
}), c.register('lzm1Z7', function(d, e) {
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
}), c.register('0L+oa1', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('jGayL1'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'FilterOutlined';
    var _k = g.forwardRef(j);
}), c.register('jGayL1', function(d, e) {
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
}), c.register('6G7ga', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('Q3lkd'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'FullscreenOutlined';
    var _k = g.forwardRef(j);
}), c.register('Q3lkd', function(d, e) {
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
}), c.register('LCFQW3', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('qovyz3'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'PaperClipOutlined';
    var _k = g.forwardRef(j);
}), c.register('qovyz3', function(d, e) {
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
}), c.register('zcv8p4', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('FBlYU4'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'PlayCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('FBlYU4', function(d, e) {
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
}), c.register('LBLT38', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    }, function(f) {
        return _u = f;
    });
    var f = c('ReZvd'),
        g = c('/U36/'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('puH1V'),
        k = c('Zs019'),
        l = c('4AW2P8'),
        m = c('8/APV8'),
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
    const o = (a, c) => {
            var {
                prefixCls: p,
                className: q,
                rootClassName: r,
                style: s,
                children: t,
                icon: _u,
                color: v,
                onClose: w,
                closeIcon: x,
                closable: y = !1
            } = a, z = n(a, [
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
                getPrefixCls: A,
                direction: B
            } = h.useContext(i.ConfigContext), [C, D] = h.useState(!0);
            h.useEffect(() => {
                'visible' in z && D(z.visible);
            }, [z.visible]);
            const E = (0, j.isPresetColor)(v) || (0, j.isPresetStatusColor)(v),
                F = Object.assign({
                    backgroundColor: v && !E ? v : void 0
                }, s),
                G = A('tag', p),
                [H, I] = (0, m.default)(G),
                J = b(g)(G, {
                    [`${ G }-${ v }`]: E,
                    [`${ G }-has-color`]: v && !E,
                    [`${ G }-hidden`]: !C,
                    [`${ G }-rtl`]: 'rtl' === B
                }, q, r, I),
                K = a => {
                    a.stopPropagation(), null == w || w(a), a.defaultPrevented || D(!1);
                },
                L = 'function' == typeof z.onClick || t && 'a' === t.type,
                M = _u || null,
                N = M ? h.createElement(h.Fragment, null, M, h.createElement('span', null, t)) : t,
                O = h.createElement('span', Object.assign({}, z, {
                    ref: c,
                    className: J,
                    style: F
                }), N, y ? x ? h.createElement('span', {
                    className: `${ G }-close-icon`,
                    onClick: K
                }, x) : h.createElement(f.default, {
                    className: `${ G }-close-icon`,
                    onClick: K
                }) : null);
            return H(L ? h.createElement(k.default, null, O) : O);
        },
        p = h.forwardRef(o);
    p.CheckableTag = l.default;
    var q = p;
}), c.register('4AW2P8', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    }, function(f) {
        return _k = f;
    });
    var f = c('/U36/'),
        g = c('O0Kav'),
        h = c('R2nG3'),
        i = c('8/APV8'),
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
    var _k = a => {
        var {
            prefixCls: l,
            className: m,
            checked: n,
            onChange: o,
            onClick: p
        } = a, q = j(a, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: r
        } = g.useContext(h.ConfigContext), s = r('tag', l), [t, u] = (0, i.default)(s), v = b(f)(s, {
            [`${ s }-checkable`]: !0,
            [`${ s }-checkable-checked`]: n
        }, m, u);
        return t(g.createElement('span', Object.assign({}, q, {
            className: v,
            onClick: a => {
                null == o || o(!n), null == p || p(a);
            }
        })));
    };
}), c.register('8/APV8', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('GhPPX'),
        g = c('qJkLY'),
        h = c('zn07B8'),
        i = c('OVjjp'),
        j = c('/zzpx');
    const k = (a, d, c) => {
            const l = (0, h.default)(c);
            return {
                [`${ a.componentCls }-${ d }`]: {
                    color: a[`color${ c }`],
                    background: a[`color${ l }Bg`],
                    borderColor: a[`color${ l }Border`]
                }
            };
        },
        l = a => (0, i.genPresetColor)(a, (d, c) => {
            let {
                textColor: m,
                lightBorderColor: n,
                lightColor: o,
                darkColor: p
            } = c;
            return {
                [`${ a.componentCls }-${ d }`]: {
                    color: m,
                    background: o,
                    borderColor: n,
                    '&-inverse': {
                        color: a.colorTextLightSolid,
                        background: p,
                        borderColor: p
                    }
                }
            };
        }),
        m = a => {
            const {
                paddingXXS: n,
                lineWidth: o,
                tagPaddingHorizontal: p,
                componentCls: q
            } = a, r = p - o, s = n - o;
            return {
                [q]: Object.assign(Object.assign({}, (0, j.resetComponent)(a)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: a.marginXS,
                    paddingInline: r,
                    fontSize: a.tagFontSize,
                    lineHeight: `${ a.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: a.tagDefaultBg,
                    border: `${ a.lineWidth }px ${ a.lineType } ${ a.colorBorder }`,
                    borderRadius: a.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ a.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ q }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: a.tagDefaultColor
                    },
                    [`${ q }-close-icon`]: {
                        marginInlineStart: s,
                        color: a.colorTextDescription,
                        fontSize: a.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ a.motionDurationMid }`,
                        '&:hover': {
                            color: a.colorTextHeading
                        }
                    },
                    [`&${ q }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ a.iconCls }-close, ${ a.iconCls }-close:hover`]: {
                            color: a.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ q }-checkable-checked):hover`]: {
                            color: a.colorPrimary,
                            backgroundColor: a.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: a.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: a.colorPrimary,
                            '&:hover': {
                                backgroundColor: a.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: a.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ a.iconCls } + span, > span + ${ a.iconCls }`]: {
                        marginInlineStart: r
                    }
                })
            };
        };
    var _n = (0, f.default)('Tag', a => {
        const {
            fontSize: o,
            lineHeight: p,
            lineWidth: q,
            fontSizeIcon: r
        } = a, s = Math.round(o * p), t = a.fontSizeSM, u = s - 2 * q, v = a.colorFillAlter, w = a.colorText, x = (0, g.merge)(a, {
            tagFontSize: t,
            tagLineHeight: u,
            tagDefaultBg: v,
            tagDefaultColor: w,
            tagIconSize: r - 2 * q,
            tagPaddingHorizontal: 8
        });
        return [
            m(x),
            l(x),
            k(x, 'success', 'Success'),
            k(x, 'processing', 'Info'),
            k(x, 'error', 'Error'),
            k(x, 'warning', 'Warning')
        ];
    });
}), c.register('zn07B8', function(d, e) {
    function f(g) {
        if ('string' != typeof g)
            return g;
        return g.charAt(0).toUpperCase() + g.slice(1);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('HFnro8', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('AE7vR'),
        j = c('8KqQ+'),
        k = c('HloXO');
    let l;
    const m = h.default.img.attrs(a => ({
        src: a.image
    }))(l || (l = (a => a)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), a => a.size, a => a.size, a => a.customRightMargin ? a.customRightMargin : 0, a => a.showBorder && `border: solid ${ j.default.Black } 1px;`);
    var _n = a => {
        const [o, p] = g.useState(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(m, {
                    ...a,
                    onClick: o => {
                        o.stopPropagation(), a.onClick && a.onClick(), a.blockModalOpen || p(!0);
                    }
                }),
                (0, f.jsx)(i.default, {
                    open: o,
                    onCancel: a => {
                        a.stopPropagation(), p(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, f.jsx)('img', {
                        src: (0, k.getCloudinaryUrl)(a.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), c.register('HloXO', function(d, e) {
    a(d.exports, 'getCloudinaryUrl', function() {
        return _f;
    });
    const _f = a => {
            const g = _g(a);
            return g ? a.includes('/video/upload') ? `https://${ _h }/video/upload/${ g }` : `https://${ _h }/image/upload/f_auto,fl_lossy,q_auto/${ g }` : a;
        },
        _g = a => {
            if (!_k.some(d => a.includes(d)))
                return null;
            if (a.includes(_i) && !a.includes(`/${ _j }/`))
                return null;
            const h = a.split('/');
            if (!h || !h.length || h.length < 2)
                return null;
            const i = h[h.length - 2],
                j = h[h.length - 1];
            return i && j && i.startsWith('v') ? `${ i }/${ j }` : null;
        },
        _h = 'media.gimkit.com',
        _i = 'res.cloudinary.com',
        _j = 'gimkit-production',
        _k = [
            _h,
            _i
        ];
}), c.register('CNMH3', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('/1vqe');
    var _h = f.createContext(g.default);
}), c.register('KxkP827', function(d, e) {
    a(d.exports, 'NavigateTo', function() {
        return _g;
    });
    var f = c('qb3Ih');
    const _g = a => {
        f.history.push(a);
    };
}), c.register('Rskyt', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('P1KtI'),
        i = c('VNuyu'),
        j = c('3t9ce'),
        k = c('aevdF'),
        l = c('Bjl070'),
        m = c('E2AMI26'),
        n = c('yruHD'),
        o = c('u4s09'),
        p = c('t52Ep'),
        q = c('quE27'),
        r = c('zFJz/');
    let s;
    const t = a => {
        const [u, v, w] = (0, q.useBoolean)(!1);
        return (0, f.jsx)(m.default, {
            direction: 'vertical',
            size: 7,
            className: 'maxWidth',
            children: a.folders.map(g => (0, f.jsxs)(_v, {
                onClick: () => {
                    return f = g._id, void(u || (v(), (0, q.request)({
                        url: '/api/folders/addGame',
                        data: {
                            folderId: f,
                            gameId: a.kitId
                        },
                        success: () => {
                            a.close(), (0, r.invalidateKits)(), l.default.success({
                                content: 'Kit added to folder!'
                            });
                        },
                        error: a => {
                            (0, q.throwMessageError)({
                                e: a,
                                default: {
                                    title: 'Error adding kit to folder'
                                }
                            });
                        },
                        both: w
                    })));
                    var x;
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
                        children: g.name
                    })
                ]
            }, g._id))
        });
    };
    var _u = a => {
        const {
            data: {
                folders: v
            },
            isLoading: w
        } = (0, r.default)(), [x, y, z] = (0, q.useBoolean)(!1), [A, B] = g.useState('');
        g.useEffect(() => {
            a.open || B('');
        }, [a.open]);
        const C = A.length < 2,
            D = () => {
                C || x || (y(), (0, q.request)({
                    url: '/api/folders/new',
                    data: {
                        title: A
                    },
                    success: v => {
                        (0, q.request)({
                            url: '/api/folders/addGame',
                            data: {
                                folderId: v,
                                gameId: a.kitId
                            },
                            success: () => {
                                a.close(), (0, r.invalidateKits)();
                            },
                            error: a => {
                                (0, q.throwMessageError)({
                                    e: a,
                                    default: {
                                        title: 'Error adding kit to folder'
                                    }
                                });
                            },
                            both: z
                        });
                    },
                    error: a => {
                        (0, q.throwMessageError)({
                            e: a,
                            default: {
                                title: 'Error creating folder'
                            }
                        }), z();
                    }
                }));
            };
        return (0, f.jsx)(j.default, {
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
                if (w)
                    return (0, f.jsx)('div', {
                        className: 'maxAll flex-center',
                        children: (0, f.jsx)(n.default, {
                            size: 'large'
                        })
                    });
                const E = null == v ? void 0 : v.filter(v => !v.games.includes(a.kitId)).sort((a, v) => a.title.localeCompare(v.title));
                return (0, f.jsxs)('div', {
                    children: [
                        (0, f.jsx)(k.default, {
                            placeholder: 'New folder name...',
                            value: A,
                            onChange: a => B(a.target.value),
                            onPressEnter: D
                        }),
                        (0, f.jsx)(h.default, {
                            block: !0,
                            type: 'primary',
                            style: {
                                marginTop: 7
                            },
                            disabled: C,
                            loading: x,
                            onClick: D,
                            children: 'Create Folder'
                        }),
                        E.length ? (0, f.jsxs)(f.Fragment, {
                            children: [
                                (0, f.jsx)(i.default, {}),
                                (0, f.jsx)(t, {
                                    folders: E.map(a => ({
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
    const _v = o.default.div.attrs({
        className: 'flex vc'
    })(s || (s = (a => a)`
  padding: 12px 20px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`));
}), c.register('E2AMI26', function(d, e) {
    a(d.exports, 'SpaceContext', function() {
        return _o;
    }, function(f) {
        return _o = f;
    }), a(d.exports, 'default', function() {
        return _w;
    }, function(f) {
        return _w = f;
    });
    var f = c('/U36/'),
        g = c('6E2xk1'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('42T6R26'),
        k = c('yRLYd'),
        l = c('qW/eZ26'),
        m = c('AzDc2'),
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
    const q = a => {
        const {
            getPrefixCls: r,
            space: s,
            direction: t
        } = h.useContext(i.ConfigContext), {
            size: u = (null == s ? void 0 : s.size) || 'small',
            align: v,
            className: _w,
            rootClassName: x,
            children: y,
            direction: z = 'horizontal',
            prefixCls: A,
            split: B,
            style: C,
            wrap: D = !1
        } = a, E = n(a, [
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
        ]), F = (0, j.default)(), [G, H] = h.useMemo(() => (Array.isArray(u) ? u : [
            u,
            u
        ]).map(a => function(I) {
            return 'string' == typeof I ? p[I] : I || 0;
        }(a)), [u]), I = (0, g.default)(y, {
            keepEmpty: !0
        }), J = void 0 === v && 'horizontal' === z ? 'center' : v, K = r('space', A), [L, M] = (0, m.default)(K), N = b(f)(K, M, `${ K }-${ z }`, {
            [`${ K }-rtl`]: 'rtl' === t,
            [`${ K }-align-${ J }`]: J
        }, _w, x), O = `${ K }-item`, P = 'rtl' === t ? 'marginLeft' : 'marginRight';
        let Q = 0;
        const R = I.map((a, b) => {
                null != a && (Q = b);
                const S = a && a.key || `${ O }-${ b }`;
                return h.createElement(l.default, {
                    className: O,
                    key: S,
                    direction: z,
                    index: b,
                    marginDirection: P,
                    split: B,
                    wrap: D
                }, a);
            }),
            S = h.useMemo(() => ({
                horizontalSize: G,
                verticalSize: H,
                latestIndex: Q,
                supportFlexGap: F
            }), [
                G,
                H,
                Q,
                F
            ]);
        if (0 === I.length)
            return null;
        const T = {};
        return D && (T.flexWrap = 'wrap', F || (T.marginBottom = -H)), F && (T.columnGap = G, T.rowGap = H), L(h.createElement('div', Object.assign({
            className: N,
            style: Object.assign(Object.assign({}, T), C)
        }, E), h.createElement(_o.Provider, {
            value: S
        }, R)));
    };
    q.Compact = k.default;
    var r = q;
}), c.register('42T6R26', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('nzHVd'),
        _h = () => {
            const [i, j] = f.useState(!1);
            return f.useEffect(() => {
                j((0, g.detectFlexGapSupported)());
            }, []), i;
        };
}), c.register('qW/eZ26', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('E2AMI26');

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
}), c.register('t52Ep', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var _g = a => (0, f.jsx)('i', {
        className: `${ a.name }${ a.className ? ` ${ a.className }` : '' }`,
        style: a.style
    });
}), c.register('7GnGD2', function(d, e) {
    a(d.exports, 'UpgradeModal_CopyKit', function() {
        return _h;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('jw1ib');
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
}), c.register('BFmAg', function(d, e) {
    a(d.exports, 'UpgradeModal_Folders', function() {
        return _h;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('jw1ib');
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
}), c.register('IPaxn', function(d, e) {
    a(d.exports, 'default', function() {
        return _E;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('P1KtI'),
        i = c('M3JwW'),
        j = c('aevdF'),
        k = c('AE7vR'),
        l = c('E2AMI26'),
        m = c('22RS1'),
        n = c('u4s09'),
        o = c('8KqQ+'),
        p = c('t52Ep'),
        q = c('9aZ6t'),
        r = c('quE27'),
        s = c('nKuOQ'),
        t = c('FB7HT26'),
        u = c('zFJz/');
    let v, w, x, y = a => a;
    const z = a => {
            const A = a ? '#1677ff' : 'rgba(0,0,0,0.07)';
            return {
                color: a ? o.default.White : o.default.Black,
                backgroundColor: A,
                hoverBackgroundColor: a ? A : 'rgba(0,0,0,0.11)'
            };
        },
        A = a => {
            const {
                color: B,
                backgroundColor: C,
                hoverBackgroundColor: D
            } = z(a.selected);
            return (0, f.jsx)(t.default, {
                to: a.path,
                children: (0, f.jsxs)(_G, {
                    background: C,
                    color: B,
                    hoverBackgroundColor: D,
                    children: [
                        (0, f.jsx)('span', {
                            style: {
                                marginRight: 6
                            },
                            children: (0, f.jsx)(p.default, {
                                name: a.icon
                            })
                        }),
                        a.label
                    ]
                })
            });
        },
        B = a => {
            const {
                color: C,
                backgroundColor: D,
                hoverBackgroundColor: E
            } = z(a.selected), [F, G, H] = (0, r.useBoolean)(!1), [I, J, K] = (0, r.useBoolean)(!1);
            return (0, f.jsx)(t.default, {
                to: a.path,
                children: (0, f.jsxs)(_G, {
                    background: D,
                    color: C,
                    hoverBackgroundColor: E,
                    children: [
                        a.icon && !a.selected ? (0, f.jsx)('span', {
                            style: {
                                marginRight: 6
                            },
                            children: a.icon
                        }) : null,
                        (0, f.jsx)(q.motion.span, {
                            layout: !0,
                            children: a.name
                        }),
                        a.selected ? (0, f.jsx)(i.default, {
                            menu: {
                                items: [{
                                        key: 'rename-folder',
                                        label: 'Rename Folder',
                                        onClick: G
                                    },
                                    {
                                        key: 'delete-folder',
                                        label: 'Delete Folder',
                                        danger: !0,
                                        onClick: J
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
                            open: F,
                            close: H,
                            folderId: a.id,
                            folderName: a.name
                        }),
                        (0, f.jsx)(_D, {
                            open: I,
                            close: K,
                            folderId: a.id
                        })
                    ]
                })
            });
        },
        _C = a => {
            const [D, E, F] = (0, r.useBoolean)(!1), [G, H] = g.useState(''), I = g.useMemo(() => G.length < 2, [G]);
            g.useEffect(() => {
                a.open || H('');
            }, [a.open]);
            const J = () => {
                D || (E(), (0, r.request)({
                    url: '/api/folders/rename',
                    data: {
                        id: a.folderId,
                        title: G
                    },
                    success: () => {
                        a.close(), (0, u.invalidateKits)();
                    },
                    both: F,
                    error: a => {
                        (0, r.throwMessageError)({
                            e: a,
                            default: {
                                title: 'Error renaming folder'
                            }
                        });
                    }
                }));
            };
            return (0, f.jsxs)(k.default, {
                open: a.open,
                onCancel: a.close,
                title: 'Rename',
                footer: [
                    (0, f.jsx)(h.default, {
                        onClick: a.close,
                        children: 'Cancel'
                    }, 'cancel-rename-folder'),
                    (0, f.jsx)(h.default, {
                        type: 'primary',
                        onClick: J,
                        disabled: I,
                        loading: D,
                        children: 'Rename'
                    }, 'rename-folder')
                ],
                children: [
                    (0, f.jsxs)(m.default.Text, {
                        children: [
                            'Enter a new name for ',
                            (0, f.jsxs)('b', {
                                children: [
                                    a.folderName,
                                    ':'
                                ]
                            })
                        ]
                    }),
                    (0, f.jsx)(j.default, {
                        value: G,
                        style: {
                            marginTop: 5
                        },
                        placeholder: 'New name...',
                        maxLength: 24,
                        onChange: a => H(a.target.value),
                        onPressEnter: J
                    })
                ]
            });
        },
        _D = a => {
            const [E, F, G] = (0, r.useBoolean)(!1);
            return (0, f.jsx)(k.default, {
                open: a.open,
                onCancel: a.close,
                title: 'Delete Folder',
                footer: [
                    (0, f.jsx)(h.default, {
                        onClick: a.close,
                        children: 'Cancel'
                    }, 'cancel-delete-folder'),
                    (0, f.jsx)(h.default, {
                        type: 'primary',
                        danger: !0,
                        onClick: () => {
                            F(), (0, r.request)({
                                url: '/api/folders/delete',
                                data: {
                                    id: a.folderId
                                },
                                success: () => {
                                    a.close(), (0, u.invalidateKits)();
                                },
                                error: a => {
                                    (0, r.throwMessageError)({
                                        e: a,
                                        default: {
                                            title: 'Error deleting folder'
                                        }
                                    });
                                },
                                both: G
                            });
                        },
                        loading: E,
                        children: 'Delete Folder'
                    }, 'delete-folder')
                ],
                children: (0, f.jsx)(m.default.Text, {
                    children: 'Are you sure you want to delete this folder? The kits within the folder will not be deleted.'
                })
            });
        };
    var _E = a => {
        var F;
        const G = !(0, r.isStudent)() && (null === (F = (0, r.getUser)()) || void 0 === F ? void 0 : F.schoolId),
            H = F => F === a.selectedFolder && !a.schoolLibraryScreenOpen;
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
                        selected: H(''),
                        path: s.KITS
                    }),
                    G ? (0, f.jsx)(A, {
                        label: 'My school',
                        icon: 'fas fa-school',
                        selected: a.schoolLibraryScreenOpen,
                        path: `${ s.KITS }/school`
                    }) : null,
                    a.folders.sort((a, F) => a.title.localeCompare(F.title)).map(a => (0, f.jsx)(B, {
                        id: a._id,
                        name: a.title,
                        selected: H(a._id),
                        path: `${ s.KITS }/${ a._id }`,
                        icon: (0, f.jsx)(p.default, {
                            name: 'fas fa-folder'
                        })
                    }, `folder-${ a._id }`))
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
`), a => a.background, a => a.color, a => a.hoverBackgroundColor),
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
}), c.register('FB7HT26', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('gRbUn'),
        g = c('+cTfn');
    c('O0Kav');
    var _h = a => a.external || !a.to ? (0, f.jsx)('a', {
        href: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        onKeyPress: d => {
            a.onClick && 'Enter' === d.key && (d.preventDefault(), a.onClick());
        },
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    }) : (0, f.jsx)(g.Link, {
        to: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    });
}), c.register('anQ/T', function(d, e) {
    d.exports = import('./' + c('Dq3qN').resolve('iEAx1')).then(() => c('NrM35'));
}), c.register('g3mPI', function(d, e) {
    a(d.exports, 'default', function() {
        return _t;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('/rHXU'),
        h = c('eLZ3t'),
        i = c('poCGZ'),
        j = c('nKuOQ'),
        k = c('KxkP827'),
        l = c('rLXLn'),
        m = c('YhH4+'),
        n = c('E2AMI26'),
        o = c('NdYR4'),
        p = c('lKjHC'),
        q = c('IAdaL'),
        r = c('I440g3'),
        s = c('quE27');
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
                        children: u.map(u => (0, f.jsx)(h.default, {
                            group: u,
                            to: `/class/${ u._id }`
                        }, u._id))
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
}), c.register('eLZ3t', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('QZ0Z+'),
        i = c('8KqQ+'),
        j = c('u4s09'),
        k = c('g7mv/'),
        l = c('quE27'),
        m = c('FB7HT26');
    let n;
    const o = j.default.div(n || (n = (a => a)`
  background: ${ 0 };
  height: ${ 0 }px;
  width: ${ 0 }px;
  border-radius: 5px;
  margin-right: 10px;
`), a => a.color, k.IMAGE_SIZE, k.IMAGE_SIZE);
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
}), c.register('I440g3', function(d, e) {
    a(d.exports, 'GetHomepagePath', function() {
        return _j;
    }), a(d.exports, 'RedirectToHomepage', function() {
        return _k;
    }), a(d.exports, 'ReplaceToHomePage', function() {
        return _l;
    });
    var f = c('nKuOQ'),
        g = c('qb3Ih'),
        h = c('quE27'),
        i = c('KxkP827');
    const _j = () => (0, h.isLoggedIn)() ? (0, h.isStudent)() ? f.HOME : f.KITS : '/',
        _k = () => {
            (0, i.NavigateTo)(_j());
        },
        _l = () => {
            g.history.replace(_j());
        };
}), c.register('IGWGM', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('/rHXU'),
        h = c('ooYcy'),
        i = c('YhH4+'),
        j = c('lKjHC'),
        k = c('quE27'),
        l = c('I440g3');
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
}), c.register('ooYcy', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('quE27'),
        i = c('d9xnL'),
        j = c('CIjOE'),
        k = c('6rCUo'),
        l = c('TTrqO');
    var _m = () => {
        const [n, o] = b(g).useState(!0), [p, q] = b(g).useState([]);
        return b(g).useEffect(() => {
            (0, h.isStudent)() && (0, h.request)({
                url: '/api/v1/groups/part-of',
                success: n => q(n),
                both: () => o(!1)
            });
        }, []), (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(i.default, {
                    groups: p.map(n => n._id)
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
}), c.register('d9xnL', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('mlgRI'),
        h = c('Og3lf');
    var _i = a => (0, f.jsx)(h.default, {
        children: (0, f.jsx)(g.default, {
            groups: a.groups
        })
    });
}), c.register('mlgRI', function(d, e) {
    a(d.exports, 'default', function() {
        return _r;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('Eh2Wh'),
        j = c('F6B8O'),
        k = c('8KqQ+'),
        l = c('quE27'),
        m = c('TTrqO');
    let n, o, p, q = a => a;
    var _r = a => {
        const [s, t] = g.useState();
        return g.useEffect(() => {
            if (a.groups.length) {
                const u = () => {
                    (0, l.request)({
                        url: '/api/matchmaker/instant-join',
                        success: u => {
                            u && u.code && t(u.code);
                        }
                    });
                };
                u();
                const v = setInterval(u, 30000);
                return () => clearInterval(v);
            }
        }, [a.groups.length]), s ? (0, f.jsx)(f.Fragment, {
            children: (0, f.jsxs)(_s, {
                children: [
                    (0, f.jsxs)('div', {
                        children: [
                            (0, f.jsx)(_t, {
                                children: 'Join your teacher\'s live game!'
                            }),
                            (0, f.jsx)(_u, {
                                children: s
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
                            to: `/join?gc=${ s }`
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
}), c.register('F6B8O', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('8KqQ+'),
        h = c('u4s09');
    let i;
    var _j = a => (0, f.jsxs)(_k, {
        href: a.to,
        customWidth: a.customWidth,
        className: `flex vc ${ a.className }`,
        style: a.style,
        children: [
            (0, f.jsx)('div', {
                className: 'flex hc vc',
                style: {
                    color: a.color,
                    background: a.background,
                    height: 36,
                    width: 36,
                    borderRadius: '50%',
                    marginRight: 11
                },
                children: (0, f.jsx)('i', {
                    className: a.icon
                })
            }),
            (0, f.jsx)('span', {
                children: a.text
            })
        ]
    });
    const _k = h.default.a(i || (i = (a => a)`
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
`), g.default.White, g.default.Black, a => a.customWidth || 350, g.default.BorderGray, g.default.Black);
}), c.register('TTrqO', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('gRbUn'),
        g = c('VNuyu');
    c('O0Kav');
    var _h = () => (0, f.jsx)(g.default, {
        style: {
            marginTop: 40,
            marginBottom: 40
        }
    });
}), c.register('Og3lf', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('u4s09'),
        g = c('8KqQ+');
    let h;
    var _i = f.default.div.attrs({
        className: 'maxWidth'
    })(h || (h = (a => a)`
  color: ${ 0 };
`), g.default.Black);
}), c.register('CIjOE', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('Og3lf'),
        i = c('u4s09'),
        j = c('Eh2Wh'),
        k = c('8KqQ+'),
        l = c('3qFtO'),
        m = c('quE27'),
        n = c('rDgzs'),
        o = c('yruHD'),
        p = c('Tzf4u');
    let q, r, s, t = a => a;
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
        const [x, y] = g.useState(!0), [z, A] = g.useState(!1), [B, C] = g.useState(null), [D, E] = g.useState([]), F = (b, f) => {
            x && z || (y(!0), A(!0), (0, m.request)({
                url: `/api/hub/hub-items?startDate=${ b.format('MM-DD-YYYY') }&endDate=${ f.format('MM-DD-YYYY') }`,
                success: x => {
                    E(x);
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
                    children: D.sort((x, b) => new Date(x.dueDate).getTime() - new Date(b.dueDate).getTime()).map(x => x.type === n.HubItemType.mapAssignment ? (0, f.jsx)(l.default, {
                        groupColor: x.group.color,
                        groupName: x.group.name,
                        dueDate: x.dueDate,
                        title: x.title,
                        status: x.status,
                        link: `/join/${ x.resourceId }`
                    }, x.resourceId + x.group._id) : null)
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
`), a => a.selected ? '#1a237e' : k.default.White, a => a.selected ? k.default.White : k.default.Black, a => a.selected ? '#1a237e' : k.default.BorderGray, a => !a.selected && '\n  &:hover {\n    background: #fafafa;\n  }\n  ');
}), c.register('3qFtO', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('QZ0Z+'),
        i = c('W4kEZ'),
        j = c('rDgzs'),
        k = c('FB7HT26'),
        l = c('Tzf4u');
    var _m = a => {
        const n = g.useMemo(() => a.status === j.HubItemStatus.completed ? 'Completed' : a.status === j.HubItemStatus.inProgress ? 'In Progress...' : b(l)().isAfter(b(l)(a.dueDate)) ? 'Past Due' : null, [
            a.status,
            a.dueDate
        ]);
        return (0, f.jsxs)(i.Container, {
            children: [
                (0, f.jsxs)(i.TopContainer, {
                    children: [
                        (0, f.jsx)(i.Color, {
                            style: {
                                background: a.groupColor
                            }
                        }),
                        (0, f.jsxs)(i.ClassAndDueDate, {
                            children: [
                                a.groupName,
                                ' - due ',
                                b(l)(a.dueDate).format('MMMM Do')
                            ]
                        })
                    ]
                }),
                (0, f.jsx)(k.default, {
                    to: a.link,
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
                                                    children: a.title
                                                }),
                                                n ? (0, f.jsx)(i.Description, {
                                                    children: n
                                                }) : null
                                            ]
                                        }),
                                        (0, f.jsx)(i.Status, {
                                            children: a.status === j.HubItemStatus.completed ? (0, f.jsx)('i', {
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
}), c.register('W4kEZ', function(d, e) {
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
    var f = c('8KqQ+'),
        g = c('Eh2Wh'),
        h = c('u4s09');
    let i, j, k, l, m, n, o, p, q, r, s, t = a => a;
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
}), c.register('6rCUo', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('Og3lf'),
        i = c('u4s09'),
        j = c('Eh2Wh'),
        k = c('wBYz2'),
        l = c('8KqQ+'),
        m = c('yruHD');
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
    var _p = a => {
        const [q, r] = g.useState([]), s = a.groups.filter(a => !q.includes(a._id)), t = a => {
            r(q => [
                ...q,
                a
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
                a.loading ? (0, f.jsx)('div', {
                    className: 'maxWidth flex hc',
                    style: {
                        marginTop: 20
                    },
                    children: (0, f.jsx)(m.default, {
                        size: 'large'
                    })
                }) : s.length ? s.map(a => (0, f.jsx)(k.default, {
                    name: a.name,
                    color: a.color,
                    creator: a.creatorName,
                    groupId: a._id,
                    onUnenroll: t
                }, a._id)) : (0, f.jsx)(o, {})
            ]
        });
    };
    const _q = i.default.div(n || (n = (a => a)`
  font-size: 38px;
  line-height: 38px;
  font-weight: ${ 0 };
  margin-bottom: 20px;
`), j.FontWeights.UltraBold);
}), c.register('wBYz2', function(d, e) {
    a(d.exports, 'default', function() {
        return _v;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('P1KtI'),
        h = c('QZ0Z+'),
        i = c('Bjl070'),
        j = c('AE7vR'),
        k = c('Dn89R'),
        l = c('u4s09'),
        m = c('8KqQ+'),
        n = c('Eh2Wh'),
        o = c('ReZvd'),
        p = c('quE27');
    let q, r, s, t, u = a => a;
    var _v = a => (0, f.jsx)(f.Fragment, {
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
                                    background: a.color
                                }
                            }),
                            (0, f.jsxs)(_x, {
                                children: [
                                    (0, f.jsx)(_y, {
                                        children: a.name
                                    }),
                                    (0, f.jsx)(_z, {
                                        children: a.creator
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
                                                    groupId: a.groupId
                                                },
                                                success: () => {
                                                    i.default.success(`Unenrolled from "${ a.name }"!`), a.onUnenroll(a.groupId);
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
}), c.register('47Z69', function(d, e) {
    a(d.exports, 'DashboardReports', function() {
        return _A;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('R2nG3'),
        i = c('ZKc1Q'),
        j = c('v6sJ3'),
        k = c('quE27'),
        l = c('/rHXU'),
        m = c('YhH4+'),
        n = c('uGyn30'),
        o = (g = c('O0Kav'), c('u4s09')),
        p = c('UCr/h1'),
        q = c('uEX3y'),
        r = c('+cTfn'),
        s = c('WHfsa1'),
        t = c('SuqDd1'),
        u = c('/o+cb0'),
        v = c('KxkP827'),
        w = c('poCGZ'),
        x = c('5GvqK');
    let y;
    const z = [{
                title: 'Kit',
                dataIndex: 'kit',
                key: 'report-kit',
                render: (a, d) => (0, f.jsx)(s.ReportKit, {
                    kit: a,
                    dateId: d._id,
                    assignmentId: d.mapAssignment
                })
            },
            {
                title: 'Accuracy',
                dataIndex: 'accuracy',
                key: 'report-accuracy',
                render: a => (0, f.jsx)(t.ReportProgressAccuracyMeter, {
                    percent: a
                })
            },
            {
                title: 'Participants',
                dataIndex: 'groups',
                key: 'report-groups',
                render: (a, d) => (0, f.jsx)(u.ReportParticipantsAndGroups, {
                    reportId: d._id,
                    participants: d.participants,
                    groups: a
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
            (0, n.default)(H, B => {
                var P, Q;
                G(null !== (Q = null === (P = B.target) || void 0 === P ? void 0 : P.offsetTop) && void 0 !== Q ? Q : 0);
            }), g.useEffect(() => {
                window.scrollTo(0, 0);
            }, [E]);
            const P = L ? (0, f.jsx)(p.ReportPagination, {
                total: L.totalItems,
                current: E,
                onPageChange: B => {
                    (0, k.isUpgraded)() ? C({
                        page: B
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
                                                    dataSource: L.items.map(B => ({
                                                        key: B._id,
                                                        ...B
                                                    })),
                                                    columns: z,
                                                    bordered: !0,
                                                    pagination: !1,
                                                    tableLayout: 'auto',
                                                    size: 'large',
                                                    onRow: B => ({
                                                        onClick: () => {
                                                            (0, v.NavigateTo)(`/report/${ B._id }`);
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
        })(y || (y = (a => a)`
  flex: 1;
`));
}), c.register('uGyn30', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('Nnw7z'),
        g = c('xRoVg');

    function h() {}
    let i;
    const j = a => i || (i = function(k) {
        let l = !1,
            m = [];
        const n = new Map(),
            o = new(k || window.ResizeObserver)((k, o) => {
                m = m.concat(k), l || window.requestAnimationFrame(function() {
                    const p = new Set();
                    for (let q = 0; q < m.length; q++) {
                        if (p.has(m[q].target))
                            continue;
                        p.add(m[q].target);
                        const r = n.get(m[q].target);
                        null == r || r.forEach(p => p(m[q], o));
                    }
                    m = [], q = !1;
                }), l = !0;
            });
        return {
            observer: o,
            subscribe(p, q) {
                var r;
                o.observe(p);
                const s = null !== (r = n.get(p)) && void 0 !== r ? r : [];
                s.push(q), n.set(p, s);
            },
            unsubscribe(p, q) {
                var r;
                const s = null !== (r = n.get(p)) && void 0 !== r ? r : [];
                if (1 === s.length)
                    return o.unobserve(p), void n.delete(p);
                const t = s.indexOf(q); -
                1 !== t && s.splice(t, 1), n.set(p, s);
            }
        };
    }(a));
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
}), c.register('Nnw7z', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = b(c('O0Kav'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), c.register('xRoVg', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('O0Kav');
    var _g = a => {
        const h = f.useRef(a);
        return f.useEffect(() => {
            h.current = a;
        }), h;
    };
}), c.register('UCr/h1', function(d, e) {
    a(d.exports, 'ReportPagination', function() {
        return _h;
    });
    var f = c('gRbUn'),
        g = c('jpULn');
    c('O0Kav');
    const _h = a => {
        const {
            total: i,
            current: j,
            onPageChange: k
        } = a;
        return (0, f.jsx)(g.default, {
            simple: !0,
            current: j,
            total: i,
            defaultPageSize: 10,
            onChange: k
        });
    };
}), c.register('uEX3y', function(d, e) {
    a(d.exports, 'useReports', function() {
        return _h;
    });
    var f = c('GmO9j'),
        g = c('quE27');
    const _h = a => (0, f.useQuery)({
        queryKey: [
            'dashboard-repports',
            {
                page: a
            }
        ],
        keepPreviousData: !0,
        staleTime: 60000,
        retry: 2,
        queryFn: () => (0, g.requestAsPromise)({
            url: '/api/game-report/fetch-all',
            data: {
                page: a
            }
        })
    });
}), c.register('WHfsa1', function(d, e) {
    a(d.exports, 'ReportKit', function() {
        return _s;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('E2AMI26'),
        i = c('Tzf4u'),
        j = c('quE27'),
        k = c('Eh2Wh'),
        l = c('pR71j1'),
        m = c('8KqQ+'),
        n = c('HloXO');
    let o, p, q, r = a => a;
    const _s = a => {
            const t = b(i)((0, j.dateFromObjectId)(a.dateId)).format('MMMM Do [at] LT');
            return (0, f.jsxs)(h.default, {
                direction: 'horizontal',
                size: 14,
                align: 'center',
                children: [
                    (0, f.jsx)('div', {
                        children: (0, f.jsx)(_t, {
                            src: (0, n.getCloudinaryUrl)(a.kit.gif),
                            style: {
                                width: 55,
                                height: 55
                            }
                        })
                    }),
                    (0, f.jsxs)('div', {
                        children: [
                            (0, f.jsx)(_u, {
                                children: a.kit.title
                            }),
                            (0, f.jsx)(_v, {
                                children: t
                            }),
                            a.assignmentId ? (0, f.jsx)('div', {
                                style: {
                                    marginTop: '0.25em'
                                },
                                children: (0, f.jsx)(l.ReportLinkTag, {
                                    to: `/assignment/${ a.assignmentId }`,
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
}), c.register('pR71j1', function(d, e) {
    a(d.exports, 'ReportLinkTag', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('FB7HT26'),
        h = c('u4s09');
    let i;
    const _j = a => (0, f.jsx)(_k, {
            onClick: a => null == a ? void 0 : a.stopPropagation(),
            to: a.to,
            children: a.children
        }),
        _k = (0, h.default)(g.default)(i || (i = (a => a)`
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.2em 0.73em;
  font-size: 0.9em;
  border-radius: 50px;
`));
}), c.register('SuqDd1', function(d, e) {
    a(d.exports, 'ReportProgressAccuracyMeter', function() {
        return _j;
    });
    var f = c('gRbUn'),
        g = c('R2nG3'),
        h = c('eyhCL');
    c('O0Kav');
    var i = c('SAYZy');
    const _j = a => {
        const k = a.percent < 60 ? '#F44336' : a.percent < 80 ? '#FFC107' : '#66BB6A';
        return (0, f.jsx)(g.default, {
            theme: {
                components: {
                    Progress: {
                        colorText: (0, i.darken)(0.2, k)
                    }
                }
            },
            children: (0, f.jsx)(h.default, {
                type: 'dashboard',
                percent: a.percent,
                width: 65,
                strokeColor: k,
                status: 'normal'
            })
        });
    };
}), c.register('/o+cb0', function(d, e) {
    a(d.exports, 'ReportParticipantsAndGroups', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('quE27'),
        h = c('E2AMI26'),
        i = c('pR71j1');
    const _j = a => {
        var k;
        return (0, f.jsxs)('div', {
            children: [
                (0, f.jsxs)('div', {
                    style: {
                        fontStyle: 'italic'
                    },
                    children: [
                        a.participants,
                        ' ',
                        (0, g.plural)('participant', a.participants)
                    ]
                }),
                (null === (k = a.groups) || void 0 === k ? void 0 : k.length) ? (0, f.jsx)(h.default, {
                    direction: 'horizontal',
                    wrap: !0,
                    size: 'small',
                    style: {
                        marginTop: '0.3em'
                    },
                    children: a.groups.map(k => (0, f.jsx)(i.ReportLinkTag, {
                        to: `/class/${ k._id }`,
                        children: k.name
                    }, a.reportId + k._id))
                }) : null
            ]
        });
    };
}), c.register('5GvqK', function(d, e) {
    a(d.exports, 'ReportUpgradeModal', function() {
        return _i;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('hecDa'),
        h = c('jw1ib');
    const _i = a => (0, f.jsx)(g.default, {
        id: 'view more reports',
        ...a,
        copy: {
            title: 'More reports with Pro',
            description: `To view more of your past reports, upgrade to ${ h.COMPANY_NAME } Pro.`
        }
    });
}), c.register('/6ufv', function(d, e) {
    a(d.exports, 'default', function() {
        return _p;
    });
    var f = c('s/YA9'),
        g = c('4F2ZN'),
        h = c('gRbUn'),
        i = c('O0Kav'),
        j = c('P1KtI'),
        k = c('AE7vR'),
        l = c('6jmvl'),
        m = c('Eh2Wh'),
        n = c('8KqQ+');
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
}), c.register('NtS6m', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn'),
        g = c('8KqQ+'),
        h = c('Eh2Wh');
    c('O0Kav');
    var i = c('u4s09'),
        j = c('eMJcS'),
        k = c('u1GjQ'),
        l = c('quE27'),
        m = c('wjCpL');
    let n;
    var _o = a => {
        const p = (0, l.getUser)();
        return (0, l.isStudent)() ? null : (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)(_p, {
                    children: [
                        (() => {
                            const {
                                freeTrial: q
                            } = p;
                            return !!((0, l.isUpgraded)() && q && q.currentlyOnFreeTrial);
                        })() && (0, f.jsx)(k.default, {
                            user: p,
                            openUpgradeModal: () => {
                                a.openUpgradeModal(!1);
                            }
                        }),
                        !(0, l.isUpgraded)() && (0, f.jsx)(j.default, {
                            openUpgradeModal: a.openUpgradeModal
                        })
                    ]
                }),
                (0, f.jsx)(m.default, {})
            ]
        });
    };
    const _p = i.default.div.attrs({
        className: 'maxWidth'
    })(n || (n = (a => a)`
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  color: ${ 0 };
  font-family: ${ 0 };
`), g.default.Black, h.Fonts.SFPro);
}), c.register('eMJcS', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u1GjQ'),
        i = c('Tzf4u'),
        j = c('jw1ib'),
        k = c('mzWmF'),
        l = c('ZGMPa'),
        m = c('quE27');
    h = c('u1GjQ');
    const n = 'hub_upgrade_modal_last_seen';
    var _o = a => {
        const {
            isLoading: p,
            data: q
        } = (0, k.default)();
        g.useEffect(() => {
            (() => {
                if (!localStorage.getItem(n))
                    return !0;
                const r = localStorage.getItem(n),
                    s = Number(r);
                if (!s || isNaN(s))
                    return !0;
                const t = b(i).unix(s);
                return Math.abs(b(i)().diff(t, 'hour')) >= 48;
            })() && (localStorage.setItem(n, b(i)().unix().toString()), a.openUpgradeModal(!0));
        }, []);
        const r = g.useMemo(() => (0, l.getFreePlanType)() === l.FreePlanType.limitedGames && (null == q ? void 0 : q.count) < (0, l.getLimitedGameLimit)() ? h.BACKGROUND_COLOR : '#c62828', [q]);
        return (0, l.getFreePlanType)() === l.FreePlanType.limitedGames && p ? null : (0, f.jsxs)(h.Container, {
            background: r,
            children: [
                (0, f.jsx)(h.Text, {
                    children: (() => {
                        if ((0, l.getFreePlanType)() === l.FreePlanType.limitedGames) {
                            const s = (0, l.getLimitedGameLimit)() - q.count;
                            return s <= 0 ? (0, f.jsx)(f.Fragment, {
                                children: 'You are out of hosted games for this month'
                            }) : (0, f.jsxs)(f.Fragment, {
                                children: [
                                    'You can host',
                                    ' ',
                                    (0, f.jsxs)(h.Bold, {
                                        children: [
                                            s,
                                            ' more ',
                                            (0, m.plural)('game', s)
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
                        a.openUpgradeModal(!1);
                    },
                    background: r,
                    children: 'Learn more'
                })
            ]
        });
    };
}), c.register('u1GjQ', function(d, e) {
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
    var f = c('gRbUn'),
        g = c('8KqQ+'),
        h = c('Eh2Wh'),
        i = c('FB7HT26'),
        j = c('O0Kav'),
        k = c('u4s09'),
        l = c('quE27'),
        m = c('/4RRY'),
        n = c('Tzf4u');
    let o, p, q, r, s = a => a;
    const _t = '#0a2540';
    var _u = a => {
        const [v, w] = j.useState(0), [x, y] = j.useState(''), z = () => {
            const {
                user: A
            } = a;
            if (!A && !A.freeTrial)
                return;
            const B = b(n).duration(b(n)(A.freeTrial.freeTrialExpiration).diff(b(n)())),
                C = B.asDays(),
                D = B.asHours(),
                E = B.asMinutes(),
                F = B.asSeconds();
            if (C >= 1) {
                let G = C;
                31 === C && (G = 30), y('day'), w(Math.ceil(G));
            } else
                D >= 1 && D < 24 ? (y('hour'), w(Math.ceil(D))) : E >= 1 && E < 60 ? (y('minute'), w(Math.ceil(E))) : F > 0 && F < 60 && (y('second'), w(Math.ceil(F)));
        };
        return j.useEffect(() => {
            z();
        }, []), (0, m.useIntervalWhen)(z, 1000), x ? (0, f.jsxs)(_v, {
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
                                v,
                                ' ',
                                (0, l.plural)(x, v),
                                '.'
                            ]
                        })
                    ]
                }),
                (0, f.jsx)(_y, {
                    onClick: a.openUpgradeModal,
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
`), a => a.background, g.default.White),
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
`), a => a.background, g.default.White, g.default.White, a => a.background, g.default.White);
}), c.register('/4RRY', function(d, e) {
    a(d.exports, 'useIntervalWhen', function() {
        return _g;
    });
    var f = c('O0Kav');

    function _g(h, i, j, k) {
        void 0 === i && (i = 0), void 0 === j && (j = !0), void 0 === k && (k = !1);
        var l = (0, f.useRef)();

        function m() {
            l.current && l.current();
        }
        (0, f.useEffect)(function() {
            l.current = h;
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
}), c.register('wjCpL', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('AE7vR'),
        i = c('Eh2Wh'),
        j = c('8KqQ+'),
        k = c('quE27');
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
}), c.register('aYtVg', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('DQOme'),
        h = c('XPKXa'),
        i = c('UHWMR');
    var _j = a => ((0, h.useSeasonTicketOpener)(), (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(g.default, {}),
            (0, f.jsx)(i.default, {
                upgradeModalVisible: a.upgradeModalVisible,
                proUpsellModalVisible: a.proUpsellModalVisible
            })
        ]
    }));
}), c.register('DQOme', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('quE27'),
        h = c('+/x68');
    var _i = () => (f.useEffect(() => {
        const j = (0, g.getUser)().tokenIssued || 0;
        Math.round(new Date().getTime() / 1000) - j >= 86400 && (0, h.default)({});
    }, []), null);
}), c.register('XPKXa', function(d, e) {
    a(d.exports, 'useSeasonTicketOpener', function() {
        return _j;
    });
    var f = c('O0Kav'),
        g = c('quE27'),
        h = c('KxkP827'),
        i = c('nKuOQ');
    const _j = () => {
        f.useEffect(() => {
            var k, l;
            const m = (0, g.getUser)();
            m && (null == m || null === (k = m.seasonTicket) || void 0 === k ? void 0 : k.active) && !(null == m || null === (l = m.seasonTicket) || void 0 === l ? void 0 : l.viewed) && (0, h.NavigateTo)(i.SEASON_TICKET_BASE);
        }, []);
    };
}), c.register('UHWMR', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn'),
        g = c('quE27'),
        h = c('Tzf4u');
    c('O0Kav');
    var i = c('wSjT+');
    var _j = a => (() => {
        if (a.upgradeModalVisible)
            return !0;
        if (a.proUpsellModalVisible)
            return !0;
        if ((0, g.getUrlVariable)('from'))
            return !0;
        const k = (0, g.getUser)(),
            l = (0, g.dateFromId)(k._id);
        return b(h)().diff(b(h)(l), 'days') < 3;
    })() ? null : (0, f.jsx)(i.default, {
        allowAutoOpen: !0
    });
}), c.register('iJ5QR', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn'),
        g = c('AE7vR'),
        h = c('8KqQ+'),
        i = c('Eh2Wh'),
        j = c('quE27'),
        k = c('O0Kav'),
        l = c('u4s09'),
        m = c('hMbZk');
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
                    nextStage: () => t(p => p + 1),
                    close: r
                })
            })
        }) : null;
    };
    const _p = l.default.div.attrs({
        className: 'maxWidth'
    })(n || (n = (a => a)`
  font-family: ${ 0 };
  color: ${ 0 };
`), i.Fonts.SFPro, h.default.Black);
}), c.register('hMbZk', function(d, e) {
    a(d.exports, 'default', function() {
        return _q;
    });
    var f = c('gRbUn'),
        g = c('Eh2Wh');
    c('O0Kav');
    var h = c('u4s09'),
        i = c('oPnwO'),
        j = c('hdXjI');
    let k, l, m, n, o, p = a => a;
    var _q = a => {
        const r = i.default[a.currentStage];
        return (0, f.jsxs)(_r, {
            children: [
                r.image ? (0, f.jsx)(_t, {
                    src: `/client/img/dashboard/onboarding/${ r.image }.svg`
                }, r.image) : (0, f.jsx)(_s, {}),
                (0, f.jsx)(_u, {
                    children: r.title
                }),
                (0, f.jsx)(_v, {
                    children: r.content
                }),
                (0, f.jsx)(j.default, {
                    currentStage: a.currentStage,
                    nextStage: a.nextStage,
                    close: a.close
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
}), c.register('oPnwO', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('gRbUn');
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
}), c.register('hdXjI', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('P1KtI'),
        i = c('FB7HT26'),
        j = c('oPnwO');
    var _k = a => {
        const l = g.useMemo(() => a.currentStage === j.default.length - 1, [a.currentStage]),
            m = g.useCallback(() => {
                l ? a.close() : a.nextStage();
            }, [l]);
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
                    onClick: m,
                    children: l ? 'Close' : 'Next'
                }),
                !l && (0, f.jsx)(i.default, {
                    onClick: a.close,
                    style: {
                        marginTop: 10
                    },
                    children: '...or close this screen'
                })
            ]
        });
    };
}), c.register('rjK4/', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('gRbUn'),
        g = c('/poDA27'),
        h = c('P1KtI'),
        i = c('AE7vR'),
        j = c('Tzf4u'),
        k = c('O0Kav'),
        l = c('u4s09'),
        m = c('8KqQ+'),
        n = c('Eh2Wh'),
        o = c('nKuOQ'),
        p = c('quE27'),
        q = c('41Yw7');
    let r, s, t, u = a => a;
    const v = 'pro-monthly-modal-last-shown';
    var _w = a => {
        const [x, y, z] = (0, p.useBoolean)(!1);
        return k.useEffect(() => {
            const A = (0, p.getUser)();
            if (!A)
                return;
            if (!A.planStartDate)
                return;
            const B = b(j).unix(A.planStartDate);
            if (Math.abs(b(j)().diff(B, 'days')) < 40)
                return;
            const C = localStorage.getItem(v);
            if (C) {
                const D = b(j).unix(Number(C));
                if (Math.abs(b(j)().diff(D, 'days')) < 21)
                    return;
            }
            y(), localStorage.setItem(v, b(j)().unix().toString());
        }, []), k.useEffect(() => {
            a.onVisibleChange(x);
        }, [x]), (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(_x, {}),
                (0, f.jsx)(i.default, {
                    className: 'pro-upsell-modal',
                    open: x,
                    onCancel: z,
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
                                close: z,
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
                                        onClick: z,
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
}), c.register('/poDA27', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('mQ0iF27'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'StarOutlined';
    var _k = g.forwardRef(j);
}), c.register('mQ0iF27', function(d, e) {
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
}), c.register('M3OCl2', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('W/XnX24'),
        j = c('zOtFd24'),
        k = c('3IofR2');
    let l, m, n = a => a;
    var _o = a => {
        const p = g.useMemo(() => {
                var q;
                return null !== (q = a.theme) && void 0 !== q ? q : i.SiteHeaderTheme.light;
            }, [a.theme]),
            q = g.useMemo(() => {
                var r;
                return null !== (r = a.alpha) && void 0 !== r ? r : j.SiteHeaderAlpha.standard;
            }, [a.alpha]),
            r = g.useMemo(() => {
                const s = q === j.SiteHeaderAlpha.none ? 1 : p === i.SiteHeaderTheme.light ? 0.85 : 0.45;
                return p === i.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${ s })` : `rgba(16, 16, 16, ${ s })`;
            }, [
                p,
                q
            ]),
            s = g.useMemo(() => p === i.SiteHeaderTheme.light ? 'rgb(235, 238, 241)' : 'rgb(143 143 143 / 60%)', [p]);
        return (0, f.jsxs)(_p, {
            background: r,
            borderColor: s,
            children: [
                (0, f.jsxs)(_q, {
                    children: [
                        (0, f.jsx)(k.default, {
                            options: a.options,
                            selectedOption: a.selectedOption,
                            theme: p
                        }),
                        (0, f.jsx)('div', {
                            children: a.rightSideContent
                        })
                    ]
                }),
                a.bottomContent
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
`), a => a.background, a => a.borderColor),
        _q = h.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(m || (m = n``));
}), c.register('W/XnX24', function(d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderTheme', function() {
        return f;
    }), (g = f || (f = {})).light = 'light', g.dark = 'dark';
}), c.register('zOtFd24', function(d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderAlpha', function() {
        return f;
    }), (g = f || (f = {})).none = 'none', g.standard = 'standard', g.darker = 'darker';
}), c.register('3IofR2', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('E2AMI26'),
        h = c('pWL4I2'),
        i = c('u4s09');
    let j;
    var _k = a => (0, f.jsx)(_l, {
        children: (0, f.jsx)(g.default, {
            direction: 'horizontal',
            size: 8,
            wrap: !0,
            children: a.options.map(d => (0, f.jsx)(h.default, {
                option: d,
                selected: a.selectedOption === d.id,
                theme: a.theme
            }, `option-${ d.id }`))
        })
    });
    const _l = i.default.div.attrs({
        className: 'scroll-x'
    })(j || (j = (a => a)`
  flex: 1;
`));
}), c.register('pWL4I2', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('W/XnX24'),
        i = c('u4s09'),
        j = c('44iM223'),
        k = c('zcfNM'),
        l = c('+cTfn'),
        m = c('FB7HT26');
    let n;
    var _o = a => {
        const {
            theme: p,
            option: q
        } = a, {
            pathname: r
        } = (0, l.useLocation)(), {
            label: s,
            icon: t,
            path: u,
            otherMatchingPaths: v
        } = q, w = (() => {
            if (u) {
                if ((0, k.matchPath)({
                        path: u
                    }, r))
                    return !0;
                if ((null == v ? void 0 : v.length) && v.some(a => (0, k.matchPath)({
                        path: a
                    }, r)))
                    return !0;
            }
            return !1;
        })(), x = g.useMemo(() => !!w || a.selected, [
            w,
            a.selected
        ]), y = g.useMemo(() => x ? '#1677ff' : 'transparent', [
            p,
            x
        ]), z = g.useMemo(() => x ? j.default.White : p === h.SiteHeaderTheme.light ? 'rgb(26, 27, 37)' : j.default.White, [
            p,
            x
        ]), A = g.useMemo(() => x ? y : p === h.SiteHeaderTheme.light ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)', [
            p,
            x,
            y
        ]);
        return (0, f.jsx)(m.default, {
            to: u,
            target: a.option.target,
            onClick: q.onSelect,
            style: {
                cursor: 'pointer'
            },
            children: (0, f.jsxs)(_p, {
                background: y,
                color: z,
                hoverBackground: A,
                children: [
                    t ? (0, f.jsx)('span', {
                        style: {
                            marginRight: 6,
                            fontSize: '0.9em'
                        },
                        children: t
                    }) : null,
                    s
                ]
            })
        });
    };
    const _p = i.default.div.attrs({
        className: 'flex-center'
    })(n || (n = (a => a)`
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
}), c.register('44iM223', function(d, e) {
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
}), c.register('cSZGQ', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn'),
        g = c('aevdF');
    c('O0Kav');
    var h = c('u4s09'),
        i = c('KxkP827');
    let j;
    var _k = () => (0, f.jsx)(_l, {
        children: (0, f.jsx)(g.default.Search, {
            style: {
                width: 285
            },
            enterButton: !0,
            placeholder: 'Search for kits...',
            onSearch: a => {
                a && (0, i.NavigateTo)(`/search?q=${ a }`);
            }
        })
    });
    const _l = h.default.div(j || (j = (a => a)`
  margin-right: -4px;
  margin-left: 30px;
`));
}), c.register('ZIYAX24', function(d, e) {
    a(d.exports, 'useMediaMatch', function() {
        return _g;
    });
    var f = c('O0Kav');

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
            l(i.matches);
            var m = function(n) {
                return l(n.matches);
            };
            return i.addEventListener ? (i.addEventListener('change', m), function() {
                return i.removeEventListener('change', m);
            }) : (i.addListener(m), function() {
                return i.removeListener(m);
            });
        }, [i]), k;
    }
}), c.register('e5xHg25', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('MsxQz'),
        g = c('O0Kav'),
        h = c('R2nG3');

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
                    const y = new ResizeObserver(y => {
                            const z = y[0].target;
                            r(z.offsetHeight + 8), t(z.offsetWidth);
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
}), c.register('kufQf25', function(d, e) {
    a(d.exports, 'initMoveMotion', function() {
        return _o;
    });
    var f = c('ZyWBF'),
        g = c('6vEai');
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
        _o = (a, d) => {
            const {
                antCls: p
            } = a, q = `${ p }-${ d }`, {
                inKeyframes: r,
                outKeyframes: s
            } = n[d];
            return [
                (0, g.initMotion)(q, r, s, a.motionDurationMid),
                {
                    [`\n        ${ q }-enter,\n        ${ q }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: a.motionEaseOutCirc
                    },
                    [`${ q }-leave`]: {
                        animationTimingFunction: a.motionEaseInOutCirc
                    }
                }
            ];
        };
}), c.register('gS4g327', function(d, e) {
    var f = c('OG3rI27'),
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
}), c.register('OG3rI27', function(d, e) {
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
}), c.register('P11ai26', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        sideMargin: 50,
        optionWidth: 200
    };
}), c.register('d/TAL25', function(d, e) {
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
    }), g(c('Tn4aA25'), d.exports), g(c('R+vNj25'), d.exports), g(c('5nRuZ25'), d.exports);
}), c.register('Tn4aA25', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useBreakpoints = d.exports.useBreakpoint = void 0;
    var f = c('5nRuZ25');
    d.exports.useBreakpoint = function(g) {
        return (0, f.useWindowSize)().width < g;
    }, d.exports.useBreakpoints = function(g) {
        var h = (0, f.useWindowSize)().width;
        return g.map(function(i) {
            return h < i;
        });
    };
}), c.register('5nRuZ25', function(d, e) {
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
    var i = h(c('O0Kav'));

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
}), c.register('R+vNj25', function(d, e) {
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
    var j = i(c('O0Kav'));
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
}), c.register('vJWh924', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        name: c('LE3I425').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), c.register('LE3I425', function(d, e) {
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
}), c.register('I6xj03', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn'),
        g = c('ZKc1Q'),
        h = c('O0Kav');
    const i = h.lazy(() => c('p0EES4'));
    var _j = a => {
        const k = a.hideSkeleton ? (0, f.jsx)('div', {
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
            fallback: k,
            children: (0, f.jsx)(i, {
                ...a
            })
        });
    };
}), c.register('p0EES4', function(d, e) {
    d.exports = Promise.all([
        c('k9Uhg')(new URL(c('Dq3qN').resolve('2nG1U'), import.meta.url).toString()),
        import('./' + c('Dq3qN').resolve('6iUO5'))
    ]).then(() => c('62q3k'));
}), c.register('g7UP0', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('lKKrt'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'ClockCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('lKKrt', function(d, e) {
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
}), c.register('JksFa', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('xilD9'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'TrophyOutlined';
    var _k = g.forwardRef(j);
}), c.register('xilD9', function(d, e) {
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
}), c.register('RcaOq', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        normal: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 400;\n',
        bold: '\n    font-family: \'Product Sans\', sans-serif;\n    font-weight: 800;\n  ',
        black: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 900;\n',
        fontFamilyName: 'Product Sans, sans-serif'
    };
}), c.register('8sxYw24', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('2lnmQ24'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'UsergroupAddOutlined';
    var _k = g.forwardRef(j);
}), c.register('2lnmQ24', function(d, e) {
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
}), c.register('JTTlV24', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('P++lt24'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'LogoutOutlined';
    var _k = g.forwardRef(j);
}), c.register('P++lt24', function(d, e) {
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
}), c.register('BA14D', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('+iTmi'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CheckOutlined';
    var _k = g.forwardRef(j);
}), c.register('+iTmi', function(d, e) {
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
}), c.register('OQRaD', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('tWyJZ'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownOutlined';
    var _k = g.forwardRef(j);
}), c.register('tWyJZ', function(d, e) {
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
}), c.register('t+nQW', function(d, e) {
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
}), c.register('y095j9', function(d, e) {
    a(d.exports, 'default', function() {
        return _D;
    });
    var f = c('+pD1R20'),
        g = c('KQrGU18'),
        h = c('N14UI9'),
        i = c('fS0tD9'),
        j = c('/3DFz16'),
        k = c('oFGsY16'),
        l = c('pjWA99'),
        m = c('86FOw9'),
        n = c('O0Kav'),
        o = c('/U36/'),
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
                        var t, u = this.props,
                            v = u.prefixCls,
                            w = u.className,
                            x = u.style,
                            y = u.name,
                            z = u.id,
                            A = u.type,
                            B = u.disabled,
                            C = u.readOnly,
                            _D = u.tabIndex,
                            E = u.onClick,
                            F = u.onFocus,
                            G = u.onBlur,
                            H = u.onKeyDown,
                            I = u.onKeyPress,
                            J = u.onKeyUp,
                            K = u.autoFocus,
                            L = u.value,
                            M = u.required,
                            N = (0, h.default)(u, [
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
                            O = Object.keys(N).reduce(function(P, Q) {
                                return 'aria-' !== Q.substr(0, 5) && 'data-' !== Q.substr(0, 5) && 'role' !== Q || (P[Q] = N[Q]), P;
                            }, {}),
                            P = this.state.checked,
                            Q = b(o)(v, w, (t = {}, (0, g.default)(t, ''.concat(v, '-checked'), P), (0, g.default)(t, ''.concat(v, '-disabled'), B), t));
                        return b(n).createElement('span', {
                            className: Q,
                            style: x
                        }, b(n).createElement('input', (0, f.default)({
                            name: y,
                            id: z,
                            type: A,
                            required: M,
                            readOnly: C,
                            disabled: B,
                            tabIndex: _D,
                            className: ''.concat(v, '-input'),
                            checked: !!P,
                            onClick: E,
                            onFocus: F,
                            onBlur: G,
                            onKeyUp: J,
                            onKeyDown: H,
                            onKeyPress: I,
                            onChange: this.handleChange,
                            autoFocus: K,
                            ref: this.saveInput,
                            value: L
                        }, O)), b(n).createElement('span', {
                            className: ''.concat(v, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(t, u) {
                    return 'checked' in t ? (0, i.default)((0, i.default)({}, u), {}, {
                        checked: t.checked
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
    var q = p;
}), c.register('+pD1R20', function(d, e) {
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
}), c.register('KQrGU18', function(d, e) {
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
}), c.register('N14UI9', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('wlMK917');

    function _g(h, i) {
        if (null == h)
            return {};
        var j, k, l = (0, f.default)(h, i);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(h);
            for (k = 0; k < m.length; k++)
                j = m[k], i.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(h, j) && (l[j] = h[j]);
        }
        return l;
    }
}), c.register('wlMK917', function(d, e) {
    function f(g, h) {
        if (null == g)
            return {};
        var i, j, k = {},
            l = Object.keys(g);
        for (j = 0; j < l.length; j++)
            i = l[j], h.indexOf(i) >= 0 || (k[i] = g[i]);
        return k;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('fS0tD9', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('KQrGU18');

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

    function _h(i) {
        for (var j = 1; j < arguments.length; j++) {
            var k = null != arguments[j] ? arguments[j] : {};
            j % 2 ? g(Object(k), !0).forEach(function(l) {
                (0, f.default)(i, l, k[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(k)) : g(Object(k)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(k, l));
            });
        }
        return i;
    }
}), c.register('/3DFz16', function(d, e) {
    function f(g, h) {
        if (!(g instanceof h))
            throw new TypeError('Cannot call a class as a function');
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('oFGsY16', function(d, e) {
    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(g, j.key, j);
        }
    }

    function g(h, i, j) {
        return i && f(h.prototype, i), j && f(h, j), h;
    }
    a(d.exports, 'default', function() {
        return g;
    });
}), c.register('pjWA99', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('/dMWm15');

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
}), c.register('/dMWm15', function(d, e) {
    function f(g, h) {
        return f = Object.setPrototypeOf || function(i, j) {
            return i.__proto__ = j, i;
        }, f(g, h);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('86FOw9', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('FRSEq15'),
        g = c('kgMwM15'),
        h = c('qEFpg9');

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
}), c.register('FRSEq15', function(d, e) {
    function f(g) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(h) {
            return h.__proto__ || Object.getPrototypeOf(h);
        }, f(g);
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('kgMwM15', function(d, e) {
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
}), c.register('qEFpg9', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('nPZ0615'),
        g = c('SUQix17');

    function _h(i, j) {
        if (j && ('object' === b(f)(j) || 'function' == typeof j))
            return j;
        if (void 0 !== j)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, g.default)(i);
    }
}), c.register('nPZ0615', function(d, e) {
    function f(g) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (d.exports = f = function(h) {
            return typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0) : (d.exports = f = function(h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0), f(g);
    }
    d.exports = f, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('SUQix17', function(d, e) {
    function f(g) {
        if (void 0 === g)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return g;
    }
    a(d.exports, 'default', function() {
        return f;
    });
}), c.register('JuRCP', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn'),
        g = c('O0Kav');
    const h = g.lazy(() => c('bPSSr0'));
    var _i = a => (0, f.jsx)(g.Suspense, {
        fallback: a.fallback || null,
        children: (0, f.jsx)(h, {
            latex: a.latex
        })
    });
}), c.register('bPSSr0', function(d, e) {
    d.exports = Promise.all([
        import('./' + c('Dq3qN').resolve('emcKB')),
        import('./' + c('Dq3qN').resolve('5OCdz'))
    ]).then(() => c('vZVkZ'));
}), c.register('RBtfx4', function(d, e) {
    let f;
    var g;
    a(d.exports, 'HookType', function() {
        return f;
    }), (g = f || (f = {})).selectBox = 'selectBox', g.kit = 'kit', g.number = 'number';
}), c.register('Qjtm3', function(d, e) {
    let f;
    var g;
    let h;
    var i;
    a(d.exports, 'LocalStorageNames', function() {
        return h;
    }), (g = f || (f = {})).time = 'time', g.target = 'target', g.race = 'race', g.allIn = 'allIn', (i = h || (h = {})).language = 'gimkit-3.0-game-language', i.currency = 'gimkit-game-currency', i.music = 'gimkit-music-track', i.allowGoogleTranslate = 'gimkit-google-translate-allowed', i.editorDefaultLanguage = 'gimkit-editor-v4-default-language', i.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', i.editorDefaultSubject = 'gimkit-editor-v4-default-subject', i.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', i.hookSavedOptions = 'gimkit-hook-saved-options';
}), c.register('zzCtd25', function(d, e) {
    a(d.exports, 'onlyOfferAnnualUpgrade', function() {
        return _g;
    });
    var f = c('SKBBo');
    const _g = () => 'annual-only' === f.default.getFeatureFlag('annual-only-pro');
}), c.register('YSFE52', function(d, e) {
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
}), c.register('XVrof3', function(d, e) {
    let f;
    var g;
    a(d.exports, 'MapModeType', function() {
        return f;
    }), (g = f || (f = {})).liveGame = 'liveGame', g.assignment = 'assignment';
}), c.register('IMf/b4', function(d, e) {
    a(d.exports, 'AnalyticsTrackEvent', function() {
        return _j;
    });
    var f = c('gK+6L'),
        g = c('quE27'),
        h = c('95m0H'),
        i = c('50Ts4');
    const _j = a => {
        var k, l, m;
        if ((window.gtag && !(null === (k = a.blockedSource) || void 0 === k ? void 0 : k.google) && window.gtag('event', a.event, a.properties), h.AnalyticsFlags.educatorOnly) && (null === (m = (0, g.getUser)()) || void 0 === m ? void 0 : m.accountType) !== f.default.educator)
            return;
        (null === (l = a.blockedSource) || void 0 === l ? void 0 : l.posthog) || (0, i.TrackPostHogEvent)({
            event: a.event,
            properties: a.properties,
            force: a.forcePostHog
        });
    };
}), c.register('bQWYI', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('GkLtI'),
        h = c('Nnw7z');
    var _i = (a, d) => {
        const [j, k] = f.useState(() => {
            var l, m;
            const n = a && 'current' in a ? a.current : a;
            return n ? [
                n.offsetWidth,
                n.offsetHeight
            ] : [
                null !== (l = null == d ? void 0 : d.initialWidth) && void 0 !== l ? l : 0,
                null !== (m = null == d ? void 0 : d.initialHeight) && void 0 !== m ? m : 0
            ];
        });
        return (0, h.default)(() => {
            const l = a && 'current' in a ? a.current : a;
            l && k([
                l.offsetWidth,
                l.offsetHeight
            ]);
        }, [a]), (0, g.default)(a, a => {
            const l = a.target;
            k([
                l.offsetWidth,
                l.offsetHeight
            ]);
        }), j;
    };
}), c.register('GkLtI', function(d, e) {
    a(d.exports, 'default', function() {
        return _l;
    });
    var f = c('1PitP'),
        g = c('Nnw7z'),
        h = c('xRoVg'),
        i = c('8Q3ZG');
    let j;
    const k = () => j || (j = function() {
        const l = new Map(),
            m = new(0, f.default)((0, i.default)((m, c) => {
                var n;
                if (1 === m.length)
                    null === (n = l.get(m[0].target)) || void 0 === n || n(m[0], c);
                else
                    for (let o = 0; o < m.length; o++) {
                        var p;
                        null === (p = l.get(m[o].target)) || void 0 === p || p(m[o], c);
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
                return o.subscribe(r, (m, o) => {
                    q || p.current(m, o);
                }), () => {
                    q = !0, o.unsubscribe(r);
                };
        }, [
            m,
            o,
            p
        ]), o.observer;
    };
}), c.register('8Q3ZG', function(d, e) {
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
}), c.register('JNGrh0', function(d, e) {
    a(d.exports, 'default', function() {
        return _u;
    });
    var f = c('+pD1R19'),
        g = c('DFnC8'),
        h = c('O0Kav');
    c('HoW8Y');
    var i = c('PEco5'),
        j = c('T8OqN'),
        k = c('KOz0K'),
        l = 44;

    function m(n) {
        var o, p, q;
        return o = n, p = 0, q = 1, n = (Math.min(Math.max(p, o), q) - p) / (q - p), n = (n -= 1) * n * n + 1;
    }
    var n = h.forwardRef(function(o, p) {
            var q, r = o.classes,
                s = o.className,
                t = o.color,
                _u = void 0 === t ? 'primary' : t,
                v = o.disableShrink,
                w = void 0 !== v && v,
                x = o.size,
                y = void 0 === x ? 40 : x,
                z = o.style,
                A = o.thickness,
                B = void 0 === A ? 3.6 : A,
                C = o.value,
                D = void 0 === C ? 0 : C,
                E = o.variant,
                F = void 0 === E ? 'indeterminate' : E,
                G = (0, g.default)(o, [
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
                H = {},
                I = {},
                J = {};
            if ('determinate' === F || 'static' === F) {
                var K = 2 * Math.PI * ((l - B) / 2);
                H.strokeDasharray = K.toFixed(3), J['aria-valuenow'] = Math.round(D), 'static' === F ? (H.strokeDashoffset = ''.concat(((100 - D) / 100 * K).toFixed(3), 'px'), I.transform = 'rotate(-90deg)') : (H.strokeDashoffset = ''.concat((q = (100 - D) / 100, q * q * K).toFixed(3), 'px'), I.transform = 'rotate('.concat((270 * m(D / 70)).toFixed(3), 'deg)'));
            }
            return h.createElement('div', (0, f.default)({
                className: (0, i.default)(r.root, s, 'inherit' !== _u && r['color'.concat((0, k.default)(_u))], {
                    indeterminate: r.indeterminate,
                    static: r.static
                } [F]),
                style: (0, f.default)({
                    width: y,
                    height: y
                }, I, z),
                ref: p,
                role: 'progressbar'
            }, J, G), h.createElement('svg', {
                className: r.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(l, ' ').concat(l)
            }, h.createElement('circle', {
                className: (0, i.default)(r.circle, w && r.circleDisableShrink, {
                    indeterminate: r.circleIndeterminate,
                    static: r.circleStatic
                } [F]),
                style: H,
                cx: l,
                cy: l,
                r: (l - B) / 2,
                fill: 'none',
                strokeWidth: B
            })));
        }),
        o = (0, j.default)(function(p) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: p.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: p.palette.primary.main
                },
                colorSecondary: {
                    color: p.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: p.transitions.create('stroke-dashoffset')
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
        })(n);
}), c.register('rDljU2', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('hX1pp3'),
        i = c('quE27');
    var _j = a => {
        const [k, l] = g.useState([]), [m] = g.useState(a.limit), [n, o] = g.useState(a.defaultPage), [p, q] = g.useState(!0), [r, s] = g.useState([]), [t, u] = g.useState(!1), v = g.useMemo(() => (a.modifyItems ? a.modifyItems(r) : r).map((k, l) => a.toRender(k, l)), [
            r.length,
            a.toRender
        ]), w = () => {
            if (k.includes(n))
                return;
            l(a => [
                ...a,
                n
            ]);
            const x = {
                page: n,
                limit: m
            };
            (0, i.request)({
                url: a.url,
                method: 'post',
                cacheKey: a.cacheKey,
                data: a.modifyBody ? a.modifyBody(x) : x,
                success: (k, l) => {
                    a.onTotalItems && !t && (a.onTotalItems(k.totalItems), u(!0)), k.items.forEach(k => {
                        a.onItemFetched && a.onItemFetched(k, l);
                    }), s(a => [
                        ...a,
                        ...k.items
                    ]), q(k.hasNextPage), o(k.nextPage);
                },
                error: () => {
                    a.onTotalItems && !t && (a.onTotalItems(0), u(!0)), q(!1);
                },
                both: () => l(a => a.filter(a => a !== x.page))
            });
        };
        return g.useEffect(w, []), !p && a.forceEmptyMessage || !p && 0 === r.length && a.emptyMessage ? a.emptyMessage(r) : (0, f.jsxs)(h.default, {
            dataLength: r.length,
            hasMore: p,
            style: a.scrollStyle,
            next: w,
            loader: a.loader || (0, f.jsx)('div', {}),
            scrollThreshold: a.scrollThreshold,
            endMessage: a.endMessage ? a.endMessage(r) : null,
            scrollableTarget: a.scrollableTarget,
            children: [
                a.prefix ? a.prefix() : null,
                v
            ]
        });
    };
}), c.register('hX1pp3', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('O0Kav'),
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
                return q.lastScrollTop = 0, q.actionTriggered = !1, q.startY = 0, q.currentY = 0, q.dragging = !1, q.maxPullDownDistance = 0, q.getScrollableTarget = function() {
                    return q.props.scrollableTarget instanceof HTMLElement ? q.props.scrollableTarget : 'string' == typeof q.props.scrollableTarget ? document.getElementById(q.props.scrollableTarget) : (null === q.props.scrollableTarget && console.warn('You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '), null);
                }, q.onStart = function(r) {
                    q.lastScrollTop || (q.dragging = !0, r instanceof MouseEvent ? q.startY = r.pageY : r instanceof TouchEvent && (q.startY = r.touches[0].pageY), q.currentY = q.startY, q._infScroll && (q._infScroll.style.willChange = 'transform', q._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'));
                }, q.onMove = function(r) {
                    q.dragging && (r instanceof MouseEvent ? q.currentY = r.pageY : r instanceof TouchEvent && (q.currentY = r.touches[0].pageY), q.currentY < q.startY || (q.currentY - q.startY >= Number(q.props.pullDownToRefreshThreshold) && q.setState({
                        pullToRefreshThresholdBreached: !0
                    }), q.currentY - q.startY > 1.5 * q.maxPullDownDistance || q._infScroll && (q._infScroll.style.overflow = 'visible', q._infScroll.style.transform = 'translate3d(0px, ' + (q.currentY - q.startY) + 'px, 0px)')));
                }, q.onEnd = function() {
                    q.startY = 0, q.currentY = 0, q.dragging = !1, q.state.pullToRefreshThresholdBreached && (q.props.refreshFunction && q.props.refreshFunction(), q.setState({
                        pullToRefreshThresholdBreached: !1
                    })), requestAnimationFrame(function() {
                        q._infScroll && (q._infScroll.style.overflow = 'auto', q._infScroll.style.transform = 'none', q._infScroll.style.willChange = 'none');
                    });
                }, q.onScrollListener = function(r) {
                    'function' == typeof q.props.onScroll && setTimeout(function() {
                        return q.props.onScroll && q.props.onScroll(r);
                    }, 0);
                    var s = q.props.height || q._scrollableNode ? r.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    q.actionTriggered || ((q.props.inverse ? q.isElementAtTop(s, q.props.scrollThreshold) : q.isElementAtBottom(s, q.props.scrollThreshold)) && q.props.hasMore && (q.actionTriggered = !0, q.setState({
                        showLoader: !0
                    }), q.props.next && q.props.next()), q.lastScrollTop = s.scrollTop);
                }, q.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, q.throttledOnScrollListener = function(r, s, t, u) {
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
                            x = Date.now(), t.apply(A, C);
                        }

                        function E() {
                            v = void 0;
                        }
                        w || (u && !v && D(), y(), void 0 === u && B > r ? D() : !0 !== s && (v = setTimeout(u ? E : D, void 0 === u ? r - B : r)));
                    }
                    return 'boolean' != typeof s && (u = t, t = s, s = void 0), z.cancel = function() {
                        y(), w = !0;
                    }, z;
                }(150, q.onScrollListener).bind(q), q.onStart = q.onStart.bind(q), q.onMove = q.onMove.bind(q), q.onEnd = q.onEnd.bind(q), q;
            }
            return function(p, q) {
                function r() {
                    this.constructor = p;
                }
                g(p, q), p.prototype = null === q ? Object.create(q) : (r.prototype = q.prototype, new r());
            }(o, n), o.prototype.componentDidMount = function() {
                if (void 0 === this.props.dataLength)
                    throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener('scroll', this.throttledOnScrollListener), 'number' == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener('touchstart', this.onStart), this.el.addEventListener('touchmove', this.onMove), this.el.addEventListener('touchend', this.onEnd), this.el.addEventListener('mousedown', this.onStart), this.el.addEventListener('mousemove', this.onMove), this.el.addEventListener('mouseup', this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), 'function' != typeof this.props.refreshFunction))
                    throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'');
            }, o.prototype.componentWillUnmount = function() {
                this.el && (this.el.removeEventListener('scroll', this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener('touchstart', this.onStart), this.el.removeEventListener('touchmove', this.onMove), this.el.removeEventListener('touchend', this.onEnd), this.el.removeEventListener('mousedown', this.onStart), this.el.removeEventListener('mousemove', this.onMove), this.el.removeEventListener('mouseup', this.onEnd)));
            }, o.prototype.UNSAFE_componentWillReceiveProps = function(p) {
                this.props.dataLength !== p.dataLength && (this.actionTriggered = !1, this.setState({
                    showLoader: !1
                }));
            }, o.prototype.isElementAtTop = function(p, q) {
                void 0 === q && (q = 0.8);
                var r = p === document.body || p === document.documentElement ? window.screen.availHeight : p.clientHeight,
                    s = l(q);
                return s.unit === i ? p.scrollTop <= s.value + r - p.scrollHeight + 1 || 0 === p.scrollTop : p.scrollTop <= s.value / 100 + r - p.scrollHeight + 1 || 0 === p.scrollTop;
            }, o.prototype.isElementAtBottom = function(p, q) {
                void 0 === q && (q = 0.8);
                var r = p === document.body || p === document.documentElement ? window.screen.availHeight : p.clientHeight,
                    s = l(q);
                return s.unit === i ? p.scrollTop + r >= p.scrollHeight - s.value : p.scrollTop + r >= s.value / 100 * p.scrollHeight;
            }, o.prototype.render = function() {
                var p = this,
                    q = h({
                        height: this.props.height || 'auto',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch'
                    }, this.props.style),
                    r = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                    s = this.props.pullDownToRefresh && this.props.height ? {
                        overflow: 'auto'
                    } : {};
                return b(f).createElement('div', {
                    style: s,
                    className: 'infinite-scroll-component__outerdiv'
                }, b(f).createElement('div', {
                    className: 'infinite-scroll-component ' + (this.props.className || ''),
                    ref: function(t) {
                        return p._infScroll = t;
                    },
                    style: q
                }, this.props.pullDownToRefresh && b(f).createElement('div', {
                    style: {
                        position: 'relative'
                    },
                    ref: function(t) {
                        return p._pullDown = t;
                    }
                }, b(f).createElement('div', {
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !r && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage));
            }, o;
        }(f.Component),
        _n = m;
}), c.register('F0ESS9', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('8KqQ+');
    let i;
    var _j = a => (0, f.jsx)(_k, {
        onClick: a.onClick,
        className: a.className,
        style: a.style,
        children: a.children
    });
    const _k = g.default.div(i || (i = (a => a)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), h.default.White);
}), c.register('gWjq2', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('Omeih'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'EnterOutlined';
    var _k = g.forwardRef(j);
}), c.register('Omeih', function(d, e) {
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
}), c.register('IUu1b4', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('O0Kav');

    function _g() {
        const [, h] = f.useReducer(h => h + 1, 0);
        return h;
    }
}), c.register('nBr9H5', function(d, e) {
    a(d.exports, 'responsiveArray', function() {
        return _h;
    }), a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('60hla');
    const _h = [
        'xxl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs'
    ];

    function _i() {
        const [, j] = (0, g.useToken)(), k = (j => ({
            xs: `(max-width: ${ j.screenXSMax }px)`,
            sm: `(min-width: ${ j.screenSM }px)`,
            md: `(min-width: ${ j.screenMD }px)`,
            lg: `(min-width: ${ j.screenLG }px)`,
            xl: `(min-width: ${ j.screenXL }px)`,
            xxl: `(min-width: ${ j.screenXXL }px)`
        }))((j => {
            const l = j,
                m = [].concat(_h).reverse();
            return m.forEach((j, d) => {
                const n = j.toUpperCase(),
                    o = `screen${ n }Min`,
                    p = `screen${ n }`;
                if (!(l[o] <= l[p]))
                    throw new Error(`${ o }<=${ p } fails : !(${ l[o] }<=${ l[p] })`);
                if (d < m.length - 1) {
                    const q = `screen${ n }Max`;
                    if (!(l[p] <= l[q]))
                        throw new Error(`${ p }<=${ q } fails : !(${ l[p] }<=${ l[q] })`);
                    const r = `screen${ m[d + 1].toUpperCase() }Min`;
                    if (!(l[q] <= l[r]))
                        throw new Error(`${ q }<=${ r } fails : !(${ l[q] }<=${ l[r] })`);
                }
            }), j;
        })(j));
        return b(f).useMemo(() => {
            const l = new Map();
            let m = -1,
                n = {};
            return {
                matchHandlers: {},
                dispatch: m => (n = m, l.forEach(l => l(n)), l.size >= 1),
                subscribe(o) {
                    return l.size || this.register(), m += 1, l.set(m, o), o(n), m;
                },
                unsubscribe(o) {
                    l.delete(o), l.size || this.unregister();
                },
                unregister() {
                    Object.keys(k).forEach(l => {
                        const o = k[l],
                            p = this.matchHandlers[o];
                        null == p || p.mql.removeListener(null == p ? void 0 : p.listener);
                    }), l.clear();
                },
                register() {
                    Object.keys(k).forEach(l => {
                        const o = k[l],
                            p = o => {
                                let {
                                    matches: q
                                } = o;
                                this.dispatch(Object.assign(Object.assign({}, n), {
                                    [l]: q
                                }));
                            },
                            q = window.matchMedia(o);
                        q.addListener(p), this.matchHandlers[o] = {
                            mql: q,
                            listener: p
                        }, p(q);
                    });
                },
                responsiveMap: k
            };
        }, [j]);
    }
}), c.register('AKtTq25', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.lazyWithPreload = void 0;
    var f = c('O0Kav');

    function g(h) {
        var i, j, k = (0, f.lazy)(h),
            l = (0, f.forwardRef)(function(m, n) {
                var o = (0, f.useRef)(null != i ? i : k);
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
}), c.register('hxyXq25', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('1XwWU13'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'QuestionCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('1XwWU13', function(d, e) {
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
}), c.register('0nKwk1', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('4shVI1'),
        g = c('q2qDo1');
    const h = f.default;
    h.Group = g.default, h.__ANT_CHECKBOX = !0;
    var _i = h;
}), c.register('4shVI1', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    }, function(f) {
        return _s = f;
    });
    var f = c('/U36/'),
        g = c('y095j9'),
        h = c('O0Kav'),
        i = c('R2nG3'),
        j = c('LbJH1'),
        k = c('q2qDo1'),
        l = c('XDmwF'),
        m = c('NgjTH0'),
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
    const o = (a, c) => {
        var p, {
                prefixCls: q,
                className: r,
                rootClassName: _s,
                children: t,
                indeterminate: u = !1,
                style: v,
                onMouseEnter: w,
                onMouseLeave: x,
                skipGroup: y = !1,
                disabled: z
            } = a,
            A = n(a, [
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
            getPrefixCls: B,
            direction: C
        } = h.useContext(i.ConfigContext), D = h.useContext(k.GroupContext), {
            isFormItemInput: E
        } = h.useContext(j.FormItemInputContext), F = h.useContext(l.default), G = null !== (p = (null == D ? void 0 : D.disabled) || z) && void 0 !== p ? p : F, H = h.useRef(A.value);
        h.useEffect(() => {
            null == D || D.registerValue(A.value);
        }, []), h.useEffect(() => {
            if (!y)
                return A.value !== H.current && (null == D || D.cancelValue(H.current), null == D || D.registerValue(A.value), H.current = A.value), () => null == D ? void 0 : D.cancelValue(A.value);
        }, [A.value]);
        const I = B('checkbox', q),
            [J, K] = (0, m.default)(I),
            L = Object.assign({}, A);
        D && !y && (L.onChange = function() {
            A.onChange && A.onChange.apply(A, arguments), D.toggleOption && D.toggleOption({
                label: t,
                value: A.value
            });
        }, L.name = D.name, L.checked = D.value.includes(A.value));
        const M = b(f)({
                [`${ I }-wrapper`]: !0,
                [`${ I }-rtl`]: 'rtl' === C,
                [`${ I }-wrapper-checked`]: L.checked,
                [`${ I }-wrapper-disabled`]: G,
                [`${ I }-wrapper-in-form-item`]: E
            }, r, _s, K),
            N = b(f)({
                [`${ I }-indeterminate`]: u
            }, K),
            O = u ? 'mixed' : void 0;
        return J(h.createElement('label', {
            className: M,
            style: v,
            onMouseEnter: w,
            onMouseLeave: x
        }, h.createElement(g.default, Object.assign({
            'aria-checked': O
        }, L, {
            prefixCls: I,
            className: N,
            disabled: G,
            ref: c
        })), void 0 !== t && h.createElement('span', null, t)));
    };
    var p = h.forwardRef(o);
}), c.register('q2qDo1', function(d, e) {
    a(d.exports, 'GroupContext', function() {
        return _n;
    }, function(f) {
        return _n = f;
    }), a(d.exports, 'default', function() {
        return _t;
    }, function(f) {
        return _t = f;
    });
    var f = c('g8lYc'),
        g = c('/U36/'),
        h = c('Kpy/B'),
        i = c('O0Kav'),
        j = c('R2nG3'),
        k = c('4shVI1'),
        l = c('NgjTH0'),
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
        o = (a, c) => {
            var {
                defaultValue: p,
                children: q,
                options: r = [],
                prefixCls: s,
                className: _t,
                rootClassName: u,
                style: v,
                onChange: w
            } = a, x = m(a, [
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
                getPrefixCls: y,
                direction: z
            } = i.useContext(j.ConfigContext), [A, B] = i.useState(x.value || p || []), [C, D] = i.useState([]);
            i.useEffect(() => {
                'value' in x && B(x.value || []);
            }, [x.value]);
            const E = () => r.map(a => 'string' == typeof a || 'number' == typeof a ? {
                    label: a,
                    value: a
                } : a),
                F = y('checkbox', s),
                G = `${ F }-group`,
                [H, I] = (0, l.default)(F),
                J = (0, h.default)(x, [
                    'value',
                    'disabled'
                ]);
            r && r.length > 0 && (q = E().map(a => i.createElement(k.default, {
                prefixCls: F,
                key: a.value.toString(),
                disabled: 'disabled' in a ? a.disabled : x.disabled,
                value: a.value,
                checked: A.includes(a.value),
                onChange: a.onChange,
                className: `${ G }-item`,
                style: a.style
            }, a.label)));
            const K = {
                    toggleOption: a => {
                        const L = A.indexOf(a.value),
                            M = (0, f.default)(A); -
                        1 === L ? M.push(a.value) : M.splice(L, 1), 'value' in x || B(M);
                        const N = E();
                        null == w || w(M.filter(a => C.includes(a)).sort((a, L) => N.findIndex(L => L.value === a) - N.findIndex(a => a.value === L)));
                    },
                    value: A,
                    disabled: x.disabled,
                    name: x.name,
                    registerValue: a => {
                        D(b => [].concat((0, f.default)(b), [a]));
                    },
                    cancelValue: a => {
                        D(b => b.filter(b => b !== a));
                    }
                },
                L = b(g)(G, {
                    [`${ G }-rtl`]: 'rtl' === z
                }, _t, u, I);
            return H(i.createElement('div', Object.assign({
                className: L,
                style: v
            }, J, {
                ref: c
            }), i.createElement(_n.Provider, {
                value: K
            }, q)));
        },
        p = i.forwardRef(o);
    var q = i.memo(p);
}), c.register('NgjTH0', function(d, e) {
    a(d.exports, 'getStyle', function() {
        return _l;
    }), a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('ZyWBF'),
        g = c('GhPPX'),
        h = c('qJkLY'),
        i = c('/zzpx');
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
        k = a => {
            const {
                checkboxCls: l
            } = a, m = `${ l }-wrapper`;
            return [{
                    [`${ l }-group`]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                        display: 'inline-flex'
                    }),
                    [m]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                        display: 'inline-flex',
                        alignItems: 'baseline',
                        cursor: 'pointer',
                        '&:after': {
                            display: 'inline-block',
                            width: 0,
                            overflow: 'hidden',
                            content: '\'\\a0\''
                        },
                        [`& + ${ m }`]: {
                            marginInlineStart: a.marginXS
                        },
                        [`&${ m }-in-form-item`]: {
                            'input[type="checkbox"]': {
                                width: 14,
                                height: 14
                            }
                        }
                    }),
                    [l]: Object.assign(Object.assign({}, (0, i.resetComponent)(a)), {
                        top: '0.2em',
                        position: 'relative',
                        whiteSpace: 'nowrap',
                        lineHeight: 1,
                        cursor: 'pointer',
                        [`${ l }-input`]: {
                            position: 'absolute',
                            inset: 0,
                            zIndex: 1,
                            width: '100%',
                            height: '100%',
                            cursor: 'pointer',
                            opacity: 0,
                            [`&:focus-visible + ${ l }-inner`]: Object.assign({}, (0, i.genFocusOutline)(a))
                        },
                        [`${ l }-inner`]: {
                            boxSizing: 'border-box',
                            position: 'relative',
                            top: 0,
                            insetInlineStart: 0,
                            display: 'block',
                            width: a.checkboxSize,
                            height: a.checkboxSize,
                            direction: 'ltr',
                            backgroundColor: a.colorBgContainer,
                            border: `${ a.lineWidth }px ${ a.lineType } ${ a.colorBorder }`,
                            borderRadius: a.borderRadiusSM,
                            borderCollapse: 'separate',
                            transition: `all ${ a.motionDurationSlow }`,
                            '&:after': {
                                boxSizing: 'border-box',
                                position: 'absolute',
                                top: '50%',
                                insetInlineStart: '21.5%',
                                display: 'table',
                                width: a.checkboxSize / 14 * 5,
                                height: a.checkboxSize / 14 * 8,
                                border: `${ a.lineWidthBold }px solid ${ a.colorWhite }`,
                                borderTop: 0,
                                borderInlineStart: 0,
                                transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                                opacity: 0,
                                content: '""',
                                transition: `all ${ a.motionDurationFast } ${ a.motionEaseInBack }, opacity ${ a.motionDurationFast }`
                            }
                        },
                        '& + span': {
                            paddingInlineStart: a.paddingXS,
                            paddingInlineEnd: a.paddingXS
                        }
                    })
                },
                {
                    [l]: {
                        '&-indeterminate': {
                            [`${ l }-inner`]: {
                                '&:after': {
                                    top: '50%',
                                    insetInlineStart: '50%',
                                    width: a.fontSizeLG / 2,
                                    height: a.fontSizeLG / 2,
                                    backgroundColor: a.colorPrimary,
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
                    [`${ m }:hover ${ l }:after`]: {
                        visibility: 'visible'
                    },
                    [`\n        ${ m }:not(${ m }-disabled),\n        ${ l }:not(${ l }-disabled)\n      `]: {
                        [`&:hover ${ l }-inner`]: {
                            borderColor: a.colorPrimary
                        }
                    },
                    [`${ m }:not(${ m }-disabled)`]: {
                        [`&:hover ${ l }-checked:not(${ l }-disabled) ${ l }-inner`]: {
                            backgroundColor: a.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ l }-checked:not(${ l }-disabled):after`]: {
                            borderColor: a.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ l }-checked`]: {
                        [`${ l }-inner`]: {
                            backgroundColor: a.colorPrimary,
                            borderColor: a.colorPrimary,
                            '&:after': {
                                opacity: 1,
                                transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                                transition: `all ${ a.motionDurationMid } ${ a.motionEaseOutBack } ${ a.motionDurationFast }`
                            }
                        },
                        '&:after': {
                            position: 'absolute',
                            top: 0,
                            insetInlineStart: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: a.borderRadiusSM,
                            visibility: 'hidden',
                            border: `${ a.lineWidthBold }px solid ${ a.colorPrimary }`,
                            animationName: j,
                            animationDuration: a.motionDurationSlow,
                            animationTimingFunction: 'ease-in-out',
                            animationFillMode: 'backwards',
                            content: '""',
                            transition: `all ${ a.motionDurationSlow }`
                        }
                    },
                    [`\n        ${ m }-checked:not(${ m }-disabled),\n        ${ l }-checked:not(${ l }-disabled)\n      `]: {
                        [`&:hover ${ l }-inner`]: {
                            backgroundColor: a.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ l }:after`]: {
                            borderColor: a.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ m }-disabled`]: {
                        cursor: 'not-allowed'
                    },
                    [`${ l }-disabled`]: {
                        [`&, ${ l }-input`]: {
                            cursor: 'not-allowed',
                            pointerEvents: 'none'
                        },
                        [`${ l }-inner`]: {
                            background: a.colorBgContainerDisabled,
                            borderColor: a.colorBorder,
                            '&:after': {
                                borderColor: a.colorTextDisabled
                            }
                        },
                        '&:after': {
                            display: 'none'
                        },
                        '& + span': {
                            color: a.colorTextDisabled
                        },
                        [`&${ l }-indeterminate ${ l }-inner::after`]: {
                            background: a.colorTextDisabled
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
    var _m = (0, g.default)('Checkbox', (a, d) => {
        let {
            prefixCls: n
        } = d;
        return [_l(n, a)];
    });
});