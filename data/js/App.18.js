function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'ANIMATION_DURATION', function () {
        return _s;
    }), a(c.exports, 'default', function () {
        return _t;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....');
    let p, q, r = s => s;
    const _s = 0.3;
    var _t = (0, n.withDeviceUIWrapper)(u => {
        const v = g.useCallback(() => {
            u.closableByUser && u.close();
        }, [u.closableByUser]);
        (0, k.default)(Phaser.Input.Keyboard.KeyCodes.ESC, v, [v]);
        return (0, f.jsx)(_u, {
            children: (0, f.jsx)(_v, {
                initial: { background: 'rgba(0,0,0,0)' },
                animate: { background: 'rgba(0,0,0,0.7)' },
                exit: { background: 'rgba(0,0,0,0)' },
                transition: { duration: _s },
                children: (() => {
                    const w = {
                        ...u,
                        isBanner: u.style === m.CodeUIStyle.banner,
                        close: v,
                        code: u.code
                    };
                    return (0, f.jsx)(h.default, { ...w });
                })()
            })
        });
    });
    const _u = (0, i.default)(l.default).attrs({ className: 'maxAll' })(p || (p = r`
  overflow: hidden;
  z-index: ${ 0 };
`), o.default.primaryContent), _v = (0, i.default)(j.motion.div).attrs({ className: 'maxAll' })(q || (q = r``));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _t;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....');
    let o, p, q = r => r;
    const r = {
            y: ' 100%',
            opacity: 0
        }, s = {
            y: '0%',
            opacity: 1
        };
    var _t = u => {
        const v = (0, h.useIsPresent)(), [w, x] = (0, m.useBoolean)(!1), y = (0, n.GetContrastColor)(u.defaultBackgroundColor), z = f.useMemo(() => {
                let A = {
                    background: u.defaultBackgroundColor,
                    color: y,
                    fontFamily: u.defaultFontFamily
                };
                if (u.isBanner) {
                    const B = {
                        padding: '30px 40px',
                        width: '100%',
                        maxWidth: '100%',
                        borderRadius: 0
                    };
                    return {
                        ...A,
                        ...B
                    };
                }
                return {
                    ...A,
                    padding: '40px 30px',
                    width: '90%',
                    maxWidth: 650,
                    borderRadius: 5
                };
            }, [
                u.defaultBackgroundColor,
                u.isBanner
            ]);
        return (0, e.jsxs)(_u, {
            onClick: () => {
                v && w && u.close();
            },
            style: u.isBanner ? {
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
                    onClick: A => A.stopPropagation(),
                    onAnimationComplete: x,
                    style: z,
                    children: (0, e.jsx)(k.default, { ...u })
                }),
                u.closableByUser ? (0, e.jsx)(l.default, { onClick: u.close }) : null
            ]
        });
    };
    const _u = i.default.div.attrs({ className: 'maxAll flex' })(o || (o = q``)), _v = (0, i.default)(g.motion.div).attrs({ className: 'medium-shadow flex-column vc scroll-y' })(p || (p = q`
  max-height: 80%;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _q;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....');
    let m, n, o, p = q => q;
    var _q = r => {
        const s = () => (0, e.jsx)(e.Fragment, {
            children: (0, e.jsx)('div', {
                style: r.isBanner ? void 0 : {
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    flexDirection: 'column'
                },
                children: (0, e.jsx)(_t, {
                    children: r.code ? (0, e.jsx)(h.LiveProvider, {
                        noInline: !0,
                        code: r.code,
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
        return (0, e.jsx)(e.Fragment, { children: r.isBanner ? (0, e.jsx)(_r, { children: s() }) : (0, e.jsx)(_s, { children: s() }) });
    };
    const _r = f.default.div.attrs({ className: 'maxWidth flex vc' })(m || (m = p`
  width: 100%;
  display: flex;
  justify-content: space-between;
`)), _s = f.default.div.attrs({ className: 'maxWidth flex-column vc' })(n || (n = p``)), _t = f.default.div(o || (o = p`
  font-size: 24px;
  margin: 6px;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _e;
    });
    var _e = { emptyMessage: 'Nothing in here...yet! End the game and modify this device to include your content.' };
}), b.register('.....', function (c, d) {
    let e;
    var f;
    a(c.exports, 'CodeUIStyle', function () {
        return e;
    }), (f = e || (e = {})).modal = 'modal', f.banner = 'banner';
});