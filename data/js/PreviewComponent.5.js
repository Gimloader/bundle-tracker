function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('C7Pfa', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _n;
    });
    var f = b('gRbUn'),
        g = b('9zaF+'),
        h = b('O0Kav'),
        i = b('yK0U7'),
        j = b('6BXeU'),
        k = b('5oXbu'),
        l = b('Eh2Wh'),
        m = b('2BfsU');
    var _n = a => {
        const [o, p] = h.useState((0, g.shuffle)(a.questions.map(a => a._id))), [q, r] = h.useState(0), [s, t] = h.useState({
            ...a.questions.find(a => a._id === o[q]),
            answers: (0, g.shuffle)(a.questions.find(a => a._id === o[q]).answers)
        }), [u, v] = h.useState(), [w, x] = h.useState(!1);
        h.useEffect(() => {
            o.length - 1 === q && p((0, g.shuffle)(a.questions.map(a => a._id)));
        }, [
            o.length,
            q
        ]), h.useEffect(() => {
            m.GimkitLiveQuestionDeviceSounds.correct.load(), m.GimkitLiveQuestionDeviceSounds.incorrect.load(), m.GimkitLiveQuestionDeviceSounds.click.load();
        }, []);
        const y = h.useMemo(() => {
            var z;
            return (null == u || null === (z = u.answers) || void 0 === z ? void 0 : z.find(z => z.correct)) || {
                _id: 'no_correct',
                text: 'No Correct Answer',
                correct: !0
            };
        }, [u]);
        return (0, f.jsx)('div', {
            className: 'maxAll',
            style: {
                fontFamily: l.Fonts.ProductSans,
                background: '#303f9f',
                userSelect: 'none',
                overflow: 'hidden'
            },
            children: (0, f.jsx)(j.default, {
                ecc: (0, i.EncryptData)(s, s._id),
                lastQuestion: u,
                lastQuestionCorrectAnswer: y,
                lastQuestionAnsweredCorrect: w,
                onQuestionAnswered: p => {
                    v(s);
                    let z = q + 1;
                    z >= o.length && (z = 0), r(z);
                    const A = a.questions.find(a => a._id === o[z]);
                    t({
                        ...A,
                        answers: (0, g.shuffle)(A.answers)
                    });
                    const B = (0, k.isQuestionCorrect)(s, p);
                    return x(B), B;
                },
                correctSound: m.GimkitLiveQuestionDeviceSounds.correct,
                incorrectSound: m.GimkitLiveQuestionDeviceSounds.incorrect,
                onActionSound: m.GimkitLiveQuestionDeviceSounds.click,
                textShownWhenAnsweringCorrectly: 'Correct!',
                textShownWhenAnsweringIncorrectly: 'Incorrect!',
                customCorrectTextAnimation: {
                    className: 'animated slideInDown',
                    duration: 0.4
                }
            })
        });
    };
}), b.register('2BfsU', function(c, d) {
    a(c.exports, 'GimkitLiveQuestionDeviceSounds', function() {
        return _g;
    });
    var e = b('6yrsF'),
        f = b('UaUBz0');
    const _g = {
        correct: new(0, e.Howl)({
            src: [(0, f.default)('devices/gimkit_live_question/sounds/correct.mp3')],
            volume: 0.7,
            preload: !1
        }),
        correctCash: new(0, e.Howl)({
            src: [(0, f.default)('devices/gimkit_live_question/sounds/correct_cash.mp3')],
            preload: !1
        }),
        incorrect: new(0, e.Howl)({
            src: [(0, f.default)('devices/gimkit_live_question/sounds/incorrect.mp3')],
            preload: !1
        }),
        click: new(0, e.Howl)({
            src: [(0, f.default)('devices/gimkit_live_question/sounds/click.mp3')],
            preload: !1
        })
    };
}), b.register('UaUBz0', function(c, d) {
    let e;
    a(c.exports, 'default', function() {
        return _f;
    });
    var _f = a => {
        const g = (() => {
            var h;
            if (e)
                return e;
            const i = null === (h = document.querySelector('meta[property="cdn-map-assets-url"]')) || void 0 === h ? void 0 : h.getAttribute('content');
            return void 0 !== i && '$CDN_MAP_ASSETS_URL' !== i ? (e = i, e) : '';
        })();
        return a.startsWith('/assets/map') ? `${ g }${ a }` : `${ g }/assets/map/${ a }`;
    };
}), b.register('TixUC', function(c, d) {
    a(c.exports, 'AnimatePresence', function() {
        return _m;
    });
    var e = b('O0Kav'),
        f = (e = b('O0Kav'), b('1tp/4')),
        g = b('Tzvpe'),
        h = b('LLnOp'),
        i = b('P/tpU'),
        j = b('FEEJX'),
        k = b('kGged');
    const l = a => a.key || '';
    const _m = ({
        children: n,
        custom: o,
        initial: p = !0,
        onExitComplete: q,
        exitBeforeEnter: r,
        presenceAffectsLayout: s = !0,
        mode: t = 'sync'
    }) => {
        r && (t = 'wait');
        let [u] = (0, f.useForceUpdate)();
        const v = (0, e.useContext)(i.LayoutGroupContext).forceRender;
        v && (u = v);
        const w = (0, g.useIsMounted)(),
            x = function(y) {
                const z = [];
                return e.Children.forEach(y, y => {
                    (0, e.isValidElement)(y) && z.push(y);
                }), z;
            }(n);
        let y = x;
        const z = new Set(),
            A = (0, e.useRef)(y),
            B = (0, e.useRef)(new Map()).current,
            C = (0, e.useRef)(!0);
        if ((0, j.useIsomorphicLayoutEffect)(() => {
                C.current = !1,
                    function(D, E) {
                        D.forEach(D => {
                            const F = l(D);
                            E.set(F, D);
                        });
                    }(x, B), A.current = y;
            }), (0, k.useUnmountEffect)(() => {
                C.current = !0, B.clear(), z.clear();
            }), C.current)
            return e.createElement(e.Fragment, null, y.map(n => e.createElement(h.PresenceChild, {
                key: l(n),
                isPresent: !0,
                initial: !!p && void 0,
                presenceAffectsLayout: s,
                mode: t
            }, n)));
        y = [...y];
        const D = A.current.map(l),
            E = x.map(l),
            F = D.length;
        for (let G = 0; G < F; G++) {
            const H = D[G]; -
            1 === E.indexOf(H) && z.add(H);
        }
        return 'wait' === t && z.size && (y = []), z.forEach(G => {
            if (-1 !== E.indexOf(G))
                return;
            const H = B.get(G);
            if (!H)
                return;
            const I = D.indexOf(G);
            y.splice(I, 0, e.createElement(h.PresenceChild, {
                key: l(H),
                isPresent: !1,
                onExitComplete: () => {
                    B.delete(G), z.delete(G);
                    const J = A.current.findIndex(J => J.key === G);
                    if (A.current.splice(J, 1), !z.size) {
                        if (A.current = x, !1 === w.current)
                            return;
                        u(), q && q();
                    }
                },
                custom: o,
                presenceAffectsLayout: s,
                mode: t
            }, H));
        }), y = y.map(G => {
            const H = G.key;
            return z.has(H) ? G : e.createElement(h.PresenceChild, {
                key: l(G),
                isPresent: !0,
                presenceAffectsLayout: s,
                mode: t
            }, G);
        }), e.createElement(e.Fragment, null, z.size ? y : y.map(G => (0, e.cloneElement)(G)));
    };
}), b.register('1tp/4', function(c, d) {
    a(c.exports, 'useForceUpdate', function() {
        return _h;
    });
    var e = b('yVkz9'),
        f = b('O0Kav'),
        g = b('Tzvpe');

    function _h() {
        const i = (0, g.useIsMounted)(),
            [j, k] = (0, f.useState)(0),
            l = (0, f.useCallback)(() => {
                i.current && k(j + 1);
            }, [j]);
        return [
            (0, f.useCallback)(() => e.sync.postRender(l), [l]),
            j
        ];
    }
}), b.register('Tzvpe', function(c, d) {
    a(c.exports, 'useIsMounted', function() {
        return _g;
    });
    var e = b('O0Kav'),
        f = b('FEEJX');

    function _g() {
        const h = (0, e.useRef)(!1);
        return (0, f.useIsomorphicLayoutEffect)(() => (h.current = !0, () => {
            h.current = !1;
        }), []), h;
    }
}), b.register('LLnOp', function(c, d) {
    a(c.exports, 'PresenceChild', function() {
        return _i;
    });
    var e = b('O0Kav'),
        f = (e = b('O0Kav'), b('8y9OL')),
        g = b('lnHFO'),
        h = b('YjRQH');
    const _i = ({
        children: j,
        initial: k,
        isPresent: l,
        onExitComplete: m,
        custom: n,
        presenceAffectsLayout: o,
        mode: p
    }) => {
        const q = (0, g.useConstant)(_q),
            r = (0, e.useId)(),
            s = (0, e.useMemo)(() => ({
                id: r,
                initial: k,
                isPresent: l,
                custom: n,
                onExitComplete: j => {
                    q.set(j, !0);
                    for (const t of q.values())
                        if (!t)
                            return;
                    m && m();
                },
                register: j => (q.set(j, !1), () => q.delete(j))
            }), o ? void 0 : [l]);
        return (0, e.useMemo)(() => {
            q.forEach((j, k) => q.set(k, !1));
        }, [l]), e.useEffect(() => {
            !l && !q.size && m && m();
        }, [l]), 'popLayout' === p && (j = e.createElement(h.PopChild, {
            isPresent: l
        }, j)), e.createElement(f.PresenceContext.Provider, {
            value: s
        }, j);
    };

    function _q() {
        return new Map();
    }
}), b.register('YjRQH', function(c, d) {
    a(c.exports, 'PopChild', function() {
        return _g;
    });
    var e = b('O0Kav');
    e = b('O0Kav');
    class f extends e.Component {
        getSnapshotBeforeUpdate(g) {
            const h = this.props.childRef.current;
            if (h && g.isPresent && !this.props.isPresent) {
                const i = this.props.sizeRef.current;
                i.height = h.offsetHeight || 0, i.width = h.offsetWidth || 0, i.top = h.offsetTop, i.left = h.offsetLeft;
            }
            return null;
        }
        componentDidUpdate() {}
        render() {
            return this.props.children;
        }
    }

    function _g({
        children: h,
        isPresent: i
    }) {
        const j = (0, e.useId)(),
            k = (0, e.useRef)(null),
            l = (0, e.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0
            });
        return (0, e.useInsertionEffect)(() => {
            const {
                width: m,
                height: n,
                top: o,
                left: p
            } = l.current;
            if (i || !k.current || !m || !n)
                return;
            k.current.dataset.motionPopId = j;
            const q = document.createElement('style');
            return document.head.appendChild(q), q.sheet && q.sheet.insertRule(`\n          [data-motion-pop-id="${ j }"] {\n            position: absolute !important;\n            width: ${ m }px !important;\n            height: ${ n }px !important;\n            top: ${ o }px !important;\n            left: ${ p }px !important;\n          }\n        `), () => {
                document.head.removeChild(q);
            };
        }, [i]), e.createElement(f, {
            isPresent: i,
            childRef: k,
            sizeRef: l
        }, e.cloneElement(h, {
            ref: k
        }));
    }
}), b.register('6TqRT', function(c, d) {
    a(c.exports, 'useTimeoutWhen', function() {
        return _f;
    });
    var e = b('O0Kav');

    function _f(g, h, i) {
        void 0 === h && (h = 0), void 0 === i && (i = !0);
        var j = (0, e.useRef)();

        function k() {
            j.current && j.current();
        }
        (0, e.useEffect)(function() {
            j.current = g;
        }), (0, e.useEffect)(function() {
            if (i) {
                if ('undefined' != typeof window) {
                    var l = window.setTimeout(k, h);
                    return function() {
                        window.clearTimeout(l);
                    };
                }
                console.warn('useTimeoutWhen: window is undefined.');
            }
        }, [i]);
    }
}), b.register('P6MZO', function(c, d) {
    a(c.exports, 'useMotionValue', function() {
        return _i;
    });
    var e = b('O0Kav'),
        f = b('EErEc'),
        g = b('gqmh2'),
        h = b('lnHFO');

    function _i(j) {
        const k = (0, h.useConstant)(() => (0, f.motionValue)(j)),
            {
                isStatic: l
            } = (0, e.useContext)(g.MotionConfigContext);
        if (l) {
            const [, m] = (0, e.useState)(j);
            (0, e.useEffect)(() => k.on('change', m), []);
        }
        return k;
    }
}), b.register('C0gCp', function(c, d) {
    c.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
});