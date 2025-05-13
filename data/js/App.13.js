function a(b) {
    return b && b.__esModule ? b.default : b;
}

function b(c, d, e, f) {
    Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function() {
        return _z;
    });
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = c('.....'),
        q = c('.....'),
        r = c('.....'),
        s = c('.....'),
        t = c('.....'),
        u = c('.....'),
        v = c('.....');
    let w, x, y = z => z;
    var _z = () => {
        const [A, B] = i.useState(!0);
        return (0, n.default)(a(j).Input.Keyboard.KeyCodes.SPACE, () => B(C => !C)), A ? (0, g.jsx)(_A, {
            children: (0, g.jsxs)(_B, {
                children: [
                    (0, g.jsx)('h2', {
                        children: 'Cinematic Mode'
                    }),
                    (0, g.jsxs)('div', {
                        className: 'flex-column',
                        children: [
                            (0, g.jsx)(h.default, {
                                onClick: t.CinematicModeUtil_StopFocusMainCharacter,
                                children: 'Stop Focus Main Character'
                            }),
                            (0, g.jsx)(h.default, {
                                onClick: s.CinematicModeUtil_StartFocusMainCharacter,
                                children: 'Start Focus Main Character'
                            }),
                            (0, g.jsx)(h.default, {
                                onClick: r.CinematicModeUtil_ShowMainCharacter,
                                children: 'Show Main Character'
                            }),
                            (0, g.jsx)(h.default, {
                                onClick: p.CinematicModeUtil_HideMainCharacter,
                                children: 'Hide Main Character'
                            }),
                            (0, g.jsx)(h.default, {
                                onClick: q.CinematicModeUtil_ShowNametags,
                                children: 'Show Nametags'
                            }),
                            (0, g.jsx)(h.default, {
                                onClick: q.CinematicModeUtil_HideNametags,
                                children: 'Hide Nametags'
                            }),
                            (0, g.jsx)(h.default, {
                                onClick: u.CinematicModeUtil_ShowGUI,
                                children: 'Show GUI'
                            }),
                            (0, g.jsx)(h.default, {
                                onClick: u.CinematicModeUtil_HideGUI,
                                children: 'Hide GUI'
                            }),
                            (0, g.jsx)(v.default, {})
                        ]
                    })
                ]
            })
        }) : null;
    };
    const _A = k.default.div.attrs({
            className: 'maxAll flex'
        })(w || (w = y`
  position: absolute;
  top: 0;
  left: 0;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;
  padding-bottom: 75px;
  z-index: ${ 0 };
`), m.default.overlayContent),
        _B = (0, k.default)(o.default)(x || (x = y`
  padding: 20px;
  background: ${ 0 };
  border: 4px solid ${ 0 };
  color: ${ 0 };
`), l.default.White, l.default.Black, l.default.Black);
}), c.register('.....', function(d, e) {
    b(d.exports, 'CinematicModeUtil_HideMainCharacter', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    const _i = () => {
        const j = (0, h.default)((0, g.default)());
        j && (j.alpha.cinematicModeAlpha = 0, f.default.me.cinematicMode.mainCharacterVisible = !1);
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'CinematicModeUtil_ShowNametags', function() {
        return _g;
    }), b(d.exports, 'CinematicModeUtil_HideNametags', function() {
        return _h;
    });
    var f = c('.....');
    const _g = () => {
            f.default.me.cinematicMode.nameTagsVisible = !0;
        },
        _h = () => {
            f.default.me.cinematicMode.nameTagsVisible = !1;
        };
}), c.register('.....', function(d, e) {
    b(d.exports, 'CinematicModeUtil_ShowMainCharacter', function() {
        return _i;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    const _i = () => {
        const j = (0, h.default)((0, g.default)());
        j && (j.alpha.cinematicModeAlpha = 1, f.default.me.cinematicMode.mainCharacterVisible = !0);
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'CinematicModeUtil_StartFocusMainCharacter', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    const _j = () => {
        const k = (0, i.default)((0, g.default)());
        k && ((0, h.default)().cameraHelper.startFollowingObject({
            object: k.body
        }), f.default.me.cinematicMode.followingMainCharacter = !0);
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'CinematicModeUtil_StopFocusMainCharacter', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    const _h = () => {
        (0, g.default)().cameraHelper.stopFollow(), f.default.me.cinematicMode.followingMainCharacter = !1;
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'CinematicModeUtil_ShowGUI', function() {
        return _g;
    }), b(d.exports, 'CinematicModeUtil_HideGUI', function() {
        return _h;
    });
    var f = c('.....');
    const _g = () => {
            f.default.me.cinematicMode.hidingGUI = !1;
        },
        _h = () => {
            f.default.me.cinematicMode.hidingGUI = !0;
        };
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _m;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....');
    var _m = () => {
        const [n, o] = j.useState(50);
        return (0, f.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, f.jsx)(h.default, {}),
                (0, f.jsx)('div', {
                    className: 'maxWidth flex-center',
                    children: (0, f.jsx)(g.default, {
                        onClick: () => {
                            (0, k.default)({
                                x: 0,
                                y: -n
                            });
                        },
                        children: 'Up'
                    })
                }),
                (0, f.jsxs)('div', {
                    className: 'maxWidth flex between',
                    children: [
                        (0, f.jsx)(g.default, {
                            onClick: () => {
                                (0, k.default)({
                                    x: -n,
                                    y: 0
                                });
                            },
                            children: 'Left'
                        }),
                        (0, f.jsx)(g.default, {
                            onClick: () => {
                                (0, k.default)({
                                    x: n,
                                    y: 0
                                });
                            },
                            children: 'Right'
                        })
                    ]
                }),
                (0, f.jsx)('div', {
                    className: 'maxWidth flex-center',
                    children: (0, f.jsx)(g.default, {
                        onClick: () => {
                            (0, k.default)({
                                x: 0,
                                y: n
                            });
                        },
                        children: 'Down'
                    })
                }),
                (0, f.jsx)(i.default, {
                    value: n,
                    onChange: o,
                    min: 1,
                    max: 200,
                    step: 1
                }),
                (0, f.jsx)(h.default, {}),
                (0, f.jsx)('p', {
                    children: 'Zoom'
                }),
                (0, f.jsx)(i.default, {
                    onChange: p => {
                        (0, l.default)(p);
                    },
                    min: 0.2,
                    max: 10,
                    step: 0.1
                })
            ]
        });
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _g;
    });
    var f = c('.....');
    var _g = h => {
        const i = (0, f.default)().cameras.main;
        i.centerOn(i.worldView.centerX + h.x, i.worldView.centerY + h.y);
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....');
    var _h = i => {
        const j = (0, g.default)().cameras.main;
        (0, g.default)().cameraHelper.setBounds(f.default.world.width, f.default.world.height), j.setZoom(i);
    };
});