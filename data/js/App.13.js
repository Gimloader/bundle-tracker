function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, i) {
    Object.defineProperty(a, b, {
        get: c,
        set: i,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('zRoYL', function(i, d) {
    var d;
    d = i.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), b(i.exports, 'default', function() {
        return x;
    });
    var e = c('8kSQZ'),
        f = c('IsmrL'),
        g = c('uPP4W'),
        h = c('kneek'),
        i = c('h99Nu'),
        j = c('lmfrI'),
        k = c('wnmVt'),
        l = c('+0Tb/'),
        m = c('EefFJ'),
        n = c('d5Wdt'),
        o = c('B0dQ+'),
        p = c('wx9/K'),
        q = c('7baHg'),
        r = c('1NSjP'),
        s = c('rfJ13'),
        t = c('POpZX');
    let u, v, w = a => a;
    var x = () => {
        const [y, z] = g.useState(!0);
        return (0, l.default)(a(h).Input.Keyboard.KeyCodes.SPACE, () => z(a => !a)), y ? (0, e.jsx)(y, {
            children: (0, e.jsxs)(z, {
                children: [
                    (0, e.jsx)('h2', {
                        children: 'Cinematic Mode'
                    }),
                    (0, e.jsxs)('div', {
                        className: 'flex-column',
                        children: [
                            (0, e.jsx)(f.default, {
                                onClick: r.CinematicModeUtil_StopFocusMainCharacter,
                                children: 'Stop Focus Main Character'
                            }),
                            (0, e.jsx)(f.default, {
                                onClick: q.CinematicModeUtil_StartFocusMainCharacter,
                                children: 'Start Focus Main Character'
                            }),
                            (0, e.jsx)(f.default, {
                                onClick: p.CinematicModeUtil_ShowMainCharacter,
                                children: 'Show Main Character'
                            }),
                            (0, e.jsx)(f.default, {
                                onClick: n.CinematicModeUtil_HideMainCharacter,
                                children: 'Hide Main Character'
                            }),
                            (0, e.jsx)(f.default, {
                                onClick: o.CinematicModeUtil_ShowNametags,
                                children: 'Show Nametags'
                            }),
                            (0, e.jsx)(f.default, {
                                onClick: o.CinematicModeUtil_HideNametags,
                                children: 'Hide Nametags'
                            }),
                            (0, e.jsx)(f.default, {
                                onClick: s.CinematicModeUtil_ShowGUI,
                                children: 'Show GUI'
                            }),
                            (0, e.jsx)(f.default, {
                                onClick: s.CinematicModeUtil_HideGUI,
                                children: 'Hide GUI'
                            }),
                            (0, e.jsx)(t.default, {})
                        ]
                    })
                ]
            })
        }) : null;
    };
    const y = i.default.div.attrs({
            className: 'maxAll flex'
        })(u || (u = w`
  position: absolute;
  top: 0;
  left: 0;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;
  padding-bottom: 75px;
  z-index: ${ 0 };
`), k.default.overlayContent),
        z = (0, i.default)(m.default)(v || (v = w`
  padding: 20px;
  background: ${ 0 };
  border: 4px solid ${ 0 };
  color: ${ 0 };
`), j.default.White, j.default.Black, j.default.Black);
}), c.register('d5Wdt', function(a, i) {
    b(a.exports, 'CinematicModeUtil_HideMainCharacter', function() {
        return g;
    });
    var d = c('7Sbqr'),
        e = c('PUlKf'),
        f = c('EdRoV');
    const g = () => {
        const h = (0, f.default)((0, e.default)());
        h && (h.alpha.cinematicModeAlpha = 0, d.default.me.cinematicMode.mainCharacterVisible = !1);
    };
}), c.register('B0dQ+', function(a, i) {
    b(a.exports, 'CinematicModeUtil_ShowNametags', function() {
        return e;
    }), b(a.exports, 'CinematicModeUtil_HideNametags', function() {
        return f;
    });
    var d = c('7Sbqr');
    const e = () => {
            d.default.me.cinematicMode.nameTagsVisible = !0;
        },
        f = () => {
            d.default.me.cinematicMode.nameTagsVisible = !1;
        };
}), c.register('wx9/K', function(a, i) {
    b(a.exports, 'CinematicModeUtil_ShowMainCharacter', function() {
        return g;
    });
    var d = c('7Sbqr'),
        e = c('PUlKf'),
        f = c('EdRoV');
    const g = () => {
        const h = (0, f.default)((0, e.default)());
        h && (h.alpha.cinematicModeAlpha = 1, d.default.me.cinematicMode.mainCharacterVisible = !0);
    };
}), c.register('7baHg', function(a, i) {
    b(a.exports, 'CinematicModeUtil_StartFocusMainCharacter', function() {
        return h;
    });
    var d = c('7Sbqr'),
        e = c('PUlKf'),
        f = c('dAmf5'),
        g = c('EdRoV');
    const h = () => {
        const i = (0, g.default)((0, e.default)());
        i && ((0, f.default)().cameraHelper.startFollowingObject({
            object: i.body
        }), d.default.me.cinematicMode.followingMainCharacter = !0);
    };
}), c.register('1NSjP', function(a, i) {
    b(a.exports, 'CinematicModeUtil_StopFocusMainCharacter', function() {
        return f;
    });
    var d = c('7Sbqr'),
        e = c('dAmf5');
    const f = () => {
        (0, e.default)().cameraHelper.stopFollow(), d.default.me.cinematicMode.followingMainCharacter = !1;
    };
}), c.register('rfJ13', function(a, i) {
    b(a.exports, 'CinematicModeUtil_ShowGUI', function() {
        return e;
    }), b(a.exports, 'CinematicModeUtil_HideGUI', function() {
        return f;
    });
    var d = c('7Sbqr');
    const e = () => {
            d.default.me.cinematicMode.hidingGUI = !1;
        },
        f = () => {
            d.default.me.cinematicMode.hidingGUI = !0;
        };
}), c.register('POpZX', function(a, i) {
    b(a.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('IsmrL'),
        f = c('ExtIT'),
        g = c('5xmPL'),
        h = c('uPP4W'),
        i = c('CRNza'),
        j = c('eJhTM');
    var k = () => {
        const [l, m] = h.useState(50);
        return (0, d.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, d.jsx)(f.default, {}),
                (0, d.jsx)('div', {
                    className: 'maxWidth flex-center',
                    children: (0, d.jsx)(e.default, {
                        onClick: () => {
                            (0, i.default)({
                                x: 0,
                                y: -l
                            });
                        },
                        children: 'Up'
                    })
                }),
                (0, d.jsxs)('div', {
                    className: 'maxWidth flex between',
                    children: [
                        (0, d.jsx)(e.default, {
                            onClick: () => {
                                (0, i.default)({
                                    x: -l,
                                    y: 0
                                });
                            },
                            children: 'Left'
                        }),
                        (0, d.jsx)(e.default, {
                            onClick: () => {
                                (0, i.default)({
                                    x: l,
                                    y: 0
                                });
                            },
                            children: 'Right'
                        })
                    ]
                }),
                (0, d.jsx)('div', {
                    className: 'maxWidth flex-center',
                    children: (0, d.jsx)(e.default, {
                        onClick: () => {
                            (0, i.default)({
                                x: 0,
                                y: l
                            });
                        },
                        children: 'Down'
                    })
                }),
                (0, d.jsx)(g.default, {
                    value: l,
                    onChange: m,
                    min: 1,
                    max: 200,
                    step: 1
                }),
                (0, d.jsx)(f.default, {}),
                (0, d.jsx)('p', {
                    children: 'Zoom'
                }),
                (0, d.jsx)(g.default, {
                    onChange: l => {
                        (0, j.default)(l);
                    },
                    min: 0.2,
                    max: 10,
                    step: 0.1
                })
            ]
        });
    };
}), c.register('CRNza', function(a, i) {
    b(a.exports, 'default', function() {
        return e;
    });
    var d = c('dAmf5');
    var e = a => {
        const f = (0, d.default)().cameras.main;
        f.centerOn(f.worldView.centerX + a.x, f.worldView.centerY + a.y);
    };
}), c.register('eJhTM', function(a, i) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('7Sbqr'),
        e = c('dAmf5');
    var f = a => {
        const g = (0, e.default)().cameras.main;
        (0, e.default)().cameraHelper.setBounds(d.default.world.width, d.default.world.height), g.setZoom(a);
    };
});