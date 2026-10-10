import {
    o as e
} from "./rolldown-runtime.js";
import {
    C as t,
    O as n,
    t as r
} from "./utils.js";
import {
    t as i
} from "./react-1.js";
import {
    t as a
} from "./card.js";
import {
    t as o
} from "./jsx-runtime.js";
import {
    b as s,
    c,
    l,
    n as u,
    s as d,
    y as f
} from "./_index.js";
import {
    t as p
} from "./AccessibleAnchor.js";
import {
    t as m
} from "./Paper.js";
import {
    t as h
} from "./CircularProgress.js";
import {
    t as g
} from "./getCloudinaryUrl.js";
import {
    t as _
} from "./lib-2.js";
var v = e(i()),
    y = o(),
    b = () => (0, y.jsxs)(`div`, {
        children: [(0, y.jsx)(`div`, {
            style: {
                fontWeight: d.Bold,
                fontSize: 32
            },
            children: `Gimkit Compatibility Check`
        }), (0, y.jsx)(`div`, {
            style: {
                fontSize: 16,
                marginTop: 3
            },
            children: `If any of these tests fail, then please contact your school's IT staff and share info on how to fix the failed test. They will need to change your firewall settings to get Gimkit to work.`
        })]
    }),
    x = e => {
        let [t, , r] = n(!0), [i, a] = v.useState(!1), o = () => {
            a(!0), r()
        }, s = () => {
            a(!1), r()
        };
        return v.useEffect(() => {
            e(o, s)
        }, []), {
            loading: t,
            passed: i
        }
    },
    S = e => {
        let {
            loading: t,
            passed: n
        } = x(e.test.test), r = v.useMemo(() => t ? `#4251af` : n ? `#388e3c` : `#f44336`, [t, n]), i = v.useMemo(() => t ? `Running Test` : n ? `Test Passed` : `Test Failed`, [t, n]);
        v.useEffect(() => {
            n && e.onPass()
        }, [n]);
        let o = !t && !n;
        return (0, y.jsx)(a, {
            hoverable: !0,
            style: {
                marginBottom: 15
            },
            children: (0, y.jsxs)(C, {
                children: [(0, y.jsxs)(w, {
                    children: [t ? (0, y.jsx)(h, {
                        size: 14
                    }) : null, (0, y.jsx)(`div`, {
                        style: {
                            marginLeft: t ? 8 : 0,
                            color: r
                        },
                        children: i
                    })]
                }), (0, y.jsx)(T, {
                    style: {
                        color: !n && !t ? r : u.Black
                    },
                    children: e.test.name
                }), e.test.description && t ? (0, y.jsx)(E, {
                    children: e.test.description
                }) : null, o ? (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsxs)(D, {
                        children: [(0, y.jsx)(O, {
                            children: `What It Means`
                        }), (0, y.jsx)(k, {
                            children: e.test.whatItMeans
                        })]
                    }), (0, y.jsxs)(A, {
                        children: [(0, y.jsx)(O, {
                            children: `How To Fix`
                        }), (0, y.jsx)(k, {
                            children: e.test.howToFix
                        })]
                    })]
                }) : null]
            })
        })
    },
    C = l.div`
  color: ${u.Black};
`,
    w = l.div.attrs({
        className: `flex vc`
    })`
  font-size: 16px;
`,
    T = l.div`
  margin-top: 1px;
  font-size: 21px;
  font-weight: ${d.Bold};
`,
    E = l.div`
  font-size: 16px;
  opacity: 0.8;
  margin-top: 2px;
`,
    D = l.div.attrs({
        className: `maxWidth`
    })`
  background: #f5f5f5;
  border: 2px #78909c solid;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
`,
    O = l.div`
  font-style: italic;
  font-weight: ${d.Bold};
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`,
    k = l.div`
  margin-top: 5px;
`,
    A = l.div.attrs({
        className: `maxWidth`
    })`
  background: #f1f8e9;
  border: 2px #66bb6a solid;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
`,
    j = e(_()),
    M = e => (0, y.jsx)(`div`, {
        style: {
            border: `2px solid`,
            fontFamily: `monospace`,
            padding: `3px 10px`,
            background: `#f5f5f5`,
            color: `#4527a0`,
            display: `inline-block`,
            borderRadius: 2,
            margin: `2px 4px`
        },
        children: e.children
    }),
    N = [{
        name: `WebSocket connection to *.gimkitconnect.com`,
        description: `This test takes 60 seconds to complete.`,
        whatItMeans: (0, y.jsx)(`span`, {
            children: `You won't be able to connect to our game servers. This will prevent you from hosting & participating in all game modes.`
        }),
        howToFix: (0, y.jsxs)(`span`, {
            children: [`Unblock both of the following domains:`, (0, y.jsxs)(`ul`, {
                children: [(0, y.jsx)(`li`, {
                    children: (0, y.jsx)(M, {
                        children: `https://*.gimkitconnect.com`
                    })
                }), (0, y.jsx)(`li`, {
                    children: (0, y.jsx)(M, {
                        children: `wss://*.gimkitconnect.com`
                    })
                })]
            }), `Note that these are both wildcards. Gimkit needs access to every subdomain for both HTTP Requests & WebSockets on`, ` `, (0, y.jsx)(M, {
                children: `gimkitconnect.com`
            }), ` to work properly.`, (0, y.jsx)(`br`, {}), ` `, (0, y.jsx)(`br`, {}), `If the firewall check test below passed, this is most likely an issue with your school's proxy network. Gimkit requires secure Websockets, which can cause issues with some proxy servers. You may need to allow`, ` `, (0, y.jsx)(M, {
                children: `*.gimkitconnect.com`
            }), ` in your proxy’s security settings. SSL is used to encrypt data between devices and servers. Networks that monitor SSL activity sometimes replace our certificates with those of the monitoring service. This can cause authentication errors.`, ` `, (0, y.jsx)(M, {
                children: `*.gimkitconnect.com`
            }), `may need to bypass network monitoring.`]
        }),
        test: (e, n) => {
            t({
                url: `/api/matchmaker/find-server-to-host-game`,
                method: `post`,
                data: {
                    source: `map`
                },
                success: t => {
                    t && t.url ? new j.Client(t.url.replace(`http`, `ws`)).create(`ConnectionTest`).then(t => {
                        let r = !1;
                        setTimeout(() => {
                            r || (r = !0, e())
                        }, 55e3), t.onLeave(() => {
                            r || (r = !0, n())
                        }), t.onError(() => {
                            r || (r = !0, n())
                        })
                    }).catch(e => {
                        n()
                    }) : n()
                },
                error: e => n()
            })
        }
    }, {
        name: `Firewall check on *.gimkitconnect.com`,
        whatItMeans: (0, y.jsx)(`span`, {
            children: `You won't be able to connect to our game servers. This will prevent you from hosting or participating in games.`
        }),
        howToFix: (0, y.jsxs)(`span`, {
            children: [`Unblock `, (0, y.jsx)(M, {
                children: `https://*.gimkitconnect.com`
            }), `. Please note this is a wildcard. Gimkit needs access to every subdomain on`, ` `, (0, y.jsx)(M, {
                children: `gimkitconnect.com`
            }), `.`]
        }),
        test: (e, n) => {
            t({
                url: `/api/matchmaker/find-server-to-host-game`,
                method: `post`,
                data: {
                    source: `original`
                },
                success: r => {
                    r && r.url ? t({
                        url: r.url + `/hello`,
                        success: () => e(),
                        error: e => n()
                    }) : n()
                },
                error: e => n()
            })
        }
    }, {
        name: `Firewall check on media.gimkit.com`,
        whatItMeans: (0, y.jsx)(`span`, {
            children: `You won't be able to view uploaded images & audio.`
        }),
        howToFix: (0, y.jsxs)(`span`, {
            children: [`Unblock `, (0, y.jsx)(M, {
                children: `media.gimkit.com`
            }), `.`]
        }),
        test: (e, n) => {
            t({
                url: g(`https://res.cloudinary.com/gimkit-production/image/upload/v1574562821/btwjkzsjb3vvd5nroxi9.png`),
                success: e,
                error: n
            })
        }
    }, {
        name: `WebGL support`,
        whatItMeans: (0, y.jsx)(`span`, {
            children: `You will not be able to play/host 2D game modes`
        }),
        howToFix: (0, y.jsxs)(`span`, {
            children: [`2D game modes utilize 2D graphics. To make this work, we use use a technology called WebGL.`, (0, y.jsx)(`br`, {}), ` `, (0, y.jsx)(`br`, {}), `This test failing most likely means you have WebGL disabled for your browser. Follow the steps in this article to enable WebGL for your browser:`, ` `, (0, y.jsx)(p, {
                to: `https://help.gimkit.com/en/article/how-to-enable-webgl-1wk7fgn`,
                external: !0,
                children: `https://help.gimkit.com/en/article/how-to-enable-webgl-1wk7fgn`
            })]
        }),
        test: (e, t) => {
            (() => {
                try {
                    let e = document.createElement(`canvas`);
                    return !!(window.WebGLRenderingContext && (e.getContext(`webgl`) || e.getContext(`experimental-webgl`)))
                } catch {
                    return !1
                }
            })() ? e(): t()
        }
    }, {
        name: `Firewall check on images.pexels.com`,
        whatItMeans: (0, y.jsx)(`span`, {
            children: `You won't be able to view cover photos for kits.`
        }),
        howToFix: (0, y.jsxs)(`span`, {
            children: [`Unblock `, (0, y.jsx)(M, {
                children: `images.pexels.com`
            }), `.`]
        }),
        test: (e, n) => {
            t({
                url: `https://images.pexels.com/photos/64296/pexels-photo-64296.jpeg`,
                success: e,
                error: n
            })
        }
    }],
    P = () => {
        let [e, t] = v.useState(0), n = () => t(e => e + 1);
        return (0, y.jsxs)(F, {
            children: [(0, y.jsx)(r, {
                title: `Compatibility Check`
            }), (0, y.jsxs)(I, {
                children: [(0, y.jsx)(b, {}), e === N.length ? (0, y.jsx)(s, {
                    type: `success`,
                    style: {
                        marginTop: 15
                    },
                    showIcon: !0,
                    message: `All Test Passed!`,
                    description: `You should be all set to access everything in Gimkit properly!`
                }) : null, (0, y.jsx)(f, {}), N.map(e => (0, y.jsx)(S, {
                    test: e,
                    onPass: n
                }, e.name))]
            })]
        })
    },
    F = l.div.attrs({
        className: `flex hc`
    })`
  flex: 1;
  background: ${u.Snow};
  font-family: ${c.SFPro};
  color: ${u.Black};
`,
    I = l(m)`
  width: 90%;
  max-width: 750px;
  margin: 40px 0px;
  border-radius: 8px;
  padding: 40px;
`;
export {
    P as
    default
};