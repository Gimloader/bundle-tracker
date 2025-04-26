function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, r) {
    Object.defineProperty(a, b, {
        get: c,
        set: r,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('ngvPT', function(r, d) {
    var d;
    d = r.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), b(r.exports, 'default', function() {
        return p;
    });
    var e = c('8kSQZ');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('EefFJ'),
        h = c('0CXir'),
        i = c('kneek'),
        j = c('+0Tb/'),
        k = c('b9Bct'),
        l = c('USLU1'),
        m = c('nbHO+');
    let n;
    const o = {
        out: {
            background: 'rgba(0,0,0,0)'
        },
        in: {
            background: 'rgba(0,0,0,0.6)'
        }
    };
    var p = b => {
        const q = (0, l.useIsPresent)(),
            r = () => b.setToHomeScreen();
        return (0, j.default)(a(i).Input.Keyboard.KeyCodes.ESC, r, [r]), (0, e.jsxs)(g.default, {
            children: [
                (0, e.jsx)(q, {
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
    const q = (0, f.default)(k.motion.div).attrs({
        className: 'maxAll flex-center flex-column'
    })(n || (n = (a => a)`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`));
}), c.register('0CXir', function(a, v) {
    b(a.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('b9Bct'),
        g = c('USLU1'),
        h = c('S/jX4'),
        i = c('6zRK6');
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
    var l = () => {
        const m = (0, g.useIsPresent)();
        return (0, d.jsx)(m, {
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
    const m = (0, e.default)(f.motion.div).attrs({
        className: 'medium-shadow flex-column'
    })(j || (j = (a => a)`
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
}), c.register('6zRK6', function(a, v) {
    b(a.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ'),
        e = c('5xmPL'),
        f = c('4/f+U'),
        g = c('uPP4W'),
        h = c('h99Nu'),
        i = c('gSUVO'),
        j = c('8w7Vk'),
        k = c('7X8h3'),
        l = c('Il8g9'),
        m = c('dAmf5');
    let n, o, p = a => a;
    const q = a => `${ a }%`;
    var r = () => {
        const [s, t] = g.useState(1), [u, v] = g.useState(1);
        g.useEffect(() => {
            const w = localStorage.getItem(j.default.musicVolume);
            if (w) {
                let x = Number(w);
                isNaN(x) && (x = 1), t(x);
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
        return (0, d.jsxs)(s, {
            children: [
                (0, l.AmIGameOwner)() ? (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(t, {
                            children: 'Music Volume'
                        }),
                        (0, d.jsx)(e.default, {
                            min: 0,
                            max: 100,
                            step: 1,
                            value: 100 * s,
                            onChange: s => {
                                t(s / 100), localStorage.setItem(j.default.musicVolume, (s / 100).toString()), w();
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
                (0, d.jsx)(t, {
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
    const s = h.default.div(n || (n = p``)),
        t = h.default.div(o || (o = p`
  font-size: 24px;
  font-weight: ${ 0 };
  margin-bottom: 15px;
`), i.FontWeights.Bold);
});