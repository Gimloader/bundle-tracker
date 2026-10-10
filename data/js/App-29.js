import {
    o as e
} from "./rolldown-runtime.js";
import {
    C as t,
    h as n,
    v as r
} from "./utils.js";
import {
    t as i
} from "./react-1.js";
import {
    l as a
} from "./dist-3.js";
import {
    t as o
} from "./modal.js";
import {
    t as s
} from "./spin.js";
import "./Paths.js";
import {
    t as c
} from "./jsx-runtime.js";
import {
    m as l
} from "./_index.js";
import {
    t as u
} from "./NavigateTo.js";
import {
    t as d
} from "./TrackEvent.js";
var f = e(i()),
    p = c(),
    m = () => {
        let {
            id: e
        } = a();
        return f.useEffect(() => {
            t({
                url: `/api/bulk/join`,
                method: `post`,
                data: {
                    id: e
                },
                success: e => {
                    var t;
                    let i = r(),
                        a = String((t = n()) == null ? void 0 : t.type),
                        s = () => {
                            if (!i) {
                                var t;
                                d({
                                    event: `upgrade`,
                                    properties: {
                                        plan: (t = n()) == null ? void 0 : t.type,
                                        source: `group`
                                    },
                                    forcePostHog: !0
                                })
                            }
                            d({
                                event: `group_join`,
                                properties: {
                                    currentPlan: a
                                },
                                forcePostHog: !0
                            }), u(`/me`), o.success({
                                title: `Joined Group License!`,
                                content: e && e.message ? e.message : ``
                            })
                        };
                    l({
                        onSuccess: s,
                        onError: s
                    })
                },
                error: e => {
                    u(`/me`), e && e.message && e.message.text ? o.error({
                        title: `Error joining group`,
                        content: e.message.text
                    }) : o.error({
                        title: `Error joining subscription`,
                        content: `Please try again`
                    })
                }
            })
        }, []), (0, p.jsx)(`div`, {
            className: `maxWidth maxHeight flex hc vc`,
            children: (0, p.jsx)(s, {
                size: `large`
            })
        })
    };
export {
    m as
    default
};