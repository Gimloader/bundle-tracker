var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('4GmKU', function(j, k) {
    var b, c, d, e, f;
    j.exports, j.exports = (e = a('9kmux'), f = a('uPP4W'), b = {
        21: function(a, j, k) {
            var g = this && this.__createBinding || (Object.create ? function(a, j, k, g) {
                    void 0 === g && (g = k);
                    var h = Object.getOwnPropertyDescriptor(j, k);
                    h && !('get' in h ? !j.__esModule : h.writable || h.configurable) || (h = {
                        enumerable: !0,
                        get: function() {
                            return j[k];
                        }
                    }), Object.defineProperty(a, g, h);
                } : function(a, j, k, g) {
                    void 0 === g && (g = k), a[g] = j[k];
                }),
                h = this && this.__setModuleDefault || (Object.create ? function(a, j) {
                    Object.defineProperty(a, 'default', {
                        enumerable: !0,
                        value: j
                    });
                } : function(a, j) {
                    a.default = j;
                }),
                i = this && this.__importStar || function(a) {
                    if (a && a.__esModule)
                        return a;
                    var j = {};
                    if (null != a)
                        for (var k in a)
                            'default' !== k && Object.prototype.hasOwnProperty.call(a, k) && g(j, a, k);
                    return h(j, a), j;
                };
            Object.defineProperty(l, '__esModule', {
                value: !0
            }), l.Fireworks = l.useFireworks = void 0;
            var j = i(m(156)),
                k = m(522);
            l.useFireworks = a => {
                var {
                    initialStart: l = !0,
                    initialOptions: m = {}
                } = n, [o, p] = (0, j.useState)(l), [q, r] = (0, j.useState)(m);
                return {
                    enabled: o,
                    options: q,
                    setOptions: r,
                    setEnabled: n => {
                        p(l => null != n ? n : !l);
                    }
                };
            };
            class l extends j.Component {
                componentDidMount() {
                    this._ref && (this._fw = new k.Fireworks(this._ref, this.props.options), this.toggleStart());
                }
                componentDidUpdate() {
                    var m;
                    this.toggleStart(), this.props.options && (null === (m = this._fw) || void 0 === m || m.setOptions(Object.assign({}, this.props.options)));
                }
                componentWillUnmount() {
                    var n, o;
                    null === (n = this._fw) || void 0 === n || n.unmount(), null === (o = this._fw) || void 0 === o || o.stop();
                }
                toggleStart() {
                    var p, q;
                    this.props.enabled ? null === (p = this._fw) || void 0 === p || p.start() : null === (q = this._fw) || void 0 === q || q.stop();
                }
                render() {
                    return j.default.createElement('div', {
                        ref: p => this._ref = p,
                        className: this.props.className,
                        children: this.props.children,
                        style: this.props.style
                    });
                }
                constructor() {
                    super(...arguments), this._fw = null, this._ref = null;
                }
            }
            d.Fireworks = l, l.defaultProps = {
                enabled: !0
            };
        },
        522: a => {
            a.exports = e;
        },
        156: a => {
            a.exports = f;
        }
    }, c = {}, d = function a(d) {
        var g = c[d];
        if (void 0 !== g)
            return g.exports;
        var h = c[d] = {
            exports: {}
        };
        return b[d].call(h.exports, h, h.exports, a), h.exports;
    }(21), d);
}), a.register('9kmux', function(a, d) {
    a.exports, a.exports = (() => {
        var b = {
                511: (b, d, e) => {
                    Object.defineProperty(d, '__esModule', {
                        value: !0
                    }), d.Explosion = void 0;
                    var c = e(909);
                    d.Explosion = class {
                        update(b) {
                            this._coordinates.pop(), this._coordinates.unshift([
                                this._x,
                                this._y
                            ]), this._speed *= this._friction, this._x += Math.cos(this._angle) * this._speed, this._y += Math.sin(this._angle) * this._speed + this._gravity, this._alpha -= this._decay, this._alpha <= this._decay && b();
                        }
                        draw() {
                            var d = this._coordinates.length - 1;
                            this._ctx.beginPath(), this._ctx.lineWidth = this._lineWidth, this._ctx.fillStyle = (0, c.hsla)(this._hue, this._brightness, this._alpha), this._ctx.moveTo(this._coordinates[d][0], this._coordinates[d][1]), this._ctx.lineTo(this._x, this._y), this._ctx.strokeStyle = (0, c.hsla)(this._hue, this._flickering ? (0, c.randomFloat)(0, this._brightness) : this._brightness, this._alpha), this._ctx.stroke();
                        }
                        constructor(b) {
                            var {
                                x: d,
                                y: e,
                                ctx: f,
                                hue: g,
                                gravity: h,
                                friction: i,
                                brightness: j,
                                flickering: k,
                                lineWidth: l,
                                explosionLength: m
                            } = n;
                            for (this._coordinates = [], this._alpha = 1, this._x = d, this._y = e, this._ctx = f, this._gravity = h, this._friction = i, this._flickering = k, this._lineWidth = l, this._explosionLength = m; this._explosionLength--;)
                                this._coordinates.push([
                                    d,
                                    e
                                ]);
                            this._angle = (0, c.randomFloat)(0, 2 * Math.PI), this._speed = (0, c.randomInt)(1, 10), this._hue = (0, c.randomInt)(g - 20, g + 20), this._brightness = (0, c.randomInt)(j.min, j.max), this._decay = (0, c.randomFloat)(j.decay.min, j.decay.max);
                        }
                    };
                },
                909: (b, g) => {
                    Object.defineProperty(g, '__esModule', {
                        value: !0
                    }), g.hsla = g.getDistance = g.randomInt = g.randomFloat = void 0, g.randomFloat = function(b, g) {
                        return Math.random() * (g - b) + b;
                    }, g.randomInt = function(b, g) {
                        return Math.floor(b + Math.random() * (g + 1 - b));
                    }, g.getDistance = function(b, g, c, c) {
                        var c = Math.pow;
                        return Math.sqrt(c(b - c, 2) + c(g - c, 2));
                    }, g.hsla = function(b, g) {
                        var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                        return 'hsla('.concat(b, ', 100%, ').concat(g, '%, ').concat(c, ')');
                    };
                },
                449: function(b, g, i) {
                    var c = this && this.__awaiter || function(b, g, i, c) {
                        return new(i || (i = Promise))(function(d, g) {
                            function d(b) {
                                try {
                                    f(c.next(b));
                                } catch (b) {
                                    g(b);
                                }
                            }

                            function e(b) {
                                try {
                                    f(c.throw(b));
                                } catch (b) {
                                    g(b);
                                }
                            }

                            function f(b) {
                                var g;
                                b.done ? d(b.value) : (g = b.value, g instanceof i ? g : new i(function(b) {
                                    b(g);
                                })).then(d, e);
                            }
                            f((c = c.apply(b, f || [])).next());
                        });
                    };
                    Object.defineProperty(f, '__esModule', {
                        value: !0
                    }), f.Sound = void 0;
                    var d = i(909);
                    f.Sound = class {
                        init() {
                            this.onInit && this.options.enabled && (this.onInit = !1, this._audioContext = new(window.AudioContext || window.webkitAudioContext)(), this.load());
                        }
                        load() {
                            return c(this, void 0, void 0, function*() {
                                for (var e of this.options.files) {
                                    var f = yield(yield fetch(e)).arrayBuffer();
                                    this._audioContext.decodeAudioData(f).then(e => {
                                        this._buffer.push(e);
                                    }).catch(e => {
                                        throw e;
                                    });
                                }
                            });
                        }
                        play() {
                            if (this.options.enabled && this._buffer.length) {
                                var g = this._audioContext.createBufferSource(),
                                    h = this._buffer[(0, d.randomInt)(0, this._buffer.length - 1)],
                                    i = this._audioContext.createGain();
                                g.buffer = h, i.gain.value = (0, d.randomFloat)(this.options.volume.min / 100, this.options.volume.max / 100), i.connect(this._audioContext.destination), g.connect(i), g.start(0);
                            } else
                                this.init();
                        }
                        constructor(b) {
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
                            }, b), this.init();
                        }
                    };
                },
                668: (b, d, e) => {
                    Object.defineProperty(d, '__esModule', {
                        value: !0
                    }), d.Trace = void 0;
                    var c = e(909);
                    d.Trace = class {
                        update(b) {
                            this._coordinates.pop(), this._coordinates.unshift([
                                this._x,
                                this._y
                            ]), this._speed *= this._acceleration;
                            var d = Math.cos(this._angle) * this._speed,
                                e = Math.sin(this._angle) * this._speed;
                            this._currentDistance = (0, c.getDistance)(this._sx, this._sy, this._x + d, this._y + e), this._currentDistance >= this._totalDistance ? b(this._dx, this._dy, this._hue) : (this._x += d, this._y += e);
                        }
                        draw() {
                            var f = this._coordinates.length - 1;
                            this._ctx.beginPath(), this._ctx.moveTo(this._coordinates[f][0], this._coordinates[f][1]), this._ctx.lineTo(this._x, this._y), this._ctx.strokeStyle = (0, c.hsla)(this._hue, this._brightness), this._ctx.stroke();
                        }
                        constructor(b) {
                            var {
                                x: d,
                                y: e,
                                dx: f,
                                dy: g,
                                ctx: h,
                                hue: i,
                                speed: j,
                                traceLength: k,
                                acceleration: l
                            } = m;
                            for (this._coordinates = [], this._currentDistance = 0, this._x = d, this._y = e, this._sx = d, this._sy = e, this._dx = f, this._dy = g, this._ctx = h, this._hue = i, this._speed = j, this._traceLength = k, this._acceleration = l, this._totalDistance = (0, c.getDistance)(d, e, f, g); this._traceLength--;)
                                this._coordinates.push([
                                    d,
                                    e
                                ]);
                            this._angle = Math.atan2(g - e, f - d), this._brightness = (0, c.randomInt)(50, 70);
                        }
                    };
                }
            },
            c = {};

        function d(e) {
            var e = c[e];
            if (void 0 !== e)
                return e.exports;
            var f = c[e] = {
                exports: {}
            };
            return b[e].call(f.exports, f, f.exports, d), f.exports;
        }
        var e = {};
        return (() => {
            var f = g;
            Object.defineProperty(f, '__esModule', {
                value: !0
            }), f.Fireworks = void 0;
            var h = d(668),
                i = d(449),
                j = d(511),
                k = d(909);
            f.Fireworks = class {
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
                setOptions(f) {
                    for (var [l, m] of Object.entries(f)) {
                        var n = Object.prototype.hasOwnProperty.call(this, l);
                        if ('function' == typeof this[l])
                            throw new Error('You cannot change the methods of the class!');
                        n && ('object' == typeof this[l] ? Object.assign(this[l], m) : this[l] = m), 'sound' === l && Object.assign(this._sound.options, m);
                    }
                }
                setSize() {
                    var {
                        width: n = this._container instanceof HTMLCanvasElement ? this._canvas.width : this._container.clientWidth,
                        height: o = this._container instanceof HTMLCanvasElement ? this._canvas.height : this._container.clientHeight
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this._width = n, this._height = o, this._canvas.width = n, this._canvas.height = o, this.setBoundaries({
                        width: n,
                        height: o
                    });
                }
                setBoundaries(f) {
                    this.boundaries = Object.assign(Object.assign({}, this.boundaries), f);
                }
                useMouse(f, h) {
                    (this.mouse.click || this.mouse.move) && (this._mx = f.pageX - this._canvas.offsetLeft, this._my = f.pageY - this._canvas.offsetTop, this._m = h);
                }
                windowResize() {
                    this.setSize();
                }
                mouseDown(f) {
                    this.useMouse(f, this.mouse.click);
                }
                mouseUp(f) {
                    this.useMouse(f, !1);
                }
                mouseMove(f) {
                    this.useMouse(f, this._m);
                }
                render() {
                    var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._timestamp;
                    if (this._ctx && this._running) {
                        requestAnimationFrame(l => this.render(l)), this._ctx.globalCompositeOperation = 'destination-out', this._ctx.fillStyle = 'rgba(0, 0, 0, '.concat(this.opacity, ')'), this._ctx.fillRect(0, 0, this._width, this._height), this._ctx.globalCompositeOperation = 'lighter', this._ctx.lineCap = this.lineStyle, this._ctx.lineJoin = 'round', this.drawBoundaries(), this.initTrace(), this.drawTrace(), this.drawExplosion();
                        var m = l - this._timestamp;
                        this._timestamp = l, this._tick += m * (this.intensity * Math.PI) / 1000;
                    }
                }
                drawBoundaries() {
                    this.boundaries.visible && (this._ctx.beginPath(), this._ctx.lineWidth = 1, this._ctx.strokeStyle = 'red', this._ctx.rect(this.boundaries.x, this.boundaries.y, this.boundaries.width - 2 * this.boundaries.x, 0.5 * this.boundaries.height), this._ctx.stroke());
                }
                initTrace() {
                    this._ds = (0, k.randomInt)(this.delay.min, this.delay.max), (this._tick > this._ds || this._m && this.mouse.max > this._traces.length) && (this._traces.push(new h.Trace({
                        x: this._width * (0, k.randomInt)(this.rocketsPoint.min, this.rocketsPoint.max) / 100,
                        y: this._height,
                        dx: this._mx && this.mouse.move || this._m ? this._mx : (0, k.randomInt)(this.boundaries.x, this.boundaries.width - 2 * this.boundaries.x),
                        dy: this._my && this.mouse.move || this._m ? this._my : (0, k.randomInt)(this.boundaries.y, 0.5 * this.boundaries.height),
                        ctx: this._ctx,
                        hue: (0, k.randomInt)(this.hue.min, this.hue.max),
                        speed: this.traceSpeed,
                        acceleration: this.acceleration,
                        traceLength: this.trace
                    })), this._tick = 0);
                }
                drawTrace() {
                    var m = this._traces.length;
                    for (this._ctx.lineWidth = (0, k.randomFloat)(this.lineWidth.trace.min, this.lineWidth.trace.max); m--;)
                        this._traces[m].draw(), this._traces[m].update((h, d, g) => {
                            this.initExplosion(h, d, g), this._sound.play(), this._traces.splice(m, 1);
                        });
                }
                initExplosion(f, h, d) {
                    for (var l = this.particles; l--;)
                        this._explosions.push(new j.Explosion({
                            x: f,
                            y: h,
                            ctx: this._ctx,
                            hue: d,
                            friction: this.friction,
                            gravity: this.gravity,
                            flickering: (0, k.randomInt)(0, 100) <= this.flickering,
                            lineWidth: (0, k.randomFloat)(this.lineWidth.explosion.min, this.lineWidth.explosion.max),
                            explosionLength: Math.round(this.explosion),
                            brightness: this.brightness
                        }));
                }
                drawExplosion() {
                    for (var m = this._explosions.length; m--;)
                        this._explosions[m].draw(), this._explosions[m].update(() => {
                            this._explosions.splice(m, 1);
                        });
                }
                constructor(f) {
                    var {
                        autoresize: l = !0,
                        boundaries: m,
                        brightness: n,
                        delay: o,
                        hue: p,
                        mouse: q,
                        sound: r,
                        rocketsPoint: s,
                        lineWidth: t,
                        lineStyle: u = 'round',
                        flickering: v = 50,
                        trace: w = 3,
                        traceSpeed: x = 10,
                        intensity: y = 30,
                        explosion: z = 5,
                        gravity: A = 1.5,
                        opacity: B = 0.5,
                        particles: C = 50,
                        friction: D = 0.95,
                        acceleration: E = 1.05
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this._tick = 0, this._timestamp = performance.now(), this._version = '1.4.0', this._running = !1, this._m = !1, f instanceof HTMLCanvasElement ? (this._container = f, this._canvas = f) : (this._container = f, this._canvas = document.createElement('canvas'), this._container.appendChild(this._canvas)), this._ctx = this._canvas.getContext('2d'), this._sound = new i.Sound(r), this.setSize(), this.setBoundaries(Object.assign({
                        visible: !1,
                        x: 50,
                        y: 50
                    }, m)), this.autoresize = l, this.trace = w, this.explosion = z, this.gravity = A, this.opacity = B, this.particles = C, this.friction = D, this.acceleration = E, this.flickering = v, this.intensity = y, this.traceSpeed = x, this.lineStyle = u, this.hue = Object.assign({
                        min: 0,
                        max: 360
                    }, p), this.rocketsPoint = Object.assign({
                        min: 50,
                        max: 50
                    }, s), this.lineWidth = Object.assign({
                        explosion: {
                            min: 1,
                            max: 3
                        },
                        trace: {
                            min: 1,
                            max: 2
                        }
                    }, t), this.mouse = Object.assign({
                        click: !1,
                        move: !1,
                        max: 1
                    }, q), this.delay = Object.assign({
                        min: 15,
                        max: 30
                    }, o), this.brightness = Object.assign({
                        min: 50,
                        max: 80,
                        decay: {
                            min: 0.015,
                            max: 0.03
                        }
                    }, n), this.autoresize && window.addEventListener('resize', () => this.windowResize()), this._canvas.addEventListener('mousedown', f => this.mouseDown(f)), this._canvas.addEventListener('mouseup', f => this.mouseUp(f)), this._canvas.addEventListener('mousemove', f => this.mouseMove(f));
                }
            };
        })(), e;
    })();
});