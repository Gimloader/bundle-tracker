function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('4cENd', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _h(b.exports, 'default', function() {
        return _G;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('Axq+p'),
        h = a('2x11J'),
        i = a('bHGrl'),
        j = a('le6+G'),
        k = a('sgToH'),
        l = a('cvto726'),
        m = a('j2ADs'),
        n = a('PMl60'),
        o = a('b5kvC'),
        p = a('LSr+f'),
        q = a('j8Sbb'),
        r = a('0gSqK'),
        s = a('9p41I'),
        t = a('FK3Hv'),
        u = a('QWlkc'),
        v = a('86hSF'),
        w = a('NDqOd'),
        x = a('WVaD1'),
        y = a('JNsYL'),
        z = a('5pJ5j'),
        A = a('Xc4Kz'),
        B = a('7/DOy'),
        C = a('mQCZt'),
        D = a('11nl3'),
        E = a('suACe');
    let F;
    var _G = (0, h.observer)(_h => {
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
                _h.setToHomeScreen(), _X(q.OptionsMenuScreen.home);
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
            _X = _h => (0, r.default)(_h),
            Y = _h => {
                (0, t.playClickSound)(), _X(_h);
            },
            Z = () => {
                _X(q.OptionsMenuScreen.home);
            };
        return (0, e.jsx)(k.default, {
            placement: 'left',
            open: K,
            onClose: W,
            afterOpenChange: _h => {
                _h && O(!1), _h || V();
            },
            width: 600,
            destroyOnClose: !0,
            children: (0, e.jsxs)(_H, {
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
                                                _X(q.OptionsMenuScreen.mapOptions);
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
    const _H = g.default.div.attrs({
        className: 'maxWidth'
    })(F || (F = (_h => _h)``));
}), a.register('LSr+f', function(b, c) {
    _h(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('j2ADs');
    a('LEQ5w');
    var f = a('Axq+p'),
        g = a('b5kvC'),
        h = a('0HHAH'),
        i = a('9R7cy');
    let j;
    var _k = _h => {
        const {
            title: l,
            description: m
        } = _h;
        return (0, d.jsxs)(_l, {
            onClick: _h.onClick,
            children: [
                (0, d.jsx)('div', {
                    style: {
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: 14,
                        marginRight: 20
                    },
                    children: (0, d.jsx)(i.default, {
                        name: _h.icon
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
    const _l = (0, f.default)(h.VerticallyCentered).attrs({
        className: 'maxWidth'
    })(j || (j = (_h => _h)`
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background 0.18s ease-in-out;
  border-radius: 8px;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`));
}), a.register('0gSqK', function(b, c) {
    _h(b.exports, 'default', function() {
        return _e;
    });
    var d = a('iWivW');
    var _e = _h => {
        d.default.gui.none.optionsMenu.screen = _h;
    };
}), a.register('9p41I', function(b, c) {
    _h(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+'),
        e = a('sgToH'),
        f = a('cvto726'),
        g = a('vKq/0'),
        h = a('j2ADs');
    a('LEQ5w');
    var i = a('Axq+p'),
        j = a('bzU3s'),
        k = a('vShe/'),
        l = a('qVhMZ'),
        m = a('QVC+I'),
        n = a('bHGrl'),
        o = a('2x11J'),
        p = a('7FAg+');
    let q;
    const r = (0, o.observer)(_h => {
            const {
                session: {
                    globalPermissions: s
                }
            } = (0, n.default)(), t = (_h, t) => {
                const u = {
                    adding: s.adding,
                    removing: s.removing,
                    editing: s.editing,
                    manageCodeGrids: s.manageCodeGrids
                };
                u[_h] = t, (0, p.default)(u);
            };
            return (0, d.jsxs)(e.default, {
                placement: 'left',
                open: _h.open,
                onClose: _h.close,
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
                            (0, d.jsx)(_s, {
                                name: 'Adding',
                                description: `Are other players allowed to add ${ j.default.terrain.singular }, ${ j.default.prop.plural }, ${ j.default.device.plural }, and ${ j.default.wire.singular } to the map?`,
                                enabled: s.adding,
                                onChange: _h => t('adding', _h)
                            }),
                            (0, d.jsx)(_s, {
                                name: 'Removing',
                                description: 'Are other players allowed to remove things from the map?',
                                enabled: s.removing,
                                onChange: _h => t('removing', _h)
                            }),
                            (0, d.jsx)(_s, {
                                name: 'Editing',
                                description: `Are other players allowed to modify options for ${ j.default.prop.plural }, ${ j.default.device.plural }, and ${ j.default.wire.singular }?`,
                                enabled: s.editing,
                                onChange: _h => t('editing', _h)
                            }),
                            (0, d.jsx)(_s, {
                                name: (0, l.CapitalizeFirstLetter)(m.default.grid.plural),
                                description: `Are other players allowed to create and edit ${ m.default.grid.plural } for ${ j.default.device.plural }?`,
                                enabled: s.manageCodeGrids,
                                onChange: _h => t('manageCodeGrids', _h)
                            })
                        ]
                    })
                ]
            });
        }),
        _s = _h => (0, d.jsxs)(_u, {
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
                            children: _h.name
                        }),
                        (0, d.jsx)(h.default.Text, {
                            children: _h.description
                        })
                    ]
                }),
                (0, d.jsx)('div', {
                    children: (0, d.jsx)(g.default, {
                        checked: _h.enabled,
                        onChange: _h.onChange
                    })
                })
            ]
        });
    var _t = r;
    const _u = i.default.div.attrs({
        className: 'flex between'
    })(q || (q = (_h => _h)`
  padding: 17px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
`));
}), a.register('bzU3s', function(b, c) {
    _h(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('7FAg+', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('x7BBh'),
        e = a('Quxw3');
    var _f = _h => {
        (0, e.default)(d.default.setGlobalPermissions, {
            adding: _h.adding,
            removing: _h.removing,
            editing: _h.editing,
            manageCodeGrids: _h.manageCodeGrids
        });
    };
}), a.register('QWlkc', function(b, c) {
    _h(b.exports, 'default', function() {
        return _E;
    });
    var d = a('0hzx+'),
        e = a('sgToH'),
        f = a('inwN3'),
        g = a('80XJ3'),
        h = a('cvto726'),
        i = a('j2ADs'),
        j = a('LEQ5w'),
        k = a('Axq+p'),
        l = a('bzU3s'),
        m = a('vShe/'),
        n = a('2x11J'),
        o = a('bHGrl'),
        p = a('qZD6E'),
        q = a('YdkEp'),
        r = a('hR/50'),
        s = a('qVhMZ'),
        t = a('AvtVx'),
        u = a('bhmwI'),
        v = a('+MyMe6'),
        w = a('kg3wN6'),
        x = a('swl/P'),
        y = a('D5xLI');
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
        C = (0, n.observer)(_h => {
            const {
                editing: D,
                me: E,
                gui: F
            } = (0, o.default)();
            var G;
            const [H, I] = j.useState(null !== (G = localStorage.getItem(v.default.zonedDeviceViews)) && void 0 !== G ? G : w.ZonedDeviceDisplayOptions.bordersOnly);
            return (0, d.jsx)(e.default, {
                placement: 'left',
                open: _h.open,
                onClose: _h.close,
                width: 450,
                title: 'Editing Options',
                children: (0, d.jsxs)(h.default, {
                    direction: 'vertical',
                    className: 'maxWidth',
                    size: 14,
                    children: [
                        (0, d.jsx)(_D, {
                            name: 'Camera Zoom',
                            description: 'Zoom out to see more in edit mode',
                            children: (0, d.jsx)(g.default, {
                                min: 0.3,
                                max: 1.5,
                                step: 0.1,
                                className: 'maxWidth',
                                value: E.editing.preferences.cameraZoom,
                                onChange: _h => {
                                    E.editing.preferences.cameraZoom = _h, (0, y.default)().cameraHelper.forceRefresh();
                                }
                            })
                        }),
                        (0, d.jsx)(_D, {
                            name: 'Player Collision',
                            description: 'Disable to walk through walls & objects in edit mode',
                            children: (0, d.jsxs)(f.default, {
                                className: 'maxWidth',
                                value: E.phase,
                                onChange: _h => {
                                    E.editing.preferences.phase = _h, (0, p.default)(_h);
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
                        (0, d.jsx)(_D, {
                            name: 'Player Speed',
                            description: 'Adjust how fast you move in edit mode',
                            children: (0, d.jsx)(f.default, {
                                className: 'maxWidth',
                                value: E.movementSpeed / q.default.normal,
                                onChange: _h => {
                                    E.editing.preferences.movementSpeed = _h, (0, r.default)(_h);
                                },
                                children: B.map(_h => (0, d.jsx)(f.default.Option, {
                                    value: _h.value,
                                    children: _h.name
                                }, `speed-${ _h.value }`))
                            })
                        }),
                        (0, d.jsx)(_D, {
                            name: 'Grid Snap',
                            description: `When placing ${ l.default.prop.plural } & ${ l.default.device.plural }, easily align them using grid snap`,
                            children: (0, d.jsx)(f.default, {
                                className: 'maxWidth',
                                value: D.gridSnap,
                                onChange: _h => D.gridSnap = _h,
                                children: A.map(_h => (0, d.jsx)(f.default.Option, {
                                    value: _h,
                                    children: 0 === _h ? 'Off' : _h
                                }, `grid-snap-${ _h }`))
                            })
                        }),
                        (0, d.jsx)(_D, {
                            name: 'Show Grid',
                            children: (0, d.jsxs)(f.default, {
                                className: 'maxWidth',
                                value: F.showingGrid,
                                onChange: _h => {
                                    E.editing.preferences.showGrid = _h, F.showingGrid = _h;
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
                        (0, d.jsx)(_D, {
                            name: `Zone ${ (0, s.CapitalizeFirstLetter)(l.default.device.singular) } Display`,
                            description: `Set the appearance of ${ l.default.device.plural } that use a zone area`,
                            children: (0, d.jsxs)(f.default, {
                                className: 'maxWidth',
                                value: H,
                                onChange: _h => {
                                    localStorage.setItem(v.default.zonedDeviceViews, _h), I(_h), (0, x.Reset)();
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
                        (0, d.jsx)(_D, {
                            name: `${ (0, s.CapitalizeFirstLetter)(t.MemoryName) } Bar`,
                            description: `Show the ${ t.MemoryName } bar, even if ${ t.MemoryName } is below ${ u.DEFAULT_SHOW_MEMORY_AT_PERCENT }%`,
                            children: (0, d.jsxs)(f.default, {
                                className: 'maxWidth',
                                value: D.showMemoryBarAtAllTimes,
                                onChange: _h => D.showMemoryBarAtAllTimes = _h,
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
        _D = _h => (0, d.jsxs)(_F, {
            children: [
                (0, d.jsxs)('div', {
                    children: [
                        (0, d.jsx)(i.default.Title, {
                            level: 5,
                            style: {
                                color: m.default.White
                            },
                            children: _h.name
                        }),
                        _h.description ? (0, d.jsx)(i.default.Text, {
                            children: _h.description
                        }) : null
                    ]
                }),
                (0, d.jsx)('div', {
                    style: {
                        marginTop: 10
                    },
                    children: _h.children
                })
            ]
        });
    var _E = C;
    const _F = k.default.div.attrs({
        className: 'maxWidth'
    })(z || (z = (_h => _h)`
  padding: 17px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
`));
}), a.register('+MyMe6', function(b, c) {
    _h(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        zonedDeviceViews: 'zoned-device-views'
    };
}), a.register('kg3wN6', function(b, c) {
    _h(b.exports, 'ZonedDeviceDisplayOptions', function() {
        return _e;
    }), _h(b.exports, 'default', function() {
        return _h;
    });
    var d = a('+MyMe6');
    let _e;
    var f;
    (f = _e || (_e = {})).visible = 'visible', f.bordersOnly = 'bordersOnly', f.fullyHidden = 'fullyHidden';
    const g = () => {
        const _h = localStorage.getItem(d.default.zonedDeviceViews);
        return _h || _e.bordersOnly;
    };
    var _h = {
        shouldShow: _o => g() !== _e.fullyHidden,
        shouldShowInnerZone: _o => g() !== _e.bordersOnly
    };
}), a.register('86hSF', function(b, c) {
    _o(b.exports, 'default', function() {
        return _k;
    });
    var d = a('iWivW'),
        e = a('EqyfB'),
        f = a('D5xLI'),
        g = a('aIyMH'),
        h = a('KzfsH'),
        i = a('fy44y'),
        j = a('b376+');
    var _k = _o => {
        const l = (0, f.default)().worldManager.devices.allDevices.find(_o => _o.deviceOption.id === e.default.mapOptions),
            m = l => {
                d.default.me.editing.device.currentlyEditedDevice = {
                    id: l,
                    deviceOptionId: e.default.mapOptions
                }, _o();
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
            onPlace: _o => {
                (0, i.default)({
                    id: _o.id,
                    deviceTypeId: e.default.mapOptions,
                    x: _o.x,
                    y: _o.y,
                    name: _o.name,
                    options: JSON.stringify(_o.options)
                }), m(_o.id);
            }
        });
    };
}), a.register('NDqOd', function(b, c) {
    _o(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('sgToH');
    a('LEQ5w');
    var f = a('2x11J'),
        g = a('D5xLI'),
        h = a('EqyfB'),
        i = a('eeCUl'),
        j = a('ZWpm0');
    var _k = (0, f.observer)(_o => {
        const {
            options: l,
            position: m,
            hooks: n
        } = (0, i.default)();
        return (0, d.jsx)(e.default, {
            placement: 'left',
            open: _o.open,
            onClose: _o.close,
            width: 550,
            title: 'Map Options',
            children: (() => {
                const _o = (0, g.default)().worldManager.devices.allDevices.find(_o => _o.deviceOption.id === h.default.mapOptions);
                return _o ? (0, d.jsx)(j.default, {
                    device: _o,
                    deviceOption: _o.deviceOption,
                    options: l,
                    position: m,
                    hooks: n
                }) : null;
            })()
        });
    });
}), a.register('WVaD1', function(b, c) {
    _B(b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+'),
        e = a('xe9IK1'),
        f = a('XCvA52'),
        g = a('ulE4q'),
        h = a('fmVdR'),
        i = a('sgToH'),
        j = a('ewwAh'),
        k = a('MSsQO'),
        l = a('YRlpt'),
        m = a('j2ADs');
    a('LEQ5w');
    var n = a('Quxw3'),
        o = a('x7BBh'),
        p = a('sHRDd'),
        q = a('PMl60'),
        r = (q = a('PMl60'), a('b5kvC')),
        s = a('2x11J'),
        t = a('bHGrl'),
        u = a('7/DOy');
    var _v = (0, s.observer)(_B => {
        const {
            me: {
                roleLevel: w
            }
        } = (0, t.default)(), [x, y, z] = (0, q.useBoolean)(!1);
        return (0, d.jsxs)(i.default, {
            placement: 'left',
            open: _B.open,
            onClose: _B.close,
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
                            success: _B => {
                                const A = `${ (0, q.getDomain)() }/creative/showcase/${ _B.id }`;
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
                                                            var _B;
                                                            null === navigator || void 0 === navigator || null === (_B = navigator.clipboard) || void 0 === _B || _B.writeText(A), k.default.success('Copied to clipboard!');
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
                                                            _i.expirationDays,
                                                            ' ',
                                                            (0, q.plural)('day', _i.expirationDays),
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
}), a.register('xe9IK1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('n3LQ31'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'SaveOutlined';
    var _i = e.forwardRef(h);
}), a.register('n3LQ31', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('XCvA52', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('Onj9L2'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'ShareAltOutlined';
    var _i = e.forwardRef(h);
}), a.register('Onj9L2', function(b, c) {
    _b(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('5pJ5j', function(b, c) {
    _b(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('sgToH'),
        f = a('cvto726'),
        g = a('j2ADs');
    a('LEQ5w');
    var h = a('sHRDd'),
        i = a('Axq+p'),
        j = a('0HHAH'),
        k = a('9R7cy');
    let l;
    var _m = _b => (0, d.jsx)(e.default, {
        placement: 'left',
        open: _b.open,
        onClose: _b.close,
        width: 500,
        title: 'Documentation & Help',
        children: (0, d.jsxs)(f.default, {
            className: 'maxName',
            direction: 'vertical',
            size: 14,
            children: [
                (0, d.jsx)(_n, {
                    link: 'https://forum.creative.gimkit.com',
                    name: 'Community Forum',
                    description: 'Find answers, ask questions, and get help with your map!'
                }),
                (0, d.jsx)(_n, {
                    link: 'https://docs.creative.gimkit.com',
                    name: 'Help Docs',
                    description: 'We\'re still building out our documentation, but you can find some helpful articles here!'
                })
            ]
        })
    });
    const _n = _b => (0, d.jsx)('a', {
            href: _b.link,
            target: '_blank',
            children: (0, d.jsxs)(_o, {
                children: [
                    (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(g.default.Title, {
                                level: 4,
                                style: {
                                    color: h.default.White
                                },
                                children: _b.name
                            }),
                            (0, d.jsx)(g.default.Text, {
                                style: {
                                    marginTop: 2
                                },
                                children: _b.description
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
        _o = (0, i.default)(j.VerticallyCentered)(l || (l = (_b => _b)`
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background 0.18s ease-in-out;
  border-radius: 8px;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`));
}), a.register('suACe', function(b, c) {
    _b(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+'),
        e = a('sgToH');
    a('LEQ5w');
    var f = a('QVkUB');
    var _g = _b => (0, d.jsx)(e.default, {
        placement: 'left',
        open: _b.open,
        onClose: _b.close,
        destroyOnClose: !0,
        width: 500,
        children: (0, d.jsx)(f.default, {
            close: _b.close
        })
    });
}), a.register('QVkUB', function(b, c) {
    _b(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('+i8ep'),
        g = a('NIZyA'),
        h = a('1P5ls'),
        i = a('6CIVV'),
        j = a('CAKUf'),
        k = a('w0a3U'),
        l = a('PMl60'),
        m = a('vShe/');
    const n = e.lazy(() => a('Mkr21')),
        o = e.lazy(() => a('uv8+3')),
        p = e.lazy(() => a('I5VZY'));
    var _q = _b => {
        const [r, s, t] = (0, l.useBoolean)(!0), [u, v] = e.useState(!1), [w, x] = e.useState(), [y, z] = e.useState(), A = () => {
            s(), x(void 0), z(void 0), v(!1), (0, k.Request)({
                url: `/api/created-map/listing/creator-info/${ window._mapId }`,
                success: _b => {
                    _b.data && x(_b.data), _b.publishRequirementError && z(_b.publishRequirementError);
                },
                error: _b => {
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
                                close: _b.close
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
}), a.register('Mkr21', function(_b, c) {
    _b.exports = import('./' + a('HmN9A').resolve('7rUtN')).then(() => a('rrDLV'));
}), a.register('uv8+3', function(b, c) {
    b.exports = import('./' + a('HmN9A').resolve('21jMk')).then(() => a('Bx8X5'));
}), a.register('I5VZY', function(b, c) {
    b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('cUNwf')),
        import('./' + a('HmN9A').resolve('iQTV4')),
        import('./' + a('HmN9A').resolve('cWZ5T')),
        import('./' + a('HmN9A').resolve('lkHb8')),
        import('./' + a('HmN9A').resolve('5ngr6'))
    ]).then(() => a('LbWyu'));
}), a.register('pMmde1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('+bIFH'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var _i = e.forwardRef(h);
}), a.register('+bIFH', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('sCbH9', function(b, c) {
    _i(b.exports, 'isGoogleFontLoaded', function() {
        return _f;
    }), _i(b.exports, 'default', function() {
        return _g;
    });
    var d = a('/oq/k');
    const e = [],
        _f = _i => e.includes(_i);
    var _g = _i => {
        const {
            familyName: h,
            onLoad: i
        } = _i;
        e.includes(h) ? i && i() : _b(d).load({
            google: {
                families: [`${ h }:400,700`]
            },
            fontactive: _i => {
                e.includes(_i) || e.push(_i), h === _i && i && i();
            }
        });
    };
}), a.register('dHtbx0', function(_b, c) {
    _i(_b.exports, 'CanAddTerrain', function() {
        return _f;
    });
    var d = a('iWivW'),
        e = a('O3NOb');
    const _f = _i => {
        var g;
        const h = d.default.worldOptions.terrainOptions.find(g => g.id === _i);
        if (!h)
            return !1;
        if (null === (g = h.blockedMapStyles) || void 0 === g ? void 0 : g.length) {
            const _i = d.default.session.mapStyle;
            if (h.blockedMapStyles.includes(_i))
                return !1;
        }
        const i = h.minimumRoleLevel,
            j = h.maximumRoleLevel;
        return (0, e.IsRoleLevelBetween)(i, j);
    };
}), a.register('bh+op', function(b, c) {
    _n(b.exports, 'GetCurrentMapStyle', function() {
        return _e;
    });
    var d = a('iWivW');
    const _e = () => d.default.session.mapStyle;
}), a.register('uRAeN', function(b, c) {
    _n(b.exports, 'default', function() {
        return _h;
    });
    var d = a('D5xLI'),
        e = a('aIyMH'),
        f = a('fy44y'),
        g = a('zZJfb');
    var _h = _n => {
        const i = (0, d.default)().worldManager.devices.getDeviceById(_n.id);
        if (!i)
            return;
        const j = (0, g.default)(_n.id);
        if (!j)
            return;
        const k = _n.hooks || j.hooks;
        (0, e.default)({
            ..._n,
            hooks: k,
            placeInstantly: !0,
            onPlace: j => {
                j && (0, f.default)({
                    id: i.id,
                    deviceTypeId: i.deviceOption.id,
                    options: JSON.stringify(_n.options),
                    x: _n.x,
                    y: _n.y,
                    depth: j.layers.getOptionsDepth(),
                    layerId: j.layers.getOptionsLayer(),
                    name: _n.name,
                    hooks: k
                });
            }
        });
    };
}), a.register('OB7Pc', function(b, c) {
    _n(b.exports, 'default', function() {
        return _t;
    });
    var d = a('JrtKP'),
        e = a('Ug51y0'),
        f = a('sWKBM'),
        g = a('LEQ5w'),
        h = a('1P5ls'),
        i = a('inwN3'),
        j = a('kRwUk25'),
        k = a('CMcLV');
    const {
        Option: l
    } = i.default;

    function m(_n) {
        return _n && _n.type && (_n.type.isSelectOption || _n.type.isSelectOptGroup);
    }
    const m = (e, a) => {
            const {
                prefixCls: n,
                className: o,
                popupClassName: p,
                dropdownClassName: q,
                children: r,
                dataSource: s
            } = e, _t = (0, e.default)(r);
            let u;
            1 === _t.length && (0, k.isValidElement)(_t[0]) && !m(_t[0]) && ([v] = _t);
            const w = v ? () => v : void 0;
            let x;
            x = _t.length && m(_t[0]) ? r : s ? s.map(e => {
                if ((0, k.isValidElement)(e))
                    return e;
                switch (typeof e) {
                    case 'string':
                        return g.createElement(l, {
                            key: e,
                            value: e
                        }, e);
                    case 'object': {
                        const {
                            value: y
                        } = e;
                        return g.createElement(l, {
                            key: y,
                            value: y
                        }, e.text);
                    }
                    default:
                        return;
                }
            }) : [];
            const {
                getPrefixCls: y
            } = g.useContext(h.ConfigContext), z = y('select', n);
            return g.createElement(i.default, Object.assign({
                ref: a
            }, (0, f.default)(e, [
                'dataSource',
                'dropdownClassName'
            ]), {
                prefixCls: z,
                popupClassName: p || q,
                className: t(d)(`${ z }-auto-complete`, o),
                mode: i.default.SECRET_COMBOBOX_MODE_DO_NOT_USE
            }, {
                getInputElement: w
            }), x);
        },
        n = g.forwardRef(m),
        o = (0, j.default)(n);
    n.Option = l, n._InternalPanelDoNotUseOrYouWillBeFired = o;
    var p = n;
});