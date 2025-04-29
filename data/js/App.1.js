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
var c = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {},
    d = c.parcelRequire388b;
d.register('8hEt+', function(e, f) {
    var g;
    g = e.exports, Object.defineProperty(g, '__esModule', {
        value: !0,
        configurable: !0
    }), a(e.exports, 'default', function() {
        return _B;
    });
    var h = d('gRbUn'),
        i = d('O0Kav'),
        j = d('u4s09'),
        k = d('oMF5u'),
        l = d('OrEI9'),
        m = d('GxWik'),
        n = d('6jmvl'),
        o = d('K/2xB'),
        p = d('mTbw/'),
        q = d('C+9gN'),
        r = d('4Bmhg'),
        s = d('eLsOE'),
        t = d('t0eqt'),
        u = d('LihP5'),
        v = d('SxihY'),
        w = d('3t9ce'),
        x = d('quE27'),
        y = d('2d+QF'),
        z = d('qIlyp');
    let A;
    var _B = (0, n.observer)(a => {
        const {
            gui: {
                none: {
                    addMenu: {
                        screen: C
                    }
                }
            },
            me: {
                adding: D
            }
        } = (0, o.default)(), [E, F, G] = (0, x.useBoolean)(!0), [H, I] = i.useState(!0);
        (0, s.useInputBlockingUI)();
        const J = i.useMemo(() => C === p.AddScreen.terrain, [C]),
            K = i.useMemo(() => C === p.AddScreen.props, [C]),
            L = i.useMemo(() => C === p.AddScreen.devices, [C]),
            M = () => {
                a.setToHomeScreen(), _P(p.AddScreen.home);
            },
            N = (0, y.default)();
        i.useEffect(() => {
            N || G();
        }, [N]);
        const O = i.useCallback(() => {
                H ? M() : J || K || L || G();
            }, [
                G,
                J,
                K,
                L,
                H,
                M
            ]),
            _P = a => (0, r.default)(a),
            Q = () => {
                _P(p.AddScreen.home);
            };
        return (0, h.jsx)(w.default, {
            open: E,
            onClose: O,
            afterOpenChange: a => {
                a && I(!1), a || M();
            },
            width: 600,
            destroyOnClose: !0,
            children: (0, h.jsx)(_C, {
                children: (0, h.jsxs)(k.default, {
                    close: a.setToHomeScreen,
                    setToTerrain: () => _P(p.AddScreen.terrain),
                    setToProps: () => {
                        _P(p.AddScreen.props);
                    },
                    setToDevices: () => _P(p.AddScreen.devices),
                    setToWires: () => {
                        D.mode = t.AddingMode.wire, (0, u.default)(v.default.adding), (0, z.EmitTutorialEvent)({
                            event: z.TutorialEventName.START_ADDING_WIRE
                        });
                    },
                    children: [
                        (0, h.jsx)(l.default, {
                            open: J,
                            close: Q
                        }),
                        (0, h.jsx)(m.default, {
                            open: K,
                            close: Q
                        }),
                        (0, h.jsx)(q.default, {
                            open: L,
                            close: Q
                        })
                    ]
                })
            })
        });
    });
    const _C = j.default.div.attrs({
        className: 'maxWidth'
    })(A || (A = (a => a)``));
}), d.register('oMF5u', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    });
    var g = d('gRbUn'),
        h = d('22RS1');
    d('O0Kav');
    var i = d('u4s09'),
        j = d('Eh2Wh'),
        k = d('gp8Qp0'),
        l = d('idwWL'),
        m = d('UaUBz0');
    let n, o, p = a => a;
    const q = a => (0, m.default)(`editor/icons/${ a }.png`);
    var _r = a => (0, g.jsxs)(_s, {
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
                        onClick: a.setToTerrain
                    }),
                    (0, g.jsx)(l.default, {
                        name: k.default.prop.plural,
                        description: 'Objects and decorations',
                        icon: q('prop'),
                        onClick: a.setToProps
                    }),
                    (0, g.jsx)(l.default, {
                        name: k.default.device.plural,
                        description: 'Create game mechanics!',
                        icon: q('device'),
                        onClick: a.setToDevices
                    }),
                    (0, g.jsx)(l.default, {
                        name: k.default.wire.plural,
                        description: 'Connect devices together',
                        icon: q('wire'),
                        onClick: a.setToWires
                    })
                ]
            }),
            a.children
        ]
    });
    const _s = i.default.div.attrs({
            className: 'flex-column flex-center maxWidth'
        })(n || (n = p``)),
        _t = i.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = p`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`));
}), d.register('gp8Qp0', function(e, f) {
    a(e.exports, 'default', function() {
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
}), d.register('idwWL', function(e, f) {
    a(e.exports, 'default', function() {
        return _t;
    });
    var g = d('gRbUn'),
        h = d('NmQt6'),
        i = d('22RS1');
    d('O0Kav');
    var j = d('MgONH'),
        k = d('Eh2Wh'),
        l = d('u4s09'),
        m = d('Q6LQJ'),
        n = d('y1oBc');
    let o, p, q, r = a => a;
    const {
        useToken: s
    } = h.default;
    var _t = a => {
        const {
            token: {
                borderRadius: u
            }
        } = s(), {
            name: v,
            description: w,
            icon: x
        } = a;
        return (0, g.jsx)(_u, {
            onClick: () => {
                (0, n.playClickSound)(), a.onClick();
            },
            borderRadius: u,
            children: (0, g.jsxs)(j.CenteredColumn, {
                className: 'maxAll',
                children: [
                    (0, g.jsx)(_v, {
                        children: (0, g.jsx)(_w, {
                            src: x
                        })
                    }),
                    (0, g.jsx)(i.default.Title, {
                        level: 3,
                        style: {
                            marginBottom: -1,
                            fontFamily: k.Fonts.FugazOne,
                            textTransform: 'uppercase'
                        },
                        children: (0, m.CapitalizeFirstLetter)(v)
                    }),
                    (0, g.jsx)(i.default.Text, {
                        children: w
                    })
                ]
            })
        });
    };
    const _u = l.default.div.attrs({
            className: 'maxAll'
        })(o || (o = r`
  cursor: pointer;
  border-radius: ${ 0 }px;
  background: rgba(255, 255, 255, 0.1);
  padding: 40px 0px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`), a => a.borderRadius),
        _v = l.default.div(p || (p = r`
  margin-bottom: 5px;
`)),
        _w = l.default.img(q || (q = r`
  height: 70px;
`));
}), d.register('OrEI9', function(e, f) {
    a(e.exports, 'default', function() {
        return _t;
    });
    var g = d('gRbUn'),
        h = d('VNuyu'),
        i = d('3t9ce'),
        j = d('aevdF'),
        k = d('22RS1'),
        l = d('O0Kav'),
        m = d('MgONH'),
        n = d('Eh2Wh'),
        o = d('NNVFc'),
        p = d('JCtAz'),
        q = d('Q6LQJ'),
        r = d('gp8Qp0'),
        s = d('UCu0V');
    var _t = a => {
        const [u, v] = l.useState(''), w = l.useRef(null), x = (0, s.isPlatformer)();
        return (0, g.jsx)(i.default, {
            open: a.open,
            onClose: a.close,
            width: 500,
            afterOpenChange: a => {
                var y;
                a ? null == w || null === (y = w.current) || void 0 === y || y.focus() : v('');
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
                    x ? null : (0, g.jsxs)(g.Fragment, {
                        children: [
                            (0, g.jsx)(o.default, {}),
                            ' ',
                            (0, g.jsx)(h.default, {})
                        ]
                    }),
                    (0, g.jsx)(j.default.Search, {
                        size: 'large',
                        placeholder: `Search for ${ r.default.terrain.plural }...`,
                        style: {
                            marginBottom: 23
                        },
                        value: u,
                        onChange: a => {
                            v(a.target.value);
                        },
                        ref: w
                    }),
                    (0, g.jsx)(p.default, {
                        searchQuery: u
                    })
                ]
            })
        });
    };
}), d.register('NNVFc', function(e, f) {
    a(e.exports, 'default', function() {
        return _o;
    });
    var g = d('gRbUn'),
        h = d('P1KtI'),
        i = d('22RS1'),
        j = d('NU2gN');
    d('O0Kav');
    var k = d('gp8Qp0'),
        l = d('K/2xB'),
        m = d('MgONH'),
        n = d('UCu0V');
    var _o = (0, j.observer)(() => {
        const {
            me: {
                adding: {
                    terrain: p
                }
            }
        } = (0, l.default)(), q = p.buildTerrainAsWall, r = q => {
            (0, n.isPlatformer)() || (p.buildTerrainAsWall = q);
        };
        return (0, g.jsxs)(m.Centered, {
            children: [
                (0, g.jsxs)(i.default.Text, {
                    style: {
                        marginRight: 10
                    },
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
}), d.register('JCtAz', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('gRbUn'),
        h = d('E2AMI26'),
        i = d('O0Kav'),
        j = d('G1RoA0'),
        k = d('J8L14'),
        l = d('K/2xB'),
        m = d('bsEfc'),
        n = d('ddhGF'),
        o = d('0D1Z11'),
        p = d('TCaC20'),
        q = d('yhnQh'),
        r = d('1xqJo0');
    var _s = a => {
        const {
            worldOptions: {
                terrainOptions: t
            }
        } = (0, l.default)(), [u, v] = i.useState(-1), [w] = (0, j.useDebouncedValue)(a.searchQuery, 150), x = i.useMemo(() => {
            var y;
            const z = null === (y = null == w ? void 0 : w.trim()) || void 0 === y ? void 0 : y.toLowerCase();
            if (!z && !(0, q.IsTutorial)())
                return t.filter(y => (0, p.CanAddTerrain)(y.id));
            const A = t.filter(y => y.name.toLowerCase().includes(z) && (0, p.CanAddTerrain)(y.id));
            return (0, q.IsTutorial)() ? A.sort((y, z) => {
                const B = r.TutorialConsts.topTerrain.indexOf(y.id),
                    C = r.TutorialConsts.topTerrain.indexOf(z.id);
                return -1 === B && -1 === C ? 0 : -1 === B ? 1 : -1 === C ? -1 : B - C;
            }) : A;
        }, [
            t.length,
            w
        ]);
        return (0, k.default)(b(n).Input.Keyboard.KeyCodes.UP, () => {
            v(Math.max(0, u - 1));
        }, [u]), (0, k.default)(b(n).Input.Keyboard.KeyCodes.DOWN, () => {
            const y = x.length - 1;
            v(Math.min(y, u + 1));
        }, [
            x.length,
            u
        ]), i.useEffect(() => {
            v(w ? 0 : -1);
        }, [w]), x.length ? (0, g.jsx)(h.default, {
            direction: 'vertical',
            size: 12,
            className: 'maxWidth',
            children: x.map((a, b) => (0, g.jsx)(m.default, {
                option: a,
                focused: u === b
            }, a.id))
        }) : (0, g.jsx)(o.default, {});
    };
}), d.register('G1RoA0', function(e, f) {
    a(e.exports, 'useDebouncedValue', function() {
        return _l;
    });
    var g = d('O0Kav'),
        h = d('odbD70'),
        i = d('lKjHC'),
        j = d('kyZNW'),
        k = {
            initializeWithNull: !1
        },
        _l = function(m, n, o) {
            void 0 === o && (o = {});
            var p = Object.assign({}, k, o).initializeWithNull,
                q = (0, g.useState)(p ? null : m),
                r = q[0],
                s = q[1],
                t = (0, h.useDebounce)(s, n);
            return (0, i.useDidMount)(function() {
                p && t(m);
            }), (0, j.useDidUpdate)(function() {
                t(m);
            }, [m]), [
                r,
                s
            ];
        };
}), d.register('odbD70', function(e, f) {
    a(e.exports, 'useDebounce', function() {
        return _i;
    });
    var g = d('/hvd+0'),
        h = d('O0Kav');

    function _i(j, k, l) {
        var m = (0, h.useCallback)(function(n) {
                return b(g)(n, k, l);
            }, [
                k,
                l
            ]),
            n = (0, h.useRef)(m(j));
        return (0, h.useEffect)(function() {
            n.current = m(j);
        }, [
            j,
            m
        ]), n.current;
    }
}), d.register('/hvd+0', function(e, f) {
    var g = /^\s+|\s+$/g,
        h = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        j = /^0o[0-7]+$/i,
        k = parseInt,
        l = 'object' == typeof c && c && c.Object === Object && c,
        m = 'object' == typeof self && self && self.Object === Object && self,
        n = l || m || Function('return this')(),
        o = Object.prototype.toString,
        p = Math.max,
        q = Math.min,
        r = function() {
            return n.Date.now();
        };

    function s(t) {
        var u = typeof t;
        return !!t && ('object' == u || 'function' == u);
    }

    function t(u) {
        if ('number' == typeof u)
            return u;
        if (function(v) {
                return 'symbol' == typeof v || function(w) {
                    return !!w && 'object' == typeof w;
                }(v) && '[object Symbol]' == o.call(v);
            }(u))
            return NaN;
        if (s(u)) {
            var v = 'function' == typeof u.valueOf ? u.valueOf() : u;
            u = s(v) ? v + '' : v;
        }
        if ('string' != typeof u)
            return 0 === u ? u : +u;
        u = u.replace(g, '');
        var v = i.test(u);
        return v || j.test(u) ? k(u.slice(2), v ? 2 : 8) : h.test(u) ? NaN : +u;
    }
    e.exports = function(u, v, w) {
        var x, y, z, A, B, C, D = 0,
            E = !1,
            F = !1,
            G = !0;
        if ('function' != typeof u)
            throw new TypeError('Expected a function');

        function H(I) {
            var J = x,
                K = y;
            return x = y = void 0, D = I, A = u.apply(K, J);
        }

        function I(J) {
            return D = J, B = setTimeout(_K, v), E ? H(J) : A;
        }

        function J(K) {
            var L = K - C;
            return void 0 === C || L >= v || L < 0 || F && K - D >= z;
        }

        function _K() {
            var L = r();
            if (J(L))
                return _L(L);
            B = setTimeout(_K, function(M) {
                var N = v - (M - C);
                return F ? q(N, z - (M - D)) : N;
            }(L));
        }

        function _L(M) {
            return B = void 0, G && x ? H(M) : (x = y = void 0, A);
        }

        function M() {
            var N = r(),
                O = J(N);
            if (x = arguments, y = this, C = N, O) {
                if (void 0 === B)
                    return I(C);
                if (F)
                    return B = setTimeout(_K, v), H(C);
            }
            return void 0 === B && (B = setTimeout(_K, v)), A;
        }
        return v = t(v) || 0, s(w) && (E = !!w.leading, z = (F = 'maxWait' in w) ? p(t(w.maxWait) || 0, v) : z, G = 'trailing' in w ? !!w.trailing : G), M.cancel = function() {
            void 0 !== B && clearTimeout(B), D = 0, x = C = y = B = void 0;
        }, M.flush = function() {
            return void 0 === B ? A : _L(r());
        }, M;
    };
}), d.register('kyZNW', function(e, f) {
    a(e.exports, 'useDidUpdate', function() {
        return _h;
    });
    var g = d('O0Kav');

    function _h(i, j) {
        var k = (0, g.useRef)(!1);
        void 0 === j || Array.isArray(j) ? Array.isArray(j) && 0 === j.length && console.warn('Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.') : j = [j], (0, g.useEffect)(function() {
            k.current ? i() : k.current = !0;
        }, j);
    }
}), d.register('bsEfc', function(e, f) {
    a(e.exports, 'default', function() {
        return _H;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('u4s09'),
        j = d('MgONH'),
        k = d('NmQt6'),
        l = d('22RS1'),
        m = d('Eh2Wh'),
        n = d('fI6of'),
        o = d('t0eqt'),
        p = d('LihP5'),
        q = d('SxihY'),
        r = d('J8L14'),
        s = d('ddhGF'),
        t = d('y1oBc'),
        u = d('qIlyp'),
        v = d('yhnQh'),
        w = d('4Bmhg'),
        x = d('mTbw/'),
        y = d('B/GC10'),
        z = d('yQDvE');
    let A, B, C, D, E, F = a => a;
    const {
        useToken: G
    } = k.default;
    var _H = a => {
        const {
            id: I,
            name: J,
            previewUrl: K,
            seasonTicketRequired: L
        } = a.option, M = h.useRef(null), {
            token: {
                borderRadius: N
            }
        } = G(), O = L && !(0, y.OwnsSeasonTicket)(), P = a => {
            O || (n.default.me.adding.terrain.currentlySelectedTerrain = I, n.default.me.adding.mode = o.AddingMode.terrain, (0, p.default)(q.default.adding), (0, v.IsTutorial)() && (0, w.default)(x.AddScreen.home), (0, u.EmitTutorialEvent)({
                event: u.TutorialEventName.SELECT_TERRAIN_TO_ADD,
                terrainId: I
            }), a && a());
        };
        return (0, r.default)(b(s).Input.Keyboard.KeyCodes.ENTER, () => {
            a.focused && P();
        }, [
            a.focused,
            P
        ]), h.useEffect(() => {
            var Q;
            a.focused && (null === (Q = M.current) || void 0 === Q || Q.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            }));
        }, [a.focused]), (0, g.jsxs)(_I, {
            borderRadius: N,
            focused: a.focused,
            onClick: () => {
                P(() => {
                    (0, t.playClickSound)();
                });
            },
            ref: M,
            children: [
                (0, g.jsx)(_K, {
                    src: K
                }),
                (0, g.jsxs)(_J, {
                    children: [
                        (0, g.jsx)(_L, {
                            level: 5,
                            className: 'allCaps',
                            style: {
                                fontFamily: m.Fonts.FugazOne
                            },
                            children: J
                        }),
                        L ? (0, g.jsx)('div', {
                            style: {
                                marginTop: 2
                            },
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
`), a => a.borderRadius, a => a.focused ? '#ffca28' : 'rgba(255, 255, 255, 0.1)'),
        _J = (i.default.div(B || (B = F`
  display: flex;
  align-items: center;
`)), i.default.div(C || (C = F`
  display: flex;
  flex-direction: column;
`))),
        _K = i.default.img(D || (D = F`
  height: 54px;
  border-radius: 3px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  margin-right: 15px;
`)),
        _L = (0, i.default)(l.default.Title)(E || (E = F`
  margin-bottom: 0 !important;
`));
}), d.register('4Bmhg', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('qIlyp'),
        h = d('fI6of'),
        i = d('mTbw/');
    var _j = a => {
        a !== i.AddScreen.home && (0, g.EmitTutorialEvent)({
            event: g.TutorialEventName.OPEN_ADD_SUBMENU,
            menu: a
        }), h.default.gui.none.addMenu.screen = a;
    };
}), d.register('B/GC10', function(e, f) {
    a(e.exports, 'OwnsSeasonTicket', function() {
        return _h;
    });
    var g = d('quE27');
    const _h = () => {
        var i, j, k;
        return null !== (k = null === (i = (0, g.getUser)()) || void 0 === i || null === (j = i.seasonTicket) || void 0 === j ? void 0 : j.active) && void 0 !== k && k;
    };
}), d.register('yQDvE', function(e, f) {
    a(e.exports, 'SeasonTicketExclusive', function() {
        return _l;
    });
    var g = d('gRbUn'),
        h = d('u4s09'),
        i = d('hupyL1'),
        j = d('Eh2Wh');
    let k;
    const _l = () => (0, g.jsxs)(_m, {
            children: [
                i.SeasonTicketName.name,
                ' Exclusive'
            ]
        }),
        _m = h.default.div(k || (k = (a => a)`
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
}), d.register('0D1Z11', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('gRbUn'),
        h = d('22RS1');
    d('O0Kav');
    var _i = () => (0, g.jsx)(h.default.Text, {
        italic: !0,
        children: 'No results found. Try a different search.'
    });
}), d.register('TCaC20', function(e, f) {
    a(e.exports, 'CanAddTerrain', function() {
        return _i;
    });
    var g = d('fI6of'),
        h = d('PlfjJ');
    const _i = a => {
        var j;
        const k = g.default.worldOptions.terrainOptions.find(j => j.id === a);
        if (!k)
            return !1;
        if (null === (j = k.blockedMapStyles) || void 0 === j ? void 0 : j.length) {
            const l = g.default.session.mapStyle;
            if (k.blockedMapStyles.includes(l))
                return !1;
        }
        const l = k.minimumRoleLevel,
            m = k.maximumRoleLevel;
        return (0, h.IsRoleLevelBetween)(l, m);
    };
}), d.register('GxWik', function(e, f) {
    a(e.exports, 'default', function() {
        return _q;
    });
    var g = d('gRbUn'),
        h = d('3t9ce'),
        i = d('aevdF'),
        j = d('22RS1'),
        k = d('O0Kav'),
        l = d('MgONH'),
        m = d('Eh2Wh'),
        n = d('fvztQ'),
        o = d('Q6LQJ'),
        p = d('gp8Qp0');
    var _q = a => {
        const [r, s] = k.useState(''), t = k.useRef(null);
        return (0, g.jsx)(h.default, {
            open: a.open,
            onClose: a.close,
            width: 550,
            afterOpenChange: a => {
                var u;
                a ? null == t || null === (u = t.current) || void 0 === u || u.focus() : s('');
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
                        style: {
                            marginBottom: 23
                        },
                        value: r,
                        onChange: a => {
                            s(a.target.value);
                        },
                        ref: t
                    }),
                    (0, g.jsx)(n.default, {
                        searchQuery: r
                    })
                ]
            })
        });
    };
}), d.register('fvztQ', function(e, f) {
    a(e.exports, 'default', function() {
        return _w;
    });
    var g = d('gRbUn'),
        h = d('6jmvl'),
        i = d('O0Kav'),
        j = d('G1RoA0'),
        k = d('lKjHC'),
        l = d('ywRRc'),
        m = d('K/2xB'),
        n = d('0v55W'),
        o = d('sfdLF'),
        p = d('u4s09'),
        q = d('J8L14'),
        r = d('0D1Z10'),
        s = d('yhnQh'),
        t = d('1xqJo0'),
        u = d('PlfjJ');
    let v;
    var _w = (0, h.observer)(a => {
        const {
            worldOptions: x
        } = (0, m.default)(), [y, z] = i.useState(-1), [A] = (0, j.useDebouncedValue)(a.searchQuery, 200), B = i.useMemo(() => {
            var C, D;
            const E = x.propsOptions.filter(a => (0, u.IsRoleLevelBetween)(a.minimumRoleLevel)),
                F = null === (C = null === (D = a.searchQuery) || void 0 === D ? void 0 : D.trim()) || void 0 === C ? void 0 : C.toLowerCase();
            if (!F && !(0, s.IsTutorial)())
                return E;
            const G = E.filter(a => a.name.toLowerCase().includes(F));
            return (0, s.IsTutorial)() ? G.sort((a, x) => {
                const H = t.TutorialConsts.topProps.indexOf(a.id),
                    I = t.TutorialConsts.topProps.indexOf(x.id);
                return -1 === H && -1 === I ? 0 : -1 === H ? 1 : -1 === I ? -1 : H - I;
            }) : G;
        }, [
            x.propsOptions.length,
            A
        ]);
        (0, k.useDidMount)(() => {
            x.requestedAllProps || (x.requestedAllProps = !0, (0, n.default)(l.default.requestAllProps));
        });
        const C = i.useCallback(a => {
            const D = Math.max(0, Math.min(B.length - 1, y + a));
            z(D);
        }, [
            B.length,
            y
        ]);
        return (0, q.default)(Phaser.Input.Keyboard.KeyCodes.UP, () => {
            C(-2);
        }, [C]), (0, q.default)(Phaser.Input.Keyboard.KeyCodes.DOWN, () => {
            C(2);
        }, [C]), (0, q.default)(Phaser.Input.Keyboard.KeyCodes.LEFT, () => {
            C(-1);
        }, [C]), (0, q.default)(Phaser.Input.Keyboard.KeyCodes.RIGHT, () => {
            C(1);
        }, [C]), i.useEffect(() => {
            z(A ? 0 : -1);
        }, [A]), x.hasAllProps ? B.length ? (0, g.jsx)(_x, {
            children: B.map((a, x) => (0, g.jsx)(o.default, {
                focused: x === y,
                option: a
            }, a.id + '-option'))
        }) : (0, g.jsx)(r.default, {}) : null;
    });
    const _x = p.default.div.attrs({
        className: 'maxWidth'
    })(v || (v = (a => a)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 10px;
  overflow: hidden;
`));
}), d.register('sfdLF', function(e, f) {
    a(e.exports, 'default', function() {
        return _J;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('u4s09'),
        j = d('MgONH'),
        k = d('NmQt6'),
        l = d('22RS1'),
        m = d('Eh2Wh'),
        n = d('UaUBz0'),
        o = (k = d('NmQt6'), l = d('22RS1'), d('J8L14')),
        p = d('ddhGF'),
        q = d('2M24D'),
        r = d('fI6of'),
        s = d('OFuf70'),
        t = d('LihP5'),
        u = d('SxihY'),
        v = d('t0eqt'),
        w = d('y1oBc'),
        x = d('qIlyp'),
        y = d('yhnQh'),
        z = d('4Bmhg'),
        A = d('mTbw/'),
        B = d('B/GC10'),
        C = d('yQDvE');
    let D, E, F, G, H = a => a;
    const {
        useToken: I
    } = k.default;
    var _J = a => {
        const {
            id: K,
            name: L,
            imageUrl: M,
            seasonTicketRequired: N
        } = a.option, O = h.useRef(null), P = b(q)(O), {
            token: {
                borderRadius: Q
            }
        } = I(), R = N && !(0, B.OwnsSeasonTicket)(), S = a => {
            R || (r.default.me.adding.devices.selectedDeviceType = s.default.prop, r.default.me.adding.devices.currentlySelectedProp = K, r.default.me.adding.mode = v.AddingMode.device, (0, t.default)(u.default.adding), (0, y.IsTutorial)() && (0, z.default)(A.AddScreen.home), (0, x.EmitTutorialEvent)({
                event: x.TutorialEventName.SELECT_PROP_TO_ADD,
                propId: K
            }), a && a());
        };
        return (0, o.default)(b(p).Input.Keyboard.KeyCodes.ENTER, () => {
            a.focused && S();
        }, [
            a.focused,
            S
        ]), h.useEffect(() => {
            var T;
            a.focused && (null === (T = O.current) || void 0 === T || T.scrollIntoView({
                block: 'center'
            }));
        }, [a.focused]), (0, g.jsx)(_K, {
            ref: O,
            onClick: () => {
                S(() => {
                    (0, w.playClickSound)();
                });
            },
            focused: a.focused,
            borderRadius: Q,
            children: P ? (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)(_L, {
                        children: (0, g.jsx)(_M, {
                            src: (0, n.default)(M)
                        })
                    }),
                    (0, g.jsx)(_N, {
                        level: 5,
                        className: 'allCaps',
                        style: {
                            fontFamily: m.Fonts.FugazOne
                        },
                        children: L
                    }),
                    N ? (0, g.jsx)(C.SeasonTicketExclusive, {}) : null
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
`), a => a.borderRadius, a => a.focused ? '#ffca28' : 'rgba(255, 255, 255, 0.1)'),
        _L = (0, i.default)(j.Centered)(E || (E = H`
  width: 120px;
  height: 120px;
  padding: 10px;
`)),
        _M = i.default.img.attrs({
            draggable: !1
        })(F || (F = H`
  max-height: 100%;
  max-width: 100%;
`)),
        _N = (0, i.default)(l.default.Title).attrs({
            className: 'maxWidth'
        })(G || (G = H`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`));
}), d.register('2M24D', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    });
    var g = d('O0Kav');
    e.exports.default = function(h) {
        const [i, j] = (0, g.useState)(!1), k = (0, g.useMemo)(() => new IntersectionObserver(([l]) => j(l.isIntersecting)), []);
        return (0, g.useEffect)(() => (k.observe(l.current), () => {
            k.disconnect();
        }), []), (0, g.useEffect)(() => {
            i && k.unobserve(l.current);
        }, [
            i,
            k,
            l
        ]), i;
    };
}), d.register('0D1Z10', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('gRbUn'),
        h = d('22RS1');
    d('O0Kav');
    var _i = () => (0, g.jsx)(h.default.Text, {
        italic: !0,
        children: 'No results found. Try a different search.'
    });
}), d.register('C+9gN', function(e, f) {
    a(e.exports, 'default', function() {
        return _t;
    });
    var g = d('gRbUn'),
        h = d('VNuyu'),
        i = d('3t9ce'),
        j = d('aevdF'),
        k = d('22RS1'),
        l = d('O0Kav'),
        m = d('MgONH'),
        n = d('Eh2Wh'),
        o = d('gp8Qp0'),
        p = d('Q6LQJ'),
        q = d('ICMZt'),
        r = d('nKFS+'),
        s = d('yhnQh');
    var _t = a => {
        const [u, v] = l.useState(''), [w, x] = l.useState(null), y = l.useRef(null), z = l.useCallback(() => {
            w || a.close();
        }, [
            w,
            a.close
        ]);
        return (0, g.jsxs)(i.default, {
            open: a.open,
            onClose: z,
            width: 680,
            afterOpenChange: a => {
                var A;
                a ? null == y || null === (A = y.current) || void 0 === A || A.focus() : v('');
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
                            style: {
                                marginBottom: 23
                            },
                            value: u,
                            onChange: a => {
                                v(a.target.value);
                            },
                            ref: y
                        }),
                        u || (0, s.IsTutorial)() ? null : (0, g.jsxs)(g.Fragment, {
                            children: [
                                (0, g.jsx)(r.default, {
                                    openCollectionName: w,
                                    open: x
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
                    searchQuery: u,
                    blockKeyboardNavigation: !!w
                })
            ]
        });
    };
}), d.register('ICMZt', function(e, f) {
    a(e.exports, 'default', function() {
        return _x;
    });
    var g = d('gRbUn'),
        h = d('E2AMI26'),
        i = d('NU2gN'),
        j = d('O0Kav'),
        k = d('1wWco'),
        l = d('OFuf70'),
        m = d('J8L14'),
        n = d('K/2xB'),
        o = d('cNdSP'),
        p = d('ddhGF'),
        q = d('0D1Z1'),
        r = d('G1RoA0'),
        s = d('fQ/Z/'),
        t = d('yhnQh'),
        u = d('1xqJo0'),
        v = d('cv4Ym');
    const w = [
        ...k.default,
        l.default.prop,
        l.default.mapOptions
    ];
    var _x = (0, i.observer)(a => {
        const [y, z] = j.useState(-1), {
            worldOptions: {
                deviceOptions: A
            }
        } = (0, n.default)(), [B] = (0, r.useDebouncedValue)(a.searchQuery, 150), C = j.useMemo(() => {
            const D = null == B ? void 0 : B.toLowerCase(),
                E = A.filter(a => !w.includes(a.id)).filter(a => (0, s.CanAddDeviceType)(a.id, void 0)).filter(a => (0, v.CanAddDeviceForCurrentMapStyle)({
                    deviceTypeId: a.id
                })).filter(D => !a.list || a.list.includes(D.id)).filter(a => {
                    var F, G;
                    return !D || (a.name.toLowerCase().includes(D) || (null === (F = null === (G = a.description) || void 0 === G ? void 0 : G.toLowerCase()) || void 0 === F ? void 0 : F.includes(D)));
                }).sort((a, E) => {
                    const F = a.name.toLowerCase().includes(D),
                        G = E.name.toLowerCase().includes(D);
                    return F && !G ? -1 : !F && G ? 1 : a.name.length < E.name.length ? -1 : a.name.length > E.name.length ? 1 : 0;
                });
            if ((0, t.IsTutorial)())
                return E.sort((a, D) => {
                    const F = u.TutorialConsts.topDevices.indexOf(a.id),
                        G = u.TutorialConsts.topDevices.indexOf(D.id);
                    return -1 === F && -1 === G ? 0 : -1 === F ? 1 : -1 === G ? -1 : F - G;
                });
            if (a.list) {
                const F = [];
                return a.list.forEach(a => {
                    const G = E.find(F => F.id === a);
                    G && F.push(G);
                }), F;
            }
            return E;
        }, [
            A.length,
            B,
            a.list
        ]);
        return (0, m.default)(b(p).Input.Keyboard.KeyCodes.UP, () => {
            a.blockKeyboardNavigation || z(Math.max(0, y - 1));
        }, [
            y,
            a.blockKeyboardNavigation
        ]), (0, m.default)(b(p).Input.Keyboard.KeyCodes.DOWN, () => {
            if (a.blockKeyboardNavigation)
                return;
            const D = C.length - 1;
            z(Math.min(D, y + 1));
        }, [
            C.length,
            y,
            a.blockKeyboardNavigation
        ]), j.useEffect(() => {
            !B || a.blockKeyboardNavigation ? z(-1) : z(0);
        }, [
            B,
            a.blockKeyboardNavigation
        ]), C.length ? (0, g.jsx)(h.default, {
            direction: 'vertical',
            size: 12,
            className: 'maxWidth',
            children: C.map((a, b) => (0, g.jsx)(o.default, {
                option: a,
                focused: b === y
            }, a.id + '-option'))
        }) : (0, g.jsx)(q.default, {});
    });
}), d.register('1wWco', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('OFuf70');
    const h = [
        g.default.placedSticker,
        g.default.droppedItem
    ];
    var _i = h;
}), d.register('cNdSP', function(e, f) {
    a(e.exports, 'default', function() {
        return _I;
    });
    var g = d('gRbUn'),
        h = d('NmQt6'),
        i = d('22RS1'),
        j = d('O0Kav'),
        k = d('u4s09'),
        l = d('Eh2Wh'),
        m = d('fI6of'),
        n = d('t0eqt'),
        o = d('SxihY'),
        p = d('UaUBz0'),
        q = d('J8L14'),
        r = d('MgONH'),
        s = d('ddhGF'),
        t = d('y1oBc'),
        u = d('qIlyp'),
        v = d('yhnQh'),
        w = d('4Bmhg'),
        x = d('mTbw/'),
        y = d('B/GC10'),
        z = d('yQDvE');
    let A, B, C, D, E, F, G = a => a;
    const {
        useToken: H
    } = h.default;
    var _I = a => {
        const {
            option: {
                id: J,
                name: K,
                description: L,
                seasonTicketRequired: M
            }
        } = a, N = j.useRef(null), {
            token: {
                borderRadius: O
            }
        } = H(), P = M && !(0, y.OwnsSeasonTicket)(), Q = a => {
            P || (m.default.me.adding.devices.selectedDeviceType = J, m.default.me.adding.mode = n.AddingMode.device, m.default.me.currentAction = o.default.adding, (0, v.IsTutorial)() && (0, w.default)(x.AddScreen.home), (0, u.EmitTutorialEvent)({
                event: u.TutorialEventName.SELECT_DEVICE_TO_ADD,
                deviceTypeId: J
            }), a && a());
        };
        return (0, q.default)(b(s).Input.Keyboard.KeyCodes.ENTER, () => {
            a.focused && Q();
        }, [
            a.focused,
            Q
        ]), j.useEffect(() => {
            var R;
            a.focused && (null === (R = N.current) || void 0 === R || R.scrollIntoView({
                block: 'center'
            }));
        }, [a.focused]), (0, g.jsxs)(_J, {
            ref: N,
            borderRadius: O,
            focused: a.focused,
            onClick: () => {
                Q(() => {
                    (0, t.playClickSound)();
                });
            },
            children: [
                (0, g.jsx)(_K, {
                    children: (0, g.jsx)(_L, {
                        src: (0, p.default)('editor/icons/device.png')
                    })
                }),
                (0, g.jsxs)(_M, {
                    children: [
                        M ? (0, g.jsx)('div', {
                            style: {
                                marginBottom: 2
                            },
                            children: (0, g.jsx)(z.SeasonTicketExclusive, {})
                        }) : null,
                        (0, g.jsx)(_N, {
                            level: 5,
                            className: 'allCaps',
                            style: {
                                fontFamily: l.Fonts.FugazOne
                            },
                            children: K
                        }),
                        L ? (0, g.jsx)(_O, {
                            children: L
                        }) : null
                    ]
                })
            ]
        });
    };
    const _J = k.default.div.attrs({
            className: 'flex vc'
        })(A || (A = G`
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
`), a => a.borderRadius, a => a.focused ? '#ffca28' : 'rgba(255, 255, 255, 0.1)'),
        _K = (0, k.default)(r.Centered)(B || (B = G`
  height: 50px;
  width: 50px;
  margin-right: 20px;
  flex-shrink: 0;
`)),
        _L = k.default.img(C || (C = G`
  max-height: 100%;
  max-width: 100%;
`)),
        _M = k.default.div(D || (D = G``)),
        _N = (0, k.default)(i.default.Title)(E || (E = G``)),
        _O = (0, k.default)(i.default.Text)(F || (F = G``));
}), d.register('0D1Z1', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('gRbUn'),
        h = d('22RS1');
    d('O0Kav');
    var _i = () => (0, g.jsx)(h.default.Text, {
        italic: !0,
        children: 'No results found. Try a different search.'
    });
}), d.register('cv4Ym', function(e, f) {
    a(e.exports, 'CanAddDeviceForCurrentMapStyle', function() {
        return _i;
    });
    var g = d('5P0VZ'),
        h = d('dcTme');
    const _i = a => {
        const {
            deviceTypeId: j
        } = a, k = (0, g.FetchDeviceOptionById)(j);
        return !!k && (!k.supportedMapStyles || k.supportedMapStyles.includes((0, h.GetCurrentMapStyle)()));
    };
}), d.register('dcTme', function(e, f) {
    a(e.exports, 'GetCurrentMapStyle', function() {
        return _h;
    });
    var g = d('fI6of');
    const _h = () => g.default.session.mapStyle;
}), d.register('nKFS+', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('gRbUn');
    d('O0Kav');
    var h = d('u4s09'),
        i = d('OFuf70'),
        j = d('pqZEF'),
        k = d('Q6LQJ'),
        l = d('gp8Qp0'),
        m = d('UaUBz0'),
        n = d('jw1ib');
    let o;
    const p = `${ (0, k.CapitalizeFirstLetter)(l.default.device.plural) }`,
        q = a => (0, m.default)(`editor/icons/device_collections/${ a }.svg`),
        r = [{
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
    var _s = a => (0, g.jsx)(_t, {
        children: r.map(e => (0, g.jsx)(j.default, {
            collection: e,
            isOpen: e.name === a.openCollectionName,
            open: () => a.open(e.name),
            close: () => a.open('')
        }, `device-collection-${ e.name }`))
    });
    const _t = h.default.div.attrs({
        className: 'maxWidth'
    })(o || (o = (a => a)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 12px;
  overflow: hidden;
`));
}), d.register('pqZEF', function(e, f) {
    a(e.exports, 'default', function() {
        return _t;
    });
    var g = d('gRbUn');
    d('O0Kav');
    var h = d('u4s09'),
        i = d('3t9ce'),
        j = d('NmQt6'),
        k = d('22RS1'),
        l = d('MgONH'),
        m = d('Eh2Wh'),
        n = d('ICMZt'),
        o = d('V704d');
    let p, q, r = a => a;
    const {
        useToken: s
    } = j.default;
    var _t = a => {
        const {
            token: {
                borderRadius: u
            }
        } = s(), {
            collection: {
                icon: v,
                name: w,
                description: x,
                devices: y
            }
        } = a;
        return (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsxs)(_u, {
                    borderRadius: u,
                    onClick: a.open,
                    children: [
                        (0, g.jsx)(_v, {
                            src: v
                        }),
                        (0, g.jsx)(k.default.Title, {
                            level: 4,
                            style: {
                                fontFamily: m.Fonts.FugazOne,
                                marginBottom: 2
                            },
                            className: 'allCaps',
                            children: w
                        }),
                        (0, g.jsx)(k.default.Text, {
                            children: (0, g.jsx)(o.default, {
                                children: x
                            })
                        })
                    ]
                }),
                (0, g.jsx)(i.default, {
                    open: a.isOpen,
                    onClose: a.close,
                    title: w,
                    width: 500,
                    children: (0, g.jsx)(n.default, {
                        list: y
                    })
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
`), a => a.borderRadius),
        _v = h.default.img(q || (q = r`
  height: 50px;
  margin-bottom: 15px;
  opacity: 0.85;
`));
});