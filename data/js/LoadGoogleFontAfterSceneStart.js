import {
    o as e
} from "./rolldown-runtime.js";
import {
    Vt as t
} from "./App-42.js";
var n = e(t()),
    r = [],
    i = e => r.includes(e),
    a = e => {
        let {
            familyName: t,
            onLoad: i
        } = e;
        r.includes(t) ? i && i() : n.default.load({
            google: {
                families: [`${t}:400,700`]
            },
            fontactive: e => {
                r.includes(e) || r.push(e), t === e && i && i()
            }
        })
    };
export {
    i as n, a as t
};