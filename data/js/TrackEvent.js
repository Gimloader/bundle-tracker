import {
    l as r,
    ab as n
} from "./_index.js";
import {
    T as p
} from "./TrackPostHogEvent.js";
const s = e => {
    var o, t, c;
    window.gtag && !((o = e.blockedSource) != null && o.google) && window.gtag("event", e.event, e.properties), ((t = r()) == null ? void 0 : t.accountType) === n.educator && ((c = e.blockedSource) != null && c.posthog || p({
        event: e.event,
        properties: e.properties,
        force: e.forcePostHog
    }))
};
export {
    s as A
};