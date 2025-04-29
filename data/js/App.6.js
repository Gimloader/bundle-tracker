function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('kRON/', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function() {
        return _I;
    });
    var g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('u4s09'),
        j = c('6jmvl'),
        k = c('K/2xB'),
        l = c('eLsOE'),
        m = c('3t9ce'),
        n = c('E2AMI26'),
        o = c('22RS1'),
        p = c('quE27'),
        q = c('Eh2Wh'),
        r = c('XGxA8'),
        s = c('+4oa6'),
        t = c('LPWg2'),
        u = c('/aJ3o'),
        v = c('y1oBc'),
        w = c('KYITB'),
        x = c('5kD9f'),
        y = c('uJBVq'),
        z = c('6X6JK'),
        A = c('rvVz6'),
        B = c('ZGfy1'),
        C = c('yhnQh'),
        D = c('WwvjE'),
        E = c('LihP5'),
        F = c('SxihY'),
        G = c('SkYHI');
    let H;
    var _I = (0, j.observer)(a => {
        const {
            gui: {
                none: {
                    optionsMenu: {
                        screen: J
                    }
                }
            },
            me: {
                roleLevel: K
            }
        } = (0, k.default)(), L = (0, A.useAmIGameOwner)(), [M, N, O] = (0, p.useBoolean)(!0), [P, Q] = h.useState(!0);
        (0, l.useInputBlockingUI)();
        const R = h.useMemo(() => J === s.OptionsMenuScreen.mapOptions, [J]),
            S = h.useMemo(() => J === s.OptionsMenuScreen.editing, [J]),
            T = h.useMemo(() => J === s.OptionsMenuScreen.permissions, [J]),
            U = h.useMemo(() => J === s.OptionsMenuScreen.saving, [J]),
            V = h.useMemo(() => J === s.OptionsMenuScreen.help, [J]),
            W = h.useMemo(() => J === s.OptionsMenuScreen.publishing, [J]),
            X = () => {
                a.setToHomeScreen(), _Z(s.OptionsMenuScreen.home);
            },
            Y = h.useCallback(() => {
                P ? X() : S || T || R || U || V || W || O();
            }, [
                O,
                R,
                S,
                T,
                U,
                V,
                W,
                P,
                X
            ]),
            _Z = a => (0, t.default)(a),
            $ = a => {
                (0, v.playClickSound)(), _Z(a);
            },
            ab = () => {
                _Z(s.OptionsMenuScreen.home);
            };
        return (0, g.jsx)(m.default, {
            placement: 'left',
            open: M,
            onClose: Y,
            afterOpenChange: a => {
                a && Q(!1), a || X();
            },
            width: 600,
            destroyOnClose: !0,
            children: (0, g.jsxs)(_J, {
                children: [
                    (0, g.jsx)(o.default.Title, {
                        style: {
                            fontFamily: q.Fonts.FugazOne,
                            textTransform: 'uppercase',
                            textAlign: 'center'
                        },
                        level: 1,
                        children: 'Options'
                    }),
                    (0, g.jsx)('div', {
                        style: {
                            height: 14
                        }
                    }),
                    (0, g.jsxs)(n.default, {
                        className: 'maxAll',
                        direction: 'vertical',
                        size: 14,
                        children: [
                            L ? (0, g.jsxs)(g.Fragment, {
                                children: [
                                    (0, g.jsx)(r.default, {
                                        icon: 'fas fa-sliders-v-square',
                                        title: 'Map Options',
                                        description: 'Customize teams, game duration, and who is determined as the winner',
                                        onClick: () => {
                                            (0, v.playClickSound)(), (0, x.default)(() => {
                                                _Z(s.OptionsMenuScreen.mapOptions);
                                            });
                                        }
                                    }),
                                    (0, g.jsx)(y.default, {
                                        open: R,
                                        close: ab
                                    })
                                ]
                            }) : null,
                            (0, g.jsx)(r.default, {
                                icon: 'fas fa-i-cursor',
                                title: 'Editing Options',
                                description: 'Adjust player collision, speed, and other settings to help you while editing',
                                onClick: () => $(s.OptionsMenuScreen.editing)
                            }),
                            L && !(0, C.IsTutorial)() ? (0, g.jsxs)(g.Fragment, {
                                children: [
                                    (0, g.jsx)(r.default, {
                                        icon: 'fas fa-upload',
                                        title: 'Publish',
                                        description: 'Publish your map to be played by Gimkit users from around the world!',
                                        onClick: () => $(s.OptionsMenuScreen.publishing)
                                    }),
                                    (0, g.jsx)(r.default, {
                                        icon: 'fas fa-share',
                                        title: 'Showcase & Save',
                                        description: 'Send a link to friends to have them test out your map!',
                                        onClick: () => $(s.OptionsMenuScreen.saving)
                                    }),
                                    K >= D.RoleLevelConsts.admin ? (0, g.jsx)(r.default, {
                                        icon: 'fas fa-brackets-curly',
                                        title: 'Hooks',
                                        description: 'Allow game hosts to customize your map before hopping in!',
                                        onClick: () => (0, E.default)(F.default.hooks)
                                    }) : null,
                                    (0, g.jsx)(r.default, {
                                        icon: 'fas fa-user-tag',
                                        title: 'Permissions',
                                        description: 'Control who can make changes to the map when editing collaboratively',
                                        onClick: () => $(s.OptionsMenuScreen.permissions)
                                    }),
                                    (0, g.jsx)(G.default, {
                                        open: W,
                                        close: ab
                                    }),
                                    (0, g.jsx)(u.default, {
                                        open: T,
                                        close: ab
                                    }),
                                    (0, g.jsx)(z.default, {
                                        open: U,
                                        close: ab
                                    })
                                ]
                            }) : null,
                            (0, g.jsx)(r.default, {
                                icon: 'fas fa-comment-dots',
                                title: 'Documentation & Help',
                                description: 'Get help building your map!',
                                onClick: () => $(s.OptionsMenuScreen.help)
                            }),
                            (0, g.jsx)(B.default, {
                                open: V,
                                close: ab
                            })
                        ]
                    }),
                    (0, g.jsx)(w.default, {
                        open: S,
                        close: ab
                    })
                ]
            })
        });
    });
    const _J = i.default.div.attrs({
        className: 'maxWidth'
    })(H || (H = (a => a)``));
}), c.register('XGxA8', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn'),
        g = c('22RS1');
    c('O0Kav');
    var h = c('u4s09'),
        i = c('Eh2Wh'),
        j = c('MgONH'),
        k = c('t52Ep');
    let l;
    var _m = a => {
        const {
            title: n,
            description: o
        } = a;
        return (0, f.jsxs)(_n, {
            onClick: a.onClick,
            children: [
                (0, f.jsx)('div', {
                    style: {
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: 14,
                        marginRight: 20
                    },
                    children: (0, f.jsx)(k.default, {
                        name: a.icon
                    })
                }),
                (0, f.jsxs)('div', {
                    children: [
                        (0, f.jsx)(g.default.Title, {
                            style: {
                                marginBottom: 2,
                                fontWeight: i.FontWeights.Bold
                            },
                            level: 4,
                            children: n
                        }),
                        (0, f.jsx)(g.default.Text, {
                            children: o
                        })
                    ]
                })
            ]
        });
    };
    const _n = (0, h.default)(j.VerticallyCentered).attrs({
        className: 'maxWidth'
    })(l || (l = (a => a)`
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background 0.18s ease-in-out;
  border-radius: 8px;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`));
}), c.register('LPWg2', function(d, e) {
    a(d.exports, 'default', function() {
        return _g;
    });
    var f = c('fI6of');
    var _g = a => {
        f.default.gui.none.optionsMenu.screen = a;
    };
}), c.register('/aJ3o', function(d, e) {
    a(d.exports, 'default', function() {
        return _v;
    });
    var f = c('gRbUn'),
        g = c('3t9ce'),
        h = c('E2AMI26'),
        i = c('p1B/0'),
        j = c('22RS1');
    c('O0Kav');
    var k = c('u4s09'),
        l = c('gp8Qp0'),
        m = c('HOIhZ'),
        n = c('Q6LQJ'),
        o = c('DXQir'),
        p = c('K/2xB'),
        q = c('6jmvl'),
        r = c('xmE+f');
    let s;
    const t = (0, q.observer)(a => {
            const {
                session: {
                    globalPermissions: u
                }
            } = (0, p.default)(), v = (a, v) => {
                const w = {
                    adding: u.adding,
                    removing: u.removing,
                    editing: u.editing,
                    manageCodeGrids: u.manageCodeGrids
                };
                w[a] = v, (0, r.default)(w);
            };
            return (0, f.jsxs)(g.default, {
                placement: 'left',
                open: a.open,
                onClose: a.close,
                width: 450,
                title: 'Permissions',
                children: [
                    (0, f.jsx)(j.default.Text, {
                        children: 'Set what other players collaborating with you are allowed to do! Changes are applied immediately.'
                    }),
                    (0, f.jsxs)(h.default, {
                        direction: 'vertical',
                        className: 'maxWidth',
                        size: 14,
                        style: {
                            marginTop: 22
                        },
                        children: [
                            (0, f.jsx)(_u, {
                                name: 'Adding',
                                description: `Are other players allowed to add ${ l.default.terrain.singular }, ${ l.default.prop.plural }, ${ l.default.device.plural }, and ${ l.default.wire.singular } to the map?`,
                                enabled: u.adding,
                                onChange: a => v('adding', a)
                            }),
                            (0, f.jsx)(_u, {
                                name: 'Removing',
                                description: 'Are other players allowed to remove things from the map?',
                                enabled: u.removing,
                                onChange: a => v('removing', a)
                            }),
                            (0, f.jsx)(_u, {
                                name: 'Editing',
                                description: `Are other players allowed to modify options for ${ l.default.prop.plural }, ${ l.default.device.plural }, and ${ l.default.wire.singular }?`,
                                enabled: u.editing,
                                onChange: a => v('editing', a)
                            }),
                            (0, f.jsx)(_u, {
                                name: (0, n.CapitalizeFirstLetter)(o.default.grid.plural),
                                description: `Are other players allowed to create and edit ${ o.default.grid.plural } for ${ l.default.device.plural }?`,
                                enabled: u.manageCodeGrids,
                                onChange: a => v('manageCodeGrids', a)
                            })
                        ]
                    })
                ]
            });
        }),
        _u = a => (0, f.jsxs)(_w, {
            children: [
                (0, f.jsxs)('div', {
                    style: {
                        marginRight: 35
                    },
                    children: [
                        (0, f.jsx)(j.default.Title, {
                            level: 5,
                            style: {
                                color: m.default.White
                            },
                            children: a.name
                        }),
                        (0, f.jsx)(j.default.Text, {
                            children: a.description
                        })
                    ]
                }),
                (0, f.jsx)('div', {
                    children: (0, f.jsx)(i.default, {
                        checked: a.enabled,
                        onChange: a.onChange
                    })
                })
            ]
        });
    var _v = t;
    const _w = k.default.div.attrs({
        className: 'flex between'
    })(s || (s = (a => a)`
  padding: 17px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
`));
}), c.register('gp8Qp0', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        terrain: {
            singular: 'terrain',
            plural: 'terrains'
        },
        prop: {
            singular: 'prop',
            plural: 'props'
        },
        device: {
            singular: 'device',
            plural: 'devices'
        },
        wire: {
            singular: 'wire',
            plural: 'wires'
        }
    };
}), c.register('xmE+f', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('ywRRc'),
        g = c('0v55W');
    var _h = a => {
        (0, g.default)(f.default.setGlobalPermissions, {
            adding: a.adding,
            removing: a.removing,
            editing: a.editing,
            manageCodeGrids: a.manageCodeGrids
        });
    };
}), c.register('KYITB', function(d, e) {
    a(d.exports, 'default', function() {
        return _G;
    });
    var f = c('gRbUn'),
        g = c('3t9ce'),
        h = c('u8Dt8'),
        i = c('+xIkQ'),
        j = c('E2AMI26'),
        k = c('22RS1'),
        l = c('O0Kav'),
        m = c('u4s09'),
        n = c('gp8Qp0'),
        o = c('HOIhZ'),
        p = c('6jmvl'),
        q = c('K/2xB'),
        r = c('7ER8L'),
        s = c('ELh1p'),
        t = c('cKCUz'),
        u = c('Q6LQJ'),
        v = c('wfPQ8'),
        w = c('kqK29'),
        x = c('OR/wR6'),
        y = c('FWW2T6'),
        z = c('ZvO1O'),
        A = c('heTaO');
    let B;
    const C = [
            0,
            64,
            32,
            16,
            8,
            4,
            2
        ],
        D = [{
                value: 0.25,
                name: '0.25x'
            },
            {
                value: 0.5,
                name: '0.5x'
            },
            {
                value: 1,
                name: '1x'
            },
            {
                value: 1.5,
                name: '1.5x'
            },
            {
                value: 2,
                name: '2x'
            },
            {
                value: 3,
                name: '3x'
            },
            {
                value: 3.5,
                name: '3.5x'
            },
            {
                value: 4,
                name: '4x'
            }
        ],
        E = (0, p.observer)(a => {
            const {
                editing: F,
                me: G,
                gui: H
            } = (0, q.default)();
            var I;
            const [J, K] = l.useState(null !== (I = localStorage.getItem(x.default.zonedDeviceViews)) && void 0 !== I ? I : y.ZonedDeviceDisplayOptions.bordersOnly);
            return (0, f.jsx)(g.default, {
                placement: 'left',
                open: a.open,
                onClose: a.close,
                width: 450,
                title: 'Editing Options',
                children: (0, f.jsxs)(j.default, {
                    direction: 'vertical',
                    className: 'maxWidth',
                    size: 14,
                    children: [
                        (0, f.jsx)(_F, {
                            name: 'Camera Zoom',
                            description: 'Zoom out to see more in edit mode',
                            children: (0, f.jsx)(i.default, {
                                min: 0.3,
                                max: 1.5,
                                step: 0.1,
                                className: 'maxWidth',
                                value: G.editing.preferences.cameraZoom,
                                onChange: a => {
                                    G.editing.preferences.cameraZoom = a, (0, A.default)().cameraHelper.forceRefresh();
                                }
                            })
                        }),
                        (0, f.jsx)(_F, {
                            name: 'Player Collision',
                            description: 'Disable to walk through walls & objects in edit mode',
                            children: (0, f.jsxs)(h.default, {
                                className: 'maxWidth',
                                value: G.phase,
                                onChange: a => {
                                    G.editing.preferences.phase = a, (0, r.default)(a);
                                },
                                children: [
                                    (0, f.jsx)(h.default.Option, {
                                        value: !1,
                                        children: 'On'
                                    }),
                                    (0, f.jsx)(h.default.Option, {
                                        value: !0,
                                        children: 'Off'
                                    })
                                ]
                            })
                        }),
                        (0, f.jsx)(_F, {
                            name: 'Player Speed',
                            description: 'Adjust how fast you move in edit mode',
                            children: (0, f.jsx)(h.default, {
                                className: 'maxWidth',
                                value: G.movementSpeed / s.default.normal,
                                onChange: a => {
                                    G.editing.preferences.movementSpeed = a, (0, t.default)(a);
                                },
                                children: D.map(a => (0, f.jsx)(h.default.Option, {
                                    value: a.value,
                                    children: a.name
                                }, `speed-${ a.value }`))
                            })
                        }),
                        (0, f.jsx)(_F, {
                            name: 'Grid Snap',
                            description: `When placing ${ n.default.prop.plural } & ${ n.default.device.plural }, easily align them using grid snap`,
                            children: (0, f.jsx)(h.default, {
                                className: 'maxWidth',
                                value: F.gridSnap,
                                onChange: a => F.gridSnap = a,
                                children: C.map(a => (0, f.jsx)(h.default.Option, {
                                    value: a,
                                    children: 0 === a ? 'Off' : a
                                }, `grid-snap-${ a }`))
                            })
                        }),
                        (0, f.jsx)(_F, {
                            name: 'Show Grid',
                            children: (0, f.jsxs)(h.default, {
                                className: 'maxWidth',
                                value: H.showingGrid,
                                onChange: a => {
                                    G.editing.preferences.showGrid = a, H.showingGrid = a;
                                },
                                children: [
                                    (0, f.jsx)(h.default.Option, {
                                        value: !1,
                                        children: 'Off'
                                    }),
                                    (0, f.jsx)(h.default.Option, {
                                        value: !0,
                                        children: 'On'
                                    })
                                ]
                            })
                        }),
                        (0, f.jsx)(_F, {
                            name: `Zone ${ (0, u.CapitalizeFirstLetter)(n.default.device.singular) } Display`,
                            description: `Set the appearance of ${ n.default.device.plural } that use a zone area`,
                            children: (0, f.jsxs)(h.default, {
                                className: 'maxWidth',
                                value: J,
                                onChange: a => {
                                    localStorage.setItem(x.default.zonedDeviceViews, a), K(a), (0, z.Reset)();
                                },
                                children: [
                                    (0, f.jsx)(h.default.Option, {
                                        value: y.ZonedDeviceDisplayOptions.visible,
                                        children: 'Visible'
                                    }),
                                    (0, f.jsx)(h.default.Option, {
                                        value: y.ZonedDeviceDisplayOptions.bordersOnly,
                                        children: 'Borders Only'
                                    }),
                                    (0, f.jsx)(h.default.Option, {
                                        value: y.ZonedDeviceDisplayOptions.fullyHidden,
                                        children: 'Hidden'
                                    })
                                ]
                            })
                        }),
                        (0, f.jsx)(_F, {
                            name: `${ (0, u.CapitalizeFirstLetter)(v.MemoryName) } Bar`,
                            description: `Show the ${ v.MemoryName } bar, even if ${ v.MemoryName } is below ${ w.DEFAULT_SHOW_MEMORY_AT_PERCENT }%`,
                            children: (0, f.jsxs)(h.default, {
                                className: 'maxWidth',
                                value: F.showMemoryBarAtAllTimes,
                                onChange: a => F.showMemoryBarAtAllTimes = a,
                                children: [
                                    (0, f.jsx)(h.default.Option, {
                                        value: !1,
                                        children: 'Off'
                                    }),
                                    (0, f.jsx)(h.default.Option, {
                                        value: !0,
                                        children: 'On'
                                    })
                                ]
                            })
                        })
                    ]
                })
            });
        }),
        _F = a => (0, f.jsxs)(_H, {
            children: [
                (0, f.jsxs)('div', {
                    children: [
                        (0, f.jsx)(k.default.Title, {
                            level: 5,
                            style: {
                                color: o.default.White
                            },
                            children: a.name
                        }),
                        a.description ? (0, f.jsx)(k.default.Text, {
                            children: a.description
                        }) : null
                    ]
                }),
                (0, f.jsx)('div', {
                    style: {
                        marginTop: 10
                    },
                    children: a.children
                })
            ]
        });
    var _G = E;
    const _H = m.default.div.attrs({
        className: 'maxWidth'
    })(B || (B = (a => a)`
  padding: 17px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
`));
}), c.register('OR/wR6', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        zonedDeviceViews: 'zoned-device-views'
    };
}), c.register('FWW2T6', function(d, e) {
    a(d.exports, 'ZonedDeviceDisplayOptions', function() {
        return _g;
    }), a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('OR/wR6');
    let _g;
    var h;
    (h = _g || (_g = {})).visible = 'visible', h.bordersOnly = 'bordersOnly', h.fullyHidden = 'fullyHidden';
    const i = () => {
        const j = localStorage.getItem(f.default.zonedDeviceViews);
        return j || _g.bordersOnly;
    };
    var _j = {
        shouldShow: a => i() !== _g.fullyHidden,
        shouldShowInnerZone: a => i() !== _g.bordersOnly
    };
}), c.register('5kD9f', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('fI6of'),
        g = c('OFuf70'),
        h = c('heTaO'),
        i = c('2LtPo'),
        j = c('5P0VZ'),
        k = c('llkVK'),
        l = c('Za/G/');
    var _m = a => {
        const n = (0, h.default)().worldManager.devices.allDevices.find(a => a.deviceOption.id === g.default.mapOptions),
            o = n => {
                f.default.me.editing.device.currentlyEditedDevice = {
                    id: n,
                    deviceOptionId: g.default.mapOptions
                }, a();
            };
        n ? o(n.id) : (0, i.default)({
            id: (0, l.GenerateNewDeviceId)(),
            deviceOption: (0, j.FetchDeviceOptionById)(g.default.mapOptions),
            x: 0,
            y: 0,
            name: '',
            options: {},
            state: {},
            placedByClient: !0,
            isPreview: !1,
            onPlace: a => {
                (0, k.default)({
                    id: a.id,
                    deviceTypeId: g.default.mapOptions,
                    x: a.x,
                    y: a.y,
                    name: a.name,
                    options: JSON.stringify(a.options)
                }), o(a.id);
            }
        });
    };
}), c.register('uJBVq', function(d, e) {
    a(d.exports, 'default', function() {
        return _m;
    });
    var f = c('gRbUn'),
        g = c('3t9ce');
    c('O0Kav');
    var h = c('6jmvl'),
        i = c('heTaO'),
        j = c('OFuf70'),
        k = c('lIJIq'),
        l = c('k1jd6');
    var _m = (0, h.observer)(a => {
        const {
            options: n,
            position: o,
            hooks: p
        } = (0, k.default)();
        return (0, f.jsx)(g.default, {
            placement: 'left',
            open: a.open,
            onClose: a.close,
            width: 550,
            title: 'Map Options',
            children: (() => {
                const q = (0, i.default)().worldManager.devices.allDevices.find(q => q.deviceOption.id === j.default.mapOptions);
                return q ? (0, f.jsx)(l.default, {
                    device: q,
                    deviceOption: q.deviceOption,
                    options: n,
                    position: o,
                    hooks: p
                }) : null;
            })()
        });
    });
}), c.register('6X6JK', function(d, e) {
    a(d.exports, 'default', function() {
        return _x;
    });
    var f = c('gRbUn'),
        g = c('FHjL91'),
        h = c('7ryzM2'),
        i = c('P1KtI'),
        j = c('VNuyu'),
        k = c('3t9ce'),
        l = c('aevdF'),
        m = c('Bjl070'),
        n = c('AE7vR'),
        o = c('22RS1');
    c('O0Kav');
    var p = c('0v55W'),
        q = c('ywRRc'),
        r = c('8KqQ+'),
        s = c('quE27'),
        t = (s = c('quE27'), c('Eh2Wh')),
        u = c('6jmvl'),
        v = c('K/2xB'),
        w = c('WwvjE');
    var _x = (0, u.observer)(a => {
        const {
            me: {
                roleLevel: y
            }
        } = (0, v.default)(), [z, A, B] = (0, s.useBoolean)(!1);
        return (0, f.jsxs)(k.default, {
            placement: 'left',
            open: a.open,
            onClose: a.close,
            width: 570,
            title: 'Showcase & Save',
            children: [
                (0, f.jsx)(o.default.Title, {
                    level: 4,
                    style: {
                        color: r.default.White
                    },
                    children: 'Showcase Link'
                }),
                (0, f.jsx)(o.default.Text, {
                    style: {
                        marginTop: 2
                    },
                    children: 'Generate a showcase link! Share the link with friends to have them test your map!'
                }),
                (0, f.jsx)(i.default, {
                    block: !0,
                    size: 'large',
                    type: 'primary',
                    loading: z,
                    icon: (0, f.jsx)(h.default, {}),
                    onClick: () => {
                        z || (A(), (0, s.request)({
                            url: '/api/created-map/publish-link',
                            data: {
                                id: window._mapId
                            },
                            success: a => {
                                const C = `${ (0, s.getDomain)() }/creative/showcase/${ a.id }`;
                                n.default.success({
                                    icon: (0, f.jsx)(f.Fragment, {}),
                                    footer: null,
                                    width: 550,
                                    closable: !0,
                                    maskClosable: !0,
                                    bodyStyle: {
                                        padding: 20
                                    },
                                    content: (0, f.jsxs)(f.Fragment, {
                                        children: [
                                            (0, f.jsx)(o.default.Title, {
                                                level: 4,
                                                style: {
                                                    fontWeight: t.FontWeights.Bold
                                                },
                                                children: 'Showcase Link'
                                            }),
                                            (0, f.jsxs)('div', {
                                                className: 'flex vc',
                                                style: {
                                                    marginTop: 2
                                                },
                                                children: [
                                                    (0, f.jsx)(l.default, {
                                                        type: 'text',
                                                        value: C,
                                                        readOnly: !0
                                                    }),
                                                    (0, f.jsx)(i.default, {
                                                        style: {
                                                            marginLeft: 10
                                                        },
                                                        type: 'primary',
                                                        onClick: () => {
                                                            var D;
                                                            null === navigator || void 0 === navigator || null === (D = navigator.clipboard) || void 0 === D || D.writeText(C), m.default.success('Copied to clipboard!');
                                                        },
                                                        children: 'Copy Link'
                                                    })
                                                ]
                                            }),
                                            (0, f.jsx)(j.default, {}),
                                            (0, f.jsxs)(o.default.Text, {
                                                children: [
                                                    'Your map is ready to be showcased! Share this link with others, and they can play the map you\'ve made! ',
                                                    (0, f.jsx)('br', {}),
                                                    (0, f.jsx)('br', {}),
                                                    (0, f.jsxs)('b', {
                                                        children: [
                                                            'This link expires ',
                                                            a.expirationDays,
                                                            ' ',
                                                            (0, s.plural)('day', a.expirationDays),
                                                            ' from now.'
                                                        ]
                                                    }),
                                                    (0, f.jsx)('br', {}),
                                                    (0, f.jsx)('br', {}),
                                                    'After the link expires, you can always generate a new link.'
                                                ]
                                            })
                                        ]
                                    })
                                });
                            },
                            both: B
                        }));
                    },
                    style: {
                        marginTop: 10
                    },
                    children: 'Generate Showcase Link'
                }),
                (0, f.jsx)(j.default, {}),
                (0, f.jsx)(o.default.Title, {
                    level: 4,
                    style: {
                        color: r.default.White
                    },
                    children: 'Save'
                }),
                (0, f.jsx)(o.default.Text, {
                    style: {
                        marginTop: 2
                    },
                    children: 'Maps are automatically saved every few minutes. However, you can save manually by clicking the button below!'
                }),
                (0, f.jsx)(i.default, {
                    block: !0,
                    size: 'large',
                    type: 'primary',
                    icon: (0, f.jsx)(g.default, {}),
                    onClick: () => (0, p.default)(q.default.save, {}),
                    style: {
                        marginTop: 10
                    },
                    children: 'Save Map'
                }),
                y >= w.RoleLevelConsts.admin ? (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)(j.default, {}),
                        (0, f.jsx)(i.default, {
                            block: !0,
                            size: 'large',
                            type: 'primary',
                            icon: (0, f.jsx)(g.default, {}),
                            onClick: () => (0, p.default)(q.default.publish),
                            children: 'Team Gimkit Publish'
                        })
                    ]
                }) : null
            ]
        });
    });
}), c.register('FHjL91', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('MNR6V1'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'SaveOutlined';
    var _k = g.forwardRef(j);
}), c.register('MNR6V1', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z'
                }
            }]
        },
        name: 'save',
        theme: 'outlined'
    };
}), c.register('7ryzM2', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('YVcl02'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'ShareAltOutlined';
    var _k = g.forwardRef(j);
}), c.register('YVcl02', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z'
                }
            }]
        },
        name: 'share-alt',
        theme: 'outlined'
    };
}), c.register('ZGfy1', function(d, e) {
    a(d.exports, 'default', function() {
        return _o;
    });
    var f = c('gRbUn'),
        g = c('3t9ce'),
        h = c('E2AMI26'),
        i = c('22RS1');
    c('O0Kav');
    var j = c('8KqQ+'),
        k = c('u4s09'),
        l = c('MgONH'),
        m = c('t52Ep');
    let n;
    var _o = a => (0, f.jsx)(g.default, {
        placement: 'left',
        open: a.open,
        onClose: a.close,
        width: 500,
        title: 'Documentation & Help',
        children: (0, f.jsxs)(h.default, {
            className: 'maxName',
            direction: 'vertical',
            size: 14,
            children: [
                (0, f.jsx)(_p, {
                    link: 'https://forum.creative.gimkit.com',
                    name: 'Community Forum',
                    description: 'Find answers, ask questions, and get help with your map!'
                }),
                (0, f.jsx)(_p, {
                    link: 'https://docs.creative.gimkit.com',
                    name: 'Help Docs',
                    description: 'We\'re still building out our documentation, but you can find some helpful articles here!'
                })
            ]
        })
    });
    const _p = a => (0, f.jsx)('a', {
            href: a.link,
            target: '_blank',
            children: (0, f.jsxs)(_q, {
                children: [
                    (0, f.jsxs)('div', {
                        children: [
                            (0, f.jsx)(i.default.Title, {
                                level: 4,
                                style: {
                                    color: j.default.White
                                },
                                children: a.name
                            }),
                            (0, f.jsx)(i.default.Text, {
                                style: {
                                    marginTop: 2
                                },
                                children: a.description
                            })
                        ]
                    }),
                    (0, f.jsx)('div', {
                        style: {
                            fontSize: 18,
                            marginLeft: 30
                        },
                        children: (0, f.jsx)(m.default, {
                            name: 'fas fa-external-link',
                            style: {
                                color: j.default.White
                            }
                        })
                    })
                ]
            })
        }),
        _q = (0, k.default)(l.VerticallyCentered)(n || (n = (a => a)`
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background 0.18s ease-in-out;
  border-radius: 8px;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`));
}), c.register('SkYHI', function(d, e) {
    a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn'),
        g = c('3t9ce');
    c('O0Kav');
    var h = c('rs/tl');
    var _i = a => (0, f.jsx)(g.default, {
        placement: 'left',
        open: a.open,
        onClose: a.close,
        destroyOnClose: !0,
        width: 500,
        children: (0, f.jsx)(h.default, {
            close: a.close
        })
    });
}), c.register('rs/tl', function(d, e) {
    a(d.exports, 'default', function() {
        return _s;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('lKjHC'),
        i = c('qMSe6'),
        j = c('R2nG3'),
        k = c('yruHD'),
        l = c('Ll6/N'),
        m = c('sPeAY'),
        n = c('quE27'),
        o = c('HOIhZ');
    const p = g.lazy(() => c('XV+Wh')),
        q = g.lazy(() => c('+30+2')),
        r = g.lazy(() => c('M5WLh'));
    var _s = a => {
        const [t, u, v] = (0, n.useBoolean)(!0), [w, x] = g.useState(!1), [y, z] = g.useState(), [A, B] = g.useState(), C = () => {
            u(), z(void 0), B(void 0), x(!1), (0, m.Request)({
                url: `/api/created-map/listing/creator-info/${ window._mapId }`,
                success: a => {
                    a.data && z(a.data), a.publishRequirementError && B(a.publishRequirementError);
                },
                error: a => {
                    x(!0);
                },
                both: v
            });
        };
        (0, h.useDidMount)(C);
        return (0, f.jsx)(g.Suspense, {
            fallback: null,
            children: t ? (0, f.jsx)('div', {
                className: 'maxAll flex-center',
                children: (0, f.jsx)(k.default, {
                    size: 'large'
                })
            }) : w ? (0, f.jsx)(i.default, {
                type: 'error',
                showIcon: !0,
                message: 'Error Loading Map Publishing',
                description: 'There was an error fetching publishing details for this map. Please check back in later!'
            }) : y ? (0, f.jsx)(j.default, {
                theme: {
                    components: {
                        Tabs: {
                            colorPrimary: o.default.Yellow
                        }
                    }
                },
                children: (0, f.jsxs)(l.default, {
                    defaultActiveKey: 'overview',
                    children: [
                        (0, f.jsx)(l.default.TabPane, {
                            tab: 'Overview',
                            children: (0, f.jsx)(q, {
                                data: y,
                                refetch: C,
                                close: a.close
                            })
                        }, 'overview'),
                        (0, f.jsx)(l.default.TabPane, {
                            tab: 'Map Details',
                            children: (0, f.jsx)(r, {
                                ...y,
                                refetch: C
                            })
                        }, 'details')
                    ]
                })
            }) : (0, f.jsx)(p, {
                publishRequirementError: A,
                refetch: C
            })
        });
    };
}), c.register('XV+Wh', function(d, e) {
    d.exports = import('./' + c('Dq3qN').resolve('7rUtN')).then(() => c('oss8n'));
}), c.register('+30+2', function(d, e) {
    d.exports = import('./' + c('Dq3qN').resolve('21jMk')).then(() => c('IZuHX'));
}), c.register('M5WLh', function(d, e) {
    d.exports = Promise.all([
        import('./' + c('Dq3qN').resolve('2bgip')),
        import('./' + c('Dq3qN').resolve('gf3XU')),
        import('./' + c('Dq3qN').resolve('jWcbj')),
        import('./' + c('Dq3qN').resolve('lkHb8')),
        import('./' + c('Dq3qN').resolve('5ngr6'))
    ]).then(() => c('LbWyu'));
}), c.register('OQRaD', function(d, e) {
    a(d.exports, 'default', function() {
        return _k;
    });
    var f = c('5cnOa'),
        g = c('O0Kav'),
        h = c('tWyJZ'),
        i = c('VZTwv'),
        j = function(k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownOutlined';
    var _k = g.forwardRef(j);
}), c.register('tWyJZ', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'
                }
            }]
        },
        name: 'down',
        theme: 'outlined'
    };
}), c.register('bMaPZ2', function(d, e) {
    a(d.exports, 'isGoogleFontLoaded', function() {
        return _h;
    }), a(d.exports, 'default', function() {
        return _i;
    });
    var f = c('TptDc');
    const g = [],
        _h = a => g.includes(a);
    var _i = a => {
        const {
            familyName: j,
            onLoad: k
        } = a;
        g.includes(j) ? k && k() : b(f).load({
            google: {
                families: [`${ j }:400,700`]
            },
            fontactive: a => {
                g.includes(a) || g.push(a), j === a && k && k();
            }
        });
    };
}), c.register('TCaC20', function(d, e) {
    a(d.exports, 'CanAddTerrain', function() {
        return _h;
    });
    var f = c('fI6of'),
        g = c('PlfjJ');
    const _h = a => {
        var i;
        const j = f.default.worldOptions.terrainOptions.find(i => i.id === a);
        if (!j)
            return !1;
        if (null === (i = j.blockedMapStyles) || void 0 === i ? void 0 : i.length) {
            const k = f.default.session.mapStyle;
            if (j.blockedMapStyles.includes(k))
                return !1;
        }
        const k = j.minimumRoleLevel,
            l = j.maximumRoleLevel;
        return (0, g.IsRoleLevelBetween)(k, l);
    };
}), c.register('dcTme', function(d, e) {
    a(d.exports, 'GetCurrentMapStyle', function() {
        return _g;
    });
    var f = c('fI6of');
    const _g = () => f.default.session.mapStyle;
}), c.register('AhL/f0', function(d, e) {
    a(d.exports, 'default', function() {
        return _j;
    });
    var f = c('heTaO'),
        g = c('2LtPo'),
        h = c('llkVK'),
        i = c('5u9xs');
    var _j = a => {
        const k = (0, f.default)().worldManager.devices.getDeviceById(a.id);
        if (!k)
            return;
        const l = (0, i.default)(a.id);
        if (!l)
            return;
        const m = a.hooks || l.hooks;
        (0, g.default)({
            ...a,
            hooks: m,
            placeInstantly: !0,
            onPlace: l => {
                l && (0, h.default)({
                    id: k.id,
                    deviceTypeId: k.deviceOption.id,
                    options: JSON.stringify(a.options),
                    x: a.x,
                    y: a.y,
                    depth: l.layers.getOptionsDepth(),
                    layerId: l.layers.getOptionsLayer(),
                    name: a.name,
                    hooks: m
                });
            }
        });
    };
}), c.register('/kLkG0', function(d, e) {
    a(d.exports, 'default', function() {
        return _w;
    });
    var f = c('/U36/'),
        g = c('6E2xk1'),
        h = c('Kpy/B'),
        i = c('O0Kav'),
        j = c('R2nG3'),
        k = c('u8Dt8'),
        l = c('e5xHg25'),
        m = c('WQymh');
    const {
        Option: n
    } = k.default;

    function o(p) {
        return p && p.type && (p.type.isSelectOption || p.type.isSelectOptGroup);
    }
    const p = (a, c) => {
            const {
                prefixCls: q,
                className: r,
                popupClassName: s,
                dropdownClassName: t,
                children: u,
                dataSource: v
            } = a, _w = (0, g.default)(u);
            let x;
            1 === _w.length && (0, m.isValidElement)(_w[0]) && !o(_w[0]) && ([y] = _w);
            const z = y ? () => y : void 0;
            let A;
            A = _w.length && o(_w[0]) ? u : v ? v.map(a => {
                if ((0, m.isValidElement)(a))
                    return a;
                switch (typeof a) {
                    case 'string':
                        return i.createElement(n, {
                            key: a,
                            value: a
                        }, a);
                    case 'object': {
                        const {
                            value: B
                        } = a;
                        return i.createElement(n, {
                            key: B,
                            value: B
                        }, a.text);
                    }
                    default:
                        return;
                }
            }) : [];
            const {
                getPrefixCls: B
            } = i.useContext(j.ConfigContext), C = B('select', q);
            return i.createElement(k.default, Object.assign({
                ref: c
            }, (0, h.default)(a, [
                'dataSource',
                'dropdownClassName'
            ]), {
                prefixCls: C,
                popupClassName: s || t,
                className: b(f)(`${ C }-auto-complete`, r),
                mode: k.default.SECRET_COMBOBOX_MODE_DO_NOT_USE
            }, {
                getInputElement: z
            }), A);
        },
        q = i.forwardRef(p),
        r = (0, l.default)(q);
    q.Option = n, q._InternalPanelDoNotUseOrYouWillBeFired = r;
    var s = q;
});