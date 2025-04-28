function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('OUQCG', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _z(b.exports, 'ANIMATION_DURATION', function() {
        return _r;
    }), _z(b.exports, 'default', function() {
        return _s;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('5BohJ'),
        h = a('Axq+p'),
        i = a('TwXYL'),
        j = a('ryWAy'),
        k = a('2GeW4'),
        l = a('w3PQs'),
        m = a('8eVLU'),
        n = a('qr+8A');
    let o, p, q = _z => _z;
    const _r = 0.3;
    var _s = (0, m.withDeviceUIWrapper)(_z => {
        const t = f.useCallback(() => {
            _z.closableByUser && _z.close();
        }, [_z.closableByUser]);
        (0, j.default)(Phaser.Input.Keyboard.KeyCodes.ESC, t, [t]);
        return (0, e.jsx)(_t, {
            children: (0, e.jsx)(_u, {
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
                    duration: _r
                },
                children: (() => {
                    const u = {
                        ..._z,
                        isBanner: _z.style === l.CodeUIStyle.banner,
                        close: t,
                        code: _z.code
                    };
                    return (0, e.jsx)(g.default, {
                        ...u
                    });
                })()
            })
        });
    });
    const _t = (0, h.default)(k.default).attrs({
            className: 'maxAll'
        })(o || (o = q`
  overflow: hidden;
  z-index: ${ 0 };
`), n.default.primaryContent),
        _u = (0, h.default)(i.motion.div).attrs({
            className: 'maxAll'
        })(p || (p = q``));
}), a.register('5BohJ', function(b, c) {
    _z(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('TwXYL'),
        g = a('FytBL'),
        h = a('Axq+p'),
        i = a('OUQCG'),
        j = a('EAnIn'),
        k = a('Ct4sg'),
        l = a('PMl60'),
        m = a('HbVXj');
    let n, o, p = _z => _z;
    const q = {
            y: ' 100%',
            opacity: 0
        },
        r = {
            y: '0%',
            opacity: 1
        };
    var _s = _z => {
        const t = (0, g.useIsPresent)(),
            [u, v] = (0, l.useBoolean)(!1),
            w = (0, m.GetContrastColor)(_z.defaultBackgroundColor),
            x = e.useMemo(() => {
                let y = {
                    background: _z.defaultBackgroundColor,
                    color: w,
                    fontFamily: _z.defaultFontFamily
                };
                if (_z.isBanner) {
                    const _z = {
                        padding: '30px 40px',
                        width: '100%',
                        maxWidth: '100%',
                        borderRadius: 0
                    };
                    return {
                        ...y,
                        ..._z
                    };
                }
                return {
                    ...y,
                    padding: '40px 30px',
                    width: '90%',
                    maxWidth: 650,
                    borderRadius: 5
                };
            }, [
                e.defaultBackgroundColor,
                e.isBanner
            ]);
        return (0, d.jsxs)(_t, {
            onClick: () => {
                t && u && e.close();
            },
            style: e.isBanner ? {
                alignItems: 'flex-end',
                justifyContent: 'center'
            } : {
                justifyContent: 'center',
                alignItems: 'center'
            },
            children: [
                (0, d.jsx)(_u, {
                    initial: q,
                    animate: r,
                    exit: q,
                    transition: {
                        duration: i.ANIMATION_DURATION,
                        ease: 'easeOut'
                    },
                    onClick: e => e.stopPropagation(),
                    onAnimationComplete: v,
                    style: x,
                    children: (0, d.jsx)(j.default, {
                        ...e
                    })
                }),
                e.closableByUser ? (0, d.jsx)(k.default, {
                    onClick: e.close
                }) : null
            ]
        });
    };
    const _t = h.default.div.attrs({
            className: 'maxAll flex'
        })(n || (n = p``)),
        _u = (0, h.default)(f.motion.div).attrs({
            className: 'medium-shadow flex-column vc scroll-y'
        })(o || (o = p`
  max-height: 80%;
`));
}), a.register('EAnIn', function(b, c) {
    e(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('pjaWs'),
        g = a('C2gQA'),
        h = a('led8j'),
        i = a('U9mPz'),
        j = a('utXDw'),
        k = a('JWLDh');
    let l, m, n, o = e => e;
    var _p = e => {
        const q = () => (0, d.jsx)(d.Fragment, {
            children: (0, d.jsx)('div', {
                style: e.isBanner ? void 0 : {
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    flexDirection: 'column'
                },
                children: (0, d.jsx)(_s, {
                    children: e.code ? (0, d.jsx)(g.LiveProvider, {
                        noInline: !0,
                        code: e.code,
                        scope: {
                            MapButton: h.default,
                            CallAction: i.CallAction,
                            usePropertyValue: j.usePropertyValue,
                            useItemAmount: k.useItemAmount
                        },
                        children: (0, d.jsx)(g.LivePreview, {})
                    }) : f.default.emptyMessage
                })
            })
        });
        return (0, d.jsx)(d.Fragment, {
            children: e.isBanner ? (0, d.jsx)(_q, {
                children: q()
            }) : (0, d.jsx)(_r, {
                children: q()
            })
        });
    };
    const _q = e.default.div.attrs({
            className: 'maxWidth flex vc'
        })(l || (l = o`
  width: 100%;
  display: flex;
  justify-content: space-between;
`)),
        _r = e.default.div.attrs({
            className: 'maxWidth flex-column vc'
        })(m || (m = o``)),
        _s = e.default.div(n || (n = o`
  font-size: 24px;
  margin: 6px;
`));
}), a.register('pjaWs', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        emptyMessage: 'Nothing in here...yet! End the game and modify this device to include your content.'
    };
}), a.register('w3PQs', function(b, c) {
    let d;
    var e;
    e(b.exports, 'CodeUIStyle', function() {
        return d;
    }), (e = d || (d = {})).modal = 'modal', e.banner = 'banner';
});