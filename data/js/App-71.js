import {
    o as e
} from "./rolldown-runtime.js";
import {
    C as t,
    E as n,
    O as r,
    _ as i,
    t as a,
    v as ee,
    w as o
} from "./utils.js";
import {
    t as s
} from "./react-1.js";
import {
    l as c,
    n as l
} from "./dist-3.js";
import {
    t as te
} from "./modal.js";
import {
    t as u
} from "./button.js";
import {
    t as d
} from "./input.js";
import {
    n as f
} from "./Company.js";
import {
    I as p,
    r as m
} from "./Paths.js";
import {
    t as h
} from "./jsx-runtime.js";
import {
    t as g
} from "./useQuery.js";
import {
    c as _,
    d as v,
    l as y,
    s as b
} from "./_index.js";
import {
    t as x
} from "./AccessibleAnchor.js";
import {
    t as S
} from "./FontAwesomeIcon.js";
import {
    t as C
} from "./TrackEvent.js";
import {
    n as w
} from "./Centered.js";
import {
    t as T
} from "./CircularProgress.js";
import {
    n as E
} from "./Button.js";
import {
    n as D
} from "./App-44.js";
import {
    n as O,
    t as k
} from "./PublishedDate.js";
import {
    t as A
} from "./getCloudinaryUrl.js";
var ne = [`creative-map-listing`],
    re = e => g({
        queryKey: [ne, e],
        retry: !1,
        queryFn: () => o({
            url: `/api/created-map/listing/info/${e}`
        })
    }),
    j = e(s()),
    M = h(),
    ie = ({
        username: e
    }) => (0, M.jsxs)(N, {
        to: `/creative/@${encodeURIComponent(e)}`,
        children: [`@`, e]
    }),
    N = y(l)`
  display: block;
  width: fit-content;
  max-width: 100%;
  border-radius: 3px;
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
  color: #ffe082;
  font-family: ${_.SFPro};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  text-transform: none;
  overflow-wrap: anywhere;
  &:hover {
    color: #ffe082;
    text-decoration: underline;
  }
  &:focus-visible {
    color: #ffe082;
    outline: 2px solid #ffe082;
    outline-offset: 4px;
  }
`,
    P = e => (0, M.jsxs)(F, {
        children: [e.tags.length ? (0, M.jsx)(L, {
            children: e.tags.map((e, t) => (0, M.jsx)(W, {
                children: e
            }, e + t))
        }) : null, (0, M.jsx)(I, {
            children: e.title
        }), e.username ? (0, M.jsx)(U, {
            children: (0, M.jsx)(ie, {
                username: e.username
            })
        }) : null, (0, M.jsxs)(R, {
            children: [O(e.firstPublishedAt) ? (0, M.jsxs)(z, {
                children: [(0, M.jsx)(V, {
                    children: `Published`
                }), (0, M.jsx)(H, {
                    children: (0, M.jsx)(k, {
                        value: e.firstPublishedAt
                    })
                })]
            }) : null, e.hasBeenUpdated && O(e.lastPublishedAt) ? (0, M.jsxs)(z, {
                children: [(0, M.jsx)(V, {
                    children: `Updated`
                }), (0, M.jsx)(H, {
                    children: (0, M.jsx)(k, {
                        value: e.lastPublishedAt
                    })
                })]
            }) : null, (0, M.jsxs)(B, {
                children: [(0, M.jsx)(V, {
                    children: `Description`
                }), (0, M.jsx)(H, {
                    children: e.description
                })]
            })]
        })]
    }),
    F = y.div`
  min-width: 0;
  text-align: left;
`,
    I = y.h1`
  font-family: ${_.SFPro};
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.4px;
  text-wrap: balance;
  overflow-wrap: anywhere;
  margin: 0;
`,
    L = y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
`,
    R = y.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin: 22px 0 0;
  text-align: left;
  font-family: ${_.SFPro};
`,
    z = y.div`
  display: grid;
  gap: 6px;
`,
    B = y(z)`
  grid-column: 1 / -1;
`,
    V = y.dt`
  font-size: 12px;
  letter-spacing: 0.2px;
  font-weight: 600;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.65);
`,
    H = y.dd`
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  white-space: pre-wrap;
  overflow-wrap: anywhere;

  a {
    font-size: inherit;
  }
`,
    U = y.div`
  margin-top: 8px;
  font-family: ${_.SFPro};
  a {
    font-size: 18px;
    font-weight: 600;
    color: #ffe082;
  }
`,
    W = y.div`
  font-family: ${_.SFPro};
  background: rgba(103, 58, 183, 0.22);
  color: #eee5ff;
  line-height: 1.3;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  padding: 4px 7px;
  border-radius: 5px;
  box-shadow: inset 0 0 0 1px rgba(214, 196, 255, 0.2);
`,
    G = `https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative`,
    K = e => {
        let [a, o, s] = r(!1), [l, p, h] = r(!1), [g, _] = r(!1), [v, y] = j.useState(``), [b, S, w] = r(!1), {
            id: T
        } = c();
        return (0, M.jsxs)(q, {
            children: [(0, M.jsxs)(oe, {
                onClick: () => {
                    if (a) return;
                    o();
                    let r = {
                        listing: T
                    };
                    e.kitId && (r.kit = e.kitId), C({
                        event: `creative_discovery_hosted`,
                        properties: {
                            id: T
                        }
                    }), t({
                        url: `/api/matchmaker/intent/map/play/listing/create`,
                        data: r,
                        success: e => {
                            window.location.href = `/host?id=${e}`
                        },
                        error: e => {
                            n({
                                e,
                                default: {
                                    title: `There was an error loading you in.`
                                }
                            })
                        },
                        both: s
                    })
                },
                disabled: a,
                "aria-busy": a,
                children: [(0, M.jsx)(Y, {
                    "aria-hidden": `true`,
                    children: a ? (0, M.jsx)(ae, {}) : (0, M.jsx)(`svg`, {
                        width: `18`,
                        height: `18`,
                        viewBox: `0 0 18 18`,
                        fill: `currentColor`,
                        focusable: `false`,
                        children: (0, M.jsx)(`path`, {
                            d: `M5 2.5a1 1 0 0 1 1.5-.86l9 6.5a1 1 0 0 1 0 1.72l-9 6.5A1 1 0 0 1 5 15.5z`
                        })
                    })
                }), (0, M.jsx)(`span`, {
                    children: `Play Live`
                })]
            }), !ee() && !i() ? (0, M.jsxs)(se, {
                children: [`This map is limited to 5 players.`, ` `, (0, M.jsxs)(x, {
                    to: m,
                    style: {
                        color: `#d6c4ff`,
                        textDecoration: `underline`
                    },
                    children: [`Upgrade to `, f, ` Pro`]
                }), ` `, `to remove this limit.`]
            }) : null, (0, M.jsxs)(ce, {
                children: [`This map was not created by `, f, `. If anything in this map breaks our`, ` `, (0, M.jsx)(x, {
                    to: G,
                    external: !0,
                    target: `_blank`,
                    style: {
                        color: `#d6c4ff`,
                        textDecoration: `underline`
                    },
                    children: `Community Guidelines`
                }), `, please`, ` `, (0, M.jsx)(x, {
                    style: {
                        color: `#d6c4ff`,
                        textDecoration: `underline`,
                        cursor: `pointer`
                    },
                    onClick: S,
                    children: `report`
                }), ` `, `and we will take proper action.`]
            }), (0, M.jsx)(te, {
                open: b,
                onCancel: w,
                title: `Report map`,
                footer: g ? (0, M.jsx)(u, {
                    onClick: w,
                    type: `primary`,
                    children: `Close`
                }, `reported-close`) : [(0, M.jsx)(u, {
                    onClick: w,
                    children: `Cancel`
                }, `reporting-close`), (0, M.jsx)(u, {
                    danger: !0,
                    loading: l,
                    onClick: () => {
                        l || (p(), t({
                            url: `/api/created-map/listing/report/${T}`,
                            data: {
                                comment: v
                            },
                            success: () => {
                                _()
                            },
                            both: () => {
                                h()
                            }
                        }))
                    },
                    children: `Report Map`
                }, `reporting-submit`)],
                children: g ? (0, M.jsx)(M.Fragment, {
                    children: `Your report was sent to our team. Thanks for keeping Gimkit safe!`
                }) : (0, M.jsxs)(M.Fragment, {
                    children: [`Found a map that breaks our`, ` `, (0, M.jsx)(x, {
                        to: G,
                        external: !0,
                        target: `_blank`,
                        style: {
                            textDecoration: `underline`
                        },
                        children: `Community Guidelines`
                    }), `? Report it here and our team will take a look. Thanks for keeping Gimkit safe!`, (0, M.jsx)(d.TextArea, {
                        placeholder: `Optional comment...`,
                        style: {
                            marginTop: 10
                        },
                        maxLength: 1e3,
                        onChange: e => y(e.target.value)
                    })]
                })
            })]
        })
    },
    q = y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`,
    J = v`
  to { transform: rotate(360deg); }
`,
    Y = y.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,
    ae = y.span`
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: ${J} 0.8s linear infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,
    oe = y.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  max-width: 350px;
  min-height: 64px;
  border: 0;
  border-radius: 10px;
  background: ${E.Purple};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18),
    0 4px 12px rgba(27, 6, 91, 0.18);
  color: white;
  font-family: ${_.SFPro};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  padding: 18px 24px;
  cursor: pointer;
  transition: background 0.15s ease, transform 0.15s ease;

  &:hover:not(:disabled) {
    background: #7e57c2;
    transform: translateY(-2px);
  }
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  &:focus-visible {
    outline: 3px solid white;
    outline-offset: 4px;
  }
  &:disabled {
    opacity: 0.8;
    cursor: wait;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,
    se = y.div`
  font-size: 12px;
  line-height: 1.6;
  margin-top: 16px;
  color: rgba(255, 255, 255, 0.7);
`,
    ce = y.div`
  font-size: 11px;
  line-height: 1.6;
  margin-top: 16px;
  color: rgba(255, 255, 255, 0.5);
`,
    le = e => e.kits.length ? (0, M.jsxs)(X, {
        children: [(0, M.jsxs)(Z, {
            children: [`This map allows players to answer questions.`, (0, M.jsx)(`br`, {}), `Select the kit you would like players to answer questions from:`]
        }), (0, M.jsx)(de, {
            children: e.kits.map(t => (0, M.jsx)(ue, {
                onSelect: () => e.selectKit(t._id),
                title: t.title,
                gif: t.gif
            }, t._id))
        })]
    }) : (0, M.jsx)(X, {
        children: (0, M.jsxs)(Z, {
            children: [`This map has players answer questions from a kit, but you`, ` `, (0, M.jsx)(`b`, {
                children: `do not currently have any kits with questions.`
            }), (0, M.jsx)(`br`, {}), (0, M.jsx)(`br`, {}), (0, M.jsx)(x, {
                to: p,
                style: {
                    color: `#d6c4ff`,
                    textDecoration: `underline`
                },
                children: `Create a kit,`
            }), ` `, `add some questions and then come back here to play this map!`]
        })
    }),
    ue = e => (0, M.jsxs)(fe, {
        type: `button`,
        onClick: e.onSelect,
        children: [(0, M.jsx)(me, {
            style: {
                backgroundImage: `url(${A(e.gif)})`
            }
        }), (0, M.jsx)(Q, {
            children: e.title
        }), (0, M.jsx)(pe, {
            "aria-hidden": `true`,
            children: `→`
        })]
    }),
    X = y(w).attrs({
        className: `maxWidth`
    })``,
    Z = y.div`
  text-align: center;
  width: 100%;
`,
    de = y.div`
  display: grid;
  width: 100%;
  gap: 12px;
  margin-top: 24px;
`,
    fe = y.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: background 0.15s ease, border-color 0.15s ease;
  &:hover {
    background: rgba(103, 58, 183, 0.3);
    border-color: #d6c4ff;
  }
  &:focus-visible {
    outline: 2px solid #d6c4ff;
    outline-offset: 3px;
  }
  &:active {
    background: ${E.Purple};
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,
    pe = y.span`
  margin-left: auto;
  padding-left: 8px;
  color: #d6c4ff;
  font-size: 22px;
`,
    me = y.div.attrs({
        className: `light-shadow`
    })`
  flex-shrink: 0;
  height: 65px;
  width: 65px;
  border-radius: 5px;
  background-size: cover;
`,
    Q = y.div`
  min-width: 0;
  overflow-wrap: anywhere;
  font-weight: ${b.Bold};
  font-size: 16px;
`,
    he = e => {
        let [t, n] = j.useState();
        return !t && e.response.kits ? (0, M.jsx)(le, {
            kits: e.response.kits,
            selectKit: n
        }) : (0, M.jsx)(K, {
            kitId: t
        })
    },
    ge = ({
        response: e
    }) => (0, M.jsxs)(_e, {
        children: [(0, M.jsx)(a, {
            title: `${e.title} | ${f} Creative`,
            override: !0
        }), (0, M.jsxs)(be, {
            children: [(0, M.jsx)(ve, {
                children: (0, M.jsx)(ye, {
                    src: A(e.image),
                    alt: e.title
                })
            }), (0, M.jsx)(P, {
                ...e
            })]
        }), (0, M.jsx)(xe, {
            children: (0, M.jsx)(he, {
                response: e
            })
        })]
    }),
    _e = y(D)`
  box-sizing: border-box;
  width: 90%;
  max-width: 1120px;
  margin: 40px auto;

  @media (max-width: 600px) {
    margin: 24px auto;
    padding: 20px;
  }
`,
    ve = y.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  padding: 8px;
  border: 1px solid rgba(214, 196, 255, 0.35);
  border-radius: 16px;
  background: linear-gradient(
    145deg,
    rgba(214, 196, 255, 0.18),
    rgba(103, 58, 183, 0.18)
  );
  box-shadow: 0 8px 28px rgba(27, 6, 91, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
`,
    ye = y.img`
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  border-radius: 9px;
  object-fit: contain;
  object-position: center;
`,
    be = y.div`
  display: grid;
  grid-template-columns: minmax(0, 400px) minmax(0, 1fr);
  gap: 36px;
  align-items: center;

  @media (max-width: 760px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }
`,
    xe = y.div`
  min-width: 0;
  margin-top: 32px;
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`,
    Se = () => {
        let {
            id: e
        } = c(), {
            data: t,
            isLoading: n,
            error: r
        } = re(e);
        if (n) return (0, M.jsx)($, {
            children: (0, M.jsx)(T, {
                style: {
                    color: E.White,
                    marginTop: 50
                }
            })
        });
        if (r) {
            var i;
            return (0, M.jsx)($, {
                children: (0, M.jsxs)(w, {
                    className: `light-shadow`,
                    style: {
                        background: `rgba(255,255,255,0.1)`,
                        padding: 30,
                        borderRadius: 8,
                        width: `90%`,
                        marginTop: 25,
                        maxWidth: 500
                    },
                    children: [(0, M.jsx)(`div`, {
                        children: (0, M.jsx)(S, {
                            name: `fas fa-exclamation-triangle`,
                            style: {
                                color: E.Yellow,
                                fontSize: 42,
                                marginBottom: 20
                            }
                        })
                    }), (0, M.jsx)(`div`, {
                        style: {
                            fontSize: 16
                        },
                        children: (r == null || (i = r.message) == null ? void 0 : i.text) || `There was an error. Please refresh and try again.`
                    })]
                })
            })
        }
        return t ? (0, M.jsx)(ge, {
            response: t
        }) : null
    },
    $ = y.div.attrs({
        className: `maxWidth flex-center`
    })`
  padding: 35px 0px;
`;
export {
    Se as
    default
};