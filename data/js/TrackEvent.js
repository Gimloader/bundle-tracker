import {
    K as e,
    W as t,
    h as n
} from "./utils.js";
import "./TrackPostHogEvent.js";
var r = r => {
    var i, a;
    if (window.gtag && !((i = r.blockedSource) != null && i.google) && window.gtag(`event`, r.event, r.properties), t.educatorOnly) {
        var o;
        if (((o = n()) == null ? void 0 : o.accountType) !== e.educator) return
    }(a = r.blockedSource) != null && a.posthog || (r.event, r.properties, r.forcePostHog)
};
export {
    r as t
};