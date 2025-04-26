function a(a, b, n, o) {
    Object.defineProperty(a, b, {
        get: n,
        set: o,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('PLvTJ', function(n, o) {
    var c;
    c = n.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(n.exports, 'default', function() {
        return l;
    });
    var d = b('8kSQZ'),
        e = b('4/f+U'),
        f = b('uPP4W'),
        g = b('jh162'),
        h = b('OK62W'),
        i = b('pd99Q'),
        j = b('gSUVO'),
        k = b('jUuqL');
    var l = a => {
        const [m, n] = f.useState((0, e.shuffle)(a.questions.map(a => a._id))), [o, p] = f.useState(0), [q, r] = f.useState({
            ...a.questions.find(a => a._id === m[o]),
            answers: (0, e.shuffle)(a.questions.find(a => a._id === m[o]).answers)
        }), [s, t] = f.useState(), [u, v] = f.useState(!1);
        f.useEffect(() => {
            m.length - 1 === o && n((0, e.shuffle)(a.questions.map(a => a._id)));
        }, [
            m.length,
            o
        ]), f.useEffect(() => {
            k.GimkitLiveQuestionDeviceSounds.correct.load(), k.GimkitLiveQuestionDeviceSounds.incorrect.load(), k.GimkitLiveQuestionDeviceSounds.click.load();
        }, []);
        const w = f.useMemo(() => {
            var x;
            return (null == s || null === (x = s.answers) || void 0 === x ? void 0 : x.find(x => x.correct)) || {
                _id: 'no_correct',
                text: 'No Correct Answer',
                correct: !0
            };
        }, [s]);
        return (0, d.jsx)('div', {
            className: 'maxAll',
            style: {
                fontFamily: j.Fonts.ProductSans,
                background: '#303f9f',
                userSelect: 'none',
                overflow: 'hidden'
            },
            children: (0, d.jsx)(h.default, {
                ecc: (0, g.EncryptData)(q, q._id),
                lastQuestion: s,
                lastQuestionCorrectAnswer: w,
                lastQuestionAnsweredCorrect: u,
                onQuestionAnswered: n => {
                    t(q);
                    let x = o + 1;
                    x >= m.length && (x = 0), p(x);
                    const y = a.questions.find(a => a._id === m[x]);
                    r({
                        ...y,
                        answers: (0, e.shuffle)(y.answers)
                    });
                    const z = (0, i.isQuestionCorrect)(q, n);
                    return v(z), z;
                },
                correctSound: k.GimkitLiveQuestionDeviceSounds.correct,
                incorrectSound: k.GimkitLiveQuestionDeviceSounds.incorrect,
                onActionSound: k.GimkitLiveQuestionDeviceSounds.click,
                textShownWhenAnsweringCorrectly: 'Correct!',
                textShownWhenAnsweringIncorrectly: 'Incorrect!',
                customCorrectTextAnimation: {
                    className: 'animated slideInDown',
                    duration: 0.4
                }
            })
        });
    };
}), b.register('jUuqL', function(n, c) {
    a(n.exports, 'GimkitLiveQuestionDeviceSounds', function() {
        return e;
    });
    var c = b('6yrsF'),
        d = b('JJQ0+');
    const e = {
        correct: new(0, c.Howl)({
            src: [(0, d.default)('devices/gimkit_live_question/sounds/correct.mp3')],
            volume: 0.7,
            preload: !1
        }),
        correctCash: new(0, c.Howl)({
            src: [(0, d.default)('devices/gimkit_live_question/sounds/correct_cash.mp3')],
            preload: !1
        }),
        incorrect: new(0, c.Howl)({
            src: [(0, d.default)('devices/gimkit_live_question/sounds/incorrect.mp3')],
            preload: !1
        }),
        click: new(0, c.Howl)({
            src: [(0, d.default)('devices/gimkit_live_question/sounds/click.mp3')],
            preload: !1
        })
    };
}), b.register('JJQ0+', function(b, n) {
    let c;
    a(b.exports, 'default', function() {
        return d;
    });
    var d = a => {
        const e = (() => {
            var f;
            if (c)
                return c;
            const g = null === (f = document.querySelector('meta[property="cdn-map-assets-url"]')) || void 0 === f ? void 0 : f.getAttribute('content');
            return void 0 !== g && '$CDN_MAP_ASSETS_URL' !== g ? (c = g, c) : '';
        })();
        return a.startsWith('/assets/map') ? `${ e }${ a }` : `${ e }/assets/map/${ a }`;
    };
}), b.register('FgarE', function(n, o) {
    a(n.exports, 'AnimatePresence', function() {
        return k;
    });
    var c = b('uPP4W'),
        d = (c = b('uPP4W'), b('Ibf8h')),
        e = b('2T4Wv'),
        f = b('qYSnM'),
        g = b('am8F9'),
        h = b('/26CJ'),
        i = b('SDdrM');
    const j = a => a.key || '';
    const k = ({
        children: l,
        custom: m,
        initial: n = !0,
        onExitComplete: o,
        exitBeforeEnter: p,
        presenceAffectsLayout: q = !0,
        mode: r = 'sync'
    }) => {
        p && (r = 'wait');
        let [s] = (0, d.useForceUpdate)();
        const t = (0, c.useContext)(g.LayoutGroupContext).forceRender;
        t && (s = t);
        const u = (0, e.useIsMounted)(),
            v = function(l) {
                const w = [];
                return c.Children.forEach(l, l => {
                    (0, c.isValidElement)(l) && w.push(l);
                }), w;
            }(l);
        let w = x;
        const y = new Set(),
            z = (0, c.useRef)(w),
            A = (0, c.useRef)(new Map()).current,
            B = (0, c.useRef)(!0);
        if ((0, h.useIsomorphicLayoutEffect)(() => {
                B.current = !1,
                    function(l, m) {
                        l.forEach(l => {
                            const C = j(l);
                            m.set(C, l);
                        });
                    }(x, A), z.current = w;
            }), (0, i.useUnmountEffect)(() => {
                B.current = !0, A.clear(), y.clear();
            }), B.current)
            return c.createElement(c.Fragment, null, w.map(l => c.createElement(f.PresenceChild, {
                key: j(l),
                isPresent: !0,
                initial: !!n && void 0,
                presenceAffectsLayout: q,
                mode: r
            }, l)));
        w = [...w];
        const C = z.current.map(j),
            D = x.map(j),
            E = C.length;
        for (let F = 0; F < E; F++) {
            const G = C[F]; -
            1 === D.indexOf(G) && y.add(G);
        }
        return 'wait' === r && y.size && (w = []), y.forEach(F => {
            if (-1 !== D.indexOf(F))
                return;
            const G = A.get(F);
            if (!G)
                return;
            const H = C.indexOf(F);
            w.splice(H, 0, c.createElement(f.PresenceChild, {
                key: j(G),
                isPresent: !1,
                onExitComplete: () => {
                    A.delete(F), y.delete(F);
                    const I = z.current.findIndex(I => I.key === F);
                    if (z.current.splice(I, 1), !y.size) {
                        if (z.current = x, !1 === u.current)
                            return;
                        s(), o && o();
                    }
                },
                custom: m,
                presenceAffectsLayout: q,
                mode: r
            }, G));
        }), w = w.map(F => {
            const G = F.key;
            return y.has(G) ? F : c.createElement(f.PresenceChild, {
                key: j(F),
                isPresent: !0,
                presenceAffectsLayout: q,
                mode: r
            }, F);
        }), c.createElement(c.Fragment, null, y.size ? w : w.map(F => (0, c.cloneElement)(F)));
    };
}), b.register('Ibf8h', function(i, j) {
    a(i.exports, 'useForceUpdate', function() {
        return f;
    });
    var c = b('PZ0qk'),
        d = b('uPP4W'),
        e = b('2T4Wv');

    function f() {
        const g = (0, e.useIsMounted)(),
            [h, i] = (0, d.useState)(0),
            j = (0, d.useCallback)(() => {
                g.current && i(h + 1);
            }, [h]);
        return [
            (0, d.useCallback)(() => c.sync.postRender(j), [j]),
            h
        ];
    }
}), b.register('2T4Wv', function(j, k) {
    a(j.exports, 'useIsMounted', function() {
        return e;
    });
    var c = b('uPP4W'),
        d = b('/26CJ');

    function e() {
        const f = (0, c.useRef)(!1);
        return (0, d.useIsomorphicLayoutEffect)(() => (f.current = !0, () => {
            f.current = !1;
        }), []), f;
    }
}), b.register('qYSnM', function(j, k) {
    a(j.exports, 'PresenceChild', function() {
        return g;
    });
    var c = b('uPP4W'),
        d = (c = b('uPP4W'), b('5vWXo')),
        e = b('W07Lg'),
        f = b('orWap');
    const g = ({
        children: h,
        initial: i,
        isPresent: j,
        onExitComplete: k,
        custom: l,
        presenceAffectsLayout: m,
        mode: n
    }) => {
        const o = (0, e.useConstant)(o),
            p = (0, c.useId)(),
            q = (0, c.useMemo)(() => ({
                id: p,
                initial: i,
                isPresent: j,
                custom: l,
                onExitComplete: h => {
                    o.set(h, !0);
                    for (const r of o.values())
                        if (!r)
                            return;
                    k && k();
                },
                register: h => (o.set(h, !1), () => o.delete(h))
            }), m ? void 0 : [j]);
        return (0, c.useMemo)(() => {
            o.forEach((h, i) => o.set(i, !1));
        }, [j]), c.useEffect(() => {
            !j && !o.size && k && k();
        }, [j]), 'popLayout' === n && (h = c.createElement(f.PopChild, {
            isPresent: j
        }, h)), c.createElement(d.PresenceContext.Provider, {
            value: q
        }, h);
    };

    function o() {
        return new Map();
    }
}), b.register('orWap', function(h, i) {
    a(h.exports, 'PopChild', function() {
        return e;
    });
    var c = b('uPP4W');
    c = b('uPP4W');
    class d extends c.Component {
        getSnapshotBeforeUpdate(a) {
            const e = this.props.childRef.current;
            if (e && a.isPresent && !this.props.isPresent) {
                const f = this.props.sizeRef.current;
                f.height = e.offsetHeight || 0, f.width = e.offsetWidth || 0, f.top = e.offsetTop, f.left = e.offsetLeft;
            }
            return null;
        }
        componentDidUpdate() {}
        render() {
            return this.props.children;
        }
    }

    function e({
        children: f,
        isPresent: g
    }) {
        const h = (0, c.useId)(),
            i = (0, c.useRef)(null),
            j = (0, c.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0
            });
        return (0, c.useInsertionEffect)(() => {
            const {
                width: k,
                height: l,
                top: m,
                left: n
            } = j.current;
            if (g || !i.current || !k || !l)
                return;
            i.current.dataset.motionPopId = h;
            const o = document.createElement('style');
            return document.head.appendChild(o), o.sheet && o.sheet.insertRule(`\n          [data-motion-pop-id="${ h }"] {\n            position: absolute !important;\n            width: ${ k }px !important;\n            height: ${ l }px !important;\n            top: ${ m }px !important;\n            left: ${ n }px !important;\n          }\n        `), () => {
                document.head.removeChild(o);
            };
        }, [g]), c.createElement(d, {
            isPresent: g,
            childRef: i,
            sizeRef: j
        }, c.cloneElement(f, {
            ref: i
        }));
    }
}), b.register('WRy6v', function(i, e) {
    a(i.exports, 'useTimeoutWhen', function() {
        return d;
    });
    var c = b('uPP4W');

    function d(a, b, i) {
        void 0 === b && (b = 0), void 0 === i && (i = !0);
        var e = (0, c.useRef)();

        function f() {
            e.current && e.current();
        }
        (0, c.useEffect)(function() {
            e.current = a;
        }), (0, c.useEffect)(function() {
            if (i) {
                if ('undefined' != typeof window) {
                    var g = window.setTimeout(f, b);
                    return function() {
                        window.clearTimeout(g);
                    };
                }
                console.warn('useTimeoutWhen: window is undefined.');
            }
        }, [i]);
    }
}), b.register('FNaij', function(i, r) {
    a(i.exports, 'useMotionValue', function() {
        return g;
    });
    var c = b('uPP4W'),
        d = b('G27XW'),
        e = b('PdvoJ'),
        f = b('W07Lg');

    function g(a) {
        const h = (0, f.useConstant)(() => (0, d.motionValue)(a)),
            {
                isStatic: i
            } = (0, c.useContext)(e.MotionConfigContext);
        if (i) {
            const [, j] = (0, c.useState)(a);
            (0, c.useEffect)(() => h.on('change', j), []);
        }
        return h;
    }
}), b.register('FV1v91', function(a, b) {
    a.exports = function(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    };
});