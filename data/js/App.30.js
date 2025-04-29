function a(b) {
    return b && b.__esModule ? b.default : b;
}

function b(c, d, e, f) {
    Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('PV48t', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function() {
        return _F;
    });
    var g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('LihP5'),
        j = c('SxihY'),
        k = c('ddhGF'),
        l = c('J8L14'),
        m = c('u4s09'),
        n = c('9aZ6t'),
        o = c('UkybP'),
        p = c('V/q8i'),
        q = c('eLsOE'),
        r = c('lzfvR'),
        s = c('mrC61'),
        t = c('6jmvl'),
        u = c('fI6of'),
        v = c('K/2xB'),
        w = c('6TqRT'),
        x = c('j6t4M'),
        y = c('Em3Pz'),
        z = c('JkQCT'),
        A = c('y1oBc'),
        B = c('qIlyp');
    let C, D, E = a => a;
    var _F = (0, t.observer)(() => {
        const {
            world: {
                wires: G
            }
        } = (0, v.default)(), [H, I] = h.useState(G.wires.get(u.default.me.editing.wire.currentlyEditedWireId)), [J, K] = h.useState(void 0 !== H), L = () => {
            (0, i.default)(j.default.none);
        };
        (0, w.useTimeoutWhen)(L, 25, !J), (0, l.default)(a(k).Input.Keyboard.KeyCodes.ESC, L, [L]), (0, q.useInputBlockingUI)();
        const M = a => {
            if ((0, A.playClickSound)(), G.wires.has(H.id)) {
                const N = a(H);
                (0, B.EmitTutorialEvent)({
                    event: B.TutorialEventName.CONFIGURE_WIRE,
                    wire: N
                }), (0, x.default)(N, !0), (0, y.default)({
                    startDevice: N.startDevice,
                    endDevice: N.endDevice,
                    startConnection: N.startConnection,
                    endConnection: N.endConnection
                });
            }
        };
        return h.useEffect(() => {
            const N = (0, z.reaction)(() => u.default.world.wires.wires.get(u.default.me.editing.wire.currentlyEditedWireId), N => {
                N ? (K(!0), I(N)) : K(!1);
            });
            return () => N();
        }, []), H ? (0, g.jsx)(o.default, {
            className: 'maxAll',
            children: (0, g.jsx)(_G, {
                onClick: L,
                children: (0, g.jsxs)(_H, {
                    children: [
                        (0, g.jsx)(r.default, {
                            wire: H,
                            side: 'left',
                            modifyWire: M
                        }),
                        (0, g.jsx)(s.default, {}),
                        (0, g.jsx)(r.default, {
                            wire: H,
                            side: 'right',
                            modifyWire: M
                        }),
                        (0, g.jsx)(p.default, {})
                    ]
                })
            })
        }) : null;
    });
    const _G = (0, m.default)(n.motion.div).attrs({
            className: 'maxAll flex-center',
            initial: {
                background: 'rgba(0,0,0,0)'
            },
            animate: {
                background: 'rgba(0,0,0,0.68)'
            },
            exit: {
                background: 'rgba(0,0,0,0)'
            },
            transition: {
                duration: 0.2
            }
        })(C || (C = E`
  position: relative;
`)),
        _H = (0, m.default)(n.motion.div).attrs({
            className: 'maxAll flex vc',
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.2
            }
        })(D || (D = E`
  padding: 25px;
  backdrop-filter: blur(3px);
`));
}), c.register('lzfvR', function(d, e) {
    b(d.exports, 'default', function() {
        return _E;
    });
    var f = c('gRbUn'),
        g = c('E2AMI26'),
        h = c('22RS1'),
        i = c('O0Kav'),
        j = c('u4s09'),
        k = c('8KqQ+'),
        l = c('u5JEh1'),
        m = c('AFxI/'),
        n = c('MgONH'),
        o = c('9N6Bn'),
        p = c('jw8ic'),
        q = c('6jmvl'),
        r = c('+FJvw1'),
        s = c('5u9xs'),
        t = c('fI6of'),
        u = c('LihP5'),
        v = c('SxihY'),
        w = c('OFuf70'),
        x = c('PlfjJ'),
        y = c('M+JYS');
    let z, A, B, C, D = d => d;
    var _E = (0, q.observer)(d => {
        var F;
        const G = !(0, o.default)() || !(0, p.CanAddWires)(),
            H = 'left' === d.side,
            I = H ? d.wire.startDevice : d.wire.endDevice,
            J = (0, s.default)(I),
            K = (null == J || null === (F = J.deviceOption) || void 0 === F ? void 0 : F.id) === w.default.wireRepeater,
            L = i.useMemo(() => {
                var M, N, O, P;
                return ((null == J || null === (M = J.deviceOption) || void 0 === M || null === (N = M.wireConfig) || void 0 === N || null === (O = N[H ? 'out' : 'in']) || void 0 === O || null === (P = O.connections) || void 0 === P ? void 0 : P.map(M => ({
                    id: M.id,
                    name: M.name,
                    minimumRoleLevel: M.minimumRoleLevel,
                    maximumRoleLevel: M.maximumRoleLevel
                }))) || []).filter(M => (0, x.IsRoleLevelBetween)(M.minimumRoleLevel, M.maximumRoleLevel)).map(M => ({
                    id: M.id,
                    name: M.name
                }));
            }, [
                I,
                H
            ]);
        return (0, f.jsxs)(_F, {
            onClick: l.default,
            children: [
                (0, f.jsx)(_G, {
                    children: (0, f.jsx)(_H, {
                        style: {
                            color: k.default.White
                        },
                        level: 4,
                        onClick: () => {
                            J && (t.default.me.editing.device.currentlyEditedDevice = {
                                id: J.id,
                                deviceOptionId: J.deviceOption.id
                            }, (0, u.default)(v.default.editingDevice));
                        },
                        children: (0, r.FetchDeviceName)(I)
                    })
                }),
                K ? H ? (0, f.jsx)(y.ActionWireRepeaterContent, {}) : (0, f.jsx)(y.EventWireRepeaterContent, {}) : (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)(_I, {
                            children: (0, f.jsx)(h.default.Text, {
                                italic: !0,
                                children: H ? 'When this event occurs...' : 'Run this action...'
                            })
                        }),
                        (0, f.jsx)(g.default, {
                            direction: 'vertical',
                            size: 10,
                            className: 'maxWidth',
                            children: L.map(F => {
                                const M = F.id === (H ? d.wire.startConnection : d.wire.endConnection);
                                return (0, f.jsx)(m.default, {
                                    readOnly: G,
                                    onClick: () => {
                                        H ? d.modifyWire(d => ({
                                            ...d,
                                            startConnection: M ? void 0 : F.id
                                        })) : d.modifyWire(d => ({
                                            ...d,
                                            endConnection: M ? void 0 : F.id
                                        }));
                                    },
                                    selected: M,
                                    children: F.name
                                }, F.id);
                            })
                        })
                    ]
                })
            ]
        });
    });
    const _F = j.default.div.attrs({
            className: 'flex-column vc scroll-y light-shadow'
        })(z || (z = D`
  padding: 25px;
  background: rgba(48, 28, 86, 0.85);
  border-radius: 10px;
  width: 40%;
  max-width: 400px;
  max-height: 95%;
`)),
        _G = j.default.div(A || (A = D`
  text-align: center;
  margin-bottom: 2px;
`)),
        _H = (0, j.default)(h.default.Title)(B || (B = D`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`)),
        _I = (0, j.default)(n.Centered).attrs({
            className: 'maxWidth'
        })(C || (C = D`
  margin-bottom: 20px;
  text-align: center;
`));
}), c.register('u5JEh1', function(d, e) {
    b(d.exports, 'default', function() {
        return _f;
    });
    var _f = d => {
        null == d || d.stopPropagation();
    };
}), c.register('AFxI/', function(d, e) {
    b(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn'),
        g = c('22RS1');
    c('O0Kav');
    var h = c('u4s09'),
        i = c('MgONH'),
        j = c('t52Ep'),
        k = c('Eh2Wh');
    let l, m, n = d => d;
    var _o = d => (0, f.jsxs)(_p, {
        onClick: d.readOnly ? void 0 : d.onClick,
        readOnly: d.readOnly,
        children: [
            (0, f.jsx)(_q, {
                selected: d.selected,
                children: d.selected ? (0, f.jsx)(j.default, {
                    name: 'fas fa-check'
                }) : null
            }),
            (0, f.jsx)(g.default.Text, {
                style: {
                    fontWeight: d.selected ? k.FontWeights.Bold : k.FontWeights.Normal
                },
                children: d.children
            })
        ]
    });
    const _p = (0, h.default)(i.VerticallyCentered)(l || (l = n`
  padding: 10px 20px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.23s ease;
  cursor: ${ 0 };
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`), d => d.readOnly ? 'not-allowed' : 'pointer'),
        _q = (0, h.default)(i.Centered)(m || (m = n`
  height: 40px;
  width: 40px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  margin-right: 12px;
  background: ${ 0 };
  flex-shrink: 0;
  transition: background 0.18s ease;
`), d => d.selected ? '#269900' : 'transparent');
}), c.register('+FJvw1', function(d, e) {
    b(d.exports, 'FetchDeviceName', function() {
        return _i;
    });
    var f = c('OFuf70'),
        g = c('ZMrtj'),
        h = c('fI6of');
    const _i = d => {
        const j = h.default.world.devices.devices.get(d);
        if (!j)
            return '';
        if (j.name)
            return j.name;
        if (j.deviceOption.id === f.default.prop) {
            const k = j.options;
            if (k.propId) {
                var l;
                const m = null === (l = (0, g.default)(k.propId)) || void 0 === l ? void 0 : l.name;
                if (m)
                    return m;
            }
        }
        return j.deviceOption.name;
    };
}), c.register('M+JYS', function(d, e) {
    b(d.exports, 'ActionWireRepeaterContent', function() {
        return _p;
    }), b(d.exports, 'EventWireRepeaterContent', function() {
        return _q;
    });
    var f = c('gRbUn'),
        g = c('22RS1');
    c('O0Kav');
    var h = c('u4s09'),
        i = c('t52Ep'),
        j = c('MgONH'),
        k = c('HOIhZ');
    let l, m, n = d => d;
    const o = d => (0, f.jsxs)(_r, {
            children: [
                (0, f.jsx)(_s, {
                    children: (0, f.jsx)(i.default, {
                        name: 'fas fa-plug'
                    })
                }),
                (0, f.jsx)(g.default.Text, {
                    style: {
                        color: k.default.White
                    },
                    children: d.children
                })
            ]
        }),
        _p = () => (0, f.jsx)(o, {
            children: 'When the wire repeater receives a pulse...'
        }),
        _q = () => (0, f.jsx)(o, {
            children: 'Repeat the wire pulse!'
        }),
        _r = (0, h.default)(j.CenteredColumn).attrs({
            className: 'maxWidth'
        })(l || (l = n`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-top: 10px;
  text-align: center;
`)),
        _s = h.default.div(m || (m = n`
  font-size: 24px;
  margin-bottom: 6px;
`));
}), c.register('mrC61', function(d, e) {
    b(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09'),
        h = c('MgONH'),
        i = c('t52Ep');
    let j, k, l, m = d => d;
    const n = 'rgba(255,255,255,0.8)';
    var _o = () => (0, f.jsxs)(_p, {
        children: [
            (0, f.jsx)(_q, {}),
            (0, f.jsx)(_r, {
                children: (0, f.jsx)(i.default, {
                    name: 'fas fa-caret-right'
                })
            })
        ]
    });
    const _p = (0, g.default)(h.Centered)(j || (j = m`
  flex: 1;
  padding: 0px 30px;
`)),
        _q = g.default.div(k || (k = m`
  height: 4px;
  flex: 1;
  background: ${ 0 };
`), n),
        _r = g.default.div(l || (l = m`
  flex-shrink: 0;
  color: ${ 0 };
  font-size: 42px;
  line-height: 1;
`), n);
});