function a(b) {
    return b && b.__esModule ? b.default : b;
}

function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('mB0CS', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _y(b.exports, 'default', function() {
        return _x;
    });
    var e = a('0hzx+'),
        f = a('ulE4q'),
        g = a('LEQ5w'),
        h = a('8WvaZ'),
        i = a('Axq+p'),
        j = a('sHRDd'),
        k = a('qr+8A'),
        l = a('ryWAy'),
        m = a('2GeW4'),
        n = a('dt6KN'),
        o = a('k3UOO'),
        p = a('47M42'),
        q = a('Lo+pk'),
        r = a('6mDv+'),
        s = a('GJw71'),
        t = a('Iq+Aq');
    let u, v, w = _b => _b;
    var _x = () => {
        const [_y, z] = g.useState(!0);
        return (0, l.default)(_b(h).Input.Keyboard.KeyCodes.SPACE, () => z(_b => !_b)), _y ? (0, e.jsx)(_y, {
            children: (0, e.jsxs)(_z, {
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
    const _y = i.default.div.attrs({
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
        _z = (0, i.default)(m.default)(v || (v = w`
  padding: 20px;
  background: ${ 0 };
  border: 4px solid ${ 0 };
  color: ${ 0 };
`), j.default.White, j.default.Black, j.default.Black);
}), a.register('dt6KN', function(_b, c) {
    _m(_b.exports, 'CinematicModeUtil_HideMainCharacter', function() {
        return _g;
    });
    var d = a('iWivW'),
        e = a('Jfada'),
        f = a('B7ZvS');
    const _g = () => {
        const h = (0, f.default)((0, e.default)());
        h && (h.alpha.cinematicModeAlpha = 0, d.default.me.cinematicMode.mainCharacterVisible = !1);
    };
}), a.register('k3UOO', function(b, c) {
    _m(b.exports, 'CinematicModeUtil_ShowNametags', function() {
        return _e;
    }), _m(b.exports, 'CinematicModeUtil_HideNametags', function() {
        return _f;
    });
    var d = a('iWivW');
    const _e = () => {
            d.default.me.cinematicMode.nameTagsVisible = !0;
        },
        _f = () => {
            d.default.me.cinematicMode.nameTagsVisible = !1;
        };
}), a.register('47M42', function(b, c) {
    _m(b.exports, 'CinematicModeUtil_ShowMainCharacter', function() {
        return _g;
    });
    var d = a('iWivW'),
        e = a('Jfada'),
        f = a('B7ZvS');
    const _g = () => {
        const h = (0, f.default)((0, e.default)());
        h && (h.alpha.cinematicModeAlpha = 1, d.default.me.cinematicMode.mainCharacterVisible = !0);
    };
}), a.register('Lo+pk', function(b, c) {
    _m(b.exports, 'CinematicModeUtil_StartFocusMainCharacter', function() {
        return _h;
    });
    var d = a('iWivW'),
        e = a('Jfada'),
        f = a('D5xLI'),
        g = a('B7ZvS');
    const _h = () => {
        const i = (0, g.default)((0, e.default)());
        i && ((0, f.default)().cameraHelper.startFollowingObject({
            object: i.body
        }), d.default.me.cinematicMode.followingMainCharacter = !0);
    };
}), a.register('6mDv+', function(b, c) {
    _m(b.exports, 'CinematicModeUtil_StopFocusMainCharacter', function() {
        return _f;
    });
    var d = a('iWivW'),
        e = a('D5xLI');
    const _f = () => {
        (0, e.default)().cameraHelper.stopFollow(), d.default.me.cinematicMode.followingMainCharacter = !1;
    };
}), a.register('GJw71', function(b, c) {
    _m(b.exports, 'CinematicModeUtil_ShowGUI', function() {
        return _e;
    }), _m(b.exports, 'CinematicModeUtil_HideGUI', function() {
        return _f;
    });
    var d = a('iWivW');
    const _e = () => {
            d.default.me.cinematicMode.hidingGUI = !1;
        },
        _f = () => {
            d.default.me.cinematicMode.hidingGUI = !0;
        };
}), a.register('Iq+Aq', function(b, c) {
    _m(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('fmVdR'),
        g = a('80XJ3'),
        h = a('LEQ5w'),
        i = a('oPcwH'),
        j = a('CNpvw');
    var _k = () => {
        const [l, _m] = h.useState(50);
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
                    onChange: _m,
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
}), a.register('oPcwH', function(b, c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('D5xLI');
    var _e = b => {
        const _f = (0, d.default)().cameras.main;
        _f.centerOn(_f.worldView.centerX + b.x, _f.worldView.centerY + b.y);
    };
}), a.register('CNpvw', function(b, c) {
    _g(b.exports, 'default', function() {
        return _f;
    });
    var d = a('iWivW'),
        e = a('D5xLI');
    var _f = b => {
        const _g = (0, e.default)().cameras.main;
        (0, e.default)().cameraHelper.setBounds(d.default.world.width, d.default.world.height), _g.setZoom(b);
    };
});