('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b.register('UB3CJ', function(k, b) {
    var a;
    k.exports, a = function k() {
        var b = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : void 0 !== b ? b : {},
            c = !b.document && !!b.postMessage,
            d = c && /blob:/i.test((b.location || {}).protocol),
            e = {},
            f = 0,
            g = {
                parse: function(c, d) {
                    var h = (d = d || {}).dynamicTyping || !1;
                    if (u(h) && (d.dynamicTypingFunction = h, h = {}), d.dynamicTyping = h, d.transform = !!u(d.transform) && d.transform, d.worker && g.WORKERS_SUPPORTED) {
                        var i = function() {
                            if (!g.WORKERS_SUPPORTED)
                                return !1;
                            var j, k, l = (j = b.URL || b.webkitURL || null, k = k.toString(), g.BLOB_URL || (g.BLOB_URL = j.createObjectURL(new Blob([
                                    '(',
                                    k,
                                    ')();'
                                ], {
                                    type: 'text/javascript'
                                })))),
                                m = new b.Worker(l);
                            return m.onmessage = t, m.id = f++, e[m.id] = m;
                        }();
                        return i.userStep = d.step, i.userChunk = d.chunk, i.userComplete = d.complete, i.userError = d.error, d.step = u(d.step), d.chunk = u(d.chunk), d.complete = u(d.complete), d.error = u(d.error), delete d.worker, void i.postMessage({
                            input: c,
                            config: d,
                            workerId: i.id
                        });
                    }
                    var i = null;
                    return g.NODE_STREAM_INPUT, 'string' == typeof c ? i = d.download ? new n(d) : new p(d) : !0 === c.readable && u(c.read) && u(c.on) ? i = new q(d) : (b.File && c instanceof File || c instanceof Object) && (i = new o(d)), i.stream(c);
                },
                unparse: function(k, b) {
                    var h = !1,
                        i = !0,
                        j = ',',
                        k = '\r\n',
                        l = '"',
                        m = l + l,
                        n = !1,
                        o = null,
                        p = !1;
                    ! function() {
                        if ('object' == typeof b) {
                            if ('string' != typeof b.delimiter || g.BAD_DELIMITERS.filter(function(k) {
                                    return -1 !== b.delimiter.indexOf(k);
                                }).length || (j = b.delimiter), ('boolean' == typeof b.quotes || 'function' == typeof b.quotes || Array.isArray(b.quotes)) && (h = b.quotes), 'boolean' != typeof b.skipEmptyLines && 'string' != typeof b.skipEmptyLines || (n = b.skipEmptyLines), 'string' == typeof b.newline && (k = b.newline), 'string' == typeof b.quoteChar && (l = b.quoteChar), 'boolean' == typeof b.header && (i = b.header), Array.isArray(b.columns)) {
                                if (0 === b.columns.length)
                                    throw new Error('Option columns is empty');
                                o = b.columns;
                            }
                            void 0 !== b.escapeChar && (m = b.escapeChar + l), 'boolean' == typeof b.escapeFormulae && (p = b.escapeFormulae);
                        }
                    }();
                    var q = new RegExp(A(l), 'g');
                    if ('string' == typeof k && (k = JSON.parse(k)), Array.isArray(k)) {
                        if (!k.length || Array.isArray(k[0]))
                            return s(null, k, n);
                        if ('object' == typeof k[0])
                            return s(o || r(k[0]), k, n);
                    } else if ('object' == typeof k)
                        return 'string' == typeof k.data && (k.data = JSON.parse(k.data)), Array.isArray(k.data) && (k.fields || (k.fields = k.meta && k.meta.fields), k.fields || (k.fields = Array.isArray(k.data[0]) ? k.fields : r(k.data[0])), Array.isArray(k.data[0]) || 'object' == typeof k.data[0] || (k.data = [k.data])), s(k.fields || [], k.data || [], n);
                    throw new Error('Unable to serialize unrecognized input');

                    function r(k) {
                        if ('object' != typeof k)
                            return [];
                        var s = [];
                        for (var t in k)
                            s.push(t);
                        return s;
                    }

                    function s(k, b, h) {
                        var t = '';
                        'string' == typeof k && (k = JSON.parse(k)), 'string' == typeof b && (b = JSON.parse(b));
                        var u = Array.isArray(k) && 0 < k.length,
                            v = !Array.isArray(b[0]);
                        if (u && i) {
                            for (var w = 0; w < k.length; w++)
                                0 < w && (t += j), t += t(k[w], w);
                            0 < b.length && (t += k);
                        }
                        for (var w = 0; w < b.length; w++) {
                            var x = u ? k.length : b[w].length,
                                y = !1,
                                z = u ? 0 === Object.keys(b[w]).length : 0 === b[w].length;
                            if (h && !u && (y = 'greedy' === h ? '' === b[w].join('').trim() : 1 === b[w].length && 0 === b[w][0].length), 'greedy' === h && u) {
                                for (var A = [], B = 0; B < x; B++) {
                                    var C = v ? k[B] : B;
                                    A.push(b[w][C]);
                                }
                                y = '' === A.join('').trim();
                            }
                            if (!y) {
                                for (var A = 0; A < x; A++) {
                                    0 < A && !z && (t += j);
                                    var B = u && v ? k[A] : A;
                                    t += t(b[w][B], A);
                                }
                                w < b.length - 1 && (!h || 0 < x && !z) && (t += k);
                            }
                        }
                        return t;
                    }

                    function t(k, b) {
                        if (null == k)
                            return '';
                        if (k.constructor === Date)
                            return JSON.stringify(k).slice(1, 25);
                        !0 === p && 'string' == typeof k && null !== k.match(/^[=+\-@].*$/) && (k = '\'' + k);
                        var u = k.toString().replace(q, m),
                            v = 'boolean' == typeof h && h || 'function' == typeof h && h(k, b) || Array.isArray(h) && h[b] || function(k, b) {
                                for (var w = 0; w < b.length; w++)
                                    if (-1 < k.indexOf(b[w]))
                                        return !0;
                                return !1;
                            }(u, g.BAD_DELIMITERS) || -1 < u.indexOf(j) || ' ' === u.charAt(0) || ' ' === u.charAt(u.length - 1);
                        return v ? l + u + l : u;
                    }
                }
            };
        if (g.RECORD_SEP = String.fromCharCode(30), g.UNIT_SEP = String.fromCharCode(31), g.BYTE_ORDER_MARK = '\uFEFF', g.BAD_DELIMITERS = [
                '\r',
                '\n',
                '"',
                g.BYTE_ORDER_MARK
            ], g.WORKERS_SUPPORTED = !h && !!b.Worker, g.NODE_STREAM_INPUT = 1, g.LocalChunkSize = 10485760, g.RemoteChunkSize = 5242880, g.DefaultDelimiter = ',', g.Parser = s, g.ParserHandle = r, g.NetworkStreamer = n, g.FileStreamer = o, g.StringStreamer = p, g.ReadableStreamStreamer = q, b.jQuery) {
            var u = b.jQuery;
            u.fn.parse = function(k) {
                var v = k.config || {},
                    w = [];
                return this.each(function(k) {
                    if ('INPUT' !== u(this).prop('tagName').toUpperCase() || 'file' !== u(this).attr('type').toLowerCase() || !b.FileReader || !this.files || 0 === this.files.length)
                        return !0;
                    for (var x = 0; x < this.files.length; x++)
                        w.push({
                            file: this.files[x],
                            inputElem: this,
                            instanceConfig: u.extend({}, v)
                        });
                }), j(), this;

                function x() {
                    if (0 !== w.length) {
                        var y, z, A, B = w[0];
                        if (u(k.before)) {
                            var C = k.before(B.file, B.inputElem);
                            if ('object' == typeof C) {
                                if ('abort' === C.action)
                                    return y = B.file, z = B.inputElem, A = C.reason, void(u(k.error) && k.error({
                                        name: 'AbortError'
                                    }, y, z, A));
                                if ('skip' === C.action)
                                    return void k();
                                'object' == typeof C.config && (B.instanceConfig = u.extend(B.instanceConfig, C.config));
                            } else if ('skip' === C)
                                return void k();
                        }
                        var C = B.instanceConfig.complete;
                        B.instanceConfig.complete = function(k) {
                            u(C) && C(k, B.file, B.inputElem), k();
                        }, g.parse(B.file, B.instanceConfig);
                    } else
                        u(k.complete) && k.complete();
                }

                function y() {
                    w.splice(0, 1), x();
                }
            };
        }

        function h(k) {
            this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = '', this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
                    data: [],
                    errors: [],
                    meta: {}
                },
                function(k) {
                    var i = T(k);
                    i.chunkSize = parseInt(i.chunkSize), k.step || k.chunk || (i.chunkSize = null), this._handle = new m(i), (this._handle.streamer = this)._config = i;
                }.call(this, k), this.parseChunk = function(k, c) {
                    if (this.isFirstChunk && u(this._config.beforeFirstChunk)) {
                        var i = this._config.beforeFirstChunk(k);
                        void 0 !== i && (k = i);
                    }
                    this.isFirstChunk = !1, this._halted = !1;
                    var i = this._partialLine + k;
                    this._partialLine = '';
                    var j = this._handle.parse(i, this._baseIndex, !this._finished);
                    if (!this._handle.paused() && !this._handle.aborted()) {
                        var k = j.meta.cursor;
                        this._finished || (this._partialLine = i.substring(k - this._baseIndex), this._baseIndex = k), j && j.data && (this._rowCount += j.data.length);
                        var l = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                        if (d)
                            b.postMessage({
                                results: j,
                                workerId: g.WORKER_ID,
                                finished: l
                            });
                        else if (u(this._config.chunk) && !c) {
                            if (this._config.chunk(j, this._handle), this._handle.paused() || this._handle.aborted())
                                return void(this._halted = !0);
                            j = void 0, this._completeResults = void 0;
                        }
                        return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(j.data), this._completeResults.errors = this._completeResults.errors.concat(j.errors), this._completeResults.meta = j.meta), this._completed || !l || !u(this._config.complete) || j && j.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), l || j && j.meta.paused || this._nextChunk(), j;
                    }
                    this._halted = !0;
                }, this._sendError = function(k) {
                    u(this._config.error) ? this._config.error(k) : d && this._config.error && b.postMessage({
                        workerId: g.WORKER_ID,
                        error: k,
                        finished: !1
                    });
                };
        }

        function i(k) {
            var j;
            (k = k || {}).chunkSize || (k.chunkSize = g.RemoteChunkSize), h.call(this, k), this._nextChunk = c ? function() {
                this._readChunk(), this._chunkLoaded();
            } : function() {
                this._readChunk();
            }, this.stream = function(k) {
                this._input = k, this._nextChunk();
            }, this._readChunk = function() {
                if (this._finished)
                    this._chunkLoaded();
                else {
                    if (j = new XMLHttpRequest(), this._config.withCredentials && (j.withCredentials = this._config.withCredentials), c || (j.onload = B(this._chunkLoaded, this), j.onerror = B(this._chunkError, this)), j.open(this._config.downloadRequestBody ? 'POST' : 'GET', this._input, !c), this._config.downloadRequestHeaders) {
                        var k = this._config.downloadRequestHeaders;
                        for (var l in k)
                            j.setRequestHeader(l, k[l]);
                    }
                    if (this._config.chunkSize) {
                        var m = this._start + this._config.chunkSize - 1;
                        j.setRequestHeader('Range', 'bytes=' + this._start + '-' + m);
                    }
                    try {
                        j.send(this._config.downloadRequestBody);
                    } catch (n) {
                        this._chunkError(n.message);
                    }
                    c && 0 === j.status && this._chunkError();
                }
            }, this._chunkLoaded = function() {
                4 === j.readyState && (j.status < 200 || 400 <= j.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : j.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(n) {
                    var k = n.getResponseHeader('Content-Range');
                    return null === k ? -1 : parseInt(k.substring(k.lastIndexOf('/') + 1));
                }(j), this.parseChunk(j.responseText)));
            }, this._chunkError = function(n) {
                var k = j.statusText || n;
                this._sendError(new Error(k));
            };
        }

        function j(n) {
            var k, l;
            (n = n || {}).chunkSize || (n.chunkSize = g.LocalChunkSize), h.call(this, n);
            var m = 'undefined' != typeof FileReader;
            this.stream = function(n) {
                this._input = n, l = n.slice || n.webkitSlice || n.mozSlice, m ? ((k = new FileReader()).onload = B(this._chunkLoaded, this), k.onerror = B(this._chunkError, this)) : k = new FileReaderSync(), this._nextChunk();
            }, this._nextChunk = function() {
                this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
            }, this._readChunk = function() {
                var n = this._input;
                if (this._config.chunkSize) {
                    var o = Math.min(this._start + this._config.chunkSize, this._input.size);
                    n = l.call(n, this._start, o);
                }
                var o = k.readAsText(n, this._config.encoding);
                m || this._chunkLoaded({
                    target: {
                        result: o
                    }
                });
            }, this._chunkLoaded = function(m) {
                this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(m.target.result);
            }, this._chunkError = function() {
                this._sendError(k.error);
            };
        }

        function k(m) {
            var l;
            h.call(this, m = m || {}), this.stream = function(m) {
                return l = m, this._nextChunk();
            }, this._nextChunk = function() {
                if (!this._finished) {
                    var m, n = this._config.chunkSize;
                    return n ? (m = l.substring(0, n), l = l.substring(n)) : (m = l, l = ''), this._finished = !l, this.parseChunk(m);
                }
            };
        }

        function l(e) {
            h.call(this, e = e || {});
            var m = [],
                n = !0,
                o = !1;
            this.pause = function() {
                h.prototype.pause.apply(this, arguments), this._input.pause();
            }, this.resume = function() {
                h.prototype.resume.apply(this, arguments), this._input.resume();
            }, this.stream = function(e) {
                this._input = e, this._input.on('data', this._streamData), this._input.on('end', this._streamEnd), this._input.on('error', this._streamError);
            }, this._checkIsFinished = function() {
                o && 1 === m.length && (this._finished = !0);
            }, this._nextChunk = function() {
                this._checkIsFinished(), m.length ? this.parseChunk(m.shift()) : n = !0;
            }, this._streamData = B(function(e) {
                try {
                    m.push('string' == typeof e ? e : e.toString(this._config.encoding)), n && (n = !1, this._checkIsFinished(), this.parseChunk(m.shift()));
                } catch (e) {
                    this._streamError(e);
                }
            }, this), this._streamError = B(function(e) {
                this._streamCleanUp(), this._sendError(e);
            }, this), this._streamEnd = B(function() {
                this._streamCleanUp(), o = !0, this._streamData('');
            }, this), this._streamCleanUp = B(function() {
                this._input.removeListener('data', this._streamData), this._input.removeListener('end', this._streamEnd), this._input.removeListener('error', this._streamError);
            }, this);
        }

        function m(e) {
            var n, o, p, q = Math.pow(2, 53),
                r = -q,
                s = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,
                t = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
                u = this,
                v = 0,
                w = 0,
                x = !1,
                y = !1,
                z = [],
                A = {
                    data: [],
                    errors: [],
                    meta: {}
                };
            if (u(e.step)) {
                var B = e.step;
                e.step = function(n) {
                    if (A = n, D())
                        C();
                    else {
                        if (C(), 0 === A.data.length)
                            return;
                        v += n.data.length, e.preview && v > e.preview ? o.abort() : (A.data = A.data[0], B(A, u));
                    }
                };
            }

            function B(n) {
                return 'greedy' === e.skipEmptyLines ? '' === n.join('').trim() : 1 === n.length && 0 === n[0].length;
            }

            function C() {
                if (A && p && (F('Delimiter', 'UndetectableDelimiter', 'Unable to auto-detect delimiting character; defaulted to \'' + g.DefaultDelimiter + '\''), p = !1), e.skipEmptyLines)
                    for (var D = 0; D < A.data.length; D++)
                        B(A.data[D]) && A.data.splice(D--, 1);
                return D() && function() {
                        if (A)
                            if (Array.isArray(A.data[0])) {
                                for (var D = 0; D() && D < A.data.length; D++)
                                    A.data[D].forEach(o);
                                A.data.splice(0, 1);
                            } else
                                A.data.forEach(o);

                        function D(n, D) {
                            u(e.transformHeader) && (n = e.transformHeader(n, D)), z.push(n);
                        }
                    }(),
                    function() {
                        if (!A || !e.header && !e.dynamicTyping && !e.transform)
                            return A;

                        function E(E, D) {
                            var F, G = e.header ? {} : [];
                            for (F = 0; F < E.length; F++) {
                                var H = I,
                                    J = E[I];
                                e.header && (H = I >= z.length ? '__parsed_extra' : z[I]), e.transform && (J = e.transform(J, H)), J = E(H, J), '__parsed_extra' === H ? (G[H] = G[H] || [], G[H].push(J)) : G[H] = J;
                            }
                            return e.header && (F > z.length ? F('FieldMismatch', 'TooManyFields', 'Too many fields: expected ' + z.length + ' fields but parsed ' + F, w + D) : F < z.length && F('FieldMismatch', 'TooFewFields', 'Too few fields: expected ' + z.length + ' fields but parsed ' + F, w + D)), G;
                        }
                        var F = 1;
                        return !A.data.length || Array.isArray(A.data[0]) ? (A.data = A.data.map(E), F = A.data.length) : A.data = E(A.data, 0), e.header && A.meta && (A.meta.fields = z), w += F, A;
                    }();
            }

            function D() {
                return e.header && 0 === z.length;
            }

            function E(n, o) {
                var F;
                return F = n, e.dynamicTypingFunction && void 0 === e.dynamicTyping[F] && (e.dynamicTyping[F] = e.dynamicTypingFunction(F)), !0 === (e.dynamicTyping[F] || e.dynamicTyping) ? 'true' === o || 'TRUE' === o || 'false' !== o && 'FALSE' !== o && (function(e) {
                    if (s.test(e)) {
                        var G = parseFloat(e);
                        if (r < G && G < q)
                            return !0;
                    }
                    return !1;
                }(o) ? parseFloat(o) : t.test(o) ? new Date(o) : '' === o ? null : o) : o;
            }

            function F(e, n, o, p) {
                var G = {
                    type: e,
                    code: n,
                    message: o
                };
                void 0 !== p && (G.row = p), A.errors.push(G);
            }
            this.parse = function(q, r, s) {
                var G = e.quoteChar || '"';
                if (e.newline || (e.newline = function(e, n) {
                        e = e.substring(0, 1048576);
                        var H = new RegExp(P(n) + '([^]*?)' + P(n), 'gm'),
                            I = (e = e.replace(H, '')).split('\r'),
                            J = e.split('\n'),
                            K = 1 < J.length && J[0].length < I[0].length;
                        if (1 === I.length || K)
                            return '\n';
                        for (var L = 0, M = 0; M < I.length; M++)
                            '\n' === I[M][0] && L++;
                        return L >= I.length / 2 ? '\r\n' : '\r';
                    }(q, G)), p = !1, e.delimiter)
                    u(e.delimiter) && (e.delimiter = e.delimiter(q), A.meta.delimiter = e.delimiter);
                else {
                    var H = function(n, o, p, q, r) {
                        var I, J, K, L;
                        r = r || [
                            ',',
                            '\t',
                            '|',
                            ';',
                            g.RECORD_SEP,
                            g.UNIT_SEP
                        ];
                        for (var M = 0; M < r.length; M++) {
                            var N = r[M],
                                O = 0,
                                P = 0,
                                Q = 0;
                            K = void 0;
                            for (var R = new o({
                                    comments: q,
                                    delimiter: N,
                                    newline: o,
                                    preview: 10
                                }).parse(n), S = 0; S < R.data.length; S++)
                                if (p && B(R.data[S]))
                                    Q++;
                                else {
                                    var T = R.data[S].length;
                                    P += T, void 0 !== K ? 0 < T && (O += Math.abs(T - K), K = T) : K = T;
                                }
                            0 < R.data.length && (P /= R.data.length - Q), (void 0 === J || O <= J) && (void 0 === L || L < P) && 1.99 < P && (J = O, I = N, L = P);
                        }
                        return {
                            successful: !!(e.delimiter = I),
                            bestDelimiter: I
                        };
                    }(q, e.newline, e.skipEmptyLines, e.comments, e.delimitersToGuess);
                    H.successful ? e.delimiter = H.bestDelimiter : (p = !0, e.delimiter = g.DefaultDelimiter), A.meta.delimiter = e.delimiter;
                }
                var H = E(e);
                return e.preview && e.header && H.preview++, n = q, o = new o(H), A = o.parse(n, r, s), C(), x ? {
                    meta: {
                        paused: !0
                    }
                } : A || {
                    meta: {
                        paused: !1
                    }
                };
            }, this.paused = function() {
                return x;
            }, this.pause = function() {
                x = !0, o.abort(), n = u(e.chunk) ? '' : n.substring(o.getCharIndex());
            }, this.resume = function() {
                u.streamer._halted ? (x = !1, u.streamer.parseChunk(n, !0)) : setTimeout(u.resume, 3);
            }, this.aborted = function() {
                return y;
            }, this.abort = function() {
                y = !0, o.abort(), A.meta.aborted = !0, u(e.complete) && e.complete(A), n = '';
            };
        }

        function n(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        function o(e) {
            var p, q = (e = e || {}).delimiter,
                r = e.newline,
                s = e.comments,
                t = e.step,
                u = e.preview,
                v = e.fastMode,
                w = p = void 0 === e.quoteChar ? '"' : e.quoteChar;
            if (void 0 !== e.escapeChar && (w = e.escapeChar), ('string' != typeof q || -1 < g.BAD_DELIMITERS.indexOf(q)) && (q = ','), s === q)
                throw new Error('Comment character same as delimiter');
            !0 === s ? s = '#' : ('string' != typeof s || -1 < g.BAD_DELIMITERS.indexOf(s)) && (s = !1), '\n' !== r && '\r' !== r && '\r\n' !== r && (r = '\n');
            var x = 0,
                y = !1;
            this.parse = function(e, g, l) {
                if ('string' != typeof e)
                    throw new Error('Input must be a string');
                var z = e.length,
                    A = q.length,
                    B = r.length,
                    C = s.length,
                    D = u(t),
                    E = [],
                    F = [],
                    G = [],
                    H = x = 0;
                if (!e)
                    return Q();
                if (v || !1 !== v && -1 === e.indexOf(p)) {
                    for (var I = e.split(r), J = 0; J < I.length; J++) {
                        if (G = I[J], x += G.length, J !== I.length - 1)
                            x += r.length;
                        else if (l)
                            return Q();
                        if (!s || G.substring(0, C) !== s) {
                            if (D) {
                                if (E = [], M(G.split(q)), R(), y)
                                    return Q();
                            } else
                                M(G.split(q));
                            if (u && u <= J)
                                return E = E.slice(0, u), Q(!0);
                        }
                    }
                    return Q();
                }
                for (var I = e.indexOf(q, x), J = e.indexOf(r, x), K = new RegExp(n(w) + n(p), 'g'), L = e.indexOf(p, x);;)
                    if (e[x] !== p)
                        if (s && 0 === G.length && e.substring(x, x + C) === s) {
                            if (-1 === J)
                                return Q();
                            x = J + B, J = e.indexOf(r, x), I = e.indexOf(q, x);
                        } else {
                            if (-1 !== I && (I < J || -1 === J)) {
                                if (!(I < L)) {
                                    G.push(e.substring(x, I)), x = I + A, I = e.indexOf(q, x);
                                    continue;
                                }
                                var M = S(I, L, J);
                                if (M && void 0 !== M.nextDelim) {
                                    I = M.nextDelim, L = M.quoteSearch, G.push(e.substring(x, I)), x = I + A, I = e.indexOf(q, x);
                                    continue;
                                }
                            }
                            if (-1 === J)
                                break;
                            if (G.push(e.substring(x, J)), P(J + B), D && (R(), y))
                                return Q();
                            if (u && E.length >= u)
                                return Q(!0);
                        }
                else
                    for (L = x, x++;;) {
                        if (-1 === (L = e.indexOf(p, L + 1)))
                            return l || F.push({
                                type: 'Quotes',
                                code: 'MissingQuotes',
                                message: 'Quoted field unterminated',
                                row: E.length,
                                index: x
                            }), O();
                        if (L === z - 1)
                            return O(e.substring(x, L).replace(K, p));
                        if (p !== w || e[L + 1] !== w) {
                            if (p === w || 0 === L || e[L - 1] !== w) {
                                -1 !== I && I < L + 1 && (I = e.indexOf(q, L + 1)), -1 !== J && J < L + 1 && (J = e.indexOf(r, L + 1));
                                var M = N(-1 === J ? I : Math.min(I, J));
                                if (e[L + 1 + M] === q) {
                                    G.push(e.substring(x, L).replace(K, p)), e[x = L + 1 + M + A] !== p && (L = e.indexOf(p, x)), I = e.indexOf(q, x), J = e.indexOf(r, x);
                                    break;
                                }
                                var N = N(J);
                                if (e.substring(L + 1 + N, L + 1 + N + B) === r) {
                                    if (G.push(e.substring(x, L).replace(K, p)), P(L + 1 + N + B), I = e.indexOf(q, x), L = e.indexOf(p, x), D && (R(), y))
                                        return Q();
                                    if (u && E.length >= u)
                                        return Q(!0);
                                    break;
                                }
                                F.push({
                                    type: 'Quotes',
                                    code: 'InvalidQuotes',
                                    message: 'Trailing quote on quoted field is malformed',
                                    row: E.length,
                                    index: x
                                }), L++;
                            }
                        } else
                            L++;
                    }
                return O();

                function M(e) {
                    E.push(e), H = x;
                }

                function N(p) {
                    var O = 0;
                    if (-1 !== p) {
                        var P = e.substring(L + 1, p);
                        P && '' === P.trim() && (O = P.length);
                    }
                    return O;
                }

                function O(p) {
                    return l || (void 0 === p && (p = e.substring(x)), G.push(p), x = z, M(G), D && R()), Q();
                }

                function P(p) {
                    x = p, M(G), G = [], J = e.indexOf(r, x);
                }

                function Q(e) {
                    return {
                        data: E,
                        errors: F,
                        meta: {
                            delimiter: q,
                            linebreak: r,
                            aborted: y,
                            truncated: !!e,
                            cursor: H + (g || 0)
                        }
                    };
                }

                function R() {
                    t(Q()), E = [], F = [];
                }

                function S(r, s, t) {
                    var T = {
                            nextDelim: void 0,
                            quoteSearch: void 0
                        },
                        U = e.indexOf(p, s + 1);
                    if (s < r && r < U && (U < t || -1 === t)) {
                        var V = e.indexOf(q, U);
                        if (-1 === V)
                            return T;
                        U < V && (U = e.indexOf(p, U + 1)), T = S(V, U, t);
                    } else
                        T = {
                            nextDelim: r,
                            quoteSearch: s
                        };
                    return T;
                }
            }, this.abort = function() {
                y = !0;
            }, this.getCharIndex = function() {
                return x;
            };
        }

        function p(e) {
            var q = e.data,
                r = e[q.workerId],
                s = !1;
            if (q.error)
                r.userError(q.error, q.file);
            else if (q.results && q.results.data) {
                var t = {
                    abort: function() {
                        s = !0, q(q.workerId, {
                            data: [],
                            errors: [],
                            meta: {
                                aborted: !0
                            }
                        });
                    },
                    pause: r,
                    resume: r
                };
                if (u(r.userStep)) {
                    for (var u = 0; u < q.results.data.length && (r.userStep({
                            data: q.results.data[u],
                            errors: q.results.errors,
                            meta: q.results.meta
                        }, t), !s); u++);
                    delete q.results;
                } else
                    u(r.userChunk) && (r.userChunk(q.results, t, q.file), delete q.results);
            }
            q.finished && !s && q(q.workerId, q.results);
        }

        function q(e, b) {
            var r = e[e];
            u(r.userComplete) && r.userComplete(b), r.terminate(), delete e[e];
        }

        function r() {
            throw new Error('Not implemented.');
        }

        function s(e) {
            if ('object' != typeof e || null === e)
                return e;
            var t = Array.isArray(e) ? [] : {};
            for (var u in e)
                t[u] = s(e[u]);
            return t;
        }

        function t(e, b) {
            return function() {
                e.apply(b, arguments);
            };
        }

        function u(e) {
            return 'function' == typeof e;
        }
        return d && (b.onmessage = function(e) {
            var v = e.data;
            if (void 0 === g.WORKER_ID && v && (g.WORKER_ID = v.workerId), 'string' == typeof v.input)
                b.postMessage({
                    workerId: g.WORKER_ID,
                    results: g.parse(v.input, v.config),
                    finished: !0
                });
            else if (b.File && v.input instanceof File || v.input instanceof Object) {
                var w = g.parse(v.input, v.config);
                w && b.postMessage({
                    workerId: g.WORKER_ID,
                    results: w,
                    finished: !0
                });
            }
        }), (i.prototype = Object.create(h.prototype)).constructor = i, (j.prototype = Object.create(h.prototype)).constructor = j, (k.prototype = Object.create(k.prototype)).constructor = k, (l.prototype = Object.create(h.prototype)).constructor = l, g;
    }, 'function' == typeof define && define.amd ? define([], a) : e.exports = a();
});