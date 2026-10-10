import {
    o as e
} from "./rolldown-runtime.js";
import {
    S as t,
    x as n
} from "./utils.js";
import {
    t as r
} from "./react-1.js";
import {
    t as i
} from "./progress.js";
import {
    t as a
} from "./jsx-runtime.js";
import {
    t as o
} from "./useIntervalWhen.js";
import {
    t as s
} from "./AnimatePresence.js";
import {
    c,
    l,
    n as u,
    s as d
} from "./_index.js";
import {
    a as f,
    r as p
} from "./mobxreact.esm.js";
import {
    t as m
} from "./Button.js";
import {
    t as ee
} from "./confetti.js";
import {
    t as h
} from "./motion.js";
import {
    t as te
} from "./stores-2.js";
import {
    t as ne
} from "./FetchScene.js";
import {
    t as g
} from "./useStore.js";
import {
    t as _
} from "./FetchMyId.js";
import {
    n as re
} from "./TutorialConsts.js";
import {
    t as v
} from "./FetchItemById.js";
import {
    t as y
} from "./CapitalizeFirstLetter.js";
import {
    Bt as b,
    G as ie
} from "./App-42.js";
import {
    a as x,
    i as S,
    n as C,
    o as w,
    r as T,
    t as E
} from "./ItemNameWithAmount.js";
var D = e(r()),
    ae = e(ee()),
    O = a(),
    k = p(e => {
        let [, n] = D.useReducer(e => e + 1, 0), [r, i] = D.useState(!1), {
            session: {
                gameTime: a
            }
        } = g();
        D.useEffect(() => {
            i(!0)
        }, []), o(n, 33, !!e.itemDisposalMs);
        let s = () => {
                let t = Math.max(e.itemDisposalAt - b(), 0),
                    n = Math.ceil(t / 1e3);
                return isNaN(n) ? 0 : n
            },
            c = D.useMemo(() => {
                if (!e.useCrafterCollectionAdvantage) return !1;
                if (e.itemCrafterCharacterId !== _()) {
                    let t = e.itemFinishesCraftingAt + C.secondsAdvantage * 1e3;
                    return a < t
                }
                return !1
            }, [e.useCrafterCollectionAdvantage, a, e.itemFinishesCraftingAt, e.itemCrafterCharacterId]),
            l = () => {
                e.collect(), e.close()
            },
            u = Math.max(1, s());
        return (0, O.jsxs)(A, {
            children: [(0, O.jsx)(ae.default, {
                config: M,
                active: r
            }), (0, O.jsx)(m, {
                block: !0,
                type: `success`,
                disabled: c,
                style: {
                    width: `80%`
                },
                onClick: l,
                ariaLabel: `Collect`,
                children: (0, O.jsx)(`span`, {
                    style: {
                        textTransform: `uppercase`
                    },
                    children: `Collect`
                })
            }), e.itemDisposalMs ? (0, O.jsxs)(j, {
                children: [`Goes bad in `, u, ` `, t(`second`, u)]
            }) : null]
        })
    }),
    A = l(h.div).attrs({
        className: `maxWidth flex-center flex-column`,
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
    j = l.div`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-family: ${c.ProductSans};
  font-weight: ${d.Bold};
  text-transform: none;
`,
    M = {
        angle: 90,
        spread: 55,
        elementCount: 50,
        startVelocity: 30,
        decay: .95
    },
    N = e => {
        let [, n] = D.useReducer(e => e + 1, 0);
        o(n, 33);
        let r = Math.max(e.itemFinishesCraftingAt - b(), 0),
            a = Math.max(100 - r / e.craftingDurationMs * 100, 0);
        if (isNaN(r)) return null;
        let s = Math.max(1, Math.ceil(r / 1e3)),
            c = `Ready in ${s} ${t(`second`,s)}`;
        return isNaN(a) ? null : (0, O.jsxs)(P, {
            children: [(0, O.jsx)(i, {
                percent: a,
                showInfo: !1,
                status: `active`
            }), (0, O.jsx)(F, {
                children: c
            })]
        })
    },
    P = l(h.div).attrs({
        className: `maxWidth`,
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
    F = l.div`
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1;
`,
    I = p(e => {
        let n = D.useMemo(() => v(e.item), [e.item]),
            {
                session: {
                    gameTime: r
                }
            } = g(),
            i = D.useMemo(() => {
                if (e.status === S.crafting) return `Currently ${T.preparing(e.style)}...`;
                if (e.useCrafterCollectionAdvantage && e.itemCrafterCharacterId !== _()) {
                    let n = e.itemFinishesCraftingAt + C.secondsAdvantage * 1e3 - r;
                    if (n > 0) {
                        let e = Math.ceil(n / 1e3);
                        return `Collect in ${e} ${t(`second`,e)}`
                    }
                }
                return `Ready to collect`
            }, [e.status, r, e.useCrafterCollectionAdvantage, e.itemFinishesCraftingAt, e.itemCrafterCharacterId]);
        return n ? (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)(R, {
                src: n.previewImage
            }), (0, O.jsx)(z, {
                children: E(n.id, e.itemAmount)
            }), (0, O.jsxs)(L, {
                children: [(0, O.jsx)(B, {
                    children: i
                }), (0, O.jsxs)(s, {
                    mode: `wait`,
                    children: [e.status === S.crafting ? (0, O.jsx)(N, {
                        itemFinishesCraftingAt: e.itemFinishesCraftingAt,
                        craftingDurationMs: e.craftingDurationMs
                    }, `craft-countdown`) : null, e.status === S.availableForCollection ? (0, O.jsx)(k, {
                        itemFinishesCraftingAt: e.itemFinishesCraftingAt,
                        itemDisposalMs: e.itemDisposalMs,
                        itemDisposalAt: e.itemDisposedAt,
                        collect: e.collect,
                        itemCrafterCharacterId: e.itemCrafterCharacterId,
                        useCrafterCollectionAdvantage: e.useCrafterCollectionAdvantage,
                        close: e.close
                    }, `craft-collection`) : null]
                })]
            })]
        }) : null
    }),
    L = l(h.div).attrs({
        className: `maxWidth flex-column flex-center`,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    })``,
    R = l.img`
  height: 82px;
`,
    z = l.div`
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1;
  margin-top: 10px;
`,
    B = l.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 8px;
`,
    V = e => !e.ingredients.find(e => {
        if (!e.item) return !1;
        let t = te.me.inventory.slots.get(e.item);
        return !t || t.amount < e.amount
    }),
    H = p(e => (0, O.jsxs)(U, {
        children: [(0, O.jsx)(m, {
            type: `success`,
            size: `small`,
            style: {
                width: `75%`
            },
            block: !0,
            disabled: !V(e.recipe),
            onClick: () => {
                e.craft(e.recipe.id)
            },
            ariaLabel: y(T.baseVerb(e.style)),
            children: (0, O.jsx)(`span`, {
                style: {
                    textTransform: `uppercase`
                },
                children: y(T.baseVerb(e.style))
            })
        }), (0, O.jsx)(W, {
            onClick: e.goBack,
            children: `...or go back`
        })]
    })),
    U = l.div.attrs({
        className: `maxWidth flex-center flex-column`
    })`
  margin-top: 15px;
`,
    W = l.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 6px;
  font-weight: ${d.Bold};
  font-family: ${c.ProductSans};
  text-transform: none;
  text-decoration: underline;
  transition: color 0.2s;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`,
    G = p(e => {
        var t, r;
        let {
            me: {
                inventory: i
            }
        } = g(), {
            itemId: a,
            requiredAmount: o
        } = e, s = !0, c = ((t = i.slots.get(a)) == null ? void 0 : t.amount) || 0, l = ie(a);
        return c >= o ? l += ` (${n(o)})` : (s = !1, l += ` (${n(c)}/${n(o)})`), (0, O.jsxs)(K, {
            style: {
                background: s ? `rgba(255,255,255, 0.1)` : `rgba(198, 40, 40, 0.5)`
            },
            children: [(0, O.jsx)(`img`, {
                src: (r = v(a)) == null ? void 0 : r.previewImage,
                style: {
                    height: 35
                }
            }), (0, O.jsx)(q, {
                children: l
            })]
        })
    }),
    K = l.div.attrs({
        className: `flex vc`
    })`
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 4px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`,
    q = l.div`
  line-height: 1;
  margin-left: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`,
    oe = e => {
        let n = e.recipe.ingredients.filter(e => e.item && e.amount);
        return (0, O.jsx)(O.Fragment, {
            children: (0, O.jsxs)(J, {
                children: [(0, O.jsxs)(Y, {
                    children: [`Required`, ` `, t(y(T.resource(e.style)), n.length)]
                }), n.map((e, t) => (0, O.jsx)(G, {
                    itemId: e.item,
                    requiredAmount: e.amount
                }, `ingredient-${e.item}-${t}`))]
            })
        })
    },
    J = l.div.attrs({
        className: `maxWidth`
    })`
  margin-top: 30px;
`,
    Y = l.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-bottom: 8px;
`,
    X = e => {
        let n = e / 60;
        return n >= 1 && e % 60 == 0 ? `${n} ${t(`minute`,n)}` : `${e} ${t(`second`,e)}`
    },
    Z = e => (0, O.jsx)(ce, {
        children: e.children
    }),
    se = e => {
        let {
            recipe: t,
            style: n
        } = e, r = D.useMemo(() => {
            if (t.timeToCraftMs === 0) return T.instantNote(n);
            let e = Math.floor(t.timeToCraftMs / 1e3);
            return T.durationNote(X(e))(n)
        }, [t.timeToCraftMs]), i = D.useMemo(() => {
            if (t.timeToDisposeMs === 0) return `Never ${T.expireVerb(n)}`;
            let e = Math.floor(t.timeToDisposeMs / 1e3);
            return `${y(T.expireVerb(n))} after ${X(e)}`
        }, [t.timeToDisposeMs]);
        return (0, O.jsxs)(J, {
            children: [(0, O.jsx)(Y, {
                children: `Notes`
            }), (0, O.jsx)(Z, {
                children: r
            }), (0, O.jsx)(Z, {
                children: i
            })]
        })
    },
    ce = l.div.attrs({
        className: `flex vc`
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
    le = e => {
        let {
            recipe: t
        } = e;
        return (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)(ue, {
                src: v(t.itemId).previewImage
            }), (0, O.jsx)(de, {
                children: E(e.recipe.itemId, e.recipe.itemAmount)
            })]
        })
    },
    ue = l.img`
  height: 82px;
`,
    de = l.div`
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1;
  margin-top: 10px;
`,
    fe = f(e => {
        let t = w(e.selectedRecipeId);
        return t ? (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)(le, {
                recipe: t
            }), (0, O.jsxs)(pe, {
                children: [(0, O.jsx)(H, {
                    craft: e.craft,
                    recipe: t,
                    goBack: e.backToRecipeSelectionScreen,
                    style: e.style
                }), (0, O.jsx)(oe, {
                    recipe: t,
                    style: e.style
                }), (0, O.jsx)(se, {
                    recipe: t,
                    style: e.style
                })]
            })]
        }) : null
    }),
    pe = l(h.div).attrs({
        className: `maxWidth flex-column flex-center`,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    })``,
    me = e => {
        if (!e.item || !e.itemAmount) return !1;
        let t = !1;
        for (let n = 1; n <= e.numberOfIngredients; n++)
            if (e[`ingredient${n}Item`] && e[`ingredient${n}Amount`]) {
                t = !0;
                break
            } return !!t
    },
    he = (e = ``) => {
        let t = [];
        return ne().worldManager.devices.allDevices.filter(e => e.deviceOption.id === re.craftingRecipe).forEach(n => {
            let r = n.options;
            n.state.active && r.group === e && me(n.options) && t.push({
                id: n.id,
                y: n.y
            })
        }), t.sort((e, t) => e.y - t.y).map(e => e.id)
    },
    ge = e => {
        let t = w(e.recipeId),
            n = D.useMemo(() => v(t.itemId).previewImage, [t.itemId]),
            r = V(t);
        return (0, O.jsxs)(_e, {
            onClick: e.onSelect,
            children: [(0, O.jsx)(ve, {
                src: n
            }), (0, O.jsxs)(ye, {
                children: [(0, O.jsx)(be, {
                    children: E(t.itemId, t.itemAmount)
                }), (0, O.jsx)(xe, {
                    style: {
                        color: r ? `#a5d6a7` : `#ef9a9a`
                    },
                    children: r ? T.availableToCraft(e.style) : `Insufficient Resources`
                })]
            })]
        })
    },
    _e = l.div.attrs({
        className: `maxWidth flex vc`
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
    ve = l.img`
  height: 55px;
`,
    ye = l(h.div).attrs({
        className: `flex-column`
    })`
  margin-left: 15px;
  line-height: 1;
`,
    be = l.div`
  font-size: 20px;
`,
    xe = l.div`
  color: #a5d6a7;
  font-size: 12px;
  margin-top: 6px;
  opacity: 0.8;
`,
    Q = p(e => {
        let t = he(e.group);
        return t.length ? (0, O.jsxs)(Se, {
            children: [(0, O.jsx)($, {
                children: T.selectItem(e.style)
            }), t.map(t => (0, O.jsx)(ge, {
                recipeId: t,
                style: e.style,
                onSelect: () => e.setToRecipePreviewScreen(t)
            }, `recipe-${t}`))]
        }) : (0, O.jsx)(`div`, {
            className: `maxAll flex-center`,
            style: {
                textAlign: `center`
            },
            children: (0, O.jsx)($, {
                children: T.noItems(e.style)
            })
        })
    }),
    Se = l(h.div).attrs({
        className: `maxWidth flex-column flex-center`,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    })``,
    $ = l.div`
  font-family: ${c.ProductSans};
  font-weight: ${d.Bold};
  text-transform: none;
  margin-bottom: 15px;
  font-size: 22px;
`,
    Ce = e => e === x.plant ? `rgba(0,51,0,0.93)` : `rgba(38,50,56,0.93)`,
    we = e => {
        let [t, n] = D.useState(`recipeSelection`), [r, i] = D.useState(null), a = e => {
            i(e), n(`itemPreview`)
        }, o = () => {
            n(`recipeSelection`)
        };
        return D.useEffect(() => {
            e.status === S.availableForCollection && o()
        }, [e.status]), (0, O.jsx)(Te, {
            style: {
                background: Ce(e.style)
            },
            children: (() => {
                if (e.status === S.idle) switch (t) {
                    case `recipeSelection`:
                        return (0, O.jsx)(Q, {
                            setToRecipePreviewScreen: a,
                            style: e.style,
                            group: e.tableGroup
                        }, `recipe-selection-screen`);
                    case `itemPreview`:
                        return (0, O.jsx)(fe, {
                            craft: e.craft,
                            selectedRecipeId: r,
                            style: e.style,
                            backToRecipeSelectionScreen: o
                        }, `recipe-preview-screen`);
                    default:
                        return null
                }
                return (0, O.jsx)(I, {
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
                }, `crafting-status-screen`)
            })()
        })
    },
    Te = l.div.attrs({
        className: `maxAll flex-column vc scroll-y`
    })`
  backdrop-filter: blur(5px);
  color: ${u.White};
  padding: 25px;
  font-family: ${c.FugazOne};
  text-transform: uppercase;
`;
export {
    we as
    default
};