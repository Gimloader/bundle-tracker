function a(a, b, c, d) {
    Object.defineProperty(a, b, {
        get: c,
        set: d,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {},
    d = c.parcelRequire388b;
d.register('1OgWn', function(b, c) {
    var e;
    e = b.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return z;
    });
    var f = d('8kSQZ'),
        g = d('uPP4W'),
        h = d('h99Nu'),
        i = d('DnVBv'),
        j = d('rlaA8'),
        k = d('x8Sb7'),
        l = d('Vlfxs'),
        m = d('am7L5'),
        n = d('kkxCN'),
        o = d('fiNm4'),
        p = d('M/vL7'),
        q = d('xck3q'),
        r = d('7fo7e'),
        s = d('TnPB+'),
        t = d('iAe3o'),
        u = d('KV+OV'),
        v = d('PjB0f'),
        w = d('ulmmZ'),
        x = d('D0n26');
    let y;
    var z = (0, l.observer)(a => {
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
                a.setToHomeScreen(), N(n.AddScreen.home);
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
            N = a => (0, p.default)(a),
            O = () => {
                N(n.AddScreen.home);
            };
        return (0, f.jsx)(u.default, {
            open: C,
            onClose: M,
            afterOpenChange: a => {
                a && G(!1), a || K();
            },
            width: 600,
            destroyOnClose: !0,
            children: (0, f.jsx)(A, {
                children: (0, f.jsxs)(i.default, {
                    close: a.setToHomeScreen,
                    setToTerrain: () => N(n.AddScreen.terrain),
                    setToProps: () => {
                        N(n.AddScreen.props);
                    },
                    setToDevices: () => N(n.AddScreen.devices),
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
    const A = h.default.div.attrs({
        className: 'maxWidth'
    })(y || (y = (a => a)``));
}), d.register('DnVBv', function(b, c) {
    a(b.exports, 'default', function() {
        return p;
    });
    var e = d('8kSQZ'),
        f = d('UzdPH');
    d('uPP4W');
    var g = d('h99Nu'),
        h = d('gSUVO'),
        i = d('Wgw1x0'),
        j = d('YTov+'),
        k = d('JJQ0+');
    let l, m, n = a => a;
    const o = a => (0, k.default)(`editor/icons/${ a }.png`);
    var p = a => (0, e.jsxs)(q, {
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
            (0, e.jsxs)(r, {
                children: [
                    (0, e.jsx)(j.default, {
                        name: i.default.terrain.singular,
                        description: 'The floors and walls on the map',
                        icon: o('terrain'),
                        onClick: a.setToTerrain
                    }),
                    (0, e.jsx)(j.default, {
                        name: i.default.prop.plural,
                        description: 'Objects and decorations',
                        icon: o('prop'),
                        onClick: a.setToProps
                    }),
                    (0, e.jsx)(j.default, {
                        name: i.default.device.plural,
                        description: 'Create game mechanics!',
                        icon: o('device'),
                        onClick: a.setToDevices
                    }),
                    (0, e.jsx)(j.default, {
                        name: i.default.wire.plural,
                        description: 'Connect devices together',
                        icon: o('wire'),
                        onClick: a.setToWires
                    })
                ]
            }),
            a.children
        ]
    });
    const q = g.default.div.attrs({
            className: 'flex-column flex-center maxWidth'
        })(l || (l = n``)),
        r = g.default.div.attrs({
            className: 'maxWidth'
        })(m || (m = n`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`));
}), d.register('Wgw1x0', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
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
}), d.register('YTov+', function(b, c) {
    a(b.exports, 'default', function() {
        return r;
    });
    var e = d('8kSQZ'),
        f = d('KlhV/'),
        g = d('UzdPH');
    d('uPP4W');
    var h = d('YimJ0'),
        i = d('gSUVO'),
        j = d('h99Nu'),
        k = d('RJ/fk'),
        l = d('kcx+B');
    let m, n, o, p = a => a;
    const {
        useToken: q
    } = f.default;
    var r = a => {
        const {
            token: {
                borderRadius: s
            }
        } = q(), {
            name: t,
            description: u,
            icon: v
        } = w;
        return (0, e.jsx)(s, {
            onClick: () => {
                (0, l.playClickSound)(), w.onClick();
            },
            borderRadius: s,
            children: (0, e.jsxs)(h.CenteredColumn, {
                className: 'maxAll',
                children: [
                    (0, e.jsx)(t, {
                        children: (0, e.jsx)(u, {
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
    const s = j.default.div.attrs({
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
`), a => a.borderRadius),
        t = j.default.div(n || (n = p`
  margin-bottom: 5px;
`)),
        u = j.default.img(o || (o = p`
  height: 70px;
`));
}), d.register('rlaA8', function(b, c) {
    a(b.exports, 'default', function() {
        return r;
    });
    var e = d('8kSQZ'),
        f = d('ExtIT'),
        g = d('KV+OV'),
        h = d('c6x8w'),
        i = d('UzdPH'),
        j = d('uPP4W'),
        k = d('YimJ0'),
        l = d('gSUVO'),
        m = d('7n7ZV'),
        n = d('jqdOA'),
        o = d('RJ/fk'),
        p = d('Wgw1x0'),
        q = d('HMNV0');
    var r = a => {
        const [s, t] = j.useState(''), u = j.useRef(null), v = (0, q.isPlatformer)();
        return (0, e.jsx)(g.default, {
            open: a.open,
            onClose: a.close,
            width: 500,
            afterOpenChange: a => {
                var w;
                a ? null == u || null === (w = u.current) || void 0 === w || w.focus() : t('');
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
                        onChange: a => {
                            t(a.target.value);
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
}), d.register('7n7ZV', function(b, c) {
    a(b.exports, 'default', function() {
        return m;
    });
    var e = d('8kSQZ'),
        f = d('IsmrL'),
        g = d('UzdPH'),
        h = d('8k9IL');
    d('uPP4W');
    var i = d('Wgw1x0'),
        j = d('am7L5'),
        k = d('YimJ0'),
        l = d('HMNV0');
    var m = (0, h.observer)(() => {
        const {
            me: {
                adding: {
                    terrain: n
                }
            }
        } = (0, j.default)(), o = n.buildTerrainAsWall, p = o => {
            (0, l.isPlatformer)() || (n.buildTerrainAsWall = o);
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
}), d.register('jqdOA', function(c, t) {
    a(c.exports, 'default', function() {
        return q;
    });
    var e = d('8kSQZ'),
        f = d('5nJMd26'),
        g = d('uPP4W'),
        h = d('xk+2C0'),
        i = d('+0Tb/'),
        j = d('am7L5'),
        k = d('n5D9V'),
        l = d('kneek'),
        m = d('7OIg31'),
        n = d('SDOhx0'),
        o = d('SUzmj'),
        p = d('aSd8d');
    var q = a => {
        const {
            worldOptions: {
                terrainOptions: r
            }
        } = (0, j.default)(), [s, t] = g.useState(-1), [u] = (0, h.useDebouncedValue)(a.searchQuery, 150), v = g.useMemo(() => {
            var w;
            const x = null === (w = null == u ? void 0 : u.trim()) || void 0 === w ? void 0 : w.toLowerCase();
            if (!x && !(0, o.IsTutorial)())
                return r.filter(w => (0, n.CanAddTerrain)(w.id));
            const y = r.filter(w => w.name.toLowerCase().includes(x) && (0, n.CanAddTerrain)(w.id));
            return (0, o.IsTutorial)() ? y.sort((w, x) => {
                const z = p.TutorialConsts.topTerrain.indexOf(w.id),
                    A = p.TutorialConsts.topTerrain.indexOf(x.id);
                return -1 === z && -1 === A ? 0 : -1 === z ? 1 : -1 === A ? -1 : z - A;
            }) : y;
        }, [
            r.length,
            u
        ]);
        return (0, i.default)(b(l).Input.Keyboard.KeyCodes.UP, () => {
            t(Math.max(0, s - 1));
        }, [s]), (0, i.default)(b(l).Input.Keyboard.KeyCodes.DOWN, () => {
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
            children: v.map((a, b) => (0, e.jsx)(k.default, {
                option: a,
                focused: s === b
            }, a.id))
        }) : (0, e.jsx)(m.default, {});
    };
}), d.register('xk+2C0', function(b, c) {
    a(b.exports, 'useDebouncedValue', function() {
        return j;
    });
    var e = d('uPP4W'),
        f = d('eK6B80'),
        g = d('laJ/S'),
        h = d('4MvmP'),
        i = {
            initializeWithNull: !1
        },
        j = function(a, b, c) {
            void 0 === c && (c = {});
            var k = Object.assign({}, i, c).initializeWithNull,
                l = (0, e.useState)(k ? null : a),
                m = l[0],
                n = l[1],
                o = (0, f.useDebounce)(n, b);
            return (0, g.useDidMount)(function() {
                k && o(a);
            }), (0, h.useDidUpdate)(function() {
                o(a);
            }, [a]), [
                m,
                n
            ];
        };
}), d.register('eK6B80', function(c, h) {
    a(c.exports, 'useDebounce', function() {
        return g;
    });
    var e = d('pW5ZG0'),
        f = d('uPP4W');

    function g(a, c, d) {
        var h = (0, f.useCallback)(function(a) {
                return b(e)(a, c, d);
            }, [
                c,
                d
            ]),
            i = (0, f.useRef)(h(a));
        return (0, f.useEffect)(function() {
            i.current = h(a);
        }, [
            a,
            h
        ]), i.current;
    }
}), d.register('pW5ZG0', function(a, b) {
    var e = /^\s+|\s+$/g,
        f = /^[-+]0x[0-9a-f]+$/i,
        g = /^0b[01]+$/i,
        h = /^0o[0-7]+$/i,
        i = j,
        k = 'object' == typeof c && c && c.Object === Object && c,
        l = 'object' == typeof self && self && self.Object === Object && self,
        m = k || l || Function('return this')(),
        n = Object.prototype.toString,
        o = Math.max,
        p = Math.min,
        q = function() {
            return m.Date.now();
        };

    function r(a) {
        var s = typeof a;
        return !!a && ('object' == s || 'function' == s);
    }

    function s(a) {
        if ('number' == typeof a)
            return a;
        if (function(a) {
                return 'symbol' == typeof a || function(a) {
                    return !!a && 'object' == typeof a;
                }(a) && '[object Symbol]' == n.call(a);
            }(a))
            return NaN;
        if (r(a)) {
            var t = 'function' == typeof a.valueOf ? a.valueOf() : a;
            a = r(t) ? t + '' : t;
        }
        if ('string' != typeof a)
            return 0 === a ? a : +a;
        a = a.replace(e, '');
        var t = g.test(a);
        return t || h.test(a) ? i(a.slice(2), t ? 2 : 8) : f.test(a) ? NaN : +a;
    }
    a.exports = function(a, b, c) {
        var t, u, v, w, x, y, z = 0,
            A = !1,
            B = !1,
            C = !0;
        if ('function' != typeof a)
            throw new TypeError('Expected a function');

        function D(b) {
            var E = F,
                G = H;
            return F = H = void 0, z = b, w = a.apply(G, E);
        }

        function E(a) {
            return z = a, x = setTimeout(G, b), A ? D(a) : w;
        }

        function F(a) {
            var G = a - y;
            return void 0 === y || G >= b || G < 0 || B && a - z >= v;
        }

        function G() {
            var H = q();
            if (F(H))
                return H(H);
            x = setTimeout(G, function(H) {
                var I = b - (H - y);
                return B ? p(I, v - (H - z)) : I;
            }(H));
        }

        function H(a) {
            return x = void 0, C && t ? D(a) : (t = u = void 0, w);
        }

        function I() {
            var J = q(),
                K = F(J);
            if (t = arguments, u = this, y = J, K) {
                if (void 0 === x)
                    return E(y);
                if (B)
                    return x = setTimeout(G, b), D(y);
            }
            return void 0 === x && (x = setTimeout(G, b)), w;
        }
        return b = s(b) || 0, r(c) && (A = !!c.leading, v = (B = 'maxWait' in c) ? o(s(c.maxWait) || 0, b) : v, C = 'trailing' in c ? !!c.trailing : C), I.cancel = function() {
            void 0 !== x && clearTimeout(x), z = 0, t = y = u = x = void 0;
        }, I.flush = function() {
            return void 0 === x ? w : H(q());
        }, I;
    };
}), d.register('4MvmP', function(b, c) {
    a(b.exports, 'useDidUpdate', function() {
        return f;
    });
    var e = d('uPP4W');

    function f(a, b) {
        var g = (0, e.useRef)(!1);
        void 0 === b || Array.isArray(b) ? Array.isArray(b) && 0 === b.length && console.warn('Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.') : b = [b], (0, e.useEffect)(function() {
            g.current ? a() : g.current = !0;
        }, b);
    }
}), d.register('n5D9V', function(c, I) {
    a(c.exports, 'default', function() {
        return F;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('h99Nu'),
        h = d('YimJ0'),
        i = d('KlhV/'),
        j = d('UzdPH'),
        k = d('gSUVO'),
        l = d('7Sbqr'),
        m = d('7fo7e'),
        n = d('TnPB+'),
        o = d('iAe3o'),
        p = d('+0Tb/'),
        q = d('kneek'),
        r = d('kcx+B'),
        s = d('D0n26'),
        t = d('SUzmj'),
        u = d('M/vL7'),
        v = d('kkxCN'),
        w = d('rZ3/P'),
        x = d('PMT51');
    let y, z, A, B, C, D = a => a;
    const {
        useToken: E
    } = i.default;
    var F = a => {
        const {
            id: G,
            name: H,
            previewUrl: I,
            seasonTicketRequired: J
        } = a.option, K = f.useRef(null), {
            token: {
                borderRadius: L
            }
        } = E(), M = J && !(0, w.OwnsSeasonTicket)(), N = a => {
            M || (l.default.me.adding.terrain.currentlySelectedTerrain = G, l.default.me.adding.mode = m.AddingMode.terrain, (0, n.default)(o.default.adding), (0, t.IsTutorial)() && (0, u.default)(v.AddScreen.home), (0, s.EmitTutorialEvent)({
                event: s.TutorialEventName.SELECT_TERRAIN_TO_ADD,
                terrainId: G
            }), a && a());
        };
        return (0, p.default)(b(q).Input.Keyboard.KeyCodes.ENTER, () => {
            a.focused && N();
        }, [
            a.focused,
            N
        ]), f.useEffect(() => {
            var O;
            a.focused && (null === (O = K.current) || void 0 === O || O.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            }));
        }, [a.focused]), (0, e.jsxs)(G, {
            borderRadius: L,
            focused: a.focused,
            onClick: () => {
                N(() => {
                    (0, r.playClickSound)();
                });
            },
            ref: K,
            children: [
                (0, e.jsx)(I, {
                    src: I
                }),
                (0, e.jsxs)(H, {
                    children: [
                        (0, e.jsx)(J, {
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
    const G = (0, g.default)(h.VerticalCentered)(y || (y = D`
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
        H = (g.default.div(z || (z = D`
  display: flex;
  align-items: center;
`)), g.default.div(A || (A = D`
  display: flex;
  flex-direction: column;
`))),
        I = g.default.img(B || (B = D`
  height: 54px;
  border-radius: 3px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  margin-right: 15px;
`)),
        J = (0, g.default)(j.default.Title)(C || (C = D`
  margin-bottom: 0 !important;
`));
}), d.register('M/vL7', function(b, c) {
    a(b.exports, 'default', function() {
        return h;
    });
    var e = d('D0n26'),
        f = d('7Sbqr'),
        g = d('kkxCN');
    var h = a => {
        a !== g.AddScreen.home && (0, e.EmitTutorialEvent)({
            event: e.TutorialEventName.OPEN_ADD_SUBMENU,
            menu: a
        }), f.default.gui.none.addMenu.screen = a;
    };
}), d.register('rZ3/P', function(b, c) {
    a(b.exports, 'OwnsSeasonTicket', function() {
        return f;
    });
    var e = d('PjB0f');
    const f = () => {
        var g, h, i;
        return null !== (i = null === (g = (0, e.getUser)()) || void 0 === g || null === (h = g.seasonTicket) || void 0 === h ? void 0 : h.active) && void 0 !== i && i;
    };
}), d.register('PMT51', function(b, c) {
    a(b.exports, 'SeasonTicketExclusive', function() {
        return j;
    });
    var e = d('8kSQZ'),
        f = d('h99Nu'),
        g = d('ImHrc1'),
        h = d('gSUVO');
    let i;
    const j = () => (0, e.jsxs)(k, {
            children: [
                g.SeasonTicketName.name,
                ' Exclusive'
            ]
        }),
        k = f.default.div(i || (i = (a => a)`
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
}), d.register('7OIg31', function(b, c) {
    a(b.exports, 'default', function() {
        return g;
    });
    var e = d('8kSQZ'),
        f = d('UzdPH');
    d('uPP4W');
    var g = () => (0, e.jsx)(f.default.Text, {
        italic: !0,
        children: 'No results found. Try a different search.'
    });
}), d.register('SDOhx0', function(b, c) {
    a(b.exports, 'CanAddTerrain', function() {
        return g;
    });
    var e = d('7Sbqr'),
        f = d('2hh8R');
    const g = a => {
        var h;
        const i = e.default.worldOptions.terrainOptions.find(h => h.id === a);
        if (!i)
            return !1;
        if (null === (h = i.blockedMapStyles) || void 0 === h ? void 0 : h.length) {
            const j = e.default.session.mapStyle;
            if (i.blockedMapStyles.includes(j))
                return !1;
        }
        const j = i.minimumRoleLevel,
            k = i.maximumRoleLevel;
        return (0, f.IsRoleLevelBetween)(j, k);
    };
}), d.register('x8Sb7', function(b, c) {
    a(b.exports, 'default', function() {
        return o;
    });
    var e = d('8kSQZ'),
        f = d('KV+OV'),
        g = d('c6x8w'),
        h = d('UzdPH'),
        i = d('uPP4W'),
        j = d('YimJ0'),
        k = d('gSUVO'),
        l = d('0450B'),
        m = d('RJ/fk'),
        n = d('Wgw1x0');
    var o = a => {
        const [p, q] = i.useState(''), r = i.useRef(null);
        return (0, e.jsx)(f.default, {
            open: a.open,
            onClose: a.close,
            width: 550,
            afterOpenChange: a => {
                var s;
                a ? null == r || null === (s = r.current) || void 0 === s || s.focus() : q('');
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
                        onChange: a => {
                            q(a.target.value);
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
}), d.register('0450B', function(b, c) {
    a(b.exports, 'default', function() {
        return u;
    });
    var e = d('8kSQZ'),
        f = d('Vlfxs'),
        g = d('uPP4W'),
        h = d('xk+2C0'),
        i = d('laJ/S'),
        j = d('sPSvg'),
        k = d('am7L5'),
        l = d('DM38W'),
        m = d('OnlyL'),
        n = d('h99Nu'),
        o = d('+0Tb/'),
        p = d('7OIg30'),
        q = d('SUzmj'),
        r = d('aSd8d'),
        s = d('2hh8R');
    let t;
    var u = (0, f.observer)(a => {
        const {
            worldOptions: v
        } = (0, k.default)(), [w, x] = g.useState(-1), [y] = (0, h.useDebouncedValue)(a.searchQuery, 200), z = g.useMemo(() => {
            var A, B;
            const C = v.propsOptions.filter(a => (0, s.IsRoleLevelBetween)(a.minimumRoleLevel)),
                D = null === (A = null === (B = a.searchQuery) || void 0 === B ? void 0 : B.trim()) || void 0 === A ? void 0 : A.toLowerCase();
            if (!D && !(0, q.IsTutorial)())
                return C;
            const E = C.filter(a => a.name.toLowerCase().includes(D));
            return (0, q.IsTutorial)() ? E.sort((a, v) => {
                const F = r.TutorialConsts.topProps.indexOf(a.id),
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
        const A = g.useCallback(a => {
            const B = Math.max(0, Math.min(z.length - 1, w + a));
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
        }, [y]), v.hasAllProps ? z.length ? (0, e.jsx)(v, {
            children: z.map((a, v) => (0, e.jsx)(m.default, {
                focused: v === w,
                option: a
            }, a.id + '-option'))
        }) : (0, e.jsx)(p.default, {}) : null;
    });
    const v = n.default.div.attrs({
        className: 'maxWidth'
    })(t || (t = (a => a)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 10px;
  overflow: hidden;
`));
}), d.register('OnlyL', function(c, K) {
    a(c.exports, 'default', function() {
        return H;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('h99Nu'),
        h = d('YimJ0'),
        i = d('KlhV/'),
        j = d('UzdPH'),
        k = d('gSUVO'),
        l = d('JJQ0+'),
        m = (i = d('KlhV/'), j = d('UzdPH'), d('+0Tb/')),
        n = d('kneek'),
        o = d('gM5n4'),
        p = d('7Sbqr'),
        q = d('7X8h3'),
        r = d('TnPB+'),
        s = d('iAe3o'),
        t = d('7fo7e'),
        u = d('kcx+B'),
        v = d('D0n26'),
        w = d('SUzmj'),
        x = d('M/vL7'),
        y = d('kkxCN'),
        z = d('rZ3/P'),
        A = d('PMT51');
    let B, C, D, E, F = a => a;
    const {
        useToken: G
    } = i.default;
    var H = a => {
        const {
            id: I,
            name: J,
            imageUrl: K,
            seasonTicketRequired: L
        } = a.option, M = f.useRef(null), N = b(o)(M), {
            token: {
                borderRadius: O
            }
        } = G(), P = L && !(0, z.OwnsSeasonTicket)(), Q = a => {
            P || (p.default.me.adding.devices.selectedDeviceType = q.default.prop, p.default.me.adding.devices.currentlySelectedProp = I, p.default.me.adding.mode = t.AddingMode.device, (0, r.default)(s.default.adding), (0, w.IsTutorial)() && (0, x.default)(y.AddScreen.home), (0, v.EmitTutorialEvent)({
                event: v.TutorialEventName.SELECT_PROP_TO_ADD,
                propId: I
            }), a && a());
        };
        return (0, m.default)(b(n).Input.Keyboard.KeyCodes.ENTER, () => {
            a.focused && Q();
        }, [
            a.focused,
            Q
        ]), f.useEffect(() => {
            var R;
            a.focused && (null === (R = M.current) || void 0 === R || R.scrollIntoView({
                block: 'center'
            }));
        }, [a.focused]), (0, e.jsx)(I, {
            ref: M,
            onClick: () => {
                Q(() => {
                    (0, u.playClickSound)();
                });
            },
            focused: a.focused,
            borderRadius: O,
            children: N ? (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(J, {
                        children: (0, e.jsx)(K, {
                            src: (0, l.default)(K)
                        })
                    }),
                    (0, e.jsx)(L, {
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
    const I = (0, g.default)(h.CenteredColumn)(B || (B = F`
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
        J = (0, g.default)(h.Centered)(C || (C = F`
  width: 120px;
  height: 120px;
  padding: 10px;
`)),
        K = g.default.img.attrs({
            draggable: !1
        })(D || (D = F`
  max-height: 100%;
  max-width: 100%;
`)),
        L = (0, g.default)(j.default.Title).attrs({
            className: 'maxWidth'
        })(E || (E = F`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`));
}), d.register('gM5n4', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    var e = d('uPP4W');
    a.exports.default = function(a) {
        const [f, g] = (0, e.useState)(!1), h = (0, e.useMemo)(() => new IntersectionObserver(([i]) => g(i.isIntersecting)), []);
        return (0, e.useEffect)(() => (h.observe(i.current), () => {
            h.disconnect();
        }), []), (0, e.useEffect)(() => {
            f && h.unobserve(i.current);
        }, [
            f,
            h,
            i
        ]), f;
    };
}), d.register('7OIg30', function(b, c) {
    a(b.exports, 'default', function() {
        return g;
    });
    var e = d('8kSQZ'),
        f = d('UzdPH');
    d('uPP4W');
    var g = () => (0, e.jsx)(f.default.Text, {
        italic: !0,
        children: 'No results found. Try a different search.'
    });
}), d.register('fiNm4', function(b, c) {
    a(b.exports, 'default', function() {
        return r;
    });
    var e = d('8kSQZ'),
        f = d('ExtIT'),
        g = d('KV+OV'),
        h = d('c6x8w'),
        i = d('UzdPH'),
        j = d('uPP4W'),
        k = d('YimJ0'),
        l = d('gSUVO'),
        m = d('Wgw1x0'),
        n = d('RJ/fk'),
        o = d('5ljpl'),
        p = d('Mueq9'),
        q = d('SUzmj');
    var r = a => {
        const [s, t] = j.useState(''), [u, v] = j.useState(null), w = j.useRef(null), x = j.useCallback(() => {
            u || a.close();
        }, [
            u,
            a.close
        ]);
        return (0, e.jsxs)(g.default, {
            open: a.open,
            onClose: x,
            width: 680,
            afterOpenChange: a => {
                var y;
                a ? null == w || null === (y = w.current) || void 0 === y || y.focus() : t('');
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
                            onChange: a => {
                                t(a.target.value);
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
}), d.register('5ljpl', function(c, y) {
    a(c.exports, 'default', function() {
        return v;
    });
    var e = d('8kSQZ'),
        f = d('5nJMd26'),
        g = d('8k9IL'),
        h = d('uPP4W'),
        i = d('Y93UN'),
        j = d('7X8h3'),
        k = d('+0Tb/'),
        l = d('am7L5'),
        m = d('6SDNi'),
        n = d('kneek'),
        o = d('7OIg3'),
        p = d('xk+2C0'),
        q = d('iqsJ7'),
        r = d('SUzmj'),
        s = d('aSd8d'),
        t = d('WSEA7');
    const u = [
        ...i.default,
        j.default.prop,
        j.default.mapOptions
    ];
    var v = (0, g.observer)(a => {
        const [w, x] = h.useState(-1), {
            worldOptions: {
                deviceOptions: y
            }
        } = (0, l.default)(), [z] = (0, p.useDebouncedValue)(a.searchQuery, 150), A = h.useMemo(() => {
            const B = null == z ? void 0 : z.toLowerCase(),
                C = y.filter(a => !u.includes(a.id)).filter(a => (0, q.CanAddDeviceType)(a.id, void 0)).filter(a => (0, t.CanAddDeviceForCurrentMapStyle)({
                    deviceTypeId: a.id
                })).filter(B => !a.list || a.list.includes(B.id)).filter(a => {
                    var D, E;
                    return !B || (a.name.toLowerCase().includes(B) || (null === (D = null === (E = a.description) || void 0 === E ? void 0 : E.toLowerCase()) || void 0 === D ? void 0 : D.includes(B)));
                }).sort((a, C) => {
                    const D = a.name.toLowerCase().includes(B),
                        E = C.name.toLowerCase().includes(B);
                    return D && !E ? -1 : !D && E ? 1 : a.name.length < C.name.length ? -1 : a.name.length > C.name.length ? 1 : 0;
                });
            if ((0, r.IsTutorial)())
                return C.sort((a, B) => {
                    const F = s.TutorialConsts.topDevices.indexOf(a.id),
                        G = s.TutorialConsts.topDevices.indexOf(B.id);
                    return -1 === F && -1 === G ? 0 : -1 === F ? 1 : -1 === G ? -1 : F - G;
                });
            if (a.list) {
                const F = [];
                return a.list.forEach(a => {
                    const G = C.find(F => F.id === a);
                    G && F.push(G);
                }), F;
            }
            return C;
        }, [
            y.length,
            z,
            a.list
        ]);
        return (0, k.default)(b(n).Input.Keyboard.KeyCodes.UP, () => {
            a.blockKeyboardNavigation || x(Math.max(0, w - 1));
        }, [
            w,
            a.blockKeyboardNavigation
        ]), (0, k.default)(b(n).Input.Keyboard.KeyCodes.DOWN, () => {
            if (a.blockKeyboardNavigation)
                return;
            const B = A.length - 1;
            x(Math.min(B, w + 1));
        }, [
            A.length,
            w,
            a.blockKeyboardNavigation
        ]), h.useEffect(() => {
            !z || a.blockKeyboardNavigation ? x(-1) : x(0);
        }, [
            z,
            a.blockKeyboardNavigation
        ]), A.length ? (0, e.jsx)(f.default, {
            direction: 'vertical',
            size: 12,
            className: 'maxWidth',
            children: A.map((a, b) => (0, e.jsx)(m.default, {
                option: a,
                focused: b === w
            }, a.id + '-option'))
        }) : (0, e.jsx)(o.default, {});
    });
}), d.register('Y93UN', function(b, c) {
    a(b.exports, 'default', function() {
        return g;
    });
    var e = d('7X8h3');
    const f = [
        e.default.placedSticker,
        e.default.droppedItem
    ];
    var g = h;
}), d.register('6SDNi', function(c, J) {
    a(c.exports, 'default', function() {
        return G;
    });
    var e = d('8kSQZ'),
        f = d('KlhV/'),
        g = d('UzdPH'),
        h = d('uPP4W'),
        i = d('h99Nu'),
        j = d('gSUVO'),
        k = d('7Sbqr'),
        l = d('7fo7e'),
        m = d('iAe3o'),
        n = d('JJQ0+'),
        o = d('+0Tb/'),
        p = d('YimJ0'),
        q = d('kneek'),
        r = d('kcx+B'),
        s = d('D0n26'),
        t = d('SUzmj'),
        u = d('M/vL7'),
        v = d('kkxCN'),
        w = d('rZ3/P'),
        x = d('PMT51');
    let y, z, A, B, C, D, E = a => a;
    const {
        useToken: F
    } = f.default;
    var G = a => {
        const {
            option: {
                id: H,
                name: I,
                description: J,
                seasonTicketRequired: K
            }
        } = L, M = h.useRef(null), {
            token: {
                borderRadius: N
            }
        } = F(), O = K && !(0, w.OwnsSeasonTicket)(), P = L => {
            O || (k.default.me.adding.devices.selectedDeviceType = H, k.default.me.adding.mode = l.AddingMode.device, k.default.me.currentAction = m.default.adding, (0, t.IsTutorial)() && (0, u.default)(v.AddScreen.home), (0, s.EmitTutorialEvent)({
                event: s.TutorialEventName.SELECT_DEVICE_TO_ADD,
                deviceTypeId: H
            }), L && L());
        };
        return (0, o.default)(b(q).Input.Keyboard.KeyCodes.ENTER, () => {
            L.focused && P();
        }, [
            L.focused,
            P
        ]), h.useEffect(() => {
            var Q;
            L.focused && (null === (Q = M.current) || void 0 === Q || Q.scrollIntoView({
                block: 'center'
            }));
        }, [L.focused]), (0, e.jsxs)(H, {
            ref: M,
            borderRadius: N,
            focused: L.focused,
            onClick: () => {
                P(() => {
                    (0, r.playClickSound)();
                });
            },
            children: [
                (0, e.jsx)(I, {
                    children: (0, e.jsx)(J, {
                        src: (0, n.default)('editor/icons/device.png')
                    })
                }),
                (0, e.jsxs)(K, {
                    children: [
                        K ? (0, e.jsx)('div', {
                            style: {
                                marginBottom: 2
                            },
                            children: (0, e.jsx)(x.SeasonTicketExclusive, {})
                        }) : null,
                        (0, e.jsx)(L, {
                            level: 5,
                            className: 'allCaps',
                            style: {
                                fontFamily: j.Fonts.FugazOne
                            },
                            children: I
                        }),
                        J ? (0, e.jsx)(M, {
                            children: J
                        }) : null
                    ]
                })
            ]
        });
    };
    const H = i.default.div.attrs({
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
`), a => a.borderRadius, a => a.focused ? '#ffca28' : 'rgba(255, 255, 255, 0.1)'),
        I = (0, i.default)(p.Centered)(z || (z = E`
  height: 50px;
  width: 50px;
  margin-right: 20px;
  flex-shrink: 0;
`)),
        J = i.default.img(A || (A = E`
  max-height: 100%;
  max-width: 100%;
`)),
        K = i.default.div(B || (B = E``)),
        L = (0, i.default)(g.default.Title)(C || (C = E``)),
        M = (0, i.default)(g.default.Text)(D || (D = E``));
}), d.register('7OIg3', function(b, c) {
    a(b.exports, 'default', function() {
        return g;
    });
    var e = d('8kSQZ'),
        f = d('UzdPH');
    d('uPP4W');
    var g = () => (0, e.jsx)(f.default.Text, {
        italic: !0,
        children: 'No results found. Try a different search.'
    });
}), d.register('WSEA7', function(b, c) {
    a(b.exports, 'CanAddDeviceForCurrentMapStyle', function() {
        return g;
    });
    var e = d('BUfP2'),
        f = d('j6MtH');
    const g = a => {
        const {
            deviceTypeId: h
        } = i, j = (0, e.FetchDeviceOptionById)(h);
        return !!j && (!j.supportedMapStyles || j.supportedMapStyles.includes((0, f.GetCurrentMapStyle)()));
    };
}), d.register('j6MtH', function(b, c) {
    a(b.exports, 'GetCurrentMapStyle', function() {
        return f;
    });
    var e = d('7Sbqr');
    const f = () => e.default.session.mapStyle;
}), d.register('Mueq9', function(b, c) {
    a(b.exports, 'default', function() {
        return q;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('h99Nu'),
        g = d('7X8h3'),
        h = d('6qStC'),
        i = d('RJ/fk'),
        j = d('Wgw1x0'),
        k = d('JJQ0+'),
        l = d('0wLl2');
    let m;
    const n = `${ (0, i.CapitalizeFirstLetter)(j.default.device.plural) }`,
        o = a => (0, k.default)(`editor/icons/device_collections/${ a }.svg`),
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
    var q = a => (0, e.jsx)(r, {
        children: p.map(b => (0, e.jsx)(h.default, {
            collection: b,
            isOpen: b.name === a.openCollectionName,
            open: () => a.open(b.name),
            close: () => a.open('')
        }, `device-collection-${ b.name }`))
    });
    const r = f.default.div.attrs({
        className: 'maxWidth'
    })(m || (m = (a => a)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 12px;
  overflow: hidden;
`));
}), d.register('6qStC', function(b, c) {
    a(b.exports, 'default', function() {
        return r;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('h99Nu'),
        g = d('KV+OV'),
        h = d('KlhV/'),
        i = d('UzdPH'),
        j = d('YimJ0'),
        k = d('gSUVO'),
        l = d('5ljpl'),
        m = d('nHOR/');
    let n, o, p = a => a;
    const {
        useToken: q
    } = h.default;
    var r = a => {
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
        } = x;
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsxs)(s, {
                    borderRadius: s,
                    onClick: x.open,
                    children: [
                        (0, e.jsx)(t, {
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
                    open: x.isOpen,
                    onClose: x.close,
                    title: u,
                    width: 500,
                    children: (0, e.jsx)(l.default, {
                        list: w
                    })
                })
            ]
        });
    };
    const s = (0, f.default)(j.CenteredColumn)(n || (n = p`
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
        t = f.default.img(o || (o = p`
  height: 50px;
  margin-bottom: 15px;
  opacity: 0.85;
`));
});