const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/App-66.js", "assets/_index.js", "assets/index-BdOndhxL.css", "assets/Centered.js", "assets/Button.js", "assets/polished.esm.js", "assets/inheritsLoose.js", "assets/FontAwesomeIcon.js", "assets/AccessibleAnchor.js", "assets/SeasonTicketName.js", "assets/Image.js", "assets/GetAssetPath.js", "assets/Names.js", "assets/index-2.js", "assets/OwnsSeasonTicket.js", "assets/useQuery.js", "assets/ElementIds.js", "assets/ShopItem.js", "assets/App-67.js", "assets/playSound.js", "assets/howler.js", "assets/confetti.js", "assets/motion.js", "assets/TrackEvent.js", "assets/TrackPostHogEvent.js", "assets/SeasonTicketInlineUpsell.js", "assets/CircularProgress.js", "assets/capitalize.js", "assets/App-68.js", "assets/index-1.js", "assets/index-10.js", "assets/index-5.js", "assets/move.js", "assets/useDebouncedValue.js", "assets/App-69.js", "assets/Pack.js", "assets/useIntervalWhen.js", "assets/useWillUnmount.js", "assets/App-70.js", "assets/use-motion-value.js", "assets/use-transform.js", "assets/toInteger.js", "assets/toNumber.js", "assets/index-17.js", "assets/use-force-update.js"]))) => i.map(i => d[i]);
import {
    e as g,
    d as a,
    r as c,
    j as t,
    F as v,
    U as p,
    b5 as d,
    u as k,
    s as N,
    ah as _,
    E as T,
    cm as $,
    T as l,
    p as f
} from "./_index.js";
import {
    G as x
} from "./GetAssetPath.js";
import {
    f as h,
    u as X,
    c as i
} from "./ElementIds.js";
import {
    a as w,
    C as j
} from "./Centered.js";
import {
    C as n
} from "./Names.js";
import {
    a as y,
    S as W
} from "./SeasonTicketName.js";
import {
    S as z
} from "./SeasonTicketInlineUpsell.js";
import {
    S as b
} from "./index-2.js";
import {
    C as M
} from "./CircularProgress.js";
const P = a.div`
  padding: 30px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.09);
  border: 4px solid ${g.White};
`,
    A = e => {
        if (e.type === h.character) {
            const r = e.id.replace("character_", "");
            return x(`characters/spine/preview/${r}.png`)
        }
        if (e.type === h.trail) {
            const r = e.id.replace(/^trail_/, "");
            return x(`trails/${r}/preview.png`)
        }
        if (e.type === h.sticker) {
            const r = e.id.replace(/^sticker_/, "");
            return x(`stickers/${r}.png`)
        }
        return "/"
    },
    u = 150,
    E = e => {
        const r = c.useMemo(() => e.selectedCharacter ? A({
            type: h.character,
            id: e.selectedCharacter
        }) : x("characters/spine/preview/default_yellow.png"), [e.selectedCharacter]);
        return t.jsx(I, {
            children: t.jsx(O, {
                src: r
            })
        })
    },
    I = a.div.attrs({
        className: "flex-center"
    })`
  height: ${u}px;
  width: ${u}px;
  border-radius: 50%;
  margin-top: ${(u/2+30)*-1}px;
  background-image: linear-gradient(
    -225deg,
    #3d4e81 0%,
    #5753c9 48%,
    #6e7ff3 100%
  );
  border: 4px solid ${g.White};
`,
    O = a.img`
  max-height: 85%;
  max-width: 85%;
  margin-left: 2px;
  transform: rotate(354deg);
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.5));
  transform: rotate(354deg);
  user-drag: none;
`,
    B = e => t.jsxs(w, {
        style: {
            marginTop: 20,
            textAlign: "center"
        },
        children: [t.jsxs(D, {
            children: [y.seasonName, " ", y.seasonNumber]
        }), t.jsxs(F, {
            children: [n.level, " ", e.currentLevel]
        })]
    }),
    D = a.div`
  font-size: 18px;
  font-style: italic;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  font-weight: ${v.Bold};
`,
    F = a.div`
  font-family: ${p.FugazOne};
  text-transform: uppercase;
  font-size: 52px;
  margin-top: -6px;
  text-shadow: 1px 1px 21px rgba(0, 0, 0, 0.4);
`,
    R = () => t.jsxs("div", {
        style: {
            fontSize: 16,
            marginTop: 20,
            color: "rgba(255,255,255,0.9)"
        },
        children: [t.jsxs(C, {
            children: ["Earn ", n.xp, " to level up."]
        }), " Each time you level up, you'll earn ", t.jsxs(C, {
            children: ["100 ", n.currency]
        }), " which you can use to purchase items in the Shop.", t.jsx("br", {}), " ", t.jsx("br", {}), "You can earn ", n.xp, " by playing 2D modes. ", n.xp, " is granted every minute you play and answer questions correctly!"]
    }),
    C = a.span`
  font-weight: ${v.Bold};
`,
    L = e => t.jsxs(G, {
        style: {
            height: e.height
        },
        children: [t.jsx(U, {
            children: e.children
        }), t.jsx(V, {
            style: {
                width: `${Math.max(e.percentageComplete,2)}%`
            }
        })]
    }),
    G = a.div.attrs({
        className: "maxWidth"
    })`
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
  position: relative;
`,
    U = a.div.attrs({
        className: "maxAll"
    })`
  position: absolute;
  top: 0;
  left: 0;
`,
    V = a.div.attrs({
        className: "maxHeight"
    })`
  width: 50%;
  background: #00c853;
`,
    q = e => {
        const r = Math.min(e.xpNeededPerLevel - 1, e.unredeemedXP),
            o = Math.max(1, e.xpNeededPerLevel - r),
            s = r / e.xpNeededPerLevel * 100;
        return t.jsxs(H, {
            children: [t.jsxs(Y, {
                children: [t.jsxs("div", {
                    children: [d(r), "/", d(e.xpNeededPerLevel), "XP"]
                }), t.jsxs("div", {
                    children: [d(o), " ", n.xp, " to", " ", n.level, " ", e.currentLevel + 1]
                })]
            }), t.jsx(L, {
                height: 60,
                percentageComplete: s
            })]
        })
    },
    H = a.div.attrs({
        className: "maxWidth"
    })`
  margin-top: 14px;
`,
    Y = a.div.attrs({
        className: "maxWidth flex between vc"
    })`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.95);
  text-transform: uppercase;
  font-family: ${p.FugazOne};
  margin-bottom: 8px;
`,
    Z = e => t.jsxs(J, {
        style: {
            backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%)"
        },
        children: [t.jsx(E, {
            selectedCharacter: e.selectedCharacter
        }), t.jsx(B, {
            currentLevel: e.currentLevel
        }), t.jsx(q, {
            currentLevel: e.currentLevel,
            unredeemedXP: e.unredeemedXP,
            xpNeededPerLevel: e.xpNeededPerLevel
        }), t.jsx(R, {})]
    }),
    J = a(P).attrs({
        className: "flex-center flex-column"
    })`
  margin-top: ${u/2}px;
`,
    K = e => t.jsxs(Q, {
        children: [t.jsx(ee, {
            children: e.name
        }), t.jsx(te, {
            children: e.description
        }), t.jsx(L, {
            height: 45,
            percentageComplete: e.percentageComplete,
            children: t.jsx("div", {
                className: "maxAll flex vc",
                children: t.jsx("span", {
                    style: {
                        fontFamily: p.FugazOne,
                        textTransform: "uppercase",
                        textShadow: "1px 1px 10px rgba(0,0,0,0.2)",
                        color: "rgba(255,255,255,0.9)",
                        fontSize: 12,
                        marginLeft: 15
                    },
                    children: e.progressText
                })
            })
        })]
    }),
    Q = a.div``,
    ee = a.div`
  font-size: 20px;
  font-weight: ${v.UltraBold};
`,
    te = a.div`
  font-size: 16px;
  margin-bottom: 11px;
  color: rgba(255, 255, 255, 0.85);
  font-style: italic;
  margin-top: -2px;
`,
    re = e => {
        Math.min(e.dailyXpLimit, e.dailyXp + e.notSyncedXP);
        const r = Math.min(e.periodXpLimit, e.periodXp + e.notSyncedXP),
            {
                dailyXpLimit: o,
                periodXpLimit: s
            } = e;
        return t.jsxs(ae, {
            children: [t.jsx(ne, {
                children: "Limits"
            }), t.jsx(P, {
                children: t.jsx(b, {
                    direction: "vertical",
                    size: 22,
                    className: "maxWidth",
                    children: t.jsxs("div", {
                        children: [t.jsx(K, {
                            name: `Weekly ${n.xp}`,
                            description: "Resets on Wednesdays at 2:00pm EST",
                            percentageComplete: Math.floor(r / s * 100),
                            progressText: `${d(r)}/${d(s)} ${n.xp}`
                        }), t.jsx(z, {
                            text: `Increase your Weekly ${n.xp} limit to 20,000`,
                            marginTop: 10
                        })]
                    })
                })
            })]
        })
    },
    ae = a.div``,
    ne = a.div`
  font-family: ${p.FugazOne};
  text-transform: uppercase;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 6px;
`,
    ie = e => t.jsx(se, {
        children: t.jsx(oe, {
            style: {
                maxWidth: e.customWidth ?? 721
            },
            children: e.children
        })
    }),
    se = a.div.attrs({
        className: "maxWidth flex hc"
    })``,
    oe = a.div.attrs({
        className: "maxWidth"
    })``,
    ce = e => {
        const {
            data: r,
            error: o,
            isLoading: s
        } = X();
        if (k(!1), s) return t.jsx(j, {
            className: "maxAll",
            children: t.jsx(M, {
                style: {
                    color: g.White
                }
            })
        });
        if (o) return t.jsx(j, {
            className: "maxAll",
            children: "There was an error loading your info. Please refresh and try again."
        });
        const m = e.notSyncedXP || 0,
            S = Math.min(m + (r.unredeemedXP || 0), r.xpNeededPerLevel);
        return t.jsxs(b, {
            direction: "vertical",
            size: 35,
            className: "maxAll",
            children: [t.jsx(Z, {
                ...r,
                unredeemedXP: S
            }), t.jsx(re, {
                notSyncedXP: m,
                dailyXp: r.xpGainedToday,
                periodXp: r.xpGainedInPeriod,
                dailyXpLimit: r.maxXpToday,
                periodXpLimit: r.maxXpInPeriod
            })]
        })
    },
    le = e => t.jsx(ie, {
        children: t.jsx(ce, {
            ...e
        })
    }),
    de = c.lazy(() => f(() => import("./App-66.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]))),
    me = c.lazy(() => f(() => import("./App-68.js"), __vite__mapDeps([28, 1, 2, 18, 3, 16, 9, 11, 15, 7, 12, 13, 4, 5, 6, 19, 20, 21, 29, 30, 31, 32, 33, 26, 27, 25, 8, 14]))),
    xe = c.lazy(() => f(() => import("./App-69.js"), __vite__mapDeps([34, 1, 2, 17, 16, 9, 11, 15, 18, 3, 7, 12, 13, 4, 5, 6, 19, 20, 21, 22, 23, 24, 35, 8, 36, 37, 26, 27, 25, 14]))),
    he = c.lazy(() => f(() => import("./App-70.js"), __vite__mapDeps([38, 1, 2, 35, 16, 9, 11, 15, 5, 6, 8, 4, 12, 18, 3, 7, 13, 19, 20, 21, 39, 22, 40, 41, 42, 27, 43, 44, 26, 25, 14]))),
    ue = e => {
        const {
            screen: r
        } = e;
        N(() => {
            _("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap")
        });
        const o = () => e.pageMode ? r === i.locker ? t.jsx(l, {
                title: "Locker"
            }) : r === i.shop ? t.jsx(l, {
                title: "Shop"
            }) : r === i.seasonTicket ? t.jsx(l, {
                title: W.name
            }) : r === i.pack ? t.jsx(l, {
                title: "Pack"
            }) : t.jsx(l, {
                title: "Rewards"
            }) : null,
            s = () => r === i.locker ? t.jsx(me, {
                onCosmeticSelectionChanged: e.onCosmeticSelectionChanged,
                blockCharacterPreview: e.blockCharacterPreview
            }) : r === i.shop ? t.jsx(xe, {
                onCosmeticSelectionChanged: e.onCosmeticSelectionChanged,
                blockCharacterPreview: e.blockCharacterPreview,
                setToPackScreen: e.pageMode ? void 0 : m => {
                    e == null || e.setMetadata(m), e == null || e.setScreen(i.pack)
                }
            }) : r === i.seasonTicket ? t.jsx(de, {
                pageMode: e.pageMode
            }) : r === i.pack ? t.jsx(he, {
                pageMode: e.pageMode,
                metadata: e.metadata
            }) : t.jsx(le, {
                notSyncedXP: e.notSyncedXP,
                blockDiscord: e.blockDiscord
            });
        return t.jsx(ge, {
            children: t.jsx(T, {
                theme: {
                    algorithm: $.defaultAlgorithm
                },
                children: t.jsxs(c.Suspense, {
                    fallback: t.jsx("div", {}),
                    children: [o(), s()]
                })
            })
        })
    },
    ge = a.div`
  flex: 1;
  color: ${g.White};
  user-select: none;
`,
    Se = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ue
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Se as A, ue as C, ie as L, A as g
};