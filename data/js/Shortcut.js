import {
    r as p,
    bI as S
} from "./_index.js";
import {
    C as j
} from "./Names.js";

function E(i) {
    if (typeof window > "u") return console.warn("useMediaMatch cannot function as window is undefined."), !1;
    var f = p.useMemo(function() {
            return window.matchMedia(i)
        }, [i]),
        d = p.useState(function() {
            return f.matches
        }),
        s = d[0],
        u = d[1];
    return p.useEffect(function() {
        u(f.matches);
        var a = function(e) {
            return u(e.matches)
        };
        return f.addEventListener ? (f.addEventListener("change", a), function() {
            return f.removeEventListener("change", a)
        }) : (f.addListener(a), function() {
            return f.removeListener(a)
        })
    }, [f]), s
}
var l = {},
    _ = {},
    v = {},
    g;

function y() {
    if (g) return v;
    g = 1;
    var i = v && v.__createBinding || (Object.create ? function(e, r, t, n) {
            n === void 0 && (n = t);
            var o = Object.getOwnPropertyDescriptor(r, t);
            (!o || ("get" in o ? !r.__esModule : o.writable || o.configurable)) && (o = {
                enumerable: !0,
                get: function() {
                    return r[t]
                }
            }), Object.defineProperty(e, n, o)
        } : function(e, r, t, n) {
            n === void 0 && (n = t), e[n] = r[t]
        }),
        f = v && v.__setModuleDefault || (Object.create ? function(e, r) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: r
            })
        } : function(e, r) {
            e.default = r
        }),
        d = v && v.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var r = {};
            if (e != null)
                for (var t in e) t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && i(r, e, t);
            return f(r, e), r
        };
    Object.defineProperty(v, "__esModule", {
        value: !0
    }), v.useWindowSize = void 0;
    var s = d(S());

    function u() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }

    function a() {
        var e = s.useState(u()),
            r = e[0],
            t = e[1];
        return s.useLayoutEffect(function() {
            function n() {
                t(u())
            }
            return window.addEventListener("resize", n),
                function() {
                    return window.removeEventListener("resize", n)
                }
        }, []), r
    }
    return v.useWindowSize = a, v
}
var b;

function M() {
    if (b) return _;
    b = 1, Object.defineProperty(_, "__esModule", {
        value: !0
    }), _.useBreakpoints = _.useBreakpoint = void 0;
    var i = y();

    function f(s) {
        var u = (0, i.useWindowSize)().width;
        return u < s
    }
    _.useBreakpoint = f;

    function d(s) {
        var u = (0, i.useWindowSize)().width;
        return s.map(function(a) {
            return u < a
        })
    }
    return _.useBreakpoints = d, _
}
var c = {},
    O;

function m() {
    if (O) return c;
    O = 1;
    var i = c && c.__assign || function() {
            return i = Object.assign || function(e) {
                for (var r, t = 1, n = arguments.length; t < n; t++) {
                    r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            }, i.apply(this, arguments)
        },
        f = c && c.__createBinding || (Object.create ? function(e, r, t, n) {
            n === void 0 && (n = t);
            var o = Object.getOwnPropertyDescriptor(r, t);
            (!o || ("get" in o ? !r.__esModule : o.writable || o.configurable)) && (o = {
                enumerable: !0,
                get: function() {
                    return r[t]
                }
            }), Object.defineProperty(e, n, o)
        } : function(e, r, t, n) {
            n === void 0 && (n = t), e[n] = r[t]
        }),
        d = c && c.__setModuleDefault || (Object.create ? function(e, r) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: r
            })
        } : function(e, r) {
            e.default = r
        }),
        s = c && c.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var r = {};
            if (e != null)
                for (var t in e) t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && f(r, e, t);
            return d(r, e), r
        };
    Object.defineProperty(c, "__esModule", {
        value: !0
    }), c.useComponentSize = void 0;
    var u = s(S());

    function a() {
        var e = u.useState({
                height: 0,
                width: 0
            }),
            r = e[0],
            t = e[1],
            n = u.useRef(),
            o = u.useCallback(function() {
                if (n.current) {
                    var h = n.current.offsetHeight,
                        w = n.current.offsetWidth;
                    (h !== r.height || w !== r.width) && t({
                        height: h,
                        width: w
                    })
                }
            }, [r.height, r.width]);
        return u.useLayoutEffect(function() {
            if (!(!n || !n.current)) {
                var h = new ResizeObserver(o);
                return h.observe(n.current),
                    function() {
                        return h.disconnect()
                    }
            }
        }, [n, o]), i({
            ref: n
        }, r)
    }
    return c.useComponentSize = a, c
}
var z;

function P() {
    return z || (z = 1, function(i) {
        var f = l && l.__createBinding || (Object.create ? function(s, u, a, e) {
                e === void 0 && (e = a);
                var r = Object.getOwnPropertyDescriptor(u, a);
                (!r || ("get" in r ? !u.__esModule : r.writable || r.configurable)) && (r = {
                    enumerable: !0,
                    get: function() {
                        return u[a]
                    }
                }), Object.defineProperty(s, e, r)
            } : function(s, u, a, e) {
                e === void 0 && (e = a), s[e] = u[a]
            }),
            d = l && l.__exportStar || function(s, u) {
                for (var a in s) a !== "default" && !Object.prototype.hasOwnProperty.call(u, a) && f(u, s, a)
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), d(M(), i), d(m(), i), d(y(), i)
    }(l)), l
}
var D = P(),
    B = (i => (i.light = "light", i.dark = "dark", i))(B || {}),
    W = (i => (i.none = "none", i.standard = "standard", i.darker = "darker", i))(W || {});
const L = {
    name: j.areaName,
    iconImage: "/client/img/header/rewards.svg"
};
export {
    L as C, W as S, B as a, D as d, E as u
};