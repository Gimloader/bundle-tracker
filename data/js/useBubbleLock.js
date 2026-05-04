import {
    r as n,
    aD as $,
    aI as w,
    aB as D,
    ao as M,
    aC as g,
    _ as j,
    aF as _,
    z as B,
    b9 as m
} from "./_index.js";
var I = ["prefixCls", "className", "style", "checked", "disabled", "defaultChecked", "type", "title", "onChange"],
    z = n.forwardRef(function(e, a) {
        var r = e.prefixCls,
            c = r === void 0 ? "rc-checkbox" : r,
            d = e.className,
            u = e.style,
            x = e.checked,
            o = e.disabled,
            f = e.defaultChecked,
            y = f === void 0 ? !1 : f,
            v = e.type,
            h = v === void 0 ? "checkbox" : v,
            R = e.title,
            i = e.onChange,
            E = $(e, I),
            s = n.useRef(null),
            p = n.useRef(null),
            P = w(y, {
                value: x
            }),
            k = D(P, 2),
            C = k[0],
            N = k[1];
        n.useImperativeHandle(a, function() {
            return {
                focus: function(t) {
                    var l;
                    (l = s.current) === null || l === void 0 || l.focus(t)
                },
                blur: function() {
                    var t;
                    (t = s.current) === null || t === void 0 || t.blur()
                },
                input: s.current,
                nativeElement: p.current
            }
        });
        var L = M(c, d, g(g({}, "".concat(c, "-checked"), C), "".concat(c, "-disabled"), o)),
            S = function(t) {
                o || ("checked" in e || N(t.target.checked), i == null || i({
                    target: _(_({}, e), {}, {
                        type: h,
                        checked: t.target.checked
                    }),
                    stopPropagation: function() {
                        t.stopPropagation()
                    },
                    preventDefault: function() {
                        t.preventDefault()
                    },
                    nativeEvent: t.nativeEvent
                }))
            };
        return n.createElement("span", {
            className: L,
            title: R,
            style: u,
            ref: p
        }, n.createElement("input", j({}, E, {
            className: "".concat(c, "-input"),
            ref: s,
            onChange: S,
            disabled: o,
            checked: !!C,
            type: h
        })), n.createElement("span", {
            className: "".concat(c, "-inner")
        }))
    });

function A(e) {
    const a = B.useRef(null),
        r = () => {
            m.cancel(a.current), a.current = null
        };
    return [() => {
        r(), a.current = m(() => {
            a.current = null
        })
    }, u => {
        a.current && (u.stopPropagation(), r()), e == null || e(u)
    }]
}
export {
    z as C, A as u
};