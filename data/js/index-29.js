import {
    r as t,
    aF as B,
    al as $,
    bY as F,
    aS as f,
    am as G,
    b_ as M
} from "./_index.js";
import {
    S as r
} from "./index-8.js";
const {
    Option: C
} = r;

function g(e) {
    return (e == null ? void 0 : e.type) && (e.type.isSelectOption || e.type.isSelectOptGroup)
}
const T = (e, N) => {
        var a, i;
        const {
            prefixCls: y,
            className: E,
            popupClassName: P,
            dropdownClassName: b,
            children: c,
            dataSource: m,
            dropdownStyle: _,
            dropdownRender: w,
            popupRender: I,
            onDropdownVisibleChange: R,
            onOpenChange: h,
            styles: n,
            classNames: s
        } = e, l = B(c), p = ((a = n == null ? void 0 : n.popup) === null || a === void 0 ? void 0 : a.root) || _, A = ((i = s == null ? void 0 : s.popup) === null || i === void 0 ? void 0 : i.root) || P || b, j = I || w, z = h || R;
        let u;
        l.length === 1 && t.isValidElement(l[0]) && !g(l[0]) && ([u] = l);
        const D = u ? () => u : void 0;
        let d;
        l.length && g(l[0]) ? d = c : d = m ? m.map(o => {
            if (t.isValidElement(o)) return o;
            switch (typeof o) {
                case "string":
                    return t.createElement(C, {
                        key: o,
                        value: o
                    }, o);
                case "object": {
                    const {
                        value: O
                    } = o;
                    return t.createElement(C, {
                        key: O,
                        value: O
                    }, o.text)
                }
                default:
                    return
            }
        }) : [];
        const {
            getPrefixCls: V
        } = t.useContext($), v = V("select", y), [k] = F("SelectLike", p == null ? void 0 : p.zIndex);
        return t.createElement(r, Object.assign({
            ref: N,
            suffixIcon: null
        }, f(e, ["dataSource", "dropdownClassName", "popupClassName"]), {
            prefixCls: v,
            classNames: {
                popup: {
                    root: A
                },
                root: s == null ? void 0 : s.root
            },
            styles: {
                popup: {
                    root: Object.assign(Object.assign({}, p), {
                        zIndex: k
                    })
                },
                root: n == null ? void 0 : n.root
            },
            className: G(`${v}-auto-complete`, E),
            mode: r.SECRET_COMBOBOX_MODE_DO_NOT_USE,
            popupRender: j,
            onOpenChange: z,
            getInputElement: D
        }), d)
    },
    x = t.forwardRef(T),
    {
        Option: U
    } = r,
    Y = M(x, "dropdownAlign", e => f(e, ["visible"])),
    S = x;
S.Option = U;
S._InternalPanelDoNotUseOrYouWillBeFired = Y;
export {
    S as A
};