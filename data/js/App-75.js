import {
    r as l,
    j as t,
    q as u,
    d as a,
    U as b,
    F as I,
    b5 as y,
    e as B
} from "./_index.js";
import {
    b as N,
    a as h,
    d as m,
    c as j,
    F as D,
    C as G
} from "./ItemNameWithAmount.js";
import {
    o as p,
    a as V
} from "./mobxreact.esm.js";
import {
    u as A,
    T as R,
    b9 as F,
    az as v,
    aS as L
} from "./App-41.js";
import {
    M as k
} from "./Button.js";
import {
    C as O
} from "./confetti.js";
import {
    u as w
} from "./useIntervalWhen.js";
import {
    m as g
} from "./motion.js";
import {
    P as E
} from "./progress.js";
import {
    A as q
} from "./index-17.js";
import {
    s as U,
    a as H
} from "./FixSpinePlugin.js";
import {
    C
} from "./CapitalizeFirstLetter.js";
import {
    D as J
} from "./TutorialConsts.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./MapModeType.js";
import "./GetAssetPath.js";
import "./ActionButton.js";
import "./index-5.js";
import "./playSound.js";
import "./howler.js";
import "./index-18.js";
import "./context.js";
import "./FontAwesomeIcon.js";
import "./Centered.js";
import "./index-4.js";
import "./index-2.js";
import "./index-14.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./index-3.js";
import "./CheckOutlined.js";
import "./CopyOutlined.js";
import "./SixteenByNineScaler.js";
import "./index-20.js";
import "./index-22.js";
import "./index-1.js";
import "./ElementIds.js";
import "./SeasonTicketName.js";
import "./useQuery.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./util-1.js";
import "./util-2.js";
import "./Shortcut.js";
import "./Names.js";
import "./useWillUnmount.js";
import "./use-motion-value.js";
import "./use-transform.js";
import "./index-6.js";
import "./AccessibleAnchor.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./inheritsLoose.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
import "./polished.esm.js";
import "./index-9.js";
import "./index-23.js";
import "./index-10.js";
import "./move.js";
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./useDebouncedValue.js";
import "./MapStyle.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
import "./use-force-update.js";
const K = p(e => {
        const [, i] = l.useReducer(x => x + 1, 0), [r, n] = l.useState(!1), {
            session: {
                gameTime: s
            }
        } = A();
        l.useEffect(() => {
            n(!0)
        }, []), w(i, 33, !!e.itemDisposalMs);
        const o = () => {
                const x = Math.max(e.itemDisposalAt - F(), 0),
                    $ = Math.ceil(x / 1e3);
                return isNaN($) ? 0 : $
            },
            c = l.useMemo(() => {
                if (!e.useCrafterCollectionAdvantage) return !1;
                if (e.itemCrafterCharacterId !== R()) {
                    const x = e.itemFinishesCraftingAt + N.secondsAdvantage * 1e3;
                    return s < x
                }
                return !1
            }, [e.useCrafterCollectionAdvantage, s, e.itemFinishesCraftingAt, e.itemCrafterCharacterId]),
            f = () => {
                e.collect(), e.close()
            },
            d = Math.max(1, o());
        return t.jsxs(Q, {
            children: [t.jsx(O, {
                config: Y,
                active: r
            }), t.jsx(k, {
                block: !0,
                type: "success",
                disabled: c,
                style: {
                    width: "80%"
                },
                onClick: f,
                ariaLabel: "Collect",
                children: t.jsx("span", {
                    style: {
                        textTransform: "uppercase"
                    },
                    children: "Collect"
                })
            }), e.itemDisposalMs ? t.jsxs(X, {
                children: ["Goes bad in ", d, " ", u("second", d)]
            }) : null]
        })
    }),
    Q = a(g.div).attrs({
        className: "maxWidth flex-center flex-column",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: .25
        }
    })`
  margin-top: 25px;
`,
    X = a.div`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-family: ${b.ProductSans};
  font-weight: ${I.Bold};
  text-transform: none;
`,
    Y = {
        angle: 90,
        spread: 55,
        elementCount: 50,
        startVelocity: 30,
        decay: .95
    },
    Z = e => {
        const [, i] = l.useReducer(c => c + 1, 0);
        w(i, 33);
        const r = Math.max(e.itemFinishesCraftingAt - F(), 0),
            n = Math.max(100 - r / e.craftingDurationMs * 100, 0);
        if (isNaN(r)) return null;
        const s = Math.max(1, Math.ceil(r / 1e3)),
            o = `Ready in ${s} ${u("second",s)}`;
        return isNaN(n) ? null : t.jsxs(_, {
            children: [t.jsx(E, {
                percent: n,
                showInfo: !1,
                status: "active"
            }), t.jsx(ee, {
                children: o
            })]
        })
    },
    _ = a(g.div).attrs({
        className: "maxWidth",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: .15
        }
    })`
  background: rgba(255, 255, 255, 0.1);
  padding: 40px 30px;
  padding-bottom: 32px;
  margin-top: 20px;
  border-radius: 6px;
  .ant-progress-bg {
    height: 22px !important;
    transition: all 0.05s cubic-bezier(0.78, 0.14, 0.15, 0.86) !important;
  }
`,
    ee = a.div`
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1;
`,
    te = p(e => {
        const i = l.useMemo(() => v(e.item), [e.item]),
            {
                session: {
                    gameTime: r
                }
            } = A(),
            n = l.useMemo(() => {
                if (e.status === h.crafting) return `Currently ${m.preparing(e.style)}...`;
                if (e.useCrafterCollectionAdvantage && e.itemCrafterCharacterId !== R()) {
                    const o = e.itemFinishesCraftingAt + N.secondsAdvantage * 1e3 - r;
                    if (o > 0) {
                        const c = Math.ceil(o / 1e3);
                        return `Collect in ${c} ${u("second",c)}`
                    }
                }
                return "Ready to collect"
            }, [e.status, r, e.useCrafterCollectionAdvantage, e.itemFinishesCraftingAt, e.itemCrafterCharacterId]);
        return i ? t.jsxs(t.Fragment, {
            children: [t.jsx(re, {
                src: i.previewImage
            }), t.jsx(ne, {
                children: j(i.id, e.itemAmount)
            }), t.jsxs(ie, {
                children: [t.jsx(ae, {
                    children: n
                }), t.jsxs(q, {
                    mode: "wait",
                    children: [e.status === h.crafting ? t.jsx(Z, {
                        itemFinishesCraftingAt: e.itemFinishesCraftingAt,
                        craftingDurationMs: e.craftingDurationMs
                    }, "craft-countdown") : null, e.status === h.availableForCollection ? t.jsx(K, {
                        itemFinishesCraftingAt: e.itemFinishesCraftingAt,
                        itemDisposalMs: e.itemDisposalMs,
                        itemDisposalAt: e.itemDisposedAt,
                        collect: e.collect,
                        itemCrafterCharacterId: e.itemCrafterCharacterId,
                        useCrafterCollectionAdvantage: e.useCrafterCollectionAdvantage,
                        close: e.close
                    }, "craft-collection") : null]
                })]
            })]
        }) : null
    }),
    ie = a(g.div).attrs({
        className: "maxWidth flex-column flex-center",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    })``,
    re = a.img`
  height: 82px;
`,
    ne = a.div`
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1;
  margin-top: 10px;
`,
    ae = a.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 8px;
`,
    z = e => !e.ingredients.find(r => {
        if (!r.item) return !1;
        const n = U.me.inventory.slots.get(r.item);
        return !n || n.amount < r.amount
    }),
    se = p(e => {
        const i = () => {
            e.craft(e.recipe.id)
        };
        return t.jsxs(oe, {
            children: [t.jsx(k, {
                type: "success",
                size: "small",
                style: {
                    width: "75%"
                },
                block: !0,
                disabled: !z(e.recipe),
                onClick: i,
                ariaLabel: C(m.baseVerb(e.style)),
                children: t.jsx("span", {
                    style: {
                        textTransform: "uppercase"
                    },
                    children: C(m.baseVerb(e.style))
                })
            }), t.jsx(ce, {
                onClick: e.goBack,
                children: "...or go back"
            })]
        })
    }),
    oe = a.div.attrs({
        className: "maxWidth flex-center flex-column"
    })`
  margin-top: 15px;
`,
    ce = a.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 6px;
  font-weight: ${I.Bold};
  font-family: ${b.ProductSans};
  text-transform: none;
  text-decoration: underline;
  transition: color 0.2s;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`,
    le = p(e => {
        var f, d;
        const {
            me: {
                inventory: i
            }
        } = A(), {
            itemId: r,
            requiredAmount: n
        } = e;
        let s = !0;
        const o = ((f = i.slots.get(r)) == null ? void 0 : f.amount) || 0;
        let c = L(r);
        return o >= n ? c += ` (${y(n)})` : (s = !1, c += ` (${y(o)}/${y(n)})`), t.jsxs(me, {
            style: {
                background: s ? "rgba(255,255,255, 0.1)" : "rgba(198, 40, 40, 0.5)"
            },
            children: [t.jsx("img", {
                src: (d = v(r)) == null ? void 0 : d.previewImage,
                style: {
                    height: 35
                }
            }), t.jsx(de, {
                children: c
            })]
        })
    }),
    me = a.div.attrs({
        className: "flex vc"
    })`
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 4px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`,
    de = a.div`
  line-height: 1;
  margin-left: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`,
    fe = e => {
        const i = e.recipe.ingredients.filter(r => r.item && r.amount);
        return t.jsx(t.Fragment, {
            children: t.jsxs(P, {
                children: [t.jsxs(W, {
                    children: ["Required", " ", u(C(m.resource(e.style)), i.length)]
                }), i.map((r, n) => t.jsx(le, {
                    itemId: r.item,
                    requiredAmount: r.amount
                }, `ingredient-${r.item}-${n}`))]
            })
        })
    },
    P = a.div.attrs({
        className: "maxWidth"
    })`
  margin-top: 30px;
`,
    W = a.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-bottom: 8px;
`,
    M = e => {
        const i = e / 60;
        return i >= 1 && e % 60 === 0 ? `${i} ${u("minute",i)}` : `${e} ${u("second",e)}`
    },
    T = e => t.jsx(ge, {
        children: e.children
    }),
    ue = e => {
        const {
            recipe: i,
            style: r
        } = e, n = l.useMemo(() => {
            if (i.timeToCraftMs === 0) return m.instantNote(r);
            const o = Math.floor(i.timeToCraftMs / 1e3);
            return m.durationNote(M(o))(r)
        }, [i.timeToCraftMs]), s = l.useMemo(() => {
            if (i.timeToDisposeMs === 0) return `Never ${m.expireVerb(r)}`;
            const o = Math.floor(i.timeToDisposeMs / 1e3);
            return `${C(m.expireVerb(r))} after ${M(o)}`
        }, [i.timeToDisposeMs]);
        return t.jsxs(P, {
            children: [t.jsx(W, {
                children: "Notes"
            }), t.jsx(T, {
                children: n
            }), t.jsx(T, {
                children: s
            })]
        })
    },
    ge = a.div.attrs({
        className: "flex vc"
    })`
  margin-bottom: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1;
  border-radius: 4px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`,
    xe = e => {
        const {
            recipe: i
        } = e;
        return t.jsxs(t.Fragment, {
            children: [t.jsx(he, {
                src: v(i.itemId).previewImage
            }), t.jsx(pe, {
                children: j(e.recipe.itemId, e.recipe.itemAmount)
            })]
        })
    },
    he = a.img`
  height: 82px;
`,
    pe = a.div`
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1;
  margin-top: 10px;
`,
    Ce = V(e => {
        const i = D(e.selectedRecipeId);
        return i ? t.jsxs(t.Fragment, {
            children: [t.jsx(xe, {
                recipe: i
            }), t.jsxs(be, {
                children: [t.jsx(se, {
                    craft: e.craft,
                    recipe: i,
                    goBack: e.backToRecipeSelectionScreen,
                    style: e.style
                }), t.jsx(fe, {
                    recipe: i,
                    style: e.style
                }), t.jsx(ue, {
                    recipe: i,
                    style: e.style
                })]
            })]
        }) : null
    }),
    be = a(g.div).attrs({
        className: "maxWidth flex-column flex-center",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    })``,
    ve = e => {
        if (!e.item || !e.itemAmount) return !1;
        let i = !1;
        for (let r = 1; r <= e.numberOfIngredients; r++)
            if (e[`ingredient${r}Item`] && e[`ingredient${r}Amount`]) {
                i = !0;
                break
            } return !!i
    },
    ye = (e = "") => {
        const i = [];
        return H().worldManager.devices.allDevices.filter(n => n.deviceOption.id === J.craftingRecipe).forEach(n => {
            const s = n.options;
            n.state.active && s.group === e && ve(n.options) && i.push({
                id: n.id,
                y: n.y
            })
        }), i.sort((n, s) => n.y - s.y).map(n => n.id)
    },
    Ie = e => {
        const i = D(e.recipeId),
            r = l.useMemo(() => v(i.itemId).previewImage, [i.itemId]),
            n = z(i);
        return t.jsxs(je, {
            onClick: e.onSelect,
            children: [t.jsx(Ae, {
                src: r
            }), t.jsxs($e, {
                children: [t.jsx(Me, {
                    children: j(i.itemId, i.itemAmount)
                }), t.jsx(Te, {
                    style: {
                        color: n ? "#a5d6a7" : "#ef9a9a"
                    },
                    children: n ? m.availableToCraft(e.style) : "Insufficient Resources"
                })]
            })]
        })
    },
    je = a.div.attrs({
        className: "maxWidth flex vc"
    })`
  background: rgba(255, 255, 255, 0.1);
  padding: 25px 20px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 15px;
  transition: background 0.2s;
  overflow: hidden;
  &:last-of-type {
    margin-bottom: 0px;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`,
    Ae = a.img`
  height: 55px;
`,
    $e = a(g.div).attrs({
        className: "flex-column"
    })`
  margin-left: 15px;
  line-height: 1;
`,
    Me = a.div`
  font-size: 20px;
`,
    Te = a.div`
  color: #a5d6a7;
  font-size: 12px;
  margin-top: 6px;
  opacity: 0.8;
`,
    Se = p(e => {
        const i = ye(e.group);
        return i.length ? t.jsxs(Ne, {
            children: [t.jsx(S, {
                children: m.selectItem(e.style)
            }), i.map(r => t.jsx(Ie, {
                recipeId: r,
                style: e.style,
                onSelect: () => e.setToRecipePreviewScreen(r)
            }, `recipe-${r}`))]
        }) : t.jsx("div", {
            className: "maxAll flex-center",
            style: {
                textAlign: "center"
            },
            children: t.jsx(S, {
                children: m.noItems(e.style)
            })
        })
    }),
    Ne = a(g.div).attrs({
        className: "maxWidth flex-column flex-center",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    })``,
    S = a.div`
  font-family: ${b.ProductSans};
  font-weight: ${I.Bold};
  text-transform: none;
  margin-bottom: 15px;
  font-size: 22px;
`,
    De = e => e === G.plant ? "rgba(0,51,0,0.93)" : "rgba(38,50,56,0.93)",
    Xt = e => {
        const [i, r] = l.useState("recipeSelection"), [n, s] = l.useState(null), o = d => {
            s(d), r("itemPreview")
        }, c = () => {
            r("recipeSelection")
        };
        l.useEffect(() => {
            e.status === h.availableForCollection && c()
        }, [e.status]);
        const f = () => {
            if (e.status === h.idle) switch (i) {
                case "recipeSelection":
                    return t.jsx(Se, {
                        setToRecipePreviewScreen: o,
                        style: e.style,
                        group: e.tableGroup
                    }, "recipe-selection-screen");
                case "itemPreview":
                    return t.jsx(Ce, {
                        craft: e.craft,
                        selectedRecipeId: n,
                        style: e.style,
                        backToRecipeSelectionScreen: c
                    }, "recipe-preview-screen");
                default:
                    return null
            }
            return t.jsx(te, {
                item: e.item,
                itemAmount: e.itemAmount,
                status: e.status,
                style: e.style,
                craftingDurationMs: e.craftingDurationMs,
                itemFinishesCraftingAt: e.itemFinishesCraftingAt,
                itemDisposalMs: e.itemDisposalMs,
                itemDisposedAt: e.itemDisposedAt,
                itemCrafterCharacterId: e.itemCrafterCharacterId,
                useCrafterCollectionAdvantage: e.useCrafterCollectionAdvantage,
                collect: e.collect,
                close: e.close
            }, "crafting-status-screen")
        };
        return t.jsx(Re, {
            style: {
                background: De(e.style)
            },
            children: f()
        })
    },
    Re = a.div.attrs({
        className: "maxAll flex-column vc scroll-y"
    })`
  backdrop-filter: blur(5px);
  color: ${B.White};
  padding: 25px;
  font-family: ${b.FugazOne};
  text-transform: uppercase;
`;
export {
    Xt as
    default
};