function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('5cFKR', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _y(b.exports, 'default', function() {
        return _m;
    });
    var e = a('0hzx+'),
        f = a('fe6E3'),
        g = a('LEQ5w'),
        h = a('5drJf'),
        i = a('9fFDn'),
        j = a('G8w+m'),
        k = a('b5kvC'),
        l = a('0/10K');
    var _m = _y => {
        const [n, o] = g.useState((0, f.shuffle)(_y.questions.map(_y => _y._id))), [p, q] = g.useState(0), [r, s] = g.useState({
            ..._y.questions.find(_y => _y._id === n[p]),
            answers: (0, f.shuffle)(_y.questions.find(_y => _y._id === n[p]).answers)
        }), [t, u] = g.useState(), [v, w] = g.useState(!1);
        g.useEffect(() => {
            n.length - 1 === p && o((0, f.shuffle)(_y.questions.map(_y => _y._id)));
        }, [
            n.length,
            p
        ]), g.useEffect(() => {
            l.GimkitLiveQuestionDeviceSounds.correct.load(), l.GimkitLiveQuestionDeviceSounds.incorrect.load(), l.GimkitLiveQuestionDeviceSounds.click.load();
        }, []);
        const x = g.useMemo(() => {
            var _y;
            return (null == t || null === (_y = t.answers) || void 0 === _y ? void 0 : _y.find(_y => _y.correct)) || {
                _id: 'no_correct',
                text: 'No Correct Answer',
                correct: !0
            };
        }, [t]);
        return (0, e.jsx)('div', {
            className: 'maxAll',
            style: {
                fontFamily: k.Fonts.ProductSans,
                background: '#303f9f',
                userSelect: 'none',
                overflow: 'hidden'
            },
            children: (0, e.jsx)(i.default, {
                ecc: (0, h.EncryptData)(r, r._id),
                lastQuestion: t,
                lastQuestionCorrectAnswer: x,
                lastQuestionAnsweredCorrect: v,
                onQuestionAnswered: o => {
                    u(r);
                    let y = p + 1;
                    y >= n.length && (y = 0), q(y);
                    const z = _g.questions.find(_g => _g._id === n[y]);
                    s({
                        ...z,
                        answers: (0, f.shuffle)(z.answers)
                    });
                    const A = (0, j.isQuestionCorrect)(r, o);
                    return w(A), A;
                },
                correctSound: l.GimkitLiveQuestionDeviceSounds.correct,
                incorrectSound: l.GimkitLiveQuestionDeviceSounds.incorrect,
                onActionSound: l.GimkitLiveQuestionDeviceSounds.click,
                textShownWhenAnsweringCorrectly: 'Correct!',
                textShownWhenAnsweringIncorrectly: 'Incorrect!',
                customCorrectTextAnimation: {
                    className: 'animated slideInDown',
                    duration: 0.4
                }
            })
        });
    };
}), a.register('0/10K', function(b, c) {
    _g(b.exports, 'GimkitLiveQuestionDeviceSounds', function() {
        return _f;
    });
    var d = a('6yrsF'),
        e = a('2Xvuf');
    const _f = {
        correct: new(0, d.Howl)({
            src: [(0, e.default)('devices/gimkit_live_question/sounds/correct.mp3')],
            volume: 0.7,
            preload: !1
        }),
        correctCash: new(0, d.Howl)({
            src: [(0, e.default)('devices/gimkit_live_question/sounds/correct_cash.mp3')],
            preload: !1
        }),
        incorrect: new(0, d.Howl)({
            src: [(0, e.default)('devices/gimkit_live_question/sounds/incorrect.mp3')],
            preload: !1
        }),
        click: new(0, d.Howl)({
            src: [(0, e.default)('devices/gimkit_live_question/sounds/click.mp3')],
            preload: !1
        })
    };
}), a.register('2Xvuf', function(b, c) {
    let d;
    _g(b.exports, 'default', function() {
        return _e;
    });
    var _e = _g => {
        const f = (() => {
            var _g;
            if (d)
                return d;
            const h = null === (_g = document.querySelector('meta[property="cdn-map-assets-url"]')) || void 0 === _g ? void 0 : _g.getAttribute('content');
            return void 0 !== h && '$CDN_MAP_ASSETS_URL' !== h ? (d = h, d) : '';
        })();
        return _m.startsWith('/assets/map') ? `${ f }${ _m }` : `${ f }/assets/map/${ _m }`;
    };
}), a.register('XZe6/', function(b, c) {
    _m(b.exports, 'AnimatePresence', function() {
        return _l;
    });
    var d = a('LEQ5w'),
        e = (d = a('LEQ5w'), a('v3o9Z')),
        f = a('u6iOF'),
        g = a('zJSm3'),
        h = a('OelFa'),
        i = a('wiv5g'),
        j = a('6qem0');
    const k = _m => _m.key || '';
    const _l = ({
        children: _m,
        custom: n,
        initial: o = !0,
        onExitComplete: p,
        exitBeforeEnter: q,
        presenceAffectsLayout: r = !0,
        mode: s = 'sync'
    }) => {
        q && (s = 'wait');
        let [t] = (0, e.useForceUpdate)();
        const u = (0, d.useContext)(h.LayoutGroupContext).forceRender;
        u && (t = u);
        const v = (0, f.useIsMounted)(),
            w = function(x) {
                const y = [];
                return d.Children.forEach(x, x => {
                    (0, d.isValidElement)(x) && y.push(x);
                }), y;
            }(_m);
        let x = w;
        const y = new Set(),
            z = (0, d.useRef)(x),
            A = (0, d.useRef)(new Map()).current,
            B = (0, d.useRef)(!0);
        if ((0, i.useIsomorphicLayoutEffect)(() => {
                B.current = !1,
                    function(C, D) {
                        C.forEach(C => {
                            const E = k(C);
                            D.set(E, C);
                        });
                    }(w, A), z.current = x;
            }), (0, j.useUnmountEffect)(() => {
                B.current = !0, A.clear(), y.clear();
            }), B.current)
            return d.createElement(d.Fragment, null, x.map(_m => d.createElement(g.PresenceChild, {
                key: k(_m),
                isPresent: !0,
                initial: !!o && void 0,
                presenceAffectsLayout: r,
                mode: s
            }, _m)));
        x = [...x];
        const C = z.current.map(k),
            D = w.map(k),
            E = C.length;
        for (let F = 0; F < E; F++) {
            const G = C[F]; -
            1 === D.indexOf(G) && y.add(G);
        }
        return 'wait' === s && y.size && (x = []), y.forEach(F => {
            if (-1 !== D.indexOf(F))
                return;
            const G = A.get(F);
            if (!G)
                return;
            const H = C.indexOf(F);
            x.splice(H, 0, d.createElement(g.PresenceChild, {
                key: k(G),
                isPresent: !1,
                onExitComplete: () => {
                    A.delete(F), y.delete(F);
                    const I = z.current.findIndex(I => I.key === F);
                    if (z.current.splice(I, 1), !y.size) {
                        if (z.current = w, !1 === v.current)
                            return;
                        t(), p && p();
                    }
                },
                custom: n,
                presenceAffectsLayout: r,
                mode: s
            }, G));
        }), x = x.map(F => {
            const G = F.key;
            return y.has(G) ? F : d.createElement(g.PresenceChild, {
                key: k(F),
                isPresent: !0,
                presenceAffectsLayout: r,
                mode: s
            }, F);
        }), d.createElement(d.Fragment, null, y.size ? x : x.map(F => (0, d.cloneElement)(F)));
    };
}), a.register('v3o9Z', function(b, c) {
    _h(b.exports, 'useForceUpdate', function() {
        return _g;
    });
    var d = a('bGU5Z'),
        e = a('LEQ5w'),
        f = a('u6iOF');

    function _g() {
        const _h = (0, f.useIsMounted)(),
            [i, j] = (0, e.useState)(0),
            k = (0, e.useCallback)(() => {
                _h.current && j(i + 1);
            }, [i]);
        return [
            (0, e.useCallback)(() => d.sync.postRender(k), [k]),
            i
        ];
    }
}), a.register('u6iOF', function(b, c) {
    _g(b.exports, 'useIsMounted', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('wiv5g');

    function _f() {
        const _g = (0, d.useRef)(!1);
        return (0, e.useIsomorphicLayoutEffect)(() => (_g.current = !0, () => {
            _g.current = !1;
        }), []), _g;
    }
}), a.register('zJSm3', function(b, c) {
    _i(b.exports, 'PresenceChild', function() {
        return _h;
    });
    var d = a('LEQ5w'),
        e = (d = a('LEQ5w'), a('iTk+S')),
        f = a('mk5EJ'),
        g = a('r3Dbr');
    const _h = ({
        children: _i,
        initial: j,
        isPresent: k,
        onExitComplete: l,
        custom: m,
        presenceAffectsLayout: n,
        mode: o
    }) => {
        const p = (0, f.useConstant)(_p),
            q = (0, d.useId)(),
            r = (0, d.useMemo)(() => ({
                id: q,
                initial: j,
                isPresent: k,
                custom: m,
                onExitComplete: _i => {
                    p.set(_i, !0);
                    for (const s of p.values())
                        if (!s)
                            return;
                    l && l();
                },
                register: _i => (p.set(_i, !1), () => p.delete(_i))
            }), n ? void 0 : [k]);
        return (0, d.useMemo)(() => {
            p.forEach((_i, j) => p.set(j, !1));
        }, [k]), d.useEffect(() => {
            !k && !p.size && l && l();
        }, [k]), 'popLayout' === o && (_i = d.createElement(g.PopChild, {
            isPresent: k
        }, _i)), d.createElement(e.PresenceContext.Provider, {
            value: r
        }, _i);
    };

    function _p() {
        return new Map();
    }
}), a.register('r3Dbr', function(b, c) {
    _f(b.exports, 'PopChild', function() {
        return _f;
    });
    var d = a('LEQ5w');
    d = a('LEQ5w');
    class e extends d.Component {
        getSnapshotBeforeUpdate(_f) {
            const g = this.props.childRef.current;
            if (g && _f.isPresent && !this.props.isPresent) {
                const h = this.props.sizeRef.current;
                h.height = g.offsetHeight || 0, h.width = g.offsetWidth || 0, h.top = g.offsetTop, h.left = g.offsetLeft;
            }
            return null;
        }
        componentDidUpdate() {}
        render() {
            return this.props.children;
        }
    }

    function _f({
        children: g,
        isPresent: h
    }) {
        const i = (0, d.useId)(),
            j = (0, d.useRef)(null),
            k = (0, d.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0
            });
        return (0, d.useInsertionEffect)(() => {
            const {
                width: l,
                height: m,
                top: n,
                left: o
            } = k.current;
            if (h || !j.current || !l || !m)
                return;
            j.current.dataset.motionPopId = i;
            const p = document.createElement('style');
            return document.head.appendChild(p), p.sheet && p.sheet.insertRule(`\n          [data-motion-pop-id="${ i }"] {\n            position: absolute !important;\n            width: ${ l }px !important;\n            height: ${ m }px !important;\n            top: ${ n }px !important;\n            left: ${ o }px !important;\n          }\n        `), () => {
                document.head.removeChild(p);
            };
        }, [h]), d.createElement(e, {
            isPresent: h,
            childRef: j,
            sizeRef: k
        }, d.cloneElement(g, {
            ref: j
        }));
    }
}), a.register('kOROi', function(b, c) {
    _f(b.exports, 'useTimeoutWhen', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f, g, h) {
        void 0 === g && (g = 0), void 0 === h && (h = !0);
        var i = (0, d.useRef)();

        function j() {
            i.current && i.current();
        }
        (0, d.useEffect)(function() {
            i.current = _f;
        }), (0, d.useEffect)(function() {
            if (h) {
                if ('undefined' != typeof window) {
                    var j = window.setTimeout(_e, g);
                    return function() {
                        window.clearTimeout(j);
                    };
                }
                console.warn('useTimeoutWhen: window is undefined.');
            }
        }, [h]);
    }
}), a.register('gk6FN', function(b, c) {
    _i(b.exports, 'useMotionValue', function() {
        return _h;
    });
    var d = a('LEQ5w'),
        e = a('dssd5'),
        f = a('v1rLj'),
        g = a('mk5EJ');

    function _h(_i) {
        const j = (0, g.useConstant)(() => (0, e.motionValue)(_i)),
            {
                isStatic: k
            } = (0, d.useContext)(f.MotionConfigContext);
        if (k) {
            const [, l] = (0, d.useState)(_i);
            (0, d.useEffect)(() => j.on('change', l), []);
        }
        return j;
    }
}), a.register('CO72t', function(b, c) {
    b.exports = function(d) {
        return d && d.__esModule ? d : {
            default: d
        };
    };
});