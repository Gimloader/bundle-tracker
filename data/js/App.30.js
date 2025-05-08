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
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function () {
        return _F;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....'), y = c('.....'), z = c('.....'), A = c('.....'), B = c('.....');
    let C, D, E = F => F;
    var _F = (0, t.observer)(() => {
        const {
                world: {wires: G}
            } = (0, v.default)(), [H, I] = h.useState(G.wires.get(u.default.me.editing.wire.currentlyEditedWireId)), [J, K] = h.useState(void 0 !== H), L = () => {
                (0, i.default)(j.default.none);
            };
        (0, w.useTimeoutWhen)(L, 25, !J), (0, l.default)(a(k).Input.Keyboard.KeyCodes.ESC, L, [L]), (0, q.useInputBlockingUI)();
        const M = N => {
            if ((0, A.playClickSound)(), G.wires.has(H.id)) {
                const O = N(H);
                (0, B.EmitTutorialEvent)({
                    event: B.TutorialEventName.CONFIGURE_WIRE,
                    wire: O
                }), (0, x.default)(O, !0), (0, y.default)({
                    startDevice: O.startDevice,
                    endDevice: O.endDevice,
                    startConnection: O.startConnection,
                    endConnection: O.endConnection
                });
            }
        };
        return h.useEffect(() => {
            const N = (0, z.reaction)(() => u.default.world.wires.wires.get(u.default.me.editing.wire.currentlyEditedWireId), O => {
                O ? (K(!0), I(O)) : K(!1);
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
            initial: { background: 'rgba(0,0,0,0)' },
            animate: { background: 'rgba(0,0,0,0.68)' },
            exit: { background: 'rgba(0,0,0,0)' },
            transition: { duration: 0.2 }
        })(C || (C = E`
  position: relative;
`)), _H = (0, m.default)(n.motion.div).attrs({
            className: 'maxAll flex vc',
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.2 }
        })(D || (D = E`
  padding: 25px;
  backdrop-filter: blur(3px);
`));
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _E;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....'), y = c('.....');
    let z, A, B, C, D = E => E;
    var _E = (0, q.observer)(F => {
        var G;
        const H = !(0, o.default)() || !(0, p.CanAddWires)(), I = 'left' === F.side, J = I ? F.wire.startDevice : F.wire.endDevice, K = (0, s.default)(J), L = (null == K || null === (G = K.deviceOption) || void 0 === G ? void 0 : G.id) === w.default.wireRepeater, M = i.useMemo(() => {
                var N, O, P, Q;
                return ((null == K || null === (N = K.deviceOption) || void 0 === N || null === (O = N.wireConfig) || void 0 === O || null === (P = O[I ? 'out' : 'in']) || void 0 === P || null === (Q = P.connections) || void 0 === Q ? void 0 : Q.map(R => ({
                    id: R.id,
                    name: R.name,
                    minimumRoleLevel: R.minimumRoleLevel,
                    maximumRoleLevel: R.maximumRoleLevel
                }))) || []).filter(R => (0, x.IsRoleLevelBetween)(R.minimumRoleLevel, R.maximumRoleLevel)).map(R => ({
                    id: R.id,
                    name: R.name
                }));
            }, [
                J,
                I
            ]);
        return (0, f.jsxs)(_F, {
            onClick: l.default,
            children: [
                (0, f.jsx)(_G, {
                    children: (0, f.jsx)(_H, {
                        style: { color: k.default.White },
                        level: 4,
                        onClick: () => {
                            K && (t.default.me.editing.device.currentlyEditedDevice = {
                                id: K.id,
                                deviceOptionId: K.deviceOption.id
                            }, (0, u.default)(v.default.editingDevice));
                        },
                        children: (0, r.FetchDeviceName)(J)
                    })
                }),
                L ? I ? (0, f.jsx)(y.ActionWireRepeaterContent, {}) : (0, f.jsx)(y.EventWireRepeaterContent, {}) : (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)(_I, {
                            children: (0, f.jsx)(h.default.Text, {
                                italic: !0,
                                children: I ? 'When this event occurs...' : 'Run this action...'
                            })
                        }),
                        (0, f.jsx)(g.default, {
                            direction: 'vertical',
                            size: 10,
                            className: 'maxWidth',
                            children: M.map(N => {
                                const O = N.id === (I ? F.wire.startConnection : F.wire.endConnection);
                                return (0, f.jsx)(m.default, {
                                    readOnly: H,
                                    onClick: () => {
                                        I ? F.modifyWire(P => ({
                                            ...P,
                                            startConnection: O ? void 0 : N.id
                                        })) : F.modifyWire(P => ({
                                            ...P,
                                            endConnection: O ? void 0 : N.id
                                        }));
                                    },
                                    selected: O,
                                    children: N.name
                                }, N.id);
                            })
                        })
                    ]
                })
            ]
        });
    });
    const _F = j.default.div.attrs({ className: 'flex-column vc scroll-y light-shadow' })(z || (z = D`
  padding: 25px;
  background: rgba(48, 28, 86, 0.85);
  border-radius: 10px;
  width: 40%;
  max-width: 400px;
  max-height: 95%;
`)), _G = j.default.div(A || (A = D`
  text-align: center;
  margin-bottom: 2px;
`)), _H = (0, j.default)(h.default.Title)(B || (B = D`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`)), _I = (0, j.default)(n.Centered).attrs({ className: 'maxWidth' })(C || (C = D`
  margin-bottom: 20px;
  text-align: center;
`));
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _f;
    });
    var _f = g => {
        null == g || g.stopPropagation();
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l, m, n = o => o;
    var _o = p => (0, f.jsxs)(_p, {
        onClick: p.readOnly ? void 0 : p.onClick,
        readOnly: p.readOnly,
        children: [
            (0, f.jsx)(_q, {
                selected: p.selected,
                children: p.selected ? (0, f.jsx)(j.default, { name: 'fas fa-check' }) : null
            }),
            (0, f.jsx)(g.default.Text, {
                style: { fontWeight: p.selected ? k.FontWeights.Bold : k.FontWeights.Normal },
                children: p.children
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
`), q => q.readOnly ? 'not-allowed' : 'pointer'), _q = (0, h.default)(i.Centered)(m || (m = n`
  height: 40px;
  width: 40px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  margin-right: 12px;
  background: ${ 0 };
  flex-shrink: 0;
  transition: background 0.18s ease;
`), r => r.selected ? '#269900' : 'transparent');
}), c.register('.....', function (d, e) {
    b(d.exports, 'FetchDeviceName', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const _i = j => {
        const k = h.default.world.devices.devices.get(j);
        if (!k)
            return '';
        if (k.name)
            return k.name;
        if (k.deviceOption.id === f.default.prop) {
            const l = k.options;
            if (l.propId) {
                var m;
                const n = null === (m = (0, g.default)(l.propId)) || void 0 === m ? void 0 : m.name;
                if (n)
                    return n;
            }
        }
        return n.deviceOption.name;
    };
}), c.register('.....', function (d, e) {
    b(d.exports, 'ActionWireRepeaterContent', function () {
        return _p;
    }), b(d.exports, 'EventWireRepeaterContent', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l, m, n = o => o;
    const o = p => (0, f.jsxs)(_r, {
            children: [
                (0, f.jsx)(_s, { children: (0, f.jsx)(i.default, { name: 'fas fa-plug' }) }),
                (0, f.jsx)(g.default.Text, {
                    style: { color: k.default.White },
                    children: p.children
                })
            ]
        }), _p = () => (0, f.jsx)(o, { children: 'When the wire repeater receives a pulse...' }), _q = () => (0, f.jsx)(o, { children: 'Repeat the wire pulse!' }), _r = (0, h.default)(j.CenteredColumn).attrs({ className: 'maxWidth' })(l || (l = n`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-top: 10px;
  text-align: center;
`)), _s = h.default.div(m || (m = n`
  font-size: 24px;
  margin-bottom: 6px;
`));
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    let j, k, l, m = n => n;
    const n = 'rgba(255,255,255,0.8)';
    var _o = () => (0, f.jsxs)(_p, {
        children: [
            (0, f.jsx)(_q, {}),
            (0, f.jsx)(_r, { children: (0, f.jsx)(i.default, { name: 'fas fa-caret-right' }) })
        ]
    });
    const _p = (0, g.default)(h.Centered)(j || (j = m`
  flex: 1;
  padding: 0px 30px;
`)), _q = g.default.div(k || (k = m`
  height: 4px;
  flex: 1;
  background: ${ 0 };
`), n), _r = g.default.div(l || (l = m`
  flex-shrink: 0;
  color: ${ 0 };
  font-size: 42px;
  line-height: 1;
`), n);
});