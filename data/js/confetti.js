import {
    t as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
var n = e((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.confetti = s;
        var t = [`#a864fd`, `#29cdff`, `#78ff44`, `#ff718d`, `#fdff6a`];

        function n(e, t, n, r, i) {
            return Array.from({
                length: t
            }).map(function(t, a) {
                var o = document.createElement(`div`),
                    s = n[a % n.length];
                return o.style[`background-color`] = s, o.style.width = r, o.style.height = i, o.style.position = `absolute`, o.style.willChange = `transform, opacity`, e.appendChild(o), o
            })
        }

        function r(e, t, n, r) {
            var i = Math.PI / 180 * e,
                a = Math.PI / 180 * t;
            return {
                x: 0,
                y: 0,
                wobble: r() * 10,
                wobbleSpeed: .1 + r() * .1,
                velocity: n * .5 + r() * n,
                angle2D: -i + (.5 * a - r() * a),
                angle3D: -(Math.PI / 4) + r() * (Math.PI / 2),
                tiltAngle: r() * Math.PI,
                tiltAngleSpeed: .1 + r() * .3
            }
        }

        function i(e, t, n) {
            e.physics.x += Math.cos(e.physics.angle2D) * e.physics.velocity, e.physics.y += Math.sin(e.physics.angle2D) * e.physics.velocity, e.physics.z += Math.sin(e.physics.angle3D) * e.physics.velocity, e.physics.wobble += e.physics.wobbleSpeed, e.physics.velocity *= n, e.physics.y += 3, e.physics.tiltAngle += e.physics.tiltAngleSpeed;
            var r = e.physics,
                i = r.x,
                a = r.y,
                o = r.tiltAngle,
                s = r.wobble,
                c = i + 10 * Math.cos(s),
                l = a + 10 * Math.sin(s),
                u = `translate3d(` + c + `px, ` + l + `px, 0) rotate3d(1, 1, 1, ` + o + `rad)`;
            e.element.style.transform = u, e.element.style.opacity = 1 - t
        }

        function a(e, t, n, r) {
            var a = void 0;
            return new Promise(function(o) {
                function s(c) {
                    a || (a = c);
                    var l = a === c ? 0 : (c - a) / r;
                    t.forEach(function(e) {
                        return i(e, l, n)
                    }), c - a < r ? requestAnimationFrame(s) : (t.forEach(function(t) {
                        if (t.element.parentNode === e) return e.removeChild(t.element)
                    }), o())
                }
                requestAnimationFrame(s)
            })
        }
        var o = {
            angle: 90,
            decay: .9,
            spread: 45,
            startVelocity: 45,
            elementCount: 50,
            width: `10px`,
            height: `10px`,
            colors: t,
            duration: 3e3,
            random: Math.random
        };

        function s(e) {
            var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                i = Object.assign({}, o, t),
                s = i.elementCount,
                c = i.colors,
                l = i.width,
                u = i.height,
                d = i.angle,
                f = i.spread,
                p = i.startVelocity,
                m = i.decay,
                h = i.duration,
                g = i.random;
            return a(e, n(e, s, c, l, u).map(function(e) {
                return {
                    element: e,
                    physics: r(d, f, p, g)
                }
            }), m, h)
        }
    })),
    r = e((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, `value` in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = t(),
            a = s(i),
            o = n();

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function c(e, t) {
            if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
        }

        function l(e, t) {
            if (!e) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
            return t && (typeof t == `object` || typeof t == `function`) ? t : e
        }

        function u(e, t) {
            if (typeof t != `function` && t !== null) throw TypeError(`Super expression must either be null or a function, not ` + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var d = {
            position: `relative`
        };
        e.default = function(e) {
            u(t, e);

            function t(e) {
                c(this, t);
                var n = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.setRef = n.setRef.bind(n), n
            }
            return r(t, [{
                key: `componentWillReceiveProps`,
                value: function(e) {
                    e.active && !this.props.active && (0, o.confetti)(this.container, e.config)
                }
            }, {
                key: `setRef`,
                value: function(e) {
                    this.container = e
                }
            }, {
                key: `render`,
                value: function() {
                    return a.default.createElement(`div`, {
                        className: this.props.className,
                        style: d,
                        ref: this.setRef
                    })
                }
            }]), t
        }(i.Component)
    }));
export {
    r as t
};