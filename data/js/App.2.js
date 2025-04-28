function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('CbqDL', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _w;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('0hzx+');
    a('LEQ5w');
    var j = a('Axq+p'),
        k = a('2GeW4'),
        l = a('/Ip0e'),
        m = a('8WvaZ'),
        n = a('ryWAy'),
        o = a('TwXYL'),
        p = a('FytBL'),
        q = a('Ct4sg');
    let r, s, t = e => e;
    const u = {
            out: {
                background: 'rgba(0,0,0,0)'
            },
            in: {
                background: 'rgba(0,0,0,0.6)'
            }
        },
        v = {
            out: {
                y: '100%',
                opacity: 0
            },
            in: {
                y: 0,
                opacity: 1
            }
        };
    var _w = a => {
        const x = (0, p.useIsPresent)() ? 0.3 : 0.2,
            y = () => {
                a.setToHomeScreen();
            };
        return (0, n.default)(e(m).Input.Keyboard.KeyCodes.ESC, y, [y]), (0, i.jsxs)(k.default, {
            children: [
                (0, i.jsx)(_x, {
                    onClick: y,
                    initial: u.out,
                    animate: u.in,
                    exit: u.out,
                    transition: {
                        duration: x,
                        ease: 'easeOut'
                    },
                    children: (0, i.jsx)(_y, {
                        onClick: e => e.stopPropagation(),
                        initial: v.out,
                        animate: v.in,
                        exit: v.out,
                        transition: {
                            duration: x,
                            ease: 'easeOut'
                        },
                        children: (0, i.jsx)(l.default, {})
                    })
                }),
                (0, i.jsx)(q.default, {
                    onClick: y
                })
            ]
        });
    };
    const _x = (0, j.default)(o.motion.div).attrs({
            className: 'maxAll flex-center'
        })(r || (r = t`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`)),
        _y = (0, j.default)(o.motion.div).attrs({
            className: 'medium-shadow'
        })(s || (s = t`
  background: rgba(48, 28, 86, 0.9);
  width: 90%;
  max-width: 800px;
  height: 80%;
  border-radius: 10px;
  overflow: hidden;
`));
});