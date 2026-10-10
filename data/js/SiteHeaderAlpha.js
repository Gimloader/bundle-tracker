import {
    o as e,
    t
} from "./rolldown-runtime.js";
import {
    t as n
} from "./react-1.js";
var r = e(n());

function i(e) {
    if (typeof window > `u`) return console.warn(`useMediaMatch cannot function as window is undefined.`), !1;
    var t = (0, r.useMemo)(function() {
            return window.matchMedia(e)
        }, [e]),
        n = (0, r.useState)(function() {
            return t.matches
        }),
        i = n[0],
        a = n[1];
    return (0, r.useEffect)(function() {
        a(t.matches);
        var e = function(e) {
            return a(e.matches)
        };
        return t.addEventListener ? (t.addEventListener(`change`, e), function() {
            return t.removeEventListener(`change`, e)
        }) : (t.addListener(e), function() {
            return t.removeListener(e)
        })
    }, [t]), i
}
var a = t((e => {
        var t = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
                r === void 0 && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                (!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, i)
            }) : (function(e, t, n, r) {
                r === void 0 && (r = n), e[r] = t[n]
            })),
            r = e && e.__setModuleDefault || (Object.create ? (function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }) : function(e, t) {
                e.default = t
            }),
            i = e && e.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var n = {};
                if (e != null)
                    for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && t(n, e, i);
                return r(n, e), n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.useWindowSize = void 0;
        var a = i(n());

        function o() {
            return {
                height: window.innerHeight,
                width: window.innerWidth
            }
        }

        function s() {
            var e = a.useState(o()),
                t = e[0],
                n = e[1];
            return a.useLayoutEffect(function() {
                function e() {
                    n(o())
                }
                return window.addEventListener(`resize`, e),
                    function() {
                        return window.removeEventListener(`resize`, e)
                    }
            }, []), t
        }
        e.useWindowSize = s
    })),
    o = t((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.useBreakpoints = e.useBreakpoint = void 0;
        var t = a();

        function n(e) {
            return (0, t.useWindowSize)().width < e
        }
        e.useBreakpoint = n;

        function r(e) {
            var n = (0, t.useWindowSize)().width;
            return e.map(function(e) {
                return n < e
            })
        }
        e.useBreakpoints = r
    })),
    s = t((e => {
        var t = e && e.__assign || function() {
                return t = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, t.apply(this, arguments)
            },
            r = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
                r === void 0 && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                (!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, i)
            }) : (function(e, t, n, r) {
                r === void 0 && (r = n), e[r] = t[n]
            })),
            i = e && e.__setModuleDefault || (Object.create ? (function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }) : function(e, t) {
                e.default = t
            }),
            a = e && e.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (e != null)
                    for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                return i(t, e), t
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.useComponentSize = void 0;
        var o = a(n());

        function s() {
            var e = o.useState({
                    height: 0,
                    width: 0
                }),
                n = e[0],
                r = e[1],
                i = o.useRef(),
                a = o.useCallback(function() {
                    if (i.current) {
                        var e = i.current.offsetHeight,
                            t = i.current.offsetWidth;
                        (e !== n.height || t !== n.width) && r({
                            height: e,
                            width: t
                        })
                    }
                }, [n.height, n.width]);
            return o.useLayoutEffect(function() {
                if (i && i.current) {
                    var e = new ResizeObserver(a);
                    return e.observe(i.current),
                        function() {
                            return e.disconnect()
                        }
                }
            }, [i, a]), t({
                ref: i
            }, n)
        }
        e.useComponentSize = s
    })),
    c = t((e => {
        var t = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
                r === void 0 && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                (!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, i)
            }) : (function(e, t, n, r) {
                r === void 0 && (r = n), e[r] = t[n]
            })),
            n = e && e.__exportStar || function(e, n) {
                for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n(o(), e), n(s(), e), n(a(), e)
    })),
    l = function(e) {
        return e.light = `light`, e.dark = `dark`, e
    }({}),
    u = function(e) {
        return e.none = `none`, e.standard = `standard`, e.darker = `darker`, e
    }({});
export {
    i,
    l as n,
    c as r,
    u as t
};