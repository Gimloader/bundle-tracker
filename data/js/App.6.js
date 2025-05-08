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
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function () {
        return _I;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....'), y = c('.....'), z = c('.....'), A = c('.....'), B = c('.....'), C = c('.....'), D = c('.....'), E = c('.....'), F = c('.....'), G = c('.....');
    let H;
    var _I = (0, j.observer)(J => {
        const {
                gui: {
                    none: {
                        optionsMenu: {screen: K}
                    }
                },
                me: {roleLevel: L}
            } = (0, k.default)(), M = (0, A.useAmIGameOwner)(), [N, O, P] = (0, p.useBoolean)(!0), [Q, R] = h.useState(!0);
        (0, l.useInputBlockingUI)();
        const S = h.useMemo(() => K === s.OptionsMenuScreen.mapOptions, [K]), T = h.useMemo(() => K === s.OptionsMenuScreen.editing, [K]), U = h.useMemo(() => K === s.OptionsMenuScreen.permissions, [K]), V = h.useMemo(() => K === s.OptionsMenuScreen.saving, [K]), W = h.useMemo(() => K === s.OptionsMenuScreen.help, [K]), X = h.useMemo(() => K === s.OptionsMenuScreen.publishing, [K]), Y = () => {
                J.setToHomeScreen(), _$(s.OptionsMenuScreen.home);
            }, Z = h.useCallback(() => {
                Q ? Y() : T || U || S || V || W || X || P();
            }, [
                P,
                S,
                T,
                U,
                V,
                W,
                X,
                Q,
                Y
            ]), _$ = ab => (0, t.default)(ab), ab = bb => {
                (0, v.playClickSound)(), _$(bb);
            }, bb = () => {
                _$(s.OptionsMenuScreen.home);
            };
        return (0, g.jsx)(m.default, {
            placement: 'left',
            open: N,
            onClose: Z,
            afterOpenChange: cb => {
                cb && R(!1), cb || Y();
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
                    (0, g.jsx)('div', { style: { height: 14 } }),
                    (0, g.jsxs)(n.default, {
                        className: 'maxAll',
                        direction: 'vertical',
                        size: 14,
                        children: [
                            M ? (0, g.jsxs)(g.Fragment, {
                                children: [
                                    (0, g.jsx)(r.default, {
                                        icon: 'fas fa-sliders-v-square',
                                        title: 'Map Options',
                                        description: 'Customize teams, game duration, and who is determined as the winner',
                                        onClick: () => {
                                            (0, v.playClickSound)(), (0, x.default)(() => {
                                                _$(s.OptionsMenuScreen.mapOptions);
                                            });
                                        }
                                    }),
                                    (0, g.jsx)(y.default, {
                                        open: S,
                                        close: bb
                                    })
                                ]
                            }) : null,
                            (0, g.jsx)(r.default, {
                                icon: 'fas fa-i-cursor',
                                title: 'Editing Options',
                                description: 'Adjust player collision, speed, and other settings to help you while editing',
                                onClick: () => ab(s.OptionsMenuScreen.editing)
                            }),
                            M && !(0, C.IsTutorial)() ? (0, g.jsxs)(g.Fragment, {
                                children: [
                                    (0, g.jsx)(r.default, {
                                        icon: 'fas fa-upload',
                                        title: 'Publish',
                                        description: 'Publish your map to be played by Gimkit users from around the world!',
                                        onClick: () => ab(s.OptionsMenuScreen.publishing)
                                    }),
                                    (0, g.jsx)(r.default, {
                                        icon: 'fas fa-share',
                                        title: 'Showcase & Save',
                                        description: 'Send a link to friends to have them test out your map!',
                                        onClick: () => ab(s.OptionsMenuScreen.saving)
                                    }),
                                    L >= D.RoleLevelConsts.admin ? (0, g.jsx)(r.default, {
                                        icon: 'fas fa-brackets-curly',
                                        title: 'Hooks',
                                        description: 'Allow game hosts to customize your map before hopping in!',
                                        onClick: () => (0, E.default)(F.default.hooks)
                                    }) : null,
                                    (0, g.jsx)(r.default, {
                                        icon: 'fas fa-user-tag',
                                        title: 'Permissions',
                                        description: 'Control who can make changes to the map when editing collaboratively',
                                        onClick: () => ab(s.OptionsMenuScreen.permissions)
                                    }),
                                    (0, g.jsx)(G.default, {
                                        open: X,
                                        close: bb
                                    }),
                                    (0, g.jsx)(u.default, {
                                        open: U,
                                        close: bb
                                    }),
                                    (0, g.jsx)(z.default, {
                                        open: V,
                                        close: bb
                                    })
                                ]
                            }) : null,
                            (0, g.jsx)(r.default, {
                                icon: 'fas fa-comment-dots',
                                title: 'Documentation & Help',
                                description: 'Get help building your map!',
                                onClick: () => ab(s.OptionsMenuScreen.help)
                            }),
                            (0, g.jsx)(B.default, {
                                open: W,
                                close: bb
                            })
                        ]
                    }),
                    (0, g.jsx)(w.default, {
                        open: T,
                        close: bb
                    })
                ]
            })
        });
    });
    const _J = i.default.div.attrs({ className: 'maxWidth' })(H || (H = (K => K)``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l;
    var _m = n => {
        const {
            title: o,
            description: p
        } = n;
        return (0, f.jsxs)(_n, {
            onClick: n.onClick,
            children: [
                (0, f.jsx)('div', {
                    style: {
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: 14,
                        marginRight: 20
                    },
                    children: (0, f.jsx)(k.default, { name: n.icon })
                }),
                (0, f.jsxs)('div', {
                    children: [
                        (0, f.jsx)(g.default.Title, {
                            style: {
                                marginBottom: 2,
                                fontWeight: i.FontWeights.Bold
                            },
                            level: 4,
                            children: o
                        }),
                        (0, f.jsx)(g.default.Text, { children: p })
                    ]
                })
            ]
        });
    };
    const _n = (0, h.default)(j.VerticallyCentered).attrs({ className: 'maxWidth' })(l || (l = (o => o)`
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background 0.18s ease-in-out;
  border-radius: 8px;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => {
        f.default.gui.none.optionsMenu.screen = h;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _v;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    c('.....');
    var k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....');
    let s;
    const t = (0, q.observer)(u => {
            const {
                    session: {globalPermissions: v}
                } = (0, p.default)(), w = (x, y) => {
                    const z = {
                        adding: v.adding,
                        removing: v.removing,
                        editing: v.editing,
                        manageCodeGrids: v.manageCodeGrids
                    };
                    z[x] = y, (0, r.default)(z);
                };
            return (0, f.jsxs)(g.default, {
                placement: 'left',
                open: u.open,
                onClose: u.close,
                width: 450,
                title: 'Permissions',
                children: [
                    (0, f.jsx)(j.default.Text, { children: 'Set what other players collaborating with you are allowed to do! Changes are applied immediately.' }),
                    (0, f.jsxs)(h.default, {
                        direction: 'vertical',
                        className: 'maxWidth',
                        size: 14,
                        style: { marginTop: 22 },
                        children: [
                            (0, f.jsx)(_u, {
                                name: 'Adding',
                                description: `Are other players allowed to add ${ l.default.terrain.singular }, ${ l.default.prop.plural }, ${ l.default.device.plural }, and ${ l.default.wire.singular } to the map?`,
                                enabled: v.adding,
                                onChange: x => w('adding', x)
                            }),
                            (0, f.jsx)(_u, {
                                name: 'Removing',
                                description: 'Are other players allowed to remove things from the map?',
                                enabled: v.removing,
                                onChange: x => w('removing', x)
                            }),
                            (0, f.jsx)(_u, {
                                name: 'Editing',
                                description: `Are other players allowed to modify options for ${ l.default.prop.plural }, ${ l.default.device.plural }, and ${ l.default.wire.singular }?`,
                                enabled: v.editing,
                                onChange: x => w('editing', x)
                            }),
                            (0, f.jsx)(_u, {
                                name: (0, n.CapitalizeFirstLetter)(o.default.grid.plural),
                                description: `Are other players allowed to create and edit ${ o.default.grid.plural } for ${ l.default.device.plural }?`,
                                enabled: v.manageCodeGrids,
                                onChange: x => w('manageCodeGrids', x)
                            })
                        ]
                    })
                ]
            });
        }), _u = v => (0, f.jsxs)(_w, {
            children: [
                (0, f.jsxs)('div', {
                    style: { marginRight: 35 },
                    children: [
                        (0, f.jsx)(j.default.Title, {
                            level: 5,
                            style: { color: m.default.White },
                            children: v.name
                        }),
                        (0, f.jsx)(j.default.Text, { children: v.description })
                    ]
                }),
                (0, f.jsx)('div', {
                    children: (0, f.jsx)(i.default, {
                        checked: v.enabled,
                        onChange: v.onChange
                    })
                })
            ]
        });
    var _v = t;
    const _w = k.default.div.attrs({ className: 'flex between' })(s || (s = (x => x)`
  padding: 17px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        (0, g.default)(f.default.setGlobalPermissions, {
            adding: i.adding,
            removing: i.removing,
            editing: i.editing,
            manageCodeGrids: i.manageCodeGrids
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _G;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....'), y = c('.....'), z = c('.....'), A = c('.....');
    let B;
    const C = [
            0,
            64,
            32,
            16,
            8,
            4,
            2
        ], D = [
            {
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
        ], E = (0, p.observer)(F => {
            const {
                editing: G,
                me: H,
                gui: I
            } = (0, q.default)();
            var J;
            const [K, L] = l.useState(null !== (J = localStorage.getItem(x.default.zonedDeviceViews)) && void 0 !== J ? J : y.ZonedDeviceDisplayOptions.bordersOnly);
            return (0, f.jsx)(g.default, {
                placement: 'left',
                open: F.open,
                onClose: F.close,
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
                                value: H.editing.preferences.cameraZoom,
                                onChange: M => {
                                    H.editing.preferences.cameraZoom = M, (0, A.default)().cameraHelper.forceRefresh();
                                }
                            })
                        }),
                        (0, f.jsx)(_F, {
                            name: 'Player Collision',
                            description: 'Disable to walk through walls & objects in edit mode',
                            children: (0, f.jsxs)(h.default, {
                                className: 'maxWidth',
                                value: H.phase,
                                onChange: M => {
                                    H.editing.preferences.phase = M, (0, r.default)(M);
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
                                value: H.movementSpeed / s.default.normal,
                                onChange: M => {
                                    H.editing.preferences.movementSpeed = M, (0, t.default)(M);
                                },
                                children: D.map(M => (0, f.jsx)(h.default.Option, {
                                    value: M.value,
                                    children: M.name
                                }, `speed-${ M.value }`))
                            })
                        }),
                        (0, f.jsx)(_F, {
                            name: 'Grid Snap',
                            description: `When placing ${ n.default.prop.plural } & ${ n.default.device.plural }, easily align them using grid snap`,
                            children: (0, f.jsx)(h.default, {
                                className: 'maxWidth',
                                value: G.gridSnap,
                                onChange: M => G.gridSnap = M,
                                children: C.map(M => (0, f.jsx)(h.default.Option, {
                                    value: M,
                                    children: 0 === M ? 'Off' : M
                                }, `grid-snap-${ M }`))
                            })
                        }),
                        (0, f.jsx)(_F, {
                            name: 'Show Grid',
                            children: (0, f.jsxs)(h.default, {
                                className: 'maxWidth',
                                value: I.showingGrid,
                                onChange: M => {
                                    H.editing.preferences.showGrid = M, I.showingGrid = M;
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
                                value: K,
                                onChange: M => {
                                    localStorage.setItem(x.default.zonedDeviceViews, M), L(M), (0, z.Reset)();
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
                                value: G.showMemoryBarAtAllTimes,
                                onChange: M => G.showMemoryBarAtAllTimes = M,
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
        }), _F = G => (0, f.jsxs)(_H, {
            children: [
                (0, f.jsxs)('div', {
                    children: [
                        (0, f.jsx)(k.default.Title, {
                            level: 5,
                            style: { color: o.default.White },
                            children: G.name
                        }),
                        G.description ? (0, f.jsx)(k.default.Text, { children: G.description }) : null
                    ]
                }),
                (0, f.jsx)('div', {
                    style: { marginTop: 10 },
                    children: G.children
                })
            ]
        });
    var _G = E;
    const _H = m.default.div.attrs({ className: 'maxWidth' })(B || (B = (I => I)`
  padding: 17px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = { zonedDeviceViews: 'zoned-device-views' };
}), c.register('.....', function (d, e) {
    a(d.exports, 'ZonedDeviceDisplayOptions', function () {
        return _g;
    }), a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    let _g;
    var h;
    (h = _g || (_g = {})).visible = 'visible', h.bordersOnly = 'bordersOnly', h.fullyHidden = 'fullyHidden';
    const i = () => {
        const j = localStorage.getItem(f.default.zonedDeviceViews);
        return j || _g.bordersOnly;
    };
    var _j = {
        shouldShow: k => i() !== _g.fullyHidden,
        shouldShowInnerZone: k => i() !== _g.bordersOnly
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    var _m = n => {
        const o = (0, h.default)().worldManager.devices.allDevices.find(p => p.deviceOption.id === g.default.mapOptions), p = q => {
                f.default.me.editing.device.currentlyEditedDevice = {
                    id: q,
                    deviceOptionId: g.default.mapOptions
                }, n();
            };
        o ? p(o.id) : (0, i.default)({
            id: (0, l.GenerateNewDeviceId)(),
            deviceOption: (0, j.FetchDeviceOptionById)(g.default.mapOptions),
            x: 0,
            y: 0,
            name: '',
            options: {},
            state: {},
            placedByClient: !0,
            isPreview: !1,
            onPlace: q => {
                (0, k.default)({
                    id: q.id,
                    deviceTypeId: g.default.mapOptions,
                    x: q.x,
                    y: q.y,
                    name: q.name,
                    options: JSON.stringify(q.options)
                }), p(q.id);
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    var _m = (0, h.observer)(n => {
        const {
            options: o,
            position: p,
            hooks: q
        } = (0, k.default)();
        return (0, f.jsx)(g.default, {
            placement: 'left',
            open: n.open,
            onClose: n.close,
            width: 550,
            title: 'Map Options',
            children: (() => {
                const r = (0, i.default)().worldManager.devices.allDevices.find(s => s.deviceOption.id === j.default.mapOptions);
                return r ? (0, f.jsx)(l.default, {
                    device: r,
                    deviceOption: r.deviceOption,
                    options: o,
                    position: p,
                    hooks: q
                }) : null;
            })()
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _x;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    c('.....');
    var p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = (s = c('.....'), c('.....')), u = c('.....'), v = c('.....'), w = c('.....');
    var _x = (0, u.observer)(y => {
        const {
                me: {roleLevel: z}
            } = (0, v.default)(), [A, B, C] = (0, s.useBoolean)(!1);
        return (0, f.jsxs)(k.default, {
            placement: 'left',
            open: y.open,
            onClose: y.close,
            width: 570,
            title: 'Showcase & Save',
            children: [
                (0, f.jsx)(o.default.Title, {
                    level: 4,
                    style: { color: r.default.White },
                    children: 'Showcase Link'
                }),
                (0, f.jsx)(o.default.Text, {
                    style: { marginTop: 2 },
                    children: 'Generate a showcase link! Share the link with friends to have them test your map!'
                }),
                (0, f.jsx)(i.default, {
                    block: !0,
                    size: 'large',
                    type: 'primary',
                    loading: A,
                    icon: (0, f.jsx)(h.default, {}),
                    onClick: () => {
                        A || (B(), (0, s.request)({
                            url: '/api/created-map/publish-link',
                            data: { id: window._mapId },
                            success: D => {
                                const E = `${ (0, s.getDomain)() }/creative/showcase/${ D.id }`;
                                n.default.success({
                                    icon: (0, f.jsx)(f.Fragment, {}),
                                    footer: null,
                                    width: 550,
                                    closable: !0,
                                    maskClosable: !0,
                                    bodyStyle: { padding: 20 },
                                    content: (0, f.jsxs)(f.Fragment, {
                                        children: [
                                            (0, f.jsx)(o.default.Title, {
                                                level: 4,
                                                style: { fontWeight: t.FontWeights.Bold },
                                                children: 'Showcase Link'
                                            }),
                                            (0, f.jsxs)('div', {
                                                className: 'flex vc',
                                                style: { marginTop: 2 },
                                                children: [
                                                    (0, f.jsx)(l.default, {
                                                        type: 'text',
                                                        value: E,
                                                        readOnly: !0
                                                    }),
                                                    (0, f.jsx)(i.default, {
                                                        style: { marginLeft: 10 },
                                                        type: 'primary',
                                                        onClick: () => {
                                                            var F;
                                                            null === navigator || void 0 === navigator || null === (F = navigator.clipboard) || void 0 === F || F.writeText(E), m.default.success('Copied to clipboard!');
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
                                                            D.expirationDays,
                                                            ' ',
                                                            (0, s.plural)('day', D.expirationDays),
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
                            both: C
                        }));
                    },
                    style: { marginTop: 10 },
                    children: 'Generate Showcase Link'
                }),
                (0, f.jsx)(j.default, {}),
                (0, f.jsx)(o.default.Title, {
                    level: 4,
                    style: { color: r.default.White },
                    children: 'Save'
                }),
                (0, f.jsx)(o.default.Text, {
                    style: { marginTop: 2 },
                    children: 'Maps are automatically saved every few minutes. However, you can save manually by clicking the button below!'
                }),
                (0, f.jsx)(i.default, {
                    block: !0,
                    size: 'large',
                    type: 'primary',
                    icon: (0, f.jsx)(g.default, {}),
                    onClick: () => (0, p.default)(q.default.save, {}),
                    style: { marginTop: 10 },
                    children: 'Save Map'
                }),
                z >= w.RoleLevelConsts.admin ? (0, f.jsxs)(f.Fragment, {
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
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'SaveOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z' }
                }]
        },
        name: 'save',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'ShareAltOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z' }
                }]
        },
        name: 'share-alt',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    c('.....');
    var j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    let n;
    var _o = p => (0, f.jsx)(g.default, {
        placement: 'left',
        open: p.open,
        onClose: p.close,
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
    const _p = q => (0, f.jsx)('a', {
            href: q.link,
            target: '_blank',
            children: (0, f.jsxs)(_q, {
                children: [
                    (0, f.jsxs)('div', {
                        children: [
                            (0, f.jsx)(i.default.Title, {
                                level: 4,
                                style: { color: j.default.White },
                                children: q.name
                            }),
                            (0, f.jsx)(i.default.Text, {
                                style: { marginTop: 2 },
                                children: q.description
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
                            style: { color: j.default.White }
                        })
                    })
                ]
            })
        }), _q = (0, k.default)(l.VerticallyCentered)(n || (n = (r => r)`
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background 0.18s ease-in-out;
  border-radius: 8px;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var h = c('.....');
    var _i = j => (0, f.jsx)(g.default, {
        placement: 'left',
        open: j.open,
        onClose: j.close,
        destroyOnClose: !0,
        width: 500,
        children: (0, f.jsx)(h.default, { close: j.close })
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _s;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    const p = g.lazy(() => c('.....')), q = g.lazy(() => c('.....')), r = g.lazy(() => c('.....'));
    var _s = t => {
        const [u, v, w] = (0, n.useBoolean)(!0), [x, y] = g.useState(!1), [z, A] = g.useState(), [B, C] = g.useState(), D = () => {
                v(), A(void 0), C(void 0), y(!1), (0, m.Request)({
                    url: `/api/created-map/listing/creator-info/${ window._mapId }`,
                    success: E => {
                        E.data && A(E.data), E.publishRequirementError && C(E.publishRequirementError);
                    },
                    error: E => {
                        y(!0);
                    },
                    both: w
                });
            };
        (0, h.useDidMount)(D);
        return (0, f.jsx)(g.Suspense, {
            fallback: null,
            children: u ? (0, f.jsx)('div', {
                className: 'maxAll flex-center',
                children: (0, f.jsx)(k.default, { size: 'large' })
            }) : x ? (0, f.jsx)(i.default, {
                type: 'error',
                showIcon: !0,
                message: 'Error Loading Map Publishing',
                description: 'There was an error fetching publishing details for this map. Please check back in later!'
            }) : z ? (0, f.jsx)(j.default, {
                theme: { components: { Tabs: { colorPrimary: o.default.Yellow } } },
                children: (0, f.jsxs)(l.default, {
                    defaultActiveKey: 'overview',
                    children: [
                        (0, f.jsx)(l.default.TabPane, {
                            tab: 'Overview',
                            children: (0, f.jsx)(q, {
                                data: z,
                                refetch: D,
                                close: t.close
                            })
                        }, 'overview'),
                        (0, f.jsx)(l.default.TabPane, {
                            tab: 'Map Details',
                            children: (0, f.jsx)(r, {
                                ...z,
                                refetch: D
                            })
                        }, 'details')
                    ]
                })
            }) : (0, f.jsx)(p, {
                publishRequirementError: B,
                refetch: D
            })
        });
    };
}), c.register('.....', function (d, e) {
    d.exports = import('./' + c('.....').resolve('7rUtN')).then(() => c('.....'));
}), c.register('.....', function (d, e) {
    d.exports = import('./' + c('.....').resolve('21jMk')).then(() => c('.....'));
}), c.register('.....', function (d, e) {
    d.exports = Promise.all([
        import('./' + c('.....').resolve('2bgip')),
        import('./' + c('.....').resolve('gf3XU')),
        import('./' + c('.....').resolve('9oTou')),
        import('./' + c('.....').resolve('lkHb8')),
        import('./' + c('.....').resolve('5ngr6'))
    ]).then(() => c('.....'));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
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
                    attrs: { d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z' }
                }]
        },
        name: 'down',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'isGoogleFontLoaded', function () {
        return _h;
    }), a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....');
    const g = [], _h = i => g.includes(i);
    var _i = j => {
        const {
            familyName: k,
            onLoad: l
        } = j;
        g.includes(k) ? l && l() : b(f).load({
            google: { families: [`${ k }:400,700`] },
            fontactive: m => {
                g.includes(m) || g.push(m), k === m && l && l();
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'CanAddTerrain', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    const _h = i => {
        var j;
        const k = f.default.worldOptions.terrainOptions.find(l => l.id === i);
        if (!k)
            return !1;
        if (null === (j = k.blockedMapStyles) || void 0 === j ? void 0 : j.length) {
            const l = f.default.session.mapStyle;
            if (k.blockedMapStyles.includes(l))
                return !1;
        }
        const m = k.minimumRoleLevel, n = k.maximumRoleLevel;
        return (0, g.IsRoleLevelBetween)(m, n);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'GetCurrentMapStyle', function () {
        return _g;
    });
    var f = c('.....');
    const _g = () => f.default.session.mapStyle;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => {
        const l = (0, f.default)().worldManager.devices.getDeviceById(k.id);
        if (!l)
            return;
        const m = (0, i.default)(k.id);
        if (!m)
            return;
        const n = k.hooks || m.hooks;
        (0, g.default)({
            ...k,
            hooks: n,
            placeInstantly: !0,
            onPlace: o => {
                o && (0, h.default)({
                    id: l.id,
                    deviceTypeId: l.deviceOption.id,
                    options: JSON.stringify(k.options),
                    x: k.x,
                    y: k.y,
                    depth: o.layers.getOptionsDepth(),
                    layerId: o.layers.getOptionsLayer(),
                    name: k.name,
                    hooks: n
                });
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _s;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    const {Option: n} = k.default;
    function o(p) {
        return p && p.type && (p.type.isSelectOption || p.type.isSelectOptGroup);
    }
    const p = (q, r) => {
            const {
                    prefixCls: s,
                    className: t,
                    popupClassName: u,
                    dropdownClassName: v,
                    children: w,
                    dataSource: x
                } = q, y = (0, g.default)(w);
            let z;
            1 === y.length && (0, m.isValidElement)(y[0]) && !o(y[0]) && ([A] = y);
            const B = A ? () => A : void 0;
            let C;
            C = y.length && o(y[0]) ? w : x ? x.map(D => {
                if ((0, m.isValidElement)(D))
                    return D;
                switch (typeof D) {
                case 'string':
                    return i.createElement(n, {
                        key: D,
                        value: D
                    }, D);
                case 'object': {
                        const {value: E} = D;
                        return i.createElement(n, {
                            key: E,
                            value: E
                        }, D.text);
                    }
                default:
                    return;
                }
            }) : [];
            const {getPrefixCls: D} = i.useContext(j.ConfigContext), E = D('select', s);
            return i.createElement(k.default, Object.assign({ ref: r }, (0, h.default)(q, [
                'dataSource',
                'dropdownClassName'
            ]), {
                prefixCls: E,
                popupClassName: u || v,
                className: b(f)(`${ E }-auto-complete`, t),
                mode: k.default.SECRET_COMBOBOX_MODE_DO_NOT_USE
            }, { getInputElement: B }), C);
        }, q = i.forwardRef(p), r = (0, l.default)(q);
    q.Option = n, q._InternalPanelDoNotUseOrYouWillBeFired = r;
    var _s = q;
});