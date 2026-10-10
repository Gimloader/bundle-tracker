import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    t as n
} from "./jsx-runtime.js";
var r = e(t()),
    i = function() {
        return i = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }, i.apply(this, arguments)
    },
    a = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    o = !1,
    s = (0, r.forwardRef)(function(e, t) {
        var n = e.style,
            s = a(e, [`style`]),
            l = c();
        !o && n != null && n.height && (o = !0, console.warn(`<Div100vh /> overrides the height property of the style prop`));
        var u = i(i({}, n), {
            height: l ? l + `px` : `100vh`
        });
        return r.createElement(`div`, i({
            ref: t,
            style: u
        }, s))
    });
s.displayName = `Div100vh`;

function c() {
    var e = (0, r.useState)(l),
        t = e[0],
        n = e[1],
        i = u();
    return (0, r.useEffect)(function() {
        if (!i) return;

        function e() {
            n(l())
        }
        return window.addEventListener(`resize`, e),
            function() {
                return window.removeEventListener(`resize`, e)
            }
    }, [i]), i ? t : null
}

function l() {
    return d() ? window.innerHeight : null
}

function u() {
    var e = (0, r.useState)(!1),
        t = e[0],
        n = e[1];
    return (0, r.useEffect)(function() {
        d() && n(!0)
    }, []), t
}

function d() {
    return typeof window < `u` && typeof document < `u`
}
var f = n(),
    p = e => {
        let t = c();
        return (0, f.jsx)(`div`, {
            style: {
                height: t,
                width: `100%`
            },
            className: e.className,
            children: e.children
        })
    };
export {
    p as t
};