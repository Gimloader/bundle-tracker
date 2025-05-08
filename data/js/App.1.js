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
var c = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}, d = c.parcelRequire388b;
d.register('.....', function (e, f) {
    var g;
    g = e.exports, Object.defineProperty(g, '__esModule', {
        value: !0,
        configurable: !0
    }), a(e.exports, 'default', function () {
        return _B;
    });
    var h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....'), s = d('.....'), t = d('.....'), u = d('.....'), v = d('.....'), w = d('.....'), x = d('.....'), y = d('.....'), z = d('.....');
    let A;
    var _B = (0, n.observer)(C => {
        const {
                gui: {
                    none: {
                        addMenu: {screen: D}
                    }
                },
                me: {adding: E}
            } = (0, o.default)(), [F, G, H] = (0, x.useBoolean)(!0), [I, J] = i.useState(!0);
        (0, s.useInputBlockingUI)();
        const K = i.useMemo(() => D === p.AddScreen.terrain, [D]), L = i.useMemo(() => D === p.AddScreen.props, [D]), M = i.useMemo(() => D === p.AddScreen.devices, [D]), N = () => {
                C.setToHomeScreen(), _Q(p.AddScreen.home);
            }, O = (0, y.default)();
        i.useEffect(() => {
            O || H();
        }, [O]);
        const P = i.useCallback(() => {
                I ? N() : K || L || M || H();
            }, [
                H,
                K,
                L,
                M,
                I,
                N
            ]), _Q = R => (0, r.default)(R), R = () => {
                _Q(p.AddScreen.home);
            };
        return (0, h.jsx)(w.default, {
            open: F,
            onClose: P,
            afterOpenChange: S => {
                S && J(!1), S || N();
            },
            width: 600,
            destroyOnClose: !0,
            children: (0, h.jsx)(_C, {
                children: (0, h.jsxs)(k.default, {
                    close: C.setToHomeScreen,
                    setToTerrain: () => _Q(p.AddScreen.terrain),
                    setToProps: () => {
                        _Q(p.AddScreen.props);
                    },
                    setToDevices: () => _Q(p.AddScreen.devices),
                    setToWires: () => {
                        E.mode = t.AddingMode.wire, (0, u.default)(v.default.adding), (0, z.EmitTutorialEvent)({ event: z.TutorialEventName.START_ADDING_WIRE });
                    },
                    children: [
                        (0, h.jsx)(l.default, {
                            open: K,
                            close: R
                        }),
                        (0, h.jsx)(m.default, {
                            open: L,
                            close: R
                        }),
                        (0, h.jsx)(q.default, {
                            open: M,
                            close: R
                        })
                    ]
                })
            })
        });
    });
    const _C = j.default.div.attrs({ className: 'maxWidth' })(A || (A = (D => D)``));
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _r;
    });
    var g = d('.....'), h = d('.....');
    d('.....');
    var i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....');
    let n, o, p = q => q;
    const q = r => (0, m.default)(`editor/icons/${ r }.png`);
    var _r = s => (0, g.jsxs)(_s, {
        children: [
            (0, g.jsx)(h.default.Title, {
                level: 1,
                style: {
                    fontFamily: j.Fonts.FugazOne,
                    marginBottom: 25,
                    marginTop: 5
                },
                className: 'allCaps',
                children: 'Add'
            }),
            (0, g.jsxs)(_t, {
                children: [
                    (0, g.jsx)(l.default, {
                        name: k.default.terrain.singular,
                        description: 'The floors and walls on the map',
                        icon: q('terrain'),
                        onClick: s.setToTerrain
                    }),
                    (0, g.jsx)(l.default, {
                        name: k.default.prop.plural,
                        description: 'Objects and decorations',
                        icon: q('prop'),
                        onClick: s.setToProps
                    }),
                    (0, g.jsx)(l.default, {
                        name: k.default.device.plural,
                        description: 'Create game mechanics!',
                        icon: q('device'),
                        onClick: s.setToDevices
                    }),
                    (0, g.jsx)(l.default, {
                        name: k.default.wire.plural,
                        description: 'Connect devices together',
                        icon: q('wire'),
                        onClick: s.setToWires
                    })
                ]
            }),
            s.children
        ]
    });
    const _s = i.default.div.attrs({ className: 'flex-column flex-center maxWidth' })(n || (n = p``)), _t = i.default.div.attrs({ className: 'maxWidth' })(o || (o = p`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`));
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return d;
    });
    var g = {
        terrain: {
            singular: 'terrain',
            plural: 'terrains'
        },
        prop: {
            singular: 'prop',
            plural: 'props'
        },
        device: {
            singular: 'device',
            plural: 'devices'
        },
        wire: {
            singular: 'wire',
            plural: 'wires'
        }
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _t;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    d('.....');
    var j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....');
    let o, p, q, r = s => s;
    const {useToken: s} = h.default;
    var _t = u => {
        const {
                token: {borderRadius: v}
            } = s(), {
                name: w,
                description: x,
                icon: y
            } = u;
        return (0, g.jsx)(_u, {
            onClick: () => {
                (0, n.playClickSound)(), u.onClick();
            },
            borderRadius: v,
            children: (0, g.jsxs)(j.CenteredColumn, {
                className: 'maxAll',
                children: [
                    (0, g.jsx)(_v, { children: (0, g.jsx)(_w, { src: y }) }),
                    (0, g.jsx)(i.default.Title, {
                        level: 3,
                        style: {
                            marginBottom: -1,
                            fontFamily: k.Fonts.FugazOne,
                            textTransform: 'uppercase'
                        },
                        children: (0, m.CapitalizeFirstLetter)(w)
                    }),
                    (0, g.jsx)(i.default.Text, { children: x })
                ]
            })
        });
    };
    const _u = l.default.div.attrs({ className: 'maxAll' })(o || (o = r`
  cursor: pointer;
  border-radius: ${ 0 }px;
  background: rgba(255, 255, 255, 0.1);
  padding: 40px 0px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`), v => v.borderRadius), _v = l.default.div(p || (p = r`
  margin-bottom: 5px;
`)), _w = l.default.img(q || (q = r`
  height: 70px;
`));
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _t;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....'), s = d('.....');
    var _t = u => {
        const [v, w] = l.useState(''), x = l.useRef(null), y = (0, s.isPlatformer)();
        return (0, g.jsx)(i.default, {
            open: u.open,
            onClose: u.close,
            width: 500,
            afterOpenChange: z => {
                var A;
                z ? null == x || null === (A = x.current) || void 0 === A || A.focus() : w('');
            },
            destroyOnClose: !0,
            children: (0, g.jsxs)(m.CenteredColumn, {
                children: [
                    (0, g.jsx)(k.default.Title, {
                        level: 1,
                        style: {
                            fontFamily: n.Fonts.FugazOne,
                            marginBottom: 12,
                            marginTop: 5
                        },
                        className: 'allCaps',
                        children: (0, q.CapitalizeFirstLetter)(r.default.terrain.singular)
                    }),
                    y ? null : (0, g.jsxs)(g.Fragment, {
                        children: [
                            (0, g.jsx)(o.default, {}),
                            ' ',
                            (0, g.jsx)(h.default, {})
                        ]
                    }),
                    (0, g.jsx)(j.default.Search, {
                        size: 'large',
                        placeholder: `Search for ${ r.default.terrain.plural }...`,
                        style: { marginBottom: 23 },
                        value: v,
                        onChange: z => {
                            w(z.target.value);
                        },
                        ref: x
                    }),
                    (0, g.jsx)(p.default, { searchQuery: v })
                ]
            })
        });
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _o;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    d('.....');
    var k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....');
    var _o = (0, j.observer)(() => {
        const {
                me: {
                    adding: {terrain: p}
                }
            } = (0, l.default)(), q = p.buildTerrainAsWall, r = s => {
                (0, n.isPlatformer)() || (p.buildTerrainAsWall = s);
            };
        return (0, g.jsxs)(m.Centered, {
            children: [
                (0, g.jsxs)(i.default.Text, {
                    style: { marginRight: 10 },
                    children: [
                        'Place down ',
                        k.default.terrain.singular,
                        ' as a'
                    ]
                }),
                (0, g.jsxs)(h.default.Group, {
                    children: [
                        (0, g.jsx)(h.default, {
                            type: q ? 'default' : 'primary',
                            onClick: () => r(!1),
                            children: 'Floor'
                        }),
                        (0, g.jsx)(h.default, {
                            type: q ? 'primary' : 'default',
                            onClick: () => r(!0),
                            children: 'Wall'
                        })
                    ]
                })
            ]
        });
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _s;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....');
    var _s = t => {
        const {
                worldOptions: {terrainOptions: u}
            } = (0, l.default)(), [v, w] = i.useState(-1), [x] = (0, j.useDebouncedValue)(t.searchQuery, 150), y = i.useMemo(() => {
                var z;
                const A = null === (z = null == x ? void 0 : x.trim()) || void 0 === z ? void 0 : z.toLowerCase();
                if (!A && !(0, q.IsTutorial)())
                    return u.filter(B => (0, p.CanAddTerrain)(B.id));
                const B = u.filter(C => C.name.toLowerCase().includes(A) && (0, p.CanAddTerrain)(C.id));
                return (0, q.IsTutorial)() ? B.sort((C, D) => {
                    const E = r.TutorialConsts.topTerrain.indexOf(C.id), F = r.TutorialConsts.topTerrain.indexOf(D.id);
                    return -1 === E && -1 === F ? 0 : -1 === E ? 1 : -1 === F ? -1 : E - F;
                }) : B;
            }, [
                u.length,
                x
            ]);
        return (0, k.default)(b(n).Input.Keyboard.KeyCodes.UP, () => {
            w(Math.max(0, v - 1));
        }, [v]), (0, k.default)(b(n).Input.Keyboard.KeyCodes.DOWN, () => {
            const z = y.length - 1;
            w(Math.min(z, v + 1));
        }, [
            y.length,
            v
        ]), i.useEffect(() => {
            w(x ? 0 : -1);
        }, [x]), y.length ? (0, g.jsx)(h.default, {
            direction: 'vertical',
            size: 12,
            className: 'maxWidth',
            children: y.map((z, A) => (0, g.jsx)(m.default, {
                option: z,
                focused: v === A
            }, z.id))
        }) : (0, g.jsx)(o.default, {});
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'useDebouncedValue', function () {
        return _l;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = { initializeWithNull: !1 }, _l = function (m, n, o) {
            void 0 === o && (o = {});
            var p = Object.assign({}, k, o).initializeWithNull, q = (0, g.useState)(p ? null : m), r = q[0], s = q[1], t = (0, h.useDebounce)(s, n);
            return (0, i.useDidMount)(function () {
                p && t(m);
            }), (0, j.useDidUpdate)(function () {
                t(m);
            }, [m]), [
                r,
                s
            ];
        };
}), d.register('.....', function (e, f) {
    a(e.exports, 'useDebounce', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....');
    function _i(j, k, l) {
        var m = (0, h.useCallback)(function (n) {
                return b(g)(n, k, l);
            }, [
                k,
                l
            ]), n = (0, h.useRef)(m(j));
        return (0, h.useEffect)(function () {
            _i.current = m(j);
        }, [
            j,
            m
        ]), _i.current;
    }
}), d.register('.....', function (e, f) {
    var g = /^\s+|\s+$/g, h = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, j = /^0o[0-7]+$/i, k = parseInt, l = 'object' == typeof c && c && c.Object === Object && c, m = 'object' == typeof self && self && self.Object === Object && self, n = l || m || Function('return this')(), o = Object.prototype.toString, p = Math.max, q = Math.min, r = function () {
            return n.Date.now();
        };
    function s(t) {
        var u = typeof t;
        return !!t && ('object' == u || 'function' == u);
    }
    function u(v) {
        if ('number' == typeof v)
            return v;
        if (function (w) {
                return 'symbol' == typeof w || function (x) {
                    return !!x && 'object' == typeof x;
                }(w) && '[object Symbol]' == o.call(w);
            }(v))
            return NaN;
        if (s(v)) {
            var w = 'function' == typeof v.valueOf ? v.valueOf() : v;
            v = s(w) ? w + '' : w;
        }
        if ('string' != typeof v)
            return 0 === v ? v : +v;
        v = v.replace(g, '');
        var x = i.test(v);
        return x || j.test(v) ? k(v.slice(2), x ? 2 : 8) : h.test(v) ? NaN : +v;
    }
    e.exports = function (x, y, z) {
        var A, B, C, D, E, F, G = 0, H = !1, I = !1, J = !0;
        if ('function' != typeof x)
            throw new TypeError('Expected a function');
        function K(L) {
            var M = A, N = B;
            return A = B = void 0, G = L, D = x.apply(N, M);
        }
        function N(O) {
            return G = O, E = setTimeout(_Q, y), H ? K(O) : D;
        }
        function O(P) {
            var Q = P - F;
            return void 0 === F || Q >= y || Q < 0 || I && P - G >= N;
        }
        function _Q() {
            var R = r();
            if (O(R))
                return _S(R);
            E = setTimeout(_Q, function (S) {
                var T = y - (S - F);
                return I ? q(T, N - (S - G)) : T;
            }(R));
        }
        function _S(T) {
            return E = void 0, J && A ? K(T) : (A = B = void 0, D);
        }
        function T() {
            var U = r(), V = O(U);
            if (A = arguments, B = this, F = U, V) {
                if (void 0 === E)
                    return N(F);
                if (I)
                    return E = setTimeout(_Q, y), K(F);
            }
            return void 0 === E && (E = setTimeout(_Q, y)), D;
        }
        return y = u(y) || 0, s(V) && (H = !!V.leading, N = (I = 'maxWait' in V) ? p(u(V.maxWait) || 0, y) : N, J = 'trailing' in V ? !!V.trailing : J), T.cancel = function () {
            void 0 !== E && clearTimeout(E), G = 0, A = F = B = E = void 0;
        }, T.flush = function () {
            return void 0 === E ? D : _S(r());
        }, T;
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'useDidUpdate', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i, j) {
        var k = (0, g.useRef)(!1);
        void 0 === j || Array.isArray(j) ? Array.isArray(j) && 0 === j.length && console.warn('Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.') : j = [j], (0, g.useEffect)(function () {
            k.current ? i() : k.current = !0;
        }, j);
    }
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _H;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....'), s = d('.....'), t = d('.....'), u = d('.....'), v = d('.....'), w = d('.....'), x = d('.....'), y = d('.....'), z = d('.....');
    let A, B, C, D, E, F = G => G;
    const {useToken: G} = k.default;
    var _H = I => {
        const {
                id: J,
                name: K,
                previewUrl: L,
                seasonTicketRequired: M
            } = I.option, N = h.useRef(null), {
                token: {borderRadius: O}
            } = G(), P = M && !(0, y.OwnsSeasonTicket)(), Q = R => {
                P || (n.default.me.adding.terrain.currentlySelectedTerrain = J, n.default.me.adding.mode = o.AddingMode.terrain, (0, p.default)(q.default.adding), (0, v.IsTutorial)() && (0, w.default)(x.AddScreen.home), (0, u.EmitTutorialEvent)({
                    event: u.TutorialEventName.SELECT_TERRAIN_TO_ADD,
                    terrainId: J
                }), R && R());
            };
        return (0, r.default)(b(s).Input.Keyboard.KeyCodes.ENTER, () => {
            I.focused && Q();
        }, [
            I.focused,
            Q
        ]), h.useEffect(() => {
            var R;
            I.focused && (null === (R = N.current) || void 0 === R || R.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            }));
        }, [I.focused]), (0, g.jsxs)(_I, {
            borderRadius: O,
            focused: I.focused,
            onClick: () => {
                Q(() => {
                    (0, t.playClickSound)();
                });
            },
            ref: N,
            children: [
                (0, g.jsx)(_K, { src: L }),
                (0, g.jsxs)(_J, {
                    children: [
                        (0, g.jsx)(_L, {
                            level: 5,
                            className: 'allCaps',
                            style: { fontFamily: m.Fonts.FugazOne },
                            children: K
                        }),
                        M ? (0, g.jsx)('div', {
                            style: { marginTop: 2 },
                            children: (0, g.jsx)(z.SeasonTicketExclusive, {})
                        }) : null
                    ]
                })
            ]
        });
    };
    const _I = (0, i.default)(j.VerticalCentered)(A || (A = F`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${ 0 }px;
  border: 2px solid
    ${ 0 };
  padding: 10px 15px;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`), J => J.borderRadius, J => J.focused ? '#ffca28' : 'rgba(255, 255, 255, 0.1)'), _J = (i.default.div(B || (B = F`
  display: flex;
  align-items: center;
`)), i.default.div(C || (C = F`
  display: flex;
  flex-direction: column;
`))), _K = i.default.img(D || (D = F`
  height: 54px;
  border-radius: 3px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  margin-right: 15px;
`)), _L = (0, i.default)(l.default.Title)(E || (E = F`
  margin-bottom: 0 !important;
`));
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    var _j = k => {
        k !== i.AddScreen.home && (0, g.EmitTutorialEvent)({
            event: g.TutorialEventName.OPEN_ADD_SUBMENU,
            menu: k
        }), h.default.gui.none.addMenu.screen = k;
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'OwnsSeasonTicket', function () {
        return _h;
    });
    var g = d('.....');
    const _h = () => {
        var i, j, k;
        return null !== (k = null === (i = (0, g.getUser)()) || void 0 === i || null === (j = i.seasonTicket) || void 0 === j ? void 0 : j.active) && void 0 !== k && k;
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'SeasonTicketExclusive', function () {
        return _l;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    let k;
    const _l = () => (0, g.jsxs)(_m, {
            children: [
                i.SeasonTicketName.name,
                ' Exclusive'
            ]
        }), _m = h.default.div(k || (k = (n => n)`
  color: rgb(218, 165, 32);
  background: linear-gradient(
    45deg,
    #ae8625,
    #f7ef8a,
    #d2ac47,
    #edc967,
    #ae8625,
    #f7ef8a,
    #d2ac47,
    #edc967,
    #ae8625,
    #f7ef8a
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: ${ 0 };
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1;
`), j.Fonts.FugazOne);
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....');
    d('.....');
    var _i = () => (0, g.jsx)(h.default.Text, {
        italic: !0,
        children: 'No results found. Try a different search.'
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'CanAddTerrain', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....');
    const _i = j => {
        var k;
        const l = g.default.worldOptions.terrainOptions.find(m => m.id === j);
        if (!l)
            return !1;
        if (null === (k = l.blockedMapStyles) || void 0 === k ? void 0 : k.length) {
            const m = g.default.session.mapStyle;
            if (l.blockedMapStyles.includes(m))
                return !1;
        }
        const n = l.minimumRoleLevel, o = l.maximumRoleLevel;
        return (0, h.IsRoleLevelBetween)(n, o);
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _q;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....');
    var _q = r => {
        const [s, t] = k.useState(''), u = k.useRef(null);
        return (0, g.jsx)(h.default, {
            open: r.open,
            onClose: r.close,
            width: 550,
            afterOpenChange: v => {
                var w;
                v ? null == u || null === (w = u.current) || void 0 === w || w.focus() : t('');
            },
            destroyOnClose: !0,
            children: (0, g.jsxs)(l.CenteredColumn, {
                children: [
                    (0, g.jsx)(j.default.Title, {
                        level: 1,
                        style: {
                            fontFamily: m.Fonts.FugazOne,
                            marginBottom: 12,
                            marginTop: 5
                        },
                        className: 'allCaps',
                        children: (0, o.CapitalizeFirstLetter)(p.default.prop.plural)
                    }),
                    (0, g.jsx)(i.default.Search, {
                        size: 'large',
                        placeholder: `Search for ${ p.default.prop.plural }...`,
                        style: { marginBottom: 23 },
                        value: s,
                        onChange: v => {
                            t(v.target.value);
                        },
                        ref: u
                    }),
                    (0, g.jsx)(n.default, { searchQuery: s })
                ]
            })
        });
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _w;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....'), s = d('.....'), t = d('.....'), u = d('.....');
    let v;
    var _w = (0, h.observer)(x => {
        const {worldOptions: y} = (0, m.default)(), [z, A] = i.useState(-1), [B] = (0, j.useDebouncedValue)(x.searchQuery, 200), C = i.useMemo(() => {
                var D, E;
                const F = y.propsOptions.filter(G => (0, u.IsRoleLevelBetween)(G.minimumRoleLevel)), G = null === (D = null === (E = x.searchQuery) || void 0 === E ? void 0 : E.trim()) || void 0 === D ? void 0 : D.toLowerCase();
                if (!G && !(0, s.IsTutorial)())
                    return F;
                const H = F.filter(I => I.name.toLowerCase().includes(G));
                return (0, s.IsTutorial)() ? H.sort((I, J) => {
                    const K = t.TutorialConsts.topProps.indexOf(I.id), L = t.TutorialConsts.topProps.indexOf(J.id);
                    return -1 === K && -1 === L ? 0 : -1 === K ? 1 : -1 === L ? -1 : K - L;
                }) : H;
            }, [
                y.propsOptions.length,
                B
            ]);
        (0, k.useDidMount)(() => {
            y.requestedAllProps || (y.requestedAllProps = !0, (0, n.default)(l.default.requestAllProps));
        });
        const D = i.useCallback(E => {
            const F = Math.max(0, Math.min(C.length - 1, z + E));
            A(F);
        }, [
            C.length,
            z
        ]);
        return (0, q.default)(Phaser.Input.Keyboard.KeyCodes.UP, () => {
            D(-2);
        }, [D]), (0, q.default)(Phaser.Input.Keyboard.KeyCodes.DOWN, () => {
            D(2);
        }, [D]), (0, q.default)(Phaser.Input.Keyboard.KeyCodes.LEFT, () => {
            D(-1);
        }, [D]), (0, q.default)(Phaser.Input.Keyboard.KeyCodes.RIGHT, () => {
            D(1);
        }, [D]), i.useEffect(() => {
            A(B ? 0 : -1);
        }, [B]), y.hasAllProps ? C.length ? (0, g.jsx)(_x, {
            children: C.map((E, F) => (0, g.jsx)(o.default, {
                focused: F === z,
                option: E
            }, E.id + '-option'))
        }) : (0, g.jsx)(r.default, {}) : null;
    });
    const _x = p.default.div.attrs({ className: 'maxWidth' })(v || (v = (y => y)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 10px;
  overflow: hidden;
`));
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _J;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = (k = d('.....'), l = d('.....'), d('.....')), p = d('.....'), q = d('.....'), r = d('.....'), s = d('.....'), t = d('.....'), u = d('.....'), v = d('.....'), w = d('.....'), x = d('.....'), y = d('.....'), z = d('.....'), A = d('.....'), B = d('.....'), C = d('.....');
    let D, E, F, G, H = I => I;
    const {useToken: I} = k.default;
    var _J = K => {
        const {
                id: L,
                name: M,
                imageUrl: N,
                seasonTicketRequired: O
            } = K.option, P = h.useRef(null), Q = b(q)(P), {
                token: {borderRadius: R}
            } = I(), S = O && !(0, B.OwnsSeasonTicket)(), T = U => {
                S || (r.default.me.adding.devices.selectedDeviceType = s.default.prop, r.default.me.adding.devices.currentlySelectedProp = L, r.default.me.adding.mode = v.AddingMode.device, (0, t.default)(u.default.adding), (0, y.IsTutorial)() && (0, z.default)(A.AddScreen.home), (0, x.EmitTutorialEvent)({
                    event: x.TutorialEventName.SELECT_PROP_TO_ADD,
                    propId: L
                }), U && U());
            };
        return (0, o.default)(b(p).Input.Keyboard.KeyCodes.ENTER, () => {
            K.focused && T();
        }, [
            K.focused,
            T
        ]), h.useEffect(() => {
            var U;
            K.focused && (null === (U = P.current) || void 0 === U || U.scrollIntoView({ block: 'center' }));
        }, [K.focused]), (0, g.jsx)(_K, {
            ref: P,
            onClick: () => {
                T(() => {
                    (0, w.playClickSound)();
                });
            },
            focused: K.focused,
            borderRadius: R,
            children: Q ? (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)(_L, { children: (0, g.jsx)(_M, { src: (0, n.default)(N) }) }),
                    (0, g.jsx)(_N, {
                        level: 5,
                        className: 'allCaps',
                        style: { fontFamily: m.Fonts.FugazOne },
                        children: M
                    }),
                    O ? (0, g.jsx)(C.SeasonTicketExclusive, {}) : null
                ]
            }) : null
        });
    };
    const _K = (0, i.default)(j.CenteredColumn)(D || (D = H`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${ 0 }px;
  border: 2px solid
    ${ 0 };
  padding: 10px 15px;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  height: auto;
  min-height: 168px;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`), L => L.borderRadius, L => L.focused ? '#ffca28' : 'rgba(255, 255, 255, 0.1)'), _L = (0, i.default)(j.Centered)(E || (E = H`
  width: 120px;
  height: 120px;
  padding: 10px;
`)), _M = i.default.img.attrs({ draggable: !1 })(F || (F = H`
  max-height: 100%;
  max-width: 100%;
`)), _N = (0, i.default)(l.default.Title).attrs({ className: 'maxWidth' })(G || (G = H`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`));
}), d.register('.....', function (e, f) {
    Object.defineProperty(e.exports, '__esModule', { value: !0 });
    var g = d('.....');
    e.exports.default = function (h) {
        const [i, j] = (0, g.useState)(!1), k = (0, g.useMemo)(() => new IntersectionObserver(([l]) => j(l.isIntersecting)), []);
        return (0, g.useEffect)(() => (k.observe(h.current), () => {
            k.disconnect();
        }), []), (0, g.useEffect)(() => {
            i && k.unobserve(h.current);
        }, [
            i,
            k,
            h
        ]), i;
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....');
    d('.....');
    var _i = () => (0, g.jsx)(h.default.Text, {
        italic: !0,
        children: 'No results found. Try a different search.'
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _t;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....'), s = d('.....');
    var _t = u => {
        const [v, w] = l.useState(''), [x, y] = l.useState(null), z = l.useRef(null), A = l.useCallback(() => {
                x || u.close();
            }, [
                x,
                u.close
            ]);
        return (0, g.jsxs)(i.default, {
            open: u.open,
            onClose: A,
            width: 680,
            afterOpenChange: B => {
                var C;
                B ? null == z || null === (C = z.current) || void 0 === C || C.focus() : w('');
            },
            destroyOnClose: !0,
            children: [
                (0, g.jsxs)(m.CenteredColumn, {
                    children: [
                        (0, g.jsx)(k.default.Title, {
                            level: 1,
                            style: {
                                fontFamily: n.Fonts.FugazOne,
                                marginBottom: 12,
                                marginTop: 5
                            },
                            className: 'allCaps',
                            children: (0, p.CapitalizeFirstLetter)(o.default.device.plural)
                        }),
                        (0, g.jsx)(j.default.Search, {
                            size: 'large',
                            placeholder: `Search for ${ o.default.device.plural }...`,
                            style: { marginBottom: 23 },
                            value: v,
                            onChange: B => {
                                w(B.target.value);
                            },
                            ref: z
                        }),
                        v || (0, s.IsTutorial)() ? null : (0, g.jsxs)(g.Fragment, {
                            children: [
                                (0, g.jsx)(r.default, {
                                    openCollectionName: x,
                                    open: y
                                }),
                                (0, g.jsx)(h.default, {
                                    children: (0, g.jsxs)(k.default.Text, {
                                        italic: !0,
                                        children: [
                                            'All ',
                                            (0, p.CapitalizeFirstLetter)(o.default.device.plural)
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                (0, g.jsx)(q.default, {
                    searchQuery: v,
                    blockKeyboardNavigation: !!x
                })
            ]
        });
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _x;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....'), s = d('.....'), t = d('.....'), u = d('.....'), v = d('.....');
    const w = [
        ...k.default,
        l.default.prop,
        l.default.mapOptions
    ];
    var _x = (0, i.observer)(y => {
        const [z, A] = j.useState(-1), {
                worldOptions: {deviceOptions: B}
            } = (0, n.default)(), [C] = (0, r.useDebouncedValue)(y.searchQuery, 150), D = j.useMemo(() => {
                const E = null == C ? void 0 : C.toLowerCase(), F = B.filter(G => !w.includes(G.id)).filter(G => (0, s.CanAddDeviceType)(G.id, void 0)).filter(G => (0, v.CanAddDeviceForCurrentMapStyle)({ deviceTypeId: G.id })).filter(G => !y.list || y.list.includes(G.id)).filter(G => {
                        var H, I;
                        return !E || (G.name.toLowerCase().includes(E) || (null === (H = null === (I = G.description) || void 0 === I ? void 0 : I.toLowerCase()) || void 0 === H ? void 0 : H.includes(E)));
                    }).sort((G, H) => {
                        const I = G.name.toLowerCase().includes(E), J = H.name.toLowerCase().includes(E);
                        return I && !J ? -1 : !I && J ? 1 : G.name.length < H.name.length ? -1 : G.name.length > H.name.length ? 1 : 0;
                    });
                if ((0, t.IsTutorial)())
                    return F.sort((G, H) => {
                        const I = u.TutorialConsts.topDevices.indexOf(G.id), J = u.TutorialConsts.topDevices.indexOf(H.id);
                        return -1 === I && -1 === J ? 0 : -1 === I ? 1 : -1 === J ? -1 : I - J;
                    });
                if (y.list) {
                    const G = [];
                    return y.list.forEach(H => {
                        const I = F.find(J => J.id === H);
                        I && G.push(I);
                    }), G;
                }
                return F;
            }, [
                B.length,
                C,
                y.list
            ]);
        return (0, m.default)(b(p).Input.Keyboard.KeyCodes.UP, () => {
            y.blockKeyboardNavigation || A(Math.max(0, z - 1));
        }, [
            z,
            y.blockKeyboardNavigation
        ]), (0, m.default)(b(p).Input.Keyboard.KeyCodes.DOWN, () => {
            if (y.blockKeyboardNavigation)
                return;
            const E = D.length - 1;
            A(Math.min(E, z + 1));
        }, [
            D.length,
            z,
            y.blockKeyboardNavigation
        ]), j.useEffect(() => {
            !C || y.blockKeyboardNavigation ? A(-1) : A(0);
        }, [
            C,
            y.blockKeyboardNavigation
        ]), D.length ? (0, g.jsx)(h.default, {
            direction: 'vertical',
            size: 12,
            className: 'maxWidth',
            children: D.map((E, F) => (0, g.jsx)(o.default, {
                option: E,
                focused: F === z
            }, E.id + '-option'))
        }) : (0, g.jsx)(q.default, {});
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....');
    const h = [
        g.default.placedSticker,
        g.default.droppedItem
    ];
    var _i = h;
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _I;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....'), s = d('.....'), t = d('.....'), u = d('.....'), v = d('.....'), w = d('.....'), x = d('.....'), y = d('.....'), z = d('.....');
    let A, B, C, D, E, F, G = H => H;
    const {useToken: H} = h.default;
    var _I = J => {
        const {
                option: {
                    id: K,
                    name: L,
                    description: M,
                    seasonTicketRequired: N
                }
            } = J, O = j.useRef(null), {
                token: {borderRadius: P}
            } = H(), Q = N && !(0, y.OwnsSeasonTicket)(), R = S => {
                Q || (m.default.me.adding.devices.selectedDeviceType = K, m.default.me.adding.mode = n.AddingMode.device, m.default.me.currentAction = o.default.adding, (0, v.IsTutorial)() && (0, w.default)(x.AddScreen.home), (0, u.EmitTutorialEvent)({
                    event: u.TutorialEventName.SELECT_DEVICE_TO_ADD,
                    deviceTypeId: K
                }), S && S());
            };
        return (0, q.default)(b(s).Input.Keyboard.KeyCodes.ENTER, () => {
            J.focused && R();
        }, [
            J.focused,
            R
        ]), j.useEffect(() => {
            var S;
            J.focused && (null === (S = O.current) || void 0 === S || S.scrollIntoView({ block: 'center' }));
        }, [J.focused]), (0, g.jsxs)(_J, {
            ref: O,
            borderRadius: P,
            focused: J.focused,
            onClick: () => {
                R(() => {
                    (0, t.playClickSound)();
                });
            },
            children: [
                (0, g.jsx)(_K, { children: (0, g.jsx)(_L, { src: (0, p.default)('editor/icons/device.png') }) }),
                (0, g.jsxs)(_M, {
                    children: [
                        N ? (0, g.jsx)('div', {
                            style: { marginBottom: 2 },
                            children: (0, g.jsx)(z.SeasonTicketExclusive, {})
                        }) : null,
                        (0, g.jsx)(_N, {
                            level: 5,
                            className: 'allCaps',
                            style: { fontFamily: l.Fonts.FugazOne },
                            children: L
                        }),
                        M ? (0, g.jsx)(_O, { children: M }) : null
                    ]
                })
            ]
        });
    };
    const _J = k.default.div.attrs({ className: 'flex vc' })(A || (A = G`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${ 0 }px;
  border: 2px solid
    ${ 0 };
  padding: 25px;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`), K => K.borderRadius, K => K.focused ? '#ffca28' : 'rgba(255, 255, 255, 0.1)'), _K = (0, k.default)(r.Centered)(B || (B = G`
  height: 50px;
  width: 50px;
  margin-right: 20px;
  flex-shrink: 0;
`)), _L = k.default.img(C || (C = G`
  max-height: 100%;
  max-width: 100%;
`)), _M = k.default.div(D || (D = G``)), _N = (0, k.default)(i.default.Title)(E || (E = G``)), _O = (0, k.default)(i.default.Text)(F || (F = G``));
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....');
    d('.....');
    var _i = () => (0, g.jsx)(h.default.Text, {
        italic: !0,
        children: 'No results found. Try a different search.'
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'CanAddDeviceForCurrentMapStyle', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....');
    const _i = j => {
        const {deviceTypeId: k} = j, l = (0, g.FetchDeviceOptionById)(k);
        return !!l && (!l.supportedMapStyles || l.supportedMapStyles.includes((0, h.GetCurrentMapStyle)()));
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'GetCurrentMapStyle', function () {
        return _h;
    });
    var g = d('.....');
    const _h = () => g.default.session.mapStyle;
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _s;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....');
    let o;
    const p = `${ (0, k.CapitalizeFirstLetter)(l.default.device.plural) }`, q = r => (0, m.default)(`editor/icons/device_collections/${ r }.svg`), r = [
            {
                icon: q('starting'),
                name: `Starting ${ p }`,
                description: `${ p } you might need for every map`,
                devices: [
                    i.default.characterSpawnPad,
                    i.default.trigger,
                    i.default.gimkitLiveQuestion,
                    i.default.itemGranter,
                    i.default.itemSpawner,
                    i.default.sentry,
                    i.default.startingInventory,
                    i.default.wireRepeater,
                    i.default.teleporter
                ]
            },
            {
                icon: q('inventory'),
                name: `Inventory ${ p }`,
                description: `${ p } to manage what items & resources players have`,
                devices: [
                    i.default.vendingMachine,
                    i.default.itemGranter,
                    i.default.startingInventory,
                    i.default.itemSpawner,
                    i.default.inventoryItemManager
                ]
            },
            {
                icon: q('interaction'),
                name: `Interaction ${ p }`,
                description: `${ p } to create rich interactions`,
                devices: [
                    i.default.button,
                    i.default.vendingMachine,
                    i.default.zone,
                    i.default.textExplainer,
                    i.default.dialogue,
                    i.default.textBillboard
                ]
            },
            {
                icon: q('new'),
                name: `New ${ p }`,
                description: `${ p } recently added to ${ n.COMPANY_NAME } Creative`,
                devices: [
                    i.default.popupListItem,
                    i.default.character,
                    i.default.dialogue,
                    i.default.dialogueAction,
                    i.default.damager,
                    i.default.cameraPoint,
                    i.default.playerPositionDetector,
                    i.default.itemImage,
                    i.default.ball,
                    i.default.ballZone,
                    i.default.craftingTable,
                    i.default.craftingRecipe,
                    i.default.damageBoost
                ]
            }
        ];
    var _s = t => (0, g.jsx)(_t, {
        children: r.map(u => (0, g.jsx)(j.default, {
            collection: u,
            isOpen: u.name === t.openCollectionName,
            open: () => t.open(u.name),
            close: () => t.open('')
        }, `device-collection-${ u.name }`))
    });
    const _t = h.default.div.attrs({ className: 'maxWidth' })(o || (o = (u => u)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 12px;
  overflow: hidden;
`));
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _t;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....');
    let p, q, r = s => s;
    const {useToken: s} = j.default;
    var _t = u => {
        const {
                token: {borderRadius: v}
            } = s(), {
                collection: {
                    icon: w,
                    name: x,
                    description: y,
                    devices: z
                }
            } = u;
        return (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsxs)(_u, {
                    borderRadius: v,
                    onClick: u.open,
                    children: [
                        (0, g.jsx)(_v, { src: w }),
                        (0, g.jsx)(k.default.Title, {
                            level: 4,
                            style: {
                                fontFamily: m.Fonts.FugazOne,
                                marginBottom: 2
                            },
                            className: 'allCaps',
                            children: x
                        }),
                        (0, g.jsx)(k.default.Text, { children: (0, g.jsx)(o.default, { children: y }) })
                    ]
                }),
                (0, g.jsx)(i.default, {
                    open: u.isOpen,
                    onClose: u.close,
                    title: x,
                    width: 500,
                    children: (0, g.jsx)(n.default, { list: z })
                })
            ]
        });
    };
    const _u = (0, h.default)(l.CenteredColumn)(p || (p = r`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${ 0 }px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  text-align: center;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  min-height: 196px;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`), v => v.borderRadius), _v = h.default.img(q || (q = r`
  height: 50px;
  margin-bottom: 15px;
  opacity: 0.85;
`));
});