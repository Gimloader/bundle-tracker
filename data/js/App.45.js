('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b.register('Kob2G', function(a, b) {
    var c;
    a.exports, c = function a() {
        var d = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : void 0 !== d ? d : {},
            e = !d.document && !!d.postMessage,
            f = e && /blob:/i.test((d.location || {}).protocol),
            g = {},
            h = 0,
            i = {
                parse: function(j, k) {
                    var l = (k = k || {}).dynamicTyping || !1;
                    if (_j(l) && (k.dynamicTypingFunction = l, l = {}), k.dynamicTyping = l, k.transform = !!_j(k.transform) && k.transform, k.worker && i.WORKERS_SUPPORTED) {
                        var m = function() {
                            if (!i.WORKERS_SUPPORTED)
                                return !1;
                            var n, o, p = (n = d.URL || d.webkitURL || null, o = a.toString(), i.BLOB_URL || (i.BLOB_URL = n.createObjectURL(new Blob([
                                    '(',
                                    o,
                                    ')();'
                                ], {
                                    type: 'text/javascript'
                                })))),
                                q = new d.Worker(p);
                            return q.onmessage = _v, q.id = h++, g[q.id] = q;
                        }();
                        return m.userStep = k.step, m.userChunk = k.chunk, m.userComplete = k.complete, m.userError = k.error, k.step = _j(k.step), k.chunk = _j(k.chunk), k.complete = _j(k.complete), k.error = _j(k.error), delete k.worker, void m.postMessage({
                            input: j,
                            config: k,
                            workerId: m.id
                        });
                    }
                    var m = null;
                    return i.NODE_STREAM_INPUT, 'string' == typeof j ? m = k.download ? new _r(k) : new _t(k) : !0 === j.readable && _j(j.read) && _j(j.on) ? m = new _u(k) : (d.File && j instanceof File || j instanceof Object) && (m = new _s(k)), m.stream(j);
                },
                unparse: function(j, k) {
                    var l = !1,
                        m = !0,
                        n = ',',
                        o = '\r\n',
                        p = '"',
                        q = p + p,
                        _r = !1,
                        _s = null,
                        _t = !1;
                    ! function() {
                        if ('object' == typeof k) {
                            if ('string' != typeof k.delimiter || i.BAD_DELIMITERS.filter(function(u) {
                                    return -1 !== k.delimiter.indexOf(u);
                                }).length || (n = k.delimiter), ('boolean' == typeof k.quotes || 'function' == typeof k.quotes || Array.isArray(k.quotes)) && (l = k.quotes), 'boolean' != typeof k.skipEmptyLines && 'string' != typeof k.skipEmptyLines || (_r = k.skipEmptyLines), 'string' == typeof k.newline && (o = k.newline), 'string' == typeof k.quoteChar && (p = k.quoteChar), 'boolean' == typeof k.header && (m = k.header), Array.isArray(k.columns)) {
                                if (0 === k.columns.length)
                                    throw new Error('Option columns is empty');
                                _s = k.columns;
                            }
                            void 0 !== k.escapeChar && (q = k.escapeChar + p), 'boolean' == typeof k.escapeFormulae && (_t = k.escapeFormulae);
                        }
                    }();
                    var _u = new RegExp(_G(p), 'g');
                    if ('string' == typeof j && (j = JSON.parse(j)), Array.isArray(j)) {
                        if (!j.length || Array.isArray(j[0]))
                            return _v(null, j, _r);
                        if ('object' == typeof j[0])
                            return _v(_s || _v(j[0]), j, _r);
                    } else if ('object' == typeof j)
                        return 'string' == typeof j.data && (j.data = JSON.parse(j.data)), Array.isArray(j.data) && (j.fields || (j.fields = j.meta && j.meta.fields), j.fields || (j.fields = Array.isArray(j.data[0]) ? j.fields : _v(j.data[0])), Array.isArray(j.data[0]) || 'object' == typeof j.data[0] || (j.data = [j.data])), _v(j.fields || [], j.data || [], _r);
                    throw new Error('Unable to serialize unrecognized input');

                    function _v(w) {
                        if ('object' != typeof w)
                            return [];
                        var x = [];
                        for (var y in w)
                            x.push(y);
                        return x;
                    }

                    function _v(w, x, y) {
                        var z = '';
                        'string' == typeof w && (w = JSON.parse(w)), 'string' == typeof x && (x = JSON.parse(x));
                        var A = Array.isArray(w) && 0 < w.length,
                            B = !Array.isArray(x[0]);
                        if (A && m) {
                            for (var C = 0; C < w.length; C++)
                                0 < C && (z += n), z += _v(w[C], C);
                            0 < x.length && (z += o);
                        }
                        for (var C = 0; C < x.length; C++) {
                            var D = A ? w.length : x[C].length,
                                E = !1,
                                F = A ? 0 === Object.keys(x[C]).length : 0 === x[C].length;
                            if (y && !A && (E = 'greedy' === y ? '' === x[C].join('').trim() : 1 === x[C].length && 0 === x[C][0].length), 'greedy' === y && A) {
                                for (var _G = [], H = 0; H < D; H++) {
                                    var I = B ? w[H] : H;
                                    _G.push(x[C][I]);
                                }
                                E = '' === _G.join('').trim();
                            }
                            if (!E) {
                                for (var G = 0; G < D; G++) {
                                    0 < G && !F && (z += n);
                                    var H = A && B ? w[G] : G;
                                    z += _v(x[C][H], G);
                                }
                                C < x.length - 1 && (!y || 0 < D && !F) && (z += o);
                            }
                        }
                        return z;
                    }

                    function _v(w, x) {
                        if (null == w)
                            return '';
                        if (w.constructor === Date)
                            return JSON.stringify(w).slice(1, 25);
                        !0 === _t && 'string' == typeof w && null !== w.match(/^[=+\-@].*$/) && (w = '\'' + w);
                        var y = w.toString().replace(_u, q),
                            z = 'boolean' == typeof l && l || 'function' == typeof l && l(w, x) || Array.isArray(l) && l[x] || function(A, B) {
                                for (var C = 0; C < B.length; C++)
                                    if (-1 < A.indexOf(B[C]))
                                        return !0;
                                return !1;
                            }(y, i.BAD_DELIMITERS) || -1 < y.indexOf(n) || ' ' === y.charAt(0) || ' ' === y.charAt(y.length - 1);
                        return z ? p + y + p : y;
                    }
                }
            };
        if (i.RECORD_SEP = String.fromCharCode(30), i.UNIT_SEP = String.fromCharCode(31), i.BYTE_ORDER_MARK = '\uFEFF', i.BAD_DELIMITERS = [
                '\r',
                '\n',
                '"',
                i.BYTE_ORDER_MARK
            ], i.WORKERS_SUPPORTED = !e && !!d.Worker, i.NODE_STREAM_INPUT = 1, i.LocalChunkSize = 10485760, i.RemoteChunkSize = 5242880, i.DefaultDelimiter = ',', i.Parser = _j, i.ParserHandle = _j, i.NetworkStreamer = _s, i.FileStreamer = _s, i.StringStreamer = _j, i.ReadableStreamStreamer = _j, d.jQuery) {
            var j = d.jQuery;
            j.fn.parse = function(k) {
                var l = k.config || {},
                    m = [];
                return this.each(function(n) {
                    if ('INPUT' !== j(this).prop('tagName').toUpperCase() || 'file' !== j(this).attr('type').toLowerCase() || !d.FileReader || !this.files || 0 === this.files.length)
                        return !0;
                    for (var o = 0; o < this.files.length; o++)
                        m.push({
                            file: this.files[o],
                            inputElem: this,
                            instanceConfig: j.extend({}, l)
                        });
                }), g(), this;

                function n() {
                    if (0 !== m.length) {
                        var o, p, q, r = m[0];
                        if (_j(k.before)) {
                            var _s = k.before(r.file, r.inputElem);
                            if ('object' == typeof _s) {
                                if ('abort' === _s.action)
                                    return o = r.file, p = r.inputElem, q = _s.reason, void(_j(k.error) && k.error({
                                        name: 'AbortError'
                                    }, o, p, q));
                                if ('skip' === _s.action)
                                    return void h();
                                'object' == typeof _s.config && (r.instanceConfig = j.extend(r.instanceConfig, _s.config));
                            } else if ('skip' === _s)
                                return void h();
                        }
                        var _s = r.instanceConfig.complete;
                        r.instanceConfig.complete = function(t) {
                            _j(_s) && _s(t, r.file, r.inputElem), h();
                        }, i.parse(r.file, r.instanceConfig);
                    } else
                        _j(k.complete) && k.complete();
                }

                function n() {
                    m.splice(0, 1), g();
                }
            };
        }

        function j(k) {
            this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = '', this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
                    data: [],
                    errors: [],
                    meta: {}
                },
                function(l) {
                    var m = _U(l);
                    m.chunkSize = parseInt(m.chunkSize), l.step || l.chunk || (m.chunkSize = null), this._handle = new _j(m), (this._handle.streamer = this)._config = m;
                }.call(this, k), this.parseChunk = function(l, m) {
                    if (this.isFirstChunk && _j(this._config.beforeFirstChunk)) {
                        var n = this._config.beforeFirstChunk(l);
                        void 0 !== n && (l = n);
                    }
                    this.isFirstChunk = !1, this._halted = !1;
                    var n = this._partialLine + l;
                    this._partialLine = '';
                    var o = this._handle.parse(n, this._baseIndex, !this._finished);
                    if (!this._handle.paused() && !this._handle.aborted()) {
                        var p = o.meta.cursor;
                        this._finished || (this._partialLine = n.substring(p - this._baseIndex), this._baseIndex = p), o && o.data && (this._rowCount += o.data.length);
                        var q = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                        if (f)
                            d.postMessage({
                                results: o,
                                workerId: i.WORKER_ID,
                                finished: q
                            });
                        else if (_j(this._config.chunk) && !m) {
                            if (this._config.chunk(o, this._handle), this._handle.paused() || this._handle.aborted())
                                return void(this._halted = !0);
                            o = void 0, this._completeResults = void 0;
                        }
                        return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(o.data), this._completeResults.errors = this._completeResults.errors.concat(o.errors), this._completeResults.meta = o.meta), this._completed || !q || !_j(this._config.complete) || o && o.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), q || o && o.meta.paused || this._nextChunk(), o;
                    }
                    this._halted = !0;
                }, this._sendError = function(l) {
                    _j(this._config.error) ? this._config.error(l) : f && this._config.error && d.postMessage({
                        workerId: i.WORKER_ID,
                        error: l,
                        finished: !1
                    });
                };
        }

        function j(k) {
            var l;
            (k = k || {}).chunkSize || (k.chunkSize = i.RemoteChunkSize), _r.call(this, k), this._nextChunk = e ? function() {
                this._readChunk(), this._chunkLoaded();
            } : function() {
                this._readChunk();
            }, this.stream = function(m) {
                this._input = m, this._nextChunk();
            }, this._readChunk = function() {
                if (this._finished)
                    this._chunkLoaded();
                else {
                    if (l = new XMLHttpRequest(), this._config.withCredentials && (l.withCredentials = this._config.withCredentials), e || (l.onload = _z(this._chunkLoaded, this), l.onerror = _z(this._chunkError, this)), l.open(this._config.downloadRequestBody ? 'POST' : 'GET', this._input, !e), this._config.downloadRequestHeaders) {
                        var m = this._config.downloadRequestHeaders;
                        for (var n in m)
                            l.setRequestHeader(n, m[n]);
                    }
                    if (this._config.chunkSize) {
                        var m = this._start + this._config.chunkSize - 1;
                        l.setRequestHeader('Range', 'bytes=' + this._start + '-' + m);
                    }
                    try {
                        l.send(this._config.downloadRequestBody);
                    } catch (k) {
                        this._chunkError(k.message);
                    }
                    e && 0 === l.status && this._chunkError();
                }
            }, this._chunkLoaded = function() {
                4 === l.readyState && (l.status < 200 || 400 <= l.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : l.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(m) {
                    var n = m.getResponseHeader('Content-Range');
                    return null === n ? -1 : parseInt(n.substring(n.lastIndexOf('/') + 1));
                }(l), this.parseChunk(l.responseText)));
            }, this._chunkError = function(m) {
                var n = l.statusText || m;
                this._sendError(new Error(n));
            };
        }

        function j(k) {
            var l, m;
            (k = k || {}).chunkSize || (k.chunkSize = i.LocalChunkSize), _r.call(this, k);
            var n = 'undefined' != typeof FileReader;
            this.stream = function(o) {
                this._input = o, m = o.slice || o.webkitSlice || o.mozSlice, n ? ((l = new FileReader()).onload = _z(this._chunkLoaded, this), l.onerror = _z(this._chunkError, this)) : l = new FileReaderSync(), this._nextChunk();
            }, this._nextChunk = function() {
                this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
            }, this._readChunk = function() {
                var o = this._input;
                if (this._config.chunkSize) {
                    var p = Math.min(this._start + this._config.chunkSize, this._input.size);
                    o = m.call(o, this._start, p);
                }
                var p = l.readAsText(o, this._config.encoding);
                n || this._chunkLoaded({
                    target: {
                        result: p
                    }
                });
            }, this._chunkLoaded = function(o) {
                this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(o.target.result);
            }, this._chunkError = function() {
                this._sendError(l.error);
            };
        }

        function _j(k) {
            var l;
            _r.call(this, k = k || {}), this.stream = function(m) {
                return l = m, this._nextChunk();
            }, this._nextChunk = function() {
                if (!this._finished) {
                    var m, n = this._config.chunkSize;
                    return n ? (m = l.substring(0, n), l = l.substring(n)) : (m = l, l = ''), this._finished = !l, this.parseChunk(m);
                }
            };
        }

        function _j(k) {
            _r.call(this, k = k || {});
            var l = [],
                m = !0,
                n = !1;
            this.pause = function() {
                _r.prototype.pause.apply(this, arguments), this._input.pause();
            }, this.resume = function() {
                _r.prototype.resume.apply(this, arguments), this._input.resume();
            }, this.stream = function(o) {
                this._input = o, this._input.on('data', this._streamData), this._input.on('end', this._streamEnd), this._input.on('error', this._streamError);
            }, this._checkIsFinished = function() {
                n && 1 === l.length && (this._finished = !0);
            }, this._nextChunk = function() {
                this._checkIsFinished(), l.length ? this.parseChunk(l.shift()) : m = !0;
            }, this._streamData = _z(function(o) {
                try {
                    l.push('string' == typeof o ? o : o.toString(this._config.encoding)), m && (m = !1, this._checkIsFinished(), this.parseChunk(l.shift()));
                } catch (o) {
                    this._streamError(o);
                }
            }, this), this._streamError = _z(function(o) {
                this._streamCleanUp(), this._sendError(o);
            }, this), this._streamEnd = _z(function() {
                this._streamCleanUp(), n = !0, this._streamData('');
            }, this), this._streamCleanUp = _z(function() {
                this._input.removeListener('data', this._streamData), this._input.removeListener('end', this._streamEnd), this._input.removeListener('error', this._streamError);
            }, this);
        }

        function _j(k) {
            var l, m, n, o = Math.pow(2, 53),
                p = -o,
                q = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,
                _r = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
                s = this,
                t = 0,
                u = 0,
                v = !1,
                w = !1,
                x = [],
                y = {
                    data: [],
                    errors: [],
                    meta: {}
                };
            if (_j(k.step)) {
                var z = k.step;
                k.step = function(A) {
                    if (y = A, _z())
                        _z();
                    else {
                        if (_z(), 0 === y.data.length)
                            return;
                        t += A.data.length, k.preview && t > k.preview ? m.abort() : (y.data = y.data[0], z(y, s));
                    }
                };
            }

            function _z(A) {
                return 'greedy' === k.skipEmptyLines ? '' === A.join('').trim() : 1 === A.length && 0 === A[0].length;
            }

            function _z() {
                if (y && n && (_z('Delimiter', 'UndetectableDelimiter', 'Unable to auto-detect delimiting character; defaulted to \'' + i.DefaultDelimiter + '\''), n = !1), k.skipEmptyLines)
                    for (var A = 0; A < y.data.length; A++)
                        _E(y.data[A]) && y.data.splice(A--, 1);
                return _z() && function() {
                        if (y)
                            if (Array.isArray(y.data[0])) {
                                for (var A = 0; _z() && A < y.data.length; A++)
                                    y.data[A].forEach(m);
                                y.data.splice(0, 1);
                            } else
                                y.data.forEach(m);

                        function A(B, C) {
                            _j(k.transformHeader) && (B = k.transformHeader(B, C)), x.push(B);
                        }
                    }(),
                    function() {
                        if (!y || !k.header && !k.dynamicTyping && !k.transform)
                            return y;

                        function A(B, C) {
                            var D, E = k.header ? {} : [];
                            for (D = 0; D < B.length; D++) {
                                var F = D,
                                    G = B[D];
                                k.header && (F = D >= x.length ? '__parsed_extra' : x[D]), k.transform && (G = k.transform(G, F)), G = _z(F, G), '__parsed_extra' === F ? (E[F] = E[F] || [], E[F].push(G)) : E[F] = G;
                            }
                            return k.header && (D > x.length ? _z('FieldMismatch', 'TooManyFields', 'Too many fields: expected ' + x.length + ' fields but parsed ' + D, u + C) : D < x.length && _z('FieldMismatch', 'TooFewFields', 'Too few fields: expected ' + x.length + ' fields but parsed ' + D, u + C)), E;
                        }
                        var A = 1;
                        return !y.data.length || Array.isArray(y.data[0]) ? (y.data = y.data.map(l), A = y.data.length) : y.data = l(y.data, 0), k.header && y.meta && (y.meta.fields = x), u += A, y;
                    }();
            }

            function _z() {
                return k.header && 0 === x.length;
            }

            function _z(A, B) {
                var C;
                return C = A, k.dynamicTypingFunction && void 0 === k.dynamicTyping[C] && (k.dynamicTyping[C] = k.dynamicTypingFunction(C)), !0 === (k.dynamicTyping[C] || k.dynamicTyping) ? 'true' === B || 'TRUE' === B || 'false' !== B && 'FALSE' !== B && (function(D) {
                    if (q.test(D)) {
                        var E = parseFloat(D);
                        if (p < E && E < o)
                            return !0;
                    }
                    return !1;
                }(B) ? parseFloat(B) : _r.test(B) ? new Date(B) : '' === B ? null : B) : B;
            }

            function _z(A, B, C, D) {
                var E = {
                    type: A,
                    code: B,
                    message: C
                };
                void 0 !== D && (E.row = D), y.errors.push(E);
            }
            this.parse = function(z, A, B) {
                var C = k.quoteChar || '"';
                if (k.newline || (k.newline = function(D, E) {
                        D = D.substring(0, 1048576);
                        var F = new RegExp(_Q(E) + '([^]*?)' + _Q(E), 'gm'),
                            G = (D = D.replace(F, '')).split('\r'),
                            H = D.split('\n'),
                            I = 1 < H.length && H[0].length < G[0].length;
                        if (1 === G.length || I)
                            return '\n';
                        for (var J = 0, K = 0; K < G.length; K++)
                            '\n' === G[K][0] && J++;
                        return J >= G.length / 2 ? '\r\n' : '\r';
                    }(z, C)), n = !1, k.delimiter)
                    _j(k.delimiter) && (k.delimiter = k.delimiter(z), y.meta.delimiter = k.delimiter);
                else {
                    var D = function(E, F, G, H, I) {
                        var J, K, L, M;
                        I = I || [
                            ',',
                            '\t',
                            '|',
                            ';',
                            i.RECORD_SEP,
                            i.UNIT_SEP
                        ];
                        for (var N = 0; N < I.length; N++) {
                            var O = I[N],
                                P = 0,
                                _Q = 0,
                                R = 0;
                            L = void 0;
                            for (var S = new _j({
                                    comments: H,
                                    delimiter: O,
                                    newline: F,
                                    preview: 10
                                }).parse(E), T = 0; T < S.data.length; T++)
                                if (G && _E(S.data[T]))
                                    R++;
                                else {
                                    var _U = S.data[T].length;
                                    _Q += _U, void 0 !== L ? 0 < _U && (P += Math.abs(_U - L), L = _U) : L = _U;
                                }
                            0 < S.data.length && (_Q /= S.data.length - R), (void 0 === K || P <= K) && (void 0 === M || M < _Q) && 1.99 < _Q && (K = P, J = O, M = _Q);
                        }
                        return {
                            successful: !!(k.delimiter = J),
                            bestDelimiter: J
                        };
                    }(z, k.newline, k.skipEmptyLines, k.comments, k.delimitersToGuess);
                    D.successful ? k.delimiter = D.bestDelimiter : (n = !0, k.delimiter = i.DefaultDelimiter), y.meta.delimiter = k.delimiter;
                }
                var D = _D(k);
                return k.preview && k.header && D.preview++, l = z, m = new _j(D), y = m.parse(l, A, B), _F(), v ? {
                    meta: {
                        paused: !0
                    }
                } : y || {
                    meta: {
                        paused: !1
                    }
                };
            }, this.paused = function() {
                return v;
            }, this.pause = function() {
                v = !0, m.abort(), l = _j(k.chunk) ? '' : l.substring(m.getCharIndex());
            }, this.resume = function() {
                s.streamer._halted ? (v = !1, s.streamer.parseChunk(l, !0)) : setTimeout(s.resume, 3);
            }, this.aborted = function() {
                return w;
            }, this.abort = function() {
                w = !0, m.abort(), y.meta.aborted = !0, _j(k.complete) && k.complete(y), l = '';
            };
        }

        function j(k) {
            return k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        function _j(k) {
            var l, m = (k = k || {}).delimiter,
                n = k.newline,
                o = k.comments,
                p = k.step,
                q = k.preview,
                r = k.fastMode,
                s = l = void 0 === k.quoteChar ? '"' : k.quoteChar;
            if (void 0 !== k.escapeChar && (s = k.escapeChar), ('string' != typeof m || -1 < i.BAD_DELIMITERS.indexOf(m)) && (m = ','), o === m)
                throw new Error('Comment character same as delimiter');
            !0 === o ? o = '#' : ('string' != typeof o || -1 < i.BAD_DELIMITERS.indexOf(o)) && (o = !1), '\n' !== n && '\r' !== n && '\r\n' !== n && (n = '\n');
            var t = 0,
                u = !1;
            this.parse = function(v, w, x) {
                if ('string' != typeof v)
                    throw new Error('Input must be a string');
                var y = v.length,
                    z = m.length,
                    A = n.length,
                    B = o.length,
                    C = _j(p),
                    _D = [],
                    _E = [],
                    _F = [],
                    G = t = 0;
                if (!v)
                    return _L();
                if (r || !1 !== r && -1 === v.indexOf(l)) {
                    for (var H = v.split(n), I = 0; I < H.length; I++) {
                        if (_F = H[I], t += _F.length, I !== H.length - 1)
                            t += n.length;
                        else if (x)
                            return _L();
                        if (!o || _F.substring(0, B) !== o) {
                            if (C) {
                                if (_D = [], _L(_F.split(m)), _L(), u)
                                    return _L();
                            } else
                                _L(_F.split(m));
                            if (q && q <= I)
                                return _D = _D.slice(0, q), _L(!0);
                        }
                    }
                    return _L();
                }
                for (var H = v.indexOf(m, t), I = v.indexOf(n, t), J = new RegExp(p(s) + p(l), 'g'), K = v.indexOf(l, t);;)
                    if (v[t] !== l)
                        if (o && 0 === _F.length && v.substring(t, t + B) === o) {
                            if (-1 === I)
                                return _L();
                            t = I + A, I = v.indexOf(n, t), H = v.indexOf(m, t);
                        } else {
                            if (-1 !== H && (H < I || -1 === I)) {
                                if (!(H < K)) {
                                    _F.push(v.substring(t, H)), t = H + z, H = v.indexOf(m, t);
                                    continue;
                                }
                                var L = _L(H, K, I);
                                if (L && void 0 !== L.nextDelim) {
                                    H = L.nextDelim, K = L.quoteSearch, _F.push(v.substring(t, H)), t = H + z, H = v.indexOf(m, t);
                                    continue;
                                }
                            }
                            if (-1 === I)
                                break;
                            if (_F.push(v.substring(t, I)), _L(I + A), C && (_L(), u))
                                return _L();
                            if (q && _D.length >= q)
                                return _L(!0);
                        }
                else
                    for (K = t, t++;;) {
                        if (-1 === (K = v.indexOf(l, K + 1)))
                            return x || _E.push({
                                type: 'Quotes',
                                code: 'MissingQuotes',
                                message: 'Quoted field unterminated',
                                row: _D.length,
                                index: t
                            }), _L();
                        if (K === y - 1)
                            return _L(v.substring(t, K).replace(J, l));
                        if (l !== s || v[K + 1] !== s) {
                            if (l === s || 0 === K || v[K - 1] !== s) {
                                -1 !== H && H < K + 1 && (H = v.indexOf(m, K + 1)), -1 !== I && I < K + 1 && (I = v.indexOf(n, K + 1));
                                var L = _L(-1 === I ? H : Math.min(H, I));
                                if (v[K + 1 + L] === m) {
                                    _F.push(v.substring(t, K).replace(J, l)), v[t = K + 1 + L + z] !== l && (K = v.indexOf(l, t)), H = v.indexOf(m, t), I = v.indexOf(n, t);
                                    break;
                                }
                                var M = _L(I);
                                if (v.substring(K + 1 + M, K + 1 + M + A) === n) {
                                    if (_F.push(v.substring(t, K).replace(J, l)), _L(K + 1 + M + A), H = v.indexOf(m, t), K = v.indexOf(l, t), C && (_L(), u))
                                        return _L();
                                    if (q && _D.length >= q)
                                        return _L(!0);
                                    break;
                                }
                                _E.push({
                                    type: 'Quotes',
                                    code: 'InvalidQuotes',
                                    message: 'Trailing quote on quoted field is malformed',
                                    row: _D.length,
                                    index: t
                                }), K++;
                            }
                        } else
                            K++;
                    }
                return _L();

                function _L(M) {
                    _D.push(M), G = t;
                }

                function _L(M) {
                    var N = 0;
                    if (-1 !== M) {
                        var O = v.substring(K + 1, M);
                        O && '' === O.trim() && (N = O.length);
                    }
                    return N;
                }

                function _L(M) {
                    return x || (void 0 === M && (M = v.substring(t)), _F.push(M), t = y, L(_F), C && _L()), _L();
                }

                function _L(M) {
                    t = M, L(_F), _F = [], I = v.indexOf(n, t);
                }

                function _L(M) {
                    return {
                        data: _D,
                        errors: _E,
                        meta: {
                            delimiter: m,
                            linebreak: n,
                            aborted: u,
                            truncated: !!M,
                            cursor: G + (w || 0)
                        }
                    };
                }

                function _L() {
                    p(q()), _D = [], _E = [];
                }

                function _L(M, N, O) {
                    var P = {
                            nextDelim: void 0,
                            quoteSearch: void 0
                        },
                        Q = v.indexOf(l, N + 1);
                    if (N < M && M < Q && (Q < O || -1 === O)) {
                        var R = v.indexOf(m, Q);
                        if (-1 === R)
                            return P;
                        Q < R && (Q = v.indexOf(l, Q + 1)), P = _L(R, Q, O);
                    } else
                        P = {
                            nextDelim: M,
                            quoteSearch: N
                        };
                    return P;
                }
            }, this.abort = function() {
                u = !0;
            }, this.getCharIndex = function() {
                return t;
            };
        }

        function j(k) {
            var l = k.data,
                m = g[l.workerId],
                n = !1;
            if (l.error)
                m.userError(l.error, l.file);
            else if (l.results && l.results.data) {
                var o = {
                    abort: function() {
                        n = !0, _j(l.workerId, {
                            data: [],
                            errors: [],
                            meta: {
                                aborted: !0
                            }
                        });
                    },
                    pause: _j,
                    resume: _j
                };
                if (_j(m.userStep)) {
                    for (var p = 0; p < l.results.data.length && (m.userStep({
                            data: l.results.data[p],
                            errors: l.results.errors,
                            meta: l.results.meta
                        }, o), !n); p++);
                    delete l.results;
                } else
                    _j(m.userChunk) && (m.userChunk(l.results, o, l.file), delete l.results);
            }
            l.finished && !n && _j(l.workerId, l.results);
        }

        function _j(k, l) {
            var m = g[k];
            _j(m.userComplete) && m.userComplete(l), m.terminate(), delete g[k];
        }

        function _j() {
            throw new Error('Not implemented.');
        }

        function j(k) {
            if ('object' != typeof k || null === k)
                return k;
            var l = Array.isArray(k) ? [] : {};
            for (var m in k)
                l[m] = j(k[m]);
            return l;
        }

        function j(k, l) {
            return function() {
                k.apply(l, arguments);
            };
        }

        function _j(k) {
            return 'function' == typeof k;
        }
        return f && (d.onmessage = function(j) {
            var k = j.data;
            if (void 0 === i.WORKER_ID && k && (i.WORKER_ID = k.workerId), 'string' == typeof k.input)
                d.postMessage({
                    workerId: i.WORKER_ID,
                    results: i.parse(k.input, k.config),
                    finished: !0
                });
            else if (d.File && k.input instanceof File || k.input instanceof Object) {
                var l = i.parse(k.input, k.config);
                l && d.postMessage({
                    workerId: i.WORKER_ID,
                    results: l,
                    finished: !0
                });
            }
        }), (u.prototype = Object.create(h.prototype)).constructor = u, (f.prototype = Object.create(h.prototype)).constructor = f, (d.prototype = Object.create(d.prototype)).constructor = d, (l.prototype = Object.create(h.prototype)).constructor = l, i;
    }, 'function' == typeof define && define.amd ? define([], c) : a.exports = c();
});