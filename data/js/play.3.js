function a(a, b, c, m) {
    Object.defineProperty(a, b, {
        get: c,
        set: m,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('yaVwU', function(b, m) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('UM8oI');
    let e;
    var f;
    (f = e || (e = {})).propertyUpdate = 'pU', f.fullValue = 'fV';
    var g = class {
        constructor() {
            (0, d.default)(this, 'value', {}), (0, d.default)(this, 'propListeners', []), (0, d.default)(this, 'onPropChange', (a, b) => {
                const h = Math.random().toString(36).substring(3);
                return this.propListeners.push({
                    id: h,
                    prop: a,
                    callback: b
                }), () => this.disposeListener(h);
            }), (0, d.default)(this, 'applyPatches', a => {
                a.forEach(a => {
                    if (a.type !== e.propertyUpdate)
                        if (a.type !== e.fullValue);
                        else {
                            const h = i;
                            Object.keys(h.value).forEach(i => {
                                this.updateProperty(i, h.value[i]);
                            });
                        }
                    else {
                        const h = i;
                        this.updateProperty(h.value.key, h.value.value);
                    }
                });
            }), (0, d.default)(this, 'disposeListener', a => {
                this.propListeners = this.propListeners.filter(b => b.id !== a);
            }), (0, d.default)(this, 'onPropertyChanged', (a, b) => {
                this.propListeners.filter(b => b.prop === a).forEach(a => a.callback(b));
            }), (0, d.default)(this, 'updateProperty', (a, b) => {
                void 0 !== this.value[a] ? this.value[a] !== b && (this.value[a] = b, this.onPropertyChanged(a, b)) : (this.value[a] = b, this.onPropertyChanged(a, b));
            });
        }
    };
}), c.register('CFzKE', function(m, n) {
    a(m.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('lmfrI'),
        f = c('4/f+U'),
        g = c('uPP4W'),
        h = c('IR0UG');
    const i = () => window.devicePixelRatio || 1,
        j = a => {
            a.preventDefault();
            const k = a.changedTouches[0],
                l = document.createEvent('MouseEvent'),
                m = {
                    touchstart: 'mousedown',
                    touchmove: 'mousemove',
                    touchend: 'mouseup'
                } [a.type];
            m && (l.initMouseEvent(m, !0, !0, window, 1, k.screenX, k.screenY, k.clientX, k.clientY, !1, !1, !1, !1, 0, null), k.target.dispatchEvent(l));
        },
        k = a => {
            var l, m;
            return {
                x: (null == a || null === (l = a.nativeEvent) || void 0 === l ? void 0 : l.offsetX) || 0,
                y: (null == a || null === (m = a.nativeEvent) || void 0 === m ? void 0 : m.offsetY) || 0
            };
        };
    var l = g.forwardRef((a, c) => {
        const [m, n] = g.useState(''), o = g.useRef(!1), p = g.useRef(!1), q = g.useRef(null), r = g.useRef(null), s = g.useRef([]), t = g.useRef(-1), u = g.useRef({
            x: 0,
            y: 0
        }), v = g.useRef(a.color || e.default.Black), w = g.useRef(a.strokeWidth || 2), x = g.useRef(null), y = g.useRef(null), z = () => {
            p.current = !0;
        }, A = () => {
            p.current = !1;
        }, B = g.useMemo(() => {
            const C = (0, f.throttle)(a => {
                if (!o.current)
                    return;
                if (!p.current)
                    return;
                const {
                    x: D,
                    y: E
                } = k(a);
                C({
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
            return c => {
                a.canEdit && (c.persist(), C(c));
            };
        }, [a.canEdit]), C = (b, c) => {
            const {
                xStart: D,
                yStart: E,
                xEnd: F,
                yEnd: G,
                color: H,
                width: I
            } = J, K = r.current, L = q.current;
            if (K.beginPath(), K.moveTo(D, E), K.lineTo(F, G), K.strokeStyle = H, K.lineWidth = I, K.stroke(), K.closePath(), c && a.emitLine) {
                const M = N;
                N.xStart /= L.clientWidth, N.yStart /= L.clientHeight, N.xEnd /= L.clientWidth, N.yEnd /= L.clientHeight, N.width /= (L.clientWidth + L.clientHeight) / 2, a.emitLine(M);
            }
        }, D = () => {
            const E = r.current,
                F = q.current;
            s.current = [
                ...s.current,
                E.getImageData(0, 0, F.width, F.height)
            ], t.current = t.current + 1, E();
        }, E = () => {
            const F = q.current;
            a.onLatestImage && (null == F ? void 0 : F.toDataURL) && a.onLatestImage(F.toDataURL('image/jpeg'));
        }, F = () => {
            const G = r.current,
                H = q.current;
            G.clearRect(0, 0, H.width, H.height), G.fillStyle = 'white', G.fillRect(0, 0, H.width, H.height), D();
        }, G = () => {
            t.current <= 0 ? F() : (t.current = t.current - 1, s.current = [...s.current.slice(0, s.current.length - 1)], r.current.putImageData(s.current[t.current], 0, 0), E());
        }, H = a => {
            const I = q.current,
                J = K;
            K.xStart *= I.clientWidth, K.yStart *= I.clientHeight, K.xEnd *= I.clientWidth, K.yEnd *= I.clientHeight, K.width *= (I.clientWidth + I.clientHeight) / 2, C(J, !1);
        }, I = a => {
            const J = r.current,
                K = q.current,
                L = new Image();
            L.onload = () => {
                J.drawImage(L, 0, 0, K.width / i(), K.height / i());
            }, L.src = a;
        };
        return b(h)(() => {
            const J = q.current,
                K = r.current;
            if (!J || !K)
                return;
            const L = J.toDataURL(),
                M = J.getBoundingClientRect();
            J.width = M.width * i(), J.height = M.height * i(), K.scale(i(), i()), K.lineCap = 'round', K.lineJoin = 'round', s.current = [], t.current = -1, I(L);
        }, 100, [
            a.width,
            a.height
        ]), g.useImperativeHandle(c, () => ({
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
            M.scale(i(), i()), M.fillStyle = 'white', M.fillRect(0, 0, J.width, J.height), M.lineCap = 'round', M.lineJoin = 'round', r.current = M, a.initialImage && I(a.initialImage);
            const N = K.getContext('2d');
            y.current = N, document.addEventListener('mousedown', z), document.addEventListener('mouseup', A);
        }, []), g.useEffect(() => {
            const J = x.current,
                K = y.current;
            if (!J || !K)
                return;
            const L = a.strokeWidth;
            J.width = L, J.height = L, K.clearRect(0, 0, J.width, J.height), K.beginPath(), K.arc(J.width / 2, J.height / 2, L / 2, 0, 2 * Math.PI), K.fillStyle = a.color, K.fill();
            const M = J.toDataURL('image');
            n(M);
        }, [
            a.color,
            a.strokeWidth
        ]), g.useEffect(() => {
            v.current = a.color;
        }, [a.color]), g.useEffect(() => {
            w.current = a.strokeWidth;
        }, [a.strokeWidth]), g.useEffect(() => {
            !a.canEdit && o.current && E();
        }, [a.canEdit]), g.useEffect(() => () => {
            a.canEdit && o.current && E();
        }, []), (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)('canvas', {
                    style: {
                        width: a.width,
                        height: a.height,
                        cursor: a.canEdit ? `url(${ m }) ${ w.current / 2 } ${ w.current / 2 }, auto` : 'auto',
                        background: e.default.White
                    },
                    ref: q,
                    onMouseDown: b => {
                        if (!a.canEdit)
                            return;
                        const {
                            x: J,
                            y: K
                        } = k(b);
                        u.current = {
                            x: J,
                            y: K
                        }, o.current = !0;
                    },
                    onMouseUp: b => {
                        if (!a.canEdit)
                            return;
                        const {
                            x: J,
                            y: K
                        } = k(b);
                        o.current && (o.current = !1, C({
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
}), c.register('IR0UG', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useThrottledEffect = void 0;
    var d = c('uPP4W');

    function e(a) {
        if (Array.isArray(a)) {
            for (var f = 0, g = Array(a.length); f < a.length; f++)
                g[f] = a[f];
            return g;
        }
        return Array.from(a);
    }
    var f = a.exports.useThrottledEffect = function(a, b) {
        var g = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            h = (0, d.useRef)(Date.now());
        (0, d.useEffect)(function() {
            var i = setTimeout(function() {
                Date.now() - h.current >= b && (a(), h.current = Date.now());
            }, b - (Date.now() - h.current));
            return function() {
                clearTimeout(i);
            };
        }, [b].concat(e(g)));
    };
    a.exports.default = f;
}), c.register('RBz1q', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu');
    let f, g, h = a => a;
    var i = a => (0, d.jsxs)(j, {
        children: [
            (0, d.jsx)('div', {
                className: 'area',
                children: (0, d.jsxs)('ul', {
                    className: 'circles',
                    children: [
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {})
                    ]
                })
            }),
            (0, d.jsx)(k, {
                children: a.children
            })
        ]
    });
    const j = e.default.div(f || (f = h`
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
        k = e.default.div.attrs({
            className: 'maxAll'
        })(g || (g = h`
  position: absolute;
  top: 0;
  left: 0;
`));
}), c.register('+KLzG', function(a, b) {
    var d = a.exports && a.exports.__importDefault || function(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    const e = d(c('WxqM0'));
    a.exports.Client = e.default;
    const f = d(c('3iZLF'));
    a.exports.Room = f.default;
}), c.register('WxqM0', function(a, b) {
    var d = a.exports && a.exports.__importDefault || function(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    const e = d(c('2E9Tf')),
        f = d(c('Vix5N')),
        g = d(c('nHIQM')),
        h = d(c('11k0b'));
    var i = c('XKMSV');
    const j = d(c('W73L7')),
        k = d(c('3iZLF'));
    a.exports.default = class {
        createRoom(a, b) {
            const l = Math.random().toString();
            this.socket.emit(h.default.createNewRoom, {
                type: a,
                options: b,
                uniqueRequestId: l
            });
            const m = new k.default(this.socket, b);
            return this.socket.on(`${ l }-create`, a => {
                m._setRoomId(a), m.onCreate.call(a), this.joinRoom(a, b, m);
            }), this.socket.on(`${ l }-error`, a => {
                m.onJoinError.call(a);
            }), m;
        }
        joinRoom(a, b, c) {
            const l = c || new k.default(this.socket, b, a);
            return l.onJoinAttempt.call(), l.joined || this.socket.emit(h.default.joinRoom, {
                roomId: a,
                options: b
            }), this.rooms.some(b => b.id === a) || this.rooms.push(l), l;
        }
        constructor(a, b) {
            this.rooms = [], this.onConnect = new g.default(), this.onConnectError = new g.default(), this.onDisconnect = new g.default(), this.onReconnect = new g.default(), this.onReconnectAttempt = new g.default(), this.latency = 0, this.useClientIdSaving = !0, this.disconnect = () => {
                this.socket.disconnect();
            }, this.connect = () => {
                this.socket.connect();
            }, b && b.blockClientIdSaving && (this.useClientIdSaving = !1), this.socket = e.default(a, {
                path: '/blueboat',
                parser: f.default,
                transports: b.transports || ['websocket'],
                query: {
                    id: localStorage && this.useClientIdSaving && localStorage.getItem(i.BLUEBOAT_ID + (b && b.clientIdSuffix ? b.clientIdSuffix : '')) || ''
                },
                reconnectionDelay: 500,
                reconnectionDelayMax: 1500,
                randomizationFactor: 0
            }), this.socket.on('connect_error', a => this.onConnectError.call(a)), this.socket.on('error', a => this.onConnectError.call(a)), this.socket.on(j.default.clientIdSet, a => {
                localStorage && this.useClientIdSaving && localStorage.setItem(i.BLUEBOAT_ID + (b && b.clientIdSuffix ? b.clientIdSuffix : ''), a), this.socket.io.opts.query.id = a, this.id = a, this.sessionId = this.socket.id, this.rooms.length && this.rooms.forEach(a => this.joinRoom(a.id, a.initialJoinOptions, a)), this.onConnect.call();
            }), this.socket.on('pong', a => {
                this.latency = a;
            }), this.socket.on('reconnect', a => this.onReconnect.call(a)), this.socket.on('reconnect_attempt', a => {
                this.onReconnectAttempt.call(a);
            }), this.socket.on('disconnect', a => {
                this.onDisconnect.call(a), this.rooms.forEach(b => {
                    b.joined = !1, b.onLeave.call(a);
                });
            });
        }
    };
}), c.register('2E9Tf', function(a, b) {
    var d = c('cwJVR'),
        e = c('TbAI8'),
        f = c('wF/cK')('socket.io-client');
    a.exports = b = h;
    var g = b.managers = {};

    function h(a, b) {
        'object' == typeof a && (b = a, a = void 0), b = b || {};
        var i, j = d(a),
            k = j.source,
            l = j.id,
            m = j.path,
            n = g[l] && m in g[l].nsps;
        return b.forceNew || b['force new connection'] || !1 === b.multiplex || n ? (f('ignoring socket cache for %s', k), i = c('LW++S')(k, b)) : (g[l] || (f('new io instance for %s', k), g[l] = c('LW++S')(k, b)), i = g[l]), j.query && !b.query && (b.query = j.query), i.socket(j.path, b);
    }
    b.protocol = e.protocol, b.connect = h, b.Manager = c('LW++S'), b.Socket = c('zzsfr');
}), c.register('cwJVR', function(a, b) {
    var d = c('nLGOx'),
        e = c('wF/cK')('socket.io-client:url');
    a.exports = function(a, b) {
        var f = g;
        b = b || 'undefined' != typeof location && location, null == g && (g = b.protocol + '//' + b.host);
        'string' == typeof g && ('/' === g.charAt(0) && (g = '/' === g.charAt(1) ? b.protocol + g : b.host + g), /^(https?|wss?):\/\//.test(g) || (e('protocol-less url %s', g), g = void 0 !== b ? b.protocol + '//' + g : 'https://' + g), e('parse %s', g), f = d(g));
        f.port || (/^(http|ws)$/.test(f.protocol) ? f.port = '80' : /^(http|ws)s$/.test(f.protocol) && (f.port = '443'));
        f.path = f.path || '/';
        var h = -1 !== f.host.indexOf(':') ? '[' + f.host + ']' : f.host;
        return f.id = f.protocol + '://' + h + ':' + f.port, f.href = f.protocol + '://' + h + (b && b.port === f.port ? '' : ':' + f.port), f;
    };
}), c.register('nLGOx', function(a, b) {
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
    a.exports = function(a) {
        var f = g,
            h = g.indexOf('['),
            i = g.indexOf(']'); -
        1 != h && -1 != i && (g = g.substring(0, h) + g.substring(h, i).replace(/:/g, ';') + g.substring(i, g.length));
        for (var j, k, l = d.exec(g || ''), m = {}, n = 14; n--;)
            m[e[n]] = l[n] || '';
        return -1 != h && -1 != i && (m.source = f, m.host = m.host.substring(1, m.host.length - 1).replace(/;/g, ':'), m.authority = m.authority.replace('[', '').replace(']', '').replace(/;/g, ':'), m.ipv6uri = !0), m.pathNames = function(g, f) {
            var o = /\/{2,9}/g,
                p = f.replace(o, '/').split('/');
            '/' != f.substr(0, 1) && 0 !== f.length || p.splice(0, 1);
            '/' == f.substr(f.length - 1, 1) && p.splice(p.length - 1, 1);
            return p;
        }(0, m.path), m.queryKey = (j = m.query, k = {}, j.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(g, f, d) {
            f && (k[f] = d);
        }), k), m;
    };
}), c.register('wF/cK', function(a, b) {
    var d = c('wpWTd');

    function e() {
        var f;
        try {
            f = b.storage.debug;
        } catch (f) {}
        return !f && void 0 !== d && 'env' in d && (f = void 0), f;
    }
    (b = a.exports = c('mzP6F')).log = function() {
        return 'object' == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }, b.formatArgs = function(a) {
        var f = this.useColors;
        if (a[0] = (f ? '%c' : '') + this.namespace + (f ? ' %c' : ' ') + a[0] + (f ? '%c ' : ' ') + '+' + b.humanize(this.diff), !f)
            return;
        var g = 'color: ' + this.color;
        a.splice(1, 0, g, 'color: inherit');
        var h = 0,
            i = 0;
        a[0].replace(/%[a-zA-Z%]/g, function(a) {
            '%%' !== a && (h++, '%c' === a && (i = h));
        }), a.splice(i, 0, g);
    }, b.save = function(a) {
        try {
            null == a ? b.storage.removeItem('debug') : b.storage.debug = a;
        } catch (a) {}
    }, b.load = e, b.useColors = function() {
        return !('undefined' == typeof window || !window.process || 'renderer' !== window.process.type) || ('undefined' == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ('undefined' != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || 'undefined' != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }, b.storage = 'undefined' != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
        try {
            return window.localStorage;
        } catch (a) {}
    }(), b.colors = [
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
    ], b.formatters.j = function(a) {
        try {
            return JSON.stringify(a);
        } catch (a) {
            return '[UnexpectedJSONParseError]: ' + a.message;
        }
    }, b.enable(e());
}), c.register('mzP6F', function(a, b) {
    function d(a) {
        var e;

        function f() {
            if (f.enabled) {
                var g = h,
                    i = +new Date(),
                    j = i - (e || i);
                g.diff = j, g.prev = e, g.curr = i, e = i;
                for (var k = new Array(arguments.length), l = 0; l < k.length; l++)
                    k[l] = arguments[l];
                k[0] = b.coerce(k[0]), 'string' != typeof k[0] && k.unshift('%O');
                var m = 0;
                k[0] = k[0].replace(/%([a-zA-Z%])/g, function(e, h) {
                    if ('%%' === e)
                        return e;
                    m++;
                    var n = b.formatters[h];
                    if ('function' == typeof n) {
                        var o = k[m];
                        e = n.call(g, o), k.splice(m, 1), m--;
                    }
                    return e;
                }), b.formatArgs.call(g, k);
                var n = h.log || b.log || console.log.bind(console);
                n.apply(g, k);
            }
        }
        return f.namespace = a, f.enabled = b.enabled(a), f.useColors = b.useColors(), f.color = function(a) {
            var g, h = 0;
            for (g in a)
                h = (h << 5) - h + a.charCodeAt(g), h |= 0;
            return b.colors[Math.abs(h) % b.colors.length];
        }(a), f.destroy = e, 'function' == typeof b.init && b.init(f), b.instances.push(f), f;
    }

    function e() {
        var f = b.instances.indexOf(this);
        return -1 !== f && (b.instances.splice(f, 1), !0);
    }
    (b = a.exports = d.debug = d.default = d).coerce = function(a) {
        return a instanceof Error ? a.stack || a.message : a;
    }, b.disable = function() {
        b.enable('');
    }, b.enable = function(a) {
        var f;
        b.save(a), b.names = [], b.skips = [];
        var g = ('string' == typeof a ? a : '').split(/[\s,]+/),
            h = g.length;
        for (f = 0; f < h; f++)
            g[f] && ('-' === (a = g[f].replace(/\*/g, '.*?'))[0] ? b.skips.push(new RegExp('^' + a.substr(1) + '$')) : b.names.push(new RegExp('^' + a + '$')));
        for (f = 0; f < b.instances.length; f++) {
            var i = b.instances[f];
            i.enabled = b.enabled(i.namespace);
        }
    }, b.enabled = function(a) {
        if ('*' === a[a.length - 1])
            return !0;
        var f, g;
        for (f = 0, g = b.skips.length; f < g; f++)
            if (b.skips[f].test(a))
                return !1;
        for (f = 0, g = b.names.length; f < g; f++)
            if (b.names[f].test(a))
                return !0;
        return !1;
    }, b.humanize = c('aNXFZ1'), b.instances = [], b.names = [], b.skips = [], b.formatters = {};
}), c.register('aNXFZ1', function(a, b) {
    var d = 1000,
        e = 60000,
        f = 3600000,
        g = 86400000,
        h = 31557600000;

    function i(a, b, d) {
        if (!(a < b))
            return a < 1.5 * b ? Math.floor(a / b) + ' ' + d : Math.ceil(a / b) + ' ' + d + 's';
    }
    a.exports = function(a, b) {
        b = b || {};
        var j, k = typeof a;
        if ('string' === k && a.length > 0)
            return function(a) {
                if ((a = String(a)).length > 100)
                    return;
                var l = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(a);
                if (!l)
                    return;
                var m = parseFloat(l[1]);
                switch ((l[2] || 'ms').toLowerCase()) {
                    case 'years':
                    case 'year':
                    case 'yrs':
                    case 'yr':
                    case 'y':
                        return m * h;
                    case 'days':
                    case 'day':
                    case 'd':
                        return m * g;
                    case 'hours':
                    case 'hour':
                    case 'hrs':
                    case 'hr':
                    case 'h':
                        return m * f;
                    case 'minutes':
                    case 'minute':
                    case 'mins':
                    case 'min':
                    case 'm':
                        return m * e;
                    case 'seconds':
                    case 'second':
                    case 'secs':
                    case 'sec':
                    case 's':
                        return m * d;
                    case 'milliseconds':
                    case 'millisecond':
                    case 'msecs':
                    case 'msec':
                    case 'ms':
                        return m;
                    default:
                        return;
                }
            }(a);
        if ('number' === k && !1 === isNaN(a))
            return b.long ? i(j = a, g, 'day') || i(j, f, 'hour') || i(j, e, 'minute') || i(j, d, 'second') || j + ' ms' : function(a) {
                return a >= g ? Math.round(a / g) + 'd' : a >= f ? Math.round(a / f) + 'h' : a >= e ? Math.round(a / e) + 'm' : a >= d ? Math.round(a / d) + 's' : a + 'ms';
            }(a);
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(a));
    };
}), c.register('TbAI8', function(b, B) {
    var d, e, f, g, h, i, j, k, l, m, n;
    a(b.exports, 'protocol', function() {
        return d;
    }, function(a) {
        return d = a;
    }), a(b.exports, 'types', function() {
        return e;
    }, function(a) {
        return e = a;
    }), a(b.exports, 'CONNECT', function() {
        return f;
    }, function(a) {
        return f = a;
    }), a(b.exports, 'DISCONNECT', function() {
        return g;
    }, function(a) {
        return g = a;
    }), a(b.exports, 'EVENT', function() {
        return h;
    }, function(a) {
        return h = a;
    }), a(b.exports, 'ACK', function() {
        return i;
    }, function(a) {
        return i = a;
    }), a(b.exports, 'ERROR', function() {
        return j;
    }, function(a) {
        return j = a;
    }), a(b.exports, 'BINARY_EVENT', function() {
        return k;
    }, function(a) {
        return k = a;
    }), a(b.exports, 'BINARY_ACK', function() {
        return l;
    }, function(a) {
        return l = a;
    }), a(b.exports, 'Encoder', function() {
        return m;
    }, function(a) {
        return m = a;
    }), a(b.exports, 'Decoder', function() {
        return n;
    }, function(a) {
        return n = a;
    });
    var o = c('4zZQ+')('socket.io-parser'),
        p = c('91dgJ'),
        q = c('gfNzt'),
        r = c('HQvBv0'),
        s = c('DjhNB');

    function t() {}
    d = 4, e = [
        'CONNECT',
        'DISCONNECT',
        'EVENT',
        'ACK',
        'ERROR',
        'BINARY_EVENT',
        'BINARY_ACK'
    ], f = 0, g = 1, h = 2, i = 3, k = 5, l = 6, m = t, n = w;
    var u = (j = 4) + '"encode error"';

    function v(a) {
        var w = '' + a.type;
        if (k !== a.type && l !== a.type || (w += a.attachments + '-'), a.nsp && '/' !== a.nsp && (w += a.nsp + ','), null != a.id && (w += a.id), null != a.data) {
            var x = function(a) {
                try {
                    return JSON.stringify(a);
                } catch (a) {
                    return !1;
                }
            }(a.data);
            if (!1 === x)
                return u;
            w += x;
        }
        return o('encoded %j as %s', a, w), w;
    }

    function w() {
        this.reconstructor = null;
    }

    function x(a) {
        this.reconPack = a, this.buffers = [];
    }

    function y(a) {
        return {
            type: j,
            data: 'parser error: ' + a
        };
    }
    t.prototype.encode = function(a, b) {
        (o('encoding packet %j', a), k === a.type || l === a.type) ? function(a, b) {
            function z(a) {
                var A = q.deconstructPacket(a),
                    B = v(A.packet),
                    C = A.buffers;
                C.unshift(B), b(C);
            }
            q.removeBlobs(a, z);
        }(a, b) : b([v(a)]);
    }, p(w.prototype), w.prototype.add = function(a) {
        var z;
        if ('string' == typeof a)
            z = function(a) {
                var A = 0,
                    B = {
                        type: Number(a.charAt(0))
                    };
                if (null == e[B.type])
                    return y('unknown packet type ' + B.type);
                if (k === B.type || l === B.type) {
                    for (var C = '';
                        '-' !== a.charAt(++A) && (C += a.charAt(A), A != a.length););
                    if (C != Number(C) || '-' !== a.charAt(A))
                        throw new Error('Illegal attachments');
                    B.attachments = Number(C);
                }
                if ('/' === a.charAt(A + 1))
                    for (B.nsp = ''; ++A;) {
                        if (',' === (f = a.charAt(A)))
                            break;
                        if (B.nsp += f, A === a.length)
                            break;
                    }
                else
                    B.nsp = '/';
                var C = a.charAt(A + 1);
                if ('' !== C && Number(C) == C) {
                    for (B.id = ''; ++A;) {
                        var D;
                        if (null == (D = a.charAt(A)) || Number(D) != D) {
                            --A;
                            break;
                        }
                        if (B.id += a.charAt(A), A === a.length)
                            break;
                    }
                    B.id = Number(B.id);
                }
                if (a.charAt(++A)) {
                    var D = function(a) {
                        try {
                            return JSON.parse(a);
                        } catch (a) {
                            return !1;
                        }
                    }(a.substr(A));
                    if (!(!1 !== D && (B.type === j || r(D))))
                        return y('invalid payload');
                    B.data = D;
                }
                return o('decoded %s as %j', a, B), B;
            }(a), k === z.type || l === z.type ? (this.reconstructor = new x(z), 0 === this.reconstructor.reconPack.attachments && this.emit('decoded', z)) : this.emit('decoded', z);
        else {
            if (!s(a) && !a.base64)
                throw new Error('Unknown type: ' + a);
            if (!this.reconstructor)
                throw new Error('got binary data when not reconstructing a packet');
            (z = this.reconstructor.takeBinaryData(a)) && (this.reconstructor = null, this.emit('decoded', z));
        }
    }, w.prototype.destroy = function() {
        this.reconstructor && this.reconstructor.finishedReconstruction();
    }, x.prototype.takeBinaryData = function(a) {
        if (this.buffers.push(a), this.buffers.length === this.reconPack.attachments) {
            var z = q.reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), z;
        }
        return null;
    }, x.prototype.finishedReconstruction = function() {
        this.reconPack = null, this.buffers = [];
    };
}), c.register('4zZQ+', function(a, b) {
    var d = c('wpWTd');

    function e() {
        var f;
        try {
            f = b.storage.debug;
        } catch (f) {}
        return !f && void 0 !== d && 'env' in d && (f = void 0), f;
    }
    (b = a.exports = c('JFDgi')).log = function() {
        return 'object' == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }, b.formatArgs = function(a) {
        var f = this.useColors;
        if (a[0] = (f ? '%c' : '') + this.namespace + (f ? ' %c' : ' ') + a[0] + (f ? '%c ' : ' ') + '+' + b.humanize(this.diff), !f)
            return;
        var g = 'color: ' + this.color;
        a.splice(1, 0, g, 'color: inherit');
        var h = 0,
            i = 0;
        a[0].replace(/%[a-zA-Z%]/g, function(a) {
            '%%' !== a && (h++, '%c' === a && (i = h));
        }), a.splice(i, 0, g);
    }, b.save = function(a) {
        try {
            null == a ? b.storage.removeItem('debug') : b.storage.debug = a;
        } catch (a) {}
    }, b.load = e, b.useColors = function() {
        return !('undefined' == typeof window || !window.process || 'renderer' !== window.process.type) || ('undefined' == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ('undefined' != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || 'undefined' != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }, b.storage = 'undefined' != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
        try {
            return window.localStorage;
        } catch (a) {}
    }(), b.colors = [
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
    ], b.formatters.j = function(a) {
        try {
            return JSON.stringify(a);
        } catch (a) {
            return '[UnexpectedJSONParseError]: ' + a.message;
        }
    }, b.enable(e());
}), c.register('JFDgi', function(a, b) {
    function d(a) {
        var e;

        function f() {
            if (f.enabled) {
                var g = h,
                    i = +new Date(),
                    j = i - (e || i);
                g.diff = j, g.prev = e, g.curr = i, e = i;
                for (var k = new Array(arguments.length), l = 0; l < k.length; l++)
                    k[l] = arguments[l];
                k[0] = b.coerce(k[0]), 'string' != typeof k[0] && k.unshift('%O');
                var m = 0;
                k[0] = k[0].replace(/%([a-zA-Z%])/g, function(e, h) {
                    if ('%%' === e)
                        return e;
                    m++;
                    var n = b.formatters[h];
                    if ('function' == typeof n) {
                        var o = k[m];
                        e = n.call(g, o), k.splice(m, 1), m--;
                    }
                    return e;
                }), b.formatArgs.call(g, k);
                var n = h.log || b.log || console.log.bind(console);
                n.apply(g, k);
            }
        }
        return f.namespace = a, f.enabled = b.enabled(a), f.useColors = b.useColors(), f.color = function(a) {
            var g, h = 0;
            for (g in a)
                h = (h << 5) - h + a.charCodeAt(g), h |= 0;
            return b.colors[Math.abs(h) % b.colors.length];
        }(a), f.destroy = e, 'function' == typeof b.init && b.init(f), b.instances.push(f), f;
    }

    function e() {
        var f = b.instances.indexOf(this);
        return -1 !== f && (b.instances.splice(f, 1), !0);
    }
    (b = a.exports = d.debug = d.default = d).coerce = function(a) {
        return a instanceof Error ? a.stack || a.message : a;
    }, b.disable = function() {
        b.enable('');
    }, b.enable = function(a) {
        var f;
        b.save(a), b.names = [], b.skips = [];
        var g = ('string' == typeof a ? a : '').split(/[\s,]+/),
            h = g.length;
        for (f = 0; f < h; f++)
            g[f] && ('-' === (a = g[f].replace(/\*/g, '.*?'))[0] ? b.skips.push(new RegExp('^' + a.substr(1) + '$')) : b.names.push(new RegExp('^' + a + '$')));
        for (f = 0; f < b.instances.length; f++) {
            var i = b.instances[f];
            i.enabled = b.enabled(i.namespace);
        }
    }, b.enabled = function(a) {
        if ('*' === a[a.length - 1])
            return !0;
        var f, g;
        for (f = 0, g = b.skips.length; f < g; f++)
            if (b.skips[f].test(a))
                return !1;
        for (f = 0, g = b.names.length; f < g; f++)
            if (b.names[f].test(a))
                return !0;
        return !1;
    }, b.humanize = c('aNXFZ0'), b.instances = [], b.names = [], b.skips = [], b.formatters = {};
}), c.register('aNXFZ0', function(a, b) {
    var d = 1000,
        e = 60000,
        f = 3600000,
        g = 86400000,
        h = 31557600000;

    function i(a, b, d) {
        if (!(a < b))
            return a < 1.5 * b ? Math.floor(a / b) + ' ' + d : Math.ceil(a / b) + ' ' + d + 's';
    }
    a.exports = function(a, b) {
        b = b || {};
        var j, k = typeof a;
        if ('string' === k && a.length > 0)
            return function(a) {
                if ((a = String(a)).length > 100)
                    return;
                var l = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(a);
                if (!l)
                    return;
                var m = parseFloat(l[1]);
                switch ((l[2] || 'ms').toLowerCase()) {
                    case 'years':
                    case 'year':
                    case 'yrs':
                    case 'yr':
                    case 'y':
                        return m * h;
                    case 'days':
                    case 'day':
                    case 'd':
                        return m * g;
                    case 'hours':
                    case 'hour':
                    case 'hrs':
                    case 'hr':
                    case 'h':
                        return m * f;
                    case 'minutes':
                    case 'minute':
                    case 'mins':
                    case 'min':
                    case 'm':
                        return m * e;
                    case 'seconds':
                    case 'second':
                    case 'secs':
                    case 'sec':
                    case 's':
                        return m * d;
                    case 'milliseconds':
                    case 'millisecond':
                    case 'msecs':
                    case 'msec':
                    case 'ms':
                        return m;
                    default:
                        return;
                }
            }(a);
        if ('number' === k && !1 === isNaN(a))
            return b.long ? i(j = a, g, 'day') || i(j, f, 'hour') || i(j, e, 'minute') || i(j, d, 'second') || j + ' ms' : function(a) {
                return a >= g ? Math.round(a / g) + 'd' : a >= f ? Math.round(a / f) + 'h' : a >= e ? Math.round(a / e) + 'm' : a >= d ? Math.round(a / d) + 's' : a + 'ms';
            }(a);
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(a));
    };
}), c.register('91dgJ', function(a, b) {
    function d(a) {
        if (a)
            return function(a) {
                for (var e in d.prototype)
                    a[e] = d.prototype[e];
                return a;
            }(a);
    }
    a.exports = d, d.prototype.on = d.prototype.addEventListener = function(a, b) {
        return this._callbacks = this._callbacks || {}, (this._callbacks['$' + a] = this._callbacks['$' + a] || []).push(b), this;
    }, d.prototype.once = function(a, b) {
        function e() {
            this.off(a, e), b.apply(this, arguments);
        }
        return e.fn = b, this.on(a, e), this;
    }, d.prototype.off = d.prototype.removeListener = d.prototype.removeAllListeners = d.prototype.removeEventListener = function(a, b) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
            return this._callbacks = {}, this;
        var e, f = this._callbacks['$' + a];
        if (!f)
            return this;
        if (1 == arguments.length)
            return delete this._callbacks['$' + a], this;
        for (var g = 0; g < f.length; g++)
            if ((e = f[g]) === b || e.fn === b) {
                f.splice(g, 1);
                break;
            }
        return 0 === f.length && delete this._callbacks['$' + a], this;
    }, d.prototype.emit = function(a) {
        this._callbacks = this._callbacks || {};
        for (var e = new Array(arguments.length - 1), f = this._callbacks['$' + a], g = 1; g < arguments.length; g++)
            e[g - 1] = arguments[g];
        if (f) {
            g = 0;
            for (var h = (f = f.slice(0)).length; g < h; ++g)
                f[g].apply(this, e);
        }
        return this;
    }, d.prototype.listeners = function(a) {
        return this._callbacks = this._callbacks || {}, this._callbacks['$' + a] || [];
    }, d.prototype.hasListeners = function(a) {
        return !!this.listeners(a).length;
    };
}), c.register('gfNzt', function(b, m) {
    var d, e, f;
    a(b.exports, 'deconstructPacket', function() {
        return d;
    }, function(a) {
        return d = a;
    }), a(b.exports, 'reconstructPacket', function() {
        return e;
    }, function(a) {
        return e = a;
    }), a(b.exports, 'removeBlobs', function() {
        return f;
    }, function(a) {
        return f = a;
    });
    var g = c('HQvBv0'),
        h = c('DjhNB'),
        i = Object.prototype.toString,
        j = 'function' == typeof Blob || 'undefined' != typeof Blob && '[object BlobConstructor]' === i.call(Blob),
        k = 'function' == typeof File || 'undefined' != typeof File && '[object FileConstructor]' === i.call(File);

    function l(a, b) {
        if (!a)
            return a;
        if (h(a)) {
            var m = {
                _placeholder: !0,
                num: b.length
            };
            return b.push(a), m;
        }
        if (g(a)) {
            for (var m = new Array(a.length), n = 0; n < a.length; n++)
                m[n] = l(a[n], b);
            return m;
        }
        if ('object' == typeof a && !(a instanceof Date)) {
            o = {};
            for (var m in a)
                o[m] = l(a[m], b);
            return o;
        }
        return a;
    }

    function m(a, b) {
        if (!a)
            return a;
        if (a && a._placeholder)
            return b[a.num];
        if (g(a))
            for (var n = 0; n < a.length; n++)
                a[n] = m(a[n], b);
        else if ('object' == typeof a)
            for (var o in a)
                a[o] = m(a[o], b);
        return a;
    }
    d = function(a) {
        var n = [],
            o = a.data,
            p = q;
        return p.data = l(o, n), p.attachments = n.length, {
            packet: p,
            buffers: n
        };
    }, e = function(a, b) {
        return a.data = m(a.data, b), a.attachments = void 0, a;
    }, f = function(a, b) {
        var n = 0,
            o = p;
        ! function p(d, e, f) {
            if (!d)
                return d;
            if (j && d instanceof Blob || k && d instanceof File) {
                n++;
                var q = new FileReader();
                q.onload = function() {
                    f ? f[e] = this.result : o = this.result, --n || b(o);
                }, q.readAsArrayBuffer(d);
            } else if (g(d))
                for (var r = 0; r < d.length; r++)
                    p(d[r], r, d);
            else if ('object' == typeof d && !h(d))
                for (var s in d)
                    p(d[s], s, d);
        }(o), n || b(o);
    };
}), c.register('HQvBv0', function(a, b) {
    var d = {}.toString;
    a.exports = Array.isArray || function(a) {
        return '[object Array]' == d.call(a);
    };
}), c.register('DjhNB', function(a, b) {
    var d = c('6319O').Buffer;
    a.exports = function(a) {
        return e && d.isBuffer(a) || f && (a instanceof ArrayBuffer || function(a) {
            return 'function' == typeof ArrayBuffer.isView ? ArrayBuffer.isView(a) : a.buffer instanceof ArrayBuffer;
        }(a));
    };
    var e = 'function' == typeof d && 'function' == typeof d.isBuffer,
        f = 'function' == typeof ArrayBuffer;
}), c.register('LW++S', function(a, b) {
    var d = c('iUOeB'),
        e = c('zzsfr'),
        f = c('91dgJ'),
        g = c('TbAI8'),
        h = c('UN9DH'),
        i = c('UnSF5'),
        j = c('wF/cK')('socket.io-client:manager'),
        k = c('8aSiE'),
        l = c('BNkim'),
        m = Object.prototype.hasOwnProperty;

    function n(a, b) {
        if (!(this instanceof n))
            return new n(a, b);
        a && 'object' == typeof a && (b = a, a = void 0), (b = b || {}).path = b.path || '/socket.io', this.nsps = {}, this.subs = [], this.opts = b, this.reconnection(!1 !== b.reconnection), this.reconnectionAttempts(b.reconnectionAttempts || 1 / 0), this.reconnectionDelay(b.reconnectionDelay || 1000), this.reconnectionDelayMax(b.reconnectionDelayMax || 5000), this.randomizationFactor(b.randomizationFactor || 0.5), this.backoff = new l({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(null == b.timeout ? 20000 : b.timeout), this.readyState = 'closed', this.uri = a, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
        var o = b.parser || g;
        this.encoder = new o.Encoder(), this.decoder = new o.Decoder(), this.autoConnect = !1 !== b.autoConnect, this.autoConnect && this.open();
    }
    a.exports = n, n.prototype.emitAll = function() {
        for (var o in (this.emit.apply(this, arguments), this.nsps))
            m.call(this.nsps, o) && this.nsps[o].emit.apply(this.nsps[o], arguments);
    }, n.prototype.updateSocketIds = function() {
        for (var o in this.nsps)
            m.call(this.nsps, o) && (this.nsps[o].id = this.generateId(o));
    }, n.prototype.generateId = function(a) {
        return ('/' === a ? '' : a + '#') + this.engine.id;
    }, f(n.prototype), n.prototype.reconnection = function(a) {
        return arguments.length ? (this._reconnection = !!a, this) : this._reconnection;
    }, n.prototype.reconnectionAttempts = function(a) {
        return arguments.length ? (this._reconnectionAttempts = a, this) : this._reconnectionAttempts;
    }, n.prototype.reconnectionDelay = function(a) {
        return arguments.length ? (this._reconnectionDelay = a, this.backoff && this.backoff.setMin(a), this) : this._reconnectionDelay;
    }, n.prototype.randomizationFactor = function(a) {
        return arguments.length ? (this._randomizationFactor = a, this.backoff && this.backoff.setJitter(a), this) : this._randomizationFactor;
    }, n.prototype.reconnectionDelayMax = function(a) {
        return arguments.length ? (this._reconnectionDelayMax = a, this.backoff && this.backoff.setMax(a), this) : this._reconnectionDelayMax;
    }, n.prototype.timeout = function(a) {
        return arguments.length ? (this._timeout = a, this) : this._timeout;
    }, n.prototype.maybeReconnectOnOpen = function() {
        !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
    }, n.prototype.open = n.prototype.connect = function(a, b) {
        if (j('readyState %s', this.readyState), ~this.readyState.indexOf('open'))
            return this;
        j('opening %s', this.uri), this.engine = d(this.uri, this.opts);
        var o = this.engine,
            p = this;
        this.readyState = 'opening', this.skipReconnect = !1;
        var q = h(o, 'open', function() {
                p.onopen(), a && a();
            }),
            r = h(o, 'error', function(b) {
                if (j('connect_error'), p.cleanup(), p.readyState = 'closed', p.emitAll('connect_error', b), a) {
                    var s = new Error('Connection error');
                    s.data = b, a(s);
                } else
                    p.maybeReconnectOnOpen();
            });
        if (!1 !== this._timeout) {
            var s = this._timeout;
            j('connect attempt will timeout after %d', s), 0 === s && q.destroy();
            var t = setTimeout(function() {
                j('connect attempt timed out after %d', s), q.destroy(), o.close(), o.emit('error', 'timeout'), p.emitAll('connect_timeout', s);
            }, s);
            this.subs.push({
                destroy: function() {
                    clearTimeout(t);
                }
            });
        }
        return this.subs.push(q), this.subs.push(r), this;
    }, n.prototype.onopen = function() {
        j('open'), this.cleanup(), this.readyState = 'open', this.emit('open');
        var o = this.engine;
        this.subs.push(h(o, 'data', i(this, 'ondata'))), this.subs.push(h(o, 'ping', i(this, 'onping'))), this.subs.push(h(o, 'pong', i(this, 'onpong'))), this.subs.push(h(o, 'error', i(this, 'onerror'))), this.subs.push(h(o, 'close', i(this, 'onclose'))), this.subs.push(h(this.decoder, 'decoded', i(this, 'ondecoded')));
    }, n.prototype.onping = function() {
        this.lastPing = new Date(), this.emitAll('ping');
    }, n.prototype.onpong = function() {
        this.emitAll('pong', new Date() - this.lastPing);
    }, n.prototype.ondata = function(a) {
        this.decoder.add(a);
    }, n.prototype.ondecoded = function(a) {
        this.emit('packet', a);
    }, n.prototype.onerror = function(a) {
        j('error', a), this.emitAll('error', a);
    }, n.prototype.socket = function(a, b) {
        var o = this.nsps[a];
        if (!o) {
            o = new e(this, a, b), this.nsps[a] = o;
            var p = this;
            o.on('connecting', f), o.on('connect', function() {
                o.id = p.generateId(a);
            }), this.autoConnect && f();
        }

        function p() {
            ~k(d.connecting, o) || d.connecting.push(o);
        }
        return o;
    }, n.prototype.destroy = function(a) {
        var o = k(this.connecting, a);
        ~o && this.connecting.splice(o, 1), this.connecting.length || this.close();
    }, n.prototype.packet = function(a) {
        j('writing packet %j', a);
        var o = this;
        a.query && 0 === a.type && (a.nsp += '?' + a.query), o.encoding ? o.packetBuffer.push(a) : (o.encoding = !0, this.encoder.encode(a, function(c) {
            for (var p = 0; p < c.length; p++)
                o.engine.write(c[p], a.options);
            o.encoding = !1, o.processPacketQueue();
        }));
    }, n.prototype.processPacketQueue = function() {
        if (this.packetBuffer.length > 0 && !this.encoding) {
            var o = this.packetBuffer.shift();
            this.packet(o);
        }
    }, n.prototype.cleanup = function() {
        j('cleanup');
        for (var o = this.subs.length, p = 0; p < o; p++) {
            this.subs.shift().destroy();
        }
        this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
    }, n.prototype.close = n.prototype.disconnect = function() {
        j('disconnect'), this.skipReconnect = !0, this.reconnecting = !1, 'opening' === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = 'closed', this.engine && this.engine.close();
    }, n.prototype.onclose = function(a) {
        j('onclose'), this.cleanup(), this.backoff.reset(), this.readyState = 'closed', this.emit('close', a), this._reconnection && !this.skipReconnect && this.reconnect();
    }, n.prototype.reconnect = function() {
        if (this.reconnecting || this.skipReconnect)
            return this;
        var o = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            j('reconnect failed'), this.backoff.reset(), this.emitAll('reconnect_failed'), this.reconnecting = !1;
        else {
            var p = this.backoff.duration();
            j('will wait %dms before reconnect attempt', p), this.reconnecting = !0;
            var q = setTimeout(function() {
                o.skipReconnect || (j('attempting reconnect'), o.emitAll('reconnect_attempt', o.backoff.attempts), o.emitAll('reconnecting', o.backoff.attempts), o.skipReconnect || o.open(function(p) {
                    p ? (j('reconnect attempt error'), o.reconnecting = !1, o.reconnect(), o.emitAll('reconnect_error', p.data)) : (j('reconnect success'), o.onreconnect());
                }));
            }, p);
            this.subs.push({
                destroy: function() {
                    clearTimeout(q);
                }
            });
        }
    }, n.prototype.onreconnect = function() {
        var o = this.backoff.attempts;
        this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll('reconnect', o);
    };
}), c.register('iUOeB', function(a, b) {
    a.exports = c('7AgVK'), a.exports.parser = c('JK2gz');
}), c.register('7AgVK', function(a, b) {
    var d = c('91dgJ'),
        e = c('7zKDz')('engine.io-client:socket'),
        f = c('8aSiE'),
        g = c('nLGOx'),
        h = c('9JQiJ');

    function i(a, b) {
        if (!(this instanceof i))
            return new i(a, b);
        b = b || {}, a && 'object' == typeof a && (b = a, a = null), a ? (a = g(a), b.hostname = a.host, b.secure = 'https' === a.protocol || 'wss' === a.protocol, b.port = a.port, a.query && (b.query = a.query)) : b.host && (b.hostname = g(b.host).host), this.secure = null != b.secure ? b.secure : 'undefined' != typeof location && 'https:' === location.protocol, b.hostname && !b.port && (b.port = this.secure ? '443' : '80'), this.agent = b.agent || !1, this.hostname = b.hostname || ('undefined' != typeof location ? location.hostname : 'localhost'), this.port = b.port || ('undefined' != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = b.query || {}, 'string' == typeof this.query && (this.query = h.decode(this.query)), this.upgrade = !1 !== b.upgrade, this.path = (b.path || '/engine.io').replace(/\/$/, '') + '/', this.forceJSONP = !!b.forceJSONP, this.jsonp = !1 !== b.jsonp, this.forceBase64 = !!b.forceBase64, this.enablesXDR = !!b.enablesXDR, this.withCredentials = !1 !== b.withCredentials, this.timestampParam = b.timestampParam || 't', this.timestampRequests = b.timestampRequests, this.transports = b.transports || [
            'polling',
            'websocket'
        ], this.transportOptions = b.transportOptions || {}, this.readyState = '', this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = b.policyPort || 843, this.rememberUpgrade = b.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = b.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== b.perMessageDeflate && (b.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = b.pfx || null, this.key = b.key || null, this.passphrase = b.passphrase || null, this.cert = b.cert || null, this.ca = b.ca || null, this.ciphers = b.ciphers || null, this.rejectUnauthorized = void 0 === b.rejectUnauthorized || b.rejectUnauthorized, this.forceNode = !!b.forceNode, this.isReactNative = 'undefined' != typeof navigator && 'string' == typeof navigator.product && 'reactnative' === navigator.product.toLowerCase(), ('undefined' == typeof self || this.isReactNative) && (b.extraHeaders && Object.keys(b.extraHeaders).length > 0 && (this.extraHeaders = b.extraHeaders), b.localAddress && (this.localAddress = b.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open();
    }
    a.exports = i, i.priorWebsocketSuccess = !1, d(i.prototype), i.protocol = c('JK2gz').protocol, i.Socket = i, i.Transport = c('ay85Z'), i.transports = c('G4n40'), i.parser = c('JK2gz'), i.prototype.createTransport = function(a) {
        e('creating transport "%s"', a);
        var j = function(a) {
            var k = {};
            for (var l in a)
                a.hasOwnProperty(l) && (k[l] = a[l]);
            return k;
        }(this.query);
        j.EIO = c('JK2gz').protocol, j.transport = a;
        var k = this.transportOptions[a] || {};
        return this.id && (j.sid = this.id), new(c('G4n40'))[a]({
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
    }, i.prototype.open = function() {
        var j;
        if (this.rememberUpgrade && i.priorWebsocketSuccess && -1 !== this.transports.indexOf('websocket'))
            j = 'websocket';
        else {
            if (0 === this.transports.length) {
                var k = this;
                return void setTimeout(function() {
                    k.emit('error', 'No transports available');
                }, 0);
            }
            j = this.transports[0];
        }
        this.readyState = 'opening';
        try {
            j = this.createTransport(j);
        } catch (j) {
            return this.transports.shift(), void this.open();
        }
        j.open(), this.setTransport(j);
    }, i.prototype.setTransport = function(a) {
        e('setting transport %s', a.name);
        var j = this;
        this.transport && (e('clearing existing transport %s', this.transport.name), this.transport.removeAllListeners()), this.transport = a, a.on('drain', function() {
            j.onDrain();
        }).on('packet', function(a) {
            j.onPacket(a);
        }).on('error', function(a) {
            j.onError(a);
        }).on('close', function() {
            j.onClose('transport close');
        });
    }, i.prototype.probe = function(a) {
        e('probing transport "%s"', a);
        var j = this.createTransport(a, {
                probe: 1
            }),
            k = !1,
            l = this;

        function m() {
            if (l.onlyBinaryUpgrades) {
                var n = !this.supportsBinary && l.transport.supportsBinary;
                k = k || n;
            }
            k || (e('probe transport "%s" opened', a), j.send([{
                type: 'ping',
                data: 'probe'
            }]), j.once('packet', function(m) {
                if (!k)
                    if ('pong' === m.type && 'probe' === m.data) {
                        if (e('probe transport "%s" pong', a), l.upgrading = !0, l.emit('upgrading', j), !j)
                            return;
                        i.priorWebsocketSuccess = 'websocket' === j.name, e('pausing current transport "%s"', l.transport.name), l.transport.pause(function() {
                            k || 'closed' !== l.readyState && (e('changing transport and sending upgrade packet'), s(), l.setTransport(j), j.send([{
                                type: 'upgrade'
                            }]), l.emit('upgrade', j), j = null, l.upgrading = !1, l.flush());
                        });
                    } else {
                        e('probe transport "%s" failed', a);
                        var n = new Error('probe error');
                        n.transport = j.name, l.emit('upgradeError', n);
                    }
            }));
        }

        function n() {
            k || (k = !0, s(), j.close(), j = null);
        }

        function o(k) {
            var p = new Error('probe error: ' + k);
            p.transport = j.name, n(), e('probe transport "%s" failed because of error: %s', a, k), l.emit('upgradeError', p);
        }

        function p() {
            o('transport closed');
        }

        function q() {
            o('socket closed');
        }

        function r(a) {
            j && a.name !== j.name && (e('"%s" works - aborting "%s"', a.name, j.name), n());
        }

        function s() {
            j.removeListener('open', m), j.removeListener('error', o), j.removeListener('close', p), l.removeListener('close', q), l.removeListener('upgrading', r);
        }
        i.priorWebsocketSuccess = !1, j.once('open', m), j.once('error', o), j.once('close', p), this.once('close', q), this.once('upgrading', r), j.open();
    }, i.prototype.onOpen = function() {
        if (e('socket open'), this.readyState = 'open', i.priorWebsocketSuccess = 'websocket' === this.transport.name, this.emit('open'), this.flush(), 'open' === this.readyState && this.upgrade && this.transport.pause) {
            e('starting upgrade probes');
            for (var j = 0, k = this.upgrades.length; j < k; j++)
                this.probe(this.upgrades[j]);
        }
    }, i.prototype.onPacket = function(a) {
        if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState)
            switch (e('socket receive: type "%s", data "%s"', a.type, a.data), this.emit('packet', a), this.emit('heartbeat'), a.type) {
                case 'open':
                    this.onHandshake(JSON.parse(a.data));
                    break;
                case 'pong':
                    this.setPing(), this.emit('pong');
                    break;
                case 'error':
                    var j = new Error('server error');
                    j.code = a.data, this.onError(j);
                    break;
                case 'message':
                    this.emit('data', a.data), this.emit('message', a.data);
            }
        else
            e('packet received with socket readyState "%s"', this.readyState);
    }, i.prototype.onHandshake = function(a) {
        this.emit('handshake', a), this.id = a.sid, this.transport.query.sid = a.sid, this.upgrades = this.filterUpgrades(a.upgrades), this.pingInterval = a.pingInterval, this.pingTimeout = a.pingTimeout, this.onOpen(), 'closed' !== this.readyState && (this.setPing(), this.removeListener('heartbeat', this.onHeartbeat), this.on('heartbeat', this.onHeartbeat));
    }, i.prototype.onHeartbeat = function(a) {
        clearTimeout(this.pingTimeoutTimer);
        var j = this;
        j.pingTimeoutTimer = setTimeout(function() {
            'closed' !== j.readyState && j.onClose('ping timeout');
        }, a || j.pingInterval + j.pingTimeout);
    }, i.prototype.setPing = function() {
        var j = this;
        clearTimeout(j.pingIntervalTimer), j.pingIntervalTimer = setTimeout(function() {
            e('writing ping packet - expecting pong within %sms', j.pingTimeout), j.ping(), j.onHeartbeat(j.pingTimeout);
        }, j.pingInterval);
    }, i.prototype.ping = function() {
        var j = this;
        this.sendPacket('ping', function() {
            j.emit('ping');
        });
    }, i.prototype.onDrain = function() {
        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit('drain') : this.flush();
    }, i.prototype.flush = function() {
        'closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (e('flushing %d packets in socket', this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit('flush'));
    }, i.prototype.write = i.prototype.send = function(a, b, c) {
        return this.sendPacket('message', a, b, c), this;
    }, i.prototype.sendPacket = function(a, b, c, d) {
        if ('function' == typeof b && (d = b, b = void 0), 'function' == typeof c && (d = c, c = null), 'closing' !== this.readyState && 'closed' !== this.readyState) {
            (c = c || {}).compress = !1 !== c.compress;
            var j = {
                type: a,
                data: b,
                options: c
            };
            this.emit('packetCreate', j), this.writeBuffer.push(j), d && this.once('flush', d), this.flush();
        }
    }, i.prototype.close = function() {
        if ('opening' === this.readyState || 'open' === this.readyState) {
            this.readyState = 'closing';
            var j = this;
            this.writeBuffer.length ? this.once('drain', function() {
                this.upgrading ? d() : b();
            }) : this.upgrading ? d() : b();
        }

        function j() {
            a.onClose('forced close'), e('socket closing - telling transport to close'), a.transport.close();
        }

        function k() {
            a.removeListener('upgrade', k), a.removeListener('upgradeError', k), j();
        }

        function l() {
            a.once('upgrade', k), a.once('upgradeError', k);
        }
        return this;
    }, i.prototype.onError = function(a) {
        e('socket error %j', a), i.priorWebsocketSuccess = !1, this.emit('error', a), this.onClose('transport error', a);
    }, i.prototype.onClose = function(a, b) {
        if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
            e('socket close with reason: "%s"', a);
            clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners('close'), this.transport.close(), this.transport.removeAllListeners(), this.readyState = 'closed', this.id = null, this.emit('close', a, b), this.writeBuffer = [], this.prevBufferLen = 0;
        }
    }, i.prototype.filterUpgrades = function(a) {
        for (var j = [], k = 0, l = a.length; k < l; k++)
            ~f(this.transports, a[k]) && j.push(a[k]);
        return j;
    };
}), c.register('G4n40', function(b, l) {
    var d, e;
    a(b.exports, 'polling', function() {
        return d;
    }, function(a) {
        return d = a;
    }), a(b.exports, 'websocket', function() {
        return e;
    }, function(a) {
        return e = a;
    });
    var f = c('a4RXU'),
        g = c('Jpepn'),
        h = c('8D0Bh'),
        i = c('m803Q');
    d = function(a) {
        var j = !1,
            k = !1,
            l = !1 !== a.jsonp;
        if ('undefined' != typeof location) {
            var m = 'https:' === location.protocol,
                n = location.port;
            n || (n = m ? 443 : 80), j = a.hostname !== location.hostname || n !== a.port, k = a.secure !== m;
        }
        if (a.xdomain = j, a.xscheme = k, 'open' in new f(a) && !a.forceJSONP)
            return new g(a);
        if (!l)
            throw new Error('JSONP disabled');
        return new h(a);
    }, e = i;
}), c.register('a4RXU', function(a, b) {
    var d = c('ujXMF'),
        e = c('NsDgQ');
    a.exports = function(a) {
        var f = a.xdomain,
            g = a.xscheme,
            h = a.enablesXDR;
        try {
            if ('undefined' != typeof XMLHttpRequest && (!f || d))
                return new XMLHttpRequest();
        } catch (a) {}
        try {
            if ('undefined' != typeof XDomainRequest && !g && h)
                return new XDomainRequest();
        } catch (a) {}
        if (!f)
            try {
                return new e[(['Active'].concat('Object').join('X'))]('Microsoft.XMLHTTP');
            } catch (a) {}
    };
}), c.register('ujXMF', function(a, b) {
    try {
        a.exports = 'undefined' != typeof XMLHttpRequest && 'withCredentials' in new XMLHttpRequest();
    } catch (b) {
        a.exports = !1;
    }
}), c.register('NsDgQ', function(a, b) {
    a.exports = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : Function('return this')();
}), c.register('Jpepn', function(a, b) {
    var d = c('a4RXU'),
        e = c('TIIW7'),
        f = c('91dgJ'),
        g = c('GdJgl'),
        h = c('7zKDz')('engine.io-client:polling-xhr'),
        i = c('NsDgQ');

    function j() {}

    function k(a) {
        if (e.call(this, a), this.requestTimeout = a.requestTimeout, this.extraHeaders = a.extraHeaders, 'undefined' != typeof location) {
            var l = 'https:' === location.protocol,
                m = location.port;
            m || (m = l ? 443 : 80), this.xd = 'undefined' != typeof location && a.hostname !== location.hostname || m !== a.port, this.xs = a.secure !== l;
        }
    }

    function l(a) {
        this.method = a.method || 'GET', this.uri = a.uri, this.xd = !!a.xd, this.xs = !!a.xs, this.async = !1 !== a.async, this.data = void 0 !== a.data ? a.data : null, this.agent = a.agent, this.isBinary = a.isBinary, this.supportsBinary = a.supportsBinary, this.enablesXDR = a.enablesXDR, this.withCredentials = a.withCredentials, this.requestTimeout = a.requestTimeout, this.pfx = a.pfx, this.key = a.key, this.passphrase = a.passphrase, this.cert = a.cert, this.ca = a.ca, this.ciphers = a.ciphers, this.rejectUnauthorized = a.rejectUnauthorized, this.extraHeaders = a.extraHeaders, this.create();
    }
    if (a.exports = k, a.exports.Request = l, g(k, e), k.prototype.supportsBinary = !0, k.prototype.request = function(a) {
            return (a = a || {}).uri = this.uri(), a.xd = this.xd, a.xs = this.xs, a.agent = this.agent || !1, a.supportsBinary = this.supportsBinary, a.enablesXDR = this.enablesXDR, a.withCredentials = this.withCredentials, a.pfx = this.pfx, a.key = this.key, a.passphrase = this.passphrase, a.cert = this.cert, a.ca = this.ca, a.ciphers = this.ciphers, a.rejectUnauthorized = this.rejectUnauthorized, a.requestTimeout = this.requestTimeout, a.extraHeaders = this.extraHeaders, new l(a);
        }, k.prototype.doWrite = function(a, b) {
            var m = 'string' != typeof a && void 0 !== a,
                n = this.request({
                    method: 'POST',
                    data: a,
                    isBinary: m
                }),
                o = this;
            n.on('success', b), n.on('error', function(a) {
                o.onError('xhr post error', a);
            }), this.sendXhr = n;
        }, k.prototype.doPoll = function() {
            h('xhr poll');
            var m = this.request(),
                n = this;
            m.on('data', function(m) {
                n.onData(m);
            }), m.on('error', function(m) {
                n.onError('xhr poll error', m);
            }), this.pollXhr = m;
        }, f(l.prototype), l.prototype.create = function() {
            var m = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR
            };
            m.pfx = this.pfx, m.key = this.key, m.passphrase = this.passphrase, m.cert = this.cert, m.ca = this.ca, m.ciphers = this.ciphers, m.rejectUnauthorized = this.rejectUnauthorized;
            var n = this.xhr = new d(m),
                o = this;
            try {
                h('xhr open %s: %s', this.method, this.uri), n.open(this.method, this.uri, this.async);
                try {
                    if (this.extraHeaders)
                        for (var p in (n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0), this.extraHeaders))
                            this.extraHeaders.hasOwnProperty(p) && n.setRequestHeader(p, this.extraHeaders[p]);
                } catch (m) {}
                if ('POST' === this.method)
                    try {
                        this.isBinary ? n.setRequestHeader('Content-type', 'application/octet-stream') : n.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
                    } catch (m) {}
                try {
                    n.setRequestHeader('Accept', '*/*');
                } catch (m) {}
                'withCredentials' in n && (n.withCredentials = this.withCredentials), this.requestTimeout && (n.timeout = this.requestTimeout), this.hasXDR() ? (n.onload = function() {
                    o.onLoad();
                }, n.onerror = function() {
                    o.onError(n.responseText);
                }) : n.onreadystatechange = function() {
                    if (2 === n.readyState)
                        try {
                            var p = n.getResponseHeader('Content-Type');
                            (o.supportsBinary && 'application/octet-stream' === p || 'application/octet-stream; charset=UTF-8' === p) && (n.responseType = 'arraybuffer');
                        } catch (m) {}
                    4 === n.readyState && (200 === n.status || 1223 === n.status ? o.onLoad() : setTimeout(function() {
                        o.onError('number' == typeof n.status ? n.status : 0);
                    }, 0));
                }, h('xhr data %s', this.data), n.send(this.data);
            } catch (m) {
                return void setTimeout(function() {
                    o.onError(m);
                }, 0);
            }
            'undefined' != typeof document && (this.index = l.requestsCount++, l.requests[this.index] = this);
        }, l.prototype.onSuccess = function() {
            this.emit('success'), this.cleanup();
        }, l.prototype.onData = function(a) {
            this.emit('data', a), this.onSuccess();
        }, l.prototype.onError = function(a) {
            this.emit('error', a), this.cleanup(!0);
        }, l.prototype.cleanup = function(a) {
            if (void 0 !== this.xhr && null !== this.xhr) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = j : this.xhr.onreadystatechange = j, a)
                    try {
                        this.xhr.abort();
                    } catch (a) {}
                'undefined' != typeof document && delete l.requests[this.index], this.xhr = null;
            }
        }, l.prototype.onLoad = function() {
            var m;
            try {
                var n;
                try {
                    n = this.xhr.getResponseHeader('Content-Type');
                } catch (m) {}
                m = ('application/octet-stream' === n || 'application/octet-stream; charset=UTF-8' === n) && this.xhr.response || this.xhr.responseText;
            } catch (m) {
                this.onError(m);
            }
            null != m && this.onData(m);
        }, l.prototype.hasXDR = function() {
            return 'undefined' != typeof XDomainRequest && !this.xs && this.enablesXDR;
        }, l.prototype.abort = function() {
            this.cleanup();
        }, l.requestsCount = 0, l.requests = {}, 'undefined' != typeof document)
        if ('function' == typeof attachEvent)
            attachEvent('onunload', m);
        else if ('function' == typeof addEventListener) {
        addEventListener('onpagehide' in i ? 'pagehide' : 'unload', m, !1);
    }

    function m() {
        for (var n in l.requests)
            l.requests.hasOwnProperty(n) && l.requests[n].abort();
    }
}), c.register('TIIW7', function(a, b) {
    var d = c('ay85Z'),
        e = c('9JQiJ'),
        f = c('JK2gz'),
        g = c('GdJgl'),
        h = c('1cVVr'),
        i = c('7zKDz')('engine.io-client:polling');
    a.exports = k;
    var j = null != new(c('a4RXU'))({
        xdomain: !1
    }).responseType;

    function k(a) {
        var l = a && a.forceBase64;
        j && !l || (this.supportsBinary = !1), d.call(this, a);
    }
    g(k, d), k.prototype.name = 'polling', k.prototype.doOpen = function() {
        this.poll();
    }, k.prototype.pause = function(a) {
        var l = this;

        function m() {
            i('paused'), l.readyState = 'paused', a();
        }
        if (this.readyState = 'pausing', this.polling || !this.writable) {
            var n = 0;
            this.polling && (i('we are currently polling - waiting to pause'), n++, this.once('pollComplete', function() {
                i('pre-pause polling complete'), --n || m();
            })), this.writable || (i('we are currently writing - waiting to pause'), n++, this.once('drain', function() {
                i('pre-pause writing complete'), --n || m();
            }));
        } else
            m();
    }, k.prototype.poll = function() {
        i('polling'), this.polling = !0, this.doPoll(), this.emit('poll');
    }, k.prototype.onData = function(a) {
        var l = this;
        i('polling got data %s', a);
        f.decodePayload(a, this.socket.binaryType, function(a, c, d) {
            if ('opening' === l.readyState && l.onOpen(), 'close' === a.type)
                return l.onClose(), !1;
            l.onPacket(a);
        }), 'closed' !== this.readyState && (this.polling = !1, this.emit('pollComplete'), 'open' === this.readyState ? this.poll() : i('ignoring poll - transport state "%s"', this.readyState));
    }, k.prototype.doClose = function() {
        var l = this;

        function m() {
            i('writing close packet'), l.write([{
                type: 'close'
            }]);
        }
        'open' === this.readyState ? (i('transport open - closing'), m()) : (i('transport not open - deferring close'), this.once('open', m));
    }, k.prototype.write = function(a) {
        var l = this;
        this.writable = !1;
        var m = function() {
            l.writable = !0, l.emit('drain');
        };
        f.encodePayload(a, this.supportsBinary, function(a) {
            l.doWrite(a, m);
        });
    }, k.prototype.uri = function() {
        var l = this.query || {},
            m = this.secure ? 'https' : 'http',
            n = '';
        return !1 !== this.timestampRequests && (l[this.timestampParam] = h()), this.supportsBinary || l.sid || (l.b64 = 1), l = e.encode(l), this.port && ('https' === m && 443 !== Number(this.port) || 'http' === m && 80 !== Number(this.port)) && (n = ':' + this.port), l.length && (l = '?' + l), m + '://' + (-1 !== this.hostname.indexOf(':') ? '[' + this.hostname + ']' : this.hostname) + n + this.path + l;
    };
}), c.register('ay85Z', function(a, b) {
    var d = c('JK2gz'),
        e = c('91dgJ');

    function f(a) {
        this.path = a.path, this.hostname = a.hostname, this.port = a.port, this.secure = a.secure, this.query = a.query, this.timestampParam = a.timestampParam, this.timestampRequests = a.timestampRequests, this.readyState = '', this.agent = a.agent || !1, this.socket = a.socket, this.enablesXDR = a.enablesXDR, this.withCredentials = a.withCredentials, this.pfx = a.pfx, this.key = a.key, this.passphrase = a.passphrase, this.cert = a.cert, this.ca = a.ca, this.ciphers = a.ciphers, this.rejectUnauthorized = a.rejectUnauthorized, this.forceNode = a.forceNode, this.isReactNative = a.isReactNative, this.extraHeaders = a.extraHeaders, this.localAddress = a.localAddress;
    }
    a.exports = f, e(f.prototype), f.prototype.onError = function(a, b) {
        var g = new Error(a);
        return g.type = 'TransportError', g.description = b, this.emit('error', g), this;
    }, f.prototype.open = function() {
        return 'closed' !== this.readyState && '' !== this.readyState || (this.readyState = 'opening', this.doOpen()), this;
    }, f.prototype.close = function() {
        return 'opening' !== this.readyState && 'open' !== this.readyState || (this.doClose(), this.onClose()), this;
    }, f.prototype.send = function(a) {
        if ('open' !== this.readyState)
            throw new Error('Transport not open');
        this.write(a);
    }, f.prototype.onOpen = function() {
        this.readyState = 'open', this.writable = !0, this.emit('open');
    }, f.prototype.onData = function(a) {
        var g = d.decodePacket(a, this.socket.binaryType);
        this.onPacket(g);
    }, f.prototype.onPacket = function(a) {
        this.emit('packet', a);
    }, f.prototype.onClose = function() {
        this.readyState = 'closed', this.emit('close');
    };
}), c.register('JK2gz', function(b, C) {
    var d, e, f, g, h, i, j, k, l, m, n;
    a(b.exports, 'protocol', function() {
        return d;
    }, function(a) {
        return d = a;
    }), a(b.exports, 'packets', function() {
        return e;
    }, function(a) {
        return e = a;
    }), a(b.exports, 'encodePacket', function() {
        return f;
    }, function(a) {
        return f = a;
    }), a(b.exports, 'encodeBase64Packet', function() {
        return g;
    }, function(a) {
        return g = a;
    }), a(b.exports, 'decodePacket', function() {
        return h;
    }, function(a) {
        return h = a;
    }), a(b.exports, 'decodeBase64Packet', function() {
        return i;
    }, function(a) {
        return i = a;
    }), a(b.exports, 'encodePayload', function() {
        return j;
    }, function(a) {
        return j = a;
    }), a(b.exports, 'encodePayloadAsBlob', function() {
        return m;
    }, function(a) {
        return m = a;
    }), a(b.exports, 'encodePayloadAsArrayBuffer', function() {
        return l;
    }, function(a) {
        return l = a;
    }), a(b.exports, 'decodePayload', function() {
        return k;
    }, function(a) {
        return k = a;
    }), a(b.exports, 'decodePayloadAsBinary', function() {
        return n;
    }, function(a) {
        return n = a;
    });
    var o, p = c('WtDaP'),
        q = c('UM3pm'),
        r = c('F5/h5'),
        s = c('adn8Q'),
        t = c('yeDml');
    'undefined' != typeof ArrayBuffer && (o = c('zgIOK'));
    var u = 'undefined' != typeof navigator && /Android/i.test(navigator.userAgent),
        v = 'undefined' != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
        w = u || v;
    d = 3;
    var x = e = {
            open: 0,
            close: 1,
            ping: 2,
            pong: 3,
            message: 4,
            upgrade: 5,
            noop: 6
        },
        y = p(x),
        z = {
            type: 'error',
            data: 'parser error'
        },
        A = c('FY2wU');

    function B(a, b, c) {
        for (var C = new Array(a.length), D = s(a.length, c), E = function(a, c, D) {
                b(c, function(b, c) {
                    C[a] = c, D(b, C);
                });
            }, F = 0; F < a.length; F++)
            E(F, a[F], D);
    }
    f = function(a, b, c, D) {
        'function' == typeof b && (D = b, b = !1), 'function' == typeof c && (D = c, c = null);
        var C = void 0 === a.data ? void 0 : a.data.buffer || a.data;
        if ('undefined' != typeof ArrayBuffer && C instanceof ArrayBuffer)
            return function(a, b, c) {
                if (!b)
                    return g(a, c);
                var D = a.data,
                    E = new Uint8Array(D),
                    F = new Uint8Array(1 + D.byteLength);
                F[0] = x[a.type];
                for (var G = 0; G < E.length; G++)
                    F[G + 1] = E[G];
                return c(F.buffer);
            }(a, b, D);
        if (void 0 !== A && C instanceof A)
            return function(a, b, c) {
                if (!b)
                    return g(a, c);
                if (w)
                    return function(a, b, c) {
                        if (!b)
                            return g(a, c);
                        var D = new FileReader();
                        return D.onload = function() {
                            f({
                                type: a.type,
                                data: D.result
                            }, b, !0, c);
                        }, D.readAsArrayBuffer(a.data);
                    }(a, b, c);
                var D = new Uint8Array(1);
                D[0] = x[a.type];
                var E = new A([
                    D.buffer,
                    a.data
                ]);
                return c(E);
            }(a, b, D);
        if (C && C.base64)
            return function(a, b) {
                var D = 'b' + e[a.type] + a.data.data;
                return b(D);
            }(a, D);
        var D = x[a.type];
        return void 0 !== a.data && (D += c ? t.encode(String(a.data), {
            strict: !1
        }) : String(a.data)), D('' + D);
    }, g = function(a, b) {
        var C, D = 'b' + e[a.type];
        if (void 0 !== A && a.data instanceof A) {
            var E = new FileReader();
            return E.onload = function() {
                var F = E.result.split(',')[1];
                b(D + F);
            }, E.readAsDataURL(a.data);
        }
        try {
            C = String.fromCharCode.apply(null, new Uint8Array(a.data));
        } catch (b) {
            for (var E = new Uint8Array(a.data), F = new Array(E.length), G = 0; G < E.length; G++)
                F[G] = E[G];
            C = String.fromCharCode.apply(null, F);
        }
        return D += btoa(C), b(D);
    }, h = function(a, b, c) {
        if (void 0 === a)
            return z;
        if ('string' == typeof a) {
            if ('b' === a.charAt(0))
                return i(a.substr(1), b);
            if (c && !1 === (a = function(a) {
                    try {
                        a = t.decode(a, {
                            strict: !1
                        });
                    } catch (a) {
                        return !1;
                    }
                    return a;
                }(a)))
                return z;
            var C = a.charAt(0);
            return Number(C) == C && y[C] ? a.length > 1 ? {
                type: y[C],
                data: a.substring(1)
            } : {
                type: y[C]
            } : z;
        }
        D = new Uint8Array(a)[0];
        var C = r(a, 1);
        return A && 'blob' === b && (C = new A([C])), {
            type: y[D],
            data: C
        };
    }, i = function(a, b) {
        var C = y[a.charAt(0)];
        if (!o)
            return {
                type: C,
                data: {
                    base64: !0,
                    data: a.substr(1)
                }
            };
        var D = o.decode(a.substr(1));
        return 'blob' === b && A && (D = new A([D])), {
            type: C,
            data: D
        };
    }, j = function(a, b, c) {
        'function' == typeof b && (c = b, b = null);
        var C = q(a);
        if (b && C)
            return A && !w ? m(a, c) : l(a, c);
        if (!a.length)
            return c('0:');
        B(a, function(a, c) {
            f(a, !!C && b, !1, function(a) {
                c(null, function(a) {
                    return a.length + ':' + a;
                }(a));
            });
        }, function(a, b) {
            return c(b.join(''));
        });
    }, k = function(a, b, c) {
        if ('string' != typeof a)
            return n(a, b, c);
        var C;
        if ('function' == typeof b && (c = b, b = null), '' === a)
            return c(z, 0, 1);
        for (var D, E, F = '', G = 0, H = a.length; G < H; G++) {
            var I = a.charAt(G);
            if (':' === I) {
                if ('' === F || F != (D = Number(F)))
                    return c(z, 0, 1);
                if (F != (E = a.substr(G + 1, D)).length)
                    return c(z, 0, 1);
                if (E.length) {
                    if (C = h(E, b, !1), z.type === C.type && z.data === C.data)
                        return c(z, 0, 1);
                    if (!1 === c(C, G + D, H))
                        return;
                }
                G += D, F = '';
            } else
                F += I;
        }
        return '' !== F ? c(z, 0, 1) : void 0;
    }, l = function(a, b) {
        if (!a.length)
            return b(new ArrayBuffer(0));
        B(a, function(a, b) {
            f(a, !0, !0, function(a) {
                return b(null, a);
            });
        }, function(a, c) {
            var C = c.reduce(function(a, b) {
                    var D;
                    return a + (D = 'string' == typeof b ? b.length : b.byteLength).toString().length + D + 2;
                }, 0),
                D = new Uint8Array(C),
                E = 0;
            return c.forEach(function(a) {
                var F = 'string' == typeof a,
                    G = H;
                if (F) {
                    for (var I = new Uint8Array(H.length), J = 0; J < H.length; J++)
                        I[J] = H.charCodeAt(J);
                    G = I.buffer;
                }
                D[E++] = F ? 0 : 1;
                var I = G.byteLength.toString();
                for (f = 0; f < I.length; f++)
                    D[E++] = parseInt(I[f]);
                D[E++] = 255;
                for (C = new Uint8Array(G), f = 0; f < C.length; f++)
                    D[E++] = C[f];
            }), b(D.buffer);
        });
    }, m = function(a, b) {
        B(a, function(a, b) {
            f(a, !0, !0, function(a) {
                var C = new Uint8Array(1);
                if (C[0] = 1, 'string' == typeof a) {
                    for (var D = new Uint8Array(a.length), E = 0; E < a.length; E++)
                        D[E] = a.charCodeAt(E);
                    a = D.buffer, C[0] = 0;
                }
                var D = (a instanceof ArrayBuffer ? a.byteLength : a.size).toString(),
                    E = new Uint8Array(D.length + 1);
                for (d = 0; d < D.length; d++)
                    E[d] = parseInt(D[d]);
                if (E[D.length] = 255, A) {
                    var F = new A([
                        C.buffer,
                        E.buffer,
                        a
                    ]);
                    b(null, F);
                }
            });
        }, function(a, c) {
            return b(new A(c));
        });
    }, n = function(a, b, c) {
        'function' == typeof b && (c = b, b = null);
        for (var C = D, E = []; C.byteLength > 0;) {
            for (var F = new Uint8Array(C), G = 0 === F[0], H = '', I = 1; 255 !== F[I]; I++) {
                if (H.length > 310)
                    return c(z, 0, 1);
                H += F[I];
            }
            C = r(C, 2 + H.length), H = parseInt(H);
            var J = r(C, 0, H);
            if (G)
                try {
                    J = String.fromCharCode.apply(null, new Uint8Array(J));
                } catch (D) {
                    var K = new Uint8Array(J);
                    J = '';
                    for (I = 0; I < K.length; I++)
                        J += String.fromCharCode(K[I]);
                }
            E.push(J), C = r(C, H);
        }
        var F = E.length;
        E.forEach(function(D, C) {
            c(h(D, b, !0), C, F);
        });
    };
}), c.register('WtDaP', function(a, b) {
    a.exports = Object.keys || function(a) {
        var d = [],
            e = Object.prototype.hasOwnProperty;
        for (var f in a)
            e.call(a, f) && d.push(f);
        return d;
    };
}), c.register('UM3pm', function(a, b) {
    var d = c('6319O').Buffer,
        e = c('HQvBv'),
        f = Object.prototype.toString,
        g = 'function' == typeof Blob || 'undefined' != typeof Blob && '[object BlobConstructor]' === f.call(Blob),
        h = 'function' == typeof File || 'undefined' != typeof File && '[object FileConstructor]' === f.call(File);
    a.exports = function a(b) {
        if (!b || 'object' != typeof b)
            return !1;
        if (e(b)) {
            for (var i = 0, j = b.length; i < j; i++)
                if (a(b[i]))
                    return !0;
            return !1;
        }
        if ('function' == typeof d && d.isBuffer && d.isBuffer(b) || 'function' == typeof ArrayBuffer && b instanceof ArrayBuffer || g && b instanceof Blob || h && b instanceof File)
            return !0;
        if (b.toJSON && 'function' == typeof b.toJSON && 1 === arguments.length)
            return a(b.toJSON(), !0);
        for (var i in b)
            if (Object.prototype.hasOwnProperty.call(b, i) && a(b[i]))
                return !0;
        return !1;
    };
}), c.register('HQvBv', function(a, b) {
    var d = {}.toString;
    a.exports = Array.isArray || function(a) {
        return '[object Array]' == d.call(a);
    };
}), c.register('F5/h5', function(a, b) {
    a.exports = function(a, b, c) {
        var d = a.byteLength;
        if (b = b || 0, c = c || d, a.slice)
            return a.slice(b, c);
        if (b < 0 && (b += d), c < 0 && (c += d), c > d && (c = d), b >= d || b >= c || 0 === d)
            return new ArrayBuffer(0);
        for (var e = new Uint8Array(a), f = new Uint8Array(c - b), g = h, i = 0; g < c; g++, i++)
            f[i] = e[g];
        return f.buffer;
    };
}), c.register('adn8Q', function(a, b) {
    function d() {}
    a.exports = function(a, b, e) {
        var e = !1;
        return e = e || d, f.count = a, 0 === a ? b() : f;

        function f(a, d) {
            if (f.count <= 0)
                throw new Error('after called too many times');
            --f.count, a ? (e = !0, b(a), b = e) : 0 !== f.count || e || b(null, d);
        }
    };
}), c.register('yeDml', function(a, b) {
    var d, e, f, g = String.fromCharCode;

    function h(a) {
        for (var i, j, k = [], l = 0, m = a.length; l < m;)
            (i = a.charCodeAt(l++)) >= 55296 && i <= 56319 && l < m ? 56320 == (64512 & (j = a.charCodeAt(l++))) ? k.push(((1023 & i) << 10) + (1023 & j) + 65536) : (k.push(i), l--) : k.push(i);
        return k;
    }

    function i(a, b) {
        if (a >= 55296 && a <= 57343) {
            if (b)
                throw Error('Lone surrogate U+' + a.toString(16).toUpperCase() + ' is not a scalar value');
            return !1;
        }
        return !0;
    }

    function j(a, b) {
        return g(a >> b & 63 | 128);
    }

    function k(a, b) {
        if (0 == (4294967168 & a))
            return g(a);
        var l = '';
        return 0 == (4294965248 & a) ? l = g(a >> 6 & 31 | 192) : 0 == (4294901760 & a) ? (i(a, b) || (a = 65533), l = g(a >> 12 & 15 | 224), l += j(a, 6)) : 0 == (4292870144 & a) && (l = g(a >> 18 & 7 | 240), l += j(a, 12), l += j(a, 6)), l += g(63 & a | 128);
    }

    function l() {
        if (f >= e)
            throw Error('Invalid byte index');
        var m = 255 & d[f];
        if (f++, 128 == (192 & m))
            return 63 & m;
        throw Error('Invalid continuation byte');
    }

    function m(a) {
        var n, o;
        if (f > e)
            throw Error('Invalid byte index');
        if (f == e)
            return !1;
        if (n = 255 & d[f], f++, 0 == (128 & n))
            return n;
        if (192 == (224 & n)) {
            if ((o = (31 & n) << 6 | l()) >= 128)
                return o;
            throw Error('Invalid continuation byte');
        }
        if (224 == (240 & n)) {
            if ((o = (15 & n) << 12 | l() << 6 | l()) >= 2048)
                return i(o, a) ? o : 65533;
            throw Error('Invalid continuation byte');
        }
        if (240 == (248 & n) && (o = (7 & n) << 18 | l() << 12 | l() << 6 | l()) >= 65536 && o <= 1114111)
            return o;
        throw Error('Invalid UTF-8 detected');
    }
    a.exports = {
        version: '2.1.2',
        encode: function(a, b) {
            for (var n = !1 !== (b = b || {}).strict, o = h(a), p = o.length, q = -1, r = ''; ++q < p;)
                r += k(o[q], n);
            return r;
        },
        decode: function(a, b) {
            var n = !1 !== (b = b || {}).strict;
            d = h(a), e = d.length, f = 0;
            for (var o, p = []; !1 !== (o = m(n));)
                p.push(o);
            return function(a) {
                for (var q, r = a.length, s = -1, t = ''; ++s < r;)
                    (q = a[s]) > 65535 && (t += g((q -= 65536) >>> 10 & 1023 | 55296), q = 56320 | 1023 & q), t += g(q);
                return t;
            }(p);
        }
    };
}), c.register('zgIOK', function(b, c) {
    var d, e, f;
    a(b.exports, 'encode', function() {
        return d;
    }, function(a) {
        return d = a;
    }), a(b.exports, 'decode', function() {
        return e;
    }, function(a) {
        return e = a;
    }), f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', d = function(a) {
        var g, h = new Uint8Array(a),
            i = h.length,
            j = '';
        for (g = 0; g < i; g += 3)
            j += f[h[g] >> 2], j += f[(3 & h[g]) << 4 | h[g + 1] >> 4], j += f[(15 & h[g + 1]) << 2 | h[g + 2] >> 6], j += f[63 & h[g + 2]];
        return i % 3 == 2 ? j = j.substring(0, j.length - 1) + '=' : i % 3 == 1 && (j = j.substring(0, j.length - 2) + '=='), j;
    }, e = function(a) {
        var g, h, i, j, k, l = 0.75 * a.length,
            m = a.length,
            n = 0;
        '=' === a[a.length - 1] && (l--, '=' === a[a.length - 2] && l--);
        var o = new ArrayBuffer(l),
            p = new Uint8Array(o);
        for (g = 0; g < m; g += 4)
            h = f.indexOf(a[g]), i = f.indexOf(a[g + 1]), j = f.indexOf(a[g + 2]), k = f.indexOf(a[g + 3]), p[n++] = h << 2 | i >> 4, p[n++] = (15 & i) << 4 | j >> 2, p[n++] = (3 & j) << 6 | 63 & k;
        return o;
    };
}), c.register('FY2wU', function(a, b) {
    var d = void 0 !== d ? d : 'undefined' != typeof WebKitBlobBuilder ? WebKitBlobBuilder : 'undefined' != typeof MSBlobBuilder ? MSBlobBuilder : 'undefined' != typeof MozBlobBuilder && MozBlobBuilder,
        e = function() {
            try {
                return 2 === new Blob(['hi']).size;
            } catch (a) {
                return !1;
            }
        }(),
        f = e && function() {
            try {
                return 2 === new Blob([new Uint8Array([
                    1,
                    2
                ])]).size;
            } catch (a) {
                return !1;
            }
        }(),
        g = d && d.prototype.append && d.prototype.getBlob;

    function h(a) {
        return a.map(function(a) {
            if (a.buffer instanceof ArrayBuffer) {
                var i = a.buffer;
                if (a.byteLength !== i.byteLength) {
                    var j = new Uint8Array(a.byteLength);
                    j.set(new Uint8Array(i, a.byteOffset, a.byteLength)), i = j.buffer;
                }
                return i;
            }
            return a;
        });
    }

    function i(a, b) {
        b = b || {};
        var j = new d();
        return h(a).forEach(function(a) {
            j.append(a);
        }), b.type ? j.getBlob(b.type) : j.getBlob();
    }

    function j(a, b) {
        return new Blob(h(a), b || {});
    }
    'undefined' != typeof Blob && (i.prototype = Blob.prototype, j.prototype = Blob.prototype), a.exports = e ? f ? Blob : j : g ? i : void 0;
}), c.register('9JQiJ', function(b, c) {
    var d, e;
    a(b.exports, 'encode', function() {
        return d;
    }, function(a) {
        return d = a;
    }), a(b.exports, 'decode', function() {
        return e;
    }, function(a) {
        return e = a;
    }), d = function(a) {
        var f = '';
        for (var g in a)
            a.hasOwnProperty(g) && (f.length && (f += '&'), f += encodeURIComponent(g) + '=' + encodeURIComponent(a[g]));
        return f;
    }, e = function(a) {
        for (var f = {}, g = a.split('&'), h = 0, i = g.length; h < i; h++) {
            var j = g[h].split('=');
            f[decodeURIComponent(j[0])] = decodeURIComponent(j[1]);
        }
        return f;
    };
}), c.register('GdJgl', function(a, b) {
    a.exports = function(a, b) {
        var d = function() {};
        d.prototype = b.prototype, a.prototype = new d(), a.prototype.constructor = a;
    };
}), c.register('1cVVr', function(a, b) {
    var d, e = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
        f = {},
        g = 0,
        h = 0;

    function i(a) {
        var j = '';
        do {
            j = e[a % 64] + j, a = Math.floor(a / 64);
        } while (a > 0);
        return j;
    }

    function j() {
        var k = i(+new Date());
        return k !== d ? (g = 0, d = k) : k + '.' + i(g++);
    }
    for (; h < 64; h++)
        f[e[h]] = h;
    j.encode = i, j.decode = function(a) {
        var k = 0;
        for (h = 0; h < a.length; h++)
            k = 64 * k + f[a.charAt(h)];
        return k;
    }, a.exports = j;
}), c.register('7zKDz', function(a, b) {
    var d = c('wpWTd');

    function e() {
        var f;
        try {
            f = b.storage.debug;
        } catch (f) {}
        return !f && void 0 !== d && 'env' in d && (f = void 0), f;
    }
    (b = a.exports = c('eTqlp')).log = function() {
        return 'object' == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }, b.formatArgs = function(a) {
        var f = this.useColors;
        if (a[0] = (f ? '%c' : '') + this.namespace + (f ? ' %c' : ' ') + a[0] + (f ? '%c ' : ' ') + '+' + b.humanize(this.diff), !f)
            return;
        var g = 'color: ' + this.color;
        a.splice(1, 0, g, 'color: inherit');
        var h = 0,
            i = 0;
        a[0].replace(/%[a-zA-Z%]/g, function(a) {
            '%%' !== a && (h++, '%c' === a && (i = h));
        }), a.splice(i, 0, g);
    }, b.save = function(a) {
        try {
            null == a ? b.storage.removeItem('debug') : b.storage.debug = a;
        } catch (a) {}
    }, b.load = e, b.useColors = function() {
        return !('undefined' == typeof window || !window.process || 'renderer' !== window.process.type) || ('undefined' == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ('undefined' != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || 'undefined' != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }, b.storage = 'undefined' != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
        try {
            return window.localStorage;
        } catch (a) {}
    }(), b.colors = [
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
    ], b.formatters.j = function(a) {
        try {
            return JSON.stringify(a);
        } catch (a) {
            return '[UnexpectedJSONParseError]: ' + a.message;
        }
    }, b.enable(e());
}), c.register('eTqlp', function(a, b) {
    function d(a) {
        var e;

        function f() {
            if (f.enabled) {
                var g = h,
                    i = +new Date(),
                    j = i - (e || i);
                g.diff = j, g.prev = e, g.curr = i, e = i;
                for (var k = new Array(arguments.length), l = 0; l < k.length; l++)
                    k[l] = arguments[l];
                k[0] = b.coerce(k[0]), 'string' != typeof k[0] && k.unshift('%O');
                var m = 0;
                k[0] = k[0].replace(/%([a-zA-Z%])/g, function(e, h) {
                    if ('%%' === e)
                        return e;
                    m++;
                    var n = b.formatters[h];
                    if ('function' == typeof n) {
                        var o = k[m];
                        e = n.call(g, o), k.splice(m, 1), m--;
                    }
                    return e;
                }), b.formatArgs.call(g, k);
                var n = h.log || b.log || console.log.bind(console);
                n.apply(g, k);
            }
        }
        return f.namespace = a, f.enabled = b.enabled(a), f.useColors = b.useColors(), f.color = function(a) {
            var g, h = 0;
            for (g in a)
                h = (h << 5) - h + a.charCodeAt(g), h |= 0;
            return b.colors[Math.abs(h) % b.colors.length];
        }(a), f.destroy = e, 'function' == typeof b.init && b.init(f), b.instances.push(f), f;
    }

    function e() {
        var f = b.instances.indexOf(this);
        return -1 !== f && (b.instances.splice(f, 1), !0);
    }
    (b = a.exports = d.debug = d.default = d).coerce = function(a) {
        return a instanceof Error ? a.stack || a.message : a;
    }, b.disable = function() {
        b.enable('');
    }, b.enable = function(a) {
        var f;
        b.save(a), b.names = [], b.skips = [];
        var g = ('string' == typeof a ? a : '').split(/[\s,]+/),
            h = g.length;
        for (f = 0; f < h; f++)
            g[f] && ('-' === (a = g[f].replace(/\*/g, '.*?'))[0] ? b.skips.push(new RegExp('^' + a.substr(1) + '$')) : b.names.push(new RegExp('^' + a + '$')));
        for (f = 0; f < b.instances.length; f++) {
            var i = b.instances[f];
            i.enabled = b.enabled(i.namespace);
        }
    }, b.enabled = function(a) {
        if ('*' === a[a.length - 1])
            return !0;
        var f, g;
        for (f = 0, g = b.skips.length; f < g; f++)
            if (b.skips[f].test(a))
                return !1;
        for (f = 0, g = b.names.length; f < g; f++)
            if (b.names[f].test(a))
                return !0;
        return !1;
    }, b.humanize = c('aNXFZ'), b.instances = [], b.names = [], b.skips = [], b.formatters = {};
}), c.register('aNXFZ', function(a, b) {
    var d = 1000,
        e = 60000,
        f = 3600000,
        g = 86400000,
        h = 31557600000;

    function i(a, b, d) {
        if (!(a < b))
            return a < 1.5 * b ? Math.floor(a / b) + ' ' + d : Math.ceil(a / b) + ' ' + d + 's';
    }
    a.exports = function(a, b) {
        b = b || {};
        var j, k = typeof a;
        if ('string' === k && a.length > 0)
            return function(a) {
                if ((a = String(a)).length > 100)
                    return;
                var l = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(a);
                if (!l)
                    return;
                var m = parseFloat(l[1]);
                switch ((l[2] || 'ms').toLowerCase()) {
                    case 'years':
                    case 'year':
                    case 'yrs':
                    case 'yr':
                    case 'y':
                        return m * h;
                    case 'days':
                    case 'day':
                    case 'd':
                        return m * g;
                    case 'hours':
                    case 'hour':
                    case 'hrs':
                    case 'hr':
                    case 'h':
                        return m * f;
                    case 'minutes':
                    case 'minute':
                    case 'mins':
                    case 'min':
                    case 'm':
                        return m * e;
                    case 'seconds':
                    case 'second':
                    case 'secs':
                    case 'sec':
                    case 's':
                        return m * d;
                    case 'milliseconds':
                    case 'millisecond':
                    case 'msecs':
                    case 'msec':
                    case 'ms':
                        return m;
                    default:
                        return;
                }
            }(a);
        if ('number' === k && !1 === isNaN(a))
            return b.long ? i(j = a, g, 'day') || i(j, f, 'hour') || i(j, e, 'minute') || i(j, d, 'second') || j + ' ms' : function(a) {
                return a >= g ? Math.round(a / g) + 'd' : a >= f ? Math.round(a / f) + 'h' : a >= e ? Math.round(a / e) + 'm' : a >= d ? Math.round(a / d) + 's' : a + 'ms';
            }(a);
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(a));
    };
}), c.register('8D0Bh', function(a, b) {
    var d = c('TIIW7'),
        e = c('GdJgl'),
        f = c('NsDgQ');
    a.exports = k;
    var g, h = /\n/g,
        i = /\\n/g;

    function j() {}

    function k(a) {
        d.call(this, a), this.query = this.query || {}, g || (g = f.___eio = f.___eio || []), this.index = g.length;
        var l = this;
        g.push(function(a) {
            l.onData(a);
        }), this.query.j = this.index, 'function' == typeof addEventListener && addEventListener('beforeunload', function() {
            l.script && (l.script.onerror = j);
        }, !1);
    }
    e(k, d), k.prototype.supportsBinary = !1, k.prototype.doClose = function() {
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), d.prototype.doClose.call(this);
    }, k.prototype.doPoll = function() {
        var l = this,
            m = document.createElement('script');
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), m.async = !0, m.src = this.uri(), m.onerror = function(m) {
            l.onError('jsonp poll error', m);
        };
        var n = document.getElementsByTagName('script')[0];
        n ? n.parentNode.insertBefore(m, n) : (document.head || document.body).appendChild(m), this.script = m, 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
            var o = document.createElement('iframe');
            document.body.appendChild(o), document.body.removeChild(o);
        }, 100);
    }, k.prototype.doWrite = function(a, b) {
        var l = this;
        if (!this.form) {
            var m, n = document.createElement('form'),
                o = document.createElement('textarea'),
                p = this.iframeId = 'eio_iframe_' + this.index;
            n.className = 'socketio', n.style.position = 'absolute', n.style.top = '-1000px', n.style.left = '-1000px', n.target = p, n.method = 'POST', n.setAttribute('accept-charset', 'utf-8'), o.name = 'd', n.appendChild(o), document.body.appendChild(n), this.form = n, this.area = o;
        }

        function m() {
            k(), b();
        }

        function n() {
            if (l.iframe)
                try {
                    l.form.removeChild(l.iframe);
                } catch (a) {
                    l.onError('jsonp polling iframe removal error', a);
                }
            try {
                var o = '<iframe src="javascript:0" name="' + l.iframeId + '">';
                d = document.createElement(o);
            } catch (a) {
                (d = document.createElement('iframe')).name = l.iframeId, d.src = 'javascript:0';
            }
            d.id = l.iframeId, l.form.appendChild(d), l.iframe = d;
        }
        this.form.action = this.uri(), n(), a = a.replace(i, '\\\n'), this.area.value = a.replace(h, '\\n');
        try {
            this.form.submit();
        } catch (a) {}
        this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
            'complete' === l.iframe.readyState && m();
        } : this.iframe.onload = m;
    };
}), c.register('m803Q', function(a, b) {
    var d, e, f = c('6319O').Buffer,
        g = c('ay85Z'),
        h = c('JK2gz'),
        i = c('9JQiJ'),
        j = c('GdJgl'),
        k = c('1cVVr'),
        l = c('7zKDz')('engine.io-client:websocket');
    if ('undefined' != typeof WebSocket ? d = WebSocket : 'undefined' != typeof self && (d = self.WebSocket || self.MozWebSocket), 'undefined' == typeof window)
        try {
            e = c('zlrQu');
        } catch (a) {}
    var m = d || e;

    function n(a) {
        a && a.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = a.perMessageDeflate, this.usingBrowserWebSocket = d && !a.forceNode, this.protocols = a.protocols, this.usingBrowserWebSocket || (m = e), g.call(this, a);
    }
    a.exports = n, j(n, g), n.prototype.name = 'websocket', n.prototype.supportsBinary = !0, n.prototype.doOpen = function() {
        if (this.check()) {
            var o = this.uri(),
                p = this.protocols,
                q = {};
            this.isReactNative || (q.agent = this.agent, q.perMessageDeflate = this.perMessageDeflate, q.pfx = this.pfx, q.key = this.key, q.passphrase = this.passphrase, q.cert = this.cert, q.ca = this.ca, q.ciphers = this.ciphers, q.rejectUnauthorized = this.rejectUnauthorized), this.extraHeaders && (q.headers = this.extraHeaders), this.localAddress && (q.localAddress = this.localAddress);
            try {
                this.ws = this.usingBrowserWebSocket && !this.isReactNative ? p ? new m(o, p) : new m(o) : new m(o, p, q);
            } catch (o) {
                return this.emit('error', o);
            }
            void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = 'nodebuffer') : this.ws.binaryType = 'arraybuffer', this.addEventListeners();
        }
    }, n.prototype.addEventListeners = function() {
        var o = this;
        this.ws.onopen = function() {
            o.onOpen();
        }, this.ws.onclose = function() {
            o.onClose();
        }, this.ws.onmessage = function(b) {
            o.onData(b.data);
        }, this.ws.onerror = function(b) {
            o.onError('websocket error', b);
        };
    }, n.prototype.write = function(a) {
        var o = this;
        this.writable = !1;
        for (var p = a.length, q = 0, r = s; q < r; q++)
            ! function(a) {
                h.encodePacket(a, o.supportsBinary, function(q) {
                    if (!o.usingBrowserWebSocket) {
                        var t = {};
                        if (a.options && (t.compress = a.options.compress), o.perMessageDeflate)
                            ('string' == typeof q ? f.byteLength(q) : q.length) < o.perMessageDeflate.threshold && (t.compress = !1);
                    }
                    try {
                        o.usingBrowserWebSocket ? o.ws.send(q) : o.ws.send(q, t);
                    } catch (a) {
                        l('websocket closed before onclose event');
                    }
                    --s || g();
                });
            }(a[q]);

        function t() {
            o.emit('flush'), setTimeout(function() {
                o.writable = !0, o.emit('drain');
            }, 0);
        }
    }, n.prototype.onClose = function() {
        g.prototype.onClose.call(this);
    }, n.prototype.doClose = function() {
        void 0 !== this.ws && this.ws.close();
    }, n.prototype.uri = function() {
        var o = this.query || {},
            p = this.secure ? 'wss' : 'ws',
            q = '';
        return this.port && ('wss' === p && 443 !== Number(this.port) || 'ws' === p && 80 !== Number(this.port)) && (q = ':' + this.port), this.timestampRequests && (o[this.timestampParam] = k()), this.supportsBinary || (o.b64 = 1), (o = i.encode(o)).length && (o = '?' + o), p + '://' + (-1 !== this.hostname.indexOf(':') ? '[' + this.hostname + ']' : this.hostname) + q + this.path + o;
    }, n.prototype.check = function() {
        return !(!m || '__initialize' in m && this.name === n.prototype.name);
    };
}), c.register('8aSiE', function(a, b) {
    var d = [].indexOf;
    a.exports = function(a, b) {
        if (d)
            return a.indexOf(b);
        for (var e = 0; e < a.length; ++e)
            if (a[e] === b)
                return e;
        return -1;
    };
}), c.register('zzsfr', function(a, b) {
    var d = c('TbAI8'),
        e = c('91dgJ'),
        f = c('q2sv8'),
        g = c('UN9DH'),
        h = c('UnSF5'),
        i = c('wF/cK')('socket.io-client:socket'),
        j = c('9JQiJ'),
        k = c('UM3pm');
    a.exports = n;
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

    function n(a, b, c) {
        this.io = a, this.nsp = b, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, c && c.query && (this.query = c.query), this.io.autoConnect && this.open();
    }
    e(n.prototype), n.prototype.subEvents = function() {
        if (!this.subs) {
            var o = this.io;
            this.subs = [
                g(o, 'open', h(this, 'onopen')),
                g(o, 'packet', h(this, 'onpacket')),
                g(o, 'close', h(this, 'onclose'))
            ];
        }
    }, n.prototype.open = n.prototype.connect = function() {
        return this.connected || (this.subEvents(), this.io.reconnecting || this.io.open(), 'open' === this.io.readyState && this.onopen(), this.emit('connecting')), this;
    }, n.prototype.send = function() {
        var o = f(arguments);
        return o.unshift('message'), this.emit.apply(this, o), this;
    }, n.prototype.emit = function(a) {
        if (l.hasOwnProperty(a))
            return m.apply(this, arguments), this;
        var o = f(arguments),
            p = {
                type: (void 0 !== this.flags.binary ? this.flags.binary : k(o)) ? d.BINARY_EVENT : d.EVENT,
                data: o,
                options: {}
            };
        return p.options.compress = !this.flags || !1 !== this.flags.compress, 'function' == typeof o[o.length - 1] && (i('emitting packet with ack id %d', this.ids), this.acks[this.ids] = o.pop(), p.id = this.ids++), this.connected ? this.packet(p) : this.sendBuffer.push(p), this.flags = {}, this;
    }, n.prototype.packet = function(a) {
        a.nsp = this.nsp, this.io.packet(a);
    }, n.prototype.onopen = function() {
        if (i('transport is open - connecting'), '/' !== this.nsp)
            if (this.query) {
                var o = 'object' == typeof this.query ? j.encode(this.query) : this.query;
                i('sending connect packet with query %s', o), this.packet({
                    type: d.CONNECT,
                    query: o
                });
            } else
                this.packet({
                    type: d.CONNECT
                });
    }, n.prototype.onclose = function(a) {
        i('close (%s)', a), this.connected = !1, this.disconnected = !0, delete this.id, this.emit('disconnect', a);
    }, n.prototype.onpacket = function(a) {
        var o = a.nsp === this.nsp,
            p = a.type === d.ERROR && '/' === a.nsp;
        if (o || p)
            switch (a.type) {
                case d.CONNECT:
                    this.onconnect();
                    break;
                case d.EVENT:
                case d.BINARY_EVENT:
                    this.onevent(a);
                    break;
                case d.ACK:
                case d.BINARY_ACK:
                    this.onack(a);
                    break;
                case d.DISCONNECT:
                    this.ondisconnect();
                    break;
                case d.ERROR:
                    this.emit('error', a.data);
            }
    }, n.prototype.onevent = function(a) {
        var o = a.data || [];
        i('emitting event %j', o), null != a.id && (i('attaching ack callback to event'), o.push(this.ack(a.id))), this.connected ? m.apply(this, o) : this.receiveBuffer.push(o);
    }, n.prototype.ack = function(a) {
        var o = this,
            p = !1;
        return function() {
            if (!p) {
                p = !0;
                var q = f(arguments);
                i('sending ack %j', q), o.packet({
                    type: k(q) ? d.BINARY_ACK : d.ACK,
                    id: a,
                    data: q
                });
            }
        };
    }, n.prototype.onack = function(a) {
        var o = this.acks[a.id];
        'function' == typeof o ? (i('calling ack %s with %j', a.id, a.data), o.apply(this, a.data), delete this.acks[a.id]) : i('bad ack %s', a.id);
    }, n.prototype.onconnect = function() {
        this.connected = !0, this.disconnected = !1, this.emit('connect'), this.emitBuffered();
    }, n.prototype.emitBuffered = function() {
        var o;
        for (o = 0; o < this.receiveBuffer.length; o++)
            m.apply(this, this.receiveBuffer[o]);
        for (this.receiveBuffer = [], o = 0; o < this.sendBuffer.length; o++)
            this.packet(this.sendBuffer[o]);
        this.sendBuffer = [];
    }, n.prototype.ondisconnect = function() {
        i('server disconnect (%s)', this.nsp), this.destroy(), this.onclose('io server disconnect');
    }, n.prototype.destroy = function() {
        if (this.subs) {
            for (var o = 0; o < this.subs.length; o++)
                this.subs[o].destroy();
            this.subs = null;
        }
        this.io.destroy(this);
    }, n.prototype.close = n.prototype.disconnect = function() {
        return this.connected && (i('performing disconnect (%s)', this.nsp), this.packet({
            type: d.DISCONNECT
        })), this.destroy(), this.connected && this.onclose('io client disconnect'), this;
    }, n.prototype.compress = function(a) {
        return this.flags.compress = a, this;
    }, n.prototype.binary = function(a) {
        return this.flags.binary = a, this;
    };
}), c.register('q2sv8', function(a, b) {
    a.exports = function(a, b) {
        for (var d = [], e = (b = b || 0) || 0; e < a.length; e++)
            d[e - b] = a[e];
        return d;
    };
}), c.register('UN9DH', function(a, b) {
    a.exports = function(a, b, c) {
        return a.on(b, c), {
            destroy: function() {
                a.removeListener(b, c);
            }
        };
    };
}), c.register('UnSF5', function(a, b) {
    var d = [].slice;
    a.exports = function(a, b) {
        if ('string' == typeof b && (b = a[b]), 'function' != typeof b)
            throw new Error('bind() requires a function');
        var e = d.call(arguments, 2);
        return function() {
            return b.apply(a, e.concat(d.call(arguments)));
        };
    };
}), c.register('BNkim', function(a, b) {
    function d(a) {
        a = a || {}, this.ms = a.min || 100, this.max = a.max || 10000, this.factor = a.factor || 2, this.jitter = a.jitter > 0 && a.jitter <= 1 ? a.jitter : 0, this.attempts = 0;
    }
    a.exports = d, d.prototype.duration = function() {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var f = Math.random(),
                g = Math.floor(f * this.jitter * e);
            e = 0 == (1 & Math.floor(10 * f)) ? e - g : e + g;
        }
        return 0 | Math.min(e, this.max);
    }, d.prototype.reset = function() {
        this.attempts = 0;
    }, d.prototype.setMin = function(a) {
        this.ms = a;
    }, d.prototype.setMax = function(a) {
        this.max = a;
    }, d.prototype.setJitter = function(a) {
        this.jitter = a;
    };
}), c.register('Vix5N', function(b, e) {
    var d, e, f, g, h, i, j, k, l;
    a(b.exports, 'CONNECT', function() {
        return d;
    }, function(a) {
        return d = a;
    }), a(b.exports, 'DISCONNECT', function() {
        return e;
    }, function(a) {
        return e = a;
    }), a(b.exports, 'EVENT', function() {
        return f;
    }, function(a) {
        return f = a;
    }), a(b.exports, 'ACK', function() {
        return g;
    }, function(a) {
        return g = a;
    }), a(b.exports, 'ERROR', function() {
        return h;
    }, function(a) {
        return h = a;
    }), a(b.exports, 'BINARY_EVENT', function() {
        return i;
    }, function(a) {
        return i = a;
    }), a(b.exports, 'BINARY_ACK', function() {
        return j;
    }, function(a) {
        return j = a;
    }), a(b.exports, 'Encoder', function() {
        return k;
    }, function(a) {
        return k = a;
    }), a(b.exports, 'Decoder', function() {
        return l;
    }, function(a) {
        return l = a;
    });
    var m = c('mFoX/'),
        n = c('91dgJ');
    d = 0, e = 1, f = 2, g = 3, h = 4, i = 5, j = 6;
    var o = Number.isInteger || function(a) {
            return 'number' == typeof a && isFinite(a) && Math.floor(a) === a;
        },
        p = function(a) {
            return 'string' == typeof a;
        };

    function q() {}

    function r() {}
    q.prototype.encode = function(a, b) {
        switch (a.type) {
            case d:
            case e:
            case h:
                return b([JSON.stringify(a)]);
            default:
                return b([m.encode(a)]);
        }
    }, n(r.prototype), r.prototype.add = function(a) {
        'string' == typeof a ? this.parseJSON(a) : this.parseBinary(a);
    }, r.prototype.parseJSON = function(a) {
        var s = JSON.parse(a);
        this.checkPacket(s), this.emit('decoded', s);
    }, r.prototype.parseBinary = function(a) {
        var s = m.decode(a);
        this.checkPacket(s), this.emit('decoded', s);
    }, r.prototype.checkPacket = function(a) {
        if (!(o(a.type) && a.type >= d && a.type <= j))
            throw new Error('invalid packet type');
        if (!p(a.nsp))
            throw new Error('invalid namespace');
        if (! function(a) {
                switch (a.type) {
                    case d:
                    case e:
                        return void 0 === a.data;
                    case h:
                        return p(a.data);
                    default:
                        return Array.isArray(a.data);
                }
            }(a))
            throw new Error('invalid payload');
        if (!(void 0 === a.id || o(a.id)))
            throw new Error('invalid packet id');
    }, r.prototype.destroy = function() {}, k = q, l = r;
}), c.register('mFoX/', function(b, e) {
    var d, e;
    a(b.exports, 'encode', function() {
        return d;
    }, function(a) {
        return d = a;
    }), a(b.exports, 'decode', function() {
        return e;
    }, function(a) {
        return e = a;
    }), d = c('VCqro'), e = c('su+i5');
}), c.register('VCqro', function(a, b) {
    function d(a, b, d) {
        for (var e = 0, f = 0, g = d.length; f < g; f++)
            (e = d.charCodeAt(f)) < 128 ? a.setUint8(b++, e) : e < 2048 ? (a.setUint8(b++, 192 | e >> 6), a.setUint8(b++, 128 | 63 & e)) : e < 55296 || e >= 57344 ? (a.setUint8(b++, 224 | e >> 12), a.setUint8(b++, 128 | e >> 6 & 63), a.setUint8(b++, 128 | 63 & e)) : (f++, e = 65536 + ((1023 & e) << 10 | 1023 & d.charCodeAt(f)), a.setUint8(b++, 240 | e >> 18), a.setUint8(b++, 128 | e >> 12 & 63), a.setUint8(b++, 128 | e >> 6 & 63), a.setUint8(b++, 128 | 63 & e));
    }

    function e(a, b, d) {
        var f = typeof d,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0;
        if ('string' === f) {
            if (k = function(a) {
                    for (var m = 0, n = 0, o = 0, p = a.length; o < p; o++)
                        (m = a.charCodeAt(o)) < 128 ? n += 1 : m < 2048 ? n += 2 : m < 55296 || m >= 57344 ? n += 3 : (o++, n += 4);
                    return n;
                }(d), k < 32)
                a.push(160 | k), l = 1;
            else if (k < 256)
                a.push(217, k), l = 2;
            else if (k < 65536)
                a.push(218, k >> 8, k), l = 3;
            else {
                if (!(k < 4294967296))
                    throw new Error('String too long');
                a.push(219, k >> 24, k >> 16, k >> 8, k), l = 5;
            }
            return b.push({
                _str: d,
                _length: k,
                _offset: a.length
            }), l + k;
        }
        if ('number' === f)
            return Math.floor(d) === d && isFinite(d) ? d >= 0 ? d < 128 ? (a.push(d), 1) : d < 256 ? (a.push(204, d), 2) : d < 65536 ? (a.push(205, d >> 8, d), 3) : d < 4294967296 ? (a.push(206, d >> 24, d >> 16, d >> 8, d), 5) : (i = d / Math.pow(2, 32) >> 0, j = d >>> 0, a.push(207, i >> 24, i >> 16, i >> 8, i, j >> 24, j >> 16, j >> 8, j), 9) : d >= -32 ? (a.push(d), 1) : d >= -128 ? (a.push(208, d), 2) : d >= -32768 ? (a.push(209, d >> 8, d), 3) : d >= -2147483648 ? (a.push(210, d >> 24, d >> 16, d >> 8, d), 5) : (i = Math.floor(d / Math.pow(2, 32)), j = d >>> 0, a.push(211, i >> 24, i >> 16, i >> 8, i, j >> 24, j >> 16, j >> 8, j), 9) : (a.push(203), b.push({
                _float: d,
                _length: 8,
                _offset: a.length
            }), 9);
        if ('object' === f) {
            if (null === d)
                return a.push(192), 1;
            if (Array.isArray(d)) {
                if ((k = d.length) < 16)
                    a.push(144 | k), l = 1;
                else if (k < 65536)
                    a.push(220, k >> 8, k), l = 3;
                else {
                    if (!(k < 4294967296))
                        throw new Error('Array too large');
                    a.push(221, k >> 24, k >> 16, k >> 8, k), l = 5;
                }
                for (g = 0; g < k; g++)
                    l += e(a, b, d[g]);
                return l;
            }
            if (d instanceof Date) {
                var m = d.getTime();
                return i = Math.floor(m / Math.pow(2, 32)), j = m >>> 0, a.push(215, 0, i >> 24, i >> 16, i >> 8, i, j >> 24, j >> 16, j >> 8, j), 10;
            }
            if (d instanceof ArrayBuffer) {
                if ((k = d.byteLength) < 256)
                    a.push(196, k), l = 2;
                else if (k < 65536)
                    a.push(197, k >> 8, k), l = 3;
                else {
                    if (!(k < 4294967296))
                        throw new Error('Buffer too large');
                    a.push(198, k >> 24, k >> 16, k >> 8, k), l = 5;
                }
                return b.push({
                    _bin: d,
                    _length: k,
                    _offset: a.length
                }), l + k;
            }
            if ('function' == typeof d.toJSON)
                return e(a, b, d.toJSON());
            var m = [],
                n = '',
                o = Object.keys(d);
            for (g = 0, h = o.length; g < h; g++)
                'function' != typeof d[n = o[g]] && m.push(n);
            if ((k = m.length) < 16)
                a.push(128 | k), l = 1;
            else if (k < 65536)
                a.push(222, k >> 8, k), l = 3;
            else {
                if (!(k < 4294967296))
                    throw new Error('Object too large');
                a.push(223, k >> 24, k >> 16, k >> 8, k), l = 5;
            }
            for (g = 0; g < k; g++)
                l += e(a, b, n = m[g]), l += e(a, b, d[n]);
            return l;
        }
        if ('boolean' === f)
            return a.push(d ? 195 : 194), 1;
        if ('undefined' === f)
            return a.push(212, 0, 0), 3;
        throw new Error('Could not encode');
    }
    a.exports = function(a) {
        var f = [],
            g = [],
            h = e(f, g, a),
            i = new ArrayBuffer(h),
            j = new DataView(i),
            k = 0,
            l = 0,
            m = -1;
        g.length > 0 && (m = g[0]._offset);
        for (var n, o = 0, p = 0, q = 0, r = f.length; q < r; q++)
            if (j.setUint8(l + q, f[q]), q + 1 === m) {
                if (o = (n = g[k])._length, p = l + m, n._bin)
                    for (var s = new Uint8Array(n._bin), t = 0; t < o; t++)
                        j.setUint8(p + t, s[t]);
                else
                    n._str ? d(j, p, n._str) : void 0 !== n._float && j.setFloat64(p, n._float);
                l += o, g[++k] && (m = g[k]._offset);
            }
        return i;
    };
}), c.register('su+i5', function(a, b) {
    function d(a) {
        if (this._offset = 0, a instanceof ArrayBuffer)
            this._buffer = a, this._view = new DataView(this._buffer);
        else {
            if (!ArrayBuffer.isView(a))
                throw new Error('Invalid argument');
            this._buffer = a.buffer, this._view = new DataView(this._buffer, a.byteOffset, a.byteLength);
        }
    }
    d.prototype._array = function(a) {
        for (var e = new Array(a), f = 0; f < a; f++)
            e[f] = this._parse();
        return e;
    }, d.prototype._map = function(a) {
        for (var e = {}, f = 0; f < a; f++)
            e[this._parse()] = this._parse();
        return e;
    }, d.prototype._str = function(a) {
        var e = function(a, e, d) {
            for (var f = '', g = 0, h = i, j = i + d; h < j; h++) {
                var k = a.getUint8(h);
                if (0 != (128 & k))
                    if (192 != (224 & k))
                        if (224 != (240 & k)) {
                            if (240 != (248 & k))
                                throw new Error('Invalid byte ' + k.toString(16));
                            (g = (7 & k) << 18 | (63 & a.getUint8(++h)) << 12 | (63 & a.getUint8(++h)) << 6 | (63 & a.getUint8(++h)) << 0) >= 65536 ? (g -= 65536, f += String.fromCharCode(55296 + (g >>> 10), 56320 + (1023 & g))) : f += String.fromCharCode(g);
                        } else
                            f += String.fromCharCode((15 & k) << 12 | (63 & a.getUint8(++h)) << 6 | (63 & a.getUint8(++h)) << 0);
                else
                    f += String.fromCharCode((31 & k) << 6 | 63 & a.getUint8(++h));
                else
                    f += String.fromCharCode(k);
            }
            return f;
        }(this._view, this._offset, a);
        return this._offset += a, e;
    }, d.prototype._bin = function(a) {
        var e = this._buffer.slice(this._offset, this._offset + a);
        return this._offset += a, e;
    }, d.prototype._parse = function() {
        var e, f = this._view.getUint8(this._offset++),
            g = 0,
            h = 0,
            i = 0,
            j = 0;
        if (f < 192)
            return f < 128 ? f : f < 144 ? this._map(15 & f) : f < 160 ? this._array(15 & f) : this._str(31 & f);
        if (f > 223)
            return -1 * (255 - f + 1);
        switch (f) {
            case 192:
                return null;
            case 194:
                return !1;
            case 195:
                return !0;
            case 196:
                return g = this._view.getUint8(this._offset), this._offset += 1, this._bin(g);
            case 197:
                return g = this._view.getUint16(this._offset), this._offset += 2, this._bin(g);
            case 198:
                return g = this._view.getUint32(this._offset), this._offset += 4, this._bin(g);
            case 199:
                return g = this._view.getUint8(this._offset), h = this._view.getInt8(this._offset + 1), this._offset += 2, [
                    h,
                    this._bin(g)
                ];
            case 200:
                return g = this._view.getUint16(this._offset), h = this._view.getInt8(this._offset + 2), this._offset += 3, [
                    h,
                    this._bin(g)
                ];
            case 201:
                return g = this._view.getUint32(this._offset), h = this._view.getInt8(this._offset + 4), this._offset += 5, [
                    h,
                    this._bin(g)
                ];
            case 202:
                return e = this._view.getFloat32(this._offset), this._offset += 4, e;
            case 203:
                return e = this._view.getFloat64(this._offset), this._offset += 8, e;
            case 204:
                return e = this._view.getUint8(this._offset), this._offset += 1, e;
            case 205:
                return e = this._view.getUint16(this._offset), this._offset += 2, e;
            case 206:
                return e = this._view.getUint32(this._offset), this._offset += 4, e;
            case 207:
                return i = this._view.getUint32(this._offset) * Math.pow(2, 32), j = this._view.getUint32(this._offset + 4), this._offset += 8, i + j;
            case 208:
                return e = this._view.getInt8(this._offset), this._offset += 1, e;
            case 209:
                return e = this._view.getInt16(this._offset), this._offset += 2, e;
            case 210:
                return e = this._view.getInt32(this._offset), this._offset += 4, e;
            case 211:
                return i = this._view.getInt32(this._offset) * Math.pow(2, 32), j = this._view.getUint32(this._offset + 4), this._offset += 8, i + j;
            case 212:
                return h = this._view.getInt8(this._offset), this._offset += 1, 0 === h ? void(this._offset += 1) : [
                    h,
                    this._bin(1)
                ];
            case 213:
                return h = this._view.getInt8(this._offset), this._offset += 1, [
                    h,
                    this._bin(2)
                ];
            case 214:
                return h = this._view.getInt8(this._offset), this._offset += 1, [
                    h,
                    this._bin(4)
                ];
            case 215:
                return h = this._view.getInt8(this._offset), this._offset += 1, 0 === h ? (i = this._view.getInt32(this._offset) * Math.pow(2, 32), j = this._view.getUint32(this._offset + 4), this._offset += 8, new Date(i + j)) : [
                    h,
                    this._bin(8)
                ];
            case 216:
                return h = this._view.getInt8(this._offset), this._offset += 1, [
                    h,
                    this._bin(16)
                ];
            case 217:
                return g = this._view.getUint8(this._offset), this._offset += 1, this._str(g);
            case 218:
                return g = this._view.getUint16(this._offset), this._offset += 2, this._str(g);
            case 219:
                return g = this._view.getUint32(this._offset), this._offset += 4, this._str(g);
            case 220:
                return g = this._view.getUint16(this._offset), this._offset += 2, this._array(g);
            case 221:
                return g = this._view.getUint32(this._offset), this._offset += 4, this._array(g);
            case 222:
                return g = this._view.getUint16(this._offset), this._offset += 2, this._map(g);
            case 223:
                return g = this._view.getUint32(this._offset), this._offset += 4, this._map(g);
        }
        throw new Error('Could not parse');
    }, a.exports = function(a) {
        var e = new d(a),
            f = e._parse();
        if (e._offset !== a.byteLength)
            throw new Error(a.byteLength - e._offset + ' trailing bytes');
        return f;
    };
}), c.register('nHIQM', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    a.exports.default = class {
        add(a, b) {
            const d = Math.random().toString();
            return this.callbacks.push({
                callback: a,
                timesCalled: 0,
                canCallMultipleTimes: !b,
                id: d
            }), () => this.removeCallback(d);
        }
        clear() {
            this.callbacks.splice(0, this.callbacks.length);
        }
        call(a, b) {
            this.callbacks = this.callbacks.map(c => c.timesCalled > 0 && !c.canCallMultipleTimes ? c : (c.callback(a, b), Object.assign({}, c, {
                timesCalled: c.timesCalled + 1
            })));
        }
        constructor() {
            this.callbacks = [], this.removeCallback = a => {
                this.callbacks = this.callbacks.filter(b => b.id !== a);
            };
        }
    };
}), c.register('11k0b', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    a.exports.default = {
        createNewRoom: 'blueboat_CREATE_NEW_ROOM',
        joinRoom: 'blueboat_JOIN_ROOM',
        sendMessage: 'blueboat_SEND_MESSAGE',
        listen: 'blueboat_LISTEN_STATE',
        requestAvailableRooms: 'blueboat_AVAILABLE_ROOMS',
        ping: 'blueboat-ping'
    };
}), c.register('XKMSV', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.BLUEBOAT_ID = 'blueboat-id';
}), c.register('W73L7', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    a.exports.default = {
        clientIdSet: 'CLIENT_ID_SET',
        joinedRoom: 'blueboat_JOINED_ROOM',
        statePatch: 'STATE_PATCH',
        removedFromRoom: 'blueboat_REMOVED_FROM_ROOM',
        availableRooms: 'blueboat_AVAILABLE_ROOMS'
    };
}), c.register('3iZLF', function(a, b) {
    var d = a.exports && a.exports.__importDefault || function(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    const e = d(c('W73L7')),
        f = d(c('nHIQM')),
        g = d(c('11k0b'));
    a.exports.default = class {
        _setRoomId(a) {
            this.id = a, this.socketListener();
        }
        socketListener() {
            const h = this.socket;
            h.on(`${ this.id }-error`, h => this.onJoinError.call(h)), h.on(`message-${ this.id }`, h => {
                const {
                    key: i,
                    data: j
                } = k;
                if (i)
                    return i === e.default.joinedRoom ? (this.joined = !0, void this.onJoin.call()) : i === e.default.removedFromRoom ? (this.onLeave.call(), void(this.joined = !1)) : void this.onMessage.call(i, j);
            });
        }
        constructor(a, b, c) {
            this.joined = !1, this.initialJoinOptions = {}, this.onJoinAttempt = new f.default(), this.onCreate = new f.default(), this.onJoin = new f.default(), this.onJoinError = new f.default(), this.onMessage = new f.default(), this.onLeave = new f.default(), this.send = (a, b) => {
                this.socket.emit(g.default.sendMessage, {
                    room: this.id,
                    key: a,
                    data: b
                });
            }, c && (this.id = c), b && (this.initialJoinOptions = b), a && (this.socket = a, c && this.socketListener());
        }
    };
});