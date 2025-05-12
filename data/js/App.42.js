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
var c = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}, d = c.parcelRequire388b;
d.register('.....', function (e, f) {
    var g;
    g = e.exports, Object.defineProperty(g, '__esModule', {
        value: !0,
        configurable: !0
    }), a(e.exports, 'default', function () {
        return _z;
    });
    var h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....'), r = d('.....'), s = d('.....');
    let t, u, v = w => w;
    const w = (0, l.lazyWithPreload)(() => d('.....')), x = (0, l.lazyWithPreload)(() => d('.....')), y = () => {
            const [z, A] = (0, k.useBoolean)(!1), [B, C] = (0, k.useBoolean)(!1), [D, E] = i.useState(), [F, G] = i.useState(''), [H, I] = i.useState(''), [J, K] = i.useState(''), {assignmentId: L} = (0, s.useParams)();
            (0, r.useTimeoutWhen)(() => {
                window.location.reload();
            }, 36000000), i.useEffect(() => {
                D && (D === m.ExperienceSource.original ? w.preload() : x.preload());
            }, [D]);
            const M = N => {
                    G(N.serverUrl), I(N.roomId), K(N.intentId), E(N.source), A();
                }, N = O => {
                    C(), K(O.intentId), E(m.ExperienceSource.map), A();
                };
            if (z)
                return D === m.ExperienceSource.map ? (0, h.jsx)(_A, {
                    children: (0, h.jsx)(x, {
                        joinDetails: B ? void 0 : {
                            serverUrl: F,
                            intentId: J,
                            roomId: H
                        },
                        createDetails: B ? { intentId: J } : void 0
                    })
                }) : (0, h.jsx)(_A, {
                    children: (0, h.jsx)(w, {
                        joinDetails: {
                            serverUrl: F,
                            intentId: J,
                            roomId: H
                        }
                    })
                });
            return (0, h.jsx)(_A, {
                children: L ? (0, h.jsx)(o.default, {
                    assignmentId: L,
                    setCreateMapDetails: N
                }) : (0, h.jsx)(n.default, { setJoinLiveDetails: M })
            });
        };
    var _z = () => (i.useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#4252af');
    }, []), (0, h.jsxs)(h.Fragment, {
        children: [
            (0, h.jsx)(k.Title, {
                title: 'Play Gimkit! - Enter game code here',
                description: 'Join a game of Gimkit, an online strategic game show for the classroom.'
            }),
            (0, h.jsx)(_B, {}),
            (0, h.jsx)(i.Suspense, {
                fallback: (0, h.jsx)(_A, { children: (0, h.jsx)(p.default, {}) }),
                children: (0, h.jsx)(y, {})
            })
        ]
    }));
    const _A = j.default.div.attrs({ className: 'flex-column scroll-y' })(t || (t = v`
  flex: 1;
`)), _B = (0, j.createGlobalStyle)(u || (u = v`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    color: ${ 0 };
  }
`), q.default.Black);
}), d.register('.....', function (e, f) {
    Object.defineProperty(e.exports, '__esModule', { value: !0 }), e.exports.lazyWithPreload = void 0;
    var g = d('.....');
    function h(i) {
        var j, k, l = (0, g.lazy)(i), m = (0, g.forwardRef)(function (n, o) {
                var p = (0, g.useRef)(null != j ? j : h);
                return (0, g.createElement)(p.current, Object.assign(o ? { ref: o } : {}, n));
            });
        return m.preload = function () {
            return k || (k = i().then(function (n) {
                return j = n.default;
            })), k;
        }, m;
    }
    e.exports.lazyWithPreload = h, e.exports.default = h;
}), d.register('.....', function (e, f) {
    let g;
    var h;
    let i;
    var j;
    let k;
    var l;
    let m;
    let n;
    var o;
    a(e.exports, 'QuestionType', function () {
        return g;
    }), a(e.exports, 'Privacy', function () {
        return i;
    }), a(e.exports, 'GameStatus', function () {
        return k;
    }), a(e.exports, 'GameType', function () {
        return m;
    }), a(e.exports, 'GameGoal', function () {
        return n;
    }), a(e.exports, 'themes', function () {
        return _t;
    }), a(e.exports, 'ExperienceSource', function () {
        return _u;
    }), (h = g || (g = {})).multipleChoice = 'mc', h.textInput = 'text', (j = i || (i = {})).public = 'public', j.private = 'private', (l = k || (k = {})).setup = 'setup', l.join = 'join', l.teams = 'teams', l.gameplay = 'gameplay', l.results = 'results', (m || (m = {})).live = 'live', (o = n || (n = {})).time = 'time', o.race = 'race', o.allIn = 'allIn';
    const p = '#ffffff', q = '#000000';
    let r;
    var s;
    (s = r || (r = {})).easy = 'easy', s.medium = 'medium', s.hard = 'hard', s.veryHard = 'veryHard', s.veryVeryHard = 'veryVeryHard';
    const _t = [
        {
            cost: 0,
            name: 'Default',
            description: 'Works fine, that\'s all',
            question: {
                background: '#303f9f',
                text: p
            },
            palette: [
                {
                    background: '#771322',
                    text: p
                },
                {
                    background: '#A85C15',
                    text: p
                },
                {
                    background: '#0D6B33',
                    text: p
                },
                {
                    background: '#076296',
                    text: p
                }
            ],
            owned: !0,
            isActive: !0
        },
        {
            cost: 5,
            name: 'Thanksgiving',
            description: 'The perfect theme to show your thanks',
            question: {
                background: '#6C2F00',
                text: p
            },
            palette: [
                {
                    background: '#9E682A',
                    text: p
                },
                {
                    background: '#B54730',
                    text: p
                },
                {
                    background: '#8A9748',
                    text: p
                },
                {
                    background: '#F1B930',
                    text: p
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 10,
            name: 'Night',
            description: 'A little easier on the eyes',
            question: {
                background: '#000a12',
                text: p
            },
            palette: [
                {
                    background: '#263238',
                    text: p
                },
                {
                    background: '#37474f',
                    text: p
                },
                {
                    background: '#455a64',
                    text: p
                },
                {
                    background: '#546e7a',
                    text: p
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 500000,
            name: 'Thanos',
            description: 'Perfectly balanced, as all things should be',
            question: {
                background: '#0D0019',
                text: p
            },
            palette: [
                {
                    background: '#220044',
                    text: p
                },
                {
                    background: '#330066',
                    text: p
                },
                {
                    background: '#3E007C',
                    text: p
                },
                {
                    background: '#4F1787',
                    text: p
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 2000,
            name: 'Ocean',
            description: 'Under the sea...',
            question: {
                background: '#000063',
                text: p
            },
            palette: [
                {
                    background: '#283593',
                    text: p
                },
                {
                    background: '#076296',
                    text: p
                },
                {
                    background: '#0277bd',
                    text: p
                },
                {
                    background: '#1565c0',
                    text: p
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 100000,
            name: 'Forest',
            description: 'A walk through the woods',
            question: {
                background: '#4c3d33',
                text: p
            },
            palette: [
                {
                    background: '#385645',
                    text: p
                },
                {
                    background: '#425C49',
                    text: p
                },
                {
                    background: '#415641',
                    text: p
                },
                {
                    background: '#4C6349',
                    text: p
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 1250,
            name: 'Sunset',
            description: 'Take a breather',
            question: {
                background: '#7F7496',
                text: p
            },
            palette: [
                {
                    background: '#F46F5A',
                    text: p
                },
                {
                    background: '#ED712D',
                    text: p
                },
                {
                    background: '#7A596A',
                    text: p
                },
                {
                    background: '#E8AB3C',
                    text: p
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 750,
            name: 'Pastel',
            description: 'Lighten the mood',
            question: {
                background: '#FFbfd1',
                text: '#434343'
            },
            palette: [
                {
                    background: '#FFA69E',
                    text: '#5b5b5b'
                },
                {
                    background: '#FCF6BF',
                    text: '#5b5b5b'
                },
                {
                    background: '#D0F4DE',
                    text: '#5b5b5b'
                },
                {
                    background: '#93E1D8',
                    text: '#5b5b5b'
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 500,
            name: 'Retro',
            description: 'Old school...',
            question: {
                background: '#9C0022',
                text: p
            },
            palette: [
                {
                    background: '#001D3B',
                    text: p
                },
                {
                    background: '#FFAE52',
                    text: p
                },
                {
                    background: '#FE5963',
                    text: p
                },
                {
                    background: '#A71C94',
                    text: p
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 100000000,
            name: 'Pure Gold',
            description: 'Now you\'re just showing off',
            question: {
                background: q,
                text: '#FFCD2B'
            },
            palette: [
                {
                    background: '#FFCD2B',
                    text: q
                },
                {
                    background: '#FFC721',
                    text: q
                },
                {
                    background: '#FFD147',
                    text: q
                },
                {
                    background: '#FFCD38',
                    text: q
                }
            ],
            owned: !1,
            isActive: !1
        }
    ];
    let _u;
    var v;
    (v = _u || (_u = {})).original = 'original', v.map = 'map';
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _r;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = d('.....');
    var _r = s => {
        const [t, u] = i.useState(''), [v, w] = i.useState(''), [x, y] = i.useState(), [z, A, B] = (0, h.useBoolean)(!1), [C, D, E] = (0, h.useBoolean)(!1), F = G => {
                let H = G;
                H || (H = t), H && !z && (A(), (0, p.default)({
                    code: H,
                    onSuccess: I => {
                        B(), _G(I);
                    },
                    onError: I => {
                        B(), u('');
                        const J = I && I.message && I.message.text ? I.message.text : 'An unknown error occurred';
                        k.default.error({
                            message: J,
                            placement: 'bottomRight'
                        });
                    }
                }));
            }, _G = H => {
                H.roomId || H.groupId && ((0, h.isLoggedIn)() || (window.location.href = `/class/join/${ H.groupId }?redirect=${ encodeURIComponent(window.location.href) }`)), H.roomId && H.groupId && _I({ roomId: H.roomId }), y(H);
            }, H = () => {
                x && x.roomId && _I({ roomId: x.roomId });
            }, _I = J => {
                C || (D(), (0, q.default)({
                    roomId: J.roomId,
                    name: v,
                    onSuccess: K => {
                        s.setJoinLiveDetails({
                            serverUrl: K.serverUrl,
                            roomId: K.roomId,
                            intentId: K.intentId,
                            source: K.source
                        });
                    },
                    onError: K => {
                        var L;
                        const M = null == K || null === (L = K.message) || void 0 === L ? void 0 : L.text;
                        k.default.error({
                            message: M || 'Error joining game. Please refresh the page and try again.',
                            placement: 'bottomRight'
                        }), E();
                    }
                }));
            };
        i.useEffect(() => {
            const J = (0, h.getUrlVariable)('gc');
            J && (u(J), F(J)), !J && (0, h.isLoggedIn)() && (0, h.request)({
                url: '/api/matchmaker/instant-join',
                success: K => {
                    K && K.code && (u(K.code), F(K.code));
                }
            });
        }, []);
        return (0, g.jsx)(j.default, {
            children: (0, g.jsx)(l.AnimatePresence, {
                initial: !0,
                mode: 'wait',
                children: x && x.roomId && !x.groupId ? (0, g.jsx)(n.default, {
                    value: v,
                    onValueChange: w,
                    loading: C,
                    submit: H,
                    useRandomNamePicker: x.useRandomNamePicker
                }, 'enter-name') : x && !x.roomId && x.groupId && x.groupName ? (0, g.jsx)(o.default, {
                    nameOfClass: x.groupName,
                    link: `/class/join/${ x.groupId }?redirect=${ encodeURIComponent(window.location.href) }`
                }, 'join-class') : (0, g.jsx)(m.default, {
                    value: t,
                    onValueChange: u,
                    loading: z || C,
                    submit: F
                }, 'enter-code')
            })
        });
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _m;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....'), i = d('.....'), j = d('.....');
    let k;
    const l = h.default.div.attrs({ className: 'flex-center maxAll' })(k || (k = (m => m)`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/assets/play/background.png') repeat 0 0;
  color: ${ 0 };
`), j.default.Black);
    var _m = n => (0, g.jsx)(i.default, { children: (0, g.jsx)(l, { children: n.children }) });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....');
    var _i = j => {
        const k = (0, h.use100vh)();
        return (0, g.jsx)('div', {
            style: {
                height: k,
                width: '100%'
            },
            className: j.className,
            children: j.children
        });
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'use100vh', function () {
        return _l;
    }, function (g) {
        return _l = g;
    });
    var g = d('.....'), h = function () {
            return h = Object.assign || function (i) {
                for (var j, k = 1, l = arguments.length; k < l; k++)
                    for (var m in j = arguments[k])
                        Object.prototype.hasOwnProperty.call(j, m) && (i[m] = j[m]);
                return i;
            }, h.apply(this, arguments);
        }, i = function (j, k) {
            var l = {};
            for (var m in j)
                Object.prototype.hasOwnProperty.call(j, m) && k.indexOf(m) < 0 && (l[m] = j[m]);
            if (null != j && 'function' == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for (m = Object.getOwnPropertySymbols(j); n < m.length; n++)
                    k.indexOf(m[n]) < 0 && Object.prototype.propertyIsEnumerable.call(j, m[n]) && (l[m[n]] = j[m[n]]);
            }
            return l;
        }, j = !1, k = (0, g.forwardRef)(function (l, m) {
            var n = l.style, o = i(l, ['style']), p = _l();
            !j && (null == n ? void 0 : n.height) && (j = !0, console.warn('<Div100vh /> overrides the height property of the style prop'));
            var q = h(h({}, n), { height: p ? p + 'px' : '100vh' });
            return b(g).createElement('div', h({
                ref: m,
                style: q
            }, o));
        });
    k.displayName = 'Div100vh';
    function _l() {
        var m = (0, g.useState)(_q), n = m[0], o = m[1], p = function () {
                var q = (0, g.useState)(!1), r = q[0], s = q[1];
                return (0, g.useEffect)(function () {
                    _r() && s(!0);
                }, []), r;
            }();
        return (0, g.useEffect)(function () {
            if (p)
                return window.addEventListener('resize', m), function () {
                    return window.removeEventListener('resize', m);
                };
            function q() {
                var r = _q();
                o(q);
            }
        }, [p]), p ? n : null;
    }
    function _q() {
        return _r() ? window.innerHeight : null;
    }
    function _r() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
    }
}), d.register('.....', function (e, f) {
    a(e.exports, 'AnimatePresence', function () {
        return _o;
    });
    var g = d('.....'), h = (g = d('.....'), d('.....')), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....');
    const n = o => o.key || '';
    const _o = ({
        children: p,
        custom: q,
        initial: r = !0,
        onExitComplete: s,
        exitBeforeEnter: t,
        presenceAffectsLayout: u = !0,
        mode: v = 'sync'
    }) => {
        t && (v = 'wait');
        let [w] = (0, h.useForceUpdate)();
        const x = (0, g.useContext)(k.LayoutGroupContext).forceRender;
        x && (w = x);
        const y = (0, i.useIsMounted)(), z = function (A) {
                const B = [];
                return g.Children.forEach(A, C => {
                    (0, g.isValidElement)(C) && B.push(C);
                }), B;
            }(p);
        let A = z;
        const B = new Set(), C = (0, g.useRef)(A), D = (0, g.useRef)(new Map()).current, E = (0, g.useRef)(!0);
        if ((0, l.useIsomorphicLayoutEffect)(() => {
                E.current = !1, function (F, G) {
                    F.forEach(H => {
                        const I = n(H);
                        G.set(I, H);
                    });
                }(z, D), C.current = A;
            }), (0, m.useUnmountEffect)(() => {
                E.current = !0, D.clear(), B.clear();
            }), E.current)
            return g.createElement(g.Fragment, null, A.map(F => g.createElement(j.PresenceChild, {
                key: n(F),
                isPresent: !0,
                initial: !!r && void 0,
                presenceAffectsLayout: u,
                mode: v
            }, F)));
        A = [...A];
        const F = C.current.map(n), G = z.map(n), H = F.length;
        for (let I = 0; I < H; I++) {
            const J = F[I];
            -1 === G.indexOf(J) && B.add(J);
        }
        return 'wait' === v && B.size && (A = []), B.forEach(K => {
            if (-1 !== G.indexOf(K))
                return;
            const L = D.get(K);
            if (!L)
                return;
            const M = F.indexOf(K);
            A.splice(M, 0, g.createElement(j.PresenceChild, {
                key: n(L),
                isPresent: !1,
                onExitComplete: () => {
                    D.delete(K), B.delete(K);
                    const N = C.current.findIndex(O => O.key === K);
                    if (C.current.splice(N, 1), !B.size) {
                        if (C.current = z, !1 === y.current)
                            return;
                        w(), s && s();
                    }
                },
                custom: J,
                presenceAffectsLayout: u,
                mode: v
            }, L));
        }), A = A.map(K => {
            const L = K.key;
            return B.has(L) ? K : g.createElement(j.PresenceChild, {
                key: n(K),
                isPresent: !0,
                presenceAffectsLayout: u,
                mode: v
            }, K);
        }), g.createElement(g.Fragment, null, B.size ? A : A.map(K => (0, g.cloneElement)(K)));
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'useForceUpdate', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    function _j() {
        const k = (0, i.useIsMounted)(), [l, m] = (0, h.useState)(0), n = (0, h.useCallback)(() => {
                k.current && m(l + 1);
            }, [l]);
        return [
            (0, h.useCallback)(() => g.sync.postRender(n), [n]),
            l
        ];
    }
}), d.register('.....', function (e, f) {
    a(e.exports, 'useIsMounted', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....');
    function _i() {
        const j = (0, g.useRef)(!1);
        return (0, h.useIsomorphicLayoutEffect)(() => (j.current = !0, () => {
            j.current = !1;
        }), []), j;
    }
}), d.register('.....', function (e, f) {
    a(e.exports, 'PresenceChild', function () {
        return _k;
    });
    var g = d('.....'), h = (g = d('.....'), d('.....')), i = d('.....'), j = d('.....');
    const _k = ({
        children: l,
        initial: m,
        isPresent: n,
        onExitComplete: o,
        custom: p,
        presenceAffectsLayout: q,
        mode: r
    }) => {
        const s = (0, i.useConstant)(_l), t = (0, g.useId)(), u = (0, g.useMemo)(() => ({
                id: t,
                initial: m,
                isPresent: n,
                custom: p,
                onExitComplete: v => {
                    s.set(v, !0);
                    for (const w of s.values())
                        if (!w)
                            return;
                    o && o();
                },
                register: v => (s.set(v, !1), () => s.delete(v))
            }), q ? void 0 : [n]);
        return (0, g.useMemo)(() => {
            s.forEach((v, w) => s.set(w, !1));
        }, [n]), g.useEffect(() => {
            !n && !s.size && o && o();
        }, [n]), 'popLayout' === r && (l = g.createElement(j.PopChild, { isPresent: n }, l)), g.createElement(h.PresenceContext.Provider, { value: u }, l);
    };
    function _l() {
        return new Map();
    }
}), d.register('.....', function (e, f) {
    a(e.exports, 'PopChild', function () {
        return _i;
    });
    var g = d('.....');
    g = d('.....');
    class h extends g.Component {
        getSnapshotBeforeUpdate(i) {
            const j = this.props.childRef.current;
            if (j && i.isPresent && !this.props.isPresent) {
                const k = this.props.sizeRef.current;
                k.height = j.offsetHeight || 0, k.width = j.offsetWidth || 0, k.top = j.offsetTop, k.left = j.offsetLeft;
            }
            return null;
        }
        componentDidUpdate() {
        }
        render() {
            return this.props.children;
        }
    }
    function _i({
        children: j,
        isPresent: k
    }) {
        const l = (0, g.useId)(), m = (0, g.useRef)(null), n = (0, g.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0
            });
        return (0, g.useInsertionEffect)(() => {
            const {
                width: o,
                height: p,
                top: q,
                left: r
            } = _i.current;
            if (k || !m.current || !o || !p)
                return;
            m.current.dataset.motionPopId = l;
            const s = document.createElement('style');
            return document.head.appendChild(s), s.sheet && s.sheet.insertRule(`\n          [data-motion-pop-id="${ l }"] {\n            position: absolute !important;\n            width: ${ o }px !important;\n            height: ${ p }px !important;\n            top: ${ q }px !important;\n            left: ${ r }px !important;\n          }\n        `), () => {
                document.head.removeChild(s);
            };
        }, [k]), g.createElement(h, {
            isPresent: k,
            childRef: m,
            sizeRef: _i
        }, g.cloneElement(j, { ref: m }));
    }
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _k;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....'), i = d('.....'), j = d('.....');
    var _k = l => {
        const m = () => {
            !l.loading && l.submit && l.submit();
        };
        return (0, g.jsxs)(j.default, {
            alreadyAnimatedIn: !0,
            children: [
                (0, g.jsx)(h.default, {
                    style: {
                        marginTop: 14,
                        marginBottom: 7
                    },
                    placeholder: 'Game Code',
                    inputmode: 'numeric',
                    pattern: '[0-9]*',
                    type: 'number',
                    value: l.value,
                    onChange: n => {
                        l.onValueChange && l.onValueChange(n.target.value);
                    },
                    onKeyDown: n => {
                        'Enter' === n.key && m();
                    },
                    spellcheck: 'false'
                }),
                (0, g.jsx)(i.default, {
                    label: 'Join',
                    onClick: m,
                    loading: l.loading
                })
            ]
        });
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _h;
    });
    let g;
    var _h = d('.....').default.input(g || (g = (i => i)`
  height: 50px;
  outline: none;
  border-radius: 4px;
  width: 100%;
  border-style: solid;
  border-width: 2px;
  border-color: #838383;
  padding: 5px;
  box-sizing: border-box;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  transition: all 0.21s;
  &:focus {
    border-color: #303f9f;
  }
`));
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....');
    d('.....');
    var i = d('.....');
    var _j = k => (0, g.jsx)(i.default, {
        id: k.id,
        type: 'secondary',
        style: Object.assign(k.style || {}, { width: '100%' }),
        size: 'small',
        label: (0, g.jsx)('div', {
            className: 'maxAll flex-center',
            children: k.loading ? (0, g.jsx)(h.default, { size: 22 }) : (0, g.jsx)('span', { children: k.label })
        }),
        onClick: k.onClick
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _s;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    d('.....');
    var j = d('.....'), k = d('.....'), l = d('.....'), m = 44;
    function n(o) {
        var p, q, r;
        return p = o, q = 0, r = 1, o = (Math.min(Math.max(q, p), r) - q) / (r - q), o = (o -= 1) * o * o + 1;
    }
    var r = i.forwardRef(function (s, t) {
            var u, v = s.classes, w = s.className, x = s.color, y = void 0 === x ? 'primary' : x, z = s.disableShrink, A = void 0 !== z && z, B = s.size, C = void 0 === B ? 40 : B, D = s.style, E = s.thickness, F = void 0 === E ? 3.6 : E, G = s.value, H = void 0 === G ? 0 : G, I = s.variant, J = void 0 === I ? 'indeterminate' : I, K = (0, h.default)(s, [
                    'classes',
                    'className',
                    'color',
                    'disableShrink',
                    'size',
                    'style',
                    'thickness',
                    'value',
                    'variant'
                ]), L = {}, M = {}, N = {};
            if ('determinate' === J || 'static' === J) {
                var O = 2 * Math.PI * ((m - F) / 2);
                L.strokeDasharray = O.toFixed(3), N['aria-valuenow'] = Math.round(H), 'static' === J ? (L.strokeDashoffset = ''.concat(((100 - H) / 100 * O).toFixed(3), 'px'), M.transform = 'rotate(-90deg)') : (L.strokeDashoffset = ''.concat((u = (100 - H) / 100, u * u * O).toFixed(3), 'px'), M.transform = 'rotate('.concat((270 * n(H / 70)).toFixed(3), 'deg)'));
            }
            return i.createElement('div', (0, g.default)({
                className: (0, j.default)(v.root, w, 'inherit' !== y && v['color'.concat((0, l.default)(y))], {
                    indeterminate: v.indeterminate,
                    static: v.static
                }[J]),
                style: (0, g.default)({
                    width: C,
                    height: C
                }, M, D),
                ref: t,
                role: 'progressbar'
            }, N, K), i.createElement('svg', {
                className: v.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(m, ' ').concat(m)
            }, i.createElement('circle', {
                className: (0, j.default)(v.circle, A && v.circleDisableShrink, {
                    indeterminate: v.circleIndeterminate,
                    static: v.circleStatic
                }[J]),
                style: L,
                cx: m,
                cy: m,
                r: (m - F) / 2,
                fill: 'none',
                strokeWidth: F
            })));
        }), _s = (0, k.default)(function (t) {
            return {
                root: { display: 'inline-block' },
                static: { transition: t.transitions.create('transform') },
                indeterminate: { animation: '$circular-rotate 1.4s linear infinite' },
                colorPrimary: { color: t.palette.primary.main },
                colorSecondary: { color: t.palette.secondary.main },
                svg: { display: 'block' },
                circle: { stroke: 'currentColor' },
                circleStatic: { transition: t.transitions.create('stroke-dashoffset') },
                circleIndeterminate: {
                    animation: '$circular-dash 1.4s ease-in-out infinite',
                    strokeDasharray: '80px, 200px',
                    strokeDashoffset: '0px'
                },
                '@keyframes circular-rotate': {
                    '0%': { transformOrigin: '50% 50%' },
                    '100%': { transform: 'rotate(360deg)' }
                },
                '@keyframes circular-dash': {
                    '0%': {
                        strokeDasharray: '1px, 200px',
                        strokeDashoffset: '0px'
                    },
                    '50%': {
                        strokeDasharray: '100px, 200px',
                        strokeDashoffset: '-15px'
                    },
                    '100%': {
                        strokeDasharray: '100px, 200px',
                        strokeDashoffset: '-125px'
                    }
                },
                circleDisableShrink: { animation: 'none' }
            };
        }, {
            name: 'MuiCircularProgress',
            flip: !1
        })(r);
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _o;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....');
    let m;
    const n = k.default.div(m || (m = (o => o)`
  box-sizing: border-box;
  padding: ${ 0 };
  font-size: ${ 0 }px;
  background: ${ 0 };
  color: ${ 0 };
  transition: background 0.2s ease;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  user-select: none;
  cursor: ${ 0 };
  &:hover {
    background: ${ 0 };
  }
`), o => 'medium' === o.size ? '12px 16px 12px' : 'large' === o.size ? '13px 21px 13px' : '8px 13px 8px', o => 'medium' === o.size ? 17 : 'large' === o.size ? 23 : 15, o => o.color, l.default.White, o => 'disabled' === o.type ? 'not-allowed' : 'pointer', o => (0, i.lighten)(0.1, o.color));
    class _o extends j.Component {
        render() {
            return (0, h.jsx)(n, {
                id: this.props.id,
                onClick: this.onClick,
                type: this.props.type,
                color: (a = this.props.type, e = this.props.customColor, 'disabled' === a ? l.default.DisabledGray : e || ('primary' === a ? l.default.PrimaryBlue : 'secondary' === a ? l.default.SecondaryPurple : l.default.Black)),
                size: this.props.size,
                style: this.props.style,
                children: this.props.label
            });
            var p, q;
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'onClick', () => {
                'disabled' !== this.props.type && this.props.onClick && this.props.onClick();
            });
        }
    }
    (0, g.default)(_o, 'defaultProps', { size: 'medium' });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _g;
    });
    var _g = d('.....').default;
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return d;
    });
    var g = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _p;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....'), i = d('.....'), j = d('.....');
    let k, l, m = n => n;
    const n = {
            scale: 0.9,
            opacity: 0
        }, o = {
            scale: 1,
            opacity: 1
        };
    var _p = q => (0, g.jsx)(_q, {
        className: q.containerClassName,
        style: { maxWidth: q.customMaxWidth || 400 },
        children: (0, g.jsxs)(_r, {
            initial: q.alreadyAnimatedIn ? o : n,
            animate: o,
            exit: n,
            transition: { duration: 0.4 },
            className: q.className,
            children: [
                q.noImage ? null : (0, g.jsx)('img', {
                    src: '/client/img/svgLogo.svg',
                    style: {
                        width: '70%',
                        maxWidth: 220
                    }
                }),
                q.children
            ]
        })
    });
    const _q = i.default.div.attrs({ className: 'scroll' })(k || (k = m`
  @media (min-width: 736px) and (min-height: 512px) {
    transform: scale(1.4);
  }
  width: 90%;
  max-width: 400px;
  max-height: 90%;
  border-radius: 5px;
`)), _r = (0, i.default)(j.motion.div).attrs({ className: 'maxWidth' })(l || (l = m`
  box-sizing: border-box;
  background: ${ 0 };
  padding: 25px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Product Sans';
`), h.default.White);
}), d.register('.....', function (e, f) {
    a(e.exports, 'LOCAL_STORAGE_PLAY_AGAIN_LAST_USED_NAME', function () {
        return _m;
    }), a(e.exports, 'default', function () {
        return _n;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....');
    const _m = 'play-again-last-used-name';
    var _n = o => {
        const [p, q] = h.useState(''), r = () => {
                (o.value || '').trim().length && !o.loading && o.submit && o.submit();
            };
        return h.useEffect(() => {
            const s = localStorage.getItem(_m);
            s && (q(s), localStorage.removeItem(_m), o.onValueChange(s));
        }, []), h.useEffect(() => {
            o.value && p && p === o.value && r();
        }, [
            p,
            o.value
        ]), (0, g.jsxs)(k.default, {
            children: [
                o.useRandomNamePicker ? (0, g.jsx)(l.default, { onNameChange: o.onValueChange }) : (0, g.jsx)(i.default, {
                    id: 'player-name-input',
                    style: {
                        marginTop: 14,
                        marginBottom: 7
                    },
                    placeholder: 'Your Name',
                    maxLength: 20,
                    value: o.value,
                    onChange: s => {
                        o.onValueChange && o.onValueChange(s.target.value);
                    },
                    onKeyDown: s => {
                        'Enter' === s.key && r();
                    },
                    spellcheck: 'false'
                }),
                (0, g.jsx)(j.default, {
                    id: 'join-game-button',
                    label: 'Join',
                    onClick: r,
                    loading: o.loading
                })
            ]
        });
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _t;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....');
    let q, r, s = t => t;
    var _t = u => {
        const [v, w] = j.useState(0), x = j.useMemo(() => {
                let y = [];
                for (let z = 0; z < 4; z++)
                    y.push(`${ (0, n.capitalizeFirstLetter)((0, p.sample)(o.FriendlyNameWords.adjectives)) }${ (0, n.capitalizeFirstLetter)((0, p.sample)(o.FriendlyNameWords.nouns)) }`);
                return y;
            }, []), y = j.useMemo(() => x[v], [v]);
        j.useEffect(() => {
            u.onNameChange(y);
        }, [y]);
        const z = j.useMemo(() => v + 1 !== 4, [v]);
        return (0, g.jsxs)(_u, {
            children: [
                (0, g.jsx)(h.default, {
                    style: {
                        marginTop: 20,
                        marginBottom: 15
                    },
                    children: (0, g.jsx)('span', {
                        style: {
                            fontStyle: 'italic',
                            color: 'rgba(0,0,0,0.7)'
                        },
                        children: 'Your nickname'
                    })
                }),
                (0, g.jsxs)('div', {
                    className: 'maxWidth flex vc',
                    children: [
                        (0, g.jsx)(l.default, {
                            value: y,
                            readOnly: !0,
                            spellcheck: 'false'
                        }),
                        (0, g.jsx)(i.default, {
                            title: z ? `Spin Again (${ 4 - v - 1 } Left)` : 'Out Of Spins!',
                            children: (0, g.jsx)('div', {
                                style: { marginLeft: 7 },
                                children: (0, g.jsx)(m.default, {
                                    onClick: () => {
                                        z && w(A => A + 1);
                                    },
                                    type: z ? 'primary' : 'disabled',
                                    label: (0, g.jsx)('i', { className: 'fas fa-sync' }),
                                    customColor: '#1b5e20'
                                })
                            })
                        })
                    ]
                })
            ]
        });
    };
    const _u = k.default.div.attrs({ className: 'maxWidth flex-center flex-column' })(q || (q = s`
  margin-bottom: 10px;
`));
    k.default.div(r || (r = s`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  font-style: italic;
  margin-bottom: 7px;
`));
}), d.register('.....', function (e, f) {
    a(e.exports, 'FriendlyNameWords', function () {
        return d;
    });
    const g = {
        nouns: [
            'turtle',
            'elephant',
            'eagle',
            'iguana',
            'flamingo',
            'fox',
            'giraffe',
            'gecko',
            'dragon',
            'sloth',
            'lion',
            'penguin',
            'tiger',
            'kangaroo',
            'butterfly',
            'porcupine',
            'frog',
            'bear',
            'panda',
            'fish',
            'kitten',
            'puppy',
            'otter',
            'leopard',
            'owl',
            'zebra',
            'potato',
            'fruit',
            'planet',
            'cereal',
            'muffin',
            'cookie',
            'cupcake',
            'cloud',
            'shirt',
            'hat',
            'shoe',
            'stone',
            'plant',
            'tree',
            'flower',
            'bread',
            'bike',
            'boat'
        ],
        adjectives: [
            'aqua',
            'beige',
            'blue',
            'bronze',
            'copper',
            'coral',
            'fuchsia',
            'gold',
            'gray',
            'green',
            'indigo',
            'lime',
            'magenta',
            'maroon',
            'orange',
            'pink',
            'purple',
            'red',
            'rose',
            'silver',
            'teal',
            'turquoise',
            'violet',
            'friendly',
            'quiet',
            'spooky',
            'hungry',
            'lucky',
            'adventurous',
            'curious',
            'fearless',
            'grumpy',
            'happy',
            'determined',
            'brave'
        ]
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _p;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    d('.....');
    var k = d('.....');
    let l, m, n, o = p => p;
    var _p = q => (0, g.jsx)(j.default, {
        noImage: !0,
        children: (0, g.jsxs)(_q, {
            children: [
                (0, g.jsx)(_r, {}),
                (0, g.jsx)(i.default, {}),
                (0, g.jsxs)(_s, {
                    children: [
                        'To access this game, you must join the ',
                        (0, g.jsx)('b', { children: q.nameOfClass }),
                        ' ',
                        'class.'
                    ]
                }),
                (0, g.jsx)(h.default, {
                    href: q.link,
                    style: { marginTop: 20 },
                    type: 'primary',
                    block: !0,
                    children: 'Join Class'
                })
            ]
        })
    });
    const _q = k.default.div.attrs({ className: 'maxWidth flex-column flex-center' })(l || (l = o``)), _r = k.default.img.attrs({ src: '/client/img/svgLogo.svg' })(m || (m = o`
  height: 30px;
`)), _s = k.default.div(n || (n = o`
  font-size: 16px;
`));
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....');
    var _i = j => {
        const {
            code: k,
            onSuccess: l,
            onError: m
        } = j;
        k.length < 4 && h.inProductionOrStaging ? m && m({ message: { text: 'Game not found' } }) : (0, g.request)({
            url: '/api/matchmaker/find-info-from-code',
            data: { code: k },
            success: n => {
                l && l(n);
            },
            error: n => {
                m && m(n);
            }
        });
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    var _j = k => {
        const l = {
                roomId: k.roomId,
                name: k.name
            }, m = (() => {
                const {decryptString: n} = new (b(h))(), o = document[n('c23c255b3a1fb2fedf42ed69d04942f9:4473665258554b335a4577725667643935513d3d', 'GK')](n('84b8f50b09914dd59554cab4cb82f078:525a4759344a36757238527443585878485558307868447349446d5959337934', 'GK'));
                if (o) {
                    const p = o.getAttribute('content');
                    if (p)
                        return p.split('').reverse().join('');
                }
                return null;
            })();
        if (m) {
            const n = new (b(i))(!0, !1).hide(m, 'BSKA', 'Gimkit Web Client V3.1');
            l.clientType = n;
        }
        (0, g.request)({
            url: '/api/matchmaker/join',
            data: l,
            success: o => {
                n.onSuccess && n.onSuccess(o);
            },
            error: o => {
                n.onError && n.onError(o);
            }
        });
    };
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer, h = d('.....'), i = function () {
            function j(k) {
                var l = this;
                this.deriveKey = function (m, n) {
                    var o = Object.assign({}, j.defaultDeriveKeyOpts, n), p = o.salt, q = o.iterations, r = o.digest;
                    return h.pbkdf2Sync(m, p, q, 32, r);
                }, this.encryptString = function (m, n) {
                    var o = l.deriveKey(n, l._deriveKeyOptions), p = h.randomBytes(16), q = h.createCipheriv('aes-256-gcm', o, p), r = q.update(m.toString(), 'utf8', 'base64');
                    r += q.final('base64');
                    var s = g.from(r).toString('hex');
                    return p.toString('hex') + ':' + s;
                }, this.decryptString = function (m, n) {
                    var o = l.deriveKey(n, l._deriveKeyOptions), p = m.toString().split(':');
                    if (2 !== p.length)
                        throw new Error('Incorrect format for encrypted string: ' + m);
                    var q = p[0], r = p[1], s = g.from(q, 'hex'), t = g.from(r, 'hex').toString();
                    return h.createDecipheriv('aes-256-gcm', o, s).update(t, 'base64').toString();
                }, k && (this._deriveKeyOptions = k);
            }
            return j.defaultDeriveKeyOpts = {
                salt: 's41t',
                iterations: 1,
                digest: 'sha512'
            }, j;
        }();
    e.exports = i;
}), d.register('.....', function (e, f) {
    var g, h, i, j;
    a(e.exports, 'randomBytes', function () {
        return g;
    }, function (k) {
        return g = k;
    }), a(e.exports, 'pbkdf2Sync', function () {
        return h;
    }, function (k) {
        return h = k;
    }), a(e.exports, 'createCipheriv', function () {
        return i;
    }, function (k) {
        return i = k;
    }), a(e.exports, 'createDecipheriv', function () {
        return j;
    }, function (k) {
        return j = k;
    }), g = d('.....'), d('.....'), d('.....');
    var k = d('.....'), l = Object.keys(k), m = [
            'sha1',
            'sha224',
            'sha256',
            'sha384',
            'sha512',
            'md5',
            'rmd160'
        ].concat(l);
    var n = d('.....');
    n.pbkdf2, h = n.pbkdf2Sync;
    var o = d('.....');
    o.Cipher, o.createCipher, o.Cipheriv, i = o.createCipheriv, o.Decipher, o.createDecipher, o.Decipheriv, j = o.createDecipheriv, o.getCiphers, o.listCiphers;
    var p = d('.....');
    p.DiffieHellmanGroup, p.createDiffieHellmanGroup, p.getDiffieHellman, p.createDiffieHellman, p.DiffieHellman;
    var q = d('.....');
    q.createSign, q.Sign, q.createVerify, q.Verify, d('.....');
    var r = d('.....');
    r.publicEncrypt, r.privateEncrypt, r.publicDecrypt, r.privateDecrypt;
    var s = d('.....');
    s.randomFill, s.randomFillSync;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = 65536;
    var i = d('.....').Buffer, j = c.crypto || c.msCrypto;
    j && j.getRandomValues ? e.exports = function (k, l) {
        if (k > 4294967295)
            throw new RangeError('requested too many random bytes');
        var m = i.allocUnsafe(k);
        if (k > 0)
            if (k > h)
                for (var n = 0; n < k; n += h)
                    j.getRandomValues(m.slice(n, n + h));
            else
                j.getRandomValues(m);
        return 'function' == typeof l ? g.nextTick(function () {
            l(null, m);
        }) : m;
    } : e.exports = function () {
        throw new Error('Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11');
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = g.Buffer;
    function i(j, k) {
        for (var l in j)
            k[l] = j[l];
    }
    function k(l, m, n) {
        return h(l, m, n);
    }
    h.from && h.alloc && h.allocUnsafe && h.allocUnsafeSlow ? e.exports = l : (i(l, e.exports), e.exports.Buffer = k), k.prototype = Object.create(h.prototype), i(h, k), k.from = function (l, m, n) {
        if ('number' == typeof l)
            throw new TypeError('Argument must not be a number');
        return h(l, m, n);
    }, k.alloc = function (l, m, n) {
        if ('number' != typeof l)
            throw new TypeError('Argument must be a number');
        var o = h(l);
        return void 0 !== m ? 'string' == typeof n ? o.fill(m, n) : o.fill(m) : o.fill(0), o;
    }, k.allocUnsafe = function (l) {
        if ('number' != typeof l)
            throw new TypeError('Argument must be a number');
        return h(l);
    }, k.allocUnsafeSlow = function (l) {
        if ('number' != typeof l)
            throw new TypeError('Argument must be a number');
        return l.SlowBuffer(l);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....');
    function l(m) {
        k.call(this, 'digest'), this._hash = m;
    }
    g(l, k), l.prototype._update = function (m) {
        this._hash.update(m);
    }, l.prototype._final = function () {
        return this._hash.digest();
    }, e.exports = function (m) {
        return 'md5' === (m = m.toLowerCase()) ? new h() : 'rmd160' === m || 'ripemd160' === m ? new i() : new l(j(m));
    };
}), d.register('.....', function (e, f) {
    'function' == typeof Object.create ? e.exports = function (g, h) {
        h && (g.super_ = h, g.prototype = Object.create(h.prototype, {
            constructor: {
                value: g,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }));
    } : e.exports = function (g, h) {
        if (h) {
            g.super_ = h;
            var i = function () {
            };
            i.prototype = h.prototype, g.prototype = new i(), g.prototype.constructor = g;
        }
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....').Buffer, j = new Array(16);
    function k() {
        h.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878;
    }
    function l(m, n) {
        return m << n | m >>> 32 - n;
    }
    function m(n, o, p, q, r, s, t) {
        return l(n + (o & p | ~o & q) + r + s | 0, t) + o | 0;
    }
    function n(o, p, q, r, s, t, u) {
        return l(o + (p & r | q & ~r) + s + t | 0, u) + p | 0;
    }
    function o(p, q, r, s, t, u, v) {
        return l(p + (q ^ r ^ s) + t + u | 0, v) + q | 0;
    }
    function p(q, r, s, t, u, v, w) {
        return l(q + (s ^ (r | ~t)) + u + v | 0, w) + r | 0;
    }
    g(k, h), k.prototype._update = function () {
        for (var q = j, r = 0; r < 16; ++r)
            q[r] = this._block.readInt32LE(4 * r);
        var s = this._a, t = this._b, u = this._c, v = this._d;
        s = m(s, t, u, v, q[0], 3614090360, 7), v = m(v, s, t, u, q[1], 3905402710, 12), u = m(u, v, s, t, q[2], 606105819, 17), t = m(t, u, v, s, q[3], 3250441966, 22), s = m(s, t, u, v, q[4], 4118548399, 7), v = m(v, s, t, u, q[5], 1200080426, 12), u = m(u, v, s, t, q[6], 2821735955, 17), t = m(t, u, v, s, q[7], 4249261313, 22), s = m(s, t, u, v, q[8], 1770035416, 7), v = m(v, s, t, u, q[9], 2336552879, 12), u = m(u, v, s, t, q[10], 4294925233, 17), t = m(t, u, v, s, q[11], 2304563134, 22), s = m(s, t, u, v, q[12], 1804603682, 7), v = m(v, s, t, u, q[13], 4254626195, 12), u = m(u, v, s, t, q[14], 2792965006, 17), s = n(s, t = m(t, u, v, s, q[15], 1236535329, 22), u, v, q[1], 4129170786, 5), v = n(v, s, t, u, q[6], 3225465664, 9), u = n(u, v, s, t, q[11], 643717713, 14), t = n(t, u, v, s, q[0], 3921069994, 20), s = n(s, t, u, v, q[5], 3593408605, 5), v = n(v, s, t, u, q[10], 38016083, 9), u = n(u, v, s, t, q[15], 3634488961, 14), t = n(t, u, v, s, q[4], 3889429448, 20), s = n(s, t, u, v, q[9], 568446438, 5), v = n(v, s, t, u, q[14], 3275163606, 9), u = n(u, v, s, t, q[3], 4107603335, 14), t = n(t, u, v, s, q[8], 1163531501, 20), s = n(s, t, u, v, q[13], 2850285829, 5), v = n(v, s, t, u, q[2], 4243563512, 9), u = n(u, v, s, t, q[7], 1735328473, 14), s = o(s, t = n(t, u, v, s, q[12], 2368359562, 20), u, v, q[5], 4294588738, 4), v = o(v, s, t, u, q[8], 2272392833, 11), u = o(u, v, s, t, q[11], 1839030562, 16), t = o(t, u, v, s, q[14], 4259657740, 23), s = o(s, t, u, v, q[1], 2763975236, 4), v = o(v, s, t, u, q[4], 1272893353, 11), u = o(u, v, s, t, q[7], 4139469664, 16), t = o(t, u, v, s, q[10], 3200236656, 23), s = o(s, t, u, v, q[13], 681279174, 4), v = o(v, s, t, u, q[0], 3936430074, 11), u = o(u, v, s, t, q[3], 3572445317, 16), t = o(t, u, v, s, q[6], 76029189, 23), s = o(s, t, u, v, q[9], 3654602809, 4), v = o(v, s, t, u, q[12], 3873151461, 11), u = o(u, v, s, t, q[15], 530742520, 16), s = p(s, t = o(t, u, v, s, q[2], 3299628645, 23), u, v, q[0], 4096336452, 6), v = p(v, s, t, u, q[7], 1126891415, 10), u = p(u, v, s, t, q[14], 2878612391, 15), t = p(t, u, v, s, q[5], 4237533241, 21), s = p(s, t, u, v, q[12], 1700485571, 6), v = p(v, s, t, u, q[3], 2399980690, 10), u = p(u, v, s, t, q[10], 4293915773, 15), t = p(t, u, v, s, q[1], 2240044497, 21), s = p(s, t, u, v, q[8], 1873313359, 6), v = p(v, s, t, u, q[15], 4264355552, 10), u = p(u, v, s, t, q[6], 2734768916, 15), t = p(t, u, v, s, q[13], 1309151649, 21), s = p(s, t, u, v, q[4], 4149444226, 6), v = p(v, s, t, u, q[11], 3174756917, 10), u = p(u, v, s, t, q[2], 718787259, 15), t = p(t, u, v, s, q[9], 3951481745, 21), this._a = this._a + s | 0, this._b = this._b + t | 0, this._c = this._c + u | 0, this._d = this._d + v | 0;
    }, k.prototype._digest = function () {
        this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var q = i.allocUnsafe(16);
        return q.writeInt32LE(this._a, 0), q.writeInt32LE(this._b, 4), q.writeInt32LE(this._c, 8), q.writeInt32LE(this._d, 12), q;
    }, e.exports = k;
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer, h = d('.....').Transform;
    function i(j) {
        h.call(this), this._block = g.allocUnsafe(j), this._blockSize = j, this._blockOffset = 0, this._length = [
            0,
            0,
            0,
            0
        ], this._finalized = !1;
    }
    d('.....')(i, h), i.prototype._transform = function (j, k, l) {
        var m = null;
        try {
            this.update(j, k);
        } catch (j) {
            m = j;
        }
        l(m);
    }, i.prototype._flush = function (j) {
        var k = null;
        try {
            this.push(this.digest());
        } catch (j) {
            k = j;
        }
        j(k);
    }, i.prototype.update = function (j, k) {
        if (function (l, m) {
                if (!g.isBuffer(l) && 'string' != typeof l)
                    throw new TypeError(m + ' must be a string or a buffer');
            }(j, 'Data'), this._finalized)
            throw new Error('Digest already called');
        g.isBuffer(j) || (j = g.from(j, k));
        for (var l = this._block, m = 0; this._blockOffset + j.length - m >= this._blockSize;) {
            for (var n = this._blockOffset; n < this._blockSize;)
                l[n++] = j[m++];
            this._update(), this._blockOffset = 0;
        }
        for (; m < j.length;)
            l[this._blockOffset++] = j[m++];
        for (var o = 0, p = 8 * j.length; p > 0; ++o)
            this._length[o] += p, (p = this._length[o] / 4294967296 | 0) > 0 && (this._length[o] -= 4294967296 * p);
        return this;
    }, i.prototype._update = function () {
        throw new Error('_update is not implemented');
    }, i.prototype.digest = function (j) {
        if (this._finalized)
            throw new Error('Digest already called');
        this._finalized = !0;
        var k = this._digest();
        void 0 !== j && (k = k.toString(j)), this._block.fill(0), this._blockOffset = 0;
        for (var l = 0; l < 4; ++l)
            this._length[l] = 0;
        return k;
    }, i.prototype._digest = function () {
        throw new Error('_digest is not implemented');
    }, e.exports = i;
}), d.register('.....', function (e, f) {
    (f = e.exports = d('.....')).Stream = f, f.Readable = f, f.Writable = d('.....'), f.Duplex = d('.....'), f.Transform = d('.....'), f.PassThrough = d('.....'), f.finished = d('.....'), f.pipeline = d('.....');
}), d.register('.....', function (e, f) {
    var g, h = d('.....');
    e.exports = _C, _C.ReadableState = _B;
    d('.....').EventEmitter;
    var i = function (j, k) {
            return j.listeners(k).length;
        }, j = d('.....'), k = d('.....').Buffer, l = c.Uint8Array || function () {
        };
    var m, n = d('.....');
    m = n && n.debuglog ? n.debuglog('stream') : function () {
    };
    var o, p, q, r = d('.....'), s = d('.....'), t = d('.....').getHighWaterMark, u = d('.....').codes, v = u.ERR_INVALID_ARG_TYPE, w = u.ERR_STREAM_PUSH_AFTER_EOF, x = u.ERR_METHOD_NOT_IMPLEMENTED, y = u.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    d('.....')(_C, j);
    var z = s.errorOrDestroy, A = [
            'error',
            'close',
            'destroy',
            'pause',
            'resume'
        ];
    function _B(C, D, E) {
        g = g || d('.....'), C = C || {}, 'boolean' != typeof E && (E = D instanceof g), this.objectMode = !!C.objectMode, E && (this.objectMode = this.objectMode || !!C.readableObjectMode), this.highWaterMark = t(this, C, 'readableHighWaterMark', E), this.buffer = new r(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== C.emitClose, this.autoDestroy = !!C.autoDestroy, this.destroyed = !1, this.defaultEncoding = C.defaultEncoding || 'utf8', this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, C.encoding && (o || (o = d('.....').StringDecoder), this.decoder = new o(C.encoding), this.encoding = C.encoding);
    }
    function _C(D) {
        if (g = g || d('.....'), !(this instanceof _C))
            return new _C(D);
        var E = this instanceof g;
        this._readableState = new _B(D, this, E), this.readable = !0, D && ('function' == typeof D.read && (this._read = D.read), 'function' == typeof D.destroy && (this._destroy = D.destroy)), j.call(this);
    }
    function E(F, G, H, I, J) {
        m('readableAddChunk', G);
        var K, L = F._readableState;
        if (null === G)
            L.reading = !1, function (M, N) {
                if (m('onEofChunk'), N.ended)
                    return;
                if (N.decoder) {
                    var O = N.decoder.end();
                    O && O.length && (N.buffer.push(O), N.length += N.objectMode ? 1 : O.length);
                }
                N.ended = !0, N.sync ? _K(M) : (N.needReadable = !1, N.emittedReadable || (N.emittedReadable = !0, _M(M)));
            }(F, L);
        else if (J || (K = function (M, N) {
                var O;
                I = N, k.isBuffer(I) || I instanceof l || 'string' == typeof N || void 0 === N || M.objectMode || (O = new v('chunk', [
                    'string',
                    'Buffer',
                    'Uint8Array'
                ], N));
                var P;
                return O;
            }(L, G)), K)
            z(F, K);
        else if (L.objectMode || G && G.length > 0)
            if ('string' == typeof G || L.objectMode || Object.getPrototypeOf(G) === k.prototype || (G = function (M) {
                    return k.from(M);
                }(G)), I)
                L.endEmitted ? z(F, new y()) : _H(F, L, G, !0);
            else if (L.ended)
                z(F, new w());
            else {
                if (L.destroyed)
                    return !1;
                L.reading = !1, L.decoder && !H ? (G = L.decoder.write(G), L.objectMode || 0 !== G.length ? _H(F, L, G, !1) : _O(F, L)) : _H(F, L, G, !1);
            }
        else
            I || (L.reading = !1, _O(F, L));
        return !L.ended && (L.length < L.highWaterMark || 0 === L.length);
    }
    function _H(I, J, K, L) {
        J.flowing && 0 === J.length && !J.sync ? (J.awaitDrain = 0, I.emit('data', K)) : (J.length += J.objectMode ? 1 : K.length, L ? J.buffer.unshift(K) : J.buffer.push(K), J.needReadable && _K(I)), _O(I, J);
    }
    Object.defineProperty(_C.prototype, 'destroyed', {
        enumerable: !1,
        get: function () {
            return void 0 !== this._readableState && this._readableState.destroyed;
        },
        set: function (I) {
            this._readableState && (this._readableState.destroyed = I);
        }
    }), _C.prototype.destroy = s.destroy, _C.prototype._undestroy = s.undestroy, _C.prototype._destroy = function (I, J) {
        J(I);
    }, _C.prototype.push = function (I, J) {
        var K, L = this._readableState;
        return L.objectMode ? K = !0 : 'string' == typeof I && ((J = J || L.defaultEncoding) !== L.encoding && (I = k.from(I, J), J = ''), K = !0), E(this, I, J, !1, K);
    }, _C.prototype.unshift = function (I) {
        return E(this, I, null, !0, !1);
    }, _C.prototype.isPaused = function () {
        return !1 === this._readableState.flowing;
    }, _C.prototype.setEncoding = function (I) {
        o || (o = d('.....').StringDecoder);
        var J = new o(I);
        this._readableState.decoder = J, this._readableState.encoding = this._readableState.decoder.encoding;
        for (var K = this._readableState.buffer.head, L = ''; null !== K;)
            L += J.write(K.data), K = K.next;
        return this._readableState.buffer.clear(), '' !== L && this._readableState.buffer.push(L), this._readableState.length = L.length, this;
    };
    var I = 1073741824;
    function J(K, L) {
        return K <= 0 || 0 === L.length && L.ended ? 0 : L.objectMode ? 1 : K != K ? L.flowing && L.length ? L.buffer.head.data.length : L.length : (K > L.highWaterMark && (L.highWaterMark = function (M) {
            return M >= I ? M = I : (M--, M |= M >>> 1, M |= M >>> 2, M |= M >>> 4, M |= M >>> 8, M |= M >>> 16, M++), M;
        }(K)), K <= L.length ? K : L.ended ? L.length : (L.needReadable = !0, 0));
    }
    function _K(L) {
        var M = L._readableState;
        m('emitReadable', M.needReadable, M.emittedReadable), M.needReadable = !1, M.emittedReadable || (m('emitReadable', M.flowing), M.emittedReadable = !0, K.nextTick(_M, L));
    }
    function _M(N) {
        var O = N._readableState;
        m('emitReadable_', O.destroyed, O.length, O.ended), O.destroyed || !O.length && !O.ended || (N.emit('readable'), O.emittedReadable = !1), O.needReadable = !O.flowing && !O.ended && O.length <= O.highWaterMark, _V(N);
    }
    function _O(P, Q) {
        Q.readingMore || (Q.readingMore = !0, K.nextTick(_P, P, Q));
    }
    function _P(Q, R) {
        for (; !R.reading && !R.ended && (R.length < R.highWaterMark || R.flowing && 0 === R.length);) {
            var S = R.length;
            if (m('maybeReadMore read 0'), Q.read(0), S === R.length)
                break;
        }
        R.readingMore = !1;
    }
    function R(S) {
        var T = S._readableState;
        T.readableListening = S.listenerCount('readable') > 0, T.resumeScheduled && !T.paused ? T.flowing = !0 : S.listenerCount('data') > 0 && S.resume();
    }
    function T(U) {
        m('readable nexttick read 0'), U.read(0);
    }
    function U(V, W) {
        m('resume', W.reading), W.reading || V.read(0), W.resumeScheduled = !1, V.emit('resume'), _V(V), W.flowing && !W.reading && V.read(0);
    }
    function _V(W) {
        var X = W._readableState;
        for (m('flow', X.flowing); X.flowing && null !== W.read(););
    }
    function X(Y, Z) {
        return 0 === Z.length ? null : (Z.objectMode ? S = Z.buffer.shift() : !Y || Y >= Z.length ? (S = Z.decoder ? Z.buffer.join('') : 1 === Z.buffer.length ? Z.buffer.first() : Z.buffer.concat(Z.length), Z.buffer.clear()) : S = Z.buffer.consume(Y, Z.decoder), S);
        var $;
    }
    function Z($) {
        var ab = $._readableState;
        m('endReadable', ab.endEmitted), ab.endEmitted || (ab.ended = !0, K.nextTick(_ab, ab, $));
    }
    function _ab(bb, cb) {
        if (m('endReadableNT', bb.endEmitted, bb.length), !bb.endEmitted && 0 === bb.length && (bb.endEmitted = !0, cb.readable = !1, cb.emit('end'), bb.autoDestroy)) {
            var db = cb._writableState;
            (!db || db.autoDestroy && db.finished) && cb.destroy();
        }
    }
    function cb(db, eb) {
        for (var fb = 0, gb = db.length; fb < gb; fb++)
            if (db[fb] === eb)
                return fb;
        return -1;
    }
    _C.prototype.read = function (fb) {
        m('read', fb), fb = parseInt(fb, 10);
        var gb = this._readableState, hb = fb;
        if (0 !== fb && (gb.emittedReadable = !1), 0 === fb && gb.needReadable && ((0 !== gb.highWaterMark ? gb.length >= gb.highWaterMark : gb.length > 0) || gb.ended))
            return m('read: emitReadable', gb.length, gb.ended), 0 === gb.length && gb.ended ? Z(this) : _K(this), null;
        if (0 === (fb = J(fb, gb)) && gb.ended)
            return 0 === gb.length && Z(this), null;
        var ib, jb = gb.needReadable;
        return m('need readable', jb), (0 === gb.length || gb.length - fb < gb.highWaterMark) && m('length less than watermark', jb = !0), gb.ended || gb.reading ? m('reading or ended', jb = !1) : jb && (m('do read'), gb.reading = !0, gb.sync = !0, 0 === gb.length && (gb.needReadable = !0), this._read(gb.highWaterMark), gb.sync = !1, gb.reading || (fb = J(hb, gb))), null === (ib = fb > 0 ? X(fb, gb) : null) ? (gb.needReadable = gb.length <= gb.highWaterMark, fb = 0) : (gb.length -= fb, gb.awaitDrain = 0), 0 === gb.length && (gb.ended || (gb.needReadable = !0), hb !== fb && gb.ended && Z(this)), null !== ib && this.emit('data', ib), ib;
    }, _C.prototype._read = function (fb) {
        z(this, new x('_read()'));
    }, _C.prototype.pipe = function (fb, gb) {
        var hb = this, ib = this._readableState;
        switch (ib.pipesCount) {
        case 0:
            ib.pipes = fb;
            break;
        case 1:
            ib.pipes = [
                ib.pipes,
                fb
            ];
            break;
        default:
            ib.pipes.push(fb);
        }
        ib.pipesCount += 1, m('pipe count=%d opts=%j', ib.pipesCount, gb);
        var jb = (!gb || !1 !== gb.end) && fb !== K.stdout && fb !== K.stderr ? k : s;
        function kb(lb, mb) {
            m('onunpipe'), lb === hb && mb && !1 === mb.hasUnpiped && (mb.hasUnpiped = !0, m('cleanup'), fb.removeListener('close', q), fb.removeListener('finish', r), fb.removeListener('drain', l), fb.removeListener('error', p), fb.removeListener('unpipe', kb), hb.removeListener('end', k), hb.removeListener('end', s), hb.removeListener('data', o), n = !0, !ib.awaitDrain || fb._writableState && !fb._writableState.needDrain || l());
        }
        function lb() {
            m('onend'), fb.end();
        }
        ib.endEmitted ? K.nextTick(jb) : hb.once('end', jb), fb.on('unpipe', kb);
        var mb = function (nb) {
            return function () {
                var ob = nb._readableState;
                m('pipeOnDrain', ob.awaitDrain), ob.awaitDrain && ob.awaitDrain--, 0 === ob.awaitDrain && L(nb, 'data') && (ob.flowing = !0, _V(nb));
            };
        }(hb);
        fb.on('drain', mb);
        var nb = !1;
        function ob(pb) {
            m('ondata');
            var qb = fb.write(pb);
            m('dest.write', qb), !1 === qb && ((1 === ib.pipesCount && ib.pipes === fb || ib.pipesCount > 1 && -1 !== cb(ib.pipes, fb)) && !nb && (m('false write response, pause', ib.awaitDrain), ib.awaitDrain++), hb.pause());
        }
        function qb(rb) {
            m('onerror', rb), s(), fb.removeListener('error', qb), 0 === L(fb, 'error') && z(fb, rb);
        }
        function rb() {
            fb.removeListener('finish', r), s();
        }
        function sb() {
            m('onfinish'), fb.removeListener('close', rb), s();
        }
        function tb() {
            m('unpipe'), hb.unpipe(fb);
        }
        return hb.on('data', ob), function (ub, vb, wb) {
            if ('function' == typeof ub.prependListener)
                return ub.prependListener(vb, wb);
            ub._events && ub._events[vb] ? Array.isArray(ub._events[vb]) ? ub._events[vb].unshift(wb) : ub._events[vb] = [
                wb,
                ub._events[vb]
            ] : ub.on(vb, wb);
        }(fb, 'error', qb), fb.once('close', rb), fb.once('finish', sb), fb.emit('pipe', hb), ib.flowing || (m('pipe resume'), hb.resume()), fb;
    }, _C.prototype.unpipe = function (fb) {
        var gb = this._readableState, hb = { hasUnpiped: !1 };
        if (0 === gb.pipesCount)
            return this;
        if (1 === gb.pipesCount)
            return fb && fb !== gb.pipes || (fb || (fb = gb.pipes), gb.pipes = null, gb.pipesCount = 0, gb.flowing = !1, fb && fb.emit('unpipe', this, hb)), this;
        if (!fb) {
            var ib = gb.pipes, jb = gb.pipesCount;
            gb.pipes = null, gb.pipesCount = 0, gb.flowing = !1;
            for (var kb = 0; kb < jb; kb++)
                ib[kb].emit('unpipe', this, { hasUnpiped: !1 });
            return this;
        }
        var lb = cb(gb.pipes, fb);
        return -1 === lb || (gb.pipes.splice(lb, 1), gb.pipesCount -= 1, 1 === gb.pipesCount && (gb.pipes = gb.pipes[0]), fb.emit('unpipe', this, hb)), this;
    }, _C.prototype.on = function (fb, gb) {
        var hb = j.prototype.on.call(this, fb, gb), ib = this._readableState;
        return 'data' === fb ? (ib.readableListening = this.listenerCount('readable') > 0, !1 !== ib.flowing && this.resume()) : 'readable' === fb && (ib.endEmitted || ib.readableListening || (ib.readableListening = ib.needReadable = !0, ib.flowing = !1, ib.emittedReadable = !1, m('on readable', ib.length, ib.reading), ib.length ? _K(this) : ib.reading || K.nextTick(T, this))), hb;
    }, _C.prototype.addListener = _C.prototype.on, _C.prototype.removeListener = function (fb, gb) {
        var hb = j.prototype.removeListener.call(this, fb, gb);
        return 'readable' === fb && K.nextTick(R, this), hb;
    }, _C.prototype.removeAllListeners = function (fb) {
        var gb = j.prototype.removeAllListeners.apply(this, arguments);
        return 'readable' !== fb && void 0 !== fb || K.nextTick(R, this), gb;
    }, _C.prototype.resume = function () {
        var fb = this._readableState;
        return fb.flowing || (m('resume'), fb.flowing = !fb.readableListening, function (gb, hb) {
            hb.resumeScheduled || (hb.resumeScheduled = !0, K.nextTick(U, gb, hb));
        }(this, fb)), fb.paused = !1, this;
    }, _C.prototype.pause = function () {
        return m('call pause flowing=%j', this._readableState.flowing), !1 !== this._readableState.flowing && (m('pause'), this._readableState.flowing = !1, this.emit('pause')), this._readableState.paused = !0, this;
    }, _C.prototype.wrap = function (fb) {
        var gb = this, hb = this._readableState, ib = !1;
        for (var jb in (fb.on('end', function () {
                if (m('wrapped end'), hb.decoder && !hb.ended) {
                    var kb = hb.decoder.end();
                    kb && kb.length && gb.push(kb);
                }
                gb.push(null);
            }), fb.on('data', function (kb) {
                (m('wrapped data'), hb.decoder && (kb = hb.decoder.write(kb)), hb.objectMode && null == kb) || (hb.objectMode || kb && kb.length) && (gb.push(kb) || (ib = !0, fb.pause()));
            }), fb))
            void 0 === this[jb] && 'function' == typeof fb[jb] && (this[jb] = function (kb) {
                return function () {
                    return fb[kb].apply(fb, arguments);
                };
            }(jb));
        for (var kb = 0; kb < A.length; kb++)
            fb.on(A[kb], this.emit.bind(this, A[kb]));
        return this._read = function (lb) {
            m('wrapped _read', lb), ib && (ib = !1, fb.resume());
        }, this;
    }, 'function' == typeof Symbol && (_C.prototype[Symbol.asyncIterator] = function () {
        return void 0 === p && (p = gb('.....')), p(this);
    }), Object.defineProperty(_C.prototype, 'readableHighWaterMark', {
        enumerable: !1,
        get: function () {
            return this._readableState.highWaterMark;
        }
    }), Object.defineProperty(_C.prototype, 'readableBuffer', {
        enumerable: !1,
        get: function () {
            return this._readableState && this._readableState.buffer;
        }
    }), Object.defineProperty(_C.prototype, 'readableFlowing', {
        enumerable: !1,
        get: function () {
            return this._readableState.flowing;
        },
        set: function (fb) {
            this._readableState && (this._readableState.flowing = fb);
        }
    }), _C._fromList = X, Object.defineProperty(_C.prototype, 'readableLength', {
        enumerable: !1,
        get: function () {
            return this._readableState.length;
        }
    }), 'function' == typeof Symbol && (_C.from = function (fb, gb) {
        return void 0 === q && (q = gb('.....')), q(_C, fb, gb);
    });
}), d.register('.....', function (e, f) {
    var g, h = 'object' == typeof Reflect ? Reflect : null, i = h && 'function' == typeof h.apply ? h.apply : function (j, k, l) {
            return Function.prototype.apply.call(j, k, l);
        };
    g = h && 'function' == typeof h.ownKeys ? h.ownKeys : Object.getOwnPropertySymbols ? function (j) {
        return Object.getOwnPropertyNames(j).concat(Object.getOwnPropertySymbols(j));
    } : function (j) {
        return Object.getOwnPropertyNames(j);
    };
    var j = Number.isNaN || function (k) {
        return k != k;
    };
    function k() {
        k.init.call(this);
    }
    e.exports = k, e.exports.once = function (l, m) {
        return new Promise(function (n, o) {
            function p(q) {
                l.removeListener(m, j), o(q);
            }
            function q() {
                'function' == typeof l.removeListener && l.removeListener('error', p), n([].slice.call(arguments));
            }
            _H(l, m, q, { once: !0 }), 'error' !== m && function (r, s, t) {
                'function' == typeof r.on && _H(r, 'error', s, t);
            }(l, p, { once: !0 });
        });
    }, k.EventEmitter = k, k.prototype._events = void 0, k.prototype._eventsCount = 0, k.prototype._maxListeners = void 0;
    var l = 10;
    function m(n) {
        if ('function' != typeof n)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
    }
    function n(o) {
        return void 0 === o._maxListeners ? k.defaultMaxListeners : o._maxListeners;
    }
    function o(p, q, r, s) {
        var t, u, v, w;
        if (m(r), void 0 === (u = p._events) ? (u = p._events = Object.create(null), p._eventsCount = 0) : (void 0 !== u.newListener && (p.emit('newListener', q, r.listener ? r.listener : r), u = p._events), k = u[q]), void 0 === k)
            k = u[q] = r, ++p._eventsCount;
        else if ('function' == typeof k ? k = u[q] = s ? [
                r,
                k
            ] : [
                k,
                r
            ] : s ? k.unshift(r) : k.push(r), (t = n(p)) > 0 && k.length > t && !k.warned) {
            k.warned = !0;
            var x = new Error('Possible EventEmitter memory leak detected. ' + k.length + ' ' + String(q) + ' listeners added. Use emitter.setMaxListeners() to increase limit');
            o.name = 'MaxListenersExceededWarning', o.emitter = p, o.type = q, o.count = k.length, w = o, console && console.warn && console.warn(w);
        }
        return p;
    }
    function u() {
        if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function v(w, x, y) {
        var z = {
                fired: !1,
                wrapFn: void 0,
                target: w,
                type: x,
                listener: y
            }, A = u.bind(z);
        return A.listener = y, z.wrapFn = A, A;
    }
    function y(z, A, B) {
        var C = z._events;
        if (void 0 === C)
            return [];
        var D = C[A];
        return void 0 === D ? [] : 'function' == typeof D ? B ? [D.listener || D] : [D] : B ? function (E) {
            for (var F = new Array(E.length), G = 0; G < F.length; ++G)
                F[G] = E[G].listener || E[G];
            return F;
        }(D) : _E(D, D.length);
    }
    function B(C) {
        var D = this._events;
        if (void 0 !== D) {
            var E = D[C];
            if ('function' == typeof E)
                return 1;
            if (void 0 !== E)
                return E.length;
        }
        return 0;
    }
    function _E(F, G) {
        for (var H = new Array(G), I = 0; I < G; ++I)
            H[I] = F[I];
        return H;
    }
    function _H(I, J, K, L) {
        if ('function' == typeof I.on)
            L.once ? I.once(J, K) : I.on(J, K);
        else {
            if ('function' != typeof I.addEventListener)
                throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof I);
            I.addEventListener(J, function D(M) {
                L.once && I.removeEventListener(J, D), K(M);
            });
        }
    }
    Object.defineProperty(k, 'defaultMaxListeners', {
        enumerable: !0,
        get: function () {
            return w;
        },
        set: function (I) {
            if ('number' != typeof I || I < 0 || u(I))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + I + '.');
            w = I;
        }
    }), k.init = function () {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, k.prototype.setMaxListeners = function (I) {
        if ('number' != typeof I || I < 0 || u(I))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + I + '.');
        return this._maxListeners = I, this;
    }, k.prototype.getMaxListeners = function () {
        return n(this);
    }, k.prototype.emit = function (I) {
        for (var J = [], K = 1; K < arguments.length; K++)
            J.push(arguments[K]);
        var L = 'error' === I, M = this._events;
        if (void 0 !== M)
            L = L && void 0 === M.error;
        else if (!L)
            return !1;
        if (L) {
            var N;
            if (J.length > 0 && (N = J[0]), N instanceof Error)
                throw N;
            var O = new Error('Unhandled error.' + (N ? ' (' + N.message + ')' : ''));
            throw O.context = N, O;
        }
        var P = M[I];
        if (void 0 === P)
            return !1;
        if ('function' == typeof P)
            D(P, this, J);
        else {
            var Q = P.length, R = _E(P, Q);
            for (K = 0; K < Q; ++K)
                D(R[K], this, J);
        }
        return !0;
    }, k.prototype.addListener = function (I, J) {
        return o(this, I, J, !1);
    }, k.prototype.on = k.prototype.addListener, k.prototype.prependListener = function (I, J) {
        return o(this, I, J, !0);
    }, k.prototype.once = function (I, J) {
        return m(J), this.on(I, v(this, I, J)), this;
    }, k.prototype.prependOnceListener = function (I, J) {
        return m(J), this.prependListener(I, v(this, I, J)), this;
    }, k.prototype.removeListener = function (I, J) {
        var K, L, M, N, O;
        if (m(J), void 0 === (L = this._events))
            return this;
        if (void 0 === (K = L[I]))
            return this;
        if (K === J || K.listener === J)
            0 == --this._eventsCount ? this._events = Object.create(null) : (delete L[I], L.removeListener && this.emit('removeListener', I, K.listener || J));
        else if ('function' != typeof K) {
            for (M = -1, N = K.length - 1; N >= 0; N--)
                if (K[N] === J || K[N].listener === J) {
                    O = K[N].listener, M = N;
                    break;
                }
            if (M < 0)
                return this;
            0 === M ? K.shift() : function (P, Q) {
                for (; Q + 1 < P.length; Q++)
                    P[Q] = P[Q + 1];
                P.pop();
            }(K, M), 1 === K.length && (L[I] = K[0]), void 0 !== L.removeListener && this.emit('removeListener', I, O || J);
        }
        return this;
    }, k.prototype.off = k.prototype.removeListener, k.prototype.removeAllListeners = function (I) {
        var J, K, L;
        if (void 0 === (K = this._events))
            return this;
        if (void 0 === K.removeListener)
            return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== K[I] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete K[I]), this;
        if (0 === arguments.length) {
            var M, N = Object.keys(K);
            for (L = 0; L < N.length; ++L)
                'removeListener' !== (M = N[L]) && this.removeAllListeners(M);
            return this.removeAllListeners('removeListener'), this._events = Object.create(null), this._eventsCount = 0, this;
        }
        if ('function' == typeof (J = K[I]))
            this.removeListener(I, J);
        else if (void 0 !== J)
            for (L = J.length - 1; L >= 0; L--)
                this.removeListener(I, J[L]);
        return this;
    }, k.prototype.listeners = function (I) {
        return y(this, I, !0);
    }, k.prototype.rawListeners = function (I) {
        return y(this, I, !1);
    }, k.listenerCount = function (I, J) {
        return 'function' == typeof I.listenerCount ? I.listenerCount(J) : B.call(I, J);
    }, k.prototype.listenerCount = B, k.prototype.eventNames = function () {
        return this._eventsCount > 0 ? H(this._events) : [];
    };
}), d.register('.....', function (e, f) {
    e.exports = d('.....').EventEmitter;
}), d.register('.....', function (e, f) {
}), d.register('.....', function (e, f) {
    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function (l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), g.push.apply(g, k);
        }
        return g;
    }
    function j(k, l, m) {
        return l in k ? Object.defineProperty(k, l, {
            value: m,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : k[l] = m, k;
    }
    function k(l, m) {
        for (var n = 0; g < m.length; g++) {
            var o = m[g];
            o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(l, o.key, o);
        }
    }
    var n = o('.....').Buffer, o = o('.....').inspect, p = o && o.custom || 'inspect';
    e.exports = function () {
        function q() {
            !function (r, s) {
                if (!(r instanceof s))
                    throw new TypeError('Cannot call a class as a function');
            }(this, q), this.head = null, this.tail = null, this.length = 0;
        }
        var r, s, t;
        return r = q, s = [
            {
                key: 'push',
                value: function (u) {
                    var v = {
                        data: u,
                        next: null
                    };
                    this.length > 0 ? this.tail.next = v : this.head = v, this.tail = v, ++this.length;
                }
            },
            {
                key: 'unshift',
                value: function (u) {
                    var v = {
                        data: u,
                        next: this.head
                    };
                    0 === this.length && (this.tail = v), this.head = v, ++this.length;
                }
            },
            {
                key: 'shift',
                value: function () {
                    if (0 !== this.length) {
                        var u = this.head.data;
                        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, u;
                    }
                }
            },
            {
                key: 'clear',
                value: function () {
                    this.head = this.tail = null, this.length = 0;
                }
            },
            {
                key: 'join',
                value: function (u) {
                    if (0 === this.length)
                        return '';
                    for (var v = this.head, w = '' + v.data; v = v.next;)
                        w += u + v.data;
                    return w;
                }
            },
            {
                key: 'concat',
                value: function (u) {
                    if (0 === this.length)
                        return n.alloc(0);
                    for (var v, w, x, y = n.allocUnsafe(u >>> 0), z = this.head, A = 0; z;)
                        v = z.data, w = y, x = A, n.prototype.copy.call(v, w, x), A += z.data.length, z = z.next;
                    return y;
                }
            },
            {
                key: 'consume',
                value: function (u, v) {
                    var w;
                    return u < this.head.data.length ? (w = this.head.data.slice(0, u), this.head.data = this.head.data.slice(u)) : w = u === this.head.data.length ? this.shift() : v ? this._getString(u) : this._getBuffer(u), w;
                }
            },
            {
                key: 'first',
                value: function () {
                    return this.head.data;
                }
            },
            {
                key: '_getString',
                value: function (u) {
                    var v = this.head, w = 1, x = v.data;
                    for (u -= x.length; v = v.next;) {
                        var y = v.data, z = u > y.length ? y.length : u;
                        if (z === y.length ? x += y : x += y.slice(0, u), 0 == (u -= z)) {
                            z === y.length ? (++w, v.next ? this.head = v.next : this.head = this.tail = null) : (this.head = v, v.data = y.slice(z));
                            break;
                        }
                        ++w;
                    }
                    return this.length -= w, x;
                }
            },
            {
                key: '_getBuffer',
                value: function (u) {
                    var v = n.allocUnsafe(u), w = this.head, x = 1;
                    for (w.data.copy(v), u -= w.data.length; w = w.next;) {
                        var y = w.data, z = u > y.length ? y.length : u;
                        if (y.copy(v, v.length - u, 0, z), 0 == (u -= z)) {
                            z === y.length ? (++x, w.next ? this.head = w.next : this.head = this.tail = null) : (this.head = w, w.data = y.slice(z));
                            break;
                        }
                        ++x;
                    }
                    return this.length -= x, v;
                }
            },
            {
                key: p,
                value: function (u, v) {
                    return o(this, function (w) {
                        for (var x = 1; x < arguments.length; x++) {
                            var y = null != arguments[x] ? arguments[x] : {};
                            x % 2 ? g(Object(y), !0).forEach(function (z) {
                                j(w, z, y[z]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(y)) : g(Object(y)).forEach(function (z) {
                                Object.defineProperty(w, z, Object.getOwnPropertyDescriptor(y, z));
                            });
                        }
                        return w;
                    }({}, v, {
                        depth: 0,
                        customInspect: !1
                    }));
                }
            }
        ], s && k(r.prototype, s), t && k(r, t), q;
    }();
}), d.register('.....', function (e, f) {
    var g = d('.....');
    function h(i, j) {
        _j(i, j), _i(i);
    }
    function _i(j) {
        j._writableState && !j._writableState.emitClose || j._readableState && !j._readableState.emitClose || j.emit('close');
    }
    function _j(k, l) {
        k.emit('error', l);
    }
    e.exports = {
        destroy: function (k, l) {
            var m = this, n = this._readableState && this._readableState.destroyed, o = this._writableState && this._writableState.destroyed;
            return n || o ? (l ? l(k) : k && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, g.nextTick(_j, this, k)) : g.nextTick(_j, this, k)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(k || null, function (p) {
                !l && p ? m._writableState ? m._writableState.errorEmitted ? g.nextTick(_i, m) : (m._writableState.errorEmitted = !0, g.nextTick(h, m, p)) : g.nextTick(h, m, p) : l ? (g.nextTick(_i, m), l(p)) : g.nextTick(_i, m);
            }), this);
        },
        undestroy: function () {
            this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
        },
        errorOrDestroy: function (k, l) {
            var m = k._readableState, n = k._writableState;
            m && m.autoDestroy || n && n.autoDestroy ? k.destroy(l) : k.emit('error', l);
        }
    };
}), d.register('.....', function (e, f) {
    var g = d('.....').codes.ERR_INVALID_OPT_VALUE;
    e.exports = {
        getHighWaterMark: function (h, i, j, k) {
            var l = function (m, n, o) {
                return null != m.highWaterMark ? m.highWaterMark : n ? m[o] : null;
            }(i, k, j);
            if (null != l) {
                if (!isFinite(l) || Math.floor(l) !== l || l < 0)
                    throw new g(k ? j : 'highWaterMark', l);
                return Math.floor(l);
            }
            return h.objectMode ? 16 : 16384;
        }
    };
}), d.register('.....', function (e, f) {
    var g;
    a(e.exports, 'codes', function () {
        return g;
    }, function (h) {
        return g = h;
    });
    var h = {};
    function i(j, k, l) {
        l || (l = Error);
        var m = function (n) {
            var o, p;
            function q(r, s, t) {
                return n.call(this, function (u, v, w) {
                    return 'string' == typeof k ? k : k(u, v, w);
                }(r, s, t)) || this;
            }
            return p = n, (o = q).prototype = Object.create(p.prototype), o.prototype.constructor = o, o.__proto__ = p, q;
        }(l);
        m.prototype.name = l.name, m.prototype.code = j, h[j] = m;
    }
    function k(l, m) {
        if (Array.isArray(l)) {
            var n = l.length;
            return l = l.map(function (o) {
                return String(o);
            }), n > 2 ? 'one of '.concat(m, ' ').concat(l.slice(0, n - 1).join(', '), ', or ') + l[n - 1] : 2 === n ? 'one of '.concat(m, ' ').concat(l[0], ' or ').concat(l[1]) : 'of '.concat(m, ' ').concat(l[0]);
        }
        return 'of '.concat(m, ' ').concat(String(l));
    }
    i('ERR_INVALID_OPT_VALUE', function (m, n) {
        return 'The value "' + n + '" is invalid for option "' + m + '"';
    }, TypeError), i('ERR_INVALID_ARG_TYPE', function (m, n, o) {
        var p, q, r, s;
        if ('string' == typeof n && (q = 'not ', n.substr(!r || r < 0 ? 0 : +r, q.length) === q) ? (p = 'must not be', n = n.replace(/^not /, '')) : p = 'must be', function (t, u, v) {
                return (void 0 === v || v > t.length) && (v = t.length), t.substring(v - u.length, v) === u;
            }(m, ' argument'))
            s = 'The '.concat(m, ' ').concat(p, ' ').concat(k(n, 'type'));
        else {
            var t = function (u, v, w) {
                return 'number' != typeof w && (w = 0), !(w + v.length > u.length) && -1 !== u.indexOf(v, w);
            }(m, '.') ? 'property' : 'argument';
            s = 'The "'.concat(m, '" ').concat(t, ' ').concat(p, ' ').concat(k(n, 'type'));
        }
        return s += '. Received type '.concat(typeof o);
    }, TypeError), i('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF'), i('ERR_METHOD_NOT_IMPLEMENTED', function (m) {
        return 'The ' + m + ' method is not implemented';
    }), i('ERR_STREAM_PREMATURE_CLOSE', 'Premature close'), i('ERR_STREAM_DESTROYED', function (m) {
        return 'Cannot call ' + m + ' after a stream was destroyed';
    }), i('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times'), i('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable'), i('ERR_STREAM_WRITE_AFTER_END', 'write after end'), i('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError), i('ERR_UNKNOWN_ENCODING', function (m) {
        return 'Unknown encoding: ' + m;
    }, TypeError), i('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event'), m = h;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = Object.keys || function (i) {
            var j = [];
            for (var k in i)
                j.push(k);
            return j;
        };
    e.exports = _n;
    var i = d('.....'), j = d('.....');
    d('.....')(_n, i);
    for (var k = h(j.prototype), l = 0; l < k.length; l++) {
        var m = k[l];
        _n.prototype[m] || (_n.prototype[m] = j.prototype[m]);
    }
    function _n(o) {
        if (!(this instanceof _n))
            return new _n(o);
        i.call(this, o), j.call(this, o), this.allowHalfOpen = !0, o && (!1 === o.readable && (this.readable = !1), !1 === o.writable && (this.writable = !1), !1 === o.allowHalfOpen && (this.allowHalfOpen = !1, this.once('end', _o)));
    }
    function _o() {
        this._writableState.ended || g.nextTick(_p, this);
    }
    function _p(q) {
        q.end();
    }
    Object.defineProperty(_n.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function () {
            return this._writableState.highWaterMark;
        }
    }), Object.defineProperty(_n.prototype, 'writableBuffer', {
        enumerable: !1,
        get: function () {
            return this._writableState && this._writableState.getBuffer();
        }
    }), Object.defineProperty(_n.prototype, 'writableLength', {
        enumerable: !1,
        get: function () {
            return this._writableState.length;
        }
    }), Object.defineProperty(_n.prototype, 'destroyed', {
        enumerable: !1,
        get: function () {
            return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed);
        },
        set: function (q) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = q, this._writableState.destroyed = q);
        }
    });
}), d.register('.....', function (e, f) {
    var g, h = d('.....');
    function i(j) {
        var k = this;
        this.next = null, this.entry = null, this.finish = function () {
            !function (l, m, n) {
                var o = l.entry;
                l.entry = null;
                for (; o;) {
                    var p = o.callback;
                    m.pendingcb--, p(n), o = o.next;
                }
                m.corkedRequestsFree.next = l;
            }(k, j);
        };
    }
    e.exports = _E, _E.WritableState = _C;
    var k = { deprecate: d('.....') }, l = d('.....'), m = d('.....').Buffer, n = c.Uint8Array || function () {
        };
    var o, p = d('.....'), q = d('.....').getHighWaterMark, r = d('.....').codes, s = r.ERR_INVALID_ARG_TYPE, t = r.ERR_METHOD_NOT_IMPLEMENTED, u = r.ERR_MULTIPLE_CALLBACK, v = r.ERR_STREAM_CANNOT_PIPE, w = r.ERR_STREAM_DESTROYED, x = r.ERR_STREAM_NULL_VALUES, y = r.ERR_STREAM_WRITE_AFTER_END, z = r.ERR_UNKNOWN_ENCODING, A = p.errorOrDestroy;
    function B() {
    }
    function _C(D, E, F) {
        g = g || d('.....'), D = D || {}, 'boolean' != typeof F && (F = E instanceof g), this.objectMode = !!D.objectMode, F && (this.objectMode = this.objectMode || !!D.writableObjectMode), this.highWaterMark = q(this, D, 'writableHighWaterMark', F), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var G = !1 === D.decodeStrings;
        this.decodeStrings = !G, this.defaultEncoding = D.defaultEncoding || 'utf8', this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (H) {
            !function (I, J) {
                var K = I._writableState, L = K.sync, M = K.writecb;
                if ('function' != typeof M)
                    throw new u();
                if (function (N) {
                        N.writing = !1, N.writecb = null, N.length -= N.writelen, N.writelen = 0;
                    }(K), J)
                    !function (N, O, P, Q, R) {
                        --O.pendingcb, P ? (h.nextTick(R, Q), h.nextTick(_U, N, O), N._writableState.errorEmitted = !0, A(N, Q)) : (R(Q), N._writableState.errorEmitted = !0, A(N, Q), _U(N, O));
                    }(I, K, L, J, M);
                else {
                    var N = _S(K) || I.destroyed;
                    N || K.corked || K.bufferProcessing || !K.bufferedRequest || _I(I, K), L ? h.nextTick(_H, I, K, N, M) : _H(I, K, N, M);
                }
            }(E, H);
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== D.emitClose, this.autoDestroy = !!D.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new i(this);
    }
    function _E(F) {
        var G = this instanceof (g = g || d('.....'));
        if (!G && !o.call(_E, this))
            return new _E(F);
        this._writableState = new _C(F, this, G), this.writable = !0, F && ('function' == typeof F.write && (this._write = F.write), 'function' == typeof F.writev && (this._writev = F.writev), 'function' == typeof F.destroy && (this._destroy = F.destroy), 'function' == typeof F.final && (this._final = F.final)), l.call(this);
    }
    function G(H, I, J, K, L, M, N) {
        I.writelen = K, I.writecb = N, I.writing = !0, I.sync = !0, I.destroyed ? I.onwrite(new w('write')) : J ? H._writev(L, I.onwrite) : H._write(L, M, I.onwrite), I.sync = !1;
    }
    function _H(I, J, K, L) {
        K || function (M, N) {
            0 === N.length && N.needDrain && (N.needDrain = !1, M.emit('drain'));
        }(I, J), J.pendingcb--, L(), _U(I, J);
    }
    function _I(J, K) {
        K.bufferProcessing = !0;
        var L = K.bufferedRequest;
        if (J._writev && L && L.next) {
            var M = K.bufferedRequestCount, N = new Array(M), O = K.corkedRequestsFree;
            O.entry = L;
            for (var P = 0, Q = !0; L;)
                N[P] = L, L.isBuf || (Q = !1), L = L.next, P += 1;
            N.allBuffers = Q, G(J, K, !0, K.length, N, '', O.finish), K.pendingcb++, K.lastBufferedRequest = null, O.next ? (K.corkedRequestsFree = O.next, O.next = null) : K.corkedRequestsFree = new i(K), K.bufferedRequestCount = 0;
        } else {
            for (; L;) {
                var R = L.chunk, S = L.encoding, T = L.callback;
                if (G(J, K, !1, K.objectMode ? 1 : R.length, R, S, T), L = L.next, K.bufferedRequestCount--, K.writing)
                    break;
            }
            null === L && (K.lastBufferedRequest = null);
        }
        K.bufferedRequest = L, K.bufferProcessing = !1;
    }
    function _S(T) {
        return T.ending && 0 === T.length && null === T.bufferedRequest && !T.finished && !T.writing;
    }
    function T(U, V) {
        U._final(function (W) {
            V.pendingcb--, W && A(U, W), V.prefinished = !0, U.emit('prefinish'), _U(U, V);
        });
    }
    function _U(V, W) {
        var X = _S(W);
        if (X && (function (Y, Z) {
                Z.prefinished || Z.finalCalled || ('function' != typeof Y._final || Z.destroyed ? (Z.prefinished = !0, Y.emit('prefinish')) : (Z.pendingcb++, Z.finalCalled = !0, O.nextTick(T, Y, Z)));
            }(V, W), 0 === W.pendingcb && (W.finished = !0, V.emit('finish'), W.autoDestroy))) {
            var Y = V._readableState;
            (!Y || Y.autoDestroy && Y.endEmitted) && V.destroy();
        }
        return X;
    }
    Y('.....')(_E, Q), _C.prototype.getBuffer = function () {
        for (var X = this.bufferedRequest, Y = []; X;)
            Y.push(X), X = X.next;
        return Y;
    }, function () {
        try {
            Object.defineProperty(_C.prototype, 'buffer', {
                get: P.deprecate(function () {
                    return this.getBuffer();
                }, '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.', 'DEP0003')
            });
        } catch (e) {
        }
    }(), 'function' == typeof Symbol && Symbol.hasInstance && 'function' == typeof Function.prototype[Symbol.hasInstance] ? (T = Function.prototype[Symbol.hasInstance], Object.defineProperty(_E, Symbol.hasInstance, {
        value: function (X) {
            return !!T.call(this, X) || this === _E && (X && X._writableState instanceof _C);
        }
    })) : T = function (X) {
        return X instanceof this;
    }, _E.prototype.pipe = function () {
        A(this, new v());
    }, _E.prototype.write = function (X, Y, Z) {
        var $, ab = this._writableState, bb = !1, cb = !ab.objectMode && ($ = X, R.isBuffer($) || $ instanceof S);
        return cb && !R.isBuffer(X) && (X = function (db) {
            return R.from(db);
        }(X)), 'function' == typeof Y && (Z = Y, Y = null), cb ? Y = 'buffer' : Y || (Y = ab.defaultEncoding), 'function' != typeof Z && (Z = B), ab.ending ? function (db, eb) {
            var fb = new y();
            A(db, fb), O.nextTick(eb, fb);
        }(this, Z) : (cb || function (db, eb, fb, gb) {
            var hb;
            return null === fb ? hb = new x() : 'string' == typeof fb || eb.objectMode || (hb = new s('chunk', [
                'string',
                'Buffer'
            ], fb)), !hb || (A(db, hb), O.nextTick(gb, hb), !1);
        }(this, ab, X, Z)) && (ab.pendingcb++, bb = function (db, eb, fb, gb, hb, ib) {
            if (!fb) {
                var jb = function (kb, lb, mb) {
                    kb.objectMode || !1 === kb.decodeStrings || 'string' != typeof lb || (lb = R.from(lb, mb));
                    return lb;
                }(eb, gb, hb);
                gb !== jb && (fb = !0, hb = 'buffer', gb = jb);
            }
            var kb = eb.objectMode ? 1 : gb.length;
            eb.length += kb;
            var lb = eb.length < eb.highWaterMark;
            lb || (eb.needDrain = !0);
            if (eb.writing || eb.corked) {
                var mb = eb.lastBufferedRequest;
                eb.lastBufferedRequest = {
                    chunk: gb,
                    encoding: hb,
                    isBuf: fb,
                    callback: ib,
                    next: null
                }, mb ? mb.next = eb.lastBufferedRequest : eb.bufferedRequest = eb.lastBufferedRequest, eb.bufferedRequestCount += 1;
            } else
                G(db, eb, !1, kb, gb, hb, ib);
            return lb;
        }(this, ab, cb, X, Y, Z)), bb;
    }, _E.prototype.cork = function () {
        this._writableState.corked++;
    }, _E.prototype.uncork = function () {
        var X = this._writableState;
        X.corked && (X.corked--, X.writing || X.corked || X.bufferProcessing || !X.bufferedRequest || _I(this, X));
    }, _E.prototype.setDefaultEncoding = function (X) {
        if ('string' == typeof X && (X = X.toLowerCase()), !([
                'hex',
                'utf8',
                'utf-8',
                'ascii',
                'binary',
                'base64',
                'ucs2',
                'ucs-2',
                'utf16le',
                'utf-16le',
                'raw'
            ].indexOf((X + '').toLowerCase()) > -1))
            throw new z(X);
        return this._writableState.defaultEncoding = X, this;
    }, Object.defineProperty(_E.prototype, 'writableBuffer', {
        enumerable: !1,
        get: function () {
            return this._writableState && this._writableState.getBuffer();
        }
    }), Object.defineProperty(_E.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function () {
            return this._writableState.highWaterMark;
        }
    }), _E.prototype._write = function (X, Y, Z) {
        Z(new t('_write()'));
    }, _E.prototype._writev = null, _E.prototype.end = function (X, Y, Z) {
        var $ = this._writableState;
        return 'function' == typeof X ? (Z = X, X = null, Y = null) : 'function' == typeof Y && (Z = Y, Y = null), null != X && this.write(X, Y), $.corked && ($.corked = 1, this.uncork()), $.ending || function (ab, bb, cb) {
            bb.ending = !0, _U(ab, bb), cb && (bb.finished ? O.nextTick(cb) : ab.once('finish', cb));
            bb.ended = !0, ab.writable = !1;
        }(this, $, Z), this;
    }, Object.defineProperty(_E.prototype, 'writableLength', {
        enumerable: !1,
        get: function () {
            return this._writableState.length;
        }
    }), Object.defineProperty(_E.prototype, 'destroyed', {
        enumerable: !1,
        get: function () {
            return void 0 !== this._writableState && this._writableState.destroyed;
        },
        set: function (X) {
            this._writableState && (this._writableState.destroyed = X);
        }
    }), _E.prototype.destroy = p.destroy, _E.prototype._undestroy = p.undestroy, _E.prototype._destroy = function (X, Y) {
        Y(X);
    };
}), d.register('.....', function (e, f) {
    function g(h) {
        try {
            if (!c.localStorage)
                return !1;
        } catch (h) {
            return !1;
        }
        var i = c.localStorage[h];
        return null != i && 'true' === String(i).toLowerCase();
    }
    e.exports = function (i, j) {
        if (g('noDeprecation'))
            return i;
        var k = !1;
        return function () {
            if (!k) {
                if (g('throwDeprecation'))
                    throw new Error(j);
                g('traceDeprecation') ? console.trace(j) : console.warn(j), k = !0;
            }
            return i.apply(this, arguments);
        };
    };
}), d.register('.....', function (e, f) {
    var g;
    a(e.exports, 'StringDecoder', function () {
        return g;
    }, function (h) {
        return g = h;
    });
    var h = d('.....').Buffer, i = h.isEncoding || function (j) {
            switch ((j = '' + j) && j.toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
            case 'raw':
                return !0;
            default:
                return !1;
            }
        };
    function j(k) {
        var l;
        switch (this.encoding = function (m) {
                var n = function (o) {
                    if (!o)
                        return 'utf8';
                    for (var p;;)
                        switch (o) {
                        case 'utf8':
                        case 'utf-8':
                            return 'utf8';
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return 'utf16le';
                        case 'latin1':
                        case 'binary':
                            return 'latin1';
                        case 'base64':
                        case 'ascii':
                        case 'hex':
                            return o;
                        default:
                            if (p)
                                return;
                            o = ('' + o).toLowerCase(), p = !0;
                        }
                }(m);
                if ('string' != typeof n && (h.isEncoding === i || !i(m)))
                    throw new Error('Unknown encoding: ' + m);
                return n || m;
            }(k), this.encoding) {
        case 'utf16le':
            this.text = _p, this.end = _s, l = 4;
            break;
        case 'utf8':
            this.fillLast = _m, l = 4;
            break;
        case 'base64':
            this.text = _v, this.end = _x, l = 3;
            break;
        default:
            return this.write = _z, void (this.end = _A);
        }
        this.lastNeed = 0, this.lastTotal = 0, this.lastChar = h.allocUnsafe(l);
    }
    function l(m) {
        return m <= 127 ? 0 : m >> 5 == 6 ? 2 : m >> 4 == 14 ? 3 : m >> 3 == 30 ? 4 : m >> 6 == 2 ? -1 : -2;
    }
    function _m(n) {
        var o = this.lastTotal - this.lastNeed, p = function (q, r, s) {
                if (128 != (192 & r[0]))
                    return q.lastNeed = 0, '\uFFFD';
                if (q.lastNeed > 1 && r.length > 1) {
                    if (128 != (192 & r[1]))
                        return q.lastNeed = 1, '\uFFFD';
                    if (q.lastNeed > 2 && r.length > 2 && 128 != (192 & r[2]))
                        return q.lastNeed = 2, '\uFFFD';
                }
            }(this, n);
        return void 0 !== p ? p : this.lastNeed <= n.length ? (n.copy(this.lastChar, o, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (n.copy(this.lastChar, o, 0, n.length), void (this.lastNeed -= n.length));
    }
    function _p(q, r) {
        if ((q.length - r) % 2 == 0) {
            var s = q.toString('utf16le', r);
            if (s) {
                var t = s.charCodeAt(s.length - 1);
                if (t >= 55296 && t <= 56319)
                    return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = q[q.length - 2], this.lastChar[1] = q[q.length - 1], s.slice(0, -1);
            }
            return s;
        }
        return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = q[q.length - 1], q.toString('utf16le', r, q.length - 1);
    }
    function _s(t) {
        var u = t && t.length ? this.write(t) : '';
        if (this.lastNeed) {
            var v = this.lastTotal - this.lastNeed;
            return u + this.lastChar.toString('utf16le', 0, v);
        }
        return u;
    }
    function _v(w, x) {
        var y = (w.length - x) % 3;
        return 0 === y ? w.toString('base64', x) : (this.lastNeed = 3 - y, this.lastTotal = 3, 1 === y ? this.lastChar[0] = w[w.length - 1] : (this.lastChar[0] = w[w.length - 2], this.lastChar[1] = w[w.length - 1]), w.toString('base64', x, w.length - y));
    }
    function _x(y) {
        var z = y && y.length ? this.write(y) : '';
        return this.lastNeed ? z + this.lastChar.toString('base64', 0, 3 - this.lastNeed) : z;
    }
    function _z(A) {
        return A.toString(this.encoding);
    }
    function _A(B) {
        return B && B.length ? this.write(B) : '';
    }
    g = j, j.prototype.write = function (B) {
        if (0 === B.length)
            return '';
        var C, D;
        if (this.lastNeed) {
            if (void 0 === (C = this.fillLast(B)))
                return '';
            D = this.lastNeed, this.lastNeed = 0;
        } else
            D = 0;
        return D < B.length ? C ? C + this.text(B, D) : this.text(B, D) : C || '';
    }, j.prototype.end = function (B) {
        var C = B && B.length ? this.write(B) : '';
        return this.lastNeed ? C + '\uFFFD' : C;
    }, j.prototype.text = function (B, C) {
        var D = function (E, F, G) {
            var H = F.length - 1;
            if (H < G)
                return 0;
            var I = l(F[H]);
            if (I >= 0)
                return I > 0 && (E.lastNeed = I - 1), I;
            if (--H < G || -2 === I)
                return 0;
            if (I = l(F[H]), I >= 0)
                return I > 0 && (E.lastNeed = I - 2), I;
            if (--H < G || -2 === I)
                return 0;
            if (I = l(F[H]), I >= 0)
                return I > 0 && (2 === I ? I = 0 : E.lastNeed = I - 3), I;
            return 0;
        }(this, B, C);
        if (!this.lastNeed)
            return B.toString('utf8', C);
        this.lastTotal = D;
        var E = B.length - (D - this.lastNeed);
        return B.copy(this.lastChar, 0, E), B.toString('utf8', C, E);
    }, j.prototype.fillLast = function (B) {
        if (this.lastNeed <= B.length)
            return B.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        B.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, B.length), this.lastNeed -= B.length;
    };
}), d.register('.....', function (e, f) {
    var g, h = d('.....');
    function i(j, k, l) {
        return k in j ? Object.defineProperty(j, k, {
            value: l,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : j[k] = l, j;
    }
    var j = d('.....'), k = Symbol('lastResolve'), l = Symbol('lastReject'), m = Symbol('error'), n = Symbol('ended'), o = Symbol('lastPromise'), p = Symbol('handlePromise'), q = Symbol('stream');
    function r(s, t) {
        return {
            value: s,
            done: t
        };
    }
    function s(t) {
        var u = t[k];
        if (null !== u) {
            var v = t[q].read();
            null !== v && (t[o] = null, t[k] = null, t[l] = null, u(r(v, !1)));
        }
    }
    function v(w) {
        h.nextTick(s, w);
    }
    var w = Object.getPrototypeOf(function () {
        }), x = Object.setPrototypeOf((i(v = {
            get stream() {
                return this[q];
            },
            next: function () {
                var y = this, z = this[m];
                if (null !== z)
                    return Promise.reject(z);
                if (this[n])
                    return Promise.resolve(r(void 0, !0));
                if (this[q].destroyed)
                    return new Promise(function (A, B) {
                        h.nextTick(function () {
                            y[m] ? B(y[m]) : A(r(void 0, !0));
                        });
                    });
                var A, B = this[o];
                if (B)
                    A = new Promise(function (C, D) {
                        return function (E, F) {
                            C.then(function () {
                                D[n] ? E(r(void 0, !0)) : D[p](E, F);
                            }, F);
                        };
                    }(B, this));
                else {
                    var C = this[q].read();
                    if (null !== C)
                        return Promise.resolve(r(C, !1));
                    A = new Promise(this[p]);
                }
                return this[o] = A, A;
            }
        }, Symbol.asyncIterator, function () {
            return this;
        }), i(v, 'return', function () {
            var y = this;
            return new Promise(function (z, A) {
                y[q].destroy(null, function (B) {
                    B ? A(B) : z(r(void 0, !0));
                });
            });
        }), v), w);
    e.exports = function (y) {
        var z, A = Object.create(x, (i(z = {}, q, {
                value: y,
                writable: !0
            }), i(z, k, {
                value: null,
                writable: !0
            }), i(z, l, {
                value: null,
                writable: !0
            }), i(z, m, {
                value: null,
                writable: !0
            }), i(z, n, {
                value: y._readableState.endEmitted,
                writable: !0
            }), i(z, p, {
                value: function (B, C) {
                    var D = A[q].read();
                    D ? (A[o] = null, A[k] = null, A[l] = null, B(r(D, !1))) : (A[k] = B, A[l] = C);
                },
                writable: !0
            }), z));
        return A[o] = null, j(y, function (B) {
            if (B && 'ERR_STREAM_PREMATURE_CLOSE' !== B.code) {
                var C = A[l];
                return null !== C && (A[o] = null, A[k] = null, A[l] = null, C(B)), void (A[m] = B);
            }
            var D = A[k];
            null !== D && (A[o] = null, A[k] = null, A[l] = null, D(r(void 0, !0))), A[n] = !0;
        }), y.on('readable', v.bind(null, A)), A;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....').codes.ERR_STREAM_PREMATURE_CLOSE;
    function h() {
    }
    e.exports = function e(i, j, k) {
        if ('function' == typeof j)
            return e(i, null, j);
        j || (j = {}), k = function (l) {
            var m = !1;
            return function () {
                if (!m) {
                    m = !0;
                    for (var n = arguments.length, o = new Array(n), p = 0; p < n; p++)
                        o[p] = arguments[p];
                    l.apply(this, o);
                }
            };
        }(k || h);
        var l = j.readable || !1 !== j.readable && i.readable, m = j.writable || !1 !== j.writable && i.writable, n = function () {
                i.writable || _p();
            }, o = i._writableState && i._writableState.finished, _p = function () {
                m = !1, o = !0, l || k.call(i);
            }, q = i._readableState && i._readableState.endEmitted, r = function () {
                l = !1, q = !0, m || k.call(i);
            }, s = function (t) {
                k.call(i, t);
            }, t = function () {
                var u;
                return l && !q ? (i._readableState && i._readableState.ended || (u = new g()), k.call(i, u)) : m && !o ? (i._writableState && i._writableState.ended || (u = new g()), k.call(i, u)) : void 0;
            }, u = function () {
                i.req.on('finish', _p);
            };
        return !function (v) {
            return v.setHeader && 'function' == typeof v.abort;
        }(i) ? m && !i._writableState && (i.on('end', n), i.on('close', n)) : (i.on('complete', _p), i.on('abort', t), i.req ? u() : i.on('request', u)), i.on('end', r), i.on('finish', _p), !1 !== j.error && i.on('error', s), i.on('close', t), function () {
            i.removeListener('complete', _p), i.removeListener('abort', t), i.removeListener('request', u), i.req && i.req.removeListener('finish', _p), i.removeListener('end', n), i.removeListener('close', n), i.removeListener('finish', _p), i.removeListener('end', r), i.removeListener('error', s), i.removeListener('close', t);
        };
    };
}), d.register('.....', function (e, f) {
    e.exports = function () {
        throw new Error('Readable.from is not available in the browser');
    };
}), d.register('.....', function (e, f) {
    e.exports = _q;
    var g = d('.....').codes, h = g.ERR_METHOD_NOT_IMPLEMENTED, i = g.ERR_MULTIPLE_CALLBACK, j = g.ERR_TRANSFORM_ALREADY_TRANSFORMING, k = g.ERR_TRANSFORM_WITH_LENGTH_0, l = d('.....');
    function m(n, o) {
        var p = this._transformState;
        p.transforming = !1;
        var q = p.writecb;
        if (null === q)
            return this.emit('error', new i());
        p.writechunk = null, p.writecb = null, null != o && this.push(o), q(n);
        var r = this._readableState;
        r.reading = !1, (r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark);
    }
    function _q(r) {
        if (!(this instanceof _q))
            return new _q(r);
        l.call(this, r), this._transformState = {
            afterTransform: m.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        }, this._readableState.needReadable = !0, this._readableState.sync = !1, r && ('function' == typeof r.transform && (this._transform = r.transform), 'function' == typeof r.flush && (this._flush = r.flush)), this.on('prefinish', _r);
    }
    function _r() {
        var s = this;
        'function' != typeof this._flush || this._readableState.destroyed ? _t(this, null, null) : this._flush(function (t, u) {
            _t(s, t, u);
        });
    }
    function _t(u, v, w) {
        if (v)
            return u.emit('error', v);
        if (null != w && u.push(w), u._writableState.length)
            throw new k();
        if (u._transformState.transforming)
            throw new j();
        return u.push(null);
    }
    q('.....')(_q, l), _q.prototype.push = function (u, v) {
        return this._transformState.needTransform = !1, l.prototype.push.call(this, u, v);
    }, _q.prototype._transform = function (u, v, w) {
        w(new r('_transform()'));
    }, _q.prototype._write = function (u, v, w) {
        var x = this._transformState;
        if (x.writecb = w, x.writechunk = u, x.writeencoding = v, !x.transforming) {
            var y = this._readableState;
            (x.needTransform || y.needReadable || y.length < y.highWaterMark) && this._read(y.highWaterMark);
        }
    }, _q.prototype._read = function (u) {
        var v = this._transformState;
        null === v.writechunk || v.transforming ? v.needTransform = !0 : (v.transforming = !0, this._transform(v.writechunk, v.writeencoding, v.afterTransform));
    }, _q.prototype._destroy = function (u, v) {
        l.prototype._destroy.call(this, u, function (w) {
            v(w);
        });
    };
}), d.register('.....', function (e, f) {
    e.exports = _h;
    var g = d('.....');
    function _h(i) {
        if (!(this instanceof _h))
            return new _h(i);
        g.call(this, i);
    }
    d('.....')(_h, g), _h.prototype._transform = function (i, j, k) {
        k(null, i);
    };
}), d.register('.....', function (e, f) {
    var g;
    var h = d('.....').codes, i = h.ERR_MISSING_ARGS, j = h.ERR_STREAM_DESTROYED;
    function k(l) {
        if (l)
            throw l;
    }
    function l(m, n, o, p) {
        p = function (q) {
            var r = !1;
            return function () {
                r || (r = !0, q.apply(void 0, arguments));
            };
        }(p);
        var q = !1;
        m.on('close', function () {
            k = !0;
        }), void 0 === g && (g = d('.....')), g(m, {
            readable: n,
            writable: o
        }, function (r) {
            if (r)
                return p(r);
            k = !0, p();
        });
        var r = !1;
        return function (s) {
            if (!k && !l)
                return l = !0, function (t) {
                    return t.setHeader && 'function' == typeof t.abort;
                }(m) ? m.abort() : 'function' == typeof m.destroy ? m.destroy() : void p(s || new j('pipe'));
        };
    }
    function o(p) {
        p();
    }
    function p(q, r) {
        return q.pipe(r);
    }
    function q(r) {
        return r.length ? 'function' != typeof r[r.length - 1] ? k : r.pop() : k;
    }
    e.exports = function () {
        for (var r = arguments.length, s = new Array(r), t = 0; t < r; t++)
            s[t] = arguments[t];
        var u, v = q(s);
        if (Array.isArray(s[0]) && (s = s[0]), s.length < 2)
            throw new i('streams');
        var w = s.map(function (x, y) {
            var z = y < s.length - 1;
            return l(x, z, y > 0, function (A) {
                u || (u = A), A && w.forEach(o), z || (w.forEach(o), v(u));
            });
        });
        return s.reduce(p);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer, h = d('.....'), i = d('.....'), j = new Array(16), k = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            7,
            4,
            13,
            1,
            10,
            6,
            15,
            3,
            12,
            0,
            9,
            5,
            2,
            14,
            11,
            8,
            3,
            10,
            14,
            4,
            9,
            15,
            8,
            1,
            2,
            7,
            0,
            6,
            13,
            11,
            5,
            12,
            1,
            9,
            11,
            10,
            0,
            8,
            12,
            4,
            13,
            3,
            7,
            15,
            14,
            5,
            6,
            2,
            4,
            0,
            5,
            9,
            7,
            12,
            2,
            10,
            14,
            1,
            3,
            8,
            11,
            6,
            15,
            13
        ], l = [
            5,
            14,
            7,
            0,
            9,
            2,
            11,
            4,
            13,
            6,
            15,
            8,
            1,
            10,
            3,
            12,
            6,
            11,
            3,
            7,
            0,
            13,
            5,
            10,
            14,
            15,
            8,
            12,
            4,
            9,
            1,
            2,
            15,
            5,
            1,
            3,
            7,
            14,
            6,
            9,
            11,
            8,
            12,
            2,
            10,
            0,
            4,
            13,
            8,
            6,
            4,
            1,
            3,
            11,
            15,
            0,
            5,
            12,
            2,
            13,
            9,
            7,
            10,
            14,
            12,
            15,
            10,
            4,
            1,
            5,
            8,
            7,
            6,
            2,
            13,
            14,
            0,
            3,
            9,
            11
        ], m = [
            11,
            14,
            15,
            12,
            5,
            8,
            7,
            9,
            11,
            13,
            14,
            15,
            6,
            7,
            9,
            8,
            7,
            6,
            8,
            13,
            11,
            9,
            7,
            15,
            7,
            12,
            15,
            9,
            11,
            7,
            13,
            12,
            11,
            13,
            6,
            7,
            14,
            9,
            13,
            15,
            14,
            8,
            13,
            6,
            5,
            12,
            7,
            5,
            11,
            12,
            14,
            15,
            14,
            15,
            9,
            8,
            9,
            14,
            5,
            6,
            8,
            6,
            5,
            12,
            9,
            15,
            5,
            11,
            6,
            8,
            13,
            12,
            5,
            12,
            13,
            14,
            11,
            8,
            5,
            6
        ], n = [
            8,
            9,
            9,
            11,
            13,
            15,
            15,
            5,
            7,
            7,
            8,
            11,
            14,
            14,
            12,
            6,
            9,
            13,
            15,
            7,
            12,
            8,
            9,
            11,
            7,
            7,
            12,
            7,
            6,
            15,
            13,
            11,
            9,
            7,
            15,
            11,
            8,
            6,
            6,
            14,
            12,
            13,
            5,
            14,
            13,
            13,
            7,
            5,
            15,
            5,
            8,
            11,
            14,
            14,
            6,
            14,
            6,
            9,
            12,
            9,
            12,
            5,
            15,
            8,
            8,
            5,
            12,
            9,
            12,
            5,
            14,
            6,
            8,
            13,
            6,
            5,
            15,
            13,
            11,
            11
        ], o = [
            0,
            1518500249,
            1859775393,
            2400959708,
            2840853838
        ], p = [
            1352829926,
            1548603684,
            1836072691,
            2053994217,
            0
        ];
    function q() {
        i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520;
    }
    function r(s, t) {
        return s << t | s >>> 32 - t;
    }
    function s(t, u, v, w, x, y, z, A) {
        return r(t + (u ^ v ^ w) + y + z | 0, A) + x | 0;
    }
    function t(u, v, w, x, y, z, A, B) {
        return r(u + (v & w | ~v & x) + z + A | 0, B) + y | 0;
    }
    function u(v, w, x, y, z, A, B, C) {
        return r(v + ((w | ~x) ^ y) + A + B | 0, C) + z | 0;
    }
    function v(w, x, y, z, A, B, C, D) {
        return r(w + (x & z | y & ~z) + B + C | 0, D) + A | 0;
    }
    function w(x, y, z, A, B, C, D, E) {
        return r(x + (y ^ (z | ~A)) + C + D | 0, E) + B | 0;
    }
    h(q, i), q.prototype._update = function () {
        for (var x = j, y = 0; y < 16; ++y)
            x[y] = this._block.readInt32LE(4 * y);
        for (var z = 0 | this._a, A = 0 | this._b, B = 0 | this._c, C = 0 | this._d, D = 0 | this._e, E = 0 | this._a, F = 0 | this._b, G = 0 | this._c, H = 0 | this._d, I = 0 | this._e, J = 0; J < 80; J += 1) {
            var K, L;
            J < 16 ? (K = s(z, A, B, C, D, x[k[J]], o[0], m[J]), L = w(E, F, G, H, I, x[l[J]], p[0], n[J])) : J < 32 ? (K = t(z, A, B, C, D, x[k[J]], o[1], m[J]), L = v(E, F, G, H, I, x[l[J]], p[1], n[J])) : J < 48 ? (K = u(z, A, B, C, D, x[k[J]], o[2], m[J]), L = u(E, F, G, H, I, x[l[J]], p[2], n[J])) : J < 64 ? (K = v(z, A, B, C, D, x[k[J]], o[3], m[J]), L = t(E, F, G, H, I, x[l[J]], p[3], n[J])) : (K = w(z, A, B, C, D, x[k[J]], o[4], m[J]), L = s(E, F, G, H, I, x[l[J]], p[4], n[J])), z = D, D = C, C = r(B, 10), B = A, A = K, E = I, I = H, H = r(G, 10), G = F, F = L;
        }
        var M = this._b + B + H | 0;
        this._b = this._c + C + I | 0, this._c = this._d + D + E | 0, this._d = this._e + z + F | 0, this._e = this._a + A + G | 0, this._a = M;
    }, q.prototype._digest = function () {
        this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var x = g.alloc ? g.alloc(20) : new g(20);
        return x.writeInt32LE(this._a, 0), x.writeInt32LE(this._b, 4), x.writeInt32LE(this._c, 8), x.writeInt32LE(this._d, 12), x.writeInt32LE(this._e, 16), x;
    }, e.exports = q;
}), d.register('.....', function (e, f) {
    var g = e.exports = function (h) {
        h = h.toLowerCase();
        var i = g[h];
        if (!i)
            throw new Error(h + ' is not supported (we accept pull requests)');
        return new i();
    };
    g.sha = d('.....'), g.sha1 = d('.....'), g.sha224 = d('.....'), g.sha256 = d('.....'), g.sha384 = d('.....'), g.sha512 = d('.....');
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....').Buffer, j = [
            1518500249,
            1859775393,
            -1894007588,
            -899497514
        ], k = new Array(80);
    function l() {
        this.init(), this._w = k, h.call(this, 64, 56);
    }
    function m(n) {
        return n << 30 | n >>> 2;
    }
    function n(o, p, q, r) {
        return 0 === o ? p & q | ~p & r : 2 === o ? p & q | p & r | q & r : p ^ q ^ r;
    }
    g(l, h), l.prototype.init = function () {
        return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
    }, l.prototype._update = function (o) {
        for (var p, q = this._w, r = 0 | this._a, s = 0 | this._b, t = 0 | this._c, u = 0 | this._d, v = 0 | this._e, w = 0; w < 16; ++w)
            q[w] = o.readInt32BE(4 * w);
        for (; w < 80; ++w)
            q[w] = q[w - 3] ^ q[w - 8] ^ q[w - 14] ^ q[w - 16];
        for (var x = 0; x < 80; ++x) {
            var y = ~~(x / 20), z = 0 | ((p = r) << 5 | p >>> 27) + n(y, s, t, u) + v + q[x] + j[y];
            v = u, u = t, t = m(s), s = r, r = z;
        }
        this._a = r + this._a | 0, this._b = s + this._b | 0, this._c = t + this._c | 0, this._d = u + this._d | 0, this._e = v + this._e | 0;
    }, l.prototype._hash = function () {
        var o = i.allocUnsafe(20);
        return o.writeInt32BE(0 | this._a, 0), o.writeInt32BE(0 | this._b, 4), o.writeInt32BE(0 | this._c, 8), o.writeInt32BE(0 | this._d, 12), o.writeInt32BE(0 | this._e, 16), o;
    }, e.exports = l;
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer;
    function h(i, j) {
        this._block = g.alloc(i), this._finalSize = j, this._blockSize = i, this._len = 0;
    }
    h.prototype.update = function (i, j) {
        'string' == typeof i && (j = j || 'utf8', i = g.from(i, j));
        for (var k = this._block, l = this._blockSize, m = i.length, n = this._len, o = 0; o < m;) {
            for (var p = n % l, q = Math.min(m - o, l - p), r = 0; r < q; r++)
                k[p + r] = i[o + r];
            o += q, (n += q) % l == 0 && this._update(k);
        }
        return this._len += m, this;
    }, h.prototype.digest = function (i) {
        var j = this._len % this._blockSize;
        this._block[j] = 128, this._block.fill(0, j + 1), j >= this._finalSize && (this._update(this._block), this._block.fill(0));
        var k = 8 * this._len;
        if (k <= 4294967295)
            this._block.writeUInt32BE(k, this._blockSize - 4);
        else {
            var l = (4294967295 & k) >>> 0, m = (k - l) / 4294967296;
            this._block.writeUInt32BE(m, this._blockSize - 8), this._block.writeUInt32BE(l, this._blockSize - 4);
        }
        this._update(this._block);
        var n = this._hash();
        return i ? n.toString(i) : n;
    }, h.prototype._update = function () {
        throw new Error('_update must be implemented by subclass');
    }, e.exports = h;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....').Buffer, j = [
            1518500249,
            1859775393,
            -1894007588,
            -899497514
        ], k = new Array(80);
    function l() {
        this.init(), this._w = k, h.call(this, 64, 56);
    }
    function m(n) {
        return n << 5 | n >>> 27;
    }
    function n(o) {
        return o << 30 | o >>> 2;
    }
    function o(p, q, r, s) {
        return 0 === p ? q & r | ~q & s : 2 === p ? q & r | q & s | r & s : q ^ r ^ s;
    }
    g(l, h), l.prototype.init = function () {
        return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
    }, l.prototype._update = function (p) {
        for (var q, r = this._w, s = 0 | this._a, t = 0 | this._b, u = 0 | this._c, v = 0 | this._d, w = 0 | this._e, x = 0; x < 16; ++x)
            r[x] = p.readInt32BE(4 * x);
        for (; x < 80; ++x)
            r[x] = (q = r[x - 3] ^ r[x - 8] ^ r[x - 14] ^ r[x - 16]) << 1 | q >>> 31;
        for (var y = 0; y < 80; ++y) {
            var z = ~~(y / 20), A = m(s) + o(z, t, u, v) + w + r[y] + j[z] | 0;
            w = v, v = u, u = n(t), t = s, s = A;
        }
        this._a = s + this._a | 0, this._b = t + this._b | 0, this._c = u + this._c | 0, this._d = v + this._d | 0, this._e = w + this._e | 0;
    }, l.prototype._hash = function () {
        var p = i.allocUnsafe(20);
        return p.writeInt32BE(0 | this._a, 0), p.writeInt32BE(0 | this._b, 4), p.writeInt32BE(0 | this._c, 8), p.writeInt32BE(0 | this._d, 12), p.writeInt32BE(0 | this._e, 16), p;
    }, e.exports = l;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....').Buffer, k = new Array(64);
    function l() {
        this.init(), this._w = k, i.call(this, 64, 56);
    }
    g(l, h), l.prototype.init = function () {
        return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
    }, l.prototype._hash = function () {
        var m = j.allocUnsafe(28);
        return m.writeInt32BE(this._a, 0), m.writeInt32BE(this._b, 4), m.writeInt32BE(this._c, 8), m.writeInt32BE(this._d, 12), m.writeInt32BE(this._e, 16), m.writeInt32BE(this._f, 20), m.writeInt32BE(this._g, 24), m;
    }, e.exports = l;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....').Buffer, j = [
            1116352408,
            1899447441,
            3049323471,
            3921009573,
            961987163,
            1508970993,
            2453635748,
            2870763221,
            3624381080,
            310598401,
            607225278,
            1426881987,
            1925078388,
            2162078206,
            2614888103,
            3248222580,
            3835390401,
            4022224774,
            264347078,
            604807628,
            770255983,
            1249150122,
            1555081692,
            1996064986,
            2554220882,
            2821834349,
            2952996808,
            3210313671,
            3336571891,
            3584528711,
            113926993,
            338241895,
            666307205,
            773529912,
            1294757372,
            1396182291,
            1695183700,
            1986661051,
            2177026350,
            2456956037,
            2730485921,
            2820302411,
            3259730800,
            3345764771,
            3516065817,
            3600352804,
            4094571909,
            275423344,
            430227734,
            506948616,
            659060556,
            883997877,
            958139571,
            1322822218,
            1537002063,
            1747873779,
            1955562222,
            2024104815,
            2227730452,
            2361852424,
            2428436474,
            2756734187,
            3204031479,
            3329325298
        ], k = new Array(64);
    function l() {
        this.init(), this._w = k, h.call(this, 64, 56);
    }
    function m(n, o, p) {
        return p ^ n & (o ^ p);
    }
    function n(o, p, q) {
        return o & p | q & (o | p);
    }
    function o(p) {
        return (p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10);
    }
    function p(q) {
        return (q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7);
    }
    function q(r) {
        return (r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3;
    }
    g(l, h), l.prototype.init = function () {
        return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
    }, l.prototype._update = function (r) {
        for (var s, t = this._w, u = 0 | this._a, v = 0 | this._b, w = 0 | this._c, x = 0 | this._d, y = 0 | this._e, z = 0 | this._f, A = 0 | this._g, B = 0 | this._h, C = 0; C < 16; ++C)
            t[C] = r.readInt32BE(4 * C);
        for (; C < 64; ++C)
            t[C] = 0 | (((s = t[C - 2]) >>> 17 | s << 15) ^ (s >>> 19 | s << 13) ^ s >>> 10) + t[C - 7] + q(t[C - 15]) + t[C - 16];
        for (var D = 0; D < 64; ++D) {
            var E = B + p(y) + m(y, z, A) + j[D] + t[D] | 0, F = o(u) + n(u, v, w) | 0;
            B = A, A = z, z = y, y = x + E | 0, x = w, w = v, v = u, u = E + F | 0;
        }
        this._a = u + this._a | 0, this._b = v + this._b | 0, this._c = w + this._c | 0, this._d = x + this._d | 0, this._e = y + this._e | 0, this._f = z + this._f | 0, this._g = A + this._g | 0, this._h = B + this._h | 0;
    }, l.prototype._hash = function () {
        var r = i.allocUnsafe(32);
        return r.writeInt32BE(this._a, 0), r.writeInt32BE(this._b, 4), r.writeInt32BE(this._c, 8), r.writeInt32BE(this._d, 12), r.writeInt32BE(this._e, 16), r.writeInt32BE(this._f, 20), r.writeInt32BE(this._g, 24), r.writeInt32BE(this._h, 28), r;
    }, e.exports = l;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....').Buffer, k = new Array(160);
    function l() {
        this.init(), this._w = k, i.call(this, 128, 112);
    }
    g(l, h), l.prototype.init = function () {
        return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
    }, l.prototype._hash = function () {
        var m = j.allocUnsafe(48);
        function n(o, p, q) {
            m.writeInt32BE(o, q), m.writeInt32BE(p, q + 4);
        }
        return n(this._ah, this._al, 0), n(this._bh, this._bl, 8), n(this._ch, this._cl, 16), n(this._dh, this._dl, 24), n(this._eh, this._el, 32), n(this._fh, this._fl, 40), m;
    }, e.exports = l;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....').Buffer, j = [
            1116352408,
            3609767458,
            1899447441,
            602891725,
            3049323471,
            3964484399,
            3921009573,
            2173295548,
            961987163,
            4081628472,
            1508970993,
            3053834265,
            2453635748,
            2937671579,
            2870763221,
            3664609560,
            3624381080,
            2734883394,
            310598401,
            1164996542,
            607225278,
            1323610764,
            1426881987,
            3590304994,
            1925078388,
            4068182383,
            2162078206,
            991336113,
            2614888103,
            633803317,
            3248222580,
            3479774868,
            3835390401,
            2666613458,
            4022224774,
            944711139,
            264347078,
            2341262773,
            604807628,
            2007800933,
            770255983,
            1495990901,
            1249150122,
            1856431235,
            1555081692,
            3175218132,
            1996064986,
            2198950837,
            2554220882,
            3999719339,
            2821834349,
            766784016,
            2952996808,
            2566594879,
            3210313671,
            3203337956,
            3336571891,
            1034457026,
            3584528711,
            2466948901,
            113926993,
            3758326383,
            338241895,
            168717936,
            666307205,
            1188179964,
            773529912,
            1546045734,
            1294757372,
            1522805485,
            1396182291,
            2643833823,
            1695183700,
            2343527390,
            1986661051,
            1014477480,
            2177026350,
            1206759142,
            2456956037,
            344077627,
            2730485921,
            1290863460,
            2820302411,
            3158454273,
            3259730800,
            3505952657,
            3345764771,
            106217008,
            3516065817,
            3606008344,
            3600352804,
            1432725776,
            4094571909,
            1467031594,
            275423344,
            851169720,
            430227734,
            3100823752,
            506948616,
            1363258195,
            659060556,
            3750685593,
            883997877,
            3785050280,
            958139571,
            3318307427,
            1322822218,
            3812723403,
            1537002063,
            2003034995,
            1747873779,
            3602036899,
            1955562222,
            1575990012,
            2024104815,
            1125592928,
            2227730452,
            2716904306,
            2361852424,
            442776044,
            2428436474,
            593698344,
            2756734187,
            3733110249,
            3204031479,
            2999351573,
            3329325298,
            3815920427,
            3391569614,
            3928383900,
            3515267271,
            566280711,
            3940187606,
            3454069534,
            4118630271,
            4000239992,
            116418474,
            1914138554,
            174292421,
            2731055270,
            289380356,
            3203993006,
            460393269,
            320620315,
            685471733,
            587496836,
            852142971,
            1086792851,
            1017036298,
            365543100,
            1126000580,
            2618297676,
            1288033470,
            3409855158,
            1501505948,
            4234509866,
            1607167915,
            987167468,
            1816402316,
            1246189591
        ], k = new Array(160);
    function l() {
        this.init(), this._w = k, h.call(this, 128, 112);
    }
    function m(n, o, p) {
        return p ^ n & (o ^ p);
    }
    function n(o, p, q) {
        return o & p | q & (o | p);
    }
    function o(p, q) {
        return (p >>> 28 | q << 4) ^ (q >>> 2 | p << 30) ^ (q >>> 7 | p << 25);
    }
    function p(q, r) {
        return (q >>> 14 | r << 18) ^ (q >>> 18 | r << 14) ^ (r >>> 9 | q << 23);
    }
    function q(r, s) {
        return (r >>> 1 | s << 31) ^ (r >>> 8 | s << 24) ^ r >>> 7;
    }
    function r(s, t) {
        return (s >>> 1 | t << 31) ^ (s >>> 8 | t << 24) ^ (s >>> 7 | t << 25);
    }
    function s(t, u) {
        return (t >>> 19 | u << 13) ^ (u >>> 29 | t << 3) ^ t >>> 6;
    }
    function t(u, v) {
        return (u >>> 19 | v << 13) ^ (v >>> 29 | u << 3) ^ (u >>> 6 | v << 26);
    }
    function u(v, w) {
        return v >>> 0 < w >>> 0 ? 1 : 0;
    }
    g(l, h), l.prototype.init = function () {
        return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
    }, l.prototype._update = function (v) {
        for (var w = this._w, x = 0 | this._ah, y = 0 | this._bh, z = 0 | this._ch, A = 0 | this._dh, B = 0 | this._eh, C = 0 | this._fh, D = 0 | this._gh, E = 0 | this._hh, F = 0 | this._al, G = 0 | this._bl, H = 0 | this._cl, I = 0 | this._dl, J = 0 | this._el, K = 0 | this._fl, L = 0 | this._gl, M = 0 | this._hl, N = 0; N < 32; N += 2)
            w[N] = v.readInt32BE(4 * N), w[N + 1] = v.readInt32BE(4 * N + 4);
        for (; N < 160; N += 2) {
            var O = w[N - 30], P = w[N - 30 + 1], Q = q(O, P), R = r(P, O), S = s(O = w[N - 4], P = w[N - 4 + 1]), T = t(P, O), U = w[N - 14], V = w[N - 14 + 1], W = w[N - 32], X = w[N - 32 + 1], Y = R + V | 0, Z = Q + U + u(Y, R) | 0;
            Z = (Z = Z + S + u(Y = Y + T | 0, T) | 0) + W + u(Y = Y + X | 0, X) | 0, w[N] = Z, w[N + 1] = Y;
        }
        for (var $ = 0; $ < 160; $ += 2) {
            Z = w[$], Y = w[$ + 1];
            var ab = n(x, y, z), bb = n(F, G, H), cb = o(x, F), db = o(F, x), eb = p(B, J), fb = p(J, B), gb = j[$], hb = j[$ + 1], ib = m(B, C, D), jb = m(J, K, L), kb = M + fb | 0, lb = E + eb + u(kb, M) | 0;
            lb = (lb = (lb = lb + ib + u(kb = kb + jb | 0, jb) | 0) + gb + u(kb = kb + hb | 0, hb) | 0) + Z + u(kb = kb + Y | 0, Y) | 0;
            var mb = db + bb | 0, nb = cb + ab + u(mb, db) | 0;
            E = D, M = L, D = C, L = K, C = B, K = J, B = A + lb + u(J = I + kb | 0, I) | 0, A = z, I = H, z = y, H = G, y = x, G = F, x = lb + nb + u(F = kb + mb | 0, kb) | 0;
        }
        this._al = this._al + F | 0, this._bl = this._bl + G | 0, this._cl = this._cl + H | 0, this._dl = this._dl + I | 0, this._el = this._el + J | 0, this._fl = this._fl + K | 0, this._gl = this._gl + L | 0, this._hl = this._hl + M | 0, this._ah = this._ah + x + u(this._al, F) | 0, this._bh = this._bh + y + u(this._bl, G) | 0, this._ch = this._ch + z + u(this._cl, H) | 0, this._dh = this._dh + A + u(this._dl, I) | 0, this._eh = this._eh + B + u(this._el, J) | 0, this._fh = this._fh + C + u(this._fl, K) | 0, this._gh = this._gh + D + u(this._gl, L) | 0, this._hh = this._hh + E + u(this._hl, M) | 0;
    }, l.prototype._hash = function () {
        var v = i.allocUnsafe(64);
        function w(x, y, z) {
            v.writeInt32BE(x, z), v.writeInt32BE(y, z + 4);
        }
        return w(this._ah, this._al, 0), w(this._bh, this._bl, 8), w(this._ch, this._cl, 16), w(this._dh, this._dl, 24), w(this._eh, this._el, 32), w(this._fh, this._fl, 40), w(this._gh, this._gl, 48), w(this._hh, this._hl, 56), v;
    }, e.exports = l;
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer, h = d('.....').Transform, i = d('.....').StringDecoder;
    function j(k) {
        h.call(this), this.hashMode = 'string' == typeof k, this.hashMode ? this[k] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null;
    }
    d('.....')(j, h), j.prototype.update = function (k, l, m) {
        'string' == typeof k && (k = g.from(k, l));
        var n = this._update(k);
        return this.hashMode ? this : (m && (n = this._toString(n, m)), n);
    }, j.prototype.setAutoPadding = function () {
    }, j.prototype.getAuthTag = function () {
        throw new Error('trying to get auth tag in unsupported state');
    }, j.prototype.setAuthTag = function () {
        throw new Error('trying to set auth tag in unsupported state');
    }, j.prototype.setAAD = function () {
        throw new Error('trying to set aad in unsupported state');
    }, j.prototype._transform = function (k, l, m) {
        var n;
        try {
            this.hashMode ? this._update(k) : this.push(this._update(k));
        } catch (k) {
            n = k;
        } finally {
            m(n);
        }
    }, j.prototype._flush = function (k) {
        var l;
        try {
            this.push(this.__final());
        } catch (k) {
            l = k;
        }
        k(l);
    }, j.prototype._finalOrDigest = function (k) {
        var l = this.__final() || g.alloc(0);
        return k && (l = this._toString(l, k, !0)), l;
    }, j.prototype._toString = function (k, l, m) {
        if (this._decoder || (this._decoder = new i(l), this._encoding = l), this._encoding !== l)
            throw new Error('can\'t switch encodings');
        var n = this._decoder.write(k);
        return m && (n += this._decoder.end()), n;
    }, e.exports = j;
}), d.register('.....', function (e, f) {
    e.exports = _h;
    var g = d('.....').EventEmitter;
    function _h() {
        g.call(this);
    }
    d('.....')(_h, g), _h.Readable = d('.....'), _h.Writable = d('.....'), _h.Duplex = d('.....'), _h.Transform = d('.....'), _h.PassThrough = d('.....'), _h.finished = d('.....'), _h.pipeline = d('.....'), _h.Stream = _h, _h.prototype.pipe = function (i, j) {
        var k = this;
        function l(m) {
            i.writable && !1 === i.write(m) && k.pause && k.pause();
        }
        function m() {
            k.readable && k.resume && k.resume();
        }
        k.on('data', l), i.on('drain', m), i._isStdio || j && !1 === j.end || (k.on('end', _o), k.on('close', _p));
        var n = !1;
        function _o() {
            n || (n = !0, i.end());
        }
        function _p() {
            n || (n = !0, 'function' == typeof i.destroy && i.destroy());
        }
        function q(r) {
            if (_r(), 0 === g.listenerCount(this, 'error'))
                throw r;
        }
        function _r() {
            k.removeListener('data', l), i.removeListener('drain', m), k.removeListener('end', _o), k.removeListener('close', _p), k.removeListener('error', q), i.removeListener('error', q), k.removeListener('end', _r), k.removeListener('close', _r), i.removeListener('close', _r);
        }
        return k.on('error', q), i.on('error', q), k.on('end', _r), k.on('close', _r), i.on('close', _r), i.emit('pipe', k), i;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....').Buffer, k = d('.....'), l = d('.....'), m = d('.....'), n = j.alloc(128);
    function o(p, q) {
        i.call(this, 'digest'), 'string' == typeof q && (q = j.from(q));
        var r = 'sha512' === p || 'sha384' === p ? 128 : 64;
        (this._alg = p, this._key = q, q.length > r) ? q = ('rmd160' === p ? new l() : m(p)).update(q).digest() : q.length < r && (q = j.concat([
            q,
            n
        ], r));
        for (var s = this._ipad = j.allocUnsafe(r), t = this._opad = j.allocUnsafe(r), u = 0; u < r; u++)
            s[u] = 54 ^ q[u], t[u] = 92 ^ q[u];
        this._hash = 'rmd160' === p ? new l() : m(p), this._hash.update(s);
    }
    r(o, i), o.prototype._update = function (t) {
        this._hash.update(t);
    }, o.prototype._final = function () {
        var t = this._hash.digest();
        return ('rmd160' === this._alg ? new l() : m(this._alg)).update(this._opad).update(t).digest();
    }, e.exports = function (t, u) {
        return 'rmd160' === (t = t.toLowerCase()) || 'ripemd160' === t ? new o('rmd160', u) : 'md5' === t ? new t(u, u) : new o(t, u);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....').Buffer, i = d('.....'), j = h.alloc(128), k = 64;
    function l(m, n) {
        i.call(this, 'digest'), 'string' == typeof n && (n = h.from(n)), this._alg = m, this._key = n, n.length > k ? n = m(n) : n.length < k && (n = h.concat([
            n,
            j
        ], k));
        for (var o = this._ipad = h.allocUnsafe(k), p = this._opad = h.allocUnsafe(k), q = 0; l < k; l++)
            o[l] = 54 ^ n[l], p[l] = 92 ^ n[l];
        this._hash = [o];
    }
    o(l, i), l.prototype._update = function (p) {
        this._hash.push(p);
    }, l.prototype._final = function () {
        var p = this._alg(h.concat(this._hash));
        return this._alg(h.concat([
            this._opad,
            p
        ]));
    }, e.exports = l;
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = function (h) {
        return new g().update(h).digest();
    };
}), d.register('.....', function (e, f) {
    e.exports = d('.....');
}), d.register('.....', function (e, f) {
    e.exports = JSON.parse('{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}');
}), d.register('.....', function (e, f) {
    var g, h;
    a(e.exports, 'pbkdf2', function () {
        return g;
    }, function (i) {
        return g = i;
    }), a(e.exports, 'pbkdf2Sync', function () {
        return h;
    }, function (i) {
        return h = i;
    }), g = d('.....'), h = d('.....');
}), d.register('.....', function (e, f) {
    var g, h = d('.....'), i = d('.....').Buffer, j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = c.crypto && c.crypto.subtle, o = {
            sha: 'SHA-1',
            'sha-1': 'SHA-1',
            sha1: 'SHA-1',
            sha256: 'SHA-256',
            'sha-256': 'SHA-256',
            sha384: 'SHA-384',
            'sha-384': 'SHA-384',
            'sha-512': 'SHA-512',
            sha512: 'SHA-512'
        }, p = [];
    function q(r, s, t, u, v) {
        return n.importKey('raw', r, { name: 'PBKDF2' }, !1, ['deriveBits']).then(function (w) {
            return n.deriveBits({
                name: 'PBKDF2',
                salt: s,
                iterations: t,
                hash: { name: v }
            }, w, u << 3);
        }).then(function (w) {
            return i.from(w);
        });
    }
    e.exports = function (r, s, t, u, v, w) {
        'function' == typeof v && (w = v, v = void 0);
        var x = o[(v = v || 'sha1').toLowerCase()];
        if (!x || 'function' != typeof c.Promise)
            return h.nextTick(function () {
                var y;
                try {
                    y = l(r, s, t, u, v);
                } catch (r) {
                    return w(r);
                }
                w(null, y);
            });
        if (j(t, u), r = m(r, k, 'Password'), s = m(s, k, 'Salt'), 'function' != typeof w)
            throw new Error('No callback provided to pbkdf2');
        !function (y, z) {
            y.then(function (A) {
                h.nextTick(function () {
                    z(null, A);
                });
            }, function (A) {
                h.nextTick(function () {
                    z(A);
                });
            });
        }(function (y) {
            if (c.process && !c.process.browser)
                return Promise.resolve(!1);
            if (!n || !n.importKey || !n.deriveBits)
                return Promise.resolve(!1);
            if (void 0 !== p[y])
                return p[y];
            var z = q(g = g || i.alloc(8), g, 10, 128, y).then(function () {
                return !0;
            }).catch(function () {
                return !1;
            });
            return p[y] = z, z;
        }(x).then(function (y) {
            return y ? q(r, s, t, u, x) : l(r, s, t, u, v);
        }), w);
    };
}), d.register('.....', function (e, f) {
    var g = Math.pow(2, 30) - 1;
    e.exports = function (h, i) {
        if ('number' != typeof h)
            throw new TypeError('Iterations not a number');
        if (h < 0)
            throw new TypeError('Bad iterations');
        if ('number' != typeof i)
            throw new TypeError('Key length not a number');
        if (i < 0 || i > g || i != i)
            throw new TypeError('Bad key length');
    };
}), d.register('.....', function (e, f) {
    e.exports = 'utf-8';
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....').Buffer, k = d('.....'), l = d('.....'), m = d('.....'), n = j.alloc(128), o = {
            md5: 16,
            sha1: 20,
            sha224: 28,
            sha256: 32,
            sha384: 48,
            sha512: 64,
            rmd160: 20,
            ripemd160: 20
        };
    function p(q, r, s) {
        var t = function (u) {
                function v(w) {
                    return i(u).update(w).digest();
                }
                function w(x) {
                    return new h().update(x).digest();
                }
                return 'rmd160' === u || 'ripemd160' === u ? w : 'md5' === u ? g : v;
            }(q), u = 'sha512' === q || 'sha384' === q ? 128 : 64;
        r.length > u ? r = t(r) : r.length < u && (r = j.concat([
            r,
            n
        ], u));
        for (var v = j.allocUnsafe(u + o[q]), w = j.allocUnsafe(u + o[q]), x = 0; x < u; x++)
            v[x] = 54 ^ r[x], p[x] = 92 ^ r[x];
        var y = j.allocUnsafe(u + s + 4);
        v.copy(y, 0, 0, u), this.ipad1 = y, this.ipad2 = v, this.opad = p, this.alg = q, this.blocksize = u, this.hash = t, this.size = o[q];
    }
    p.prototype.run = function (w, x) {
        return w.copy(x, this.blocksize), this.hash(x).copy(this.opad, this.blocksize), this.hash(this.opad);
    }, e.exports = function (w, x, y, z, A) {
        t(y, z);
        var B = new p(A = A || 'sha1', w = v(w, u, 'Password'), (x = v(x, u, 'Salt')).length), C = j.allocUnsafe(z), D = j.allocUnsafe(x.length + 4);
        x.copy(D, 0, 0, x.length);
        for (var E = 0, F = o[A], G = Math.ceil(z / F), H = 1; H <= G; H++) {
            D.writeUInt32BE(H, x.length);
            for (var I = B.run(D, B.ipad1), J = I, K = 1; K < y; K++) {
                J = B.run(J, B.ipad2);
                for (var L = 0; L < F; L++)
                    I[L] ^= J[L];
            }
            I.copy(C, E), E += F;
        }
        return C;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer;
    e.exports = function (h, i, j) {
        if (g.isBuffer(h))
            return h;
        if ('string' == typeof h)
            return g.from(h, i);
        if (ArrayBuffer.isView(h))
            return g.from(h.buffer);
        throw new TypeError(j + ' must be a string, a Buffer, a typed array or a DataView');
    };
}), d.register('.....', function (e, f) {
    var g, h, i, j, k, l, m, n, o, p;
    a(e.exports, 'createCipher', function () {
        return g;
    }, function (q) {
        return g = q;
    }), a(e.exports, 'Cipher', function () {
        return h;
    }, function (q) {
        return h = q;
    }), a(e.exports, 'createCipheriv', function () {
        return i;
    }, function (q) {
        return i = q;
    }), a(e.exports, 'Cipheriv', function () {
        return j;
    }, function (q) {
        return j = q;
    }), a(e.exports, 'createDecipher', function () {
        return k;
    }, function (q) {
        return k = q;
    }), a(e.exports, 'Decipher', function () {
        return l;
    }, function (q) {
        return l = q;
    }), a(e.exports, 'createDecipheriv', function () {
        return m;
    }, function (q) {
        return m = q;
    }), a(e.exports, 'Decipheriv', function () {
        return n;
    }, function (q) {
        return n = q;
    }), a(e.exports, 'listCiphers', function () {
        return o;
    }, function (q) {
        return o = q;
    }), a(e.exports, 'getCiphers', function () {
        return p;
    }, function (q) {
        return p = q;
    });
    var q = d('.....'), r = d('.....'), s = d('.....'), t = d('.....'), u = d('.....');
    function v(w, x, y) {
        if (w = w.toLowerCase(), s[w])
            return r.createCipheriv(w, x, y);
        if (t[w])
            return new q({
                key: x,
                iv: y,
                mode: w
            });
        throw new TypeError('invalid suite type');
    }
    function w(x, y, z) {
        if (x = x.toLowerCase(), s[x])
            return r.createDecipheriv(x, y, z);
        if (t[x])
            return new q({
                key: y,
                iv: z,
                mode: x,
                decrypt: !0
            });
        throw new TypeError('invalid suite type');
    }
    g = h = function (x, y) {
        var z, A;
        if (x = x.toLowerCase(), s[x])
            z = s[x].key, A = s[x].iv;
        else {
            if (!t[x])
                throw new TypeError('invalid suite type');
            z = 8 * t[x].key, A = t[x].iv;
        }
        var B = u(y, !1, z, A);
        return v(x, B.key, B.iv);
    }, i = j = v, k = l = function (x, y) {
        var z, A;
        if (x = x.toLowerCase(), s[x])
            z = s[x].key, A = s[x].iv;
        else {
            if (!t[x])
                throw new TypeError('invalid suite type');
            z = 8 * t[x].key, A = t[x].iv;
        }
        var B = u(y, !1, z, A);
        return w(x, B.key, B.iv);
    }, m = n = w, o = p = function () {
        return Object.keys(t).concat(r.getCiphers());
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....').Buffer, k = {
            'des-ede3-cbc': h.CBC.instantiate(h.EDE),
            'des-ede3': h.EDE,
            'des-ede-cbc': h.CBC.instantiate(h.EDE),
            'des-ede': h.EDE,
            'des-cbc': h.CBC.instantiate(h.DES),
            'des-ecb': h.DES
        };
    function l(m) {
        g.call(this);
        var n, o = m.mode.toLowerCase(), p = k[o];
        n = m.decrypt ? 'decrypt' : 'encrypt';
        var q = m.key;
        j.isBuffer(q) || (q = j.from(q)), 'des-ede' !== o && 'des-ede-cbc' !== o || (q = j.concat([
            q,
            q.slice(0, 8)
        ]));
        var r = m.iv;
        j.isBuffer(l) || (l = j.from(l)), this._des = p.create({
            key: q,
            iv: l,
            type: n
        });
    }
    k.des = k['des-cbc'], k.des3 = k['des-ede3-cbc'], e.exports = l, q(l, g), l.prototype._update = function (r) {
        return j.from(this._des.update(r));
    }, l.prototype._final = function () {
        return j.from(this._des.final());
    };
}), d.register('.....', function (e, f) {
    var g, h, i;
    a(e.exports, 'DES', function () {
        return g;
    }, function (j) {
        return g = j;
    }), a(e.exports, 'CBC', function () {
        return h;
    }, function (j) {
        return h = j;
    }), a(e.exports, 'EDE', function () {
        return i;
    }, function (j) {
        return i = j;
    }), d('.....'), d('.....'), g = d('.....'), h = d('.....'), i = d('.....');
}), d.register('.....', function (e, f) {
    var g, h, i, j, k, l, m, n, o, p, q;
    a(e.exports, 'readUInt32BE', function () {
        return g;
    }, function (r) {
        return g = r;
    }), a(e.exports, 'writeUInt32BE', function () {
        return h;
    }, function (r) {
        return h = r;
    }), a(e.exports, 'ip', function () {
        return i;
    }, function (r) {
        return i = r;
    }), a(e.exports, 'rip', function () {
        return j;
    }, function (r) {
        return j = r;
    }), a(e.exports, 'pc1', function () {
        return k;
    }, function (r) {
        return k = r;
    }), a(e.exports, 'r28shl', function () {
        return l;
    }, function (r) {
        return l = r;
    }), a(e.exports, 'pc2', function () {
        return m;
    }, function (r) {
        return m = r;
    }), a(e.exports, 'expand', function () {
        return n;
    }, function (r) {
        return n = r;
    }), a(e.exports, 'substitute', function () {
        return o;
    }, function (r) {
        return o = r;
    }), a(e.exports, 'permute', function () {
        return p;
    }, function (r) {
        return p = r;
    }), a(e.exports, 'padSplit', function () {
        return q;
    }, function (r) {
        return q = r;
    }), g = function (r, s) {
        return (r[0 + s] << 24 | r[1 + s] << 16 | r[2 + s] << 8 | r[3 + s]) >>> 0;
    }, h = function (r, s, t) {
        r[0 + t] = s >>> 24, r[1 + t] = s >>> 16 & 255, r[2 + t] = s >>> 8 & 255, r[3 + t] = 255 & s;
    }, i = function (r, s, t, u) {
        for (var v = 0, w = 0, x = 6; x >= 0; x -= 2) {
            for (var y = 0; y <= 24; y += 8)
                v <<= 1, v |= s >>> y + x & 1;
            for (y = 0; y <= 24; y += 8)
                v <<= 1, v |= r >>> y + x & 1;
        }
        for (x = 6; x >= 0; x -= 2) {
            for (y = 1; y <= 25; y += 8)
                w <<= 1, w |= s >>> y + x & 1;
            for (y = 1; y <= 25; y += 8)
                w <<= 1, w |= r >>> y + x & 1;
        }
        t[u + 0] = v >>> 0, t[u + 1] = w >>> 0;
    }, j = function (r, s, t, u) {
        for (var v = 0, w = 0, x = 0; x < 4; x++)
            for (var y = 24; y >= 0; y -= 8)
                v <<= 1, v |= s >>> y + x & 1, v <<= 1, v |= r >>> y + x & 1;
        for (x = 4; x < 8; x++)
            for (y = 24; y >= 0; y -= 8)
                w <<= 1, w |= s >>> y + x & 1, w <<= 1, w |= r >>> y + x & 1;
        t[u + 0] = v >>> 0, t[u + 1] = w >>> 0;
    }, k = function (r, s, t, u) {
        for (var v = 0, w = 0, x = 7; x >= 5; x--) {
            for (var y = 0; y <= 24; y += 8)
                v <<= 1, v |= s >> y + x & 1;
            for (y = 0; y <= 24; y += 8)
                v <<= 1, v |= r >> y + x & 1;
        }
        for (y = 0; y <= 24; y += 8)
            v <<= 1, v |= s >> y + x & 1;
        for (x = 1; x <= 3; x++) {
            for (y = 0; y <= 24; y += 8)
                w <<= 1, w |= s >> y + x & 1;
            for (y = 0; y <= 24; y += 8)
                w <<= 1, w |= r >> y + x & 1;
        }
        for (y = 0; y <= 24; y += 8)
            w <<= 1, w |= r >> y + x & 1;
        t[u + 0] = v >>> 0, t[u + 1] = w >>> 0;
    }, l = function (r, s) {
        return r << s & 268435455 | r >>> 28 - s;
    };
    var r = [
        14,
        11,
        17,
        4,
        27,
        23,
        25,
        0,
        13,
        22,
        7,
        18,
        5,
        9,
        16,
        24,
        2,
        20,
        12,
        21,
        1,
        8,
        15,
        26,
        15,
        4,
        25,
        19,
        9,
        1,
        26,
        16,
        5,
        11,
        23,
        8,
        12,
        7,
        17,
        0,
        22,
        3,
        10,
        14,
        6,
        20,
        27,
        24
    ];
    m = function (s, t, u, v) {
        for (var w = 0, x = 0, y = r.length >>> 1, z = 0; z < y; z++)
            w <<= 1, w |= s >>> r[z] & 1;
        for (z = y; z < r.length; z++)
            x <<= 1, x |= t >>> r[z] & 1;
        u[v + 0] = w >>> 0, u[v + 1] = x >>> 0;
    }, n = function (s, t, u) {
        var v = 0, w = 0;
        v = (1 & s) << 5 | s >>> 27;
        for (var x = 23; x >= 15; x -= 4)
            v <<= 6, v |= s >>> x & 63;
        for (x = 11; x >= 3; x -= 4)
            w |= s >>> x & 63, w <<= 6;
        w |= (31 & s) << 1 | s >>> 31, t[u + 0] = v >>> 0, t[u + 1] = w >>> 0;
    };
    var s = [
        14,
        0,
        4,
        15,
        13,
        7,
        1,
        4,
        2,
        14,
        15,
        2,
        11,
        13,
        8,
        1,
        3,
        10,
        10,
        6,
        6,
        12,
        12,
        11,
        5,
        9,
        9,
        5,
        0,
        3,
        7,
        8,
        4,
        15,
        1,
        12,
        14,
        8,
        8,
        2,
        13,
        4,
        6,
        9,
        2,
        1,
        11,
        7,
        15,
        5,
        12,
        11,
        9,
        3,
        7,
        14,
        3,
        10,
        10,
        0,
        5,
        6,
        0,
        13,
        15,
        3,
        1,
        13,
        8,
        4,
        14,
        7,
        6,
        15,
        11,
        2,
        3,
        8,
        4,
        14,
        9,
        12,
        7,
        0,
        2,
        1,
        13,
        10,
        12,
        6,
        0,
        9,
        5,
        11,
        10,
        5,
        0,
        13,
        14,
        8,
        7,
        10,
        11,
        1,
        10,
        3,
        4,
        15,
        13,
        4,
        1,
        2,
        5,
        11,
        8,
        6,
        12,
        7,
        6,
        12,
        9,
        0,
        3,
        5,
        2,
        14,
        15,
        9,
        10,
        13,
        0,
        7,
        9,
        0,
        14,
        9,
        6,
        3,
        3,
        4,
        15,
        6,
        5,
        10,
        1,
        2,
        13,
        8,
        12,
        5,
        7,
        14,
        11,
        12,
        4,
        11,
        2,
        15,
        8,
        1,
        13,
        1,
        6,
        10,
        4,
        13,
        9,
        0,
        8,
        6,
        15,
        9,
        3,
        8,
        0,
        7,
        11,
        4,
        1,
        15,
        2,
        14,
        12,
        3,
        5,
        11,
        10,
        5,
        14,
        2,
        7,
        12,
        7,
        13,
        13,
        8,
        14,
        11,
        3,
        5,
        0,
        6,
        6,
        15,
        9,
        0,
        10,
        3,
        1,
        4,
        2,
        7,
        8,
        2,
        5,
        12,
        11,
        1,
        12,
        10,
        4,
        14,
        15,
        9,
        10,
        3,
        6,
        15,
        9,
        0,
        0,
        6,
        12,
        10,
        11,
        1,
        7,
        13,
        13,
        8,
        15,
        9,
        1,
        4,
        3,
        5,
        14,
        11,
        5,
        12,
        2,
        7,
        8,
        2,
        4,
        14,
        2,
        14,
        12,
        11,
        4,
        2,
        1,
        12,
        7,
        4,
        10,
        7,
        11,
        13,
        6,
        1,
        8,
        5,
        5,
        0,
        3,
        15,
        15,
        10,
        13,
        3,
        0,
        9,
        14,
        8,
        9,
        6,
        4,
        11,
        2,
        8,
        1,
        12,
        11,
        7,
        10,
        1,
        13,
        14,
        7,
        2,
        8,
        13,
        15,
        6,
        9,
        15,
        12,
        0,
        5,
        9,
        6,
        10,
        3,
        4,
        0,
        5,
        14,
        3,
        12,
        10,
        1,
        15,
        10,
        4,
        15,
        2,
        9,
        7,
        2,
        12,
        6,
        9,
        8,
        5,
        0,
        6,
        13,
        1,
        3,
        13,
        4,
        14,
        14,
        0,
        7,
        11,
        5,
        3,
        11,
        8,
        9,
        4,
        14,
        3,
        15,
        2,
        5,
        12,
        2,
        9,
        8,
        5,
        12,
        15,
        3,
        10,
        7,
        11,
        0,
        14,
        4,
        1,
        10,
        7,
        1,
        6,
        13,
        0,
        11,
        8,
        6,
        13,
        4,
        13,
        11,
        0,
        2,
        11,
        14,
        7,
        15,
        4,
        0,
        9,
        8,
        1,
        13,
        10,
        3,
        14,
        12,
        3,
        9,
        5,
        7,
        12,
        5,
        2,
        10,
        15,
        6,
        8,
        1,
        6,
        1,
        6,
        4,
        11,
        11,
        13,
        13,
        8,
        12,
        1,
        3,
        4,
        7,
        10,
        14,
        7,
        10,
        9,
        15,
        5,
        6,
        0,
        8,
        15,
        0,
        14,
        5,
        2,
        9,
        3,
        2,
        12,
        13,
        1,
        2,
        15,
        8,
        13,
        4,
        8,
        6,
        10,
        15,
        3,
        11,
        7,
        1,
        4,
        10,
        12,
        9,
        5,
        3,
        6,
        14,
        11,
        5,
        0,
        0,
        14,
        12,
        9,
        7,
        2,
        7,
        2,
        11,
        1,
        4,
        14,
        1,
        7,
        9,
        4,
        12,
        10,
        14,
        8,
        2,
        13,
        0,
        15,
        6,
        12,
        10,
        9,
        13,
        0,
        15,
        3,
        3,
        5,
        5,
        6,
        8,
        11
    ];
    o = function (t, u) {
        for (var v = 0, w = 0; w < 4; w++) {
            v <<= 4, v |= s[64 * w + (t >>> 18 - 6 * w & 63)];
        }
        for (w = 0; w < 4; w++) {
            v <<= 4, v |= s[256 + 64 * w + (u >>> 18 - 6 * w & 63)];
        }
        return v >>> 0;
    };
    var t = [
        16,
        25,
        12,
        11,
        3,
        20,
        4,
        15,
        31,
        17,
        9,
        6,
        27,
        14,
        1,
        22,
        30,
        24,
        8,
        18,
        0,
        5,
        29,
        23,
        13,
        19,
        2,
        26,
        10,
        21,
        28,
        7
    ];
    p = function (u) {
        for (var v = 0, w = 0; w < t.length; w++)
            v <<= 1, v |= u >>> t[w] & 1;
        return v >>> 0;
    }, q = function (u, v, w) {
        for (var x = u.toString(2); x.length < v;)
            x = '0' + x;
        for (var y = [], z = 0; z < v; z += w)
            y.push(x.slice(z, z + w));
        return y.join(' ');
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    function h(i) {
        this.options = i, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = new Array(this.blockSize), this.bufferOff = 0;
    }
    e.exports = h, h.prototype._init = function () {
    }, h.prototype.update = function (i) {
        return 0 === i.length ? [] : 'decrypt' === this.type ? this._updateDecrypt(i) : this._updateEncrypt(i);
    }, h.prototype._buffer = function (i, j) {
        for (var k = Math.min(this.buffer.length - this.bufferOff, i.length - j), l = 0; l < k; l++)
            this.buffer[this.bufferOff + l] = i[j + l];
        return this.bufferOff += k, k;
    }, h.prototype._flushBuffer = function (i, j) {
        return this._update(this.buffer, 0, i, j), this.bufferOff = 0, this.blockSize;
    }, h.prototype._updateEncrypt = function (i) {
        var j = 0, k = 0, l = (this.bufferOff + i.length) / this.blockSize | 0, m = new Array(l * this.blockSize);
        0 !== this.bufferOff && (j += this._buffer(i, j), this.bufferOff === this.buffer.length && (k += this._flushBuffer(m, k)));
        for (var n = i.length - (i.length - j) % this.blockSize; j < n; j += this.blockSize)
            this._update(i, j, m, k), k += this.blockSize;
        for (; j < i.length; j++, this.bufferOff++)
            this.buffer[this.bufferOff] = i[j];
        return m;
    }, h.prototype._updateDecrypt = function (i) {
        for (var j = 0, k = 0, l = Math.ceil((this.bufferOff + i.length) / this.blockSize) - 1, m = new Array(l * this.blockSize); l > 0; l--)
            j += this._buffer(i, j), k += this._flushBuffer(m, k);
        return j += this._buffer(i, j), m;
    }, h.prototype.final = function (i) {
        var j, k;
        return i && (j = this.update(i)), k = 'encrypt' === this.type ? this._finalEncrypt() : this._finalDecrypt(), j ? j.concat(k) : k;
    }, h.prototype._pad = function (i, j) {
        if (0 === j)
            return !1;
        for (; j < i.length;)
            i[j++] = 0;
        return !0;
    }, h.prototype._finalEncrypt = function () {
        if (!this._pad(this.buffer, this.bufferOff))
            return [];
        var i = new Array(this.blockSize);
        return this._update(this.buffer, 0, i, 0), i;
    }, h.prototype._unpad = function (i) {
        return i;
    }, h.prototype._finalDecrypt = function () {
        g.equal(this.bufferOff, this.blockSize, 'Not enough data to decrypt');
        var i = new Array(this.blockSize);
        return this._flushBuffer(i, 0), this._unpad(i);
    };
}), d.register('.....', function (e, f) {
    function g(h, i) {
        if (!h)
            throw new Error(i || 'Assertion failed');
    }
    e.exports = g, g.equal = function (h, i, j) {
        if (h != i)
            throw new Error(j || 'Assertion failed: ' + h + ' != ' + i);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    function k() {
        this.tmp = new Array(2), this.keys = null;
    }
    function l(m) {
        j.call(this, m);
        var n = new k();
        this._desState = n, this.deriveKeys(n, m.key);
    }
    h(l, j), e.exports = l, l.create = function (n) {
        return new l(n);
    };
    var n = [
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        1
    ];
    l.prototype.deriveKeys = function (o, p) {
        o.keys = new Array(32), g.equal(p.length, this.blockSize, 'Invalid key length');
        var q = i.readUInt32BE(p, 0), r = i.readUInt32BE(p, 4);
        i.pc1(q, r, o.tmp, 0), q = o.tmp[0], r = o.tmp[1];
        for (var s = 0; s < o.keys.length; s += 2) {
            var t = n[s >>> 1];
            q = i.r28shl(q, t), r = i.r28shl(r, t), i.pc2(q, r, o.keys, s);
        }
    }, l.prototype._update = function (o, p, q, r) {
        var s = this._desState, t = i.readUInt32BE(o, p), u = i.readUInt32BE(o, p + 4);
        i.ip(t, u, s.tmp, 0), t = s.tmp[0], u = s.tmp[1], 'encrypt' === this.type ? this._encrypt(s, t, u, s.tmp, 0) : this._decrypt(s, t, u, s.tmp, 0), t = s.tmp[0], u = s.tmp[1], i.writeUInt32BE(q, t, r), i.writeUInt32BE(q, u, r + 4);
    }, l.prototype._pad = function (o, p) {
        for (var q = o.length - p, r = p; r < o.length; r++)
            o[r] = q;
        return !0;
    }, l.prototype._unpad = function (o) {
        for (var p = o[o.length - 1], q = o.length - p; q < o.length; q++)
            g.equal(o[q], p);
        return o.slice(0, o.length - p);
    }, l.prototype._encrypt = function (o, p, q, r, s) {
        for (var t = p, u = q, v = 0; v < o.keys.length; v += 2) {
            var w = o.keys[v], x = o.keys[v + 1];
            i.expand(u, o.tmp, 0), w ^= o.tmp[0], x ^= o.tmp[1];
            var y = i.substitute(w, x), z = u;
            u = (t ^ i.permute(y)) >>> 0, t = z;
        }
        i.rip(u, t, r, s);
    }, l.prototype._decrypt = function (o, p, q, r, s) {
        for (var t = q, u = p, v = o.keys.length - 2; v >= 0; v -= 2) {
            var w = o.keys[v], x = o.keys[v + 1];
            i.expand(t, o.tmp, 0), w ^= o.tmp[0], x ^= o.tmp[1];
            var y = i.substitute(w, x), z = t;
            t = (u ^ i.permute(y)) >>> 0, u = z;
        }
        i.rip(t, u, r, s);
    };
}), d.register('.....', function (e, f) {
    var g;
    a(e.exports, 'instantiate', function () {
        return g;
    }, function (h) {
        return g = h;
    });
    var h = d('.....'), i = d('.....'), j = {};
    function k(l) {
        h.equal(l.length, 8, 'Invalid IV length'), this.iv = new Array(8);
        for (var m = 0; m < this.iv.length; m++)
            this.iv[m] = l[m];
    }
    g = function (m) {
        function n(o) {
            m.call(this, o), this._cbcInit();
        }
        i(n, m);
        for (var o = Object.keys(j), p = 0; p < o.length; p++) {
            var q = o[p];
            n.prototype[q] = j[q];
        }
        return n.create = function (r) {
            return new n(r);
        }, n;
    }, j._cbcInit = function () {
        var m = new k(this.options.iv);
        this._cbcState = m;
    }, j._update = function (m, n, o, p) {
        var q = this._cbcState, r = this.constructor.super_.prototype, s = q.iv;
        if ('encrypt' === this.type) {
            for (var t = 0; t < this.blockSize; t++)
                s[t] ^= m[n + t];
            r._update.call(this, s, 0, o, p);
            for (t = 0; t < this.blockSize; t++)
                s[t] = o[p + t];
        } else {
            r._update.call(this, m, n, o, p);
            for (t = 0; t < this.blockSize; t++)
                o[p + t] ^= s[t];
            for (t = 0; t < this.blockSize; t++)
                s[t] = m[n + t];
        }
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    function k(l, m) {
        g.equal(m.length, 24, 'Invalid key length');
        var n = m.slice(0, 8), o = m.slice(8, 16), p = m.slice(16, 24);
        this.ciphers = 'encrypt' === l ? [
            j.create({
                type: 'encrypt',
                key: n
            }),
            j.create({
                type: 'decrypt',
                key: o
            }),
            j.create({
                type: 'encrypt',
                key: p
            })
        ] : [
            j.create({
                type: 'decrypt',
                key: p
            }),
            j.create({
                type: 'encrypt',
                key: o
            }),
            j.create({
                type: 'decrypt',
                key: n
            })
        ];
    }
    function o(p) {
        p.call(this, p);
        var q = new k(this.type, this.options.key);
        this._edeState = q;
    }
    o(o, p), e.exports = o, o.create = function (q) {
        return new o(q);
    }, o.prototype._update = function (q, r, s, t) {
        var u = this._edeState;
        u.ciphers[0]._update(q, r, s, t), u.ciphers[1]._update(s, t, s, t), u.ciphers[2]._update(s, t, s, t);
    }, o.prototype._pad = j.prototype._pad, o.prototype._unpad = j.prototype._unpad;
}), d.register('.....', function (e, f) {
    var g, h, i;
    a(e.exports, 'createCipheriv', function () {
        return g;
    }, function (j) {
        return g = j;
    }), a(e.exports, 'createDecipheriv', function () {
        return h;
    }, function (j) {
        return h = j;
    }), a(e.exports, 'getCiphers', function () {
        return i;
    }, function (j) {
        return i = j;
    });
    var j = d('.....'), k = d('.....'), l = d('.....');
    j.createCipher, g = j.createCipheriv, k.createDecipher, h = k.createDecipheriv, i = function () {
        return Object.keys(l);
    };
}), d.register('.....', function (e, f) {
    var g, h;
    a(e.exports, 'createCipheriv', function () {
        return g;
    }, function (i) {
        return g = i;
    }), a(e.exports, 'createCipher', function () {
        return h;
    }, function (i) {
        return h = i;
    });
    var i = d('.....'), j = d('.....'), k = d('.....').Buffer, l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....');
    function p(q, r, s) {
        m.call(this), this._cache = new _r(), this._cipher = new n.AES(r), this._prev = k.from(s), this._mode = q, this._autopadding = !0;
    }
    d('.....')(p, m), p.prototype._update = function (q) {
        var r, s;
        this._cache.add(q);
        for (var t = []; r = this._cache.get();)
            s = this._mode.encrypt(this, r), t.push(s);
        return k.concat(t);
    };
    var q = k.alloc(16, 16);
    function _r() {
        this.cache = k.allocUnsafe(0);
    }
    function s(t, u, v) {
        var w = i[t.toLowerCase()];
        if (!w)
            throw new TypeError('invalid suite type');
        if ('string' == typeof u && (u = k.from(u)), u.length !== w.key / 8)
            throw new TypeError('invalid key length ' + u.length);
        if ('string' == typeof v && (v = k.from(v)), 'GCM' !== w.mode && v.length !== w.iv)
            throw new TypeError('invalid iv length ' + v.length);
        return 'stream' === w.type ? new l(w.module, u, v) : 'auth' === w.type ? new j(w.module, u, v) : new p(w.module, u, v);
    }
    p.prototype._final = function () {
        var u = this._cache.flush();
        if (this._autopadding)
            return u = this._mode.encrypt(this, u), this._cipher.scrub(), u;
        if (!u.equals(q))
            throw this._cipher.scrub(), new Error('data not multiple of block length');
    }, p.prototype.setAutoPadding = function (u) {
        return this._autopadding = !!u, this;
    }, _r.prototype.add = function (u) {
        this.cache = k.concat([
            this.cache,
            u
        ]);
    }, _r.prototype.get = function () {
        if (this.cache.length > 15) {
            var u = this.cache.slice(0, 16);
            return this.cache = this.cache.slice(16), u;
        }
        return null;
    }, _r.prototype.flush = function () {
        for (var u = 16 - this.cache.length, v = k.allocUnsafe(u), w = -1; ++w < u;)
            v.writeUInt8(u, w);
        return k.concat([
            this.cache,
            v
        ]);
    }, g = s, h = function (u, v) {
        var w = i[u.toLowerCase()];
        if (!w)
            throw new TypeError('invalid suite type');
        var x = o(v, !1, w.key, w.iv);
        return s(u, x.key, x.iv);
    };
}), d.register('.....', function (e, f) {
    var g = {
            ECB: d('.....'),
            CBC: d('.....'),
            CFB: d('.....'),
            CFB8: d('.....'),
            CFB1: d('.....'),
            OFB: d('.....'),
            CTR: d('.....'),
            GCM: d('.....')
        }, h = d('.....');
    for (var i in h)
        h[i].module = g[h[i].mode];
    e.exports = h;
}), d.register('.....', function (e, f) {
    var g, h;
    a(e.exports, 'encrypt', function () {
        return g;
    }, function (i) {
        return g = i;
    }), a(e.exports, 'decrypt', function () {
        return h;
    }, function (i) {
        return h = i;
    }), g = function (i, j) {
        return i._cipher.encryptBlock(j);
    }, h = function (i, j) {
        return i._cipher.decryptBlock(j);
    };
}), d.register('.....', function (e, f) {
    var g, h;
    a(e.exports, 'encrypt', function () {
        return g;
    }, function (i) {
        return g = i;
    }), a(e.exports, 'decrypt', function () {
        return h;
    }, function (i) {
        return h = i;
    });
    var i = d('.....');
    g = function (j, k) {
        var l = i(k, j._prev);
        return j._prev = j._cipher.encryptBlock(l), j._prev;
    }, h = function (j, k) {
        var l = j._prev;
        j._prev = k;
        var m = j._cipher.decryptBlock(k);
        return i(m, l);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer;
    e.exports = function (h, i) {
        for (var j = Math.min(h.length, i.length), k = new g(j), l = 0; l < j; ++l)
            k[l] = h[l] ^ i[l];
        return k;
    };
}), d.register('.....', function (e, f) {
    var g;
    a(e.exports, 'encrypt', function () {
        return g;
    }, function (h) {
        return g = h;
    });
    var h = d('.....').Buffer, i = d('.....');
    function j(k, l, m) {
        var n = l.length, o = i(l, k._cache);
        return k._cache = k._cache.slice(n), k._prev = h.concat([
            k._prev,
            m ? l : o
        ]), o;
    }
    o = function (m, n, o) {
        for (var p, q = h.allocUnsafe(0); n.length;) {
            if (0 === m._cache.length && (m._cache = m._cipher.encryptBlock(m._prev), m._prev = h.allocUnsafe(0)), !(m._cache.length <= n.length)) {
                q = h.concat([
                    q,
                    j(m, n, o)
                ]);
                break;
            }
            p = m._cache.length, q = h.concat([
                q,
                j(m, n.slice(0, p), o)
            ]), n = n.slice(p);
        }
        return q;
    };
}), d.register('.....', function (e, f) {
    var g;
    a(e.exports, 'encrypt', function () {
        return g;
    }, function (h) {
        return g = h;
    });
    var h = d('.....').Buffer;
    function i(j, k, l) {
        var m = j._cipher.encryptBlock(j._prev)[0] ^ k;
        return j._prev = h.concat([
            j._prev.slice(1),
            h.from([l ? k : m])
        ]), m;
    }
    g = function (k, l, m) {
        for (var n = l.length, o = h.allocUnsafe(n), p = -1; ++p < n;)
            o[p] = i(k, l[p], m);
        return o;
    };
}), d.register('.....', function (e, f) {
    var g;
    a(e.exports, 'encrypt', function () {
        return g;
    }, function (h) {
        return g = h;
    });
    var h = d('.....').Buffer;
    function i(j, k, l) {
        for (var m, n, o = -1, p = 0; ++o < 8;)
            m = k & 1 << 7 - o ? 128 : 0, i += (128 & (n = j._cipher.encryptBlock(j._prev)[0] ^ m)) >> o % 8, j._prev = _n(j._prev, l ? m : n);
        return i;
    }
    function _n(o, p) {
        var q = o.length, r = -1, s = o.allocUnsafe(o.length);
        for (o = o.concat([
                o,
                o.from([p])
            ]); ++r < q;)
            s[r] = o[r] << 1 | o[r + 1] >> 7;
        return s;
    }
    s = function (r, s, t) {
        for (var u = s.length, v = o.allocUnsafe(u), w = -1; ++w < u;)
            v[w] = i(r, s[w], t);
        return v;
    };
}), d.register('.....', function (e, f) {
    var g;
    a(e.exports, 'encrypt', function () {
        return g;
    }, function (h) {
        return g = h;
    });
    var h = d('.....').Buffer, i = d('.....');
    function j(k) {
        return k._prev = k._cipher.encryptBlock(k._prev), k._prev;
    }
    g = function (k, l) {
        for (; k._cache.length < l.length;)
            k._cache = h.concat([
                k._cache,
                j(k)
            ]);
        var m = k._cache.slice(0, l.length);
        return k._cache = k._cache.slice(l.length), i(l, m);
    };
}), d.register('.....', function (e, f) {
    var g;
    a(e.exports, 'encrypt', function () {
        return g;
    }, function (h) {
        return g = h;
    });
    var h = d('.....'), i = d('.....').Buffer, j = d('.....');
    function k(l) {
        var m = l._cipher.encryptBlockRaw(l._prev);
        return j(l._prev), m;
    }
    g = function (m, n) {
        var o = Math.ceil(n.length / 16), p = m._cache.length;
        m._cache = i.concat([
            m._cache,
            i.allocUnsafe(16 * o)
        ]);
        for (var q = 0; q < o; q++) {
            var r = k(m), s = p + 16 * q;
            m._cache.writeUInt32BE(r[0], s + 0), m._cache.writeUInt32BE(r[1], s + 4), m._cache.writeUInt32BE(r[2], s + 8), m._cache.writeUInt32BE(r[3], s + 12);
        }
        var t = m._cache.slice(0, n.length);
        return m._cache = m._cache.slice(n.length), h(n, t);
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g) {
        for (var h, i = g.length; i--;) {
            if (255 !== (h = g.readUInt8(i))) {
                h++, g.writeUInt8(h, i);
                break;
            }
            g.writeUInt8(0, i);
        }
    };
}), d.register('.....', function (e, f) {
    e.exports = JSON.parse('{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}');
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....').Buffer, i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....');
    function n(o, p, q, r) {
        i.call(this);
        var s = h.alloc(4, 0);
        this._cipher = new g.AES(p);
        var t = this._cipher.encryptBlock(s);
        this._ghash = new k(n), q = function (u, v, w) {
            if (12 === v.length)
                return u._finID = h.concat([
                    v,
                    h.from([
                        0,
                        0,
                        0,
                        1
                    ])
                ]), h.concat([
                    v,
                    h.from([
                        0,
                        0,
                        0,
                        2
                    ])
                ]);
            var x = new k(w), y = v.length, z = y % 16;
            x.update(v), z && (z = 16 - z, x.update(h.alloc(z, 0))), x.update(h.alloc(8, 0));
            var A = 8 * y, B = h.alloc(8);
            B.writeUIntBE(A, 0, 8), x.update(B), u._finID = x.state;
            var C = h.from(u._finID);
            return m(C), C;
        }(this, q, n), this._prev = h.from(q), this._cache = h.allocUnsafe(0), this._secCache = h.allocUnsafe(0), this._decrypt = r, this._alen = 0, this._len = 0, this._mode = o, this._authTag = null, this._called = !1;
    }
    j(n, i), n.prototype._update = function (q) {
        if (!this._called && this._alen) {
            var r = 16 - this._alen % 16;
            r < 16 && (r = h.alloc(r, 0), this._ghash.update(r));
        }
        this._called = !0;
        var s = this._mode.encrypt(this, q);
        return this._decrypt ? this._ghash.update(q) : this._ghash.update(s), this._len += q.length, s;
    }, n.prototype._final = function () {
        if (this._decrypt && !this._authTag)
            throw new Error('Unsupported state or unable to authenticate data');
        var q = s(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
        if (this._decrypt && function (r, s) {
                var t = 0;
                r.length !== s.length && t++;
                for (var u = Math.min(r.length, s.length), v = 0; v < u; ++v)
                    t += r[v] ^ s[v];
                return t;
            }(q, this._authTag))
            throw new Error('Unsupported state or unable to authenticate data');
        this._authTag = q, this._cipher.scrub();
    }, n.prototype.getAuthTag = function () {
        if (this._decrypt || !h.isBuffer(this._authTag))
            throw new Error('Attempting to get auth tag in unsupported state');
        return this._authTag;
    }, n.prototype.setAuthTag = function (q) {
        if (!this._decrypt)
            throw new Error('Attempting to set auth tag in unsupported state');
        this._authTag = q;
    }, n.prototype.setAAD = function (q) {
        if (this._called)
            throw new Error('Attempting to set AAD in unsupported state');
        this._ghash.update(q), this._alen += q.length;
    }, e.exports = n;
}), d.register('.....', function (e, f) {
    var g;
    a(e.exports, 'AES', function () {
        return g;
    }, function (h) {
        return g = h;
    });
    var h = d('.....').Buffer;
    function i(j) {
        h.isBuffer(j) || (j = h.from(j));
        for (var k = j.length / 4 | 0, l = new Array(k), m = 0; m < k; m++)
            l[m] = j.readUInt32BE(4 * m);
        return l;
    }
    function m(n) {
        for (; 0 < n.length; n++)
            n[0] = 0;
    }
    function n(o, p, q, r, s) {
        for (var t, u, v, w, x = q[0], y = q[1], z = q[2], A = q[3], B = o[0] ^ p[0], C = o[1] ^ p[1], D = o[2] ^ p[2], E = o[3] ^ p[3], F = 4, G = 1; G < s; G++)
            t = x[B >>> 24] ^ y[C >>> 16 & 255] ^ z[D >>> 8 & 255] ^ A[255 & E] ^ p[F++], i = x[C >>> 24] ^ y[D >>> 16 & 255] ^ z[E >>> 8 & 255] ^ A[255 & B] ^ p[F++], m = x[D >>> 24] ^ y[E >>> 16 & 255] ^ z[B >>> 8 & 255] ^ A[255 & C] ^ p[F++], n = x[E >>> 24] ^ y[B >>> 16 & 255] ^ z[C >>> 8 & 255] ^ A[255 & D] ^ p[F++], B = t, C = i, D = m, E = n;
        return t = (r[B >>> 24] << 24 | r[C >>> 16 & 255] << 16 | r[D >>> 8 & 255] << 8 | r[255 & E]) ^ p[F++], i = (r[C >>> 24] << 24 | r[D >>> 16 & 255] << 16 | r[E >>> 8 & 255] << 8 | r[255 & B]) ^ p[F++], m = (r[D >>> 24] << 24 | r[E >>> 16 & 255] << 16 | r[B >>> 8 & 255] << 8 | r[255 & C]) ^ p[F++], n = (r[E >>> 24] << 24 | r[B >>> 16 & 255] << 16 | r[C >>> 8 & 255] << 8 | r[255 & D]) ^ p[F++], [
            t >>>= 0,
            i >>>= 0,
            m >>>= 0,
            n >>>= 0
        ];
    }
    var C = [
            0,
            1,
            2,
            4,
            8,
            16,
            32,
            64,
            128,
            27,
            54
        ], D = function () {
            for (var E = new Array(256), F = 0; F < 256; F++)
                E[F] = F < 128 ? F << 1 : F << 1 ^ 283;
            for (var G = [], H = [], I = [
                        [],
                        [],
                        [],
                        []
                    ], J = [
                        [],
                        [],
                        [],
                        []
                    ], K = 0, L = 0, M = 0; M < 256; ++M) {
                var N = L ^ L << 1 ^ L << 2 ^ L << 3 ^ L << 4;
                N = N >>> 8 ^ 255 & N ^ 99, G[K] = N, H[N] = K;
                var O = E[K], P = E[O], Q = E[P], R = 257 * E[N] ^ 16843008 * N;
                I[0][K] = R << 24 | R >>> 8, I[1][K] = R << 16 | R >>> 16, I[2][K] = R << 8 | R >>> 24, I[3][K] = R, R = 16843009 * Q ^ 65537 * P ^ 257 * O ^ 16843008 * K, J[0][N] = R << 24 | R >>> 8, J[1][N] = R << 16 | R >>> 16, J[2][N] = R << 8 | R >>> 24, J[3][N] = R, 0 === K ? K = L = 1 : (K = O ^ E[E[E[Q ^ O]]], L ^= E[E[L]]);
            }
            return {
                SBOX: G,
                INV_SBOX: H,
                SUB_MIX: I,
                INV_SUB_MIX: J
            };
        }();
    function E(F) {
        this._key = i(F), this._reset();
    }
    E.blockSize = 16, E.keySize = 32, E.prototype.blockSize = E.blockSize, E.prototype.keySize = E.keySize, E.prototype._reset = function () {
        for (var F = this._key, G = F.length, H = G + 6, I = 4 * (H + 1), J = [], K = 0; K < G; K++)
            J[K] = F[K];
        for (K = G; K < I; K++) {
            var L = J[K - 1];
            K % G == 0 ? (L = L << 8 | L >>> 24, L = D.SBOX[L >>> 24] << 24 | D.SBOX[L >>> 16 & 255] << 16 | D.SBOX[L >>> 8 & 255] << 8 | D.SBOX[255 & L], L ^= C[K / G | 0] << 24) : G > 6 && K % G == 4 && (L = D.SBOX[L >>> 24] << 24 | D.SBOX[L >>> 16 & 255] << 16 | D.SBOX[L >>> 8 & 255] << 8 | D.SBOX[255 & L]), J[K] = J[K - G] ^ L;
        }
        for (var M = [], N = 0; N < I; N++) {
            var O = I - N, P = J[O - (N % 4 ? 0 : 4)];
            M[N] = N < 4 || O <= 4 ? P : D.INV_SUB_MIX[0][D.SBOX[P >>> 24]] ^ D.INV_SUB_MIX[1][D.SBOX[P >>> 16 & 255]] ^ D.INV_SUB_MIX[2][D.SBOX[P >>> 8 & 255]] ^ D.INV_SUB_MIX[3][D.SBOX[255 & P]];
        }
        this._nRounds = H, this._keySchedule = J, this._invKeySchedule = M;
    }, E.prototype.encryptBlockRaw = function (F) {
        return n(F = i(F), this._keySchedule, D.SUB_MIX, D.SBOX, this._nRounds);
    }, E.prototype.encryptBlock = function (F) {
        var G = this.encryptBlockRaw(F), H = t.allocUnsafe(16);
        return H.writeUInt32BE(G[0], 0), H.writeUInt32BE(G[1], 4), H.writeUInt32BE(G[2], 8), H.writeUInt32BE(G[3], 12), H;
    }, E.prototype.decryptBlock = function (F) {
        var G = (F = i(F))[1];
        F[1] = F[3], F[3] = G;
        var H = n(F, this._invKeySchedule, D.INV_SUB_MIX, D.INV_SBOX, this._nRounds), I = t.allocUnsafe(16);
        return I.writeUInt32BE(H[0], 0), I.writeUInt32BE(H[3], 4), I.writeUInt32BE(H[2], 8), I.writeUInt32BE(H[1], 12), I;
    }, E.prototype.scrub = function () {
        m(this._keySchedule), m(this._invKeySchedule), m(this._key);
    }, g = E;
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer, h = g.alloc(16, 0);
    function i(j) {
        var k = g.allocUnsafe(16);
        return k.writeUInt32BE(j[0] >>> 0, 0), k.writeUInt32BE(j[1] >>> 0, 4), k.writeUInt32BE(j[2] >>> 0, 8), k.writeUInt32BE(j[3] >>> 0, 12), k;
    }
    function k(l) {
        this.h = l, this.state = g.alloc(16, 0), this.cache = g.allocUnsafe(0);
    }
    k.prototype.ghash = function (l) {
        for (var m = -1; ++m < l.length;)
            this.state[m] ^= l[m];
        this._multiply();
    }, k.prototype._multiply = function () {
        for (var l, m, n, o = [
                    (l = this.h).readUInt32BE(0),
                    l.readUInt32BE(4),
                    l.readUInt32BE(8),
                    l.readUInt32BE(12)
                ], p = [
                    0,
                    0,
                    0,
                    0
                ], q = -1; ++q < 128;) {
            for (0 != (this.state[~~(q / 8)] & 1 << 7 - q % 8) && (p[0] ^= o[0], p[1] ^= o[1], p[2] ^= o[2], p[3] ^= o[3]), n = 0 != (1 & o[3]), m = 3; m > 0; m--)
                o[m] = o[m] >>> 1 | (1 & o[m - 1]) << 31;
            o[0] = o[0] >>> 1, n && (o[0] = -520093696 ^ o[0]);
        }
        this.state = i(p);
    }, k.prototype.update = function (l) {
        var m;
        for (this.cache = g.concat([
                this.cache,
                l
            ]); this.cache.length >= 16;)
            m = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(m);
    }, k.prototype.final = function (l, m) {
        return this.cache.length && this.ghash(g.concat([
            this.cache,
            h
        ], 16)), this.ghash(i([
            0,
            l,
            0,
            m
        ])), this.state;
    }, e.exports = k;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....').Buffer, i = d('.....');
    function j(k, l, m, n) {
        i.call(this), this._cipher = new g.AES(l), this._prev = h.from(m), this._cache = h.allocUnsafe(0), this._secCache = h.allocUnsafe(0), this._decrypt = n, this._mode = k;
    }
    d('.....')(j, i), j.prototype._update = function (k) {
        return this._mode.encrypt(this, k, this._decrypt);
    }, j.prototype._final = function () {
        this._cipher.scrub();
    }, e.exports = j;
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer, h = d('.....');
    e.exports = function (i, j, k, l) {
        if (g.isBuffer(i) || (i = g.from(i, 'binary')), j && (g.isBuffer(j) || (j = g.from(j, 'binary')), 8 !== j.length))
            throw new RangeError('salt should be Buffer with 8 byte length');
        for (var m = k / 8, n = g.alloc(m), o = g.alloc(l || 0), p = g.alloc(0); m > 0 || l > 0;) {
            var q = new h();
            q.update(p), q.update(i), j && q.update(j), p = q.digest();
            var r = 0;
            if (m > 0) {
                var s = n.length - m;
                r = Math.min(m, p.length), p.copy(n, s, 0, r), m -= r;
            }
            if (r < p.length && l > 0) {
                var t = o.length - l, u = Math.min(l, p.length - r);
                p.copy(o, t, r, r + u), l -= u;
            }
        }
        return p.fill(0), {
            key: n,
            iv: o
        };
    };
}), d.register('.....', function (e, f) {
    var g, h;
    a(e.exports, 'createDecipher', function () {
        return g;
    }, function (i) {
        return g = i;
    }), a(e.exports, 'createDecipheriv', function () {
        return h;
    }, function (i) {
        return h = i;
    });
    var i = d('.....'), j = d('.....').Buffer, k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....');
    function p(q, r, s) {
        m.call(this), this._cache = new _q(), this._last = void 0, this._cipher = new n.AES(r), this._prev = j.from(s), this._mode = q, this._autopadding = !0;
    }
    function _q() {
        this.cache = j.allocUnsafe(0);
    }
    function r(s, t, u) {
        var v = k[s.toLowerCase()];
        if (!v)
            throw new TypeError('invalid suite type');
        if ('string' == typeof u && (u = j.from(u)), 'GCM' !== v.mode && u.length !== v.iv)
            throw new TypeError('invalid iv length ' + u.length);
        if ('string' == typeof t && (t = j.from(t)), t.length !== v.key / 8)
            throw new TypeError('invalid key length ' + t.length);
        return 'stream' === v.type ? new l(v.module, t, u, !0) : 'auth' === v.type ? new i(v.module, t, u, !0) : new p(v.module, t, u);
    }
    v('.....')(p, m), p.prototype._update = function (t) {
        var u, v;
        this._cache.add(t);
        for (var w = []; u = this._cache.get(this._autopadding);)
            v = this._mode.decrypt(this, u), w.push(v);
        return j.concat(w);
    }, p.prototype._final = function () {
        var t = this._cache.flush();
        if (this._autopadding)
            return function (u) {
                var v = u[15];
                if (v < 1 || v > 16)
                    throw new Error('unable to decrypt data');
                var w = -1;
                for (; ++w < v;)
                    if (u[w + (16 - v)] !== v)
                        throw new Error('unable to decrypt data');
                if (16 === v)
                    return;
                return u.slice(0, 16 - v);
            }(this._mode.decrypt(this, t));
        if (t)
            throw new Error('data not multiple of block length');
    }, p.prototype.setAutoPadding = function (t) {
        return this._autopadding = !!t, this;
    }, _q.prototype.add = function (t) {
        this.cache = j.concat([
            this.cache,
            t
        ]);
    }, _q.prototype.get = function (t) {
        var u;
        if (t) {
            if (this.cache.length > 16)
                return u = this.cache.slice(0, 16), this.cache = this.cache.slice(16), u;
        } else if (this.cache.length >= 16)
            return u = this.cache.slice(0, 16), this.cache = this.cache.slice(16), u;
        return null;
    }, _q.prototype.flush = function () {
        if (this.cache.length)
            return this.cache;
    }, g = function (t, u) {
        var v = k[t.toLowerCase()];
        if (!v)
            throw new TypeError('invalid suite type');
        var w = o(u, !1, v.key, v.iv);
        return r(t, w.key, w.iv);
    }, h = r;
}), d.register('.....', function (e, f) {
    var g, h, i, j, k, l, m, n;
    a(e.exports, 'des-ecb', function () {
        return g;
    }, function (o) {
        return g = o;
    }), a(e.exports, 'des-cbc', function () {
        return h;
    }, function (o) {
        return h = o;
    }), a(e.exports, 'des', function () {
        return i;
    }, function (o) {
        return i = o;
    }), a(e.exports, 'des-ede3-cbc', function () {
        return j;
    }, function (o) {
        return j = o;
    }), a(e.exports, 'des3', function () {
        return k;
    }, function (o) {
        return k = o;
    }), a(e.exports, 'des-ede3', function () {
        return l;
    }, function (o) {
        return l = o;
    }), a(e.exports, 'des-ede-cbc', function () {
        return m;
    }, function (o) {
        return m = o;
    }), a(e.exports, 'des-ede', function () {
        return n;
    }, function (o) {
        return n = o;
    }), g = {
        key: 8,
        iv: 0
    }, h = i = {
        key: 8,
        iv: 8
    }, j = k = {
        key: 24,
        iv: 8
    }, l = {
        key: 24,
        iv: 0
    }, m = {
        key: 16,
        iv: 8
    }, n = {
        key: 16,
        iv: 0
    };
}), d.register('.....', function (e, f) {
    var g, h, i, j, k;
    a(e.exports, 'DiffieHellmanGroup', function () {
        return g;
    }, function (l) {
        return g = l;
    }), a(e.exports, 'createDiffieHellmanGroup', function () {
        return h;
    }, function (l) {
        return h = l;
    }), a(e.exports, 'getDiffieHellman', function () {
        return i;
    }, function (l) {
        return i = l;
    }), a(e.exports, 'createDiffieHellman', function () {
        return j;
    }, function (l) {
        return j = l;
    }), a(e.exports, 'DiffieHellman', function () {
        return k;
    }, function (l) {
        return k = l;
    });
    var l = d('.....').Buffer, m = d('.....'), n = d('.....'), o = d('.....');
    var p = {
        binary: !0,
        hex: !0,
        base64: !0
    };
    g = h = i = function (q) {
        var r = new l(n[q].prime, 'hex'), s = new l(n[q].gen, 'hex');
        return new o(r, s);
    }, j = k = function a(q, r, s, t) {
        return l.isBuffer(r) || void 0 === p[r] ? a(q, 'binary', r, s) : (r = r || 'binary', t = t || 'binary', s = s || new l([2]), l.isBuffer(s) || (s = new l(s, t)), 'number' == typeof q ? new o(m(q, s), s, !0) : (l.isBuffer(q) || (q = new l(q, r)), new o(q, s, !0)));
    };
}), d.register('.....', function (e, f) {
    var g = d('.....');
    e.exports = _x, _x.simpleSieve = _s, _x.fermatTest = _v;
    var h = d('.....'), i = new h(24), j = new (d('.....'))(), k = new h(1), l = new h(2), m = new h(5), n = (new h(16), new h(8), new h(10)), o = new h(3), p = (new h(7), new h(11)), q = new h(4), r = (new h(12), null);
    function _s(t) {
        for (var u = function () {
                    if (null !== r)
                        return r;
                    var v = [];
                    v[0] = 2;
                    for (var w = 1, x = 3; x < 1048576; x += 2) {
                        for (var y = Math.ceil(Math.sqrt(x)), z = 0; z < w && v[z] <= y && x % v[z] != 0; z++);
                        w !== z && v[z] <= y || (v[w++] = x);
                    }
                    return r = v, v;
                }(), v = 0; v < u.length; v++)
            if (0 === t.modn(u[v]))
                return 0 === t.cmpn(u[v]);
        return !0;
    }
    function _v(w) {
        var x = h.mont(w);
        return 0 === l.toRed(x).redPow(w.subn(1)).fromRed().cmpn(1);
    }
    function _x(y, z) {
        if (y < 16)
            return new h(2 === z || 5 === z ? [
                140,
                123
            ] : [
                140,
                39
            ]);
        var A, B;
        for (z = new h(z);;) {
            for (A = new h(v(Math.ceil(y / 8))); A.bitLength() > y;)
                A.ishrn(1);
            if (A.isEven() && A.iadd(k), A.testn(1) || A.iadd(l), z.cmp(l)) {
                if (!z.cmp(m))
                    for (; A.mod(n).cmp(o);)
                        A.iadd(q);
            } else
                for (; A.mod(i).cmp(p);)
                    A.iadd(q);
            if (_s(B = A.shrn(1)) && _s(A) && _v(B) && _v(A) && j.test(B) && j.test(A))
                return A;
        }
    }
}), d.register('.....', function (e, f) {
    !function (g, h) {
        function i(j, k) {
            if (!j)
                throw new Error(k || 'Assertion failed');
        }
        function j(k, l) {
            k.super_ = l;
            var m = function () {
            };
            i.prototype = l.prototype, k.prototype = new i(), k.prototype.constructor = k;
        }
        function l(m, n, o) {
            if (l.isBN(m))
                return m;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== m && ('le' !== n && 'be' !== n || (o = n, n = 10), this._init(m || 0, n || 10, o || 'be'));
        }
        var m;
        'object' == typeof g ? g.exports = l : h.BN = l, l.BN = l, l.wordSize = 26;
        try {
            m = d('.....').Buffer;
        } catch (g) {
        }
        function n(o, p, q) {
            for (var r = 0, s = Math.min(o.length, q), t = p; l < j; l++) {
                var u = o.charCodeAt(l) - 48;
                r <<= 4, r |= u >= 49 && u <= 54 ? u - 49 + 10 : u >= 17 && u <= 22 ? u - 17 + 10 : 15 & u;
            }
            return r;
        }
        function s(t, u, v, w) {
            for (var x = 0, y = Math.min(t.length, v), z = u; z < l; z++) {
                var A = t.charCodeAt(z) - 48;
                j *= w, j += n >= 49 ? n - 49 + 10 : n >= 17 ? n - 17 + 10 : n;
            }
            return j;
        }
        l.isBN = function (x) {
            return x instanceof l || null !== x && 'object' == typeof x && x.constructor.wordSize === l.wordSize && Array.isArray(x.words);
        }, l.max = function (x, y) {
            return x.cmp(y) > 0 ? x : y;
        }, l.min = function (x, y) {
            return x.cmp(y) < 0 ? x : y;
        }, l.prototype._init = function (x, y, z) {
            if ('number' == typeof x)
                return this._initNumber(x, y, z);
            if ('object' == typeof x)
                return this._initArray(x, y, z);
            'hex' === y && (y = 16), i(y === (0 | y) && y >= 2 && y <= 36);
            var A = 0;
            '-' === (x = x.toString().replace(/\s+/g, ''))[0] && A++, 16 === y ? this._parseHex(x, A) : this._parseBase(x, y, A), '-' === x[0] && (this.negative = 1), this.strip(), 'le' === z && this._initArray(this.toArray(), y, z);
        }, l.prototype._initNumber = function (x, y, z) {
            x < 0 && (this.negative = 1, x = -x), x < 67108864 ? (this.words = [67108863 & x], this.length = 1) : x < 4503599627370496 ? (this.words = [
                67108863 & x,
                x / 67108864 & 67108863
            ], this.length = 2) : (i(x < 9007199254740992), this.words = [
                67108863 & x,
                x / 67108864 & 67108863,
                1
            ], this.length = 3), 'le' === z && this._initArray(this.toArray(), y, z);
        }, l.prototype._initArray = function (x, y, z) {
            if (i('number' == typeof x.length), x.length <= 0)
                return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(x.length / 3), this.words = new Array(this.length);
            for (var A = 0; A < this.length; A++)
                this.words[A] = 0;
            var B, C, D = 0;
            if ('be' === z)
                for (A = x.length - 1, B = 0; A >= 0; A -= 3)
                    C = x[A] | x[A - 1] << 8 | x[A - 2] << 16, this.words[B] |= C << D & 67108863, this.words[B + 1] = C >>> 26 - D & 67108863, (D += 24) >= 26 && (D -= 26, B++);
            else if ('le' === z)
                for (A = 0, B = 0; A < x.length; A += 3)
                    C = x[A] | x[A + 1] << 8 | x[A + 2] << 16, this.words[B] |= C << D & 67108863, this.words[B + 1] = C >>> 26 - D & 67108863, (D += 24) >= 26 && (D -= 26, B++);
            return this.strip();
        }, l.prototype._parseHex = function (x, y) {
            this.length = Math.ceil((x.length - y) / 6), this.words = new Array(this.length);
            for (var z = 0; z < this.length; z++)
                this.words[z] = 0;
            var A, B, C = 0;
            for (z = x.length - 6, A = 0; z >= y; z -= 6)
                B = n(x, z, z + 6), this.words[A] |= B << C & 67108863, this.words[A + 1] |= B >>> 26 - C & 4194303, (C += 24) >= 26 && (C -= 26, A++);
            z + 6 !== y && (B = n(x, y, z + 6), this.words[A] |= B << C & 67108863, this.words[A + 1] |= B >>> 26 - C & 4194303), this.strip();
        }, l.prototype._parseBase = function (x, y, z) {
            this.words = [0], this.length = 1;
            for (var A = 0, B = 1; B <= 67108863; B *= y)
                A++;
            A--, B = B / y | 0;
            for (var C = x.length - z, D = C % A, E = Math.min(C, C - D) + z, F = 0, G = z; G < E; G += A)
                F = s(x, G, G + A, y), this.imuln(B), this.words[0] + F < 67108864 ? this.words[0] += F : this._iaddn(F);
            if (0 !== D) {
                var H = 1;
                for (F = s(x, G, x.length, y), G = 0; G < D; G++)
                    H *= y;
                this.imuln(H), this.words[0] + F < 67108864 ? this.words[0] += F : this._iaddn(F);
            }
        }, l.prototype.copy = function (x) {
            x.words = new Array(this.length);
            for (var y = 0; y < this.length; y++)
                x.words[y] = this.words[y];
            x.length = this.length, x.negative = this.negative, x.red = this.red;
        }, l.prototype.clone = function () {
            var x = new l(null);
            return this.copy(x), x;
        }, l.prototype._expand = function (x) {
            for (; this.length < x;)
                this.words[this.length++] = 0;
            return this;
        }, l.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1];)
                this.length--;
            return this._normSign();
        }, l.prototype._normSign = function () {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
        }, l.prototype.inspect = function () {
            return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
        };
        var x = [
                '',
                '0',
                '00',
                '000',
                '0000',
                '00000',
                '000000',
                '0000000',
                '00000000',
                '000000000',
                '0000000000',
                '00000000000',
                '000000000000',
                '0000000000000',
                '00000000000000',
                '000000000000000',
                '0000000000000000',
                '00000000000000000',
                '000000000000000000',
                '0000000000000000000',
                '00000000000000000000',
                '000000000000000000000',
                '0000000000000000000000',
                '00000000000000000000000',
                '000000000000000000000000',
                '0000000000000000000000000'
            ], y = [
                0,
                0,
                25,
                16,
                12,
                11,
                10,
                9,
                8,
                8,
                7,
                7,
                7,
                7,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5
            ], z = [
                0,
                0,
                33554432,
                43046721,
                16777216,
                48828125,
                60466176,
                40353607,
                16777216,
                43046721,
                10000000,
                19487171,
                35831808,
                62748517,
                7529536,
                11390625,
                16777216,
                24137569,
                34012224,
                47045881,
                64000000,
                4084101,
                5153632,
                6436343,
                7962624,
                9765625,
                11881376,
                14348907,
                17210368,
                20511149,
                24300000,
                28629151,
                33554432,
                39135393,
                45435424,
                52521875,
                60466176
            ];
        function A(B, C, D) {
            D.negative = C.negative ^ B.negative;
            var E = B.length + C.length | 0;
            D.length = E, E = E - 1 | 0;
            var F = 0 | B.words[0], G = 0 | C.words[0], H = j * l, I = 67108863 & H, J = H / 67108864 | 0;
            D.words[0] = n;
            for (var K = 1; K < E; K++) {
                for (var L = s >>> 26, M = 67108863 & s, N = Math.min(K, C.length - 1), O = Math.max(0, K - B.length + 1); O <= A; O++) {
                    var P = K - O | 0;
                    L += (H = (j = 0 | B.words[P]) * (l = 0 | C.words[O]) + M) / 67108864 | 0, M = 67108863 & H;
                }
                D.words[K] = 0 | M, s = 0 | L;
            }
            return 0 !== s ? D.words[K] = 0 | s : D.length--, D.strip();
        }
        l.prototype.toString = function (N, O) {
            var P;
            if (O = 0 | O || 1, 16 === (N = N || 10) || 'hex' === N) {
                P = '';
                for (var Q = 0, R = 0, S = 0; S < this.length; S++) {
                    var T = this.words[S], U = (16777215 & (T << Q | R)).toString(16);
                    P = 0 !== (R = T >>> 24 - Q & 16777215) || S !== this.length - 1 ? K[6 - U.length] + U + P : U + P, (Q += 2) >= 26 && (Q -= 26, S--);
                }
                for (0 !== R && (P = R.toString(16) + P); P.length % O != 0;)
                    P = '0' + P;
                return 0 !== this.negative && (P = '-' + P), P;
            }
            if (N === (0 | N) && N >= 2 && N <= 36) {
                var V = L[N], W = M[N];
                P = '';
                var X = this.clone();
                for (X.negative = 0; !X.isZero();) {
                    var Y = X.modn(W).toString(N);
                    P = (X = X.idivn(W)).isZero() ? Y + P : K[V - Y.length] + Y + P;
                }
                for (this.isZero() && (P = '0' + P); P.length % O != 0;)
                    P = '0' + P;
                return 0 !== this.negative && (P = '-' + P), P;
            }
            i(!1, 'Base should be between 2 and 36');
        }, l.prototype.toNumber = function () {
            var N = this.words[0];
            return 2 === this.length ? N += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? N += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && i(!1, 'Number can only safely store up to 53 bits'), 0 !== this.negative ? -N : N;
        }, l.prototype.toJSON = function () {
            return this.toString(16);
        }, l.prototype.toBuffer = function (N, O) {
            return i(void 0 !== H), this.toArrayLike(H, N, O);
        }, l.prototype.toArray = function (N, O) {
            return this.toArrayLike(Array, N, O);
        }, l.prototype.toArrayLike = function (N, O, P) {
            var Q = this.byteLength(), R = P || Math.max(1, Q);
            i(Q <= R, 'byte array longer than desired length'), i(R > 0, 'Requested array length <= 0'), this.strip();
            var S, T, U = 'le' === O, V = new N(R), W = this.clone();
            if (U) {
                for (T = 0; !W.isZero(); T++)
                    S = W.andln(255), W.iushrn(8), V[T] = S;
                for (; T < R; T++)
                    V[T] = 0;
            } else {
                for (T = 0; T < R - Q; T++)
                    V[T] = 0;
                for (T = 0; !W.isZero(); T++)
                    S = W.andln(255), W.iushrn(8), V[R - T - 1] = S;
            }
            return V;
        }, Math.clz32 ? l.prototype._countBits = function (N) {
            return 32 - Math.clz32(N);
        } : l.prototype._countBits = function (N) {
            var O = N, P = 0;
            return O >= 4096 && (P += 13, O >>>= 13), O >= 64 && (P += 7, O >>>= 7), O >= 8 && (P += 4, O >>>= 4), O >= 2 && (P += 2, O >>>= 2), P + O;
        }, l.prototype._zeroBits = function (N) {
            if (0 === N)
                return 26;
            var O = N, P = 0;
            return 0 == (8191 & O) && (P += 13, O >>>= 13), 0 == (127 & O) && (P += 7, O >>>= 7), 0 == (15 & O) && (P += 4, O >>>= 4), 0 == (3 & O) && (P += 2, O >>>= 2), 0 == (1 & O) && P++, P;
        }, l.prototype.bitLength = function () {
            var N = this.words[this.length - 1], O = this._countBits(N);
            return 26 * (this.length - 1) + O;
        }, l.prototype.zeroBits = function () {
            if (this.isZero())
                return 0;
            for (var N = 0, O = 0; O < this.length; O++) {
                var P = this._zeroBits(this.words[O]);
                if (N += P, 26 !== P)
                    break;
            }
            return N;
        }, l.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
        }, l.prototype.toTwos = function (N) {
            return 0 !== this.negative ? this.abs().inotn(N).iaddn(1) : this.clone();
        }, l.prototype.fromTwos = function (N) {
            return this.testn(N - 1) ? this.notn(N).iaddn(1).ineg() : this.clone();
        }, l.prototype.isNeg = function () {
            return 0 !== this.negative;
        }, l.prototype.neg = function () {
            return this.clone().ineg();
        }, l.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
        }, l.prototype.iuor = function (N) {
            for (; this.length < N.length;)
                this.words[this.length++] = 0;
            for (var O = 0; O < N.length; O++)
                this.words[O] = this.words[O] | N.words[O];
            return this.strip();
        }, l.prototype.ior = function (N) {
            return i(0 == (this.negative | N.negative)), this.iuor(N);
        }, l.prototype.or = function (N) {
            return this.length > N.length ? this.clone().ior(N) : N.clone().ior(this);
        }, l.prototype.uor = function (N) {
            return this.length > N.length ? this.clone().iuor(N) : N.clone().iuor(this);
        }, l.prototype.iuand = function (N) {
            var O;
            O = this.length > N.length ? N : this;
            for (var P = 0; P < O.length; P++)
                this.words[P] = this.words[P] & N.words[P];
            return this.length = O.length, this.strip();
        }, l.prototype.iand = function (N) {
            return i(0 == (this.negative | N.negative)), this.iuand(N);
        }, l.prototype.and = function (N) {
            return this.length > N.length ? this.clone().iand(N) : N.clone().iand(this);
        }, l.prototype.uand = function (N) {
            return this.length > N.length ? this.clone().iuand(N) : N.clone().iuand(this);
        }, l.prototype.iuxor = function (N) {
            var O, P;
            this.length > N.length ? (O = this, P = N) : (O = N, P = this);
            for (var Q = 0; Q < P.length; Q++)
                this.words[Q] = O.words[Q] ^ P.words[Q];
            if (this !== O)
                for (; Q < O.length; Q++)
                    this.words[Q] = O.words[Q];
            return this.length = O.length, this.strip();
        }, l.prototype.ixor = function (N) {
            return i(0 == (this.negative | N.negative)), this.iuxor(N);
        }, l.prototype.xor = function (N) {
            return this.length > N.length ? this.clone().ixor(N) : N.clone().ixor(this);
        }, l.prototype.uxor = function (N) {
            return this.length > N.length ? this.clone().iuxor(N) : N.clone().iuxor(this);
        }, l.prototype.inotn = function (N) {
            i('number' == typeof N && N >= 0);
            var O = 0 | Math.ceil(N / 26), P = N % 26;
            this._expand(O), P > 0 && O--;
            for (var Q = 0; Q < O; Q++)
                this.words[Q] = 67108863 & ~this.words[Q];
            return P > 0 && (this.words[Q] = ~this.words[Q] & 67108863 >> 26 - P), this.strip();
        }, l.prototype.notn = function (N) {
            return this.clone().inotn(N);
        }, l.prototype.setn = function (N, O) {
            i('number' == typeof N && N >= 0);
            var P = N / 26 | 0, Q = N % 26;
            return this._expand(P + 1), this.words[P] = O ? this.words[P] | 1 << Q : this.words[P] & ~(1 << Q), this.strip();
        }, l.prototype.iadd = function (N) {
            var O, P, Q;
            if (0 !== this.negative && 0 === N.negative)
                return this.negative = 0, O = this.isub(N), this.negative ^= 1, this._normSign();
            if (0 === this.negative && 0 !== N.negative)
                return N.negative = 0, O = this.isub(N), N.negative = 1, O._normSign();
            this.length > N.length ? (P = this, Q = N) : (P = N, Q = this);
            for (var R = 0, S = 0; S < Q.length; S++)
                O = (0 | P.words[S]) + (0 | Q.words[S]) + R, this.words[S] = 67108863 & O, R = O >>> 26;
            for (; 0 !== R && S < P.length; S++)
                O = (0 | P.words[S]) + R, this.words[S] = 67108863 & O, R = O >>> 26;
            if (this.length = P.length, 0 !== R)
                this.words[this.length] = R, this.length++;
            else if (P !== this)
                for (; S < P.length; S++)
                    this.words[S] = P.words[S];
            return this;
        }, l.prototype.add = function (N) {
            var O;
            return 0 !== N.negative && 0 === this.negative ? (N.negative = 0, O = this.sub(N), N.negative ^= 1, O) : 0 === N.negative && 0 !== this.negative ? (this.negative = 0, O = N.sub(this), this.negative = 1, O) : this.length > N.length ? this.clone().iadd(N) : N.clone().iadd(this);
        }, l.prototype.isub = function (N) {
            if (0 !== N.negative) {
                N.negative = 0;
                var O = this.iadd(N);
                return N.negative = 1, O._normSign();
            }
            if (0 !== this.negative)
                return this.negative = 0, this.iadd(N), this.negative = 1, this._normSign();
            var P, Q, R = this.cmp(N);
            if (0 === R)
                return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            R > 0 ? (P = this, Q = N) : (P = N, Q = this);
            for (var S = 0, T = 0; T < Q.length; T++)
                S = (O = (0 | P.words[T]) - (0 | Q.words[T]) + S) >> 26, this.words[T] = 67108863 & O;
            for (; 0 !== S && T < P.length; T++)
                S = (O = (0 | P.words[T]) + S) >> 26, this.words[T] = 67108863 & O;
            if (0 === S && T < P.length && P !== this)
                for (; T < P.length; T++)
                    this.words[T] = P.words[T];
            return this.length = Math.max(this.length, T), P !== this && (this.negative = 1), this.strip();
        }, l.prototype.sub = function (N) {
            return this.clone().isub(N);
        };
        var N = function (O, P, Q) {
            var R, S, T, U = O.words, V = P.words, W = Q.words, X = 0, Y = 0 | U[0], Z = 8191 & Y, $ = Y >>> 13, ab = 0 | U[1], bb = 8191 & ab, cb = ab >>> 13, db = 0 | U[2], eb = 8191 & db, fb = db >>> 13, gb = 0 | U[3], hb = 8191 & gb, ib = gb >>> 13, jb = 0 | U[4], kb = 8191 & jb, lb = jb >>> 13, mb = 0 | U[5], nb = 8191 & mb, ob = mb >>> 13, pb = 0 | U[6], qb = 8191 & pb, rb = pb >>> 13, sb = 0 | U[7], tb = 8191 & sb, ub = sb >>> 13, vb = 0 | U[8], wb = 8191 & vb, xb = vb >>> 13, yb = 0 | U[9], zb = 8191 & yb, Ab = yb >>> 13, Bb = 0 | V[0], Cb = 8191 & Bb, Db = Bb >>> 13, Eb = 0 | V[1], Fb = 8191 & Eb, Gb = Eb >>> 13, Hb = 0 | V[2], Ib = 8191 & Hb, Jb = Hb >>> 13, Kb = 0 | V[3], Lb = 8191 & Kb, Mb = Kb >>> 13, Nb = 0 | V[4], Ob = 8191 & Nb, Pb = Nb >>> 13, Qb = 0 | V[5], Rb = 8191 & Qb, Sb = Qb >>> 13, Tb = 0 | V[6], Ub = 8191 & Tb, Vb = Tb >>> 13, Wb = 0 | V[7], Xb = 8191 & Wb, Yb = Wb >>> 13, Zb = 0 | V[8], $b = 8191 & Zb, ac = Zb >>> 13, bc = 0 | V[9], cc = 8191 & bc, dc = bc >>> 13;
            Q.negative = O.negative ^ P.negative, Q.length = 19;
            var ec = (X + (R = Math.imul(Z, Cb)) | 0) + ((8191 & (S = (S = Math.imul(Z, Db)) + Math.imul($, Cb) | 0)) << 13) | 0;
            X = ((T = Math.imul($, Db)) + (S >>> 13) | 0) + (ec >>> 26) | 0, ec &= 67108863, R = Math.imul(bb, Cb), S = (S = Math.imul(bb, Db)) + Math.imul(cb, Cb) | 0, T = Math.imul(cb, Db);
            var fc = (X + (R = R + Math.imul(Z, Fb) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(Z, Gb) | 0) + Math.imul($, Fb) | 0)) << 13) | 0;
            X = ((T = T + Math.imul($, Gb) | 0) + (S >>> 13) | 0) + (fc >>> 26) | 0, fc &= 67108863, R = Math.imul(eb, Cb), S = (S = Math.imul(eb, Db)) + Math.imul(fb, Cb) | 0, T = Math.imul(fb, Db), R = R + Math.imul(bb, Fb) | 0, S = (S = S + Math.imul(bb, Gb) | 0) + Math.imul(cb, Fb) | 0, T = T + Math.imul(cb, Gb) | 0;
            var gc = (X + (R = R + Math.imul(Z, Ib) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(Z, Jb) | 0) + Math.imul($, Ib) | 0)) << 13) | 0;
            X = ((T = T + Math.imul($, Jb) | 0) + (S >>> 13) | 0) + (gc >>> 26) | 0, gc &= 67108863, R = Math.imul(hb, Cb), S = (S = Math.imul(hb, Db)) + Math.imul(ib, Cb) | 0, T = Math.imul(ib, Db), R = R + Math.imul(eb, Fb) | 0, S = (S = S + Math.imul(eb, Gb) | 0) + Math.imul(fb, Fb) | 0, T = T + Math.imul(fb, Gb) | 0, R = R + Math.imul(bb, Ib) | 0, S = (S = S + Math.imul(bb, Jb) | 0) + Math.imul(cb, Ib) | 0, T = T + Math.imul(cb, Jb) | 0;
            var hc = (X + (R = R + Math.imul(Z, Lb) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(Z, Mb) | 0) + Math.imul($, Lb) | 0)) << 13) | 0;
            X = ((T = T + Math.imul($, Mb) | 0) + (S >>> 13) | 0) + (hc >>> 26) | 0, hc &= 67108863, R = Math.imul(kb, Cb), S = (S = Math.imul(kb, Db)) + Math.imul(lb, Cb) | 0, T = Math.imul(lb, Db), R = R + Math.imul(hb, Fb) | 0, S = (S = S + Math.imul(hb, Gb) | 0) + Math.imul(ib, Fb) | 0, T = T + Math.imul(ib, Gb) | 0, R = R + Math.imul(eb, Ib) | 0, S = (S = S + Math.imul(eb, Jb) | 0) + Math.imul(fb, Ib) | 0, T = T + Math.imul(fb, Jb) | 0, R = R + Math.imul(bb, Lb) | 0, S = (S = S + Math.imul(bb, Mb) | 0) + Math.imul(cb, Lb) | 0, T = T + Math.imul(cb, Mb) | 0;
            var ic = (X + (R = R + Math.imul(Z, Ob) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(Z, Pb) | 0) + Math.imul($, Ob) | 0)) << 13) | 0;
            X = ((T = T + Math.imul($, Pb) | 0) + (S >>> 13) | 0) + (ic >>> 26) | 0, ic &= 67108863, R = Math.imul(nb, Cb), S = (S = Math.imul(nb, Db)) + Math.imul(ob, Cb) | 0, T = Math.imul(ob, Db), R = R + Math.imul(kb, Fb) | 0, S = (S = S + Math.imul(kb, Gb) | 0) + Math.imul(lb, Fb) | 0, T = T + Math.imul(lb, Gb) | 0, R = R + Math.imul(hb, Ib) | 0, S = (S = S + Math.imul(hb, Jb) | 0) + Math.imul(ib, Ib) | 0, T = T + Math.imul(ib, Jb) | 0, R = R + Math.imul(eb, Lb) | 0, S = (S = S + Math.imul(eb, Mb) | 0) + Math.imul(fb, Lb) | 0, T = T + Math.imul(fb, Mb) | 0, R = R + Math.imul(bb, Ob) | 0, S = (S = S + Math.imul(bb, Pb) | 0) + Math.imul(cb, Ob) | 0, T = T + Math.imul(cb, Pb) | 0;
            var jc = (X + (R = R + Math.imul(Z, Rb) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(Z, Sb) | 0) + Math.imul($, Rb) | 0)) << 13) | 0;
            X = ((T = T + Math.imul($, Sb) | 0) + (S >>> 13) | 0) + (jc >>> 26) | 0, jc &= 67108863, R = Math.imul(qb, Cb), S = (S = Math.imul(qb, Db)) + Math.imul(rb, Cb) | 0, T = Math.imul(rb, Db), R = R + Math.imul(nb, Fb) | 0, S = (S = S + Math.imul(nb, Gb) | 0) + Math.imul(ob, Fb) | 0, T = T + Math.imul(ob, Gb) | 0, R = R + Math.imul(kb, Ib) | 0, S = (S = S + Math.imul(kb, Jb) | 0) + Math.imul(lb, Ib) | 0, T = T + Math.imul(lb, Jb) | 0, R = R + Math.imul(hb, Lb) | 0, S = (S = S + Math.imul(hb, Mb) | 0) + Math.imul(ib, Lb) | 0, T = T + Math.imul(ib, Mb) | 0, R = R + Math.imul(eb, Ob) | 0, S = (S = S + Math.imul(eb, Pb) | 0) + Math.imul(fb, Ob) | 0, T = T + Math.imul(fb, Pb) | 0, R = R + Math.imul(bb, Rb) | 0, S = (S = S + Math.imul(bb, Sb) | 0) + Math.imul(cb, Rb) | 0, T = T + Math.imul(cb, Sb) | 0;
            var kc = (X + (R = R + Math.imul(Z, Ub) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(Z, Vb) | 0) + Math.imul($, Ub) | 0)) << 13) | 0;
            X = ((T = T + Math.imul($, Vb) | 0) + (S >>> 13) | 0) + (kc >>> 26) | 0, kc &= 67108863, R = Math.imul(tb, Cb), S = (S = Math.imul(tb, Db)) + Math.imul(ub, Cb) | 0, T = Math.imul(ub, Db), R = R + Math.imul(qb, Fb) | 0, S = (S = S + Math.imul(qb, Gb) | 0) + Math.imul(rb, Fb) | 0, T = T + Math.imul(rb, Gb) | 0, R = R + Math.imul(nb, Ib) | 0, S = (S = S + Math.imul(nb, Jb) | 0) + Math.imul(ob, Ib) | 0, T = T + Math.imul(ob, Jb) | 0, R = R + Math.imul(kb, Lb) | 0, S = (S = S + Math.imul(kb, Mb) | 0) + Math.imul(lb, Lb) | 0, T = T + Math.imul(lb, Mb) | 0, R = R + Math.imul(hb, Ob) | 0, S = (S = S + Math.imul(hb, Pb) | 0) + Math.imul(ib, Ob) | 0, T = T + Math.imul(ib, Pb) | 0, R = R + Math.imul(eb, Rb) | 0, S = (S = S + Math.imul(eb, Sb) | 0) + Math.imul(fb, Rb) | 0, T = T + Math.imul(fb, Sb) | 0, R = R + Math.imul(bb, Ub) | 0, S = (S = S + Math.imul(bb, Vb) | 0) + Math.imul(cb, Ub) | 0, T = T + Math.imul(cb, Vb) | 0;
            var lc = (X + (R = R + Math.imul(Z, Xb) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(Z, Yb) | 0) + Math.imul($, Xb) | 0)) << 13) | 0;
            X = ((T = T + Math.imul($, Yb) | 0) + (S >>> 13) | 0) + (lc >>> 26) | 0, lc &= 67108863, R = Math.imul(wb, Cb), S = (S = Math.imul(wb, Db)) + Math.imul(xb, Cb) | 0, T = Math.imul(xb, Db), R = R + Math.imul(tb, Fb) | 0, S = (S = S + Math.imul(tb, Gb) | 0) + Math.imul(ub, Fb) | 0, T = T + Math.imul(ub, Gb) | 0, R = R + Math.imul(qb, Ib) | 0, S = (S = S + Math.imul(qb, Jb) | 0) + Math.imul(rb, Ib) | 0, T = T + Math.imul(rb, Jb) | 0, R = R + Math.imul(nb, Lb) | 0, S = (S = S + Math.imul(nb, Mb) | 0) + Math.imul(ob, Lb) | 0, T = T + Math.imul(ob, Mb) | 0, R = R + Math.imul(kb, Ob) | 0, S = (S = S + Math.imul(kb, Pb) | 0) + Math.imul(lb, Ob) | 0, T = T + Math.imul(lb, Pb) | 0, R = R + Math.imul(hb, Rb) | 0, S = (S = S + Math.imul(hb, Sb) | 0) + Math.imul(ib, Rb) | 0, T = T + Math.imul(ib, Sb) | 0, R = R + Math.imul(eb, Ub) | 0, S = (S = S + Math.imul(eb, Vb) | 0) + Math.imul(fb, Ub) | 0, T = T + Math.imul(fb, Vb) | 0, R = R + Math.imul(bb, Xb) | 0, S = (S = S + Math.imul(bb, Yb) | 0) + Math.imul(cb, Xb) | 0, T = T + Math.imul(cb, Yb) | 0;
            var mc = (X + (R = R + Math.imul(Z, $b) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(Z, ac) | 0) + Math.imul($, $b) | 0)) << 13) | 0;
            X = ((T = T + Math.imul($, ac) | 0) + (S >>> 13) | 0) + (mc >>> 26) | 0, mc &= 67108863, R = Math.imul(zb, Cb), S = (S = Math.imul(zb, Db)) + Math.imul(Ab, Cb) | 0, T = Math.imul(Ab, Db), R = R + Math.imul(wb, Fb) | 0, S = (S = S + Math.imul(wb, Gb) | 0) + Math.imul(xb, Fb) | 0, T = T + Math.imul(xb, Gb) | 0, R = R + Math.imul(tb, Ib) | 0, S = (S = S + Math.imul(tb, Jb) | 0) + Math.imul(ub, Ib) | 0, T = T + Math.imul(ub, Jb) | 0, R = R + Math.imul(qb, Lb) | 0, S = (S = S + Math.imul(qb, Mb) | 0) + Math.imul(rb, Lb) | 0, T = T + Math.imul(rb, Mb) | 0, R = R + Math.imul(nb, Ob) | 0, S = (S = S + Math.imul(nb, Pb) | 0) + Math.imul(ob, Ob) | 0, T = T + Math.imul(ob, Pb) | 0, R = R + Math.imul(kb, Rb) | 0, S = (S = S + Math.imul(kb, Sb) | 0) + Math.imul(lb, Rb) | 0, T = T + Math.imul(lb, Sb) | 0, R = R + Math.imul(hb, Ub) | 0, S = (S = S + Math.imul(hb, Vb) | 0) + Math.imul(ib, Ub) | 0, T = T + Math.imul(ib, Vb) | 0, R = R + Math.imul(eb, Xb) | 0, S = (S = S + Math.imul(eb, Yb) | 0) + Math.imul(fb, Xb) | 0, T = T + Math.imul(fb, Yb) | 0, R = R + Math.imul(bb, $b) | 0, S = (S = S + Math.imul(bb, ac) | 0) + Math.imul(cb, $b) | 0, T = T + Math.imul(cb, ac) | 0;
            var nc = (X + (R = R + Math.imul(Z, cc) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(Z, dc) | 0) + Math.imul($, cc) | 0)) << 13) | 0;
            X = ((T = T + Math.imul($, dc) | 0) + (S >>> 13) | 0) + (nc >>> 26) | 0, nc &= 67108863, R = Math.imul(zb, Fb), S = (S = Math.imul(zb, Gb)) + Math.imul(Ab, Fb) | 0, T = Math.imul(Ab, Gb), R = R + Math.imul(wb, Ib) | 0, S = (S = S + Math.imul(wb, Jb) | 0) + Math.imul(xb, Ib) | 0, T = T + Math.imul(xb, Jb) | 0, R = R + Math.imul(tb, Lb) | 0, S = (S = S + Math.imul(tb, Mb) | 0) + Math.imul(ub, Lb) | 0, T = T + Math.imul(ub, Mb) | 0, R = R + Math.imul(qb, Ob) | 0, S = (S = S + Math.imul(qb, Pb) | 0) + Math.imul(rb, Ob) | 0, T = T + Math.imul(rb, Pb) | 0, R = R + Math.imul(nb, Rb) | 0, S = (S = S + Math.imul(nb, Sb) | 0) + Math.imul(ob, Rb) | 0, T = T + Math.imul(ob, Sb) | 0, R = R + Math.imul(kb, Ub) | 0, S = (S = S + Math.imul(kb, Vb) | 0) + Math.imul(lb, Ub) | 0, T = T + Math.imul(lb, Vb) | 0, R = R + Math.imul(hb, Xb) | 0, S = (S = S + Math.imul(hb, Yb) | 0) + Math.imul(ib, Xb) | 0, T = T + Math.imul(ib, Yb) | 0, R = R + Math.imul(eb, $b) | 0, S = (S = S + Math.imul(eb, ac) | 0) + Math.imul(fb, $b) | 0, T = T + Math.imul(fb, ac) | 0;
            var oc = (X + (R = R + Math.imul(bb, cc) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(bb, dc) | 0) + Math.imul(cb, cc) | 0)) << 13) | 0;
            X = ((T = T + Math.imul(cb, dc) | 0) + (S >>> 13) | 0) + (oc >>> 26) | 0, oc &= 67108863, R = Math.imul(zb, Ib), S = (S = Math.imul(zb, Jb)) + Math.imul(Ab, Ib) | 0, T = Math.imul(Ab, Jb), R = R + Math.imul(wb, Lb) | 0, S = (S = S + Math.imul(wb, Mb) | 0) + Math.imul(xb, Lb) | 0, T = T + Math.imul(xb, Mb) | 0, R = R + Math.imul(tb, Ob) | 0, S = (S = S + Math.imul(tb, Pb) | 0) + Math.imul(ub, Ob) | 0, T = T + Math.imul(ub, Pb) | 0, R = R + Math.imul(qb, Rb) | 0, S = (S = S + Math.imul(qb, Sb) | 0) + Math.imul(rb, Rb) | 0, T = T + Math.imul(rb, Sb) | 0, R = R + Math.imul(nb, Ub) | 0, S = (S = S + Math.imul(nb, Vb) | 0) + Math.imul(ob, Ub) | 0, T = T + Math.imul(ob, Vb) | 0, R = R + Math.imul(kb, Xb) | 0, S = (S = S + Math.imul(kb, Yb) | 0) + Math.imul(lb, Xb) | 0, T = T + Math.imul(lb, Yb) | 0, R = R + Math.imul(hb, $b) | 0, S = (S = S + Math.imul(hb, ac) | 0) + Math.imul(ib, $b) | 0, T = T + Math.imul(ib, ac) | 0;
            var pc = (X + (R = R + Math.imul(eb, cc) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(eb, dc) | 0) + Math.imul(fb, cc) | 0)) << 13) | 0;
            X = ((T = T + Math.imul(fb, dc) | 0) + (S >>> 13) | 0) + (pc >>> 26) | 0, pc &= 67108863, R = Math.imul(zb, Lb), S = (S = Math.imul(zb, Mb)) + Math.imul(Ab, Lb) | 0, T = Math.imul(Ab, Mb), R = R + Math.imul(wb, Ob) | 0, S = (S = S + Math.imul(wb, Pb) | 0) + Math.imul(xb, Ob) | 0, T = T + Math.imul(xb, Pb) | 0, R = R + Math.imul(tb, Rb) | 0, S = (S = S + Math.imul(tb, Sb) | 0) + Math.imul(ub, Rb) | 0, T = T + Math.imul(ub, Sb) | 0, R = R + Math.imul(qb, Ub) | 0, S = (S = S + Math.imul(qb, Vb) | 0) + Math.imul(rb, Ub) | 0, T = T + Math.imul(rb, Vb) | 0, R = R + Math.imul(nb, Xb) | 0, S = (S = S + Math.imul(nb, Yb) | 0) + Math.imul(ob, Xb) | 0, T = T + Math.imul(ob, Yb) | 0, R = R + Math.imul(kb, $b) | 0, S = (S = S + Math.imul(kb, ac) | 0) + Math.imul(lb, $b) | 0, T = T + Math.imul(lb, ac) | 0;
            var qc = (X + (R = R + Math.imul(hb, cc) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(hb, dc) | 0) + Math.imul(ib, cc) | 0)) << 13) | 0;
            X = ((T = T + Math.imul(ib, dc) | 0) + (S >>> 13) | 0) + (qc >>> 26) | 0, qc &= 67108863, R = Math.imul(zb, Ob), S = (S = Math.imul(zb, Pb)) + Math.imul(Ab, Ob) | 0, T = Math.imul(Ab, Pb), R = R + Math.imul(wb, Rb) | 0, S = (S = S + Math.imul(wb, Sb) | 0) + Math.imul(xb, Rb) | 0, T = T + Math.imul(xb, Sb) | 0, R = R + Math.imul(tb, Ub) | 0, S = (S = S + Math.imul(tb, Vb) | 0) + Math.imul(ub, Ub) | 0, T = T + Math.imul(ub, Vb) | 0, R = R + Math.imul(qb, Xb) | 0, S = (S = S + Math.imul(qb, Yb) | 0) + Math.imul(rb, Xb) | 0, T = T + Math.imul(rb, Yb) | 0, R = R + Math.imul(nb, $b) | 0, S = (S = S + Math.imul(nb, ac) | 0) + Math.imul(ob, $b) | 0, T = T + Math.imul(ob, ac) | 0;
            var rc = (X + (R = R + Math.imul(kb, cc) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(kb, dc) | 0) + Math.imul(lb, cc) | 0)) << 13) | 0;
            X = ((T = T + Math.imul(lb, dc) | 0) + (S >>> 13) | 0) + (rc >>> 26) | 0, rc &= 67108863, R = Math.imul(zb, Rb), S = (S = Math.imul(zb, Sb)) + Math.imul(Ab, Rb) | 0, T = Math.imul(Ab, Sb), R = R + Math.imul(wb, Ub) | 0, S = (S = S + Math.imul(wb, Vb) | 0) + Math.imul(xb, Ub) | 0, T = T + Math.imul(xb, Vb) | 0, R = R + Math.imul(tb, Xb) | 0, S = (S = S + Math.imul(tb, Yb) | 0) + Math.imul(ub, Xb) | 0, T = T + Math.imul(ub, Yb) | 0, R = R + Math.imul(qb, $b) | 0, S = (S = S + Math.imul(qb, ac) | 0) + Math.imul(rb, $b) | 0, T = T + Math.imul(rb, ac) | 0;
            var sc = (X + (R = R + Math.imul(nb, cc) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(nb, dc) | 0) + Math.imul(ob, cc) | 0)) << 13) | 0;
            X = ((T = T + Math.imul(ob, dc) | 0) + (S >>> 13) | 0) + (sc >>> 26) | 0, sc &= 67108863, R = Math.imul(zb, Ub), S = (S = Math.imul(zb, Vb)) + Math.imul(Ab, Ub) | 0, T = Math.imul(Ab, Vb), R = R + Math.imul(wb, Xb) | 0, S = (S = S + Math.imul(wb, Yb) | 0) + Math.imul(xb, Xb) | 0, T = T + Math.imul(xb, Yb) | 0, R = R + Math.imul(tb, $b) | 0, S = (S = S + Math.imul(tb, ac) | 0) + Math.imul(ub, $b) | 0, T = T + Math.imul(ub, ac) | 0;
            var tc = (X + (R = R + Math.imul(qb, cc) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(qb, dc) | 0) + Math.imul(rb, cc) | 0)) << 13) | 0;
            X = ((T = T + Math.imul(rb, dc) | 0) + (S >>> 13) | 0) + (tc >>> 26) | 0, tc &= 67108863, R = Math.imul(zb, Xb), S = (S = Math.imul(zb, Yb)) + Math.imul(Ab, Xb) | 0, T = Math.imul(Ab, Yb), R = R + Math.imul(wb, $b) | 0, S = (S = S + Math.imul(wb, ac) | 0) + Math.imul(xb, $b) | 0, T = T + Math.imul(xb, ac) | 0;
            var uc = (X + (R = R + Math.imul(tb, cc) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(tb, dc) | 0) + Math.imul(ub, cc) | 0)) << 13) | 0;
            X = ((T = T + Math.imul(ub, dc) | 0) + (S >>> 13) | 0) + (uc >>> 26) | 0, uc &= 67108863, R = Math.imul(zb, $b), S = (S = Math.imul(zb, ac)) + Math.imul(Ab, $b) | 0, T = Math.imul(Ab, ac);
            var vc = (X + (R = R + Math.imul(wb, cc) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(wb, dc) | 0) + Math.imul(xb, cc) | 0)) << 13) | 0;
            X = ((T = T + Math.imul(xb, dc) | 0) + (S >>> 13) | 0) + (vc >>> 26) | 0, vc &= 67108863;
            var wc = (X + (R = Math.imul(zb, cc)) | 0) + ((8191 & (S = (S = Math.imul(zb, dc)) + Math.imul(Ab, cc) | 0)) << 13) | 0;
            return X = ((T = Math.imul(Ab, dc)) + (S >>> 13) | 0) + (wc >>> 26) | 0, wc &= 67108863, W[0] = ec, W[1] = fc, W[2] = gc, W[3] = hc, W[4] = ic, W[5] = jc, W[6] = kc, W[7] = lc, W[8] = mc, W[9] = nc, W[10] = oc, W[11] = pc, W[12] = qc, W[13] = rc, W[14] = sc, W[15] = tc, W[16] = uc, W[17] = vc, W[18] = wc, 0 !== X && (W[19] = X, Q.length++), Q;
        };
        function O(P, Q, R) {
            return new _P().mulp(P, Q, R);
        }
        function _P(Q, R) {
            this.x = Q, this.y = R;
        }
        Math.imul || (N = A), l.prototype.mulTo = function (Q, R) {
            var S, T = this.length + Q.length;
            return S = 10 === this.length && 10 === Q.length ? N(this, Q, R) : T < 63 ? A(this, Q, R) : T < 1024 ? function (U, V, W) {
                W.negative = V.negative ^ U.negative, W.length = U.length + V.length;
                for (var X = 0, Y = 0, Z = 0; Z < W.length - 1; Z++) {
                    var $ = Y;
                    Y = 0;
                    for (var ab = 67108863 & X, bb = Math.min(Z, V.length - 1), cb = Math.max(0, Z - U.length + 1); cb <= bb; cb++) {
                        var db = Z - cb, eb = (0 | U.words[db]) * (0 | V.words[cb]), fb = 67108863 & eb;
                        ab = 67108863 & (fb = fb + ab | 0), Y += ($ = ($ = $ + (eb / 67108864 | 0) | 0) + (fb >>> 26) | 0) >>> 26, $ &= 67108863;
                    }
                    W.words[Z] = ab, X = $, $ = Y;
                }
                return 0 !== X ? W.words[Z] = X : W.length--, W.strip();
            }(this, Q, R) : O(this, Q, R), S;
        }, _P.prototype.makeRBT = function (Q) {
            for (var R = new Array(Q), S = l.prototype._countBits(Q) - 1, T = 0; T < Q; T++)
                R[T] = this.revBin(T, S, Q);
            return R;
        }, _P.prototype.revBin = function (Q, R, S) {
            if (0 === Q || Q === S - 1)
                return Q;
            for (var T = 0, U = 0; U < R; U++)
                T |= (1 & Q) << R - U - 1, Q >>= 1;
            return T;
        }, _P.prototype.permute = function (Q, R, S, T, U, V) {
            for (var W = 0; W < V; W++)
                T[W] = R[Q[W]], U[W] = S[Q[W]];
        }, _P.prototype.transform = function (Q, R, S, T, U, V) {
            this.permute(V, Q, R, S, T, U);
            for (var W = 1; W < U; W <<= 1)
                for (var X = W << 1, Y = Math.cos(2 * Math.PI / X), Z = Math.sin(2 * Math.PI / X), $ = 0; $ < U; $ += X)
                    for (var ab = Y, bb = Z, cb = 0; cb < W; cb++) {
                        var db = S[$ + cb], eb = T[$ + cb], fb = S[$ + cb + W], gb = T[$ + cb + W], hb = ab * fb - bb * gb;
                        gb = ab * gb + bb * fb, fb = hb, S[$ + cb] = db + fb, T[$ + cb] = eb + gb, S[$ + cb + W] = db - fb, T[$ + cb + W] = eb - gb, cb !== X && (hb = Y * ab - Z * bb, bb = Y * bb + Z * ab, ab = hb);
                    }
        }, _P.prototype.guessLen13b = function (Q, R) {
            var S = 1 | Math.max(R, Q), T = 1 & S, U = 0;
            for (S = S / 2 | 0; S; S >>>= 1)
                U++;
            return 1 << U + 1 + T;
        }, _P.prototype.conjugate = function (Q, R, S) {
            if (!(S <= 1))
                for (var T = 0; T < S / 2; T++) {
                    var U = Q[T];
                    Q[T] = Q[S - T - 1], Q[S - T - 1] = U, U = R[T], R[T] = -R[S - T - 1], R[S - T - 1] = -U;
                }
        }, _P.prototype.normalize13b = function (Q, R) {
            for (var S = 0, T = 0; T < R / 2; T++) {
                var U = 8192 * Math.round(Q[2 * T + 1] / R) + Math.round(Q[2 * T] / R) + S;
                Q[T] = 67108863 & U, S = U < 67108864 ? 0 : U / 67108864 | 0;
            }
            return Q;
        }, _P.prototype.convert13b = function (Q, R, S, T) {
            for (var U = 0, V = 0; V < R; V++)
                U += 0 | Q[V], S[2 * V] = 8191 & U, U >>>= 13, S[2 * V + 1] = 8191 & U, U >>>= 13;
            for (V = 2 * R; V < T; ++V)
                S[V] = 0;
            i(0 === U), i(0 == (-8192 & U));
        }, _P.prototype.stub = function (Q) {
            for (var R = new Array(Q), S = 0; S < Q; S++)
                R[S] = 0;
            return R;
        }, _P.prototype.mulp = function (Q, R, S) {
            var T = 2 * this.guessLen13b(Q.length, R.length), U = this.makeRBT(T), V = this.stub(T), W = new Array(T), X = new Array(T), Y = new Array(T), Z = new Array(T), $ = new Array(T), ab = new Array(T), bb = S.words;
            bb.length = T, this.convert13b(Q.words, Q.length, W, T), this.convert13b(R.words, R.length, Z, T), this.transform(W, V, X, Y, T, U), this.transform(Z, V, $, ab, T, U);
            for (var cb = 0; cb < T; cb++) {
                var db = X[cb] * $[cb] - Y[cb] * ab[cb];
                Y[cb] = X[cb] * ab[cb] + Y[cb] * $[cb], X[cb] = db;
            }
            return this.conjugate(X, Y, T), this.transform(X, Y, bb, V, T, U), this.conjugate(bb, V, T), this.normalize13b(bb, T), S.negative = Q.negative ^ R.negative, S.length = Q.length + R.length, S.strip();
        }, l.prototype.mul = function (Q) {
            var R = new l(null);
            return R.words = new Array(this.length + Q.length), this.mulTo(Q, R);
        }, l.prototype.mulf = function (Q) {
            var R = new l(null);
            return R.words = new Array(this.length + Q.length), O(this, Q, R);
        }, l.prototype.imul = function (Q) {
            return this.clone().mulTo(Q, this);
        }, l.prototype.imuln = function (Q) {
            i('number' == typeof Q), i(Q < 67108864);
            for (var R = 0, S = 0; S < this.length; S++) {
                var T = (0 | this.words[S]) * Q, U = (67108863 & T) + (67108863 & R);
                R >>= 26, R += T / 67108864 | 0, R += U >>> 26, this.words[S] = 67108863 & U;
            }
            return 0 !== R && (this.words[S] = R, this.length++), this;
        }, l.prototype.muln = function (Q) {
            return this.clone().imuln(Q);
        }, l.prototype.sqr = function () {
            return this.mul(this);
        }, l.prototype.isqr = function () {
            return this.imul(this.clone());
        }, l.prototype.pow = function (Q) {
            var R = function (S) {
                for (var T = new Array(S.bitLength()), U = 0; U < T.length; U++) {
                    var V = U / 26 | 0, W = U % 26;
                    T[U] = (S.words[V] & 1 << W) >>> W;
                }
                return T;
            }(Q);
            if (0 === R.length)
                return new l(1);
            for (var S = this, T = 0; T < R.length && 0 === R[T]; T++, S = S.sqr());
            if (++T < R.length)
                for (var U = S.sqr(); T < R.length; T++, U = U.sqr())
                    0 !== R[T] && (S = S.mul(U));
            return S;
        }, l.prototype.iushln = function (Q) {
            i('number' == typeof Q && Q >= 0);
            var R, S = Q % 26, T = (Q - S) / 26, U = 67108863 >>> 26 - S << 26 - S;
            if (0 !== S) {
                var V = 0;
                for (R = 0; R < this.length; R++) {
                    var W = this.words[R] & U, X = (0 | this.words[R]) - W << S;
                    this.words[R] = X | V, V = W >>> 26 - S;
                }
                V && (this.words[R] = V, this.length++);
            }
            if (0 !== T) {
                for (R = this.length - 1; R >= 0; R--)
                    this.words[R + T] = this.words[R];
                for (R = 0; R < T; R++)
                    this.words[R] = 0;
                this.length += T;
            }
            return this.strip();
        }, l.prototype.ishln = function (Q) {
            return i(0 === this.negative), this.iushln(Q);
        }, l.prototype.iushrn = function (Q, R, S) {
            var T;
            i('number' == typeof Q && Q >= 0), T = R ? (R - R % 26) / 26 : 0;
            var U = Q % 26, V = Math.min((Q - U) / 26, this.length), W = 67108863 ^ 67108863 >>> U << U, X = S;
            if (T -= V, T = Math.max(0, T), X) {
                for (var Y = 0; Y < V; Y++)
                    X.words[Y] = this.words[Y];
                X.length = V;
            }
            if (0 === V);
            else if (this.length > V)
                for (this.length -= V, Y = 0; Y < this.length; Y++)
                    this.words[Y] = this.words[Y + V];
            else
                this.words[0] = 0, this.length = 1;
            var Z = 0;
            for (Y = this.length - 1; Y >= 0 && (0 !== Z || Y >= T); Y--) {
                var $ = 0 | this.words[Y];
                this.words[Y] = Z << 26 - U | $ >>> U, Z = $ & W;
            }
            return X && 0 !== Z && (X.words[X.length++] = Z), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
        }, l.prototype.ishrn = function (Q, R, S) {
            return i(0 === this.negative), this.iushrn(Q, R, S);
        }, l.prototype.shln = function (Q) {
            return this.clone().ishln(Q);
        }, l.prototype.ushln = function (Q) {
            return this.clone().iushln(Q);
        }, l.prototype.shrn = function (Q) {
            return this.clone().ishrn(Q);
        }, l.prototype.ushrn = function (Q) {
            return this.clone().iushrn(Q);
        }, l.prototype.testn = function (Q) {
            i('number' == typeof Q && Q >= 0);
            var R = Q % 26, S = (Q - R) / 26, T = 1 << R;
            return !(this.length <= S) && !!(this.words[S] & T);
        }, l.prototype.imaskn = function (Q) {
            i('number' == typeof Q && Q >= 0);
            var R = Q % 26, S = (Q - R) / 26;
            if (i(0 === this.negative, 'imaskn works only with positive numbers'), this.length <= S)
                return this;
            if (0 !== R && S++, this.length = Math.min(S, this.length), 0 !== R) {
                var T = 67108863 ^ 67108863 >>> R << R;
                this.words[this.length - 1] &= T;
            }
            return this.strip();
        }, l.prototype.maskn = function (Q) {
            return this.clone().imaskn(Q);
        }, l.prototype.iaddn = function (Q) {
            return i('number' == typeof Q), i(Q < 67108864), Q < 0 ? this.isubn(-Q) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < Q ? (this.words[0] = Q - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(Q), this.negative = 1, this) : this._iaddn(Q);
        }, l.prototype._iaddn = function (Q) {
            this.words[0] += Q;
            for (var R = 0; R < this.length && this.words[R] >= 67108864; R++)
                this.words[R] -= 67108864, R === this.length - 1 ? this.words[R + 1] = 1 : this.words[R + 1]++;
            return this.length = Math.max(this.length, R + 1), this;
        }, l.prototype.isubn = function (Q) {
            if (i('number' == typeof Q), i(Q < 67108864), Q < 0)
                return this.iaddn(-Q);
            if (0 !== this.negative)
                return this.negative = 0, this.iaddn(Q), this.negative = 1, this;
            if (this.words[0] -= Q, 1 === this.length && this.words[0] < 0)
                this.words[0] = -this.words[0], this.negative = 1;
            else
                for (var R = 0; R < this.length && this.words[R] < 0; R++)
                    this.words[R] += 67108864, this.words[R + 1] -= 1;
            return this.strip();
        }, l.prototype.addn = function (Q) {
            return this.clone().iaddn(Q);
        }, l.prototype.subn = function (Q) {
            return this.clone().isubn(Q);
        }, l.prototype.iabs = function () {
            return this.negative = 0, this;
        }, l.prototype.abs = function () {
            return this.clone().iabs();
        }, l.prototype._ishlnsubmul = function (Q, R, S) {
            var T, U, V = Q.length + S;
            this._expand(V);
            var W = 0;
            for (T = 0; T < Q.length; T++) {
                U = (0 | this.words[T + S]) + W;
                var X = (0 | Q.words[T]) * R;
                W = ((U -= 67108863 & X) >> 26) - (X / 67108864 | 0), this.words[T + S] = 67108863 & U;
            }
            for (; T < this.length - S; T++)
                W = (U = (0 | this.words[T + S]) + W) >> 26, this.words[T + S] = 67108863 & U;
            if (0 === W)
                return this.strip();
            for (i(-1 === W), W = 0, T = 0; T < this.length; T++)
                W = (U = -(0 | this.words[T]) + W) >> 26, this.words[T] = 67108863 & U;
            return this.negative = 1, this.strip();
        }, l.prototype._wordDiv = function (Q, R) {
            var S = (this.length, Q.length), T = this.clone(), U = Q, V = 0 | U.words[U.length - 1];
            0 !== (S = 26 - this._countBits(V)) && (U = U.ushln(S), T.iushln(S), V = 0 | U.words[U.length - 1]);
            var W, X = T.length - U.length;
            if ('mod' !== R) {
                (W = new l(null)).length = X + 1, W.words = new Array(W.length);
                for (var Y = 0; Y < W.length; Y++)
                    W.words[Y] = 0;
            }
            var Z = T.clone()._ishlnsubmul(U, 1, X);
            0 === Z.negative && (T = Z, W && (W.words[X] = 1));
            for (var $ = X - 1; $ >= 0; $--) {
                var ab = 67108864 * (0 | T.words[U.length + $]) + (0 | T.words[U.length + $ - 1]);
                for (ab = Math.min(ab / V | 0, 67108863), T._ishlnsubmul(U, ab, $); 0 !== T.negative;)
                    ab--, T.negative = 0, T._ishlnsubmul(U, 1, $), T.isZero() || (T.negative ^= 1);
                W && (W.words[$] = ab);
            }
            return W && W.strip(), T.strip(), 'div' !== R && 0 !== S && T.iushrn(S), {
                div: W || null,
                mod: T
            };
        }, l.prototype.divmod = function (Q, R, S) {
            return i(!Q.isZero()), this.isZero() ? {
                div: new l(0),
                mod: new l(0)
            } : 0 !== this.negative && 0 === Q.negative ? (n = this.neg().divmod(Q, R), 'mod' !== R && (j = n.div.neg()), 'div' !== R && (H = n.mod.neg(), S && 0 !== H.negative && H.iadd(Q)), {
                div: j,
                mod: H
            }) : 0 === this.negative && 0 !== Q.negative ? (n = this.divmod(Q.neg(), R), 'mod' !== R && (j = n.div.neg()), {
                div: j,
                mod: n.mod
            }) : 0 != (this.negative & Q.negative) ? (n = this.neg().divmod(Q.neg(), R), 'div' !== R && (H = n.mod.neg(), S && 0 !== H.negative && H.isub(Q)), {
                div: n.div,
                mod: H
            }) : Q.length > this.length || this.cmp(Q) < 0 ? {
                div: new l(0),
                mod: this
            } : 1 === Q.length ? 'div' === R ? {
                div: this.divn(Q.words[0]),
                mod: null
            } : 'mod' === R ? {
                div: null,
                mod: new l(this.modn(Q.words[0]))
            } : {
                div: this.divn(Q.words[0]),
                mod: new l(this.modn(Q.words[0]))
            } : this._wordDiv(Q, R);
            var T, U, V;
        }, l.prototype.div = function (Q) {
            return this.divmod(Q, 'div', !1).div;
        }, l.prototype.mod = function (Q) {
            return this.divmod(Q, 'mod', !1).mod;
        }, l.prototype.umod = function (Q) {
            return this.divmod(Q, 'mod', !0).mod;
        }, l.prototype.divRound = function (Q) {
            var R = this.divmod(Q);
            if (R.mod.isZero())
                return R.div;
            var S = 0 !== R.div.negative ? R.mod.isub(Q) : R.mod, T = Q.ushrn(1), U = Q.andln(1), V = S.cmp(T);
            return V < 0 || 1 === U && 0 === V ? R.div : 0 !== R.div.negative ? R.div.isubn(1) : R.div.iaddn(1);
        }, l.prototype.modn = function (Q) {
            i(Q <= 67108863);
            for (var R = 67108864 % Q, S = 0, T = this.length - 1; T >= 0; T--)
                S = (R * S + (0 | this.words[T])) % Q;
            return S;
        }, l.prototype.idivn = function (Q) {
            i(Q <= 67108863);
            for (var R = 0, S = this.length - 1; S >= 0; S--) {
                var T = (0 | this.words[S]) + 67108864 * R;
                this.words[S] = T / Q | 0, R = T % Q;
            }
            return this.strip();
        }, l.prototype.divn = function (Q) {
            return this.clone().idivn(Q);
        }, l.prototype.egcd = function (Q) {
            i(0 === Q.negative), i(!Q.isZero());
            var R = this, S = Q.clone();
            R = 0 !== R.negative ? R.umod(Q) : R.clone();
            for (var T = new l(1), U = new l(0), V = new l(0), W = new l(1), X = 0; R.isEven() && S.isEven();)
                R.iushrn(1), S.iushrn(1), ++X;
            for (var Y = S.clone(), Z = R.clone(); !R.isZero();) {
                for (var $ = 0, ab = 1; 0 == (R.words[0] & ab) && $ < 26; ++$, ab <<= 1);
                if ($ > 0)
                    for (R.iushrn($); $-- > 0;)
                        (T.isOdd() || U.isOdd()) && (T.iadd(Y), U.isub(Z)), T.iushrn(1), U.iushrn(1);
                for (var bb = 0, cb = 1; 0 == (S.words[0] & cb) && bb < 26; ++bb, cb <<= 1);
                if (bb > 0)
                    for (S.iushrn(bb); bb-- > 0;)
                        (V.isOdd() || W.isOdd()) && (V.iadd(Y), W.isub(Z)), V.iushrn(1), W.iushrn(1);
                R.cmp(S) >= 0 ? (R.isub(S), T.isub(V), U.isub(W)) : (S.isub(R), V.isub(T), W.isub(U));
            }
            return {
                a: V,
                b: W,
                gcd: S.iushln(X)
            };
        }, l.prototype._invmp = function (Q) {
            i(0 === Q.negative), i(!Q.isZero());
            var R = this, S = Q.clone();
            R = 0 !== R.negative ? R.umod(Q) : R.clone();
            for (var T, U = new l(1), V = new l(0), W = S.clone(); R.cmpn(1) > 0 && S.cmpn(1) > 0;) {
                for (var X = 0, Y = 1; 0 == (R.words[0] & Y) && X < 26; ++X, Y <<= 1);
                if (X > 0)
                    for (R.iushrn(X); X-- > 0;)
                        U.isOdd() && U.iadd(W), U.iushrn(1);
                for (var Z = 0, $ = 1; 0 == (S.words[0] & $) && Z < 26; ++Z, $ <<= 1);
                if (Z > 0)
                    for (S.iushrn(Z); Z-- > 0;)
                        V.isOdd() && V.iadd(W), V.iushrn(1);
                R.cmp(S) >= 0 ? (R.isub(S), U.isub(V)) : (S.isub(R), V.isub(U));
            }
            return (T = 0 === R.cmpn(1) ? U : V).cmpn(0) < 0 && T.iadd(Q), T;
        }, l.prototype.gcd = function (Q) {
            if (this.isZero())
                return Q.abs();
            if (Q.isZero())
                return this.abs();
            var R = this.clone(), S = Q.clone();
            R.negative = 0, S.negative = 0;
            for (var T = 0; R.isEven() && S.isEven(); T++)
                R.iushrn(1), S.iushrn(1);
            for (;;) {
                for (; R.isEven();)
                    R.iushrn(1);
                for (; S.isEven();)
                    S.iushrn(1);
                var U = R.cmp(S);
                if (U < 0) {
                    var V = R;
                    R = S, S = V;
                } else if (0 === U || 0 === S.cmpn(1))
                    break;
                R.isub(S);
            }
            return S.iushln(T);
        }, l.prototype.invm = function (Q) {
            return this.egcd(Q).a.umod(Q);
        }, l.prototype.isEven = function () {
            return 0 == (1 & this.words[0]);
        }, l.prototype.isOdd = function () {
            return 1 == (1 & this.words[0]);
        }, l.prototype.andln = function (Q) {
            return this.words[0] & Q;
        }, l.prototype.bincn = function (Q) {
            i('number' == typeof Q);
            var R = Q % 26, S = (Q - R) / 26, T = 1 << R;
            if (this.length <= S)
                return this._expand(S + 1), this.words[S] |= T, this;
            for (var U = T, V = S; 0 !== U && V < this.length; V++) {
                var W = 0 | this.words[V];
                U = (W += U) >>> 26, W &= 67108863, this.words[V] = W;
            }
            return 0 !== U && (this.words[V] = U, this.length++), this;
        }, l.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
        }, l.prototype.cmpn = function (Q) {
            var R, S = Q < 0;
            if (0 !== this.negative && !S)
                return -1;
            if (0 === this.negative && S)
                return 1;
            if (this.strip(), this.length > 1)
                R = 1;
            else {
                S && (Q = -Q), i(Q <= 67108863, 'Number is too big');
                var T = 0 | this.words[0];
                R = T === Q ? 0 : T < Q ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -R : R;
        }, l.prototype.cmp = function (Q) {
            if (0 !== this.negative && 0 === Q.negative)
                return -1;
            if (0 === this.negative && 0 !== Q.negative)
                return 1;
            var R = this.ucmp(Q);
            return 0 !== this.negative ? 0 | -R : R;
        }, l.prototype.ucmp = function (Q) {
            if (this.length > Q.length)
                return 1;
            if (this.length < Q.length)
                return -1;
            for (var R = 0, S = this.length - 1; S >= 0; S--) {
                var T = 0 | this.words[S], U = 0 | Q.words[S];
                if (T !== U) {
                    T < U ? R = -1 : T > U && (R = 1);
                    break;
                }
            }
            return R;
        }, l.prototype.gtn = function (Q) {
            return 1 === this.cmpn(Q);
        }, l.prototype.gt = function (Q) {
            return 1 === this.cmp(Q);
        }, l.prototype.gten = function (Q) {
            return this.cmpn(Q) >= 0;
        }, l.prototype.gte = function (Q) {
            return this.cmp(Q) >= 0;
        }, l.prototype.ltn = function (Q) {
            return -1 === this.cmpn(Q);
        }, l.prototype.lt = function (Q) {
            return -1 === this.cmp(Q);
        }, l.prototype.lten = function (Q) {
            return this.cmpn(Q) <= 0;
        }, l.prototype.lte = function (Q) {
            return this.cmp(Q) <= 0;
        }, l.prototype.eqn = function (Q) {
            return 0 === this.cmpn(Q);
        }, l.prototype.eq = function (Q) {
            return 0 === this.cmp(Q);
        }, l.red = function (Q) {
            return new _W(Q);
        }, l.prototype.toRed = function (Q) {
            return i(!this.red, 'Already a number in reduction context'), i(0 === this.negative, 'red works only with positives'), Q.convertTo(this)._forceRed(Q);
        }, l.prototype.fromRed = function () {
            return i(this.red, 'fromRed works only with numbers in reduction context'), this.red.convertFrom(this);
        }, l.prototype._forceRed = function (Q) {
            return this.red = Q, this;
        }, l.prototype.forceRed = function (Q) {
            return i(!this.red, 'Already a number in reduction context'), this._forceRed(Q);
        }, l.prototype.redAdd = function (Q) {
            return i(this.red, 'redAdd works only with red numbers'), this.red.add(this, Q);
        }, l.prototype.redIAdd = function (Q) {
            return i(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, Q);
        }, l.prototype.redSub = function (Q) {
            return i(this.red, 'redSub works only with red numbers'), this.red.sub(this, Q);
        }, l.prototype.redISub = function (Q) {
            return i(this.red, 'redISub works only with red numbers'), this.red.isub(this, Q);
        }, l.prototype.redShl = function (Q) {
            return i(this.red, 'redShl works only with red numbers'), this.red.shl(this, Q);
        }, l.prototype.redMul = function (Q) {
            return i(this.red, 'redMul works only with red numbers'), this.red._verify2(this, Q), this.red.mul(this, Q);
        }, l.prototype.redIMul = function (Q) {
            return i(this.red, 'redMul works only with red numbers'), this.red._verify2(this, Q), this.red.imul(this, Q);
        }, l.prototype.redSqr = function () {
            return i(this.red, 'redSqr works only with red numbers'), this.red._verify1(this), this.red.sqr(this);
        }, l.prototype.redISqr = function () {
            return i(this.red, 'redISqr works only with red numbers'), this.red._verify1(this), this.red.isqr(this);
        }, l.prototype.redSqrt = function () {
            return i(this.red, 'redSqrt works only with red numbers'), this.red._verify1(this), this.red.sqrt(this);
        }, l.prototype.redInvm = function () {
            return i(this.red, 'redInvm works only with red numbers'), this.red._verify1(this), this.red.invm(this);
        }, l.prototype.redNeg = function () {
            return i(this.red, 'redNeg works only with red numbers'), this.red._verify1(this), this.red.neg(this);
        }, l.prototype.redPow = function (Q) {
            return i(this.red && !Q.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, Q);
        };
        var Q = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };
        function R(S, T) {
            this.name = S, this.p = new l(T, 16), this.n = this.p.bitLength(), this.k = new l(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
        }
        function S() {
            R.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
        }
        function T() {
            R.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
        }
        function U() {
            R.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
        }
        function V() {
            R.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
        }
        function _W(X) {
            if ('string' == typeof X) {
                var Y = l._prime(X);
                this.m = Y.p, this.prime = Y;
            } else
                i(X.gtn(1), 'modulus must be greater than 1'), this.m = X, this.prime = null;
        }
        function Y(Z) {
            _W.call(this, Z), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new l(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
        }
        R.prototype._tmp = function () {
            var Z = new l(null);
            return Z.words = new Array(Math.ceil(this.n / 13)), Z;
        }, R.prototype.ireduce = function (Z) {
            var $, ab = Z;
            do {
                this.split(ab, this.tmp), $ = (ab = (ab = this.imulK(ab)).iadd(this.tmp)).bitLength();
            } while ($ > this.n);
            var bb = $ < this.n ? -1 : ab.ucmp(this.p);
            return 0 === bb ? (ab.words[0] = 0, ab.length = 1) : bb > 0 ? ab.isub(this.p) : void 0 !== ab.strip ? ab.strip() : ab._strip(), ab;
        }, R.prototype.split = function (Z, $) {
            Z.iushrn(this.n, 0, $);
        }, R.prototype.imulK = function (Z) {
            return Z.imul(this.k);
        }, j(S, R), S.prototype.split = function (Z, $) {
            for (var ab = 4194303, bb = Math.min(Z.length, 9), cb = 0; cb < bb; cb++)
                $.words[cb] = Z.words[cb];
            if ($.length = bb, Z.length <= 9)
                return Z.words[0] = 0, void (Z.length = 1);
            var db = Z.words[9];
            for ($.words[$.length++] = db & ab, cb = 10; cb < Z.length; cb++) {
                var eb = 0 | Z.words[cb];
                Z.words[cb - 10] = (eb & ab) << 4 | db >>> 22, db = eb;
            }
            db >>>= 22, Z.words[cb - 10] = db, 0 === db && Z.length > 10 ? Z.length -= 10 : Z.length -= 9;
        }, S.prototype.imulK = function (Z) {
            Z.words[Z.length] = 0, Z.words[Z.length + 1] = 0, Z.length += 2;
            for (var $ = 0, ab = 0; ab < Z.length; ab++) {
                var bb = 0 | Z.words[ab];
                $ += 977 * bb, Z.words[ab] = 67108863 & $, $ = 64 * bb + ($ / 67108864 | 0);
            }
            return 0 === Z.words[Z.length - 1] && (Z.length--, 0 === Z.words[Z.length - 1] && Z.length--), Z;
        }, j(T, R), j(U, R), j(V, R), V.prototype.imulK = function (Z) {
            for (var $ = 0, ab = 0; ab < Z.length; ab++) {
                var bb = 19 * (0 | Z.words[ab]) + $, cb = 67108863 & bb;
                bb >>>= 26, Z.words[ab] = cb, $ = bb;
            }
            return 0 !== $ && (Z.words[Z.length++] = $), Z;
        }, l._prime = function (Z) {
            if (Q[Z])
                return Q[Z];
            var $;
            if ('k256' === Z)
                $ = new S();
            else if ('p224' === Z)
                $ = new T();
            else if ('p192' === Z)
                $ = new U();
            else {
                if ('p25519' !== Z)
                    throw new Error('Unknown prime ' + Z);
                $ = new V();
            }
            return Q[Z] = $, $;
        }, _W.prototype._verify1 = function (Z) {
            i(0 === Z.negative, 'red works only with positives'), i(Z.red, 'red works only with red numbers');
        }, _W.prototype._verify2 = function (Z, $) {
            i(0 == (Z.negative | $.negative), 'red works only with positives'), i(Z.red && Z.red === $.red, 'red works only with red numbers');
        }, _W.prototype.imod = function (Z) {
            return this.prime ? this.prime.ireduce(Z)._forceRed(this) : Z.umod(this.m)._forceRed(this);
        }, _W.prototype.neg = function (Z) {
            return Z.isZero() ? Z.clone() : this.m.sub(Z)._forceRed(this);
        }, _W.prototype.add = function (Z, $) {
            this._verify2(Z, $);
            var ab = Z.add($);
            return ab.cmp(this.m) >= 0 && ab.isub(this.m), ab._forceRed(this);
        }, _W.prototype.iadd = function (Z, $) {
            this._verify2(Z, $);
            var ab = Z.iadd($);
            return ab.cmp(this.m) >= 0 && ab.isub(this.m), ab;
        }, _W.prototype.sub = function (Z, $) {
            this._verify2(Z, $);
            var ab = Z.sub($);
            return ab.cmpn(0) < 0 && ab.iadd(this.m), ab._forceRed(this);
        }, _W.prototype.isub = function (Z, $) {
            this._verify2(Z, $);
            var ab = Z.isub($);
            return ab.cmpn(0) < 0 && ab.iadd(this.m), ab;
        }, _W.prototype.shl = function (Z, $) {
            return this._verify1(Z), this.imod(Z.ushln($));
        }, _W.prototype.imul = function (Z, $) {
            return this._verify2(Z, $), this.imod(Z.imul($));
        }, _W.prototype.mul = function (Z, $) {
            return this._verify2(Z, $), this.imod(Z.mul($));
        }, _W.prototype.isqr = function (Z) {
            return this.imul(Z, Z.clone());
        }, _W.prototype.sqr = function (Z) {
            return this.mul(Z, Z);
        }, _W.prototype.sqrt = function (Z) {
            if (Z.isZero())
                return Z.clone();
            var $ = this.m.andln(3);
            if (i($ % 2 == 1), 3 === $) {
                var ab = this.m.add(new l(1)).iushrn(2);
                return this.pow(Z, ab);
            }
            for (var bb = this.m.subn(1), cb = 0; !bb.isZero() && 0 === bb.andln(1);)
                cb++, bb.iushrn(1);
            i(!bb.isZero());
            var db = new l(1).toRed(this), eb = db.redNeg(), fb = this.m.subn(1).iushrn(1), gb = this.m.bitLength();
            for (gb = new l(2 * gb * gb).toRed(this); 0 !== this.pow(gb, fb).cmp(eb);)
                gb.redIAdd(eb);
            for (var hb = this.pow(gb, bb), ib = this.pow(Z, bb.addn(1).iushrn(1)), jb = this.pow(Z, bb), kb = cb; 0 !== jb.cmp(db);) {
                for (var lb = jb, mb = 0; 0 !== lb.cmp(db); mb++)
                    lb = lb.redSqr();
                i(mb < kb);
                var nb = this.pow(hb, new l(1).iushln(kb - mb - 1));
                ib = ib.redMul(nb), hb = nb.redSqr(), jb = jb.redMul(hb), kb = mb;
            }
            return ib;
        }, _W.prototype.invm = function (Z) {
            var $ = Z._invmp(this.m);
            return 0 !== $.negative ? ($.negative = 0, this.imod($).redNeg()) : this.imod($);
        }, _W.prototype.pow = function (Z, $) {
            if ($.isZero())
                return new l(1).toRed(this);
            if (0 === $.cmpn(1))
                return Z.clone();
            var ab = new Array(16);
            ab[0] = new l(1).toRed(this), ab[1] = Z;
            for (var bb = 2; bb < ab.length; bb++)
                ab[bb] = this.mul(ab[bb - 1], Z);
            var cb = ab[0], db = 0, eb = 0, fb = $.bitLength() % 26;
            for (0 === fb && (fb = 26), bb = $.length - 1; bb >= 0; bb--) {
                for (var gb = $.words[bb], hb = fb - 1; hb >= 0; hb--) {
                    var ib = gb >> hb & 1;
                    cb !== ab[0] && (cb = this.sqr(cb)), 0 !== ib || 0 !== db ? (db <<= 1, db |= ib, (4 === ++eb || 0 === bb && 0 === hb) && (cb = this.mul(cb, ab[db]), eb = 0, db = 0)) : eb = 0;
                }
                fb = 26;
            }
            return cb;
        }, _W.prototype.convertTo = function (Z) {
            var $ = Z.umod(this.m);
            return $ === Z ? $.clone() : $;
        }, _W.prototype.convertFrom = function (Z) {
            var $ = Z.clone();
            return $.red = null, $;
        }, l.mont = function (Z) {
            return new Y(Z);
        }, j(Y, _W), Y.prototype.convertTo = function (Z) {
            return this.imod(Z.ushln(this.shift));
        }, Y.prototype.convertFrom = function (Z) {
            var $ = this.imod(Z.mul(this.rinv));
            return $.red = null, $;
        }, Y.prototype.imul = function (Z, $) {
            if (Z.isZero() || $.isZero())
                return Z.words[0] = 0, Z.length = 1, Z;
            var ab = Z.imul($), bb = ab.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), cb = ab.isub(bb).iushrn(this.shift), db = cb;
            return cb.cmp(this.m) >= 0 ? db = cb.isub(this.m) : cb.cmpn(0) < 0 && (db = cb.iadd(this.m)), db._forceRed(this);
        }, Y.prototype.mul = function (Z, $) {
            if (Z.isZero() || $.isZero())
                return new l(0)._forceRed(this);
            var ab = Z.mul($), bb = ab.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), cb = ab.isub(bb).iushrn(this.shift), db = cb;
            return cb.cmp(this.m) >= 0 ? db = cb.isub(this.m) : cb.cmpn(0) < 0 && (db = cb.iadd(this.m)), db._forceRed(this);
        }, Y.prototype.invm = function (Z) {
            return this.imod(Z._invmp(this.m).mul(this.r2))._forceRed(this);
        };
    }(e, this);
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    function i(j) {
        this.rand = j || new h.Rand();
    }
    e.exports = i, i.create = function (j) {
        return new i(j);
    }, i.prototype._randbelow = function (j) {
        var k = j.bitLength(), l = Math.ceil(k / 8);
        do {
            var m = new g(this.rand.generate(l));
        } while (h.cmp(j) >= 0);
        return m;
    }, i.prototype._randrange = function (j, k) {
        var l = k.sub(j);
        return j.add(this._randbelow(l));
    }, i.prototype.test = function (j, k, l) {
        var m = j.bitLength(), n = g.mont(j), o = new g(1).toRed(n);
        k || (k = Math.max(1, m / 48 | 0));
        for (var p = j.subn(1), q = 0; !p.testn(q); q++);
        for (var r = j.shrn(q), s = p.toRed(n); k > 0; k--) {
            var t = this._randrange(new g(2), p);
            l && l(t);
            var u = t.toRed(n).redPow(r);
            if (0 !== u.cmp(o) && 0 !== u.cmp(s)) {
                for (var v = 1; v < q; v++) {
                    if (0 === (u = u.redSqr()).cmp(o))
                        return !1;
                    if (0 === u.cmp(s))
                        break;
                }
                if (v === q)
                    return !1;
            }
        }
        return !0;
    }, i.prototype.getDivisor = function (j, k) {
        var l = j.bitLength(), m = g.mont(j), n = new g(1).toRed(m);
        k || (k = Math.max(1, l / 48 | 0));
        for (var o = j.subn(1), p = 0; !o.testn(p); p++);
        for (var q = j.shrn(p), r = o.toRed(m); k > 0; k--) {
            var s = this._randrange(new g(2), o), t = j.gcd(s);
            if (0 !== t.cmpn(1))
                return t;
            var u = s.toRed(m).redPow(q);
            if (0 !== u.cmp(n) && 0 !== u.cmp(r)) {
                for (var v = 1; v < p; v++) {
                    if (0 === (u = u.redSqr()).cmp(n))
                        return u.fromRed().subn(1).gcd(j);
                    if (0 === u.cmp(r))
                        break;
                }
                if (v === p)
                    return (u = u.redSqr()).fromRed().subn(1).gcd(j);
            }
        }
        return !1;
    };
}), d.register('.....', function (e, f) {
    var g;
    function h(i) {
        this.rand = i;
    }
    if (e.exports = function (i) {
            return g || (g = new h(null)), g.generate(i);
        }, e.exports.Rand = h, h.prototype.generate = function (i) {
            return this._rand(i);
        }, h.prototype._rand = function (i) {
            if (this.rand.getBytes)
                return this.rand.getBytes(i);
            for (var j = new Uint8Array(i), k = 0; k < j.length; k++)
                j[k] = this.rand.getByte();
            return j;
        }, 'object' == typeof self)
        self.crypto && self.crypto.getRandomValues ? h.prototype._rand = function (i) {
            var j = new Uint8Array(i);
            return self.crypto.getRandomValues(j), j;
        } : self.msCrypto && self.msCrypto.getRandomValues ? h.prototype._rand = function (i) {
            var j = new Uint8Array(i);
            return self.msCrypto.getRandomValues(j), j;
        } : 'object' == typeof window && (h.prototype._rand = function () {
            throw new Error('Not implemented yet');
        });
    else
        try {
            var i = d('.....');
            if ('function' != typeof i.randomBytes)
                throw new Error('Not supported');
            h.prototype._rand = function (j) {
                return i.randomBytes(j);
            };
        } catch (e) {
        }
}), d.register('.....', function (e, f) {
    e.exports = JSON.parse('{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}');
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer, h = d('.....'), i = new (d('.....'))(), j = new h(24), k = new h(11), l = new h(10), m = new h(3), n = new h(7), o = d('.....'), p = d('.....');
    function q(r, s) {
        return s = s || 'utf8', g.isBuffer(r) || (r = new g(r, s)), this._pub = new h(r), this;
    }
    function r(s, t) {
        return t = t || 'utf8', g.isBuffer(s) || (s = new g(s, t)), this._priv = new h(s), this;
    }
    e.exports = _t;
    var s = {};
    function _t(u, v, w) {
        this.setGenerator(v), this.__prime = new h(u), this._prime = h.mont(this.__prime), this._primeLen = u.length, this._pub = void 0, this._priv = void 0, this._primeCode = void 0, w ? (this.setPublicKey = q, this.setPrivateKey = r) : this._primeCode = 8;
    }
    function u(v, w) {
        var x = new g(v.toArray());
        return w ? x.toString(w) : x;
    }
    Object.defineProperty(_t.prototype, 'verifyError', {
        enumerable: !0,
        get: function () {
            return 'number' != typeof this._primeCode && (this._primeCode = function (w, x) {
                var y = x.toString('hex'), z = [
                        y,
                        w.toString(16)
                    ].join('_');
                if (z in s)
                    return s[z];
                var A, B = 0;
                if (w.isEven() || !o.simpleSieve || !o.fermatTest(w) || !i.test(w))
                    return B += 1, B += '02' === y || '05' === y ? 8 : 4, s[z] = B, B;
                switch (i.test(w.shrn(1)) || (B += 2), y) {
                case '02':
                    w.mod(j).cmp(k) && (B += 8);
                    break;
                case '05':
                    (A = w.mod(l)).cmp(m) && A.cmp(n) && (B += 8);
                    break;
                default:
                    B += 4;
                }
                return s[z] = B, B;
            }(this.__prime, this.__gen)), this._primeCode;
        }
    }), _t.prototype.generateKeys = function () {
        return this._priv || (this._priv = new h(p(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey();
    }, _t.prototype.computeSecret = function (w) {
        var x = (w = (w = new h(w)).toRed(this._prime)).redPow(this._priv).fromRed(), y = new g(x.toArray()), z = this.getPrime();
        if (y.length < z.length) {
            var A = new g(z.length - y.length);
            A.fill(0), y = g.concat([
                A,
                y
            ]);
        }
        return y;
    }, _t.prototype.getPublicKey = function (w) {
        return u(this._pub, w);
    }, _t.prototype.getPrivateKey = function (w) {
        return u(this._priv, w);
    }, _t.prototype.getPrime = function (w) {
        return u(this.__prime, w);
    }, _t.prototype.getGenerator = function (w) {
        return u(this._gen, w);
    }, _t.prototype.setGenerator = function (w, x) {
        return x = x || 'utf8', g.isBuffer(w) || (w = new g(w, x)), this.__gen = w, this._gen = new h(w), this;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer, h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....');
    function n(o) {
        i.Writable.call(this);
        var p = m[o];
        if (!p)
            throw new Error('Unknown message digest');
        this._hashType = p.hash, this._hash = h(p.hash), this._tag = p.id, this._signType = p.sign;
    }
    function p(q) {
        i.Writable.call(this);
        var r = m[q];
        if (!r)
            throw new Error('Unknown message digest');
        this._hash = h(r.hash), this._tag = r.id, this._signType = r.sign;
    }
    function r(s) {
        return new n(s);
    }
    function s(t) {
        return new p(t);
    }
    Object.keys(m).forEach(function (t) {
        m[t].id = g.from(m[t].id, 'hex'), m[t.toLowerCase()] = m[t];
    }), j(n, i.Writable), n.prototype._write = function (t, u, v) {
        this._hash.update(t), v();
    }, n.prototype.update = function (t, u) {
        return 'string' == typeof t && (t = g.from(t, u)), this._hash.update(t), this;
    }, n.prototype.sign = function (t, u) {
        this.end();
        var v = this._hash.digest(), w = k(v, t, this._hashType, this._signType, this._tag);
        return u ? w.toString(u) : w;
    }, j(p, i.Writable), p.prototype._write = function (t, u, v) {
        this._hash.update(t), v();
    }, p.prototype.update = function (t, u) {
        return 'string' == typeof t && (t = g.from(t, u)), this._hash.update(t), this;
    }, p.prototype.verify = function (t, u, v) {
        'string' == typeof u && (u = g.from(u, v)), this.end();
        var w = this._hash.digest();
        return l(u, w, t, this._signType, this._tag);
    }, e.exports = {
        Sign: r,
        Verify: s,
        createSign: r,
        createVerify: s
    };
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer, h = d('.....'), i = d('.....'), j = d('.....').ec, k = d('.....'), l = d('.....'), m = d('.....');
    function n(o, p, q, r) {
        if ((o = g.from(o.toArray())).length < p.byteLength()) {
            var s = g.alloc(p.byteLength() - o.length);
            o = g.concat([
                s,
                o
            ]);
        }
        var t = q.length, u = function (v, w) {
                v = _t(v, w), v = v.mod(w);
                var x = g.from(v.toArray());
                if (x.length < w.byteLength()) {
                    var y = g.alloc(w.byteLength() - x.length);
                    x = g.concat([
                        y,
                        x
                    ]);
                }
                return x;
            }(q, p), v = g.alloc(t);
        v.fill(1);
        var w = g.alloc(t);
        return n = h(r, n).update(v).update(g.from([0])).update(o).update(u).digest(), v = h(r, n).update(v).digest(), {
            k: n = h(r, n).update(v).update(g.from([1])).update(o).update(u).digest(),
            v: v = h(r, n).update(v).digest()
        };
    }
    function _t(u, v) {
        var w = new t(u), x = (u.length << 3) - v.bitLength();
        return x > 0 && w.ishrn(x), w;
    }
    function w(x, y, z) {
        var A, B;
        do {
            for (A = w.alloc(0); 8 * A.length < x.bitLength();)
                y.v = h(z, y.k).update(y.v).digest(), A = w.concat([
                    A,
                    y.v
                ]);
            B = _t(A, x), y.k = h(z, y.k).update(y.v).update(w.from([0])).digest(), y.v = h(z, y.k).update(y.v).digest();
        } while (-1 !== B.cmp(x));
        return B;
    }
    function z(A, B, C, D) {
        return A.toRed(t.mont(C)).redPow(B).fromRed().mod(D);
    }
    e.exports = function (A, B, C, D, E) {
        var F = u(B);
        if (F.curve) {
            if ('ecdsa' !== D && 'ecdsa/rsa' !== D)
                throw new Error('wrong private key type');
            return function (G, H) {
                var I = v[H.curve.join('.')];
                if (!I)
                    throw new Error('unknown curve ' + H.curve.join('.'));
                var J = new B(I).keyFromPrivate(H.privateKey), K = J.sign(G);
                return w.from(K.toDER());
            }(A, F);
        }
        if ('dsa' === F.type) {
            if ('dsa' !== D)
                throw new Error('wrong private key type');
            return function (G, H, I) {
                var J, K = H.params.priv_key, L = H.params.p, M = H.params.q, N = H.params.g, O = new t(0), P = _t(G, M).mod(M), Q = !1, R = n(K, M, G, I);
                for (; !1 === Q;)
                    O = z(N, J = w(M, R, I), L, M), 0 === (Q = J.invm(M).imul(P.add(K.mul(O))).mod(M)).cmpn(0) && (Q = !1, O = new t(0));
                return function (S, T) {
                    S = S.toArray(), T = T.toArray(), 128 & S[0] && (S = [0].concat(S));
                    128 & T[0] && (T = [0].concat(T));
                    var U = S.length + T.length + 4, V = [
                            48,
                            U,
                            2,
                            S.length
                        ];
                    return V = V.concat(S, [
                        2,
                        T.length
                    ], T), w.from(V);
                }(O, Q);
            }(A, F, C);
        }
        if ('rsa' !== D && 'ecdsa/rsa' !== D)
            throw new Error('wrong private key type');
        A = w.concat([
            E,
            A
        ]);
        for (var G = F.modulus.byteLength(), H = [
                    0,
                    1
                ]; A.length + H.length + 1 < G;)
            H.push(255);
        H.push(0);
        for (var I = -1; ++I < A.length;)
            H.push(A[I]);
        return A(H, F);
    }, e.exports.getKey = n, e.exports.makeKey = w;
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer, h = d('.....'), i = d('.....');
    function j(k, l) {
        var m = function (n) {
                var o = _v(n);
                return {
                    blinder: o.toRed(h.mont(n.modulus)).redPow(new h(n.publicExponent)).fromRed(),
                    unblinder: o.invm(n.modulus)
                };
            }(l), n = l.modulus.byteLength(), o = (h.mont(l.modulus), new h(k).mul(m.blinder).umod(l.modulus)), p = j.toRed(h.mont(l.prime1)), q = j.toRed(h.mont(l.prime2)), r = l.coefficient, s = l.prime1, t = l.prime2, u = p.redPow(l.exponent1), v = q.redPow(l.exponent2);
        u = u.fromRed(), v = v.fromRed();
        var w = u.isub(v).imul(r).umod(s);
        return w.imul(t), v.iadd(w), new g(v.imul(m.unblinder).umod(l.modulus).toArray(!1, n));
    }
    function _v(w) {
        for (var x = w.modulus.byteLength(), y = new h(n(x)); y.cmp(w.modulus) >= 0 || !y.umod(w.prime1) || !y.umod(w.prime2);)
            y = new h(n(x));
        return y;
    }
    e.exports = j, j.getr = _v;
}), d.register('.....', function (e, f) {
    var g = e.exports;
    g.version = d('.....').version, g.utils = d('.....'), g.rand = d('.....'), g.curve = d('.....'), g.curves = d('.....'), g.ec = d('.....'), g.eddsa = d('.....');
}), d.register('.....', function (e, f) {
    e.exports = JSON.parse('{"name":"elliptic","version":"6.5.3","description":"EC cryptography","main":"lib/elliptic.js","files":["lib"],"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","unit":"istanbul test _mocha --reporter=spec test/index.js","test":"npm run lint && npm run unit","version":"grunt dist && git add dist/"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"brfs":"^1.4.3","coveralls":"^3.0.8","grunt":"^1.0.4","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^9.0.1","istanbul":"^0.4.2","jscs":"^3.0.7","jshint":"^2.10.3","mocha":"^6.2.2"},"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"}}');
}), d.register('.....', function (e, f) {
    var g = e.exports, h = d('.....'), i = d('.....'), j = d('.....');
    g.assert = i, g.toArray = j.toArray, g.zero2 = j.zero2, g.toHex = j.toHex, g.encode = j.encode, g.getNAF = function (k, l, m) {
        var n = new Array(Math.max(k.bitLength(), m) + 1);
        n.fill(0);
        for (var o = 1 << l + 1, p = k.clone(), q = 0; q < n.length; q++) {
            var r, s = p.andln(o - 1);
            p.isOdd() ? (r = s > (o >> 1) - 1 ? (o >> 1) - s : s, p.isubn(r)) : r = 0, n[q] = r, p.iushrn(1);
        }
        return n;
    }, g.getJSF = function (k, l) {
        var m = [
            [],
            []
        ];
        k = k.clone(), l = l.clone();
        for (var n = 0, o = 0; k.cmpn(-n) > 0 || l.cmpn(-o) > 0;) {
            var p, q, r, s = k.andln(3) + n & 3, t = l.andln(3) + o & 3;
            if (3 === s && (s = -1), 3 === t && (t = -1), 0 == (1 & s))
                p = 0;
            else
                p = 3 !== (r = k.andln(7) + n & 7) && 5 !== r || 2 !== t ? s : -s;
            if (m[0].push(p), 0 == (1 & t))
                q = 0;
            else
                q = 3 !== (r = l.andln(7) + o & 7) && 5 !== r || 2 !== s ? t : -t;
            m[1].push(q), 2 * n === p + 1 && (n = 1 - n), 2 * o === q + 1 && (o = 1 - o), k.iushrn(1), l.iushrn(1);
        }
        return m;
    }, g.cachedProperty = function (k, l, m) {
        var n = '_' + l;
        k.prototype[l] = function () {
            return void 0 !== this[n] ? this[n] : this[n] = m.call(this);
        };
    }, g.parseBytes = function (k) {
        return 'string' == typeof k ? g.toArray(k, 'hex') : k;
    }, g.intFromLE = function (k) {
        return new h(k, 'hex', 'le');
    };
}), d.register('.....', function (e, f) {
    var g = e.exports;
    function h(i) {
        return 1 === i.length ? '0' + i : i;
    }
    function i(j) {
        for (var k = '', l = 0; l < j.length; l++)
            k += h(j[l].toString(16));
        return k;
    }
    l.toArray = function (l, m) {
        if (Array.isArray(l))
            return l.slice();
        if (!l)
            return [];
        var n = [];
        if ('string' != typeof l) {
            for (var o = 0; o < l.length; o++)
                n[o] = 0 | l[o];
            return n;
        }
        if ('hex' === m) {
            (l = l.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (l = '0' + l);
            for (o = 0; o < l.length; o += 2)
                n.push(parseInt(l[o] + l[o + 1], 16));
        } else
            for (o = 0; o < l.length; o++) {
                var p = l.charCodeAt(o), q = p >> 8, r = 255 & p;
                q ? n.push(q, r) : n.push(r);
            }
        return n;
    }, l.zero2 = h, l.toHex = i, l.encode = function (l, m) {
        return 'hex' === m ? i(l) : l;
    };
}), d.register('.....', function (e, f) {
    var g = e.exports;
    g.base = d('.....'), g.short = d('.....'), g.mont = d('.....'), g.edwards = d('.....');
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = h.getNAF, j = h.getJSF, k = h.assert;
    function l(m, n) {
        this.type = m, this.p = new g(n.p, 16), this.red = n.prime ? g.red(n.prime) : g.mont(this.p), this.zero = new g(0).toRed(this.red), this.one = new g(1).toRed(this.red), this.two = new g(2).toRed(this.red), this.n = n.n && new g(n.n, 16), this.g = n.g && this.pointFromJSON(n.g, n.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
        var o = this.n && this.p.div(this.n);
        !o || o.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
    }
    function n(o, p) {
        this.curve = o, this.type = p, this.precomputed = null;
    }
    e.exports = l, l.prototype.point = function () {
        throw new Error('Not implemented');
    }, l.prototype.validate = function () {
        throw new Error('Not implemented');
    }, l.prototype._fixedNafMul = function (o, p) {
        k(o.precomputed);
        var q = o._getDoubles(), r = i(p, 1, this._bitLength), s = (1 << q.step + 1) - (q.step % 2 == 0 ? 2 : 1);
        s /= 3;
        for (var t = [], u = 0; u < r.length; u += q.step) {
            var v = 0;
            for (p = u + q.step - 1; p >= u; p--)
                v = (v << 1) + r[p];
            t.push(v);
        }
        for (var w = this.jpoint(null, null, null), x = this.jpoint(null, null, null), y = s; y > 0; y--) {
            for (u = 0; u < t.length; u++) {
                (v = t[u]) === y ? x = x.mixedAdd(q.points[u]) : v === -y && (x = x.mixedAdd(q.points[u].neg()));
            }
            w = w.add(x);
        }
        return w.toP();
    }, l.prototype._wnafMul = function (o, p) {
        var q = 4, r = o._getNAFPoints(q);
        q = r.wnd;
        for (var s = r.points, t = i(p, q, this._bitLength), u = this.jpoint(null, null, null), v = t.length - 1; v >= 0; v--) {
            for (p = 0; v >= 0 && 0 === t[v]; v--)
                p++;
            if (v >= 0 && p++, u = u.dblp(p), v < 0)
                break;
            var w = t[v];
            k(0 !== w), u = 'affine' === o.type ? w > 0 ? u.mixedAdd(s[w - 1 >> 1]) : u.mixedAdd(s[-w - 1 >> 1].neg()) : w > 0 ? u.add(s[w - 1 >> 1]) : u.add(s[-w - 1 >> 1].neg());
        }
        return 'affine' === o.type ? u.toP() : u;
    }, l.prototype._wnafMulAdd = function (o, p, q, r, s) {
        for (var t = this._wnafT1, u = this._wnafT2, v = this._wnafT3, w = 0, x = 0; x < r; x++) {
            var y = (_L = p[x])._getNAFPoints(o);
            t[x] = y.wnd, u[x] = y.points;
        }
        for (x = r - 1; x >= 1; x -= 2) {
            var z = x - 1, A = x;
            if (1 === t[z] && 1 === t[A]) {
                var B = [
                    p[z],
                    null,
                    null,
                    p[A]
                ];
                0 === p[z].y.cmp(p[A].y) ? (B[1] = p[z].add(p[A]), B[2] = p[z].toJ().mixedAdd(p[A].neg())) : 0 === p[z].y.cmp(p[A].y.redNeg()) ? (B[1] = p[z].toJ().mixedAdd(p[A]), B[2] = p[z].add(p[A].neg())) : (B[1] = p[z].toJ().mixedAdd(p[A]), B[2] = p[z].toJ().mixedAdd(p[A].neg()));
                var C = [
                        -3,
                        -1,
                        -5,
                        -7,
                        0,
                        7,
                        5,
                        1,
                        3
                    ], D = j(q[z], q[A]);
                w = Math.max(D[0].length, w), v[z] = new Array(w), v[A] = new Array(w);
                for (var E = 0; E < w; E++) {
                    var F = 0 | D[0][E], G = 0 | D[1][E];
                    v[z][E] = C[3 * (F + 1) + (G + 1)], v[A][E] = 0, u[z] = B;
                }
            } else
                v[z] = i(q[z], t[z], this._bitLength), v[A] = i(q[A], t[A], this._bitLength), w = Math.max(v[z].length, w), w = Math.max(v[A].length, w);
        }
        var H = this.jpoint(null, null, null), I = this._wnafT4;
        for (x = w; x >= 0; x--) {
            for (var J = 0; x >= 0;) {
                var K = !0;
                for (E = 0; E < r; E++)
                    I[E] = 0 | v[E][x], 0 !== I[E] && (K = !1);
                if (!K)
                    break;
                J++, x--;
            }
            if (x >= 0 && J++, H = H.dblp(J), x < 0)
                break;
            for (E = 0; E < r; E++) {
                var _L, M = I[E];
                0 !== M && (M > 0 ? _L = u[E][M - 1 >> 1] : M < 0 && (_L = u[E][-M - 1 >> 1].neg()), H = 'affine' === _L.type ? H.mixedAdd(_L) : H.add(_L));
            }
        }
        for (x = 0; x < r; x++)
            u[x] = null;
        return s ? H : H.toP();
    }, l.BasePoint = n, n.prototype.eq = function () {
        throw new Error('Not implemented');
    }, n.prototype.validate = function () {
        return this.curve.validate(this);
    }, l.prototype.decodePoint = function (o, p) {
        o = h.toArray(o, p);
        var q = this.p.byteLength();
        if ((4 === o[0] || 6 === o[0] || 7 === o[0]) && o.length - 1 == 2 * q)
            return 6 === o[0] ? k(o[o.length - 1] % 2 == 0) : 7 === o[0] && k(o[o.length - 1] % 2 == 1), this.point(o.slice(1, 1 + q), o.slice(1 + q, 1 + 2 * q));
        if ((2 === o[0] || 3 === o[0]) && o.length - 1 === q)
            return this.pointFromX(o.slice(1, 1 + q), 3 === o[0]);
        throw new Error('Unknown point format');
    }, n.prototype.encodeCompressed = function (o) {
        return this.encode(o, !0);
    }, n.prototype._encode = function (o) {
        var p = this.curve.p.byteLength(), q = this.getX().toArray('be', p);
        return o ? [this.getY().isEven() ? 2 : 3].concat(q) : [4].concat(q, this.getY().toArray('be', p));
    }, n.prototype.encode = function (o, p) {
        return h.encode(this._encode(p), o);
    }, n.prototype.precompute = function (o) {
        if (this.precomputed)
            return this;
        var p = {
            doubles: null,
            naf: null,
            beta: null
        };
        return p.naf = this._getNAFPoints(8), p.doubles = this._getDoubles(4, o), p.beta = this._getBeta(), this.precomputed = p, this;
    }, n.prototype._hasDoubles = function (o) {
        if (!this.precomputed)
            return !1;
        var p = this.precomputed.doubles;
        return !!p && p.points.length >= Math.ceil((o.bitLength() + 1) / p.step);
    }, n.prototype._getDoubles = function (o, p) {
        if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
        for (var q = [this], r = this, s = 0; s < p; s += o) {
            for (var t = 0; t < o; t++)
                r = r.dbl();
            q.push(r);
        }
        return {
            step: o,
            points: q
        };
    }, n.prototype._getNAFPoints = function (o) {
        if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
        for (var p = [this], q = (1 << o) - 1, r = 1 === q ? null : this.dbl(), s = 1; s < q; s++)
            p[s] = p[s - 1].add(r);
        return {
            wnd: o,
            points: p
        };
    }, n.prototype._getBeta = function () {
        return null;
    }, n.prototype.dblp = function (o) {
        for (var p = this, q = 0; q < o; q++)
            p = p.dbl();
        return p;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = g.assert;
    function l(m) {
        j.call(this, 'short', m), this.a = new h(m.a, 16).toRed(this.red), this.b = new h(m.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(m), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
    }
    function m(n, o, p, q) {
        j.BasePoint.call(this, n, 'affine'), null === o && null === p ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new h(o, 16), this.y = new h(p, 16), q && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
    }
    function n(o, p, q, r) {
        j.BasePoint.call(this, o, 'jacobian'), null === p && null === q && null === r ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new h(0)) : (this.x = new h(p, 16), this.y = new h(q, 16), this.z = new h(r, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
    }
    i(l, j), e.exports = l, l.prototype._getEndomorphism = function (o) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var p, q;
            if (o.beta)
                p = new h(o.beta, 16).toRed(this.red);
            else {
                var r = this._getEndoRoots(this.p);
                p = (p = r[0].cmp(r[1]) < 0 ? r[0] : r[1]).toRed(this.red);
            }
            if (o.lambda)
                q = new h(o.lambda, 16);
            else {
                var s = this._getEndoRoots(this.n);
                0 === this.g.mul(s[0]).x.cmp(this.g.x.redMul(p)) ? q = s[0] : (q = s[1], k(0 === this.g.mul(q).x.cmp(this.g.x.redMul(p))));
            }
            return {
                beta: p,
                lambda: q,
                basis: o.basis ? o.basis.map(function (t) {
                    return {
                        a: new h(t.a, 16),
                        b: new h(t.b, 16)
                    };
                }) : this._getEndoBasis(q)
            };
        }
    }, l.prototype._getEndoRoots = function (o) {
        var p = o === this.p ? this.red : h.mont(o), q = new h(2).toRed(p).redInvm(), r = q.redNeg(), s = new h(3).toRed(p).redNeg().redSqrt().redMul(q);
        return [
            r.redAdd(s).fromRed(),
            r.redSub(s).fromRed()
        ];
    }, l.prototype._getEndoBasis = function (o) {
        for (var p, q, r, s, t, u, v, w, x, y = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), z = o, A = this.n.clone(), B = new h(1), C = new h(0), D = new h(0), E = new h(1), F = 0; 0 !== z.cmpn(0);) {
            var G = A.div(z);
            w = A.sub(G.mul(z)), x = D.sub(G.mul(B));
            var H = E.sub(G.mul(C));
            if (!r && w.cmp(y) < 0)
                p = v.neg(), q = B, r = w.neg(), s = x;
            else if (r && 2 == ++F)
                break;
            v = w, A = z, z = w, D = B, B = x, E = C, C = H;
        }
        t = w.neg(), u = x;
        var I = r.sqr().add(s.sqr());
        return t.sqr().add(u.sqr()).cmp(I) >= 0 && (t = p, u = q), r.negative && (r = r.neg(), s = s.neg()), t.negative && (t = t.neg(), u = u.neg()), [
            {
                a: r,
                b: s
            },
            {
                a: t,
                b: u
            }
        ];
    }, l.prototype._endoSplit = function (o) {
        var p = this.endo.basis, q = p[0], r = p[1], s = r.b.mul(o).divRound(this.n), t = q.b.neg().mul(o).divRound(this.n), u = s.mul(q.a), v = t.mul(r.a), w = s.mul(q.b), x = t.mul(r.b);
        return {
            k1: o.sub(u).sub(v),
            k2: w.add(x).neg()
        };
    }, l.prototype.pointFromX = function (o, p) {
        (o = new h(o, 16)).red || (o = o.toRed(this.red));
        var q = o.redSqr().redMul(o).redIAdd(o.redMul(this.a)).redIAdd(this.b), r = q.redSqrt();
        if (0 !== r.redSqr().redSub(q).cmp(this.zero))
            throw new Error('invalid point');
        var s = r.fromRed().isOdd();
        return (p && !s || !p && s) && (r = r.redNeg()), this.point(o, r);
    }, l.prototype.validate = function (o) {
        if (o.inf)
            return !0;
        var p = o.x, q = o.y, r = this.a.redMul(p), s = p.redSqr().redMul(p).redIAdd(r).redIAdd(this.b);
        return 0 === q.redSqr().redISub(s).cmpn(0);
    }, l.prototype._endoWnafMulAdd = function (o, p, q) {
        for (var r = this._endoWnafT1, s = this._endoWnafT2, t = 0; t < o.length; t++) {
            var u = this._endoSplit(p[t]), v = o[t], w = v._getBeta();
            u.k1.negative && (u.k1.ineg(), v = v.neg(!0)), u.k2.negative && (u.k2.ineg(), w = w.neg(!0)), r[2 * t] = v, r[2 * t + 1] = w, s[2 * t] = u.k1, s[2 * t + 1] = u.k2;
        }
        for (var x = this._wnafMulAdd(1, r, s, 2 * t, q), y = 0; y < 2 * t; y++)
            r[y] = null, s[y] = null;
        return x;
    }, i(m, j.BasePoint), l.prototype.point = function (o, p, q) {
        return new m(this, o, p, q);
    }, l.prototype.pointFromJSON = function (o, p) {
        return m.fromJSON(this, o, p);
    }, m.prototype._getBeta = function () {
        if (this.curve.endo) {
            var o = this.precomputed;
            if (o && o.beta)
                return o.beta;
            var p = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (o) {
                var q = this.curve, r = function (s) {
                        return q.point(s.x.redMul(q.endo.beta), s.y);
                    };
                o.beta = p, p.precomputed = {
                    beta: null,
                    naf: o.naf && {
                        wnd: o.naf.wnd,
                        points: o.naf.points.map(r)
                    },
                    doubles: o.doubles && {
                        step: o.doubles.step,
                        points: o.doubles.points.map(r)
                    }
                };
            }
            return p;
        }
    }, m.prototype.toJSON = function () {
        return this.precomputed ? [
            this.x,
            this.y,
            this.precomputed && {
                doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                },
                naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                }
            }
        ] : [
            this.x,
            this.y
        ];
    }, m.fromJSON = function (o, p, q) {
        'string' == typeof p && (p = JSON.parse(p));
        var r = o.point(p[0], p[1], q);
        if (!p[2])
            return r;
        function s(t) {
            return o.point(t[0], t[1], q);
        }
        var t = p[2];
        return r.precomputed = {
            beta: null,
            doubles: t.doubles && {
                step: t.doubles.step,
                points: [r].concat(t.doubles.points.map(s))
            },
            naf: t.naf && {
                wnd: t.naf.wnd,
                points: [r].concat(t.naf.points.map(s))
            }
        }, r;
    }, m.prototype.inspect = function () {
        return this.isInfinity() ? '<EC Point Infinity>' : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + '>';
    }, m.prototype.isInfinity = function () {
        return this.inf;
    }, m.prototype.add = function (o) {
        if (this.inf)
            return o;
        if (o.inf)
            return this;
        if (this.eq(o))
            return this.dbl();
        if (this.neg().eq(o))
            return this.curve.point(null, null);
        if (0 === this.x.cmp(o.x))
            return this.curve.point(null, null);
        var p = this.y.redSub(o.y);
        0 !== p.cmpn(0) && (p = p.redMul(this.x.redSub(o.x).redInvm()));
        var q = p.redSqr().redISub(this.x).redISub(o.x), r = p.redMul(this.x.redSub(q)).redISub(this.y);
        return this.curve.point(q, r);
    }, m.prototype.dbl = function () {
        if (this.inf)
            return this;
        var o = this.y.redAdd(this.y);
        if (0 === o.cmpn(0))
            return this.curve.point(null, null);
        var p = this.curve.a, q = this.x.redSqr(), r = o.redInvm(), s = q.redAdd(q).redIAdd(q).redIAdd(p).redMul(r), t = s.redSqr().redISub(this.x.redAdd(this.x)), u = s.redMul(this.x.redSub(t)).redISub(this.y);
        return this.curve.point(t, u);
    }, m.prototype.getX = function () {
        return this.x.fromRed();
    }, m.prototype.getY = function () {
        return this.y.fromRed();
    }, m.prototype.mul = function (o) {
        return o = new h(o, 16), this.isInfinity() ? this : this._hasDoubles(o) ? this.curve._fixedNafMul(this, o) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [o]) : this.curve._wnafMul(this, o);
    }, m.prototype.mulAdd = function (o, p, q) {
        var r = [
                this,
                p
            ], s = [
                o,
                q
            ];
        return this.curve.endo ? this.curve._endoWnafMulAdd(r, s) : this.curve._wnafMulAdd(1, r, s, 2);
    }, m.prototype.jmulAdd = function (o, p, q) {
        var r = [
                this,
                p
            ], s = [
                o,
                q
            ];
        return this.curve.endo ? this.curve._endoWnafMulAdd(r, s, !0) : this.curve._wnafMulAdd(1, r, s, 2, !0);
    }, m.prototype.eq = function (o) {
        return this === o || this.inf === o.inf && (this.inf || 0 === this.x.cmp(o.x) && 0 === this.y.cmp(o.y));
    }, m.prototype.neg = function (o) {
        if (this.inf)
            return this;
        var p = this.curve.point(this.x, this.y.redNeg());
        if (o && this.precomputed) {
            var q = this.precomputed, r = function (s) {
                    return s.neg();
                };
            p.precomputed = {
                naf: q.naf && {
                    wnd: q.naf.wnd,
                    points: q.naf.points.map(r)
                },
                doubles: q.doubles && {
                    step: q.doubles.step,
                    points: q.doubles.points.map(r)
                }
            };
        }
        return p;
    }, m.prototype.toJ = function () {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one);
    }, i(n, j.BasePoint), l.prototype.jpoint = function (o, p, q) {
        return new n(this, o, p, q);
    }, n.prototype.toP = function () {
        if (this.isInfinity())
            return this.curve.point(null, null);
        var o = this.z.redInvm(), p = o.redSqr(), q = this.x.redMul(p), r = this.y.redMul(p).redMul(o);
        return this.curve.point(q, r);
    }, n.prototype.neg = function () {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
    }, n.prototype.add = function (o) {
        if (this.isInfinity())
            return o;
        if (o.isInfinity())
            return this;
        var p = o.z.redSqr(), q = this.z.redSqr(), r = this.x.redMul(p), s = o.x.redMul(q), t = this.y.redMul(p.redMul(o.z)), u = o.y.redMul(q.redMul(this.z)), v = r.redSub(s), w = t.redSub(u);
        if (0 === v.cmpn(0))
            return 0 !== w.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var x = v.redSqr(), y = x.redMul(v), z = r.redMul(x), A = w.redSqr().redIAdd(y).redISub(z).redISub(z), B = w.redMul(z.redISub(A)).redISub(t.redMul(y)), C = this.z.redMul(o.z).redMul(v);
        return this.curve.jpoint(A, B, C);
    }, n.prototype.mixedAdd = function (o) {
        if (this.isInfinity())
            return o.toJ();
        if (o.isInfinity())
            return this;
        var p = this.z.redSqr(), q = this.x, r = o.x.redMul(p), s = this.y, t = o.y.redMul(p).redMul(this.z), u = q.redSub(r), v = s.redSub(t);
        if (0 === u.cmpn(0))
            return 0 !== v.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var w = u.redSqr(), x = w.redMul(u), y = q.redMul(w), z = v.redSqr().redIAdd(x).redISub(y).redISub(y), A = v.redMul(y.redISub(z)).redISub(s.redMul(x)), B = this.z.redMul(u);
        return this.curve.jpoint(z, A, B);
    }, n.prototype.dblp = function (o) {
        if (0 === o)
            return this;
        if (this.isInfinity())
            return this;
        if (!o)
            return this.dbl();
        if (this.curve.zeroA || this.curve.threeA) {
            for (var p = this, q = 0; q < o; q++)
                p = p.dbl();
            return p;
        }
        var r = this.curve.a, s = this.curve.tinv, t = this.x, u = this.y, v = this.z, w = v.redSqr().redSqr(), x = u.redAdd(u);
        for (q = 0; q < o; q++) {
            var y = t.redSqr(), z = x.redSqr(), A = z.redSqr(), B = y.redAdd(y).redIAdd(y).redIAdd(r.redMul(w)), C = t.redMul(z), D = B.redSqr().redISub(C.redAdd(C)), E = C.redISub(D), F = B.redMul(E);
            F = F.redIAdd(F).redISub(A);
            var G = x.redMul(v);
            q + 1 < o && (w = w.redMul(A)), t = D, v = G, x = F;
        }
        return this.curve.jpoint(t, x.redMul(s), v);
    }, n.prototype.dbl = function () {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
    }, n.prototype._zeroDbl = function () {
        var o, p, q;
        if (this.zOne) {
            var r = this.x.redSqr(), s = this.y.redSqr(), t = s.redSqr(), u = this.x.redAdd(s).redSqr().redISub(r).redISub(t);
            u = u.redIAdd(u);
            var v = r.redAdd(r).redIAdd(r), w = v.redSqr().redISub(u).redISub(u), x = t.redIAdd(t);
            x = (x = x.redIAdd(x)).redIAdd(x), o = w, p = v.redMul(u.redISub(w)).redISub(x), q = this.y.redAdd(this.y);
        } else {
            var y = this.x.redSqr(), z = this.y.redSqr(), A = z.redSqr(), B = this.x.redAdd(z).redSqr().redISub(y).redISub(A);
            B = B.redIAdd(B);
            var C = y.redAdd(y).redIAdd(y), D = C.redSqr(), E = A.redIAdd(A);
            E = (E = E.redIAdd(E)).redIAdd(E), o = D.redISub(B).redISub(B), p = C.redMul(B.redISub(o)).redISub(E), q = (q = this.y.redMul(this.z)).redIAdd(q);
        }
        return this.curve.jpoint(o, p, q);
    }, n.prototype._threeDbl = function () {
        var o, p, q;
        if (this.zOne) {
            var r = this.x.redSqr(), s = this.y.redSqr(), t = s.redSqr(), u = this.x.redAdd(s).redSqr().redISub(r).redISub(t);
            u = u.redIAdd(u);
            var v = r.redAdd(r).redIAdd(r).redIAdd(this.curve.a), w = v.redSqr().redISub(u).redISub(u);
            o = w;
            var x = t.redIAdd(t);
            x = (x = x.redIAdd(x)).redIAdd(x), p = v.redMul(u.redISub(w)).redISub(x), q = this.y.redAdd(this.y);
        } else {
            var y = this.z.redSqr(), z = this.y.redSqr(), A = this.x.redMul(z), B = this.x.redSub(y).redMul(this.x.redAdd(y));
            B = B.redAdd(B).redIAdd(B);
            var C = A.redIAdd(A), D = (C = C.redIAdd(C)).redAdd(C);
            o = B.redSqr().redISub(D), q = this.y.redAdd(this.z).redSqr().redISub(z).redISub(y);
            var E = z.redSqr();
            E = (E = (E = E.redIAdd(E)).redIAdd(E)).redIAdd(E), p = B.redMul(C.redISub(o)).redISub(E);
        }
        return this.curve.jpoint(o, p, q);
    }, n.prototype._dbl = function () {
        var o = this.curve.a, p = this.x, q = this.y, r = this.z, s = r.redSqr().redSqr(), t = p.redSqr(), u = q.redSqr(), v = t.redAdd(t).redIAdd(t).redIAdd(o.redMul(s)), w = p.redAdd(p), x = (w = w.redIAdd(w)).redMul(u), y = v.redSqr().redISub(x.redAdd(x)), z = x.redISub(y), A = u.redSqr();
        A = (A = (A = A.redIAdd(A)).redIAdd(A)).redIAdd(A);
        var B = v.redMul(z).redISub(A), C = q.redAdd(q).redMul(r);
        return this.curve.jpoint(y, B, C);
    }, n.prototype.trpl = function () {
        if (!this.curve.zeroA)
            return this.dbl().add(this);
        var o = this.x.redSqr(), p = this.y.redSqr(), q = this.z.redSqr(), r = p.redSqr(), s = o.redAdd(o).redIAdd(o), t = s.redSqr(), u = this.x.redAdd(p).redSqr().redISub(o).redISub(r), v = (u = (u = (u = u.redIAdd(u)).redAdd(u).redIAdd(u)).redISub(t)).redSqr(), w = r.redIAdd(r);
        w = (w = (w = w.redIAdd(w)).redIAdd(w)).redIAdd(w);
        var x = s.redIAdd(u).redSqr().redISub(t).redISub(v).redISub(w), y = p.redMul(x);
        y = (y = y.redIAdd(y)).redIAdd(y);
        var z = this.x.redMul(v).redISub(y);
        z = (z = z.redIAdd(z)).redIAdd(z);
        var A = this.y.redMul(x.redMul(w.redISub(x)).redISub(u.redMul(v)));
        A = (A = (A = A.redIAdd(A)).redIAdd(A)).redIAdd(A);
        var B = this.z.redAdd(u).redSqr().redISub(q).redISub(v);
        return this.curve.jpoint(z, A, B);
    }, n.prototype.mul = function (o, p) {
        return o = new h(o, p), this.curve._wnafMul(this, o);
    }, n.prototype.eq = function (o) {
        if ('affine' === o.type)
            return this.eq(o.toJ());
        if (this === o)
            return !0;
        var p = this.z.redSqr(), q = o.z.redSqr();
        if (0 !== this.x.redMul(q).redISub(o.x.redMul(p)).cmpn(0))
            return !1;
        var r = p.redMul(this.z), s = q.redMul(o.z);
        return 0 === this.y.redMul(s).redISub(o.y.redMul(r)).cmpn(0);
    }, n.prototype.eqXToP = function (o) {
        var p = this.z.redSqr(), q = o.toRed(this.curve.red).redMul(p);
        if (0 === this.x.cmp(q))
            return !0;
        for (var r = o.clone(), s = this.curve.redN.redMul(p);;) {
            if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)
                return !1;
            if (q.redIAdd(s), 0 === this.x.cmp(q))
                return !0;
        }
    }, n.prototype.inspect = function () {
        return this.isInfinity() ? '<EC JPoint Infinity>' : '<EC JPoint x: ' + this.x.toString(16, 2) + ' y: ' + this.y.toString(16, 2) + ' z: ' + this.z.toString(16, 2) + '>';
    }, n.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    function k(l) {
        i.call(this, 'mont', l), this.a = new g(l.a, 16).toRed(this.red), this.b = new g(l.b, 16).toRed(this.red), this.i4 = new g(4).toRed(this.red).redInvm(), this.two = new g(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two));
    }
    function l(m, n, o) {
        i.BasePoint.call(this, m, 'projective'), null === n && null === o ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new g(n, 16), this.z = new g(o, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)));
    }
    h(k, i), e.exports = k, k.prototype.validate = function (m) {
        var n = m.normalize().x, o = n.redSqr(), p = o.redMul(n).redAdd(o.redMul(this.a)).redAdd(n);
        return 0 === p.redSqrt().redSqr().cmp(p);
    }, h(l, i.BasePoint), k.prototype.decodePoint = function (m, n) {
        return this.point(j.toArray(m, n), 1);
    }, k.prototype.point = function (m, n) {
        return new l(this, m, n);
    }, k.prototype.pointFromJSON = function (m) {
        return l.fromJSON(this, m);
    }, l.prototype.precompute = function () {
    }, l.prototype._encode = function () {
        return this.getX().toArray('be', this.curve.p.byteLength());
    }, l.fromJSON = function (m, n) {
        return new l(m, n[0], n[1] || m.one);
    }, l.prototype.inspect = function () {
        return this.isInfinity() ? '<EC Point Infinity>' : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
    }, l.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0);
    }, l.prototype.dbl = function () {
        var m = this.x.redAdd(this.z).redSqr(), n = this.x.redSub(this.z).redSqr(), o = m.redSub(n), p = m.redMul(n), q = o.redMul(n.redAdd(this.curve.a24.redMul(o)));
        return this.curve.point(p, q);
    }, l.prototype.add = function () {
        throw new Error('Not supported on Montgomery curve');
    }, l.prototype.diffAdd = function (m, n) {
        var o = this.x.redAdd(this.z), p = this.x.redSub(this.z), q = m.x.redAdd(m.z), r = m.x.redSub(m.z).redMul(o), s = q.redMul(p), t = n.z.redMul(r.redAdd(s).redSqr()), u = n.x.redMul(r.redISub(s).redSqr());
        return this.curve.point(t, u);
    }, l.prototype.mul = function (m) {
        for (var n = m.clone(), o = this, p = this.curve.point(null, null), q = []; 0 !== n.cmpn(0); n.iushrn(1))
            q.push(n.andln(1));
        for (var r = q.length - 1; r >= 0; r--)
            0 === q[r] ? (o = o.diffAdd(p, this), p = p.dbl()) : (p = o.diffAdd(p, this), o = o.dbl());
        return p;
    }, l.prototype.mulAdd = function () {
        throw new Error('Not supported on Montgomery curve');
    }, l.prototype.jumlAdd = function () {
        throw new Error('Not supported on Montgomery curve');
    }, l.prototype.eq = function (m) {
        return 0 === this.getX().cmp(m.getX());
    }, l.prototype.normalize = function () {
        return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this;
    }, l.prototype.getX = function () {
        return this.normalize(), this.x.fromRed();
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = g.assert;
    function l(m) {
        this.twisted = 1 != (0 | m.a), this.mOneA = this.twisted && -1 == (0 | m.a), this.extended = this.mOneA, j.call(this, 'edwards', m), this.a = new h(m.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new h(m.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new h(m.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), k(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | m.c);
    }
    function m(n, o, p, q, r) {
        j.BasePoint.call(this, n, 'projective'), null === o && null === p && null === q ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new h(o, 16), this.y = new h(p, 16), this.z = q ? new h(q, 16) : this.curve.one, this.t = r && new h(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
    }
    i(l, j), e.exports = l, l.prototype._mulA = function (n) {
        return this.mOneA ? n.redNeg() : this.a.redMul(n);
    }, l.prototype._mulC = function (n) {
        return this.oneC ? n : this.c.redMul(n);
    }, l.prototype.jpoint = function (n, o, p, q) {
        return this.point(n, o, p, q);
    }, l.prototype.pointFromX = function (n, o) {
        (n = new h(n, 16)).red || (n = n.toRed(this.red));
        var p = n.redSqr(), q = this.c2.redSub(this.a.redMul(p)), r = this.one.redSub(this.c2.redMul(this.d).redMul(p)), s = q.redMul(r.redInvm()), t = s.redSqrt();
        if (0 !== t.redSqr().redSub(s).cmp(this.zero))
            throw new Error('invalid point');
        var u = t.fromRed().isOdd();
        return (o && !u || !o && u) && (t = t.redNeg()), this.point(n, t);
    }, l.prototype.pointFromY = function (n, o) {
        (n = new h(n, 16)).red || (n = n.toRed(this.red));
        var p = n.redSqr(), q = p.redSub(this.c2), r = p.redMul(this.d).redMul(this.c2).redSub(this.a), s = q.redMul(r.redInvm());
        if (0 === s.cmp(this.zero)) {
            if (o)
                throw new Error('invalid point');
            return this.point(this.zero, n);
        }
        var t = s.redSqrt();
        if (0 !== t.redSqr().redSub(s).cmp(this.zero))
            throw new Error('invalid point');
        return t.fromRed().isOdd() !== o && (t = t.redNeg()), this.point(t, n);
    }, l.prototype.validate = function (n) {
        if (n.isInfinity())
            return !0;
        n.normalize();
        var o = n.x.redSqr(), p = n.y.redSqr(), q = o.redMul(this.a).redAdd(p), r = this.c2.redMul(this.one.redAdd(this.d.redMul(o).redMul(p)));
        return 0 === q.cmp(r);
    }, i(m, j.BasePoint), l.prototype.pointFromJSON = function (n) {
        return m.fromJSON(this, n);
    }, l.prototype.point = function (n, o, p, q) {
        return new m(this, n, o, p, q);
    }, m.fromJSON = function (n, o) {
        return new m(n, o[0], o[1], o[2]);
    }, m.prototype.inspect = function () {
        return this.isInfinity() ? '<EC Point Infinity>' : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
    }, m.prototype.isInfinity = function () {
        return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c));
    }, m.prototype._extDbl = function () {
        var n = this.x.redSqr(), o = this.y.redSqr(), p = this.z.redSqr();
        p = p.redIAdd(p);
        var q = this.curve._mulA(n), r = this.x.redAdd(this.y).redSqr().redISub(n).redISub(o), s = q.redAdd(o), t = s.redSub(p), u = q.redSub(o), v = r.redMul(t), w = s.redMul(u), x = r.redMul(u), y = t.redMul(s);
        return this.curve.point(v, w, y, x);
    }, m.prototype._projDbl = function () {
        var n, o, p, q = this.x.redAdd(this.y).redSqr(), r = this.x.redSqr(), s = this.y.redSqr();
        if (this.curve.twisted) {
            var t = (m = this.curve._mulA(r)).redAdd(s);
            if (this.zOne)
                n = q.redSub(r).redSub(s).redMul(t.redSub(this.curve.two)), o = t.redMul(m.redSub(s)), p = t.redSqr().redSub(t).redSub(t);
            else {
                var u = this.z.redSqr(), v = t.redSub(u).redISub(u);
                n = q.redSub(r).redISub(s).redMul(v), o = t.redMul(m.redSub(s)), p = t.redMul(v);
            }
        } else {
            var w = r.redAdd(s);
            u = this.curve._mulC(this.z).redSqr(), v = w.redSub(u).redSub(u);
            n = this.curve._mulC(q.redISub(w)).redMul(v), o = this.curve._mulC(w).redMul(r.redISub(s)), p = w.redMul(v);
        }
        return this.curve.point(n, o, p);
    }, m.prototype.dbl = function () {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
    }, m.prototype._extAdd = function (n) {
        var o = this.y.redSub(this.x).redMul(n.y.redSub(n.x)), p = this.y.redAdd(this.x).redMul(n.y.redAdd(n.x)), q = this.t.redMul(this.curve.dd).redMul(n.t), r = this.z.redMul(n.z.redAdd(n.z)), s = p.redSub(o), t = r.redSub(q), u = r.redAdd(q), v = p.redAdd(o), w = s.redMul(t), x = u.redMul(v), y = s.redMul(v), z = t.redMul(u);
        return this.curve.point(w, x, z, y);
    }, m.prototype._projAdd = function (n) {
        var o, p, q = this.z.redMul(n.z), r = q.redSqr(), s = this.x.redMul(n.x), t = this.y.redMul(n.y), u = this.curve.d.redMul(s).redMul(t), v = r.redSub(u), w = r.redAdd(u), x = this.x.redAdd(this.y).redMul(n.x.redAdd(n.y)).redISub(s).redISub(t), y = q.redMul(v).redMul(x);
        return this.curve.twisted ? (o = q.redMul(w).redMul(t.redSub(this.curve._mulA(s))), p = v.redMul(w)) : (o = q.redMul(w).redMul(t.redSub(s)), p = this.curve._mulC(v).redMul(w)), this.curve.point(y, o, p);
    }, m.prototype.add = function (n) {
        return this.isInfinity() ? n : n.isInfinity() ? this : this.curve.extended ? this._extAdd(n) : this._projAdd(n);
    }, m.prototype.mul = function (n) {
        return this._hasDoubles(n) ? this.curve._fixedNafMul(this, n) : this.curve._wnafMul(this, n);
    }, m.prototype.mulAdd = function (n, o, p) {
        return this.curve._wnafMulAdd(1, [
            this,
            o
        ], [
            n,
            p
        ], 2, !1);
    }, m.prototype.jmulAdd = function (n, o, p) {
        return this.curve._wnafMulAdd(1, [
            this,
            o
        ], [
            n,
            p
        ], 2, !0);
    }, m.prototype.normalize = function () {
        if (this.zOne)
            return this;
        var n = this.z.redInvm();
        return this.x = this.x.redMul(n), this.y = this.y.redMul(n), this.t && (this.t = this.t.redMul(n)), this.z = this.curve.one, this.zOne = !0, this;
    }, m.prototype.neg = function () {
        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
    }, m.prototype.getX = function () {
        return this.normalize(), this.x.fromRed();
    }, m.prototype.getY = function () {
        return this.normalize(), this.y.fromRed();
    }, m.prototype.eq = function (n) {
        return this === n || 0 === this.getX().cmp(n.getX()) && 0 === this.getY().cmp(n.getY());
    }, m.prototype.eqXToP = function (n) {
        var o = n.toRed(this.curve.red).redMul(this.z);
        if (0 === this.x.cmp(o))
            return !0;
        for (var p = n.clone(), q = this.curve.redN.redMul(this.z);;) {
            if (p.iadd(this.curve.n), p.cmp(this.curve.p) >= 0)
                return !1;
            if (o.redIAdd(q), 0 === this.x.cmp(o))
                return !0;
        }
    }, m.prototype.toP = m.prototype.normalize, m.prototype.mixedAdd = m.prototype.add;
}), d.register('.....', function (e, f) {
    var g, h = e.exports, i = d('.....'), j = d('.....'), k = d('.....').assert;
    function l(m) {
        'short' === m.type ? this.curve = new j.short(m) : 'edwards' === m.type ? this.curve = new j.edwards(m) : this.curve = new j.mont(m), this.g = this.curve.g, this.n = this.curve.n, this.hash = m.hash, k(this.g.validate(), 'Invalid curve'), k(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
    }
    function m(n, o) {
        Object.defineProperty(h, n, {
            configurable: !0,
            enumerable: !0,
            get: function () {
                var p = new l(o);
                return Object.defineProperty(h, n, {
                    configurable: !0,
                    enumerable: !0,
                    value: p
                }), p;
            }
        });
    }
    h.PresetCurve = l, m('p192', {
        type: 'short',
        prime: 'p192',
        p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
        a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
        b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
        n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
        hash: i.sha256,
        gRed: !1,
        g: [
            '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012',
            '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811'
        ]
    }), m('p224', {
        type: 'short',
        prime: 'p224',
        p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
        a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
        b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
        n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
        hash: i.sha256,
        gRed: !1,
        g: [
            'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21',
            'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34'
        ]
    }), m('p256', {
        type: 'short',
        prime: null,
        p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
        a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
        b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
        n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
        hash: i.sha256,
        gRed: !1,
        g: [
            '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296',
            '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5'
        ]
    }), m('p384', {
        type: 'short',
        prime: null,
        p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff',
        a: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc',
        b: 'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
        n: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
        hash: i.sha384,
        gRed: !1,
        g: [
            'aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7',
            '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f'
        ]
    }), m('p521', {
        type: 'short',
        prime: null,
        p: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff',
        a: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc',
        b: '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
        n: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
        hash: i.sha512,
        gRed: !1,
        g: [
            '000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66',
            '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650'
        ]
    }), m('curve25519', {
        type: 'mont',
        prime: 'p25519',
        p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
        a: '76d06',
        b: '1',
        n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
        hash: i.sha256,
        gRed: !1,
        g: ['9']
    }), m('ed25519', {
        type: 'edwards',
        prime: 'p25519',
        p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
        a: '-1',
        c: '1',
        d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
        n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
        hash: i.sha256,
        gRed: !1,
        g: [
            '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',
            '6666666666666666666666666666666666666666666666666666666666666658'
        ]
    });
    try {
        g = d('.....');
    } catch (e) {
        g = void 0;
    }
    m('secp256k1', {
        type: 'short',
        prime: 'k256',
        p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
        a: '0',
        b: '7',
        n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
        h: '1',
        hash: i.sha256,
        beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
        lambda: '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
        basis: [
            {
                a: '3086d221a7d46bcde86c90e49284eb15',
                b: '-e4437ed6010e88286f547fa90abfe4c3'
            },
            {
                a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
                b: '3086d221a7d46bcde86c90e49284eb15'
            }
        ],
        gRed: !1,
        g: [
            '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
            '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
            g
        ]
    });
}), d.register('.....', function (e, f) {
    var g = e.exports;
    g.utils = d('.....'), g.common = d('.....'), g.sha = d('.....'), g.ripemd = d('.....'), g.hmac = d('.....'), g.sha1 = g.sha.sha1, g.sha256 = g.sha.sha256, g.sha224 = g.sha.sha224, g.sha384 = g.sha.sha384, g.sha512 = g.sha.sha512, g.ripemd160 = g.ripemd.ripemd160;
}), d.register('.....', function (e, f) {
    var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F;
    a(e.exports, 'inherits', function () {
        return g;
    }, function (G) {
        return g = G;
    }), a(e.exports, 'toArray', function () {
        return h;
    }, function (G) {
        return h = G;
    }), a(e.exports, 'toHex', function () {
        return i;
    }, function (G) {
        return i = G;
    }), a(e.exports, 'htonl', function () {
        return j;
    }, function (G) {
        return j = G;
    }), a(e.exports, 'toHex32', function () {
        return k;
    }, function (G) {
        return k = G;
    }), a(e.exports, 'zero2', function () {
        return l;
    }, function (G) {
        return l = G;
    }), a(e.exports, 'zero8', function () {
        return m;
    }, function (G) {
        return m = G;
    }), a(e.exports, 'join32', function () {
        return n;
    }, function (G) {
        return n = G;
    }), a(e.exports, 'split32', function () {
        return o;
    }, function (G) {
        return o = G;
    }), a(e.exports, 'rotr32', function () {
        return p;
    }, function (G) {
        return p = G;
    }), a(e.exports, 'rotl32', function () {
        return q;
    }, function (G) {
        return q = G;
    }), a(e.exports, 'sum32', function () {
        return r;
    }, function (G) {
        return r = G;
    }), a(e.exports, 'sum32_3', function () {
        return s;
    }, function (G) {
        return s = G;
    }), a(e.exports, 'sum32_4', function () {
        return t;
    }, function (G) {
        return t = G;
    }), a(e.exports, 'sum32_5', function () {
        return u;
    }, function (G) {
        return u = G;
    }), a(e.exports, 'sum64', function () {
        return v;
    }, function (G) {
        return v = G;
    }), a(e.exports, 'sum64_hi', function () {
        return w;
    }, function (G) {
        return w = G;
    }), a(e.exports, 'sum64_lo', function () {
        return x;
    }, function (G) {
        return x = G;
    }), a(e.exports, 'sum64_4_hi', function () {
        return y;
    }, function (G) {
        return y = G;
    }), a(e.exports, 'sum64_4_lo', function () {
        return z;
    }, function (G) {
        return z = G;
    }), a(e.exports, 'sum64_5_hi', function () {
        return A;
    }, function (G) {
        return A = G;
    }), a(e.exports, 'sum64_5_lo', function () {
        return B;
    }, function (G) {
        return B = G;
    }), a(e.exports, 'rotr64_hi', function () {
        return C;
    }, function (G) {
        return C = G;
    }), a(e.exports, 'rotr64_lo', function () {
        return D;
    }, function (G) {
        return D = G;
    }), a(e.exports, 'shr64_hi', function () {
        return E;
    }, function (G) {
        return E = G;
    }), a(e.exports, 'shr64_lo', function () {
        return F;
    }, function (G) {
        return F = G;
    });
    var G = d('.....'), H = d('.....');
    function I(J, K) {
        return 55296 == (64512 & J.charCodeAt(K)) && (!(K < 0 || K + 1 >= J.length) && 56320 == (64512 & J.charCodeAt(K + 1)));
    }
    function J(K) {
        return (K >>> 24 | K >>> 8 & 65280 | K << 8 & 16711680 | (255 & K) << 24) >>> 0;
    }
    function K(L) {
        return 1 === L.length ? '0' + L : L;
    }
    function L(M) {
        return 7 === M.length ? '0' + M : 6 === M.length ? '00' + M : 5 === M.length ? '000' + M : 4 === M.length ? '0000' + M : 3 === M.length ? '00000' + M : 2 === M.length ? '000000' + M : 1 === M.length ? '0000000' + M : M;
    }
    g = H, h = function (M, N) {
        if (Array.isArray(M))
            return M.slice();
        if (!M)
            return [];
        var O = [];
        if ('string' == typeof M)
            if (N) {
                if ('hex' === N)
                    for ((M = M.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (M = '0' + M), g = 0; g < M.length; g += 2)
                        O.push(parseInt(M[g] + M[g + 1], 16));
            } else
                for (var P = 0, Q = 0; Q < M.length; Q++) {
                    var R = M.charCodeAt(Q);
                    R < 128 ? O[P++] = R : R < 2048 ? (O[P++] = R >> 6 | 192, O[P++] = 63 & R | 128) : I(M, Q) ? (R = 65536 + ((1023 & R) << 10) + (1023 & M.charCodeAt(++Q)), O[P++] = R >> 18 | 240, O[P++] = R >> 12 & 63 | 128, O[P++] = R >> 6 & 63 | 128, O[P++] = 63 & R | 128) : (O[P++] = R >> 12 | 224, O[P++] = R >> 6 & 63 | 128, O[P++] = 63 & R | 128);
                }
        else
            for (Q = 0; Q < M.length; Q++)
                O[Q] = 0 | M[Q];
        return O;
    }, i = function (M) {
        for (var N = '', O = 0; O < M.length; O++)
            N += K(M[O].toString(16));
        return N;
    }, j = J, k = function (M, N) {
        for (var O = '', P = 0; P < M.length; P++) {
            var Q = M[P];
            'little' === N && (Q = J(Q)), O += L(Q.toString(16));
        }
        return O;
    }, l = K, m = L, n = function (M, N, O, P) {
        var Q = O - N;
        G(Q % 4 == 0);
        for (var R = new Array(Q / 4), S = 0, T = N; S < R.length; S++, T += 4) {
            var U;
            U = 'big' === P ? M[T] << 24 | M[T + 1] << 16 | M[T + 2] << 8 | M[T + 3] : M[T + 3] << 24 | M[T + 2] << 16 | M[T + 1] << 8 | M[T], R[S] = U >>> 0;
        }
        return R;
    }, o = function (M, N) {
        for (var O = new Array(4 * M.length), P = 0, Q = 0; P < M.length; P++, Q += 4) {
            var R = M[P];
            'big' === N ? (O[Q] = R >>> 24, O[Q + 1] = R >>> 16 & 255, O[Q + 2] = R >>> 8 & 255, O[Q + 3] = 255 & R) : (O[Q + 3] = R >>> 24, O[Q + 2] = R >>> 16 & 255, O[Q + 1] = R >>> 8 & 255, O[Q] = 255 & R);
        }
        return O;
    }, p = function (M, N) {
        return M >>> N | M << 32 - N;
    }, q = function (M, N) {
        return M << N | M >>> 32 - N;
    }, r = function (M, N) {
        return M + N >>> 0;
    }, s = function (M, N, O) {
        return M + N + O >>> 0;
    }, t = function (M, N, O, P) {
        return M + N + O + P >>> 0;
    }, u = function (M, N, O, P, Q) {
        return M + N + O + P + Q >>> 0;
    }, v = function (M, N, O, P) {
        var Q = M[N], R = P + M[N + 1] >>> 0, S = (R < P ? 1 : 0) + O + Q;
        M[N] = S >>> 0, M[N + 1] = R;
    }, w = function (M, N, O, P) {
        return (N + P >>> 0 < N ? 1 : 0) + M + O >>> 0;
    }, x = function (M, N, O, P) {
        return N + P >>> 0;
    }, y = function (M, N, O, P, Q, R, S, T) {
        var U = 0, V = N;
        return U += (V = V + P >>> 0) < N ? 1 : 0, U += (V = V + R >>> 0) < R ? 1 : 0, M + O + Q + S + (U += (V = V + T >>> 0) < T ? 1 : 0) >>> 0;
    }, z = function (M, N, O, P, Q, R, S, T) {
        return N + P + R + T >>> 0;
    }, A = function (M, N, O, P, Q, R, S, T, U, V) {
        var W = 0, X = N;
        return W += (X = X + P >>> 0) < N ? 1 : 0, W += (X = X + R >>> 0) < R ? 1 : 0, W += (X = X + T >>> 0) < T ? 1 : 0, M + O + Q + S + U + (W += (X = X + V >>> 0) < V ? 1 : 0) >>> 0;
    }, B = function (M, N, O, P, Q, R, S, T, U, V) {
        return N + P + R + T + V >>> 0;
    }, C = function (M, N, O) {
        return (N << 32 - O | M >>> O) >>> 0;
    }, D = function (M, N, O) {
        return (M << 32 - O | N >>> O) >>> 0;
    }, E = function (M, N, O) {
        return M >>> O;
    }, F = function (M, N, O) {
        return (M << 32 - O | N >>> O) >>> 0;
    };
}), d.register('.....', function (e, f) {
    var g;
    a(e.exports, 'BlockHash', function () {
        return g;
    }, function (h) {
        return g = h;
    });
    var h = d('.....'), i = d('.....');
    function j() {
        this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = 'big', this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
    }
    g = j, j.prototype.update = function (k, l) {
        if (k = h.toArray(k, l), this.pending ? this.pending = this.pending.concat(k) : this.pending = k, this.pendingTotal += k.length, this.pending.length >= this._delta8) {
            var m = (k = this.pending).length % this._delta8;
            this.pending = k.slice(k.length - m, k.length), 0 === this.pending.length && (this.pending = null), k = h.join32(k, 0, k.length - m, this.endian);
            for (var n = 0; n < k.length; n += this._delta32)
                this._update(k, n, n + this._delta32);
        }
        return this;
    }, j.prototype.digest = function (k) {
        return this.update(this._pad()), i(null === this.pending), this._digest(k);
    }, j.prototype._pad = function () {
        var k = this.pendingTotal, l = this._delta8, m = l - (k + this.padLength) % l, n = new Array(m + this.padLength);
        n[0] = 128;
        for (var o = 1; o < m; o++)
            n[o] = 0;
        if (k <<= 3, 'big' === this.endian) {
            for (var p = 8; p < this.padLength; p++)
                n[o++] = 0;
            n[o++] = 0, n[o++] = 0, n[o++] = 0, n[o++] = 0, n[o++] = k >>> 24 & 255, n[o++] = k >>> 16 & 255, n[o++] = k >>> 8 & 255, n[o++] = 255 & k;
        } else
            for (n[o++] = 255 & k, n[o++] = k >>> 8 & 255, n[o++] = k >>> 16 & 255, n[o++] = k >>> 24 & 255, n[o++] = 0, n[o++] = 0, n[o++] = 0, n[o++] = 0, p = 8; p < this.padLength; p++)
                n[o++] = 0;
        return n;
    };
}), d.register('.....', function (e, f) {
    var g, h, i, j, k;
    a(e.exports, 'sha1', function () {
        return g;
    }, function (l) {
        return g = l;
    }), a(e.exports, 'sha224', function () {
        return h;
    }, function (l) {
        return h = l;
    }), a(e.exports, 'sha256', function () {
        return i;
    }, function (l) {
        return i = l;
    }), a(e.exports, 'sha384', function () {
        return j;
    }, function (l) {
        return j = l;
    }), a(e.exports, 'sha512', function () {
        return k;
    }, function (l) {
        return k = l;
    }), g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....');
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = g.rotl32, k = g.sum32, l = g.sum32_5, m = i.ft_1, n = h.BlockHash, o = [
            1518500249,
            1859775393,
            2400959708,
            3395469782
        ];
    function p() {
        if (!(this instanceof p))
            return new p();
        n.call(this), this.h = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
        ], this.W = new Array(80);
    }
    g.inherits(p, n), e.exports = p, p.blockSize = 512, p.outSize = 160, p.hmacStrength = 80, p.padLength = 64, p.prototype._update = function (q, r) {
        for (var s = this.W, t = 0; t < 16; t++)
            s[t] = q[r + t];
        for (; t < s.length; t++)
            s[t] = j(s[t - 3] ^ s[t - 8] ^ s[t - 14] ^ s[t - 16], 1);
        var u = this.h[0], v = this.h[1], w = this.h[2], x = this.h[3], y = this.h[4];
        for (t = 0; t < s.length; t++) {
            var z = ~~(t / 20), A = l(j(u, 5), m(z, v, w, x), y, s[t], o[z]);
            y = x, x = w, w = j(v, 30), v = u, u = A;
        }
        this.h[0] = k(this.h[0], u), this.h[1] = k(this.h[1], v), this.h[2] = k(this.h[2], w), this.h[3] = k(this.h[3], x), this.h[4] = k(this.h[4], y);
    }, p.prototype._digest = function (q) {
        return 'hex' === q ? g.toHex32(this.h, 'big') : g.split32(this.h, 'big');
    };
}), d.register('.....', function (e, f) {
    var g, h, i, j, k, l, m;
    a(e.exports, 'ft_1', function () {
        return g;
    }, function (n) {
        return g = n;
    }), a(e.exports, 'ch32', function () {
        return h;
    }, function (n) {
        return h = n;
    }), a(e.exports, 'maj32', function () {
        return i;
    }, function (n) {
        return i = n;
    }), a(e.exports, 's0_256', function () {
        return j;
    }, function (n) {
        return j = n;
    }), a(e.exports, 's1_256', function () {
        return k;
    }, function (n) {
        return k = n;
    }), a(e.exports, 'g0_256', function () {
        return l;
    }, function (n) {
        return l = n;
    }), a(e.exports, 'g1_256', function () {
        return m;
    }, function (n) {
        return m = n;
    });
    var n = d('.....').rotr32;
    function o(p, q, r) {
        return p & q ^ ~p & r;
    }
    function p(q, r, s) {
        return q & r ^ q & s ^ r & s;
    }
    function q(r, s, t) {
        return r ^ s ^ t;
    }
    g = function (r, s, t, u) {
        return 0 === r ? o(s, t, u) : 1 === r || 3 === r ? q(s, t, u) : 2 === r ? p(s, t, u) : void 0;
    }, h = o, i = p, j = function (r) {
        return n(r, 2) ^ n(r, 13) ^ n(r, 22);
    }, k = function (r) {
        return n(r, 6) ^ n(r, 11) ^ n(r, 25);
    }, l = function (r) {
        return n(r, 7) ^ n(r, 18) ^ r >>> 3;
    }, m = function (r) {
        return n(r, 17) ^ n(r, 19) ^ r >>> 10;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    function i() {
        if (!(this instanceof i))
            return new i();
        h.call(this), this.h = [
            3238371032,
            914150663,
            812702999,
            4144912697,
            4290775857,
            1750603025,
            1694076839,
            3204075428
        ];
    }
    g.inherits(i, h), e.exports = i, i.blockSize = 512, i.outSize = 224, i.hmacStrength = 192, i.padLength = 64, i.prototype._digest = function (j) {
        return 'hex' === j ? g.toHex32(this.h.slice(0, 7), 'big') : g.split32(this.h.slice(0, 7), 'big');
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = g.sum32, l = g.sum32_4, m = g.sum32_5, n = i.ch32, o = i.maj32, p = i.s0_256, q = i.s1_256, r = i.g0_256, s = i.g1_256, t = h.BlockHash, u = [
            1116352408,
            1899447441,
            3049323471,
            3921009573,
            961987163,
            1508970993,
            2453635748,
            2870763221,
            3624381080,
            310598401,
            607225278,
            1426881987,
            1925078388,
            2162078206,
            2614888103,
            3248222580,
            3835390401,
            4022224774,
            264347078,
            604807628,
            770255983,
            1249150122,
            1555081692,
            1996064986,
            2554220882,
            2821834349,
            2952996808,
            3210313671,
            3336571891,
            3584528711,
            113926993,
            338241895,
            666307205,
            773529912,
            1294757372,
            1396182291,
            1695183700,
            1986661051,
            2177026350,
            2456956037,
            2730485921,
            2820302411,
            3259730800,
            3345764771,
            3516065817,
            3600352804,
            4094571909,
            275423344,
            430227734,
            506948616,
            659060556,
            883997877,
            958139571,
            1322822218,
            1537002063,
            1747873779,
            1955562222,
            2024104815,
            2227730452,
            2361852424,
            2428436474,
            2756734187,
            3204031479,
            3329325298
        ];
    function v() {
        if (!(this instanceof v))
            return new v();
        t.call(this), this.h = [
            1779033703,
            3144134277,
            1013904242,
            2773480762,
            1359893119,
            2600822924,
            528734635,
            1541459225
        ], this.k = u, this.W = new Array(64);
    }
    g.inherits(v, t), e.exports = v, v.blockSize = 512, v.outSize = 256, v.hmacStrength = 192, v.padLength = 64, v.prototype._update = function (w, x) {
        for (var y = this.W, z = 0; z < 16; z++)
            y[z] = w[x + z];
        for (; z < y.length; z++)
            y[z] = l(s(y[z - 2]), y[z - 7], r(y[z - 15]), y[z - 16]);
        var A = this.h[0], B = this.h[1], C = this.h[2], D = this.h[3], E = this.h[4], F = this.h[5], G = this.h[6], H = this.h[7];
        for (j(this.k.length === y.length), z = 0; z < y.length; z++) {
            var I = m(H, q(E), n(E, F, G), this.k[z], y[z]), J = k(p(A), o(A, B, C));
            H = G, G = F, F = E, E = k(D, I), D = C, C = B, B = A, A = k(I, J);
        }
        this.h[0] = k(this.h[0], A), this.h[1] = k(this.h[1], B), this.h[2] = k(this.h[2], C), this.h[3] = k(this.h[3], D), this.h[4] = k(this.h[4], E), this.h[5] = k(this.h[5], F), this.h[6] = k(this.h[6], G), this.h[7] = k(this.h[7], H);
    }, v.prototype._digest = function (w) {
        return 'hex' === w ? g.toHex32(this.h, 'big') : g.split32(this.h, 'big');
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    function i() {
        if (!(this instanceof i))
            return new i();
        h.call(this), this.h = [
            3418070365,
            3238371032,
            1654270250,
            914150663,
            2438529370,
            812702999,
            355462360,
            4144912697,
            1731405415,
            4290775857,
            2394180231,
            1750603025,
            3675008525,
            1694076839,
            1203062813,
            3204075428
        ];
    }
    g.inherits(i, h), e.exports = i, i.blockSize = 1024, i.outSize = 384, i.hmacStrength = 192, i.padLength = 128, i.prototype._digest = function (j) {
        return 'hex' === j ? g.toHex32(this.h.slice(0, 12), 'big') : g.split32(this.h.slice(0, 12), 'big');
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = g.rotr64_hi, k = g.rotr64_lo, l = g.shr64_hi, m = g.shr64_lo, n = g.sum64, o = g.sum64_hi, p = g.sum64_lo, q = g.sum64_4_hi, r = g.sum64_4_lo, s = g.sum64_5_hi, t = g.sum64_5_lo, u = h.BlockHash, v = [
            1116352408,
            3609767458,
            1899447441,
            602891725,
            3049323471,
            3964484399,
            3921009573,
            2173295548,
            961987163,
            4081628472,
            1508970993,
            3053834265,
            2453635748,
            2937671579,
            2870763221,
            3664609560,
            3624381080,
            2734883394,
            310598401,
            1164996542,
            607225278,
            1323610764,
            1426881987,
            3590304994,
            1925078388,
            4068182383,
            2162078206,
            991336113,
            2614888103,
            633803317,
            3248222580,
            3479774868,
            3835390401,
            2666613458,
            4022224774,
            944711139,
            264347078,
            2341262773,
            604807628,
            2007800933,
            770255983,
            1495990901,
            1249150122,
            1856431235,
            1555081692,
            3175218132,
            1996064986,
            2198950837,
            2554220882,
            3999719339,
            2821834349,
            766784016,
            2952996808,
            2566594879,
            3210313671,
            3203337956,
            3336571891,
            1034457026,
            3584528711,
            2466948901,
            113926993,
            3758326383,
            338241895,
            168717936,
            666307205,
            1188179964,
            773529912,
            1546045734,
            1294757372,
            1522805485,
            1396182291,
            2643833823,
            1695183700,
            2343527390,
            1986661051,
            1014477480,
            2177026350,
            1206759142,
            2456956037,
            344077627,
            2730485921,
            1290863460,
            2820302411,
            3158454273,
            3259730800,
            3505952657,
            3345764771,
            106217008,
            3516065817,
            3606008344,
            3600352804,
            1432725776,
            4094571909,
            1467031594,
            275423344,
            851169720,
            430227734,
            3100823752,
            506948616,
            1363258195,
            659060556,
            3750685593,
            883997877,
            3785050280,
            958139571,
            3318307427,
            1322822218,
            3812723403,
            1537002063,
            2003034995,
            1747873779,
            3602036899,
            1955562222,
            1575990012,
            2024104815,
            1125592928,
            2227730452,
            2716904306,
            2361852424,
            442776044,
            2428436474,
            593698344,
            2756734187,
            3733110249,
            3204031479,
            2999351573,
            3329325298,
            3815920427,
            3391569614,
            3928383900,
            3515267271,
            566280711,
            3940187606,
            3454069534,
            4118630271,
            4000239992,
            116418474,
            1914138554,
            174292421,
            2731055270,
            289380356,
            3203993006,
            460393269,
            320620315,
            685471733,
            587496836,
            852142971,
            1086792851,
            1017036298,
            365543100,
            1126000580,
            2618297676,
            1288033470,
            3409855158,
            1501505948,
            4234509866,
            1607167915,
            987167468,
            1816402316,
            1246189591
        ];
    function w() {
        if (!(this instanceof w))
            return new w();
        u.call(this), this.h = [
            1779033703,
            4089235720,
            3144134277,
            2227873595,
            1013904242,
            4271175723,
            2773480762,
            1595750129,
            1359893119,
            2917565137,
            2600822924,
            725511199,
            528734635,
            4215389547,
            1541459225,
            327033209
        ], this.k = v, this.W = new Array(160);
    }
    function x(y, z, A, B, C) {
        var D = y & A ^ ~y & C;
        return D < 0 && (D += 4294967296), D;
    }
    function z(A, B, C, D, E, F) {
        var G = B & D ^ ~B & F;
        return G < 0 && (G += 4294967296), G;
    }
    function B(C, D, E, F, G) {
        var H = C & E ^ C & G ^ E & G;
        return H < 0 && (H += 4294967296), H;
    }
    function D(E, F, G, H, I, J) {
        var K = F & H ^ F & J ^ H & J;
        return K < 0 && (K += 4294967296), K;
    }
    function F(G, H) {
        var I = K(G, H, 28) ^ K(H, G, 2) ^ K(H, G, 7);
        return I < 0 && (I += 4294967296), I;
    }
    function H(I, J) {
        var K = k(I, J, 28) ^ k(J, I, 2) ^ k(J, I, 7);
        return K < 0 && (K += 4294967296), K;
    }
    function J(K, L) {
        var M = K(K, L, 14) ^ K(K, L, 18) ^ K(L, K, 9);
        return M < 0 && (M += 4294967296), M;
    }
    function L(M, N) {
        var O = k(M, N, 14) ^ k(M, N, 18) ^ k(N, M, 9);
        return O < 0 && (O += 4294967296), O;
    }
    function N(O, P) {
        var Q = K(O, P, 1) ^ K(O, P, 8) ^ l(O, P, 7);
        return Q < 0 && (Q += 4294967296), Q;
    }
    function P(Q, R) {
        var S = k(Q, R, 1) ^ k(Q, R, 8) ^ m(Q, R, 7);
        return S < 0 && (S += 4294967296), S;
    }
    function R(S, T) {
        var U = K(S, T, 19) ^ K(T, S, 29) ^ l(S, T, 6);
        return U < 0 && (U += 4294967296), U;
    }
    function T(U, V) {
        var W = k(U, V, 19) ^ k(V, U, 29) ^ m(U, V, 6);
        return W < 0 && (W += 4294967296), W;
    }
    W.inherits(w, u), e.exports = w, w.blockSize = 1024, w.outSize = 512, w.hmacStrength = 192, w.padLength = 128, w.prototype._prepareBlock = function (V, W) {
        for (var X = this.W, Y = 0; Y < 32; Y++)
            X[Y] = V[W + Y];
        for (; Y < X.length; Y += 2) {
            var Z = R(X[Y - 4], X[Y - 3]), $ = T(X[Y - 4], X[Y - 3]), ab = X[Y - 14], bb = X[Y - 13], cb = N(X[Y - 30], X[Y - 29]), db = P(X[Y - 30], X[Y - 29]), eb = X[Y - 32], fb = X[Y - 31];
            X[Y] = q(Z, $, ab, bb, cb, db, eb, fb), X[Y + 1] = r(Z, $, ab, bb, cb, db, eb, fb);
        }
    }, w.prototype._update = function (V, W) {
        this._prepareBlock(V, W);
        var X = this.W, Y = this.h[0], Z = this.h[1], $ = this.h[2], ab = this.h[3], bb = this.h[4], cb = this.h[5], db = this.h[6], eb = this.h[7], fb = this.h[8], gb = this.h[9], hb = this.h[10], ib = this.h[11], jb = this.h[12], kb = this.h[13], lb = this.h[14], mb = this.h[15];
        H(this.k.length === X.length);
        for (var nb = 0; nb < X.length; nb += 2) {
            var ob = lb, pb = mb, qb = J(fb, gb), rb = L(fb, gb), sb = x(fb, gb, hb, ib, jb), tb = z(fb, gb, hb, ib, jb, kb), ub = this.k[nb], vb = this.k[nb + 1], wb = X[nb], xb = X[nb + 1], yb = s(ob, pb, qb, rb, sb, tb, ub, vb, wb, xb), zb = t(ob, pb, qb, rb, sb, tb, ub, vb, wb, xb);
            ob = F(Y, Z), pb = H(Y, Z), qb = B(Y, Z, $, ab, bb), rb = D(Y, Z, $, ab, bb, cb);
            var Ab = o(ob, pb, qb, rb), Bb = p(ob, pb, qb, rb);
            lb = jb, mb = kb, jb = hb, kb = ib, hb = fb, ib = gb, fb = o(db, eb, yb, zb), gb = p(eb, eb, yb, zb), db = bb, eb = cb, bb = $, cb = ab, $ = Y, ab = Z, Y = o(yb, zb, Ab, Bb), Z = p(yb, zb, Ab, Bb);
        }
        n(this.h, 0, Y, Z), n(this.h, 2, $, ab), n(this.h, 4, bb, cb), n(this.h, 6, db, eb), n(this.h, 8, fb, gb), n(this.h, 10, hb, ib), n(this.h, 12, jb, kb), n(this.h, 14, lb, mb);
    }, w.prototype._digest = function (V) {
        return 'hex' === V ? W.toHex32(this.h, 'big') : W.split32(this.h, 'big');
    };
}), d.register('.....', function (e, f) {
    var g;
    a(e.exports, 'ripemd160', function () {
        return g;
    }, function (h) {
        return g = h;
    });
    var h = d('.....'), i = d('.....'), j = h.rotl32, k = h.sum32, l = h.sum32_3, m = h.sum32_4, n = i.BlockHash;
    function o() {
        if (!(this instanceof o))
            return new o();
        n.call(this), this.h = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
        ], this.endian = 'little';
    }
    function p(q, r, s, t) {
        return q <= 15 ? r ^ s ^ t : q <= 31 ? r & s | ~r & t : q <= 47 ? (r | ~s) ^ t : q <= 63 ? r & t | s & ~t : r ^ (s | ~t);
    }
    function q(r) {
        return r <= 15 ? 0 : r <= 31 ? 1518500249 : r <= 47 ? 1859775393 : r <= 63 ? 2400959708 : 2840853838;
    }
    function r(s) {
        return s <= 15 ? 1352829926 : s <= 31 ? 1548603684 : s <= 47 ? 1836072691 : s <= 63 ? 2053994217 : 0;
    }
    h.inherits(o, n), g = o, o.blockSize = 512, o.outSize = 160, o.hmacStrength = 192, o.padLength = 64, o.prototype._update = function (s, t) {
        for (var u = this.h[0], v = this.h[1], w = this.h[2], x = this.h[3], y = this.h[4], z = u, A = v, B = w, C = x, D = y, E = 0; E < 80; E++) {
            var F = k(j(m(u, p(E, v, w, x), s[_s[E] + t], q(E)), _u[E]), y);
            u = y, y = x, x = j(w, 10), w = v, v = F, F = k(j(m(z, p(79 - E, A, B, C), s[_t[E] + t], r(E)), _v[E]), D), z = D, D = C, C = j(B, 10), B = A, A = F;
        }
        F = l(this.h[1], w, C), this.h[1] = l(this.h[2], x, D), this.h[2] = l(this.h[3], y, z), this.h[3] = l(this.h[4], u, A), this.h[4] = l(this.h[0], v, B), this.h[0] = F;
    }, o.prototype._digest = function (s) {
        return 'hex' === s ? h.toHex32(this.h, 'little') : h.split32(this.h, 'little');
    };
    var _s = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            7,
            4,
            13,
            1,
            10,
            6,
            15,
            3,
            12,
            0,
            9,
            5,
            2,
            14,
            11,
            8,
            3,
            10,
            14,
            4,
            9,
            15,
            8,
            1,
            2,
            7,
            0,
            6,
            13,
            11,
            5,
            12,
            1,
            9,
            11,
            10,
            0,
            8,
            12,
            4,
            13,
            3,
            7,
            15,
            14,
            5,
            6,
            2,
            4,
            0,
            5,
            9,
            7,
            12,
            2,
            10,
            14,
            1,
            3,
            8,
            11,
            6,
            15,
            13
        ], _t = [
            5,
            14,
            7,
            0,
            9,
            2,
            11,
            4,
            13,
            6,
            15,
            8,
            1,
            10,
            3,
            12,
            6,
            11,
            3,
            7,
            0,
            13,
            5,
            10,
            14,
            15,
            8,
            12,
            4,
            9,
            1,
            2,
            15,
            5,
            1,
            3,
            7,
            14,
            6,
            9,
            11,
            8,
            12,
            2,
            10,
            0,
            4,
            13,
            8,
            6,
            4,
            1,
            3,
            11,
            15,
            0,
            5,
            12,
            2,
            13,
            9,
            7,
            10,
            14,
            12,
            15,
            10,
            4,
            1,
            5,
            8,
            7,
            6,
            2,
            13,
            14,
            0,
            3,
            9,
            11
        ], _u = [
            11,
            14,
            15,
            12,
            5,
            8,
            7,
            9,
            11,
            13,
            14,
            15,
            6,
            7,
            9,
            8,
            7,
            6,
            8,
            13,
            11,
            9,
            7,
            15,
            7,
            12,
            15,
            9,
            11,
            7,
            13,
            12,
            11,
            13,
            6,
            7,
            14,
            9,
            13,
            15,
            14,
            8,
            13,
            6,
            5,
            12,
            7,
            5,
            11,
            12,
            14,
            15,
            14,
            15,
            9,
            8,
            9,
            14,
            5,
            6,
            8,
            6,
            5,
            12,
            9,
            15,
            5,
            11,
            6,
            8,
            13,
            12,
            5,
            12,
            13,
            14,
            11,
            8,
            5,
            6
        ], _v = [
            8,
            9,
            9,
            11,
            13,
            15,
            15,
            5,
            7,
            7,
            8,
            11,
            14,
            14,
            12,
            6,
            9,
            13,
            15,
            7,
            12,
            8,
            9,
            11,
            7,
            7,
            12,
            7,
            6,
            15,
            13,
            11,
            9,
            7,
            15,
            11,
            8,
            6,
            6,
            14,
            12,
            13,
            5,
            14,
            13,
            13,
            7,
            5,
            15,
            5,
            8,
            11,
            14,
            14,
            6,
            14,
            6,
            9,
            12,
            9,
            12,
            5,
            15,
            8,
            8,
            5,
            12,
            9,
            12,
            5,
            14,
            6,
            8,
            13,
            6,
            5,
            15,
            13,
            11,
            11
        ];
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    function i(j, k, l) {
        if (!(this instanceof i))
            return new i(j, k, l);
        this.Hash = j, this.blockSize = j.blockSize / 8, this.outSize = j.outSize / 8, this.inner = null, this.outer = null, this._init(g.toArray(k, l));
    }
    e.exports = i, i.prototype._init = function (j) {
        j.length > this.blockSize && (j = new this.Hash().update(j).digest()), h(j.length <= this.blockSize);
        for (var k = j.length; k < this.blockSize; k++)
            j.push(0);
        for (k = 0; k < j.length; k++)
            j[k] ^= 54;
        for (this.inner = new this.Hash().update(j), k = 0; k < j.length; k++)
            j[k] ^= 106;
        this.outer = new this.Hash().update(j);
    }, i.prototype.update = function (j, k) {
        return this.inner.update(j, k), this;
    }, i.prototype.digest = function (j) {
        return this.outer.update(this.inner.digest()), this.outer.digest(j);
    };
}), d.register('.....', function (e, f) {
    e.exports = {
        doubles: {
            step: 4,
            points: [
                [
                    'e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a',
                    'f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821'
                ],
                [
                    '8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508',
                    '11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf'
                ],
                [
                    '175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739',
                    'd3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695'
                ],
                [
                    '363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640',
                    '4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9'
                ],
                [
                    '8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c',
                    '4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36'
                ],
                [
                    '723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda',
                    '96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f'
                ],
                [
                    'eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa',
                    '5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999'
                ],
                [
                    '100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0',
                    'cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09'
                ],
                [
                    'e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d',
                    '9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d'
                ],
                [
                    'feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d',
                    'e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088'
                ],
                [
                    'da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1',
                    '9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d'
                ],
                [
                    '53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0',
                    '5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8'
                ],
                [
                    '8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047',
                    '10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a'
                ],
                [
                    '385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862',
                    '283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453'
                ],
                [
                    '6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7',
                    '7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160'
                ],
                [
                    '3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd',
                    '56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0'
                ],
                [
                    '85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83',
                    '7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6'
                ],
                [
                    '948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a',
                    '53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589'
                ],
                [
                    '6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8',
                    'bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17'
                ],
                [
                    'e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d',
                    '4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda'
                ],
                [
                    'e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725',
                    '7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd'
                ],
                [
                    '213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754',
                    '4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2'
                ],
                [
                    '4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c',
                    '17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6'
                ],
                [
                    'fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6',
                    '6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f'
                ],
                [
                    '76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39',
                    'c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01'
                ],
                [
                    'c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891',
                    '893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3'
                ],
                [
                    'd895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b',
                    'febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f'
                ],
                [
                    'b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03',
                    '2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7'
                ],
                [
                    'e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d',
                    'eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78'
                ],
                [
                    'a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070',
                    '7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1'
                ],
                [
                    '90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4',
                    'e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150'
                ],
                [
                    '8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da',
                    '662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82'
                ],
                [
                    'e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11',
                    '1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc'
                ],
                [
                    '8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e',
                    'efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b'
                ],
                [
                    'e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41',
                    '2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51'
                ],
                [
                    'b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef',
                    '67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45'
                ],
                [
                    'd68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8',
                    'db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120'
                ],
                [
                    '324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d',
                    '648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84'
                ],
                [
                    '4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96',
                    '35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d'
                ],
                [
                    '9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd',
                    'ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d'
                ],
                [
                    '6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5',
                    '9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8'
                ],
                [
                    'a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266',
                    '40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8'
                ],
                [
                    '7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71',
                    '34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac'
                ],
                [
                    '928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac',
                    'c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f'
                ],
                [
                    '85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751',
                    '1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962'
                ],
                [
                    'ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e',
                    '493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907'
                ],
                [
                    '827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241',
                    'c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec'
                ],
                [
                    'eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3',
                    'be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d'
                ],
                [
                    'e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f',
                    '4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414'
                ],
                [
                    '1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19',
                    'aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd'
                ],
                [
                    '146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be',
                    'b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0'
                ],
                [
                    'fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9',
                    '6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811'
                ],
                [
                    'da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2',
                    '8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1'
                ],
                [
                    'a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13',
                    '7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c'
                ],
                [
                    '174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c',
                    'ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73'
                ],
                [
                    '959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba',
                    '2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd'
                ],
                [
                    'd2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151',
                    'e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405'
                ],
                [
                    '64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073',
                    'd99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589'
                ],
                [
                    '8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458',
                    '38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e'
                ],
                [
                    '13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b',
                    '69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27'
                ],
                [
                    'bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366',
                    'd3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1'
                ],
                [
                    '8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa',
                    '40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482'
                ],
                [
                    '8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0',
                    '620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945'
                ],
                [
                    'dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787',
                    '7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573'
                ],
                [
                    'f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e',
                    'ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82'
                ]
            ]
        },
        naf: {
            wnd: 7,
            points: [
                [
                    'f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9',
                    '388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672'
                ],
                [
                    '2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4',
                    'd8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6'
                ],
                [
                    '5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc',
                    '6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da'
                ],
                [
                    'acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe',
                    'cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37'
                ],
                [
                    '774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb',
                    'd984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b'
                ],
                [
                    'f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8',
                    'ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81'
                ],
                [
                    'd7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e',
                    '581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58'
                ],
                [
                    'defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34',
                    '4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77'
                ],
                [
                    '2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c',
                    '85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a'
                ],
                [
                    '352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5',
                    '321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c'
                ],
                [
                    '2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f',
                    '2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67'
                ],
                [
                    '9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714',
                    '73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402'
                ],
                [
                    'daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729',
                    'a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55'
                ],
                [
                    'c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db',
                    '2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482'
                ],
                [
                    '6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4',
                    'e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82'
                ],
                [
                    '1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5',
                    'b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396'
                ],
                [
                    '605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479',
                    '2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49'
                ],
                [
                    '62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d',
                    '80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf'
                ],
                [
                    '80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f',
                    '1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a'
                ],
                [
                    '7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb',
                    'd0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7'
                ],
                [
                    'd528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9',
                    'eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933'
                ],
                [
                    '49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963',
                    '758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a'
                ],
                [
                    '77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74',
                    '958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6'
                ],
                [
                    'f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530',
                    'e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37'
                ],
                [
                    '463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b',
                    '5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e'
                ],
                [
                    'f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247',
                    'cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6'
                ],
                [
                    'caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1',
                    'cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476'
                ],
                [
                    '2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120',
                    '4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40'
                ],
                [
                    '7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435',
                    '91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61'
                ],
                [
                    '754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18',
                    '673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683'
                ],
                [
                    'e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8',
                    '59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5'
                ],
                [
                    '186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb',
                    '3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b'
                ],
                [
                    'df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f',
                    '55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417'
                ],
                [
                    '5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143',
                    'efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868'
                ],
                [
                    '290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba',
                    'e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a'
                ],
                [
                    'af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45',
                    'f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6'
                ],
                [
                    '766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a',
                    '744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996'
                ],
                [
                    '59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e',
                    'c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e'
                ],
                [
                    'f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8',
                    'e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d'
                ],
                [
                    '7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c',
                    '30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2'
                ],
                [
                    '948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519',
                    'e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e'
                ],
                [
                    '7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab',
                    '100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437'
                ],
                [
                    '3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca',
                    'ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311'
                ],
                [
                    'd3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf',
                    '8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4'
                ],
                [
                    '1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610',
                    '68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575'
                ],
                [
                    '733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4',
                    'f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d'
                ],
                [
                    '15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c',
                    'd56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d'
                ],
                [
                    'a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940',
                    'edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629'
                ],
                [
                    'e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980',
                    'a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06'
                ],
                [
                    '311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3',
                    '66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374'
                ],
                [
                    '34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf',
                    '9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee'
                ],
                [
                    'f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63',
                    '4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1'
                ],
                [
                    'd7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448',
                    'fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b'
                ],
                [
                    '32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf',
                    '5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661'
                ],
                [
                    '7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5',
                    '8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6'
                ],
                [
                    'ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6',
                    '8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e'
                ],
                [
                    '16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5',
                    '5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d'
                ],
                [
                    'eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99',
                    'f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc'
                ],
                [
                    '78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51',
                    'f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4'
                ],
                [
                    '494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5',
                    '42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c'
                ],
                [
                    'a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5',
                    '204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b'
                ],
                [
                    'c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997',
                    '4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913'
                ],
                [
                    '841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881',
                    '73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154'
                ],
                [
                    '5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5',
                    '39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865'
                ],
                [
                    '36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66',
                    'd2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc'
                ],
                [
                    '336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726',
                    'ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224'
                ],
                [
                    '8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede',
                    '6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e'
                ],
                [
                    '1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94',
                    '60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6'
                ],
                [
                    '85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31',
                    '3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511'
                ],
                [
                    '29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51',
                    'b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b'
                ],
                [
                    'a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252',
                    'ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2'
                ],
                [
                    '4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5',
                    'cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c'
                ],
                [
                    'd24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b',
                    '6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3'
                ],
                [
                    'ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4',
                    '322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d'
                ],
                [
                    'af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f',
                    '6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700'
                ],
                [
                    'e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889',
                    '2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4'
                ],
                [
                    '591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246',
                    'b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196'
                ],
                [
                    '11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984',
                    '998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4'
                ],
                [
                    '3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a',
                    'b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257'
                ],
                [
                    'cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030',
                    'bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13'
                ],
                [
                    'c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197',
                    '6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096'
                ],
                [
                    'c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593',
                    'c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38'
                ],
                [
                    'a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef',
                    '21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f'
                ],
                [
                    '347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38',
                    '60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448'
                ],
                [
                    'da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a',
                    '49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a'
                ],
                [
                    'c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111',
                    '5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4'
                ],
                [
                    '4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502',
                    '7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437'
                ],
                [
                    '3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea',
                    'be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7'
                ],
                [
                    'cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26',
                    '8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d'
                ],
                [
                    'b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986',
                    '39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a'
                ],
                [
                    'd4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e',
                    '62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54'
                ],
                [
                    '48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4',
                    '25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77'
                ],
                [
                    'dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda',
                    'ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517'
                ],
                [
                    '6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859',
                    'cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10'
                ],
                [
                    'e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f',
                    'f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125'
                ],
                [
                    'eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c',
                    '6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e'
                ],
                [
                    '13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942',
                    'fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1'
                ],
                [
                    'ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a',
                    '1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2'
                ],
                [
                    'b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80',
                    '5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423'
                ],
                [
                    'ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d',
                    '438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8'
                ],
                [
                    '8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1',
                    'cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758'
                ],
                [
                    '52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63',
                    'c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375'
                ],
                [
                    'e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352',
                    '6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d'
                ],
                [
                    '7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193',
                    'ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec'
                ],
                [
                    '5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00',
                    '9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0'
                ],
                [
                    '32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58',
                    'ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c'
                ],
                [
                    'e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7',
                    'd3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4'
                ],
                [
                    '8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8',
                    'c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f'
                ],
                [
                    '4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e',
                    '67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649'
                ],
                [
                    '3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d',
                    'cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826'
                ],
                [
                    '674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b',
                    '299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5'
                ],
                [
                    'd32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f',
                    'f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87'
                ],
                [
                    '30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6',
                    '462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b'
                ],
                [
                    'be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297',
                    '62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc'
                ],
                [
                    '93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a',
                    '7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c'
                ],
                [
                    'b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c',
                    'ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f'
                ],
                [
                    'd5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52',
                    '4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a'
                ],
                [
                    'd3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb',
                    'bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46'
                ],
                [
                    '463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065',
                    'bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f'
                ],
                [
                    '7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917',
                    '603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03'
                ],
                [
                    '74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9',
                    'cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08'
                ],
                [
                    '30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3',
                    '553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8'
                ],
                [
                    '9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57',
                    '712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373'
                ],
                [
                    '176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66',
                    'ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3'
                ],
                [
                    '75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8',
                    '9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8'
                ],
                [
                    '809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721',
                    '9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1'
                ],
                [
                    '1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180',
                    '4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9'
                ]
            ]
        }
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = i.assert, m = d('.....'), n = d('.....');
    function o(p) {
        if (!(this instanceof o))
            return new o(p);
        'string' == typeof p && (l(j.hasOwnProperty(p), 'Unknown curve ' + p), p = j[p]), p instanceof j.PresetCurve && (p = { curve: p }), this.curve = p.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = p.curve.g, this.g.precompute(p.curve.n.bitLength() + 1), this.hash = p.hash || p.curve.hash;
    }
    e.exports = o, o.prototype.keyPair = function (p) {
        return new m(this, p);
    }, o.prototype.keyFromPrivate = function (p, q) {
        return m.fromPrivate(this, p, q);
    }, o.prototype.keyFromPublic = function (p, q) {
        return m.fromPublic(this, p, q);
    }, o.prototype.genKeyPair = function (p) {
        p || (p = {});
        for (var q = new h({
                    hash: this.hash,
                    pers: p.pers,
                    persEnc: p.persEnc || 'utf8',
                    entropy: p.entropy || k(this.hash.hmacStrength),
                    entropyEnc: p.entropy && p.entropyEnc || 'utf8',
                    nonce: this.n.toArray()
                }), r = this.n.byteLength(), s = this.n.sub(new g(2));;) {
            var t = new g(q.generate(r));
            if (!(t.cmp(s) > 0))
                return t.iaddn(1), this.keyFromPrivate(t);
        }
    }, o.prototype._truncateToN = function (p, q) {
        var r = 8 * p.byteLength() - this.n.bitLength();
        return r > 0 && (p = p.ushrn(r)), !q && p.cmp(this.n) >= 0 ? p.sub(this.n) : p;
    }, o.prototype.sign = function (p, q, r, s) {
        'object' == typeof r && (s = r, r = null), s || (s = {}), q = this.keyFromPrivate(q, r), p = this._truncateToN(new g(p, 16));
        for (var t = this.n.byteLength(), u = q.getPrivate().toArray('be', t), v = p.toArray('be', t), w = new h({
                    hash: this.hash,
                    entropy: u,
                    nonce: v,
                    pers: s.pers,
                    persEnc: s.persEnc || 'utf8'
                }), x = this.n.sub(new g(1)), y = 0;; y++) {
            var z = s.k ? s.k(y) : new g(w.generate(this.n.byteLength()));
            if (!((z = this._truncateToN(z, !0)).cmpn(1) <= 0 || z.cmp(x) >= 0)) {
                var A = this.g.mul(z);
                if (!A.isInfinity()) {
                    var B = A.getX(), C = B.umod(this.n);
                    if (0 !== C.cmpn(0)) {
                        var D = z.invm(this.n).mul(C.mul(q.getPrivate()).iadd(p));
                        if (0 !== (D = D.umod(this.n)).cmpn(0)) {
                            var E = (A.getY().isOdd() ? 1 : 0) | (0 !== B.cmp(C) ? 2 : 0);
                            return s.canonical && D.cmp(this.nh) > 0 && (D = this.n.sub(D), E ^= 1), new n({
                                r: C,
                                s: D,
                                recoveryParam: E
                            });
                        }
                    }
                }
            }
        }
    }, o.prototype.verify = function (p, q, r, s) {
        p = this._truncateToN(new g(p, 16)), r = this.keyFromPublic(r, s);
        var t = (q = new n(q, 'hex')).r, u = q.s;
        if (t.cmpn(1) < 0 || t.cmp(this.n) >= 0)
            return !1;
        if (u.cmpn(1) < 0 || u.cmp(this.n) >= 0)
            return !1;
        var v, w = u.invm(this.n), x = w.mul(p).umod(this.n), y = w.mul(t).umod(this.n);
        return this.curve._maxwellTrick ? !(v = this.g.jmulAdd(x, r.getPublic(), y)).isInfinity() && v.eqXToP(t) : !(v = this.g.mulAdd(x, r.getPublic(), y)).isInfinity() && 0 === v.getX().umod(this.n).cmp(t);
    }, o.prototype.recoverPubKey = function (p, q, r, s) {
        l((3 & r) === r, 'The recovery param is more than two bits'), q = new n(q, s);
        var t = this.n, u = new g(p), v = q.r, w = q.s, x = 1 & r, y = r >> 1;
        if (v.cmp(this.curve.p.umod(this.curve.n)) >= 0 && y)
            throw new Error('Unable to find sencond key candinate');
        v = y ? this.curve.pointFromX(v.add(this.curve.n), x) : this.curve.pointFromX(v, x);
        var z = q.r.invm(t), A = t.sub(u).mul(z).umod(t), B = w.mul(z).umod(t);
        return this.g.mulAdd(A, v, B);
    }, o.prototype.getKeyRecoveryParam = function (p, q, r, s) {
        if (null !== (q = new n(q, s)).recoveryParam)
            return q.recoveryParam;
        for (var t = 0; t < 4; t++) {
            var u;
            try {
                u = this.recoverPubKey(p, q, t);
            } catch (p) {
                continue;
            }
            if (u.eq(r))
                return t;
        }
        throw new Error('Unable to find valid recovery factor');
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    function j(k) {
        if (!(this instanceof j))
            return new j(k);
        this.hash = k.hash, this.predResist = !!k.predResist, this.outLen = this.hash.outSize, this.minEntropy = k.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
        var l = h.toArray(k.entropy, k.entropyEnc || 'hex'), m = h.toArray(k.nonce, k.nonceEnc || 'hex'), n = h.toArray(k.pers, k.persEnc || 'hex');
        i(l.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'), this._init(l, m, n);
    }
    e.exports = j, j.prototype._init = function (n, o, p) {
        var q = n.concat(o).concat(p);
        this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
        for (var r = 0; r < this.V.length; r++)
            this.K[r] = 0, this.V[r] = 1;
        this._update(q), this._reseed = 1, this.reseedInterval = 281474976710656;
    }, j.prototype._hmac = function () {
        return new m.hmac(this.hash, this.K);
    }, j.prototype._update = function (n) {
        var o = this._hmac().update(this.V).update([0]);
        n && (o = o.update(n)), this.K = o.digest(), this.V = this._hmac().update(this.V).digest(), n && (this.K = this._hmac().update(this.V).update([1]).update(n).digest(), this.V = this._hmac().update(this.V).digest());
    }, j.prototype.reseed = function (n, o, p, q) {
        'string' != typeof o && (q = p, p = o, o = null), n = h.toArray(n, o), p = h.toArray(p, q), i(n.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits'), this._update(n.concat(p || [])), this._reseed = 1;
    }, j.prototype.generate = function (n, o, p, q) {
        if (this._reseed > this.reseedInterval)
            throw new Error('Reseed is required');
        'string' != typeof o && (q = p, p = o, o = null), p && (p = h.toArray(p, q || 'hex'), this._update(p));
        for (var r = []; r.length < n;)
            this.V = this._hmac().update(this.V).digest(), r = r.concat(this.V);
        var s = r.slice(0, n);
        return this._update(p), this._reseed++, h.encode(s, o);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....').assert;
    function i(j, k) {
        this.ec = j, this.priv = null, this.pub = null, k.priv && this._importPrivate(k.priv, k.privEnc), k.pub && this._importPublic(k.pub, k.pubEnc);
    }
    e.exports = i, i.fromPublic = function (j, k, l) {
        return k instanceof i ? k : new i(j, {
            pub: k,
            pubEnc: l
        });
    }, i.fromPrivate = function (j, k, l) {
        return k instanceof i ? k : new i(j, {
            priv: k,
            privEnc: l
        });
    }, i.prototype.validate = function () {
        var j = this.getPublic();
        return j.isInfinity() ? {
            result: !1,
            reason: 'Invalid public key'
        } : j.validate() ? j.mul(this.ec.curve.n).isInfinity() ? {
            result: !0,
            reason: null
        } : {
            result: !1,
            reason: 'Public key * N != O'
        } : {
            result: !1,
            reason: 'Public key is not a point'
        };
    }, i.prototype.getPublic = function (j, k) {
        return 'string' == typeof j && (k = j, j = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), k ? this.pub.encode(k, j) : this.pub;
    }, i.prototype.getPrivate = function (j) {
        return 'hex' === j ? this.priv.toString(16, 2) : this.priv;
    }, i.prototype._importPrivate = function (j, k) {
        this.priv = new g(j, k || 16), this.priv = this.priv.umod(this.ec.curve.n);
    }, i.prototype._importPublic = function (j, k) {
        if (j.x || j.y)
            return 'mont' === this.ec.curve.type ? h(j.x, 'Need x coordinate') : 'short' !== this.ec.curve.type && 'edwards' !== this.ec.curve.type || h(j.x && j.y, 'Need both x and y coordinate'), void (this.pub = this.ec.curve.point(j.x, j.y));
        this.pub = this.ec.curve.decodePoint(j, k);
    }, i.prototype.derive = function (j) {
        return j.mul(this.priv).getX();
    }, i.prototype.sign = function (j, k, l) {
        return this.ec.sign(j, this, k, l);
    }, i.prototype.verify = function (j, k) {
        return this.ec.verify(j, k, this);
    }, i.prototype.inspect = function () {
        return '<Key priv: ' + (this.priv && this.priv.toString(16, 2)) + ' pub: ' + (this.pub && this.pub.inspect()) + ' >';
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = h.assert;
    function j(k, l) {
        if (k instanceof j)
            return k;
        this._importDER(k, l) || (i(k.r && k.s, 'Signature without r or s'), this.r = new g(k.r, 16), this.s = new g(k.s, 16), void 0 === k.recoveryParam ? this.recoveryParam = null : this.recoveryParam = k.recoveryParam);
    }
    function k() {
        this.place = 0;
    }
    function l(m, n) {
        var o = m[n.place++];
        if (!(128 & o))
            return o;
        var p = 15 & o;
        if (0 === p || p > 4)
            return !1;
        for (var q = 0, r = 0, s = n.place; r < p; r++, j++)
            q <<= 8, q |= m[j], q >>>= 0;
        return !(q <= 127) && (n.place = j, q);
    }
    function r(s) {
        for (var t = 0, u = s.length - 1; !s[t] && !(128 & s[t + 1]) && t < u;)
            t++;
        return 0 === t ? s : s.slice(t);
    }
    function u(v, w) {
        if (w < 128)
            v.push(w);
        else {
            var x = 1 + (Math.log(w) / Math.LN2 >>> 3);
            for (v.push(128 | x); --x;)
                v.push(w >>> (x << 3) & 255);
            v.push(w);
        }
    }
    e.exports = j, j.prototype._importDER = function (w, x) {
        w = q.toArray(w, x);
        var y = new k();
        if (48 !== w[y.place++])
            return !1;
        var z = l(w, y);
        if (!1 === z)
            return !1;
        if (z + y.place !== w.length)
            return !1;
        if (2 !== w[y.place++])
            return !1;
        var A = l(w, y);
        if (!1 === A)
            return !1;
        var B = w.slice(y.place, A + y.place);
        if (y.place += A, 2 !== w[y.place++])
            return !1;
        var C = l(w, y);
        if (!1 === C)
            return !1;
        if (w.length !== C + y.place)
            return !1;
        var D = w.slice(y.place, C + y.place);
        if (0 === B[0]) {
            if (!(128 & B[1]))
                return !1;
            B = B.slice(1);
        }
        if (0 === D[0]) {
            if (!(128 & D[1]))
                return !1;
            D = D.slice(1);
        }
        return this.r = new x(B), this.s = new x(D), this.recoveryParam = null, !0;
    }, j.prototype.toDER = function (w) {
        var x = this.r.toArray(), y = this.s.toArray();
        for (128 & x[0] && (x = [0].concat(x)), 128 & y[0] && (y = [0].concat(y)), x = r(x), y = r(y); !(y[0] || 128 & y[1]);)
            y = y.slice(1);
        var z = [2];
        u(z, x.length), (z = z.concat(x)).push(2), u(z, y.length);
        var A = z.concat(y), B = [48];
        return u(B, A.length), B = B.concat(A), q.encode(B, w);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = i.assert, k = i.parseBytes, l = d('.....'), m = d('.....');
    function n(o) {
        if (j('ed25519' === o, 'only tested with ed25519 so far'), !(this instanceof n))
            return new n(o);
        o = h[o].curve;
        this.curve = o, this.g = o.g, this.g.precompute(o.n.bitLength() + 1), this.pointClass = o.point().constructor, this.encodingLength = Math.ceil(o.n.bitLength() / 8), this.hash = g.sha512;
    }
    e.exports = n, n.prototype.sign = function (o, p) {
        o = k(o);
        var q = this.keyFromSecret(p), r = this.hashInt(q.messagePrefix(), o), s = this.g.mul(r), t = this.encodePoint(s), u = this.hashInt(t, q.pubBytes(), o).mul(q.priv()), v = r.add(u).umod(this.curve.n);
        return this.makeSignature({
            R: s,
            S: v,
            Rencoded: t
        });
    }, n.prototype.verify = function (o, p, q) {
        o = k(o), p = this.makeSignature(p);
        var r = this.keyFromPublic(q), s = this.hashInt(p.Rencoded(), r.pubBytes(), o), t = this.g.mul(p.S());
        return p.R().add(r.pub().mul(s)).eq(t);
    }, n.prototype.hashInt = function () {
        for (var o = this.hash(), p = 0; p < arguments.length; p++)
            o.update(arguments[p]);
        return i.intFromLE(o.digest()).umod(this.curve.n);
    }, n.prototype.keyFromPublic = function (o) {
        return l.fromPublic(this, o);
    }, n.prototype.keyFromSecret = function (o) {
        return l.fromSecret(this, o);
    }, n.prototype.makeSignature = function (o) {
        return o instanceof m ? o : new m(this, o);
    }, n.prototype.encodePoint = function (o) {
        var p = o.getY().toArray('le', this.encodingLength);
        return p[this.encodingLength - 1] |= o.getX().isOdd() ? 128 : 0, p;
    }, n.prototype.decodePoint = function (o) {
        var p = (o = i.parseBytes(o)).length - 1, q = o.slice(0, p).concat(-129 & o[p]), r = 0 != (128 & o[p]), s = i.intFromLE(q);
        return this.curve.pointFromY(s, r);
    }, n.prototype.encodeInt = function (o) {
        return o.toArray('le', this.encodingLength);
    }, n.prototype.decodeInt = function (o) {
        return i.intFromLE(o);
    }, n.prototype.isPoint = function (o) {
        return o instanceof this.pointClass;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = g.assert, i = g.parseBytes, j = g.cachedProperty;
    function k(l, m) {
        this.eddsa = l, this._secret = i(m.secret), l.isPoint(m.pub) ? this._pub = m.pub : this._pubBytes = i(m.pub);
    }
    k.fromPublic = function (l, m) {
        return m instanceof k ? m : new k(l, { pub: m });
    }, k.fromSecret = function (l, m) {
        return m instanceof k ? m : new k(l, { secret: m });
    }, k.prototype.secret = function () {
        return this._secret;
    }, j(k, 'pubBytes', function () {
        return this.eddsa.encodePoint(this.pub());
    }), j(k, 'pub', function () {
        return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
    }), j(k, 'privBytes', function () {
        var l = this.eddsa, m = this.hash(), n = l.encodingLength - 1, o = m.slice(0, l.encodingLength);
        return o[0] &= 248, o[n] &= 127, o[n] |= 64, o;
    }), j(k, 'priv', function () {
        return this.eddsa.decodeInt(this.privBytes());
    }), j(k, 'hash', function () {
        return this.eddsa.hash().update(this.secret()).digest();
    }), j(k, 'messagePrefix', function () {
        return this.hash().slice(this.eddsa.encodingLength);
    }), k.prototype.sign = function (l) {
        return h(this._secret, 'KeyPair can only verify'), this.eddsa.sign(l, this);
    }, k.prototype.verify = function (l, m) {
        return this.eddsa.verify(l, m, this);
    }, k.prototype.getSecret = function (l) {
        return h(this._secret, 'KeyPair is public only'), g.encode(this.secret(), l);
    }, k.prototype.getPublic = function (l) {
        return g.encode(this.pubBytes(), l);
    }, e.exports = k;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = h.assert, j = h.cachedProperty, k = h.parseBytes;
    function l(m, n) {
        this.eddsa = m, 'object' != typeof n && (n = k(n)), Array.isArray(n) && (n = {
            R: n.slice(0, m.encodingLength),
            S: n.slice(m.encodingLength)
        }), i(n.R && n.S, 'Signature without R or S'), m.isPoint(n.R) && (this._R = n.R), n.S instanceof g && (this._S = n.S), this._Rencoded = Array.isArray(n.R) ? n.R : n.Rencoded, this._Sencoded = Array.isArray(n.S) ? n.S : n.Sencoded;
    }
    j(l, 'S', function () {
        return this.eddsa.decodeInt(this.Sencoded());
    }), j(l, 'R', function () {
        return this.eddsa.decodePoint(this.Rencoded());
    }), j(l, 'Rencoded', function () {
        return this.eddsa.encodePoint(this.R());
    }), j(l, 'Sencoded', function () {
        return this.eddsa.encodeInt(this.S());
    }), l.prototype.toBytes = function () {
        return this.Rencoded().concat(this.Sencoded());
    }, l.prototype.toHex = function () {
        return h.encode(this.toBytes(), 'hex').toUpperCase();
    }, e.exports = l;
}), d.register('.....', function (e, f) {
    !function (g, h) {
        function i(j, k) {
            if (!j)
                throw new Error(k || 'Assertion failed');
        }
        function j(k, l) {
            k.super_ = l;
            var m = function () {
            };
            i.prototype = l.prototype, k.prototype = new i(), k.prototype.constructor = k;
        }
        function l(m, n, o) {
            if (l.isBN(m))
                return m;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== m && ('le' !== n && 'be' !== n || (o = n, n = 10), this._init(m || 0, n || 10, o || 'be'));
        }
        var m;
        'object' == typeof g ? g.exports = l : h.BN = l, l.BN = l, l.wordSize = 26;
        try {
            m = d('.....').Buffer;
        } catch (g) {
        }
        function n(o, p, q) {
            for (var r = 0, s = Math.min(o.length, q), t = 0, u = p; n < l; n++) {
                var v, w = o.charCodeAt(n) - 48;
                j <<= 4, j |= v = w >= 49 && w <= 54 ? w - 49 + 10 : w >= 17 && w <= 22 ? w - 17 + 10 : w, t |= v;
            }
            return i(!(240 & t), 'Invalid character in ' + o), j;
        }
        function u(v, w, x, y) {
            for (var z = 0, A = 0, B = Math.min(v.length, x), C = w; u < n; u++) {
                var D = v.charCodeAt(u) - 48;
                l *= y, A = D >= 49 ? D - 49 + 10 : D >= 17 ? D - 17 + 10 : D, i(D >= 0 && A < y, 'Invalid character'), l += A;
            }
            return l;
        }
        function A(B, C) {
            B.words = C.words, B.length = C.length, B.negative = C.negative, B.red = C.red;
        }
        if (l.isBN = function (B) {
                return B instanceof l || null !== B && 'object' == typeof B && B.constructor.wordSize === l.wordSize && Array.isArray(B.words);
            }, l.max = function (B, C) {
                return B.cmp(C) > 0 ? B : C;
            }, l.min = function (B, C) {
                return B.cmp(C) < 0 ? B : C;
            }, l.prototype._init = function (B, C, D) {
                if ('number' == typeof B)
                    return this._initNumber(B, C, D);
                if ('object' == typeof B)
                    return this._initArray(B, C, D);
                'hex' === C && (C = 16), i(C === (0 | C) && C >= 2 && C <= 36);
                var E = 0;
                '-' === (B = B.toString().replace(/\s+/g, ''))[0] && E++, 16 === C ? this._parseHex(B, E) : this._parseBase(B, C, E), '-' === B[0] && (this.negative = 1), this._strip(), 'le' === D && this._initArray(this.toArray(), C, D);
            }, l.prototype._initNumber = function (B, C, D) {
                B < 0 && (this.negative = 1, B = -B), B < 67108864 ? (this.words = [67108863 & B], this.length = 1) : B < 4503599627370496 ? (this.words = [
                    67108863 & B,
                    B / 67108864 & 67108863
                ], this.length = 2) : (i(B < 9007199254740992), this.words = [
                    67108863 & B,
                    B / 67108864 & 67108863,
                    1
                ], this.length = 3), 'le' === D && this._initArray(this.toArray(), C, D);
            }, l.prototype._initArray = function (B, C, D) {
                if (i('number' == typeof B.length), B.length <= 0)
                    return this.words = [0], this.length = 1, this;
                this.length = Math.ceil(B.length / 3), this.words = new Array(this.length);
                for (var E = 0; E < this.length; E++)
                    this.words[E] = 0;
                var F, G, H = 0;
                if ('be' === D)
                    for (E = B.length - 1, F = 0; E >= 0; E -= 3)
                        G = B[E] | B[E - 1] << 8 | B[E - 2] << 16, this.words[F] |= G << H & 67108863, this.words[F + 1] = G >>> 26 - H & 67108863, (H += 24) >= 26 && (H -= 26, F++);
                else if ('le' === D)
                    for (E = 0, F = 0; E < B.length; E += 3)
                        G = B[E] | B[E + 1] << 8 | B[E + 2] << 16, this.words[F] |= G << H & 67108863, this.words[F + 1] = G >>> 26 - H & 67108863, (H += 24) >= 26 && (H -= 26, F++);
                return this._strip();
            }, l.prototype._parseHex = function (B, C) {
                this.length = Math.ceil((B.length - C) / 6), this.words = new Array(this.length);
                for (var D = 0; D < this.length; D++)
                    this.words[D] = 0;
                var E, F, G = 0;
                for (D = B.length - 6, E = 0; D >= C; D -= 6)
                    F = n(B, D, D + 6), this.words[E] |= F << G & 67108863, this.words[E + 1] |= F >>> 26 - G & 4194303, (G += 24) >= 26 && (G -= 26, E++);
                D + 6 !== C && (F = n(B, C, D + 6), this.words[E] |= F << G & 67108863, this.words[E + 1] |= F >>> 26 - G & 4194303), this._strip();
            }, l.prototype._parseBase = function (B, C, D) {
                this.words = [0], this.length = 1;
                for (var E = 0, F = 1; F <= 67108863; F *= C)
                    E++;
                E--, F = F / C | 0;
                for (var G = B.length - D, H = G % E, I = Math.min(G, G - H) + D, J = 0, K = D; K < I; K += E)
                    J = u(B, K, K + E, C), this.imuln(F), this.words[0] + J < 67108864 ? this.words[0] += J : this._iaddn(J);
                if (0 !== H) {
                    var L = 1;
                    for (J = u(B, K, B.length, C), K = 0; K < H; K++)
                        L *= C;
                    this.imuln(L), this.words[0] + J < 67108864 ? this.words[0] += J : this._iaddn(J);
                }
            }, l.prototype.copy = function (B) {
                B.words = new Array(this.length);
                for (var C = 0; C < this.length; C++)
                    B.words[C] = this.words[C];
                B.length = this.length, B.negative = this.negative, B.red = this.red;
            }, l.prototype._move = function (B) {
                A(B, this);
            }, l.prototype.clone = function () {
                var B = new l(null);
                return this.copy(B), B;
            }, l.prototype._expand = function (B) {
                for (; this.length < B;)
                    this.words[this.length++] = 0;
                return this;
            }, l.prototype._strip = function () {
                for (; this.length > 1 && 0 === this.words[this.length - 1];)
                    this.length--;
                return this._normSign();
            }, l.prototype._normSign = function () {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
            }, 'undefined' != typeof Symbol && 'function' == typeof Symbol.for)
            try {
                l.prototype[Symbol.for('nodejs.util.inspect.custom')] = _B;
            } catch (g) {
                l.prototype.inspect = _B;
            }
        else
            l.prototype.inspect = _B;
        function _B() {
            return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
        }
        var C = [
                '',
                '0',
                '00',
                '000',
                '0000',
                '00000',
                '000000',
                '0000000',
                '00000000',
                '000000000',
                '0000000000',
                '00000000000',
                '000000000000',
                '0000000000000',
                '00000000000000',
                '000000000000000',
                '0000000000000000',
                '00000000000000000',
                '000000000000000000',
                '0000000000000000000',
                '00000000000000000000',
                '000000000000000000000',
                '0000000000000000000000',
                '00000000000000000000000',
                '000000000000000000000000',
                '0000000000000000000000000'
            ], D = [
                0,
                0,
                25,
                16,
                12,
                11,
                10,
                9,
                8,
                8,
                7,
                7,
                7,
                7,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5
            ], E = [
                0,
                0,
                33554432,
                43046721,
                16777216,
                48828125,
                60466176,
                40353607,
                16777216,
                43046721,
                10000000,
                19487171,
                35831808,
                62748517,
                7529536,
                11390625,
                16777216,
                24137569,
                34012224,
                47045881,
                64000000,
                4084101,
                5153632,
                6436343,
                7962624,
                9765625,
                11881376,
                14348907,
                17210368,
                20511149,
                24300000,
                28629151,
                33554432,
                39135393,
                45435424,
                52521875,
                60466176
            ];
        l.prototype.toString = function (F, G) {
            var H;
            if (G = 0 | G || 1, 16 === (F = F || 10) || 'hex' === F) {
                H = '';
                for (var I = 0, J = 0, K = 0; K < this.length; K++) {
                    var L = this.words[K], M = (16777215 & (L << I | J)).toString(16);
                    H = 0 !== (J = L >>> 24 - I & 16777215) || K !== this.length - 1 ? C[6 - M.length] + M + H : M + H, (I += 2) >= 26 && (I -= 26, K--);
                }
                for (0 !== J && (H = J.toString(16) + H); H.length % G != 0;)
                    H = '0' + H;
                return 0 !== this.negative && (H = '-' + H), H;
            }
            if (F === (0 | F) && F >= 2 && F <= 36) {
                var N = D[F], O = E[F];
                H = '';
                var P = this.clone();
                for (P.negative = 0; !P.isZero();) {
                    var Q = P.modrn(O).toString(F);
                    H = (P = P.idivn(O)).isZero() ? Q + H : C[N - Q.length] + Q + H;
                }
                for (this.isZero() && (H = '0' + H); H.length % G != 0;)
                    H = '0' + H;
                return 0 !== this.negative && (H = '-' + H), H;
            }
            i(!1, 'Base should be between 2 and 36');
        }, l.prototype.toNumber = function () {
            var F = this.words[0];
            return 2 === this.length ? F += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? F += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && i(!1, 'Number can only safely store up to 53 bits'), 0 !== this.negative ? -F : F;
        }, l.prototype.toJSON = function () {
            return this.toString(16, 2);
        }, A && (l.prototype.toBuffer = function (F, G) {
            return this.toArrayLike(A, F, G);
        }), l.prototype.toArray = function (F, G) {
            return this.toArrayLike(Array, F, G);
        };
        function F(G, H, I) {
            I.negative = H.negative ^ G.negative;
            var J = G.length + H.length | 0;
            I.length = J, J = J - 1 | 0;
            var K = 0 | G.words[0], L = 0 | H.words[0], M = j * l, N = 67108863 & M, O = M / 67108864 | 0;
            I.words[0] = n;
            for (var P = 1; A < J; A++) {
                for (var Q = u >>> 26, R = 67108863 & u, S = Math.min(A, H.length - 1), T = Math.max(0, A - G.length + 1); T <= S; T++) {
                    var U = A - T | 0;
                    _B += (M = (j = 0 | G.words[F]) * (l = 0 | H.words[T]) + R) / 67108864 | 0, R = 67108863 & M;
                }
                I.words[A] = 0 | R, u = 0 | _B;
            }
            return 0 !== u ? I.words[A] = 0 | u : I.length--, I._strip();
        }
        l.prototype.toArrayLike = function (S, T, U) {
            this._strip();
            var V = this.byteLength(), W = U || Math.max(1, V);
            i(V <= W, 'byte array longer than desired length'), i(W > 0, 'Requested array length <= 0');
            var X = function (Y, Z) {
                return Y.allocUnsafe ? Y.allocUnsafe(Z) : new Y(Z);
            }(S, W);
            return this['_toArrayLike' + ('le' === T ? 'LE' : 'BE')](X, V), X;
        }, l.prototype._toArrayLikeLE = function (S, T) {
            for (var U = 0, V = 0, W = 0, X = 0; W < this.length; W++) {
                var Y = this.words[W] << X | V;
                S[U++] = 255 & Y, U < S.length && (S[U++] = Y >> 8 & 255), U < S.length && (S[U++] = Y >> 16 & 255), 6 === X ? (U < S.length && (S[U++] = Y >> 24 & 255), V = 0, X = 0) : (V = Y >>> 24, X += 2);
            }
            if (U < S.length)
                for (S[U++] = V; U < S.length;)
                    S[U++] = 0;
        }, l.prototype._toArrayLikeBE = function (S, T) {
            for (var U = S.length - 1, V = 0, W = 0, X = 0; W < this.length; W++) {
                var Y = this.words[W] << X | V;
                S[U--] = 255 & Y, U >= 0 && (S[U--] = Y >> 8 & 255), U >= 0 && (S[U--] = Y >> 16 & 255), 6 === X ? (U >= 0 && (S[U--] = Y >> 24 & 255), V = 0, X = 0) : (V = Y >>> 24, X += 2);
            }
            if (U >= 0)
                for (S[U--] = V; U >= 0;)
                    S[U--] = 0;
        }, Math.clz32 ? l.prototype._countBits = function (S) {
            return 32 - Math.clz32(S);
        } : l.prototype._countBits = function (S) {
            var T = S, U = 0;
            return T >= 4096 && (U += 13, T >>>= 13), T >= 64 && (U += 7, T >>>= 7), T >= 8 && (U += 4, T >>>= 4), T >= 2 && (U += 2, T >>>= 2), U + T;
        }, l.prototype._zeroBits = function (S) {
            if (0 === S)
                return 26;
            var T = S, U = 0;
            return 0 == (8191 & T) && (U += 13, T >>>= 13), 0 == (127 & T) && (U += 7, T >>>= 7), 0 == (15 & T) && (U += 4, T >>>= 4), 0 == (3 & T) && (U += 2, T >>>= 2), 0 == (1 & T) && U++, U;
        }, l.prototype.bitLength = function () {
            var S = this.words[this.length - 1], T = this._countBits(S);
            return 26 * (this.length - 1) + T;
        }, l.prototype.zeroBits = function () {
            if (this.isZero())
                return 0;
            for (var S = 0, T = 0; T < this.length; T++) {
                var U = this._zeroBits(this.words[T]);
                if (S += U, 26 !== U)
                    break;
            }
            return S;
        }, l.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
        }, l.prototype.toTwos = function (S) {
            return 0 !== this.negative ? this.abs().inotn(S).iaddn(1) : this.clone();
        }, l.prototype.fromTwos = function (S) {
            return this.testn(S - 1) ? this.notn(S).iaddn(1).ineg() : this.clone();
        }, l.prototype.isNeg = function () {
            return 0 !== this.negative;
        }, l.prototype.neg = function () {
            return this.clone().ineg();
        }, l.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
        }, l.prototype.iuor = function (S) {
            for (; this.length < S.length;)
                this.words[this.length++] = 0;
            for (var T = 0; T < S.length; T++)
                this.words[T] = this.words[T] | S.words[T];
            return this._strip();
        }, l.prototype.ior = function (S) {
            return i(0 == (this.negative | S.negative)), this.iuor(S);
        }, l.prototype.or = function (S) {
            return this.length > S.length ? this.clone().ior(S) : S.clone().ior(this);
        }, l.prototype.uor = function (S) {
            return this.length > S.length ? this.clone().iuor(S) : S.clone().iuor(this);
        }, l.prototype.iuand = function (S) {
            var T;
            T = this.length > S.length ? S : this;
            for (var U = 0; U < T.length; U++)
                this.words[U] = this.words[U] & S.words[U];
            return this.length = T.length, this._strip();
        }, l.prototype.iand = function (S) {
            return i(0 == (this.negative | S.negative)), this.iuand(S);
        }, l.prototype.and = function (S) {
            return this.length > S.length ? this.clone().iand(S) : S.clone().iand(this);
        }, l.prototype.uand = function (S) {
            return this.length > S.length ? this.clone().iuand(S) : S.clone().iuand(this);
        }, l.prototype.iuxor = function (S) {
            var T, U;
            this.length > S.length ? (T = this, U = S) : (T = S, U = this);
            for (var V = 0; V < U.length; V++)
                this.words[V] = T.words[V] ^ U.words[V];
            if (this !== T)
                for (; V < T.length; V++)
                    this.words[V] = T.words[V];
            return this.length = T.length, this._strip();
        }, l.prototype.ixor = function (S) {
            return i(0 == (this.negative | S.negative)), this.iuxor(S);
        }, l.prototype.xor = function (S) {
            return this.length > S.length ? this.clone().ixor(S) : S.clone().ixor(this);
        }, l.prototype.uxor = function (S) {
            return this.length > S.length ? this.clone().iuxor(S) : S.clone().iuxor(this);
        }, l.prototype.inotn = function (S) {
            i('number' == typeof S && S >= 0);
            var T = 0 | Math.ceil(S / 26), U = S % 26;
            this._expand(T), U > 0 && T--;
            for (var V = 0; V < T; V++)
                this.words[V] = 67108863 & ~this.words[V];
            return U > 0 && (this.words[V] = ~this.words[V] & 67108863 >> 26 - U), this._strip();
        }, l.prototype.notn = function (S) {
            return this.clone().inotn(S);
        }, l.prototype.setn = function (S, T) {
            i('number' == typeof S && S >= 0);
            var U = S / 26 | 0, V = S % 26;
            return this._expand(U + 1), this.words[U] = T ? this.words[U] | 1 << V : this.words[U] & ~(1 << V), this._strip();
        }, l.prototype.iadd = function (S) {
            var T, U, V;
            if (0 !== this.negative && 0 === S.negative)
                return this.negative = 0, T = this.isub(S), this.negative ^= 1, this._normSign();
            if (0 === this.negative && 0 !== S.negative)
                return S.negative = 0, T = this.isub(S), S.negative = 1, T._normSign();
            this.length > S.length ? (U = this, V = S) : (U = S, V = this);
            for (var W = 0, X = 0; X < V.length; X++)
                T = (0 | U.words[X]) + (0 | V.words[X]) + W, this.words[X] = 67108863 & T, W = T >>> 26;
            for (; 0 !== W && X < U.length; X++)
                T = (0 | U.words[X]) + W, this.words[X] = 67108863 & T, W = T >>> 26;
            if (this.length = U.length, 0 !== W)
                this.words[this.length] = W, this.length++;
            else if (U !== this)
                for (; X < U.length; X++)
                    this.words[X] = U.words[X];
            return this;
        }, l.prototype.add = function (S) {
            var T;
            return 0 !== S.negative && 0 === this.negative ? (S.negative = 0, T = this.sub(S), S.negative ^= 1, T) : 0 === S.negative && 0 !== this.negative ? (this.negative = 0, T = S.sub(this), this.negative = 1, T) : this.length > S.length ? this.clone().iadd(S) : S.clone().iadd(this);
        }, l.prototype.isub = function (S) {
            if (0 !== S.negative) {
                S.negative = 0;
                var T = this.iadd(S);
                return S.negative = 1, T._normSign();
            }
            if (0 !== this.negative)
                return this.negative = 0, this.iadd(S), this.negative = 1, this._normSign();
            var U, V, W = this.cmp(S);
            if (0 === W)
                return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            W > 0 ? (U = this, V = S) : (U = S, V = this);
            for (var X = 0, Y = 0; Y < V.length; Y++)
                X = (T = (0 | U.words[Y]) - (0 | V.words[Y]) + X) >> 26, this.words[Y] = 67108863 & T;
            for (; 0 !== X && Y < U.length; Y++)
                X = (T = (0 | U.words[Y]) + X) >> 26, this.words[Y] = 67108863 & T;
            if (0 === X && Y < U.length && U !== this)
                for (; Y < U.length; Y++)
                    this.words[Y] = U.words[Y];
            return this.length = Math.max(this.length, Y), U !== this && (this.negative = 1), this._strip();
        }, l.prototype.sub = function (S) {
            return this.clone().isub(S);
        };
        var S = function (T, U, V) {
            var W, X, Y, Z = T.words, $ = U.words, ab = V.words, bb = 0, cb = 0 | Z[0], db = 8191 & cb, eb = cb >>> 13, fb = 0 | Z[1], gb = 8191 & fb, hb = fb >>> 13, ib = 0 | Z[2], jb = 8191 & ib, kb = ib >>> 13, lb = 0 | Z[3], mb = 8191 & lb, nb = lb >>> 13, ob = 0 | Z[4], pb = 8191 & ob, qb = ob >>> 13, rb = 0 | Z[5], sb = 8191 & rb, tb = rb >>> 13, ub = 0 | Z[6], vb = 8191 & ub, wb = ub >>> 13, xb = 0 | Z[7], yb = 8191 & xb, zb = xb >>> 13, Ab = 0 | Z[8], Bb = 8191 & Ab, Cb = Ab >>> 13, Db = 0 | Z[9], Eb = 8191 & Db, Fb = Db >>> 13, Gb = 0 | $[0], Hb = 8191 & Gb, Ib = Gb >>> 13, Jb = 0 | $[1], Kb = 8191 & Jb, Lb = Jb >>> 13, Mb = 0 | $[2], Nb = 8191 & Mb, Ob = Mb >>> 13, Pb = 0 | $[3], Qb = 8191 & Pb, Rb = Pb >>> 13, Sb = 0 | $[4], Tb = 8191 & Sb, Ub = Sb >>> 13, Vb = 0 | $[5], Wb = 8191 & Vb, Xb = Vb >>> 13, Yb = 0 | $[6], Zb = 8191 & Yb, $b = Yb >>> 13, ac = 0 | $[7], bc = 8191 & ac, cc = ac >>> 13, dc = 0 | $[8], ec = 8191 & dc, fc = dc >>> 13, gc = 0 | $[9], hc = 8191 & gc, ic = gc >>> 13;
            V.negative = T.negative ^ U.negative, V.length = 19;
            var jc = (bb + (W = Math.imul(db, Hb)) | 0) + ((8191 & (X = (X = Math.imul(db, Ib)) + Math.imul(eb, Hb) | 0)) << 13) | 0;
            bb = ((Y = Math.imul(eb, Ib)) + (X >>> 13) | 0) + (jc >>> 26) | 0, jc &= 67108863, W = Math.imul(gb, Hb), X = (X = Math.imul(gb, Ib)) + Math.imul(hb, Hb) | 0, Y = Math.imul(hb, Ib);
            var kc = (bb + (W = W + Math.imul(db, Kb) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(db, Lb) | 0) + Math.imul(eb, Kb) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(eb, Lb) | 0) + (X >>> 13) | 0) + (kc >>> 26) | 0, kc &= 67108863, W = Math.imul(jb, Hb), X = (X = Math.imul(jb, Ib)) + Math.imul(kb, Hb) | 0, Y = Math.imul(kb, Ib), W = W + Math.imul(gb, Kb) | 0, X = (X = X + Math.imul(gb, Lb) | 0) + Math.imul(hb, Kb) | 0, Y = Y + Math.imul(hb, Lb) | 0;
            var lc = (bb + (W = W + Math.imul(db, Nb) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(db, Ob) | 0) + Math.imul(eb, Nb) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(eb, Ob) | 0) + (X >>> 13) | 0) + (lc >>> 26) | 0, lc &= 67108863, W = Math.imul(mb, Hb), X = (X = Math.imul(mb, Ib)) + Math.imul(nb, Hb) | 0, Y = Math.imul(nb, Ib), W = W + Math.imul(jb, Kb) | 0, X = (X = X + Math.imul(jb, Lb) | 0) + Math.imul(kb, Kb) | 0, Y = Y + Math.imul(kb, Lb) | 0, W = W + Math.imul(gb, Nb) | 0, X = (X = X + Math.imul(gb, Ob) | 0) + Math.imul(hb, Nb) | 0, Y = Y + Math.imul(hb, Ob) | 0;
            var mc = (bb + (W = W + Math.imul(db, Qb) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(db, Rb) | 0) + Math.imul(eb, Qb) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(eb, Rb) | 0) + (X >>> 13) | 0) + (mc >>> 26) | 0, mc &= 67108863, W = Math.imul(pb, Hb), X = (X = Math.imul(pb, Ib)) + Math.imul(qb, Hb) | 0, Y = Math.imul(qb, Ib), W = W + Math.imul(mb, Kb) | 0, X = (X = X + Math.imul(mb, Lb) | 0) + Math.imul(nb, Kb) | 0, Y = Y + Math.imul(nb, Lb) | 0, W = W + Math.imul(jb, Nb) | 0, X = (X = X + Math.imul(jb, Ob) | 0) + Math.imul(kb, Nb) | 0, Y = Y + Math.imul(kb, Ob) | 0, W = W + Math.imul(gb, Qb) | 0, X = (X = X + Math.imul(gb, Rb) | 0) + Math.imul(hb, Qb) | 0, Y = Y + Math.imul(hb, Rb) | 0;
            var nc = (bb + (W = W + Math.imul(db, Tb) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(db, Ub) | 0) + Math.imul(eb, Tb) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(eb, Ub) | 0) + (X >>> 13) | 0) + (nc >>> 26) | 0, nc &= 67108863, W = Math.imul(sb, Hb), X = (X = Math.imul(sb, Ib)) + Math.imul(tb, Hb) | 0, Y = Math.imul(tb, Ib), W = W + Math.imul(pb, Kb) | 0, X = (X = X + Math.imul(pb, Lb) | 0) + Math.imul(qb, Kb) | 0, Y = Y + Math.imul(qb, Lb) | 0, W = W + Math.imul(mb, Nb) | 0, X = (X = X + Math.imul(mb, Ob) | 0) + Math.imul(nb, Nb) | 0, Y = Y + Math.imul(nb, Ob) | 0, W = W + Math.imul(jb, Qb) | 0, X = (X = X + Math.imul(jb, Rb) | 0) + Math.imul(kb, Qb) | 0, Y = Y + Math.imul(kb, Rb) | 0, W = W + Math.imul(gb, Tb) | 0, X = (X = X + Math.imul(gb, Ub) | 0) + Math.imul(hb, Tb) | 0, Y = Y + Math.imul(hb, Ub) | 0;
            var oc = (bb + (W = W + Math.imul(db, Wb) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(db, Xb) | 0) + Math.imul(eb, Wb) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(eb, Xb) | 0) + (X >>> 13) | 0) + (oc >>> 26) | 0, oc &= 67108863, W = Math.imul(vb, Hb), X = (X = Math.imul(vb, Ib)) + Math.imul(wb, Hb) | 0, Y = Math.imul(wb, Ib), W = W + Math.imul(sb, Kb) | 0, X = (X = X + Math.imul(sb, Lb) | 0) + Math.imul(tb, Kb) | 0, Y = Y + Math.imul(tb, Lb) | 0, W = W + Math.imul(pb, Nb) | 0, X = (X = X + Math.imul(pb, Ob) | 0) + Math.imul(qb, Nb) | 0, Y = Y + Math.imul(qb, Ob) | 0, W = W + Math.imul(mb, Qb) | 0, X = (X = X + Math.imul(mb, Rb) | 0) + Math.imul(nb, Qb) | 0, Y = Y + Math.imul(nb, Rb) | 0, W = W + Math.imul(jb, Tb) | 0, X = (X = X + Math.imul(jb, Ub) | 0) + Math.imul(kb, Tb) | 0, Y = Y + Math.imul(kb, Ub) | 0, W = W + Math.imul(gb, Wb) | 0, X = (X = X + Math.imul(gb, Xb) | 0) + Math.imul(hb, Wb) | 0, Y = Y + Math.imul(hb, Xb) | 0;
            var pc = (bb + (W = W + Math.imul(db, Zb) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(db, $b) | 0) + Math.imul(eb, Zb) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(eb, $b) | 0) + (X >>> 13) | 0) + (pc >>> 26) | 0, pc &= 67108863, W = Math.imul(yb, Hb), X = (X = Math.imul(yb, Ib)) + Math.imul(zb, Hb) | 0, Y = Math.imul(zb, Ib), W = W + Math.imul(vb, Kb) | 0, X = (X = X + Math.imul(vb, Lb) | 0) + Math.imul(wb, Kb) | 0, Y = Y + Math.imul(wb, Lb) | 0, W = W + Math.imul(sb, Nb) | 0, X = (X = X + Math.imul(sb, Ob) | 0) + Math.imul(tb, Nb) | 0, Y = Y + Math.imul(tb, Ob) | 0, W = W + Math.imul(pb, Qb) | 0, X = (X = X + Math.imul(pb, Rb) | 0) + Math.imul(qb, Qb) | 0, Y = Y + Math.imul(qb, Rb) | 0, W = W + Math.imul(mb, Tb) | 0, X = (X = X + Math.imul(mb, Ub) | 0) + Math.imul(nb, Tb) | 0, Y = Y + Math.imul(nb, Ub) | 0, W = W + Math.imul(jb, Wb) | 0, X = (X = X + Math.imul(jb, Xb) | 0) + Math.imul(kb, Wb) | 0, Y = Y + Math.imul(kb, Xb) | 0, W = W + Math.imul(gb, Zb) | 0, X = (X = X + Math.imul(gb, $b) | 0) + Math.imul(hb, Zb) | 0, Y = Y + Math.imul(hb, $b) | 0;
            var qc = (bb + (W = W + Math.imul(db, bc) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(db, cc) | 0) + Math.imul(eb, bc) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(eb, cc) | 0) + (X >>> 13) | 0) + (qc >>> 26) | 0, qc &= 67108863, W = Math.imul(Bb, Hb), X = (X = Math.imul(Bb, Ib)) + Math.imul(Cb, Hb) | 0, Y = Math.imul(Cb, Ib), W = W + Math.imul(yb, Kb) | 0, X = (X = X + Math.imul(yb, Lb) | 0) + Math.imul(zb, Kb) | 0, Y = Y + Math.imul(zb, Lb) | 0, W = W + Math.imul(vb, Nb) | 0, X = (X = X + Math.imul(vb, Ob) | 0) + Math.imul(wb, Nb) | 0, Y = Y + Math.imul(wb, Ob) | 0, W = W + Math.imul(sb, Qb) | 0, X = (X = X + Math.imul(sb, Rb) | 0) + Math.imul(tb, Qb) | 0, Y = Y + Math.imul(tb, Rb) | 0, W = W + Math.imul(pb, Tb) | 0, X = (X = X + Math.imul(pb, Ub) | 0) + Math.imul(qb, Tb) | 0, Y = Y + Math.imul(qb, Ub) | 0, W = W + Math.imul(mb, Wb) | 0, X = (X = X + Math.imul(mb, Xb) | 0) + Math.imul(nb, Wb) | 0, Y = Y + Math.imul(nb, Xb) | 0, W = W + Math.imul(jb, Zb) | 0, X = (X = X + Math.imul(jb, $b) | 0) + Math.imul(kb, Zb) | 0, Y = Y + Math.imul(kb, $b) | 0, W = W + Math.imul(gb, bc) | 0, X = (X = X + Math.imul(gb, cc) | 0) + Math.imul(hb, bc) | 0, Y = Y + Math.imul(hb, cc) | 0;
            var rc = (bb + (W = W + Math.imul(db, ec) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(db, fc) | 0) + Math.imul(eb, ec) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(eb, fc) | 0) + (X >>> 13) | 0) + (rc >>> 26) | 0, rc &= 67108863, W = Math.imul(Eb, Hb), X = (X = Math.imul(Eb, Ib)) + Math.imul(Fb, Hb) | 0, Y = Math.imul(Fb, Ib), W = W + Math.imul(Bb, Kb) | 0, X = (X = X + Math.imul(Bb, Lb) | 0) + Math.imul(Cb, Kb) | 0, Y = Y + Math.imul(Cb, Lb) | 0, W = W + Math.imul(yb, Nb) | 0, X = (X = X + Math.imul(yb, Ob) | 0) + Math.imul(zb, Nb) | 0, Y = Y + Math.imul(zb, Ob) | 0, W = W + Math.imul(vb, Qb) | 0, X = (X = X + Math.imul(vb, Rb) | 0) + Math.imul(wb, Qb) | 0, Y = Y + Math.imul(wb, Rb) | 0, W = W + Math.imul(sb, Tb) | 0, X = (X = X + Math.imul(sb, Ub) | 0) + Math.imul(tb, Tb) | 0, Y = Y + Math.imul(tb, Ub) | 0, W = W + Math.imul(pb, Wb) | 0, X = (X = X + Math.imul(pb, Xb) | 0) + Math.imul(qb, Wb) | 0, Y = Y + Math.imul(qb, Xb) | 0, W = W + Math.imul(mb, Zb) | 0, X = (X = X + Math.imul(mb, $b) | 0) + Math.imul(nb, Zb) | 0, Y = Y + Math.imul(nb, $b) | 0, W = W + Math.imul(jb, bc) | 0, X = (X = X + Math.imul(jb, cc) | 0) + Math.imul(kb, bc) | 0, Y = Y + Math.imul(kb, cc) | 0, W = W + Math.imul(gb, ec) | 0, X = (X = X + Math.imul(gb, fc) | 0) + Math.imul(hb, ec) | 0, Y = Y + Math.imul(hb, fc) | 0;
            var sc = (bb + (W = W + Math.imul(db, hc) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(db, ic) | 0) + Math.imul(eb, hc) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(eb, ic) | 0) + (X >>> 13) | 0) + (sc >>> 26) | 0, sc &= 67108863, W = Math.imul(Eb, Kb), X = (X = Math.imul(Eb, Lb)) + Math.imul(Fb, Kb) | 0, Y = Math.imul(Fb, Lb), W = W + Math.imul(Bb, Nb) | 0, X = (X = X + Math.imul(Bb, Ob) | 0) + Math.imul(Cb, Nb) | 0, Y = Y + Math.imul(Cb, Ob) | 0, W = W + Math.imul(yb, Qb) | 0, X = (X = X + Math.imul(yb, Rb) | 0) + Math.imul(zb, Qb) | 0, Y = Y + Math.imul(zb, Rb) | 0, W = W + Math.imul(vb, Tb) | 0, X = (X = X + Math.imul(vb, Ub) | 0) + Math.imul(wb, Tb) | 0, Y = Y + Math.imul(wb, Ub) | 0, W = W + Math.imul(sb, Wb) | 0, X = (X = X + Math.imul(sb, Xb) | 0) + Math.imul(tb, Wb) | 0, Y = Y + Math.imul(tb, Xb) | 0, W = W + Math.imul(pb, Zb) | 0, X = (X = X + Math.imul(pb, $b) | 0) + Math.imul(qb, Zb) | 0, Y = Y + Math.imul(qb, $b) | 0, W = W + Math.imul(mb, bc) | 0, X = (X = X + Math.imul(mb, cc) | 0) + Math.imul(nb, bc) | 0, Y = Y + Math.imul(nb, cc) | 0, W = W + Math.imul(jb, ec) | 0, X = (X = X + Math.imul(jb, fc) | 0) + Math.imul(kb, ec) | 0, Y = Y + Math.imul(kb, fc) | 0;
            var tc = (bb + (W = W + Math.imul(gb, hc) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(gb, ic) | 0) + Math.imul(hb, hc) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(hb, ic) | 0) + (X >>> 13) | 0) + (tc >>> 26) | 0, tc &= 67108863, W = Math.imul(Eb, Nb), X = (X = Math.imul(Eb, Ob)) + Math.imul(Fb, Nb) | 0, Y = Math.imul(Fb, Ob), W = W + Math.imul(Bb, Qb) | 0, X = (X = X + Math.imul(Bb, Rb) | 0) + Math.imul(Cb, Qb) | 0, Y = Y + Math.imul(Cb, Rb) | 0, W = W + Math.imul(yb, Tb) | 0, X = (X = X + Math.imul(yb, Ub) | 0) + Math.imul(zb, Tb) | 0, Y = Y + Math.imul(zb, Ub) | 0, W = W + Math.imul(vb, Wb) | 0, X = (X = X + Math.imul(vb, Xb) | 0) + Math.imul(wb, Wb) | 0, Y = Y + Math.imul(wb, Xb) | 0, W = W + Math.imul(sb, Zb) | 0, X = (X = X + Math.imul(sb, $b) | 0) + Math.imul(tb, Zb) | 0, Y = Y + Math.imul(tb, $b) | 0, W = W + Math.imul(pb, bc) | 0, X = (X = X + Math.imul(pb, cc) | 0) + Math.imul(qb, bc) | 0, Y = Y + Math.imul(qb, cc) | 0, W = W + Math.imul(mb, ec) | 0, X = (X = X + Math.imul(mb, fc) | 0) + Math.imul(nb, ec) | 0, Y = Y + Math.imul(nb, fc) | 0;
            var uc = (bb + (W = W + Math.imul(jb, hc) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(jb, ic) | 0) + Math.imul(kb, hc) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(kb, ic) | 0) + (X >>> 13) | 0) + (uc >>> 26) | 0, uc &= 67108863, W = Math.imul(Eb, Qb), X = (X = Math.imul(Eb, Rb)) + Math.imul(Fb, Qb) | 0, Y = Math.imul(Fb, Rb), W = W + Math.imul(Bb, Tb) | 0, X = (X = X + Math.imul(Bb, Ub) | 0) + Math.imul(Cb, Tb) | 0, Y = Y + Math.imul(Cb, Ub) | 0, W = W + Math.imul(yb, Wb) | 0, X = (X = X + Math.imul(yb, Xb) | 0) + Math.imul(zb, Wb) | 0, Y = Y + Math.imul(zb, Xb) | 0, W = W + Math.imul(vb, Zb) | 0, X = (X = X + Math.imul(vb, $b) | 0) + Math.imul(wb, Zb) | 0, Y = Y + Math.imul(wb, $b) | 0, W = W + Math.imul(sb, bc) | 0, X = (X = X + Math.imul(sb, cc) | 0) + Math.imul(tb, bc) | 0, Y = Y + Math.imul(tb, cc) | 0, W = W + Math.imul(pb, ec) | 0, X = (X = X + Math.imul(pb, fc) | 0) + Math.imul(qb, ec) | 0, Y = Y + Math.imul(qb, fc) | 0;
            var vc = (bb + (W = W + Math.imul(mb, hc) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(mb, ic) | 0) + Math.imul(nb, hc) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(nb, ic) | 0) + (X >>> 13) | 0) + (vc >>> 26) | 0, vc &= 67108863, W = Math.imul(Eb, Tb), X = (X = Math.imul(Eb, Ub)) + Math.imul(Fb, Tb) | 0, Y = Math.imul(Fb, Ub), W = W + Math.imul(Bb, Wb) | 0, X = (X = X + Math.imul(Bb, Xb) | 0) + Math.imul(Cb, Wb) | 0, Y = Y + Math.imul(Cb, Xb) | 0, W = W + Math.imul(yb, Zb) | 0, X = (X = X + Math.imul(yb, $b) | 0) + Math.imul(zb, Zb) | 0, Y = Y + Math.imul(zb, $b) | 0, W = W + Math.imul(vb, bc) | 0, X = (X = X + Math.imul(vb, cc) | 0) + Math.imul(wb, bc) | 0, Y = Y + Math.imul(wb, cc) | 0, W = W + Math.imul(sb, ec) | 0, X = (X = X + Math.imul(sb, fc) | 0) + Math.imul(tb, ec) | 0, Y = Y + Math.imul(tb, fc) | 0;
            var wc = (bb + (W = W + Math.imul(pb, hc) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(pb, ic) | 0) + Math.imul(qb, hc) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(qb, ic) | 0) + (X >>> 13) | 0) + (wc >>> 26) | 0, wc &= 67108863, W = Math.imul(Eb, Wb), X = (X = Math.imul(Eb, Xb)) + Math.imul(Fb, Wb) | 0, Y = Math.imul(Fb, Xb), W = W + Math.imul(Bb, Zb) | 0, X = (X = X + Math.imul(Bb, $b) | 0) + Math.imul(Cb, Zb) | 0, Y = Y + Math.imul(Cb, $b) | 0, W = W + Math.imul(yb, bc) | 0, X = (X = X + Math.imul(yb, cc) | 0) + Math.imul(zb, bc) | 0, Y = Y + Math.imul(zb, cc) | 0, W = W + Math.imul(vb, ec) | 0, X = (X = X + Math.imul(vb, fc) | 0) + Math.imul(wb, ec) | 0, Y = Y + Math.imul(wb, fc) | 0;
            var xc = (bb + (W = W + Math.imul(sb, hc) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(sb, ic) | 0) + Math.imul(tb, hc) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(tb, ic) | 0) + (X >>> 13) | 0) + (xc >>> 26) | 0, xc &= 67108863, W = Math.imul(Eb, Zb), X = (X = Math.imul(Eb, $b)) + Math.imul(Fb, Zb) | 0, Y = Math.imul(Fb, $b), W = W + Math.imul(Bb, bc) | 0, X = (X = X + Math.imul(Bb, cc) | 0) + Math.imul(Cb, bc) | 0, Y = Y + Math.imul(Cb, cc) | 0, W = W + Math.imul(yb, ec) | 0, X = (X = X + Math.imul(yb, fc) | 0) + Math.imul(zb, ec) | 0, Y = Y + Math.imul(zb, fc) | 0;
            var yc = (bb + (W = W + Math.imul(vb, hc) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(vb, ic) | 0) + Math.imul(wb, hc) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(wb, ic) | 0) + (X >>> 13) | 0) + (yc >>> 26) | 0, yc &= 67108863, W = Math.imul(Eb, bc), X = (X = Math.imul(Eb, cc)) + Math.imul(Fb, bc) | 0, Y = Math.imul(Fb, cc), W = W + Math.imul(Bb, ec) | 0, X = (X = X + Math.imul(Bb, fc) | 0) + Math.imul(Cb, ec) | 0, Y = Y + Math.imul(Cb, fc) | 0;
            var zc = (bb + (W = W + Math.imul(yb, hc) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(yb, ic) | 0) + Math.imul(zb, hc) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(zb, ic) | 0) + (X >>> 13) | 0) + (zc >>> 26) | 0, zc &= 67108863, W = Math.imul(Eb, ec), X = (X = Math.imul(Eb, fc)) + Math.imul(Fb, ec) | 0, Y = Math.imul(Fb, fc);
            var Ac = (bb + (W = W + Math.imul(Bb, hc) | 0) | 0) + ((8191 & (X = (X = X + Math.imul(Bb, ic) | 0) + Math.imul(Cb, hc) | 0)) << 13) | 0;
            bb = ((Y = Y + Math.imul(Cb, ic) | 0) + (X >>> 13) | 0) + (Ac >>> 26) | 0, Ac &= 67108863;
            var Bc = (bb + (W = Math.imul(Eb, hc)) | 0) + ((8191 & (X = (X = Math.imul(Eb, ic)) + Math.imul(Fb, hc) | 0)) << 13) | 0;
            return bb = ((Y = Math.imul(Fb, ic)) + (X >>> 13) | 0) + (Bc >>> 26) | 0, Bc &= 67108863, ab[0] = jc, ab[1] = kc, ab[2] = lc, ab[3] = mc, ab[4] = nc, ab[5] = oc, ab[6] = pc, ab[7] = qc, ab[8] = rc, ab[9] = sc, ab[10] = tc, ab[11] = uc, ab[12] = vc, ab[13] = wc, ab[14] = xc, ab[15] = yc, ab[16] = zc, ab[17] = Ac, ab[18] = Bc, 0 !== bb && (ab[19] = bb, V.length++), V;
        };
        function T(U, V, W) {
            W.negative = V.negative ^ U.negative, W.length = U.length + V.length;
            for (var X = 0, Y = 0, Z = 0; l < W.length - 1; l++) {
                var $ = j;
                j = 0;
                for (var ab = 67108863 & X, bb = Math.min(l, V.length - 1), cb = Math.max(0, l - U.length + 1); A <= u; A++) {
                    var db = l - A, eb = (0 | U.words[_B]) * (0 | V.words[A]), fb = 67108863 & eb;
                    n = 67108863 & (fb = fb + n | 0), j += ($ = ($ = $ + (eb / 67108864 | 0) | 0) + (fb >>> 26) | 0) >>> 26, $ &= 67108863;
                }
                W.words[l] = n, X = $, $ = j;
            }
            return 0 !== X ? W.words[l] = X : W.length--, W._strip();
        }
        function db(eb, fb, gb) {
            return T(eb, fb, gb);
        }
        function eb(fb, gb) {
            this.x = fb, this.y = gb;
        }
        Math.imul || (S = F), l.prototype.mulTo = function (fb, gb) {
            var hb = this.length + fb.length;
            return 10 === this.length && 10 === fb.length ? S(this, fb, gb) : hb < 63 ? F(this, fb, gb) : hb < 1024 ? T(this, fb, gb) : db(this, fb, gb);
        }, eb.prototype.makeRBT = function (fb) {
            for (var gb = new Array(fb), hb = l.prototype._countBits(fb) - 1, ib = 0; ib < fb; ib++)
                gb[ib] = this.revBin(ib, hb, fb);
            return gb;
        }, eb.prototype.revBin = function (fb, gb, hb) {
            if (0 === fb || fb === hb - 1)
                return fb;
            for (var ib = 0, jb = 0; jb < gb; jb++)
                ib |= (1 & fb) << gb - jb - 1, fb >>= 1;
            return ib;
        }, eb.prototype.permute = function (fb, gb, hb, ib, jb, kb) {
            for (var lb = 0; lb < kb; lb++)
                ib[lb] = gb[fb[lb]], jb[lb] = hb[fb[lb]];
        }, eb.prototype.transform = function (fb, gb, hb, ib, jb, kb) {
            this.permute(kb, fb, gb, hb, ib, jb);
            for (var lb = 1; lb < jb; lb <<= 1)
                for (var mb = lb << 1, nb = Math.cos(2 * Math.PI / mb), ob = Math.sin(2 * Math.PI / mb), pb = 0; pb < jb; pb += mb)
                    for (var qb = nb, rb = ob, sb = 0; sb < lb; sb++) {
                        var tb = hb[pb + sb], ub = ib[pb + sb], vb = hb[pb + sb + lb], wb = ib[pb + sb + lb], xb = qb * vb - rb * wb;
                        wb = qb * wb + rb * vb, vb = xb, hb[pb + sb] = tb + vb, ib[pb + sb] = ub + wb, hb[pb + sb + lb] = tb - vb, ib[pb + sb + lb] = ub - wb, sb !== mb && (xb = nb * qb - ob * rb, rb = nb * rb + ob * qb, qb = xb);
                    }
        }, eb.prototype.guessLen13b = function (fb, gb) {
            var hb = 1 | Math.max(gb, fb), ib = 1 & hb, jb = 0;
            for (hb = hb / 2 | 0; hb; hb >>>= 1)
                jb++;
            return 1 << jb + 1 + ib;
        }, eb.prototype.conjugate = function (fb, gb, hb) {
            if (!(hb <= 1))
                for (var ib = 0; ib < hb / 2; ib++) {
                    var jb = fb[ib];
                    fb[ib] = fb[hb - ib - 1], fb[hb - ib - 1] = jb, jb = gb[ib], gb[ib] = -gb[hb - ib - 1], gb[hb - ib - 1] = -jb;
                }
        }, eb.prototype.normalize13b = function (fb, gb) {
            for (var hb = 0, ib = 0; ib < gb / 2; ib++) {
                var jb = 8192 * Math.round(fb[2 * ib + 1] / gb) + Math.round(fb[2 * ib] / gb) + hb;
                fb[ib] = 67108863 & jb, hb = jb < 67108864 ? 0 : jb / 67108864 | 0;
            }
            return fb;
        }, eb.prototype.convert13b = function (fb, gb, hb, ib) {
            for (var jb = 0, kb = 0; kb < gb; kb++)
                jb += 0 | fb[kb], hb[2 * kb] = 8191 & jb, jb >>>= 13, hb[2 * kb + 1] = 8191 & jb, jb >>>= 13;
            for (kb = 2 * gb; kb < ib; ++kb)
                hb[kb] = 0;
            i(0 === jb), i(0 == (-8192 & jb));
        }, eb.prototype.stub = function (fb) {
            for (var gb = new Array(fb), hb = 0; hb < fb; hb++)
                gb[hb] = 0;
            return gb;
        }, eb.prototype.mulp = function (fb, gb, hb) {
            var ib = 2 * this.guessLen13b(fb.length, gb.length), jb = this.makeRBT(ib), kb = this.stub(ib), lb = new Array(ib), mb = new Array(ib), nb = new Array(ib), ob = new Array(ib), pb = new Array(ib), qb = new Array(ib), rb = hb.words;
            rb.length = ib, this.convert13b(fb.words, fb.length, lb, ib), this.convert13b(gb.words, gb.length, ob, ib), this.transform(lb, kb, mb, nb, ib, jb), this.transform(ob, kb, pb, qb, ib, jb);
            for (var sb = 0; sb < ib; sb++) {
                var tb = mb[sb] * pb[sb] - nb[sb] * qb[sb];
                nb[sb] = mb[sb] * qb[sb] + nb[sb] * pb[sb], mb[sb] = tb;
            }
            return this.conjugate(mb, nb, ib), this.transform(mb, nb, rb, kb, ib, jb), this.conjugate(rb, kb, ib), this.normalize13b(rb, ib), hb.negative = fb.negative ^ gb.negative, hb.length = fb.length + gb.length, hb._strip();
        }, l.prototype.mul = function (fb) {
            var gb = new l(null);
            return gb.words = new Array(this.length + fb.length), this.mulTo(fb, gb);
        }, l.prototype.mulf = function (fb) {
            var gb = new l(null);
            return gb.words = new Array(this.length + fb.length), db(this, fb, gb);
        }, l.prototype.imul = function (fb) {
            return this.clone().mulTo(fb, this);
        }, l.prototype.imuln = function (fb) {
            var gb = fb < 0;
            gb && (fb = -fb), i('number' == typeof fb), i(fb < 67108864);
            for (var hb = 0, ib = 0; ib < this.length; ib++) {
                var jb = (0 | this.words[ib]) * fb, kb = (67108863 & jb) + (67108863 & hb);
                hb >>= 26, hb += jb / 67108864 | 0, hb += kb >>> 26, this.words[ib] = 67108863 & kb;
            }
            return 0 !== hb && (this.words[ib] = hb, this.length++), gb ? this.ineg() : this;
        }, l.prototype.muln = function (fb) {
            return this.clone().imuln(fb);
        }, l.prototype.sqr = function () {
            return this.mul(this);
        }, l.prototype.isqr = function () {
            return this.imul(this.clone());
        }, l.prototype.pow = function (fb) {
            var gb = function (hb) {
                for (var ib = new Array(hb.bitLength()), jb = 0; jb < ib.length; jb++) {
                    var kb = jb / 26 | 0, lb = jb % 26;
                    ib[jb] = hb.words[kb] >>> lb & 1;
                }
                return ib;
            }(fb);
            if (0 === gb.length)
                return new l(1);
            for (var hb = this, ib = 0; ib < gb.length && 0 === gb[ib]; ib++, hb = hb.sqr());
            if (++ib < gb.length)
                for (var jb = hb.sqr(); ib < gb.length; ib++, jb = jb.sqr())
                    0 !== gb[ib] && (hb = hb.mul(jb));
            return hb;
        }, l.prototype.iushln = function (fb) {
            i('number' == typeof fb && fb >= 0);
            var gb, hb = fb % 26, ib = (fb - hb) / 26, jb = 67108863 >>> 26 - hb << 26 - hb;
            if (0 !== hb) {
                var kb = 0;
                for (gb = 0; gb < this.length; gb++) {
                    var lb = this.words[gb] & jb, mb = (0 | this.words[gb]) - lb << hb;
                    this.words[gb] = mb | kb, kb = lb >>> 26 - hb;
                }
                kb && (this.words[gb] = kb, this.length++);
            }
            if (0 !== ib) {
                for (gb = this.length - 1; gb >= 0; gb--)
                    this.words[gb + ib] = this.words[gb];
                for (gb = 0; gb < ib; gb++)
                    this.words[gb] = 0;
                this.length += ib;
            }
            return this._strip();
        }, l.prototype.ishln = function (fb) {
            return i(0 === this.negative), this.iushln(fb);
        }, l.prototype.iushrn = function (fb, gb, hb) {
            var ib;
            i('number' == typeof fb && fb >= 0), ib = gb ? (gb - gb % 26) / 26 : 0;
            var jb = fb % 26, kb = Math.min((fb - jb) / 26, this.length), lb = 67108863 ^ 67108863 >>> jb << jb, mb = hb;
            if (ib -= kb, ib = Math.max(0, ib), mb) {
                for (var nb = 0; nb < kb; nb++)
                    mb.words[nb] = this.words[nb];
                mb.length = kb;
            }
            if (0 === kb);
            else if (this.length > kb)
                for (this.length -= kb, nb = 0; nb < this.length; nb++)
                    this.words[nb] = this.words[nb + kb];
            else
                this.words[0] = 0, this.length = 1;
            var ob = 0;
            for (nb = this.length - 1; nb >= 0 && (0 !== ob || nb >= ib); nb--) {
                var pb = 0 | this.words[nb];
                this.words[nb] = ob << 26 - jb | pb >>> jb, ob = pb & lb;
            }
            return mb && 0 !== ob && (mb.words[mb.length++] = ob), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip();
        }, l.prototype.ishrn = function (fb, gb, hb) {
            return i(0 === this.negative), this.iushrn(fb, gb, hb);
        }, l.prototype.shln = function (fb) {
            return this.clone().ishln(fb);
        }, l.prototype.ushln = function (fb) {
            return this.clone().iushln(fb);
        }, l.prototype.shrn = function (fb) {
            return this.clone().ishrn(fb);
        }, l.prototype.ushrn = function (fb) {
            return this.clone().iushrn(fb);
        }, l.prototype.testn = function (fb) {
            i('number' == typeof fb && fb >= 0);
            var gb = fb % 26, hb = (fb - gb) / 26, ib = 1 << gb;
            return !(this.length <= hb) && !!(this.words[hb] & ib);
        }, l.prototype.imaskn = function (fb) {
            i('number' == typeof fb && fb >= 0);
            var gb = fb % 26, hb = (fb - gb) / 26;
            if (i(0 === this.negative, 'imaskn works only with positive numbers'), this.length <= hb)
                return this;
            if (0 !== gb && hb++, this.length = Math.min(hb, this.length), 0 !== gb) {
                var ib = 67108863 ^ 67108863 >>> gb << gb;
                this.words[this.length - 1] &= ib;
            }
            return this._strip();
        }, l.prototype.maskn = function (fb) {
            return this.clone().imaskn(fb);
        }, l.prototype.iaddn = function (fb) {
            return i('number' == typeof fb), i(fb < 67108864), fb < 0 ? this.isubn(-fb) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= fb ? (this.words[0] = fb - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(fb), this.negative = 1, this) : this._iaddn(fb);
        }, l.prototype._iaddn = function (fb) {
            this.words[0] += fb;
            for (var gb = 0; gb < this.length && this.words[gb] >= 67108864; gb++)
                this.words[gb] -= 67108864, gb === this.length - 1 ? this.words[gb + 1] = 1 : this.words[gb + 1]++;
            return this.length = Math.max(this.length, gb + 1), this;
        }, l.prototype.isubn = function (fb) {
            if (i('number' == typeof fb), i(fb < 67108864), fb < 0)
                return this.iaddn(-fb);
            if (0 !== this.negative)
                return this.negative = 0, this.iaddn(fb), this.negative = 1, this;
            if (this.words[0] -= fb, 1 === this.length && this.words[0] < 0)
                this.words[0] = -this.words[0], this.negative = 1;
            else
                for (var gb = 0; gb < this.length && this.words[gb] < 0; gb++)
                    this.words[gb] += 67108864, this.words[gb + 1] -= 1;
            return this._strip();
        }, l.prototype.addn = function (fb) {
            return this.clone().iaddn(fb);
        }, l.prototype.subn = function (fb) {
            return this.clone().isubn(fb);
        }, l.prototype.iabs = function () {
            return this.negative = 0, this;
        }, l.prototype.abs = function () {
            return this.clone().iabs();
        }, l.prototype._ishlnsubmul = function (fb, gb, hb) {
            var ib, jb, kb = fb.length + hb;
            this._expand(kb);
            var lb = 0;
            for (ib = 0; ib < fb.length; ib++) {
                jb = (0 | this.words[ib + hb]) + lb;
                var mb = (0 | fb.words[ib]) * gb;
                lb = ((jb -= 67108863 & mb) >> 26) - (mb / 67108864 | 0), this.words[ib + hb] = 67108863 & jb;
            }
            for (; ib < this.length - hb; ib++)
                lb = (jb = (0 | this.words[ib + hb]) + lb) >> 26, this.words[ib + hb] = 67108863 & jb;
            if (0 === lb)
                return this._strip();
            for (i(-1 === lb), lb = 0, ib = 0; ib < this.length; ib++)
                lb = (jb = -(0 | this.words[ib]) + lb) >> 26, this.words[ib] = 67108863 & jb;
            return this.negative = 1, this._strip();
        }, l.prototype._wordDiv = function (fb, gb) {
            var hb = (this.length, fb.length), ib = this.clone(), jb = fb, kb = 0 | jb.words[jb.length - 1];
            0 !== (hb = 26 - this._countBits(kb)) && (jb = jb.ushln(hb), ib.iushln(hb), kb = 0 | jb.words[jb.length - 1]);
            var lb, mb = ib.length - jb.length;
            if ('mod' !== gb) {
                (lb = new l(null)).length = mb + 1, lb.words = new Array(lb.length);
                for (var nb = 0; nb < lb.length; nb++)
                    lb.words[nb] = 0;
            }
            var ob = ib.clone()._ishlnsubmul(jb, 1, mb);
            0 === ob.negative && (ib = ob, lb && (lb.words[mb] = 1));
            for (var pb = mb - 1; pb >= 0; pb--) {
                var qb = 67108864 * (0 | ib.words[jb.length + pb]) + (0 | ib.words[jb.length + pb - 1]);
                for (qb = Math.min(qb / kb | 0, 67108863), ib._ishlnsubmul(jb, qb, pb); 0 !== ib.negative;)
                    qb--, ib.negative = 0, ib._ishlnsubmul(jb, 1, pb), ib.isZero() || (ib.negative ^= 1);
                lb && (lb.words[pb] = qb);
            }
            return lb && lb._strip(), ib._strip(), 'div' !== gb && 0 !== hb && ib.iushrn(hb), {
                div: lb || null,
                mod: ib
            };
        }, l.prototype.divmod = function (fb, gb, hb) {
            return i(!fb.isZero()), this.isZero() ? {
                div: new l(0),
                mod: new l(0)
            } : 0 !== this.negative && 0 === fb.negative ? (n = this.neg().divmod(fb, gb), 'mod' !== gb && (j = n.div.neg()), 'div' !== gb && ($ = n.mod.neg(), hb && 0 !== $.negative && $.iadd(fb)), {
                div: j,
                mod: $
            }) : 0 === this.negative && 0 !== fb.negative ? (n = this.divmod(fb.neg(), gb), 'mod' !== gb && (j = n.div.neg()), {
                div: j,
                mod: n.mod
            }) : 0 != (this.negative & fb.negative) ? (n = this.neg().divmod(fb.neg(), gb), 'div' !== gb && ($ = n.mod.neg(), hb && 0 !== $.negative && $.isub(fb)), {
                div: n.div,
                mod: $
            }) : fb.length > this.length || this.cmp(fb) < 0 ? {
                div: new l(0),
                mod: this
            } : 1 === fb.length ? 'div' === gb ? {
                div: this.divn(fb.words[0]),
                mod: null
            } : 'mod' === gb ? {
                div: null,
                mod: new l(this.modrn(fb.words[0]))
            } : {
                div: this.divn(fb.words[0]),
                mod: new l(this.modrn(fb.words[0]))
            } : this._wordDiv(fb, gb);
            var ib, jb, kb;
        }, l.prototype.div = function (fb) {
            return this.divmod(fb, 'div', !1).div;
        }, l.prototype.mod = function (fb) {
            return this.divmod(fb, 'mod', !1).mod;
        }, l.prototype.umod = function (fb) {
            return this.divmod(fb, 'mod', !0).mod;
        }, l.prototype.divRound = function (fb) {
            var gb = this.divmod(fb);
            if (gb.mod.isZero())
                return gb.div;
            var hb = 0 !== gb.div.negative ? gb.mod.isub(fb) : gb.mod, ib = fb.ushrn(1), jb = fb.andln(1), kb = hb.cmp(ib);
            return kb < 0 || 1 === jb && 0 === kb ? gb.div : 0 !== gb.div.negative ? gb.div.isubn(1) : gb.div.iaddn(1);
        }, l.prototype.modrn = function (fb) {
            var gb = fb < 0;
            gb && (fb = -fb), i(fb <= 67108863);
            for (var hb = 67108864 % fb, ib = 0, jb = this.length - 1; jb >= 0; jb--)
                ib = (hb * ib + (0 | this.words[jb])) % fb;
            return gb ? -ib : ib;
        }, l.prototype.modn = function (fb) {
            return this.modrn(fb);
        }, l.prototype.idivn = function (fb) {
            var gb = fb < 0;
            gb && (fb = -fb), i(fb <= 67108863);
            for (var hb = 0, ib = this.length - 1; ib >= 0; ib--) {
                var jb = (0 | this.words[ib]) + 67108864 * hb;
                this.words[ib] = jb / fb | 0, hb = jb % fb;
            }
            return this._strip(), gb ? this.ineg() : this;
        }, l.prototype.divn = function (fb) {
            return this.clone().idivn(fb);
        }, l.prototype.egcd = function (fb) {
            i(0 === fb.negative), i(!fb.isZero());
            var gb = this, hb = fb.clone();
            gb = 0 !== gb.negative ? gb.umod(fb) : gb.clone();
            for (var ib = new l(1), jb = new l(0), kb = new l(0), lb = new l(1), mb = 0; gb.isEven() && hb.isEven();)
                gb.iushrn(1), hb.iushrn(1), ++mb;
            for (var nb = hb.clone(), ob = gb.clone(); !gb.isZero();) {
                for (var pb = 0, qb = 1; 0 == (gb.words[0] & qb) && pb < 26; ++pb, qb <<= 1);
                if (pb > 0)
                    for (gb.iushrn(pb); pb-- > 0;)
                        (ib.isOdd() || jb.isOdd()) && (ib.iadd(nb), jb.isub(ob)), ib.iushrn(1), jb.iushrn(1);
                for (var rb = 0, sb = 1; 0 == (hb.words[0] & sb) && rb < 26; ++rb, sb <<= 1);
                if (rb > 0)
                    for (hb.iushrn(rb); rb-- > 0;)
                        (kb.isOdd() || lb.isOdd()) && (kb.iadd(nb), lb.isub(ob)), kb.iushrn(1), lb.iushrn(1);
                gb.cmp(hb) >= 0 ? (gb.isub(hb), ib.isub(kb), jb.isub(lb)) : (hb.isub(gb), kb.isub(ib), lb.isub(jb));
            }
            return {
                a: kb,
                b: lb,
                gcd: hb.iushln(mb)
            };
        }, l.prototype._invmp = function (fb) {
            i(0 === fb.negative), i(!fb.isZero());
            var gb = this, hb = fb.clone();
            gb = 0 !== gb.negative ? gb.umod(fb) : gb.clone();
            for (var ib, jb = new l(1), kb = new l(0), lb = hb.clone(); gb.cmpn(1) > 0 && hb.cmpn(1) > 0;) {
                for (var mb = 0, nb = 1; 0 == (gb.words[0] & nb) && mb < 26; ++mb, nb <<= 1);
                if (mb > 0)
                    for (gb.iushrn(mb); mb-- > 0;)
                        jb.isOdd() && jb.iadd(lb), jb.iushrn(1);
                for (var ob = 0, pb = 1; 0 == (hb.words[0] & pb) && ob < 26; ++ob, pb <<= 1);
                if (ob > 0)
                    for (hb.iushrn(ob); ob-- > 0;)
                        kb.isOdd() && kb.iadd(lb), kb.iushrn(1);
                gb.cmp(hb) >= 0 ? (gb.isub(hb), jb.isub(kb)) : (hb.isub(gb), kb.isub(jb));
            }
            return (ib = 0 === gb.cmpn(1) ? jb : kb).cmpn(0) < 0 && ib.iadd(fb), ib;
        }, l.prototype.gcd = function (fb) {
            if (this.isZero())
                return fb.abs();
            if (fb.isZero())
                return this.abs();
            var gb = this.clone(), hb = fb.clone();
            gb.negative = 0, hb.negative = 0;
            for (var ib = 0; gb.isEven() && hb.isEven(); ib++)
                gb.iushrn(1), hb.iushrn(1);
            for (;;) {
                for (; gb.isEven();)
                    gb.iushrn(1);
                for (; hb.isEven();)
                    hb.iushrn(1);
                var jb = gb.cmp(hb);
                if (jb < 0) {
                    var kb = gb;
                    gb = hb, hb = kb;
                } else if (0 === jb || 0 === hb.cmpn(1))
                    break;
                gb.isub(hb);
            }
            return hb.iushln(ib);
        }, l.prototype.invm = function (fb) {
            return this.egcd(fb).a.umod(fb);
        }, l.prototype.isEven = function () {
            return 0 == (1 & this.words[0]);
        }, l.prototype.isOdd = function () {
            return 1 == (1 & this.words[0]);
        }, l.prototype.andln = function (fb) {
            return this.words[0] & fb;
        }, l.prototype.bincn = function (fb) {
            i('number' == typeof fb);
            var gb = fb % 26, hb = (fb - gb) / 26, ib = 1 << gb;
            if (this.length <= hb)
                return this._expand(hb + 1), this.words[hb] |= ib, this;
            for (var jb = ib, kb = hb; 0 !== jb && kb < this.length; kb++) {
                var lb = 0 | this.words[kb];
                jb = (lb += jb) >>> 26, lb &= 67108863, this.words[kb] = lb;
            }
            return 0 !== jb && (this.words[kb] = jb, this.length++), this;
        }, l.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
        }, l.prototype.cmpn = function (fb) {
            var gb, hb = fb < 0;
            if (0 !== this.negative && !hb)
                return -1;
            if (0 === this.negative && hb)
                return 1;
            if (this._strip(), this.length > 1)
                gb = 1;
            else {
                hb && (fb = -fb), i(fb <= 67108863, 'Number is too big');
                var ib = 0 | this.words[0];
                gb = ib === fb ? 0 : ib < fb ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -gb : gb;
        }, l.prototype.cmp = function (fb) {
            if (0 !== this.negative && 0 === fb.negative)
                return -1;
            if (0 === this.negative && 0 !== fb.negative)
                return 1;
            var gb = this.ucmp(fb);
            return 0 !== this.negative ? 0 | -gb : gb;
        }, l.prototype.ucmp = function (fb) {
            if (this.length > fb.length)
                return 1;
            if (this.length < fb.length)
                return -1;
            for (var gb = 0, hb = this.length - 1; hb >= 0; hb--) {
                var ib = 0 | this.words[hb], jb = 0 | fb.words[hb];
                if (ib !== jb) {
                    ib < jb ? gb = -1 : ib > jb && (gb = 1);
                    break;
                }
            }
            return gb;
        }, l.prototype.gtn = function (fb) {
            return 1 === this.cmpn(fb);
        }, l.prototype.gt = function (fb) {
            return 1 === this.cmp(fb);
        }, l.prototype.gten = function (fb) {
            return this.cmpn(fb) >= 0;
        }, l.prototype.gte = function (fb) {
            return this.cmp(fb) >= 0;
        }, l.prototype.ltn = function (fb) {
            return -1 === this.cmpn(fb);
        }, l.prototype.lt = function (fb) {
            return -1 === this.cmp(fb);
        }, l.prototype.lten = function (fb) {
            return this.cmpn(fb) <= 0;
        }, l.prototype.lte = function (fb) {
            return this.cmp(fb) <= 0;
        }, l.prototype.eqn = function (fb) {
            return 0 === this.cmpn(fb);
        }, l.prototype.eq = function (fb) {
            return 0 === this.cmp(fb);
        }, l.red = function (fb) {
            return new _lb(fb);
        }, l.prototype.toRed = function (fb) {
            return i(!this.red, 'Already a number in reduction context'), i(0 === this.negative, 'red works only with positives'), fb.convertTo(this)._forceRed(fb);
        }, l.prototype.fromRed = function () {
            return i(this.red, 'fromRed works only with numbers in reduction context'), this.red.convertFrom(this);
        }, l.prototype._forceRed = function (fb) {
            return this.red = fb, this;
        }, l.prototype.forceRed = function (fb) {
            return i(!this.red, 'Already a number in reduction context'), this._forceRed(fb);
        }, l.prototype.redAdd = function (fb) {
            return i(this.red, 'redAdd works only with red numbers'), this.red.add(this, fb);
        }, l.prototype.redIAdd = function (fb) {
            return i(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, fb);
        }, l.prototype.redSub = function (fb) {
            return i(this.red, 'redSub works only with red numbers'), this.red.sub(this, fb);
        }, l.prototype.redISub = function (fb) {
            return i(this.red, 'redISub works only with red numbers'), this.red.isub(this, fb);
        }, l.prototype.redShl = function (fb) {
            return i(this.red, 'redShl works only with red numbers'), this.red.shl(this, fb);
        }, l.prototype.redMul = function (fb) {
            return i(this.red, 'redMul works only with red numbers'), this.red._verify2(this, fb), this.red.mul(this, fb);
        }, l.prototype.redIMul = function (fb) {
            return i(this.red, 'redMul works only with red numbers'), this.red._verify2(this, fb), this.red.imul(this, fb);
        }, l.prototype.redSqr = function () {
            return i(this.red, 'redSqr works only with red numbers'), this.red._verify1(this), this.red.sqr(this);
        }, l.prototype.redISqr = function () {
            return i(this.red, 'redISqr works only with red numbers'), this.red._verify1(this), this.red.isqr(this);
        }, l.prototype.redSqrt = function () {
            return i(this.red, 'redSqrt works only with red numbers'), this.red._verify1(this), this.red.sqrt(this);
        }, l.prototype.redInvm = function () {
            return i(this.red, 'redInvm works only with red numbers'), this.red._verify1(this), this.red.invm(this);
        }, l.prototype.redNeg = function () {
            return i(this.red, 'redNeg works only with red numbers'), this.red._verify1(this), this.red.neg(this);
        }, l.prototype.redPow = function (fb) {
            return i(this.red && !fb.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, fb);
        };
        var fb = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };
        function gb(hb, ib) {
            this.name = hb, this.p = new l(ib, 16), this.n = this.p.bitLength(), this.k = new l(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
        }
        function hb() {
            gb.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
        }
        function ib() {
            gb.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
        }
        function jb() {
            gb.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
        }
        function kb() {
            gb.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
        }
        function _lb(mb) {
            if ('string' == typeof mb) {
                var nb = l._prime(mb);
                this.m = nb.p, this.prime = nb;
            } else
                i(mb.gtn(1), 'modulus must be greater than 1'), this.m = mb, this.prime = null;
        }
        function nb(ob) {
            _lb.call(this, ob), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new l(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
        }
        gb.prototype._tmp = function () {
            var ob = new l(null);
            return ob.words = new Array(Math.ceil(this.n / 13)), ob;
        }, gb.prototype.ireduce = function (ob) {
            var pb, qb = ob;
            do {
                this.split(qb, this.tmp), pb = (qb = (qb = this.imulK(qb)).iadd(this.tmp)).bitLength();
            } while (pb > this.n);
            var rb = pb < this.n ? -1 : qb.ucmp(this.p);
            return 0 === rb ? (qb.words[0] = 0, qb.length = 1) : rb > 0 ? qb.isub(this.p) : void 0 !== qb.strip ? qb.strip() : qb._strip(), qb;
        }, gb.prototype.split = function (ob, pb) {
            ob.iushrn(this.n, 0, pb);
        }, gb.prototype.imulK = function (ob) {
            return ob.imul(this.k);
        }, j(hb, gb), hb.prototype.split = function (ob, pb) {
            for (var qb = 4194303, rb = Math.min(ob.length, 9), sb = 0; sb < rb; sb++)
                pb.words[sb] = ob.words[sb];
            if (pb.length = rb, ob.length <= 9)
                return ob.words[0] = 0, void (ob.length = 1);
            var tb = ob.words[9];
            for (pb.words[pb.length++] = tb & qb, sb = 10; sb < ob.length; sb++) {
                var ub = 0 | ob.words[sb];
                ob.words[sb - 10] = (ub & qb) << 4 | tb >>> 22, tb = ub;
            }
            tb >>>= 22, ob.words[sb - 10] = tb, 0 === tb && ob.length > 10 ? ob.length -= 10 : ob.length -= 9;
        }, hb.prototype.imulK = function (ob) {
            ob.words[ob.length] = 0, ob.words[ob.length + 1] = 0, ob.length += 2;
            for (var pb = 0, qb = 0; qb < ob.length; qb++) {
                var rb = 0 | ob.words[qb];
                pb += 977 * rb, ob.words[qb] = 67108863 & pb, pb = 64 * rb + (pb / 67108864 | 0);
            }
            return 0 === ob.words[ob.length - 1] && (ob.length--, 0 === ob.words[ob.length - 1] && ob.length--), ob;
        }, j(ib, gb), j(jb, gb), j(kb, gb), kb.prototype.imulK = function (ob) {
            for (var pb = 0, qb = 0; qb < ob.length; qb++) {
                var rb = 19 * (0 | ob.words[qb]) + pb, sb = 67108863 & rb;
                rb >>>= 26, ob.words[qb] = sb, pb = rb;
            }
            return 0 !== pb && (ob.words[ob.length++] = pb), ob;
        }, l._prime = function (ob) {
            if (fb[ob])
                return fb[ob];
            var pb;
            if ('k256' === ob)
                pb = new hb();
            else if ('p224' === ob)
                pb = new ib();
            else if ('p192' === ob)
                pb = new jb();
            else {
                if ('p25519' !== ob)
                    throw new Error('Unknown prime ' + ob);
                pb = new kb();
            }
            return fb[ob] = pb, pb;
        }, _lb.prototype._verify1 = function (ob) {
            i(0 === ob.negative, 'red works only with positives'), i(ob.red, 'red works only with red numbers');
        }, _lb.prototype._verify2 = function (ob, pb) {
            i(0 == (ob.negative | pb.negative), 'red works only with positives'), i(ob.red && ob.red === pb.red, 'red works only with red numbers');
        }, _lb.prototype.imod = function (ob) {
            return this.prime ? this.prime.ireduce(ob)._forceRed(this) : (A(ob, ob.umod(this.m)._forceRed(this)), ob);
        }, _lb.prototype.neg = function (ob) {
            return ob.isZero() ? ob.clone() : this.m.sub(ob)._forceRed(this);
        }, _lb.prototype.add = function (ob, pb) {
            this._verify2(ob, pb);
            var qb = ob.add(pb);
            return qb.cmp(this.m) >= 0 && qb.isub(this.m), qb._forceRed(this);
        }, _lb.prototype.iadd = function (ob, pb) {
            this._verify2(ob, pb);
            var qb = ob.iadd(pb);
            return qb.cmp(this.m) >= 0 && qb.isub(this.m), qb;
        }, _lb.prototype.sub = function (ob, pb) {
            this._verify2(ob, pb);
            var qb = ob.sub(pb);
            return qb.cmpn(0) < 0 && qb.iadd(this.m), qb._forceRed(this);
        }, _lb.prototype.isub = function (ob, pb) {
            this._verify2(ob, pb);
            var qb = ob.isub(pb);
            return qb.cmpn(0) < 0 && qb.iadd(this.m), qb;
        }, _lb.prototype.shl = function (ob, pb) {
            return this._verify1(ob), this.imod(ob.ushln(pb));
        }, _lb.prototype.imul = function (ob, pb) {
            return this._verify2(ob, pb), this.imod(ob.imul(pb));
        }, _lb.prototype.mul = function (ob, pb) {
            return this._verify2(ob, pb), this.imod(ob.mul(pb));
        }, _lb.prototype.isqr = function (ob) {
            return this.imul(ob, ob.clone());
        }, _lb.prototype.sqr = function (ob) {
            return this.mul(ob, ob);
        }, _lb.prototype.sqrt = function (ob) {
            if (ob.isZero())
                return ob.clone();
            var pb = this.m.andln(3);
            if (i(pb % 2 == 1), 3 === pb) {
                var qb = this.m.add(new l(1)).iushrn(2);
                return this.pow(ob, qb);
            }
            for (var rb = this.m.subn(1), sb = 0; !rb.isZero() && 0 === rb.andln(1);)
                sb++, rb.iushrn(1);
            i(!rb.isZero());
            var tb = new l(1).toRed(this), ub = tb.redNeg(), vb = this.m.subn(1).iushrn(1), wb = this.m.bitLength();
            for (wb = new l(2 * wb * wb).toRed(this); 0 !== this.pow(wb, vb).cmp(ub);)
                wb.redIAdd(ub);
            for (var xb = this.pow(wb, rb), yb = this.pow(ob, rb.addn(1).iushrn(1)), zb = this.pow(ob, rb), Ab = sb; 0 !== zb.cmp(tb);) {
                for (var Bb = zb, Cb = 0; 0 !== Bb.cmp(tb); Cb++)
                    Bb = Bb.redSqr();
                i(Cb < Ab);
                var Db = this.pow(xb, new l(1).iushln(Ab - Cb - 1));
                yb = yb.redMul(Db), xb = Db.redSqr(), zb = zb.redMul(xb), Ab = Cb;
            }
            return yb;
        }, _lb.prototype.invm = function (ob) {
            var pb = ob._invmp(this.m);
            return 0 !== pb.negative ? (pb.negative = 0, this.imod(pb).redNeg()) : this.imod(pb);
        }, _lb.prototype.pow = function (ob, pb) {
            if (pb.isZero())
                return new l(1).toRed(this);
            if (0 === pb.cmpn(1))
                return ob.clone();
            var qb = new Array(16);
            qb[0] = new l(1).toRed(this), qb[1] = ob;
            for (var rb = 2; rb < qb.length; rb++)
                qb[rb] = this.mul(qb[rb - 1], ob);
            var sb = qb[0], tb = 0, ub = 0, vb = pb.bitLength() % 26;
            for (0 === vb && (vb = 26), rb = pb.length - 1; rb >= 0; rb--) {
                for (var wb = pb.words[rb], xb = vb - 1; xb >= 0; xb--) {
                    var yb = wb >> xb & 1;
                    sb !== qb[0] && (sb = this.sqr(sb)), 0 !== yb || 0 !== tb ? (tb <<= 1, tb |= yb, (4 === ++ub || 0 === rb && 0 === xb) && (sb = this.mul(sb, qb[tb]), ub = 0, tb = 0)) : ub = 0;
                }
                vb = 26;
            }
            return sb;
        }, _lb.prototype.convertTo = function (ob) {
            var pb = ob.umod(this.m);
            return pb === ob ? pb.clone() : pb;
        }, _lb.prototype.convertFrom = function (ob) {
            var pb = ob.clone();
            return pb.red = null, pb;
        }, l.mont = function (ob) {
            return new nb(ob);
        }, j(nb, _lb), nb.prototype.convertTo = function (ob) {
            return this.imod(ob.ushln(this.shift));
        }, nb.prototype.convertFrom = function (ob) {
            var pb = this.imod(ob.mul(this.rinv));
            return pb.red = null, pb;
        }, nb.prototype.imul = function (ob, pb) {
            if (ob.isZero() || pb.isZero())
                return ob.words[0] = 0, ob.length = 1, ob;
            var qb = ob.imul(pb), rb = qb.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), sb = qb.isub(rb).iushrn(this.shift), tb = sb;
            return sb.cmp(this.m) >= 0 ? tb = sb.isub(this.m) : sb.cmpn(0) < 0 && (tb = sb.iadd(this.m)), tb._forceRed(this);
        }, nb.prototype.mul = function (ob, pb) {
            if (ob.isZero() || pb.isZero())
                return new l(0)._forceRed(this);
            var qb = ob.mul(pb), rb = qb.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), sb = qb.isub(rb).iushrn(this.shift), tb = sb;
            return sb.cmp(this.m) >= 0 ? tb = sb.isub(this.m) : sb.cmpn(0) < 0 && (tb = sb.iadd(this.m)), tb._forceRed(this);
        }, nb.prototype.invm = function (ob) {
            return this.imod(ob._invmp(this.m).mul(this.r2))._forceRed(this);
        };
    }(e, this);
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....').Buffer;
    function m(n) {
        var o;
        'object' != typeof n || l.isBuffer(n) || (o = n.passphrase, n = n.key), 'string' == typeof n && (n = l.from(n));
        var p, q, r = i(n, o), s = r.tag, t = r.data;
        switch (s) {
        case 'CERTIFICATE':
            m = g.certificate.decode(t, 'der').tbsCertificate.subjectPublicKeyInfo;
        case 'PUBLIC KEY':
            switch (m || (m = g.PublicKey.decode(t, 'der')), p = m.algorithm.algorithm.join('.')) {
            case '1.2.840.113549.1.1.1':
                return g.RSAPublicKey.decode(m.subjectPublicKey.data, 'der');
            case '1.2.840.10045.2.1':
                return m.subjectPrivateKey = m.subjectPublicKey, {
                    type: 'ec',
                    data: m
                };
            case '1.2.840.10040.4.1':
                return m.algorithm.params.pub_key = g.DSAparam.decode(m.subjectPublicKey.data, 'der'), {
                    type: 'dsa',
                    data: m.algorithm.params
                };
            default:
                throw new Error('unknown key id ' + p);
            }
        case 'ENCRYPTED PRIVATE KEY':
            t = function (u, v) {
                var w = u.algorithm.decrypt.kde.kdeparams.salt, x = parseInt(u.algorithm.decrypt.kde.kdeparams.iters.toString(), 10), y = h[u.algorithm.decrypt.cipher.algo.join('.')], z = u.algorithm.decrypt.cipher.iv, A = u.subjectPrivateKey, B = parseInt(y.split('-')[1], 10) / 8, C = k.pbkdf2Sync(v, w, x, B, 'sha1'), D = j.createDecipheriv(y, C, z), E = [];
                return E.push(D.update(A)), E.push(D.final()), l.concat(E);
            }(t = g.EncryptedPrivateKey.decode(t, 'der'), o);
        case 'PRIVATE KEY':
            switch (p = (m = g.PrivateKey.decode(t, 'der')).algorithm.algorithm.join('.')) {
            case '1.2.840.113549.1.1.1':
                return g.RSAPrivateKey.decode(m.subjectPrivateKey, 'der');
            case '1.2.840.10045.2.1':
                return {
                    curve: m.algorithm.curve,
                    privateKey: g.ECPrivateKey.decode(m.subjectPrivateKey, 'der').privateKey
                };
            case '1.2.840.10040.4.1':
                return m.algorithm.params.priv_key = g.DSAparam.decode(m.subjectPrivateKey, 'der'), {
                    type: 'dsa',
                    params: m.algorithm.params
                };
            default:
                throw new Error('unknown key id ' + p);
            }
        case 'RSA PUBLIC KEY':
            return g.RSAPublicKey.decode(t, 'der');
        case 'RSA PRIVATE KEY':
            return g.RSAPrivateKey.decode(t, 'der');
        case 'DSA PRIVATE KEY':
            return {
                type: 'dsa',
                params: g.DSAPrivateKey.decode(t, 'der')
            };
        case 'EC PRIVATE KEY':
            return {
                curve: (t = g.ECPrivateKey.decode(t, 'der')).parameters.value,
                privateKey: t.privateKey
            };
        default:
            throw new Error('unknown key type ' + s);
        }
    }
    e.exports = m, m.signature = g.signature;
}), d.register('.....', function (e, f) {
    var g, h, i, j, k, l, m, n, o, p;
    a(e.exports, 'certificate', function () {
        return g;
    }, function (q) {
        return g = q;
    }), a(e.exports, 'RSAPrivateKey', function () {
        return h;
    }, function (q) {
        return h = q;
    }), a(e.exports, 'RSAPublicKey', function () {
        return i;
    }, function (q) {
        return i = q;
    }), a(e.exports, 'PublicKey', function () {
        return j;
    }, function (q) {
        return j = q;
    }), a(e.exports, 'PrivateKey', function () {
        return k;
    }, function (q) {
        return k = q;
    }), a(e.exports, 'EncryptedPrivateKey', function () {
        return l;
    }, function (q) {
        return l = q;
    }), a(e.exports, 'DSAPrivateKey', function () {
        return m;
    }, function (q) {
        return m = q;
    }), a(e.exports, 'DSAparam', function () {
        return n;
    }, function (q) {
        return n = q;
    }), a(e.exports, 'ECPrivateKey', function () {
        return o;
    }, function (q) {
        return o = q;
    }), a(e.exports, 'signature', function () {
        return p;
    }, function (q) {
        return p = q;
    });
    var q = d('.....');
    g = d('.....');
    var r = q.define('RSAPrivateKey', function () {
        this.seq().obj(this.key('version').int(), this.key('modulus').int(), this.key('publicExponent').int(), this.key('privateExponent').int(), this.key('prime1').int(), this.key('prime2').int(), this.key('exponent1').int(), this.key('exponent2').int(), this.key('coefficient').int());
    });
    h = r;
    var s = q.define('RSAPublicKey', function () {
        this.seq().obj(this.key('modulus').int(), this.key('publicExponent').int());
    });
    i = s;
    var t = q.define('SubjectPublicKeyInfo', function () {
        this.seq().obj(this.key('algorithm').use(_u), this.key('subjectPublicKey').bitstr());
    });
    j = t;
    var _u = q.define('AlgorithmIdentifier', function () {
            this.seq().obj(this.key('algorithm').objid(), this.key('none').null_().optional(), this.key('curve').objid().optional(), this.key('params').seq().obj(this.key('p').int(), this.key('q').int(), this.key('g').int()).optional());
        }), v = q.define('PrivateKeyInfo', function () {
            this.seq().obj(this.key('version').int(), this.key('algorithm').use(_u), this.key('subjectPrivateKey').octstr());
        });
    k = v;
    var w = q.define('EncryptedPrivateKeyInfo', function () {
        this.seq().obj(this.key('algorithm').seq().obj(this.key('id').objid(), this.key('decrypt').seq().obj(this.key('kde').seq().obj(this.key('id').objid(), this.key('kdeparams').seq().obj(this.key('salt').octstr(), this.key('iters').int())), this.key('cipher').seq().obj(this.key('algo').objid(), this.key('iv').octstr()))), this.key('subjectPrivateKey').octstr());
    });
    l = w;
    var x = q.define('DSAPrivateKey', function () {
        this.seq().obj(this.key('version').int(), this.key('p').int(), this.key('q').int(), this.key('g').int(), this.key('pub_key').int(), this.key('priv_key').int());
    });
    m = x, n = q.define('DSAparam', function () {
        this.int();
    });
    var y = q.define('ECPrivateKey', function () {
        this.seq().obj(this.key('version').int(), this.key('privateKey').octstr(), this.key('parameters').optional().explicit(0).use(_z), this.key('publicKey').optional().explicit(1).bitstr());
    });
    o = y;
    var _z = q.define('ECParameters', function () {
        this.choice({ namedCurve: this.objid() });
    });
    p = q.define('signature', function () {
        this.seq().obj(this.key('r').int(), this.key('s').int());
    });
}), d.register('.....', function (e, f) {
    const g = e.exports;
    g.bignum = d('.....'), g.define = d('.....').define, g.base = d('.....'), g.constants = d('.....'), g.decoders = d('.....'), g.encoders = d('.....');
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....');
    function j(k, l) {
        this.name = k, this.body = l, this.decoders = {}, this.encoders = {};
    }
    e.exports.define = function (k, l) {
        return new j(k, l);
    }, j.prototype._createNamed = function (k) {
        const l = this.name;
        function m(n) {
            this._initNamed(n, l);
        }
        return i(m, k), m.prototype._initNamed = function (n, o) {
            k.call(this, n, o);
        }, new m(this);
    }, j.prototype._getDecoder = function (k) {
        return k = k || 'der', this.decoders.hasOwnProperty(k) || (this.decoders[k] = this._createNamed(h[k])), this.decoders[k];
    }, j.prototype.decode = function (k, l, m) {
        return this._getDecoder(l).decode(k, m);
    }, j.prototype._getEncoder = function (k) {
        return k = k || 'der', this.encoders.hasOwnProperty(k) || (this.encoders[k] = this._createNamed(g[k])), this.encoders[k];
    }, j.prototype.encode = function (k, l, m) {
        return this._getEncoder(l).encode(k, m);
    };
}), d.register('.....', function (e, f) {
    const g = e.exports;
    g.der = d('.....'), g.pem = d('.....');
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....').Buffer, i = d('.....'), j = d('.....');
    function k(l) {
        this.enc = 'der', this.name = l.name, this.entity = l, this.tree = new _l(), this.tree._init(l.body);
    }
    function _l(m) {
        i.call(this, 'der', m);
    }
    function m(n) {
        return n < 10 ? '0' + n : n;
    }
    e.exports = k, k.prototype.encode = function (n, o) {
        return this.tree._encode(n, o).join();
    }, g(_l, i), _l.prototype._encodeComposite = function (n, o, p, q) {
        const r = function (s, t, u, v) {
            let w;
            'seqof' === s ? s = 'seq' : 'setof' === s && (s = 'set');
            if (j.tagByName.hasOwnProperty(s))
                w = j.tagByName[s];
            else {
                if ('number' != typeof s || (0 | s) !== s)
                    return v.error('Unknown tag: ' + s);
                w = s;
            }
            if (w >= 31)
                return v.error('Multi-octet tag encoding unsupported');
            t || (w |= 32);
            return w |= j.tagClassByName[u || 'universal'] << 6, w;
        }(n, o, p, this.reporter);
        if (q.length < 128) {
            const s = h.alloc(2);
            return s[0] = r, s[1] = q.length, this._createEncoderBuffer([
                s,
                q
            ]);
        }
        let t = 1;
        for (let u = q.length; u >= 256; u >>= 8)
            t++;
        const v = h.alloc(2 + t);
        v[0] = r, v[1] = 128 | t;
        for (let w = 1 + t, x = q.length; x > 0; w--, x >>= 8)
            v[w] = 255 & x;
        return this._createEncoderBuffer([
            v,
            q
        ]);
    }, _l.prototype._encodeStr = function (n, o) {
        if ('bitstr' === o)
            return this._createEncoderBuffer([
                0 | n.unused,
                n.data
            ]);
        if ('bmpstr' === o) {
            const p = h.alloc(2 * n.length);
            for (let q = 0; q < n.length; q++)
                p.writeUInt16BE(n.charCodeAt(q), 2 * q);
            return this._createEncoderBuffer(p);
        }
        return 'numstr' === p ? this._isNumstr(n) ? this._createEncoderBuffer(n) : this.reporter.error('Encoding of string type: numstr supports only digits and space') : 'printstr' === p ? this._isPrintstr(n) ? this._createEncoderBuffer(n) : this.reporter.error('Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark') : /str$/.test(p) || 'objDesc' === p ? this._createEncoderBuffer(n) : this.reporter.error('Encoding of string type: ' + p + ' unsupported');
    }, _l.prototype._encodeObjid = function (n, o, p) {
        if ('string' == typeof n) {
            if (!o)
                return this.reporter.error('string objid given, but no values map found');
            if (!o.hasOwnProperty(n))
                return this.reporter.error('objid not found in values map');
            n = o[n].split(/[\s.]+/g);
            for (let q = 0; q < n.length; q++)
                n[q] |= 0;
        } else if (Array.isArray(n)) {
            n = n.slice();
            for (let q = 0; q < n.length; q++)
                n[q] |= 0;
        }
        if (!Array.isArray(n))
            return this.reporter.error('objid() should be either array or string, got: ' + JSON.stringify(n));
        if (!p) {
            if (n[1] >= 40)
                return this.reporter.error('Second objid identifier OOB');
            n.splice(0, 2, 40 * n[0] + n[1]);
        }
        let q = 0;
        for (let r = 0; r < n.length; r++) {
            let s = n[r];
            for (q++; s >= 128; s >>= 7)
                q++;
        }
        const s = h.alloc(q);
        let t = s.length - 1;
        for (let u = n.length - 1; u >= 0; u--) {
            let v = n[u];
            for (s[t--] = 127 & v; (v >>= 7) > 0;)
                s[t--] = 128 | 127 & v;
        }
        return this._createEncoderBuffer(s);
    }, _l.prototype._encodeTime = function (n, o) {
        let p;
        const q = new Date(n);
        return 'gentime' === o ? p = [
            m(q.getUTCFullYear()),
            m(q.getUTCMonth() + 1),
            m(q.getUTCDate()),
            m(q.getUTCHours()),
            m(q.getUTCMinutes()),
            m(q.getUTCSeconds()),
            'Z'
        ].join('') : 'utctime' === o ? p = [
            m(q.getUTCFullYear() % 100),
            m(q.getUTCMonth() + 1),
            m(q.getUTCDate()),
            m(q.getUTCHours()),
            m(q.getUTCMinutes()),
            m(q.getUTCSeconds()),
            'Z'
        ].join('') : this.reporter.error('Encoding ' + o + ' time is not supported yet'), this._encodeStr(p, 'octstr');
    }, _l.prototype._encodeNull = function () {
        return this._createEncoderBuffer('');
    }, _l.prototype._encodeInt = function (n, o) {
        if ('string' == typeof n) {
            if (!o)
                return this.reporter.error('String int or enum given, but no values map');
            if (!o.hasOwnProperty(n))
                return this.reporter.error('Values map doesn\'t contain: ' + JSON.stringify(n));
            n = o[n];
        }
        if ('number' != typeof n && !h.isBuffer(n)) {
            const p = n.toArray();
            !n.sign && 128 & p[0] && p.unshift(0), n = h.from(p);
        }
        if (h.isBuffer(n)) {
            let q = n.length;
            0 === n.length && q++;
            const r = h.alloc(q);
            return n.copy(r), 0 === n.length && (r[0] = 0), this._createEncoderBuffer(r);
        }
        if (n < 128)
            return this._createEncoderBuffer(n);
        if (n < 256)
            return this._createEncoderBuffer([
                0,
                n
            ]);
        let r = 1;
        for (let s = n; s >= 256; s >>= 8)
            r++;
        const t = new Array(r);
        for (let u = t.length - 1; u >= 0; u--)
            t[u] = 255 & n, n >>= 8;
        return 128 & t[0] && t.unshift(0), this._createEncoderBuffer(h.from(t));
    }, _l.prototype._encodeBool = function (n) {
        return this._createEncoderBuffer(n ? 255 : 0);
    }, _l.prototype._use = function (n, o) {
        return 'function' == typeof n && (n = n(o)), n._getEncoder('der').tree;
    }, _l.prototype._skipDefault = function (n, o, p) {
        const q = this._baseState;
        let r;
        if (null === q.default)
            return !1;
        const s = n.join();
        if (void 0 === q.defaultBuffer && (q.defaultBuffer = this._encodeValue(q.default, o, p).join()), s.length !== q.defaultBuffer.length)
            return !1;
        for (r = 0; r < s.length; r++)
            if (s[r] !== q.defaultBuffer[r])
                return !1;
        return !0;
    };
}), d.register('.....', function (e, f) {
    var g, h = d('.....'), i = d('.....'), j = i.Buffer, k = {};
    for (g in i)
        i.hasOwnProperty(g) && 'SlowBuffer' !== g && 'Buffer' !== g && (k[g] = i[g]);
    var l = k.Buffer = {};
    for (g in j)
        j.hasOwnProperty(g) && 'allocUnsafe' !== g && 'allocUnsafeSlow' !== g && (l[g] = j[g]);
    if (k.Buffer.prototype = j.prototype, l.from && l.from !== Uint8Array.from || (l.from = function (m, n, o) {
            if ('number' == typeof m)
                throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof m);
            if (m && void 0 === m.length)
                throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof m);
            return j(m, n, o);
        }), l.alloc || (l.alloc = function (m, n, o) {
            if ('number' != typeof m)
                throw new TypeError('The "size" argument must be of type number. Received type ' + typeof m);
            if (m < 0 || m >= 2147483648)
                throw new RangeError('The value "' + m + '" is invalid for option "size"');
            var p = j(m);
            return n && 0 !== n.length ? 'string' == typeof o ? p.fill(n, o) : p.fill(n) : p.fill(0), p;
        }), !k.kStringMaxLength)
        try {
            k.kStringMaxLength = h.binding('buffer').kStringMaxLength;
        } catch (e) {
        }
    k.constants || (k.constants = { MAX_LENGTH: k.kMaxLength }, k.kStringMaxLength && (k.constants.MAX_STRING_LENGTH = k.kStringMaxLength)), e.exports = k;
}), d.register('.....', function (e, f) {
    var g = d('.....').Reporter, h = d('.....').EncoderBuffer, i = d('.....').DecoderBuffer, j = d('.....');
    const k = [
            'seq',
            'seqof',
            'set',
            'setof',
            'objid',
            'bool',
            'gentime',
            'utctime',
            'null_',
            'enum',
            'int',
            'objDesc',
            'bitstr',
            'bmpstr',
            'charstr',
            'genstr',
            'graphstr',
            'ia5str',
            'iso646str',
            'numstr',
            'octstr',
            'printstr',
            't61str',
            'unistr',
            'utf8str',
            'videostr'
        ], l = [
            'key',
            'obj',
            'use',
            'optional',
            'explicit',
            'implicit',
            'def',
            'choice',
            'any',
            'contains'
        ].concat(k);
    function m(n, o, p) {
        const q = {};
        this._baseState = q, q.name = p, q.enc = n, q.parent = o || null, q.children = null, q.tag = null, q.args = null, q.reverseArgs = null, q.choice = null, q.optional = !1, q.any = !1, q.obj = !1, q.use = null, q.useDecoder = null, q.key = null, q.default = null, q.explicit = null, q.implicit = null, q.contains = null, q.parent || (q.children = [], this._wrap());
    }
    e.exports = m;
    const o = [
        'enc',
        'parent',
        'children',
        'tag',
        'args',
        'reverseArgs',
        'choice',
        'optional',
        'any',
        'obj',
        'use',
        'alteredUse',
        'key',
        'default',
        'explicit',
        'implicit',
        'contains'
    ];
    m.prototype.clone = function () {
        const p = this._baseState, q = {};
        o.forEach(function (r) {
            q[r] = p[r];
        });
        const r = new this.constructor(q.parent);
        return r._baseState = q, r;
    }, m.prototype._wrap = function () {
        const p = this._baseState;
        l.forEach(function (q) {
            this[q] = function () {
                const r = new this.constructor(this);
                return p.children.push(r), r[q].apply(r, arguments);
            };
        }, this);
    }, m.prototype._init = function (p) {
        const q = this._baseState;
        j(null === q.parent), p.call(this), q.children = q.children.filter(function (r) {
            return r._baseState.parent === this;
        }, this), j.equal(q.children.length, 1, 'Root node can have only one child');
    }, m.prototype._useArgs = function (p) {
        const q = this._baseState, r = p.filter(function (s) {
                return s instanceof this.constructor;
            }, this);
        p = p.filter(function (s) {
            return !(s instanceof this.constructor);
        }, this), 0 !== r.length && (j(null === q.children), q.children = r, r.forEach(function (s) {
            s._baseState.parent = this;
        }, this)), 0 !== p.length && (j(null === q.args), q.args = p, q.reverseArgs = p.map(function (s) {
            if ('object' != typeof s || s.constructor !== Object)
                return s;
            const t = {};
            return Object.keys(s).forEach(function (u) {
                u == (0 | u) && (u |= 0);
                const v = s[u];
                t[v] = u;
            }), t;
        }));
    }, [
        '_peekTag',
        '_decodeTag',
        '_use',
        '_decodeStr',
        '_decodeObjid',
        '_decodeTime',
        '_decodeNull',
        '_decodeInt',
        '_decodeBool',
        '_decodeList',
        '_encodeComposite',
        '_encodeStr',
        '_encodeObjid',
        '_encodeTime',
        '_encodeNull',
        '_encodeInt',
        '_encodeBool'
    ].forEach(function (p) {
        m.prototype[p] = function () {
            const q = this._baseState;
            throw new Error(p + ' not implemented for encoding: ' + q.enc);
        };
    }), k.forEach(function (p) {
        m.prototype[p] = function () {
            const q = this._baseState, r = Array.prototype.slice.call(arguments);
            return j(null === q.tag), q.tag = p, this._useArgs(r), this;
        };
    }), m.prototype.use = function (p) {
        j(p);
        const q = this._baseState;
        return j(null === q.use), q.use = p, this;
    }, m.prototype.optional = function () {
        return this._baseState.optional = !0, this;
    }, m.prototype.def = function (p) {
        const q = this._baseState;
        return j(null === q.default), q.default = p, q.optional = !0, this;
    }, m.prototype.explicit = function (p) {
        const q = this._baseState;
        return j(null === q.explicit && null === q.implicit), q.explicit = p, this;
    }, m.prototype.implicit = function (p) {
        const q = this._baseState;
        return j(null === q.explicit && null === q.implicit), q.implicit = p, this;
    }, m.prototype.obj = function () {
        const p = this._baseState, q = Array.prototype.slice.call(arguments);
        return p.obj = !0, 0 !== q.length && this._useArgs(q), this;
    }, m.prototype.key = function (p) {
        const q = this._baseState;
        return j(null === q.key), q.key = p, this;
    }, m.prototype.any = function () {
        return this._baseState.any = !0, this;
    }, m.prototype.choice = function (p) {
        const q = this._baseState;
        return j(null === q.choice), q.choice = p, this._useArgs(Object.keys(p).map(function (r) {
            return p[r];
        })), this;
    }, m.prototype.contains = function (p) {
        const q = this._baseState;
        return j(null === q.use), q.contains = p, this;
    }, m.prototype._decode = function (p, q) {
        const r = this._baseState;
        if (null === r.parent)
            return p.wrapResult(r.children[0]._decode(p, q));
        let s, t = r.default, u = !0, v = null;
        if (null !== r.key && (v = p.enterKey(r.key)), r.optional) {
            let w = null;
            if (null !== r.explicit ? w = r.explicit : null !== r.implicit ? w = r.implicit : null !== r.tag && (w = r.tag), null !== w || r.any) {
                if (u = this._peekTag(p, w, r.any), p.isError(u))
                    return u;
            } else {
                const x = p.save();
                try {
                    null === r.choice ? this._decodeGeneric(r.tag, p, q) : this._decodeChoice(p, q), u = !0;
                } catch (p) {
                    u = !1;
                }
                p.restore(w);
            }
        }
        if (r.obj && u && (s = p.enterObject()), u) {
            if (null !== r.explicit) {
                const x = this._decodeTag(p, r.explicit);
                if (p.isError(x))
                    return x;
                p = x;
            }
            const y = p.offset;
            if (null === r.use && null === r.choice) {
                let z;
                r.any && (z = p.save());
                const A = this._decodeTag(p, null !== r.implicit ? r.implicit : r.tag, r.any);
                if (p.isError(s))
                    return s;
                r.any ? t = p.raw(z) : p = s;
            }
            if (x && x.track && null !== r.tag && x.track(p.path(), s, p.length, 'tagged'), x && x.track && null !== r.tag && x.track(p.path(), p.offset, p.length, 'content'), r.any || (t = null === r.choice ? this._decodeGeneric(r.tag, p, x) : this._decodeChoice(p, x)), p.isError(t))
                return t;
            if (r.any || null !== r.choice || null === r.children || r.children.forEach(function (A) {
                    A._decode(p, x);
                }), r.contains && ('octstr' === r.tag || 'bitstr' === r.tag)) {
                const A = new i(t);
                t = this._getUse(r.contains, p._reporterState.obj)._decode(s, x);
            }
        }
        return r.obj && u && (t = p.leaveObject(s)), null === r.key || null === t && !0 !== u ? null !== v && p.exitKey(v) : p.leaveKey(v, r.key, t), t;
    }, m.prototype._decodeGeneric = function (p, q, r) {
        const s = this._baseState;
        return 'seq' === p || 'set' === p ? null : 'seqof' === p || 'setof' === p ? this._decodeList(q, p, s.args[0], r) : /str$/.test(p) ? this._decodeStr(q, p, r) : 'objid' === p && s.args ? this._decodeObjid(q, s.args[0], s.args[1], r) : 'objid' === p ? this._decodeObjid(q, null, null, r) : 'gentime' === p || 'utctime' === p ? this._decodeTime(q, p, r) : 'null_' === p ? this._decodeNull(q, r) : 'bool' === p ? this._decodeBool(q, r) : 'objDesc' === p ? this._decodeStr(q, p, r) : 'int' === p || 'enum' === p ? this._decodeInt(q, s.args && s.args[0], r) : null !== s.use ? this._getUse(s.use, q._reporterState.obj)._decode(q, r) : q.error('unknown tag: ' + p);
    }, m.prototype._getUse = function (p, q) {
        const r = this._baseState;
        return r.useDecoder = this._use(p, q), j(null === r.useDecoder._baseState.parent), r.useDecoder = r.useDecoder._baseState.children[0], r.implicit !== r.useDecoder._baseState.implicit && (r.useDecoder = r.useDecoder.clone(), r.useDecoder._baseState.implicit = r.implicit), r.useDecoder;
    }, m.prototype._decodeChoice = function (p, q) {
        const r = this._baseState;
        let s = null, t = !1;
        return Object.keys(r.choice).some(function (u) {
            const v = p.save(), w = r.choice[u];
            try {
                const x = w._decode(p, q);
                if (p.isError(x))
                    return !1;
                s = {
                    type: u,
                    value: x
                }, t = !0;
            } catch (q) {
                return p.restore(v), !1;
            }
            return !0;
        }, this), t ? s : p.error('Choice not matched');
    }, m.prototype._createEncoderBuffer = function (p) {
        return new h(p, this.reporter);
    }, m.prototype._encode = function (p, q, r) {
        const s = this._baseState;
        if (null !== s.default && s.default === p)
            return;
        const t = this._encodeValue(p, q, r);
        return void 0 === t || this._skipDefault(t, q, r) ? void 0 : t;
    }, m.prototype._encodeValue = function (p, q, r) {
        const s = this._baseState;
        if (null === s.parent)
            return s.children[0]._encode(p, q || new g());
        let t = null;
        if (this.reporter = q, s.optional && void 0 === p) {
            if (null === s.default)
                return;
            p = s.default;
        }
        let u = null, v = !1;
        if (s.any)
            t = this._createEncoderBuffer(p);
        else if (s.choice)
            t = this._encodeChoice(p, q);
        else if (s.contains)
            u = this._getUse(s.contains, r)._encode(p, q), v = !0;
        else if (s.children)
            u = s.children.map(function (w) {
                if ('null_' === w._baseState.tag)
                    return w._encode(null, q, p);
                if (null === w._baseState.key)
                    return q.error('Child should have a key');
                const x = q.enterKey(w._baseState.key);
                if ('object' != typeof p)
                    return q.error('Child expected, but input is not object');
                const y = w._encode(p[w._baseState.key], q, p);
                return q.leaveKey(x), y;
            }, this).filter(function (w) {
                return w;
            }), u = this._createEncoderBuffer(u);
        else if ('seqof' === s.tag || 'setof' === s.tag) {
            if (!s.args || 1 !== s.args.length)
                return q.error('Too many args for : ' + s.tag);
            if (!Array.isArray(p))
                return q.error('seqof/setof, but data is not Array');
            const w = this.clone();
            w._baseState.implicit = null, u = this._createEncoderBuffer(p.map(function (x) {
                const y = this._baseState;
                return this._getUse(y.args[0], p)._encode(x, q);
            }, w));
        } else
            null !== s.use ? t = this._getUse(s.use, r)._encode(p, q) : (u = this._encodePrimitive(s.tag, p), v = !0);
        if (!s.any && null === s.choice) {
            const x = null !== s.implicit ? s.implicit : s.tag, y = null === s.implicit ? 'universal' : 'context';
            null === x ? null === s.use && q.error('Tag could be omitted only for .use()') : null === s.use && (t = this._encodeComposite(x, v, y, u));
        }
        return null !== s.explicit && (t = this._encodeComposite(s.explicit, !1, 'context', t)), t;
    }, m.prototype._encodeChoice = function (p, q) {
        const r = this._baseState, s = r.choice[p.type];
        return s || j(!1, p.type + ' not found in ' + JSON.stringify(Object.keys(r.choice))), s._encode(p.value, q);
    }, m.prototype._encodePrimitive = function (p, q) {
        const r = this._baseState;
        if (/str$/.test(p))
            return this._encodeStr(q, p);
        if ('objid' === p && r.args)
            return this._encodeObjid(q, r.reverseArgs[0], r.args[1]);
        if ('objid' === p)
            return this._encodeObjid(q, null, null);
        if ('gentime' === p || 'utctime' === p)
            return this._encodeTime(q, p);
        if ('null_' === p)
            return this._encodeNull();
        if ('int' === p || 'enum' === p)
            return this._encodeInt(q, r.args && r.reverseArgs[0]);
        if ('bool' === p)
            return this._encodeBool(q);
        if ('objDesc' === p)
            return this._encodeStr(q, p);
        throw new Error('Unsupported tag: ' + p);
    }, m.prototype._isNumstr = function (p) {
        return /^[0-9 ]*$/.test(p);
    }, m.prototype._isPrintstr = function (p) {
        return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(p);
    };
}), d.register('.....', function (e, f) {
    var g;
    a(e.exports, 'Reporter', function () {
        return g;
    }, function (h) {
        return g = h;
    });
    var h = d('.....');
    function i(j) {
        this._reporterState = {
            obj: null,
            path: [],
            options: j || {},
            errors: []
        };
    }
    function j(k, l) {
        this.path = k, this.rethrow(l);
    }
    g = i, i.prototype.isError = function (k) {
        return k instanceof j;
    }, i.prototype.save = function () {
        const k = this._reporterState;
        return {
            obj: k.obj,
            pathLen: k.path.length
        };
    }, i.prototype.restore = function (k) {
        const l = this._reporterState;
        l.obj = k.obj, l.path = l.path.slice(0, k.pathLen);
    }, i.prototype.enterKey = function (k) {
        return this._reporterState.path.push(k);
    }, i.prototype.exitKey = function (k) {
        const l = this._reporterState;
        l.path = l.path.slice(0, k - 1);
    }, i.prototype.leaveKey = function (k, l, m) {
        const n = this._reporterState;
        this.exitKey(k), null !== n.obj && (n.obj[l] = m);
    }, i.prototype.path = function () {
        return this._reporterState.path.join('/');
    }, i.prototype.enterObject = function () {
        const k = this._reporterState, l = k.obj;
        return k.obj = {}, l;
    }, i.prototype.leaveObject = function (k) {
        const l = this._reporterState, m = l.obj;
        return l.obj = k, m;
    }, i.prototype.error = function (k) {
        let l;
        const m = this._reporterState, n = k instanceof j;
        if (l = n ? k : new j(m.path.map(function (o) {
                return '[' + JSON.stringify(o) + ']';
            }).join(''), k.message || k, k.stack), !m.options.partial)
            throw l;
        return n || m.errors.push(l), l;
    }, i.prototype.wrapResult = function (k) {
        const l = this._reporterState;
        return l.options.partial ? {
            result: this.isError(k) ? null : k,
            errors: l.errors
        } : k;
    }, h(j, Error), j.prototype.rethrow = function (k) {
        if (this.message = k + ' at: ' + (this.path || '(shallow)'), Error.captureStackTrace && Error.captureStackTrace(this, j), !this.stack)
            try {
                throw new Error(this.message);
            } catch (k) {
                this.stack = k.stack;
            }
        return this;
    };
}), d.register('.....', function (e, f) {
    var g, h;
    a(e.exports, 'DecoderBuffer', function () {
        return g;
    }, function (i) {
        return g = i;
    }), a(e.exports, 'EncoderBuffer', function () {
        return h;
    }, function (i) {
        return h = i;
    });
    var i = d('.....'), j = d('.....').Reporter, k = d('.....').Buffer;
    function l(m, n) {
        j.call(this, n), k.isBuffer(m) ? (this.base = m, this.offset = 0, this.length = m.length) : this.error('Input not Buffer');
    }
    function m(n, o) {
        if (Array.isArray(n))
            this.length = 0, this.value = n.map(function (p) {
                return m.isEncoderBuffer(p) || (p = new m(p, o)), this.length += p.length, p;
            }, this);
        else if ('number' == typeof n) {
            if (!(0 <= n && n <= 255))
                return o.error('non-byte EncoderBuffer value');
            this.value = n, this.length = 1;
        } else if ('string' == typeof n)
            this.value = n, this.length = k.byteLength(n);
        else {
            if (!k.isBuffer(n))
                return o.error('Unsupported type: ' + typeof n);
            this.value = n, this.length = n.length;
        }
    }
    i(l, j), g = l, l.isDecoderBuffer = function (n) {
        if (n instanceof l)
            return !0;
        return 'object' == typeof n && k.isBuffer(n.base) && 'DecoderBuffer' === n.constructor.name && 'number' == typeof n.offset && 'number' == typeof n.length && 'function' == typeof n.save && 'function' == typeof n.restore && 'function' == typeof n.isEmpty && 'function' == typeof n.readUInt8 && 'function' == typeof n.skip && 'function' == typeof n.raw;
    }, l.prototype.save = function () {
        return {
            offset: this.offset,
            reporter: j.prototype.save.call(this)
        };
    }, l.prototype.restore = function (n) {
        const o = new l(this.base);
        return o.offset = n.offset, o.length = this.offset, this.offset = n.offset, j.prototype.restore.call(this, n.reporter), o;
    }, l.prototype.isEmpty = function () {
        return this.offset === this.length;
    }, l.prototype.readUInt8 = function (n) {
        return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(n || 'DecoderBuffer overrun');
    }, l.prototype.skip = function (n, o) {
        if (!(this.offset + n <= this.length))
            return this.error(o || 'DecoderBuffer overrun');
        const p = new l(this.base);
        return p._reporterState = this._reporterState, p.offset = this.offset, p.length = this.offset + n, this.offset += n, p;
    }, l.prototype.raw = function (n) {
        return this.base.slice(n ? n.offset : this.offset, this.length);
    }, h = m, m.isEncoderBuffer = function (n) {
        if (n instanceof m)
            return !0;
        return 'object' == typeof n && 'EncoderBuffer' === n.constructor.name && 'number' == typeof n.length && 'function' == typeof n.join;
    }, m.prototype.join = function (n, o) {
        return n || (n = k.alloc(this.length)), o || (o = 0), 0 === this.length || (Array.isArray(this.value) ? this.value.forEach(function (p) {
            p.join(n, o), o += p.length;
        }) : ('number' == typeof this.value ? n[o] = this.value : 'string' == typeof this.value ? n.write(this.value, o) : k.isBuffer(this.value) && this.value.copy(n, o), o += this.length)), n;
    };
}), d.register('.....', function (e, f) {
    var g, h, i, j;
    function k(l) {
        const m = {};
        return Object.keys(l).forEach(function (n) {
            (0 | n) == n && (n |= 0);
            const o = l[n];
            m[o] = n;
        }), m;
    }
    a(m.exports, 'tagClass', function () {
        return g;
    }, function (m) {
        return g = m;
    }), a(m.exports, 'tagClassByName', function () {
        return h;
    }, function (m) {
        return h = m;
    }), a(m.exports, 'tag', function () {
        return i;
    }, function (m) {
        return i = m;
    }), a(m.exports, 'tagByName', function () {
        return j;
    }, function (m) {
        return j = m;
    }), h = k(g = {
        0: 'universal',
        1: 'application',
        2: 'context',
        3: 'private'
    }), j = k(i = {
        0: 'end',
        1: 'bool',
        2: 'int',
        3: 'bitstr',
        4: 'octstr',
        5: 'null_',
        6: 'objid',
        7: 'objDesc',
        8: 'external',
        9: 'real',
        10: 'enum',
        11: 'embed',
        12: 'utf8str',
        13: 'relativeOid',
        16: 'seq',
        17: 'set',
        18: 'numstr',
        19: 'printstr',
        20: 't61str',
        21: 'videostr',
        22: 'ia5str',
        23: 'utctime',
        24: 'gentime',
        25: 'graphstr',
        26: 'iso646str',
        27: 'genstr',
        28: 'unistr',
        29: 'charstr',
        30: 'bmpstr'
    });
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....');
    function i(j) {
        h.call(this, j), this.enc = 'pem';
    }
    g(i, h), e.exports = i, i.prototype.encode = function (j, k) {
        const l = h.prototype.encode.call(this, j).toString('base64'), m = ['-----BEGIN ' + k.label + '-----'];
        for (let n = 0; n < l.length; n += 64)
            m.push(l.slice(n, n + 64));
        return m.push('-----END ' + k.label + '-----'), m.join('\n');
    };
}), d.register('.....', function (e, f) {
    const g = e.exports;
    g.der = d('.....'), g.pem = d('.....');
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....').DecoderBuffer, j = d('.....'), k = d('.....');
    function l(m) {
        this.enc = 'der', this.name = m.name, this.entity = m, this.tree = new _m(), this.tree._init(m.body);
    }
    function _m(n) {
        j.call(this, 'der', n);
    }
    function n(o, p) {
        let q = o.readUInt8(p);
        if (o.isError(q))
            return q;
        const r = k.tagClass[q >> 6], s = 0 == (32 & q);
        if (31 == (31 & q)) {
            let t = q;
            for (q = 0; 128 == (128 & t);) {
                if (t = o.readUInt8(p), o.isError(t))
                    return t;
                q <<= 7, q |= 127 & t;
            }
        } else
            q &= 31;
        return {
            cls: r,
            primitive: s,
            tag: q,
            tagStr: k.tag[q]
        };
    }
    function q(r, s, t) {
        let u = r.readUInt8(t);
        if (r.isError(u))
            return u;
        if (!s && 128 === u)
            return null;
        if (0 == (128 & u))
            return u;
        const v = 127 & u;
        if (v > 4)
            return r.error('length octect is too long');
        u = 0;
        for (let w = 0; w < v; w++) {
            u <<= 8;
            const x = r.readUInt8(t);
            if (r.isError(w))
                return w;
            u |= w;
        }
        return u;
    }
    e.exports = l, l.prototype.decode = function (t, u) {
        return i.isDecoderBuffer(t) || (t = new i(t, u)), this.tree._decode(t, u);
    }, g(_m, j), _m.prototype._peekTag = function (t, u, v) {
        if (t.isEmpty())
            return !1;
        const w = t.save(), x = n(t, 'Failed to peek tag: "' + u + '"');
        return t.isError(x) ? x : (t.restore(w), x.tag === u || x.tagStr === u || x.tagStr + 'of' === u || v);
    }, _m.prototype._decodeTag = function (t, u, v) {
        const w = n(t, 'Failed to decode tag of "' + u + '"');
        if (t.isError(w))
            return w;
        let x = q(t, w.primitive, 'Failed to get length of "' + u + '"');
        if (t.isError(x))
            return x;
        if (!v && w.tag !== u && w.tagStr !== u && w.tagStr + 'of' !== u)
            return t.error('Failed to match tag: "' + u + '"');
        if (w.primitive || null !== x)
            return t.skip(x, 'Failed to match body of: "' + u + '"');
        const y = t.save(), z = this._skipUntilEnd(t, 'Failed to skip indefinite length body: "' + this.tag + '"');
        return t.isError(z) ? z : (x = t.offset - y.offset, t.restore(y), t.skip(x, 'Failed to match body of: "' + u + '"'));
    }, _m.prototype._skipUntilEnd = function (t, u) {
        for (;;) {
            const v = n(t, u);
            if (t.isError(v))
                return v;
            const w = q(t, v.primitive, u);
            if (t.isError(w))
                return w;
            let x;
            if (x = v.primitive || null !== w ? t.skip(w) : this._skipUntilEnd(t, u), t.isError(x))
                return x;
            if ('end' === v.tagStr)
                break;
        }
    }, _m.prototype._decodeList = function (t, u, v, w) {
        const x = [];
        for (; !t.isEmpty();) {
            const y = this._peekTag(t, 'end');
            if (t.isError(y))
                return y;
            const z = v.decode(t, 'der', w);
            if (t.isError(z) && y)
                break;
            x.push(z);
        }
        return x;
    }, _m.prototype._decodeStr = function (t, u) {
        if ('bitstr' === u) {
            const v = t.readUInt8();
            return t.isError(v) ? v : {
                unused: v,
                data: t.raw()
            };
        }
        if ('bmpstr' === v) {
            const w = t.raw();
            if (w.length % 2 == 1)
                return t.error('Decoding of string type: bmpstr length mismatch');
            let x = '';
            for (let y = 0; y < w.length / 2; y++)
                x += String.fromCharCode(w.readUInt16BE(2 * y));
            return x;
        }
        if ('numstr' === w) {
            const x = t.raw().toString('ascii');
            return this._isNumstr(x) ? x : t.error('Decoding of string type: numstr unsupported characters');
        }
        if ('octstr' === x)
            return t.raw();
        if ('objDesc' === x)
            return t.raw();
        if ('printstr' === x) {
            const y = t.raw().toString('ascii');
            return this._isPrintstr(y) ? y : t.error('Decoding of string type: printstr unsupported characters');
        }
        return /str$/.test(y) ? t.raw().toString() : t.error('Decoding of string type: ' + y + ' unsupported');
    }, _m.prototype._decodeObjid = function (t, u, v) {
        let w;
        const x = [];
        let y = 0, z = 0;
        for (; !t.isEmpty();)
            z = t.readUInt8(), y <<= 7, y |= 127 & z, 0 == (128 & z) && (x.push(y), y = 0);
        128 & z && x.push(y);
        const A = x[0] / 40 | 0, B = x[0] % 40;
        if (w = v ? x : [
                A,
                B
            ].concat(x.slice(1)), u) {
            let C = u[w.join(' ')];
            void 0 === C && (C = u[w.join('.')]), void 0 !== C && (w = C);
        }
        return w;
    }, _m.prototype._decodeTime = function (t, u) {
        const v = t.raw().toString();
        let w, x, y, z, A, B;
        if ('gentime' === u)
            w = 0 | v.slice(0, 4), x = 0 | v.slice(4, 6), y = 0 | v.slice(6, 8), z = 0 | v.slice(8, 10), A = 0 | v.slice(10, 12), B = 0 | v.slice(12, 14);
        else {
            if ('utctime' !== u)
                return t.error('Decoding ' + u + ' time is not supported yet');
            w = 0 | v.slice(0, 2), x = 0 | v.slice(2, 4), y = 0 | v.slice(4, 6), z = 0 | v.slice(6, 8), A = 0 | v.slice(8, 10), B = 0 | v.slice(10, 12), w = w < 70 ? 2000 + w : 1900 + w;
        }
        return Date.UTC(w, x - 1, y, z, A, B, 0);
    }, _m.prototype._decodeNull = function () {
        return null;
    }, _m.prototype._decodeBool = function (t) {
        const u = t.readUInt8();
        return t.isError(u) ? u : 0 !== u;
    }, _m.prototype._decodeInt = function (t, u) {
        const v = t.raw();
        let w = new v(v);
        return u && (w = u[w.toString(10)] || w), w;
    }, _m.prototype._use = function (t, u) {
        return 'function' == typeof t && (t = t(u)), t._getDecoder('der').tree;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....').Buffer, i = d('.....');
    function j(k) {
        i.call(this, k), this.enc = 'pem';
    }
    g(j, i), e.exports = j, j.prototype.decode = function (k, l) {
        const m = k.toString().split(/[\r\n]+/g), n = l.label.toUpperCase(), o = /^-----(BEGIN|END) ([^-]+)-----$/;
        let p = -1, q = -1;
        for (let r = 0; r < m.length; r++) {
            const s = m[r].match(o);
            if (null !== s && s[2] === n) {
                if (-1 !== p) {
                    if ('END' !== s[1])
                        break;
                    q = r;
                    break;
                }
                if ('BEGIN' !== s[1])
                    break;
                p = r;
            }
        }
        if (-1 === p || -1 === q)
            throw new Error('PEM section not found for: ' + n);
        const t = m.slice(p + 1, q).join('');
        t.replace(/[^a-z0-9+/=]+/gi, '');
        const u = h.from(t, 'base64');
        return i.prototype.decode.call(this, u, s);
    };
}), d.register('.....', function (e, f) {
    const g = e.exports;
    g.Reporter = d('.....').Reporter, g.DecoderBuffer = d('.....').DecoderBuffer, g.EncoderBuffer = d('.....').EncoderBuffer, g.Node = d('.....');
}), d.register('.....', function (e, f) {
    const g = e.exports;
    g._reverse = function (h) {
        const i = {};
        return Object.keys(h).forEach(function (j) {
            (0 | j) == j && (j |= 0);
            const k = h[j];
            i[k] = j;
        }), i;
    }, g.der = d('.....');
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = g.define('Time', function () {
            this.choice({
                utcTime: this.utctime(),
                generalTime: this.gentime()
            });
        }), i = g.define('AttributeTypeValue', function () {
            this.seq().obj(this.key('type').objid(), this.key('value').any());
        }), j = g.define('AlgorithmIdentifier', function () {
            this.seq().obj(this.key('algorithm').objid(), this.key('parameters').optional(), this.key('curve').objid().optional());
        }), k = g.define('SubjectPublicKeyInfo', function () {
            this.seq().obj(this.key('algorithm').use(j), this.key('subjectPublicKey').bitstr());
        }), l = g.define('RelativeDistinguishedName', function () {
            this.setof(i);
        }), m = g.define('RDNSequence', function () {
            this.seqof(l);
        }), n = g.define('Name', function () {
            this.choice({ rdnSequence: this.use(m) });
        }), o = g.define('Validity', function () {
            this.seq().obj(this.key('notBefore').use(h), this.key('notAfter').use(h));
        }), p = g.define('Extension', function () {
            this.seq().obj(this.key('extnID').objid(), this.key('critical').bool().def(!1), this.key('extnValue').octstr());
        }), q = g.define('TBSCertificate', function () {
            this.seq().obj(this.key('version').explicit(0).int().optional(), this.key('serialNumber').int(), this.key('signature').use(j), this.key('issuer').use(n), this.key('validity').use(o), this.key('subject').use(n), this.key('subjectPublicKeyInfo').use(k), this.key('issuerUniqueID').implicit(1).bitstr().optional(), this.key('subjectUniqueID').implicit(2).bitstr().optional(), this.key('extensions').explicit(3).seqof(p).optional());
        }), r = g.define('X509Certificate', function () {
            this.seq().obj(this.key('tbsCertificate').use(q), this.key('signatureAlgorithm').use(j), this.key('signatureValue').bitstr());
        });
    e.exports = r;
}), d.register('.....', function (e, f) {
    e.exports = JSON.parse('{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}');
}), d.register('.....', function (e, f) {
    var g = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m, h = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m, i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m, j = d('.....'), k = d('.....'), l = d('.....').Buffer;
    e.exports = function (m, n) {
        var o, p = m.toString(), q = p.match(g);
        if (q) {
            var r = 'aes' + q[1], s = l.from(q[2], 'hex'), t = l.from(q[3].replace(/[\r\n]/g, ''), 'base64'), u = j(n, s.slice(0, 8), parseInt(q[1], 10)).key, v = [], w = k.createDecipheriv(r, u, s);
            v.push(w.update(t)), v.push(w.final()), o = l.concat(v);
        } else {
            var x = p.match(i);
            o = l.from(x[2].replace(/[\r\n]/g, ''), 'base64');
        }
        return {
            tag: p.match(h)[1],
            data: o
        };
    };
}), d.register('.....', function (e, f) {
    e.exports = JSON.parse('{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}');
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer, h = d('.....'), i = d('.....').ec, j = d('.....'), k = d('.....');
    function l(m, n) {
        if (m.cmpn(0) <= 0)
            throw new Error('invalid sig');
        if (m.cmp(n) >= n)
            throw new Error('invalid sig');
    }
    e.exports = function (m, n, o, p, q) {
        var r = j(o);
        if ('ec' === r.type) {
            if ('ecdsa' !== p && 'ecdsa/rsa' !== p)
                throw new Error('wrong public key type');
            return function (s, t, u) {
                var v = k[u.data.algorithm.curve.join('.')];
                if (!v)
                    throw new Error('unknown curve ' + u.data.algorithm.curve.join('.'));
                var w = new i(v), x = u.data.subjectPrivateKey.data;
                return w.verify(t, s, x);
            }(m, n, r);
        }
        if ('dsa' === r.type) {
            if ('dsa' !== p)
                throw new Error('wrong public key type');
            return function (s, t, u) {
                var v = u.data.p, w = u.data.q, x = u.data.g, y = u.data.pub_key, z = j.signature.decode(s, 'der'), A = z.s, B = z.r;
                l(A, w), l(B, w);
                var C = h.mont(v), D = A.invm(w), E = x.toRed(C).redPow(new h(t).mul(D).mod(w)).fromRed().mul(y.toRed(C).redPow(B.mul(D).mod(w)).fromRed()).mod(v).mod(w);
                return 0 === E.cmp(B);
            }(m, n, r);
        }
        if ('rsa' !== p && 'ecdsa/rsa' !== p)
            throw new Error('wrong public key type');
        n = g.concat([
            q,
            n
        ]);
        for (var s = r.modulus.byteLength(), t = [1], u = 0; n.length + t.length + 2 < s;)
            t.push(255), u++;
        t.push(0);
        for (var v = -1; ++v < n.length;)
            t.push(n[v]);
        t = g.from(t);
        var w = h.mont(r.modulus);
        m = (m = new h(m).toRed(w)).redPow(new h(r.publicExponent)), m = g.from(m.fromRed().toArray());
        var x = u < 8 ? 1 : 0;
        for (s = Math.min(m.length, t.length), m.length !== t.length && (x = 1), v = -1; ++v < s;)
            x |= m[v] ^ t[v];
        return 0 === x;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer, h = d('.....'), i = d('.....');
    e.exports = function (j) {
        return new _k(j);
    };
    var j = {
        secp256k1: {
            name: 'secp256k1',
            byteLength: 32
        },
        secp224r1: {
            name: 'p224',
            byteLength: 28
        },
        prime256v1: {
            name: 'p256',
            byteLength: 32
        },
        prime192v1: {
            name: 'p192',
            byteLength: 24
        },
        ed25519: {
            name: 'ed25519',
            byteLength: 32
        },
        secp384r1: {
            name: 'p384',
            byteLength: 48
        },
        secp521r1: {
            name: 'p521',
            byteLength: 66
        }
    };
    function _k(l) {
        this.curveType = j[l], this.curveType || (this.curveType = { name: l }), this.curve = new h.ec(this.curveType.name), this.keys = void 0;
    }
    function l(m, n, o) {
        Array.isArray(m) || (m = m.toArray());
        var p = new g(m);
        if (o && p.length < o) {
            var q = new g(o - p.length);
            q.fill(0), p = g.concat([
                q,
                p
            ]);
        }
        return n ? p.toString(n) : p;
    }
    j.p224 = j.secp224r1, j.p256 = j.secp256r1 = j.prime256v1, j.p192 = j.secp192r1 = j.prime192v1, j.p384 = j.secp384r1, j.p521 = j.secp521r1, _k.prototype.generateKeys = function (o, p) {
        return this.keys = this.curve.genKeyPair(), this.getPublicKey(o, p);
    }, _k.prototype.computeSecret = function (o, p, q) {
        return p = p || 'utf8', g.isBuffer(o) || (o = new g(o, p)), l(this.curve.keyFromPublic(o).getPublic().mul(this.keys.getPrivate()).getX(), q, this.curveType.byteLength);
    }, _k.prototype.getPublicKey = function (o, p) {
        var q = this.keys.getPublic('compressed' === p, !0);
        return 'hybrid' === p && (q[q.length - 1] % 2 ? q[0] = 7 : q[0] = 6), l(q, o);
    }, _k.prototype.getPrivateKey = function (o) {
        return l(this.keys.getPrivate(), o);
    }, _k.prototype.setPublicKey = function (o, p) {
        return p = p || 'utf8', g.isBuffer(o) || (o = new g(o, p)), this.keys._importPublic(o), this;
    }, _k.prototype.setPrivateKey = function (o, p) {
        p = p || 'utf8', g.isBuffer(o) || (o = new g(o, p));
        var q = new q(o);
        return q = q.toString(16), this.keys = this.curve.genKeyPair(), this.keys._importPrivate(q), this;
    };
}), d.register('.....', function (e, f) {
    var g, h, i, j;
    a(e.exports, 'publicEncrypt', function () {
        return g;
    }, function (k) {
        return g = k;
    }), a(e.exports, 'privateDecrypt', function () {
        return h;
    }, function (k) {
        return h = k;
    }), a(e.exports, 'privateEncrypt', function () {
        return i;
    }, function (k) {
        return i = k;
    }), a(e.exports, 'publicDecrypt', function () {
        return j;
    }, function (k) {
        return j = k;
    }), g = d('.....'), h = d('.....'), i = function (k, l) {
        return g(k, l, !0);
    }, j = function (k, l) {
        return h(k, l, !0);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....').Buffer;
    e.exports = function (p, q, r) {
        var s;
        s = p.padding ? p.padding : r ? 1 : 4;
        var t, u = g(p);
        if (4 === s)
            t = function (v, w) {
                var x = v.modulus.byteLength(), y = w.length, z = i('sha1').update(o.alloc(0)).digest(), A = z.length, B = 2 * A;
                if (y > x - B - 2)
                    throw new Error('message too long');
                var C = o.alloc(x - y - B - 2), D = x - A - 1, E = h(A), F = k(o.concat([
                        z,
                        C,
                        o.alloc(1, 1),
                        w
                    ], D), j(E, D)), G = k(E, j(F, A));
                return new l(o.concat([
                    o.alloc(1),
                    G,
                    F
                ], x));
            }(u, q);
        else if (1 === s)
            t = function (v, w, x) {
                var y, z = w.length, A = v.modulus.byteLength();
                if (z > A - 11)
                    throw new Error('message too long');
                y = x ? o.alloc(A - z - 3, 255) : function (B) {
                    var C, D = o.allocUnsafe(B), E = 0, F = h(2 * B), G = 0;
                    for (; E < B;)
                        G === F.length && (F = h(2 * B), G = 0), (C = F[G++]) && (D[E++] = C);
                    return D;
                }(A - z - 3);
                return new l(o.concat([
                    o.from([
                        0,
                        x ? 1 : 2
                    ]),
                    y,
                    o.alloc(1),
                    w
                ], A));
            }(u, q, r);
        else {
            if (3 !== s)
                throw new Error('unknown padding');
            if ((t = new l(q)).cmp(u.modulus) >= 0)
                throw new Error('data too long for modulus');
        }
        return r ? n(t, u) : m(t, u);
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....').Buffer;
    function i(j) {
        var k = h.allocUnsafe(4);
        return k.writeUInt32BE(j, 0), k;
    }
    e.exports = function (k, l) {
        for (var m, n = h.alloc(0), o = 0; n.length < l;)
            m = i(o++), n = h.concat([
                n,
                g('sha1').update(k).update(m).digest()
            ]);
        return n.slice(0, l);
    };
}), d.register('.....', function (e, f) {
    e.exports = function (g, h) {
        for (var i = g.length, j = -1; ++j < i;)
            g[j] ^= h[j];
        return g;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....').Buffer;
    e.exports = function (i, j) {
        return h.from(i.toRed(g.mont(j.modulus)).redPow(new g(j.publicExponent)).fromRed().toArray());
    };
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....').Buffer;
    e.exports = function (o, p, q) {
        var r;
        r = o.padding ? o.padding : q ? 1 : 4;
        var s, t = g(o), u = t.modulus.byteLength();
        if (p.length > u || new j(p).cmp(t.modulus) >= 0)
            throw new Error('decryption error');
        s = q ? m(new j(p), t) : k(p, t);
        var v = n.alloc(u - s.length);
        if (s = n.concat([
                v,
                s
            ], u), 4 === r)
            return function (w, x) {
                var y = w.modulus.byteLength(), z = l('sha1').update(n.alloc(0)).digest(), A = z.length;
                if (0 !== x[0])
                    throw new Error('decryption error');
                var B = x.slice(1, A + 1), C = x.slice(A + 1), D = i(B, h(C, A)), E = i(C, h(D, y - A - 1));
                if (function (F, G) {
                        F = n.from(F), G = n.from(G);
                        var H = 0, I = F.length;
                        F.length !== G.length && (H++, I = Math.min(F.length, G.length));
                        var J = -1;
                        for (; ++J < I;)
                            H += F[J] ^ G[J];
                        return H;
                    }(z, E.slice(0, A)))
                    throw new Error('decryption error');
                var F = A;
                for (; 0 === E[F];)
                    F++;
                if (1 !== E[F++])
                    throw new Error('decryption error');
                return E.slice(F);
            }(t, s);
        if (1 === r)
            return function (w, x, y) {
                var z = x.slice(0, 2), A = 2, B = 0;
                for (; 0 !== x[A++];)
                    if (A >= x.length) {
                        B++;
                        break;
                    }
                var C = x.slice(2, A - 1);
                ('0002' !== z.toString('hex') && !y || '0001' !== z.toString('hex') && y) && B++;
                C.length < 8 && B++;
                if (B)
                    throw new Error('decryption error');
                return x.slice(A);
            }(0, s, q);
        if (3 === r)
            return s;
        throw new Error('unknown padding');
    };
}), d.register('.....', function (e, f) {
    var g, h;
    a(e.exports, 'randomFill', function () {
        return g;
    }, function (i) {
        return g = i;
    }), a(e.exports, 'randomFillSync', function () {
        return h;
    }, function (i) {
        return h = i;
    });
    var i = d('.....');
    function j() {
        throw new Error('secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11');
    }
    var k = d('.....'), l = (d('.....'), k.Buffer), m = k.kMaxLength, n = c.crypto || c.msCrypto, o = Math.pow(2, 32) - 1;
    function p(q, r) {
        if ('number' != typeof q || q != q)
            throw new TypeError('offset must be a number');
        if (q > o || q < 0)
            throw new TypeError('offset must be a uint32');
        if (q > m || q > r)
            throw new RangeError('offset out of range');
    }
    function q(r, s, t) {
        if ('number' != typeof r || r != r)
            throw new TypeError('size must be a number');
        if (r > o || r < 0)
            throw new TypeError('size must be a uint32');
        if (r + s > t || r > m)
            throw new RangeError('buffer too small');
    }
    function r(s, t, u, v) {
        var w = s.buffer, x = new Uint8Array(w, t, u);
        if (n.getRandomValues(x), !v)
            return s;
        i.nextTick(function () {
            v(null, s);
        });
    }
    n && n.getRandomValues ? (x = function (u, v, w, x) {
        if (!(l.isBuffer(u) || u instanceof c.Uint8Array))
            throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
        if ('function' == typeof v)
            x = v, v = 0, w = u.length;
        else if ('function' == typeof w)
            x = w, w = u.length - v;
        else if ('function' != typeof x)
            throw new TypeError('"cb" argument must be a function');
        return p(v, u.length), q(w, v, u.length), r(u, v, w, x);
    }, h = function (u, v, w) {
        void 0 === v && (v = 0);
        if (!(l.isBuffer(u) || u instanceof c.Uint8Array))
            throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
        p(v, u.length), void 0 === w && (w = u.length - v);
        return q(w, v, u.length), r(u, v, w);
    }) : (x = j, h = j);
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = h.encrypt, j = h.decrypt, k = d('.....'), l = k.compress, m = k.decompress, n = k.zwcHuffMan, o = d('.....'), p = o.zwcOperations, q = o.embed;
    const r = [
            '‌',
            '‍',
            '\u2061',
            '\u2062',
            '\u2063',
            '\u2064'
        ], {
            toConceal: s,
            toConcealHmac: t,
            concealToData: u,
            noCrypt: v,
            detach: w
        } = p(r), {
            shrink: x,
            expand: y
        } = n(r);
    var z = d('.....'), A = z.byteToBin, B = z.compliment;
    e.exports = class {
        static get zwc() {
            return r;
        }
        hide(C, D, E = 'This is a confidential text') {
            if (1 === E.split(' ').length)
                throw new Error('Minimum two words required');
            const F = this.integrity, G = this.encrypt, H = g.default(l, B)(C), I = G ? i({
                    password: D,
                    data: H,
                    integrity: F
                }) : H, J = g.default(A, F && G ? t : G ? s : v, x)(I);
            return q(E, J);
        }
        reveal(C, D) {
            const {
                    data: E,
                    integrity: F,
                    encrypt: G
                } = g.default(w, y, u)(C), H = G ? j({
                    password: D,
                    data: E,
                    integrity: F
                }) : E;
            return g.default(B, m)(H);
        }
        constructor(C = !0, D = !1) {
            this.encrypt = C, this.integrity = D;
        }
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _k;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....');
    function _k() {
        if (0 === arguments.length)
            throw new Error('pipe requires at least one argument');
        return (0, g.default)(arguments[0].length, (0, i.default)(h.default, arguments[0], (0, j.default)(arguments)));
    }
}), d.register('.....', function (e, f) {
    function g(h, i) {
        switch (h) {
        case 0:
            return function () {
                return i.apply(this, arguments);
            };
        case 1:
            return function (j) {
                return i.apply(this, arguments);
            };
        case 2:
            return function (j, k) {
                return i.apply(this, arguments);
            };
        case 3:
            return function (j, k, l) {
                return i.apply(this, arguments);
            };
        case 4:
            return function (j, k, l, m) {
                return i.apply(this, arguments);
            };
        case 5:
            return function (j, k, l, m, n) {
                return i.apply(this, arguments);
            };
        case 6:
            return function (j, k, l, m, n, o) {
                return i.apply(this, arguments);
            };
        case 7:
            return function (j, k, l, m, n, o, p) {
                return i.apply(this, arguments);
            };
        case 8:
            return function (j, k, l, m, n, o, p, q) {
                return i.apply(this, arguments);
            };
        case 9:
            return function (j, k, l, m, n, o, p, q, r) {
                return i.apply(this, arguments);
            };
        case 10:
            return function (j, k, l, m, n, o, p, q, r, s) {
                return i.apply(this, arguments);
            };
        default:
            throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
        }
    }
    a(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    function g(h, i) {
        return function () {
            return i.call(this, h.apply(this, arguments));
        };
    }
    a(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....'), _i = (0, g.default)(h.default);
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    function _j(k) {
        return function e(l, m, n) {
            switch (arguments.length) {
            case 0:
                return e;
            case 1:
                return (0, i.default)(l) ? e : (0, h.default)(function (o, p) {
                    return k(l, o, p);
                });
            case 2:
                return (0, i.default)(l) && (0, i.default)(m) ? e : (0, i.default)(l) ? (0, h.default)(function (o, p) {
                    return k(o, m, p);
                }) : (0, i.default)(m) ? (0, h.default)(function (o, p) {
                    return k(l, o, p);
                }) : (0, g.default)(function (o) {
                    return k(l, m, o);
                });
            default:
                return (0, i.default)(l) && (0, i.default)(m) && (0, i.default)(n) ? e : (0, i.default)(l) && (0, i.default)(m) ? (0, h.default)(function (o, p) {
                    return k(o, p, n);
                }) : (0, i.default)(l) && (0, i.default)(n) ? (0, h.default)(function (o, p) {
                    return k(o, m, p);
                }) : (0, i.default)(m) && (0, i.default)(n) ? (0, h.default)(function (o, p) {
                    return k(l, o, p);
                }) : (0, i.default)(l) ? (0, g.default)(function (o) {
                    return k(o, m, n);
                }) : (0, i.default)(m) ? (0, g.default)(function (o) {
                    return k(l, o, n);
                }) : (0, i.default)(n) ? (0, g.default)(function (o) {
                    return k(l, m, o);
                }) : k(l, m, n);
            }
        };
    }
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i) {
        return function e(j) {
            return 0 === arguments.length || (0, g.default)(j) ? e : i.apply(this, arguments);
        };
    }
}), d.register('.....', function (e, f) {
    function g(h) {
        return null != h && 'object' == typeof h && !0 === h['@@functional/placeholder'];
    }
    a(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....');
    function _i(j) {
        return function e(k, l) {
            switch (arguments.length) {
            case 0:
                return e;
            case 1:
                return (0, h.default)(k) ? e : (0, g.default)(function (m) {
                    return j(k, m);
                });
            default:
                return (0, h.default)(k) && (0, h.default)(l) ? e : (0, h.default)(k) ? (0, g.default)(function (m) {
                    return j(m, l);
                }) : (0, h.default)(l) ? (0, g.default)(function (m) {
                    return j(k, m);
                }) : j(k, l);
            }
        };
    }
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _n;
    });
    var g = d('.....'), h = d('.....'), i = d('.....');
    function j(k, l, m) {
        for (var n = m.next(); !n.done;) {
            if ((l = k['@@transducer/step'](l, n.value)) && l['@@transducer/reduced']) {
                l = l['@@transducer/value'];
                break;
            }
            n = m.next();
        }
        return k['@@transducer/result'](l);
    }
    function l(m, n, o, p) {
        return m['@@transducer/result'](o[p]((0, i.default)(m['@@transducer/step'], m), n));
    }
    var m = 'undefined' != typeof Symbol ? Symbol.iterator : '@@iterator';
    function _n(o, p, q) {
        if ('function' == typeof o && (o = (0, h.default)(o)), (0, g.default)(q))
            return function (r, s, t) {
                for (var u = 0, v = t.length; u < v;) {
                    if ((s = r['@@transducer/step'](s, t[u])) && s['@@transducer/reduced']) {
                        s = s['@@transducer/value'];
                        break;
                    }
                    u += 1;
                }
                return r['@@transducer/result'](s);
            }(o, p, q);
        if ('function' == typeof q['fantasy-land/reduce'])
            return l(o, p, q, 'fantasy-land/reduce');
        if (null != q[m])
            return j(o, p, q[m]());
        if ('function' == typeof q.next)
            return j(o, p, q);
        if ('function' == typeof q.reduce)
            return l(o, p, q, 'reduce');
        throw new TypeError('reduce: list must be array or iterable');
    }
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), _j = (0, g.default)(function (k) {
            return !!(0, h.default)(k) || !!k && ('object' == typeof k && (!(0, i.default)(k) && (1 === k.nodeType ? !!k.length : 0 === k.length || k.length > 0 && (k.hasOwnProperty(0) && k.hasOwnProperty(k.length - 1)))));
        });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return d;
    });
    var g = Array.isArray || function (h) {
        return null != h && h.length >= 0 && '[object Array]' === Object.prototype.toString.call(h);
    };
}), d.register('.....', function (e, f) {
    function g(h) {
        return '[object String]' === Object.prototype.toString.call(h);
    }
    a(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _h;
    });
    var g = function () {
        function h(i) {
            this.f = i;
        }
        return h.prototype['@@transducer/init'] = function () {
            throw new Error('init not implemented on XWrap');
        }, h.prototype['@@transducer/result'] = function (i) {
            return i;
        }, h.prototype['@@transducer/step'] = function (i, j) {
            return this.f(i, j);
        }, h;
    }();
    function _h(i) {
        return new g(i);
    }
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = (0, d('.....').default)(function (i, j) {
            return (0, g.default)(i.length, function () {
                return i.apply(j, arguments);
            });
        }), _i = h;
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), _j = (0, h.default)((0, g.default)('tail', (0, i.default)(1, 1 / 0)));
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i, j) {
        return function () {
            var k = arguments.length;
            if (0 === k)
                return j();
            var l = arguments[k - 1];
            return (0, g.default)(l) || 'function' != typeof l[i] ? j.apply(this, arguments) : l[i].apply(l, Array.prototype.slice.call(arguments, 0, k - 1));
        };
    }
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....'), _h = (0, d('.....').default)((0, g.default)('slice', function (i, j, k) {
            return Array.prototype.slice.call(k, i, j);
        }));
}), d.register('.....', function (e, f) {
    var g = d('.....');
    const {
        createCipheriv: h,
        createDecipheriv: i
    } = g;
    var j = d('.....'), k = d('.....').pbkdf2Sync, l = d('.....'), m = d('.....').default, n = d('.....'), o = d('.....'), p = o.toBuffer, q = o.concatBuff, r = o.buffSlice;
    const s = (t, u, v) => {
            const w = p(u.data), x = {};
            'encrypt' === t ? x.secret = w : 'decrypt' === t && (v = r(w, 0, 8), u.integrity ? (x.hmacData = r(w, 8, 40), x.secret = r(w, 40)) : x.secret = r(w, 8));
            const y = ((z, A) => k(z, A, 10000, 48, 'sha512'))(u.password, v);
            return x.iv = r(y, 0, 16), x.key = r(y, 16), x;
        }, t = m(s)('encrypt'), u = m(s)('decrypt');
    e.exports = {
        encrypt: v => {
            const w = j(8), {
                    iv: x,
                    key: y,
                    secret: z
                } = t(v, w), A = h('aes-256-ctr', y, x), B = q([
                    A.update(z, 'utf8'),
                    A.final()
                ]);
            if (v.integrity) {
                const C = l('sha256', y).update(z).digest();
                return q([
                    w,
                    C,
                    B
                ]);
            }
            return q([
                w,
                B
            ]);
        },
        decrypt: v => {
            const {
                    iv: w,
                    key: x,
                    secret: y,
                    hmacData: z
                } = u(v, null), A = i('aes-256-ctr', x, w), B = q([
                    A.update(y, 'utf8'),
                    A.final()
                ]);
            if (v.integrity) {
                const C = l('sha256', x).update(B).digest();
                if (!n(z, C))
                    throw new Error('Wrong password or Wrong payload (Hmac Integrity failure) ');
            }
            return B;
        }
    };
}), d.register('.....', function (e, f) {
    var g;
    a(e.exports, 'pbkdf2Sync', function () {
        return g;
    }, function (h) {
        return g = h;
    }), d('.....'), g = d('.....');
}), d.register('.....', function (e, f) {
    var g, h, i = d('.....').Buffer, j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = c.crypto && c.crypto.subtle, o = {
            sha: 'SHA-1',
            'sha-1': 'SHA-1',
            sha1: 'SHA-1',
            sha256: 'SHA-256',
            'sha-256': 'SHA-256',
            sha384: 'SHA-384',
            'sha-384': 'SHA-384',
            'sha-512': 'SHA-512',
            sha512: 'SHA-512'
        }, p = [];
    function q() {
        return h || (h = c.process && c.process.nextTick ? c.process.nextTick : c.queueMicrotask ? c.queueMicrotask : c.setImmediate ? c.setImmediate : c.setTimeout);
    }
    function r(s, t, u, v, w) {
        return n.importKey('raw', s, { name: 'PBKDF2' }, !1, ['deriveBits']).then(function (x) {
            return n.deriveBits({
                name: 'PBKDF2',
                salt: t,
                iterations: u,
                hash: { name: w }
            }, x, v << 3);
        }).then(function (x) {
            return i.from(x);
        });
    }
    e.exports = function (s, t, u, v, w, x) {
        'function' == typeof w && (x = w, w = void 0);
        var y = o[(w = w || 'sha1').toLowerCase()];
        if (y && 'function' == typeof c.Promise) {
            if (j(u, v), s = m(s, k, 'Password'), t = m(t, k, 'Salt'), 'function' != typeof x)
                throw new Error('No callback provided to pbkdf2');
            !function (z, A) {
                z.then(function (B) {
                    q()(function () {
                        A(null, B);
                    });
                }, function (B) {
                    q()(function () {
                        A(B);
                    });
                });
            }(function (z) {
                if (c.process && !c.process.browser)
                    return Promise.resolve(!1);
                if (!n || !n.importKey || !n.deriveBits)
                    return Promise.resolve(!1);
                if (void 0 !== p[z])
                    return p[z];
                var A = r(g = g || i.alloc(8), g, 10, 128, z).then(function () {
                    return !0;
                }).catch(function () {
                    return !1;
                });
                return p[z] = A, A;
            }(y).then(function (z) {
                return z ? r(s, t, u, v, y) : l(s, t, u, v, w);
            }), x);
        } else
            q()(function () {
                var z;
                try {
                    z = l(s, t, u, v, w);
                } catch (s) {
                    return x(s);
                }
                x(null, z);
            });
    };
}), d.register('.....', function (e, f) {
    var g = Math.pow(2, 30) - 1;
    e.exports = function (h, i) {
        if ('number' != typeof h)
            throw new TypeError('Iterations not a number');
        if (h < 0)
            throw new TypeError('Bad iterations');
        if ('number' != typeof i)
            throw new TypeError('Key length not a number');
        if (i < 0 || i > g || i != i)
            throw new TypeError('Bad key length');
    };
}), d.register('.....', function (e, f) {
    var g, h = d('.....');
    if (c.process && c.process.browser)
        g = 'utf-8';
    else if (c.process && c.process.version) {
        g = parseInt(h.version.split('.')[0].slice(1), 10) >= 6 ? 'utf-8' : 'binary';
    } else
        g = 'utf-8';
    e.exports = g;
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....').Buffer, k = d('.....'), l = d('.....'), m = d('.....'), n = j.alloc(128), o = {
            md5: 16,
            sha1: 20,
            sha224: 28,
            sha256: 32,
            sha384: 48,
            sha512: 64,
            rmd160: 20,
            ripemd160: 20
        };
    function p(q, r, s) {
        var t = function (u) {
                function v(w) {
                    return i(u).update(w).digest();
                }
                function w(x) {
                    return new h().update(x).digest();
                }
                return 'rmd160' === u || 'ripemd160' === u ? w : 'md5' === u ? g : v;
            }(q), u = 'sha512' === q || 'sha384' === q ? 128 : 64;
        r.length > u ? r = t(r) : r.length < u && (r = j.concat([
            r,
            n
        ], u));
        for (var v = j.allocUnsafe(u + o[q]), w = j.allocUnsafe(u + o[q]), x = 0; x < u; x++)
            v[x] = 54 ^ r[x], p[x] = 92 ^ r[x];
        var y = j.allocUnsafe(u + s + 4);
        v.copy(y, 0, 0, u), this.ipad1 = y, this.ipad2 = v, this.opad = p, this.alg = q, this.blocksize = u, this.hash = t, this.size = o[q];
    }
    p.prototype.run = function (w, x) {
        return w.copy(x, this.blocksize), this.hash(x).copy(this.opad, this.blocksize), this.hash(this.opad);
    }, e.exports = function (w, x, y, z, A) {
        t(y, z);
        var B = new p(A = A || 'sha1', w = v(w, u, 'Password'), (x = v(x, u, 'Salt')).length), C = j.allocUnsafe(z), D = j.allocUnsafe(x.length + 4);
        x.copy(D, 0, 0, x.length);
        for (var E = 0, F = o[A], G = Math.ceil(z / F), H = 1; H <= G; H++) {
            D.writeUInt32BE(H, x.length);
            for (var I = B.run(D, B.ipad1), J = I, K = 1; K < y; K++) {
                J = B.run(J, B.ipad2);
                for (var L = 0; L < F; L++)
                    I[L] ^= J[L];
            }
            I.copy(C, E), E += F;
        }
        return C;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer;
    e.exports = function (h, i, j) {
        if (g.isBuffer(h))
            return h;
        if ('string' == typeof h)
            return g.from(h, i);
        if (ArrayBuffer.isView(h))
            return g.from(h.buffer);
        throw new TypeError(j + ' must be a string, a Buffer, a typed array or a DataView');
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....'), _i = (0, g.default)(function (j) {
            return (0, h.default)(j.length, j);
        });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _k;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), _k = (0, i.default)(function (l, m) {
            return 1 === l ? (0, h.default)(m) : (0, g.default)(l, (0, j.default)(l, [], m));
        });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....');
    function _i(j, k, l) {
        return function () {
            for (var m = [], n = 0, o = j, p = 0; p < k.length || n < arguments.length;) {
                var q;
                p < k.length && (!(0, h.default)(k[p]) || n >= arguments.length) ? q = k[p] : (q = arguments[n], n += 1), m[p] = q, (0, h.default)(q) || (o -= 1), p += 1;
            }
            return o <= 0 ? l.apply(this, m) : (0, g.default)(o, _i(j, m, l));
        };
    }
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer;
    e.exports = function (h, i) {
        if (!g.isBuffer(h))
            throw new TypeError('First argument must be a buffer');
        if (!g.isBuffer(i))
            throw new TypeError('Second argument must be a buffer');
        if (h.length !== i.length)
            throw new TypeError('Input buffers must have the same length');
        var j = h.length, k = 0, l = -1;
        for (; ++l < j;)
            k |= h[l] ^ i[l];
        return 0 === k;
    };
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer, h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = d('.....'), q = m.default, r = l.default, s = n.default, t = o.default, u = h.default, v = j.default, w = i.default, x = k.default, y = p.default;
    const z = g.concat, A = g.from, B = C => Uint8Array.from(C), C = D => D.toString(2), D = s(B, q(E => ~E)), E = u((F, G, H) => H.map((I, J, K) => {
            if (J % G == 0)
                return F(I, J, K);
        }).filter((I, J) => J % G == 0)), F = (G, H, I) => {
            if (x(H) && x(I))
                return G;
            const [J] = y(1, H), [K] = y(1, I);
            return G = G.replace(new RegExp(J, 'g'), K), F(G, w(1, H), w(1, I));
        }, G = u((H, I) => {
            var J = '';
            for (let K = 0; K < H; K++)
                J += '0';
            return J.slice(String(K).length) + K;
        }), H = s(Array.from, q(C), q(G(8)), r(''));
    e.exports = {
        toBuffer: A,
        byarr: B,
        compliment: D,
        byteToBin: H,
        nTobin: C,
        zeroPad: G,
        binToByte: I => {
            var J = [];
            for (let K = 0; K < I.length; K += 8)
                J.push(s(t(K, K + 8), v(parseInt)(2))(I));
            return new Uint8Array(J);
        },
        concatBuff: z,
        buffSlice: (I, J, K = I.length) => s(B, t(J, K), A)(I),
        stepMap: E,
        recursiveReplace: F
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _k;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), _k = (0, g.default)((0, h.default)([], j.default, i.default));
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....');
    function _i(j, k, l) {
        return function () {
            if (0 === arguments.length)
                return l();
            var m = Array.prototype.slice.call(arguments, 0), n = m.pop();
            if (!(0, g.default)(n)) {
                for (var o = 0; o < j.length;) {
                    if ('function' == typeof n[j[o]])
                        return n[j[o]].apply(n, m);
                    o += 1;
                }
                if ((0, h.default)(n)) {
                    var p = k.apply(null, m);
                    return p(n);
                }
            }
            return l.apply(this, arguments);
        };
    }
}), d.register('.....', function (e, f) {
    function g(h) {
        return null != h && 'function' == typeof h['@@transducer/step'];
    }
    a(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i, j) {
        return (0, g.default)(i < j.length ? j.length - i : 0, j);
    }
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _k;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), _k = (0, g.default)((0, h.default)(['take'], i.default, function (l, m) {
            return (0, j.default)(0, l < 0 ? 1 / 0 : l, m);
        }));
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _k;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = function () {
            function k(l, m) {
                this.xf = m, this.n = l, this.i = 0;
            }
            return k.prototype['@@transducer/init'] = i.default.init, k.prototype['@@transducer/result'] = i.default.result, k.prototype['@@transducer/step'] = function (l, m) {
                this.i += 1;
                var n = 0 === this.n ? l : this.xf['@@transducer/step'](l, m);
                return this.n >= 0 && this.i >= this.n ? (0, h.default)(n) : n;
            }, k;
        }(), _k = (0, g.default)(function (l, m) {
            return new j(l, m);
        });
}), d.register('.....', function (e, f) {
    function g(h) {
        return h && h['@@transducer/reduced'] ? h : {
            '@@transducer/value': h,
            '@@transducer/reduced': !0
        };
    }
    a(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return d;
    });
    var g = {
        init: function () {
            return this.xf['@@transducer/init']();
        },
        result: function (h) {
            return this.xf['@@transducer/result'](h);
        }
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = function () {
            function j(k, l) {
                this.xf = l, this.pos = 0, this.full = !1, this.acc = new Array(k);
            }
            return j.prototype['@@transducer/init'] = h.default.init, j.prototype['@@transducer/result'] = function (k) {
                return this.acc = null, this.xf['@@transducer/result'](k);
            }, j.prototype['@@transducer/step'] = function (k, l) {
                return this.full && (k = this.xf['@@transducer/step'](k, this.acc[this.pos])), this.store(l), k;
            }, j.prototype.store = function (k) {
                this.acc[this.pos] = k, this.pos += 1, this.pos === this.acc.length && (this.pos = 0, this.full = !0);
            }, j;
        }(), _j = (0, g.default)(function (k, l) {
            return new i(k, l);
        });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = (0, g.default)(function (j) {
            return (0, h.default)(j.length, function (k, l) {
                var m = Array.prototype.slice.call(arguments, 0);
                return m[0] = l, m[1] = k, j.apply(this, m);
            });
        }), _j = i;
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), _j = (0, g.default)(function (k) {
            return null != k && (0, i.default)(k, (0, h.default)(k));
        });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _m;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = (0, g.default)(function (m) {
            return null != m && 'function' == typeof m['fantasy-land/empty'] ? m['fantasy-land/empty']() : null != m && null != m.constructor && 'function' == typeof m.constructor['fantasy-land/empty'] ? m.constructor['fantasy-land/empty']() : null != m && 'function' == typeof m.empty ? m.empty() : null != m && null != m.constructor && 'function' == typeof m.constructor.empty ? m.constructor.empty() : (0, i.default)(m) ? [] : (0, k.default)(m) ? '' : (0, j.default)(m) ? {} : (0, h.default)(m) ? function () {
                return arguments;
            }() : void 0;
        }), _m = l;
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = Object.prototype.toString, i = function () {
            return '[object Arguments]' === h.call(arguments) ? function (j) {
                return '[object Arguments]' === h.call(j);
            } : function (j) {
                return (0, g.default)('callee', j);
            };
        }(), _j = i;
}), d.register('.....', function (e, f) {
    function g(h, i) {
        return Object.prototype.hasOwnProperty.call(i, h);
    }
    a(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    function g(h) {
        return '[object Object]' === Object.prototype.toString.call(h);
    }
    a(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....'), _i = (0, g.default)(function (j, k) {
            return (0, h.default)(j, k, [], []);
        });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _q;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....');
    function n(o, p, q, r) {
        var s = (0, g.default)(o), t = (0, g.default)(p);
        function u(v, w) {
            return _q(v, w, q.slice(), r.slice());
        }
        return !(0, h.default)(function (v, w) {
            return !(0, h.default)(u, w, v);
        }, t, s);
    }
    function _q(r, s, t, u) {
        if ((0, k.default)(r, s))
            return !0;
        var v = (0, m.default)(r);
        if (v !== (0, m.default)(s))
            return !1;
        if (null == r || null == s)
            return !1;
        if ('function' == typeof r['fantasy-land/equals'] || 'function' == typeof s['fantasy-land/equals'])
            return 'function' == typeof r['fantasy-land/equals'] && r['fantasy-land/equals'](s) && 'function' == typeof s['fantasy-land/equals'] && s['fantasy-land/equals'](r);
        if ('function' == typeof r.equals || 'function' == typeof s.equals)
            return 'function' == typeof r.equals && r.equals(s) && 'function' == typeof s.equals && s.equals(r);
        switch (v) {
        case 'Arguments':
        case 'Array':
        case 'Object':
            if ('function' == typeof r.constructor && 'Promise' === (0, s.default)(r.constructor))
                return r === s;
            break;
        case 'Boolean':
        case 'Number':
        case 'String':
            if (typeof r != typeof s || !(0, k.default)(r.valueOf(), s.valueOf()))
                return !1;
            break;
        case 'Date':
            if (!(0, k.default)(r.valueOf(), s.valueOf()))
                return !1;
            break;
        case 'Error':
            return r.name === s.name && r.message === s.message;
        case 'RegExp':
            if (r.source !== s.source || r.global !== s.global || r.ignoreCase !== s.ignoreCase || r.multiline !== s.multiline || r.sticky !== s.sticky || r.unicode !== s.unicode)
                return !1;
        }
        for (var w = t.length - 1; w >= 0;) {
            if (t[w] === r)
                return u[w] === s;
            w -= 1;
        }
        switch (v) {
        case 'Map':
            return r.size === s.size && n(r.entries(), s.entries(), t.concat([r]), u.concat([s]));
        case 'Set':
            return r.size === s.size && n(r.values(), s.values(), t.concat([r]), u.concat([s]));
        case 'Arguments':
        case 'Array':
        case 'Object':
        case 'Boolean':
        case 'Number':
        case 'String':
        case 'Date':
        case 'Error':
        case 'RegExp':
        case 'Int8Array':
        case 'Uint8Array':
        case 'Uint8ClampedArray':
        case 'Int16Array':
        case 'Uint16Array':
        case 'Int32Array':
        case 'Uint32Array':
        case 'Float32Array':
        case 'Float64Array':
        case 'ArrayBuffer':
            break;
        default:
            return !1;
        }
        var x = (0, l.default)(r);
        if (x.length !== (0, l.default)(s).length)
            return !1;
        var y = t.concat([r]), z = u.concat([s]);
        for (w = x.length - 1; w >= 0;) {
            var A = x[w];
            if (!(0, t.default)(A, s) || !_q(s[A], r[A], y, z))
                return !1;
            w -= 1;
        }
        return !0;
    }
}), d.register('.....', function (e, f) {
    function g(h) {
        for (var i, j = []; !(i = h.next()).done;)
            j.push(i.value);
        return j;
    }
    a(i.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    function g(h, i, j) {
        for (var k = 0, l = j.length; g < l;) {
            if (h(i, j[g]))
                return !0;
            g += 1;
        }
        return !1;
    }
    a(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    function g(h) {
        var i = String(h).match(/^function (\w*)/);
        return null == i ? '' : i[1];
    }
    a(i.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return d;
    });
    var g = 'function' == typeof Object.is ? Object.is : function (h, i) {
        return h === i ? 0 !== h || 1 / h == 1 / i : h != h && i != i;
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _n;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = !{ toString: null }.propertyIsEnumerable('toString'), k = [
            'constructor',
            'valueOf',
            'isPrototypeOf',
            'toString',
            'propertyIsEnumerable',
            'hasOwnProperty',
            'toLocaleString'
        ], l = function () {
            return arguments.propertyIsEnumerable('length');
        }(), m = function (n, o) {
            for (var p = 0; p < n.length;) {
                if (n[p] === o)
                    return !0;
                p += 1;
            }
            return !1;
        }, _n = 'function' != typeof Object.keys || l ? (0, g.default)(function (o) {
            if (Object(o) !== o)
                return [];
            var p, q, r = [], s = l && (0, i.default)(o);
            for (p in o)
                !(0, h.default)(p, o) || s && 'length' === p || (r[r.length] = p);
            if (j)
                for (q = k.length - 1; q >= 0;)
                    p = k[q], (0, h.default)(p, o) && !m(r, p) && (r[r.length] = p), q -= 1;
            return r;
        }) : (0, g.default)(function (o) {
            return Object(o) !== o ? [] : Object.keys(o);
        });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _g;
    });
    var _g = (0, d('.....').default)(function (h) {
        return null === h ? 'Null' : void 0 === h ? 'Undefined' : Object.prototype.toString.call(h).slice(8, -1);
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _g;
    });
    var _g = (0, d('.....').default)(1, 'join');
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _l;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = (0, g.default)(function (l, m) {
            return (0, i.default)(l + 1, function () {
                var n = arguments[l];
                if (null != n && (0, h.default)(n[m]))
                    return n[m].apply(n, Array.prototype.slice.call(arguments, 0, l));
                throw new TypeError((0, j.default)(n) + ' does not have a method named "' + m + '"');
            });
        }), _l = k;
}), d.register('.....', function (e, f) {
    function g(h) {
        var i = Object.prototype.toString.call(h);
        return '[object Function]' === i || '[object AsyncFunction]' === i || '[object GeneratorFunction]' === i || '[object AsyncGeneratorFunction]' === i;
    }
    a(i.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....'), _i = (0, g.default)(function (j) {
            return (0, h.default)(j, []);
        });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _m;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....');
    function _m(n, o) {
        var p = function (q) {
                var r = o.concat([n]);
                return (0, g.default)(q, r) ? '<Circular>' : _m(q, r);
            }, q = function (r, s) {
                return (0, h.default)(function (t) {
                    return (0, i.default)(t) + ': ' + p(r[t]);
                }, s.slice().sort());
            };
        switch (Object.prototype.toString.call(n)) {
        case '[object Arguments]':
            return '(function() { return arguments; }(' + (0, h.default)(p, n).join(', ') + '))';
        case '[object Array]':
            return '[' + (0, h.default)(p, n).concat(q(n, (0, l.default)(function (r) {
                return /^\d+$/.test(r);
            }, (0, k.default)(n)))).join(', ') + ']';
        case '[object Boolean]':
            return 'object' == typeof n ? 'new Boolean(' + p(n.valueOf()) + ')' : n.toString();
        case '[object Date]':
            return 'new Date(' + (isNaN(n.valueOf()) ? p(NaN) : (0, i.default)((0, j.default)(n))) + ')';
        case '[object Null]':
            return 'null';
        case '[object Number]':
            return 'object' == typeof n ? 'new Number(' + p(n.valueOf()) + ')' : 1 / n == -1 / 0 ? '-0' : n.toString(10);
        case '[object String]':
            return 'object' == typeof n ? 'new String(' + p(n.valueOf()) + ')' : (0, i.default)(n);
        case '[object Undefined]':
            return 'undefined';
        default:
            if ('function' == typeof n.toString) {
                var r = n.toString();
                if ('[object Object]' !== r)
                    return r;
            }
            return '{' + q(n, (0, k.default)(n)).join(', ') + '}';
        }
    }
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i, j) {
        return (0, g.default)(j, i, 0) >= 0;
    }
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i, j, k) {
        var l, m;
        if ('function' == typeof i.indexOf)
            switch (typeof j) {
            case 'number':
                if (0 === j) {
                    for (l = 1 / j; k < i.length;) {
                        if (0 === (_h = i[k]) && 1 / _h === l)
                            return k;
                        k += 1;
                    }
                    return -1;
                }
                if (j != j) {
                    for (; k < i.length;) {
                        if ('number' == typeof (_h = i[k]) && _h != _h)
                            return k;
                        k += 1;
                    }
                    return -1;
                }
                return i.indexOf(j, k);
            case 'string':
            case 'boolean':
            case 'function':
            case 'undefined':
                return i.indexOf(j, k);
            case 'object':
                if (null === j)
                    return i.indexOf(j, k);
            }
        for (; k < i.length;) {
            if ((0, g.default)(i[k], j))
                return k;
            k += 1;
        }
        return -1;
    }
}), d.register('.....', function (e, f) {
    function g(h, i) {
        for (var j = 0, k = i.length, l = Array(g); j < g;)
            l[j] = h(i[j]), j += 1;
        return l;
    }
    a(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    function g(h) {
        return '"' + h.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b').replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0').replace(/"/g, '\\"') + '"';
    }
    a(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _h;
    });
    var g = function (h) {
            return (h < 10 ? '0' : '') + h;
        }, _h = 'function' == typeof Date.prototype.toISOString ? function (i) {
            return i.toISOString();
        } : function (i) {
            return i.getUTCFullYear() + '-' + g(i.getUTCMonth() + 1) + '-' + g(i.getUTCDate()) + 'T' + g(i.getUTCHours()) + ':' + g(i.getUTCMinutes()) + ':' + g(i.getUTCSeconds()) + '.' + (i.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
        };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), _j = (0, h.default)(function (k, l) {
            return (0, i.default)((0, g.default)(k), l);
        });
}), d.register('.....', function (e, f) {
    function g(h) {
        return function () {
            return !h.apply(this, arguments);
        };
    }
    a(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _n;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), _n = (0, g.default)((0, h.default)(['filter'], l.default, function (o, p) {
            return (0, j.default)(p) ? (0, k.default)(function (q, r) {
                return o(p[r]) && (q[r] = p[r]), q;
            }, {}, (0, m.default)(p)) : (0, i.default)(o, p);
        }));
}), d.register('.....', function (e, f) {
    function g(h, i) {
        for (var j = 0, k = i.length, l = []; j < g;)
            h(i[j]) && (l[l.length] = i[j]), j += 1;
        return l;
    }
    a(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = function () {
            function j(k, l) {
                this.xf = l, this.f = k;
            }
            return j.prototype['@@transducer/init'] = h.default.init, j.prototype['@@transducer/result'] = h.default.result, j.prototype['@@transducer/step'] = function (k, l) {
                return this.f(l) ? this.xf['@@transducer/step'](k, l) : k;
            }, j;
        }(), _j = (0, g.default)(function (k, l) {
            return new i(k, l);
        });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _o;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = (0, g.default)((0, h.default)([
            'fantasy-land/map',
            'map'
        ], k.default, function (o, p) {
            switch (Object.prototype.toString.call(p)) {
            case '[object Function]':
                return (0, l.default)(p.length, function () {
                    return o.call(this, p.apply(this, arguments));
                });
            case '[object Object]':
                return (0, j.default)(function (q, r) {
                    return q[r] = o(p[r]), q;
                }, {}, (0, m.default)(p));
            default:
                return (0, i.default)(o, p);
            }
        })), _o = n;
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = function () {
            function j(k, l) {
                this.xf = l, this.f = k;
            }
            return j.prototype['@@transducer/init'] = h.default.init, j.prototype['@@transducer/result'] = h.default.result, j.prototype['@@transducer/step'] = function (k, l) {
                return this.xf['@@transducer/step'](k, this.f(l));
            }, j;
        }(), _j = (0, g.default)(function (k, l) {
            return new i(k, l);
        });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....'), _i = (0, g.default)(function (j, k) {
            return (0, h.default)(j >= 0 ? k.length - j : 0, k);
        });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _k;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), _k = (0, g.default)((0, h.default)(['drop'], i.default, function (l, m) {
            return (0, j.default)(Math.max(0, l), 1 / 0, m);
        }));
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = function () {
            function j(k, l) {
                this.xf = l, this.n = k;
            }
            return j.prototype['@@transducer/init'] = h.default.init, j.prototype['@@transducer/result'] = h.default.result, j.prototype['@@transducer/step'] = function (k, l) {
                return this.n > 0 ? (this.n -= 1, k) : this.xf['@@transducer/step'](k, l);
            }, j;
        }(), _j = (0, g.default)(function (k, l) {
            return new i(k, l);
        });
}), d.register('.....', function (e, f) {
    var g = d('.....').Buffer, h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = k.default, n = i.default, o = l.default, p = j.default, q = h.default, r = d('.....').recursiveReplace, s = d('.....');
    const t = n(s.decompress)(q, {
            inputEncoding: 'Buffer',
            outputEncoding: 'String'
        }), u = m(g.from, t);
    e.exports = {
        compress: v => s.compress(v, { outputEncoding: 'Buffer' }),
        decompress: u,
        zwcHuffMan: v => {
            const w = [
                v[0] + v[1],
                v[0] + v[2],
                v[0] + v[3],
                v[1] + v[2],
                v[1] + v[3],
                v[2] + v[3]
            ];
            return {
                shrink: x => {
                    const y = ((z, A) => {
                        const B = A.reduce((C, D) => (C[D] = {}, C), {}), C = z.length;
                        for (let D = 0; D < C; D++) {
                            let E = 1;
                            for (; D < C && z[D] === z[D + 1];)
                                E++, D++;
                            if (E >= 2) {
                                let F = E;
                                for (; F >= 2;)
                                    B[z[D]][F] = (B[z[D]][F] || 0) + Math.floor(E / F) * (F - 1), F--;
                            }
                        }
                        const E = [];
                        for (const F in B)
                            for (const G in B[F])
                                E.push([
                                    F + D,
                                    B[F][D]
                                ]);
                        let H = o((I, J) => J[1] - I[1], E).filter(I => '2' === I[0][1]).slice(0, 2).map(I => I[0][0]);
                        return 2 !== H.length && (H = H.concat(p(D, H).slice(0, 2 - H.length))), H.slice().sort();
                    })(x, v.slice(0, 4));
                    return ((z, A) => v[w.indexOf(z + A)])(...y) + r(x, y.map(z => z + z), [
                        v[4],
                        v[5]
                    ]);
                },
                expand: x => {
                    const y = x[0], z = x.slice(1), A = (j = y, w[v.indexOf(j)].split(''));
                    var B;
                    return r(z, [
                        v[4],
                        v[5]
                    ], A.map(C => C + C));
                }
            };
        }
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return d;
    });
    var g = { '@@functional/placeholder': !0 };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....'), _i = (0, g.default)(function (j, k) {
            for (var l = [], m = 0, n = j.length, o = k.length, p = new (0, h.default)(), q = 0; q < o; q += 1)
                p.add(k[q]);
            for (; m < n;)
                p.add(j[m]) && (l[l.length] = j[m]), m += 1;
            return l;
        });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _n;
    });
    var g = d('.....');
    function h(i, j, k) {
        var l, m = typeof i;
        switch (h) {
        case 'string':
        case 'number':
            return 0 === i && 1 / i == -1 / 0 ? !!k._items['-0'] || (j && (k._items['-0'] = !0), !1) : null !== k._nativeSet ? j ? (l = k._nativeSet.size, k._nativeSet.add(i), k._nativeSet.size === l) : k._nativeSet.has(i) : h in k._items ? i in k._items[h] || (j && (k._items[h][i] = !0), !1) : (j && (k._items[h] = {}, k._items[h][i] = !0), !1);
        case 'boolean':
            if (h in k._items) {
                var _n = i ? 1 : 0;
                return !!k._items[h][_n] || (j && (k._items[h][_n] = !0), !1);
            }
            return j && (k._items[h] = i ? [
                !1,
                !0
            ] : [
                !0,
                !1
            ]), !1;
        case 'function':
            return null !== k._nativeSet ? j ? (l = k._nativeSet.size, k._nativeSet.add(i), k._nativeSet.size === l) : k._nativeSet.has(i) : h in k._items ? !!(0, g.default)(i, k._items[h]) || (j && k._items[h].push(i), !1) : (j && (k._items[h] = [i]), !1);
        case 'undefined':
            return !!k._items[h] || (j && (k._items[h] = !0), !1);
        case 'object':
            if (null === i)
                return !!k._items.null || (j && (k._items.null = !0), !1);
        default:
            return (h = Object.prototype.toString.call(i)) in k._items ? !!(0, g.default)(i, k._items[h]) || (j && k._items[h].push(i), !1) : (j && (k._items[h] = [i]), !1);
        }
    }
    var l = function () {
        function m() {
            this._nativeSet = 'function' == typeof Set ? new Set() : null, this._items = {};
        }
        return m.prototype.add = function (n) {
            return !h(n, !0, this);
        }, m.prototype.has = function (n) {
            return h(n, !1, this);
        }, m;
    }();
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _g;
    });
    var _g = (0, d('.....').default)(function (h, i) {
        return Array.prototype.slice.call(i, 0).sort(h);
    });
}), d.register('.....', function (e, f) {
    var g, h, i = d('.....').Buffer, j = d('.....');
    !function (k) {
        k.runningInNodeJS = function () {
            return 'object' == typeof j && 'object' == typeof j.versions && 'string' == typeof j.versions.node;
        }, k.runningInMainNodeJSModule = function () {
            return k.runningInNodeJS() && void 0 === e;
        }, k.commonJSAvailable = function () {
            return 'object' == typeof e.exports;
        }, k.runningInWebWorker = function () {
            return 'undefined' == typeof window && 'object' == typeof self && 'function' == typeof self.addEventListener && 'function' == typeof self.close;
        }, k.runningInNodeChildProcess = function () {
            return k.runningInNodeJS() && 'function' == typeof j.send;
        }, k.runningInNullOrigin = function () {
            return 'object' == typeof window && 'object' == typeof window.location && 'object' == typeof document && ('http:' !== document.location.protocol && 'https:' !== document.location.protocol);
        }, k.webWorkersAvailable = function () {
            return 'function' == typeof Worker && !k.runningInNullOrigin() && (!k.runningInNodeJS() && !(navigator && navigator.userAgent && navigator.userAgent.indexOf('Android 4.3') >= 0));
        }, k.log = function (l, m) {
            void 0 === m && (m = !1), 'object' == typeof console && (console.log(l), m && 'object' == typeof document && (document.body.innerHTML += l + '<br/>'));
        }, k.createErrorMessage = function (l, m) {
            if (void 0 === m && (m = 'Unhandled exception'), null == l)
                return m;
            if (m += ': ', 'object' == typeof l.content) {
                if (k.runningInNodeJS())
                    return m + l.content.stack;
                var n = JSON.stringify(l.content);
                return '{}' !== n ? m + n : m + l.content;
            }
            return 'string' == typeof l.content ? m + l.content : m + l;
        }, k.printExceptionAndStackTraceToConsole = function (l, m) {
            void 0 === m && (m = 'Unhandled exception'), k.log(k.createErrorMessage(l, m));
        }, k.getGlobalObject = function () {
            return 'object' == typeof c ? c : 'object' == typeof window ? window : 'object' == typeof self ? self : {};
        }, k.toString = Object.prototype.toString, k.commonJSAvailable() && (e.exports = k);
    }(h || (h = {})), function (k) {
        if ('function' == typeof Uint8Array && 0 !== new Uint8Array(1).subarray(1).byteLength) {
            var l = function (m, n) {
                    var o = function (p, q, r) {
                        return p < q ? q : p > r ? r : p;
                    };
                    m |= 0, n |= 0, arguments.length < 1 && (m = 0), arguments.length < 2 && (n = this.length), m < 0 && (m = this.length + m), n < 0 && (n = this.length + n), m = o(m, 0, this.length);
                    var p = (n = o(n, 0, this.length)) - m;
                    return p < 0 && (p = 0), new this.constructor(this.buffer, this.byteOffset + m * this.BYTES_PER_ELEMENT, p);
                }, m = [
                    'Int8Array',
                    'Uint8Array',
                    'Uint8ClampedArray',
                    'Int16Array',
                    'Uint16Array',
                    'Int32Array',
                    'Uint32Array',
                    'Float32Array',
                    'Float64Array'
                ], n = void 0;
            if ('object' == typeof window ? n = window : 'object' == typeof self && (n = self), void 0 !== n)
                for (var o = 0; o < m.length; o++)
                    n[m[o]] && (n[m[o]].prototype.subarray = l);
        }
    }(g || (g = {})), function (k) {
        var l = function () {
            function m() {
            }
            return m.compressAsync = function (n, o, p) {
                var q = new k.Timer(), r = new k.Compressor();
                if (!p)
                    throw new TypeError('compressAsync: No callback argument given');
                if ('string' == typeof n)
                    n = k.encodeUTF8(n);
                else if (null == n || !(n instanceof Uint8Array))
                    return void p(void 0, new TypeError('compressAsync: Invalid input argument, only \'string\' and \'Uint8Array\' are supported'));
                var s = k.ArrayTools.splitByteArray(n, o.blockSize), t = [], u = function (v) {
                        if (v < s.length) {
                            var w = void 0;
                            try {
                                w = r.compressBlock(s[v]);
                            } catch (k) {
                                return void p(void 0, k);
                            }
                            t.push(w), q.getElapsedTime() <= 20 ? u(v + 1) : (k.enqueueImmediate(function () {
                                return u(v + 1);
                            }), q.restart());
                        } else {
                            var x = k.ArrayTools.concatUint8Arrays(t);
                            k.enqueueImmediate(function () {
                                var y;
                                try {
                                    y = k.CompressionCommon.encodeCompressedBytes(x, o.outputEncoding);
                                } catch (k) {
                                    return void p(void 0, k);
                                }
                                k.enqueueImmediate(function () {
                                    return p(y);
                                });
                            });
                        }
                    };
                k.enqueueImmediate(function () {
                    return u(0);
                });
            }, m.createCompressionStream = function () {
                var n = new k.Compressor(), o = new (d('.....')).Transform({
                        decodeStrings: !0,
                        highWaterMark: 65536
                    });
                return o._transform = function (p, q, r) {
                    var s;
                    try {
                        s = k.BufferTools.uint8ArrayToBuffer(n.compressBlock(k.BufferTools.bufferToUint8Array(p)));
                    } catch (k) {
                        return void o.emit('error', k);
                    }
                    o.push(s), r();
                }, o;
            }, m;
        }();
        k.AsyncCompressor = l;
    }(h || (h = {})), function (k) {
        var l = function () {
            function m() {
            }
            return m.decompressAsync = function (n, o, p) {
                if (!p)
                    throw new TypeError('decompressAsync: No callback argument given');
                var q = new k.Timer();
                try {
                    n = k.CompressionCommon.decodeCompressedBytes(n, o.inputEncoding);
                } catch (k) {
                    return void p(void 0, k);
                }
                var r = new k.Decompressor(), s = k.ArrayTools.splitByteArray(n, o.blockSize), t = [], u = function (v) {
                        if (v < s.length) {
                            var w = void 0;
                            try {
                                w = r.decompressBlock(s[v]);
                            } catch (k) {
                                return void p(void 0, k);
                            }
                            t.push(w), q.getElapsedTime() <= 20 ? u(v + 1) : (k.enqueueImmediate(function () {
                                return u(v + 1);
                            }), q.restart());
                        } else {
                            var x = k.ArrayTools.concatUint8Arrays(t);
                            k.enqueueImmediate(function () {
                                var y;
                                try {
                                    y = k.CompressionCommon.encodeDecompressedBytes(x, o.outputEncoding);
                                } catch (k) {
                                    return void p(void 0, k);
                                }
                                k.enqueueImmediate(function () {
                                    return p(y);
                                });
                            });
                        }
                    };
                k.enqueueImmediate(function () {
                    return u(0);
                });
            }, m.createDecompressionStream = function () {
                var n = new k.Decompressor(), o = new (d('.....')).Transform({
                        decodeStrings: !0,
                        highWaterMark: 65536
                    });
                return o._transform = function (p, q, r) {
                    var s;
                    try {
                        s = k.BufferTools.uint8ArrayToBuffer(n.decompressBlock(k.BufferTools.bufferToUint8Array(p)));
                    } catch (k) {
                        return void o.emit('error', k);
                    }
                    o.push(s), r();
                }, o;
            }, m;
        }();
        k.AsyncDecompressor = l;
    }(h || (h = {})), function (k) {
        var l;
        !function (m) {
            m.compressAsync = function (n, o, p) {
                if ('ByteArray' != o.inputEncoding || n instanceof Uint8Array) {
                    var q = {
                            token: Math.random().toString(),
                            type: 'compress',
                            data: n,
                            inputEncoding: o.inputEncoding,
                            outputEncoding: o.outputEncoding
                        }, r = function (s) {
                            var t = s.data;
                            t && t.token == q.token && (m.globalWorker.removeEventListener('message', r), 'error' == t.type ? p(void 0, new Error(t.error)) : p(t.data));
                        };
                    m.globalWorker.addEventListener('message', r), m.globalWorker.postMessage(q, []);
                } else
                    p(void 0, new TypeError('compressAsync: input is not a Uint8Array'));
            }, m.decompressAsync = function (n, o, p) {
                var q = {
                        token: Math.random().toString(),
                        type: 'decompress',
                        data: n,
                        inputEncoding: o.inputEncoding,
                        outputEncoding: o.outputEncoding
                    }, r = function (s) {
                        var t = s.data;
                        t && t.token == q.token && (m.globalWorker.removeEventListener('message', r), 'error' == t.type ? p(void 0, new Error(t.error)) : p(t.data));
                    };
                m.globalWorker.addEventListener('message', r), m.globalWorker.postMessage(q, []);
            }, m.installWebWorkerIfNeeded = function () {
                'object' == typeof self && void 0 === self.document && null != self.addEventListener && (self.addEventListener('message', function (n) {
                    var o = n.data;
                    if ('compress' == o.type) {
                        var p = void 0;
                        try {
                            p = k.compress(o.data, { outputEncoding: o.outputEncoding });
                        } catch (n) {
                            return void self.postMessage({
                                token: o.token,
                                type: 'error',
                                error: k.createErrorMessage(n)
                            }, []);
                        }
                        (g = {
                            token: o.token,
                            type: 'compressionResult',
                            data: p,
                            encoding: o.outputEncoding
                        }).data instanceof Uint8Array && -1 === navigator.appVersion.indexOf('MSIE 10') ? self.postMessage(g, [g.data.buffer]) : self.postMessage(g, []);
                    } else if ('decompress' == o.type) {
                        var q, r = void 0;
                        try {
                            r = k.decompress(o.data, {
                                inputEncoding: o.inputEncoding,
                                outputEncoding: o.outputEncoding
                            });
                        } catch (n) {
                            return void self.postMessage({
                                token: o.token,
                                type: 'error',
                                error: k.createErrorMessage(n)
                            }, []);
                        }
                        (q = {
                            token: o.token,
                            type: 'decompressionResult',
                            data: r,
                            encoding: o.outputEncoding
                        }).data instanceof Uint8Array && -1 === navigator.appVersion.indexOf('MSIE 10') ? self.postMessage(q, [q.data.buffer]) : self.postMessage(q, []);
                    }
                }), self.addEventListener('error', function (n) {
                    k.log(k.createErrorMessage(n.error, 'Unexpected LZUTF8 WebWorker exception'));
                }));
            }, m.createGlobalWorkerIfNeeded = function () {
                if (m.globalWorker)
                    return !0;
                if (!k.webWorkersAvailable())
                    return !1;
                if (!m.scriptURI && 'object' == typeof document) {
                    var n = document.getElementById('lzutf8');
                    null != n && (m.scriptURI = n.getAttribute('src') || void 0);
                }
                return !!m.scriptURI && (m.globalWorker = new Worker(m.scriptURI), !0);
            }, m.terminate = function () {
                m.globalWorker && (m.globalWorker.terminate(), m.globalWorker = void 0);
            };
        }(l = k.WebWorker || (k.WebWorker = {})), l.installWebWorkerIfNeeded();
    }(h || (h = {})), function (k) {
        var l = function () {
            function m(n, o, p) {
                this.container = n, this.startPosition = o, this.length = p;
            }
            return m.prototype.get = function (n) {
                return this.container[this.startPosition + n];
            }, m.prototype.getInReversedOrder = function (n) {
                return this.container[this.startPosition + this.length - 1 - n];
            }, m.prototype.set = function (n, o) {
                this.container[this.startPosition + n] = o;
            }, m;
        }();
        k.ArraySegment = l;
    }(h || (h = {})), function (k) {
        !function (l) {
            l.copyElements = function (m, n, o, p, q) {
                for (; q--;)
                    o[p++] = m[n++];
            }, l.zeroElements = function (m, n, o) {
                for (; o--;)
                    m[n++] = 0;
            }, l.countNonzeroValuesInArray = function (m) {
                for (var n = 0, o = 0; o < m.length; o++)
                    m[o] && n++;
                return n;
            }, l.truncateStartingElements = function (m, n) {
                if (m.length <= n)
                    throw new RangeError('truncateStartingElements: Requested length should be smaller than array length');
                for (var o = m.length - n, p = 0; p < n; p++)
                    m[p] = m[o + p];
                m.length = n;
            }, l.doubleByteArrayCapacity = function (m) {
                var n = new Uint8Array(2 * m.length);
                return n.set(m), n;
            }, l.concatUint8Arrays = function (m) {
                for (var n = 0, o = 0, p = m; o < p.length; o++) {
                    n += (_u = p[o]).length;
                }
                for (var q = new Uint8Array(n), r = 0, s = 0, t = m; s < t.length; s++) {
                    var _u = t[s];
                    q.set(_u, r), r += _u.length;
                }
                return q;
            }, l.splitByteArray = function (m, n) {
                for (var o = [], p = 0; p < m.length;) {
                    var q = Math.min(n, m.length - p);
                    o.push(m.subarray(p, p + q)), p += q;
                }
                return o;
            };
        }(k.ArrayTools || (k.ArrayTools = {}));
    }(h || (h = {})), function (k) {
        !function (l) {
            l.convertToUint8ArrayIfNeeded = function (m) {
                return 'function' == typeof i && i.isBuffer(m) ? l.bufferToUint8Array(m) : m;
            }, l.uint8ArrayToBuffer = function (m) {
                if (i.prototype instanceof Uint8Array) {
                    var n = new Uint8Array(m.buffer, m.byteOffset, m.byteLength);
                    return Object.setPrototypeOf(n, i.prototype), n;
                }
                for (var o = m.length, p = new i(o), q = 0; q < o; q++)
                    p[q] = m[q];
                return p;
            }, l.bufferToUint8Array = function (m) {
                if (i.prototype instanceof Uint8Array)
                    return new Uint8Array(m.buffer, m.byteOffset, m.byteLength);
                for (var n = m.length, o = new Uint8Array(n), p = 0; p < n; p++)
                    o[p] = m[p];
                return o;
            };
        }(k.BufferTools || (k.BufferTools = {}));
    }(h || (h = {})), function (k) {
        !function (l) {
            l.getCroppedBuffer = function (m, n, o, p) {
                void 0 === p && (p = 0);
                var q = new Uint8Array(o + p);
                return q.set(m.subarray(n, n + o)), q;
            }, l.getCroppedAndAppendedByteArray = function (m, n, o, p) {
                return k.ArrayTools.concatUint8Arrays([
                    m.subarray(n, n + o),
                    p
                ]);
            }, l.detectCompressionSourceEncoding = function (m) {
                if (null == m)
                    throw new TypeError('detectCompressionSourceEncoding: input is null or undefined');
                if ('string' == typeof m)
                    return 'String';
                if (m instanceof Uint8Array || 'function' == typeof i && i.isBuffer(m))
                    return 'ByteArray';
                throw new TypeError('detectCompressionSourceEncoding: input must be of type \'string\', \'Uint8Array\' or \'Buffer\'');
            }, l.encodeCompressedBytes = function (m, n) {
                switch (n) {
                case 'ByteArray':
                    return m;
                case 'Buffer':
                    return k.BufferTools.uint8ArrayToBuffer(m);
                case 'Base64':
                    return k.encodeBase64(m);
                case 'BinaryString':
                    return k.encodeBinaryString(m);
                case 'StorageBinaryString':
                    return k.encodeStorageBinaryString(m);
                default:
                    throw new TypeError('encodeCompressedBytes: invalid output encoding requested');
                }
            }, l.decodeCompressedBytes = function (m, n) {
                if (null == n)
                    throw new TypeError('decodeCompressedData: Input is null or undefined');
                switch (n) {
                case 'ByteArray':
                case 'Buffer':
                    var o = k.BufferTools.convertToUint8ArrayIfNeeded(m);
                    if (!(o instanceof Uint8Array))
                        throw new TypeError('decodeCompressedData: \'ByteArray\' or \'Buffer\' input type was specified but input is not a Uint8Array or Buffer');
                    return o;
                case 'Base64':
                    if ('string' != typeof m)
                        throw new TypeError('decodeCompressedData: \'Base64\' input type was specified but input is not a string');
                    return k.decodeBase64(m);
                case 'BinaryString':
                    if ('string' != typeof m)
                        throw new TypeError('decodeCompressedData: \'BinaryString\' input type was specified but input is not a string');
                    return k.decodeBinaryString(m);
                case 'StorageBinaryString':
                    if ('string' != typeof m)
                        throw new TypeError('decodeCompressedData: \'StorageBinaryString\' input type was specified but input is not a string');
                    return k.decodeStorageBinaryString(m);
                default:
                    throw new TypeError('decodeCompressedData: invalid input encoding requested: \'' + n + '\'');
                }
            }, l.encodeDecompressedBytes = function (m, n) {
                switch (n) {
                case 'String':
                    return k.decodeUTF8(m);
                case 'ByteArray':
                    return m;
                case 'Buffer':
                    if ('function' != typeof i)
                        throw new TypeError('encodeDecompressedBytes: a \'Buffer\' type was specified but is not supported at the current envirnment');
                    return k.BufferTools.uint8ArrayToBuffer(m);
                default:
                    throw new TypeError('encodeDecompressedBytes: invalid output encoding requested');
                }
            };
        }(k.CompressionCommon || (k.CompressionCommon = {}));
    }(h || (h = {})), function (k) {
        var l;
        !function (m) {
            var n, o = [];
            m.enqueueImmediate = function (p) {
                o.push(p), 1 === o.length && n();
            }, m.initializeScheduler = function () {
                var p = function () {
                    for (var q = 0, r = o; q < r.length; q++) {
                        var s = r[q];
                        try {
                            s.call(void 0);
                        } catch (q) {
                            k.printExceptionAndStackTraceToConsole(q, 'enqueueImmediate exception');
                        }
                    }
                    o.length = 0;
                };
                if (k.runningInNodeJS() && (n = function () {
                        return setImmediate(function () {
                            return p();
                        });
                    }), 'object' == typeof window && 'function' == typeof window.addEventListener && 'function' == typeof window.postMessage) {
                    var q, r = 'enqueueImmediate-' + Math.random().toString();
                    window.addEventListener('message', function (s) {
                        s.data === r && p();
                    }), q = k.runningInNullOrigin() ? '*' : window.location.href, n = function () {
                        return window.postMessage(r, q);
                    };
                } else if ('function' == typeof MessageChannel && 'function' == typeof MessagePort) {
                    var s = new MessageChannel();
                    s.port1.onmessage = function () {
                        return p();
                    }, n = function () {
                        return s.port2.postMessage(0);
                    };
                } else
                    n = function () {
                        return setTimeout(function () {
                            return p();
                        }, 0);
                    };
            }, m.initializeScheduler();
        }(l = k.EventLoop || (k.EventLoop = {})), k.enqueueImmediate = function (m) {
            return l.enqueueImmediate(m);
        };
    }(h || (h = {})), function (k) {
        !function (l) {
            l.override = function (m, n) {
                return l.extend(m, n);
            }, l.extend = function (m, n) {
                if (null == m)
                    throw new TypeError('obj is null or undefined');
                if ('object' != typeof m)
                    throw new TypeError('obj is not an object');
                if (null == n && (n = {}), 'object' != typeof n)
                    throw new TypeError('newProperties is not an object');
                if (null != n)
                    for (var o in n)
                        m[o] = n[o];
                return m;
            };
        }(k.ObjectTools || (k.ObjectTools = {}));
    }(h || (h = {})), function (k) {
        k.getRandomIntegerInRange = function (l, m) {
            return l + Math.floor(Math.random() * (m - l));
        }, k.getRandomUTF16StringOfLength = function (l) {
            for (var m = '', n = 0; n < l; n++) {
                var o = void 0;
                do {
                    o = k.getRandomIntegerInRange(0, 1114112);
                } while (o >= 55296 && o <= 57343);
                m += k.Encoding.CodePoint.decodeToString(o);
            }
            return m;
        };
    }(h || (h = {})), function (k) {
        var l = function () {
            function m(n) {
                void 0 === n && (n = 1024), this.outputBufferCapacity = n, this.outputPosition = 0, this.outputString = '', this.outputBuffer = new Uint16Array(this.outputBufferCapacity);
            }
            return m.prototype.appendCharCode = function (n) {
                this.outputBuffer[this.outputPosition++] = n, this.outputPosition === this.outputBufferCapacity && this.flushBufferToOutputString();
            }, m.prototype.appendCharCodes = function (n) {
                for (var o = 0, p = n.length; o < p; o++)
                    this.appendCharCode(n[o]);
            }, m.prototype.appendString = function (n) {
                for (var o = 0, p = n.length; o < p; o++)
                    this.appendCharCode(n.charCodeAt(o));
            }, m.prototype.appendCodePoint = function (n) {
                if (n <= 65535)
                    this.appendCharCode(n);
                else {
                    if (!(n <= 1114111))
                        throw new Error('appendCodePoint: A code point of ' + n + ' cannot be encoded in UTF-16');
                    this.appendCharCode(55296 + (n - 65536 >>> 10)), this.appendCharCode(56320 + (n - 65536 & 1023));
                }
            }, m.prototype.getOutputString = function () {
                return this.flushBufferToOutputString(), this.outputString;
            }, m.prototype.flushBufferToOutputString = function () {
                this.outputPosition === this.outputBufferCapacity ? this.outputString += String.fromCharCode.apply(null, this.outputBuffer) : this.outputString += String.fromCharCode.apply(null, this.outputBuffer.subarray(0, this.outputPosition)), this.outputPosition = 0;
            }, m;
        }();
        k.StringBuilder = l;
    }(h || (h = {})), function (k) {
        var l = function () {
            function m() {
                this.restart();
            }
            return m.prototype.restart = function () {
                this.startTime = m.getTimestamp();
            }, m.prototype.getElapsedTime = function () {
                return m.getTimestamp() - this.startTime;
            }, m.prototype.getElapsedTimeAndRestart = function () {
                var n = this.getElapsedTime();
                return this.restart(), n;
            }, m.prototype.logAndRestart = function (n, o) {
                void 0 === o && (o = !0);
                var p = this.getElapsedTime(), q = n + ': ' + p.toFixed(3) + 'ms';
                return k.log(q, o), this.restart(), p;
            }, m.getTimestamp = function () {
                return this.timestampFunc || this.createGlobalTimestampFunction(), this.timestampFunc();
            }, m.getMicrosecondTimestamp = function () {
                return Math.floor(1000 * m.getTimestamp());
            }, m.createGlobalTimestampFunction = function () {
                if ('object' == typeof j && 'function' == typeof j.hrtime) {
                    var n = 0;
                    this.timestampFunc = function () {
                        var o = j.hrtime(), p = 1000 * o[0] + o[1] / 1000000;
                        return n + p;
                    }, n = Date.now() - this.timestampFunc();
                } else if ('object' == typeof chrome && chrome.Interval) {
                    var o = Date.now(), p = new chrome.Interval();
                    p.start(), this.timestampFunc = function () {
                        return o + p.microseconds() / 1000;
                    };
                } else if ('object' == typeof performance && performance.now) {
                    var q = Date.now() - performance.now();
                    this.timestampFunc = function () {
                        return q + performance.now();
                    };
                } else
                    Date.now ? this.timestampFunc = function () {
                        return Date.now();
                    } : this.timestampFunc = function () {
                        return new Date().getTime();
                    };
            }, m;
        }();
        k.Timer = l;
    }(h || (h = {})), function (k) {
        var l = function () {
            function m(n) {
                void 0 === n && (n = !0), this.MinimumSequenceLength = 4, this.MaximumSequenceLength = 31, this.MaximumMatchDistance = 32767, this.PrefixHashTableSize = 65537, this.inputBufferStreamOffset = 1, n && 'function' == typeof Uint32Array ? this.prefixHashTable = new k.CompressorCustomHashTable(this.PrefixHashTableSize) : this.prefixHashTable = new k.CompressorSimpleHashTable(this.PrefixHashTableSize);
            }
            return m.prototype.compressBlock = function (n) {
                if (null == n)
                    throw new TypeError('compressBlock: undefined or null input received');
                return 'string' == typeof n && (n = k.encodeUTF8(n)), n = k.BufferTools.convertToUint8ArrayIfNeeded(n), this.compressUtf8Block(n);
            }, m.prototype.compressUtf8Block = function (n) {
                if (!n || 0 == n.length)
                    return new Uint8Array(0);
                var o = this.cropAndAddNewBytesToInputBuffer(n), p = this.inputBuffer, q = this.inputBuffer.length;
                this.outputBuffer = new Uint8Array(n.length), this.outputBufferPosition = 0;
                for (var r = 0, s = o; s < q; s++) {
                    var t = p[s], u = s < r;
                    if (s > q - this.MinimumSequenceLength)
                        u || this.outputRawByte(t);
                    else {
                        var v = this.getBucketIndexForPrefix(s);
                        if (!u) {
                            var w = this.findLongestMatch(s, v);
                            null != w && (this.outputPointerBytes(w.length, w.distance), r = s + w.length, u = !0);
                        }
                        u || this.outputRawByte(t);
                        var x = this.inputBufferStreamOffset + s;
                        this.prefixHashTable.addValueToBucket(v, x);
                    }
                }
                return this.outputBuffer.subarray(0, this.outputBufferPosition);
            }, m.prototype.findLongestMatch = function (n, o) {
                var p = this.prefixHashTable.getArraySegmentForBucketIndex(o, this.reusableArraySegmentObject);
                if (null == p)
                    return null;
                for (var q, r = this.inputBuffer, s = 0, t = 0; t < p.length; t++) {
                    var u = p.getInReversedOrder(t) - this.inputBufferStreamOffset, v = n - u, w = void 0;
                    if (w = void 0 === q ? this.MinimumSequenceLength - 1 : q < 128 && v >= 128 ? s + (s >>> 1) : s, v > this.MaximumMatchDistance || w >= this.MaximumSequenceLength || n + w >= r.length)
                        break;
                    if (r[u + w] === r[n + w])
                        for (var x = 0;; x++) {
                            if (n + x === r.length || r[u + x] !== r[n + x]) {
                                x > w && (q = v, s = x);
                                break;
                            }
                            if (x === this.MaximumSequenceLength)
                                return {
                                    distance: v,
                                    length: this.MaximumSequenceLength
                                };
                        }
                }
                return void 0 !== q ? {
                    distance: q,
                    length: s
                } : null;
            }, m.prototype.getBucketIndexForPrefix = function (n) {
                return (7880599 * this.inputBuffer[n] + 39601 * this.inputBuffer[n + 1] + 199 * this.inputBuffer[n + 2] + this.inputBuffer[n + 3]) % this.PrefixHashTableSize;
            }, m.prototype.outputPointerBytes = function (n, o) {
                o < 128 ? (this.outputRawByte(192 | n), this.outputRawByte(o)) : (this.outputRawByte(224 | n), this.outputRawByte(o >>> 8), this.outputRawByte(255 & o));
            }, m.prototype.outputRawByte = function (n) {
                this.outputBuffer[this.outputBufferPosition++] = n;
            }, m.prototype.cropAndAddNewBytesToInputBuffer = function (n) {
                if (void 0 === this.inputBuffer)
                    return this.inputBuffer = n, 0;
                var o = Math.min(this.inputBuffer.length, this.MaximumMatchDistance), p = this.inputBuffer.length - o;
                return this.inputBuffer = k.CompressionCommon.getCroppedAndAppendedByteArray(this.inputBuffer, p, o, n), this.inputBufferStreamOffset += p, o;
            }, m;
        }();
        k.Compressor = l;
    }(h || (h = {})), function (k) {
        var l = function () {
            function m(n) {
                this.minimumBucketCapacity = 4, this.maximumBucketCapacity = 64, this.bucketLocators = new Uint32Array(2 * n), this.storage = new Uint32Array(2 * n), this.storageIndex = 1;
            }
            return m.prototype.addValueToBucket = function (n, o) {
                n <<= 1, this.storageIndex >= this.storage.length >>> 1 && this.compact();
                var p, q = this.bucketLocators[n];
                if (0 === q)
                    q = this.storageIndex, p = 1, this.storage[this.storageIndex] = o, this.storageIndex += this.minimumBucketCapacity;
                else {
                    (p = this.bucketLocators[n + 1]) === this.maximumBucketCapacity - 1 && (p = this.truncateBucketToNewerElements(q, p, this.maximumBucketCapacity / 2));
                    var r = q + p;
                    0 === this.storage[r] ? (this.storage[r] = o, r === this.storageIndex && (this.storageIndex += p)) : (k.ArrayTools.copyElements(this.storage, q, this.storage, this.storageIndex, p), q = this.storageIndex, this.storageIndex += p, this.storage[this.storageIndex++] = o, this.storageIndex += p), p++;
                }
                this.bucketLocators[n] = q, this.bucketLocators[n + 1] = p;
            }, m.prototype.truncateBucketToNewerElements = function (n, o, p) {
                var q = n + o - p;
                return k.ArrayTools.copyElements(this.storage, q, this.storage, n, p), k.ArrayTools.zeroElements(this.storage, n + p, o - p), p;
            }, m.prototype.compact = function () {
                var n = this.bucketLocators, o = this.storage;
                this.bucketLocators = new Uint32Array(this.bucketLocators.length), this.storageIndex = 1;
                for (var p = 0; p < n.length; p += 2) {
                    var q = n[p + 1];
                    0 !== q && (this.bucketLocators[p] = this.storageIndex, this.bucketLocators[p + 1] = q, this.storageIndex += Math.max(Math.min(2 * q, this.maximumBucketCapacity), this.minimumBucketCapacity));
                }
                this.storage = new Uint32Array(8 * this.storageIndex);
                for (p = 0; p < n.length; p += 2) {
                    var r = n[p];
                    if (0 !== r) {
                        var s = this.bucketLocators[p], t = this.bucketLocators[p + 1];
                        k.ArrayTools.copyElements(o, r, this.storage, s, t);
                    }
                }
            }, m.prototype.getArraySegmentForBucketIndex = function (n, o) {
                n <<= 1;
                var p = this.bucketLocators[n];
                return 0 === p ? null : (void 0 === o && (o = new k.ArraySegment(this.storage, p, this.bucketLocators[n + 1])), o);
            }, m.prototype.getUsedBucketCount = function () {
                return Math.floor(k.ArrayTools.countNonzeroValuesInArray(this.bucketLocators) / 2);
            }, m.prototype.getTotalElementCount = function () {
                for (var n = 0, o = 0; o < this.bucketLocators.length; o += 2)
                    n += this.bucketLocators[o + 1];
                return n;
            }, m;
        }();
        k.CompressorCustomHashTable = l;
    }(h || (h = {})), function (k) {
        var l = function () {
            function m(n) {
                this.maximumBucketCapacity = 64, this.buckets = new Array(n);
            }
            return m.prototype.addValueToBucket = function (n, o) {
                var p = this.buckets[n];
                void 0 === p ? this.buckets[n] = [o] : (p.length === this.maximumBucketCapacity - 1 && k.ArrayTools.truncateStartingElements(p, this.maximumBucketCapacity / 2), p.push(o));
            }, m.prototype.getArraySegmentForBucketIndex = function (n, o) {
                var p = this.buckets[n];
                return void 0 === p ? null : (void 0 === o && (o = new k.ArraySegment(p, 0, p.length)), o);
            }, m.prototype.getUsedBucketCount = function () {
                return k.ArrayTools.countNonzeroValuesInArray(this.buckets);
            }, m.prototype.getTotalElementCount = function () {
                for (var n = 0, o = 0; o < this.buckets.length; o++)
                    void 0 !== this.buckets[o] && (n += this.buckets[o].length);
                return n;
            }, m;
        }();
        k.CompressorSimpleHashTable = l;
    }(h || (h = {})), function (k) {
        var l = function () {
            function m() {
                this.MaximumMatchDistance = 32767, this.outputPosition = 0;
            }
            return m.prototype.decompressBlockToString = function (n) {
                return n = k.BufferTools.convertToUint8ArrayIfNeeded(n), k.decodeUTF8(this.decompressBlock(n));
            }, m.prototype.decompressBlock = function (n) {
                this.inputBufferRemainder && (n = k.ArrayTools.concatUint8Arrays([
                    this.inputBufferRemainder,
                    n
                ]), this.inputBufferRemainder = void 0);
                for (var o = this.cropOutputBufferToWindowAndInitialize(Math.max(4 * n.length, 1024)), p = 0, q = n.length; p < q; p++) {
                    var r = n[p];
                    if (r >>> 6 == 3) {
                        var s = r >>> 5;
                        if (p == q - 1 || p == q - 2 && 7 == s) {
                            this.inputBufferRemainder = n.subarray(p);
                            break;
                        }
                        if (n[p + 1] >>> 7 == 1)
                            this.outputByte(r);
                        else {
                            var t = 31 & r, u = void 0;
                            6 == s ? (u = n[p + 1], p += 1) : (u = n[p + 1] << 8 | n[p + 2], p += 2);
                            for (var v = this.outputPosition - u, w = 0; w < t; w++)
                                this.outputByte(this.outputBuffer[v + w]);
                        }
                    } else
                        this.outputByte(r);
                }
                return this.rollBackIfOutputBufferEndsWithATruncatedMultibyteSequence(), k.CompressionCommon.getCroppedBuffer(this.outputBuffer, o, this.outputPosition - o);
            }, m.prototype.outputByte = function (n) {
                this.outputPosition === this.outputBuffer.length && (this.outputBuffer = k.ArrayTools.doubleByteArrayCapacity(this.outputBuffer)), this.outputBuffer[this.outputPosition++] = n;
            }, m.prototype.cropOutputBufferToWindowAndInitialize = function (n) {
                if (!this.outputBuffer)
                    return this.outputBuffer = new Uint8Array(n), 0;
                var o = Math.min(this.outputPosition, this.MaximumMatchDistance);
                if (this.outputBuffer = k.CompressionCommon.getCroppedBuffer(this.outputBuffer, this.outputPosition - o, o, n), this.outputPosition = o, this.outputBufferRemainder) {
                    for (var p = 0; p < this.outputBufferRemainder.length; p++)
                        this.outputByte(this.outputBufferRemainder[p]);
                    this.outputBufferRemainder = void 0;
                }
                return o;
            }, m.prototype.rollBackIfOutputBufferEndsWithATruncatedMultibyteSequence = function () {
                for (var n = 1; n <= 4 && this.outputPosition - n >= 0; n++) {
                    var o = this.outputBuffer[this.outputPosition - n];
                    if (n < 4 && o >>> 3 == 30 || n < 3 && o >>> 4 == 14 || n < 2 && o >>> 5 == 6)
                        return this.outputBufferRemainder = this.outputBuffer.subarray(this.outputPosition - n, this.outputPosition), void (this.outputPosition -= n);
                }
            }, m;
        }();
        k.Decompressor = l;
    }(h || (h = {})), function (k) {
        !function (l) {
            !function (m) {
                var n = new Uint8Array([
                        65,
                        66,
                        67,
                        68,
                        69,
                        70,
                        71,
                        72,
                        73,
                        74,
                        75,
                        76,
                        77,
                        78,
                        79,
                        80,
                        81,
                        82,
                        83,
                        84,
                        85,
                        86,
                        87,
                        88,
                        89,
                        90,
                        97,
                        98,
                        99,
                        100,
                        101,
                        102,
                        103,
                        104,
                        105,
                        106,
                        107,
                        108,
                        109,
                        110,
                        111,
                        112,
                        113,
                        114,
                        115,
                        116,
                        117,
                        118,
                        119,
                        120,
                        121,
                        122,
                        48,
                        49,
                        50,
                        51,
                        52,
                        53,
                        54,
                        55,
                        56,
                        57,
                        43,
                        47
                    ]), o = new Uint8Array([
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        62,
                        255,
                        255,
                        255,
                        63,
                        52,
                        53,
                        54,
                        55,
                        56,
                        57,
                        58,
                        59,
                        60,
                        61,
                        255,
                        255,
                        255,
                        0,
                        255,
                        255,
                        255,
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        26,
                        27,
                        28,
                        29,
                        30,
                        31,
                        32,
                        33,
                        34,
                        35,
                        36,
                        37,
                        38,
                        39,
                        40,
                        41,
                        42,
                        43,
                        44,
                        45,
                        46,
                        47,
                        48,
                        49,
                        50,
                        51,
                        255,
                        255,
                        255,
                        255
                    ]);
                m.encode = function (p) {
                    return p && 0 != p.length ? k.runningInNodeJS() ? k.BufferTools.uint8ArrayToBuffer(p).toString('base64') : m.encodeWithJS(p) : '';
                }, m.decode = function (p) {
                    return p ? k.runningInNodeJS() ? k.BufferTools.bufferToUint8Array(i.from(p, 'base64')) : m.decodeWithJS(p) : new Uint8Array(0);
                }, m.encodeWithJS = function (p, q) {
                    if (void 0 === q && (q = !0), !p || 0 == p.length)
                        return '';
                    for (var r, s = n, t = new k.StringBuilder(), u = 0, v = p.length; u < v; u += 3)
                        u <= v - 3 ? (r = p[u] << 16 | p[u + 1] << 8 | p[u + 2], t.appendCharCode(s[r >>> 18 & 63]), t.appendCharCode(s[r >>> 12 & 63]), t.appendCharCode(s[r >>> 6 & 63]), t.appendCharCode(s[63 & r]), r = 0) : u === v - 2 ? (r = p[u] << 16 | p[u + 1] << 8, t.appendCharCode(s[r >>> 18 & 63]), t.appendCharCode(s[r >>> 12 & 63]), t.appendCharCode(s[r >>> 6 & 63]), q && t.appendCharCode(61)) : u === v - 1 && (r = p[u] << 16, t.appendCharCode(s[r >>> 18 & 63]), t.appendCharCode(s[r >>> 12 & 63]), q && (t.appendCharCode(61), t.appendCharCode(61)));
                    return t.getOutputString();
                }, m.decodeWithJS = function (p, q) {
                    if (!p || 0 == p.length)
                        return new Uint8Array(0);
                    var r = p.length % 4;
                    if (1 === r)
                        throw new Error('Invalid Base64 string: length % 4 == 1');
                    2 === r ? p += '==' : 3 === r && (p += '='), q || (q = new Uint8Array(p.length));
                    for (var s = 0, t = p.length, u = 0; u < t; u += 4) {
                        var v = o[p.charCodeAt(u)] << 18 | o[p.charCodeAt(u + 1)] << 12 | o[p.charCodeAt(u + 2)] << 6 | o[p.charCodeAt(u + 3)];
                        q[s++] = v >>> 16 & 255, q[s++] = v >>> 8 & 255, q[s++] = 255 & v;
                    }
                    return 61 == p.charCodeAt(t - 1) && s--, 61 == p.charCodeAt(t - 2) && s--, q.subarray(0, s);
                };
            }(l.Base64 || (l.Base64 = {}));
        }(k.Encoding || (k.Encoding = {}));
    }(h || (h = {})), function (k) {
        !function (l) {
            !function (m) {
                m.encode = function (n) {
                    if (null == n)
                        throw new TypeError('BinaryString.encode: undefined or null input received');
                    if (0 === n.length)
                        return '';
                    for (var o = n.length, p = new k.StringBuilder(), q = 0, r = 1, s = 0; s < o; s += 2) {
                        var t = void 0;
                        t = s == o - 1 ? n[s] << 8 : n[s] << 8 | n[s + 1], p.appendCharCode(q << 16 - r | t >>> r), q = t & (1 << r) - 1, 15 === r ? (p.appendCharCode(q), q = 0, r = 1) : r += 1, s >= o - 2 && p.appendCharCode(q << 16 - r);
                    }
                    return p.appendCharCode(32768 | o % 2), p.getOutputString();
                }, m.decode = function (n) {
                    if ('string' != typeof n)
                        throw new TypeError('BinaryString.decode: invalid input type');
                    if ('' == n)
                        return new Uint8Array(0);
                    for (var o = new Uint8Array(3 * n.length), p = 0, q = function (r) {
                                o[p++] = r >>> 8, o[p++] = 255 & r;
                            }, r = 0, s = 0, t = 0; t < n.length; t++) {
                        var u = n.charCodeAt(t);
                        u >= 32768 ? (32769 == u && p--, s = 0) : (0 == s ? r = u : (q(r << s | u >>> 15 - s), r = u & (1 << 15 - s) - 1), 15 == s ? s = 0 : s += 1);
                    }
                    return o.subarray(0, p);
                };
            }(l.BinaryString || (l.BinaryString = {}));
        }(k.Encoding || (k.Encoding = {}));
    }(h || (h = {})), function (k) {
        !function (l) {
            !function (m) {
                m.encodeFromString = function (n, o) {
                    var p = n.charCodeAt(o);
                    if (p < 55296 || p > 56319)
                        return p;
                    var q = n.charCodeAt(o + 1);
                    if (q >= 56320 && q <= 57343)
                        return q - 56320 + (p - 55296 << 10) + 65536;
                    throw new Error('getUnicodeCodePoint: Received a lead surrogate character, char code ' + p + ', followed by ' + q + ', which is not a trailing surrogate character code.');
                }, m.decodeToString = function (n) {
                    if (n <= 65535)
                        return String.fromCharCode(n);
                    if (n <= 1114111)
                        return String.fromCharCode(55296 + (n - 65536 >>> 10), 56320 + (n - 65536 & 1023));
                    throw new Error('getStringFromUnicodeCodePoint: A code point of ' + n + ' cannot be encoded in UTF-16');
                };
            }(l.CodePoint || (l.CodePoint = {}));
        }(k.Encoding || (k.Encoding = {}));
    }(h || (h = {})), function (k) {
        !function (l) {
            !function (m) {
                var n = [
                    '000',
                    '001',
                    '002',
                    '003',
                    '004',
                    '005',
                    '006',
                    '007',
                    '008',
                    '009',
                    '010',
                    '011',
                    '012',
                    '013',
                    '014',
                    '015',
                    '016',
                    '017',
                    '018',
                    '019',
                    '020',
                    '021',
                    '022',
                    '023',
                    '024',
                    '025',
                    '026',
                    '027',
                    '028',
                    '029',
                    '030',
                    '031',
                    '032',
                    '033',
                    '034',
                    '035',
                    '036',
                    '037',
                    '038',
                    '039',
                    '040',
                    '041',
                    '042',
                    '043',
                    '044',
                    '045',
                    '046',
                    '047',
                    '048',
                    '049',
                    '050',
                    '051',
                    '052',
                    '053',
                    '054',
                    '055',
                    '056',
                    '057',
                    '058',
                    '059',
                    '060',
                    '061',
                    '062',
                    '063',
                    '064',
                    '065',
                    '066',
                    '067',
                    '068',
                    '069',
                    '070',
                    '071',
                    '072',
                    '073',
                    '074',
                    '075',
                    '076',
                    '077',
                    '078',
                    '079',
                    '080',
                    '081',
                    '082',
                    '083',
                    '084',
                    '085',
                    '086',
                    '087',
                    '088',
                    '089',
                    '090',
                    '091',
                    '092',
                    '093',
                    '094',
                    '095',
                    '096',
                    '097',
                    '098',
                    '099',
                    '100',
                    '101',
                    '102',
                    '103',
                    '104',
                    '105',
                    '106',
                    '107',
                    '108',
                    '109',
                    '110',
                    '111',
                    '112',
                    '113',
                    '114',
                    '115',
                    '116',
                    '117',
                    '118',
                    '119',
                    '120',
                    '121',
                    '122',
                    '123',
                    '124',
                    '125',
                    '126',
                    '127',
                    '128',
                    '129',
                    '130',
                    '131',
                    '132',
                    '133',
                    '134',
                    '135',
                    '136',
                    '137',
                    '138',
                    '139',
                    '140',
                    '141',
                    '142',
                    '143',
                    '144',
                    '145',
                    '146',
                    '147',
                    '148',
                    '149',
                    '150',
                    '151',
                    '152',
                    '153',
                    '154',
                    '155',
                    '156',
                    '157',
                    '158',
                    '159',
                    '160',
                    '161',
                    '162',
                    '163',
                    '164',
                    '165',
                    '166',
                    '167',
                    '168',
                    '169',
                    '170',
                    '171',
                    '172',
                    '173',
                    '174',
                    '175',
                    '176',
                    '177',
                    '178',
                    '179',
                    '180',
                    '181',
                    '182',
                    '183',
                    '184',
                    '185',
                    '186',
                    '187',
                    '188',
                    '189',
                    '190',
                    '191',
                    '192',
                    '193',
                    '194',
                    '195',
                    '196',
                    '197',
                    '198',
                    '199',
                    '200',
                    '201',
                    '202',
                    '203',
                    '204',
                    '205',
                    '206',
                    '207',
                    '208',
                    '209',
                    '210',
                    '211',
                    '212',
                    '213',
                    '214',
                    '215',
                    '216',
                    '217',
                    '218',
                    '219',
                    '220',
                    '221',
                    '222',
                    '223',
                    '224',
                    '225',
                    '226',
                    '227',
                    '228',
                    '229',
                    '230',
                    '231',
                    '232',
                    '233',
                    '234',
                    '235',
                    '236',
                    '237',
                    '238',
                    '239',
                    '240',
                    '241',
                    '242',
                    '243',
                    '244',
                    '245',
                    '246',
                    '247',
                    '248',
                    '249',
                    '250',
                    '251',
                    '252',
                    '253',
                    '254',
                    '255'
                ];
                m.encode = function (o) {
                    for (var p = [], q = 0; q < o.length; q++)
                        p.push(n[o[q]]);
                    return p.join(' ');
                };
            }(l.DecimalString || (l.DecimalString = {}));
        }(k.Encoding || (k.Encoding = {}));
    }(h || (h = {})), function (k) {
        !function (l) {
            !function (m) {
                m.encode = function (n) {
                    return l.BinaryString.encode(n).replace(/\0/g, '耂');
                }, m.decode = function (n) {
                    return l.BinaryString.decode(n.replace(/\u8002/g, '\0'));
                };
            }(l.StorageBinaryString || (l.StorageBinaryString = {}));
        }(k.Encoding || (k.Encoding = {}));
    }(h || (h = {})), function (k) {
        !function (l) {
            !function (m) {
                var n, o;
                m.encode = function (p) {
                    return p && 0 != p.length ? k.runningInNodeJS() ? k.BufferTools.bufferToUint8Array(i.from(p, 'utf8')) : m.createNativeTextEncoderAndDecoderIfAvailable() ? n.encode(p) : m.encodeWithJS(p) : new Uint8Array(0);
                }, m.decode = function (p) {
                    return p && 0 != p.length ? k.runningInNodeJS() ? k.BufferTools.uint8ArrayToBuffer(p).toString('utf8') : m.createNativeTextEncoderAndDecoderIfAvailable() ? o.decode(p) : m.decodeWithJS(p) : '';
                }, m.encodeWithJS = function (p, q) {
                    if (!p || 0 == p.length)
                        return new Uint8Array(0);
                    q || (q = new Uint8Array(4 * p.length));
                    for (var r = 0, s = 0; s < p.length; s++) {
                        var t = l.CodePoint.encodeFromString(p, s);
                        if (t <= 127)
                            q[r++] = t;
                        else if (t <= 2047)
                            q[r++] = 192 | t >>> 6, q[r++] = 128 | 63 & t;
                        else if (t <= 65535)
                            q[r++] = 224 | t >>> 12, q[r++] = 128 | t >>> 6 & 63, q[r++] = 128 | 63 & t;
                        else {
                            if (!(t <= 1114111))
                                throw new Error('Invalid UTF-16 string: Encountered a character unsupported by UTF-8/16 (RFC 3629)');
                            q[r++] = 240 | t >>> 18, q[r++] = 128 | t >>> 12 & 63, q[r++] = 128 | t >>> 6 & 63, q[r++] = 128 | 63 & t, s++;
                        }
                    }
                    return q.subarray(0, r);
                }, m.decodeWithJS = function (p, q, r) {
                    if (void 0 === q && (q = 0), !p || 0 == p.length)
                        return '';
                    void 0 === r && (r = p.length);
                    for (var s, t, u = new k.StringBuilder(), v = q, w = r; v < w;) {
                        if ((t = p[v]) >>> 7 == 0)
                            s = t, v += 1;
                        else if (t >>> 5 == 6) {
                            if (v + 1 >= r)
                                throw new Error('Invalid UTF-8 stream: Truncated codepoint sequence encountered at position ' + v);
                            s = (31 & t) << 6 | 63 & p[v + 1], v += 2;
                        } else if (t >>> 4 == 14) {
                            if (v + 2 >= r)
                                throw new Error('Invalid UTF-8 stream: Truncated codepoint sequence encountered at position ' + v);
                            s = (15 & t) << 12 | (63 & p[v + 1]) << 6 | 63 & p[v + 2], v += 3;
                        } else {
                            if (t >>> 3 != 30)
                                throw new Error('Invalid UTF-8 stream: An invalid lead byte value encountered at position ' + v);
                            if (v + 3 >= r)
                                throw new Error('Invalid UTF-8 stream: Truncated codepoint sequence encountered at position ' + v);
                            s = (7 & t) << 18 | (63 & p[v + 1]) << 12 | (63 & p[v + 2]) << 6 | 63 & p[v + 3], v += 4;
                        }
                        u.appendCodePoint(s);
                    }
                    return u.getOutputString();
                }, m.createNativeTextEncoderAndDecoderIfAvailable = function () {
                    return !!n || 'function' == typeof TextEncoder && (n = new TextEncoder('utf-8'), o = new TextDecoder('utf-8'), !0);
                };
            }(l.UTF8 || (l.UTF8 = {}));
        }(k.Encoding || (k.Encoding = {}));
    }(h || (h = {})), function (k) {
        k.compress = function (l, m) {
            if (void 0 === m && (m = {}), null == l)
                throw new TypeError('compress: undefined or null input received');
            var n = k.CompressionCommon.detectCompressionSourceEncoding(l);
            m = k.ObjectTools.override({
                inputEncoding: n,
                outputEncoding: 'ByteArray'
            }, m);
            var o = new k.Compressor().compressBlock(l);
            return k.CompressionCommon.encodeCompressedBytes(o, m.outputEncoding);
        }, k.decompress = function (l, m) {
            if (void 0 === m && (m = {}), null == l)
                throw new TypeError('decompress: undefined or null input received');
            m = k.ObjectTools.override({
                inputEncoding: 'ByteArray',
                outputEncoding: 'String'
            }, m);
            var n = k.CompressionCommon.decodeCompressedBytes(l, m.inputEncoding), o = new k.Decompressor().decompressBlock(n);
            return k.CompressionCommon.encodeDecompressedBytes(o, m.outputEncoding);
        }, k.compressAsync = function (l, m, n) {
            var o;
            null == n && (n = function () {
            });
            try {
                o = k.CompressionCommon.detectCompressionSourceEncoding(l);
            } catch (k) {
                return void n(void 0, k);
            }
            m = k.ObjectTools.override({
                inputEncoding: o,
                outputEncoding: 'ByteArray',
                useWebWorker: !0,
                blockSize: 65536
            }, m), k.enqueueImmediate(function () {
                m.useWebWorker && k.WebWorker.createGlobalWorkerIfNeeded() ? k.WebWorker.compressAsync(l, m, n) : k.AsyncCompressor.compressAsync(l, m, n);
            });
        }, k.decompressAsync = function (l, m, n) {
            if (null == n && (n = function () {
                }), null != l) {
                m = k.ObjectTools.override({
                    inputEncoding: 'ByteArray',
                    outputEncoding: 'String',
                    useWebWorker: !0,
                    blockSize: 65536
                }, m);
                var o = k.BufferTools.convertToUint8ArrayIfNeeded(l);
                k.EventLoop.enqueueImmediate(function () {
                    m.useWebWorker && k.WebWorker.createGlobalWorkerIfNeeded() ? k.WebWorker.decompressAsync(o, m, n) : k.AsyncDecompressor.decompressAsync(l, m, n);
                });
            } else
                n(void 0, new TypeError('decompressAsync: undefined or null input received'));
        }, k.createCompressionStream = function () {
            return k.AsyncCompressor.createCompressionStream();
        }, k.createDecompressionStream = function () {
            return k.AsyncDecompressor.createDecompressionStream();
        }, k.encodeUTF8 = function (l) {
            return k.Encoding.UTF8.encode(l);
        }, k.decodeUTF8 = function (l) {
            return k.Encoding.UTF8.decode(l);
        }, k.encodeBase64 = function (l) {
            return k.Encoding.Base64.encode(l);
        }, k.decodeBase64 = function (l) {
            return k.Encoding.Base64.decode(l);
        }, k.encodeBinaryString = function (l) {
            return k.Encoding.BinaryString.encode(l);
        }, k.decodeBinaryString = function (l) {
            return k.Encoding.BinaryString.decode(l);
        }, k.encodeStorageBinaryString = function (l) {
            return k.Encoding.StorageBinaryString.encode(l);
        }, k.decodeStorageBinaryString = function (l) {
            return k.Encoding.StorageBinaryString.decode(l);
        };
    }(h || (h = {}));
}), d.register('.....', function (e, f) {
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....'), p = m.default, q = j.default, r = i.default, s = h.default, t = g.default, u = n.default, v = o.default, w = k.default, x = l.default, y = d('.....'), z = y.zeroPad, A = y.nTobin, B = y.stepMap, C = y.binToByte;
    e.exports = {
        zwcOperations: D => {
            const E = p(r(t, D), A, z(2)), F = (G, H, I) => (G && H ? D[0] : H ? D[1] : D[2]) + B((J, K) => (L => D[parseInt(L, 2)])(I[K] + I[K + 1]))(2, new Array(I.length).fill()).join('');
            return {
                detach: G => {
                    const H = G.split(' ').reduce((I, J) => {
                        const K = J.split('');
                        if (0 !== q(D, K).length) {
                            const L = K.findIndex((M, N) => !~D.indexOf(M));
                            return J.slice(0, L);
                        }
                        return L;
                    }, '');
                    if (!H)
                        throw new Error('Invisible stream not detected! Please copy and paste the StegCloak text sent by the sender.');
                    return H;
                },
                concealToData: G => {
                    const {
                        encrypt: H,
                        integrity: I
                    } = (J => {
                        const K = D.indexOf(J[0]);
                        return 0 === K ? {
                            encrypt: !0,
                            integrity: !0
                        } : 1 === K ? {
                            encrypt: !0,
                            integrity: !1
                        } : 2 === K ? {
                            encrypt: !1,
                            integrity: !1
                        } : void 0;
                    })(G);
                    return {
                        encrypt: H,
                        integrity: I,
                        data: p(u(1, 1 / 0), v(''), x(E), w(''), C)(G)
                    };
                },
                toConcealHmac: s(F)(!0)(!0),
                toConceal: s(F)(!1)(!0),
                noCrypt: s(F)(!1)(!1)
            };
        },
        embed: (D, E) => {
            const F = D.split(' '), G = Math.floor(Math.random() * Math.floor(F.length / 2));
            return F.slice(0, G + 1).concat([E + F[G + 1]]).concat(F.slice(G + 2, F.length)).join(' ');
        }
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _j;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), _j = (0, g.default)(function (k, l) {
            return 'function' != typeof l.indexOf || (0, i.default)(l) ? (0, h.default)(l, k, 0) : l.indexOf(k);
        });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _l;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), _l = (0, h.default)(function (m, n) {
            var o, p;
            return m.length > n.length ? (o = m, p = n) : (o = n, p = m), (0, k.default)((0, i.default)((0, j.default)(g.default)(o), p));
        });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....'), _h = (0, d('.....').default)(g.default);
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....'), _i = (0, g.default)(h.default);
}), d.register('.....', function (e, f) {
    function g(h) {
        return h;
    }
    a(e.exports, 'default', function () {
        return g;
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _h;
    });
    var g = d('.....'), _h = (0, d('.....').default)(function (i, j) {
            for (var k, l, m = new (0, g.default)(), n = [], o = 0; o < j.length;)
                k = i(l = j[o]), m.add(k) && n.push(l), o += 1;
            return n;
        });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _g;
    });
    var _g = (0, d('.....').default)(1, 'split');
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _o;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....');
    var _o = p => {
        const [q, r] = h.useState(), [s, t] = h.useState(''), [u, v, w] = (0, l.useBoolean)(!1);
        h.useEffect(() => {
            (0, l.request)({
                url: '/api/matchmaker/pre-intent/assignment',
                data: { assignmentId: p.assignmentId },
                success: x => {
                    x.canCreate && (0, l.isLoggedIn)() ? _x() : r(x);
                },
                error: () => {
                    window.location.href = '/join';
                }
            });
        }, []);
        const _x = () => {
            u || (v(), (0, l.request)({
                url: '/api/matchmaker/intent/assignment/create',
                data: {
                    assignmentId: p.assignmentId,
                    name: s
                },
                success: y => {
                    p.setCreateMapDetails({ intentId: y });
                },
                error: y => {
                    (0, l.throwMessageError)({
                        e: y,
                        default: {
                            title: 'An unknown error occurred.',
                            content: 'Please try again.'
                        }
                    }), w();
                }
            }));
        };
        return (0, g.jsx)(i.default, {
            children: (0, g.jsx)(j.AnimatePresence, {
                initial: !0,
                mode: 'wait',
                children: q ? !q.canCreate && q.dueDate ? (0, g.jsx)(n.default, { dueDate: q.dueDate }) : !q.canCreate && q.groups ? (0, g.jsx)(m.default, { groups: q.groups }) : (0, g.jsx)(k.default, {
                    value: s,
                    onValueChange: t,
                    submit: _x,
                    loading: u
                }, 'enter-name') : null
            })
        });
    };
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _v;
    });
    var g = d('.....'), h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....'), m = d('.....'), n = d('.....'), o = d('.....');
    let p, q, r, s, t = u => u;
    const u = v => {
        const w = `/class/join/${ v.group._id }/?redirect=${ encodeURIComponent(window.location.href) }`;
        return (0, g.jsx)(m.default, {
            to: w,
            className: 'maxWidth',
            children: (0, g.jsx)(h.default, {
                hoverable: !0,
                style: { borderRadius: 8 },
                bodyStyle: { padding: 20 },
                children: (0, g.jsxs)(_x, {
                    children: [
                        (0, g.jsx)('div', {
                            style: {
                                borderRadius: 5,
                                height: 40,
                                width: 40,
                                background: v.group.color
                            }
                        }),
                        (0, g.jsx)(_y, { children: (0, g.jsx)(_z, { children: v.group.name }) })
                    ]
                })
            })
        });
    };
    var _v = w => (0, g.jsx)(k.default, {
        noImage: !!w.groups.length,
        customMaxWidth: 475,
        children: w.groups.length ? (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(_w, {
                    style: { fontSize: (0, o.isLoggedIn)() ? 16 : 18 },
                    children: (0, o.isLoggedIn)() ? 'To access this assignment, you\'ll have to join one of the classes it is assigned to. Choose a class below to join it.' : 'To access this assignment, select the class you\'re part of and authenticate in.'
                }),
                (0, g.jsx)(i.default, {}),
                w.groups.map((x, y) => (0, g.jsxs)(j.Fragment, {
                    children: [
                        (0, g.jsx)(u, { group: x }),
                        y + 1 !== w.groups.length ? (0, g.jsx)('div', { style: { height: 10 } }) : null
                    ]
                }, x._id + '-join'))
            ]
        }) : (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(i.default, {}),
                (0, g.jsx)(_w, { children: 'This assignment is no longer available as it is assigned to a class that has been deleted.' })
            ]
        })
    });
    const _w = l.default.div(p || (p = t`
  font-weight: ${ 0 };
  text-align: center;
`), n.FontWeights.Bold), _x = l.default.div.attrs({ className: 'flex maxWidth vc' })(q || (q = t`
  color: rgba(0, 0, 0, 0.9);
`)), _y = l.default.div(r || (r = t`
  margin-left: 16px;
`)), _z = l.default.div(s || (s = t`
  font-size: 14px;
  line-height: 1;
  font-weight: ${ 0 };
`), n.FontWeights.Bold);
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _i;
    });
    var g = d('.....'), h = d('.....');
    d('.....');
    var _i = j => j.external || !j.to ? (0, g.jsx)('a', {
        href: j.to,
        tabIndex: Number(j.tabIndex || '0'),
        onClick: j.onClick,
        onKeyPress: k => {
            j.onClick && 'Enter' === k.key && (k.preventDefault(), j.onClick());
        },
        className: j.className,
        target: j.target,
        style: j.style,
        children: j.children
    }) : (0, g.jsx)(h.Link, {
        to: j.to,
        tabIndex: Number(j.tabIndex || '0'),
        onClick: j.onClick,
        className: j.className,
        target: j.target,
        style: j.style,
        children: j.children
    });
}), d.register('.....', function (e, f) {
    a(e.exports, 'default', function () {
        return _p;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....'), i = d('.....'), j = d('.....'), k = d('.....'), l = d('.....');
    let m, n, o = p => p;
    var _p = q => {
        const r = b(l)(q.dueDate).format('MMMM Do'), s = b(l)(q.dueDate).format('ha');
        return (0, g.jsx)(h.default, {
            noImage: !0,
            children: (0, g.jsxs)(_q, {
                children: [
                    (0, g.jsx)('i', {
                        className: 'far fa-alarm-exclamation',
                        style: {
                            color: '#f4511e',
                            fontSize: 38
                        }
                    }),
                    (0, g.jsx)(j.default, {}),
                    (0, g.jsxs)(_r, {
                        children: [
                            'The due date for this assignment was ',
                            r,
                            ', at',
                            ' ',
                            s,
                            '. It can no longer be completed.'
                        ]
                    })
                ]
            })
        });
    };
    const _q = i.default.div.attrs({ className: 'flex-column flex-center' })(m || (m = o``)), _r = i.default.div(n || (n = o`
  font-size: 16px;
  font-weight: ${ 0 };
`), k.FontWeights.Bold);
}), d.register('.....', function (e, f) {
    a(e.exports, 'useTimeoutWhen', function () {
        return _h;
    });
    var g = d('.....');
    function _h(i, j, k) {
        void 0 === j && (j = 0), void 0 === k && (k = !0);
        var l = (0, g.useRef)();
        function m() {
            l.current && l.current();
        }
        (0, g.useEffect)(function () {
            l.current = i;
        }), (0, g.useEffect)(function () {
            if (k) {
                if ('undefined' != typeof window) {
                    var n = window.setTimeout(m, j);
                    return function () {
                        window.clearTimeout(n);
                    };
                }
                console.warn('useTimeoutWhen: window is undefined.');
            }
        }, [k]);
    }
}), d.register('.....', function (e, f) {
    e.exports = Promise.all([
        import('./' + d('.....').resolve('67gBN')),
        import('./' + d('.....').resolve('GSLeG')),
        import('./' + d('.....').resolve('hgN00')),
        import('./' + d('.....').resolve('emV63')),
        import('./' + d('.....').resolve('aepPt')),
        import('./' + d('.....').resolve('jScf8')),
        import('./' + d('.....').resolve('hEmsF')),
        import('./' + d('.....').resolve('b1VMh')),
        import('./' + d('.....').resolve('3AR7P')),
        import('./' + d('.....').resolve('jS4Db')),
        import('./' + d('.....').resolve('83uYn')),
        import('./' + d('.....').resolve('ehnD9')),
        d('.....')(new URL(d('.....').resolve('iz62w'), import.meta.url).toString()),
        import('./' + d('.....').resolve('9UYQf'))
    ]).then(() => d('.....'));
}), d.register('.....', function (e, f) {
    e.exports = Promise.all([
        import('./' + d('.....').resolve('b7Bno')),
        import('./' + d('.....').resolve('1gjsp')),
        import('./' + d('.....').resolve('bgF9Q')),
        import('./' + d('.....').resolve('in5Zm')),
        import('./' + d('.....').resolve('emV63')),
        import('./' + d('.....').resolve('aepPt')),
        import('./' + d('.....').resolve('jScf8')),
        import('./' + d('.....').resolve('hEmsF')),
        import('./' + d('.....').resolve('fdG0P')),
        import('./' + d('.....').resolve('h8E7U')),
        import('./' + d('.....').resolve('jZGfx')),
        import('./' + d('.....').resolve('cvq1E')),
        import('./' + d('.....').resolve('NHzsh')),
        import('./' + d('.....').resolve('2odS1')),
        import('./' + d('.....').resolve('d6saV')),
        import('./' + d('.....').resolve('6fGMH')),
        import('./' + d('.....').resolve('3AR7P')),
        import('./' + d('.....').resolve('jS4Db')),
        import('./' + d('.....').resolve('5BLiG')),
        import('./' + d('.....').resolve('83uYn')),
        import('./' + d('.....').resolve('f3m2d')),
        import('./' + d('.....').resolve('k0ZSq')),
        import('./' + d('.....').resolve('ehnD9')),
        import('./' + d('.....').resolve('8PKLa'))
    ]).then(() => d('.....'));
});