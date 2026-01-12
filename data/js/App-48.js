import {
    cm as E,
    j as t,
    U as C,
    d as f,
    B as V,
    r as p,
    D as re,
    bI as le,
    aw as de,
    s as ue,
    C as me,
    u as pe
} from "./_index.js";
import {
    y as B,
    M as x,
    u as D,
    o as b,
    s as H,
    z as fe,
    S as ge,
    J as he,
    F as xe,
    B as ve,
    a3 as ye,
    m as be
} from "./App-41.js";
import {
    a as N,
    C as J,
    b as Ce
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
    c as ie,
    P as O,
    s as I,
    A as z,
    M as W,
    K as y
} from "./FixSpinePlugin.js";
import {
    I as j,
    E as _,
    T as q
} from "./ActionButton.js";
import {
    s as Q
} from "./setAddMenuScreen.js";
import {
    O as Y
} from "./OwnsSeasonTicket.js";
import {
    S as Te
} from "./SeasonTicketName.js";
import {
    C as te,
    G as je
} from "./GetCurrentMapStyle.js";
import {
    T as w,
    D as d
} from "./TutorialConsts.js";
import {
    u as Z
} from "./useDebouncedValue.js";
import {
    S as ae
} from "./index-2.js";
import {
    D as F
} from "./index-6.js";
import {
    I as X
} from "./index-3.js";
import {
    B as ke
} from "./index-24.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./MapModeType.js";
import "./playSound.js";
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
import "./use-motion-value.js";
import "./use-transform.js";
import "./AccessibleAnchor.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
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
    useToken: Ie
} = E, R = e => {
    const {
        token: {
            borderRadius: n
        }
    } = Ie(), {
        name: o,
        description: s,
        icon: l
    } = e, i = () => {
        B(), e.onClick()
    };
    return t.jsx(Oe, {
        onClick: i,
        borderRadius: n,
        children: t.jsxs(N, {
            className: "maxAll",
            children: [t.jsx(Se, {
                children: t.jsx(we, {
                    src: l
                })
            }), t.jsx(h.Title, {
                level: 3,
                style: {
                    marginBottom: -1,
                    fontFamily: C.FugazOne,
                    textTransform: "uppercase"
                },
                children: S(o)
            }), t.jsx(h.Text, {
                children: s
            })]
        })
    })
}, Oe = f.div.attrs({
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
`, Se = f.div`
  margin-bottom: 5px;
`, we = f.img`
  height: 70px;
`, A = e => L(`editor/icons/${e}.png`), Ne = e => t.jsxs($e, {
    children: [t.jsx(h.Title, {
        level: 1,
        style: {
            fontFamily: C.FugazOne,
            marginBottom: 25,
            marginTop: 5
        },
        className: "allCaps",
        children: "Add"
    }), t.jsxs(Ee, {
        children: [t.jsx(R, {
            name: x.terrain.singular,
            description: "The floors and walls on the map",
            icon: A("terrain"),
            onClick: e.setToTerrain
        }), t.jsx(R, {
            name: x.prop.plural,
            description: "Objects and decorations",
            icon: A("prop"),
            onClick: e.setToProps
        }), t.jsx(R, {
            name: x.device.plural,
            description: "Create game mechanics!",
            icon: A("device"),
            onClick: e.setToDevices
        }), t.jsx(R, {
            name: x.wire.plural,
            description: "Connect devices together",
            icon: A("wire"),
            onClick: e.setToWires
        })]
    }), e.children]
}), $e = f.div.attrs({
    className: "flex-column flex-center maxWidth"
})``, Ee = f.div.attrs({
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
    } = D(), n = e.buildTerrainAsWall, o = s => {
        ie() || (e.buildTerrainAsWall = s)
    };
    return t.jsxs(J, {
        children: [t.jsxs(h.Text, {
            style: {
                marginRight: 10
            },
            children: ["Place down ", x.terrain.singular, " as a"]
        }), t.jsxs(V.Group, {
            children: [t.jsx(V, {
                type: n ? "default" : "primary",
                onClick: () => o(!1),
                children: "Floor"
            }), t.jsx(V, {
                type: n ? "primary" : "default",
                onClick: () => o(!0),
                children: "Wall"
            })]
        })]
    })
}), ee = () => t.jsxs(Fe, {
    children: [Te.name, " Exclusive"]
}), Fe = f.div`
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
  font-family: ${C.FugazOne};
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1;
`, {
    useToken: Pe
} = E, Re = e => {
    const {
        id: n,
        name: o,
        previewUrl: s,
        seasonTicketRequired: l
    } = e.option, i = p.useRef(null), {
        token: {
            borderRadius: a
        }
    } = Pe(), u = l && !Y(), r = c => {
        u || (I.me.adding.terrain.currentlySelectedTerrain = n, I.me.adding.mode = z.terrain, H(W.adding), j() && Q(y.home), _({
            event: q.SELECT_TERRAIN_TO_ADD,
            terrainId: n
        }), c && c())
    };
    return b(O.Input.Keyboard.KeyCodes.ENTER, () => {
        e.focused && r()
    }, [e.focused, r]), p.useEffect(() => {
        var c;
        e.focused && ((c = i.current) == null || c.scrollIntoView({
            behavior: "smooth",
            block: "center"
        }))
    }, [e.focused]), t.jsxs(Ae, {
        borderRadius: a,
        focused: e.focused,
        onClick: () => {
            r(() => {
                B()
            })
        },
        ref: i,
        children: [t.jsx(Ke, {
            src: s
        }), t.jsxs(Me, {
            children: [t.jsx(Be, {
                level: 5,
                className: "allCaps",
                style: {
                    fontFamily: C.FugazOne
                },
                children: o
            }), l ? t.jsx("div", {
                style: {
                    marginTop: 2
                },
                children: t.jsx(ee, {})
            }) : null]
        })]
    })
}, Ae = f(Ce)`
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
const Me = f.div`
  display: flex;
  flex-direction: column;
`,
    Ke = f.img`
  height: 54px;
  border-radius: 3px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  margin-right: 15px;
`,
    Be = f(h.Title)`
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
        } = D(), [o, s] = p.useState(-1), [l] = Z(e.searchQuery, 150), i = p.useMemo(() => {
            var r;
            const a = (r = l == null ? void 0 : l.trim()) == null ? void 0 : r.toLowerCase();
            if (!a && !j()) return n.filter(c => te(c.id));
            const u = n.filter(c => c.name.toLowerCase().includes(a) && te(c.id));
            return j() ? u.sort((c, m) => {
                const g = w.topTerrain.indexOf(c.id),
                    v = w.topTerrain.indexOf(m.id);
                return g === -1 && v === -1 ? 0 : g === -1 ? 1 : v === -1 ? -1 : g - v
            }) : u
        }, [n.length, l]);
        return b(O.Input.Keyboard.KeyCodes.UP, () => {
            s(Math.max(0, o - 1))
        }, [o]), b(O.Input.Keyboard.KeyCodes.DOWN, () => {
            const a = i.length - 1;
            s(Math.min(a, o + 1))
        }, [i.length, o]), p.useEffect(() => {
            s(l ? 0 : -1)
        }, [l]), i.length ? t.jsx(ae, {
            direction: "vertical",
            size: 12,
            className: "maxWidth",
            children: i.map((a, u) => t.jsx(Re, {
                option: a,
                focused: o === u
            }, a.id))
        }) : t.jsx(Le, {})
    },
    We = e => {
        const [n, o] = p.useState(""), s = p.useRef(null), l = u => {
            o(u.target.value)
        }, i = u => {
            var r;
            u ? (r = s == null ? void 0 : s.current) == null || r.focus() : o("")
        }, a = ie();
        return t.jsx(F, {
            open: e.open,
            onClose: e.close,
            width: 500,
            afterOpenChange: i,
            destroyOnClose: !0,
            children: t.jsxs(N, {
                children: [t.jsx(h.Title, {
                    level: 1,
                    style: {
                        fontFamily: C.FugazOne,
                        marginBottom: 12,
                        marginTop: 5
                    },
                    className: "allCaps",
                    children: S(x.terrain.singular)
                }), a ? null : t.jsxs(t.Fragment, {
                    children: [t.jsx(De, {}), " ", t.jsx(re, {})]
                }), t.jsx(X.Search, {
                    size: "large",
                    placeholder: `Search for ${x.terrain.plural}...`,
                    style: {
                        marginBottom: 23
                    },
                    value: n,
                    onChange: l,
                    ref: s
                }), t.jsx(ze, {
                    searchQuery: n
                })]
            })
        })
    };
var M = {},
    ne;

function _e() {
    if (ne) return M;
    ne = 1, Object.defineProperty(M, "__esModule", {
        value: !0
    });
    const e = le();

    function n(o) {
        const [s, l] = (0, e.useState)(!1), i = (0, e.useMemo)(() => new IntersectionObserver(([a]) => l(a.isIntersecting)), []);
        return (0, e.useEffect)(() => (i.observe(o.current), () => {
            i.disconnect()
        }), []), (0, e.useEffect)(() => {
            s && i.unobserve(o.current)
        }, [s, i, o]), s
    }
    return M.default = n, M
}
var qe = _e();
const Qe = de(qe),
    {
        useToken: Ge
    } = E,
    Ue = e => {
        const {
            id: n,
            name: o,
            imageUrl: s,
            seasonTicketRequired: l
        } = e.option, i = p.useRef(null), a = Qe(i), {
            token: {
                borderRadius: u
            }
        } = Ge(), r = l && !Y(), c = m => {
            r || (I.me.adding.devices.selectedDeviceType = d.prop, I.me.adding.devices.currentlySelectedProp = n, I.me.adding.mode = z.device, H(W.adding), j() && Q(y.home), _({
                event: q.SELECT_PROP_TO_ADD,
                propId: n
            }), m && m())
        };
        return b(O.Input.Keyboard.KeyCodes.ENTER, () => {
            e.focused && c()
        }, [e.focused, c]), p.useEffect(() => {
            var m;
            e.focused && ((m = i.current) == null || m.scrollIntoView({
                block: "center"
            }))
        }, [e.focused]), t.jsx(Ve, {
            ref: i,
            onClick: () => {
                c(() => {
                    B()
                })
            },
            focused: e.focused,
            borderRadius: u,
            children: a ? t.jsxs(t.Fragment, {
                children: [t.jsx(He, {
                    children: t.jsx(Je, {
                        src: L(s)
                    })
                }), t.jsx(Ye, {
                    level: 5,
                    className: "allCaps",
                    style: {
                        fontFamily: C.FugazOne
                    },
                    children: o
                }), l ? t.jsx(ee, {}) : null]
            }) : null
        })
    },
    Ve = f(N)`
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
    He = f(J)`
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
    Ze = () => t.jsx(h.Text, {
        italic: !0,
        children: "No results found. Try a different search."
    }),
    Xe = se(e => {
        const {
            worldOptions: n
        } = D(), [o, s] = p.useState(-1), [l] = Z(e.searchQuery, 200), i = p.useMemo(() => {
            var m, g;
            const u = n.propsOptions.filter(v => fe(v.minimumRoleLevel)),
                r = (g = (m = e.searchQuery) == null ? void 0 : m.trim()) == null ? void 0 : g.toLowerCase();
            if (!r && !j()) return u;
            const c = u.filter(v => v.name.toLowerCase().includes(r));
            return j() ? c.sort((v, G) => {
                const T = w.topProps.indexOf(v.id),
                    $ = w.topProps.indexOf(G.id);
                return T === -1 && $ === -1 ? 0 : T === -1 ? 1 : $ === -1 ? -1 : T - $
            }) : c
        }, [n.propsOptions.length, l]);
        ue(() => {
            n.requestedAllProps || (n.requestedAllProps = !0, ge(he.requestAllProps))
        });
        const a = p.useCallback(u => {
            const r = Math.max(0, Math.min(i.length - 1, o + u));
            s(r)
        }, [i.length, o]);
        return b(Phaser.Input.Keyboard.KeyCodes.UP, () => {
            a(-2)
        }, [a]), b(Phaser.Input.Keyboard.KeyCodes.DOWN, () => {
            a(2)
        }, [a]), b(Phaser.Input.Keyboard.KeyCodes.LEFT, () => {
            a(-1)
        }, [a]), b(Phaser.Input.Keyboard.KeyCodes.RIGHT, () => {
            a(1)
        }, [a]), p.useEffect(() => {
            s(l ? 0 : -1)
        }, [l]), n.hasAllProps ? i.length ? t.jsx(et, {
            children: i.map((u, r) => t.jsx(Ue, {
                focused: r === o,
                option: u
            }, u.id + "-option"))
        }) : t.jsx(Ze, {}) : null
    }),
    et = f.div.attrs({
        className: "maxWidth"
    })`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 10px;
  overflow: hidden;
`,
    tt = e => {
        const [n, o] = p.useState(""), s = p.useRef(null), l = a => {
            o(a.target.value)
        }, i = a => {
            var u;
            a ? (u = s == null ? void 0 : s.current) == null || u.focus() : o("")
        };
        return t.jsx(F, {
            open: e.open,
            onClose: e.close,
            width: 550,
            afterOpenChange: i,
            destroyOnClose: !0,
            children: t.jsxs(N, {
                children: [t.jsx(h.Title, {
                    level: 1,
                    style: {
                        fontFamily: C.FugazOne,
                        marginBottom: 12,
                        marginTop: 5
                    },
                    className: "allCaps",
                    children: S(x.prop.plural)
                }), t.jsx(X.Search, {
                    size: "large",
                    placeholder: `Search for ${x.prop.plural}...`,
                    style: {
                        marginBottom: 23
                    },
                    value: n,
                    onChange: l,
                    ref: s
                }), t.jsx(Xe, {
                    searchQuery: n
                })]
            })
        })
    },
    nt = [d.placedSticker, d.droppedItem],
    {
        useToken: rt
    } = E,
    ot = e => {
        const {
            option: {
                id: n,
                name: o,
                description: s,
                seasonTicketRequired: l
            }
        } = e, i = p.useRef(null), {
            token: {
                borderRadius: a
            }
        } = rt(), u = l && !Y(), r = c => {
            u || (I.me.adding.devices.selectedDeviceType = n, I.me.adding.mode = z.device, I.me.currentAction = W.adding, j() && Q(y.home), _({
                event: q.SELECT_DEVICE_TO_ADD,
                deviceTypeId: n
            }), c && c())
        };
        return b(O.Input.Keyboard.KeyCodes.ENTER, () => {
            e.focused && r()
        }, [e.focused, r]), p.useEffect(() => {
            var c;
            e.focused && ((c = i.current) == null || c.scrollIntoView({
                block: "center"
            }))
        }, [e.focused]), t.jsxs(st, {
            ref: i,
            borderRadius: a,
            focused: e.focused,
            onClick: () => {
                r(() => {
                    B()
                })
            },
            children: [t.jsx(it, {
                children: t.jsx(at, {
                    src: L("editor/icons/device.png")
                })
            }), t.jsxs(ct, {
                children: [l ? t.jsx("div", {
                    style: {
                        marginBottom: 2
                    },
                    children: t.jsx(ee, {})
                }) : null, t.jsx(lt, {
                    level: 5,
                    className: "allCaps",
                    style: {
                        fontFamily: C.FugazOne,
                        marginBottom: 0
                    },
                    children: o
                }), s ? t.jsx(dt, {
                    children: s
                }) : null]
            })]
        })
    },
    st = f.div.attrs({
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
    it = f(J)`
  height: 50px;
  width: 50px;
  margin-right: 20px;
  flex-shrink: 0;
`,
    at = f.img`
  max-height: 100%;
  max-width: 100%;
`,
    ct = f.div``,
    lt = f(h.Title)``,
    dt = f(h.Text)``,
    ut = () => t.jsx(h.Text, {
        italic: !0,
        children: "No results found. Try a different search."
    }),
    mt = e => {
        const {
            deviceTypeId: n
        } = e, o = xe(n);
        return o ? o.supportedMapStyles ? o.supportedMapStyles.includes(je()) : !0 : !1
    },
    pt = [...nt, d.prop, d.mapOptions],
    ce = oe(e => {
        const [n, o] = p.useState(-1), {
            worldOptions: {
                deviceOptions: s
            }
        } = D(), [l] = Z(e.searchQuery, 150), i = p.useMemo(() => {
            const a = l == null ? void 0 : l.toLowerCase(),
                u = s.filter(r => !pt.includes(r.id)).filter(r => ve(r.id, void 0)).filter(r => mt({
                    deviceTypeId: r.id
                })).filter(r => e.list ? e.list.includes(r.id) : !0).filter(r => {
                    var c, m;
                    return a ? r.name.toLowerCase().includes(a) || ((m = (c = r.description) == null ? void 0 : c.toLowerCase()) == null ? void 0 : m.includes(a)) : !0
                }).sort((r, c) => {
                    const m = r.name.toLowerCase().includes(a),
                        g = c.name.toLowerCase().includes(a);
                    return m && !g ? -1 : !m && g ? 1 : r.name.length < c.name.length ? -1 : r.name.length > c.name.length ? 1 : 0
                });
            if (j()) return u.sort((r, c) => {
                const m = w.topDevices.indexOf(r.id),
                    g = w.topDevices.indexOf(c.id);
                return m === -1 && g === -1 ? 0 : m === -1 ? 1 : g === -1 ? -1 : m - g
            });
            if (e.list) {
                const r = [];
                return e.list.forEach(c => {
                    const m = u.find(g => g.id === c);
                    m && r.push(m)
                }), r
            }
            return u
        }, [s.length, l, e.list]);
        return b(O.Input.Keyboard.KeyCodes.UP, () => {
            e.blockKeyboardNavigation || o(Math.max(0, n - 1))
        }, [n, e.blockKeyboardNavigation]), b(O.Input.Keyboard.KeyCodes.DOWN, () => {
            if (e.blockKeyboardNavigation) return;
            const a = i.length - 1;
            o(Math.min(a, n + 1))
        }, [i.length, n, e.blockKeyboardNavigation]), p.useEffect(() => {
            !l || e.blockKeyboardNavigation ? o(-1) : o(0)
        }, [l, e.blockKeyboardNavigation]), i.length ? t.jsx(ae, {
            direction: "vertical",
            size: 12,
            className: "maxWidth",
            children: i.map((a, u) => t.jsx(ot, {
                option: a,
                focused: u === n
            }, a.id + "-option"))
        }) : t.jsx(ut, {})
    }),
    {
        useToken: ft
    } = E,
    gt = e => {
        const {
            token: {
                borderRadius: n
            }
        } = ft(), {
            collection: {
                icon: o,
                name: s,
                description: l,
                devices: i
            }
        } = e;
        return t.jsxs(t.Fragment, {
            children: [t.jsxs(ht, {
                borderRadius: n,
                onClick: e.open,
                children: [t.jsx(xt, {
                    src: o
                }), t.jsx(h.Title, {
                    level: 4,
                    style: {
                        fontFamily: C.FugazOne,
                        marginBottom: 2
                    },
                    className: "allCaps",
                    children: s
                }), t.jsx(h.Text, {
                    children: t.jsx(ke, {
                        children: l
                    })
                })]
            }), t.jsx(F, {
                open: e.isOpen,
                onClose: e.close,
                title: s,
                width: 500,
                children: t.jsx(ce, {
                    list: i
                })
            })]
        })
    },
    ht = f(N)`
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
    xt = f.img`
  height: 50px;
  margin-bottom: 15px;
  opacity: 0.85;
`,
    k = `${S(x.device.plural)}`,
    K = e => L(`editor/icons/device_collections/${e}.svg`),
    vt = [{
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
        description: `${k} recently added to ${me} Creative`,
        devices: [d.scalableShape, d.popupListItem, d.character, d.dialogue, d.dialogueAction, d.damager, d.cameraPoint, d.playerPositionDetector, d.itemImage, d.ball, d.ballZone, d.craftingTable, d.craftingRecipe, d.damageBoost]
    }],
    yt = e => t.jsx(bt, {
        children: vt.map(n => t.jsx(gt, {
            collection: n,
            isOpen: n.name === e.openCollectionName,
            open: () => e.open(n.name),
            close: () => e.open("")
        }, `device-collection-${n.name}`))
    }),
    bt = f.div.attrs({
        className: "maxWidth"
    })`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 12px;
  overflow: hidden;
`,
    Ct = e => {
        const [n, o] = p.useState(""), [s, l] = p.useState(null), i = p.useRef(null), a = c => {
            o(c.target.value)
        }, u = p.useCallback(() => {
            s || e.close()
        }, [s, e.close]), r = c => {
            var m;
            c ? (m = i == null ? void 0 : i.current) == null || m.focus() : o("")
        };
        return t.jsxs(F, {
            open: e.open,
            onClose: u,
            width: 680,
            afterOpenChange: r,
            destroyOnClose: !0,
            children: [t.jsxs(N, {
                children: [t.jsx(h.Title, {
                    level: 1,
                    style: {
                        fontFamily: C.FugazOne,
                        marginBottom: 12,
                        marginTop: 5
                    },
                    className: "allCaps",
                    children: S(x.device.plural)
                }), t.jsx(X.Search, {
                    size: "large",
                    placeholder: `Search for ${x.device.plural}...`,
                    style: {
                        marginBottom: 23
                    },
                    value: n,
                    onChange: a,
                    ref: i
                }), !n && !j() ? t.jsxs(t.Fragment, {
                    children: [t.jsx(yt, {
                        openCollectionName: s,
                        open: l
                    }), t.jsx(re, {
                        children: t.jsxs(h.Text, {
                            italic: !0,
                            children: ["All ", S(x.device.plural)]
                        })
                    })]
                }) : null]
            }), t.jsx(ce, {
                searchQuery: n,
                blockKeyboardNavigation: !!s
            })]
        })
    },
    _n = se(e => {
        const {
            gui: {
                none: {
                    addMenu: {
                        screen: n
                    }
                }
            },
            me: {
                adding: o
            }
        } = D(), [s, l, i] = pe(!0), [a, u] = p.useState(!0);
        ye();
        const r = p.useMemo(() => n === y.terrain, [n]),
            c = p.useMemo(() => n === y.props, [n]),
            m = p.useMemo(() => n === y.devices, [n]),
            g = () => {
                e.setToHomeScreen(), T(y.home)
            },
            v = be();
        p.useEffect(() => {
            v || i()
        }, [v]);
        const G = p.useCallback(() => {
                if (a) {
                    g();
                    return
                }
                r || c || m || i()
            }, [i, r, c, m, a, g]),
            T = P => Q(P),
            $ = P => {
                P && u(!1), P || g()
            },
            U = () => {
                T(y.home)
            };
        return t.jsx(F, {
            open: s,
            onClose: G,
            afterOpenChange: $,
            width: 600,
            destroyOnClose: !0,
            children: t.jsx(Tt, {
                children: t.jsxs(Ne, {
                    close: e.setToHomeScreen,
                    setToTerrain: () => T(y.terrain),
                    setToProps: () => {
                        T(y.props)
                    },
                    setToDevices: () => T(y.devices),
                    setToWires: () => {
                        o.mode = z.wire, H(W.adding), _({
                            event: q.START_ADDING_WIRE
                        })
                    },
                    children: [t.jsx(We, {
                        open: r,
                        close: U
                    }), t.jsx(tt, {
                        open: c,
                        close: U
                    }), t.jsx(Ct, {
                        open: m,
                        close: U
                    })]
                })
            })
        })
    }),
    Tt = f.div.attrs({
        className: "maxWidth"
    })``;
export {
    _n as
    default
};