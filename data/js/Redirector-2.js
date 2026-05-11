import {
    r as i,
    V as r
} from "./_index.js";
const s = () => (i.useEffect(() => {
    if (window.location.href.includes("/group-subscription/complete")) {
        let t = r("subscriptionId");
        if (!t) {
            const o = window.location.pathname.split("/");
            t = o[o.length - 1]
        }
        window.location.href = `/group-subscription/complete?subscriptionId=${t}`
    }
}, []), null);
export {
    s as
    default
};