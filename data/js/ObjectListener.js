import {
    o as e,
    t
} from "./rolldown-runtime.js";
import {
    H as n,
    V as r
} from "./utils.js";
import {
    t as i
} from "./react-1.js";
import {
    n as a,
    t as o
} from "./dist-2.js";
import {
    t as s
} from "./jsx-runtime.js";
import {
    l as c,
    n as l
} from "./_index.js";
import {
    t as u
} from "./lodash.js";
import {
    t as d
} from "./__vite-browser-external.js";
var f = t((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.useThrottledEffect = void 0;
        var t = i();

        function n(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        e.default = e.useThrottledEffect = function(e, r) {
            var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
                a = (0, t.useRef)(Date.now());
            (0, t.useEffect)(function() {
                var t = setTimeout(function() {
                    Date.now() - a.current >= r && (e(), a.current = Date.now())
                }, r - (Date.now() - a.current));
                return function() {
                    clearTimeout(t)
                }
            }, [r].concat(n(i)))
        }
    })),
    p = u(),
    m = e(i()),
    h = e(f()),
    g = s(),
    _ = () => window.devicePixelRatio || 1,
    v = e => {
        e.preventDefault();
        let t = e.changedTouches[0],
            n = document.createEvent(`MouseEvent`),
            r = {
                touchstart: `mousedown`,
                touchmove: `mousemove`,
                touchend: `mouseup`
            } [e.type];
        r && (n.initMouseEvent(r, !0, !0, window, 1, t.screenX, t.screenY, t.clientX, t.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(n))
    },
    y = e => {
        var t, n;
        return {
            x: (e == null || (t = e.nativeEvent) == null ? void 0 : t.offsetX) || 0,
            y: (e == null || (n = e.nativeEvent) == null ? void 0 : n.offsetY) || 0
        }
    },
    b = m.forwardRef((e, t) => {
        let [n, r] = m.useState(``), i = m.useRef(!1), a = m.useRef(!1), o = m.useRef(null), s = m.useRef(null), c = m.useRef([]), u = m.useRef(-1), d = m.useRef({
            x: 0,
            y: 0
        }), f = m.useRef(e.color || l.Black), b = m.useRef(e.strokeWidth || 2), x = m.useRef(null), S = m.useRef(null), C = () => {
            a.current = !0
        }, w = () => {
            a.current = !1
        }, T = t => {
            if (!e.canEdit) return;
            let {
                x: n,
                y: r
            } = y(t);
            d.current = {
                x: n,
                y: r
            }, i.current = !0
        }, E = m.useMemo(() => {
            let t = (0, p.throttle)(e => {
                if (!i.current || !a.current) return;
                let {
                    x: t,
                    y: n
                } = y(e);
                O({
                    xStart: d.current.x,
                    yStart: d.current.y,
                    xEnd: t,
                    yEnd: n,
                    color: f.current,
                    width: b.current
                }, !0), d.current = {
                    x: t,
                    y: n
                }
            }, 10);
            return n => {
                e.canEdit && (n.persist(), t(n))
            }
        }, [e.canEdit]), D = t => {
            if (!e.canEdit) return;
            let {
                x: n,
                y: r
            } = y(t);
            i.current && (i.current = !1, O({
                xStart: d.current.x,
                yStart: d.current.y,
                xEnd: n,
                yEnd: r,
                color: f.current,
                width: b.current
            }, !0), k())
        }, O = (t, n) => {
            let {
                xStart: r,
                yStart: i,
                xEnd: a,
                yEnd: c,
                color: l,
                width: u
            } = t, d = s.current, f = o.current;
            if (d.beginPath(), d.moveTo(r, i), d.lineTo(a, c), d.strokeStyle = l, d.lineWidth = u, d.stroke(), d.closePath(), n && e.emitLine) {
                let n = t;
                t.xStart /= f.clientWidth, t.yStart /= f.clientHeight, t.xEnd /= f.clientWidth, t.yEnd /= f.clientHeight, t.width /= (f.clientWidth + f.clientHeight) / 2, e.emitLine(n)
            }
        }, k = () => {
            let e = s.current,
                t = o.current;
            c.current = [...c.current, e.getImageData(0, 0, t.width, t.height)], u.current += 1, A()
        }, A = () => {
            let t = o.current;
            e.onLatestImage && t != null && t.toDataURL && e.onLatestImage(t.toDataURL(`image/jpeg`))
        }, j = () => {
            let e = s.current,
                t = o.current;
            e.clearRect(0, 0, t.width, t.height), e.fillStyle = `white`, e.fillRect(0, 0, t.width, t.height), k()
        }, M = () => {
            u.current <= 0 ? j() : (--u.current, c.current = [...c.current.slice(0, c.current.length - 1)], s.current.putImageData(c.current[u.current], 0, 0), A())
        }, N = e => {
            let t = o.current,
                n = e;
            e.xStart *= t.clientWidth, e.yStart *= t.clientHeight, e.xEnd *= t.clientWidth, e.yEnd *= t.clientHeight, e.width *= (t.clientWidth + t.clientHeight) / 2, O(n, !1)
        }, P = e => {
            let t = s.current,
                n = o.current,
                r = new Image;
            r.onload = () => {
                t.drawImage(r, 0, 0, n.width / _(), n.height / _())
            }, r.src = e
        };
        return (0, h.default)(() => {
            let e = o.current,
                t = s.current;
            if (!e || !t) return;
            let n = e.toDataURL(),
                r = e.getBoundingClientRect();
            e.width = r.width * _(), e.height = r.height * _(), t.scale(_(), _()), t.lineCap = `round`, t.lineJoin = `round`, c.current = [], u.current = -1, P(n)
        }, 100, [e.width, e.height]), m.useImperativeHandle(t, () => ({
            clear: j,
            undo: M,
            addLine: N,
            drawImage: P
        })), m.useEffect(() => {
            let t = o.current,
                n = x.current,
                r = t.getBoundingClientRect();
            t.width = r.width * _(), t.height = r.height * _();
            let i = t.getContext(`2d`);
            i.scale(_(), _()), i.fillStyle = `white`, i.fillRect(0, 0, t.width, t.height), i.lineCap = `round`, i.lineJoin = `round`, s.current = i, e.initialImage && P(e.initialImage);
            let a = n.getContext(`2d`);
            S.current = a, document.addEventListener(`mousedown`, C), document.addEventListener(`mouseup`, w)
        }, []), m.useEffect(() => {
            let t = x.current,
                n = S.current;
            if (!t || !n) return;
            let i = e.strokeWidth;
            t.width = i, t.height = i, n.clearRect(0, 0, t.width, t.height), n.beginPath(), n.arc(t.width / 2, t.height / 2, i / 2, 0, 2 * Math.PI), n.fillStyle = e.color, n.fill();
            let a = t.toDataURL(`image`);
            r(a)
        }, [e.color, e.strokeWidth]), m.useEffect(() => {
            f.current = e.color
        }, [e.color]), m.useEffect(() => {
            b.current = e.strokeWidth
        }, [e.strokeWidth]), m.useEffect(() => {
            !e.canEdit && i.current && A()
        }, [e.canEdit]), m.useEffect(() => () => {
            e.canEdit && i.current && A()
        }, []), (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)(`canvas`, {
                style: {
                    width: e.width,
                    height: e.height,
                    cursor: e.canEdit ? `url(${n}) ${b.current/2} ${b.current/2}, auto` : `auto`,
                    background: l.White
                },
                ref: o,
                onMouseDown: T,
                onMouseUp: D,
                onMouseMove: E,
                onTouchStart: v,
                onTouchEnd: v,
                onTouchCancel: v,
                onTouchMove: v
            }), (0, g.jsx)(`canvas`, {
                style: {
                    display: `none`
                },
                ref: x
            })]
        })
    }),
    x = e => (0, g.jsxs)(S, {
        children: [(0, g.jsx)(`div`, {
            className: `area`,
            children: (0, g.jsxs)(`ul`, {
                className: `circles`,
                children: [(0, g.jsx)(`li`, {}), (0, g.jsx)(`li`, {}), (0, g.jsx)(`li`, {}), (0, g.jsx)(`li`, {}), (0, g.jsx)(`li`, {}), (0, g.jsx)(`li`, {}), (0, g.jsx)(`li`, {}), (0, g.jsx)(`li`, {}), (0, g.jsx)(`li`, {}), (0, g.jsx)(`li`, {})]
            })
        }), (0, g.jsx)(C, {
            children: e.children
        })]
    }),
    S = c.div`
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
    C = c.div.attrs({
        className: `maxAll`
    })`
  position: absolute;
  top: 0;
  left: 0;
`,
    w = t(((e, t) => {
        var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            r = [`source`, `protocol`, `authority`, `userInfo`, `user`, `password`, `host`, `port`, `relative`, `path`, `directory`, `file`, `query`, `anchor`];
        t.exports = function(e) {
            var t = e,
                o = e.indexOf(`[`),
                s = e.indexOf(`]`);
            o != -1 && s != -1 && (e = e.substring(0, o) + e.substring(o, s).replace(/:/g, `;`) + e.substring(s, e.length));
            for (var c = n.exec(e || ``), l = {}, u = 14; u--;) l[r[u]] = c[u] || ``;
            return o != -1 && s != -1 && (l.source = t, l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, `:`), l.authority = l.authority.replace(`[`, ``).replace(`]`, ``).replace(/;/g, `:`), l.ipv6uri = !0), l.pathNames = i(l, l.path), l.queryKey = a(l, l.query), l
        };

        function i(e, t) {
            var n = t.replace(/\/{2,9}/g, `/`).split(`/`);
            return (t.substr(0, 1) == `/` || t.length === 0) && n.splice(0, 1), t.substr(t.length - 1, 1) == `/` && n.splice(n.length - 1, 1), n
        }

        function a(e, t) {
            var n = {};
            return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(e, t, r) {
                t && (n[t] = r)
            }), n
        }
    })),
    T = t(((e, t) => {
        var n = 1e3,
            r = n * 60,
            i = r * 60,
            a = i * 24,
            o = a * 365.25;
        t.exports = function(e, t) {
            t = t || {};
            var n = typeof e;
            if (n === `string` && e.length > 0) return s(e);
            if (n === `number` && isNaN(e) === !1) return t.long ? l(e) : c(e);
            throw Error(`val is not a non-empty string or a valid number. val=` + JSON.stringify(e))
        };

        function s(e) {
            if (e = String(e), !(e.length > 100)) {
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var s = parseFloat(t[1]);
                    switch ((t[2] || `ms`).toLowerCase()) {
                        case `years`:
                        case `year`:
                        case `yrs`:
                        case `yr`:
                        case `y`:
                            return s * o;
                        case `days`:
                        case `day`:
                        case `d`:
                            return s * a;
                        case `hours`:
                        case `hour`:
                        case `hrs`:
                        case `hr`:
                        case `h`:
                            return s * i;
                        case `minutes`:
                        case `minute`:
                        case `mins`:
                        case `min`:
                        case `m`:
                            return s * r;
                        case `seconds`:
                        case `second`:
                        case `secs`:
                        case `sec`:
                        case `s`:
                            return s * n;
                        case `milliseconds`:
                        case `millisecond`:
                        case `msecs`:
                        case `msec`:
                        case `ms`:
                            return s;
                        default:
                            return
                    }
                }
            }
        }

        function c(e) {
            return e >= a ? Math.round(e / a) + `d` : e >= i ? Math.round(e / i) + `h` : e >= r ? Math.round(e / r) + `m` : e >= n ? Math.round(e / n) + `s` : e + `ms`
        }

        function l(e) {
            return u(e, a, `day`) || u(e, i, `hour`) || u(e, r, `minute`) || u(e, n, `second`) || e + ` ms`
        }

        function u(e, t, n) {
            if (!(e < t)) return e < t * 1.5 ? Math.floor(e / t) + ` ` + n : Math.ceil(e / t) + ` ` + n + `s`
        }
    })),
    E = t(((e, t) => {
        e = t.exports = r.debug = r.default = r, e.coerce = c, e.disable = o, e.enable = a, e.enabled = s, e.humanize = T(), e.instances = [], e.names = [], e.skips = [], e.formatters = {};

        function n(t) {
            var n = 0,
                r;
            for (r in t) n = (n << 5) - n + t.charCodeAt(r), n |= 0;
            return e.colors[Math.abs(n) % e.colors.length]
        }

        function r(t) {
            var r;

            function a() {
                if (a.enabled) {
                    var t = a,
                        n = +new Date;
                    t.diff = n - (r || n), t.prev = r, t.curr = n, r = n;
                    for (var i = Array(arguments.length), o = 0; o < i.length; o++) i[o] = arguments[o];
                    i[0] = e.coerce(i[0]), typeof i[0] != `string` && i.unshift(`%O`);
                    var s = 0;
                    i[0] = i[0].replace(/%([a-zA-Z%])/g, function(n, r) {
                        if (n === `%%`) return n;
                        s++;
                        var a = e.formatters[r];
                        if (typeof a == `function`) {
                            var o = i[s];
                            n = a.call(t, o), i.splice(s, 1), s--
                        }
                        return n
                    }), e.formatArgs.call(t, i), (a.log || e.log || console.log.bind(console)).apply(t, i)
                }
            }
            return a.namespace = t, a.enabled = e.enabled(t), a.useColors = e.useColors(), a.color = n(t), a.destroy = i, typeof e.init == `function` && e.init(a), e.instances.push(a), a
        }

        function i() {
            var t = e.instances.indexOf(this);
            return t !== -1 && (e.instances.splice(t, 1), !0)
        }

        function a(t) {
            e.save(t), e.names = [], e.skips = [];
            var n, r = (typeof t == `string` ? t : ``).split(/[\s,]+/),
                i = r.length;
            for (n = 0; n < i; n++) r[n] && (t = r[n].replace(/\*/g, `.*?`), t[0] === `-` ? e.skips.push(RegExp(`^` + t.substr(1) + `$`)) : e.names.push(RegExp(`^` + t + `$`)));
            for (n = 0; n < e.instances.length; n++) {
                var a = e.instances[n];
                a.enabled = e.enabled(a.namespace)
            }
        }

        function o() {
            e.enable(``)
        }

        function s(t) {
            if (t[t.length - 1] === `*`) return !0;
            for (var n = 0, r = e.skips.length; n < r; n++)
                if (e.skips[n].test(t)) return !1;
            for (n = 0, r = e.names.length; n < r; n++)
                if (e.names[n].test(t)) return !0;
            return !1
        }

        function c(e) {
            return e instanceof Error ? e.stack || e.message : e
        }
    })),
    D = t(((e, t) => {
        o(), e = t.exports = E(), e.log = i, e.formatArgs = r, e.save = s, e.load = c, e.useColors = n, e.storage = typeof chrome < `u` && chrome.storage !== void 0 ? chrome.storage.local : l(), e.colors = `#0000CC.#0000FF.#0033CC.#0033FF.#0066CC.#0066FF.#0099CC.#0099FF.#00CC00.#00CC33.#00CC66.#00CC99.#00CCCC.#00CCFF.#3300CC.#3300FF.#3333CC.#3333FF.#3366CC.#3366FF.#3399CC.#3399FF.#33CC00.#33CC33.#33CC66.#33CC99.#33CCCC.#33CCFF.#6600CC.#6600FF.#6633CC.#6633FF.#66CC00.#66CC33.#9900CC.#9900FF.#9933CC.#9933FF.#99CC00.#99CC33.#CC0000.#CC0033.#CC0066.#CC0099.#CC00CC.#CC00FF.#CC3300.#CC3333.#CC3366.#CC3399.#CC33CC.#CC33FF.#CC6600.#CC6633.#CC9900.#CC9933.#CCCC00.#CCCC33.#FF0000.#FF0033.#FF0066.#FF0099.#FF00CC.#FF00FF.#FF3300.#FF3333.#FF3366.#FF3399.#FF33CC.#FF33FF.#FF6600.#FF6633.#FF9900.#FF9933.#FFCC00.#FFCC33`.split(`.`);

        function n() {
            return typeof window < `u` && window.process && window.process.type === `renderer` ? !0 : typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < `u` && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < `u` && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }
        e.formatters.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return `[UnexpectedJSONParseError]: ` + e.message
            }
        };

        function r(t) {
            var n = this.useColors;
            if (t[0] = (n ? `%c` : ``) + this.namespace + (n ? ` %c` : ` `) + t[0] + (n ? `%c ` : ` `) + `+` + e.humanize(this.diff), n) {
                var r = `color: ` + this.color;
                t.splice(1, 0, r, `color: inherit`);
                var i = 0,
                    a = 0;
                t[0].replace(/%[a-zA-Z%]/g, function(e) {
                    e !== `%%` && (i++, e === `%c` && (a = i))
                }), t.splice(a, 0, r)
            }
        }

        function i() {
            return typeof console == `object` && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function s(t) {
            try {
                t == null ? e.storage.removeItem(`debug`) : e.storage.debug = t
            } catch {}
        }

        function c() {
            var t;
            try {
                t = e.storage.debug
            } catch {}
            return !t && a !== void 0 && `env` in a && (t = {}.DEBUG), t
        }
        e.enable(c());

        function l() {
            try {
                return window.localStorage
            } catch {}
        }
    })),
    O = t(((e, t) => {
        var n = w(),
            r = D()(`socket.io-client:url`);
        t.exports = i;

        function i(e, t) {
            var i = e;
            t = t || typeof location < `u` && location, e ?? (e = t.protocol + `//` + t.host), typeof e == `string` && (e.charAt(0) === `/` && (e = e.charAt(1) === `/` ? t.protocol + e : t.host + e), /^(https?|wss?):\/\//.test(e) || (r(`protocol-less url %s`, e), e = t === void 0 ? `https://` + e : t.protocol + `//` + e), r(`parse %s`, e), i = n(e)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = `80` : /^(http|ws)s$/.test(i.protocol) && (i.port = `443`)), i.path = i.path || `/`;
            var a = i.host.indexOf(`:`) === -1 ? i.host : `[` + i.host + `]`;
            return i.id = i.protocol + `://` + a + `:` + i.port, i.href = i.protocol + `://` + a + (t && t.port === i.port ? `` : `:` + i.port), i
        }
    })),
    k = t(((e, t) => {
        var n = 1e3,
            r = n * 60,
            i = r * 60,
            a = i * 24,
            o = a * 365.25;
        t.exports = function(e, t) {
            t = t || {};
            var n = typeof e;
            if (n === `string` && e.length > 0) return s(e);
            if (n === `number` && isNaN(e) === !1) return t.long ? l(e) : c(e);
            throw Error(`val is not a non-empty string or a valid number. val=` + JSON.stringify(e))
        };

        function s(e) {
            if (e = String(e), !(e.length > 100)) {
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var s = parseFloat(t[1]);
                    switch ((t[2] || `ms`).toLowerCase()) {
                        case `years`:
                        case `year`:
                        case `yrs`:
                        case `yr`:
                        case `y`:
                            return s * o;
                        case `days`:
                        case `day`:
                        case `d`:
                            return s * a;
                        case `hours`:
                        case `hour`:
                        case `hrs`:
                        case `hr`:
                        case `h`:
                            return s * i;
                        case `minutes`:
                        case `minute`:
                        case `mins`:
                        case `min`:
                        case `m`:
                            return s * r;
                        case `seconds`:
                        case `second`:
                        case `secs`:
                        case `sec`:
                        case `s`:
                            return s * n;
                        case `milliseconds`:
                        case `millisecond`:
                        case `msecs`:
                        case `msec`:
                        case `ms`:
                            return s;
                        default:
                            return
                    }
                }
            }
        }

        function c(e) {
            return e >= a ? Math.round(e / a) + `d` : e >= i ? Math.round(e / i) + `h` : e >= r ? Math.round(e / r) + `m` : e >= n ? Math.round(e / n) + `s` : e + `ms`
        }

        function l(e) {
            return u(e, a, `day`) || u(e, i, `hour`) || u(e, r, `minute`) || u(e, n, `second`) || e + ` ms`
        }

        function u(e, t, n) {
            if (!(e < t)) return e < t * 1.5 ? Math.floor(e / t) + ` ` + n : Math.ceil(e / t) + ` ` + n + `s`
        }
    })),
    A = t(((e, t) => {
        e = t.exports = r.debug = r.default = r, e.coerce = c, e.disable = o, e.enable = a, e.enabled = s, e.humanize = k(), e.instances = [], e.names = [], e.skips = [], e.formatters = {};

        function n(t) {
            var n = 0,
                r;
            for (r in t) n = (n << 5) - n + t.charCodeAt(r), n |= 0;
            return e.colors[Math.abs(n) % e.colors.length]
        }

        function r(t) {
            var r;

            function a() {
                if (a.enabled) {
                    var t = a,
                        n = +new Date;
                    t.diff = n - (r || n), t.prev = r, t.curr = n, r = n;
                    for (var i = Array(arguments.length), o = 0; o < i.length; o++) i[o] = arguments[o];
                    i[0] = e.coerce(i[0]), typeof i[0] != `string` && i.unshift(`%O`);
                    var s = 0;
                    i[0] = i[0].replace(/%([a-zA-Z%])/g, function(n, r) {
                        if (n === `%%`) return n;
                        s++;
                        var a = e.formatters[r];
                        if (typeof a == `function`) {
                            var o = i[s];
                            n = a.call(t, o), i.splice(s, 1), s--
                        }
                        return n
                    }), e.formatArgs.call(t, i), (a.log || e.log || console.log.bind(console)).apply(t, i)
                }
            }
            return a.namespace = t, a.enabled = e.enabled(t), a.useColors = e.useColors(), a.color = n(t), a.destroy = i, typeof e.init == `function` && e.init(a), e.instances.push(a), a
        }

        function i() {
            var t = e.instances.indexOf(this);
            return t !== -1 && (e.instances.splice(t, 1), !0)
        }

        function a(t) {
            e.save(t), e.names = [], e.skips = [];
            var n, r = (typeof t == `string` ? t : ``).split(/[\s,]+/),
                i = r.length;
            for (n = 0; n < i; n++) r[n] && (t = r[n].replace(/\*/g, `.*?`), t[0] === `-` ? e.skips.push(RegExp(`^` + t.substr(1) + `$`)) : e.names.push(RegExp(`^` + t + `$`)));
            for (n = 0; n < e.instances.length; n++) {
                var a = e.instances[n];
                a.enabled = e.enabled(a.namespace)
            }
        }

        function o() {
            e.enable(``)
        }

        function s(t) {
            if (t[t.length - 1] === `*`) return !0;
            for (var n = 0, r = e.skips.length; n < r; n++)
                if (e.skips[n].test(t)) return !1;
            for (n = 0, r = e.names.length; n < r; n++)
                if (e.names[n].test(t)) return !0;
            return !1
        }

        function c(e) {
            return e instanceof Error ? e.stack || e.message : e
        }
    })),
    j = t(((e, t) => {
        o(), e = t.exports = A(), e.log = i, e.formatArgs = r, e.save = s, e.load = c, e.useColors = n, e.storage = typeof chrome < `u` && chrome.storage !== void 0 ? chrome.storage.local : l(), e.colors = `#0000CC.#0000FF.#0033CC.#0033FF.#0066CC.#0066FF.#0099CC.#0099FF.#00CC00.#00CC33.#00CC66.#00CC99.#00CCCC.#00CCFF.#3300CC.#3300FF.#3333CC.#3333FF.#3366CC.#3366FF.#3399CC.#3399FF.#33CC00.#33CC33.#33CC66.#33CC99.#33CCCC.#33CCFF.#6600CC.#6600FF.#6633CC.#6633FF.#66CC00.#66CC33.#9900CC.#9900FF.#9933CC.#9933FF.#99CC00.#99CC33.#CC0000.#CC0033.#CC0066.#CC0099.#CC00CC.#CC00FF.#CC3300.#CC3333.#CC3366.#CC3399.#CC33CC.#CC33FF.#CC6600.#CC6633.#CC9900.#CC9933.#CCCC00.#CCCC33.#FF0000.#FF0033.#FF0066.#FF0099.#FF00CC.#FF00FF.#FF3300.#FF3333.#FF3366.#FF3399.#FF33CC.#FF33FF.#FF6600.#FF6633.#FF9900.#FF9933.#FFCC00.#FFCC33`.split(`.`);

        function n() {
            return typeof window < `u` && window.process && window.process.type === `renderer` ? !0 : typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < `u` && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < `u` && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }
        e.formatters.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return `[UnexpectedJSONParseError]: ` + e.message
            }
        };

        function r(t) {
            var n = this.useColors;
            if (t[0] = (n ? `%c` : ``) + this.namespace + (n ? ` %c` : ` `) + t[0] + (n ? `%c ` : ` `) + `+` + e.humanize(this.diff), n) {
                var r = `color: ` + this.color;
                t.splice(1, 0, r, `color: inherit`);
                var i = 0,
                    a = 0;
                t[0].replace(/%[a-zA-Z%]/g, function(e) {
                    e !== `%%` && (i++, e === `%c` && (a = i))
                }), t.splice(a, 0, r)
            }
        }

        function i() {
            return typeof console == `object` && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function s(t) {
            try {
                t == null ? e.storage.removeItem(`debug`) : e.storage.debug = t
            } catch {}
        }

        function c() {
            var t;
            try {
                t = e.storage.debug
            } catch {}
            return !t && a !== void 0 && `env` in a && (t = {}.DEBUG), t
        }
        e.enable(c());

        function l() {
            try {
                return window.localStorage
            } catch {}
        }
    })),
    M = t(((e, t) => {
        t !== void 0 && (t.exports = n);

        function n(e) {
            if (e) return r(e)
        }

        function r(e) {
            for (var t in n.prototype) e[t] = n.prototype[t];
            return e
        }
        n.prototype.on = n.prototype.addEventListener = function(e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks[`$` + e] = this._callbacks[`$` + e] || []).push(t), this
        }, n.prototype.once = function(e, t) {
            function n() {
                this.off(e, n), t.apply(this, arguments)
            }
            return n.fn = t, this.on(e, n), this
        }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(e, t) {
            if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
            var n = this._callbacks[`$` + e];
            if (!n) return this;
            if (arguments.length == 1) return delete this._callbacks[`$` + e], this;
            for (var r, i = 0; i < n.length; i++)
                if (r = n[i], r === t || r.fn === t) {
                    n.splice(i, 1);
                    break
                } return n.length === 0 && delete this._callbacks[`$` + e], this
        }, n.prototype.emit = function(e) {
            this._callbacks = this._callbacks || {};
            for (var t = Array(arguments.length - 1), n = this._callbacks[`$` + e], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            if (n) {
                n = n.slice(0);
                for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t)
            }
            return this
        }, n.prototype.listeners = function(e) {
            return this._callbacks = this._callbacks || {}, this._callbacks[`$` + e] || []
        }, n.prototype.hasListeners = function(e) {
            return !!this.listeners(e).length
        }
    })),
    N = t(((e, t) => {
        var n = {}.toString;
        t.exports = Array.isArray || function(e) {
            return n.call(e) == `[object Array]`
        }
    })),
    P = t(((e, t) => {
        n(), t.exports = s;
        var i = typeof r == `function` && typeof r.isBuffer == `function`,
            a = typeof ArrayBuffer == `function`,
            o = function(e) {
                return typeof ArrayBuffer.isView == `function` ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
            };

        function s(e) {
            return i && r.isBuffer(e) || a && (e instanceof ArrayBuffer || o(e))
        }
    })),
    ee = t((e => {
        var t = N(),
            n = P(),
            r = Object.prototype.toString,
            i = typeof Blob == `function` || typeof Blob < `u` && r.call(Blob) === `[object BlobConstructor]`,
            a = typeof File == `function` || typeof File < `u` && r.call(File) === `[object FileConstructor]`;
        e.deconstructPacket = function(e) {
            var t = [],
                n = e.data,
                r = e;
            return r.data = o(n, t), r.attachments = t.length, {
                packet: r,
                buffers: t
            }
        };

        function o(e, r) {
            if (!e) return e;
            if (n(e)) {
                var i = {
                    _placeholder: !0,
                    num: r.length
                };
                return r.push(e), i
            }
            if (t(e)) {
                for (var a = Array(e.length), s = 0; s < e.length; s++) a[s] = o(e[s], r);
                return a
            }
            if (typeof e == `object` && !(e instanceof Date)) {
                var a = {};
                for (var c in e) a[c] = o(e[c], r);
                return a
            }
            return e
        }
        e.reconstructPacket = function(e, t) {
            return e.data = s(e.data, t), e.attachments = void 0, e
        };

        function s(e, n) {
            if (!e) return e;
            if (e && e._placeholder === !0) {
                if (typeof e.num == `number` && e.num >= 0 && e.num < n.length) return n[e.num];
                throw Error(`illegal attachments`)
            }
            if (t(e))
                for (var r = 0; r < e.length; r++) e[r] = s(e[r], n);
            else if (typeof e == `object`)
                for (var i in e) e[i] = s(e[i], n);
            return e
        }
        e.removeBlobs = function(e, r) {
            function o(e, l, u) {
                if (!e) return e;
                if (i && e instanceof Blob || a && e instanceof File) {
                    s++;
                    var d = new FileReader;
                    d.onload = function() {
                        u ? u[l] = this.result : c = this.result, --s || r(c)
                    }, d.readAsArrayBuffer(e)
                } else if (t(e))
                    for (var f = 0; f < e.length; f++) o(e[f], f, e);
                else if (typeof e == `object` && !n(e))
                    for (var p in e) o(e[p], p, e)
            }
            var s = 0,
                c = e;
            o(c), s || r(c)
        }
    })),
    F = t((e => {
        var t = j()(`socket.io-parser`),
            n = M(),
            r = ee(),
            i = N(),
            a = P();
        e.protocol = 4, e.types = [`CONNECT`, `DISCONNECT`, `EVENT`, `ACK`, `ERROR`, `BINARY_EVENT`, `BINARY_ACK`], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = o, e.Decoder = d;

        function o() {}
        var s = e.ERROR + `"encode error"`;
        o.prototype.encode = function(n, r) {
            t(`encoding packet %j`, n), e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? u(n, r) : r([c(n)])
        };

        function c(n) {
            var r = `` + n.type;
            if ((e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type) && (r += n.attachments + `-`), n.nsp && n.nsp !== `/` && (r += n.nsp + `,`), n.id != null && (r += n.id), n.data != null) {
                var i = l(n.data);
                if (i !== !1) r += i;
                else return s
            }
            return t(`encoded %j as %s`, n, r), r
        }

        function l(e) {
            try {
                return JSON.stringify(e)
            } catch {
                return !1
            }
        }

        function u(e, t) {
            function n(e) {
                var n = r.deconstructPacket(e),
                    i = c(n.packet),
                    a = n.buffers;
                a.unshift(i), t(a)
            }
            r.removeBlobs(e, n)
        }

        function d() {
            this.reconstructor = null
        }
        n(d.prototype), d.prototype.add = function(t) {
            var n;
            if (typeof t == `string`) {
                if (this.reconstructor) throw Error(`got plaintext data when reconstructing a packet`);
                n = p(t), e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? (this.reconstructor = new h(n), this.reconstructor.reconPack.attachments === 0 && this.emit(`decoded`, n)) : this.emit(`decoded`, n)
            } else if (a(t) || t.base64) {
                if (this.reconstructor) n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, this.emit(`decoded`, n));
                else throw Error(`got binary data when not reconstructing a packet`)
            } else throw Error(`Unknown type: ` + t)
        };

        function f(e, t) {
            switch (e) {
                case 0:
                    return typeof t == `object`;
                case 1:
                    return t === void 0;
                case 4:
                    return typeof t == `string` || typeof t == `object`;
                case 2:
                case 5:
                    return i(t) && (typeof t[0] == `string` || typeof t[0] == `number`);
                case 3:
                case 6:
                    return i(t)
            }
        }

        function p(n) {
            var r = 0,
                i = {
                    type: Number(n.charAt(0))
                };
            if (e.types[i.type] == null) return g(`unknown packet type ` + i.type);
            if (e.BINARY_EVENT === i.type || e.BINARY_ACK === i.type) {
                for (var a = r + 1; n.charAt(++r) !== `-` && r != n.length;);
                var o = n.substring(a, r);
                if (o != Number(o) || n.charAt(r) !== `-`) throw Error(`Illegal attachments`);
                i.attachments = Number(o)
            }
            if (n.charAt(r + 1) === `/`) {
                for (var a = r + 1; ++r;) {
                    var s = n.charAt(r);
                    if (s === `,` || r === n.length) break
                }
                i.nsp = n.substring(a, r)
            } else i.nsp = `/`;
            var c = n.charAt(r + 1);
            if (c !== `` && Number(c) == c) {
                for (var a = r + 1; ++r;) {
                    var s = n.charAt(r);
                    if (s == null || Number(s) != s) {
                        --r;
                        break
                    }
                    if (r === n.length) break
                }
                i.id = Number(n.substring(a, r + 1))
            }
            if (n.charAt(++r)) {
                var l = m(n.substr(r));
                if (f(i.type, l)) i.data = l;
                else throw Error(`invalid payload`)
            }
            return t(`decoded %s as %j`, n, i), i
        }

        function m(e) {
            try {
                return JSON.parse(e)
            } catch {
                return !1
            }
        }
        d.prototype.destroy = function() {
            this.reconstructor && this.reconstructor.finishedReconstruction()
        };

        function h(e) {
            this.reconPack = e, this.buffers = []
        }
        h.prototype.takeBinaryData = function(e) {
            if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
                var t = r.reconstructPacket(this.reconPack, this.buffers);
                return this.finishedReconstruction(), t
            }
            return null
        }, h.prototype.finishedReconstruction = function() {
            this.reconPack = null, this.buffers = []
        };

        function g(t) {
            return {
                type: e.ERROR,
                data: `parser error: ` + t
            }
        }
    })),
    te = t(((e, t) => {
        try {
            t.exports = typeof XMLHttpRequest < `u` && `withCredentials` in new XMLHttpRequest
        } catch {
            t.exports = !1
        }
    })),
    I = t(((e, t) => {
        t.exports = (function() {
            return typeof self < `u` ? self : typeof window < `u` ? window : Function(`return this`)()
        })()
    })),
    L = t(((e, t) => {
        var n = te(),
            r = I();
        t.exports = function(e) {
            var t = e.xdomain,
                i = e.xscheme,
                a = e.enablesXDR;
            try {
                if (typeof XMLHttpRequest < `u` && (!t || n)) return new XMLHttpRequest
            } catch {}
            try {
                if (typeof XDomainRequest < `u` && !i && a) return new XDomainRequest
            } catch {}
            if (!t) try {
                return new r[[`Active`, `Object`].join(`X`)](`Microsoft.XMLHTTP`)
            } catch {}
        }
    })),
    ne = t(((e, t) => {
        t.exports = Object.keys || function(e) {
            var t = [],
                n = Object.prototype.hasOwnProperty;
            for (var r in e) n.call(e, r) && t.push(r);
            return t
        }
    })),
    re = t(((e, t) => {
        var n = {}.toString;
        t.exports = Array.isArray || function(e) {
            return n.call(e) == `[object Array]`
        }
    })),
    R = t(((e, t) => {
        n();
        var i = re(),
            a = Object.prototype.toString,
            o = typeof Blob == `function` || typeof Blob < `u` && a.call(Blob) === `[object BlobConstructor]`,
            s = typeof File == `function` || typeof File < `u` && a.call(File) === `[object FileConstructor]`;
        t.exports = c;

        function c(e) {
            if (!e || typeof e != `object`) return !1;
            if (i(e)) {
                for (var t = 0, n = e.length; t < n; t++)
                    if (c(e[t])) return !0;
                return !1
            }
            if (typeof r == `function` && r.isBuffer && r.isBuffer(e) || typeof ArrayBuffer == `function` && e instanceof ArrayBuffer || o && e instanceof Blob || s && e instanceof File) return !0;
            if (e.toJSON && typeof e.toJSON == `function` && arguments.length === 1) return c(e.toJSON(), !0);
            for (var a in e)
                if (Object.prototype.hasOwnProperty.call(e, a) && c(e[a])) return !0;
            return !1
        }
    })),
    ie = t(((e, t) => {
        t.exports = function(e, t, n) {
            var r = e.byteLength;
            if (t = t || 0, n = n || r, e.slice) return e.slice(t, n);
            if (t < 0 && (t += r), n < 0 && (n += r), n > r && (n = r), t >= r || t >= n || r === 0) return new ArrayBuffer(0);
            for (var i = new Uint8Array(e), a = new Uint8Array(n - t), o = t, s = 0; o < n; o++, s++) a[s] = i[o];
            return a.buffer
        }
    })),
    ae = t(((e, t) => {
        t.exports = n;

        function n(e, t, n) {
            var i = !1;
            return n = n || r, a.count = e, e === 0 ? t() : a;

            function a(e, r) {
                if (a.count <= 0) throw Error(`after called too many times`);
                --a.count, e ? (i = !0, t(e), t = n) : a.count === 0 && !i && t(null, r)
            }
        }

        function r() {}
    })),
    oe = t(((e, t) => {
        var n = String.fromCharCode;

        function r(e) {
            for (var t = [], n = 0, r = e.length, i, a; n < r;) i = e.charCodeAt(n++), i >= 55296 && i <= 56319 && n < r ? (a = e.charCodeAt(n++), (a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), n--)) : t.push(i);
            return t
        }

        function i(e) {
            for (var t = e.length, r = -1, i, a = ``; ++r < t;) i = e[r], i > 65535 && (i -= 65536, a += n(i >>> 10 & 1023 | 55296), i = 56320 | i & 1023), a += n(i);
            return a
        }

        function a(e, t) {
            if (e >= 55296 && e <= 57343) {
                if (t) throw Error(`Lone surrogate U+` + e.toString(16).toUpperCase() + ` is not a scalar value`);
                return !1
            }
            return !0
        }

        function o(e, t) {
            return n(e >> t & 63 | 128)
        }

        function s(e, t) {
            if (!(e & 4294967168)) return n(e);
            var r = ``;
            return e & 4294965248 ? e & 4294901760 ? e & 4292870144 || (r = n(e >> 18 & 7 | 240), r += o(e, 12), r += o(e, 6)) : (a(e, t) || (e = 65533), r = n(e >> 12 & 15 | 224), r += o(e, 6)) : r = n(e >> 6 & 31 | 192), r += n(e & 63 | 128), r
        }

        function c(e, t) {
            t = t || {};
            for (var n = !1 !== t.strict, i = r(e), a = i.length, o = -1, c, l = ``; ++o < a;) c = i[o], l += s(c, n);
            return l
        }

        function l() {
            if (p >= f) throw Error(`Invalid byte index`);
            var e = d[p] & 255;
            if (p++, (e & 192) == 128) return e & 63;
            throw Error(`Invalid continuation byte`)
        }

        function u(e) {
            var t, n, r, i, o;
            if (p > f) throw Error(`Invalid byte index`);
            if (p == f) return !1;
            if (t = d[p] & 255, p++, !(t & 128)) return t;
            if ((t & 224) == 192) {
                if (n = l(), o = (t & 31) << 6 | n, o >= 128) return o;
                throw Error(`Invalid continuation byte`)
            }
            if ((t & 240) == 224) {
                if (n = l(), r = l(), o = (t & 15) << 12 | n << 6 | r, o >= 2048) return a(o, e) ? o : 65533;
                throw Error(`Invalid continuation byte`)
            }
            if ((t & 248) == 240 && (n = l(), r = l(), i = l(), o = (t & 7) << 18 | n << 12 | r << 6 | i, o >= 65536 && o <= 1114111)) return o;
            throw Error(`Invalid UTF-8 detected`)
        }
        var d, f, p;

        function m(e, t) {
            t = t || {};
            var n = !1 !== t.strict;
            d = r(e), f = d.length, p = 0;
            for (var a = [], o;
                (o = u(n)) !== !1;) a.push(o);
            return i(a)
        }
        t.exports = {
            version: `2.1.2`,
            encode: c,
            decode: m
        }
    })),
    se = t((e => {
        (function(t) {
            e.encode = function(e) {
                var n = new Uint8Array(e),
                    r, i = n.length,
                    a = ``;
                for (r = 0; r < i; r += 3) a += t[n[r] >> 2], a += t[(n[r] & 3) << 4 | n[r + 1] >> 4], a += t[(n[r + 1] & 15) << 2 | n[r + 2] >> 6], a += t[n[r + 2] & 63];
                return i % 3 == 2 ? a = a.substring(0, a.length - 1) + `=` : i % 3 == 1 && (a = a.substring(0, a.length - 2) + `==`), a
            }, e.decode = function(e) {
                var n = e.length * .75,
                    r = e.length,
                    i, a = 0,
                    o, s, c, l;
                e[e.length - 1] === `=` && (n--, e[e.length - 2] === `=` && n--);
                var u = new ArrayBuffer(n),
                    d = new Uint8Array(u);
                for (i = 0; i < r; i += 4) o = t.indexOf(e[i]), s = t.indexOf(e[i + 1]), c = t.indexOf(e[i + 2]), l = t.indexOf(e[i + 3]), d[a++] = o << 2 | s >> 4, d[a++] = (s & 15) << 4 | c >> 2, d[a++] = (c & 3) << 6 | l & 63;
                return u
            }
        })(`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`)
    })),
    ce = t(((e, t) => {
        var n = n === void 0 ? typeof WebKitBlobBuilder < `u` ? WebKitBlobBuilder : typeof MSBlobBuilder < `u` ? MSBlobBuilder : typeof MozBlobBuilder < `u` && MozBlobBuilder : n,
            r = (function() {
                try {
                    return new Blob([`hi`]).size === 2
                } catch {
                    return !1
                }
            })(),
            i = r && (function() {
                try {
                    return new Blob([new Uint8Array([1, 2])]).size === 2
                } catch {
                    return !1
                }
            })(),
            a = n && n.prototype.append && n.prototype.getBlob;

        function o(e) {
            return e.map(function(e) {
                if (e.buffer instanceof ArrayBuffer) {
                    var t = e.buffer;
                    if (e.byteLength !== t.byteLength) {
                        var n = new Uint8Array(e.byteLength);
                        n.set(new Uint8Array(t, e.byteOffset, e.byteLength)), t = n.buffer
                    }
                    return t
                }
                return e
            })
        }

        function s(e, t) {
            t = t || {};
            var r = new n;
            return o(e).forEach(function(e) {
                r.append(e)
            }), t.type ? r.getBlob(t.type) : r.getBlob()
        }

        function c(e, t) {
            return new Blob(o(e), t || {})
        }
        typeof Blob < `u` && (s.prototype = Blob.prototype, c.prototype = Blob.prototype), t.exports = (function() {
            if (r) return i ? Blob : c;
            if (a) return s
        })()
    })),
    z = t((e => {
        var t = ne(),
            n = R(),
            r = ie(),
            i = ae(),
            a = oe(),
            o;
        typeof ArrayBuffer < `u` && (o = se());
        var s = typeof navigator < `u` && /Android/i.test(navigator.userAgent),
            c = typeof navigator < `u` && /PhantomJS/i.test(navigator.userAgent),
            l = s || c;
        e.protocol = 3;
        var u = e.packets = {
                open: 0,
                close: 1,
                ping: 2,
                pong: 3,
                message: 4,
                upgrade: 5,
                noop: 6
            },
            d = t(u),
            f = {
                type: `error`,
                data: `parser error`
            },
            p = ce();
        e.encodePacket = function(e, t, n, r) {
            typeof t == `function` && (r = t, t = !1), typeof n == `function` && (r = n, n = null);
            var i = e.data === void 0 ? void 0 : e.data.buffer || e.data;
            if (typeof ArrayBuffer < `u` && i instanceof ArrayBuffer) return h(e, t, r);
            if (p !== void 0 && i instanceof p) return _(e, t, r);
            if (i && i.base64) return m(e, r);
            var o = u[e.type];
            return e.data !== void 0 && (o += n ? a.encode(String(e.data), {
                strict: !1
            }) : String(e.data)), r(`` + o)
        };

        function m(t, n) {
            return n(`b` + e.packets[t.type] + t.data.data)
        }

        function h(t, n, r) {
            if (!n) return e.encodeBase64Packet(t, r);
            var i = t.data,
                a = new Uint8Array(i),
                o = new Uint8Array(1 + i.byteLength);
            o[0] = u[t.type];
            for (var s = 0; s < a.length; s++) o[s + 1] = a[s];
            return r(o.buffer)
        }

        function g(t, n, r) {
            if (!n) return e.encodeBase64Packet(t, r);
            var i = new FileReader;
            return i.onload = function() {
                e.encodePacket({
                    type: t.type,
                    data: i.result
                }, n, !0, r)
            }, i.readAsArrayBuffer(t.data)
        }

        function _(t, n, r) {
            if (!n) return e.encodeBase64Packet(t, r);
            if (l) return g(t, n, r);
            var i = new Uint8Array(1);
            return i[0] = u[t.type], r(new p([i.buffer, t.data]))
        }
        e.encodeBase64Packet = function(t, n) {
            var r = `b` + e.packets[t.type];
            if (p !== void 0 && t.data instanceof p) {
                var i = new FileReader;
                return i.onload = function() {
                    var e = i.result.split(`,`)[1];
                    n(r + e)
                }, i.readAsDataURL(t.data)
            }
            var a;
            try {
                a = String.fromCharCode.apply(null, new Uint8Array(t.data))
            } catch {
                for (var o = new Uint8Array(t.data), s = Array(o.length), c = 0; c < o.length; c++) s[c] = o[c];
                a = String.fromCharCode.apply(null, s)
            }
            return r += btoa(a), n(r)
        }, e.decodePacket = function(t, n, i) {
            if (t === void 0) return f;
            if (typeof t == `string`) {
                if (t.charAt(0) === `b`) return e.decodeBase64Packet(t.substr(1), n);
                if (i && (t = v(t), t === !1)) return f;
                var a = t.charAt(0);
                return Number(a) != a || !d[a] ? f : t.length > 1 ? {
                    type: d[a],
                    data: t.substring(1)
                } : {
                    type: d[a]
                }
            }
            var a = new Uint8Array(t)[0],
                o = r(t, 1);
            return p && n === `blob` && (o = new p([o])), {
                type: d[a],
                data: o
            }
        };

        function v(e) {
            try {
                e = a.decode(e, {
                    strict: !1
                })
            } catch {
                return !1
            }
            return e
        }
        e.decodeBase64Packet = function(e, t) {
            var n = d[e.charAt(0)];
            if (!o) return {
                type: n,
                data: {
                    base64: !0,
                    data: e.substr(1)
                }
            };
            var r = o.decode(e.substr(1));
            return t === `blob` && p && (r = new p([r])), {
                type: n,
                data: r
            }
        }, e.encodePayload = function(t, r, i) {
            typeof r == `function` && (i = r, r = null);
            var a = n(t);
            if (r && a) return p && !l ? e.encodePayloadAsBlob(t, i) : e.encodePayloadAsArrayBuffer(t, i);
            if (!t.length) return i(`0:`);

            function o(e) {
                return e.length + `:` + e
            }

            function s(t, n) {
                e.encodePacket(t, a ? r : !1, !1, function(e) {
                    n(null, o(e))
                })
            }
            y(t, s, function(e, t) {
                return i(t.join(``))
            })
        };

        function y(e, t, n) {
            for (var r = Array(e.length), a = i(e.length, n), o = function(e, n, i) {
                    t(n, function(t, n) {
                        r[e] = n, i(t, r)
                    })
                }, s = 0; s < e.length; s++) o(s, e[s], a)
        }
        e.decodePayload = function(t, n, r) {
            if (typeof t != `string`) return e.decodePayloadAsBinary(t, n, r);
            typeof n == `function` && (r = n, n = null);
            var i;
            if (t === ``) return r(f, 0, 1);
            for (var a = ``, o, s, c = 0, l = t.length; c < l; c++) {
                var u = t.charAt(c);
                if (u !== `:`) a += u;
                else {
                    if (a === `` || a != (o = Number(a)) || (s = t.substr(c + 1, o), a != s.length)) return r(f, 0, 1);
                    if (s.length) {
                        if (i = e.decodePacket(s, n, !1), f.type === i.type && f.data === i.data) return r(f, 0, 1);
                        if (!1 === r(i, c + o, l)) return
                    }
                    c += o, a = ``
                }
            }
            if (a !== ``) return r(f, 0, 1)
        }, e.encodePayloadAsArrayBuffer = function(t, n) {
            if (!t.length) return n(new ArrayBuffer(0));

            function r(t, n) {
                e.encodePacket(t, !0, !0, function(e) {
                    return n(null, e)
                })
            }
            y(t, r, function(e, t) {
                var r = t.reduce(function(e, t) {
                        var n = typeof t == `string` ? t.length : t.byteLength;
                        return e + n.toString().length + n + 2
                    }, 0),
                    i = new Uint8Array(r),
                    a = 0;
                return t.forEach(function(e) {
                    var t = typeof e == `string`,
                        n = e;
                    if (t) {
                        for (var r = new Uint8Array(e.length), o = 0; o < e.length; o++) r[o] = e.charCodeAt(o);
                        n = r.buffer
                    }
                    t ? i[a++] = 0 : i[a++] = 1;
                    for (var s = n.byteLength.toString(), o = 0; o < s.length; o++) i[a++] = parseInt(s[o]);
                    i[a++] = 255;
                    for (var r = new Uint8Array(n), o = 0; o < r.length; o++) i[a++] = r[o]
                }), n(i.buffer)
            })
        }, e.encodePayloadAsBlob = function(t, n) {
            function r(t, n) {
                e.encodePacket(t, !0, !0, function(e) {
                    var t = new Uint8Array(1);
                    if (t[0] = 1, typeof e == `string`) {
                        for (var r = new Uint8Array(e.length), i = 0; i < e.length; i++) r[i] = e.charCodeAt(i);
                        e = r.buffer, t[0] = 0
                    }
                    for (var a = (e instanceof ArrayBuffer ? e.byteLength : e.size).toString(), o = new Uint8Array(a.length + 1), i = 0; i < a.length; i++) o[i] = parseInt(a[i]);
                    o[a.length] = 255, p && n(null, new p([t.buffer, o.buffer, e]))
                })
            }
            y(t, r, function(e, t) {
                return n(new p(t))
            })
        }, e.decodePayloadAsBinary = function(t, n, i) {
            typeof n == `function` && (i = n, n = null);
            for (var a = t, o = []; a.byteLength > 0;) {
                for (var s = new Uint8Array(a), c = s[0] === 0, l = ``, u = 1; s[u] !== 255; u++) {
                    if (l.length > 310) return i(f, 0, 1);
                    l += s[u]
                }
                a = r(a, 2 + l.length), l = parseInt(l);
                var d = r(a, 0, l);
                if (c) try {
                    d = String.fromCharCode.apply(null, new Uint8Array(d))
                } catch {
                    var p = new Uint8Array(d);
                    d = ``;
                    for (var u = 0; u < p.length; u++) d += String.fromCharCode(p[u])
                }
                o.push(d), a = r(a, l)
            }
            var m = o.length;
            o.forEach(function(t, r) {
                i(e.decodePacket(t, n, !0), r, m)
            })
        }
    })),
    B = t(((e, t) => {
        var n = z(),
            r = M();
        t.exports = i;

        function i(e) {
            this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = ``, this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.withCredentials = e.withCredentials, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.forceNode = e.forceNode, this.isReactNative = e.isReactNative, this.extraHeaders = e.extraHeaders, this.localAddress = e.localAddress
        }
        r(i.prototype), i.prototype.onError = function(e, t) {
            var n = Error(e);
            return n.type = `TransportError`, n.description = t, this.emit(`error`, n), this
        }, i.prototype.open = function() {
            return (this.readyState === `closed` || this.readyState === ``) && (this.readyState = `opening`, this.doOpen()), this
        }, i.prototype.close = function() {
            return (this.readyState === `opening` || this.readyState === `open`) && (this.doClose(), this.onClose()), this
        }, i.prototype.send = function(e) {
            if (this.readyState === `open`) this.write(e);
            else throw Error(`Transport not open`)
        }, i.prototype.onOpen = function() {
            this.readyState = `open`, this.writable = !0, this.emit(`open`)
        }, i.prototype.onData = function(e) {
            var t = n.decodePacket(e, this.socket.binaryType);
            this.onPacket(t)
        }, i.prototype.onPacket = function(e) {
            this.emit(`packet`, e)
        }, i.prototype.onClose = function() {
            this.readyState = `closed`, this.emit(`close`)
        }
    })),
    V = t((e => {
        e.encode = function(e) {
            var t = ``;
            for (var n in e) e.hasOwnProperty(n) && (t.length && (t += `&`), t += encodeURIComponent(n) + `=` + encodeURIComponent(e[n]));
            return t
        }, e.decode = function(e) {
            for (var t = {}, n = e.split(`&`), r = 0, i = n.length; r < i; r++) {
                var a = n[r].split(`=`);
                t[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
            }
            return t
        }
    })),
    H = t(((e, t) => {
        t.exports = function(e, t) {
            var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }
    })),
    U = t(((e, t) => {
        var n = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_`.split(``),
            r = 64,
            i = {},
            a = 0,
            o = 0,
            s;

        function c(e) {
            var t = ``;
            do t = n[e % r] + t, e = Math.floor(e / r); while (e > 0);
            return t
        }

        function l(e) {
            var t = 0;
            for (o = 0; o < e.length; o++) t = t * r + i[e.charAt(o)];
            return t
        }

        function u() {
            var e = c(+new Date);
            return e === s ? e + `.` + c(a++) : (a = 0, s = e)
        }
        for (; o < r; o++) i[n[o]] = o;
        u.encode = c, u.decode = l, t.exports = u
    })),
    le = t(((e, t) => {
        var n = 1e3,
            r = n * 60,
            i = r * 60,
            a = i * 24,
            o = a * 365.25;
        t.exports = function(e, t) {
            t = t || {};
            var n = typeof e;
            if (n === `string` && e.length > 0) return s(e);
            if (n === `number` && isNaN(e) === !1) return t.long ? l(e) : c(e);
            throw Error(`val is not a non-empty string or a valid number. val=` + JSON.stringify(e))
        };

        function s(e) {
            if (e = String(e), !(e.length > 100)) {
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var s = parseFloat(t[1]);
                    switch ((t[2] || `ms`).toLowerCase()) {
                        case `years`:
                        case `year`:
                        case `yrs`:
                        case `yr`:
                        case `y`:
                            return s * o;
                        case `days`:
                        case `day`:
                        case `d`:
                            return s * a;
                        case `hours`:
                        case `hour`:
                        case `hrs`:
                        case `hr`:
                        case `h`:
                            return s * i;
                        case `minutes`:
                        case `minute`:
                        case `mins`:
                        case `min`:
                        case `m`:
                            return s * r;
                        case `seconds`:
                        case `second`:
                        case `secs`:
                        case `sec`:
                        case `s`:
                            return s * n;
                        case `milliseconds`:
                        case `millisecond`:
                        case `msecs`:
                        case `msec`:
                        case `ms`:
                            return s;
                        default:
                            return
                    }
                }
            }
        }

        function c(e) {
            return e >= a ? Math.round(e / a) + `d` : e >= i ? Math.round(e / i) + `h` : e >= r ? Math.round(e / r) + `m` : e >= n ? Math.round(e / n) + `s` : e + `ms`
        }

        function l(e) {
            return u(e, a, `day`) || u(e, i, `hour`) || u(e, r, `minute`) || u(e, n, `second`) || e + ` ms`
        }

        function u(e, t, n) {
            if (!(e < t)) return e < t * 1.5 ? Math.floor(e / t) + ` ` + n : Math.ceil(e / t) + ` ` + n + `s`
        }
    })),
    ue = t(((e, t) => {
        e = t.exports = r.debug = r.default = r, e.coerce = c, e.disable = o, e.enable = a, e.enabled = s, e.humanize = le(), e.instances = [], e.names = [], e.skips = [], e.formatters = {};

        function n(t) {
            var n = 0,
                r;
            for (r in t) n = (n << 5) - n + t.charCodeAt(r), n |= 0;
            return e.colors[Math.abs(n) % e.colors.length]
        }

        function r(t) {
            var r;

            function a() {
                if (a.enabled) {
                    var t = a,
                        n = +new Date;
                    t.diff = n - (r || n), t.prev = r, t.curr = n, r = n;
                    for (var i = Array(arguments.length), o = 0; o < i.length; o++) i[o] = arguments[o];
                    i[0] = e.coerce(i[0]), typeof i[0] != `string` && i.unshift(`%O`);
                    var s = 0;
                    i[0] = i[0].replace(/%([a-zA-Z%])/g, function(n, r) {
                        if (n === `%%`) return n;
                        s++;
                        var a = e.formatters[r];
                        if (typeof a == `function`) {
                            var o = i[s];
                            n = a.call(t, o), i.splice(s, 1), s--
                        }
                        return n
                    }), e.formatArgs.call(t, i), (a.log || e.log || console.log.bind(console)).apply(t, i)
                }
            }
            return a.namespace = t, a.enabled = e.enabled(t), a.useColors = e.useColors(), a.color = n(t), a.destroy = i, typeof e.init == `function` && e.init(a), e.instances.push(a), a
        }

        function i() {
            var t = e.instances.indexOf(this);
            return t !== -1 && (e.instances.splice(t, 1), !0)
        }

        function a(t) {
            e.save(t), e.names = [], e.skips = [];
            var n, r = (typeof t == `string` ? t : ``).split(/[\s,]+/),
                i = r.length;
            for (n = 0; n < i; n++) r[n] && (t = r[n].replace(/\*/g, `.*?`), t[0] === `-` ? e.skips.push(RegExp(`^` + t.substr(1) + `$`)) : e.names.push(RegExp(`^` + t + `$`)));
            for (n = 0; n < e.instances.length; n++) {
                var a = e.instances[n];
                a.enabled = e.enabled(a.namespace)
            }
        }

        function o() {
            e.enable(``)
        }

        function s(t) {
            if (t[t.length - 1] === `*`) return !0;
            for (var n = 0, r = e.skips.length; n < r; n++)
                if (e.skips[n].test(t)) return !1;
            for (n = 0, r = e.names.length; n < r; n++)
                if (e.names[n].test(t)) return !0;
            return !1
        }

        function c(e) {
            return e instanceof Error ? e.stack || e.message : e
        }
    })),
    W = t(((e, t) => {
        o(), e = t.exports = ue(), e.log = i, e.formatArgs = r, e.save = s, e.load = c, e.useColors = n, e.storage = typeof chrome < `u` && chrome.storage !== void 0 ? chrome.storage.local : l(), e.colors = `#0000CC.#0000FF.#0033CC.#0033FF.#0066CC.#0066FF.#0099CC.#0099FF.#00CC00.#00CC33.#00CC66.#00CC99.#00CCCC.#00CCFF.#3300CC.#3300FF.#3333CC.#3333FF.#3366CC.#3366FF.#3399CC.#3399FF.#33CC00.#33CC33.#33CC66.#33CC99.#33CCCC.#33CCFF.#6600CC.#6600FF.#6633CC.#6633FF.#66CC00.#66CC33.#9900CC.#9900FF.#9933CC.#9933FF.#99CC00.#99CC33.#CC0000.#CC0033.#CC0066.#CC0099.#CC00CC.#CC00FF.#CC3300.#CC3333.#CC3366.#CC3399.#CC33CC.#CC33FF.#CC6600.#CC6633.#CC9900.#CC9933.#CCCC00.#CCCC33.#FF0000.#FF0033.#FF0066.#FF0099.#FF00CC.#FF00FF.#FF3300.#FF3333.#FF3366.#FF3399.#FF33CC.#FF33FF.#FF6600.#FF6633.#FF9900.#FF9933.#FFCC00.#FFCC33`.split(`.`);

        function n() {
            return typeof window < `u` && window.process && window.process.type === `renderer` ? !0 : typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < `u` && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < `u` && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }
        e.formatters.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return `[UnexpectedJSONParseError]: ` + e.message
            }
        };

        function r(t) {
            var n = this.useColors;
            if (t[0] = (n ? `%c` : ``) + this.namespace + (n ? ` %c` : ` `) + t[0] + (n ? `%c ` : ` `) + `+` + e.humanize(this.diff), n) {
                var r = `color: ` + this.color;
                t.splice(1, 0, r, `color: inherit`);
                var i = 0,
                    a = 0;
                t[0].replace(/%[a-zA-Z%]/g, function(e) {
                    e !== `%%` && (i++, e === `%c` && (a = i))
                }), t.splice(a, 0, r)
            }
        }

        function i() {
            return typeof console == `object` && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function s(t) {
            try {
                t == null ? e.storage.removeItem(`debug`) : e.storage.debug = t
            } catch {}
        }

        function c() {
            var t;
            try {
                t = e.storage.debug
            } catch {}
            return !t && a !== void 0 && `env` in a && (t = {}.DEBUG), t
        }
        e.enable(c());

        function l() {
            try {
                return window.localStorage
            } catch {}
        }
    })),
    G = t(((e, t) => {
        var n = B(),
            r = V(),
            i = z(),
            a = H(),
            o = U(),
            s = W()(`engine.io-client:polling`);
        t.exports = l;
        var c = (function() {
            return new(L())({
                xdomain: !1
            }).responseType != null
        })();

        function l(e) {
            var t = e && e.forceBase64;
            (!c || t) && (this.supportsBinary = !1), n.call(this, e)
        }
        a(l, n), l.prototype.name = `polling`, l.prototype.doOpen = function() {
            this.poll()
        }, l.prototype.pause = function(e) {
            var t = this;
            this.readyState = `pausing`;

            function n() {
                s(`paused`), t.readyState = `paused`, e()
            }
            if (this.polling || !this.writable) {
                var r = 0;
                this.polling && (s(`we are currently polling - waiting to pause`), r++, this.once(`pollComplete`, function() {
                    s(`pre-pause polling complete`), --r || n()
                })), this.writable || (s(`we are currently writing - waiting to pause`), r++, this.once(`drain`, function() {
                    s(`pre-pause writing complete`), --r || n()
                }))
            } else n()
        }, l.prototype.poll = function() {
            s(`polling`), this.polling = !0, this.doPoll(), this.emit(`poll`)
        }, l.prototype.onData = function(e) {
            var t = this;
            s(`polling got data %s`, e), i.decodePayload(e, this.socket.binaryType, function(e, n, r) {
                if (t.readyState === `opening` && e.type === `open` && t.onOpen(), e.type === `close`) return t.onClose(), !1;
                t.onPacket(e)
            }), this.readyState !== `closed` && (this.polling = !1, this.emit(`pollComplete`), this.readyState === `open` ? this.poll() : s(`ignoring poll - transport state "%s"`, this.readyState))
        }, l.prototype.doClose = function() {
            var e = this;

            function t() {
                s(`writing close packet`), e.write([{
                    type: `close`
                }])
            }
            this.readyState === `open` ? (s(`transport open - closing`), t()) : (s(`transport not open - deferring close`), this.once(`open`, t))
        }, l.prototype.write = function(e) {
            var t = this;
            this.writable = !1;
            var n = function() {
                t.writable = !0, t.emit(`drain`)
            };
            i.encodePayload(e, this.supportsBinary, function(e) {
                t.doWrite(e, n)
            })
        }, l.prototype.uri = function() {
            var e = this.query || {},
                t = this.secure ? `https` : `http`,
                n = ``;
            !1 !== this.timestampRequests && (e[this.timestampParam] = o()), !this.supportsBinary && !e.sid && (e.b64 = 1), e = r.encode(e), this.port && (t === `https` && Number(this.port) !== 443 || t === `http` && Number(this.port) !== 80) && (n = `:` + this.port), e.length && (e = `?` + e);
            var i = this.hostname.indexOf(`:`) !== -1;
            return t + `://` + (i ? `[` + this.hostname + `]` : this.hostname) + n + this.path + e
        }
    })),
    de = t(((e, t) => {
        var n = L(),
            r = G(),
            i = M(),
            a = H(),
            o = W()(`engine.io-client:polling-xhr`),
            s = I();
        t.exports = l, t.exports.Request = u;

        function c() {}

        function l(e) {
            if (r.call(this, e), this.requestTimeout = e.requestTimeout, this.extraHeaders = e.extraHeaders, typeof location < `u`) {
                var t = location.protocol === `https:`,
                    n = location.port;
                n || (n = t ? 443 : 80), this.xd = typeof location < `u` && e.hostname !== location.hostname || n !== e.port, this.xs = e.secure !== t
            }
        }
        a(l, r), l.prototype.supportsBinary = !0, l.prototype.request = function(e) {
            return e = e || {}, e.uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.withCredentials = this.withCredentials, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.requestTimeout = this.requestTimeout, e.extraHeaders = this.extraHeaders, new u(e)
        }, l.prototype.doWrite = function(e, t) {
            var n = typeof e != `string` && e !== void 0,
                r = this.request({
                    method: `POST`,
                    data: e,
                    isBinary: n
                }),
                i = this;
            r.on(`success`, t), r.on(`error`, function(e) {
                i.onError(`xhr post error`, e)
            }), this.sendXhr = r
        }, l.prototype.doPoll = function() {
            o(`xhr poll`);
            var e = this.request(),
                t = this;
            e.on(`data`, function(e) {
                t.onData(e)
            }), e.on(`error`, function(e) {
                t.onError(`xhr poll error`, e)
            }), this.pollXhr = e
        };

        function u(e) {
            this.method = e.method || `GET`, this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = !1 !== e.async, this.data = e.data === void 0 ? null : e.data, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.withCredentials = e.withCredentials, this.requestTimeout = e.requestTimeout, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
        }
        if (i(u.prototype), u.prototype.create = function() {
                var e = {
                    agent: this.agent,
                    xdomain: this.xd,
                    xscheme: this.xs,
                    enablesXDR: this.enablesXDR
                };
                e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
                var t = this.xhr = new n(e),
                    r = this;
                try {
                    o(`xhr open %s: %s`, this.method, this.uri), t.open(this.method, this.uri, this.async);
                    try {
                        if (this.extraHeaders)
                            for (var i in t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0), this.extraHeaders) this.extraHeaders.hasOwnProperty(i) && t.setRequestHeader(i, this.extraHeaders[i])
                    } catch {}
                    if (this.method === `POST`) try {
                        this.isBinary ? t.setRequestHeader(`Content-type`, `application/octet-stream`) : t.setRequestHeader(`Content-type`, `text/plain;charset=UTF-8`)
                    } catch {}
                    try {
                        t.setRequestHeader(`Accept`, `*/*`)
                    } catch {}
                    `withCredentials` in t && (t.withCredentials = this.withCredentials), this.requestTimeout && (t.timeout = this.requestTimeout), this.hasXDR() ? (t.onload = function() {
                        r.onLoad()
                    }, t.onerror = function() {
                        r.onError(t.responseText)
                    }) : t.onreadystatechange = function() {
                        if (t.readyState === 2) try {
                            var e = t.getResponseHeader(`Content-Type`);
                            (r.supportsBinary && e === `application/octet-stream` || e === `application/octet-stream; charset=UTF-8`) && (t.responseType = `arraybuffer`)
                        } catch {}
                        t.readyState === 4 && (t.status === 200 || t.status === 1223 ? r.onLoad() : setTimeout(function() {
                            r.onError(typeof t.status == `number` ? t.status : 0)
                        }, 0))
                    }, o(`xhr data %s`, this.data), t.send(this.data)
                } catch (e) {
                    setTimeout(function() {
                        r.onError(e)
                    }, 0);
                    return
                }
                typeof document < `u` && (this.index = u.requestsCount++, u.requests[this.index] = this)
            }, u.prototype.onSuccess = function() {
                this.emit(`success`), this.cleanup()
            }, u.prototype.onData = function(e) {
                this.emit(`data`, e), this.onSuccess()
            }, u.prototype.onError = function(e) {
                this.emit(`error`, e), this.cleanup(!0)
            }, u.prototype.cleanup = function(e) {
                if (this.xhr !== void 0 && this.xhr !== null) {
                    if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = c : this.xhr.onreadystatechange = c, e) try {
                        this.xhr.abort()
                    } catch {}
                    typeof document < `u` && delete u.requests[this.index], this.xhr = null
                }
            }, u.prototype.onLoad = function() {
                var e;
                try {
                    var t;
                    try {
                        t = this.xhr.getResponseHeader(`Content-Type`)
                    } catch {}
                    e = (t === `application/octet-stream` || t === `application/octet-stream; charset=UTF-8`) && this.xhr.response || this.xhr.responseText
                } catch (e) {
                    this.onError(e)
                }
                e != null && this.onData(e)
            }, u.prototype.hasXDR = function() {
                return typeof XDomainRequest < `u` && !this.xs && this.enablesXDR
            }, u.prototype.abort = function() {
                this.cleanup()
            }, u.requestsCount = 0, u.requests = {}, typeof document < `u`) {
            if (typeof attachEvent == `function`) attachEvent(`onunload`, f);
            else if (typeof addEventListener == `function`) {
                var d = `onpagehide` in s ? `pagehide` : `unload`;
                addEventListener(d, f, !1)
            }
        }

        function f() {
            for (var e in u.requests) u.requests.hasOwnProperty(e) && u.requests[e].abort()
        }
    })),
    fe = t(((e, t) => {
        var n = G(),
            r = H(),
            i = I();
        t.exports = l;
        var a = /\n/g,
            o = /\\n/g,
            s;

        function c() {}

        function l(e) {
            n.call(this, e), this.query = this.query || {}, s || (s = i.___eio = i.___eio || []), this.index = s.length;
            var t = this;
            s.push(function(e) {
                t.onData(e)
            }), this.query.j = this.index, typeof addEventListener == `function` && addEventListener(`beforeunload`, function() {
                t.script && (t.script.onerror = c)
            }, !1)
        }
        r(l, n), l.prototype.supportsBinary = !1, l.prototype.doClose = function() {
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), n.prototype.doClose.call(this)
        }, l.prototype.doPoll = function() {
            var e = this,
                t = document.createElement(`script`);
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function(t) {
                e.onError(`jsonp poll error`, t)
            };
            var n = document.getElementsByTagName(`script`)[0];
            n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t), this.script = t, typeof navigator < `u` && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
                var e = document.createElement(`iframe`);
                document.body.appendChild(e), document.body.removeChild(e)
            }, 100)
        }, l.prototype.doWrite = function(e, t) {
            var n = this;
            if (!this.form) {
                var r = document.createElement(`form`),
                    i = document.createElement(`textarea`),
                    s = this.iframeId = `eio_iframe_` + this.index,
                    c;
                r.className = `socketio`, r.style.position = `absolute`, r.style.top = `-1000px`, r.style.left = `-1000px`, r.target = s, r.method = `POST`, r.setAttribute(`accept-charset`, `utf-8`), i.name = `d`, r.appendChild(i), document.body.appendChild(r), this.form = r, this.area = i
            }
            this.form.action = this.uri();

            function l() {
                u(), t()
            }

            function u() {
                if (n.iframe) try {
                    n.form.removeChild(n.iframe)
                } catch (e) {
                    n.onError(`jsonp polling iframe removal error`, e)
                }
                try {
                    var e = `<iframe src="javascript:0" name="` + n.iframeId + `">`;
                    c = document.createElement(e)
                } catch {
                    c = document.createElement(`iframe`), c.name = n.iframeId, c.src = `javascript:0`
                }
                c.id = n.iframeId, n.form.appendChild(c), n.iframe = c
            }
            u(), e = e.replace(o, `\\
`), this.area.value = e.replace(a, `\\n`);
            try {
                this.form.submit()
            } catch {}
            this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                n.iframe.readyState === `complete` && l()
            } : this.iframe.onload = l
        }
    })),
    pe = t(((e, t) => {
        n();
        var i = B(),
            a = z(),
            o = V(),
            s = H(),
            c = U(),
            l = W()(`engine.io-client:websocket`),
            u, f;
        if (typeof WebSocket < `u` ? u = WebSocket : typeof self < `u` && (u = self.WebSocket || self.MozWebSocket), typeof window > `u`) try {
            f = d()
        } catch {}
        var p = u || f;
        t.exports = m;

        function m(e) {
            e && e.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, this.usingBrowserWebSocket = u && !e.forceNode, this.protocols = e.protocols, this.usingBrowserWebSocket || (p = f), i.call(this, e)
        }
        s(m, i), m.prototype.name = `websocket`, m.prototype.supportsBinary = !0, m.prototype.doOpen = function() {
            if (this.check()) {
                var e = this.uri(),
                    t = this.protocols,
                    n = {};
                this.isReactNative || (n.agent = this.agent, n.perMessageDeflate = this.perMessageDeflate, n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized), this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
                try {
                    this.ws = this.usingBrowserWebSocket && !this.isReactNative ? t ? new p(e, t) : new p(e) : new p(e, t, n)
                } catch (e) {
                    return this.emit(`error`, e)
                }
                this.ws.binaryType === void 0 && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = `nodebuffer`) : this.ws.binaryType = `arraybuffer`, this.addEventListeners()
            }
        }, m.prototype.addEventListeners = function() {
            var e = this;
            this.ws.onopen = function() {
                e.onOpen()
            }, this.ws.onclose = function() {
                e.onClose()
            }, this.ws.onmessage = function(t) {
                e.onData(t.data)
            }, this.ws.onerror = function(t) {
                e.onError(`websocket error`, t)
            }
        }, m.prototype.write = function(e) {
            var t = this;
            this.writable = !1;
            for (var n = e.length, i = 0, o = n; i < o; i++)(function(e) {
                a.encodePacket(e, t.supportsBinary, function(i) {
                    if (!t.usingBrowserWebSocket) {
                        var a = {};
                        e.options && (a.compress = e.options.compress), t.perMessageDeflate && (typeof i == `string` ? r.byteLength(i) : i.length) < t.perMessageDeflate.threshold && (a.compress = !1)
                    }
                    try {
                        t.usingBrowserWebSocket ? t.ws.send(i) : t.ws.send(i, a)
                    } catch {
                        l(`websocket closed before onclose event`)
                    }--n || s()
                })
            })(e[i]);

            function s() {
                t.emit(`flush`), setTimeout(function() {
                    t.writable = !0, t.emit(`drain`)
                }, 0)
            }
        }, m.prototype.onClose = function() {
            i.prototype.onClose.call(this)
        }, m.prototype.doClose = function() {
            this.ws !== void 0 && this.ws.close()
        }, m.prototype.uri = function() {
            var e = this.query || {},
                t = this.secure ? `wss` : `ws`,
                n = ``;
            this.port && (t === `wss` && Number(this.port) !== 443 || t === `ws` && Number(this.port) !== 80) && (n = `:` + this.port), this.timestampRequests && (e[this.timestampParam] = c()), this.supportsBinary || (e.b64 = 1), e = o.encode(e), e.length && (e = `?` + e);
            var r = this.hostname.indexOf(`:`) !== -1;
            return t + `://` + (r ? `[` + this.hostname + `]` : this.hostname) + n + this.path + e
        }, m.prototype.check = function() {
            return !!p && !(`__initialize` in p && this.name === m.prototype.name)
        }
    })),
    K = t((e => {
        var t = L(),
            n = de(),
            r = fe(),
            i = pe();
        e.polling = a, e.websocket = i;

        function a(e) {
            var i, a = !1,
                o = !1,
                s = !1 !== e.jsonp;
            if (typeof location < `u`) {
                var c = location.protocol === `https:`,
                    l = location.port;
                l || (l = c ? 443 : 80), a = e.hostname !== location.hostname || l !== e.port, o = e.secure !== c
            }
            if (e.xdomain = a, e.xscheme = o, i = new t(e), `open` in i && !e.forceJSONP) return new n(e);
            if (!s) throw Error(`JSONP disabled`);
            return new r(e)
        }
    })),
    q = t(((e, t) => {
        var n = [].indexOf;
        t.exports = function(e, t) {
            if (n) return e.indexOf(t);
            for (var r = 0; r < e.length; ++r)
                if (e[r] === t) return r;
            return -1
        }
    })),
    me = t(((e, t) => {
        var n = K(),
            r = M(),
            i = W()(`engine.io-client:socket`),
            a = q(),
            o = z(),
            s = w(),
            c = V();
        t.exports = l;

        function l(e, t) {
            if (!(this instanceof l)) return new l(e, t);
            t = t || {}, e && typeof e == `object` && (t = e, e = null), e ? (e = s(e), t.hostname = e.host, t.secure = e.protocol === `https` || e.protocol === `wss`, t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = s(t.host).host), this.secure = t.secure == null ? typeof location < `u` && location.protocol === `https:` : t.secure, t.hostname && !t.port && (t.port = this.secure ? `443` : `80`), this.agent = t.agent || !1, this.hostname = t.hostname || (typeof location < `u` ? location.hostname : `localhost`), this.port = t.port || (typeof location < `u` && location.port ? location.port : this.secure ? 443 : 80), this.query = t.query || {}, typeof this.query == `string` && (this.query = c.decode(this.query)), this.upgrade = !1 !== t.upgrade, this.path = (t.path || `/engine.io`).replace(/\/$/, ``) + `/`, this.forceJSONP = !!t.forceJSONP, this.jsonp = !1 !== t.jsonp, this.forceBase64 = !!t.forceBase64, this.enablesXDR = !!t.enablesXDR, this.withCredentials = !1 !== t.withCredentials, this.timestampParam = t.timestampParam || `t`, this.timestampRequests = t.timestampRequests, this.transports = t.transports || [`polling`, `websocket`], this.transportOptions = t.transportOptions || {}, this.readyState = ``, this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = t.policyPort || 843, this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, this.perMessageDeflate = !1 === t.perMessageDeflate ? !1 : t.perMessageDeflate || {}, !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && this.perMessageDeflate.threshold == null && (this.perMessageDeflate.threshold = 1024), this.pfx = t.pfx || void 0, this.key = t.key || void 0, this.passphrase = t.passphrase || void 0, this.cert = t.cert || void 0, this.ca = t.ca || void 0, this.ciphers = t.ciphers || void 0, this.rejectUnauthorized = t.rejectUnauthorized === void 0 || t.rejectUnauthorized, this.forceNode = !!t.forceNode, this.isReactNative = typeof navigator < `u` && typeof navigator.product == `string` && navigator.product.toLowerCase() === `reactnative`, (typeof self > `u` || this.isReactNative) && (t.extraHeaders && Object.keys(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders), t.localAddress && (this.localAddress = t.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
        }
        l.priorWebsocketSuccess = !1, r(l.prototype), l.protocol = o.protocol, l.Socket = l, l.Transport = B(), l.transports = K(), l.parser = z(), l.prototype.createTransport = function(e) {
            i(`creating transport "%s"`, e);
            var t = u(this.query);
            t.EIO = o.protocol, t.transport = e;
            var r = this.transportOptions[e] || {};
            return this.id && (t.sid = this.id), new n[e]({
                query: t,
                socket: this,
                agent: r.agent || this.agent,
                hostname: r.hostname || this.hostname,
                port: r.port || this.port,
                secure: r.secure || this.secure,
                path: r.path || this.path,
                forceJSONP: r.forceJSONP || this.forceJSONP,
                jsonp: r.jsonp || this.jsonp,
                forceBase64: r.forceBase64 || this.forceBase64,
                enablesXDR: r.enablesXDR || this.enablesXDR,
                withCredentials: r.withCredentials || this.withCredentials,
                timestampRequests: r.timestampRequests || this.timestampRequests,
                timestampParam: r.timestampParam || this.timestampParam,
                policyPort: r.policyPort || this.policyPort,
                pfx: r.pfx || this.pfx,
                key: r.key || this.key,
                passphrase: r.passphrase || this.passphrase,
                cert: r.cert || this.cert,
                ca: r.ca || this.ca,
                ciphers: r.ciphers || this.ciphers,
                rejectUnauthorized: r.rejectUnauthorized || this.rejectUnauthorized,
                perMessageDeflate: r.perMessageDeflate || this.perMessageDeflate,
                extraHeaders: r.extraHeaders || this.extraHeaders,
                forceNode: r.forceNode || this.forceNode,
                localAddress: r.localAddress || this.localAddress,
                requestTimeout: r.requestTimeout || this.requestTimeout,
                protocols: r.protocols || void 0,
                isReactNative: this.isReactNative
            })
        };

        function u(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }
        l.prototype.open = function() {
            var e;
            if (this.rememberUpgrade && l.priorWebsocketSuccess && this.transports.indexOf(`websocket`) !== -1) e = `websocket`;
            else if (this.transports.length === 0) {
                var t = this;
                setTimeout(function() {
                    t.emit(`error`, `No transports available`)
                }, 0);
                return
            } else e = this.transports[0];
            this.readyState = `opening`;
            try {
                e = this.createTransport(e)
            } catch {
                this.transports.shift(), this.open();
                return
            }
            e.open(), this.setTransport(e)
        }, l.prototype.setTransport = function(e) {
            i(`setting transport %s`, e.name);
            var t = this;
            this.transport && (i(`clearing existing transport %s`, this.transport.name), this.transport.removeAllListeners()), this.transport = e, e.on(`drain`, function() {
                t.onDrain()
            }).on(`packet`, function(e) {
                t.onPacket(e)
            }).on(`error`, function(e) {
                t.onError(e)
            }).on(`close`, function() {
                t.onClose(`transport close`)
            })
        }, l.prototype.probe = function(e) {
            i(`probing transport "%s"`, e);
            var t = this.createTransport(e, {
                    probe: 1
                }),
                n = !1,
                r = this;
            l.priorWebsocketSuccess = !1;

            function a() {
                if (r.onlyBinaryUpgrades) {
                    var a = !this.supportsBinary && r.transport.supportsBinary;
                    n = n || a
                }
                n || (i(`probe transport "%s" opened`, e), t.send([{
                    type: `ping`,
                    data: `probe`
                }]), t.once(`packet`, function(a) {
                    if (!n) {
                        if (a.type === `pong` && a.data === `probe`) {
                            if (i(`probe transport "%s" pong`, e), r.upgrading = !0, r.emit(`upgrading`, t), !t) return;
                            l.priorWebsocketSuccess = t.name === `websocket`, i(`pausing current transport "%s"`, r.transport.name), r.transport.pause(function() {
                                n || r.readyState !== `closed` && (i(`changing transport and sending upgrade packet`), f(), r.setTransport(t), t.send([{
                                    type: `upgrade`
                                }]), r.emit(`upgrade`, t), t = null, r.upgrading = !1, r.flush())
                            })
                        } else {
                            i(`probe transport "%s" failed`, e);
                            var o = Error(`probe error`);
                            o.transport = t.name, r.emit(`upgradeError`, o)
                        }
                    }
                }))
            }

            function o() {
                n || (n = !0, f(), t.close(), t = null)
            }

            function s(n) {
                var a = Error(`probe error: ` + n);
                a.transport = t.name, o(), i(`probe transport "%s" failed because of error: %s`, e, n), r.emit(`upgradeError`, a)
            }

            function c() {
                s(`transport closed`)
            }

            function u() {
                s(`socket closed`)
            }

            function d(e) {
                t && e.name !== t.name && (i(`"%s" works - aborting "%s"`, e.name, t.name), o())
            }

            function f() {
                t.removeListener(`open`, a), t.removeListener(`error`, s), t.removeListener(`close`, c), r.removeListener(`close`, u), r.removeListener(`upgrading`, d)
            }
            t.once(`open`, a), t.once(`error`, s), t.once(`close`, c), this.once(`close`, u), this.once(`upgrading`, d), t.open()
        }, l.prototype.onOpen = function() {
            if (i(`socket open`), this.readyState = `open`, l.priorWebsocketSuccess = this.transport.name === `websocket`, this.emit(`open`), this.flush(), this.readyState === `open` && this.upgrade && this.transport.pause) {
                i(`starting upgrade probes`);
                for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
            }
        }, l.prototype.onPacket = function(e) {
            if (this.readyState === `opening` || this.readyState === `open` || this.readyState === `closing`) switch (i(`socket receive: type "%s", data "%s"`, e.type, e.data), this.emit(`packet`, e), this.emit(`heartbeat`), e.type) {
                case `open`:
                    this.onHandshake(JSON.parse(e.data));
                    break;
                case `pong`:
                    this.setPing(), this.emit(`pong`);
                    break;
                case `error`:
                    var t = Error(`server error`);
                    t.code = e.data, this.onError(t);
                    break;
                case `message`:
                    this.emit(`data`, e.data), this.emit(`message`, e.data)
            } else i(`packet received with socket readyState "%s"`, this.readyState)
        }, l.prototype.onHandshake = function(e) {
            this.emit(`handshake`, e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), this.readyState !== `closed` && (this.setPing(), this.removeListener(`heartbeat`, this.onHeartbeat), this.on(`heartbeat`, this.onHeartbeat))
        }, l.prototype.onHeartbeat = function(e) {
            clearTimeout(this.pingTimeoutTimer);
            var t = this;
            t.pingTimeoutTimer = setTimeout(function() {
                t.readyState !== `closed` && t.onClose(`ping timeout`)
            }, e || t.pingInterval + t.pingTimeout)
        }, l.prototype.setPing = function() {
            var e = this;
            clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout(function() {
                i(`writing ping packet - expecting pong within %sms`, e.pingTimeout), e.ping(), e.onHeartbeat(e.pingTimeout)
            }, e.pingInterval)
        }, l.prototype.ping = function() {
            var e = this;
            this.sendPacket(`ping`, function() {
                e.emit(`ping`)
            })
        }, l.prototype.onDrain = function() {
            this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emit(`drain`) : this.flush()
        }, l.prototype.flush = function() {
            this.readyState !== `closed` && this.transport.writable && !this.upgrading && this.writeBuffer.length && (i(`flushing %d packets in socket`, this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit(`flush`))
        }, l.prototype.write = l.prototype.send = function(e, t, n) {
            return this.sendPacket(`message`, e, t, n), this
        }, l.prototype.sendPacket = function(e, t, n, r) {
            if (typeof t == `function` && (r = t, t = void 0), typeof n == `function` && (r = n, n = null), this.readyState !== `closing` && this.readyState !== `closed`) {
                n = n || {}, n.compress = !1 !== n.compress;
                var i = {
                    type: e,
                    data: t,
                    options: n
                };
                this.emit(`packetCreate`, i), this.writeBuffer.push(i), r && this.once(`flush`, r), this.flush()
            }
        }, l.prototype.close = function() {
            if (this.readyState === `opening` || this.readyState === `open`) {
                this.readyState = `closing`;
                var e = this;
                this.writeBuffer.length ? this.once(`drain`, function() {
                    this.upgrading ? r() : t()
                }) : this.upgrading ? r() : t()
            }

            function t() {
                e.onClose(`forced close`), i(`socket closing - telling transport to close`), e.transport.close()
            }

            function n() {
                e.removeListener(`upgrade`, n), e.removeListener(`upgradeError`, n), t()
            }

            function r() {
                e.once(`upgrade`, n), e.once(`upgradeError`, n)
            }
            return this
        }, l.prototype.onError = function(e) {
            i(`socket error %j`, e), l.priorWebsocketSuccess = !1, this.emit(`error`, e), this.onClose(`transport error`, e)
        }, l.prototype.onClose = function(e, t) {
            if (this.readyState === `opening` || this.readyState === `open` || this.readyState === `closing`) {
                i(`socket close with reason: "%s"`, e);
                var n = this;
                clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners(`close`), this.transport.close(), this.transport.removeAllListeners(), this.readyState = `closed`, this.id = null, this.emit(`close`, e, t), n.writeBuffer = [], n.prevBufferLen = 0
            }
        }, l.prototype.filterUpgrades = function(e) {
            for (var t = [], n = 0, r = e.length; n < r; n++) ~a(this.transports, e[n]) && t.push(e[n]);
            return t
        }
    })),
    he = t(((e, t) => {
        t.exports = me(), t.exports.parser = z()
    })),
    ge = t(((e, t) => {
        t.exports = n;

        function n(e, t) {
            var n = [];
            t = t || 0;
            for (var r = t || 0; r < e.length; r++) n[r - t] = e[r];
            return n
        }
    })),
    J = t(((e, t) => {
        t.exports = n;

        function n(e, t, n) {
            return e.on(t, n), {
                destroy: function() {
                    e.removeListener(t, n)
                }
            }
        }
    })),
    Y = t(((e, t) => {
        var n = [].slice;
        t.exports = function(e, t) {
            if (typeof t == `string` && (t = e[t]), typeof t != `function`) throw Error(`bind() requires a function`);
            var r = n.call(arguments, 2);
            return function() {
                return t.apply(e, r.concat(n.call(arguments)))
            }
        }
    })),
    X = t(((e, t) => {
        var n = F(),
            r = M(),
            i = ge(),
            a = J(),
            o = Y(),
            s = D()(`socket.io-client:socket`),
            c = V(),
            l = R();
        t.exports = e = f;
        var u = {
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
            d = r.prototype.emit;

        function f(e, t, n) {
            this.io = e, this.nsp = t, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, n && n.query && (this.query = n.query), this.io.autoConnect && this.open()
        }
        r(f.prototype), f.prototype.subEvents = function() {
            if (!this.subs) {
                var e = this.io;
                this.subs = [a(e, `open`, o(this, `onopen`)), a(e, `packet`, o(this, `onpacket`)), a(e, `close`, o(this, `onclose`))]
            }
        }, f.prototype.open = f.prototype.connect = function() {
            return this.connected || (this.subEvents(), this.io.reconnecting || this.io.open(), this.io.readyState === `open` && this.onopen(), this.emit(`connecting`)), this
        }, f.prototype.send = function() {
            var e = i(arguments);
            return e.unshift(`message`), this.emit.apply(this, e), this
        }, f.prototype.emit = function(e) {
            if (u.hasOwnProperty(e)) return d.apply(this, arguments), this;
            var t = i(arguments),
                r = {
                    type: (this.flags.binary === void 0 ? l(t) : this.flags.binary) ? n.BINARY_EVENT : n.EVENT,
                    data: t
                };
            return r.options = {}, r.options.compress = !this.flags || !1 !== this.flags.compress, typeof t[t.length - 1] == `function` && (s(`emitting packet with ack id %d`, this.ids), this.acks[this.ids] = t.pop(), r.id = this.ids++), this.connected ? this.packet(r) : this.sendBuffer.push(r), this.flags = {}, this
        }, f.prototype.packet = function(e) {
            e.nsp = this.nsp, this.io.packet(e)
        }, f.prototype.onopen = function() {
            if (s(`transport is open - connecting`), this.nsp !== `/`) {
                if (this.query) {
                    var e = typeof this.query == `object` ? c.encode(this.query) : this.query;
                    s(`sending connect packet with query %s`, e), this.packet({
                        type: n.CONNECT,
                        query: e
                    })
                } else this.packet({
                    type: n.CONNECT
                })
            }
        }, f.prototype.onclose = function(e) {
            s(`close (%s)`, e), this.connected = !1, this.disconnected = !0, delete this.id, this.emit(`disconnect`, e)
        }, f.prototype.onpacket = function(e) {
            var t = e.nsp === this.nsp,
                r = e.type === n.ERROR && e.nsp === `/`;
            if (t || r) switch (e.type) {
                case n.CONNECT:
                    this.onconnect();
                    break;
                case n.EVENT:
                    this.onevent(e);
                    break;
                case n.BINARY_EVENT:
                    this.onevent(e);
                    break;
                case n.ACK:
                    this.onack(e);
                    break;
                case n.BINARY_ACK:
                    this.onack(e);
                    break;
                case n.DISCONNECT:
                    this.ondisconnect();
                    break;
                case n.ERROR:
                    this.emit(`error`, e.data)
            }
        }, f.prototype.onevent = function(e) {
            var t = e.data || [];
            s(`emitting event %j`, t), e.id != null && (s(`attaching ack callback to event`), t.push(this.ack(e.id))), this.connected ? d.apply(this, t) : this.receiveBuffer.push(t)
        }, f.prototype.ack = function(e) {
            var t = this,
                r = !1;
            return function() {
                if (!r) {
                    r = !0;
                    var a = i(arguments);
                    s(`sending ack %j`, a), t.packet({
                        type: l(a) ? n.BINARY_ACK : n.ACK,
                        id: e,
                        data: a
                    })
                }
            }
        }, f.prototype.onack = function(e) {
            var t = this.acks[e.id];
            typeof t == `function` ? (s(`calling ack %s with %j`, e.id, e.data), t.apply(this, e.data), delete this.acks[e.id]) : s(`bad ack %s`, e.id)
        }, f.prototype.onconnect = function() {
            this.connected = !0, this.disconnected = !1, this.emitBuffered(), this.emit(`connect`)
        }, f.prototype.emitBuffered = function() {
            for (var e = 0; e < this.receiveBuffer.length; e++) d.apply(this, this.receiveBuffer[e]);
            for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++) this.packet(this.sendBuffer[e]);
            this.sendBuffer = []
        }, f.prototype.ondisconnect = function() {
            s(`server disconnect (%s)`, this.nsp), this.destroy(), this.onclose(`io server disconnect`)
        }, f.prototype.destroy = function() {
            if (this.subs) {
                for (var e = 0; e < this.subs.length; e++) this.subs[e].destroy();
                this.subs = null
            }
            this.io.destroy(this)
        }, f.prototype.close = f.prototype.disconnect = function() {
            return this.connected && (s(`performing disconnect (%s)`, this.nsp), this.packet({
                type: n.DISCONNECT
            })), this.destroy(), this.connected && this.onclose(`io client disconnect`), this
        }, f.prototype.compress = function(e) {
            return this.flags.compress = e, this
        }, f.prototype.binary = function(e) {
            return this.flags.binary = e, this
        }
    })),
    _e = t(((e, t) => {
        t.exports = n;

        function n(e) {
            e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
        }
        n.prototype.duration = function() {
            var e = this.ms * this.factor ** +this.attempts++;
            if (this.jitter) {
                var t = Math.random(),
                    n = Math.floor(t * this.jitter * e);
                e = Math.floor(t * 10) & 1 ? e + n : e - n
            }
            return Math.min(e, this.max) | 0
        }, n.prototype.reset = function() {
            this.attempts = 0
        }, n.prototype.setMin = function(e) {
            this.ms = e
        }, n.prototype.setMax = function(e) {
            this.max = e
        }, n.prototype.setJitter = function(e) {
            this.jitter = e
        }
    })),
    Z = t(((e, t) => {
        var n = he(),
            r = X(),
            i = M(),
            a = F(),
            o = J(),
            s = Y(),
            c = D()(`socket.io-client:manager`),
            l = q(),
            u = _e(),
            d = Object.prototype.hasOwnProperty;
        t.exports = f;

        function f(e, t) {
            if (!(this instanceof f)) return new f(e, t);
            e && typeof e == `object` && (t = e, e = void 0), t = t || {}, t.path = t.path || `/socket.io`, this.nsps = {}, this.subs = [], this.opts = t, this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new u({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor()
            }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this.readyState = `closed`, this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
            var n = t.parser || a;
            this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = t.autoConnect !== !1, this.autoConnect && this.open()
        }
        f.prototype.emitAll = function() {
            for (var e in this.emit.apply(this, arguments), this.nsps) d.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
        }, f.prototype.updateSocketIds = function() {
            for (var e in this.nsps) d.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e))
        }, f.prototype.generateId = function(e) {
            return (e === `/` ? `` : e + `#`) + this.engine.id
        }, i(f.prototype), f.prototype.reconnection = function(e) {
            return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
        }, f.prototype.reconnectionAttempts = function(e) {
            return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts
        }, f.prototype.reconnectionDelay = function(e) {
            return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay
        }, f.prototype.randomizationFactor = function(e) {
            return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor
        }, f.prototype.reconnectionDelayMax = function(e) {
            return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax
        }, f.prototype.timeout = function(e) {
            return arguments.length ? (this._timeout = e, this) : this._timeout
        }, f.prototype.maybeReconnectOnOpen = function() {
            !this.reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
        }, f.prototype.open = f.prototype.connect = function(e, t) {
            if (c(`readyState %s`, this.readyState), ~this.readyState.indexOf(`open`)) return this;
            c(`opening %s`, this.uri), this.engine = n(this.uri, this.opts);
            var r = this.engine,
                i = this;
            this.readyState = `opening`, this.skipReconnect = !1;
            var a = o(r, `open`, function() {
                    i.onopen(), e && e()
                }),
                s = o(r, `error`, function(t) {
                    if (c(`connect_error`), i.cleanup(), i.readyState = `closed`, i.emitAll(`connect_error`, t), e) {
                        var n = Error(`Connection error`);
                        n.data = t, e(n)
                    } else i.maybeReconnectOnOpen()
                });
            if (!1 !== this._timeout) {
                var l = this._timeout;
                c(`connect attempt will timeout after %d`, l), l === 0 && a.destroy();
                var u = setTimeout(function() {
                    c(`connect attempt timed out after %d`, l), a.destroy(), r.close(), r.emit(`error`, `timeout`), i.emitAll(`connect_timeout`, l)
                }, l);
                this.subs.push({
                    destroy: function() {
                        clearTimeout(u)
                    }
                })
            }
            return this.subs.push(a), this.subs.push(s), this
        }, f.prototype.onopen = function() {
            c(`open`), this.cleanup(), this.readyState = `open`, this.emit(`open`);
            var e = this.engine;
            this.subs.push(o(e, `data`, s(this, `ondata`))), this.subs.push(o(e, `ping`, s(this, `onping`))), this.subs.push(o(e, `pong`, s(this, `onpong`))), this.subs.push(o(e, `error`, s(this, `onerror`))), this.subs.push(o(e, `close`, s(this, `onclose`))), this.subs.push(o(this.decoder, `decoded`, s(this, `ondecoded`)))
        }, f.prototype.onping = function() {
            this.lastPing = new Date, this.emitAll(`ping`)
        }, f.prototype.onpong = function() {
            this.emitAll(`pong`, new Date - this.lastPing)
        }, f.prototype.ondata = function(e) {
            this.decoder.add(e)
        }, f.prototype.ondecoded = function(e) {
            this.emit(`packet`, e)
        }, f.prototype.onerror = function(e) {
            c(`error`, e), this.emitAll(`error`, e)
        }, f.prototype.socket = function(e, t) {
            var n = this.nsps[e];
            if (!n) {
                n = new r(this, e, t), this.nsps[e] = n;
                var i = this;
                n.on(`connecting`, a), n.on(`connect`, function() {
                    n.id = i.generateId(e)
                }), this.autoConnect && a()
            }

            function a() {
                ~l(i.connecting, n) || i.connecting.push(n)
            }
            return n
        }, f.prototype.destroy = function(e) {
            var t = l(this.connecting, e);
            ~t && this.connecting.splice(t, 1), !this.connecting.length && this.close()
        }, f.prototype.packet = function(e) {
            c(`writing packet %j`, e);
            var t = this;
            e.query && e.type === 0 && (e.nsp += `?` + e.query), t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0, this.encoder.encode(e, function(n) {
                for (var r = 0; r < n.length; r++) t.engine.write(n[r], e.options);
                t.encoding = !1, t.processPacketQueue()
            }))
        }, f.prototype.processPacketQueue = function() {
            if (this.packetBuffer.length > 0 && !this.encoding) {
                var e = this.packetBuffer.shift();
                this.packet(e)
            }
        }, f.prototype.cleanup = function() {
            c(`cleanup`);
            for (var e = this.subs.length, t = 0; t < e; t++) this.subs.shift().destroy();
            this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
        }, f.prototype.close = f.prototype.disconnect = function() {
            c(`disconnect`), this.skipReconnect = !0, this.reconnecting = !1, this.readyState === `opening` && this.cleanup(), this.backoff.reset(), this.readyState = `closed`, this.engine && this.engine.close()
        }, f.prototype.onclose = function(e) {
            c(`onclose`), this.cleanup(), this.backoff.reset(), this.readyState = `closed`, this.emit(`close`, e), this._reconnection && !this.skipReconnect && this.reconnect()
        }, f.prototype.reconnect = function() {
            if (this.reconnecting || this.skipReconnect) return this;
            var e = this;
            if (this.backoff.attempts >= this._reconnectionAttempts) c(`reconnect failed`), this.backoff.reset(), this.emitAll(`reconnect_failed`), this.reconnecting = !1;
            else {
                var t = this.backoff.duration();
                c(`will wait %dms before reconnect attempt`, t), this.reconnecting = !0;
                var n = setTimeout(function() {
                    e.skipReconnect || (c(`attempting reconnect`), e.emitAll(`reconnect_attempt`, e.backoff.attempts), e.emitAll(`reconnecting`, e.backoff.attempts), !e.skipReconnect && e.open(function(t) {
                        t ? (c(`reconnect attempt error`), e.reconnecting = !1, e.reconnect(), e.emitAll(`reconnect_error`, t.data)) : (c(`reconnect success`), e.onreconnect())
                    }))
                }, t);
                this.subs.push({
                    destroy: function() {
                        clearTimeout(n)
                    }
                })
            }
        }, f.prototype.onreconnect = function() {
            var e = this.backoff.attempts;
            this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll(`reconnect`, e)
        }
    })),
    ve = t(((e, t) => {
        var n = O(),
            r = F(),
            i = Z(),
            a = D()(`socket.io-client`);
        t.exports = e = s;
        var o = e.managers = {};

        function s(e, t) {
            typeof e == `object` && (t = e, e = void 0), t = t || {};
            var r = n(e),
                s = r.source,
                c = r.id,
                l = r.path,
                u = o[c] && l in o[c].nsps,
                d = t.forceNew || t[`force new connection`] || !1 === t.multiplex || u,
                f;
            return d ? (a(`ignoring socket cache for %s`, s), f = i(s, t)) : (o[c] || (a(`new io instance for %s`, s), o[c] = i(s, t)), f = o[c]), r.query && !t.query && (t.query = r.query), f.socket(r.path, t)
        }
        e.protocol = r.protocol, e.connect = s, e.Manager = Z(), e.Socket = X()
    })),
    ye = t(((e, t) => {
        function n(e, t, n) {
            for (var r = 0, i = 0, a = n.length; i < a; i++) r = n.charCodeAt(i), r < 128 ? e.setUint8(t++, r) : r < 2048 ? (e.setUint8(t++, 192 | r >> 6), e.setUint8(t++, 128 | r & 63)) : r < 55296 || r >= 57344 ? (e.setUint8(t++, 224 | r >> 12), e.setUint8(t++, 128 | r >> 6 & 63), e.setUint8(t++, 128 | r & 63)) : (i++, r = 65536 + ((r & 1023) << 10 | n.charCodeAt(i) & 1023), e.setUint8(t++, 240 | r >> 18), e.setUint8(t++, 128 | r >> 12 & 63), e.setUint8(t++, 128 | r >> 6 & 63), e.setUint8(t++, 128 | r & 63))
        }

        function r(e) {
            for (var t = 0, n = 0, r = 0, i = e.length; r < i; r++) t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
            return n
        }

        function i(e, t, n) {
            var a = typeof n,
                o = 0,
                s = 0,
                c = 0,
                l = 0,
                u = 0,
                d = 0;
            if (a === `string`) {
                if (u = r(n), u < 32) e.push(u | 160), d = 1;
                else if (u < 256) e.push(217, u), d = 2;
                else if (u < 65536) e.push(218, u >> 8, u), d = 3;
                else if (u < 4294967296) e.push(219, u >> 24, u >> 16, u >> 8, u), d = 5;
                else throw Error(`String too long`);
                return t.push({
                    _str: n,
                    _length: u,
                    _offset: e.length
                }), d + u
            }
            if (a === `number`) return Math.floor(n) !== n || !isFinite(n) ? (e.push(203), t.push({
                _float: n,
                _length: 8,
                _offset: e.length
            }), 9) : n >= 0 ? n < 128 ? (e.push(n), 1) : n < 256 ? (e.push(204, n), 2) : n < 65536 ? (e.push(205, n >> 8, n), 3) : n < 4294967296 ? (e.push(206, n >> 24, n >> 16, n >> 8, n), 5) : (c = n / 2 ** 32 | 0, l = n >>> 0, e.push(207, c >> 24, c >> 16, c >> 8, c, l >> 24, l >> 16, l >> 8, l), 9) : n >= -32 ? (e.push(n), 1) : n >= -128 ? (e.push(208, n), 2) : n >= -32768 ? (e.push(209, n >> 8, n), 3) : n >= -2147483648 ? (e.push(210, n >> 24, n >> 16, n >> 8, n), 5) : (c = Math.floor(n / 2 ** 32), l = n >>> 0, e.push(211, c >> 24, c >> 16, c >> 8, c, l >> 24, l >> 16, l >> 8, l), 9);
            if (a === `object`) {
                if (n === null) return e.push(192), 1;
                if (Array.isArray(n)) {
                    if (u = n.length, u < 16) e.push(u | 144), d = 1;
                    else if (u < 65536) e.push(220, u >> 8, u), d = 3;
                    else if (u < 4294967296) e.push(221, u >> 24, u >> 16, u >> 8, u), d = 5;
                    else throw Error(`Array too large`);
                    for (o = 0; o < u; o++) d += i(e, t, n[o]);
                    return d
                }
                if (n instanceof Date) {
                    var f = n.getTime();
                    return c = Math.floor(f / 2 ** 32), l = f >>> 0, e.push(215, 0, c >> 24, c >> 16, c >> 8, c, l >> 24, l >> 16, l >> 8, l), 10
                }
                if (n instanceof ArrayBuffer) {
                    if (u = n.byteLength, u < 256) e.push(196, u), d = 2;
                    else if (u < 65536) e.push(197, u >> 8, u), d = 3;
                    else if (u < 4294967296) e.push(198, u >> 24, u >> 16, u >> 8, u), d = 5;
                    else throw Error(`Buffer too large`);
                    return t.push({
                        _bin: n,
                        _length: u,
                        _offset: e.length
                    }), d + u
                }
                if (typeof n.toJSON == `function`) return i(e, t, n.toJSON());
                var p = [],
                    m = ``,
                    h = Object.keys(n);
                for (o = 0, s = h.length; o < s; o++) m = h[o], typeof n[m] != `function` && p.push(m);
                if (u = p.length, u < 16) e.push(u | 128), d = 1;
                else if (u < 65536) e.push(222, u >> 8, u), d = 3;
                else if (u < 4294967296) e.push(223, u >> 24, u >> 16, u >> 8, u), d = 5;
                else throw Error(`Object too large`);
                for (o = 0; o < u; o++) m = p[o], d += i(e, t, m), d += i(e, t, n[m]);
                return d
            }
            if (a === `boolean`) return e.push(n ? 195 : 194), 1;
            if (a === `undefined`) return e.push(212, 0, 0), 3;
            throw Error(`Could not encode`)
        }

        function a(e) {
            var t = [],
                r = [],
                a = i(t, r, e),
                o = new ArrayBuffer(a),
                s = new DataView(o),
                c = 0,
                l = 0,
                u = -1;
            r.length > 0 && (u = r[0]._offset);
            for (var d, f = 0, p = 0, m = 0, h = t.length; m < h; m++)
                if (s.setUint8(l + m, t[m]), m + 1 === u) {
                    if (d = r[c], f = d._length, p = l + u, d._bin)
                        for (var g = new Uint8Array(d._bin), _ = 0; _ < f; _++) s.setUint8(p + _, g[_]);
                    else d._str ? n(s, p, d._str) : d._float !== void 0 && s.setFloat64(p, d._float);
                    c++, l += f, r[c] && (u = r[c]._offset)
                } return o
        }
        t.exports = a
    })),
    be = t(((e, t) => {
        function n(e) {
            if (this._offset = 0, e instanceof ArrayBuffer) this._buffer = e, this._view = new DataView(this._buffer);
            else if (ArrayBuffer.isView(e)) this._buffer = e.buffer, this._view = new DataView(this._buffer, e.byteOffset, e.byteLength);
            else throw Error(`Invalid argument`)
        }

        function r(e, t, n) {
            for (var r = ``, i = 0, a = t, o = t + n; a < o; a++) {
                var s = e.getUint8(a);
                if (!(s & 128)) r += String.fromCharCode(s);
                else if ((s & 224) == 192) r += String.fromCharCode((s & 31) << 6 | e.getUint8(++a) & 63);
                else if ((s & 240) == 224) r += String.fromCharCode((s & 15) << 12 | (e.getUint8(++a) & 63) << 6 | e.getUint8(++a) & 63);
                else if ((s & 248) == 240) i = (s & 7) << 18 | (e.getUint8(++a) & 63) << 12 | (e.getUint8(++a) & 63) << 6 | e.getUint8(++a) & 63, i >= 65536 ? (i -= 65536, r += String.fromCharCode((i >>> 10) + 55296, (i & 1023) + 56320)) : r += String.fromCharCode(i);
                else throw Error(`Invalid byte ` + s.toString(16))
            }
            return r
        }
        n.prototype._array = function(e) {
            for (var t = Array(e), n = 0; n < e; n++) t[n] = this._parse();
            return t
        }, n.prototype._map = function(e) {
            for (var t = ``, n = {}, r = 0; r < e; r++) t = this._parse(), n[t] = this._parse();
            return n
        }, n.prototype._str = function(e) {
            var t = r(this._view, this._offset, e);
            return this._offset += e, t
        }, n.prototype._bin = function(e) {
            var t = this._buffer.slice(this._offset, this._offset + e);
            return this._offset += e, t
        }, n.prototype._parse = function() {
            var e = this._view.getUint8(this._offset++),
                t, n = 0,
                r = 0,
                i = 0,
                a = 0;
            if (e < 192) return e < 128 ? e : e < 144 ? this._map(e & 15) : e < 160 ? this._array(e & 15) : this._str(e & 31);
            if (e > 223) return (255 - e + 1) * -1;
            switch (e) {
                case 192:
                    return null;
                case 194:
                    return !1;
                case 195:
                    return !0;
                case 196:
                    return n = this._view.getUint8(this._offset), this._offset += 1, this._bin(n);
                case 197:
                    return n = this._view.getUint16(this._offset), this._offset += 2, this._bin(n);
                case 198:
                    return n = this._view.getUint32(this._offset), this._offset += 4, this._bin(n);
                case 199:
                    return n = this._view.getUint8(this._offset), r = this._view.getInt8(this._offset + 1), this._offset += 2, [r, this._bin(n)];
                case 200:
                    return n = this._view.getUint16(this._offset), r = this._view.getInt8(this._offset + 2), this._offset += 3, [r, this._bin(n)];
                case 201:
                    return n = this._view.getUint32(this._offset), r = this._view.getInt8(this._offset + 4), this._offset += 5, [r, this._bin(n)];
                case 202:
                    return t = this._view.getFloat32(this._offset), this._offset += 4, t;
                case 203:
                    return t = this._view.getFloat64(this._offset), this._offset += 8, t;
                case 204:
                    return t = this._view.getUint8(this._offset), this._offset += 1, t;
                case 205:
                    return t = this._view.getUint16(this._offset), this._offset += 2, t;
                case 206:
                    return t = this._view.getUint32(this._offset), this._offset += 4, t;
                case 207:
                    return i = this._view.getUint32(this._offset) * 2 ** 32, a = this._view.getUint32(this._offset + 4), this._offset += 8, i + a;
                case 208:
                    return t = this._view.getInt8(this._offset), this._offset += 1, t;
                case 209:
                    return t = this._view.getInt16(this._offset), this._offset += 2, t;
                case 210:
                    return t = this._view.getInt32(this._offset), this._offset += 4, t;
                case 211:
                    return i = this._view.getInt32(this._offset) * 2 ** 32, a = this._view.getUint32(this._offset + 4), this._offset += 8, i + a;
                case 212:
                    if (r = this._view.getInt8(this._offset), this._offset += 1, r === 0) {
                        this._offset += 1;
                        return
                    }
                    return [r, this._bin(1)];
                case 213:
                    return r = this._view.getInt8(this._offset), this._offset += 1, [r, this._bin(2)];
                case 214:
                    return r = this._view.getInt8(this._offset), this._offset += 1, [r, this._bin(4)];
                case 215:
                    return r = this._view.getInt8(this._offset), this._offset += 1, r === 0 ? (i = this._view.getInt32(this._offset) * 2 ** 32, a = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(i + a)) : [r, this._bin(8)];
                case 216:
                    return r = this._view.getInt8(this._offset), this._offset += 1, [r, this._bin(16)];
                case 217:
                    return n = this._view.getUint8(this._offset), this._offset += 1, this._str(n);
                case 218:
                    return n = this._view.getUint16(this._offset), this._offset += 2, this._str(n);
                case 219:
                    return n = this._view.getUint32(this._offset), this._offset += 4, this._str(n);
                case 220:
                    return n = this._view.getUint16(this._offset), this._offset += 2, this._array(n);
                case 221:
                    return n = this._view.getUint32(this._offset), this._offset += 4, this._array(n);
                case 222:
                    return n = this._view.getUint16(this._offset), this._offset += 2, this._map(n);
                case 223:
                    return n = this._view.getUint32(this._offset), this._offset += 4, this._map(n)
            }
            throw Error(`Could not parse`)
        };

        function i(e) {
            var t = new n(e),
                r = t._parse();
            if (t._offset !== e.byteLength) throw Error(e.byteLength - t._offset + ` trailing bytes`);
            return r
        }
        t.exports = i
    })),
    xe = t((e => {
        e.encode = ye(), e.decode = be()
    })),
    Se = t((e => {
        var t = xe(),
            n = M();
        e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6;
        var r = Number.isInteger || function(e) {
                return typeof e == `number` && isFinite(e) && Math.floor(e) === e
            },
            i = function(e) {
                return typeof e == `string`
            };

        function a() {}
        a.prototype.encode = function(n, r) {
            switch (n.type) {
                case e.CONNECT:
                case e.DISCONNECT:
                case e.ERROR:
                    return r([JSON.stringify(n)]);
                default:
                    return r([t.encode(n)])
            }
        };

        function o() {}
        n(o.prototype), o.prototype.add = function(e) {
            typeof e == `string` ? this.parseJSON(e) : this.parseBinary(e)
        }, o.prototype.parseJSON = function(e) {
            var t = JSON.parse(e);
            this.checkPacket(t), this.emit(`decoded`, t)
        }, o.prototype.parseBinary = function(e) {
            var n = t.decode(e);
            this.checkPacket(n), this.emit(`decoded`, n)
        };

        function s(t) {
            switch (t.type) {
                case e.CONNECT:
                case e.DISCONNECT:
                    return t.data === void 0;
                case e.ERROR:
                    return i(t.data);
                default:
                    return Array.isArray(t.data)
            }
        }
        o.prototype.checkPacket = function(t) {
            if (!(r(t.type) && t.type >= e.CONNECT && t.type <= e.BINARY_ACK)) throw Error(`invalid packet type`);
            if (!i(t.nsp)) throw Error(`invalid namespace`);
            if (!s(t)) throw Error(`invalid payload`);
            if (!(t.id === void 0 || r(t.id))) throw Error(`invalid packet id`)
        }, o.prototype.destroy = function() {}, e.Encoder = a, e.Decoder = o
    })),
    Q = t((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = class {
            constructor() {
                this.callbacks = [], this.removeCallback = e => {
                    this.callbacks = this.callbacks.filter(t => t.id !== e)
                }
            }
            add(e, t) {
                let n = Math.random().toString();
                return this.callbacks.push({
                    callback: e,
                    timesCalled: 0,
                    canCallMultipleTimes: !t,
                    id: n
                }), () => this.removeCallback(n)
            }
            clear() {
                this.callbacks.splice(0, this.callbacks.length)
            }
            call(e, t) {
                this.callbacks = this.callbacks.map(n => n.timesCalled > 0 && !n.canCallMultipleTimes ? n : (n.callback(e, t), Object.assign({}, n, {
                    timesCalled: n.timesCalled + 1
                })))
            }
        }
    })),
    $ = t((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            createNewRoom: `blueboat_CREATE_NEW_ROOM`,
            joinRoom: `blueboat_JOIN_ROOM`,
            sendMessage: `blueboat_SEND_MESSAGE`,
            listen: `blueboat_LISTEN_STATE`,
            requestAvailableRooms: `blueboat_AVAILABLE_ROOMS`,
            ping: `blueboat-ping`
        }
    })),
    Ce = t((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.BLUEBOAT_ID = `blueboat-id`
    })),
    we = t((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            clientIdSet: `CLIENT_ID_SET`,
            joinedRoom: `blueboat_JOINED_ROOM`,
            statePatch: `STATE_PATCH`,
            removedFromRoom: `blueboat_REMOVED_FROM_ROOM`,
            availableRooms: `blueboat_AVAILABLE_ROOMS`
        }
    })),
    Te = t((e => {
        var t = e && e.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = t(we()),
            r = t(Q()),
            i = t($());
        e.default = class {
            constructor(e, t, n) {
                this.joined = !1, this.initialJoinOptions = {}, this.onJoinAttempt = new r.default, this.onCreate = new r.default, this.onJoin = new r.default, this.onJoinError = new r.default, this.onMessage = new r.default, this.onLeave = new r.default, this.send = (e, t) => {
                    this.socket.emit(i.default.sendMessage, {
                        room: this.id,
                        key: e,
                        data: t
                    })
                }, n && (this.id = n), t && (this.initialJoinOptions = t), e && (this.socket = e, n && this.socketListener())
            }
            _setRoomId(e) {
                this.id = e, this.socketListener()
            }
            socketListener() {
                let e = this.socket;
                e.on(`${this.id}-error`, e => this.onJoinError.call(e)), e.on(`message-${this.id}`, e => {
                    let {
                        key: t,
                        data: r
                    } = e;
                    t && (t === n.default.joinedRoom ? (this.joined = !0, this.onJoin.call()) : t === n.default.removedFromRoom ? (this.onLeave.call(), this.joined = !1) : this.onMessage.call(t, r))
                })
            }
        }
    })),
    Ee = t((e => {
        var t = e && e.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = t(ve()),
            r = t(Se()),
            i = t(Q()),
            a = t($()),
            o = Ce(),
            s = t(we()),
            c = t(Te());
        e.default = class {
            constructor(e, t) {
                this.rooms = [], this.onConnect = new i.default, this.onConnectError = new i.default, this.onDisconnect = new i.default, this.onReconnect = new i.default, this.onReconnectAttempt = new i.default, this.latency = 0, this.useClientIdSaving = !0, this.disconnect = () => {
                    this.socket.disconnect()
                }, this.connect = () => {
                    this.socket.connect()
                }, t && t.blockClientIdSaving && (this.useClientIdSaving = !1), this.socket = n.default(e, {
                    path: `/blueboat`,
                    parser: r.default,
                    transports: t.transports || [`websocket`],
                    query: {
                        id: localStorage && this.useClientIdSaving && localStorage.getItem(o.BLUEBOAT_ID + (t && t.clientIdSuffix ? t.clientIdSuffix : ``)) || ``
                    },
                    reconnectionDelay: 500,
                    reconnectionDelayMax: 1500,
                    randomizationFactor: 0
                }), this.socket.on(`connect_error`, e => this.onConnectError.call(e)), this.socket.on(`error`, e => this.onConnectError.call(e)), this.socket.on(s.default.clientIdSet, e => {
                    localStorage && this.useClientIdSaving && localStorage.setItem(o.BLUEBOAT_ID + (t && t.clientIdSuffix ? t.clientIdSuffix : ``), e), this.socket.io.opts.query.id = e, this.id = e, this.sessionId = this.socket.id, this.rooms.length && this.rooms.forEach(e => this.joinRoom(e.id, e.initialJoinOptions, e)), this.onConnect.call()
                }), this.socket.on(`pong`, e => {
                    this.latency = e
                }), this.socket.on(`reconnect`, e => this.onReconnect.call(e)), this.socket.on(`reconnect_attempt`, e => {
                    this.onReconnectAttempt.call(e)
                }), this.socket.on(`disconnect`, e => {
                    this.onDisconnect.call(e), this.rooms.forEach(t => {
                        t.joined = !1, t.onLeave.call(e)
                    })
                })
            }
            createRoom(e, t) {
                let n = Math.random().toString();
                this.socket.emit(a.default.createNewRoom, {
                    type: e,
                    options: t,
                    uniqueRequestId: n
                });
                let r = new c.default(this.socket, t);
                return this.socket.on(`${n}-create`, e => {
                    r._setRoomId(e), r.onCreate.call(e), this.joinRoom(e, t, r)
                }), this.socket.on(`${n}-error`, e => {
                    r.onJoinError.call(e)
                }), r
            }
            joinRoom(e, t, n) {
                let r = n || new c.default(this.socket, t, e);
                return r.onJoinAttempt.call(), r.joined || this.socket.emit(a.default.joinRoom, {
                    roomId: e,
                    options: t
                }), this.rooms.some(t => t.id === e) || this.rooms.push(r), r
            }
        }
    })),
    De = t((e => {
        var t = e && e.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Client = t(Ee()).default, e.Room = t(Te()).default
    })),
    Oe = () => Math.random().toString(36).substring(3),
    ke = class {
        constructor() {
            this.value = {}, this.propListeners = [], this.onPropChange = (e, t) => {
                let n = Oe();
                return this.propListeners.push({
                    id: n,
                    prop: e,
                    callback: t
                }), () => this.disposeListener(n)
            }, this.applyPatches = e => {
                e.forEach(e => {
                    if (e.type === `pU`) {
                        let t = e;
                        this.updateProperty(t.value.key, t.value.value)
                    } else if (e.type === `fV`) {
                        let t = e;
                        Object.keys(t.value).forEach(e => {
                            this.updateProperty(e, t.value[e])
                        })
                    }
                })
            }, this.disposeListener = e => {
                this.propListeners = this.propListeners.filter(t => t.id !== e)
            }, this.onPropertyChanged = (e, t) => {
                this.propListeners.filter(t => t.prop === e).forEach(e => e.callback(t))
            }, this.updateProperty = (e, t) => {
                (this.value[e] === void 0 || this.value[e] !== t) && (this.value[e] = t, this.onPropertyChanged(e, t))
            }
        }
    };
export {
    b as i, De as n, x as r, ke as t
};