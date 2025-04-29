function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('4w6uc', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _m;
    });
    var f = b('gRbUn'),
        g = b('O0Kav'),
        h = b('J8L14'),
        i = b('BkBfo'),
        j = b('Fk6Pz'),
        k = b('rZrSX'),
        l = b('jEuDs');
    var _m = (0, i.withDeviceUIWrapper)(a => {
        const [n, o] = g.useState(!0), {
            start: p,
            clear: q
        } = (0, l.useTimeout)(() => {
            a.close();
        }, 350), r = g.useCallback(() => {
            o(!1), p();
        }, [
            p,
            a.close
        ]);
        return g.useEffect(() => () => {
            q();
        }, [q]), (0, h.default)(Phaser.Input.Keyboard.KeyCodes.ESC, r, [r]), (0, f.jsx)(j.default, {
            open: n,
            close: r,
            onCosmeticSelectionChanged: k.default,
            onlyLockerAvailable: !0,
            useCustomAnimation: !0
        });
    });
}), b.register('jEuDs', function(c, d) {
    a(c.exports, 'useTimeout', function() {
        return _g;
    });
    var e = b('O0Kav'),
        f = b('GUAYj');

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
                l(!1);
            }, []),
            p = (0, e.useCallback)(function() {
                l(!0);
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
}), b.register('GUAYj', function(c, d) {
    a(c.exports, 'useWarningOnMountInDevelopment', function() {
        return _g;
    });
    var e = b('lKjHC'),
        f = b('PsplJ');

    function _g(h) {
        (0, e.useDidMount)(function() {
            (0, f.warning)(!1, h);
        });
    }
}), b.register('PsplJ', function(c, d) {
    a(c.exports, 'warning', function() {
        return _e;
    });
    var _e = function() {};
});