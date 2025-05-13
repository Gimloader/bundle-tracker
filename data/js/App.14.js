var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('.....', function(b, c) {
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
    var i = a('.....'),
        j = a('.....'),
        k = a('.....'),
        l = a('.....'),
        m = a('.....'),
        n = a('.....'),
        o = a('.....'),
        p = a('.....');
    let q, r, s, t = u => u;
    const u = j.lazy(() => a('.....'));
    var _v = (0, k.withDeviceUIWrapper)(w => ((0, l.default)(Phaser.Input.Keyboard.KeyCodes.ESC, w.close, []), (0, i.jsx)(_w, {
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
            onClick: w.close,
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
                onClick: x => x.stopPropagation(),
                children: (0, i.jsx)(j.Suspense, {
                    fallback: (0, i.jsx)('div', {}),
                    children: (0, i.jsx)(u, {
                        status: w.status,
                        style: w.style,
                        tableGroup: w.tableGroup,
                        craft: w.craft,
                        collect: w.collect,
                        item: w.item,
                        itemAmount: w.itemAmount,
                        craftingDurationMs: w.craftingDurationMs,
                        itemFinishesCraftingAt: w.itemFinishesCraftingAt,
                        itemDisposalMs: w.itemDisposalMs,
                        itemDisposedAt: w.itemDisposedAt,
                        itemCrafterCharacterId: w.itemCrafterCharacterId,
                        useCrafterCollectionAdvantage: w.useCrafterCollectionAdvantage,
                        close: w.close
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
}), a.register('.....', function(b, c) {
    b.exports = import('./' + a('.....').resolve('82wAP')).then(() => a('.....'));
});