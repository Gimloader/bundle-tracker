var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('5GGbn', function(b, c) {
    var d, e, f, g, h;
    b.exports, b.exports = (g = a('Pd7fd'), h = a('O0Kav'), d = {
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
            j.useFireworks = i => {
                var {
                    initialStart: q = !0,
                    initialOptions: r = {}
                } = i, [s, t] = (0, o.useState)(q), [u, v] = (0, o.useState)(r);
                return {
                    enabled: s,
                    options: u,
                    setOptions: v,
                    setEnabled: i => {
                        t(q => null != i ? i : !q);
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
                        ref: i => this._ref = i,
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
        522: a => {
            a.exports = g;
        },
        156: a => {
            a.exports = h;
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
}), a.register('Pd7fd', function(b, c) {
    b.exports, b.exports = (() => {
        var d = {
                511: (d, c, _h) => {
                    Object.defineProperty(c, '__esModule', {
                        value: !0
                    }), c.Explosion = void 0;
                    var e = _h(909);
                    c.Explosion = class {
                        update(f) {
                            this._coordinates.pop(), this._coordinates.unshift([
                                this._x,
                                this._y
                            ]), this._speed *= this._friction, this._x += Math.cos(this._angle) * this._speed, this._y += Math.sin(this._angle) * this._speed + this._gravity, this._alpha -= this._decay, this._alpha <= this._decay && f();
                        }
                        draw() {
                            var f = this._coordinates.length - 1;
                            this._ctx.beginPath(), this._ctx.lineWidth = this._lineWidth, this._ctx.fillStyle = (0, e.hsla)(this._hue, this._brightness, this._alpha), this._ctx.moveTo(this._coordinates[f][0], this._coordinates[f][1]), this._ctx.lineTo(this._x, this._y), this._ctx.strokeStyle = (0, e.hsla)(this._hue, this._flickering ? (0, e.randomFloat)(0, this._brightness) : this._brightness, this._alpha), this._ctx.stroke();
                        }
                        constructor(f) {
                            var {
                                x: g,
                                y: _h,
                                ctx: i,
                                hue: j,
                                gravity: k,
                                friction: l,
                                brightness: m,
                                flickering: n,
                                lineWidth: o,
                                explosionLength: p
                            } = f;
                            for (this._coordinates = [], this._alpha = 1, this._x = g, this._y = _h, this._ctx = i, this._gravity = k, this._friction = l, this._flickering = n, this._lineWidth = o, this._explosionLength = p; this._explosionLength--;)
                                this._coordinates.push([
                                    g,
                                    _h
                                ]);
                            this._angle = (0, e.randomFloat)(0, 2 * Math.PI), this._speed = (0, e.randomInt)(1, 10), this._hue = (0, e.randomInt)(j - 20, j + 20), this._brightness = (0, e.randomInt)(m.min, m.max), this._decay = (0, e.randomFloat)(m.decay.min, m.decay.max);
                        }
                    };
                },
                909: (d, c) => {
                    Object.defineProperty(c, '__esModule', {
                        value: !0
                    }), c.hsla = c.getDistance = c.randomInt = c.randomFloat = void 0, c.randomFloat = function(e, f) {
                        return Math.random() * (f - e) + e;
                    }, c.randomInt = function(e, f) {
                        return Math.floor(e + Math.random() * (f + 1 - e));
                    }, c.getDistance = function(e, f, g, h) {
                        var i = Math.pow;
                        return Math.sqrt(i(e - g, 2) + i(f - h, 2));
                    }, c.hsla = function(e, f) {
                        var g = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                        return 'hsla('.concat(e, ', 100%, ').concat(f, '%, ').concat(g, ')');
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
                            _q((l = l.apply(i, j || [])).next());
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
                                    this._audioContext.decodeAudioData(k).then(j => {
                                        this._buffer.push(j);
                                    }).catch(j => {
                                        throw j;
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
                668: (d, c, _h) => {
                    Object.defineProperty(c, '__esModule', {
                        value: !0
                    }), c.Trace = void 0;
                    var e = _h(909);
                    c.Trace = class {
                        update(f) {
                            this._coordinates.pop(), this._coordinates.unshift([
                                this._x,
                                this._y
                            ]), this._speed *= this._acceleration;
                            var g = Math.cos(this._angle) * this._speed,
                                _h = Math.sin(this._angle) * this._speed;
                            this._currentDistance = (0, e.getDistance)(this._sx, this._sy, this._x + g, this._y + _h), this._currentDistance >= this._totalDistance ? f(this._dx, this._dy, this._hue) : (this._x += g, this._y += _h);
                        }
                        draw() {
                            var f = this._coordinates.length - 1;
                            this._ctx.beginPath(), this._ctx.moveTo(this._coordinates[f][0], this._coordinates[f][1]), this._ctx.lineTo(this._x, this._y), this._ctx.strokeStyle = (0, e.hsla)(this._hue, this._brightness), this._ctx.stroke();
                        }
                        constructor(f) {
                            var {
                                x: g,
                                y: h,
                                dx: i,
                                dy: j,
                                ctx: k,
                                hue: l,
                                speed: m,
                                traceLength: n,
                                acceleration: o
                            } = f;
                            for (this._coordinates = [], this._currentDistance = 0, this._x = g, this._y = h, this._sx = g, this._sy = h, this._dx = i, this._dy = j, this._ctx = k, this._hue = l, this._speed = m, this._traceLength = n, this._acceleration = o, this._totalDistance = (0, e.getDistance)(g, h, i, j); this._traceLength--;)
                                this._coordinates.push([
                                    g,
                                    h
                                ]);
                            this._angle = Math.atan2(j - h, i - g), this._brightness = (0, e.randomInt)(50, 70);
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
        var g = {};
        return (() => {
            var h = g;
            Object.defineProperty(h, '__esModule', {
                value: !0
            }), h.Fireworks = void 0;
            var i = f(668),
                j = f(449),
                k = f(511),
                l = f(909);
            h.Fireworks = class {
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
                setOptions(m) {
                    for (var [n, o] of Object.entries(m)) {
                        var p = Object.prototype.hasOwnProperty.call(this, n);
                        if ('function' == typeof this[n])
                            throw new Error('You cannot change the methods of the class!');
                        p && ('object' == typeof this[n] ? Object.assign(this[n], o) : this[n] = o), 'sound' === n && Object.assign(this._sound.options, o);
                    }
                }
                setSize() {
                    var {
                        width: m = this._container instanceof HTMLCanvasElement ? this._canvas.width : this._container.clientWidth,
                        height: n = this._container instanceof HTMLCanvasElement ? this._canvas.height : this._container.clientHeight
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this._width = m, this._height = n, this._canvas.width = m, this._canvas.height = n, this.setBoundaries({
                        width: m,
                        height: n
                    });
                }
                setBoundaries(m) {
                    this.boundaries = Object.assign(Object.assign({}, this.boundaries), m);
                }
                useMouse(m, n) {
                    (this.mouse.click || this.mouse.move) && (this._mx = m.pageX - this._canvas.offsetLeft, this._my = m.pageY - this._canvas.offsetTop, this._m = n);
                }
                windowResize() {
                    this.setSize();
                }
                mouseDown(m) {
                    this.useMouse(m, this.mouse.click);
                }
                mouseUp(m) {
                    this.useMouse(m, !1);
                }
                mouseMove(m) {
                    this.useMouse(m, this._m);
                }
                render() {
                    var m = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._timestamp;
                    if (this._ctx && this._running) {
                        requestAnimationFrame(m => this.render(m)), this._ctx.globalCompositeOperation = 'destination-out', this._ctx.fillStyle = 'rgba(0, 0, 0, '.concat(this.opacity, ')'), this._ctx.fillRect(0, 0, this._width, this._height), this._ctx.globalCompositeOperation = 'lighter', this._ctx.lineCap = this.lineStyle, this._ctx.lineJoin = 'round', this.drawBoundaries(), this.initTrace(), this.drawTrace(), this.drawExplosion();
                        var n = m - this._timestamp;
                        this._timestamp = m, this._tick += n * (this.intensity * Math.PI) / 1000;
                    }
                }
                drawBoundaries() {
                    this.boundaries.visible && (this._ctx.beginPath(), this._ctx.lineWidth = 1, this._ctx.strokeStyle = 'red', this._ctx.rect(this.boundaries.x, this.boundaries.y, this.boundaries.width - 2 * this.boundaries.x, 0.5 * this.boundaries.height), this._ctx.stroke());
                }
                initTrace() {
                    this._ds = (0, l.randomInt)(this.delay.min, this.delay.max), (this._tick > this._ds || this._m && this.mouse.max > this._traces.length) && (this._traces.push(new i.Trace({
                        x: this._width * (0, l.randomInt)(this.rocketsPoint.min, this.rocketsPoint.max) / 100,
                        y: this._height,
                        dx: this._mx && this.mouse.move || this._m ? this._mx : (0, l.randomInt)(this.boundaries.x, this.boundaries.width - 2 * this.boundaries.x),
                        dy: this._my && this.mouse.move || this._m ? this._my : (0, l.randomInt)(this.boundaries.y, 0.5 * this.boundaries.height),
                        ctx: this._ctx,
                        hue: (0, l.randomInt)(this.hue.min, this.hue.max),
                        speed: this.traceSpeed,
                        acceleration: this.acceleration,
                        traceLength: this.trace
                    })), this._tick = 0);
                }
                drawTrace() {
                    var m = this._traces.length;
                    for (this._ctx.lineWidth = (0, l.randomFloat)(this.lineWidth.trace.min, this.lineWidth.trace.max); m--;)
                        this._traces[m].draw(), this._traces[m].update((i, f, g) => {
                            this.initExplosion(i, f, g), this._sound.play(), this._traces.splice(m, 1);
                        });
                }
                initExplosion(m, n, o) {
                    for (var p = this.particles; p--;)
                        this._explosions.push(new k.Explosion({
                            x: m,
                            y: n,
                            ctx: this._ctx,
                            hue: o,
                            friction: this.friction,
                            gravity: this.gravity,
                            flickering: (0, l.randomInt)(0, 100) <= this.flickering,
                            lineWidth: (0, l.randomFloat)(this.lineWidth.explosion.min, this.lineWidth.explosion.max),
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
                constructor(m) {
                    var {
                        autoresize: n = !0,
                        boundaries: o,
                        brightness: p,
                        delay: q,
                        hue: r,
                        mouse: s,
                        sound: t,
                        rocketsPoint: u,
                        lineWidth: v,
                        lineStyle: w = 'round',
                        flickering: x = 50,
                        trace: y = 3,
                        traceSpeed: z = 10,
                        intensity: A = 30,
                        explosion: B = 5,
                        gravity: C = 1.5,
                        opacity: D = 0.5,
                        particles: E = 50,
                        friction: F = 0.95,
                        acceleration: G = 1.05
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this._tick = 0, this._timestamp = performance.now(), this._version = '1.4.0', this._running = !1, this._m = !1, m instanceof HTMLCanvasElement ? (this._container = m, this._canvas = m) : (this._container = m, this._canvas = document.createElement('canvas'), this._container.appendChild(this._canvas)), this._ctx = this._canvas.getContext('2d'), this._sound = new j.Sound(t), this.setSize(), this.setBoundaries(Object.assign({
                        visible: !1,
                        x: 50,
                        y: 50
                    }, o)), this.autoresize = n, this.trace = y, this.explosion = B, this.gravity = C, this.opacity = D, this.particles = E, this.friction = F, this.acceleration = G, this.flickering = x, this.intensity = A, this.traceSpeed = z, this.lineStyle = w, this.hue = Object.assign({
                        min: 0,
                        max: 360
                    }, r), this.rocketsPoint = Object.assign({
                        min: 50,
                        max: 50
                    }, u), this.lineWidth = Object.assign({
                        explosion: {
                            min: 1,
                            max: 3
                        },
                        trace: {
                            min: 1,
                            max: 2
                        }
                    }, v), this.mouse = Object.assign({
                        click: !1,
                        move: !1,
                        max: 1
                    }, s), this.delay = Object.assign({
                        min: 15,
                        max: 30
                    }, q), this.brightness = Object.assign({
                        min: 50,
                        max: 80,
                        decay: {
                            min: 0.015,
                            max: 0.03
                        }
                    }, p), this.autoresize && window.addEventListener('resize', () => this.windowResize()), this._canvas.addEventListener('mousedown', m => this.mouseDown(m)), this._canvas.addEventListener('mouseup', m => this.mouseUp(m)), this._canvas.addEventListener('mousemove', m => this.mouseMove(m));
                }
            };
        })(), g;
    })();
});