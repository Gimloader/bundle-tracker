function a(b) {
    return b && b.__esModule ? b.default : b;
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e, f, g, h, i;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), f = c.exports, g = 'default', h = function () {
        return _x;
    }, Object.defineProperty(f, g, {
        get: h,
        set: i,
        enumerable: !0,
        configurable: !0
    });
    var j = b('.....');
    b('.....');
    var k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....');
    let s, t, u = v => v;
    const v = {
            out: { background: 'rgba(0,0,0,0)' },
            in: { background: 'rgba(0,0,0,0.6)' }
        }, w = {
            out: {
                y: '100%',
                opacity: 0
            },
            in: {
                y: 0,
                opacity: 1
            }
        };
    var _x = y => {
        const z = (0, q.useIsPresent)() ? 0.3 : 0.2, A = () => {
                y.setToHomeScreen();
            };
        return (0, o.default)(a(n).Input.Keyboard.KeyCodes.ESC, A, [A]), (0, j.jsxs)(l.default, {
            children: [
                (0, j.jsx)(_y, {
                    onClick: A,
                    initial: v.out,
                    animate: v.in,
                    exit: v.out,
                    transition: {
                        duration: z,
                        ease: 'easeOut'
                    },
                    children: (0, j.jsx)(_z, {
                        onClick: B => B.stopPropagation(),
                        initial: w.out,
                        animate: w.in,
                        exit: w.out,
                        transition: {
                            duration: z,
                            ease: 'easeOut'
                        },
                        children: (0, j.jsx)(m.default, {})
                    })
                }),
                (0, j.jsx)(r.default, { onClick: A })
            ]
        });
    };
    const _y = (0, k.default)(p.motion.div).attrs({ className: 'maxAll flex-center' })(s || (s = u`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`)), _z = (0, k.default)(p.motion.div).attrs({ className: 'medium-shadow' })(t || (t = u`
  background: rgba(48, 28, 86, 0.9);
  width: 90%;
  max-width: 800px;
  height: 80%;
  border-radius: 10px;
  overflow: hidden;
`));
});