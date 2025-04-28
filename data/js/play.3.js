function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('eedQ8', function(b, c) {
    _E(b.exports, 'default', function() {
        return _g;
    });
    var d = a('1bFPu');
    let e;
    var f;
    (f = e || (e = {})).propertyUpdate = 'pU', f.fullValue = 'fV';
    var _g = class {
        constructor() {
            (0, d.default)(this, 'value', {}), (0, d.default)(this, 'propListeners', []), (0, d.default)(this, 'onPropChange', (_E, b) => {
                const h = Math.random().toString(36).substring(3);
                return this.propListeners.push({
                    id: h,
                    prop: _E,
                    callback: b
                }), () => this.disposeListener(h);
            }), (0, d.default)(this, 'applyPatches', _E => {
                _E.forEach(_E => {
                    if (_E.type !== e.propertyUpdate)
                        if (_E.type !== e.fullValue);
                        else {
                            const h = _E;
                            Object.keys(h.value).forEach(_E => {
                                this.updateProperty(_E, h.value[_E]);
                            });
                        }
                    else {
                        const h = _E;
                        this.updateProperty(h.value.key, h.value.value);
                    }
                });
            }), (0, d.default)(this, 'disposeListener', _E => {
                this.propListeners = this.propListeners.filter(b => b.id !== _E);
            }), (0, d.default)(this, 'onPropertyChanged', (_E, b) => {
                this.propListeners.filter(b => b.prop === _E).forEach(_E => _E.callback(b));
            }), (0, d.default)(this, 'updateProperty', (_E, b) => {
                void 0 !== this.value[_E] ? this.value[_E] !== b && (this.value[_E] = b, this.onPropertyChanged(_E, b)) : (this.value[_E] = b, this.onPropertyChanged(_E, b));
            });
        }
    };
}), a.register('A6lcN', function(b, c) {
    _E(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('sHRDd'),
        f = a('4iV4e'),
        g = a('LEQ5w'),
        h = a('JJQ1A');
    const i = () => window.devicePixelRatio || 1,
        j = _E => {
            _E.preventDefault();
            const k = _E.changedTouches[0],
                l = document.createEvent('MouseEvent'),
                m = {
                    touchstart: 'mousedown',
                    touchmove: 'mousemove',
                    touchend: 'mouseup'
                } [_E.type];
            m && (l.initMouseEvent(m, !0, !0, window, 1, k.screenX, k.screenY, k.clientX, k.clientY, !1, !1, !1, !1, 0, null), k.target.dispatchEvent(l));
        },
        k = _E => {
            var l, m;
            return {
                x: (null == _E || null === (l = _E.nativeEvent) || void 0 === l ? void 0 : l.offsetX) || 0,
                y: (null == _E || null === (m = _E.nativeEvent) || void 0 === m ? void 0 : m.offsetY) || 0
            };
        };
    var _l = g.forwardRef((_E, a) => {
        const [m, n] = g.useState(''), o = g.useRef(!1), p = g.useRef(!1), q = g.useRef(null), r = g.useRef(null), s = g.useRef([]), t = g.useRef(-1), u = g.useRef({
            x: 0,
            y: 0
        }), v = g.useRef(_E.color || e.default.Black), w = g.useRef(_E.strokeWidth || 2), x = g.useRef(null), y = g.useRef(null), z = () => {
            p.current = !0;
        }, A = () => {
            p.current = !1;
        }, B = g.useMemo(() => {
            const C = (0, f.throttle)(_E => {
                if (!o.current)
                    return;
                if (!p.current)
                    return;
                const {
                    x: D,
                    y: E
                } = k(_E);
                _C({
                    xStart: u.current.x,
                    yStart: u.current.y,
                    xEnd: D,
                    yEnd: E,
                    color: v.current,
                    width: w.current
                }, !0), u.current = {
                    x: D,
                    y: E
                };
            }, 10);
            return a => {
                _E.canEdit && (a.persist(), C(a));
            };
        }, [_E.canEdit]), _C = (_F, a) => {
            const {
                xStart: D,
                yStart: E,
                xEnd: F,
                yEnd: G,
                color: H,
                width: I
            } = _F, J = r.current, K = q.current;
            if (J.beginPath(), J.moveTo(D, E), J.lineTo(F, G), J.strokeStyle = H, J.lineWidth = I, J.stroke(), J.closePath(), a && _E.emitLine) {
                const L = _F;
                _F.xStart /= K.clientWidth, _F.yStart /= K.clientHeight, _F.xEnd /= K.clientWidth, _F.yEnd /= K.clientHeight, _F.width /= (K.clientWidth + K.clientHeight) / 2, _E.emitLine(L);
            }
        }, D = () => {
            const _E = r.current,
                _F = q.current;
            s.current = [
                ...s.current,
                _E.getImageData(0, 0, _F.width, _F.height)
            ], t.current = t.current + 1, _E();
        }, _E = () => {
            const F = q.current;
            _G.onLatestImage && (null == F ? void 0 : F.toDataURL) && _G.onLatestImage(F.toDataURL('image/jpeg'));
        }, F = () => {
            const _G = r.current,
                H = q.current;
            _G.clearRect(0, 0, H.width, H.height), _G.fillStyle = 'white', _G.fillRect(0, 0, H.width, H.height), D();
        }, G = () => {
            t.current <= 0 ? F() : (t.current = t.current - 1, s.current = [...s.current.slice(0, s.current.length - 1)], r.current.putImageData(s.current[t.current], 0, 0), _E());
        }, H = _J => {
            const I = q.current,
                J = _J;
            _J.xStart *= I.clientWidth, _J.yStart *= I.clientHeight, _J.xEnd *= I.clientWidth, _J.yEnd *= I.clientHeight, _J.width *= (I.clientWidth + I.clientHeight) / 2, _C(J, !1);
        }, I = _J => {
            const J = r.current,
                K = q.current,
                L = new Image();
            L.onload = () => {
                J.drawImage(L, 0, 0, K.width / i(), K.height / i());
            }, L.src = _J;
        };
        return _K(h)(() => {
            const _J = q.current,
                _K = r.current;
            if (!_J || !_K)
                return;
            const L = _J.toDataURL(),
                M = _J.getBoundingClientRect();
            _J.width = M.width * i(), _J.height = M.height * i(), _K.scale(i(), i()), _K.lineCap = 'round', _K.lineJoin = 'round', s.current = [], t.current = -1, I(L);
        }, 100, [
            _b.width,
            _b.height
        ]), g.useImperativeHandle(a, () => ({
            clear: F,
            undo: G,
            addLine: H,
            drawImage: I
        })), g.useEffect(() => {
            const J = q.current,
                K = x.current,
                L = J.getBoundingClientRect();
            J.width = L.width * i(), J.height = L.height * i();
            const M = J.getContext('2d');
            M.scale(i(), i()), M.fillStyle = 'white', M.fillRect(0, 0, J.width, J.height), M.lineCap = 'round', M.lineJoin = 'round', r.current = M, _b.initialImage && I(_b.initialImage);
            const N = K.getContext('2d');
            y.current = N, document.addEventListener('mousedown', z), document.addEventListener('mouseup', A);
        }, []), g.useEffect(() => {
            const J = x.current,
                K = y.current;
            if (!J || !K)
                return;
            const L = _b.strokeWidth;
            J.width = L, J.height = L, K.clearRect(0, 0, J.width, J.height), K.beginPath(), K.arc(J.width / 2, J.height / 2, L / 2, 0, 2 * Math.PI), K.fillStyle = _b.color, K.fill();
            const M = J.toDataURL('image');
            n(M);
        }, [
            _b.color,
            _b.strokeWidth
        ]), g.useEffect(() => {
            v.current = _b.color;
        }, [_b.color]), g.useEffect(() => {
            w.current = _b.strokeWidth;
        }, [_b.strokeWidth]), g.useEffect(() => {
            !_b.canEdit && o.current && _E();
        }, [_b.canEdit]), g.useEffect(() => () => {
            _b.canEdit && o.current && _E();
        }, []), (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)('canvas', {
                    style: {
                        width: _b.width,
                        height: _b.height,
                        cursor: _b.canEdit ? `url(${ m }) ${ w.current / 2 } ${ w.current / 2 }, auto` : 'auto',
                        background: e.default.White
                    },
                    ref: q,
                    onMouseDown: _c => {
                        if (!_b.canEdit)
                            return;
                        const {
                            x: J,
                            y: K
                        } = k(_c);
                        u.current = {
                            x: J,
                            y: K
                        }, o.current = !0;
                    },
                    onMouseUp: _c => {
                        if (!_b.canEdit)
                            return;
                        const {
                            x: J,
                            y: K
                        } = k(_c);
                        o.current && (o.current = !1, _C({
                            xStart: u.current.x,
                            yStart: u.current.y,
                            xEnd: J,
                            yEnd: K,
                            color: v.current,
                            width: w.current
                        }, !0), D());
                    },
                    onMouseMove: B,
                    onTouchStart: j,
                    onTouchEnd: j,
                    onTouchCancel: j,
                    onTouchMove: j
                }),
                (0, d.jsx)('canvas', {
                    style: {
                        display: 'none'
                    },
                    ref: x
                })
            ]
        });
    });
}), a.register('JJQ1A', function(_b, _c) {
    Object.defineProperty(_b.exports, '__esModule', {
        value: !0
    }), _b.exports.useThrottledEffect = void 0;
    var d = a('LEQ5w');

    function e(f) {
        if (Array.isArray(f)) {
            for (var g = 0, h = Array(f.length); g < f.length; g++)
                h[g] = f[g];
            return h;
        }
        return Array.from(f);
    }
    var e = _b.exports.useThrottledEffect = function(f, g) {
        var h = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = (0, d.useRef)(Date.now());
        (0, d.useEffect)(function() {
            var j = setTimeout(function() {
                Date.now() - i.current >= g && (f(), i.current = Date.now());
            }, g - (Date.now() - i.current));
            return function() {
                clearTimeout(j);
            };
        }, [g].concat(_d(h)));
    };
    _b.exports.default = e;
}), a.register('kd2GK', function(b, c) {
    _b(b.exports, 'default', function() {
        return _i;
    });
    var _d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p');
    let f, g, h = _b => _b;
    var _i = _b => (0, _d.jsxs)(_j, {
        children: [
            (0, _d.jsx)('div', {
                className: 'area',
                children: (0, _d.jsxs)('ul', {
                    className: 'circles',
                    children: [
                        (0, _d.jsx)('li', {}),
                        (0, _d.jsx)('li', {}),
                        (0, _d.jsx)('li', {}),
                        (0, _d.jsx)('li', {}),
                        (0, _d.jsx)('li', {}),
                        (0, _d.jsx)('li', {}),
                        (0, _d.jsx)('li', {}),
                        (0, _d.jsx)('li', {}),
                        (0, _d.jsx)('li', {}),
                        (0, _d.jsx)('li', {})
                    ]
                })
            }),
            (0, _d.jsx)(_k, {
                children: _b.children
            })
        ]
    });
    const _j = e.default.div(f || (f = h`
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
`)),
        _k = e.default.div.attrs({
            className: 'maxAll'
        })(g || (g = h`
  position: absolute;
  top: 0;
  left: 0;
`));
}), a.register('T2fy6', function(_b, c) {
    var d = _b.exports && _b.exports.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(_b.exports, '__esModule', {
        value: !0
    });
    const e = d(a('iLiSJ'));
    _b.exports.Client = e.default;
    const f = d(a('Enqaw'));
    _b.exports.Room = f.default;
}), a.register('iLiSJ', function(b, c) {
    var d = b.exports && b.exports.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    });
    const e = d(a('tK4wV')),
        f = d(a('LRa3j')),
        g = d(a('9w8rj')),
        h = d(a('T9YDT'));
    var i = a('z890/');
    const j = d(a('E3t8I')),
        k = d(a('Enqaw'));
    b.exports.default = class {
        createRoom(l, m) {
            const n = Math.random().toString();
            this.socket.emit(h.default.createNewRoom, {
                type: l,
                options: m,
                uniqueRequestId: n
            });
            const o = new k.default(this.socket, m);
            return this.socket.on(`${ n }-create`, l => {
                o._setRoomId(l), o.onCreate.call(l), this.joinRoom(l, m, o);
            }), this.socket.on(`${ n }-error`, l => {
                o.onJoinError.call(l);
            }), o;
        }
        joinRoom(l, m, n) {
            const o = n || new k.default(this.socket, m, l);
            return o.onJoinAttempt.call(), o.joined || this.socket.emit(h.default.joinRoom, {
                roomId: l,
                options: m
            }), this.rooms.some(m => m.id === l) || this.rooms.push(o), o;
        }
        constructor(l, m) {
            this.rooms = [], this.onConnect = new g.default(), this.onConnectError = new g.default(), this.onDisconnect = new g.default(), this.onReconnect = new g.default(), this.onReconnectAttempt = new g.default(), this.latency = 0, this.useClientIdSaving = !0, this.disconnect = () => {
                this.socket.disconnect();
            }, this.connect = () => {
                this.socket.connect();
            }, m && m.blockClientIdSaving && (this.useClientIdSaving = !1), this.socket = e.default(l, {
                path: '/blueboat',
                parser: f.default,
                transports: m.transports || ['websocket'],
                query: {
                    id: localStorage && this.useClientIdSaving && localStorage.getItem(i.BLUEBOAT_ID + (m && m.clientIdSuffix ? m.clientIdSuffix : '')) || ''
                },
                reconnectionDelay: 500,
                reconnectionDelayMax: 1500,
                randomizationFactor: 0
            }), this.socket.on('connect_error', l => this.onConnectError.call(l)), this.socket.on('error', l => this.onConnectError.call(l)), this.socket.on(j.default.clientIdSet, l => {
                localStorage && this.useClientIdSaving && localStorage.setItem(i.BLUEBOAT_ID + (m && m.clientIdSuffix ? m.clientIdSuffix : ''), l), this.socket.io.opts.query.id = l, this.id = l, this.sessionId = this.socket.id, this.rooms.length && this.rooms.forEach(l => this.joinRoom(l.id, l.initialJoinOptions, l)), this.onConnect.call();
            }), this.socket.on('pong', l => {
                this.latency = l;
            }), this.socket.on('reconnect', l => this.onReconnect.call(l)), this.socket.on('reconnect_attempt', l => {
                this.onReconnectAttempt.call(l);
            }), this.socket.on('disconnect', l => {
                this.onDisconnect.call(l), this.rooms.forEach(m => {
                    m.joined = !1, m.onLeave.call(l);
                });
            });
        }
    };
}), a.register('tK4wV', function(b, c) {
    var d = a('aTe5F'),
        e = a('cPNNl'),
        f = a('7y3Xs')('socket.io-client');
    b.exports = c = _h;
    var g = c.managers = {};

    function _h(i, j) {
        'object' == typeof i && (j = i, i = void 0), j = j || {};
        var k, l = d(i),
            m = l.source,
            n = l.id,
            o = l.path,
            p = g[n] && o in g[n].nsps;
        return j.forceNew || j['force new connection'] || !1 === j.multiplex || p ? (f('ignoring socket cache for %s', m), k = a('1oUTh')(m, j)) : (g[n] || (f('new io instance for %s', m), g[n] = a('1oUTh')(m, j)), k = g[n]), l.query && !j.query && (j.query = l.query), k.socket(l.path, j);
    }
    c.protocol = e.protocol, c.connect = _k, c.Manager = a('1oUTh'), c.Socket = a('d6hPe');
}), a.register('aTe5F', function(b, c) {
    var d = a('ybIxY'),
        e = a('7y3Xs')('socket.io-client:url');
    b.exports = function(f, g) {
        var h = f;
        g = g || 'undefined' != typeof location && location, null == f && (f = g.protocol + '//' + g.host);
        'string' == typeof f && ('/' === f.charAt(0) && (f = '/' === f.charAt(1) ? g.protocol + f : g.host + f), /^(https?|wss?):\/\//.test(f) || (e('protocol-less url %s', f), f = void 0 !== g ? g.protocol + '//' + f : 'https://' + f), e('parse %s', f), h = d(f));
        h.port || (/^(http|ws)$/.test(h.protocol) ? h.port = '80' : /^(http|ws)s$/.test(h.protocol) && (h.port = '443'));
        h.path = h.path || '/';
        var i = -1 !== h.host.indexOf(':') ? '[' + h.host + ']' : h.host;
        return h.id = h.protocol + '://' + i + ':' + h.port, h.href = h.protocol + '://' + i + (g && g.port === h.port ? '' : ':' + h.port), h;
    };
}), a.register('ybIxY', function(b, c) {
    var d = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        e = [
            'source',
            'protocol',
            'authority',
            'userInfo',
            'user',
            'password',
            'host',
            'port',
            'relative',
            'path',
            'directory',
            'file',
            'query',
            'anchor'
        ];
    b.exports = function(f) {
        var g = f,
            h = f.indexOf('['),
            i = f.indexOf(']'); -
        1 != h && -1 != i && (f = f.substring(0, h) + f.substring(h, i).replace(/:/g, ';') + f.substring(i, f.length));
        for (var j, _k, l = d.exec(f || ''), m = {}, n = 14; n--;)
            m[e[n]] = l[n] || '';
        return -1 != h && -1 != i && (m.source = g, m.host = m.host.substring(1, m.host.length - 1).replace(/;/g, ':'), m.authority = m.authority.replace('[', '').replace(']', '').replace(/;/g, ':'), m.ipv6uri = !0), m.pathNames = function(o, p) {
            var q = /\/{2,9}/g,
                r = p.replace(q, '/').split('/');
            '/' != p.substr(0, 1) && 0 !== p.length || r.splice(0, 1);
            '/' == p.substr(p.length - 1, 1) && r.splice(r.length - 1, 1);
            return r;
        }(0, m.path), m.queryKey = (j = m.query, _k = {}, j.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(o, p, q) {
            p && (_k[p] = q);
        }), _k), m;
    };
}), a.register('7y3Xs', function(b, c) {
    var d = a('jOoxx');

    function e() {
        var f;
        try {
            f = c.storage.debug;
        } catch (f) {}
        return !f && void 0 !== d && 'env' in d && (f = void 0), f;
    }
    (c = b.exports = a('NwQ8P')).log = function() {
        return 'object' == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }, c.formatArgs = function(e) {
        var f = this.useColors;
        if (e[0] = (f ? '%c' : '') + this.namespace + (f ? ' %c' : ' ') + e[0] + (f ? '%c ' : ' ') + '+' + c.humanize(this.diff), !f)
            return;
        var g = 'color: ' + this.color;
        e.splice(1, 0, g, 'color: inherit');
        var h = 0,
            i = 0;
        e[0].replace(/%[a-zA-Z%]/g, function(j) {
            '%%' !== j && (h++, '%c' === j && (i = h));
        }), e.splice(i, 0, g);
    }, c.save = function(e) {
        try {
            null == e ? c.storage.removeItem('debug') : c.storage.debug = e;
        } catch (e) {}
    }, c.load = _i, c.useColors = function() {
        return !('undefined' == typeof window || !window.process || 'renderer' !== window.process.type) || ('undefined' == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ('undefined' != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || 'undefined' != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }, c.storage = 'undefined' != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
        try {
            return window.localStorage;
        } catch (b) {}
    }(), c.colors = [
        '#0000CC',
        '#0000FF',
        '#0033CC',
        '#0033FF',
        '#0066CC',
        '#0066FF',
        '#0099CC',
        '#0099FF',
        '#00CC00',
        '#00CC33',
        '#00CC66',
        '#00CC99',
        '#00CCCC',
        '#00CCFF',
        '#3300CC',
        '#3300FF',
        '#3333CC',
        '#3333FF',
        '#3366CC',
        '#3366FF',
        '#3399CC',
        '#3399FF',
        '#33CC00',
        '#33CC33',
        '#33CC66',
        '#33CC99',
        '#33CCCC',
        '#33CCFF',
        '#6600CC',
        '#6600FF',
        '#6633CC',
        '#6633FF',
        '#66CC00',
        '#66CC33',
        '#9900CC',
        '#9900FF',
        '#9933CC',
        '#9933FF',
        '#99CC00',
        '#99CC33',
        '#CC0000',
        '#CC0033',
        '#CC0066',
        '#CC0099',
        '#CC00CC',
        '#CC00FF',
        '#CC3300',
        '#CC3333',
        '#CC3366',
        '#CC3399',
        '#CC33CC',
        '#CC33FF',
        '#CC6600',
        '#CC6633',
        '#CC9900',
        '#CC9933',
        '#CCCC00',
        '#CCCC33',
        '#FF0000',
        '#FF0033',
        '#FF0066',
        '#FF0099',
        '#FF00CC',
        '#FF00FF',
        '#FF3300',
        '#FF3333',
        '#FF3366',
        '#FF3399',
        '#FF33CC',
        '#FF33FF',
        '#FF6600',
        '#FF6633',
        '#FF9900',
        '#FF9933',
        '#FFCC00',
        '#FFCC33'
    ], c.formatters.j = function(e) {
        try {
            return JSON.stringify(e);
        } catch (e) {
            return '[UnexpectedJSONParseError]: ' + e.message;
        }
    }, c.enable(_i());
}), a.register('NwQ8P', function(b, c) {
    function d(e) {
        var f;

        function g() {
            if (g.enabled) {
                var h = g,
                    _i = +new Date(),
                    j = _i - (f || _i);
                h.diff = j, h.prev = f, h.curr = _i, f = _i;
                for (var k = new Array(arguments.length), l = 0; l < k.length; l++)
                    k[l] = arguments[l];
                k[0] = c.coerce(k[0]), 'string' != typeof k[0] && k.unshift('%O');
                var m = 0;
                k[0] = k[0].replace(/%([a-zA-Z%])/g, function(n, o) {
                    if ('%%' === n)
                        return n;
                    m++;
                    var p = c.formatters[o];
                    if ('function' == typeof p) {
                        var q = k[m];
                        n = p.call(h, q), k.splice(m, 1), m--;
                    }
                    return n;
                }), c.formatArgs.call(h, k);
                var n = g.log || c.log || console.log.bind(console);
                n.apply(h, k);
            }
        }
        return d.namespace = e, d.enabled = c.enabled(e), d.useColors = c.useColors(), d.color = function(g) {
            var h, i = 0;
            for (h in g)
                i = (i << 5) - i + g.charCodeAt(h), i |= 0;
            return c.colors[Math.abs(i) % c.colors.length];
        }(e), d.destroy = _d, 'function' == typeof c.init && c.init(d), c.instances.push(d), d;
    }

    function _d() {
        var e = c.instances.indexOf(this);
        return -1 !== e && (c.instances.splice(e, 1), !0);
    }
    (c = b.exports = _f.debug = _f.default = _f).coerce = function(d) {
        return d instanceof Error ? d.stack || d.message : d;
    }, c.disable = function() {
        c.enable('');
    }, c.enable = function(d) {
        var e;
        c.save(d), c.names = [], c.skips = [];
        var _f = ('string' == typeof d ? d : '').split(/[\s,]+/),
            g = _f.length;
        for (e = 0; e < g; e++)
            _f[e] && ('-' === (d = _f[e].replace(/\*/g, '.*?'))[0] ? c.skips.push(new RegExp('^' + d.substr(1) + '$')) : c.names.push(new RegExp('^' + d + '$')));
        for (e = 0; e < c.instances.length; e++) {
            var h = c.instances[e];
            h.enabled = c.enabled(h.namespace);
        }
    }, c.enabled = function(d) {
        if ('*' === d[d.length - 1])
            return !0;
        var e, f;
        for (e = 0, f = c.skips.length; e < f; e++)
            if (c.skips[e].test(d))
                return !1;
        for (e = 0, f = c.names.length; e < f; e++)
            if (c.names[e].test(d))
                return !0;
        return !1;
    }, c.humanize = a('NjJJg0'), c.instances = [], c.names = [], c.skips = [], c.formatters = {};
}), a.register('NjJJg0', function(b, c) {
    var d = 1000,
        e = 60000,
        f = 3600000,
        g = 86400000,
        h = 31557600000;

    function i(j, k, l) {
        if (!(j < k))
            return j < 1.5 * k ? Math.floor(j / k) + ' ' + l : Math.ceil(j / k) + ' ' + l + 's';
    }
    b.exports = function(i, j) {
        j = j || {};
        var k, l = typeof i;
        if ('string' === l && i.length > 0)
            return function(m) {
                if ((m = String(m)).length > 100)
                    return;
                var n = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(m);
                if (!n)
                    return;
                var o = parseFloat(n[1]);
                switch ((n[2] || 'ms').toLowerCase()) {
                    case 'years':
                    case 'year':
                    case 'yrs':
                    case 'yr':
                    case 'y':
                        return o * h;
                    case 'days':
                    case 'day':
                    case 'd':
                        return o * g;
                    case 'hours':
                    case 'hour':
                    case 'hrs':
                    case 'hr':
                    case 'h':
                        return o * f;
                    case 'minutes':
                    case 'minute':
                    case 'mins':
                    case 'min':
                    case 'm':
                        return o * e;
                    case 'seconds':
                    case 'second':
                    case 'secs':
                    case 'sec':
                    case 's':
                        return o * d;
                    case 'milliseconds':
                    case 'millisecond':
                    case 'msecs':
                    case 'msec':
                    case 'ms':
                        return o;
                    default:
                        return;
                }
            }(i);
        if ('number' === l && !1 === isNaN(i))
            return j.long ? _g(k = i, g, 'day') || _g(k, f, 'hour') || _g(k, e, 'minute') || _g(k, d, 'second') || k + ' ms' : function(m) {
                return m >= g ? Math.round(m / g) + 'd' : m >= f ? Math.round(m / f) + 'h' : m >= e ? Math.round(m / e) + 'm' : m >= d ? Math.round(m / d) + 's' : m + 'ms';
            }(i);
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(i));
    };
}), a.register('cPNNl', function(b, c) {
    var d, e, f, _g, h, i, j, k, l, m, n;
    _o(b.exports, 'protocol', function() {
        return d;
    }, function(_o) {
        return d = _o;
    }), _o(b.exports, 'types', function() {
        return e;
    }, function(_o) {
        return e = _o;
    }), _o(b.exports, 'CONNECT', function() {
        return f;
    }, function(_o) {
        return f = _o;
    }), _o(b.exports, 'DISCONNECT', function() {
        return _g;
    }, function(_o) {
        return _g = _o;
    }), _o(b.exports, 'EVENT', function() {
        return h;
    }, function(_o) {
        return h = _o;
    }), _o(b.exports, 'ACK', function() {
        return i;
    }, function(_o) {
        return i = _o;
    }), _o(b.exports, 'ERROR', function() {
        return j;
    }, function(_o) {
        return j = _o;
    }), _o(b.exports, 'BINARY_EVENT', function() {
        return k;
    }, function(_o) {
        return k = _o;
    }), _o(b.exports, 'BINARY_ACK', function() {
        return l;
    }, function(_o) {
        return l = _o;
    }), _o(b.exports, 'Encoder', function() {
        return m;
    }, function(_o) {
        return m = _o;
    }), _o(b.exports, 'Decoder', function() {
        return n;
    }, function(_o) {
        return n = _o;
    });
    var o = a('AUo1s')('socket.io-parser'),
        p = a('Sdfzv'),
        q = a('pqS04'),
        r = a('0/IJA0'),
        s = a('XMDsA');

    function t() {}
    d = 4, e = [
        'CONNECT',
        'DISCONNECT',
        'EVENT',
        'ACK',
        'ERROR',
        'BINARY_EVENT',
        'BINARY_ACK'
    ], f = 0, _g = 1, h = 2, i = 3, k = 5, l = 6, m = _t, n = _u;
    var t = (j = 4) + '"encode error"';

    function u(v) {
        var w = '' + v.type;
        if (k !== v.type && l !== v.type || (w += v.attachments + '-'), v.nsp && '/' !== v.nsp && (w += v.nsp + ','), null != v.id && (w += v.id), null != v.data) {
            var x = function(y) {
                try {
                    return JSON.stringify(y);
                } catch (y) {
                    return !1;
                }
            }(v.data);
            if (!1 === x)
                return t;
            w += x;
        }
        return o('encoded %j as %s', v, w), w;
    }

    function _u() {
        this.reconstructor = null;
    }

    function u(v) {
        this.reconPack = v, this.buffers = [];
    }

    function u(v) {
        return {
            type: j,
            data: 'parser error: ' + v
        };
    }
    _t.prototype.encode = function(u, v) {
        (o('encoding packet %j', u), k === u.type || l === u.type) ? function(w, x) {
            function y(z) {
                var A = q.deconstructPacket(z),
                    B = _v(A.packet),
                    C = A.buffers;
                C.unshift(B), x(C);
            }
            q.removeBlobs(w, a);
        }(u, v) : v([_v(u)]);
    }, p(_w.prototype), _w.prototype.add = function(u) {
        var v;
        if ('string' == typeof u)
            v = function(w) {
                var x = 0,
                    y = {
                        type: Number(w.charAt(0))
                    };
                if (null == e[y.type])
                    return _y('unknown packet type ' + y.type);
                if (k === y.type || l === y.type) {
                    for (var z = '';
                        '-' !== w.charAt(++x) && (z += w.charAt(x), x != w.length););
                    if (z != Number(z) || '-' !== w.charAt(x))
                        throw new Error('Illegal attachments');
                    y.attachments = Number(z);
                }
                if ('/' === w.charAt(x + 1))
                    for (y.nsp = ''; ++x;) {
                        if (',' === (f = w.charAt(x)))
                            break;
                        if (y.nsp += f, x === w.length)
                            break;
                    }
                else
                    y.nsp = '/';
                var z = w.charAt(x + 1);
                if ('' !== z && Number(z) == z) {
                    for (y.id = ''; ++x;) {
                        var A;
                        if (null == (A = w.charAt(x)) || Number(A) != A) {
                            --x;
                            break;
                        }
                        if (y.id += w.charAt(x), x === w.length)
                            break;
                    }
                    y.id = Number(y.id);
                }
                if (w.charAt(++x)) {
                    var A = function(B) {
                        try {
                            return JSON.parse(B);
                        } catch (B) {
                            return !1;
                        }
                    }(w.substr(x));
                    if (!(!1 !== A && (y.type === j || r(A))))
                        return _y('invalid payload');
                    y.data = A;
                }
                return o('decoded %s as %j', w, y), y;
            }(u), k === v.type || l === v.type ? (this.reconstructor = new _x(v), 0 === this.reconstructor.reconPack.attachments && this.emit('decoded', v)) : this.emit('decoded', v);
        else {
            if (!s(u) && !u.base64)
                throw new Error('Unknown type: ' + u);
            if (!this.reconstructor)
                throw new Error('got binary data when not reconstructing a packet');
            (v = this.reconstructor.takeBinaryData(u)) && (this.reconstructor = null, this.emit('decoded', v));
        }
    }, _w.prototype.destroy = function() {
        this.reconstructor && this.reconstructor.finishedReconstruction();
    }, _x.prototype.takeBinaryData = function(u) {
        if (this.buffers.push(u), this.buffers.length === this.reconPack.attachments) {
            var v = q.reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), v;
        }
        return null;
    }, _x.prototype.finishedReconstruction = function() {
        this.reconPack = null, this.buffers = [];
    };
}), a.register('AUo1s', function(b, c) {
    var d = a('jOoxx');

    function e() {
        var f;
        try {
            f = c.storage.debug;
        } catch (f) {}
        return !f && void 0 !== d && 'env' in d && (f = void 0), f;
    }
    (c = b.exports = a('qcah+')).log = function() {
        return 'object' == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }, c.formatArgs = function(e) {
        var f = this.useColors;
        if (e[0] = (f ? '%c' : '') + this.namespace + (f ? ' %c' : ' ') + e[0] + (f ? '%c ' : ' ') + '+' + c.humanize(this.diff), !f)
            return;
        var g = 'color: ' + this.color;
        e.splice(1, 0, g, 'color: inherit');
        var h = 0,
            i = 0;
        e[0].replace(/%[a-zA-Z%]/g, function(j) {
            '%%' !== j && (h++, '%c' === j && (i = h));
        }), e.splice(i, 0, g);
    }, c.save = function(e) {
        try {
            null == e ? c.storage.removeItem('debug') : c.storage.debug = e;
        } catch (e) {}
    }, c.load = _i, c.useColors = function() {
        return !('undefined' == typeof window || !window.process || 'renderer' !== window.process.type) || ('undefined' == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ('undefined' != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || 'undefined' != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }, c.storage = 'undefined' != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
        try {
            return window.localStorage;
        } catch (b) {}
    }(), c.colors = [
        '#0000CC',
        '#0000FF',
        '#0033CC',
        '#0033FF',
        '#0066CC',
        '#0066FF',
        '#0099CC',
        '#0099FF',
        '#00CC00',
        '#00CC33',
        '#00CC66',
        '#00CC99',
        '#00CCCC',
        '#00CCFF',
        '#3300CC',
        '#3300FF',
        '#3333CC',
        '#3333FF',
        '#3366CC',
        '#3366FF',
        '#3399CC',
        '#3399FF',
        '#33CC00',
        '#33CC33',
        '#33CC66',
        '#33CC99',
        '#33CCCC',
        '#33CCFF',
        '#6600CC',
        '#6600FF',
        '#6633CC',
        '#6633FF',
        '#66CC00',
        '#66CC33',
        '#9900CC',
        '#9900FF',
        '#9933CC',
        '#9933FF',
        '#99CC00',
        '#99CC33',
        '#CC0000',
        '#CC0033',
        '#CC0066',
        '#CC0099',
        '#CC00CC',
        '#CC00FF',
        '#CC3300',
        '#CC3333',
        '#CC3366',
        '#CC3399',
        '#CC33CC',
        '#CC33FF',
        '#CC6600',
        '#CC6633',
        '#CC9900',
        '#CC9933',
        '#CCCC00',
        '#CCCC33',
        '#FF0000',
        '#FF0033',
        '#FF0066',
        '#FF0099',
        '#FF00CC',
        '#FF00FF',
        '#FF3300',
        '#FF3333',
        '#FF3366',
        '#FF3399',
        '#FF33CC',
        '#FF33FF',
        '#FF6600',
        '#FF6633',
        '#FF9900',
        '#FF9933',
        '#FFCC00',
        '#FFCC33'
    ], c.formatters.j = function(e) {
        try {
            return JSON.stringify(e);
        } catch (e) {
            return '[UnexpectedJSONParseError]: ' + e.message;
        }
    }, c.enable(_i());
}), a.register('qcah+', function(b, c) {
    function d(e) {
        var f;

        function g() {
            if (g.enabled) {
                var h = g,
                    _i = +new Date(),
                    j = _i - (f || _i);
                h.diff = j, h.prev = f, h.curr = _i, f = _i;
                for (var k = new Array(arguments.length), l = 0; l < k.length; l++)
                    k[l] = arguments[l];
                k[0] = c.coerce(k[0]), 'string' != typeof k[0] && k.unshift('%O');
                var m = 0;
                k[0] = k[0].replace(/%([a-zA-Z%])/g, function(n, o) {
                    if ('%%' === n)
                        return n;
                    m++;
                    var p = c.formatters[o];
                    if ('function' == typeof p) {
                        var q = k[m];
                        n = p.call(h, q), k.splice(m, 1), m--;
                    }
                    return n;
                }), c.formatArgs.call(h, k);
                var n = g.log || c.log || console.log.bind(console);
                n.apply(h, k);
            }
        }
        return d.namespace = e, d.enabled = c.enabled(e), d.useColors = c.useColors(), d.color = function(g) {
            var h, i = 0;
            for (h in g)
                i = (i << 5) - i + g.charCodeAt(h), i |= 0;
            return c.colors[Math.abs(i) % c.colors.length];
        }(e), d.destroy = _d, 'function' == typeof c.init && c.init(d), c.instances.push(d), d;
    }

    function _d() {
        var e = c.instances.indexOf(this);
        return -1 !== e && (c.instances.splice(e, 1), !0);
    }
    (c = b.exports = _f.debug = _f.default = _f).coerce = function(d) {
        return d instanceof Error ? d.stack || d.message : d;
    }, c.disable = function() {
        c.enable('');
    }, c.enable = function(d) {
        var e;
        c.save(d), c.names = [], c.skips = [];
        var _f = ('string' == typeof d ? d : '').split(/[\s,]+/),
            g = _f.length;
        for (e = 0; e < g; e++)
            _f[e] && ('-' === (d = _f[e].replace(/\*/g, '.*?'))[0] ? c.skips.push(new RegExp('^' + d.substr(1) + '$')) : c.names.push(new RegExp('^' + d + '$')));
        for (e = 0; e < c.instances.length; e++) {
            var h = c.instances[e];
            h.enabled = c.enabled(h.namespace);
        }
    }, c.enabled = function(d) {
        if ('*' === d[d.length - 1])
            return !0;
        var e, f;
        for (e = 0, f = c.skips.length; e < f; e++)
            if (c.skips[e].test(d))
                return !1;
        for (e = 0, f = c.names.length; e < f; e++)
            if (c.names[e].test(d))
                return !0;
        return !1;
    }, c.humanize = a('NjJJg'), c.instances = [], c.names = [], c.skips = [], c.formatters = {};
}), a.register('NjJJg', function(b, c) {
    var d = 1000,
        e = 60000,
        f = 3600000,
        g = 86400000,
        h = 31557600000;

    function i(j, k, l) {
        if (!(j < k))
            return j < 1.5 * k ? Math.floor(j / k) + ' ' + l : Math.ceil(j / k) + ' ' + l + 's';
    }
    b.exports = function(i, j) {
        j = j || {};
        var k, l = typeof i;
        if ('string' === l && i.length > 0)
            return function(m) {
                if ((m = String(m)).length > 100)
                    return;
                var n = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(m);
                if (!n)
                    return;
                var o = parseFloat(n[1]);
                switch ((n[2] || 'ms').toLowerCase()) {
                    case 'years':
                    case 'year':
                    case 'yrs':
                    case 'yr':
                    case 'y':
                        return o * h;
                    case 'days':
                    case 'day':
                    case 'd':
                        return o * g;
                    case 'hours':
                    case 'hour':
                    case 'hrs':
                    case 'hr':
                    case 'h':
                        return o * f;
                    case 'minutes':
                    case 'minute':
                    case 'mins':
                    case 'min':
                    case 'm':
                        return o * e;
                    case 'seconds':
                    case 'second':
                    case 'secs':
                    case 'sec':
                    case 's':
                        return o * d;
                    case 'milliseconds':
                    case 'millisecond':
                    case 'msecs':
                    case 'msec':
                    case 'ms':
                        return o;
                    default:
                        return;
                }
            }(i);
        if ('number' === l && !1 === isNaN(i))
            return j.long ? _g(k = i, g, 'day') || _g(k, f, 'hour') || _g(k, e, 'minute') || _g(k, d, 'second') || k + ' ms' : function(m) {
                return m >= g ? Math.round(m / g) + 'd' : m >= f ? Math.round(m / f) + 'h' : m >= e ? Math.round(m / e) + 'm' : m >= d ? Math.round(m / d) + 's' : m + 'ms';
            }(i);
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(i));
    };
}), a.register('Sdfzv', function(b, c) {
    function d(e) {
        if (e)
            return function(f) {
                for (var g in d.prototype)
                    f[g] = d.prototype[g];
                return f;
            }(e);
    }
    b.exports = a, a.prototype.on = a.prototype.addEventListener = function(d, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks['$' + d] = this._callbacks['$' + d] || []).push(e), this;
    }, a.prototype.once = function(d, e) {
        function f() {
            this.off(d, f), e.apply(this, arguments);
        }
        return a.fn = e, this.on(d, a), this;
    }, a.prototype.off = a.prototype.removeListener = a.prototype.removeAllListeners = a.prototype.removeEventListener = function(d, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
            return this._callbacks = {}, this;
        var f, g = this._callbacks['$' + d];
        if (!g)
            return this;
        if (1 == arguments.length)
            return delete this._callbacks['$' + d], this;
        for (var h = 0; h < g.length; h++)
            if ((f = g[h]) === e || f.fn === e) {
                g.splice(h, 1);
                break;
            }
        return 0 === g.length && delete this._callbacks['$' + d], this;
    }, a.prototype.emit = function(d) {
        this._callbacks = this._callbacks || {};
        for (var e = new Array(arguments.length - 1), f = this._callbacks['$' + d], g = 1; g < arguments.length; g++)
            e[g - 1] = arguments[g];
        if (f) {
            g = 0;
            for (var h = (f = f.slice(0)).length; g < h; ++g)
                f[g].apply(this, e);
        }
        return this;
    }, a.prototype.listeners = function(d) {
        return this._callbacks = this._callbacks || {}, this._callbacks['$' + d] || [];
    }, a.prototype.hasListeners = function(d) {
        return !!this.listeners(d).length;
    };
}), a.register('pqS04', function(b, c) {
    var d, e, f;
    _g(b.exports, 'deconstructPacket', function() {
        return d;
    }, function(_g) {
        return d = _g;
    }), _g(b.exports, 'reconstructPacket', function() {
        return e;
    }, function(_g) {
        return e = _g;
    }), _g(b.exports, 'removeBlobs', function() {
        return f;
    }, function(_g) {
        return f = _g;
    });
    var _g = a('0/IJA0'),
        h = a('XMDsA'),
        i = Object.prototype.toString,
        j = 'function' == typeof Blob || 'undefined' != typeof Blob && '[object BlobConstructor]' === i.call(Blob),
        k = 'function' == typeof File || 'undefined' != typeof File && '[object FileConstructor]' === i.call(File);

    function l(m, n) {
        if (!m)
            return m;
        if (h(m)) {
            var o = {
                _placeholder: !0,
                num: n.length
            };
            return n.push(m), o;
        }
        if (_g(m)) {
            for (var o = new Array(m.length), p = 0; p < m.length; p++)
                o[p] = l(m[p], n);
            return o;
        }
        if ('object' == typeof m && !(m instanceof Date)) {
            c = {};
            for (var o in m)
                c[o] = l(m[o], n);
            return c;
        }
        return m;
    }

    function l(m, n) {
        if (!m)
            return m;
        if (m && m._placeholder)
            return n[m.num];
        if (_g(m))
            for (var o = 0; o < m.length; o++)
                m[o] = l(m[o], n);
        else if ('object' == typeof m)
            for (var p in m)
                m[p] = l(m[p], n);
        return m;
    }
    d = function(l) {
        var m = [],
            n = l.data,
            o = l;
        return o.data = _s(n, m), o.attachments = m.length, {
            packet: o,
            buffers: m
        };
    }, e = function(l, m) {
        return l.data = _t(l.data, m), l.attachments = void 0, l;
    }, f = function(l, m) {
        var n = 0,
            o = l;
        ! function l(p, q, r) {
            if (!p)
                return p;
            if (j && p instanceof Blob || k && p instanceof File) {
                n++;
                var s = new FileReader();
                s.onload = function() {
                    r ? r[q] = this.result : o = this.result, --n || m(o);
                }, s.readAsArrayBuffer(p);
            } else if (_g(p))
                for (var _s = 0; _s < p.length; _s++)
                    l(p[_s], _s, p);
            else if ('object' == typeof p && !h(p))
                for (var _t in p)
                    l(p[_t], _t, p);
        }(o), n || m(o);
    };
}), a.register('0/IJA0', function(b, c) {
    var d = {}.toString;
    b.exports = Array.isArray || function(e) {
        return '[object Array]' == d.call(e);
    };
}), a.register('XMDsA', function(b, c) {
    var d = a('uOKha').Buffer;
    b.exports = function(e) {
        return _e && d.isBuffer(e) || _f && (e instanceof ArrayBuffer || function(f) {
            return 'function' == typeof ArrayBuffer.isView ? ArrayBuffer.isView(f) : f.buffer instanceof ArrayBuffer;
        }(e));
    };
    var _e = 'function' == typeof d && 'function' == typeof d.isBuffer,
        _f = 'function' == typeof ArrayBuffer;
}), a.register('1oUTh', function(b, c) {
    var d = a('G6PpT'),
        e = a('d6hPe'),
        f = a('Sdfzv'),
        g = a('cPNNl'),
        h = a('qwpKx'),
        i = a('wZMr5'),
        j = a('7y3Xs')('socket.io-client:manager'),
        k = a('Q15Qt'),
        l = a('vQXs5'),
        m = Object.prototype.hasOwnProperty;

    function n(o, p) {
        if (!(this instanceof n))
            return new n(o, p);
        o && 'object' == typeof o && (p = o, o = void 0), (p = p || {}).path = p.path || '/socket.io', this.nsps = {}, this.subs = [], this.opts = p, this.reconnection(!1 !== p.reconnection), this.reconnectionAttempts(p.reconnectionAttempts || 1 / 0), this.reconnectionDelay(p.reconnectionDelay || 1000), this.reconnectionDelayMax(p.reconnectionDelayMax || 5000), this.randomizationFactor(p.randomizationFactor || 0.5), this.backoff = new l({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(null == p.timeout ? 20000 : p.timeout), this.readyState = 'closed', this.uri = o, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
        var q = p.parser || g;
        this.encoder = new q.Encoder(), this.decoder = new q.Decoder(), this.autoConnect = !1 !== p.autoConnect, this.autoConnect && this.open();
    }
    b.exports = _m, _m.prototype.emitAll = function() {
        for (var n in (this.emit.apply(this, arguments), this.nsps))
            m.call(this.nsps, n) && this.nsps[n].emit.apply(this.nsps[n], arguments);
    }, _m.prototype.updateSocketIds = function() {
        for (var n in this.nsps)
            m.call(this.nsps, n) && (this.nsps[n].id = this.generateId(n));
    }, _m.prototype.generateId = function(n) {
        return ('/' === n ? '' : n + '#') + this.engine.id;
    }, f(_m.prototype), _m.prototype.reconnection = function(n) {
        return arguments.length ? (this._reconnection = !!n, this) : this._reconnection;
    }, _m.prototype.reconnectionAttempts = function(n) {
        return arguments.length ? (this._reconnectionAttempts = n, this) : this._reconnectionAttempts;
    }, _m.prototype.reconnectionDelay = function(n) {
        return arguments.length ? (this._reconnectionDelay = n, this.backoff && this.backoff.setMin(n), this) : this._reconnectionDelay;
    }, _m.prototype.randomizationFactor = function(n) {
        return arguments.length ? (this._randomizationFactor = n, this.backoff && this.backoff.setJitter(n), this) : this._randomizationFactor;
    }, _m.prototype.reconnectionDelayMax = function(n) {
        return arguments.length ? (this._reconnectionDelayMax = n, this.backoff && this.backoff.setMax(n), this) : this._reconnectionDelayMax;
    }, _m.prototype.timeout = function(n) {
        return arguments.length ? (this._timeout = n, this) : this._timeout;
    }, _m.prototype.maybeReconnectOnOpen = function() {
        !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
    }, _m.prototype.open = _m.prototype.connect = function(n, o) {
        if (j('readyState %s', this.readyState), ~this.readyState.indexOf('open'))
            return this;
        j('opening %s', this.uri), this.engine = d(this.uri, this.opts);
        var p = this.engine,
            q = this;
        this.readyState = 'opening', this.skipReconnect = !1;
        var r = h(p, 'open', function() {
                q.onopen(), n && n();
            }),
            s = h(p, 'error', function(t) {
                if (j('connect_error'), q.cleanup(), q.readyState = 'closed', q.emitAll('connect_error', t), n) {
                    var u = new Error('Connection error');
                    u.data = t, n(u);
                } else
                    q.maybeReconnectOnOpen();
            });
        if (!1 !== this._timeout) {
            var t = this._timeout;
            j('connect attempt will timeout after %d', t), 0 === t && r.destroy();
            var u = setTimeout(function() {
                j('connect attempt timed out after %d', t), r.destroy(), p.close(), p.emit('error', 'timeout'), q.emitAll('connect_timeout', t);
            }, t);
            this.subs.push({
                destroy: function() {
                    clearTimeout(u);
                }
            });
        }
        return this.subs.push(r), this.subs.push(s), this;
    }, _m.prototype.onopen = function() {
        j('open'), this.cleanup(), this.readyState = 'open', this.emit('open');
        var n = this.engine;
        this.subs.push(h(n, 'data', i(this, 'ondata'))), this.subs.push(h(n, 'ping', i(this, 'onping'))), this.subs.push(h(n, 'pong', i(this, 'onpong'))), this.subs.push(h(n, 'error', i(this, 'onerror'))), this.subs.push(h(n, 'close', i(this, 'onclose'))), this.subs.push(h(this.decoder, 'decoded', i(this, 'ondecoded')));
    }, _m.prototype.onping = function() {
        this.lastPing = new Date(), this.emitAll('ping');
    }, _m.prototype.onpong = function() {
        this.emitAll('pong', new Date() - this.lastPing);
    }, _m.prototype.ondata = function(n) {
        this.decoder.add(n);
    }, _m.prototype.ondecoded = function(n) {
        this.emit('packet', n);
    }, _m.prototype.onerror = function(n) {
        j('error', n), this.emitAll('error', n);
    }, _m.prototype.socket = function(n, o) {
        var p = this.nsps[n];
        if (!p) {
            p = new e(this, n, o), this.nsps[n] = p;
            var q = this;
            p.on('connecting', f), p.on('connect', function() {
                p.id = q.generateId(n);
            }), this.autoConnect && f();
        }

        function q() {
            ~k(d.connecting, p) || d.connecting.push(p);
        }
        return p;
    }, _m.prototype.destroy = function(n) {
        var o = k(this.connecting, n);
        ~o && this.connecting.splice(o, 1), this.connecting.length || this.close();
    }, _m.prototype.packet = function(n) {
        j('writing packet %j', n);
        var o = this;
        n.query && 0 === n.type && (n.nsp += '?' + n.query), o.encoding ? o.packetBuffer.push(n) : (o.encoding = !0, this.encoder.encode(n, function(p) {
            for (var q = 0; q < p.length; q++)
                o.engine.write(p[q], n.options);
            o.encoding = !1, o.processPacketQueue();
        }));
    }, _m.prototype.processPacketQueue = function() {
        if (this.packetBuffer.length > 0 && !this.encoding) {
            var n = this.packetBuffer.shift();
            this.packet(n);
        }
    }, _m.prototype.cleanup = function() {
        j('cleanup');
        for (var n = this.subs.length, o = 0; o < n; o++) {
            this.subs.shift().destroy();
        }
        this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
    }, _m.prototype.close = _m.prototype.disconnect = function() {
        j('disconnect'), this.skipReconnect = !0, this.reconnecting = !1, 'opening' === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = 'closed', this.engine && this.engine.close();
    }, _m.prototype.onclose = function(n) {
        j('onclose'), this.cleanup(), this.backoff.reset(), this.readyState = 'closed', this.emit('close', n), this._reconnection && !this.skipReconnect && this.reconnect();
    }, _m.prototype.reconnect = function() {
        if (this.reconnecting || this.skipReconnect)
            return this;
        var n = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            j('reconnect failed'), this.backoff.reset(), this.emitAll('reconnect_failed'), this.reconnecting = !1;
        else {
            var o = this.backoff.duration();
            j('will wait %dms before reconnect attempt', o), this.reconnecting = !0;
            var p = setTimeout(function() {
                n.skipReconnect || (j('attempting reconnect'), n.emitAll('reconnect_attempt', n.backoff.attempts), n.emitAll('reconnecting', n.backoff.attempts), n.skipReconnect || n.open(function(q) {
                    q ? (j('reconnect attempt error'), n.reconnecting = !1, n.reconnect(), n.emitAll('reconnect_error', q.data)) : (j('reconnect success'), n.onreconnect());
                }));
            }, o);
            this.subs.push({
                destroy: function() {
                    clearTimeout(p);
                }
            });
        }
    }, _m.prototype.onreconnect = function() {
        var n = this.backoff.attempts;
        this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll('reconnect', n);
    };
}), a.register('G6PpT', function(b, c) {
    b.exports = a('TACwv'), b.exports.parser = a('K6Ajl');
}), a.register('TACwv', function(b, c) {
    var d = a('Sdfzv'),
        e = a('jT4xl')('engine.io-client:socket'),
        f = a('Q15Qt'),
        g = a('ybIxY'),
        h = a('ENnBl');

    function i(j, k) {
        if (!(this instanceof i))
            return new i(j, k);
        k = k || {}, j && 'object' == typeof j && (k = j, j = null), j ? (j = g(j), k.hostname = j.host, k.secure = 'https' === j.protocol || 'wss' === j.protocol, k.port = j.port, j.query && (k.query = j.query)) : k.host && (k.hostname = g(k.host).host), this.secure = null != k.secure ? k.secure : 'undefined' != typeof location && 'https:' === location.protocol, k.hostname && !k.port && (k.port = this.secure ? '443' : '80'), this.agent = k.agent || !1, this.hostname = k.hostname || ('undefined' != typeof location ? location.hostname : 'localhost'), this.port = k.port || ('undefined' != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = k.query || {}, 'string' == typeof this.query && (this.query = h.decode(this.query)), this.upgrade = !1 !== k.upgrade, this.path = (k.path || '/engine.io').replace(/\/$/, '') + '/', this.forceJSONP = !!k.forceJSONP, this.jsonp = !1 !== k.jsonp, this.forceBase64 = !!k.forceBase64, this.enablesXDR = !!k.enablesXDR, this.withCredentials = !1 !== k.withCredentials, this.timestampParam = k.timestampParam || 't', this.timestampRequests = k.timestampRequests, this.transports = k.transports || [
            'polling',
            'websocket'
        ], this.transportOptions = k.transportOptions || {}, this.readyState = '', this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = k.policyPort || 843, this.rememberUpgrade = k.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = k.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== k.perMessageDeflate && (k.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = k.pfx || null, this.key = k.key || null, this.passphrase = k.passphrase || null, this.cert = k.cert || null, this.ca = k.ca || null, this.ciphers = k.ciphers || null, this.rejectUnauthorized = void 0 === k.rejectUnauthorized || k.rejectUnauthorized, this.forceNode = !!k.forceNode, this.isReactNative = 'undefined' != typeof navigator && 'string' == typeof navigator.product && 'reactnative' === navigator.product.toLowerCase(), ('undefined' == typeof self || this.isReactNative) && (k.extraHeaders && Object.keys(k.extraHeaders).length > 0 && (this.extraHeaders = k.extraHeaders), k.localAddress && (this.localAddress = k.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open();
    }
    b.exports = _h, _h.priorWebsocketSuccess = !1, d(_h.prototype), _h.protocol = a('K6Ajl').protocol, _h.Socket = _h, _h.Transport = a('nQuX9'), _h.transports = a('vUjw6'), _h.parser = a('K6Ajl'), _h.prototype.createTransport = function(i) {
        e('creating transport "%s"', i);
        var j = function(k) {
            var l = {};
            for (var m in k)
                k.hasOwnProperty(m) && (l[m] = k[m]);
            return l;
        }(this.query);
        j.EIO = a('K6Ajl').protocol, j.transport = i;
        var k = this.transportOptions[i] || {};
        return this.id && (j.sid = this.id), new(a('vUjw6'))[i]({
            query: j,
            socket: this,
            agent: k.agent || this.agent,
            hostname: k.hostname || this.hostname,
            port: k.port || this.port,
            secure: k.secure || this.secure,
            path: k.path || this.path,
            forceJSONP: k.forceJSONP || this.forceJSONP,
            jsonp: k.jsonp || this.jsonp,
            forceBase64: k.forceBase64 || this.forceBase64,
            enablesXDR: k.enablesXDR || this.enablesXDR,
            withCredentials: k.withCredentials || this.withCredentials,
            timestampRequests: k.timestampRequests || this.timestampRequests,
            timestampParam: k.timestampParam || this.timestampParam,
            policyPort: k.policyPort || this.policyPort,
            pfx: k.pfx || this.pfx,
            key: k.key || this.key,
            passphrase: k.passphrase || this.passphrase,
            cert: k.cert || this.cert,
            ca: k.ca || this.ca,
            ciphers: k.ciphers || this.ciphers,
            rejectUnauthorized: k.rejectUnauthorized || this.rejectUnauthorized,
            perMessageDeflate: k.perMessageDeflate || this.perMessageDeflate,
            extraHeaders: k.extraHeaders || this.extraHeaders,
            forceNode: k.forceNode || this.forceNode,
            localAddress: k.localAddress || this.localAddress,
            requestTimeout: k.requestTimeout || this.requestTimeout,
            protocols: k.protocols || void 0,
            isReactNative: this.isReactNative
        });
    }, _h.prototype.open = function() {
        var i;
        if (this.rememberUpgrade && _h.priorWebsocketSuccess && -1 !== this.transports.indexOf('websocket'))
            i = 'websocket';
        else {
            if (0 === this.transports.length) {
                var j = this;
                return void setTimeout(function() {
                    j.emit('error', 'No transports available');
                }, 0);
            }
            i = this.transports[0];
        }
        this.readyState = 'opening';
        try {
            i = this.createTransport(i);
        } catch (i) {
            return this.transports.shift(), void this.open();
        }
        i.open(), this.setTransport(i);
    }, _h.prototype.setTransport = function(i) {
        e('setting transport %s', i.name);
        var j = this;
        this.transport && (e('clearing existing transport %s', this.transport.name), this.transport.removeAllListeners()), this.transport = i, i.on('drain', function() {
            j.onDrain();
        }).on('packet', function(k) {
            j.onPacket(k);
        }).on('error', function(k) {
            j.onError(k);
        }).on('close', function() {
            j.onClose('transport close');
        });
    }, _h.prototype.probe = function(i) {
        e('probing transport "%s"', i);
        var j = this.createTransport(i, {
                probe: 1
            }),
            k = !1,
            l = this;

        function m() {
            if (l.onlyBinaryUpgrades) {
                var n = !this.supportsBinary && l.transport.supportsBinary;
                k = k || n;
            }
            k || (e('probe transport "%s" opened', i), j.send([{
                type: 'ping',
                data: 'probe'
            }]), j.once('packet', function(n) {
                if (!k)
                    if ('pong' === n.type && 'probe' === n.data) {
                        if (e('probe transport "%s" pong', i), l.upgrading = !0, l.emit('upgrading', j), !j)
                            return;
                        _h.priorWebsocketSuccess = 'websocket' === j.name, e('pausing current transport "%s"', l.transport.name), l.transport.pause(function() {
                            k || 'closed' !== l.readyState && (e('changing transport and sending upgrade packet'), _m(), l.setTransport(j), j.send([{
                                type: 'upgrade'
                            }]), l.emit('upgrade', j), j = null, l.upgrading = !1, l.flush());
                        });
                    } else {
                        e('probe transport "%s" failed', i);
                        var o = new Error('probe error');
                        o.transport = j.name, l.emit('upgradeError', o);
                    }
            }));
        }

        function m() {
            k || (k = !0, _m(), j.close(), j = null);
        }

        function m(n) {
            var o = new Error('probe error: ' + n);
            o.transport = j.name, g(), e('probe transport "%s" failed because of error: %s', i, n), l.emit('upgradeError', o);
        }

        function m() {
            h('transport closed');
        }

        function m() {
            h('socket closed');
        }

        function m(n) {
            j && n.name !== j.name && (e('"%s" works - aborting "%s"', n.name, j.name), g());
        }

        function _m() {
            j.removeListener('open', f), j.removeListener('error', h), j.removeListener('close', _i), l.removeListener('close', _j), l.removeListener('upgrading', _j);
        }
        _h.priorWebsocketSuccess = !1, j.once('open', f), j.once('error', h), j.once('close', _i), this.once('close', _j), this.once('upgrading', _j), j.open();
    }, _h.prototype.onOpen = function() {
        if (e('socket open'), this.readyState = 'open', _h.priorWebsocketSuccess = 'websocket' === this.transport.name, this.emit('open'), this.flush(), 'open' === this.readyState && this.upgrade && this.transport.pause) {
            e('starting upgrade probes');
            for (var i = 0, j = this.upgrades.length; i < j; i++)
                this.probe(this.upgrades[i]);
        }
    }, _h.prototype.onPacket = function(i) {
        if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState)
            switch (e('socket receive: type "%s", data "%s"', i.type, i.data), this.emit('packet', i), this.emit('heartbeat'), i.type) {
                case 'open':
                    this.onHandshake(JSON.parse(i.data));
                    break;
                case 'pong':
                    this.setPing(), this.emit('pong');
                    break;
                case 'error':
                    var j = new Error('server error');
                    j.code = i.data, this.onError(j);
                    break;
                case 'message':
                    this.emit('data', i.data), this.emit('message', i.data);
            }
        else
            e('packet received with socket readyState "%s"', this.readyState);
    }, _h.prototype.onHandshake = function(i) {
        this.emit('handshake', i), this.id = i.sid, this.transport.query.sid = i.sid, this.upgrades = this.filterUpgrades(i.upgrades), this.pingInterval = i.pingInterval, this.pingTimeout = i.pingTimeout, this.onOpen(), 'closed' !== this.readyState && (this.setPing(), this.removeListener('heartbeat', this.onHeartbeat), this.on('heartbeat', this.onHeartbeat));
    }, _h.prototype.onHeartbeat = function(i) {
        clearTimeout(this.pingTimeoutTimer);
        var j = this;
        j.pingTimeoutTimer = setTimeout(function() {
            'closed' !== j.readyState && j.onClose('ping timeout');
        }, i || j.pingInterval + j.pingTimeout);
    }, _h.prototype.setPing = function() {
        var i = this;
        clearTimeout(i.pingIntervalTimer), i.pingIntervalTimer = setTimeout(function() {
            e('writing ping packet - expecting pong within %sms', i.pingTimeout), i.ping(), i.onHeartbeat(i.pingTimeout);
        }, i.pingInterval);
    }, _h.prototype.ping = function() {
        var i = this;
        this.sendPacket('ping', function() {
            i.emit('ping');
        });
    }, _h.prototype.onDrain = function() {
        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit('drain') : this.flush();
    }, _h.prototype.flush = function() {
        'closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (e('flushing %d packets in socket', this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit('flush'));
    }, _h.prototype.write = _h.prototype.send = function(i, j, k) {
        return this.sendPacket('message', i, j, k), this;
    }, _h.prototype.sendPacket = function(i, j, k, l) {
        if ('function' == typeof j && (l = j, j = void 0), 'function' == typeof k && (l = k, k = null), 'closing' !== this.readyState && 'closed' !== this.readyState) {
            (k = k || {}).compress = !1 !== k.compress;
            var m = {
                type: i,
                data: j,
                options: k
            };
            this.emit('packetCreate', m), this.writeBuffer.push(m), l && this.once('flush', l), this.flush();
        }
    }, _h.prototype.close = function() {
        if ('opening' === this.readyState || 'open' === this.readyState) {
            this.readyState = 'closing';
            var i = this;
            this.writeBuffer.length ? this.once('drain', function() {
                this.upgrading ? d() : c();
            }) : this.upgrading ? d() : c();
        }

        function i() {
            b.onClose('forced close'), e('socket closing - telling transport to close'), b.transport.close();
        }

        function i() {
            b.removeListener('upgrade', i), b.removeListener('upgradeError', i), c();
        }

        function i() {
            b.once('upgrade', a), b.once('upgradeError', a);
        }
        return this;
    }, _h.prototype.onError = function(i) {
        e('socket error %j', i), _h.priorWebsocketSuccess = !1, this.emit('error', i), this.onClose('transport error', i);
    }, _h.prototype.onClose = function(i, j) {
        if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
            e('socket close with reason: "%s"', i);
            clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners('close'), this.transport.close(), this.transport.removeAllListeners(), this.readyState = 'closed', this.id = null, this.emit('close', i, j), this.writeBuffer = [], this.prevBufferLen = 0;
        }
    }, _h.prototype.filterUpgrades = function(i) {
        for (var j = [], k = 0, l = i.length; k < l; k++)
            ~f(this.transports, i[k]) && j.push(i[k]);
        return j;
    };
}), a.register('vUjw6', function(b, c) {
    var d, e;
    _f(b.exports, 'polling', function() {
        return d;
    }, function(_f) {
        return d = _f;
    }), _f(b.exports, 'websocket', function() {
        return e;
    }, function(_f) {
        return e = _f;
    });
    var f = a('pSWUY'),
        g = a('p5eKx'),
        _h = a('HfZLI'),
        _i = a('/TArG');
    d = function(j) {
        var k = !1,
            l = !1,
            m = !1 !== j.jsonp;
        if ('undefined' != typeof location) {
            var n = 'https:' === location.protocol,
                o = location.port;
            o || (o = n ? 443 : 80), k = j.hostname !== location.hostname || o !== j.port, l = j.secure !== n;
        }
        if (j.xdomain = k, j.xscheme = l, 'open' in new f(j) && !j.forceJSONP)
            return new g(j);
        if (!m)
            throw new Error('JSONP disabled');
        return new _h(j);
    }, e = _i;
}), a.register('pSWUY', function(b, c) {
    var d = a('sn0RF'),
        e = a('uSeo8');
    b.exports = function(f) {
        var g = f.xdomain,
            h = f.xscheme,
            i = f.enablesXDR;
        try {
            if ('undefined' != typeof XMLHttpRequest && (!g || d))
                return new XMLHttpRequest();
        } catch (f) {}
        try {
            if ('undefined' != typeof XDomainRequest && !h && i)
                return new XDomainRequest();
        } catch (f) {}
        if (!g)
            try {
                return new e[(['Active'].concat('Object').join('X'))]('Microsoft.XMLHTTP');
            } catch (f) {}
    };
}), a.register('sn0RF', function(b, c) {
    try {
        b.exports = 'undefined' != typeof XMLHttpRequest && 'withCredentials' in new XMLHttpRequest();
    } catch (c) {
        b.exports = !1;
    }
}), a.register('uSeo8', function(b, c) {
    b.exports = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : Function('return this')();
}), a.register('p5eKx', function(b, c) {
    var d = a('pSWUY'),
        e = a('AlMZ2'),
        f = a('Sdfzv'),
        g = a('9wKBq'),
        h = a('jT4xl')('engine.io-client:polling-xhr'),
        i = a('uSeo8');

    function j() {}

    function _j(k) {
        if (e.call(this, k), this.requestTimeout = k.requestTimeout, this.extraHeaders = k.extraHeaders, 'undefined' != typeof location) {
            var l = 'https:' === location.protocol,
                m = location.port;
            m || (m = l ? 443 : 80), this.xd = 'undefined' != typeof location && k.hostname !== location.hostname || m !== k.port, this.xs = k.secure !== l;
        }
    }

    function _j(k) {
        this.method = k.method || 'GET', this.uri = k.uri, this.xd = !!k.xd, this.xs = !!k.xs, this.async = !1 !== k.async, this.data = void 0 !== k.data ? k.data : null, this.agent = k.agent, this.isBinary = k.isBinary, this.supportsBinary = k.supportsBinary, this.enablesXDR = k.enablesXDR, this.withCredentials = k.withCredentials, this.requestTimeout = k.requestTimeout, this.pfx = k.pfx, this.key = k.key, this.passphrase = k.passphrase, this.cert = k.cert, this.ca = k.ca, this.ciphers = k.ciphers, this.rejectUnauthorized = k.rejectUnauthorized, this.extraHeaders = k.extraHeaders, this.create();
    }
    if (b.exports = _k, b.exports.Request = _k, g(_k, e), _k.prototype.supportsBinary = !0, _k.prototype.request = function(j) {
            return (j = j || {}).uri = this.uri(), j.xd = this.xd, j.xs = this.xs, j.agent = this.agent || !1, j.supportsBinary = this.supportsBinary, j.enablesXDR = this.enablesXDR, j.withCredentials = this.withCredentials, j.pfx = this.pfx, j.key = this.key, j.passphrase = this.passphrase, j.cert = this.cert, j.ca = this.ca, j.ciphers = this.ciphers, j.rejectUnauthorized = this.rejectUnauthorized, j.requestTimeout = this.requestTimeout, j.extraHeaders = this.extraHeaders, new _k(j);
        }, _k.prototype.doWrite = function(j, k) {
            var l = 'string' != typeof j && void 0 !== j,
                m = this.request({
                    method: 'POST',
                    data: j,
                    isBinary: l
                }),
                n = this;
            m.on('success', k), m.on('error', function(o) {
                n.onError('xhr post error', o);
            }), this.sendXhr = m;
        }, _k.prototype.doPoll = function() {
            h('xhr poll');
            var j = this.request(),
                k = this;
            j.on('data', function(l) {
                k.onData(l);
            }), j.on('error', function(l) {
                k.onError('xhr poll error', l);
            }), this.pollXhr = j;
        }, f(_k.prototype), _k.prototype.create = function() {
            var j = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR
            };
            j.pfx = this.pfx, j.key = this.key, j.passphrase = this.passphrase, j.cert = this.cert, j.ca = this.ca, j.ciphers = this.ciphers, j.rejectUnauthorized = this.rejectUnauthorized;
            var k = this.xhr = new d(j),
                l = this;
            try {
                h('xhr open %s: %s', this.method, this.uri), k.open(this.method, this.uri, this.async);
                try {
                    if (this.extraHeaders)
                        for (var m in (k.setDisableHeaderCheck && k.setDisableHeaderCheck(!0), this.extraHeaders))
                            this.extraHeaders.hasOwnProperty(m) && k.setRequestHeader(m, this.extraHeaders[m]);
                } catch (j) {}
                if ('POST' === this.method)
                    try {
                        this.isBinary ? k.setRequestHeader('Content-type', 'application/octet-stream') : k.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
                    } catch (j) {}
                try {
                    k.setRequestHeader('Accept', '*/*');
                } catch (j) {}
                'withCredentials' in k && (k.withCredentials = this.withCredentials), this.requestTimeout && (k.timeout = this.requestTimeout), this.hasXDR() ? (k.onload = function() {
                    l.onLoad();
                }, k.onerror = function() {
                    l.onError(k.responseText);
                }) : k.onreadystatechange = function() {
                    if (2 === k.readyState)
                        try {
                            var m = k.getResponseHeader('Content-Type');
                            (l.supportsBinary && 'application/octet-stream' === m || 'application/octet-stream; charset=UTF-8' === m) && (k.responseType = 'arraybuffer');
                        } catch (j) {}
                    4 === k.readyState && (200 === k.status || 1223 === k.status ? l.onLoad() : setTimeout(function() {
                        l.onError('number' == typeof k.status ? k.status : 0);
                    }, 0));
                }, h('xhr data %s', this.data), k.send(this.data);
            } catch (j) {
                return void setTimeout(function() {
                    l.onError(j);
                }, 0);
            }
            'undefined' != typeof document && (this.index = _k.requestsCount++, _k.requests[this.index] = this);
        }, _k.prototype.onSuccess = function() {
            this.emit('success'), this.cleanup();
        }, _k.prototype.onData = function(j) {
            this.emit('data', j), this.onSuccess();
        }, _k.prototype.onError = function(j) {
            this.emit('error', j), this.cleanup(!0);
        }, _k.prototype.cleanup = function(j) {
            if (void 0 !== this.xhr && null !== this.xhr) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = _j : this.xhr.onreadystatechange = _j, j)
                    try {
                        this.xhr.abort();
                    } catch (j) {}
                'undefined' != typeof document && delete _k.requests[this.index], this.xhr = null;
            }
        }, _k.prototype.onLoad = function() {
            var j;
            try {
                var k;
                try {
                    k = this.xhr.getResponseHeader('Content-Type');
                } catch (j) {}
                j = ('application/octet-stream' === k || 'application/octet-stream; charset=UTF-8' === k) && this.xhr.response || this.xhr.responseText;
            } catch (j) {
                this.onError(j);
            }
            null != j && this.onData(j);
        }, _k.prototype.hasXDR = function() {
            return 'undefined' != typeof XDomainRequest && !this.xs && this.enablesXDR;
        }, _k.prototype.abort = function() {
            this.cleanup();
        }, _k.requestsCount = 0, _k.requests = {}, 'undefined' != typeof document)
        if ('function' == typeof attachEvent)
            attachEvent('onunload', _j);
        else if ('function' == typeof addEventListener) {
        addEventListener('onpagehide' in i ? 'pagehide' : 'unload', _j, !1);
    }

    function _j() {
        for (var k in _k.requests)
            _k.requests.hasOwnProperty(k) && _k.requests[k].abort();
    }
}), a.register('AlMZ2', function(b, c) {
    var d = a('nQuX9'),
        e = a('ENnBl'),
        f = a('K6Ajl'),
        g = a('9wKBq'),
        h = a('lBZNP'),
        i = a('jT4xl')('engine.io-client:polling');
    b.exports = _k;
    var _j = null != new(a('pSWUY'))({
        xdomain: !1
    }).responseType;

    function _k(l) {
        var m = l && l.forceBase64;
        _j && !m || (this.supportsBinary = !1), d.call(this, l);
    }
    g(_j, d), _j.prototype.name = 'polling', _j.prototype.doOpen = function() {
        this.poll();
    }, _j.prototype.pause = function(k) {
        var l = this;

        function m() {
            i('paused'), l.readyState = 'paused', k();
        }
        if (this.readyState = 'pausing', this.polling || !this.writable) {
            var m = 0;
            this.polling && (i('we are currently polling - waiting to pause'), m++, this.once('pollComplete', function() {
                i('pre-pause polling complete'), --m || a();
            })), this.writable || (i('we are currently writing - waiting to pause'), m++, this.once('drain', function() {
                i('pre-pause writing complete'), --m || a();
            }));
        } else
            a();
    }, _j.prototype.poll = function() {
        i('polling'), this.polling = !0, this.doPoll(), this.emit('poll');
    }, _j.prototype.onData = function(k) {
        var l = this;
        i('polling got data %s', k);
        f.decodePayload(k, this.socket.binaryType, function(m, n, o) {
            if ('opening' === l.readyState && l.onOpen(), 'close' === m.type)
                return l.onClose(), !1;
            l.onPacket(m);
        }), 'closed' !== this.readyState && (this.polling = !1, this.emit('pollComplete'), 'open' === this.readyState ? this.poll() : i('ignoring poll - transport state "%s"', this.readyState));
    }, _j.prototype.doClose = function() {
        var k = this;

        function l() {
            i('writing close packet'), k.write([{
                type: 'close'
            }]);
        }
        'open' === this.readyState ? (i('transport open - closing'), c()) : (i('transport not open - deferring close'), this.once('open', c));
    }, _j.prototype.write = function(k) {
        var l = this;
        this.writable = !1;
        var m = function() {
            l.writable = !0, l.emit('drain');
        };
        f.encodePayload(k, this.supportsBinary, function(n) {
            l.doWrite(n, m);
        });
    }, _j.prototype.uri = function() {
        var k = this.query || {},
            l = this.secure ? 'https' : 'http',
            m = '';
        return !1 !== this.timestampRequests && (k[this.timestampParam] = h()), this.supportsBinary || k.sid || (k.b64 = 1), k = e.encode(k), this.port && ('https' === l && 443 !== Number(this.port) || 'http' === l && 80 !== Number(this.port)) && (m = ':' + this.port), k.length && (k = '?' + k), l + '://' + (-1 !== this.hostname.indexOf(':') ? '[' + this.hostname + ']' : this.hostname) + m + this.path + k;
    };
}), a.register('nQuX9', function(b, c) {
    var d = a('K6Ajl'),
        e = a('Sdfzv');

    function f(g) {
        this.path = g.path, this.hostname = g.hostname, this.port = g.port, this.secure = g.secure, this.query = g.query, this.timestampParam = g.timestampParam, this.timestampRequests = g.timestampRequests, this.readyState = '', this.agent = g.agent || !1, this.socket = g.socket, this.enablesXDR = g.enablesXDR, this.withCredentials = g.withCredentials, this.pfx = g.pfx, this.key = g.key, this.passphrase = g.passphrase, this.cert = g.cert, this.ca = g.ca, this.ciphers = g.ciphers, this.rejectUnauthorized = g.rejectUnauthorized, this.forceNode = g.forceNode, this.isReactNative = g.isReactNative, this.extraHeaders = g.extraHeaders, this.localAddress = g.localAddress;
    }
    b.exports = _e, e(_e.prototype), _e.prototype.onError = function(f, g) {
        var h = new Error(f);
        return h.type = 'TransportError', h.description = g, this.emit('error', h), this;
    }, _e.prototype.open = function() {
        return 'closed' !== this.readyState && '' !== this.readyState || (this.readyState = 'opening', this.doOpen()), this;
    }, _e.prototype.close = function() {
        return 'opening' !== this.readyState && 'open' !== this.readyState || (this.doClose(), this.onClose()), this;
    }, _e.prototype.send = function(f) {
        if ('open' !== this.readyState)
            throw new Error('Transport not open');
        this.write(f);
    }, _e.prototype.onOpen = function() {
        this.readyState = 'open', this.writable = !0, this.emit('open');
    }, _e.prototype.onData = function(f) {
        var g = d.decodePacket(f, this.socket.binaryType);
        this.onPacket(g);
    }, _e.prototype.onPacket = function(f) {
        this.emit('packet', f);
    }, _e.prototype.onClose = function() {
        this.readyState = 'closed', this.emit('close');
    };
}), a.register('K6Ajl', function(b, c) {
    var d, _e, f, g, h, i, _j, _k, l, _m, n;
    _o(b.exports, 'protocol', function() {
        return d;
    }, function(_o) {
        return d = _o;
    }), _o(b.exports, 'packets', function() {
        return _e;
    }, function(_o) {
        return _e = _o;
    }), _o(b.exports, 'encodePacket', function() {
        return f;
    }, function(_o) {
        return f = _o;
    }), _o(b.exports, 'encodeBase64Packet', function() {
        return g;
    }, function(_o) {
        return g = _o;
    }), _o(b.exports, 'decodePacket', function() {
        return h;
    }, function(_o) {
        return h = _o;
    }), _o(b.exports, 'decodeBase64Packet', function() {
        return i;
    }, function(_o) {
        return i = _o;
    }), _o(b.exports, 'encodePayload', function() {
        return _j;
    }, function(_o) {
        return _j = _o;
    }), _o(b.exports, 'encodePayloadAsBlob', function() {
        return _m;
    }, function(_o) {
        return _m = _o;
    }), _o(b.exports, 'encodePayloadAsArrayBuffer', function() {
        return l;
    }, function(_o) {
        return l = _o;
    }), _o(b.exports, 'decodePayload', function() {
        return _k;
    }, function(_o) {
        return _k = _o;
    }), _o(b.exports, 'decodePayloadAsBinary', function() {
        return n;
    }, function(_o) {
        return n = _o;
    });
    var o, p = a('j8bo6'),
        q = a('JNDzM'),
        r = a('MMoW4'),
        s = a('32S9y'),
        _t = a('bK9aW');
    'undefined' != typeof ArrayBuffer && (o = a('49zRX'));
    var u = 'undefined' != typeof navigator && /Android/i.test(navigator.userAgent),
        _v = 'undefined' != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
        _w = u || _v;
    d = 3;
    var _x = _e = {
            open: 0,
            close: 1,
            ping: 2,
            pong: 3,
            message: 4,
            upgrade: 5,
            noop: 6
        },
        _y = p(_x),
        z = {
            type: 'error',
            data: 'parser error'
        },
        A = a('EUf5j');

    function B(C, D, E) {
        for (var F = new Array(C.length), G = s(C.length, E), H = function(I, J, K) {
                D(J, function(L, M) {
                    F[I] = M, K(L, F);
                });
            }, I = 0; I < C.length; I++)
            H(I, C[I], G);
    }
    f = function(B, C, D, E) {
        'function' == typeof C && (E = C, C = !1), 'function' == typeof D && (E = D, D = null);
        var F = void 0 === B.data ? void 0 : B.data.buffer || B.data;
        if ('undefined' != typeof ArrayBuffer && F instanceof ArrayBuffer)
            return function(G, H, I) {
                if (!H)
                    return g(G, I);
                var J = G.data,
                    K = new Uint8Array(J),
                    L = new Uint8Array(1 + J.byteLength);
                L[0] = _x[G.type];
                for (var M = 0; M < K.length; M++)
                    L[M + 1] = K[M];
                return I(L.buffer);
            }(B, C, E);
        if (void 0 !== A && F instanceof A)
            return function(G, H, I) {
                if (!H)
                    return g(G, I);
                if (_w)
                    return function(J, K, L) {
                        if (!K)
                            return g(J, L);
                        var M = new FileReader();
                        return M.onload = function() {
                            f({
                                type: J.type,
                                data: M.result
                            }, K, !0, L);
                        }, M.readAsArrayBuffer(J.data);
                    }(G, H, I);
                var J = new Uint8Array(1);
                J[0] = _x[G.type];
                var K = new A([
                    J.buffer,
                    G.data
                ]);
                return I(K);
            }(B, C, E);
        if (F && F.base64)
            return function(G, H) {
                var I = 'b' + _e[G.type] + G.data.data;
                return H(I);
            }(B, E);
        var G = _x[B.type];
        return void 0 !== B.data && (G += D ? _t.encode(String(B.data), {
            strict: !1
        }) : String(B.data)), E('' + G);
    }, g = function(B, C) {
        var D, E = 'b' + _e[B.type];
        if (void 0 !== A && B.data instanceof A) {
            var F = new FileReader();
            return F.onload = function() {
                var G = F.result.split(',')[1];
                C(E + G);
            }, F.readAsDataURL(B.data);
        }
        try {
            D = String.fromCharCode.apply(null, new Uint8Array(B.data));
        } catch (C) {
            for (var F = new Uint8Array(B.data), G = new Array(F.length), H = 0; H < F.length; H++)
                G[H] = F[H];
            D = String.fromCharCode.apply(null, G);
        }
        return E += btoa(D), C(E);
    }, h = function(B, C, D) {
        if (void 0 === B)
            return z;
        if ('string' == typeof B) {
            if ('b' === B.charAt(0))
                return i(B.substr(1), C);
            if (D && !1 === (B = function(E) {
                    try {
                        E = _t.decode(E, {
                            strict: !1
                        });
                    } catch (E) {
                        return !1;
                    }
                    return E;
                }(B)))
                return z;
            var E = B.charAt(0);
            return Number(E) == E && _y[E] ? B.length > 1 ? {
                type: _y[E],
                data: B.substring(1)
            } : {
                type: _y[E]
            } : z;
        }
        c = new Uint8Array(B)[0];
        var E = r(B, 1);
        return A && 'blob' === C && (E = new A([E])), {
            type: _y[c],
            data: E
        };
    }, i = function(B, C) {
        var D = _y[B.charAt(0)];
        if (!o)
            return {
                type: D,
                data: {
                    base64: !0,
                    data: B.substr(1)
                }
            };
        var E = o.decode(B.substr(1));
        return 'blob' === C && A && (E = new A([E])), {
            type: D,
            data: E
        };
    }, _j = function(B, C, D) {
        'function' == typeof C && (D = C, C = null);
        var E = q(B);
        if (C && E)
            return A && !_w ? _m(B, D) : l(B, D);
        if (!B.length)
            return D('0:');
        S(B, function(F, G) {
            f(F, !!E && C, !1, function(H) {
                G(null, function(I) {
                    return I.length + ':' + I;
                }(H));
            });
        }, function(F, G) {
            return D(G.join(''));
        });
    }, _k = function(B, C, D) {
        if ('string' != typeof B)
            return n(B, C, D);
        var E;
        if ('function' == typeof C && (D = C, C = null), '' === B)
            return D(z, 0, 1);
        for (var F, G, H = '', I = 0, J = B.length; I < J; I++) {
            var K = B.charAt(I);
            if (':' === K) {
                if ('' === H || H != (F = Number(H)))
                    return D(z, 0, 1);
                if (H != (G = B.substr(I + 1, F)).length)
                    return D(z, 0, 1);
                if (G.length) {
                    if (E = h(G, C, !1), z.type === E.type && z.data === E.data)
                        return D(z, 0, 1);
                    if (!1 === D(E, I + F, J))
                        return;
                }
                I += F, H = '';
            } else
                H += K;
        }
        return '' !== H ? D(z, 0, 1) : void 0;
    }, l = function(B, C) {
        if (!B.length)
            return C(new ArrayBuffer(0));
        S(B, function(D, E) {
            f(D, !0, !0, function(F) {
                return E(null, F);
            });
        }, function(D, E) {
            var F = E.reduce(function(G, H) {
                    var I;
                    return G + (I = 'string' == typeof H ? H.length : H.byteLength).toString().length + I + 2;
                }, 0),
                G = new Uint8Array(F),
                H = 0;
            return E.forEach(function(I) {
                var J = 'string' == typeof I,
                    K = I;
                if (J) {
                    for (var L = new Uint8Array(I.length), M = 0; M < I.length; M++)
                        L[M] = I.charCodeAt(M);
                    K = L.buffer;
                }
                G[H++] = J ? 0 : 1;
                var L = K.byteLength.toString();
                for (f = 0; f < L.length; f++)
                    G[H++] = parseInt(L[f]);
                G[H++] = 255;
                for (F = new Uint8Array(K), f = 0; f < F.length; f++)
                    G[H++] = F[f];
            }), C(G.buffer);
        });
    }, _m = function(B, C) {
        S(B, function(D, E) {
            f(D, !0, !0, function(F) {
                var G = new Uint8Array(1);
                if (G[0] = 1, 'string' == typeof F) {
                    for (var H = new Uint8Array(F.length), I = 0; I < F.length; I++)
                        H[I] = F.charCodeAt(I);
                    F = H.buffer, G[0] = 0;
                }
                var H = (F instanceof ArrayBuffer ? F.byteLength : F.size).toString(),
                    I = new Uint8Array(H.length + 1);
                for (d = 0; d < H.length; d++)
                    I[d] = parseInt(H[d]);
                if (I[H.length] = 255, A) {
                    var J = new A([
                        G.buffer,
                        I.buffer,
                        F
                    ]);
                    E(null, J);
                }
            });
        }, function(D, E) {
            return C(new A(E));
        });
    }, n = function(B, C, D) {
        'function' == typeof C && (D = C, C = null);
        for (var E = B, F = []; E.byteLength > 0;) {
            for (var G = new Uint8Array(E), H = 0 === G[0], I = '', J = 1; 255 !== G[J]; J++) {
                if (I.length > 310)
                    return D(z, 0, 1);
                I += G[J];
            }
            E = r(E, 2 + I.length), I = parseInt(I);
            var K = r(E, 0, I);
            if (H)
                try {
                    K = String.fromCharCode.apply(null, new Uint8Array(K));
                } catch (B) {
                    var L = new Uint8Array(K);
                    K = '';
                    for (J = 0; J < L.length; J++)
                        K += String.fromCharCode(L[J]);
                }
            F.push(K), E = r(E, I);
        }
        var G = F.length;
        F.forEach(function(H, I) {
            D(h(H, C, !0), I, G);
        });
    };
}), a.register('j8bo6', function(b, c) {
    b.exports = Object.keys || function(d) {
        var e = [],
            f = Object.prototype.hasOwnProperty;
        for (var g in d)
            f.call(d, g) && e.push(g);
        return e;
    };
}), a.register('JNDzM', function(b, c) {
    var d = a('uOKha').Buffer,
        e = a('0/IJA'),
        f = Object.prototype.toString,
        g = 'function' == typeof Blob || 'undefined' != typeof Blob && '[object BlobConstructor]' === f.call(Blob),
        h = 'function' == typeof File || 'undefined' != typeof File && '[object FileConstructor]' === f.call(File);
    b.exports = function b(i) {
        if (!i || 'object' != typeof i)
            return !1;
        if (e(i)) {
            for (var j = 0, k = i.length; j < k; j++)
                if (b(i[j]))
                    return !0;
            return !1;
        }
        if ('function' == typeof d && d.isBuffer && d.isBuffer(i) || 'function' == typeof ArrayBuffer && i instanceof ArrayBuffer || g && i instanceof Blob || h && i instanceof File)
            return !0;
        if (i.toJSON && 'function' == typeof i.toJSON && 1 === arguments.length)
            return b(i.toJSON(), !0);
        for (var j in i)
            if (Object.prototype.hasOwnProperty.call(i, j) && b(i[j]))
                return !0;
        return !1;
    };
}), a.register('0/IJA', function(b, c) {
    var d = {}.toString;
    b.exports = Array.isArray || function(e) {
        return '[object Array]' == d.call(e);
    };
}), a.register('MMoW4', function(b, c) {
    b.exports = function(d, e, f) {
        var g = d.byteLength;
        if (e = e || 0, f = f || g, d.slice)
            return d.slice(e, f);
        if (e < 0 && (e += g), f < 0 && (f += g), f > g && (f = g), e >= g || e >= f || 0 === g)
            return new ArrayBuffer(0);
        for (var h = new Uint8Array(d), i = new Uint8Array(f - e), j = e, k = 0; j < f; j++, k++)
            i[k] = h[j];
        return i.buffer;
    };
}), a.register('32S9y', function(b, c) {
    function d() {}
    b.exports = function(d, e, f) {
        var g = !1;
        return f = f || a, _h.count = d, 0 === d ? e() : _h;

        function _h(i, j) {
            if (_h.count <= 0)
                throw new Error('after called too many times');
            --_h.count, i ? (g = !0, e(i), e = f) : 0 !== _h.count || g || e(null, j);
        }
    };
}), a.register('bK9aW', function(b, c) {
    var d, e, f, g = String.fromCharCode;

    function h(i) {
        for (var j, k, l = [], m = 0, n = i.length; m < n;)
            (j = i.charCodeAt(m++)) >= 55296 && j <= 56319 && m < n ? 56320 == (64512 & (k = i.charCodeAt(m++))) ? l.push(((1023 & j) << 10) + (1023 & k) + 65536) : (l.push(j), m--) : l.push(j);
        return l;
    }

    function h(i, j) {
        if (i >= 55296 && i <= 57343) {
            if (j)
                throw Error('Lone surrogate U+' + i.toString(16).toUpperCase() + ' is not a scalar value');
            return !1;
        }
        return !0;
    }

    function h(i, j) {
        return g(i >> j & 63 | 128);
    }

    function h(i, j) {
        if (0 == (4294967168 & i))
            return g(i);
        var k = '';
        return 0 == (4294965248 & i) ? k = g(i >> 6 & 31 | 192) : 0 == (4294901760 & i) ? (_n(i, j) || (i = 65533), k = g(i >> 12 & 15 | 224), k += _k(i, 6)) : 0 == (4292870144 & i) && (k = g(i >> 18 & 7 | 240), k += _k(i, 12), k += _k(i, 6)), k += g(63 & i | 128);
    }

    function h() {
        if (f >= e)
            throw Error('Invalid byte index');
        var i = 255 & d[f];
        if (f++, 128 == (192 & i))
            return 63 & i;
        throw Error('Invalid continuation byte');
    }

    function h(i) {
        var j, k;
        if (f > e)
            throw Error('Invalid byte index');
        if (f == e)
            return !1;
        if (j = 255 & d[f], f++, 0 == (128 & j))
            return j;
        if (192 == (224 & j)) {
            if ((k = (31 & j) << 6 | _p()) >= 128)
                return k;
            throw Error('Invalid continuation byte');
        }
        if (224 == (240 & j)) {
            if ((k = (15 & j) << 12 | _p() << 6 | _p()) >= 2048)
                return _n(k, i) ? k : 65533;
            throw Error('Invalid continuation byte');
        }
        if (240 == (248 & j) && (k = (7 & j) << 18 | _p() << 12 | _p() << 6 | _p()) >= 65536 && k <= 1114111)
            return k;
        throw Error('Invalid UTF-8 detected');
    }
    b.exports = {
        version: '2.1.2',
        encode: function(h, i) {
            for (var j = !1 !== (i = i || {}).strict, k = _l(h), l = k.length, m = -1, _n = ''; ++m < l;)
                _n += _l(k[m], j);
            return _n;
        },
        decode: function(h, i) {
            var j = !1 !== (i = i || {}).strict;
            d = _l(h), e = d.length, f = 0;
            for (var _k, _l = []; !1 !== (_k = _q(j));)
                _l.push(_k);
            return function(m) {
                for (var n, o = m.length, p = -1, q = ''; ++p < o;)
                    (n = m[p]) > 65535 && (q += g((n -= 65536) >>> 10 & 1023 | 55296), n = 56320 | 1023 & n), q += g(n);
                return q;
            }(_l);
        }
    };
}), a.register('49zRX', function(b, c) {
    var d, e, f;
    _g(b.exports, 'encode', function() {
        return d;
    }, function(_g) {
        return d = _g;
    }), _g(b.exports, 'decode', function() {
        return e;
    }, function(_g) {
        return e = _g;
    }), f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', d = function(g) {
        var h, i = new Uint8Array(g),
            j = i.length,
            k = '';
        for (h = 0; h < j; h += 3)
            k += f[i[h] >> 2], k += f[(3 & i[h]) << 4 | i[h + 1] >> 4], k += f[(15 & i[h + 1]) << 2 | i[h + 2] >> 6], k += f[63 & i[h + 2]];
        return j % 3 == 2 ? k = k.substring(0, k.length - 1) + '=' : j % 3 == 1 && (k = k.substring(0, k.length - 2) + '=='), k;
    }, e = function(g) {
        var h, i, j, k, _l, m = 0.75 * g.length,
            n = g.length,
            o = 0;
        '=' === g[g.length - 1] && (m--, '=' === g[g.length - 2] && m--);
        var _p = new ArrayBuffer(m),
            _q = new Uint8Array(_p);
        for (h = 0; h < n; h += 4)
            i = f.indexOf(g[h]), j = f.indexOf(g[h + 1]), k = f.indexOf(g[h + 2]), _l = f.indexOf(g[h + 3]), _q[o++] = i << 2 | j >> 4, _q[o++] = (15 & j) << 4 | k >> 2, _q[o++] = (3 & k) << 6 | 63 & _l;
        return _p;
    };
}), a.register('EUf5j', function(b, c) {
    var d = void 0 !== d ? d : 'undefined' != typeof WebKitBlobBuilder ? WebKitBlobBuilder : 'undefined' != typeof MSBlobBuilder ? MSBlobBuilder : 'undefined' != typeof MozBlobBuilder && MozBlobBuilder,
        e = function() {
            try {
                return 2 === new Blob(['hi']).size;
            } catch (b) {
                return !1;
            }
        }(),
        f = e && function() {
            try {
                return 2 === new Blob([new Uint8Array([
                    1,
                    2
                ])]).size;
            } catch (b) {
                return !1;
            }
        }(),
        g = d && d.prototype.append && d.prototype.getBlob;

    function h(i) {
        return i.map(function(j) {
            if (j.buffer instanceof ArrayBuffer) {
                var k = j.buffer;
                if (j.byteLength !== k.byteLength) {
                    var l = new Uint8Array(j.byteLength);
                    l.set(new Uint8Array(k, j.byteOffset, j.byteLength)), k = l.buffer;
                }
                return k;
            }
            return j;
        });
    }

    function h(i, j) {
        j = j || {};
        var k = new d();
        return _h(i).forEach(function(l) {
            k.append(l);
        }), j.type ? k.getBlob(j.type) : k.getBlob();
    }

    function h(i, j) {
        return new Blob(_h(i), j || {});
    }
    'undefined' != typeof Blob && (_i.prototype = Blob.prototype, _i.prototype = Blob.prototype), b.exports = e ? f ? Blob : _i : g ? _i : void 0;
}), a.register('ENnBl', function(b, c) {
    var d, e;
    _f(b.exports, 'encode', function() {
        return d;
    }, function(_f) {
        return d = _f;
    }), _f(b.exports, 'decode', function() {
        return e;
    }, function(_f) {
        return e = _f;
    }), d = function(f) {
        var g = '';
        for (var h in f)
            f.hasOwnProperty(h) && (g.length && (g += '&'), g += encodeURIComponent(h) + '=' + encodeURIComponent(f[h]));
        return g;
    }, e = function(f) {
        for (var g = {}, h = f.split('&'), i = 0, j = h.length; i < j; i++) {
            var k = h[i].split('=');
            g[decodeURIComponent(k[0])] = decodeURIComponent(k[1]);
        }
        return g;
    };
}), a.register('9wKBq', function(b, c) {
    b.exports = function(d, e) {
        var f = function() {};
        f.prototype = e.prototype, d.prototype = new f(), d.prototype.constructor = d;
    };
}), a.register('lBZNP', function(b, c) {
    var d, e = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
        f = {},
        g = 0,
        _h = 0;

    function _i(j) {
        var k = '';
        do {
            k = e[j % 64] + k, j = Math.floor(j / 64);
        } while (j > 0);
        return k;
    }

    function _i() {
        var j = _l(+new Date());
        return j !== d ? (g = 0, d = j) : j + '.' + _l(g++);
    }
    for (; _h < 64; _h++)
        f[e[_h]] = _h;
    _m.encode = _l, _m.decode = function(i) {
        var j = 0;
        for (_h = 0; _h < i.length; _h++)
            j = 64 * j + f[i.charAt(_h)];
        return j;
    }, b.exports = _m;
}), a.register('jT4xl', function(b, c) {
    var d = a('jOoxx');

    function e() {
        var f;
        try {
            f = c.storage.debug;
        } catch (f) {}
        return !f && void 0 !== d && 'env' in d && (f = void 0), f;
    }
    (c = b.exports = a('jC5HX')).log = function() {
        return 'object' == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }, c.formatArgs = function(e) {
        var f = this.useColors;
        if (e[0] = (f ? '%c' : '') + this.namespace + (f ? ' %c' : ' ') + e[0] + (f ? '%c ' : ' ') + '+' + c.humanize(this.diff), !f)
            return;
        var g = 'color: ' + this.color;
        e.splice(1, 0, g, 'color: inherit');
        var h = 0,
            i = 0;
        e[0].replace(/%[a-zA-Z%]/g, function(j) {
            '%%' !== j && (h++, '%c' === j && (i = h));
        }), e.splice(i, 0, g);
    }, c.save = function(e) {
        try {
            null == e ? c.storage.removeItem('debug') : c.storage.debug = e;
        } catch (e) {}
    }, c.load = _i, c.useColors = function() {
        return !('undefined' == typeof window || !window.process || 'renderer' !== window.process.type) || ('undefined' == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ('undefined' != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || 'undefined' != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }, c.storage = 'undefined' != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
        try {
            return window.localStorage;
        } catch (b) {}
    }(), c.colors = [
        '#0000CC',
        '#0000FF',
        '#0033CC',
        '#0033FF',
        '#0066CC',
        '#0066FF',
        '#0099CC',
        '#0099FF',
        '#00CC00',
        '#00CC33',
        '#00CC66',
        '#00CC99',
        '#00CCCC',
        '#00CCFF',
        '#3300CC',
        '#3300FF',
        '#3333CC',
        '#3333FF',
        '#3366CC',
        '#3366FF',
        '#3399CC',
        '#3399FF',
        '#33CC00',
        '#33CC33',
        '#33CC66',
        '#33CC99',
        '#33CCCC',
        '#33CCFF',
        '#6600CC',
        '#6600FF',
        '#6633CC',
        '#6633FF',
        '#66CC00',
        '#66CC33',
        '#9900CC',
        '#9900FF',
        '#9933CC',
        '#9933FF',
        '#99CC00',
        '#99CC33',
        '#CC0000',
        '#CC0033',
        '#CC0066',
        '#CC0099',
        '#CC00CC',
        '#CC00FF',
        '#CC3300',
        '#CC3333',
        '#CC3366',
        '#CC3399',
        '#CC33CC',
        '#CC33FF',
        '#CC6600',
        '#CC6633',
        '#CC9900',
        '#CC9933',
        '#CCCC00',
        '#CCCC33',
        '#FF0000',
        '#FF0033',
        '#FF0066',
        '#FF0099',
        '#FF00CC',
        '#FF00FF',
        '#FF3300',
        '#FF3333',
        '#FF3366',
        '#FF3399',
        '#FF33CC',
        '#FF33FF',
        '#FF6600',
        '#FF6633',
        '#FF9900',
        '#FF9933',
        '#FFCC00',
        '#FFCC33'
    ], c.formatters.j = function(e) {
        try {
            return JSON.stringify(e);
        } catch (e) {
            return '[UnexpectedJSONParseError]: ' + e.message;
        }
    }, c.enable(_i());
}), a.register('jC5HX', function(b, c) {
    function d(e) {
        var f;

        function g() {
            if (g.enabled) {
                var h = g,
                    _i = +new Date(),
                    j = _i - (f || _i);
                h.diff = j, h.prev = f, h.curr = _i, f = _i;
                for (var k = new Array(arguments.length), _l = 0; _l < k.length; _l++)
                    k[_l] = arguments[_l];
                k[0] = c.coerce(k[0]), 'string' != typeof k[0] && k.unshift('%O');
                var _m = 0;
                k[0] = k[0].replace(/%([a-zA-Z%])/g, function(n, o) {
                    if ('%%' === n)
                        return n;
                    _m++;
                    var p = c.formatters[o];
                    if ('function' == typeof p) {
                        var q = k[_m];
                        n = p.call(h, q), k.splice(_m, 1), _m--;
                    }
                    return n;
                }), c.formatArgs.call(h, k);
                var n = g.log || c.log || console.log.bind(console);
                n.apply(h, k);
            }
        }
        return d.namespace = e, d.enabled = c.enabled(e), d.useColors = c.useColors(), d.color = function(g) {
            var h, i = 0;
            for (h in g)
                i = (i << 5) - i + g.charCodeAt(h), i |= 0;
            return c.colors[Math.abs(i) % c.colors.length];
        }(e), d.destroy = _d, 'function' == typeof c.init && c.init(d), c.instances.push(d), d;
    }

    function _d() {
        var e = c.instances.indexOf(this);
        return -1 !== e && (c.instances.splice(e, 1), !0);
    }
    (c = b.exports = _f.debug = _f.default = _f).coerce = function(d) {
        return d instanceof Error ? d.stack || d.message : d;
    }, c.disable = function() {
        c.enable('');
    }, c.enable = function(d) {
        var e;
        c.save(d), c.names = [], c.skips = [];
        var _f = ('string' == typeof d ? d : '').split(/[\s,]+/),
            g = _f.length;
        for (e = 0; e < g; e++)
            _f[e] && ('-' === (d = _f[e].replace(/\*/g, '.*?'))[0] ? c.skips.push(new RegExp('^' + d.substr(1) + '$')) : c.names.push(new RegExp('^' + d + '$')));
        for (e = 0; e < c.instances.length; e++) {
            var h = c.instances[e];
            h.enabled = c.enabled(h.namespace);
        }
    }, c.enabled = function(d) {
        if ('*' === d[d.length - 1])
            return !0;
        var e, f;
        for (e = 0, f = c.skips.length; e < f; e++)
            if (c.skips[e].test(d))
                return !1;
        for (e = 0, f = c.names.length; e < f; e++)
            if (c.names[e].test(d))
                return !0;
        return !1;
    }, c.humanize = a('cu+5n'), c.instances = [], c.names = [], c.skips = [], c.formatters = {};
}), a.register('cu+5n', function(b, c) {
    var d = 1000,
        e = 60000,
        f = 3600000,
        g = 86400000,
        h = 31557600000;

    function i(j, k, l) {
        if (!(j < k))
            return j < 1.5 * k ? Math.floor(j / k) + ' ' + l : Math.ceil(j / k) + ' ' + l + 's';
    }
    b.exports = function(i, j) {
        j = j || {};
        var k, l = typeof i;
        if ('string' === l && i.length > 0)
            return function(m) {
                if ((m = String(m)).length > 100)
                    return;
                var n = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(m);
                if (!n)
                    return;
                var o = parseFloat(n[1]);
                switch ((n[2] || 'ms').toLowerCase()) {
                    case 'years':
                    case 'year':
                    case 'yrs':
                    case 'yr':
                    case 'y':
                        return o * h;
                    case 'days':
                    case 'day':
                    case 'd':
                        return o * g;
                    case 'hours':
                    case 'hour':
                    case 'hrs':
                    case 'hr':
                    case 'h':
                        return o * f;
                    case 'minutes':
                    case 'minute':
                    case 'mins':
                    case 'min':
                    case 'm':
                        return o * e;
                    case 'seconds':
                    case 'second':
                    case 'secs':
                    case 'sec':
                    case 's':
                        return o * d;
                    case 'milliseconds':
                    case 'millisecond':
                    case 'msecs':
                    case 'msec':
                    case 'ms':
                        return o;
                    default:
                        return;
                }
            }(i);
        if ('number' === l && !1 === isNaN(i))
            return j.long ? _h(k = i, g, 'day') || _h(k, f, 'hour') || _h(k, e, 'minute') || _h(k, d, 'second') || k + ' ms' : function(m) {
                return m >= g ? Math.round(m / g) + 'd' : m >= f ? Math.round(m / f) + 'h' : m >= e ? Math.round(m / e) + 'm' : m >= d ? Math.round(m / d) + 's' : m + 'ms';
            }(i);
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(i));
    };
}), a.register('HfZLI', function(b, c) {
    var d = a('AlMZ2'),
        e = a('9wKBq'),
        f = a('uSeo8');
    b.exports = _j;
    var g, _h = /\n/g,
        i = /\\n/g;

    function j() {}

    function _j(k) {
        d.call(this, k), this.query = this.query || {}, g || (g = f.___eio = f.___eio || []), this.index = g.length;
        var l = this;
        g.push(function(m) {
            l.onData(m);
        }), this.query.j = this.index, 'function' == typeof addEventListener && addEventListener('beforeunload', function() {
            l.script && (l.script.onerror = _m);
        }, !1);
    }
    e(_m, d), _m.prototype.supportsBinary = !1, _m.prototype.doClose = function() {
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), d.prototype.doClose.call(this);
    }, _m.prototype.doPoll = function() {
        var j = this,
            k = document.createElement('script');
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), k.async = !0, k.src = this.uri(), k.onerror = function(l) {
            j.onError('jsonp poll error', l);
        };
        var l = document.getElementsByTagName('script')[0];
        l ? l.parentNode.insertBefore(k, l) : (document.head || document.body).appendChild(k), this.script = k, 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
            var m = document.createElement('iframe');
            document.body.appendChild(m), document.body.removeChild(m);
        }, 100);
    }, _m.prototype.doWrite = function(j, k) {
        var l = this;
        if (!this.form) {
            var m, n = document.createElement('form'),
                o = document.createElement('textarea'),
                p = this.iframeId = 'eio_iframe_' + this.index;
            n.className = 'socketio', n.style.position = 'absolute', n.style.top = '-1000px', n.style.left = '-1000px', n.target = p, n.method = 'POST', n.setAttribute('accept-charset', 'utf-8'), o.name = 'd', n.appendChild(o), document.body.appendChild(n), this.form = n, this.area = o;
        }

        function _m() {
            _m(), k();
        }

        function _m() {
            if (l.iframe)
                try {
                    l.form.removeChild(l.iframe);
                } catch (j) {
                    l.onError('jsonp polling iframe removal error', j);
                }
            try {
                var n = '<iframe src="javascript:0" name="' + l.iframeId + '">';
                d = document.createElement(n);
            } catch (j) {
                (d = document.createElement('iframe')).name = l.iframeId, d.src = 'javascript:0';
            }
            d.id = l.iframeId, l.form.appendChild(d), l.iframe = d;
        }
        this.form.action = this.uri(), _k(), j = j.replace(i, '\\\n'), this.area.value = j.replace(_h, '\\n');
        try {
            this.form.submit();
        } catch (j) {}
        this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
            'complete' === l.iframe.readyState && _j();
        } : this.iframe.onload = _j;
    };
}), a.register('/TArG', function(b, c) {
    var d, e, f = a('uOKha').Buffer,
        g = a('nQuX9'),
        h = a('K6Ajl'),
        i = a('ENnBl'),
        _j = a('9wKBq'),
        _k = a('lBZNP'),
        l = a('jT4xl')('engine.io-client:websocket');
    if ('undefined' != typeof WebSocket ? d = WebSocket : 'undefined' != typeof self && (d = self.WebSocket || self.MozWebSocket), 'undefined' == typeof window)
        try {
            e = a('XE5Pm');
        } catch (b) {}
    var m = d || e;

    function n(o) {
        o && o.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = o.perMessageDeflate, this.usingBrowserWebSocket = d && !o.forceNode, this.protocols = o.protocols, this.usingBrowserWebSocket || (m = e), g.call(this, o);
    }
    b.exports = _n, _j(_n, g), _n.prototype.name = 'websocket', _n.prototype.supportsBinary = !0, _n.prototype.doOpen = function() {
        if (this.check()) {
            var n = this.uri(),
                o = this.protocols,
                p = {};
            this.isReactNative || (p.agent = this.agent, p.perMessageDeflate = this.perMessageDeflate, p.pfx = this.pfx, p.key = this.key, p.passphrase = this.passphrase, p.cert = this.cert, p.ca = this.ca, p.ciphers = this.ciphers, p.rejectUnauthorized = this.rejectUnauthorized), this.extraHeaders && (p.headers = this.extraHeaders), this.localAddress && (p.localAddress = this.localAddress);
            try {
                this.ws = this.usingBrowserWebSocket && !this.isReactNative ? o ? new m(n, o) : new m(n) : new m(n, o, p);
            } catch (n) {
                return this.emit('error', n);
            }
            void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = 'nodebuffer') : this.ws.binaryType = 'arraybuffer', this.addEventListeners();
        }
    }, _n.prototype.addEventListeners = function() {
        var n = this;
        this.ws.onopen = function() {
            n.onOpen();
        }, this.ws.onclose = function() {
            n.onClose();
        }, this.ws.onmessage = function(o) {
            n.onData(o.data);
        }, this.ws.onerror = function(o) {
            n.onError('websocket error', o);
        };
    }, _n.prototype.write = function(n) {
        var o = this;
        this.writable = !1;
        for (var p = n.length, q = 0, r = p; q < r; q++)
            ! function(s) {
                h.encodePacket(s, o.supportsBinary, function(t) {
                    if (!o.usingBrowserWebSocket) {
                        var u = {};
                        if (s.options && (u.compress = s.options.compress), o.perMessageDeflate)
                            ('string' == typeof t ? f.byteLength(t) : t.length) < o.perMessageDeflate.threshold && (u.compress = !1);
                    }
                    try {
                        o.usingBrowserWebSocket ? o.ws.send(t) : o.ws.send(t, r);
                    } catch (s) {
                        l('websocket closed before onclose event');
                    }
                    --p || g();
                });
            }(n[q]);

        function s() {
            o.emit('flush'), setTimeout(function() {
                o.writable = !0, o.emit('drain');
            }, 0);
        }
    }, _n.prototype.onClose = function() {
        g.prototype.onClose.call(this);
    }, _n.prototype.doClose = function() {
        void 0 !== this.ws && this.ws.close();
    }, _n.prototype.uri = function() {
        var n = this.query || {},
            o = this.secure ? 'wss' : 'ws',
            p = '';
        return this.port && ('wss' === o && 443 !== Number(this.port) || 'ws' === o && 80 !== Number(this.port)) && (p = ':' + this.port), this.timestampRequests && (n[this.timestampParam] = _k()), this.supportsBinary || (n.b64 = 1), (n = i.encode(n)).length && (n = '?' + n), o + '://' + (-1 !== this.hostname.indexOf(':') ? '[' + this.hostname + ']' : this.hostname) + p + this.path + n;
    }, _n.prototype.check = function() {
        return !(!m || '__initialize' in m && this.name === _n.prototype.name);
    };
}), a.register('Q15Qt', function(b, c) {
    var d = [].indexOf;
    b.exports = function(e, f) {
        if (d)
            return e.indexOf(f);
        for (var g = 0; g < e.length; ++g)
            if (e[g] === f)
                return g;
        return -1;
    };
}), a.register('d6hPe', function(b, c) {
    var d = a('cPNNl'),
        e = a('Sdfzv'),
        f = a('LMhss'),
        g = a('qwpKx'),
        h = a('wZMr5'),
        i = a('7y3Xs')('socket.io-client:socket'),
        j = a('ENnBl'),
        k = a('JNDzM');
    b.exports = _n;
    var l = {
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
        m = e.prototype.emit;

    function _n(o, p, q) {
        this.io = o, this.nsp = p, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, q && q.query && (this.query = q.query), this.io.autoConnect && this.open();
    }
    e(_m.prototype), _m.prototype.subEvents = function() {
        if (!this.subs) {
            var n = this.io;
            this.subs = [
                g(n, 'open', h(this, 'onopen')),
                g(n, 'packet', h(this, 'onpacket')),
                g(n, 'close', h(this, 'onclose'))
            ];
        }
    }, _m.prototype.open = _m.prototype.connect = function() {
        return this.connected || (this.subEvents(), this.io.reconnecting || this.io.open(), 'open' === this.io.readyState && this.onopen(), this.emit('connecting')), this;
    }, _m.prototype.send = function() {
        var n = f(arguments);
        return n.unshift('message'), this.emit.apply(this, n), this;
    }, _m.prototype.emit = function(n) {
        if (l.hasOwnProperty(n))
            return m.apply(this, arguments), this;
        var o = f(arguments),
            p = {
                type: (void 0 !== this.flags.binary ? this.flags.binary : k(o)) ? d.BINARY_EVENT : d.EVENT,
                data: o,
                options: {}
            };
        return p.options.compress = !this.flags || !1 !== this.flags.compress, 'function' == typeof o[o.length - 1] && (i('emitting packet with ack id %d', this.ids), this.acks[this.ids] = o.pop(), p.id = this.ids++), this.connected ? this.packet(p) : this.sendBuffer.push(p), this.flags = {}, this;
    }, _m.prototype.packet = function(n) {
        n.nsp = this.nsp, this.io.packet(n);
    }, _m.prototype.onopen = function() {
        if (i('transport is open - connecting'), '/' !== this.nsp)
            if (this.query) {
                var n = 'object' == typeof this.query ? j.encode(this.query) : this.query;
                i('sending connect packet with query %s', n), this.packet({
                    type: d.CONNECT,
                    query: n
                });
            } else
                this.packet({
                    type: d.CONNECT
                });
    }, _m.prototype.onclose = function(n) {
        i('close (%s)', n), this.connected = !1, this.disconnected = !0, delete this.id, this.emit('disconnect', n);
    }, _m.prototype.onpacket = function(n) {
        var o = n.nsp === this.nsp,
            p = n.type === d.ERROR && '/' === n.nsp;
        if (o || p)
            switch (n.type) {
                case d.CONNECT:
                    this.onconnect();
                    break;
                case d.EVENT:
                case d.BINARY_EVENT:
                    this.onevent(n);
                    break;
                case d.ACK:
                case d.BINARY_ACK:
                    this.onack(n);
                    break;
                case d.DISCONNECT:
                    this.ondisconnect();
                    break;
                case d.ERROR:
                    this.emit('error', n.data);
            }
    }, _m.prototype.onevent = function(n) {
        var o = n.data || [];
        i('emitting event %j', o), null != n.id && (i('attaching ack callback to event'), o.push(this.ack(n.id))), this.connected ? m.apply(this, o) : this.receiveBuffer.push(o);
    }, _m.prototype.ack = function(n) {
        var o = this,
            p = !1;
        return function() {
            if (!p) {
                p = !0;
                var q = f(arguments);
                i('sending ack %j', q), o.packet({
                    type: k(q) ? d.BINARY_ACK : d.ACK,
                    id: n,
                    data: q
                });
            }
        };
    }, _m.prototype.onack = function(n) {
        var o = this.acks[n.id];
        'function' == typeof o ? (i('calling ack %s with %j', n.id, n.data), o.apply(this, n.data), delete this.acks[n.id]) : i('bad ack %s', n.id);
    }, _m.prototype.onconnect = function() {
        this.connected = !0, this.disconnected = !1, this.emit('connect'), this.emitBuffered();
    }, _m.prototype.emitBuffered = function() {
        var n;
        for (n = 0; n < this.receiveBuffer.length; n++)
            m.apply(this, this.receiveBuffer[n]);
        for (this.receiveBuffer = [], n = 0; n < this.sendBuffer.length; n++)
            this.packet(this.sendBuffer[n]);
        this.sendBuffer = [];
    }, _m.prototype.ondisconnect = function() {
        i('server disconnect (%s)', this.nsp), this.destroy(), this.onclose('io server disconnect');
    }, _m.prototype.destroy = function() {
        if (this.subs) {
            for (var n = 0; n < this.subs.length; n++)
                this.subs[n].destroy();
            this.subs = null;
        }
        this.io.destroy(this);
    }, _m.prototype.close = _m.prototype.disconnect = function() {
        return this.connected && (i('performing disconnect (%s)', this.nsp), this.packet({
            type: d.DISCONNECT
        })), this.destroy(), this.connected && this.onclose('io client disconnect'), this;
    }, _m.prototype.compress = function(n) {
        return this.flags.compress = n, this;
    }, _m.prototype.binary = function(n) {
        return this.flags.binary = n, this;
    };
}), a.register('LMhss', function(b, c) {
    b.exports = function(d, e) {
        for (var f = [], g = (e = e || 0) || 0; g < d.length; g++)
            f[g - e] = d[g];
        return f;
    };
}), a.register('qwpKx', function(b, c) {
    b.exports = function(d, e, f) {
        return d.on(e, f), {
            destroy: function() {
                d.removeListener(e, f);
            }
        };
    };
}), a.register('wZMr5', function(b, c) {
    var d = [].slice;
    b.exports = function(e, f) {
        if ('string' == typeof f && (f = e[f]), 'function' != typeof f)
            throw new Error('bind() requires a function');
        var g = d.call(arguments, 2);
        return function() {
            return f.apply(e, g.concat(d.call(arguments)));
        };
    };
}), a.register('vQXs5', function(b, c) {
    function d(e) {
        e = e || {}, this.ms = e.min || 100, this.max = e.max || 10000, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
    }
    b.exports = a, a.prototype.duration = function() {
        var d = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var e = Math.random(),
                f = Math.floor(e * this.jitter * d);
            d = 0 == (1 & Math.floor(10 * e)) ? d - f : d + f;
        }
        return 0 | Math.min(d, this.max);
    }, a.prototype.reset = function() {
        this.attempts = 0;
    }, a.prototype.setMin = function(d) {
        this.ms = d;
    }, a.prototype.setMax = function(d) {
        this.max = d;
    }, a.prototype.setJitter = function(d) {
        this.jitter = d;
    };
}), a.register('LRa3j', function(b, c) {
    var d, e, f, g, h, i, j, k, l;
    _m(b.exports, 'CONNECT', function() {
        return d;
    }, function(_m) {
        return d = _m;
    }), _m(b.exports, 'DISCONNECT', function() {
        return e;
    }, function(_m) {
        return e = _m;
    }), _m(b.exports, 'EVENT', function() {
        return f;
    }, function(_m) {
        return f = _m;
    }), _m(b.exports, 'ACK', function() {
        return g;
    }, function(_m) {
        return g = _m;
    }), _m(b.exports, 'ERROR', function() {
        return h;
    }, function(_m) {
        return h = _m;
    }), _m(b.exports, 'BINARY_EVENT', function() {
        return i;
    }, function(_m) {
        return i = _m;
    }), _m(b.exports, 'BINARY_ACK', function() {
        return j;
    }, function(_m) {
        return j = _m;
    }), _m(b.exports, 'Encoder', function() {
        return k;
    }, function(_m) {
        return k = _m;
    }), _m(b.exports, 'Decoder', function() {
        return l;
    }, function(_m) {
        return l = _m;
    });
    var _m = a('NJnZe'),
        n = a('Sdfzv');
    d = 0, e = 1, f = 2, g = 3, h = 4, i = 5, j = 6;
    var o = Number.isInteger || function(p) {
            return 'number' == typeof p && isFinite(p) && Math.floor(p) === p;
        },
        p = function(q) {
            return 'string' == typeof q;
        };

    function q() {}

    function q() {}
    _s.prototype.encode = function(q, r) {
        switch (q.type) {
            case d:
            case e:
            case h:
                return r([JSON.stringify(q)]);
            default:
                return r([_m.encode(q)]);
        }
    }, n(v.prototype), v.prototype.add = function(q) {
        'string' == typeof q ? this.parseJSON(q) : this.parseBinary(q);
    }, v.prototype.parseJSON = function(q) {
        var r = JSON.parse(q);
        this.checkPacket(r), this.emit('decoded', r);
    }, v.prototype.parseBinary = function(q) {
        var r = _m.decode(q);
        this.checkPacket(r), this.emit('decoded', r);
    }, v.prototype.checkPacket = function(q) {
        if (!(o(q.type) && q.type >= d && q.type <= j))
            throw new Error('invalid packet type');
        if (!p(q.nsp))
            throw new Error('invalid namespace');
        if (! function(r) {
                switch (r.type) {
                    case d:
                    case e:
                        return void 0 === r.data;
                    case h:
                        return p(r.data);
                    default:
                        return Array.isArray(r.data);
                }
            }(q))
            throw new Error('invalid payload');
        if (!(void 0 === q.id || o(q.id)))
            throw new Error('invalid packet id');
    }, v.prototype.destroy = function() {}, k = _s, l = v;
}), a.register('NJnZe', function(b, c) {
    var d, e;
    _f(b.exports, 'encode', function() {
        return d;
    }, function(_f) {
        return d = _f;
    }), _f(b.exports, 'decode', function() {
        return e;
    }, function(_f) {
        return e = _f;
    }), d = a('yq2qE'), e = a('y8pKd');
}), a.register('yq2qE', function(b, c) {
    function d(e, f, g) {
        for (var h = 0, i = 0, j = g.length; i < j; i++)
            (h = g.charCodeAt(i)) < 128 ? e.setUint8(f++, h) : h < 2048 ? (e.setUint8(f++, 192 | h >> 6), e.setUint8(f++, 128 | 63 & h)) : h < 55296 || h >= 57344 ? (e.setUint8(f++, 224 | h >> 12), e.setUint8(f++, 128 | h >> 6 & 63), e.setUint8(f++, 128 | 63 & h)) : (i++, h = 65536 + ((1023 & h) << 10 | 1023 & g.charCodeAt(i)), e.setUint8(f++, 240 | h >> 18), e.setUint8(f++, 128 | h >> 12 & 63), e.setUint8(f++, 128 | h >> 6 & 63), e.setUint8(f++, 128 | 63 & h));
    }

    function d(e, f, g) {
        var h = typeof g,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0;
        if ('string' === h) {
            if (m = function(o) {
                    for (var p = 0, q = 0, r = 0, s = o.length; r < s; r++)
                        (p = o.charCodeAt(r)) < 128 ? q += 1 : p < 2048 ? q += 2 : p < 55296 || p >= 57344 ? q += 3 : (r++, q += 4);
                    return q;
                }(g), m < 32)
                e.push(160 | m), n = 1;
            else if (m < 256)
                e.push(217, m), n = 2;
            else if (m < 65536)
                e.push(218, m >> 8, m), n = 3;
            else {
                if (!(m < 4294967296))
                    throw new Error('String too long');
                e.push(219, m >> 24, m >> 16, m >> 8, m), n = 5;
            }
            return f.push({
                _str: g,
                _length: m,
                _offset: e.length
            }), n + m;
        }
        if ('number' === h)
            return Math.floor(g) === g && isFinite(g) ? g >= 0 ? g < 128 ? (e.push(g), 1) : g < 256 ? (e.push(204, g), 2) : g < 65536 ? (e.push(205, g >> 8, g), 3) : g < 4294967296 ? (e.push(206, g >> 24, g >> 16, g >> 8, g), 5) : (k = g / Math.pow(2, 32) >> 0, l = g >>> 0, e.push(207, k >> 24, k >> 16, k >> 8, k, l >> 24, l >> 16, l >> 8, l), 9) : g >= -32 ? (e.push(g), 1) : g >= -128 ? (e.push(208, g), 2) : g >= -32768 ? (e.push(209, g >> 8, g), 3) : g >= -2147483648 ? (e.push(210, g >> 24, g >> 16, g >> 8, g), 5) : (k = Math.floor(g / Math.pow(2, 32)), l = g >>> 0, e.push(211, k >> 24, k >> 16, k >> 8, k, l >> 24, l >> 16, l >> 8, l), 9) : (e.push(203), f.push({
                _float: g,
                _length: 8,
                _offset: e.length
            }), 9);
        if ('object' === h) {
            if (null === g)
                return e.push(192), 1;
            if (Array.isArray(g)) {
                if ((m = g.length) < 16)
                    e.push(144 | m), n = 1;
                else if (m < 65536)
                    e.push(220, m >> 8, m), n = 3;
                else {
                    if (!(m < 4294967296))
                        throw new Error('Array too large');
                    e.push(221, m >> 24, m >> 16, m >> 8, m), n = 5;
                }
                for (i = 0; i < m; i++)
                    n += d(e, f, g[i]);
                return n;
            }
            if (g instanceof Date) {
                var o = g.getTime();
                return k = Math.floor(o / Math.pow(2, 32)), l = o >>> 0, e.push(215, 0, k >> 24, k >> 16, k >> 8, k, l >> 24, l >> 16, l >> 8, l), 10;
            }
            if (g instanceof ArrayBuffer) {
                if ((m = g.byteLength) < 256)
                    e.push(196, m), n = 2;
                else if (m < 65536)
                    e.push(197, m >> 8, m), n = 3;
                else {
                    if (!(m < 4294967296))
                        throw new Error('Buffer too large');
                    e.push(198, m >> 24, m >> 16, m >> 8, m), n = 5;
                }
                return f.push({
                    _bin: g,
                    _length: m,
                    _offset: e.length
                }), n + m;
            }
            if ('function' == typeof g.toJSON)
                return d(e, f, g.toJSON());
            var o = [],
                p = '',
                q = Object.keys(g);
            for (i = 0, j = q.length; i < j; i++)
                'function' != typeof g[p = q[i]] && o.push(p);
            if ((m = o.length) < 16)
                e.push(128 | m), n = 1;
            else if (m < 65536)
                e.push(222, m >> 8, m), n = 3;
            else {
                if (!(m < 4294967296))
                    throw new Error('Object too large');
                e.push(223, m >> 24, m >> 16, m >> 8, m), n = 5;
            }
            for (i = 0; i < m; i++)
                n += d(e, f, p = o[i]), n += d(e, f, g[p]);
            return n;
        }
        if ('boolean' === h)
            return e.push(g ? 195 : 194), 1;
        if ('undefined' === h)
            return e.push(212, 0, 0), 3;
        throw new Error('Could not encode');
    }
    b.exports = function(d) {
        var e = [],
            f = [],
            g = _i(e, f, d),
            h = new ArrayBuffer(g),
            i = new DataView(h),
            j = 0,
            k = 0,
            l = -1;
        f.length > 0 && (l = f[0]._offset);
        for (var m, n = 0, o = 0, p = 0, q = e.length; p < q; p++)
            if (i.setUint8(k + p, e[p]), p + 1 === l) {
                if (n = (m = f[j])._length, o = k + l, m._bin)
                    for (var r = new Uint8Array(m._bin), _s = 0; _s < n; _s++)
                        i.setUint8(o + _s, r[_s]);
                else
                    m._str ? a(i, o, m._str) : void 0 !== m._float && i.setFloat64(o, m._float);
                k += n, f[++j] && (l = f[j]._offset);
            }
        return h;
    };
}), a.register('y8pKd', function(b, c) {
    function d(e) {
        if (this._offset = 0, e instanceof ArrayBuffer)
            this._buffer = e, this._view = new DataView(this._buffer);
        else {
            if (!ArrayBuffer.isView(e))
                throw new Error('Invalid argument');
            this._buffer = e.buffer, this._view = new DataView(this._buffer, e.byteOffset, e.byteLength);
        }
    }
    a.prototype._array = function(d) {
        for (var e = new Array(d), f = 0; f < d; f++)
            e[f] = this._parse();
        return e;
    }, a.prototype._map = function(d) {
        for (var e = {}, f = 0; f < d; f++)
            e[this._parse()] = this._parse();
        return e;
    }, a.prototype._str = function(d) {
        var e = function(f, g, h) {
            for (var _i = '', j = 0, k = g, l = g + h; k < l; k++) {
                var m = f.getUint8(k);
                if (0 != (128 & m))
                    if (192 != (224 & m))
                        if (224 != (240 & m)) {
                            if (240 != (248 & m))
                                throw new Error('Invalid byte ' + m.toString(16));
                            (j = (7 & m) << 18 | (63 & f.getUint8(++k)) << 12 | (63 & f.getUint8(++k)) << 6 | (63 & f.getUint8(++k)) << 0) >= 65536 ? (j -= 65536, _i += String.fromCharCode(55296 + (j >>> 10), 56320 + (1023 & j))) : _i += String.fromCharCode(j);
                        } else
                            _i += String.fromCharCode((15 & m) << 12 | (63 & f.getUint8(++k)) << 6 | (63 & f.getUint8(++k)) << 0);
                else
                    _i += String.fromCharCode((31 & m) << 6 | 63 & f.getUint8(++k));
                else
                    _i += String.fromCharCode(m);
            }
            return _i;
        }(this._view, this._offset, d);
        return this._offset += d, e;
    }, a.prototype._bin = function(d) {
        var e = this._buffer.slice(this._offset, this._offset + d);
        return this._offset += d, e;
    }, a.prototype._parse = function() {
        var d, e = this._view.getUint8(this._offset++),
            f = 0,
            g = 0,
            h = 0,
            i = 0;
        if (e < 192)
            return e < 128 ? e : e < 144 ? this._map(15 & e) : e < 160 ? this._array(15 & e) : this._str(31 & e);
        if (e > 223)
            return -1 * (255 - e + 1);
        switch (e) {
            case 192:
                return null;
            case 194:
                return !1;
            case 195:
                return !0;
            case 196:
                return f = this._view.getUint8(this._offset), this._offset += 1, this._bin(f);
            case 197:
                return f = this._view.getUint16(this._offset), this._offset += 2, this._bin(f);
            case 198:
                return f = this._view.getUint32(this._offset), this._offset += 4, this._bin(f);
            case 199:
                return f = this._view.getUint8(this._offset), g = this._view.getInt8(this._offset + 1), this._offset += 2, [
                    g,
                    this._bin(f)
                ];
            case 200:
                return f = this._view.getUint16(this._offset), g = this._view.getInt8(this._offset + 2), this._offset += 3, [
                    g,
                    this._bin(f)
                ];
            case 201:
                return f = this._view.getUint32(this._offset), g = this._view.getInt8(this._offset + 4), this._offset += 5, [
                    g,
                    this._bin(f)
                ];
            case 202:
                return d = this._view.getFloat32(this._offset), this._offset += 4, d;
            case 203:
                return d = this._view.getFloat64(this._offset), this._offset += 8, d;
            case 204:
                return d = this._view.getUint8(this._offset), this._offset += 1, d;
            case 205:
                return d = this._view.getUint16(this._offset), this._offset += 2, d;
            case 206:
                return d = this._view.getUint32(this._offset), this._offset += 4, d;
            case 207:
                return h = this._view.getUint32(this._offset) * Math.pow(2, 32), i = this._view.getUint32(this._offset + 4), this._offset += 8, h + i;
            case 208:
                return d = this._view.getInt8(this._offset), this._offset += 1, d;
            case 209:
                return d = this._view.getInt16(this._offset), this._offset += 2, d;
            case 210:
                return d = this._view.getInt32(this._offset), this._offset += 4, d;
            case 211:
                return h = this._view.getInt32(this._offset) * Math.pow(2, 32), i = this._view.getUint32(this._offset + 4), this._offset += 8, h + i;
            case 212:
                return g = this._view.getInt8(this._offset), this._offset += 1, 0 === g ? void(this._offset += 1) : [
                    g,
                    this._bin(1)
                ];
            case 213:
                return g = this._view.getInt8(this._offset), this._offset += 1, [
                    g,
                    this._bin(2)
                ];
            case 214:
                return g = this._view.getInt8(this._offset), this._offset += 1, [
                    g,
                    this._bin(4)
                ];
            case 215:
                return g = this._view.getInt8(this._offset), this._offset += 1, 0 === g ? (h = this._view.getInt32(this._offset) * Math.pow(2, 32), i = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(h + i)) : [
                    g,
                    this._bin(8)
                ];
            case 216:
                return g = this._view.getInt8(this._offset), this._offset += 1, [
                    g,
                    this._bin(16)
                ];
            case 217:
                return f = this._view.getUint8(this._offset), this._offset += 1, this._str(f);
            case 218:
                return f = this._view.getUint16(this._offset), this._offset += 2, this._str(f);
            case 219:
                return f = this._view.getUint32(this._offset), this._offset += 4, this._str(f);
            case 220:
                return f = this._view.getUint16(this._offset), this._offset += 2, this._array(f);
            case 221:
                return f = this._view.getUint32(this._offset), this._offset += 4, this._array(f);
            case 222:
                return f = this._view.getUint16(this._offset), this._offset += 2, this._map(f);
            case 223:
                return f = this._view.getUint32(this._offset), this._offset += 4, this._map(f);
        }
        throw new Error('Could not parse');
    }, b.exports = function(d) {
        var e = new a(d),
            f = e._parse();
        if (e._offset !== d.byteLength)
            throw new Error(d.byteLength - e._offset + ' trailing bytes');
        return f;
    };
}), a.register('9w8rj', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    });
    b.exports.default = class {
        add(d, e) {
            const f = Math.random().toString();
            return this.callbacks.push({
                callback: d,
                timesCalled: 0,
                canCallMultipleTimes: !e,
                id: f
            }), () => this.removeCallback(f);
        }
        clear() {
            this.callbacks.splice(0, this.callbacks.length);
        }
        call(d, e) {
            this.callbacks = this.callbacks.map(a => a.timesCalled > 0 && !a.canCallMultipleTimes ? a : (a.callback(d, e), Object.assign({}, a, {
                timesCalled: a.timesCalled + 1
            })));
        }
        constructor() {
            this.callbacks = [], this.removeCallback = b => {
                this.callbacks = this.callbacks.filter(c => c.id !== b);
            };
        }
    };
}), a.register('T9YDT', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    });
    b.exports.default = {
        createNewRoom: 'blueboat_CREATE_NEW_ROOM',
        joinRoom: 'blueboat_JOIN_ROOM',
        sendMessage: 'blueboat_SEND_MESSAGE',
        listen: 'blueboat_LISTEN_STATE',
        requestAvailableRooms: 'blueboat_AVAILABLE_ROOMS',
        ping: 'blueboat-ping'
    };
}), a.register('z890/', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.BLUEBOAT_ID = 'blueboat-id';
}), a.register('E3t8I', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    });
    b.exports.default = {
        clientIdSet: 'CLIENT_ID_SET',
        joinedRoom: 'blueboat_JOINED_ROOM',
        statePatch: 'STATE_PATCH',
        removedFromRoom: 'blueboat_REMOVED_FROM_ROOM',
        availableRooms: 'blueboat_AVAILABLE_ROOMS'
    };
}), a.register('Enqaw', function(b, c) {
    var d = b.exports && b.exports.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    });
    const e = d(a('E3t8I')),
        f = d(a('9w8rj')),
        g = d(a('T9YDT'));
    b.exports.default = class {
        _setRoomId(h) {
            this.id = h, this.socketListener();
        }
        socketListener() {
            const h = this.socket;
            h.on(`${ this.id }-error`, h => this.onJoinError.call(h)), h.on(`message-${ this.id }`, h => {
                const {
                    key: i,
                    data: j
                } = h;
                if (i)
                    return i === e.default.joinedRoom ? (this.joined = !0, void this.onJoin.call()) : i === e.default.removedFromRoom ? (this.onLeave.call(), void(this.joined = !1)) : void this.onMessage.call(i, j);
            });
        }
        constructor(h, i, j) {
            this.joined = !1, this.initialJoinOptions = {}, this.onJoinAttempt = new f.default(), this.onCreate = new f.default(), this.onJoin = new f.default(), this.onJoinError = new f.default(), this.onMessage = new f.default(), this.onLeave = new f.default(), this.send = (h, i) => {
                this.socket.emit(g.default.sendMessage, {
                    room: this.id,
                    key: h,
                    data: i
                });
            }, j && (this.id = j), i && (this.initialJoinOptions = i), h && (this.socket = h, j && this.socketListener());
        }
    };
});