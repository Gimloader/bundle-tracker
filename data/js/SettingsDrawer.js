import {
    r as g,
    j as e,
    d as h,
    cm as H,
    E as N,
    D as u,
    B as P,
    M as E,
    U as A,
    F as Q
} from "./_index.js";
import {
    C as M
} from "./Shortcut.js";
import {
    C as L
} from "./Button.js";
import {
    a as z,
    N as D
} from "./FixSpinePlugin.js";
import {
    aG as T,
    aH as W,
    aI as $,
    aJ as q,
    n as G
} from "./App-41.js";
import {
    s as C,
    g as F,
    b as d,
    h as B,
    r as I
} from "./MapSound.js";
import {
    c as i,
    d as o,
    S as l,
    a,
    b as n
} from "./SettingCard.js";
import {
    S as c
} from "./index-9.js";
import {
    u as m,
    O as U
} from "./Options.js";
import {
    S as _
} from "./index-8.js";
import {
    D as J
} from "./index-6.js";
import {
    T as j
} from "./index-14.js";
import {
    S as b
} from "./index-2.js";
import "./Names.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./GetAssetPath.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./TutorialConsts.js";
import "./ActionButton.js";
import "./index-5.js";
import "./index-18.js";
import "./context.js";
import "./FontAwesomeIcon.js";
import "./Centered.js";
import "./CapitalizeFirstLetter.js";
import "./index-4.js";
import "./motion.js";
import "./SixteenByNineScaler.js";
import "./index-20.js";
import "./index-22.js";
import "./index-1.js";
import "./progress.js";
import "./CheckOutlined.js";
import "./ElementIds.js";
import "./SeasonTicketName.js";
import "./useQuery.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./util-1.js";
import "./util-2.js";
import "./useWillUnmount.js";
import "./index-3.js";
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
import "./howler.js";
import "./use-motion-value.js";
import "./index-23.js";
import "./useIntervalWhen.js";
import "./index-10.js";
import "./move.js";
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./useDebouncedValue.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
import "./index-28.js";
import "./DownOutlined.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./CopyOutlined.js";
const V = () => {
        const t = g.useSyncExternalStore(C, () => F("muted"));
        return e.jsx(i, {
            children: e.jsxs(o, {
                children: [e.jsx(l, {
                    children: e.jsx(a, {
                        children: "Mute"
                    })
                }), e.jsx(c, {
                    checked: t,
                    onChange: r => d("muted", r),
                    "aria-label": "Mute All Sounds"
                })]
            })
        })
    },
    Y = t => Math.round(t * 100),
    v = [{
        value: 25,
        label: "Minimum"
    }, {
        value: 50,
        label: "Low"
    }, {
        value: 75,
        label: "Medium"
    }, {
        value: 100,
        label: "Standard"
    }, {
        value: 125,
        label: "High"
    }, {
        value: 150,
        label: "Very High"
    }, {
        value: 175,
        label: "Ultra"
    }, {
        value: 200,
        label: "Maximum"
    }],
    K = t => v.reduce((r, s) => Math.abs(s.value - t) < Math.abs(r - t) ? s.value : r, v[0].value),
    X = () => {
        const t = m("renderingQuality"),
            r = t === null,
            s = K(Y(t ?? z().resizeManager.usedDpi)),
            p = x => T(x / 100),
            y = x => {
                x ? W() : T(s / 100)
            };
        return e.jsxs(Z, {
            children: [e.jsx(i, {
                children: e.jsxs(o, {
                    children: [e.jsxs(l, {
                        children: [e.jsx(a, {
                            children: "Automatic Quality"
                        }), e.jsx(n, {
                            children: "Automatically adjust graphics quality based on your device's performance"
                        })]
                    }), e.jsx(c, {
                        checked: r,
                        onChange: y,
                        "aria-label": "Auto Graphics"
                    })]
                })
            }), r ? null : e.jsxs(i, {
                children: [e.jsx(a, {
                    children: "Graphics Quality"
                }), e.jsx(n, {
                    children: "Manually adjust the graphics quality"
                }), e.jsx(_, {
                    className: "maxWidth",
                    style: {
                        marginTop: 14
                    },
                    value: s,
                    onChange: p,
                    options: v
                })]
            })]
        })
    },
    Z = h.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,
    ee = () => {
        const t = m("readToMe"),
            r = s => d("readToMe", s);
        return e.jsx(i, {
            children: e.jsxs(o, {
                children: [e.jsxs(l, {
                    children: [e.jsx(a, {
                        children: "Read Aloud"
                    }), e.jsx(n, {
                        children: "Hear questions and answers read aloud"
                    })]
                }), e.jsx(c, {
                    checked: t,
                    onChange: r,
                    "aria-label": "Read Aloud"
                })]
            })
        })
    },
    te = () => {
        const t = m("largeFontMode"),
            r = s => d("largeFontMode", s);
        return e.jsx(i, {
            children: e.jsxs(o, {
                children: [e.jsxs(l, {
                    children: [e.jsx(a, {
                        children: "Large Text"
                    }), e.jsx(n, {
                        children: "Make question & answer text larger"
                    })]
                }), e.jsx(c, {
                    checked: t,
                    onChange: r,
                    "aria-label": "Large Text"
                })]
            })
        })
    },
    re = () => {
        const t = m("highContrast"),
            r = s => d("highContrast", s);
        return e.jsx(i, {
            children: e.jsxs(o, {
                children: [e.jsxs(l, {
                    children: [e.jsx(a, {
                        children: "High Contrast"
                    }), e.jsx(n, {
                        children: "Make question and answer text stand out more"
                    })]
                }), e.jsx(c, {
                    checked: t,
                    onChange: r,
                    "aria-label": "Clearer Question Colors"
                })]
            })
        })
    },
    se = () => {
        const t = m("lexend");
        g.useEffect(() => {
            t && $()
        }, [t]);
        const r = s => d("lexend", s);
        return e.jsx(i, {
            children: e.jsxs(o, {
                children: [e.jsxs(l, {
                    children: [e.jsx(a, {
                        children: "Easy-to-Read Font"
                    }), e.jsx(n, {
                        children: "Use a more readable font for clearer question & answer text"
                    })]
                }), e.jsx(c, {
                    checked: t,
                    onChange: r,
                    "aria-label": "Easy-to-Read Font"
                })]
            })
        })
    },
    ie = () => {
        const t = m("teamSymbol"),
            r = s => d("teamSymbol", s);
        return e.jsx(i, {
            children: e.jsxs(o, {
                children: [e.jsxs(l, {
                    children: [e.jsx(a, {
                        children: "Team Symbols"
                    }), e.jsx(n, {
                        children: "Add symbols by player names to help tell teams apart"
                    })]
                }), e.jsx(c, {
                    checked: t,
                    onChange: r,
                    "aria-label": "Team Symbols"
                })]
            })
        })
    },
    ae = () => {
        const t = m("simpleCharacters"),
            r = s => d("simpleCharacters", s);
        return e.jsx(i, {
            children: e.jsxs(o, {
                children: [e.jsxs(l, {
                    children: [e.jsx(a, {
                        children: "Simple Gim Mode"
                    }), e.jsx(n, {
                        children: "Use a simpler rendering mode of other Gims to improve performance"
                    })]
                }), e.jsx(c, {
                    checked: t,
                    onChange: r,
                    "aria-label": "Simpler Characters"
                })]
            })
        })
    },
    ne = () => {
        const t = !m("otherPlayerTrails"),
            r = s => d("otherPlayerTrails", !s);
        return e.jsx(i, {
            children: e.jsxs(o, {
                children: [e.jsxs(l, {
                    children: [e.jsx(a, {
                        children: "Hide Other Player Trails"
                    }), e.jsx(n, {
                        children: "Hide trails behind other players"
                    })]
                }), e.jsx(c, {
                    checked: t,
                    onChange: r,
                    "aria-label": "Hide Other Player Trails"
                })]
            })
        })
    },
    oe = "#00c853",
    Ft = t => {
        const r = g.useSyncExternalStore(C, B),
            s = g.useSyncExternalStore(C, () => F("muted")),
            {
                token: {
                    borderRadius: p
                }
            } = H.useToken(),
            y = () => {
                t.close(), q()
            },
            x = () => {
                t.close(), G(D.playerManager)
            },
            O = t.showRewards || t.showPlayers;
        return e.jsx(N, {
            theme: {
                components: {
                    Switch: {
                        colorPrimary: oe,
                        colorPrimaryHover: "#00e676"
                    }
                }
            },
            children: e.jsxs(J, {
                title: "Settings",
                placement: "right",
                open: t.open,
                onClose: t.close,
                width: 450,
                destroyOnHidden: !1,
                children: [O ? e.jsxs(e.Fragment, {
                    children: [e.jsxs(le, {
                        children: [t.showRewards ? e.jsxs(w, {
                            type: "button",
                            onClick: y,
                            $borderRadius: p,
                            children: [e.jsx(k, {
                                children: e.jsx("img", {
                                    src: M.iconImage,
                                    alt: ""
                                })
                            }), e.jsx(R, {
                                children: e.jsx(j.Title, {
                                    level: 4,
                                    children: M.name
                                })
                            })]
                        }) : null, t.showPlayers ? e.jsxs(w, {
                            type: "button",
                            onClick: x,
                            $borderRadius: p,
                            children: [e.jsx(k, {
                                children: e.jsx("i", {
                                    className: "far fa-users",
                                    "aria-hidden": "true"
                                })
                            }), e.jsxs(R, {
                                children: [e.jsx(j.Title, {
                                    level: 4,
                                    children: "Players"
                                }), e.jsx(j.Text, {
                                    children: "Manage the players in-game"
                                })]
                            })]
                        }) : null]
                    }), e.jsx(u, {})]
                }) : null, e.jsxs(f, {
                    children: [e.jsx(S, {
                        level: 4,
                        children: "Sound"
                    }), e.jsxs(b, {
                        direction: "vertical",
                        size: 14,
                        className: "maxWidth",
                        children: [e.jsx(V, {}), s ? null : e.jsx(U, {
                            cardLayout: !0
                        })]
                    })]
                }), e.jsx(u, {}), e.jsxs(f, {
                    children: [e.jsx(S, {
                        level: 4,
                        children: "Graphics"
                    }), e.jsxs(b, {
                        direction: "vertical",
                        size: 14,
                        className: "maxWidth",
                        children: [e.jsx(X, {}), e.jsx(ne, {}), e.jsx(ae, {})]
                    })]
                }), e.jsx(u, {}), e.jsxs(f, {
                    children: [e.jsx(S, {
                        level: 4,
                        children: "Accessibility"
                    }), e.jsxs(b, {
                        direction: "vertical",
                        size: 14,
                        className: "maxWidth",
                        children: [e.jsx(ee, {}), e.jsx(ie, {}), e.jsx(te, {}), e.jsx(re, {}), e.jsx(se, {})]
                    })]
                }), r ? e.jsxs(e.Fragment, {
                    children: [e.jsx(u, {}), e.jsx(P, {
                        type: "link",
                        size: "small",
                        style: {
                            color: "#FADB14"
                        },
                        onClick: () => {
                            E.confirm({
                                title: "Reset all settings?",
                                content: "Reset all settings to their default values.",
                                okText: "Reset settings",
                                cancelText: "Cancel",
                                onOk: I
                            })
                        },
                        children: "Reset settings to default"
                    })]
                }) : null]
            })
        })
    },
    le = h.div.attrs({
        className: "maxWidth"
    })`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 10px;
`,
    w = h.button.attrs({
        className: "flex vc maxWidth"
    })`
  gap: 24px;
  padding: 20px 24px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-radius: ${t=>t.$borderRadius}px;
  background: rgba(255, 255, 255, 0.1);
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition: background 0.2s ease-in-out, border-color 0.2s ease-in-out,
    transform 0.1s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.3);
  }

  &:focus-visible {
    outline: none;
    border-color: ${L.Yellow};
  }

  &:active {
    transform: scale(0.99);
  }
`,
    k = h.div.attrs({
        className: "flex-center"
    })`
  width: 40px;
  height: 40px;
  flex: 0 0 40px;

  img,
  i {
    max-width: 40px;
    font-size: 34px;
    text-align: center;
  }

  img {
    max-height: 40px;
    object-fit: contain;
  }
`,
    R = h.div`
  min-width: 0;

  .ant-typography {
    margin: 0;
  }

  h4.ant-typography {
    margin-bottom: -1px;
    font-family: ${A.FugazOne};
    font-weight: ${Q.Bold};
    font-size: 18px;
    text-transform: uppercase;
  }
`,
    f = h.section``,
    S = h(j.Title)`
  && {
    margin: 0 0 14px;
    font-family: ${A.FugazOne};
    text-transform: uppercase;
  }
`;
export {
    Ft as
    default
};