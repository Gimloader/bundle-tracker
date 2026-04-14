import {
    ac as f,
    a3 as c,
    f as h,
    W as m,
    M as s,
    a as x,
    l as b,
    $ as d,
    a2 as v,
    t as S,
    V as k,
    r as w,
    i as y,
    j as e,
    S as E,
    F as j,
    d as l,
    e as a,
    U
} from "./_index.js";
import {
    o as A
} from "./mobxreact.esm.js";
import {
    s as i
} from "./stores.js";
import {
    N as u
} from "./NavigateTo.js";
import {
    A as T
} from "./TrackEvent.js";
import "./TrackPostHogEvent.js";
const P = "An error ocurred on our end while upgrading your account. Please contact support.",
    C = t => {
        i.navigation.loadingTokenSubmit = !0;
        const o = () => {
                const r = h();
                m({
                    onSuccess: () => {
                        var n;
                        r || T({
                            event: "upgrade",
                            properties: {
                                plan: (n = b()) == null ? void 0 : n.type,
                                source: "individual"
                            },
                            forcePostHog: !0
                        }), window.location.href = d + "?from=upgrade"
                    },
                    onError: () => s.success({
                        title: "Upgraded!",
                        content: "You have upgraded but must log out and back in first.",
                        onOk: () => x({
                            url: "/logout",
                            both: () => window.open("/login", "_self")
                        })
                    })
                })
            },
            g = () => {
                s.success({
                    title: "The purchase has been completed",
                    onOk: () => u(v)
                })
            },
            p = r => {
                i.navigation.loadingTokenSubmit = !1, S({
                    e: r,
                    default: {
                        title: "Error ocurred when upgrading account",
                        content: P
                    }
                })
            };
        f({
            sessionId: t,
            onSuccess: c() ? o : g,
            onError: p
        })
    },
    H = A(() => {
        const t = k("session_id");
        w.useEffect(() => {
            if (y()) {
                u(d);
                return
            }
            t && C(t)
        }, []);
        const o = () => t ? e.jsxs("div", {
            className: "maxWidth flex hc vc flex-column",
            children: [e.jsx(E, {
                size: "large"
            }), c() && e.jsx("div", {
                style: {
                    fontSize: 23,
                    fontWeight: j.UltraBold
                },
                children: "Upgrading your account..."
            }), e.jsx("div", {
                style: {
                    fontSize: 16
                },
                children: "Please don't close this tab"
            })]
        }) : (s.error({
            title: "An error ocurred during checkout. Please contact customer support"
        }), null);
        return e.jsx(O, {
            children: e.jsx(W, {
                children: o()
            })
        })
    }),
    O = l.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,
    W = l.div.attrs({
        className: "scroll-y"
    })`
  background: ${a.White};
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);
  width: 640px;
  max-width: 90%;
  max-height: 90%;
  font-family: ${U.SFPro};
  color: ${a.Black};
`;
export {
    H as
    default
};