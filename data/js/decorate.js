import {
    n as e,
    t
} from "./dist-1.js";
e();

function n(e) {
    var t = [...arguments].slice(1);
    throw Error(typeof e == `number` ? `[MobX] minified error nr: ` + e + (t.length ? ` ` + t.map(String).join(`,`) : ``) + `. Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts` : `[MobX] ` + e)
}
var r = {};

function i() {
    return typeof globalThis < `u` ? globalThis : typeof window < `u` ? window : t === void 0 ? typeof self < `u` ? self : r : t
}
var a = Object.assign,
    o = Object.getOwnPropertyDescriptor,
    s = Object.defineProperty,
    c = Object.prototype,
    l = [];
Object.freeze(l);
var u = {};
Object.freeze(u);
var d = typeof Proxy < `u`,
    f = Object.toString();

function ee() {
    d || n(`Proxy not available`)
}

function p(e) {
    var t = !1;
    return function() {
        if (!t) return t = !0, e.apply(this, arguments)
    }
}
var m = function() {};

function h(e) {
    return typeof e == `function`
}

function g(e) {
    switch (typeof e) {
        case `string`:
        case `symbol`:
        case `number`:
            return !0
    }
    return !1
}

function _(e) {
    return typeof e == `object` && !!e
}

function v(e) {
    if (!_(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (t == null) return !0;
    var n = Object.hasOwnProperty.call(t, `constructor`) && t.constructor;
    return typeof n == `function` && n.toString() === f
}

function te(e) {
    var t = e == null ? void 0 : e.constructor;
    return t ? t.name === `GeneratorFunction` || t.displayName === `GeneratorFunction` : !1
}

function ne(e, t, n) {
    s(e, t, {
        enumerable: !1,
        writable: !0,
        configurable: !0,
        value: n
    })
}

function re(e, t, n) {
    s(e, t, {
        enumerable: !1,
        writable: !1,
        configurable: !0,
        value: n
    })
}

function y(e, t) {
    var n = `isMobX` + e;
    return t.prototype[n] = !0,
        function(e) {
            return _(e) && e[n] === !0
        }
}

function ie(e) {
    return e != null && Object.prototype.toString.call(e) === `[object Map]`
}

function ae(e) {
    var t = Object.getPrototypeOf(e),
        n = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(n) === null
}

function b(e) {
    return e != null && Object.prototype.toString.call(e) === `[object Set]`
}
var oe = Object.getOwnPropertySymbols !== void 0;

function se(e) {
    var t = Object.keys(e);
    if (!oe) return t;
    var n = Object.getOwnPropertySymbols(e);
    return n.length ? [].concat(t, n.filter(function(t) {
        return c.propertyIsEnumerable.call(e, t)
    })) : t
}
var ce = typeof Reflect < `u` && Reflect.ownKeys ? Reflect.ownKeys : oe ? function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : Object.getOwnPropertyNames;

function le(e) {
    return e === null ? null : typeof e == `object` ? `` + e : e
}

function x(e, t) {
    return c.hasOwnProperty.call(e, t)
}
var ue = Object.getOwnPropertyDescriptors || function(e) {
    var t = {};
    return ce(e).forEach(function(n) {
        t[n] = o(e, n)
    }), t
};

function S(e, t) {
    return !!(e & t)
}

function C(e, t, n) {
    return n ? e |= t : e &= ~t, e
}

function de(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function fe(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, `value` in r && (r.writable = !0), Object.defineProperty(e, ve(r.key), r)
    }
}

function pe(e, t, n) {
    return t && fe(e.prototype, t), n && fe(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function me(e, t) {
    var n = typeof Symbol < `u` && e[Symbol.iterator] || e[`@@iterator`];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = ye(e)) || t && e && typeof e.length == `number`) {
        n && (e = n);
        var r = 0;
        return function() {
            return r >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[r++]
            }
        }
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function w() {
    return w = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, w.apply(null, arguments)
}

function he(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ge(e, t)
}

function ge(e, t) {
    return ge = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
    }, ge(e, t)
}

function _e(e, t) {
    if (typeof e != `object` || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || `default`);
        if (typeof r != `object`) return r;
        throw TypeError(`@@toPrimitive must return a primitive value.`)
    }
    return (t === `string` ? String : Number)(e)
}

function ve(e) {
    var t = _e(e, `string`);
    return typeof t == `symbol` ? t : t + ``
}

function ye(e, t) {
    if (e) {
        if (typeof e == `string`) return de(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return n === `Object` && e.constructor && (n = e.constructor.name), n === `Map` || n === `Set` ? Array.from(e) : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? de(e, t) : void 0
    }
}
var T = Symbol(`mobx-stored-annotations`);

function E(e) {
    function t(t, n) {
        if (Se(n)) return e.decorate_20223_(t, n);
        be(t, n, e)
    }
    return Object.assign(t, e)
}

function be(e, t, n) {
    x(e, T) || ne(e, T, w({}, e[T])), Pe(n) || (e[T][t] = n)
}

function xe(e) {
    return x(e, T) || ne(e, T, w({}, e[T])), e[T]
}

function Se(e) {
    return typeof e == `object` && typeof e.kind == `string`
}
var D = Symbol(`mobx administration`),
    O = function() {
        function e(e) {
            e === void 0 && (e = `Atom`), this.name_ = void 0, this.flags_ = 0, this.observers_ = new Set, this.lastAccessedBy_ = 0, this.lowestObserverState_ = P.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = e
        }
        var t = e.prototype;
        return t.onBO = function() {
            this.onBOL && this.onBOL.forEach(function(e) {
                return e()
            })
        }, t.onBUO = function() {
            this.onBUOL && this.onBUOL.forEach(function(e) {
                return e()
            })
        }, t.reportObserved = function() {
            return sn(this)
        }, t.reportChanged = function() {
            R(), cn(this), z()
        }, t.toString = function() {
            return this.name_
        }, pe(e, [{
            key: `isBeingObserved`,
            get: function() {
                return S(this.flags_, e.isBeingObservedMask_)
            },
            set: function(t) {
                this.flags_ = C(this.flags_, e.isBeingObservedMask_, t)
            }
        }, {
            key: `isPendingUnobservation`,
            get: function() {
                return S(this.flags_, e.isPendingUnobservationMask_)
            },
            set: function(t) {
                this.flags_ = C(this.flags_, e.isPendingUnobservationMask_, t)
            }
        }, {
            key: `diffValue`,
            get: function() {
                return +!!S(this.flags_, e.diffValueMask_)
            },
            set: function(t) {
                this.flags_ = C(this.flags_, e.diffValueMask_, t === 1)
            }
        }])
    }();
O.isBeingObservedMask_ = 1, O.isPendingUnobservationMask_ = 2, O.diffValueMask_ = 4;
var Ce = y(`Atom`, O);

function we(e, t, n) {
    t === void 0 && (t = m), n === void 0 && (n = m);
    var r = new O(e);
    return t !== m && Rn(r, t), n !== m && zn(r, n), r
}

function Te(e, t) {
    return e === t
}

function Ee(e, t) {
    return ri(e, t)
}

function De(e, t) {
    return ri(e, t, 1)
}

function Oe(e, t) {
    return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t
}
var ke = {
    identity: Te,
    structural: Ee,
    default: Oe,
    shallow: De
};

function k(e, t, n) {
    return rr(e) ? e : Array.isArray(e) ? A.array(e, {
        name: n
    }) : v(e) ? A.object(e, void 0, {
        name: n
    }) : ie(e) ? A.map(e, {
        name: n
    }) : b(e) ? A.set(e, {
        name: n
    }) : typeof e == `function` && !An(e) && !tr(e) ? te(e) ? $n(e) : kn(n, e) : e
}

function Ae(e, t, n) {
    if (e == null || Br(e) || Tr(e) || Q(e) || $(e)) return e;
    if (Array.isArray(e)) return A.array(e, {
        name: n,
        deep: !1
    });
    if (v(e)) return A.object(e, void 0, {
        name: n,
        deep: !1
    });
    if (ie(e)) return A.map(e, {
        name: n,
        deep: !1
    });
    if (b(e)) return A.set(e, {
        name: n,
        deep: !1
    })
}

function je(e) {
    return e
}

function Me(e, t) {
    return ri(e, t) ? t : e
}
var Ne = `override`;

function Pe(e) {
    return e.annotationType_ === Ne
}

function Fe(e, t) {
    return {
        annotationType_: e,
        options_: t,
        make_: Ie,
        extend_: Le,
        decorate_20223_: Re
    }
}

function Ie(e, t, n, r) {
    var i;
    return (i = this.options_) != null && i.bound ? this.extend_(e, t, n, !1) === null ? 0 : 1 : r === e.target_ ? this.extend_(e, t, n, !1) === null ? 0 : 2 : An(n.value) ? 1 : (s(r, t, Be(e, this, t, n, !1)), 2)
}

function Le(e, t, n, r) {
    var i = Be(e, this, t, n);
    return e.defineProperty_(t, i, r)
}

function Re(e, t) {
    var r = t.kind,
        i = t.name,
        a = t.addInitializer,
        o = this,
        s = function(e) {
            var t, n;
            return j(((t = o.options_) == null ? void 0 : t.name) ?? i.toString(), e, ((n = o.options_) == null ? void 0 : n.autoAction) ?? !1)
        };
    if (r == `field`) return function(e) {
        var t, n = e;
        return An(n) || (n = s(n)), (t = o.options_) != null && t.bound && (n = n.bind(this), n.isMobxAction = !0), n
    };
    if (r == `method`) {
        var c;
        return An(e) || (e = s(e)), (c = this.options_) != null && c.bound && a(function() {
            var e = this,
                t = e[i].bind(e);
            t.isMobxAction = !0, e[i] = t
        }), e
    }
    n(`Cannot apply '` + o.annotationType_ + `' to '` + String(i) + `' (kind: ` + r + `):` + (`
'` + o.annotationType_ + `' can only be used on properties with a function value.`))
}

function ze(e, t, n, r) {
    t.annotationType_, r.value
}

function Be(e, t, n, r, i) {
    var a, o, s, c;
    i === void 0 && (i = L.safeDescriptors), ze(e, t, n, r);
    var l = r.value;
    return (a = t.options_) != null && a.bound && (l = l.bind(e.proxy_ ?? e.target_)), {
        value: j(((o = t.options_) == null ? void 0 : o.name) ?? n.toString(), l, ((s = t.options_) == null ? void 0 : s.autoAction) ?? !1, (c = t.options_) != null && c.bound ? e.proxy_ ?? e.target_ : void 0),
        configurable: !i || e.isPlainObject_,
        enumerable: !1,
        writable: !i
    }
}

function Ve(e, t) {
    return {
        annotationType_: e,
        options_: t,
        make_: He,
        extend_: Ue,
        decorate_20223_: We
    }
}

function He(e, t, n, r) {
    var i;
    return r === e.target_ ? this.extend_(e, t, n, !1) === null ? 0 : 2 : (i = this.options_) != null && i.bound && (!x(e.target_, t) || !tr(e.target_[t])) && this.extend_(e, t, n, !1) === null ? 0 : tr(n.value) ? 1 : (s(r, t, Ke(e, this, t, n, !1, !1)), 2)
}

function Ue(e, t, n, r) {
    var i, a = Ke(e, this, t, n, (i = this.options_) == null ? void 0 : i.bound);
    return e.defineProperty_(t, a, r)
}

function We(e, t) {
    var n, r = t.name,
        i = t.addInitializer;
    return tr(e) || (e = $n(e)), (n = this.options_) != null && n.bound && i(function() {
        var e = this,
            t = e[r].bind(e);
        t.isMobXFlow = !0, e[r] = t
    }), e
}

function Ge(e, t, n, r) {
    t.annotationType_, r.value
}

function Ke(e, t, n, r, i, a) {
    a === void 0 && (a = L.safeDescriptors), Ge(e, t, n, r);
    var o = r.value;
    return tr(o) || (o = $n(o)), i && (o = o.bind(e.proxy_ ?? e.target_), o.isMobXFlow = !0), {
        value: o,
        configurable: !a || e.isPlainObject_,
        enumerable: !1,
        writable: !a
    }
}

function qe(e, t) {
    return {
        annotationType_: e,
        options_: t,
        make_: Je,
        extend_: Ye,
        decorate_20223_: Xe
    }
}

function Je(e, t, n) {
    return this.extend_(e, t, n, !1) === null ? 0 : 1
}

function Ye(e, t, n, r) {
    return Ze(e, this, t, n), e.defineComputedProperty_(t, w({}, this.options_, {
        get: n.get,
        set: n.set
    }), r)
}

function Xe(e, t) {
    var n = this,
        r = t.name,
        i = t.addInitializer;
    return i(function() {
            var t = Lr(this)[D],
                i = w({}, n.options_, {
                    get: e,
                    context: this
                });
            i.name || (i.name = `ObservableObject.` + r.toString()), t.values_.set(r, new N(i))
        }),
        function() {
            return this[D].getObservablePropValue_(r)
        }
}

function Ze(e, t, n, r) {
    t.annotationType_, r.get
}

function Qe(e, t) {
    return {
        annotationType_: e,
        options_: t,
        make_: $e,
        extend_: et,
        decorate_20223_: tt
    }
}

function $e(e, t, n) {
    return this.extend_(e, t, n, !1) === null ? 0 : 1
}

function et(e, t, n, r) {
    var i;
    return nt(e, this, t, n), e.defineObservableProperty_(t, n.value, ((i = this.options_) == null ? void 0 : i.enhancer) ?? k, r)
}

function tt(e, t) {
    var n = this,
        r = t.kind,
        i = t.name,
        a = new WeakSet;

    function o(e, t) {
        var r, o = Lr(e)[D],
            s = new M(t, ((r = n.options_) == null ? void 0 : r.enhancer) ?? k, `ObservableObject.` + i.toString(), !1);
        o.values_.set(i, s), a.add(e)
    }
    if (r == `accessor`) return {
        get: function() {
            return a.has(this) || o(this, e.get.call(this)), this[D].getObservablePropValue_(i)
        },
        set: function(e) {
            return a.has(this) || o(this, e), this[D].setObservablePropValue_(i, e)
        },
        init: function(e) {
            return a.has(this) || o(this, e), e
        }
    }
}

function nt(e, t, n, r) {
    t.annotationType_
}
var rt = `true`,
    it = at();

function at(e) {
    return {
        annotationType_: rt,
        options_: e,
        make_: ot,
        extend_: st,
        decorate_20223_: ct
    }
}

function ot(e, t, n, r) {
    var i, a;
    if (n.get) return Ot.make_(e, t, n, r);
    if (n.set) {
        var o = j(t.toString(), n.set);
        return r === e.target_ ? e.defineProperty_(t, {
            configurable: !L.safeDescriptors || e.isPlainObject_,
            set: o
        }) === null ? 0 : 2 : (s(r, t, {
            configurable: !0,
            set: o
        }), 2)
    }
    if (r !== e.target_ && typeof n.value == `function`) {
        var c;
        if (te(n.value)) {
            var l;
            return ((l = this.options_) != null && l.autoBind ? $n.bound : $n).make_(e, t, n, r)
        }
        return ((c = this.options_) != null && c.autoBind ? kn.bound : kn).make_(e, t, n, r)
    }
    var u = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? A.ref : A;
    return typeof n.value == `function` && (a = this.options_) != null && a.autoBind && (n.value = n.value.bind(e.proxy_ ?? e.target_)), u.make_(e, t, n, r)
}

function st(e, t, n, r) {
    var i, a;
    return n.get ? Ot.extend_(e, t, n, r) : n.set ? e.defineProperty_(t, {
        configurable: !L.safeDescriptors || e.isPlainObject_,
        set: j(t.toString(), n.set)
    }, r) : (typeof n.value == `function` && (i = this.options_) != null && i.autoBind && (n.value = n.value.bind(e.proxy_ ?? e.target_)), (((a = this.options_) == null ? void 0 : a.deep) === !1 ? A.ref : A).extend_(e, t, n, r))
}

function ct(e, t) {
    n(`'` + this.annotationType_ + `' cannot be used as a decorator`)
}
var lt = `observable`,
    ut = `observable.ref`,
    dt = `observable.shallow`,
    ft = `observable.struct`,
    pt = {
        deep: !0,
        name: void 0,
        defaultDecorator: void 0,
        proxy: !0
    };
Object.freeze(pt);

function mt(e) {
    return e || pt
}
var ht = Qe(lt),
    gt = Qe(ut, {
        enhancer: je
    }),
    _t = Qe(dt, {
        enhancer: Ae
    }),
    vt = Qe(ft, {
        enhancer: Me
    }),
    yt = E(ht);

function bt(e) {
    return e.deep === !0 ? k : e.deep === !1 ? je : St(e.defaultDecorator)
}

function xt(e) {
    return e ? e.defaultDecorator ?? at(e) : void 0
}

function St(e) {
    var t;
    return e ? ((t = e.options_) == null ? void 0 : t.enhancer) ?? k : k
}

function Ct(e, t, n) {
    if (Se(t)) return ht.decorate_20223_(e, t);
    if (g(t)) be(e, t, ht);
    else return rr(e) ? e : v(e) ? A.object(e, t, n) : Array.isArray(e) ? A.array(e, t) : ie(e) ? A.map(e, t) : b(e) ? A.set(e, t) : typeof e == `object` && e ? e : A.box(e, t)
}
a(Ct, yt);
var A = a(Ct, {
        box: function(e, t) {
            var n = mt(t);
            return new M(e, bt(n), n.name, !0, n.equals)
        },
        array: function(e, t) {
            var n = mt(t);
            return (L.useProxies === !1 || n.proxy === !1 ? Zr : xr)(e, bt(n), n.name)
        },
        map: function(e, t) {
            var n = mt(t);
            return new Or(e, bt(n), n.name)
        },
        set: function(e, t) {
            var n = mt(t);
            return new Mr(e, bt(n), n.name)
        },
        object: function(e, t, n) {
            return ti(function() {
                return Gn(L.useProxies === !1 || (n == null ? void 0 : n.proxy) === !1 ? Lr({}, n) : pr({}, n), e, t)
            })
        },
        ref: E(gt),
        shallow: E(_t),
        deep: yt,
        struct: E(vt)
    }),
    wt = `computed`,
    Tt = `computed.struct`,
    Et = qe(wt),
    Dt = qe(Tt, {
        equals: ke.structural
    }),
    Ot = function(e, t) {
        if (Se(t)) return Et.decorate_20223_(e, t);
        if (g(t)) return be(e, t, Et);
        if (v(e)) return E(qe(wt, e));
        var n = v(t) ? t : {};
        return n.get = e, n.name || (n.name = e.name || ``), new N(n)
    };
Object.assign(Ot, Et), Ot.struct = E(Dt);
var kt, At = 0,
    jt = 1,
    Mt = ((kt = o(function() {}, `name`)) == null ? void 0 : kt.configurable) ?? !1,
    Nt = {
        value: `action`,
        configurable: !0,
        writable: !1,
        enumerable: !1
    };

function j(e, t, n, r) {
    n === void 0 && (n = !1);

    function i() {
        return Pt(e, n, t, r || this, arguments)
    }
    return i.isMobxAction = !0, i.toString = function() {
        return t.toString()
    }, Mt && (Nt.value = e, s(i, `name`, Nt)), i
}

function Pt(e, t, n, r, i) {
    var a = Ft(e, t, r, i);
    try {
        return n.apply(r, i)
    } catch (e) {
        throw a.error_ = e, e
    } finally {
        It(a)
    }
}

function Ft(e, t, n, r) {
    var i = !1,
        a = 0,
        o = L.trackingDerivation,
        s = !t || !o;
    R();
    var c = L.allowStateChanges;
    s && (F(), c = Rt(!0));
    var l = Xt(!0),
        u = {
            runAsAction_: s,
            prevDerivation_: o,
            prevAllowStateChanges_: c,
            prevAllowStateReads_: l,
            notifySpy_: i,
            startTime_: a,
            actionId_: jt++,
            parentActionId_: At
        };
    return At = u.actionId_, u
}

function It(e) {
    At !== e.actionId_ && n(30), At = e.parentActionId_, e.error_ !== void 0 && (L.suppressReactionErrors = !0), zt(e.prevAllowStateChanges_), Zt(e.prevAllowStateReads_), z(), e.runAsAction_ && I(e.prevDerivation_), L.suppressReactionErrors = !1
}

function Lt(e, t) {
    var n = Rt(e);
    try {
        return t()
    } finally {
        zt(n)
    }
}

function Rt(e) {
    var t = L.allowStateChanges;
    return L.allowStateChanges = e, t
}

function zt(e) {
    L.allowStateChanges = e
}
var M = function(e) {
        function t(t, n, r, i, a) {
            var o;
            return r === void 0 && (r = `ObservableValue`), i === void 0 && (i = !0), a === void 0 && (a = ke.default), o = e.call(this, r) || this, o.enhancer = void 0, o.name_ = void 0, o.equals = void 0, o.hasUnreportedChange_ = !1, o.interceptors_ = void 0, o.changeListeners_ = void 0, o.value_ = void 0, o.dehancer = void 0, o.enhancer = n, o.name_ = r, o.equals = a, o.value_ = n(t, void 0, r), o
        }
        he(t, e);
        var n = t.prototype;
        return n.dehanceValue = function(e) {
            return this.dehancer === void 0 ? e : this.dehancer(e)
        }, n.set = function(e) {
            this.value_, e = this.prepareNewValue_(e), e !== L.UNCHANGED && this.setNewValue_(e)
        }, n.prepareNewValue_ = function(e) {
            if (U(this)) {
                var t = W(this, {
                    object: this,
                    type: q,
                    newValue: e
                });
                if (!t) return L.UNCHANGED;
                e = t.newValue
            }
            return e = this.enhancer(e, this.value_, this.name_), this.equals(this.value_, e) ? L.UNCHANGED : e
        }, n.setNewValue_ = function(e) {
            var t = this.value_;
            this.value_ = e, this.reportChanged(), G(this) && K(this, {
                type: q,
                object: this,
                newValue: e,
                oldValue: t
            })
        }, n.get = function() {
            return this.reportObserved(), this.dehanceValue(this.value_)
        }, n.intercept_ = function(e) {
            return mr(this, e)
        }, n.observe_ = function(e, t) {
            return t && e({
                observableKind: `value`,
                debugObjectName: this.name_,
                object: this,
                type: q,
                newValue: this.value_,
                oldValue: void 0
            }), hr(this, e)
        }, n.raw = function() {
            return this.value_
        }, n.toJSON = function() {
            return this.get()
        }, n.toString = function() {
            return this.name_ + `[` + this.value_ + `]`
        }, n.valueOf = function() {
            return le(this.get())
        }, n[Symbol.toPrimitive] = function() {
            return this.valueOf()
        }, t
    }(O),
    Bt = y(`ObservableValue`, M),
    N = function() {
        function e(e) {
            this.dependenciesState_ = P.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.observers_ = new Set, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = P.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new Ut(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.flags_ = 0, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = Ht.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, e.get || n(31), this.derivation = e.get, this.name_ = e.name || `ComputedValue`, e.set && (this.setter_ = j(`ComputedValue-setter`, e.set)), this.equals_ = e.equals || (e.compareStructural || e.struct ? ke.structural : ke.default), this.scope_ = e.context, this.requiresReaction_ = e.requiresReaction, this.keepAlive_ = !!e.keepAlive
        }
        var t = e.prototype;
        return t.onBecomeStale_ = function() {
            un(this)
        }, t.onBO = function() {
            this.onBOL && this.onBOL.forEach(function(e) {
                return e()
            })
        }, t.onBUO = function() {
            this.onBUOL && this.onBUOL.forEach(function(e) {
                return e()
            })
        }, t.get = function() {
            if (this.isComputing && n(32, this.name_, this.derivation), L.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_) Gt(this) && (this.warnAboutUntrackedRead_(), R(), this.value_ = this.computeValue_(!1), z());
            else if (sn(this), Gt(this)) {
                var e = L.trackingContext;
                this.keepAlive_ && !e && (L.trackingContext = this), this.trackAndCompute() && ln(this), L.trackingContext = e
            }
            var t = this.value_;
            if (Wt(t)) throw t.cause;
            return t
        }, t.set = function(e) {
            if (this.setter_) {
                this.isRunningSetter && n(33, this.name_), this.isRunningSetter = !0;
                try {
                    this.setter_.call(this.scope_, e)
                } finally {
                    this.isRunningSetter = !1
                }
            } else n(34, this.name_)
        }, t.trackAndCompute = function() {
            var e = this.value_,
                t = this.dependenciesState_ === P.NOT_TRACKING_,
                n = this.computeValue_(!0),
                r = t || Wt(e) || Wt(n) || !this.equals_(e, n);
            return r && (this.value_ = n), r
        }, t.computeValue_ = function(e) {
            this.isComputing = !0;
            var t = Rt(!1),
                n;
            if (e) n = Kt(this, this.derivation, this.scope_);
            else if (L.disableErrorBoundaries === !0) n = this.derivation.call(this.scope_);
            else try {
                n = this.derivation.call(this.scope_)
            } catch (e) {
                n = new Ut(e)
            }
            return zt(t), this.isComputing = !1, n
        }, t.suspend_ = function() {
            this.keepAlive_ || (Jt(this), this.value_ = void 0)
        }, t.observe_ = function(e, t) {
            var n = this,
                r = !0,
                i = void 0;
            return jn(function() {
                var a = n.get();
                if (!r || t) {
                    var o = F();
                    e({
                        observableKind: `computed`,
                        debugObjectName: n.name_,
                        type: q,
                        object: n,
                        newValue: a,
                        oldValue: i
                    }), I(o)
                }
                r = !1, i = a
            })
        }, t.warnAboutUntrackedRead_ = function() {}, t.toString = function() {
            return this.name_ + `[` + this.derivation.toString() + `]`
        }, t.valueOf = function() {
            return le(this.get())
        }, t[Symbol.toPrimitive] = function() {
            return this.valueOf()
        }, pe(e, [{
            key: `isComputing`,
            get: function() {
                return S(this.flags_, e.isComputingMask_)
            },
            set: function(t) {
                this.flags_ = C(this.flags_, e.isComputingMask_, t)
            }
        }, {
            key: `isRunningSetter`,
            get: function() {
                return S(this.flags_, e.isRunningSetterMask_)
            },
            set: function(t) {
                this.flags_ = C(this.flags_, e.isRunningSetterMask_, t)
            }
        }, {
            key: `isBeingObserved`,
            get: function() {
                return S(this.flags_, e.isBeingObservedMask_)
            },
            set: function(t) {
                this.flags_ = C(this.flags_, e.isBeingObservedMask_, t)
            }
        }, {
            key: `isPendingUnobservation`,
            get: function() {
                return S(this.flags_, e.isPendingUnobservationMask_)
            },
            set: function(t) {
                this.flags_ = C(this.flags_, e.isPendingUnobservationMask_, t)
            }
        }, {
            key: `diffValue`,
            get: function() {
                return +!!S(this.flags_, e.diffValueMask_)
            },
            set: function(t) {
                this.flags_ = C(this.flags_, e.diffValueMask_, t === 1)
            }
        }])
    }();
N.isComputingMask_ = 1, N.isRunningSetterMask_ = 2, N.isBeingObservedMask_ = 4, N.isPendingUnobservationMask_ = 8, N.diffValueMask_ = 16;
var Vt = y(`ComputedValue`, N),
    P;
(function(e) {
    e[e.NOT_TRACKING_ = -1] = `NOT_TRACKING_`, e[e.UP_TO_DATE_ = 0] = `UP_TO_DATE_`, e[e.POSSIBLY_STALE_ = 1] = `POSSIBLY_STALE_`, e[e.STALE_ = 2] = `STALE_`
})(P || (P = {}));
var Ht;
(function(e) {
    e[e.NONE = 0] = `NONE`, e[e.LOG = 1] = `LOG`, e[e.BREAK = 2] = `BREAK`
})(Ht || (Ht = {}));
var Ut = function(e) {
    this.cause = void 0, this.cause = e
};

function Wt(e) {
    return e instanceof Ut
}

function Gt(e) {
    switch (e.dependenciesState_) {
        case P.UP_TO_DATE_:
            return !1;
        case P.NOT_TRACKING_:
        case P.STALE_:
            return !0;
        case P.POSSIBLY_STALE_:
            for (var t = Xt(!0), n = F(), r = e.observing_, i = r.length, a = 0; a < i; a++) {
                var o = r[a];
                if (Vt(o)) {
                    if (L.disableErrorBoundaries) o.get();
                    else try {
                        o.get()
                    } catch {
                        return I(n), Zt(t), !0
                    }
                    if (e.dependenciesState_ === P.STALE_) return I(n), Zt(t), !0
                }
            }
            return Qt(e), I(n), Zt(t), !1
    }
}

function Kt(e, t, n) {
    var r = Xt(!0);
    Qt(e), e.newObserving_ = Array(e.runId_ === 0 ? 100 : e.observing_.length), e.unboundDepsCount_ = 0, e.runId_ = ++L.runId;
    var i = L.trackingDerivation;
    L.trackingDerivation = e, L.inBatch++;
    var a;
    if (L.disableErrorBoundaries === !0) a = t.call(n);
    else try {
        a = t.call(n)
    } catch (e) {
        a = new Ut(e)
    }
    return L.inBatch--, L.trackingDerivation = i, qt(e), Zt(r), a
}

function qt(e) {
    for (var t = e.observing_, n = e.observing_ = e.newObserving_, r = P.UP_TO_DATE_, i = 0, a = e.unboundDepsCount_, o = 0; o < a; o++) {
        var s = n[o];
        s.diffValue === 0 && (s.diffValue = 1, i !== o && (n[i] = s), i++), s.dependenciesState_ > r && (r = s.dependenciesState_)
    }
    for (n.length = i, e.newObserving_ = null, a = t.length; a--;) {
        var c = t[a];
        c.diffValue === 0 && an(c, e), c.diffValue = 0
    }
    for (; i--;) {
        var l = n[i];
        l.diffValue === 1 && (l.diffValue = 0, rn(l, e))
    }
    r !== P.UP_TO_DATE_ && (e.dependenciesState_ = r, e.onBecomeStale_())
}

function Jt(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--;) an(t[n], e);
    e.dependenciesState_ = P.NOT_TRACKING_
}

function Yt(e) {
    var t = F();
    try {
        return e()
    } finally {
        I(t)
    }
}

function F() {
    var e = L.trackingDerivation;
    return L.trackingDerivation = null, e
}

function I(e) {
    L.trackingDerivation = e
}

function Xt(e) {
    var t = L.allowStateReads;
    return L.allowStateReads = e, t
}

function Zt(e) {
    L.allowStateReads = e
}

function Qt(e) {
    if (e.dependenciesState_ !== P.UP_TO_DATE_) {
        e.dependenciesState_ = P.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--;) t[n].lowestObserverState_ = P.UP_TO_DATE_
    }
}
var $t = function() {
        this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0
    },
    en = !0,
    tn = !1,
    L = function() {
        var e = i();
        return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (en = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new $t().version && (en = !1), en ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = new $t) : (setTimeout(function() {
            tn || n(35)
        }, 1), new $t)
    }();

function nn() {
    if ((L.pendingReactions.length || L.inBatch || L.isRunningReactions) && n(36), tn = !0, en) {
        var e = i();
        --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), L = new $t
    }
}

function rn(e, t) {
    e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_)
}

function an(e, t) {
    e.observers_.delete(t), e.observers_.size === 0 && on(e)
}

function on(e) {
    e.isPendingUnobservation === !1 && (e.isPendingUnobservation = !0, L.pendingUnobservations.push(e))
}

function R() {
    L.inBatch++
}

function z() {
    if (--L.inBatch === 0) {
        pn();
        for (var e = L.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            n.isPendingUnobservation = !1, n.observers_.size === 0 && (n.isBeingObserved && (n.isBeingObserved = !1, n.onBUO()), n instanceof N && n.suspend_())
        }
        L.pendingUnobservations = []
    }
}

function sn(e) {
    var t = L.trackingDerivation;
    return t === null ? (e.observers_.size === 0 && L.inBatch > 0 && on(e), !1) : (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved && L.trackingContext && (e.isBeingObserved = !0, e.onBO())), e.isBeingObserved)
}

function cn(e) {
    e.lowestObserverState_ !== P.STALE_ && (e.lowestObserverState_ = P.STALE_, e.observers_.forEach(function(e) {
        e.dependenciesState_ === P.UP_TO_DATE_ && e.onBecomeStale_(), e.dependenciesState_ = P.STALE_
    }))
}

function ln(e) {
    e.lowestObserverState_ !== P.STALE_ && (e.lowestObserverState_ = P.STALE_, e.observers_.forEach(function(t) {
        t.dependenciesState_ === P.POSSIBLY_STALE_ ? t.dependenciesState_ = P.STALE_ : t.dependenciesState_ === P.UP_TO_DATE_ && (e.lowestObserverState_ = P.UP_TO_DATE_)
    }))
}

function un(e) {
    e.lowestObserverState_ === P.UP_TO_DATE_ && (e.lowestObserverState_ = P.POSSIBLY_STALE_, e.observers_.forEach(function(e) {
        e.dependenciesState_ === P.UP_TO_DATE_ && (e.dependenciesState_ = P.POSSIBLY_STALE_, e.onBecomeStale_())
    }))
}
var B = function() {
    function e(e, t, n, r) {
        e === void 0 && (e = `Reaction`), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = P.NOT_TRACKING_, this.runId_ = 0, this.unboundDepsCount_ = 0, this.flags_ = 0, this.isTracing_ = Ht.NONE, this.name_ = e, this.onInvalidate_ = t, this.errorHandler_ = n, this.requiresObservable_ = r
    }
    var t = e.prototype;
    return t.onBecomeStale_ = function() {
        this.schedule_()
    }, t.schedule_ = function() {
        this.isScheduled || (this.isScheduled = !0, L.pendingReactions.push(this), pn())
    }, t.runReaction_ = function() {
        if (!this.isDisposed) {
            R(), this.isScheduled = !1;
            var e = L.trackingContext;
            if (L.trackingContext = this, Gt(this)) {
                this.isTrackPending = !0;
                try {
                    this.onInvalidate_()
                } catch (e) {
                    this.reportExceptionInDerivation_(e)
                }
            }
            L.trackingContext = e, z()
        }
    }, t.track = function(e) {
        if (!this.isDisposed) {
            R(), this.isRunning = !0;
            var t = L.trackingContext;
            L.trackingContext = this;
            var n = Kt(this, e, void 0);
            L.trackingContext = t, this.isRunning = !1, this.isTrackPending = !1, this.isDisposed && Jt(this), Wt(n) && this.reportExceptionInDerivation_(n.cause), z()
        }
    }, t.reportExceptionInDerivation_ = function(e) {
        var t = this;
        if (this.errorHandler_) this.errorHandler_(e, this);
        else {
            if (L.disableErrorBoundaries) throw e;
            var n = `[mobx] uncaught error in '` + this + `'`;
            L.suppressReactionErrors || console.error(n, e), L.globalReactionErrorHandlers.forEach(function(n) {
                return n(e, t)
            })
        }
    }, t.dispose = function() {
        this.isDisposed || (this.isDisposed = !0, this.isRunning || (R(), Jt(this), z()))
    }, t.getDisposer_ = function(e) {
        var t = this,
            n = function n() {
                t.dispose(), e == null || e.removeEventListener == null || e.removeEventListener(`abort`, n)
            };
        return e == null || e.addEventListener == null || e.addEventListener(`abort`, n), n[D] = this, n
    }, t.toString = function() {
        return `Reaction[` + this.name_ + `]`
    }, t.trace = function(e) {
        e === void 0 && (e = !1)
    }, pe(e, [{
        key: `isDisposed`,
        get: function() {
            return S(this.flags_, e.isDisposedMask_)
        },
        set: function(t) {
            this.flags_ = C(this.flags_, e.isDisposedMask_, t)
        }
    }, {
        key: `isScheduled`,
        get: function() {
            return S(this.flags_, e.isScheduledMask_)
        },
        set: function(t) {
            this.flags_ = C(this.flags_, e.isScheduledMask_, t)
        }
    }, {
        key: `isTrackPending`,
        get: function() {
            return S(this.flags_, e.isTrackPendingMask_)
        },
        set: function(t) {
            this.flags_ = C(this.flags_, e.isTrackPendingMask_, t)
        }
    }, {
        key: `isRunning`,
        get: function() {
            return S(this.flags_, e.isRunningMask_)
        },
        set: function(t) {
            this.flags_ = C(this.flags_, e.isRunningMask_, t)
        }
    }, {
        key: `diffValue`,
        get: function() {
            return +!!S(this.flags_, e.diffValueMask_)
        },
        set: function(t) {
            this.flags_ = C(this.flags_, e.diffValueMask_, t === 1)
        }
    }])
}();
B.isDisposedMask_ = 1, B.isScheduledMask_ = 2, B.isTrackPendingMask_ = 4, B.isRunningMask_ = 8, B.diffValueMask_ = 16;
var dn = 100,
    fn = function(e) {
        return e()
    };

function pn() {
    L.inBatch > 0 || L.isRunningReactions || fn(mn)
}

function mn() {
    L.isRunningReactions = !0;
    for (var e = L.pendingReactions, t = 0; e.length > 0;) {
        ++t === dn && (console.error(`[mobx] cycle in reaction: ` + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_()
    }
    L.isRunningReactions = !1
}
var hn = y(`Reaction`, B);

function gn(e) {
    var t = fn;
    fn = function(n) {
        return e(function() {
            return t(n)
        })
    }
}

function _n() {
    return !1
}

function vn(e) {
    return console.warn(`[mobx.spy] Is a no-op in production builds`),
        function() {}
}
var yn = `action`,
    bn = `action.bound`,
    xn = `autoAction`,
    Sn = `autoAction.bound`,
    Cn = `<unnamed action>`,
    wn = Fe(yn),
    Tn = Fe(bn, {
        bound: !0
    }),
    En = Fe(xn, {
        autoAction: !0
    }),
    Dn = Fe(Sn, {
        autoAction: !0,
        bound: !0
    });

function On(e) {
    return function(t, n) {
        if (h(t)) return j(t.name || Cn, t, e);
        if (h(n)) return j(t, n, e);
        if (Se(n)) return (e ? En : wn).decorate_20223_(t, n);
        if (g(n)) return be(t, n, e ? En : wn);
        if (g(t)) return E(Fe(e ? xn : yn, {
            name: t,
            autoAction: e
        }))
    }
}
var V = On(!1);
Object.assign(V, wn);
var kn = On(!0);
Object.assign(kn, En), V.bound = E(Tn), kn.bound = E(Dn);

function An(e) {
    return h(e) && e.isMobxAction === !0
}

function jn(e, t) {
    var n, r, i;
    t === void 0 && (t = u);
    var a = ((n = t) == null ? void 0 : n.name) ?? `Autorun`,
        o = !t.scheduler && !t.delay,
        s;
    if (o) s = new B(a, function() {
        this.track(d)
    }, t.onError, t.requiresObservable);
    else {
        var c = Nn(t),
            l = !1;
        s = new B(a, function() {
            l || (l = !0, c(function() {
                l = !1, s.isDisposed || s.track(d)
            }))
        }, t.onError, t.requiresObservable)
    }

    function d() {
        e(s)
    }
    return (r = t) != null && (r = r.signal) != null && r.aborted || s.schedule_(), s.getDisposer_((i = t) == null ? void 0 : i.signal)
}
var Mn = function(e) {
    return e()
};

function Nn(e) {
    return e.scheduler ? e.scheduler : e.delay ? function(t) {
        return setTimeout(t, e.delay)
    } : Mn
}

function Pn(e, t, n) {
    var r, i;
    n === void 0 && (n = u);
    var a = n.name ?? `Reaction`,
        o = V(a, n.onError ? Fn(n.onError, t) : t),
        s = !n.scheduler && !n.delay,
        c = Nn(n),
        l = !0,
        d = !1,
        f, ee = n.compareStructural ? ke.structural : n.equals || ke.default,
        p = new B(a, function() {
            l || s ? m() : d || (d = !0, c(m))
        }, n.onError, n.requiresObservable);

    function m() {
        if (d = !1, !p.isDisposed) {
            var t = !1,
                r = f;
            p.track(function() {
                var n = Lt(!1, function() {
                    return e(p)
                });
                t = l || !ee(f, n), f = n
            }), (l && n.fireImmediately || !l && t) && o(f, r, p), l = !1
        }
    }
    return (r = n) != null && (r = r.signal) != null && r.aborted || p.schedule_(), p.getDisposer_((i = n) == null ? void 0 : i.signal)
}

function Fn(e, t) {
    return function() {
        try {
            return t.apply(this, arguments)
        } catch (t) {
            e.call(this, t)
        }
    }
}
var In = `onBO`,
    Ln = `onBUO`;

function Rn(e, t, n) {
    return Bn(In, e, t, n)
}

function zn(e, t, n) {
    return Bn(Ln, e, t, n)
}

function Bn(e, t, n, r) {
    var i = typeof r == `function` ? Qr(t, n) : Qr(t),
        a = h(r) ? r : n,
        o = e + `L`;
    return i[o] ? i[o].add(a) : i[o] = new Set([a]),
        function() {
            var e = i[o];
            e && (e.delete(a), e.size === 0 && delete i[o])
        }
}
var Vn = `never`,
    Hn = `always`,
    Un = `observed`;

function Wn(e) {
    e.isolateGlobalState === !0 && nn();
    var t = e.useProxies,
        n = e.enforceActions;
    if (t !== void 0 && (L.useProxies = t === Hn || t !== Vn && typeof Proxy < `u`), t === `ifavailable` && (L.verifyProxies = !0), n !== void 0) {
        var r = n === Hn ? Hn : n === Un;
        L.enforceActions = r, L.allowStateChanges = r !== !0 && r !== Hn
    } [`computedRequiresReaction`, `reactionRequiresObservable`, `observableRequiresReaction`, `disableErrorBoundaries`, `safeDescriptors`].forEach(function(t) {
        t in e && (L[t] = !!e[t])
    }), L.allowStateReads = !L.observableRequiresReaction, e.reactionScheduler && gn(e.reactionScheduler)
}

function Gn(e, t, n, r) {
    var i = ue(t);
    return ti(function() {
        var t = Lr(e, r)[D];
        ce(i).forEach(function(e) {
            t.extend_(e, i[e], n && e in n ? n[e] : !0)
        })
    }), e
}

function Kn(e, t) {
    return qn(Qr(e, t))
}

function qn(e) {
    var t = {
        name: e.name_
    };
    return e.observing_ && e.observing_.length > 0 && (t.dependencies = Jn(e.observing_).map(qn)), t
}

function Jn(e) {
    return Array.from(new Set(e))
}
var Yn = 0;

function Xn() {
    this.message = `FLOW_CANCELLED`
}
Xn.prototype = Object.create(Error.prototype);
var Zn = Ve(`flow`),
    Qn = Ve(`flow.bound`, {
        bound: !0
    }),
    $n = Object.assign(function(e, t) {
        if (Se(t)) return Zn.decorate_20223_(e, t);
        if (g(t)) return be(e, t, Zn);
        var n = e,
            r = n.name || `<unnamed flow>`,
            i = function() {
                var e = this,
                    t = arguments,
                    i = ++Yn,
                    a = V(r + ` - runid: ` + i + ` - init`, n).apply(e, t),
                    o, s = void 0,
                    c = new Promise(function(e, t) {
                        var n = 0;
                        o = t;

                        function c(e) {
                            s = void 0;
                            var o;
                            try {
                                o = V(r + ` - runid: ` + i + ` - yield ` + n++, a.next).call(a, e)
                            } catch (e) {
                                return t(e)
                            }
                            u(o)
                        }

                        function l(e) {
                            s = void 0;
                            var o;
                            try {
                                o = V(r + ` - runid: ` + i + ` - yield ` + n++, a.throw).call(a, e)
                            } catch (e) {
                                return t(e)
                            }
                            u(o)
                        }

                        function u(n) {
                            if (h(n == null ? void 0 : n.then)) n.then(u, t);
                            else return n.done ? e(n.value) : (s = Promise.resolve(n.value), s.then(c, l))
                        }
                        c(void 0)
                    });
                return c.cancel = V(r + ` - runid: ` + i + ` - cancel`, function() {
                    try {
                        s && er(s);
                        var e = a.return(void 0),
                            t = Promise.resolve(e.value);
                        t.then(m, m), er(t), o(new Xn)
                    } catch (e) {
                        o(e)
                    }
                }), c
            };
        return i.isMobXFlow = !0, i
    }, Zn);
$n.bound = E(Qn);

function er(e) {
    h(e.cancel) && e.cancel()
}

function tr(e) {
    return (e == null ? void 0 : e.isMobXFlow) === !0
}

function nr(e, t) {
    return e ? t === void 0 ? Br(e) || !!e[D] || Ce(e) || hn(e) || Vt(e) : Br(e) ? e[D].values_.has(t) : !1 : !1
}

function rr(e) {
    return nr(e)
}

function ir(e) {
    if (Br(e)) return e[D].ownKeys_();
    n(38)
}

function ar(e, t, n) {
    return e.set(t, n), n
}

function or(e, t) {
    if (typeof e != `object` || !e || e instanceof Date || !rr(e)) return e;
    if (Bt(e) || Vt(e)) return or(e.get(), t);
    if (t.has(e)) return t.get(e);
    if (Tr(e)) {
        var n = ar(t, e, Array(e.length));
        return e.forEach(function(e, r) {
            n[r] = or(e, t)
        }), n
    }
    if ($(e)) {
        var r = ar(t, e, new Set);
        return e.forEach(function(e) {
            r.add(or(e, t))
        }), r
    }
    if (Q(e)) {
        var i = ar(t, e, new Map);
        return e.forEach(function(e, n) {
            i.set(n, or(e, t))
        }), i
    }
    var a = ar(t, e, {});
    return ir(e).forEach(function(n) {
        c.propertyIsEnumerable.call(e, n) && (a[n] = or(e[n], t))
    }), a
}

function sr(e, t) {
    return or(e, new Map)
}

function H(e, t) {
    t === void 0 && (t = void 0), R();
    try {
        return e.apply(t)
    } finally {
        z()
    }
}

function cr(e, t, n) {
    return arguments.length === 1 || t && typeof t == `object` ? ur(e, t) : lr(e, t, n || {})
}

function lr(e, t, n) {
    var r;
    if (typeof n.timeout == `number`) {
        var i = Error(`WHEN_TIMEOUT`);
        r = setTimeout(function() {
            if (!o[D].isDisposed) {
                if (o(), n.onError) n.onError(i);
                else throw i
            }
        }, n.timeout)
    }
    n.name = `When`;
    var a = j(`When-effect`, t),
        o = jn(function(t) {
            Lt(!1, e) && (t.dispose(), r && clearTimeout(r), a())
        }, n);
    return o
}

function ur(e, t) {
    var n;
    if (t != null && (n = t.signal) != null && n.aborted) return Object.assign(Promise.reject(Error(`WHEN_ABORTED`)), {
        cancel: function() {
            return null
        }
    });
    var r, i, a = new Promise(function(n, a) {
        var o, s = lr(e, n, w({}, t, {
            onError: a
        }));
        r = function() {
            s(), a(Error(`WHEN_CANCELLED`))
        }, i = function() {
            s(), a(Error(`WHEN_ABORTED`))
        }, t == null || (o = t.signal) == null || o.addEventListener == null || o.addEventListener(`abort`, i)
    }).finally(function() {
        var e;
        return t == null || (e = t.signal) == null || e.removeEventListener == null ? void 0 : e.removeEventListener(`abort`, i)
    });
    return a.cancel = r, a
}

function dr(e) {
    return e[D]
}
var fr = {
    has: function(e, t) {
        return dr(e).has_(t)
    },
    get: function(e, t) {
        return dr(e).get_(t)
    },
    set: function(e, t, n) {
        return g(t) ? dr(e).set_(t, n, !0) ?? !0 : !1
    },
    deleteProperty: function(e, t) {
        return g(t) ? dr(e).delete_(t, !0) ?? !0 : !1
    },
    defineProperty: function(e, t, n) {
        return dr(e).defineProperty_(t, n) ?? !0
    },
    ownKeys: function(e) {
        return dr(e).ownKeys_()
    },
    preventExtensions: function(e) {
        n(13)
    }
};

function pr(e, t) {
    var n;
    return ee(), e = Lr(e, t), (n = e[D]).proxy_ ?? (n.proxy_ = new Proxy(e, fr))
}

function U(e) {
    return e.interceptors_ !== void 0 && e.interceptors_.length > 0
}

function mr(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return n.push(t), p(function() {
        var e = n.indexOf(t);
        e !== -1 && n.splice(e, 1)
    })
}

function W(e, t) {
    var r = F();
    try {
        for (var i = [].concat(e.interceptors_ || []), a = 0, o = i.length; a < o && (t = i[a](t), t && !t.type && n(14), t); a++);
        return t
    } finally {
        I(r)
    }
}

function G(e) {
    return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0
}

function hr(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return n.push(t), p(function() {
        var e = n.indexOf(t);
        e !== -1 && n.splice(e, 1)
    })
}

function K(e, t) {
    var n = F(),
        r = e.changeListeners_;
    if (r) {
        r = r.slice();
        for (var i = 0, a = r.length; i < a; i++) r[i](t);
        I(n)
    }
}

function gr(e, t, n) {
    return ti(function() {
        var r = Lr(e, n)[D];
        t ?? (t = xe(e)), ce(t).forEach(function(e) {
            return r.make_(e, t[e])
        })
    }), e
}
var _r = `splice`,
    q = `update`,
    vr = 1e4,
    yr = {
        get: function(e, t) {
            var n = e[D];
            return t === D ? n : t === `length` ? n.getArrayLength_() : typeof t == `string` && !isNaN(t) ? n.get_(parseInt(t)) : x(Sr, t) ? Sr[t] : e[t]
        },
        set: function(e, t, n) {
            var r = e[D];
            return t === `length` && r.setArrayLength_(n), typeof t == `symbol` || isNaN(t) ? e[t] = n : r.set_(parseInt(t), n), !0
        },
        preventExtensions: function() {
            n(15)
        }
    },
    br = function() {
        function e(e, t, n, r) {
            e === void 0 && (e = `ObservableArray`), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = n, this.legacyMode_ = r, this.atom_ = new O(e), this.enhancer_ = function(e, n) {
                return t(e, n, `ObservableArray[..]`)
            }
        }
        var t = e.prototype;
        return t.dehanceValue_ = function(e) {
            return this.dehancer === void 0 ? e : this.dehancer(e)
        }, t.dehanceValues_ = function(e) {
            return this.dehancer !== void 0 && e.length > 0 ? e.map(this.dehancer) : e
        }, t.intercept_ = function(e) {
            return mr(this, e)
        }, t.observe_ = function(e, t) {
            return t === void 0 && (t = !1), t && e({
                observableKind: `array`,
                object: this.proxy_,
                debugObjectName: this.atom_.name_,
                type: `splice`,
                index: 0,
                added: this.values_.slice(),
                addedCount: this.values_.length,
                removed: [],
                removedCount: 0
            }), hr(this, e)
        }, t.getArrayLength_ = function() {
            return this.atom_.reportObserved(), this.values_.length
        }, t.setArrayLength_ = function(e) {
            (typeof e != `number` || isNaN(e) || e < 0) && n(`Out of range: ` + e);
            var t = this.values_.length;
            if (e !== t) {
                if (e > t) {
                    for (var r = Array(e - t), i = 0; i < e - t; i++) r[i] = void 0;
                    this.spliceWithArray_(t, 0, r)
                } else this.spliceWithArray_(e, t - e)
            }
        }, t.updateArrayLength_ = function(e, t) {
            e !== this.lastKnownLength_ && n(16), this.lastKnownLength_ += t, this.legacyMode_ && t > 0 && Xr(e + t + 1)
        }, t.spliceWithArray_ = function(e, t, n) {
            var r = this;
            this.atom_;
            var i = this.values_.length;
            if (e === void 0 ? e = 0 : e > i ? e = i : e < 0 && (e = Math.max(0, i + e)), t = arguments.length === 1 ? i - e : t == null ? 0 : Math.max(0, Math.min(t, i - e)), n === void 0 && (n = l), U(this)) {
                var a = W(this, {
                    object: this.proxy_,
                    type: _r,
                    index: e,
                    removedCount: t,
                    added: n
                });
                if (!a) return l;
                t = a.removedCount, n = a.added
            }
            if (n = n.length === 0 ? n : n.map(function(e) {
                    return r.enhancer_(e, void 0)
                }), this.legacyMode_) {
                var o = n.length - t;
                this.updateArrayLength_(i, o)
            }
            var s = this.spliceItemsIntoValues_(e, t, n);
            return (t !== 0 || n.length !== 0) && this.notifyArraySplice_(e, n, s), this.dehanceValues_(s)
        }, t.spliceItemsIntoValues_ = function(e, t, n) {
            if (n.length < vr) {
                var r;
                return (r = this.values_).splice.apply(r, [e, t].concat(n))
            }
            var i = this.values_.slice(e, e + t),
                a = this.values_.slice(e + t);
            this.values_.length += n.length - t;
            for (var o = 0; o < n.length; o++) this.values_[e + o] = n[o];
            for (var s = 0; s < a.length; s++) this.values_[e + n.length + s] = a[s];
            return i
        }, t.notifyArrayChildUpdate_ = function(e, t, n) {
            var r = !this.owned_ && _n(),
                i = G(this),
                a = i || r ? {
                    observableKind: `array`,
                    object: this.proxy_,
                    type: q,
                    debugObjectName: this.atom_.name_,
                    index: e,
                    newValue: t,
                    oldValue: n
                } : null;
            this.atom_.reportChanged(), i && K(this, a)
        }, t.notifyArraySplice_ = function(e, t, n) {
            var r = !this.owned_ && _n(),
                i = G(this),
                a = i || r ? {
                    observableKind: `array`,
                    object: this.proxy_,
                    debugObjectName: this.atom_.name_,
                    type: _r,
                    index: e,
                    removed: n,
                    added: t,
                    removedCount: n.length,
                    addedCount: t.length
                } : null;
            this.atom_.reportChanged(), i && K(this, a)
        }, t.get_ = function(e) {
            if (this.legacyMode_ && e >= this.values_.length) console.warn(`[mobx] Out of bounds read: ` + e);
            else return this.atom_.reportObserved(), this.dehanceValue_(this.values_[e])
        }, t.set_ = function(e, t) {
            var r = this.values_;
            if (this.legacyMode_ && e > r.length && n(17, e, r.length), e < r.length) {
                this.atom_;
                var i = r[e];
                if (U(this)) {
                    var a = W(this, {
                        type: q,
                        object: this.proxy_,
                        index: e,
                        newValue: t
                    });
                    if (!a) return;
                    t = a.newValue
                }
                t = this.enhancer_(t, i), t !== i && (r[e] = t, this.notifyArrayChildUpdate_(e, t, i))
            } else {
                for (var o = Array(e + 1 - r.length), s = 0; s < o.length - 1; s++) o[s] = void 0;
                o[o.length - 1] = t, this.spliceWithArray_(r.length, 0, o)
            }
        }, e
    }();

function xr(e, t, n, r) {
    return n === void 0 && (n = `ObservableArray`), r === void 0 && (r = !1), ee(), ti(function() {
        var i = new br(n, t, r, !1);
        re(i.values_, D, i);
        var a = new Proxy(i.values_, yr);
        return i.proxy_ = a, e && e.length && i.spliceWithArray_(0, 0, e), a
    })
}
var Sr = {
    clear: function() {
        return this.splice(0)
    },
    replace: function(e) {
        var t = this[D];
        return t.spliceWithArray_(0, t.values_.length, e)
    },
    toJSON: function() {
        return this.slice()
    },
    splice: function(e, t) {
        var n = [...arguments].slice(2),
            r = this[D];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return r.spliceWithArray_(e);
            case 2:
                return r.spliceWithArray_(e, t)
        }
        return r.spliceWithArray_(e, t, n)
    },
    spliceWithArray: function(e, t, n) {
        return this[D].spliceWithArray_(e, t, n)
    },
    push: function() {
        var e = this[D],
            t = [...arguments];
        return e.spliceWithArray_(e.values_.length, 0, t), e.values_.length
    },
    pop: function() {
        return this.splice(Math.max(this[D].values_.length - 1, 0), 1)[0]
    },
    shift: function() {
        return this.splice(0, 1)[0]
    },
    unshift: function() {
        var e = this[D],
            t = [...arguments];
        return e.spliceWithArray_(0, 0, t), e.values_.length
    },
    reverse: function() {
        return L.trackingDerivation && n(37, `reverse`), this.replace(this.slice().reverse()), this
    },
    sort: function() {
        L.trackingDerivation && n(37, `sort`);
        var e = this.slice();
        return e.sort.apply(e, arguments), this.replace(e), this
    },
    remove: function(e) {
        var t = this[D],
            n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0)
    }
};
J(`at`, Y), J(`concat`, Y), J(`flat`, Y), J(`includes`, Y), J(`indexOf`, Y), J(`join`, Y), J(`lastIndexOf`, Y), J(`slice`, Y), J(`toString`, Y), J(`toLocaleString`, Y), J(`toSorted`, Y), J(`toSpliced`, Y), J(`with`, Y), J(`every`, X), J(`filter`, X), J(`find`, X), J(`findIndex`, X), J(`findLast`, X), J(`findLastIndex`, X), J(`flatMap`, X), J(`forEach`, X), J(`map`, X), J(`some`, X), J(`toReversed`, X), J(`reduce`, Cr), J(`reduceRight`, Cr);

function J(e, t) {
    typeof Array.prototype[e] == `function` && (Sr[e] = t(e))
}

function Y(e) {
    return function() {
        var t = this[D];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments)
    }
}

function X(e) {
    return function(t, n) {
        var r = this,
            i = this[D];
        return i.atom_.reportObserved(), i.dehanceValues_(i.values_)[e](function(e, i) {
            return t.call(n, e, i, r)
        })
    }
}

function Cr(e) {
    return function() {
        var t = this,
            n = this[D];
        n.atom_.reportObserved();
        var r = n.dehanceValues_(n.values_),
            i = arguments[0];
        return arguments[0] = function(e, n, r) {
            return i(e, n, r, t)
        }, r[e].apply(r, arguments)
    }
}
var wr = y(`ObservableArrayAdministration`, br);

function Tr(e) {
    return _(e) && wr(e[D])
}
var Er = {},
    Z = `add`,
    Dr = `delete`,
    Or = function() {
        function e(e, t, r) {
            var i = this;
            t === void 0 && (t = k), r === void 0 && (r = `ObservableMap`), this.enhancer_ = void 0, this.name_ = void 0, this[D] = Er, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = t, this.name_ = r, h(Map) || n(18), ti(function() {
                i.keysAtom_ = we(`ObservableMap.keys()`), i.data_ = new Map, i.hasMap_ = new Map, e && i.merge(e)
            })
        }
        var t = e.prototype;
        return t.has_ = function(e) {
            return this.data_.has(e)
        }, t.has = function(e) {
            var t = this;
            if (!L.trackingDerivation) return this.has_(e);
            var n = this.hasMap_.get(e);
            if (!n) {
                var r = n = new M(this.has_(e), je, `ObservableMap.key?`, !1);
                this.hasMap_.set(e, r), zn(r, function() {
                    return t.hasMap_.delete(e)
                })
            }
            return n.get()
        }, t.set = function(e, t) {
            var n = this.has_(e);
            if (U(this)) {
                var r = W(this, {
                    type: n ? q : Z,
                    object: this,
                    newValue: t,
                    name: e
                });
                if (!r) return this;
                t = r.newValue
            }
            return n ? this.updateValue_(e, t) : this.addValue_(e, t), this
        }, t.delete = function(e) {
            var t = this;
            if (this.keysAtom_, U(this) && !W(this, {
                    type: Dr,
                    object: this,
                    name: e
                })) return !1;
            if (this.has_(e)) {
                var n = _n(),
                    r = G(this),
                    i = r || n ? {
                        observableKind: `map`,
                        debugObjectName: this.name_,
                        type: Dr,
                        object: this,
                        oldValue: this.data_.get(e).value_,
                        name: e
                    } : null;
                return H(function() {
                    var n;
                    t.keysAtom_.reportChanged(), (n = t.hasMap_.get(e)) == null || n.setNewValue_(!1), t.data_.get(e).setNewValue_(void 0), t.data_.delete(e)
                }), r && K(this, i), !0
            }
            return !1
        }, t.updateValue_ = function(e, t) {
            var n = this.data_.get(e);
            if (t = n.prepareNewValue_(t), t !== L.UNCHANGED) {
                var r = _n(),
                    i = G(this),
                    a = i || r ? {
                        observableKind: `map`,
                        debugObjectName: this.name_,
                        type: q,
                        object: this,
                        oldValue: n.value_,
                        name: e,
                        newValue: t
                    } : null;
                n.setNewValue_(t), i && K(this, a)
            }
        }, t.addValue_ = function(e, t) {
            var n = this;
            this.keysAtom_, H(function() {
                var r, i = new M(t, n.enhancer_, `ObservableMap.key`, !1);
                n.data_.set(e, i), t = i.value_, (r = n.hasMap_.get(e)) == null || r.setNewValue_(!0), n.keysAtom_.reportChanged()
            });
            var r = _n(),
                i = G(this),
                a = i || r ? {
                    observableKind: `map`,
                    debugObjectName: this.name_,
                    type: Z,
                    object: this,
                    name: e,
                    newValue: t
                } : null;
            i && K(this, a)
        }, t.get = function(e) {
            return this.has(e) ? this.dehanceValue_(this.data_.get(e).get()) : this.dehanceValue_(void 0)
        }, t.dehanceValue_ = function(e) {
            return this.dehancer === void 0 ? e : this.dehancer(e)
        }, t.keys = function() {
            return this.keysAtom_.reportObserved(), this.data_.keys()
        }, t.values = function() {
            var e = this,
                t = this.keys();
            return kr({
                next: function() {
                    var n = t.next(),
                        r = n.done,
                        i = n.value;
                    return {
                        done: r,
                        value: r ? void 0 : e.get(i)
                    }
                }
            })
        }, t.entries = function() {
            var e = this,
                t = this.keys();
            return kr({
                next: function() {
                    var n = t.next(),
                        r = n.done,
                        i = n.value;
                    return {
                        done: r,
                        value: r ? void 0 : [i, e.get(i)]
                    }
                }
            })
        }, t[Symbol.iterator] = function() {
            return this.entries()
        }, t.forEach = function(e, t) {
            for (var n = me(this), r; !(r = n()).done;) {
                var i = r.value,
                    a = i[0],
                    o = i[1];
                e.call(t, o, a, this)
            }
        }, t.merge = function(e) {
            var t = this;
            return Q(e) && (e = new Map(e)), H(function() {
                v(e) ? se(e).forEach(function(n) {
                    return t.set(n, e[n])
                }) : Array.isArray(e) ? e.forEach(function(e) {
                    var n = e[0],
                        r = e[1];
                    return t.set(n, r)
                }) : ie(e) ? (ae(e) || n(19, e), e.forEach(function(e, n) {
                    return t.set(n, e)
                })) : e != null && n(20, e)
            }), this
        }, t.clear = function() {
            var e = this;
            H(function() {
                Yt(function() {
                    for (var t = me(e.keys()), n; !(n = t()).done;) {
                        var r = n.value;
                        e.delete(r)
                    }
                })
            })
        }, t.replace = function(e) {
            var t = this;
            return H(function() {
                for (var n = Ar(e), r = new Map, i = !1, a = me(t.data_.keys()), o; !(o = a()).done;) {
                    var s = o.value;
                    if (!n.has(s)) {
                        if (t.delete(s)) i = !0;
                        else {
                            var c = t.data_.get(s);
                            r.set(s, c)
                        }
                    }
                }
                for (var l = me(n.entries()), u; !(u = l()).done;) {
                    var d = u.value,
                        f = d[0],
                        ee = d[1],
                        p = t.data_.has(f);
                    if (t.set(f, ee), t.data_.has(f)) {
                        var m = t.data_.get(f);
                        r.set(f, m), p || (i = !0)
                    }
                }
                if (!i) {
                    if (t.data_.size !== r.size) t.keysAtom_.reportChanged();
                    else
                        for (var h = t.data_.keys(), g = r.keys(), _ = h.next(), v = g.next(); !_.done;) {
                            if (_.value !== v.value) {
                                t.keysAtom_.reportChanged();
                                break
                            }
                            _ = h.next(), v = g.next()
                        }
                }
                t.data_ = r
            }), this
        }, t.toString = function() {
            return `[object ObservableMap]`
        }, t.toJSON = function() {
            return Array.from(this)
        }, t.observe_ = function(e, t) {
            return hr(this, e)
        }, t.intercept_ = function(e) {
            return mr(this, e)
        }, pe(e, [{
            key: `size`,
            get: function() {
                return this.keysAtom_.reportObserved(), this.data_.size
            }
        }, {
            key: Symbol.toStringTag,
            get: function() {
                return `Map`
            }
        }])
    }(),
    Q = y(`ObservableMap`, Or);

function kr(e) {
    return e[Symbol.toStringTag] = `MapIterator`, ci(e)
}

function Ar(e) {
    if (ie(e) || Q(e)) return e;
    if (Array.isArray(e)) return new Map(e);
    if (v(e)) {
        var t = new Map;
        for (var r in e) t.set(r, e[r]);
        return t
    }
    return n(21, e)
}
var jr = {},
    Mr = function() {
        function e(e, t, r) {
            var i = this;
            t === void 0 && (t = k), r === void 0 && (r = `ObservableSet`), this.name_ = void 0, this[D] = jr, this.data_ = new Set, this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = r, h(Set) || n(22), this.enhancer_ = function(e, n) {
                return t(e, n, r)
            }, ti(function() {
                i.atom_ = we(i.name_), e && i.replace(e)
            })
        }
        var t = e.prototype;
        return t.dehanceValue_ = function(e) {
            return this.dehancer === void 0 ? e : this.dehancer(e)
        }, t.clear = function() {
            var e = this;
            H(function() {
                Yt(function() {
                    for (var t = me(e.data_.values()), n; !(n = t()).done;) {
                        var r = n.value;
                        e.delete(r)
                    }
                })
            })
        }, t.forEach = function(e, t) {
            for (var n = me(this), r; !(r = n()).done;) {
                var i = r.value;
                e.call(t, i, i, this)
            }
        }, t.add = function(e) {
            var t = this;
            if (this.atom_, U(this)) {
                var n = W(this, {
                    type: Z,
                    object: this,
                    newValue: e
                });
                if (!n) return this;
                e = n.newValue
            }
            if (!this.has(e)) {
                H(function() {
                    t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged()
                });
                var r = G(this),
                    i = r ? {
                        observableKind: `set`,
                        debugObjectName: this.name_,
                        type: Z,
                        object: this,
                        newValue: e
                    } : null;
                r && K(this, i)
            }
            return this
        }, t.delete = function(e) {
            var t = this;
            if (U(this) && !W(this, {
                    type: Dr,
                    object: this,
                    oldValue: e
                })) return !1;
            if (this.has(e)) {
                var n = G(this),
                    r = n ? {
                        observableKind: `set`,
                        debugObjectName: this.name_,
                        type: Dr,
                        object: this,
                        oldValue: e
                    } : null;
                return H(function() {
                    t.atom_.reportChanged(), t.data_.delete(e)
                }), n && K(this, r), !0
            }
            return !1
        }, t.has = function(e) {
            return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(e))
        }, t.entries = function() {
            var e = this.values();
            return Nr({
                next: function() {
                    var t = e.next(),
                        n = t.value,
                        r = t.done;
                    return r ? {
                        value: void 0,
                        done: r
                    } : {
                        value: [n, n],
                        done: r
                    }
                }
            })
        }, t.keys = function() {
            return this.values()
        }, t.values = function() {
            this.atom_.reportObserved();
            var e = this,
                t = this.data_.values();
            return Nr({
                next: function() {
                    var n = t.next(),
                        r = n.value,
                        i = n.done;
                    return i ? {
                        value: void 0,
                        done: i
                    } : {
                        value: e.dehanceValue_(r),
                        done: i
                    }
                }
            })
        }, t.intersection = function(e) {
            return b(e) && !$(e) ? e.intersection(this) : new Set(this).intersection(e)
        }, t.union = function(e) {
            return b(e) && !$(e) ? e.union(this) : new Set(this).union(e)
        }, t.difference = function(e) {
            return new Set(this).difference(e)
        }, t.symmetricDifference = function(e) {
            return b(e) && !$(e) ? e.symmetricDifference(this) : new Set(this).symmetricDifference(e)
        }, t.isSubsetOf = function(e) {
            return new Set(this).isSubsetOf(e)
        }, t.isSupersetOf = function(e) {
            return new Set(this).isSupersetOf(e)
        }, t.isDisjointFrom = function(e) {
            return b(e) && !$(e) ? e.isDisjointFrom(this) : new Set(this).isDisjointFrom(e)
        }, t.replace = function(e) {
            var t = this;
            return $(e) && (e = new Set(e)), H(function() {
                Array.isArray(e) || b(e) ? (t.clear(), e.forEach(function(e) {
                    return t.add(e)
                })) : e != null && n(`Cannot initialize set from ` + e)
            }), this
        }, t.observe_ = function(e, t) {
            return hr(this, e)
        }, t.intercept_ = function(e) {
            return mr(this, e)
        }, t.toJSON = function() {
            return Array.from(this)
        }, t.toString = function() {
            return `[object ObservableSet]`
        }, t[Symbol.iterator] = function() {
            return this.values()
        }, pe(e, [{
            key: `size`,
            get: function() {
                return this.atom_.reportObserved(), this.data_.size
            }
        }, {
            key: Symbol.toStringTag,
            get: function() {
                return `Set`
            }
        }])
    }(),
    $ = y(`ObservableSet`, Mr);

function Nr(e) {
    return e[Symbol.toStringTag] = `SetIterator`, ci(e)
}
var Pr = Object.create(null),
    Fr = `remove`,
    Ir = function() {
        function e(e, t, n, r) {
            t === void 0 && (t = new Map), r === void 0 && (r = it), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = e, this.values_ = t, this.name_ = n, this.defaultAnnotation_ = r, this.keysAtom_ = new O(`ObservableObject.keys`), this.isPlainObject_ = v(this.target_)
        }
        var t = e.prototype;
        return t.getObservablePropValue_ = function(e) {
            return this.values_.get(e).get()
        }, t.setObservablePropValue_ = function(e, t) {
            var n = this.values_.get(e);
            if (n instanceof N) return n.set(t), !0;
            if (U(this)) {
                var r = W(this, {
                    type: q,
                    object: this.proxy_ || this.target_,
                    name: e,
                    newValue: t
                });
                if (!r) return null;
                t = r.newValue
            }
            if (t = n.prepareNewValue_(t), t !== L.UNCHANGED) {
                var i = G(this),
                    a = i ? {
                        type: q,
                        observableKind: `object`,
                        debugObjectName: this.name_,
                        object: this.proxy_ || this.target_,
                        oldValue: n.value_,
                        name: e,
                        newValue: t
                    } : null;
                n.setNewValue_(t), i && K(this, a)
            }
            return !0
        }, t.get_ = function(e) {
            return L.trackingDerivation && !x(this.target_, e) && this.has_(e), this.target_[e]
        }, t.set_ = function(e, t, n) {
            return n === void 0 && (n = !1), x(this.target_, e) ? this.values_.has(e) ? this.setObservablePropValue_(e, t) : n ? Reflect.set(this.target_, e, t) : (this.target_[e] = t, !0) : this.extend_(e, {
                value: t,
                enumerable: !0,
                writable: !0,
                configurable: !0
            }, this.defaultAnnotation_, n)
        }, t.has_ = function(e) {
            if (!L.trackingDerivation) return e in this.target_;
            this.pendingKeys_ || (this.pendingKeys_ = new Map);
            var t = this.pendingKeys_.get(e);
            return t || (t = new M(e in this.target_, je, `ObservableObject.key?`, !1), this.pendingKeys_.set(e, t)), t.get()
        }, t.make_ = function(e, t) {
            if (t === !0 && (t = this.defaultAnnotation_), t !== !1) {
                if (!(e in this.target_)) {
                    var r;
                    if ((r = this.target_[T]) != null && r[e]) return;
                    n(1, t.annotationType_, this.name_ + `.` + e.toString())
                }
                for (var i = this.target_; i && i !== c;) {
                    var a = o(i, e);
                    if (a) {
                        var s = t.make_(this, e, a, i);
                        if (s === 0) return;
                        if (s === 1) break
                    }
                    i = Object.getPrototypeOf(i)
                }
                Vr(this, t, e)
            }
        }, t.extend_ = function(e, t, n, r) {
            if (r === void 0 && (r = !1), n === !0 && (n = this.defaultAnnotation_), n === !1) return this.defineProperty_(e, t, r);
            var i = n.extend_(this, e, t, r);
            return i && Vr(this, n, e), i
        }, t.defineProperty_ = function(e, t, n) {
            n === void 0 && (n = !1), this.keysAtom_;
            try {
                R();
                var r = this.delete_(e);
                if (!r) return r;
                if (U(this)) {
                    var i = W(this, {
                        object: this.proxy_ || this.target_,
                        name: e,
                        type: Z,
                        newValue: t.value
                    });
                    if (!i) return null;
                    var a = i.newValue;
                    t.value !== a && (t = w({}, t, {
                        value: a
                    }))
                }
                if (n) {
                    if (!Reflect.defineProperty(this.target_, e, t)) return !1
                } else s(this.target_, e, t);
                this.notifyPropertyAddition_(e, t.value)
            } finally {
                z()
            }
            return !0
        }, t.defineObservableProperty_ = function(e, t, n, r) {
            r === void 0 && (r = !1), this.keysAtom_;
            try {
                R();
                var i = this.delete_(e);
                if (!i) return i;
                if (U(this)) {
                    var a = W(this, {
                        object: this.proxy_ || this.target_,
                        name: e,
                        type: Z,
                        newValue: t
                    });
                    if (!a) return null;
                    t = a.newValue
                }
                var o = zr(e),
                    c = {
                        configurable: !L.safeDescriptors || this.isPlainObject_,
                        enumerable: !0,
                        get: o.get,
                        set: o.set
                    };
                if (r) {
                    if (!Reflect.defineProperty(this.target_, e, c)) return !1
                } else s(this.target_, e, c);
                var l = new M(t, n, `ObservableObject.key`, !1);
                this.values_.set(e, l), this.notifyPropertyAddition_(e, l.value_)
            } finally {
                z()
            }
            return !0
        }, t.defineComputedProperty_ = function(e, t, n) {
            n === void 0 && (n = !1), this.keysAtom_;
            try {
                R();
                var r = this.delete_(e);
                if (!r) return r;
                if (U(this) && !W(this, {
                        object: this.proxy_ || this.target_,
                        name: e,
                        type: Z,
                        newValue: void 0
                    })) return null;
                t.name || (t.name = `ObservableObject.key`), t.context = this.proxy_ || this.target_;
                var i = zr(e),
                    a = {
                        configurable: !L.safeDescriptors || this.isPlainObject_,
                        enumerable: !1,
                        get: i.get,
                        set: i.set
                    };
                if (n) {
                    if (!Reflect.defineProperty(this.target_, e, a)) return !1
                } else s(this.target_, e, a);
                this.values_.set(e, new N(t)), this.notifyPropertyAddition_(e, void 0)
            } finally {
                z()
            }
            return !0
        }, t.delete_ = function(e, t) {
            if (t === void 0 && (t = !1), this.keysAtom_, !x(this.target_, e)) return !0;
            if (U(this) && !W(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: Fr
                })) return null;
            try {
                var n;
                R();
                var r = G(this),
                    i = this.values_.get(e),
                    a = void 0;
                if (!i && r) {
                    var s;
                    a = (s = o(this.target_, e)) == null ? void 0 : s.value
                }
                if (t) {
                    if (!Reflect.deleteProperty(this.target_, e)) return !1
                } else delete this.target_[e];
                if (i && (this.values_.delete(e), i instanceof M && (a = i.value_), cn(i)), this.keysAtom_.reportChanged(), (n = this.pendingKeys_) == null || (n = n.get(e)) == null || n.set(e in this.target_), r) {
                    var c = {
                        type: Fr,
                        observableKind: `object`,
                        object: this.proxy_ || this.target_,
                        debugObjectName: this.name_,
                        oldValue: a,
                        name: e
                    };
                    r && K(this, c)
                }
            } finally {
                z()
            }
            return !0
        }, t.observe_ = function(e, t) {
            return hr(this, e)
        }, t.intercept_ = function(e) {
            return mr(this, e)
        }, t.notifyPropertyAddition_ = function(e, t) {
            var n, r = G(this);
            if (r) {
                var i = r ? {
                    type: Z,
                    observableKind: `object`,
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    name: e,
                    newValue: t
                } : null;
                r && K(this, i)
            }(n = this.pendingKeys_) == null || (n = n.get(e)) == null || n.set(!0), this.keysAtom_.reportChanged()
        }, t.ownKeys_ = function() {
            return this.keysAtom_.reportObserved(), ce(this.target_)
        }, t.keys_ = function() {
            return this.keysAtom_.reportObserved(), Object.keys(this.target_)
        }, e
    }();

function Lr(e, t) {
    if (x(e, D)) return e;
    var n = (t == null ? void 0 : t.name) ?? `ObservableObject`;
    return ne(e, D, new Ir(e, new Map, String(n), xt(t))), e
}
var Rr = y(`ObservableObjectAdministration`, Ir);

function zr(e) {
    return Pr[e] || (Pr[e] = {
        get: function() {
            return this[D].getObservablePropValue_(e)
        },
        set: function(t) {
            return this[D].setObservablePropValue_(e, t)
        }
    })
}

function Br(e) {
    return _(e) ? Rr(e[D]) : !1
}

function Vr(e, t, n) {
    var r;
    (r = e.target_[T]) == null || delete r[n]
}
var Hr = Jr(0),
    Ur = function() {
        var e = !1,
            t = {};
        return Object.defineProperty(t, "0", {
            set: function() {
                e = !0
            }
        }), Object.create(t)[0] = 1, e === !1
    }(),
    Wr = 0,
    Gr = function() {};

function Kr(e, t) {
    Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ === void 0 ? e.prototype = t : e.prototype.__proto__ = t
}
Kr(Gr, Array.prototype);
var qr = function(e) {
    function t(t, n, r, i) {
        var a;
        return r === void 0 && (r = `ObservableArray`), i === void 0 && (i = !1), a = e.call(this) || this, ti(function() {
            var e = new br(r, n, i, !0);
            e.proxy_ = a, re(a, D, e), t && t.length && a.spliceWithArray(0, 0, t), Ur && Object.defineProperty(a, "0", Hr)
        }), a
    }
    he(t, e);
    var n = t.prototype;
    return n.concat = function() {
        this[D].atom_.reportObserved();
        var e = [...arguments];
        return Array.prototype.concat.apply(this.slice(), e.map(function(e) {
            return Tr(e) ? e.slice() : e
        }))
    }, n[Symbol.iterator] = function() {
        var e = this,
            t = 0;
        return ci({
            next: function() {
                return t < e.length ? {
                    value: e[t++],
                    done: !1
                } : {
                    done: !0,
                    value: void 0
                }
            }
        })
    }, pe(t, [{
        key: `length`,
        get: function() {
            return this[D].getArrayLength_()
        },
        set: function(e) {
            this[D].setArrayLength_(e)
        }
    }, {
        key: Symbol.toStringTag,
        get: function() {
            return `Array`
        }
    }])
}(Gr);
Object.entries(Sr).forEach(function(e) {
    var t = e[0],
        n = e[1];
    t !== `concat` && ne(qr.prototype, t, n)
});

function Jr(e) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this[D].get_(e)
        },
        set: function(t) {
            this[D].set_(e, t)
        }
    }
}

function Yr(e) {
    s(qr.prototype, `` + e, Jr(e))
}

function Xr(e) {
    if (e > Wr) {
        for (var t = Wr; t < e + 100; t++) Yr(t);
        Wr = e
    }
}
Xr(1e3);

function Zr(e, t, n) {
    return new qr(e, t, n)
}

function Qr(e, t) {
    if (typeof e == `object` && e) {
        if (Tr(e)) return t !== void 0 && n(23), e[D].atom_;
        if ($(e)) return e.atom_;
        if (Q(e)) {
            if (t === void 0) return e.keysAtom_;
            var r = e.data_.get(t) || e.hasMap_.get(t);
            return r || n(25, t, ei(e)), r
        }
        if (Br(e)) {
            if (!t) return n(26);
            var i = e[D].values_.get(t);
            return i || n(27, t, ei(e)), i
        }
        if (Ce(e) || Vt(e) || hn(e)) return e
    } else if (h(e) && hn(e[D])) return e[D];
    n(28)
}

function $r(e, t) {
    if (e || n(29), t !== void 0) return $r(Qr(e, t));
    if (Ce(e) || Vt(e) || hn(e) || Q(e) || $(e)) return e;
    if (e[D]) return e[D];
    n(24, e)
}

function ei(e, t) {
    var n;
    if (t !== void 0) n = Qr(e, t);
    else if (An(e)) return e.name;
    else n = Br(e) || Q(e) || $(e) ? $r(e) : Qr(e);
    return n.name_
}

function ti(e) {
    var t = F(),
        n = Rt(!0);
    R();
    try {
        return e()
    } finally {
        z(), zt(n), I(t)
    }
}
var ni = c.toString;

function ri(e, t, n) {
    return n === void 0 && (n = -1), ii(e, t, n)
}

function ii(e, t, n, r, i) {
    if (e === t) return e !== 0 || 1 / e == 1 / t;
    if (e == null || t == null) return !1;
    if (e !== e) return t !== t;
    var a = typeof e;
    if (a !== `function` && a !== `object` && typeof t != `object`) return !1;
    var o = ni.call(e);
    if (o !== ni.call(t)) return !1;
    switch (o) {
        case `[object RegExp]`:
        case `[object String]`:
            return `` + e == `` + t;
        case `[object Number]`:
            return +e == +e ? +e == 0 ? 1 / e == 1 / t : +e == +t : +t != +t;
        case `[object Date]`:
        case `[object Boolean]`:
            return +e == +t;
        case `[object Symbol]`:
            return typeof Symbol < `u` && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
        case `[object Map]`:
        case `[object Set]`:
            n >= 0 && n++
    }
    e = ai(e), t = ai(t);
    var s = o === `[object Array]`;
    if (!s) {
        if (typeof e != `object` || typeof t != `object`) return !1;
        var c = e.constructor,
            l = t.constructor;
        if (c !== l && !(h(c) && c instanceof c && h(l) && l instanceof l) && `constructor` in e && `constructor` in t) return !1
    }
    if (n === 0) return !1;
    n < 0 && (n = -1), r = r || [], i = i || [];
    for (var u = r.length; u--;)
        if (r[u] === e) return i[u] === t;
    if (r.push(e), i.push(t), s) {
        if (u = e.length, u !== t.length) return !1;
        for (; u--;)
            if (!ii(e[u], t[u], n - 1, r, i)) return !1
    } else {
        var d = Object.keys(e),
            f = d.length;
        if (Object.keys(t).length !== f) return !1;
        for (var ee = 0; ee < f; ee++) {
            var p = d[ee];
            if (!(x(t, p) && ii(e[p], t[p], n - 1, r, i))) return !1
        }
    }
    return r.pop(), i.pop(), !0
}

function ai(e) {
    return Tr(e) ? e.slice() : ie(e) || Q(e) || b(e) || $(e) ? Array.from(e.entries()) : e
}
var oi, si = ((oi = i().Iterator) == null ? void 0 : oi.prototype) || {};

function ci(e) {
    return e[Symbol.iterator] = li, Object.assign(Object.create(si), e)
}

function li() {
    return this
} [`Symbol`, `Map`, `Set`].forEach(function(e) {
    i()[e] === void 0 && n(`MobX requires global '` + e + `' to be available or polyfilled`)
}), typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == `object` && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: vn,
    extras: {
        getDebugName: ei
    },
    $mobx: D
});

function ui(e, t, n, r) {
    var i = arguments.length,
        a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r,
        o;
    if (typeof Reflect == `object` && typeof Reflect.decorate == `function`) a = Reflect.decorate(e, t, n, r);
    else
        for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
    return i > 3 && a && Object.defineProperty(t, n, a), a
}
export {
    Lt as a, Ot as c, Kn as d, gr as f, cr as g, sr as h, V as i, Wn as l, Pn as m, D as n, Zt as o, A as p, B as r, Xt as s, ui as t, we as u
};