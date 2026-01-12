import {
    j as e,
    F as m,
    u as f,
    r as l,
    c as b,
    e as h,
    d as a,
    a as d,
    T as w,
    a4 as k,
    D as j,
    U as y
} from "./_index.js";
import {
    C as v
} from "./CircularProgress.js";
import {
    l as T
} from "./index-21.js";
import {
    A as C
} from "./AccessibleAnchor.js";
import {
    g as F
} from "./getCloudinaryUrl.js";
import {
    P as W
} from "./Paper.js";
import "./capitalize.js";
import "./inheritsLoose.js";
const S = () => e.jsxs("div", {
        children: [e.jsx("div", {
            style: {
                fontWeight: m.Bold,
                fontSize: 32
            },
            children: "Gimkit Compatibility Check"
        }), e.jsx("div", {
            style: {
                fontSize: 16,
                marginTop: 3
            },
            children: "If any of these tests fail, then please contact your school's IT staff and share info on how to fix the failed test. They will need to change your firewall settings to get Gimkit to work."
        })]
    }),
    G = o => {
        const [t, , s] = f(!0), [n, i] = l.useState(!1), r = () => {
            i(!0), s()
        }, g = () => {
            i(!1), s()
        };
        return l.useEffect(() => {
            o(r, g)
        }, []), {
            loading: t,
            passed: n
        }
    },
    L = o => {
        const {
            loading: t,
            passed: s
        } = G(o.test.test), n = l.useMemo(() => t ? "#4251af" : s ? "#388e3c" : "#f44336", [t, s]), i = l.useMemo(() => t ? "Running Test" : s ? "Test Passed" : "Test Failed", [t, s]);
        l.useEffect(() => {
            s && o.onPass()
        }, [s]);
        const r = !t && !s;
        return e.jsx(b, {
            hoverable: !0,
            style: {
                marginBottom: 15
            },
            children: e.jsxs(P, {
                children: [e.jsxs(I, {
                    children: [t ? e.jsx(v, {
                        size: 14
                    }) : null, e.jsx("div", {
                        style: {
                            marginLeft: t ? 8 : 0,
                            color: n
                        },
                        children: i
                    })]
                }), e.jsx(M, {
                    style: {
                        color: !s && !t ? n : h.Black
                    },
                    children: o.test.name
                }), o.test.description && t ? e.jsx(z, {
                    children: o.test.description
                }) : null, r ? e.jsxs(e.Fragment, {
                    children: [e.jsxs(B, {
                        children: [e.jsx(p, {
                            children: "What It Means"
                        }), e.jsx(u, {
                            children: o.test.whatItMeans
                        })]
                    }), e.jsxs($, {
                        children: [e.jsx(p, {
                            children: "How To Fix"
                        }), e.jsx(u, {
                            children: o.test.howToFix
                        })]
                    })]
                }) : null]
            })
        })
    },
    P = a.div`
  color: ${h.Black};
`,
    I = a.div.attrs({
        className: "flex vc"
    })`
  font-size: 16px;
`,
    M = a.div`
  margin-top: 1px;
  font-size: 21px;
  font-weight: ${m.Bold};
`,
    z = a.div`
  font-size: 16px;
  opacity: 0.8;
  margin-top: 2px;
`,
    B = a.div.attrs({
        className: "maxWidth"
    })`
  background: #f5f5f5;
  border: 2px #78909c solid;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
`,
    p = a.div`
  font-style: italic;
  font-weight: ${m.Bold};
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`,
    u = a.div`
  margin-top: 5px;
`,
    $ = a.div.attrs({
        className: "maxWidth"
    })`
  background: #f1f8e9;
  border: 2px #66bb6a solid;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
`,
    c = o => e.jsx("div", {
        style: {
            border: "2px solid",
            fontFamily: "monospace",
            padding: "3px 10px",
            background: "#f5f5f5",
            color: "#4527a0",
            display: "inline-block",
            borderRadius: 2,
            margin: "2px 4px"
        },
        children: o.children
    }),
    E = {
        name: "Firewall check on *.gimkitconnect.com",
        whatItMeans: e.jsx("span", {
            children: "You won't be able to connect to our game servers. This will prevent you from hosting or participating in games."
        }),
        howToFix: e.jsxs("span", {
            children: ["Unblock ", e.jsx(c, {
                children: "https://*.gimkitconnect.com"
            }), ". Please note this is a wildcard. Gimkit needs access to every subdomain on", " ", e.jsx(c, {
                children: "gimkitconnect.com"
            }), "."]
        }),
        test: (o, t) => {
            d({
                url: "/api/matchmaker/find-server-to-host-game",
                method: "post",
                data: {
                    source: "original"
                },
                success: s => {
                    s && s.url ? d({
                        url: s.url + "/hello",
                        success: () => o(),
                        error: n => t()
                    }) : t()
                },
                error: s => t()
            })
        }
    },
    N = {
        name: "WebSocket connection to *.gimkitconnect.com",
        description: "This test takes 60 seconds to complete.",
        whatItMeans: e.jsx("span", {
            children: "You won't be able to connect to our game servers. This will prevent you from hosting & participating in all game modes."
        }),
        howToFix: e.jsxs("span", {
            children: ["Unblock both of the following domains:", e.jsxs("ul", {
                children: [e.jsx("li", {
                    children: e.jsx(c, {
                        children: "https://*.gimkitconnect.com"
                    })
                }), e.jsx("li", {
                    children: e.jsx(c, {
                        children: "wss://*.gimkitconnect.com"
                    })
                })]
            }), "Note that these are both wildcards. Gimkit needs access to every subdomain for both HTTP Requests & WebSockets on", " ", e.jsx(c, {
                children: "gimkitconnect.com"
            }), " to work properly.", e.jsx("br", {}), " ", e.jsx("br", {}), "If the firewall check test below passed, this is most likely an issue with your school's proxy network. Gimkit requires secure Websockets, which can cause issues with some proxy servers. You may need to allow", " ", e.jsx(c, {
                children: "*.gimkitconnect.com"
            }), " in your proxy’s security settings. SSL is used to encrypt data between devices and servers. Networks that monitor SSL activity sometimes replace our certificates with those of the monitoring service. This can cause authentication errors.", " ", e.jsx(c, {
                children: "*.gimkitconnect.com"
            }), "may need to bypass network monitoring."]
        }),
        test: (o, t) => {
            d({
                url: "/api/matchmaker/find-server-to-host-game",
                method: "post",
                data: {
                    source: "map"
                },
                success: s => {
                    s && s.url ? new T.Client(s.url.replace("http", "ws")).create("ConnectionTest").then(i => {
                        let r = !1;
                        setTimeout(() => {
                            r || (r = !0, o())
                        }, 55e3), i.onLeave(() => {
                            r || (r = !0, t())
                        }), i.onError(() => {
                            r || (r = !0, t())
                        })
                    }).catch(i => {
                        t()
                    }) : t()
                },
                error: s => t()
            })
        }
    },
    Y = {
        name: "Firewall check on media.gimkit.com",
        whatItMeans: e.jsx("span", {
            children: "You won't be able to view uploaded images & audio."
        }),
        howToFix: e.jsxs("span", {
            children: ["Unblock ", e.jsx(c, {
                children: "media.gimkit.com"
            }), "."]
        }),
        test: (o, t) => {
            d({
                url: F("https://res.cloudinary.com/gimkit-production/image/upload/v1574562821/btwjkzsjb3vvd5nroxi9.png"),
                success: o,
                error: t
            })
        }
    },
    D = {
        name: "Firewall check on images.pexels.com",
        whatItMeans: e.jsx("span", {
            children: "You won't be able to view cover photos for kits."
        }),
        howToFix: e.jsxs("span", {
            children: ["Unblock ", e.jsx(c, {
                children: "images.pexels.com"
            }), "."]
        }),
        test: (o, t) => {
            d({
                url: "https://images.pexels.com/photos/64296/pexels-photo-64296.jpeg",
                success: o,
                error: t
            })
        }
    },
    H = {
        name: "WebGL support",
        whatItMeans: e.jsx("span", {
            children: "You will not be able to play/host 2D game modes"
        }),
        howToFix: e.jsxs("span", {
            children: ["2D game modes utilize 2D graphics. To make this work, we use use a technology called WebGL.", e.jsx("br", {}), " ", e.jsx("br", {}), "This test failing most likely means you have WebGL disabled for your browser. Follow the steps in this article to enable WebGL for your browser:", " ", e.jsx(C, {
                to: "https://help.gimkit.com/en/article/how-to-enable-webgl-1wk7fgn",
                external: !0,
                children: "https://help.gimkit.com/en/article/how-to-enable-webgl-1wk7fgn"
            })]
        }),
        test: (o, t) => {
            (() => {
                try {
                    const i = document.createElement("canvas");
                    return !!(window.WebGLRenderingContext && (i.getContext("webgl") || i.getContext("experimental-webgl")))
                } catch {
                    return !1
                }
            })() ? o(): t()
        }
    },
    x = [N, E, Y, H, D],
    Z = () => {
        const [o, t] = l.useState(0), s = () => t(n => n + 1);
        return e.jsxs(U, {
            children: [e.jsx(w, {
                title: "Compatibility Check"
            }), e.jsxs(A, {
                children: [e.jsx(S, {}), o === x.length ? e.jsx(k, {
                    type: "success",
                    style: {
                        marginTop: 15
                    },
                    showIcon: !0,
                    message: "All Test Passed!",
                    description: "You should be all set to access everything in Gimkit properly!"
                }) : null, e.jsx(j, {}), x.map(n => e.jsx(L, {
                    test: n,
                    onPass: s
                }, n.name))]
            })]
        })
    },
    U = a.div.attrs({
        className: "flex hc"
    })`
  flex: 1;
  background: ${h.Snow};
  font-family: ${y.SFPro};
  color: ${h.Black};
`,
    A = a(W)`
  width: 90%;
  max-width: 750px;
  margin: 40px 0px;
  border-radius: 8px;
  padding: 40px;
`;
export {
    Z as
    default
};