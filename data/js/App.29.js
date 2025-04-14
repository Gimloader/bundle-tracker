function e(e) {
    return e && e.__esModule ? e.default : e
}

function r(e, r, t, o) {
    Object.defineProperty(e, r, {
        get: t,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("fu6a9", (function(o, n) {
    var i;
    i = o.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), r(o.exports, "default", (function() {
        return I
    }));
    var l = t("hxEiv"),
        a = t("fywoC"),
        s = t("5OQ4z"),
        d = t("c3ah8"),
        c = t("lpEVe"),
        u = t("gwxnT"),
        f = t("6Luoq"),
        p = t("66Ji6"),
        g = t("bDZmB"),
        v = t("4MuSt"),
        m = t("db8v8"),
        h = t("iMOcM"),
        y = t("6DEgX"),
        x = t("gSnSx"),
        b = t("3sJmi"),
        C = t("1ZCZ6"),
        k = t("cy4A6"),
        w = t("grjnz");
    var I = (0, c.observer)((r => {
        const {
            me: {
                editing: {
                    device: t
                }
            },
            world: {
                devices: {
                    codeGrids: o
                }
            },
            memorySystem: {
                limits: n
            }
        } = (0, u.default)(), [i, c, I] = (0, h.useBoolean)(!1), [B, j, E] = (0, h.useBoolean)(!1), [O, S] = a.useState(void 0), [T, P] = a.useState(0), [R, F] = a.useState(void 0), [z, A] = a.useState(void 0), G = a.useRef(), {
            start: J,
            clear: D
        } = (0, m.useTimeout)((() => {
            var e;
            (null === (e = o.get(r.deviceId)) || void 0 === e ? void 0 : e.items.has(t.currentlyEditedGridId)) || (k.default.error(`This ${w.default.grid.singular} was deleted!`), r.close())
        }), 25), N = t.currentlyEditedGridId;
        a.useEffect((() => ((0, g.default)({
            deviceId: r.deviceId,
            gridId: N
        }), () => {
            (0, p.default)({
                deviceId: r.deviceId,
                gridId: N
            })
        })), []), a.useEffect((() => {
            const e = (0, v.reaction)((() => {
                    var e;
                    return null === (e = o.get(r.deviceId)) || void 0 === e ? void 0 : e.items.has(N)
                }), (e => {
                    e || (D(), J())
                }), {
                    fireImmediately: !0
                }),
                t = (0, v.reaction)((() => {
                    var e, t, n;
                    return null === (e = null === (t = o.get(r.deviceId)) || void 0 === t || null === (n = t.items) || void 0 === n ? void 0 : n.get(N)) || void 0 === e ? void 0 : e.visitors
                }), (e => {
                    e && F(e)
                }), {
                    fireImmediately: !0
                }),
                n = (0, v.reaction)((() => {
                    var e, t, n;
                    return null === (e = null === (t = o.get(r.deviceId)) || void 0 === t || null === (n = t.items) || void 0 === n ? void 0 : n.get(N)) || void 0 === e ? void 0 : e.json
                }), (e => {
                    void 0 !== e && S(e)
                }), {
                    fireImmediately: !0
                }),
                i = (0, v.reaction)((() => {
                    var e, t, n;
                    return null === (e = null === (t = o.get(r.deviceId)) || void 0 === t || null === (n = t.items) || void 0 === n ? void 0 : n.get(N)) || void 0 === e ? void 0 : e.owner
                }), (e => {
                    void 0 !== e && A(e)
                }), {
                    fireImmediately: !0
                });
            return () => {
                D(), e(), t(), n(), i()
            }
        }), []), (0, s.default)(e(d).Input.Keyboard.KeyCodes.ESC, r.close);
        return void 0 === O || void 0 === R || void 0 === z ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(f.default, {
                deviceId: r.deviceId,
                gridId: N,
                gridJSON: O,
                gridVisitors: R,
                gridOwner: z,
                gridBlockCount: T,
                setGridBlockCount: P,
                switchToHomeScreen: () => {
                    r.close()
                },
                openChannelBrowser: c,
                channelBrowserOpen: i,
                openPropertyBrowser: j,
                propertyBrowserOpen: B,
                editorRef: G
            }), (0, l.jsx)(y.default, {
                visible: i,
                close: I,
                title: "Channel Browser",
                searchPlaceholder: "Search channels...",
                category: x.default.channel,
                noResultsText: "All the channels you broadcast on and listen to will appear here!",
                noResultsFilteredText: "No channels matching your search. Press Enter to add the channel currently in the search bar!",
                onItemSelected: e => {
                    var r;
                    T >= n.blocksPerCodeGrid || null == G || null === (r = G.current) || void 0 === r || r.addTextBlock(e)
                }
            }), (0, l.jsx)(y.default, {
                visible: B,
                close: E,
                title: "Property Browser",
                searchPlaceholder: "Search properties...",
                category: x.default.property,
                noResultsText: `Properties you create using the Property ${(0,b.CapitalizeFirstLetter)(C.default.device.singular)} will show up here!`,
                noResultsFilteredText: `No properties match your search. Press Enter to add the property\n        currently in the search bar. Remember to add a corresponding Property\n        ${(0,b.CapitalizeFirstLetter)(C.default.device.singular)} to your map!`,
                onItemSelected: e => {
                    var r;
                    T >= n.blocksPerCodeGrid || null == G || null === (r = G.current) || void 0 === r || r.addTextBlock(e)
                }
            })]
        })
    }))
})), t.register("6Luoq", (function(e, o) {
    r(e.exports, "default", (function() {
        return g
    }));
    var n = t("hxEiv");
    t("fywoC");
    var i = t("b4rfc"),
        l = t("1rYvW"),
        a = t("fhnJp"),
        s = t("l1Dcy"),
        d = t("a71HG"),
        c = t("6RTxt"),
        u = (c = t("6RTxt"), t("jC9Ys")),
        f = t("dSzUP"),
        p = t("8UJqa");
    var g = e => {
        const {
            deviceId: r,
            gridId: t,
            gridOwner: o,
            gridVisitors: g,
            gridJSON: v,
            switchToHomeScreen: m,
            openChannelBrowser: h,
            channelBrowserOpen: y,
            openPropertyBrowser: x,
            propertyBrowserOpen: b,
            editorRef: C
        } = e, k = ((0, a.default)() === o || !g.length || !o) && (0, l.default)();
        return (0, n.jsx)(c.ContentContainer, {
            onClick: e => {
                (0, u.default)(e), m()
            },
            children: (0, n.jsxs)(c.Modal, {
                initial: i.default.Animation.content.codegrid.initial,
                animate: i.default.Animation.content.codegrid.active,
                exit: i.default.Animation.content.codegrid.leave,
                transition: {
                    duration: i.default.Animation.durationSeconds,
                    ease: i.default.Animation.easeType
                },
                onClick: e => e.stopPropagation(),
                children: [(0, n.jsx)(f.default, {
                    onClick: m,
                    color: p.default.White,
                    padding: 25
                }), (0, n.jsx)(c.CodeGridEditor, {
                    children: (0, n.jsx)(s.default, {
                        ref: C,
                        deviceId: r,
                        gridJSON: v,
                        gridId: t,
                        onBlockCountChange: e.setGridBlockCount,
                        isOwner: k,
                        openChannelBrowser: h,
                        channelBrowserOpen: y,
                        openPropertyBrowser: x,
                        propertyBrowserOpen: b
                    }, `blockly-editor-${String(k)}`)
                }), (0, n.jsx)(d.default, {
                    deviceId: r,
                    gridId: t,
                    isOwner: k,
                    gridOwner: o,
                    blockCount: e.gridBlockCount,
                    openChannelBrowser: h,
                    openPropertyBrowser: x
                })]
            })
        })
    }
})), t.register("b4rfc", (function(e, t) {
    r(e.exports, "default", (function() {
        return o
    }));
    var o = {
        Animation: {
            durationSeconds: .2,
            easeType: "easeOut",
            container: {
                background: {
                    inactive: "rgba(0,0,0,0)",
                    active: "rgba(0,0,0,0.6)"
                }
            },
            content: {
                home: {
                    initial: {
                        y: 40,
                        opacity: 0
                    },
                    active: {
                        y: 0,
                        opacity: 1
                    }
                },
                codegrid: {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    active: {
                        opacity: 1,
                        y: 0
                    },
                    leave: {
                        opacity: 0,
                        y: 20
                    }
                }
            }
        }
    }
})), t.register("l1Dcy", (function(o, n) {
    r(o.exports, "default", (function() {
        return b
    }));
    var i = t("hxEiv"),
        l = t("fywoC");
    t("Cs0EO");
    var a = t("6Azi2"),
        s = t("4IsEw"),
        d = t("bCoMN"),
        c = t("9u945"),
        u = t("lpEVe"),
        f = t("6pVmW"),
        p = t("12iAK"),
        g = t("5aHAi"),
        v = t("79rk7"),
        m = t("6flcO"),
        h = t("FsbW0"),
        y = t("aUCdP"),
        x = t("gwxnT");
    e(s).FieldTextInput.prototype.doClassValidation_ = function(e) {
        return e.substring(0, 512)
    };
    var b = (0, u.observer)(l.forwardRef(((r, t) => {
        const {
            memorySystem: o
        } = (0, x.default)(), [n, u] = l.useState(r.gridJSON), b = l.useRef(), C = l.useRef(), [k] = (0, f.default)((0, p.default)([v.default.messageBroadcaster, v.default.playerProximityMessageBroadcaster]), (e => {
            r.isOwner && (e.x && e.y && (b.current = {
                x: e.x,
                y: e.y
            }), r.openChannelBrowser())
        })), [w] = (0, f.default)((0, p.default)([v.default.getProperty, v.default.setProperty, v.default.playerProximityGetProperty, v.default.playerProximitySetProperty]), (e => {
            r.isOwner && (e.x && e.y && (b.current = {
                x: e.x,
                y: e.y
            }), r.openPropertyBrowser())
        }));
        l.useEffect((() => {
            I(r.gridJSON)
        }), [r.gridJSON]), l.useEffect((() => () => {
            (0, m.destroyAllModals)()
        }), []);
        const I = t => {
                var o;
                r.isOwner || t !== n && (u(t), null == C || null === (o = C.current) || void 0 === o || o.clear(), e(s).serialization.workspaces.load(JSON.parse(t), C.current))
            },
            B = (0, c.useDebounceCallback)((e => {
                r.isOwner && e !== n && ((0, y.default)({
                    json: e,
                    deviceId: r.deviceId,
                    gridId: r.gridId
                }), u(e))
            }), h.default.debouncedSaveDurationMs),
            j = l.useMemo((() => (0, d.default)(r.deviceId, r.gridId)), []);
        l.useImperativeHandle(t, (() => ({
            addTextBlock: E
        })));
        const E = e => {
                r.isOwner && (0, g.default)({
                    text: e,
                    location: b.current,
                    workspace: C.current
                })
            },
            O = "" === n ? {} : JSON.parse(n);
        return (0, i.jsx)(a.default, {
            toolboxConfiguration: r.isOwner ? j : void 0,
            initialJson: O,
            className: "fill-height",
            onInject: t => {
                var o;
                C.current = t, null === (o = C.current) || void 0 === o || o.addChangeListener((t => {
                    r.isOwner && (k(t), w(t), (() => {
                        const t = e(s).serialization.workspaces.save(C.current),
                            o = C.current.getAllBlocks(!1).length;
                        r.onBlockCountChange(o), B(JSON.stringify(t))
                    })())
                }))
            },
            workspaceConfiguration: {
                readOnly: !r.isOwner,
                comments: !1,
                disable: !1,
                collapse: !1,
                maxBlocks: o.limits.blocksPerCodeGrid,
                move: {
                    drag: !1
                },
                grid: {
                    spacing: 20,
                    length: 2,
                    colour: "#ccc",
                    snap: !0
                }
            }
        })
    })))
})), t.register("Cs0EO", (function(e, o) {
    r(e.exports, "BlocklyWorkspace", (function() {
        return t("6Azi2").default
    }));
    t("kb6yY"), t("6Azi2"), t("4IsEw")
})), t.register("kb6yY", (function(o, n) {
    r(o.exports, "default", (function() {
        return s
    }));
    var i = t("fywoC"),
        l = t("4IsEw"),
        a = t("47zZC");
    var s = ({
        ref: r,
        initialXml: t,
        initialJson: o,
        toolboxConfiguration: n,
        workspaceConfiguration: s,
        onWorkspaceChange: d,
        onImportXmlError: c,
        onImportError: u,
        onInject: f,
        onDispose: p
    }) => {
        u = null != u ? u : c;
        const [g, v] = e(i).useState(null), [m, h] = e(i).useState(t || null), [y, x] = e(i).useState(o || null), [b, C] = e(i).useState(!1), [k, w] = e(i).useState(!1), I = e(i).useRef(s);
        e(i).useEffect((() => {
            I.current = s
        }), [s]);
        const B = e(i).useRef(n);
        e(i).useEffect((() => {
            B.current = n, n && g && g.updateToolbox(n)
        }), [n, g]);
        const j = e(i).useRef(f),
            E = e(i).useRef(p);
        e(i).useEffect((() => {
            j.current = f
        }), [f]), e(i).useEffect((() => {
            E.current = p
        }), [p]);
        const O = e(i).useCallback((e => {
            d && d(e)
        }), [d]);
        return e(i).useEffect((() => {
            if (!r.current) return;
            const t = e(l).inject(r.current, {
                ...I.current,
                toolbox: B.current
            });
            v(t), C(!1), w(!1), j.current && j.current(t);
            const o = E.current;
            return () => {
                t.dispose(), o && o(t)
            }
        }), [r]), e(i).useEffect((() => {
            g && !k && O(g)
        }), [O, k, g]), e(i).useEffect((() => {
            if (null == g) return;
            const e = () => {
                O(g)
            };
            return g.addChangeListener(e), () => {
                g.removeChangeListener(e)
            }
        }), [g, O]), e(i).useEffect((() => {
            if (null == g) return;
            const [r, t] = (0, a.default)((() => {
                const r = e(l).Xml.domToText(e(l).Xml.workspaceToDom(g));
                if (r === m) return;
                const t = e(l).serialization.workspaces.save(g);
                x(t), h(r)
            }), 200);
            return g.addChangeListener(r), () => {
                g.removeChangeListener(r), t()
            }
        }), [g, m]), e(i).useEffect((() => {
            if (m && g && !b) {
                const r = function(r, t, o) {
                    try {
                        if (t.getAllBlocks(!1).length > 0) return;
                        return e(l).Xml.domToWorkspace(e(l).Xml.textToDom(r), t), !0
                    } catch (e) {
                        return o && o(e), !1
                    }
                }(m, g, u);
                r || h(null), C(!0)
            } else if (y && g && !b) {
                const r = function(r, t, o) {
                    try {
                        return e(l).serialization.workspaces.load(r, t), !0
                    } catch (e) {
                        return o && o(e), !1
                    }
                }(y, g, u);
                r || x(null);
                const t = e(l).Xml.domToText(e(l).Xml.workspaceToDom(g));
                h(t), C(!0)
            }
        }), [y, m, g, b, u]), {
            workspace: g,
            xml: m,
            json: y
        }
    }
})), t.register("47zZC", (function(e, t) {
    function o(e, r) {
        let t = null,
            o = null;
        return [(...n) => {
            o = () => {
                t = null, e(...n)
            }, null != t && clearTimeout(t), t = window.setTimeout(o, r)
        }, () => {
            null != t && (clearTimeout(t), o && o())
        }]
    }
    r(e.exports, "default", (function() {
        return o
    }))
})), t.register("6Azi2", (function(o, n) {
    r(o.exports, "default", (function() {
        return u
    }));
    var i = t("hxEiv"),
        l = t("fywoC"),
        a = t("djNMu"),
        s = t("kb6yY");
    const d = {
        initialXml: e(a).string,
        initialJson: e(a).object,
        toolboxConfiguration: e(a).object,
        workspaceConfiguration: e(a).object,
        className: e(a).string,
        onWorkspaceChange: e(a).func,
        onImportXmlError: e(a).func,
        onImportError: e(a).func,
        onXmlChange: e(a).func,
        onJsonChange: e(a).func,
        onInject: e(a).func,
        onDispose: e(a).func
    };

    function c({
        initialXml: r,
        initialJson: t,
        toolboxConfiguration: o,
        workspaceConfiguration: n,
        className: a,
        onWorkspaceChange: d,
        onXmlChange: c,
        onJsonChange: u,
        onImportXmlError: f,
        onImportError: p,
        onInject: g,
        onDispose: v
    }) {
        const m = e(l).useRef(null),
            {
                xml: h,
                json: y
            } = (0, s.default)({
                ref: m,
                initialXml: r,
                initialJson: t,
                toolboxConfiguration: o,
                workspaceConfiguration: n,
                onWorkspaceChange: d,
                onImportXmlError: f,
                onImportError: p,
                onInject: g,
                onDispose: v
            }),
            x = e(l).useRef(c);
        e(l).useEffect((() => {
            x.current = c
        }), [c]);
        const b = e(l).useRef(u);
        return e(l).useEffect((() => {
            b.current = u
        }), [u]), e(l).useEffect((() => {
            x.current && h && x.current(h), b.current && y && b.current(y)
        }), [h, y]), (0, i.jsx)("div", {
            className: a,
            ref: m
        })
    }
    c.propTypes = d, c.defaultProps = {
        initialXml: null,
        initialJson: null,
        toolboxConfiguration: null,
        workspaceConfiguration: null,
        className: null,
        onWorkspaceChange: null,
        onImportXmlError: null,
        onImportError: null,
        onXmlChange: null,
        onJsonChange: null,
        onInject: null,
        onDispose: null
    };
    var u = c
})), t.register("bCoMN", (function(e, o) {
    r(e.exports, "default", (function() {
        return d
    }));
    var n = t("gPLie"),
        i = t("iRjsB"),
        l = t("5PI7p"),
        a = t("CqOkB");
    const s = (e, r) => {
        let t = e.deviceOption.codeGridSchema.customBlocks || [];
        const o = (null == r ? void 0 : r.customBlocks) || [];
        return (null == r ? void 0 : r.blockedCustomBlocks) && (t = t.filter((e => {
            var t;
            return !(null === (t = r.blockedCustomBlocks) || void 0 === t ? void 0 : t.includes(e))
        }))), {
            deviceSpecificBlocks: t,
            triggerSpecificBlocks: o
        }
    };
    var d = (e, r) => {
        var t, o;
        let d, c = [],
            u = [];
        const f = (0, a.default)(e);
        if (f) {
            var p, g;
            const t = null === (p = i.default.world.devices.codeGrids.get(e)) || void 0 === p || null === (g = p.items) || void 0 === g ? void 0 : g.get(r);
            if (t) {
                const e = f.deviceOption.codeGridSchema.triggers.find((e => e.type === t.triggerType));
                var v;
                if (e) d = s(f, e), (null === (v = e.blockedGlobalBlocks) || void 0 === v ? void 0 : v.length) && (u = e.blockedGlobalBlocks);
                else d = s(f)
            }
        }
        d && d.triggerSpecificBlocks.length && c.push({
            name: n.default.triggerOnly.name,
            color: n.default.triggerOnly.color,
            blocks: d.triggerSpecificBlocks.map((e => ({
                type: e
            }))).filter((e => (0, l.CanAddCustomBlock)(e.type)))
        }), (null == d ? void 0 : d.deviceSpecificBlocks.length) && c.push({
            name: n.default.deviceOnly.name,
            color: n.default.triggerOnly.color,
            blocks: d.deviceSpecificBlocks.map((e => ({
                type: e
            }))).filter((e => (0, l.CanAddCustomBlock)(e.type)))
        });
        let m = JSON.parse((null === (t = i.default.worldOptions) || void 0 === t || null === (o = t.codeGrids) || void 0 === o ? void 0 : o.blockCategories) || "[]");
        u.length && (m = m.map((e => ({
            ...e,
            blocks: e.blocks.filter((e => !u.includes(e.type)))
        })))), c = [...c, ...m];
        return {
            kind: "categoryToolbox",
            contents: c.map((e => {
                const r = e.custom ? {
                    custom: e.custom
                } : {};
                return {
                    kind: "category",
                    name: e.name,
                    colour: e.color,
                    expanded: !0,
                    contents: e.blocks.map((e => ({
                        kind: "block",
                        type: e.type,
                        message0: e.type
                    }))),
                    ...r
                }
            }))
        }
    }
})), t.register("gPLie", (function(e, t) {
    r(e.exports, "default", (function() {
        return o
    }));
    var o = {
        triggerOnly: {
            name: "For This Block",
            color: "#FFBF00"
        },
        deviceOnly: {
            name: "For This Device",
            color: "#FFBF00"
        }
    }
})), t.register("5PI7p", (function(e, o) {
    r(e.exports, "CanAddCustomBlock", (function() {
        return l
    }));
    var n = t("iRjsB"),
        i = t("24AMo");
    const l = e => {
        const r = n.default.worldOptions.codeGrids.customBlocksParsed.find((r => r.type === e));
        if (!r) return !0;
        const t = r.minimumRoleLevel,
            o = r.maximumRoleLevel;
        return (0, i.IsRoleLevelBetween)(t, o)
    }
})), t.register("6pVmW", (function(e, o) {
    r(e.exports, "default", (function() {
        return i
    }));
    var n = t("fywoC");
    var i = (e, r) => {
        const t = n.useRef(0),
            o = n.useRef(),
            i = e => o.current = e,
            l = n => {
                const a = e[t.current];
                if (!a) return t.current = 0, void l(n);
                if (a(n, o.current, i)) t.current = t.current + 1, t.current === e.length && (r(o.current), t.current = 0);
                else {
                    if (0 === t.current) return;
                    t.current = 0, l(n)
                }
            };
        return [e => {
            l(e)
        }]
    }
})), t.register("12iAK", (function(o, n) {
    r(o.exports, "default", (function() {
        return l
    }));
    var i = t("4IsEw");
    var l = r => [r => r.type === e(i).Events.TOOLBOX_ITEM_SELECT, (t, o, n) => {
        if (t.type === e(i).Events.CREATE && t.json && t.json.type) {
            if (r.some((e => t.json.type.includes(e)))) return n({
                ...o,
                blockId: t.blockId
            }), !0
        }
        return !1
    }, (r, t) => r.type === e(i).Events.SELECTED && (r.newElementId && r.newElementId === t.blockId), (r, t) => !(r.type !== e(i).Events.BLOCK_DRAG || !r.isStart || r.blockId !== t.blockId), (r, t, o) => {
        if (r.type === e(i).Events.BLOCK_DRAG && !r.isStart && r.blockId === t.blockId) {
            var n, l;
            const e = null === (n = r.blocks) || void 0 === n || null === (l = n[0]) || void 0 === l ? void 0 : l.getRelativeToSurfaceXY();
            if (e) return o({
                ...t,
                x: e.x,
                y: e.y
            }), !0
        }
        return !1
    }]
})), t.register("5aHAi", (function(o, n) {
    r(o.exports, "default", (function() {
        return l
    }));
    var i = t("4IsEw");
    var l = r => {
        const {
            text: t,
            location: o,
            workspace: n
        } = r;
        let l = 0,
            a = 0;
        if (o) l = o.x, a = o.y;
        else {
            const e = n.getAllBlocks(!0);
            if (e.length) {
                const r = e[e.length - 1].getRelativeToSurfaceXY();
                l = r.x, a = r.y
            }
        }
        l += 40, a += 40, l = Math.round(l), a = Math.round(a);
        const s = e(i).serialization.workspaces.save(n);
        s.blocks || (s.blocks = {
            blocks: []
        }), s.blocks.blocks.push({
            type: "text",
            x: l,
            y: a,
            fields: {
                TEXT: t
            }
        }), e(i).serialization.workspaces.load(s, n)
    }
})), t.register("FsbW0", (function(e, t) {
    r(e.exports, "default", (function() {
        return o
    }));
    var o = {
        debouncedSaveDurationMs: 150
    }
})), t.register("aUCdP", (function(e, o) {
    r(e.exports, "default", (function() {
        return l
    }));
    var n = t("9q1Gv"),
        i = t("cCnGt");
    var l = e => {
        (0, i.default)(n.default.setCodeGridJSON, {
            json: e.json,
            deviceId: e.deviceId,
            gridId: e.gridId
        })
    }
})), t.register("a71HG", (function(e, o) {
    r(e.exports, "default", (function() {
        return g
    }));
    var n = t("hxEiv");
    t("fywoC");
    var i = t("2FDaO"),
        l = t("4ifJF"),
        a = t("8UJqa"),
        s = t("e2usg"),
        d = t("lzeWS"),
        c = t("hS0M7");
    let u, f, p = e => e;
    var g = e => (0, n.jsx)(v, {
        children: (0, n.jsxs)(m, {
            children: [(0, n.jsx)(s.default, {
                deviceId: e.deviceId,
                gridId: e.gridId
            }), e.isOwner ? (0, n.jsx)(d.default, {
                blockCount: e.blockCount,
                openChannelBrowser: e.openChannelBrowser,
                openPropertyBrowser: e.openPropertyBrowser
            }) : (0, n.jsx)(c.default, {
                gridOwner: e.gridOwner
            })]
        })
    });
    const v = (0, i.default)(l.Centered).attrs({
            className: "maxAll"
        })(u || (u = p`
  flex-shrink: 0;
  color: ${0};
  width: 360px;
  padding: 25px;
  padding-right: 0px;
`), a.default.White),
        m = i.default.div(f || (f = p``))
})), t.register("e2usg", (function(e, o) {
    r(e.exports, "default", (function() {
        return u
    }));
    var n = t("hxEiv"),
        i = t("4y75y");
    t("fywoC");
    var l = t("69SUA"),
        a = t("8UJqa"),
        s = t("3sJmi"),
        d = t("grjnz"),
        c = t("60k9b");
    var u = e => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(i.default.Text, {
            style: {
                fontFamily: l.Fonts.FugazOne,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                fontSize: 14
            },
            children: (0, s.CapitalizeFirstLetter)(d.default.grid.singular)
        }), (0, n.jsx)(i.default.Title, {
            level: 3,
            style: {
                color: a.default.White,
                marginTop: 2
            },
            children: (0, c.default)(e.deviceId, e.gridId)
        })]
    })
})), t.register("lzeWS", (function(e, o) {
    r(e.exports, "default", (function() {
        return u
    }));
    var n = t("hxEiv"),
        i = t("93yIm"),
        l = t("i5Qjx"),
        a = t("4y75y");
    t("fywoC");
    var s = t("iMOcM"),
        d = t("gwxnT"),
        c = t("grjnz");
    var u = e => {
        const {
            memorySystem: r
        } = (0, d.default)();
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)(l.default, {
                direction: "horizontal",
                size: 10,
                style: {
                    marginTop: 30
                },
                children: [(0, n.jsx)(i.default, {
                    onClick: e.openChannelBrowser,
                    type: "primary",
                    children: "Channel Browser"
                }), (0, n.jsx)(i.default, {
                    onClick: e.openPropertyBrowser,
                    type: "primary",
                    children: "Property Browser"
                })]
            }), (0, n.jsx)("div", {
                style: {
                    marginTop: 6
                },
                children: (0, n.jsxs)(a.default.Text, {
                    style: {
                        color: "rgba(255,255,255,0.6)"
                    },
                    children: [(0, s.numberWithCommas)(e.blockCount), "/", (0, s.numberWithCommas)(r.limits.blocksPerCodeGrid), " ", c.default.blocklyBlock.plural, " placed"]
                })
            })]
        })
    }
})), t.register("hS0M7", (function(e, o) {
    r(e.exports, "default", (function() {
        return d
    }));
    var n = t("hxEiv"),
        i = t("fC6cp"),
        l = t("4y75y");
    t("fywoC");
    var a = t("69SUA"),
        s = t("31DzF");
    var d = e => e.gridOwner ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(i.default, {
            style: {
                background: "#8b8b8b"
            }
        }), (0, n.jsx)("div", {
            children: (0, n.jsxs)(l.default.Text, {
                children: [(0, n.jsx)("span", {
                    style: {
                        fontWeight: a.FontWeights.Bold
                    },
                    children: (0, s.default)(e.gridOwner)
                }), " ", "is currently editing this block. Only one person can edit a block at a time."]
            })
        })]
    }) : null
})), t.register("31DzF", (function(e, o) {
    r(e.exports, "default", (function() {
        return i
    }));
    var n = t("iRjsB");
    var i = e => {
        const r = n.default.characters.characters.get(e);
        return r ? r.name : "Player"
    }
})), t.register("6RTxt", (function(e, o) {
    r(e.exports, "Modal", (function() {
        return p
    })), r(e.exports, "ContentContainer", (function() {
        return g
    })), r(e.exports, "CodeGridEditor", (function() {
        return v
    }));
    var n = t("6vbUb"),
        i = t("2FDaO"),
        l = t("8UJqa"),
        a = t("4ifJF");
    let s, d, c, u, f = e => e;
    i.default.div(s || (s = f`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`));
    const p = (0, i.default)(n.motion.div).attrs({
            className: "flex medium-shadow"
        })(d || (d = f`
  position: relative;
  background: rgba(48, 28, 86, 0.85);
  backdrop-filter: blur(3px);
  color: ${0};
  padding: 25px;
  border-radius: 7px;
  width: 90%;
  height: 90%;
`), l.default.Black),
        g = (0, i.default)(a.Centered).attrs({
            className: "maxAll"
        })(c || (c = f``)),
        v = i.default.div.attrs({
            className: "maxAll"
        })(u || (u = f`
  .fill-height {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    border-width: 0px;
    border-radius: 5px;
    overflow: hidden;
  }
  .blocklyToolboxDiv {
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(3px);
  }
  .blocklySvg {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .blocklyTrash {
    filter: brightness(2);
  }
`))
})), t.register("66Ji6", (function(e, o) {
    r(e.exports, "default", (function() {
        return l
    }));
    var n = t("9q1Gv"),
        i = t("cCnGt");
    var l = e => {
        (0, i.default)(n.default.leaveCodeGrid, {
            deviceId: e.deviceId,
            gridId: e.gridId
        })
    }
})), t.register("bDZmB", (function(e, o) {
    r(e.exports, "default", (function() {
        return l
    }));
    var n = t("9q1Gv"),
        i = t("cCnGt");
    var l = e => {
        (0, i.default)(n.default.joinCodeGrid, {
            deviceId: e.deviceId,
            gridId: e.gridId
        })
    }
})), t.register("6DEgX", (function(e, o) {
    r(e.exports, "default", (function() {
        return v
    }));
    var n = t("hxEiv"),
        i = t("fywoC"),
        l = t("9xElQ"),
        a = t("b9Zw0"),
        s = t("i5Qjx"),
        d = t("4y75y"),
        c = t("cmvpZ"),
        u = t("5OQ4z"),
        f = t("g2f01"),
        p = t("1jOEO"),
        g = t("jC9Ys");
    var v = e => {
        const [r, t] = i.useState(-1), [o, v] = i.useState(""), m = i.useRef(), h = (0, f.default)(e.category), y = i.useMemo((() => (0, c.orderBy)(o ? h.filter((e => e.toLowerCase().includes(o.toLowerCase()))) : h, [e => e.toLowerCase()], ["asc"])), [o]);
        (0, u.default)(Phaser.Input.Keyboard.KeyCodes.DOWN, (() => {
            const e = r + 1;
            y[e] && t(e)
        }), [y.length, r]), (0, u.default)(Phaser.Input.Keyboard.KeyCodes.UP, (() => {
            if (-1 === r) return;
            const e = Math.max(0, r - 1);
            t(e)
        }), [y.length, r]);
        const x = r => {
            e.onItemSelected(r), e.close()
        };
        return (0, n.jsx)("div", {
            onClick: g.default,
            children: (0, n.jsxs)(l.default, {
                open: e.visible,
                onClose: r => {
                    r.stopPropagation(), e.close()
                },
                placement: "right",
                width: 400,
                afterOpenChange: e => {
                    var r;
                    v(""), t(-1), e && (null == m || null === (r = m.current) || void 0 === r || r.focus())
                },
                title: e.title,
                children: [(0, n.jsx)(a.default, {
                    ref: m,
                    size: "large",
                    className: "maxWidth",
                    placeholder: e.searchPlaceholder,
                    style: {
                        marginBottom: 20
                    },
                    allowClear: !0,
                    value: o,
                    onChange: e => {
                        v(e.target.value), t(0)
                    },
                    onPressEnter: () => {
                        const e = y[r];
                        if (e) x(e);
                        else {
                            const e = null == o ? void 0 : o.trim();
                            e && x(e)
                        }
                    },
                    maxLength: 512
                }), h.length ? y.length ? (0, n.jsx)(s.default, {
                    className: "maxWidth",
                    direction: "vertical",
                    size: 8,
                    children: y.map(((e, t) => (0, n.jsx)(p.default, {
                        name: e,
                        focused: r === t,
                        onSelect: () => x(e)
                    }, e)))
                }) : (0, n.jsx)(d.default.Text, {
                    children: e.noResultsFilteredText
                }) : (0, n.jsx)(d.default.Text, {
                    children: e.noResultsText
                })]
            })
        })
    }
})), t.register("1jOEO", (function(e, o) {
    r(e.exports, "default", (function() {
        return d
    }));
    var n = t("hxEiv");
    t("fywoC");
    var i = t("2FDaO"),
        l = t("l4uFh"),
        a = t("4y75y");
    let s;
    var d = e => {
        const {
            token: {
                borderRadius: r
            }
        } = l.default.useToken();
        return (0, n.jsx)(c, {
            borderRadius: r,
            focused: e.focused,
            onClick: e.onSelect,
            children: (0, n.jsx)(a.default.Text, {
                children: e.name
            })
        })
    };
    const c = i.default.div(s || (s = (e => e)`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${0}px;
  border: 2px solid
    ${0};
  padding: 10px 15px;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`), (e => e.borderRadius), (e => e.focused ? "#ffca28" : "rgba(255, 255, 255, 0.1)"))
}));