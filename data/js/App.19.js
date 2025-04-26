function a(a, b, m, n) {
    Object.defineProperty(a, b, {
        get: m,
        set: n,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('L4OcG', function(m, n) {
    var c;
    c = m.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(m.exports, 'default', function() {
        return k;
    });
    var d = b('8kSQZ'),
        e = b('uPP4W'),
        f = b('+0Tb/'),
        g = b('FZOhR'),
        h = b('+d/pa'),
        i = b('7nnMe'),
        j = b('GHmRa');
    var k = (0, g.withDeviceUIWrapper)(a => {
        const [l, m] = e.useState(!0), {
            start: n,
            clear: o
        } = (0, j.useTimeout)(() => {
            a.close();
        }, 350), p = e.useCallback(() => {
            m(!1), n();
        }, [
            n,
            a.close
        ]);
        return e.useEffect(() => () => {
            o();
        }, [o]), (0, f.default)(Phaser.Input.Keyboard.KeyCodes.ESC, p, [p]), (0, d.jsx)(h.default, {
            open: l,
            close: p,
            onCosmeticSelectionChanged: i.default,
            onlyLockerAvailable: !0,
            useCustomAnimation: !0
        });
    });
}), b.register('GHmRa', function(f, g) {
    a(f.exports, 'useTimeout', function() {
        return e;
    });
    var c = b('uPP4W'),
        d = b('65DnQ');

    function e(a, b) {
        void 0 === b && (b = 0), (0, d.useWarningOnMountInDevelopment)('useTimeout is deprecated, it will be removed in rooks v7. Please use useTimeoutWhen instead.');
        var f = (0, c.useState)(!1),
            g = f[0],
            h = f[1],
            i = (0, c.useRef)();

        function j() {
            i.current && i.current(), k();
        }
        (0, c.useEffect)(function() {
            i.current = a;
        }, [a]);
        var k = (0, c.useCallback)(function() {
                h(!1);
            }, []),
            l = (0, c.useCallback)(function() {
                h(!0);
            }, []);
        return (0, c.useEffect)(function() {
            if (g) {
                if ('undefined' != typeof window) {
                    var m = window.setTimeout(j, b);
                    return function() {
                        window.clearTimeout(m);
                    };
                }
                console.warn('useTimeout: window is undefined.');
            }
        }, [
            g,
            b
        ]), {
            clear: k,
            isActive: g,
            start: l,
            stop: k
        };
    }
}), b.register('65DnQ', function(t, c) {
    a(t.exports, 'useWarningOnMountInDevelopment', function() {
        return e;
    });
    var c = b('laJ/S'),
        d = b('DmwlP');

    function e(a) {
        (0, c.useDidMount)(function() {
            (0, d.warning)(!1, a);
        });
    }
}), b.register('DmwlP', function(b, t) {
    a(b.exports, 'warning', function() {
        return c;
    });
    var c = function() {};
});