import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    E as n,
    x as r
} from "./Compact.js";
import {
    a as i
} from "./InfoCircleFilled.js";
var a = e(t());

function o(e) {
    return t => a.createElement(i, {
        theme: {
            token: {
                motion: !1,
                zIndexPopupBase: 0
            }
        }
    }, a.createElement(e, Object.assign({}, t)))
}
var s = (e, t, i, s, c) => o(o => {
    let {
        prefixCls: l,
        style: u
    } = o, d = a.useRef(null), [f, p] = a.useState(0), [m, h] = a.useState(0), [g, _] = r(!1, {
        value: o.open
    }), {
        getPrefixCls: v
    } = a.useContext(n), y = v(s || `select`, l);
    a.useEffect(() => {
        if (_(!0), typeof ResizeObserver < `u`) {
            let e = new ResizeObserver(e => {
                    let t = e[0].target;
                    p(t.offsetHeight + 8), h(t.offsetWidth)
                }),
                t = setInterval(() => {
                    var n;
                    let r = c ? `.${c(y)}` : `.${y}-dropdown`,
                        i = (n = d.current) == null ? void 0 : n.querySelector(r);
                    i && (clearInterval(t), e.observe(i))
                }, 10);
            return () => {
                clearInterval(t), e.disconnect()
            }
        }
    }, []);
    let b = Object.assign(Object.assign({}, o), {
        style: Object.assign(Object.assign({}, u), {
            margin: 0
        }),
        open: g,
        visible: g,
        getPopupContainer: () => d.current
    });
    i && (b = i(b)), t && Object.assign(b, {
        [t]: {
            overflow: {
                adjustX: !1,
                adjustY: !1
            }
        }
    });
    let x = {
        paddingBottom: f,
        position: `relative`,
        minWidth: m
    };
    return a.createElement(`div`, {
        ref: d,
        style: x
    }, a.createElement(e, Object.assign({}, b)))
});
export {
    o as n, s as t
};