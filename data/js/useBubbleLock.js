import {
    r as n,
    b1 as $,
    b6 as w,
    b3 as D,
    am as M,
    b5 as g,
    _ as j,
    aZ as m,
    x as V,
    aX as _
} from "./_index.js";
var A = ["prefixCls", "className", "style", "checked", "disabled", "defaultChecked", "type", "title", "onChange"],
    H = n.forwardRef(function(e, a) {
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
            E = $(e, A),
            s = n.useRef(null),
            p = n.useRef(null),
            P = w(y, {
                value: x
            }),
            b = D(P, 2),
            k = b[0],
            N = b[1];
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
        var L = M(c, d, g(g({}, "".concat(c, "-checked"), k), "".concat(c, "-disabled"), o)),
            S = function(t) {
                o || ("checked" in e || N(t.target.checked), i == null || i({
                    target: m(m({}, e), {}, {
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
            checked: !!k,
            type: h
        })), n.createElement("span", {
            className: "".concat(c, "-inner")
        }))
    });

function I(e) {
    const a = V.useRef(null),
        r = () => {
            _.cancel(a.current), a.current = null
        };
    return [() => {
        r(), a.current = _(() => {
            a.current = null
        })
    }, u => {
        a.current && (u.stopPropagation(), r()), e == null || e(u)
    }]
}
export {
    H as C, I as u
};