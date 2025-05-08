var a = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {};
a.parcelRequire388b.register('6yrsF', function (b, c) {
    var d, e, f, g, h;
    d = b.exports, e = 'Howl', f = function () {
        return h;
    }, g = function (i) {
        return h = i;
    }, Object.defineProperty(d, e, {
        get: f,
        set: g,
        enumerable: !0,
        configurable: !0
    }), function () {
        var i = function () {
            this.init();
        };
        i.prototype = {
            init: function () {
                var j = this || c;
                return j._counter = 1000, j._html5AudioPool = [], j.html5PoolSize = 10, j._codecs = {}, j._howls = [], j._muted = !1, j._volume = 1, j._canPlayEvent = 'canplaythrough', j._navigator = 'undefined' != typeof window && window.navigator ? window.navigator : null, j.masterGain = null, j.noAudio = !1, j.usingWebAudio = !0, j.autoSuspend = !0, j.ctx = null, j.autoUnlock = !0, j._setup(), j;
            },
            volume: function (j) {
                var k = this || c;
                if (j = parseFloat(j), k.ctx || _r(), void 0 !== j && j >= 0 && j <= 1) {
                    if (k._volume = j, k._muted)
                        return k;
                    k.usingWebAudio && k.masterGain.gain.setValueAtTime(j, c.ctx.currentTime);
                    for (var l = 0; l < k._howls.length; l++)
                        if (!k._howls[l]._webAudio)
                            for (var m = k._howls[l]._getSoundIds(), n = 0; n < m.length; n++) {
                                var o = k._howls[l]._soundById(m[n]);
                                o && o._node && (o._node.volume = o._volume * j);
                            }
                    return k;
                }
                return k._volume;
            },
            mute: function (j) {
                var k = this || c;
                k.ctx || _r(), k._muted = j, k.usingWebAudio && k.masterGain.gain.setValueAtTime(j ? 0 : k._volume, c.ctx.currentTime);
                for (var l = 0; l < k._howls.length; l++)
                    if (!k._howls[l]._webAudio)
                        for (var m = k._howls[l]._getSoundIds(), n = 0; n < m.length; n++) {
                            var o = k._howls[l]._soundById(m[n]);
                            o && o._node && (o._node.muted = !!j || o._muted);
                        }
                return k;
            },
            stop: function () {
                for (var j = this || c, k = 0; k < j._howls.length; k++)
                    j._howls[k].stop();
                return j;
            },
            unload: function () {
                for (var j = this || c, k = j._howls.length - 1; k >= 0; k--)
                    j._howls[k].unload();
                return j.usingWebAudio && j.ctx && void 0 !== j.ctx.close && (j.ctx.close(), j.ctx = null, _r()), j;
            },
            codecs: function (j) {
                return (this || c)._codecs[j.replace(/^x-/, '')];
            },
            _setup: function () {
                var j = this || c;
                if (j.state = j.ctx && j.ctx.state || 'suspended', j._autoSuspend(), !j.usingWebAudio)
                    if ('undefined' != typeof Audio)
                        try {
                            void 0 === new Audio().oncanplaythrough && (j._canPlayEvent = 'canplay');
                        } catch (i) {
                            j.noAudio = !0;
                        }
                    else
                        j.noAudio = !0;
                try {
                    new Audio().muted && (j.noAudio = !0);
                } catch (j) {
                }
                return j.noAudio || j._setupCodecs(), j;
            },
            _setupCodecs: function () {
                var j = this || c, k = null;
                try {
                    k = 'undefined' != typeof Audio ? new Audio() : null;
                } catch (k) {
                    return j;
                }
                if (!k || 'function' != typeof k.canPlayType)
                    return j;
                var l = k.canPlayType('audio/mpeg;').replace(/^no$/, ''), m = j._navigator ? j._navigator.userAgent : '', n = m.match(/OPR\/([0-6].)/g), o = n && parseInt(n[0].split('/')[1], 10) < 33, p = -1 !== m.indexOf('Safari') && -1 === m.indexOf('Chrome'), q = m.match(/Version\/(.*?) /), r = p && q && parseInt(q[1], 10) < 15;
                return j._codecs = {
                    mp3: !(o || !l && !k.canPlayType('audio/mp3;').replace(/^no$/, '')),
                    mpeg: !!l,
                    opus: !!k.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
                    ogg: !!k.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                    oga: !!k.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                    wav: !!(k.canPlayType('audio/wav; codecs="1"') || k.canPlayType('audio/wav')).replace(/^no$/, ''),
                    aac: !!k.canPlayType('audio/aac;').replace(/^no$/, ''),
                    caf: !!k.canPlayType('audio/x-caf;').replace(/^no$/, ''),
                    m4a: !!(k.canPlayType('audio/x-m4a;') || k.canPlayType('audio/m4a;') || k.canPlayType('audio/aac;')).replace(/^no$/, ''),
                    m4b: !!(k.canPlayType('audio/x-m4b;') || k.canPlayType('audio/m4b;') || k.canPlayType('audio/aac;')).replace(/^no$/, ''),
                    mp4: !!(k.canPlayType('audio/x-mp4;') || k.canPlayType('audio/mp4;') || k.canPlayType('audio/aac;')).replace(/^no$/, ''),
                    weba: !(r || !k.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
                    webm: !(r || !k.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
                    dolby: !!k.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
                    flac: !!(k.canPlayType('audio/x-flac;') || k.canPlayType('audio/flac;')).replace(/^no$/, '')
                }, j;
            },
            _unlockAudio: function () {
                var j = this || c;
                if (!j._audioUnlocked && j.ctx) {
                    j._audioUnlocked = !1, j.autoUnlock = !1, j._mobileUnloaded || 44100 === j.ctx.sampleRate || (j._mobileUnloaded = !0, j.unload()), j._scratchBuffer = j.ctx.createBuffer(1, 1, 22050);
                    var k = function (l) {
                        for (; j._html5AudioPool.length < j.html5PoolSize;)
                            try {
                                var m = new Audio();
                                m._unlocked = !0, j._releaseHtml5Audio(m);
                            } catch (l) {
                                j.noAudio = !0;
                                break;
                            }
                        for (var n = 0; n < j._howls.length; n++)
                            if (!j._howls[n]._webAudio)
                                for (var o = j._howls[n]._getSoundIds(), p = 0; p < o.length; p++) {
                                    var q = j._howls[n]._soundById(o[p]);
                                    q && q._node && !q._node._unlocked && (q._node._unlocked = !0, q._node.load());
                                }
                        j._autoResume();
                        var r = j.ctx.createBufferSource();
                        r.buffer = j._scratchBuffer, r.connect(j.ctx.destination), void 0 === r.start ? r.noteOn(0) : r.start(0), 'function' == typeof j.ctx.resume && j.ctx.resume(), r.onended = function () {
                            r.disconnect(0), j._audioUnlocked = !0, document.removeEventListener('touchstart', k, !0), document.removeEventListener('touchend', k, !0), document.removeEventListener('click', k, !0), document.removeEventListener('keydown', k, !0);
                            for (var s = 0; s < j._howls.length; s++)
                                j._howls[s]._emit('unlock');
                        };
                    };
                    return document.addEventListener('touchstart', k, !0), document.addEventListener('touchend', k, !0), document.addEventListener('click', k, !0), document.addEventListener('keydown', k, !0), j;
                }
            },
            _obtainHtml5Audio: function () {
                var j = this || c;
                if (j._html5AudioPool.length)
                    return j._html5AudioPool.pop();
                var k = new Audio().play();
                return k && 'undefined' != typeof Promise && (k instanceof Promise || 'function' == typeof k.then) && k.catch(function () {
                    console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
                }), new Audio();
            },
            _releaseHtml5Audio: function (j) {
                var k = this || c;
                return j._unlocked && k._html5AudioPool.push(j), k;
            },
            _autoSuspend: function () {
                var j = this;
                if (j.autoSuspend && j.ctx && void 0 !== j.ctx.suspend && c.usingWebAudio) {
                    for (var k = 0; k < j._howls.length; k++)
                        if (j._howls[k]._webAudio)
                            for (var l = 0; l < j._howls[k]._sounds.length; l++)
                                if (!j._howls[k]._sounds[l]._paused)
                                    return j;
                    return j._suspendTimer && clearTimeout(j._suspendTimer), j._suspendTimer = setTimeout(function () {
                        if (j.autoSuspend) {
                            j._suspendTimer = null, j.state = 'suspending';
                            var m = function () {
                                j.state = 'suspended', j._resumeAfterSuspend && (delete j._resumeAfterSuspend, j._autoResume());
                            };
                            j.ctx.suspend().then(m, m);
                        }
                    }, 30000), j;
                }
            },
            _autoResume: function () {
                var j = this;
                if (j.ctx && void 0 !== j.ctx.resume && c.usingWebAudio)
                    return 'running' === j.state && 'interrupted' !== j.ctx.state && j._suspendTimer ? (clearTimeout(j._suspendTimer), j._suspendTimer = null) : 'suspended' === j.state || 'running' === j.state && 'interrupted' === j.ctx.state ? (j.ctx.resume().then(function () {
                        j.state = 'running';
                        for (var k = 0; k < j._howls.length; k++)
                            j._howls[k]._emit('resume');
                    }), j._suspendTimer && (clearTimeout(j._suspendTimer), j._suspendTimer = null)) : 'suspending' === j.state && (j._resumeAfterSuspend = !0), j;
            }
        };
        var j = new i(), k = function (l) {
                l.src && 0 !== l.src.length ? this.init(l) : console.error('An array of source files must be passed with any new Howl.');
            };
        k.prototype = {
            init: function (l) {
                var m = this;
                return j.ctx || _r(), m._autoplay = l.autoplay || !1, m._format = 'string' != typeof l.format ? l.format : [l.format], m._html5 = l.html5 || !1, m._muted = l.mute || !1, m._loop = l.loop || !1, m._pool = l.pool || 5, m._preload = 'boolean' != typeof l.preload && 'metadata' !== l.preload || l.preload, m._rate = l.rate || 1, m._sprite = l.sprite || {}, m._src = 'string' != typeof l.src ? l.src : [l.src], m._volume = void 0 !== l.volume ? l.volume : 1, m._xhr = {
                    method: l.xhr && l.xhr.method ? l.xhr.method : 'GET',
                    headers: l.xhr && l.xhr.headers ? l.xhr.headers : null,
                    withCredentials: !(!l.xhr || !l.xhr.withCredentials) && l.xhr.withCredentials
                }, m._duration = 0, m._state = 'unloaded', m._sounds = [], m._endTimers = {}, m._queue = [], m._playLock = !1, m._onend = l.onend ? [{ fn: l.onend }] : [], m._onfade = l.onfade ? [{ fn: l.onfade }] : [], m._onload = l.onload ? [{ fn: l.onload }] : [], m._onloaderror = l.onloaderror ? [{ fn: l.onloaderror }] : [], m._onplayerror = l.onplayerror ? [{ fn: l.onplayerror }] : [], m._onpause = l.onpause ? [{ fn: l.onpause }] : [], m._onplay = l.onplay ? [{ fn: l.onplay }] : [], m._onstop = l.onstop ? [{ fn: l.onstop }] : [], m._onmute = l.onmute ? [{ fn: l.onmute }] : [], m._onvolume = l.onvolume ? [{ fn: l.onvolume }] : [], m._onrate = l.onrate ? [{ fn: l.onrate }] : [], m._onseek = l.onseek ? [{ fn: l.onseek }] : [], m._onunlock = l.onunlock ? [{ fn: l.onunlock }] : [], m._onresume = [], m._webAudio = j.usingWebAudio && !m._html5, void 0 !== j.ctx && j.ctx && j.autoUnlock && j._unlockAudio(), j._howls.push(m), m._autoplay && m._queue.push({
                    event: 'play',
                    action: function () {
                        m.play();
                    }
                }), m._preload && 'none' !== m._preload && m.load(), m;
            },
            load: function () {
                var l = this, m = null;
                if (j.noAudio)
                    l._emit('loaderror', null, 'No audio support.');
                else {
                    'string' == typeof l._src && (l._src = [l._src]);
                    for (var n = 0; n < l._src.length; n++) {
                        var o, p;
                        if (l._format && l._format[n])
                            o = l._format[n];
                        else {
                            if ('string' != typeof (p = l._src[n])) {
                                l._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
                                continue;
                            }
                            (o = /^data:audio\/([^;,]+);/i.exec(p)) || (o = /\.([^.]+)$/.exec(p.split('?', 1)[0])), o && (o = o[1].toLowerCase());
                        }
                        if (o || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), o && j.codecs(o)) {
                            m = l._src[n];
                            break;
                        }
                    }
                    if (m)
                        return l._src = m, l._state = 'loading', 'https:' === window.location.protocol && 'http:' === m.slice(0, 5) && (l._html5 = !0, l._webAudio = !1), new e(l), l._webAudio && g(l), l;
                    l._emit('loaderror', null, 'No codec support for selected audio sources.');
                }
            },
            play: function (l, m) {
                var n = this, o = null;
                if ('number' == typeof l)
                    o = l, l = null;
                else {
                    if ('string' == typeof l && 'loaded' === n._state && !n._sprite[l])
                        return null;
                    if (void 0 === l && (l = '__default', !n._playLock)) {
                        for (var p = 0, q = 0; q < n._sounds.length; q++)
                            n._sounds[q]._paused && !n._sounds[q]._ended && (p++, o = n._sounds[q]._id);
                        1 === p ? l = null : o = null;
                    }
                }
                var r = o ? n._soundById(o) : n._inactiveSound();
                if (!r)
                    return null;
                if (o && !l && (l = r._sprite || '__default'), 'loaded' !== n._state) {
                    r._sprite = l, r._ended = !1;
                    var s = r._id;
                    return n._queue.push({
                        event: 'play',
                        action: function () {
                            n.play(s);
                        }
                    }), s;
                }
                if (o && !r._paused)
                    return m || n._loadQueue('play'), r._id;
                n._webAudio && j._autoResume();
                var t = Math.max(0, r._seek > 0 ? r._seek : n._sprite[l][0] / 1000), u = Math.max(0, (n._sprite[l][0] + n._sprite[l][1]) / 1000 - t), v = 1000 * u / Math.abs(r._rate), w = n._sprite[l][0] / 1000, x = (n._sprite[l][0] + n._sprite[l][1]) / 1000;
                r._sprite = l, r._ended = !1;
                var y = function () {
                    r._paused = !1, r._seek = t, r._start = w, r._stop = x, r._loop = !(!r._loop && !n._sprite[l][2]);
                };
                if (!(t >= x)) {
                    var z = r._node;
                    if (n._webAudio) {
                        var A = function () {
                            n._playLock = !1, y(), n._refreshBuffer(r);
                            var B = r._muted || n._muted ? 0 : r._volume;
                            z.gain.setValueAtTime(B, j.ctx.currentTime), r._playStart = j.ctx.currentTime, void 0 === z.bufferSource.start ? r._loop ? z.bufferSource.noteGrainOn(0, t, 86400) : z.bufferSource.noteGrainOn(0, t, u) : r._loop ? z.bufferSource.start(0, t, 86400) : z.bufferSource.start(0, t, u), v !== 1 / 0 && (n._endTimers[r._id] = setTimeout(n._ended.bind(n, r), v)), m || setTimeout(function () {
                                n._emit('play', r._id), n._loadQueue();
                            }, 0);
                        };
                        'running' === j.state && 'interrupted' !== j.ctx.state ? A() : (n._playLock = !0, n.once('resume', A), n._clearTimer(r._id));
                    } else {
                        var B = function () {
                            z.currentTime = t, z.muted = r._muted || n._muted || j._muted || z.muted, z.volume = r._volume * j.volume(), z.playbackRate = r._rate;
                            try {
                                var C = z.play();
                                if (C && 'undefined' != typeof Promise && (C instanceof Promise || 'function' == typeof C.then) ? (n._playLock = !0, y(), C.then(function () {
                                        n._playLock = !1, z._unlocked = !0, m ? n._loadQueue() : n._emit('play', r._id);
                                    }).catch(function () {
                                        n._playLock = !1, n._emit('playerror', r._id, 'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.'), r._ended = !0, r._paused = !0;
                                    })) : m || (n._playLock = !1, y(), n._emit('play', r._id)), z.playbackRate = r._rate, z.paused)
                                    return void n._emit('playerror', r._id, 'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.');
                                '__default' !== l || r._loop ? n._endTimers[r._id] = setTimeout(n._ended.bind(n, r), v) : (n._endTimers[r._id] = function () {
                                    n._ended(r), z.removeEventListener('ended', n._endTimers[r._id], !1);
                                }, z.addEventListener('ended', n._endTimers[r._id], !1));
                            } catch (l) {
                                n._emit('playerror', r._id, l);
                            }
                        };
                        'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA' === z.src && (z.src = n._src, z.load());
                        var C = window && window.ejecta || !z.readyState && j._navigator.isCocoonJS;
                        if (z.readyState >= 3 || C)
                            B();
                        else {
                            n._playLock = !0, n._state = 'loading';
                            var D = function () {
                                n._state = 'loaded', B(), z.removeEventListener(j._canPlayEvent, D, !1);
                            };
                            z.addEventListener(j._canPlayEvent, D, !1), n._clearTimer(r._id);
                        }
                    }
                    return r._id;
                }
                n._ended(r);
            },
            pause: function (l) {
                var m = this;
                if ('loaded' !== m._state || m._playLock)
                    return m._queue.push({
                        event: 'pause',
                        action: function () {
                            m.pause(l);
                        }
                    }), m;
                for (var n = m._getSoundIds(l), o = 0; o < n.length; o++) {
                    m._clearTimer(n[o]);
                    var p = m._soundById(n[o]);
                    if (p && !p._paused && (p._seek = m.seek(n[o]), p._rateSeek = 0, p._paused = !0, m._stopFade(n[o]), p._node))
                        if (m._webAudio) {
                            if (!p._node.bufferSource)
                                continue;
                            void 0 === p._node.bufferSource.stop ? p._node.bufferSource.noteOff(0) : p._node.bufferSource.stop(0), m._cleanBuffer(p._node);
                        } else
                            isNaN(p._node.duration) && p._node.duration !== 1 / 0 || p._node.pause();
                    arguments[1] || m._emit('pause', p ? p._id : null);
                }
                return m;
            },
            stop: function (l, m) {
                var n = this;
                if ('loaded' !== n._state || n._playLock)
                    return n._queue.push({
                        event: 'stop',
                        action: function () {
                            n.stop(l);
                        }
                    }), n;
                for (var o = n._getSoundIds(l), p = 0; p < o.length; p++) {
                    n._clearTimer(o[p]);
                    var q = n._soundById(o[p]);
                    q && (q._seek = q._start || 0, q._rateSeek = 0, q._paused = !0, q._ended = !0, n._stopFade(o[p]), q._node && (n._webAudio ? q._node.bufferSource && (void 0 === q._node.bufferSource.stop ? q._node.bufferSource.noteOff(0) : q._node.bufferSource.stop(0), n._cleanBuffer(q._node)) : isNaN(q._node.duration) && q._node.duration !== 1 / 0 || (q._node.currentTime = q._start || 0, q._node.pause(), q._node.duration === 1 / 0 && n._clearSound(q._node))), m || n._emit('stop', q._id));
                }
                return n;
            },
            mute: function (l, m) {
                var n = this;
                if ('loaded' !== n._state || n._playLock)
                    return n._queue.push({
                        event: 'mute',
                        action: function () {
                            n.mute(l, m);
                        }
                    }), n;
                if (void 0 === m) {
                    if ('boolean' != typeof l)
                        return n._muted;
                    n._muted = l;
                }
                for (var o = n._getSoundIds(m), p = 0; p < o.length; p++) {
                    var q = n._soundById(o[p]);
                    q && (q._muted = l, q._interval && n._stopFade(q._id), n._webAudio && q._node ? q._node.gain.setValueAtTime(l ? 0 : q._volume, j.ctx.currentTime) : q._node && (q._node.muted = !!j._muted || l), n._emit('mute', q._id));
                }
                return n;
            },
            volume: function () {
                var l, m, n, o = this, p = arguments;
                if (0 === p.length)
                    return o._volume;
                if (1 === p.length || 2 === p.length && void 0 === p[1]) {
                    var q = o._getSoundIds(), r = q.indexOf(p[0]);
                    r >= 0 ? m = parseInt(p[0], 10) : l = parseFloat(p[0]);
                } else
                    p.length >= 2 && (l = parseFloat(p[0]), m = parseInt(p[1], 10));
                if (!(void 0 !== l && l >= 0 && l <= 1))
                    return (n = m ? o._soundById(m) : o._sounds[0]) ? n._volume : 0;
                if ('loaded' !== o._state || o._playLock)
                    return o._queue.push({
                        event: 'volume',
                        action: function () {
                            o.volume.apply(o, p);
                        }
                    }), o;
                void 0 === m && (o._volume = l), m = o._getSoundIds(m);
                for (var s = 0; s < m.length; s++)
                    (n = o._soundById(m[s])) && (n._volume = l, p[2] || o._stopFade(m[s]), o._webAudio && n._node && !n._muted ? n._node.gain.setValueAtTime(l, j.ctx.currentTime) : n._node && !n._muted && (n._node.volume = l * j.volume()), o._emit('volume', n._id));
                return o;
            },
            fade: function (l, m, n, o) {
                var p = this;
                if ('loaded' !== p._state || p._playLock)
                    return p._queue.push({
                        event: 'fade',
                        action: function () {
                            p.fade(l, m, n, o);
                        }
                    }), p;
                l = Math.min(Math.max(0, parseFloat(l)), 1), m = Math.min(Math.max(0, parseFloat(m)), 1), n = parseFloat(n), p.volume(l, o);
                for (var q = p._getSoundIds(o), r = 0; r < q.length; r++) {
                    var s = p._soundById(q[r]);
                    if (s) {
                        if (o || p._stopFade(q[r]), p._webAudio && !s._muted) {
                            var t = j.ctx.currentTime, u = t + n / 1000;
                            s._volume = l, s._node.gain.setValueAtTime(l, t), s._node.gain.linearRampToValueAtTime(m, u);
                        }
                        p._startFadeInterval(s, l, m, n, q[r], void 0 === o);
                    }
                }
                return p;
            },
            _startFadeInterval: function (l, m, n, o, p, q) {
                var r = this, s = m, t = n - m, u = Math.abs(t / 0.01), v = Math.max(4, u > 0 ? o / u : o), w = Date.now();
                l._fadeTo = n, l._interval = setInterval(function () {
                    var x = (Date.now() - w) / o;
                    w = Date.now(), s += t * x, s = Math.round(100 * s) / 100, s = t < 0 ? Math.max(n, s) : Math.min(n, s), r._webAudio ? l._volume = s : r.volume(s, l._id, !0), q && (r._volume = s), (n < m && s <= n || n > m && s >= n) && (clearInterval(l._interval), l._interval = null, l._fadeTo = null, r.volume(n, l._id), r._emit('fade', l._id));
                }, v);
            },
            _stopFade: function (l) {
                var m = this, n = m._soundById(l);
                return n && n._interval && (m._webAudio && n._node.gain.cancelScheduledValues(j.ctx.currentTime), clearInterval(n._interval), n._interval = null, m.volume(n._fadeTo, l), n._fadeTo = null, m._emit('fade', l)), m;
            },
            loop: function () {
                var l, m, n, o = this, p = arguments;
                if (0 === p.length)
                    return o._loop;
                if (1 === p.length) {
                    if ('boolean' != typeof p[0])
                        return !!(n = o._soundById(parseInt(p[0], 10))) && n._loop;
                    l = p[0], o._loop = l;
                } else
                    2 === p.length && (l = p[0], m = parseInt(p[1], 10));
                for (var q = o._getSoundIds(m), r = 0; r < q.length; r++)
                    (n = o._soundById(q[r])) && (n._loop = l, o._webAudio && n._node && n._node.bufferSource && (n._node.bufferSource.loop = l, l && (n._node.bufferSource.loopStart = n._start || 0, n._node.bufferSource.loopEnd = n._stop, o.playing(q[r]) && (o.pause(q[r], !0), o.play(q[r], !0)))));
                return o;
            },
            rate: function () {
                var l, m, n, o = this, p = arguments;
                if (0 === p.length)
                    m = o._sounds[0]._id;
                else if (1 === p.length) {
                    var q = o._getSoundIds(), r = q.indexOf(p[0]);
                    r >= 0 ? m = parseInt(p[0], 10) : l = parseFloat(p[0]);
                } else
                    2 === p.length && (l = parseFloat(p[0]), m = parseInt(p[1], 10));
                if ('number' != typeof l)
                    return (n = o._soundById(m)) ? n._rate : o._rate;
                if ('loaded' !== o._state || o._playLock)
                    return o._queue.push({
                        event: 'rate',
                        action: function () {
                            o.rate.apply(o, p);
                        }
                    }), o;
                void 0 === m && (o._rate = l), m = o._getSoundIds(m);
                for (var s = 0; s < m.length; s++)
                    if (n = o._soundById(m[s])) {
                        o.playing(m[s]) && (n._rateSeek = o.seek(m[s]), n._playStart = o._webAudio ? j.ctx.currentTime : n._playStart), n._rate = l, o._webAudio && n._node && n._node.bufferSource ? n._node.bufferSource.playbackRate.setValueAtTime(l, j.ctx.currentTime) : n._node && (n._node.playbackRate = l);
                        var t = o.seek(m[s]), u = (o._sprite[n._sprite][0] + o._sprite[n._sprite][1]) / 1000 - t, v = 1000 * u / Math.abs(n._rate);
                        !o._endTimers[m[s]] && n._paused || (o._clearTimer(m[s]), o._endTimers[m[s]] = setTimeout(o._ended.bind(o, n), v)), o._emit('rate', n._id);
                    }
                return o;
            },
            seek: function () {
                var l, m, n = this, o = arguments;
                if (0 === o.length)
                    n._sounds.length && (m = n._sounds[0]._id);
                else if (1 === o.length) {
                    var p = n._getSoundIds(), q = p.indexOf(o[0]);
                    q >= 0 ? m = parseInt(o[0], 10) : n._sounds.length && (m = n._sounds[0]._id, l = parseFloat(o[0]));
                } else
                    2 === o.length && (l = parseFloat(o[0]), m = parseInt(o[1], 10));
                if (void 0 === m)
                    return 0;
                if ('number' == typeof l && ('loaded' !== n._state || n._playLock))
                    return n._queue.push({
                        event: 'seek',
                        action: function () {
                            n.seek.apply(n, o);
                        }
                    }), n;
                var r = n._soundById(m);
                if (r) {
                    if (!('number' == typeof l && l >= 0)) {
                        if (n._webAudio) {
                            var s = n.playing(m) ? j.ctx.currentTime - r._playStart : 0, t = r._rateSeek ? r._rateSeek - r._seek : 0;
                            return r._seek + (t + s * Math.abs(r._rate));
                        }
                        return r._node.currentTime;
                    }
                    var u = n.playing(m);
                    u && n.pause(m, !0), r._seek = l, r._ended = !1, n._clearTimer(m), n._webAudio || !r._node || isNaN(r._node.duration) || (r._node.currentTime = l);
                    var v = function () {
                        u && n.play(m, !0), n._emit('seek', m);
                    };
                    if (u && !n._webAudio) {
                        var w = function () {
                            n._playLock ? setTimeout(w, 0) : v();
                        };
                        setTimeout(w, 0);
                    } else
                        v();
                }
                return n;
            },
            playing: function (l) {
                var m = this;
                if ('number' == typeof l) {
                    var n = m._soundById(l);
                    return !!n && !n._paused;
                }
                for (var o = 0; o < m._sounds.length; o++)
                    if (!m._sounds[o]._paused)
                        return !0;
                return !1;
            },
            duration: function (l) {
                var m = this, n = m._duration, o = m._soundById(l);
                return o && (n = m._sprite[o._sprite][1] / 1000), n;
            },
            state: function () {
                return this._state;
            },
            unload: function () {
                for (var l = this, m = l._sounds, n = 0; n < m.length; n++)
                    m[n]._paused || l.stop(m[n]._id), l._webAudio || (l._clearSound(m[n]._node), m[n]._node.removeEventListener('error', m[n]._errorFn, !1), m[n]._node.removeEventListener(j._canPlayEvent, m[n]._loadFn, !1), m[n]._node.removeEventListener('ended', m[n]._endFn, !1), j._releaseHtml5Audio(m[n]._node)), delete m[n]._node, l._clearTimer(m[n]._id);
                var o = j._howls.indexOf(l);
                o >= 0 && j._howls.splice(o, 1);
                var p = !0;
                for (n = 0; n < j._howls.length; n++)
                    if (j._howls[n]._src === l._src || l._src.indexOf(j._howls[n]._src) >= 0) {
                        p = !1;
                        break;
                    }
                return f && p && delete f[l._src], j.noAudio = !1, l._state = 'unloaded', l._sounds = [], l = null, null;
            },
            on: function (l, m, n, o) {
                var p = this['_on' + l];
                return 'function' == typeof m && p.push(o ? {
                    id: n,
                    fn: m,
                    once: o
                } : {
                    id: n,
                    fn: m
                }), this;
            },
            off: function (l, m, n) {
                var o = this, p = o['_on' + l], q = 0;
                if ('number' == typeof m && (n = m, m = null), m || n)
                    for (q = 0; q < p.length; q++) {
                        var r = n === p[q].id;
                        if (m === p[q].fn && r || !m && r) {
                            p.splice(q, 1);
                            break;
                        }
                    }
                else if (l)
                    o['_on' + l] = [];
                else {
                    var s = Object.keys(o);
                    for (q = 0; q < s.length; q++)
                        0 === s[q].indexOf('_on') && Array.isArray(o[s[q]]) && (o[s[q]] = []);
                }
                return o;
            },
            once: function (l, m, n) {
                return this.on(l, m, n, 1), this;
            },
            _emit: function (l, m, n) {
                for (var o = this, p = o['_on' + l], q = p.length - 1; q >= 0; q--)
                    p[q].id && p[q].id !== m && 'load' !== l || (setTimeout(function (r) {
                        r.call(this, m, n);
                    }.bind(o, p[q].fn), 0), p[q].once && o.off(l, p[q].fn, p[q].id));
                return o._loadQueue(l), o;
            },
            _loadQueue: function (l) {
                var m = this;
                if (m._queue.length > 0) {
                    var n = m._queue[0];
                    n.event === l && (m._queue.shift(), m._loadQueue()), l || n.action();
                }
                return m;
            },
            _ended: function (l) {
                var m = this, n = l._sprite;
                if (!m._webAudio && l._node && !l._node.paused && !l._node.ended && l._node.currentTime < l._stop)
                    return setTimeout(m._ended.bind(m, l), 100), m;
                var o = !(!l._loop && !m._sprite[n][2]);
                if (m._emit('end', l._id), !m._webAudio && o && m.stop(l._id, !0).play(l._id), m._webAudio && o) {
                    m._emit('play', l._id), l._seek = l._start || 0, l._rateSeek = 0, l._playStart = j.ctx.currentTime;
                    var p = 1000 * (l._stop - l._start) / Math.abs(l._rate);
                    m._endTimers[l._id] = setTimeout(m._ended.bind(m, l), p);
                }
                return m._webAudio && !o && (l._paused = !0, l._ended = !0, l._seek = l._start || 0, l._rateSeek = 0, m._clearTimer(l._id), m._cleanBuffer(l._node), j._autoSuspend()), m._webAudio || o || m.stop(l._id, !0), m;
            },
            _clearTimer: function (l) {
                var m = this;
                if (m._endTimers[l]) {
                    if ('function' != typeof m._endTimers[l])
                        clearTimeout(m._endTimers[l]);
                    else {
                        var n = m._soundById(l);
                        n && n._node && n._node.removeEventListener('ended', m._endTimers[l], !1);
                    }
                    delete m._endTimers[l];
                }
                return m;
            },
            _soundById: function (l) {
                for (var m = this, n = 0; n < m._sounds.length; n++)
                    if (l === m._sounds[n]._id)
                        return m._sounds[n];
                return null;
            },
            _inactiveSound: function () {
                var l = this;
                l._drain();
                for (var m = 0; m < l._sounds.length; m++)
                    if (l._sounds[m]._ended)
                        return l._sounds[m].reset();
                return new e(l);
            },
            _drain: function () {
                var l = this, m = l._pool, n = 0, o = 0;
                if (!(l._sounds.length < m)) {
                    for (o = 0; o < l._sounds.length; o++)
                        l._sounds[o]._ended && n++;
                    for (o = l._sounds.length - 1; o >= 0; o--) {
                        if (n <= m)
                            return;
                        l._sounds[o]._ended && (l._webAudio && l._sounds[o]._node && l._sounds[o]._node.disconnect(0), l._sounds.splice(o, 1), n--);
                    }
                }
            },
            _getSoundIds: function (l) {
                if (void 0 === l) {
                    for (var m = [], n = 0; n < this._sounds.length; n++)
                        m.push(this._sounds[n]._id);
                    return m;
                }
                return [l];
            },
            _refreshBuffer: function (l) {
                return l._node.bufferSource = j.ctx.createBufferSource(), l._node.bufferSource.buffer = f[this._src], l._panner ? l._node.bufferSource.connect(l._panner) : l._node.bufferSource.connect(l._node), l._node.bufferSource.loop = l._loop, l._loop && (l._node.bufferSource.loopStart = l._start || 0, l._node.bufferSource.loopEnd = l._stop || 0), l._node.bufferSource.playbackRate.setValueAtTime(l._rate, j.ctx.currentTime), this;
            },
            _cleanBuffer: function (l) {
                var m = j._navigator && j._navigator.vendor.indexOf('Apple') >= 0;
                if (j._scratchBuffer && l.bufferSource && (l.bufferSource.onended = null, l.bufferSource.disconnect(0), m))
                    try {
                        l.bufferSource.buffer = j._scratchBuffer;
                    } catch (l) {
                    }
                return l.bufferSource = null, this;
            },
            _clearSound: function (l) {
                /MSIE |Trident\//.test(j._navigator && j._navigator.userAgent) || (l.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
            }
        };
        var l = function (m) {
            this._parent = m, this.init();
        };
        l.prototype = {
            init: function () {
                var m = this, n = m._parent;
                return m._muted = n._muted, m._loop = n._loop, m._volume = n._volume, m._rate = n._rate, m._seek = 0, m._paused = !0, m._ended = !0, m._sprite = '__default', m._id = ++j._counter, n._sounds.push(m), m.create(), m;
            },
            create: function () {
                var m = this, n = m._parent, o = j._muted || m._muted || m._parent._muted ? 0 : m._volume;
                return n._webAudio ? (m._node = void 0 === j.ctx.createGain ? j.ctx.createGainNode() : j.ctx.createGain(), m._node.gain.setValueAtTime(o, j.ctx.currentTime), m._node.paused = !0, m._node.connect(j.masterGain)) : j.noAudio || (m._node = j._obtainHtml5Audio(), m._errorFn = m._errorListener.bind(m), m._node.addEventListener('error', m._errorFn, !1), m._loadFn = m._loadListener.bind(m), m._node.addEventListener(j._canPlayEvent, m._loadFn, !1), m._endFn = m._endListener.bind(m), m._node.addEventListener('ended', m._endFn, !1), m._node.src = n._src, m._node.preload = !0 === n._preload ? 'auto' : n._preload, m._node.volume = o * j.volume(), m._node.load()), m;
            },
            reset: function () {
                var m = this, n = m._parent;
                return m._muted = n._muted, m._loop = n._loop, m._volume = n._volume, m._rate = n._rate, m._seek = 0, m._rateSeek = 0, m._paused = !0, m._ended = !0, m._sprite = '__default', m._id = ++j._counter, m;
            },
            _errorListener: function () {
                var m = this;
                m._parent._emit('loaderror', m._id, m._node.error ? m._node.error.code : 0), m._node.removeEventListener('error', m._errorFn, !1);
            },
            _loadListener: function () {
                var m = this, n = m._parent;
                n._duration = Math.ceil(10 * m._node.duration) / 10, 0 === Object.keys(n._sprite).length && (n._sprite = {
                    __default: [
                        0,
                        1000 * n._duration
                    ]
                }), 'loaded' !== n._state && (n._state = 'loaded', n._emit('load'), n._loadQueue()), m._node.removeEventListener(j._canPlayEvent, m._loadFn, !1);
            },
            _endListener: function () {
                var m = this, n = m._parent;
                n._duration === 1 / 0 && (n._duration = Math.ceil(10 * m._node.duration) / 10, n._sprite.__default[1] === 1 / 0 && (n._sprite.__default[1] = 1000 * n._duration), n._ended(m)), m._node.removeEventListener('ended', m._endFn, !1);
            }
        };
        var m = {}, n = function (o) {
                var p = o._src;
                if (m[p])
                    return o._duration = m[p].duration, void _q(o);
                if (/^data:[^;]+;base64,/.test(p)) {
                    for (var q = atob(p.split(',')[1]), r = new Uint8Array(q.length), s = 0; s < q.length; ++s)
                        r[s] = q.charCodeAt(s);
                    _p(r.buffer, o);
                } else {
                    var t = new XMLHttpRequest();
                    t.open(o._xhr.method, p, !0), t.withCredentials = o._xhr.withCredentials, t.responseType = 'arraybuffer', o._xhr.headers && Object.keys(o._xhr.headers).forEach(function (u) {
                        t.setRequestHeader(u, o._xhr.headers[u]);
                    }), t.onload = function () {
                        var u = (t.status + '')[0];
                        '0' === u || '2' === u || '3' === u ? _p(t.response, o) : o._emit('loaderror', null, 'Failed loading audio file with status: ' + t.status + '.');
                    }, t.onerror = function () {
                        o._webAudio && (o._html5 = !0, o._webAudio = !1, o._sounds = [], delete m[p], o.load());
                    }, _o(t);
                }
            }, _o = function (p) {
                try {
                    p.send();
                } catch (i) {
                    p.onerror();
                }
            }, _p = function (q, r) {
                var s = function () {
                        r._emit('loaderror', null, 'Decoding audio data failed.');
                    }, t = function (u) {
                        u && r._sounds.length > 0 ? (m[r._src] = u, _q(r, u)) : s();
                    };
                'undefined' != typeof Promise && 1 === j.ctx.decodeAudioData.length ? j.ctx.decodeAudioData(q).then(t).catch(s) : j.ctx.decodeAudioData(q, t, s);
            }, _q = function (r, s) {
                s && !r._duration && (r._duration = s.duration), 0 === Object.keys(r._sprite).length && (r._sprite = {
                    __default: [
                        0,
                        1000 * r._duration
                    ]
                }), 'loaded' !== r._state && (r._state = 'loaded', r._emit('load'), r._loadQueue());
            }, _r = function () {
                if (j.usingWebAudio) {
                    try {
                        'undefined' != typeof AudioContext ? j.ctx = new AudioContext() : 'undefined' != typeof webkitAudioContext ? j.ctx = new webkitAudioContext() : j.usingWebAudio = !1;
                    } catch (a) {
                        j.usingWebAudio = !1;
                    }
                    j.ctx || (j.usingWebAudio = !1);
                    var s = /iP(hone|od|ad)/.test(j._navigator && j._navigator.platform), t = j._navigator && j._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/), u = t ? parseInt(t[1], 10) : null;
                    if (s && u && u < 9) {
                        var v = /safari/.test(j._navigator && j._navigator.userAgent.toLowerCase());
                        j._navigator && !v && (j.usingWebAudio = !1);
                    }
                    j.usingWebAudio && (j.masterGain = void 0 === j.ctx.createGain ? j.ctx.createGainNode() : j.ctx.createGain(), j.masterGain.gain.setValueAtTime(j._muted ? 0 : j._volume, j.ctx.currentTime), j.masterGain.connect(j.ctx.destination)), j._setup();
                }
            };
        'function' == typeof define && define.amd && define([], function () {
            return {
                Howler: j,
                Howl: k
            };
        }), j, h = k, void 0 !== a ? (a.HowlerGlobal = i, a.Howler = j, a.Howl = k, a.Sound = l) : 'undefined' != typeof window && (window.HowlerGlobal = i, window.Howler = j, window.Howl = k, window.Sound = l);
    }(), function () {
        var i;
        HowlerGlobal.prototype._pos = [
            0,
            0,
            0
        ], HowlerGlobal.prototype._orientation = [
            0,
            0,
            -1,
            0,
            1,
            0
        ], HowlerGlobal.prototype.stereo = function (j) {
            var k = this;
            if (!k.ctx || !k.ctx.listener)
                return k;
            for (var l = k._howls.length - 1; l >= 0; l--)
                k._howls[l].stereo(j);
            return k;
        }, HowlerGlobal.prototype.pos = function (j, k, l) {
            var m = this;
            return m.ctx && m.ctx.listener ? (k = 'number' != typeof k ? m._pos[1] : k, l = 'number' != typeof l ? m._pos[2] : l, 'number' != typeof j ? m._pos : (m._pos = [
                j,
                k,
                l
            ], void 0 !== m.ctx.listener.positionX ? (m.ctx.listener.positionX.setTargetAtTime(m._pos[0], Howler.ctx.currentTime, 0.1), m.ctx.listener.positionY.setTargetAtTime(m._pos[1], Howler.ctx.currentTime, 0.1), m.ctx.listener.positionZ.setTargetAtTime(m._pos[2], Howler.ctx.currentTime, 0.1)) : m.ctx.listener.setPosition(m._pos[0], m._pos[1], m._pos[2]), m)) : m;
        }, HowlerGlobal.prototype.orientation = function (j, k, l, m, n, o) {
            var p = this;
            if (!p.ctx || !p.ctx.listener)
                return p;
            var q = p._orientation;
            return k = 'number' != typeof k ? q[1] : k, l = 'number' != typeof l ? q[2] : l, m = 'number' != typeof m ? q[3] : m, n = 'number' != typeof n ? q[4] : n, o = 'number' != typeof o ? q[5] : o, 'number' != typeof j ? q : (p._orientation = [
                j,
                k,
                l,
                m,
                n,
                o
            ], void 0 !== p.ctx.listener.forwardX ? (p.ctx.listener.forwardX.setTargetAtTime(j, Howler.ctx.currentTime, 0.1), p.ctx.listener.forwardY.setTargetAtTime(k, Howler.ctx.currentTime, 0.1), p.ctx.listener.forwardZ.setTargetAtTime(l, Howler.ctx.currentTime, 0.1), p.ctx.listener.upX.setTargetAtTime(m, Howler.ctx.currentTime, 0.1), p.ctx.listener.upY.setTargetAtTime(n, Howler.ctx.currentTime, 0.1), p.ctx.listener.upZ.setTargetAtTime(o, Howler.ctx.currentTime, 0.1)) : p.ctx.listener.setOrientation(j, k, l, m, n, o), p);
        }, Howl.prototype.init = (i = Howl.prototype.init, function (j) {
            var k = this;
            return k._orientation = j.orientation || [
                1,
                0,
                0
            ], k._stereo = j.stereo || null, k._pos = j.pos || null, k._pannerAttr = {
                coneInnerAngle: void 0 !== j.coneInnerAngle ? j.coneInnerAngle : 360,
                coneOuterAngle: void 0 !== j.coneOuterAngle ? j.coneOuterAngle : 360,
                coneOuterGain: void 0 !== j.coneOuterGain ? j.coneOuterGain : 0,
                distanceModel: void 0 !== j.distanceModel ? j.distanceModel : 'inverse',
                maxDistance: void 0 !== j.maxDistance ? j.maxDistance : 10000,
                panningModel: void 0 !== j.panningModel ? j.panningModel : 'HRTF',
                refDistance: void 0 !== j.refDistance ? j.refDistance : 1,
                rolloffFactor: void 0 !== j.rolloffFactor ? j.rolloffFactor : 1
            }, k._onstereo = j.onstereo ? [{ fn: j.onstereo }] : [], k._onpos = j.onpos ? [{ fn: j.onpos }] : [], k._onorientation = j.onorientation ? [{ fn: j.onorientation }] : [], i.call(this, j);
        }), Howl.prototype.stereo = function (j, k) {
            var l = this;
            if (!l._webAudio)
                return l;
            if ('loaded' !== l._state)
                return l._queue.push({
                    event: 'stereo',
                    action: function () {
                        l.stereo(j, k);
                    }
                }), l;
            var m = void 0 === Howler.ctx.createStereoPanner ? 'spatial' : 'stereo';
            if (void 0 === k) {
                if ('number' != typeof j)
                    return l._stereo;
                l._stereo = j, l._pos = [
                    j,
                    0,
                    0
                ];
            }
            for (var n = l._getSoundIds(k), o = 0; o < n.length; o++) {
                var p = l._soundById(n[o]);
                if (p) {
                    if ('number' != typeof j)
                        return p._stereo;
                    p._stereo = j, p._pos = [
                        j,
                        0,
                        0
                    ], p._node && (p._pannerAttr.panningModel = 'equalpower', p._panner && p._panner.pan || b(p, m), 'spatial' === m ? void 0 !== p._panner.positionX ? (p._panner.positionX.setValueAtTime(j, Howler.ctx.currentTime), p._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), p._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : p._panner.setPosition(j, 0, 0) : p._panner.pan.setValueAtTime(j, Howler.ctx.currentTime)), l._emit('stereo', p._id);
                }
            }
            return l;
        }, Howl.prototype.pos = function (j, k, l, m) {
            var n = this;
            if (!n._webAudio)
                return n;
            if ('loaded' !== n._state)
                return n._queue.push({
                    event: 'pos',
                    action: function () {
                        n.pos(j, k, l, m);
                    }
                }), n;
            if (k = 'number' != typeof k ? 0 : k, l = 'number' != typeof l ? -0.5 : l, void 0 === m) {
                if ('number' != typeof j)
                    return n._pos;
                n._pos = [
                    j,
                    k,
                    l
                ];
            }
            for (var o = n._getSoundIds(m), p = 0; p < o.length; p++) {
                var q = n._soundById(o[p]);
                if (q) {
                    if ('number' != typeof j)
                        return q._pos;
                    q._pos = [
                        j,
                        k,
                        l
                    ], q._node && (q._panner && !q._panner.pan || b(q, 'spatial'), void 0 !== q._panner.positionX ? (q._panner.positionX.setValueAtTime(j, Howler.ctx.currentTime), q._panner.positionY.setValueAtTime(k, Howler.ctx.currentTime), q._panner.positionZ.setValueAtTime(l, Howler.ctx.currentTime)) : q._panner.setPosition(j, k, l)), n._emit('pos', q._id);
                }
            }
            return n;
        }, Howl.prototype.orientation = function (j, k, l, m) {
            var n = this;
            if (!n._webAudio)
                return n;
            if ('loaded' !== n._state)
                return n._queue.push({
                    event: 'orientation',
                    action: function () {
                        n.orientation(j, k, l, m);
                    }
                }), n;
            if (k = 'number' != typeof k ? n._orientation[1] : k, l = 'number' != typeof l ? n._orientation[2] : l, void 0 === m) {
                if ('number' != typeof j)
                    return n._orientation;
                n._orientation = [
                    j,
                    k,
                    l
                ];
            }
            for (var o = n._getSoundIds(m), p = 0; p < o.length; p++) {
                var q = n._soundById(o[p]);
                if (q) {
                    if ('number' != typeof j)
                        return q._orientation;
                    q._orientation = [
                        j,
                        k,
                        l
                    ], q._node && (q._panner || (q._pos || (q._pos = n._pos || [
                        0,
                        0,
                        -0.5
                    ]), b(q, 'spatial')), void 0 !== q._panner.orientationX ? (q._panner.orientationX.setValueAtTime(j, Howler.ctx.currentTime), q._panner.orientationY.setValueAtTime(k, Howler.ctx.currentTime), q._panner.orientationZ.setValueAtTime(l, Howler.ctx.currentTime)) : q._panner.setOrientation(j, k, l)), n._emit('orientation', q._id);
                }
            }
            return n;
        }, Howl.prototype.pannerAttr = function () {
            var j, k, l, m = this, n = arguments;
            if (!m._webAudio)
                return m;
            if (0 === n.length)
                return m._pannerAttr;
            if (1 === n.length) {
                if ('object' != typeof n[0])
                    return (l = m._soundById(parseInt(n[0], 10))) ? l._pannerAttr : m._pannerAttr;
                j = n[0], void 0 === k && (j.pannerAttr || (j.pannerAttr = {
                    coneInnerAngle: j.coneInnerAngle,
                    coneOuterAngle: j.coneOuterAngle,
                    coneOuterGain: j.coneOuterGain,
                    distanceModel: j.distanceModel,
                    maxDistance: j.maxDistance,
                    refDistance: j.refDistance,
                    rolloffFactor: j.rolloffFactor,
                    panningModel: j.panningModel
                }), m._pannerAttr = {
                    coneInnerAngle: void 0 !== j.pannerAttr.coneInnerAngle ? j.pannerAttr.coneInnerAngle : m._coneInnerAngle,
                    coneOuterAngle: void 0 !== j.pannerAttr.coneOuterAngle ? j.pannerAttr.coneOuterAngle : m._coneOuterAngle,
                    coneOuterGain: void 0 !== j.pannerAttr.coneOuterGain ? j.pannerAttr.coneOuterGain : m._coneOuterGain,
                    distanceModel: void 0 !== j.pannerAttr.distanceModel ? j.pannerAttr.distanceModel : m._distanceModel,
                    maxDistance: void 0 !== j.pannerAttr.maxDistance ? j.pannerAttr.maxDistance : m._maxDistance,
                    refDistance: void 0 !== j.pannerAttr.refDistance ? j.pannerAttr.refDistance : m._refDistance,
                    rolloffFactor: void 0 !== j.pannerAttr.rolloffFactor ? j.pannerAttr.rolloffFactor : m._rolloffFactor,
                    panningModel: void 0 !== j.pannerAttr.panningModel ? j.pannerAttr.panningModel : m._panningModel
                });
            } else
                2 === n.length && (j = n[0], k = parseInt(n[1], 10));
            for (var o = m._getSoundIds(k), p = 0; p < o.length; p++)
                if (l = m._soundById(o[p])) {
                    var q = l._pannerAttr;
                    q = {
                        coneInnerAngle: void 0 !== j.coneInnerAngle ? j.coneInnerAngle : q.coneInnerAngle,
                        coneOuterAngle: void 0 !== j.coneOuterAngle ? j.coneOuterAngle : q.coneOuterAngle,
                        coneOuterGain: void 0 !== j.coneOuterGain ? j.coneOuterGain : q.coneOuterGain,
                        distanceModel: void 0 !== j.distanceModel ? j.distanceModel : q.distanceModel,
                        maxDistance: void 0 !== j.maxDistance ? j.maxDistance : q.maxDistance,
                        refDistance: void 0 !== j.refDistance ? j.refDistance : q.refDistance,
                        rolloffFactor: void 0 !== j.rolloffFactor ? j.rolloffFactor : q.rolloffFactor,
                        panningModel: void 0 !== j.panningModel ? j.panningModel : q.panningModel
                    };
                    var r = l._panner;
                    r ? (r.coneInnerAngle = q.coneInnerAngle, r.coneOuterAngle = q.coneOuterAngle, r.coneOuterGain = q.coneOuterGain, r.distanceModel = q.distanceModel, r.maxDistance = q.maxDistance, r.refDistance = q.refDistance, r.rolloffFactor = q.rolloffFactor, r.panningModel = q.panningModel) : (l._pos || (l._pos = m._pos || [
                        0,
                        0,
                        -0.5
                    ]), b(l, 'spatial'));
                }
            return m;
        }, Sound.prototype.init = function (j) {
            return function () {
                var k = this, l = k._parent;
                k._orientation = l._orientation, k._stereo = l._stereo, k._pos = l._pos, k._pannerAttr = l._pannerAttr, j.call(this), k._stereo ? l.stereo(k._stereo) : k._pos && l.pos(k._pos[0], k._pos[1], k._pos[2], k._id);
            };
        }(Sound.prototype.init), Sound.prototype.reset = function (j) {
            return function () {
                var k = this, l = k._parent;
                return k._orientation = l._orientation, k._stereo = l._stereo, k._pos = l._pos, k._pannerAttr = l._pannerAttr, k._stereo ? l.stereo(k._stereo) : k._pos ? l.pos(k._pos[0], k._pos[1], k._pos[2], k._id) : k._panner && (k._panner.disconnect(0), k._panner = void 0, l._refreshBuffer(k)), j.call(this);
            };
        }(Sound.prototype.reset);
        var j = function (k, l) {
            'spatial' === (l = l || 'spatial') ? (k._panner = Howler.ctx.createPanner(), k._panner.coneInnerAngle = k._pannerAttr.coneInnerAngle, k._panner.coneOuterAngle = k._pannerAttr.coneOuterAngle, k._panner.coneOuterGain = k._pannerAttr.coneOuterGain, k._panner.distanceModel = k._pannerAttr.distanceModel, k._panner.maxDistance = k._pannerAttr.maxDistance, k._panner.refDistance = k._pannerAttr.refDistance, k._panner.rolloffFactor = k._pannerAttr.rolloffFactor, k._panner.panningModel = k._pannerAttr.panningModel, void 0 !== k._panner.positionX ? (k._panner.positionX.setValueAtTime(k._pos[0], Howler.ctx.currentTime), k._panner.positionY.setValueAtTime(k._pos[1], Howler.ctx.currentTime), k._panner.positionZ.setValueAtTime(k._pos[2], Howler.ctx.currentTime)) : k._panner.setPosition(k._pos[0], k._pos[1], k._pos[2]), void 0 !== k._panner.orientationX ? (k._panner.orientationX.setValueAtTime(k._orientation[0], Howler.ctx.currentTime), k._panner.orientationY.setValueAtTime(k._orientation[1], Howler.ctx.currentTime), k._panner.orientationZ.setValueAtTime(k._orientation[2], Howler.ctx.currentTime)) : k._panner.setOrientation(k._orientation[0], k._orientation[1], k._orientation[2])) : (k._panner = Howler.ctx.createStereoPanner(), k._panner.pan.setValueAtTime(k._stereo, Howler.ctx.currentTime)), k._panner.connect(k._node), k._paused || k._parent.pause(k._id, !0).play(k._id, !0);
        };
    }();
});