function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, G) {
    Object.defineProperty(a, b, {
        get: c,
        set: G,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('uSlJQ', function(G, H) {
    var d;
    d = G.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), b(G.exports, 'default', function() {
        return D;
    });
    var e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('TnPB+'),
        h = c('iAe3o'),
        i = c('kneek'),
        j = c('+0Tb/'),
        k = c('h99Nu'),
        l = c('b9Bct'),
        m = c('EefFJ'),
        n = c('nbHO+'),
        o = c('xck3q'),
        p = c('jHF03'),
        q = c('oNGYJ'),
        r = c('Vlfxs'),
        s = c('7Sbqr'),
        t = c('am7L5'),
        u = c('WRy6v'),
        v = c('Tx7Z2'),
        w = c('FXmIw'),
        x = c('UnUp5'),
        y = c('kcx+B'),
        z = c('D0n26');
    let A, B, C = a => a;
    var D = (0, r.observer)(() => {
        const {
            world: {
                wires: E
            }
        } = (0, t.default)(), [F, G] = f.useState(E.wires.get(s.default.me.editing.wire.currentlyEditedWireId)), [H, I] = f.useState(void 0 !== F), J = () => {
            (0, g.default)(h.default.none);
        };
        (0, u.useTimeoutWhen)(J, 25, !H), (0, j.default)(a(i).Input.Keyboard.KeyCodes.ESC, J, [J]), (0, o.useInputBlockingUI)();
        const K = a => {
            if ((0, y.playClickSound)(), E.wires.has(F.id)) {
                const L = a(F);
                (0, z.EmitTutorialEvent)({
                    event: z.TutorialEventName.CONFIGURE_WIRE,
                    wire: L
                }), (0, v.default)(L, !0), (0, w.default)({
                    startDevice: L.startDevice,
                    endDevice: L.endDevice,
                    startConnection: L.startConnection,
                    endConnection: L.endConnection
                });
            }
        };
        return f.useEffect(() => {
            const L = (0, x.reaction)(() => s.default.world.wires.wires.get(s.default.me.editing.wire.currentlyEditedWireId), L => {
                L ? (I(!0), G(L)) : I(!1);
            });
            return () => L();
        }, []), F ? (0, e.jsx)(m.default, {
            className: 'maxAll',
            children: (0, e.jsx)(E, {
                onClick: J,
                children: (0, e.jsxs)(F, {
                    children: [
                        (0, e.jsx)(p.default, {
                            wire: F,
                            side: 'left',
                            modifyWire: K
                        }),
                        (0, e.jsx)(q.default, {}),
                        (0, e.jsx)(p.default, {
                            wire: F,
                            side: 'right',
                            modifyWire: K
                        }),
                        (0, e.jsx)(n.default, {})
                    ]
                })
            })
        }) : null;
    });
    const E = (0, k.default)(l.motion.div).attrs({
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
        })(A || (A = C`
  position: relative;
`)),
        F = (0, k.default)(l.motion.div).attrs({
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
        })(B || (B = C`
  padding: 25px;
  backdrop-filter: blur(3px);
`));
}), c.register('jHF03', function(a, F) {
    b(a.exports, 'default', function() {
        return C;
    });
    var d = c('8kSQZ'),
        e = c('5nJMd26'),
        f = c('UzdPH'),
        g = c('uPP4W'),
        h = c('h99Nu'),
        i = c('lmfrI'),
        j = c('rFtvN1'),
        k = c('mtN/O'),
        l = c('YimJ0'),
        m = c('c8w5r'),
        n = c('zNNO2'),
        o = c('Vlfxs'),
        p = c('YARc1'),
        q = c('h1T4n'),
        r = c('7Sbqr'),
        s = c('TnPB+'),
        t = c('iAe3o'),
        u = c('7X8h3'),
        v = c('2hh8R'),
        w = c('YtYHt');
    let x, y, z, A, B = a => a;
    var C = (0, o.observer)(a => {
        var D;
        const E = !(0, m.default)() || !(0, n.CanAddWires)(),
            F = 'left' === a.side,
            G = F ? a.wire.startDevice : a.wire.endDevice,
            H = (0, q.default)(G),
            I = (null == H || null === (D = H.deviceOption) || void 0 === D ? void 0 : D.id) === u.default.wireRepeater,
            J = g.useMemo(() => {
                var K, L, M, N;
                return ((null == H || null === (K = H.deviceOption) || void 0 === K || null === (L = K.wireConfig) || void 0 === L || null === (M = L[F ? 'out' : 'in']) || void 0 === M || null === (N = M.connections) || void 0 === N ? void 0 : N.map(K => ({
                    id: K.id,
                    name: K.name,
                    minimumRoleLevel: K.minimumRoleLevel,
                    maximumRoleLevel: K.maximumRoleLevel
                }))) || []).filter(K => (0, v.IsRoleLevelBetween)(K.minimumRoleLevel, K.maximumRoleLevel)).map(K => ({
                    id: K.id,
                    name: K.name
                }));
            }, [
                G,
                F
            ]);
        return (0, d.jsxs)(D, {
            onClick: j.default,
            children: [
                (0, d.jsx)(E, {
                    children: (0, d.jsx)(F, {
                        style: {
                            color: i.default.White
                        },
                        level: 4,
                        onClick: () => {
                            H && (r.default.me.editing.device.currentlyEditedDevice = {
                                id: H.id,
                                deviceOptionId: H.deviceOption.id
                            }, (0, s.default)(t.default.editingDevice));
                        },
                        children: (0, p.FetchDeviceName)(G)
                    })
                }),
                I ? F ? (0, d.jsx)(w.ActionWireRepeaterContent, {}) : (0, d.jsx)(w.EventWireRepeaterContent, {}) : (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(G, {
                            children: (0, d.jsx)(f.default.Text, {
                                italic: !0,
                                children: F ? 'When this event occurs...' : 'Run this action...'
                            })
                        }),
                        (0, d.jsx)(e.default, {
                            direction: 'vertical',
                            size: 10,
                            className: 'maxWidth',
                            children: J.map(D => {
                                const K = D.id === (F ? a.wire.startConnection : a.wire.endConnection);
                                return (0, d.jsx)(k.default, {
                                    readOnly: E,
                                    onClick: () => {
                                        F ? a.modifyWire(a => ({
                                            ...a,
                                            startConnection: K ? void 0 : D.id
                                        })) : a.modifyWire(a => ({
                                            ...a,
                                            endConnection: K ? void 0 : D.id
                                        }));
                                    },
                                    selected: K,
                                    children: D.name
                                }, D.id);
                            })
                        })
                    ]
                })
            ]
        });
    });
    const D = h.default.div.attrs({
            className: 'flex-column vc scroll-y light-shadow'
        })(x || (x = B`
  padding: 25px;
  background: rgba(48, 28, 86, 0.85);
  border-radius: 10px;
  width: 40%;
  max-width: 400px;
  max-height: 95%;
`)),
        E = h.default.div(y || (y = B`
  text-align: center;
  margin-bottom: 2px;
`)),
        F = (0, h.default)(f.default.Title)(z || (z = B`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`)),
        G = (0, h.default)(l.Centered).attrs({
            className: 'maxWidth'
        })(A || (A = B`
  margin-bottom: 20px;
  text-align: center;
`));
}), c.register('rFtvN1', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var d = a => {
        null == a || a.stopPropagation();
    };
}), c.register('mtN/O', function(a, n) {
    b(a.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('UzdPH');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('YimJ0'),
        h = c('iMnBi'),
        i = c('gSUVO');
    let j, k, l = a => a;
    var m = a => (0, d.jsxs)(n, {
        onClick: a.readOnly ? void 0 : a.onClick,
        readOnly: a.readOnly,
        children: [
            (0, d.jsx)(o, {
                selected: a.selected,
                children: a.selected ? (0, d.jsx)(h.default, {
                    name: 'fas fa-check'
                }) : null
            }),
            (0, d.jsx)(e.default.Text, {
                style: {
                    fontWeight: a.selected ? i.FontWeights.Bold : i.FontWeights.Normal
                },
                children: a.children
            })
        ]
    });
    const n = (0, f.default)(g.VerticallyCentered)(j || (j = l`
  padding: 10px 20px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.23s ease;
  cursor: ${ 0 };
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`), a => a.readOnly ? 'not-allowed' : 'pointer'),
        o = (0, f.default)(g.Centered)(k || (k = l`
  height: 40px;
  width: 40px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  margin-right: 12px;
  background: ${ 0 };
  flex-shrink: 0;
  transition: background 0.18s ease;
`), a => a.selected ? '#269900' : 'transparent');
}), c.register('YARc1', function(a, n) {
    b(a.exports, 'FetchDeviceName', function() {
        return g;
    });
    var d = c('7X8h3'),
        e = c('ZH/OP'),
        f = c('7Sbqr');
    const g = a => {
        const h = f.default.world.devices.devices.get(a);
        if (!h)
            return '';
        if (h.name)
            return h.name;
        if (h.deviceOption.id === d.default.prop) {
            const i = h.options;
            if (i.propId) {
                var j;
                const k = null === (j = (0, e.default)(i.propId)) || void 0 === j ? void 0 : j.name;
                if (k)
                    return k;
            }
        }
        return h.deviceOption.name;
    };
}), c.register('YtYHt', function(a, n) {
    b(a.exports, 'ActionWireRepeaterContent', function() {
        return n;
    }), b(a.exports, 'EventWireRepeaterContent', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('UzdPH');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('iMnBi'),
        h = c('YimJ0'),
        i = c('S/jX4');
    let j, k, l = a => a;
    const m = a => (0, d.jsxs)(p, {
            children: [
                (0, d.jsx)(q, {
                    children: (0, d.jsx)(g.default, {
                        name: 'fas fa-plug'
                    })
                }),
                (0, d.jsx)(e.default.Text, {
                    style: {
                        color: i.default.White
                    },
                    children: a.children
                })
            ]
        }),
        n = () => (0, d.jsx)(m, {
            children: 'When the wire repeater receives a pulse...'
        }),
        o = () => (0, d.jsx)(m, {
            children: 'Repeat the wire pulse!'
        }),
        p = (0, f.default)(h.CenteredColumn).attrs({
            className: 'maxWidth'
        })(j || (j = l`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-top: 10px;
  text-align: center;
`)),
        q = f.default.div(k || (k = l`
  font-size: 24px;
  margin-bottom: 6px;
`));
}), c.register('oNGYJ', function(a, n) {
    b(a.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('YimJ0'),
        g = c('iMnBi');
    let h, i, j, k = a => a;
    const l = 'rgba(255,255,255,0.8)';
    var m = () => (0, d.jsxs)(n, {
        children: [
            (0, d.jsx)(o, {}),
            (0, d.jsx)(p, {
                children: (0, d.jsx)(g.default, {
                    name: 'fas fa-caret-right'
                })
            })
        ]
    });
    const n = (0, e.default)(f.Centered)(h || (h = k`
  flex: 1;
  padding: 0px 30px;
`)),
        o = e.default.div(i || (i = k`
  height: 4px;
  flex: 1;
  background: ${ 0 };
`), l),
        p = e.default.div(j || (j = k`
  flex-shrink: 0;
  color: ${ 0 };
  font-size: 42px;
  line-height: 1;
`), l);
});