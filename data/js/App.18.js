function a(a, b, t, u) {
    Object.defineProperty(a, b, {
        get: t,
        set: u,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('84F+e', function(t, u) {
    var c;
    c = t.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(t.exports, 'ANIMATION_DURATION', function() {
        return q;
    }), a(t.exports, 'default', function() {
        return r;
    });
    var d = b('8kSQZ'),
        e = b('uPP4W'),
        f = b('hGQrG'),
        g = b('h99Nu'),
        h = b('b9Bct'),
        i = b('+0Tb/'),
        j = b('EefFJ'),
        k = b('t9K1H'),
        l = b('FZOhR'),
        m = b('wnmVt');
    let n, o, p = a => a;
    const q = 0.3;
    var r = (0, l.withDeviceUIWrapper)(a => {
        const s = e.useCallback(() => {
            a.closableByUser && a.close();
        }, [a.closableByUser]);
        (0, i.default)(Phaser.Input.Keyboard.KeyCodes.ESC, s, [s]);
        return (0, d.jsx)(s, {
            children: (0, d.jsx)(t, {
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
                    duration: q
                },
                children: (() => {
                    const t = {
                        ...a,
                        isBanner: a.style === k.CodeUIStyle.banner,
                        close: s,
                        code: a.code
                    };
                    return (0, d.jsx)(f.default, {
                        ...t
                    });
                })()
            })
        });
    });
    const s = (0, g.default)(j.default).attrs({
            className: 'maxAll'
        })(n || (n = p`
  overflow: hidden;
  z-index: ${ 0 };
`), m.default.primaryContent),
        t = (0, g.default)(h.motion.div).attrs({
            className: 'maxAll'
        })(o || (o = p``));
}), b.register('hGQrG', function(t, u) {
    a(t.exports, 'default', function() {
        return r;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('b9Bct'),
        f = b('USLU1'),
        g = b('h99Nu'),
        h = b('84F+e'),
        i = b('TBO9c'),
        j = b('nbHO+'),
        k = b('PjB0f'),
        l = b('KRp9M');
    let m, n, o = a => a;
    const p = {
            y: ' 100%',
            opacity: 0
        },
        q = {
            y: '0%',
            opacity: 1
        };
    var r = a => {
        const s = (0, f.useIsPresent)(),
            [t, u] = (0, k.useBoolean)(!1),
            v = (0, l.GetContrastColor)(a.defaultBackgroundColor),
            w = d.useMemo(() => {
                let x = {
                    background: a.defaultBackgroundColor,
                    color: v,
                    fontFamily: a.defaultFontFamily
                };
                if (a.isBanner) {
                    const y = {
                        padding: '30px 40px',
                        width: '100%',
                        maxWidth: '100%',
                        borderRadius: 0
                    };
                    return {
                        ...x,
                        ...y
                    };
                }
                return {
                    ...x,
                    padding: '40px 30px',
                    width: '90%',
                    maxWidth: 650,
                    borderRadius: 5
                };
            }, [
                a.defaultBackgroundColor,
                a.isBanner
            ]);
        return (0, c.jsxs)(s, {
            onClick: () => {
                s && t && a.close();
            },
            style: a.isBanner ? {
                alignItems: 'flex-end',
                justifyContent: 'center'
            } : {
                justifyContent: 'center',
                alignItems: 'center'
            },
            children: [
                (0, c.jsx)(t, {
                    initial: p,
                    animate: q,
                    exit: p,
                    transition: {
                        duration: h.ANIMATION_DURATION,
                        ease: 'easeOut'
                    },
                    onClick: a => a.stopPropagation(),
                    onAnimationComplete: u,
                    style: w,
                    children: (0, c.jsx)(i.default, {
                        ...a
                    })
                }),
                a.closableByUser ? (0, c.jsx)(j.default, {
                    onClick: a.close
                }) : null
            ]
        });
    };
    const s = g.default.div.attrs({
            className: 'maxAll flex'
        })(m || (m = o``)),
        t = (0, g.default)(e.motion.div).attrs({
            className: 'medium-shadow flex-column vc scroll-y'
        })(n || (n = o`
  max-height: 80%;
`));
}), b.register('TBO9c', function(n, c) {
    a(n.exports, 'default', function() {
        return o;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('IRmsn'),
        f = b('QEVw+'),
        g = b('Dog9Y'),
        h = b('kgfxo'),
        i = b('n4GIU'),
        j = b('jDFNP');
    let k, l, m, n = a => a;
    var o = a => {
        const p = () => (0, c.jsx)(c.Fragment, {
            children: (0, c.jsx)('div', {
                style: a.isBanner ? void 0 : {
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    flexDirection: 'column'
                },
                children: (0, c.jsx)(r, {
                    children: a.code ? (0, c.jsx)(f.LiveProvider, {
                        noInline: !0,
                        code: a.code,
                        scope: {
                            MapButton: g.default,
                            CallAction: h.CallAction,
                            usePropertyValue: i.usePropertyValue,
                            useItemAmount: j.useItemAmount
                        },
                        children: (0, c.jsx)(f.LivePreview, {})
                    }) : e.default.emptyMessage
                })
            })
        });
        return (0, c.jsx)(c.Fragment, {
            children: a.isBanner ? (0, c.jsx)(p, {
                children: p()
            }) : (0, c.jsx)(q, {
                children: p()
            })
        });
    };
    const p = d.default.div.attrs({
            className: 'maxWidth flex vc'
        })(k || (k = n`
  width: 100%;
  display: flex;
  justify-content: space-between;
`)),
        q = d.default.div.attrs({
            className: 'maxWidth flex-column vc'
        })(l || (l = n``)),
        r = d.default.div(m || (m = n`
  font-size: 24px;
  margin: 6px;
`));
}), b.register('IRmsn', function(b, n) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
        emptyMessage: 'Nothing in here...yet! End the game and modify this device to include your content.'
    };
}), b.register('t9K1H', function(b, n) {
    let c;
    var d;
    a(b.exports, 'CodeUIStyle', function() {
        return c;
    }), (d = c || (c = {})).modal = 'modal', d.banner = 'banner';
});