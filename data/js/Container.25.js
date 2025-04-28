function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('Uem3+', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _I(b.exports, 'default', function() {
        return _j;
    });
    var e = a('0hzx+');
    a('LEQ5w');
    var f = a('2x11J'),
        g = a('eqVZk'),
        h = a('2zuwJ'),
        i = a('q4jcs');
    var _j = () => (0, e.jsx)(i.default.Provider, {
        value: g.default,
        children: (0, e.jsx)(f.Provider, {
            ...g.default,
            children: (0, e.jsx)(h.default, {})
        })
    });
}), a.register('eqVZk', function(b, c) {
    _I(b.exports, 'default', function() {
        return _f;
    });
    var d = a('OmYTO'),
        e = a('m15WC');
    var _f = {
        navigation: new(0, d.default)(),
        kits: new(0, e.default)()
    };
}), a.register('OmYTO', function(b, c) {
    _I(b.exports, 'default', function() {
        return _g;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    class f {
        constructor() {
            this.archiveModalShow = !1, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], f.prototype, 'archiveModalShow', void 0);
    var _g = f;
}), a.register('m15WC', function(b, c) {
    _I(b.exports, 'default', function() {
        return _g;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    class f {
        constructor() {
            this.kitAttemptedAction = 'open', (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], f.prototype, 'kitAttemptedAction', void 0);
    var _g = f;
}), a.register('2zuwJ', function(b, c) {
    _I(b.exports, 'default', function() {
        return _H;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('sHRDd'),
        h = a('4ITUA'),
        i = a('b5kvC'),
        j = a('PMl60'),
        k = a('T0wPV'),
        l = a('/yI7M'),
        m = a('BtZXP'),
        n = a('DKJUZ'),
        o = a('PdQLR'),
        p = a('9yGkF'),
        q = a('nCi40'),
        r = a('RJjEi'),
        s = a('iIoYI'),
        t = a('13HCY'),
        u = a('bdn4O17'),
        v = a('gs4MT'),
        w = a('9R7cy'),
        x = a('WC4kE'),
        y = a('mjBBc'),
        z = a('/2bBN24');
    let A, B, C, D = _I => _I;
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
    var _H = () => {
        const [_I, J, K] = (0, j.useBoolean)(!1), [L, M] = e.useState(!1), [N, O] = e.useState(!1), P = e.useRef(null), Q = (0, z.useMediaMatch)('(max-width: 680px)'), R = (0, j.getUser)();
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
                            openUpgradeModal: _I => {
                                M(null != _I && _I), J();
                            }
                        })
                    ]
                }),
                (0, d.jsx)(n.default, {
                    upgradeModalVisible: _I,
                    proUpsellModalVisible: N
                }),
                (0, d.jsx)(o.default, {}),
                (0, d.jsx)(m.default, {
                    id: L ? 'dashboard-auto' : 'dashboard',
                    visible: _I,
                    close: K,
                    showModes: !0
                }),
                R.type === q.PlanIds.proPass ? (0, d.jsx)(p.default, {
                    onVisibleChange: O
                }) : null
            ]
        });
    };
}), a.register('4ITUA', function(b, c) {
    _v(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('bo2ub'),
        g = a('z6fHm'),
        h = a('Axq+p'),
        i = a('sHRDd'),
        j = a('ygL5K'),
        k = a('lK6+Z'),
        l = a('70AkF'),
        m = a('wYGc3'),
        n = a('gs4MT'),
        o = a('PMl60'),
        p = a('f7FDJ');
    let q;
    const r = h.default.div.attrs({
        className: 'flex-column'
    })(q || (q = (_v => _v)`
  color: ${ 0 };
  flex: 1;
`), i.default.Black);
    let s;
    var t;
    (t = s || (s = {})).kits = 'kits', t.reports = 'reports', t.assignments = 'assignments', t.classes = 'classes', t.hub = 'hub';
    var _u = () => {
        const {
            pathname: _v
        } = (0, m.useLocation)(), w = e.useMemo(() => _v ? (0, l.matchPath)({
            path: n.REPORTS
        }, _v) ? s.reports : (0, l.matchPath)({
            path: n.ASSIGNMENTS
        }, _v) ? s.assignments : (0, l.matchPath)({
            path: n.CLASSES
        }, _v) ? s.classes : (0, l.matchPath)({
            path: n.HOME
        }, _v) ? s.hub : (0, l.matchPath)({
            path: n.KITS
        }, _v) || (0, l.matchPath)({
            path: n.KITS_SELECTION
        }, _v) ? s.kits : (0, o.isStudent)() ? s.hub : s.kits : s.kits, [_v]), x = e.useMemo(() => {
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
}), a.register('bo2ub', function(b, c) {
    _t(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('6kROb'),
        g = a('X0j0k'),
        h = a('d0QwM'),
        i = a('gs4MT'),
        j = a('PMl60'),
        k = a('jzxyj10'),
        l = a('aNszb0'),
        m = a('Qvzn2'),
        n = a('vSepd'),
        o = a('QRHV8'),
        p = a('70AkF'),
        q = a('WC4kE');
    const r = e.lazy(() => a('xqyzr'));
    var _s = () => {
        var _t, u, v, w, x;
        const {
            data: y,
            isLoading: z
        } = (0, n.default)(), {
            id: A
        } = (0, p.useParams)(), B = (0, q.IsEducator)() && (null === (_t = (0, j.getUser)()) || void 0 === _t ? void 0 : _t.schoolId) && 'school' === A;
        var C;
        const D = null !== (C = null === (u = null == y || null === (v = y.folders) || void 0 === v ? void 0 : v.find(_t => _t._id === A)) || void 0 === u ? void 0 : u._id) && void 0 !== C ? C : '';
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
                            folders: null !== (_G = null == y ? void 0 : y.folders) && void 0 !== _G ? _G : [],
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
        var _G;
    };
}), a.register('6kROb', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('zZt5+'),
        f = a('R6gfH'),
        g = a('9R7cy'),
        h = a('PMl60');
    var _i = _i => {
        var j;
        const k = [],
            l = [],
            m = null === (j = _i.folders) || void 0 === j ? void 0 : j.find(j => j._id === _i.selectedFolder);
        _i.kits.forEach(j => {
            if (_i.selectedFolder) {
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
                !n.length && _i.selectedFolder ? (0, d.jsxs)('div', {
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
                                folderId: _i.selectedFolder
                            })
                        }, 'dashboard-kit-' + j._id))
                    })
                })
            ]
        });
    };
}), a.register('zZt5+', function(b, c) {
    _i(b.exports, 'IMAGE_SIZE', function() {
        return _Y;
    }), _i(b.exports, 'Content', function() {
        return _Z;
    }), _i(b.exports, 'LeftSide', function() {
        return _$;
    }), _i(b.exports, 'KitInfo', function() {
        return _ab;
    }), _i(b.exports, 'KitTitle', function() {
        return _bb;
    }), _i(b.exports, 'KitDescription', function() {
        return _db;
    }), _i(b.exports, 'default', function() {
        return _hb;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('gn3Uk7'),
        g = a('ieNls8'),
        h = a('GldUd7'),
        i = a('LHeQv'),
        j = a('uHpNo1'),
        k = a('o7ozn'),
        l = a('6d43L'),
        m = a('jnjmk3'),
        n = a('ZYBJo4'),
        o = a('ulE4q'),
        p = a('oXQNI'),
        q = a('/rAT0'),
        r = a('WfOD7'),
        s = a('YRlpt'),
        t = a('6BM9K6'),
        u = a('Axq+p'),
        v = a('sHRDd'),
        w = a('b5kvC'),
        x = a('2x11J'),
        y = a('PMl60'),
        z = a('gs4MT'),
        A = a('DKaq/'),
        B = a('5fWhi'),
        C = a('lXrA+'),
        D = a('q4jcs'),
        E = a('BtZXP'),
        F = a('Th7xx'),
        G = a('jzxyj10'),
        H = a('ECzOP'),
        I = a('vSepd'),
        J = a('BViXJ'),
        K = a('INKb2'),
        L = a('gi1Ds0'),
        M = a('lQ8n8'),
        N = a('WC4kE');
    let O, P, Q, R, S, T, U, V, W, X = _i => _i;
    const _Y = 80,
        _Z = u.default.div(O || (O = X`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`)),
        _$ = u.default.div(P || (P = X`
  display: flex;
  align-items: center;
  width: calc(100% - 182px);
`)),
        _ab = u.default.div(Q || (Q = X`
  margin-right: 20px;
  flex: 1;
  margin-left: 12px;
  overflow: hidden;
  max-width: 100%;
`)),
        _bb = u.default.div(R || (R = X`
  font-weight: ${ 0 };
  font-size: 23px;
  max-width: 100%;
  display: flex;
  align-items: center;
`), w.FontWeights.Bold),
        cb = u.default.div(S || (S = X`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`)),
        _db = u.default.div(T || (T = X`
  opacity: 0.7;
  font-size: 15;
  margin-top: -7px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`)),
        eb = u.default.div(U || (U = X`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`)),
        fb = u.default.div(V || (V = X`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`)),
        gb = u.default.div(W || (W = X`
  display: flex;
  align-items: center;
  justify-content: center;
`));
    var _hb = (0, x.observer)(_i => {
        const {
            kits: ib,
            navigation: jb
        } = e.useContext(D.default), [kb, lb, mb] = (0, y.useBoolean)(!1), [nb, ob, pb] = (0, y.useBoolean)(!1), [qb, rb] = e.useState(C.IExperiencePickerMode.liveGame), [sb, tb] = e.useState(null), {
            game: ub
        } = _i, vb = e.useMemo(() => ub.createdAt ? `Created ${ _Gb(H)(ub.createdAt).fromNow() }` : '', [
            ub.editCount,
            ub.updatedAt,
            ub.createdAt
        ]), wb = e.useCallback(_i => !!ub.isArchived && (ib.kitAttemptedAction = _i, jb.archiveModalShow = !0, !0), [ub.isArchived]), xb = () => {
            wb('open') || (0, G.NavigateTo)(`/view/${ ub._id }`);
        }, yb = () => {
            wb('edit') || (0, G.NavigateTo)(z.KIT_CREATOR + `/${ ub._id }/editor`);
        }, zb = () => {
            wb('copy') || (!(0, N.IsEducator)() || (0, y.isUpgraded)() ? (0, y.copyKit)({
                kitId: ub._id,
                onSuccess: () => {
                    (0, I.invalidateKits)(), (0, G.NavigateTo)(z.KITS);
                },
                onFailure: () => (0, K.throwError)({
                    title: 'Error copying kit'
                })
            }) : tb({
                id: 'self-copy',
                ...L.UpgradeModal_CopyKit
            }));
        }, Ab = () => {
            wb('make changes to') || (!(0, N.IsEducator)() || (0, y.isUpgraded)() ? lb() : tb({
                id: 'folders',
                ...M.UpgradeModal_Folders
            }));
        }, Bb = _i => {
            (0, y.request)({
                url: '/api/games/archived',
                data: {
                    id: ub._id,
                    archived: _i
                },
                success: () => (0, I.invalidateKits)()
            });
        }, Cb = () => Bb(!0), Db = () => Bb(!1), Eb = () => {
            (0, y.request)({
                url: '/api/folders/removeGame',
                method: 'post',
                data: {
                    gameId: ub._id,
                    folderId: _i.folderId
                },
                success: () => {
                    (0, I.invalidateKits)();
                },
                error: _i => {
                    (0, y.throwMessageError)({
                        e: _i,
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
                            id: ub._id
                        },
                        success: () => {
                            (0, I.invalidateKits)();
                        },
                        error: _i => (0, y.throwMessageError)({
                            e: _i,
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
                        children: (0, d.jsxs)(_Z, {
                            children: [
                                (0, d.jsxs)(_$, {
                                    onClick: xb,
                                    children: [
                                        (0, d.jsx)('div', {
                                            children: (0, d.jsx)(A.default, {
                                                image: ub.gif,
                                                size: _Y,
                                                blockModalOpen: !0,
                                                onClick: xb
                                            })
                                        }),
                                        (0, d.jsxs)(_ab, {
                                            children: [
                                                (0, d.jsxs)(_bb, {
                                                    children: [
                                                        (0, d.jsx)(cb, {
                                                            children: ub.title
                                                        }),
                                                        ub.isArchived && (0, d.jsx)(t.default, {
                                                            style: {
                                                                marginLeft: 5
                                                            },
                                                            children: 'Archived'
                                                        })
                                                    ]
                                                }),
                                                (0, d.jsx)(_db, {
                                                    children: vb
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, d.jsxs)(eb, {
                                    children: [
                                        (0, d.jsxs)(fb, {
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
                                                        wb('play') || (rb(C.IExperiencePickerMode.liveGame), ob());
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
                                                        wb('assign') || (rb(C.IExperiencePickerMode.assignment), ob());
                                                    },
                                                    children: 'Assign HW'
                                                })
                                            ]
                                        }),
                                        (0, d.jsx)(gb, {
                                            children: (0, d.jsx)(q.default, {
                                                overlay: (() => {
                                                    const {
                                                        isArchived: _Gb
                                                    } = ub;
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
                                                            _i.folderId ? null : (0, d.jsxs)(r.default.Item, {
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
                                                            _i.folderId ? (0, d.jsxs)(r.default.Item, {
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
                                                            _Gb ? (0, d.jsxs)(r.default.Item, {
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
                                                                onClick: _Gb ? Db : Cb,
                                                                children: [
                                                                    (0, d.jsx)(j.default, {
                                                                        style: {
                                                                            marginRight: 7
                                                                        }
                                                                    }),
                                                                    _Gb ? 'Unarchive' : 'Archive'
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
                    open: kb,
                    close: mb,
                    kitId: ub._id
                }),
                nb ? qb !== C.IExperiencePickerMode.assignment || (0, y.isUpgraded)() ? (0, d.jsx)(B.default, {
                    gameId: ub._id,
                    close: pb,
                    mode: qb
                }) : (0, d.jsx)(E.default, {
                    id: 'assignment creation',
                    visible: nb,
                    close: pb,
                    copy: {
                        title: F.ASSIGNMENT_UPSELL_TITLE,
                        description: F.ASSIGNMENT_UPSELL_DESCRIPTION
                    }
                }) : null,
                sb ? (0, d.jsx)(E.default, {
                    id: sb.id,
                    visible: !0,
                    close: () => tb(null),
                    copy: {
                        title: sb.title,
                        description: sb.description
                    }
                }) : null
            ]
        });
    });
}), a.register('gn3Uk7', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('haBtH6'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'CopyOutlined';
    var _i = e.forwardRef(h);
}), a.register('haBtH6', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('ieNls8', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('8auc66'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DeleteOutlined';
    var _i = e.forwardRef(h);
}), a.register('8auc66', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('GldUd7', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('1tgJh4'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'EditOutlined';
    var _i = e.forwardRef(h);
}), a.register('1tgJh4', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('uHpNo1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('in/jk1'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'FilterOutlined';
    var _i = e.forwardRef(h);
}), a.register('in/jk1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('6d43L', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('a/2ph'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'FullscreenOutlined';
    var _i = e.forwardRef(h);
}), a.register('a/2ph', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('jnjmk3', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('F1Ocd'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'PaperClipOutlined';
    var _i = e.forwardRef(h);
}), a.register('F1Ocd', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('ZYBJo4', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('CHYV/2'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'PlayCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('CHYV/2', function(b, c) {
    _d(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('6BM9K6', function(b, c) {
    _d(b.exports, 'default', function() {
        return _s;
    }, function(_d) {
        return _s = _d;
    });
    var d = a('QECub'),
        e = a('JrtKP'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('dFMJk'),
        i = a('QyNEL'),
        j = a('J4wJU8'),
        k = a('E4QrV8'),
        l = function(m, n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
            }
            return o;
        };
    const m = (_d, a) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: p,
                style: q,
                children: r,
                icon: _s,
                color: t,
                onClose: u,
                closeIcon: v,
                closable: w = !1
            } = _d, x = l(_d, [
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
                getPrefixCls: y,
                direction: z
            } = f.useContext(g.ConfigContext), [A, B] = f.useState(!0);
            f.useEffect(() => {
                'visible' in x && B(x.visible);
            }, [x.visible]);
            const C = (0, h.isPresetColor)(t) || (0, h.isPresetStatusColor)(t),
                D = Object.assign({
                    backgroundColor: t && !C ? t : void 0
                }, q),
                E = y('tag', n),
                [F, G] = (0, k.default)(E),
                H = _j(e)(E, {
                    [`${ E }-${ t }`]: C,
                    [`${ E }-has-color`]: t && !C,
                    [`${ E }-hidden`]: !A,
                    [`${ E }-rtl`]: 'rtl' === z
                }, o, p, G),
                I = _d => {
                    _d.stopPropagation(), null == u || u(_d), _d.defaultPrevented || B(!1);
                },
                J = 'function' == typeof x.onClick || r && 'a' === r.type,
                K = _s || null,
                L = K ? f.createElement(f.Fragment, null, K, f.createElement('span', null, r)) : r,
                M = f.createElement('span', Object.assign({}, x, {
                    ref: a,
                    className: H,
                    style: D
                }), L, w ? v ? f.createElement('span', {
                    className: `${ E }-close-icon`,
                    onClick: I
                }, v) : f.createElement(d.default, {
                    className: `${ E }-close-icon`,
                    onClick: I
                }) : null);
            return F(J ? f.createElement(i.default, null, M) : M);
        },
        n = f.forwardRef(m);
    n.CheckableTag = j.default;
    var o = n;
}), a.register('J4wJU8', function(b, c) {
    _d(b.exports, 'default', function() {
        return _i;
    }, function(_d) {
        return _i = _d;
    });
    var d = a('JrtKP'),
        e = a('LEQ5w'),
        f = a('1P5ls'),
        g = a('E4QrV8'),
        h = function(i, _j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && _j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    _j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        };
    var _i = _e => {
        var {
            prefixCls: j,
            className: k,
            checked: l,
            onChange: m,
            onClick: n
        } = _e, o = h(_e, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: p
        } = e.useContext(f.ConfigContext), q = p('tag', j), [r, s] = (0, g.default)(q), t = _b(d)(q, {
            [`${ q }-checkable`]: !0,
            [`${ q }-checkable-checked`]: l
        }, k, s);
        return r(e.createElement('span', Object.assign({}, o, {
            className: t,
            onClick: _e => {
                null == m || m(!l), null == n || n(_e);
            }
        })));
    };
}), a.register('E4QrV8', function(_b, c) {
    _e(_b.exports, 'default', function() {
        return _l;
    });
    var d = a('XC0UB'),
        e = a('l+IVY'),
        f = a('xbYck1'),
        g = a('bL6OF'),
        h = a('7hbGU');
    const i = (_e, _b, a) => {
            const j = (0, f.default)(a);
            return {
                [`${ _e.componentCls }-${ _b }`]: {
                    color: _e[`color${ a }`],
                    background: _e[`color${ j }Bg`],
                    borderColor: _e[`color${ j }Border`]
                }
            };
        },
        j = _e => (0, g.genPresetColor)(_e, (_b, a) => {
            let {
                textColor: k,
                lightBorderColor: l,
                lightColor: m,
                darkColor: n
            } = a;
            return {
                [`${ _e.componentCls }-${ _b }`]: {
                    color: k,
                    background: m,
                    borderColor: l,
                    '&-inverse': {
                        color: _e.colorTextLightSolid,
                        background: n,
                        borderColor: n
                    }
                }
            };
        }),
        k = _e => {
            const {
                paddingXXS: l,
                lineWidth: m,
                tagPaddingHorizontal: n,
                componentCls: o
            } = _e, p = n - m, q = l - m;
            return {
                [o]: Object.assign(Object.assign({}, (0, h.resetComponent)(_e)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: _e.marginXS,
                    paddingInline: p,
                    fontSize: _e.tagFontSize,
                    lineHeight: `${ _e.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: _e.tagDefaultBg,
                    border: `${ _e.lineWidth }px ${ _e.lineType } ${ _e.colorBorder }`,
                    borderRadius: _e.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ _e.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ o }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: _e.tagDefaultColor
                    },
                    [`${ o }-close-icon`]: {
                        marginInlineStart: q,
                        color: _e.colorTextDescription,
                        fontSize: _e.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ _e.motionDurationMid }`,
                        '&:hover': {
                            color: _e.colorTextHeading
                        }
                    },
                    [`&${ o }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ _e.iconCls }-close, ${ _e.iconCls }-close:hover`]: {
                            color: _e.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ o }-checkable-checked):hover`]: {
                            color: _e.colorPrimary,
                            backgroundColor: _e.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: _e.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: _e.colorPrimary,
                            '&:hover': {
                                backgroundColor: _e.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: _e.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ _e.iconCls } + span, > span + ${ _e.iconCls }`]: {
                        marginInlineStart: p
                    }
                })
            };
        };
    var _l = (0, d.default)('Tag', _e => {
        const {
            fontSize: m,
            lineHeight: n,
            lineWidth: o,
            fontSizeIcon: p
        } = _e, q = Math.round(m * n), r = _e.fontSizeSM, s = q - 2 * o, t = _e.colorFillAlter, u = _e.colorText, v = (0, e.merge)(_e, {
            tagFontSize: r,
            tagLineHeight: s,
            tagDefaultBg: t,
            tagDefaultColor: u,
            tagIconSize: p - 2 * o,
            tagPaddingHorizontal: 8
        });
        return [
            k(v),
            j(v),
            i(v, 'success', 'Success'),
            i(v, 'processing', 'Info'),
            i(v, 'error', 'Error'),
            i(v, 'warning', 'Warning')
        ];
    });
}), a.register('xbYck1', function(b, c) {
    function d(_e) {
        if ('string' != typeof _e)
            return _e;
        return _e.charAt(0).toUpperCase() + _e.slice(1);
    }
    _d(b.exports, 'default', function() {
        return _c;
    });
}), a.register('DKaq/', function(b, _c) {
    _d(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('YRlpt'),
        h = a('sHRDd'),
        i = a('x8CoD');
    let j;
    const k = f.default.img.attrs(_d => ({
        src: _d.image
    }))(j || (j = (_d => _d)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), _d => _d.size, _d => _d.size, _d => _d.customRightMargin ? _d.customRightMargin : 0, _d => _d.showBorder && `border: solid ${ h.default.Black } 1px;`);
    var _l = _d => {
        const [m, n] = e.useState(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(k, {
                    ..._d,
                    onClick: m => {
                        m.stopPropagation(), _d.onClick && _d.onClick(), _d.blockModalOpen || n(!0);
                    }
                }),
                (0, d.jsx)(g.default, {
                    open: m,
                    onCancel: _d => {
                        _d.stopPropagation(), n(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, d.jsx)('img', {
                        src: (0, i.getCloudinaryUrl)(_d.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), a.register('x8CoD', function(b, c) {
    _d(b.exports, 'getCloudinaryUrl', function() {
        return _d;
    });
    const _d = _d => {
            const e = _e(_d);
            return e ? _d.includes('/video/upload') ? `https://${ _f }/video/upload/${ e }` : `https://${ _f }/image/upload/f_auto,fl_lossy,q_auto/${ e }` : _d;
        },
        _e = _d => {
            if (!_i.some(b => _d.includes(b)))
                return null;
            if (_d.includes(_g) && !_d.includes(`/${ _h }/`))
                return null;
            const f = _d.split('/');
            if (!f || !f.length || f.length < 2)
                return null;
            const g = f[f.length - 2],
                h = f[f.length - 1];
            return g && h && g.startsWith('v') ? `${ g }/${ h }` : null;
        },
        _f = 'media.gimkit.com',
        _g = 'res.cloudinary.com',
        _h = 'gimkit-production',
        _i = [
            _f,
            _g
        ];
}), a.register('q4jcs', function(b, c) {
    _d(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('eqVZk');
    var _f = d.createContext(e.default);
}), a.register('jzxyj10', function(b, c) {
    _d(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = _d => {
        d.history.push(_d);
    };
}), a.register('BViXJ', function(b, c) {
    _d(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ulE4q'),
        g = a('fmVdR'),
        h = a('sgToH'),
        i = a('ewwAh'),
        j = a('MSsQO'),
        k = a('cvto726'),
        l = a('6CIVV'),
        m = a('Axq+p'),
        n = a('9R7cy'),
        o = a('PMl60'),
        p = a('vSepd');
    let q;
    const r = _d => {
        const [s, t, u] = (0, o.useBoolean)(!1);
        return (0, d.jsx)(k.default, {
            direction: 'vertical',
            size: 7,
            className: 'maxWidth',
            children: _d.folders.map(e => (0, d.jsxs)(_t, {
                onClick: () => {
                    return d = e._id, void(s || (t(), (0, o.request)({
                        url: '/api/folders/addGame',
                        data: {
                            folderId: d,
                            gameId: _d.kitId
                        },
                        success: () => {
                            _d.close(), (0, p.invalidateKits)(), j.default.success({
                                content: 'Kit added to folder!'
                            });
                        },
                        error: _d => {
                            (0, o.throwMessageError)({
                                e: _d,
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
    var _s = _d => {
        const {
            data: {
                folders: t
            },
            isLoading: u
        } = (0, p.default)(), [v, w, x] = (0, o.useBoolean)(!1), [y, z] = e.useState('');
        e.useEffect(() => {
            _d.open || z('');
        }, [_d.open]);
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
                                gameId: _d.kitId
                            },
                            success: () => {
                                _d.close(), (0, p.invalidateKits)();
                            },
                            error: _d => {
                                (0, o.throwMessageError)({
                                    e: _d,
                                    default: {
                                        title: 'Error adding kit to folder'
                                    }
                                });
                            },
                            both: x
                        });
                    },
                    error: _d => {
                        (0, o.throwMessageError)({
                            e: _d,
                            default: {
                                title: 'Error creating folder'
                            }
                        }), x();
                    }
                }));
            };
        return (0, d.jsx)(h.default, {
            open: _d.open,
            onClose: _d.close,
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
                const C = null == t ? void 0 : t.filter(t => !t.games.includes(_d.kitId)).sort((_d, t) => _d.title.localeCompare(t.title));
                return (0, d.jsxs)('div', {
                    children: [
                        (0, d.jsx)(i.default, {
                            placeholder: 'New folder name...',
                            value: y,
                            onChange: _d => z(_d.target.value),
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
                                    folders: C.map(_d => ({
                                        _id: _d._id,
                                        name: _d.title
                                    })),
                                    kitId: _d.kitId,
                                    close: _d.close
                                })
                            ]
                        }) : null
                    ]
                });
            })()
        });
    };
    const _t = m.default.div.attrs({
        className: 'flex vc'
    })(q || (q = (_d => _d)`
  padding: 12px 20px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`));
}), a.register('cvto726', function(b, c) {
    _d(b.exports, 'SpaceContext', function() {
        return _m;
    }, function(_d) {
        return _m = _d;
    }), _d(b.exports, 'default', function() {
        return _u;
    }, function(_d) {
        return _u = _d;
    });
    var d = a('JrtKP'),
        e = a('Ug51y0'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('4gObz26'),
        i = a('VqIM2'),
        j = a('P8P+826'),
        k = a('/xlT+'),
        l = function(m, n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
            }
            return o;
        };
    const _m = f.createContext({
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
    const o = _G => {
        const {
            getPrefixCls: p,
            space: q,
            direction: r
        } = f.useContext(g.ConfigContext), {
            size: s = (null == q ? void 0 : q.size) || 'small',
            align: t,
            className: _u,
            rootClassName: v,
            children: w,
            direction: x = 'horizontal',
            prefixCls: y,
            split: z,
            style: A,
            wrap: B = !1
        } = _G, C = l(_G, [
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
        ]), D = (0, h.default)(), [E, F] = f.useMemo(() => (Array.isArray(s) ? s : [
            s,
            s
        ]).map(_G => function(_G) {
            return 'string' == typeof _G ? n[_G] : _G || 0;
        }(_g)), [s]), G = (0, e.default)(w, {
            keepEmpty: !0
        }), H = void 0 === t && 'horizontal' === x ? 'center' : t, I = p('space', y), [J, K] = (0, k.default)(I), L = _b(d)(I, K, `${ I }-${ x }`, {
            [`${ I }-rtl`]: 'rtl' === r,
            [`${ I }-align-${ H }`]: H
        }, _u, v), M = `${ I }-item`, N = 'rtl' === r ? 'marginLeft' : 'marginRight';
        let O = 0;
        const P = G.map((_g, _b) => {
                null != _g && (O = _b);
                const Q = _g && _g.key || `${ M }-${ _b }`;
                return f.createElement(j.default, {
                    className: M,
                    key: Q,
                    direction: x,
                    index: _b,
                    marginDirection: N,
                    split: z,
                    wrap: B
                }, _g);
            }),
            Q = f.useMemo(() => ({
                horizontalSize: E,
                verticalSize: F,
                latestIndex: O,
                supportFlexGap: D
            }), [
                E,
                F,
                O,
                D
            ]);
        if (0 === G.length)
            return null;
        const R = {};
        return B && (R.flexWrap = 'wrap', D || (R.marginBottom = -F)), D && (R.columnGap = E, R.rowGap = F), J(f.createElement('div', Object.assign({
            className: L,
            style: Object.assign(Object.assign({}, R), A)
        }, C), f.createElement(_m.Provider, {
            value: Q
        }, P)));
    };
    o.Compact = i.default;
    var p = o;
}), a.register('4gObz26', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('XPzGa'),
        _f = () => {
            const [_g, h] = d.useState(!1);
            return d.useEffect(() => {
                h((0, e.detectFlexGapSupported)());
            }, []), _g;
        };
}), a.register('P8P+826', function(b, c) {
    _g(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('cvto726');

    function _f(_g) {
        let {
            className: h,
            direction: i,
            index: j,
            marginDirection: k,
            children: l,
            split: m,
            wrap: n
        } = _g;
        const {
            horizontalSize: o,
            verticalSize: p,
            latestIndex: q,
            supportFlexGap: r
        } = d.useContext(e.SpaceContext);
        let s = {};
        return r || ('vertical' === i ? j < q && (s = {
            marginBottom: o / (m ? 2 : 1)
        }) : s = Object.assign(Object.assign({}, j < q && {
            [k]: o / (m ? 2 : 1)
        }), n && {
            paddingBottom: p
        })), null == l ? null : d.createElement(d.Fragment, null, d.createElement('div', {
            className: h,
            style: s
        }, l), j < q && m && d.createElement('span', {
            className: `${ h }-split`,
            style: s
        }, m));
    }
}), a.register('9R7cy', function(b, c) {
    _b(b.exports, 'default', function() {
        return _e;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var _e = _b => (0, d.jsx)('i', {
        className: `${ _b.name }${ _b.className ? ` ${ _b.className }` : '' }`,
        style: _b.style
    });
}), a.register('gi1Ds0', function(b, c) {
    _b(b.exports, 'UpgradeModal_CopyKit', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('hHkFq');
    const _f = {
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
}), a.register('lQ8n8', function(b, c) {
    _b(b.exports, 'UpgradeModal_Folders', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('hHkFq');
    const _f = {
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
}), a.register('QRHV8', function(b, c) {
    _b(b.exports, 'default', function() {
        return _C;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ulE4q'),
        g = a('/rAT0'),
        h = a('ewwAh'),
        i = a('YRlpt'),
        j = a('cvto726'),
        k = a('j2ADs'),
        l = a('Axq+p'),
        m = a('sHRDd'),
        n = a('9R7cy'),
        o = a('TwXYL'),
        p = a('PMl60'),
        q = a('gs4MT'),
        r = a('2HvvA11'),
        s = a('vSepd');
    let t, u, v, w = _b => _b;
    const x = _b => {
            const y = _b ? '#1677ff' : 'rgba(0,0,0,0.07)';
            return {
                color: _b ? m.default.White : m.default.Black,
                backgroundColor: y,
                hoverBackgroundColor: _b ? y : 'rgba(0,0,0,0.11)'
            };
        },
        y = _b => {
            const {
                color: z,
                backgroundColor: A,
                hoverBackgroundColor: B
            } = x(_b.selected);
            return (0, d.jsx)(r.default, {
                to: _b.path,
                children: (0, d.jsxs)(_E, {
                    background: A,
                    color: z,
                    hoverBackgroundColor: B,
                    children: [
                        (0, d.jsx)('span', {
                            style: {
                                marginRight: 6
                            },
                            children: (0, d.jsx)(n.default, {
                                name: _b.icon
                            })
                        }),
                        _b.label
                    ]
                })
            });
        },
        z = _b => {
            const {
                color: A,
                backgroundColor: B,
                hoverBackgroundColor: C
            } = x(_b.selected), [D, E, F] = (0, p.useBoolean)(!1), [G, H, I] = (0, p.useBoolean)(!1);
            return (0, d.jsx)(r.default, {
                to: _b.path,
                children: (0, d.jsxs)(_E, {
                    background: B,
                    color: A,
                    hoverBackgroundColor: C,
                    children: [
                        _b.icon && !_b.selected ? (0, d.jsx)('span', {
                            style: {
                                marginRight: 6
                            },
                            children: _b.icon
                        }) : null,
                        (0, d.jsx)(o.motion.span, {
                            layout: !0,
                            children: _b.name
                        }),
                        _b.selected ? (0, d.jsx)(g.default, {
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
                            children: (0, d.jsx)(_F, {
                                children: (0, d.jsx)(n.default, {
                                    name: 'far fa-ellipsis-h'
                                })
                            })
                        }) : null,
                        (0, d.jsx)(_A, {
                            open: D,
                            close: F,
                            folderId: _b.id,
                            folderName: _b.name
                        }),
                        (0, d.jsx)(_B, {
                            open: G,
                            close: I,
                            folderId: _b.id
                        })
                    ]
                })
            });
        },
        _A = _b => {
            const [B, C, D] = (0, p.useBoolean)(!1), [E, F] = e.useState(''), G = e.useMemo(() => E.length < 2, [E]);
            e.useEffect(() => {
                _b.open || F('');
            }, [_b.open]);
            const H = () => {
                B || (C(), (0, p.request)({
                    url: '/api/folders/rename',
                    data: {
                        id: _b.folderId,
                        title: E
                    },
                    success: () => {
                        _b.close(), (0, s.invalidateKits)();
                    },
                    both: D,
                    error: _b => {
                        (0, p.throwMessageError)({
                            e: _b,
                            default: {
                                title: 'Error renaming folder'
                            }
                        });
                    }
                }));
            };
            return (0, d.jsxs)(i.default, {
                open: _b.open,
                onCancel: _b.close,
                title: 'Rename',
                footer: [
                    (0, d.jsx)(f.default, {
                        onClick: _b.close,
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
                                    _b.folderName,
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
                        onChange: _b => F(_b.target.value),
                        onPressEnter: H
                    })
                ]
            });
        },
        _B = _b => {
            const [C, D, E] = (0, p.useBoolean)(!1);
            return (0, d.jsx)(i.default, {
                open: _b.open,
                onCancel: _b.close,
                title: 'Delete Folder',
                footer: [
                    (0, d.jsx)(f.default, {
                        onClick: _b.close,
                        children: 'Cancel'
                    }, 'cancel-delete-folder'),
                    (0, d.jsx)(f.default, {
                        type: 'primary',
                        danger: !0,
                        onClick: () => {
                            D(), (0, p.request)({
                                url: '/api/folders/delete',
                                data: {
                                    id: _b.folderId
                                },
                                success: () => {
                                    _b.close(), (0, s.invalidateKits)();
                                },
                                error: _b => {
                                    (0, p.throwMessageError)({
                                        e: _b,
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
    var _C = _b => {
        var D;
        const E = !(0, p.isStudent)() && (null === (D = (0, p.getUser)()) || void 0 === D ? void 0 : D.schoolId),
            F = D => D === _b.selectedFolder && !_b.schoolLibraryScreenOpen;
        return (0, d.jsx)(_D, {
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
                        selected: _b.schoolLibraryScreenOpen,
                        path: `${ q.KITS }/school`
                    }) : null,
                    _b.folders.sort((_b, D) => _b.title.localeCompare(D.title)).map(_b => (0, d.jsx)(z, {
                        id: _b._id,
                        name: _b.title,
                        selected: F(_b._id),
                        path: `${ q.KITS }/${ _b._id }`,
                        icon: (0, d.jsx)(n.default, {
                            name: 'fas fa-folder'
                        })
                    }, `folder-${ _b._id }`))
                ]
            })
        });
    };
    const _D = l.default.div(t || (t = w`
  .ant-space-item {
    flex-shrink: 0;
  }
`)),
        _E = l.default.div.attrs({
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
`), _b => _b.background, _b => _b.color, _b => _b.hoverBackgroundColor),
        _F = l.default.div(v || (v = w`
  margin-left: 12px;
  transition: 0.15s background ease-in-out;
  padding: 0px 6px;
  border-radius: 4px;
  margin-right: -6px;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`));
}), a.register('2HvvA11', function(b, c) {
    _b(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('wYGc3');
    a('LEQ5w');
    var _f = _b => _b.external || !_b.to ? (0, d.jsx)('a', {
        href: _b.to,
        tabIndex: Number(_b.tabIndex || '0'),
        onClick: _b.onClick,
        onKeyPress: b => {
            _b.onClick && 'Enter' === b.key && (b.preventDefault(), _b.onClick());
        },
        className: _b.className,
        target: _b.target,
        style: _b.style,
        children: _b.children
    }) : (0, d.jsx)(e.Link, {
        to: _b.to,
        tabIndex: Number(_b.tabIndex || '0'),
        onClick: _b.onClick,
        className: _b.className,
        target: _b.target,
        style: _b.style,
        children: _b.children
    });
}), a.register('xqyzr', function(_b, c) {
    _b.exports = import('./' + a('HmN9A').resolve('iEAx1')).then(() => a('k41Xr'));
}), a.register('ygL5K', function(b, c) {
    _s(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('X0j0k'),
        f = a('rhPCi'),
        g = a('d0QwM'),
        h = a('gs4MT'),
        i = a('jzxyj10'),
        j = a('aNszb0'),
        k = a('Qvzn2'),
        l = a('cvto726'),
        m = a('LTYu3'),
        n = a('+i8ep'),
        o = a('F/h91'),
        p = a('vj5K40'),
        q = a('PMl60');
    var _r = () => {
        const {
            data: _s,
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
                t ? null : _s.length ? (0, d.jsx)(k.default, {
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
                        children: _s.map(_s => (0, d.jsx)(f.default, {
                            group: _s,
                            to: `/class/${ _s._id }`
                        }, _s._id))
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
}), a.register('rhPCi', function(b, c) {
    _o(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('oXQNI'),
        g = a('sHRDd'),
        h = a('Axq+p'),
        i = a('zZt5+'),
        j = a('PMl60'),
        k = a('2HvvA11');
    let l;
    const m = h.default.div(l || (l = (_o => _o)`
  background: ${ 0 };
  height: ${ 0 }px;
  width: ${ 0 }px;
  border-radius: 5px;
  margin-right: 10px;
`), _o => _o.color, i.IMAGE_SIZE, i.IMAGE_SIZE);
    class n extends e.Component {
        render() {
            const _o = {
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
                    style: _o,
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
    var _o = n;
}), a.register('vj5K40', function(b, c) {
    _l(b.exports, 'GetHomepagePath', function() {
        return _h;
    }), _l(b.exports, 'RedirectToHomepage', function() {
        return _i;
    }), _l(b.exports, 'ReplaceToHomePage', function() {
        return _j;
    });
    var d = a('gs4MT'),
        e = a('oBJ9G'),
        f = a('PMl60'),
        g = a('jzxyj10');
    const _h = () => (0, f.isLoggedIn)() ? (0, f.isStudent)() ? d.HOME : d.KITS : '/',
        _i = () => {
            (0, g.NavigateTo)(_h());
        },
        _j = () => {
            e.history.replace(_h());
        };
}), a.register('lK6+Z', function(b, c) {
    _l(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('X0j0k'),
        f = a('aCvqE'),
        g = a('Qvzn2'),
        h = a('+i8ep'),
        i = a('PMl60'),
        j = a('vj5K40');
    var _k = () => ((0, h.useDidMount)(() => {
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
}), a.register('aCvqE', function(b, c) {
    _l(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('PMl60'),
        g = a('FEpWv'),
        h = a('OhiMa'),
        i = a('8hHPd'),
        j = a('hCMCq');
    var _k = () => {
        const [_l, m] = _b(e).useState(!0), [n, o] = _b(e).useState([]);
        return _b(e).useEffect(() => {
            (0, f.isStudent)() && (0, f.request)({
                url: '/api/v1/groups/part-of',
                success: _l => o(_l),
                both: () => m(!1)
            });
        }, []), (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(g.default, {
                    groups: n.map(_l => _l._id)
                }),
                (0, d.jsx)(h.default, {}),
                (0, d.jsx)(j.default, {}),
                (0, d.jsx)(i.default, {
                    groups: n,
                    loading: _l
                })
            ]
        });
    };
}), a.register('FEpWv', function(_b, c) {
    _s(_b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('p4sQD'),
        f = a('ZSP/a');
    var _g = _s => (0, d.jsx)(f.default, {
        children: (0, d.jsx)(e.default, {
            groups: _s.groups
        })
    });
}), a.register('p4sQD', function(b, c) {
    _s(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('b5kvC'),
        h = a('4nemR'),
        i = a('sHRDd'),
        j = a('PMl60'),
        k = a('hCMCq');
    let l, m, n, o = _s => _s;
    var _p = _s => {
        const [q, r] = e.useState();
        return e.useEffect(() => {
            if (_s.groups.length) {
                const _s = () => {
                    (0, j.request)({
                        url: '/api/matchmaker/instant-join',
                        success: _s => {
                            _s && _s.code && r(_s.code);
                        }
                    });
                };
                _s();
                const t = setInterval(_s, 30000);
                return () => clearInterval(t);
            }
        }, [_v.groups.length]), q ? (0, d.jsx)(d.Fragment, {
            children: (0, d.jsxs)(_q, {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(_r, {
                                children: 'Join your teacher\'s live game!'
                            }),
                            (0, d.jsx)(_s, {
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
    const _q = f.default.div.attrs({
            className: 'flex vc wrap'
        })(l || (l = o`
  justify-content: space-between;
`)),
        _r = f.default.div(m || (m = o`
  line-height: 16px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
`)),
        _s = f.default.div(n || (n = o`
  font-size: 50px;
  line-height: 50px;
  margin-top: 10px;
  font-weight: ${ 0 };
`), g.FontWeights.UltraBold);
}), a.register('4nemR', function(b, c) {
    _v(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('sHRDd'),
        f = a('Axq+p');
    let g;
    var _h = _v => (0, d.jsxs)(_i, {
        href: _v.to,
        customWidth: _v.customWidth,
        className: `flex vc ${ _v.className }`,
        style: _v.style,
        children: [
            (0, d.jsx)('div', {
                className: 'flex hc vc',
                style: {
                    color: _v.color,
                    background: _v.background,
                    height: 36,
                    width: 36,
                    borderRadius: '50%',
                    marginRight: 11
                },
                children: (0, d.jsx)('i', {
                    className: _v.icon
                })
            }),
            (0, d.jsx)('span', {
                children: _v.text
            })
        ]
    });
    const _i = f.default.a(g || (g = (_v => _v)`
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
`), e.default.White, e.default.Black, _v => _v.customWidth || 350, e.default.BorderGray, e.default.Black);
}), a.register('hCMCq', function(b, c) {
    _v(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('fmVdR');
    a('LEQ5w');
    var _f = () => (0, d.jsx)(e.default, {
        style: {
            marginTop: 40,
            marginBottom: 40
        }
    });
}), a.register('ZSP/a', function(b, c) {
    _v(b.exports, 'default', function() {
        return _g;
    });
    var d = a('Axq+p'),
        e = a('sHRDd');
    let f;
    var _g = d.default.div.attrs({
        className: 'maxWidth'
    })(f || (f = (_v => _v)`
  color: ${ 0 };
`), e.default.Black);
}), a.register('OhiMa', function(b, c) {
    _v(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ZSP/a'),
        g = a('Axq+p'),
        h = a('b5kvC'),
        i = a('sHRDd'),
        j = a('lkW5c'),
        k = a('PMl60'),
        l = a('+M5wm'),
        m = a('6CIVV'),
        n = a('ECzOP');
    let o, p, q, r = _v => _v;
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
    var _u = () => {
        const [_v, w] = e.useState(!0), [x, y] = e.useState(!1), [z, A] = e.useState(null), [B, C] = e.useState([]), D = (_b, d) => {
            _v && x || (w(!0), y(!0), (0, k.request)({
                url: `/api/hub/hub-items?startDate=${ _b.format('MM-DD-YYYY') }&endDate=${ d.format('MM-DD-YYYY') }`,
                success: _v => {
                    C(_v);
                },
                both: () => w(!1)
            }));
        }, E = () => !_v || !x, F = () => {
            z !== q.nextSevenDays && E() && (A(q.nextSevenDays), D(_b(n)(), _b(n)().add(15, 'days')));
        };
        return e.useEffect(() => {
            F();
        }, []), (0, d.jsxs)(f.default, {
            children: [
                (0, d.jsx)(_v, {
                    children: 'Assignments'
                }),
                (0, d.jsxs)('div', {
                    className: 'flex vc wrap',
                    style: {
                        marginTop: 15
                    },
                    children: [
                        (0, d.jsx)(_w, {
                            onClick: F,
                            selected: z === q.nextSevenDays,
                            children: 'Next 14 days'
                        }),
                        (0, d.jsx)(_w, {
                            onClick: () => {
                                z !== q.nextFortyFiveDays && E() && (A(q.nextFortyFiveDays), D(_b(n)(), _b(n)().add(46, 'days')));
                            },
                            selected: z === q.nextFortyFiveDays,
                            children: 'Next 45 days'
                        }),
                        (0, d.jsx)(_w, {
                            onClick: () => {
                                z !== q.lastThirtyDays && E() && (A(q.lastThirtyDays), D(_b(n)().subtract(31, 'days'), _b(n)()));
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
                _v ? (0, d.jsx)('div', {
                    className: 'maxWidth flex hc',
                    style: {
                        marginTop: 20
                    },
                    children: (0, d.jsx)(m.default, {
                        size: 'large'
                    })
                }) : B.length ? (0, d.jsx)(d.Fragment, {
                    children: B.sort((_v, _b) => new Date(_v.dueDate).getTime() - new Date(_b.dueDate).getTime()).map(_v => _v.type === l.HubItemType.mapAssignment ? (0, d.jsx)(j.default, {
                        groupColor: _v.group.color,
                        groupName: _v.group.name,
                        dueDate: _v.dueDate,
                        title: _v.title,
                        status: _v.status,
                        link: `/join/${ _v.resourceId }`
                    }, _v.resourceId + _v.group._id) : null)
                }) : (0, d.jsx)(t, {})
            ]
        });
    };
    const _v = g.default.div(o || (o = r`
  font-size: 38px;
  line-height: 38px;
  font-weight: ${ 0 };
`), h.FontWeights.UltraBold),
        _w = g.default.div.attrs({
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
`), _z => _z.selected ? '#1a237e' : i.default.White, _z => _z.selected ? i.default.White : i.default.Black, _z => _z.selected ? '#1a237e' : i.default.BorderGray, _z => !_z.selected && '\n  &:hover {\n    background: #fafafa;\n  }\n  ');
}), a.register('lkW5c', function(b, c) {
    _z(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('oXQNI'),
        g = a('Nxs88'),
        h = a('+M5wm'),
        i = a('2HvvA11'),
        j = a('ECzOP');
    var _k = _z => {
        const l = e.useMemo(() => _z.status === h.HubItemStatus.completed ? 'Completed' : _z.status === h.HubItemStatus.inProgress ? 'In Progress...' : _b(j)().isAfter(_b(j)(_z.dueDate)) ? 'Past Due' : null, [
            _z.status,
            _z.dueDate
        ]);
        return (0, d.jsxs)(g.Container, {
            children: [
                (0, d.jsxs)(g.TopContainer, {
                    children: [
                        (0, d.jsx)(g.Color, {
                            style: {
                                background: _z.groupColor
                            }
                        }),
                        (0, d.jsxs)(g.ClassAndDueDate, {
                            children: [
                                _z.groupName,
                                ' - due ',
                                _b(j)(_z.dueDate).format('MMMM Do')
                            ]
                        })
                    ]
                }),
                (0, d.jsx)(i.default, {
                    to: _z.link,
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
                                                    children: _z.title
                                                }),
                                                l ? (0, d.jsx)(g.Description, {
                                                    children: l
                                                }) : null
                                            ]
                                        }),
                                        (0, d.jsx)(g.Status, {
                                            children: _z.status === h.HubItemStatus.completed ? (0, d.jsx)('i', {
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
}), a.register('Nxs88', function(_b, c) {
    _z(_b.exports, 'Container', function() {
        return _s;
    }), _z(_b.exports, 'TopContainer', function() {
        return _t;
    }), _z(_b.exports, 'Color', function() {
        return _u;
    }), _z(_b.exports, 'ClassAndDueDate', function() {
        return _v;
    }), _z(_b.exports, 'CardContainer', function() {
        return _w;
    }), _z(_b.exports, 'RightSide', function() {
        return _x;
    }), _z(_b.exports, 'DetailsSection', function() {
        return _y;
    }), _z(_b.exports, 'IconContainer', function() {
        return _z;
    }), _z(_b.exports, 'Title', function() {
        return _A;
    }), _z(_b.exports, 'Description', function() {
        return _B;
    }), _z(_b.exports, 'Status', function() {
        return _C;
    });
    var d = a('sHRDd'),
        e = a('b5kvC'),
        f = a('Axq+p');
    let g, h, i, j, k, l, m, n, o, p, q, r = _z => _z;
    const _s = f.default.div.attrs({
            className: 'flex maxWidth flex-column'
        })(g || (g = r`
  align-items: flex-start;
  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`)),
        _t = f.default.div.attrs({
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
        _u = f.default.div(i || (i = r`
  height: 14px;
  width: 14px;
  border-radius: 50%;
`)),
        _v = f.default.div(j || (j = r`
  margin-left: 7px;
  font-size: 14px;
  line-height: 14px;
`)),
        _w = f.default.div.attrs({
            className: 'flex maxWidth vc'
        })(k || (k = r`
  color: ${ 0 };
`), d.default.Black),
        _x = f.default.div.attrs({
            className: 'flex maxWidth vc'
        })(l || (l = r`
  margin-left: 25px;
  justify-content: space-between;
`)),
        _y = f.default.div(m || (m = r`
  line-height: 1;
`)),
        _z = f.default.div(n || (n = r`
  font-size: 26px;
  color: #263238;
`)),
        _A = f.default.div(o || (o = r`
  font-size: 20px;
  font-weight: ${ 0 };
`), e.FontWeights.Bold),
        _B = f.default.div(p || (p = r`
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  margin-top: 6px;
`)),
        _C = f.default.div(q || (q = r`
  font-size: 32px;
`));
}), a.register('8hHPd', function(b, c) {
    _z(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ZSP/a'),
        g = a('Axq+p'),
        h = a('b5kvC'),
        i = a('T/bHc'),
        j = a('sHRDd'),
        k = a('6CIVV');
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
    var _n = _z => {
        const [o, p] = e.useState([]), q = _z.groups.filter(_z => !o.includes(_z._id)), r = _z => {
            p(o => [
                ...o,
                _z
            ]);
        };
        return (0, d.jsxs)(f.default, {
            style: {
                marginTop: 30
            },
            children: [
                (0, d.jsx)(_o, {
                    children: 'Classes'
                }),
                _z.loading ? (0, d.jsx)('div', {
                    className: 'maxWidth flex hc',
                    style: {
                        marginTop: 20
                    },
                    children: (0, d.jsx)(k.default, {
                        size: 'large'
                    })
                }) : q.length ? q.map(_z => (0, d.jsx)(i.default, {
                    name: _z.name,
                    color: _z.color,
                    creator: _z.creatorName,
                    groupId: _z._id,
                    onUnenroll: r
                }, _z._id)) : (0, d.jsx)(m, {})
            ]
        });
    };
    const _o = g.default.div(l || (l = (_z => _z)`
  font-size: 38px;
  line-height: 38px;
  font-weight: ${ 0 };
  margin-bottom: 20px;
`), h.FontWeights.UltraBold);
}), a.register('T/bHc', function(b, c) {
    _z(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('ulE4q'),
        f = a('oXQNI'),
        g = a('MSsQO'),
        h = a('YRlpt'),
        i = a('ijg0s'),
        j = a('Axq+p'),
        k = a('sHRDd'),
        l = a('b5kvC'),
        m = a('QECub'),
        n = a('PMl60');
    let o, p, q, r, s = _z => _z;
    var _t = _z => (0, d.jsx)(d.Fragment, {
        children: (0, d.jsx)(f.default, {
            style: {
                borderRadius: 8,
                marginBottom: 10
            },
            children: (0, d.jsxs)(_u, {
                children: [
                    (0, d.jsxs)('div', {
                        className: 'flex vc',
                        children: [
                            (0, d.jsx)('div', {
                                style: {
                                    borderRadius: 5,
                                    height: 55,
                                    width: 55,
                                    background: _z.color
                                }
                            }),
                            (0, d.jsxs)(_v, {
                                children: [
                                    (0, d.jsx)(_w, {
                                        children: _z.name
                                    }),
                                    (0, d.jsx)(_x, {
                                        children: _z.creator
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
                                                    groupId: _z.groupId
                                                },
                                                success: () => {
                                                    g.default.success(`Unenrolled from "${ _z.name }"!`), _z.onUnenroll(_z.groupId);
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
    const _u = j.default.div.attrs({
            className: 'flex maxWidth vc between'
        })(o || (o = s`
  color: ${ 0 };
`), k.default.Black),
        _v = j.default.div(p || (p = s`
  margin-left: 25px;
`)),
        _w = j.default.div(q || (q = s`
  font-size: 20px;
  line-height: 20px;
  font-weight: ${ 0 };
`), l.FontWeights.Bold),
        _x = j.default.div(r || (r = s`
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  line-height: 15px;
  margin-top: 6px;
`));
}), a.register('f7FDJ', function(b, c) {
    _z(b.exports, 'DashboardReports', function() {
        return _y;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('1P5ls'),
        g = a('oBBW6'),
        h = a('XhmoI'),
        i = a('PMl60'),
        j = a('X0j0k'),
        k = a('Qvzn2'),
        l = a('G5zL50'),
        m = (e = a('LEQ5w'), a('Axq+p')),
        n = a('xBWlV'),
        o = a('EjdxE'),
        p = a('wYGc3'),
        q = a('Jnm73'),
        r = a('ZpCrt'),
        s = a('miHuM'),
        t = a('jzxyj10'),
        u = a('d0QwM'),
        v = a('gtb+o');
    let w;
    const x = [{
                title: 'Kit',
                dataIndex: 'kit',
                key: 'report-kit',
                render: (_z, b) => (0, d.jsx)(q.ReportKit, {
                    kit: _z,
                    dateId: b._id,
                    assignmentId: b.mapAssignment
                })
            },
            {
                title: 'Accuracy',
                dataIndex: 'accuracy',
                key: 'report-accuracy',
                render: _z => (0, d.jsx)(r.ReportProgressAccuracyMeter, {
                    percent: _z
                })
            },
            {
                title: 'Participants',
                dataIndex: 'groups',
                key: 'report-groups',
                render: (_z, b) => (0, d.jsx)(s.ReportParticipantsAndGroups, {
                    reportId: b._id,
                    participants: b.participants,
                    groups: _z
                })
            }
        ],
        _y = () => {
            const [_z, A] = (0, p.useSearchParams)();
            var B;
            const C = Math.max(1, null !== (B = Number(_z.get('page'))) && void 0 !== B ? B : 1),
                [D, E] = e.useState(0),
                F = (0, e.useRef)(null),
                [G, H, I] = (0, i.useBoolean)(!1),
                {
                    data: J,
                    isLoading: K,
                    isError: L,
                    isFetching: M
                } = (0, o.useReports)(C);
            (0, l.default)(F, _z => {
                var N, O;
                E(null !== (O = null === (N = _z.target) || void 0 === N ? void 0 : N.offsetTop) && void 0 !== O ? O : 0);
            }), e.useEffect(() => {
                window.scrollTo(0, 0);
            }, [C]);
            const N = J ? (0, d.jsx)(n.ReportPagination, {
                total: J.totalItems,
                current: C,
                onPageChange: _z => {
                    (0, i.isUpgraded)() ? A({
                        page: _z
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
                            (0, d.jsx)(_z, {
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
                                                    dataSource: J.items.map(_z => ({
                                                        key: _z._id,
                                                        ..._z
                                                    })),
                                                    columns: x,
                                                    bordered: !0,
                                                    pagination: !1,
                                                    tableLayout: 'auto',
                                                    size: 'large',
                                                    onRow: _z => ({
                                                        onClick: () => {
                                                            (0, t.NavigateTo)(`/report/${ _z._id }`);
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
        _z = m.default.div.attrs({
            className: 'maxWidth flex'
        })(w || (w = (_h => _h)`
  flex: 1;
`));
}), a.register('G5zL50', function(b, c) {
    _h(b.exports, 'default', function() {
        return _h;
    });
    var d = a('dR/Gi'),
        e = a('20TiJ');

    function f() {}
    let f;
    const g = _h => f || (f = function(_h) {
        let i = !1,
            j = [];
        const k = new Map(),
            l = new(_h || window.ResizeObserver)((_h, l) => {
                j = j.concat(_h), i || window.requestAnimationFrame(function() {
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
            subscribe(m, n) {
                var o;
                l.observe(m);
                const p = null !== (o = k.get(m)) && void 0 !== o ? o : [];
                p.push(n), k.set(m, p);
            },
            unsubscribe(m, n) {
                var o;
                const p = null !== (o = k.get(m)) && void 0 !== o ? o : [];
                if (1 === p.length)
                    return l.unobserve(m), void k.delete(m);
                const q = p.indexOf(n); -
                1 !== q && p.splice(q, 1), k.set(m, p);
            }
        };
    }(_i));
    var _h = function(_i, j, k = {}) {
        const l = g(k.polyfill),
            m = (0, e.default)(j);
        return (0, d.default)(() => {
            let n = !1;
            const o = _i && 'current' in _i ? _i.current : _i;
            if (!o)
                return _f;

            function p(q, r) {
                n || m.current(q, r);
            }
            return l.subscribe(o, d), () => {
                n = !0, l.unsubscribe(o, d);
            };
        }, [
            _i,
            l,
            m
        ]), l.observer;
    };
}), a.register('dR/Gi', function(b, c) {
    _o(b.exports, 'default', function() {
        return _d;
    });
    var _d = _b(a('LEQ5w'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), a.register('20TiJ', function(_b, c) {
    _o(_b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');
    var _e = _o => {
        const f = d.useRef(_o);
        return d.useEffect(() => {
            f.current = _o;
        }), f;
    };
}), a.register('xBWlV', function(b, c) {
    _o(b.exports, 'ReportPagination', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('42CAy');
    a('LEQ5w');
    const _f = _o => {
        const {
            total: g,
            current: h,
            onPageChange: i
        } = _o;
        return (0, d.jsx)(e.default, {
            simple: !0,
            current: h,
            total: g,
            defaultPageSize: 10,
            onChange: i
        });
    };
}), a.register('EjdxE', function(b, c) {
    _o(b.exports, 'useReports', function() {
        return _f;
    });
    var d = a('UapK50'),
        e = a('PMl60');
    const _f = _o => (0, d.useQuery)({
        queryKey: [
            'dashboard-repports',
            {
                page: _o
            }
        ],
        keepPreviousData: !0,
        staleTime: 60000,
        retry: 2,
        queryFn: () => (0, e.requestAsPromise)({
            url: '/api/game-report/fetch-all',
            data: {
                page: _o
            }
        })
    });
}), a.register('Jnm73', function(b, c) {
    _o(b.exports, 'ReportKit', function() {
        return _q;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('cvto726'),
        g = a('ECzOP'),
        h = a('PMl60'),
        i = a('b5kvC'),
        j = a('4ReN8'),
        k = a('sHRDd'),
        l = a('x8CoD');
    let m, n, o, p = _o => _o;
    const _q = _o => {
            const r = _b(g)((0, h.dateFromObjectId)(_o.dateId)).format('MMMM Do [at] LT');
            return (0, d.jsxs)(f.default, {
                direction: 'horizontal',
                size: 14,
                align: 'center',
                children: [
                    (0, d.jsx)('div', {
                        children: (0, d.jsx)(_r, {
                            src: (0, l.getCloudinaryUrl)(_o.kit.gif),
                            style: {
                                width: 55,
                                height: 55
                            }
                        })
                    }),
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(_s, {
                                children: _o.kit.title
                            }),
                            (0, d.jsx)(_t, {
                                children: r
                            }),
                            _o.assignmentId ? (0, d.jsx)('div', {
                                style: {
                                    marginTop: '0.25em'
                                },
                                children: (0, d.jsx)(j.ReportLinkTag, {
                                    to: `/assignment/${ _o.assignmentId }`,
                                    children: 'Assignment'
                                })
                            }) : null
                        ]
                    })
                ]
            });
        },
        _r = e.default.img(m || (m = p`
  border-radius: 5px;
  border: solid ${ 0 } 1px;
  flex-shrink: 0;
  object-fit: cover;
`), k.default.Black),
        _s = e.default.div(n || (n = p`
  font-size: 1.1em;
  font-weight: ${ 0 };
`), i.FontWeights.Bold),
        _t = e.default.div(o || (o = p`
  font-size: 0.9em;
  font-style: italic;
  margin-top: 0.05em;
`));
}), a.register('4ReN8', function(_b, c) {
    _o(_b.exports, 'ReportLinkTag', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('2HvvA11'),
        f = a('Axq+p');
    let g;
    const _h = _o => (0, d.jsx)(_i, {
            onClick: _o => null == _o ? void 0 : _o.stopPropagation(),
            to: _o.to,
            children: _o.children
        }),
        _i = (0, f.default)(e.default)(g || (g = (_o => _o)`
  background-color: rgba(0, 0, 0, 0.05) !important;
  padding: 0.2em 0.73em;
  font-size: 0.9em;
  border-radius: 50px;
`));
}), a.register('ZpCrt', function(b, c) {
    _o(b.exports, 'ReportProgressAccuracyMeter', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('1P5ls'),
        f = a('8y7vq');
    a('LEQ5w');
    var g = a('GT7Vh');
    const _h = _o => {
        const i = _o.percent < 60 ? '#F44336' : _o.percent < 80 ? '#FFC107' : '#66BB6A';
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
                percent: _o.percent,
                width: 65,
                strokeColor: i,
                status: 'normal'
            })
        });
    };
}), a.register('miHuM', function(b, c) {
    _o(b.exports, 'ReportParticipantsAndGroups', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('PMl60'),
        f = a('cvto726'),
        g = a('4ReN8');
    const _h = _o => {
        var i;
        return (0, d.jsxs)('div', {
            children: [
                (0, d.jsxs)('div', {
                    style: {
                        fontStyle: 'italic'
                    },
                    children: [
                        _o.participants,
                        ' ',
                        (0, e.plural)('participant', _o.participants)
                    ]
                }),
                (null === (i = _o.groups) || void 0 === i ? void 0 : i.length) ? (0, d.jsx)(f.default, {
                    direction: 'horizontal',
                    wrap: !0,
                    size: 'small',
                    style: {
                        marginTop: '0.3em'
                    },
                    children: _o.groups.map(i => (0, d.jsx)(g.ReportLinkTag, {
                        to: `/class/${ i._id }`,
                        children: i.name
                    }, _o.reportId + i._id))
                }) : null
            ]
        });
    };
}), a.register('gtb+o', function(b, c) {
    _o(b.exports, 'ReportUpgradeModal', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('BtZXP'),
        f = a('hHkFq');
    const _g = _o => (0, d.jsx)(e.default, {
        id: 'view more reports',
        ..._o,
        copy: {
            title: 'More reports with Pro',
            description: `To view more of your past reports, upgrade to ${ f.COMPANY_NAME } Pro.`
        }
    });
}), a.register('T0wPV', function(b, c) {
    _o(b.exports, 'default', function() {
        return _n;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('LEQ5w'),
        h = a('ulE4q'),
        i = a('YRlpt'),
        j = a('2x11J'),
        k = a('b5kvC'),
        l = a('sHRDd');
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
        constructor(..._o) {
            super(..._o), (0, d.default)(this, 'handleClose', () => this.props.navigation.archiveModalShow = !1);
        }
    };
    m = (0, e.__decorate)([
        (0, j.inject)('navigation', 'kits'),
        j.observer
    ], m);
    var _n = m;
}), a.register('/yI7M', function(b, c) {
    _o(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('sHRDd'),
        f = a('b5kvC');
    a('LEQ5w');
    var g = a('Axq+p'),
        h = a('p0Nd2'),
        i = a('SkIgX'),
        j = a('PMl60'),
        k = a('TvNhz');
    let l;
    var _m = _o => {
        const n = (0, j.getUser)();
        return (0, j.isStudent)() ? null : (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(_n, {
                    children: [
                        (() => {
                            const {
                                freeTrial: _o
                            } = n;
                            return !!((0, j.isUpgraded)() && _o && _o.currentlyOnFreeTrial);
                        })() && (0, d.jsx)(i.default, {
                            user: n,
                            openUpgradeModal: () => {
                                _p.openUpgradeModal(!1);
                            }
                        }),
                        !(0, j.isUpgraded)() && (0, d.jsx)(h.default, {
                            openUpgradeModal: _p.openUpgradeModal
                        })
                    ]
                }),
                (0, d.jsx)(k.default, {})
            ]
        });
    };
    const _n = g.default.div.attrs({
        className: 'maxWidth'
    })(l || (l = (_p => _p)`
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  color: ${ 0 };
  font-family: ${ 0 };
`), e.default.Black, f.Fonts.SFPro);
}), a.register('p0Nd2', function(b, c) {
    _p(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('SkIgX'),
        g = a('ECzOP'),
        h = a('hHkFq'),
        i = a('WCvqo'),
        j = a('/urNL'),
        k = a('PMl60');
    f = a('SkIgX');
    const l = 'hub_upgrade_modal_last_seen';
    var _m = _p => {
        const {
            isLoading: n,
            data: o
        } = (0, i.default)();
        e.useEffect(() => {
            (() => {
                if (!localStorage.getItem(l))
                    return !0;
                const _p = localStorage.getItem(l),
                    q = Number(_p);
                if (!q || isNaN(q))
                    return !0;
                const r = _b(g).unix(q);
                return Math.abs(_b(g)().diff(r, 'hour')) >= 48;
            })() && (localStorage.setItem(l, _b(g)().unix().toString()), _q.openUpgradeModal(!0));
        }, []);
        const p = e.useMemo(() => (0, j.getFreePlanType)() === j.FreePlanType.limitedGames && (null == o ? void 0 : o.count) < (0, j.getLimitedGameLimit)() ? f.BACKGROUND_COLOR : '#c62828', [o]);
        return (0, j.getFreePlanType)() === j.FreePlanType.limitedGames && n ? null : (0, d.jsxs)(f.Container, {
            background: p,
            children: [
                (0, d.jsx)(f.Text, {
                    children: (() => {
                        if ((0, j.getFreePlanType)() === j.FreePlanType.limitedGames) {
                            const _q = (0, j.getLimitedGameLimit)() - o.count;
                            return _q <= 0 ? (0, d.jsx)(d.Fragment, {
                                children: 'You are out of hosted games for this month'
                            }) : (0, d.jsxs)(d.Fragment, {
                                children: [
                                    'You can host',
                                    ' ',
                                    (0, d.jsxs)(f.Bold, {
                                        children: [
                                            _q,
                                            ' more ',
                                            (0, k.plural)('game', _q)
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
                        _E.openUpgradeModal(!1);
                    },
                    background: p,
                    children: 'Learn more'
                })
            ]
        });
    };
}), a.register('SkIgX', function(b, c) {
    _E(b.exports, 'BACKGROUND_COLOR', function() {
        return _r;
    }), _E(b.exports, 'Container', function() {
        return _t;
    }), _E(b.exports, 'Text', function() {
        return _u;
    }), _E(b.exports, 'Bold', function() {
        return _v;
    }), _E(b.exports, 'ActionButton', function() {
        return _w;
    }), _E(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('sHRDd'),
        f = a('b5kvC'),
        g = a('2HvvA11'),
        h = a('LEQ5w'),
        i = a('Axq+p'),
        j = a('PMl60'),
        k = a('VURM9'),
        l = a('ECzOP');
    let m, n, o, p, q = _E => _E;
    const _r = '#0a2540';
    var _s = _E => {
        const [t, u] = h.useState(0), [v, w] = h.useState(''), x = () => {
            const {
                user: y
            } = _E;
            if (!y && !y.freeTrial)
                return;
            const z = _b(l).duration(_b(l)(y.freeTrial.freeTrialExpiration).diff(_b(l)())),
                A = z.asDays(),
                B = z.asHours(),
                C = z.asMinutes(),
                D = z.asSeconds();
            if (A >= 1) {
                let _E = A;
                31 === A && (_E = 30), w('day'), u(Math.ceil(_E));
            } else
                B >= 1 && B < 24 ? (w('hour'), u(Math.ceil(B))) : C >= 1 && C < 60 ? (w('minute'), u(Math.ceil(C))) : D > 0 && D < 60 && (w('second'), u(Math.ceil(D)));
        };
        return h.useEffect(() => {
            x();
        }, []), (0, k.useIntervalWhen)(x, 1000), v ? (0, d.jsxs)(_t, {
            background: _r,
            children: [
                (0, d.jsxs)(_u, {
                    children: [
                        'Your trial of ',
                        (0, d.jsx)(_v, {
                            children: 'Gimkit Pro'
                        }),
                        ' ends in',
                        ' ',
                        (0, d.jsxs)(_v, {
                            children: [
                                t,
                                ' ',
                                (0, j.plural)(v, t),
                                '.'
                            ]
                        })
                    ]
                }),
                (0, d.jsx)(_w, {
                    onClick: _f.openUpgradeModal,
                    background: _r,
                    children: 'Learn more'
                })
            ]
        }) : null;
    };
    const _t = i.default.div.attrs({
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
`), _f => _f.background, e.default.White),
        _u = i.default.div(n || (n = q`
  font-size: 18px;
`)),
        _v = i.default.span(o || (o = q`
  font-weight: ${ 0 };
`), f.FontWeights.Bold),
        _w = (0, i.default)(g.default)(p || (p = q`
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
`), _f => _f.background, e.default.White, e.default.White, _f => _f.background, e.default.White);
}), a.register('VURM9', function(_b, c) {
    _f(_b.exports, 'useIntervalWhen', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f, g, h, i) {
        void 0 === g && (g = 0), void 0 === h && (h = !0), void 0 === i && (i = !1);
        var j = (0, d.useRef)();

        function k() {
            j.current && j.current();
        }
        (0, d.useEffect)(function() {
            j.current = _f;
        }), (0, d.useEffect)(function() {
            if ('undefined' != typeof window) {
                if (h) {
                    i && _f();
                    var k = window.setInterval(_f, g);
                    return function() {
                        window.clearInterval(k);
                    };
                }
            } else
                console.warn('useIntervalWhen: window is undefined.');
        }, [
            h,
            g
        ]);
    }
}), a.register('TvNhz', function(b, c) {
    _k(b.exports, 'default', function() {
        return _j;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        _f = a('YRlpt'),
        g = a('b5kvC'),
        h = a('sHRDd'),
        i = a('PMl60');
    var _j = () => {
        const [_k, l] = e.useState(!1);
        e.useEffect(() => {
            const m = (0, i.getUrlVariable)('from');
            m && 'upgrade' === m && l(!0);
        }, []);
        return (0, d.jsx)(_f.default, {
            onCancel: () => l(!1),
            open: _k,
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
}), a.register('DKJUZ', function(b, c) {
    _h(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('B3cl8'),
        f = a('8vuiz'),
        g = a('mtaDz');
    var _h = _h => ((0, f.useSeasonTicketOpener)(), (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(e.default, {}),
            (0, d.jsx)(g.default, {
                upgradeModalVisible: _h.upgradeModalVisible,
                proUpsellModalVisible: _h.proUpsellModalVisible
            })
        ]
    }));
}), a.register('B3cl8', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('PMl60'),
        f = a('Pkvp4');
    var _g = () => (d.useEffect(() => {
        const _h = (0, e.getUser)().tokenIssued || 0;
        Math.round(new Date().getTime() / 1000) - _h >= 86400 && (0, f.default)({});
    }, []), null);
}), a.register('8vuiz', function(b, c) {
    _i(b.exports, 'useSeasonTicketOpener', function() {
        return _h;
    });
    var d = a('LEQ5w'),
        e = a('PMl60'),
        f = a('jzxyj10'),
        g = a('gs4MT');
    const _h = () => {
        d.useEffect(() => {
            var _i, j;
            const k = (0, e.getUser)();
            k && (null == k || null === (_i = k.seasonTicket) || void 0 === _i ? void 0 : _i.active) && !(null == k || null === (j = k.seasonTicket) || void 0 === j ? void 0 : j.viewed) && (0, f.NavigateTo)(g.SEASON_TICKET_BASE);
        }, []);
    };
}), a.register('mtaDz', function(b, c) {
    _n(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('PMl60'),
        f = a('ECzOP');
    a('LEQ5w');
    var g = a('nNplT');
    var _h = _n => (() => {
        if (_n.upgradeModalVisible)
            return !0;
        if (_n.proUpsellModalVisible)
            return !0;
        if ((0, e.getUrlVariable)('from'))
            return !0;
        const i = (0, e.getUser)(),
            j = (0, e.dateFromId)(i._id);
        return _b(f)().diff(_b(f)(j), 'days') < 3;
    })() ? null : (0, d.jsx)(g.default, {
        allowAutoOpen: !0
    });
}), a.register('PdQLR', function(_b, c) {
    _n(_b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('YRlpt'),
        f = a('sHRDd'),
        g = a('b5kvC'),
        h = a('PMl60'),
        i = a('LEQ5w'),
        j = a('Axq+p'),
        k = a('AJKbK');
    let l;
    var _m = () => {
        const [_n, o, p] = (0, h.useBoolean)(!1), [q, r] = i.useState(0), s = i.useMemo(() => !(0, h.isStudent)() && !!sessionStorage.getItem('NEW_USER'), []);
        i.useEffect(() => {
            s && (o(), sessionStorage.removeItem('NEW_USER'));
        }, []);
        return s ? (0, d.jsx)(e.default, {
            width: 730,
            open: _n,
            footer: null,
            style: {
                top: 35
            },
            bodyStyle: {
                padding: 50
            },
            closable: !1,
            children: (0, d.jsx)(_n, {
                children: (0, d.jsx)(k.default, {
                    currentStage: q,
                    nextStage: () => r(_n => _n + 1),
                    close: p
                })
            })
        }) : null;
    };
    const _n = j.default.div.attrs({
        className: 'maxWidth'
    })(l || (l = (_y => _y)`
  font-family: ${ 0 };
  color: ${ 0 };
`), g.Fonts.SFPro, f.default.Black);
}), a.register('AJKbK', function(b, c) {
    _y(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('b5kvC');
    a('LEQ5w');
    var f = a('Axq+p'),
        g = a('71twu'),
        h = a('tukbj');
    let i, j, k, l, m, n = _y => _y;
    var _o = _y => {
        const p = g.default[_y.currentStage];
        return (0, d.jsxs)(_p, {
            children: [
                p.image ? (0, d.jsx)(_r, {
                    src: `/client/img/dashboard/onboarding/${ p.image }.svg`
                }, p.image) : (0, d.jsx)(_q, {}),
                (0, d.jsx)(_s, {
                    children: p.title
                }),
                (0, d.jsx)(_t, {
                    children: p.content
                }),
                (0, d.jsx)(h.default, {
                    currentStage: _y.currentStage,
                    nextStage: _y.nextStage,
                    close: _y.close
                })
            ]
        });
    };
    const _p = f.default.div.attrs({
            className: 'flex-center flex-column maxWidth'
        })(i || (i = n``)),
        _q = f.default.div(j || (j = n`
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
        _r = f.default.img(k || (k = n`
  height: 80px;
`)),
        _s = f.default.div(l || (l = n`
  font-size: 34px;
  font-weight: ${ 0 };
  margin-top: 20px;
`), e.FontWeights.Bold),
        _t = f.default.div(m || (m = n`
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 25px;
`));
}), a.register('71twu', function(b, c) {
    _y(b.exports, 'default', function() {
        return _e;
    });
    var d = a('0hzx+');
    var _e = [{
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
}), a.register('tukbj', function(b, c) {
    _y(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ulE4q'),
        g = a('2HvvA11'),
        h = a('71twu');
    var _i = _y => {
        const j = e.useMemo(() => _y.currentStage === h.default.length - 1, [_y.currentStage]),
            k = e.useCallback(() => {
                j ? _y.close() : _y.nextStage();
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
                    onClick: _y.close,
                    style: {
                        marginTop: 10
                    },
                    children: '...or close this screen'
                })
            ]
        });
    };
}), a.register('9yGkF', function(b, c) {
    _y(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('xQDqe25'),
        f = a('ulE4q'),
        g = a('YRlpt'),
        h = a('ECzOP'),
        i = a('LEQ5w'),
        j = a('Axq+p'),
        k = a('sHRDd'),
        l = a('b5kvC'),
        m = a('gs4MT'),
        n = a('PMl60'),
        o = a('kX1xb');
    let p, q, r, s = _y => _y;
    const t = 'pro-monthly-modal-last-shown';
    var _u = _y => {
        const [v, w, x] = (0, n.useBoolean)(!1);
        return i.useEffect(() => {
            const _y = (0, n.getUser)();
            if (!_y)
                return;
            if (!_y.planStartDate)
                return;
            const z = _b(h).unix(_y.planStartDate);
            if (Math.abs(_b(h)().diff(z, 'days')) < 40)
                return;
            const A = localStorage.getItem(t);
            if (A) {
                const B = _b(h).unix(Number(A));
                if (Math.abs(_b(h)().diff(B, 'days')) < 21)
                    return;
            }
            w(), localStorage.setItem(t, _b(h)().unix().toString());
        }, []), i.useEffect(() => {
            _i.onVisibleChange(v);
        }, [v]), (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(_v, {}),
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
                    children: (0, d.jsxs)(_w, {
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
                                    (0, d.jsx)(_x, {
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
    const _v = (0, j.createGlobalStyle)(p || (p = s`
  .pro-upsell-modal > .ant-modal-content {
    border-radius: 10px;
    overflow: hidden;
    padding: 0px !important;
  }
`)),
        _w = j.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = s`
  color: ${ 0 };
  font-family: ${ 0 };
`), k.default.Black, l.Fonts.SFPro),
        _x = j.default.div(r || (r = s`
  z-index: 999;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  margin-top: 14px;
  cursor: pointer;
  text-decoration: underline;
`));
}), a.register('xQDqe25', function(_b, c) {
    _i(_b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('AxRpU23'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'StarOutlined';
    var _i = e.forwardRef(h);
}), a.register('AxRpU23', function(b, c) {
    _q(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('13HCY', function(b, c) {
    _q(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('s+8hx17'),
        h = a('bdn4O17'),
        i = a('qL8MZ');
    let j, k, l = _q => _q;
    var _m = _q => {
        const n = e.useMemo(() => {
                var o;
                return null !== (o = _q.theme) && void 0 !== o ? o : g.SiteHeaderTheme.light;
            }, [_q.theme]),
            o = e.useMemo(() => {
                var p;
                return null !== (p = _q.alpha) && void 0 !== p ? p : h.SiteHeaderAlpha.standard;
            }, [_q.alpha]),
            p = e.useMemo(() => {
                const _q = o === h.SiteHeaderAlpha.none ? 1 : n === g.SiteHeaderTheme.light ? 0.85 : 0.45;
                return n === g.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${ _q })` : `rgba(16, 16, 16, ${ _q })`;
            }, [
                n,
                o
            ]),
            q = e.useMemo(() => n === g.SiteHeaderTheme.light ? 'rgb(235, 238, 241)' : 'rgb(143 143 143 / 60%)', [n]);
        return (0, d.jsxs)(_n, {
            background: p,
            borderColor: q,
            children: [
                (0, d.jsxs)(_o, {
                    children: [
                        (0, d.jsx)(i.default, {
                            options: _f.options,
                            selectedOption: _f.selectedOption,
                            theme: n
                        }),
                        (0, d.jsx)('div', {
                            children: _f.rightSideContent
                        })
                    ]
                }),
                _f.bottomContent
            ]
        });
    };
    const _n = f.default.div.attrs({
            className: 'maxWidth'
        })(j || (j = l`
  background: ${ 0 };
  padding: 7px 25px;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px ${ 0 };
`), _f => _f.background, _f => _f.borderColor),
        _o = f.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(k || (k = l``));
}), a.register('s+8hx17', function(b, c) {
    let d;
    var e;
    _f(b.exports, 'SiteHeaderTheme', function() {
        return d;
    }), (e = d || (d = {})).light = 'light', e.dark = 'dark';
}), a.register('bdn4O17', function(b, c) {
    let d;
    var e;
    _f(b.exports, 'SiteHeaderAlpha', function() {
        return d;
    }), (e = d || (d = {})).none = 'none', e.standard = 'standard', e.darker = 'darker';
}), a.register('qL8MZ', function(b, c) {
    _f(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('cvto726'),
        f = a('nxOom'),
        g = a('Axq+p');
    let h;
    var _i = _f => (0, d.jsx)(_j, {
        children: (0, d.jsx)(e.default, {
            direction: 'horizontal',
            size: 8,
            wrap: !0,
            children: _f.options.map(b => (0, d.jsx)(f.default, {
                option: b,
                selected: _f.selectedOption === b.id,
                theme: _f.theme
            }, `option-${ b.id }`))
        })
    });
    const _j = g.default.div.attrs({
        className: 'scroll-x'
    })(h || (h = (_f => _f)`
  flex: 1;
`));
}), a.register('nxOom', function(b, c) {
    _f(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('s+8hx17'),
        g = a('Axq+p'),
        h = a('ibLRf19'),
        i = a('70AkF'),
        j = a('wYGc3'),
        k = a('2HvvA11');
    let l;
    var _m = _f => {
        const {
            theme: n,
            option: o
        } = _f, {
            pathname: p
        } = (0, j.useLocation)(), {
            label: q,
            icon: r,
            path: s,
            otherMatchingPaths: t
        } = o, u = (() => {
            if (s) {
                if ((0, i.matchPath)({
                        path: s
                    }, p))
                    return !0;
                if ((null == t ? void 0 : t.length) && t.some(_f => (0, i.matchPath)({
                        path: _f
                    }, p)))
                    return !0;
            }
            return !1;
        })(), v = e.useMemo(() => !!u || _f.selected, [
            u,
            _f.selected
        ]), w = e.useMemo(() => v ? '#1677ff' : 'transparent', [
            n,
            v
        ]), x = e.useMemo(() => v ? h.default.White : n === f.SiteHeaderTheme.light ? 'rgb(26, 27, 37)' : h.default.White, [
            n,
            v
        ]), y = e.useMemo(() => v ? w : n === f.SiteHeaderTheme.light ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)', [
            n,
            v,
            w
        ]);
        return (0, d.jsx)(k.default, {
            to: s,
            target: _f.option.target,
            onClick: o.onSelect,
            style: {
                cursor: 'pointer'
            },
            children: (0, d.jsxs)(_n, {
                background: w,
                color: x,
                hoverBackground: y,
                children: [
                    r ? (0, d.jsx)('span', {
                        style: {
                            marginRight: 6,
                            fontSize: '0.9em'
                        },
                        children: r
                    }) : null,
                    q
                ]
            })
        });
    };
    const _n = g.default.div.attrs({
        className: 'flex-center'
    })(l || (l = (_f => _f)`
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
`), _f => _f.background, _f => _f.color, _f => _f.hoverBackground);
}), a.register('ibLRf19', function(b, c) {
    _f(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), a.register('mjBBc', function(b, c) {
    _f(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+'),
        e = a('ewwAh');
    a('LEQ5w');
    var f = a('Axq+p'),
        g = a('jzxyj10');
    let h;
    var _i = () => (0, d.jsx)(_j, {
        children: (0, d.jsx)(e.default.Search, {
            style: {
                width: 285
            },
            enterButton: !0,
            placeholder: 'Search for kits...',
            onSearch: _f => {
                _f && (0, g.NavigateTo)(`/search?q=${ _f }`);
            }
        })
    });
    const _j = f.default.div(h || (h = (_f => _f)`
  margin-right: -4px;
  margin-left: 30px;
`));
}), a.register('/2bBN24', function(b, c) {
    _f(b.exports, 'useMediaMatch', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var g = (0, d.useMemo)(function() {
                return window.matchMedia(_f);
            }, [_f]),
            h = (0, d.useState)(function() {
                return g.matches;
            }),
            i = h[0],
            j = h[1];
        return (0, d.useEffect)(function() {
            j(g.matches);
            var k = function(l) {
                return j(l.matches);
            };
            return g.addEventListener ? (g.addEventListener('change', k), function() {
                return g.removeEventListener('change', k);
            }) : (g.addListener(k), function() {
                return g.removeListener(k);
            });
        }, [g]), i;
    }
}), a.register('kRwUk25', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('TTc70'),
        e = a('LEQ5w'),
        f = a('1P5ls');

    function _g(_h, i, j) {
        return function(k) {
            const {
                prefixCls: l,
                style: m
            } = k, n = e.useRef(null), [o, p] = e.useState(0), [q, r] = e.useState(0), [s, t] = (0, d.default)(!1, {
                value: k.open
            }), {
                getPrefixCls: u
            } = e.useContext(f.ConfigContext), v = u(i || 'select', l);
            return e.useEffect(() => {
                if (t(!0), 'undefined' != typeof ResizeObserver) {
                    const w = new ResizeObserver(w => {
                            const x = w[0].target;
                            p(x.offsetHeight + 8), r(x.offsetWidth);
                        }),
                        x = setInterval(() => {
                            var y;
                            const z = j ? `.${ j(v) }` : `.${ v }-dropdown`,
                                A = null === (y = n.current) || void 0 === y ? void 0 : y.querySelector(z);
                            A && (clearInterval(x), w.observe(A));
                        }, 10);
                    return () => {
                        clearInterval(x), w.disconnect();
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
                ref: n,
                style: {
                    paddingBottom: o,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: q
                }
            }, e.createElement(_h, Object.assign({}, k, {
                style: Object.assign(Object.assign({}, m), {
                    margin: 0
                }),
                open: s,
                visible: s,
                getPopupContainer: () => n.current
            }))));
        };
    }
}), a.register('N9LXh20', function(b, c) {
    _b(b.exports, 'initMoveMotion', function() {
        return _m;
    });
    var d = a('wC0DT'),
        e = a('4vKB9');
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
        _m = (_b, b) => {
            const {
                antCls: n
            } = _b, o = `${ n }-${ b }`, {
                inKeyframes: p,
                outKeyframes: q
            } = l[b];
            return [
                (0, e.initMotion)(o, p, q, _b.motionDurationMid),
                {
                    [`\n        ${ o }-enter,\n        ${ o }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: _b.motionEaseOutCirc
                    },
                    [`${ o }-leave`]: {
                        animationTimingFunction: _b.motionEaseInOutCirc
                    }
                }
            ];
        };
}), a.register('jlX4s16', function(_b, c) {
    var d = a('RnV2k27'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    _b.exports = function(f, g) {
        var h, i, j, k, l, m, n = !1;
        g || (g = {}), h = g.debug || !1;
        try {
            if (j = d(), k = document.createRange(), l = document.getSelection(), (m = document.createElement('span')).textContent = f, m.ariaHidden = 'true', m.style.all = 'unset', m.style.position = 'fixed', m.style.top = 0, m.style.clip = 'rect(0, 0, 0, 0)', m.style.whiteSpace = 'pre', m.style.webkitUserSelect = 'text', m.style.MozUserSelect = 'text', m.style.msUserSelect = 'text', m.style.userSelect = 'text', m.addEventListener('copy', function(o) {
                    if (o.stopPropagation(), g.format)
                        if (o.preventDefault(), void 0 === o.clipboardData) {
                            h && console.warn('unable to use e.clipboardData'), h && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var p = e[g.format] || e.default;
                            window.clipboardData.setData(p, f);
                        } else
                            o.clipboardData.clearData(), o.clipboardData.setData(g.format, f);
                    g.onCopy && (o.preventDefault(), g.onCopy(o.clipboardData));
                }), document.body.appendChild(m), k.selectNodeContents(m), l.addRange(k), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            n = !0;
        } catch (d) {
            h && console.error('unable to copy using execCommand: ', d), h && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(g.format || 'text', f), g.onCopy && g.onCopy(window.clipboardData), n = !0;
            } catch (d) {
                h && console.error('unable to copy using clipboardData: ', d), h && console.error('falling back to prompt'), i = function(o) {
                    var p = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return o.replace(/#{\s*key\s*}/g, p);
                }('message' in g ? g.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(i, f);
            }
        } finally {
            l && ('function' == typeof l.removeRange ? l.removeRange(k) : l.removeAllRanges()), m && document.body.removeChild(m), j();
        }
        return n;
    };
}), a.register('RnV2k27', function(b, c) {
    b.exports = function() {
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
                'Caret' === d.type && d.removeAllRanges(), d.rangeCount || f.forEach(function(h) {
                    d.addRange(h);
                }), e && e.focus();
            };
    };
}), a.register('Kc6XZ23', function(b, c) {
    _b(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        sideMargin: 50,
        optionWidth: 200
    };
}), a.register('ptkti24', function(_b, c) {
    var d = _b.exports && _b.exports.__createBinding || (Object.create ? function(e, f, g, h) {
            void 0 === h && (h = g), Object.defineProperty(e, h, {
                enumerable: !0,
                get: function() {
                    return f[g];
                }
            });
        } : function(e, f, g, h) {
            void 0 === h && (h = g), e[h] = f[g];
        }),
        e = _b.exports && _b.exports.__exportStar || function(f, g) {
            for (var h in f)
                'default' === h || Object.prototype.hasOwnProperty.call(g, h) || d(g, f, h);
        };
    Object.defineProperty(_b.exports, '__esModule', {
        value: !0
    }), e(a('hDE9a25'), _b.exports), e(a('rPed825'), _b.exports), e(a('hpMH825'), _b.exports);
}), a.register('hDE9a25', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useBreakpoints = b.exports.useBreakpoint = void 0;
    var d = a('hpMH825');
    b.exports.useBreakpoint = function(e) {
        return (0, d.useWindowSize)().width < e;
    }, b.exports.useBreakpoints = function(e) {
        var f = (0, d.useWindowSize)().width;
        return e.map(function(g) {
            return f < g;
        });
    };
}), a.register('hpMH825', function(b, c) {
    var d = b.exports && b.exports.__createBinding || (Object.create ? function(e, f, g, h) {
            void 0 === h && (h = g), Object.defineProperty(e, h, {
                enumerable: !0,
                get: function() {
                    return f[g];
                }
            });
        } : function(e, f, g, h) {
            void 0 === h && (h = g), e[h] = f[g];
        }),
        e = b.exports && b.exports.__setModuleDefault || (Object.create ? function(f, g) {
            Object.defineProperty(f, 'default', {
                enumerable: !0,
                value: g
            });
        } : function(f, g) {
            f.default = g;
        }),
        f = b.exports && b.exports.__importStar || function(g) {
            if (g && g.__esModule)
                return g;
            var h = {};
            if (null != g)
                for (var i in g)
                    'default' !== i && Object.prototype.hasOwnProperty.call(g, i) && d(h, g, i);
            return e(h, g), h;
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useWindowSize = void 0;
    var g = f(a('LEQ5w'));

    function h() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    b.exports.useWindowSize = function() {
        var h = g.useState(_h()),
            i = h[0],
            j = h[1];
        return g.useLayoutEffect(function() {
            function k() {
                j(_h());
            }
            return window.addEventListener('resize', h),
                function() {
                    return window.removeEventListener('resize', h);
                };
        }, []), i;
    };
}), a.register('rPed825', function(b, c) {
    var d = b.exports && b.exports.__assign || function() {
            return d = Object.assign || function(e) {
                for (var f, g = 1, h = arguments.length; g < h; g++)
                    for (var i in f = arguments[g])
                        Object.prototype.hasOwnProperty.call(f, i) && (e[i] = f[i]);
                return e;
            }, d.apply(this, arguments);
        },
        e = b.exports && b.exports.__createBinding || (Object.create ? function(f, g, h, i) {
            void 0 === i && (i = h), Object.defineProperty(f, i, {
                enumerable: !0,
                get: function() {
                    return g[h];
                }
            });
        } : function(f, g, h, i) {
            void 0 === i && (i = h), f[i] = g[h];
        }),
        f = b.exports && b.exports.__setModuleDefault || (Object.create ? function(g, h) {
            Object.defineProperty(g, 'default', {
                enumerable: !0,
                value: h
            });
        } : function(g, h) {
            g.default = h;
        }),
        g = b.exports && b.exports.__importStar || function(h) {
            if (h && h.__esModule)
                return h;
            var i = {};
            if (null != h)
                for (var j in h)
                    'default' !== j && Object.prototype.hasOwnProperty.call(h, j) && e(i, h, j);
            return f(i, h), i;
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useComponentSize = void 0;
    var _h = g(a('LEQ5w'));
    b.exports.useComponentSize = function() {
        var i = _h.useState({
                height: 0,
                width: 0
            }),
            j = i[0],
            k = i[1],
            l = _h.useRef(),
            m = _h.useCallback(function() {
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
        return _h.useLayoutEffect(function() {
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
}), a.register('PqMjn20', function(b, c) {
    _b(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        name: a('Mmd0d21').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), a.register('Mmd0d21', function(b, c) {
    _b(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), a.register('d1E7w3', function(b, c) {
    _b(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('oBBW6'),
        f = a('LEQ5w');
    const g = f.lazy(() => a('7cBN63'));
    var _h = _b => {
        const i = _b.hideSkeleton ? (0, d.jsx)('div', {
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
                ..._b
            })
        });
    };
}), a.register('7cBN63', function(_b, c) {
    _b.exports = Promise.all([
        a('o60By')(new URL(a('HmN9A').resolve('2nG1U'), import.meta.url).toString()),
        import('./' + a('HmN9A').resolve('6iUO5'))
    ]).then(() => a('cg5Ud'));
}), a.register('LvSG/', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('yXL4x'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'ClockCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('yXL4x', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('AIgxT', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('yqz0G'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'TrophyOutlined';
    var _i = e.forwardRef(h);
}), a.register('yqz0G', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('RMEzW', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        normal: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 400;\n',
        bold: '\n    font-family: \'Product Sans\', sans-serif;\n    font-weight: 800;\n  ',
        black: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 900;\n',
        fontFamilyName: 'Product Sans, sans-serif'
    };
}), a.register('gCqar24', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('skUox22'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'UsergroupAddOutlined';
    var _i = e.forwardRef(h);
}), a.register('skUox22', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('+UyIc24', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('r3/DU21'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'LogoutOutlined';
    var _i = e.forwardRef(h);
}), a.register('r3/DU21', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('CJCpN', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('v47zB'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'CheckOutlined';
    var _i = e.forwardRef(h);
}), a.register('v47zB', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('pMmde1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('+bIFH'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var _i = e.forwardRef(h);
}), a.register('+bIFH', function(b, c) {
    _o(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('xoHbD', function(b, c) {
    _o(b.exports, 'CLASSIC', function() {
        return _d;
    }), _o(b.exports, 'TEAMS', function() {
        return _e;
    }), _o(b.exports, 'THANOS', function() {
        return _f;
    }), _o(b.exports, 'BOSS_BATTLE', function() {
        return _g;
    }), _o(b.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function() {
        return _h;
    }), _o(b.exports, 'LAVA', function() {
        return _i;
    }), _o(b.exports, 'IMPOSTER', function() {
        return _j;
    }), _o(b.exports, 'DRAW', function() {
        return _k;
    }), _o(b.exports, 'PARDY', function() {
        return _l;
    });
    const _d = 'CLASSIC',
        _e = 'TEAMS',
        _f = 'THANOS',
        _g = 'BOSS_BATTLE',
        _h = 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE',
        _i = 'LAVA',
        _j = 'IMPOSTER',
        _k = 'DRAW',
        _l = 'PARDY';
}), a.register('RW2Mp', function(b, c) {
    _o(b.exports, 'default', function() {
        return _A;
    });
    var d = a('5jnR813'),
        e = a('8DsNq12'),
        f = a('Li49B9'),
        g = a('hc2IK9'),
        h = a('HgFD113'),
        i = a('a01Gf12'),
        j = a('i+h089'),
        k = a('kp44T9'),
        l = a('LEQ5w'),
        m = a('JrtKP'),
        n = function(_o) {
            (0, j.default)(b, _o);
            var p = (0, k.default)(b);

            function q(r) {
                var s;
                (0, h.default)(this, q), (s = p.call(this, r)).handleChange = function(t) {
                    var u = s.props,
                        v = u.disabled,
                        w = u.onChange;
                    v || ('checked' in s.props || s.setState({
                        checked: t.target.checked
                    }), w && w({
                        target: (0, g.default)((0, g.default)({}, s.props), {}, {
                            checked: t.target.checked
                        }),
                        stopPropagation: function() {
                            t.stopPropagation();
                        },
                        preventDefault: function() {
                            t.preventDefault();
                        },
                        nativeEvent: t.nativeEvent
                    }));
                }, s.saveInput = function(t) {
                    s.input = t;
                };
                var t = 'checked' in r ? r.checked : r.defaultChecked;
                return s.state = {
                    checked: t
                }, s;
            }
            return (0, i.default)(b, [{
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
                            _A = r.tabIndex,
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
                            L = Object.keys(K).reduce(function(M, N) {
                                return 'aria-' !== N.substr(0, 5) && 'data-' !== N.substr(0, 5) && 'role' !== N || (M[N] = K[N]), M;
                            }, {}),
                            M = this.state.checked,
                            N = _r(m)(s, t, (q = {}, (0, e.default)(q, ''.concat(s, '-checked'), M), (0, e.default)(q, ''.concat(s, '-disabled'), y), q));
                        return _r(l).createElement('span', {
                            className: N,
                            style: u
                        }, _r(l).createElement('input', (0, d.default)({
                            name: v,
                            id: w,
                            type: x,
                            required: J,
                            readOnly: z,
                            disabled: y,
                            tabIndex: _A,
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
                        }, L)), _r(l).createElement('span', {
                            className: ''.concat(s, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(q, _r) {
                    return 'checked' in q ? (0, g.default)((0, g.default)({}, _r), {}, {
                        checked: q.checked
                    }) : null;
                }
            }]), b;
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
    var o = n;
}), a.register('5jnR813', function(b, c) {
    function d() {
        return d = Object.assign || function(e) {
            for (var f = 1; f < arguments.length; f++) {
                var g = arguments[f];
                for (var h in g)
                    Object.prototype.hasOwnProperty.call(g, h) && (e[h] = g[h]);
            }
            return e;
        }, d.apply(this, arguments);
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('8DsNq12', function(b, c) {
    function _d(_e, f, g) {
        return f in _e ? Object.defineProperty(_e, f, {
            value: g,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : _e[f] = g, _e;
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('Li49B9', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('QUESF9');

    function _e(_f, g) {
        if (null == _f)
            return {};
        var h, i, j = (0, d.default)(_f, g);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(_f);
            for (i = 0; i < k.length; i++)
                h = k[i], g.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(_f, h) && (j[h] = _f[h]);
        }
        return j;
    }
}), a.register('QUESF9', function(b, c) {
    function d(e, f) {
        if (null == e)
            return {};
        var g, h, i = {},
            j = Object.keys(e);
        for (h = 0; h < j.length; h++)
            g = j[h], f.indexOf(g) >= 0 || (i[g] = e[g]);
        return i;
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('hc2IK9', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('8DsNq12');

    function e(_f, g) {
        var h = Object.keys(_f);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(_f);
            g && (i = i.filter(function(j) {
                return Object.getOwnPropertyDescriptor(_f, j).enumerable;
            })), h.push.apply(h, i);
        }
        return h;
    }

    function _e(f) {
        for (var g = 1; g < arguments.length; g++) {
            var h = null != arguments[g] ? arguments[g] : {};
            g % 2 ? _e(Object(h), !0).forEach(function(i) {
                (0, d.default)(f, i, h[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h)) : _e(Object(h)).forEach(function(i) {
                Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(h, i));
            });
        }
        return f;
    }
}), a.register('HgFD113', function(b, c) {
    function d(e, f) {
        if (!(e instanceof f))
            throw new TypeError('Cannot call a class as a function');
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('a01Gf12', function(b, c) {
    function _d(_e, f) {
        for (var g = 0; g < f.length; g++) {
            var h = f[g];
            h.enumerable = h.enumerable || !1, h.configurable = !0, 'value' in h && (h.writable = !0), Object.defineProperty(_e, h.key, h);
        }
    }

    function d(e, f, g) {
        return f && _c(e.prototype, f), g && _c(e, g), e;
    }
    _f(b.exports, 'default', function() {
        return _d;
    });
}), a.register('i+h089', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var _d = a('ALEzF15');

    function _e(_f, g) {
        if ('function' != typeof g && null !== g)
            throw new TypeError('Super expression must either be null or a function');
        _f.prototype = Object.create(g && g.prototype, {
            constructor: {
                value: _f,
                writable: !0,
                configurable: !0
            }
        }), g && (0, _d.default)(_f, g);
    }
}), a.register('ALEzF15', function(b, c) {
    function d(e, f) {
        return d = Object.setPrototypeOf || function(g, h) {
            return g.__proto__ = h, g;
        }, d(e, f);
    }
    _h(b.exports, 'default', function() {
        return _c;
    });
}), a.register('kp44T9', function(b, _c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('28Pwf16'),
        e = a('sQfA/14'),
        f = a('rKHa09');

    function _g(_h) {
        var i = (0, e.default)();
        return function() {
            var j, k = (0, d.default)(_h);
            if (i) {
                var l = (0, d.default)(this).constructor;
                j = Reflect.construct(k, arguments, l);
            } else
                j = k.apply(this, arguments);
            return (0, f.default)(this, j);
        };
    }
}), a.register('28Pwf16', function(b, c) {
    function d(e) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(f) {
            return f.__proto__ || Object.getPrototypeOf(f);
        }, d(e);
    }
    _g(b.exports, 'default', function() {
        return _d;
    });
}), a.register('sQfA/14', function(b, c) {
    function _d() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (_g) {
            return !1;
        }
    }
    _g(b.exports, 'default', function() {
        return _b;
    });
}), a.register('rKHa09', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('cW6NX14'),
        e = a('JgIFg');

    function _f(_g, h) {
        if (h && ('object' === _c(d)(h) || 'function' == typeof h))
            return h;
        if (void 0 !== h)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, e.default)(_g);
    }
}), a.register('cW6NX14', function(b, _c) {
    function d(e) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (b.exports = d = function(f) {
            return typeof f;
        }, b.exports.default = b.exports, b.exports.__esModule = !0) : (b.exports = d = function(f) {
            return f && 'function' == typeof Symbol && f.constructor === Symbol && f !== Symbol.prototype ? 'symbol' : typeof f;
        }, b.exports.default = b.exports, b.exports.__esModule = !0), d(e);
    }
    b.exports = a, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('JgIFg', function(b, c) {
    function d(e) {
        if (void 0 === e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
    }
    _b(b.exports, 'default', function() {
        return _c;
    });
}), a.register('dDoty', function(b, _c) {
    _b(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w');
    const f = e.lazy(() => a('l3sIa'));
    var _g = _b => (0, d.jsx)(e.Suspense, {
        fallback: _b.fallback || null,
        children: (0, d.jsx)(f, {
            latex: _b.latex
        })
    });
}), a.register('l3sIa', function(_b, c) {
    _b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('8pe9D')),
        import('./' + a('HmN9A').resolve('5OCdz'))
    ]).then(() => a('vZVkZ'));
}), a.register('QdGLB', function(b, c) {
    let d;
    var e;
    _j(b.exports, 'HookType', function() {
        return d;
    }), (e = d || (d = {})).selectBox = 'selectBox', e.kit = 'kit', e.number = 'number';
}), a.register('y4x7Q', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    _j(b.exports, 'LocalStorageNames', function() {
        return f;
    }), (e = d || (d = {})).time = 'time', e.target = 'target', e.race = 'race', e.allIn = 'allIn', (g = f || (f = {})).language = 'gimkit-3.0-game-language', g.currency = 'gimkit-game-currency', g.music = 'gimkit-music-track', g.allowGoogleTranslate = 'gimkit-google-translate-allowed', g.editorDefaultLanguage = 'gimkit-editor-v4-default-language', g.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', g.editorDefaultSubject = 'gimkit-editor-v4-default-subject', g.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', g.hookSavedOptions = 'gimkit-hook-saved-options';
}), a.register('Rtfgy20', function(b, c) {
    _j(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return _e;
    });
    var d = a('THxMC');
    const _e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
}), a.register('6XgQB1', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    let h;
    var i;
    let j;
    let k;
    var l;
    _j(b.exports, 'QuestionType', function() {
        return d;
    }), _j(b.exports, 'Privacy', function() {
        return f;
    }), _j(b.exports, 'GameStatus', function() {
        return h;
    }), _j(b.exports, 'GameType', function() {
        return j;
    }), _j(b.exports, 'GameGoal', function() {
        return k;
    }), _j(b.exports, 'themes', function() {
        return _q;
    }), _j(b.exports, 'ExperienceSource', function() {
        return _r;
    }), (e = d || (d = {})).multipleChoice = 'mc', e.textInput = 'text', (g = f || (f = {})).public = 'public', g.private = 'private', (i = h || (h = {})).setup = 'setup', i.join = 'join', i.teams = 'teams', i.gameplay = 'gameplay', i.results = 'results', (j || (j = {})).live = 'live', (l = k || (k = {})).time = 'time', l.race = 'race', l.allIn = 'allIn';
    const m = '#ffffff',
        n = '#000000';
    let o;
    var p;
    (p = o || (o = {})).easy = 'easy', p.medium = 'medium', p.hard = 'hard', p.veryHard = 'veryHard', p.veryVeryHard = 'veryVeryHard';
    const _q = [{
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
    let _r;
    var s;
    (s = _r || (_r = {})).original = 'original', s.map = 'map';
}), a.register('66RLp2', function(b, c) {
    let d;
    var e;
    _j(b.exports, 'MapModeType', function() {
        return d;
    }), (e = d || (d = {})).liveGame = 'liveGame', e.assignment = 'assignment';
}), a.register('Pq0g9', function(b, c) {
    _j(b.exports, 'AnalyticsTrackEvent', function() {
        return _h;
    });
    var d = a('e7pFf'),
        e = a('PMl60'),
        f = a('Td6aM'),
        g = a('J3ZQI');
    const _h = _j => {
        var i, j, k;
        if ((window.gtag && !(null === (i = _j.blockedSource) || void 0 === i ? void 0 : i.google) && window.gtag('event', _j.event, _j.properties), f.AnalyticsFlags.educatorOnly) && (null === (k = (0, e.getUser)()) || void 0 === k ? void 0 : k.accountType) !== d.default.educator)
            return;
        (null === (j = _j.blockedSource) || void 0 === j ? void 0 : j.posthog) || (0, g.TrackPostHogEvent)({
            event: _j.event,
            properties: _j.properties,
            force: _j.forcePostHog
        });
    };
}), a.register('BXKZi0', function(b, c) {
    _j(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('+UcJ7'),
        f = a('dR/Gi');
    var _g = (_j, b) => {
        const [h, i] = d.useState(() => {
            var j, k;
            const l = _j && 'current' in _j ? _j.current : _j;
            return l ? [
                l.offsetWidth,
                l.offsetHeight
            ] : [
                null !== (j = null == b ? void 0 : b.initialWidth) && void 0 !== j ? j : 0,
                null !== (k = null == b ? void 0 : b.initialHeight) && void 0 !== k ? k : 0
            ];
        });
        return (0, f.default)(() => {
            const j = _j && 'current' in _j ? _j.current : _j;
            j && i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }, [_j]), (0, e.default)(_j, _j => {
            const j = _j.target;
            i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }), h;
    };
}), a.register('+UcJ7', function(b, c) {
    _j(b.exports, 'default', function() {
        return _j;
    });
    var d = a('iIbRn'),
        e = a('dR/Gi'),
        f = a('20TiJ'),
        g = a('18t62');
    let h;
    const i = () => h || (h = function() {
        const _j = new Map(),
            k = new(0, d.default)((0, g.default)((k, a) => {
                var l;
                if (1 === k.length)
                    null === (l = _j.get(k[0].target)) || void 0 === l || l(k[0], a);
                else
                    for (let m = 0; m < k.length; m++) {
                        var n;
                        null === (n = _j.get(k[m].target)) || void 0 === n || n(k[m], a);
                    }
            }));
        return {
            observer: k,
            subscribe(l, m) {
                k.observe(l), _j.set(l, m);
            },
            unsubscribe(l) {
                k.unobserve(l), _j.delete(l);
            }
        };
    }());
    var _j = function(k, l) {
        const m = i(),
            n = (0, f.default)(l);
        return (0, e.default)(() => {
            let o = !1;
            const p = k && 'current' in k ? k.current : k;
            if (p)
                return m.subscribe(p, (k, m) => {
                    o || n.current(k, m);
                }), () => {
                    o = !0, m.unsubscribe(p);
                };
        }, [
            k,
            m,
            n
        ]), m.observer;
    };
}), a.register('18t62', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = function(_e) {
        var f = [],
            g = null,
            h = function() {
                for (var i = arguments.length, j = new Array(i), k = 0; k < i; k++)
                    j[k] = arguments[k];
                f = j, g || (g = requestAnimationFrame(function() {
                    g = null, _e.apply(void 0, f);
                }));
            };
        return h.cancel = function() {
            g && (cancelAnimationFrame(g), g = null);
        }, h;
    };
}), a.register('FpbFp', function(b, c) {
    _l(b.exports, 'default', function() {
        return _r;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = a('mmS5q'),
        j = 44;

    function k(_l) {
        var m, n, o;
        return m = _l, n = 0, o = 1, _l = (Math.min(Math.max(n, m), o) - n) / (o - n), _l = (_l -= 1) * _l * _l + 1;
    }
    var k = f.forwardRef(function(l, m) {
            var n, o = l.classes,
                p = l.className,
                q = l.color,
                _r = void 0 === q ? 'primary' : q,
                s = l.disableShrink,
                t = void 0 !== s && s,
                u = l.size,
                v = void 0 === u ? 40 : u,
                w = l.style,
                x = l.thickness,
                y = void 0 === x ? 3.6 : x,
                z = l.value,
                A = void 0 === z ? 0 : z,
                B = l.variant,
                C = void 0 === B ? 'indeterminate' : B,
                D = (0, e.default)(l, [
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
                E = {},
                F = {},
                G = {};
            if ('determinate' === C || 'static' === C) {
                var H = 2 * Math.PI * ((j - y) / 2);
                E.strokeDasharray = H.toFixed(3), G['aria-valuenow'] = Math.round(A), 'static' === C ? (E.strokeDashoffset = ''.concat(((100 - A) / 100 * H).toFixed(3), 'px'), F.transform = 'rotate(-90deg)') : (E.strokeDashoffset = ''.concat((n = (100 - A) / 100, n * n * H).toFixed(3), 'px'), F.transform = 'rotate('.concat((270 * _o(A / 70)).toFixed(3), 'deg)'));
            }
            return f.createElement('div', (0, d.default)({
                className: (0, g.default)(o.root, p, 'inherit' !== _r && o['color'.concat((0, i.default)(_r))], {
                    indeterminate: o.indeterminate,
                    static: o.static
                } [C]),
                style: (0, d.default)({
                    width: v,
                    height: v
                }, F, w),
                ref: m,
                role: 'progressbar'
            }, G, D), f.createElement('svg', {
                className: o.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(j, ' ').concat(j)
            }, f.createElement('circle', {
                className: (0, g.default)(o.circle, t && o.circleDisableShrink, {
                    indeterminate: o.circleIndeterminate,
                    static: o.circleStatic
                } [C]),
                style: E,
                cx: j,
                cy: j,
                r: (j - y) / 2,
                fill: 'none',
                strokeWidth: y
            })));
        }),
        l = (0, h.default)(function(m) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: m.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: m.palette.primary.main
                },
                colorSecondary: {
                    color: m.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: m.transitions.create('stroke-dashoffset')
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
        })(k);
}), a.register('I1JN8', function(b, c) {
    _f(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('0qmC91'),
        g = a('PMl60');
    var _h = _f => {
        const [i, j] = e.useState([]), [k] = e.useState(_f.limit), [l, m] = e.useState(_f.defaultPage), [n, _o] = e.useState(!0), [p, q] = e.useState([]), [r, s] = e.useState(!1), t = e.useMemo(() => (_f.modifyItems ? _f.modifyItems(p) : p).map((i, j) => _f.toRender(i, j)), [
            p.length,
            _f.toRender
        ]), u = () => {
            if (i.includes(l))
                return;
            j(_f => [
                ..._f,
                l
            ]);
            const v = {
                page: l,
                limit: k
            };
            (0, g.request)({
                url: _f.url,
                method: 'post',
                cacheKey: _f.cacheKey,
                data: _f.modifyBody ? _f.modifyBody(v) : v,
                success: (i, j) => {
                    _f.onTotalItems && !r && (_f.onTotalItems(i.totalItems), s(!0)), i.items.forEach(i => {
                        _f.onItemFetched && _f.onItemFetched(i, j);
                    }), q(_f => [
                        ..._f,
                        ...i.items
                    ]), _o(i.hasNextPage), m(i.nextPage);
                },
                error: () => {
                    _f.onTotalItems && !r && (_f.onTotalItems(0), s(!0)), _o(!1);
                },
                both: () => j(_f => _f.filter(_f => _f !== v.page))
            });
        };
        return e.useEffect(u, []), !n && _f.forceEmptyMessage || !n && 0 === p.length && _f.emptyMessage ? _f.emptyMessage(p) : (0, d.jsxs)(f.default, {
            dataLength: p.length,
            hasMore: n,
            style: _f.scrollStyle,
            next: u,
            loader: _f.loader || (0, d.jsx)('div', {}),
            scrollThreshold: _f.scrollThreshold,
            endMessage: _f.endMessage ? _f.endMessage(p) : null,
            scrollableTarget: _f.scrollableTarget,
            children: [
                _f.prefix ? _f.prefix() : null,
                t
            ]
        });
    };
}), a.register('0qmC91', function(b, c) {
    _f(b.exports, 'default', function() {
        return _k;
    });
    var d = a('LEQ5w'),
        e = function(_f, g) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(h, i) {
                h.__proto__ = i;
            } || function(h, i) {
                for (var j in i)
                    i.hasOwnProperty(j) && (h[j] = i[j]);
            }, e(_f, g);
        };
    var f = function() {
        return f = Object.assign || function(g) {
            for (var h, i = 1, j = arguments.length; i < j; i++)
                for (var k in h = arguments[i])
                    Object.prototype.hasOwnProperty.call(h, k) && (g[k] = h[k]);
            return g;
        }, f.apply(this, arguments);
    };
    var g = 'Pixel',
        h = 'Percent',
        i = {
            unit: h,
            value: 0.8
        };

    function j(k) {
        return 'number' == typeof k ? {
            unit: h,
            value: 100 * k
        } : 'string' == typeof k ? k.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: g,
            value: parseFloat(k)
        } : k.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: h,
            value: parseFloat(k)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), i) : (console.warn('scrollThreshold should be string or number'), i);
    }
    var j = function(k) {
            function l(m) {
                var n = k.call(this, m) || this;
                return n.lastScrollTop = 0, n.actionTriggered = !1, n.startY = 0, n.currentY = 0, n.dragging = !1, n.maxPullDownDistance = 0, n.getScrollableTarget = function() {
                    return n.props.scrollableTarget instanceof HTMLElement ? n.props.scrollableTarget : 'string' == typeof n.props.scrollableTarget ? document.getElementById(n.props.scrollableTarget) : (null === n.props.scrollableTarget && console.warn('You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '), null);
                }, n.onStart = function(o) {
                    n.lastScrollTop || (n.dragging = !0, o instanceof MouseEvent ? n.startY = o.pageY : o instanceof TouchEvent && (n.startY = o.touches[0].pageY), n.currentY = n.startY, n._infScroll && (n._infScroll.style.willChange = 'transform', n._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'));
                }, n.onMove = function(o) {
                    n.dragging && (o instanceof MouseEvent ? n.currentY = o.pageY : o instanceof TouchEvent && (n.currentY = o.touches[0].pageY), n.currentY < n.startY || (n.currentY - n.startY >= Number(n.props.pullDownToRefreshThreshold) && n.setState({
                        pullToRefreshThresholdBreached: !0
                    }), n.currentY - n.startY > 1.5 * n.maxPullDownDistance || n._infScroll && (n._infScroll.style.overflow = 'visible', n._infScroll.style.transform = 'translate3d(0px, ' + (n.currentY - n.startY) + 'px, 0px)')));
                }, n.onEnd = function() {
                    n.startY = 0, n.currentY = 0, n.dragging = !1, n.state.pullToRefreshThresholdBreached && (n.props.refreshFunction && n.props.refreshFunction(), n.setState({
                        pullToRefreshThresholdBreached: !1
                    })), requestAnimationFrame(function() {
                        n._infScroll && (n._infScroll.style.overflow = 'auto', n._infScroll.style.transform = 'none', n._infScroll.style.willChange = 'none');
                    });
                }, n.onScrollListener = function(o) {
                    'function' == typeof n.props.onScroll && setTimeout(function() {
                        return n.props.onScroll && n.props.onScroll(o);
                    }, 0);
                    var p = n.props.height || n._scrollableNode ? o.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    n.actionTriggered || ((n.props.inverse ? n.isElementAtTop(p, n.props.scrollThreshold) : n.isElementAtBottom(p, n.props.scrollThreshold)) && n.props.hasMore && (n.actionTriggered = !0, n.setState({
                        showLoader: !0
                    }), n.props.next && n.props.next()), n.lastScrollTop = p.scrollTop);
                }, n.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, n.throttledOnScrollListener = function(o, p, q, r) {
                    var s, t = !1,
                        u = 0;

                    function v() {
                        s && clearTimeout(s);
                    }

                    function v() {
                        var w = this,
                            x = Date.now() - u,
                            y = arguments;

                        function z() {
                            u = Date.now(), q.apply(w, y);
                        }

                        function z() {
                            s = void 0;
                        }
                        t || (r && !s && _j(), f(), void 0 === r && x > o ? _j() : !0 !== p && (s = setTimeout(r ? j : _j, void 0 === r ? o - x : o)));
                    }
                    return 'boolean' != typeof p && (r = q, q = p, p = void 0), g.cancel = function() {
                        f(), t = !0;
                    }, g;
                }(150, n.onScrollListener).bind(n), n.onStart = n.onStart.bind(n), n.onMove = n.onMove.bind(n), n.onEnd = n.onEnd.bind(n), n;
            }
            return function(l, m) {
                function n() {
                    this.constructor = l;
                }
                e(l, m), l.prototype = null === m ? Object.create(m) : (a.prototype = m.prototype, new a());
            }(a, k), a.prototype.componentDidMount = function() {
                if (void 0 === this.props.dataLength)
                    throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener('scroll', this.throttledOnScrollListener), 'number' == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener('touchstart', this.onStart), this.el.addEventListener('touchmove', this.onMove), this.el.addEventListener('touchend', this.onEnd), this.el.addEventListener('mousedown', this.onStart), this.el.addEventListener('mousemove', this.onMove), this.el.addEventListener('mouseup', this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), 'function' != typeof this.props.refreshFunction))
                    throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'');
            }, a.prototype.componentWillUnmount = function() {
                this.el && (this.el.removeEventListener('scroll', this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener('touchstart', this.onStart), this.el.removeEventListener('touchmove', this.onMove), this.el.removeEventListener('touchend', this.onEnd), this.el.removeEventListener('mousedown', this.onStart), this.el.removeEventListener('mousemove', this.onMove), this.el.removeEventListener('mouseup', this.onEnd)));
            }, a.prototype.UNSAFE_componentWillReceiveProps = function(l) {
                this.props.dataLength !== l.dataLength && (this.actionTriggered = !1, this.setState({
                    showLoader: !1
                }));
            }, a.prototype.isElementAtTop = function(l, m) {
                void 0 === m && (m = 0.8);
                var n = l === document.body || l === document.documentElement ? window.screen.availHeight : l.clientHeight,
                    o = _j(m);
                return o.unit === g ? l.scrollTop <= o.value + n - l.scrollHeight + 1 || 0 === l.scrollTop : l.scrollTop <= o.value / 100 + n - l.scrollHeight + 1 || 0 === l.scrollTop;
            }, a.prototype.isElementAtBottom = function(l, m) {
                void 0 === m && (m = 0.8);
                var n = l === document.body || l === document.documentElement ? window.screen.availHeight : l.clientHeight,
                    o = _j(m);
                return o.unit === g ? l.scrollTop + n >= l.scrollHeight - o.value : l.scrollTop + n >= o.value / 100 * l.scrollHeight;
            }, a.prototype.render = function() {
                var l = this,
                    m = f({
                        height: this.props.height || 'auto',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch'
                    }, this.props.style),
                    n = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                    o = this.props.pullDownToRefresh && this.props.height ? {
                        overflow: 'auto'
                    } : {};
                return _p(d).createElement('div', {
                    style: o,
                    className: 'infinite-scroll-component__outerdiv'
                }, _p(d).createElement('div', {
                    className: 'infinite-scroll-component ' + (this.props.className || ''),
                    ref: function(_p) {
                        return l._infScroll = _p;
                    },
                    style: m
                }, this.props.pullDownToRefresh && _p(d).createElement('div', {
                    style: {
                        position: 'relative'
                    },
                    ref: function(_p) {
                        return l._pullDown = _p;
                    }
                }, _b(d).createElement('div', {
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !n && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage));
            }, a;
        }(d.Component),
        _k = j;
}), a.register('7s5R80', function(_b, c) {
    _i(_b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd');
    let g;
    var _h = _i => (0, d.jsx)(_i, {
        onClick: _i.onClick,
        className: _i.className,
        style: _i.style,
        children: _i.children
    });
    const _i = e.default.div(g || (g = (_i => _i)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), f.default.White);
}), a.register('mfp3D', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('aeDL7'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'EnterOutlined';
    var _i = e.forwardRef(h);
}), a.register('aeDL7', function(b, c) {
    _f(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('VckKB', function(b, c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e() {
        const [, _f] = d.useReducer(_f => _f + 1, 0);
        return _f;
    }
}), a.register('fuuXY5', function(b, c) {
    _h(b.exports, 'responsiveArray', function() {
        return _f;
    }), _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('XpGPm');
    const _f = [
        'xxl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs'
    ];

    function _g() {
        const [, _h] = (0, e.useToken)(), i = (_h => ({
            xs: `(max-width: ${ _h.screenXSMax }px)`,
            sm: `(min-width: ${ _h.screenSM }px)`,
            md: `(min-width: ${ _h.screenMD }px)`,
            lg: `(min-width: ${ _h.screenLG }px)`,
            xl: `(min-width: ${ _h.screenXL }px)`,
            xxl: `(min-width: ${ _h.screenXXL }px)`
        }))((_h => {
            const j = _h,
                k = [].concat(_f).reverse();
            return k.forEach((_h, b) => {
                const l = _h.toUpperCase(),
                    m = `screen${ l }Min`,
                    n = `screen${ l }`;
                if (!(j[m] <= j[n]))
                    throw new Error(`${ m }<=${ n } fails : !(${ j[m] }<=${ j[n] })`);
                if (b < k.length - 1) {
                    const o = `screen${ l }Max`;
                    if (!(j[n] <= j[o]))
                        throw new Error(`${ n }<=${ o } fails : !(${ j[n] }<=${ j[o] })`);
                    const p = `screen${ k[b + 1].toUpperCase() }Min`;
                    if (!(j[o] <= j[p]))
                        throw new Error(`${ o }<=${ p } fails : !(${ j[o] }<=${ j[p] })`);
                }
            }), _h;
        })(_h));
        return _k(d).useMemo(() => {
            const j = new Map();
            let _k = -1,
                l = {};
            return {
                matchHandlers: {},
                dispatch: _k => (l = _k, j.forEach(j => j(l)), j.size >= 1),
                subscribe(m) {
                    return j.size || this.register(), _k += 1, j.set(_k, m), m(l), _k;
                },
                unsubscribe(m) {
                    j.delete(m), j.size || this.unregister();
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
                                } = m;
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
        }, [_h]);
    }
}), a.register('7B+hJ16', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.lazyWithPreload = void 0;
    var d = a('LEQ5w');

    function e(f) {
        var g, h, i = (0, d.lazy)(f),
            j = (0, d.forwardRef)(function(k, l) {
                var m = (0, d.useRef)(null != g ? g : i);
                return (0, d.createElement)(m.current, Object.assign(l ? {
                    ref: l
                } : {}, k));
            });
        return j.preload = function() {
            return h || (h = f().then(function(k) {
                return g = k.default;
            })), h;
        }, j;
    }
    b.exports.lazyWithPreload = _d, b.exports.default = _d;
}), a.register('dBHoZ22', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var _d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('7tpbI13'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, _d.default)((0, _d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'QuestionCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('7tpbI13', function(b, c) {
    _d(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('q0pUc1', function(b, c) {
    _d(b.exports, 'default', function() {
        return _g;
    });
    var d = a('2SA1z'),
        e = a('GvkEq1');
    const f = d.default;
    f.Group = e.default, f.__ANT_CHECKBOX = !0;
    var _g = f;
}), a.register('2SA1z', function(b, c) {
    _d(b.exports, 'default', function() {
        return _q;
    }, function(_d) {
        return _q = _d;
    });
    var d = a('JrtKP'),
        e = a('RW2Mp'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('UWoHW'),
        i = a('GvkEq1'),
        _j = a('hFUNe'),
        k = a('oaXRt'),
        l = function(m, n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
            }
            return o;
        };
    const m = (_d, a) => {
        var n, {
                prefixCls: o,
                className: p,
                rootClassName: _q,
                children: r,
                indeterminate: s = !1,
                style: t,
                onMouseEnter: u,
                onMouseLeave: v,
                skipGroup: w = !1,
                disabled: x
            } = _d,
            y = l(_d, [
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
            getPrefixCls: z,
            direction: A
        } = f.useContext(g.ConfigContext), B = f.useContext(i.GroupContext), {
            isFormItemInput: C
        } = f.useContext(h.FormItemInputContext), D = f.useContext(_j.default), E = null !== (n = (null == B ? void 0 : B.disabled) || x) && void 0 !== n ? n : D, F = f.useRef(y.value);
        f.useEffect(() => {
            null == B || B.registerValue(y.value);
        }, []), f.useEffect(() => {
            if (!w)
                return y.value !== F.current && (null == B || B.cancelValue(F.current), null == B || B.registerValue(y.value), F.current = y.value), () => null == B ? void 0 : B.cancelValue(y.value);
        }, [y.value]);
        const G = z('checkbox', o),
            [H, I] = (0, k.default)(G),
            J = Object.assign({}, y);
        B && !w && (J.onChange = function() {
            y.onChange && y.onChange.apply(y, arguments), B.toggleOption && B.toggleOption({
                label: r,
                value: y.value
            });
        }, J.name = B.name, J.checked = B.value.includes(y.value));
        const K = _m(d)({
                [`${ G }-wrapper`]: !0,
                [`${ G }-rtl`]: 'rtl' === A,
                [`${ G }-wrapper-checked`]: J.checked,
                [`${ G }-wrapper-disabled`]: E,
                [`${ G }-wrapper-in-form-item`]: C
            }, p, _q, I),
            L = _m(d)({
                [`${ G }-indeterminate`]: s
            }, I),
            M = s ? 'mixed' : void 0;
        return H(f.createElement('label', {
            className: K,
            style: t,
            onMouseEnter: u,
            onMouseLeave: v
        }, f.createElement(e.default, Object.assign({
            'aria-checked': M
        }, J, {
            prefixCls: G,
            className: L,
            disabled: E,
            ref: a
        })), void 0 !== r && f.createElement('span', null, r)));
    };
    var n = f.forwardRef(m);
}), a.register('GvkEq1', function(b, c) {
    _d(b.exports, 'GroupContext', function() {
        return _l;
    }, function(_d) {
        return _l = _d;
    }), _d(b.exports, 'default', function() {
        return _r;
    }, function(_d) {
        return _r = _d;
    });
    var d = a('gK9Sd'),
        e = a('JrtKP'),
        f = a('sWKBM'),
        g = a('LEQ5w'),
        h = a('1P5ls'),
        i = a('2SA1z'),
        j = a('oaXRt'),
        k = function(l, _m) {
            var n = {};
            for (var o in l)
                Object.prototype.hasOwnProperty.call(l, o) && _m.indexOf(o) < 0 && (n[o] = l[o]);
            if (null != l && 'function' == typeof Object.getOwnPropertySymbols) {
                var p = 0;
                for (o = Object.getOwnPropertySymbols(l); p < o.length; p++)
                    _m.indexOf(o[p]) < 0 && Object.prototype.propertyIsEnumerable.call(l, o[p]) && (n[o[p]] = l[o[p]]);
            }
            return n;
        };
    const _l = g.createContext(null),
        m = (_k, a) => {
            var {
                defaultValue: n,
                children: o,
                options: p = [],
                prefixCls: q,
                className: _r,
                rootClassName: s,
                style: t,
                onChange: u
            } = _k, v = k(_k, [
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
                getPrefixCls: w,
                direction: x
            } = g.useContext(h.ConfigContext), [y, z] = g.useState(v.value || n || []), [A, B] = g.useState([]);
            g.useEffect(() => {
                'value' in v && z(v.value || []);
            }, [v.value]);
            const C = () => p.map(_k => 'string' == typeof _k || 'number' == typeof _k ? {
                    label: _k,
                    value: _k
                } : _k),
                D = w('checkbox', q),
                E = `${ D }-group`,
                [F, G] = (0, j.default)(D),
                H = (0, f.default)(v, [
                    'value',
                    'disabled'
                ]);
            p && p.length > 0 && (o = C().map(_k => g.createElement(i.default, {
                prefixCls: D,
                key: _k.value.toString(),
                disabled: 'disabled' in _k ? _k.disabled : v.disabled,
                value: _k.value,
                checked: y.includes(_k.value),
                onChange: _k.onChange,
                className: `${ E }-item`,
                style: _k.style
            }, _k.label)));
            const I = {
                    toggleOption: _k => {
                        const J = y.indexOf(_k.value),
                            K = (0, d.default)(y); -
                        1 === J ? K.push(_k.value) : K.splice(J, 1), 'value' in v || z(K);
                        const L = C();
                        null == u || u(K.filter(_k => A.includes(_k)).sort((_k, J) => L.findIndex(J => J.value === _k) - L.findIndex(_k => _k.value === J)));
                    },
                    value: y,
                    disabled: v.disabled,
                    name: v.name,
                    registerValue: _k => {
                        B(_b => [].concat((0, d.default)(_b), [_k]));
                    },
                    cancelValue: _k => {
                        B(_b => _b.filter(_b => _b !== _k));
                    }
                },
                J = _b(e)(E, {
                    [`${ E }-rtl`]: 'rtl' === x
                }, _r, s, G);
            return F(g.createElement('div', Object.assign({
                className: J,
                style: t
            }, H, {
                ref: a
            }), g.createElement(_l.Provider, {
                value: I
            }, o)));
        },
        n = g.forwardRef(m);
    var o = g.memo(n);
}), a.register('oaXRt', function(_b, c) {
    _k(_b.exports, 'getStyle', function() {
        return _j;
    }), _k(_b.exports, 'default', function() {
        return _j;
    });
    var d = a('wC0DT'),
        e = a('XC0UB'),
        f = a('l+IVY'),
        g = a('7hbGU');
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
        i = _k => {
            const {
                checkboxCls: j
            } = _k, k = `${ j }-wrapper`;
            return [{
                    [`${ j }-group`]: Object.assign(Object.assign({}, (0, g.resetComponent)(_k)), {
                        display: 'inline-flex'
                    }),
                    [k]: Object.assign(Object.assign({}, (0, g.resetComponent)(_k)), {
                        display: 'inline-flex',
                        alignItems: 'baseline',
                        cursor: 'pointer',
                        '&:after': {
                            display: 'inline-block',
                            width: 0,
                            overflow: 'hidden',
                            content: '\'\\a0\''
                        },
                        [`& + ${ k }`]: {
                            marginInlineStart: _k.marginXS
                        },
                        [`&${ k }-in-form-item`]: {
                            'input[type="checkbox"]': {
                                width: 14,
                                height: 14
                            }
                        }
                    }),
                    [j]: Object.assign(Object.assign({}, (0, g.resetComponent)(_k)), {
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
                            [`&:focus-visible + ${ j }-inner`]: Object.assign({}, (0, g.genFocusOutline)(_k))
                        },
                        [`${ j }-inner`]: {
                            boxSizing: 'border-box',
                            position: 'relative',
                            top: 0,
                            insetInlineStart: 0,
                            display: 'block',
                            width: _k.checkboxSize,
                            height: _k.checkboxSize,
                            direction: 'ltr',
                            backgroundColor: _k.colorBgContainer,
                            border: `${ _k.lineWidth }px ${ _k.lineType } ${ _k.colorBorder }`,
                            borderRadius: _k.borderRadiusSM,
                            borderCollapse: 'separate',
                            transition: `all ${ _k.motionDurationSlow }`,
                            '&:after': {
                                boxSizing: 'border-box',
                                position: 'absolute',
                                top: '50%',
                                insetInlineStart: '21.5%',
                                display: 'table',
                                width: _k.checkboxSize / 14 * 5,
                                height: _k.checkboxSize / 14 * 8,
                                border: `${ _k.lineWidthBold }px solid ${ _k.colorWhite }`,
                                borderTop: 0,
                                borderInlineStart: 0,
                                transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                                opacity: 0,
                                content: '""',
                                transition: `all ${ _k.motionDurationFast } ${ _k.motionEaseInBack }, opacity ${ _k.motionDurationFast }`
                            }
                        },
                        '& + span': {
                            paddingInlineStart: _k.paddingXS,
                            paddingInlineEnd: _k.paddingXS
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
                                    width: _k.fontSizeLG / 2,
                                    height: _k.fontSizeLG / 2,
                                    backgroundColor: _k.colorPrimary,
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
                    [`${ k }:hover ${ j }:after`]: {
                        visibility: 'visible'
                    },
                    [`\n        ${ k }:not(${ k }-disabled),\n        ${ j }:not(${ j }-disabled)\n      `]: {
                        [`&:hover ${ j }-inner`]: {
                            borderColor: _k.colorPrimary
                        }
                    },
                    [`${ k }:not(${ k }-disabled)`]: {
                        [`&:hover ${ j }-checked:not(${ j }-disabled) ${ j }-inner`]: {
                            backgroundColor: _k.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ j }-checked:not(${ j }-disabled):after`]: {
                            borderColor: _k.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ j }-checked`]: {
                        [`${ j }-inner`]: {
                            backgroundColor: _k.colorPrimary,
                            borderColor: _k.colorPrimary,
                            '&:after': {
                                opacity: 1,
                                transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                                transition: `all ${ _k.motionDurationMid } ${ _k.motionEaseOutBack } ${ _k.motionDurationFast }`
                            }
                        },
                        '&:after': {
                            position: 'absolute',
                            top: 0,
                            insetInlineStart: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: _k.borderRadiusSM,
                            visibility: 'hidden',
                            border: `${ _k.lineWidthBold }px solid ${ _k.colorPrimary }`,
                            animationName: h,
                            animationDuration: _k.motionDurationSlow,
                            animationTimingFunction: 'ease-in-out',
                            animationFillMode: 'backwards',
                            content: '""',
                            transition: `all ${ _k.motionDurationSlow }`
                        }
                    },
                    [`\n        ${ k }-checked:not(${ k }-disabled),\n        ${ j }-checked:not(${ j }-disabled)\n      `]: {
                        [`&:hover ${ j }-inner`]: {
                            backgroundColor: _k.colorPrimaryHover,
                            borderColor: 'transparent'
                        },
                        [`&:hover ${ j }:after`]: {
                            borderColor: _k.colorPrimaryHover
                        }
                    }
                },
                {
                    [`${ k }-disabled`]: {
                        cursor: 'not-allowed'
                    },
                    [`${ j }-disabled`]: {
                        [`&, ${ j }-input`]: {
                            cursor: 'not-allowed',
                            pointerEvents: 'none'
                        },
                        [`${ j }-inner`]: {
                            background: _k.colorBgContainerDisabled,
                            borderColor: _k.colorBorder,
                            '&:after': {
                                borderColor: _k.colorTextDisabled
                            }
                        },
                        '&:after': {
                            display: 'none'
                        },
                        '& + span': {
                            color: _k.colorTextDisabled
                        },
                        [`&${ j }-indeterminate ${ j }-inner::after`]: {
                            background: _k.colorTextDisabled
                        }
                    }
                }
            ];
        };

    function _j(_k, l) {
        const m = (0, f.merge)(l, {
            checkboxCls: `.${ _k }`,
            checkboxSize: l.controlInteractiveSize
        });
        return [i(m)];
    }
    var _j = (0, e.default)('Checkbox', (e, _b) => {
        let {
            prefixCls: k
        } = _b;
        return [u(k, e)];
    });
});