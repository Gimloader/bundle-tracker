function a(a) {
    return a && a.__esModule ? a.default : a;
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('UNwj3', function(w, x) {
    var c, d, e, f, g;
    c = w.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), d = w.exports, e = 'default', f = function() {
        return v;
    }, Object.defineProperty(d, e, {
        get: f,
        set: g,
        enumerable: !0,
        configurable: !0
    });
    var h = b('8kSQZ');
    b('uPP4W');
    var i = b('h99Nu'),
        j = b('EefFJ'),
        k = b('LyXMx'),
        l = b('kneek'),
        m = b('+0Tb/'),
        n = b('b9Bct'),
        o = b('USLU1'),
        p = b('nbHO+');
    let q, r, s = a => a;
    const t = {
            out: {
                background: 'rgba(0,0,0,0)'
            },
            in: {
                background: 'rgba(0,0,0,0.6)'
            }
        },
        u = {
            out: {
                y: '100%',
                opacity: 0
            },
            in: {
                y: 0,
                opacity: 1
            }
        };
    var v = b => {
        const w = (0, o.useIsPresent)() ? 0.3 : 0.2,
            x = () => {
                b.setToHomeScreen();
            };
        return (0, m.default)(a(l).Input.Keyboard.KeyCodes.ESC, x, [x]), (0, h.jsxs)(j.default, {
            children: [
                (0, h.jsx)(w, {
                    onClick: x,
                    initial: t.out,
                    animate: t.in,
                    exit: t.out,
                    transition: {
                        duration: w,
                        ease: 'easeOut'
                    },
                    children: (0, h.jsx)(x, {
                        onClick: a => a.stopPropagation(),
                        initial: u.out,
                        animate: u.in,
                        exit: u.out,
                        transition: {
                            duration: w,
                            ease: 'easeOut'
                        },
                        children: (0, h.jsx)(k.default, {})
                    })
                }),
                (0, h.jsx)(p.default, {
                    onClick: x
                })
            ]
        });
    };
    const w = (0, i.default)(n.motion.div).attrs({
            className: 'maxAll flex-center'
        })(q || (q = s`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`)),
        x = (0, i.default)(n.motion.div).attrs({
            className: 'medium-shadow'
        })(r || (r = s`
  background: rgba(48, 28, 86, 0.9);
  width: 90%;
  max-width: 800px;
  height: 80%;
  border-radius: 10px;
  overflow: hidden;
`));
});