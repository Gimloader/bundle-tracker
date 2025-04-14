function e(e, n, t, o) {
    Object.defineProperty(e, n, {
        get: t,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("dLLGV", (function(t, o) {
    var u;
    u = t.exports, Object.defineProperty(u, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return d
    }));
    var i = n("hxEiv"),
        r = n("fywoC"),
        s = n("5OQ4z"),
        f = n("d2bV7"),
        a = n("eka73"),
        c = n("gpNI4"),
        l = n("db8v8");
    var d = (0, f.withDeviceUIWrapper)((e => {
        const [n, t] = r.useState(!0), {
            start: o,
            clear: u
        } = (0, l.useTimeout)((() => {
            e.close()
        }), 350), f = r.useCallback((() => {
            t(!1), o()
        }), [o, e.close]);
        return r.useEffect((() => () => {
            u()
        }), [u]), (0, s.default)(Phaser.Input.Keyboard.KeyCodes.ESC, f, [f]), (0, i.jsx)(a.default, {
            open: n,
            close: f,
            onCosmeticSelectionChanged: c.default,
            onlyLockerAvailable: !0,
            useCustomAnimation: !0
        })
    }))
})), n.register("db8v8", (function(t, o) {
    e(t.exports, "useTimeout", (function() {
        return r
    }));
    var u = n("fywoC"),
        i = n("cXHcT");

    function r(e, n) {
        void 0 === n && (n = 0), (0, i.useWarningOnMountInDevelopment)("useTimeout is deprecated, it will be removed in rooks v7. Please use useTimeoutWhen instead.");
        var t = (0, u.useState)(!1),
            o = t[0],
            r = t[1],
            s = (0, u.useRef)();

        function f() {
            s.current && s.current(), a()
        }(0, u.useEffect)((function() {
            s.current = e
        }), [e]);
        var a = (0, u.useCallback)((function() {
                r(!1)
            }), []),
            c = (0, u.useCallback)((function() {
                r(!0)
            }), []);
        return (0, u.useEffect)((function() {
            if (o) {
                if ("undefined" != typeof window) {
                    var e = window.setTimeout(f, n);
                    return function() {
                        window.clearTimeout(e)
                    }
                }
                console.warn("useTimeout: window is undefined.")
            }
        }), [o, n]), {
            clear: a,
            isActive: o,
            start: c,
            stop: a
        }
    }
})), n.register("cXHcT", (function(t, o) {
    e(t.exports, "useWarningOnMountInDevelopment", (function() {
        return r
    }));
    var u = n("cPGmn"),
        i = n("fAs99");

    function r(e) {
        (0, u.useDidMount)((function() {
            (0, i.warning)(!1, e)
        }))
    }
})), n.register("fAs99", (function(n, t) {
    e(n.exports, "warning", (function() {
        return o
    }));
    var o = function() {}
}));