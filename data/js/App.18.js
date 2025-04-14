function e(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("65U8m", (function(n, r) {
    var a;
    a = n.exports, Object.defineProperty(a, "__esModule", {
        value: !0,
        configurable: !0
    }), e(n.exports, "ANIMATION_DURATION", (function() {
        return h
    })), e(n.exports, "default", (function() {
        return v
    }));
    var o = t("hxEiv"),
        i = t("fywoC"),
        l = t("drk2x"),
        s = t("2FDaO"),
        d = t("6vbUb"),
        c = t("5OQ4z"),
        u = t("dmyzc"),
        f = t("7tLrB"),
        x = t("d2bV7"),
        m = t("cPghx");
    let p, y, g = e => e;
    const h = .3;
    var v = (0, x.withDeviceUIWrapper)((e => {
        const t = i.useCallback((() => {
            e.closableByUser && e.close()
        }), [e.closableByUser]);
        (0, c.default)(Phaser.Input.Keyboard.KeyCodes.ESC, t, [t]);
        return (0, o.jsx)(b, {
            children: (0, o.jsx)(C, {
                initial: {
                    background: "rgba(0,0,0,0)"
                },
                animate: {
                    background: "rgba(0,0,0,0.7)"
                },
                exit: {
                    background: "rgba(0,0,0,0)"
                },
                transition: {
                    duration: h
                },
                children: (() => {
                    const n = {
                        ...e,
                        isBanner: e.style === f.CodeUIStyle.banner,
                        close: t,
                        code: e.code
                    };
                    return (0, o.jsx)(l.default, {
                        ...n
                    })
                })()
            })
        })
    }));
    const b = (0, s.default)(u.default).attrs({
            className: "maxAll"
        })(p || (p = g`
  overflow: hidden;
  z-index: ${0};
`), m.default.primaryContent),
        C = (0, s.default)(d.motion.div).attrs({
            className: "maxAll"
        })(y || (y = g``))
})), t.register("drk2x", (function(n, r) {
    e(n.exports, "default", (function() {
        return v
    }));
    var a = t("hxEiv"),
        o = t("fywoC"),
        i = t("6vbUb"),
        l = t("5JgWp"),
        s = t("2FDaO"),
        d = t("65U8m"),
        c = t("9t86X"),
        u = t("dSzUP"),
        f = t("iMOcM"),
        x = t("cNwrB");
    let m, p, y = e => e;
    const g = {
            y: " 100%",
            opacity: 0
        },
        h = {
            y: "0%",
            opacity: 1
        };
    var v = e => {
        const t = (0, l.useIsPresent)(),
            [n, r] = (0, f.useBoolean)(!1),
            i = (0, x.GetContrastColor)(e.defaultBackgroundColor),
            s = o.useMemo((() => {
                let t = {
                    background: e.defaultBackgroundColor,
                    color: i,
                    fontFamily: e.defaultFontFamily
                };
                if (e.isBanner) {
                    const e = {
                        padding: "30px 40px",
                        width: "100%",
                        maxWidth: "100%",
                        borderRadius: 0
                    };
                    return {
                        ...t,
                        ...e
                    }
                }
                return {
                    ...t,
                    padding: "40px 30px",
                    width: "90%",
                    maxWidth: 650,
                    borderRadius: 5
                }
            }), [e.defaultBackgroundColor, e.isBanner]);
        return (0, a.jsxs)(b, {
            onClick: () => {
                t && n && e.close()
            },
            style: e.isBanner ? {
                alignItems: "flex-end",
                justifyContent: "center"
            } : {
                justifyContent: "center",
                alignItems: "center"
            },
            children: [(0, a.jsx)(C, {
                initial: g,
                animate: h,
                exit: g,
                transition: {
                    duration: d.ANIMATION_DURATION,
                    ease: "easeOut"
                },
                onClick: e => e.stopPropagation(),
                onAnimationComplete: r,
                style: s,
                children: (0, a.jsx)(c.default, {
                    ...e
                })
            }), e.closableByUser ? (0, a.jsx)(u.default, {
                onClick: e.close
            }) : null]
        })
    };
    const b = s.default.div.attrs({
            className: "maxAll flex"
        })(m || (m = y``)),
        C = (0, s.default)(i.motion.div).attrs({
            className: "medium-shadow flex-column vc scroll-y"
        })(p || (p = y`
  max-height: 80%;
`))
})), t.register("9t86X", (function(n, r) {
    e(n.exports, "default", (function() {
        return y
    }));
    var a = t("hxEiv");
    t("fywoC");
    var o = t("2FDaO"),
        i = t("9MBrQ"),
        l = t("i3GMX"),
        s = t("aQuqp"),
        d = t("dz4Fv"),
        c = t("lb1cB"),
        u = t("9hy6K");
    let f, x, m, p = e => e;
    var y = e => {
        const t = () => (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("div", {
                style: e.isBanner ? void 0 : {
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    flexDirection: "column"
                },
                children: (0, a.jsx)(v, {
                    children: e.code ? (0, a.jsx)(l.LiveProvider, {
                        noInline: !0,
                        code: e.code,
                        scope: {
                            MapButton: s.default,
                            CallAction: d.CallAction,
                            usePropertyValue: c.usePropertyValue,
                            useItemAmount: u.useItemAmount
                        },
                        children: (0, a.jsx)(l.LivePreview, {})
                    }) : i.default.emptyMessage
                })
            })
        });
        return (0, a.jsx)(a.Fragment, {
            children: e.isBanner ? (0, a.jsx)(g, {
                children: t()
            }) : (0, a.jsx)(h, {
                children: t()
            })
        })
    };
    const g = o.default.div.attrs({
            className: "maxWidth flex vc"
        })(f || (f = p`
  width: 100%;
  display: flex;
  justify-content: space-between;
`)),
        h = o.default.div.attrs({
            className: "maxWidth flex-column vc"
        })(x || (x = p``)),
        v = o.default.div(m || (m = p`
  font-size: 24px;
  margin: 6px;
`))
})), t.register("9MBrQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        emptyMessage: "Nothing in here...yet! End the game and modify this device to include your content."
    }
})), t.register("7tLrB", (function(t, n) {
    let r;
    var a;
    e(t.exports, "CodeUIStyle", (function() {
        return r
    })), (a = r || (r = {})).modal = "modal", a.banner = "banner"
}));