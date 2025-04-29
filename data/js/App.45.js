('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b.register('mcC/4', function(a, b) {
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
                    if (_w(l) && (k.dynamicTypingFunction = l, l = {}), k.dynamicTyping = l, k.transform = !!_w(k.transform) && k.transform, k.worker && i.WORKERS_SUPPORTED) {
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
                            return q.onmessage = _x, q.id = h++, g[q.id] = q;
                        }();
                        return m.userStep = k.step, m.userChunk = k.chunk, m.userComplete = k.complete, m.userError = k.error, k.step = _w(k.step), k.chunk = _w(k.chunk), k.complete = _w(k.complete), k.error = _w(k.error), delete k.worker, void m.postMessage({
                            input: j,
                            config: k,
                            workerId: m.id
                        });
                    }
                    var m = null;
                    return i.NODE_STREAM_INPUT, 'string' == typeof j ? m = k.download ? new _r(k) : new _t(k) : !0 === j.readable && _w(j.read) && _w(j.on) ? m = new _u(k) : (d.File && j instanceof File || j instanceof Object) && (m = new _s(k)), m.stream(j);
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
                    var _u = new RegExp(_H(p), 'g');
                    if ('string' == typeof j && (j = JSON.parse(j)), Array.isArray(j)) {
                        if (!j.length || Array.isArray(j[0]))
                            return _w(null, j, _r);
                        if ('object' == typeof j[0])
                            return _w(_s || _v(j[0]), j, _r);
                    } else if ('object' == typeof j)
                        return 'string' == typeof j.data && (j.data = JSON.parse(j.data)), Array.isArray(j.data) && (j.fields || (j.fields = j.meta && j.meta.fields), j.fields || (j.fields = Array.isArray(j.data[0]) ? j.fields : _v(j.data[0])), Array.isArray(j.data[0]) || 'object' == typeof j.data[0] || (j.data = [j.data])), _w(j.fields || [], j.data || [], _r);
                    throw new Error('Unable to serialize unrecognized input');

                    function _v(w) {
                        if ('object' != typeof w)
                            return [];
                        var x = [];
                        for (var y in w)
                            x.push(y);
                        return x;
                    }

                    function _w(x, y, z) {
                        var A = '';
                        'string' == typeof x && (x = JSON.parse(x)), 'string' == typeof y && (y = JSON.parse(y));
                        var B = Array.isArray(x) && 0 < x.length,
                            C = !Array.isArray(y[0]);
                        if (B && m) {
                            for (var D = 0; D < x.length; D++)
                                0 < D && (A += n), A += _x(x[D], D);
                            0 < y.length && (A += o);
                        }
                        for (var D = 0; D < y.length; D++) {
                            var E = B ? x.length : y[D].length,
                                F = !1,
                                G = B ? 0 === Object.keys(y[D]).length : 0 === y[D].length;
                            if (z && !B && (F = 'greedy' === z ? '' === y[D].join('').trim() : 1 === y[D].length && 0 === y[D][0].length), 'greedy' === z && B) {
                                for (var _H = [], I = 0; I < E; I++) {
                                    var J = C ? x[I] : I;
                                    _H.push(y[D][J]);
                                }
                                F = '' === _H.join('').trim();
                            }
                            if (!F) {
                                for (var H = 0; H < E; H++) {
                                    0 < H && !G && (A += n);
                                    var I = B && C ? x[H] : H;
                                    A += _x(y[D][I], H);
                                }
                                D < y.length - 1 && (!z || 0 < E && !G) && (A += o);
                            }
                        }
                        return A;
                    }

                    function _x(y, z) {
                        if (null == y)
                            return '';
                        if (y.constructor === Date)
                            return JSON.stringify(y).slice(1, 25);
                        !0 === _t && 'string' == typeof y && null !== y.match(/^[=+\-@].*$/) && (y = '\'' + y);
                        var A = y.toString().replace(_u, q),
                            B = 'boolean' == typeof l && l || 'function' == typeof l && l(y, z) || Array.isArray(l) && l[z] || function(C, D) {
                                for (var E = 0; E < D.length; E++)
                                    if (-1 < C.indexOf(D[E]))
                                        return !0;
                                return !1;
                            }(A, i.BAD_DELIMITERS) || -1 < A.indexOf(n) || ' ' === A.charAt(0) || ' ' === A.charAt(A.length - 1);
                        return B ? p + A + p : A;
                    }
                }
            };
        if (i.RECORD_SEP = String.fromCharCode(30), i.UNIT_SEP = String.fromCharCode(31), i.BYTE_ORDER_MARK = '\uFEFF', i.BAD_DELIMITERS = [
                '\r',
                '\n',
                '"',
                i.BYTE_ORDER_MARK
            ], i.WORKERS_SUPPORTED = !e && !!d.Worker, i.NODE_STREAM_INPUT = 1, i.LocalChunkSize = 10485760, i.RemoteChunkSize = 5242880, i.DefaultDelimiter = ',', i.Parser = _q, i.ParserHandle = _o, i.NetworkStreamer = _s, i.FileStreamer = _s, i.StringStreamer = _m, i.ReadableStreamStreamer = _n, d.jQuery) {
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
                        if (_w(k.before)) {
                            var _s = k.before(r.file, r.inputElem);
                            if ('object' == typeof _s) {
                                if ('abort' === _s.action)
                                    return o = r.file, p = r.inputElem, q = _s.reason, void(_w(k.error) && k.error({
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
                            _w(_s) && _s(t, r.file, r.inputElem), h();
                        }, i.parse(r.file, r.instanceConfig);
                    } else
                        _w(k.complete) && k.complete();
                }

                function o() {
                    m.splice(0, 1), n();
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
                    var m = _db(l);
                    m.chunkSize = parseInt(m.chunkSize), l.step || l.chunk || (m.chunkSize = null), this._handle = new _o(m), (this._handle.streamer = this)._config = m;
                }.call(this, k), this.parseChunk = function(l, m) {
                    if (this.isFirstChunk && _w(this._config.beforeFirstChunk)) {
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
                        else if (_w(this._config.chunk) && !m) {
                            if (this._config.chunk(o, this._handle), this._handle.paused() || this._handle.aborted())
                                return void(this._halted = !0);
                            o = void 0, this._completeResults = void 0;
                        }
                        return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(o.data), this._completeResults.errors = this._completeResults.errors.concat(o.errors), this._completeResults.meta = o.meta), this._completed || !q || !_w(this._config.complete) || o && o.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), q || o && o.meta.paused || this._nextChunk(), o;
                    }
                    this._halted = !0;
                }, this._sendError = function(l) {
                    _w(this._config.error) ? this._config.error(l) : f && this._config.error && d.postMessage({
                        workerId: i.WORKER_ID,
                        error: l,
                        finished: !1
                    });
                };
        }

        function k(l) {
            var m;
            (l = l || {}).chunkSize || (l.chunkSize = i.RemoteChunkSize), j.call(this, l), this._nextChunk = e ? function() {
                this._readChunk(), this._chunkLoaded();
            } : function() {
                this._readChunk();
            }, this.stream = function(n) {
                this._input = n, this._nextChunk();
            }, this._readChunk = function() {
                if (this._finished)
                    this._chunkLoaded();
                else {
                    if (m = new XMLHttpRequest(), this._config.withCredentials && (m.withCredentials = this._config.withCredentials), e || (m.onload = _E(this._chunkLoaded, this), m.onerror = _E(this._chunkError, this)), m.open(this._config.downloadRequestBody ? 'POST' : 'GET', this._input, !e), this._config.downloadRequestHeaders) {
                        var n = this._config.downloadRequestHeaders;
                        for (var o in n)
                            m.setRequestHeader(o, n[o]);
                    }
                    if (this._config.chunkSize) {
                        var n = this._start + this._config.chunkSize - 1;
                        m.setRequestHeader('Range', 'bytes=' + this._start + '-' + n);
                    }
                    try {
                        m.send(this._config.downloadRequestBody);
                    } catch (l) {
                        this._chunkError(l.message);
                    }
                    e && 0 === m.status && this._chunkError();
                }
            }, this._chunkLoaded = function() {
                4 === m.readyState && (m.status < 200 || 400 <= m.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : m.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(n) {
                    var o = n.getResponseHeader('Content-Range');
                    return null === o ? -1 : parseInt(o.substring(o.lastIndexOf('/') + 1));
                }(m), this.parseChunk(m.responseText)));
            }, this._chunkError = function(n) {
                var o = m.statusText || n;
                this._sendError(new Error(o));
            };
        }

        function l(m) {
            var n, o;
            (m = m || {}).chunkSize || (m.chunkSize = i.LocalChunkSize), j.call(this, m);
            var p = 'undefined' != typeof FileReader;
            this.stream = function(q) {
                this._input = q, o = q.slice || q.webkitSlice || q.mozSlice, p ? ((n = new FileReader()).onload = _E(this._chunkLoaded, this), n.onerror = _E(this._chunkError, this)) : n = new FileReaderSync(), this._nextChunk();
            }, this._nextChunk = function() {
                this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
            }, this._readChunk = function() {
                var q = this._input;
                if (this._config.chunkSize) {
                    var r = Math.min(this._start + this._config.chunkSize, this._input.size);
                    q = o.call(q, this._start, r);
                }
                var r = n.readAsText(q, this._config.encoding);
                p || this._chunkLoaded({
                    target: {
                        result: r
                    }
                });
            }, this._chunkLoaded = function(q) {
                this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(q.target.result);
            }, this._chunkError = function() {
                this._sendError(n.error);
            };
        }

        function _m(n) {
            var o;
            j.call(this, n = n || {}), this.stream = function(p) {
                return o = p, this._nextChunk();
            }, this._nextChunk = function() {
                if (!this._finished) {
                    var p, q = this._config.chunkSize;
                    return q ? (p = o.substring(0, q), o = o.substring(q)) : (p = o, o = ''), this._finished = !o, this.parseChunk(p);
                }
            };
        }

        function _n(o) {
            j.call(this, o = o || {});
            var p = [],
                q = !0,
                r = !1;
            this.pause = function() {
                j.prototype.pause.apply(this, arguments), this._input.pause();
            }, this.resume = function() {
                j.prototype.resume.apply(this, arguments), this._input.resume();
            }, this.stream = function(s) {
                this._input = s, this._input.on('data', this._streamData), this._input.on('end', this._streamEnd), this._input.on('error', this._streamError);
            }, this._checkIsFinished = function() {
                r && 1 === p.length && (this._finished = !0);
            }, this._nextChunk = function() {
                this._checkIsFinished(), p.length ? this.parseChunk(p.shift()) : q = !0;
            }, this._streamData = _E(function(s) {
                try {
                    p.push('string' == typeof s ? s : s.toString(this._config.encoding)), q && (q = !1, this._checkIsFinished(), this.parseChunk(p.shift()));
                } catch (s) {
                    this._streamError(s);
                }
            }, this), this._streamError = _E(function(s) {
                this._streamCleanUp(), this._sendError(s);
            }, this), this._streamEnd = _E(function() {
                this._streamCleanUp(), r = !0, this._streamData('');
            }, this), this._streamCleanUp = _E(function() {
                this._input.removeListener('data', this._streamData), this._input.removeListener('end', this._streamEnd), this._input.removeListener('error', this._streamError);
            }, this);
        }

        function _o(p) {
            var q, r, s, t = Math.pow(2, 53),
                u = -t,
                v = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,
                w = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
                x = this,
                y = 0,
                z = 0,
                A = !1,
                B = !1,
                C = [],
                D = {
                    data: [],
                    errors: [],
                    meta: {}
                };
            if (_w(p.step)) {
                var E = p.step;
                p.step = function(F) {
                    if (D = F, _G())
                        _F();
                    else {
                        if (_F(), 0 === D.data.length)
                            return;
                        y += F.data.length, p.preview && y > p.preview ? r.abort() : (D.data = D.data[0], E(D, x));
                    }
                };
            }

            function _E(F) {
                return 'greedy' === p.skipEmptyLines ? '' === F.join('').trim() : 1 === F.length && 0 === F[0].length;
            }

            function _F() {
                if (D && s && (_I('Delimiter', 'UndetectableDelimiter', 'Unable to auto-detect delimiting character; defaulted to \'' + i.DefaultDelimiter + '\''), s = !1), p.skipEmptyLines)
                    for (var G = 0; G < D.data.length; G++)
                        _E(D.data[G]) && D.data.splice(G--, 1);
                return _G() && function() {
                        if (D)
                            if (Array.isArray(D.data[0])) {
                                for (var G = 0; _G() && G < D.data.length; G++)
                                    D.data[G].forEach(r);
                                D.data.splice(0, 1);
                            } else
                                D.data.forEach(r);

                        function G(H, I) {
                            _w(p.transformHeader) && (H = p.transformHeader(H, I)), C.push(H);
                        }
                    }(),
                    function() {
                        if (!D || !p.header && !p.dynamicTyping && !p.transform)
                            return D;

                        function G(H, I) {
                            var J, K = p.header ? {} : [];
                            for (J = 0; J < H.length; J++) {
                                var L = J,
                                    M = H[J];
                                p.header && (L = J >= C.length ? '__parsed_extra' : C[J]), p.transform && (M = p.transform(M, L)), M = _H(L, M), '__parsed_extra' === L ? (K[L] = K[L] || [], K[L].push(M)) : K[L] = M;
                            }
                            return p.header && (J > C.length ? _I('FieldMismatch', 'TooManyFields', 'Too many fields: expected ' + C.length + ' fields but parsed ' + J, z + I) : J < C.length && _I('FieldMismatch', 'TooFewFields', 'Too few fields: expected ' + C.length + ' fields but parsed ' + J, z + I)), K;
                        }
                        var H = 1;
                        return !D.data.length || Array.isArray(D.data[0]) ? (D.data = D.data.map(G), H = D.data.length) : D.data = G(D.data, 0), p.header && D.meta && (D.meta.fields = C), z += H, D;
                    }();
            }

            function _G() {
                return p.header && 0 === C.length;
            }

            function _H(I, J) {
                var K;
                return K = I, p.dynamicTypingFunction && void 0 === p.dynamicTyping[K] && (p.dynamicTyping[K] = p.dynamicTypingFunction(K)), !0 === (p.dynamicTyping[K] || p.dynamicTyping) ? 'true' === J || 'TRUE' === J || 'false' !== J && 'FALSE' !== J && (function(L) {
                    if (v.test(L)) {
                        var M = parseFloat(L);
                        if (u < M && M < t)
                            return !0;
                    }
                    return !1;
                }(J) ? parseFloat(J) : w.test(J) ? new Date(J) : '' === J ? null : J) : J;
            }

            function _I(J, K, L, M) {
                var N = {
                    type: J,
                    code: K,
                    message: L
                };
                void 0 !== M && (N.row = M), D.errors.push(N);
            }
            this.parse = function(J, K, L) {
                var M = p.quoteChar || '"';
                if (p.newline || (p.newline = function(N, O) {
                        N = N.substring(0, 1048576);
                        var P = new RegExp(_$(O) + '([^]*?)' + _$(O), 'gm'),
                            Q = (N = N.replace(P, '')).split('\r'),
                            R = N.split('\n'),
                            S = 1 < R.length && R[0].length < Q[0].length;
                        if (1 === Q.length || S)
                            return '\n';
                        for (var T = 0, U = 0; U < Q.length; U++)
                            '\n' === Q[U][0] && T++;
                        return T >= Q.length / 2 ? '\r\n' : '\r';
                    }(J, M)), s = !1, p.delimiter)
                    _w(p.delimiter) && (p.delimiter = p.delimiter(J), D.meta.delimiter = p.delimiter);
                else {
                    var N = function(O, P, Q, R, S) {
                        var T, U, V, W;
                        S = S || [
                            ',',
                            '\t',
                            '|',
                            ';',
                            i.RECORD_SEP,
                            i.UNIT_SEP
                        ];
                        for (var X = 0; X < S.length; X++) {
                            var Y = S[X],
                                Z = 0,
                                _$ = 0,
                                ab = 0;
                            V = void 0;
                            for (var bb = new _q({
                                    comments: R,
                                    delimiter: Y,
                                    newline: P,
                                    preview: 10
                                }).parse(O), cb = 0; cb < bb.data.length; cb++)
                                if (Q && _E(bb.data[cb]))
                                    ab++;
                                else {
                                    var _db = bb.data[cb].length;
                                    _$ += _db, void 0 !== V ? 0 < _db && (Z += Math.abs(_db - V), V = _db) : V = _db;
                                }
                            0 < bb.data.length && (_$ /= bb.data.length - ab), (void 0 === U || Z <= U) && (void 0 === W || W < _$) && 1.99 < _$ && (U = Z, T = Y, W = _$);
                        }
                        return {
                            successful: !!(p.delimiter = T),
                            bestDelimiter: T
                        };
                    }(J, p.newline, p.skipEmptyLines, p.comments, p.delimitersToGuess);
                    N.successful ? p.delimiter = N.bestDelimiter : (s = !0, p.delimiter = i.DefaultDelimiter), D.meta.delimiter = p.delimiter;
                }
                var N = _K(p);
                return p.preview && p.header && N.preview++, q = J, r = new _q(N), D = r.parse(q, K, L), _F(), A ? {
                    meta: {
                        paused: !0
                    }
                } : D || {
                    meta: {
                        paused: !1
                    }
                };
            }, this.paused = function() {
                return A;
            }, this.pause = function() {
                A = !0, r.abort(), q = _w(p.chunk) ? '' : q.substring(r.getCharIndex());
            }, this.resume = function() {
                x.streamer._halted ? (A = !1, x.streamer.parseChunk(q, !0)) : setTimeout(x.resume, 3);
            }, this.aborted = function() {
                return B;
            }, this.abort = function() {
                B = !0, r.abort(), D.meta.aborted = !0, _w(p.complete) && p.complete(D), q = '';
            };
        }

        function p(q) {
            return q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        function _q(r) {
            var s, t = (r = r || {}).delimiter,
                u = r.newline,
                v = r.comments,
                w = r.step,
                x = r.preview,
                y = r.fastMode,
                z = s = void 0 === r.quoteChar ? '"' : r.quoteChar;
            if (void 0 !== r.escapeChar && (z = r.escapeChar), ('string' != typeof t || -1 < i.BAD_DELIMITERS.indexOf(t)) && (t = ','), v === t)
                throw new Error('Comment character same as delimiter');
            !0 === v ? v = '#' : ('string' != typeof v || -1 < i.BAD_DELIMITERS.indexOf(v)) && (v = !1), '\n' !== u && '\r' !== u && '\r\n' !== u && (u = '\n');
            var A = 0,
                B = !1;
            this.parse = function(C, D, E) {
                if ('string' != typeof C)
                    throw new Error('Input must be a string');
                var F = C.length,
                    G = t.length,
                    H = u.length,
                    I = v.length,
                    J = _w(w),
                    _K = [],
                    L = [],
                    M = [],
                    N = A = 0;
                if (!C)
                    return _W();
                if (y || !1 !== y && -1 === C.indexOf(s)) {
                    for (var O = C.split(u), P = 0; P < O.length; P++) {
                        if (M = O[P], A += M.length, P !== O.length - 1)
                            A += u.length;
                        else if (E)
                            return _W();
                        if (!v || M.substring(0, I) !== v) {
                            if (J) {
                                if (_K = [], _S(M.split(t)), _X(), B)
                                    return _W();
                            } else
                                _S(M.split(t));
                            if (x && x <= P)
                                return _K = _K.slice(0, x), _W(!0);
                        }
                    }
                    return _W();
                }
                for (var O = C.indexOf(t, A), P = C.indexOf(u, A), Q = new RegExp(p(z) + p(s), 'g'), R = C.indexOf(s, A);;)
                    if (C[A] !== s)
                        if (v && 0 === M.length && C.substring(A, A + I) === v) {
                            if (-1 === P)
                                return _W();
                            A = P + H, P = C.indexOf(u, A), O = C.indexOf(t, A);
                        } else {
                            if (-1 !== O && (O < P || -1 === P)) {
                                if (!(O < R)) {
                                    M.push(C.substring(A, O)), A = O + G, O = C.indexOf(t, A);
                                    continue;
                                }
                                var S = _Y(O, R, P);
                                if (S && void 0 !== S.nextDelim) {
                                    O = S.nextDelim, R = S.quoteSearch, M.push(C.substring(A, O)), A = O + G, O = C.indexOf(t, A);
                                    continue;
                                }
                            }
                            if (-1 === P)
                                break;
                            if (M.push(C.substring(A, P)), _V(P + H), J && (_X(), B))
                                return _W();
                            if (x && _K.length >= x)
                                return _W(!0);
                        }
                else
                    for (R = A, A++;;) {
                        if (-1 === (R = C.indexOf(s, R + 1)))
                            return E || L.push({
                                type: 'Quotes',
                                code: 'MissingQuotes',
                                message: 'Quoted field unterminated',
                                row: _K.length,
                                index: A
                            }), _U();
                        if (R === F - 1)
                            return _U(C.substring(A, R).replace(Q, s));
                        if (s !== z || C[R + 1] !== z) {
                            if (s === z || 0 === R || C[R - 1] !== z) {
                                -1 !== O && O < R + 1 && (O = C.indexOf(t, R + 1)), -1 !== P && P < R + 1 && (P = C.indexOf(u, R + 1));
                                var S = _T(-1 === P ? O : Math.min(O, P));
                                if (C[R + 1 + S] === t) {
                                    M.push(C.substring(A, R).replace(Q, s)), C[A = R + 1 + S + G] !== s && (R = C.indexOf(s, A)), O = C.indexOf(t, A), P = C.indexOf(u, A);
                                    break;
                                }
                                var T = _T(P);
                                if (C.substring(R + 1 + T, R + 1 + T + H) === u) {
                                    if (M.push(C.substring(A, R).replace(Q, s)), _V(R + 1 + T + H), O = C.indexOf(t, A), R = C.indexOf(s, A), J && (_X(), B))
                                        return _W();
                                    if (x && _K.length >= x)
                                        return _W(!0);
                                    break;
                                }
                                L.push({
                                    type: 'Quotes',
                                    code: 'InvalidQuotes',
                                    message: 'Trailing quote on quoted field is malformed',
                                    row: _K.length,
                                    index: A
                                }), R++;
                            }
                        } else
                            R++;
                    }
                return _U();

                function _S(T) {
                    _K.push(T), N = A;
                }

                function _T(U) {
                    var V = 0;
                    if (-1 !== U) {
                        var W = C.substring(R + 1, U);
                        W && '' === W.trim() && (V = W.length);
                    }
                    return V;
                }

                function _U(V) {
                    return E || (void 0 === V && (V = C.substring(A)), M.push(V), A = F, _S(M), J && _X()), _W();
                }

                function _V(W) {
                    A = W, _S(M), M = [], P = C.indexOf(u, A);
                }

                function _W(X) {
                    return {
                        data: _K,
                        errors: L,
                        meta: {
                            delimiter: t,
                            linebreak: u,
                            aborted: B,
                            truncated: !!X,
                            cursor: N + (D || 0)
                        }
                    };
                }

                function _X() {
                    w(_W()), _K = [], L = [];
                }

                function _Y(Z, $, ab) {
                    var bb = {
                            nextDelim: void 0,
                            quoteSearch: void 0
                        },
                        cb = C.indexOf(s, $ + 1);
                    if ($ < Z && Z < cb && (cb < ab || -1 === ab)) {
                        var db = C.indexOf(t, cb);
                        if (-1 === db)
                            return bb;
                        cb < db && (cb = C.indexOf(s, cb + 1)), bb = _Y(db, cb, ab);
                    } else
                        bb = {
                            nextDelim: Z,
                            quoteSearch: $
                        };
                    return bb;
                }
            }, this.abort = function() {
                B = !0;
            }, this.getCharIndex = function() {
                return A;
            };
        }

        function r(s) {
            var t = s.data,
                u = g[t.workerId],
                v = !1;
            if (t.error)
                u.userError(t.error, t.file);
            else if (t.results && t.results.data) {
                var w = {
                    abort: function() {
                        v = !0, _s(t.workerId, {
                            data: [],
                            errors: [],
                            meta: {
                                aborted: !0
                            }
                        });
                    },
                    pause: _t,
                    resume: _t
                };
                if (_w(u.userStep)) {
                    for (var x = 0; x < t.results.data.length && (u.userStep({
                            data: t.results.data[x],
                            errors: t.results.errors,
                            meta: t.results.meta
                        }, w), !v); x++);
                    delete t.results;
                } else
                    _w(u.userChunk) && (u.userChunk(t.results, w, t.file), delete t.results);
            }
            t.finished && !v && _s(t.workerId, t.results);
        }

        function _s(t, u) {
            var v = g[t];
            _w(v.userComplete) && v.userComplete(u), v.terminate(), delete g[t];
        }

        function _t() {
            throw new Error('Not implemented.');
        }

        function u(v) {
            if ('object' != typeof v || null === v)
                return v;
            var w = Array.isArray(v) ? [] : {};
            for (var x in v)
                w[x] = u(v[x]);
            return w;
        }

        function v(w, x) {
            return function() {
                w.apply(x, arguments);
            };
        }

        function _w(x) {
            return 'function' == typeof x;
        }
        return f && (d.onmessage = function(x) {
            var y = x.data;
            if (void 0 === i.WORKER_ID && y && (i.WORKER_ID = y.workerId), 'string' == typeof y.input)
                d.postMessage({
                    workerId: i.WORKER_ID,
                    results: i.parse(y.input, y.config),
                    finished: !0
                });
            else if (d.File && y.input instanceof File || y.input instanceof Object) {
                var z = i.parse(y.input, y.config);
                z && d.postMessage({
                    workerId: i.WORKER_ID,
                    results: z,
                    finished: !0
                });
            }
        }), (k.prototype = Object.create(j.prototype)).constructor = k, (l.prototype = Object.create(j.prototype)).constructor = l, (_m.prototype = Object.create(_m.prototype)).constructor = _m, (_n.prototype = Object.create(j.prototype)).constructor = _n, i;
    }, 'function' == typeof define && define.amd ? define([], c) : a.exports = c();
});