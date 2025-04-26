var a = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {};
a.parcelRequire388b.register('6yrsF', function(g, v) {
    var b, c, d, e, f;
    b = g.exports, c = 'Howl', d = function() {
            return f;
        }, e = function(a) {
            return f = a;
        }, Object.defineProperty(b, c, {
            get: d,
            set: e,
            enumerable: !0,
            configurable: !0
        }),
        function() {
            var g = function() {
                this.init();
            };
            g.prototype = {
                init: function() {
                    var h = this || v;
                    return h._counter = 1000, h._html5AudioPool = [], h.html5PoolSize = 10, h._codecs = {}, h._howls = [], h._muted = !1, h._volume = 1, h._canPlayEvent = 'canplaythrough', h._navigator = 'undefined' != typeof window && window.navigator ? window.navigator : null, h.masterGain = null, h.noAudio = !1, h.usingWebAudio = !0, h.autoSuspend = !0, h.ctx = null, h.autoUnlock = !0, h._setup(), h;
                },
                volume: function(a) {
                    var h = this || v;
                    if (a = parseFloat(a), h.ctx || o(), void 0 !== a && a >= 0 && a <= 1) {
                        if (h._volume = a, h._muted)
                            return h;
                        h.usingWebAudio && h.masterGain.gain.setValueAtTime(a, v.ctx.currentTime);
                        for (var i = 0; i < h._howls.length; i++)
                            if (!h._howls[i]._webAudio)
                                for (var j = h._howls[i]._getSoundIds(), k = 0; k < j.length; k++) {
                                    var l = h._howls[i]._soundById(j[k]);
                                    l && l._node && (l._node.volume = l._volume * a);
                                }
                        return h;
                    }
                    return h._volume;
                },
                mute: function(a) {
                    var h = this || v;
                    h.ctx || o(), h._muted = a, h.usingWebAudio && h.masterGain.gain.setValueAtTime(a ? 0 : h._volume, v.ctx.currentTime);
                    for (var i = 0; i < h._howls.length; i++)
                        if (!h._howls[i]._webAudio)
                            for (var j = h._howls[i]._getSoundIds(), k = 0; k < j.length; k++) {
                                var l = h._howls[i]._soundById(j[k]);
                                l && l._node && (l._node.muted = !!a || l._muted);
                            }
                    return h;
                },
                stop: function() {
                    for (var j = this || v, k = 0; k < j._howls.length; k++)
                        j._howls[k].stop();
                    return j;
                },
                unload: function() {
                    for (var l = this || v, m = l._howls.length - 1; m >= 0; m--)
                        l._howls[m].unload();
                    return l.usingWebAudio && l.ctx && void 0 !== l.ctx.close && (l.ctx.close(), l.ctx = null, o()), l;
                },
                codecs: function(a) {
                    return (this || v)._codecs[a.replace(/^x-/, '')];
                },
                _setup: function() {
                    var h = this || v;
                    if (h.state = h.ctx && h.ctx.state || 'suspended', h._autoSuspend(), !h.usingWebAudio)
                        if ('undefined' != typeof Audio)
                            try {
                                void 0 === new Audio().oncanplaythrough && (h._canPlayEvent = 'canplay');
                            } catch (g) {
                                h.noAudio = !0;
                            }
                    else
                        h.noAudio = !0;
                    try {
                        new Audio().muted && (h.noAudio = !0);
                    } catch (h) {}
                    return h.noAudio || h._setupCodecs(), h;
                },
                _setupCodecs: function() {
                    var i = this || v,
                        j = null;
                    try {
                        j = 'undefined' != typeof Audio ? new Audio() : null;
                    } catch (j) {
                        return i;
                    }
                    if (!j || 'function' != typeof j.canPlayType)
                        return i;
                    var k = j.canPlayType('audio/mpeg;').replace(/^no$/, ''),
                        l = i._navigator ? i._navigator.userAgent : '',
                        m = l.match(/OPR\/([0-6].)/g),
                        n = m && parseInt(m[0].split('/')[1], 10) < 33,
                        o = -1 !== l.indexOf('Safari') && -1 === l.indexOf('Chrome'),
                        p = l.match(/Version\/(.*?) /),
                        q = o && p && parseInt(p[1], 10) < 15;
                    return i._codecs = {
                        mp3: !(n || !k && !j.canPlayType('audio/mp3;').replace(/^no$/, '')),
                        mpeg: !!k,
                        opus: !!j.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
                        ogg: !!j.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                        oga: !!j.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                        wav: !!(j.canPlayType('audio/wav; codecs="1"') || j.canPlayType('audio/wav')).replace(/^no$/, ''),
                        aac: !!j.canPlayType('audio/aac;').replace(/^no$/, ''),
                        caf: !!j.canPlayType('audio/x-caf;').replace(/^no$/, ''),
                        m4a: !!(j.canPlayType('audio/x-m4a;') || j.canPlayType('audio/m4a;') || j.canPlayType('audio/aac;')).replace(/^no$/, ''),
                        m4b: !!(j.canPlayType('audio/x-m4b;') || j.canPlayType('audio/m4b;') || j.canPlayType('audio/aac;')).replace(/^no$/, ''),
                        mp4: !!(j.canPlayType('audio/x-mp4;') || j.canPlayType('audio/mp4;') || j.canPlayType('audio/aac;')).replace(/^no$/, ''),
                        weba: !(q || !j.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
                        webm: !(q || !j.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
                        dolby: !!j.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
                        flac: !!(j.canPlayType('audio/x-flac;') || j.canPlayType('audio/flac;')).replace(/^no$/, '')
                    }, i;
                },
                _unlockAudio: function() {
                    var r = this || v;
                    if (!r._audioUnlocked && r.ctx) {
                        r._audioUnlocked = !1, r.autoUnlock = !1, r._mobileUnloaded || 44100 === r.ctx.sampleRate || (r._mobileUnloaded = !0, r.unload()), r._scratchBuffer = r.ctx.createBuffer(1, 1, 22050);
                        var s = function(v) {
                            for (; r._html5AudioPool.length < r.html5PoolSize;)
                                try {
                                    var t = new Audio();
                                    t._unlocked = !0, r._releaseHtml5Audio(t);
                                } catch (v) {
                                    r.noAudio = !0;
                                    break;
                                }
                            for (var t = 0; t < r._howls.length; t++)
                                if (!r._howls[t]._webAudio)
                                    for (var u = r._howls[t]._getSoundIds(), v = 0; v < u.length; v++) {
                                        var w = r._howls[t]._soundById(u[v]);
                                        w && w._node && !w._node._unlocked && (w._node._unlocked = !0, w._node.load());
                                    }
                            r._autoResume();
                            var u = r.ctx.createBufferSource();
                            u.buffer = r._scratchBuffer, u.connect(r.ctx.destination), void 0 === u.start ? u.noteOn(0) : u.start(0), 'function' == typeof r.ctx.resume && r.ctx.resume(), u.onended = function() {
                                u.disconnect(0), r._audioUnlocked = !0, document.removeEventListener('touchstart', s, !0), document.removeEventListener('touchend', s, !0), document.removeEventListener('click', s, !0), document.removeEventListener('keydown', s, !0);
                                for (var v = 0; v < r._howls.length; v++)
                                    r._howls[v]._emit('unlock');
                            };
                        };
                        return document.addEventListener('touchstart', s, !0), document.addEventListener('touchend', s, !0), document.addEventListener('click', s, !0), document.addEventListener('keydown', s, !0), r;
                    }
                },
                _obtainHtml5Audio: function() {
                    var s = this || h;
                    if (s._html5AudioPool.length)
                        return s._html5AudioPool.pop();
                    var t = new Audio().play();
                    return t && 'undefined' != typeof Promise && (t instanceof Promise || 'function' == typeof t.then) && t.catch(function() {
                        console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
                    }), new Audio();
                },
                _releaseHtml5Audio: function(a) {
                    var h = this || h;
                    return a._unlocked && h._html5AudioPool.push(a), h;
                },
                _autoSuspend: function() {
                    var i = this;
                    if (i.autoSuspend && i.ctx && void 0 !== i.ctx.suspend && h.usingWebAudio) {
                        for (var j = 0; j < i._howls.length; j++)
                            if (i._howls[j]._webAudio)
                                for (var k = 0; k < i._howls[j]._sounds.length; k++)
                                    if (!i._howls[j]._sounds[k]._paused)
                                        return i;
                        return i._suspendTimer && clearTimeout(i._suspendTimer), i._suspendTimer = setTimeout(function() {
                            if (i.autoSuspend) {
                                i._suspendTimer = null, i.state = 'suspending';
                                var k = function() {
                                    i.state = 'suspended', i._resumeAfterSuspend && (delete i._resumeAfterSuspend, i._autoResume());
                                };
                                i.ctx.suspend().then(k, k);
                            }
                        }, 30000), i;
                    }
                },
                _autoResume: function() {
                    var j = this;
                    if (j.ctx && void 0 !== j.ctx.resume && h.usingWebAudio)
                        return 'running' === j.state && 'interrupted' !== j.ctx.state && j._suspendTimer ? (clearTimeout(j._suspendTimer), j._suspendTimer = null) : 'suspended' === j.state || 'running' === j.state && 'interrupted' === j.ctx.state ? (j.ctx.resume().then(function() {
                            j.state = 'running';
                            for (var k = 0; k < j._howls.length; k++)
                                j._howls[k]._emit('resume');
                        }), j._suspendTimer && (clearTimeout(j._suspendTimer), j._suspendTimer = null)) : 'suspending' === j.state && (j._resumeAfterSuspend = !0), j;
                }
            };
            var h = new g(),
                i = function(a) {
                    a.src && 0 !== a.src.length ? this.init(a) : console.error('An array of source files must be passed with any new Howl.');
                };
            i.prototype = {
                init: function(a) {
                    var j = this;
                    return h.ctx || o(), j._autoplay = a.autoplay || !1, j._format = 'string' != typeof a.format ? a.format : [a.format], j._html5 = a.html5 || !1, j._muted = a.mute || !1, j._loop = a.loop || !1, j._pool = a.pool || 5, j._preload = 'boolean' != typeof a.preload && 'metadata' !== a.preload || a.preload, j._rate = a.rate || 1, j._sprite = a.sprite || {}, j._src = 'string' != typeof a.src ? a.src : [a.src], j._volume = void 0 !== a.volume ? a.volume : 1, j._xhr = {
                        method: a.xhr && a.xhr.method ? a.xhr.method : 'GET',
                        headers: a.xhr && a.xhr.headers ? a.xhr.headers : null,
                        withCredentials: !(!a.xhr || !a.xhr.withCredentials) && a.xhr.withCredentials
                    }, j._duration = 0, j._state = 'unloaded', j._sounds = [], j._endTimers = {}, j._queue = [], j._playLock = !1, j._onend = a.onend ? [{
                        fn: a.onend
                    }] : [], j._onfade = a.onfade ? [{
                        fn: a.onfade
                    }] : [], j._onload = a.onload ? [{
                        fn: a.onload
                    }] : [], j._onloaderror = a.onloaderror ? [{
                        fn: a.onloaderror
                    }] : [], j._onplayerror = a.onplayerror ? [{
                        fn: a.onplayerror
                    }] : [], j._onpause = a.onpause ? [{
                        fn: a.onpause
                    }] : [], j._onplay = a.onplay ? [{
                        fn: a.onplay
                    }] : [], j._onstop = a.onstop ? [{
                        fn: a.onstop
                    }] : [], j._onmute = a.onmute ? [{
                        fn: a.onmute
                    }] : [], j._onvolume = a.onvolume ? [{
                        fn: a.onvolume
                    }] : [], j._onrate = a.onrate ? [{
                        fn: a.onrate
                    }] : [], j._onseek = a.onseek ? [{
                        fn: a.onseek
                    }] : [], j._onunlock = a.onunlock ? [{
                        fn: a.onunlock
                    }] : [], j._onresume = [], j._webAudio = h.usingWebAudio && !j._html5, void 0 !== h.ctx && h.ctx && h.autoUnlock && h._unlockAudio(), h._howls.push(j), j._autoplay && j._queue.push({
                        event: 'play',
                        action: function() {
                            j.play();
                        }
                    }), j._preload && 'none' !== j._preload && j.load(), j;
                },
                load: function() {
                    var k = this,
                        l = null;
                    if (h.noAudio)
                        k._emit('loaderror', null, 'No audio support.');
                    else {
                        'string' == typeof k._src && (k._src = [k._src]);
                        for (var m = 0; m < k._src.length; m++) {
                            var n, o;
                            if (k._format && k._format[m])
                                n = k._format[m];
                            else {
                                if ('string' != typeof(o = k._src[m])) {
                                    k._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
                                    continue;
                                }
                                (n = /^data:audio\/([^;,]+);/i.exec(o)) || (n = /\.([^.]+)$/.exec(o.split('?', 1)[0])), n && (n = n[1].toLowerCase());
                            }
                            if (n || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), n && h.codecs(n)) {
                                l = k._src[m];
                                break;
                            }
                        }
                        if (l)
                            return k._src = l, k._state = 'loading', 'https:' === window.location.protocol && 'http:' === l.slice(0, 5) && (k._html5 = !0, k._webAudio = !1), new c(k), k._webAudio && e(k), k;
                        k._emit('loaderror', null, 'No codec support for selected audio sources.');
                    }
                },
                play: function(a, g) {
                    var j = this,
                        k = null;
                    if ('number' == typeof a)
                        k = a, a = null;
                    else {
                        if ('string' == typeof a && 'loaded' === j._state && !j._sprite[a])
                            return null;
                        if (void 0 === a && (a = '__default', !j._playLock)) {
                            for (var l = 0, m = 0; m < j._sounds.length; m++)
                                j._sounds[m]._paused && !j._sounds[m]._ended && (l++, k = j._sounds[m]._id);
                            1 === l ? a = null : k = null;
                        }
                    }
                    var l = k ? j._soundById(k) : j._inactiveSound();
                    if (!l)
                        return null;
                    if (k && !a && (a = l._sprite || '__default'), 'loaded' !== j._state) {
                        l._sprite = a, l._ended = !1;
                        var m = l._id;
                        return j._queue.push({
                            event: 'play',
                            action: function() {
                                j.play(m);
                            }
                        }), m;
                    }
                    if (k && !l._paused)
                        return g || j._loadQueue('play'), l._id;
                    j._webAudio && h._autoResume();
                    var m = Math.max(0, l._seek > 0 ? l._seek : j._sprite[a][0] / 1000),
                        n = Math.max(0, (j._sprite[a][0] + j._sprite[a][1]) / 1000 - m),
                        o = 1000 * n / Math.abs(l._rate),
                        p = j._sprite[a][0] / 1000,
                        q = (j._sprite[a][0] + j._sprite[a][1]) / 1000;
                    l._sprite = a, l._ended = !1;
                    var r = function() {
                        l._paused = !1, l._seek = m, l._start = p, l._stop = q, l._loop = !(!l._loop && !j._sprite[a][2]);
                    };
                    if (!(m >= q)) {
                        var s = l._node;
                        if (j._webAudio) {
                            var t = function() {
                                j._playLock = !1, r(), j._refreshBuffer(l);
                                var u = l._muted || j._muted ? 0 : l._volume;
                                s.gain.setValueAtTime(u, h.ctx.currentTime), l._playStart = h.ctx.currentTime, void 0 === s.bufferSource.start ? l._loop ? s.bufferSource.noteGrainOn(0, m, 86400) : s.bufferSource.noteGrainOn(0, m, n) : l._loop ? s.bufferSource.start(0, m, 86400) : s.bufferSource.start(0, m, n), o !== 1 / 0 && (j._endTimers[l._id] = setTimeout(j._ended.bind(j, l), o)), g || setTimeout(function() {
                                    j._emit('play', l._id), j._loadQueue();
                                }, 0);
                            };
                            'running' === h.state && 'interrupted' !== h.ctx.state ? t() : (j._playLock = !0, j.once('resume', t), j._clearTimer(l._id));
                        } else {
                            var u = function() {
                                s.currentTime = m, s.muted = l._muted || j._muted || h._muted || s.muted, s.volume = l._volume * h.volume(), s.playbackRate = l._rate;
                                try {
                                    var v = s.play();
                                    if (v && 'undefined' != typeof Promise && (v instanceof Promise || 'function' == typeof v.then) ? (j._playLock = !0, r(), v.then(function() {
                                            j._playLock = !1, s._unlocked = !0, g ? j._loadQueue() : j._emit('play', l._id);
                                        }).catch(function() {
                                            j._playLock = !1, j._emit('playerror', l._id, 'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.'), l._ended = !0, l._paused = !0;
                                        })) : g || (j._playLock = !1, r(), j._emit('play', l._id)), s.playbackRate = l._rate, s.paused)
                                        return void j._emit('playerror', l._id, 'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.');
                                    '__default' !== a || l._loop ? j._endTimers[l._id] = setTimeout(j._ended.bind(j, l), o) : (j._endTimers[l._id] = function() {
                                        j._ended(l), s.removeEventListener('ended', j._endTimers[l._id], !1);
                                    }, s.addEventListener('ended', j._endTimers[l._id], !1));
                                } catch (a) {
                                    j._emit('playerror', l._id, a);
                                }
                            };
                            'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA' === s.src && (s.src = j._src, s.load());
                            var v = window && window.ejecta || !s.readyState && h._navigator.isCocoonJS;
                            if (s.readyState >= 3 || v)
                                u();
                            else {
                                j._playLock = !0, j._state = 'loading';
                                var w = function() {
                                    j._state = 'loaded', u(), s.removeEventListener(h._canPlayEvent, w, !1);
                                };
                                s.addEventListener(h._canPlayEvent, w, !1), j._clearTimer(l._id);
                            }
                        }
                        return l._id;
                    }
                    j._ended(l);
                },
                pause: function(a) {
                    var j = this;
                    if ('loaded' !== j._state || j._playLock)
                        return j._queue.push({
                            event: 'pause',
                            action: function() {
                                j.pause(a);
                            }
                        }), j;
                    for (var k = j._getSoundIds(a), l = 0; l < k.length; l++) {
                        j._clearTimer(k[l]);
                        var m = j._soundById(k[l]);
                        if (m && !m._paused && (m._seek = j.seek(k[l]), m._rateSeek = 0, m._paused = !0, j._stopFade(k[l]), m._node))
                            if (j._webAudio) {
                                if (!m._node.bufferSource)
                                    continue;
                                void 0 === m._node.bufferSource.stop ? m._node.bufferSource.noteOff(0) : m._node.bufferSource.stop(0), j._cleanBuffer(m._node);
                            } else
                                isNaN(m._node.duration) && m._node.duration !== 1 / 0 || m._node.pause();
                        r[1] || j._emit('pause', m ? m._id : null);
                    }
                    return j;
                },
                stop: function(a, g) {
                    var j = this;
                    if ('loaded' !== j._state || j._playLock)
                        return j._queue.push({
                            event: 'stop',
                            action: function() {
                                j.stop(a);
                            }
                        }), j;
                    for (var k = j._getSoundIds(a), l = 0; l < k.length; l++) {
                        j._clearTimer(k[l]);
                        var m = j._soundById(k[l]);
                        m && (m._seek = m._start || 0, m._rateSeek = 0, m._paused = !0, m._ended = !0, j._stopFade(k[l]), m._node && (j._webAudio ? m._node.bufferSource && (void 0 === m._node.bufferSource.stop ? m._node.bufferSource.noteOff(0) : m._node.bufferSource.stop(0), j._cleanBuffer(m._node)) : isNaN(m._node.duration) && m._node.duration !== 1 / 0 || (m._node.currentTime = m._start || 0, m._node.pause(), m._node.duration === 1 / 0 && j._clearSound(m._node))), g || j._emit('stop', m._id));
                    }
                    return j;
                },
                mute: function(a, g) {
                    var j = this;
                    if ('loaded' !== j._state || j._playLock)
                        return j._queue.push({
                            event: 'mute',
                            action: function() {
                                j.mute(a, g);
                            }
                        }), j;
                    if (void 0 === g) {
                        if ('boolean' != typeof a)
                            return j._muted;
                        j._muted = a;
                    }
                    for (var k = j._getSoundIds(g), l = 0; l < k.length; l++) {
                        var m = j._soundById(k[l]);
                        m && (m._muted = a, m._interval && j._stopFade(m._id), j._webAudio && m._node ? m._node.gain.setValueAtTime(a ? 0 : m._volume, h.ctx.currentTime) : m._node && (m._node.muted = !!h._muted || a), j._emit('mute', m._id));
                    }
                    return j;
                },
                volume: function() {
                    var m, n, o, p = this,
                        q = r;
                    if (0 === q.length)
                        return p._volume;
                    if (1 === q.length || 2 === q.length && void 0 === q[1]) {
                        var s = p._getSoundIds(),
                            t = s.indexOf(q[0]);
                        t >= 0 ? n = parseInt(q[0], 10) : m = parseFloat(q[0]);
                    } else
                        q.length >= 2 && (m = parseFloat(q[0]), n = parseInt(q[1], 10));
                    if (!(void 0 !== m && m >= 0 && m <= 1))
                        return (o = n ? p._soundById(n) : p._sounds[0]) ? o._volume : 0;
                    if ('loaded' !== p._state || p._playLock)
                        return p._queue.push({
                            event: 'volume',
                            action: function() {
                                p.volume.apply(p, q);
                            }
                        }), p;
                    void 0 === n && (p._volume = m), n = p._getSoundIds(n);
                    for (var s = 0; s < n.length; s++)
                        (o = p._soundById(n[s])) && (o._volume = m, q[2] || p._stopFade(n[s]), p._webAudio && o._node && !o._muted ? o._node.gain.setValueAtTime(m, h.ctx.currentTime) : o._node && !o._muted && (o._node.volume = m * h.volume()), p._emit('volume', o._id));
                    return p;
                },
                fade: function(a, g, i, c) {
                    var j = this;
                    if ('loaded' !== j._state || j._playLock)
                        return j._queue.push({
                            event: 'fade',
                            action: function() {
                                j.fade(a, g, i, c);
                            }
                        }), j;
                    a = Math.min(Math.max(0, parseFloat(a)), 1), g = Math.min(Math.max(0, parseFloat(g)), 1), i = parseFloat(i), j.volume(a, c);
                    for (var k = j._getSoundIds(c), l = 0; l < k.length; l++) {
                        var m = j._soundById(k[l]);
                        if (m) {
                            if (c || j._stopFade(k[l]), j._webAudio && !m._muted) {
                                var n = h.ctx.currentTime,
                                    o = n + i / 1000;
                                m._volume = a, m._node.gain.setValueAtTime(a, n), m._node.gain.linearRampToValueAtTime(g, o);
                            }
                            j._startFadeInterval(m, a, g, i, k[l], void 0 === c);
                        }
                    }
                    return j;
                },
                _startFadeInterval: function(a, g, h, i, c, d) {
                    var j = this,
                        k = l,
                        m = h - l,
                        n = Math.abs(m / 0.01),
                        o = Math.max(4, n > 0 ? i / n : i),
                        p = Date.now();
                    a._fadeTo = h, a._interval = setInterval(function() {
                        var q = (Date.now() - p) / i;
                        p = Date.now(), k += m * q, k = Math.round(100 * k) / 100, k = m < 0 ? Math.max(h, k) : Math.min(h, k), j._webAudio ? a._volume = k : j.volume(k, a._id, !0), d && (j._volume = k), (h < l && k <= h || h > l && k >= h) && (clearInterval(a._interval), a._interval = null, a._fadeTo = null, j.volume(h, a._id), j._emit('fade', a._id));
                    }, o);
                },
                _stopFade: function(a) {
                    var j = this,
                        k = j._soundById(a);
                    return k && k._interval && (j._webAudio && k._node.gain.cancelScheduledValues(h.ctx.currentTime), clearInterval(k._interval), k._interval = null, j.volume(k._fadeTo, a), k._fadeTo = null, j._emit('fade', a)), j;
                },
                loop: function() {
                    var l, m, n, o = this,
                        p = q;
                    if (0 === p.length)
                        return o._loop;
                    if (1 === p.length) {
                        if ('boolean' != typeof p[0])
                            return !!(n = o._soundById(parseInt(p[0], 10))) && n._loop;
                        l = p[0], o._loop = l;
                    } else
                        2 === p.length && (l = p[0], m = parseInt(p[1], 10));
                    for (var r = o._getSoundIds(m), s = 0; s < r.length; s++)
                        (n = o._soundById(r[s])) && (n._loop = l, o._webAudio && n._node && n._node.bufferSource && (n._node.bufferSource.loop = l, l && (n._node.bufferSource.loopStart = n._start || 0, n._node.bufferSource.loopEnd = n._stop, o.playing(r[s]) && (o.pause(r[s], !0), o.play(r[s], !0)))));
                    return o;
                },
                rate: function() {
                    var t, u, v, w = this,
                        x = y;
                    if (0 === x.length)
                        u = w._sounds[0]._id;
                    else if (1 === x.length) {
                        var z = w._getSoundIds(),
                            A = z.indexOf(x[0]);
                        A >= 0 ? u = parseInt(x[0], 10) : t = parseFloat(x[0]);
                    } else
                        2 === x.length && (t = parseFloat(x[0]), u = parseInt(x[1], 10));
                    if ('number' != typeof t)
                        return (v = w._soundById(u)) ? v._rate : w._rate;
                    if ('loaded' !== w._state || w._playLock)
                        return w._queue.push({
                            event: 'rate',
                            action: function() {
                                w.rate.apply(w, x);
                            }
                        }), w;
                    void 0 === u && (w._rate = t), u = w._getSoundIds(u);
                    for (var z = 0; z < u.length; z++)
                        if (v = w._soundById(u[z])) {
                            w.playing(u[z]) && (v._rateSeek = w.seek(u[z]), v._playStart = w._webAudio ? n.ctx.currentTime : v._playStart), v._rate = t, w._webAudio && v._node && v._node.bufferSource ? v._node.bufferSource.playbackRate.setValueAtTime(t, n.ctx.currentTime) : v._node && (v._node.playbackRate = t);
                            var A = w.seek(u[z]),
                                B = (w._sprite[v._sprite][0] + w._sprite[v._sprite][1]) / 1000 - A,
                                C = 1000 * B / Math.abs(v._rate);
                            !w._endTimers[u[z]] && v._paused || (w._clearTimer(u[z]), w._endTimers[u[z]] = setTimeout(w._ended.bind(w, v), C)), w._emit('rate', v._id);
                        }
                    return w;
                },
                seek: function() {
                    var A, B, C = this,
                        D = E;
                    if (0 === D.length)
                        C._sounds.length && (B = C._sounds[0]._id);
                    else if (1 === D.length) {
                        var F = C._getSoundIds(),
                            G = F.indexOf(D[0]);
                        G >= 0 ? B = parseInt(D[0], 10) : C._sounds.length && (B = C._sounds[0]._id, A = parseFloat(D[0]));
                    } else
                        2 === D.length && (A = parseFloat(D[0]), B = parseInt(D[1], 10));
                    if (void 0 === B)
                        return 0;
                    if ('number' == typeof A && ('loaded' !== C._state || C._playLock))
                        return C._queue.push({
                            event: 'seek',
                            action: function() {
                                C.seek.apply(C, D);
                            }
                        }), C;
                    var F = C._soundById(B);
                    if (F) {
                        if (!('number' == typeof A && A >= 0)) {
                            if (C._webAudio) {
                                var G = C.playing(B) ? n.ctx.currentTime - F._playStart : 0,
                                    H = F._rateSeek ? F._rateSeek - F._seek : 0;
                                return F._seek + (H + G * Math.abs(F._rate));
                            }
                            return F._node.currentTime;
                        }
                        var G = C.playing(B);
                        G && C.pause(B, !0), F._seek = A, F._ended = !1, C._clearTimer(B), C._webAudio || !F._node || isNaN(F._node.duration) || (F._node.currentTime = A);
                        var H = function() {
                            G && C.play(B, !0), C._emit('seek', B);
                        };
                        if (G && !C._webAudio) {
                            var I = function() {
                                C._playLock ? setTimeout(I, 0) : H();
                            };
                            setTimeout(I, 0);
                        } else
                            H();
                    }
                    return C;
                },
                playing: function(a) {
                    var j = this;
                    if ('number' == typeof a) {
                        var k = j._soundById(a);
                        return !!k && !k._paused;
                    }
                    for (var k = 0; k < j._sounds.length; k++)
                        if (!j._sounds[k]._paused)
                            return !0;
                    return !1;
                },
                duration: function(a) {
                    var j = this,
                        k = j._duration,
                        l = j._soundById(a);
                    return l && (k = j._sprite[l._sprite][1] / 1000), k;
                },
                state: function() {
                    return this._state;
                },
                unload: function() {
                    for (var m = this, n = m._sounds, o = 0; o < n.length; o++)
                        n[o]._paused || m.stop(n[o]._id), m._webAudio || (m._clearSound(n[o]._node), n[o]._node.removeEventListener('error', n[o]._errorFn, !1), n[o]._node.removeEventListener(k._canPlayEvent, n[o]._loadFn, !1), n[o]._node.removeEventListener('ended', n[o]._endFn, !1), k._releaseHtml5Audio(n[o]._node)), delete n[o]._node, m._clearTimer(n[o]._id);
                    var p = k._howls.indexOf(m);
                    p >= 0 && k._howls.splice(p, 1);
                    var q = !0;
                    for (o = 0; o < k._howls.length; o++)
                        if (k._howls[o]._src === m._src || m._src.indexOf(k._howls[o]._src) >= 0) {
                            q = !1;
                            break;
                        }
                    return d && q && delete d[m._src], k.noAudio = !1, m._state = 'unloaded', m._sounds = [], m = null, null;
                },
                on: function(a, g, h, i) {
                    var j = this['_on' + a];
                    return 'function' == typeof g && j.push(i ? {
                        id: h,
                        fn: g,
                        once: i
                    } : {
                        id: h,
                        fn: g
                    }), this;
                },
                off: function(a, g, h) {
                    var j = this,
                        k = j['_on' + a],
                        l = 0;
                    if ('number' == typeof g && (h = g, g = null), g || h)
                        for (l = 0; l < k.length; l++) {
                            var m = h === k[l].id;
                            if (g === k[l].fn && m || !g && m) {
                                k.splice(l, 1);
                                break;
                            }
                        }
                    else if (a)
                        j['_on' + a] = [];
                    else {
                        var n = Object.keys(j);
                        for (l = 0; l < n.length; l++)
                            0 === n[l].indexOf('_on') && Array.isArray(j[n[l]]) && (j[n[l]] = []);
                    }
                    return j;
                },
                once: function(a, g, h) {
                    return this.on(a, g, h, 1), this;
                },
                _emit: function(a, g, h) {
                    for (var j = this, k = j['_on' + a], l = k.length - 1; l >= 0; l--)
                        k[l].id && k[l].id !== g && 'load' !== a || (setTimeout(function(a) {
                            a.call(this, g, h);
                        }.bind(j, k[l].fn), 0), k[l].once && j.off(a, k[l].fn, k[l].id));
                    return j._loadQueue(a), j;
                },
                _loadQueue: function(a) {
                    var j = this;
                    if (j._queue.length > 0) {
                        var k = j._queue[0];
                        k.event === a && (j._queue.shift(), j._loadQueue()), a || k.action();
                    }
                    return j;
                },
                _ended: function(a) {
                    var j = this,
                        k = a._sprite;
                    if (!j._webAudio && a._node && !a._node.paused && !a._node.ended && a._node.currentTime < a._stop)
                        return setTimeout(j._ended.bind(j, a), 100), j;
                    var l = !(!a._loop && !j._sprite[k][2]);
                    if (j._emit('end', a._id), !j._webAudio && l && j.stop(a._id, !0).play(a._id), j._webAudio && l) {
                        j._emit('play', a._id), a._seek = a._start || 0, a._rateSeek = 0, a._playStart = h.ctx.currentTime;
                        var m = 1000 * (a._stop - a._start) / Math.abs(a._rate);
                        j._endTimers[a._id] = setTimeout(j._ended.bind(j, a), m);
                    }
                    return j._webAudio && !l && (a._paused = !0, a._ended = !0, a._seek = a._start || 0, a._rateSeek = 0, j._clearTimer(a._id), j._cleanBuffer(a._node), h._autoSuspend()), j._webAudio || l || j.stop(a._id, !0), j;
                },
                _clearTimer: function(a) {
                    var j = this;
                    if (j._endTimers[a]) {
                        if ('function' != typeof j._endTimers[a])
                            clearTimeout(j._endTimers[a]);
                        else {
                            var k = j._soundById(a);
                            k && k._node && k._node.removeEventListener('ended', j._endTimers[a], !1);
                        }
                        delete j._endTimers[a];
                    }
                    return j;
                },
                _soundById: function(a) {
                    for (var j = this, k = 0; k < j._sounds.length; k++)
                        if (a === j._sounds[k]._id)
                            return j._sounds[k];
                    return null;
                },
                _inactiveSound: function() {
                    var l = this;
                    l._drain();
                    for (var m = 0; m < l._sounds.length; m++)
                        if (l._sounds[m]._ended)
                            return l._sounds[m].reset();
                    return new c(l);
                },
                _drain: function() {
                    var n = this,
                        o = n._pool,
                        p = 0,
                        q = 0;
                    if (!(n._sounds.length < o)) {
                        for (q = 0; q < n._sounds.length; q++)
                            n._sounds[q]._ended && p++;
                        for (q = n._sounds.length - 1; q >= 0; q--) {
                            if (p <= o)
                                return;
                            n._sounds[q]._ended && (n._webAudio && n._sounds[q]._node && n._sounds[q]._node.disconnect(0), n._sounds.splice(q, 1), p--);
                        }
                    }
                },
                _getSoundIds: function(a) {
                    if (void 0 === a) {
                        for (var j = [], k = 0; k < this._sounds.length; k++)
                            j.push(this._sounds[k]._id);
                        return j;
                    }
                    return [a];
                },
                _refreshBuffer: function(a) {
                    return a._node.bufferSource = h.ctx.createBufferSource(), a._node.bufferSource.buffer = d[this._src], a._panner ? a._node.bufferSource.connect(a._panner) : a._node.bufferSource.connect(a._node), a._node.bufferSource.loop = a._loop, a._loop && (a._node.bufferSource.loopStart = a._start || 0, a._node.bufferSource.loopEnd = a._stop || 0), a._node.bufferSource.playbackRate.setValueAtTime(a._rate, h.ctx.currentTime), this;
                },
                _cleanBuffer: function(a) {
                    var j = h._navigator && h._navigator.vendor.indexOf('Apple') >= 0;
                    if (h._scratchBuffer && a.bufferSource && (a.bufferSource.onended = null, a.bufferSource.disconnect(0), j))
                        try {
                            a.bufferSource.buffer = h._scratchBuffer;
                        } catch (a) {}
                    return a.bufferSource = null, this;
                },
                _clearSound: function(a) {
                    /MSIE |Trident\//.test(h._navigator && h._navigator.userAgent) || (a.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
                }
            };
            var j = function(a) {
                this._parent = a, this.init();
            };
            j.prototype = {
                init: function() {
                    var k = this,
                        l = k._parent;
                    return k._muted = l._muted, k._loop = l._loop, k._volume = l._volume, k._rate = l._rate, k._seek = 0, k._paused = !0, k._ended = !0, k._sprite = '__default', k._id = ++h._counter, l._sounds.push(k), k.create(), k;
                },
                create: function() {
                    var m = this,
                        n = m._parent,
                        o = h._muted || m._muted || m._parent._muted ? 0 : m._volume;
                    return n._webAudio ? (m._node = void 0 === h.ctx.createGain ? h.ctx.createGainNode() : h.ctx.createGain(), m._node.gain.setValueAtTime(o, h.ctx.currentTime), m._node.paused = !0, m._node.connect(h.masterGain)) : h.noAudio || (m._node = h._obtainHtml5Audio(), m._errorFn = m._errorListener.bind(m), m._node.addEventListener('error', m._errorFn, !1), m._loadFn = m._loadListener.bind(m), m._node.addEventListener(h._canPlayEvent, m._loadFn, !1), m._endFn = m._endListener.bind(m), m._node.addEventListener('ended', m._endFn, !1), m._node.src = n._src, m._node.preload = !0 === n._preload ? 'auto' : n._preload, m._node.volume = o * h.volume(), m._node.load()), m;
                },
                reset: function() {
                    var p = this,
                        q = p._parent;
                    return p._muted = q._muted, p._loop = q._loop, p._volume = q._volume, p._rate = q._rate, p._seek = 0, p._rateSeek = 0, p._paused = !0, p._ended = !0, p._sprite = '__default', p._id = ++h._counter, p;
                },
                _errorListener: function() {
                    var r = this;
                    r._parent._emit('loaderror', r._id, r._node.error ? r._node.error.code : 0), r._node.removeEventListener('error', r._errorFn, !1);
                },
                _loadListener: function() {
                    var s = this,
                        t = s._parent;
                    t._duration = Math.ceil(10 * s._node.duration) / 10, 0 === Object.keys(t._sprite).length && (t._sprite = {
                        __default: [
                            0,
                            1000 * t._duration
                        ]
                    }), 'loaded' !== t._state && (t._state = 'loaded', t._emit('load'), t._loadQueue()), s._node.removeEventListener(h._canPlayEvent, s._loadFn, !1);
                },
                _endListener: function() {
                    var u = this,
                        v = u._parent;
                    v._duration === 1 / 0 && (v._duration = Math.ceil(10 * u._node.duration) / 10, v._sprite.__default[1] === 1 / 0 && (v._sprite.__default[1] = 1000 * v._duration), v._ended(u)), u._node.removeEventListener('ended', u._endFn, !1);
                }
            };
            var k = {},
                l = function(a) {
                    var m = a._src;
                    if (k[m])
                        return a._duration = k[m].duration, void o(a);
                    if (/^data:[^;]+;base64,/.test(m)) {
                        for (var n = atob(m.split(',')[1]), o = new Uint8Array(n.length), p = 0; p < n.length; ++p)
                            o[p] = n.charCodeAt(p);
                        n(o.buffer, a);
                    } else {
                        var q = new XMLHttpRequest();
                        q.open(a._xhr.method, m, !0), q.withCredentials = a._xhr.withCredentials, q.responseType = 'arraybuffer', a._xhr.headers && Object.keys(a._xhr.headers).forEach(function(m) {
                            q.setRequestHeader(m, a._xhr.headers[m]);
                        }), q.onload = function() {
                            var r = (q.status + '')[0];
                            '0' === r || '2' === r || '3' === r ? n(q.response, a) : a._emit('loaderror', null, 'Failed loading audio file with status: ' + q.status + '.');
                        }, q.onerror = function() {
                            a._webAudio && (a._html5 = !0, a._webAudio = !1, a._sounds = [], delete k[m], a.load());
                        }, m(q);
                    }
                },
                m = function(a) {
                    try {
                        a.send();
                    } catch (g) {
                        a.onerror();
                    }
                },
                n = function(a, g) {
                    var o = function() {
                            g._emit('loaderror', null, 'Decoding audio data failed.');
                        },
                        p = function(a) {
                            a && g._sounds.length > 0 ? (k[g._src] = a, o(g, a)) : o();
                        };
                    'undefined' != typeof Promise && 1 === h.ctx.decodeAudioData.length ? h.ctx.decodeAudioData(a).then(p).catch(o) : h.ctx.decodeAudioData(a, p, o);
                },
                o = function(a, g) {
                    g && !a._duration && (a._duration = g.duration), 0 === Object.keys(a._sprite).length && (a._sprite = {
                        __default: [
                            0,
                            1000 * a._duration
                        ]
                    }), 'loaded' !== a._state && (a._state = 'loaded', a._emit('load'), a._loadQueue());
                },
                p = function() {
                    if (h.usingWebAudio) {
                        try {
                            'undefined' != typeof AudioContext ? h.ctx = new AudioContext() : 'undefined' != typeof webkitAudioContext ? h.ctx = new webkitAudioContext() : h.usingWebAudio = !1;
                        } catch (a) {
                            h.usingWebAudio = !1;
                        }
                        h.ctx || (h.usingWebAudio = !1);
                        var q = /iP(hone|od|ad)/.test(h._navigator && h._navigator.platform),
                            r = h._navigator && h._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                            s = r ? parseInt(r[1], 10) : null;
                        if (q && s && s < 9) {
                            var t = /safari/.test(h._navigator && h._navigator.userAgent.toLowerCase());
                            h._navigator && !t && (h.usingWebAudio = !1);
                        }
                        h.usingWebAudio && (h.masterGain = void 0 === h.ctx.createGain ? h.ctx.createGainNode() : h.ctx.createGain(), h.masterGain.gain.setValueAtTime(h._muted ? 0 : h._volume, h.ctx.currentTime), h.masterGain.connect(h.ctx.destination)), h._setup();
                    }
                };
            'function' == typeof define && define.amd && define([], function() {
                return {
                    Howler: h,
                    Howl: i
                };
            }), h, f = i, void 0 !== a ? (a.HowlerGlobal = g, a.Howler = h, a.Howl = i, a.Sound = j) : 'undefined' != typeof window && (window.HowlerGlobal = g, window.Howler = h, window.Howl = i, window.Sound = j);
        }(),
        function() {
            var q;
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
            ], HowlerGlobal.prototype.stereo = function(q) {
                var r = this;
                if (!r.ctx || !r.ctx.listener)
                    return r;
                for (var s = r._howls.length - 1; s >= 0; s--)
                    r._howls[s].stereo(q);
                return r;
            }, HowlerGlobal.prototype.pos = function(q, g, h) {
                var r = this;
                return r.ctx && r.ctx.listener ? (g = 'number' != typeof g ? r._pos[1] : g, h = 'number' != typeof h ? r._pos[2] : h, 'number' != typeof q ? r._pos : (r._pos = [
                    q,
                    g,
                    h
                ], void 0 !== r.ctx.listener.positionX ? (r.ctx.listener.positionX.setTargetAtTime(r._pos[0], Howler.ctx.currentTime, 0.1), r.ctx.listener.positionY.setTargetAtTime(r._pos[1], Howler.ctx.currentTime, 0.1), r.ctx.listener.positionZ.setTargetAtTime(r._pos[2], Howler.ctx.currentTime, 0.1)) : r.ctx.listener.setPosition(r._pos[0], r._pos[1], r._pos[2]), r)) : r;
            }, HowlerGlobal.prototype.orientation = function(q, g, h, i, j, k) {
                var r = this;
                if (!r.ctx || !r.ctx.listener)
                    return r;
                var s = r._orientation;
                return g = 'number' != typeof g ? s[1] : g, h = 'number' != typeof h ? s[2] : h, i = 'number' != typeof i ? s[3] : i, j = 'number' != typeof j ? s[4] : j, k = 'number' != typeof k ? s[5] : k, 'number' != typeof q ? s : (r._orientation = [
                    q,
                    g,
                    h,
                    i,
                    j,
                    k
                ], void 0 !== r.ctx.listener.forwardX ? (r.ctx.listener.forwardX.setTargetAtTime(q, Howler.ctx.currentTime, 0.1), r.ctx.listener.forwardY.setTargetAtTime(g, Howler.ctx.currentTime, 0.1), r.ctx.listener.forwardZ.setTargetAtTime(h, Howler.ctx.currentTime, 0.1), r.ctx.listener.upX.setTargetAtTime(i, Howler.ctx.currentTime, 0.1), r.ctx.listener.upY.setTargetAtTime(j, Howler.ctx.currentTime, 0.1), r.ctx.listener.upZ.setTargetAtTime(k, Howler.ctx.currentTime, 0.1)) : r.ctx.listener.setOrientation(q, g, h, i, j, k), r);
            }, Howl.prototype.init = (q = Howl.prototype.init, function(g) {
                var r = this;
                return r._orientation = g.orientation || [
                    1,
                    0,
                    0
                ], r._stereo = g.stereo || null, r._pos = g.pos || null, r._pannerAttr = {
                    coneInnerAngle: void 0 !== g.coneInnerAngle ? g.coneInnerAngle : 360,
                    coneOuterAngle: void 0 !== g.coneOuterAngle ? g.coneOuterAngle : 360,
                    coneOuterGain: void 0 !== g.coneOuterGain ? g.coneOuterGain : 0,
                    distanceModel: void 0 !== g.distanceModel ? g.distanceModel : 'inverse',
                    maxDistance: void 0 !== g.maxDistance ? g.maxDistance : 10000,
                    panningModel: void 0 !== g.panningModel ? g.panningModel : 'HRTF',
                    refDistance: void 0 !== g.refDistance ? g.refDistance : 1,
                    rolloffFactor: void 0 !== g.rolloffFactor ? g.rolloffFactor : 1
                }, r._onstereo = g.onstereo ? [{
                    fn: g.onstereo
                }] : [], r._onpos = g.onpos ? [{
                    fn: g.onpos
                }] : [], r._onorientation = g.onorientation ? [{
                    fn: g.onorientation
                }] : [], q.call(this, g);
            }), Howl.prototype.stereo = function(q, h) {
                var r = this;
                if (!r._webAudio)
                    return r;
                if ('loaded' !== r._state)
                    return r._queue.push({
                        event: 'stereo',
                        action: function() {
                            r.stereo(q, h);
                        }
                    }), r;
                var s = void 0 === Howler.ctx.createStereoPanner ? 'spatial' : 'stereo';
                if (void 0 === h) {
                    if ('number' != typeof q)
                        return r._stereo;
                    r._stereo = q, r._pos = [
                        q,
                        0,
                        0
                    ];
                }
                for (var t = r._getSoundIds(h), u = 0; u < t.length; u++) {
                    var v = r._soundById(t[u]);
                    if (v) {
                        if ('number' != typeof q)
                            return v._stereo;
                        v._stereo = q, v._pos = [
                            q,
                            0,
                            0
                        ], v._node && (v._pannerAttr.panningModel = 'equalpower', v._panner && v._panner.pan || g(v, s), 'spatial' === s ? void 0 !== v._panner.positionX ? (v._panner.positionX.setValueAtTime(q, Howler.ctx.currentTime), v._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), v._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : v._panner.setPosition(q, 0, 0) : v._panner.pan.setValueAtTime(q, Howler.ctx.currentTime)), r._emit('stereo', v._id);
                    }
                }
                return r;
            }, Howl.prototype.pos = function(q, h, i, j) {
                var r = this;
                if (!r._webAudio)
                    return r;
                if ('loaded' !== r._state)
                    return r._queue.push({
                        event: 'pos',
                        action: function() {
                            r.pos(q, h, i, j);
                        }
                    }), r;
                if (h = 'number' != typeof h ? 0 : h, i = 'number' != typeof i ? -0.5 : i, void 0 === j) {
                    if ('number' != typeof q)
                        return r._pos;
                    r._pos = [
                        q,
                        h,
                        i
                    ];
                }
                for (var s = r._getSoundIds(j), t = 0; t < s.length; t++) {
                    var u = r._soundById(s[t]);
                    if (u) {
                        if ('number' != typeof q)
                            return u._pos;
                        u._pos = [
                            q,
                            h,
                            i
                        ], u._node && (u._panner && !u._panner.pan || g(u, 'spatial'), void 0 !== u._panner.positionX ? (u._panner.positionX.setValueAtTime(q, Howler.ctx.currentTime), u._panner.positionY.setValueAtTime(h, Howler.ctx.currentTime), u._panner.positionZ.setValueAtTime(i, Howler.ctx.currentTime)) : u._panner.setPosition(q, h, i)), r._emit('pos', u._id);
                    }
                }
                return r;
            }, Howl.prototype.orientation = function(q, h, i, j) {
                var r = this;
                if (!r._webAudio)
                    return r;
                if ('loaded' !== r._state)
                    return r._queue.push({
                        event: 'orientation',
                        action: function() {
                            r.orientation(q, h, i, j);
                        }
                    }), r;
                if (h = 'number' != typeof h ? r._orientation[1] : h, i = 'number' != typeof i ? r._orientation[2] : i, void 0 === j) {
                    if ('number' != typeof q)
                        return r._orientation;
                    r._orientation = [
                        q,
                        h,
                        i
                    ];
                }
                for (var s = r._getSoundIds(j), t = 0; t < s.length; t++) {
                    var u = r._soundById(s[t]);
                    if (u) {
                        if ('number' != typeof q)
                            return u._orientation;
                        u._orientation = [
                            q,
                            h,
                            i
                        ], u._node && (u._panner || (u._pos || (u._pos = r._pos || [
                            0,
                            0,
                            -0.5
                        ]), g(u, 'spatial')), void 0 !== u._panner.orientationX ? (u._panner.orientationX.setValueAtTime(q, Howler.ctx.currentTime), u._panner.orientationY.setValueAtTime(h, Howler.ctx.currentTime), u._panner.orientationZ.setValueAtTime(i, Howler.ctx.currentTime)) : u._panner.setOrientation(q, h, i)), r._emit('orientation', u._id);
                    }
                }
                return r;
            }, Howl.prototype.pannerAttr = function() {
                var r, s, t, u = this,
                    v = w;
                if (!u._webAudio)
                    return u;
                if (0 === v.length)
                    return u._pannerAttr;
                if (1 === v.length) {
                    if ('object' != typeof v[0])
                        return (t = u._soundById(parseInt(v[0], 10))) ? t._pannerAttr : u._pannerAttr;
                    r = v[0], void 0 === s && (r.pannerAttr || (r.pannerAttr = {
                        coneInnerAngle: r.coneInnerAngle,
                        coneOuterAngle: r.coneOuterAngle,
                        coneOuterGain: r.coneOuterGain,
                        distanceModel: r.distanceModel,
                        maxDistance: r.maxDistance,
                        refDistance: r.refDistance,
                        rolloffFactor: r.rolloffFactor,
                        panningModel: r.panningModel
                    }), u._pannerAttr = {
                        coneInnerAngle: void 0 !== r.pannerAttr.coneInnerAngle ? r.pannerAttr.coneInnerAngle : u._coneInnerAngle,
                        coneOuterAngle: void 0 !== r.pannerAttr.coneOuterAngle ? r.pannerAttr.coneOuterAngle : u._coneOuterAngle,
                        coneOuterGain: void 0 !== r.pannerAttr.coneOuterGain ? r.pannerAttr.coneOuterGain : u._coneOuterGain,
                        distanceModel: void 0 !== r.pannerAttr.distanceModel ? r.pannerAttr.distanceModel : u._distanceModel,
                        maxDistance: void 0 !== r.pannerAttr.maxDistance ? r.pannerAttr.maxDistance : u._maxDistance,
                        refDistance: void 0 !== r.pannerAttr.refDistance ? r.pannerAttr.refDistance : u._refDistance,
                        rolloffFactor: void 0 !== r.pannerAttr.rolloffFactor ? r.pannerAttr.rolloffFactor : u._rolloffFactor,
                        panningModel: void 0 !== r.pannerAttr.panningModel ? r.pannerAttr.panningModel : u._panningModel
                    });
                } else
                    2 === v.length && (r = v[0], s = parseInt(v[1], 10));
                for (var x = u._getSoundIds(s), y = 0; y < x.length; y++)
                    if (t = u._soundById(x[y])) {
                        var z = t._pannerAttr;
                        z = {
                            coneInnerAngle: void 0 !== r.coneInnerAngle ? r.coneInnerAngle : z.coneInnerAngle,
                            coneOuterAngle: void 0 !== r.coneOuterAngle ? r.coneOuterAngle : z.coneOuterAngle,
                            coneOuterGain: void 0 !== r.coneOuterGain ? r.coneOuterGain : z.coneOuterGain,
                            distanceModel: void 0 !== r.distanceModel ? r.distanceModel : z.distanceModel,
                            maxDistance: void 0 !== r.maxDistance ? r.maxDistance : z.maxDistance,
                            refDistance: void 0 !== r.refDistance ? r.refDistance : z.refDistance,
                            rolloffFactor: void 0 !== r.rolloffFactor ? r.rolloffFactor : z.rolloffFactor,
                            panningModel: void 0 !== r.panningModel ? r.panningModel : z.panningModel
                        };
                        var A = t._panner;
                        A ? (A.coneInnerAngle = z.coneInnerAngle, A.coneOuterAngle = z.coneOuterAngle, A.coneOuterGain = z.coneOuterGain, A.distanceModel = z.distanceModel, A.maxDistance = z.maxDistance, A.refDistance = z.refDistance, A.rolloffFactor = z.rolloffFactor, A.panningModel = z.panningModel) : (t._pos || (t._pos = u._pos || [
                            0,
                            0,
                            -0.5
                        ]), g(t, 'spatial'));
                    }
                return u;
            }, Sound.prototype.init = function(q) {
                return function() {
                    var r = this,
                        s = r._parent;
                    r._orientation = s._orientation, r._stereo = s._stereo, r._pos = s._pos, r._pannerAttr = s._pannerAttr, q.call(this), r._stereo ? s.stereo(r._stereo) : r._pos && s.pos(r._pos[0], r._pos[1], r._pos[2], r._id);
                };
            }(Sound.prototype.init), Sound.prototype.reset = function(q) {
                return function() {
                    var r = this,
                        s = r._parent;
                    return r._orientation = s._orientation, r._stereo = s._stereo, r._pos = s._pos, r._pannerAttr = s._pannerAttr, r._stereo ? s.stereo(r._stereo) : r._pos ? s.pos(r._pos[0], r._pos[1], r._pos[2], r._id) : r._panner && (r._panner.disconnect(0), r._panner = void 0, s._refreshBuffer(r)), q.call(this);
                };
            }(Sound.prototype.reset);
            var r = function(q, r) {
                'spatial' === (r = r || 'spatial') ? (q._panner = Howler.ctx.createPanner(), q._panner.coneInnerAngle = q._pannerAttr.coneInnerAngle, q._panner.coneOuterAngle = q._pannerAttr.coneOuterAngle, q._panner.coneOuterGain = q._pannerAttr.coneOuterGain, q._panner.distanceModel = q._pannerAttr.distanceModel, q._panner.maxDistance = q._pannerAttr.maxDistance, q._panner.refDistance = q._pannerAttr.refDistance, q._panner.rolloffFactor = q._pannerAttr.rolloffFactor, q._panner.panningModel = q._pannerAttr.panningModel, void 0 !== q._panner.positionX ? (q._panner.positionX.setValueAtTime(q._pos[0], Howler.ctx.currentTime), q._panner.positionY.setValueAtTime(q._pos[1], Howler.ctx.currentTime), q._panner.positionZ.setValueAtTime(q._pos[2], Howler.ctx.currentTime)) : q._panner.setPosition(q._pos[0], q._pos[1], q._pos[2]), void 0 !== q._panner.orientationX ? (q._panner.orientationX.setValueAtTime(q._orientation[0], Howler.ctx.currentTime), q._panner.orientationY.setValueAtTime(q._orientation[1], Howler.ctx.currentTime), q._panner.orientationZ.setValueAtTime(q._orientation[2], Howler.ctx.currentTime)) : q._panner.setOrientation(q._orientation[0], q._orientation[1], q._orientation[2])) : (q._panner = Howler.ctx.createStereoPanner(), q._panner.pan.setValueAtTime(q._stereo, Howler.ctx.currentTime)), q._panner.connect(q._node), q._paused || q._parent.pause(q._id, !0).play(q._id, !0);
            };
        }();
});