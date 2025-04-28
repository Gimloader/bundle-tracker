function a(b) {
    return b && b.__esModule ? b.default : b;
}

function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('vRW6w', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _t(b.exports, 'default', function() {
        return _p;
    });
    var e = a('0hzx+');
    a('LEQ5w');
    var f = a('Axq+p'),
        g = a('2GeW4'),
        h = a('4hxnr'),
        i = a('8WvaZ'),
        j = a('ryWAy'),
        k = a('TwXYL'),
        l = a('FytBL'),
        m = a('Ct4sg');
    let n;
    const o = {
        out: {
            background: 'rgba(0,0,0,0)'
        },
        in: {
            background: 'rgba(0,0,0,0.6)'
        }
    };
    var _p = _t => {
        const q = (0, l.useIsPresent)(),
            r = () => _t.setToHomeScreen();
        return (0, j.default)(_b(i).Input.Keyboard.KeyCodes.ESC, r, [r]), (0, e.jsxs)(g.default, {
            children: [
                (0, e.jsx)(_q, {
                    onClick: r,
                    initial: o.out,
                    animate: o.in,
                    exit: o.out,
                    transition: {
                        duration: q ? 0.3 : 0.2,
                        ease: 'easeOut'
                    },
                    children: (0, e.jsx)(h.default, {})
                }),
                (0, e.jsx)(m.default, {
                    onClick: r
                })
            ]
        });
    };
    const _q = (0, f.default)(k.motion.div).attrs({
        className: 'maxAll flex-center flex-column'
    })(n || (n = (_b => _b)`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`));
}), a.register('4hxnr', function(_b, c) {
    _t(_b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('TwXYL'),
        g = a('FytBL'),
        h = a('vShe/'),
        i = a('5pOCJ');
    let j;
    const k = {
        out: {
            y: '100%',
            opacity: 0
        },
        in: {
            y: 0,
            opacity: 1
        }
    };
    var _l = () => {
        const m = (0, g.useIsPresent)();
        return (0, d.jsx)(_m, {
            onClick: m => {
                m.stopPropagation();
            },
            initial: k.out,
            animate: k.in,
            exit: k.out,
            transition: {
                duration: m ? 0.3 : 0.2,
                ease: 'easeOut'
            },
            children: (0, d.jsx)(i.default, {})
        });
    };
    const _m = (0, e.default)(f.motion.div).attrs({
        className: 'medium-shadow flex-column'
    })(j || (j = (_b => _b)`
  padding: 40px;
  background: rgba(48, 28, 86, 0.97);
  color: ${ 0 };
  width: 90%;
  max-width: 800px;
  height: 80%;
  max-height: 400px;
  border-radius: 10px;
  overflow: hidden;
`), h.default.White);
}), a.register('5pOCJ', function(b, c) {
    _t(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('80XJ3'),
        f = a('4iV4e'),
        g = a('LEQ5w'),
        h = a('Axq+p'),
        i = a('b5kvC'),
        j = a('103yb'),
        k = a('EqyfB'),
        l = a('i3kcr'),
        m = a('D5xLI');
    let n, o, p = b => b;
    const q = b => `${ b }%`;
    var _r = () => {
        const [s, _t] = g.useState(1), [u, v] = g.useState(1);
        g.useEffect(() => {
            const w = localStorage.getItem(j.default.musicVolume);
            if (w) {
                let x = Number(w);
                isNaN(x) && (x = 1), _t(x);
            }
            const x = localStorage.getItem(j.default.soundEffectVolume);
            if (x) {
                let y = Number(x);
                isNaN(y) && (y = 1), v(y);
            }
        }, []);
        const w = g.useCallback((0, f.throttle)(() => {
            (0, m.default)().worldManager.devices.allDevices.forEach(s => {
                if (s.deviceOption.id === k.default.music) {
                    s.onMasterVolumeChange();
                }
                if (s.deviceOption.id === k.default.mapOptions) {
                    s.onMasterVolumeChange();
                }
            });
        }, 200), []);
        return (0, d.jsxs)(_s, {
            children: [
                (0, l.AmIGameOwner)() ? (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(_t, {
                            children: 'Music Volume'
                        }),
                        (0, d.jsx)(e.default, {
                            min: 0,
                            max: 100,
                            step: 1,
                            value: 100 * s,
                            onChange: s => {
                                _t(s / 100), localStorage.setItem(j.default.musicVolume, (s / 100).toString()), w();
                            },
                            tooltip: {
                                formatter: q
                            }
                        }),
                        (0, d.jsx)('div', {
                            style: {
                                height: 20
                            }
                        })
                    ]
                }) : null,
                (0, d.jsx)(_t, {
                    children: 'Sound Effects Volume'
                }),
                (0, d.jsx)(e.default, {
                    min: 0,
                    max: 100,
                    step: 1,
                    value: 100 * u,
                    onChange: s => {
                        v(s / 100), localStorage.setItem(j.default.soundEffectVolume, (s / 100).toString());
                    },
                    tooltip: {
                        formatter: q
                    }
                })
            ]
        });
    };
    const _s = h.default.div(n || (n = p``)),
        _t = h.default.div(o || (o = p`
  font-size: 24px;
  font-weight: ${ 0 };
  margin-bottom: 15px;
`), i.FontWeights.Bold);
});