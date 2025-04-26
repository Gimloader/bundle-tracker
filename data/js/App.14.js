var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('lOHGn', function(t, i) {
    var b, c, d, e, f;
    b = t.exports, Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    }), c = t.exports, d = 'default', e = function() {
        return t;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = a('8kSQZ'),
        h = a('uPP4W'),
        i = a('FZOhR'),
        j = a('+0Tb/'),
        k = a('h99Nu'),
        l = a('b9Bct'),
        m = a('EefFJ'),
        n = a('wnmVt');
    let o, p, q, r = a => a;
    const s = h.lazy(() => a('pHHWr'));
    var t = (0, i.withDeviceUIWrapper)(a => ((0, j.default)(Phaser.Input.Keyboard.KeyCodes.ESC, a.close, []), (0, g.jsx)(u, {
        children: (0, g.jsx)(v, {
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
            children: (0, g.jsx)(w, {
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
                children: (0, g.jsx)(h.Suspense, {
                    fallback: (0, g.jsx)('div', {}),
                    children: (0, g.jsx)(s, {
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
    const u = (0, k.default)(m.default).attrs({
            className: 'maxAll'
        })(o || (o = r`
  overflow: hidden;
  z-index: ${ 0 };
`), n.default.primaryContent),
        v = (0, k.default)(l.motion.div).attrs({
            className: 'maxAll'
        })(p || (p = r`
  position: relative;
`)),
        w = (0, k.default)(l.motion.div)(q || (q = r`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  max-width: 420px;
  box-shadow: -13px 2px 54px 1px rgba(0, 0, 0, 0.41);
  overflow: hidden;
`));
}), a.register('pHHWr', function(t, i) {
    t.exports = import('./' + a('tIOy4').resolve('82wAP')).then(() => a('b+MXt'));
});