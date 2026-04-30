import {
    bI as Br,
    aw as Sr,
    r as N,
    e as it,
    ar as qr,
    j as O,
    d as lr,
    au as W,
    av as L
} from "./_index.js";
import {
    r as Nr
} from "./___vite-browser-external_commonjs-proxy.js";
const Or = () => Math.random().toString(36).substring(3);
class wn {
    constructor() {
        this.value = {}, this.propListeners = [], this.onPropChange = (n, d) => {
            const s = Or();
            return this.propListeners.push({
                id: s,
                prop: n,
                callback: d
            }), () => this.disposeListener(s)
        }, this.applyPatches = n => {
            n.forEach(d => {
                if (d.type === "pU") {
                    const s = d;
                    this.updateProperty(s.value.key, s.value.value);
                    return
                }
                if (d.type === "fV") {
                    const s = d;
                    Object.keys(s.value).forEach(u => {
                        this.updateProperty(u, s.value[u])
                    });
                    return
                }
            })
        }, this.disposeListener = n => {
            this.propListeners = this.propListeners.filter(d => d.id !== n)
        }, this.onPropertyChanged = (n, d) => {
            this.propListeners.filter(s => s.prop === n).forEach(s => s.callback(d))
        }, this.updateProperty = (n, d) => {
            this.value[n] !== void 0 ? this.value[n] !== d && (this.value[n] = d, this.onPropertyChanged(n, d)) : (this.value[n] = d, this.onPropertyChanged(n, d))
        }
    }
}
var H = {},
    st;

function Dr() {
    if (st) return H;
    st = 1, Object.defineProperty(H, "__esModule", {
        value: !0
    }), H.useThrottledEffect = void 0;
    var o = Br();

    function n(s) {
        if (Array.isArray(s)) {
            for (var u = 0, a = Array(s.length); u < s.length; u++) a[u] = s[u];
            return a
        } else return Array.from(s)
    }
    var d = H.useThrottledEffect = function(u, a) {
        var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
            c = (0, o.useRef)(Date.now());
        (0, o.useEffect)(function() {
            var h = setTimeout(function() {
                Date.now() - c.current >= a && (u(), c.current = Date.now())
            }, a - (Date.now() - c.current));
            return function() {
                clearTimeout(h)
            }
        }, [a].concat(n(l)))
    };
    return H.default = d, H
}
var Tr = Dr();
const Pr = Sr(Tr),
    D = () => window.devicePixelRatio || 1,
    V = o => {
        o.preventDefault();
        const n = o.changedTouches[0],
            d = document.createEvent("MouseEvent"),
            s = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            } [o.type];
        s && (d.initMouseEvent(s, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(d))
    },
    ve = o => {
        var s, u;
        const n = ((s = o == null ? void 0 : o.nativeEvent) == null ? void 0 : s.offsetX) || 0,
            d = ((u = o == null ? void 0 : o.nativeEvent) == null ? void 0 : u.offsetY) || 0;
        return {
            x: n,
            y: d
        }
    },
    bn = N.forwardRef((o, n) => {
        const [d, s] = N.useState(""), u = N.useRef(!1), a = N.useRef(!1), l = N.useRef(null), c = N.useRef(null), h = N.useRef([]), t = N.useRef(-1), r = N.useRef({
            x: 0,
            y: 0
        }), e = N.useRef(o.color || it.Black), i = N.useRef(o.strokeWidth || 2), f = N.useRef(null), p = N.useRef(null), g = () => {
            a.current = !0
        }, w = () => {
            a.current = !1
        }, y = C => {
            if (!o.canEdit) return;
            const {
                x: b,
                y: E
            } = ve(C);
            r.current = {
                x: b,
                y: E
            }, u.current = !0
        }, m = N.useMemo(() => {
            const C = qr.throttle(b => {
                if (!u.current || !a.current) return;
                const {
                    x: E,
                    y: B
                } = ve(b);
                v({
                    xStart: r.current.x,
                    yStart: r.current.y,
                    xEnd: E,
                    yEnd: B,
                    color: e.current,
                    width: i.current
                }, !0), r.current = {
                    x: E,
                    y: B
                }
            }, 10);
            return b => {
                o.canEdit && (b.persist(), C(b))
            }
        }, [o.canEdit]), A = C => {
            if (!o.canEdit) return;
            const {
                x: b,
                y: E
            } = ve(C);
            u.current && (u.current = !1, v({
                xStart: r.current.x,
                yStart: r.current.y,
                xEnd: b,
                yEnd: E,
                color: e.current,
                width: i.current
            }, !0), _())
        }, v = (C, b) => {
            const {
                xStart: E,
                yStart: B,
                xEnd: q,
                yEnd: T,
                color: P,
                width: kr
            } = C, I = c.current, $ = l.current;
            if (I.beginPath(), I.moveTo(E, B), I.lineTo(q, T), I.strokeStyle = P, I.lineWidth = kr, I.stroke(), I.closePath(), b && o.emitLine) {
                const Er = C;
                C.xStart /= $.clientWidth, C.yStart /= $.clientHeight, C.xEnd /= $.clientWidth, C.yEnd /= $.clientHeight, C.width /= ($.clientWidth + $.clientHeight) / 2, o.emitLine(Er)
            }
        }, _ = () => {
            const C = c.current,
                b = l.current;
            h.current = [...h.current, C.getImageData(0, 0, b.width, b.height)], t.current = t.current + 1, F()
        }, F = () => {
            const C = l.current;
            o.onLatestImage && (C != null && C.toDataURL) && o.onLatestImage(C.toDataURL("image/jpeg"))
        }, x = () => {
            const C = c.current,
                b = l.current;
            C.clearRect(0, 0, b.width, b.height), C.fillStyle = "white", C.fillRect(0, 0, b.width, b.height), _()
        }, R = () => {
            t.current <= 0 ? x() : (t.current = t.current - 1, h.current = [...h.current.slice(0, h.current.length - 1)], c.current.putImageData(h.current[t.current], 0, 0), F())
        }, k = C => {
            const b = l.current,
                E = C;
            C.xStart *= b.clientWidth, C.yStart *= b.clientHeight, C.xEnd *= b.clientWidth, C.yEnd *= b.clientHeight, C.width *= (b.clientWidth + b.clientHeight) / 2, v(E, !1)
        }, S = C => {
            const b = c.current,
                E = l.current,
                B = new Image;
            B.onload = () => {
                b.drawImage(B, 0, 0, E.width / D(), E.height / D())
            }, B.src = C
        };
        return Pr(() => {
            const C = l.current,
                b = c.current;
            if (!C || !b) return;
            const E = C.toDataURL(),
                B = C.getBoundingClientRect();
            C.width = B.width * D(), C.height = B.height * D(), b.scale(D(), D()), b.lineCap = "round", b.lineJoin = "round", h.current = [], t.current = -1, S(E)
        }, 100, [o.width, o.height]), N.useImperativeHandle(n, () => ({
            clear: x,
            undo: R,
            addLine: k,
            drawImage: S
        })), N.useEffect(() => {
            const C = l.current,
                b = f.current,
                E = C.getBoundingClientRect();
            C.width = E.width * D(), C.height = E.height * D();
            const B = C.getContext("2d");
            B.scale(D(), D()), B.fillStyle = "white", B.fillRect(0, 0, C.width, C.height), B.lineCap = "round", B.lineJoin = "round", c.current = B, o.initialImage && S(o.initialImage);
            const q = b.getContext("2d");
            p.current = q, document.addEventListener("mousedown", g), document.addEventListener("mouseup", w)
        }, []), N.useEffect(() => {
            const C = f.current,
                b = p.current;
            if (!C || !b) return;
            const E = o.strokeWidth;
            C.width = E, C.height = E, b.clearRect(0, 0, C.width, C.height), b.beginPath(), b.arc(C.width / 2, C.height / 2, E / 2, 0, 2 * Math.PI), b.fillStyle = o.color, b.fill();
            const B = C.toDataURL("image");
            s(B)
        }, [o.color, o.strokeWidth]), N.useEffect(() => {
            e.current = o.color
        }, [o.color]), N.useEffect(() => {
            i.current = o.strokeWidth
        }, [o.strokeWidth]), N.useEffect(() => {
            !o.canEdit && u.current && F()
        }, [o.canEdit]), N.useEffect(() => () => {
            o.canEdit && u.current && F()
        }, []), O.jsxs(O.Fragment, {
            children: [O.jsx("canvas", {
                style: {
                    width: o.width,
                    height: o.height,
                    cursor: o.canEdit ? `url(${d}) ${i.current/2} ${i.current/2}, auto` : "auto",
                    background: it.White
                },
                ref: l,
                onMouseDown: y,
                onMouseUp: A,
                onMouseMove: m,
                onTouchStart: V,
                onTouchEnd: V,
                onTouchCancel: V,
                onTouchMove: V
            }), O.jsx("canvas", {
                style: {
                    display: "none"
                },
                ref: f
            })]
        })
    }),
    _n = o => O.jsxs(Ir, {
        children: [O.jsx("div", {
            className: "area",
            children: O.jsxs("ul", {
                className: "circles",
                children: [O.jsx("li", {}), O.jsx("li", {}), O.jsx("li", {}), O.jsx("li", {}), O.jsx("li", {}), O.jsx("li", {}), O.jsx("li", {}), O.jsx("li", {}), O.jsx("li", {}), O.jsx("li", {})]
            })
        }), O.jsx(Mr, {
            children: o.children
        })]
    }),
    Ir = lr.div`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .area {
    background: #060ce9;
    background: linear-gradient(to left, #4527a0, #1565c0);
    width: 100%;
    height: 100%;
  }

  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
`,
    Mr = lr.div.attrs({
        className: "maxAll"
    })`
  position: absolute;
  top: 0;
  left: 0;
`;
var M = {},
    j = {},
    Y = {
        exports: {}
    },
    me, ot;

function dr() {
    if (ot) return me;
    ot = 1;
    var o = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    me = function(a) {
        var l = a,
            c = a.indexOf("["),
            h = a.indexOf("]");
        c != -1 && h != -1 && (a = a.substring(0, c) + a.substring(c, h).replace(/:/g, ";") + a.substring(h, a.length));
        for (var t = o.exec(a || ""), r = {}, e = 14; e--;) r[n[e]] = t[e] || "";
        return c != -1 && h != -1 && (r.source = l, r.host = r.host.substring(1, r.host.length - 1).replace(/;/g, ":"), r.authority = r.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), r.ipv6uri = !0), r.pathNames = d(r, r.path), r.queryKey = s(r, r.query), r
    };

    function d(u, a) {
        var l = /\/{2,9}/g,
            c = a.replace(l, "/").split("/");
        return (a.substr(0, 1) == "/" || a.length === 0) && c.splice(0, 1), a.substr(a.length - 1, 1) == "/" && c.splice(c.length - 1, 1), c
    }

    function s(u, a) {
        var l = {};
        return a.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(c, h, t) {
            h && (l[h] = t)
        }), l
    }
    return me
}
var K = {
        exports: {}
    },
    G = {
        exports: {}
    },
    Ce, at;

function Lr() {
    if (at) return Ce;
    at = 1;
    var o = 1e3,
        n = o * 60,
        d = n * 60,
        s = d * 24,
        u = s * 365.25;
    Ce = function(t, r) {
        r = r || {};
        var e = typeof t;
        if (e === "string" && t.length > 0) return a(t);
        if (e === "number" && isNaN(t) === !1) return r.long ? c(t) : l(t);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
    };

    function a(t) {
        if (t = String(t), !(t.length > 100)) {
            var r = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
            if (r) {
                var e = parseFloat(r[1]),
                    i = (r[2] || "ms").toLowerCase();
                switch (i) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return e * u;
                    case "days":
                    case "day":
                    case "d":
                        return e * s;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return e * d;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return e * n;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return e * o;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return e;
                    default:
                        return
                }
            }
        }
    }

    function l(t) {
        return t >= s ? Math.round(t / s) + "d" : t >= d ? Math.round(t / d) + "h" : t >= n ? Math.round(t / n) + "m" : t >= o ? Math.round(t / o) + "s" : t + "ms"
    }

    function c(t) {
        return h(t, s, "day") || h(t, d, "hour") || h(t, n, "minute") || h(t, o, "second") || t + " ms"
    }

    function h(t, r, e) {
        if (!(t < r)) return t < r * 1.5 ? Math.floor(t / r) + " " + e : Math.ceil(t / r) + " " + e + "s"
    }
    return Ce
}
var ct;

function Ur() {
    return ct || (ct = 1, function(o, n) {
        n = o.exports = s.debug = s.default = s, n.coerce = h, n.disable = l, n.enable = a, n.enabled = c, n.humanize = Lr(), n.instances = [], n.names = [], n.skips = [], n.formatters = {};

        function d(t) {
            var r = 0,
                e;
            for (e in t) r = (r << 5) - r + t.charCodeAt(e), r |= 0;
            return n.colors[Math.abs(r) % n.colors.length]
        }

        function s(t) {
            var r;

            function e() {
                if (e.enabled) {
                    var i = e,
                        f = +new Date,
                        p = f - (r || f);
                    i.diff = p, i.prev = r, i.curr = f, r = f;
                    for (var g = new Array(arguments.length), w = 0; w < g.length; w++) g[w] = arguments[w];
                    g[0] = n.coerce(g[0]), typeof g[0] != "string" && g.unshift("%O");
                    var y = 0;
                    g[0] = g[0].replace(/%([a-zA-Z%])/g, function(A, v) {
                        if (A === "%%") return A;
                        y++;
                        var _ = n.formatters[v];
                        if (typeof _ == "function") {
                            var F = g[y];
                            A = _.call(i, F), g.splice(y, 1), y--
                        }
                        return A
                    }), n.formatArgs.call(i, g);
                    var m = e.log || n.log || console.log.bind(console);
                    m.apply(i, g)
                }
            }
            return e.namespace = t, e.enabled = n.enabled(t), e.useColors = n.useColors(), e.color = d(t), e.destroy = u, typeof n.init == "function" && n.init(e), n.instances.push(e), e
        }

        function u() {
            var t = n.instances.indexOf(this);
            return t !== -1 ? (n.instances.splice(t, 1), !0) : !1
        }

        function a(t) {
            n.save(t), n.names = [], n.skips = [];
            var r, e = (typeof t == "string" ? t : "").split(/[\s,]+/),
                i = e.length;
            for (r = 0; r < i; r++) e[r] && (t = e[r].replace(/\*/g, ".*?"), t[0] === "-" ? n.skips.push(new RegExp("^" + t.substr(1) + "$")) : n.names.push(new RegExp("^" + t + "$")));
            for (r = 0; r < n.instances.length; r++) {
                var f = n.instances[r];
                f.enabled = n.enabled(f.namespace)
            }
        }

        function l() {
            n.enable("")
        }

        function c(t) {
            if (t[t.length - 1] === "*") return !0;
            var r, e;
            for (r = 0, e = n.skips.length; r < e; r++)
                if (n.skips[r].test(t)) return !1;
            for (r = 0, e = n.names.length; r < e; r++)
                if (n.names[r].test(t)) return !0;
            return !1
        }

        function h(t) {
            return t instanceof Error ? t.stack || t.message : t
        }
    }(G, G.exports)), G.exports
}
var ut;

function de() {
    return ut || (ut = 1, function(o, n) {
        var d = {};
        n = o.exports = Ur(), n.log = a, n.formatArgs = u, n.save = l, n.load = c, n.useColors = s, n.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : h(), n.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

        function s() {
            return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }
        n.formatters.j = function(t) {
            try {
                return JSON.stringify(t)
            } catch (r) {
                return "[UnexpectedJSONParseError]: " + r.message
            }
        };

        function u(t) {
            var r = this.useColors;
            if (t[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + t[0] + (r ? "%c " : " ") + "+" + n.humanize(this.diff), !!r) {
                var e = "color: " + this.color;
                t.splice(1, 0, e, "color: inherit");
                var i = 0,
                    f = 0;
                t[0].replace(/%[a-zA-Z%]/g, function(p) {
                    p !== "%%" && (i++, p === "%c" && (f = i))
                }), t.splice(f, 0, e)
            }
        }

        function a() {
            return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function l(t) {
            try {
                t == null ? n.storage.removeItem("debug") : n.storage.debug = t
            } catch {}
        }

        function c() {
            var t;
            try {
                t = n.storage.debug
            } catch {}
            return !t && typeof W < "u" && "env" in W && (t = d.DEBUG), t
        }
        n.enable(c());

        function h() {
            try {
                return window.localStorage
            } catch {}
        }
    }(K, K.exports)), K.exports
}
var we, ft;

function $r() {
    if (ft) return we;
    ft = 1;
    var o = dr(),
        n = de()("socket.io-client:url");
    we = d;

    function d(s, u) {
        var a = s;
        u = u || typeof location < "u" && location, s == null && (s = u.protocol + "//" + u.host), typeof s == "string" && (s.charAt(0) === "/" && (s.charAt(1) === "/" ? s = u.protocol + s : s = u.host + s), /^(https?|wss?):\/\//.test(s) || (n("protocol-less url %s", s), typeof u < "u" ? s = u.protocol + "//" + s : s = "https://" + s), n("parse %s", s), a = o(s)), a.port || (/^(http|ws)$/.test(a.protocol) ? a.port = "80" : /^(http|ws)s$/.test(a.protocol) && (a.port = "443")), a.path = a.path || "/";
        var l = a.host.indexOf(":") !== -1,
            c = l ? "[" + a.host + "]" : a.host;
        return a.id = a.protocol + "://" + c + ":" + a.port, a.href = a.protocol + "://" + c + (u && u.port === a.port ? "" : ":" + a.port), a
    }
    return we
}
var be = {},
    Z = {
        exports: {}
    },
    Q = {
        exports: {}
    },
    _e, ht;

function Hr() {
    if (ht) return _e;
    ht = 1;
    var o = 1e3,
        n = o * 60,
        d = n * 60,
        s = d * 24,
        u = s * 365.25;
    _e = function(t, r) {
        r = r || {};
        var e = typeof t;
        if (e === "string" && t.length > 0) return a(t);
        if (e === "number" && isNaN(t) === !1) return r.long ? c(t) : l(t);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
    };

    function a(t) {
        if (t = String(t), !(t.length > 100)) {
            var r = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
            if (r) {
                var e = parseFloat(r[1]),
                    i = (r[2] || "ms").toLowerCase();
                switch (i) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return e * u;
                    case "days":
                    case "day":
                    case "d":
                        return e * s;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return e * d;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return e * n;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return e * o;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return e;
                    default:
                        return
                }
            }
        }
    }

    function l(t) {
        return t >= s ? Math.round(t / s) + "d" : t >= d ? Math.round(t / d) + "h" : t >= n ? Math.round(t / n) + "m" : t >= o ? Math.round(t / o) + "s" : t + "ms"
    }

    function c(t) {
        return h(t, s, "day") || h(t, d, "hour") || h(t, n, "minute") || h(t, o, "second") || t + " ms"
    }

    function h(t, r, e) {
        if (!(t < r)) return t < r * 1.5 ? Math.floor(t / r) + " " + e : Math.ceil(t / r) + " " + e + "s"
    }
    return _e
}
var lt;

function jr() {
    return lt || (lt = 1, function(o, n) {
        n = o.exports = s.debug = s.default = s, n.coerce = h, n.disable = l, n.enable = a, n.enabled = c, n.humanize = Hr(), n.instances = [], n.names = [], n.skips = [], n.formatters = {};

        function d(t) {
            var r = 0,
                e;
            for (e in t) r = (r << 5) - r + t.charCodeAt(e), r |= 0;
            return n.colors[Math.abs(r) % n.colors.length]
        }

        function s(t) {
            var r;

            function e() {
                if (e.enabled) {
                    var i = e,
                        f = +new Date,
                        p = f - (r || f);
                    i.diff = p, i.prev = r, i.curr = f, r = f;
                    for (var g = new Array(arguments.length), w = 0; w < g.length; w++) g[w] = arguments[w];
                    g[0] = n.coerce(g[0]), typeof g[0] != "string" && g.unshift("%O");
                    var y = 0;
                    g[0] = g[0].replace(/%([a-zA-Z%])/g, function(A, v) {
                        if (A === "%%") return A;
                        y++;
                        var _ = n.formatters[v];
                        if (typeof _ == "function") {
                            var F = g[y];
                            A = _.call(i, F), g.splice(y, 1), y--
                        }
                        return A
                    }), n.formatArgs.call(i, g);
                    var m = e.log || n.log || console.log.bind(console);
                    m.apply(i, g)
                }
            }
            return e.namespace = t, e.enabled = n.enabled(t), e.useColors = n.useColors(), e.color = d(t), e.destroy = u, typeof n.init == "function" && n.init(e), n.instances.push(e), e
        }

        function u() {
            var t = n.instances.indexOf(this);
            return t !== -1 ? (n.instances.splice(t, 1), !0) : !1
        }

        function a(t) {
            n.save(t), n.names = [], n.skips = [];
            var r, e = (typeof t == "string" ? t : "").split(/[\s,]+/),
                i = e.length;
            for (r = 0; r < i; r++) e[r] && (t = e[r].replace(/\*/g, ".*?"), t[0] === "-" ? n.skips.push(new RegExp("^" + t.substr(1) + "$")) : n.names.push(new RegExp("^" + t + "$")));
            for (r = 0; r < n.instances.length; r++) {
                var f = n.instances[r];
                f.enabled = n.enabled(f.namespace)
            }
        }

        function l() {
            n.enable("")
        }

        function c(t) {
            if (t[t.length - 1] === "*") return !0;
            var r, e;
            for (r = 0, e = n.skips.length; r < e; r++)
                if (n.skips[r].test(t)) return !1;
            for (r = 0, e = n.names.length; r < e; r++)
                if (n.names[r].test(t)) return !0;
            return !1
        }

        function h(t) {
            return t instanceof Error ? t.stack || t.message : t
        }
    }(Q, Q.exports)), Q.exports
}
var dt;

function Jr() {
    return dt || (dt = 1, function(o, n) {
        var d = {};
        n = o.exports = jr(), n.log = a, n.formatArgs = u, n.save = l, n.load = c, n.useColors = s, n.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : h(), n.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

        function s() {
            return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }
        n.formatters.j = function(t) {
            try {
                return JSON.stringify(t)
            } catch (r) {
                return "[UnexpectedJSONParseError]: " + r.message
            }
        };

        function u(t) {
            var r = this.useColors;
            if (t[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + t[0] + (r ? "%c " : " ") + "+" + n.humanize(this.diff), !!r) {
                var e = "color: " + this.color;
                t.splice(1, 0, e, "color: inherit");
                var i = 0,
                    f = 0;
                t[0].replace(/%[a-zA-Z%]/g, function(p) {
                    p !== "%%" && (i++, p === "%c" && (f = i))
                }), t.splice(f, 0, e)
            }
        }

        function a() {
            return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function l(t) {
            try {
                t == null ? n.storage.removeItem("debug") : n.storage.debug = t
            } catch {}
        }

        function c() {
            var t;
            try {
                t = n.storage.debug
            } catch {}
            return !t && typeof W < "u" && "env" in W && (t = d.DEBUG), t
        }
        n.enable(c());

        function h() {
            try {
                return window.localStorage
            } catch {}
        }
    }(Z, Z.exports)), Z.exports
}
var Fe = {
        exports: {}
    },
    pt;

function U() {
    return pt || (pt = 1, function(o) {
        o.exports = n;

        function n(s) {
            if (s) return d(s)
        }

        function d(s) {
            for (var u in n.prototype) s[u] = n.prototype[u];
            return s
        }
        n.prototype.on = n.prototype.addEventListener = function(s, u) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + s] = this._callbacks["$" + s] || []).push(u), this
        }, n.prototype.once = function(s, u) {
            function a() {
                this.off(s, a), u.apply(this, arguments)
            }
            return a.fn = u, this.on(s, a), this
        }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(s, u) {
            if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
            var a = this._callbacks["$" + s];
            if (!a) return this;
            if (arguments.length == 1) return delete this._callbacks["$" + s], this;
            for (var l, c = 0; c < a.length; c++)
                if (l = a[c], l === u || l.fn === u) {
                    a.splice(c, 1);
                    break
                } return a.length === 0 && delete this._callbacks["$" + s], this
        }, n.prototype.emit = function(s) {
            this._callbacks = this._callbacks || {};
            for (var u = new Array(arguments.length - 1), a = this._callbacks["$" + s], l = 1; l < arguments.length; l++) u[l - 1] = arguments[l];
            if (a) {
                a = a.slice(0);
                for (var l = 0, c = a.length; l < c; ++l) a[l].apply(this, u)
            }
            return this
        }, n.prototype.listeners = function(s) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + s] || []
        }, n.prototype.hasListeners = function(s) {
            return !!this.listeners(s).length
        }
    }(Fe)), Fe.exports
}
var X = {},
    xe, gt;

function pr() {
    if (gt) return xe;
    gt = 1;
    var o = {}.toString;
    return xe = Array.isArray || function(n) {
        return o.call(n) == "[object Array]"
    }, xe
}
var Ae, yt;

function gr() {
    if (yt) return Ae;
    yt = 1, Ae = s;
    var o = typeof L == "function" && typeof L.isBuffer == "function",
        n = typeof ArrayBuffer == "function",
        d = function(u) {
            return typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(u) : u.buffer instanceof ArrayBuffer
        };

    function s(u) {
        return o && L.isBuffer(u) || n && (u instanceof ArrayBuffer || d(u))
    }
    return Ae
}
var vt;

function Wr() {
    if (vt) return X;
    vt = 1;
    var o = pr(),
        n = gr(),
        d = Object.prototype.toString,
        s = typeof Blob == "function" || typeof Blob < "u" && d.call(Blob) === "[object BlobConstructor]",
        u = typeof File == "function" || typeof File < "u" && d.call(File) === "[object FileConstructor]";
    X.deconstructPacket = function(c) {
        var h = [],
            t = c.data,
            r = c;
        return r.data = a(t, h), r.attachments = h.length, {
            packet: r,
            buffers: h
        }
    };

    function a(c, h) {
        if (!c) return c;
        if (n(c)) {
            var t = {
                _placeholder: !0,
                num: h.length
            };
            return h.push(c), t
        } else if (o(c)) {
            for (var r = new Array(c.length), e = 0; e < c.length; e++) r[e] = a(c[e], h);
            return r
        } else if (typeof c == "object" && !(c instanceof Date)) {
            var r = {};
            for (var i in c) r[i] = a(c[i], h);
            return r
        }
        return c
    }
    X.reconstructPacket = function(c, h) {
        return c.data = l(c.data, h), c.attachments = void 0, c
    };

    function l(c, h) {
        if (!c) return c;
        if (c && c._placeholder === !0) {
            var t = typeof c.num == "number" && c.num >= 0 && c.num < h.length;
            if (t) return h[c.num];
            throw new Error("illegal attachments")
        } else if (o(c))
            for (var r = 0; r < c.length; r++) c[r] = l(c[r], h);
        else if (typeof c == "object")
            for (var e in c) c[e] = l(c[e], h);
        return c
    }
    return X.removeBlobs = function(c, h) {
        function t(i, f, p) {
            if (!i) return i;
            if (s && i instanceof Blob || u && i instanceof File) {
                r++;
                var g = new FileReader;
                g.onload = function() {
                    p ? p[f] = this.result : e = this.result, --r || h(e)
                }, g.readAsArrayBuffer(i)
            } else if (o(i))
                for (var w = 0; w < i.length; w++) t(i[w], w, i);
            else if (typeof i == "object" && !n(i))
                for (var y in i) t(i[y], y, i)
        }
        var r = 0,
            e = c;
        t(e), r || h(e)
    }, X
}
var mt;

function et() {
    return mt || (mt = 1, function(o) {
        var n = Jr()("socket.io-parser"),
            d = U(),
            s = Wr(),
            u = pr(),
            a = gr();
        o.protocol = 4, o.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], o.CONNECT = 0, o.DISCONNECT = 1, o.EVENT = 2, o.ACK = 3, o.ERROR = 4, o.BINARY_EVENT = 5, o.BINARY_ACK = 6, o.Encoder = l, o.Decoder = e;

        function l() {}
        var c = o.ERROR + '"encode error"';
        l.prototype.encode = function(y, m) {
            if (n("encoding packet %j", y), o.BINARY_EVENT === y.type || o.BINARY_ACK === y.type) r(y, m);
            else {
                var A = h(y);
                m([A])
            }
        };

        function h(y) {
            var m = "" + y.type;
            if ((o.BINARY_EVENT === y.type || o.BINARY_ACK === y.type) && (m += y.attachments + "-"), y.nsp && y.nsp !== "/" && (m += y.nsp + ","), y.id != null && (m += y.id), y.data != null) {
                var A = t(y.data);
                if (A !== !1) m += A;
                else return c
            }
            return n("encoded %j as %s", y, m), m
        }

        function t(y) {
            try {
                return JSON.stringify(y)
            } catch {
                return !1
            }
        }

        function r(y, m) {
            function A(v) {
                var _ = s.deconstructPacket(v),
                    F = h(_.packet),
                    x = _.buffers;
                x.unshift(F), m(x)
            }
            s.removeBlobs(y, A)
        }

        function e() {
            this.reconstructor = null
        }
        d(e.prototype), e.prototype.add = function(y) {
            var m;
            if (typeof y == "string") {
                if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
                m = f(y), o.BINARY_EVENT === m.type || o.BINARY_ACK === m.type ? (this.reconstructor = new g(m), this.reconstructor.reconPack.attachments === 0 && this.emit("decoded", m)) : this.emit("decoded", m)
            } else if (a(y) || y.base64)
                if (this.reconstructor) m = this.reconstructor.takeBinaryData(y), m && (this.reconstructor = null, this.emit("decoded", m));
                else throw new Error("got binary data when not reconstructing a packet");
            else throw new Error("Unknown type: " + y)
        };

        function i(y, m) {
            switch (y) {
                case 0:
                    return typeof m == "object";
                case 1:
                    return m === void 0;
                case 4:
                    return typeof m == "string" || typeof m == "object";
                case 2:
                case 5:
                    return u(m) && (typeof m[0] == "string" || typeof m[0] == "number");
                case 3:
                case 6:
                    return u(m)
            }
        }

        function f(y) {
            var m = 0,
                A = {
                    type: Number(y.charAt(0))
                };
            if (o.types[A.type] == null) return w("unknown packet type " + A.type);
            if (o.BINARY_EVENT === A.type || o.BINARY_ACK === A.type) {
                for (var v = m + 1; y.charAt(++m) !== "-" && m != y.length;);
                var _ = y.substring(v, m);
                if (_ != Number(_) || y.charAt(m) !== "-") throw new Error("Illegal attachments");
                A.attachments = Number(_)
            }
            if (y.charAt(m + 1) === "/") {
                for (var v = m + 1; ++m;) {
                    var F = y.charAt(m);
                    if (F === "," || m === y.length) break
                }
                A.nsp = y.substring(v, m)
            } else A.nsp = "/";
            var x = y.charAt(m + 1);
            if (x !== "" && Number(x) == x) {
                for (var v = m + 1; ++m;) {
                    var F = y.charAt(m);
                    if (F == null || Number(F) != F) {
                        --m;
                        break
                    }
                    if (m === y.length) break
                }
                A.id = Number(y.substring(v, m + 1))
            }
            if (y.charAt(++m)) {
                var R = p(y.substr(m));
                if (i(A.type, R)) A.data = R;
                else throw new Error("invalid payload")
            }
            return n("decoded %s as %j", y, A), A
        }

        function p(y) {
            try {
                return JSON.parse(y)
            } catch {
                return !1
            }
        }
        e.prototype.destroy = function() {
            this.reconstructor && this.reconstructor.finishedReconstruction()
        };

        function g(y) {
            this.reconPack = y, this.buffers = []
        }
        g.prototype.takeBinaryData = function(y) {
            if (this.buffers.push(y), this.buffers.length === this.reconPack.attachments) {
                var m = s.reconstructPacket(this.reconPack, this.buffers);
                return this.finishedReconstruction(), m
            }
            return null
        }, g.prototype.finishedReconstruction = function() {
            this.reconPack = null, this.buffers = []
        };

        function w(y) {
            return {
                type: o.ERROR,
                data: "parser error: " + y
            }
        }
    }(be)), be
}
var ee = {
        exports: {}
    },
    te = {},
    re = {
        exports: {}
    },
    Ct;

function zr() {
    if (Ct) return re.exports;
    Ct = 1;
    try {
        re.exports = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
    } catch {
        re.exports = !1
    }
    return re.exports
}
var Re, wt;

function tt() {
    return wt || (wt = 1, Re = function() {
        return typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
    }()), Re
}
var ke, bt;

function rt() {
    if (bt) return ke;
    bt = 1;
    var o = zr(),
        n = tt();
    return ke = function(d) {
        var s = d.xdomain,
            u = d.xscheme,
            a = d.enablesXDR;
        try {
            if (typeof XMLHttpRequest < "u" && (!s || o)) return new XMLHttpRequest
        } catch {}
        try {
            if (typeof XDomainRequest < "u" && !u && a) return new XDomainRequest
        } catch {}
        if (!s) try {
            return new n[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
    }, ke
}
var ne = {
        exports: {}
    },
    Ee = {},
    Be, _t;

function Xr() {
    return _t || (_t = 1, Be = Object.keys || function(n) {
        var d = [],
            s = Object.prototype.hasOwnProperty;
        for (var u in n) s.call(n, u) && d.push(u);
        return d
    }), Be
}
var Se, Ft;

function Vr() {
    if (Ft) return Se;
    Ft = 1;
    var o = {}.toString;
    return Se = Array.isArray || function(n) {
        return o.call(n) == "[object Array]"
    }, Se
}
var qe, xt;

function yr() {
    if (xt) return qe;
    xt = 1;
    var o = Vr(),
        n = Object.prototype.toString,
        d = typeof Blob == "function" || typeof Blob < "u" && n.call(Blob) === "[object BlobConstructor]",
        s = typeof File == "function" || typeof File < "u" && n.call(File) === "[object FileConstructor]";
    qe = u;

    function u(a) {
        if (!a || typeof a != "object") return !1;
        if (o(a)) {
            for (var l = 0, c = a.length; l < c; l++)
                if (u(a[l])) return !0;
            return !1
        }
        if (typeof L == "function" && L.isBuffer && L.isBuffer(a) || typeof ArrayBuffer == "function" && a instanceof ArrayBuffer || d && a instanceof Blob || s && a instanceof File) return !0;
        if (a.toJSON && typeof a.toJSON == "function" && arguments.length === 1) return u(a.toJSON(), !0);
        for (var h in a)
            if (Object.prototype.hasOwnProperty.call(a, h) && u(a[h])) return !0;
        return !1
    }
    return qe
}
var Ne, At;

function Yr() {
    return At || (At = 1, Ne = function(o, n, d) {
        var s = o.byteLength;
        if (n = n || 0, d = d || s, o.slice) return o.slice(n, d);
        if (n < 0 && (n += s), d < 0 && (d += s), d > s && (d = s), n >= s || n >= d || s === 0) return new ArrayBuffer(0);
        for (var u = new Uint8Array(o), a = new Uint8Array(d - n), l = n, c = 0; l < d; l++, c++) a[c] = u[l];
        return a.buffer
    }), Ne
}
var Oe, Rt;

function Kr() {
    if (Rt) return Oe;
    Rt = 1, Oe = o;

    function o(d, s, u) {
        var a = !1;
        return u = u || n, l.count = d, d === 0 ? s() : l;

        function l(c, h) {
            if (l.count <= 0) throw new Error("after called too many times");
            --l.count, c ? (a = !0, s(c), s = u) : l.count === 0 && !a && s(null, h)
        }
    }

    function n() {}
    return Oe
} /*! https://mths.be/utf8js v2.1.2 by @mathias */
var De, kt;

function Gr() {
    if (kt) return De;
    kt = 1;
    var o = String.fromCharCode;

    function n(f) {
        for (var p = [], g = 0, w = f.length, y, m; g < w;) y = f.charCodeAt(g++), y >= 55296 && y <= 56319 && g < w ? (m = f.charCodeAt(g++), (m & 64512) == 56320 ? p.push(((y & 1023) << 10) + (m & 1023) + 65536) : (p.push(y), g--)) : p.push(y);
        return p
    }

    function d(f) {
        for (var p = f.length, g = -1, w, y = ""; ++g < p;) w = f[g], w > 65535 && (w -= 65536, y += o(w >>> 10 & 1023 | 55296), w = 56320 | w & 1023), y += o(w);
        return y
    }

    function s(f, p) {
        if (f >= 55296 && f <= 57343) {
            if (p) throw Error("Lone surrogate U+" + f.toString(16).toUpperCase() + " is not a scalar value");
            return !1
        }
        return !0
    }

    function u(f, p) {
        return o(f >> p & 63 | 128)
    }

    function a(f, p) {
        if ((f & 4294967168) == 0) return o(f);
        var g = "";
        return (f & 4294965248) == 0 ? g = o(f >> 6 & 31 | 192) : (f & 4294901760) == 0 ? (s(f, p) || (f = 65533), g = o(f >> 12 & 15 | 224), g += u(f, 6)) : (f & 4292870144) == 0 && (g = o(f >> 18 & 7 | 240), g += u(f, 12), g += u(f, 6)), g += o(f & 63 | 128), g
    }

    function l(f, p) {
        p = p || {};
        for (var g = p.strict !== !1, w = n(f), y = w.length, m = -1, A, v = ""; ++m < y;) A = w[m], v += a(A, g);
        return v
    }

    function c() {
        if (e >= r) throw Error("Invalid byte index");
        var f = t[e] & 255;
        if (e++, (f & 192) == 128) return f & 63;
        throw Error("Invalid continuation byte")
    }

    function h(f) {
        var p, g, w, y, m;
        if (e > r) throw Error("Invalid byte index");
        if (e == r) return !1;
        if (p = t[e] & 255, e++, (p & 128) == 0) return p;
        if ((p & 224) == 192) {
            if (g = c(), m = (p & 31) << 6 | g, m >= 128) return m;
            throw Error("Invalid continuation byte")
        }
        if ((p & 240) == 224) {
            if (g = c(), w = c(), m = (p & 15) << 12 | g << 6 | w, m >= 2048) return s(m, f) ? m : 65533;
            throw Error("Invalid continuation byte")
        }
        if ((p & 248) == 240 && (g = c(), w = c(), y = c(), m = (p & 7) << 18 | g << 12 | w << 6 | y, m >= 65536 && m <= 1114111)) return m;
        throw Error("Invalid UTF-8 detected")
    }
    var t, r, e;

    function i(f, p) {
        p = p || {};
        var g = p.strict !== !1;
        t = n(f), r = t.length, e = 0;
        for (var w = [], y;
            (y = h(g)) !== !1;) w.push(y);
        return d(w)
    }
    return De = {
        version: "2.1.2",
        encode: l,
        decode: i
    }, De
}
var ie = {},
    Et;

function Zr() {
    return Et || (Et = 1, function(o) {
        ie.encode = function(n) {
            var d = new Uint8Array(n),
                s, u = d.length,
                a = "";
            for (s = 0; s < u; s += 3) a += o[d[s] >> 2], a += o[(d[s] & 3) << 4 | d[s + 1] >> 4], a += o[(d[s + 1] & 15) << 2 | d[s + 2] >> 6], a += o[d[s + 2] & 63];
            return u % 3 === 2 ? a = a.substring(0, a.length - 1) + "=" : u % 3 === 1 && (a = a.substring(0, a.length - 2) + "=="), a
        }, ie.decode = function(n) {
            var d = n.length * .75,
                s = n.length,
                u, a = 0,
                l, c, h, t;
            n[n.length - 1] === "=" && (d--, n[n.length - 2] === "=" && d--);
            var r = new ArrayBuffer(d),
                e = new Uint8Array(r);
            for (u = 0; u < s; u += 4) l = o.indexOf(n[u]), c = o.indexOf(n[u + 1]), h = o.indexOf(n[u + 2]), t = o.indexOf(n[u + 3]), e[a++] = l << 2 | c >> 4, e[a++] = (c & 15) << 4 | h >> 2, e[a++] = (h & 3) << 6 | t & 63;
            return r
        }
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")), ie
}
var Te, Bt;

function Qr() {
    if (Bt) return Te;
    Bt = 1;
    var o = typeof o < "u" ? o : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : !1,
        n = function() {
            try {
                var c = new Blob(["hi"]);
                return c.size === 2
            } catch {
                return !1
            }
        }(),
        d = n && function() {
            try {
                var c = new Blob([new Uint8Array([1, 2])]);
                return c.size === 2
            } catch {
                return !1
            }
        }(),
        s = o && o.prototype.append && o.prototype.getBlob;

    function u(c) {
        return c.map(function(h) {
            if (h.buffer instanceof ArrayBuffer) {
                var t = h.buffer;
                if (h.byteLength !== t.byteLength) {
                    var r = new Uint8Array(h.byteLength);
                    r.set(new Uint8Array(t, h.byteOffset, h.byteLength)), t = r.buffer
                }
                return t
            }
            return h
        })
    }

    function a(c, h) {
        h = h || {};
        var t = new o;
        return u(c).forEach(function(r) {
            t.append(r)
        }), h.type ? t.getBlob(h.type) : t.getBlob()
    }

    function l(c, h) {
        return new Blob(u(c), h || {})
    }
    return typeof Blob < "u" && (a.prototype = Blob.prototype, l.prototype = Blob.prototype), Te = function() {
        return n ? d ? Blob : l : s ? a : void 0
    }(), Te
}
var St;

function z() {
    return St || (St = 1, function(o) {
        var n = Xr(),
            d = yr(),
            s = Yr(),
            u = Kr(),
            a = Gr(),
            l;
        typeof ArrayBuffer < "u" && (l = Zr());
        var c = typeof navigator < "u" && /Android/i.test(navigator.userAgent),
            h = typeof navigator < "u" && /PhantomJS/i.test(navigator.userAgent),
            t = c || h;
        o.protocol = 3;
        var r = o.packets = {
                open: 0,
                close: 1,
                ping: 2,
                pong: 3,
                message: 4,
                upgrade: 5,
                noop: 6
            },
            e = n(r),
            i = {
                type: "error",
                data: "parser error"
            },
            f = Qr();
        o.encodePacket = function(v, _, F, x) {
            typeof _ == "function" && (x = _, _ = !1), typeof F == "function" && (x = F, F = null);
            var R = v.data === void 0 ? void 0 : v.data.buffer || v.data;
            if (typeof ArrayBuffer < "u" && R instanceof ArrayBuffer) return g(v, _, x);
            if (typeof f < "u" && R instanceof f) return y(v, _, x);
            if (R && R.base64) return p(v, x);
            var k = r[v.type];
            return v.data !== void 0 && (k += F ? a.encode(String(v.data), {
                strict: !1
            }) : String(v.data)), x("" + k)
        };

        function p(v, _) {
            var F = "b" + o.packets[v.type] + v.data.data;
            return _(F)
        }

        function g(v, _, F) {
            if (!_) return o.encodeBase64Packet(v, F);
            var x = v.data,
                R = new Uint8Array(x),
                k = new Uint8Array(1 + x.byteLength);
            k[0] = r[v.type];
            for (var S = 0; S < R.length; S++) k[S + 1] = R[S];
            return F(k.buffer)
        }

        function w(v, _, F) {
            if (!_) return o.encodeBase64Packet(v, F);
            var x = new FileReader;
            return x.onload = function() {
                o.encodePacket({
                    type: v.type,
                    data: x.result
                }, _, !0, F)
            }, x.readAsArrayBuffer(v.data)
        }

        function y(v, _, F) {
            if (!_) return o.encodeBase64Packet(v, F);
            if (t) return w(v, _, F);
            var x = new Uint8Array(1);
            x[0] = r[v.type];
            var R = new f([x.buffer, v.data]);
            return F(R)
        }
        o.encodeBase64Packet = function(v, _) {
            var F = "b" + o.packets[v.type];
            if (typeof f < "u" && v.data instanceof f) {
                var x = new FileReader;
                return x.onload = function() {
                    var b = x.result.split(",")[1];
                    _(F + b)
                }, x.readAsDataURL(v.data)
            }
            var R;
            try {
                R = String.fromCharCode.apply(null, new Uint8Array(v.data))
            } catch {
                for (var k = new Uint8Array(v.data), S = new Array(k.length), C = 0; C < k.length; C++) S[C] = k[C];
                R = String.fromCharCode.apply(null, S)
            }
            return F += btoa(R), _(F)
        }, o.decodePacket = function(v, _, F) {
            if (v === void 0) return i;
            if (typeof v == "string") {
                if (v.charAt(0) === "b") return o.decodeBase64Packet(v.substr(1), _);
                if (F && (v = m(v), v === !1)) return i;
                var R = v.charAt(0);
                return Number(R) != R || !e[R] ? i : v.length > 1 ? {
                    type: e[R],
                    data: v.substring(1)
                } : {
                    type: e[R]
                }
            }
            var x = new Uint8Array(v),
                R = x[0],
                k = s(v, 1);
            return f && _ === "blob" && (k = new f([k])), {
                type: e[R],
                data: k
            }
        };

        function m(v) {
            try {
                v = a.decode(v, {
                    strict: !1
                })
            } catch {
                return !1
            }
            return v
        }
        o.decodeBase64Packet = function(v, _) {
            var F = e[v.charAt(0)];
            if (!l) return {
                type: F,
                data: {
                    base64: !0,
                    data: v.substr(1)
                }
            };
            var x = l.decode(v.substr(1));
            return _ === "blob" && f && (x = new f([x])), {
                type: F,
                data: x
            }
        }, o.encodePayload = function(v, _, F) {
            typeof _ == "function" && (F = _, _ = null);
            var x = d(v);
            if (_ && x) return f && !t ? o.encodePayloadAsBlob(v, F) : o.encodePayloadAsArrayBuffer(v, F);
            if (!v.length) return F("0:");

            function R(S) {
                return S.length + ":" + S
            }

            function k(S, C) {
                o.encodePacket(S, x ? _ : !1, !1, function(b) {
                    C(null, R(b))
                })
            }
            A(v, k, function(S, C) {
                return F(C.join(""))
            })
        };

        function A(v, _, F) {
            for (var x = new Array(v.length), R = u(v.length, F), k = function(C, b, E) {
                    _(b, function(B, q) {
                        x[C] = q, E(B, x)
                    })
                }, S = 0; S < v.length; S++) k(S, v[S], R)
        }
        o.decodePayload = function(v, _, F) {
            if (typeof v != "string") return o.decodePayloadAsBinary(v, _, F);
            typeof _ == "function" && (F = _, _ = null);
            var x;
            if (v === "") return F(i, 0, 1);
            for (var R = "", k, S, C = 0, b = v.length; C < b; C++) {
                var E = v.charAt(C);
                if (E !== ":") {
                    R += E;
                    continue
                }
                if (R === "" || R != (k = Number(R)) || (S = v.substr(C + 1, k), R != S.length)) return F(i, 0, 1);
                if (S.length) {
                    if (x = o.decodePacket(S, _, !1), i.type === x.type && i.data === x.data) return F(i, 0, 1);
                    var B = F(x, C + k, b);
                    if (B === !1) return
                }
                C += k, R = ""
            }
            if (R !== "") return F(i, 0, 1)
        }, o.encodePayloadAsArrayBuffer = function(v, _) {
            if (!v.length) return _(new ArrayBuffer(0));

            function F(x, R) {
                o.encodePacket(x, !0, !0, function(k) {
                    return R(null, k)
                })
            }
            A(v, F, function(x, R) {
                var k = R.reduce(function(b, E) {
                        var B;
                        return typeof E == "string" ? B = E.length : B = E.byteLength, b + B.toString().length + B + 2
                    }, 0),
                    S = new Uint8Array(k),
                    C = 0;
                return R.forEach(function(b) {
                    var E = typeof b == "string",
                        B = b;
                    if (E) {
                        for (var P = new Uint8Array(b.length), q = 0; q < b.length; q++) P[q] = b.charCodeAt(q);
                        B = P.buffer
                    }
                    E ? S[C++] = 0 : S[C++] = 1;
                    for (var T = B.byteLength.toString(), q = 0; q < T.length; q++) S[C++] = parseInt(T[q]);
                    S[C++] = 255;
                    for (var P = new Uint8Array(B), q = 0; q < P.length; q++) S[C++] = P[q]
                }), _(S.buffer)
            })
        }, o.encodePayloadAsBlob = function(v, _) {
            function F(x, R) {
                o.encodePacket(x, !0, !0, function(k) {
                    var S = new Uint8Array(1);
                    if (S[0] = 1, typeof k == "string") {
                        for (var C = new Uint8Array(k.length), b = 0; b < k.length; b++) C[b] = k.charCodeAt(b);
                        k = C.buffer, S[0] = 0
                    }
                    for (var E = k instanceof ArrayBuffer ? k.byteLength : k.size, B = E.toString(), q = new Uint8Array(B.length + 1), b = 0; b < B.length; b++) q[b] = parseInt(B[b]);
                    if (q[B.length] = 255, f) {
                        var T = new f([S.buffer, q.buffer, k]);
                        R(null, T)
                    }
                })
            }
            A(v, F, function(x, R) {
                return _(new f(R))
            })
        }, o.decodePayloadAsBinary = function(v, _, F) {
            typeof _ == "function" && (F = _, _ = null);
            for (var x = v, R = []; x.byteLength > 0;) {
                for (var k = new Uint8Array(x), S = k[0] === 0, C = "", b = 1; k[b] !== 255; b++) {
                    if (C.length > 310) return F(i, 0, 1);
                    C += k[b]
                }
                x = s(x, 2 + C.length), C = parseInt(C);
                var E = s(x, 0, C);
                if (S) try {
                    E = String.fromCharCode.apply(null, new Uint8Array(E))
                } catch {
                    var B = new Uint8Array(E);
                    E = "";
                    for (var b = 0; b < B.length; b++) E += String.fromCharCode(B[b])
                }
                R.push(E), x = s(x, C)
            }
            var q = R.length;
            R.forEach(function(T, P) {
                F(o.decodePacket(T, _, !0), P, q)
            })
        }
    }(Ee)), Ee
}
var Pe, qt;

function nt() {
    if (qt) return Pe;
    qt = 1;
    var o = z(),
        n = U();
    Pe = d;

    function d(s) {
        this.path = s.path, this.hostname = s.hostname, this.port = s.port, this.secure = s.secure, this.query = s.query, this.timestampParam = s.timestampParam, this.timestampRequests = s.timestampRequests, this.readyState = "", this.agent = s.agent || !1, this.socket = s.socket, this.enablesXDR = s.enablesXDR, this.withCredentials = s.withCredentials, this.pfx = s.pfx, this.key = s.key, this.passphrase = s.passphrase, this.cert = s.cert, this.ca = s.ca, this.ciphers = s.ciphers, this.rejectUnauthorized = s.rejectUnauthorized, this.forceNode = s.forceNode, this.isReactNative = s.isReactNative, this.extraHeaders = s.extraHeaders, this.localAddress = s.localAddress
    }
    return n(d.prototype), d.prototype.onError = function(s, u) {
        var a = new Error(s);
        return a.type = "TransportError", a.description = u, this.emit("error", a), this
    }, d.prototype.open = function() {
        return (this.readyState === "closed" || this.readyState === "") && (this.readyState = "opening", this.doOpen()), this
    }, d.prototype.close = function() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
    }, d.prototype.send = function(s) {
        if (this.readyState === "open") this.write(s);
        else throw new Error("Transport not open")
    }, d.prototype.onOpen = function() {
        this.readyState = "open", this.writable = !0, this.emit("open")
    }, d.prototype.onData = function(s) {
        var u = o.decodePacket(s, this.socket.binaryType);
        this.onPacket(u)
    }, d.prototype.onPacket = function(s) {
        this.emit("packet", s)
    }, d.prototype.onClose = function() {
        this.readyState = "closed", this.emit("close")
    }, Pe
}
var se = {},
    Nt;

function pe() {
    return Nt || (Nt = 1, se.encode = function(o) {
        var n = "";
        for (var d in o) o.hasOwnProperty(d) && (n.length && (n += "&"), n += encodeURIComponent(d) + "=" + encodeURIComponent(o[d]));
        return n
    }, se.decode = function(o) {
        for (var n = {}, d = o.split("&"), s = 0, u = d.length; s < u; s++) {
            var a = d[s].split("=");
            n[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
        }
        return n
    }), se
}
var Ie, Ot;

function ge() {
    return Ot || (Ot = 1, Ie = function(o, n) {
        var d = function() {};
        d.prototype = n.prototype, o.prototype = new d, o.prototype.constructor = o
    }), Ie
}
var Me, Dt;

function vr() {
    if (Dt) return Me;
    Dt = 1;
    var o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
        n = 64,
        d = {},
        s = 0,
        u = 0,
        a;

    function l(t) {
        var r = "";
        do r = o[t % n] + r, t = Math.floor(t / n); while (t > 0);
        return r
    }

    function c(t) {
        var r = 0;
        for (u = 0; u < t.length; u++) r = r * n + d[t.charAt(u)];
        return r
    }

    function h() {
        var t = l(+new Date);
        return t !== a ? (s = 0, a = t) : t + "." + l(s++)
    }
    for (; u < n; u++) d[o[u]] = u;
    return h.encode = l, h.decode = c, Me = h, Me
}
var oe = {
        exports: {}
    },
    ae = {
        exports: {}
    },
    Le, Tt;

function en() {
    if (Tt) return Le;
    Tt = 1;
    var o = 1e3,
        n = o * 60,
        d = n * 60,
        s = d * 24,
        u = s * 365.25;
    Le = function(t, r) {
        r = r || {};
        var e = typeof t;
        if (e === "string" && t.length > 0) return a(t);
        if (e === "number" && isNaN(t) === !1) return r.long ? c(t) : l(t);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
    };

    function a(t) {
        if (t = String(t), !(t.length > 100)) {
            var r = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
            if (r) {
                var e = parseFloat(r[1]),
                    i = (r[2] || "ms").toLowerCase();
                switch (i) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return e * u;
                    case "days":
                    case "day":
                    case "d":
                        return e * s;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return e * d;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return e * n;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return e * o;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return e;
                    default:
                        return
                }
            }
        }
    }

    function l(t) {
        return t >= s ? Math.round(t / s) + "d" : t >= d ? Math.round(t / d) + "h" : t >= n ? Math.round(t / n) + "m" : t >= o ? Math.round(t / o) + "s" : t + "ms"
    }

    function c(t) {
        return h(t, s, "day") || h(t, d, "hour") || h(t, n, "minute") || h(t, o, "second") || t + " ms"
    }

    function h(t, r, e) {
        if (!(t < r)) return t < r * 1.5 ? Math.floor(t / r) + " " + e : Math.ceil(t / r) + " " + e + "s"
    }
    return Le
}
var Pt;

function tn() {
    return Pt || (Pt = 1, function(o, n) {
        n = o.exports = s.debug = s.default = s, n.coerce = h, n.disable = l, n.enable = a, n.enabled = c, n.humanize = en(), n.instances = [], n.names = [], n.skips = [], n.formatters = {};

        function d(t) {
            var r = 0,
                e;
            for (e in t) r = (r << 5) - r + t.charCodeAt(e), r |= 0;
            return n.colors[Math.abs(r) % n.colors.length]
        }

        function s(t) {
            var r;

            function e() {
                if (e.enabled) {
                    var i = e,
                        f = +new Date,
                        p = f - (r || f);
                    i.diff = p, i.prev = r, i.curr = f, r = f;
                    for (var g = new Array(arguments.length), w = 0; w < g.length; w++) g[w] = arguments[w];
                    g[0] = n.coerce(g[0]), typeof g[0] != "string" && g.unshift("%O");
                    var y = 0;
                    g[0] = g[0].replace(/%([a-zA-Z%])/g, function(A, v) {
                        if (A === "%%") return A;
                        y++;
                        var _ = n.formatters[v];
                        if (typeof _ == "function") {
                            var F = g[y];
                            A = _.call(i, F), g.splice(y, 1), y--
                        }
                        return A
                    }), n.formatArgs.call(i, g);
                    var m = e.log || n.log || console.log.bind(console);
                    m.apply(i, g)
                }
            }
            return e.namespace = t, e.enabled = n.enabled(t), e.useColors = n.useColors(), e.color = d(t), e.destroy = u, typeof n.init == "function" && n.init(e), n.instances.push(e), e
        }

        function u() {
            var t = n.instances.indexOf(this);
            return t !== -1 ? (n.instances.splice(t, 1), !0) : !1
        }

        function a(t) {
            n.save(t), n.names = [], n.skips = [];
            var r, e = (typeof t == "string" ? t : "").split(/[\s,]+/),
                i = e.length;
            for (r = 0; r < i; r++) e[r] && (t = e[r].replace(/\*/g, ".*?"), t[0] === "-" ? n.skips.push(new RegExp("^" + t.substr(1) + "$")) : n.names.push(new RegExp("^" + t + "$")));
            for (r = 0; r < n.instances.length; r++) {
                var f = n.instances[r];
                f.enabled = n.enabled(f.namespace)
            }
        }

        function l() {
            n.enable("")
        }

        function c(t) {
            if (t[t.length - 1] === "*") return !0;
            var r, e;
            for (r = 0, e = n.skips.length; r < e; r++)
                if (n.skips[r].test(t)) return !1;
            for (r = 0, e = n.names.length; r < e; r++)
                if (n.names[r].test(t)) return !0;
            return !1
        }

        function h(t) {
            return t instanceof Error ? t.stack || t.message : t
        }
    }(ae, ae.exports)), ae.exports
}
var It;

function ye() {
    return It || (It = 1, function(o, n) {
        var d = {};
        n = o.exports = tn(), n.log = a, n.formatArgs = u, n.save = l, n.load = c, n.useColors = s, n.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : h(), n.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

        function s() {
            return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }
        n.formatters.j = function(t) {
            try {
                return JSON.stringify(t)
            } catch (r) {
                return "[UnexpectedJSONParseError]: " + r.message
            }
        };

        function u(t) {
            var r = this.useColors;
            if (t[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + t[0] + (r ? "%c " : " ") + "+" + n.humanize(this.diff), !!r) {
                var e = "color: " + this.color;
                t.splice(1, 0, e, "color: inherit");
                var i = 0,
                    f = 0;
                t[0].replace(/%[a-zA-Z%]/g, function(p) {
                    p !== "%%" && (i++, p === "%c" && (f = i))
                }), t.splice(f, 0, e)
            }
        }

        function a() {
            return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function l(t) {
            try {
                t == null ? n.storage.removeItem("debug") : n.storage.debug = t
            } catch {}
        }

        function c() {
            var t;
            try {
                t = n.storage.debug
            } catch {}
            return !t && typeof W < "u" && "env" in W && (t = d.DEBUG), t
        }
        n.enable(c());

        function h() {
            try {
                return window.localStorage
            } catch {}
        }
    }(oe, oe.exports)), oe.exports
}
var Ue, Mt;

function mr() {
    if (Mt) return Ue;
    Mt = 1;
    var o = nt(),
        n = pe(),
        d = z(),
        s = ge(),
        u = vr(),
        a = ye()("engine.io-client:polling");
    Ue = c;
    var l = function() {
        var h = rt(),
            t = new h({
                xdomain: !1
            });
        return t.responseType != null
    }();

    function c(h) {
        var t = h && h.forceBase64;
        (!l || t) && (this.supportsBinary = !1), o.call(this, h)
    }
    return s(c, o), c.prototype.name = "polling", c.prototype.doOpen = function() {
        this.poll()
    }, c.prototype.pause = function(h) {
        var t = this;
        this.readyState = "pausing";

        function r() {
            a("paused"), t.readyState = "paused", h()
        }
        if (this.polling || !this.writable) {
            var e = 0;
            this.polling && (a("we are currently polling - waiting to pause"), e++, this.once("pollComplete", function() {
                a("pre-pause polling complete"), --e || r()
            })), this.writable || (a("we are currently writing - waiting to pause"), e++, this.once("drain", function() {
                a("pre-pause writing complete"), --e || r()
            }))
        } else r()
    }, c.prototype.poll = function() {
        a("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
    }, c.prototype.onData = function(h) {
        var t = this;
        a("polling got data %s", h);
        var r = function(e, i, f) {
            if (t.readyState === "opening" && e.type === "open" && t.onOpen(), e.type === "close") return t.onClose(), !1;
            t.onPacket(e)
        };
        d.decodePayload(h, this.socket.binaryType, r), this.readyState !== "closed" && (this.polling = !1, this.emit("pollComplete"), this.readyState === "open" ? this.poll() : a('ignoring poll - transport state "%s"', this.readyState))
    }, c.prototype.doClose = function() {
        var h = this;

        function t() {
            a("writing close packet"), h.write([{
                type: "close"
            }])
        }
        this.readyState === "open" ? (a("transport open - closing"), t()) : (a("transport not open - deferring close"), this.once("open", t))
    }, c.prototype.write = function(h) {
        var t = this;
        this.writable = !1;
        var r = function() {
            t.writable = !0, t.emit("drain")
        };
        d.encodePayload(h, this.supportsBinary, function(e) {
            t.doWrite(e, r)
        })
    }, c.prototype.uri = function() {
        var h = this.query || {},
            t = this.secure ? "https" : "http",
            r = "";
        this.timestampRequests !== !1 && (h[this.timestampParam] = u()), !this.supportsBinary && !h.sid && (h.b64 = 1), h = n.encode(h), this.port && (t === "https" && Number(this.port) !== 443 || t === "http" && Number(this.port) !== 80) && (r = ":" + this.port), h.length && (h = "?" + h);
        var e = this.hostname.indexOf(":") !== -1;
        return t + "://" + (e ? "[" + this.hostname + "]" : this.hostname) + r + this.path + h
    }, Ue
}
var Lt;

function rn() {
    if (Lt) return ne.exports;
    Lt = 1;
    var o = rt(),
        n = mr(),
        d = U(),
        s = ge(),
        u = ye()("engine.io-client:polling-xhr"),
        a = tt();
    ne.exports = c, ne.exports.Request = h;

    function l() {}

    function c(e) {
        if (n.call(this, e), this.requestTimeout = e.requestTimeout, this.extraHeaders = e.extraHeaders, typeof location < "u") {
            var i = location.protocol === "https:",
                f = location.port;
            f || (f = i ? 443 : 80), this.xd = typeof location < "u" && e.hostname !== location.hostname || f !== e.port, this.xs = e.secure !== i
        }
    }
    s(c, n), c.prototype.supportsBinary = !0, c.prototype.request = function(e) {
        return e = e || {}, e.uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.withCredentials = this.withCredentials, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.requestTimeout = this.requestTimeout, e.extraHeaders = this.extraHeaders, new h(e)
    }, c.prototype.doWrite = function(e, i) {
        var f = typeof e != "string" && e !== void 0,
            p = this.request({
                method: "POST",
                data: e,
                isBinary: f
            }),
            g = this;
        p.on("success", i), p.on("error", function(w) {
            g.onError("xhr post error", w)
        }), this.sendXhr = p
    }, c.prototype.doPoll = function() {
        u("xhr poll");
        var e = this.request(),
            i = this;
        e.on("data", function(f) {
            i.onData(f)
        }), e.on("error", function(f) {
            i.onError("xhr poll error", f)
        }), this.pollXhr = e
    };

    function h(e) {
        this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = e.async !== !1, this.data = e.data !== void 0 ? e.data : null, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.withCredentials = e.withCredentials, this.requestTimeout = e.requestTimeout, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
    }
    if (d(h.prototype), h.prototype.create = function() {
            var e = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR
            };
            e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
            var i = this.xhr = new o(e),
                f = this;
            try {
                u("xhr open %s: %s", this.method, this.uri), i.open(this.method, this.uri, this.async);
                try {
                    if (this.extraHeaders) {
                        i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                        for (var p in this.extraHeaders) this.extraHeaders.hasOwnProperty(p) && i.setRequestHeader(p, this.extraHeaders[p])
                    }
                } catch {}
                if (this.method === "POST") try {
                    this.isBinary ? i.setRequestHeader("Content-type", "application/octet-stream") : i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch {}
                try {
                    i.setRequestHeader("Accept", "*/*")
                } catch {}
                "withCredentials" in i && (i.withCredentials = this.withCredentials), this.requestTimeout && (i.timeout = this.requestTimeout), this.hasXDR() ? (i.onload = function() {
                    f.onLoad()
                }, i.onerror = function() {
                    f.onError(i.responseText)
                }) : i.onreadystatechange = function() {
                    if (i.readyState === 2) try {
                        var g = i.getResponseHeader("Content-Type");
                        (f.supportsBinary && g === "application/octet-stream" || g === "application/octet-stream; charset=UTF-8") && (i.responseType = "arraybuffer")
                    } catch {}
                    i.readyState === 4 && (i.status === 200 || i.status === 1223 ? f.onLoad() : setTimeout(function() {
                        f.onError(typeof i.status == "number" ? i.status : 0)
                    }, 0))
                }, u("xhr data %s", this.data), i.send(this.data)
            } catch (g) {
                setTimeout(function() {
                    f.onError(g)
                }, 0);
                return
            }
            typeof document < "u" && (this.index = h.requestsCount++, h.requests[this.index] = this)
        }, h.prototype.onSuccess = function() {
            this.emit("success"), this.cleanup()
        }, h.prototype.onData = function(e) {
            this.emit("data", e), this.onSuccess()
        }, h.prototype.onError = function(e) {
            this.emit("error", e), this.cleanup(!0)
        }, h.prototype.cleanup = function(e) {
            if (!(typeof this.xhr > "u" || this.xhr === null)) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = l : this.xhr.onreadystatechange = l, e) try {
                    this.xhr.abort()
                } catch {}
                typeof document < "u" && delete h.requests[this.index], this.xhr = null
            }
        }, h.prototype.onLoad = function() {
            var e;
            try {
                var i;
                try {
                    i = this.xhr.getResponseHeader("Content-Type")
                } catch {}
                i === "application/octet-stream" || i === "application/octet-stream; charset=UTF-8" ? e = this.xhr.response || this.xhr.responseText : e = this.xhr.responseText
            } catch (f) {
                this.onError(f)
            }
            e != null && this.onData(e)
        }, h.prototype.hasXDR = function() {
            return typeof XDomainRequest < "u" && !this.xs && this.enablesXDR
        }, h.prototype.abort = function() {
            this.cleanup()
        }, h.requestsCount = 0, h.requests = {}, typeof document < "u") {
        if (typeof attachEvent == "function") attachEvent("onunload", r);
        else if (typeof addEventListener == "function") {
            var t = "onpagehide" in a ? "pagehide" : "unload";
            addEventListener(t, r, !1)
        }
    }

    function r() {
        for (var e in h.requests) h.requests.hasOwnProperty(e) && h.requests[e].abort()
    }
    return ne.exports
}
var $e, Ut;

function nn() {
    if (Ut) return $e;
    Ut = 1;
    var o = mr(),
        n = ge(),
        d = tt();
    $e = c;
    var s = /\n/g,
        u = /\\n/g,
        a;

    function l() {}

    function c(h) {
        o.call(this, h), this.query = this.query || {}, a || (a = d.___eio = d.___eio || []), this.index = a.length;
        var t = this;
        a.push(function(r) {
            t.onData(r)
        }), this.query.j = this.index, typeof addEventListener == "function" && addEventListener("beforeunload", function() {
            t.script && (t.script.onerror = l)
        }, !1)
    }
    return n(c, o), c.prototype.supportsBinary = !1, c.prototype.doClose = function() {
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), o.prototype.doClose.call(this)
    }, c.prototype.doPoll = function() {
        var h = this,
            t = document.createElement("script");
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function(i) {
            h.onError("jsonp poll error", i)
        };
        var r = document.getElementsByTagName("script")[0];
        r ? r.parentNode.insertBefore(t, r) : (document.head || document.body).appendChild(t), this.script = t;
        var e = typeof navigator < "u" && /gecko/i.test(navigator.userAgent);
        e && setTimeout(function() {
            var i = document.createElement("iframe");
            document.body.appendChild(i), document.body.removeChild(i)
        }, 100)
    }, c.prototype.doWrite = function(h, t) {
        var r = this;
        if (!this.form) {
            var e = document.createElement("form"),
                i = document.createElement("textarea"),
                f = this.iframeId = "eio_iframe_" + this.index,
                p;
            e.className = "socketio", e.style.position = "absolute", e.style.top = "-1000px", e.style.left = "-1000px", e.target = f, e.method = "POST", e.setAttribute("accept-charset", "utf-8"), i.name = "d", e.appendChild(i), document.body.appendChild(e), this.form = e, this.area = i
        }
        this.form.action = this.uri();

        function g() {
            w(), t()
        }

        function w() {
            if (r.iframe) try {
                r.form.removeChild(r.iframe)
            } catch (m) {
                r.onError("jsonp polling iframe removal error", m)
            }
            try {
                var y = '<iframe src="javascript:0" name="' + r.iframeId + '">';
                p = document.createElement(y)
            } catch {
                p = document.createElement("iframe"), p.name = r.iframeId, p.src = "javascript:0"
            }
            p.id = r.iframeId, r.form.appendChild(p), r.iframe = p
        }
        w(), h = h.replace(u, `\\
`), this.area.value = h.replace(s, "\\n");
        try {
            this.form.submit()
        } catch {}
        this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
            r.iframe.readyState === "complete" && g()
        } : this.iframe.onload = g
    }, $e
}
var He, $t;

function sn() {
    if ($t) return He;
    $t = 1;
    var o = nt(),
        n = z(),
        d = pe(),
        s = ge(),
        u = vr(),
        a = ye()("engine.io-client:websocket"),
        l, c;
    if (typeof WebSocket < "u" ? l = WebSocket : typeof self < "u" && (l = self.WebSocket || self.MozWebSocket), typeof window > "u") try {
        c = Nr
    } catch {}
    var h = l || c;
    He = t;

    function t(r) {
        var e = r && r.forceBase64;
        e && (this.supportsBinary = !1), this.perMessageDeflate = r.perMessageDeflate, this.usingBrowserWebSocket = l && !r.forceNode, this.protocols = r.protocols, this.usingBrowserWebSocket || (h = c), o.call(this, r)
    }
    return s(t, o), t.prototype.name = "websocket", t.prototype.supportsBinary = !0, t.prototype.doOpen = function() {
        if (this.check()) {
            var r = this.uri(),
                e = this.protocols,
                i = {};
            this.isReactNative || (i.agent = this.agent, i.perMessageDeflate = this.perMessageDeflate, i.pfx = this.pfx, i.key = this.key, i.passphrase = this.passphrase, i.cert = this.cert, i.ca = this.ca, i.ciphers = this.ciphers, i.rejectUnauthorized = this.rejectUnauthorized), this.extraHeaders && (i.headers = this.extraHeaders), this.localAddress && (i.localAddress = this.localAddress);
            try {
                this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e ? new h(r, e) : new h(r) : new h(r, e, i)
            } catch (f) {
                return this.emit("error", f)
            }
            this.ws.binaryType === void 0 && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
        }
    }, t.prototype.addEventListeners = function() {
        var r = this;
        this.ws.onopen = function() {
            r.onOpen()
        }, this.ws.onclose = function() {
            r.onClose()
        }, this.ws.onmessage = function(e) {
            r.onData(e.data)
        }, this.ws.onerror = function(e) {
            r.onError("websocket error", e)
        }
    }, t.prototype.write = function(r) {
        var e = this;
        this.writable = !1;
        for (var i = r.length, f = 0, p = i; f < p; f++)(function(w) {
            n.encodePacket(w, e.supportsBinary, function(y) {
                if (!e.usingBrowserWebSocket) {
                    var m = {};
                    if (w.options && (m.compress = w.options.compress), e.perMessageDeflate) {
                        var A = typeof y == "string" ? L.byteLength(y) : y.length;
                        A < e.perMessageDeflate.threshold && (m.compress = !1)
                    }
                }
                try {
                    e.usingBrowserWebSocket ? e.ws.send(y) : e.ws.send(y, m)
                } catch {
                    a("websocket closed before onclose event")
                }--i || g()
            })
        })(r[f]);

        function g() {
            e.emit("flush"), setTimeout(function() {
                e.writable = !0, e.emit("drain")
            }, 0)
        }
    }, t.prototype.onClose = function() {
        o.prototype.onClose.call(this)
    }, t.prototype.doClose = function() {
        typeof this.ws < "u" && this.ws.close()
    }, t.prototype.uri = function() {
        var r = this.query || {},
            e = this.secure ? "wss" : "ws",
            i = "";
        this.port && (e === "wss" && Number(this.port) !== 443 || e === "ws" && Number(this.port) !== 80) && (i = ":" + this.port), this.timestampRequests && (r[this.timestampParam] = u()), this.supportsBinary || (r.b64 = 1), r = d.encode(r), r.length && (r = "?" + r);
        var f = this.hostname.indexOf(":") !== -1;
        return e + "://" + (f ? "[" + this.hostname + "]" : this.hostname) + i + this.path + r
    }, t.prototype.check = function() {
        return !!h && !("__initialize" in h && this.name === t.prototype.name)
    }, He
}
var Ht;

function jt() {
    if (Ht) return te;
    Ht = 1;
    var o = rt(),
        n = rn(),
        d = nn(),
        s = sn();
    te.polling = u, te.websocket = s;

    function u(a) {
        var l, c = !1,
            h = !1,
            t = a.jsonp !== !1;
        if (typeof location < "u") {
            var r = location.protocol === "https:",
                e = location.port;
            e || (e = r ? 443 : 80), c = a.hostname !== location.hostname || e !== a.port, h = a.secure !== r
        }
        if (a.xdomain = c, a.xscheme = h, l = new o(a), "open" in l && !a.forceJSONP) return new n(a);
        if (!t) throw new Error("JSONP disabled");
        return new d(a)
    }
    return te
}
var je, Jt;

function Cr() {
    if (Jt) return je;
    Jt = 1;
    var o = [].indexOf;
    return je = function(n, d) {
        if (o) return n.indexOf(d);
        for (var s = 0; s < n.length; ++s)
            if (n[s] === d) return s;
        return -1
    }, je
}
var Je, Wt;

function on() {
    if (Wt) return Je;
    Wt = 1;
    var o = jt(),
        n = U(),
        d = ye()("engine.io-client:socket"),
        s = Cr(),
        u = z(),
        a = dr(),
        l = pe();
    Je = c;

    function c(t, r) {
        if (!(this instanceof c)) return new c(t, r);
        r = r || {}, t && typeof t == "object" && (r = t, t = null), t ? (t = a(t), r.hostname = t.host, r.secure = t.protocol === "https" || t.protocol === "wss", r.port = t.port, t.query && (r.query = t.query)) : r.host && (r.hostname = a(r.host).host), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.agent = r.agent || !1, this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? 443 : 80), this.query = r.query || {}, typeof this.query == "string" && (this.query = l.decode(this.query)), this.upgrade = r.upgrade !== !1, this.path = (r.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!r.forceJSONP, this.jsonp = r.jsonp !== !1, this.forceBase64 = !!r.forceBase64, this.enablesXDR = !!r.enablesXDR, this.withCredentials = r.withCredentials !== !1, this.timestampParam = r.timestampParam || "t", this.timestampRequests = r.timestampRequests, this.transports = r.transports || ["polling", "websocket"], this.transportOptions = r.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = r.policyPort || 843, this.rememberUpgrade = r.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = r.onlyBinaryUpgrades, this.perMessageDeflate = r.perMessageDeflate !== !1 ? r.perMessageDeflate || {} : !1, this.perMessageDeflate === !0 && (this.perMessageDeflate = {}), this.perMessageDeflate && this.perMessageDeflate.threshold == null && (this.perMessageDeflate.threshold = 1024), this.pfx = r.pfx || void 0, this.key = r.key || void 0, this.passphrase = r.passphrase || void 0, this.cert = r.cert || void 0, this.ca = r.ca || void 0, this.ciphers = r.ciphers || void 0, this.rejectUnauthorized = r.rejectUnauthorized === void 0 ? !0 : r.rejectUnauthorized, this.forceNode = !!r.forceNode, this.isReactNative = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative", (typeof self > "u" || this.isReactNative) && (r.extraHeaders && Object.keys(r.extraHeaders).length > 0 && (this.extraHeaders = r.extraHeaders), r.localAddress && (this.localAddress = r.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
    }
    c.priorWebsocketSuccess = !1, n(c.prototype), c.protocol = u.protocol, c.Socket = c, c.Transport = nt(), c.transports = jt(), c.parser = z(), c.prototype.createTransport = function(t) {
        d('creating transport "%s"', t);
        var r = h(this.query);
        r.EIO = u.protocol, r.transport = t;
        var e = this.transportOptions[t] || {};
        this.id && (r.sid = this.id);
        var i = new o[t]({
            query: r,
            socket: this,
            agent: e.agent || this.agent,
            hostname: e.hostname || this.hostname,
            port: e.port || this.port,
            secure: e.secure || this.secure,
            path: e.path || this.path,
            forceJSONP: e.forceJSONP || this.forceJSONP,
            jsonp: e.jsonp || this.jsonp,
            forceBase64: e.forceBase64 || this.forceBase64,
            enablesXDR: e.enablesXDR || this.enablesXDR,
            withCredentials: e.withCredentials || this.withCredentials,
            timestampRequests: e.timestampRequests || this.timestampRequests,
            timestampParam: e.timestampParam || this.timestampParam,
            policyPort: e.policyPort || this.policyPort,
            pfx: e.pfx || this.pfx,
            key: e.key || this.key,
            passphrase: e.passphrase || this.passphrase,
            cert: e.cert || this.cert,
            ca: e.ca || this.ca,
            ciphers: e.ciphers || this.ciphers,
            rejectUnauthorized: e.rejectUnauthorized || this.rejectUnauthorized,
            perMessageDeflate: e.perMessageDeflate || this.perMessageDeflate,
            extraHeaders: e.extraHeaders || this.extraHeaders,
            forceNode: e.forceNode || this.forceNode,
            localAddress: e.localAddress || this.localAddress,
            requestTimeout: e.requestTimeout || this.requestTimeout,
            protocols: e.protocols || void 0,
            isReactNative: this.isReactNative
        });
        return i
    };

    function h(t) {
        var r = {};
        for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e]);
        return r
    }
    return c.prototype.open = function() {
        var t;
        if (this.rememberUpgrade && c.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) t = "websocket";
        else if (this.transports.length === 0) {
            var r = this;
            setTimeout(function() {
                r.emit("error", "No transports available")
            }, 0);
            return
        } else t = this.transports[0];
        this.readyState = "opening";
        try {
            t = this.createTransport(t)
        } catch {
            this.transports.shift(), this.open();
            return
        }
        t.open(), this.setTransport(t)
    }, c.prototype.setTransport = function(t) {
        d("setting transport %s", t.name);
        var r = this;
        this.transport && (d("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function() {
            r.onDrain()
        }).on("packet", function(e) {
            r.onPacket(e)
        }).on("error", function(e) {
            r.onError(e)
        }).on("close", function() {
            r.onClose("transport close")
        })
    }, c.prototype.probe = function(t) {
        d('probing transport "%s"', t);
        var r = this.createTransport(t, {
                probe: 1
            }),
            e = !1,
            i = this;
        c.priorWebsocketSuccess = !1;

        function f() {
            if (i.onlyBinaryUpgrades) {
                var v = !this.supportsBinary && i.transport.supportsBinary;
                e = e || v
            }
            e || (d('probe transport "%s" opened', t), r.send([{
                type: "ping",
                data: "probe"
            }]), r.once("packet", function(_) {
                if (!e)
                    if (_.type === "pong" && _.data === "probe") {
                        if (d('probe transport "%s" pong', t), i.upgrading = !0, i.emit("upgrading", r), !r) return;
                        c.priorWebsocketSuccess = r.name === "websocket", d('pausing current transport "%s"', i.transport.name), i.transport.pause(function() {
                            e || i.readyState !== "closed" && (d("changing transport and sending upgrade packet"), A(), i.setTransport(r), r.send([{
                                type: "upgrade"
                            }]), i.emit("upgrade", r), r = null, i.upgrading = !1, i.flush())
                        })
                    } else {
                        d('probe transport "%s" failed', t);
                        var F = new Error("probe error");
                        F.transport = r.name, i.emit("upgradeError", F)
                    }
            }))
        }

        function p() {
            e || (e = !0, A(), r.close(), r = null)
        }

        function g(v) {
            var _ = new Error("probe error: " + v);
            _.transport = r.name, p(), d('probe transport "%s" failed because of error: %s', t, v), i.emit("upgradeError", _)
        }

        function w() {
            g("transport closed")
        }

        function y() {
            g("socket closed")
        }

        function m(v) {
            r && v.name !== r.name && (d('"%s" works - aborting "%s"', v.name, r.name), p())
        }

        function A() {
            r.removeListener("open", f), r.removeListener("error", g), r.removeListener("close", w), i.removeListener("close", y), i.removeListener("upgrading", m)
        }
        r.once("open", f), r.once("error", g), r.once("close", w), this.once("close", y), this.once("upgrading", m), r.open()
    }, c.prototype.onOpen = function() {
        if (d("socket open"), this.readyState = "open", c.priorWebsocketSuccess = this.transport.name === "websocket", this.emit("open"), this.flush(), this.readyState === "open" && this.upgrade && this.transport.pause) {
            d("starting upgrade probes");
            for (var t = 0, r = this.upgrades.length; t < r; t++) this.probe(this.upgrades[t])
        }
    }, c.prototype.onPacket = function(t) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (d('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
            case "open":
                this.onHandshake(JSON.parse(t.data));
                break;
            case "pong":
                this.setPing(), this.emit("pong");
                break;
            case "error":
                var r = new Error("server error");
                r.code = t.data, this.onError(r);
                break;
            case "message":
                this.emit("data", t.data), this.emit("message", t.data);
                break
        } else d('packet received with socket readyState "%s"', this.readyState)
    }, c.prototype.onHandshake = function(t) {
        this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), this.readyState !== "closed" && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
    }, c.prototype.onHeartbeat = function(t) {
        clearTimeout(this.pingTimeoutTimer);
        var r = this;
        r.pingTimeoutTimer = setTimeout(function() {
            r.readyState !== "closed" && r.onClose("ping timeout")
        }, t || r.pingInterval + r.pingTimeout)
    }, c.prototype.setPing = function() {
        var t = this;
        clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function() {
            d("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout)
        }, t.pingInterval)
    }, c.prototype.ping = function() {
        var t = this;
        this.sendPacket("ping", function() {
            t.emit("ping")
        })
    }, c.prototype.onDrain = function() {
        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emit("drain") : this.flush()
    }, c.prototype.flush = function() {
        this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length && (d("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
    }, c.prototype.write = c.prototype.send = function(t, r, e) {
        return this.sendPacket("message", t, r, e), this
    }, c.prototype.sendPacket = function(t, r, e, i) {
        if (typeof r == "function" && (i = r, r = void 0), typeof e == "function" && (i = e, e = null), !(this.readyState === "closing" || this.readyState === "closed")) {
            e = e || {}, e.compress = e.compress !== !1;
            var f = {
                type: t,
                data: r,
                options: e
            };
            this.emit("packetCreate", f), this.writeBuffer.push(f), i && this.once("flush", i), this.flush()
        }
    }, c.prototype.close = function() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.readyState = "closing";
            var t = this;
            this.writeBuffer.length ? this.once("drain", function() {
                this.upgrading ? i() : r()
            }) : this.upgrading ? i() : r()
        }

        function r() {
            t.onClose("forced close"), d("socket closing - telling transport to close"), t.transport.close()
        }

        function e() {
            t.removeListener("upgrade", e), t.removeListener("upgradeError", e), r()
        }

        function i() {
            t.once("upgrade", e), t.once("upgradeError", e)
        }
        return this
    }, c.prototype.onError = function(t) {
        d("socket error %j", t), c.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t)
    }, c.prototype.onClose = function(t, r) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            d('socket close with reason: "%s"', t);
            var e = this;
            clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, r), e.writeBuffer = [], e.prevBufferLen = 0
        }
    }, c.prototype.filterUpgrades = function(t) {
        for (var r = [], e = 0, i = t.length; e < i; e++) ~s(this.transports, t[e]) && r.push(t[e]);
        return r
    }, Je
}
var zt;

function an() {
    return zt || (zt = 1, ee.exports = on(), ee.exports.parser = z()), ee.exports
}
var We = {
        exports: {}
    },
    ze, Xt;

function cn() {
    if (Xt) return ze;
    Xt = 1, ze = o;

    function o(n, d) {
        var s = [];
        d = d || 0;
        for (var u = d || 0; u < n.length; u++) s[u - d] = n[u];
        return s
    }
    return ze
}
var Xe, Vt;

function wr() {
    if (Vt) return Xe;
    Vt = 1, Xe = o;

    function o(n, d, s) {
        return n.on(d, s), {
            destroy: function() {
                n.removeListener(d, s)
            }
        }
    }
    return Xe
}
var Ve, Yt;

function br() {
    if (Yt) return Ve;
    Yt = 1;
    var o = [].slice;
    return Ve = function(n, d) {
        if (typeof d == "string" && (d = n[d]), typeof d != "function") throw new Error("bind() requires a function");
        var s = o.call(arguments, 2);
        return function() {
            return d.apply(n, s.concat(o.call(arguments)))
        }
    }, Ve
}
var Kt;

function _r() {
    return Kt || (Kt = 1, function(o, n) {
        var d = et(),
            s = U(),
            u = cn(),
            a = wr(),
            l = br(),
            c = de()("socket.io-client:socket"),
            h = pe(),
            t = yr();
        o.exports = i;
        var r = {
                connect: 1,
                connect_error: 1,
                connect_timeout: 1,
                connecting: 1,
                disconnect: 1,
                error: 1,
                reconnect: 1,
                reconnect_attempt: 1,
                reconnect_failed: 1,
                reconnect_error: 1,
                reconnecting: 1,
                ping: 1,
                pong: 1
            },
            e = s.prototype.emit;

        function i(f, p, g) {
            this.io = f, this.nsp = p, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, g && g.query && (this.query = g.query), this.io.autoConnect && this.open()
        }
        s(i.prototype), i.prototype.subEvents = function() {
            if (!this.subs) {
                var f = this.io;
                this.subs = [a(f, "open", l(this, "onopen")), a(f, "packet", l(this, "onpacket")), a(f, "close", l(this, "onclose"))]
            }
        }, i.prototype.open = i.prototype.connect = function() {
            return this.connected ? this : (this.subEvents(), this.io.reconnecting || this.io.open(), this.io.readyState === "open" && this.onopen(), this.emit("connecting"), this)
        }, i.prototype.send = function() {
            var f = u(arguments);
            return f.unshift("message"), this.emit.apply(this, f), this
        }, i.prototype.emit = function(f) {
            if (r.hasOwnProperty(f)) return e.apply(this, arguments), this;
            var p = u(arguments),
                g = {
                    type: (this.flags.binary !== void 0 ? this.flags.binary : t(p)) ? d.BINARY_EVENT : d.EVENT,
                    data: p
                };
            return g.options = {}, g.options.compress = !this.flags || this.flags.compress !== !1, typeof p[p.length - 1] == "function" && (c("emitting packet with ack id %d", this.ids), this.acks[this.ids] = p.pop(), g.id = this.ids++), this.connected ? this.packet(g) : this.sendBuffer.push(g), this.flags = {}, this
        }, i.prototype.packet = function(f) {
            f.nsp = this.nsp, this.io.packet(f)
        }, i.prototype.onopen = function() {
            if (c("transport is open - connecting"), this.nsp !== "/")
                if (this.query) {
                    var f = typeof this.query == "object" ? h.encode(this.query) : this.query;
                    c("sending connect packet with query %s", f), this.packet({
                        type: d.CONNECT,
                        query: f
                    })
                } else this.packet({
                    type: d.CONNECT
                })
        }, i.prototype.onclose = function(f) {
            c("close (%s)", f), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", f)
        }, i.prototype.onpacket = function(f) {
            var p = f.nsp === this.nsp,
                g = f.type === d.ERROR && f.nsp === "/";
            if (!(!p && !g)) switch (f.type) {
                case d.CONNECT:
                    this.onconnect();
                    break;
                case d.EVENT:
                    this.onevent(f);
                    break;
                case d.BINARY_EVENT:
                    this.onevent(f);
                    break;
                case d.ACK:
                    this.onack(f);
                    break;
                case d.BINARY_ACK:
                    this.onack(f);
                    break;
                case d.DISCONNECT:
                    this.ondisconnect();
                    break;
                case d.ERROR:
                    this.emit("error", f.data);
                    break
            }
        }, i.prototype.onevent = function(f) {
            var p = f.data || [];
            c("emitting event %j", p), f.id != null && (c("attaching ack callback to event"), p.push(this.ack(f.id))), this.connected ? e.apply(this, p) : this.receiveBuffer.push(p)
        }, i.prototype.ack = function(f) {
            var p = this,
                g = !1;
            return function() {
                if (!g) {
                    g = !0;
                    var w = u(arguments);
                    c("sending ack %j", w), p.packet({
                        type: t(w) ? d.BINARY_ACK : d.ACK,
                        id: f,
                        data: w
                    })
                }
            }
        }, i.prototype.onack = function(f) {
            var p = this.acks[f.id];
            typeof p == "function" ? (c("calling ack %s with %j", f.id, f.data), p.apply(this, f.data), delete this.acks[f.id]) : c("bad ack %s", f.id)
        }, i.prototype.onconnect = function() {
            this.connected = !0, this.disconnected = !1, this.emitBuffered(), this.emit("connect")
        }, i.prototype.emitBuffered = function() {
            var f;
            for (f = 0; f < this.receiveBuffer.length; f++) e.apply(this, this.receiveBuffer[f]);
            for (this.receiveBuffer = [], f = 0; f < this.sendBuffer.length; f++) this.packet(this.sendBuffer[f]);
            this.sendBuffer = []
        }, i.prototype.ondisconnect = function() {
            c("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
        }, i.prototype.destroy = function() {
            if (this.subs) {
                for (var f = 0; f < this.subs.length; f++) this.subs[f].destroy();
                this.subs = null
            }
            this.io.destroy(this)
        }, i.prototype.close = i.prototype.disconnect = function() {
            return this.connected && (c("performing disconnect (%s)", this.nsp), this.packet({
                type: d.DISCONNECT
            })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
        }, i.prototype.compress = function(f) {
            return this.flags.compress = f, this
        }, i.prototype.binary = function(f) {
            return this.flags.binary = f, this
        }
    }(We)), We.exports
}
var Ye, Gt;

function un() {
    if (Gt) return Ye;
    Gt = 1, Ye = o;

    function o(n) {
        n = n || {}, this.ms = n.min || 100, this.max = n.max || 1e4, this.factor = n.factor || 2, this.jitter = n.jitter > 0 && n.jitter <= 1 ? n.jitter : 0, this.attempts = 0
    }
    return o.prototype.duration = function() {
        var n = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var d = Math.random(),
                s = Math.floor(d * this.jitter * n);
            n = (Math.floor(d * 10) & 1) == 0 ? n - s : n + s
        }
        return Math.min(n, this.max) | 0
    }, o.prototype.reset = function() {
        this.attempts = 0
    }, o.prototype.setMin = function(n) {
        this.ms = n
    }, o.prototype.setMax = function(n) {
        this.max = n
    }, o.prototype.setJitter = function(n) {
        this.jitter = n
    }, Ye
}
var Ke, Zt;

function Qt() {
    if (Zt) return Ke;
    Zt = 1;
    var o = an(),
        n = _r(),
        d = U(),
        s = et(),
        u = wr(),
        a = br(),
        l = de()("socket.io-client:manager"),
        c = Cr(),
        h = un(),
        t = Object.prototype.hasOwnProperty;
    Ke = r;

    function r(e, i) {
        if (!(this instanceof r)) return new r(e, i);
        e && typeof e == "object" && (i = e, e = void 0), i = i || {}, i.path = i.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = i, this.reconnection(i.reconnection !== !1), this.reconnectionAttempts(i.reconnectionAttempts || 1 / 0), this.reconnectionDelay(i.reconnectionDelay || 1e3), this.reconnectionDelayMax(i.reconnectionDelayMax || 5e3), this.randomizationFactor(i.randomizationFactor || .5), this.backoff = new h({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(i.timeout == null ? 2e4 : i.timeout), this.readyState = "closed", this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
        var f = i.parser || s;
        this.encoder = new f.Encoder, this.decoder = new f.Decoder, this.autoConnect = i.autoConnect !== !1, this.autoConnect && this.open()
    }
    return r.prototype.emitAll = function() {
        this.emit.apply(this, arguments);
        for (var e in this.nsps) t.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
    }, r.prototype.updateSocketIds = function() {
        for (var e in this.nsps) t.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e))
    }, r.prototype.generateId = function(e) {
        return (e === "/" ? "" : e + "#") + this.engine.id
    }, d(r.prototype), r.prototype.reconnection = function(e) {
        return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
    }, r.prototype.reconnectionAttempts = function(e) {
        return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts
    }, r.prototype.reconnectionDelay = function(e) {
        return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay
    }, r.prototype.randomizationFactor = function(e) {
        return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor
    }, r.prototype.reconnectionDelayMax = function(e) {
        return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax
    }, r.prototype.timeout = function(e) {
        return arguments.length ? (this._timeout = e, this) : this._timeout
    }, r.prototype.maybeReconnectOnOpen = function() {
        !this.reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }, r.prototype.open = r.prototype.connect = function(e, i) {
        if (l("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
        l("opening %s", this.uri), this.engine = o(this.uri, this.opts);
        var f = this.engine,
            p = this;
        this.readyState = "opening", this.skipReconnect = !1;
        var g = u(f, "open", function() {
                p.onopen(), e && e()
            }),
            w = u(f, "error", function(A) {
                if (l("connect_error"), p.cleanup(), p.readyState = "closed", p.emitAll("connect_error", A), e) {
                    var v = new Error("Connection error");
                    v.data = A, e(v)
                } else p.maybeReconnectOnOpen()
            });
        if (this._timeout !== !1) {
            var y = this._timeout;
            l("connect attempt will timeout after %d", y), y === 0 && g.destroy();
            var m = setTimeout(function() {
                l("connect attempt timed out after %d", y), g.destroy(), f.close(), f.emit("error", "timeout"), p.emitAll("connect_timeout", y)
            }, y);
            this.subs.push({
                destroy: function() {
                    clearTimeout(m)
                }
            })
        }
        return this.subs.push(g), this.subs.push(w), this
    }, r.prototype.onopen = function() {
        l("open"), this.cleanup(), this.readyState = "open", this.emit("open");
        var e = this.engine;
        this.subs.push(u(e, "data", a(this, "ondata"))), this.subs.push(u(e, "ping", a(this, "onping"))), this.subs.push(u(e, "pong", a(this, "onpong"))), this.subs.push(u(e, "error", a(this, "onerror"))), this.subs.push(u(e, "close", a(this, "onclose"))), this.subs.push(u(this.decoder, "decoded", a(this, "ondecoded")))
    }, r.prototype.onping = function() {
        this.lastPing = new Date, this.emitAll("ping")
    }, r.prototype.onpong = function() {
        this.emitAll("pong", new Date - this.lastPing)
    }, r.prototype.ondata = function(e) {
        this.decoder.add(e)
    }, r.prototype.ondecoded = function(e) {
        this.emit("packet", e)
    }, r.prototype.onerror = function(e) {
        l("error", e), this.emitAll("error", e)
    }, r.prototype.socket = function(e, i) {
        var f = this.nsps[e];
        if (!f) {
            f = new n(this, e, i), this.nsps[e] = f;
            var p = this;
            f.on("connecting", g), f.on("connect", function() {
                f.id = p.generateId(e)
            }), this.autoConnect && g()
        }

        function g() {
            ~c(p.connecting, f) || p.connecting.push(f)
        }
        return f
    }, r.prototype.destroy = function(e) {
        var i = c(this.connecting, e);
        ~i && this.connecting.splice(i, 1), !this.connecting.length && this.close()
    }, r.prototype.packet = function(e) {
        l("writing packet %j", e);
        var i = this;
        e.query && e.type === 0 && (e.nsp += "?" + e.query), i.encoding ? i.packetBuffer.push(e) : (i.encoding = !0, this.encoder.encode(e, function(f) {
            for (var p = 0; p < f.length; p++) i.engine.write(f[p], e.options);
            i.encoding = !1, i.processPacketQueue()
        }))
    }, r.prototype.processPacketQueue = function() {
        if (this.packetBuffer.length > 0 && !this.encoding) {
            var e = this.packetBuffer.shift();
            this.packet(e)
        }
    }, r.prototype.cleanup = function() {
        l("cleanup");
        for (var e = this.subs.length, i = 0; i < e; i++) {
            var f = this.subs.shift();
            f.destroy()
        }
        this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
    }, r.prototype.close = r.prototype.disconnect = function() {
        l("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, this.readyState === "opening" && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
    }, r.prototype.onclose = function(e) {
        l("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
    }, r.prototype.reconnect = function() {
        if (this.reconnecting || this.skipReconnect) return this;
        var e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) l("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
        else {
            var i = this.backoff.duration();
            l("will wait %dms before reconnect attempt", i), this.reconnecting = !0;
            var f = setTimeout(function() {
                e.skipReconnect || (l("attempting reconnect"), e.emitAll("reconnect_attempt", e.backoff.attempts), e.emitAll("reconnecting", e.backoff.attempts), !e.skipReconnect && e.open(function(p) {
                    p ? (l("reconnect attempt error"), e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", p.data)) : (l("reconnect success"), e.onreconnect())
                }))
            }, i);
            this.subs.push({
                destroy: function() {
                    clearTimeout(f)
                }
            })
        }
    }, r.prototype.onreconnect = function() {
        var e = this.backoff.attempts;
        this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e)
    }, Ke
}
var er;

function fn() {
    return er || (er = 1, function(o, n) {
        var d = $r(),
            s = et(),
            u = Qt(),
            a = de()("socket.io-client");
        o.exports = n = c;
        var l = n.managers = {};

        function c(h, t) {
            typeof h == "object" && (t = h, h = void 0), t = t || {};
            var r = d(h),
                e = r.source,
                i = r.id,
                f = r.path,
                p = l[i] && f in l[i].nsps,
                g = t.forceNew || t["force new connection"] || t.multiplex === !1 || p,
                w;
            return g ? (a("ignoring socket cache for %s", e), w = u(e, t)) : (l[i] || (a("new io instance for %s", e), l[i] = u(e, t)), w = l[i]), r.query && !t.query && (t.query = r.query), w.socket(r.path, t)
        }
        n.protocol = s.protocol, n.connect = c, n.Manager = Qt(), n.Socket = _r()
    }(Y, Y.exports)), Y.exports
}
var Ge = {},
    ce = {},
    Ze, tr;

function hn() {
    if (tr) return Ze;
    tr = 1;

    function o(u, a, l) {
        for (var c = 0, h = 0, t = l.length; h < t; h++) c = l.charCodeAt(h), c < 128 ? u.setUint8(a++, c) : c < 2048 ? (u.setUint8(a++, 192 | c >> 6), u.setUint8(a++, 128 | c & 63)) : c < 55296 || c >= 57344 ? (u.setUint8(a++, 224 | c >> 12), u.setUint8(a++, 128 | c >> 6 & 63), u.setUint8(a++, 128 | c & 63)) : (h++, c = 65536 + ((c & 1023) << 10 | l.charCodeAt(h) & 1023), u.setUint8(a++, 240 | c >> 18), u.setUint8(a++, 128 | c >> 12 & 63), u.setUint8(a++, 128 | c >> 6 & 63), u.setUint8(a++, 128 | c & 63))
    }

    function n(u) {
        for (var a = 0, l = 0, c = 0, h = u.length; c < h; c++) a = u.charCodeAt(c), a < 128 ? l += 1 : a < 2048 ? l += 2 : a < 55296 || a >= 57344 ? l += 3 : (c++, l += 4);
        return l
    }

    function d(u, a, l) {
        var c = typeof l,
            h = 0,
            t = 0,
            r = 0,
            e = 0,
            i = 0,
            f = 0;
        if (c === "string") {
            if (i = n(l), i < 32) u.push(i | 160), f = 1;
            else if (i < 256) u.push(217, i), f = 2;
            else if (i < 65536) u.push(218, i >> 8, i), f = 3;
            else if (i < 4294967296) u.push(219, i >> 24, i >> 16, i >> 8, i), f = 5;
            else throw new Error("String too long");
            return a.push({
                _str: l,
                _length: i,
                _offset: u.length
            }), f + i
        }
        if (c === "number") return Math.floor(l) !== l || !isFinite(l) ? (u.push(203), a.push({
            _float: l,
            _length: 8,
            _offset: u.length
        }), 9) : l >= 0 ? l < 128 ? (u.push(l), 1) : l < 256 ? (u.push(204, l), 2) : l < 65536 ? (u.push(205, l >> 8, l), 3) : l < 4294967296 ? (u.push(206, l >> 24, l >> 16, l >> 8, l), 5) : (r = l / Math.pow(2, 32) >> 0, e = l >>> 0, u.push(207, r >> 24, r >> 16, r >> 8, r, e >> 24, e >> 16, e >> 8, e), 9) : l >= -32 ? (u.push(l), 1) : l >= -128 ? (u.push(208, l), 2) : l >= -32768 ? (u.push(209, l >> 8, l), 3) : l >= -2147483648 ? (u.push(210, l >> 24, l >> 16, l >> 8, l), 5) : (r = Math.floor(l / Math.pow(2, 32)), e = l >>> 0, u.push(211, r >> 24, r >> 16, r >> 8, r, e >> 24, e >> 16, e >> 8, e), 9);
        if (c === "object") {
            if (l === null) return u.push(192), 1;
            if (Array.isArray(l)) {
                if (i = l.length, i < 16) u.push(i | 144), f = 1;
                else if (i < 65536) u.push(220, i >> 8, i), f = 3;
                else if (i < 4294967296) u.push(221, i >> 24, i >> 16, i >> 8, i), f = 5;
                else throw new Error("Array too large");
                for (h = 0; h < i; h++) f += d(u, a, l[h]);
                return f
            }
            if (l instanceof Date) {
                var p = l.getTime();
                return r = Math.floor(p / Math.pow(2, 32)), e = p >>> 0, u.push(215, 0, r >> 24, r >> 16, r >> 8, r, e >> 24, e >> 16, e >> 8, e), 10
            }
            if (l instanceof ArrayBuffer) {
                if (i = l.byteLength, i < 256) u.push(196, i), f = 2;
                else if (i < 65536) u.push(197, i >> 8, i), f = 3;
                else if (i < 4294967296) u.push(198, i >> 24, i >> 16, i >> 8, i), f = 5;
                else throw new Error("Buffer too large");
                return a.push({
                    _bin: l,
                    _length: i,
                    _offset: u.length
                }), f + i
            }
            if (typeof l.toJSON == "function") return d(u, a, l.toJSON());
            var g = [],
                w = "",
                y = Object.keys(l);
            for (h = 0, t = y.length; h < t; h++) w = y[h], typeof l[w] != "function" && g.push(w);
            if (i = g.length, i < 16) u.push(i | 128), f = 1;
            else if (i < 65536) u.push(222, i >> 8, i), f = 3;
            else if (i < 4294967296) u.push(223, i >> 24, i >> 16, i >> 8, i), f = 5;
            else throw new Error("Object too large");
            for (h = 0; h < i; h++) w = g[h], f += d(u, a, w), f += d(u, a, l[w]);
            return f
        }
        if (c === "boolean") return u.push(l ? 195 : 194), 1;
        if (c === "undefined") return u.push(212, 0, 0), 3;
        throw new Error("Could not encode")
    }

    function s(u) {
        var a = [],
            l = [],
            c = d(a, l, u),
            h = new ArrayBuffer(c),
            t = new DataView(h),
            r = 0,
            e = 0,
            i = -1;
        l.length > 0 && (i = l[0]._offset);
        for (var f, p = 0, g = 0, w = 0, y = a.length; w < y; w++)
            if (t.setUint8(e + w, a[w]), w + 1 === i) {
                if (f = l[r], p = f._length, g = e + i, f._bin)
                    for (var m = new Uint8Array(f._bin), A = 0; A < p; A++) t.setUint8(g + A, m[A]);
                else f._str ? o(t, g, f._str) : f._float !== void 0 && t.setFloat64(g, f._float);
                r++, e += p, l[r] && (i = l[r]._offset)
            } return h
    }
    return Ze = s, Ze
}
var Qe, rr;

function ln() {
    if (rr) return Qe;
    rr = 1;

    function o(s) {
        if (this._offset = 0, s instanceof ArrayBuffer) this._buffer = s, this._view = new DataView(this._buffer);
        else if (ArrayBuffer.isView(s)) this._buffer = s.buffer, this._view = new DataView(this._buffer, s.byteOffset, s.byteLength);
        else throw new Error("Invalid argument")
    }

    function n(s, u, a) {
        for (var l = "", c = 0, h = u, t = u + a; h < t; h++) {
            var r = s.getUint8(h);
            if ((r & 128) === 0) {
                l += String.fromCharCode(r);
                continue
            }
            if ((r & 224) === 192) {
                l += String.fromCharCode((r & 31) << 6 | s.getUint8(++h) & 63);
                continue
            }
            if ((r & 240) === 224) {
                l += String.fromCharCode((r & 15) << 12 | (s.getUint8(++h) & 63) << 6 | (s.getUint8(++h) & 63) << 0);
                continue
            }
            if ((r & 248) === 240) {
                c = (r & 7) << 18 | (s.getUint8(++h) & 63) << 12 | (s.getUint8(++h) & 63) << 6 | (s.getUint8(++h) & 63) << 0, c >= 65536 ? (c -= 65536, l += String.fromCharCode((c >>> 10) + 55296, (c & 1023) + 56320)) : l += String.fromCharCode(c);
                continue
            }
            throw new Error("Invalid byte " + r.toString(16))
        }
        return l
    }
    o.prototype._array = function(s) {
        for (var u = new Array(s), a = 0; a < s; a++) u[a] = this._parse();
        return u
    }, o.prototype._map = function(s) {
        for (var u = "", a = {}, l = 0; l < s; l++) u = this._parse(), a[u] = this._parse();
        return a
    }, o.prototype._str = function(s) {
        var u = n(this._view, this._offset, s);
        return this._offset += s, u
    }, o.prototype._bin = function(s) {
        var u = this._buffer.slice(this._offset, this._offset + s);
        return this._offset += s, u
    }, o.prototype._parse = function() {
        var s = this._view.getUint8(this._offset++),
            u, a = 0,
            l = 0,
            c = 0,
            h = 0;
        if (s < 192) return s < 128 ? s : s < 144 ? this._map(s & 15) : s < 160 ? this._array(s & 15) : this._str(s & 31);
        if (s > 223) return (255 - s + 1) * -1;
        switch (s) {
            case 192:
                return null;
            case 194:
                return !1;
            case 195:
                return !0;
            case 196:
                return a = this._view.getUint8(this._offset), this._offset += 1, this._bin(a);
            case 197:
                return a = this._view.getUint16(this._offset), this._offset += 2, this._bin(a);
            case 198:
                return a = this._view.getUint32(this._offset), this._offset += 4, this._bin(a);
            case 199:
                return a = this._view.getUint8(this._offset), l = this._view.getInt8(this._offset + 1), this._offset += 2, [l, this._bin(a)];
            case 200:
                return a = this._view.getUint16(this._offset), l = this._view.getInt8(this._offset + 2), this._offset += 3, [l, this._bin(a)];
            case 201:
                return a = this._view.getUint32(this._offset), l = this._view.getInt8(this._offset + 4), this._offset += 5, [l, this._bin(a)];
            case 202:
                return u = this._view.getFloat32(this._offset), this._offset += 4, u;
            case 203:
                return u = this._view.getFloat64(this._offset), this._offset += 8, u;
            case 204:
                return u = this._view.getUint8(this._offset), this._offset += 1, u;
            case 205:
                return u = this._view.getUint16(this._offset), this._offset += 2, u;
            case 206:
                return u = this._view.getUint32(this._offset), this._offset += 4, u;
            case 207:
                return c = this._view.getUint32(this._offset) * Math.pow(2, 32), h = this._view.getUint32(this._offset + 4), this._offset += 8, c + h;
            case 208:
                return u = this._view.getInt8(this._offset), this._offset += 1, u;
            case 209:
                return u = this._view.getInt16(this._offset), this._offset += 2, u;
            case 210:
                return u = this._view.getInt32(this._offset), this._offset += 4, u;
            case 211:
                return c = this._view.getInt32(this._offset) * Math.pow(2, 32), h = this._view.getUint32(this._offset + 4), this._offset += 8, c + h;
            case 212:
                if (l = this._view.getInt8(this._offset), this._offset += 1, l === 0) {
                    this._offset += 1;
                    return
                }
                return [l, this._bin(1)];
            case 213:
                return l = this._view.getInt8(this._offset), this._offset += 1, [l, this._bin(2)];
            case 214:
                return l = this._view.getInt8(this._offset), this._offset += 1, [l, this._bin(4)];
            case 215:
                return l = this._view.getInt8(this._offset), this._offset += 1, l === 0 ? (c = this._view.getInt32(this._offset) * Math.pow(2, 32), h = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(c + h)) : [l, this._bin(8)];
            case 216:
                return l = this._view.getInt8(this._offset), this._offset += 1, [l, this._bin(16)];
            case 217:
                return a = this._view.getUint8(this._offset), this._offset += 1, this._str(a);
            case 218:
                return a = this._view.getUint16(this._offset), this._offset += 2, this._str(a);
            case 219:
                return a = this._view.getUint32(this._offset), this._offset += 4, this._str(a);
            case 220:
                return a = this._view.getUint16(this._offset), this._offset += 2, this._array(a);
            case 221:
                return a = this._view.getUint32(this._offset), this._offset += 4, this._array(a);
            case 222:
                return a = this._view.getUint16(this._offset), this._offset += 2, this._map(a);
            case 223:
                return a = this._view.getUint32(this._offset), this._offset += 4, this._map(a)
        }
        throw new Error("Could not parse")
    };

    function d(s) {
        var u = new o(s),
            a = u._parse();
        if (u._offset !== s.byteLength) throw new Error(s.byteLength - u._offset + " trailing bytes");
        return a
    }
    return Qe = d, Qe
}
var nr;

function dn() {
    return nr || (nr = 1, ce.encode = hn(), ce.decode = ln()), ce
}
var ir;

function pn() {
    return ir || (ir = 1, function(o) {
        var n = dn(),
            d = U();
        o.CONNECT = 0, o.DISCONNECT = 1, o.EVENT = 2, o.ACK = 3, o.ERROR = 4, o.BINARY_EVENT = 5, o.BINARY_ACK = 6;
        var s = Number.isInteger || function(h) {
                return typeof h == "number" && isFinite(h) && Math.floor(h) === h
            },
            u = function(h) {
                return typeof h == "string"
            };

        function a() {}
        a.prototype.encode = function(h, t) {
            switch (h.type) {
                case o.CONNECT:
                case o.DISCONNECT:
                case o.ERROR:
                    return t([JSON.stringify(h)]);
                default:
                    return t([n.encode(h)])
            }
        };

        function l() {}
        d(l.prototype), l.prototype.add = function(h) {
            typeof h == "string" ? this.parseJSON(h) : this.parseBinary(h)
        }, l.prototype.parseJSON = function(h) {
            var t = JSON.parse(h);
            this.checkPacket(t), this.emit("decoded", t)
        }, l.prototype.parseBinary = function(h) {
            var t = n.decode(h);
            this.checkPacket(t), this.emit("decoded", t)
        };

        function c(h) {
            switch (h.type) {
                case o.CONNECT:
                case o.DISCONNECT:
                    return h.data === void 0;
                case o.ERROR:
                    return u(h.data);
                default:
                    return Array.isArray(h.data)
            }
        }
        l.prototype.checkPacket = function(h) {
            var t = s(h.type) && h.type >= o.CONNECT && h.type <= o.BINARY_ACK;
            if (!t) throw new Error("invalid packet type");
            if (!u(h.nsp)) throw new Error("invalid namespace");
            if (!c(h)) throw new Error("invalid payload");
            var r = h.id === void 0 || s(h.id);
            if (!r) throw new Error("invalid packet id")
        }, l.prototype.destroy = function() {}, o.Encoder = a, o.Decoder = l
    }(Ge)), Ge
}
var ue = {},
    sr;

function Fr() {
    if (sr) return ue;
    sr = 1, Object.defineProperty(ue, "__esModule", {
        value: !0
    });
    let o = class {
        constructor() {
            this.callbacks = [], this.removeCallback = d => {
                this.callbacks = this.callbacks.filter(s => s.id !== d)
            }
        }
        add(d, s) {
            const u = Math.random().toString();
            return this.callbacks.push({
                callback: d,
                timesCalled: 0,
                canCallMultipleTimes: !s,
                id: u
            }), () => this.removeCallback(u)
        }
        clear() {
            this.callbacks.splice(0, this.callbacks.length)
        }
        call(d, s) {
            this.callbacks = this.callbacks.map(u => u.timesCalled > 0 && !u.canCallMultipleTimes ? u : (u.callback(d, s), Object.assign({}, u, {
                timesCalled: u.timesCalled + 1
            })))
        }
    };
    return ue.default = o, ue
}
var fe = {},
    or;

function xr() {
    if (or) return fe;
    or = 1, Object.defineProperty(fe, "__esModule", {
        value: !0
    });
    const o = {
        createNewRoom: "blueboat_CREATE_NEW_ROOM",
        joinRoom: "blueboat_JOIN_ROOM",
        sendMessage: "blueboat_SEND_MESSAGE",
        listen: "blueboat_LISTEN_STATE",
        requestAvailableRooms: "blueboat_AVAILABLE_ROOMS",
        ping: "blueboat-ping"
    };
    return fe.default = o, fe
}
var he = {},
    ar;

function gn() {
    return ar || (ar = 1, Object.defineProperty(he, "__esModule", {
        value: !0
    }), he.BLUEBOAT_ID = "blueboat-id"), he
}
var le = {},
    cr;

function Ar() {
    if (cr) return le;
    cr = 1, Object.defineProperty(le, "__esModule", {
        value: !0
    });
    const o = {
        clientIdSet: "CLIENT_ID_SET",
        joinedRoom: "blueboat_JOINED_ROOM",
        statePatch: "STATE_PATCH",
        removedFromRoom: "blueboat_REMOVED_FROM_ROOM",
        availableRooms: "blueboat_AVAILABLE_ROOMS"
    };
    return le.default = o, le
}
var J = {},
    ur;

function Rr() {
    if (ur) return J;
    ur = 1;
    var o = J && J.__importDefault || function(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    };
    Object.defineProperty(J, "__esModule", {
        value: !0
    });
    const n = o(Ar()),
        d = o(Fr()),
        s = o(xr());
    let u = class {
        constructor(l, c, h) {
            this.joined = !1, this.initialJoinOptions = {}, this.onJoinAttempt = new d.default, this.onCreate = new d.default, this.onJoin = new d.default, this.onJoinError = new d.default, this.onMessage = new d.default, this.onLeave = new d.default, this.send = (t, r) => {
                this.socket.emit(s.default.sendMessage, {
                    room: this.id,
                    key: t,
                    data: r
                })
            }, h && (this.id = h), c && (this.initialJoinOptions = c), l && (this.socket = l, h && this.socketListener())
        }
        _setRoomId(l) {
            this.id = l, this.socketListener()
        }
        socketListener() {
            const l = this.socket;
            l.on(`${this.id}-error`, c => this.onJoinError.call(c)), l.on(`message-${this.id}`, c => {
                const {
                    key: h,
                    data: t
                } = c;
                if (h) {
                    if (h === n.default.joinedRoom) {
                        this.joined = !0, this.onJoin.call();
                        return
                    }
                    if (h === n.default.removedFromRoom) {
                        this.onLeave.call(), this.joined = !1;
                        return
                    }
                    this.onMessage.call(h, t)
                }
            })
        }
    };
    return J.default = u, J
}
var fr;

function yn() {
    if (fr) return j;
    fr = 1;
    var o = j && j.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(j, "__esModule", {
        value: !0
    });
    const n = o(fn()),
        d = o(pn()),
        s = o(Fr()),
        u = o(xr()),
        a = gn(),
        l = o(Ar()),
        c = o(Rr());
    let h = class {
        constructor(r, e) {
            this.rooms = [], this.onConnect = new s.default, this.onConnectError = new s.default, this.onDisconnect = new s.default, this.onReconnect = new s.default, this.onReconnectAttempt = new s.default, this.latency = 0, this.useClientIdSaving = !0, this.disconnect = () => {
                this.socket.disconnect()
            }, this.connect = () => {
                this.socket.connect()
            }, e && e.blockClientIdSaving && (this.useClientIdSaving = !1), this.socket = n.default(r, {
                path: "/blueboat",
                parser: d.default,
                transports: e.transports || ["websocket"],
                query: {
                    id: localStorage && this.useClientIdSaving && localStorage.getItem(a.BLUEBOAT_ID + (e && e.clientIdSuffix ? e.clientIdSuffix : "")) || ""
                },
                reconnectionDelay: 500,
                reconnectionDelayMax: 1500,
                randomizationFactor: 0
            }), this.socket.on("connect_error", i => this.onConnectError.call(i)), this.socket.on("error", i => this.onConnectError.call(i)), this.socket.on(l.default.clientIdSet, i => {
                localStorage && this.useClientIdSaving && localStorage.setItem(a.BLUEBOAT_ID + (e && e.clientIdSuffix ? e.clientIdSuffix : ""), i), this.socket.io.opts.query.id = i, this.id = i, this.sessionId = this.socket.id, this.rooms.length && this.rooms.forEach(f => this.joinRoom(f.id, f.initialJoinOptions, f)), this.onConnect.call()
            }), this.socket.on("pong", i => {
                this.latency = i
            }), this.socket.on("reconnect", i => this.onReconnect.call(i)), this.socket.on("reconnect_attempt", i => {
                this.onReconnectAttempt.call(i)
            }), this.socket.on("disconnect", i => {
                this.onDisconnect.call(i), this.rooms.forEach(f => {
                    f.joined = !1, f.onLeave.call(i)
                })
            })
        }
        createRoom(r, e) {
            const i = Math.random().toString();
            this.socket.emit(u.default.createNewRoom, {
                type: r,
                options: e,
                uniqueRequestId: i
            });
            const f = new c.default(this.socket, e);
            return this.socket.on(`${i}-create`, p => {
                f._setRoomId(p), f.onCreate.call(p), this.joinRoom(p, e, f)
            }), this.socket.on(`${i}-error`, p => {
                f.onJoinError.call(p)
            }), f
        }
        joinRoom(r, e, i) {
            const f = i || new c.default(this.socket, e, r);
            return f.onJoinAttempt.call(), f.joined || this.socket.emit(u.default.joinRoom, {
                roomId: r,
                options: e
            }), this.rooms.some(p => p.id === r) || this.rooms.push(f), f
        }
    };
    return j.default = h, j
}
var hr;

function vn() {
    if (hr) return M;
    hr = 1;
    var o = M && M.__importDefault || function(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    };
    Object.defineProperty(M, "__esModule", {
        value: !0
    });
    const n = o(yn());
    M.Client = n.default;
    const d = o(Rr());
    return M.Room = d.default, M
}
var Rn = vn();
export {
    _n as A, bn as L, wn as O, Rn as m
};