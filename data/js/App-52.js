import {
    cm as F,
    j as t,
    U as T,
    d as f,
    B as V,
    r as m,
    D as re,
    bI as le,
    aw as de,
    s as ue,
    ar as me,
    C as pe,
    u as fe
} from "./_index.js";
import {
    y as _,
    M as v,
    u as D,
    o as C,
    s as H,
    z as ge,
    S as he,
    J as xe,
    F as ve,
    B as be,
    a3 as ye,
    m as Ce
} from "./App-41.js";
import {
    a as N,
    C as Z,
    b as Te
} from "./Centered.js";
import {
    C as S
} from "./CapitalizeFirstLetter.js";
import {
    T as h
} from "./index-14.js";
import {
    G as L
} from "./GetAssetPath.js";
import {
    a as oe,
    o as se
} from "./mobxreact.esm.js";
import {
    d as ie,
    n as O,
    s as I,
    A as z,
    M as W,
    a9 as y
} from "./FixSpinePlugin.js";
import {
    I as j,
    E as q,
    T as G
} from "./ActionButton.js";
import {
    s as Q
} from "./setAddMenuScreen.js";
import {
    O as J
} from "./OwnsSeasonTicket.js";
import {
    S as je
} from "./SeasonTicketName.js";
import {
    C as te,
    G as ke
} from "./GetCurrentMapStyle.js";
import {
    T as w,
    D as d
} from "./TutorialConsts.js";
import {
    u as Y
} from "./useDebouncedValue.js";
import {
    S as ae
} from "./index-2.js";
import {
    D as P
} from "./index-6.js";
import {
    I as X
} from "./index-3.js";
import {
    B as Ie
} from "./index-24.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./MapModeType.js";
import "./playSound.js";
import "./MapSound.js";
import "./howler.js";
import "./index-18.js";
import "./context.js";
import "./FontAwesomeIcon.js";
import "./index-4.js";
import "./motion.js";
import "./index-5.js";
import "./SixteenByNineScaler.js";
import "./index-20.js";
import "./index-22.js";
import "./index-1.js";
import "./progress.js";
import "./CheckOutlined.js";
import "./ElementIds.js";
import "./useQuery.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./util-1.js";
import "./util-2.js";
import "./Shortcut.js";
import "./Names.js";
import "./useWillUnmount.js";
import "./CircularProgress.js";
import "./clsx.m.js";
import "./AccessibleAnchor.js";
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
import "./use-motion-value.js";
import "./index-9.js";
import "./index-23.js";
import "./useIntervalWhen.js";
import "./index-10.js";
import "./move.js";
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./MapStyle.js";
import "./FillRemainingSpace.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./CopyOutlined.js";
const {
    useToken: Oe
} = F, R = e => {
    const {
        token: {
            borderRadius: n
        }
    } = Oe(), {
        name: r,
        description: o,
        icon: c
    } = e, i = () => {
        _(), e.onClick()
    };
    return t.jsx(Se, {
        onClick: i,
        borderRadius: n,
        children: t.jsxs(N, {
            className: "maxAll",
            children: [t.jsx(we, {
                children: t.jsx(Ne, {
                    src: c
                })
            }), t.jsx(h.Title, {
                level: 3,
                style: {
                    marginBottom: -1,
                    fontFamily: T.FugazOne,
                    textTransform: "uppercase"
                },
                children: S(r)
            }), t.jsx(h.Text, {
                children: o
            })]
        })
    })
}, Se = f.div.attrs({
    className: "maxAll"
})`
  cursor: pointer;
  border-radius: ${e=>e.borderRadius}px;
  background: rgba(255, 255, 255, 0.1);
  padding: 40px 0px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`, we = f.div`
  margin-bottom: 5px;
`, Ne = f.img`
  height: 70px;
`, M = e => L(`editor/icons/${e}.png`), $e = e => t.jsxs(Ee, {
    children: [t.jsx(h.Title, {
        level: 1,
        style: {
            fontFamily: T.FugazOne,
            marginBottom: 25,
            marginTop: 5
        },
        className: "allCaps",
        children: "Add"
    }), t.jsxs(Fe, {
        children: [t.jsx(R, {
            name: v.terrain.singular,
            description: "The floors and walls on the map",
            icon: M("terrain"),
            onClick: e.setToTerrain
        }), t.jsx(R, {
            name: v.prop.plural,
            description: "Objects and decorations",
            icon: M("prop"),
            onClick: e.setToProps
        }), t.jsx(R, {
            name: v.device.plural,
            description: "Create game mechanics!",
            icon: M("device"),
            onClick: e.setToDevices
        }), t.jsx(R, {
            name: v.wire.plural,
            description: "Connect devices together",
            icon: M("wire"),
            onClick: e.setToWires
        })]
    }), e.children]
}), Ee = f.div.attrs({
    className: "flex-column flex-center maxWidth"
})``, Fe = f.div.attrs({
    className: "maxWidth"
})`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`, De = oe(() => {
    const {
        me: {
            adding: {
                terrain: e
            }
        }
    } = D(), n = e.buildTerrainAsWall, r = o => {
        ie() || (e.buildTerrainAsWall = o)
    };
    return t.jsxs(Z, {
        children: [t.jsxs(h.Text, {
            style: {
                marginRight: 10
            },
            children: ["Place down ", v.terrain.singular, " as a"]
        }), t.jsxs(V.Group, {
            children: [t.jsx(V, {
                type: n ? "default" : "primary",
                onClick: () => r(!1),
                children: "Floor"
            }), t.jsx(V, {
                type: n ? "primary" : "default",
                onClick: () => r(!0),
                children: "Wall"
            })]
        })]
    })
}), ee = () => t.jsxs(Pe, {
    children: [je.name, " Exclusive"]
}), Pe = f.div`
  color: rgb(218, 165, 32);
  background: linear-gradient(
    45deg,
    #ae8625,
    #f7ef8a,
    #d2ac47,
    #edc967,
    #ae8625,
    #f7ef8a,
    #d2ac47,
    #edc967,
    #ae8625,
    #f7ef8a
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: ${T.FugazOne};
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1;
`, {
    useToken: Ae
} = F, Re = e => {
    const {
        id: n,
        name: r,
        previewUrl: o,
        seasonTicketRequired: c
    } = e.option, i = m.useRef(null), {
        token: {
            borderRadius: a
        }
    } = Ae(), u = c && !J(), s = l => {
        u || (I.me.adding.terrain.currentlySelectedTerrain = n, I.me.adding.mode = z.terrain, H(W.adding), j() && Q(y.home), q({
            event: G.SELECT_TERRAIN_TO_ADD,
            terrainId: n
        }), l && l())
    };
    return C(O.Input.Keyboard.KeyCodes.ENTER, () => {
        e.focused && s()
    }, [e.focused, s]), m.useEffect(() => {
        var l;
        e.focused && ((l = i.current) == null || l.scrollIntoView({
            behavior: "smooth",
            block: "center"
        }))
    }, [e.focused]), t.jsxs(Me, {
        borderRadius: a,
        focused: e.focused,
        onClick: () => {
            s(() => {
                _()
            })
        },
        ref: i,
        children: [t.jsx(Ke, {
            src: o
        }), t.jsxs(Be, {
            children: [t.jsx(_e, {
                level: 5,
                className: "allCaps",
                style: {
                    fontFamily: T.FugazOne
                },
                children: r
            }), c ? t.jsx("div", {
                style: {
                    marginTop: 2
                },
                children: t.jsx(ee, {})
            }) : null]
        })]
    })
}, Me = f(Te)`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${e=>e.borderRadius}px;
  border: 2px solid
    ${e=>e.focused?"#ffca28":"rgba(255, 255, 255, 0.1)"};
  padding: 10px 15px;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;
f.div`
  display: flex;
  align-items: center;
`;
const Be = f.div`
  display: flex;
  flex-direction: column;
`,
    Ke = f.img`
  height: 54px;
  border-radius: 3px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  margin-right: 15px;
`,
    _e = f(h.Title)`
  margin-bottom: 0 !important;
`,
    Le = () => t.jsx(h.Text, {
        italic: !0,
        children: "No results found. Try a different search."
    }),
    ze = e => {
        const {
            worldOptions: {
                terrainOptions: n
            }
        } = D(), [r, o] = m.useState(-1), [c] = Y(e.searchQuery, 150), i = m.useMemo(() => {
            var s;
            const a = (s = c == null ? void 0 : c.trim()) == null ? void 0 : s.toLowerCase();
            if (!a && !j()) return n.filter(l => te(l.id));
            const u = n.filter(l => l.name.toLowerCase().includes(a) && te(l.id));
            return j() ? u.sort((l, p) => {
                const g = w.topTerrain.indexOf(l.id),
                    x = w.topTerrain.indexOf(p.id);
                return g === -1 && x === -1 ? 0 : g === -1 ? 1 : x === -1 ? -1 : g - x
            }) : u
        }, [n.length, c]);
        return C(O.Input.Keyboard.KeyCodes.UP, () => {
            o(Math.max(0, r - 1))
        }, [r]), C(O.Input.Keyboard.KeyCodes.DOWN, () => {
            const a = i.length - 1;
            o(Math.min(a, r + 1))
        }, [i.length, r]), m.useEffect(() => {
            o(c ? 0 : -1)
        }, [c]), i.length ? t.jsx(ae, {
            direction: "vertical",
            size: 12,
            className: "maxWidth",
            children: i.map((a, u) => t.jsx(Re, {
                option: a,
                focused: r === u
            }, a.id))
        }) : t.jsx(Le, {})
    },
    We = e => {
        const [n, r] = m.useState(""), o = m.useRef(null), c = u => {
            r(u.target.value)
        }, i = u => {
            var s;
            u ? (s = o == null ? void 0 : o.current) == null || s.focus() : r("")
        }, a = ie();
        return t.jsx(P, {
            open: e.open,
            onClose: e.close,
            width: 500,
            afterOpenChange: i,
            destroyOnClose: !0,
            children: t.jsxs(N, {
                children: [t.jsx(h.Title, {
                    level: 1,
                    style: {
                        fontFamily: T.FugazOne,
                        marginBottom: 12,
                        marginTop: 5
                    },
                    className: "allCaps",
                    children: S(v.terrain.singular)
                }), a ? null : t.jsxs(t.Fragment, {
                    children: [t.jsx(De, {}), " ", t.jsx(re, {})]
                }), t.jsx(X.Search, {
                    size: "large",
                    placeholder: `Search for ${v.terrain.plural}...`,
                    style: {
                        marginBottom: 23
                    },
                    value: n,
                    onChange: c,
                    ref: o
                }), t.jsx(ze, {
                    searchQuery: n
                })]
            })
        })
    };
var B = {},
    ne;

function qe() {
    if (ne) return B;
    ne = 1, Object.defineProperty(B, "__esModule", {
        value: !0
    });
    const e = le();

    function n(r) {
        const [o, c] = (0, e.useState)(!1), i = (0, e.useMemo)(() => new IntersectionObserver(([a]) => c(a.isIntersecting)), []);
        return (0, e.useEffect)(() => (i.observe(r.current), () => {
            i.disconnect()
        }), []), (0, e.useEffect)(() => {
            o && i.unobserve(r.current)
        }, [o, i, r]), o
    }
    return B.default = n, B
}
var Ge = qe();
const Qe = de(Ge),
    {
        useToken: Ue
    } = F,
    Ve = e => {
        const {
            id: n,
            name: r,
            image: o,
            seasonTicketRequired: c
        } = e.option, i = m.useRef(null), a = Qe(i), {
            token: {
                borderRadius: u
            }
        } = Ue(), s = c && !J(), l = p => {
            s || (I.me.adding.devices.selectedDeviceType = d.prop, I.me.adding.devices.currentlySelectedProp = n, I.me.adding.mode = z.device, H(W.adding), j() && Q(y.home), q({
                event: G.SELECT_PROP_TO_ADD,
                propId: n
            }), p && p())
        };
        return C(O.Input.Keyboard.KeyCodes.ENTER, () => {
            e.focused && l()
        }, [e.focused, l]), m.useEffect(() => {
            var p;
            e.focused && ((p = i.current) == null || p.scrollIntoView({
                block: "center"
            }))
        }, [e.focused]), t.jsx(He, {
            ref: i,
            onClick: () => {
                l(() => {
                    _()
                })
            },
            focused: e.focused,
            borderRadius: u,
            children: a ? t.jsxs(t.Fragment, {
                children: [t.jsx(Ze, {
                    children: t.jsx(Je, {
                        src: L(o.path)
                    })
                }), t.jsx(Ye, {
                    level: 5,
                    className: "allCaps",
                    style: {
                        fontFamily: T.FugazOne
                    },
                    children: r
                }), c ? t.jsx(ee, {}) : null]
            }) : null
        })
    },
    He = f(N)`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${e=>e.borderRadius}px;
  border: 2px solid
    ${e=>e.focused?"#ffca28":"rgba(255, 255, 255, 0.1)"};
  padding: 10px 15px;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  height: auto;
  min-height: 168px;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`,
    Ze = f(Z)`
  width: 120px;
  height: 120px;
  padding: 10px;
`,
    Je = f.img.attrs({
        draggable: !1
    })`
  max-height: 100%;
  max-width: 100%;
`,
    Ye = f(h.Title).attrs({
        className: "maxWidth"
    })`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`,
    Xe = () => t.jsx(h.Text, {
        italic: !0,
        children: "No results found. Try a different search."
    }),
    et = se(e => {
        const {
            worldOptions: n
        } = D(), [r, o] = m.useState(-1), [c] = Y(e.searchQuery, 200), i = m.useMemo(() => {
            var g;
            const u = n.propsOptions.filter(x => ge(x.minimumRoleLevel)),
                s = (g = c == null ? void 0 : c.trim()) == null ? void 0 : g.toLowerCase();
            if (!s && !j()) return u;
            const l = s.split(/\s+/),
                p = u.filter(x => {
                    const $ = [x.name, ...x.tags ?? []].join(" ").toLowerCase();
                    return l.every(b => $.includes(b))
                });
            return j() ? p.sort((x, $) => {
                const b = w.topProps.indexOf(x.id),
                    E = w.topProps.indexOf($.id);
                return b === -1 && E === -1 ? 0 : b === -1 ? 1 : E === -1 ? -1 : b - E
            }) : p
        }, [n.propsOptions.length, c]);
        ue(() => {
            n.requestedAllProps || (n.requestedAllProps = !0, he(xe.requestAllProps))
        });
        const a = m.useCallback(u => {
            const s = Math.max(0, Math.min(i.length - 1, r + u));
            o(s)
        }, [i.length, r]);
        return C(Phaser.Input.Keyboard.KeyCodes.UP, () => {
            a(-2)
        }, [a]), C(Phaser.Input.Keyboard.KeyCodes.DOWN, () => {
            a(2)
        }, [a]), C(Phaser.Input.Keyboard.KeyCodes.LEFT, () => {
            a(-1)
        }, [a]), C(Phaser.Input.Keyboard.KeyCodes.RIGHT, () => {
            a(1)
        }, [a]), m.useEffect(() => {
            o(c ? 0 : -1)
        }, [c]), n.hasAllProps ? i.length ? t.jsx(tt, {
            children: i.map((u, s) => t.jsx(Ve, {
                focused: s === r,
                option: u
            }, u.id + "-option"))
        }) : t.jsx(Xe, {}) : null
    }),
    tt = f.div.attrs({
        className: "maxWidth"
    })`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 10px;
  overflow: hidden;
`,
    nt = e => {
        const [n, r] = m.useState(""), o = m.useRef(null), c = a => {
            r(a.target.value)
        }, i = a => {
            var u;
            a ? (u = o == null ? void 0 : o.current) == null || u.focus() : r("")
        };
        return t.jsx(P, {
            open: e.open,
            onClose: e.close,
            width: 550,
            afterOpenChange: i,
            destroyOnClose: !0,
            children: t.jsxs(N, {
                children: [t.jsx(h.Title, {
                    level: 1,
                    style: {
                        fontFamily: T.FugazOne,
                        marginBottom: 12,
                        marginTop: 5
                    },
                    className: "allCaps",
                    children: S(v.prop.plural)
                }), t.jsx(X.Search, {
                    size: "large",
                    placeholder: `Search for ${v.prop.plural}...`,
                    style: {
                        marginBottom: 23
                    },
                    value: n,
                    onChange: c,
                    ref: o
                }), t.jsx(et, {
                    searchQuery: n
                })]
            })
        })
    },
    rt = [d.placedSticker, d.droppedItem],
    ot = {
        [d.characterSpawnPad]: "spawn_pad",
        [d.backgroundTilesZone]: "background_tile_zone",
        [d.proceduralTerrainZoneZoneInstruction]: "procedural_terrain_zone_instruction",
        [d.mapOptions]: "map_settings",
        [d.guiDevice]: "gui"
    },
    st = ({
        deviceId: e
    }) => {
        const [n, r] = m.useState(!1);
        m.useEffect(() => r(!1), [e]);
        const o = ot[e] ?? me.snakeCase(e),
            c = n ? "editor/icons/device.png" : `devices/${o}/editing_preview.png`;
        return t.jsx("img", {
            src: L(c),
            alt: "",
            draggable: !1,
            style: {
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "contain"
            },
            onError: () => r(!0)
        })
    },
    {
        useToken: it
    } = F,
    at = e => {
        const {
            option: {
                id: n,
                name: r,
                description: o,
                seasonTicketRequired: c
            }
        } = e, i = m.useRef(null), {
            token: {
                borderRadius: a
            }
        } = it(), u = c && !J(), s = l => {
            u || (I.me.adding.devices.selectedDeviceType = n, I.me.adding.mode = z.device, I.me.currentAction = W.adding, j() && Q(y.home), q({
                event: G.SELECT_DEVICE_TO_ADD,
                deviceTypeId: n
            }), l && l())
        };
        return C(O.Input.Keyboard.KeyCodes.ENTER, () => {
            e.focused && s()
        }, [e.focused, s]), m.useEffect(() => {
            var l;
            e.focused && ((l = i.current) == null || l.scrollIntoView({
                block: "center"
            }))
        }, [e.focused]), t.jsxs(ct, {
            ref: i,
            borderRadius: a,
            focused: e.focused,
            onClick: () => {
                s(() => {
                    _()
                })
            },
            children: [t.jsx(lt, {
                children: t.jsx(st, {
                    deviceId: n
                })
            }), t.jsxs(dt, {
                children: [c ? t.jsx("div", {
                    style: {
                        marginBottom: 2
                    },
                    children: t.jsx(ee, {})
                }) : null, t.jsx(ut, {
                    level: 5,
                    className: "allCaps",
                    style: {
                        fontFamily: T.FugazOne,
                        marginBottom: 0
                    },
                    children: r
                }), o ? t.jsx(mt, {
                    children: o
                }) : null]
            })]
        })
    },
    ct = f.div.attrs({
        className: "flex vc"
    })`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${e=>e.borderRadius}px;
  border: 2px solid
    ${e=>e.focused?"#ffca28":"rgba(255, 255, 255, 0.1)"};
  padding: 25px;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`,
    lt = f(Z)`
  height: 50px;
  width: 50px;
  margin-right: 20px;
  flex-shrink: 0;
`,
    dt = f.div``,
    ut = f(h.Title)``,
    mt = f(h.Text)``,
    pt = () => t.jsx(h.Text, {
        italic: !0,
        children: "No results found. Try a different search."
    }),
    ft = e => {
        const {
            deviceTypeId: n
        } = e, r = ve(n);
        return r ? r.supportedMapStyles ? r.supportedMapStyles.includes(ke()) : !0 : !1
    },
    gt = [...rt, d.prop, d.mapOptions],
    ce = oe(e => {
        const [n, r] = m.useState(-1), {
            worldOptions: {
                deviceOptions: o
            }
        } = D(), [c] = Y(e.searchQuery, 150), i = m.useMemo(() => {
            const a = c == null ? void 0 : c.toLowerCase(),
                u = o.filter(s => !gt.includes(s.id)).filter(s => be(s.id, void 0)).filter(s => ft({
                    deviceTypeId: s.id
                })).filter(s => e.list ? e.list.includes(s.id) : !0).filter(s => {
                    var l, p;
                    return a ? s.name.toLowerCase().includes(a) || ((p = (l = s.description) == null ? void 0 : l.toLowerCase()) == null ? void 0 : p.includes(a)) : !0
                }).sort((s, l) => {
                    const p = s.name.toLowerCase().includes(a),
                        g = l.name.toLowerCase().includes(a);
                    return p && !g ? -1 : !p && g ? 1 : s.name.length < l.name.length ? -1 : s.name.length > l.name.length ? 1 : 0
                });
            if (j()) return u.sort((s, l) => {
                const p = w.topDevices.indexOf(s.id),
                    g = w.topDevices.indexOf(l.id);
                return p === -1 && g === -1 ? 0 : p === -1 ? 1 : g === -1 ? -1 : p - g
            });
            if (e.list) {
                const s = [];
                return e.list.forEach(l => {
                    const p = u.find(g => g.id === l);
                    p && s.push(p)
                }), s
            }
            return u
        }, [o.length, c, e.list]);
        return C(O.Input.Keyboard.KeyCodes.UP, () => {
            e.blockKeyboardNavigation || r(Math.max(0, n - 1))
        }, [n, e.blockKeyboardNavigation]), C(O.Input.Keyboard.KeyCodes.DOWN, () => {
            if (e.blockKeyboardNavigation) return;
            const a = i.length - 1;
            r(Math.min(a, n + 1))
        }, [i.length, n, e.blockKeyboardNavigation]), m.useEffect(() => {
            !c || e.blockKeyboardNavigation ? r(-1) : r(0)
        }, [c, e.blockKeyboardNavigation]), i.length ? t.jsx(ae, {
            direction: "vertical",
            size: 12,
            className: "maxWidth",
            children: i.map((a, u) => t.jsx(at, {
                option: a,
                focused: u === n
            }, a.id + "-option"))
        }) : t.jsx(pt, {})
    }),
    {
        useToken: ht
    } = F,
    xt = e => {
        const {
            token: {
                borderRadius: n
            }
        } = ht(), {
            collection: {
                icon: r,
                name: o,
                description: c,
                devices: i
            }
        } = e;
        return t.jsxs(t.Fragment, {
            children: [t.jsxs(vt, {
                borderRadius: n,
                onClick: e.open,
                children: [t.jsx(bt, {
                    src: r
                }), t.jsx(h.Title, {
                    level: 4,
                    style: {
                        fontFamily: T.FugazOne,
                        marginBottom: 2
                    },
                    className: "allCaps",
                    children: o
                }), t.jsx(h.Text, {
                    children: t.jsx(Ie, {
                        children: c
                    })
                })]
            }), t.jsx(P, {
                open: e.isOpen,
                onClose: e.close,
                title: o,
                width: 500,
                children: t.jsx(ce, {
                    list: i
                })
            })]
        })
    },
    vt = f(N)`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  border-radius: ${e=>e.borderRadius}px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  text-align: center;
  transition: background 0.2s ease-in-out;
  overflow: hidden;
  min-height: 196px;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`,
    bt = f.img`
  height: 50px;
  margin-bottom: 15px;
  opacity: 0.85;
`,
    k = `${S(v.device.plural)}`,
    K = e => L(`editor/icons/device_collections/${e}.svg`),
    yt = [{
        icon: K("starting"),
        name: `Starting ${k}`,
        description: `${k} you might need for every map`,
        devices: [d.characterSpawnPad, d.trigger, d.gimkitLiveQuestion, d.itemGranter, d.itemSpawner, d.sentry, d.startingInventory, d.wireRepeater, d.teleporter]
    }, {
        icon: K("inventory"),
        name: `Inventory ${k}`,
        description: `${k} to manage what items & resources players have`,
        devices: [d.vendingMachine, d.itemGranter, d.startingInventory, d.itemSpawner, d.inventoryItemManager]
    }, {
        icon: K("interaction"),
        name: `Interaction ${k}`,
        description: `${k} to create rich interactions`,
        devices: [d.button, d.vendingMachine, d.zone, d.textExplainer, d.dialogue, d.textBillboard]
    }, {
        icon: K("new"),
        name: `New ${k}`,
        description: `${k} recently added to ${pe} Creative`,
        devices: [d.jumpGranter, d.luckyBlock, d.scalableShape, d.popupListItem, d.character, d.dialogue, d.dialogueAction, d.damager, d.cameraPoint, d.playerPositionDetector, d.itemImage, d.ball, d.ballZone]
    }],
    Ct = e => t.jsx(Tt, {
        children: yt.map(n => t.jsx(xt, {
            collection: n,
            isOpen: n.name === e.openCollectionName,
            open: () => e.open(n.name),
            close: () => e.open("")
        }, `device-collection-${n.name}`))
    }),
    Tt = f.div.attrs({
        className: "maxWidth"
    })`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 12px;
  overflow: hidden;
`,
    jt = e => {
        const [n, r] = m.useState(""), [o, c] = m.useState(null), i = m.useRef(null), a = l => {
            r(l.target.value)
        }, u = m.useCallback(() => {
            o || e.close()
        }, [o, e.close]), s = l => {
            var p;
            l ? (p = i == null ? void 0 : i.current) == null || p.focus() : r("")
        };
        return t.jsxs(P, {
            open: e.open,
            onClose: u,
            width: 680,
            afterOpenChange: s,
            destroyOnClose: !0,
            children: [t.jsxs(N, {
                children: [t.jsx(h.Title, {
                    level: 1,
                    style: {
                        fontFamily: T.FugazOne,
                        marginBottom: 12,
                        marginTop: 5
                    },
                    className: "allCaps",
                    children: S(v.device.plural)
                }), t.jsx(X.Search, {
                    size: "large",
                    placeholder: `Search for ${v.device.plural}...`,
                    style: {
                        marginBottom: 23
                    },
                    value: n,
                    onChange: a,
                    ref: i
                }), !n && !j() ? t.jsxs(t.Fragment, {
                    children: [t.jsx(Ct, {
                        openCollectionName: o,
                        open: c
                    }), t.jsx(re, {
                        children: t.jsxs(h.Text, {
                            italic: !0,
                            children: ["All ", S(v.device.plural)]
                        })
                    })]
                }) : null]
            }), t.jsx(ce, {
                searchQuery: n,
                blockKeyboardNavigation: !!o
            })]
        })
    },
    Gn = se(e => {
        const {
            gui: {
                none: {
                    addMenu: {
                        screen: n
                    }
                }
            },
            me: {
                adding: r
            }
        } = D(), [o, c, i] = fe(!0), [a, u] = m.useState(!0);
        ye();
        const s = m.useMemo(() => n === y.terrain, [n]),
            l = m.useMemo(() => n === y.props, [n]),
            p = m.useMemo(() => n === y.devices, [n]),
            g = () => {
                e.setToHomeScreen(), b(y.home)
            },
            x = Ce();
        m.useEffect(() => {
            x || i()
        }, [x]);
        const $ = m.useCallback(() => {
                if (a) {
                    g();
                    return
                }
                s || l || p || i()
            }, [i, s, l, p, a, g]),
            b = A => Q(A),
            E = A => {
                A && u(!1), A || g()
            },
            U = () => {
                b(y.home)
            };
        return t.jsx(P, {
            open: o,
            onClose: $,
            afterOpenChange: E,
            width: 600,
            destroyOnClose: !0,
            children: t.jsx(kt, {
                children: t.jsxs($e, {
                    close: e.setToHomeScreen,
                    setToTerrain: () => b(y.terrain),
                    setToProps: () => {
                        b(y.props)
                    },
                    setToDevices: () => b(y.devices),
                    setToWires: () => {
                        r.mode = z.wire, H(W.adding), q({
                            event: G.START_ADDING_WIRE
                        })
                    },
                    children: [t.jsx(We, {
                        open: s,
                        close: U
                    }), t.jsx(nt, {
                        open: l,
                        close: U
                    }), t.jsx(jt, {
                        open: p,
                        close: U
                    })]
                })
            })
        })
    }),
    kt = f.div.attrs({
        className: "maxWidth"
    })``;
export {
    Gn as
    default
};