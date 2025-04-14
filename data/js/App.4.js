function e(e) {
    return e && e.__esModule ? e.default : e
}

function t(e, t, o, n) {
    Object.defineProperty(e, t, {
        get: o,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var o = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
o.register("1YA7q", (function(n, a) {
    var i;
    i = n.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), t(n.exports, "default", (function() {
        return h
    }));
    var l = o("hxEiv");
    o("fywoC");
    var u = o("2FDaO"),
        r = o("dmyzc"),
        s = o("etdEM"),
        d = o("c3ah8"),
        f = o("5OQ4z"),
        c = o("6vbUb"),
        m = o("5JgWp"),
        g = o("dSzUP");
    let x;
    const p = {
        out: {
            background: "rgba(0,0,0,0)"
        },
        in: {
            background: "rgba(0,0,0,0.6)"
        }
    };
    var h = t => {
        const o = (0, m.useIsPresent)(),
            n = () => t.setToHomeScreen();
        return (0, f.default)(e(d).Input.Keyboard.KeyCodes.ESC, n, [n]), (0, l.jsxs)(r.default, {
            children: [(0, l.jsx)(v, {
                onClick: n,
                initial: p.out,
                animate: p.in,
                exit: p.out,
                transition: {
                    duration: o ? .3 : .2,
                    ease: "easeOut"
                },
                children: (0, l.jsx)(s.default, {})
            }), (0, l.jsx)(g.default, {
                onClick: n
            })]
        })
    };
    const v = (0, u.default)(c.motion.div).attrs({
        className: "maxAll flex-center flex-column"
    })(x || (x = (e => e)`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`))
})), o.register("etdEM", (function(e, n) {
    t(e.exports, "default", (function() {
        return c
    }));
    var a = o("hxEiv");
    o("fywoC");
    var i = o("2FDaO"),
        l = o("6vbUb"),
        u = o("5JgWp"),
        r = o("8UJqa"),
        s = o("3SLfj");
    let d;
    const f = {
        out: {
            y: "100%",
            opacity: 0
        },
        in: {
            y: 0,
            opacity: 1
        }
    };
    var c = () => {
        const e = (0, u.useIsPresent)();
        return (0, a.jsx)(m, {
            onClick: e => {
                e.stopPropagation()
            },
            initial: f.out,
            animate: f.in,
            exit: f.out,
            transition: {
                duration: e ? .3 : .2,
                ease: "easeOut"
            },
            children: (0, a.jsx)(s.default, {})
        })
    };
    const m = (0, i.default)(l.motion.div).attrs({
        className: "medium-shadow flex-column"
    })(d || (d = (e => e)`
  padding: 40px;
  background: rgba(48, 28, 86, 0.97);
  color: ${0};
  width: 90%;
  max-width: 800px;
  height: 80%;
  max-height: 400px;
  border-radius: 10px;
  overflow: hidden;
`), r.default.White)
})), o.register("3SLfj", (function(e, n) {
    t(e.exports, "default", (function() {
        return v
    }));
    var a = o("hxEiv"),
        i = o("5wngH"),
        l = o("cmvpZ"),
        u = o("fywoC"),
        r = o("2FDaO"),
        s = o("69SUA"),
        d = o("6wB0x"),
        f = o("z5iun"),
        c = o("lnD8D"),
        m = o("gwuwo");
    let g, x, p = e => e;
    const h = e => `${e}%`;
    var v = () => {
        const [e, t] = u.useState(1), [o, n] = u.useState(1);
        u.useEffect((() => {
            const e = localStorage.getItem(d.default.musicVolume);
            if (e) {
                let o = Number(e);
                isNaN(o) && (o = 1), t(o)
            }
            const o = localStorage.getItem(d.default.soundEffectVolume);
            if (o) {
                let e = Number(o);
                isNaN(e) && (e = 1), n(e)
            }
        }), []);
        const r = u.useCallback((0, l.throttle)((() => {
            (0, m.default)().worldManager.devices.allDevices.forEach((e => {
                if (e.deviceOption.id === f.default.music) {
                    e.onMasterVolumeChange()
                }
                if (e.deviceOption.id === f.default.mapOptions) {
                    e.onMasterVolumeChange()
                }
            }))
        }), 200), []);
        return (0, a.jsxs)(b, {
            children: [(0, c.AmIGameOwner)() ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(w, {
                    children: "Music Volume"
                }), (0, a.jsx)(i.default, {
                    min: 0,
                    max: 100,
                    step: 1,
                    value: 100 * e,
                    onChange: e => {
                        t(e / 100), localStorage.setItem(d.default.musicVolume, (e / 100).toString()), r()
                    },
                    tooltip: {
                        formatter: h
                    }
                }), (0, a.jsx)("div", {
                    style: {
                        height: 20
                    }
                })]
            }) : null, (0, a.jsx)(w, {
                children: "Sound Effects Volume"
            }), (0, a.jsx)(i.default, {
                min: 0,
                max: 100,
                step: 1,
                value: 100 * o,
                onChange: e => {
                    n(e / 100), localStorage.setItem(d.default.soundEffectVolume, (e / 100).toString())
                },
                tooltip: {
                    formatter: h
                }
            })]
        })
    };
    const b = r.default.div(g || (g = p``)),
        w = r.default.div(x || (x = p`
  font-size: 24px;
  font-weight: ${0};
  margin-bottom: 15px;
`), s.FontWeights.Bold)
}));