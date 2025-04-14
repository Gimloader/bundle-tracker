function e(e) {
    return e && e.__esModule ? e.default : e
}

function t(e, t, a, i) {
    Object.defineProperty(e, t, {
        get: a,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}
var a = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
a.register("3Cmfq", (function(i, n) {
    var l;
    l = i.exports, Object.defineProperty(l, "__esModule", {
        value: !0,
        configurable: !0
    }), t(i.exports, "default", (function() {
        return y
    }));
    var r = a("hxEiv"),
        o = a("93yIm"),
        c = a("fywoC"),
        d = a("c3ah8"),
        s = a("2FDaO"),
        u = a("lKmIF"),
        f = a("cPghx"),
        m = a("5OQ4z"),
        h = a("dmyzc"),
        x = a("2ufaK"),
        C = a("5QrWq"),
        p = a("iBmJM"),
        g = a("R1yf5"),
        M = a("jjJi7"),
        j = a("jrUx4"),
        w = a("51tlx");
    let U, v, b = e => e;
    var y = () => {
        const [t, a] = c.useState(!0);
        return (0, m.default)(e(d).Input.Keyboard.KeyCodes.SPACE, (() => a((e => !e)))), t ? (0, r.jsx)(S, {
            children: (0, r.jsxs)(_, {
                children: [(0, r.jsx)("h2", {
                    children: "Cinematic Mode"
                }), (0, r.jsxs)("div", {
                    className: "flex-column",
                    children: [(0, r.jsx)(o.default, {
                        onClick: M.CinematicModeUtil_StopFocusMainCharacter,
                        children: "Stop Focus Main Character"
                    }), (0, r.jsx)(o.default, {
                        onClick: g.CinematicModeUtil_StartFocusMainCharacter,
                        children: "Start Focus Main Character"
                    }), (0, r.jsx)(o.default, {
                        onClick: p.CinematicModeUtil_ShowMainCharacter,
                        children: "Show Main Character"
                    }), (0, r.jsx)(o.default, {
                        onClick: x.CinematicModeUtil_HideMainCharacter,
                        children: "Hide Main Character"
                    }), (0, r.jsx)(o.default, {
                        onClick: C.CinematicModeUtil_ShowNametags,
                        children: "Show Nametags"
                    }), (0, r.jsx)(o.default, {
                        onClick: C.CinematicModeUtil_HideNametags,
                        children: "Hide Nametags"
                    }), (0, r.jsx)(o.default, {
                        onClick: j.CinematicModeUtil_ShowGUI,
                        children: "Show GUI"
                    }), (0, r.jsx)(o.default, {
                        onClick: j.CinematicModeUtil_HideGUI,
                        children: "Hide GUI"
                    }), (0, r.jsx)(w.default, {})]
                })]
            })
        }) : null
    };
    const S = s.default.div.attrs({
            className: "maxAll flex"
        })(U || (U = b`
  position: absolute;
  top: 0;
  left: 0;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;
  padding-bottom: 75px;
  z-index: ${0};
`), f.default.overlayContent),
        _ = (0, s.default)(h.default)(v || (v = b`
  padding: 20px;
  background: ${0};
  border: 4px solid ${0};
  color: ${0};
`), u.default.White, u.default.Black, u.default.Black)
})), a.register("2ufaK", (function(e, i) {
    t(e.exports, "CinematicModeUtil_HideMainCharacter", (function() {
        return o
    }));
    var n = a("iRjsB"),
        l = a("fhnJp"),
        r = a("1UlqS");
    const o = () => {
        const e = (0, r.default)((0, l.default)());
        e && (e.alpha.cinematicModeAlpha = 0, n.default.me.cinematicMode.mainCharacterVisible = !1)
    }
})), a.register("5QrWq", (function(e, i) {
    t(e.exports, "CinematicModeUtil_ShowNametags", (function() {
        return l
    })), t(e.exports, "CinematicModeUtil_HideNametags", (function() {
        return r
    }));
    var n = a("iRjsB");
    const l = () => {
            n.default.me.cinematicMode.nameTagsVisible = !0
        },
        r = () => {
            n.default.me.cinematicMode.nameTagsVisible = !1
        }
})), a.register("iBmJM", (function(e, i) {
    t(e.exports, "CinematicModeUtil_ShowMainCharacter", (function() {
        return o
    }));
    var n = a("iRjsB"),
        l = a("fhnJp"),
        r = a("1UlqS");
    const o = () => {
        const e = (0, r.default)((0, l.default)());
        e && (e.alpha.cinematicModeAlpha = 1, n.default.me.cinematicMode.mainCharacterVisible = !0)
    }
})), a.register("R1yf5", (function(e, i) {
    t(e.exports, "CinematicModeUtil_StartFocusMainCharacter", (function() {
        return c
    }));
    var n = a("iRjsB"),
        l = a("fhnJp"),
        r = a("gwuwo"),
        o = a("1UlqS");
    const c = () => {
        const e = (0, o.default)((0, l.default)());
        e && ((0, r.default)().cameraHelper.startFollowingObject({
            object: e.body
        }), n.default.me.cinematicMode.followingMainCharacter = !0)
    }
})), a.register("jjJi7", (function(e, i) {
    t(e.exports, "CinematicModeUtil_StopFocusMainCharacter", (function() {
        return r
    }));
    var n = a("iRjsB"),
        l = a("gwuwo");
    const r = () => {
        (0, l.default)().cameraHelper.stopFollow(), n.default.me.cinematicMode.followingMainCharacter = !1
    }
})), a.register("jrUx4", (function(e, i) {
    t(e.exports, "CinematicModeUtil_ShowGUI", (function() {
        return l
    })), t(e.exports, "CinematicModeUtil_HideGUI", (function() {
        return r
    }));
    var n = a("iRjsB");
    const l = () => {
            n.default.me.cinematicMode.hidingGUI = !1
        },
        r = () => {
            n.default.me.cinematicMode.hidingGUI = !0
        }
})), a.register("51tlx", (function(e, i) {
    t(e.exports, "default", (function() {
        return u
    }));
    var n = a("hxEiv"),
        l = a("93yIm"),
        r = a("fC6cp"),
        o = a("5wngH"),
        c = a("fywoC"),
        d = a("8gVP7"),
        s = a("6eRTh");
    var u = () => {
        const [e, t] = c.useState(50);
        return (0, n.jsxs)("div", {
            className: "maxWidth",
            children: [(0, n.jsx)(r.default, {}), (0, n.jsx)("div", {
                className: "maxWidth flex-center",
                children: (0, n.jsx)(l.default, {
                    onClick: () => {
                        (0, d.default)({
                            x: 0,
                            y: -e
                        })
                    },
                    children: "Up"
                })
            }), (0, n.jsxs)("div", {
                className: "maxWidth flex between",
                children: [(0, n.jsx)(l.default, {
                    onClick: () => {
                        (0, d.default)({
                            x: -e,
                            y: 0
                        })
                    },
                    children: "Left"
                }), (0, n.jsx)(l.default, {
                    onClick: () => {
                        (0, d.default)({
                            x: e,
                            y: 0
                        })
                    },
                    children: "Right"
                })]
            }), (0, n.jsx)("div", {
                className: "maxWidth flex-center",
                children: (0, n.jsx)(l.default, {
                    onClick: () => {
                        (0, d.default)({
                            x: 0,
                            y: e
                        })
                    },
                    children: "Down"
                })
            }), (0, n.jsx)(o.default, {
                value: e,
                onChange: t,
                min: 1,
                max: 200,
                step: 1
            }), (0, n.jsx)(r.default, {}), (0, n.jsx)("p", {
                children: "Zoom"
            }), (0, n.jsx)(o.default, {
                onChange: e => {
                    (0, s.default)(e)
                },
                min: .2,
                max: 10,
                step: .1
            })]
        })
    }
})), a.register("8gVP7", (function(e, i) {
    t(e.exports, "default", (function() {
        return l
    }));
    var n = a("gwuwo");
    var l = e => {
        const t = (0, n.default)().cameras.main;
        t.centerOn(t.worldView.centerX + e.x, t.worldView.centerY + e.y)
    }
})), a.register("6eRTh", (function(e, i) {
    t(e.exports, "default", (function() {
        return r
    }));
    var n = a("iRjsB"),
        l = a("gwuwo");
    var r = e => {
        const t = (0, l.default)().cameras.main;
        (0, l.default)().cameraHelper.setBounds(n.default.world.width, n.default.world.height), t.setZoom(e)
    }
}));