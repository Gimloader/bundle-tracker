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
c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....');
    let g;
    var h;
    (h = g || (g = {})).propertyUpdate = 'pU', h.fullValue = 'fV';
    var _i = class {
        constructor() {
            (0, f.default)(this, 'value', {}), (0, f.default)(this, 'propListeners', []), (0, f.default)(this, 'onPropChange', (j, k) => {
                const l = Math.random().toString(36).substring(3);
                return this.propListeners.push({
                    id: l,
                    prop: j,
                    callback: k
                }), () => this.disposeListener(l);
            }), (0, f.default)(this, 'applyPatches', j => {
                j.forEach(k => {
                    if (k.type !== g.propertyUpdate)
                        if (k.type !== g.fullValue);
                        else {
                            const l = k;
                            Object.keys(l.value).forEach(m => {
                                this.updateProperty(m, l.value[m]);
                            });
                        }
                    else {
                        const m = k;
                        this.updateProperty(m.value.key, m.value.value);
                    }
                });
            }), (0, f.default)(this, 'disposeListener', j => {
                this.propListeners = this.propListeners.filter(k => k.id !== j);
            }), (0, f.default)(this, 'onPropertyChanged', (j, k) => {
                this.propListeners.filter(l => l.prop === j).forEach(l => l.callback(k));
            }), (0, f.default)(this, 'updateProperty', (j, k) => {
                void 0 !== this.value[j] ? this.value[j] !== k && (this.value[j] = k, this.onPropertyChanged(j, k)) : (this.value[j] = k, this.onPropertyChanged(j, k));
            });
        }
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    const k = () => window.devicePixelRatio || 1, l = m => {
            m.preventDefault();
            const n = m.changedTouches[0], o = document.createEvent('MouseEvent'), p = {
                    touchstart: 'mousedown',
                    touchmove: 'mousemove',
                    touchend: 'mouseup'
                }[m.type];
            p && (o.initMouseEvent(p, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(o));
        }, m = n => {
            var o, p;
            return {
                x: (null == n || null === (o = n.nativeEvent) || void 0 === o ? void 0 : o.offsetX) || 0,
                y: (null == n || null === (p = n.nativeEvent) || void 0 === p ? void 0 : p.offsetY) || 0
            };
        };
    var _n = i.forwardRef((o, p) => {
        const [q, r] = i.useState(''), s = i.useRef(!1), t = i.useRef(!1), u = i.useRef(null), v = i.useRef(null), w = i.useRef([]), x = i.useRef(-1), y = i.useRef({
                x: 0,
                y: 0
            }), z = i.useRef(o.color || g.default.Black), A = i.useRef(o.strokeWidth || 2), B = i.useRef(null), C = i.useRef(null), D = () => {
                t.current = !0;
            }, E = () => {
                t.current = !1;
            }, F = i.useMemo(() => {
                const G = (0, h.throttle)(H => {
                    if (!s.current)
                        return;
                    if (!t.current)
                        return;
                    const {
                        x: I,
                        y: J
                    } = m(H);
                    _G({
                        xStart: y.current.x,
                        yStart: y.current.y,
                        xEnd: I,
                        yEnd: J,
                        color: z.current,
                        width: A.current
                    }, !0), y.current = {
                        x: I,
                        y: J
                    };
                }, 10);
                return H => {
                    o.canEdit && (H.persist(), G(H));
                };
            }, [o.canEdit]), _G = (H, I) => {
                const {
                        xStart: J,
                        yStart: K,
                        xEnd: L,
                        yEnd: M,
                        color: N,
                        width: O
                    } = H, P = v.current, Q = u.current;
                if (P.beginPath(), P.moveTo(J, K), P.lineTo(L, M), P.strokeStyle = N, P.lineWidth = O, P.stroke(), P.closePath(), I && o.emitLine) {
                    const R = H;
                    H.xStart /= Q.clientWidth, H.yStart /= Q.clientHeight, H.xEnd /= Q.clientWidth, H.yEnd /= Q.clientHeight, H.width /= (Q.clientWidth + Q.clientHeight) / 2, o.emitLine(R);
                }
            }, H = () => {
                const I = v.current, J = u.current;
                w.current = [
                    ...w.current,
                    I.getImageData(0, 0, J.width, J.height)
                ], x.current = x.current + 1, _I();
            }, _I = () => {
                const J = u.current;
                o.onLatestImage && (null == J ? void 0 : J.toDataURL) && o.onLatestImage(J.toDataURL('image/jpeg'));
            }, J = () => {
                const K = v.current, L = u.current;
                K.clearRect(0, 0, L.width, L.height), K.fillStyle = 'white', K.fillRect(0, 0, L.width, L.height), H();
            }, K = () => {
                x.current <= 0 ? J() : (x.current = x.current - 1, w.current = [...w.current.slice(0, w.current.length - 1)], v.current.putImageData(w.current[x.current], 0, 0), _I());
            }, L = M => {
                const N = u.current, O = M;
                M.xStart *= N.clientWidth, M.yStart *= N.clientHeight, M.xEnd *= N.clientWidth, M.yEnd *= N.clientHeight, M.width *= (N.clientWidth + N.clientHeight) / 2, _G(O, !1);
            }, M = N => {
                const O = v.current, P = u.current, Q = new Image();
                Q.onload = () => {
                    O.drawImage(Q, 0, 0, P.width / k(), P.height / k());
                }, Q.src = N;
            };
        return b(j)(() => {
            const N = u.current, O = v.current;
            if (!N || !O)
                return;
            const P = N.toDataURL(), Q = N.getBoundingClientRect();
            N.width = Q.width * k(), N.height = Q.height * k(), O.scale(k(), k()), O.lineCap = 'round', O.lineJoin = 'round', w.current = [], x.current = -1, M(P);
        }, 100, [
            o.width,
            o.height
        ]), i.useImperativeHandle(p, () => ({
            clear: J,
            undo: K,
            addLine: L,
            drawImage: M
        })), i.useEffect(() => {
            const N = u.current, O = B.current, P = N.getBoundingClientRect();
            N.width = P.width * k(), N.height = P.height * k();
            const Q = N.getContext('2d');
            Q.scale(k(), k()), Q.fillStyle = 'white', Q.fillRect(0, 0, N.width, N.height), Q.lineCap = 'round', Q.lineJoin = 'round', v.current = Q, o.initialImage && M(o.initialImage);
            const R = O.getContext('2d');
            C.current = R, document.addEventListener('mousedown', D), document.addEventListener('mouseup', E);
        }, []), i.useEffect(() => {
            const N = B.current, O = C.current;
            if (!N || !O)
                return;
            const P = o.strokeWidth;
            N.width = P, N.height = P, O.clearRect(0, 0, N.width, N.height), O.beginPath(), O.arc(N.width / 2, N.height / 2, P / 2, 0, 2 * Math.PI), O.fillStyle = o.color, O.fill();
            const Q = N.toDataURL('image');
            r(Q);
        }, [
            o.color,
            o.strokeWidth
        ]), i.useEffect(() => {
            z.current = o.color;
        }, [o.color]), i.useEffect(() => {
            A.current = o.strokeWidth;
        }, [o.strokeWidth]), i.useEffect(() => {
            !o.canEdit && s.current && _I();
        }, [o.canEdit]), i.useEffect(() => () => {
            o.canEdit && s.current && _I();
        }, []), (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)('canvas', {
                    style: {
                        width: o.width,
                        height: o.height,
                        cursor: o.canEdit ? `url(${ q }) ${ A.current / 2 } ${ A.current / 2 }, auto` : 'auto',
                        background: g.default.White
                    },
                    ref: u,
                    onMouseDown: N => {
                        if (!o.canEdit)
                            return;
                        const {
                            x: O,
                            y: P
                        } = m(N);
                        y.current = {
                            x: O,
                            y: P
                        }, s.current = !0;
                    },
                    onMouseUp: N => {
                        if (!o.canEdit)
                            return;
                        const {
                            x: O,
                            y: P
                        } = m(N);
                        s.current && (s.current = !1, _G({
                            xStart: y.current.x,
                            yStart: y.current.y,
                            xEnd: O,
                            yEnd: P,
                            color: z.current,
                            width: A.current
                        }, !0), H());
                    },
                    onMouseMove: F,
                    onTouchStart: l,
                    onTouchEnd: l,
                    onTouchCancel: l,
                    onTouchMove: l
                }),
                (0, f.jsx)('canvas', {
                    style: { display: 'none' },
                    ref: B
                })
            ]
        });
    });
}), c.register('.....', function (d, e) {
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), d.exports.useThrottledEffect = void 0;
    var f = c('.....');
    function g(h) {
        if (Array.isArray(h)) {
            for (var i = 0, j = Array(h.length); i < h.length; i++)
                j[i] = h[i];
            return j;
        }
        return Array.from(h);
    }
    var j = d.exports.useThrottledEffect = function (k, l) {
        var m = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], n = (0, f.useRef)(Date.now());
        (0, f.useEffect)(function () {
            var o = setTimeout(function () {
                Date.now() - n.current >= l && (k(), n.current = Date.now());
            }, l - (Date.now() - n.current));
            return function () {
                clearTimeout(o);
            };
        }, [l].concat(g(m)));
    };
    d.exports.default = j;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....');
    let h, i, j = k => k;
    var _k = l => (0, f.jsxs)(_l, {
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
            (0, f.jsx)(_m, { children: l.children })
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
`)), _m = g.default.div.attrs({ className: 'maxAll' })(i || (i = j`
  position: absolute;
  top: 0;
  left: 0;
`));
}), c.register('.....', function (d, e) {
    var f = d.exports && d.exports.__importDefault || function (g) {
        return g && g.__esModule ? g : { default: g };
    };
    Object.defineProperty(d.exports, '__esModule', { value: !0 });
    const g = f(c('.....'));
    d.exports.Client = g.default;
    const h = f(c('.....'));
    d.exports.Room = h.default;
}), c.register('.....', function (d, e) {
    var f = d.exports && d.exports.__importDefault || function (g) {
        return g && g.__esModule ? g : { default: g };
    };
    Object.defineProperty(d.exports, '__esModule', { value: !0 });
    const g = f(c('.....')), h = f(c('.....')), i = f(c('.....')), j = f(c('.....'));
    var k = c('.....');
    const l = f(c('.....')), m = f(c('.....'));
    d.exports.default = class {
        createRoom(n, o) {
            const p = Math.random().toString();
            this.socket.emit(j.default.createNewRoom, {
                type: n,
                options: o,
                uniqueRequestId: p
            });
            const q = new m.default(this.socket, o);
            return this.socket.on(`${ p }-create`, r => {
                q._setRoomId(r), q.onCreate.call(r), this.joinRoom(r, o, q);
            }), this.socket.on(`${ p }-error`, r => {
                q.onJoinError.call(r);
            }), q;
        }
        joinRoom(n, o, p) {
            const q = p || new m.default(this.socket, o, n);
            return q.onJoinAttempt.call(), q.joined || this.socket.emit(j.default.joinRoom, {
                roomId: n,
                options: o
            }), this.rooms.some(r => r.id === n) || this.rooms.push(q), q;
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
                query: { id: localStorage && this.useClientIdSaving && localStorage.getItem(k.BLUEBOAT_ID + (o && o.clientIdSuffix ? o.clientIdSuffix : '')) || '' },
                reconnectionDelay: 500,
                reconnectionDelayMax: 1500,
                randomizationFactor: 0
            }), this.socket.on('connect_error', p => this.onConnectError.call(p)), this.socket.on('error', p => this.onConnectError.call(p)), this.socket.on(l.default.clientIdSet, p => {
                localStorage && this.useClientIdSaving && localStorage.setItem(k.BLUEBOAT_ID + (o && o.clientIdSuffix ? o.clientIdSuffix : ''), p), this.socket.io.opts.query.id = p, this.id = p, this.sessionId = this.socket.id, this.rooms.length && this.rooms.forEach(q => this.joinRoom(q.id, q.initialJoinOptions, q)), this.onConnect.call();
            }), this.socket.on('pong', p => {
                this.latency = p;
            }), this.socket.on('reconnect', p => this.onReconnect.call(p)), this.socket.on('reconnect_attempt', p => {
                this.onReconnectAttempt.call(p);
            }), this.socket.on('disconnect', p => {
                this.onDisconnect.call(p), this.rooms.forEach(q => {
                    q.joined = !1, q.onLeave.call(p);
                });
            });
        }
    };
}), c.register('.....', function (d, e) {
    var f = c('.....'), g = c('.....'), h = c('.....')('socket.io-client');
    d.exports = e = _j;
    var i = e.managers = {};
    function _j(k, l) {
        'object' == typeof k && (l = k, k = void 0), l = l || {};
        var m, n = f(k), o = _j.source, p = _j.id, q = _j.path, r = i[p] && q in i[p].nsps;
        return l.forceNew || l['force new connection'] || !1 === l.multiplex || r ? (h('ignoring socket cache for %s', o), m = c('.....')(o, l)) : (i[p] || (h('new io instance for %s', o), i[p] = c('.....')(o, l)), m = i[p]), _j.query && !l.query && (l.query = _j.query), m.socket(_j.path, l);
    }
    e.protocol = m.protocol, e.connect = _j, e.Manager = c('.....'), e.Socket = c('.....');
}), c.register('.....', function (d, e) {
    var f = c('.....'), g = c('.....')('socket.io-client:url');
    d.exports = function (h, i) {
        var j = h;
        i = i || 'undefined' != typeof location && location, null == h && (h = i.protocol + '//' + i.host);
        'string' == typeof h && ('/' === h.charAt(0) && (h = '/' === h.charAt(1) ? i.protocol + h : i.host + h), /^(https?|wss?):\/\//.test(h) || (g('protocol-less url %s', h), h = void 0 !== i ? i.protocol + '//' + h : 'https://' + h), g('parse %s', h), j = f(h));
        j.port || (/^(http|ws)$/.test(j.protocol) ? j.port = '80' : /^(http|ws)s$/.test(j.protocol) && (j.port = '443'));
        j.path = j.path || '/';
        var k = -1 !== j.host.indexOf(':') ? '[' + j.host + ']' : j.host;
        return j.id = j.protocol + '://' + k + ':' + j.port, j.href = j.protocol + '://' + k + (i && i.port === j.port ? '' : ':' + j.port), j;
    };
}), c.register('.....', function (d, e) {
    var f = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, g = [
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
    d.exports = function (h) {
        var i = h, j = h.indexOf('['), k = h.indexOf(']');
        -1 != j && -1 != k && (h = h.substring(0, j) + h.substring(j, k).replace(/:/g, ';') + h.substring(k, h.length));
        for (var l, m, n = f.exec(h || ''), o = {}, p = 14; p--;)
            o[g[p]] = n[p] || '';
        return -1 != j && -1 != k && (o.source = i, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ':'), o.authority = o.authority.replace('[', '').replace(']', '').replace(/;/g, ':'), o.ipv6uri = !0), o.pathNames = function (q, r) {
            var s = /\/{2,9}/g, t = r.replace(s, '/').split('/');
            '/' != r.substr(0, 1) && 0 !== r.length || t.splice(0, 1);
            '/' == r.substr(r.length - 1, 1) && t.splice(t.length - 1, 1);
            return t;
        }(0, o.path), o.queryKey = (l = o.query, m = {}, l.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (q, r, s) {
            r && (m[r] = s);
        }), m), o;
    };
}), c.register('.....', function (d, e) {
    var f = c('.....');
    function g() {
        var h;
        try {
            h = e.storage.debug;
        } catch (h) {
        }
        return !h && void 0 !== f && 'env' in f && (h = void 0), h;
    }
    (e = h.exports = c('.....')).log = function () {
        return 'object' == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }, e.formatArgs = function (i) {
        var j = this.useColors;
        if (i[0] = (j ? '%c' : '') + this.namespace + (j ? ' %c' : ' ') + i[0] + (j ? '%c ' : ' ') + '+' + e.humanize(this.diff), !j)
            return;
        var k = 'color: ' + this.color;
        i.splice(1, 0, k, 'color: inherit');
        var l = 0, m = 0;
        i[0].replace(/%[a-zA-Z%]/g, function (n) {
            '%%' !== n && (l++, '%c' === n && (m = l));
        }), i.splice(m, 0, k);
    }, e.save = function (i) {
        try {
            null == i ? e.storage.removeItem('debug') : e.storage.debug = i;
        } catch (i) {
        }
    }, e.load = g, e.useColors = function () {
        return !('undefined' == typeof window || !window.process || 'renderer' !== window.process.type) || ('undefined' == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ('undefined' != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || 'undefined' != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }, e.storage = 'undefined' != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
            return window.localStorage;
        } catch (h) {
        }
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
    ], e.formatters.j = function (i) {
        try {
            return JSON.stringify(i);
        } catch (i) {
            return '[UnexpectedJSONParseError]: ' + i.message;
        }
    }, e.enable(g());
}), c.register('.....', function (d, e) {
    function f(g) {
        var h;
        function i() {
            if (i.enabled) {
                var j = i, k = +new Date(), l = k - (h || k);
                g.diff = l, g.prev = h, g.curr = k, h = k;
                for (var m = new Array(arguments.length), n = 0; n < m.length; n++)
                    m[n] = arguments[n];
                m[0] = e.coerce(m[0]), 'string' != typeof m[0] && m.unshift('%O');
                var o = 0;
                m[0] = m[0].replace(/%([a-zA-Z%])/g, function (p, q) {
                    if ('%%' === p)
                        return p;
                    o++;
                    var r = e.formatters[q];
                    if ('function' == typeof r) {
                        var s = m[o];
                        p = r.call(g, s), m.splice(o, 1), o--;
                    }
                    return p;
                }), e.formatArgs.call(g, m);
                var p = i.log || e.log || console.log.bind(console);
                p.apply(g, m);
            }
        }
        return i.namespace = g, i.enabled = e.enabled(g), i.useColors = e.useColors(), i.color = function (q) {
            var r, s = 0;
            for (r in q)
                s = (s << 5) - s + q.charCodeAt(r), s |= 0;
            return e.colors[Math.abs(s) % e.colors.length];
        }(g), i.destroy = k, 'function' == typeof e.init && e.init(i), e.instances.push(i), i;
    }
    function o() {
        var p = e.instances.indexOf(this);
        return -1 !== p && (e.instances.splice(p, 1), !0);
    }
    (e = p.exports = f.debug = f.default = f).coerce = function (q) {
        return q instanceof Error ? q.stack || q.message : q;
    }, e.disable = function () {
        e.enable('');
    }, e.enable = function (q) {
        var r;
        e.save(q), e.names = [], e.skips = [];
        var s = ('string' == typeof q ? q : '').split(/[\s,]+/), t = s.length;
        for (r = 0; r < t; r++)
            s[r] && ('-' === (q = s[r].replace(/\*/g, '.*?'))[0] ? e.skips.push(new RegExp('^' + q.substr(1) + '$')) : e.names.push(new RegExp('^' + q + '$')));
        for (r = 0; r < e.instances.length; r++) {
            var u = e.instances[r];
            u.enabled = e.enabled(u.namespace);
        }
    }, e.enabled = function (q) {
        if ('*' === q[q.length - 1])
            return !0;
        var r, s;
        for (r = 0, s = e.skips.length; r < s; r++)
            if (e.skips[r].test(q))
                return !1;
        for (r = 0, s = e.names.length; r < s; r++)
            if (e.names[r].test(q))
                return !0;
        return !1;
    }, e.humanize = h('.....'), e.instances = [], e.names = [], e.skips = [], e.formatters = {};
}), c.register('.....', function (d, e) {
    var f = 1000, g = 60000, h = 3600000, i = 86400000, j = 31557600000;
    function k(l, m, n) {
        if (!(l < m))
            return l < 1.5 * m ? Math.floor(l / m) + ' ' + n : Math.ceil(l / m) + ' ' + n + 's';
    }
    d.exports = function (l, m) {
        m = m || {};
        var n, o = typeof l;
        if ('string' === o && l.length > 0)
            return function (p) {
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
            return m.long ? k(n = l, i, 'day') || k(n, h, 'hour') || k(n, g, 'minute') || k(n, f, 'second') || n + ' ms' : function (p) {
                return p >= i ? Math.round(p / i) + 'd' : p >= h ? Math.round(p / h) + 'h' : p >= g ? Math.round(p / g) + 'm' : p >= f ? Math.round(p / f) + 's' : p + 'ms';
            }(l);
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(l));
    };
}), c.register('.....', function (d, e) {
    var f, g, h, i, j, k, l, m, n, o, p;
    a(d.exports, 'protocol', function () {
        return f;
    }, function (q) {
        return f = q;
    }), a(d.exports, 'types', function () {
        return g;
    }, function (q) {
        return g = q;
    }), a(d.exports, 'CONNECT', function () {
        return h;
    }, function (q) {
        return h = q;
    }), a(d.exports, 'DISCONNECT', function () {
        return i;
    }, function (q) {
        return i = q;
    }), a(d.exports, 'EVENT', function () {
        return j;
    }, function (q) {
        return j = q;
    }), a(d.exports, 'ACK', function () {
        return k;
    }, function (q) {
        return k = q;
    }), a(d.exports, 'ERROR', function () {
        return l;
    }, function (q) {
        return l = q;
    }), a(d.exports, 'BINARY_EVENT', function () {
        return m;
    }, function (q) {
        return m = q;
    }), a(d.exports, 'BINARY_ACK', function () {
        return n;
    }, function (q) {
        return n = q;
    }), a(d.exports, 'Encoder', function () {
        return o;
    }, function (q) {
        return o = q;
    }), a(d.exports, 'Decoder', function () {
        return p;
    }, function (q) {
        return p = q;
    });
    var q = c('.....')('socket.io-parser'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
    function v() {
    }
    f = 4, g = [
        'CONNECT',
        'DISCONNECT',
        'EVENT',
        'ACK',
        'ERROR',
        'BINARY_EVENT',
        'BINARY_ACK'
    ], h = 0, i = 1, j = 2, k = 3, m = 5, n = 6, o = v, p = _A;
    var w = (l = 4) + '"encode error"';
    function x(y) {
        var z = '' + y.type;
        if (m !== y.type && n !== y.type || (z += y.attachments + '-'), y.nsp && '/' !== y.nsp && (z += y.nsp + ','), null != y.id && (z += y.id), null != y.data) {
            var A = function (B) {
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
    function _A() {
        this.reconstructor = null;
    }
    function B(C) {
        this.reconPack = C, this.buffers = [];
    }
    function C(D) {
        return {
            type: l,
            data: 'parser error: ' + D
        };
    }
    v.prototype.encode = function (D, E) {
        (q('encoding packet %j', D), m === D.type || n === D.type) ? function (F, G) {
            function H(I) {
                var J = s.deconstructPacket(I), K = x(H.packet), L = H.buffers;
                L.unshift(K), G(L);
            }
            s.removeBlobs(F, H);
        }(D, E) : E([x(D)]);
    }, r(_A.prototype), _A.prototype.add = function (D) {
        var E;
        if ('string' == typeof D)
            E = function (F) {
                var G = 0, H = { type: Number(F.charAt(0)) };
                if (null == g[H.type])
                    return C('unknown packet type ' + H.type);
                if (m === H.type || n === H.type) {
                    for (var I = ''; '-' !== F.charAt(++G) && (I += F.charAt(G), G != F.length););
                    if (I != Number(I) || '-' !== F.charAt(G))
                        throw new Error('Illegal attachments');
                    H.attachments = Number(I);
                }
                if ('/' === F.charAt(G + 1))
                    for (H.nsp = ''; ++G;) {
                        if (',' === (h = F.charAt(G)))
                            break;
                        if (H.nsp += h, G === F.length)
                            break;
                    }
                else
                    H.nsp = '/';
                var J = F.charAt(G + 1);
                if ('' !== J && Number(J) == J) {
                    for (H.id = ''; ++G;) {
                        var K;
                        if (null == (K = F.charAt(G)) || Number(K) != K) {
                            --G;
                            break;
                        }
                        if (H.id += F.charAt(G), G === F.length)
                            break;
                    }
                    H.id = Number(H.id);
                }
                if (F.charAt(++G)) {
                    var L = function (M) {
                        try {
                            return JSON.parse(M);
                        } catch (M) {
                            return !1;
                        }
                    }(F.substr(G));
                    if (!(!1 !== L && (H.type === l || t(L))))
                        return C('invalid payload');
                    H.data = L;
                }
                return q('decoded %s as %j', F, H), H;
            }(D), m === E.type || n === E.type ? (this.reconstructor = new B(E), 0 === this.reconstructor.reconPack.attachments && this.emit('decoded', E)) : this.emit('decoded', E);
        else {
            if (!u(D) && !D.base64)
                throw new Error('Unknown type: ' + D);
            if (!this.reconstructor)
                throw new Error('got binary data when not reconstructing a packet');
            (E = this.reconstructor.takeBinaryData(D)) && (this.reconstructor = null, this.emit('decoded', E));
        }
    }, _A.prototype.destroy = function () {
        this.reconstructor && this.reconstructor.finishedReconstruction();
    }, B.prototype.takeBinaryData = function (D) {
        if (this.buffers.push(D), this.buffers.length === this.reconPack.attachments) {
            var E = s.reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), E;
        }
        return null;
    }, B.prototype.finishedReconstruction = function () {
        this.reconPack = null, this.buffers = [];
    };
}), c.register('.....', function (d, e) {
    var f = c('.....');
    function g() {
        var h;
        try {
            h = e.storage.debug;
        } catch (h) {
        }
        return !h && void 0 !== f && 'env' in f && (h = void 0), h;
    }
    (e = h.exports = c('.....')).log = function () {
        return 'object' == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }, e.formatArgs = function (i) {
        var j = this.useColors;
        if (i[0] = (j ? '%c' : '') + this.namespace + (j ? ' %c' : ' ') + i[0] + (j ? '%c ' : ' ') + '+' + e.humanize(this.diff), !j)
            return;
        var k = 'color: ' + this.color;
        i.splice(1, 0, k, 'color: inherit');
        var l = 0, m = 0;
        i[0].replace(/%[a-zA-Z%]/g, function (n) {
            '%%' !== n && (l++, '%c' === n && (m = l));
        }), i.splice(m, 0, k);
    }, e.save = function (i) {
        try {
            null == i ? e.storage.removeItem('debug') : e.storage.debug = i;
        } catch (i) {
        }
    }, e.load = g, e.useColors = function () {
        return !('undefined' == typeof window || !window.process || 'renderer' !== window.process.type) || ('undefined' == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ('undefined' != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || 'undefined' != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }, e.storage = 'undefined' != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
            return window.localStorage;
        } catch (h) {
        }
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
    ], e.formatters.j = function (i) {
        try {
            return JSON.stringify(i);
        } catch (i) {
            return '[UnexpectedJSONParseError]: ' + i.message;
        }
    }, e.enable(g());
}), c.register('.....', function (d, e) {
    function f(g) {
        var h;
        function i() {
            if (i.enabled) {
                var j = i, k = +new Date(), l = k - (h || k);
                g.diff = l, g.prev = h, g.curr = k, h = k;
                for (var m = new Array(arguments.length), n = 0; n < m.length; n++)
                    m[n] = arguments[n];
                m[0] = e.coerce(m[0]), 'string' != typeof m[0] && m.unshift('%O');
                var o = 0;
                m[0] = m[0].replace(/%([a-zA-Z%])/g, function (p, q) {
                    if ('%%' === p)
                        return p;
                    o++;
                    var r = e.formatters[q];
                    if ('function' == typeof r) {
                        var s = m[o];
                        p = r.call(g, s), m.splice(o, 1), o--;
                    }
                    return p;
                }), e.formatArgs.call(g, m);
                var p = i.log || e.log || console.log.bind(console);
                p.apply(g, m);
            }
        }
        return i.namespace = g, i.enabled = e.enabled(g), i.useColors = e.useColors(), i.color = function (q) {
            var r, s = 0;
            for (r in q)
                s = (s << 5) - s + q.charCodeAt(r), s |= 0;
            return e.colors[Math.abs(s) % e.colors.length];
        }(g), i.destroy = k, 'function' == typeof e.init && e.init(i), e.instances.push(i), i;
    }
    function o() {
        var p = e.instances.indexOf(this);
        return -1 !== p && (e.instances.splice(p, 1), !0);
    }
    (e = p.exports = f.debug = f.default = f).coerce = function (q) {
        return q instanceof Error ? q.stack || q.message : q;
    }, e.disable = function () {
        e.enable('');
    }, e.enable = function (q) {
        var r;
        e.save(q), e.names = [], e.skips = [];
        var s = ('string' == typeof q ? q : '').split(/[\s,]+/), t = s.length;
        for (r = 0; r < t; r++)
            s[r] && ('-' === (q = s[r].replace(/\*/g, '.*?'))[0] ? e.skips.push(new RegExp('^' + q.substr(1) + '$')) : e.names.push(new RegExp('^' + q + '$')));
        for (r = 0; r < e.instances.length; r++) {
            var u = e.instances[r];
            u.enabled = e.enabled(u.namespace);
        }
    }, e.enabled = function (q) {
        if ('*' === q[q.length - 1])
            return !0;
        var r, s;
        for (r = 0, s = e.skips.length; r < s; r++)
            if (e.skips[r].test(q))
                return !1;
        for (r = 0, s = e.names.length; r < s; r++)
            if (e.names[r].test(q))
                return !0;
        return !1;
    }, e.humanize = h('.....'), e.instances = [], e.names = [], e.skips = [], e.formatters = {};
}), c.register('.....', function (d, e) {
    var f = 1000, g = 60000, h = 3600000, i = 86400000, j = 31557600000;
    function k(l, m, n) {
        if (!(l < m))
            return l < 1.5 * m ? Math.floor(l / m) + ' ' + n : Math.ceil(l / m) + ' ' + n + 's';
    }
    d.exports = function (l, m) {
        m = m || {};
        var n, o = typeof l;
        if ('string' === o && l.length > 0)
            return function (p) {
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
            return m.long ? k(n = l, i, 'day') || k(n, h, 'hour') || k(n, g, 'minute') || k(n, f, 'second') || n + ' ms' : function (p) {
                return p >= i ? Math.round(p / i) + 'd' : p >= h ? Math.round(p / h) + 'h' : p >= g ? Math.round(p / g) + 'm' : p >= f ? Math.round(p / f) + 's' : p + 'ms';
            }(l);
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(l));
    };
}), c.register('.....', function (d, e) {
    function f(g) {
        if (g)
            return function (h) {
                for (var i in f.prototype)
                    h[i] = f.prototype[i];
                return h;
            }(g);
    }
    d.exports = f, f.prototype.on = f.prototype.addEventListener = function (g, h) {
        return this._callbacks = this._callbacks || {}, (this._callbacks['$' + g] = this._callbacks['$' + g] || []).push(h), this;
    }, f.prototype.once = function (g, h) {
        function i() {
            this.off(g, i), h.apply(this, arguments);
        }
        return i.fn = h, this.on(g, i), this;
    }, f.prototype.off = f.prototype.removeListener = f.prototype.removeAllListeners = f.prototype.removeEventListener = function (g, h) {
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
    }, f.prototype.emit = function (g) {
        this._callbacks = this._callbacks || {};
        for (var h = new Array(arguments.length - 1), i = this._callbacks['$' + g], j = 1; j < arguments.length; j++)
            h[j - 1] = arguments[j];
        if (i) {
            j = 0;
            for (var k = (i = i.slice(0)).length; j < k; ++j)
                i[j].apply(this, h);
        }
        return this;
    }, f.prototype.listeners = function (g) {
        return this._callbacks = this._callbacks || {}, this._callbacks['$' + g] || [];
    }, f.prototype.hasListeners = function (g) {
        return !!this.listeners(g).length;
    };
}), c.register('.....', function (d, e) {
    var f, g, h;
    a(d.exports, 'deconstructPacket', function () {
        return f;
    }, function (i) {
        return f = i;
    }), a(d.exports, 'reconstructPacket', function () {
        return g;
    }, function (i) {
        return g = i;
    }), a(d.exports, 'removeBlobs', function () {
        return h;
    }, function (i) {
        return h = i;
    });
    var i = c('.....'), j = c('.....'), k = Object.prototype.toString, l = 'function' == typeof Blob || 'undefined' != typeof Blob && '[object BlobConstructor]' === k.call(Blob), m = 'function' == typeof File || 'undefined' != typeof File && '[object FileConstructor]' === k.call(File);
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
            for (var r = new Array(o.length), s = 0; s < o.length; s++)
                r[s] = n(o[s], p);
            return r;
        }
        if ('object' == typeof o && !(o instanceof Date)) {
            r = {};
            for (var t in o)
                r[t] = n(o[t], p);
            return r;
        }
        return o;
    }
    function s(t, u) {
        if (!t)
            return t;
        if (t && t._placeholder)
            return u[t.num];
        if (i(t))
            for (var v = 0; v < t.length; v++)
                t[v] = s(t[v], u);
        else if ('object' == typeof t)
            for (var w in t)
                t[w] = s(t[w], u);
        return t;
    }
    s = function (v) {
        var w = [], x = v.data, y = v;
        return y.data = n(x, w), y.attachments = w.length, {
            packet: y,
            buffers: w
        };
    }, t = function (v, w) {
        return v.data = s(v.data, w), v.attachments = void 0, v;
    }, h = function (v, w) {
        var x = 0, y = v;
        !function v(z, A, B) {
            if (!z)
                return z;
            if (l && z instanceof Blob || m && z instanceof File) {
                x++;
                var C = new FileReader();
                C.onload = function () {
                    B ? B[A] = this.result : y = this.result, --x || w(y);
                }, C.readAsArrayBuffer(z);
            } else if (i(z))
                for (var D = 0; D < z.length; D++)
                    v(z[D], D, z);
            else if ('object' == typeof z && !j(z))
                for (var E in z)
                    v(z[E], E, z);
        }(y), x || w(y);
    };
}), c.register('.....', function (d, e) {
    var f = {}.toString;
    d.exports = Array.isArray || function (g) {
        return '[object Array]' == f.call(g);
    };
}), c.register('.....', function (d, e) {
    var f = c('.....').Buffer;
    d.exports = function (g) {
        return _g && f.isBuffer(g) || _h && (g instanceof ArrayBuffer || function (h) {
            return 'function' == typeof ArrayBuffer.isView ? ArrayBuffer.isView(h) : h.buffer instanceof ArrayBuffer;
        }(g));
    };
    var _g = 'function' == typeof f && 'function' == typeof f.isBuffer, _h = 'function' == typeof ArrayBuffer;
}), c.register('.....', function (d, e) {
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....')('socket.io-client:manager'), m = c('.....'), n = c('.....'), o = Object.prototype.hasOwnProperty;
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
    d.exports = p, p.prototype.emitAll = function () {
        for (var r in (this.emit.apply(this, arguments), this.nsps))
            o.call(this.nsps, r) && this.nsps[r].emit.apply(this.nsps[r], arguments);
    }, p.prototype.updateSocketIds = function () {
        for (var r in this.nsps)
            o.call(this.nsps, r) && (this.nsps[r].id = this.generateId(r));
    }, p.prototype.generateId = function (r) {
        return ('/' === r ? '' : r + '#') + this.engine.id;
    }, h(p.prototype), p.prototype.reconnection = function (r) {
        return arguments.length ? (this._reconnection = !!r, this) : this._reconnection;
    }, p.prototype.reconnectionAttempts = function (r) {
        return arguments.length ? (this._reconnectionAttempts = r, this) : this._reconnectionAttempts;
    }, p.prototype.reconnectionDelay = function (r) {
        return arguments.length ? (this._reconnectionDelay = r, this.backoff && this.backoff.setMin(r), this) : this._reconnectionDelay;
    }, p.prototype.randomizationFactor = function (r) {
        return arguments.length ? (this._randomizationFactor = r, this.backoff && this.backoff.setJitter(r), this) : this._randomizationFactor;
    }, p.prototype.reconnectionDelayMax = function (r) {
        return arguments.length ? (this._reconnectionDelayMax = r, this.backoff && this.backoff.setMax(r), this) : this._reconnectionDelayMax;
    }, p.prototype.timeout = function (r) {
        return arguments.length ? (this._timeout = r, this) : this._timeout;
    }, p.prototype.maybeReconnectOnOpen = function () {
        !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
    }, p.prototype.open = p.prototype.connect = function (r, s) {
        if (l('readyState %s', this.readyState), ~this.readyState.indexOf('open'))
            return this;
        l('opening %s', this.uri), this.engine = f(this.uri, this.opts);
        var t = this.engine, u = this;
        this.readyState = 'opening', this.skipReconnect = !1;
        var v = j(t, 'open', function () {
                u.onopen(), r && r();
            }), w = j(t, 'error', function (x) {
                if (l('connect_error'), u.cleanup(), u.readyState = 'closed', u.emitAll('connect_error', x), r) {
                    var y = new Error('Connection error');
                    y.data = x, r(y);
                } else
                    u.maybeReconnectOnOpen();
            });
        if (!1 !== this._timeout) {
            var x = this._timeout;
            l('connect attempt will timeout after %d', x), 0 === x && v.destroy();
            var y = setTimeout(function () {
                l('connect attempt timed out after %d', x), v.destroy(), t.close(), t.emit('error', 'timeout'), u.emitAll('connect_timeout', x);
            }, x);
            this.subs.push({
                destroy: function () {
                    clearTimeout(y);
                }
            });
        }
        return this.subs.push(v), this.subs.push(w), this;
    }, p.prototype.onopen = function () {
        l('open'), this.cleanup(), this.readyState = 'open', this.emit('open');
        var r = this.engine;
        this.subs.push(j(r, 'data', k(this, 'ondata'))), this.subs.push(j(r, 'ping', k(this, 'onping'))), this.subs.push(j(r, 'pong', k(this, 'onpong'))), this.subs.push(j(r, 'error', k(this, 'onerror'))), this.subs.push(j(r, 'close', k(this, 'onclose'))), this.subs.push(j(this.decoder, 'decoded', k(this, 'ondecoded')));
    }, p.prototype.onping = function () {
        this.lastPing = new Date(), this.emitAll('ping');
    }, p.prototype.onpong = function () {
        this.emitAll('pong', new Date() - this.lastPing);
    }, p.prototype.ondata = function (r) {
        this.decoder.add(r);
    }, p.prototype.ondecoded = function (r) {
        this.emit('packet', r);
    }, p.prototype.onerror = function (r) {
        l('error', r), this.emitAll('error', r);
    }, p.prototype.socket = function (r, s) {
        var t = this.nsps[r];
        if (!t) {
            t = new g(this, r, s), this.nsps[r] = t;
            var u = this;
            t.on('connecting', h), t.on('connect', function () {
                t.id = u.generateId(r);
            }), this.autoConnect && h();
        }
        function v() {
            ~m(u.connecting, t) || u.connecting.push(t);
        }
        return t;
    }, p.prototype.destroy = function (r) {
        var s = m(this.connecting, r);
        ~s && this.connecting.splice(s, 1), this.connecting.length || this.close();
    }, p.prototype.packet = function (r) {
        l('writing packet %j', r);
        var s = this;
        r.query && 0 === r.type && (r.nsp += '?' + r.query), s.encoding ? s.packetBuffer.push(r) : (s.encoding = !0, this.encoder.encode(r, function (t) {
            for (var u = 0; u < t.length; u++)
                s.engine.write(t[u], r.options);
            s.encoding = !1, s.processPacketQueue();
        }));
    }, p.prototype.processPacketQueue = function () {
        if (this.packetBuffer.length > 0 && !this.encoding) {
            var r = this.packetBuffer.shift();
            this.packet(r);
        }
    }, p.prototype.cleanup = function () {
        l('cleanup');
        for (var r = this.subs.length, s = 0; s < r; s++) {
            this.subs.shift().destroy();
        }
        this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
    }, p.prototype.close = p.prototype.disconnect = function () {
        l('disconnect'), this.skipReconnect = !0, this.reconnecting = !1, 'opening' === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = 'closed', this.engine && this.engine.close();
    }, p.prototype.onclose = function (r) {
        l('onclose'), this.cleanup(), this.backoff.reset(), this.readyState = 'closed', this.emit('close', r), this._reconnection && !this.skipReconnect && this.reconnect();
    }, p.prototype.reconnect = function () {
        if (this.reconnecting || this.skipReconnect)
            return this;
        var r = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            l('reconnect failed'), this.backoff.reset(), this.emitAll('reconnect_failed'), this.reconnecting = !1;
        else {
            var s = this.backoff.duration();
            l('will wait %dms before reconnect attempt', s), this.reconnecting = !0;
            var t = setTimeout(function () {
                r.skipReconnect || (l('attempting reconnect'), r.emitAll('reconnect_attempt', r.backoff.attempts), r.emitAll('reconnecting', r.backoff.attempts), r.skipReconnect || r.open(function (u) {
                    u ? (l('reconnect attempt error'), r.reconnecting = !1, r.reconnect(), r.emitAll('reconnect_error', u.data)) : (l('reconnect success'), r.onreconnect());
                }));
            }, s);
            this.subs.push({
                destroy: function () {
                    clearTimeout(t);
                }
            });
        }
    }, p.prototype.onreconnect = function () {
        var r = this.backoff.attempts;
        this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll('reconnect', r);
    };
}), c.register('.....', function (d, e) {
    d.exports = c('.....'), d.exports.parser = c('.....');
}), c.register('.....', function (d, e) {
    var f = c('.....'), g = c('.....')('engine.io-client:socket'), h = c('.....'), i = c('.....'), j = c('.....');
    function k(l, m) {
        if (!(this instanceof k))
            return new k(l, m);
        m = m || {}, l && 'object' == typeof l && (m = l, l = null), l ? (l = i(l), m.hostname = l.host, m.secure = 'https' === l.protocol || 'wss' === l.protocol, m.port = l.port, l.query && (m.query = l.query)) : m.host && (m.hostname = i(m.host).host), this.secure = null != m.secure ? m.secure : 'undefined' != typeof location && 'https:' === location.protocol, m.hostname && !m.port && (m.port = this.secure ? '443' : '80'), this.agent = m.agent || !1, this.hostname = m.hostname || ('undefined' != typeof location ? location.hostname : 'localhost'), this.port = m.port || ('undefined' != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = m.query || {}, 'string' == typeof this.query && (this.query = j.decode(this.query)), this.upgrade = !1 !== m.upgrade, this.path = (m.path || '/engine.io').replace(/\/$/, '') + '/', this.forceJSONP = !!m.forceJSONP, this.jsonp = !1 !== m.jsonp, this.forceBase64 = !!m.forceBase64, this.enablesXDR = !!m.enablesXDR, this.withCredentials = !1 !== m.withCredentials, this.timestampParam = m.timestampParam || 't', this.timestampRequests = m.timestampRequests, this.transports = m.transports || [
            'polling',
            'websocket'
        ], this.transportOptions = m.transportOptions || {}, this.readyState = '', this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = m.policyPort || 843, this.rememberUpgrade = m.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = m.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== m.perMessageDeflate && (m.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = m.pfx || null, this.key = m.key || null, this.passphrase = m.passphrase || null, this.cert = m.cert || null, this.ca = m.ca || null, this.ciphers = m.ciphers || null, this.rejectUnauthorized = void 0 === m.rejectUnauthorized || m.rejectUnauthorized, this.forceNode = !!m.forceNode, this.isReactNative = 'undefined' != typeof navigator && 'string' == typeof navigator.product && 'reactnative' === navigator.product.toLowerCase(), ('undefined' == typeof self || this.isReactNative) && (m.extraHeaders && Object.keys(m.extraHeaders).length > 0 && (this.extraHeaders = m.extraHeaders), m.localAddress && (this.localAddress = m.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open();
    }
    d.exports = k, k.priorWebsocketSuccess = !1, f(k.prototype), k.protocol = c('.....').protocol, k.Socket = k, k.Transport = c('.....'), k.transports = c('.....'), k.parser = c('.....'), k.prototype.createTransport = function (l) {
        g('creating transport "%s"', l);
        var m = function (n) {
            var o = {};
            for (var p in n)
                n.hasOwnProperty(p) && (o[p] = n[p]);
            return o;
        }(this.query);
        m.EIO = c('.....').protocol, m.transport = l;
        var n = this.transportOptions[l] || {};
        return this.id && (m.sid = this.id), new (c('.....'))[l]({
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
    }, k.prototype.open = function () {
        var l;
        if (this.rememberUpgrade && k.priorWebsocketSuccess && -1 !== this.transports.indexOf('websocket'))
            l = 'websocket';
        else {
            if (0 === this.transports.length) {
                var m = this;
                return void setTimeout(function () {
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
    }, k.prototype.setTransport = function (l) {
        g('setting transport %s', l.name);
        var m = this;
        this.transport && (g('clearing existing transport %s', this.transport.name), this.transport.removeAllListeners()), this.transport = l, l.on('drain', function () {
            m.onDrain();
        }).on('packet', function (n) {
            m.onPacket(n);
        }).on('error', function (n) {
            m.onError(n);
        }).on('close', function () {
            m.onClose('transport close');
        });
    }, k.prototype.probe = function (l) {
        g('probing transport "%s"', l);
        var m = this.createTransport(l, { probe: 1 }), n = !1, o = this;
        function p() {
            if (o.onlyBinaryUpgrades) {
                var q = !this.supportsBinary && o.transport.supportsBinary;
                n = n || p;
            }
            n || (g('probe transport "%s" opened', l), m.send([{
                    type: 'ping',
                    data: 'probe'
                }]), m.once('packet', function (r) {
                if (!n)
                    if ('pong' === r.type && 'probe' === r.data) {
                        if (g('probe transport "%s" pong', l), o.upgrading = !0, o.emit('upgrading', m), !m)
                            return;
                        k.priorWebsocketSuccess = 'websocket' === m.name, g('pausing current transport "%s"', o.transport.name), o.transport.pause(function () {
                            n || 'closed' !== o.readyState && (g('changing transport and sending upgrade packet'), _x(), o.setTransport(m), m.send([{ type: 'upgrade' }]), o.emit('upgrade', m), m = null, o.upgrading = !1, o.flush());
                        });
                    } else {
                        g('probe transport "%s" failed', l);
                        var s = new Error('probe error');
                        s.transport = m.name, o.emit('upgradeError', s);
                    }
            }));
        }
        function r() {
            n || (n = !0, _x(), m.close(), m = null);
        }
        function s(t) {
            var u = new Error('probe error: ' + t);
            p.transport = m.name, r(), g('probe transport "%s" failed because of error: %s', l, t), o.emit('upgradeError', p);
        }
        function u() {
            s('transport closed');
        }
        function v() {
            s('socket closed');
        }
        function w(x) {
            m && x.name !== m.name && (g('"%s" works - aborting "%s"', x.name, m.name), r());
        }
        function _x() {
            m.removeListener('open', p), m.removeListener('error', s), m.removeListener('close', u), o.removeListener('close', v), o.removeListener('upgrading', w);
        }
        k.priorWebsocketSuccess = !1, m.once('open', p), m.once('error', s), m.once('close', u), this.once('close', v), this.once('upgrading', w), m.open();
    }, k.prototype.onOpen = function () {
        if (g('socket open'), this.readyState = 'open', k.priorWebsocketSuccess = 'websocket' === this.transport.name, this.emit('open'), this.flush(), 'open' === this.readyState && this.upgrade && this.transport.pause) {
            g('starting upgrade probes');
            for (var l = 0, m = this.upgrades.length; l < m; l++)
                this.probe(this.upgrades[l]);
        }
    }, k.prototype.onPacket = function (l) {
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
    }, k.prototype.onHandshake = function (l) {
        this.emit('handshake', l), this.id = l.sid, this.transport.query.sid = l.sid, this.upgrades = this.filterUpgrades(l.upgrades), this.pingInterval = l.pingInterval, this.pingTimeout = l.pingTimeout, this.onOpen(), 'closed' !== this.readyState && (this.setPing(), this.removeListener('heartbeat', this.onHeartbeat), this.on('heartbeat', this.onHeartbeat));
    }, k.prototype.onHeartbeat = function (l) {
        clearTimeout(this.pingTimeoutTimer);
        var m = this;
        m.pingTimeoutTimer = setTimeout(function () {
            'closed' !== m.readyState && m.onClose('ping timeout');
        }, l || m.pingInterval + m.pingTimeout);
    }, k.prototype.setPing = function () {
        var l = this;
        clearTimeout(l.pingIntervalTimer), l.pingIntervalTimer = setTimeout(function () {
            g('writing ping packet - expecting pong within %sms', l.pingTimeout), l.ping(), l.onHeartbeat(l.pingTimeout);
        }, l.pingInterval);
    }, k.prototype.ping = function () {
        var l = this;
        this.sendPacket('ping', function () {
            l.emit('ping');
        });
    }, k.prototype.onDrain = function () {
        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit('drain') : this.flush();
    }, k.prototype.flush = function () {
        'closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (g('flushing %d packets in socket', this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit('flush'));
    }, k.prototype.write = k.prototype.send = function (l, m, n) {
        return this.sendPacket('message', l, m, n), this;
    }, k.prototype.sendPacket = function (l, m, n, o) {
        if ('function' == typeof m && (o = m, m = void 0), 'function' == typeof n && (o = n, n = null), 'closing' !== this.readyState && 'closed' !== this.readyState) {
            (n = n || {}).compress = !1 !== n.compress;
            var p = {
                type: l,
                data: m,
                options: n
            };
            this.emit('packetCreate', p), this.writeBuffer.push(p), o && this.once('flush', o), this.flush();
        }
    }, k.prototype.close = function () {
        if ('opening' === this.readyState || 'open' === this.readyState) {
            this.readyState = 'closing';
            var l = this;
            this.writeBuffer.length ? this.once('drain', function () {
                this.upgrading ? f() : e();
            }) : this.upgrading ? f() : e();
        }
        function m() {
            l.onClose('forced close'), g('socket closing - telling transport to close'), l.transport.close();
        }
        function n() {
            l.removeListener('upgrade', n), l.removeListener('upgradeError', n), m();
        }
        function o() {
            l.once('upgrade', n), l.once('upgradeError', n);
        }
        return this;
    }, k.prototype.onError = function (l) {
        g('socket error %j', l), k.priorWebsocketSuccess = !1, this.emit('error', l), this.onClose('transport error', l);
    }, k.prototype.onClose = function (l, m) {
        if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
            g('socket close with reason: "%s"', l);
            clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners('close'), this.transport.close(), this.transport.removeAllListeners(), this.readyState = 'closed', this.id = null, this.emit('close', l, m), this.writeBuffer = [], this.prevBufferLen = 0;
        }
    }, k.prototype.filterUpgrades = function (l) {
        for (var m = [], n = 0, o = l.length; n < o; n++)
            ~h(this.transports, l[n]) && m.push(l[n]);
        return m;
    };
}), c.register('.....', function (d, e) {
    var f, g;
    a(d.exports, 'polling', function () {
        return f;
    }, function (h) {
        return f = h;
    }), a(d.exports, 'websocket', function () {
        return g;
    }, function (h) {
        return g = h;
    });
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    f = function (l) {
        var m = !1, n = !1, o = !1 !== l.jsonp;
        if ('undefined' != typeof location) {
            var p = 'https:' === location.protocol, q = location.port;
            q || (q = p ? 443 : 80), m = l.hostname !== location.hostname || q !== l.port, n = l.secure !== p;
        }
        if (l.xdomain = m, l.xscheme = n, 'open' in new h(l) && !l.forceJSONP)
            return new i(l);
        if (!o)
            throw new Error('JSONP disabled');
        return new j(l);
    }, g = k;
}), c.register('.....', function (d, e) {
    var f = c('.....'), g = c('.....');
    d.exports = function (h) {
        var i = h.xdomain, j = h.xscheme, k = h.enablesXDR;
        try {
            if ('undefined' != typeof XMLHttpRequest && (!i || f))
                return new XMLHttpRequest();
        } catch (h) {
        }
        try {
            if ('undefined' != typeof XDomainRequest && !j && k)
                return new XDomainRequest();
        } catch (h) {
        }
        if (!i)
            try {
                return new g[(['Active'].concat('Object').join('X'))]('Microsoft.XMLHTTP');
            } catch (h) {
            }
    };
}), c.register('.....', function (d, e) {
    try {
        d.exports = 'undefined' != typeof XMLHttpRequest && 'withCredentials' in new XMLHttpRequest();
    } catch (e) {
        d.exports = !1;
    }
}), c.register('.....', function (d, e) {
    d.exports = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : Function('return this')();
}), c.register('.....', function (d, e) {
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....')('engine.io-client:polling-xhr'), k = c('.....');
    function l() {
    }
    function m(n) {
        if (g.call(this, n), this.requestTimeout = n.requestTimeout, this.extraHeaders = n.extraHeaders, 'undefined' != typeof location) {
            var o = 'https:' === location.protocol, p = location.port;
            p || (p = o ? 443 : 80), this.xd = 'undefined' != typeof location && n.hostname !== location.hostname || p !== n.port, this.xs = n.secure !== o;
        }
    }
    function p(q) {
        this.method = q.method || 'GET', this.uri = q.uri, this.xd = !!q.xd, this.xs = !!q.xs, this.async = !1 !== q.async, this.data = void 0 !== q.data ? q.data : null, this.agent = q.agent, this.isBinary = q.isBinary, this.supportsBinary = q.supportsBinary, this.enablesXDR = q.enablesXDR, this.withCredentials = q.withCredentials, this.requestTimeout = q.requestTimeout, this.pfx = q.pfx, this.key = q.key, this.passphrase = q.passphrase, this.cert = q.cert, this.ca = q.ca, this.ciphers = q.ciphers, this.rejectUnauthorized = q.rejectUnauthorized, this.extraHeaders = q.extraHeaders, this.create();
    }
    if (d.exports = m, d.exports.Request = p, i(m, g), m.prototype.supportsBinary = !0, m.prototype.request = function (q) {
            return (q = q || {}).uri = this.uri(), q.xd = this.xd, q.xs = this.xs, q.agent = this.agent || !1, q.supportsBinary = this.supportsBinary, q.enablesXDR = this.enablesXDR, q.withCredentials = this.withCredentials, q.pfx = this.pfx, q.key = this.key, q.passphrase = this.passphrase, q.cert = this.cert, q.ca = this.ca, q.ciphers = this.ciphers, q.rejectUnauthorized = this.rejectUnauthorized, q.requestTimeout = this.requestTimeout, q.extraHeaders = this.extraHeaders, new p(q);
        }, m.prototype.doWrite = function (q, r) {
            var s = 'string' != typeof q && void 0 !== q, t = this.request({
                    method: 'POST',
                    data: q,
                    isBinary: s
                }), u = this;
            t.on('success', r), t.on('error', function (v) {
                u.onError('xhr post error', v);
            }), this.sendXhr = t;
        }, m.prototype.doPoll = function () {
            j('xhr poll');
            var q = this.request(), r = this;
            q.on('data', function (s) {
                r.onData(s);
            }), q.on('error', function (s) {
                r.onError('xhr poll error', s);
            }), this.pollXhr = q;
        }, h(p.prototype), p.prototype.create = function () {
            var q = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR
            };
            q.pfx = this.pfx, q.key = this.key, q.passphrase = this.passphrase, q.cert = this.cert, q.ca = this.ca, q.ciphers = this.ciphers, q.rejectUnauthorized = this.rejectUnauthorized;
            var r = this.xhr = new f(q), s = this;
            try {
                j('xhr open %s: %s', this.method, this.uri), r.open(this.method, this.uri, this.async);
                try {
                    if (this.extraHeaders)
                        for (var t in (r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0), this.extraHeaders))
                            this.extraHeaders.hasOwnProperty(t) && r.setRequestHeader(t, this.extraHeaders[t]);
                } catch (q) {
                }
                if ('POST' === this.method)
                    try {
                        this.isBinary ? r.setRequestHeader('Content-type', 'application/octet-stream') : r.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
                    } catch (q) {
                    }
                try {
                    r.setRequestHeader('Accept', '*/*');
                } catch (q) {
                }
                'withCredentials' in r && (r.withCredentials = this.withCredentials), this.requestTimeout && (r.timeout = this.requestTimeout), this.hasXDR() ? (r.onload = function () {
                    s.onLoad();
                }, r.onerror = function () {
                    s.onError(r.responseText);
                }) : r.onreadystatechange = function () {
                    if (2 === r.readyState)
                        try {
                            var u = r.getResponseHeader('Content-Type');
                            (s.supportsBinary && 'application/octet-stream' === u || 'application/octet-stream; charset=UTF-8' === u) && (r.responseType = 'arraybuffer');
                        } catch (u) {
                        }
                    4 === r.readyState && (200 === r.status || 1223 === r.status ? s.onLoad() : setTimeout(function () {
                        s.onError('number' == typeof r.status ? r.status : 0);
                    }, 0));
                }, j('xhr data %s', this.data), r.send(this.data);
            } catch (q) {
                return void setTimeout(function () {
                    s.onError(q);
                }, 0);
            }
            'undefined' != typeof document && (this.index = p.requestsCount++, p.requests[this.index] = this);
        }, p.prototype.onSuccess = function () {
            this.emit('success'), this.cleanup();
        }, p.prototype.onData = function (q) {
            this.emit('data', q), this.onSuccess();
        }, p.prototype.onError = function (q) {
            this.emit('error', q), this.cleanup(!0);
        }, p.prototype.cleanup = function (q) {
            if (void 0 !== this.xhr && null !== this.xhr) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = l : this.xhr.onreadystatechange = l, q)
                    try {
                        this.xhr.abort();
                    } catch (q) {
                    }
                'undefined' != typeof document && delete p.requests[this.index], this.xhr = null;
            }
        }, p.prototype.onLoad = function () {
            var q;
            try {
                var r;
                try {
                    r = this.xhr.getResponseHeader('Content-Type');
                } catch (q) {
                }
                q = ('application/octet-stream' === r || 'application/octet-stream; charset=UTF-8' === r) && this.xhr.response || this.xhr.responseText;
            } catch (q) {
                this.onError(q);
            }
            null != q && this.onData(q);
        }, p.prototype.hasXDR = function () {
            return 'undefined' != typeof XDomainRequest && !this.xs && this.enablesXDR;
        }, p.prototype.abort = function () {
            this.cleanup();
        }, p.requestsCount = 0, p.requests = {}, 'undefined' != typeof document)
        if ('function' == typeof attachEvent)
            attachEvent('onunload', _q);
        else if ('function' == typeof addEventListener) {
            addEventListener('onpagehide' in k ? 'pagehide' : 'unload', _q, !1);
        }
    function _q() {
        for (var r in p.requests)
            p.requests.hasOwnProperty(r) && p.requests[r].abort();
    }
}), c.register('.....', function (d, e) {
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....')('engine.io-client:polling');
    d.exports = _m;
    var l = null != new (c('.....'))({ xdomain: !1 }).responseType;
    function _m(n) {
        var o = n && n.forceBase64;
        l && !o || (this.supportsBinary = !1), f.call(this, n);
    }
    i(_m, f), _m.prototype.name = 'polling', _m.prototype.doOpen = function () {
        this.poll();
    }, _m.prototype.pause = function (o) {
        var p = this;
        function q() {
            k('paused'), p.readyState = 'paused', o();
        }
        if (this.readyState = 'pausing', this.polling || !this.writable) {
            var r = 0;
            this.polling && (k('we are currently polling - waiting to pause'), r++, this.once('pollComplete', function () {
                k('pre-pause polling complete'), --r || q();
            })), this.writable || (k('we are currently writing - waiting to pause'), r++, this.once('drain', function () {
                k('pre-pause writing complete'), --r || q();
            }));
        } else
            q();
    }, _m.prototype.poll = function () {
        k('polling'), this.polling = !0, this.doPoll(), this.emit('poll');
    }, _m.prototype.onData = function (o) {
        var p = this;
        k('polling got data %s', o);
        h.decodePayload(o, this.socket.binaryType, function (q, r, s) {
            if ('opening' === p.readyState && p.onOpen(), 'close' === q.type)
                return p.onClose(), !1;
            p.onPacket(q);
        }), 'closed' !== this.readyState && (this.polling = !1, this.emit('pollComplete'), 'open' === this.readyState ? this.poll() : k('ignoring poll - transport state "%s"', this.readyState));
    }, _m.prototype.doClose = function () {
        var o = this;
        function p() {
            k('writing close packet'), o.write([{ type: 'close' }]);
        }
        'open' === this.readyState ? (k('transport open - closing'), p()) : (k('transport not open - deferring close'), this.once('open', p));
    }, _m.prototype.write = function (o) {
        var p = this;
        this.writable = !1;
        var q = function () {
            p.writable = !0, p.emit('drain');
        };
        h.encodePayload(o, this.supportsBinary, function (r) {
            p.doWrite(r, q);
        });
    }, _m.prototype.uri = function () {
        var o = this.query || {}, p = this.secure ? 'https' : 'http', q = '';
        return !1 !== this.timestampRequests && (o[this.timestampParam] = j()), this.supportsBinary || o.sid || (o.b64 = 1), o = g.encode(o), this.port && ('https' === p && 443 !== Number(this.port) || 'http' === p && 80 !== Number(this.port)) && (q = ':' + this.port), o.length && (o = '?' + o), p + '://' + (-1 !== this.hostname.indexOf(':') ? '[' + this.hostname + ']' : this.hostname) + q + this.path + o;
    };
}), c.register('.....', function (d, e) {
    var f = c('.....'), g = c('.....');
    function h(i) {
        this.path = i.path, this.hostname = i.hostname, this.port = i.port, this.secure = i.secure, this.query = i.query, this.timestampParam = i.timestampParam, this.timestampRequests = i.timestampRequests, this.readyState = '', this.agent = i.agent || !1, this.socket = i.socket, this.enablesXDR = i.enablesXDR, this.withCredentials = i.withCredentials, this.pfx = i.pfx, this.key = i.key, this.passphrase = i.passphrase, this.cert = i.cert, this.ca = i.ca, this.ciphers = i.ciphers, this.rejectUnauthorized = i.rejectUnauthorized, this.forceNode = i.forceNode, this.isReactNative = i.isReactNative, this.extraHeaders = i.extraHeaders, this.localAddress = i.localAddress;
    }
    d.exports = h, g(h.prototype), h.prototype.onError = function (i, j) {
        var k = new Error(i);
        return k.type = 'TransportError', k.description = j, this.emit('error', k), this;
    }, h.prototype.open = function () {
        return 'closed' !== this.readyState && '' !== this.readyState || (this.readyState = 'opening', this.doOpen()), this;
    }, h.prototype.close = function () {
        return 'opening' !== this.readyState && 'open' !== this.readyState || (this.doClose(), this.onClose()), this;
    }, h.prototype.send = function (i) {
        if ('open' !== this.readyState)
            throw new Error('Transport not open');
        this.write(i);
    }, h.prototype.onOpen = function () {
        this.readyState = 'open', this.writable = !0, this.emit('open');
    }, h.prototype.onData = function (i) {
        var j = f.decodePacket(i, this.socket.binaryType);
        this.onPacket(j);
    }, h.prototype.onPacket = function (i) {
        this.emit('packet', i);
    }, h.prototype.onClose = function () {
        this.readyState = 'closed', this.emit('close');
    };
}), c.register('.....', function (d, e) {
    var f, g, h, i, j, k, l, m, n, o, p;
    a(d.exports, 'protocol', function () {
        return f;
    }, function (q) {
        return f = q;
    }), a(d.exports, 'packets', function () {
        return g;
    }, function (q) {
        return g = q;
    }), a(d.exports, 'encodePacket', function () {
        return h;
    }, function (q) {
        return h = q;
    }), a(d.exports, 'encodeBase64Packet', function () {
        return i;
    }, function (q) {
        return i = q;
    }), a(d.exports, 'decodePacket', function () {
        return j;
    }, function (q) {
        return j = q;
    }), a(d.exports, 'decodeBase64Packet', function () {
        return k;
    }, function (q) {
        return k = q;
    }), a(d.exports, 'encodePayload', function () {
        return l;
    }, function (q) {
        return l = q;
    }), a(d.exports, 'encodePayloadAsBlob', function () {
        return o;
    }, function (q) {
        return o = q;
    }), a(d.exports, 'encodePayloadAsArrayBuffer', function () {
        return n;
    }, function (q) {
        return n = q;
    }), a(d.exports, 'decodePayload', function () {
        return m;
    }, function (q) {
        return m = q;
    }), a(d.exports, 'decodePayloadAsBinary', function () {
        return p;
    }, function (q) {
        return p = q;
    });
    var q, r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....');
    'undefined' != typeof ArrayBuffer && (q = c('.....'));
    var w = 'undefined' != typeof navigator && /Android/i.test(navigator.userAgent), x = 'undefined' != typeof navigator && /PhantomJS/i.test(navigator.userAgent), y = w || x;
    f = 3;
    var z = g = {
            open: 0,
            close: 1,
            ping: 2,
            pong: 3,
            message: 4,
            upgrade: 5,
            noop: 6
        }, A = r(z), B = {
            type: 'error',
            data: 'parser error'
        }, C = c('.....');
    function D(E, F, G) {
        for (var H = new Array(E.length), I = u(E.length, G), J = function (K, L, M) {
                    F(L, function (N, O) {
                        H[K] = O, M(N, H);
                    });
                }, K = 0; K < E.length; K++)
            J(K, E[K], I);
    }
    K = function (I, J, K, L) {
        'function' == typeof J && (L = J, J = !1), 'function' == typeof K && (L = K, K = null);
        var M = void 0 === I.data ? void 0 : I.data.buffer || I.data;
        if ('undefined' != typeof ArrayBuffer && M instanceof ArrayBuffer)
            return function (N, O, P) {
                if (!O)
                    return i(N, P);
                var Q = N.data, R = new Uint8Array(Q), S = new Uint8Array(1 + Q.byteLength);
                S[0] = z[N.type];
                for (var T = 0; T < R.length; T++)
                    S[T + 1] = R[T];
                return P(S.buffer);
            }(I, J, L);
        if (void 0 !== C && M instanceof C)
            return function (N, O, P) {
                if (!O)
                    return i(N, P);
                if (y)
                    return function (Q, R, S) {
                        if (!R)
                            return i(Q, S);
                        var T = new FileReader();
                        return T.onload = function () {
                            K({
                                type: Q.type,
                                data: T.result
                            }, R, !0, S);
                        }, T.readAsArrayBuffer(Q.data);
                    }(N, O, P);
                var Q = new Uint8Array(1);
                Q[0] = z[N.type];
                var R = new C([
                    Q.buffer,
                    N.data
                ]);
                return P(R);
            }(I, J, L);
        if (M && M.base64)
            return function (N, O) {
                var P = 'b' + J[N.type] + N.data.data;
                return O(P);
            }(I, L);
        var N = z[I.type];
        return void 0 !== I.data && (N += K ? v.encode(String(I.data), { strict: !1 }) : String(I.data)), L('' + N);
    }, i = function (I, J) {
        var K, L = 'b' + J[I.type];
        if (void 0 !== C && I.data instanceof C) {
            var M = new FileReader();
            return M.onload = function () {
                var N = M.result.split(',')[1];
                J(L + N);
            }, M.readAsDataURL(I.data);
        }
        try {
            K = String.fromCharCode.apply(null, new Uint8Array(I.data));
        } catch (J) {
            for (var N = new Uint8Array(I.data), O = new Array(N.length), P = 0; P < N.length; P++)
                O[P] = N[P];
            K = String.fromCharCode.apply(null, O);
        }
        return L += btoa(K), J(L);
    }, j = function (I, J, K) {
        if (void 0 === I)
            return B;
        if ('string' == typeof I) {
            if ('b' === I.charAt(0))
                return k(I.substr(1), J);
            if (K && !1 === (I = function (L) {
                    try {
                        L = v.decode(L, { strict: !1 });
                    } catch (L) {
                        return !1;
                    }
                    return L;
                }(I)))
                return B;
            var L = I.charAt(0);
            return Number(L) == L && A[L] ? I.length > 1 ? {
                type: A[L],
                data: I.substring(1)
            } : { type: A[L] } : B;
        }
        L = new Uint8Array(I)[0];
        var M = t(I, 1);
        return C && 'blob' === J && (M = new C([M])), {
            type: A[L],
            data: M
        };
    }, k = function (I, J) {
        var K = A[I.charAt(0)];
        if (!q)
            return {
                type: K,
                data: {
                    base64: !0,
                    data: I.substr(1)
                }
            };
        var L = q.decode(I.substr(1));
        return 'blob' === J && C && (L = new C([L])), {
            type: K,
            data: L
        };
    }, l = function (I, J, K) {
        'function' == typeof J && (K = J, J = null);
        var L = s(I);
        if (J && L)
            return C && !y ? o(I, K) : n(I, K);
        if (!I.length)
            return K('0:');
        D(I, function (M, N) {
            K(M, !!L && J, !1, function (O) {
                N(null, function (P) {
                    return P.length + ':' + P;
                }(O));
            });
        }, function (M, N) {
            return K(N.join(''));
        });
    }, m = function (I, J, K) {
        if ('string' != typeof I)
            return p(I, J, K);
        var L;
        if ('function' == typeof J && (K = J, J = null), '' === I)
            return K(B, 0, 1);
        for (var M, N, O = '', P = 0, Q = I.length; P < Q; P++) {
            var R = I.charAt(P);
            if (':' === R) {
                if ('' === O || O != (M = Number(O)))
                    return K(B, 0, 1);
                if (O != (N = I.substr(P + 1, M)).length)
                    return K(B, 0, 1);
                if (N.length) {
                    if (L = j(N, J, !1), B.type === L.type && B.data === L.data)
                        return K(B, 0, 1);
                    if (!1 === K(L, P + M, Q))
                        return;
                }
                P += M, O = '';
            } else
                O += R;
        }
        return '' !== O ? K(B, 0, 1) : void 0;
    }, n = function (I, J) {
        if (!I.length)
            return J(new ArrayBuffer(0));
        D(I, function (K, L) {
            K(K, !0, !0, function (M) {
                return L(null, M);
            });
        }, function (K, L) {
            var M = L.reduce(function (N, O) {
                    var P;
                    return N + (P = 'string' == typeof O ? O.length : O.byteLength).toString().length + P + 2;
                }, 0), N = new Uint8Array(M), O = 0;
            return L.forEach(function (P) {
                var Q = 'string' == typeof P, R = P;
                if (Q) {
                    for (var S = new Uint8Array(P.length), T = 0; T < P.length; T++)
                        S[T] = P.charCodeAt(T);
                    R = S.buffer;
                }
                N[O++] = Q ? 0 : 1;
                var U = R.byteLength.toString();
                for (T = 0; T < U.length; T++)
                    N[O++] = parseInt(U[T]);
                N[O++] = 255;
                for (S = new Uint8Array(R), T = 0; T < S.length; T++)
                    N[O++] = S[T];
            }), J(N.buffer);
        });
    }, o = function (I, J) {
        D(I, function (K, L) {
            K(K, !0, !0, function (M) {
                var N = new Uint8Array(1);
                if (N[0] = 1, 'string' == typeof M) {
                    for (var O = new Uint8Array(M.length), P = 0; P < M.length; P++)
                        O[P] = M.charCodeAt(P);
                    M = O.buffer, N[0] = 0;
                }
                var Q = (M instanceof ArrayBuffer ? M.byteLength : M.size).toString(), R = new Uint8Array(Q.length + 1);
                for (P = 0; P < Q.length; P++)
                    R[P] = parseInt(Q[P]);
                if (R[Q.length] = 255, C) {
                    var S = new C([
                        N.buffer,
                        R.buffer,
                        M
                    ]);
                    L(null, S);
                }
            });
        }, function (K, L) {
            return J(new C(L));
        });
    }, p = function (I, J, K) {
        'function' == typeof J && (K = J, J = null);
        for (var L = I, M = []; L.byteLength > 0;) {
            for (var N = new Uint8Array(L), O = 0 === N[0], P = '', Q = 1; 255 !== N[Q]; Q++) {
                if (P.length > 310)
                    return K(B, 0, 1);
                P += N[Q];
            }
            L = t(L, 2 + P.length), P = parseInt(P);
            var R = t(L, 0, P);
            if (O)
                try {
                    R = String.fromCharCode.apply(null, new Uint8Array(R));
                } catch (I) {
                    var S = new Uint8Array(R);
                    R = '';
                    for (Q = 0; Q < S.length; Q++)
                        R += String.fromCharCode(S[Q]);
                }
            M.push(R), L = t(L, P);
        }
        var T = M.length;
        M.forEach(function (U, V) {
            K(j(U, J, !0), V, T);
        });
    };
}), c.register('.....', function (d, e) {
    d.exports = Object.keys || function (f) {
        var g = [], h = Object.prototype.hasOwnProperty;
        for (var i in f)
            h.call(f, i) && g.push(i);
        return g;
    };
}), c.register('.....', function (d, e) {
    var f = c('.....').Buffer, g = c('.....'), h = Object.prototype.toString, i = 'function' == typeof Blob || 'undefined' != typeof Blob && '[object BlobConstructor]' === h.call(Blob), j = 'function' == typeof File || 'undefined' != typeof File && '[object FileConstructor]' === h.call(File);
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
        for (var n in k)
            if (Object.prototype.hasOwnProperty.call(k, n) && d(k[n]))
                return !0;
        return !1;
    };
}), c.register('.....', function (d, e) {
    var f = {}.toString;
    d.exports = Array.isArray || function (g) {
        return '[object Array]' == f.call(g);
    };
}), c.register('.....', function (d, e) {
    d.exports = function (f, g, h) {
        var i = f.byteLength;
        if (g = g || 0, h = h || i, f.slice)
            return f.slice(g, h);
        if (g < 0 && (g += i), h < 0 && (h += i), h > i && (h = i), g >= i || g >= h || 0 === i)
            return new ArrayBuffer(0);
        for (var j = new Uint8Array(f), k = new Uint8Array(h - g), l = g, m = 0; l < h; l++, m++)
            k[m] = j[l];
        return k.buffer;
    };
}), c.register('.....', function (d, e) {
    function f() {
    }
    d.exports = function (g, h, i) {
        var j = !1;
        return i = i || f, _k.count = g, 0 === g ? h() : _k;
        function _k(l, m) {
            if (_k.count <= 0)
                throw new Error('after called too many times');
            --_k.count, l ? (j = !0, h(l), h = i) : 0 !== _k.count || j || h(null, m);
        }
    };
}), c.register('.....', function (d, e) {
    var f, g, h, i = String.fromCharCode;
    function j(k) {
        for (var l, m, n = [], o = 0, p = k.length; o < p;)
            (l = k.charCodeAt(o++)) >= 55296 && l <= 56319 && o < p ? 56320 == (64512 & (m = k.charCodeAt(o++))) ? n.push(((1023 & l) << 10) + (1023 & m) + 65536) : (n.push(l), o--) : n.push(l);
        return n;
    }
    function p(q, r) {
        if (q >= 55296 && q <= 57343) {
            if (r)
                throw Error('Lone surrogate U+' + q.toString(16).toUpperCase() + ' is not a scalar value');
            return !1;
        }
        return !0;
    }
    function q(r, s) {
        return p(r >> s & 63 | 128);
    }
    function r(s, t) {
        if (0 == (4294967168 & s))
            return p(s);
        var u = '';
        return 0 == (4294965248 & s) ? u = p(s >> 6 & 31 | 192) : 0 == (4294901760 & s) ? (p(s, t) || (s = 65533), u = p(s >> 12 & 15 | 224), u += q(s, 6)) : 0 == (4292870144 & s) && (u = p(s >> 18 & 7 | 240), u += q(s, 12), u += q(s, 6)), u += p(63 & s | 128);
    }
    function t() {
        if (o >= n)
            throw Error('Invalid byte index');
        var u = 255 & u[o];
        if (o++, 128 == (192 & u))
            return 63 & u;
        throw Error('Invalid continuation byte');
    }
    function v(w) {
        var x, y;
        if (o > n)
            throw Error('Invalid byte index');
        if (o == n)
            return !1;
        if (x = 255 & u[o], o++, 0 == (128 & x))
            return x;
        if (192 == (224 & x)) {
            if ((y = (31 & x) << 6 | t()) >= 128)
                return y;
            throw Error('Invalid continuation byte');
        }
        if (224 == (240 & x)) {
            if ((y = (15 & x) << 12 | t() << 6 | t()) >= 2048)
                return p(y, w) ? y : 65533;
            throw Error('Invalid continuation byte');
        }
        if (240 == (248 & x) && (y = (7 & x) << 18 | t() << 12 | t() << 6 | t()) >= 65536 && y <= 1114111)
            return y;
        throw Error('Invalid UTF-8 detected');
    }
    u.exports = {
        version: '2.1.2',
        encode: function (y, z) {
            for (var A = !1 !== (z = z || {}).strict, B = j(y), C = B.length, D = -1, E = ''; ++D < C;)
                E += r(B[D], A);
            return E;
        },
        decode: function (y, z) {
            var A = !1 !== (z = z || {}).strict;
            u = j(y), n = u.length, o = 0;
            for (var B, C = []; !1 !== (B = v(A));)
                C.push(B);
            return function (D) {
                for (var E, F = D.length, G = -1, H = ''; ++G < F;)
                    (E = D[G]) > 65535 && (H += y((E -= 65536) >>> 10 & 1023 | 55296), E = 56320 | 1023 & E), H += y(E);
                return H;
            }(C);
        }
    };
}), c.register('.....', function (d, e) {
    var f, g, h;
    a(d.exports, 'encode', function () {
        return f;
    }, function (i) {
        return f = i;
    }), a(d.exports, 'decode', function () {
        return g;
    }, function (i) {
        return g = i;
    }), h = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', f = function (i) {
        var j, k = new Uint8Array(i), l = k.length, m = '';
        for (j = 0; j < l; j += 3)
            m += h[k[j] >> 2], m += h[(3 & k[j]) << 4 | k[j + 1] >> 4], m += h[(15 & k[j + 1]) << 2 | k[j + 2] >> 6], m += h[63 & k[j + 2]];
        return l % 3 == 2 ? m = m.substring(0, m.length - 1) + '=' : l % 3 == 1 && (m = m.substring(0, m.length - 2) + '=='), m;
    }, g = function (i) {
        var j, k, l, m, n, o = 0.75 * i.length, p = i.length, q = 0;
        '=' === i[i.length - 1] && (o--, '=' === i[i.length - 2] && o--);
        var r = new ArrayBuffer(o), s = new Uint8Array(r);
        for (j = 0; j < p; j += 4)
            k = h.indexOf(i[j]), l = h.indexOf(i[j + 1]), m = h.indexOf(i[j + 2]), n = h.indexOf(i[j + 3]), s[q++] = k << 2 | l >> 4, s[q++] = (15 & l) << 4 | m >> 2, s[q++] = (3 & m) << 6 | 63 & n;
        return r;
    };
}), c.register('.....', function (d, e) {
    var f = void 0 !== f ? f : 'undefined' != typeof WebKitBlobBuilder ? WebKitBlobBuilder : 'undefined' != typeof MSBlobBuilder ? MSBlobBuilder : 'undefined' != typeof MozBlobBuilder && MozBlobBuilder, g = function () {
            try {
                return 2 === new Blob(['hi']).size;
            } catch (d) {
                return !1;
            }
        }(), h = g && function () {
            try {
                return 2 === new Blob([new Uint8Array([
                        1,
                        2
                    ])]).size;
            } catch (d) {
                return !1;
            }
        }(), i = f && f.prototype.append && f.prototype.getBlob;
    function j(k) {
        return k.map(function (l) {
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
        return j(l).forEach(function (o) {
            n.append(o);
        }), m.type ? n.getBlob(m.type) : n.getBlob();
    }
    function m(n, o) {
        return new Blob(j(n), o || {});
    }
    'undefined' != typeof Blob && (k.prototype = Blob.prototype, m.prototype = Blob.prototype), d.exports = n ? h ? Blob : m : i ? k : void 0;
}), c.register('.....', function (d, e) {
    var f, g;
    a(d.exports, 'encode', function () {
        return f;
    }, function (h) {
        return f = h;
    }), a(d.exports, 'decode', function () {
        return g;
    }, function (h) {
        return g = h;
    }), f = function (h) {
        var i = '';
        for (var j in h)
            h.hasOwnProperty(j) && (i.length && (i += '&'), i += encodeURIComponent(j) + '=' + encodeURIComponent(h[j]));
        return i;
    }, g = function (h) {
        for (var i = {}, j = h.split('&'), k = 0, l = j.length; k < l; k++) {
            var m = j[k].split('=');
            i[decodeURIComponent(m[0])] = decodeURIComponent(m[1]);
        }
        return i;
    };
}), c.register('.....', function (d, e) {
    d.exports = function (f, g) {
        var h = function () {
        };
        h.prototype = g.prototype, f.prototype = new h(), f.prototype.constructor = f;
    };
}), c.register('.....', function (d, e) {
    var f, g = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''), h = {}, i = 0, j = 0;
    function k(l) {
        var m = '';
        do {
            m = g[l % 64] + m, l = Math.floor(l / 64);
        } while (l > 0);
        return m;
    }
    function m() {
        var n = k(+new Date());
        return n !== f ? (i = 0, f = n) : n + '.' + k(i++);
    }
    for (; j < 64; j++)
        h[g[j]] = j;
    m.encode = k, m.decode = function (o) {
        var p = 0;
        for (j = 0; j < o.length; j++)
            p = 64 * p + h[o.charAt(j)];
        return p;
    }, n.exports = m;
}), c.register('.....', function (d, e) {
    var f = c('.....');
    function g() {
        var h;
        try {
            h = e.storage.debug;
        } catch (h) {
        }
        return !h && void 0 !== f && 'env' in f && (h = void 0), h;
    }
    (e = h.exports = c('.....')).log = function () {
        return 'object' == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }, e.formatArgs = function (i) {
        var j = this.useColors;
        if (i[0] = (j ? '%c' : '') + this.namespace + (j ? ' %c' : ' ') + i[0] + (j ? '%c ' : ' ') + '+' + e.humanize(this.diff), !j)
            return;
        var k = 'color: ' + this.color;
        i.splice(1, 0, k, 'color: inherit');
        var l = 0, m = 0;
        i[0].replace(/%[a-zA-Z%]/g, function (n) {
            '%%' !== n && (l++, '%c' === n && (m = l));
        }), i.splice(m, 0, k);
    }, e.save = function (i) {
        try {
            null == i ? e.storage.removeItem('debug') : e.storage.debug = i;
        } catch (i) {
        }
    }, e.load = g, e.useColors = function () {
        return !('undefined' == typeof window || !window.process || 'renderer' !== window.process.type) || ('undefined' == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ('undefined' != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || 'undefined' != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }, e.storage = 'undefined' != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
            return window.localStorage;
        } catch (h) {
        }
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
    ], e.formatters.j = function (i) {
        try {
            return JSON.stringify(i);
        } catch (i) {
            return '[UnexpectedJSONParseError]: ' + i.message;
        }
    }, e.enable(g());
}), c.register('.....', function (d, e) {
    function f(g) {
        var h;
        function i() {
            if (i.enabled) {
                var j = i, k = +new Date(), l = k - (h || k);
                g.diff = l, g.prev = h, g.curr = k, h = k;
                for (var m = new Array(arguments.length), n = 0; n < m.length; n++)
                    m[n] = arguments[n];
                m[0] = e.coerce(m[0]), 'string' != typeof m[0] && m.unshift('%O');
                var o = 0;
                m[0] = m[0].replace(/%([a-zA-Z%])/g, function (p, q) {
                    if ('%%' === p)
                        return p;
                    o++;
                    var r = e.formatters[q];
                    if ('function' == typeof r) {
                        var s = m[o];
                        p = r.call(g, s), m.splice(o, 1), o--;
                    }
                    return p;
                }), e.formatArgs.call(g, m);
                var p = i.log || e.log || console.log.bind(console);
                p.apply(g, m);
            }
        }
        return i.namespace = g, i.enabled = e.enabled(g), i.useColors = e.useColors(), i.color = function (q) {
            var r, s = 0;
            for (r in q)
                s = (s << 5) - s + q.charCodeAt(r), s |= 0;
            return e.colors[Math.abs(s) % e.colors.length];
        }(g), i.destroy = k, 'function' == typeof e.init && e.init(i), e.instances.push(i), i;
    }
    function o() {
        var p = e.instances.indexOf(this);
        return -1 !== p && (e.instances.splice(p, 1), !0);
    }
    (e = p.exports = f.debug = f.default = f).coerce = function (q) {
        return q instanceof Error ? q.stack || q.message : q;
    }, e.disable = function () {
        e.enable('');
    }, e.enable = function (q) {
        var r;
        e.save(q), e.names = [], e.skips = [];
        var s = ('string' == typeof q ? q : '').split(/[\s,]+/), t = s.length;
        for (r = 0; r < t; r++)
            s[r] && ('-' === (q = s[r].replace(/\*/g, '.*?'))[0] ? e.skips.push(new RegExp('^' + q.substr(1) + '$')) : e.names.push(new RegExp('^' + q + '$')));
        for (r = 0; r < e.instances.length; r++) {
            var u = e.instances[r];
            u.enabled = e.enabled(u.namespace);
        }
    }, e.enabled = function (q) {
        if ('*' === q[q.length - 1])
            return !0;
        var r, s;
        for (r = 0, s = e.skips.length; r < s; r++)
            if (e.skips[r].test(q))
                return !1;
        for (r = 0, s = e.names.length; r < s; r++)
            if (e.names[r].test(q))
                return !0;
        return !1;
    }, e.humanize = h('.....'), e.instances = [], e.names = [], e.skips = [], e.formatters = {};
}), c.register('.....', function (d, e) {
    var f = 1000, g = 60000, h = 3600000, i = 86400000, j = 31557600000;
    function k(l, m, n) {
        if (!(l < m))
            return l < 1.5 * m ? Math.floor(l / m) + ' ' + n : Math.ceil(l / m) + ' ' + n + 's';
    }
    d.exports = function (l, m) {
        m = m || {};
        var n, o = typeof l;
        if ('string' === o && l.length > 0)
            return function (p) {
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
            return m.long ? k(n = l, i, 'day') || k(n, h, 'hour') || k(n, g, 'minute') || k(n, f, 'second') || n + ' ms' : function (p) {
                return p >= i ? Math.round(p / i) + 'd' : p >= h ? Math.round(p / h) + 'h' : p >= g ? Math.round(p / g) + 'm' : p >= f ? Math.round(p / f) + 's' : p + 'ms';
            }(l);
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(l));
    };
}), c.register('.....', function (d, e) {
    var f = c('.....'), g = c('.....'), h = c('.....');
    d.exports = _m;
    var i, j = /\n/g, k = /\\n/g;
    function l() {
    }
    function _m(n) {
        f.call(this, n), this.query = this.query || {}, i || (i = h.___eio = h.___eio || []), this.index = i.length;
        var o = this;
        i.push(function (p) {
            o.onData(p);
        }), this.query.j = this.index, 'function' == typeof addEventListener && addEventListener('beforeunload', function () {
            o.script && (o.script.onerror = l);
        }, !1);
    }
    g(_m, f), _m.prototype.supportsBinary = !1, _m.prototype.doClose = function () {
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), f.prototype.doClose.call(this);
    }, _m.prototype.doPoll = function () {
        var o = this, p = document.createElement('script');
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), p.async = !0, p.src = this.uri(), p.onerror = function (q) {
            o.onError('jsonp poll error', q);
        };
        var q = document.getElementsByTagName('script')[0];
        q ? q.parentNode.insertBefore(p, q) : (document.head || document.body).appendChild(p), this.script = p, 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function () {
            var r = document.createElement('iframe');
            document.body.appendChild(r), document.body.removeChild(r);
        }, 100);
    }, _m.prototype.doWrite = function (o, p) {
        var q = this;
        if (!this.form) {
            var r, s = document.createElement('form'), t = document.createElement('textarea'), u = this.iframeId = 'eio_iframe_' + this.index;
            s.className = 'socketio', s.style.position = 'absolute', s.style.top = '-1000px', s.style.left = '-1000px', s.target = u, s.method = 'POST', s.setAttribute('accept-charset', 'utf-8'), t.name = 'd', s.appendChild(t), document.body.appendChild(s), this.form = s, this.area = t;
        }
        function v() {
            _m(), p();
        }
        function w() {
            if (q.iframe)
                try {
                    q.form.removeChild(q.iframe);
                } catch (o) {
                    q.onError('jsonp polling iframe removal error', o);
                }
            try {
                var x = '<iframe src="javascript:0" name="' + q.iframeId + '">';
                r = document.createElement(x);
            } catch (x) {
                (r = document.createElement('iframe')).name = q.iframeId, r.src = 'javascript:0';
            }
            r.id = q.iframeId, q.form.appendChild(r), q.iframe = r;
        }
        this.form.action = this.uri(), w(), x = x.replace(k, '\\\n'), this.area.value = x.replace(j, '\\n');
        try {
            this.form.submit();
        } catch (x) {
        }
        this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
            'complete' === q.iframe.readyState && v();
        } : this.iframe.onload = v;
    };
}), c.register('.....', function (d, e) {
    var f, g, h = c('.....').Buffer, i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....')('engine.io-client:websocket');
    if ('undefined' != typeof WebSocket ? f = WebSocket : 'undefined' != typeof self && (f = self.WebSocket || self.MozWebSocket), 'undefined' == typeof window)
        try {
            g = c('.....');
        } catch (d) {
        }
    var o = f || g;
    function p(q) {
        q && q.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = q.perMessageDeflate, this.usingBrowserWebSocket = f && !q.forceNode, this.protocols = q.protocols, this.usingBrowserWebSocket || (o = g), i.call(this, q);
    }
    d.exports = p, l(p, i), p.prototype.name = 'websocket', p.prototype.supportsBinary = !0, p.prototype.doOpen = function () {
        if (this.check()) {
            var q = this.uri(), r = this.protocols, s = {};
            this.isReactNative || (s.agent = this.agent, s.perMessageDeflate = this.perMessageDeflate, s.pfx = this.pfx, s.key = this.key, s.passphrase = this.passphrase, s.cert = this.cert, s.ca = this.ca, s.ciphers = this.ciphers, s.rejectUnauthorized = this.rejectUnauthorized), this.extraHeaders && (s.headers = this.extraHeaders), this.localAddress && (s.localAddress = this.localAddress);
            try {
                this.ws = this.usingBrowserWebSocket && !this.isReactNative ? r ? new o(q, r) : new o(q) : new o(q, r, s);
            } catch (q) {
                return this.emit('error', q);
            }
            void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = 'nodebuffer') : this.ws.binaryType = 'arraybuffer', this.addEventListeners();
        }
    }, p.prototype.addEventListeners = function () {
        var q = this;
        this.ws.onopen = function () {
            q.onOpen();
        }, this.ws.onclose = function () {
            q.onClose();
        }, this.ws.onmessage = function (r) {
            q.onData(r.data);
        }, this.ws.onerror = function (r) {
            q.onError('websocket error', r);
        };
    }, p.prototype.write = function (q) {
        var r = this;
        this.writable = !1;
        for (var s = q.length, t = 0, u = s; t < u; t++)
            !function (v) {
                j.encodePacket(v, r.supportsBinary, function (w) {
                    if (!r.usingBrowserWebSocket) {
                        var x = {};
                        if (v.options && (x.compress = v.options.compress), r.perMessageDeflate)
                            ('string' == typeof w ? h.byteLength(w) : w.length) < r.perMessageDeflate.threshold && (x.compress = !1);
                    }
                    try {
                        r.usingBrowserWebSocket ? r.ws.send(w) : r.ws.send(w, x);
                    } catch (v) {
                        n('websocket closed before onclose event');
                    }
                    --s || i();
                });
            }(q[t]);
        function v() {
            r.emit('flush'), setTimeout(function () {
                r.writable = !0, r.emit('drain');
            }, 0);
        }
    }, p.prototype.onClose = function () {
        i.prototype.onClose.call(this);
    }, p.prototype.doClose = function () {
        void 0 !== this.ws && this.ws.close();
    }, p.prototype.uri = function () {
        var q = this.query || {}, r = this.secure ? 'wss' : 'ws', s = '';
        return this.port && ('wss' === r && 443 !== Number(this.port) || 'ws' === r && 80 !== Number(this.port)) && (s = ':' + this.port), this.timestampRequests && (q[this.timestampParam] = m()), this.supportsBinary || (q.b64 = 1), (q = k.encode(q)).length && (q = '?' + q), r + '://' + (-1 !== this.hostname.indexOf(':') ? '[' + this.hostname + ']' : this.hostname) + s + this.path + q;
    }, p.prototype.check = function () {
        return !(!o || '__initialize' in o && this.name === p.prototype.name);
    };
}), c.register('.....', function (d, e) {
    var f = [].indexOf;
    d.exports = function (g, h) {
        if (f)
            return g.indexOf(h);
        for (var i = 0; i < g.length; ++i)
            if (g[i] === h)
                return i;
        return -1;
    };
}), c.register('.....', function (d, e) {
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....')('socket.io-client:socket'), l = c('.....'), m = c('.....');
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
        }, o = g.prototype.emit;
    function _p(q, r, s) {
        this.io = q, this.nsp = r, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, s && s.query && (this.query = s.query), this.io.autoConnect && this.open();
    }
    g(_p.prototype), _p.prototype.subEvents = function () {
        if (!this.subs) {
            var q = this.io;
            this.subs = [
                i(q, 'open', j(this, 'onopen')),
                i(q, 'packet', j(this, 'onpacket')),
                i(q, 'close', j(this, 'onclose'))
            ];
        }
    }, _p.prototype.open = _p.prototype.connect = function () {
        return this.connected || (this.subEvents(), this.io.reconnecting || this.io.open(), 'open' === this.io.readyState && this.onopen(), this.emit('connecting')), this;
    }, _p.prototype.send = function () {
        var q = h(arguments);
        return q.unshift('message'), this.emit.apply(this, q), this;
    }, _p.prototype.emit = function (q) {
        if (n.hasOwnProperty(q))
            return o.apply(this, arguments), this;
        var r = h(arguments), s = {
                type: (void 0 !== this.flags.binary ? this.flags.binary : m(r)) ? f.BINARY_EVENT : f.EVENT,
                data: r,
                options: {}
            };
        return s.options.compress = !this.flags || !1 !== this.flags.compress, 'function' == typeof r[r.length - 1] && (k('emitting packet with ack id %d', this.ids), this.acks[this.ids] = r.pop(), s.id = this.ids++), this.connected ? this.packet(s) : this.sendBuffer.push(s), this.flags = {}, this;
    }, _p.prototype.packet = function (q) {
        q.nsp = this.nsp, this.io.packet(q);
    }, _p.prototype.onopen = function () {
        if (k('transport is open - connecting'), '/' !== this.nsp)
            if (this.query) {
                var q = 'object' == typeof this.query ? l.encode(this.query) : this.query;
                k('sending connect packet with query %s', q), this.packet({
                    type: f.CONNECT,
                    query: q
                });
            } else
                this.packet({ type: f.CONNECT });
    }, _p.prototype.onclose = function (q) {
        k('close (%s)', q), this.connected = !1, this.disconnected = !0, delete this.id, this.emit('disconnect', q);
    }, _p.prototype.onpacket = function (q) {
        var r = q.nsp === this.nsp, s = q.type === f.ERROR && '/' === q.nsp;
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
    }, _p.prototype.onevent = function (q) {
        var r = q.data || [];
        k('emitting event %j', r), null != q.id && (k('attaching ack callback to event'), r.push(this.ack(q.id))), this.connected ? o.apply(this, r) : this.receiveBuffer.push(r);
    }, _p.prototype.ack = function (q) {
        var r = this, s = !1;
        return function () {
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
    }, _p.prototype.onack = function (q) {
        var r = this.acks[q.id];
        'function' == typeof r ? (k('calling ack %s with %j', q.id, q.data), r.apply(this, q.data), delete this.acks[q.id]) : k('bad ack %s', q.id);
    }, _p.prototype.onconnect = function () {
        this.connected = !0, this.disconnected = !1, this.emit('connect'), this.emitBuffered();
    }, _p.prototype.emitBuffered = function () {
        var q;
        for (q = 0; q < this.receiveBuffer.length; q++)
            o.apply(this, this.receiveBuffer[q]);
        for (this.receiveBuffer = [], q = 0; q < this.sendBuffer.length; q++)
            this.packet(this.sendBuffer[q]);
        this.sendBuffer = [];
    }, _p.prototype.ondisconnect = function () {
        k('server disconnect (%s)', this.nsp), this.destroy(), this.onclose('io server disconnect');
    }, _p.prototype.destroy = function () {
        if (this.subs) {
            for (var q = 0; q < this.subs.length; q++)
                this.subs[q].destroy();
            this.subs = null;
        }
        this.io.destroy(this);
    }, _p.prototype.close = _p.prototype.disconnect = function () {
        return this.connected && (k('performing disconnect (%s)', this.nsp), this.packet({ type: f.DISCONNECT })), this.destroy(), this.connected && this.onclose('io client disconnect'), this;
    }, _p.prototype.compress = function (q) {
        return this.flags.compress = q, this;
    }, _p.prototype.binary = function (q) {
        return this.flags.binary = q, this;
    };
}), c.register('.....', function (d, e) {
    d.exports = function (f, g) {
        for (var h = [], i = (g = g || 0) || 0; i < f.length; i++)
            h[i - g] = f[i];
        return h;
    };
}), c.register('.....', function (d, e) {
    d.exports = function (f, g, h) {
        return f.on(g, h), {
            destroy: function () {
                f.removeListener(g, h);
            }
        };
    };
}), c.register('.....', function (d, e) {
    var f = [].slice;
    d.exports = function (g, h) {
        if ('string' == typeof h && (h = g[h]), 'function' != typeof h)
            throw new Error('bind() requires a function');
        var i = f.call(arguments, 2);
        return function () {
            return h.apply(g, i.concat(f.call(arguments)));
        };
    };
}), c.register('.....', function (d, e) {
    function f(g) {
        g = g || {}, this.ms = g.min || 100, this.max = g.max || 10000, this.factor = g.factor || 2, this.jitter = g.jitter > 0 && g.jitter <= 1 ? g.jitter : 0, this.attempts = 0;
    }
    d.exports = f, f.prototype.duration = function () {
        var g = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var h = Math.random(), i = Math.floor(h * this.jitter * g);
            g = 0 == (1 & Math.floor(10 * h)) ? g - i : g + i;
        }
        return 0 | Math.min(g, this.max);
    }, f.prototype.reset = function () {
        this.attempts = 0;
    }, f.prototype.setMin = function (g) {
        this.ms = g;
    }, f.prototype.setMax = function (g) {
        this.max = g;
    }, f.prototype.setJitter = function (g) {
        this.jitter = g;
    };
}), c.register('.....', function (d, e) {
    var f, g, h, i, j, k, l, m, n;
    a(d.exports, 'CONNECT', function () {
        return f;
    }, function (o) {
        return f = o;
    }), a(d.exports, 'DISCONNECT', function () {
        return g;
    }, function (o) {
        return g = o;
    }), a(d.exports, 'EVENT', function () {
        return h;
    }, function (o) {
        return h = o;
    }), a(d.exports, 'ACK', function () {
        return i;
    }, function (o) {
        return i = o;
    }), a(d.exports, 'ERROR', function () {
        return j;
    }, function (o) {
        return j = o;
    }), a(d.exports, 'BINARY_EVENT', function () {
        return k;
    }, function (o) {
        return k = o;
    }), a(d.exports, 'BINARY_ACK', function () {
        return l;
    }, function (o) {
        return l = o;
    }), a(d.exports, 'Encoder', function () {
        return m;
    }, function (o) {
        return m = o;
    }), a(d.exports, 'Decoder', function () {
        return n;
    }, function (o) {
        return n = o;
    });
    var o = c('.....'), p = c('.....');
    f = 0, g = 1, h = 2, i = 3, j = 4, k = 5, l = 6;
    var q = Number.isInteger || function (r) {
            return 'number' == typeof r && isFinite(r) && Math.floor(r) === r;
        }, r = function (s) {
            return 'string' == typeof s;
        };
    function s() {
    }
    function t() {
    }
    s.prototype.encode = function (u, v) {
        switch (u.type) {
        case f:
        case g:
        case j:
            return v([JSON.stringify(u)]);
        default:
            return v([o.encode(u)]);
        }
    }, p(t.prototype), t.prototype.add = function (u) {
        'string' == typeof u ? this.parseJSON(u) : this.parseBinary(u);
    }, t.prototype.parseJSON = function (u) {
        var v = JSON.parse(u);
        this.checkPacket(v), this.emit('decoded', v);
    }, t.prototype.parseBinary = function (u) {
        var v = o.decode(u);
        this.checkPacket(v), this.emit('decoded', v);
    }, t.prototype.checkPacket = function (u) {
        if (!(q(u.type) && u.type >= f && u.type <= l))
            throw new Error('invalid packet type');
        if (!r(u.nsp))
            throw new Error('invalid namespace');
        if (!function (v) {
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
    }, t.prototype.destroy = function () {
    }, m = s, n = t;
}), c.register('.....', function (d, e) {
    var f, g;
    a(d.exports, 'encode', function () {
        return f;
    }, function (h) {
        return f = h;
    }), a(d.exports, 'decode', function () {
        return g;
    }, function (h) {
        return g = h;
    }), f = c('.....'), g = c('.....');
}), c.register('.....', function (d, e) {
    function f(g, h, i) {
        for (var j = 0, k = 0, l = i.length; k < l; k++)
            (j = i.charCodeAt(k)) < 128 ? g.setUint8(h++, j) : j < 2048 ? (g.setUint8(h++, 192 | j >> 6), g.setUint8(h++, 128 | 63 & j)) : j < 55296 || j >= 57344 ? (g.setUint8(h++, 224 | j >> 12), g.setUint8(h++, 128 | j >> 6 & 63), g.setUint8(h++, 128 | 63 & j)) : (k++, j = 65536 + ((1023 & j) << 10 | 1023 & i.charCodeAt(k)), g.setUint8(h++, 240 | j >> 18), g.setUint8(h++, 128 | j >> 12 & 63), g.setUint8(h++, 128 | j >> 6 & 63), g.setUint8(h++, 128 | 63 & j));
    }
    function j(k, l, m) {
        var n = typeof m, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
        if ('string' === n) {
            if (s = function (u) {
                    for (var v = 0, w = 0, x = 0, y = u.length; x < y; x++)
                        (v = u.charCodeAt(x)) < 128 ? w += 1 : v < 2048 ? w += 2 : v < 55296 || v >= 57344 ? w += 3 : (x++, w += 4);
                    return w;
                }(m), s < 32)
                k.push(160 | s), t = 1;
            else if (s < 256)
                k.push(217, s), t = 2;
            else if (s < 65536)
                k.push(218, s >> 8, s), t = 3;
            else {
                if (!(s < 4294967296))
                    throw new Error('String too long');
                k.push(219, s >> 24, s >> 16, s >> 8, s), t = 5;
            }
            return l.push({
                _str: m,
                _length: s,
                _offset: k.length
            }), t + s;
        }
        if ('number' === n)
            return Math.floor(m) === m && isFinite(m) ? m >= 0 ? m < 128 ? (k.push(m), 1) : m < 256 ? (k.push(204, m), 2) : m < 65536 ? (k.push(205, m >> 8, m), 3) : m < 4294967296 ? (k.push(206, m >> 24, m >> 16, m >> 8, m), 5) : (q = m / Math.pow(2, 32) >> 0, r = m >>> 0, k.push(207, q >> 24, q >> 16, q >> 8, q, r >> 24, r >> 16, r >> 8, r), 9) : m >= -32 ? (k.push(m), 1) : m >= -128 ? (k.push(208, m), 2) : m >= -32768 ? (k.push(209, m >> 8, m), 3) : m >= -2147483648 ? (k.push(210, m >> 24, m >> 16, m >> 8, m), 5) : (q = Math.floor(m / Math.pow(2, 32)), r = m >>> 0, k.push(211, q >> 24, q >> 16, q >> 8, q, r >> 24, r >> 16, r >> 8, r), 9) : (k.push(203), l.push({
                _float: m,
                _length: 8,
                _offset: k.length
            }), 9);
        if ('object' === n) {
            if (null === m)
                return k.push(192), 1;
            if (Array.isArray(m)) {
                if ((s = m.length) < 16)
                    k.push(144 | s), t = 1;
                else if (s < 65536)
                    k.push(220, s >> 8, s), t = 3;
                else {
                    if (!(s < 4294967296))
                        throw new Error('Array too large');
                    k.push(221, s >> 24, s >> 16, s >> 8, s), t = 5;
                }
                for (o = 0; o < s; o++)
                    t += j(k, l, m[o]);
                return t;
            }
            if (m instanceof Date) {
                var u = m.getTime();
                return q = Math.floor(u / Math.pow(2, 32)), r = u >>> 0, k.push(215, 0, q >> 24, q >> 16, q >> 8, q, r >> 24, r >> 16, r >> 8, r), 10;
            }
            if (m instanceof ArrayBuffer) {
                if ((s = m.byteLength) < 256)
                    k.push(196, s), t = 2;
                else if (s < 65536)
                    k.push(197, s >> 8, s), t = 3;
                else {
                    if (!(s < 4294967296))
                        throw new Error('Buffer too large');
                    k.push(198, s >> 24, s >> 16, s >> 8, s), t = 5;
                }
                return l.push({
                    _bin: m,
                    _length: s,
                    _offset: k.length
                }), t + s;
            }
            if ('function' == typeof m.toJSON)
                return j(k, l, m.toJSON());
            var v = [], w = '', x = Object.keys(m);
            for (o = 0, p = x.length; o < p; o++)
                'function' != typeof m[w = x[o]] && v.push(w);
            if ((s = v.length) < 16)
                k.push(128 | s), t = 1;
            else if (s < 65536)
                k.push(222, s >> 8, s), t = 3;
            else {
                if (!(s < 4294967296))
                    throw new Error('Object too large');
                k.push(223, s >> 24, s >> 16, s >> 8, s), t = 5;
            }
            for (o = 0; o < s; o++)
                t += j(k, l, w = v[o]), t += j(k, l, m[w]);
            return t;
        }
        if ('boolean' === n)
            return k.push(m ? 195 : 194), 1;
        if ('undefined' === n)
            return k.push(212, 0, 0), 3;
        throw new Error('Could not encode');
    }
    d.exports = function (v) {
        var w = [], x = [], y = j(w, x, v), z = new ArrayBuffer(y), A = new DataView(z), B = 0, C = 0, D = -1;
        x.length > 0 && (D = x[0]._offset);
        for (var E, F = 0, G = 0, H = 0, I = w.length; H < I; H++)
            if (A.setUint8(C + H, w[H]), H + 1 === D) {
                if (F = (E = x[B])._length, G = C + D, E._bin)
                    for (var J = new Uint8Array(E._bin), K = 0; K < F; K++)
                        A.setUint8(G + K, J[K]);
                else
                    E._str ? f(A, G, E._str) : void 0 !== E._float && A.setFloat64(G, E._float);
                C += F, x[++B] && (D = x[B]._offset);
            }
        return z;
    };
}), c.register('.....', function (d, e) {
    function f(g) {
        if (this._offset = 0, g instanceof ArrayBuffer)
            this._buffer = g, this._view = new DataView(this._buffer);
        else {
            if (!ArrayBuffer.isView(g))
                throw new Error('Invalid argument');
            this._buffer = g.buffer, this._view = new DataView(this._buffer, g.byteOffset, g.byteLength);
        }
    }
    f.prototype._array = function (g) {
        for (var h = new Array(g), i = 0; i < g; i++)
            h[i] = this._parse();
        return h;
    }, f.prototype._map = function (g) {
        for (var h = {}, i = 0; i < g; i++)
            h[this._parse()] = this._parse();
        return h;
    }, f.prototype._str = function (g) {
        var h = function (i, j, k) {
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
    }, f.prototype._bin = function (g) {
        var h = this._buffer.slice(this._offset, this._offset + g);
        return this._offset += g, h;
    }, f.prototype._parse = function () {
        var g, h = this._view.getUint8(this._offset++), i = 0, j = 0, k = 0, l = 0;
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
            return j = this._view.getInt8(this._offset), this._offset += 1, 0 === j ? void (this._offset += 1) : [
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
    }, d.exports = function (g) {
        var h = new f(g), i = h._parse();
        if (h._offset !== g.byteLength)
            throw new Error(g.byteLength - h._offset + ' trailing bytes');
        return i;
    };
}), c.register('.....', function (d, e) {
    Object.defineProperty(d.exports, '__esModule', { value: !0 });
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
            this.callbacks = this.callbacks.map(h => h.timesCalled > 0 && !h.canCallMultipleTimes ? h : (h.callback(f, g), Object.assign({}, h, { timesCalled: h.timesCalled + 1 })));
        }
        constructor() {
            this.callbacks = [], this.removeCallback = f => {
                this.callbacks = this.callbacks.filter(g => g.id !== f);
            };
        }
    };
}), c.register('.....', function (d, e) {
    Object.defineProperty(d.exports, '__esModule', { value: !0 });
    d.exports.default = {
        createNewRoom: 'blueboat_CREATE_NEW_ROOM',
        joinRoom: 'blueboat_JOIN_ROOM',
        sendMessage: 'blueboat_SEND_MESSAGE',
        listen: 'blueboat_LISTEN_STATE',
        requestAvailableRooms: 'blueboat_AVAILABLE_ROOMS',
        ping: 'blueboat-ping'
    };
}), c.register('.....', function (d, e) {
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), d.exports.BLUEBOAT_ID = 'blueboat-id';
}), c.register('.....', function (d, e) {
    Object.defineProperty(d.exports, '__esModule', { value: !0 });
    d.exports.default = {
        clientIdSet: 'CLIENT_ID_SET',
        joinedRoom: 'blueboat_JOINED_ROOM',
        statePatch: 'STATE_PATCH',
        removedFromRoom: 'blueboat_REMOVED_FROM_ROOM',
        availableRooms: 'blueboat_AVAILABLE_ROOMS'
    };
}), c.register('.....', function (d, e) {
    var f = d.exports && d.exports.__importDefault || function (g) {
        return g && g.__esModule ? g : { default: g };
    };
    Object.defineProperty(d.exports, '__esModule', { value: !0 });
    const g = f(c('.....')), h = f(c('.....')), i = f(c('.....'));
    d.exports.default = class {
        _setRoomId(j) {
            this.id = j, this.socketListener();
        }
        socketListener() {
            const j = this.socket;
            j.on(`${ this.id }-error`, k => this.onJoinError.call(k)), j.on(`message-${ this.id }`, k => {
                const {
                    key: l,
                    data: m
                } = k;
                if (l)
                    return l === g.default.joinedRoom ? (this.joined = !0, void this.onJoin.call()) : l === g.default.removedFromRoom ? (this.onLeave.call(), void (this.joined = !1)) : void this.onMessage.call(l, m);
            });
        }
        constructor(j, k, l) {
            this.joined = !1, this.initialJoinOptions = {}, this.onJoinAttempt = new h.default(), this.onCreate = new h.default(), this.onJoin = new h.default(), this.onJoinError = new h.default(), this.onMessage = new h.default(), this.onLeave = new h.default(), this.send = (m, n) => {
                this.socket.emit(i.default.sendMessage, {
                    room: this.id,
                    key: m,
                    data: n
                });
            }, l && (this.id = l), k && (this.initialJoinOptions = k), j && (this.socket = j, l && this.socketListener());
        }
    };
});