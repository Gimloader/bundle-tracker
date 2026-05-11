import {
    n as m,
    r as d,
    a as f,
    j as a,
    S as x,
    $ as i,
    M as t,
    f as j,
    l as n,
    W as h
} from "./_index.js";
import {
    N as c
} from "./NavigateTo.js";
import {
    A as p
} from "./TrackEvent.js";
import "./TrackPostHogEvent.js";
const k = () => {
    const {
        id: u
    } = m();
    return d.useEffect(() => {
        f({
            url: "/api/bulk/join",
            method: "post",
            data: {
                id: u
            },
            success: e => {
                var s;
                const g = j(),
                    l = String((s = n()) == null ? void 0 : s.type),
                    r = () => {
                        var o;
                        g || p({
                            event: "upgrade",
                            properties: {
                                plan: (o = n()) == null ? void 0 : o.type,
                                source: "group"
                            },
                            forcePostHog: !0
                        }), p({
                            event: "group_join",
                            properties: {
                                currentPlan: l
                            },
                            forcePostHog: !0
                        }), c(i), t.success({
                            title: "Joined Group License!",
                            content: e && e.message ? e.message : ""
                        })
                    };
                h({
                    onSuccess: r,
                    onError: r
                })
            },
            error: e => {
                c(i), e && e.message && e.message.text ? t.error({
                    title: "Error joining group",
                    content: e.message.text
                }) : t.error({
                    title: "Error joining subscription",
                    content: "Please try again"
                })
            }
        })
    }, []), a.jsx("div", {
        className: "maxWidth maxHeight flex hc vc",
        children: a.jsx(x, {
            size: "large"
        })
    })
};
export {
    k as
    default
};