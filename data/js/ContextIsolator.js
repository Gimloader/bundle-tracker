import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    c as n,
    l as r,
    n as i,
    s as a,
    t as o
} from "./assertThisInitialized.js";
import {
    Bt as s,
    Ct as c,
    Dt as l,
    Et as u,
    Ft as d,
    Ht as f,
    It as p,
    J as m,
    Lt as h,
    Mt as g,
    Nt as _,
    Tt as v,
    Vt as y,
    _ as b,
    _t as x,
    at as S,
    bt as ee,
    ct as C,
    dt as w,
    et as te,
    ft as ne,
    gt as T,
    ht as E,
    lt as D,
    mt as re,
    n as ie,
    nt as O,
    ot as ae,
    pt as oe,
    tt as se,
    ut as k,
    vt as ce,
    wt as A,
    xt as le,
    yt as ue,
    zt as j
} from "./Compact.js";
import {
    _ as M,
    a as de,
    i as fe,
    o as N
} from "./color.js";
import {
    t as pe
} from "./dist-2.js";
import {
    t as me
} from "./wrapNativeSuper.js";
var P = e(t()),
    he = e(r());
n(), f(), h(), l(), v(), i(), T(), k(), O(), re(), ee(), ce(), ne();

function ge(e) {
    return oe(e) || ue(e) || x(e) || w()
}

function F(e, t) {
    for (var n = e, r = 0; r < t.length; r += 1) {
        if (n == null) return;
        n = n[t[r]]
    }
    return n
}

function _e(e, t, n, r) {
    if (!t.length) return n;
    var i = ge(t),
        a = i[0],
        o = i.slice(1),
        s = !e && typeof a == `number` ? [] : Array.isArray(e) ? E(e) : d({}, e);
    return r && n === void 0 && o.length === 1 ? delete s[a][o[0]] : s[a] = _e(s[a], o, n, r), s
}

function I(e, t, n) {
    var r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    return t.length && r && n === void 0 && !F(e, t.slice(0, -1)) ? e : _e(e, t, n, r)
}

function ve(e) {
    return y(e) === `object` && e !== null && Object.getPrototypeOf(e) === Object.prototype
}

function ye(e) {
    return Array.isArray(e) ? [] : {}
}
var be = typeof Reflect > `u` ? Object.keys : Reflect.ownKeys;

function L() {
    var e = [...arguments],
        t = ye(e[0]);
    return e.forEach(function(e) {
        function n(r, i) {
            var a = new Set(i),
                o = F(e, r),
                s = Array.isArray(o);
            if (s || ve(o)) {
                if (!a.has(o)) {
                    a.add(o);
                    var c = F(t, r);
                    s ? t = I(t, r, []) : (!c || y(c) !== `object`) && (t = I(t, r, ye(o))), be(o).forEach(function(e) {
                        n([].concat(E(r), [e]), a)
                    })
                }
            } else t = I(t, r, o)
        }
        n([])
    }), t
}

function xe() {}
var Se = P.createContext({}),
    Ce = () => {
        let e = () => {};
        return e.deprecated = xe, e
    },
    R = {
        MAC_ENTER: 3,
        BACKSPACE: 8,
        TAB: 9,
        NUM_CENTER: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        QUESTION_MARK: 63,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLOCK: 144,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        WIN_KEY: 224,
        MAC_FF_META: 224,
        WIN_IME: 229,
        isTextModifyingKeyEvent: function(e) {
            var t = e.keyCode;
            if (e.altKey && !e.ctrlKey || e.metaKey || t >= R.F1 && t <= R.F12) return !1;
            switch (t) {
                case R.ALT:
                case R.CAPS_LOCK:
                case R.CONTEXT_MENU:
                case R.CTRL:
                case R.DOWN:
                case R.END:
                case R.ESC:
                case R.HOME:
                case R.INSERT:
                case R.LEFT:
                case R.MAC_FF_META:
                case R.META:
                case R.NUMLOCK:
                case R.NUM_CENTER:
                case R.PAGE_DOWN:
                case R.PAGE_UP:
                case R.PAUSE:
                case R.PRINT_SCREEN:
                case R.RIGHT:
                case R.SHIFT:
                case R.UP:
                case R.WIN_KEY:
                case R.WIN_KEY_RIGHT:
                    return !1;
                default:
                    return !0
            }
        },
        isCharacterKey: function(e) {
            if (e >= R.ZERO && e <= R.NINE || e >= R.NUM_ZERO && e <= R.NUM_MULTIPLY || e >= R.A && e <= R.Z || window.navigator.userAgent.indexOf(`WebKit`) !== -1 && e === 0) return !0;
            switch (e) {
                case R.SPACE:
                case R.QUESTION_MARK:
                case R.NUM_PLUS:
                case R.NUM_MINUS:
                case R.NUM_PERIOD:
                case R.NUM_DIVISION:
                case R.SEMICOLON:
                case R.DASH:
                case R.EQUALS:
                case R.COMMA:
                case R.PERIOD:
                case R.SLASH:
                case R.APOSTROPHE:
                case R.SINGLE_QUOTE:
                case R.OPEN_SQUARE_BRACKET:
                case R.BACKSLASH:
                case R.CLOSE_SQUARE_BRACKET:
                    return !0;
                default:
                    return !1
            }
        }
    },
    we = P.createContext(void 0),
    z = 100,
    Te = 1e3,
    Ee = {
        Modal: z,
        Drawer: z,
        Popover: z,
        Popconfirm: z,
        Tooltip: z,
        Tour: z,
        FloatButton: z
    },
    De = {
        SelectLike: 50,
        Dropdown: 50,
        DatePicker: 50,
        Menu: 50,
        ImagePreview: 1
    };

function Oe(e) {
    return e in Ee
}
var ke = (e, t) => {
        let [, n] = b(), r = P.useContext(we), i = Oe(e), a;
        if (t !== void 0) a = [t, t];
        else {
            let o = r ?? 0;
            o += i ? (r ? 0 : n.zIndexPopupBase) + Ee[e] : De[e], a = [r === void 0 ? t : o, o]
        }
        return a
    },
    Ae = () => ({
        height: 0,
        opacity: 0
    }),
    je = e => {
        let {
            scrollHeight: t
        } = e;
        return {
            height: t,
            opacity: 1
        }
    },
    Me = e => ({
        height: e ? e.offsetHeight : 0
    }),
    Ne = (e, t) => (t == null ? void 0 : t.deadline) === !0 || t.propertyName === `height`,
    Pe = (e = `ant`) => ({
        motionName: `${e}-motion-collapse`,
        onAppearStart: Ae,
        onEnterStart: Ae,
        onAppearActive: je,
        onEnterActive: je,
        onLeaveStart: Me,
        onLeaveActive: Ae,
        onAppearEnd: Ne,
        onEnterEnd: Ne,
        onLeaveEnd: Ne,
        motionDeadline: 500
    }),
    Fe = (e, t, n) => n === void 0 ? `${e}-${t}` : n,
    Ie = e => ({
        animationDuration: e,
        animationFillMode: `both`
    }),
    Le = e => ({
        animationDuration: e,
        animationFillMode: `both`
    }),
    Re = (e, t, n, r, i = !1) => {
        let a = i ? `&` : ``;
        return {
            [`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: Object.assign(Object.assign({}, Ie(r)), {
                animationPlayState: `paused`
            }),
            [`${a}${e}-leave`]: Object.assign(Object.assign({}, Le(r)), {
                animationPlayState: `paused`
            }),
            [`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]: {
                animationName: t,
                animationPlayState: `running`
            },
            [`${a}${e}-leave${e}-leave-active`]: {
                animationName: n,
                animationPlayState: `running`,
                pointerEvents: `none`
            }
        }
    },
    ze = new M(`antZoomIn`, {
        "0%": {
            transform: `scale(0.2)`,
            opacity: 0
        },
        "100%": {
            transform: `scale(1)`,
            opacity: 1
        }
    }),
    Be = new M(`antZoomOut`, {
        "0%": {
            transform: `scale(1)`
        },
        "100%": {
            transform: `scale(0.2)`,
            opacity: 0
        }
    }),
    Ve = new M(`antZoomBigIn`, {
        "0%": {
            transform: `scale(0.8)`,
            opacity: 0
        },
        "100%": {
            transform: `scale(1)`,
            opacity: 1
        }
    }),
    He = new M(`antZoomBigOut`, {
        "0%": {
            transform: `scale(1)`
        },
        "100%": {
            transform: `scale(0.8)`,
            opacity: 0
        }
    }),
    Ue = new M(`antZoomUpIn`, {
        "0%": {
            transform: `scale(0.8)`,
            transformOrigin: `50% 0%`,
            opacity: 0
        },
        "100%": {
            transform: `scale(1)`,
            transformOrigin: `50% 0%`
        }
    }),
    We = new M(`antZoomUpOut`, {
        "0%": {
            transform: `scale(1)`,
            transformOrigin: `50% 0%`
        },
        "100%": {
            transform: `scale(0.8)`,
            transformOrigin: `50% 0%`,
            opacity: 0
        }
    }),
    Ge = new M(`antZoomLeftIn`, {
        "0%": {
            transform: `scale(0.8)`,
            transformOrigin: `0% 50%`,
            opacity: 0
        },
        "100%": {
            transform: `scale(1)`,
            transformOrigin: `0% 50%`
        }
    }),
    Ke = new M(`antZoomLeftOut`, {
        "0%": {
            transform: `scale(1)`,
            transformOrigin: `0% 50%`
        },
        "100%": {
            transform: `scale(0.8)`,
            transformOrigin: `0% 50%`,
            opacity: 0
        }
    }),
    qe = new M(`antZoomRightIn`, {
        "0%": {
            transform: `scale(0.8)`,
            transformOrigin: `100% 50%`,
            opacity: 0
        },
        "100%": {
            transform: `scale(1)`,
            transformOrigin: `100% 50%`
        }
    }),
    Je = new M(`antZoomRightOut`, {
        "0%": {
            transform: `scale(1)`,
            transformOrigin: `100% 50%`
        },
        "100%": {
            transform: `scale(0.8)`,
            transformOrigin: `100% 50%`,
            opacity: 0
        }
    }),
    Ye = new M(`antZoomDownIn`, {
        "0%": {
            transform: `scale(0.8)`,
            transformOrigin: `50% 100%`,
            opacity: 0
        },
        "100%": {
            transform: `scale(1)`,
            transformOrigin: `50% 100%`
        }
    }),
    Xe = new M(`antZoomDownOut`, {
        "0%": {
            transform: `scale(1)`,
            transformOrigin: `50% 100%`
        },
        "100%": {
            transform: `scale(0.8)`,
            transformOrigin: `50% 100%`,
            opacity: 0
        }
    }),
    Ze = {
        zoom: {
            inKeyframes: ze,
            outKeyframes: Be
        },
        "zoom-big": {
            inKeyframes: Ve,
            outKeyframes: He
        },
        "zoom-big-fast": {
            inKeyframes: Ve,
            outKeyframes: He
        },
        "zoom-left": {
            inKeyframes: Ge,
            outKeyframes: Ke
        },
        "zoom-right": {
            inKeyframes: qe,
            outKeyframes: Je
        },
        "zoom-up": {
            inKeyframes: Ue,
            outKeyframes: We
        },
        "zoom-down": {
            inKeyframes: Ye,
            outKeyframes: Xe
        }
    },
    Qe = (e, t) => {
        let {
            antCls: n
        } = e, r = `${n}-${t}`, {
            inKeyframes: i,
            outKeyframes: a
        } = Ze[t];
        return [Re(r, i, a, t === `zoom-big-fast` ? e.motionDurationFast : e.motionDurationMid), {
            [`
        ${r}-enter,
        ${r}-appear
      `]: {
                transform: `scale(0)`,
                opacity: 0,
                animationTimingFunction: e.motionEaseOutCirc,
                "&-prepare": {
                    transform: `none`
                }
            },
            [`${r}-leave`]: {
                animationTimingFunction: e.motionEaseInOutCirc
            }
        }]
    },
    $e = P.createContext(null);
T();
var et = [];

function tt(e, t) {
    var n = P.useState(function() {
            return C() ? document.createElement(`div`) : null
        }),
        r = D(n, 1)[0],
        i = P.useRef(!1),
        a = P.useContext($e),
        o = P.useState(et),
        s = D(o, 2),
        c = s[0],
        l = s[1],
        u = a || (i.current ? void 0 : function(e) {
            l(function(t) {
                return [e].concat(E(t))
            })
        });

    function d() {
        r.parentElement || document.body.appendChild(r), i.current = !0
    }

    function f() {
        var e;
        (e = r.parentElement) == null || e.removeChild(r), i.current = !1
    }
    return m(function() {
        return e ? a ? a(d) : d() : f(), f
    }, [e]), m(function() {
        c.length && (c.forEach(function(e) {
            return e()
        }), l(et))
    }, [c]), [r, u]
}
var nt;

function rt(e) {
    var t = `rc-scrollbar-measure-${Math.random().toString(36).substring(7)}`,
        n = document.createElement(`div`);
    n.id = t;
    var r = n.style;
    r.position = `absolute`, r.left = `0`, r.top = `0`, r.width = `100px`, r.height = `100px`, r.overflow = `scroll`;
    var i, a;
    if (e) {
        var o = getComputedStyle(e);
        r.scrollbarColor = o.scrollbarColor, r.scrollbarWidth = o.scrollbarWidth;
        var s = getComputedStyle(e, `::-webkit-scrollbar`),
            c = parseInt(s.width, 10),
            l = parseInt(s.height, 10);
        try {
            var u = c ? `width: ${s.width};` : ``,
                d = l ? `height: ${s.height};` : ``;
            ae(`
#${t}::-webkit-scrollbar {
${u}
${d}
}`, t)
        } catch (e) {
            console.error(e), i = c, a = l
        }
    }
    document.body.appendChild(n);
    var f = e && i && !isNaN(i) ? i : n.offsetWidth - n.clientWidth,
        p = e && a && !isNaN(a) ? a : n.offsetHeight - n.clientHeight;
    return document.body.removeChild(n), S(t), {
        width: f,
        height: p
    }
}

function it(e) {
    return typeof document > `u` ? 0 : ((e || nt === void 0) && (nt = rt()), nt.width)
}

function at(e) {
    return typeof document > `u` || !e || !(e instanceof Element) ? {
        width: 0,
        height: 0
    } : rt(e)
}

function ot() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth
}
k();
var st = `rc-util-locker-${Date.now()}`,
    ct = 0;

function lt(e) {
    var t = !!e,
        n = P.useState(function() {
            return ct += 1, `${st}_${ct}`
        }),
        r = D(n, 1)[0];
    m(function() {
        if (t) {
            var e = at(document.body).width,
                n = ot();
            ae(`
html body {
  overflow-y: hidden;
  ${n?`width: calc(100% - ${e}px);`:``}
}`, r)
        } else S(r);
        return function() {
            S(r)
        }
    }, [t, r])
}
var ut = !1;

function dt(e) {
    return typeof e == `boolean` && (ut = e), ut
}
k();
var ft = function(e) {
        return e === !1 ? !1 : !C() || !e ? null : typeof e == `string` ? document.querySelector(e) : typeof e == `function` ? e() : e
    },
    pt = P.forwardRef(function(e, t) {
        var n = e.open,
            r = e.autoLock,
            i = e.getContainer,
            a = e.debug,
            o = e.autoDestroy,
            s = o === void 0 || o,
            c = e.children,
            l = P.useState(n),
            u = D(l, 2),
            d = u[0],
            f = u[1],
            p = d || n;
        P.useEffect(function() {
            (s || n) && f(n)
        }, [n, s]);
        var m = P.useState(function() {
                return ft(i)
            }),
            h = D(m, 2),
            v = h[0],
            y = h[1];
        P.useEffect(function() {
            y(ft(i) ?? null)
        });
        var b = tt(p && !v, a),
            x = D(b, 2),
            S = x[0],
            ee = x[1],
            w = v ?? S;
        lt(r && n && C() && (w === S || w === document.body));
        var te = null;
        c && g(c) && t && (te = c.ref);
        var ne = _(te, t);
        if (!p || !C() || v === void 0) return null;
        var T = w === !1 || dt(),
            E = c;
        return t && (E = P.cloneElement(c, {
            ref: ne
        })), P.createElement($e.Provider, {
            value: ee
        }, T ? E : (0, he.createPortal)(E, w))
    });
k();

function mt() {
    return d({}, P).useId
}
var ht = 0,
    gt = mt(),
    _t = gt ? function(e) {
        var t = gt();
        return e || t
    } : function(e) {
        var t = P.useState(`ssr-id`),
            n = D(t, 2),
            r = n[0],
            i = n[1];
        return P.useEffect(function() {
            var e = ht;
            ht += 1, i(`rc_unique_${e}`)
        }, []), e || r
    },
    B = `RC_FORM_INTERNAL_HOOKS`,
    V = function() {
        j(!1, `Can not find FormContext. Please make sure you wrap Field under Form.`)
    },
    H = P.createContext({
        getFieldValue: V,
        getFieldsValue: V,
        getFieldError: V,
        getFieldWarning: V,
        getFieldsError: V,
        isFieldsTouched: V,
        isFieldTouched: V,
        isFieldValidating: V,
        isFieldsValidating: V,
        resetFields: V,
        setFields: V,
        setFieldValue: V,
        setFieldsValue: V,
        validateFields: V,
        submit: V,
        getInternalHooks: function() {
            return V(), {
                dispatch: V,
                initEntityValue: V,
                registerField: V,
                useSubscribe: V,
                setInitialValues: V,
                destroyForm: V,
                setCallbacks: V,
                registerWatch: V,
                getFields: V,
                setValidateMessages: V,
                setPreserve: V,
                getInitialValue: V
            }
        }
    }),
    U = P.createContext(null);

function vt(e) {
    return e == null ? [] : Array.isArray(e) ? e : [e]
}

function yt(e) {
    return e && !!e._init
}

function bt() {
    return {
        default: `Validation error on field %s`,
        required: `%s is required`,
        enum: `%s must be one of %s`,
        whitespace: `%s cannot be empty`,
        date: {
            format: `%s date %s is invalid for format %s`,
            parse: `%s date could not be parsed, %s is invalid `,
            invalid: `%s date %s is invalid`
        },
        types: {
            string: `%s is not a %s`,
            method: `%s is not a %s (function)`,
            array: `%s is not an %s`,
            object: `%s is not an %s`,
            number: `%s is not a %s`,
            date: `%s is not a %s`,
            boolean: `%s is not a %s`,
            integer: `%s is not an %s`,
            float: `%s is not a %s`,
            regexp: `%s is not a valid %s`,
            email: `%s is not a valid %s`,
            url: `%s is not a valid %s`,
            hex: `%s is not a valid %s`
        },
        string: {
            len: `%s must be exactly %s characters`,
            min: `%s must be at least %s characters`,
            max: `%s cannot be longer than %s characters`,
            range: `%s must be between %s and %s characters`
        },
        number: {
            len: `%s must equal %s`,
            min: `%s cannot be less than %s`,
            max: `%s cannot be greater than %s`,
            range: `%s must be between %s and %s`
        },
        array: {
            len: `%s must be exactly %s in length`,
            min: `%s cannot be less than %s in length`,
            max: `%s cannot be greater than %s in length`,
            range: `%s must be between %s and %s in length`
        },
        pattern: {
            mismatch: `%s value %s does not match pattern %s`
        },
        clone: function() {
            var e = JSON.parse(JSON.stringify(this));
            return e.clone = this.clone, e
        }
    }
}
var xt = bt();
pe(), f(), T();
var St = /%[sdj%]/g,
    Ct = function() {};

function wt(e) {
    if (!e || !e.length) return null;
    var t = {};
    return e.forEach(function(e) {
        var n = e.field;
        t[n] = t[n] || [], t[n].push(e)
    }), t
}

function W(e) {
    var t = [...arguments].slice(1),
        n = 0,
        r = t.length;
    return typeof e == `function` ? e.apply(null, t) : typeof e == `string` ? e.replace(St, function(e) {
        if (e === `%%`) return `%`;
        if (n >= r) return e;
        switch (e) {
            case `%s`:
                return String(t[n++]);
            case `%d`:
                return Number(t[n++]);
            case `%j`:
                try {
                    return JSON.stringify(t[n++])
                } catch {
                    return `[Circular]`
                }
            default:
                return e
        }
    }) : e
}

function Tt(e) {
    return e === `string` || e === `url` || e === `hex` || e === `email` || e === `date` || e === `pattern`
}

function G(e, t) {
    return !!(e == null || t === `array` && Array.isArray(e) && !e.length || Tt(t) && typeof e == `string` && !e)
}

function Et(e, t, n) {
    var r = [],
        i = 0,
        a = e.length;

    function o(e) {
        r.push.apply(r, E(e || [])), i++, i === a && n(r)
    }
    e.forEach(function(e) {
        t(e, o)
    })
}

function Dt(e, t, n) {
    var r = 0,
        i = e.length;

    function a(o) {
        if (o && o.length) n(o);
        else {
            var s = r;
            r += 1, s < i ? t(e[s], a) : n([])
        }
    }
    a([])
}

function Ot(e) {
    var t = [];
    return Object.keys(e).forEach(function(n) {
        t.push.apply(t, E(e[n] || []))
    }), t
}
var kt = function(e) {
    c(n, e);
    var t = le(n);

    function n(e, r) {
        var i;
        return u(this, n), i = t.call(this, `Async Validation Error`), p(o(i), `errors`, void 0), p(o(i), `fields`, void 0), i.errors = e, i.fields = r, i
    }
    return A(n)
}(me(Error));

function At(e, t, n, r, i) {
    if (t.first) {
        var a = new Promise(function(t, a) {
            Dt(Ot(e), n, function(e) {
                return r(e), e.length ? a(new kt(e, wt(e))) : t(i)
            })
        });
        return a.catch(function(e) {
            return e
        }), a
    }
    var o = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
        s = Object.keys(e),
        c = s.length,
        l = 0,
        u = [],
        d = new Promise(function(t, a) {
            var d = function(e) {
                if (u.push.apply(u, e), l++, l === c) return r(u), u.length ? a(new kt(u, wt(u))) : t(i)
            };
            s.length || (r(u), t(i)), s.forEach(function(t) {
                var r = e[t];
                o.indexOf(t) === -1 ? Et(r, n, d) : Dt(r, n, d)
            })
        });
    return d.catch(function(e) {
        return e
    }), d
}

function jt(e) {
    return !!(e && e.message !== void 0)
}

function Mt(e, t) {
    for (var n = e, r = 0; r < t.length; r++) {
        if (n == null) return n;
        n = n[t[r]]
    }
    return n
}

function Nt(e, t) {
    return function(n) {
        var r = e.fullFields ? Mt(t, e.fullFields) : t[n.field || e.fullField];
        return jt(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
            message: typeof n == `function` ? n() : n,
            fieldValue: r,
            field: n.field || e.fullField
        }
    }
}

function Pt(e, t) {
    if (t) {
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var r = t[n];
                e[n] = y(r) === `object` && y(e[n]) === `object` ? d(d({}, e[n]), r) : r
            }
    }
    return e
}
var K = `enum`,
    Ft = function(e, t, n, r, i) {
        e[K] = Array.isArray(e[K]) ? e[K] : [], e[K].indexOf(t) === -1 && r.push(W(i.messages[K], e.fullField, e[K].join(`, `)))
    },
    It = function(e, t, n, r, i) {
        e.pattern && (e.pattern instanceof RegExp ? (e.pattern.lastIndex = 0, e.pattern.test(t) || r.push(W(i.messages.pattern.mismatch, e.fullField, t, e.pattern))) : typeof e.pattern == `string` && (new RegExp(e.pattern).test(t) || r.push(W(i.messages.pattern.mismatch, e.fullField, t, e.pattern))))
    },
    Lt = function(e, t, n, r, i) {
        var a = typeof e.len == `number`,
            o = typeof e.min == `number`,
            s = typeof e.max == `number`,
            c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            l = t,
            u = null,
            d = typeof t == `number`,
            f = typeof t == `string`,
            p = Array.isArray(t);
        if (d ? u = `number` : f ? u = `string` : p && (u = `array`), !u) return !1;
        p && (l = t.length), f && (l = t.replace(c, `_`).length), a ? l !== e.len && r.push(W(i.messages[u].len, e.fullField, e.len)) : o && !s && l < e.min ? r.push(W(i.messages[u].min, e.fullField, e.min)) : s && !o && l > e.max ? r.push(W(i.messages[u].max, e.fullField, e.max)) : o && s && (l < e.min || l > e.max) && r.push(W(i.messages[u].range, e.fullField, e.min, e.max))
    },
    Rt = function(e, t, n, r, i, a) {
        e.required && (!n.hasOwnProperty(e.field) || G(t, a || e.type)) && r.push(W(i.messages.required, e.fullField))
    },
    zt, Bt = (function() {
        if (zt) return zt;
        var e = `[a-fA-F\\d:]`,
            t = function(t) {
                return t && t.includeBoundaries ? `(?:(?<=\\s|^)(?=${e})|(?<=${e})(?=\\s|$))` : ``
            },
            n = `(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}`,
            r = `[a-fA-F\\d]{1,4}`,
            i = `(?:${[`(?:${r}:){7}(?:${r}|:)`,`(?:${r}:){6}(?:${n}|:${r}|:)`,`(?:${r}:){5}(?::${n}|(?::${r}){1,2}|:)`,`(?:${r}:){4}(?:(?::${r}){0,1}:${n}|(?::${r}){1,3}|:)`,`(?:${r}:){3}(?:(?::${r}){0,2}:${n}|(?::${r}){1,4}|:)`,`(?:${r}:){2}(?:(?::${r}){0,3}:${n}|(?::${r}){1,5}|:)`,`(?:${r}:){1}(?:(?::${r}){0,4}:${n}|(?::${r}){1,6}|:)`,`(?::(?:(?::${r}){0,5}:${n}|(?::${r}){1,7}|:))`].join(`|`)})(?:%[0-9a-zA-Z]{1,})?`,
            a = RegExp(`(?:^${n}$)|(?:^${i}$)`),
            o = RegExp(`^${n}$`),
            s = RegExp(`^${i}$`),
            c = function(e) {
                return e && e.exact ? a : RegExp(`(?:${t(e)}${n}${t(e)})|(?:${t(e)}${i}${t(e)})`, `g`)
            };
        c.v4 = function(e) {
            return e && e.exact ? o : RegExp(`${t(e)}${n}${t(e)}`, `g`)
        }, c.v6 = function(e) {
            return e && e.exact ? s : RegExp(`${t(e)}${i}${t(e)}`, `g`)
        };
        var l = `(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|${c.v4().source}|${c.v6().source}|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?`;
        return zt = RegExp(`(?:^${l}$)`, `i`), zt
    });
f();
var Vt = {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
        hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
    },
    Ht = {
        integer: function(e) {
            return Ht.number(e) && parseInt(e, 10) === e
        },
        float: function(e) {
            return Ht.number(e) && !Ht.integer(e)
        },
        array: function(e) {
            return Array.isArray(e)
        },
        regexp: function(e) {
            if (e instanceof RegExp) return !0;
            try {
                return !!new RegExp(e)
            } catch {
                return !1
            }
        },
        date: function(e) {
            return typeof e.getTime == `function` && typeof e.getMonth == `function` && typeof e.getYear == `function` && !isNaN(e.getTime())
        },
        number: function(e) {
            return !isNaN(e) && typeof e == `number`
        },
        object: function(e) {
            return y(e) === `object` && !Ht.array(e)
        },
        method: function(e) {
            return typeof e == `function`
        },
        email: function(e) {
            return typeof e == `string` && e.length <= 320 && !!e.match(Vt.email)
        },
        url: function(e) {
            return typeof e == `string` && e.length <= 2048 && !!e.match(Bt())
        },
        hex: function(e) {
            return typeof e == `string` && !!e.match(Vt.hex)
        }
    },
    q = {
        required: Rt,
        whitespace: function(e, t, n, r, i) {
            (/^\s+$/.test(t) || t === ``) && r.push(W(i.messages.whitespace, e.fullField))
        },
        type: function(e, t, n, r, i) {
            if (e.required && t === void 0) Rt(e, t, n, r, i);
            else {
                var a = [`integer`, `float`, `array`, `regexp`, `object`, `method`, `email`, `number`, `date`, `url`, `hex`],
                    o = e.type;
                a.indexOf(o) > -1 ? Ht[o](t) || r.push(W(i.messages.types[o], e.fullField, e.type)) : o && y(t) !== e.type && r.push(W(i.messages.types[o], e.fullField, e.type))
            }
        },
        range: Lt,
        enum: Ft,
        pattern: It
    },
    Ut = function(e, t, n, r, i) {
        var a = [];
        if (e.required || !e.required && r.hasOwnProperty(e.field)) {
            if (G(t) && !e.required) return n();
            q.required(e, t, r, a, i)
        }
        n(a)
    },
    Wt = function(e, t, n, r, i) {
        var a = [];
        if (e.required || !e.required && r.hasOwnProperty(e.field)) {
            if (t == null && !e.required) return n();
            q.required(e, t, r, a, i, `array`), t != null && (q.type(e, t, r, a, i), q.range(e, t, r, a, i))
        }
        n(a)
    },
    Gt = function(e, t, n, r, i) {
        var a = [];
        if (e.required || !e.required && r.hasOwnProperty(e.field)) {
            if (G(t) && !e.required) return n();
            q.required(e, t, r, a, i), t !== void 0 && q.type(e, t, r, a, i)
        }
        n(a)
    },
    Kt = function(e, t, n, r, i) {
        var a = [];
        if (e.required || !e.required && r.hasOwnProperty(e.field)) {
            if (G(t, `date`) && !e.required) return n();
            if (q.required(e, t, r, a, i), !G(t, `date`)) {
                var o = t instanceof Date ? t : new Date(t);
                q.type(e, o, r, a, i), o && q.range(e, o.getTime(), r, a, i)
            }
        }
        n(a)
    },
    qt = `enum`,
    Jt = function(e, t, n, r, i) {
        var a = [];
        if (e.required || !e.required && r.hasOwnProperty(e.field)) {
            if (G(t) && !e.required) return n();
            q.required(e, t, r, a, i), t !== void 0 && q[qt](e, t, r, a, i)
        }
        n(a)
    },
    Yt = function(e, t, n, r, i) {
        var a = [];
        if (e.required || !e.required && r.hasOwnProperty(e.field)) {
            if (G(t) && !e.required) return n();
            q.required(e, t, r, a, i), t !== void 0 && (q.type(e, t, r, a, i), q.range(e, t, r, a, i))
        }
        n(a)
    },
    Xt = function(e, t, n, r, i) {
        var a = [];
        if (e.required || !e.required && r.hasOwnProperty(e.field)) {
            if (G(t) && !e.required) return n();
            q.required(e, t, r, a, i), t !== void 0 && (q.type(e, t, r, a, i), q.range(e, t, r, a, i))
        }
        n(a)
    },
    Zt = function(e, t, n, r, i) {
        var a = [];
        if (e.required || !e.required && r.hasOwnProperty(e.field)) {
            if (G(t) && !e.required) return n();
            q.required(e, t, r, a, i), t !== void 0 && q.type(e, t, r, a, i)
        }
        n(a)
    },
    Qt = function(e, t, n, r, i) {
        var a = [];
        if (e.required || !e.required && r.hasOwnProperty(e.field)) {
            if (t === `` && (t = void 0), G(t) && !e.required) return n();
            q.required(e, t, r, a, i), t !== void 0 && (q.type(e, t, r, a, i), q.range(e, t, r, a, i))
        }
        n(a)
    },
    $t = function(e, t, n, r, i) {
        var a = [];
        if (e.required || !e.required && r.hasOwnProperty(e.field)) {
            if (G(t) && !e.required) return n();
            q.required(e, t, r, a, i), t !== void 0 && q.type(e, t, r, a, i)
        }
        n(a)
    },
    en = function(e, t, n, r, i) {
        var a = [];
        if (e.required || !e.required && r.hasOwnProperty(e.field)) {
            if (G(t, `string`) && !e.required) return n();
            q.required(e, t, r, a, i), G(t, `string`) || q.pattern(e, t, r, a, i)
        }
        n(a)
    },
    tn = function(e, t, n, r, i) {
        var a = [];
        if (e.required || !e.required && r.hasOwnProperty(e.field)) {
            if (G(t) && !e.required) return n();
            q.required(e, t, r, a, i), G(t) || q.type(e, t, r, a, i)
        }
        n(a)
    };
f();
var nn = function(e, t, n, r, i) {
        var a = [],
            o = Array.isArray(t) ? `array` : y(t);
        q.required(e, t, r, a, i, o), n(a)
    },
    rn = function(e, t, n, r, i) {
        var a = [];
        if (e.required || !e.required && r.hasOwnProperty(e.field)) {
            if (G(t, `string`) && !e.required) return n();
            q.required(e, t, r, a, i, `string`), G(t, `string`) || (q.type(e, t, r, a, i), q.range(e, t, r, a, i), q.pattern(e, t, r, a, i), e.whitespace === !0 && q.whitespace(e, t, r, a, i))
        }
        n(a)
    },
    an = function(e, t, n, r, i) {
        var a = e.type,
            o = [];
        if (e.required || !e.required && r.hasOwnProperty(e.field)) {
            if (G(t, a) && !e.required) return n();
            q.required(e, t, r, o, i, a), G(t, a) || q.type(e, t, r, o, i)
        }
        n(o)
    },
    on = {
        string: rn,
        method: Zt,
        number: Qt,
        boolean: Gt,
        regexp: tn,
        integer: Xt,
        float: Yt,
        array: Wt,
        object: $t,
        enum: Jt,
        pattern: en,
        date: Kt,
        url: an,
        hex: an,
        email: an,
        required: nn,
        any: Ut
    };
T(), f(), l(), v(), h();
var sn = function() {
    function e(t) {
        u(this, e), p(this, `rules`, null), p(this, `_messages`, xt), this.define(t)
    }
    return A(e, [{
        key: `define`,
        value: function(e) {
            var t = this;
            if (!e) throw Error(`Cannot configure a schema with no rules`);
            if (y(e) !== `object` || Array.isArray(e)) throw Error(`Rules must be an object`);
            this.rules = {}, Object.keys(e).forEach(function(n) {
                var r = e[n];
                t.rules[n] = Array.isArray(r) ? r : [r]
            })
        }
    }, {
        key: `messages`,
        value: function(e) {
            return e && (this._messages = Pt(bt(), e)), this._messages
        }
    }, {
        key: `validate`,
        value: function(t) {
            var n = this,
                r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {},
                a = t,
                o = r,
                s = i;
            if (typeof o == `function` && (s = o, o = {}), !this.rules || Object.keys(this.rules).length === 0) return s && s(null, a), Promise.resolve(a);

            function c(e) {
                var t = [],
                    n = {};

                function r(e) {
                    if (Array.isArray(e)) {
                        var n;
                        t = (n = t).concat.apply(n, E(e))
                    } else t.push(e)
                }
                for (var i = 0; i < e.length; i++) r(e[i]);
                t.length ? (n = wt(t), s(t, n)) : s(null, a)
            }
            if (o.messages) {
                var l = this.messages();
                l === xt && (l = bt()), Pt(l, o.messages), o.messages = l
            } else o.messages = this.messages();
            var u = {};
            (o.keys || Object.keys(this.rules)).forEach(function(e) {
                var r = n.rules[e],
                    i = a[e];
                r.forEach(function(r) {
                    var o = r;
                    typeof o.transform == `function` && (a === t && (a = d({}, a)), i = a[e] = o.transform(i), i != null && (o.type = o.type || (Array.isArray(i) ? `array` : y(i)))), o = typeof o == `function` ? {
                        validator: o
                    } : d({}, o), o.validator = n.getValidationMethod(o), o.validator && (o.field = e, o.fullField = o.fullField || e, o.type = n.getType(o), u[e] = u[e] || [], u[e].push({
                        rule: o,
                        value: i,
                        source: a,
                        field: e
                    }))
                })
            });
            var f = {};
            return At(u, o, function(t, n) {
                var r = t.rule,
                    i = (r.type === `object` || r.type === `array`) && (y(r.fields) === `object` || y(r.defaultField) === `object`);
                i = i && (r.required || !r.required && t.value), r.field = t.field;

                function s(e, t) {
                    return d(d({}, t), {}, {
                        fullField: `${r.fullField}.${e}`,
                        fullFields: r.fullFields ? [].concat(E(r.fullFields), [e]) : [e]
                    })
                }

                function c() {
                    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
                        l = Array.isArray(c) ? c : [c];
                    !o.suppressWarning && l.length && e.warning(`async-validator:`, l), l.length && r.message !== void 0 && (l = [].concat(r.message));
                    var u = l.map(Nt(r, a));
                    if (o.first && u.length) return f[r.field] = 1, n(u);
                    if (!i) n(u);
                    else {
                        if (r.required && !t.value) return r.message === void 0 ? o.error && (u = [o.error(r, W(o.messages.required, r.field))]) : u = [].concat(r.message).map(Nt(r, a)), n(u);
                        var p = {};
                        r.defaultField && Object.keys(t.value).map(function(e) {
                            p[e] = r.defaultField
                        }), p = d(d({}, p), t.rule.fields);
                        var m = {};
                        Object.keys(p).forEach(function(e) {
                            var t = p[e];
                            m[e] = (Array.isArray(t) ? t : [t]).map(s.bind(null, e))
                        });
                        var h = new e(m);
                        h.messages(o.messages), t.rule.options && (t.rule.options.messages = o.messages, t.rule.options.error = o.error), h.validate(t.value, t.rule.options || o, function(e) {
                            var t = [];
                            u && u.length && t.push.apply(t, E(u)), e && e.length && t.push.apply(t, E(e)), n(t.length ? t : null)
                        })
                    }
                }
                var l;
                if (r.asyncValidator) l = r.asyncValidator(r, t.value, c, t.source, o);
                else if (r.validator) {
                    try {
                        l = r.validator(r, t.value, c, t.source, o)
                    } catch (e) {
                        var u, p;
                        (u = (p = console).error) == null || u.call(p, e), o.suppressValidatorError || setTimeout(function() {
                            throw e
                        }, 0), c(e.message)
                    }
                    l === !0 ? c() : l === !1 ? c(typeof r.message == `function` ? r.message(r.fullField || r.field) : r.message || `${r.fullField||r.field} fails`) : l instanceof Array ? c(l) : l instanceof Error && c(l.message)
                }
                l && l.then && l.then(function() {
                    return c()
                }, function(e) {
                    return c(e)
                })
            }, function(e) {
                c(e)
            }, a)
        }
    }, {
        key: `getType`,
        value: function(e) {
            if (e.type === void 0 && e.pattern instanceof RegExp && (e.type = `pattern`), typeof e.validator != `function` && e.type && !on.hasOwnProperty(e.type)) throw Error(W(`Unknown rule type %s`, e.type));
            return e.type || `string`
        }
    }, {
        key: `getValidationMethod`,
        value: function(e) {
            if (typeof e.validator == `function`) return e.validator;
            var t = Object.keys(e),
                n = t.indexOf(`message`);
            return n !== -1 && t.splice(n, 1), t.length === 1 && t[0] === `required` ? on.required : on[this.getType(e)] || void 0
        }
    }]), e
}();
p(sn, `register`, function(e, t) {
    if (typeof t != `function`) throw Error(`Cannot register a validator by type, validator is not a function`);
    on[e] = t
}), p(sn, `warning`, Ct), p(sn, `messages`, xt), p(sn, `validators`, on);
var J = "'${name}' is not a valid ${type}",
    cn = {
        default: "Validation error on field '${name}'",
        required: "'${name}' is required",
        enum: "'${name}' must be one of [${enum}]",
        whitespace: "'${name}' cannot be empty",
        date: {
            format: "'${name}' is invalid for format date",
            parse: "'${name}' could not be parsed as date",
            invalid: "'${name}' is invalid date"
        },
        types: {
            string: J,
            method: J,
            array: J,
            object: J,
            number: J,
            date: J,
            boolean: J,
            integer: J,
            float: J,
            regexp: J,
            email: J,
            url: J,
            hex: J
        },
        string: {
            len: "'${name}' must be exactly ${len} characters",
            min: "'${name}' must be at least ${min} characters",
            max: "'${name}' cannot be longer than ${max} characters",
            range: "'${name}' must be between ${min} and ${max} characters"
        },
        number: {
            len: "'${name}' must equal ${len}",
            min: "'${name}' cannot be less than ${min}",
            max: "'${name}' cannot be greater than ${max}",
            range: "'${name}' must be between ${min} and ${max}"
        },
        array: {
            len: "'${name}' must be exactly ${len} in length",
            min: "'${name}' cannot be less than ${min} in length",
            max: "'${name}' cannot be greater than ${max} in length",
            range: "'${name}' must be between ${min} and ${max} in length"
        },
        pattern: {
            mismatch: "'${name}' does not match pattern ${pattern}"
        }
    };
T(), h();
var ln = sn;

function un(e, t) {
    return e.replace(/\\?\$\{\w+\}/g, function(e) {
        return e.startsWith(`\\`) ? e.slice(1) : t[e.slice(2, -1)]
    })
}
var dn = `CODE_LOGIC_ERROR`;

function fn(e, t, n, r, i) {
    return pn.apply(this, arguments)
}

function pn() {
    return pn = de(N().mark(function e(t, n, r, i, a) {
        var o, s, c, l, u, f, m, h, g;
        return N().wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return o = d({}, r), delete o.ruleIndex, ln.warning = function() {}, o.validator && (s = o.validator, o.validator = function() {
                        try {
                            return s.apply(void 0, arguments)
                        } catch (e) {
                            return console.error(e), Promise.reject(dn)
                        }
                    }), c = null, o && o.type === `array` && o.defaultField && (c = o.defaultField, delete o.defaultField), l = new ln(p({}, t, [o])), u = L(cn, i.validateMessages), l.messages(u), f = [], e.prev = 10, e.next = 13, Promise.resolve(l.validate(p({}, t, n), d({}, i)));
                case 13:
                    e.next = 18;
                    break;
                case 15:
                    e.prev = 15, e.t0 = e.catch(10), e.t0.errors && (f = e.t0.errors.map(function(e, t) {
                        var n = e.message,
                            r = n === dn ? u.default : n;
                        return P.isValidElement(r) ? P.cloneElement(r, {
                            key: `error_${t}`
                        }) : r
                    }));
                case 18:
                    if (f.length || !c) {
                        e.next = 23;
                        break
                    }
                    return e.next = 21, Promise.all(n.map(function(e, n) {
                        return fn(`${t}.${n}`, e, c, i, a)
                    }));
                case 21:
                    return m = e.sent, e.abrupt(`return`, m.reduce(function(e, t) {
                        return [].concat(E(e), E(t))
                    }, []));
                case 23:
                    return h = d(d({}, r), {}, {
                        name: t,
                        enum: (r.enum || []).join(`, `)
                    }, a), g = f.map(function(e) {
                        return typeof e == `string` ? un(e, h) : e
                    }), e.abrupt(`return`, g);
                case 26:
                case `end`:
                    return e.stop()
            }
        }, e, null, [
            [10, 15]
        ])
    })), pn.apply(this, arguments)
}

function mn(e, t, n, r, i, a) {
    var o = e.join(`.`),
        s = n.map(function(e, t) {
            var n = e.validator,
                r = d(d({}, e), {}, {
                    ruleIndex: t
                });
            return n && (r.validator = function(e, t, r) {
                var i = !1,
                    a = n(e, t, function() {
                        var e = [...arguments];
                        Promise.resolve().then(function() {
                            j(!i, "Your validator function has already return a promise. `callback` will be ignored."), i || r.apply(void 0, e)
                        })
                    });
                i = a && typeof a.then == `function` && typeof a.catch == `function`, j(i, "`callback` is deprecated. Please return a promise instead."), i && a.then(function() {
                    r()
                }).catch(function(e) {
                    r(e || ` `)
                })
            }), r
        }).sort(function(e, t) {
            var n = e.warningOnly,
                r = e.ruleIndex,
                i = t.warningOnly,
                a = t.ruleIndex;
            return !!n == !!i ? r - a : n ? 1 : -1
        }),
        c;
    if (i === !0) c = new Promise(function() {
        var e = de(N().mark(function e(n, i) {
            var c, l, u;
            return N().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        c = 0;
                    case 1:
                        if (!(c < s.length)) {
                            e.next = 12;
                            break
                        }
                        return l = s[c], e.next = 5, fn(o, t, l, r, a);
                    case 5:
                        if (u = e.sent, !u.length) {
                            e.next = 9;
                            break
                        }
                        return i([{
                            errors: u,
                            rule: l
                        }]), e.abrupt(`return`);
                    case 9:
                        c += 1, e.next = 1;
                        break;
                    case 12:
                        n([]);
                    case 13:
                    case `end`:
                        return e.stop()
                }
            }, e)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    }());
    else {
        var l = s.map(function(e) {
            return fn(o, t, e, r, a).then(function(t) {
                return {
                    errors: t,
                    rule: e
                }
            })
        });
        c = (i ? _n(l) : hn(l)).then(function(e) {
            return Promise.reject(e)
        })
    }
    return c.catch(function(e) {
        return e
    }), c
}

function hn(e) {
    return gn.apply(this, arguments)
}

function gn() {
    return gn = de(N().mark(function e(t) {
        return N().wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.abrupt(`return`, Promise.all(t).then(function(e) {
                        var t;
                        return (t = []).concat.apply(t, E(e))
                    }));
                case 1:
                case `end`:
                    return e.stop()
            }
        }, e)
    })), gn.apply(this, arguments)
}

function _n(e) {
    return vn.apply(this, arguments)
}

function vn() {
    return vn = de(N().mark(function e(t) {
        var n;
        return N().wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return n = 0, e.abrupt(`return`, new Promise(function(e) {
                        t.forEach(function(r) {
                            r.then(function(r) {
                                r.errors.length && e([r]), n += 1, n === t.length && e([])
                            })
                        })
                    }));
                case 2:
                case `end`:
                    return e.stop()
            }
        }, e)
    })), vn.apply(this, arguments)
}
T(), f();

function Y(e) {
    return vt(e)
}

function yn(e, t) {
    var n = {};
    return t.forEach(function(t) {
        var r = F(e, t);
        n = I(n, t, r)
    }), n
}

function X(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    return e && e.some(function(e) {
        return bn(t, e, n)
    })
}

function bn(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    return !e || !t || !n && e.length !== t.length ? !1 : t.every(function(t, n) {
        return e[n] === t
    })
}

function xn(e, t) {
    if (e === t) return !0;
    if (!e && t || e && !t || !e || !t || y(e) !== `object` || y(t) !== `object`) return !1;
    var n = Object.keys(e),
        r = Object.keys(t),
        i = new Set([].concat(n, r));
    return E(i).every(function(n) {
        var r = e[n],
            i = t[n];
        return typeof r == `function` && typeof i == `function` || r === i
    })
}

function Sn(e) {
    var t = arguments.length <= 1 ? void 0 : arguments[1];
    return t && t.target && y(t.target) === `object` && e in t.target ? t.target[e] : t
}

function Cn(e, t, n) {
    var r = e.length;
    if (t < 0 || t >= r || n < 0 || n >= r) return e;
    var i = e[t],
        a = t - n;
    return a > 0 ? [].concat(E(e.slice(0, n)), [i], E(e.slice(n, t)), E(e.slice(t + 1, r))) : a < 0 ? [].concat(E(e.slice(0, t)), E(e.slice(t + 1, n + 1)), [i], E(e.slice(n + 1, r))) : e
}
T(), l(), v(), i(), h();
var wn = [`name`],
    Z = [];

function Tn(e, t, n, r, i, a) {
    return typeof e == `function` ? e(t, n, `source` in a ? {
        source: a.source
    } : {}) : r !== i
}
var En = function(e) {
    c(n, e);
    var t = le(n);

    function n(e) {
        var r;
        if (u(this, n), r = t.call(this, e), p(o(r), `state`, {
                resetCount: 0
            }), p(o(r), `cancelRegisterFunc`, null), p(o(r), `mounted`, !1), p(o(r), `touched`, !1), p(o(r), `dirty`, !1), p(o(r), `validatePromise`, void 0), p(o(r), `prevValidating`, void 0), p(o(r), `errors`, Z), p(o(r), `warnings`, Z), p(o(r), `cancelRegister`, function() {
                var e = r.props,
                    t = e.preserve,
                    n = e.isListField,
                    i = e.name;
                r.cancelRegisterFunc && r.cancelRegisterFunc(n, t, Y(i)), r.cancelRegisterFunc = null
            }), p(o(r), `getNamePath`, function() {
                var e = r.props,
                    t = e.name,
                    n = e.fieldContext.prefixName,
                    i = n === void 0 ? [] : n;
                return t === void 0 ? [] : [].concat(E(i), E(t))
            }), p(o(r), `getRules`, function() {
                var e = r.props,
                    t = e.rules,
                    n = t === void 0 ? [] : t,
                    i = e.fieldContext;
                return n.map(function(e) {
                    return typeof e == `function` ? e(i) : e
                })
            }), p(o(r), `refresh`, function() {
                r.mounted && r.setState(function(e) {
                    return {
                        resetCount: e.resetCount + 1
                    }
                })
            }), p(o(r), `metaCache`, null), p(o(r), `triggerMetaEvent`, function(e) {
                var t = r.props.onMetaChange;
                if (t) {
                    var n = d(d({}, r.getMeta()), {}, {
                        destroy: e
                    });
                    te(r.metaCache, n) || t(n), r.metaCache = n
                } else r.metaCache = null
            }), p(o(r), `onStoreChange`, function(e, t, n) {
                var i = r.props,
                    a = i.shouldUpdate,
                    o = i.dependencies,
                    s = o === void 0 ? [] : o,
                    c = i.onReset,
                    l = n.store,
                    u = r.getNamePath(),
                    d = r.getValue(e),
                    f = r.getValue(l),
                    p = t && X(t, u);
                switch (n.type === `valueUpdate` && n.source === `external` && !te(d, f) && (r.touched = !0, r.dirty = !0, r.validatePromise = null, r.errors = Z, r.warnings = Z, r.triggerMetaEvent()), n.type) {
                    case `reset`:
                        if (!t || p) {
                            r.touched = !1, r.dirty = !1, r.validatePromise = void 0, r.errors = Z, r.warnings = Z, r.triggerMetaEvent(), c == null || c(), r.refresh();
                            return
                        }
                        break;
                    case `remove`:
                        if (a && Tn(a, e, l, d, f, n)) {
                            r.reRender();
                            return
                        }
                        break;
                    case `setField`:
                        var m = n.data;
                        if (p) {
                            `touched` in m && (r.touched = m.touched), `validating` in m && !(`originRCField` in m) && (r.validatePromise = m.validating ? Promise.resolve([]) : null), `errors` in m && (r.errors = m.errors || Z), `warnings` in m && (r.warnings = m.warnings || Z), r.dirty = !0, r.triggerMetaEvent(), r.reRender();
                            return
                        }
                        if (`value` in m && X(t, u, !0) || a && !u.length && Tn(a, e, l, d, f, n)) {
                            r.reRender();
                            return
                        }
                        break;
                    case `dependenciesUpdate`:
                        if (s.map(Y).some(function(e) {
                                return X(n.relatedFields, e)
                            })) {
                            r.reRender();
                            return
                        }
                        break;
                    default:
                        if (p || (!s.length || u.length || a) && Tn(a, e, l, d, f, n)) {
                            r.reRender();
                            return
                        }
                }
                a === !0 && r.reRender()
            }), p(o(r), `validateRules`, function(e) {
                var t = r.getNamePath(),
                    n = r.getValue(),
                    i = e || {},
                    a = i.triggerName,
                    o = i.validateOnly,
                    s = o !== void 0 && o,
                    c = Promise.resolve().then(de(N().mark(function i() {
                        var o, s, l, u, d, f, p;
                        return N().wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    if (r.mounted) {
                                        i.next = 2;
                                        break
                                    }
                                    return i.abrupt(`return`, []);
                                case 2:
                                    if (o = r.props, s = o.validateFirst, l = s !== void 0 && s, u = o.messageVariables, d = o.validateDebounce, f = r.getRules(), a && (f = f.filter(function(e) {
                                            return e
                                        }).filter(function(e) {
                                            var t = e.validateTrigger;
                                            return !t || vt(t).includes(a)
                                        })), !(d && a)) {
                                        i.next = 10;
                                        break
                                    }
                                    return i.next = 8, new Promise(function(e) {
                                        setTimeout(e, d)
                                    });
                                case 8:
                                    if (r.validatePromise === c) {
                                        i.next = 10;
                                        break
                                    }
                                    return i.abrupt(`return`, []);
                                case 10:
                                    return p = mn(t, n, f, e, l, u), p.catch(function(e) {
                                        return e
                                    }).then(function() {
                                        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Z;
                                        if (r.validatePromise === c) {
                                            var t;
                                            r.validatePromise = null;
                                            var n = [],
                                                i = [];
                                            (t = e.forEach) == null || t.call(e, function(e) {
                                                var t = e.rule.warningOnly,
                                                    r = e.errors,
                                                    a = r === void 0 ? Z : r;
                                                t ? i.push.apply(i, E(a)) : n.push.apply(n, E(a))
                                            }), r.errors = n, r.warnings = i, r.triggerMetaEvent(), r.reRender()
                                        }
                                    }), i.abrupt(`return`, p);
                                case 13:
                                case `end`:
                                    return i.stop()
                            }
                        }, i)
                    })));
                return s || (r.validatePromise = c, r.dirty = !0, r.errors = Z, r.warnings = Z, r.triggerMetaEvent(), r.reRender()), c
            }), p(o(r), `isFieldValidating`, function() {
                return !!r.validatePromise
            }), p(o(r), `isFieldTouched`, function() {
                return r.touched
            }), p(o(r), `isFieldDirty`, function() {
                if (r.dirty || r.props.initialValue !== void 0) return !0;
                var e = r.props.fieldContext.getInternalHooks(B).getInitialValue;
                return e(r.getNamePath()) !== void 0
            }), p(o(r), `getErrors`, function() {
                return r.errors
            }), p(o(r), `getWarnings`, function() {
                return r.warnings
            }), p(o(r), `isListField`, function() {
                return r.props.isListField
            }), p(o(r), `isList`, function() {
                return r.props.isList
            }), p(o(r), `isPreserve`, function() {
                return r.props.preserve
            }), p(o(r), `getMeta`, function() {
                return r.prevValidating = r.isFieldValidating(), {
                    touched: r.isFieldTouched(),
                    validating: r.prevValidating,
                    errors: r.errors,
                    warnings: r.warnings,
                    name: r.getNamePath(),
                    validated: r.validatePromise === null
                }
            }), p(o(r), `getOnlyChild`, function(e) {
                if (typeof e == `function`) {
                    var t = r.getMeta();
                    return d(d({}, r.getOnlyChild(e(r.getControlled(), t, r.props.fieldContext))), {}, {
                        isFunction: !0
                    })
                }
                var n = s(e);
                return n.length !== 1 || !P.isValidElement(n[0]) ? {
                    child: n,
                    isFunction: !1
                } : {
                    child: n[0],
                    isFunction: !1
                }
            }), p(o(r), `getValue`, function(e) {
                var t = r.props.fieldContext.getFieldsValue,
                    n = r.getNamePath();
                return F(e || t(!0), n)
            }), p(o(r), `getControlled`, function() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    t = r.props,
                    n = t.name,
                    i = t.trigger,
                    a = t.validateTrigger,
                    o = t.getValueFromEvent,
                    s = t.normalize,
                    c = t.valuePropName,
                    l = t.getValueProps,
                    u = t.fieldContext,
                    f = a === void 0 ? u.validateTrigger : a,
                    m = r.getNamePath(),
                    h = u.getInternalHooks,
                    g = u.getFieldsValue,
                    _ = h(B).dispatch,
                    v = r.getValue(),
                    y = l || function(e) {
                        return p({}, c, e)
                    },
                    b = e[i],
                    x = n === void 0 ? {} : y(v),
                    S = d(d({}, e), x);
                return S[i] = function() {
                    r.touched = !0, r.dirty = !0, r.triggerMetaEvent();
                    var e, t = [...arguments];
                    e = o ? o.apply(void 0, t) : Sn.apply(void 0, [c].concat(t)), s && (e = s(e, v, g(!0))), e !== v && _({
                        type: `updateValue`,
                        namePath: m,
                        value: e
                    }), b && b.apply(void 0, t)
                }, vt(f || []).forEach(function(e) {
                    var t = S[e];
                    S[e] = function() {
                        t && t.apply(void 0, arguments);
                        var n = r.props.rules;
                        n && n.length && _({
                            type: `validateField`,
                            namePath: m,
                            triggerName: e
                        })
                    }
                }), S
            }), e.fieldContext) {
            var i = e.fieldContext.getInternalHooks,
                a = i(B).initEntityValue;
            a(o(r))
        }
        return r
    }
    return A(n, [{
        key: `componentDidMount`,
        value: function() {
            var e = this.props,
                t = e.shouldUpdate,
                n = e.fieldContext;
            if (this.mounted = !0, n) {
                var r = n.getInternalHooks,
                    i = r(B).registerField;
                this.cancelRegisterFunc = i(this)
            }
            t === !0 && this.reRender()
        }
    }, {
        key: `componentWillUnmount`,
        value: function() {
            this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1
        }
    }, {
        key: `reRender`,
        value: function() {
            this.mounted && this.forceUpdate()
        }
    }, {
        key: `render`,
        value: function() {
            var e = this.state.resetCount,
                t = this.props.children,
                n = this.getOnlyChild(t),
                r = n.child,
                i = n.isFunction,
                a;
            return i ? a = r : P.isValidElement(r) ? a = P.cloneElement(r, this.getControlled(r.props)) : (j(!r, "`children` of Field is not validate ReactElement."), a = r), P.createElement(P.Fragment, {
                key: e
            }, a)
        }
    }]), n
}(P.Component);
p(En, `contextType`, H), p(En, `defaultProps`, {
    trigger: `onChange`,
    valuePropName: `value`
});

function Dn(e) {
    var t = e.name,
        n = se(e, wn),
        r = P.useContext(H),
        i = P.useContext(U),
        o = t === void 0 ? void 0 : Y(t),
        s = n.isListField ?? !!i,
        c = `keep`;
    return s || (c = `_${(o||[]).join(`_`)}`), P.createElement(En, a({
        key: c,
        name: o,
        isListField: s
    }, n, {
        fieldContext: r
    }))
}
T();

function On(e) {
    var t = e.name,
        n = e.initialValue,
        r = e.children,
        i = e.rules,
        a = e.validateTrigger,
        o = e.isListField,
        s = P.useContext(H),
        c = P.useContext(U),
        l = P.useRef({
            keys: [],
            id: 0
        }).current,
        u = P.useMemo(function() {
            var e = Y(s.prefixName) || [];
            return [].concat(E(e), E(Y(t)))
        }, [s.prefixName, t]),
        f = P.useMemo(function() {
            return d(d({}, s), {}, {
                prefixName: u
            })
        }, [s, u]),
        p = P.useMemo(function() {
            return {
                getKey: function(e) {
                    var t = u.length,
                        n = e[t];
                    return [l.keys[n], e.slice(t + 1)]
                }
            }
        }, [u]);
    return typeof r == `function` ? P.createElement(U.Provider, {
        value: p
    }, P.createElement(H.Provider, {
        value: f
    }, P.createElement(Dn, {
        name: [],
        shouldUpdate: function(e, t, n) {
            return n.source !== `internal` && e !== t
        },
        rules: i,
        validateTrigger: a,
        initialValue: n,
        isList: !0,
        isListField: o ?? !!c
    }, function(e, t) {
        var n = e.value,
            i = n === void 0 ? [] : n,
            a = e.onChange,
            o = s.getFieldValue,
            c = function() {
                return o(u || []) || []
            },
            d = {
                add: function(e, t) {
                    var n = c();
                    t >= 0 && t <= n.length ? (l.keys = [].concat(E(l.keys.slice(0, t)), [l.id], E(l.keys.slice(t))), a([].concat(E(n.slice(0, t)), [e], E(n.slice(t))))) : (l.keys = [].concat(E(l.keys), [l.id]), a([].concat(E(n), [e]))), l.id += 1
                },
                remove: function(e) {
                    var t = c(),
                        n = new Set(Array.isArray(e) ? e : [e]);
                    n.size <= 0 || (l.keys = l.keys.filter(function(e, t) {
                        return !n.has(t)
                    }), a(t.filter(function(e, t) {
                        return !n.has(t)
                    })))
                },
                move: function(e, t) {
                    if (e !== t) {
                        var n = c();
                        e < 0 || e >= n.length || t < 0 || t >= n.length || (l.keys = Cn(l.keys, e, t), a(Cn(n, e, t)))
                    }
                }
            },
            f = i || [];
        return Array.isArray(f) || (f = []), r(f.map(function(e, t) {
            var n = l.keys[t];
            return n === void 0 && (l.keys[t] = l.id, n = l.keys[t], l.id += 1), {
                name: t,
                key: n,
                isListField: !0
            }
        }), d, t)
    }))) : (j(!1, `Form.List only accepts function as children.`), null)
}

function kn(e) {
    var t = !1,
        n = e.length,
        r = [];
    return e.length ? new Promise(function(i, a) {
        e.forEach(function(e, o) {
            e.catch(function(e) {
                return t = !0, e
            }).then(function(e) {
                --n, r[o] = e, !(n > 0) && (t && a(r), i(r))
            })
        })
    }) : Promise.resolve([])
}
k(), T(), l(), v(), h(), f();
var An = `__@field_split__`;

function jn(e) {
    return e.map(function(e) {
        return `${y(e)}:${e}`
    }).join(An)
}
var Q = function() {
    function e() {
        u(this, e), p(this, `kvs`, new Map)
    }
    return A(e, [{
        key: `set`,
        value: function(e, t) {
            this.kvs.set(jn(e), t)
        }
    }, {
        key: `get`,
        value: function(e) {
            return this.kvs.get(jn(e))
        }
    }, {
        key: `update`,
        value: function(e, t) {
            var n = t(this.get(e));
            n ? this.set(e, n) : this.delete(e)
        }
    }, {
        key: `delete`,
        value: function(e) {
            this.kvs.delete(jn(e))
        }
    }, {
        key: `map`,
        value: function(e) {
            return E(this.kvs.entries()).map(function(t) {
                var n = D(t, 2),
                    r = n[0],
                    i = n[1];
                return e({
                    key: r.split(An).map(function(e) {
                        var t = e.match(/^([^:]*):(.*)$/),
                            n = D(t, 3),
                            r = n[1],
                            i = n[2];
                        return r === `number` ? Number(i) : i
                    }),
                    value: i
                })
            })
        }
    }, {
        key: `toJSON`,
        value: function() {
            var e = {};
            return this.map(function(t) {
                var n = t.key,
                    r = t.value;
                return e[n.join(`.`)] = r, null
            }), e
        }
    }]), e
}();
k(), O(), T(), f(), v(), l(), h();
var Mn = [`name`],
    Nn = A(function e(t) {
        var n = this;
        u(this, e), p(this, `formHooked`, !1), p(this, `forceRootUpdate`, void 0), p(this, `subscribable`, !0), p(this, `store`, {}), p(this, `fieldEntities`, []), p(this, `initialValues`, {}), p(this, `callbacks`, {}), p(this, `validateMessages`, null), p(this, `preserve`, null), p(this, `lastValidatePromise`, null), p(this, `getForm`, function() {
            return {
                getFieldValue: n.getFieldValue,
                getFieldsValue: n.getFieldsValue,
                getFieldError: n.getFieldError,
                getFieldWarning: n.getFieldWarning,
                getFieldsError: n.getFieldsError,
                isFieldsTouched: n.isFieldsTouched,
                isFieldTouched: n.isFieldTouched,
                isFieldValidating: n.isFieldValidating,
                isFieldsValidating: n.isFieldsValidating,
                resetFields: n.resetFields,
                setFields: n.setFields,
                setFieldValue: n.setFieldValue,
                setFieldsValue: n.setFieldsValue,
                validateFields: n.validateFields,
                submit: n.submit,
                _init: !0,
                getInternalHooks: n.getInternalHooks
            }
        }), p(this, `getInternalHooks`, function(e) {
            return e === `RC_FORM_INTERNAL_HOOKS` ? (n.formHooked = !0, {
                dispatch: n.dispatch,
                initEntityValue: n.initEntityValue,
                registerField: n.registerField,
                useSubscribe: n.useSubscribe,
                setInitialValues: n.setInitialValues,
                destroyForm: n.destroyForm,
                setCallbacks: n.setCallbacks,
                setValidateMessages: n.setValidateMessages,
                getFields: n.getFields,
                setPreserve: n.setPreserve,
                getInitialValue: n.getInitialValue,
                registerWatch: n.registerWatch
            }) : (j(!1, "`getInternalHooks` is internal usage. Should not call directly."), null)
        }), p(this, `useSubscribe`, function(e) {
            n.subscribable = e
        }), p(this, `prevWithoutPreserves`, null), p(this, `setInitialValues`, function(e, t) {
            if (n.initialValues = e || {}, t) {
                var r, i = L(e, n.store);
                (r = n.prevWithoutPreserves) == null || r.map(function(t) {
                    var n = t.key;
                    i = I(i, n, F(e, n))
                }), n.prevWithoutPreserves = null, n.updateStore(i)
            }
        }), p(this, `destroyForm`, function(e) {
            if (e) n.updateStore({});
            else {
                var t = new Q;
                n.getFieldEntities(!0).forEach(function(e) {
                    n.isMergedPreserve(e.isPreserve()) || t.set(e.getNamePath(), !0)
                }), n.prevWithoutPreserves = t
            }
        }), p(this, `getInitialValue`, function(e) {
            var t = F(n.initialValues, e);
            return e.length ? L(t) : t
        }), p(this, `setCallbacks`, function(e) {
            n.callbacks = e
        }), p(this, `setValidateMessages`, function(e) {
            n.validateMessages = e
        }), p(this, `setPreserve`, function(e) {
            n.preserve = e
        }), p(this, `watchList`, []), p(this, `registerWatch`, function(e) {
            return n.watchList.push(e),
                function() {
                    n.watchList = n.watchList.filter(function(t) {
                        return t !== e
                    })
                }
        }), p(this, `notifyWatch`, function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            if (n.watchList.length) {
                var t = n.getFieldsValue(),
                    r = n.getFieldsValue(!0);
                n.watchList.forEach(function(n) {
                    n(t, r, e)
                })
            }
        }), p(this, `timeoutId`, null), p(this, `warningUnhooked`, function() {}), p(this, `updateStore`, function(e) {
            n.store = e
        }), p(this, `getFieldEntities`, function() {
            return arguments.length > 0 && arguments[0] !== void 0 && arguments[0] ? n.fieldEntities.filter(function(e) {
                return e.getNamePath().length
            }) : n.fieldEntities
        }), p(this, `getFieldsMap`, function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0],
                t = new Q;
            return n.getFieldEntities(e).forEach(function(e) {
                var n = e.getNamePath();
                t.set(n, e)
            }), t
        }), p(this, `getFieldEntitiesForNamePathList`, function(e) {
            if (!e) return n.getFieldEntities(!0);
            var t = n.getFieldsMap(!0);
            return e.map(function(e) {
                var n = Y(e);
                return t.get(n) || {
                    INVALIDATE_NAME_PATH: Y(e)
                }
            })
        }), p(this, `getFieldsValue`, function(e, t) {
            n.warningUnhooked();
            var r, i, a;
            if (e === !0 || Array.isArray(e) ? (r = e, i = t) : e && y(e) === `object` && (a = e.strict, i = e.filter), r === !0 && !i) return n.store;
            var o = n.getFieldEntitiesForNamePathList(Array.isArray(r) ? r : null),
                s = [];
            return o.forEach(function(e) {
                var t, n, o = `INVALIDATE_NAME_PATH` in e ? e.INVALIDATE_NAME_PATH : e.getNamePath();
                if (a) {
                    var c, l;
                    if ((c = (l = e).isList) != null && c.call(l)) return
                } else if (!r && (t = (n = e).isListField) != null && t.call(n)) return;
                if (!i) s.push(o);
                else {
                    var u = `getMeta` in e ? e.getMeta() : null;
                    i(u) && s.push(o)
                }
            }), yn(n.store, s.map(Y))
        }), p(this, `getFieldValue`, function(e) {
            n.warningUnhooked();
            var t = Y(e);
            return F(n.store, t)
        }), p(this, `getFieldsError`, function(e) {
            return n.warningUnhooked(), n.getFieldEntitiesForNamePathList(e).map(function(t, n) {
                return t && !(`INVALIDATE_NAME_PATH` in t) ? {
                    name: t.getNamePath(),
                    errors: t.getErrors(),
                    warnings: t.getWarnings()
                } : {
                    name: Y(e[n]),
                    errors: [],
                    warnings: []
                }
            })
        }), p(this, `getFieldError`, function(e) {
            n.warningUnhooked();
            var t = Y(e);
            return n.getFieldsError([t])[0].errors
        }), p(this, `getFieldWarning`, function(e) {
            n.warningUnhooked();
            var t = Y(e);
            return n.getFieldsError([t])[0].warnings
        }), p(this, `isFieldsTouched`, function() {
            n.warningUnhooked();
            var e = [...arguments],
                t = e[0],
                r = e[1],
                i, a = !1;
            e.length === 0 ? i = null : e.length === 1 ? Array.isArray(t) ? (i = t.map(Y), a = !1) : (i = null, a = t) : (i = t.map(Y), a = r);
            var o = n.getFieldEntities(!0),
                s = function(e) {
                    return e.isFieldTouched()
                };
            if (!i) return a ? o.every(function(e) {
                return s(e) || e.isList()
            }) : o.some(s);
            var c = new Q;
            i.forEach(function(e) {
                c.set(e, [])
            }), o.forEach(function(e) {
                var t = e.getNamePath();
                i.forEach(function(n) {
                    n.every(function(e, n) {
                        return t[n] === e
                    }) && c.update(n, function(t) {
                        return [].concat(E(t), [e])
                    })
                })
            });
            var l = function(e) {
                    return e.some(s)
                },
                u = c.map(function(e) {
                    return e.value
                });
            return a ? u.every(l) : u.some(l)
        }), p(this, `isFieldTouched`, function(e) {
            return n.warningUnhooked(), n.isFieldsTouched([e])
        }), p(this, `isFieldsValidating`, function(e) {
            n.warningUnhooked();
            var t = n.getFieldEntities();
            if (!e) return t.some(function(e) {
                return e.isFieldValidating()
            });
            var r = e.map(Y);
            return t.some(function(e) {
                return X(r, e.getNamePath()) && e.isFieldValidating()
            })
        }), p(this, `isFieldValidating`, function(e) {
            return n.warningUnhooked(), n.isFieldsValidating([e])
        }), p(this, `resetWithFieldInitialValue`, function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                t = new Q,
                r = n.getFieldEntities(!0);
            r.forEach(function(e) {
                var n = e.props.initialValue,
                    r = e.getNamePath();
                if (n !== void 0) {
                    var i = t.get(r) || new Set;
                    i.add({
                        entity: e,
                        value: n
                    }), t.set(r, i)
                }
            });
            var i = function(r) {
                    r.forEach(function(r) {
                        if (r.props.initialValue !== void 0) {
                            var i = r.getNamePath();
                            if (n.getInitialValue(i) !== void 0) j(!1, `Form already set 'initialValues' with path '${i.join(`.`)}'. Field can not overwrite it.`);
                            else {
                                var a = t.get(i);
                                if (a && a.size > 1) j(!1, `Multiple Field with path '${i.join(`.`)}' set 'initialValue'. Can not decide which one to pick.`);
                                else if (a) {
                                    var o = n.getFieldValue(i);
                                    !r.isListField() && (!e.skipExist || o === void 0) && n.updateStore(I(n.store, i, E(a)[0].value))
                                }
                            }
                        }
                    })
                },
                a;
            e.entities ? a = e.entities : e.namePathList ? (a = [], e.namePathList.forEach(function(e) {
                var n = t.get(e);
                if (n) {
                    var r;
                    (r = a).push.apply(r, E(E(n).map(function(e) {
                        return e.entity
                    })))
                }
            })) : a = r, i(a)
        }), p(this, `resetFields`, function(e) {
            n.warningUnhooked();
            var t = n.store;
            if (!e) n.updateStore(L(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(t, null, {
                type: `reset`
            }), n.notifyWatch();
            else {
                var r = e.map(Y);
                r.forEach(function(e) {
                    var t = n.getInitialValue(e);
                    n.updateStore(I(n.store, e, t))
                }), n.resetWithFieldInitialValue({
                    namePathList: r
                }), n.notifyObservers(t, r, {
                    type: `reset`
                }), n.notifyWatch(r)
            }
        }), p(this, `setFields`, function(e) {
            n.warningUnhooked();
            var t = n.store,
                r = [];
            e.forEach(function(e) {
                var i = e.name,
                    a = se(e, Mn),
                    o = Y(i);
                r.push(o), `value` in a && n.updateStore(I(n.store, o, a.value)), n.notifyObservers(t, [o], {
                    type: `setField`,
                    data: e
                })
            }), n.notifyWatch(r)
        }), p(this, `getFields`, function() {
            return n.getFieldEntities(!0).map(function(e) {
                var t = e.getNamePath(),
                    r = e.getMeta(),
                    i = d(d({}, r), {}, {
                        name: t,
                        value: n.getFieldValue(t)
                    });
                return Object.defineProperty(i, "originRCField", {
                    value: !0
                }), i
            })
        }), p(this, `initEntityValue`, function(e) {
            var t = e.props.initialValue;
            if (t !== void 0) {
                var r = e.getNamePath();
                F(n.store, r) === void 0 && n.updateStore(I(n.store, r, t))
            }
        }), p(this, `isMergedPreserve`, function(e) {
            return (e === void 0 ? n.preserve : e) ?? !0
        }), p(this, `registerField`, function(e) {
            n.fieldEntities.push(e);
            var t = e.getNamePath();
            if (n.notifyWatch([t]), e.props.initialValue !== void 0) {
                var r = n.store;
                n.resetWithFieldInitialValue({
                    entities: [e],
                    skipExist: !0
                }), n.notifyObservers(r, [e.getNamePath()], {
                    type: `valueUpdate`,
                    source: `internal`
                })
            }
            return function(r, i) {
                var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                if (n.fieldEntities = n.fieldEntities.filter(function(t) {
                        return t !== e
                    }), !n.isMergedPreserve(i) && (!r || a.length > 1)) {
                    var o = r ? void 0 : n.getInitialValue(t);
                    if (t.length && n.getFieldValue(t) !== o && n.fieldEntities.every(function(e) {
                            return !bn(e.getNamePath(), t)
                        })) {
                        var s = n.store;
                        n.updateStore(I(s, t, o, !0)), n.notifyObservers(s, [t], {
                            type: `remove`
                        }), n.triggerDependenciesUpdate(s, t)
                    }
                }
                n.notifyWatch([t])
            }
        }), p(this, `dispatch`, function(e) {
            switch (e.type) {
                case `updateValue`:
                    var t = e.namePath,
                        r = e.value;
                    n.updateValue(t, r);
                    break;
                case `validateField`:
                    var i = e.namePath,
                        a = e.triggerName;
                    n.validateFields([i], {
                        triggerName: a
                    })
            }
        }), p(this, `notifyObservers`, function(e, t, r) {
            if (n.subscribable) {
                var i = d(d({}, r), {}, {
                    store: n.getFieldsValue(!0)
                });
                n.getFieldEntities().forEach(function(n) {
                    var r = n.onStoreChange;
                    r(e, t, i)
                })
            } else n.forceRootUpdate()
        }), p(this, `triggerDependenciesUpdate`, function(e, t) {
            var r = n.getDependencyChildrenFields(t);
            return r.length && n.validateFields(r), n.notifyObservers(e, r, {
                type: `dependenciesUpdate`,
                relatedFields: [t].concat(E(r))
            }), r
        }), p(this, `updateValue`, function(e, t) {
            var r = Y(e),
                i = n.store;
            n.updateStore(I(n.store, r, t)), n.notifyObservers(i, [r], {
                type: `valueUpdate`,
                source: `internal`
            }), n.notifyWatch([r]);
            var a = n.triggerDependenciesUpdate(i, r),
                o = n.callbacks.onValuesChange;
            o && o(yn(n.store, [r]), n.getFieldsValue()), n.triggerOnFieldsChange([r].concat(E(a)))
        }), p(this, `setFieldsValue`, function(e) {
            n.warningUnhooked();
            var t = n.store;
            if (e) {
                var r = L(n.store, e);
                n.updateStore(r)
            }
            n.notifyObservers(t, null, {
                type: `valueUpdate`,
                source: `external`
            }), n.notifyWatch()
        }), p(this, `setFieldValue`, function(e, t) {
            n.setFields([{
                name: e,
                value: t,
                errors: [],
                warnings: []
            }])
        }), p(this, `getDependencyChildrenFields`, function(e) {
            var t = new Set,
                r = [],
                i = new Q;
            return n.getFieldEntities().forEach(function(e) {
                (e.props.dependencies || []).forEach(function(t) {
                    var n = Y(t);
                    i.update(n, function() {
                        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new Set;
                        return t.add(e), t
                    })
                })
            }), (function e(n) {
                (i.get(n) || new Set).forEach(function(n) {
                    if (!t.has(n)) {
                        t.add(n);
                        var i = n.getNamePath();
                        n.isFieldDirty() && i.length && (r.push(i), e(i))
                    }
                })
            })(e), r
        }), p(this, `triggerOnFieldsChange`, function(e, t) {
            var r = n.callbacks.onFieldsChange;
            if (r) {
                var i = n.getFields();
                if (t) {
                    var a = new Q;
                    t.forEach(function(e) {
                        var t = e.name,
                            n = e.errors;
                        a.set(t, n)
                    }), i.forEach(function(e) {
                        e.errors = a.get(e.name) || e.errors
                    })
                }
                var o = i.filter(function(t) {
                    var n = t.name;
                    return X(e, n)
                });
                o.length && r(o, i)
            }
        }), p(this, `validateFields`, function(e, t) {
            n.warningUnhooked();
            var r, i;
            Array.isArray(e) || typeof e == `string` || typeof t == `string` ? (r = e, i = t) : i = e;
            var a = !!r,
                o = a ? r.map(Y) : [],
                s = [],
                c = String(Date.now()),
                l = new Set,
                u = i || {},
                f = u.recursive,
                p = u.dirty;
            n.getFieldEntities(!0).forEach(function(e) {
                if (a || o.push(e.getNamePath()), e.props.rules && e.props.rules.length && (!p || e.isFieldDirty())) {
                    var t = e.getNamePath();
                    if (l.add(t.join(c)), !a || X(o, t, f)) {
                        var r = e.validateRules(d({
                            validateMessages: d(d({}, cn), n.validateMessages)
                        }, i));
                        s.push(r.then(function() {
                            return {
                                name: t,
                                errors: [],
                                warnings: []
                            }
                        }).catch(function(e) {
                            var n, r = [],
                                i = [];
                            return (n = e.forEach) == null || n.call(e, function(e) {
                                var t = e.rule.warningOnly,
                                    n = e.errors;
                                t ? i.push.apply(i, E(n)) : r.push.apply(r, E(n))
                            }), r.length ? Promise.reject({
                                name: t,
                                errors: r,
                                warnings: i
                            }) : {
                                name: t,
                                errors: r,
                                warnings: i
                            }
                        }))
                    }
                }
            });
            var m = kn(s);
            n.lastValidatePromise = m, m.catch(function(e) {
                return e
            }).then(function(e) {
                var t = e.map(function(e) {
                    return e.name
                });
                n.notifyObservers(n.store, t, {
                    type: `validateFinish`
                }), n.triggerOnFieldsChange(t, e)
            });
            var h = m.then(function() {
                return n.lastValidatePromise === m ? Promise.resolve(n.getFieldsValue(o)) : Promise.reject([])
            }).catch(function(e) {
                var t = e.filter(function(e) {
                    return e && e.errors.length
                });
                return Promise.reject({
                    values: n.getFieldsValue(o),
                    errorFields: t,
                    outOfDate: n.lastValidatePromise !== m
                })
            });
            h.catch(function(e) {
                return e
            });
            var g = o.filter(function(e) {
                return l.has(e.join(c))
            });
            return n.triggerOnFieldsChange(g), h
        }), p(this, `submit`, function() {
            n.warningUnhooked(), n.validateFields().then(function(e) {
                var t = n.callbacks.onFinish;
                if (t) try {
                    t(e)
                } catch (e) {
                    console.error(e)
                }
            }).catch(function(e) {
                var t = n.callbacks.onFinishFailed;
                t && t(e)
            })
        }), this.forceRootUpdate = t
    });

function Pn(e) {
    var t = P.useRef(),
        n = P.useState({}),
        r = D(n, 2)[1];
    return t.current || (t.current = e || new Nn(function() {
        r({})
    }).getForm()), [t.current]
}
h();
var Fn = P.createContext({
        triggerFormChange: function() {},
        triggerFormFinish: function() {},
        registerForm: function() {},
        unregisterForm: function() {}
    }),
    In = function(e) {
        var t = e.validateMessages,
            n = e.onFormChange,
            r = e.onFormFinish,
            i = e.children,
            a = P.useContext(Fn),
            o = P.useRef({});
        return P.createElement(Fn.Provider, {
            value: d(d({}, a), {}, {
                validateMessages: d(d({}, a.validateMessages), t),
                triggerFormChange: function(e, t) {
                    n && n(e, {
                        changedFields: t,
                        forms: o.current
                    }), a.triggerFormChange(e, t)
                },
                triggerFormFinish: function(e, t) {
                    r && r(e, {
                        values: t,
                        forms: o.current
                    }), a.triggerFormFinish(e, t)
                },
                registerForm: function(e, t) {
                    e && (o.current = d(d({}, o.current), {}, p({}, e, t))), a.registerForm(e, t)
                },
                unregisterForm: function(e) {
                    var t = d({}, o.current);
                    delete t[e], o.current = t, a.unregisterForm(e)
                }
            })
        }, i)
    };
n(), k(), O();
var Ln = [`name`, `initialValues`, `fields`, `form`, `preserve`, `children`, `component`, `validateMessages`, `validateTrigger`, `onValuesChange`, `onFieldsChange`, `onFinish`, `onFinishFailed`, `clearOnDestroy`],
    Rn = function(e, t) {
        var n = e.name,
            r = e.initialValues,
            i = e.fields,
            o = e.form,
            s = e.preserve,
            c = e.children,
            l = e.component,
            u = l === void 0 ? `form` : l,
            f = e.validateMessages,
            p = e.validateTrigger,
            m = p === void 0 ? `onChange` : p,
            h = e.onValuesChange,
            g = e.onFieldsChange,
            _ = e.onFinish,
            v = e.onFinishFailed,
            y = e.clearOnDestroy,
            b = se(e, Ln),
            x = P.useRef(null),
            S = P.useContext(Fn),
            ee = Pn(o),
            C = D(ee, 1)[0],
            w = C.getInternalHooks(B),
            te = w.useSubscribe,
            ne = w.setInitialValues,
            T = w.setCallbacks,
            E = w.setValidateMessages,
            re = w.setPreserve,
            ie = w.destroyForm;
        P.useImperativeHandle(t, function() {
            return d(d({}, C), {}, {
                nativeElement: x.current
            })
        }), P.useEffect(function() {
            return S.registerForm(n, C),
                function() {
                    S.unregisterForm(n)
                }
        }, [S, C, n]), E(d(d({}, S.validateMessages), f)), T({
            onValuesChange: h,
            onFieldsChange: function(e) {
                if (S.triggerFormChange(n, e), g) {
                    var t = [...arguments].slice(1);
                    g.apply(void 0, [e].concat(t))
                }
            },
            onFinish: function(e) {
                S.triggerFormFinish(n, e), _ && _(e)
            },
            onFinishFailed: v
        }), re(s);
        var O = P.useRef(null);
        ne(r, !O.current), O.current || (O.current = !0), P.useEffect(function() {
            return function() {
                return ie(y)
            }
        }, []);
        var ae, oe = typeof c == `function`;
        ae = oe ? c(C.getFieldsValue(!0), C) : c, te(!oe);
        var k = P.useRef();
        P.useEffect(function() {
            xn(k.current || [], i || []) || C.setFields(i || []), k.current = i
        }, [i, C]);
        var ce = P.useMemo(function() {
                return d(d({}, C), {}, {
                    validateTrigger: m
                })
            }, [C, m]),
            A = P.createElement(U.Provider, {
                value: null
            }, P.createElement(H.Provider, {
                value: ce
            }, ae));
        return u === !1 ? A : P.createElement(u, a({}, b, {
            ref: x,
            onSubmit: function(e) {
                e.preventDefault(), e.stopPropagation(), C.submit()
            },
            onReset: function(e) {
                var t;
                e.preventDefault(), C.resetFields(), (t = b.onReset) == null || t.call(b, e)
            }
        }), A)
    };
k();

function zn(e) {
    try {
        return JSON.stringify(e)
    } catch {
        return Math.random()
    }
}

function Bn() {
    var e = [...arguments],
        t = e[0],
        n = e[1],
        r = n === void 0 ? {} : n,
        i = yt(r) ? {
            form: r
        } : r,
        a = i.form,
        o = (0, P.useState)(),
        s = D(o, 2),
        c = s[0],
        l = s[1],
        u = (0, P.useMemo)(function() {
            return zn(c)
        }, [c]),
        d = (0, P.useRef)(u);
    d.current = u;
    var f = (0, P.useContext)(H),
        p = a || f,
        m = p && p._init,
        h = Y(t),
        g = (0, P.useRef)(h);
    return g.current = h, (0, P.useEffect)(function() {
        if (m) {
            var e = p.getFieldsValue,
                n = p.getInternalHooks,
                r = n(B).registerWatch,
                a = function(e, n) {
                    var r = i.preserve ? n : e;
                    return typeof t == `function` ? t(r) : F(r, g.current)
                },
                o = r(function(e, t) {
                    var n = a(e, t),
                        r = zn(n);
                    d.current !== r && (d.current = r, l(n))
                }),
                s = a(e(), e(!0));
            return c !== s && l(s), o
        }
    }, [m]), c
}
var $ = P.forwardRef(Rn);
$.FormProvider = In, $.Field = Dn, $.List = On, $.useForm = Pn, $.useWatch = Bn;
var Vn = P.createContext({
        labelAlign: `right`,
        layout: `horizontal`,
        itemRef: () => {}
    }),
    Hn = P.createContext(null),
    Un = e => {
        let t = fe(e, [`prefixCls`]);
        return P.createElement(In, Object.assign({}, t))
    },
    Wn = P.createContext({
        prefixCls: ``
    }),
    Gn = P.createContext({}),
    Kn = ({
        children: e,
        status: t,
        override: n
    }) => {
        let r = P.useContext(Gn),
            i = P.useMemo(() => {
                let e = Object.assign({}, r);
                return n && delete e.isFormItemInput, t && (delete e.status, delete e.hasFeedback, delete e.feedbackIcon), e
            }, [t, n, r]);
        return P.createElement(Gn.Provider, {
            value: i
        }, e)
    },
    qn = P.createContext(void 0),
    Jn = e => {
        let {
            space: t,
            form: n,
            children: r
        } = e;
        if (r == null) return null;
        let i = r;
        return n && (i = P.createElement(Kn, {
            override: !0,
            status: !0
        }, i)), t && (i = P.createElement(ie, null, i)), i
    };
export {
    Ce as A, Fe as C, we as D, ke as E, I as M, F as N, R as O, ge as P, Re as S, Te as T, pt as _, Un as a, Qe as b, qn as c, Pn as d, On as f, _t as g, H as h, Wn as i, L as j, Se as k, $ as l, U as m, Vn as n, Kn as o, Dn as p, Gn as r, Hn as s, Jn as t, Bn as u, it as v, Pe as w, ze as x, at as y
};