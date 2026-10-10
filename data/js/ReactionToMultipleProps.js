import {
    m as e
} from "./decorate.js";
var t = (t, n, r) => {
    let i = [];
    return t.forEach(t => {
        let a = e(t, n, r);
        i.push(a)
    }), () => {
        i.forEach(e => {
            e()
        })
    }
};
export {
    t
};