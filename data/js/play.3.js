function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('tnsAR', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('s/YA9');
    let g;
    var h;
    (h = g || (g = {})).propertyUpdate = 'pU', h.fullValue = 'fV';
    var _i = class {
        constructor() {
            (0, f.default)(this, 'value', {}), (0, f.default)(this, 'propListeners', []), (0, f.default)(this, 'onPropChange', (a, d) => {
                const j = Math.random().toString(36).substring(3);
                return this.propListeners.push({
                    id: j,
                    prop: a,
                    callback: d
                }), () => this.disposeListener(j);
            }), (0, f.default)(this, 'applyPatches', a => {
                a.forEach(a => {
                    if (a.type !== g.propertyUpdate)
                        if (a.type !== g.fullValue);
                        else {
                            const j = a;
                            Object.keys(j.value).forEach(a => {
                                this.updateProperty(a, j.value[a]);
                            });
                        }
                    else {
                        const j = a;
                        this.updateProperty(j.value.key, j.value.value);
                    }
                });
            }), (0, f.default)(this, 'disposeListener', a => {
                this.propListeners = this.propListeners.filter(d => d.id !== a);
            }), (0, f.default)(this, 'onPropertyChanged', (a, d) => {
                this.propListeners.filter(d => d.prop === a).forEach(a => a.callback(d));
            }), (0, f.default)(this, 'updateProperty', (a, d) => {
                void 0 !== this.value[a] ? this.value[a] !== d && (this.value[a] = d, this.onPropertyChanged(a, d)) : (this.value[a] = d, this.onPropertyChanged(a, d));
            });
        }
    };
}), c.register('6cikK', function(d, e) {
    a(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('8KqQ+'),
        h = c('9zaF+'),
        i = c('O0Kav'),
        j = c('RhZsD');
    const k = () => window.devicePixelRatio || 1,
        l = a => {
            a.preventDefault();
            const m = a.changedTouches[0],
                n = document.createEvent('MouseEvent'),
                o = {
                    touchstart: 'mousedown',
                    touchmove: 'mousemove',
                    touchend: 'mouseup'
                } [a.type];
            o && (n.initMouseEvent(o, !0, !0, window, 1, m.screenX, m.screenY, m.clientX, m.clientY, !1, !1, !1, !1, 0, null), m.target.dispatchEvent(n));
        },
        m = a => {
            var n, o;
            return {
                x: (null == a || null === (n = a.nativeEvent) || void 0 === n ? void 0 : n.offsetX) || 0,
                y: (null == a || null === (o = a.nativeEvent) || void 0 === o ? void 0 : o.offsetY) || 0
            };
        };
    var _n = i.forwardRef((a, c) => {
        const [o, p] = i.useState(''), q = i.useRef(!1), r = i.useRef(!1), s = i.useRef(null), t = i.useRef(null), u = i.useRef([]), v = i.useRef(-1), w = i.useRef({
            x: 0,
            y: 0
        }), x = i.useRef(a.color || g.default.Black), y = i.useRef(a.strokeWidth || 2), z = i.useRef(null), A = i.useRef(null), B = () => {
            r.current = !0;
        }, C = () => {
            r.current = !1;
        }, D = i.useMemo(() => {
            const E = (0, h.throttle)(a => {
                if (!q.current)
                    return;
                if (!r.current)
                    return;
                const {
                    x: F,
                    y: G
                } = m(a);
                _E({
                    xStart: w.current.x,
                    yStart: w.current.y,
                    xEnd: F,
                    yEnd: G,
                    color: x.current,
                    width: y.current
                }, !0), w.current = {
                    x: F,
                    y: G
                };
            }, 10);
            return c => {
                a.canEdit && (c.persist(), E(c));
            };
        }, [a.canEdit]), _E = (b, c) => {
            const {
                xStart: F,
                yStart: G,
                xEnd: H,
                yEnd: I,
                color: J,
                width: K
            } = b, L = t.current, M = s.current;
            if (L.beginPath(), L.moveTo(F, G), L.lineTo(H, I), L.strokeStyle = J, L.lineWidth = K, L.stroke(), L.closePath(), c && a.emitLine) {
                const N = b;
                b.xStart /= M.clientWidth, b.yStart /= M.clientHeight, b.xEnd /= M.clientWidth, b.yEnd /= M.clientHeight, b.width /= (M.clientWidth + M.clientHeight) / 2, a.emitLine(N);
            }
        }, F = () => {
            const G = t.current,
                H = s.current;
            u.current = [
                ...u.current,
                G.getImageData(0, 0, H.width, H.height)
            ], v.current = v.current + 1, _G();
        }, _G = () => {
            const H = s.current;
            a.onLatestImage && (null == H ? void 0 : H.toDataURL) && a.onLatestImage(H.toDataURL('image/jpeg'));
        }, H = () => {
            const I = t.current,
                J = s.current;
            I.clearRect(0, 0, J.width, J.height), I.fillStyle = 'white', I.fillRect(0, 0, J.width, J.height), F();
        }, I = () => {
            v.current <= 0 ? H() : (v.current = v.current - 1, u.current = [...u.current.slice(0, u.current.length - 1)], t.current.putImageData(u.current[v.current], 0, 0), _G());
        }, J = a => {
            const K = s.current,
                L = a;
            a.xStart *= K.clientWidth, a.yStart *= K.clientHeight, a.xEnd *= K.clientWidth, a.yEnd *= K.clientHeight, a.width *= (K.clientWidth + K.clientHeight) / 2, _E(L, !1);
        }, K = a => {
            const L = t.current,
                M = s.current,
                N = new Image();
            N.onload = () => {
                L.drawImage(N, 0, 0, M.width / k(), M.height / k());
            }, N.src = a;
        };
        return b(j)(() => {
            const L = s.current,
                M = t.current;
            if (!L || !M)
                return;
            const N = L.toDataURL(),
                O = L.getBoundingClientRect();
            L.width = O.width * k(), L.height = O.height * k(), M.scale(k(), k()), M.lineCap = 'round', M.lineJoin = 'round', u.current = [], v.current = -1, K(N);
        }, 100, [
            a.width,
            a.height
        ]), i.useImperativeHandle(c, () => ({
            clear: H,
            undo: I,
            addLine: J,
            drawImage: K
        })), i.useEffect(() => {
            const L = s.current,
                M = z.current,
                N = L.getBoundingClientRect();
            L.width = N.width * k(), L.height = N.height * k();
            const O = L.getContext('2d');
            O.scale(k(), k()), O.fillStyle = 'white', O.fillRect(0, 0, L.width, L.height), O.lineCap = 'round', O.lineJoin = 'round', t.current = O, a.initialImage && K(a.initialImage);
            const P = M.getContext('2d');
            A.current = P, document.addEventListener('mousedown', B), document.addEventListener('mouseup', C);
        }, []), i.useEffect(() => {
            const L = z.current,
                M = A.current;
            if (!L || !M)
                return;
            const N = a.strokeWidth;
            L.width = N, L.height = N, M.clearRect(0, 0, L.width, L.height), M.beginPath(), M.arc(L.width / 2, L.height / 2, N / 2, 0, 2 * Math.PI), M.fillStyle = a.color, M.fill();
            const O = L.toDataURL('image');
            p(O);
        }, [
            a.color,
            a.strokeWidth
        ]), i.useEffect(() => {
            x.current = a.color;
        }, [a.color]), i.useEffect(() => {
            y.current = a.strokeWidth;
        }, [a.strokeWidth]), i.useEffect(() => {
            !a.canEdit && q.current && _G();
        }, [a.canEdit]), i.useEffect(() => () => {
            a.canEdit && q.current && _G();
        }, []), (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)('canvas', {
                    style: {
                        width: a.width,
                        height: a.height,
                        cursor: a.canEdit ? `url(${ o }) ${ y.current / 2 } ${ y.current / 2 }, auto` : 'auto',
                        background: g.default.White
                    },
                    ref: s,
                    onMouseDown: b => {
                        if (!a.canEdit)
                            return;
                        const {
                            x: L,
                            y: M
                        } = m(b);
                        w.current = {
                            x: L,
                            y: M
                        }, q.current = !0;
                    },
                    onMouseUp: b => {
                        if (!a.canEdit)
                            return;
                        const {
                            x: L,
                            y: M
                        } = m(b);
                        q.current && (q.current = !1, _E({
                            xStart: w.current.x,
                            yStart: w.current.y,
                            xEnd: L,
                            yEnd: M,
                            color: x.current,
                            width: y.current
                        }, !0), F());
                    },
                    onMouseMove: D,
                    onTouchStart: l,
                    onTouchEnd: l,
                    onTouchCancel: l,
                    onTouchMove: l
                }),
                (0, f.jsx)('canvas', {
                    style: {
                        display: 'none'
                    },
                    ref: z
                })
            ]
        });
    });
}), c.register('RhZsD', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.useThrottledEffect = void 0;
    var f = c('O0Kav');

    function g(h) {
        if (Array.isArray(h)) {
            for (var i = 0, j = Array(h.length); i < h.length; i++)
                j[i] = h[i];
            return j;
        }
        return Array.from(h);
    }
    var h = d.exports.useThrottledEffect = function(i, j) {
        var k = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            l = (0, f.useRef)(Date.now());
        (0, f.useEffect)(function() {
            var m = setTimeout(function() {
                Date.now() - l.current >= j && (i(), l.current = Date.now());
            }, j - (Date.now() - l.current));
            return function() {
                clearTimeout(m);
            };
        }, [j].concat(g(k)));
    };
    d.exports.default = h;
}), c.register('Kbpg5', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('u4s09');
    let h, i, j = a => a;
    var _k = a => (0, f.jsxs)(_l, {
        children: [
            (0, f.jsx)('div', {
                className: 'area',
                children: (0, f.jsxs)('ul', {
                    className: 'circles',
                    children: [
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {})
                    ]
                })
            }),
            (0, f.jsx)(_m, {
                children: a.children
            })
        ]
    });
    const _l = g.default.div(h || (h = j`
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
        _m = g.default.div.attrs({
            className: 'maxAll'
        })(i || (i = j`
  position: absolute;
  top: 0;
  left: 0;
`));
}), c.register('KJfeB', function(d, e) {
    var f = d.exports && d.exports.__importDefault || function(g) {
        return g && g.__esModule ? g : {
            default: g
        };
    };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    });
    const g = f(c('XPnY4'));
    d.exports.Client = g.default;
    const h = f(c('+tYZa'));
    d.exports.Room = h.default;
}), c.register('XPnY4', function(d, e) {
    var f = d.exports && d.exports.__importDefault || function(g) {
        return g && g.__esModule ? g : {
            default: g
        };
    };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    });
    const g = f(c('1P1ze')),
        h = f(c('SRYGJ')),
        i = f(c('VKwC0')),
        j = f(c('wbHA3'));
    var k = c('26svF');
    const l = f(c('o0lvM')),
        m = f(c('+tYZa'));
    d.exports.default = class {
        createRoom(n, o) {
            const p = Math.random().toString();
            this.socket.emit(j.default.createNewRoom, {
                type: n,
                options: o,
                uniqueRequestId: p
            });
            const q = new m.default(this.socket, o);
            return this.socket.on(`${ p }-create`, n => {
                q._setRoomId(n), q.onCreate.call(n), this.joinRoom(n, o, q);
            }), this.socket.on(`${ p }-error`, n => {
                q.onJoinError.call(n);
            }), q;
        }
        joinRoom(n, o, p) {
            const q = p || new m.default(this.socket, o, n);
            return q.onJoinAttempt.call(), q.joined || this.socket.emit(j.default.joinRoom, {
                roomId: n,
                options: o
            }), this.rooms.some(o => o.id === n) || this.rooms.push(q), q;
        }
        constructor(n, o) {
            this.rooms = [], this.onConnect = new i.default(), this.onConnectError = new i.default(), this.onDisconnect = new i.default(), this.onReconnect = new i.default(), this.onReconnectAttempt = new i.default(), this.latency = 0, this.useClientIdSaving = !0, this.disconnect = () => {
                this.socket.disconnect();
            }, this.connect = () => {
                this.socket.connect();
            }, o && o.blockClientIdSaving && (this.useClientIdSaving = !1), this.socket = g.default(n, {
                path: '/blueboat',
                parser: h.default,
                transports: o.transports || ['websocket'],
                query: {
                    id: localStorage && this.useClientIdSaving && localStorage.getItem(k.BLUEBOAT_ID + (o && o.clientIdSuffix ? o.clientIdSuffix : '')) || ''
                },
                reconnectionDelay: 500,
                reconnectionDelayMax: 1500,
                randomizationFactor: 0
            }), this.socket.on('connect_error', n => this.onConnectError.call(n)), this.socket.on('error', n => this.onConnectError.call(n)), this.socket.on(l.default.clientIdSet, n => {
                localStorage && this.useClientIdSaving && localStorage.setItem(k.BLUEBOAT_ID + (o && o.clientIdSuffix ? o.clientIdSuffix : ''), n), this.socket.io.opts.query.id = n, this.id = n, this.sessionId = this.socket.id, this.rooms.length && this.rooms.forEach(n => this.joinRoom(n.id, n.initialJoinOptions, n)), this.onConnect.call();
            }), this.socket.on('pong', n => {
                this.latency = n;
            }), this.socket.on('reconnect', n => this.onReconnect.call(n)), this.socket.on('reconnect_attempt', n => {
                this.onReconnectAttempt.call(n);
            }), this.socket.on('disconnect', n => {
                this.onDisconnect.call(n), this.rooms.forEach(o => {
                    o.joined = !1, o.onLeave.call(n);
                });
            });
        }
    };
}), c.register('1P1ze', function(d, e) {
    var f = c('sqeQ5'),
        g = c('CEzv3'),
        h = c('enVEo')('socket.io-client');
    d.exports = e = _j;
    var i = e.managers = {};

    function _j(k, l) {
        'object' == typeof k && (l = k, k = void 0), l = l || {};
        var m, n = f(k),
            o = n.source,
            p = n.id,
            q = n.path,
            r = i[p] && q in i[p].nsps;
        return l.forceNew || l['force new connection'] || !1 === l.multiplex || r ? (h('ignoring socket cache for %s', o), m = c('AraRz')(o, l)) : (i[p] || (h('new io instance for %s', o), i[p] = c('AraRz')(o, l)), m = i[p]), n.query && !l.query && (l.query = n.query), m.socket(n.path, l);
    }
    e.protocol = g.protocol, e.connect = _j, e.Manager = c('AraRz'), e.Socket = c('LDiWj');
}), c.register('sqeQ5', function(d, e) {
    var f = c('nq8nV'),
        g = c('enVEo')('socket.io-client:url');
    d.exports = function(h, i) {
        var j = h;
        i = i || 'undefined' != typeof location && location, null == h && (h = i.protocol + '//' + i.host);
        'string' == typeof h && ('/' === h.charAt(0) && (h = '/' === h.charAt(1) ? i.protocol + h : i.host + h), /^(https?|wss?):\/\//.test(h) || (g('protocol-less url %s', h), h = void 0 !== i ? i.protocol + '//' + h : 'https://' + h), g('parse %s', h), j = f(h));
        j.port || (/^(http|ws)$/.test(j.protocol) ? j.port = '80' : /^(http|ws)s$/.test(j.protocol) && (j.port = '443'));
        j.path = j.path || '/';
        var k = -1 !== j.host.indexOf(':') ? '[' + j.host + ']' : j.host;
        return j.id = j.protocol + '://' + k + ':' + j.port, j.href = j.protocol + '://' + k + (i && i.port === j.port ? '' : ':' + j.port), j;
    };
}), c.register('nq8nV', function(d, e) {
    var f = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        g = [
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
    d.exports = function(h) {
        var i = h,
            j = h.indexOf('['),
            k = h.indexOf(']'); -
        1 != j && -1 != k && (h = h.substring(0, j) + h.substring(j, k).replace(/:/g, ';') + h.substring(k, h.length));
        for (var l, m, n = f.exec(h || ''), o = {}, p = 14; p--;)
            o[g[p]] = n[p] || '';
        return -1 != j && -1 != k && (o.source = i, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ':'), o.authority = o.authority.replace('[', '').replace(']', '').replace(/;/g, ':'), o.ipv6uri = !0), o.pathNames = function(q, r) {
            var s = /\/{2,9}/g,
                t = r.replace(s, '/').split('/');
            '/' != r.substr(0, 1) && 0 !== r.length || t.splice(0, 1);
            '/' == r.substr(r.length - 1, 1) && t.splice(t.length - 1, 1);
            return t;
        }(0, o.path), o.queryKey = (l = o.query, m = {}, l.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(q, r, s) {
            r && (m[r] = s);
        }), m), o;
    };
}), c.register('enVEo', function(d, e) {
    var f = c('SOClG');

    function g() {
        var h;
        try {
            h = e.storage.debug;
        } catch (h) {}
        return !h && void 0 !== f && 'env' in f && (h = void 0), h;
    }
    (e = d.exports = c('np0/z')).log = function() {
        return 'object' == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }, e.formatArgs = function(h) {
        var i = this.useColors;
        if (h[0] = (i ? '%c' : '') + this.namespace + (i ? ' %c' : ' ') + h[0] + (i ? '%c ' : ' ') + '+' + e.humanize(this.diff), !i)
            return;
        var j = 'color: ' + this.color;
        h.splice(1, 0, j, 'color: inherit');
        var k = 0,
            l = 0;
        h[0].replace(/%[a-zA-Z%]/g, function(m) {
            '%%' !== m && (k++, '%c' === m && (l = k));
        }), h.splice(l, 0, j);
    }, e.save = function(h) {
        try {
            null == h ? e.storage.removeItem('debug') : e.storage.debug = h;
        } catch (h) {}
    }, e.load = g, e.useColors = function() {
        return !('undefined' == typeof window || !window.process || 'renderer' !== window.process.type) || ('undefined' == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ('undefined' != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || 'undefined' != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }, e.storage = 'undefined' != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
        try {
            return window.localStorage;
        } catch (d) {}
    }(), e.colors = [
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
    ], e.formatters.j = function(h) {
        try {
            return JSON.stringify(h);
        } catch (h) {
            return '[UnexpectedJSONParseError]: ' + h.message;
        }
    }, e.enable(g());
}), c.register('np0/z', function(d, e) {
    function f(g) {
        var h;

        function i() {
            if (i.enabled) {
                var j = i,
                    k = +new Date(),
                    l = k - (h || k);
                j.diff = l, j.prev = h, j.curr = k, h = k;
                for (var m = new Array(arguments.length), n = 0; n < m.length; n++)
                    m[n] = arguments[n];
                m[0] = e.coerce(m[0]), 'string' != typeof m[0] && m.unshift('%O');
                var o = 0;
                m[0] = m[0].replace(/%([a-zA-Z%])/g, function(p, q) {
                    if ('%%' === p)
                        return p;
                    o++;
                    var r = e.formatters[q];
                    if ('function' == typeof r) {
                        var s = m[o];
                        p = r.call(j, s), m.splice(o, 1), o--;
                    }
                    return p;
                }), e.formatArgs.call(j, m);
                var p = i.log || e.log || console.log.bind(console);
                p.apply(j, m);
            }
        }
        return i.namespace = g, i.enabled = e.enabled(g), i.useColors = e.useColors(), i.color = function(j) {
            var k, l = 0;
            for (k in j)
                l = (l << 5) - l + j.charCodeAt(k), l |= 0;
            return e.colors[Math.abs(l) % e.colors.length];
        }(g), i.destroy = _g, 'function' == typeof e.init && e.init(i), e.instances.push(i), i;
    }

    function _g() {
        var h = e.instances.indexOf(this);
        return -1 !== h && (e.instances.splice(h, 1), !0);
    }
    (e = d.exports = f.debug = f.default = f).coerce = function(h) {
        return h instanceof Error ? h.stack || h.message : h;
    }, e.disable = function() {
        e.enable('');
    }, e.enable = function(h) {
        var i;
        e.save(h), e.names = [], e.skips = [];
        var j = ('string' == typeof h ? h : '').split(/[\s,]+/),
            k = j.length;
        for (i = 0; i < k; i++)
            j[i] && ('-' === (h = j[i].replace(/\*/g, '.*?'))[0] ? e.skips.push(new RegExp('^' + h.substr(1) + '$')) : e.names.push(new RegExp('^' + h + '$')));
        for (i = 0; i < e.instances.length; i++) {
            var l = e.instances[i];
            l.enabled = e.enabled(l.namespace);
        }
    }, e.enabled = function(h) {
        if ('*' === h[h.length - 1])
            return !0;
        var i, j;
        for (i = 0, j = e.skips.length; i < j; i++)
            if (e.skips[i].test(h))
                return !1;
        for (i = 0, j = e.names.length; i < j; i++)
            if (e.names[i].test(h))
                return !0;
        return !1;
    }, e.humanize = c('AHVde1'), e.instances = [], e.names = [], e.skips = [], e.formatters = {};
}), c.register('AHVde1', function(d, e) {
    var f = 1000,
        g = 60000,
        h = 3600000,
        i = 86400000,
        j = 31557600000;

    function k(l, m, n) {
        if (!(l < m))
            return l < 1.5 * m ? Math.floor(l / m) + ' ' + n : Math.ceil(l / m) + ' ' + n + 's';
    }
    d.exports = function(l, m) {
        m = m || {};
        var n, o = typeof l;
        if ('string' === o && l.length > 0)
            return function(p) {
                if ((p = String(p)).length > 100)
                    return;
                var q = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(p);
                if (!q)
                    return;
                var r = parseFloat(q[1]);
                switch ((q[2] || 'ms').toLowerCase()) {
                    case 'years':
                    case 'year':
                    case 'yrs':
                    case 'yr':
                    case 'y':
                        return r * j;
                    case 'days':
                    case 'day':
                    case 'd':
                        return r * i;
                    case 'hours':
                    case 'hour':
                    case 'hrs':
                    case 'hr':
                    case 'h':
                        return r * h;
                    case 'minutes':
                    case 'minute':
                    case 'mins':
                    case 'min':
                    case 'm':
                        return r * g;
                    case 'seconds':
                    case 'second':
                    case 'secs':
                    case 'sec':
                    case 's':
                        return r * f;
                    case 'milliseconds':
                    case 'millisecond':
                    case 'msecs':
                    case 'msec':
                    case 'ms':
                        return r;
                    default:
                        return;
                }
            }(l);
        if ('number' === o && !1 === isNaN(l))
            return m.long ? k(n = l, i, 'day') || k(n, h, 'hour') || k(n, g, 'minute') || k(n, f, 'second') || n + ' ms' : function(p) {
                return p >= i ? Math.round(p / i) + 'd' : p >= h ? Math.round(p / h) + 'h' : p >= g ? Math.round(p / g) + 'm' : p >= f ? Math.round(p / f) + 's' : p + 'ms';
            }(l);
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(l));
    };
}), c.register('CEzv3', function(d, e) {
    var f, g, h, i, j, k, l, m, n, o, p;
    a(d.exports, 'protocol', function() {
        return f;
    }, function(q) {
        return f = q;
    }), a(d.exports, 'types', function() {
        return g;
    }, function(q) {
        return g = q;
    }), a(d.exports, 'CONNECT', function() {
        return h;
    }, function(q) {
        return h = q;
    }), a(d.exports, 'DISCONNECT', function() {
        return i;
    }, function(q) {
        return i = q;
    }), a(d.exports, 'EVENT', function() {
        return j;
    }, function(q) {
        return j = q;
    }), a(d.exports, 'ACK', function() {
        return k;
    }, function(q) {
        return k = q;
    }), a(d.exports, 'ERROR', function() {
        return l;
    }, function(q) {
        return l = q;
    }), a(d.exports, 'BINARY_EVENT', function() {
        return m;
    }, function(q) {
        return m = q;
    }), a(d.exports, 'BINARY_ACK', function() {
        return n;
    }, function(q) {
        return n = q;
    }), a(d.exports, 'Encoder', function() {
        return o;
    }, function(q) {
        return o = q;
    }), a(d.exports, 'Decoder', function() {
        return p;
    }, function(q) {
        return p = q;
    });
    var q = c('HiLL2')('socket.io-parser'),
        r = c('SsMwT'),
        s = c('C4nAM'),
        t = c('Nprko0'),
        u = c('pW1Qb');

    function v() {}
    f = 4, g = [
        'CONNECT',
        'DISCONNECT',
        'EVENT',
        'ACK',
        'ERROR',
        'BINARY_EVENT',
        'BINARY_ACK'
    ], h = 0, i = 1, j = 2, k = 3, m = 5, n = 6, o = v, p = _y;
    var w = (l = 4) + '"encode error"';

    function x(y) {
        var z = '' + y.type;
        if (m !== y.type && n !== y.type || (z += y.attachments + '-'), y.nsp && '/' !== y.nsp && (z += y.nsp + ','), null != y.id && (z += y.id), null != y.data) {
            var A = function(B) {
                try {
                    return JSON.stringify(B);
                } catch (B) {
                    return !1;
                }
            }(y.data);
            if (!1 === A)
                return w;
            z += A;
        }
        return q('encoded %j as %s', y, z), z;
    }

    function _y() {
        this.reconstructor = null;
    }

    function z(A) {
        this.reconPack = A, this.buffers = [];
    }

    function A(B) {
        return {
            type: l,
            data: 'parser error: ' + B
        };
    }
    v.prototype.encode = function(B, C) {
        (q('encoding packet %j', B), m === B.type || n === B.type) ? function(D, E) {
            function F(G) {
                var H = s.deconstructPacket(G),
                    I = x(H.packet),
                    J = H.buffers;
                J.unshift(I), E(J);
            }
            s.removeBlobs(D, F);
        }(B, C) : C([x(B)]);
    }, r(_y.prototype), _y.prototype.add = function(B) {
        var C;
        if ('string' == typeof B)
            C = function(D) {
                var E = 0,
                    F = {
                        type: Number(D.charAt(0))
                    };
                if (null == g[F.type])
                    return A('unknown packet type ' + F.type);
                if (m === F.type || n === F.type) {
                    for (var G = '';
                        '-' !== D.charAt(++E) && (G += D.charAt(E), E != D.length););
                    if (G != Number(G) || '-' !== D.charAt(E))
                        throw new Error('Illegal attachments');
                    F.attachments = Number(G);
                }
                if ('/' === D.charAt(E + 1))
                    for (F.nsp = ''; ++E;) {
                        if (',' === (h = D.charAt(E)))
                            break;
                        if (F.nsp += h, E === D.length)
                            break;
                    }
                else
                    F.nsp = '/';
                var G = D.charAt(E + 1);
                if ('' !== G && Number(G) == G) {
                    for (F.id = ''; ++E;) {
                        var H;
                        if (null == (H = D.charAt(E)) || Number(H) != H) {
                            --E;
                            break;
                        }
                        if (F.id += D.charAt(E), E === D.length)
                            break;
                    }
                    F.id = Number(F.id);
                }
                if (D.charAt(++E)) {
                    var H = function(I) {
                        try {
                            return JSON.parse(I);
                        } catch (I) {
                            return !1;
                        }
                    }(D.substr(E));
                    if (!(!1 !== H && (F.type === l || t(H))))
                        return A('invalid payload');
                    F.data = H;
                }
                return q('decoded %s as %j', D, F), F;
            }(B), m === C.type || n === C.type ? (this.reconstructor = new z(C), 0 === this.reconstructor.reconPack.attachments && this.emit('decoded', C)) : this.emit('decoded', C);
        else {
            if (!u(B) && !B.base64)
                throw new Error('Unknown type: ' + B);
            if (!this.reconstructor)
                throw new Error('got binary data when not reconstructing a packet');
            (C = this.reconstructor.takeBinaryData(B)) && (this.reconstructor = null, this.emit('decoded', C));
        }
    }, _y.prototype.destroy = function() {
        this.reconstructor && this.reconstructor.finishedReconstruction();
    }, z.prototype.takeBinaryData = function(B) {
        if (this.buffers.push(B), this.buffers.length === this.reconPack.attachments) {
            var C = s.reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), C;
        }
        return null;
    }, z.prototype.finishedReconstruction = function() {
        this.reconPack = null, this.buffers = [];
    };
}), c.register('HiLL2', function(d, e) {
    var f = c('SOClG');

    function g() {
        var h;
        try {
            h = e.storage.debug;
        } catch (h) {}
        return !h && void 0 !== f && 'env' in f && (h = void 0), h;
    }
    (e = d.exports = c('959f5')).log = function() {
        return 'object' == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }, e.formatArgs = function(h) {
        var i = this.useColors;
        if (h[0] = (i ? '%c' : '') + this.namespace + (i ? ' %c' : ' ') + h[0] + (i ? '%c ' : ' ') + '+' + e.humanize(this.diff), !i)
            return;
        var j = 'color: ' + this.color;
        h.splice(1, 0, j, 'color: inherit');
        var k = 0,
            l = 0;
        h[0].replace(/%[a-zA-Z%]/g, function(m) {
            '%%' !== m && (k++, '%c' === m && (l = k));
        }), h.splice(l, 0, j);
    }, e.save = function(h) {
        try {
            null == h ? e.storage.removeItem('debug') : e.storage.debug = h;
        } catch (h) {}
    }, e.load = g, e.useColors = function() {
        return !('undefined' == typeof window || !window.process || 'renderer' !== window.process.type) || ('undefined' == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ('undefined' != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || 'undefined' != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }, e.storage = 'undefined' != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
        try {
            return window.localStorage;
        } catch (d) {}
    }(), e.colors = [
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
    ], e.formatters.j = function(h) {
        try {
            return JSON.stringify(h);
        } catch (h) {
            return '[UnexpectedJSONParseError]: ' + h.message;
        }
    }, e.enable(g());
}), c.register('959f5', function(d, e) {
    function f(g) {
        var h;

        function i() {
            if (i.enabled) {
                var j = i,
                    k = +new Date(),
                    l = k - (h || k);
                j.diff = l, j.prev = h, j.curr = k, h = k;
                for (var m = new Array(arguments.length), n = 0; n < m.length; n++)
                    m[n] = arguments[n];
                m[0] = e.coerce(m[0]), 'string' != typeof m[0] && m.unshift('%O');
                var o = 0;
                m[0] = m[0].replace(/%([a-zA-Z%])/g, function(p, q) {
                    if ('%%' === p)
                        return p;
                    o++;
                    var r = e.formatters[q];
                    if ('function' == typeof r) {
                        var s = m[o];
                        p = r.call(j, s), m.splice(o, 1), o--;
                    }
                    return p;
                }), e.formatArgs.call(j, m);
                var p = i.log || e.log || console.log.bind(console);
                p.apply(j, m);
            }
        }
        return i.namespace = g, i.enabled = e.enabled(g), i.useColors = e.useColors(), i.color = function(j) {
            var k, l = 0;
            for (k in j)
                l = (l << 5) - l + j.charCodeAt(k), l |= 0;
            return e.colors[Math.abs(l) % e.colors.length];
        }(g), i.destroy = _g, 'function' == typeof e.init && e.init(i), e.instances.push(i), i;
    }

    function _g() {
        var h = e.instances.indexOf(this);
        return -1 !== h && (e.instances.splice(h, 1), !0);
    }
    (e = d.exports = f.debug = f.default = f).coerce = function(h) {
        return h instanceof Error ? h.stack || h.message : h;
    }, e.disable = function() {
        e.enable('');
    }, e.enable = function(h) {
        var i;
        e.save(h), e.names = [], e.skips = [];
        var j = ('string' == typeof h ? h : '').split(/[\s,]+/),
            k = j.length;
        for (i = 0; i < k; i++)
            j[i] && ('-' === (h = j[i].replace(/\*/g, '.*?'))[0] ? e.skips.push(new RegExp('^' + h.substr(1) + '$')) : e.names.push(new RegExp('^' + h + '$')));
        for (i = 0; i < e.instances.length; i++) {
            var l = e.instances[i];
            l.enabled = e.enabled(l.namespace);
        }
    }, e.enabled = function(h) {
        if ('*' === h[h.length - 1])
            return !0;
        var i, j;
        for (i = 0, j = e.skips.length; i < j; i++)
            if (e.skips[i].test(h))
                return !1;
        for (i = 0, j = e.names.length; i < j; i++)
            if (e.names[i].test(h))
                return !0;
        return !1;
    }, e.humanize = c('AHVde0'), e.instances = [], e.names = [], e.skips = [], e.formatters = {};
}), c.register('AHVde0', function(d, e) {
    var f = 1000,
        g = 60000,
        h = 3600000,
        i = 86400000,
        j = 31557600000;

    function k(l, m, n) {
        if (!(l < m))
            return l < 1.5 * m ? Math.floor(l / m) + ' ' + n : Math.ceil(l / m) + ' ' + n + 's';
    }
    d.exports = function(l, m) {
        m = m || {};
        var n, o = typeof l;
        if ('string' === o && l.length > 0)
            return function(p) {
                if ((p = String(p)).length > 100)
                    return;
                var q = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(p);
                if (!q)
                    return;
                var r = parseFloat(q[1]);
                switch ((q[2] || 'ms').toLowerCase()) {
                    case 'years':
                    case 'year':
                    case 'yrs':
                    case 'yr':
                    case 'y':
                        return r * j;
                    case 'days':
                    case 'day':
                    case 'd':
                        return r * i;
                    case 'hours':
                    case 'hour':
                    case 'hrs':
                    case 'hr':
                    case 'h':
                        return r * h;
                    case 'minutes':
                    case 'minute':
                    case 'mins':
                    case 'min':
                    case 'm':
                        return r * g;
                    case 'seconds':
                    case 'second':
                    case 'secs':
                    case 'sec':
                    case 's':
                        return r * f;
                    case 'milliseconds':
                    case 'millisecond':
                    case 'msecs':
                    case 'msec':
                    case 'ms':
                        return r;
                    default:
                        return;
                }
            }(l);
        if ('number' === o && !1 === isNaN(l))
            return m.long ? k(n = l, i, 'day') || k(n, h, 'hour') || k(n, g, 'minute') || k(n, f, 'second') || n + ' ms' : function(p) {
                return p >= i ? Math.round(p / i) + 'd' : p >= h ? Math.round(p / h) + 'h' : p >= g ? Math.round(p / g) + 'm' : p >= f ? Math.round(p / f) + 's' : p + 'ms';
            }(l);
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(l));
    };
}), c.register('SsMwT', function(d, e) {
    function f(g) {
        if (g)
            return function(h) {
                for (var i in f.prototype)
                    h[i] = f.prototype[i];
                return h;
            }(g);
    }
    d.exports = f, f.prototype.on = f.prototype.addEventListener = function(g, h) {
        return this._callbacks = this._callbacks || {}, (this._callbacks['$' + g] = this._callbacks['$' + g] || []).push(h), this;
    }, f.prototype.once = function(g, h) {
        function i() {
            this.off(g, i), h.apply(this, arguments);
        }
        return i.fn = h, this.on(g, i), this;
    }, f.prototype.off = f.prototype.removeListener = f.prototype.removeAllListeners = f.prototype.removeEventListener = function(g, h) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
            return this._callbacks = {}, this;
        var i, j = this._callbacks['$' + g];
        if (!j)
            return this;
        if (1 == arguments.length)
            return delete this._callbacks['$' + g], this;
        for (var k = 0; k < j.length; k++)
            if ((i = j[k]) === h || i.fn === h) {
                j.splice(k, 1);
                break;
            }
        return 0 === j.length && delete this._callbacks['$' + g], this;
    }, f.prototype.emit = function(g) {
        this._callbacks = this._callbacks || {};
        for (var h = new Array(arguments.length - 1), i = this._callbacks['$' + g], j = 1; j < arguments.length; j++)
            h[j - 1] = arguments[j];
        if (i) {
            j = 0;
            for (var k = (i = i.slice(0)).length; j < k; ++j)
                i[j].apply(this, h);
        }
        return this;
    }, f.prototype.listeners = function(g) {
        return this._callbacks = this._callbacks || {}, this._callbacks['$' + g] || [];
    }, f.prototype.hasListeners = function(g) {
        return !!this.listeners(g).length;
    };
}), c.register('C4nAM', function(d, e) {
    var f, g, h;
    a(d.exports, 'deconstructPacket', function() {
        return f;
    }, function(i) {
        return f = i;
    }), a(d.exports, 'reconstructPacket', function() {
        return g;
    }, function(i) {
        return g = i;
    }), a(d.exports, 'removeBlobs', function() {
        return h;
    }, function(i) {
        return h = i;
    });
    var i = c('Nprko0'),
        j = c('pW1Qb'),
        k = Object.prototype.toString,
        l = 'function' == typeof Blob || 'undefined' != typeof Blob && '[object BlobConstructor]' === k.call(Blob),
        m = 'function' == typeof File || 'undefined' != typeof File && '[object FileConstructor]' === k.call(File);

    function n(o, p) {
        if (!o)
            return o;
        if (j(o)) {
            var q = {
                _placeholder: !0,
                num: p.length
            };
            return p.push(o), q;
        }
        if (i(o)) {
            for (var q = new Array(o.length), r = 0; r < o.length; r++)
                q[r] = n(o[r], p);
            return q;
        }
        if ('object' == typeof o && !(o instanceof Date)) {
            e = {};
            for (var q in o)
                e[q] = n(o[q], p);
            return e;
        }
        return o;
    }

    function o(p, q) {
        if (!p)
            return p;
        if (p && p._placeholder)
            return q[p.num];
        if (i(p))
            for (var r = 0; r < p.length; r++)
                p[r] = o(p[r], q);
        else if ('object' == typeof p)
            for (var s in p)
                p[s] = o(p[s], q);
        return p;
    }
    f = function(p) {
        var q = [],
            r = p.data,
            s = p;
        return s.data = n(r, q), s.attachments = q.length, {
            packet: s,
            buffers: q
        };
    }, g = function(p, q) {
        return p.data = o(p.data, q), p.attachments = void 0, p;
    }, h = function(p, q) {
        var r = 0,
            s = p;
        ! function p(t, u, v) {
            if (!t)
                return t;
            if (l && t instanceof Blob || m && t instanceof File) {
                r++;
                var w = new FileReader();
                w.onload = function() {
                    v ? v[u] = this.result : s = this.result, --r || q(s);
                }, w.readAsArrayBuffer(t);
            } else if (i(t))
                for (var w = 0; w < t.length; w++)
                    p(t[w], w, t);
            else if ('object' == typeof t && !j(t))
                for (var x in t)
                    p(t[x], x, t);
        }(s), r || q(s);
    };
}), c.register('Nprko0', function(d, e) {
    var f = {}.toString;
    d.exports = Array.isArray || function(g) {
        return '[object Array]' == f.call(g);
    };
}), c.register('pW1Qb', function(d, e) {
    var f = c('gUNWj').Buffer;
    d.exports = function(g) {
        return _g && f.isBuffer(g) || _h && (g instanceof ArrayBuffer || function(h) {
            return 'function' == typeof ArrayBuffer.isView ? ArrayBuffer.isView(h) : h.buffer instanceof ArrayBuffer;
        }(g));
    };
    var _g = 'function' == typeof f && 'function' == typeof f.isBuffer,
        _h = 'function' == typeof ArrayBuffer;
}), c.register('AraRz', function(d, e) {
    var f = c('Ck7z4'),
        g = c('LDiWj'),
        h = c('SsMwT'),
        i = c('CEzv3'),
        j = c('DAUMB'),
        k = c('xSI13'),
        l = c('enVEo')('socket.io-client:manager'),
        m = c('I4hk5'),
        n = c('GCye7'),
        o = Object.prototype.hasOwnProperty;

    function p(q, r) {
        if (!(this instanceof p))
            return new p(q, r);
        q && 'object' == typeof q && (r = q, q = void 0), (r = r || {}).path = r.path || '/socket.io', this.nsps = {}, this.subs = [], this.opts = r, this.reconnection(!1 !== r.reconnection), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1000), this.reconnectionDelayMax(r.reconnectionDelayMax || 5000), this.randomizationFactor(r.randomizationFactor || 0.5), this.backoff = new n({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(null == r.timeout ? 20000 : r.timeout), this.readyState = 'closed', this.uri = q, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
        var s = r.parser || i;
        this.encoder = new s.Encoder(), this.decoder = new s.Decoder(), this.autoConnect = !1 !== r.autoConnect, this.autoConnect && this.open();
    }
    d.exports = p, p.prototype.emitAll = function() {
        for (var q in (this.emit.apply(this, arguments), this.nsps))
            o.call(this.nsps, q) && this.nsps[q].emit.apply(this.nsps[q], arguments);
    }, p.prototype.updateSocketIds = function() {
        for (var q in this.nsps)
            o.call(this.nsps, q) && (this.nsps[q].id = this.generateId(q));
    }, p.prototype.generateId = function(q) {
        return ('/' === q ? '' : q + '#') + this.engine.id;
    }, h(p.prototype), p.prototype.reconnection = function(q) {
        return arguments.length ? (this._reconnection = !!q, this) : this._reconnection;
    }, p.prototype.reconnectionAttempts = function(q) {
        return arguments.length ? (this._reconnectionAttempts = q, this) : this._reconnectionAttempts;
    }, p.prototype.reconnectionDelay = function(q) {
        return arguments.length ? (this._reconnectionDelay = q, this.backoff && this.backoff.setMin(q), this) : this._reconnectionDelay;
    }, p.prototype.randomizationFactor = function(q) {
        return arguments.length ? (this._randomizationFactor = q, this.backoff && this.backoff.setJitter(q), this) : this._randomizationFactor;
    }, p.prototype.reconnectionDelayMax = function(q) {
        return arguments.length ? (this._reconnectionDelayMax = q, this.backoff && this.backoff.setMax(q), this) : this._reconnectionDelayMax;
    }, p.prototype.timeout = function(q) {
        return arguments.length ? (this._timeout = q, this) : this._timeout;
    }, p.prototype.maybeReconnectOnOpen = function() {
        !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
    }, p.prototype.open = p.prototype.connect = function(q, r) {
        if (l('readyState %s', this.readyState), ~this.readyState.indexOf('open'))
            return this;
        l('opening %s', this.uri), this.engine = f(this.uri, this.opts);
        var s = this.engine,
            t = this;
        this.readyState = 'opening', this.skipReconnect = !1;
        var u = j(s, 'open', function() {
                t.onopen(), q && q();
            }),
            v = j(s, 'error', function(w) {
                if (l('connect_error'), t.cleanup(), t.readyState = 'closed', t.emitAll('connect_error', w), q) {
                    var x = new Error('Connection error');
                    x.data = w, q(x);
                } else
                    t.maybeReconnectOnOpen();
            });
        if (!1 !== this._timeout) {
            var w = this._timeout;
            l('connect attempt will timeout after %d', w), 0 === w && u.destroy();
            var x = setTimeout(function() {
                l('connect attempt timed out after %d', w), u.destroy(), s.close(), s.emit('error', 'timeout'), t.emitAll('connect_timeout', w);
            }, w);
            this.subs.push({
                destroy: function() {
                    clearTimeout(x);
                }
            });
        }
        return this.subs.push(u), this.subs.push(v), this;
    }, p.prototype.onopen = function() {
        l('open'), this.cleanup(), this.readyState = 'open', this.emit('open');
        var q = this.engine;
        this.subs.push(j(q, 'data', k(this, 'ondata'))), this.subs.push(j(q, 'ping', k(this, 'onping'))), this.subs.push(j(q, 'pong', k(this, 'onpong'))), this.subs.push(j(q, 'error', k(this, 'onerror'))), this.subs.push(j(q, 'close', k(this, 'onclose'))), this.subs.push(j(this.decoder, 'decoded', k(this, 'ondecoded')));
    }, p.prototype.onping = function() {
        this.lastPing = new Date(), this.emitAll('ping');
    }, p.prototype.onpong = function() {
        this.emitAll('pong', new Date() - this.lastPing);
    }, p.prototype.ondata = function(q) {
        this.decoder.add(q);
    }, p.prototype.ondecoded = function(q) {
        this.emit('packet', q);
    }, p.prototype.onerror = function(q) {
        l('error', q), this.emitAll('error', q);
    }, p.prototype.socket = function(q, r) {
        var s = this.nsps[q];
        if (!s) {
            s = new g(this, q, r), this.nsps[q] = s;
            var t = this;
            s.on('connecting', h), s.on('connect', function() {
                s.id = t.generateId(q);
            }), this.autoConnect && h();
        }

        function t() {
            ~m(f.connecting, s) || f.connecting.push(s);
        }
        return s;
    }, p.prototype.destroy = function(q) {
        var r = m(this.connecting, q);
        ~r && this.connecting.splice(r, 1), this.connecting.length || this.close();
    }, p.prototype.packet = function(q) {
        l('writing packet %j', q);
        var r = this;
        q.query && 0 === q.type && (q.nsp += '?' + q.query), r.encoding ? r.packetBuffer.push(q) : (r.encoding = !0, this.encoder.encode(q, function(s) {
            for (var t = 0; t < s.length; t++)
                r.engine.write(s[t], q.options);
            r.encoding = !1, r.processPacketQueue();
        }));
    }, p.prototype.processPacketQueue = function() {
        if (this.packetBuffer.length > 0 && !this.encoding) {
            var q = this.packetBuffer.shift();
            this.packet(q);
        }
    }, p.prototype.cleanup = function() {
        l('cleanup');
        for (var q = this.subs.length, r = 0; r < q; r++) {
            this.subs.shift().destroy();
        }
        this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
    }, p.prototype.close = p.prototype.disconnect = function() {
        l('disconnect'), this.skipReconnect = !0, this.reconnecting = !1, 'opening' === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = 'closed', this.engine && this.engine.close();
    }, p.prototype.onclose = function(q) {
        l('onclose'), this.cleanup(), this.backoff.reset(), this.readyState = 'closed', this.emit('close', q), this._reconnection && !this.skipReconnect && this.reconnect();
    }, p.prototype.reconnect = function() {
        if (this.reconnecting || this.skipReconnect)
            return this;
        var q = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            l('reconnect failed'), this.backoff.reset(), this.emitAll('reconnect_failed'), this.reconnecting = !1;
        else {
            var r = this.backoff.duration();
            l('will wait %dms before reconnect attempt', r), this.reconnecting = !0;
            var s = setTimeout(function() {
                q.skipReconnect || (l('attempting reconnect'), q.emitAll('reconnect_attempt', q.backoff.attempts), q.emitAll('reconnecting', q.backoff.attempts), q.skipReconnect || q.open(function(t) {
                    t ? (l('reconnect attempt error'), q.reconnecting = !1, q.reconnect(), q.emitAll('reconnect_error', t.data)) : (l('reconnect success'), q.onreconnect());
                }));
            }, r);
            this.subs.push({
                destroy: function() {
                    clearTimeout(s);
                }
            });
        }
    }, p.prototype.onreconnect = function() {
        var q = this.backoff.attempts;
        this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll('reconnect', q);
    };
}), c.register('Ck7z4', function(d, e) {
    d.exports = c('vDzhM'), d.exports.parser = c('TDSUl');
}), c.register('vDzhM', function(d, e) {
    var f = c('SsMwT'),
        g = c('htR74')('engine.io-client:socket'),
        h = c('I4hk5'),
        i = c('nq8nV'),
        j = c('ApWPw');

    function k(l, m) {
        if (!(this instanceof k))
            return new k(l, m);
        m = m || {}, l && 'object' == typeof l && (m = l, l = null), l ? (l = i(l), m.hostname = l.host, m.secure = 'https' === l.protocol || 'wss' === l.protocol, m.port = l.port, l.query && (m.query = l.query)) : m.host && (m.hostname = i(m.host).host), this.secure = null != m.secure ? m.secure : 'undefined' != typeof location && 'https:' === location.protocol, m.hostname && !m.port && (m.port = this.secure ? '443' : '80'), this.agent = m.agent || !1, this.hostname = m.hostname || ('undefined' != typeof location ? location.hostname : 'localhost'), this.port = m.port || ('undefined' != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = m.query || {}, 'string' == typeof this.query && (this.query = j.decode(this.query)), this.upgrade = !1 !== m.upgrade, this.path = (m.path || '/engine.io').replace(/\/$/, '') + '/', this.forceJSONP = !!m.forceJSONP, this.jsonp = !1 !== m.jsonp, this.forceBase64 = !!m.forceBase64, this.enablesXDR = !!m.enablesXDR, this.withCredentials = !1 !== m.withCredentials, this.timestampParam = m.timestampParam || 't', this.timestampRequests = m.timestampRequests, this.transports = m.transports || [
            'polling',
            'websocket'
        ], this.transportOptions = m.transportOptions || {}, this.readyState = '', this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = m.policyPort || 843, this.rememberUpgrade = m.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = m.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== m.perMessageDeflate && (m.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = m.pfx || null, this.key = m.key || null, this.passphrase = m.passphrase || null, this.cert = m.cert || null, this.ca = m.ca || null, this.ciphers = m.ciphers || null, this.rejectUnauthorized = void 0 === m.rejectUnauthorized || m.rejectUnauthorized, this.forceNode = !!m.forceNode, this.isReactNative = 'undefined' != typeof navigator && 'string' == typeof navigator.product && 'reactnative' === navigator.product.toLowerCase(), ('undefined' == typeof self || this.isReactNative) && (m.extraHeaders && Object.keys(m.extraHeaders).length > 0 && (this.extraHeaders = m.extraHeaders), m.localAddress && (this.localAddress = m.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open();
    }
    d.exports = k, k.priorWebsocketSuccess = !1, f(k.prototype), k.protocol = c('TDSUl').protocol, k.Socket = k, k.Transport = c('4D21y'), k.transports = c('cQnYI'), k.parser = c('TDSUl'), k.prototype.createTransport = function(l) {
        g('creating transport "%s"', l);
        var m = function(n) {
            var o = {};
            for (var p in n)
                n.hasOwnProperty(p) && (o[p] = n[p]);
            return o;
        }(this.query);
        m.EIO = c('TDSUl').protocol, m.transport = l;
        var n = this.transportOptions[l] || {};
        return this.id && (m.sid = this.id), new(c('cQnYI'))[l]({
            query: m,
            socket: this,
            agent: n.agent || this.agent,
            hostname: n.hostname || this.hostname,
            port: n.port || this.port,
            secure: n.secure || this.secure,
            path: n.path || this.path,
            forceJSONP: n.forceJSONP || this.forceJSONP,
            jsonp: n.jsonp || this.jsonp,
            forceBase64: n.forceBase64 || this.forceBase64,
            enablesXDR: n.enablesXDR || this.enablesXDR,
            withCredentials: n.withCredentials || this.withCredentials,
            timestampRequests: n.timestampRequests || this.timestampRequests,
            timestampParam: n.timestampParam || this.timestampParam,
            policyPort: n.policyPort || this.policyPort,
            pfx: n.pfx || this.pfx,
            key: n.key || this.key,
            passphrase: n.passphrase || this.passphrase,
            cert: n.cert || this.cert,
            ca: n.ca || this.ca,
            ciphers: n.ciphers || this.ciphers,
            rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
            perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
            extraHeaders: n.extraHeaders || this.extraHeaders,
            forceNode: n.forceNode || this.forceNode,
            localAddress: n.localAddress || this.localAddress,
            requestTimeout: n.requestTimeout || this.requestTimeout,
            protocols: n.protocols || void 0,
            isReactNative: this.isReactNative
        });
    }, k.prototype.open = function() {
        var l;
        if (this.rememberUpgrade && k.priorWebsocketSuccess && -1 !== this.transports.indexOf('websocket'))
            l = 'websocket';
        else {
            if (0 === this.transports.length) {
                var m = this;
                return void setTimeout(function() {
                    m.emit('error', 'No transports available');
                }, 0);
            }
            l = this.transports[0];
        }
        this.readyState = 'opening';
        try {
            l = this.createTransport(l);
        } catch (l) {
            return this.transports.shift(), void this.open();
        }
        l.open(), this.setTransport(l);
    }, k.prototype.setTransport = function(l) {
        g('setting transport %s', l.name);
        var m = this;
        this.transport && (g('clearing existing transport %s', this.transport.name), this.transport.removeAllListeners()), this.transport = l, l.on('drain', function() {
            m.onDrain();
        }).on('packet', function(n) {
            m.onPacket(n);
        }).on('error', function(n) {
            m.onError(n);
        }).on('close', function() {
            m.onClose('transport close');
        });
    }, k.prototype.probe = function(l) {
        g('probing transport "%s"', l);
        var m = this.createTransport(l, {
                probe: 1
            }),
            n = !1,
            o = this;

        function p() {
            if (o.onlyBinaryUpgrades) {
                var q = !this.supportsBinary && o.transport.supportsBinary;
                n = n || q;
            }
            n || (g('probe transport "%s" opened', l), m.send([{
                type: 'ping',
                data: 'probe'
            }]), m.once('packet', function(q) {
                if (!n)
                    if ('pong' === q.type && 'probe' === q.data) {
                        if (g('probe transport "%s" pong', l), o.upgrading = !0, o.emit('upgrading', m), !m)
                            return;
                        k.priorWebsocketSuccess = 'websocket' === m.name, g('pausing current transport "%s"', o.transport.name), o.transport.pause(function() {
                            n || 'closed' !== o.readyState && (g('changing transport and sending upgrade packet'), _v(), o.setTransport(m), m.send([{
                                type: 'upgrade'
                            }]), o.emit('upgrade', m), m = null, o.upgrading = !1, o.flush());
                        });
                    } else {
                        g('probe transport "%s" failed', l);
                        var r = new Error('probe error');
                        r.transport = m.name, o.emit('upgradeError', r);
                    }
            }));
        }

        function q() {
            n || (n = !0, _v(), m.close(), m = null);
        }

        function r(s) {
            var t = new Error('probe error: ' + s);
            t.transport = m.name, q(), g('probe transport "%s" failed because of error: %s', l, s), o.emit('upgradeError', t);
        }

        function s() {
            r('transport closed');
        }

        function t() {
            r('socket closed');
        }

        function u(v) {
            m && v.name !== m.name && (g('"%s" works - aborting "%s"', v.name, m.name), q());
        }

        function _v() {
            m.removeListener('open', p), m.removeListener('error', r), m.removeListener('close', s), o.removeListener('close', t), o.removeListener('upgrading', u);
        }
        k.priorWebsocketSuccess = !1, m.once('open', p), m.once('error', r), m.once('close', s), this.once('close', t), this.once('upgrading', u), m.open();
    }, k.prototype.onOpen = function() {
        if (g('socket open'), this.readyState = 'open', k.priorWebsocketSuccess = 'websocket' === this.transport.name, this.emit('open'), this.flush(), 'open' === this.readyState && this.upgrade && this.transport.pause) {
            g('starting upgrade probes');
            for (var l = 0, m = this.upgrades.length; l < m; l++)
                this.probe(this.upgrades[l]);
        }
    }, k.prototype.onPacket = function(l) {
        if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState)
            switch (g('socket receive: type "%s", data "%s"', l.type, l.data), this.emit('packet', l), this.emit('heartbeat'), l.type) {
                case 'open':
                    this.onHandshake(JSON.parse(l.data));
                    break;
                case 'pong':
                    this.setPing(), this.emit('pong');
                    break;
                case 'error':
                    var m = new Error('server error');
                    m.code = l.data, this.onError(m);
                    break;
                case 'message':
                    this.emit('data', l.data), this.emit('message', l.data);
            }
        else
            g('packet received with socket readyState "%s"', this.readyState);
    }, k.prototype.onHandshake = function(l) {
        this.emit('handshake', l), this.id = l.sid, this.transport.query.sid = l.sid, this.upgrades = this.filterUpgrades(l.upgrades), this.pingInterval = l.pingInterval, this.pingTimeout = l.pingTimeout, this.onOpen(), 'closed' !== this.readyState && (this.setPing(), this.removeListener('heartbeat', this.onHeartbeat), this.on('heartbeat', this.onHeartbeat));
    }, k.prototype.onHeartbeat = function(l) {
        clearTimeout(this.pingTimeoutTimer);
        var m = this;
        m.pingTimeoutTimer = setTimeout(function() {
            'closed' !== m.readyState && m.onClose('ping timeout');
        }, l || m.pingInterval + m.pingTimeout);
    }, k.prototype.setPing = function() {
        var l = this;
        clearTimeout(l.pingIntervalTimer), l.pingIntervalTimer = setTimeout(function() {
            g('writing ping packet - expecting pong within %sms', l.pingTimeout), l.ping(), l.onHeartbeat(l.pingTimeout);
        }, l.pingInterval);
    }, k.prototype.ping = function() {
        var l = this;
        this.sendPacket('ping', function() {
            l.emit('ping');
        });
    }, k.prototype.onDrain = function() {
        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit('drain') : this.flush();
    }, k.prototype.flush = function() {
        'closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (g('flushing %d packets in socket', this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit('flush'));
    }, k.prototype.write = k.prototype.send = function(l, m, n) {
        return this.sendPacket('message', l, m, n), this;
    }, k.prototype.sendPacket = function(l, m, n, o) {
        if ('function' == typeof m && (o = m, m = void 0), 'function' == typeof n && (o = n, n = null), 'closing' !== this.readyState && 'closed' !== this.readyState) {
            (n = n || {}).compress = !1 !== n.compress;
            var p = {
                type: l,
                data: m,
                options: n
            };
            this.emit('packetCreate', p), this.writeBuffer.push(p), o && this.once('flush', o), this.flush();
        }
    }, k.prototype.close = function() {
        if ('opening' === this.readyState || 'open' === this.readyState) {
            this.readyState = 'closing';
            var l = this;
            this.writeBuffer.length ? this.once('drain', function() {
                this.upgrading ? f() : e();
            }) : this.upgrading ? f() : e();
        }

        function l() {
            d.onClose('forced close'), g('socket closing - telling transport to close'), d.transport.close();
        }

        function m() {
            d.removeListener('upgrade', m), d.removeListener('upgradeError', m), l();
        }

        function n() {
            d.once('upgrade', m), d.once('upgradeError', m);
        }
        return this;
    }, k.prototype.onError = function(l) {
        g('socket error %j', l), k.priorWebsocketSuccess = !1, this.emit('error', l), this.onClose('transport error', l);
    }, k.prototype.onClose = function(l, m) {
        if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
            g('socket close with reason: "%s"', l);
            clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners('close'), this.transport.close(), this.transport.removeAllListeners(), this.readyState = 'closed', this.id = null, this.emit('close', l, m), this.writeBuffer = [], this.prevBufferLen = 0;
        }
    }, k.prototype.filterUpgrades = function(l) {
        for (var m = [], n = 0, o = l.length; n < o; n++)
            ~h(this.transports, l[n]) && m.push(l[n]);
        return m;
    };
}), c.register('cQnYI', function(d, e) {
    var f, g;
    a(d.exports, 'polling', function() {
        return f;
    }, function(h) {
        return f = h;
    }), a(d.exports, 'websocket', function() {
        return g;
    }, function(h) {
        return g = h;
    });
    var h = c('oHk5R'),
        i = c('KL2wU'),
        j = c('TzekT'),
        k = c('Bw++A');
    f = function(l) {
        var m = !1,
            n = !1,
            o = !1 !== l.jsonp;
        if ('undefined' != typeof location) {
            var p = 'https:' === location.protocol,
                q = location.port;
            q || (q = p ? 443 : 80), m = l.hostname !== location.hostname || q !== l.port, n = l.secure !== p;
        }
        if (l.xdomain = m, l.xscheme = n, 'open' in new h(l) && !l.forceJSONP)
            return new i(l);
        if (!o)
            throw new Error('JSONP disabled');
        return new j(l);
    }, g = k;
}), c.register('oHk5R', function(d, e) {
    var f = c('qBsDw'),
        g = c('cqVUu');
    d.exports = function(h) {
        var i = h.xdomain,
            j = h.xscheme,
            k = h.enablesXDR;
        try {
            if ('undefined' != typeof XMLHttpRequest && (!i || f))
                return new XMLHttpRequest();
        } catch (h) {}
        try {
            if ('undefined' != typeof XDomainRequest && !j && k)
                return new XDomainRequest();
        } catch (h) {}
        if (!i)
            try {
                return new g[(['Active'].concat('Object').join('X'))]('Microsoft.XMLHTTP');
            } catch (h) {}
    };
}), c.register('qBsDw', function(d, e) {
    try {
        d.exports = 'undefined' != typeof XMLHttpRequest && 'withCredentials' in new XMLHttpRequest();
    } catch (e) {
        d.exports = !1;
    }
}), c.register('cqVUu', function(d, e) {
    d.exports = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : Function('return this')();
}), c.register('KL2wU', function(d, e) {
    var f = c('oHk5R'),
        g = c('SzlbK'),
        h = c('SsMwT'),
        i = c('U1Mx4'),
        j = c('htR74')('engine.io-client:polling-xhr'),
        k = c('cqVUu');

    function l() {}

    function m(n) {
        if (g.call(this, n), this.requestTimeout = n.requestTimeout, this.extraHeaders = n.extraHeaders, 'undefined' != typeof location) {
            var o = 'https:' === location.protocol,
                p = location.port;
            p || (p = o ? 443 : 80), this.xd = 'undefined' != typeof location && n.hostname !== location.hostname || p !== n.port, this.xs = n.secure !== o;
        }
    }

    function n(o) {
        this.method = o.method || 'GET', this.uri = o.uri, this.xd = !!o.xd, this.xs = !!o.xs, this.async = !1 !== o.async, this.data = void 0 !== o.data ? o.data : null, this.agent = o.agent, this.isBinary = o.isBinary, this.supportsBinary = o.supportsBinary, this.enablesXDR = o.enablesXDR, this.withCredentials = o.withCredentials, this.requestTimeout = o.requestTimeout, this.pfx = o.pfx, this.key = o.key, this.passphrase = o.passphrase, this.cert = o.cert, this.ca = o.ca, this.ciphers = o.ciphers, this.rejectUnauthorized = o.rejectUnauthorized, this.extraHeaders = o.extraHeaders, this.create();
    }
    if (d.exports = m, d.exports.Request = n, i(m, g), m.prototype.supportsBinary = !0, m.prototype.request = function(o) {
            return (o = o || {}).uri = this.uri(), o.xd = this.xd, o.xs = this.xs, o.agent = this.agent || !1, o.supportsBinary = this.supportsBinary, o.enablesXDR = this.enablesXDR, o.withCredentials = this.withCredentials, o.pfx = this.pfx, o.key = this.key, o.passphrase = this.passphrase, o.cert = this.cert, o.ca = this.ca, o.ciphers = this.ciphers, o.rejectUnauthorized = this.rejectUnauthorized, o.requestTimeout = this.requestTimeout, o.extraHeaders = this.extraHeaders, new n(o);
        }, m.prototype.doWrite = function(o, p) {
            var q = 'string' != typeof o && void 0 !== o,
                r = this.request({
                    method: 'POST',
                    data: o,
                    isBinary: q
                }),
                s = this;
            r.on('success', p), r.on('error', function(t) {
                s.onError('xhr post error', t);
            }), this.sendXhr = r;
        }, m.prototype.doPoll = function() {
            j('xhr poll');
            var o = this.request(),
                p = this;
            o.on('data', function(q) {
                p.onData(q);
            }), o.on('error', function(q) {
                p.onError('xhr poll error', q);
            }), this.pollXhr = o;
        }, h(n.prototype), n.prototype.create = function() {
            var o = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR
            };
            o.pfx = this.pfx, o.key = this.key, o.passphrase = this.passphrase, o.cert = this.cert, o.ca = this.ca, o.ciphers = this.ciphers, o.rejectUnauthorized = this.rejectUnauthorized;
            var p = this.xhr = new f(o),
                q = this;
            try {
                j('xhr open %s: %s', this.method, this.uri), p.open(this.method, this.uri, this.async);
                try {
                    if (this.extraHeaders)
                        for (var r in (p.setDisableHeaderCheck && p.setDisableHeaderCheck(!0), this.extraHeaders))
                            this.extraHeaders.hasOwnProperty(r) && p.setRequestHeader(r, this.extraHeaders[r]);
                } catch (o) {}
                if ('POST' === this.method)
                    try {
                        this.isBinary ? p.setRequestHeader('Content-type', 'application/octet-stream') : p.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
                    } catch (o) {}
                try {
                    p.setRequestHeader('Accept', '*/*');
                } catch (o) {}
                'withCredentials' in p && (p.withCredentials = this.withCredentials), this.requestTimeout && (p.timeout = this.requestTimeout), this.hasXDR() ? (p.onload = function() {
                    q.onLoad();
                }, p.onerror = function() {
                    q.onError(p.responseText);
                }) : p.onreadystatechange = function() {
                    if (2 === p.readyState)
                        try {
                            var r = p.getResponseHeader('Content-Type');
                            (q.supportsBinary && 'application/octet-stream' === r || 'application/octet-stream; charset=UTF-8' === r) && (p.responseType = 'arraybuffer');
                        } catch (o) {}
                    4 === p.readyState && (200 === p.status || 1223 === p.status ? q.onLoad() : setTimeout(function() {
                        q.onError('number' == typeof p.status ? p.status : 0);
                    }, 0));
                }, j('xhr data %s', this.data), p.send(this.data);
            } catch (o) {
                return void setTimeout(function() {
                    q.onError(o);
                }, 0);
            }
            'undefined' != typeof document && (this.index = n.requestsCount++, n.requests[this.index] = this);
        }, n.prototype.onSuccess = function() {
            this.emit('success'), this.cleanup();
        }, n.prototype.onData = function(o) {
            this.emit('data', o), this.onSuccess();
        }, n.prototype.onError = function(o) {
            this.emit('error', o), this.cleanup(!0);
        }, n.prototype.cleanup = function(o) {
            if (void 0 !== this.xhr && null !== this.xhr) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = l : this.xhr.onreadystatechange = l, o)
                    try {
                        this.xhr.abort();
                    } catch (o) {}
                'undefined' != typeof document && delete n.requests[this.index], this.xhr = null;
            }
        }, n.prototype.onLoad = function() {
            var o;
            try {
                var p;
                try {
                    p = this.xhr.getResponseHeader('Content-Type');
                } catch (o) {}
                o = ('application/octet-stream' === p || 'application/octet-stream; charset=UTF-8' === p) && this.xhr.response || this.xhr.responseText;
            } catch (o) {
                this.onError(o);
            }
            null != o && this.onData(o);
        }, n.prototype.hasXDR = function() {
            return 'undefined' != typeof XDomainRequest && !this.xs && this.enablesXDR;
        }, n.prototype.abort = function() {
            this.cleanup();
        }, n.requestsCount = 0, n.requests = {}, 'undefined' != typeof document)
        if ('function' == typeof attachEvent)
            attachEvent('onunload', _o);
        else if ('function' == typeof addEventListener) {
        addEventListener('onpagehide' in k ? 'pagehide' : 'unload', _o, !1);
    }

    function _o() {
        for (var p in n.requests)
            n.requests.hasOwnProperty(p) && n.requests[p].abort();
    }
}), c.register('SzlbK', function(d, e) {
    var f = c('4D21y'),
        g = c('ApWPw'),
        h = c('TDSUl'),
        i = c('U1Mx4'),
        j = c('8BN90'),
        k = c('htR74')('engine.io-client:polling');
    d.exports = _m;
    var l = null != new(c('oHk5R'))({
        xdomain: !1
    }).responseType;

    function _m(n) {
        var o = n && n.forceBase64;
        l && !o || (this.supportsBinary = !1), f.call(this, n);
    }
    i(_m, f), _m.prototype.name = 'polling', _m.prototype.doOpen = function() {
        this.poll();
    }, _m.prototype.pause = function(n) {
        var o = this;

        function p() {
            k('paused'), o.readyState = 'paused', n();
        }
        if (this.readyState = 'pausing', this.polling || !this.writable) {
            var q = 0;
            this.polling && (k('we are currently polling - waiting to pause'), q++, this.once('pollComplete', function() {
                k('pre-pause polling complete'), --q || p();
            })), this.writable || (k('we are currently writing - waiting to pause'), q++, this.once('drain', function() {
                k('pre-pause writing complete'), --q || p();
            }));
        } else
            p();
    }, _m.prototype.poll = function() {
        k('polling'), this.polling = !0, this.doPoll(), this.emit('poll');
    }, _m.prototype.onData = function(n) {
        var o = this;
        k('polling got data %s', n);
        h.decodePayload(n, this.socket.binaryType, function(p, q, r) {
            if ('opening' === o.readyState && o.onOpen(), 'close' === p.type)
                return o.onClose(), !1;
            o.onPacket(p);
        }), 'closed' !== this.readyState && (this.polling = !1, this.emit('pollComplete'), 'open' === this.readyState ? this.poll() : k('ignoring poll - transport state "%s"', this.readyState));
    }, _m.prototype.doClose = function() {
        var n = this;

        function o() {
            k('writing close packet'), n.write([{
                type: 'close'
            }]);
        }
        'open' === this.readyState ? (k('transport open - closing'), o()) : (k('transport not open - deferring close'), this.once('open', o));
    }, _m.prototype.write = function(n) {
        var o = this;
        this.writable = !1;
        var p = function() {
            o.writable = !0, o.emit('drain');
        };
        h.encodePayload(n, this.supportsBinary, function(q) {
            o.doWrite(q, p);
        });
    }, _m.prototype.uri = function() {
        var n = this.query || {},
            o = this.secure ? 'https' : 'http',
            p = '';
        return !1 !== this.timestampRequests && (n[this.timestampParam] = j()), this.supportsBinary || n.sid || (n.b64 = 1), n = g.encode(n), this.port && ('https' === o && 443 !== Number(this.port) || 'http' === o && 80 !== Number(this.port)) && (p = ':' + this.port), n.length && (n = '?' + n), o + '://' + (-1 !== this.hostname.indexOf(':') ? '[' + this.hostname + ']' : this.hostname) + p + this.path + n;
    };
}), c.register('4D21y', function(d, e) {
    var f = c('TDSUl'),
        g = c('SsMwT');

    function h(i) {
        this.path = i.path, this.hostname = i.hostname, this.port = i.port, this.secure = i.secure, this.query = i.query, this.timestampParam = i.timestampParam, this.timestampRequests = i.timestampRequests, this.readyState = '', this.agent = i.agent || !1, this.socket = i.socket, this.enablesXDR = i.enablesXDR, this.withCredentials = i.withCredentials, this.pfx = i.pfx, this.key = i.key, this.passphrase = i.passphrase, this.cert = i.cert, this.ca = i.ca, this.ciphers = i.ciphers, this.rejectUnauthorized = i.rejectUnauthorized, this.forceNode = i.forceNode, this.isReactNative = i.isReactNative, this.extraHeaders = i.extraHeaders, this.localAddress = i.localAddress;
    }
    d.exports = h, g(h.prototype), h.prototype.onError = function(i, j) {
        var k = new Error(i);
        return k.type = 'TransportError', k.description = j, this.emit('error', k), this;
    }, h.prototype.open = function() {
        return 'closed' !== this.readyState && '' !== this.readyState || (this.readyState = 'opening', this.doOpen()), this;
    }, h.prototype.close = function() {
        return 'opening' !== this.readyState && 'open' !== this.readyState || (this.doClose(), this.onClose()), this;
    }, h.prototype.send = function(i) {
        if ('open' !== this.readyState)
            throw new Error('Transport not open');
        this.write(i);
    }, h.prototype.onOpen = function() {
        this.readyState = 'open', this.writable = !0, this.emit('open');
    }, h.prototype.onData = function(i) {
        var j = f.decodePacket(i, this.socket.binaryType);
        this.onPacket(j);
    }, h.prototype.onPacket = function(i) {
        this.emit('packet', i);
    }, h.prototype.onClose = function() {
        this.readyState = 'closed', this.emit('close');
    };
}), c.register('TDSUl', function(d, e) {
    var f, g, h, i, j, k, l, m, n, o, p;
    a(d.exports, 'protocol', function() {
        return f;
    }, function(q) {
        return f = q;
    }), a(d.exports, 'packets', function() {
        return g;
    }, function(q) {
        return g = q;
    }), a(d.exports, 'encodePacket', function() {
        return h;
    }, function(q) {
        return h = q;
    }), a(d.exports, 'encodeBase64Packet', function() {
        return i;
    }, function(q) {
        return i = q;
    }), a(d.exports, 'decodePacket', function() {
        return j;
    }, function(q) {
        return j = q;
    }), a(d.exports, 'decodeBase64Packet', function() {
        return k;
    }, function(q) {
        return k = q;
    }), a(d.exports, 'encodePayload', function() {
        return l;
    }, function(q) {
        return l = q;
    }), a(d.exports, 'encodePayloadAsBlob', function() {
        return o;
    }, function(q) {
        return o = q;
    }), a(d.exports, 'encodePayloadAsArrayBuffer', function() {
        return n;
    }, function(q) {
        return n = q;
    }), a(d.exports, 'decodePayload', function() {
        return m;
    }, function(q) {
        return m = q;
    }), a(d.exports, 'decodePayloadAsBinary', function() {
        return p;
    }, function(q) {
        return p = q;
    });
    var q, r = c('j55Qa'),
        s = c('j4f2G'),
        t = c('PdUyK'),
        u = c('WTlnG'),
        v = c('yXwF3');
    'undefined' != typeof ArrayBuffer && (q = c('Znnkk'));
    var w = 'undefined' != typeof navigator && /Android/i.test(navigator.userAgent),
        x = 'undefined' != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
        y = w || x;
    f = 3;
    var z = g = {
            open: 0,
            close: 1,
            ping: 2,
            pong: 3,
            message: 4,
            upgrade: 5,
            noop: 6
        },
        A = r(z),
        B = {
            type: 'error',
            data: 'parser error'
        },
        C = c('PRwmq');

    function D(E, F, G) {
        for (var H = new Array(E.length), I = u(E.length, G), J = function(K, L, M) {
                F(L, function(N, O) {
                    H[K] = O, M(N, H);
                });
            }, K = 0; K < E.length; K++)
            J(K, E[K], I);
    }
    h = function(E, F, G, H) {
        'function' == typeof F && (H = F, F = !1), 'function' == typeof G && (H = G, G = null);
        var I = void 0 === E.data ? void 0 : E.data.buffer || E.data;
        if ('undefined' != typeof ArrayBuffer && I instanceof ArrayBuffer)
            return function(J, K, L) {
                if (!K)
                    return i(J, L);
                var M = J.data,
                    N = new Uint8Array(M),
                    O = new Uint8Array(1 + M.byteLength);
                O[0] = z[J.type];
                for (var P = 0; P < N.length; P++)
                    O[P + 1] = N[P];
                return L(O.buffer);
            }(E, F, H);
        if (void 0 !== C && I instanceof C)
            return function(J, K, L) {
                if (!K)
                    return i(J, L);
                if (y)
                    return function(M, N, O) {
                        if (!N)
                            return i(M, O);
                        var P = new FileReader();
                        return P.onload = function() {
                            h({
                                type: M.type,
                                data: P.result
                            }, N, !0, O);
                        }, P.readAsArrayBuffer(M.data);
                    }(J, K, L);
                var M = new Uint8Array(1);
                M[0] = z[J.type];
                var N = new C([
                    M.buffer,
                    J.data
                ]);
                return L(N);
            }(E, F, H);
        if (I && I.base64)
            return function(J, K) {
                var L = 'b' + g[J.type] + J.data.data;
                return K(L);
            }(E, H);
        var J = z[E.type];
        return void 0 !== E.data && (J += G ? v.encode(String(E.data), {
            strict: !1
        }) : String(E.data)), H('' + J);
    }, i = function(E, F) {
        var G, H = 'b' + g[E.type];
        if (void 0 !== C && E.data instanceof C) {
            var I = new FileReader();
            return I.onload = function() {
                var J = I.result.split(',')[1];
                F(H + J);
            }, I.readAsDataURL(E.data);
        }
        try {
            G = String.fromCharCode.apply(null, new Uint8Array(E.data));
        } catch (F) {
            for (var I = new Uint8Array(E.data), J = new Array(I.length), K = 0; K < I.length; K++)
                J[K] = I[K];
            G = String.fromCharCode.apply(null, J);
        }
        return H += btoa(G), F(H);
    }, j = function(E, F, G) {
        if (void 0 === E)
            return B;
        if ('string' == typeof E) {
            if ('b' === E.charAt(0))
                return k(E.substr(1), F);
            if (G && !1 === (E = function(H) {
                    try {
                        H = v.decode(H, {
                            strict: !1
                        });
                    } catch (H) {
                        return !1;
                    }
                    return H;
                }(E)))
                return B;
            var H = E.charAt(0);
            return Number(H) == H && A[H] ? E.length > 1 ? {
                type: A[H],
                data: E.substring(1)
            } : {
                type: A[H]
            } : B;
        }
        e = new Uint8Array(E)[0];
        var H = t(E, 1);
        return C && 'blob' === F && (H = new C([H])), {
            type: A[e],
            data: H
        };
    }, k = function(E, F) {
        var G = A[E.charAt(0)];
        if (!q)
            return {
                type: G,
                data: {
                    base64: !0,
                    data: E.substr(1)
                }
            };
        var H = q.decode(E.substr(1));
        return 'blob' === F && C && (H = new C([H])), {
            type: G,
            data: H
        };
    }, l = function(E, F, G) {
        'function' == typeof F && (G = F, F = null);
        var H = s(E);
        if (F && H)
            return C && !y ? o(E, G) : n(E, G);
        if (!E.length)
            return G('0:');
        D(E, function(I, J) {
            h(I, !!H && F, !1, function(K) {
                J(null, function(L) {
                    return L.length + ':' + L;
                }(K));
            });
        }, function(I, J) {
            return G(J.join(''));
        });
    }, m = function(E, F, G) {
        if ('string' != typeof E)
            return p(E, F, G);
        var H;
        if ('function' == typeof F && (G = F, F = null), '' === E)
            return G(B, 0, 1);
        for (var I, J, K = '', L = 0, M = E.length; L < M; L++) {
            var N = E.charAt(L);
            if (':' === N) {
                if ('' === K || K != (I = Number(K)))
                    return G(B, 0, 1);
                if (K != (J = E.substr(L + 1, I)).length)
                    return G(B, 0, 1);
                if (J.length) {
                    if (H = j(J, F, !1), B.type === H.type && B.data === H.data)
                        return G(B, 0, 1);
                    if (!1 === G(H, L + I, M))
                        return;
                }
                L += I, K = '';
            } else
                K += N;
        }
        return '' !== K ? G(B, 0, 1) : void 0;
    }, n = function(E, F) {
        if (!E.length)
            return F(new ArrayBuffer(0));
        D(E, function(G, H) {
            h(G, !0, !0, function(I) {
                return H(null, I);
            });
        }, function(G, H) {
            var I = H.reduce(function(J, K) {
                    var L;
                    return J + (L = 'string' == typeof K ? K.length : K.byteLength).toString().length + L + 2;
                }, 0),
                J = new Uint8Array(I),
                K = 0;
            return H.forEach(function(L) {
                var M = 'string' == typeof L,
                    N = L;
                if (M) {
                    for (var O = new Uint8Array(L.length), P = 0; P < L.length; P++)
                        O[P] = L.charCodeAt(P);
                    N = O.buffer;
                }
                J[K++] = M ? 0 : 1;
                var O = N.byteLength.toString();
                for (h = 0; h < O.length; h++)
                    J[K++] = parseInt(O[h]);
                J[K++] = 255;
                for (I = new Uint8Array(N), h = 0; h < I.length; h++)
                    J[K++] = I[h];
            }), F(J.buffer);
        });
    }, o = function(E, F) {
        D(E, function(G, H) {
            h(G, !0, !0, function(I) {
                var J = new Uint8Array(1);
                if (J[0] = 1, 'string' == typeof I) {
                    for (var K = new Uint8Array(I.length), L = 0; L < I.length; L++)
                        K[L] = I.charCodeAt(L);
                    I = K.buffer, J[0] = 0;
                }
                var K = (I instanceof ArrayBuffer ? I.byteLength : I.size).toString(),
                    L = new Uint8Array(K.length + 1);
                for (f = 0; f < K.length; f++)
                    L[f] = parseInt(K[f]);
                if (L[K.length] = 255, C) {
                    var M = new C([
                        J.buffer,
                        L.buffer,
                        I
                    ]);
                    H(null, M);
                }
            });
        }, function(G, H) {
            return F(new C(H));
        });
    }, p = function(E, F, G) {
        'function' == typeof F && (G = F, F = null);
        for (var H = E, I = []; H.byteLength > 0;) {
            for (var J = new Uint8Array(H), K = 0 === J[0], L = '', M = 1; 255 !== J[M]; M++) {
                if (L.length > 310)
                    return G(B, 0, 1);
                L += J[M];
            }
            H = t(H, 2 + L.length), L = parseInt(L);
            var N = t(H, 0, L);
            if (K)
                try {
                    N = String.fromCharCode.apply(null, new Uint8Array(N));
                } catch (E) {
                    var O = new Uint8Array(N);
                    N = '';
                    for (M = 0; M < O.length; M++)
                        N += String.fromCharCode(O[M]);
                }
            I.push(N), H = t(H, L);
        }
        var J = I.length;
        I.forEach(function(K, L) {
            G(j(K, F, !0), L, J);
        });
    };
}), c.register('j55Qa', function(d, e) {
    d.exports = Object.keys || function(f) {
        var g = [],
            h = Object.prototype.hasOwnProperty;
        for (var i in f)
            h.call(f, i) && g.push(i);
        return g;
    };
}), c.register('j4f2G', function(d, e) {
    var f = c('gUNWj').Buffer,
        g = c('Nprko'),
        h = Object.prototype.toString,
        i = 'function' == typeof Blob || 'undefined' != typeof Blob && '[object BlobConstructor]' === h.call(Blob),
        j = 'function' == typeof File || 'undefined' != typeof File && '[object FileConstructor]' === h.call(File);
    d.exports = function d(k) {
        if (!k || 'object' != typeof k)
            return !1;
        if (g(k)) {
            for (var l = 0, m = k.length; l < m; l++)
                if (d(k[l]))
                    return !0;
            return !1;
        }
        if ('function' == typeof f && f.isBuffer && f.isBuffer(k) || 'function' == typeof ArrayBuffer && k instanceof ArrayBuffer || i && k instanceof Blob || j && k instanceof File)
            return !0;
        if (k.toJSON && 'function' == typeof k.toJSON && 1 === arguments.length)
            return d(k.toJSON(), !0);
        for (var l in k)
            if (Object.prototype.hasOwnProperty.call(k, l) && d(k[l]))
                return !0;
        return !1;
    };
}), c.register('Nprko', function(d, e) {
    var f = {}.toString;
    d.exports = Array.isArray || function(g) {
        return '[object Array]' == f.call(g);
    };
}), c.register('PdUyK', function(d, e) {
    d.exports = function(f, g, h) {
        var i = f.byteLength;
        if (g = g || 0, h = h || i, f.slice)
            return f.slice(g, h);
        if (g < 0 && (g += i), h < 0 && (h += i), h > i && (h = i), g >= i || g >= h || 0 === i)
            return new ArrayBuffer(0);
        for (var j = new Uint8Array(f), k = new Uint8Array(h - g), l = g, m = 0; l < h; l++, m++)
            k[m] = j[l];
        return k.buffer;
    };
}), c.register('WTlnG', function(d, e) {
    function f() {}
    d.exports = function(g, h, i) {
        var j = !1;
        return i = i || f, _k.count = g, 0 === g ? h() : _k;

        function _k(l, m) {
            if (_k.count <= 0)
                throw new Error('after called too many times');
            --_k.count, l ? (j = !0, h(l), h = i) : 0 !== _k.count || j || h(null, m);
        }
    };
}), c.register('yXwF3', function(d, e) {
    var f, g, h, i = String.fromCharCode;

    function j(k) {
        for (var l, m, n = [], o = 0, p = k.length; o < p;)
            (l = k.charCodeAt(o++)) >= 55296 && l <= 56319 && o < p ? 56320 == (64512 & (m = k.charCodeAt(o++))) ? n.push(((1023 & l) << 10) + (1023 & m) + 65536) : (n.push(l), o--) : n.push(l);
        return n;
    }

    function k(l, m) {
        if (l >= 55296 && l <= 57343) {
            if (m)
                throw Error('Lone surrogate U+' + l.toString(16).toUpperCase() + ' is not a scalar value');
            return !1;
        }
        return !0;
    }

    function l(m, n) {
        return i(m >> n & 63 | 128);
    }

    function m(n, o) {
        if (0 == (4294967168 & n))
            return i(n);
        var p = '';
        return 0 == (4294965248 & n) ? p = i(n >> 6 & 31 | 192) : 0 == (4294901760 & n) ? (k(n, o) || (n = 65533), p = i(n >> 12 & 15 | 224), p += l(n, 6)) : 0 == (4292870144 & n) && (p = i(n >> 18 & 7 | 240), p += l(n, 12), p += l(n, 6)), p += i(63 & n | 128);
    }

    function n() {
        if (h >= g)
            throw Error('Invalid byte index');
        var o = 255 & f[h];
        if (h++, 128 == (192 & o))
            return 63 & o;
        throw Error('Invalid continuation byte');
    }

    function o(p) {
        var q, r;
        if (h > g)
            throw Error('Invalid byte index');
        if (h == g)
            return !1;
        if (q = 255 & f[h], h++, 0 == (128 & q))
            return q;
        if (192 == (224 & q)) {
            if ((r = (31 & q) << 6 | n()) >= 128)
                return r;
            throw Error('Invalid continuation byte');
        }
        if (224 == (240 & q)) {
            if ((r = (15 & q) << 12 | n() << 6 | n()) >= 2048)
                return k(r, p) ? r : 65533;
            throw Error('Invalid continuation byte');
        }
        if (240 == (248 & q) && (r = (7 & q) << 18 | n() << 12 | n() << 6 | n()) >= 65536 && r <= 1114111)
            return r;
        throw Error('Invalid UTF-8 detected');
    }
    d.exports = {
        version: '2.1.2',
        encode: function(p, q) {
            for (var r = !1 !== (q = q || {}).strict, s = j(p), t = s.length, u = -1, v = ''; ++u < t;)
                v += m(s[u], r);
            return v;
        },
        decode: function(p, q) {
            var r = !1 !== (q = q || {}).strict;
            f = j(p), g = f.length, h = 0;
            for (var s, t = []; !1 !== (s = o(r));)
                t.push(s);
            return function(u) {
                for (var v, w = u.length, x = -1, y = ''; ++x < w;)
                    (v = u[x]) > 65535 && (y += i((v -= 65536) >>> 10 & 1023 | 55296), v = 56320 | 1023 & v), y += i(v);
                return y;
            }(t);
        }
    };
}), c.register('Znnkk', function(d, e) {
    var f, g, h;
    a(d.exports, 'encode', function() {
        return f;
    }, function(i) {
        return f = i;
    }), a(d.exports, 'decode', function() {
        return g;
    }, function(i) {
        return g = i;
    }), h = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', f = function(i) {
        var j, k = new Uint8Array(i),
            l = k.length,
            m = '';
        for (j = 0; j < l; j += 3)
            m += h[k[j] >> 2], m += h[(3 & k[j]) << 4 | k[j + 1] >> 4], m += h[(15 & k[j + 1]) << 2 | k[j + 2] >> 6], m += h[63 & k[j + 2]];
        return l % 3 == 2 ? m = m.substring(0, m.length - 1) + '=' : l % 3 == 1 && (m = m.substring(0, m.length - 2) + '=='), m;
    }, g = function(i) {
        var j, k, l, m, n, o = 0.75 * i.length,
            p = i.length,
            q = 0;
        '=' === i[i.length - 1] && (o--, '=' === i[i.length - 2] && o--);
        var r = new ArrayBuffer(o),
            s = new Uint8Array(r);
        for (j = 0; j < p; j += 4)
            k = h.indexOf(i[j]), l = h.indexOf(i[j + 1]), m = h.indexOf(i[j + 2]), n = h.indexOf(i[j + 3]), s[q++] = k << 2 | l >> 4, s[q++] = (15 & l) << 4 | m >> 2, s[q++] = (3 & m) << 6 | 63 & n;
        return r;
    };
}), c.register('PRwmq', function(d, e) {
    var f = void 0 !== f ? f : 'undefined' != typeof WebKitBlobBuilder ? WebKitBlobBuilder : 'undefined' != typeof MSBlobBuilder ? MSBlobBuilder : 'undefined' != typeof MozBlobBuilder && MozBlobBuilder,
        g = function() {
            try {
                return 2 === new Blob(['hi']).size;
            } catch (d) {
                return !1;
            }
        }(),
        h = g && function() {
            try {
                return 2 === new Blob([new Uint8Array([
                    1,
                    2
                ])]).size;
            } catch (d) {
                return !1;
            }
        }(),
        i = f && f.prototype.append && f.prototype.getBlob;

    function j(k) {
        return k.map(function(l) {
            if (l.buffer instanceof ArrayBuffer) {
                var m = l.buffer;
                if (l.byteLength !== m.byteLength) {
                    var n = new Uint8Array(l.byteLength);
                    n.set(new Uint8Array(m, l.byteOffset, l.byteLength)), m = n.buffer;
                }
                return m;
            }
            return l;
        });
    }

    function k(l, m) {
        m = m || {};
        var n = new f();
        return j(l).forEach(function(o) {
            n.append(o);
        }), m.type ? n.getBlob(m.type) : n.getBlob();
    }

    function l(m, n) {
        return new Blob(j(m), n || {});
    }
    'undefined' != typeof Blob && (k.prototype = Blob.prototype, l.prototype = Blob.prototype), d.exports = g ? h ? Blob : l : i ? k : void 0;
}), c.register('ApWPw', function(d, e) {
    var f, g;
    a(d.exports, 'encode', function() {
        return f;
    }, function(h) {
        return f = h;
    }), a(d.exports, 'decode', function() {
        return g;
    }, function(h) {
        return g = h;
    }), f = function(h) {
        var i = '';
        for (var j in h)
            h.hasOwnProperty(j) && (i.length && (i += '&'), i += encodeURIComponent(j) + '=' + encodeURIComponent(h[j]));
        return i;
    }, g = function(h) {
        for (var i = {}, j = h.split('&'), k = 0, l = j.length; k < l; k++) {
            var m = j[k].split('=');
            i[decodeURIComponent(m[0])] = decodeURIComponent(m[1]);
        }
        return i;
    };
}), c.register('U1Mx4', function(d, e) {
    d.exports = function(f, g) {
        var h = function() {};
        h.prototype = g.prototype, f.prototype = new h(), f.prototype.constructor = f;
    };
}), c.register('8BN90', function(d, e) {
    var f, g = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
        h = {},
        i = 0,
        j = 0;

    function k(l) {
        var m = '';
        do {
            m = g[l % 64] + m, l = Math.floor(l / 64);
        } while (l > 0);
        return m;
    }

    function l() {
        var m = k(+new Date());
        return m !== f ? (i = 0, f = m) : m + '.' + k(i++);
    }
    for (; j < 64; j++)
        h[g[j]] = j;
    l.encode = k, l.decode = function(m) {
        var n = 0;
        for (j = 0; j < m.length; j++)
            n = 64 * n + h[m.charAt(j)];
        return n;
    }, d.exports = l;
}), c.register('htR74', function(d, e) {
    var f = c('SOClG');

    function g() {
        var h;
        try {
            h = e.storage.debug;
        } catch (h) {}
        return !h && void 0 !== f && 'env' in f && (h = void 0), h;
    }
    (e = d.exports = c('JZR0A')).log = function() {
        return 'object' == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }, e.formatArgs = function(h) {
        var i = this.useColors;
        if (h[0] = (i ? '%c' : '') + this.namespace + (i ? ' %c' : ' ') + h[0] + (i ? '%c ' : ' ') + '+' + e.humanize(this.diff), !i)
            return;
        var j = 'color: ' + this.color;
        h.splice(1, 0, j, 'color: inherit');
        var k = 0,
            l = 0;
        h[0].replace(/%[a-zA-Z%]/g, function(m) {
            '%%' !== m && (k++, '%c' === m && (l = k));
        }), h.splice(l, 0, j);
    }, e.save = function(h) {
        try {
            null == h ? e.storage.removeItem('debug') : e.storage.debug = h;
        } catch (h) {}
    }, e.load = g, e.useColors = function() {
        return !('undefined' == typeof window || !window.process || 'renderer' !== window.process.type) || ('undefined' == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ('undefined' != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || 'undefined' != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }, e.storage = 'undefined' != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
        try {
            return window.localStorage;
        } catch (d) {}
    }(), e.colors = [
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
    ], e.formatters.j = function(h) {
        try {
            return JSON.stringify(h);
        } catch (h) {
            return '[UnexpectedJSONParseError]: ' + h.message;
        }
    }, e.enable(g());
}), c.register('JZR0A', function(d, e) {
    function f(g) {
        var h;

        function i() {
            if (i.enabled) {
                var j = i,
                    k = +new Date(),
                    l = k - (h || k);
                j.diff = l, j.prev = h, j.curr = k, h = k;
                for (var m = new Array(arguments.length), n = 0; n < m.length; n++)
                    m[n] = arguments[n];
                m[0] = e.coerce(m[0]), 'string' != typeof m[0] && m.unshift('%O');
                var o = 0;
                m[0] = m[0].replace(/%([a-zA-Z%])/g, function(p, q) {
                    if ('%%' === p)
                        return p;
                    o++;
                    var r = e.formatters[q];
                    if ('function' == typeof r) {
                        var s = m[o];
                        p = r.call(j, s), m.splice(o, 1), o--;
                    }
                    return p;
                }), e.formatArgs.call(j, m);
                var p = i.log || e.log || console.log.bind(console);
                p.apply(j, m);
            }
        }
        return i.namespace = g, i.enabled = e.enabled(g), i.useColors = e.useColors(), i.color = function(j) {
            var k, l = 0;
            for (k in j)
                l = (l << 5) - l + j.charCodeAt(k), l |= 0;
            return e.colors[Math.abs(l) % e.colors.length];
        }(g), i.destroy = _g, 'function' == typeof e.init && e.init(i), e.instances.push(i), i;
    }

    function _g() {
        var h = e.instances.indexOf(this);
        return -1 !== h && (e.instances.splice(h, 1), !0);
    }
    (e = d.exports = f.debug = f.default = f).coerce = function(h) {
        return h instanceof Error ? h.stack || h.message : h;
    }, e.disable = function() {
        e.enable('');
    }, e.enable = function(h) {
        var i;
        e.save(h), e.names = [], e.skips = [];
        var j = ('string' == typeof h ? h : '').split(/[\s,]+/),
            k = j.length;
        for (i = 0; i < k; i++)
            j[i] && ('-' === (h = j[i].replace(/\*/g, '.*?'))[0] ? e.skips.push(new RegExp('^' + h.substr(1) + '$')) : e.names.push(new RegExp('^' + h + '$')));
        for (i = 0; i < e.instances.length; i++) {
            var l = e.instances[i];
            l.enabled = e.enabled(l.namespace);
        }
    }, e.enabled = function(h) {
        if ('*' === h[h.length - 1])
            return !0;
        var i, j;
        for (i = 0, j = e.skips.length; i < j; i++)
            if (e.skips[i].test(h))
                return !1;
        for (i = 0, j = e.names.length; i < j; i++)
            if (e.names[i].test(h))
                return !0;
        return !1;
    }, e.humanize = c('AHVde'), e.instances = [], e.names = [], e.skips = [], e.formatters = {};
}), c.register('AHVde', function(d, e) {
    var f = 1000,
        g = 60000,
        h = 3600000,
        i = 86400000,
        j = 31557600000;

    function k(l, m, n) {
        if (!(l < m))
            return l < 1.5 * m ? Math.floor(l / m) + ' ' + n : Math.ceil(l / m) + ' ' + n + 's';
    }
    d.exports = function(l, m) {
        m = m || {};
        var n, o = typeof l;
        if ('string' === o && l.length > 0)
            return function(p) {
                if ((p = String(p)).length > 100)
                    return;
                var q = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(p);
                if (!q)
                    return;
                var r = parseFloat(q[1]);
                switch ((q[2] || 'ms').toLowerCase()) {
                    case 'years':
                    case 'year':
                    case 'yrs':
                    case 'yr':
                    case 'y':
                        return r * j;
                    case 'days':
                    case 'day':
                    case 'd':
                        return r * i;
                    case 'hours':
                    case 'hour':
                    case 'hrs':
                    case 'hr':
                    case 'h':
                        return r * h;
                    case 'minutes':
                    case 'minute':
                    case 'mins':
                    case 'min':
                    case 'm':
                        return r * g;
                    case 'seconds':
                    case 'second':
                    case 'secs':
                    case 'sec':
                    case 's':
                        return r * f;
                    case 'milliseconds':
                    case 'millisecond':
                    case 'msecs':
                    case 'msec':
                    case 'ms':
                        return r;
                    default:
                        return;
                }
            }(l);
        if ('number' === o && !1 === isNaN(l))
            return m.long ? k(n = l, i, 'day') || k(n, h, 'hour') || k(n, g, 'minute') || k(n, f, 'second') || n + ' ms' : function(p) {
                return p >= i ? Math.round(p / i) + 'd' : p >= h ? Math.round(p / h) + 'h' : p >= g ? Math.round(p / g) + 'm' : p >= f ? Math.round(p / f) + 's' : p + 'ms';
            }(l);
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(l));
    };
}), c.register('TzekT', function(d, e) {
    var f = c('SzlbK'),
        g = c('U1Mx4'),
        h = c('cqVUu');
    d.exports = _m;
    var i, j = /\n/g,
        k = /\\n/g;

    function l() {}

    function _m(n) {
        f.call(this, n), this.query = this.query || {}, i || (i = h.___eio = h.___eio || []), this.index = i.length;
        var o = this;
        i.push(function(p) {
            o.onData(p);
        }), this.query.j = this.index, 'function' == typeof addEventListener && addEventListener('beforeunload', function() {
            o.script && (o.script.onerror = l);
        }, !1);
    }
    g(_m, f), _m.prototype.supportsBinary = !1, _m.prototype.doClose = function() {
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), f.prototype.doClose.call(this);
    }, _m.prototype.doPoll = function() {
        var n = this,
            o = document.createElement('script');
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), o.async = !0, o.src = this.uri(), o.onerror = function(p) {
            n.onError('jsonp poll error', p);
        };
        var p = document.getElementsByTagName('script')[0];
        p ? p.parentNode.insertBefore(o, p) : (document.head || document.body).appendChild(o), this.script = o, 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
            var q = document.createElement('iframe');
            document.body.appendChild(q), document.body.removeChild(q);
        }, 100);
    }, _m.prototype.doWrite = function(n, o) {
        var p = this;
        if (!this.form) {
            var q, r = document.createElement('form'),
                s = document.createElement('textarea'),
                t = this.iframeId = 'eio_iframe_' + this.index;
            r.className = 'socketio', r.style.position = 'absolute', r.style.top = '-1000px', r.style.left = '-1000px', r.target = t, r.method = 'POST', r.setAttribute('accept-charset', 'utf-8'), s.name = 'd', r.appendChild(s), document.body.appendChild(r), this.form = r, this.area = s;
        }

        function q() {
            _m(), o();
        }

        function r() {
            if (p.iframe)
                try {
                    p.form.removeChild(p.iframe);
                } catch (n) {
                    p.onError('jsonp polling iframe removal error', n);
                }
            try {
                var s = '<iframe src="javascript:0" name="' + p.iframeId + '">';
                f = document.createElement(s);
            } catch (n) {
                (f = document.createElement('iframe')).name = p.iframeId, f.src = 'javascript:0';
            }
            f.id = p.iframeId, p.form.appendChild(f), p.iframe = f;
        }
        this.form.action = this.uri(), r(), n = n.replace(k, '\\\n'), this.area.value = n.replace(j, '\\n');
        try {
            this.form.submit();
        } catch (n) {}
        this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
            'complete' === p.iframe.readyState && q();
        } : this.iframe.onload = q;
    };
}), c.register('Bw++A', function(d, e) {
    var f, g, h = c('gUNWj').Buffer,
        i = c('4D21y'),
        j = c('TDSUl'),
        k = c('ApWPw'),
        l = c('U1Mx4'),
        m = c('8BN90'),
        n = c('htR74')('engine.io-client:websocket');
    if ('undefined' != typeof WebSocket ? f = WebSocket : 'undefined' != typeof self && (f = self.WebSocket || self.MozWebSocket), 'undefined' == typeof window)
        try {
            g = c('Qd8s8');
        } catch (d) {}
    var o = f || g;

    function p(q) {
        q && q.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = q.perMessageDeflate, this.usingBrowserWebSocket = f && !q.forceNode, this.protocols = q.protocols, this.usingBrowserWebSocket || (o = g), i.call(this, q);
    }
    d.exports = p, l(p, i), p.prototype.name = 'websocket', p.prototype.supportsBinary = !0, p.prototype.doOpen = function() {
        if (this.check()) {
            var q = this.uri(),
                r = this.protocols,
                s = {};
            this.isReactNative || (s.agent = this.agent, s.perMessageDeflate = this.perMessageDeflate, s.pfx = this.pfx, s.key = this.key, s.passphrase = this.passphrase, s.cert = this.cert, s.ca = this.ca, s.ciphers = this.ciphers, s.rejectUnauthorized = this.rejectUnauthorized), this.extraHeaders && (s.headers = this.extraHeaders), this.localAddress && (s.localAddress = this.localAddress);
            try {
                this.ws = this.usingBrowserWebSocket && !this.isReactNative ? r ? new o(q, r) : new o(q) : new o(q, r, s);
            } catch (q) {
                return this.emit('error', q);
            }
            void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = 'nodebuffer') : this.ws.binaryType = 'arraybuffer', this.addEventListeners();
        }
    }, p.prototype.addEventListeners = function() {
        var q = this;
        this.ws.onopen = function() {
            q.onOpen();
        }, this.ws.onclose = function() {
            q.onClose();
        }, this.ws.onmessage = function(r) {
            q.onData(r.data);
        }, this.ws.onerror = function(r) {
            q.onError('websocket error', r);
        };
    }, p.prototype.write = function(q) {
        var r = this;
        this.writable = !1;
        for (var s = q.length, t = 0, u = s; t < u; t++)
            ! function(v) {
                j.encodePacket(v, r.supportsBinary, function(w) {
                    if (!r.usingBrowserWebSocket) {
                        var x = {};
                        if (v.options && (x.compress = v.options.compress), r.perMessageDeflate)
                            ('string' == typeof w ? h.byteLength(w) : w.length) < r.perMessageDeflate.threshold && (x.compress = !1);
                    }
                    try {
                        r.usingBrowserWebSocket ? r.ws.send(w) : r.ws.send(w, u);
                    } catch (v) {
                        n('websocket closed before onclose event');
                    }
                    --s || i();
                });
            }(q[t]);

        function v() {
            r.emit('flush'), setTimeout(function() {
                r.writable = !0, r.emit('drain');
            }, 0);
        }
    }, p.prototype.onClose = function() {
        i.prototype.onClose.call(this);
    }, p.prototype.doClose = function() {
        void 0 !== this.ws && this.ws.close();
    }, p.prototype.uri = function() {
        var q = this.query || {},
            r = this.secure ? 'wss' : 'ws',
            s = '';
        return this.port && ('wss' === r && 443 !== Number(this.port) || 'ws' === r && 80 !== Number(this.port)) && (s = ':' + this.port), this.timestampRequests && (q[this.timestampParam] = m()), this.supportsBinary || (q.b64 = 1), (q = k.encode(q)).length && (q = '?' + q), r + '://' + (-1 !== this.hostname.indexOf(':') ? '[' + this.hostname + ']' : this.hostname) + s + this.path + q;
    }, p.prototype.check = function() {
        return !(!o || '__initialize' in o && this.name === p.prototype.name);
    };
}), c.register('I4hk5', function(d, e) {
    var f = [].indexOf;
    d.exports = function(g, h) {
        if (f)
            return g.indexOf(h);
        for (var i = 0; i < g.length; ++i)
            if (g[i] === h)
                return i;
        return -1;
    };
}), c.register('LDiWj', function(d, e) {
    var f = c('CEzv3'),
        g = c('SsMwT'),
        h = c('oJC5B'),
        i = c('DAUMB'),
        j = c('xSI13'),
        k = c('enVEo')('socket.io-client:socket'),
        l = c('ApWPw'),
        m = c('j4f2G');
    d.exports = _p;
    var n = {
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
        o = g.prototype.emit;

    function _p(q, r, s) {
        this.io = q, this.nsp = r, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, s && s.query && (this.query = s.query), this.io.autoConnect && this.open();
    }
    g(_p.prototype), _p.prototype.subEvents = function() {
        if (!this.subs) {
            var q = this.io;
            this.subs = [
                i(q, 'open', j(this, 'onopen')),
                i(q, 'packet', j(this, 'onpacket')),
                i(q, 'close', j(this, 'onclose'))
            ];
        }
    }, _p.prototype.open = _p.prototype.connect = function() {
        return this.connected || (this.subEvents(), this.io.reconnecting || this.io.open(), 'open' === this.io.readyState && this.onopen(), this.emit('connecting')), this;
    }, _p.prototype.send = function() {
        var q = h(arguments);
        return q.unshift('message'), this.emit.apply(this, q), this;
    }, _p.prototype.emit = function(q) {
        if (n.hasOwnProperty(q))
            return o.apply(this, arguments), this;
        var r = h(arguments),
            s = {
                type: (void 0 !== this.flags.binary ? this.flags.binary : m(r)) ? f.BINARY_EVENT : f.EVENT,
                data: r,
                options: {}
            };
        return s.options.compress = !this.flags || !1 !== this.flags.compress, 'function' == typeof r[r.length - 1] && (k('emitting packet with ack id %d', this.ids), this.acks[this.ids] = r.pop(), s.id = this.ids++), this.connected ? this.packet(s) : this.sendBuffer.push(s), this.flags = {}, this;
    }, _p.prototype.packet = function(q) {
        q.nsp = this.nsp, this.io.packet(q);
    }, _p.prototype.onopen = function() {
        if (k('transport is open - connecting'), '/' !== this.nsp)
            if (this.query) {
                var q = 'object' == typeof this.query ? l.encode(this.query) : this.query;
                k('sending connect packet with query %s', q), this.packet({
                    type: f.CONNECT,
                    query: q
                });
            } else
                this.packet({
                    type: f.CONNECT
                });
    }, _p.prototype.onclose = function(q) {
        k('close (%s)', q), this.connected = !1, this.disconnected = !0, delete this.id, this.emit('disconnect', q);
    }, _p.prototype.onpacket = function(q) {
        var r = q.nsp === this.nsp,
            s = q.type === f.ERROR && '/' === q.nsp;
        if (r || s)
            switch (q.type) {
                case f.CONNECT:
                    this.onconnect();
                    break;
                case f.EVENT:
                case f.BINARY_EVENT:
                    this.onevent(q);
                    break;
                case f.ACK:
                case f.BINARY_ACK:
                    this.onack(q);
                    break;
                case f.DISCONNECT:
                    this.ondisconnect();
                    break;
                case f.ERROR:
                    this.emit('error', q.data);
            }
    }, _p.prototype.onevent = function(q) {
        var r = q.data || [];
        k('emitting event %j', r), null != q.id && (k('attaching ack callback to event'), r.push(this.ack(q.id))), this.connected ? o.apply(this, r) : this.receiveBuffer.push(r);
    }, _p.prototype.ack = function(q) {
        var r = this,
            s = !1;
        return function() {
            if (!s) {
                s = !0;
                var t = h(arguments);
                k('sending ack %j', t), r.packet({
                    type: m(t) ? f.BINARY_ACK : f.ACK,
                    id: q,
                    data: t
                });
            }
        };
    }, _p.prototype.onack = function(q) {
        var r = this.acks[q.id];
        'function' == typeof r ? (k('calling ack %s with %j', q.id, q.data), r.apply(this, q.data), delete this.acks[q.id]) : k('bad ack %s', q.id);
    }, _p.prototype.onconnect = function() {
        this.connected = !0, this.disconnected = !1, this.emit('connect'), this.emitBuffered();
    }, _p.prototype.emitBuffered = function() {
        var q;
        for (q = 0; q < this.receiveBuffer.length; q++)
            o.apply(this, this.receiveBuffer[q]);
        for (this.receiveBuffer = [], q = 0; q < this.sendBuffer.length; q++)
            this.packet(this.sendBuffer[q]);
        this.sendBuffer = [];
    }, _p.prototype.ondisconnect = function() {
        k('server disconnect (%s)', this.nsp), this.destroy(), this.onclose('io server disconnect');
    }, _p.prototype.destroy = function() {
        if (this.subs) {
            for (var q = 0; q < this.subs.length; q++)
                this.subs[q].destroy();
            this.subs = null;
        }
        this.io.destroy(this);
    }, _p.prototype.close = _p.prototype.disconnect = function() {
        return this.connected && (k('performing disconnect (%s)', this.nsp), this.packet({
            type: f.DISCONNECT
        })), this.destroy(), this.connected && this.onclose('io client disconnect'), this;
    }, _p.prototype.compress = function(q) {
        return this.flags.compress = q, this;
    }, _p.prototype.binary = function(q) {
        return this.flags.binary = q, this;
    };
}), c.register('oJC5B', function(d, e) {
    d.exports = function(f, g) {
        for (var h = [], i = (g = g || 0) || 0; i < f.length; i++)
            h[i - g] = f[i];
        return h;
    };
}), c.register('DAUMB', function(d, e) {
    d.exports = function(f, g, h) {
        return f.on(g, h), {
            destroy: function() {
                f.removeListener(g, h);
            }
        };
    };
}), c.register('xSI13', function(d, e) {
    var f = [].slice;
    d.exports = function(g, h) {
        if ('string' == typeof h && (h = g[h]), 'function' != typeof h)
            throw new Error('bind() requires a function');
        var i = f.call(arguments, 2);
        return function() {
            return h.apply(g, i.concat(f.call(arguments)));
        };
    };
}), c.register('GCye7', function(d, e) {
    function f(g) {
        g = g || {}, this.ms = g.min || 100, this.max = g.max || 10000, this.factor = g.factor || 2, this.jitter = g.jitter > 0 && g.jitter <= 1 ? g.jitter : 0, this.attempts = 0;
    }
    d.exports = f, f.prototype.duration = function() {
        var g = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var h = Math.random(),
                i = Math.floor(h * this.jitter * g);
            g = 0 == (1 & Math.floor(10 * h)) ? g - i : g + i;
        }
        return 0 | Math.min(g, this.max);
    }, f.prototype.reset = function() {
        this.attempts = 0;
    }, f.prototype.setMin = function(g) {
        this.ms = g;
    }, f.prototype.setMax = function(g) {
        this.max = g;
    }, f.prototype.setJitter = function(g) {
        this.jitter = g;
    };
}), c.register('SRYGJ', function(d, e) {
    var f, g, h, i, j, k, l, m, n;
    a(d.exports, 'CONNECT', function() {
        return f;
    }, function(o) {
        return f = o;
    }), a(d.exports, 'DISCONNECT', function() {
        return g;
    }, function(o) {
        return g = o;
    }), a(d.exports, 'EVENT', function() {
        return h;
    }, function(o) {
        return h = o;
    }), a(d.exports, 'ACK', function() {
        return i;
    }, function(o) {
        return i = o;
    }), a(d.exports, 'ERROR', function() {
        return j;
    }, function(o) {
        return j = o;
    }), a(d.exports, 'BINARY_EVENT', function() {
        return k;
    }, function(o) {
        return k = o;
    }), a(d.exports, 'BINARY_ACK', function() {
        return l;
    }, function(o) {
        return l = o;
    }), a(d.exports, 'Encoder', function() {
        return m;
    }, function(o) {
        return m = o;
    }), a(d.exports, 'Decoder', function() {
        return n;
    }, function(o) {
        return n = o;
    });
    var o = c('pR3QL'),
        p = c('SsMwT');
    f = 0, g = 1, h = 2, i = 3, j = 4, k = 5, l = 6;
    var q = Number.isInteger || function(r) {
            return 'number' == typeof r && isFinite(r) && Math.floor(r) === r;
        },
        r = function(s) {
            return 'string' == typeof s;
        };

    function s() {}

    function t() {}
    s.prototype.encode = function(u, v) {
        switch (u.type) {
            case f:
            case g:
            case j:
                return v([JSON.stringify(u)]);
            default:
                return v([o.encode(u)]);
        }
    }, p(t.prototype), t.prototype.add = function(u) {
        'string' == typeof u ? this.parseJSON(u) : this.parseBinary(u);
    }, t.prototype.parseJSON = function(u) {
        var v = JSON.parse(u);
        this.checkPacket(v), this.emit('decoded', v);
    }, t.prototype.parseBinary = function(u) {
        var v = o.decode(u);
        this.checkPacket(v), this.emit('decoded', v);
    }, t.prototype.checkPacket = function(u) {
        if (!(q(u.type) && u.type >= f && u.type <= l))
            throw new Error('invalid packet type');
        if (!r(u.nsp))
            throw new Error('invalid namespace');
        if (! function(v) {
                switch (v.type) {
                    case f:
                    case g:
                        return void 0 === v.data;
                    case j:
                        return r(v.data);
                    default:
                        return Array.isArray(v.data);
                }
            }(u))
            throw new Error('invalid payload');
        if (!(void 0 === u.id || q(u.id)))
            throw new Error('invalid packet id');
    }, t.prototype.destroy = function() {}, m = s, n = t;
}), c.register('pR3QL', function(d, e) {
    var f, g;
    a(d.exports, 'encode', function() {
        return f;
    }, function(h) {
        return f = h;
    }), a(d.exports, 'decode', function() {
        return g;
    }, function(h) {
        return g = h;
    }), f = c('fb4eq'), g = c('gKaqR');
}), c.register('fb4eq', function(d, e) {
    function f(g, h, i) {
        for (var j = 0, k = 0, l = i.length; k < l; k++)
            (j = i.charCodeAt(k)) < 128 ? g.setUint8(h++, j) : j < 2048 ? (g.setUint8(h++, 192 | j >> 6), g.setUint8(h++, 128 | 63 & j)) : j < 55296 || j >= 57344 ? (g.setUint8(h++, 224 | j >> 12), g.setUint8(h++, 128 | j >> 6 & 63), g.setUint8(h++, 128 | 63 & j)) : (k++, j = 65536 + ((1023 & j) << 10 | 1023 & i.charCodeAt(k)), g.setUint8(h++, 240 | j >> 18), g.setUint8(h++, 128 | j >> 12 & 63), g.setUint8(h++, 128 | j >> 6 & 63), g.setUint8(h++, 128 | 63 & j));
    }

    function g(h, i, j) {
        var k = typeof j,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0;
        if ('string' === k) {
            if (p = function(r) {
                    for (var s = 0, t = 0, u = 0, v = r.length; u < v; u++)
                        (s = r.charCodeAt(u)) < 128 ? t += 1 : s < 2048 ? t += 2 : s < 55296 || s >= 57344 ? t += 3 : (u++, t += 4);
                    return t;
                }(j), p < 32)
                h.push(160 | p), q = 1;
            else if (p < 256)
                h.push(217, p), q = 2;
            else if (p < 65536)
                h.push(218, p >> 8, p), q = 3;
            else {
                if (!(p < 4294967296))
                    throw new Error('String too long');
                h.push(219, p >> 24, p >> 16, p >> 8, p), q = 5;
            }
            return i.push({
                _str: j,
                _length: p,
                _offset: h.length
            }), q + p;
        }
        if ('number' === k)
            return Math.floor(j) === j && isFinite(j) ? j >= 0 ? j < 128 ? (h.push(j), 1) : j < 256 ? (h.push(204, j), 2) : j < 65536 ? (h.push(205, j >> 8, j), 3) : j < 4294967296 ? (h.push(206, j >> 24, j >> 16, j >> 8, j), 5) : (n = j / Math.pow(2, 32) >> 0, o = j >>> 0, h.push(207, n >> 24, n >> 16, n >> 8, n, o >> 24, o >> 16, o >> 8, o), 9) : j >= -32 ? (h.push(j), 1) : j >= -128 ? (h.push(208, j), 2) : j >= -32768 ? (h.push(209, j >> 8, j), 3) : j >= -2147483648 ? (h.push(210, j >> 24, j >> 16, j >> 8, j), 5) : (n = Math.floor(j / Math.pow(2, 32)), o = j >>> 0, h.push(211, n >> 24, n >> 16, n >> 8, n, o >> 24, o >> 16, o >> 8, o), 9) : (h.push(203), i.push({
                _float: j,
                _length: 8,
                _offset: h.length
            }), 9);
        if ('object' === k) {
            if (null === j)
                return h.push(192), 1;
            if (Array.isArray(j)) {
                if ((p = j.length) < 16)
                    h.push(144 | p), q = 1;
                else if (p < 65536)
                    h.push(220, p >> 8, p), q = 3;
                else {
                    if (!(p < 4294967296))
                        throw new Error('Array too large');
                    h.push(221, p >> 24, p >> 16, p >> 8, p), q = 5;
                }
                for (l = 0; l < p; l++)
                    q += g(h, i, j[l]);
                return q;
            }
            if (j instanceof Date) {
                var r = j.getTime();
                return n = Math.floor(r / Math.pow(2, 32)), o = r >>> 0, h.push(215, 0, n >> 24, n >> 16, n >> 8, n, o >> 24, o >> 16, o >> 8, o), 10;
            }
            if (j instanceof ArrayBuffer) {
                if ((p = j.byteLength) < 256)
                    h.push(196, p), q = 2;
                else if (p < 65536)
                    h.push(197, p >> 8, p), q = 3;
                else {
                    if (!(p < 4294967296))
                        throw new Error('Buffer too large');
                    h.push(198, p >> 24, p >> 16, p >> 8, p), q = 5;
                }
                return i.push({
                    _bin: j,
                    _length: p,
                    _offset: h.length
                }), q + p;
            }
            if ('function' == typeof j.toJSON)
                return g(h, i, j.toJSON());
            var r = [],
                s = '',
                t = Object.keys(j);
            for (l = 0, m = t.length; l < m; l++)
                'function' != typeof j[s = t[l]] && r.push(s);
            if ((p = r.length) < 16)
                h.push(128 | p), q = 1;
            else if (p < 65536)
                h.push(222, p >> 8, p), q = 3;
            else {
                if (!(p < 4294967296))
                    throw new Error('Object too large');
                h.push(223, p >> 24, p >> 16, p >> 8, p), q = 5;
            }
            for (l = 0; l < p; l++)
                q += g(h, i, s = r[l]), q += g(h, i, j[s]);
            return q;
        }
        if ('boolean' === k)
            return h.push(j ? 195 : 194), 1;
        if ('undefined' === k)
            return h.push(212, 0, 0), 3;
        throw new Error('Could not encode');
    }
    d.exports = function(h) {
        var i = [],
            j = [],
            k = g(i, j, h),
            l = new ArrayBuffer(k),
            m = new DataView(l),
            n = 0,
            o = 0,
            p = -1;
        j.length > 0 && (p = j[0]._offset);
        for (var q, r = 0, s = 0, t = 0, u = i.length; t < u; t++)
            if (m.setUint8(o + t, i[t]), t + 1 === p) {
                if (r = (q = j[n])._length, s = o + p, q._bin)
                    for (var v = new Uint8Array(q._bin), w = 0; w < r; w++)
                        m.setUint8(s + w, v[w]);
                else
                    q._str ? f(m, s, q._str) : void 0 !== q._float && m.setFloat64(s, q._float);
                o += r, j[++n] && (p = j[n]._offset);
            }
        return l;
    };
}), c.register('gKaqR', function(d, e) {
    function f(g) {
        if (this._offset = 0, g instanceof ArrayBuffer)
            this._buffer = g, this._view = new DataView(this._buffer);
        else {
            if (!ArrayBuffer.isView(g))
                throw new Error('Invalid argument');
            this._buffer = g.buffer, this._view = new DataView(this._buffer, g.byteOffset, g.byteLength);
        }
    }
    f.prototype._array = function(g) {
        for (var h = new Array(g), i = 0; i < g; i++)
            h[i] = this._parse();
        return h;
    }, f.prototype._map = function(g) {
        for (var h = {}, i = 0; i < g; i++)
            h[this._parse()] = this._parse();
        return h;
    }, f.prototype._str = function(g) {
        var h = function(i, j, k) {
            for (var l = '', m = 0, n = j, o = j + k; n < o; n++) {
                var p = i.getUint8(n);
                if (0 != (128 & p))
                    if (192 != (224 & p))
                        if (224 != (240 & p)) {
                            if (240 != (248 & p))
                                throw new Error('Invalid byte ' + p.toString(16));
                            (m = (7 & p) << 18 | (63 & i.getUint8(++n)) << 12 | (63 & i.getUint8(++n)) << 6 | (63 & i.getUint8(++n)) << 0) >= 65536 ? (m -= 65536, l += String.fromCharCode(55296 + (m >>> 10), 56320 + (1023 & m))) : l += String.fromCharCode(m);
                        } else
                            l += String.fromCharCode((15 & p) << 12 | (63 & i.getUint8(++n)) << 6 | (63 & i.getUint8(++n)) << 0);
                else
                    l += String.fromCharCode((31 & p) << 6 | 63 & i.getUint8(++n));
                else
                    l += String.fromCharCode(p);
            }
            return l;
        }(this._view, this._offset, g);
        return this._offset += g, h;
    }, f.prototype._bin = function(g) {
        var h = this._buffer.slice(this._offset, this._offset + g);
        return this._offset += g, h;
    }, f.prototype._parse = function() {
        var g, h = this._view.getUint8(this._offset++),
            i = 0,
            j = 0,
            k = 0,
            l = 0;
        if (h < 192)
            return h < 128 ? h : h < 144 ? this._map(15 & h) : h < 160 ? this._array(15 & h) : this._str(31 & h);
        if (h > 223)
            return -1 * (255 - h + 1);
        switch (h) {
            case 192:
                return null;
            case 194:
                return !1;
            case 195:
                return !0;
            case 196:
                return i = this._view.getUint8(this._offset), this._offset += 1, this._bin(i);
            case 197:
                return i = this._view.getUint16(this._offset), this._offset += 2, this._bin(i);
            case 198:
                return i = this._view.getUint32(this._offset), this._offset += 4, this._bin(i);
            case 199:
                return i = this._view.getUint8(this._offset), j = this._view.getInt8(this._offset + 1), this._offset += 2, [
                    j,
                    this._bin(i)
                ];
            case 200:
                return i = this._view.getUint16(this._offset), j = this._view.getInt8(this._offset + 2), this._offset += 3, [
                    j,
                    this._bin(i)
                ];
            case 201:
                return i = this._view.getUint32(this._offset), j = this._view.getInt8(this._offset + 4), this._offset += 5, [
                    j,
                    this._bin(i)
                ];
            case 202:
                return g = this._view.getFloat32(this._offset), this._offset += 4, g;
            case 203:
                return g = this._view.getFloat64(this._offset), this._offset += 8, g;
            case 204:
                return g = this._view.getUint8(this._offset), this._offset += 1, g;
            case 205:
                return g = this._view.getUint16(this._offset), this._offset += 2, g;
            case 206:
                return g = this._view.getUint32(this._offset), this._offset += 4, g;
            case 207:
                return k = this._view.getUint32(this._offset) * Math.pow(2, 32), l = this._view.getUint32(this._offset + 4), this._offset += 8, k + l;
            case 208:
                return g = this._view.getInt8(this._offset), this._offset += 1, g;
            case 209:
                return g = this._view.getInt16(this._offset), this._offset += 2, g;
            case 210:
                return g = this._view.getInt32(this._offset), this._offset += 4, g;
            case 211:
                return k = this._view.getInt32(this._offset) * Math.pow(2, 32), l = this._view.getUint32(this._offset + 4), this._offset += 8, k + l;
            case 212:
                return j = this._view.getInt8(this._offset), this._offset += 1, 0 === j ? void(this._offset += 1) : [
                    j,
                    this._bin(1)
                ];
            case 213:
                return j = this._view.getInt8(this._offset), this._offset += 1, [
                    j,
                    this._bin(2)
                ];
            case 214:
                return j = this._view.getInt8(this._offset), this._offset += 1, [
                    j,
                    this._bin(4)
                ];
            case 215:
                return j = this._view.getInt8(this._offset), this._offset += 1, 0 === j ? (k = this._view.getInt32(this._offset) * Math.pow(2, 32), l = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(k + l)) : [
                    j,
                    this._bin(8)
                ];
            case 216:
                return j = this._view.getInt8(this._offset), this._offset += 1, [
                    j,
                    this._bin(16)
                ];
            case 217:
                return i = this._view.getUint8(this._offset), this._offset += 1, this._str(i);
            case 218:
                return i = this._view.getUint16(this._offset), this._offset += 2, this._str(i);
            case 219:
                return i = this._view.getUint32(this._offset), this._offset += 4, this._str(i);
            case 220:
                return i = this._view.getUint16(this._offset), this._offset += 2, this._array(i);
            case 221:
                return i = this._view.getUint32(this._offset), this._offset += 4, this._array(i);
            case 222:
                return i = this._view.getUint16(this._offset), this._offset += 2, this._map(i);
            case 223:
                return i = this._view.getUint32(this._offset), this._offset += 4, this._map(i);
        }
        throw new Error('Could not parse');
    }, d.exports = function(g) {
        var h = new f(g),
            i = h._parse();
        if (h._offset !== g.byteLength)
            throw new Error(g.byteLength - h._offset + ' trailing bytes');
        return i;
    };
}), c.register('VKwC0', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    });
    d.exports.default = class {
        add(f, g) {
            const h = Math.random().toString();
            return this.callbacks.push({
                callback: f,
                timesCalled: 0,
                canCallMultipleTimes: !g,
                id: h
            }), () => this.removeCallback(h);
        }
        clear() {
            this.callbacks.splice(0, this.callbacks.length);
        }
        call(f, g) {
            this.callbacks = this.callbacks.map(c => c.timesCalled > 0 && !c.canCallMultipleTimes ? c : (c.callback(f, g), Object.assign({}, c, {
                timesCalled: c.timesCalled + 1
            })));
        }
        constructor() {
            this.callbacks = [], this.removeCallback = d => {
                this.callbacks = this.callbacks.filter(e => e.id !== d);
            };
        }
    };
}), c.register('wbHA3', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    });
    d.exports.default = {
        createNewRoom: 'blueboat_CREATE_NEW_ROOM',
        joinRoom: 'blueboat_JOIN_ROOM',
        sendMessage: 'blueboat_SEND_MESSAGE',
        listen: 'blueboat_LISTEN_STATE',
        requestAvailableRooms: 'blueboat_AVAILABLE_ROOMS',
        ping: 'blueboat-ping'
    };
}), c.register('26svF', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.BLUEBOAT_ID = 'blueboat-id';
}), c.register('o0lvM', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    });
    d.exports.default = {
        clientIdSet: 'CLIENT_ID_SET',
        joinedRoom: 'blueboat_JOINED_ROOM',
        statePatch: 'STATE_PATCH',
        removedFromRoom: 'blueboat_REMOVED_FROM_ROOM',
        availableRooms: 'blueboat_AVAILABLE_ROOMS'
    };
}), c.register('+tYZa', function(d, e) {
    var f = d.exports && d.exports.__importDefault || function(g) {
        return g && g.__esModule ? g : {
            default: g
        };
    };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    });
    const g = f(c('o0lvM')),
        h = f(c('VKwC0')),
        i = f(c('wbHA3'));
    d.exports.default = class {
        _setRoomId(j) {
            this.id = j, this.socketListener();
        }
        socketListener() {
            const j = this.socket;
            j.on(`${ this.id }-error`, j => this.onJoinError.call(j)), j.on(`message-${ this.id }`, j => {
                const {
                    key: k,
                    data: l
                } = j;
                if (k)
                    return k === g.default.joinedRoom ? (this.joined = !0, void this.onJoin.call()) : k === g.default.removedFromRoom ? (this.onLeave.call(), void(this.joined = !1)) : void this.onMessage.call(k, l);
            });
        }
        constructor(j, k, l) {
            this.joined = !1, this.initialJoinOptions = {}, this.onJoinAttempt = new h.default(), this.onCreate = new h.default(), this.onJoin = new h.default(), this.onJoinError = new h.default(), this.onMessage = new h.default(), this.onLeave = new h.default(), this.send = (j, k) => {
                this.socket.emit(i.default.sendMessage, {
                    room: this.id,
                    key: j,
                    data: k
                });
            }, l && (this.id = l), k && (this.initialJoinOptions = k), j && (this.socket = j, l && this.socketListener());
        }
    };
});