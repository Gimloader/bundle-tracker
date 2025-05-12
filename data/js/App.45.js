('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b.register('cOqKD', function (a, b) {
    var c;
    a.exports, c = function a() {
        var d = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : void 0 !== d ? d : {}, e = !d.document && !!d.postMessage, f = e && /blob:/i.test((d.location || {}).protocol), g = {}, h = 0, i = {
                parse: function (j, k) {
                    var l = (k = k || {}).dynamicTyping || !1;
                    if (_ob(l) && (k.dynamicTypingFunction = l, l = {}), k.dynamicTyping = l, k.transform = !!_ob(k.transform) && k.transform, k.worker && i.WORKERS_SUPPORTED) {
                        var m = function () {
                            if (!i.WORKERS_SUPPORTED)
                                return !1;
                            var n, o, p = (n = d.URL || d.webkitURL || null, o = a.toString(), i.BLOB_URL || (i.BLOB_URL = n.createObjectURL(new Blob([
                                    '(',
                                    o,
                                    ')();'
                                ], { type: 'text/javascript' })))), q = new d.Worker(p);
                            return q.onmessage = m, q.id = h++, g[q.id] = q;
                        }();
                        return m.userStep = k.step, m.userChunk = k.chunk, m.userComplete = k.complete, m.userError = k.error, k.step = _ob(k.step), k.chunk = _ob(k.chunk), k.complete = _ob(k.complete), k.error = _ob(k.error), delete k.worker, void m.postMessage({
                            input: j,
                            config: k,
                            workerId: m.id
                        });
                    }
                    var n = null;
                    return i.NODE_STREAM_INPUT, 'string' == typeof j ? n = k.download ? new _l(k) : new _r(k) : !0 === j.readable && _ob(j.read) && _ob(j.on) ? n = new _t(k) : (d.File && j instanceof File || j instanceof Object) && (n = new _n(k)), n.stream(j);
                },
                unparse: function (j, k) {
                    var l = !1, m = !0, n = ',', o = '\r\n', p = '"', q = p + p, r = !1, s = null, t = !1;
                    !function () {
                        if ('object' == typeof k) {
                            if ('string' != typeof k.delimiter || i.BAD_DELIMITERS.filter(function (u) {
                                    return -1 !== k.delimiter.indexOf(u);
                                }).length || (n = k.delimiter), ('boolean' == typeof k.quotes || 'function' == typeof k.quotes || Array.isArray(k.quotes)) && (l = k.quotes), 'boolean' != typeof k.skipEmptyLines && 'string' != typeof k.skipEmptyLines || (r = k.skipEmptyLines), 'string' == typeof k.newline && (o = k.newline), 'string' == typeof k.quoteChar && (p = k.quoteChar), 'boolean' == typeof k.header && (m = k.header), Array.isArray(k.columns)) {
                                if (0 === k.columns.length)
                                    throw new Error('Option columns is empty');
                                s = k.columns;
                            }
                            void 0 !== k.escapeChar && (q = k.escapeChar + p), 'boolean' == typeof k.escapeFormulae && (t = k.escapeFormulae);
                        }
                    }();
                    var u = new RegExp(_K(p), 'g');
                    if ('string' == typeof j && (j = JSON.parse(j)), Array.isArray(j)) {
                        if (!j.length || Array.isArray(j[0]))
                            return _y(null, j, r);
                        if ('object' == typeof j[0])
                            return _y(s || _v(j[0]), j, r);
                    } else if ('object' == typeof j)
                        return 'string' == typeof j.data && (j.data = JSON.parse(j.data)), Array.isArray(j.data) && (j.fields || (j.fields = j.meta && j.meta.fields), j.fields || (j.fields = Array.isArray(j.data[0]) ? j.fields : _v(j.data[0])), Array.isArray(j.data[0]) || 'object' == typeof j.data[0] || (j.data = [j.data])), _y(j.fields || [], j.data || [], r);
                    throw new Error('Unable to serialize unrecognized input');
                    function _v(w) {
                        if ('object' != typeof w)
                            return [];
                        var x = [];
                        for (var y in w)
                            x.push(y);
                        return x;
                    }
                    function _y(z, A, B) {
                        var C = '';
                        'string' == typeof z && (z = JSON.parse(z)), 'string' == typeof A && (A = JSON.parse(A));
                        var D = Array.isArray(z) && 0 < z.length, E = !Array.isArray(A[0]);
                        if (D && m) {
                            for (var F = 0; F < z.length; F++)
                                0 < F && (C += n), C += _M(z[F], F);
                            0 < A.length && (C += o);
                        }
                        for (var G = 0; G < A.length; G++) {
                            var H = D ? z.length : A[G].length, I = !1, J = D ? 0 === Object.keys(A[G]).length : 0 === A[G].length;
                            if (B && !D && (I = 'greedy' === B ? '' === A[G].join('').trim() : 1 === A[G].length && 0 === A[G][0].length), 'greedy' === B && D) {
                                for (var _K = [], L = 0; _y < H; _y++) {
                                    var M = E ? z[_y] : _y;
                                    _K.push(A[G][M]);
                                }
                                I = '' === _K.join('').trim();
                            }
                            if (!I) {
                                for (var N = 0; N < H; N++) {
                                    0 < N && !_v && (C += n);
                                    var O = D && E ? z[N] : N;
                                    C += _M(A[G][O], N);
                                }
                                G < A.length - 1 && (!B || 0 < H && !_v) && (C += o);
                            }
                        }
                        return C;
                    }
                    function _M(N, O) {
                        if (null == N)
                            return '';
                        if (N.constructor === Date)
                            return JSON.stringify(N).slice(1, 25);
                        !0 === H && 'string' == typeof N && null !== N.match(/^[=+\-@].*$/) && (N = '\'' + N);
                        var P = N.toString().replace(I, E), Q = 'boolean' == typeof y && y || 'function' == typeof y && y(N, O) || Array.isArray(y) && y[O] || function (R, S) {
                                for (var T = 0; T < S.length; T++)
                                    if (-1 < R.indexOf(S[T]))
                                        return !0;
                                return !1;
                            }(P, C.BAD_DELIMITERS) || -1 < P.indexOf(n) || ' ' === P.charAt(0) || ' ' === P.charAt(P.length - 1);
                        return Q ? D + P + D : P;
                    }
                }
            };
        if (i.RECORD_SEP = String.fromCharCode(30), i.UNIT_SEP = String.fromCharCode(31), i.BYTE_ORDER_MARK = '\uFEFF', i.BAD_DELIMITERS = [
                '\r',
                '\n',
                '"',
                i.BYTE_ORDER_MARK
            ], i.WORKERS_SUPPORTED = !e && !!d.Worker, i.NODE_STREAM_INPUT = 1, i.LocalChunkSize = 10485760, i.RemoteChunkSize = 5242880, i.DefaultDelimiter = ',', i.Parser = _R, i.ParserHandle = _x, i.NetworkStreamer = _l, i.FileStreamer = _n, i.StringStreamer = _r, i.ReadableStreamStreamer = _t, d.jQuery) {
            var j = d.jQuery;
            j.fn.parse = function (k) {
                var l = k.config || {}, m = [];
                return this.each(function (n) {
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
                        if (_ob(k.before)) {
                            var s = k.before(r.file, r.inputElem);
                            if ('object' == typeof s) {
                                if ('abort' === s.action)
                                    return o = r.file, p = r.inputElem, n = s.reason, void (_ob(k.error) && k.error({ name: 'AbortError' }, o, p, n));
                                if ('skip' === s.action)
                                    return void h();
                                'object' == typeof s.config && (r.instanceConfig = j.extend(r.instanceConfig, s.config));
                            } else if ('skip' === s)
                                return void h();
                        }
                        var t = r.instanceConfig.complete;
                        r.instanceConfig.complete = function (u) {
                            _ob(t) && t(u, r.file, r.inputElem), h();
                        }, i.parse(r.file, r.instanceConfig);
                    } else
                        _ob(k.complete) && k.complete();
                }
                function u() {
                    m.splice(0, 1), n();
                }
            };
        }
        function k(l) {
            this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = '', this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
                data: [],
                errors: [],
                meta: {}
            }, function (m) {
                var n = _kb(m);
                n.chunkSize = parseInt(n.chunkSize), m.step || m.chunk || (n.chunkSize = null), this._handle = new _x(n), (this._handle.streamer = this)._config = n;
            }.call(this, l), this.parseChunk = function (m, n) {
                if (this.isFirstChunk && _ob(this._config.beforeFirstChunk)) {
                    var o = this._config.beforeFirstChunk(m);
                    void 0 !== o && (m = o);
                }
                this.isFirstChunk = !1, this._halted = !1;
                var p = this._partialLine + m;
                this._partialLine = '';
                var q = this._handle.parse(p, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                    var r = q.meta.cursor;
                    this._finished || (this._partialLine = p.substring(r - this._baseIndex), this._baseIndex = r), q && q.data && (this._rowCount += q.data.length);
                    var s = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                    if (f)
                        d.postMessage({
                            results: q,
                            workerId: i.WORKER_ID,
                            finished: s
                        });
                    else if (_ob(this._config.chunk) && !n) {
                        if (this._config.chunk(q, this._handle), this._handle.paused() || this._handle.aborted())
                            return void (this._halted = !0);
                        q = void 0, this._completeResults = void 0;
                    }
                    return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(q.data), this._completeResults.errors = this._completeResults.errors.concat(q.errors), this._completeResults.meta = q.meta), this._completed || !s || !_ob(this._config.complete) || q && q.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), s || q && q.meta.paused || this._nextChunk(), q;
                }
                this._halted = !0;
            }, this._sendError = function (m) {
                _ob(this._config.error) ? this._config.error(m) : f && this._config.error && d.postMessage({
                    workerId: i.WORKER_ID,
                    error: m,
                    finished: !1
                });
            };
        }
        function _l(m) {
            var n;
            (m = m || {}).chunkSize || (m.chunkSize = i.RemoteChunkSize), k.call(this, m), this._nextChunk = e ? function () {
                this._readChunk(), this._chunkLoaded();
            } : function () {
                this._readChunk();
            }, this.stream = function (o) {
                this._input = o, this._nextChunk();
            }, this._readChunk = function () {
                if (this._finished)
                    this._chunkLoaded();
                else {
                    if (n = new XMLHttpRequest(), this._config.withCredentials && (n.withCredentials = this._config.withCredentials), e || (n.onload = _nb(this._chunkLoaded, this), n.onerror = _nb(this._chunkError, this)), n.open(this._config.downloadRequestBody ? 'POST' : 'GET', this._input, !e), this._config.downloadRequestHeaders) {
                        var o = this._config.downloadRequestHeaders;
                        for (var p in o)
                            n.setRequestHeader(p, o[p]);
                    }
                    if (this._config.chunkSize) {
                        var q = this._start + this._config.chunkSize - 1;
                        n.setRequestHeader('Range', 'bytes=' + this._start + '-' + q);
                    }
                    try {
                        n.send(this._config.downloadRequestBody);
                    } catch (o) {
                        this._chunkError(o.message);
                    }
                    e && 0 === n.status && this._chunkError();
                }
            }, this._chunkLoaded = function () {
                4 === n.readyState && (n.status < 200 || 400 <= n.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : n.responseText.length, this._finished = !this._config.chunkSize || this._start >= function (o) {
                    var p = o.getResponseHeader('Content-Range');
                    return null === p ? -1 : parseInt(p.substring(p.lastIndexOf('/') + 1));
                }(n), this.parseChunk(n.responseText)));
            }, this._chunkError = function (o) {
                var p = n.statusText || o;
                this._sendError(new Error(p));
            };
        }
        function _n(o) {
            var p, q;
            (o = o || {}).chunkSize || (o.chunkSize = i.LocalChunkSize), k.call(this, o);
            var r = 'undefined' != typeof FileReader;
            this.stream = function (s) {
                this._input = s, q = s.slice || s.webkitSlice || s.mozSlice, r ? ((p = new FileReader()).onload = _nb(this._chunkLoaded, this), p.onerror = _nb(this._chunkError, this)) : p = new FileReaderSync(), this._nextChunk();
            }, this._nextChunk = function () {
                this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
            }, this._readChunk = function () {
                var s = this._input;
                if (this._config.chunkSize) {
                    var t = Math.min(this._start + this._config.chunkSize, this._input.size);
                    s = q.call(s, this._start, t);
                }
                var u = p.readAsText(s, this._config.encoding);
                r || this._chunkLoaded({ target: { result: u } });
            }, this._chunkLoaded = function (s) {
                this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(s.target.result);
            }, this._chunkError = function () {
                this._sendError(p.error);
            };
        }
        function _r(s) {
            var t;
            k.call(this, s = s || {}), this.stream = function (u) {
                return t = u, this._nextChunk();
            }, this._nextChunk = function () {
                if (!this._finished) {
                    var u, v = this._config.chunkSize;
                    return v ? (u = t.substring(0, v), t = t.substring(v)) : (u = t, t = ''), this._finished = !t, this.parseChunk(u);
                }
            };
        }
        function _t(u) {
            k.call(this, u = u || {});
            var v = [], w = !0, x = !1;
            this.pause = function () {
                k.prototype.pause.apply(this, arguments), this._input.pause();
            }, this.resume = function () {
                k.prototype.resume.apply(this, arguments), this._input.resume();
            }, this.stream = function (y) {
                this._input = y, this._input.on('data', this._streamData), this._input.on('end', this._streamEnd), this._input.on('error', this._streamError);
            }, this._checkIsFinished = function () {
                x && 1 === v.length && (this._finished = !0);
            }, this._nextChunk = function () {
                this._checkIsFinished(), v.length ? this.parseChunk(v.shift()) : w = !0;
            }, this._streamData = _nb(function (y) {
                try {
                    v.push('string' == typeof y ? y : y.toString(this._config.encoding)), w && (w = !1, this._checkIsFinished(), this.parseChunk(v.shift()));
                } catch (y) {
                    this._streamError(y);
                }
            }, this), this._streamError = _nb(function (y) {
                this._streamCleanUp(), this._sendError(y);
            }, this), this._streamEnd = _nb(function () {
                this._streamCleanUp(), x = !0, this._streamData('');
            }, this), this._streamCleanUp = _nb(function () {
                this._input.removeListener('data', this._streamData), this._input.removeListener('end', this._streamEnd), this._input.removeListener('error', this._streamError);
            }, this);
        }
        function _x(y) {
            var z, A, B, C = Math.pow(2, 53), D = -C, E = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/, F = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/, G = this, H = 0, I = 0, J = !1, K = !1, L = [], M = {
                    data: [],
                    errors: [],
                    meta: {}
                };
            if (_ob(y.step)) {
                var N = y.step;
                y.step = function (O) {
                    if (M = O, _R())
                        _P();
                    else {
                        if (_P(), 0 === M.data.length)
                            return;
                        _n += O.data.length, y.preview && _n > y.preview ? A.abort() : (M.data = M.data[0], N(M, _l));
                    }
                };
            }
            function O(P) {
                return 'greedy' === y.skipEmptyLines ? '' === P.join('').trim() : 1 === P.length && 0 === P[0].length;
            }
            function _P() {
                if (M && B && (_U('Delimiter', 'UndetectableDelimiter', 'Unable to auto-detect delimiting character; defaulted to \'' + i.DefaultDelimiter + '\''), B = !1), y.skipEmptyLines)
                    for (var Q = 0; Q < M.data.length; Q++)
                        O(M.data[Q]) && M.data.splice(Q--, 1);
                return _R() && function () {
                    if (M)
                        if (Array.isArray(M.data[0])) {
                            for (var R = 0; _R() && R < M.data.length; R++)
                                M.data[R].forEach(A);
                            M.data.splice(0, 1);
                        } else
                            M.data.forEach(A);
                    function S(T, U) {
                        _ob(y.transformHeader) && (T = y.transformHeader(T, U)), L.push(T);
                    }
                }(), function () {
                    if (!M || !y.header && !y.dynamicTyping && !y.transform)
                        return M;
                    function R(S, T) {
                        var U, V = y.header ? {} : [];
                        for (U = 0; U < S.length; U++) {
                            var W = U, X = S[U];
                            y.header && (W = U >= L.length ? '__parsed_extra' : L[U]), y.transform && (X = y.transform(X, W)), X = _S(W, X), '__parsed_extra' === W ? (V[W] = V[W] || [], V[W].push(X)) : V[W] = X;
                        }
                        return y.header && (U > L.length ? _U('FieldMismatch', 'TooManyFields', 'Too many fields: expected ' + L.length + ' fields but parsed ' + U, _r + T) : U < L.length && _U('FieldMismatch', 'TooFewFields', 'Too few fields: expected ' + L.length + ' fields but parsed ' + U, _r + T)), V;
                    }
                    var W = 1;
                    return !M.data.length || Array.isArray(M.data[0]) ? (M.data = M.data.map(R), W = M.data.length) : M.data = R(M.data, 0), y.header && M.meta && (M.meta.fields = L), _r += W, M;
                }();
            }
            function _R() {
                return y.header && 0 === L.length;
            }
            function _S(T, U) {
                var V;
                return V = T, y.dynamicTypingFunction && void 0 === y.dynamicTyping[V] && (y.dynamicTyping[V] = y.dynamicTypingFunction(V)), !0 === (y.dynamicTyping[V] || y.dynamicTyping) ? 'true' === U || 'TRUE' === U || 'false' !== U && 'FALSE' !== U && (function (W) {
                    if (E.test(W)) {
                        var X = parseFloat(W);
                        if (D < X && X < C)
                            return !0;
                    }
                    return !1;
                }(U) ? parseFloat(U) : k.test(U) ? new Date(U) : '' === U ? null : U) : U;
            }
            function _U(V, W, X, Y) {
                var Z = {
                    type: V,
                    code: W,
                    message: X
                };
                void 0 !== Y && (Z.row = Y), M.errors.push(Z);
            }
            this.parse = function (W, X, Y) {
                var Z = y.quoteChar || '"';
                if (y.newline || (y.newline = function ($, ab) {
                        $ = $.substring(0, 1048576);
                        var bb = new RegExp(_Q(ab) + '([^]*?)' + _Q(ab), 'gm'), cb = ($ = $.replace(bb, '')).split('\r'), db = $.split('\n'), eb = 1 < db.length && db[0].length < cb[0].length;
                        if (1 === cb.length || eb)
                            return '\n';
                        for (var fb = 0, gb = 0; gb < cb.length; gb++)
                            '\n' === cb[gb][0] && fb++;
                        return fb >= cb.length / 2 ? '\r\n' : '\r';
                    }(W, Z)), V = !1, y.delimiter)
                    _ob(y.delimiter) && (y.delimiter = y.delimiter(W), M.meta.delimiter = y.delimiter);
                else {
                    var $ = function (ab, bb, cb, db, eb) {
                        var fb, gb, hb, ib;
                        eb = eb || [
                            ',',
                            '\t',
                            '|',
                            ';',
                            i.RECORD_SEP,
                            i.UNIT_SEP
                        ];
                        for (var jb = 0; jb < eb.length; jb++) {
                            var kb = eb[jb], lb = 0, mb = 0, nb = 0;
                            hb = void 0;
                            for (var ob = new _R({
                                        comments: db,
                                        delimiter: kb,
                                        newline: bb,
                                        preview: 10
                                    }).parse(ab), pb = 0; pb < ob.data.length; pb++)
                                if (cb && O(ob.data[pb]))
                                    nb++;
                                else {
                                    var qb = ob.data[pb].length;
                                    mb += qb, void 0 !== hb ? 0 < qb && (lb += Math.abs(qb - hb), hb = qb) : hb = qb;
                                }
                            0 < ob.data.length && (mb /= ob.data.length - nb), (void 0 === gb || lb <= gb) && (void 0 === ib || ib < mb) && 1.99 < mb && (gb = lb, fb = kb, ib = mb);
                        }
                        return {
                            successful: !!(y.delimiter = fb),
                            bestDelimiter: fb
                        };
                    }(W, y.newline, y.skipEmptyLines, y.comments, y.delimitersToGuess);
                    $.successful ? y.delimiter = $.bestDelimiter : (V = !0, y.delimiter = i.DefaultDelimiter), M.meta.delimiter = y.delimiter;
                }
                var ab = _kb(y);
                return y.preview && y.header && ab.preview++, Q = W, A = new _R(ab), M = A.parse(Q, X, Y), _P(), _t ? { meta: { paused: !0 } } : M || { meta: { paused: !1 } };
            }, this.paused = function () {
                return _t;
            }, this.pause = function () {
                _t = !0, A.abort(), Q = _ob(y.chunk) ? '' : Q.substring(A.getCharIndex());
            }, this.resume = function () {
                _l.streamer._halted ? (_t = !1, _l.streamer.parseChunk(Q, !0)) : setTimeout(_l.resume, 3);
            }, this.aborted = function () {
                return _x;
            }, this.abort = function () {
                _x = !0, A.abort(), M.meta.aborted = !0, _ob(y.complete) && y.complete(M), Q = '';
            };
        }
        function _Q(R) {
            return R.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        function _R(S) {
            var T, U = (S = S || {}).delimiter, V = S.newline, W = S.comments, X = S.step, Y = S.preview, Z = S.fastMode, $ = T = void 0 === S.quoteChar ? '"' : S.quoteChar;
            if (void 0 !== S.escapeChar && (_l = S.escapeChar), ('string' != typeof U || -1 < i.BAD_DELIMITERS.indexOf(U)) && (U = ','), W === U)
                throw new Error('Comment character same as delimiter');
            !0 === W ? W = '#' : ('string' != typeof W || -1 < i.BAD_DELIMITERS.indexOf(W)) && (W = !1), '\n' !== V && '\r' !== V && '\r\n' !== V && (V = '\n');
            var ab = 0, bb = !1;
            this.parse = function (cb, db, eb) {
                if ('string' != typeof cb)
                    throw new Error('Input must be a string');
                var fb = cb.length, gb = U.length, hb = V.length, ib = W.length, jb = _ob(X), kb = [], lb = [], mb = [], nb = _n = 0;
                if (!cb)
                    return _Db();
                if (k || !1 !== k && -1 === cb.indexOf(T)) {
                    for (var ob = cb.split(V), pb = 0; pb < ob.length; pb++) {
                        if (mb = ob[pb], _n += mb.length, pb !== ob.length - 1)
                            _n += V.length;
                        else if (eb)
                            return _Db();
                        if (!W || mb.substring(0, ib) !== W) {
                            if (jb) {
                                if (kb = [], _xb(mb.split(U)), _Eb(), _r)
                                    return _Db();
                            } else
                                _xb(mb.split(U));
                            if (Y && Y <= pb)
                                return kb = kb.slice(0, Y), _Db(!0);
                        }
                    }
                    return _Db();
                }
                for (var qb = cb.indexOf(U, _n), rb = cb.indexOf(V, _n), sb = new RegExp(_Q(_l) + _Q(T), 'g'), tb = cb.indexOf(T, _n);;)
                    if (cb[_n] !== T)
                        if (W && 0 === mb.length && cb.substring(_n, _n + ib) === W) {
                            if (-1 === rb)
                                return _Db();
                            _n = rb + hb, rb = cb.indexOf(V, _n), qb = cb.indexOf(U, _n);
                        } else {
                            if (-1 !== qb && (qb < rb || -1 === rb)) {
                                if (!(qb < tb)) {
                                    mb.push(cb.substring(_n, qb)), _n = qb + gb, qb = cb.indexOf(U, _n);
                                    continue;
                                }
                                var ub = _Fb(qb, tb, rb);
                                if (ub && void 0 !== ub.nextDelim) {
                                    qb = ub.nextDelim, tb = ub.quoteSearch, mb.push(cb.substring(_n, qb)), _n = qb + gb, qb = cb.indexOf(U, _n);
                                    continue;
                                }
                            }
                            if (-1 === rb)
                                break;
                            if (mb.push(cb.substring(_n, rb)), _Cb(rb + hb), jb && (_Eb(), _r))
                                return _Db();
                            if (Y && kb.length >= Y)
                                return _Db(!0);
                        }
                    else
                        for (tb = _n, _n++;;) {
                            if (-1 === (tb = cb.indexOf(T, tb + 1)))
                                return eb || lb.push({
                                    type: 'Quotes',
                                    code: 'MissingQuotes',
                                    message: 'Quoted field unterminated',
                                    row: kb.length,
                                    index: _n
                                }), _Bb();
                            if (tb === fb - 1)
                                return _Bb(cb.substring(_n, tb).replace(sb, T));
                            if (T !== _l || cb[tb + 1] !== _l) {
                                if (T === _l || 0 === tb || cb[tb - 1] !== _l) {
                                    -1 !== qb && qb < tb + 1 && (qb = cb.indexOf(U, tb + 1)), -1 !== rb && rb < tb + 1 && (rb = cb.indexOf(V, tb + 1));
                                    var vb = _yb(-1 === rb ? qb : Math.min(qb, rb));
                                    if (cb[tb + 1 + vb] === U) {
                                        mb.push(cb.substring(_n, tb).replace(sb, T)), cb[_n = tb + 1 + vb + gb] !== T && (tb = cb.indexOf(T, _n)), qb = cb.indexOf(U, _n), rb = cb.indexOf(V, _n);
                                        break;
                                    }
                                    var wb = _yb(rb);
                                    if (cb.substring(tb + 1 + wb, tb + 1 + wb + hb) === V) {
                                        if (mb.push(cb.substring(_n, tb).replace(sb, T)), _Cb(tb + 1 + wb + hb), qb = cb.indexOf(U, _n), tb = cb.indexOf(T, _n), jb && (_Eb(), _r))
                                            return _Db();
                                        if (Y && kb.length >= Y)
                                            return _Db(!0);
                                        break;
                                    }
                                    lb.push({
                                        type: 'Quotes',
                                        code: 'InvalidQuotes',
                                        message: 'Trailing quote on quoted field is malformed',
                                        row: kb.length,
                                        index: _n
                                    }), tb++;
                                }
                            } else
                                tb++;
                        }
                return _Bb();
                function _xb(yb) {
                    kb.push(yb), nb = _n;
                }
                function _yb(zb) {
                    var Ab = 0;
                    if (-1 !== zb) {
                        var Bb = cb.substring(tb + 1, zb);
                        Bb && '' === Bb.trim() && (Ab = Bb.length);
                    }
                    return Ab;
                }
                function _Bb(Cb) {
                    return eb || (void 0 === Cb && (Cb = cb.substring(_n)), mb.push(Cb), _n = fb, _xb(mb), jb && _Eb()), _Db();
                }
                function _Cb(Db) {
                    _n = Db, _xb(mb), mb = [], rb = cb.indexOf(Bb, _n);
                }
                function _Db(Eb) {
                    return {
                        data: kb,
                        errors: lb,
                        meta: {
                            delimiter: Ab,
                            linebreak: Bb,
                            aborted: _r,
                            truncated: !!Eb,
                            cursor: nb + (db || 0)
                        }
                    };
                }
                function _Eb() {
                    X(_Db()), kb = [], lb = [];
                }
                function _Fb(Gb, Hb, Ib) {
                    var Jb = {
                            nextDelim: void 0,
                            quoteSearch: void 0
                        }, Kb = cb.indexOf(T, Hb + 1);
                    if (Hb < Gb && Gb < Kb && (Kb < Ib || -1 === Ib)) {
                        var Lb = cb.indexOf(Ab, Kb);
                        if (-1 === Lb)
                            return Jb;
                        Kb < Lb && (Kb = cb.indexOf(T, Kb + 1)), Jb = _Fb(Lb, Kb, Ib);
                    } else
                        Jb = {
                            nextDelim: Gb,
                            quoteSearch: Hb
                        };
                    return Jb;
                }
            }, this.abort = function () {
                _r = !0;
            }, this.getCharIndex = function () {
                return _n;
            };
        }
        function bb(cb) {
            var db = cb.data, eb = W[db.workerId], fb = !1;
            if (db.error)
                eb.userError(db.error, db.file);
            else if (db.results && db.results.data) {
                var gb = {
                    abort: function () {
                        fb = !0, M(db.workerId, {
                            data: [],
                            errors: [],
                            meta: { aborted: !0 }
                        });
                    },
                    pause: N,
                    resume: N
                };
                if (_ob(eb.userStep)) {
                    for (var hb = 0; hb < db.results.data.length && (eb.userStep({
                            data: db.results.data[hb],
                            errors: db.results.errors,
                            meta: db.results.meta
                        }, gb), !fb); hb++);
                    delete db.results;
                } else
                    _ob(eb.userChunk) && (eb.userChunk(db.results, gb, db.file), delete db.results);
            }
            db.finished && !fb && M(db.workerId, db.results);
        }
        function hb(ib, jb) {
            var kb = W[ib];
            _ob(kb.userComplete) && kb.userComplete(jb), kb.terminate(), delete W[ib];
        }
        function jb() {
            throw new Error('Not implemented.');
        }
        function _kb(lb) {
            if ('object' != typeof lb || null === lb)
                return lb;
            var mb = Array.isArray(lb) ? [] : {};
            for (var nb in lb)
                mb[nb] = _kb(lb[nb]);
            return mb;
        }
        function _nb(ob, pb) {
            return function () {
                ob.apply(pb, arguments);
            };
        }
        function _ob(pb) {
            return 'function' == typeof pb;
        }
        return fb && (mb.onmessage = function (pb) {
            var qb = pb.data;
            if (void 0 === hb.WORKER_ID && qb && (hb.WORKER_ID = qb.workerId), 'string' == typeof qb.input)
                mb.postMessage({
                    workerId: hb.WORKER_ID,
                    results: hb.parse(qb.input, qb.config),
                    finished: !0
                });
            else if (mb.File && qb.input instanceof File || qb.input instanceof Object) {
                var rb = hb.parse(qb.input, qb.config);
                rb && mb.postMessage({
                    workerId: hb.WORKER_ID,
                    results: rb,
                    finished: !0
                });
            }
        }), (_l.prototype = Object.create(k.prototype)).constructor = _l, (_n.prototype = Object.create(k.prototype)).constructor = _n, (_r.prototype = Object.create(_r.prototype)).constructor = _r, (_t.prototype = Object.create(k.prototype)).constructor = _t, hb;
    }, 'function' == typeof define && define.amd ? define([], c) : a.exports = c();
});