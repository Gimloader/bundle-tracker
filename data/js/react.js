import {
    bI as z
} from "./_index.js";
var k = {
        exports: {}
    },
    O = {
        exports: {}
    };
/*!
 * fireworks-js 1.4.1 by Vitalij Ryndin (https://crashmax.ru)
 * https://fireworks.js.org
 * License MIT
 */
var R = O.exports,
    S;

function B() {
    return S || (S = 1, function(M, P) {
        (function(v, x) {
            M.exports = x()
        })(R, function() {
            return (() => {
                var v = {
                        511: (d, o, r) => {
                            Object.defineProperty(o, "__esModule", {
                                value: !0
                            }), o.Explosion = void 0;
                            var h = r(909);
                            o.Explosion = class {
                                constructor(e) {
                                    var {
                                        x: t,
                                        y: i,
                                        ctx: n,
                                        hue: u,
                                        gravity: m,
                                        friction: a,
                                        brightness: s,
                                        flickering: c,
                                        lineWidth: l,
                                        explosionLength: _
                                    } = e;
                                    for (this._coordinates = [], this._alpha = 1, this._x = t, this._y = i, this._ctx = n, this._gravity = m, this._friction = a, this._flickering = c, this._lineWidth = l, this._explosionLength = _; this._explosionLength--;) this._coordinates.push([t, i]);
                                    this._angle = (0, h.randomFloat)(0, 2 * Math.PI), this._speed = (0, h.randomInt)(1, 10), this._hue = (0, h.randomInt)(u - 20, u + 20), this._brightness = (0, h.randomInt)(s.min, s.max), this._decay = (0, h.randomFloat)(s.decay.min, s.decay.max)
                                }
                                update(e) {
                                    this._coordinates.pop(), this._coordinates.unshift([this._x, this._y]), this._speed *= this._friction, this._x += Math.cos(this._angle) * this._speed, this._y += Math.sin(this._angle) * this._speed + this._gravity, this._alpha -= this._decay, this._alpha <= this._decay && e()
                                }
                                draw() {
                                    var e = this._coordinates.length - 1;
                                    this._ctx.beginPath(), this._ctx.lineWidth = this._lineWidth, this._ctx.fillStyle = (0, h.hsla)(this._hue, this._brightness, this._alpha), this._ctx.moveTo(this._coordinates[e][0], this._coordinates[e][1]), this._ctx.lineTo(this._x, this._y), this._ctx.strokeStyle = (0, h.hsla)(this._hue, this._flickering ? (0, h.randomFloat)(0, this._brightness) : this._brightness, this._alpha), this._ctx.stroke()
                                }
                            }
                        },
                        909: (d, o) => {
                            Object.defineProperty(o, "__esModule", {
                                value: !0
                            }), o.hsla = o.getDistance = o.randomInt = o.randomFloat = void 0, o.randomFloat = function(r, h) {
                                return Math.random() * (h - r) + r
                            }, o.randomInt = function(r, h) {
                                return Math.floor(r + Math.random() * (h + 1 - r))
                            }, o.getDistance = function(r, h, e, t) {
                                var i = Math.pow;
                                return Math.sqrt(i(r - e, 2) + i(h - t, 2))
                            }, o.hsla = function(r, h) {
                                var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
                                return "hsla(".concat(r, ", 100%, ").concat(h, "%, ").concat(e, ")")
                            }
                        },
                        449: function(d, o, r) {
                            var h = this && this.__awaiter || function(t, i, n, u) {
                                return new(n || (n = Promise))(function(m, a) {
                                    function s(_) {
                                        try {
                                            l(u.next(_))
                                        } catch (p) {
                                            a(p)
                                        }
                                    }

                                    function c(_) {
                                        try {
                                            l(u.throw(_))
                                        } catch (p) {
                                            a(p)
                                        }
                                    }

                                    function l(_) {
                                        var p;
                                        _.done ? m(_.value) : (p = _.value, p instanceof n ? p : new n(function(y) {
                                            y(p)
                                        })).then(s, c)
                                    }
                                    l((u = u.apply(t, i || [])).next())
                                })
                            };
                            Object.defineProperty(o, "__esModule", {
                                value: !0
                            }), o.Sound = void 0;
                            var e = r(909);
                            o.Sound = class {
                                constructor(t) {
                                    this._buffer = [], this.onInit = !0, this.options = Object.assign({
                                        enabled: !1,
                                        files: ["explosion0.mp3", "explosion1.mp3", "explosion2.mp3"],
                                        volume: {
                                            min: 4,
                                            max: 8
                                        }
                                    }, t), this.init()
                                }
                                init() {
                                    this.onInit && this.options.enabled && (this.onInit = !1, this._audioContext = new(window.AudioContext || window.webkitAudioContext), this.load())
                                }
                                load() {
                                    return h(this, void 0, void 0, function*() {
                                        for (var t of this.options.files) {
                                            var i = yield(yield fetch(t)).arrayBuffer();
                                            this._audioContext.decodeAudioData(i).then(n => {
                                                this._buffer.push(n)
                                            }).catch(n => {
                                                throw n
                                            })
                                        }
                                    })
                                }
                                play() {
                                    if (this.options.enabled && this._buffer.length) {
                                        var t = this._audioContext.createBufferSource(),
                                            i = this._buffer[(0, e.randomInt)(0, this._buffer.length - 1)],
                                            n = this._audioContext.createGain();
                                        t.buffer = i, n.gain.value = (0, e.randomFloat)(this.options.volume.min / 100, this.options.volume.max / 100), n.connect(this._audioContext.destination), t.connect(n), t.start(0)
                                    } else this.init()
                                }
                            }
                        },
                        668: (d, o, r) => {
                            Object.defineProperty(o, "__esModule", {
                                value: !0
                            }), o.Trace = void 0;
                            var h = r(909);
                            o.Trace = class {
                                constructor(e) {
                                    var {
                                        x: t,
                                        y: i,
                                        dx: n,
                                        dy: u,
                                        ctx: m,
                                        hue: a,
                                        speed: s,
                                        traceLength: c,
                                        acceleration: l
                                    } = e;
                                    for (this._coordinates = [], this._currentDistance = 0, this._x = t, this._y = i, this._sx = t, this._sy = i, this._dx = n, this._dy = u, this._ctx = m, this._hue = a, this._speed = s, this._traceLength = c, this._acceleration = l, this._totalDistance = (0, h.getDistance)(t, i, n, u); this._traceLength--;) this._coordinates.push([t, i]);
                                    this._angle = Math.atan2(u - i, n - t), this._brightness = (0, h.randomInt)(50, 70)
                                }
                                update(e) {
                                    this._coordinates.pop(), this._coordinates.unshift([this._x, this._y]), this._speed *= this._acceleration;
                                    var t = Math.cos(this._angle) * this._speed,
                                        i = Math.sin(this._angle) * this._speed;
                                    this._currentDistance = (0, h.getDistance)(this._sx, this._sy, this._x + t, this._y + i), this._currentDistance >= this._totalDistance ? e(this._dx, this._dy, this._hue) : (this._x += t, this._y += i)
                                }
                                draw() {
                                    var e = this._coordinates.length - 1;
                                    this._ctx.beginPath(), this._ctx.moveTo(this._coordinates[e][0], this._coordinates[e][1]), this._ctx.lineTo(this._x, this._y), this._ctx.strokeStyle = (0, h.hsla)(this._hue, this._brightness), this._ctx.stroke()
                                }
                            }
                        }
                    },
                    x = {};

                function f(d) {
                    var o = x[d];
                    if (o !== void 0) return o.exports;
                    var r = x[d] = {
                        exports: {}
                    };
                    return v[d].call(r.exports, r, r.exports, f), r.exports
                }
                var g = {};
                return (() => {
                    var d = g;
                    Object.defineProperty(d, "__esModule", {
                        value: !0
                    }), d.Fireworks = void 0;
                    var o = f(668),
                        r = f(449),
                        h = f(511),
                        e = f(909);
                    d.Fireworks = class {
                        constructor(t) {
                            var {
                                autoresize: i = !0,
                                boundaries: n,
                                brightness: u,
                                delay: m,
                                hue: a,
                                mouse: s,
                                sound: c,
                                rocketsPoint: l,
                                lineWidth: _,
                                lineStyle: p = "round",
                                flickering: y = 50,
                                trace: w = 3,
                                traceSpeed: j = 10,
                                intensity: L = 30,
                                explosion: I = 5,
                                gravity: F = 1.5,
                                opacity: D = .5,
                                particles: C = 50,
                                friction: T = .95,
                                acceleration: W = 1.05
                            } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            this._tick = 0, this._timestamp = performance.now(), this._version = "1.4.1", this._running = !1, this._m = !1, t instanceof HTMLCanvasElement ? (this._container = t, this._canvas = t) : (this._container = t, this._canvas = document.createElement("canvas"), this._container.appendChild(this._canvas)), this._ctx = this._canvas.getContext("2d"), this._sound = new r.Sound(c), this.setSize(), this.setBoundaries(Object.assign({
                                visible: !1,
                                x: 50,
                                y: 50
                            }, n)), this.autoresize = i, this.trace = w, this.explosion = I, this.gravity = F, this.opacity = D, this.particles = C, this.friction = T, this.acceleration = W, this.flickering = y, this.intensity = L, this.traceSpeed = j, this.lineStyle = p, this.hue = Object.assign({
                                min: 0,
                                max: 360
                            }, a), this.rocketsPoint = Object.assign({
                                min: 50,
                                max: 50
                            }, l), this.lineWidth = Object.assign({
                                explosion: {
                                    min: 1,
                                    max: 3
                                },
                                trace: {
                                    min: 1,
                                    max: 2
                                }
                            }, _), this.mouse = Object.assign({
                                click: !1,
                                move: !1,
                                max: 1
                            }, s), this.delay = Object.assign({
                                min: 15,
                                max: 30
                            }, m), this.brightness = Object.assign({
                                min: 50,
                                max: 80,
                                decay: {
                                    min: .015,
                                    max: .03
                                }
                            }, u), this.autoresize && window.addEventListener("resize", () => this.windowResize()), this._canvas.addEventListener("mousedown", b => {
                                this.mouseDown(b)
                            }), this._canvas.addEventListener("mouseup", b => {
                                this.mouseUp(b)
                            }), this._canvas.addEventListener("mousemove", b => {
                                this.mouseMove(b)
                            })
                        }
                        get isRunning() {
                            return this._running
                        }
                        get version() {
                            return this._version
                        }
                        start() {
                            this._running || (this._running = !0, this.clear(), this.render())
                        }
                        stop() {
                            this._running && (this._running = !1, this.clear())
                        }
                        unmount() {
                            window.removeEventListener("resize", this.windowResize), this._canvas.removeEventListener("mousedown", this.mouseDown), this._canvas.removeEventListener("mouseup", this.mouseUp), this._canvas.removeEventListener("mousemove", this.mouseMove)
                        }
                        pause() {
                            this._running = !this._running, this._running && this.render()
                        }
                        clear() {
                            this._ctx && (this._traces = [], this._explosions = [], this._ctx.clearRect(0, 0, this._width, this._height))
                        }
                        setOptions(t) {
                            for (var [i, n] of Object.entries(t)) {
                                var u = Object.prototype.hasOwnProperty.call(this, i);
                                if (typeof this[i] == "function") throw new Error("You cannot change the methods of the class!");
                                u && (typeof this[i] == "object" ? Object.assign(this[i], n) : this[i] = n), i === "sound" && Object.assign(this._sound.options, n)
                            }
                        }
                        setSize() {
                            var {
                                width: t = this._container instanceof HTMLCanvasElement ? this._canvas.width : this._container.clientWidth,
                                height: i = this._container instanceof HTMLCanvasElement ? this._canvas.height : this._container.clientHeight
                            } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                            this._width = t, this._height = i, this._canvas.width = t, this._canvas.height = i, this.setBoundaries({
                                width: t,
                                height: i
                            })
                        }
                        setBoundaries(t) {
                            this.boundaries = Object.assign(Object.assign({}, this.boundaries), t)
                        }
                        useMouse(t, i) {
                            (this.mouse.click || this.mouse.move) && (this._mx = t.pageX - this._canvas.offsetLeft, this._my = t.pageY - this._canvas.offsetTop, this._m = i)
                        }
                        windowResize() {
                            this.setSize()
                        }
                        mouseDown(t) {
                            this.useMouse(t, this.mouse.click)
                        }
                        mouseUp(t) {
                            this.useMouse(t, !1)
                        }
                        mouseMove(t) {
                            this.useMouse(t, this._m)
                        }
                        render() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._timestamp;
                            if (this._ctx && this._running) {
                                requestAnimationFrame(n => this.render(n)), this._ctx.globalCompositeOperation = "destination-out", this._ctx.fillStyle = "rgba(0, 0, 0, ".concat(this.opacity, ")"), this._ctx.fillRect(0, 0, this._width, this._height), this._ctx.globalCompositeOperation = "lighter", this._ctx.lineCap = this.lineStyle, this._ctx.lineJoin = "round", this.drawBoundaries(), this.initTrace(), this.drawTrace(), this.drawExplosion();
                                var i = t - this._timestamp;
                                this._timestamp = t, this._tick += i * (this.intensity * Math.PI) / 1e3
                            }
                        }
                        drawBoundaries() {
                            this.boundaries.visible && (this._ctx.beginPath(), this._ctx.lineWidth = 1, this._ctx.strokeStyle = "red", this._ctx.rect(this.boundaries.x, this.boundaries.y, this.boundaries.width - 2 * this.boundaries.x, .5 * this.boundaries.height), this._ctx.stroke())
                        }
                        initTrace() {
                            this._ds = (0, e.randomInt)(this.delay.min, this.delay.max), (this._tick > this._ds || this._m && this.mouse.max > this._traces.length) && (this._traces.push(new o.Trace({
                                x: this._width * (0, e.randomInt)(this.rocketsPoint.min, this.rocketsPoint.max) / 100,
                                y: this._height,
                                dx: this._mx && this.mouse.move || this._m ? this._mx : (0, e.randomInt)(this.boundaries.x, this.boundaries.width - 2 * this.boundaries.x),
                                dy: this._my && this.mouse.move || this._m ? this._my : (0, e.randomInt)(this.boundaries.y, .5 * this.boundaries.height),
                                ctx: this._ctx,
                                hue: (0, e.randomInt)(this.hue.min, this.hue.max),
                                speed: this.traceSpeed,
                                acceleration: this.acceleration,
                                traceLength: this.trace
                            })), this._tick = 0)
                        }
                        drawTrace() {
                            var t = this._traces.length;
                            for (this._ctx.lineWidth = (0, e.randomFloat)(this.lineWidth.trace.min, this.lineWidth.trace.max); t--;) this._traces[t].draw(), this._traces[t].update((i, n, u) => {
                                this.initExplosion(i, n, u), this._sound.play(), this._traces.splice(t, 1)
                            })
                        }
                        initExplosion(t, i, n) {
                            for (var u = this.particles; u--;) this._explosions.push(new h.Explosion({
                                x: t,
                                y: i,
                                ctx: this._ctx,
                                hue: n,
                                friction: this.friction,
                                gravity: this.gravity,
                                flickering: (0, e.randomInt)(0, 100) <= this.flickering,
                                lineWidth: (0, e.randomFloat)(this.lineWidth.explosion.min, this.lineWidth.explosion.max),
                                explosionLength: Math.round(this.explosion),
                                brightness: this.brightness
                            }))
                        }
                        drawExplosion() {
                            for (var t = this._explosions.length; t--;) this._explosions[t].draw(), this._explosions[t].update(() => {
                                this._explosions.splice(t, 1)
                            })
                        }
                    }
                })(), g
            })()
        })
    }(O)), O.exports
}
/*!
 * fireworks-js 1.4.1 by Vitalij Ryndin (https://crashmax.ru)
 * https://fireworks.js.org
 * License MIT
 */
var q = k.exports,
    E;

function U() {
    return E || (E = 1, function(M, P) {
        (function(v, x) {
            M.exports = x(B(), z())
        })(q, function(v, x) {
            return (() => {
                var f = {
                        21: function(o, r, h) {
                            var e = this && this.__createBinding || (Object.create ? function(a, s, c, l) {
                                    l === void 0 && (l = c);
                                    var _ = Object.getOwnPropertyDescriptor(s, c);
                                    _ && !("get" in _ ? !s.__esModule : _.writable || _.configurable) || (_ = {
                                        enumerable: !0,
                                        get: function() {
                                            return s[c]
                                        }
                                    }), Object.defineProperty(a, l, _)
                                } : function(a, s, c, l) {
                                    l === void 0 && (l = c), a[l] = s[c]
                                }),
                                t = this && this.__setModuleDefault || (Object.create ? function(a, s) {
                                    Object.defineProperty(a, "default", {
                                        enumerable: !0,
                                        value: s
                                    })
                                } : function(a, s) {
                                    a.default = s
                                }),
                                i = this && this.__importStar || function(a) {
                                    if (a && a.__esModule) return a;
                                    var s = {};
                                    if (a != null)
                                        for (var c in a) c !== "default" && Object.prototype.hasOwnProperty.call(a, c) && e(s, a, c);
                                    return t(s, a), s
                                };
                            Object.defineProperty(r, "__esModule", {
                                value: !0
                            }), r.Fireworks = r.useFireworks = void 0;
                            var n = i(h(156)),
                                u = h(522);
                            r.useFireworks = a => {
                                var {
                                    initialStart: s = !0,
                                    initialOptions: c = {}
                                } = a, [l, _] = (0, n.useState)(s), [p, y] = (0, n.useState)(c);
                                return {
                                    enabled: l,
                                    options: p,
                                    setOptions: y,
                                    setEnabled: w => {
                                        _(j => w ?? !j)
                                    }
                                }
                            };
                            class m extends n.Component {
                                constructor() {
                                    super(...arguments), this._fw = null, this._ref = null
                                }
                                componentDidMount() {
                                    this._ref && (this._fw = new u.Fireworks(this._ref, this.props.options), this.toggleStart())
                                }
                                componentDidUpdate() {
                                    var s;
                                    this.toggleStart(), this.props.options && ((s = this._fw) === null || s === void 0 || s.setOptions(Object.assign({}, this.props.options)))
                                }
                                componentWillUnmount() {
                                    var s, c;
                                    (s = this._fw) === null || s === void 0 || s.unmount(), (c = this._fw) === null || c === void 0 || c.stop()
                                }
                                toggleStart() {
                                    var s, c;
                                    this.props.enabled ? (s = this._fw) === null || s === void 0 || s.start() : (c = this._fw) === null || c === void 0 || c.stop()
                                }
                                render() {
                                    return n.default.createElement("div", {
                                        ref: s => this._ref = s,
                                        className: this.props.className,
                                        children: this.props.children,
                                        style: this.props.style
                                    })
                                }
                            }
                            r.Fireworks = m, m.defaultProps = {
                                enabled: !0
                            }
                        },
                        522: o => {
                            o.exports = v
                        },
                        156: o => {
                            o.exports = x
                        }
                    },
                    g = {},
                    d = function o(r) {
                        var h = g[r];
                        if (h !== void 0) return h.exports;
                        var e = g[r] = {
                            exports: {}
                        };
                        return f[r].call(e.exports, e, e.exports, o), e.exports
                    }(21);
                return d
            })()
        })
    }(k)), k.exports
}
var H = U();
export {
    H as r
};