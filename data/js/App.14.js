var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('oRtM8', function(b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function() {
        return _v;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('0hzx+'),
        j = a('LEQ5w'),
        k = a('8eVLU'),
        l = a('ryWAy'),
        m = a('Axq+p'),
        n = a('TwXYL'),
        o = a('2GeW4'),
        p = a('qr+8A');
    let q, r, s, t = a => a;
    const u = j.lazy(() => a('tEg9c'));
    var _v = (0, k.withDeviceUIWrapper)(a => ((0, l.default)(Phaser.Input.Keyboard.KeyCodes.ESC, a.close, []), (0, i.jsx)(_w, {
        children: (0, i.jsx)(_x, {
            initial: {
                background: 'rgba(0,0,0,0)'
            },
            animate: {
                background: 'rgba(0,0,0,0.4)'
            },
            exit: {
                background: 'rgba(0,0,0,0)'
            },
            transition: {
                duration: 0.3
            },
            onClick: a.close,
            children: (0, i.jsx)(_y, {
                initial: {
                    x: '125%'
                },
                animate: {
                    x: '0%'
                },
                exit: {
                    x: '125%'
                },
                transition: {
                    duration: 0.3,
                    ease: 'easeOut'
                },
                onClick: a => a.stopPropagation(),
                children: (0, i.jsx)(j.Suspense, {
                    fallback: (0, i.jsx)('div', {}),
                    children: (0, i.jsx)(u, {
                        status: a.status,
                        style: a.style,
                        tableGroup: a.tableGroup,
                        craft: a.craft,
                        collect: a.collect,
                        item: a.item,
                        itemAmount: a.itemAmount,
                        craftingDurationMs: a.craftingDurationMs,
                        itemFinishesCraftingAt: a.itemFinishesCraftingAt,
                        itemDisposalMs: a.itemDisposalMs,
                        itemDisposedAt: a.itemDisposedAt,
                        itemCrafterCharacterId: a.itemCrafterCharacterId,
                        useCrafterCollectionAdvantage: a.useCrafterCollectionAdvantage,
                        close: a.close
                    })
                })
            })
        })
    })));
    const _w = (0, m.default)(o.default).attrs({
            className: 'maxAll'
        })(q || (q = t`
  overflow: hidden;
  z-index: ${ 0 };
`), p.default.primaryContent),
        _x = (0, m.default)(n.motion.div).attrs({
            className: 'maxAll'
        })(r || (r = t`
  position: relative;
`)),
        _y = (0, m.default)(n.motion.div)(s || (s = t`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  max-width: 420px;
  box-shadow: -13px 2px 54px 1px rgba(0, 0, 0, 0.41);
  overflow: hidden;
`));
}), a.register('tEg9c', function(b, c) {
    b.exports = import('./' + a('HmN9A').resolve('82wAP')).then(() => a('dX3Gq'));
});