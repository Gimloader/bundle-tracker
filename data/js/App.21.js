function e(e, t, r, n) {
    Object.defineProperty(e, t, {
        get: r,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
r.register("a5sZj", (function(t, n) {
    e(t.exports, "rarityToColor", (function() {
        return l
    })), e(t.exports, "rarityToBackground", (function() {
        return s
    }));
    var o = r("lKmIF"),
        a = r("4k7kM"),
        i = r("6a2jS");
    const l = e => e === i.CosmeticRarity.common ? a.default.rarities.common : e === i.CosmeticRarity.uncommon ? a.default.rarities.uncommon : e === i.CosmeticRarity.rare ? a.default.rarities.rare : e === i.CosmeticRarity.epic ? a.default.rarities.epic : e === i.CosmeticRarity.legendary ? a.default.rarities.legendary : e === i.CosmeticRarity.mythic ? a.default.rarities.mythic : o.default.White,
        s = e => `radial-gradient(circle, rgba(255,255,255,1) 0%, ${l(e)} 100%)`
})), r.register("4k7kM", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        rarities: {
            common: "#606060",
            uncommon: "rgb(6 143 0)",
            rare: "rgb(8 97 190)",
            epic: "rgb(53 6 146)",
            legendary: "#ba5605",
            mythic: "#cba638"
        }
    }
})), r.register("bDJkg", (function(t, n) {
    e(t.exports, "cosmeticTypeName", (function() {
        return i
    }));
    var o = r("2Y5iQ"),
        a = r("6a2jS");
    const i = e => e === a.CosmeticType.character ? o.default.character : e === a.CosmeticType.sticker ? o.default.sticker : e === a.CosmeticType.trail ? o.default.trail : "Cosmetic"
})), r.register("6BIRj", (function(t, n) {
    e(t.exports, "playClickSound", (function() {
        return l
    })), e(t.exports, "playPackClickSound", (function() {
        return s
    }));
    var o = r("cmvpZ"),
        a = r("alREA"),
        i = r("jVQO4");
    const l = () => {
            (0, i.playSound)({
                path: (0, a.default)("cosmos/pop.mp3"),
                volume: .4
            })
        },
        s = () => {
            (0, i.playSound)({
                path: (0, a.default)(`cosmos/packButton${(0,o.random)(1,2)}.mp3`),
                volume: .4
            })
        }
})), r.register("hifxW", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("66mIo");
    var l = e => {
        const [t, r] = a.useState(!0), {
            open: n,
            close: l
        } = e;
        a.useEffect((() => {
            e.open && r(!1)
        }), [n]);
        return !n && t ? null : (0, o.jsx)(i.default, {
            ...e,
            open: n,
            close: l,
            afterClose: () => {
                r(!0)
            }
        })
    }
})), r.register("66mIo", (function(t, n) {
    e(t.exports, "default", (function() {
        return h
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("4gMdJ"),
        l = r("fBuQJ"),
        s = r("lKmIF"),
        c = r("2FDaO"),
        u = r("eTG4A"),
        d = r("jVQCX"),
        f = r("5mCyy"),
        p = r("7nTkq");
    let x;
    var h = e => {
        const [t, r] = a.useState(0);
        return (0, o.jsxs)(i.default, {
            theme: {
                token: {
                    colorText: s.default.White,
                    colorBgBase: "#453267"
                }
            },
            children: [(0, o.jsx)(m, {}), (0, o.jsx)(l.default, {
                open: e.open,
                onCancel: e.close,
                afterClose: e.afterClose,
                closeIcon: (0, o.jsx)(d.default, {}),
                footer: null,
                className: "cosmos-preview-modal",
                children: t ? (0, o.jsx)(p.SoldScreen, {
                    ...e,
                    soldAmount: t
                }) : e.purchased ? (0, o.jsx)(f.default, {
                    ...e
                }) : (0, o.jsx)(u.default, {
                    ...e,
                    setSoldAmount: r
                })
            })]
        })
    };
    const m = (0, c.createGlobalStyle)(x || (x = (e => e)`
  .cosmos-preview-modal > .ant-modal-content {
    border-radius: 10px !important;
    overflow: hidden;
    padding: 0px !important;
  }
`))
})), r.register("eTG4A", (function(t, n) {
    e(t.exports, "Bottom", (function() {
        return h
    })), e(t.exports, "default", (function() {
        return x
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("2cIXm"),
        l = r("eeVjp"),
        s = r("2FDaO"),
        c = r("4AfaU"),
        u = r("7sXHv"),
        d = r("9kcmK"),
        f = r("5uIZ5");
    let p;
    var x = e => {
        var t;
        const [r, n] = a.useState(null !== (t = e.editStyles) && void 0 !== t ? t : {}), [s, p] = a.useState(!1), x = (e, t) => {
            n({
                ...r,
                [e]: t
            })
        };
        return (0, o.jsxs)("div", {
            className: "maxWidth",
            children: [(0, o.jsx)(i.default, {
                ...e,
                editStyles: r
            }), (0, o.jsxs)(h, {
                children: [(0, o.jsx)(l.default, {
                    ...e
                }), s ? (0, o.jsx)(d.SellSelector, {
                    ...e,
                    setSoldAmount: e.setSoldAmount,
                    closeSellScreen: () => {
                        p(!1)
                    }
                }) : (0, o.jsxs)(o.Fragment, {
                    children: [e.description || e.pack ? (0, o.jsx)(f.default, {
                        ...e
                    }) : null, e.style ? (0, o.jsx)(u.EditStyles, {
                        style: e.style,
                        currentStyles: r,
                        updateEditStyle: x
                    }) : null, (0, o.jsx)(c.default, {
                        ...e,
                        editStyles: r,
                        setToSellScreen: () => {
                            p(!0)
                        }
                    })]
                })]
            })]
        })
    };
    const h = s.default.div(p || (p = (e => e)`
  padding: 20px 20px 25px 20px;
`))
})), r.register("2cIXm", (function(t, n) {
    e(t.exports, "default", (function() {
        return g
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("2FDaO"),
        l = r("4ifJF"),
        s = r("a5sZj"),
        c = r("6a2jS"),
        u = r("guoa4"),
        d = r("iMOcM");
    let f, p, x, h = e => e;
    const m = a.lazy((() => r("7JzqK")));
    var g = e => {
        const t = (0, s.rarityToBackground)(e.rarity);
        return (0, o.jsxs)(v, {
            style: {
                background: t
            },
            children: [e.count > 1 ? (0, o.jsx)(u.CountBadge, {
                style: {
                    right: 20,
                    top: 42,
                    left: "auto"
                },
                children: (0, d.numberWithCommas)(e.count)
            }) : null, (0, o.jsxs)(a.Suspense, {
                fallback: null,
                children: [(() => {
                    const t = (0, o.jsx)(y, {
                        style: {
                            padding: e.type === c.CosmeticType.sticker ? 24 : 8
                        },
                        children: (0, o.jsx)(b, {
                            draggable: !1,
                            src: e.image
                        })
                    });
                    return e.type !== c.CosmeticType.character || e.blockCharacterPreview ? t : (0, o.jsx)(m, {
                        id: e.id.replace("character_", ""),
                        editStyles: e.editStyles,
                        fallback: t
                    })
                })(), " "]
            })]
        })
    };
    const v = i.default.div.attrs({
            className: "maxWidth"
        })(f || (f = h`
  height: 150px;
  overflow: hidden;
  position: relative;
`)),
        y = (0, i.default)(l.Centered).attrs({
            className: "maxAll"
        })(p || (p = h``)),
        b = i.default.img(x || (x = h`
  max-height: 100%;
  max-width: 100%;
`))
})), r.register("guoa4", (function(t, n) {
    e(t.exports, "GridViewItem", (function() {
        return g
    })), e(t.exports, "CountBadge", (function() {
        return S
    })), e(t.exports, "EmptyGridViewItem", (function() {
        return v
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        i = r("lKmIF"),
        l = r("4ifJF"),
        s = r("py2Xr"),
        c = r("69SUA"),
        u = r("iMOcM");
    let d, f, p, x, h, m = e => e;
    const g = e => {
            var t;
            return (0, o.jsxs)(y, {
                selected: e.selected,
                children: [(0, o.jsx)(b, {
                    children: (0, o.jsx)(j, {
                        style: {
                            background: e.background,
                            padding: null !== (t = e.imagePadding) && void 0 !== t ? t : 10
                        },
                        children: (0, o.jsx)(C, {
                            src: e.image
                        })
                    })
                }), e.count > 1 ? (0, o.jsx)(S, {
                    children: (0, u.numberWithCommas)(e.count)
                }) : null]
            })
        },
        v = e => (0, o.jsx)(y, {
            selected: e.selected,
            style: {
                width: e.width,
                cursor: "pointer"
            },
            onClick: e.onSelect,
            children: (0, o.jsx)(b, {
                children: (0, o.jsx)(j, {
                    style: {
                        background: "radial-gradient( circle, rgba(78,77,77,1) 0%, rgba(32,32,32,1) 100% )",
                        fontSize: 42,
                        color: "rgba(255,255,255,0.5)"
                    },
                    children: (0, o.jsx)(s.default, {
                        name: "fal fa-times"
                    })
                })
            })
        }),
        y = a.default.div.attrs({
            className: "maxWidth"
        })(d || (d = m`
  height: 140px;
  border: 4px solid;
  border-color: ${0};
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`), (e => e.selected ? "#fdd835" : i.default.White)),
        b = a.default.div.attrs({
            className: "maxAll"
        })(f || (f = m`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`)),
        j = (0, a.default)(l.Centered).attrs({
            className: "maxAll"
        })(p || (p = m``)),
        C = a.default.img(x || (x = m`
  max-height: 100%;
  max-width: 100%;
  user-drag: none;
`)),
        S = a.default.div.attrs({
            className: "flex-center"
        })(h || (h = m`
  position: absolute;
  top: 7px;
  left: 7px;
  padding: 3px 6px;
  background: #ff6f00;
  color: ${0};
  border-radius: 50px;
  line-height: 1;
  font-weight: ${0};
  font-size: 10px;
`), i.default.White, c.FontWeights.Bold)
})), r.register("7JzqK", (function(e, t) {
    e.exports = Promise.all([import("./" + r("ihc6Q").resolve("fFyZG")), import("./" + r("ihc6Q").resolve("fKT9H"))]).then((() => r("bgUN0")))
})), r.register("ihc6Q", (function(t, r) {
    var n, o;
    e(t.exports, "register", (function() {
        return n
    }), (function(e) {
        return n = e
    })), e(t.exports, "resolve", (function() {
        return o
    }), (function(e) {
        return o = e
    }));
    var a = {};
    n = function(e) {
        for (var t = Object.keys(e), r = 0; r < t.length; r++) a[t[r]] = e[t[r]]
    }, o = function(e) {
        var t = a[e];
        if (null == t) throw new Error("Could not resolve bundle with id " + e);
        return t
    }
})), r.register("eeVjp", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        i = r("4ifJF"),
        l = r("i5Qjx"),
        s = r("69SUA"),
        c = r("bDJkg");
    let u, d, f, p = e => e;
    var x = e => {
        const {
            name: t,
            type: r,
            rarity: n
        } = e, a = [];
        return a.push((0, c.cosmeticTypeName)(r)), a.push(n), (0, o.jsxs)(h, {
            children: [(0, o.jsx)(m, {
                children: t
            }), a.length ? (0, o.jsx)(l.default, {
                direction: "horizontal",
                size: 10,
                wrap: !0,
                style: {
                    marginTop: 4
                },
                children: a.map((t => (0, o.jsx)(g, {
                    children: t
                }, e.id + t)))
            }) : null]
        })
    };
    const h = (0, a.default)(i.CenteredColumn).attrs({
            className: "maxWidth"
        })(u || (u = p`
  font-family: ${0};
  text-transform: uppercase;
`), s.Fonts.FugazOne),
        m = a.default.div(d || (d = p`
  font-size: 36px;
  font-weight: ${0};
  text-align: center;
`), s.FontWeights.Bold),
        g = a.default.div(f || (f = p`
  font-family: ${0};
  background: rgba(255, 255, 255, 0.1);
  line-height: 1;
  font-size: 14px;
  padding: 8px 21px 6px 21px;
  border-radius: 50px;
  transition: background 0.2s ease-in-out;
  cursor: default;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`), s.Fonts.FugazOne)
})), r.register("4AfaU", (function(t, n) {
    e(t.exports, "SellButton", (function() {
        return p
    })), e(t.exports, "default", (function() {
        return f
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("aQuqp"),
        i = r("69SUA"),
        l = r("4ifJF"),
        s = r("2FDaO"),
        c = r("8UJqa"),
        u = r("6BIRj");
    let d;
    var f = e => {
        const t = e.callToAction({
                editStyles: e.editStyles
            }),
            r = !!(e.count > 1 && e.sellCost && e.setToSellScreen);
        return t ? (0, o.jsxs)(l.CenteredColumn, {
            className: "maxAll",
            style: {
                marginTop: 20
            },
            children: [(0, o.jsx)(a.default, {
                type: "success",
                customHorizontalPadding: 35,
                disabled: t.disabled,
                ariaLabel: t.ariaLabel,
                onClick: () => {
                    t.onClick()
                },
                children: (0, o.jsx)("div", {
                    style: {
                        fontFamily: i.Fonts.FugazOne,
                        textTransform: "uppercase",
                        fontSize: 16
                    },
                    children: t.text
                })
            }, `cta-${t.disabled}}`), r ? (0, o.jsx)(p, {
                onClick: () => {
                    (0, u.playPackClickSound)(), e.setToSellScreen()
                },
                children: "Sell"
            }) : null]
        }) : null
    };
    const p = s.default.div(d || (d = (e => e)`
  color: ${0};
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 8px;
  transition: color 0.2s ease-in-out;
  font-style: italic;
  &:hover {
    color: #ffff99;
  }
`), c.default.Yellow)
})), r.register("7sXHv", (function(t, n) {
    e(t.exports, "EditStyles", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("03MJz"),
        i = r("i5Qjx");
    const l = e => (0, o.jsx)("div", {
        className: "maxWidth",
        style: {
            marginTop: 17
        },
        children: (0, o.jsx)(i.default, {
            className: "maxWidth",
            direction: "vertical",
            size: 15,
            children: e.style.categories.map((t => (0, o.jsx)(a.EditStyle, {
                category: t,
                value: e.currentStyles[t.name],
                onChange: r => {
                    e.updateEditStyle(t.name, r)
                }
            }, t.name + "-category")))
        })
    })
})), r.register("03MJz", (function(t, n) {
    e(t.exports, "EditStyle", (function() {
        return y
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("6a2jS"),
        l = r("2FDaO"),
        s = r("i5Qjx"),
        c = r("b3Qn7"),
        u = r("69SUA"),
        d = r("6BIRj"),
        f = r("lF9GJ"),
        p = r("py2Xr");
    let x, h, m, g, v = e => e;
    const y = e => {
            const {
                category: t
            } = e, [r, n] = a.useState(!0), l = a.useMemo((() => {
                var r;
                if (!(null === (r = t.options) || void 0 === r ? void 0 : r.length)) return;
                const n = t.options.find((t => t.name === e.value));
                return n || t.options[0]
            }), [t, e.value]), u = a.useMemo((() => {
                if (t.color) return t.color.defaultColor
            }), [t.color]), x = a.useMemo((() => {
                let e = t.name;
                return l ? `${e} - ${l.name}` : e
            }), [t, l]);
            return (0, o.jsxs)(b, {
                children: [(0, o.jsxs)(j, {
                    onClick: () => {
                        n((e => !e))
                    },
                    children: [(0, o.jsx)(C, {
                        children: x
                    }), (0, o.jsx)(S, {
                        children: (0, o.jsx)(p.default, {
                            name: "fas fa-caret-" + (r ? "up" : "down")
                        })
                    })]
                }), r ? e.category.type === i.CosmeticStyleCategoryType.color ? (0, o.jsx)(f.EditStyleColor, {
                    value: null !== (h = e.value) && void 0 !== h ? h : u,
                    onChange: e.onChange
                }) : (0, o.jsx)(s.default, {
                    direction: "horizontal",
                    size: 7,
                    wrap: !0,
                    children: t.options.map((r => (0, o.jsx)(c.EditStyleOption, {
                        option: r,
                        selected: r.name === l.name,
                        select: () => {
                            (0, d.playClickSound)(), e.onChange(r.name)
                        }
                    }, r.name + t.name)))
                }) : null]
            });
            var h
        },
        b = l.default.div.attrs({
            className: "maxWidth"
        })(x || (x = v``)),
        j = l.default.div.attrs({
            className: "maxWidth flex vc between"
        })(h || (h = v`
  gap: 10px;
  cursor: pointer;
  margin-bottom: 4px;
`)),
        C = l.default.div(m || (m = v`
  font-family: ${0};
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
`), u.Fonts.FugazOne),
        S = l.default.div(g || (g = v`
  font-size: 16px;
  opacity: 0.9;
`))
})), r.register("b3Qn7", (function(t, n) {
    e(t.exports, "EditStyleOption", (function() {
        return u
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        i = r("lKmIF");
    let l, s, c = e => e;
    const u = e => {
            const {
                option: t
            } = e;
            return (0, o.jsx)(d, {
                selected: e.selected,
                onClick: e.selected ? void 0 : e.select,
                children: "color" === t.preview.type ? (0, o.jsx)(f, {
                    style: {
                        background: `radial-gradient(circle at 13px 13px, ${t.preview.color}, #000)`
                    }
                }) : null
            })
        },
        d = a.default.div.attrs({
            className: "flex-center"
        })(l || (l = c`
  width: 65px;
  height: 65px;
  background: rgba(255, 255, 255, ${0});
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  border-color: ${0};
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: rgba(
      255,
      255,
      255,
      ${0}
    );
  }
`), (e => e.selected ? .24 : .1), (e => e.selected ? "#fdd835" : i.default.White), (e => e.selected ? .24 : .17)),
        f = a.default.div(s || (s = c`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`))
})), r.register("lF9GJ", (function(t, n) {
    e(t.exports, "EditStyleColor", (function() {
        return s
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("hOwTr"),
        i = r("2FDaO");
    let l;
    const s = e => (0, o.jsx)(c, {
            children: (0, o.jsx)(a.HexColorPicker, {
                style: {
                    width: "100%"
                },
                color: e.value,
                onChange: t => {
                    e.onChange(t)
                }
            })
        }),
        c = i.default.div.attrs({
            className: "maxWidth"
        })(l || (l = (e => e)`
  padding: 25px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
`))
})), r.register("hOwTr", (function(n, o) {
    e(n.exports, "HexColorPicker", (function() {
        return R
    }));
    var a = r("fywoC");

    function i() {
        return (i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }).apply(this, arguments)
    }

    function l(e, t) {
        if (null == e) return {};
        var r, n, o = {},
            a = Object.keys(e);
        for (n = 0; n < a.length; n++) t.indexOf(r = a[n]) >= 0 || (o[r] = e[r]);
        return o
    }

    function s(e) {
        var t = (0, a.useRef)(e),
            r = (0, a.useRef)((function(e) {
                t.current && t.current(e)
            }));
        return t.current = e, r.current
    }
    var c = function(e, t, r) {
            return void 0 === t && (t = 0), void 0 === r && (r = 1), e > r ? r : e < t ? t : e
        },
        u = function(e) {
            return "touches" in e
        },
        d = function(e) {
            return e && e.ownerDocument.defaultView || self
        },
        f = function(e, t, r) {
            var n = e.getBoundingClientRect(),
                o = u(t) ? function(e, t) {
                    for (var r = 0; r < e.length; r++)
                        if (e[r].identifier === t) return e[r];
                    return e[0]
                }(t.touches, r) : t;
            return {
                left: c((o.pageX - (n.left + d(e).pageXOffset)) / n.width),
                top: c((o.pageY - (n.top + d(e).pageYOffset)) / n.height)
            }
        },
        p = function(e) {
            !u(e) && e.preventDefault()
        },
        x = t(a).memo((function(e) {
            var r = e.onMove,
                n = e.onKey,
                o = l(e, ["onMove", "onKey"]),
                c = (0, a.useRef)(null),
                x = s(r),
                h = s(n),
                m = (0, a.useRef)(null),
                g = (0, a.useRef)(!1),
                v = (0, a.useMemo)((function() {
                    var e = function(e) {
                            p(e), (u(e) ? e.touches.length > 0 : e.buttons > 0) && c.current ? x(f(c.current, e, m.current)) : r(!1)
                        },
                        t = function() {
                            return r(!1)
                        };

                    function r(r) {
                        var n = g.current,
                            o = d(c.current),
                            a = r ? o.addEventListener : o.removeEventListener;
                        a(n ? "touchmove" : "mousemove", e), a(n ? "touchend" : "mouseup", t)
                    }
                    return [function(e) {
                        var t = e.nativeEvent,
                            n = c.current;
                        if (n && (p(t), ! function(e, t) {
                                return t && !u(e)
                            }(t, g.current) && n)) {
                            if (u(t)) {
                                g.current = !0;
                                var o = t.changedTouches || [];
                                o.length && (m.current = o[0].identifier)
                            }
                            n.focus(), x(f(n, t, m.current)), r(!0)
                        }
                    }, function(e) {
                        var t = e.which || e.keyCode;
                        t < 37 || t > 40 || (e.preventDefault(), h({
                            left: 39 === t ? .05 : 37 === t ? -.05 : 0,
                            top: 40 === t ? .05 : 38 === t ? -.05 : 0
                        }))
                    }, r]
                }), [h, x]),
                y = v[0],
                b = v[1],
                j = v[2];
            return (0, a.useEffect)((function() {
                return j
            }), [j]), t(a).createElement("div", i({}, o, {
                onTouchStart: y,
                onMouseDown: y,
                className: "react-colorful__interactive",
                ref: c,
                onKeyDown: b,
                tabIndex: 0,
                role: "slider"
            }))
        })),
        h = function(e) {
            return e.filter(Boolean).join(" ")
        },
        m = function(e) {
            var r = e.color,
                n = e.left,
                o = e.top,
                i = void 0 === o ? .5 : o,
                l = h(["react-colorful__pointer", e.className]);
            return t(a).createElement("div", {
                className: l,
                style: {
                    top: 100 * i + "%",
                    left: 100 * n + "%"
                }
            }, t(a).createElement("div", {
                className: "react-colorful__pointer-fill",
                style: {
                    backgroundColor: r
                }
            }))
        },
        g = function(e, t, r) {
            return void 0 === t && (t = 0), void 0 === r && (r = Math.pow(10, t)), Math.round(r * e) / r
        },
        v = (Math.PI, function(e) {
            return _(y(e))
        }),
        y = function(e) {
            return "#" === e[0] && (e = e.substring(1)), e.length < 6 ? {
                r: parseInt(e[0] + e[0], 16),
                g: parseInt(e[1] + e[1], 16),
                b: parseInt(e[2] + e[2], 16),
                a: 4 === e.length ? g(parseInt(e[3] + e[3], 16) / 255, 2) : 1
            } : {
                r: parseInt(e.substring(0, 2), 16),
                g: parseInt(e.substring(2, 4), 16),
                b: parseInt(e.substring(4, 6), 16),
                a: 8 === e.length ? g(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
            }
        },
        b = function(e) {
            return w(S(e))
        },
        j = function(e) {
            var t = e.s,
                r = e.v,
                n = e.a,
                o = (200 - t) * r / 100;
            return {
                h: g(e.h),
                s: g(o > 0 && o < 200 ? t * r / 100 / (o <= 100 ? o : 200 - o) * 100 : 0),
                l: g(o / 2),
                a: g(n, 2)
            }
        },
        C = function(e) {
            var t = j(e);
            return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)"
        },
        S = function(e) {
            var t = e.h,
                r = e.s,
                n = e.v,
                o = e.a;
            t = t / 360 * 6, r /= 100, n /= 100;
            var a = Math.floor(t),
                i = n * (1 - r),
                l = n * (1 - (t - a) * r),
                s = n * (1 - (1 - t + a) * r),
                c = a % 6;
            return {
                r: g(255 * [n, l, i, i, s, n][c]),
                g: g(255 * [s, n, n, l, i, i][c]),
                b: g(255 * [i, i, s, n, n, l][c]),
                a: g(o, 2)
            }
        },
        k = function(e) {
            var t = e.toString(16);
            return t.length < 2 ? "0" + t : t
        },
        w = function(e) {
            var t = e.r,
                r = e.g,
                n = e.b,
                o = e.a,
                a = o < 1 ? k(g(255 * o)) : "";
            return "#" + k(t) + k(r) + k(n) + a
        },
        _ = function(e) {
            var t = e.r,
                r = e.g,
                n = e.b,
                o = e.a,
                a = Math.max(t, r, n),
                i = a - Math.min(t, r, n),
                l = i ? a === t ? (r - n) / i : a === r ? 2 + (n - t) / i : 4 + (t - r) / i : 0;
            return {
                h: g(60 * (l < 0 ? l + 6 : l)),
                s: g(a ? i / a * 100 : 0),
                v: g(a / 255 * 100),
                a: o
            }
        },
        E = t(a).memo((function(e) {
            var r = e.hue,
                n = e.onChange,
                o = h(["react-colorful__hue", e.className]);
            return t(a).createElement("div", {
                className: o
            }, t(a).createElement(x, {
                onMove: function(e) {
                    n({
                        h: 360 * e.left
                    })
                },
                onKey: function(e) {
                    n({
                        h: c(r + 360 * e.left, 0, 360)
                    })
                },
                "aria-label": "Hue",
                "aria-valuenow": g(r),
                "aria-valuemax": "360",
                "aria-valuemin": "0"
            }, t(a).createElement(m, {
                className: "react-colorful__hue-pointer",
                left: r / 360,
                color: C({
                    h: r,
                    s: 100,
                    v: 100,
                    a: 1
                })
            })))
        })),
        F = t(a).memo((function(e) {
            var r = e.hsva,
                n = e.onChange,
                o = {
                    backgroundColor: C({
                        h: r.h,
                        s: 100,
                        v: 100,
                        a: 1
                    })
                };
            return t(a).createElement("div", {
                className: "react-colorful__saturation",
                style: o
            }, t(a).createElement(x, {
                onMove: function(e) {
                    n({
                        s: 100 * e.left,
                        v: 100 - 100 * e.top
                    })
                },
                onKey: function(e) {
                    n({
                        s: c(r.s + 100 * e.left, 0, 100),
                        v: c(r.v - 100 * e.top, 0, 100)
                    })
                },
                "aria-label": "Color",
                "aria-valuetext": "Saturation " + g(r.s) + "%, Brightness " + g(r.v) + "%"
            }, t(a).createElement(m, {
                className: "react-colorful__saturation-pointer",
                top: 1 - r.v / 100,
                left: r.s / 100,
                color: C(r)
            })))
        })),
        O = function(e, t) {
            if (e === t) return !0;
            for (var r in e)
                if (e[r] !== t[r]) return !1;
            return !0
        },
        z = function(e, t) {
            return e.toLowerCase() === t.toLowerCase() || O(y(e), y(t))
        };

    function M(e, t, r) {
        var n = s(r),
            o = (0, a.useState)((function() {
                return e.toHsva(t)
            })),
            i = o[0],
            l = o[1],
            c = (0, a.useRef)({
                color: t,
                hsva: i
            });
        (0, a.useEffect)((function() {
            if (!e.equal(t, c.current.color)) {
                var r = e.toHsva(t);
                c.current = {
                    hsva: r,
                    color: t
                }, l(r)
            }
        }), [t, e]), (0, a.useEffect)((function() {
            var t;
            O(i, c.current.hsva) || e.equal(t = e.fromHsva(i), c.current.color) || (c.current = {
                hsva: i,
                color: t
            }, n(t))
        }), [i, e, n]);
        var u = (0, a.useCallback)((function(e) {
            l((function(t) {
                return Object.assign({}, t, e)
            }))
        }), []);
        return [i, u]
    }
    var N, T = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        I = new Map,
        A = function(e) {
            T((function() {
                var t = e.current ? e.current.ownerDocument : document;
                if (void 0 !== t && !I.has(t)) {
                    var r = t.createElement("style");
                    r.innerHTML = '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}', I.set(t, r);
                    var n = N || ("undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
                    n && r.setAttribute("nonce", n), t.head.appendChild(r)
                }
            }), [])
        },
        B = function(e) {
            var r = e.className,
                n = e.colorModel,
                o = e.color,
                s = void 0 === o ? n.defaultColor : o,
                c = e.onChange,
                u = l(e, ["className", "colorModel", "color", "onChange"]),
                d = (0, a.useRef)(null);
            A(d);
            var f = M(n, s, c),
                p = f[0],
                x = f[1],
                m = h(["react-colorful", r]);
            return t(a).createElement("div", i({}, u, {
                ref: d,
                className: m
            }), t(a).createElement(F, {
                hsva: p,
                onChange: x
            }), t(a).createElement(E, {
                hue: p.h,
                onChange: x,
                className: "react-colorful__last-control"
            }))
        },
        W = {
            defaultColor: "000",
            toHsva: v,
            fromHsva: function(e) {
                return b({
                    h: e.h,
                    s: e.s,
                    v: e.v,
                    a: 1
                })
            },
            equal: z
        },
        R = function(e) {
            return t(a).createElement(B, i({}, e, {
                colorModel: W
            }))
        }
})), r.register("9kcmK", (function(t, n) {
    e(t.exports, "SellSelector", (function() {
        return _
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("2FDaO"),
        l = r("4ifJF"),
        s = r("69SUA"),
        c = r("iMOcM"),
        u = r("45FO2"),
        d = r("7v0W8"),
        f = r("aQuqp"),
        p = r("8UJqa"),
        x = r("4AfaU"),
        h = r("9j0jv"),
        m = r("eEYFA"),
        g = r("6BIRj"),
        v = r("jVQO4"),
        y = r("alREA"),
        b = r("79q1I");
    let j, C, S, k, w = e => e;
    const _ = e => {
            const [t, r] = a.useState(!1), [n, i] = a.useState(e.count - 1), {
                closeSellScreen: p
            } = e, j = e.count - 1, C = e => {
                const t = Math.max(1, Math.min(j, e));
                i(t), (0, g.playPackClickSound)()
            };
            return (0, o.jsxs)(E, {
                children: [(0, o.jsxs)(F, {
                    children: [(0, o.jsxs)(l.Centered, {
                        className: "maxWidth",
                        style: {
                            gap: 6
                        },
                        children: [(0, o.jsx)(u.Button, {
                            disabled: 1 === n,
                            onClick: () => {
                                C(n - 5)
                            },
                            children: "-5"
                        }), (0, o.jsx)(u.Button, {
                            disabled: 1 === n,
                            onClick: () => {
                                C(n - 1)
                            },
                            children: "-1"
                        }), (0, o.jsx)(O, {
                            children: (0, c.numberWithCommas)(n)
                        }), (0, o.jsx)(u.Button, {
                            disabled: n === j,
                            onClick: () => {
                                C(n + 1)
                            },
                            children: "+1"
                        }), (0, o.jsx)(u.Button, {
                            disabled: n === j,
                            onClick: () => {
                                C(n + 5)
                            },
                            children: "+5"
                        })]
                    }), (0, o.jsxs)(z, {
                        children: [(0, o.jsxs)("span", {
                            children: ["Selling ", (0, c.numberWithCommas)(n), " ", (0, o.jsx)("span", {
                                style: {
                                    fontWeight: s.FontWeights.Bold,
                                    textDecoration: "underline"
                                },
                                children: e.name
                            }), " ", "for"]
                        }), (0, o.jsx)(d.default, {
                            size: 12,
                            amount: e.sellCost * n
                        })]
                    })]
                }), (0, o.jsx)(f.default, {
                    type: "success",
                    customHorizontalPadding: 35,
                    ariaLabel: "Sell",
                    onClick: () => {
                        t || ((0, v.playSound)({
                            path: (0, y.default)("cosmos/sold.mp3"),
                            volume: .6
                        }), r(!0), (0, m.Request)({
                            url: "/api/cosmos/sell",
                            data: {
                                cosmeticId: e.id,
                                count: n
                            },
                            success: t => {
                                e.setSoldAmount(t.amount), (0, h.refetchOwnedCosmetics)(), (0, b.invalidateCosmosBasics)()
                            },
                            error: e => {
                                (0, c.throwMessageError)({
                                    e: e,
                                    default: {
                                        title: "Error selling this item",
                                        content: "Please try again later"
                                    }
                                })
                            },
                            both: () => {
                                r(!1)
                            }
                        }))
                    },
                    style: {
                        marginTop: 20
                    },
                    children: (0, o.jsx)("div", {
                        style: {
                            fontFamily: s.Fonts.FugazOne,
                            textTransform: "uppercase",
                            fontSize: 16
                        },
                        children: "Sell"
                    })
                }), (0, o.jsx)(x.SellButton, {
                    onClick: () => {
                        (0, g.playPackClickSound)(), p()
                    },
                    children: "Go back"
                })]
            })
        },
        E = (0, i.default)(l.CenteredColumn).attrs({
            className: "maxWidth"
        })(j || (j = w``)),
        F = (0, i.default)(l.CenteredColumn).attrs({
            className: "maxWidth"
        })(C || (C = w`
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-top: 19px;
`)),
        O = i.default.div(S || (S = w`
  font-size: 24px;
  font-family: ${0};
  line-height: 1;
  border: 2px solid ${0};
  border-radius: 4px;
  padding: 10px 30px;
  padding-top: 13px;
  margin: 0px 10px;
  background: rgba(255, 255, 255, 0.05);
`), s.Fonts.FugazOne, p.default.Yellow),
        z = i.default.div.attrs({
            className: "flex wrap"
        })(k || (k = w`
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 14px;
  gap: 6px;
`))
})), r.register("45FO2", (function(t, n) {
    e(t.exports, "CountSelector", (function() {
        return c
    })), e(t.exports, "Button", (function() {
        return u
    }));
    var o = r("hxEiv"),
        a = r("2FDaO");
    r("fywoC");
    var i = r("i5Qjx"),
        l = r("6BIRj");
    let s;
    const c = e => {
            const t = t => {
                const r = Math.max(1, Math.min(25, t));
                e.setCount(r), (0, l.playPackClickSound)()
            };
            return (0, o.jsxs)(i.default, {
                size: 6,
                style: {
                    marginTop: 10
                },
                children: [(0, o.jsx)(u, {
                    disabled: 1 === e.count,
                    onClick: () => {
                        t(e.count - 1)
                    },
                    children: "-1"
                }), (0, o.jsx)(u, {
                    disabled: 25 === e.count,
                    onClick: () => {
                        t(e.count + 1)
                    },
                    children: "+1"
                }), (0, o.jsx)(u, {
                    disabled: 25 === e.count,
                    onClick: () => {
                        t(e.count + 5)
                    },
                    children: "+5"
                })]
            })
        },
        u = a.default.div(s || (s = (e => e)`
  background: rgba(255, 255, 255, 0.1);
  opacity: ${0};
  padding: 6px 12px;
  line-height: 1;
  font-size: 11px;
  border-radius: 4px;
  transition: transform 0.15s, background 0.15s;
  will-change: transform, background;
  user-select: none;
  cursor: ${0};
  ${0}
`), (e => e.disabled ? .5 : 1), (e => e.disabled ? "not-allowed" : "pointer"), (e => !e.disabled && "&:hover {\n    transform: scale(1.05);\n    background: rgba(255, 255, 255, 0.15);\n  }"))
})), r.register("9j0jv", (function(t, n) {
    e(t.exports, "invalidateOwnedCosmetics", (function() {
        return s
    })), e(t.exports, "refetchOwnedCosmetics", (function() {
        return c
    })), e(t.exports, "default", (function() {
        return u
    }));
    var o = r("eMRqp"),
        a = r("bKPD8"),
        i = r("iMOcM");
    const l = ["cosmos-owned-cosmetics"],
        s = () => {
            a.default.invalidateQueries(l)
        },
        c = () => {
            a.default.refetchQueries(l)
        };
    var u = () => (0, o.useQuery)(l, (() => (0, i.requestAsPromise)({
        url: "/api/cosmos/owned-cosmetics"
    })))
})), r.register("5uIZ5", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        i = r("69SUA"),
        l = r("4ifJF"),
        s = r("py2Xr");
    let c, u, d, f = e => e;
    const p = e => (0, o.jsxs)(m, {
        style: e.style,
        children: [(0, o.jsx)("div", {
            style: {
                marginRight: 15,
                flexShrink: 0
            },
            children: (0, o.jsx)(s.default, {
                name: e.icon
            })
        }), (0, o.jsx)("div", {
            children: e.children
        })]
    });
    var x = e => (0, o.jsx)(o.Fragment, {
        children: (0, o.jsxs)(h, {
            children: [e.description ? (0, o.jsx)(p, {
                icon: "fad fa-sparkles",
                children: e.description
            }) : null, e.pack ? (0, o.jsxs)(p, {
                icon: "fad fa-box",
                style: {
                    marginTop: e.description ? 10 : 0
                },
                children: ["Part of the", " ", (0, o.jsx)("span", {
                    style: {
                        fontWeight: i.FontWeights.Bold,
                        color: "#ffecb3"
                    },
                    children: e.pack
                })]
            }) : null]
        })
    });
    const h = a.default.div(c || (c = f`
  margin-top: 19px;
`)),
        m = (0, a.default)(l.VerticallyCentered)(u || (u = f`
  background: rgba(255, 255, 255, 0.1);
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.93);
  transition: background 0.2s ease-in-out;
  cursor: default;
  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }
`));
    a.default.div(d || (d = f``))
})), r.register("jVQCX", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        i = r("py2Xr");
    let l;
    var s = () => (0, o.jsx)(c, {
        children: (0, o.jsx)(i.default, {
            name: "fas fa-times"
        })
    });
    const c = a.default.div(l || (l = (e => e)`
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.17s;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`))
})), r.register("5mCyy", (function(t, n) {
    e(t.exports, "default", (function() {
        return x
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("eTG4A"),
        i = r("2cIXm"),
        l = r("4AfaU"),
        s = r("4p7Sv"),
        c = r("2FDaO"),
        u = r("9SlNd"),
        d = r("6a2jS"),
        f = r("6BIRj");
    let p;
    var x = e => {
        const t = e.type !== d.CosmeticType.sticker;
        return (0, o.jsxs)("div", {
            className: "maxWidth",
            children: [(0, o.jsx)(i.default, {
                ...e,
                editStyles: {}
            }), (0, o.jsxs)(a.Bottom, {
                className: "flex-center flex-column",
                children: [(0, o.jsx)(s.default, {
                    ...e
                }), (0, o.jsx)(l.default, {
                    ...e,
                    callToAction: () => {
                        const r = t ? "Equip" : "Close";
                        return {
                            text: r,
                            ariaLabel: r,
                            onClick: () => {
                                (0, f.playClickSound)(), t ? (0, u.selectCosmetic)({
                                    cosmeticId: e.id,
                                    cosmeticType: e.type,
                                    onSuccess: () => {
                                        e.onCosmeticSelectionChanged && e.onCosmeticSelectionChanged(), e.close()
                                    }
                                }) : e.close()
                            }
                        }
                    }
                }), t ? (0, o.jsx)(h, {
                    onClick: e.close,
                    children: "Close"
                }) : null]
            })]
        })
    };
    const h = c.default.div(p || (p = (e => e)`
  color: #bbdefb;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 8px;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #e3f2fd;
  }
`))
})), r.register("4p7Sv", (function(n, o) {
    e(n.exports, "Container", (function() {
        return g
    })), e(n.exports, "Name", (function() {
        return v
    })), e(n.exports, "Purchased", (function() {
        return y
    })), e(n.exports, "default", (function() {
        return m
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("2FDaO"),
        l = r("69SUA"),
        s = r("2RhIb"),
        c = r("iMOcM"),
        u = r("cPGmn");
    let d, f, p, x = e => e;
    const h = {
        angle: 90,
        spread: 70,
        startVelocity: 60,
        elementCount: 100,
        decay: .87
    };
    var m = e => {
        const [r, n] = (0, c.useBoolean)(!1);
        return (0, u.useDidMount)(n), (0, a.jsxs)(g, {
            children: [(0, a.jsx)(v, {
                children: e.name
            }), (0, a.jsx)(t(s), {
                active: r,
                config: h
            }), (0, a.jsx)(y, {
                children: "Purchased!"
            })]
        })
    };
    const g = i.default.div.attrs({
            className: "flex-center flex-column animated bounceIn"
        })(d || (d = x`
  text-align: center;
  font-family: ${0};
  text-transform: uppercase;
  animation-duration: 0.6s;
`), l.Fonts.FugazOne),
        v = i.default.div(f || (f = x`
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
`)),
        y = i.default.div(p || (p = x`
  font-size: 48px;
  line-height: 1;
`))
})), r.register("9SlNd", (function(t, n) {
    e(t.exports, "selectCosmetic", (function() {
        return i
    }));
    var o = r("iMOcM"),
        a = r("79q1I");
    const i = ({
        cosmeticId: e,
        cosmeticType: t,
        editStyles: r,
        onSuccess: n
    }) => {
        const i = {
            cosmeticId: e,
            cosmeticType: t
        };
        r && Object.keys(r).length > 0 && (i.editStyles = r), (0, o.request)({
            url: "/api/cosmos/select-cosmetic",
            data: i,
            success: () => {
                (0, a.invalidateCosmosBasics)(), n()
            }
        })
    }
})), r.register("7nTkq", (function(t, n) {
    e(t.exports, "SoldScreen", (function() {
        return m
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2cIXm"),
        i = r("eTG4A"),
        l = r("4p7Sv"),
        s = r("4AfaU"),
        c = r("6BIRj"),
        u = r("2FDaO"),
        d = r("7v0W8"),
        f = r("69SUA");
    let p, x, h = e => e;
    const m = e => (0, o.jsxs)("div", {
            className: "maxWidth",
            children: [(0, o.jsx)(a.default, {
                ...e,
                editStyles: {}
            }), (0, o.jsxs)(i.Bottom, {
                className: "flex-center flex-column",
                children: [(0, o.jsxs)(l.Container, {
                    children: [(0, o.jsx)(l.Name, {
                        children: e.name
                    }), (0, o.jsx)(l.Purchased, {
                        children: "Sold!"
                    })]
                }), (0, o.jsx)(g, {
                    children: (0, o.jsxs)(v, {
                        children: [(0, o.jsx)("span", {
                            style: {
                                marginTop: 3,
                                marginRight: 8
                            },
                            children: "You earned"
                        }), (0, o.jsx)(d.default, {
                            size: 14,
                            amount: e.soldAmount
                        })]
                    })
                }), (0, o.jsx)(s.default, {
                    ...e,
                    callToAction: () => {
                        const t = "Close";
                        return {
                            text: t,
                            ariaLabel: t,
                            onClick: () => {
                                (0, c.playClickSound)(), e.close()
                            }
                        }
                    }
                })]
            })]
        }),
        g = u.default.div.attrs({
            className: "maxWidth flex-center"
        })(p || (p = h`
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-size: 14px;
  line-height: 1;
  font-family: ${0};
  text-transform: uppercase;
  margin-top: 12px;
`), f.Fonts.FugazOne),
        v = u.default.div.attrs({
            className: "flex"
        })(x || (x = h``))
}));