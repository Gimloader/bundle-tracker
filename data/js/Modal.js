function e(e, t, a, s) {
    Object.defineProperty(e, t, {
        get: a,
        set: s,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("inu9S", (function(a, s) {
    var n;
    n = a.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), e(a.exports, "default", (function() {
        return A
    }));
    var o = t("hxEiv");
    t("fywoC");
    var r = t("6vbUb"),
        i = t("5JgWp"),
        l = t("2FDaO"),
        u = t("5j0Lk"),
        d = t("dSzUP"),
        c = t("iMOcM"),
        p = t("69SUA"),
        m = t("lJbRx"),
        f = t("cPGmn");
    let x, g, h = e => e;
    const b = {
            y: " 100%",
            opacity: 0
        },
        y = {
            y: "0%",
            opacity: 1
        };
    var A = e => {
        const t = (0, i.useIsPresent)(),
            [a, s] = (0, c.useBoolean)(!1);
        (0, f.useDidMount)((() => {
            (0, c.loadFont)("https://fonts.googleapis.com/css2?family=PT+Mono&display=swap")
        }));
        return (0, o.jsxs)(v, {
            onClick: () => {
                t && a && e.close()
            },
            children: [(0, o.jsx)(w, {
                initial: b,
                animate: y,
                exit: b,
                transition: {
                    duration: u.ANIMATION_DURATION,
                    ease: "easeOut"
                },
                onClick: e => e.stopPropagation(),
                onAnimationComplete: s,
                children: (0, o.jsx)(m.default, {
                    ...e
                })
            }), (0, o.jsx)(d.default, {
                onClick: e.close
            })]
        })
    };
    const v = l.default.div.attrs({
            className: "maxAll flex-center"
        })(x || (x = h``)),
        w = (0, l.default)(r.motion.div).attrs({
            className: "medium-shadow scroll-y"
        })(g || (g = h`
  max-height: 80%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(3px);
  padding: 45px;
  width: 90%;
  border-radius: 14px;
  max-width: 650px;
  font-family: 'PT Mono', monospace;
  font-weight: ${0};
`), p.FontWeights.Bold)
})), t.register("lJbRx", (function(a, s) {
    e(a.exports, "default", (function() {
        return x
    }));
    var n = t("hxEiv"),
        o = t("fywoC"),
        r = t("1tUw4"),
        i = t("2FDaO"),
        l = t("iMOcM"),
        u = t("aQuqp");
    let d, c, p, m, f = e => e;
    var x = e => {
        const [t, a] = o.useState(""), [s, i, d] = (0, l.useBoolean)(!1), c = () => {
            const a = t.trim();
            a.length && e.guess(a)
        };
        (0, r.useDidUpdate)((() => {
            i(), a("")
        }), [e.incorrectCounter]), o.useEffect((() => {
            e.useMaxAttempts && e.attempts >= e.maxAttempts && a("")
        }), [e.attempts, e.maxAttempts, e.useMaxAttempts]);
        const p = o.useMemo((() => {
                if (!e.useMaxAttempts) return null;
                if (e.attempts >= e.maxAttempts) return {
                    message: "No More Guesses Allowed",
                    color: "red"
                };
                const t = e.maxAttempts - e.attempts;
                return {
                    message: `${t} ${(0,l.plural)("attempt",t)} remaining`,
                    color: "yellow"
                }
            }), [e.maxAttempts, e.attempts, e.useMaxAttempts]),
            m = e.useMaxAttempts && e.attempts >= e.maxAttempts;
        return (0, n.jsxs)(g, {
            children: [(0, n.jsx)(h, {
                children: "Enter Password:"
            }), p ? (0, n.jsx)(b, {
                style: {
                    color: p.color
                },
                children: p.message
            }) : null, (0, n.jsx)(y, {
                className: s ? "animated shake" : "",
                placeholder: "Enter password here...",
                type: "text",
                autoFocus: !0,
                value: t,
                onChange: e => {
                    a(e.target.value), d()
                },
                maxLength: "64",
                onKeyDown: e => {
                    "Enter" === e.key && c()
                },
                disabled: m,
                style: m ? {} : {
                    cursor: "not-allowed"
                }
            }), (0, n.jsx)(u.default, {
                size: "small",
                type: "success",
                onClick: c,
                ariaLabel: "Submit",
                children: "Submit"
            })]
        })
    };
    const g = i.default.div.attrs({
            className: "maxWidth flex-center flex-column"
        })(d || (d = f`
  line-height: 1;
`)),
        h = i.default.div(c || (c = f`
  font-size: 26px;
`)),
        b = i.default.div(p || (p = f`
  font-size: 14px;
  margin-top: 11px;
`)),
        y = i.default.input.attrs({
            className: "maxWidth"
        })(m || (m = f`
  background: rgba(255, 255, 255, 0.1);
  border: 0px;
  border-radius: 2px;
  padding: 10px;
  font-size: 18px;
  margin-top: 22px;
  margin-bottom: 22px;
`))
})), t.register("1tUw4", (function(a, s) {
    e(a.exports, "useDidUpdate", (function() {
        return o
    }));
    var n = t("fywoC");

    function o(e, t) {
        var a = (0, n.useRef)(!1);
        void 0 === t || Array.isArray(t) ? Array.isArray(t) && 0 === t.length && console.warn("Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.") : t = [t], (0, n.useEffect)((function() {
            a.current ? e() : a.current = !0
        }), t)
    }
}));