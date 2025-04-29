function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('NPpF0', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'ANIMATION_DURATION', function() {
        return _s;
    }), a(c.exports, 'default', function() {
        return _t;
    });
    var f = b('gRbUn'),
        g = b('O0Kav'),
        h = b('wjTt6'),
        i = b('u4s09'),
        j = b('9aZ6t'),
        k = b('J8L14'),
        l = b('UkybP'),
        m = b('WrYxt'),
        n = b('BkBfo'),
        o = b('NwGMQ');
    let p, q, r = a => a;
    const _s = 0.3;
    var _t = (0, n.withDeviceUIWrapper)(a => {
        const u = g.useCallback(() => {
            a.closableByUser && a.close();
        }, [a.closableByUser]);
        (0, k.default)(Phaser.Input.Keyboard.KeyCodes.ESC, u, [u]);
        return (0, f.jsx)(_u, {
            children: (0, f.jsx)(_v, {
                initial: {
                    background: 'rgba(0,0,0,0)'
                },
                animate: {
                    background: 'rgba(0,0,0,0.7)'
                },
                exit: {
                    background: 'rgba(0,0,0,0)'
                },
                transition: {
                    duration: _s
                },
                children: (() => {
                    const v = {
                        ...a,
                        isBanner: a.style === m.CodeUIStyle.banner,
                        close: u,
                        code: a.code
                    };
                    return (0, f.jsx)(h.default, {
                        ...v
                    });
                })()
            })
        });
    });
    const _u = (0, i.default)(l.default).attrs({
            className: 'maxAll'
        })(p || (p = r`
  overflow: hidden;
  z-index: ${ 0 };
`), o.default.primaryContent),
        _v = (0, i.default)(j.motion.div).attrs({
            className: 'maxAll'
        })(q || (q = r``));
}), b.register('wjTt6', function(c, d) {
    a(c.exports, 'default', function() {
        return _t;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('9aZ6t'),
        h = b('hxGRM'),
        i = b('u4s09'),
        j = b('NPpF0'),
        k = b('SvCqx'),
        l = b('V/q8i'),
        m = b('quE27'),
        n = b('UYyWT');
    let o, p, q = a => a;
    const r = {
            y: ' 100%',
            opacity: 0
        },
        s = {
            y: '0%',
            opacity: 1
        };
    var _t = a => {
        const u = (0, h.useIsPresent)(),
            [v, w] = (0, m.useBoolean)(!1),
            x = (0, n.GetContrastColor)(a.defaultBackgroundColor),
            y = f.useMemo(() => {
                let z = {
                    background: a.defaultBackgroundColor,
                    color: x,
                    fontFamily: a.defaultFontFamily
                };
                if (a.isBanner) {
                    const A = {
                        padding: '30px 40px',
                        width: '100%',
                        maxWidth: '100%',
                        borderRadius: 0
                    };
                    return {
                        ...z,
                        ...A
                    };
                }
                return {
                    ...z,
                    padding: '40px 30px',
                    width: '90%',
                    maxWidth: 650,
                    borderRadius: 5
                };
            }, [
                a.defaultBackgroundColor,
                a.isBanner
            ]);
        return (0, e.jsxs)(_u, {
            onClick: () => {
                u && v && a.close();
            },
            style: a.isBanner ? {
                alignItems: 'flex-end',
                justifyContent: 'center'
            } : {
                justifyContent: 'center',
                alignItems: 'center'
            },
            children: [
                (0, e.jsx)(_v, {
                    initial: r,
                    animate: s,
                    exit: r,
                    transition: {
                        duration: j.ANIMATION_DURATION,
                        ease: 'easeOut'
                    },
                    onClick: a => a.stopPropagation(),
                    onAnimationComplete: w,
                    style: y,
                    children: (0, e.jsx)(k.default, {
                        ...a
                    })
                }),
                a.closableByUser ? (0, e.jsx)(l.default, {
                    onClick: a.close
                }) : null
            ]
        });
    };
    const _u = i.default.div.attrs({
            className: 'maxAll flex'
        })(o || (o = q``)),
        _v = (0, i.default)(g.motion.div).attrs({
            className: 'medium-shadow flex-column vc scroll-y'
        })(p || (p = q`
  max-height: 80%;
`));
}), b.register('SvCqx', function(c, d) {
    a(c.exports, 'default', function() {
        return _q;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('P9wve'),
        h = b('1Aepc'),
        i = b('aPZ+w'),
        j = b('GAMly'),
        k = b('/SQrB'),
        l = b('sZQJz');
    let m, n, o, p = a => a;
    var _q = a => {
        const r = () => (0, e.jsx)(e.Fragment, {
            children: (0, e.jsx)('div', {
                style: a.isBanner ? void 0 : {
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    flexDirection: 'column'
                },
                children: (0, e.jsx)(_t, {
                    children: a.code ? (0, e.jsx)(h.LiveProvider, {
                        noInline: !0,
                        code: a.code,
                        scope: {
                            MapButton: i.default,
                            CallAction: j.CallAction,
                            usePropertyValue: k.usePropertyValue,
                            useItemAmount: l.useItemAmount
                        },
                        children: (0, e.jsx)(h.LivePreview, {})
                    }) : g.default.emptyMessage
                })
            })
        });
        return (0, e.jsx)(e.Fragment, {
            children: a.isBanner ? (0, e.jsx)(_r, {
                children: r()
            }) : (0, e.jsx)(_s, {
                children: r()
            })
        });
    };
    const _r = f.default.div.attrs({
            className: 'maxWidth flex vc'
        })(m || (m = p`
  width: 100%;
  display: flex;
  justify-content: space-between;
`)),
        _s = f.default.div.attrs({
            className: 'maxWidth flex-column vc'
        })(n || (n = p``)),
        _t = f.default.div(o || (o = p`
  font-size: 24px;
  margin: 6px;
`));
}), b.register('P9wve', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        emptyMessage: 'Nothing in here...yet! End the game and modify this device to include your content.'
    };
}), b.register('WrYxt', function(c, d) {
    let e;
    var f;
    a(c.exports, 'CodeUIStyle', function() {
        return e;
    }), (f = e || (e = {})).modal = 'modal', f.banner = 'banner';
});