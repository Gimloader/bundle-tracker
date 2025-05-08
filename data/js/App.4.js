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
        return _r;
    });
    var g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    let p;
    const q = {
        out: { background: 'rgba(0,0,0,0)' },
        in: { background: 'rgba(0,0,0,0.6)' }
    };
    var _r = s => {
        const t = (0, n.useIsPresent)(), u = () => s.setToHomeScreen();
        return (0, l.default)(a(k).Input.Keyboard.KeyCodes.ESC, u, [u]), (0, g.jsxs)(i.default, {
            children: [
                (0, g.jsx)(_s, {
                    onClick: u,
                    initial: q.out,
                    animate: q.in,
                    exit: q.out,
                    transition: {
                        duration: t ? 0.3 : 0.2,
                        ease: 'easeOut'
                    },
                    children: (0, g.jsx)(j.default, {})
                }),
                (0, g.jsx)(o.default, { onClick: u })
            ]
        });
    };
    const _s = (0, h.default)(m.motion.div).attrs({ className: 'maxAll flex-center flex-column' })(p || (p = (t => t)`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`));
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l;
    const m = {
        out: {
            y: '100%',
            opacity: 0
        },
        in: {
            y: 0,
            opacity: 1
        }
    };
    var _n = () => {
        const o = (0, i.useIsPresent)();
        return (0, f.jsx)(_o, {
            onClick: p => {
                p.stopPropagation();
            },
            initial: m.out,
            animate: m.in,
            exit: m.out,
            transition: {
                duration: o ? 0.3 : 0.2,
                ease: 'easeOut'
            },
            children: (0, f.jsx)(k.default, {})
        });
    };
    const _o = (0, g.default)(h.motion.div).attrs({ className: 'medium-shadow flex-column' })(l || (l = (p => p)`
  padding: 40px;
  background: rgba(48, 28, 86, 0.97);
  color: ${ 0 };
  width: 90%;
  max-width: 800px;
  height: 80%;
  max-height: 400px;
  border-radius: 10px;
  overflow: hidden;
`), j.default.White);
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    let p, q, r = s => s;
    const s = t => `${ t }%`;
    var _t = () => {
        const [u, v] = i.useState(1), [w, x] = i.useState(1);
        i.useEffect(() => {
            const y = localStorage.getItem(l.default.musicVolume);
            if (y) {
                let z = Number(y);
                isNaN(z) && (z = 1), v(z);
            }
            const z = localStorage.getItem(l.default.soundEffectVolume);
            if (z) {
                let A = Number(z);
                isNaN(A) && (A = 1), x(A);
            }
        }, []);
        const y = i.useCallback((0, h.throttle)(() => {
            (0, o.default)().worldManager.devices.allDevices.forEach(z => {
                if (z.deviceOption.id === m.default.music) {
                    z.onMasterVolumeChange();
                }
                if (z.deviceOption.id === m.default.mapOptions) {
                    z.onMasterVolumeChange();
                }
            });
        }, 200), []);
        return (0, f.jsxs)(_u, {
            children: [
                (0, n.AmIGameOwner)() ? (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)(_v, { children: 'Music Volume' }),
                        (0, f.jsx)(g.default, {
                            min: 0,
                            max: 100,
                            step: 1,
                            value: 100 * u,
                            onChange: z => {
                                v(z / 100), localStorage.setItem(l.default.musicVolume, (z / 100).toString()), y();
                            },
                            tooltip: { formatter: s }
                        }),
                        (0, f.jsx)('div', { style: { height: 20 } })
                    ]
                }) : null,
                (0, f.jsx)(_v, { children: 'Sound Effects Volume' }),
                (0, f.jsx)(g.default, {
                    min: 0,
                    max: 100,
                    step: 1,
                    value: 100 * w,
                    onChange: z => {
                        x(z / 100), localStorage.setItem(l.default.soundEffectVolume, (z / 100).toString());
                    },
                    tooltip: { formatter: s }
                })
            ]
        });
    };
    const _u = j.default.div(p || (p = r``)), _v = j.default.div(q || (q = r`
  font-size: 24px;
  font-weight: ${ 0 };
  margin-bottom: 15px;
`), k.FontWeights.Bold);
});