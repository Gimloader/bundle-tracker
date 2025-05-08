function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _n;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....');
    var _n = o => {
        const [p, q] = h.useState((0, g.shuffle)(o.questions.map(r => r._id))), [r, s] = h.useState(0), [t, u] = h.useState({
                ...o.questions.find(v => v._id === p[r]),
                answers: (0, g.shuffle)(o.questions.find(v => v._id === p[r]).answers)
            }), [v, w] = h.useState(), [x, y] = h.useState(!1);
        h.useEffect(() => {
            p.length - 1 === r && q((0, g.shuffle)(o.questions.map(z => z._id)));
        }, [
            p.length,
            r
        ]), h.useEffect(() => {
            m.GimkitLiveQuestionDeviceSounds.correct.load(), m.GimkitLiveQuestionDeviceSounds.incorrect.load(), m.GimkitLiveQuestionDeviceSounds.click.load();
        }, []);
        const z = h.useMemo(() => {
            var A;
            return (null == v || null === (A = v.answers) || void 0 === A ? void 0 : A.find(B => B.correct)) || {
                _id: 'no_correct',
                text: 'No Correct Answer',
                correct: !0
            };
        }, [v]);
        return (0, f.jsx)('div', {
            className: 'maxAll',
            style: {
                fontFamily: l.Fonts.ProductSans,
                background: '#303f9f',
                userSelect: 'none',
                overflow: 'hidden'
            },
            children: (0, f.jsx)(j.default, {
                ecc: (0, i.EncryptData)(t, t._id),
                lastQuestion: v,
                lastQuestionCorrectAnswer: z,
                lastQuestionAnsweredCorrect: x,
                onQuestionAnswered: A => {
                    w(t);
                    let B = r + 1;
                    B >= p.length && (B = 0), s(B);
                    const C = o.questions.find(D => D._id === p[B]);
                    u({
                        ...C,
                        answers: (0, g.shuffle)(C.answers)
                    });
                    const D = (0, k.isQuestionCorrect)(t, A);
                    return y(D), D;
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'GimkitLiveQuestionDeviceSounds', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = {
        correct: new (0, e.Howl)({
            src: [(0, f.default)('devices/gimkit_live_question/sounds/correct.mp3')],
            volume: 0.7,
            preload: !1
        }),
        correctCash: new (0, e.Howl)({
            src: [(0, f.default)('devices/gimkit_live_question/sounds/correct_cash.mp3')],
            preload: !1
        }),
        incorrect: new (0, e.Howl)({
            src: [(0, f.default)('devices/gimkit_live_question/sounds/incorrect.mp3')],
            preload: !1
        }),
        click: new (0, e.Howl)({
            src: [(0, f.default)('devices/gimkit_live_question/sounds/click.mp3')],
            preload: !1
        })
    };
}), b.register('.....', function (c, d) {
    let e;
    a(c.exports, 'default', function () {
        return _f;
    });
    var _f = g => {
        const h = (() => {
            var i;
            if (e)
                return e;
            const j = null === (i = document.querySelector('meta[property="cdn-map-assets-url"]')) || void 0 === i ? void 0 : i.getAttribute('content');
            return void 0 !== j && '$CDN_MAP_ASSETS_URL' !== j ? (e = j, e) : '';
        })();
        return g.startsWith('/assets/map') ? `${ h }${ g }` : `${ h }/assets/map/${ g }`;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'AnimatePresence', function () {
        return _m;
    });
    var e = b('.....'), f = (e = b('.....'), b('.....')), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....');
    const l = m => m.key || '';
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
        const w = (0, g.useIsMounted)(), x = function (y) {
                const z = [];
                return e.Children.forEach(y, A => {
                    (0, e.isValidElement)(A) && z.push(A);
                }), z;
            }(n);
        let y = x;
        const z = new Set(), A = (0, e.useRef)(y), B = (0, e.useRef)(new Map()).current, C = (0, e.useRef)(!0);
        if ((0, j.useIsomorphicLayoutEffect)(() => {
                C.current = !1, function (D, E) {
                    D.forEach(F => {
                        const G = l(F);
                        E.set(G, F);
                    });
                }(x, B), A.current = y;
            }), (0, k.useUnmountEffect)(() => {
                C.current = !0, B.clear(), z.clear();
            }), C.current)
            return e.createElement(e.Fragment, null, y.map(D => e.createElement(h.PresenceChild, {
                key: l(D),
                isPresent: !0,
                initial: !!p && void 0,
                presenceAffectsLayout: s,
                mode: t
            }, D)));
        y = [...y];
        const D = A.current.map(l), E = x.map(l), F = D.length;
        for (let G = 0; G < F; G++) {
            const H = D[G];
            -1 === E.indexOf(H) && z.add(H);
        }
        return 'wait' === t && z.size && (y = []), z.forEach(I => {
            if (-1 !== E.indexOf(I))
                return;
            const J = B.get(I);
            if (!J)
                return;
            const K = D.indexOf(I);
            y.splice(K, 0, e.createElement(h.PresenceChild, {
                key: l(J),
                isPresent: !1,
                onExitComplete: () => {
                    B.delete(I), z.delete(I);
                    const L = A.current.findIndex(M => M.key === I);
                    if (A.current.splice(L, 1), !z.size) {
                        if (A.current = x, !1 === w.current)
                            return;
                        u(), q && q();
                    }
                },
                custom: H,
                presenceAffectsLayout: s,
                mode: t
            }, J));
        }), y = y.map(I => {
            const J = I.key;
            return z.has(J) ? I : e.createElement(h.PresenceChild, {
                key: l(I),
                isPresent: !0,
                presenceAffectsLayout: s,
                mode: t
            }, I);
        }), e.createElement(e.Fragment, null, z.size ? y : y.map(I => (0, e.cloneElement)(I)));
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'useForceUpdate', function () {
        return _h;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    function _h() {
        const i = (0, g.useIsMounted)(), [j, k] = (0, f.useState)(0), l = (0, f.useCallback)(() => {
                i.current && k(j + 1);
            }, [j]);
        return [
            (0, f.useCallback)(() => e.sync.postRender(l), [l]),
            j
        ];
    }
}), b.register('.....', function (c, d) {
    a(c.exports, 'useIsMounted', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    function _g() {
        const h = (0, e.useRef)(!1);
        return (0, f.useIsomorphicLayoutEffect)(() => (h.current = !0, () => {
            h.current = !1;
        }), []), h;
    }
}), b.register('.....', function (c, d) {
    a(c.exports, 'PresenceChild', function () {
        return _i;
    });
    var e = b('.....'), f = (e = b('.....'), b('.....')), g = b('.....'), h = b('.....');
    const _i = ({
        children: j,
        initial: k,
        isPresent: l,
        onExitComplete: m,
        custom: n,
        presenceAffectsLayout: o,
        mode: p
    }) => {
        const q = (0, g.useConstant)(_j), r = (0, e.useId)(), s = (0, e.useMemo)(() => ({
                id: r,
                initial: k,
                isPresent: l,
                custom: n,
                onExitComplete: t => {
                    q.set(t, !0);
                    for (const u of q.values())
                        if (!u)
                            return;
                    m && m();
                },
                register: t => (q.set(t, !1), () => q.delete(t))
            }), o ? void 0 : [l]);
        return (0, e.useMemo)(() => {
            q.forEach((t, u) => q.set(u, !1));
        }, [l]), e.useEffect(() => {
            !l && !q.size && m && m();
        }, [l]), 'popLayout' === p && (j = e.createElement(h.PopChild, { isPresent: l }, j)), e.createElement(f.PresenceContext.Provider, { value: s }, j);
    };
    function _j() {
        return new Map();
    }
}), b.register('.....', function (c, d) {
    a(c.exports, 'PopChild', function () {
        return _g;
    });
    var e = b('.....');
    e = b('.....');
    class f extends e.Component {
        getSnapshotBeforeUpdate(g) {
            const h = this.props.childRef.current;
            if (h && g.isPresent && !this.props.isPresent) {
                const i = this.props.sizeRef.current;
                i.height = h.offsetHeight || 0, i.width = h.offsetWidth || 0, i.top = h.offsetTop, i.left = h.offsetLeft;
            }
            return null;
        }
        componentDidUpdate() {
        }
        render() {
            return this.props.children;
        }
    }
    function _g({
        children: h,
        isPresent: i
    }) {
        const j = (0, e.useId)(), k = (0, e.useRef)(null), l = (0, e.useRef)({
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
            } = _g.current;
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
            sizeRef: _g
        }, e.cloneElement(h, { ref: k }));
    }
}), b.register('.....', function (c, d) {
    a(c.exports, 'useTimeoutWhen', function () {
        return _f;
    });
    var e = b('.....');
    function _f(g, h, i) {
        void 0 === h && (h = 0), void 0 === i && (i = !0);
        var j = (0, e.useRef)();
        function k() {
            j.current && j.current();
        }
        (0, e.useEffect)(function () {
            j.current = g;
        }), (0, e.useEffect)(function () {
            if (i) {
                if ('undefined' != typeof window) {
                    var l = window.setTimeout(k, h);
                    return function () {
                        window.clearTimeout(l);
                    };
                }
                console.warn('useTimeoutWhen: window is undefined.');
            }
        }, [i]);
    }
}), b.register('.....', function (c, d) {
    a(c.exports, 'useMotionValue', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    function _i(j) {
        const k = (0, h.useConstant)(() => (0, f.motionValue)(j)), {isStatic: l} = (0, e.useContext)(g.MotionConfigContext);
        if (l) {
            const [, m] = (0, e.useState)(j);
            (0, e.useEffect)(() => k.on('change', m), []);
        }
        return k;
    }
}), b.register('.....', function (c, d) {
    c.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
    };
});