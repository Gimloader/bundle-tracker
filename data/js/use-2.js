import {
    r as t
} from "./index-JueF_e_O.js";
import {
    u as a,
    M as u,
    d as r
} from "./motion-C-xmDj6Z.js";

function i(o) {
    const e = a(() => r(o)),
        {
            isStatic: s
        } = t.useContext(u);
    if (s) {
        const [, n] = t.useState(o);
        t.useEffect(() => e.on("change", n), [])
    }
    return e
}
export {
    i as u
};