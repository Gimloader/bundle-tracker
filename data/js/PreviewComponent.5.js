function e(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("bhRUa", (function(n, r) {
    var o;
    o = n.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(n.exports, "default", (function() {
        return p
    }));
    var s = t("hxEiv"),
        i = t("cmvpZ"),
        c = t("fywoC"),
        u = t("jcI11"),
        f = t("r8ulO"),
        a = t("i08pn"),
        l = t("69SUA"),
        d = t("la0Yc");
    var p = e => {
        const [t, n] = c.useState((0, i.shuffle)(e.questions.map((e => e._id)))), [r, o] = c.useState(0), [p, m] = c.useState({
            ...e.questions.find((e => e._id === t[r])),
            answers: (0, i.shuffle)(e.questions.find((e => e._id === t[r])).answers)
        }), [h, v] = c.useState(), [w, y] = c.useState(!1);
        c.useEffect((() => {
            t.length - 1 === r && n((0, i.shuffle)(e.questions.map((e => e._id))))
        }), [t.length, r]), c.useEffect((() => {
            d.GimkitLiveQuestionDeviceSounds.correct.load(), d.GimkitLiveQuestionDeviceSounds.incorrect.load(), d.GimkitLiveQuestionDeviceSounds.click.load()
        }), []);
        const C = c.useMemo((() => {
            var e;
            return (null == h || null === (e = h.answers) || void 0 === e ? void 0 : e.find((e => e.correct))) || {
                _id: "no_correct",
                text: "No Correct Answer",
                correct: !0
            }
        }), [h]);
        return (0, s.jsx)("div", {
            className: "maxAll",
            style: {
                fontFamily: l.Fonts.ProductSans,
                background: "#303f9f",
                userSelect: "none",
                overflow: "hidden"
            },
            children: (0, s.jsx)(f.default, {
                ecc: (0, u.EncryptData)(p, p._id),
                lastQuestion: h,
                lastQuestionCorrectAnswer: C,
                lastQuestionAnsweredCorrect: w,
                onQuestionAnswered: n => {
                    v(p);
                    let s = r + 1;
                    s >= t.length && (s = 0), o(s);
                    const c = e.questions.find((e => e._id === t[s]));
                    m({
                        ...c,
                        answers: (0, i.shuffle)(c.answers)
                    });
                    const u = (0, a.isQuestionCorrect)(p, n);
                    return y(u), u
                },
                correctSound: d.GimkitLiveQuestionDeviceSounds.correct,
                incorrectSound: d.GimkitLiveQuestionDeviceSounds.incorrect,
                onActionSound: d.GimkitLiveQuestionDeviceSounds.click,
                textShownWhenAnsweringCorrectly: "Correct!",
                textShownWhenAnsweringIncorrectly: "Incorrect!",
                customCorrectTextAnimation: {
                    className: "animated slideInDown",
                    duration: .4
                }
            })
        })
    }
})), t.register("la0Yc", (function(n, r) {
    e(n.exports, "GimkitLiveQuestionDeviceSounds", (function() {
        return i
    }));
    var o = t("6yrsF"),
        s = t("alREA");
    const i = {
        correct: new(0, o.Howl)({
            src: [(0, s.default)("devices/gimkit_live_question/sounds/correct.mp3")],
            volume: .7,
            preload: !1
        }),
        correctCash: new(0, o.Howl)({
            src: [(0, s.default)("devices/gimkit_live_question/sounds/correct_cash.mp3")],
            preload: !1
        }),
        incorrect: new(0, o.Howl)({
            src: [(0, s.default)("devices/gimkit_live_question/sounds/incorrect.mp3")],
            preload: !1
        }),
        click: new(0, o.Howl)({
            src: [(0, s.default)("devices/gimkit_live_question/sounds/click.mp3")],
            preload: !1
        })
    }
})), t.register("alREA", (function(t, n) {
    let r;
    e(t.exports, "default", (function() {
        return o
    }));
    var o = e => {
        const t = (() => {
            var e;
            if (r) return r;
            const t = null === (e = document.querySelector('meta[property="cdn-map-assets-url"]')) || void 0 === e ? void 0 : e.getAttribute("content");
            return void 0 !== t && "$CDN_MAP_ASSETS_URL" !== t ? (r = t, r) : ""
        })();
        return e.startsWith("/assets/map") ? `${t}${e}` : `${t}/assets/map/${e}`
    }
})), t.register("8XRIE", (function(n, r) {
    e(n.exports, "AnimatePresence", (function() {
        return d
    }));
    var o = t("fywoC"),
        s = (o = t("fywoC"), t("1kM6N")),
        i = t("e54WO"),
        c = t("aWca5"),
        u = t("4yEJY"),
        f = t("ib4tF"),
        a = t("fLHag");
    const l = e => e.key || "";
    const d = ({
        children: e,
        custom: t,
        initial: n = !0,
        onExitComplete: r,
        exitBeforeEnter: d,
        presenceAffectsLayout: p = !0,
        mode: m = "sync"
    }) => {
        d && (m = "wait");
        let [h] = (0, s.useForceUpdate)();
        const v = (0, o.useContext)(u.LayoutGroupContext).forceRender;
        v && (h = v);
        const w = (0, i.useIsMounted)(),
            y = function(e) {
                const t = [];
                return o.Children.forEach(e, (e => {
                    (0, o.isValidElement)(e) && t.push(e)
                })), t
            }(e);
        let C = y;
        const g = new Set,
            x = (0, o.useRef)(C),
            E = (0, o.useRef)(new Map).current,
            S = (0, o.useRef)(!0);
        if ((0, f.useIsomorphicLayoutEffect)((() => {
                S.current = !1,
                    function(e, t) {
                        e.forEach((e => {
                            const n = l(e);
                            t.set(n, e)
                        }))
                    }(y, E), x.current = C
            })), (0, a.useUnmountEffect)((() => {
                S.current = !0, E.clear(), g.clear()
            })), S.current) return o.createElement(o.Fragment, null, C.map((e => o.createElement(c.PresenceChild, {
            key: l(e),
            isPresent: !0,
            initial: !!n && void 0,
            presenceAffectsLayout: p,
            mode: m
        }, e))));
        C = [...C];
        const k = x.current.map(l),
            P = y.map(l),
            A = k.length;
        for (let e = 0; e < A; e++) {
            const t = k[e]; - 1 === P.indexOf(t) && g.add(t)
        }
        return "wait" === m && g.size && (C = []), g.forEach((e => {
            if (-1 !== P.indexOf(e)) return;
            const n = E.get(e);
            if (!n) return;
            const s = k.indexOf(e);
            C.splice(s, 0, o.createElement(c.PresenceChild, {
                key: l(n),
                isPresent: !1,
                onExitComplete: () => {
                    E.delete(e), g.delete(e);
                    const t = x.current.findIndex((t => t.key === e));
                    if (x.current.splice(t, 1), !g.size) {
                        if (x.current = y, !1 === w.current) return;
                        h(), r && r()
                    }
                },
                custom: t,
                presenceAffectsLayout: p,
                mode: m
            }, n))
        })), C = C.map((e => {
            const t = e.key;
            return g.has(t) ? e : o.createElement(c.PresenceChild, {
                key: l(e),
                isPresent: !0,
                presenceAffectsLayout: p,
                mode: m
            }, e)
        })), o.createElement(o.Fragment, null, g.size ? C : C.map((e => (0, o.cloneElement)(e))))
    }
})), t.register("1kM6N", (function(n, r) {
    e(n.exports, "useForceUpdate", (function() {
        return c
    }));
    var o = t("jxOGN"),
        s = t("fywoC"),
        i = t("e54WO");

    function c() {
        const e = (0, i.useIsMounted)(),
            [t, n] = (0, s.useState)(0),
            r = (0, s.useCallback)((() => {
                e.current && n(t + 1)
            }), [t]);
        return [(0, s.useCallback)((() => o.sync.postRender(r)), [r]), t]
    }
})), t.register("e54WO", (function(n, r) {
    e(n.exports, "useIsMounted", (function() {
        return i
    }));
    var o = t("fywoC"),
        s = t("ib4tF");

    function i() {
        const e = (0, o.useRef)(!1);
        return (0, s.useIsomorphicLayoutEffect)((() => (e.current = !0, () => {
            e.current = !1
        })), []), e
    }
})), t.register("aWca5", (function(n, r) {
    e(n.exports, "PresenceChild", (function() {
        return u
    }));
    var o = t("fywoC"),
        s = (o = t("fywoC"), t("5fc51")),
        i = t("8ATQJ"),
        c = t("k4UdP");
    const u = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: r,
        custom: u,
        presenceAffectsLayout: a,
        mode: l
    }) => {
        const d = (0, i.useConstant)(f),
            p = (0, o.useId)(),
            m = (0, o.useMemo)((() => ({
                id: p,
                initial: t,
                isPresent: n,
                custom: u,
                onExitComplete: e => {
                    d.set(e, !0);
                    for (const e of d.values())
                        if (!e) return;
                    r && r()
                },
                register: e => (d.set(e, !1), () => d.delete(e))
            })), a ? void 0 : [n]);
        return (0, o.useMemo)((() => {
            d.forEach(((e, t) => d.set(t, !1)))
        }), [n]), o.useEffect((() => {
            !n && !d.size && r && r()
        }), [n]), "popLayout" === l && (e = o.createElement(c.PopChild, {
            isPresent: n
        }, e)), o.createElement(s.PresenceContext.Provider, {
            value: m
        }, e)
    };

    function f() {
        return new Map
    }
})), t.register("k4UdP", (function(n, r) {
    e(n.exports, "PopChild", (function() {
        return i
    }));
    var o = t("fywoC");
    o = t("fywoC");
    class s extends o.Component {
        getSnapshotBeforeUpdate(e) {
            const t = this.props.childRef.current;
            if (t && e.isPresent && !this.props.isPresent) {
                const e = this.props.sizeRef.current;
                e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }

    function i({
        children: e,
        isPresent: t
    }) {
        const n = (0, o.useId)(),
            r = (0, o.useRef)(null),
            i = (0, o.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0
            });
        return (0, o.useInsertionEffect)((() => {
            const {
                width: e,
                height: o,
                top: s,
                left: c
            } = i.current;
            if (t || !r.current || !e || !o) return;
            r.current.dataset.motionPopId = n;
            const u = document.createElement("style");
            return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${o}px !important;\n            top: ${s}px !important;\n            left: ${c}px !important;\n          }\n        `), () => {
                document.head.removeChild(u)
            }
        }), [t]), o.createElement(s, {
            isPresent: t,
            childRef: r,
            sizeRef: i
        }, o.cloneElement(e, {
            ref: r
        }))
    }
})), t.register("dSRU0", (function(n, r) {
    e(n.exports, "useTimeoutWhen", (function() {
        return s
    }));
    var o = t("fywoC");

    function s(e, t, n) {
        void 0 === t && (t = 0), void 0 === n && (n = !0);
        var r = (0, o.useRef)();

        function s() {
            r.current && r.current()
        }(0, o.useEffect)((function() {
            r.current = e
        })), (0, o.useEffect)((function() {
            if (n) {
                if ("undefined" != typeof window) {
                    var e = window.setTimeout(s, t);
                    return function() {
                        window.clearTimeout(e)
                    }
                }
                console.warn("useTimeoutWhen: window is undefined.")
            }
        }), [n])
    }
})), t.register("2FIWZ", (function(n, r) {
    e(n.exports, "useMotionValue", (function() {
        return u
    }));
    var o = t("fywoC"),
        s = t("ajNLe"),
        i = t("lLAX0"),
        c = t("8ATQJ");

    function u(e) {
        const t = (0, c.useConstant)((() => (0, s.motionValue)(e))),
            {
                isStatic: n
            } = (0, o.useContext)(i.MotionConfigContext);
        if (n) {
            const [, n] = (0, o.useState)(e);
            (0, o.useEffect)((() => t.on("change", n)), [])
        }
        return t
    }
})), t.register("8IEkO", (function(e, t) {
    e.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}));