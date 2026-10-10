import {
    a as e,
    n as t,
    o as n,
    r,
    t as i
} from "./rolldown-runtime.js";
import {
    C as a,
    E as o,
    I as s,
    L as c,
    M as l,
    P as u,
    Z as d,
    s as f,
    t as p
} from "./utils.js";
import {
    t as m
} from "./react-1.js";
import {
    t as h
} from "./button.js";
import {
    t as g
} from "./input.js";
import {
    t as _
} from "./App-1.js";
import {
    t as v
} from "./App-4.js";
import {
    t as y
} from "./jsx-runtime.js";
import {
    l as b,
    n as x,
    s as S
} from "./_index.js";
import {
    t as C
} from "./NavigateTo.js";
import {
    a as w,
    f as T,
    i as E,
    l as D,
    n as O,
    o as k,
    p as A,
    r as j,
    t as M,
    u as N
} from "./_baseAssignValue.js";
import {
    E as P,
    O as F,
    S as I,
    _ as L,
    a as R,
    b as z,
    d as B,
    f as V,
    h as ee,
    j as H,
    l as te,
    o as ne,
    r as re,
    s as ie,
    u as ae,
    v as oe,
    y as se
} from "./toNumber.js";
import "./TrackPostHogEvent.js";
var ce = i(((e, t) => {
        function n(e, t) {
            for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
            return e
        }
        t.exports = n
    })),
    le = i(((e, t) => {
        var n = M(),
            r = F(),
            i = Object.prototype.hasOwnProperty;

        function a(e, t, a) {
            var o = e[t];
            (!(i.call(e, t) && r(o, a)) || a === void 0 && !(t in e)) && n(e, t, a)
        }
        t.exports = a
    })),
    U = i(((e, t) => {
        var n = le(),
            r = M();

        function i(e, t, i, a) {
            var o = !i;
            i || (i = {});
            for (var s = -1, c = t.length; ++s < c;) {
                var l = t[s],
                    u = a ? a(i[l], e[l], l, i, e) : void 0;
                u === void 0 && (u = e[l]), o ? r(i, l, u) : n(i, l, u)
            }
            return i
        }
        t.exports = i
    })),
    ue = i(((e, t) => {
        var n = U(),
            r = ne();

        function i(e, t) {
            return e && n(t, r(t), e)
        }
        t.exports = i
    })),
    de = i(((e, t) => {
        function n(e) {
            var t = [];
            if (e != null)
                for (var n in Object(e)) t.push(n);
            return t
        }
        t.exports = n
    })),
    fe = i(((e, t) => {
        var n = H(),
            r = te(),
            i = de(),
            a = Object.prototype.hasOwnProperty;

        function o(e) {
            if (!n(e)) return i(e);
            var t = r(e),
                o = [];
            for (var s in e)(s != `constructor` || !t && a.call(e, s)) && o.push(s);
            return o
        }
        t.exports = o
    })),
    W = i(((e, t) => {
        var n = ae(),
            r = fe(),
            i = ie();

        function a(e) {
            return i(e) ? n(e, !0) : r(e)
        }
        t.exports = a
    })),
    pe = i(((e, t) => {
        var n = U(),
            r = W();

        function i(e, t) {
            return e && n(t, r(t), e)
        }
        t.exports = i
    })),
    me = i(((e, t) => {
        var n = c(),
            r = typeof e == `object` && e && !e.nodeType && e,
            i = r && typeof t == `object` && t && !t.nodeType && t,
            a = i && i.exports === r ? n.Buffer : void 0,
            o = a ? a.allocUnsafe : void 0;

        function s(e, t) {
            if (t) return e.slice();
            var n = e.length,
                r = o ? o(n) : new e.constructor(n);
            return e.copy(r), r
        }
        t.exports = s
    })),
    he = i(((e, t) => {
        function n(e, t) {
            var n = -1,
                r = e.length;
            for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
            return t
        }
        t.exports = n
    })),
    ge = i(((e, t) => {
        var n = U(),
            r = L();

        function i(e, t) {
            return n(e, r(e), t)
        }
        t.exports = i
    })),
    _e = i(((e, t) => {
        var n = z(),
            r = j(),
            i = L(),
            a = oe();
        t.exports = Object.getOwnPropertySymbols ? function(e) {
            for (var t = []; e;) n(t, i(e)), e = r(e);
            return t
        } : a
    })),
    ve = i(((e, t) => {
        var n = U(),
            r = _e();

        function i(e, t) {
            return n(e, r(e), t)
        }
        t.exports = i
    })),
    ye = i(((e, t) => {
        var n = se(),
            r = _e(),
            i = W();

        function a(e) {
            return n(e, i, r)
        }
        t.exports = a
    })),
    be = i(((e, t) => {
        var n = Object.prototype.hasOwnProperty;

        function r(e) {
            var t = e.length,
                r = new e.constructor(t);
            return t && typeof e[0] == `string` && n.call(e, `index`) && (r.index = e.index, r.input = e.input), r
        }
        t.exports = r
    })),
    G = i(((e, t) => {
        var n = I();

        function r(e) {
            var t = new e.constructor(e.byteLength);
            return new n(t).set(new n(e)), t
        }
        t.exports = r
    })),
    xe = i(((e, t) => {
        var n = G();

        function r(e, t) {
            var r = t ? n(e.buffer) : e.buffer;
            return new e.constructor(r, e.byteOffset, e.byteLength)
        }
        t.exports = r
    })),
    Se = i(((e, t) => {
        var n = /\w*$/;

        function r(e) {
            var t = new e.constructor(e.source, n.exec(e));
            return t.lastIndex = e.lastIndex, t
        }
        t.exports = r
    })),
    Ce = i(((e, t) => {
        var n = s(),
            r = n ? n.prototype : void 0,
            i = r ? r.valueOf : void 0;

        function a(e) {
            return i ? Object(i.call(e)) : {}
        }
        t.exports = a
    })),
    we = i(((e, t) => {
        var n = G();

        function r(e, t) {
            var r = t ? n(e.buffer) : e.buffer;
            return new e.constructor(r, e.byteOffset, e.length)
        }
        t.exports = r
    })),
    Te = i(((e, t) => {
        var n = G(),
            r = xe(),
            i = Se(),
            a = Ce(),
            o = we(),
            s = `[object Boolean]`,
            c = `[object Date]`,
            l = `[object Map]`,
            u = `[object Number]`,
            d = `[object RegExp]`,
            f = `[object Set]`,
            p = `[object String]`,
            m = `[object Symbol]`,
            h = `[object ArrayBuffer]`,
            g = `[object DataView]`,
            _ = `[object Float32Array]`,
            v = `[object Float64Array]`,
            y = `[object Int8Array]`,
            b = `[object Int16Array]`,
            x = `[object Int32Array]`,
            S = `[object Uint8Array]`,
            C = `[object Uint8ClampedArray]`,
            w = `[object Uint16Array]`,
            T = `[object Uint32Array]`;

        function E(e, t, E) {
            var D = e.constructor;
            switch (t) {
                case h:
                    return n(e);
                case s:
                case c:
                    return new D(+e);
                case g:
                    return r(e, E);
                case _:
                case v:
                case y:
                case b:
                case x:
                case S:
                case C:
                case w:
                case T:
                    return o(e, E);
                case l:
                    return new D;
                case u:
                case p:
                    return new D(e);
                case d:
                    return i(e);
                case f:
                    return new D;
                case m:
                    return a(e)
            }
        }
        t.exports = E
    })),
    K = i(((e, t) => {
        var n = H(),
            r = Object.create;
        t.exports = function() {
            function e() {}
            return function(t) {
                if (!n(t)) return {};
                if (r) return r(t);
                e.prototype = t;
                var i = new e;
                return e.prototype = void 0, i
            }
        }()
    })),
    Ee = i(((e, t) => {
        var n = K(),
            r = j(),
            i = te();

        function a(e) {
            return typeof e.constructor == `function` && !i(e) ? n(r(e)) : {}
        }
        t.exports = a
    })),
    q = i(((e, t) => {
        var n = re(),
            r = l(),
            i = `[object Map]`;

        function a(e) {
            return r(e) && n(e) == i
        }
        t.exports = a
    })),
    De = i(((e, t) => {
        var n = q(),
            r = V(),
            i = B(),
            a = i && i.isMap;
        t.exports = a ? r(a) : n
    })),
    Oe = i(((e, t) => {
        var n = re(),
            r = l(),
            i = `[object Set]`;

        function a(e) {
            return r(e) && n(e) == i
        }
        t.exports = a
    })),
    ke = i(((e, t) => {
        var n = Oe(),
            r = V(),
            i = B(),
            a = i && i.isSet;
        t.exports = a ? r(a) : n
    })),
    Ae = i(((e, t) => {
        var n = P(),
            r = ce(),
            i = le(),
            a = ue(),
            o = pe(),
            s = me(),
            c = he(),
            l = ge(),
            d = ve(),
            f = R(),
            p = ye(),
            m = re(),
            h = be(),
            g = Te(),
            _ = Ee(),
            v = u(),
            y = ee(),
            b = De(),
            x = H(),
            S = ke(),
            C = ne(),
            w = W(),
            T = 1,
            E = 2,
            D = 4,
            O = `[object Arguments]`,
            k = `[object Array]`,
            A = `[object Boolean]`,
            j = `[object Date]`,
            M = `[object Error]`,
            N = `[object Function]`,
            F = `[object GeneratorFunction]`,
            I = `[object Map]`,
            L = `[object Number]`,
            z = `[object Object]`,
            B = `[object RegExp]`,
            V = `[object Set]`,
            te = `[object String]`,
            ie = `[object Symbol]`,
            ae = `[object WeakMap]`,
            oe = `[object ArrayBuffer]`,
            se = `[object DataView]`,
            U = `[object Float32Array]`,
            de = `[object Float64Array]`,
            fe = `[object Int8Array]`,
            _e = `[object Int16Array]`,
            G = `[object Int32Array]`,
            xe = `[object Uint8Array]`,
            Se = `[object Uint8ClampedArray]`,
            Ce = `[object Uint16Array]`,
            we = `[object Uint32Array]`,
            K = {};
        K[O] = K[k] = K[oe] = K[se] = K[A] = K[j] = K[U] = K[de] = K[fe] = K[_e] = K[G] = K[I] = K[L] = K[z] = K[B] = K[V] = K[te] = K[ie] = K[xe] = K[Se] = K[Ce] = K[we] = !0, K[M] = K[N] = K[ae] = !1;

        function q(e, t, u, k, A, j) {
            var M, P = t & T,
                I = t & E,
                L = t & D;
            if (u && (M = A ? u(e, k, A, j) : u(e)), M !== void 0) return M;
            if (!x(e)) return e;
            var R = v(e);
            if (R) {
                if (M = h(e), !P) return c(e, M)
            } else {
                var B = m(e),
                    V = B == N || B == F;
                if (y(e)) return s(e, P);
                if (B == z || B == O || V && !A) {
                    if (M = I || V ? {} : _(e), !P) return I ? d(e, o(M, e)) : l(e, a(M, e))
                } else {
                    if (!K[B]) return A ? e : {};
                    M = g(e, B, P)
                }
            }
            j || (j = new n);
            var ee = j.get(e);
            if (ee) return ee;
            j.set(e, M), S(e) ? e.forEach(function(n) {
                M.add(q(n, t, u, n, e, j))
            }) : b(e) && e.forEach(function(n, r) {
                M.set(r, q(n, t, u, r, e, j))
            });
            var H = R ? void 0 : (L ? I ? p : f : I ? w : C)(e);
            return r(H || e, function(n, r) {
                H && (r = n, n = e[r]), i(M, r, q(n, t, u, r, e, j))
            }), M
        }
        t.exports = q
    })),
    je = n(m()),
    J = y(),
    Me = [`Only students in your class can join your games`, `Makes inappropriate names impossible`, `Easily view report data for individual classes and students`, `Students can leave assignments and pick back up where they left off`],
    Ne = e => (0, J.jsxs)(`div`, {
        style: {
            marginTop: 8
        },
        className: `flex vc`,
        children: [(0, J.jsx)(`i`, {
            className: `fas fa-check-circle`,
            style: {
                color: `#43a047`,
                marginRight: 8,
                fontSize: 25
            }
        }), ` `, e.text]
    }),
    Pe = () => (0, J.jsxs)(Fe, {
        children: [(0, J.jsx)(Ie, {}), (0, J.jsxs)(`div`, {
            style: {
                marginLeft: 45
            },
            children: [(0, J.jsx)(Le, {
                children: `New Class`
            }), (0, J.jsx)(Re, {
                children: Me.map(e => (0, J.jsx)(Ne, {
                    text: e
                }, e))
            })]
        })]
    }),
    Fe = b.div.attrs({
        className: `flex vc`
    })`
  margin-top: 40px;
  margin-bottom: 40px;
`,
    Ie = b.img.attrs({
        src: `/client/img/dashboard/groups.svg`,
        alt: `Group of hands`
    })`
  height: 135px;
`,
    Le = b.h1`
  margin-bottom: 0px;
  color: ${x.Black};
  font-weight: ${S.UltraBold};
  font-size: 42px;
  margin-bottom: 16px;
  line-height: 42px;
`,
    Re = b.p`
  font-size: 17px;
  line-height: 20px;
  margin-top: -4px;
  margin-bottom: 0px;
  color: rgba(0, 0, 0, 0.75);
`,
    ze = i(((e, t) => {
        var n = T();

        function r(e) {
            return typeof e == `function` ? e : n
        }
        t.exports = r
    })),
    Be = i(((e, t) => {
        var n = N(),
            r = ze();

        function i(e, t) {
            return e && n(e, r(t))
        }
        t.exports = i
    })),
    Ve = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.flattenNames = void 0;
        var t = a(A()),
            n = a(Be()),
            r = a(O()),
            i = a(E());

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.flattenNames = function e() {
            var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
                o = [];
            return (0, i.default)(a, function(i) {
                Array.isArray(i) ? e(i).map(function(e) {
                    return o.push(e)
                }) : (0, r.default)(i) ? (0, n.default)(i, function(e, t) {
                    e === !0 && o.push(t), o.push(t + `-` + e)
                }) : (0, t.default)(i) && o.push(i)
            }), o
        }
    })),
    He = i(((e, t) => {
        var n = Ae(),
            r = 1,
            i = 4;

        function a(e) {
            return n(e, r | i)
        }
        t.exports = a
    })),
    Ue = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.mergeClasses = void 0;
        var t = i(Be()),
            n = i(He()),
            r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.mergeClasses = function(e) {
            var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
                a = e.default && (0, n.default)(e.default) || {};
            return i.map(function(n) {
                var i = e[n];
                return i && (0, t.default)(i, function(e, t) {
                    a[t] || (a[t] = {}), a[t] = r({}, a[t], i[t])
                }), n
            }), a
        }
    })),
    We = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.autoprefix = void 0;
        var t = r(Be()),
            n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = {
            borderRadius: function(e) {
                return {
                    msBorderRadius: e,
                    MozBorderRadius: e,
                    OBorderRadius: e,
                    WebkitBorderRadius: e,
                    borderRadius: e
                }
            },
            boxShadow: function(e) {
                return {
                    msBoxShadow: e,
                    MozBoxShadow: e,
                    OBoxShadow: e,
                    WebkitBoxShadow: e,
                    boxShadow: e
                }
            },
            userSelect: function(e) {
                return {
                    WebkitTouchCallout: e,
                    KhtmlUserSelect: e,
                    MozUserSelect: e,
                    msUserSelect: e,
                    WebkitUserSelect: e,
                    userSelect: e
                }
            },
            flex: function(e) {
                return {
                    WebkitBoxFlex: e,
                    MozBoxFlex: e,
                    WebkitFlex: e,
                    msFlex: e,
                    flex: e
                }
            },
            flexBasis: function(e) {
                return {
                    WebkitFlexBasis: e,
                    flexBasis: e
                }
            },
            justifyContent: function(e) {
                return {
                    WebkitJustifyContent: e,
                    justifyContent: e
                }
            },
            transition: function(e) {
                return {
                    msTransition: e,
                    MozTransition: e,
                    OTransition: e,
                    WebkitTransition: e,
                    transition: e
                }
            },
            transform: function(e) {
                return {
                    msTransform: e,
                    MozTransform: e,
                    OTransform: e,
                    WebkitTransform: e,
                    transform: e
                }
            },
            absolute: function(e) {
                var t = e && e.split(` `);
                return {
                    position: `absolute`,
                    top: t && t[0],
                    right: t && t[1],
                    bottom: t && t[2],
                    left: t && t[3]
                }
            },
            extend: function(e, t) {
                return t[e] || {
                    extend: e
                }
            }
        };
        e.default = e.autoprefix = function(e) {
            var r = {};
            return (0, t.default)(e, function(e, a) {
                var o = {};
                (0, t.default)(e, function(e, t) {
                    var r = i[t];
                    r ? o = n({}, o, r(e)) : o[t] = e
                }), r[a] = o
            }), r
        }
    })),
    Ge = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.hover = void 0;
        var t = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            n = r(m());

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
        }

        function a(e, t) {
            if (!e) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
            return t && (typeof t == `object` || typeof t == `function`) ? t : e
        }

        function o(e, t) {
            if (typeof t != `function` && t !== null) throw TypeError(`Super expression must either be null or a function, not ` + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        e.default = e.hover = function(e) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `span`;
            return function(s) {
                o(c, s);

                function c() {
                    var o, s, l, u;
                    i(this, c);
                    var d = [...arguments];
                    return u = (s = (l = a(this, (o = c.__proto__ || Object.getPrototypeOf(c)).call.apply(o, [this].concat(d))), l), l.state = {
                        hover: !1
                    }, l.handleMouseOver = function() {
                        return l.setState({
                            hover: !0
                        })
                    }, l.handleMouseOut = function() {
                        return l.setState({
                            hover: !1
                        })
                    }, l.render = function() {
                        return n.default.createElement(r, {
                            onMouseOver: l.handleMouseOver,
                            onMouseOut: l.handleMouseOut
                        }, n.default.createElement(e, t({}, l.props, l.state)))
                    }, s), a(l, u)
                }
                return c
            }(n.default.Component)
        }
    })),
    Ke = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.active = void 0;
        var t = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            n = r(m());

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
        }

        function a(e, t) {
            if (!e) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
            return t && (typeof t == `object` || typeof t == `function`) ? t : e
        }

        function o(e, t) {
            if (typeof t != `function` && t !== null) throw TypeError(`Super expression must either be null or a function, not ` + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        e.default = e.active = function(e) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `span`;
            return function(s) {
                o(c, s);

                function c() {
                    var o, s, l, u;
                    i(this, c);
                    var d = [...arguments];
                    return u = (s = (l = a(this, (o = c.__proto__ || Object.getPrototypeOf(c)).call.apply(o, [this].concat(d))), l), l.state = {
                        active: !1
                    }, l.handleMouseDown = function() {
                        return l.setState({
                            active: !0
                        })
                    }, l.handleMouseUp = function() {
                        return l.setState({
                            active: !1
                        })
                    }, l.render = function() {
                        return n.default.createElement(r, {
                            onMouseDown: l.handleMouseDown,
                            onMouseUp: l.handleMouseUp
                        }, n.default.createElement(e, t({}, l.props, l.state)))
                    }, s), a(l, u)
                }
                return c
            }(n.default.Component)
        }
    })),
    qe = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function(e, t) {
            var n = {},
                r = function(e) {
                    n[e] = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
                };
            return e === 0 && r(`first-child`), e === t - 1 && r(`last-child`), (e === 0 || e % 2 == 0) && r(`even`), Math.abs(e % 2) === 1 && r(`odd`), r(`nth-child`, e), n
        }
    })),
    Y = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ReactCSS = e.loop = e.handleActive = e.handleHover = e.hover = void 0;
        var t = s(Ve()),
            n = s(Ue()),
            r = s(We()),
            i = s(Ge()),
            a = s(Ke()),
            o = s(qe());

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.hover = i.default, e.handleHover = i.default, e.handleActive = a.default, e.loop = o.default, e.default = e.ReactCSS = function(e) {
            var i = [...arguments].slice(1),
                a = (0, t.default)(i),
                o = (0, n.default)(e, a);
            return (0, r.default)(o)
        }
    })),
    Je = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.calculateChange = function(e, t, n, r) {
            e.preventDefault();
            var i = r.clientWidth,
                a = r.clientHeight,
                o = typeof e.pageX == `number` ? e.pageX : e.touches[0].pageX,
                s = typeof e.pageY == `number` ? e.pageY : e.touches[0].pageY,
                c = o - (r.getBoundingClientRect().left + window.pageXOffset),
                l = s - (r.getBoundingClientRect().top + window.pageYOffset);
            if (n.direction === `vertical`) {
                var u = void 0;
                if (u = l < 0 ? 0 : l > a ? 1 : Math.round(l * 100 / a) / 100, n.hsl.a !== u) return {
                    h: n.hsl.h,
                    s: n.hsl.s,
                    l: n.hsl.l,
                    a: u,
                    source: `rgb`
                }
            } else {
                var d = void 0;
                if (d = c < 0 ? 0 : c > i ? 1 : Math.round(c * 100 / i) / 100, n.a !== d) return {
                    h: n.hsl.h,
                    s: n.hsl.s,
                    l: n.hsl.l,
                    a: d,
                    source: `rgb`
                }
            }
            return null
        }
    })),
    Ye = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t = {},
            n = e.render = function(e, t, n, r) {
                if (typeof document > `u` && !r) return null;
                var i = r ? new r : document.createElement(`canvas`);
                i.width = n * 2, i.height = n * 2;
                var a = i.getContext(`2d`);
                return a ? (a.fillStyle = e, a.fillRect(0, 0, i.width, i.height), a.fillStyle = t, a.fillRect(0, 0, n, n), a.translate(n, n), a.fillRect(0, 0, n, n), i.toDataURL()) : null
            };
        e.get = function(e, r, i, a) {
            var o = e + `-` + r + `-` + i + (a ? `-server` : ``),
                s = n(e, r, i, a);
            return t[o] ? t[o] : (t[o] = s, s)
        }
    })),
    Xe = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Checkboard = void 0;
        var t = a(m()),
            n = a(Y()),
            r = i(Ye());

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (e != null)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = e.Checkboard = function(e) {
            var i = e.white,
                a = e.grey,
                o = e.size,
                s = e.renderers,
                c = e.borderRadius,
                l = e.boxShadow,
                u = (0, n.default)({
                    default: {
                        grid: {
                            borderRadius: c,
                            boxShadow: l,
                            absolute: `0px 0px 0px 0px`,
                            background: `url(` + r.get(i, a, o, s.canvas) + `) center left`
                        }
                    }
                });
            return t.default.createElement(`div`, {
                style: u.grid
            })
        };
        o.defaultProps = {
            size: 8,
            white: `transparent`,
            grey: `rgba(0,0,0,.08)`,
            renderers: {}
        }, e.default = o
    })),
    Ze = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Alpha = void 0;
        var t = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            n = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, `value` in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            r = m(),
            i = l(r),
            a = l(Y()),
            o = c(Je()),
            s = l(Xe());

        function c(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (e != null)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(e, t) {
            if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
        }

        function d(e, t) {
            if (!e) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
            return t && (typeof t == `object` || typeof t == `function`) ? t : e
        }

        function f(e, t) {
            if (typeof t != `function` && t !== null) throw TypeError(`Super expression must either be null or a function, not ` + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        e.default = e.Alpha = function(e) {
            f(r, e);

            function r() {
                var e, t, n, i;
                u(this, r);
                var a = [...arguments];
                return i = (t = (n = d(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [this].concat(a))), n), n.handleChange = function(e, t) {
                    var r = o.calculateChange(e, t, n.props, n.container);
                    r && n.props.onChange && n.props.onChange(r, e)
                }, n.handleMouseDown = function(e) {
                    n.handleChange(e, !0), window.addEventListener(`mousemove`, n.handleChange), window.addEventListener(`mouseup`, n.handleMouseUp)
                }, n.handleMouseUp = function() {
                    n.unbindEventListeners()
                }, n.unbindEventListeners = function() {
                    window.removeEventListener(`mousemove`, n.handleChange), window.removeEventListener(`mouseup`, n.handleMouseUp)
                }, t), d(n, i)
            }
            return n(r, [{
                key: `componentWillUnmount`,
                value: function() {
                    this.unbindEventListeners()
                }
            }, {
                key: `render`,
                value: function() {
                    var e = this,
                        n = this.props.rgb,
                        r = (0, a.default)({
                            default: {
                                alpha: {
                                    absolute: `0px 0px 0px 0px`,
                                    borderRadius: this.props.radius
                                },
                                checkboard: {
                                    absolute: `0px 0px 0px 0px`,
                                    overflow: `hidden`,
                                    borderRadius: this.props.radius
                                },
                                gradient: {
                                    absolute: `0px 0px 0px 0px`,
                                    background: `linear-gradient(to right, rgba(` + n.r + `,` + n.g + `,` + n.b + `, 0) 0%,
           rgba(` + n.r + `,` + n.g + `,` + n.b + `, 1) 100%)`,
                                    boxShadow: this.props.shadow,
                                    borderRadius: this.props.radius
                                },
                                container: {
                                    position: `relative`,
                                    height: `100%`,
                                    margin: `0 3px`
                                },
                                pointer: {
                                    position: `absolute`,
                                    left: n.a * 100 + `%`
                                },
                                slider: {
                                    width: `4px`,
                                    borderRadius: `1px`,
                                    height: `8px`,
                                    boxShadow: `0 0 2px rgba(0, 0, 0, .6)`,
                                    background: `#fff`,
                                    marginTop: `1px`,
                                    transform: `translateX(-2px)`
                                }
                            },
                            vertical: {
                                gradient: {
                                    background: `linear-gradient(to bottom, rgba(` + n.r + `,` + n.g + `,` + n.b + `, 0) 0%,
           rgba(` + n.r + `,` + n.g + `,` + n.b + `, 1) 100%)`
                                },
                                pointer: {
                                    left: 0,
                                    top: n.a * 100 + `%`
                                }
                            },
                            overwrite: t({}, this.props.style)
                        }, {
                            vertical: this.props.direction === `vertical`,
                            overwrite: !0
                        });
                    return i.default.createElement(`div`, {
                        style: r.alpha
                    }, i.default.createElement(`div`, {
                        style: r.checkboard
                    }, i.default.createElement(s.default, {
                        renderers: this.props.renderers
                    })), i.default.createElement(`div`, {
                        style: r.gradient
                    }), i.default.createElement(`div`, {
                        style: r.container,
                        ref: function(t) {
                            return e.container = t
                        },
                        onMouseDown: this.handleMouseDown,
                        onTouchMove: this.handleChange,
                        onTouchStart: this.handleChange
                    }, i.default.createElement(`div`, {
                        style: r.pointer
                    }, this.props.pointer ? i.default.createElement(this.props.pointer, this.props) : i.default.createElement(`div`, {
                        style: r.slider
                    }))))
                }
            }]), r
        }(r.PureComponent || r.Component)
    })),
    Qe = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.EditableInput = void 0;
        var t = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, `value` in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            n = m(),
            r = a(n),
            i = a(Y());

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function s(e, t) {
            if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
        }

        function c(e, t) {
            if (!e) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
            return t && (typeof t == `object` || typeof t == `function`) ? t : e
        }

        function l(e, t) {
            if (typeof t != `function` && t !== null) throw TypeError(`Super expression must either be null or a function, not ` + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        e.default = e.EditableInput = function(e) {
            l(n, e);

            function n(e) {
                s(this, n);
                var t = c(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return t.handleBlur = function() {
                    t.state.blurValue && t.setState({
                        value: t.state.blurValue,
                        blurValue: null
                    })
                }, t.handleChange = function(e) {
                    t.props.label ? t.props.onChange && t.props.onChange(o({}, t.props.label, e.target.value), e) : t.props.onChange && t.props.onChange(e.target.value, e), t.setState({
                        value: e.target.value
                    })
                }, t.handleKeyDown = function(e) {
                    var n = String(e.target.value),
                        r = n.indexOf(`%`) > -1,
                        i = Number(n.replace(/%/g, ``));
                    if (!isNaN(i)) {
                        var a = t.props.arrowOffset || 1;
                        e.keyCode === 38 && (t.props.label === null ? t.props.onChange && t.props.onChange(i + a, e) : t.props.onChange && t.props.onChange(o({}, t.props.label, i + a), e), r ? t.setState({
                            value: i + a + `%`
                        }) : t.setState({
                            value: i + a
                        })), e.keyCode === 40 && (t.props.label === null ? t.props.onChange && t.props.onChange(i - a, e) : t.props.onChange && t.props.onChange(o({}, t.props.label, i - a), e), r ? t.setState({
                            value: i - a + `%`
                        }) : t.setState({
                            value: i - a
                        }))
                    }
                }, t.handleDrag = function(e) {
                    if (t.props.dragLabel) {
                        var n = Math.round(t.props.value + e.movementX);
                        n >= 0 && n <= t.props.dragMax && t.props.onChange && t.props.onChange(o({}, t.props.label, n), e)
                    }
                }, t.handleMouseDown = function(e) {
                    t.props.dragLabel && (e.preventDefault(), t.handleDrag(e), window.addEventListener(`mousemove`, t.handleDrag), window.addEventListener(`mouseup`, t.handleMouseUp))
                }, t.handleMouseUp = function() {
                    t.unbindEventListeners()
                }, t.unbindEventListeners = function() {
                    window.removeEventListener(`mousemove`, t.handleDrag), window.removeEventListener(`mouseup`, t.handleMouseUp)
                }, t.state = {
                    value: String(e.value).toUpperCase(),
                    blurValue: String(e.value).toUpperCase()
                }, t
            }
            return t(n, [{
                key: `componentWillReceiveProps`,
                value: function(e) {
                    var t = this.input;
                    e.value !== this.state.value && (t === document.activeElement ? this.setState({
                        blurValue: String(e.value).toUpperCase()
                    }) : this.setState({
                        value: String(e.value).toUpperCase(),
                        blurValue: !this.state.blurValue && String(e.value).toUpperCase()
                    }))
                }
            }, {
                key: `componentWillUnmount`,
                value: function() {
                    this.unbindEventListeners()
                }
            }, {
                key: `render`,
                value: function() {
                    var e = this,
                        t = (0, i.default)({
                            default: {
                                wrap: {
                                    position: `relative`
                                }
                            },
                            "user-override": {
                                wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
                                input: this.props.style && this.props.style.input ? this.props.style.input : {},
                                label: this.props.style && this.props.style.label ? this.props.style.label : {}
                            },
                            "dragLabel-true": {
                                label: {
                                    cursor: `ew-resize`
                                }
                            }
                        }, {
                            "user-override": !0
                        }, this.props);
                    return r.default.createElement(`div`, {
                        style: t.wrap
                    }, r.default.createElement(`input`, {
                        style: t.input,
                        ref: function(t) {
                            return e.input = t
                        },
                        value: this.state.value,
                        onKeyDown: this.handleKeyDown,
                        onChange: this.handleChange,
                        onBlur: this.handleBlur,
                        placeholder: this.props.placeholder,
                        spellCheck: `false`
                    }), this.props.label && !this.props.hideLabel ? r.default.createElement(`span`, {
                        style: t.label,
                        onMouseDown: this.handleMouseDown
                    }, this.props.label) : null)
                }
            }]), n
        }(n.PureComponent || n.Component)
    })),
    $e = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.calculateChange = function(e, t, n, r) {
            e.preventDefault();
            var i = r.clientWidth,
                a = r.clientHeight,
                o = typeof e.pageX == `number` ? e.pageX : e.touches[0].pageX,
                s = typeof e.pageY == `number` ? e.pageY : e.touches[0].pageY,
                c = o - (r.getBoundingClientRect().left + window.pageXOffset),
                l = s - (r.getBoundingClientRect().top + window.pageYOffset);
            if (n.direction === `vertical`) {
                var u = void 0;
                if (u = l < 0 ? 359 : l > a ? 0 : 360 * (-(l * 100 / a) + 100) / 100, n.hsl.h !== u) return {
                    h: u,
                    s: n.hsl.s,
                    l: n.hsl.l,
                    a: n.hsl.a,
                    source: `rgb`
                }
            } else {
                var d = void 0;
                if (d = c < 0 ? 0 : c > i ? 359 : 360 * (c * 100 / i) / 100, n.hsl.h !== d) return {
                    h: d,
                    s: n.hsl.s,
                    l: n.hsl.l,
                    a: n.hsl.a,
                    source: `rgb`
                }
            }
            return null
        }
    })),
    et = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Hue = void 0;
        var t = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, `value` in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            n = m(),
            r = s(n),
            i = s(Y()),
            a = o($e());

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (e != null)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function c(e, t) {
            if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
        }

        function l(e, t) {
            if (!e) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
            return t && (typeof t == `object` || typeof t == `function`) ? t : e
        }

        function u(e, t) {
            if (typeof t != `function` && t !== null) throw TypeError(`Super expression must either be null or a function, not ` + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        e.default = e.Hue = function(e) {
            u(n, e);

            function n() {
                var e, t, r, i;
                c(this, n);
                var o = [...arguments];
                return i = (t = (r = l(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(o))), r), r.handleChange = function(e, t) {
                    var n = a.calculateChange(e, t, r.props, r.container);
                    n && r.props.onChange && r.props.onChange(n, e)
                }, r.handleMouseDown = function(e) {
                    r.handleChange(e, !0), window.addEventListener(`mousemove`, r.handleChange), window.addEventListener(`mouseup`, r.handleMouseUp)
                }, r.handleMouseUp = function() {
                    r.unbindEventListeners()
                }, t), l(r, i)
            }
            return t(n, [{
                key: `componentWillUnmount`,
                value: function() {
                    this.unbindEventListeners()
                }
            }, {
                key: `unbindEventListeners`,
                value: function() {
                    window.removeEventListener(`mousemove`, this.handleChange), window.removeEventListener(`mouseup`, this.handleMouseUp)
                }
            }, {
                key: `render`,
                value: function() {
                    var e = this,
                        t = this.props.direction,
                        n = t === void 0 ? `horizontal` : t,
                        a = (0, i.default)({
                            default: {
                                hue: {
                                    absolute: `0px 0px 0px 0px`,
                                    borderRadius: this.props.radius,
                                    boxShadow: this.props.shadow
                                },
                                container: {
                                    padding: `0 2px`,
                                    position: `relative`,
                                    height: `100%`,
                                    borderRadius: this.props.radius
                                },
                                pointer: {
                                    position: `absolute`,
                                    left: this.props.hsl.h * 100 / 360 + `%`
                                },
                                slider: {
                                    marginTop: `1px`,
                                    width: `4px`,
                                    borderRadius: `1px`,
                                    height: `8px`,
                                    boxShadow: `0 0 2px rgba(0, 0, 0, .6)`,
                                    background: `#fff`,
                                    transform: `translateX(-2px)`
                                }
                            },
                            vertical: {
                                pointer: {
                                    left: `0px`,
                                    top: -(this.props.hsl.h * 100 / 360) + 100 + `%`
                                }
                            }
                        }, {
                            vertical: n === `vertical`
                        });
                    return r.default.createElement(`div`, {
                        style: a.hue
                    }, r.default.createElement(`div`, {
                        className: `hue-` + n,
                        style: a.container,
                        ref: function(t) {
                            return e.container = t
                        },
                        onMouseDown: this.handleMouseDown,
                        onTouchMove: this.handleChange,
                        onTouchStart: this.handleChange
                    }, r.default.createElement(`style`, null, `
            .hue-horizontal {
              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0
                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
              background: -webkit-linear-gradient(to right, #f00 0%, #ff0
                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
            }

            .hue-vertical {
              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,
                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,
                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
            }
          `), r.default.createElement(`div`, {
                        style: a.pointer
                    }, this.props.pointer ? r.default.createElement(this.props.pointer, this.props) : r.default.createElement(`div`, {
                        style: a.slider
                    }))))
                }
            }]), n
        }(n.PureComponent || n.Component)
    })),
    tt = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Raised = void 0;
        var t = i(m()),
            n = i(d()),
            r = i(Y());

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var a = e.Raised = function(e) {
            var n = e.zDepth,
                i = e.radius,
                a = e.background,
                o = e.children,
                s = (0, r.default)({
                    default: {
                        wrap: {
                            position: `relative`,
                            display: `inline-block`
                        },
                        content: {
                            position: `relative`
                        },
                        bg: {
                            absolute: `0px 0px 0px 0px`,
                            boxShadow: `0 ` + n + `px ` + n * 4 + `px rgba(0,0,0,.24)`,
                            borderRadius: i,
                            background: a
                        }
                    },
                    "zDepth-0": {
                        bg: {
                            boxShadow: `none`
                        }
                    },
                    "zDepth-1": {
                        bg: {
                            boxShadow: `0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)`
                        }
                    },
                    "zDepth-2": {
                        bg: {
                            boxShadow: `0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)`
                        }
                    },
                    "zDepth-3": {
                        bg: {
                            boxShadow: `0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)`
                        }
                    },
                    "zDepth-4": {
                        bg: {
                            boxShadow: `0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)`
                        }
                    },
                    "zDepth-5": {
                        bg: {
                            boxShadow: `0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)`
                        }
                    },
                    square: {
                        bg: {
                            borderRadius: `0`
                        }
                    },
                    circle: {
                        bg: {
                            borderRadius: `50%`
                        }
                    }
                }, {
                    "zDepth-1": n === 1
                });
            return t.default.createElement(`div`, {
                style: s.wrap
            }, t.default.createElement(`div`, {
                style: s.bg
            }), t.default.createElement(`div`, {
                style: s.content
            }, o))
        };
        a.propTypes = {
            background: n.default.string,
            zDepth: n.default.oneOf([0, 1, 2, 3, 4, 5]),
            radius: n.default.number
        }, a.defaultProps = {
            background: `#fff`,
            zDepth: 1,
            radius: 2
        }, e.default = a
    })),
    nt = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.calculateChange = function(e, t, n, r) {
            e.preventDefault();
            var i = r.getBoundingClientRect(),
                a = i.width,
                o = i.height,
                s = typeof e.pageX == `number` ? e.pageX : e.touches[0].pageX,
                c = typeof e.pageY == `number` ? e.pageY : e.touches[0].pageY,
                l = s - (r.getBoundingClientRect().left + window.pageXOffset),
                u = c - (r.getBoundingClientRect().top + window.pageYOffset);
            l < 0 ? l = 0 : l > a ? l = a : u < 0 ? u = 0 : u > o && (u = o);
            var d = l * 100 / a,
                f = -(u * 100 / o) + 100;
            return {
                h: n.hsl.h,
                s: d,
                v: f,
                a: n.hsl.a,
                source: `rgb`
            }
        }
    })),
    rt = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Saturation = void 0;
        var t = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, `value` in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            n = m(),
            r = c(n),
            i = c(Y()),
            a = c(w()),
            o = s(nt());

        function s(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (e != null)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function l(e, t) {
            if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
        }

        function u(e, t) {
            if (!e) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
            return t && (typeof t == `object` || typeof t == `function`) ? t : e
        }

        function d(e, t) {
            if (typeof t != `function` && t !== null) throw TypeError(`Super expression must either be null or a function, not ` + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        e.default = e.Saturation = function(e) {
            d(n, e);

            function n(e) {
                l(this, n);
                var t = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                return t.handleChange = function(e, n) {
                    t.props.onChange && t.throttle(t.props.onChange, o.calculateChange(e, n, t.props, t.container), e)
                }, t.handleMouseDown = function(e) {
                    t.handleChange(e, !0), window.addEventListener(`mousemove`, t.handleChange), window.addEventListener(`mouseup`, t.handleMouseUp)
                }, t.handleMouseUp = function() {
                    t.unbindEventListeners()
                }, t.throttle = (0, a.default)(function(e, t, n) {
                    e(t, n)
                }, 50), t
            }
            return t(n, [{
                key: `componentWillUnmount`,
                value: function() {
                    this.unbindEventListeners()
                }
            }, {
                key: `unbindEventListeners`,
                value: function() {
                    window.removeEventListener(`mousemove`, this.handleChange), window.removeEventListener(`mouseup`, this.handleMouseUp)
                }
            }, {
                key: `render`,
                value: function() {
                    var e = this,
                        t = this.props.style || {},
                        n = t.color,
                        a = t.white,
                        o = t.black,
                        s = t.pointer,
                        c = t.circle,
                        l = (0, i.default)({
                            default: {
                                color: {
                                    absolute: `0px 0px 0px 0px`,
                                    background: `hsl(` + this.props.hsl.h + `,100%, 50%)`,
                                    borderRadius: this.props.radius
                                },
                                white: {
                                    absolute: `0px 0px 0px 0px`,
                                    borderRadius: this.props.radius
                                },
                                black: {
                                    absolute: `0px 0px 0px 0px`,
                                    boxShadow: this.props.shadow,
                                    borderRadius: this.props.radius
                                },
                                pointer: {
                                    position: `absolute`,
                                    top: -(this.props.hsv.v * 100) + 100 + `%`,
                                    left: this.props.hsv.s * 100 + `%`,
                                    cursor: `default`
                                },
                                circle: {
                                    width: `4px`,
                                    height: `4px`,
                                    boxShadow: `0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),
            0 0 1px 2px rgba(0,0,0,.4)`,
                                    borderRadius: `50%`,
                                    cursor: `hand`,
                                    transform: `translate(-2px, -2px)`
                                }
                            },
                            custom: {
                                color: n,
                                white: a,
                                black: o,
                                pointer: s,
                                circle: c
                            }
                        }, {
                            custom: !!this.props.style
                        });
                    return r.default.createElement(`div`, {
                        style: l.color,
                        ref: function(t) {
                            return e.container = t
                        },
                        onMouseDown: this.handleMouseDown,
                        onTouchMove: this.handleChange,
                        onTouchStart: this.handleChange
                    }, r.default.createElement(`style`, null, `
          .saturation-white {
            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));
            background: linear-gradient(to right, #fff, rgba(255,255,255,0));
          }
          .saturation-black {
            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));
            background: linear-gradient(to top, #000, rgba(0,0,0,0));
          }
        `), r.default.createElement(`div`, {
                        style: l.white,
                        className: `saturation-white`
                    }, r.default.createElement(`div`, {
                        style: l.black,
                        className: `saturation-black`
                    }), r.default.createElement(`div`, {
                        style: l.pointer
                    }, this.props.pointer ? r.default.createElement(this.props.pointer, this.props) : r.default.createElement(`div`, {
                        style: l.circle
                    }))))
                }
            }]), n
        }(n.PureComponent || n.Component)
    })),
    it = i(((e, t) => {
        var n = ce(),
            r = D(),
            i = ze(),
            a = u();

        function o(e, t) {
            return (a(e) ? n : r)(e, i(t))
        }
        t.exports = o
    })),
    at = i(((e, t) => {
        t.exports = it()
    })),
    ot = i(((e, t) => {
        (function(n, r) {
            typeof e == `object` && t !== void 0 ? t.exports = r() : typeof define == `function` && define.amd ? define(r) : (n = typeof globalThis < `u` ? globalThis : n || self, n.tinycolor = r())
        })(e, (function() {
            function e(t) {
                "@babel/helpers - typeof";
                return e = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e
                }, e(t)
            }
            var t = /^\s+/,
                n = /\s+$/;

            function r(e, t) {
                if (e = e || ``, t = t || {}, e instanceof r) return e;
                if (!(this instanceof r)) return new r(e, t);
                var n = i(e);
                this._originalInput = e, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = Math.round(100 * this._a) / 100, this._format = t.format || n.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = n.ok
            }
            r.prototype = {
                isDark: function() {
                    return this.getBrightness() < 128
                },
                isLight: function() {
                    return !this.isDark()
                },
                isValid: function() {
                    return this._ok
                },
                getOriginalInput: function() {
                    return this._originalInput
                },
                getFormat: function() {
                    return this._format
                },
                getAlpha: function() {
                    return this._a
                },
                getBrightness: function() {
                    var e = this.toRgb();
                    return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3
                },
                getLuminance: function() {
                    var e = this.toRgb(),
                        t = e.r / 255,
                        n = e.g / 255,
                        r = e.b / 255,
                        i = t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4,
                        a = n <= .03928 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4,
                        o = r <= .03928 ? r / 12.92 : ((r + .055) / 1.055) ** 2.4;
                    return .2126 * i + .7152 * a + .0722 * o
                },
                setAlpha: function(e) {
                    return this._a = O(e), this._roundA = Math.round(100 * this._a) / 100, this
                },
                toHsv: function() {
                    var e = c(this._r, this._g, this._b);
                    return {
                        h: e.h * 360,
                        s: e.s,
                        v: e.v,
                        a: this._a
                    }
                },
                toHsvString: function() {
                    var e = c(this._r, this._g, this._b),
                        t = Math.round(e.h * 360),
                        n = Math.round(e.s * 100),
                        r = Math.round(e.v * 100);
                    return this._a == 1 ? `hsv(` + t + `, ` + n + `%, ` + r + `%)` : `hsva(` + t + `, ` + n + `%, ` + r + `%, ` + this._roundA + `)`
                },
                toHsl: function() {
                    var e = o(this._r, this._g, this._b);
                    return {
                        h: e.h * 360,
                        s: e.s,
                        l: e.l,
                        a: this._a
                    }
                },
                toHslString: function() {
                    var e = o(this._r, this._g, this._b),
                        t = Math.round(e.h * 360),
                        n = Math.round(e.s * 100),
                        r = Math.round(e.l * 100);
                    return this._a == 1 ? `hsl(` + t + `, ` + n + `%, ` + r + `%)` : `hsla(` + t + `, ` + n + `%, ` + r + `%, ` + this._roundA + `)`
                },
                toHex: function(e) {
                    return u(this._r, this._g, this._b, e)
                },
                toHexString: function(e) {
                    return `#` + this.toHex(e)
                },
                toHex8: function(e) {
                    return d(this._r, this._g, this._b, this._a, e)
                },
                toHex8String: function(e) {
                    return `#` + this.toHex8(e)
                },
                toRgb: function() {
                    return {
                        r: Math.round(this._r),
                        g: Math.round(this._g),
                        b: Math.round(this._b),
                        a: this._a
                    }
                },
                toRgbString: function() {
                    return this._a == 1 ? `rgb(` + Math.round(this._r) + `, ` + Math.round(this._g) + `, ` + Math.round(this._b) + `)` : `rgba(` + Math.round(this._r) + `, ` + Math.round(this._g) + `, ` + Math.round(this._b) + `, ` + this._roundA + `)`
                },
                toPercentageRgb: function() {
                    return {
                        r: Math.round(k(this._r, 255) * 100) + `%`,
                        g: Math.round(k(this._g, 255) * 100) + `%`,
                        b: Math.round(k(this._b, 255) * 100) + `%`,
                        a: this._a
                    }
                },
                toPercentageRgbString: function() {
                    return this._a == 1 ? `rgb(` + Math.round(k(this._r, 255) * 100) + `%, ` + Math.round(k(this._g, 255) * 100) + `%, ` + Math.round(k(this._b, 255) * 100) + `%)` : `rgba(` + Math.round(k(this._r, 255) * 100) + `%, ` + Math.round(k(this._g, 255) * 100) + `%, ` + Math.round(k(this._b, 255) * 100) + `%, ` + this._roundA + `)`
                },
                toName: function() {
                    return this._a === 0 ? `transparent` : this._a < 1 ? !1 : E[u(this._r, this._g, this._b, !0)] || !1
                },
                toFilter: function(e) {
                    var t = `#` + f(this._r, this._g, this._b, this._a),
                        n = t,
                        i = this._gradientType ? `GradientType = 1, ` : ``;
                    if (e) {
                        var a = r(e);
                        n = `#` + f(a._r, a._g, a._b, a._a)
                    }
                    return `progid:DXImageTransform.Microsoft.gradient(` + i + `startColorstr=` + t + `,endColorstr=` + n + `)`
                },
                toString: function(e) {
                    var t = !!e;
                    e = e || this._format;
                    var n = !1,
                        r = this._a < 1 && this._a >= 0;
                    return !t && r && (e === `hex` || e === `hex6` || e === `hex3` || e === `hex4` || e === `hex8` || e === `name`) ? e === `name` && this._a === 0 ? this.toName() : this.toRgbString() : (e === `rgb` && (n = this.toRgbString()), e === `prgb` && (n = this.toPercentageRgbString()), (e === `hex` || e === `hex6`) && (n = this.toHexString()), e === `hex3` && (n = this.toHexString(!0)), e === `hex4` && (n = this.toHex8String(!0)), e === `hex8` && (n = this.toHex8String()), e === `name` && (n = this.toName()), e === `hsl` && (n = this.toHslString()), e === `hsv` && (n = this.toHsvString()), n || this.toHexString())
                },
                clone: function() {
                    return r(this.toString())
                },
                _applyModification: function(e, t) {
                    var n = e.apply(null, [this].concat([].slice.call(t)));
                    return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this
                },
                lighten: function() {
                    return this._applyModification(g, arguments)
                },
                brighten: function() {
                    return this._applyModification(_, arguments)
                },
                darken: function() {
                    return this._applyModification(v, arguments)
                },
                desaturate: function() {
                    return this._applyModification(p, arguments)
                },
                saturate: function() {
                    return this._applyModification(m, arguments)
                },
                greyscale: function() {
                    return this._applyModification(h, arguments)
                },
                spin: function() {
                    return this._applyModification(y, arguments)
                },
                _applyCombination: function(e, t) {
                    return e.apply(null, [this].concat([].slice.call(t)))
                },
                analogous: function() {
                    return this._applyCombination(C, arguments)
                },
                complement: function() {
                    return this._applyCombination(b, arguments)
                },
                monochromatic: function() {
                    return this._applyCombination(w, arguments)
                },
                splitcomplement: function() {
                    return this._applyCombination(S, arguments)
                },
                triad: function() {
                    return this._applyCombination(x, [3])
                },
                tetrad: function() {
                    return this._applyCombination(x, [4])
                }
            }, r.fromRatio = function(t, n) {
                if (e(t) == `object`) {
                    var i = {};
                    for (var a in t) t.hasOwnProperty(a) && (i[a] = a === `a` ? t[a] : F(t[a]));
                    t = i
                }
                return r(t, n)
            };

            function i(t) {
                var n = {
                        r: 0,
                        g: 0,
                        b: 0
                    },
                    r = 1,
                    i = null,
                    o = null,
                    c = null,
                    u = !1,
                    d = !1;
                return typeof t == `string` && (t = B(t)), e(t) == `object` && (z(t.r) && z(t.g) && z(t.b) ? (n = a(t.r, t.g, t.b), u = !0, d = String(t.r).substr(-1) === `%` ? `prgb` : `rgb`) : z(t.h) && z(t.s) && z(t.v) ? (i = F(t.s), o = F(t.v), n = l(t.h, i, o), u = !0, d = `hsv`) : z(t.h) && z(t.s) && z(t.l) && (i = F(t.s), c = F(t.l), n = s(t.h, i, c), u = !0, d = `hsl`), t.hasOwnProperty(`a`) && (r = t.a)), r = O(r), {
                    ok: u,
                    format: t.format || d,
                    r: Math.min(255, Math.max(n.r, 0)),
                    g: Math.min(255, Math.max(n.g, 0)),
                    b: Math.min(255, Math.max(n.b, 0)),
                    a: r
                }
            }

            function a(e, t, n) {
                return {
                    r: k(e, 255) * 255,
                    g: k(t, 255) * 255,
                    b: k(n, 255) * 255
                }
            }

            function o(e, t, n) {
                e = k(e, 255), t = k(t, 255), n = k(n, 255);
                var r = Math.max(e, t, n),
                    i = Math.min(e, t, n),
                    a, o, s = (r + i) / 2;
                if (r == i) a = o = 0;
                else {
                    var c = r - i;
                    switch (o = s > .5 ? c / (2 - r - i) : c / (r + i), r) {
                        case e:
                            a = (t - n) / c + (t < n ? 6 : 0);
                            break;
                        case t:
                            a = (n - e) / c + 2;
                            break;
                        case n:
                            a = (e - t) / c + 4
                    }
                    a /= 6
                }
                return {
                    h: a,
                    s: o,
                    l: s
                }
            }

            function s(e, t, n) {
                var r, i, a;
                e = k(e, 360), t = k(t, 100), n = k(n, 100);

                function o(e, t, n) {
                    return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                }
                if (t === 0) r = i = a = n;
                else {
                    var s = n < .5 ? n * (1 + t) : n + t - n * t,
                        c = 2 * n - s;
                    r = o(c, s, e + 1 / 3), i = o(c, s, e), a = o(c, s, e - 1 / 3)
                }
                return {
                    r: r * 255,
                    g: i * 255,
                    b: a * 255
                }
            }

            function c(e, t, n) {
                e = k(e, 255), t = k(t, 255), n = k(n, 255);
                var r = Math.max(e, t, n),
                    i = Math.min(e, t, n),
                    a, o, s = r,
                    c = r - i;
                if (o = r === 0 ? 0 : c / r, r == i) a = 0;
                else {
                    switch (r) {
                        case e:
                            a = (t - n) / c + (t < n ? 6 : 0);
                            break;
                        case t:
                            a = (n - e) / c + 2;
                            break;
                        case n:
                            a = (e - t) / c + 4
                    }
                    a /= 6
                }
                return {
                    h: a,
                    s: o,
                    v: s
                }
            }

            function l(e, t, n) {
                e = k(e, 360) * 6, t = k(t, 100), n = k(n, 100);
                var r = Math.floor(e),
                    i = e - r,
                    a = n * (1 - t),
                    o = n * (1 - i * t),
                    s = n * (1 - (1 - i) * t),
                    c = r % 6,
                    l = [n, o, a, a, s, n][c],
                    u = [s, n, n, o, a, a][c],
                    d = [a, a, s, n, n, o][c];
                return {
                    r: l * 255,
                    g: u * 255,
                    b: d * 255
                }
            }

            function u(e, t, n, r) {
                var i = [P(Math.round(e).toString(16)), P(Math.round(t).toString(16)), P(Math.round(n).toString(16))];
                return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join(``)
            }

            function d(e, t, n, r, i) {
                var a = [P(Math.round(e).toString(16)), P(Math.round(t).toString(16)), P(Math.round(n).toString(16)), P(I(r))];
                return i && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join(``)
            }

            function f(e, t, n, r) {
                return [P(I(r)), P(Math.round(e).toString(16)), P(Math.round(t).toString(16)), P(Math.round(n).toString(16))].join(``)
            }
            r.equals = function(e, t) {
                return !e || !t ? !1 : r(e).toRgbString() == r(t).toRgbString()
            }, r.random = function() {
                return r.fromRatio({
                    r: Math.random(),
                    g: Math.random(),
                    b: Math.random()
                })
            };

            function p(e, t) {
                t = t === 0 ? 0 : t || 10;
                var n = r(e).toHsl();
                return n.s -= t / 100, n.s = A(n.s), r(n)
            }

            function m(e, t) {
                t = t === 0 ? 0 : t || 10;
                var n = r(e).toHsl();
                return n.s += t / 100, n.s = A(n.s), r(n)
            }

            function h(e) {
                return r(e).desaturate(100)
            }

            function g(e, t) {
                t = t === 0 ? 0 : t || 10;
                var n = r(e).toHsl();
                return n.l += t / 100, n.l = A(n.l), r(n)
            }

            function _(e, t) {
                t = t === 0 ? 0 : t || 10;
                var n = r(e).toRgb();
                return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), r(n)
            }

            function v(e, t) {
                t = t === 0 ? 0 : t || 10;
                var n = r(e).toHsl();
                return n.l -= t / 100, n.l = A(n.l), r(n)
            }

            function y(e, t) {
                var n = r(e).toHsl(),
                    i = (n.h + t) % 360;
                return n.h = i < 0 ? 360 + i : i, r(n)
            }

            function b(e) {
                var t = r(e).toHsl();
                return t.h = (t.h + 180) % 360, r(t)
            }

            function x(e, t) {
                if (isNaN(t) || t <= 0) throw Error(`Argument to polyad must be a positive number`);
                for (var n = r(e).toHsl(), i = [r(e)], a = 360 / t, o = 1; o < t; o++) i.push(r({
                    h: (n.h + o * a) % 360,
                    s: n.s,
                    l: n.l
                }));
                return i
            }

            function S(e) {
                var t = r(e).toHsl(),
                    n = t.h;
                return [r(e), r({
                    h: (n + 72) % 360,
                    s: t.s,
                    l: t.l
                }), r({
                    h: (n + 216) % 360,
                    s: t.s,
                    l: t.l
                })]
            }

            function C(e, t, n) {
                t = t || 6, n = n || 30;
                var i = r(e).toHsl(),
                    a = 360 / n,
                    o = [r(e)];
                for (i.h = (i.h - (a * t >> 1) + 720) % 360; --t;) i.h = (i.h + a) % 360, o.push(r(i));
                return o
            }

            function w(e, t) {
                t = t || 6;
                for (var n = r(e).toHsv(), i = n.h, a = n.s, o = n.v, s = [], c = 1 / t; t--;) s.push(r({
                    h: i,
                    s: a,
                    v: o
                })), o = (o + c) % 1;
                return s
            }
            r.mix = function(e, t, n) {
                n = n === 0 ? 0 : n || 50;
                var i = r(e).toRgb(),
                    a = r(t).toRgb(),
                    o = n / 100;
                return r({
                    r: (a.r - i.r) * o + i.r,
                    g: (a.g - i.g) * o + i.g,
                    b: (a.b - i.b) * o + i.b,
                    a: (a.a - i.a) * o + i.a
                })
            }, r.readability = function(e, t) {
                var n = r(e),
                    i = r(t);
                return (Math.max(n.getLuminance(), i.getLuminance()) + .05) / (Math.min(n.getLuminance(), i.getLuminance()) + .05)
            }, r.isReadable = function(e, t, n) {
                var i = r.readability(e, t),
                    a, o = !1;
                switch (a = V(n), a.level + a.size) {
                    case `AAsmall`:
                    case `AAAlarge`:
                        o = i >= 4.5;
                        break;
                    case `AAlarge`:
                        o = i >= 3;
                        break;
                    case `AAAsmall`:
                        o = i >= 7
                }
                return o
            }, r.mostReadable = function(e, t, n) {
                var i = null,
                    a = 0,
                    o, s, c, l;
                n = n || {}, s = n.includeFallbackColors, c = n.level, l = n.size;
                for (var u = 0; u < t.length; u++) o = r.readability(e, t[u]), o > a && (a = o, i = r(t[u]));
                return r.isReadable(e, i, {
                    level: c,
                    size: l
                }) || !s ? i : (n.includeFallbackColors = !1, r.mostReadable(e, [`#fff`, `#000`], n))
            };
            var T = r.names = {
                    aliceblue: `f0f8ff`,
                    antiquewhite: `faebd7`,
                    aqua: `0ff`,
                    aquamarine: `7fffd4`,
                    azure: `f0ffff`,
                    beige: `f5f5dc`,
                    bisque: `ffe4c4`,
                    black: `000`,
                    blanchedalmond: `ffebcd`,
                    blue: `00f`,
                    blueviolet: `8a2be2`,
                    brown: `a52a2a`,
                    burlywood: `deb887`,
                    burntsienna: `ea7e5d`,
                    cadetblue: `5f9ea0`,
                    chartreuse: `7fff00`,
                    chocolate: `d2691e`,
                    coral: `ff7f50`,
                    cornflowerblue: `6495ed`,
                    cornsilk: `fff8dc`,
                    crimson: `dc143c`,
                    cyan: `0ff`,
                    darkblue: `00008b`,
                    darkcyan: `008b8b`,
                    darkgoldenrod: `b8860b`,
                    darkgray: `a9a9a9`,
                    darkgreen: `006400`,
                    darkgrey: `a9a9a9`,
                    darkkhaki: `bdb76b`,
                    darkmagenta: `8b008b`,
                    darkolivegreen: `556b2f`,
                    darkorange: `ff8c00`,
                    darkorchid: `9932cc`,
                    darkred: `8b0000`,
                    darksalmon: `e9967a`,
                    darkseagreen: `8fbc8f`,
                    darkslateblue: `483d8b`,
                    darkslategray: `2f4f4f`,
                    darkslategrey: `2f4f4f`,
                    darkturquoise: `00ced1`,
                    darkviolet: `9400d3`,
                    deeppink: `ff1493`,
                    deepskyblue: `00bfff`,
                    dimgray: `696969`,
                    dimgrey: `696969`,
                    dodgerblue: `1e90ff`,
                    firebrick: `b22222`,
                    floralwhite: `fffaf0`,
                    forestgreen: `228b22`,
                    fuchsia: `f0f`,
                    gainsboro: `dcdcdc`,
                    ghostwhite: `f8f8ff`,
                    gold: `ffd700`,
                    goldenrod: `daa520`,
                    gray: `808080`,
                    green: `008000`,
                    greenyellow: `adff2f`,
                    grey: `808080`,
                    honeydew: `f0fff0`,
                    hotpink: `ff69b4`,
                    indianred: `cd5c5c`,
                    indigo: `4b0082`,
                    ivory: `fffff0`,
                    khaki: `f0e68c`,
                    lavender: `e6e6fa`,
                    lavenderblush: `fff0f5`,
                    lawngreen: `7cfc00`,
                    lemonchiffon: `fffacd`,
                    lightblue: `add8e6`,
                    lightcoral: `f08080`,
                    lightcyan: `e0ffff`,
                    lightgoldenrodyellow: `fafad2`,
                    lightgray: `d3d3d3`,
                    lightgreen: `90ee90`,
                    lightgrey: `d3d3d3`,
                    lightpink: `ffb6c1`,
                    lightsalmon: `ffa07a`,
                    lightseagreen: `20b2aa`,
                    lightskyblue: `87cefa`,
                    lightslategray: `789`,
                    lightslategrey: `789`,
                    lightsteelblue: `b0c4de`,
                    lightyellow: `ffffe0`,
                    lime: `0f0`,
                    limegreen: `32cd32`,
                    linen: `faf0e6`,
                    magenta: `f0f`,
                    maroon: `800000`,
                    mediumaquamarine: `66cdaa`,
                    mediumblue: `0000cd`,
                    mediumorchid: `ba55d3`,
                    mediumpurple: `9370db`,
                    mediumseagreen: `3cb371`,
                    mediumslateblue: `7b68ee`,
                    mediumspringgreen: `00fa9a`,
                    mediumturquoise: `48d1cc`,
                    mediumvioletred: `c71585`,
                    midnightblue: `191970`,
                    mintcream: `f5fffa`,
                    mistyrose: `ffe4e1`,
                    moccasin: `ffe4b5`,
                    navajowhite: `ffdead`,
                    navy: `000080`,
                    oldlace: `fdf5e6`,
                    olive: `808000`,
                    olivedrab: `6b8e23`,
                    orange: `ffa500`,
                    orangered: `ff4500`,
                    orchid: `da70d6`,
                    palegoldenrod: `eee8aa`,
                    palegreen: `98fb98`,
                    paleturquoise: `afeeee`,
                    palevioletred: `db7093`,
                    papayawhip: `ffefd5`,
                    peachpuff: `ffdab9`,
                    peru: `cd853f`,
                    pink: `ffc0cb`,
                    plum: `dda0dd`,
                    powderblue: `b0e0e6`,
                    purple: `800080`,
                    rebeccapurple: `663399`,
                    red: `f00`,
                    rosybrown: `bc8f8f`,
                    royalblue: `4169e1`,
                    saddlebrown: `8b4513`,
                    salmon: `fa8072`,
                    sandybrown: `f4a460`,
                    seagreen: `2e8b57`,
                    seashell: `fff5ee`,
                    sienna: `a0522d`,
                    silver: `c0c0c0`,
                    skyblue: `87ceeb`,
                    slateblue: `6a5acd`,
                    slategray: `708090`,
                    slategrey: `708090`,
                    snow: `fffafa`,
                    springgreen: `00ff7f`,
                    steelblue: `4682b4`,
                    tan: `d2b48c`,
                    teal: `008080`,
                    thistle: `d8bfd8`,
                    tomato: `ff6347`,
                    turquoise: `40e0d0`,
                    violet: `ee82ee`,
                    wheat: `f5deb3`,
                    white: `fff`,
                    whitesmoke: `f5f5f5`,
                    yellow: `ff0`,
                    yellowgreen: `9acd32`
                },
                E = r.hexNames = D(T);

            function D(e) {
                var t = {};
                for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
                return t
            }

            function O(e) {
                return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
            }

            function k(e, t) {
                M(e) && (e = `100%`);
                var n = N(e);
                return e = Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t)
            }

            function A(e) {
                return Math.min(1, Math.max(0, e))
            }

            function j(e) {
                return parseInt(e, 16)
            }

            function M(e) {
                return typeof e == `string` && e.indexOf(`.`) != -1 && parseFloat(e) === 1
            }

            function N(e) {
                return typeof e == `string` && e.indexOf(`%`) != -1
            }

            function P(e) {
                return e.length == 1 ? `0` + e : `` + e
            }

            function F(e) {
                return e <= 1 && (e = e * 100 + `%`), e
            }

            function I(e) {
                return Math.round(parseFloat(e) * 255).toString(16)
            }

            function L(e) {
                return j(e) / 255
            }
            var R = function() {
                var e = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,
                    t = `[\\s|\\(]+(` + e + `)[,|\\s]+(` + e + `)[,|\\s]+(` + e + `)\\s*\\)?`,
                    n = `[\\s|\\(]+(` + e + `)[,|\\s]+(` + e + `)[,|\\s]+(` + e + `)[,|\\s]+(` + e + `)\\s*\\)?`;
                return {
                    CSS_UNIT: new RegExp(e),
                    rgb: RegExp(`rgb` + t),
                    rgba: RegExp(`rgba` + n),
                    hsl: RegExp(`hsl` + t),
                    hsla: RegExp(`hsla` + n),
                    hsv: RegExp(`hsv` + t),
                    hsva: RegExp(`hsva` + n),
                    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                }
            }();

            function z(e) {
                return !!R.CSS_UNIT.exec(e)
            }

            function B(e) {
                e = e.replace(t, ``).replace(n, ``).toLowerCase();
                var r = !1;
                if (T[e]) e = T[e], r = !0;
                else if (e == `transparent`) return {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                    format: `name`
                };
                var i;
                return (i = R.rgb.exec(e)) ? {
                    r: i[1],
                    g: i[2],
                    b: i[3]
                } : (i = R.rgba.exec(e)) ? {
                    r: i[1],
                    g: i[2],
                    b: i[3],
                    a: i[4]
                } : (i = R.hsl.exec(e)) ? {
                    h: i[1],
                    s: i[2],
                    l: i[3]
                } : (i = R.hsla.exec(e)) ? {
                    h: i[1],
                    s: i[2],
                    l: i[3],
                    a: i[4]
                } : (i = R.hsv.exec(e)) ? {
                    h: i[1],
                    s: i[2],
                    v: i[3]
                } : (i = R.hsva.exec(e)) ? {
                    h: i[1],
                    s: i[2],
                    v: i[3],
                    a: i[4]
                } : (i = R.hex8.exec(e)) ? {
                    r: j(i[1]),
                    g: j(i[2]),
                    b: j(i[3]),
                    a: L(i[4]),
                    format: r ? `name` : `hex8`
                } : (i = R.hex6.exec(e)) ? {
                    r: j(i[1]),
                    g: j(i[2]),
                    b: j(i[3]),
                    format: r ? `name` : `hex`
                } : (i = R.hex4.exec(e)) ? {
                    r: j(i[1] + `` + i[1]),
                    g: j(i[2] + `` + i[2]),
                    b: j(i[3] + `` + i[3]),
                    a: L(i[4] + `` + i[4]),
                    format: r ? `name` : `hex8`
                } : (i = R.hex3.exec(e)) ? {
                    r: j(i[1] + `` + i[1]),
                    g: j(i[2] + `` + i[2]),
                    b: j(i[3] + `` + i[3]),
                    format: r ? `name` : `hex`
                } : !1
            }

            function V(e) {
                var t, n;
                return e = e || {
                    level: `AA`,
                    size: `small`
                }, t = (e.level || `AA`).toUpperCase(), n = (e.size || `small`).toLowerCase(), t !== `AA` && t !== `AAA` && (t = `AA`), n !== `small` && n !== `large` && (n = `small`), {
                    level: t,
                    size: n
                }
            }
            return r
        }))
    })),
    X = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.red = void 0;
        var t = r(at()),
            n = r(ot());

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = {
            simpleCheckForValidColor: function(e) {
                var n = [`r`, `g`, `b`, `a`, `h`, `s`, `l`, `v`],
                    r = 0,
                    i = 0;
                return (0, t.default)(n, function(t) {
                    e[t] && (r += 1, isNaN(e[t]) || (i += 1), (t === `s` || t === `l`) && /^\d+%$/.test(e[t]) && (i += 1))
                }), r === i && e
            },
            toState: function(e, t) {
                var r = e.hex ? (0, n.default)(e.hex) : (0, n.default)(e),
                    i = r.toHsl(),
                    a = r.toHsv(),
                    o = r.toRgb(),
                    s = r.toHex();
                return i.s === 0 && (i.h = t || 0, a.h = t || 0), {
                    hsl: i,
                    hex: s === `000000` && o.a === 0 ? `transparent` : `#` + s,
                    rgb: o,
                    hsv: a,
                    oldHue: e.h || t || i.h,
                    source: e.source
                }
            },
            isValidHex: function(e) {
                var t = +(String(e).charAt(0) === `#`);
                return e.length !== 4 + t && e.length < 7 + t && (0, n.default)(e).isValid()
            },
            getContrastingColor: function(e) {
                if (!e) return `#fff`;
                var t = this.toState(e);
                return t.hex === `transparent` ? `rgba(0,0,0,0.4)` : (t.rgb.r * 299 + t.rgb.g * 587 + t.rgb.b * 114) / 1e3 >= 128 ? `#000` : `#fff`
            }
        }, e.red = {
            hsl: {
                a: 1,
                h: 0,
                l: .5,
                s: 1
            },
            hex: `#ff0000`,
            rgb: {
                r: 255,
                g: 0,
                b: 0,
                a: 1
            },
            hsv: {
                h: 0,
                s: 1,
                v: 1,
                a: 1
            }
        }
    })),
    st = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ColorWrap = void 0;
        var t = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            n = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, `value` in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            r = m(),
            i = s(r),
            a = s(k()),
            o = s(X());

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function c(e, t) {
            if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
        }

        function l(e, t) {
            if (!e) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
            return t && (typeof t == `object` || typeof t == `function`) ? t : e
        }

        function u(e, t) {
            if (typeof t != `function` && t !== null) throw TypeError(`Super expression must either be null or a function, not ` + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        e.default = e.ColorWrap = function(e) {
            var s = function(r) {
                u(s, r);

                function s(e) {
                    c(this, s);
                    var n = l(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this));
                    return n.handleChange = function(e, t) {
                        if (o.default.simpleCheckForValidColor(e)) {
                            var r = o.default.toState(e, e.h || n.state.oldHue);
                            n.setState(r), n.props.onChangeComplete && n.debounce(n.props.onChangeComplete, r, t), n.props.onChange && n.props.onChange(r, t)
                        }
                    }, n.handleSwatchHover = function(e, t) {
                        if (o.default.simpleCheckForValidColor(e)) {
                            var r = o.default.toState(e, e.h || n.state.oldHue);
                            n.setState(r), n.props.onSwatchHover && n.props.onSwatchHover(r, t)
                        }
                    }, n.state = t({}, o.default.toState(e.color, 0)), n.debounce = (0, a.default)(function(e, t, n) {
                        e(t, n)
                    }, 100), n
                }
                return n(s, [{
                    key: `componentWillReceiveProps`,
                    value: function(e) {
                        this.setState(t({}, o.default.toState(e.color, this.state.oldHue)))
                    }
                }, {
                    key: `render`,
                    value: function() {
                        var n = {};
                        return this.props.onSwatchHover && (n.onSwatchHover = this.handleSwatchHover), i.default.createElement(e, t({}, this.props, this.state, {
                            onChange: this.handleChange
                        }, n))
                    }
                }]), s
            }(r.PureComponent || r.Component);
            return s.propTypes = t({}, e.propTypes), s.defaultProps = t({}, e.defaultProps, {
                color: {
                    h: 250,
                    s: .5,
                    l: .2,
                    a: 1
                }
            }), s
        }
    })),
    ct = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.handleFocus = void 0;
        var t = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            n = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, `value` in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            r = i(m());

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
        }

        function o(e, t) {
            if (!e) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
            return t && (typeof t == `object` || typeof t == `function`) ? t : e
        }

        function s(e, t) {
            if (typeof t != `function` && t !== null) throw TypeError(`Super expression must either be null or a function, not ` + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        e.handleFocus = function(e) {
            var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `span`;
            return function(c) {
                s(l, c);

                function l() {
                    var e, t, n, r;
                    a(this, l);
                    var i = [...arguments];
                    return r = (t = (n = o(this, (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(e, [this].concat(i))), n), n.state = {
                        focus: !1
                    }, n.handleFocus = function() {
                        return n.setState({
                            focus: !0
                        })
                    }, n.handleBlur = function() {
                        return n.setState({
                            focus: !1
                        })
                    }, t), o(n, r)
                }
                return n(l, [{
                    key: `render`,
                    value: function() {
                        return r.default.createElement(i, {
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }, r.default.createElement(e, t({}, this.props, this.state)))
                    }
                }]), l
            }(r.default.Component)
        }
    })),
    lt = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Swatch = void 0;
        var t = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            n = o(m()),
            r = o(Y()),
            i = ct(),
            a = Z();

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = 13,
            c = e.Swatch = function(e) {
                var i = e.color,
                    o = e.style,
                    c = e.onClick,
                    l = c === void 0 ? function() {} : c,
                    u = e.onHover,
                    d = e.title,
                    f = d === void 0 ? i : d,
                    p = e.children,
                    m = e.focus,
                    h = e.focusStyle,
                    g = h === void 0 ? {} : h,
                    _ = i === `transparent`,
                    v = (0, r.default)({
                        default: {
                            swatch: t({
                                background: i,
                                height: `100%`,
                                width: `100%`,
                                cursor: `pointer`,
                                position: `relative`,
                                outline: `none`
                            }, o, m ? g : {})
                        }
                    }),
                    y = function(e) {
                        return l(i, e)
                    },
                    b = function(e) {
                        return e.keyCode === s && l(i, e)
                    },
                    x = function(e) {
                        return u(i, e)
                    },
                    S = {};
                return u && (S.onMouseOver = x), n.default.createElement(`div`, t({
                    style: v.swatch,
                    onClick: y,
                    title: f,
                    tabIndex: 0,
                    onKeyDown: b
                }, S), p, _ && n.default.createElement(a.Checkboard, {
                    borderRadius: v.swatch.borderRadius,
                    boxShadow: `inset 0 0 0 1px rgba(0,0,0,0.1)`
                }))
            };
        e.default = (0, i.handleFocus)(c)
    })),
    Z = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t = Ze();
        Object.defineProperty(e, "Alpha", {
            enumerable: !0,
            get: function() {
                return l(t).default
            }
        });
        var n = Xe();
        Object.defineProperty(e, "Checkboard", {
            enumerable: !0,
            get: function() {
                return l(n).default
            }
        });
        var r = Qe();
        Object.defineProperty(e, "EditableInput", {
            enumerable: !0,
            get: function() {
                return l(r).default
            }
        });
        var i = et();
        Object.defineProperty(e, "Hue", {
            enumerable: !0,
            get: function() {
                return l(i).default
            }
        });
        var a = tt();
        Object.defineProperty(e, "Raised", {
            enumerable: !0,
            get: function() {
                return l(a).default
            }
        });
        var o = rt();
        Object.defineProperty(e, "Saturation", {
            enumerable: !0,
            get: function() {
                return l(o).default
            }
        });
        var s = st();
        Object.defineProperty(e, "ColorWrap", {
            enumerable: !0,
            get: function() {
                return l(s).default
            }
        });
        var c = lt();
        Object.defineProperty(e, "Swatch", {
            enumerable: !0,
            get: function() {
                return l(c).default
            }
        });

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    })),
    ut = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.AlphaPointer = void 0;
        var t = r(m()),
            n = r(Y());

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.AlphaPointer = function(e) {
            var r = e.direction,
                i = (0, n.default)({
                    default: {
                        picker: {
                            width: `18px`,
                            height: `18px`,
                            borderRadius: `50%`,
                            transform: `translate(-9px, -1px)`,
                            backgroundColor: `rgb(248, 248, 248)`,
                            boxShadow: `0 1px 4px 0 rgba(0, 0, 0, 0.37)`
                        }
                    },
                    vertical: {
                        picker: {
                            transform: `translate(-3px, -9px)`
                        }
                    }
                }, {
                    vertical: r === `vertical`
                });
            return t.default.createElement(`div`, {
                style: i.picker
            })
        }
    })),
    dt = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.AlphaPicker = void 0;
        var t = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            n = o(m()),
            r = o(Y()),
            i = Z(),
            a = o(ut());

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = e.AlphaPicker = function(e) {
            var a = e.rgb,
                o = e.hsl,
                s = e.width,
                c = e.height,
                l = e.onChange,
                u = e.direction,
                d = e.style,
                f = e.renderers,
                p = e.pointer,
                m = e.className,
                h = m === void 0 ? `` : m,
                g = (0, r.default)({
                    default: {
                        picker: {
                            position: `relative`,
                            width: s,
                            height: c
                        },
                        alpha: {
                            radius: `2px`,
                            style: d
                        }
                    }
                });
            return n.default.createElement(`div`, {
                style: g.picker,
                className: `alpha-picker ` + h
            }, n.default.createElement(i.Alpha, t({}, g.alpha, {
                rgb: a,
                hsl: o,
                pointer: p,
                renderers: f,
                onChange: l,
                direction: u
            })))
        };
        s.defaultProps = {
            width: `316px`,
            height: `16px`,
            direction: `horizontal`,
            pointer: a.default
        }, e.default = (0, i.ColorWrap)(s)
    })),
    ft = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.BlockSwatches = void 0;
        var t = a(m()),
            n = a(Y()),
            r = a(E()),
            i = Z();

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.BlockSwatches = function(e) {
            var a = e.colors,
                o = e.onClick,
                s = e.onSwatchHover,
                c = (0, n.default)({
                    default: {
                        swatches: {
                            marginRight: `-10px`
                        },
                        swatch: {
                            width: `22px`,
                            height: `22px`,
                            float: `left`,
                            marginRight: `10px`,
                            marginBottom: `10px`,
                            borderRadius: `4px`
                        },
                        clear: {
                            clear: `both`
                        }
                    }
                });
            return t.default.createElement(`div`, {
                style: c.swatches
            }, (0, r.default)(a, function(e) {
                return t.default.createElement(i.Swatch, {
                    key: e,
                    color: e,
                    style: c.swatch,
                    onClick: o,
                    onHover: s,
                    focusStyle: {
                        boxShadow: `0 0 4px ` + e
                    }
                })
            }), t.default.createElement(`div`, {
                style: c.clear
            }))
        }
    })),
    pt = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Block = void 0;
        var t = s(m()),
            n = s(d()),
            r = s(Y()),
            i = s(X()),
            a = Z(),
            o = s(ft());

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = e.Block = function(e) {
            var n = e.onChange,
                s = e.onSwatchHover,
                c = e.hex,
                l = e.colors,
                u = e.width,
                d = e.triangle,
                f = e.className,
                p = f === void 0 ? `` : f,
                m = c === `transparent`,
                h = function(e, t) {
                    i.default.isValidHex(e) && n({
                        hex: e,
                        source: `hex`
                    }, t)
                },
                g = (0, r.default)({
                    default: {
                        card: {
                            width: u,
                            background: `#fff`,
                            boxShadow: `0 1px rgba(0,0,0,.1)`,
                            borderRadius: `6px`,
                            position: `relative`
                        },
                        head: {
                            height: `110px`,
                            background: c,
                            borderRadius: `6px 6px 0 0`,
                            display: `flex`,
                            alignItems: `center`,
                            justifyContent: `center`,
                            position: `relative`
                        },
                        body: {
                            padding: `10px`
                        },
                        label: {
                            fontSize: `18px`,
                            color: i.default.getContrastingColor(c),
                            position: `relative`
                        },
                        triangle: {
                            width: `0px`,
                            height: `0px`,
                            borderStyle: `solid`,
                            borderWidth: `0 10px 10px 10px`,
                            borderColor: `transparent transparent ` + c + ` transparent`,
                            position: `absolute`,
                            top: `-10px`,
                            left: `50%`,
                            marginLeft: `-10px`
                        },
                        input: {
                            width: `100%`,
                            fontSize: `12px`,
                            color: `#666`,
                            border: `0px`,
                            outline: `none`,
                            height: `22px`,
                            boxShadow: `inset 0 0 0 1px #ddd`,
                            borderRadius: `4px`,
                            padding: `0 7px`,
                            boxSizing: `border-box`
                        }
                    },
                    "hide-triangle": {
                        triangle: {
                            display: `none`
                        }
                    }
                }, {
                    "hide-triangle": d === `hide`
                });
            return t.default.createElement(`div`, {
                style: g.card,
                className: `block-picker ` + p
            }, t.default.createElement(`div`, {
                style: g.triangle
            }), t.default.createElement(`div`, {
                style: g.head
            }, m && t.default.createElement(a.Checkboard, {
                borderRadius: `6px 6px 0 0`
            }), t.default.createElement(`div`, {
                style: g.label
            }, c)), t.default.createElement(`div`, {
                style: g.body
            }, t.default.createElement(o.default, {
                colors: l,
                onClick: h,
                onSwatchHover: s
            }), t.default.createElement(a.EditableInput, {
                style: {
                    input: g.input
                },
                value: c,
                onChange: h
            })))
        };
        c.propTypes = {
            width: n.default.oneOfType([n.default.string, n.default.number]),
            colors: n.default.arrayOf(n.default.string),
            triangle: n.default.oneOf([`top`, `hide`])
        }, c.defaultProps = {
            width: 170,
            colors: [`#D9E3F0`, `#F47373`, `#697689`, `#37D67A`, `#2CCCE4`, `#555555`, `#dce775`, `#ff8a65`, `#ba68c8`],
            triangle: `top`
        }, e.default = (0, a.ColorWrap)(c)
    })),
    mt = r({
        amber: () => Ot,
        black: () => $,
        blue: () => bt,
        blueGrey: () => Nt,
        brown: () => jt,
        cyan: () => St,
        darkIcons: () => Q,
        darkText: () => Pt,
        deepOrange: () => At,
        deepPurple: () => vt,
        default: () => Rt,
        green: () => wt,
        grey: () => Mt,
        indigo: () => yt,
        lightBlue: () => xt,
        lightGreen: () => Tt,
        lightIcons: () => It,
        lightText: () => Ft,
        lime: () => Et,
        orange: () => kt,
        pink: () => gt,
        purple: () => _t,
        red: () => ht,
        teal: () => Ct,
        white: () => Lt,
        yellow: () => Dt
    }),
    ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, Q, It, Lt, $, Rt, zt = t((() => {
        ht = {
            50: `#ffebee`,
            100: `#ffcdd2`,
            200: `#ef9a9a`,
            300: `#e57373`,
            400: `#ef5350`,
            500: `#f44336`,
            600: `#e53935`,
            700: `#d32f2f`,
            800: `#c62828`,
            900: `#b71c1c`,
            a100: `#ff8a80`,
            a200: `#ff5252`,
            a400: `#ff1744`,
            a700: `#d50000`
        }, gt = {
            50: `#fce4ec`,
            100: `#f8bbd0`,
            200: `#f48fb1`,
            300: `#f06292`,
            400: `#ec407a`,
            500: `#e91e63`,
            600: `#d81b60`,
            700: `#c2185b`,
            800: `#ad1457`,
            900: `#880e4f`,
            a100: `#ff80ab`,
            a200: `#ff4081`,
            a400: `#f50057`,
            a700: `#c51162`
        }, _t = {
            50: `#f3e5f5`,
            100: `#e1bee7`,
            200: `#ce93d8`,
            300: `#ba68c8`,
            400: `#ab47bc`,
            500: `#9c27b0`,
            600: `#8e24aa`,
            700: `#7b1fa2`,
            800: `#6a1b9a`,
            900: `#4a148c`,
            a100: `#ea80fc`,
            a200: `#e040fb`,
            a400: `#d500f9`,
            a700: `#aa00ff`
        }, vt = {
            50: `#ede7f6`,
            100: `#d1c4e9`,
            200: `#b39ddb`,
            300: `#9575cd`,
            400: `#7e57c2`,
            500: `#673ab7`,
            600: `#5e35b1`,
            700: `#512da8`,
            800: `#4527a0`,
            900: `#311b92`,
            a100: `#b388ff`,
            a200: `#7c4dff`,
            a400: `#651fff`,
            a700: `#6200ea`
        }, yt = {
            50: `#e8eaf6`,
            100: `#c5cae9`,
            200: `#9fa8da`,
            300: `#7986cb`,
            400: `#5c6bc0`,
            500: `#3f51b5`,
            600: `#3949ab`,
            700: `#303f9f`,
            800: `#283593`,
            900: `#1a237e`,
            a100: `#8c9eff`,
            a200: `#536dfe`,
            a400: `#3d5afe`,
            a700: `#304ffe`
        }, bt = {
            50: `#e3f2fd`,
            100: `#bbdefb`,
            200: `#90caf9`,
            300: `#64b5f6`,
            400: `#42a5f5`,
            500: `#2196f3`,
            600: `#1e88e5`,
            700: `#1976d2`,
            800: `#1565c0`,
            900: `#0d47a1`,
            a100: `#82b1ff`,
            a200: `#448aff`,
            a400: `#2979ff`,
            a700: `#2962ff`
        }, xt = {
            50: `#e1f5fe`,
            100: `#b3e5fc`,
            200: `#81d4fa`,
            300: `#4fc3f7`,
            400: `#29b6f6`,
            500: `#03a9f4`,
            600: `#039be5`,
            700: `#0288d1`,
            800: `#0277bd`,
            900: `#01579b`,
            a100: `#80d8ff`,
            a200: `#40c4ff`,
            a400: `#00b0ff`,
            a700: `#0091ea`
        }, St = {
            50: `#e0f7fa`,
            100: `#b2ebf2`,
            200: `#80deea`,
            300: `#4dd0e1`,
            400: `#26c6da`,
            500: `#00bcd4`,
            600: `#00acc1`,
            700: `#0097a7`,
            800: `#00838f`,
            900: `#006064`,
            a100: `#84ffff`,
            a200: `#18ffff`,
            a400: `#00e5ff`,
            a700: `#00b8d4`
        }, Ct = {
            50: `#e0f2f1`,
            100: `#b2dfdb`,
            200: `#80cbc4`,
            300: `#4db6ac`,
            400: `#26a69a`,
            500: `#009688`,
            600: `#00897b`,
            700: `#00796b`,
            800: `#00695c`,
            900: `#004d40`,
            a100: `#a7ffeb`,
            a200: `#64ffda`,
            a400: `#1de9b6`,
            a700: `#00bfa5`
        }, wt = {
            50: `#e8f5e9`,
            100: `#c8e6c9`,
            200: `#a5d6a7`,
            300: `#81c784`,
            400: `#66bb6a`,
            500: `#4caf50`,
            600: `#43a047`,
            700: `#388e3c`,
            800: `#2e7d32`,
            900: `#1b5e20`,
            a100: `#b9f6ca`,
            a200: `#69f0ae`,
            a400: `#00e676`,
            a700: `#00c853`
        }, Tt = {
            50: `#f1f8e9`,
            100: `#dcedc8`,
            200: `#c5e1a5`,
            300: `#aed581`,
            400: `#9ccc65`,
            500: `#8bc34a`,
            600: `#7cb342`,
            700: `#689f38`,
            800: `#558b2f`,
            900: `#33691e`,
            a100: `#ccff90`,
            a200: `#b2ff59`,
            a400: `#76ff03`,
            a700: `#64dd17`
        }, Et = {
            50: `#f9fbe7`,
            100: `#f0f4c3`,
            200: `#e6ee9c`,
            300: `#dce775`,
            400: `#d4e157`,
            500: `#cddc39`,
            600: `#c0ca33`,
            700: `#afb42b`,
            800: `#9e9d24`,
            900: `#827717`,
            a100: `#f4ff81`,
            a200: `#eeff41`,
            a400: `#c6ff00`,
            a700: `#aeea00`
        }, Dt = {
            50: `#fffde7`,
            100: `#fff9c4`,
            200: `#fff59d`,
            300: `#fff176`,
            400: `#ffee58`,
            500: `#ffeb3b`,
            600: `#fdd835`,
            700: `#fbc02d`,
            800: `#f9a825`,
            900: `#f57f17`,
            a100: `#ffff8d`,
            a200: `#ffff00`,
            a400: `#ffea00`,
            a700: `#ffd600`
        }, Ot = {
            50: `#fff8e1`,
            100: `#ffecb3`,
            200: `#ffe082`,
            300: `#ffd54f`,
            400: `#ffca28`,
            500: `#ffc107`,
            600: `#ffb300`,
            700: `#ffa000`,
            800: `#ff8f00`,
            900: `#ff6f00`,
            a100: `#ffe57f`,
            a200: `#ffd740`,
            a400: `#ffc400`,
            a700: `#ffab00`
        }, kt = {
            50: `#fff3e0`,
            100: `#ffe0b2`,
            200: `#ffcc80`,
            300: `#ffb74d`,
            400: `#ffa726`,
            500: `#ff9800`,
            600: `#fb8c00`,
            700: `#f57c00`,
            800: `#ef6c00`,
            900: `#e65100`,
            a100: `#ffd180`,
            a200: `#ffab40`,
            a400: `#ff9100`,
            a700: `#ff6d00`
        }, At = {
            50: `#fbe9e7`,
            100: `#ffccbc`,
            200: `#ffab91`,
            300: `#ff8a65`,
            400: `#ff7043`,
            500: `#ff5722`,
            600: `#f4511e`,
            700: `#e64a19`,
            800: `#d84315`,
            900: `#bf360c`,
            a100: `#ff9e80`,
            a200: `#ff6e40`,
            a400: `#ff3d00`,
            a700: `#dd2c00`
        }, jt = {
            50: `#efebe9`,
            100: `#d7ccc8`,
            200: `#bcaaa4`,
            300: `#a1887f`,
            400: `#8d6e63`,
            500: `#795548`,
            600: `#6d4c41`,
            700: `#5d4037`,
            800: `#4e342e`,
            900: `#3e2723`
        }, Mt = {
            50: `#fafafa`,
            100: `#f5f5f5`,
            200: `#eeeeee`,
            300: `#e0e0e0`,
            400: `#bdbdbd`,
            500: `#9e9e9e`,
            600: `#757575`,
            700: `#616161`,
            800: `#424242`,
            900: `#212121`
        }, Nt = {
            50: `#eceff1`,
            100: `#cfd8dc`,
            200: `#b0bec5`,
            300: `#90a4ae`,
            400: `#78909c`,
            500: `#607d8b`,
            600: `#546e7a`,
            700: `#455a64`,
            800: `#37474f`,
            900: `#263238`
        }, Pt = {
            primary: `rgba(0, 0, 0, 0.87)`,
            secondary: `rgba(0, 0, 0, 0.54)`,
            disabled: `rgba(0, 0, 0, 0.38)`,
            dividers: `rgba(0, 0, 0, 0.12)`
        }, Ft = {
            primary: `rgba(255, 255, 255, 1)`,
            secondary: `rgba(255, 255, 255, 0.7)`,
            disabled: `rgba(255, 255, 255, 0.5)`,
            dividers: `rgba(255, 255, 255, 0.12)`
        }, Q = {
            active: `rgba(0, 0, 0, 0.54)`,
            inactive: `rgba(0, 0, 0, 0.38)`
        }, It = {
            active: `rgba(255, 255, 255, 1)`,
            inactive: `rgba(255, 255, 255, 0.5)`
        }, Lt = `#ffffff`, $ = `#000000`, Rt = {
            red: ht,
            pink: gt,
            purple: _t,
            deepPurple: vt,
            indigo: yt,
            blue: bt,
            lightBlue: xt,
            cyan: St,
            teal: Ct,
            green: wt,
            lightGreen: Tt,
            lime: Et,
            yellow: Dt,
            amber: Ot,
            orange: kt,
            deepOrange: At,
            brown: jt,
            grey: Mt,
            blueGrey: Nt,
            darkText: Pt,
            lightText: Ft,
            darkIcons: Q,
            lightIcons: It,
            white: Lt,
            black: $
        }
    })),
    Bt = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.CircleSwatch = void 0;
        var t = a(m()),
            n = Y(),
            r = a(n),
            i = Z();

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = e.CircleSwatch = function(e) {
            var n = e.color,
                a = e.onClick,
                o = e.onSwatchHover,
                s = e.hover,
                c = e.active,
                l = e.circleSize,
                u = e.circleSpacing,
                d = (0, r.default)({
                    default: {
                        swatch: {
                            width: l,
                            height: l,
                            marginRight: u,
                            marginBottom: u,
                            transform: `scale(1)`,
                            transition: `100ms transform ease`
                        },
                        Swatch: {
                            borderRadius: `50%`,
                            background: `transparent`,
                            boxShadow: `inset 0 0 0 ` + l / 2 + `px ` + n,
                            transition: `100ms box-shadow ease`
                        }
                    },
                    hover: {
                        swatch: {
                            transform: `scale(1.2)`
                        }
                    },
                    active: {
                        Swatch: {
                            boxShadow: `inset 0 0 0 3px ` + n
                        }
                    }
                }, {
                    hover: s,
                    active: c
                });
            return t.default.createElement(`div`, {
                style: d.swatch
            }, t.default.createElement(i.Swatch, {
                style: d.Swatch,
                color: n,
                onClick: a,
                onHover: o,
                focusStyle: {
                    boxShadow: d.Swatch.boxShadow + `, 0 0 5px ` + n
                }
            }))
        };
        o.defaultProps = {
            circleSize: 28,
            circleSpacing: 14
        }, e.default = (0, n.handleHover)(o)
    })),
    Vt = i((t => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Circle = void 0;
        var n = u(m()),
            r = u(d()),
            i = u(Y()),
            a = u(E()),
            o = l((zt(), e(mt))),
            s = Z(),
            c = u(Bt());

        function l(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (e != null)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = t.Circle = function(e) {
            var t = e.width,
                r = e.onChange,
                o = e.onSwatchHover,
                s = e.colors,
                l = e.hex,
                u = e.circleSize,
                d = e.circleSpacing,
                f = e.className,
                p = f === void 0 ? `` : f,
                m = (0, i.default)({
                    default: {
                        card: {
                            width: t,
                            display: `flex`,
                            flexWrap: `wrap`,
                            marginRight: -d,
                            marginBottom: -d
                        }
                    }
                }),
                h = function(e, t) {
                    return r({
                        hex: e,
                        source: `hex`
                    }, t)
                };
            return n.default.createElement(`div`, {
                style: m.card,
                className: `circle-picker ` + p
            }, (0, a.default)(s, function(e) {
                return n.default.createElement(c.default, {
                    key: e,
                    color: e,
                    onClick: h,
                    onSwatchHover: o,
                    active: l === e.toLowerCase(),
                    circleSize: u,
                    circleSpacing: d
                })
            }))
        };
        f.propTypes = {
            width: r.default.oneOfType([r.default.string, r.default.number]),
            circleSize: r.default.number,
            circleSpacing: r.default.number
        }, f.defaultProps = {
            width: 252,
            circleSize: 28,
            circleSpacing: 14,
            colors: [o.red[500], o.pink[500], o.purple[500], o.deepPurple[500], o.indigo[500], o.blue[500], o.lightBlue[500], o.cyan[500], o.teal[500], o.green[500], o.lightGreen[500], o.lime[500], o.yellow[500], o.amber[500], o.orange[500], o.deepOrange[500], o.brown[500], o.blueGrey[500]]
        }, t.default = (0, s.ColorWrap)(f)
    })),
    Ht = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ChromeFields = void 0;
        var t = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, `value` in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            n = o(m()),
            r = o(Y()),
            i = o(X()),
            a = Z();

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s(e, t) {
            if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
        }

        function c(e, t) {
            if (!e) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
            return t && (typeof t == `object` || typeof t == `function`) ? t : e
        }

        function l(e, t) {
            if (typeof t != `function` && t !== null) throw TypeError(`Super expression must either be null or a function, not ` + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        e.default = e.ChromeFields = function(e) {
            l(o, e);

            function o() {
                var e, t, n, r;
                s(this, o);
                var a = [...arguments];
                return r = (t = (n = c(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [this].concat(a))), n), n.state = {
                    view: ``
                }, n.toggleViews = function() {
                    n.state.view === `hex` ? n.setState({
                        view: `rgb`
                    }) : n.state.view === `rgb` ? n.setState({
                        view: `hsl`
                    }) : n.state.view === `hsl` && (n.props.hsl.a === 1 ? n.setState({
                        view: `hex`
                    }) : n.setState({
                        view: `rgb`
                    }))
                }, n.handleChange = function(e, t) {
                    e.hex ? i.default.isValidHex(e.hex) && n.props.onChange({
                        hex: e.hex,
                        source: `hex`
                    }, t) : e.r || e.g || e.b ? n.props.onChange({
                        r: e.r || n.props.rgb.r,
                        g: e.g || n.props.rgb.g,
                        b: e.b || n.props.rgb.b,
                        source: `rgb`
                    }, t) : e.a ? (e.a < 0 ? e.a = 0 : e.a > 1 && (e.a = 1), n.props.onChange({
                        h: n.props.hsl.h,
                        s: n.props.hsl.s,
                        l: n.props.hsl.l,
                        a: Math.round(e.a * 100) / 100,
                        source: `rgb`
                    }, t)) : (e.h || e.s || e.l) && n.props.onChange({
                        h: e.h || n.props.hsl.h,
                        s: Number(e.s && e.s || n.props.hsl.s),
                        l: Number(e.l && e.l || n.props.hsl.l),
                        source: `hsl`
                    }, t)
                }, n.showHighlight = function(e) {
                    e.target.style.background = `#eee`
                }, n.hideHighlight = function(e) {
                    e.target.style.background = `transparent`
                }, t), c(n, r)
            }
            return t(o, [{
                key: `componentDidMount`,
                value: function() {
                    this.props.hsl.a === 1 && this.state.view !== `hex` ? this.setState({
                        view: `hex`
                    }) : this.state.view !== `rgb` && this.state.view !== `hsl` && this.setState({
                        view: `rgb`
                    })
                }
            }, {
                key: `componentWillReceiveProps`,
                value: function(e) {
                    e.hsl.a !== 1 && this.state.view === `hex` && this.setState({
                        view: `rgb`
                    })
                }
            }, {
                key: `render`,
                value: function() {
                    var e = this,
                        t = (0, r.default)({
                            default: {
                                wrap: {
                                    paddingTop: `16px`,
                                    display: `flex`
                                },
                                fields: {
                                    flex: `1`,
                                    display: `flex`,
                                    marginLeft: `-6px`
                                },
                                field: {
                                    paddingLeft: `6px`,
                                    width: `100%`
                                },
                                alpha: {
                                    paddingLeft: `6px`,
                                    width: `100%`
                                },
                                toggle: {
                                    width: `32px`,
                                    textAlign: `right`,
                                    position: `relative`
                                },
                                icon: {
                                    marginRight: `-4px`,
                                    marginTop: `12px`,
                                    cursor: `pointer`,
                                    position: `relative`
                                },
                                iconHighlight: {
                                    position: `absolute`,
                                    width: `24px`,
                                    height: `28px`,
                                    background: `#eee`,
                                    borderRadius: `4px`,
                                    top: `10px`,
                                    left: `12px`,
                                    display: `none`
                                },
                                input: {
                                    fontSize: `11px`,
                                    color: `#333`,
                                    width: `100%`,
                                    borderRadius: `2px`,
                                    border: `none`,
                                    boxShadow: `inset 0 0 0 1px #dadada`,
                                    height: `21px`,
                                    textAlign: `center`
                                },
                                label: {
                                    textTransform: `uppercase`,
                                    fontSize: `11px`,
                                    lineHeight: `11px`,
                                    color: `#969696`,
                                    textAlign: `center`,
                                    display: `block`,
                                    marginTop: `12px`
                                },
                                svg: {
                                    width: `24px`,
                                    height: `24px`,
                                    border: `1px transparent solid`,
                                    borderRadius: `5px`
                                }
                            },
                            disableAlpha: {
                                alpha: {
                                    display: `none`
                                }
                            }
                        }, this.props, this.state),
                        i = void 0;
                    return this.state.view === `hex` ? i = n.default.createElement(`div`, {
                        style: t.fields,
                        className: `flexbox-fix`
                    }, n.default.createElement(`div`, {
                        style: t.field
                    }, n.default.createElement(a.EditableInput, {
                        style: {
                            input: t.input,
                            label: t.label
                        },
                        label: `hex`,
                        value: this.props.hex,
                        onChange: this.handleChange
                    }))) : this.state.view === `rgb` ? i = n.default.createElement(`div`, {
                        style: t.fields,
                        className: `flexbox-fix`
                    }, n.default.createElement(`div`, {
                        style: t.field
                    }, n.default.createElement(a.EditableInput, {
                        style: {
                            input: t.input,
                            label: t.label
                        },
                        label: `r`,
                        value: this.props.rgb.r,
                        onChange: this.handleChange
                    })), n.default.createElement(`div`, {
                        style: t.field
                    }, n.default.createElement(a.EditableInput, {
                        style: {
                            input: t.input,
                            label: t.label
                        },
                        label: `g`,
                        value: this.props.rgb.g,
                        onChange: this.handleChange
                    })), n.default.createElement(`div`, {
                        style: t.field
                    }, n.default.createElement(a.EditableInput, {
                        style: {
                            input: t.input,
                            label: t.label
                        },
                        label: `b`,
                        value: this.props.rgb.b,
                        onChange: this.handleChange
                    })), n.default.createElement(`div`, {
                        style: t.alpha
                    }, n.default.createElement(a.EditableInput, {
                        style: {
                            input: t.input,
                            label: t.label
                        },
                        label: `a`,
                        value: this.props.rgb.a,
                        arrowOffset: .01,
                        onChange: this.handleChange
                    }))) : this.state.view === `hsl` && (i = n.default.createElement(`div`, {
                        style: t.fields,
                        className: `flexbox-fix`
                    }, n.default.createElement(`div`, {
                        style: t.field
                    }, n.default.createElement(a.EditableInput, {
                        style: {
                            input: t.input,
                            label: t.label
                        },
                        label: `h`,
                        value: Math.round(this.props.hsl.h),
                        onChange: this.handleChange
                    })), n.default.createElement(`div`, {
                        style: t.field
                    }, n.default.createElement(a.EditableInput, {
                        style: {
                            input: t.input,
                            label: t.label
                        },
                        label: `s`,
                        value: Math.round(this.props.hsl.s * 100) + `%`,
                        onChange: this.handleChange
                    })), n.default.createElement(`div`, {
                        style: t.field
                    }, n.default.createElement(a.EditableInput, {
                        style: {
                            input: t.input,
                            label: t.label
                        },
                        label: `l`,
                        value: Math.round(this.props.hsl.l * 100) + `%`,
                        onChange: this.handleChange
                    })), n.default.createElement(`div`, {
                        style: t.alpha
                    }, n.default.createElement(a.EditableInput, {
                        style: {
                            input: t.input,
                            label: t.label
                        },
                        label: `a`,
                        value: this.props.hsl.a,
                        arrowOffset: .01,
                        onChange: this.handleChange
                    })))), n.default.createElement(`div`, {
                        style: t.wrap,
                        className: `flexbox-fix`
                    }, i, n.default.createElement(`div`, {
                        style: t.toggle
                    }, n.default.createElement(`div`, {
                        style: t.icon,
                        onClick: this.toggleViews,
                        ref: function(t) {
                            return e.icon = t
                        }
                    }, n.default.createElement(`svg`, {
                        style: t.svg,
                        viewBox: `0 0 24 24`,
                        onMouseOver: this.showHighlight,
                        onMouseEnter: this.showHighlight,
                        onMouseOut: this.hideHighlight
                    }, n.default.createElement(`path`, {
                        ref: function(t) {
                            return e.iconUp = t
                        },
                        fill: `#333`,
                        d: `M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z`
                    }), n.default.createElement(`path`, {
                        ref: function(t) {
                            return e.iconDown = t
                        },
                        fill: `#333`,
                        d: `M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15Z`
                    })))))
                }
            }]), o
        }(n.default.Component)
    })),
    Ut = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ChromePointer = void 0;
        var t = r(m()),
            n = r(Y());

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.ChromePointer = function() {
            var e = (0, n.default)({
                default: {
                    picker: {
                        width: `12px`,
                        height: `12px`,
                        borderRadius: `6px`,
                        transform: `translate(-6px, -1px)`,
                        backgroundColor: `rgb(248, 248, 248)`,
                        boxShadow: `0 1px 4px 0 rgba(0, 0, 0, 0.37)`
                    }
                }
            });
            return t.default.createElement(`div`, {
                style: e.picker
            })
        }
    })),
    Wt = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ChromePointerCircle = void 0;
        var t = r(m()),
            n = r(Y());

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.ChromePointerCircle = function() {
            var e = (0, n.default)({
                default: {
                    picker: {
                        width: `12px`,
                        height: `12px`,
                        borderRadius: `6px`,
                        boxShadow: `inset 0 0 0 1px #fff`,
                        transform: `translate(-6px, -6px)`
                    }
                }
            });
            return t.default.createElement(`div`, {
                style: e.picker
            })
        }
    })),
    Gt = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Chrome = void 0;
        var t = c(m()),
            n = c(d()),
            r = c(Y()),
            i = Z(),
            a = c(Ht()),
            o = c(Ut()),
            s = c(Wt());

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = e.Chrome = function(e) {
            var n = e.onChange,
                c = e.disableAlpha,
                l = e.rgb,
                u = e.hsl,
                d = e.hsv,
                f = e.hex,
                p = e.renderers,
                m = e.className,
                h = m === void 0 ? `` : m,
                g = (0, r.default)({
                    default: {
                        picker: {
                            background: `#fff`,
                            borderRadius: `2px`,
                            boxShadow: `0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)`,
                            boxSizing: `initial`,
                            width: `225px`,
                            fontFamily: `Menlo`
                        },
                        saturation: {
                            width: `100%`,
                            paddingBottom: `55%`,
                            position: `relative`,
                            borderRadius: `2px 2px 0 0`,
                            overflow: `hidden`
                        },
                        Saturation: {
                            radius: `2px 2px 0 0`
                        },
                        body: {
                            padding: `16px 16px 12px`
                        },
                        controls: {
                            display: `flex`
                        },
                        color: {
                            width: `32px`
                        },
                        swatch: {
                            marginTop: `6px`,
                            width: `16px`,
                            height: `16px`,
                            borderRadius: `8px`,
                            position: `relative`,
                            overflow: `hidden`
                        },
                        active: {
                            absolute: `0px 0px 0px 0px`,
                            borderRadius: `8px`,
                            boxShadow: `inset 0 0 0 1px rgba(0,0,0,.1)`,
                            background: `rgba(` + l.r + `, ` + l.g + `, ` + l.b + `, ` + l.a + `)`,
                            zIndex: `2`
                        },
                        toggles: {
                            flex: `1`
                        },
                        hue: {
                            height: `10px`,
                            position: `relative`,
                            marginBottom: `8px`
                        },
                        Hue: {
                            radius: `2px`
                        },
                        alpha: {
                            height: `10px`,
                            position: `relative`
                        },
                        Alpha: {
                            radius: `2px`
                        }
                    },
                    disableAlpha: {
                        color: {
                            width: `22px`
                        },
                        alpha: {
                            display: `none`
                        },
                        hue: {
                            marginBottom: `0px`
                        },
                        swatch: {
                            width: `10px`,
                            height: `10px`,
                            marginTop: `0px`
                        }
                    }
                }, {
                    disableAlpha: c
                });
            return t.default.createElement(`div`, {
                style: g.picker,
                className: `chrome-picker ` + h
            }, t.default.createElement(`div`, {
                style: g.saturation
            }, t.default.createElement(i.Saturation, {
                style: g.Saturation,
                hsl: u,
                hsv: d,
                pointer: s.default,
                onChange: n
            })), t.default.createElement(`div`, {
                style: g.body
            }, t.default.createElement(`div`, {
                style: g.controls,
                className: `flexbox-fix`
            }, t.default.createElement(`div`, {
                style: g.color
            }, t.default.createElement(`div`, {
                style: g.swatch
            }, t.default.createElement(`div`, {
                style: g.active
            }), t.default.createElement(i.Checkboard, {
                renderers: p
            }))), t.default.createElement(`div`, {
                style: g.toggles
            }, t.default.createElement(`div`, {
                style: g.hue
            }, t.default.createElement(i.Hue, {
                style: g.Hue,
                hsl: u,
                pointer: o.default,
                onChange: n
            })), t.default.createElement(`div`, {
                style: g.alpha
            }, t.default.createElement(i.Alpha, {
                style: g.Alpha,
                rgb: l,
                hsl: u,
                pointer: o.default,
                renderers: p,
                onChange: n
            })))), t.default.createElement(a.default, {
                rgb: l,
                hsl: u,
                hex: f,
                onChange: n,
                disableAlpha: c
            })))
        };
        l.propTypes = {
            disableAlpha: n.default.bool
        }, l.defaultProps = {
            disableAlpha: !1
        }, e.default = (0, i.ColorWrap)(l)
    })),
    Kt = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.CompactColor = void 0;
        var t = a(m()),
            n = a(Y()),
            r = a(X()),
            i = Z();

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.CompactColor = function(e) {
            var a = e.color,
                o = e.onClick,
                s = o === void 0 ? function() {} : o,
                c = e.onSwatchHover,
                l = e.active,
                u = (0, n.default)({
                    default: {
                        color: {
                            background: a,
                            width: `15px`,
                            height: `15px`,
                            float: `left`,
                            marginRight: `5px`,
                            marginBottom: `5px`,
                            position: `relative`,
                            cursor: `pointer`
                        },
                        dot: {
                            absolute: `5px 5px 5px 5px`,
                            background: r.default.getContrastingColor(a),
                            borderRadius: `50%`,
                            opacity: `0`
                        }
                    },
                    active: {
                        dot: {
                            opacity: `1`
                        }
                    },
                    "color-#FFFFFF": {
                        color: {
                            boxShadow: `inset 0 0 0 1px #ddd`
                        },
                        dot: {
                            background: `#000`
                        }
                    },
                    transparent: {
                        dot: {
                            background: `#000`
                        }
                    }
                }, {
                    active: l,
                    "color-#FFFFFF": a === `#FFFFFF`,
                    transparent: a === `transparent`
                });
            return t.default.createElement(i.Swatch, {
                style: u.color,
                color: a,
                onClick: s,
                onHover: c,
                focusStyle: {
                    boxShadow: `0 0 4px ` + a
                }
            }, t.default.createElement(`div`, {
                style: u.dot
            }))
        }
    })),
    qt = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.CompactFields = void 0;
        var t = i(m()),
            n = i(Y()),
            r = Z();

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.CompactFields = function(e) {
            var i = e.hex,
                a = e.rgb,
                o = e.onChange,
                s = (0, n.default)({
                    default: {
                        fields: {
                            display: `flex`,
                            paddingBottom: `6px`,
                            paddingRight: `5px`,
                            position: `relative`
                        },
                        active: {
                            position: `absolute`,
                            top: `6px`,
                            left: `5px`,
                            height: `9px`,
                            width: `9px`,
                            background: i
                        },
                        HEXwrap: {
                            flex: `6`,
                            position: `relative`
                        },
                        HEXinput: {
                            width: `80%`,
                            padding: `0px`,
                            paddingLeft: `20%`,
                            border: `none`,
                            outline: `none`,
                            background: `none`,
                            fontSize: `12px`,
                            color: `#333`,
                            height: `16px`
                        },
                        HEXlabel: {
                            display: `none`
                        },
                        RGBwrap: {
                            flex: `3`,
                            position: `relative`
                        },
                        RGBinput: {
                            width: `70%`,
                            padding: `0px`,
                            paddingLeft: `30%`,
                            border: `none`,
                            outline: `none`,
                            background: `none`,
                            fontSize: `12px`,
                            color: `#333`,
                            height: `16px`
                        },
                        RGBlabel: {
                            position: `absolute`,
                            top: `3px`,
                            left: `0px`,
                            lineHeight: `16px`,
                            textTransform: `uppercase`,
                            fontSize: `12px`,
                            color: `#999`
                        }
                    }
                }),
                c = function(e, t) {
                    e.r || e.g || e.b ? o({
                        r: e.r || a.r,
                        g: e.g || a.g,
                        b: e.b || a.b,
                        source: `rgb`
                    }, t) : o({
                        hex: e.hex,
                        source: `hex`
                    }, t)
                };
            return t.default.createElement(`div`, {
                style: s.fields,
                className: `flexbox-fix`
            }, t.default.createElement(`div`, {
                style: s.active
            }), t.default.createElement(r.EditableInput, {
                style: {
                    wrap: s.HEXwrap,
                    input: s.HEXinput,
                    label: s.HEXlabel
                },
                label: `hex`,
                value: i,
                onChange: c
            }), t.default.createElement(r.EditableInput, {
                style: {
                    wrap: s.RGBwrap,
                    input: s.RGBinput,
                    label: s.RGBlabel
                },
                label: `r`,
                value: a.r,
                onChange: c
            }), t.default.createElement(r.EditableInput, {
                style: {
                    wrap: s.RGBwrap,
                    input: s.RGBinput,
                    label: s.RGBlabel
                },
                label: `g`,
                value: a.g,
                onChange: c
            }), t.default.createElement(r.EditableInput, {
                style: {
                    wrap: s.RGBwrap,
                    input: s.RGBinput,
                    label: s.RGBlabel
                },
                label: `b`,
                value: a.b,
                onChange: c
            }))
        }
    })),
    Jt = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Compact = void 0;
        var t = l(m()),
            n = l(d()),
            r = l(Y()),
            i = l(E()),
            a = l(X()),
            o = Z(),
            s = l(Kt()),
            c = l(qt());

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = e.Compact = function(e) {
            var n = e.onChange,
                l = e.onSwatchHover,
                u = e.colors,
                d = e.hex,
                f = e.rgb,
                p = e.className,
                m = p === void 0 ? `` : p,
                h = (0, r.default)({
                    default: {
                        Compact: {
                            background: `#f6f6f6`,
                            radius: `4px`
                        },
                        compact: {
                            paddingTop: `5px`,
                            paddingLeft: `5px`,
                            boxSizing: `initial`,
                            width: `240px`
                        },
                        clear: {
                            clear: `both`
                        }
                    }
                }),
                g = function(e, t) {
                    e.hex ? a.default.isValidHex(e.hex) && n({
                        hex: e.hex,
                        source: `hex`
                    }, t) : n(e, t)
                };
            return t.default.createElement(o.Raised, {
                style: h.Compact
            }, t.default.createElement(`div`, {
                style: h.compact,
                className: `compact-picker ` + m
            }, t.default.createElement(`div`, null, (0, i.default)(u, function(e) {
                return t.default.createElement(s.default, {
                    key: e,
                    color: e,
                    active: e.toLowerCase() === d,
                    onClick: g,
                    onSwatchHover: l
                })
            }), t.default.createElement(`div`, {
                style: h.clear
            })), t.default.createElement(c.default, {
                hex: d,
                rgb: f,
                onChange: g
            })))
        };
        u.propTypes = {
            colors: n.default.arrayOf(n.default.string)
        }, u.defaultProps = {
            colors: `#4D4D4D.#999999.#FFFFFF.#F44E3B.#FE9200.#FCDC00.#DBDF00.#A4DD00.#68CCCA.#73D8FF.#AEA1FF.#FDA1FF.#333333.#808080.#cccccc.#D33115.#E27300.#FCC400.#B0BC00.#68BC00.#16A5A5.#009CE0.#7B64FF.#FA28FF.#000000.#666666.#B3B3B3.#9F0500.#C45100.#FB9E00.#808900.#194D33.#0C797D.#0062B1.#653294.#AB149E`.split(`.`)
        }, e.default = (0, o.ColorWrap)(u)
    })),
    Yt = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.GithubSwatch = void 0;
        var t = a(m()),
            n = Y(),
            r = a(n),
            i = Z();

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = e.GithubSwatch = function(e) {
            var n = e.hover,
                a = e.color,
                o = e.onClick,
                s = e.onSwatchHover,
                c = {
                    position: `relative`,
                    zIndex: `2`,
                    outline: `2px solid #fff`,
                    boxShadow: `0 0 5px 2px rgba(0,0,0,0.25)`
                },
                l = (0, r.default)({
                    default: {
                        swatch: {
                            width: `25px`,
                            height: `25px`,
                            fontSize: `0`
                        }
                    },
                    hover: {
                        swatch: c
                    }
                }, {
                    hover: n
                });
            return t.default.createElement(`div`, {
                style: l.swatch
            }, t.default.createElement(i.Swatch, {
                color: a,
                onClick: o,
                onHover: s,
                focusStyle: c
            }))
        };
        e.default = (0, n.handleHover)(o)
    })),
    Xt = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Github = void 0;
        var t = s(m()),
            n = s(d()),
            r = s(Y()),
            i = s(E()),
            a = Z(),
            o = s(Yt());

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = e.Github = function(e) {
            var n = e.width,
                a = e.colors,
                s = e.onChange,
                c = e.onSwatchHover,
                l = e.triangle,
                u = e.className,
                d = u === void 0 ? `` : u,
                f = (0, r.default)({
                    default: {
                        card: {
                            width: n,
                            background: `#fff`,
                            border: `1px solid rgba(0,0,0,0.2)`,
                            boxShadow: `0 3px 12px rgba(0,0,0,0.15)`,
                            borderRadius: `4px`,
                            position: `relative`,
                            padding: `5px`,
                            display: `flex`,
                            flexWrap: `wrap`
                        },
                        triangle: {
                            position: `absolute`,
                            border: `7px solid transparent`,
                            borderBottomColor: `#fff`
                        },
                        triangleShadow: {
                            position: `absolute`,
                            border: `8px solid transparent`,
                            borderBottomColor: `rgba(0,0,0,0.15)`
                        }
                    },
                    "hide-triangle": {
                        triangle: {
                            display: `none`
                        },
                        triangleShadow: {
                            display: `none`
                        }
                    },
                    "top-left-triangle": {
                        triangle: {
                            top: `-14px`,
                            left: `10px`
                        },
                        triangleShadow: {
                            top: `-16px`,
                            left: `9px`
                        }
                    },
                    "top-right-triangle": {
                        triangle: {
                            top: `-14px`,
                            right: `10px`
                        },
                        triangleShadow: {
                            top: `-16px`,
                            right: `9px`
                        }
                    },
                    "bottom-left-triangle": {
                        triangle: {
                            top: `35px`,
                            left: `10px`,
                            transform: `rotate(180deg)`
                        },
                        triangleShadow: {
                            top: `37px`,
                            left: `9px`,
                            transform: `rotate(180deg)`
                        }
                    },
                    "bottom-right-triangle": {
                        triangle: {
                            top: `35px`,
                            right: `10px`,
                            transform: `rotate(180deg)`
                        },
                        triangleShadow: {
                            top: `37px`,
                            right: `9px`,
                            transform: `rotate(180deg)`
                        }
                    }
                }, {
                    "hide-triangle": l === `hide`,
                    "top-left-triangle": l === `top-left`,
                    "top-right-triangle": l === `top-right`,
                    "bottom-left-triangle": l == `bottom-left`,
                    "bottom-right-triangle": l === `bottom-right`
                }),
                p = function(e, t) {
                    return s({
                        hex: e,
                        source: `hex`
                    }, t)
                };
            return t.default.createElement(`div`, {
                style: f.card,
                className: `github-picker ` + d
            }, t.default.createElement(`div`, {
                style: f.triangleShadow
            }), t.default.createElement(`div`, {
                style: f.triangle
            }), (0, i.default)(a, function(e) {
                return t.default.createElement(o.default, {
                    color: e,
                    key: e,
                    onClick: p,
                    onSwatchHover: c
                })
            }))
        };
        c.propTypes = {
            width: n.default.oneOfType([n.default.string, n.default.number]),
            colors: n.default.arrayOf(n.default.string),
            triangle: n.default.oneOf([`hide`, `top-left`, `top-right`, `bottom-left`, `bottom-right`])
        }, c.defaultProps = {
            width: 200,
            colors: [`#B80000`, `#DB3E00`, `#FCCB00`, `#008B02`, `#006B76`, `#1273DE`, `#004DCF`, `#5300EB`, `#EB9694`, `#FAD0C3`, `#FEF3BD`, `#C1E1C5`, `#BEDADC`, `#C4DEF6`, `#BED3F3`, `#D4C4FB`],
            triangle: `top-left`
        }, e.default = (0, a.ColorWrap)(c)
    })),
    Zt = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SliderPointer = void 0;
        var t = r(m()),
            n = r(Y());

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.SliderPointer = function(e) {
            var r = e.direction,
                i = (0, n.default)({
                    default: {
                        picker: {
                            width: `18px`,
                            height: `18px`,
                            borderRadius: `50%`,
                            transform: `translate(-9px, -1px)`,
                            backgroundColor: `rgb(248, 248, 248)`,
                            boxShadow: `0 1px 4px 0 rgba(0, 0, 0, 0.37)`
                        }
                    },
                    vertical: {
                        picker: {
                            transform: `translate(-3px, -9px)`
                        }
                    }
                }, {
                    vertical: r === `vertical`
                });
            return t.default.createElement(`div`, {
                style: i.picker
            })
        }
    })),
    Qt = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.HuePicker = void 0;
        var t = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            n = o(m()),
            r = o(Y()),
            i = Z(),
            a = o(Zt());

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = e.HuePicker = function(e) {
            var a = e.width,
                o = e.height,
                s = e.onChange,
                c = e.hsl,
                l = e.direction,
                u = e.pointer,
                d = e.className,
                f = d === void 0 ? `` : d,
                p = (0, r.default)({
                    default: {
                        picker: {
                            position: `relative`,
                            width: a,
                            height: o
                        },
                        hue: {
                            radius: `2px`
                        }
                    }
                });
            return n.default.createElement(`div`, {
                style: p.picker,
                className: `hue-picker ` + f
            }, n.default.createElement(i.Hue, t({}, p.hue, {
                hsl: c,
                pointer: u,
                onChange: function(e) {
                    return s({
                        a: 1,
                        h: e.h,
                        l: .5,
                        s: 1
                    })
                },
                direction: l
            })))
        };
        s.defaultProps = {
            width: `316px`,
            height: `16px`,
            direction: `horizontal`,
            pointer: a.default
        }, e.default = (0, i.ColorWrap)(s)
    })),
    $t = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Material = void 0;
        var t = a(m()),
            n = a(Y()),
            r = a(X()),
            i = Z();

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = e.Material = function(e) {
            var a = e.onChange,
                o = e.hex,
                s = e.rgb,
                c = e.className,
                l = c === void 0 ? `` : c,
                u = (0, n.default)({
                    default: {
                        material: {
                            width: `98px`,
                            height: `98px`,
                            padding: `16px`,
                            fontFamily: `Roboto`
                        },
                        HEXwrap: {
                            position: `relative`
                        },
                        HEXinput: {
                            width: `100%`,
                            marginTop: `12px`,
                            fontSize: `15px`,
                            color: `#333`,
                            padding: `0px`,
                            border: `0px`,
                            borderBottom: `2px solid ` + o,
                            outline: `none`,
                            height: `30px`
                        },
                        HEXlabel: {
                            position: `absolute`,
                            top: `0px`,
                            left: `0px`,
                            fontSize: `11px`,
                            color: `#999999`,
                            textTransform: `capitalize`
                        },
                        Hex: {
                            style: {}
                        },
                        RGBwrap: {
                            position: `relative`
                        },
                        RGBinput: {
                            width: `100%`,
                            marginTop: `12px`,
                            fontSize: `15px`,
                            color: `#333`,
                            padding: `0px`,
                            border: `0px`,
                            borderBottom: `1px solid #eee`,
                            outline: `none`,
                            height: `30px`
                        },
                        RGBlabel: {
                            position: `absolute`,
                            top: `0px`,
                            left: `0px`,
                            fontSize: `11px`,
                            color: `#999999`,
                            textTransform: `capitalize`
                        },
                        split: {
                            display: `flex`,
                            marginRight: `-10px`,
                            paddingTop: `11px`
                        },
                        third: {
                            flex: `1`,
                            paddingRight: `10px`
                        }
                    }
                }),
                d = function(e, t) {
                    e.hex ? r.default.isValidHex(e.hex) && a({
                        hex: e.hex,
                        source: `hex`
                    }, t) : (e.r || e.g || e.b) && a({
                        r: e.r || s.r,
                        g: e.g || s.g,
                        b: e.b || s.b,
                        source: `rgb`
                    }, t)
                };
            return t.default.createElement(i.Raised, null, t.default.createElement(`div`, {
                style: u.material,
                className: `material-picker ` + l
            }, t.default.createElement(i.EditableInput, {
                style: {
                    wrap: u.HEXwrap,
                    input: u.HEXinput,
                    label: u.HEXlabel
                },
                label: `hex`,
                value: o,
                onChange: d
            }), t.default.createElement(`div`, {
                style: u.split,
                className: `flexbox-fix`
            }, t.default.createElement(`div`, {
                style: u.third
            }, t.default.createElement(i.EditableInput, {
                style: {
                    wrap: u.RGBwrap,
                    input: u.RGBinput,
                    label: u.RGBlabel
                },
                label: `r`,
                value: s.r,
                onChange: d
            })), t.default.createElement(`div`, {
                style: u.third
            }, t.default.createElement(i.EditableInput, {
                style: {
                    wrap: u.RGBwrap,
                    input: u.RGBinput,
                    label: u.RGBlabel
                },
                label: `g`,
                value: s.g,
                onChange: d
            })), t.default.createElement(`div`, {
                style: u.third
            }, t.default.createElement(i.EditableInput, {
                style: {
                    wrap: u.RGBwrap,
                    input: u.RGBinput,
                    label: u.RGBlabel
                },
                label: `b`,
                value: s.b,
                onChange: d
            })))))
        };
        e.default = (0, i.ColorWrap)(o)
    })),
    en = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.PhotoshopPicker = void 0;
        var t = a(m()),
            n = a(Y()),
            r = a(X()),
            i = Z();

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.PhotoshopPicker = function(e) {
            var a = e.onChange,
                o = e.rgb,
                s = e.hsv,
                c = e.hex,
                l = (0, n.default)({
                    default: {
                        fields: {
                            paddingTop: `5px`,
                            paddingBottom: `9px`,
                            width: `80px`,
                            position: `relative`
                        },
                        divider: {
                            height: `5px`
                        },
                        RGBwrap: {
                            position: `relative`
                        },
                        RGBinput: {
                            marginLeft: `40%`,
                            width: `40%`,
                            height: `18px`,
                            border: `1px solid #888888`,
                            boxShadow: `inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC`,
                            marginBottom: `5px`,
                            fontSize: `13px`,
                            paddingLeft: `3px`,
                            marginRight: `10px`
                        },
                        RGBlabel: {
                            left: `0px`,
                            width: `34px`,
                            textTransform: `uppercase`,
                            fontSize: `13px`,
                            height: `18px`,
                            lineHeight: `22px`,
                            position: `absolute`
                        },
                        HEXwrap: {
                            position: `relative`
                        },
                        HEXinput: {
                            marginLeft: `20%`,
                            width: `80%`,
                            height: `18px`,
                            border: `1px solid #888888`,
                            boxShadow: `inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC`,
                            marginBottom: `6px`,
                            fontSize: `13px`,
                            paddingLeft: `3px`
                        },
                        HEXlabel: {
                            position: `absolute`,
                            top: `0px`,
                            left: `0px`,
                            width: `14px`,
                            textTransform: `uppercase`,
                            fontSize: `13px`,
                            height: `18px`,
                            lineHeight: `22px`
                        },
                        fieldSymbols: {
                            position: `absolute`,
                            top: `5px`,
                            right: `-7px`,
                            fontSize: `13px`
                        },
                        symbol: {
                            height: `20px`,
                            lineHeight: `22px`,
                            paddingBottom: `7px`
                        }
                    }
                }),
                u = function(e, t) {
                    e[`#`] ? r.default.isValidHex(e[`#`]) && a({
                        hex: e[`#`],
                        source: `hex`
                    }, t) : e.r || e.g || e.b ? a({
                        r: e.r || o.r,
                        g: e.g || o.g,
                        b: e.b || o.b,
                        source: `rgb`
                    }, t) : (e.h || e.s || e.v) && a({
                        h: e.h || s.h,
                        s: e.s || s.s,
                        v: e.v || s.v,
                        source: `hsv`
                    }, t)
                };
            return t.default.createElement(`div`, {
                style: l.fields
            }, t.default.createElement(i.EditableInput, {
                style: {
                    wrap: l.RGBwrap,
                    input: l.RGBinput,
                    label: l.RGBlabel
                },
                label: `h`,
                value: Math.round(s.h),
                onChange: u
            }), t.default.createElement(i.EditableInput, {
                style: {
                    wrap: l.RGBwrap,
                    input: l.RGBinput,
                    label: l.RGBlabel
                },
                label: `s`,
                value: Math.round(s.s * 100),
                onChange: u
            }), t.default.createElement(i.EditableInput, {
                style: {
                    wrap: l.RGBwrap,
                    input: l.RGBinput,
                    label: l.RGBlabel
                },
                label: `v`,
                value: Math.round(s.v * 100),
                onChange: u
            }), t.default.createElement(`div`, {
                style: l.divider
            }), t.default.createElement(i.EditableInput, {
                style: {
                    wrap: l.RGBwrap,
                    input: l.RGBinput,
                    label: l.RGBlabel
                },
                label: `r`,
                value: o.r,
                onChange: u
            }), t.default.createElement(i.EditableInput, {
                style: {
                    wrap: l.RGBwrap,
                    input: l.RGBinput,
                    label: l.RGBlabel
                },
                label: `g`,
                value: o.g,
                onChange: u
            }), t.default.createElement(i.EditableInput, {
                style: {
                    wrap: l.RGBwrap,
                    input: l.RGBinput,
                    label: l.RGBlabel
                },
                label: `b`,
                value: o.b,
                onChange: u
            }), t.default.createElement(`div`, {
                style: l.divider
            }), t.default.createElement(i.EditableInput, {
                style: {
                    wrap: l.HEXwrap,
                    input: l.HEXinput,
                    label: l.HEXlabel
                },
                label: `#`,
                value: c.replace(`#`, ``),
                onChange: u
            }), t.default.createElement(`div`, {
                style: l.fieldSymbols
            }, t.default.createElement(`div`, {
                style: l.symbol
            }, `°`), t.default.createElement(`div`, {
                style: l.symbol
            }, `%`), t.default.createElement(`div`, {
                style: l.symbol
            }, `%`)))
        }
    })),
    tn = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.PhotoshopPointerCircle = void 0;
        var t = r(m()),
            n = r(Y());

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.PhotoshopPointerCircle = function(e) {
            var r = e.hsl,
                i = (0, n.default)({
                    default: {
                        picker: {
                            width: `12px`,
                            height: `12px`,
                            borderRadius: `6px`,
                            boxShadow: `inset 0 0 0 1px #fff`,
                            transform: `translate(-6px, -6px)`
                        }
                    },
                    "black-outline": {
                        picker: {
                            boxShadow: `inset 0 0 0 1px #000`
                        }
                    }
                }, {
                    "black-outline": r.l > .5
                });
            return t.default.createElement(`div`, {
                style: i.picker
            })
        }
    })),
    nn = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.PhotoshopPointerCircle = void 0;
        var t = r(m()),
            n = r(Y());

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.PhotoshopPointerCircle = function() {
            var e = (0, n.default)({
                default: {
                    triangle: {
                        width: 0,
                        height: 0,
                        borderStyle: `solid`,
                        borderWidth: `4px 0 4px 6px`,
                        borderColor: `transparent transparent transparent #fff`,
                        position: `absolute`,
                        top: `1px`,
                        left: `1px`
                    },
                    triangleBorder: {
                        width: 0,
                        height: 0,
                        borderStyle: `solid`,
                        borderWidth: `5px 0 5px 8px`,
                        borderColor: `transparent transparent transparent #555`
                    },
                    left: {
                        Extend: `triangleBorder`,
                        transform: `translate(-13px, -4px)`
                    },
                    leftInside: {
                        Extend: `triangle`,
                        transform: `translate(-8px, -5px)`
                    },
                    right: {
                        Extend: `triangleBorder`,
                        transform: `translate(20px, -14px) rotate(180deg)`
                    },
                    rightInside: {
                        Extend: `triangle`,
                        transform: `translate(-8px, -5px)`
                    }
                }
            });
            return t.default.createElement(`div`, {
                style: e.pointer
            }, t.default.createElement(`div`, {
                style: e.left
            }, t.default.createElement(`div`, {
                style: e.leftInside
            })), t.default.createElement(`div`, {
                style: e.right
            }, t.default.createElement(`div`, {
                style: e.rightInside
            })))
        }
    })),
    rn = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.PhotoshopBotton = void 0;
        var t = r(m()),
            n = r(Y());

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.PhotoshopBotton = function(e) {
            var r = e.onClick,
                i = e.label,
                a = e.children,
                o = e.active,
                s = (0, n.default)({
                    default: {
                        button: {
                            backgroundImage: `linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)`,
                            border: `1px solid #878787`,
                            borderRadius: `2px`,
                            height: `20px`,
                            boxShadow: `0 1px 0 0 #EAEAEA`,
                            fontSize: `14px`,
                            color: `#000`,
                            lineHeight: `20px`,
                            textAlign: `center`,
                            marginBottom: `10px`,
                            cursor: `pointer`
                        }
                    },
                    active: {
                        button: {
                            boxShadow: `0 0 0 1px #878787`
                        }
                    }
                }, {
                    active: o
                });
            return t.default.createElement(`div`, {
                style: s.button,
                onClick: r
            }, i || a)
        }
    })),
    an = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.PhotoshopPreviews = void 0;
        var t = r(m()),
            n = r(Y());

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.PhotoshopPreviews = function(e) {
            var r = e.rgb,
                i = e.currentColor,
                a = (0, n.default)({
                    default: {
                        swatches: {
                            border: `1px solid #B3B3B3`,
                            borderBottom: `1px solid #F0F0F0`,
                            marginBottom: `2px`,
                            marginTop: `1px`
                        },
                        new: {
                            height: `34px`,
                            background: `rgb(` + r.r + `,` + r.g + `, ` + r.b + `)`,
                            boxShadow: `inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000`
                        },
                        current: {
                            height: `34px`,
                            background: i,
                            boxShadow: `inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000`
                        },
                        label: {
                            fontSize: `14px`,
                            color: `#000`,
                            textAlign: `center`
                        }
                    }
                });
            return t.default.createElement(`div`, null, t.default.createElement(`div`, {
                style: a.label
            }, `new`), t.default.createElement(`div`, {
                style: a.swatches
            }, t.default.createElement(`div`, {
                style: a.new
            }), t.default.createElement(`div`, {
                style: a.current
            })), t.default.createElement(`div`, {
                style: a.label
            }, `current`))
        }
    })),
    on = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Photoshop = void 0;
        var t = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, `value` in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            n = f(m()),
            r = f(d()),
            i = f(Y()),
            a = Z(),
            o = f(en()),
            s = f(tn()),
            c = f(nn()),
            l = f(rn()),
            u = f(an());

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function p(e, t) {
            if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
        }

        function h(e, t) {
            if (!e) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
            return t && (typeof t == `object` || typeof t == `function`) ? t : e
        }

        function g(e, t) {
            if (typeof t != `function` && t !== null) throw TypeError(`Super expression must either be null or a function, not ` + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var _ = e.Photoshop = function(e) {
            g(r, e);

            function r(e) {
                p(this, r);
                var t = h(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
                return t.state = {
                    currentColor: e.hex
                }, t
            }
            return t(r, [{
                key: `render`,
                value: function() {
                    var e = this.props.className,
                        t = e === void 0 ? `` : e,
                        r = (0, i.default)({
                            default: {
                                picker: {
                                    background: `#DCDCDC`,
                                    borderRadius: `4px`,
                                    boxShadow: `0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)`,
                                    boxSizing: `initial`,
                                    width: `513px`
                                },
                                head: {
                                    backgroundImage: `linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)`,
                                    borderBottom: `1px solid #B1B1B1`,
                                    boxShadow: `inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)`,
                                    height: `23px`,
                                    lineHeight: `24px`,
                                    borderRadius: `4px 4px 0 0`,
                                    fontSize: `13px`,
                                    color: `#4D4D4D`,
                                    textAlign: `center`
                                },
                                body: {
                                    padding: `15px 15px 0`,
                                    display: `flex`
                                },
                                saturation: {
                                    width: `256px`,
                                    height: `256px`,
                                    position: `relative`,
                                    border: `2px solid #B3B3B3`,
                                    borderBottom: `2px solid #F0F0F0`,
                                    overflow: `hidden`
                                },
                                hue: {
                                    position: `relative`,
                                    height: `256px`,
                                    width: `19px`,
                                    marginLeft: `10px`,
                                    border: `2px solid #B3B3B3`,
                                    borderBottom: `2px solid #F0F0F0`
                                },
                                controls: {
                                    width: `180px`,
                                    marginLeft: `10px`
                                },
                                top: {
                                    display: `flex`
                                },
                                previews: {
                                    width: `60px`
                                },
                                actions: {
                                    flex: `1`,
                                    marginLeft: `20px`
                                }
                            }
                        });
                    return n.default.createElement(`div`, {
                        style: r.picker,
                        className: `photoshop-picker ` + t
                    }, n.default.createElement(`div`, {
                        style: r.head
                    }, this.props.header), n.default.createElement(`div`, {
                        style: r.body,
                        className: `flexbox-fix`
                    }, n.default.createElement(`div`, {
                        style: r.saturation
                    }, n.default.createElement(a.Saturation, {
                        hsl: this.props.hsl,
                        hsv: this.props.hsv,
                        pointer: s.default,
                        onChange: this.props.onChange
                    })), n.default.createElement(`div`, {
                        style: r.hue
                    }, n.default.createElement(a.Hue, {
                        direction: `vertical`,
                        hsl: this.props.hsl,
                        pointer: c.default,
                        onChange: this.props.onChange
                    })), n.default.createElement(`div`, {
                        style: r.controls
                    }, n.default.createElement(`div`, {
                        style: r.top,
                        className: `flexbox-fix`
                    }, n.default.createElement(`div`, {
                        style: r.previews
                    }, n.default.createElement(u.default, {
                        rgb: this.props.rgb,
                        currentColor: this.state.currentColor
                    })), n.default.createElement(`div`, {
                        style: r.actions
                    }, n.default.createElement(l.default, {
                        label: `OK`,
                        onClick: this.props.onAccept,
                        active: !0
                    }), n.default.createElement(l.default, {
                        label: `Cancel`,
                        onClick: this.props.onCancel
                    }), n.default.createElement(o.default, {
                        onChange: this.props.onChange,
                        rgb: this.props.rgb,
                        hsv: this.props.hsv,
                        hex: this.props.hex
                    }))))))
                }
            }]), r
        }(n.default.Component);
        _.propTypes = {
            header: r.default.string
        }, _.defaultProps = {
            header: `Color Picker`
        }, e.default = (0, a.ColorWrap)(_)
    })),
    sn = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SketchFields = void 0;
        var t = a(m()),
            n = a(Y()),
            r = a(X()),
            i = Z();

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.SketchFields = function(e) {
            var a = e.onChange,
                o = e.rgb,
                s = e.hsl,
                c = e.hex,
                l = e.disableAlpha,
                u = (0, n.default)({
                    default: {
                        fields: {
                            display: `flex`,
                            paddingTop: `4px`
                        },
                        single: {
                            flex: `1`,
                            paddingLeft: `6px`
                        },
                        alpha: {
                            flex: `1`,
                            paddingLeft: `6px`
                        },
                        double: {
                            flex: `2`
                        },
                        input: {
                            width: `80%`,
                            padding: `4px 10% 3px`,
                            border: `none`,
                            boxShadow: `inset 0 0 0 1px #ccc`,
                            fontSize: `11px`
                        },
                        label: {
                            display: `block`,
                            textAlign: `center`,
                            fontSize: `11px`,
                            color: `#222`,
                            paddingTop: `3px`,
                            paddingBottom: `4px`,
                            textTransform: `capitalize`
                        }
                    },
                    disableAlpha: {
                        alpha: {
                            display: `none`
                        }
                    }
                }, {
                    disableAlpha: l
                }),
                d = function(e, t) {
                    e.hex ? r.default.isValidHex(e.hex) && a({
                        hex: e.hex,
                        source: `hex`
                    }, t) : e.r || e.g || e.b ? a({
                        r: e.r || o.r,
                        g: e.g || o.g,
                        b: e.b || o.b,
                        a: o.a,
                        source: `rgb`
                    }, t) : e.a && (e.a < 0 ? e.a = 0 : e.a > 100 && (e.a = 100), e.a /= 100, a({
                        h: s.h,
                        s: s.s,
                        l: s.l,
                        a: e.a,
                        source: `rgb`
                    }, t))
                };
            return t.default.createElement(`div`, {
                style: u.fields,
                className: `flexbox-fix`
            }, t.default.createElement(`div`, {
                style: u.double
            }, t.default.createElement(i.EditableInput, {
                style: {
                    input: u.input,
                    label: u.label
                },
                label: `hex`,
                value: c.replace(`#`, ``),
                onChange: d
            })), t.default.createElement(`div`, {
                style: u.single
            }, t.default.createElement(i.EditableInput, {
                style: {
                    input: u.input,
                    label: u.label
                },
                label: `r`,
                value: o.r,
                onChange: d,
                dragLabel: `true`,
                dragMax: `255`
            })), t.default.createElement(`div`, {
                style: u.single
            }, t.default.createElement(i.EditableInput, {
                style: {
                    input: u.input,
                    label: u.label
                },
                label: `g`,
                value: o.g,
                onChange: d,
                dragLabel: `true`,
                dragMax: `255`
            })), t.default.createElement(`div`, {
                style: u.single
            }, t.default.createElement(i.EditableInput, {
                style: {
                    input: u.input,
                    label: u.label
                },
                label: `b`,
                value: o.b,
                onChange: d,
                dragLabel: `true`,
                dragMax: `255`
            })), t.default.createElement(`div`, {
                style: u.alpha
            }, t.default.createElement(i.EditableInput, {
                style: {
                    input: u.input,
                    label: u.label
                },
                label: `a`,
                value: Math.round(o.a * 100),
                onChange: d,
                dragLabel: `true`,
                dragMax: `100`
            })))
        }
    })),
    cn = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SketchPresetColors = void 0;
        var t = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            n = o(m()),
            r = o(d()),
            i = o(Y()),
            a = Z();

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = e.SketchPresetColors = function(e) {
            var r = e.colors,
                o = e.onClick,
                s = o === void 0 ? function() {} : o,
                c = e.onSwatchHover,
                l = (0, i.default)({
                    default: {
                        colors: {
                            margin: `0 -10px`,
                            padding: `10px 0 0 10px`,
                            borderTop: `1px solid #eee`,
                            display: `flex`,
                            flexWrap: `wrap`,
                            position: `relative`
                        },
                        swatchWrap: {
                            width: `16px`,
                            height: `16px`,
                            margin: `0 10px 10px 0`
                        },
                        swatch: {
                            borderRadius: `3px`,
                            boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15)`
                        }
                    },
                    "no-presets": {
                        colors: {
                            display: `none`
                        }
                    }
                }, {
                    "no-presets": !r || !r.length
                }),
                u = function(e, t) {
                    s({
                        hex: e,
                        source: `hex`
                    }, t)
                };
            return n.default.createElement(`div`, {
                style: l.colors,
                className: `flexbox-fix`
            }, r.map(function(e) {
                var r = typeof e == `string` ? {
                        color: e
                    } : e,
                    i = `` + r.color + (r.title || ``);
                return n.default.createElement(`div`, {
                    key: i,
                    style: l.swatchWrap
                }, n.default.createElement(a.Swatch, t({}, r, {
                    style: l.swatch,
                    onClick: u,
                    onHover: c,
                    focusStyle: {
                        boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ` + r.color
                    }
                })))
            }))
        };
        s.propTypes = {
            colors: r.default.arrayOf(r.default.oneOfType([r.default.string, r.default.shape({
                color: r.default.string,
                title: r.default.string
            })])).isRequired
        }, e.default = s
    })),
    ln = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Sketch = void 0;
        var t = s(m()),
            n = s(d()),
            r = s(Y()),
            i = Z(),
            a = s(sn()),
            o = s(cn());

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = e.Sketch = function(e) {
            var n = e.width,
                s = e.rgb,
                c = e.hex,
                l = e.hsv,
                u = e.hsl,
                d = e.onChange,
                f = e.onSwatchHover,
                p = e.disableAlpha,
                m = e.presetColors,
                h = e.renderers,
                g = e.className,
                _ = g === void 0 ? `` : g,
                v = (0, r.default)({
                    default: {
                        picker: {
                            width: n,
                            padding: `10px 10px 0`,
                            boxSizing: `initial`,
                            background: `#fff`,
                            borderRadius: `4px`,
                            boxShadow: `0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)`
                        },
                        saturation: {
                            width: `100%`,
                            paddingBottom: `75%`,
                            position: `relative`,
                            overflow: `hidden`
                        },
                        Saturation: {
                            radius: `3px`,
                            shadow: `inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)`
                        },
                        controls: {
                            display: `flex`
                        },
                        sliders: {
                            padding: `4px 0`,
                            flex: `1`
                        },
                        color: {
                            width: `24px`,
                            height: `24px`,
                            position: `relative`,
                            marginTop: `4px`,
                            marginLeft: `4px`,
                            borderRadius: `3px`
                        },
                        activeColor: {
                            absolute: `0px 0px 0px 0px`,
                            borderRadius: `2px`,
                            background: `rgba(` + s.r + `,` + s.g + `,` + s.b + `,` + s.a + `)`,
                            boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)`
                        },
                        hue: {
                            position: `relative`,
                            height: `10px`,
                            overflow: `hidden`
                        },
                        Hue: {
                            radius: `2px`,
                            shadow: `inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)`
                        },
                        alpha: {
                            position: `relative`,
                            height: `10px`,
                            marginTop: `4px`,
                            overflow: `hidden`
                        },
                        Alpha: {
                            radius: `2px`,
                            shadow: `inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)`
                        }
                    },
                    disableAlpha: {
                        color: {
                            height: `10px`
                        },
                        hue: {
                            height: `10px`
                        },
                        alpha: {
                            display: `none`
                        }
                    }
                }, {
                    disableAlpha: p
                });
            return t.default.createElement(`div`, {
                style: v.picker,
                className: `sketch-picker ` + _
            }, t.default.createElement(`div`, {
                style: v.saturation
            }, t.default.createElement(i.Saturation, {
                style: v.Saturation,
                hsl: u,
                hsv: l,
                onChange: d
            })), t.default.createElement(`div`, {
                style: v.controls,
                className: `flexbox-fix`
            }, t.default.createElement(`div`, {
                style: v.sliders
            }, t.default.createElement(`div`, {
                style: v.hue
            }, t.default.createElement(i.Hue, {
                style: v.Hue,
                hsl: u,
                onChange: d
            })), t.default.createElement(`div`, {
                style: v.alpha
            }, t.default.createElement(i.Alpha, {
                style: v.Alpha,
                rgb: s,
                hsl: u,
                renderers: h,
                onChange: d
            }))), t.default.createElement(`div`, {
                style: v.color
            }, t.default.createElement(i.Checkboard, null), t.default.createElement(`div`, {
                style: v.activeColor
            }))), t.default.createElement(a.default, {
                rgb: s,
                hsl: u,
                hex: c,
                onChange: d,
                disableAlpha: p
            }), t.default.createElement(o.default, {
                colors: m,
                onClick: d,
                onSwatchHover: f
            }))
        };
        c.propTypes = {
            disableAlpha: n.default.bool,
            width: n.default.oneOfType([n.default.string, n.default.number])
        }, c.defaultProps = {
            disableAlpha: !1,
            width: 200,
            presetColors: [`#D0021B`, `#F5A623`, `#F8E71C`, `#8B572A`, `#7ED321`, `#417505`, `#BD10E0`, `#9013FE`, `#4A90E2`, `#50E3C2`, `#B8E986`, `#000000`, `#4A4A4A`, `#9B9B9B`, `#FFFFFF`]
        }, e.default = (0, i.ColorWrap)(c)
    })),
    un = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SliderSwatch = void 0;
        var t = r(m()),
            n = r(Y());

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.SliderSwatch = function(e) {
            var r = e.hsl,
                i = e.offset,
                a = e.onClick,
                o = a === void 0 ? function() {} : a,
                s = e.active,
                c = e.first,
                l = e.last,
                u = (0, n.default)({
                    default: {
                        swatch: {
                            height: `12px`,
                            background: `hsl(` + r.h + `, 50%, ` + i * 100 + `%)`,
                            cursor: `pointer`
                        }
                    },
                    first: {
                        swatch: {
                            borderRadius: `2px 0 0 2px`
                        }
                    },
                    last: {
                        swatch: {
                            borderRadius: `0 2px 2px 0`
                        }
                    },
                    active: {
                        swatch: {
                            transform: `scaleY(1.8)`,
                            borderRadius: `3.6px/2px`
                        }
                    }
                }, {
                    active: s,
                    first: c,
                    last: l
                });
            return t.default.createElement(`div`, {
                style: u.swatch,
                onClick: function(e) {
                    return o({
                        h: r.h,
                        s: .5,
                        l: i,
                        source: `hsl`
                    }, e)
                }
            })
        }
    })),
    dn = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SliderSwatches = void 0;
        var t = i(m()),
            n = i(Y()),
            r = i(un());

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.SliderSwatches = function(e) {
            var i = e.onClick,
                a = e.hsl,
                o = (0, n.default)({
                    default: {
                        swatches: {
                            marginTop: `20px`
                        },
                        swatch: {
                            boxSizing: `border-box`,
                            width: `20%`,
                            paddingRight: `1px`,
                            float: `left`
                        },
                        clear: {
                            clear: `both`
                        }
                    }
                });
            return t.default.createElement(`div`, {
                style: o.swatches
            }, t.default.createElement(`div`, {
                style: o.swatch
            }, t.default.createElement(r.default, {
                hsl: a,
                offset: `.80`,
                active: Math.round(a.l * 100) / 100 == .8 && Math.round(a.s * 100) / 100 == .5,
                onClick: i,
                first: !0
            })), t.default.createElement(`div`, {
                style: o.swatch
            }, t.default.createElement(r.default, {
                hsl: a,
                offset: `.65`,
                active: Math.round(a.l * 100) / 100 == .65 && Math.round(a.s * 100) / 100 == .5,
                onClick: i
            })), t.default.createElement(`div`, {
                style: o.swatch
            }, t.default.createElement(r.default, {
                hsl: a,
                offset: `.50`,
                active: Math.round(a.l * 100) / 100 == .5 && Math.round(a.s * 100) / 100 == .5,
                onClick: i
            })), t.default.createElement(`div`, {
                style: o.swatch
            }, t.default.createElement(r.default, {
                hsl: a,
                offset: `.35`,
                active: Math.round(a.l * 100) / 100 == .35 && Math.round(a.s * 100) / 100 == .5,
                onClick: i
            })), t.default.createElement(`div`, {
                style: o.swatch
            }, t.default.createElement(r.default, {
                hsl: a,
                offset: `.20`,
                active: Math.round(a.l * 100) / 100 == .2 && Math.round(a.s * 100) / 100 == .5,
                onClick: i,
                last: !0
            })), t.default.createElement(`div`, {
                style: o.clear
            }))
        }
    })),
    fn = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SliderPointer = void 0;
        var t = r(m()),
            n = r(Y());

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.SliderPointer = function() {
            var e = (0, n.default)({
                default: {
                    picker: {
                        width: `14px`,
                        height: `14px`,
                        borderRadius: `6px`,
                        transform: `translate(-7px, -1px)`,
                        backgroundColor: `rgb(248, 248, 248)`,
                        boxShadow: `0 1px 4px 0 rgba(0, 0, 0, 0.37)`
                    }
                }
            });
            return t.default.createElement(`div`, {
                style: e.picker
            })
        }
    })),
    pn = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Slider = void 0;
        var t = o(m()),
            n = o(Y()),
            r = Z(),
            i = o(dn()),
            a = o(fn());

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = e.Slider = function(e) {
            var a = e.hsl,
                o = e.onChange,
                s = e.pointer,
                c = e.className,
                l = c === void 0 ? `` : c,
                u = (0, n.default)({
                    default: {
                        hue: {
                            height: `12px`,
                            position: `relative`
                        },
                        Hue: {
                            radius: `2px`
                        }
                    }
                });
            return t.default.createElement(`div`, {
                className: `slider-picker ` + l
            }, t.default.createElement(`div`, {
                style: u.hue
            }, t.default.createElement(r.Hue, {
                style: u.Hue,
                hsl: a,
                pointer: s,
                onChange: o
            })), t.default.createElement(`div`, {
                style: u.swatches
            }, t.default.createElement(i.default, {
                hsl: a,
                onClick: o
            })))
        };
        s.defaultProps = {
            pointer: a.default
        }, e.default = (0, r.ColorWrap)(s)
    })),
    mn = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SwatchesColor = void 0;
        var t = a(m()),
            n = a(Y()),
            r = a(X()),
            i = Z();

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.SwatchesColor = function(e) {
            var a = e.color,
                o = e.onClick,
                s = o === void 0 ? function() {} : o,
                c = e.onSwatchHover,
                l = e.first,
                u = e.last,
                d = e.active,
                f = (0, n.default)({
                    default: {
                        color: {
                            width: `40px`,
                            height: `24px`,
                            cursor: `pointer`,
                            background: a,
                            marginBottom: `1px`
                        },
                        check: {
                            fill: r.default.getContrastingColor(a),
                            marginLeft: `8px`,
                            display: `none`
                        }
                    },
                    first: {
                        color: {
                            overflow: `hidden`,
                            borderRadius: `2px 2px 0 0`
                        }
                    },
                    last: {
                        color: {
                            overflow: `hidden`,
                            borderRadius: `0 0 2px 2px`
                        }
                    },
                    active: {
                        check: {
                            display: `block`
                        }
                    },
                    "color-#FFFFFF": {
                        color: {
                            boxShadow: `inset 0 0 0 1px #ddd`
                        },
                        check: {
                            fill: `#333`
                        }
                    },
                    transparent: {
                        check: {
                            fill: `#333`
                        }
                    }
                }, {
                    first: l,
                    last: u,
                    active: d,
                    "color-#FFFFFF": a === `#FFFFFF`,
                    transparent: a === `transparent`
                });
            return t.default.createElement(i.Swatch, {
                color: a,
                style: f.color,
                onClick: s,
                onHover: c,
                focusStyle: {
                    boxShadow: `0 0 4px ` + a
                }
            }, t.default.createElement(`div`, {
                style: f.check
            }, t.default.createElement(`svg`, {
                style: {
                    width: `24px`,
                    height: `24px`
                },
                viewBox: `0 0 24 24`
            }, t.default.createElement(`path`, {
                d: `M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z`
            }))))
        }
    })),
    hn = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SwatchesGroup = void 0;
        var t = a(m()),
            n = a(Y()),
            r = a(E()),
            i = a(mn());

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = e.SwatchesGroup = function(e) {
            var a = e.onClick,
                o = e.onSwatchHover,
                s = e.group,
                c = e.active,
                l = (0, n.default)({
                    default: {
                        group: {
                            paddingBottom: `10px`,
                            width: `40px`,
                            float: `left`,
                            marginRight: `10px`
                        }
                    }
                });
            return t.default.createElement(`div`, {
                style: l.group
            }, (0, r.default)(s, function(e, n) {
                return t.default.createElement(i.default, {
                    key: e,
                    color: e,
                    active: e.toLowerCase() === c,
                    first: n === 0,
                    last: n === s.length - 1,
                    onClick: a,
                    onSwatchHover: o
                })
            }))
        }
    })),
    gn = i((t => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Swatches = void 0;
        var n = f(m()),
            r = f(d()),
            i = f(Y()),
            a = f(E()),
            o = f(X()),
            s = u((zt(), e(mt))),
            c = Z(),
            l = f(hn());

        function u(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (e != null)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var p = t.Swatches = function(e) {
            var t = e.width,
                r = e.height,
                s = e.onChange,
                u = e.onSwatchHover,
                d = e.colors,
                f = e.hex,
                p = e.className,
                m = p === void 0 ? `` : p,
                h = (0, i.default)({
                    default: {
                        picker: {
                            width: t,
                            height: r
                        },
                        overflow: {
                            height: r,
                            overflowY: `scroll`
                        },
                        body: {
                            padding: `16px 0 6px 16px`
                        },
                        clear: {
                            clear: `both`
                        }
                    }
                }),
                g = function(e, t) {
                    o.default.isValidHex(e) && s({
                        hex: e,
                        source: `hex`
                    }, t)
                };
            return n.default.createElement(`div`, {
                style: h.picker,
                className: `swatches-picker ` + m
            }, n.default.createElement(c.Raised, null, n.default.createElement(`div`, {
                style: h.overflow
            }, n.default.createElement(`div`, {
                style: h.body
            }, (0, a.default)(d, function(e) {
                return n.default.createElement(l.default, {
                    key: e.toString(),
                    group: e,
                    active: f,
                    onClick: g,
                    onSwatchHover: u
                })
            }), n.default.createElement(`div`, {
                style: h.clear
            })))))
        };
        p.propTypes = {
            width: r.default.oneOfType([r.default.string, r.default.number]),
            height: r.default.oneOfType([r.default.string, r.default.number]),
            colors: r.default.arrayOf(r.default.arrayOf(r.default.string))
        }, p.defaultProps = {
            width: 320,
            height: 240,
            colors: [
                [s.red[900], s.red[700], s.red[500], s.red[300], s.red[100]],
                [s.pink[900], s.pink[700], s.pink[500], s.pink[300], s.pink[100]],
                [s.purple[900], s.purple[700], s.purple[500], s.purple[300], s.purple[100]],
                [s.deepPurple[900], s.deepPurple[700], s.deepPurple[500], s.deepPurple[300], s.deepPurple[100]],
                [s.indigo[900], s.indigo[700], s.indigo[500], s.indigo[300], s.indigo[100]],
                [s.blue[900], s.blue[700], s.blue[500], s.blue[300], s.blue[100]],
                [s.lightBlue[900], s.lightBlue[700], s.lightBlue[500], s.lightBlue[300], s.lightBlue[100]],
                [s.cyan[900], s.cyan[700], s.cyan[500], s.cyan[300], s.cyan[100]],
                [s.teal[900], s.teal[700], s.teal[500], s.teal[300], s.teal[100]],
                [`#194D33`, s.green[700], s.green[500], s.green[300], s.green[100]],
                [s.lightGreen[900], s.lightGreen[700], s.lightGreen[500], s.lightGreen[300], s.lightGreen[100]],
                [s.lime[900], s.lime[700], s.lime[500], s.lime[300], s.lime[100]],
                [s.yellow[900], s.yellow[700], s.yellow[500], s.yellow[300], s.yellow[100]],
                [s.amber[900], s.amber[700], s.amber[500], s.amber[300], s.amber[100]],
                [s.orange[900], s.orange[700], s.orange[500], s.orange[300], s.orange[100]],
                [s.deepOrange[900], s.deepOrange[700], s.deepOrange[500], s.deepOrange[300], s.deepOrange[100]],
                [s.brown[900], s.brown[700], s.brown[500], s.brown[300], s.brown[100]],
                [s.blueGrey[900], s.blueGrey[700], s.blueGrey[500], s.blueGrey[300], s.blueGrey[100]],
                [`#000000`, `#525252`, `#969696`, `#D9D9D9`, `#FFFFFF`]
            ]
        }, t.default = (0, c.ColorWrap)(p)
    })),
    _n = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Twitter = void 0;
        var t = s(m()),
            n = s(d()),
            r = s(Y()),
            i = s(E()),
            a = s(X()),
            o = Z();

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = e.Twitter = function(e) {
            var n = e.onChange,
                s = e.onSwatchHover,
                c = e.hex,
                l = e.colors,
                u = e.width,
                d = e.triangle,
                f = e.className,
                p = f === void 0 ? `` : f,
                m = (0, r.default)({
                    default: {
                        card: {
                            width: u,
                            background: `#fff`,
                            border: `0 solid rgba(0,0,0,0.25)`,
                            boxShadow: `0 1px 4px rgba(0,0,0,0.25)`,
                            borderRadius: `4px`,
                            position: `relative`
                        },
                        body: {
                            padding: `15px 9px 9px 15px`
                        },
                        label: {
                            fontSize: `18px`,
                            color: `#fff`
                        },
                        triangle: {
                            width: `0px`,
                            height: `0px`,
                            borderStyle: `solid`,
                            borderWidth: `0 9px 10px 9px`,
                            borderColor: `transparent transparent #fff transparent`,
                            position: `absolute`
                        },
                        triangleShadow: {
                            width: `0px`,
                            height: `0px`,
                            borderStyle: `solid`,
                            borderWidth: `0 9px 10px 9px`,
                            borderColor: `transparent transparent rgba(0,0,0,.1) transparent`,
                            position: `absolute`
                        },
                        hash: {
                            background: `#F0F0F0`,
                            height: `30px`,
                            width: `30px`,
                            borderRadius: `4px 0 0 4px`,
                            float: `left`,
                            color: `#98A1A4`,
                            display: `flex`,
                            alignItems: `center`,
                            justifyContent: `center`
                        },
                        input: {
                            width: `100px`,
                            fontSize: `14px`,
                            color: `#666`,
                            border: `0px`,
                            outline: `none`,
                            height: `28px`,
                            boxShadow: `inset 0 0 0 1px #F0F0F0`,
                            boxSizing: `content-box`,
                            borderRadius: `0 4px 4px 0`,
                            float: `left`,
                            paddingLeft: `8px`
                        },
                        swatch: {
                            width: `30px`,
                            height: `30px`,
                            float: `left`,
                            borderRadius: `4px`,
                            margin: `0 6px 6px 0`
                        },
                        clear: {
                            clear: `both`
                        }
                    },
                    "hide-triangle": {
                        triangle: {
                            display: `none`
                        },
                        triangleShadow: {
                            display: `none`
                        }
                    },
                    "top-left-triangle": {
                        triangle: {
                            top: `-10px`,
                            left: `12px`
                        },
                        triangleShadow: {
                            top: `-11px`,
                            left: `12px`
                        }
                    },
                    "top-right-triangle": {
                        triangle: {
                            top: `-10px`,
                            right: `12px`
                        },
                        triangleShadow: {
                            top: `-11px`,
                            right: `12px`
                        }
                    }
                }, {
                    "hide-triangle": d === `hide`,
                    "top-left-triangle": d === `top-left`,
                    "top-right-triangle": d === `top-right`
                }),
                h = function(e, t) {
                    a.default.isValidHex(e) && n({
                        hex: e,
                        source: `hex`
                    }, t)
                };
            return t.default.createElement(`div`, {
                style: m.card,
                className: `twitter-picker ` + p
            }, t.default.createElement(`div`, {
                style: m.triangleShadow
            }), t.default.createElement(`div`, {
                style: m.triangle
            }), t.default.createElement(`div`, {
                style: m.body
            }, (0, i.default)(l, function(e, n) {
                return t.default.createElement(o.Swatch, {
                    key: n,
                    color: e,
                    hex: e,
                    style: m.swatch,
                    onClick: h,
                    onHover: s,
                    focusStyle: {
                        boxShadow: `0 0 4px ` + e
                    }
                })
            }), t.default.createElement(`div`, {
                style: m.hash
            }, `#`), t.default.createElement(o.EditableInput, {
                style: {
                    input: m.input
                },
                value: c.replace(`#`, ``),
                onChange: h
            }), t.default.createElement(`div`, {
                style: m.clear
            })))
        };
        c.propTypes = {
            width: n.default.oneOfType([n.default.string, n.default.number]),
            triangle: n.default.oneOf([`hide`, `top-left`, `top-right`]),
            colors: n.default.arrayOf(n.default.string)
        }, c.defaultProps = {
            width: 276,
            colors: [`#FF6900`, `#FCB900`, `#7BDCB5`, `#00D084`, `#8ED1FC`, `#0693E3`, `#ABB8C3`, `#EB144C`, `#F78DA7`, `#9900EF`],
            triangle: `top-left`
        }, e.default = (0, o.ColorWrap)(c)
    })),
    vn = i((e => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.CustomPicker = e.TwitterPicker = e.SwatchesPicker = e.SliderPicker = e.SketchPicker = e.PhotoshopPicker = e.MaterialPicker = e.HuePicker = e.GithubPicker = e.CompactPicker = e.ChromePicker = e.default = e.CirclePicker = e.BlockPicker = e.AlphaPicker = void 0;
        var t = dt();
        Object.defineProperty(e, "AlphaPicker", {
            enumerable: !0,
            get: function() {
                return g(t).default
            }
        });
        var n = pt();
        Object.defineProperty(e, "BlockPicker", {
            enumerable: !0,
            get: function() {
                return g(n).default
            }
        });
        var r = Vt();
        Object.defineProperty(e, "CirclePicker", {
            enumerable: !0,
            get: function() {
                return g(r).default
            }
        });
        var i = Gt();
        Object.defineProperty(e, "ChromePicker", {
            enumerable: !0,
            get: function() {
                return g(i).default
            }
        });
        var a = Jt();
        Object.defineProperty(e, "CompactPicker", {
            enumerable: !0,
            get: function() {
                return g(a).default
            }
        });
        var o = Xt();
        Object.defineProperty(e, "GithubPicker", {
            enumerable: !0,
            get: function() {
                return g(o).default
            }
        });
        var s = Qt();
        Object.defineProperty(e, "HuePicker", {
            enumerable: !0,
            get: function() {
                return g(s).default
            }
        });
        var c = $t();
        Object.defineProperty(e, "MaterialPicker", {
            enumerable: !0,
            get: function() {
                return g(c).default
            }
        });
        var l = on();
        Object.defineProperty(e, "PhotoshopPicker", {
            enumerable: !0,
            get: function() {
                return g(l).default
            }
        });
        var u = ln();
        Object.defineProperty(e, "SketchPicker", {
            enumerable: !0,
            get: function() {
                return g(u).default
            }
        });
        var d = pn();
        Object.defineProperty(e, "SliderPicker", {
            enumerable: !0,
            get: function() {
                return g(d).default
            }
        });
        var f = gn();
        Object.defineProperty(e, "SwatchesPicker", {
            enumerable: !0,
            get: function() {
                return g(f).default
            }
        });
        var p = _n();
        Object.defineProperty(e, "TwitterPicker", {
            enumerable: !0,
            get: function() {
                return g(p).default
            }
        });
        var m = st();
        Object.defineProperty(e, "CustomPicker", {
            enumerable: !0,
            get: function() {
                return g(m).default
            }
        });
        var h = g(i);

        function g(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.default = h.default
    }))(),
    yn = () => {
        let [e, t] = je.useState(``), [n, r] = je.useState(``), [i, s] = je.useState(!1), c = e => t(e.target.value), l = e => r(e.hex), u = !!(e && n);
        return (0, J.jsxs)(J.Fragment, {
            children: [(0, J.jsx)(p, {
                title: `New Class`
            }), (0, J.jsxs)(bn, {
                children: [(0, J.jsx)(v, {
                    includeSpacer: !0
                }), (0, J.jsxs)(xn, {
                    children: [(0, J.jsx)(Pe, {}), (0, J.jsxs)(Sn, {
                        children: [(0, J.jsx)(Cn, {
                            children: `Class Name`
                        }), (0, J.jsx)(g, {
                            size: `large`,
                            placeholder: `First Period`,
                            style: {
                                width: `100%`
                            },
                            maxLength: 28,
                            value: e,
                            onChange: c
                        }), (0, J.jsx)(`div`, {
                            style: {
                                height: 25
                            }
                        }), (0, J.jsx)(Cn, {
                            children: `Class Color`
                        }), (0, J.jsx)(`div`, {
                            style: {
                                height: 5
                            }
                        }), (0, J.jsx)(vn.CirclePicker, {
                            width: `100%`,
                            onChange: l,
                            color: n
                        })]
                    }), (0, J.jsx)(`div`, {
                        style: {
                            height: 25,
                            flexShrink: 0
                        }
                    }), (0, J.jsx)(Sn, {
                        style: {
                            flex: 1,
                            paddingTop: 30,
                            paddingBottom: 30,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0
                        },
                        children: (0, J.jsxs)(`div`, {
                            className: `flex maxWidth`,
                            style: {
                                justifyContent: `space-between`
                            },
                            children: [(0, J.jsx)(`div`, {}), (0, J.jsx)(`div`, {
                                children: (0, J.jsx)(h, {
                                    size: `large`,
                                    style: {
                                        height: 58,
                                        width: 239
                                    },
                                    type: `primary`,
                                    disabled: !u,
                                    loading: i,
                                    onClick: () => {
                                        u && !i && (s(!0), a({
                                            url: `/api/v1/groups/create`,
                                            method: `post`,
                                            data: {
                                                name: e,
                                                color: n
                                            },
                                            success: e => {
                                                C(`/class/${e._id}`), f(_)
                                            },
                                            error: e => o({
                                                e,
                                                default: {
                                                    title: `Error creating class`
                                                }
                                            }),
                                            both: () => s(!1)
                                        }))
                                    },
                                    children: `Create Class`
                                })
                            })]
                        })
                    })]
                })]
            })]
        })
    },
    bn = b.div.attrs({
        className: `scroll-y flex-column vc`
    })`
  flex: 1;
  width: 100%;
  background: ${x.Snow};
`,
    xn = b.div.attrs({
        className: `flex vc flex-column`
    })`
  width: 80%;
  max-width: 1100px;
  flex: 1;
`,
    Sn = b.div`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${x.White};
  padding: 60px;
  border-radius: 8px;
  color: ${x.Black};
  width: 100%;
`,
    Cn = b.h2`
  font-size: 28px;
  color: ${x.Black};
  margin-bottom: 0px;
  font-weight: ${S.UltraBold};
`;
export {
    yn as
    default
};