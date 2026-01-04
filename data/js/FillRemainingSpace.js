import {
    r as s,
    x as c,
    j as h
} from "./_index.js";
var a = function() {
        return a = Object.assign || function(e) {
            for (var i, n = 1, t = arguments.length; n < t; n++) {
                i = arguments[n];
                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
            }
            return e
        }, a.apply(this, arguments)
    },
    v = function(e, i) {
        var n = {};
        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && i.indexOf(t) < 0 && (n[t] = e[t]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var r = 0, t = Object.getOwnPropertySymbols(e); r < t.length; r++) i.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[r]) && (n[t[r]] = e[t[r]]);
        return n
    },
    u = !1,
    g = s.forwardRef(function(e, i) {
        var n = e.style,
            t = v(e, ["style"]),
            r = l();
        !u && (n != null && n.height) && (u = !0, console.warn("<Div100vh /> overrides the height property of the style prop"));
        var o = a(a({}, n), {
            height: r ? r + "px" : "100vh"
        });
        return c.createElement("div", a({
            ref: i,
            style: o
        }, t))
    });
g.displayName = "Div100vh";

function l() {
    var e = s.useState(f),
        i = e[0],
        n = e[1],
        t = y();
    return s.useEffect(function() {
        if (!t) return;

        function r() {
            var o = f();
            n(o)
        }
        return window.addEventListener("resize", r),
            function() {
                return window.removeEventListener("resize", r)
            }
    }, [t]), t ? i : null
}

function f() {
    return d() ? window.innerHeight : null
}

function y() {
    var e = s.useState(!1),
        i = e[0],
        n = e[1];
    return s.useEffect(function() {
        d() && n(!0)
    }, []), i
}

function d() {
    return typeof window < "u" && typeof document < "u"
}
const O = e => {
    const i = l();
    return h.jsx("div", {
        style: {
            height: i,
            width: "100%"
        },
        className: e.className,
        children: e.children
    })
};
export {
    O as F
};