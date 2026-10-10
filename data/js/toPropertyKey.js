import {
    t as e
} from "./rolldown-runtime.js";
import {
    t
} from "./typeof.js";
var n = e(((e, n) => {
        var r = t().default;

        function i(e, t) {
            if (r(e) != `object` || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (n !== void 0) {
                var i = n.call(e, t || `default`);
                if (r(i) != `object`) return i;
                throw TypeError(`@@toPrimitive must return a primitive value.`)
            }
            return (t === `string` ? String : Number)(e)
        }
        n.exports = i, n.exports.__esModule = !0, n.exports.default = n.exports
    })),
    r = e(((e, r) => {
        var i = t().default,
            a = n();

        function o(e) {
            var t = a(e, `string`);
            return i(t) == `symbol` ? t : t + ``
        }
        r.exports = o, r.exports.__esModule = !0, r.exports.default = r.exports
    }));
export {
    r as t
};