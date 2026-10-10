import {
    o as e
} from "./rolldown-runtime.js";
import {
    m as t
} from "./utils.js";
import {
    t as n
} from "./react-1.js";
var r = e(n()),
    i = () => (r.useEffect(() => {
        if (window.location.href.includes(`/group-subscription/complete`)) {
            let e = t(`subscriptionId`);
            if (!e) {
                let t = window.location.pathname.split(`/`);
                e = t[t.length - 1]
            }
            window.location.href = `/group-subscription/complete?subscriptionId=${e}`
        }
    }, []), null);
export {
    i as
    default
};