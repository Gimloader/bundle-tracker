function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _m;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....');
    var _m = (0, i.withDeviceUIWrapper)(n => {
        const [o, p] = g.useState(!0), {
            start: q,
            clear: r
        } = (0, l.useTimeout)(() => {
            n.close();
        }, 350), s = g.useCallback(() => {
            p(!1), q();
        }, [
            q,
            n.close
        ]);
        return g.useEffect(() => () => {
            r();
        }, [r]), (0, h.default)(Phaser.Input.Keyboard.KeyCodes.ESC, s, [s]), (0, f.jsx)(j.default, {
            open: o,
            close: s,
            onCosmeticSelectionChanged: k.default,
            onlyLockerAvailable: !0,
            useCustomAnimation: !0
        });
    });
}), b.register('.....', function(c, d) {
    a(c.exports, 'useTimeout', function() {
        return _g;
    });
    var e = b('.....'),
        f = b('.....');

    function _g(h, i) {
        void 0 === i && (i = 0), (0, f.useWarningOnMountInDevelopment)('useTimeout is deprecated, it will be removed in rooks v7. Please use useTimeoutWhen instead.');
        var j = (0, e.useState)(!1),
            k = j[0],
            l = j[1],
            m = (0, e.useRef)();

        function n() {
            m.current && m.current(), _o();
        }
        (0, e.useEffect)(function() {
            m.current = h;
        }, [h]);
        var _o = (0, e.useCallback)(function() {
                _g(!1);
            }, []),
            p = (0, e.useCallback)(function() {
                _g(!0);
            }, []);
        return (0, e.useEffect)(function() {
            if (k) {
                if ('undefined' != typeof window) {
                    var q = window.setTimeout(n, i);
                    return function() {
                        window.clearTimeout(q);
                    };
                }
                console.warn('useTimeout: window is undefined.');
            }
        }, [
            k,
            i
        ]), {
            clear: _o,
            isActive: k,
            start: p,
            stop: _o
        };
    }
}), b.register('.....', function(c, d) {
    a(c.exports, 'useWarningOnMountInDevelopment', function() {
        return _g;
    });
    var e = b('.....'),
        f = b('.....');

    function _g(h) {
        (0, e.useDidMount)(function() {
            (0, f.warning)(!1, h);
        });
    }
}), b.register('.....', function(c, d) {
    a(c.exports, 'warning', function() {
        return _e;
    });
    var _e = function() {};
});