import {
    bI as A,
    aw as E
} from "./_index.js";
var f = {},
    h = {},
    _;

function C() {
    if (_) return h;
    _ = 1, Object.defineProperty(h, "__esModule", {
        value: !0
    }), h.confetti = g;
    var y = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"];

    function u(n, c, i, t, e) {
        return Array.from({
            length: c
        }).map(function(o, r) {
            var a = document.createElement("div"),
                s = i[r % i.length];
            return a.style["background-color"] = s, a.style.width = t, a.style.height = e, a.style.position = "absolute", a.style.willChange = "transform, opacity", n.appendChild(a), a
        })
    }

    function p(n, c, i, t) {
        var e = n * (Math.PI / 180),
            o = c * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: t() * 10,
            wobbleSpeed: .1 + t() * .1,
            velocity: i * .5 + t() * i,
            angle2D: -e + (.5 * o - t() * o),
            angle3D: -(Math.PI / 4) + t() * (Math.PI / 2),
            tiltAngle: t() * Math.PI,
            tiltAngleSpeed: .1 + t() * .3
        }
    }

    function d(n, c, i) {
        n.physics.x += Math.cos(n.physics.angle2D) * n.physics.velocity, n.physics.y += Math.sin(n.physics.angle2D) * n.physics.velocity, n.physics.z += Math.sin(n.physics.angle3D) * n.physics.velocity, n.physics.wobble += n.physics.wobbleSpeed, n.physics.velocity *= i, n.physics.y += 3, n.physics.tiltAngle += n.physics.tiltAngleSpeed;
        var t = n.physics,
            e = t.x,
            o = t.y,
            r = t.tiltAngle,
            a = t.wobble,
            s = e + 10 * Math.cos(a),
            l = o + 10 * Math.sin(a),
            b = "translate3d(" + s + "px, " + l + "px, 0) rotate3d(1, 1, 1, " + r + "rad)";
        n.element.style.transform = b, n.element.style.opacity = 1 - c
    }

    function v(n, c, i, t) {
        var e = void 0;
        return new Promise(function(o) {
            function r(a) {
                e || (e = a);
                var s = e === a ? 0 : (a - e) / t;
                c.forEach(function(l) {
                    return d(l, s, i)
                }), a - e < t ? requestAnimationFrame(r) : (c.forEach(function(l) {
                    if (l.element.parentNode === n) return n.removeChild(l.element)
                }), o())
            }
            requestAnimationFrame(r)
        })
    }
    var m = {
        angle: 90,
        decay: .9,
        spread: 45,
        startVelocity: 45,
        elementCount: 50,
        width: "10px",
        height: "10px",
        colors: y,
        duration: 3e3,
        random: Math.random
    };

    function g(n) {
        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = Object.assign({}, m, c),
            t = i.elementCount,
            e = i.colors,
            o = i.width,
            r = i.height,
            a = i.angle,
            s = i.spread,
            l = i.startVelocity,
            b = i.decay,
            M = i.duration,
            P = i.random,
            R = u(n, t, e, o, r),
            O = R.map(function(x) {
                return {
                    element: x,
                    physics: p(a, s, l, P)
                }
            });
        return v(n, O, b, M)
    }
    return h
}
var w;

function j() {
    if (w) return f;
    w = 1, Object.defineProperty(f, "__esModule", {
        value: !0
    });
    var y = function() {
            function t(e, o) {
                for (var r = 0; r < o.length; r++) {
                    var a = o[r];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(e, o, r) {
                return o && t(e.prototype, o), r && t(e, r), e
            }
        }(),
        u = A(),
        p = v(u),
        d = C();

    function v(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function m(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function g(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e && (typeof e == "object" || typeof e == "function") ? e : t
    }

    function n(t, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var c = {
            position: "relative"
        },
        i = function(t) {
            n(e, t);

            function e(o) {
                m(this, e);
                var r = g(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, o));
                return r.setRef = r.setRef.bind(r), r
            }
            return y(e, [{
                key: "componentWillReceiveProps",
                value: function(r) {
                    r.active && !this.props.active && (0, d.confetti)(this.container, r.config)
                }
            }, {
                key: "setRef",
                value: function(r) {
                    this.container = r
                }
            }, {
                key: "render",
                value: function() {
                    return p.default.createElement("div", {
                        className: this.props.className,
                        style: c,
                        ref: this.setRef
                    })
                }
            }]), e
        }(u.Component);
    return f.default = i, f
}
var q = j();
const k = E(q);
export {
    k as C
};