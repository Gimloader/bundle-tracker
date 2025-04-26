function a(a, b, c, J) {
    Object.defineProperty(a, b, {
        get: c,
        set: J,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('SwLaX', function(b, J) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return G;
    });
    var e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('h99Nu'),
        h = c('Vlfxs'),
        i = c('am7L5'),
        j = c('xck3q'),
        k = c('KV+OV'),
        l = c('5nJMd26'),
        m = c('UzdPH'),
        n = c('PjB0f'),
        o = c('gSUVO'),
        p = c('0c6eg'),
        q = c('oYoRk'),
        r = c('GyBW8'),
        s = c('INO4S'),
        t = c('kcx+B'),
        u = c('r94hm'),
        v = c('s43l1'),
        w = c('l/klh'),
        x = c('kIumU'),
        y = c('SB1TS'),
        z = c('TocNf'),
        A = c('SUzmj'),
        B = c('8QQU2'),
        C = c('TnPB+'),
        D = c('iAe3o'),
        E = c('Xtz0c');
    let F;
    var G = (0, h.observer)(a => {
        const {
            gui: {
                none: {
                    optionsMenu: {
                        screen: H
                    }
                }
            },
            me: {
                roleLevel: I
            }
        } = (0, i.default)(), J = (0, y.useAmIGameOwner)(), [K, L, M] = (0, n.useBoolean)(!0), [N, O] = f.useState(!0);
        (0, j.useInputBlockingUI)();
        const P = f.useMemo(() => H === q.OptionsMenuScreen.mapOptions, [H]),
            Q = f.useMemo(() => H === q.OptionsMenuScreen.editing, [H]),
            R = f.useMemo(() => H === q.OptionsMenuScreen.permissions, [H]),
            S = f.useMemo(() => H === q.OptionsMenuScreen.saving, [H]),
            T = f.useMemo(() => H === q.OptionsMenuScreen.help, [H]),
            U = f.useMemo(() => H === q.OptionsMenuScreen.publishing, [H]),
            V = () => {
                a.setToHomeScreen(), X(q.OptionsMenuScreen.home);
            },
            W = f.useCallback(() => {
                N ? V() : Q || R || P || S || T || U || M();
            }, [
                M,
                P,
                Q,
                R,
                S,
                T,
                U,
                N,
                V
            ]),
            X = a => (0, r.default)(a),
            Y = a => {
                (0, t.playClickSound)(), X(a);
            },
            Z = () => {
                X(q.OptionsMenuScreen.home);
            };
        return (0, e.jsx)(k.default, {
            placement: 'left',
            open: K,
            onClose: W,
            afterOpenChange: a => {
                a && O(!1), a || V();
            },
            width: 600,
            destroyOnClose: !0,
            children: (0, e.jsxs)(H, {
                children: [
                    (0, e.jsx)(m.default.Title, {
                        style: {
                            fontFamily: o.Fonts.FugazOne,
                            textTransform: 'uppercase',
                            textAlign: 'center'
                        },
                        level: 1,
                        children: 'Options'
                    }),
                    (0, e.jsx)('div', {
                        style: {
                            height: 14
                        }
                    }),
                    (0, e.jsxs)(l.default, {
                        className: 'maxAll',
                        direction: 'vertical',
                        size: 14,
                        children: [
                            J ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                    (0, e.jsx)(p.default, {
                                        icon: 'fas fa-sliders-v-square',
                                        title: 'Map Options',
                                        description: 'Customize teams, game duration, and who is determined as the winner',
                                        onClick: () => {
                                            (0, t.playClickSound)(), (0, v.default)(() => {
                                                X(q.OptionsMenuScreen.mapOptions);
                                            });
                                        }
                                    }),
                                    (0, e.jsx)(w.default, {
                                        open: P,
                                        close: Z
                                    })
                                ]
                            }) : null,
                            (0, e.jsx)(p.default, {
                                icon: 'fas fa-i-cursor',
                                title: 'Editing Options',
                                description: 'Adjust player collision, speed, and other settings to help you while editing',
                                onClick: () => Y(q.OptionsMenuScreen.editing)
                            }),
                            J && !(0, A.IsTutorial)() ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                    (0, e.jsx)(p.default, {
                                        icon: 'fas fa-upload',
                                        title: 'Publish',
                                        description: 'Publish your map to be played by Gimkit users from around the world!',
                                        onClick: () => Y(q.OptionsMenuScreen.publishing)
                                    }),
                                    (0, e.jsx)(p.default, {
                                        icon: 'fas fa-share',
                                        title: 'Showcase & Save',
                                        description: 'Send a link to friends to have them test out your map!',
                                        onClick: () => Y(q.OptionsMenuScreen.saving)
                                    }),
                                    I >= B.RoleLevelConsts.admin ? (0, e.jsx)(p.default, {
                                        icon: 'fas fa-brackets-curly',
                                        title: 'Hooks',
                                        description: 'Allow game hosts to customize your map before hopping in!',
                                        onClick: () => (0, C.default)(D.default.hooks)
                                    }) : null,
                                    (0, e.jsx)(p.default, {
                                        icon: 'fas fa-user-tag',
                                        title: 'Permissions',
                                        description: 'Control who can make changes to the map when editing collaboratively',
                                        onClick: () => Y(q.OptionsMenuScreen.permissions)
                                    }),
                                    (0, e.jsx)(E.default, {
                                        open: U,
                                        close: Z
                                    }),
                                    (0, e.jsx)(s.default, {
                                        open: R,
                                        close: Z
                                    }),
                                    (0, e.jsx)(x.default, {
                                        open: S,
                                        close: Z
                                    })
                                ]
                            }) : null,
                            (0, e.jsx)(p.default, {
                                icon: 'fas fa-comment-dots',
                                title: 'Documentation & Help',
                                description: 'Get help building your map!',
                                onClick: () => Y(q.OptionsMenuScreen.help)
                            }),
                            (0, e.jsx)(z.default, {
                                open: T,
                                close: Z
                            })
                        ]
                    }),
                    (0, e.jsx)(u.default, {
                        open: Q,
                        close: Z
                    })
                ]
            })
        });
    });
    const H = g.default.div.attrs({
        className: 'maxWidth'
    })(F || (F = (a => a)``));
}), c.register('0c6eg', function(b, u) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('UzdPH');
    c('uPP4W');
    var f = c('h99Nu'),
        g = c('gSUVO'),
        h = c('YimJ0'),
        i = c('iMnBi');
    let j;
    var k = a => {
        const {
            title: l,
            description: m
        } = n;
        return (0, d.jsxs)(l, {
            onClick: n.onClick,
            children: [
                (0, d.jsx)('div', {
                    style: {
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: 14,
                        marginRight: 20
                    },
                    children: (0, d.jsx)(i.default, {
                        name: n.icon
                    })
                }),
                (0, d.jsxs)('div', {
                    children: [
                        (0, d.jsx)(e.default.Title, {
                            style: {
                                marginBottom: 2,
                                fontWeight: g.FontWeights.Bold
                            },
                            level: 4,
                            children: l
                        }),
                        (0, d.jsx)(e.default.Text, {
                            children: m
                        })
                    ]
                })
            ]
        });
    };
    const l = (0, f.default)(h.VerticallyCentered).attrs({
        className: 'maxWidth'
    })(j || (j = (a => a)`
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background 0.18s ease-in-out;
  border-radius: 8px;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`));
}), c.register('GyBW8', function(b, u) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('7Sbqr');
    var e = a => {
        d.default.gui.none.optionsMenu.screen = a;
    };
}), c.register('INO4S', function(b, u) {
    a(b.exports, 'default', function() {
        return t;
    });
    var d = c('8kSQZ'),
        e = c('KV+OV'),
        f = c('5nJMd26'),
        g = c('i0MGm'),
        h = c('UzdPH');
    c('uPP4W');
    var i = c('h99Nu'),
        j = c('Wgw1x0'),
        k = c('S/jX4'),
        l = c('RJ/fk'),
        m = c('RhbNx'),
        n = c('am7L5'),
        o = c('Vlfxs'),
        p = c('Zx6Nd');
    let q;
    const r = (0, o.observer)(a => {
            const {
                session: {
                    globalPermissions: s
                }
            } = (0, n.default)(), t = (a, t) => {
                const u = {
                    adding: s.adding,
                    removing: s.removing,
                    editing: s.editing,
                    manageCodeGrids: s.manageCodeGrids
                };
                u[a] = t, (0, p.default)(u);
            };
            return (0, d.jsxs)(e.default, {
                placement: 'left',
                open: a.open,
                onClose: a.close,
                width: 450,
                title: 'Permissions',
                children: [
                    (0, d.jsx)(h.default.Text, {
                        children: 'Set what other players collaborating with you are allowed to do! Changes are applied immediately.'
                    }),
                    (0, d.jsxs)(f.default, {
                        direction: 'vertical',
                        className: 'maxWidth',
                        size: 14,
                        style: {
                            marginTop: 22
                        },
                        children: [
                            (0, d.jsx)(s, {
                                name: 'Adding',
                                description: `Are other players allowed to add ${ j.default.terrain.singular }, ${ j.default.prop.plural }, ${ j.default.device.plural }, and ${ j.default.wire.singular } to the map?`,
                                enabled: s.adding,
                                onChange: a => t('adding', a)
                            }),
                            (0, d.jsx)(s, {
                                name: 'Removing',
                                description: 'Are other players allowed to remove things from the map?',
                                enabled: s.removing,
                                onChange: a => t('removing', a)
                            }),
                            (0, d.jsx)(s, {
                                name: 'Editing',
                                description: `Are other players allowed to modify options for ${ j.default.prop.plural }, ${ j.default.device.plural }, and ${ j.default.wire.singular }?`,
                                enabled: s.editing,
                                onChange: a => t('editing', a)
                            }),
                            (0, d.jsx)(s, {
                                name: (0, l.CapitalizeFirstLetter)(m.default.grid.plural),
                                description: `Are other players allowed to create and edit ${ m.default.grid.plural } for ${ j.default.device.plural }?`,
                                enabled: s.manageCodeGrids,
                                onChange: a => t('manageCodeGrids', a)
                            })
                        ]
                    })
                ]
            });
        }),
        s = a => (0, d.jsxs)(v, {
            children: [
                (0, d.jsxs)('div', {
                    style: {
                        marginRight: 35
                    },
                    children: [
                        (0, d.jsx)(h.default.Title, {
                            level: 5,
                            style: {
                                color: k.default.White
                            },
                            children: a.name
                        }),
                        (0, d.jsx)(h.default.Text, {
                            children: a.description
                        })
                    ]
                }),
                (0, d.jsx)('div', {
                    children: (0, d.jsx)(g.default, {
                        checked: a.enabled,
                        onChange: a.onChange
                    })
                })
            ]
        });
    var t = u;
    const v = i.default.div.attrs({
        className: 'flex between'
    })(q || (q = (a => a)`
  padding: 17px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
`));
}), c.register('Wgw1x0', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('Zx6Nd', function(b, F) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('sPSvg'),
        e = c('DM38W');
    var f = a => {
        (0, e.default)(d.default.setGlobalPermissions, {
            adding: a.adding,
            removing: a.removing,
            editing: a.editing,
            manageCodeGrids: a.manageCodeGrids
        });
    };
}), c.register('r94hm', function(b, F) {
    a(b.exports, 'default', function() {
        return E;
    });
    var d = c('8kSQZ'),
        e = c('KV+OV'),
        f = c('Ly1h3'),
        g = c('5xmPL'),
        h = c('5nJMd26'),
        i = c('UzdPH'),
        j = c('uPP4W'),
        k = c('h99Nu'),
        l = c('Wgw1x0'),
        m = c('S/jX4'),
        n = c('Vlfxs'),
        o = c('am7L5'),
        p = c('QkYpq'),
        q = c('B35JY'),
        r = c('fS7LJ'),
        s = c('RJ/fk'),
        t = c('mCZDR'),
        u = c('bZ9O4'),
        v = c('aGdJe4'),
        w = c('SCq5x4'),
        x = c('EjLrX'),
        y = c('dAmf5');
    let z;
    const A = [
            0,
            64,
            32,
            16,
            8,
            4,
            2
        ],
        B = [{
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
        C = (0, n.observer)(a => {
            const {
                editing: D,
                me: E,
                gui: F
            } = (0, o.default)();
            var G;
            const [H, I] = j.useState(null !== (G = localStorage.getItem(v.default.zonedDeviceViews)) && void 0 !== G ? G : w.ZonedDeviceDisplayOptions.bordersOnly);
            return (0, d.jsx)(e.default, {
                placement: 'left',
                open: a.open,
                onClose: a.close,
                width: 450,
                title: 'Editing Options',
                children: (0, d.jsxs)(h.default, {
                    direction: 'vertical',
                    className: 'maxWidth',
                    size: 14,
                    children: [
                        (0, d.jsx)(D, {
                            name: 'Camera Zoom',
                            description: 'Zoom out to see more in edit mode',
                            children: (0, d.jsx)(g.default, {
                                min: 0.3,
                                max: 1.5,
                                step: 0.1,
                                className: 'maxWidth',
                                value: E.editing.preferences.cameraZoom,
                                onChange: a => {
                                    E.editing.preferences.cameraZoom = a, (0, y.default)().cameraHelper.forceRefresh();
                                }
                            })
                        }),
                        (0, d.jsx)(D, {
                            name: 'Player Collision',
                            description: 'Disable to walk through walls & objects in edit mode',
                            children: (0, d.jsxs)(f.default, {
                                className: 'maxWidth',
                                value: E.phase,
                                onChange: a => {
                                    E.editing.preferences.phase = a, (0, p.default)(a);
                                },
                                children: [
                                    (0, d.jsx)(f.default.Option, {
                                        value: !1,
                                        children: 'On'
                                    }),
                                    (0, d.jsx)(f.default.Option, {
                                        value: !0,
                                        children: 'Off'
                                    })
                                ]
                            })
                        }),
                        (0, d.jsx)(D, {
                            name: 'Player Speed',
                            description: 'Adjust how fast you move in edit mode',
                            children: (0, d.jsx)(f.default, {
                                className: 'maxWidth',
                                value: E.movementSpeed / q.default.normal,
                                onChange: a => {
                                    E.editing.preferences.movementSpeed = a, (0, r.default)(a);
                                },
                                children: B.map(a => (0, d.jsx)(f.default.Option, {
                                    value: a.value,
                                    children: a.name
                                }, `speed-${ a.value }`))
                            })
                        }),
                        (0, d.jsx)(D, {
                            name: 'Grid Snap',
                            description: `When placing ${ l.default.prop.plural } & ${ l.default.device.plural }, easily align them using grid snap`,
                            children: (0, d.jsx)(f.default, {
                                className: 'maxWidth',
                                value: D.gridSnap,
                                onChange: a => D.gridSnap = a,
                                children: A.map(a => (0, d.jsx)(f.default.Option, {
                                    value: a,
                                    children: 0 === a ? 'Off' : a
                                }, `grid-snap-${ a }`))
                            })
                        }),
                        (0, d.jsx)(D, {
                            name: 'Show Grid',
                            children: (0, d.jsxs)(f.default, {
                                className: 'maxWidth',
                                value: F.showingGrid,
                                onChange: a => {
                                    E.editing.preferences.showGrid = a, F.showingGrid = a;
                                },
                                children: [
                                    (0, d.jsx)(f.default.Option, {
                                        value: !1,
                                        children: 'Off'
                                    }),
                                    (0, d.jsx)(f.default.Option, {
                                        value: !0,
                                        children: 'On'
                                    })
                                ]
                            })
                        }),
                        (0, d.jsx)(D, {
                            name: `Zone ${ (0, s.CapitalizeFirstLetter)(l.default.device.singular) } Display`,
                            description: `Set the appearance of ${ l.default.device.plural } that use a zone area`,
                            children: (0, d.jsxs)(f.default, {
                                className: 'maxWidth',
                                value: H,
                                onChange: a => {
                                    localStorage.setItem(v.default.zonedDeviceViews, a), I(a), (0, x.Reset)();
                                },
                                children: [
                                    (0, d.jsx)(f.default.Option, {
                                        value: w.ZonedDeviceDisplayOptions.visible,
                                        children: 'Visible'
                                    }),
                                    (0, d.jsx)(f.default.Option, {
                                        value: w.ZonedDeviceDisplayOptions.bordersOnly,
                                        children: 'Borders Only'
                                    }),
                                    (0, d.jsx)(f.default.Option, {
                                        value: w.ZonedDeviceDisplayOptions.fullyHidden,
                                        children: 'Hidden'
                                    })
                                ]
                            })
                        }),
                        (0, d.jsx)(D, {
                            name: `${ (0, s.CapitalizeFirstLetter)(t.MemoryName) } Bar`,
                            description: `Show the ${ t.MemoryName } bar, even if ${ t.MemoryName } is below ${ u.DEFAULT_SHOW_MEMORY_AT_PERCENT }%`,
                            children: (0, d.jsxs)(f.default, {
                                className: 'maxWidth',
                                value: D.showMemoryBarAtAllTimes,
                                onChange: a => D.showMemoryBarAtAllTimes = a,
                                children: [
                                    (0, d.jsx)(f.default.Option, {
                                        value: !1,
                                        children: 'Off'
                                    }),
                                    (0, d.jsx)(f.default.Option, {
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
        D = a => (0, d.jsxs)(G, {
            children: [
                (0, d.jsxs)('div', {
                    children: [
                        (0, d.jsx)(i.default.Title, {
                            level: 5,
                            style: {
                                color: m.default.White
                            },
                            children: a.name
                        }),
                        a.description ? (0, d.jsx)(i.default.Text, {
                            children: a.description
                        }) : null
                    ]
                }),
                (0, d.jsx)('div', {
                    style: {
                        marginTop: 10
                    },
                    children: a.children
                })
            ]
        });
    var E = F;
    const G = k.default.div.attrs({
        className: 'maxWidth'
    })(z || (z = (a => a)`
  padding: 17px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
`));
}), c.register('aGdJe4', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        zonedDeviceViews: 'zoned-device-views'
    };
}), c.register('SCq5x4', function(b, n) {
    a(b.exports, 'ZonedDeviceDisplayOptions', function() {
        return e;
    }), a(b.exports, 'default', function() {
        return h;
    });
    var d = c('aGdJe4');
    let e;
    var f;
    (f = e || (e = {})).visible = 'visible', f.bordersOnly = 'bordersOnly', f.fullyHidden = 'fullyHidden';
    const g = () => {
        const h = localStorage.getItem(d.default.zonedDeviceViews);
        return h || e.bordersOnly;
    };
    var h = {
        shouldShow: a => g() !== e.fullyHidden,
        shouldShowInnerZone: a => g() !== e.bordersOnly
    };
}), c.register('s43l1', function(b, n) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('7Sbqr'),
        e = c('7X8h3'),
        f = c('dAmf5'),
        g = c('jgFbX'),
        h = c('BUfP2'),
        i = c('bBJD3'),
        j = c('CJ4pv');
    var k = a => {
        const l = (0, f.default)().worldManager.devices.allDevices.find(a => a.deviceOption.id === e.default.mapOptions),
            m = l => {
                d.default.me.editing.device.currentlyEditedDevice = {
                    id: l,
                    deviceOptionId: e.default.mapOptions
                }, a();
            };
        l ? m(l.id) : (0, g.default)({
            id: (0, j.GenerateNewDeviceId)(),
            deviceOption: (0, h.FetchDeviceOptionById)(e.default.mapOptions),
            x: 0,
            y: 0,
            name: '',
            options: {},
            state: {},
            placedByClient: !0,
            isPreview: !1,
            onPlace: a => {
                (0, i.default)({
                    id: a.id,
                    deviceTypeId: e.default.mapOptions,
                    x: a.x,
                    y: a.y,
                    name: a.name,
                    options: JSON.stringify(a.options)
                }), m(a.id);
            }
        });
    };
}), c.register('l/klh', function(b, n) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('KV+OV');
    c('uPP4W');
    var f = c('Vlfxs'),
        g = c('dAmf5'),
        h = c('7X8h3'),
        i = c('WD3zy'),
        j = c('G2sv1');
    var k = (0, f.observer)(a => {
        const {
            options: l,
            position: m,
            hooks: n
        } = (0, i.default)();
        return (0, d.jsx)(e.default, {
            placement: 'left',
            open: a.open,
            onClose: a.close,
            width: 550,
            title: 'Map Options',
            children: (() => {
                const o = (0, g.default)().worldManager.devices.allDevices.find(o => o.deviceOption.id === h.default.mapOptions);
                return o ? (0, d.jsx)(j.default, {
                    device: o,
                    deviceOption: o.deviceOption,
                    options: l,
                    position: m,
                    hooks: n
                }) : null;
            })()
        });
    });
}), c.register('kIumU', function(b, y) {
    a(b.exports, 'default', function() {
        return v;
    });
    var d = c('8kSQZ'),
        e = c('8dKJo1'),
        f = c('WLMeG2'),
        g = c('IsmrL'),
        h = c('ExtIT'),
        i = c('KV+OV'),
        j = c('c6x8w'),
        k = c('jrTkz0'),
        l = c('cR5QE'),
        m = c('UzdPH');
    c('uPP4W');
    var n = c('DM38W'),
        o = c('sPSvg'),
        p = c('lmfrI'),
        q = c('PjB0f'),
        r = (q = c('PjB0f'), c('gSUVO')),
        s = c('Vlfxs'),
        t = c('am7L5'),
        u = c('8QQU2');
    var v = (0, s.observer)(a => {
        const {
            me: {
                roleLevel: w
            }
        } = (0, t.default)(), [x, y, z] = (0, q.useBoolean)(!1);
        return (0, d.jsxs)(i.default, {
            placement: 'left',
            open: a.open,
            onClose: a.close,
            width: 570,
            title: 'Showcase & Save',
            children: [
                (0, d.jsx)(m.default.Title, {
                    level: 4,
                    style: {
                        color: p.default.White
                    },
                    children: 'Showcase Link'
                }),
                (0, d.jsx)(m.default.Text, {
                    style: {
                        marginTop: 2
                    },
                    children: 'Generate a showcase link! Share the link with friends to have them test your map!'
                }),
                (0, d.jsx)(g.default, {
                    block: !0,
                    size: 'large',
                    type: 'primary',
                    loading: x,
                    icon: (0, d.jsx)(f.default, {}),
                    onClick: () => {
                        x || (y(), (0, q.request)({
                            url: '/api/created-map/publish-link',
                            data: {
                                id: window._mapId
                            },
                            success: a => {
                                const A = `${ (0, q.getDomain)() }/creative/showcase/${ a.id }`;
                                l.default.success({
                                    icon: (0, d.jsx)(d.Fragment, {}),
                                    footer: null,
                                    width: 550,
                                    closable: !0,
                                    maskClosable: !0,
                                    bodyStyle: {
                                        padding: 20
                                    },
                                    content: (0, d.jsxs)(d.Fragment, {
                                        children: [
                                            (0, d.jsx)(m.default.Title, {
                                                level: 4,
                                                style: {
                                                    fontWeight: r.FontWeights.Bold
                                                },
                                                children: 'Showcase Link'
                                            }),
                                            (0, d.jsxs)('div', {
                                                className: 'flex vc',
                                                style: {
                                                    marginTop: 2
                                                },
                                                children: [
                                                    (0, d.jsx)(j.default, {
                                                        type: 'text',
                                                        value: A,
                                                        readOnly: !0
                                                    }),
                                                    (0, d.jsx)(g.default, {
                                                        style: {
                                                            marginLeft: 10
                                                        },
                                                        type: 'primary',
                                                        onClick: () => {
                                                            var B;
                                                            null === navigator || void 0 === navigator || null === (B = navigator.clipboard) || void 0 === B || B.writeText(A), k.default.success('Copied to clipboard!');
                                                        },
                                                        children: 'Copy Link'
                                                    })
                                                ]
                                            }),
                                            (0, d.jsx)(h.default, {}),
                                            (0, d.jsxs)(m.default.Text, {
                                                children: [
                                                    'Your map is ready to be showcased! Share this link with others, and they can play the map you\'ve made! ',
                                                    (0, d.jsx)('br', {}),
                                                    (0, d.jsx)('br', {}),
                                                    (0, d.jsxs)('b', {
                                                        children: [
                                                            'This link expires ',
                                                            a.expirationDays,
                                                            ' ',
                                                            (0, q.plural)('day', a.expirationDays),
                                                            ' from now.'
                                                        ]
                                                    }),
                                                    (0, d.jsx)('br', {}),
                                                    (0, d.jsx)('br', {}),
                                                    'After the link expires, you can always generate a new link.'
                                                ]
                                            })
                                        ]
                                    })
                                });
                            },
                            both: z
                        }));
                    },
                    style: {
                        marginTop: 10
                    },
                    children: 'Generate Showcase Link'
                }),
                (0, d.jsx)(h.default, {}),
                (0, d.jsx)(m.default.Title, {
                    level: 4,
                    style: {
                        color: p.default.White
                    },
                    children: 'Save'
                }),
                (0, d.jsx)(m.default.Text, {
                    style: {
                        marginTop: 2
                    },
                    children: 'Maps are automatically saved every few minutes. However, you can save manually by clicking the button below!'
                }),
                (0, d.jsx)(g.default, {
                    block: !0,
                    size: 'large',
                    type: 'primary',
                    icon: (0, d.jsx)(e.default, {}),
                    onClick: () => (0, n.default)(o.default.save, {}),
                    style: {
                        marginTop: 10
                    },
                    children: 'Save Map'
                }),
                w >= u.RoleLevelConsts.admin ? (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(h.default, {}),
                        (0, d.jsx)(g.default, {
                            block: !0,
                            size: 'large',
                            type: 'primary',
                            icon: (0, d.jsx)(e.default, {}),
                            onClick: () => (0, n.default)(o.default.publish),
                            children: 'Team Gimkit Publish'
                        })
                    ]
                }) : null
            ]
        });
    });
}), c.register('8dKJo1', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('ERk8t1'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'SaveOutlined';
    var i = e.forwardRef(h);
}), c.register('ERk8t1', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('WLMeG2', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('EaBCj2'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'ShareAltOutlined';
    var i = e.forwardRef(h);
}), c.register('EaBCj2', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('TocNf', function(b, t) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('KV+OV'),
        f = c('5nJMd26'),
        g = c('UzdPH');
    c('uPP4W');
    var h = c('lmfrI'),
        i = c('h99Nu'),
        j = c('YimJ0'),
        k = c('iMnBi');
    let l;
    var m = a => (0, d.jsx)(e.default, {
        placement: 'left',
        open: a.open,
        onClose: a.close,
        width: 500,
        title: 'Documentation & Help',
        children: (0, d.jsxs)(f.default, {
            className: 'maxName',
            direction: 'vertical',
            size: 14,
            children: [
                (0, d.jsx)(n, {
                    link: 'https://forum.creative.gimkit.com',
                    name: 'Community Forum',
                    description: 'Find answers, ask questions, and get help with your map!'
                }),
                (0, d.jsx)(n, {
                    link: 'https://docs.creative.gimkit.com',
                    name: 'Help Docs',
                    description: 'We\'re still building out our documentation, but you can find some helpful articles here!'
                })
            ]
        })
    });
    const n = a => (0, d.jsx)('a', {
            href: a.link,
            target: '_blank',
            children: (0, d.jsxs)(o, {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(g.default.Title, {
                                level: 4,
                                style: {
                                    color: h.default.White
                                },
                                children: a.name
                            }),
                            (0, d.jsx)(g.default.Text, {
                                style: {
                                    marginTop: 2
                                },
                                children: a.description
                            })
                        ]
                    }),
                    (0, d.jsx)('div', {
                        style: {
                            fontSize: 18,
                            marginLeft: 30
                        },
                        children: (0, d.jsx)(k.default, {
                            name: 'fas fa-external-link',
                            style: {
                                color: h.default.White
                            }
                        })
                    })
                ]
            })
        }),
        o = (0, i.default)(j.VerticallyCentered)(l || (l = (a => a)`
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background 0.18s ease-in-out;
  border-radius: 8px;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`));
}), c.register('Xtz0c', function(b, t) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ'),
        e = c('KV+OV');
    c('uPP4W');
    var f = c('8Xx7Z');
    var g = a => (0, d.jsx)(e.default, {
        placement: 'left',
        open: a.open,
        onClose: a.close,
        destroyOnClose: !0,
        width: 500,
        children: (0, d.jsx)(f.default, {
            close: a.close
        })
    });
}), c.register('8Xx7Z', function(b, t) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('laJ/S'),
        g = c('bPH7V'),
        h = c('qEw51'),
        i = c('iHElh'),
        j = c('/nMwY'),
        k = c('uVDHR'),
        l = c('PjB0f'),
        m = c('S/jX4');
    const n = e.lazy(() => c('40lpN')),
        o = e.lazy(() => c('kvsau')),
        p = e.lazy(() => c('abicG'));
    var q = a => {
        const [r, s, t] = (0, l.useBoolean)(!0), [u, v] = e.useState(!1), [w, x] = e.useState(), [y, z] = e.useState(), A = () => {
            s(), x(void 0), z(void 0), v(!1), (0, k.Request)({
                url: `/api/created-map/listing/creator-info/${ window._mapId }`,
                success: a => {
                    a.data && x(a.data), a.publishRequirementError && z(a.publishRequirementError);
                },
                error: a => {
                    v(!0);
                },
                both: t
            });
        };
        (0, f.useDidMount)(A);
        return (0, d.jsx)(e.Suspense, {
            fallback: null,
            children: r ? (0, d.jsx)('div', {
                className: 'maxAll flex-center',
                children: (0, d.jsx)(i.default, {
                    size: 'large'
                })
            }) : u ? (0, d.jsx)(g.default, {
                type: 'error',
                showIcon: !0,
                message: 'Error Loading Map Publishing',
                description: 'There was an error fetching publishing details for this map. Please check back in later!'
            }) : w ? (0, d.jsx)(h.default, {
                theme: {
                    components: {
                        Tabs: {
                            colorPrimary: m.default.Yellow
                        }
                    }
                },
                children: (0, d.jsxs)(j.default, {
                    defaultActiveKey: 'overview',
                    children: [
                        (0, d.jsx)(j.default.TabPane, {
                            tab: 'Overview',
                            children: (0, d.jsx)(o, {
                                data: w,
                                refetch: A,
                                close: a.close
                            })
                        }, 'overview'),
                        (0, d.jsx)(j.default.TabPane, {
                            tab: 'Map Details',
                            children: (0, d.jsx)(p, {
                                ...w,
                                refetch: A
                            })
                        }, 'details')
                    ]
                })
            }) : (0, d.jsx)(n, {
                publishRequirementError: y,
                refetch: A
            })
        });
    };
}), c.register('40lpN', function(a, b) {
    a.exports = import('./' + c('tIOy4').resolve('7rUtN')).then(() => c('ciAGL'));
}), c.register('kvsau', function(a, b) {
    a.exports = import('./' + c('tIOy4').resolve('21jMk')).then(() => c('G2ekc'));
}), c.register('abicG', function(a, b) {
    a.exports = Promise.all([
        import('./' + c('tIOy4').resolve('cUNwf')),
        import('./' + c('tIOy4').resolve('iQTV4')),
        import('./' + c('tIOy4').resolve('cWZ5T')),
        import('./' + c('tIOy4').resolve('lkHb8')),
        import('./' + c('tIOy4').resolve('5ngr6'))
    ]).then(() => c('JQskZ'));
}), c.register('JegR3', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('WKaIG'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var i = e.forwardRef(h);
}), c.register('WKaIG', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('crVjo2', function(i, d) {
    a(i.exports, 'isGoogleFontLoaded', function() {
        return f;
    }), a(i.exports, 'default', function() {
        return g;
    });
    var d = c('2qGsE');
    const e = [],
        f = a => e.includes(a);
    var g = a => {
        const {
            familyName: h,
            onLoad: i
        } = j;
        e.includes(h) ? i && i() : b(d).load({
            google: {
                families: [`${ h }:400,700`]
            },
            fontactive: j => {
                e.includes(j) || e.push(j), h === j && i && i();
            }
        });
    };
}), c.register('SDOhx0', function(b, i) {
    a(b.exports, 'CanAddTerrain', function() {
        return f;
    });
    var d = c('7Sbqr'),
        e = c('2hh8R');
    const f = a => {
        var g;
        const h = d.default.worldOptions.terrainOptions.find(g => g.id === a);
        if (!h)
            return !1;
        if (null === (g = h.blockedMapStyles) || void 0 === g ? void 0 : g.length) {
            const i = d.default.session.mapStyle;
            if (h.blockedMapStyles.includes(i))
                return !1;
        }
        const i = h.minimumRoleLevel,
            j = h.maximumRoleLevel;
        return (0, e.IsRoleLevelBetween)(i, j);
    };
}), c.register('j6MtH', function(b, k) {
    a(b.exports, 'GetCurrentMapStyle', function() {
        return e;
    });
    var d = c('7Sbqr');
    const e = () => d.default.session.mapStyle;
}), c.register('64TR40', function(b, k) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('dAmf5'),
        e = c('jgFbX'),
        f = c('bBJD3'),
        g = c('h1T4n');
    var h = a => {
        const i = (0, d.default)().worldManager.devices.getDeviceById(a.id);
        if (!i)
            return;
        const j = (0, g.default)(a.id);
        if (!j)
            return;
        const k = a.hooks || j.hooks;
        (0, e.default)({
            ...a,
            hooks: k,
            placeInstantly: !0,
            onPlace: j => {
                j && (0, f.default)({
                    id: i.id,
                    deviceTypeId: i.deviceOption.id,
                    options: JSON.stringify(a.options),
                    x: a.x,
                    y: a.y,
                    depth: j.layers.getOptionsDepth(),
                    layerId: j.layers.getOptionsLayer(),
                    name: a.name,
                    hooks: k
                });
            }
        });
    };
}), c.register('16ojk0', function(o, p) {
    a(o.exports, 'default', function() {
        return v;
    });
    var d = c('VAIs1'),
        e = c('8N2Yw'),
        f = c('xORK+'),
        g = c('uPP4W'),
        h = c('qEw51'),
        i = c('Ly1h3'),
        j = c('XRX1525'),
        k = c('Cpebg');
    const {
        Option: l
    } = i.default;

    function m(a) {
        return a && a.type && (a.type.isSelectOption || a.type.isSelectOptGroup);
    }
    const n = (a, c) => {
            const {
                prefixCls: o,
                className: p,
                popupClassName: q,
                dropdownClassName: r,
                children: s,
                dataSource: t
            } = u, v = (0, e.default)(s);
            let w;
            1 === v.length && (0, k.isValidElement)(v[0]) && !m(v[0]) && ([x] = v);
            const y = x ? () => x : void 0;
            let z;
            z = v.length && m(v[0]) ? s : t ? t.map(u => {
                if ((0, k.isValidElement)(u))
                    return u;
                switch (typeof u) {
                    case 'string':
                        return g.createElement(l, {
                            key: u,
                            value: u
                        }, u);
                    case 'object': {
                        const {
                            value: A
                        } = B;
                        return g.createElement(l, {
                            key: A,
                            value: A
                        }, B.text);
                    }
                    default:
                        return;
                }
            }) : [];
            const {
                getPrefixCls: A
            } = g.useContext(h.ConfigContext), B = A('select', o);
            return g.createElement(i.default, Object.assign({
                ref: c
            }, (0, f.default)(u, [
                'dataSource',
                'dropdownClassName'
            ]), {
                prefixCls: B,
                popupClassName: q || r,
                className: b(d)(`${ B }-auto-complete`, p),
                mode: i.default.SECRET_COMBOBOX_MODE_DO_NOT_USE
            }, {
                getInputElement: y
            }), z);
        },
        o = g.forwardRef(n),
        p = (0, j.default)(o);
    o.Option = l, o._InternalPanelDoNotUseOrYouWillBeFired = p;
    var q = r;
});