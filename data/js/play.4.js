var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('.....', function(b, c) {
    var d, e, f, g, h;
    b.exports, b.exports = (g = a('.....'), h = a('.....'), d = {
        21: function(i, j, k) {
            var l = this && this.__createBinding || (Object.create ? function(m, n, o, p) {
                    void 0 === p && (p = o);
                    var q = Object.getOwnPropertyDescriptor(n, o);
                    q && !('get' in q ? !n.__esModule : q.writable || q.configurable) || (q = {
                        enumerable: !0,
                        get: function() {
                            return n[o];
                        }
                    }), Object.defineProperty(m, p, q);
                } : function(m, n, o, p) {
                    void 0 === p && (p = o), m[p] = n[o];
                }),
                m = this && this.__setModuleDefault || (Object.create ? function(n, o) {
                    Object.defineProperty(n, 'default', {
                        enumerable: !0,
                        value: o
                    });
                } : function(n, o) {
                    n.default = o;
                }),
                n = this && this.__importStar || function(o) {
                    if (o && o.__esModule)
                        return o;
                    var p = {};
                    if (null != o)
                        for (var q in o)
                            'default' !== q && Object.prototype.hasOwnProperty.call(o, q) && l(p, o, q);
                    return m(p, o), p;
                };
            Object.defineProperty(j, '__esModule', {
                value: !0
            }), j.Fireworks = j.useFireworks = void 0;
            var o = n(k(156)),
                p = k(522);
            j.useFireworks = q => {
                var {
                    initialStart: r = !0,
                    initialOptions: s = {}
                } = q, [t, u] = (0, o.useState)(r), [v, w] = (0, o.useState)(s);
                return {
                    enabled: t,
                    options: v,
                    setOptions: w,
                    setEnabled: x => {
                        u(y => null != x ? x : !y);
                    }
                };
            };
            class q extends o.Component {
                componentDidMount() {
                    this._ref && (this._fw = new p.Fireworks(this._ref, this.props.options), this.toggleStart());
                }
                componentDidUpdate() {
                    var r;
                    this.toggleStart(), this.props.options && (null === (r = this._fw) || void 0 === r || r.setOptions(Object.assign({}, this.props.options)));
                }
                componentWillUnmount() {
                    var r, s;
                    null === (r = this._fw) || void 0 === r || r.unmount(), null === (s = this._fw) || void 0 === s || s.stop();
                }
                toggleStart() {
                    var r, s;
                    this.props.enabled ? null === (r = this._fw) || void 0 === r || r.start() : null === (s = this._fw) || void 0 === s || s.stop();
                }
                render() {
                    return o.default.createElement('div', {
                        ref: r => this._ref = r,
                        className: this.props.className,
                        children: this.props.children,
                        style: this.props.style
                    });
                }
                constructor() {
                    super(...arguments), this._fw = null, this._ref = null;
                }
            }
            j.Fireworks = q, q.defaultProps = {
                enabled: !0
            };
        },
        522: i => {
            i.exports = g;
        },
        156: i => {
            i.exports = h;
        }
    }, e = {}, f = function a(i) {
        var j = e[i];
        if (void 0 !== j)
            return j.exports;
        var k = e[i] = {
            exports: {}
        };
        return d[i].call(k.exports, k, k.exports, a), k.exports;
    }(21), f);
}), a.register('.....', function(b, c) {
    b.exports, b.exports = (() => {
        var d = {
                511: (e, f, g) => {
                    Object.defineProperty(f, '__esModule', {
                        value: !0
                    }), f.Explosion = void 0;
                    var h = g(909);
                    f.Explosion = class {
                        update(i) {
                            this._coordinates.pop(), this._coordinates.unshift([
                                this._x,
                                this._y
                            ]), this._speed *= this._friction, this._x += Math.cos(this._angle) * this._speed, this._y += Math.sin(this._angle) * this._speed + this._gravity, this._alpha -= this._decay, this._alpha <= this._decay && i();
                        }
                        draw() {
                            var i = this._coordinates.length - 1;
                            this._ctx.beginPath(), this._ctx.lineWidth = this._lineWidth, this._ctx.fillStyle = (0, h.hsla)(this._hue, this._brightness, this._alpha), this._ctx.moveTo(this._coordinates[i][0], this._coordinates[i][1]), this._ctx.lineTo(this._x, this._y), this._ctx.strokeStyle = (0, h.hsla)(this._hue, this._flickering ? (0, h.randomFloat)(0, this._brightness) : this._brightness, this._alpha), this._ctx.stroke();
                        }
                        constructor(i) {
                            var {
                                x: j,
                                y: k,
                                ctx: l,
                                hue: m,
                                gravity: n,
                                friction: o,
                                brightness: p,
                                flickering: q,
                                lineWidth: r,
                                explosionLength: s
                            } = i;
                            for (this._coordinates = [], this._alpha = 1, this._x = j, this._y = k, this._ctx = l, this._gravity = n, this._friction = o, this._flickering = q, this._lineWidth = r, this._explosionLength = s; this._explosionLength--;)
                                this._coordinates.push([
                                    j,
                                    k
                                ]);
                            this._angle = (0, h.randomFloat)(0, 2 * Math.PI), this._speed = (0, h.randomInt)(1, 10), this._hue = (0, h.randomInt)(m - 20, m + 20), this._brightness = (0, h.randomInt)(p.min, p.max), this._decay = (0, h.randomFloat)(p.decay.min, p.decay.max);
                        }
                    };
                },
                909: (e, f) => {
                    Object.defineProperty(f, '__esModule', {
                        value: !0
                    }), f.hsla = f.getDistance = f.randomInt = f.randomFloat = void 0, f.randomFloat = function(g, h) {
                        return Math.random() * (h - g) + g;
                    }, f.randomInt = function(g, h) {
                        return Math.floor(g + Math.random() * (h + 1 - g));
                    }, f.getDistance = function(g, h, i, j) {
                        var k = Math.pow;
                        return Math.sqrt(k(g - i, 2) + k(h - j, 2));
                    }, f.hsla = function(g, h) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                        return 'hsla('.concat(g, ', 100%, ').concat(h, '%, ').concat(i, ')');
                    };
                },
                449: function(e, f, g) {
                    var h = this && this.__awaiter || function(i, j, k, l) {
                        return new(k || (k = Promise))(function(m, n) {
                            function o(p) {
                                try {
                                    _q(l.next(p));
                                } catch (p) {
                                    n(p);
                                }
                            }

                            function p(q) {
                                try {
                                    _q(l.throw(q));
                                } catch (q) {
                                    n(q);
                                }
                            }

                            function _q(r) {
                                var s;
                                r.done ? m(r.value) : (s = r.value, s instanceof k ? s : new k(function(t) {
                                    t(s);
                                })).then(o, p);
                            }
                            _q((l = l.apply(i, s || [])).next());
                        });
                    };
                    Object.defineProperty(f, '__esModule', {
                        value: !0
                    }), f.Sound = void 0;
                    var i = g(909);
                    f.Sound = class {
                        init() {
                            this.onInit && this.options.enabled && (this.onInit = !1, this._audioContext = new(window.AudioContext || window.webkitAudioContext)(), this.load());
                        }
                        load() {
                            return h(this, void 0, void 0, function*() {
                                for (var j of this.options.files) {
                                    var k = yield(yield fetch(j)).arrayBuffer();
                                    this._audioContext.decodeAudioData(k).then(l => {
                                        this._buffer.push(l);
                                    }).catch(l => {
                                        throw l;
                                    });
                                }
                            });
                        }
                        play() {
                            if (this.options.enabled && this._buffer.length) {
                                var j = this._audioContext.createBufferSource(),
                                    k = this._buffer[(0, i.randomInt)(0, this._buffer.length - 1)],
                                    l = this._audioContext.createGain();
                                j.buffer = k, l.gain.value = (0, i.randomFloat)(this.options.volume.min / 100, this.options.volume.max / 100), l.connect(this._audioContext.destination), j.connect(l), j.start(0);
                            } else
                                this.init();
                        }
                        constructor(j) {
                            this._buffer = [], this.onInit = !0, this.options = Object.assign({
                                enabled: !1,
                                files: [
                                    'explosion0.mp3',
                                    'explosion1.mp3',
                                    'explosion2.mp3'
                                ],
                                volume: {
                                    min: 4,
                                    max: 8
                                }
                            }, j), this.init();
                        }
                    };
                },
                668: (e, f, g) => {
                    Object.defineProperty(f, '__esModule', {
                        value: !0
                    }), f.Trace = void 0;
                    var h = g(909);
                    f.Trace = class {
                        update(i) {
                            this._coordinates.pop(), this._coordinates.unshift([
                                this._x,
                                this._y
                            ]), this._speed *= this._acceleration;
                            var j = Math.cos(this._angle) * this._speed,
                                k = Math.sin(this._angle) * this._speed;
                            this._currentDistance = (0, h.getDistance)(this._sx, this._sy, this._x + j, this._y + k), this._currentDistance >= this._totalDistance ? i(this._dx, this._dy, this._hue) : (this._x += j, this._y += k);
                        }
                        draw() {
                            var i = this._coordinates.length - 1;
                            this._ctx.beginPath(), this._ctx.moveTo(this._coordinates[i][0], this._coordinates[i][1]), this._ctx.lineTo(this._x, this._y), this._ctx.strokeStyle = (0, h.hsla)(this._hue, this._brightness), this._ctx.stroke();
                        }
                        constructor(i) {
                            var {
                                x: j,
                                y: k,
                                dx: l,
                                dy: m,
                                ctx: n,
                                hue: o,
                                speed: p,
                                traceLength: q,
                                acceleration: r
                            } = i;
                            for (this._coordinates = [], this._currentDistance = 0, this._x = j, this._y = k, this._sx = j, this._sy = k, this._dx = l, this._dy = m, this._ctx = n, this._hue = o, this._speed = p, this._traceLength = q, this._acceleration = r, this._totalDistance = (0, h.getDistance)(j, k, l, m); this._traceLength--;)
                                this._coordinates.push([
                                    j,
                                    k
                                ]);
                            this._angle = Math.atan2(m - k, l - j), this._brightness = (0, h.randomInt)(50, 70);
                        }
                    };
                }
            },
            e = {};

        function f(g) {
            var h = e[g];
            if (void 0 !== h)
                return h.exports;
            var i = e[g] = {
                exports: {}
            };
            return d[g].call(i.exports, i, i.exports, f), i.exports;
        }
        var i = {};
        return (() => {
            var j = i;
            Object.defineProperty(j, '__esModule', {
                value: !0
            }), j.Fireworks = void 0;
            var k = f(668),
                l = f(449),
                m = f(511),
                n = f(909);
            j.Fireworks = class {
                get isRunning() {
                    return this._running;
                }
                get version() {
                    return this._version;
                }
                start() {
                    this._running || (this._running = !0, this.clear(), this.render());
                }
                stop() {
                    this._running && (this._running = !1, this.clear());
                }
                unmount() {
                    window.removeEventListener('resize', this.windowResize), this._canvas.addEventListener('mousedown', this.mouseDown), this._canvas.addEventListener('mouseup', this.mouseUp), this._canvas.addEventListener('mousemove', this.mouseMove);
                }
                pause() {
                    this._running = !this._running, this._running && this.render();
                }
                clear() {
                    this._ctx && (this._traces = [], this._explosions = [], this._ctx.clearRect(0, 0, this._width, this._height));
                }
                setOptions(o) {
                    for (var [p, q] of Object.entries(o)) {
                        var r = Object.prototype.hasOwnProperty.call(this, p);
                        if ('function' == typeof this[p])
                            throw new Error('You cannot change the methods of the class!');
                        r && ('object' == typeof this[p] ? Object.assign(this[p], q) : this[p] = q), 'sound' === p && Object.assign(this._sound.options, q);
                    }
                }
                setSize() {
                    var {
                        width: o = this._container instanceof HTMLCanvasElement ? this._canvas.width : this._container.clientWidth,
                        height: p = this._container instanceof HTMLCanvasElement ? this._canvas.height : this._container.clientHeight
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this._width = o, this._height = p, this._canvas.width = o, this._canvas.height = p, this.setBoundaries({
                        width: o,
                        height: p
                    });
                }
                setBoundaries(o) {
                    this.boundaries = Object.assign(Object.assign({}, this.boundaries), o);
                }
                useMouse(o, p) {
                    (this.mouse.click || this.mouse.move) && (this._mx = o.pageX - this._canvas.offsetLeft, this._my = o.pageY - this._canvas.offsetTop, this._m = p);
                }
                windowResize() {
                    this.setSize();
                }
                mouseDown(o) {
                    this.useMouse(o, this.mouse.click);
                }
                mouseUp(o) {
                    this.useMouse(o, !1);
                }
                mouseMove(o) {
                    this.useMouse(o, this._m);
                }
                render() {
                    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._timestamp;
                    if (this._ctx && this._running) {
                        requestAnimationFrame(p => this.render(p)), this._ctx.globalCompositeOperation = 'destination-out', this._ctx.fillStyle = 'rgba(0, 0, 0, '.concat(this.opacity, ')'), this._ctx.fillRect(0, 0, this._width, this._height), this._ctx.globalCompositeOperation = 'lighter', this._ctx.lineCap = this.lineStyle, this._ctx.lineJoin = 'round', this.drawBoundaries(), this.initTrace(), this.drawTrace(), this.drawExplosion();
                        var p = o - this._timestamp;
                        this._timestamp = o, this._tick += p * (this.intensity * Math.PI) / 1000;
                    }
                }
                drawBoundaries() {
                    this.boundaries.visible && (this._ctx.beginPath(), this._ctx.lineWidth = 1, this._ctx.strokeStyle = 'red', this._ctx.rect(this.boundaries.x, this.boundaries.y, this.boundaries.width - 2 * this.boundaries.x, 0.5 * this.boundaries.height), this._ctx.stroke());
                }
                initTrace() {
                    this._ds = (0, n.randomInt)(this.delay.min, this.delay.max), (this._tick > this._ds || this._m && this.mouse.max > this._traces.length) && (this._traces.push(new k.Trace({
                        x: this._width * (0, n.randomInt)(this.rocketsPoint.min, this.rocketsPoint.max) / 100,
                        y: this._height,
                        dx: this._mx && this.mouse.move || this._m ? this._mx : (0, n.randomInt)(this.boundaries.x, this.boundaries.width - 2 * this.boundaries.x),
                        dy: this._my && this.mouse.move || this._m ? this._my : (0, n.randomInt)(this.boundaries.y, 0.5 * this.boundaries.height),
                        ctx: this._ctx,
                        hue: (0, n.randomInt)(this.hue.min, this.hue.max),
                        speed: this.traceSpeed,
                        acceleration: this.acceleration,
                        traceLength: this.trace
                    })), this._tick = 0);
                }
                drawTrace() {
                    var o = this._traces.length;
                    for (this._ctx.lineWidth = (0, n.randomFloat)(this.lineWidth.trace.min, this.lineWidth.trace.max); o--;)
                        this._traces[o].draw(), this._traces[o].update((p, q, r) => {
                            this.initExplosion(p, q, r), this._sound.play(), this._traces.splice(o, 1);
                        });
                }
                initExplosion(o, p, q) {
                    for (var r = this.particles; r--;)
                        this._explosions.push(new m.Explosion({
                            x: o,
                            y: p,
                            ctx: this._ctx,
                            hue: q,
                            friction: this.friction,
                            gravity: this.gravity,
                            flickering: (0, n.randomInt)(0, 100) <= this.flickering,
                            lineWidth: (0, n.randomFloat)(this.lineWidth.explosion.min, this.lineWidth.explosion.max),
                            explosionLength: Math.round(this.explosion),
                            brightness: this.brightness
                        }));
                }
                drawExplosion() {
                    for (var o = this._explosions.length; o--;)
                        this._explosions[o].draw(), this._explosions[o].update(() => {
                            this._explosions.splice(o, 1);
                        });
                }
                constructor(o) {
                    var {
                        autoresize: p = !0,
                        boundaries: q,
                        brightness: r,
                        delay: s,
                        hue: t,
                        mouse: u,
                        sound: v,
                        rocketsPoint: w,
                        lineWidth: x,
                        lineStyle: y = 'round',
                        flickering: z = 50,
                        trace: A = 3,
                        traceSpeed: B = 10,
                        intensity: C = 30,
                        explosion: D = 5,
                        gravity: E = 1.5,
                        opacity: F = 0.5,
                        particles: G = 50,
                        friction: H = 0.95,
                        acceleration: I = 1.05
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this._tick = 0, this._timestamp = performance.now(), this._version = '1.4.0', this._running = !1, this._m = !1, o instanceof HTMLCanvasElement ? (this._container = o, this._canvas = o) : (this._container = o, this._canvas = document.createElement('canvas'), this._container.appendChild(this._canvas)), this._ctx = this._canvas.getContext('2d'), this._sound = new l.Sound(v), this.setSize(), this.setBoundaries(Object.assign({
                        visible: !1,
                        x: 50,
                        y: 50
                    }, q)), this.autoresize = p, this.trace = A, this.explosion = D, this.gravity = E, this.opacity = F, this.particles = G, this.friction = H, this.acceleration = I, this.flickering = z, this.intensity = C, this.traceSpeed = B, this.lineStyle = y, this.hue = Object.assign({
                        min: 0,
                        max: 360
                    }, t), this.rocketsPoint = Object.assign({
                        min: 50,
                        max: 50
                    }, w), this.lineWidth = Object.assign({
                        explosion: {
                            min: 1,
                            max: 3
                        },
                        trace: {
                            min: 1,
                            max: 2
                        }
                    }, x), this.mouse = Object.assign({
                        click: !1,
                        move: !1,
                        max: 1
                    }, u), this.delay = Object.assign({
                        min: 15,
                        max: 30
                    }, s), this.brightness = Object.assign({
                        min: 50,
                        max: 80,
                        decay: {
                            min: 0.015,
                            max: 0.03
                        }
                    }, r), this.autoresize && window.addEventListener('resize', () => this.windowResize()), this._canvas.addEventListener('mousedown', J => this.mouseDown(J)), this._canvas.addEventListener('mouseup', J => this.mouseUp(J)), this._canvas.addEventListener('mousemove', J => this.mouseMove(J));
                }
            };
        })(), i;
    })();
});