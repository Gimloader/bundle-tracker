function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('x994s', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _g(b.exports, 'default', function() {
        return _l;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('ryWAy'),
        h = a('8eVLU'),
        i = a('1bJlm'),
        j = a('E+8zi'),
        k = a('rr5bz');
    var _l = (0, h.withDeviceUIWrapper)(_g => {
        const [m, n] = f.useState(!0), {
            start: o,
            clear: p
        } = (0, k.useTimeout)(() => {
            _g.close();
        }, 350), q = f.useCallback(() => {
            n(!1), o();
        }, [
            o,
            _g.close
        ]);
        return f.useEffect(() => () => {
            p();
        }, [p]), (0, g.default)(Phaser.Input.Keyboard.KeyCodes.ESC, q, [q]), (0, e.jsx)(i.default, {
            open: m,
            close: q,
            onCosmeticSelectionChanged: j.default,
            onlyLockerAvailable: !0,
            useCustomAnimation: !0
        });
    });
}), a.register('rr5bz', function(b, c) {
    _g(b.exports, 'useTimeout', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('Oym4R0');

    function _f(_g, h) {
        void 0 === h && (h = 0), (0, e.useWarningOnMountInDevelopment)('useTimeout is deprecated, it will be removed in rooks v7. Please use useTimeoutWhen instead.');
        var i = (0, d.useState)(!1),
            j = i[0],
            k = i[1],
            l = (0, d.useRef)();

        function m() {
            l.current && l.current(), _m();
        }
        (0, d.useEffect)(function() {
            l.current = _g;
        }, [_g]);
        var _m = (0, d.useCallback)(function() {
                k(!1);
            }, []),
            n = (0, d.useCallback)(function() {
                k(!0);
            }, []);
        return (0, d.useEffect)(function() {
            if (j) {
                if ('undefined' != typeof window) {
                    var o = window.setTimeout(f, h);
                    return function() {
                        window.clearTimeout(o);
                    };
                }
                console.warn('useTimeout: window is undefined.');
            }
        }, [
            j,
            h
        ]), {
            clear: _m,
            isActive: j,
            start: n,
            stop: _m
        };
    }
}), a.register('Oym4R0', function(b, c) {
    _g(b.exports, 'useWarningOnMountInDevelopment', function() {
        return _f;
    });
    var d = a('+i8ep'),
        e = a('nHK4Z');

    function _f(_g) {
        (0, d.useDidMount)(function() {
            (0, e.warning)(!1, _g);
        });
    }
}), a.register('nHK4Z', function(b, c) {
    e(b.exports, 'warning', function() {
        return _d;
    });
    var _d = function() {};
});