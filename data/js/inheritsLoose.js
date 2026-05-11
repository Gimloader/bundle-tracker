import {
    d8 as e
} from "./_index.js";

function p(o, t) {
    o.prototype = Object.create(t.prototype), o.prototype.constructor = o, e(o, t)
}
export {
    p as _
};