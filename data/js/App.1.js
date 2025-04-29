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
var a = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {},
    b = a.parcelRequire388b;
b.register('pGTK3', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), _n(c.exports, 'default', function() {
        return _z;
    });
    var f = b('0hzx+'),
        g = b('LEQ5w'),
        h = b('Axq+p'),
        i = b('f0CCG'),
        j = b('qMr7z'),
        k = b('vw4kb'),
        l = b('2x11J'),
        m = b('bHGrl'),
        n = b('ejMkR'),
        o = b('iyVnO'),
        p = b('dGfO9'),
        q = b('le6+G'),
        r = b('rWzgW'),
        s = b('mQCZt'),
        t = b('11nl3'),
        u = b('sgToH'),
        v = b('PMl60'),
        w = b('VBu6r'),
        x = b('L1523');
    let y;
    var _z = (0, l.observer)(_n => {
        const {
            gui: {
                none: {
                    addMenu: {
                        screen: A
                    }
                }
            },
            me: {
                adding: B
            }
        } = (0, m.default)(), [C, D, E] = (0, v.useBoolean)(!0), [F, G] = g.useState(!0);
        (0, q.useInputBlockingUI)();
        const H = g.useMemo(() => A === n.AddScreen.terrain, [A]),
            I = g.useMemo(() => A === n.AddScreen.props, [A]),
            J = g.useMemo(() => A === n.AddScreen.devices, [A]),
            K = () => {
                _n.setToHomeScreen(), _N(n.AddScreen.home);
            },
            L = (0, w.default)();
        g.useEffect(() => {
            L || E();
        }, [L]);
        const M = g.useCallback(() => {
                F ? K() : H || I || J || E();
            }, [
                E,
                H,
                I,
                J,
                F,
                K
            ]),
            _N = _n => (0, p.default)(_n),
            O = () => {
                _N(n.AddScreen.home);
            };
        return (0, f.jsx)(u.default, {
            open: C,
            onClose: M,
            afterOpenChange: _n => {
                _n && G(!1), _n || K();
            },
            width: 600,
            destroyOnClose: !0,
            children: (0, f.jsx)(_A, {
                children: (0, f.jsxs)(i.default, {
                    close: _n.setToHomeScreen,
                    setToTerrain: () => _N(n.AddScreen.terrain),
                    setToProps: () => {
                        _N(n.AddScreen.props);
                    },
                    setToDevices: () => _N(n.AddScreen.devices),
                    setToWires: () => {
                        B.mode = r.AddingMode.wire, (0, s.default)(t.default.adding), (0, x.EmitTutorialEvent)({
                            event: x.TutorialEventName.START_ADDING_WIRE
                        });
                    },
                    children: [
                        (0, f.jsx)(j.default, {
                            open: H,
                            close: O
                        }),
                        (0, f.jsx)(k.default, {
                            open: I,
                            close: O
                        }),
                        (0, f.jsx)(o.default, {
                            open: J,
                            close: O
                        })
                    ]
                })
            })
        });
    });
    const _A = h.default.div.attrs({
        className: 'maxWidth'
    })(y || (y = (_n => _n)``));
}), b.register('f0CCG', function(c, d) {
    _n(c.exports, 'default', function() {
        return _p;
    });
    var e = b('0hzx+'),
        f = b('j2ADs');
    b('LEQ5w');
    var g = b('Axq+p'),
        h = b('b5kvC'),
        i = b('bzU3s'),
        j = b('ttvyb'),
        k = b('2Xvuf');
    let l, m, n = _n => _n;
    const o = _n => (0, k.default)(`editor/icons/${ _n }.png`);
    var _p = _n => (0, e.jsxs)(_q, {
        children: [
            (0, e.jsx)(f.default.Title, {
                level: 1,
                style: {
                    fontFamily: h.Fonts.FugazOne,
                    marginBottom: 25,
                    marginTop: 5
                },
                className: 'allCaps',
                children: 'Add'
            }),
            (0, e.jsxs)(_r, {
                children: [
                    (0, e.jsx)(j.default, {
                        name: i.default.terrain.singular,
                        description: 'The floors and walls on the map',
                        icon: o('terrain'),
                        onClick: _n.setToTerrain
                    }),
                    (0, e.jsx)(j.default, {
                        name: i.default.prop.plural,
                        description: 'Objects and decorations',
                        icon: o('prop'),
                        onClick: _n.setToProps
                    }),
                    (0, e.jsx)(j.default, {
                        name: i.default.device.plural,
                        description: 'Create game mechanics!',
                        icon: o('device'),
                        onClick: _n.setToDevices
                    }),
                    (0, e.jsx)(j.default, {
                        name: i.default.wire.plural,
                        description: 'Connect devices together',
                        icon: o('wire'),
                        onClick: _n.setToWires
                    })
                ]
            }),
            _n.children
        ]
    });
    const _q = g.default.div.attrs({
            className: 'flex-column flex-center maxWidth'
        })(l || (l = n``)),
        _r = g.default.div.attrs({
            className: 'maxWidth'
        })(m || (m = n`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`));
}), b.register('bzU3s', function(c, d) {
    _n(c.exports, 'default', function() {
        return b;
    });
    var e = {
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
}), b.register('ttvyb', function(c, d) {
    _n(c.exports, 'default', function() {
        return _r;
    });
    var e = b('0hzx+'),
        f = b('cH8qQ'),
        g = b('j2ADs');
    b('LEQ5w');
    var h = b('0HHAH'),
        i = b('b5kvC'),
        j = b('Axq+p'),
        k = b('qVhMZ'),
        l = b('FK3Hv');
    let m, n, o, p = _n => _n;
    const {
        useToken: q
    } = f.default;
    var _r = _n => {
        const {
            token: {
                borderRadius: s
            }
        } = q(), {
            name: t,
            description: u,
            icon: v
        } = _n;
        return (0, e.jsx)(_s, {
            onClick: () => {
                (0, l.playClickSound)(), _n.onClick();
            },
            borderRadius: s,
            children: (0, e.jsxs)(h.CenteredColumn, {
                className: 'maxAll',
                children: [
                    (0, e.jsx)(_t, {
                        children: (0, e.jsx)(_u, {
                            src: v
                        })
                    }),
                    (0, e.jsx)(g.default.Title, {
                        level: 3,
                        style: {
                            marginBottom: -1,
                            fontFamily: i.Fonts.FugazOne,
                            textTransform: 'uppercase'
                        },
                        children: (0, k.CapitalizeFirstLetter)(t)
                    }),
                    (0, e.jsx)(g.default.Text, {
                        children: u
                    })
                ]
            })
        });
    };
    const _s = j.default.div.attrs({
            className: 'maxAll'
        })(m || (m = p`
  cursor: pointer;
  border-radius: ${ 0 }px;
  background: rgba(255, 255, 255, 0.1);
  padding: 40px 0px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`), _n => _n.borderRadius),
        _t = j.default.div(n || (n = p`
  margin-bottom: 5px;
`)),
        _u = j.default.img(o || (o = p`
  height: 70px;
`));
}), b.register('qMr7z', function(c, d) {
    _n(c.exports, 'default', function() {
        return _r;
    });
    var e = b('0hzx+'),
        f = b('fmVdR'),
        g = b('sgToH'),
        h = b('ewwAh'),
        i = b('j2ADs'),
        j = b('LEQ5w'),
        k = b('0HHAH'),
        l = b('b5kvC'),
        m = b('A2HiD'),
        n = b('rmc7C'),
        o = b('qVhMZ'),
        p = b('bzU3s'),
        q = b('JEGzD');
    var _r = _n => {
        const [s, t] = j.useState(''), u = j.useRef(null), v = (0, q.isPlatformer)();
        return (0, e.jsx)(g.default, {
            open: _n.open,
            onClose: _n.close,
            width: 500,
            afterOpenChange: _n => {
                var w;
                _n ? null == u || null === (w = u.current) || void 0 === w || w.focus() : t('');
            },
            destroyOnClose: !0,
            children: (0, e.jsxs)(k.CenteredColumn, {
                children: [
                    (0, e.jsx)(i.default.Title, {
                        level: 1,
                        style: {
                            fontFamily: l.Fonts.FugazOne,
                            marginBottom: 12,
                            marginTop: 5
                        },
                        className: 'allCaps',
                        children: (0, o.CapitalizeFirstLetter)(p.default.terrain.singular)
                    }),
                    v ? null : (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(m.default, {}),
                            ' ',
                            (0, e.jsx)(f.default, {})
                        ]
                    }),
                    (0, e.jsx)(h.default.Search, {
                        size: 'large',
                        placeholder: `Search for ${ p.default.terrain.plural }...`,
                        style: {
                            marginBottom: 23
                        },
                        value: s,
                        onChange: _n => {
                            t(_n.target.value);
                        },
                        ref: u
                    }),
                    (0, e.jsx)(n.default, {
                        searchQuery: s
                    })
                ]
            })
        });
    };
}), b.register('A2HiD', function(c, d) {
    _n(c.exports, 'default', function() {
        return _m;
    });
    var e = b('0hzx+'),
        f = b('ulE4q'),
        g = b('j2ADs'),
        h = b('7up2I');
    b('LEQ5w');
    var i = b('bzU3s'),
        j = b('bHGrl'),
        k = b('0HHAH'),
        l = b('JEGzD');
    var _m = (0, h.observer)(() => {
        const {
            me: {
                adding: {
                    terrain: _n
                }
            }
        } = (0, j.default)(), o = _n.buildTerrainAsWall, p = o => {
            (0, l.isPlatformer)() || (_n.buildTerrainAsWall = o);
        };
        return (0, e.jsxs)(k.Centered, {
            children: [
                (0, e.jsxs)(g.default.Text, {
                    style: {
                        marginRight: 10
                    },
                    children: [
                        'Place down ',
                        i.default.terrain.singular,
                        ' as a'
                    ]
                }),
                (0, e.jsxs)(f.default.Group, {
                    children: [
                        (0, e.jsx)(f.default, {
                            type: o ? 'default' : 'primary',
                            onClick: () => p(!1),
                            children: 'Floor'
                        }),
                        (0, e.jsx)(f.default, {
                            type: o ? 'primary' : 'default',
                            onClick: () => p(!0),
                            children: 'Wall'
                        })
                    ]
                })
            ]
        });
    });
}), b.register('rmc7C', function(c, d) {
    _w(c.exports, 'default', function() {
        return _q;
    });
    var e = b('0hzx+'),
        f = b('cvto726'),
        g = b('LEQ5w'),
        h = b('kYakY'),
        i = b('ryWAy'),
        j = b('bHGrl'),
        k = b('nZ+bT'),
        l = b('8WvaZ'),
        m = b('6mJm2'),
        n = b('dHtbx0'),
        o = b('Xc4Kz'),
        p = b('D6J6Y');
    var _q = _w => {
        const {
            worldOptions: {
                terrainOptions: r
            }
        } = (0, j.default)(), [s, t] = g.useState(-1), [u] = (0, h.useDebouncedValue)(_w.searchQuery, 150), v = g.useMemo(() => {
            var _w;
            const x = null === (_w = null == u ? void 0 : u.trim()) || void 0 === _w ? void 0 : _w.toLowerCase();
            if (!x && !(0, o.IsTutorial)())
                return r.filter(_w => (0, n.CanAddTerrain)(_w.id));
            const y = r.filter(_w => _w.name.toLowerCase().includes(x) && (0, n.CanAddTerrain)(_w.id));
            return (0, o.IsTutorial)() ? y.sort((_w, x) => {
                const z = p.TutorialConsts.topTerrain.indexOf(_w.id),
                    A = p.TutorialConsts.topTerrain.indexOf(x.id);
                return -1 === z && -1 === A ? 0 : -1 === z ? 1 : -1 === A ? -1 : z - A;
            }) : y;
        }, [
            r.length,
            u
        ]);
        return (0, i.default)(_c(l).Input.Keyboard.KeyCodes.UP, () => {
            t(Math.max(0, s - 1));
        }, [s]), (0, i.default)(_c(l).Input.Keyboard.KeyCodes.DOWN, () => {
            const w = v.length - 1;
            t(Math.min(w, s + 1));
        }, [
            v.length,
            s
        ]), g.useEffect(() => {
            t(u ? 0 : -1);
        }, [u]), v.length ? (0, e.jsx)(f.default, {
            direction: 'vertical',
            size: 12,
            className: 'maxWidth',
            children: v.map((_k, _c) => (0, e.jsx)(k.default, {
                option: _k,
                focused: s === _c
            }, _k.id))
        }) : (0, e.jsx)(m.default, {});
    };
}), b.register('kYakY', function(_c, d) {
    _k(_c.exports, 'useDebouncedValue', function() {
        return _j;
    });
    var e = b('LEQ5w'),
        f = b('zrKZC0'),
        g = b('+i8ep'),
        h = b('IYtCH'),
        i = {
            initializeWithNull: !1
        },
        _j = function(_k, l, m) {
            void 0 === m && (m = {});
            var n = Object.assign({}, i, m).initializeWithNull,
                o = (0, e.useState)(n ? null : _k),
                p = o[0],
                q = o[1],
                r = (0, f.useDebounce)(q, l);
            return (0, g.useDidMount)(function() {
                n && r(_k);
            }), (0, h.useDidUpdate)(function() {
                r(_k);
            }, [_k]), [
                p,
                q
            ];
        };
}), b.register('zrKZC0', function(c, d) {
    _h(c.exports, 'useDebounce', function() {
        return _g;
    });
    var e = b('GjKYj'),
        f = b('LEQ5w');

    function _g(_h, i, j) {
        var k = (0, f.useCallback)(function(l) {
                return _d(e)(l, i, j);
            }, [
                i,
                j
            ]),
            l = (0, f.useRef)(k(_h));
        return (0, f.useEffect)(function() {
            l.current = k(_h);
        }, [
            _h,
            k
        ]), l.current;
    }
}), b.register('GjKYj', function(c, _d) {
    var e = /^\s+|\s+$/g,
        f = /^[-+]0x[0-9a-f]+$/i,
        g = /^0b[01]+$/i,
        h = /^0o[0-7]+$/i,
        i = parseInt,
        j = 'object' == typeof a && a && a.Object === Object && a,
        k = 'object' == typeof self && self && self.Object === Object && self,
        l = j || k || Function('return this')(),
        m = Object.prototype.toString,
        n = Math.max,
        o = Math.min,
        p = function() {
            return l.Date.now();
        };

    function q(r) {
        var s = typeof r;
        return !!r && ('object' == s || 'function' == s);
    }

    function q(r) {
        if ('number' == typeof r)
            return r;
        if (function(s) {
                return 'symbol' == typeof s || function(t) {
                    return !!t && 'object' == typeof t;
                }(s) && '[object Symbol]' == m.call(s);
            }(r))
            return NaN;
        if (_o(r)) {
            var s = 'function' == typeof r.valueOf ? r.valueOf() : r;
            r = _o(s) ? s + '' : s;
        }
        if ('string' != typeof r)
            return 0 === r ? r : +r;
        r = r.replace(e, '');
        var s = g.test(r);
        return s || h.test(r) ? i(r.slice(2), s ? 2 : 8) : f.test(r) ? NaN : +r;
    }
    c.exports = function(q, r, s) {
        var t, u, v, w, x, y, z = 0,
            A = !1,
            B = !1,
            C = !0;
        if ('function' != typeof q)
            throw new TypeError('Expected a function');

        function D(E) {
            var F = t,
                G = u;
            return t = u = void 0, z = E, w = q.apply(G, F);
        }

        function D(E) {
            return z = E, x = setTimeout(_D, r), A ? _r(E) : w;
        }

        function D(E) {
            var F = E - y;
            return void 0 === y || F >= r || F < 0 || B && E - z >= v;
        }

        function _D() {
            var E = p();
            if (_t(E))
                return _D(E);
            x = setTimeout(_D, function(F) {
                var G = r - (F - y);
                return B ? o(G, v - (F - z)) : G;
            }(E));
        }

        function _D(E) {
            return x = void 0, C && t ? _r(E) : (t = u = void 0, w);
        }

        function D() {
            var E = p(),
                F = _t(E);
            if (t = arguments, u = this, y = E, F) {
                if (void 0 === x)
                    return _s(y);
                if (B)
                    return x = setTimeout(_u, r), _r(y);
            }
            return void 0 === x && (x = setTimeout(_u, r)), w;
        }
        return r = _p(r) || 0, _o(s) && (A = !!s.leading, v = (B = 'maxWait' in s) ? n(_p(s.maxWait) || 0, r) : v, C = 'trailing' in s ? !!s.trailing : C), _w.cancel = function() {
            void 0 !== x && clearTimeout(x), z = 0, t = y = u = x = void 0;
        }, _w.flush = function() {
            return void 0 === x ? w : _v(p());
        }, _w;
    };
}), b.register('IYtCH', function(c, d) {
    _g(c.exports, 'useDidUpdate', function() {
        return _f;
    });
    var e = b('LEQ5w');

    function _f(_g, h) {
        var i = (0, e.useRef)(!1);
        void 0 === h || Array.isArray(h) ? Array.isArray(h) && 0 === h.length && console.warn('Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.') : h = [h], (0, e.useEffect)(function() {
            i.current ? _g() : i.current = !0;
        }, h);
    }
}), b.register('nZ+bT', function(c, d) {
    _g(c.exports, 'default', function() {
        return _F;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('Axq+p'),
        h = b('0HHAH'),
        i = b('cH8qQ'),
        j = b('j2ADs'),
        k = b('b5kvC'),
        l = b('iWivW'),
        m = b('rWzgW'),
        n = b('mQCZt'),
        _o = b('11nl3'),
        _p = b('ryWAy'),
        q = b('8WvaZ'),
        _r = b('FK3Hv'),
        _s = b('L1523'),
        _t = b('Xc4Kz'),
        _u = b('dGfO9'),
        _v = b('ejMkR'),
        _w = b('k46wk1'),
        x = b('MvP5r');
    let y, z, A, B, C, D = _g => _g;
    const {
        useToken: E
    } = i.default;
    var _F = _g => {
        const {
            id: G,
            name: H,
            previewUrl: I,
            seasonTicketRequired: J
        } = _g.option, K = f.useRef(null), {
            token: {
                borderRadius: L
            }
        } = E(), M = J && !(0, _w.OwnsSeasonTicket)(), N = _g => {
            M || (l.default.me.adding.terrain.currentlySelectedTerrain = G, l.default.me.adding.mode = m.AddingMode.terrain, (0, n.default)(_o.default.adding), (0, _t.IsTutorial)() && (0, _u.default)(_v.AddScreen.home), (0, _s.EmitTutorialEvent)({
                event: _s.TutorialEventName.SELECT_TERRAIN_TO_ADD,
                terrainId: G
            }), _g && _g());
        };
        return (0, _p.default)(_O(q).Input.Keyboard.KeyCodes.ENTER, () => {
            _g.focused && N();
        }, [
            _g.focused,
            N
        ]), f.useEffect(() => {
            var _O;
            _g.focused && (null === (_O = K.current) || void 0 === _O || _O.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            }));
        }, [_g.focused]), (0, e.jsxs)(_G, {
            borderRadius: L,
            focused: _g.focused,
            onClick: () => {
                N(() => {
                    (0, _r.playClickSound)();
                });
            },
            ref: K,
            children: [
                (0, e.jsx)(_I, {
                    src: I
                }),
                (0, e.jsxs)(_H, {
                    children: [
                        (0, e.jsx)(_J, {
                            level: 5,
                            className: 'allCaps',
                            style: {
                                fontFamily: k.Fonts.FugazOne
                            },
                            children: H
                        }),
                        J ? (0, e.jsx)('div', {
                            style: {
                                marginTop: 2
                            },
                            children: (0, e.jsx)(x.SeasonTicketExclusive, {})
                        }) : null
                    ]
                })
            ]
        });
    };
    const _G = (0, g.default)(h.VerticalCentered)(y || (y = D`
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
`), _g => _g.borderRadius, _g => _g.focused ? '#ffca28' : 'rgba(255, 255, 255, 0.1)'),
        _H = (g.default.div(z || (z = D`
  display: flex;
  align-items: center;
`)), g.default.div(A || (A = D`
  display: flex;
  flex-direction: column;
`))),
        _I = g.default.img(B || (B = D`
  height: 54px;
  border-radius: 3px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  margin-right: 15px;
`)),
        _J = (0, g.default)(j.default.Title)(C || (C = D`
  margin-bottom: 0 !important;
`));
}), b.register('dGfO9', function(c, d) {
    _g(c.exports, 'default', function() {
        return _h;
    });
    var e = b('L1523'),
        f = b('iWivW'),
        g = b('ejMkR');
    var _h = _g => {
        _g !== g.AddScreen.home && (0, e.EmitTutorialEvent)({
            event: e.TutorialEventName.OPEN_ADD_SUBMENU,
            menu: _g
        }), f.default.gui.none.addMenu.screen = _g;
    };
}), b.register('k46wk1', function(c, d) {
    _g(c.exports, 'OwnsSeasonTicket', function() {
        return _f;
    });
    var e = b('PMl60');
    const _f = () => {
        var _g, h, i;
        return null !== (i = null === (_g = (0, e.getUser)()) || void 0 === _g || null === (h = _g.seasonTicket) || void 0 === h ? void 0 : h.active) && void 0 !== i && i;
    };
}), b.register('MvP5r', function(c, d) {
    _j(c.exports, 'SeasonTicketExclusive', function() {
        return _j;
    });
    var e = b('0hzx+'),
        f = b('Axq+p'),
        g = b('l0C72'),
        h = b('b5kvC');
    let i;
    const _j = () => (0, e.jsxs)(_k, {
            children: [
                g.SeasonTicketName.name,
                ' Exclusive'
            ]
        }),
        _k = f.default.div(i || (i = (_j => _j)`
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
`), h.Fonts.FugazOne);
}), b.register('6mJm2', function(c, d) {
    _j(c.exports, 'default', function() {
        return _g;
    });
    var e = b('0hzx+'),
        f = b('j2ADs');
    b('LEQ5w');
    var _g = () => (0, e.jsx)(f.default.Text, {
        italic: !0,
        children: 'No results found. Try a different search.'
    });
}), b.register('dHtbx0', function(c, d) {
    _j(c.exports, 'CanAddTerrain', function() {
        return _g;
    });
    var e = b('iWivW'),
        f = b('O3NOb');
    const _g = _j => {
        var h;
        const i = e.default.worldOptions.terrainOptions.find(h => h.id === _j);
        if (!i)
            return !1;
        if (null === (h = i.blockedMapStyles) || void 0 === h ? void 0 : h.length) {
            const _j = e.default.session.mapStyle;
            if (i.blockedMapStyles.includes(_j))
                return !1;
        }
        const j = i.minimumRoleLevel,
            k = i.maximumRoleLevel;
        return (0, f.IsRoleLevelBetween)(j, k);
    };
}), b.register('vw4kb', function(c, d) {
    _c(c.exports, 'default', function() {
        return _o;
    });
    var e = b('0hzx+'),
        f = b('sgToH'),
        g = b('ewwAh'),
        h = b('j2ADs'),
        i = b('LEQ5w'),
        j = b('0HHAH'),
        k = b('b5kvC'),
        l = b('vnxSp'),
        m = b('qVhMZ'),
        n = b('bzU3s');
    var _o = _c => {
        const [p, q] = i.useState(''), r = i.useRef(null);
        return (0, e.jsx)(f.default, {
            open: _c.open,
            onClose: _c.close,
            width: 550,
            afterOpenChange: _c => {
                var s;
                _c ? null == r || null === (s = r.current) || void 0 === s || s.focus() : q('');
            },
            destroyOnClose: !0,
            children: (0, e.jsxs)(j.CenteredColumn, {
                children: [
                    (0, e.jsx)(h.default.Title, {
                        level: 1,
                        style: {
                            fontFamily: k.Fonts.FugazOne,
                            marginBottom: 12,
                            marginTop: 5
                        },
                        className: 'allCaps',
                        children: (0, m.CapitalizeFirstLetter)(n.default.prop.plural)
                    }),
                    (0, e.jsx)(g.default.Search, {
                        size: 'large',
                        placeholder: `Search for ${ n.default.prop.plural }...`,
                        style: {
                            marginBottom: 23
                        },
                        value: p,
                        onChange: _c => {
                            q(_c.target.value);
                        },
                        ref: r
                    }),
                    (0, e.jsx)(l.default, {
                        searchQuery: p
                    })
                ]
            })
        });
    };
}), b.register('vnxSp', function(c, d) {
    _c(c.exports, 'default', function() {
        return _u;
    });
    var e = b('0hzx+'),
        f = b('2x11J'),
        g = b('LEQ5w'),
        h = b('kYakY'),
        i = b('+i8ep'),
        j = b('x7BBh'),
        k = b('bHGrl'),
        l = b('Quxw3'),
        m = b('JTrjq'),
        n = b('Axq+p'),
        o = b('ryWAy'),
        p = b('+o+D50'),
        q = b('Xc4Kz'),
        r = b('D6J6Y'),
        s = b('O3NOb');
    let t;
    var _u = (0, f.observer)(_c => {
        const {
            worldOptions: v
        } = (0, k.default)(), [w, x] = g.useState(-1), [y] = (0, h.useDebouncedValue)(_c.searchQuery, 200), z = g.useMemo(() => {
            var A, B;
            const C = v.propsOptions.filter(_c => (0, s.IsRoleLevelBetween)(_c.minimumRoleLevel)),
                D = null === (A = null === (B = _c.searchQuery) || void 0 === B ? void 0 : B.trim()) || void 0 === A ? void 0 : A.toLowerCase();
            if (!D && !(0, q.IsTutorial)())
                return C;
            const E = C.filter(_c => _c.name.toLowerCase().includes(D));
            return (0, q.IsTutorial)() ? E.sort((_c, v) => {
                const F = r.TutorialConsts.topProps.indexOf(_c.id),
                    G = r.TutorialConsts.topProps.indexOf(v.id);
                return -1 === F && -1 === G ? 0 : -1 === F ? 1 : -1 === G ? -1 : F - G;
            }) : E;
        }, [
            v.propsOptions.length,
            y
        ]);
        (0, i.useDidMount)(() => {
            v.requestedAllProps || (v.requestedAllProps = !0, (0, l.default)(j.default.requestAllProps));
        });
        const A = g.useCallback(_c => {
            const B = Math.max(0, Math.min(z.length - 1, w + _c));
            x(B);
        }, [
            z.length,
            w
        ]);
        return (0, o.default)(Phaser.Input.Keyboard.KeyCodes.UP, () => {
            A(-2);
        }, [A]), (0, o.default)(Phaser.Input.Keyboard.KeyCodes.DOWN, () => {
            A(2);
        }, [A]), (0, o.default)(Phaser.Input.Keyboard.KeyCodes.LEFT, () => {
            A(-1);
        }, [A]), (0, o.default)(Phaser.Input.Keyboard.KeyCodes.RIGHT, () => {
            A(1);
        }, [A]), g.useEffect(() => {
            x(y ? 0 : -1);
        }, [y]), v.hasAllProps ? z.length ? (0, e.jsx)(_v, {
            children: z.map((_c, v) => (0, e.jsx)(m.default, {
                focused: v === w,
                option: _c
            }, _c.id + '-option'))
        }) : (0, e.jsx)(p.default, {}) : null;
    });
    const _v = n.default.div.attrs({
        className: 'maxWidth'
    })(t || (t = (_c => _c)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 10px;
  overflow: hidden;
`));
}), b.register('JTrjq', function(c, d) {
    _c(c.exports, 'default', function() {
        return _H;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('Axq+p'),
        h = b('0HHAH'),
        i = b('cH8qQ'),
        j = b('j2ADs'),
        k = b('b5kvC'),
        l = b('2Xvuf'),
        m = (i = b('cH8qQ'), j = b('j2ADs'), b('ryWAy')),
        n = b('8WvaZ'),
        o = b('PFW10'),
        p = b('iWivW'),
        q = b('cPBfb'),
        r = b('mQCZt'),
        s = b('11nl3'),
        t = b('rWzgW'),
        u = b('FK3Hv'),
        v = b('L1523'),
        w = b('Xc4Kz'),
        x = b('dGfO9'),
        y = b('ejMkR'),
        z = b('k46wk1'),
        A = b('MvP5r');
    let B, C, D, E, F = _c => _c;
    const {
        useToken: G
    } = i.default;
    var _H = _c => {
        const {
            id: I,
            name: J,
            imageUrl: K,
            seasonTicketRequired: L
        } = _c.option, M = f.useRef(null), N = _R(o)(M), {
            token: {
                borderRadius: O
            }
        } = G(), P = L && !(0, z.OwnsSeasonTicket)(), Q = _c => {
            P || (p.default.me.adding.devices.selectedDeviceType = q.default.prop, p.default.me.adding.devices.currentlySelectedProp = I, p.default.me.adding.mode = t.AddingMode.device, (0, r.default)(s.default.adding), (0, w.IsTutorial)() && (0, x.default)(y.AddScreen.home), (0, v.EmitTutorialEvent)({
                event: v.TutorialEventName.SELECT_PROP_TO_ADD,
                propId: I
            }), _c && _c());
        };
        return (0, m.default)(_R(n).Input.Keyboard.KeyCodes.ENTER, () => {
            _c.focused && Q();
        }, [
            _c.focused,
            Q
        ]), f.useEffect(() => {
            var _R;
            _c.focused && (null === (_R = M.current) || void 0 === _R || _R.scrollIntoView({
                block: 'center'
            }));
        }, [_c.focused]), (0, e.jsx)(_I, {
            ref: M,
            onClick: () => {
                Q(() => {
                    (0, u.playClickSound)();
                });
            },
            focused: _c.focused,
            borderRadius: O,
            children: N ? (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(_J, {
                        children: (0, e.jsx)(_K, {
                            src: (0, l.default)(K)
                        })
                    }),
                    (0, e.jsx)(_L, {
                        level: 5,
                        className: 'allCaps',
                        style: {
                            fontFamily: k.Fonts.FugazOne
                        },
                        children: J
                    }),
                    L ? (0, e.jsx)(A.SeasonTicketExclusive, {}) : null
                ]
            }) : null
        });
    };
    const _I = (0, g.default)(h.CenteredColumn)(B || (B = F`
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
`), _c => _c.borderRadius, _c => _c.focused ? '#ffca28' : 'rgba(255, 255, 255, 0.1)'),
        _J = (0, g.default)(h.Centered)(C || (C = F`
  width: 120px;
  height: 120px;
  padding: 10px;
`)),
        _K = g.default.img.attrs({
            draggable: !1
        })(D || (D = F`
  max-height: 100%;
  max-width: 100%;
`)),
        _L = (0, g.default)(j.default.Title).attrs({
            className: 'maxWidth'
        })(E || (E = F`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`));
}), b.register('PFW10', function(_c, d) {
    Object.defineProperty(_c.exports, '__esModule', {
        value: !0
    });
    var e = b('LEQ5w');
    _c.exports.default = function(f) {
        const [g, h] = (0, e.useState)(!1), i = (0, e.useMemo)(() => new IntersectionObserver(([j]) => h(j.isIntersecting)), []);
        return (0, e.useEffect)(() => (i.observe(j.current), () => {
            i.disconnect();
        }), []), (0, e.useEffect)(() => {
            g && i.unobserve(j.current);
        }, [
            g,
            i,
            j
        ]), g;
    };
}), b.register('+o+D50', function(c, d) {
    e(c.exports, 'default', function() {
        return _g;
    });
    var e = b('0hzx+'),
        f = b('j2ADs');
    b('LEQ5w');
    var _g = () => (0, e.jsx)(f.default.Text, {
        italic: !0,
        children: 'No results found. Try a different search.'
    });
}), b.register('iyVnO', function(c, d) {
    e(c.exports, 'default', function() {
        return _r;
    });
    var e = b('0hzx+'),
        f = b('fmVdR'),
        g = b('sgToH'),
        h = b('ewwAh'),
        i = b('j2ADs'),
        j = b('LEQ5w'),
        k = b('0HHAH'),
        l = b('b5kvC'),
        m = b('bzU3s'),
        n = b('qVhMZ'),
        o = b('NdZx+'),
        p = b('haWM0'),
        q = b('Xc4Kz');
    var _r = e => {
        const [s, t] = j.useState(''), [u, v] = j.useState(null), w = j.useRef(null), x = j.useCallback(() => {
            u || e.close();
        }, [
            u,
            e.close
        ]);
        return (0, e.jsxs)(g.default, {
            open: e.open,
            onClose: x,
            width: 680,
            afterOpenChange: e => {
                var y;
                e ? null == w || null === (y = w.current) || void 0 === y || y.focus() : t('');
            },
            destroyOnClose: !0,
            children: [
                (0, e.jsxs)(k.CenteredColumn, {
                    children: [
                        (0, e.jsx)(i.default.Title, {
                            level: 1,
                            style: {
                                fontFamily: l.Fonts.FugazOne,
                                marginBottom: 12,
                                marginTop: 5
                            },
                            className: 'allCaps',
                            children: (0, n.CapitalizeFirstLetter)(m.default.device.plural)
                        }),
                        (0, e.jsx)(h.default.Search, {
                            size: 'large',
                            placeholder: `Search for ${ m.default.device.plural }...`,
                            style: {
                                marginBottom: 23
                            },
                            value: s,
                            onChange: e => {
                                t(e.target.value);
                            },
                            ref: w
                        }),
                        s || (0, q.IsTutorial)() ? null : (0, e.jsxs)(e.Fragment, {
                            children: [
                                (0, e.jsx)(p.default, {
                                    openCollectionName: u,
                                    open: v
                                }),
                                (0, e.jsx)(f.default, {
                                    children: (0, e.jsxs)(i.default.Text, {
                                        italic: !0,
                                        children: [
                                            'All ',
                                            (0, n.CapitalizeFirstLetter)(m.default.device.plural)
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                (0, e.jsx)(o.default, {
                    searchQuery: s,
                    blockKeyboardNavigation: !!u
                })
            ]
        });
    };
}), b.register('NdZx+', function(c, d) {
    e(c.exports, 'default', function() {
        return _v;
    });
    var e = b('0hzx+'),
        f = b('cvto726'),
        g = b('7up2I'),
        h = b('LEQ5w'),
        i = b('u9H7s'),
        j = b('cPBfb'),
        k = b('ryWAy'),
        l = b('bHGrl'),
        m = b('PU1Nu'),
        n = b('8WvaZ'),
        o = b('+o+D5'),
        p = b('kYakY'),
        q = b('FAXfY'),
        r = b('Xc4Kz'),
        s = b('D6J6Y'),
        t = b('PgokI');
    const u = [
        ...i.default,
        j.default.prop,
        j.default.mapOptions
    ];
    var _v = (0, g.observer)(e => {
        const [w, x] = h.useState(-1), {
            worldOptions: {
                deviceOptions: y
            }
        } = (0, l.default)(), [z] = (0, p.useDebouncedValue)(e.searchQuery, 150), A = h.useMemo(() => {
            const B = null == z ? void 0 : z.toLowerCase(),
                C = y.filter(e => !u.includes(e.id)).filter(e => (0, q.CanAddDeviceType)(e.id, void 0)).filter(e => (0, t.CanAddDeviceForCurrentMapStyle)({
                    deviceTypeId: e.id
                })).filter(B => !e.list || e.list.includes(B.id)).filter(e => {
                    var D, E;
                    return !B || (e.name.toLowerCase().includes(B) || (null === (D = null === (E = e.description) || void 0 === E ? void 0 : E.toLowerCase()) || void 0 === D ? void 0 : D.includes(B)));
                }).sort((e, C) => {
                    const D = e.name.toLowerCase().includes(B),
                        E = C.name.toLowerCase().includes(B);
                    return D && !E ? -1 : !D && E ? 1 : e.name.length < C.name.length ? -1 : e.name.length > C.name.length ? 1 : 0;
                });
            if ((0, r.IsTutorial)())
                return C.sort((e, B) => {
                    const D = s.TutorialConsts.topDevices.indexOf(e.id),
                        E = s.TutorialConsts.topDevices.indexOf(B.id);
                    return -1 === D && -1 === E ? 0 : -1 === D ? 1 : -1 === E ? -1 : D - E;
                });
            if (e.list) {
                const D = [];
                return e.list.forEach(e => {
                    const E = C.find(D => D.id === e);
                    E && D.push(E);
                }), D;
            }
            return C;
        }, [
            y.length,
            z,
            e.list
        ]);
        return (0, k.default)(_B(n).Input.Keyboard.KeyCodes.UP, () => {
            e.blockKeyboardNavigation || x(Math.max(0, w - 1));
        }, [
            w,
            e.blockKeyboardNavigation
        ]), (0, k.default)(_B(n).Input.Keyboard.KeyCodes.DOWN, () => {
            if (e.blockKeyboardNavigation)
                return;
            const _B = A.length - 1;
            x(Math.min(_B, w + 1));
        }, [
            A.length,
            w,
            e.blockKeyboardNavigation
        ]), h.useEffect(() => {
            !z || e.blockKeyboardNavigation ? x(-1) : x(0);
        }, [
            z,
            e.blockKeyboardNavigation
        ]), A.length ? (0, e.jsx)(f.default, {
            direction: 'vertical',
            size: 12,
            className: 'maxWidth',
            children: A.map((e, _c) => (0, e.jsx)(m.default, {
                option: e,
                focused: _c === w
            }, e.id + '-option'))
        }) : (0, e.jsx)(o.default, {});
    });
}), b.register('u9H7s', function(_c, d) {
    e(_c.exports, 'default', function() {
        return _g;
    });
    var e = b('cPBfb');
    const f = [
        e.default.placedSticker,
        e.default.droppedItem
    ];
    var _g = f;
}), b.register('PU1Nu', function(c, d) {
    e(c.exports, 'default', function() {
        return _G;
    });
    var e = b('0hzx+'),
        f = b('cH8qQ'),
        g = b('j2ADs'),
        h = b('LEQ5w'),
        i = b('Axq+p'),
        j = b('b5kvC'),
        k = b('iWivW'),
        l = b('rWzgW'),
        m = b('11nl3'),
        n = b('2Xvuf'),
        o = b('ryWAy'),
        p = b('0HHAH'),
        q = b('8WvaZ'),
        r = b('FK3Hv'),
        s = b('L1523'),
        t = b('Xc4Kz'),
        u = b('dGfO9'),
        v = b('ejMkR'),
        w = b('k46wk1'),
        x = b('MvP5r');
    let y, z, A, B, C, D, E = e => e;
    const {
        useToken: F
    } = f.default;
    var _G = e => {
        const {
            option: {
                id: H,
                name: I,
                description: J,
                seasonTicketRequired: K
            }
        } = e, L = h.useRef(null), {
            token: {
                borderRadius: M
            }
        } = F(), N = K && !(0, w.OwnsSeasonTicket)(), O = e => {
            N || (k.default.me.adding.devices.selectedDeviceType = H, k.default.me.adding.mode = l.AddingMode.device, k.default.me.currentAction = m.default.adding, (0, t.IsTutorial)() && (0, u.default)(v.AddScreen.home), (0, s.EmitTutorialEvent)({
                event: s.TutorialEventName.SELECT_DEVICE_TO_ADD,
                deviceTypeId: H
            }), e && e());
        };
        return (0, o.default)(_P(q).Input.Keyboard.KeyCodes.ENTER, () => {
            e.focused && O();
        }, [
            e.focused,
            O
        ]), h.useEffect(() => {
            var _P;
            e.focused && (null === (_P = L.current) || void 0 === _P || _P.scrollIntoView({
                block: 'center'
            }));
        }, [e.focused]), (0, e.jsxs)(_H, {
            ref: L,
            borderRadius: M,
            focused: e.focused,
            onClick: () => {
                O(() => {
                    (0, r.playClickSound)();
                });
            },
            children: [
                (0, e.jsx)(_I, {
                    children: (0, e.jsx)(_J, {
                        src: (0, n.default)('editor/icons/device.png')
                    })
                }),
                (0, e.jsxs)(_K, {
                    children: [
                        K ? (0, e.jsx)('div', {
                            style: {
                                marginBottom: 2
                            },
                            children: (0, e.jsx)(x.SeasonTicketExclusive, {})
                        }) : null,
                        (0, e.jsx)(_L, {
                            level: 5,
                            className: 'allCaps',
                            style: {
                                fontFamily: j.Fonts.FugazOne
                            },
                            children: I
                        }),
                        J ? (0, e.jsx)(_M, {
                            children: J
                        }) : null
                    ]
                })
            ]
        });
    };
    const _H = i.default.div.attrs({
            className: 'flex vc'
        })(y || (y = E`
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
`), e => e.borderRadius, e => e.focused ? '#ffca28' : 'rgba(255, 255, 255, 0.1)'),
        _I = (0, i.default)(p.Centered)(z || (z = E`
  height: 50px;
  width: 50px;
  margin-right: 20px;
  flex-shrink: 0;
`)),
        _J = i.default.img(A || (A = E`
  max-height: 100%;
  max-width: 100%;
`)),
        _K = i.default.div(B || (B = E``)),
        _L = (0, i.default)(g.default.Title)(C || (C = E``)),
        _M = (0, i.default)(g.default.Text)(D || (D = E``));
}), b.register('+o+D5', function(c, d) {
    e(c.exports, 'default', function() {
        return _g;
    });
    var e = b('0hzx+'),
        f = b('j2ADs');
    b('LEQ5w');
    var _g = () => (0, e.jsx)(f.default.Text, {
        italic: !0,
        children: 'No results found. Try a different search.'
    });
}), b.register('PgokI', function(c, d) {
    e(c.exports, 'CanAddDeviceForCurrentMapStyle', function() {
        return _g;
    });
    var e = b('KzfsH'),
        f = b('bh+op');
    const _g = e => {
        const {
            deviceTypeId: h
        } = e, i = (0, e.FetchDeviceOptionById)(h);
        return !!i && (!i.supportedMapStyles || i.supportedMapStyles.includes((0, f.GetCurrentMapStyle)()));
    };
}), b.register('bh+op', function(c, d) {
    e(c.exports, 'GetCurrentMapStyle', function() {
        return _f;
    });
    var e = b('iWivW');
    const _f = () => e.default.session.mapStyle;
}), b.register('haWM0', function(c, d) {
    e(c.exports, 'default', function() {
        return _q;
    });
    var e = b('0hzx+');
    b('LEQ5w');
    var f = b('Axq+p'),
        g = b('cPBfb'),
        h = b('kBGmY'),
        i = b('qVhMZ'),
        j = b('bzU3s'),
        k = b('2Xvuf'),
        l = b('hHkFq');
    let m;
    const n = `${ (0, i.CapitalizeFirstLetter)(j.default.device.plural) }`,
        o = e => (0, k.default)(`editor/icons/device_collections/${ e }.svg`),
        p = [{
                icon: o('starting'),
                name: `Starting ${ n }`,
                description: `${ n } you might need for every map`,
                devices: [
                    g.default.characterSpawnPad,
                    g.default.trigger,
                    g.default.gimkitLiveQuestion,
                    g.default.itemGranter,
                    g.default.itemSpawner,
                    g.default.sentry,
                    g.default.startingInventory,
                    g.default.wireRepeater,
                    g.default.teleporter
                ]
            },
            {
                icon: o('inventory'),
                name: `Inventory ${ n }`,
                description: `${ n } to manage what items & resources players have`,
                devices: [
                    g.default.vendingMachine,
                    g.default.itemGranter,
                    g.default.startingInventory,
                    g.default.itemSpawner,
                    g.default.inventoryItemManager
                ]
            },
            {
                icon: o('interaction'),
                name: `Interaction ${ n }`,
                description: `${ n } to create rich interactions`,
                devices: [
                    g.default.button,
                    g.default.vendingMachine,
                    g.default.zone,
                    g.default.textExplainer,
                    g.default.dialogue,
                    g.default.textBillboard
                ]
            },
            {
                icon: o('new'),
                name: `New ${ n }`,
                description: `${ n } recently added to ${ l.COMPANY_NAME } Creative`,
                devices: [
                    g.default.popupListItem,
                    g.default.character,
                    g.default.dialogue,
                    g.default.dialogueAction,
                    g.default.damager,
                    g.default.cameraPoint,
                    g.default.playerPositionDetector,
                    g.default.itemImage,
                    g.default.ball,
                    g.default.ballZone,
                    g.default.craftingTable,
                    g.default.craftingRecipe,
                    g.default.damageBoost
                ]
            }
        ];
    var _q = e => (0, e.jsx)(_r, {
        children: p.map(c => (0, e.jsx)(h.default, {
            collection: c,
            isOpen: c.name === e.openCollectionName,
            open: () => e.open(c.name),
            close: () => e.open('')
        }, `device-collection-${ c.name }`))
    });
    const _r = f.default.div.attrs({
        className: 'maxWidth'
    })(m || (m = (e => e)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 12px;
  overflow: hidden;
`));
}), b.register('kBGmY', function(c, d) {
    e(c.exports, 'default', function() {
        return _r;
    });
    var e = b('0hzx+');
    b('LEQ5w');
    var f = b('Axq+p'),
        g = b('sgToH'),
        h = b('cH8qQ'),
        i = b('j2ADs'),
        j = b('0HHAH'),
        k = b('b5kvC'),
        l = b('NdZx+'),
        m = b('lhG1d');
    let n, o, p = e => e;
    const {
        useToken: q
    } = h.default;
    var _r = e => {
        const {
            token: {
                borderRadius: s
            }
        } = q(), {
            collection: {
                icon: t,
                name: u,
                description: v,
                devices: w
            }
        } = e;
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsxs)(_s, {
                    borderRadius: s,
                    onClick: e.open,
                    children: [
                        (0, e.jsx)(_t, {
                            src: t
                        }),
                        (0, e.jsx)(i.default.Title, {
                            level: 4,
                            style: {
                                fontFamily: k.Fonts.FugazOne,
                                marginBottom: 2
                            },
                            className: 'allCaps',
                            children: u
                        }),
                        (0, e.jsx)(i.default.Text, {
                            children: (0, e.jsx)(m.default, {
                                children: v
                            })
                        })
                    ]
                }),
                (0, e.jsx)(g.default, {
                    open: e.isOpen,
                    onClose: e.close,
                    title: u,
                    width: 500,
                    children: (0, e.jsx)(l.default, {
                        list: w
                    })
                })
            ]
        });
    };
    const _s = (0, f.default)(j.CenteredColumn)(n || (n = p`
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
`), e => e.borderRadius),
        _t = f.default.img(o || (o = p`
  height: 50px;
  margin-bottom: 15px;
  opacity: 0.85;
`));
});