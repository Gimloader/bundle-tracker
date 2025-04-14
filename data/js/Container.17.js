function t(t, e, n, r) {
    Object.defineProperty(t, e, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}

function e(t) {
    return t && t.__esModule ? t.default : t
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("6vbUb", (function(e, r) {
    t(e.exports, "motion", (function() {
        return h
    }));
    n("dRFN9");
    var o = n("4mN9u"),
        i = n("d5MhN"),
        s = n("jagpa"),
        a = n("3jkh8"),
        u = n("6vhPW"),
        l = n("l0hEV"),
        c = n("69ZRt"),
        p = n("2JqCN");
    const f = {
            ...a.animations,
            ...s.gestureAnimations,
            ...u.drag,
            ...c.layoutFeatures
        },
        h = (0, o.createMotionProxy)(((t, e) => (0, i.createDomMotionConfig)(t, e, f, l.createDomVisualElement, p.HTMLProjectionNode)))
})), n.register("dRFN9", (function(e, r) {
    t(e.exports, "createMotionComponent", (function() {
        return x
    }));
    var o = n("fywoC"),
        i = (o = n("fywoC"), n("lLAX0")),
        s = n("8ZjED"),
        a = n("2c4GY"),
        u = n("coD84"),
        l = n("4oODW"),
        c = n("fN29I"),
        p = n("8p2p9"),
        f = n("dMD6X"),
        h = n("lUaPh"),
        d = n("4yEJY"),
        m = n("fXvJM"),
        g = n("dcFzj"),
        v = n("45O50"),
        y = n("2m2pd");

    function x({
        preloadedFeatures: t,
        createVisualElement: e,
        projectionNodeConstructor: n,
        useRender: r,
        useVisualState: d,
        Component: x
    }) {
        t && (0, p.loadFeatures)(t);
        const V = (0, o.forwardRef)((function(p, y) {
            const V = {
                    ...(0, o.useContext)(i.MotionConfigContext),
                    ...p,
                    layoutId: b(p)
                },
                {
                    isStatic: C
                } = V;
            let T = null;
            const P = (0, l.useCreateMotionContext)(p),
                S = C ? void 0 : (0, h.useProjectionId)(),
                E = d(p, C);
            if (!C && f.isBrowser) {
                P.visualElement = (0, a.useVisualElement)(x, E, V, e);
                const r = (0, o.useContext)(g.LazyContext).strict,
                    i = (0, o.useContext)(v.SwitchLayoutGroupContext);
                P.visualElement && (T = P.visualElement.loadFeatures(V, r, t, S, n || c.featureDefinitions.projectionNodeConstructor, i))
            }
            return o.createElement(m.VisualElementHandler, {
                visualElement: P.visualElement,
                props: V
            }, T, o.createElement(s.MotionContext.Provider, {
                value: P
            }, r(x, p, S, (0, u.useMotionRef)(E, P.visualElement, y), E, C, P.visualElement)))
        }));
        return V[y.motionComponentSymbol] = x, V
    }

    function b({
        layoutId: t
    }) {
        const e = (0, o.useContext)(d.LayoutGroupContext).id;
        return e && void 0 !== t ? e + "-" + t : t
    }
})), n.register("lLAX0", (function(e, r) {
    t(e.exports, "MotionConfigContext", (function() {
        return o
    }));
    const o = (0, n("fywoC").createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    })
})), n.register("8ZjED", (function(e, r) {
    t(e.exports, "MotionContext", (function() {
        return i
    })), t(e.exports, "useVisualElementContext", (function() {
        return s
    }));
    var o = n("fywoC");
    const i = (0, o.createContext)({});

    function s() {
        return (0, o.useContext)(i).visualElement
    }
})), n.register("2c4GY", (function(e, r) {
    t(e.exports, "useVisualElement", (function() {
        return c
    }));
    var o = n("fywoC"),
        i = n("5fc51"),
        s = n("8ZjED"),
        a = n("ib4tF"),
        u = n("dcFzj"),
        l = n("lLAX0");

    function c(t, e, n, r) {
        const c = (0, s.useVisualElementContext)(),
            p = (0, o.useContext)(u.LazyContext),
            f = (0, o.useContext)(i.PresenceContext),
            h = (0, o.useContext)(l.MotionConfigContext).reducedMotion,
            d = (0, o.useRef)();
        r = r || p.renderer, !d.current && r && (d.current = r(t, {
            visualState: e,
            parent: c,
            props: n,
            presenceId: f ? f.id : void 0,
            blockInitialAnimation: !!f && !1 === f.initial,
            reducedMotionConfig: h
        }));
        const m = d.current;
        (0, a.useIsomorphicLayoutEffect)((() => {
            m && m.render()
        }));
        return (window.HandoffAppearAnimations ? a.useIsomorphicLayoutEffect : o.useEffect)((() => {
            m && m.animationState && m.animationState.animateChanges()
        })), m
    }
})), n.register("5fc51", (function(e, r) {
    t(e.exports, "PresenceContext", (function() {
        return o
    }));
    const o = (0, n("fywoC").createContext)(null)
})), n.register("ib4tF", (function(e, r) {
    t(e.exports, "useIsomorphicLayoutEffect", (function() {
        return i
    }));
    var o = n("fywoC");
    const i = n("dMD6X").isBrowser ? o.useLayoutEffect : o.useEffect
})), n.register("dMD6X", (function(e, n) {
    t(e.exports, "isBrowser", (function() {
        return r
    }));
    const r = "undefined" != typeof document
})), n.register("dcFzj", (function(e, r) {
    t(e.exports, "LazyContext", (function() {
        return o
    }));
    const o = (0, n("fywoC").createContext)({
        strict: !1
    })
})), n.register("coD84", (function(e, r) {
    t(e.exports, "useMotionRef", (function() {
        return s
    }));
    var o = n("fywoC"),
        i = n("Wlprs");

    function s(t, e, n) {
        return (0, o.useCallback)((r => {
            r && t.mount && t.mount(r), e && (r ? e.mount(r) : e.unmount()), n && ("function" == typeof n ? n(r) : (0, i.isRefObject)(n) && (n.current = r))
        }), [e])
    }
})), n.register("Wlprs", (function(e, n) {
    function r(t) {
        return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
    }
    t(e.exports, "isRefObject", (function() {
        return r
    }))
})), n.register("4oODW", (function(e, r) {
    t(e.exports, "useCreateMotionContext", (function() {
        return a
    }));
    var o = n("fywoC"),
        i = n("8ZjED"),
        s = n("lsHl3");

    function a(t) {
        const {
            initial: e,
            animate: n
        } = (0, s.getCurrentTreeVariants)(t, (0, o.useContext)(i.MotionContext));
        return (0, o.useMemo)((() => ({
            initial: e,
            animate: n
        })), [u(e), u(n)])
    }

    function u(t) {
        return Array.isArray(t) ? t.join(" ") : t
    }
})), n.register("lsHl3", (function(e, r) {
    t(e.exports, "getCurrentTreeVariants", (function() {
        return s
    }));
    var o = n("2VIDZ"),
        i = n("65O7e");

    function s(t, e) {
        if ((0, i.isControllingVariants)(t)) {
            const {
                initial: e,
                animate: n
            } = t;
            return {
                initial: !1 === e || (0, o.isVariantLabel)(e) ? e : void 0,
                animate: (0, o.isVariantLabel)(n) ? n : void 0
            }
        }
        return !1 !== t.inherit ? e : {}
    }
})), n.register("2VIDZ", (function(e, n) {
    function r(t) {
        return "string" == typeof t || Array.isArray(t)
    }
    t(e.exports, "isVariantLabel", (function() {
        return r
    }))
})), n.register("65O7e", (function(e, r) {
    t(e.exports, "isControllingVariants", (function() {
        return a
    })), t(e.exports, "isVariantNode", (function() {
        return u
    }));
    var o = n("d5lVS"),
        i = n("2VIDZ");
    const s = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

    function a(t) {
        return (0, o.isAnimationControls)(t.animate) || s.some((e => (0, i.isVariantLabel)(t[e])))
    }

    function u(t) {
        return Boolean(a(t) || t.variants)
    }
})), n.register("d5lVS", (function(e, n) {
    function r(t) {
        return "object" == typeof t && "function" == typeof t.start
    }
    t(e.exports, "isAnimationControls", (function() {
        return r
    }))
})), n.register("fN29I", (function(e, n) {
    t(e.exports, "featureDefinitions", (function() {
        return o
    }));
    const r = t => ({
            isEnabled: e => t.some((t => !!e[t]))
        }),
        o = {
            measureLayout: r(["layout", "layoutId", "drag"]),
            animation: r(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
            exit: r(["exit"]),
            drag: r(["drag", "dragControls"]),
            focus: r(["whileFocus"]),
            hover: r(["whileHover", "onHoverStart", "onHoverEnd"]),
            tap: r(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
            pan: r(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
            inView: r(["whileInView", "onViewportEnter", "onViewportLeave"])
        }
})), n.register("8p2p9", (function(e, r) {
    t(e.exports, "loadFeatures", (function() {
        return i
    }));
    var o = n("fN29I");

    function i(t) {
        for (const e in t) "projectionNodeConstructor" === e ? o.featureDefinitions.projectionNodeConstructor = t[e] : o.featureDefinitions[e].Component = t[e]
    }
})), n.register("lUaPh", (function(e, r) {
    t(e.exports, "useProjectionId", (function() {
        return a
    }));
    var o = n("8ATQJ"),
        i = n("5fama");
    let s = 1;

    function a() {
        return (0, o.useConstant)((() => {
            if (i.globalProjectionState.hasEverUpdated) return s++
        }))
    }
})), n.register("8ATQJ", (function(e, r) {
    t(e.exports, "useConstant", (function() {
        return i
    }));
    var o = n("fywoC");

    function i(t) {
        const e = (0, o.useRef)(null);
        return null === e.current && (e.current = t()), e.current
    }
})), n.register("5fama", (function(e, n) {
    t(e.exports, "globalProjectionState", (function() {
        return r
    }));
    const r = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    }
})), n.register("4yEJY", (function(e, r) {
    t(e.exports, "LayoutGroupContext", (function() {
        return o
    }));
    const o = (0, n("fywoC").createContext)({})
})), n.register("fXvJM", (function(r, o) {
    t(r.exports, "VisualElementHandler", (function() {
        return s
    }));
    var i = n("fywoC");
    class s extends e(i).Component {
        getSnapshotBeforeUpdate() {
            const {
                visualElement: t,
                props: e
            } = this.props;
            return t && t.setProps(e), null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }
})), n.register("45O50", (function(e, r) {
    t(e.exports, "SwitchLayoutGroupContext", (function() {
        return o
    }));
    const o = (0, n("fywoC").createContext)({})
})), n.register("2m2pd", (function(e, n) {
    t(e.exports, "motionComponentSymbol", (function() {
        return r
    }));
    const r = Symbol.for("motionComponentSymbol")
})), n.register("4mN9u", (function(e, r) {
    t(e.exports, "createMotionProxy", (function() {
        return i
    }));
    var o = n("dRFN9");

    function i(t) {
        function e(e, n = {}) {
            return (0, o.createMotionComponent)(t(e, n))
        }
        if ("undefined" == typeof Proxy) return e;
        const n = new Map;
        return new Proxy(e, {
            get: (t, r) => (n.has(r) || n.set(r, e(r)), n.get(r))
        })
    }
})), n.register("d5MhN", (function(e, r) {
    t(e.exports, "createDomMotionConfig", (function() {
        return u
    }));
    var o = n("6X5iD"),
        i = n("ar7ZB"),
        s = n("bJR4b"),
        a = n("dMWYv");

    function u(t, {
        forwardMotionProps: e = !1
    }, n, r, u) {
        return {
            ...(0, o.isSVGComponent)(t) ? s.svgMotionConfig : a.htmlMotionConfig,
            preloadedFeatures: n,
            useRender: (0, i.createUseRender)(e),
            createVisualElement: r,
            projectionNodeConstructor: u,
            Component: t
        }
    }
})), n.register("6X5iD", (function(e, r) {
    t(e.exports, "isSVGComponent", (function() {
        return i
    }));
    var o = n("jUw1H");

    function i(t) {
        return "string" == typeof t && !t.includes("-") && !!(o.lowercaseSVGElements.indexOf(t) > -1 || /[A-Z]/.test(t))
    }
})), n.register("jUw1H", (function(e, n) {
    t(e.exports, "lowercaseSVGElements", (function() {
        return r
    }));
    const r = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"]
})), n.register("ar7ZB", (function(e, r) {
    t(e.exports, "createUseRender", (function() {
        return c
    }));
    var o = n("fywoC"),
        i = n("aBg2Z"),
        s = n("kIl0b"),
        a = n("6X5iD"),
        u = n("7dojq"),
        l = n("inWou");

    function c(t = !1) {
        return (e, n, r, c, {
            latestValues: p
        }, f) => {
            const h = ((0, a.isSVGComponent)(e) ? u.useSVGProps : i.useHTMLProps)(n, p, f, e),
                d = {
                    ...(0, s.filterProps)(n, "string" == typeof e, t),
                    ...h,
                    ref: c
                },
                {
                    children: m
                } = n,
                g = (0, o.useMemo)((() => (0, l.isMotionValue)(m) ? m.get() : m), [m]);
            return r && (d["data-projection-id"] = r), (0, o.createElement)(e, {
                ...d,
                children: g
            })
        }
    }
})), n.register("aBg2Z", (function(e, r) {
    t(e.exports, "copyRawValuesOnly", (function() {
        return l
    })), t(e.exports, "useHTMLProps", (function() {
        return p
    }));
    var o = n("fywoC"),
        i = n("4PX64"),
        s = n("inWou"),
        a = n("cBwFF"),
        u = n("cC3Bz");

    function l(t, e, n) {
        for (const r in e)(0, s.isMotionValue)(e[r]) || (0, i.isForcedMotionValue)(r, n) || (t[r] = e[r])
    }

    function c(t, e, n) {
        const r = {};
        return l(r, t.style || {}, t), Object.assign(r, function({
            transformTemplate: t
        }, e, n) {
            return (0, o.useMemo)((() => {
                const r = (0, u.createHtmlRenderState)();
                return (0, a.buildHTMLStyles)(r, e, {
                    enableHardwareAcceleration: !n
                }, t), Object.assign({}, r.vars, r.style)
            }), [e])
        }(t, e, n)), t.transformValues ? t.transformValues(r) : r
    }

    function p(t, e, n) {
        const r = {},
            o = c(t, e, n);
        return t.drag && !1 !== t.dragListener && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), r.style = o, r
    }
})), n.register("4PX64", (function(e, r) {
    t(e.exports, "isForcedMotionValue", (function() {
        return s
    }));
    var o = n("8LqDf"),
        i = n("3EEnx");

    function s(t, {
        layout: e,
        layoutId: n
    }) {
        return i.transformProps.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!o.scaleCorrectors[t] || "opacity" === t)
    }
})), n.register("8LqDf", (function(e, n) {
    t(e.exports, "scaleCorrectors", (function() {
        return r
    })), t(e.exports, "addScaleCorrector", (function() {
        return o
    }));
    const r = {};

    function o(t) {
        Object.assign(r, t)
    }
})), n.register("3EEnx", (function(e, n) {
    t(e.exports, "transformPropOrder", (function() {
        return r
    })), t(e.exports, "transformProps", (function() {
        return o
    }));
    const r = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        o = new Set(r)
})), n.register("inWou", (function(e, n) {
    t(e.exports, "isMotionValue", (function() {
        return r
    }));
    const r = t => !!(null == t ? void 0 : t.getVelocity)
})), n.register("cBwFF", (function(e, r) {
    t(e.exports, "buildHTMLStyles", (function() {
        return l
    }));
    var o = n("kuVw3"),
        i = n("87s3F"),
        s = n("3EEnx"),
        a = n("hC5E7"),
        u = n("6lmaA");

    function l(t, e, n, r) {
        const {
            style: l,
            vars: c,
            transform: p,
            transformKeys: f,
            transformOrigin: h
        } = t;
        f.length = 0;
        let d = !1,
            m = !1,
            g = !0;
        for (const t in e) {
            const n = e[t];
            if ((0, i.isCSSVariable)(t)) {
                c[t] = n;
                continue
            }
            const r = u.numberValueTypes[t],
                o = (0, a.getValueAsType)(n, r);
            if (s.transformProps.has(t)) {
                if (d = !0, p[t] = o, f.push(t), !g) continue;
                n !== (r.default || 0) && (g = !1)
            } else t.startsWith("origin") ? (m = !0, h[t] = o) : l[t] = o
        }
        if (e.transform || (d || r ? l.transform = (0, o.buildTransform)(t, n, g, r) : l.transform && (l.transform = "none")), m) {
            const {
                originX: t = "50%",
                originY: e = "50%",
                originZ: n = 0
            } = h;
            l.transformOrigin = `${t} ${e} ${n}`
        }
    }
})), n.register("kuVw3", (function(e, r) {
    t(e.exports, "buildTransform", (function() {
        return a
    }));
    var o = n("3EEnx");
    const i = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        },
        s = (t, e) => o.transformPropOrder.indexOf(t) - o.transformPropOrder.indexOf(e);

    function a({
        transform: t,
        transformKeys: e
    }, {
        enableHardwareAcceleration: n = !0,
        allowTransformNone: r = !0
    }, o, a) {
        let u = "";
        e.sort(s);
        for (const n of e) u += `${i[n]||n}(${t[n]}) `;
        return n && !t.z && (u += "translateZ(0)"), u = u.trim(), a ? u = a(t, o ? "" : u) : r && o && (u = "none"), u
    }
})), n.register("87s3F", (function(e, n) {
    function r(t) {
        return t.startsWith("--")
    }
    t(e.exports, "isCSSVariable", (function() {
        return r
    }))
})), n.register("hC5E7", (function(e, n) {
    t(e.exports, "getValueAsType", (function() {
        return r
    }));
    const r = (t, e) => e && "number" == typeof t ? e.transform(t) : t
})), n.register("6lmaA", (function(e, r) {
    t(e.exports, "numberValueTypes", (function() {
        return a
    }));
    var o = n("4IBaC"),
        i = n("gEGeb"),
        s = n("5jaAb");
    const a = {
        borderWidth: i.px,
        borderTopWidth: i.px,
        borderRightWidth: i.px,
        borderBottomWidth: i.px,
        borderLeftWidth: i.px,
        borderRadius: i.px,
        radius: i.px,
        borderTopLeftRadius: i.px,
        borderTopRightRadius: i.px,
        borderBottomRightRadius: i.px,
        borderBottomLeftRadius: i.px,
        width: i.px,
        maxWidth: i.px,
        height: i.px,
        maxHeight: i.px,
        size: i.px,
        top: i.px,
        right: i.px,
        bottom: i.px,
        left: i.px,
        padding: i.px,
        paddingTop: i.px,
        paddingRight: i.px,
        paddingBottom: i.px,
        paddingLeft: i.px,
        margin: i.px,
        marginTop: i.px,
        marginRight: i.px,
        marginBottom: i.px,
        marginLeft: i.px,
        rotate: i.degrees,
        rotateX: i.degrees,
        rotateY: i.degrees,
        rotateZ: i.degrees,
        scale: o.scale,
        scaleX: o.scale,
        scaleY: o.scale,
        scaleZ: o.scale,
        skew: i.degrees,
        skewX: i.degrees,
        skewY: i.degrees,
        distance: i.px,
        translateX: i.px,
        translateY: i.px,
        translateZ: i.px,
        x: i.px,
        y: i.px,
        z: i.px,
        perspective: i.px,
        transformPerspective: i.px,
        opacity: o.alpha,
        originX: i.progressPercentage,
        originY: i.progressPercentage,
        originZ: i.px,
        zIndex: s.int,
        fillOpacity: o.alpha,
        strokeOpacity: o.alpha,
        numOctaves: s.int
    }
})), n.register("4IBaC", (function(e, r) {
    t(e.exports, "number", (function() {
        return i
    })), t(e.exports, "alpha", (function() {
        return s
    })), t(e.exports, "scale", (function() {
        return a
    }));
    var o = n("6wUup");
    const i = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        },
        s = {
            ...i,
            transform: t => (0, o.clamp)(0, 1, t)
        },
        a = {
            ...i,
            default: 1
        }
})), n.register("6wUup", (function(e, n) {
    t(e.exports, "clamp", (function() {
        return r
    }));
    const r = (t, e, n) => Math.min(Math.max(n, t), e)
})), n.register("gEGeb", (function(e, r) {
    t(e.exports, "degrees", (function() {
        return s
    })), t(e.exports, "percent", (function() {
        return a
    })), t(e.exports, "px", (function() {
        return u
    })), t(e.exports, "vh", (function() {
        return l
    })), t(e.exports, "vw", (function() {
        return c
    })), t(e.exports, "progressPercentage", (function() {
        return p
    }));
    var o = n("cZIyz");
    const i = t => ({
            test: e => (0, o.isString)(e) && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        }),
        s = i("deg"),
        a = i("%"),
        u = i("px"),
        l = i("vh"),
        c = i("vw"),
        p = {
            ...a,
            parse: t => a.parse(t) / 100,
            transform: t => a.transform(100 * t)
        }
})), n.register("cZIyz", (function(e, n) {
    t(e.exports, "sanitize", (function() {
        return r
    })), t(e.exports, "floatRegex", (function() {
        return o
    })), t(e.exports, "colorRegex", (function() {
        return i
    })), t(e.exports, "singleColorRegex", (function() {
        return s
    })), t(e.exports, "isString", (function() {
        return a
    }));
    const r = t => Math.round(1e5 * t) / 1e5,
        o = /(-)?([\d]*\.?[\d])+/g,
        i = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        s = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

    function a(t) {
        return "string" == typeof t
    }
})), n.register("5jaAb", (function(e, r) {
    t(e.exports, "int", (function() {
        return o
    }));
    const o = {
        ...n("4IBaC").number,
        transform: Math.round
    }
})), n.register("cC3Bz", (function(e, n) {
    t(e.exports, "createHtmlRenderState", (function() {
        return r
    }));
    const r = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
    })
})), n.register("kIl0b", (function(e, r) {
    t(e.exports, "filterProps", (function() {
        return a
    }));
    var o = n("1S0e1");
    let i = t => !(0, o.isValidMotionProp)(t);
    try {
        (s = n("1n0Ic").default) && (i = t => t.startsWith("on") ? !(0, o.isValidMotionProp)(t) : s(t))
    } catch (t) {}
    var s;

    function a(t, e, n) {
        const r = {};
        for (const s in t) "values" === s && "object" == typeof t.values || (i(s) || !0 === n && (0, o.isValidMotionProp)(s) || !e && !(0, o.isValidMotionProp)(s) || t.draggable && s.startsWith("onDrag")) && (r[s] = t[s]);
        return r
    }
})), n.register("1S0e1", (function(e, n) {
    t(e.exports, "isValidMotionProp", (function() {
        return o
    }));
    const r = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "layoutScroll", "layoutRoot", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

    function o(t) {
        return r.has(t)
    }
})), n.register("1n0Ic", (function(e, r) {
    t(e.exports, "default", (function() {
        return s
    }));
    var o = n("wQUHy"),
        i = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        s = (0, o.default)((function(t) {
            return i.test(t) || 111 === t.charCodeAt(0) && 110 === t.charCodeAt(1) && t.charCodeAt(2) < 91
        }))
})), n.register("wQUHy", (function(e, n) {
    t(e.exports, "default", (function() {
        return r
    }));
    var r = function(t) {
        var e = {};
        return function(n) {
            return void 0 === e[n] && (e[n] = t(n)), e[n]
        }
    }
})), n.register("7dojq", (function(e, r) {
    t(e.exports, "useSVGProps", (function() {
        return l
    }));
    var o = n("fywoC"),
        i = n("aBg2Z"),
        s = n("1cMNz"),
        a = n("jsnqL"),
        u = n("jQ3f9");

    function l(t, e, n, r) {
        const l = (0, o.useMemo)((() => {
            const n = (0, a.createSvgRenderState)();
            return (0, s.buildSVGAttrs)(n, e, {
                enableHardwareAcceleration: !1
            }, (0, u.isSVGTag)(r), t.transformTemplate), {
                ...n.attrs,
                style: {
                    ...n.style
                }
            }
        }), [e]);
        if (t.style) {
            const e = {};
            (0, i.copyRawValuesOnly)(e, t.style, t), l.style = {
                ...e,
                ...l.style
            }
        }
        return l
    }
})), n.register("1cMNz", (function(e, r) {
    t(e.exports, "buildSVGAttrs", (function() {
        return a
    }));
    var o = n("cBwFF"),
        i = n("b2a8F"),
        s = n("1D8i3");

    function a(t, {
        attrX: e,
        attrY: n,
        originX: r,
        originY: a,
        pathLength: u,
        pathSpacing: l = 1,
        pathOffset: c = 0,
        ...p
    }, f, h, d) {
        if ((0, o.buildHTMLStyles)(t, p, f, d), h) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
            attrs: m,
            style: g,
            dimensions: v
        } = t;
        m.transform && (v && (g.transform = m.transform), delete m.transform), v && (void 0 !== r || void 0 !== a || g.transform) && (g.transformOrigin = (0, i.calcSVGTransformOrigin)(v, void 0 !== r ? r : .5, void 0 !== a ? a : .5)), void 0 !== e && (m.x = e), void 0 !== n && (m.y = n), void 0 !== u && (0, s.buildSVGPath)(m, u, l, c, !1)
    }
})), n.register("b2a8F", (function(e, r) {
    t(e.exports, "calcSVGTransformOrigin", (function() {
        return s
    }));
    var o = n("gEGeb");

    function i(t, e, n) {
        return "string" == typeof t ? t : o.px.transform(e + n * t)
    }

    function s(t, e, n) {
        return `${i(e,t.x,t.width)} ${i(n,t.y,t.height)}`
    }
})), n.register("1D8i3", (function(e, r) {
    t(e.exports, "buildSVGPath", (function() {
        return a
    }));
    var o = n("gEGeb");
    const i = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        },
        s = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };

    function a(t, e, n = 1, r = 0, a = !0) {
        t.pathLength = 1;
        const u = a ? i : s;
        t[u.offset] = o.px.transform(-r);
        const l = o.px.transform(e),
            c = o.px.transform(n);
        t[u.array] = `${l} ${c}`
    }
})), n.register("jsnqL", (function(e, r) {
    t(e.exports, "createSvgRenderState", (function() {
        return i
    }));
    var o = n("cC3Bz");
    const i = () => ({
        ...(0, o.createHtmlRenderState)(),
        attrs: {}
    })
})), n.register("jQ3f9", (function(e, n) {
    t(e.exports, "isSVGTag", (function() {
        return r
    }));
    const r = t => "string" == typeof t && "svg" === t.toLowerCase()
})), n.register("bJR4b", (function(e, r) {
    t(e.exports, "svgMotionConfig", (function() {
        return c
    }));
    var o = n("1ew35"),
        i = n("cIUZv"),
        s = n("2qoiL"),
        a = n("jsnqL"),
        u = n("1cMNz"),
        l = n("jQ3f9");
    const c = {
        useVisualState: (0, s.makeUseVisualState)({
            scrapeMotionValuesFromProps: i.scrapeMotionValuesFromProps,
            createRenderState: a.createSvgRenderState,
            onMount: (t, e, {
                renderState: n,
                latestValues: r
            }) => {
                try {
                    n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                } catch (t) {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }(0, u.buildSVGAttrs)(n, r, {
                    enableHardwareAcceleration: !1
                }, (0, l.isSVGTag)(e.tagName), t.transformTemplate), (0, o.renderSVG)(e, n)
            }
        })
    }
})), n.register("1ew35", (function(e, r) {
    t(e.exports, "renderSVG", (function() {
        return a
    }));
    var o = n("7w3Ty"),
        i = n("grs2Y"),
        s = n("eYF55");

    function a(t, e, n, r) {
        (0, i.renderHTML)(t, e, void 0, r);
        for (const n in e.attrs) t.setAttribute(s.camelCaseAttributes.has(n) ? n : (0, o.camelToDash)(n), e.attrs[n])
    }
})), n.register("7w3Ty", (function(e, n) {
    t(e.exports, "camelToDash", (function() {
        return r
    }));
    const r = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
})), n.register("grs2Y", (function(e, n) {
    function r(t, {
        style: e,
        vars: n
    }, r, o) {
        Object.assign(t.style, e, o && o.getProjectionStyles(r));
        for (const e in n) t.style.setProperty(e, n[e])
    }
    t(e.exports, "renderHTML", (function() {
        return r
    }))
})), n.register("eYF55", (function(e, n) {
    t(e.exports, "camelCaseAttributes", (function() {
        return r
    }));
    const r = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
})), n.register("cIUZv", (function(e, r) {
    t(e.exports, "scrapeMotionValuesFromProps", (function() {
        return s
    }));
    var o = n("inWou"),
        i = n("1BggE");

    function s(t, e) {
        const n = (0, i.scrapeMotionValuesFromProps)(t, e);
        for (const r in t)
            if ((0, o.isMotionValue)(t[r]) || (0, o.isMotionValue)(e[r])) {
                n["x" === r || "y" === r ? "attr" + r.toUpperCase() : r] = t[r]
            } return n
    }
})), n.register("1BggE", (function(e, r) {
    t(e.exports, "scrapeMotionValuesFromProps", (function() {
        return s
    }));
    var o = n("4PX64"),
        i = n("inWou");

    function s(t, e) {
        const {
            style: n
        } = t, r = {};
        for (const s in n)((0, i.isMotionValue)(n[s]) || e.style && (0, i.isMotionValue)(e.style[s]) || (0, o.isForcedMotionValue)(s, t)) && (r[s] = n[s]);
        return r
    }
})), n.register("2qoiL", (function(e, r) {
    t(e.exports, "makeUseVisualState", (function() {
        return f
    }));
    var o = n("fywoC"),
        i = n("d5lVS"),
        s = n("5fc51"),
        a = n("2rqJG"),
        u = n("8ATQJ"),
        l = n("dJxcH"),
        c = n("8ZjED"),
        p = n("65O7e");
    const f = t => (e, n) => {
        const r = (0, o.useContext)(c.MotionContext),
            i = (0, o.useContext)(s.PresenceContext),
            a = () => function({
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: n
            }, r, o, i) {
                const s = {
                    latestValues: h(r, o, i, t),
                    renderState: e()
                };
                return n && (s.mount = t => n(r, t, s)), s
            }(t, e, r, i);
        return n ? a() : (0, u.useConstant)(a)
    };

    function h(t, e, n, r) {
        const o = {},
            s = r(t, {});
        for (const t in s) o[t] = (0, l.resolveMotionValue)(s[t]);
        let {
            initial: u,
            animate: c
        } = t;
        const f = (0, p.isControllingVariants)(t),
            h = (0, p.isVariantNode)(t);
        e && h && !f && !1 !== t.inherit && (void 0 === u && (u = e.initial), void 0 === c && (c = e.animate));
        let d = !!n && !1 === n.initial;
        d = d || !1 === u;
        const m = d ? c : u;
        if (m && "boolean" != typeof m && !(0, i.isAnimationControls)(m)) {
            (Array.isArray(m) ? m : [m]).forEach((e => {
                const n = (0, a.resolveVariantFromProps)(t, e);
                if (!n) return;
                const {
                    transitionEnd: r,
                    transition: i,
                    ...s
                } = n;
                for (const t in s) {
                    let e = s[t];
                    if (Array.isArray(e)) {
                        e = e[d ? e.length - 1 : 0]
                    }
                    null !== e && (o[t] = e)
                }
                for (const t in r) o[t] = r[t]
            }))
        }
        return o
    }
})), n.register("2rqJG", (function(e, n) {
    function r(t, e, n, r = {}, o = {}) {
        return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, r, o)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, r, o)), e
    }
    t(e.exports, "resolveVariantFromProps", (function() {
        return r
    }))
})), n.register("dJxcH", (function(e, r) {
    t(e.exports, "resolveMotionValue", (function() {
        return s
    }));
    var o = n("9LTQC"),
        i = n("inWou");

    function s(t) {
        const e = (0, i.isMotionValue)(t) ? t.get() : t;
        return (0, o.isCustomValue)(e) ? e.toValue() : e
    }
})), n.register("9LTQC", (function(e, r) {
    t(e.exports, "isCustomValue", (function() {
        return i
    })), t(e.exports, "resolveFinalValueInKeyframes", (function() {
        return s
    }));
    var o = n("6N8Wf");
    const i = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        s = t => (0, o.isKeyframesTarget)(t) ? t[t.length - 1] || 0 : t
})), n.register("6N8Wf", (function(e, n) {
    t(e.exports, "isKeyframesTarget", (function() {
        return r
    }));
    const r = t => Array.isArray(t)
})), n.register("dMWYv", (function(e, r) {
    t(e.exports, "htmlMotionConfig", (function() {
        return a
    }));
    var o = n("2qoiL"),
        i = n("1BggE"),
        s = n("cC3Bz");
    const a = {
        useVisualState: (0, o.makeUseVisualState)({
            scrapeMotionValuesFromProps: i.scrapeMotionValuesFromProps,
            createRenderState: s.createHtmlRenderState
        })
    }
})), n.register("jagpa", (function(e, r) {
    t(e.exports, "gestureAnimations", (function() {
        return l
    }));
    var o = n("c0o1F"),
        i = n("freux"),
        s = n("b0v09"),
        a = n("fuRBn"),
        u = n("8P6pG");
    const l = {
        inView: (0, u.makeRenderlessComponent)(a.useViewport),
        tap: (0, u.makeRenderlessComponent)(s.useTapGesture),
        focus: (0, u.makeRenderlessComponent)(o.useFocusGesture),
        hover: (0, u.makeRenderlessComponent)(i.useHoverGesture)
    }
})), n.register("c0o1F", (function(e, r) {
    t(e.exports, "useFocusGesture", (function() {
        return a
    }));
    var o = n("8atAw"),
        i = n("f3KHs"),
        s = n("fywoC");

    function a({
        whileFocus: t,
        visualElement: e
    }) {
        const {
            animationState: n
        } = e, r = (0, s.useCallback)((() => {
            n && n.setActive(o.AnimationType.Focus, !0)
        }), [n]), a = (0, s.useCallback)((() => {
            n && n.setActive(o.AnimationType.Focus, !1)
        }), [n]);
        (0, i.useDomEvent)(e, "focus", t ? r : void 0), (0, i.useDomEvent)(e, "blur", t ? a : void 0)
    }
})), n.register("8atAw", (function(e, n) {
    var r, o;
    t(e.exports, "AnimationType", (function() {
        return r
    })), (o = r || (r = {})).Animate = "animate", o.Hover = "whileHover", o.Tap = "whileTap", o.Drag = "whileDrag", o.Focus = "whileFocus", o.InView = "whileInView", o.Exit = "exit"
})), n.register("f3KHs", (function(e, r) {
    t(e.exports, "addDomEvent", (function() {
        return i
    })), t(e.exports, "useDomEvent", (function() {
        return s
    }));
    var o = n("fywoC");

    function i(t, e, n, r = {
        passive: !0
    }) {
        return t.addEventListener(e, n, r), () => t.removeEventListener(e, n)
    }

    function s(t, e, n, r) {
        (0, o.useEffect)((() => {
            const o = t.current;
            if (n && o) return i(o, e, n, r)
        }), [t, e, n, r])
    }
})), n.register("freux", (function(e, r) {
    t(e.exports, "useHoverGesture", (function() {
        return l
    }));
    var o = n("8atAw"),
        i = n("2o0ZO"),
        s = n("1uIYz"),
        a = n("fywoC");

    function u(t, e, n, r) {
        return (i, a) => {
            "touch" === i.type || (0, s.isDragActive)() || (n && t.animationState && t.animationState.setActive(o.AnimationType.Hover, e), r && r(i, a))
        }
    }

    function l({
        onHoverStart: t,
        onHoverEnd: e,
        whileHover: n,
        visualElement: r
    }) {
        (0, i.usePointerEvent)(r, "pointerenter", (0, a.useMemo)((() => t || n ? u(r, !0, Boolean(n), t) : void 0), [t, Boolean(n), r]), {
            passive: !t
        }), (0, i.usePointerEvent)(r, "pointerleave", (0, a.useMemo)((() => e || n ? u(r, !1, Boolean(n), e) : void 0), [t, Boolean(n), r]), {
            passive: !e
        })
    }
})), n.register("2o0ZO", (function(e, r) {
    t(e.exports, "addPointerEvent", (function() {
        return s
    })), t(e.exports, "usePointerEvent", (function() {
        return a
    }));
    var o = n("f3KHs"),
        i = n("dsLRv");

    function s(t, e, n, r) {
        return (0, o.addDomEvent)(t, e, (0, i.addPointerInfo)(n), r)
    }

    function a(t, e, n, r) {
        return (0, o.useDomEvent)(t, e, n && (0, i.addPointerInfo)(n), r)
    }
})), n.register("dsLRv", (function(e, r) {
    t(e.exports, "extractEventInfo", (function() {
        return i
    })), t(e.exports, "addPointerInfo", (function() {
        return s
    }));
    var o = n("dE3m4");

    function i(t, e = "page") {
        return {
            point: {
                x: t[e + "X"],
                y: t[e + "Y"]
            }
        }
    }
    const s = t => e => (0, o.isPrimaryPointer)(e) && t(e, i(e))
})), n.register("dE3m4", (function(e, n) {
    t(e.exports, "isPrimaryPointer", (function() {
        return r
    }));
    const r = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary
})), n.register("1uIYz", (function(e, n) {
    function r(t) {
        let e = null;
        return () => {
            const n = () => {
                e = null
            };
            return null === e && (e = t, n)
        }
    }
    t(e.exports, "getGlobalLock", (function() {
        return s
    })), t(e.exports, "isDragActive", (function() {
        return a
    }));
    const o = r("dragHorizontal"),
        i = r("dragVertical");

    function s(t) {
        let e = !1;
        if ("y" === t) e = i();
        else if ("x" === t) e = o();
        else {
            const t = o(),
                n = i();
            t && n ? e = () => {
                t(), n()
            } : (t && t(), n && n())
        }
        return e
    }

    function a() {
        const t = s(!0);
        return !t || (t(), !1)
    }
})), n.register("b0v09", (function(e, r) {
    t(e.exports, "useTapGesture", (function() {
        return p
    }));
    var o = n("fywoC"),
        i = n("6OhGa"),
        s = n("2o0ZO"),
        a = n("fLHag"),
        u = n("8atAw"),
        l = n("1uIYz"),
        c = n("ca1Ym");

    function p({
        onTap: t,
        onTapStart: e,
        onTapCancel: n,
        whileTap: r,
        visualElement: p,
        ...f
    }) {
        const h = t || e || n || r,
            d = (0, o.useRef)(!1),
            m = (0, o.useRef)(null),
            g = {
                passive: !(e || t || n || f.onPointerDown)
            };

        function v() {
            m.current && m.current(), m.current = null
        }

        function y() {
            v(), d.current = !1;
            return p.getProps().whileTap && p.animationState && p.animationState.setActive(u.AnimationType.Tap, !1), !(0, l.isDragActive)()
        }

        function x(t, e) {
            var n, r, o, s;
            y() && ((0, i.isNodeOrChild)(p.current, t.target) ? null === (s = (o = p.getProps()).onTap) || void 0 === s || s.call(o, t, e) : null === (r = (n = p.getProps()).onTapCancel) || void 0 === r || r.call(n, t, e))
        }

        function b(t, e) {
            var n, r;
            y() && (null === (r = (n = p.getProps()).onTapCancel) || void 0 === r || r.call(n, t, e))
        }
        const V = (0, o.useCallback)(((t, e) => {
            var n;
            if (v(), d.current) return;
            d.current = !0, m.current = (0, c.pipe)((0, s.addPointerEvent)(window, "pointerup", x, g), (0, s.addPointerEvent)(window, "pointercancel", b, g));
            const r = p.getProps();
            r.whileTap && p.animationState && p.animationState.setActive(u.AnimationType.Tap, !0), null === (n = r.onTapStart) || void 0 === n || n.call(r, t, e)
        }), [Boolean(e), p]);
        (0, s.usePointerEvent)(p, "pointerdown", h ? V : void 0, g), (0, a.useUnmountEffect)(v)
    }
})), n.register("6OhGa", (function(e, n) {
    t(e.exports, "isNodeOrChild", (function() {
        return r
    }));
    const r = (t, e) => !!e && (t === e || r(t, e.parentElement))
})), n.register("fLHag", (function(e, r) {
    t(e.exports, "useUnmountEffect", (function() {
        return i
    }));
    var o = n("fywoC");

    function i(t) {
        return (0, o.useEffect)((() => () => t()), [])
    }
})), n.register("ca1Ym", (function(e, n) {
    t(e.exports, "pipe", (function() {
        return o
    }));
    const r = (t, e) => n => e(t(n)),
        o = (...t) => t.reduce(r)
})), n.register("fuRBn", (function(e, r) {
    t(e.exports, "useViewport", (function() {
        return a
    }));
    var o = n("fywoC"),
        i = n("8atAw"),
        s = n("h8Loy");

    function a({
        visualElement: t,
        whileInView: e,
        onViewportEnter: n,
        onViewportLeave: r,
        viewport: i = {}
    }) {
        const s = (0, o.useRef)({
            hasEnteredView: !1,
            isInView: !1
        });
        let a = Boolean(e || n || r);
        i.once && s.current.hasEnteredView && (a = !1);
        ("undefined" == typeof IntersectionObserver ? c : l)(a, s.current, t, i)
    }
    const u = {
        some: 0,
        all: 1
    };

    function l(t, e, n, {
        root: r,
        margin: a,
        amount: l = "some",
        once: c
    }) {
        (0, o.useEffect)((() => {
            if (!t || !n.current) return;
            const o = {
                root: null == r ? void 0 : r.current,
                rootMargin: a,
                threshold: "number" == typeof l ? l : u[l]
            };
            return (0, s.observeIntersection)(n.current, o, (t => {
                const {
                    isIntersecting: r
                } = t;
                if (e.isInView === r) return;
                if (e.isInView = r, c && !r && e.hasEnteredView) return;
                r && (e.hasEnteredView = !0), n.animationState && n.animationState.setActive(i.AnimationType.InView, r);
                const o = n.getProps(),
                    s = r ? o.onViewportEnter : o.onViewportLeave;
                s && s(t)
            }))
        }), [t, r, a, l])
    }

    function c(t, e, n, {
        fallback: r = !0
    }) {
        (0, o.useEffect)((() => {
            t && r && requestAnimationFrame((() => {
                e.hasEnteredView = !0;
                const {
                    onViewportEnter: t
                } = n.getProps();
                t && t(null), n.animationState && n.animationState.setActive(i.AnimationType.InView, !0)
            }))
        }), [t])
    }
})), n.register("h8Loy", (function(e, n) {
    t(e.exports, "observeIntersection", (function() {
        return a
    }));
    const r = new WeakMap,
        o = new WeakMap,
        i = t => {
            const e = r.get(t.target);
            e && e(t)
        },
        s = t => {
            t.forEach(i)
        };

    function a(t, e, n) {
        const i = function({
            root: t,
            ...e
        }) {
            const n = t || document;
            o.has(n) || o.set(n, {});
            const r = o.get(n),
                i = JSON.stringify(e);
            return r[i] || (r[i] = new IntersectionObserver(s, {
                root: t,
                ...e
            })), r[i]
        }(e);
        return r.set(t, n), i.observe(t), () => {
            r.delete(t), i.unobserve(t)
        }
    }
})), n.register("8P6pG", (function(e, n) {
    t(e.exports, "makeRenderlessComponent", (function() {
        return r
    }));
    const r = t => e => (t(e), null)
})), n.register("3jkh8", (function(e, r) {
    t(e.exports, "animations", (function() {
        return p
    }));
    var o = n("fywoC"),
        i = n("d5lVS"),
        s = n("5JgWp"),
        a = n("5fc51"),
        u = n("eEKoc"),
        l = n("8atAw"),
        c = n("8P6pG");
    const p = {
        animation: (0, c.makeRenderlessComponent)((({
            visualElement: t,
            animate: e
        }) => {
            t.animationState || (t.animationState = (0, u.createAnimationState)(t)), (0, i.isAnimationControls)(e) && (0, o.useEffect)((() => e.subscribe(t)), [e])
        })),
        exit: (0, c.makeRenderlessComponent)((t => {
            const {
                custom: e,
                visualElement: n
            } = t, [r, i] = (0, s.usePresence)(), u = (0, o.useContext)(a.PresenceContext);
            (0, o.useEffect)((() => {
                n.isPresent = r;
                const t = n.animationState && n.animationState.setActive(l.AnimationType.Exit, !r, {
                    custom: u && u.custom || e
                });
                t && !r && t.then(i)
            }), [r])
        }))
    }
})), n.register("5JgWp", (function(e, r) {
    t(e.exports, "usePresence", (function() {
        return s
    })), t(e.exports, "useIsPresent", (function() {
        return a
    }));
    var o = n("fywoC"),
        i = n("5fc51");

    function s() {
        const t = (0, o.useContext)(i.PresenceContext);
        if (null === t) return [!0, null];
        const {
            isPresent: e,
            onExitComplete: n,
            register: r
        } = t, s = (0, o.useId)();
        (0, o.useEffect)((() => r(s)), []);
        return !e && n ? [!1, () => n && n(s)] : [!0]
    }

    function a() {
        return null === (t = (0, o.useContext)(i.PresenceContext)) || t.isPresent;
        var t
    }
})), n.register("eEKoc", (function(e, r) {
    t(e.exports, "variantPriorityOrder", (function() {
        return p
    })), t(e.exports, "createAnimationState", (function() {
        return d
    }));
    var o = n("d5lVS"),
        i = n("6N8Wf"),
        s = n("amiIN"),
        a = n("4JDTO"),
        u = n("2VIDZ"),
        l = n("8atAw"),
        c = n("6ZPCy");
    const p = [l.AnimationType.Animate, l.AnimationType.InView, l.AnimationType.Focus, l.AnimationType.Hover, l.AnimationType.Tap, l.AnimationType.Drag, l.AnimationType.Exit],
        f = [...p].reverse(),
        h = p.length;

    function d(t) {
        let e = function(t) {
            return e => Promise.all(e.map((({
                animation: e,
                options: n
            }) => (0, a.animateVisualElement)(t, e, n))))
        }(t);
        const n = {
            [l.AnimationType.Animate]: g(!0),
            [l.AnimationType.InView]: g(),
            [l.AnimationType.Hover]: g(),
            [l.AnimationType.Tap]: g(),
            [l.AnimationType.Drag]: g(),
            [l.AnimationType.Focus]: g(),
            [l.AnimationType.Exit]: g()
        };
        let r = !0;
        const p = (e, n) => {
            const r = (0, c.resolveVariant)(t, n);
            if (r) {
                const {
                    transition: t,
                    transitionEnd: n,
                    ...o
                } = r;
                e = {
                    ...e,
                    ...o,
                    ...n
                }
            }
            return e
        };

        function d(a, l) {
            const c = t.getProps(),
                d = t.getVariantContext(!0) || {},
                g = [],
                v = new Set;
            let y = {},
                x = 1 / 0;
            for (let e = 0; e < h; e++) {
                const h = f[e],
                    b = n[h],
                    V = void 0 !== c[h] ? c[h] : d[h],
                    C = (0, u.isVariantLabel)(V),
                    T = h === l ? b.isActive : null;
                !1 === T && (x = e);
                let P = V === d[h] && V !== c[h] && C;
                if (P && r && t.manuallyAnimateOnMount && (P = !1), b.protectedKeys = {
                        ...y
                    }, !b.isActive && null === T || !V && !b.prevProp || (0, o.isAnimationControls)(V) || "boolean" == typeof V) continue;
                const S = m(b.prevProp, V);
                let E = S || h === l && b.isActive && !P && C || e > x && C;
                const w = Array.isArray(V) ? V : [V];
                let A = w.reduce(p, {});
                !1 === T && (A = {});
                const {
                    prevResolvedValues: D = {}
                } = b, M = {
                    ...D,
                    ...A
                }, R = t => {
                    E = !0, v.delete(t), b.needsAnimating[t] = !0
                };
                for (const t in M) {
                    const e = A[t],
                        n = D[t];
                    y.hasOwnProperty(t) || (e !== n ? (0, i.isKeyframesTarget)(e) && (0, i.isKeyframesTarget)(n) ? !(0, s.shallowCompare)(e, n) || S ? R(t) : b.protectedKeys[t] = !0 : void 0 !== e ? R(t) : v.add(t) : void 0 !== e && v.has(t) ? R(t) : b.protectedKeys[t] = !0)
                }
                b.prevProp = V, b.prevResolvedValues = A, b.isActive && (y = {
                    ...y,
                    ...A
                }), r && t.blockInitialAnimation && (E = !1), E && !P && g.push(...w.map((t => ({
                    animation: t,
                    options: {
                        type: h,
                        ...a
                    }
                }))))
            }
            if (v.size) {
                const e = {};
                v.forEach((n => {
                    const r = t.getBaseTarget(n);
                    void 0 !== r && (e[n] = r)
                })), g.push({
                    animation: e
                })
            }
            let b = Boolean(g.length);
            return r && !1 === c.initial && !t.manuallyAnimateOnMount && (b = !1), r = !1, b ? e(g) : Promise.resolve()
        }
        return {
            animateChanges: d,
            setActive: function(e, r, o) {
                var i;
                if (n[e].isActive === r) return Promise.resolve();
                null === (i = t.variantChildren) || void 0 === i || i.forEach((t => {
                    var n;
                    return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, r)
                })), n[e].isActive = r;
                const s = d(o, e);
                for (const t in n) n[t].protectedKeys = {};
                return s
            },
            setAnimateFunction: function(n) {
                e = n(t)
            },
            getState: () => n
        }
    }

    function m(t, e) {
        return "string" == typeof e ? e !== t : !!Array.isArray(e) && !(0, s.shallowCompare)(e, t)
    }

    function g(t = !1) {
        return {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        }
    }
})), n.register("amiIN", (function(e, n) {
    function r(t, e) {
        if (!Array.isArray(e)) return !1;
        const n = e.length;
        if (n !== t.length) return !1;
        for (let r = 0; r < n; r++)
            if (e[r] !== t[r]) return !1;
        return !0
    }
    t(e.exports, "shallowCompare", (function() {
        return r
    }))
})), n.register("4JDTO", (function(e, r) {
    t(e.exports, "animateVisualElement", (function() {
        return p
    }));
    var o = n("aOlnv"),
        i = n("6ZPCy"),
        s = n("3EEnx"),
        a = n("aRDmR"),
        u = n("9iF2d"),
        l = n("6n6hr"),
        c = n("jxOGN");

    function p(t, e, n = {}) {
        let r;
        if (t.notify("AnimationStart", e), Array.isArray(e)) {
            const o = e.map((e => f(t, e, n)));
            r = Promise.all(o)
        } else if ("string" == typeof e) r = f(t, e, n);
        else {
            const o = "function" == typeof e ? (0, i.resolveVariant)(t, e, n.custom) : e;
            r = h(t, o, n)
        }
        return r.then((() => t.notify("AnimationComplete", e)))
    }

    function f(t, e, n = {}) {
        var r;
        const o = (0, i.resolveVariant)(t, e, n.custom);
        let {
            transition: s = t.getDefaultTransition() || {}
        } = o || {};
        n.transitionOverride && (s = n.transitionOverride);
        const a = o ? () => h(t, o, n) : () => Promise.resolve(),
            u = (null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size) ? (r = 0) => {
                const {
                    delayChildren: o = 0,
                    staggerChildren: i,
                    staggerDirection: a
                } = s;
                return function(t, e, n = 0, r = 0, o = 1, i) {
                    const s = [],
                        a = (t.variantChildren.size - 1) * r,
                        u = 1 === o ? (t = 0) => t * r : (t = 0) => a - t * r;
                    return Array.from(t.variantChildren).sort(d).forEach(((t, r) => {
                        t.notify("AnimationStart", e), s.push(f(t, e, {
                            ...i,
                            delay: n + u(r)
                        }).then((() => t.notify("AnimationComplete", e))))
                    })), Promise.all(s)
                }(t, e, o + r, i, a, n)
            } : () => Promise.resolve(),
            {
                when: l
            } = s;
        if (l) {
            const [t, e] = "beforeChildren" === l ? [a, u] : [u, a];
            return t().then(e)
        }
        return Promise.all([a(), u(n.delay)])
    }

    function h(t, e, {
        delay: n = 0,
        transitionOverride: r,
        type: i
    } = {}) {
        var p;
        let {
            transition: f = t.getDefaultTransition(),
            transitionEnd: h,
            ...d
        } = t.makeTargetAnimatable(e);
        const g = t.getValue("willChange");
        r && (f = r);
        const v = [],
            y = i && (null === (p = t.animationState) || void 0 === p ? void 0 : p.getState()[i]);
        for (const e in d) {
            const r = t.getValue(e),
                o = d[e];
            if (!r || void 0 === o || y && m(y, e)) continue;
            const i = {
                delay: n,
                elapsed: 0,
                ...f
            };
            if (window.HandoffAppearAnimations && !r.hasAnimated) {
                const n = t.getProps()[u.optimizedAppearDataAttribute];
                n && (i.elapsed = window.HandoffAppearAnimations(n, e, r, c.sync))
            }
            let p = r.start((0, l.createMotionValueAnimation)(e, r, o, t.shouldReduceMotion && s.transformProps.has(e) ? {
                type: !1
            } : i));
            (0, a.isWillChangeMotionValue)(g) && (g.add(e), p = p.then((() => g.remove(e)))), v.push(p)
        }
        return Promise.all(v).then((() => {
            h && (0, o.setTarget)(t, h)
        }))
    }

    function d(t, e) {
        return t.sortNodePosition(e)
    }

    function m({
        protectedKeys: t,
        needsAnimating: e
    }, n) {
        const r = t.hasOwnProperty(n) && !0 !== e[n];
        return e[n] = !1, r
    }
})), n.register("aOlnv", (function(e, r) {
    t(e.exports, "setTarget", (function() {
        return h
    })), t(e.exports, "checkTargetForNewValues", (function() {
        return d
    })), t(e.exports, "getOrigin", (function() {
        return g
    }));
    var o = n("60loT"),
        i = n("8ZbVs"),
        s = n("9LTQC"),
        a = n("ajNLe"),
        u = n("dg9OD"),
        l = n("ffz0G"),
        c = n("loS3S"),
        p = n("6ZPCy");

    function f(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0, a.motionValue)(n))
    }

    function h(t, e) {
        const n = (0, p.resolveVariant)(t, e);
        let {
            transitionEnd: r = {},
            transition: o = {},
            ...i
        } = n ? t.makeTargetAnimatable(n, !1) : {};
        i = {
            ...i,
            ...r
        };
        for (const e in i) {
            f(t, e, (0, s.resolveFinalValueInKeyframes)(i[e]))
        }
    }

    function d(t, e, n) {
        var r, s;
        const p = Object.keys(e).filter((e => !t.hasValue(e))),
            f = p.length;
        if (f)
            for (let h = 0; h < f; h++) {
                const f = p[h],
                    d = e[f];
                let m = null;
                Array.isArray(d) && (m = d[0]), null === m && (m = null !== (s = null !== (r = n[f]) && void 0 !== r ? r : t.readValue(f)) && void 0 !== s ? s : e[f]), null != m && ("string" == typeof m && ((0, o.isNumericalString)(m) || (0, i.isZeroValueString)(m)) ? m = parseFloat(m) : !(0, c.findValueType)(m) && u.complex.test(d) && (m = (0, l.getAnimatableNone)(f, d)), t.addValue(f, (0, a.motionValue)(m, {
                    owner: t
                })), void 0 === n[f] && (n[f] = m), null !== m && t.setBaseTarget(f, m))
            }
    }

    function m(t, e) {
        if (!e) return;
        return (e[t] || e.default || e).from
    }

    function g(t, e, n) {
        var r;
        const o = {};
        for (const i in t) {
            const t = m(i, e);
            o[i] = void 0 !== t ? t : null === (r = n.getValue(i)) || void 0 === r ? void 0 : r.get()
        }
        return o
    }
})), n.register("60loT", (function(e, n) {
    t(e.exports, "isNumericalString", (function() {
        return r
    }));
    const r = t => /^\-?\d*\.?\d+$/.test(t)
})), n.register("8ZbVs", (function(e, n) {
    t(e.exports, "isZeroValueString", (function() {
        return r
    }));
    const r = t => /^0[^.\s]+$/.test(t)
})), n.register("ajNLe", (function(e, r) {
    t(e.exports, "motionValue", (function() {
        return l
    }));
    var o = n("3GUC0"),
        i = n("jxOGN"),
        s = n("cdNHq"),
        a = n("8AK62");
    class u {
        onChange(t) {
            return this.on("change", t)
        }
        on(t, e) {
            this.events[t] || (this.events[t] = new(0, s.SubscriptionManager));
            const n = this.events[t].add(e);
            return "change" === t ? () => {
                n(), i.sync.read((() => {
                    this.events.change.getSize() || this.stop()
                }))
            } : n
        }
        clearListeners() {
            for (const t in this.events) this.events[t].clear()
        }
        attach(t, e) {
            this.passiveEffect = t, this.stopPassiveEffect = e
        }
        set(t, e = !0) {
            e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
        }
        setWithVelocity(t, e, n) {
            this.set(e), this.prev = t, this.timeDelta = n
        }
        jump(t) {
            this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        get() {
            return this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            return this.canTrackVelocity ? (0, a.velocityPerSecond)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
        }
        start(t) {
            return this.stop(), new Promise((e => {
                this.hasAnimated = !0, this.animation = t(e) || null, this.events.animationStart && this.events.animationStart.notify()
            })).then((() => {
                this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
            }))
        }
        stop() {
            this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
            return !!this.animation
        }
        clearAnimation() {
            this.animation = null
        }
        destroy() {
            this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        constructor(t, e = {}) {
            var n;
            this.version = "8.5.2", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                this.prev = this.current, this.current = t;
                const {
                    delta: n,
                    timestamp: r
                } = o.frameData;
                this.lastUpdated !== r && (this.timeDelta = n, this.lastUpdated = r, i.sync.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
            }, this.scheduleVelocityCheck = () => i.sync.postRender(this.velocityCheck), this.velocityCheck = ({
                timestamp: t
            }) => {
                t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
            }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (n = this.current, !isNaN(parseFloat(n))), this.owner = e.owner
        }
    }

    function l(t, e) {
        return new u(t, e)
    }
})), n.register("3GUC0", (function(e, n) {
    t(e.exports, "frameData", (function() {
        return r
    }));
    const r = {
        delta: 0,
        timestamp: 0
    }
})), n.register("jxOGN", (function(e, r) {
    t(e.exports, "sync", (function() {
        return f
    })), t(e.exports, "cancelSync", (function() {
        return h
    })), t(e.exports, "flushSync", (function() {
        return d
    }));
    var o = n("1iDVS"),
        i = n("64lcU"),
        s = n("3GUC0");
    let a = !0,
        u = !1,
        l = !1;
    const c = ["read", "update", "preRender", "render", "postRender"],
        p = c.reduce(((t, e) => (t[e] = (0, i.createRenderStep)((() => u = !0)), t)), {}),
        f = c.reduce(((t, e) => {
            const n = p[e];
            return t[e] = (t, e = !1, r = !1) => (u || v(), n.schedule(t, e, r)), t
        }), {}),
        h = c.reduce(((t, e) => (t[e] = p[e].cancel, t)), {}),
        d = c.reduce(((t, e) => (t[e] = () => p[e].process(s.frameData), t)), {}),
        m = t => p[t].process(s.frameData),
        g = t => {
            u = !1, s.frameData.delta = a ? o.defaultTimestep : Math.max(Math.min(t - s.frameData.timestamp, 40), 1), s.frameData.timestamp = t, l = !0, c.forEach(m), l = !1, u && (a = !1, (0, o.onNextFrame)(g))
        },
        v = () => {
            u = !0, a = !0, l || (0, o.onNextFrame)(g)
        }
})), n.register("1iDVS", (function(e, n) {
    t(e.exports, "defaultTimestep", (function() {
        return r
    })), t(e.exports, "onNextFrame", (function() {
        return i
    }));
    const r = 1 / 60 * 1e3,
        o = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        i = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(o())), r)
})), n.register("64lcU", (function(e, n) {
    function r(t) {
        let e = [],
            n = [],
            r = 0,
            o = !1,
            i = !1;
        const s = new WeakSet,
            a = {
                schedule: (t, i = !1, a = !1) => {
                    const u = a && o,
                        l = u ? e : n;
                    return i && s.add(t), -1 === l.indexOf(t) && (l.push(t), u && o && (r = e.length)), t
                },
                cancel: t => {
                    const e = n.indexOf(t); - 1 !== e && n.splice(e, 1), s.delete(t)
                },
                process: u => {
                    if (o) i = !0;
                    else {
                        if (o = !0, [e, n] = [n, e], n.length = 0, r = e.length, r)
                            for (let n = 0; n < r; n++) {
                                const r = e[n];
                                r(u), s.has(r) && (a.schedule(r), t())
                            }
                        o = !1, i && (i = !1, a.process(u))
                    }
                }
            };
        return a
    }
    t(e.exports, "createRenderStep", (function() {
        return r
    }))
})), n.register("cdNHq", (function(e, r) {
    t(e.exports, "SubscriptionManager", (function() {
        return i
    }));
    var o = n("hPqTy");
    class i {
        add(t) {
            return (0, o.addUniqueItem)(this.subscriptions, t), () => (0, o.removeItem)(this.subscriptions, t)
        }
        notify(t, e, n) {
            const r = this.subscriptions.length;
            if (r)
                if (1 === r) this.subscriptions[0](t, e, n);
                else
                    for (let o = 0; o < r; o++) {
                        const r = this.subscriptions[o];
                        r && r(t, e, n)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
        constructor() {
            this.subscriptions = []
        }
    }
})), n.register("hPqTy", (function(e, n) {
    function r(t, e) {
        -1 === t.indexOf(e) && t.push(e)
    }

    function o(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
    }

    function i([...t], e, n) {
        const r = e < 0 ? t.length + e : e;
        if (r >= 0 && r < t.length) {
            const r = n < 0 ? t.length + n : n,
                [o] = t.splice(e, 1);
            t.splice(r, 0, o)
        }
        return t
    }
    t(e.exports, "addUniqueItem", (function() {
        return r
    })), t(e.exports, "removeItem", (function() {
        return o
    })), t(e.exports, "moveItem", (function() {
        return i
    }))
})), n.register("8AK62", (function(e, n) {
    function r(t, e) {
        return e ? t * (1e3 / e) : 0
    }
    t(e.exports, "velocityPerSecond", (function() {
        return r
    }))
})), n.register("dg9OD", (function(e, r) {
    t(e.exports, "analyseComplexValue", (function() {
        return l
    })), t(e.exports, "complex", (function() {
        return h
    }));
    var o = n("1fZor"),
        i = n("4IBaC"),
        s = n("cZIyz");
    const a = "${c}",
        u = "${n}";

    function l(t) {
        "number" == typeof t && (t = `${t}`);
        const e = [];
        let n = 0,
            r = 0;
        const l = t.match(s.colorRegex);
        l && (n = l.length, t = t.replace(s.colorRegex, a), e.push(...l.map(o.color.parse)));
        const c = t.match(s.floatRegex);
        return c && (r = c.length, t = t.replace(s.floatRegex, u), e.push(...c.map(i.number.parse))), {
            values: e,
            numColors: n,
            numNumbers: r,
            tokenised: t
        }
    }

    function c(t) {
        return l(t).values
    }

    function p(t) {
        const {
            values: e,
            numColors: n,
            tokenised: r
        } = l(t), i = e.length;
        return t => {
            let e = r;
            for (let r = 0; r < i; r++) e = e.replace(r < n ? a : u, r < n ? o.color.transform(t[r]) : (0, s.sanitize)(t[r]));
            return e
        }
    }
    const f = t => "number" == typeof t ? 0 : t;
    const h = {
        test: function(t) {
            var e, n;
            return isNaN(t) && (0, s.isString)(t) && ((null === (e = t.match(s.floatRegex)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(s.colorRegex)) || void 0 === n ? void 0 : n.length) || 0) > 0
        },
        parse: c,
        createTransformer: p,
        getAnimatableNone: function(t) {
            const e = c(t);
            return p(t)(e.map(f))
        }
    }
})), n.register("1fZor", (function(e, r) {
    t(e.exports, "color", (function() {
        return u
    }));
    var o = n("cZIyz"),
        i = n("aGvbT"),
        s = n("l8fZ9"),
        a = n("49GRF");
    const u = {
        test: t => a.rgba.test(t) || i.hex.test(t) || s.hsla.test(t),
        parse: t => a.rgba.test(t) ? a.rgba.parse(t) : s.hsla.test(t) ? s.hsla.parse(t) : i.hex.parse(t),
        transform: t => (0, o.isString)(t) ? t : t.hasOwnProperty("red") ? a.rgba.transform(t) : s.hsla.transform(t)
    }
})), n.register("aGvbT", (function(e, r) {
    t(e.exports, "hex", (function() {
        return i
    }));
    var o = n("49GRF");
    const i = {
        test: (0, n("8pK8d").isColorString)("#"),
        parse: function(t) {
            let e = "",
                n = "",
                r = "",
                o = "";
            return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), r = t.substring(5, 7), o = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), r = t.substring(3, 4), o = t.substring(4, 5), e += e, n += n, r += r, o += o), {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: o ? parseInt(o, 16) / 255 : 1
            }
        },
        transform: o.rgba.transform
    }
})), n.register("49GRF", (function(e, r) {
    t(e.exports, "rgba", (function() {
        return l
    }));
    var o = n("6wUup"),
        i = n("4IBaC"),
        s = n("cZIyz"),
        a = n("8pK8d");
    const u = {
            ...i.number,
            transform: t => Math.round((t => (0, o.clamp)(0, 255, t))(t))
        },
        l = {
            test: (0, a.isColorString)("rgb", "red"),
            parse: (0, a.splitColor)("red", "green", "blue"),
            transform: ({
                red: t,
                green: e,
                blue: n,
                alpha: r = 1
            }) => "rgba(" + u.transform(t) + ", " + u.transform(e) + ", " + u.transform(n) + ", " + (0, s.sanitize)(i.alpha.transform(r)) + ")"
        }
})), n.register("8pK8d", (function(e, r) {
    t(e.exports, "isColorString", (function() {
        return i
    })), t(e.exports, "splitColor", (function() {
        return s
    }));
    var o = n("cZIyz");
    const i = (t, e) => n => Boolean((0, o.isString)(n) && o.singleColorRegex.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
        s = (t, e, n) => r => {
            if (!(0, o.isString)(r)) return r;
            const [i, s, a, u] = r.match(o.floatRegex);
            return {
                [t]: parseFloat(i),
                [e]: parseFloat(s),
                [n]: parseFloat(a),
                alpha: void 0 !== u ? parseFloat(u) : 1
            }
        }
})), n.register("l8fZ9", (function(e, r) {
    t(e.exports, "hsla", (function() {
        return u
    }));
    var o = n("4IBaC"),
        i = n("gEGeb"),
        s = n("cZIyz"),
        a = n("8pK8d");
    const u = {
        test: (0, a.isColorString)("hsl", "hue"),
        parse: (0, a.splitColor)("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(t) + ", " + i.percent.transform((0, s.sanitize)(e)) + ", " + i.percent.transform((0, s.sanitize)(n)) + ", " + (0, s.sanitize)(o.alpha.transform(r)) + ")"
    }
})), n.register("ffz0G", (function(e, r) {
    t(e.exports, "getAnimatableNone", (function() {
        return a
    }));
    var o = n("dg9OD"),
        i = n("3cr85"),
        s = n("aiFSu");

    function a(t, e) {
        var n;
        let r = (0, s.getDefaultValueType)(t);
        return r !== i.filter && (r = o.complex), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, e)
    }
})), n.register("3cr85", (function(e, r) {
    t(e.exports, "filter", (function() {
        return l
    }));
    var o = n("dg9OD"),
        i = n("cZIyz");
    const s = new Set(["brightness", "contrast", "saturate", "opacity"]);

    function a(t) {
        const [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [r] = n.match(i.floatRegex) || [];
        if (!r) return t;
        const o = n.replace(r, "");
        let a = s.has(e) ? 1 : 0;
        return r !== n && (a *= 100), e + "(" + a + o + ")"
    }
    const u = /([a-z-]*)\(.*?\)/g,
        l = {
            ...o.complex,
            getAnimatableNone: t => {
                const e = t.match(u);
                return e ? e.map(a).join(" ") : t
            }
        }
})), n.register("aiFSu", (function(e, r) {
    t(e.exports, "getDefaultValueType", (function() {
        return a
    }));
    var o = n("1fZor"),
        i = n("3cr85");
    const s = {
            ...n("6lmaA").numberValueTypes,
            color: o.color,
            backgroundColor: o.color,
            outlineColor: o.color,
            fill: o.color,
            stroke: o.color,
            borderColor: o.color,
            borderTopColor: o.color,
            borderRightColor: o.color,
            borderBottomColor: o.color,
            borderLeftColor: o.color,
            filter: i.filter,
            WebkitFilter: i.filter
        },
        a = t => s[t]
})), n.register("loS3S", (function(e, r) {
    t(e.exports, "findValueType", (function() {
        return l
    }));
    var o = n("1fZor"),
        i = n("dg9OD"),
        s = n("aSOa6"),
        a = n("5bebx");
    const u = [...s.dimensionValueTypes, o.color, i.complex],
        l = t => u.find((0, a.testValueType)(t))
})), n.register("aSOa6", (function(e, r) {
    t(e.exports, "dimensionValueTypes", (function() {
        return u
    })), t(e.exports, "findDimensionValueType", (function() {
        return l
    }));
    var o = n("4IBaC"),
        i = n("gEGeb"),
        s = n("5bebx"),
        a = n("7tlml");
    const u = [o.number, i.px, i.percent, i.degrees, i.vw, i.vh, a.auto],
        l = t => u.find((0, s.testValueType)(t))
})), n.register("5bebx", (function(e, n) {
    t(e.exports, "testValueType", (function() {
        return r
    }));
    const r = t => e => e.test(t)
})), n.register("7tlml", (function(e, n) {
    t(e.exports, "auto", (function() {
        return r
    }));
    const r = {
        test: t => "auto" === t,
        parse: t => t
    }
})), n.register("6ZPCy", (function(e, r) {
    t(e.exports, "resolveVariant", (function() {
        return i
    }));
    var o = n("2rqJG");

    function i(t, e, n) {
        const r = t.getProps();
        return (0, o.resolveVariantFromProps)(r, e, void 0 !== n ? n : r.custom, function(t) {
            const e = {};
            return t.values.forEach(((t, n) => e[n] = t.get())), e
        }(t), function(t) {
            const e = {};
            return t.values.forEach(((t, n) => e[n] = t.getVelocity())), e
        }(t))
    }
})), n.register("aRDmR", (function(e, r) {
    t(e.exports, "isWillChangeMotionValue", (function() {
        return i
    }));
    var o = n("inWou");

    function i(t) {
        return Boolean((0, o.isMotionValue)(t) && t.add)
    }
})), n.register("9iF2d", (function(e, r) {
    t(e.exports, "optimizedAppearDataAttribute", (function() {
        return o
    }));
    const o = "data-" + (0, n("7w3Ty").camelToDash)("framerAppearId")
})), n.register("6n6hr", (function(e, r) {
    t(e.exports, "createMotionValueAnimation", (function() {
        return m
    }));
    var o = n("YpDI8"),
        i = n("bqAKI"),
        s = n("ckv8B"),
        a = n("lVA4C"),
        u = n("d4sZK"),
        l = n("gCCt7"),
        c = n("k5Blg"),
        p = n("5YZzE"),
        f = n("vWI91"),
        h = n("aszIE"),
        d = n("e6bx1");
    const m = (t, e, n, r = {}) => m => {
        const g = (0, d.getValueTransition)(r, t) || {},
            v = g.delay || r.delay || 0;
        let {
            elapsed: y = 0
        } = r;
        y -= (0, i.secondsToMilliseconds)(v);
        const x = (0, h.getKeyframes)(e, t, n, g),
            b = x[0],
            V = x[x.length - 1],
            C = (0, f.isAnimatable)(t, b),
            T = (0, f.isAnimatable)(t, V);
        (0, o.warning)(C === T, `You are trying to animate ${t} from "${b}" to "${V}". ${b} is not an animatable value - to enable this animation set ${b} to a value animatable to ${V} via the \`style\` property.`);
        let P = {
            keyframes: x,
            velocity: e.getVelocity(),
            ...g,
            elapsed: y,
            onUpdate: t => {
                e.set(t), g.onUpdate && g.onUpdate(t)
            },
            onComplete: () => {
                m(), g.onComplete && g.onComplete()
            }
        };
        if (!C || !T || s.instantAnimationState.current || !1 === g.type) return (0, u.createInstantAnimation)(P);
        if ("inertia" === g.type) return (0, c.inertia)(P);
        (0, d.isTransitionDefined)(g) || (P = {
            ...P,
            ...(0, p.getDefaultTransition)(t, P)
        }), P.duration && (P.duration = (0, i.secondsToMilliseconds)(P.duration)), P.repeatDelay && (P.repeatDelay = (0, i.secondsToMilliseconds)(P.repeatDelay));
        const S = e.owner,
            E = S && S.current;
        if (S && E instanceof HTMLElement && !(null == S ? void 0 : S.getProps().onUpdate)) {
            const n = (0, a.createAcceleratedAnimation)(e, t, P);
            if (n) return n
        }
        return (0, l.animate)(P)
    }
})), n.register("YpDI8", (function(e, n) {
    t(e.exports, "warning", (function() {
        return r
    })), t(e.exports, "invariant", (function() {
        return o
    }));
    var r = function() {},
        o = function() {}
})), n.register("bqAKI", (function(e, n) {
    t(e.exports, "secondsToMilliseconds", (function() {
        return r
    }));
    const r = t => 1e3 * t
})), n.register("ckv8B", (function(e, n) {
    t(e.exports, "instantAnimationState", (function() {
        return r
    }));
    const r = {
        current: !1
    }
})), n.register("lVA4C", (function(e, r) {
    t(e.exports, "createAcceleratedAnimation", (function() {
        return p
    }));
    var o = n("jxOGN"),
        i = n("gCCt7"),
        s = n("dDXHH"),
        a = n("cIvEq"),
        u = n("6ddmo"),
        l = n("2aoZm");
    const c = new Set(["opacity"]);

    function p(t, e, {
        onUpdate: n,
        onComplete: r,
        ...p
    }) {
        if (!(u.supports.waapi() && c.has(e) && !p.repeatDelay && "mirror" !== p.repeatType && 0 !== p.damping)) return !1;
        let {
            keyframes: f,
            duration: h = 300,
            elapsed: d = 0,
            ease: m
        } = p;
        if ("spring" === p.type || !(0, a.isWaapiSupportedEasing)(p.ease)) {
            if (p.repeat === 1 / 0) return;
            const t = (0, i.animate)({
                ...p,
                elapsed: 0
            });
            let e = {
                done: !1,
                value: f[0]
            };
            const n = [];
            let r = 0;
            for (; !e.done && r < 2e4;) e = t.sample(r), n.push(e.value), r += 10;
            f = n, h = r - 10, m = "linear"
        }
        const g = (0, s.animateStyle)(t.owner.current, e, f, {
            ...p,
            delay: -d,
            duration: h,
            ease: m
        });
        return g.onfinish = () => {
            t.set((0, l.getFinalKeyframe)(f, p)), r && r()
        }, {
            get currentTime() {
                return g.currentTime || 0
            },
            set currentTime(t) {
                g.currentTime = t
            },
            stop: () => {
                const {
                    currentTime: e
                } = g;
                if (e) {
                    const n = (0, i.animate)({
                        ...p,
                        autoplay: !1
                    });
                    t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
                }
                o.sync.update((() => g.cancel()))
            }
        }
    }
})), n.register("gCCt7", (function(e, r) {
    t(e.exports, "animate", (function() {
        return f
    }));
    var o = n("f5NdP"),
        i = n("bwSBE"),
        s = n("9XQ3S"),
        a = n("jxOGN"),
        u = n("9zT7F");
    const l = {
        decay: s.decay,
        keyframes: o.keyframes,
        tween: o.keyframes,
        spring: i.spring
    };

    function c(t, e, n = 0) {
        return t - e - n
    }
    const p = t => {
        const e = ({
            delta: e
        }) => t(e);
        return {
            start: () => a.sync.update(e, !0),
            stop: () => a.cancelSync.update(e)
        }
    };

    function f({
        duration: t,
        driver: e = p,
        elapsed: n = 0,
        repeat: r = 0,
        repeatType: i = "loop",
        repeatDelay: s = 0,
        keyframes: a,
        autoplay: f = !0,
        onPlay: h,
        onStop: d,
        onComplete: m,
        onRepeat: g,
        onUpdate: v,
        type: y = "keyframes",
        ...x
    }) {
        var b, V;
        const C = n;
        let T, P, S = 0,
            E = t,
            w = !1,
            A = !0;
        const D = l[a.length > 2 ? "keyframes" : y] || o.keyframes,
            M = a[0],
            R = a[a.length - 1];
        let B = {
            done: !1,
            value: M
        };
        (null === (V = (b = D).needsInterpolation) || void 0 === V ? void 0 : V.call(b, M, R)) && (P = (0, u.interpolate)([0, 100], [M, R], {
            clamp: !1
        }), a = [0, 100]);
        const k = D({
            ...x,
            duration: t,
            keyframes: a
        });

        function L() {
            S++, "reverse" === i ? (A = S % 2 == 0, n = function(t, e = 0, n = 0, r = !0) {
                return r ? c(e + -t, e, n) : e - (t - e) + n
            }(n, E, s, A)) : (n = c(n, E, s), "mirror" === i && k.flipTarget()), w = !1, g && g()
        }

        function I(t) {
            A || (t = -t), n += t, w || (B = k.next(Math.max(0, n)), P && (B.value = P(B.value)), w = A ? B.done : n <= 0), v && v(B.value), w && (0 === S && (E = void 0 !== E ? E : n), S < r ? function(t, e, n, r) {
                return r ? t >= e + n : t <= -n
            }(n, E, s, A) && L() : (T && T.stop(), m && m()))
        }
        return f && (h && h(), T = e(I), T.start()), {
            stop: () => {
                d && d(), T && T.stop()
            },
            set currentTime(t) {
                n = C, I(t)
            },
            sample: e => {
                n = C;
                const r = t && "number" == typeof t ? Math.max(.5 * t, 50) : 50;
                let o = 0;
                for (I(0); o <= e;) {
                    const t = e - o;
                    I(Math.min(t, r)), o += r
                }
                return B
            }
        }
    }
})), n.register("f5NdP", (function(e, r) {
    t(e.exports, "keyframes", (function() {
        return a
    }));
    var o = n("9M10h"),
        i = n("9zT7F"),
        s = n("jZubG");

    function a({
        keyframes: t,
        ease: e = o.easeInOut,
        times: n,
        duration: r = 300
    }) {
        t = [...t];
        const a = (0, s.isEasingArray)(e) ? e.map(s.easingDefinitionToFunction) : (0, s.easingDefinitionToFunction)(e),
            u = {
                done: !1,
                value: t[0]
            },
            l = function(t, e) {
                return t.map((t => t * e))
            }(n && n.length === t.length ? n : function(t) {
                const e = t.length;
                return t.map(((t, n) => 0 !== n ? n / (e - 1) : 0))
            }(t), r);

        function c() {
            return (0, i.interpolate)(l, t, {
                ease: Array.isArray(a) ? a : (e = t, n = a, e.map((() => n || o.easeInOut)).splice(0, e.length - 1))
            });
            var e, n
        }
        let p = c();
        return {
            next: t => (u.value = p(t), u.done = t >= r, u),
            flipTarget: () => {
                t.reverse(), p = c()
            }
        }
    }
})), n.register("9M10h", (function(e, r) {
    t(e.exports, "easeIn", (function() {
        return s
    })), t(e.exports, "easeOut", (function() {
        return a
    })), t(e.exports, "easeInOut", (function() {
        return u
    }));
    var o = n("46nwR"),
        i = n("jzuXx");
    const s = t => t * t,
        a = (0, i.reverseEasing)(s),
        u = (0, o.mirrorEasing)(s)
})), n.register("46nwR", (function(e, n) {
    t(e.exports, "mirrorEasing", (function() {
        return r
    }));
    const r = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
})), n.register("jzuXx", (function(e, n) {
    t(e.exports, "reverseEasing", (function() {
        return r
    }));
    const r = t => e => 1 - t(1 - e)
})), n.register("9zT7F", (function(e, r) {
    t(e.exports, "interpolate", (function() {
        return d
    }));
    var o = n("YpDI8"),
        i = n("1fZor"),
        s = n("6wUup"),
        a = n("jLuHw"),
        u = n("2gq2A"),
        l = n("bOT2N"),
        c = n("ca1Ym"),
        p = n("jf17W");
    const f = (t, e) => n => (0, a.mix)(t, e, n);

    function h(t, e, n) {
        const r = [],
            o = n || ("number" == typeof(s = t[0]) ? f : "string" == typeof s ? i.color.test(s) ? u.mixColor : l.mixComplex : Array.isArray(s) ? l.mixArray : "object" == typeof s ? l.mixObject : f);
        var s;
        const a = t.length - 1;
        for (let n = 0; n < a; n++) {
            let i = o(t[n], t[n + 1]);
            if (e) {
                const t = Array.isArray(e) ? e[n] : e;
                i = (0, c.pipe)(t, i)
            }
            r.push(i)
        }
        return r
    }

    function d(t, e, {
        clamp: n = !0,
        ease: r,
        mixer: i
    } = {}) {
        const a = t.length;
        (0, o.invariant)(a === e.length, "Both input and output ranges must be the same length"), (0, o.invariant)(!r || !Array.isArray(r) || r.length === a - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[a - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const u = h(e, r, i),
            l = u.length,
            c = e => {
                let n = 0;
                if (l > 1)
                    for (; n < t.length - 2 && !(e < t[n + 1]); n++);
                const r = (0, p.progress)(t[n], t[n + 1], e);
                return u[n](r)
            };
        return n ? e => c((0, s.clamp)(t[0], t[a - 1], e)) : c
    }
})), n.register("jLuHw", (function(e, n) {
    t(e.exports, "mix", (function() {
        return r
    }));
    const r = (t, e, n) => -n * t + n * e + t
})), n.register("2gq2A", (function(e, r) {
    t(e.exports, "mixColor", (function() {
        return h
    }));
    var o = n("jLuHw"),
        i = n("YpDI8"),
        s = n("9XvTE"),
        a = n("aGvbT"),
        u = n("49GRF"),
        l = n("l8fZ9");
    const c = (t, e, n) => {
            const r = t * t;
            return Math.sqrt(Math.max(0, n * (e * e - r) + r))
        },
        p = [a.hex, u.rgba, l.hsla];

    function f(t) {
        const e = (n = t, p.find((t => t.test(n))));
        var n;
        (0, i.invariant)(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
        let r = e.parse(t);
        return e === l.hsla && (r = (0, s.hslaToRgba)(r)), r
    }
    const h = (t, e) => {
        const n = f(t),
            r = f(e),
            i = {
                ...n
            };
        return t => (i.red = c(n.red, r.red, t), i.green = c(n.green, r.green, t), i.blue = c(n.blue, r.blue, t), i.alpha = (0, o.mix)(n.alpha, r.alpha, t), u.rgba.transform(i))
    }
})), n.register("9XvTE", (function(e, n) {
    function r(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
    }

    function o({
        hue: t,
        saturation: e,
        lightness: n,
        alpha: o
    }) {
        t /= 360, n /= 100;
        let i = 0,
            s = 0,
            a = 0;
        if (e /= 100) {
            const o = n < .5 ? n * (1 + e) : n + e - n * e,
                u = 2 * n - o;
            i = r(u, o, t + 1 / 3), s = r(u, o, t), a = r(u, o, t - 1 / 3)
        } else i = s = a = n;
        return {
            red: Math.round(255 * i),
            green: Math.round(255 * s),
            blue: Math.round(255 * a),
            alpha: o
        }
    }
    t(e.exports, "hslaToRgba", (function() {
        return o
    }))
})), n.register("bOT2N", (function(e, r) {
    t(e.exports, "mixComplex", (function() {
        return h
    })), t(e.exports, "mixArray", (function() {
        return p
    })), t(e.exports, "mixObject", (function() {
        return f
    }));
    var o = n("jLuHw"),
        i = n("2gq2A"),
        s = n("ca1Ym"),
        a = n("YpDI8"),
        u = n("1fZor"),
        l = n("dg9OD");

    function c(t, e) {
        return "number" == typeof t ? n => (0, o.mix)(t, e, n) : u.color.test(t) ? (0, i.mixColor)(t, e) : h(t, e)
    }
    const p = (t, e) => {
            const n = [...t],
                r = n.length,
                o = t.map(((t, n) => c(t, e[n])));
            return t => {
                for (let e = 0; e < r; e++) n[e] = o[e](t);
                return n
            }
        },
        f = (t, e) => {
            const n = {
                    ...t,
                    ...e
                },
                r = {};
            for (const o in n) void 0 !== t[o] && void 0 !== e[o] && (r[o] = c(t[o], e[o]));
            return t => {
                for (const e in r) n[e] = r[e](t);
                return n
            }
        },
        h = (t, e) => {
            const n = l.complex.createTransformer(e),
                r = (0, l.analyseComplexValue)(t),
                o = (0, l.analyseComplexValue)(e);
            return r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? (0, s.pipe)(p(r.values, o.values), n) : ((0, a.warning)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?e:t}`)
        }
})), n.register("jf17W", (function(e, n) {
    t(e.exports, "progress", (function() {
        return r
    }));
    const r = (t, e, n) => {
        const r = e - t;
        return 0 === r ? 1 : (n - t) / r
    }
})), n.register("jZubG", (function(e, r) {
    t(e.exports, "easingDefinitionToFunction", (function() {
        return f
    })), t(e.exports, "isEasingArray", (function() {
        return h
    }));
    var o = n("YpDI8"),
        i = n("h1CaI"),
        s = n("k88Qd"),
        a = n("9M10h"),
        u = n("4eMpm"),
        l = n("1elms"),
        c = n("bimgh");
    const p = {
            linear: s.noop,
            easeIn: a.easeIn,
            easeInOut: a.easeInOut,
            easeOut: a.easeOut,
            circIn: u.circIn,
            circInOut: u.circInOut,
            circOut: u.circOut,
            backIn: l.backIn,
            backInOut: l.backInOut,
            backOut: l.backOut,
            anticipate: c.anticipate
        },
        f = t => {
            if (Array.isArray(t)) {
                (0, o.invariant)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                const [e, n, r, s] = t;
                return (0, i.cubicBezier)(e, n, r, s)
            }
            return "string" == typeof t ? ((0, o.invariant)(void 0 !== p[t], `Invalid easing type '${t}'`), p[t]) : t
        },
        h = t => Array.isArray(t) && "number" != typeof t[0]
})), n.register("h1CaI", (function(e, r) {
    t(e.exports, "cubicBezier", (function() {
        return s
    }));
    var o = n("k88Qd");
    const i = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

    function s(t, e, n, r) {
        if (t === e && n === r) return o.noop;
        const s = e => function(t, e, n, r, o) {
            let s, a, u = 0;
            do {
                a = e + (n - e) / 2, s = i(a, r, o) - t, s > 0 ? n = a : e = a
            } while (Math.abs(s) > 1e-7 && ++u < 12);
            return a
        }(e, 0, 1, t, n);
        return t => 0 === t || 1 === t ? t : i(s(t), e, r)
    }
})), n.register("k88Qd", (function(e, n) {
    t(e.exports, "noop", (function() {
        return r
    }));
    const r = t => t
})), n.register("4eMpm", (function(e, r) {
    t(e.exports, "circIn", (function() {
        return s
    })), t(e.exports, "circOut", (function() {
        return a
    })), t(e.exports, "circInOut", (function() {
        return u
    }));
    var o = n("46nwR"),
        i = n("jzuXx");
    const s = t => 1 - Math.sin(Math.acos(t)),
        a = (0, i.reverseEasing)(s),
        u = (0, o.mirrorEasing)(a)
})), n.register("1elms", (function(e, r) {
    t(e.exports, "backOut", (function() {
        return a
    })), t(e.exports, "backIn", (function() {
        return u
    })), t(e.exports, "backInOut", (function() {
        return l
    }));
    var o = n("h1CaI"),
        i = n("46nwR"),
        s = n("jzuXx");
    const a = (0, o.cubicBezier)(.33, 1.53, .69, .99),
        u = (0, s.reverseEasing)(a),
        l = (0, i.mirrorEasing)(u)
})), n.register("bimgh", (function(e, r) {
    t(e.exports, "anticipate", (function() {
        return i
    }));
    var o = n("1elms");
    const i = t => (t *= 2) < 1 ? .5 * (0, o.backIn)(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
})), n.register("bwSBE", (function(e, r) {
    t(e.exports, "spring", (function() {
        return l
    }));
    var o = n("eDAcb"),
        i = n("8AK62");
    const s = ["duration", "bounce"],
        a = ["stiffness", "damping", "mass"];

    function u(t, e) {
        return e.some((e => void 0 !== t[e]))
    }

    function l({
        keyframes: t,
        restDelta: e,
        restSpeed: n,
        ...r
    }) {
        let l = t[0],
            p = t[t.length - 1];
        const f = {
                done: !1,
                value: l
            },
            {
                stiffness: h,
                damping: d,
                mass: m,
                velocity: g,
                duration: v,
                isResolvedFromDuration: y
            } = function(t) {
                let e = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!u(t, a) && u(t, s)) {
                    const n = (0, o.findSpring)(t);
                    e = {
                        ...e,
                        ...n,
                        velocity: 0,
                        mass: 1
                    }, e.isResolvedFromDuration = !0
                }
                return e
            }(r);
        let x = c,
            b = g ? -g / 1e3 : 0;
        const V = d / (2 * Math.sqrt(h * m));

        function C() {
            const t = p - l,
                r = Math.sqrt(h / m) / 1e3,
                i = Math.abs(t) < 5;
            if (n || (n = i ? .01 : 2), e || (e = i ? .005 : .5), V < 1) {
                const e = (0, o.calcAngularFreq)(r, V);
                x = n => {
                    const o = Math.exp(-V * r * n);
                    return p - o * ((b + V * r * t) / e * Math.sin(e * n) + t * Math.cos(e * n))
                }
            } else if (1 === V) x = e => p - Math.exp(-r * e) * (t + (b + r * t) * e);
            else {
                const e = r * Math.sqrt(V * V - 1);
                x = n => {
                    const o = Math.exp(-V * r * n),
                        i = Math.min(e * n, 300);
                    return p - o * ((b + V * r * t) * Math.sinh(i) + e * t * Math.cosh(i)) / e
                }
            }
        }
        return C(), {
            next: t => {
                const r = x(t);
                if (y) f.done = t >= v;
                else {
                    let o = b;
                    if (0 !== t)
                        if (V < 1) {
                            const e = Math.max(0, t - 5);
                            o = (0, i.velocityPerSecond)(r - x(e), t - e)
                        } else o = 0;
                    const s = Math.abs(o) <= n,
                        a = Math.abs(p - r) <= e;
                    f.done = s && a
                }
                return f.value = f.done ? p : r, f
            },
            flipTarget: () => {
                b = -b, [l, p] = [p, l], C()
            }
        }
    }
    l.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
    const c = t => 0
})), n.register("eDAcb", (function(e, r) {
    t(e.exports, "findSpring", (function() {
        return a
    })), t(e.exports, "calcAngularFreq", (function() {
        return u
    }));
    var o = n("YpDI8"),
        i = n("6wUup");
    const s = .001;

    function a({
        duration: t = 800,
        bounce: e = .25,
        velocity: n = 0,
        mass: r = 1
    }) {
        let a, l;
        (0, o.warning)(t <= 1e4, "Spring duration must be 10 seconds or less");
        let c = 1 - e;
        c = (0, i.clamp)(.05, 1, c), t = (0, i.clamp)(.01, 10, t / 1e3), c < 1 ? (a = e => {
            const r = e * c,
                o = r * t,
                i = r - n,
                a = u(e, c),
                l = Math.exp(-o);
            return s - i / a * l
        }, l = e => {
            const r = e * c * t,
                o = r * n + n,
                i = Math.pow(c, 2) * Math.pow(e, 2) * t,
                l = Math.exp(-r),
                p = u(Math.pow(e, 2), c);
            return (-a(e) + s > 0 ? -1 : 1) * ((o - i) * l) / p
        }) : (a = e => Math.exp(-e * t) * ((e - n) * t + 1) - .001, l = e => Math.exp(-e * t) * (t * t * (n - e)));
        const p = function(t, e, n) {
            let r = n;
            for (let n = 1; n < 12; n++) r -= t(r) / e(r);
            return r
        }(a, l, 5 / t);
        if (t *= 1e3, isNaN(p)) return {
            stiffness: 100,
            damping: 10,
            duration: t
        };
        {
            const e = Math.pow(p, 2) * r;
            return {
                stiffness: e,
                damping: 2 * c * Math.sqrt(r * e),
                duration: t
            }
        }
    }

    function u(t, e) {
        return t * Math.sqrt(1 - e * e)
    }
})), n.register("9XQ3S", (function(e, n) {
    function r({
        keyframes: t = [0],
        velocity: e = 0,
        power: n = .8,
        timeConstant: r = 350,
        restDelta: o = .5,
        modifyTarget: i
    }) {
        const s = t[0],
            a = {
                done: !1,
                value: s
            };
        let u = n * e;
        const l = s + u,
            c = void 0 === i ? l : i(l);
        return c !== l && (u = c - s), {
            next: t => {
                const e = -u * Math.exp(-t / r);
                return a.done = !(e > o || e < -o), a.value = a.done ? c : c + e, a
            },
            flipTarget: () => {}
        }
    }
    t(e.exports, "decay", (function() {
        return r
    }))
})), n.register("dDXHH", (function(e, r) {
    t(e.exports, "animateStyle", (function() {
        return i
    }));
    var o = n("cIvEq");

    function i(t, e, n, {
        delay: r = 0,
        duration: i,
        repeat: s = 0,
        repeatType: a = "loop",
        ease: u,
        times: l
    } = {}) {
        return t.animate({
            [e]: n,
            offset: l
        }, {
            delay: r,
            duration: i,
            easing: (0, o.mapEasingToNativeEasing)(u),
            fill: "both",
            iterations: s + 1,
            direction: "reverse" === a ? "alternate" : "normal"
        })
    }
})), n.register("cIvEq", (function(e, n) {
    function r(t) {
        return !t || Array.isArray(t) || "string" == typeof t && i[t]
    }
    t(e.exports, "isWaapiSupportedEasing", (function() {
        return r
    })), t(e.exports, "mapEasingToNativeEasing", (function() {
        return s
    }));
    const o = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`,
        i = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: o([0, .65, .55, 1]),
            circOut: o([.55, 0, 1, .45]),
            backIn: o([.31, .01, .66, -.59]),
            backOut: o([.33, 1.53, .69, .99])
        };

    function s(t) {
        if (t) return Array.isArray(t) ? o(t) : i[t]
    }
})), n.register("6ddmo", (function(e, n) {
    t(e.exports, "supports", (function() {
        return i
    }));
    const r = {
            waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        o = {},
        i = {};
    for (const t in r) i[t] = () => (void 0 === o[t] && (o[t] = r[t]()), o[t])
})), n.register("2aoZm", (function(e, n) {
    function r(t, {
        repeat: e,
        repeatType: n = "loop"
    }) {
        return t[e && "loop" !== n && e % 2 == 1 ? 0 : t.length - 1]
    }
    t(e.exports, "getFinalKeyframe", (function() {
        return r
    }))
})), n.register("d4sZK", (function(e, r) {
    t(e.exports, "createInstantAnimation", (function() {
        return i
    }));
    var o = n("5l8kJ");

    function i({
        keyframes: t,
        elapsed: e,
        onUpdate: n,
        onComplete: r
    }) {
        const i = () => {
            n && n(t[t.length - 1]), r && r()
        };
        return e ? {
            stop: (0, o.delay)(i, -e)
        } : i()
    }
})), n.register("5l8kJ", (function(e, r) {
    t(e.exports, "delay", (function() {
        return i
    }));
    var o = n("jxOGN");

    function i(t, e) {
        const n = performance.now(),
            r = ({
                timestamp: i
            }) => {
                const s = i - n;
                s >= e && (o.cancelSync.read(r), t(s - e))
            };
        return o.sync.read(r, !0), () => o.cancelSync.read(r)
    }
})), n.register("k5Blg", (function(e, r) {
    t(e.exports, "inertia", (function() {
        return a
    }));
    var o = n("gCCt7"),
        i = n("8AK62"),
        s = n("3GUC0");

    function a({
        keyframes: t,
        velocity: e = 0,
        min: n,
        max: r,
        power: a = .8,
        timeConstant: u = 750,
        bounceStiffness: l = 500,
        bounceDamping: c = 10,
        restDelta: p = 1,
        modifyTarget: f,
        driver: h,
        onUpdate: d,
        onComplete: m,
        onStop: g
    }) {
        const v = t[0];
        let y;

        function x(t) {
            return void 0 !== n && t < n || void 0 !== r && t > r
        }

        function b(t) {
            return void 0 === n ? r : void 0 === r || Math.abs(n - t) < Math.abs(r - t) ? n : r
        }

        function V(t) {
            null == y || y.stop(), y = (0, o.animate)({
                keyframes: [0, 1],
                velocity: 0,
                ...t,
                driver: h,
                onUpdate: e => {
                    var n;
                    null == d || d(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                },
                onComplete: m,
                onStop: g
            })
        }

        function C(t) {
            V({
                type: "spring",
                stiffness: l,
                damping: c,
                restDelta: p,
                ...t
            })
        }
        if (x(v)) C({
            velocity: e,
            keyframes: [v, b(v)]
        });
        else {
            let t = a * e + v;
            void 0 !== f && (t = f(t));
            const r = b(t),
                o = r === n ? -1 : 1;
            let l, c;
            const h = t => {
                l = c, c = t, e = (0, i.velocityPerSecond)(t - l, s.frameData.delta), (1 === o && t > r || -1 === o && t < r) && C({
                    keyframes: [t, r],
                    velocity: e
                })
            };
            V({
                type: "decay",
                keyframes: [v, 0],
                velocity: e,
                timeConstant: u,
                power: a,
                restDelta: p,
                modifyTarget: f,
                onUpdate: x(t) ? h : void 0
            })
        }
        return {
            stop: () => null == y ? void 0 : y.stop()
        }
    }
})), n.register("5YZzE", (function(e, n) {
    t(e.exports, "getDefaultTransition", (function() {
        return u
    }));
    const r = () => ({
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }),
        o = t => ({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        }),
        i = () => ({
            type: "keyframes",
            ease: "linear",
            duration: .3
        }),
        s = {
            type: "keyframes",
            duration: .8
        },
        a = {
            x: r,
            y: r,
            z: r,
            rotate: r,
            rotateX: r,
            rotateY: r,
            rotateZ: r,
            scaleX: o,
            scaleY: o,
            scale: o,
            opacity: i,
            backgroundColor: i,
            color: i,
            default: o
        },
        u = (t, {
            keyframes: e
        }) => {
            if (e.length > 2) return s;
            return (a[t] || a.default)(e[1])
        }
})), n.register("vWI91", (function(e, r) {
    t(e.exports, "isAnimatable", (function() {
        return i
    }));
    var o = n("dg9OD");
    const i = (t, e) => "zIndex" !== t && (!("number" != typeof e && !Array.isArray(e)) || !("string" != typeof e || !o.complex.test(e) || e.startsWith("url(")))
})), n.register("aszIE", (function(e, r) {
    t(e.exports, "getKeyframes", (function() {
        return a
    }));
    var o = n("ffz0G"),
        i = n("vWI91"),
        s = n("e6bx1");

    function a(t, e, n, r) {
        const a = (0, i.isAnimatable)(e, n);
        let u = void 0 !== r.from ? r.from : t.get();
        return "none" === u && a && "string" == typeof n ? u = (0, o.getAnimatableNone)(e, n) : (0, s.isZero)(u) && "string" == typeof n ? u = (0, s.getZeroUnit)(n) : !Array.isArray(n) && (0, s.isZero)(n) && "string" == typeof u && (n = (0, s.getZeroUnit)(u)), Array.isArray(n) ? (null === n[0] && (n[0] = u), n) : [u, n]
    }
})), n.register("e6bx1", (function(e, r) {
    t(e.exports, "isTransitionDefined", (function() {
        return i
    })), t(e.exports, "isZero", (function() {
        return s
    })), t(e.exports, "getZeroUnit", (function() {
        return a
    })), t(e.exports, "getValueTransition", (function() {
        return u
    }));
    var o = n("ffz0G");

    function i({
        when: t,
        delay: e,
        delayChildren: n,
        staggerChildren: r,
        staggerDirection: o,
        repeat: i,
        repeatType: s,
        repeatDelay: a,
        from: u,
        elapsed: l,
        ...c
    }) {
        return !!Object.keys(c).length
    }

    function s(t) {
        return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
    }

    function a(t) {
        return "number" == typeof t ? 0 : (0, o.getAnimatableNone)("", t)
    }

    function u(t, e) {
        return t[e] || t.default || t
    }
})), n.register("6vhPW", (function(e, r) {
    t(e.exports, "drag", (function() {
        return a
    }));
    var o = n("hk4yW"),
        i = n("klI55"),
        s = n("8P6pG");
    const a = {
        pan: (0, s.makeRenderlessComponent)(i.usePanGesture),
        drag: (0, s.makeRenderlessComponent)(o.useDrag)
    }
})), n.register("hk4yW", (function(e, r) {
    t(e.exports, "useDrag", (function() {
        return a
    }));
    var o = n("fywoC"),
        i = n("lJmpt"),
        s = n("8ATQJ");

    function a(t) {
        const {
            dragControls: e,
            visualElement: n
        } = t, r = (0, s.useConstant)((() => new(0, i.VisualElementDragControls)(n)));
        (0, o.useEffect)((() => e && e.subscribe(r)), [r, e]), (0, o.useEffect)((() => r.addListeners()), [r])
    }
})), n.register("lJmpt", (function(e, r) {
    t(e.exports, "VisualElementDragControls", (function() {
        return C
    }));
    var o = n("YpDI8"),
        i = n("9Lg3f"),
        s = n("1uIYz"),
        a = n("Wlprs"),
        u = n("2o0ZO"),
        l = n("fqFZR"),
        c = n("8atAw"),
        p = n("7731b"),
        f = n("9fZ27"),
        h = n("a2hGz"),
        d = n("dsLRv"),
        m = n("iqWQQ"),
        g = n("f3KHs"),
        v = n("Og3HR"),
        y = n("jLuHw"),
        x = n("gEGeb"),
        b = n("6n6hr");
    const V = new WeakMap;
    class C {
        start(t, {
            snapToCursor: e = !1
        } = {}) {
            if (!1 === this.visualElement.isPresent) return;
            this.panSession = new(0, i.PanSession)(t, {
                onSessionStart: t => {
                    this.stopAnimation(), e && this.snapToCursor((0, d.extractEventInfo)(t, "page").point)
                },
                onStart: (t, e) => {
                    var n;
                    const {
                        drag: r,
                        dragPropagation: o,
                        onDragStart: i
                    } = this.getProps();
                    (!r || o || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = (0, s.getGlobalLock)(r), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), (0, f.eachAxis)((t => {
                        var e, n;
                        let r = this.getAxisMotionValue(t).get() || 0;
                        if (x.percent.test(r)) {
                            const o = null === (n = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.layoutBox[t];
                            if (o) {
                                r = (0, v.calcLength)(o) * (parseFloat(r) / 100)
                            }
                        }
                        this.originPoint[t] = r
                    })), null == i || i(t, e), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(c.AnimationType.Drag, !0))
                },
                onMove: (t, e) => {
                    const {
                        dragPropagation: n,
                        dragDirectionLock: r,
                        onDirectionLock: o,
                        onDrag: i
                    } = this.getProps();
                    if (!n && !this.openGlobalLock) return;
                    const {
                        offset: s
                    } = e;
                    if (r && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                        let n = null;
                        Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x");
                        return n
                    }(s), void(null !== this.currentDirection && (null == o || o(this.currentDirection)));
                    this.updateAxis("x", e.point, s), this.updateAxis("y", e.point, s), this.visualElement.render(), null == i || i(t, e)
                },
                onSessionEnd: (t, e) => this.stop(t, e)
            }, {
                transformPagePoint: this.visualElement.getTransformPagePoint()
            })
        }
        stop(t, e) {
            const n = this.isDragging;
            if (this.cancel(), !n) return;
            const {
                velocity: r
            } = e;
            this.startAnimation(r);
            const {
                onDragEnd: o
            } = this.getProps();
            null == o || o(t, e)
        }
        cancel() {
            var t, e;
            this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0;
            const {
                dragPropagation: n
            } = this.getProps();
            !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(c.AnimationType.Drag, !1)
        }
        updateAxis(t, e, n) {
            const {
                drag: r
            } = this.getProps();
            if (!n || !T(t, r, this.currentDirection)) return;
            const o = this.getAxisMotionValue(t);
            let i = this.originPoint[t] + n[t];
            this.constraints && this.constraints[t] && (i = (0, l.applyConstraints)(i, this.constraints[t], this.elastic[t])), o.set(i)
        }
        resolveConstraints() {
            const {
                dragConstraints: t,
                dragElastic: e
            } = this.getProps(), {
                layout: n
            } = this.visualElement.projection || {}, r = this.constraints;
            t && (0, a.isRefObject)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !n) && (0, l.calcRelativeConstraints)(n.layoutBox, t), this.elastic = (0, l.resolveDragElastic)(e), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && (0, f.eachAxis)((t => {
                this.getAxisMotionValue(t) && (this.constraints[t] = (0, l.rebaseAxisConstraints)(n.layoutBox[t], this.constraints[t]))
            }))
        }
        resolveRefConstraints() {
            const {
                dragConstraints: t,
                onMeasureDragConstraints: e
            } = this.getProps();
            if (!t || !(0, a.isRefObject)(t)) return !1;
            const n = t.current;
            (0, o.invariant)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
            const {
                projection: r
            } = this.visualElement;
            if (!r || !r.layout) return !1;
            const i = (0, h.measurePageBox)(n, r.root, this.visualElement.getTransformPagePoint());
            let s = (0, l.calcViewportConstraints)(r.layout.layoutBox, i);
            if (e) {
                const t = e((0, m.convertBoxToBoundingBox)(s));
                this.hasMutatedConstraints = !!t, t && (s = (0, m.convertBoundingBoxToBox)(t))
            }
            return s
        }
        startAnimation(t) {
            const {
                drag: e,
                dragMomentum: n,
                dragElastic: r,
                dragTransition: o,
                dragSnapToOrigin: i,
                onDragTransitionEnd: s
            } = this.getProps(), a = this.constraints || {}, u = (0, f.eachAxis)((s => {
                if (!T(s, e, this.currentDirection)) return;
                let u = (null == a ? void 0 : a[s]) || {};
                i && (u = {
                    min: 0,
                    max: 0
                });
                const l = r ? 200 : 1e6,
                    c = r ? 40 : 1e7,
                    p = {
                        type: "inertia",
                        velocity: n ? t[s] : 0,
                        bounceStiffness: l,
                        bounceDamping: c,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...o,
                        ...u
                    };
                return this.startAxisValueAnimation(s, p)
            }));
            return Promise.all(u).then(s)
        }
        startAxisValueAnimation(t, e) {
            const n = this.getAxisMotionValue(t);
            return n.start((0, b.createMotionValueAnimation)(t, n, 0, e))
        }
        stopAnimation() {
            (0, f.eachAxis)((t => this.getAxisMotionValue(t).stop()))
        }
        getAxisMotionValue(t) {
            var e;
            const n = "_drag" + t.toUpperCase(),
                r = this.visualElement.getProps()[n];
            return r || this.visualElement.getValue(t, (null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) || 0)
        }
        snapToCursor(t) {
            (0, f.eachAxis)((e => {
                const {
                    drag: n
                } = this.getProps();
                if (!T(e, n, this.currentDirection)) return;
                const {
                    projection: r
                } = this.visualElement, o = this.getAxisMotionValue(e);
                if (r && r.layout) {
                    const {
                        min: n,
                        max: i
                    } = r.layout.layoutBox[e];
                    o.set(t[e] - (0, y.mix)(n, i, .5))
                }
            }))
        }
        scalePositionWithinConstraints() {
            var t;
            if (!this.visualElement.current) return;
            const {
                drag: e,
                dragConstraints: n
            } = this.getProps(), {
                projection: r
            } = this.visualElement;
            if (!(0, a.isRefObject)(n) || !r || !this.constraints) return;
            this.stopAnimation();
            const o = {
                x: 0,
                y: 0
            };
            (0, f.eachAxis)((t => {
                const e = this.getAxisMotionValue(t);
                if (e) {
                    const n = e.get();
                    o[t] = (0, l.calcOrigin)({
                        min: n,
                        max: n
                    }, this.constraints[t])
                }
            }));
            const {
                transformTemplate: i
            } = this.visualElement.getProps();
            this.visualElement.current.style.transform = i ? i({}, "") : "none", null === (t = r.root) || void 0 === t || t.updateScroll(), r.updateLayout(), this.resolveConstraints(), (0, f.eachAxis)((t => {
                if (!T(t, e, null)) return;
                const n = this.getAxisMotionValue(t),
                    {
                        min: r,
                        max: i
                    } = this.constraints[t];
                n.set((0, y.mix)(r, i, o[t]))
            }))
        }
        addListeners() {
            var t;
            if (!this.visualElement.current) return;
            V.set(this.visualElement, this);
            const e = this.visualElement.current,
                n = (0, u.addPointerEvent)(e, "pointerdown", (t => {
                    const {
                        drag: e,
                        dragListener: n = !0
                    } = this.getProps();
                    e && n && this.start(t)
                })),
                r = () => {
                    const {
                        dragConstraints: t
                    } = this.getProps();
                    (0, a.isRefObject)(t) && (this.constraints = this.resolveRefConstraints())
                },
                {
                    projection: o
                } = this.visualElement,
                i = o.addEventListener("measure", r);
            o && !o.layout && (null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout()), r();
            const s = (0, g.addDomEvent)(window, "resize", (() => this.scalePositionWithinConstraints())),
                l = o.addEventListener("didUpdate", (({
                    delta: t,
                    hasLayoutChanged: e
                }) => {
                    this.isDragging && e && ((0, f.eachAxis)((e => {
                        const n = this.getAxisMotionValue(e);
                        n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
                    })), this.visualElement.render())
                }));
            return () => {
                s(), n(), i(), null == l || l()
            }
        }
        getProps() {
            const t = this.visualElement.getProps(),
                {
                    drag: e = !1,
                    dragDirectionLock: n = !1,
                    dragPropagation: r = !1,
                    dragConstraints: o = !1,
                    dragElastic: i = l.defaultElastic,
                    dragMomentum: s = !0
                } = t;
            return {
                ...t,
                drag: e,
                dragDirectionLock: n,
                dragPropagation: r,
                dragConstraints: o,
                dragElastic: i,
                dragMomentum: s
            }
        }
        constructor(t) {
            this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                x: 0,
                y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, p.createBox)(), this.visualElement = t
        }
    }

    function T(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
    }
})), n.register("9Lg3f", (function(e, r) {
    t(e.exports, "PanSession", (function() {
        return f
    }));
    var o = n("dsLRv"),
        i = n("jxOGN"),
        s = n("bqAKI"),
        a = n("2o0ZO"),
        u = n("ca1Ym"),
        l = n("gsz6D"),
        c = n("3GUC0"),
        p = n("dE3m4");
    class f {
        updateHandlers(t) {
            this.handlers = t
        }
        end() {
            this.removeListeners && this.removeListeners(), i.cancelSync.update(this.updatePoint)
        }
        constructor(t, e, {
            transformPagePoint: n
        } = {}) {
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                    if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
                    const t = m(this.lastMoveEventInfo, this.history),
                        e = null !== this.startEvent,
                        n = (0, l.distance2D)(t.offset, {
                            x: 0,
                            y: 0
                        }) >= 3;
                    if (!e && !n) return;
                    const {
                        point: r
                    } = t, {
                        timestamp: o
                    } = c.frameData;
                    this.history.push({
                        ...r,
                        timestamp: o
                    });
                    const {
                        onStart: i,
                        onMove: s
                    } = this.handlers;
                    e || (i && i(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), s && s(this.lastMoveEvent, t)
                }, this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t, this.lastMoveEventInfo = h(e, this.transformPagePoint), i.sync.update(this.updatePoint, !0)
                }, this.handlePointerUp = (t, e) => {
                    if (this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
                    const {
                        onEnd: n,
                        onSessionEnd: r
                    } = this.handlers, o = m("pointercancel" === t.type ? this.lastMoveEventInfo : h(e, this.transformPagePoint), this.history);
                    this.startEvent && n && n(t, o), r && r(t, o)
                }, !(0, p.isPrimaryPointer)(t)) return;
            this.handlers = e, this.transformPagePoint = n;
            const r = h((0, o.extractEventInfo)(t), this.transformPagePoint),
                {
                    point: s
                } = r,
                {
                    timestamp: f
                } = c.frameData;
            this.history = [{
                ...s,
                timestamp: f
            }];
            const {
                onSessionStart: d
            } = e;
            d && d(t, m(r, this.history)), this.removeListeners = (0, u.pipe)((0, a.addPointerEvent)(window, "pointermove", this.handlePointerMove), (0, a.addPointerEvent)(window, "pointerup", this.handlePointerUp), (0, a.addPointerEvent)(window, "pointercancel", this.handlePointerUp))
        }
    }

    function h(t, e) {
        return e ? {
            point: e(t.point)
        } : t
    }

    function d(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }

    function m({
        point: t
    }, e) {
        return {
            point: t,
            delta: d(t, v(e)),
            offset: d(t, g(e)),
            velocity: y(e, .1)
        }
    }

    function g(t) {
        return t[0]
    }

    function v(t) {
        return t[t.length - 1]
    }

    function y(t, e) {
        if (t.length < 2) return {
            x: 0,
            y: 0
        };
        let n = t.length - 1,
            r = null;
        const o = v(t);
        for (; n >= 0 && (r = t[n], !(o.timestamp - r.timestamp > (0, s.secondsToMilliseconds)(e)));) n--;
        if (!r) return {
            x: 0,
            y: 0
        };
        const i = (o.timestamp - r.timestamp) / 1e3;
        if (0 === i) return {
            x: 0,
            y: 0
        };
        const a = {
            x: (o.x - r.x) / i,
            y: (o.y - r.y) / i
        };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
    }
})), n.register("gsz6D", (function(e, n) {
    t(e.exports, "distance2D", (function() {
        return o
    }));
    const r = (t, e) => Math.abs(t - e);

    function o(t, e) {
        const n = r(t.x, e.x),
            o = r(t.y, e.y);
        return Math.sqrt(n ** 2 + o ** 2)
    }
})), n.register("fqFZR", (function(e, r) {
    t(e.exports, "applyConstraints", (function() {
        return u
    })), t(e.exports, "calcRelativeConstraints", (function() {
        return c
    })), t(e.exports, "calcViewportConstraints", (function() {
        return f
    })), t(e.exports, "calcOrigin", (function() {
        return h
    })), t(e.exports, "rebaseAxisConstraints", (function() {
        return d
    })), t(e.exports, "defaultElastic", (function() {
        return m
    })), t(e.exports, "resolveDragElastic", (function() {
        return g
    }));
    var o = n("jf17W"),
        i = n("Og3HR"),
        s = n("6wUup"),
        a = n("jLuHw");

    function u(t, {
        min: e,
        max: n
    }, r) {
        return void 0 !== e && t < e ? t = r ? (0, a.mix)(e, t, r.min) : Math.max(t, e) : void 0 !== n && t > n && (t = r ? (0, a.mix)(n, t, r.max) : Math.min(t, n)), t
    }

    function l(t, e, n) {
        return {
            min: void 0 !== e ? t.min + e : void 0,
            max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
    }

    function c(t, {
        top: e,
        left: n,
        bottom: r,
        right: o
    }) {
        return {
            x: l(t.x, n, o),
            y: l(t.y, e, r)
        }
    }

    function p(t, e) {
        let n = e.min - t.min,
            r = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([n, r] = [r, n]), {
            min: n,
            max: r
        }
    }

    function f(t, e) {
        return {
            x: p(t.x, e.x),
            y: p(t.y, e.y)
        }
    }

    function h(t, e) {
        let n = .5;
        const r = (0, i.calcLength)(t),
            a = (0, i.calcLength)(e);
        return a > r ? n = (0, o.progress)(e.min, e.max - r, t.min) : r > a && (n = (0, o.progress)(t.min, t.max - a, e.min)), (0, s.clamp)(0, 1, n)
    }

    function d(t, e) {
        const n = {};
        return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
    }
    const m = .35;

    function g(t = m) {
        return !1 === t ? t = 0 : !0 === t && (t = m), {
            x: v(t, "left", "right"),
            y: v(t, "top", "bottom")
        }
    }

    function v(t, e, n) {
        return {
            min: y(t, e),
            max: y(t, n)
        }
    }

    function y(t, e) {
        return "number" == typeof t ? t : t[e] || 0
    }
})), n.register("Og3HR", (function(e, r) {
    t(e.exports, "calcLength", (function() {
        return i
    })), t(e.exports, "isNear", (function() {
        return s
    })), t(e.exports, "calcBoxDelta", (function() {
        return u
    })), t(e.exports, "calcRelativeBox", (function() {
        return c
    })), t(e.exports, "calcRelativePosition", (function() {
        return f
    }));
    var o = n("jLuHw");

    function i(t) {
        return t.max - t.min
    }

    function s(t, e = 0, n = .01) {
        return Math.abs(t - e) <= n
    }

    function a(t, e, n, r = .5) {
        t.origin = r, t.originPoint = (0, o.mix)(e.min, e.max, t.origin), t.scale = i(n) / i(e), (s(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, o.mix)(n.min, n.max, t.origin) - t.originPoint, (s(t.translate) || isNaN(t.translate)) && (t.translate = 0)
    }

    function u(t, e, n, r) {
        a(t.x, e.x, n.x, null == r ? void 0 : r.originX), a(t.y, e.y, n.y, null == r ? void 0 : r.originY)
    }

    function l(t, e, n) {
        t.min = n.min + e.min, t.max = t.min + i(e)
    }

    function c(t, e, n) {
        l(t.x, e.x, n.x), l(t.y, e.y, n.y)
    }

    function p(t, e, n) {
        t.min = e.min - n.min, t.max = t.min + i(e)
    }

    function f(t, e, n) {
        p(t.x, e.x, n.x), p(t.y, e.y, n.y)
    }
})), n.register("7731b", (function(e, n) {
    t(e.exports, "createDelta", (function() {
        return r
    })), t(e.exports, "createBox", (function() {
        return o
    }));
    const r = () => ({
            x: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            },
            y: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            }
        }),
        o = () => ({
            x: {
                min: 0,
                max: 0
            },
            y: {
                min: 0,
                max: 0
            }
        })
})), n.register("9fZ27", (function(e, n) {
    function r(t) {
        return [t("x"), t("y")]
    }
    t(e.exports, "eachAxis", (function() {
        return r
    }))
})), n.register("a2hGz", (function(e, r) {
    t(e.exports, "measureViewportBox", (function() {
        return s
    })), t(e.exports, "measurePageBox", (function() {
        return a
    }));
    var o = n("iqWQQ"),
        i = n("j0K26");

    function s(t, e) {
        return (0, o.convertBoundingBoxToBox)((0, o.transformBoxPoints)(t.getBoundingClientRect(), e))
    }

    function a(t, e, n) {
        const r = s(t, n),
            {
                scroll: o
            } = e;
        return o && ((0, i.translateAxis)(r.x, o.offset.x), (0, i.translateAxis)(r.y, o.offset.y)), r
    }
})), n.register("iqWQQ", (function(e, n) {
    function r({
        top: t,
        left: e,
        right: n,
        bottom: r
    }) {
        return {
            x: {
                min: e,
                max: n
            },
            y: {
                min: t,
                max: r
            }
        }
    }

    function o({
        x: t,
        y: e
    }) {
        return {
            top: e.min,
            right: t.max,
            bottom: e.max,
            left: t.min
        }
    }

    function i(t, e) {
        if (!e) return t;
        const n = e({
                x: t.left,
                y: t.top
            }),
            r = e({
                x: t.right,
                y: t.bottom
            });
        return {
            top: n.y,
            left: n.x,
            bottom: r.y,
            right: r.x
        }
    }
    t(e.exports, "convertBoundingBoxToBox", (function() {
        return r
    })), t(e.exports, "convertBoxToBoundingBox", (function() {
        return o
    })), t(e.exports, "transformBoxPoints", (function() {
        return i
    }))
})), n.register("j0K26", (function(e, r) {
    t(e.exports, "scalePoint", (function() {
        return s
    })), t(e.exports, "applyBoxDelta", (function() {
        return l
    })), t(e.exports, "applyTreeDeltas", (function() {
        return c
    })), t(e.exports, "transformBox", (function() {
        return g
    })), t(e.exports, "translateAxis", (function() {
        return f
    }));
    var o = n("jLuHw"),
        i = n("1S4Lh");

    function s(t, e, n) {
        return n + e * (t - n)
    }

    function a(t, e, n, r, o) {
        return void 0 !== o && (t = s(t, o, r)), s(t, n, r) + e
    }

    function u(t, e = 0, n = 1, r, o) {
        t.min = a(t.min, e, n, r, o), t.max = a(t.max, e, n, r, o)
    }

    function l(t, {
        x: e,
        y: n
    }) {
        u(t.x, e.translate, e.scale, e.originPoint), u(t.y, n.translate, n.scale, n.originPoint)
    }

    function c(t, e, n, r = !1) {
        var o, s;
        const a = n.length;
        if (!a) return;
        let u, c;
        e.x = e.y = 1;
        for (let p = 0; p < a; p++) u = n[p], c = u.projectionDelta, "contents" !== (null === (s = null === (o = u.instance) || void 0 === o ? void 0 : o.style) || void 0 === s ? void 0 : s.display) && (r && u.options.layoutScroll && u.scroll && u !== u.root && g(t, {
            x: -u.scroll.offset.x,
            y: -u.scroll.offset.y
        }), c && (e.x *= c.x.scale, e.y *= c.y.scale, l(t, c)), r && (0, i.hasTransform)(u.latestValues) && g(t, u.latestValues));
        e.x = p(e.x), e.y = p(e.y)
    }

    function p(t) {
        return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
    }

    function f(t, e) {
        t.min = t.min + e, t.max = t.max + e
    }

    function h(t, e, [n, r, i]) {
        const s = void 0 !== e[i] ? e[i] : .5,
            a = (0, o.mix)(t.min, t.max, s);
        u(t, e[n], e[r], a, e.scale)
    }
    const d = ["x", "scaleX", "originX"],
        m = ["y", "scaleY", "originY"];

    function g(t, e) {
        h(t.x, e, d), h(t.y, e, m)
    }
})), n.register("1S4Lh", (function(e, n) {
    function r(t) {
        return void 0 === t || 1 === t
    }

    function o({
        scale: t,
        scaleX: e,
        scaleY: n
    }) {
        return !r(t) || !r(e) || !r(n)
    }

    function i(t) {
        return o(t) || s(t) || t.z || t.rotate || t.rotateX || t.rotateY
    }

    function s(t) {
        return a(t.x) || a(t.y)
    }

    function a(t) {
        return t && "0%" !== t
    }
    t(e.exports, "hasScale", (function() {
        return o
    })), t(e.exports, "hasTransform", (function() {
        return i
    })), t(e.exports, "has2DTranslate", (function() {
        return s
    }))
})), n.register("klI55", (function(e, r) {
    t(e.exports, "usePanGesture", (function() {
        return l
    }));
    var o = n("fywoC"),
        i = n("lLAX0"),
        s = n("fLHag"),
        a = n("2o0ZO"),
        u = n("9Lg3f");

    function l({
        onPan: t,
        onPanStart: e,
        onPanEnd: n,
        onPanSessionStart: r,
        visualElement: l
    }) {
        const c = t || e || n || r,
            p = (0, o.useRef)(null),
            {
                transformPagePoint: f
            } = (0, o.useContext)(i.MotionConfigContext),
            h = {
                onSessionStart: r,
                onStart: e,
                onMove: t,
                onEnd: (t, e) => {
                    p.current = null, n && n(t, e)
                }
            };
        (0, o.useEffect)((() => {
            null !== p.current && p.current.updateHandlers(h)
        })), (0, a.usePointerEvent)(l, "pointerdown", c && function(t) {
            p.current = new(0, u.PanSession)(t, h, {
                transformPagePoint: f
            })
        }), (0, s.useUnmountEffect)((() => p.current && p.current.end()))
    }
})), n.register("l0hEV", (function(e, r) {
    t(e.exports, "createDomVisualElement", (function() {
        return a
    }));
    var o = n("29cG2"),
        i = n("2HaQI"),
        s = n("6X5iD");
    const a = (t, e) => (0, s.isSVGComponent)(t) ? new(0, i.SVGVisualElement)(e, {
        enableHardwareAcceleration: !1
    }) : new(0, o.HTMLVisualElement)(e, {
        enableHardwareAcceleration: !0
    })
})), n.register("29cG2", (function(e, r) {
    t(e.exports, "HTMLVisualElement", (function() {
        return h
    }));
    var o = n("cBwFF"),
        i = n("87s3F"),
        s = n("3EEnx"),
        a = n("1BggE"),
        u = n("grs2Y"),
        l = n("aiFSu"),
        c = n("a2hGz"),
        p = n("2NWnJ"),
        f = n("inWou");
    class h extends p.DOMVisualElement {
        readValueFromInstance(t, e) {
            if (s.transformProps.has(e)) {
                const t = (0, l.getDefaultValueType)(e);
                return t && t.default || 0
            } {
                const r = (n = t, window.getComputedStyle(n)),
                    o = ((0, i.isCSSVariable)(e) ? r.getPropertyValue(e) : r[e]) || 0;
                return "string" == typeof o ? o.trim() : o
            }
            var n
        }
        measureInstanceViewportBox(t, {
            transformPagePoint: e
        }) {
            return (0, c.measureViewportBox)(t, e)
        }
        build(t, e, n, r) {
            (0, o.buildHTMLStyles)(t, e, n, r.transformTemplate)
        }
        scrapeMotionValuesFromProps(t, e) {
            return (0, a.scrapeMotionValuesFromProps)(t, e)
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            const {
                children: t
            } = this.props;
            (0, f.isMotionValue)(t) && (this.childSubscription = t.on("change", (t => {
                this.current && (this.current.textContent = `${t}`)
            })))
        }
        renderInstance(t, e, n, r) {
            (0, u.renderHTML)(t, e, n, r)
        }
    }
})), n.register("2NWnJ", (function(e, r) {
    t(e.exports, "DOMVisualElement", (function() {
        return a
    }));
    var o = n("aOlnv"),
        i = n("lP1Dg"),
        s = n("4k7V0");
    class a extends s.VisualElement {
        sortInstanceNodePosition(t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e]
        }
        removeValueFromRenderState(t, {
            vars: e,
            style: n
        }) {
            delete e[t], delete n[t]
        }
        makeTargetAnimatableFromInstance({
            transition: t,
            transitionEnd: e,
            ...n
        }, {
            transformValues: r
        }, s) {
            let a = (0, o.getOrigin)(n, t || {}, this);
            if (r && (e && (e = r(e)), n && (n = r(n)), a && (a = r(a))), s) {
                (0, o.checkTargetForNewValues)(this, n, a);
                const t = (0, i.parseDomVariant)(this, n, a, e);
                e = t.transitionEnd, n = t.target
            }
            return {
                transition: t,
                transitionEnd: e,
                ...n
            }
        }
    }
})), n.register("lP1Dg", (function(e, r) {
    t(e.exports, "parseDomVariant", (function() {
        return s
    }));
    var o = n("kCMix"),
        i = n("jIEIg");
    const s = (t, e, n, r) => {
        const s = (0, o.resolveCSSVariables)(t, e, r);
        return e = s.target, r = s.transitionEnd, (0, i.unitConversion)(t, e, n, r)
    }
})), n.register("kCMix", (function(e, r) {
    t(e.exports, "cssVariableRegex", (function() {
        return s
    })), t(e.exports, "resolveCSSVariables", (function() {
        return u
    }));
    var o = n("YpDI8");

    function i(t) {
        return "string" == typeof t && t.startsWith("var(--")
    }
    const s = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

    function a(t, e, n = 1) {
        (0, o.invariant)(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
        const [r, u] = function(t) {
            const e = s.exec(t);
            if (!e) return [, ];
            const [, n, r] = e;
            return [n, r]
        }(t);
        if (!r) return;
        const l = window.getComputedStyle(e).getPropertyValue(r);
        return l ? l.trim() : i(u) ? a(u, e, n + 1) : u
    }

    function u(t, {
        ...e
    }, n) {
        const r = t.current;
        if (!(r instanceof Element)) return {
            target: e,
            transitionEnd: n
        };
        n && (n = {
            ...n
        }), t.values.forEach((t => {
            const e = t.get();
            if (!i(e)) return;
            const n = a(e, r);
            n && t.set(n)
        }));
        for (const t in e) {
            const o = e[t];
            if (!i(o)) continue;
            const s = a(o, r);
            s && (e[t] = s, n && void 0 === n[t] && (n[t] = o))
        }
        return {
            target: e,
            transitionEnd: n
        }
    }
})), n.register("jIEIg", (function(e, r) {
    t(e.exports, "unitConversion", (function() {
        return C
    }));
    var o = n("6N8Wf"),
        i = n("YpDI8"),
        s = n("3EEnx"),
        a = n("aSOa6"),
        u = n("dMD6X"),
        l = n("4IBaC"),
        c = n("gEGeb");
    const p = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        f = t => p.has(t),
        h = t => t === l.number || t === c.px;
    var d, m;
    (m = d || (d = {})).width = "width", m.height = "height", m.left = "left", m.right = "right", m.top = "top", m.bottom = "bottom";
    const g = (t, e) => parseFloat(t.split(", ")[e]),
        v = (t, e) => (n, {
            transform: r
        }) => {
            if ("none" === r || !r) return 0;
            const o = r.match(/^matrix3d\((.+)\)$/);
            if (o) return g(o[1], e);
            {
                const e = r.match(/^matrix\((.+)\)$/);
                return e ? g(e[1], t) : 0
            }
        },
        y = new Set(["x", "y", "z"]),
        x = s.transformPropOrder.filter((t => !y.has(t)));
    const b = {
            width: ({
                x: t
            }, {
                paddingLeft: e = "0",
                paddingRight: n = "0"
            }) => t.max - t.min - parseFloat(e) - parseFloat(n),
            height: ({
                y: t
            }, {
                paddingTop: e = "0",
                paddingBottom: n = "0"
            }) => t.max - t.min - parseFloat(e) - parseFloat(n),
            top: (t, {
                top: e
            }) => parseFloat(e),
            left: (t, {
                left: e
            }) => parseFloat(e),
            bottom: ({
                y: t
            }, {
                top: e
            }) => parseFloat(e) + (t.max - t.min),
            right: ({
                x: t
            }, {
                left: e
            }) => parseFloat(e) + (t.max - t.min),
            x: v(4, 13),
            y: v(5, 14)
        },
        V = (t, e, n = {}, r = {}) => {
            e = {
                ...e
            }, r = {
                ...r
            };
            const s = Object.keys(e).filter(f);
            let l = [],
                p = !1;
            const d = [];
            if (s.forEach((s => {
                    const u = t.getValue(s);
                    if (!t.hasValue(s)) return;
                    let f = n[s],
                        m = (0, a.findDimensionValueType)(f);
                    const g = e[s];
                    let v;
                    if ((0, o.isKeyframesTarget)(g)) {
                        const t = g.length,
                            e = null === g[0] ? 1 : 0;
                        f = g[e], m = (0, a.findDimensionValueType)(f);
                        for (let n = e; n < t; n++) v ? (0, i.invariant)((0, a.findDimensionValueType)(g[n]) === v, "All keyframes must be of the same type") : (v = (0, a.findDimensionValueType)(g[n]), (0, i.invariant)(v === m || h(m) && h(v), "Keyframes must be of the same dimension as the current value"))
                    } else v = (0, a.findDimensionValueType)(g);
                    if (m !== v)
                        if (h(m) && h(v)) {
                            const t = u.get();
                            "string" == typeof t && u.set(parseFloat(t)), "string" == typeof g ? e[s] = parseFloat(g) : Array.isArray(g) && v === c.px && (e[s] = g.map(parseFloat))
                        } else(null == m ? void 0 : m.transform) && (null == v ? void 0 : v.transform) && (0 === f || 0 === g) ? 0 === f ? u.set(v.transform(f)) : e[s] = m.transform(g) : (p || (l = function(t) {
                            const e = [];
                            return x.forEach((n => {
                                const r = t.getValue(n);
                                void 0 !== r && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                            })), e.length && t.render(), e
                        }(t), p = !0), d.push(s), r[s] = void 0 !== r[s] ? r[s] : e[s], u.jump(g))
                })), d.length) {
                const n = d.indexOf("height") >= 0 ? window.pageYOffset : null,
                    o = ((t, e, n) => {
                        const r = e.measureViewportBox(),
                            o = e.current,
                            i = getComputedStyle(o),
                            {
                                display: s
                            } = i,
                            a = {};
                        "none" === s && e.setStaticValue("display", t.display || "block"), n.forEach((t => {
                            a[t] = b[t](r, i)
                        })), e.render();
                        const u = e.measureViewportBox();
                        return n.forEach((n => {
                            const r = e.getValue(n);
                            r && r.jump(a[n]), t[n] = b[n](u, i)
                        })), t
                    })(e, t, d);
                return l.length && l.forEach((([e, n]) => {
                    t.getValue(e).set(n)
                })), t.render(), u.isBrowser && null !== n && window.scrollTo({
                    top: n
                }), {
                    target: o,
                    transitionEnd: r
                }
            }
            return {
                target: e,
                transitionEnd: r
            }
        };

    function C(t, e, n, r) {
        return (t => Object.keys(t).some(f))(e) ? V(t, e, n, r) : {
            target: e,
            transitionEnd: r
        }
    }
})), n.register("4k7V0", (function(e, r) {
    t(e.exports, "VisualElement", (function() {
        return P
    }));
    var o = n("jxOGN");
    n("YpDI8");
    var i = n("fywoC"),
        s = n("fN29I"),
        a = n("7731b"),
        u = n("Wlprs"),
        l = n("6kSDn"),
        c = n("ikYCm"),
        p = n("cdNHq"),
        f = n("ajNLe"),
        h = n("aRDmR"),
        d = n("inWou"),
        m = n("3EEnx"),
        g = n("eEKoc"),
        v = n("65O7e"),
        y = n("2VIDZ"),
        x = n("dvr92"),
        b = n("2rqJG");
    const V = Object.keys(s.featureDefinitions),
        C = V.length,
        T = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
    class P {
        scrapeMotionValuesFromProps(t, e) {
            return {}
        }
        mount(t) {
            var e;
            this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (e = this.parent) || void 0 === e ? void 0 : e.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), c.hasReducedMotionListener.current || (0, l.initPrefersReducedMotion)(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || c.prefersReducedMotion.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
        }
        unmount() {
            var t, e, n;
            null === (t = this.projection) || void 0 === t || t.unmount(), o.cancelSync.update(this.notifyUpdate), o.cancelSync.render(this.render), this.valueSubscriptions.forEach((t => t())), null === (e = this.removeFromVariantTree) || void 0 === e || e.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this);
            for (const t in this.events) this.events[t].clear();
            this.current = null
        }
        bindToMotionValue(t, e) {
            const n = m.transformProps.has(t),
                r = e.on("change", (e => {
                    this.latestValues[t] = e, this.props.onUpdate && o.sync.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
                })),
                i = e.on("renderRequest", this.scheduleRender);
            this.valueSubscriptions.set(t, (() => {
                r(), i()
            }))
        }
        sortNodePosition(t) {
            return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        loadFeatures({
            children: t,
            ...e
        }, n, r, o, a, l) {
            const c = [];
            for (let t = 0; t < C; t++) {
                const n = V[t],
                    {
                        isEnabled: r,
                        Component: o
                    } = s.featureDefinitions[n];
                r(e) && o && c.push((0, i.createElement)(o, {
                    key: n,
                    ...e,
                    visualElement: this
                }))
            }
            if (!this.projection && a) {
                this.projection = new a(o, this.latestValues, this.parent && this.parent.projection);
                const {
                    layoutId: t,
                    layout: n,
                    drag: r,
                    dragConstraints: i,
                    layoutScroll: s,
                    layoutRoot: c
                } = e;
                this.projection.setOptions({
                    layoutId: t,
                    layout: n,
                    alwaysMeasureLayout: Boolean(r) || i && (0, u.isRefObject)(i),
                    visualElement: this,
                    scheduleRender: () => this.scheduleRender(),
                    animationType: "string" == typeof n ? n : "both",
                    initialPromotionConfig: l,
                    layoutScroll: s,
                    layoutRoot: c
                })
            }
            return c
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.options, this.props)
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, a.createBox)()
        }
        getStaticValue(t) {
            return this.latestValues[t]
        }
        setStaticValue(t, e) {
            this.latestValues[t] = e
        }
        makeTargetAnimatable(t, e = !0) {
            return this.makeTargetAnimatableFromInstance(t, this.props, e)
        }
        setProps(t) {
            (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender();
            const e = this.props;
            this.props = t;
            for (let e = 0; e < T.length; e++) {
                const n = T[e];
                this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                const r = t["on" + n];
                r && (this.propEventSubscriptions[n] = this.on(n, r))
            }
            this.prevMotionValues = (0, x.updateMotionValuesFromProps)(this, this.scrapeMotionValuesFromProps(t, e), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
            return this.props
        }
        getVariant(t) {
            var e;
            return null === (e = this.props.variants) || void 0 === e ? void 0 : e[t]
        }
        getDefaultTransition() {
            return this.props.transition
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint
        }
        getClosestVariantNode() {
            var t;
            return this.isVariantNode ? this : null === (t = this.parent) || void 0 === t ? void 0 : t.getClosestVariantNode()
        }
        getVariantContext(t = !1) {
            var e, n;
            if (t) return null === (e = this.parent) || void 0 === e ? void 0 : e.getVariantContext();
            if (!this.isControllingVariants) {
                const t = (null === (n = this.parent) || void 0 === n ? void 0 : n.getVariantContext()) || {};
                return void 0 !== this.props.initial && (t.initial = this.props.initial), t
            }
            const r = {};
            for (let t = 0; t < E; t++) {
                const e = S[t],
                    n = this.props[e];
                ((0, y.isVariantLabel)(n) || !1 === n) && (r[e] = n)
            }
            return r
        }
        addVariantChild(t) {
            var e;
            const n = this.getClosestVariantNode();
            if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t), () => n.variantChildren.delete(t)
        }
        addValue(t, e) {
            e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), this.latestValues[t] = e.get()
        }
        removeValue(t) {
            var e;
            this.values.delete(t), null === (e = this.valueSubscriptions.get(t)) || void 0 === e || e(), this.valueSubscriptions.delete(t), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
            return this.values.has(t)
        }
        getValue(t, e) {
            if (this.props.values && this.props.values[t]) return this.props.values[t];
            let n = this.values.get(t);
            return void 0 === n && void 0 !== e && (n = (0, f.motionValue)(e, {
                owner: this
            }), this.addValue(t, n)), n
        }
        readValue(t) {
            return void 0 === this.latestValues[t] && this.current ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
        }
        setBaseTarget(t, e) {
            this.baseTarget[t] = e
        }
        getBaseTarget(t) {
            var e;
            const {
                initial: n
            } = this.props, r = "string" == typeof n || "object" == typeof n ? null === (e = (0, b.resolveVariantFromProps)(this.props, n)) || void 0 === e ? void 0 : e[t] : void 0;
            if (n && void 0 !== r) return r;
            const o = this.getBaseTargetFromProps(this.props, t);
            return void 0 === o || (0, d.isMotionValue)(o) ? void 0 !== this.initialValues[t] && void 0 === r ? void 0 : this.baseTarget[t] : o
        }
        on(t, e) {
            return this.events[t] || (this.events[t] = new(0, p.SubscriptionManager)), this.events[t].add(e)
        }
        notify(t, ...e) {
            var n;
            null === (n = this.events[t]) || void 0 === n || n.notify(...e)
        }
        constructor({
            parent: t,
            props: e,
            reducedMotionConfig: n,
            visualState: r
        }, i = {}) {
            this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }, this.scheduleRender = () => o.sync.render(this.render, !1, !0);
            const {
                latestValues: s,
                renderState: a
            } = r;
            this.latestValues = s, this.baseTarget = {
                ...s
            }, this.initialValues = e.initial ? {
                ...s
            } : {}, this.renderState = a, this.parent = t, this.props = e, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = i, this.isControllingVariants = (0, v.isControllingVariants)(e), this.isVariantNode = (0, v.isVariantNode)(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
            const {
                willChange: u,
                ...l
            } = this.scrapeMotionValuesFromProps(e, {});
            for (const t in l) {
                const e = l[t];
                void 0 !== s[t] && (0, d.isMotionValue)(e) && (e.set(s[t], !1), (0, h.isWillChangeMotionValue)(u) && u.add(t))
            }
        }
    }
    const S = ["initial", ...g.variantPriorityOrder],
        E = S.length
})), n.register("6kSDn", (function(e, r) {
    t(e.exports, "initPrefersReducedMotion", (function() {
        return s
    }));
    var o = n("dMD6X"),
        i = n("ikYCm");

    function s() {
        if (i.hasReducedMotionListener.current = !0, o.isBrowser)
            if (window.matchMedia) {
                const t = window.matchMedia("(prefers-reduced-motion)"),
                    e = () => i.prefersReducedMotion.current = t.matches;
                t.addListener(e), e()
            } else i.prefersReducedMotion.current = !1
    }
})), n.register("ikYCm", (function(e, n) {
    t(e.exports, "prefersReducedMotion", (function() {
        return r
    })), t(e.exports, "hasReducedMotionListener", (function() {
        return o
    }));
    const r = {
            current: null
        },
        o = {
            current: !1
        }
})), n.register("dvr92", (function(e, r) {
    t(e.exports, "updateMotionValuesFromProps", (function() {
        return a
    }));
    var o = n("aRDmR"),
        i = n("ajNLe"),
        s = n("inWou");

    function a(t, e, n) {
        const {
            willChange: r
        } = e;
        for (const a in e) {
            const u = e[a],
                l = n[a];
            if ((0, s.isMotionValue)(u)) t.addValue(a, u), (0, o.isWillChangeMotionValue)(r) && r.add(a);
            else if ((0, s.isMotionValue)(l)) t.addValue(a, (0, i.motionValue)(u, {
                owner: t
            })), (0, o.isWillChangeMotionValue)(r) && r.remove(a);
            else if (l !== u)
                if (t.hasValue(a)) {
                    const e = t.getValue(a);
                    !e.hasAnimated && e.set(u)
                } else {
                    const e = t.getStaticValue(a);
                    t.addValue(a, (0, i.motionValue)(void 0 !== e ? e : u, {
                        owner: t
                    }))
                }
        }
        for (const r in n) void 0 === e[r] && t.removeValue(r);
        return e
    }
})), n.register("2HaQI", (function(e, r) {
    t(e.exports, "SVGVisualElement", (function() {
        return d
    }));
    var o = n("cIUZv"),
        i = n("2NWnJ"),
        s = n("1cMNz"),
        a = n("7w3Ty"),
        u = n("eYF55"),
        l = n("3EEnx"),
        c = n("1ew35"),
        p = n("aiFSu"),
        f = n("7731b"),
        h = n("jQ3f9");
    class d extends i.DOMVisualElement {
        getBaseTargetFromProps(t, e) {
            return t[e]
        }
        readValueFromInstance(t, e) {
            var n;
            return l.transformProps.has(e) ? (null === (n = (0, p.getDefaultValueType)(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = u.camelCaseAttributes.has(e) ? e : (0, a.camelToDash)(e), t.getAttribute(e))
        }
        measureInstanceViewportBox() {
            return (0, f.createBox)()
        }
        scrapeMotionValuesFromProps(t, e) {
            return (0, o.scrapeMotionValuesFromProps)(t, e)
        }
        build(t, e, n, r) {
            (0, s.buildSVGAttrs)(t, e, n, this.isSVGTag, r.transformTemplate)
        }
        renderInstance(t, e, n, r) {
            (0, c.renderSVG)(t, e, n, r)
        }
        mount(t) {
            this.isSVGTag = (0, h.isSVGTag)(t.tagName), super.mount(t)
        }
        constructor() {
            super(...arguments), this.isSVGTag = !1
        }
    }
})), n.register("69ZRt", (function(e, r) {
    t(e.exports, "layoutFeatures", (function() {
        return o
    }));
    const o = {
        measureLayout: n("7Wpww").MeasureLayout
    }
})), n.register("7Wpww", (function(r, o) {
    t(r.exports, "MeasureLayout", (function() {
        return m
    }));
    var i = n("jxOGN"),
        s = n("fywoC"),
        a = n("5JgWp"),
        u = n("4yEJY"),
        l = n("45O50"),
        c = n("5fama"),
        p = n("c6HXK"),
        f = n("51hCm"),
        h = n("8LqDf");
    class d extends e(s).Component {
        componentDidMount() {
            const {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: n,
                layoutId: r
            } = this.props, {
                projection: o
            } = t;
            (0, h.addScaleCorrector)(g), o && (e.group && e.group.add(o), n && n.register && r && n.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", (() => {
                this.safeToRemove()
            })), o.setOptions({
                ...o.options,
                onExitComplete: () => this.safeToRemove()
            })), c.globalProjectionState.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
            const {
                layoutDependency: e,
                visualElement: n,
                drag: r,
                isPresent: o
            } = this.props, s = n.projection;
            return s ? (s.isPresent = o, r || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || i.sync.postRender((() => {
                var t;
                (null === (t = s.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove()
            }))), null) : null
        }
        componentDidUpdate() {
            const {
                projection: t
            } = this.props.visualElement;
            t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
        }
        componentWillUnmount() {
            const {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: n
            } = this.props, {
                projection: r
            } = t;
            r && (r.scheduleCheckAfterUnmount(), (null == e ? void 0 : e.group) && e.group.remove(r), (null == n ? void 0 : n.deregister) && n.deregister(r))
        }
        safeToRemove() {
            const {
                safeToRemove: t
            } = this.props;
            null == t || t()
        }
        render() {
            return null
        }
    }

    function m(t) {
        const [n, r] = (0, a.usePresence)(), o = (0, s.useContext)(u.LayoutGroupContext);
        return e(s).createElement(d, {
            ...t,
            layoutGroup: o,
            switchLayoutGroup: (0, s.useContext)(l.SwitchLayoutGroupContext),
            isPresent: n,
            safeToRemove: r
        })
    }
    const g = {
        borderRadius: {
            ...p.correctBorderRadius,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: p.correctBorderRadius,
        borderTopRightRadius: p.correctBorderRadius,
        borderBottomLeftRadius: p.correctBorderRadius,
        borderBottomRightRadius: p.correctBorderRadius,
        boxShadow: f.correctBoxShadow
    }
})), n.register("c6HXK", (function(e, r) {
    t(e.exports, "correctBorderRadius", (function() {
        return s
    }));
    var o = n("gEGeb");

    function i(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
    }
    const s = {
        correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
                if (!o.px.test(t)) return t;
                t = parseFloat(t)
            }
            return `${i(t,e.target.x)}% ${i(t,e.target.y)}%`
        }
    }
})), n.register("51hCm", (function(e, r) {
    t(e.exports, "correctBoxShadow", (function() {
        return u
    }));
    var o = n("kCMix"),
        i = n("jLuHw"),
        s = n("dg9OD");
    const a = "_$css",
        u = {
            correct: (t, {
                treeScale: e,
                projectionDelta: n
            }) => {
                const r = t,
                    u = t.includes("var("),
                    l = [];
                u && (t = t.replace(o.cssVariableRegex, (t => (l.push(t), a))));
                const c = s.complex.parse(t);
                if (c.length > 5) return r;
                const p = s.complex.createTransformer(t),
                    f = "number" != typeof c[0] ? 1 : 0,
                    h = n.x.scale * e.x,
                    d = n.y.scale * e.y;
                c[0 + f] /= h, c[1 + f] /= d;
                const m = (0, i.mix)(h, d, .5);
                "number" == typeof c[2 + f] && (c[2 + f] /= m), "number" == typeof c[3 + f] && (c[3 + f] /= m);
                let g = p(c);
                if (u) {
                    let t = 0;
                    g = g.replace(a, (() => {
                        const e = l[t];
                        return t++, e
                    }))
                }
                return g
            }
        }
})), n.register("2JqCN", (function(e, r) {
    t(e.exports, "HTMLProjectionNode", (function() {
        return a
    }));
    var o = n("645Ce"),
        i = n("h7naM");
    const s = {
            current: void 0
        },
        a = (0, o.createProjectionNode)({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!s.current) {
                    const t = new(0, i.DocumentProjectionNode)(0, {});
                    t.mount(window), t.setOptions({
                        layoutScroll: !0
                    }), s.current = t
                }
                return s.current
            },
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            },
            checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        })
})), n.register("645Ce", (function(e, r) {
    t(e.exports, "createProjectionNode", (function() {
        return w
    }));
    var o = n("jxOGN"),
        i = n("aFq3x"),
        s = n("cdNHq"),
        a = n("jt5Bb"),
        u = n("a9FFJ"),
        l = n("j0K26"),
        c = n("Og3HR"),
        p = n("kcHvl"),
        f = n("7731b"),
        h = n("e6bx1"),
        d = n("acPfR"),
        m = n("7rPZX"),
        g = n("8LqDf"),
        v = n("5OBAZ"),
        y = n("9fZ27"),
        x = n("1S4Lh"),
        b = n("ce5Os"),
        V = n("dJxcH"),
        C = n("5fama"),
        T = n("5l8kJ"),
        P = n("jLuHw");
    const S = ["", "X", "Y", "Z"];
    let E = 0;

    function w({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: r,
        resetTransform: y
    }) {
        return class {
            addEventListener(t, e) {
                return this.eventHandlers.has(t) || this.eventHandlers.set(t, new(0, s.SubscriptionManager)), this.eventHandlers.get(t).add(e)
            }
            notifyListeners(t, ...e) {
                const n = this.eventHandlers.get(t);
                null == n || n.notify(...e)
            }
            hasListeners(t) {
                return this.eventHandlers.has(t)
            }
            registerPotentialNode(t, e) {
                this.potentialNodes.set(t, e)
            }
            mount(e, n = !1) {
                var r;
                if (this.instance) return;
                this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                const {
                    layoutId: o,
                    layout: i,
                    visualElement: s
                } = this.options;
                if (s && !s.current && s.mount(e), this.root.nodes.add(this), null === (r = this.parent) || void 0 === r || r.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (i || o) && (this.isLayoutDirty = !0), t) {
                    let n;
                    const r = () => this.root.updateBlockedByResize = !1;
                    t(e, (() => {
                        this.root.updateBlockedByResize = !0, n && n(), n = (0, T.delay)(r, 250), C.globalProjectionState.hasAnimatedSinceResize && (C.globalProjectionState.hasAnimatedSinceResize = !1, this.nodes.forEach(L))
                    }))
                }
                o && this.root.registerSharedNode(o, this), !1 !== this.options.animate && s && (o || i) && this.addEventListener("didUpdate", (({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: n,
                    layout: r
                }) => {
                    var o, i, a, u, l;
                    if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
                    const c = null !== (i = null !== (o = this.options.transition) && void 0 !== o ? o : s.getDefaultTransition()) && void 0 !== i ? i : H,
                        {
                            onLayoutAnimationStart: p,
                            onLayoutAnimationComplete: f
                        } = s.getProps(),
                        m = !this.targetLayout || !(0, d.boxEquals)(this.targetLayout, r) || n,
                        g = !e && n;
                    if (this.options.layoutRoot || (null === (a = this.resumeFrom) || void 0 === a ? void 0 : a.instance) || g || e && (m || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, g);
                        const e = {
                            ...(0, h.getValueTransition)(c, "layout"),
                            onPlay: p,
                            onComplete: f
                        };
                        (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                    } else e || 0 !== this.animationProgress || L(this), this.isLead() && (null === (l = (u = this.options).onExitComplete) || void 0 === l || l.call(u));
                    this.targetLayout = r
                }))
            }
            unmount() {
                var t, e;
                this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, o.cancelSync.preRender(this.updateProjection)
            }
            blockUpdate() {
                this.updateManuallyBlocked = !0
            }
            unblockUpdate() {
                this.updateManuallyBlocked = !1
            }
            isUpdateBlocked() {
                return this.updateManuallyBlocked || this.updateBlockedByResize
            }
            isTreeAnimationBlocked() {
                var t;
                return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
            }
            startUpdate() {
                var t;
                this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(F), this.animationId++)
            }
            getTransformTemplate() {
                var t;
                return null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate
            }
            willUpdate(t = !0) {
                var e, n, r;
                if (this.root.isUpdateBlocked()) return void(null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e));
                if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
                this.isLayoutDirty = !0;
                for (let t = 0; t < this.path.length; t++) {
                    const e = this.path[t];
                    e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                }
                const {
                    layoutId: o,
                    layout: i
                } = this.options;
                (void 0 !== o || i) && (this.prevTransformTemplateValue = null === (r = this.getTransformTemplate()) || void 0 === r ? void 0 : r(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate"))
            }
            didUpdate() {
                if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(B);
                this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(z), this.potentialNodes.clear()), this.nodes.forEach(k), this.nodes.forEach(A), this.nodes.forEach(D), this.clearAllSnapshots(), o.flushSync.update(), o.flushSync.preRender(), o.flushSync.render())
            }
            clearAllSnapshots() {
                this.nodes.forEach(R), this.sharedNodes.forEach(O)
            }
            scheduleUpdateProjection() {
                o.sync.preRender(this.updateProjection, !1, !0)
            }
            scheduleCheckAfterUnmount() {
                o.sync.postRender((() => {
                    this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                }))
            }
            updateSnapshot() {
                !this.snapshot && this.instance && (this.snapshot = this.measure())
            }
            updateLayout() {
                var t;
                if (!this.instance) return;
                if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
                if (this.resumeFrom && !this.resumeFrom.instance)
                    for (let t = 0; t < this.path.length; t++) {
                        this.path[t].updateScroll()
                    }
                const e = this.layout;
                this.layout = this.measure(!1), this.layoutCorrected = (0, f.createBox)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (t = this.options.visualElement) || void 0 === t || t.notify("LayoutMeasure", this.layout.layoutBox, null == e ? void 0 : e.layoutBox)
            }
            updateScroll(t = "measure") {
                let e = Boolean(this.options.layoutScroll && this.instance);
                this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                    animationId: this.root.animationId,
                    phase: t,
                    isRoot: r(this.instance),
                    offset: n(this.instance)
                })
            }
            resetTransform() {
                var t;
                if (!y) return;
                const e = this.isLayoutDirty || this.shouldResetTransform,
                    n = this.projectionDelta && !(0, d.isDeltaZero)(this.projectionDelta),
                    r = null === (t = this.getTransformTemplate()) || void 0 === t ? void 0 : t(this.latestValues, ""),
                    o = r !== this.prevTransformTemplateValue;
                e && (n || (0, x.hasTransform)(this.latestValues) || o) && (y(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
            }
            measure(t = !0) {
                const e = this.measurePageBox();
                let n = this.removeElementScroll(e);
                var r;
                return t && (n = this.removeTransform(n)), Z((r = n).x), Z(r.y), {
                    animationId: this.root.animationId,
                    measuredBox: e,
                    layoutBox: n,
                    latestValues: {},
                    source: this.id
                }
            }
            measurePageBox() {
                const {
                    visualElement: t
                } = this.options;
                if (!t) return (0, f.createBox)();
                const e = t.measureViewportBox(),
                    {
                        scroll: n
                    } = this.root;
                return n && ((0, l.translateAxis)(e.x, n.offset.x), (0, l.translateAxis)(e.y, n.offset.y)), e
            }
            removeElementScroll(t) {
                const e = (0, f.createBox)();
                (0, u.copyBoxInto)(e, t);
                for (let n = 0; n < this.path.length; n++) {
                    const r = this.path[n],
                        {
                            scroll: o,
                            options: i
                        } = r;
                    if (r !== this.root && o && i.layoutScroll) {
                        if (o.isRoot) {
                            (0, u.copyBoxInto)(e, t);
                            const {
                                scroll: n
                            } = this.root;
                            n && ((0, l.translateAxis)(e.x, -n.offset.x), (0, l.translateAxis)(e.y, -n.offset.y))
                        }(0, l.translateAxis)(e.x, o.offset.x), (0, l.translateAxis)(e.y, o.offset.y)
                    }
                }
                return e
            }
            applyTransform(t, e = !1) {
                const n = (0, f.createBox)();
                (0, u.copyBoxInto)(n, t);
                for (let t = 0; t < this.path.length; t++) {
                    const r = this.path[t];
                    !e && r.options.layoutScroll && r.scroll && r !== r.root && (0, l.transformBox)(n, {
                        x: -r.scroll.offset.x,
                        y: -r.scroll.offset.y
                    }), (0, x.hasTransform)(r.latestValues) && (0, l.transformBox)(n, r.latestValues)
                }
                return (0, x.hasTransform)(this.latestValues) && (0, l.transformBox)(n, this.latestValues), n
            }
            removeTransform(t) {
                var e;
                const n = (0, f.createBox)();
                (0, u.copyBoxInto)(n, t);
                for (let t = 0; t < this.path.length; t++) {
                    const r = this.path[t];
                    if (!r.instance) continue;
                    if (!(0, x.hasTransform)(r.latestValues)) continue;
                    (0, x.hasScale)(r.latestValues) && r.updateSnapshot();
                    const o = (0, f.createBox)(),
                        i = r.measurePageBox();
                    (0, u.copyBoxInto)(o, i), (0, p.removeBoxTransforms)(n, r.latestValues, null === (e = r.snapshot) || void 0 === e ? void 0 : e.layoutBox, o)
                }
                return (0, x.hasTransform)(this.latestValues) && (0, p.removeBoxTransforms)(n, this.latestValues), n
            }
            setTargetDelta(t) {
                this.targetDelta = t, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection()
            }
            setOptions(t) {
                this.options = {
                    ...this.options,
                    ...t,
                    crossfade: void 0 === t.crossfade || t.crossfade
                }
            }
            clearMeasurements() {
                this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
            }
            resolveTargetDelta() {
                var t;
                const e = this.getLead();
                if (this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
                const {
                    layout: n,
                    layoutId: r
                } = this.options;
                if (this.layout && (n || r)) {
                    if (!this.targetDelta && !this.relativeTarget) {
                        const t = this.getClosestProjectingParent();
                        t && t.layout ? (this.relativeParent = t, this.relativeTarget = (0, f.createBox)(), this.relativeTargetOrigin = (0, f.createBox)(), (0, c.calcRelativePosition)(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), (0, u.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = (0, f.createBox)(), this.targetWithTransforms = (0, f.createBox)()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (0, c.calcRelativeBox)(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : (0, u.copyBoxInto)(this.target, this.layout.layoutBox), (0, l.applyBoxDelta)(this.target, this.targetDelta)) : (0, u.copyBoxInto)(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                        this.attemptToResolveRelativeTarget = !1;
                        const t = this.getClosestProjectingParent();
                        t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.relativeTarget = (0, f.createBox)(), this.relativeTargetOrigin = (0, f.createBox)(), (0, c.calcRelativePosition)(this.relativeTargetOrigin, this.target, t.target), (0, u.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                }
            }
            getClosestProjectingParent() {
                if (this.parent && !(0, x.hasScale)(this.parent.latestValues) && !(0, x.has2DTranslate)(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta || this.parent.options.layoutRoot) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
            }
            calcProjection() {
                var t;
                const {
                    isProjectionDirty: e,
                    isTransformDirty: n
                } = this;
                this.isProjectionDirty = this.isTransformDirty = !1;
                const r = this.getLead(),
                    o = Boolean(this.resumingFrom) || this !== r;
                let i = !0;
                if (e && (i = !1), o && n && (i = !1), i) return;
                const {
                    layout: s,
                    layoutId: a
                } = this.options;
                if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !s && !a) return;
                (0, u.copyBoxInto)(this.layoutCorrected, this.layout.layoutBox), (0, l.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, o);
                const {
                    target: p
                } = r;
                if (!p) return;
                this.projectionDelta || (this.projectionDelta = (0, f.createDelta)(), this.projectionDeltaWithTransform = (0, f.createDelta)());
                const h = this.treeScale.x,
                    d = this.treeScale.y,
                    m = this.projectionTransform;
                (0, c.calcBoxDelta)(this.projectionDelta, this.layoutCorrected, p, this.latestValues), this.projectionTransform = (0, v.buildProjectionTransform)(this.projectionDelta, this.treeScale), this.projectionTransform === m && this.treeScale.x === h && this.treeScale.y === d || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p))
            }
            hide() {
                this.isVisible = !1
            }
            show() {
                this.isVisible = !0
            }
            scheduleRender(t = !0) {
                var e, n, r;
                null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e), t && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
            }
            setAnimationOrigin(t, e = !1) {
                var n, r;
                const o = this.snapshot,
                    i = (null == o ? void 0 : o.latestValues) || {},
                    s = {
                        ...this.latestValues
                    },
                    u = (0, f.createDelta)();
                this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                const l = (0, f.createBox)(),
                    p = (null == o ? void 0 : o.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
                    h = ((null === (r = this.getStack()) || void 0 === r ? void 0 : r.members.length) || 0) <= 1,
                    d = Boolean(p && !h && !0 === this.options.crossfade && !this.path.some(G));
                this.animationProgress = 0, this.mixTargetDelta = e => {
                    var n;
                    const r = e / 1e3;
                    var o, f, m, g;
                    N(u.x, t.x, r), N(u.y, t.y, r), this.setTargetDelta(u), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && ((0, c.calcRelativePosition)(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), o = this.relativeTarget, f = this.relativeTargetOrigin, m = l, g = r, U(o.x, f.x, m.x, g), U(o.y, f.y, m.y, g)), p && (this.animationValues = s, (0, a.mixValues)(s, i, this.latestValues, r, d, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = r
                }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
            }
            startAnimation(t) {
                var e, n;
                this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (o.cancelSync.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = o.sync.update((() => {
                    C.globalProjectionState.hasAnimatedSinceResize = !0, this.currentAnimation = (0, i.animate)(0, 1e3, {
                        ...t,
                        onUpdate: e => {
                            var n;
                            this.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                        },
                        onComplete: () => {
                            var e;
                            null === (e = t.onComplete) || void 0 === e || e.call(t), this.completeAnimation()
                        }
                    }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                }))
            }
            completeAnimation() {
                var t;
                this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
            }
            finishAnimation() {
                var t;
                this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
            }
            applyTransformsToTarget() {
                const t = this.getLead();
                let {
                    targetWithTransforms: e,
                    target: n,
                    layout: r,
                    latestValues: o
                } = t;
                if (e && n && r) {
                    if (this !== t && this.layout && r && W(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                        n = this.target || (0, f.createBox)();
                        const e = (0, c.calcLength)(this.layout.layoutBox.x);
                        n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                        const r = (0, c.calcLength)(this.layout.layoutBox.y);
                        n.y.min = t.target.y.min, n.y.max = n.y.min + r
                    }(0, u.copyBoxInto)(e, n), (0, l.transformBox)(e, o), (0, c.calcBoxDelta)(this.projectionDeltaWithTransform, this.layoutCorrected, e, o)
                }
            }
            registerSharedNode(t, e) {
                var n, r, o;
                this.sharedNodes.has(t) || this.sharedNodes.set(t, new(0, m.NodeStack));
                this.sharedNodes.get(t).add(e), e.promote({
                    transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                    preserveFollowOpacity: null === (o = null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === o ? void 0 : o.call(r, e)
                })
            }
            isLead() {
                const t = this.getStack();
                return !t || t.lead === this
            }
            getLead() {
                var t;
                const {
                    layoutId: e
                } = this.options;
                return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
            }
            getPrevLead() {
                var t;
                const {
                    layoutId: e
                } = this.options;
                return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
            }
            getStack() {
                const {
                    layoutId: t
                } = this.options;
                if (t) return this.root.sharedNodes.get(t)
            }
            promote({
                needsReset: t,
                transition: e,
                preserveFollowOpacity: n
            } = {}) {
                const r = this.getStack();
                r && r.promote(this, n), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                    transition: e
                })
            }
            relegate() {
                const t = this.getStack();
                return !!t && t.relegate(this)
            }
            resetRotation() {
                const {
                    visualElement: t
                } = this.options;
                if (!t) return;
                let e = !1;
                const {
                    latestValues: n
                } = t;
                if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (e = !0), !e) return;
                const r = {};
                for (let e = 0; e < S.length; e++) {
                    const o = "rotate" + S[e];
                    n[o] && (r[o] = n[o], t.setStaticValue(o, 0))
                }
                null == t || t.render();
                for (const e in r) t.setStaticValue(e, r[e]);
                t.scheduleRender()
            }
            getProjectionStyles(t = {}) {
                var e, n;
                const r = {};
                if (!this.instance || this.isSVG) return r;
                if (!this.isVisible) return {
                    visibility: "hidden"
                };
                r.visibility = "";
                const o = this.getTransformTemplate();
                if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = (0, V.resolveMotionValue)(t.pointerEvents) || "", r.transform = o ? o(this.latestValues, "") : "none", r;
                const i = this.getLead();
                if (!this.projectionDelta || !this.layout || !i.target) {
                    const e = {};
                    return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = (0, V.resolveMotionValue)(t.pointerEvents) || ""), this.hasProjected && !(0, x.hasTransform)(this.latestValues) && (e.transform = o ? o({}, "") : "none", this.hasProjected = !1), e
                }
                const s = i.animationValues || i.latestValues;
                this.applyTransformsToTarget(), r.transform = (0, v.buildProjectionTransform)(this.projectionDeltaWithTransform, this.treeScale, s), o && (r.transform = o(s, r.transform));
                const {
                    x: a,
                    y: u
                } = this.projectionDelta;
                r.transformOrigin = `${100*a.origin}% ${100*u.origin}% 0`, i.animationValues ? r.opacity = i === this ? null !== (n = null !== (e = s.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : r.opacity = i === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0;
                for (const t in g.scaleCorrectors) {
                    if (void 0 === s[t]) continue;
                    const {
                        correct: e,
                        applyTo: n
                    } = g.scaleCorrectors[t], o = "none" === r.transform ? s[t] : e(s[t], i);
                    if (n) {
                        const t = n.length;
                        for (let e = 0; e < t; e++) r[n[e]] = o
                    } else r[t] = o
                }
                return this.options.layoutId && (r.pointerEvents = i === this ? (0, V.resolveMotionValue)(t.pointerEvents) || "" : "none"), r
            }
            clearSnapshot() {
                this.resumeFrom = this.snapshot = void 0
            }
            resetTree() {
                this.root.nodes.forEach((t => {
                    var e;
                    return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                })), this.root.nodes.forEach(B), this.root.sharedNodes.clear()
            }
            constructor(t, n = {}, r = (null == e ? void 0 : e())) {
                this.id = E++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                    x: 1,
                    y: 1
                }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                }, this.updateProjection = () => {
                    this.nodes.forEach(M), this.nodes.forEach(I), this.nodes.forEach(j)
                }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = n, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
                for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                this.root === this && (this.nodes = new(0, b.FlatTree))
            }
        }
    }

    function A(t) {
        t.updateLayout()
    }

    function D(t) {
        var e, n, r;
        const o = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
            const {
                layoutBox: e,
                measuredBox: n
            } = t.layout, {
                animationType: r
            } = t.options, i = o.source !== t.layout.source;
            "size" === r ? (0, y.eachAxis)((t => {
                const n = i ? o.measuredBox[t] : o.layoutBox[t],
                    r = (0, c.calcLength)(n);
                n.min = e[t].min, n.max = n.min + r
            })) : W(r, o.layoutBox, e) && (0, y.eachAxis)((t => {
                const n = i ? o.measuredBox[t] : o.layoutBox[t],
                    r = (0, c.calcLength)(e[t]);
                n.max = n.min + r
            }));
            const s = (0, f.createDelta)();
            (0, c.calcBoxDelta)(s, e, o.layoutBox);
            const a = (0, f.createDelta)();
            i ? (0, c.calcBoxDelta)(a, t.applyTransform(n, !0), o.measuredBox) : (0, c.calcBoxDelta)(a, e, o.layoutBox);
            const u = !(0, d.isDeltaZero)(s);
            let l = !1;
            if (!t.resumeFrom) {
                const n = t.getClosestProjectingParent();
                if (n && !n.resumeFrom) {
                    const {
                        snapshot: r,
                        layout: i
                    } = n;
                    if (r && i) {
                        const s = (0, f.createBox)();
                        (0, c.calcRelativePosition)(s, o.layoutBox, r.layoutBox);
                        const a = (0, f.createBox)();
                        (0, c.calcRelativePosition)(a, e, i.layoutBox), (0, d.boxEquals)(s, a) || (l = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = s, t.relativeParent = n)
                    }
                }
            }
            t.notifyListeners("didUpdate", {
                layout: e,
                snapshot: o,
                delta: a,
                layoutDelta: s,
                hasLayoutChanged: u,
                hasRelativeTargetChanged: l
            })
        } else t.isLead() && (null === (r = (n = t.options).onExitComplete) || void 0 === r || r.call(n));
        t.options.transition = void 0
    }

    function M(t) {
        t.isProjectionDirty || (t.isProjectionDirty = Boolean(t.parent && t.parent.isProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = Boolean(t.parent && t.parent.isTransformDirty))
    }

    function R(t) {
        t.clearSnapshot()
    }

    function B(t) {
        t.clearMeasurements()
    }

    function k(t) {
        const {
            visualElement: e
        } = t.options;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notify("BeforeLayoutMeasure"), t.resetTransform()
    }

    function L(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
    }

    function I(t) {
        t.resolveTargetDelta()
    }

    function j(t) {
        t.calcProjection()
    }

    function F(t) {
        t.resetRotation()
    }

    function O(t) {
        t.removeLeadSnapshot()
    }

    function N(t, e, n) {
        t.translate = (0, P.mix)(e.translate, 0, n), t.scale = (0, P.mix)(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
    }

    function U(t, e, n, r) {
        t.min = (0, P.mix)(e.min, n.min, r), t.max = (0, P.mix)(e.max, n.max, r)
    }

    function G(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
    }
    const H = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    };

    function z(t, e) {
        let n = t.root;
        for (let e = t.path.length - 1; e >= 0; e--)
            if (Boolean(t.path[e].instance)) {
                n = t.path[e];
                break
            } const r = (n && n !== t.root ? n.instance : document).querySelector(`[data-projection-id="${e}"]`);
        r && t.mount(r, !0)
    }

    function Z(t) {
        t.min = Math.round(t.min), t.max = Math.round(t.max)
    }

    function W(t, e, n) {
        return "position" === t || "preserve-aspect" === t && !(0, c.isNear)((0, d.aspectRatio)(e), (0, d.aspectRatio)(n), .2)
    }
})), n.register("aFq3x", (function(e, r) {
    t(e.exports, "animate", (function() {
        return a
    }));
    var o = n("6n6hr"),
        i = n("ajNLe"),
        s = n("inWou");

    function a(t, e, n = {}) {
        const r = (0, s.isMotionValue)(t) ? t : (0, i.motionValue)(t);
        return r.start((0, o.createMotionValueAnimation)("", r, e, n)), {
            stop: () => r.stop(),
            isAnimating: () => r.isAnimating()
        }
    }
})), n.register("jt5Bb", (function(e, r) {
    t(e.exports, "mixValues", (function() {
        return h
    }));
    var o = n("4eMpm"),
        i = n("jf17W"),
        s = n("jLuHw"),
        a = n("k88Qd"),
        u = n("gEGeb");
    const l = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        c = l.length,
        p = t => "string" == typeof t ? parseFloat(t) : t,
        f = t => "number" == typeof t || u.px.test(t);

    function h(t, e, n, r, o, i) {
        o ? (t.opacity = (0, s.mix)(0, void 0 !== n.opacity ? n.opacity : 1, m(r)), t.opacityExit = (0, s.mix)(void 0 !== e.opacity ? e.opacity : 1, 0, g(r))) : i && (t.opacity = (0, s.mix)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
        for (let o = 0; o < c; o++) {
            const i = `border${l[o]}Radius`;
            let a = d(e, i),
                c = d(n, i);
            if (void 0 === a && void 0 === c) continue;
            a || (a = 0), c || (c = 0);
            0 === a || 0 === c || f(a) === f(c) ? (t[i] = Math.max((0, s.mix)(p(a), p(c), r), 0), (u.percent.test(c) || u.percent.test(a)) && (t[i] += "%")) : t[i] = c
        }(e.rotate || n.rotate) && (t.rotate = (0, s.mix)(e.rotate || 0, n.rotate || 0, r))
    }

    function d(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
    }
    const m = v(0, .5, o.circOut),
        g = v(.5, .95, a.noop);

    function v(t, e, n) {
        return r => r < t ? 0 : r > e ? 1 : n((0, i.progress)(t, e, r))
    }
})), n.register("a9FFJ", (function(e, n) {
    function r(t, e) {
        t.min = e.min, t.max = e.max
    }

    function o(t, e) {
        r(t.x, e.x), r(t.y, e.y)
    }
    t(e.exports, "copyBoxInto", (function() {
        return o
    }))
})), n.register("kcHvl", (function(e, r) {
    t(e.exports, "removeBoxTransforms", (function() {
        return p
    }));
    var o = n("jLuHw"),
        i = n("gEGeb"),
        s = n("j0K26");

    function a(t, e, n, r, o) {
        return t -= e, t = (0, s.scalePoint)(t, 1 / n, r), void 0 !== o && (t = (0, s.scalePoint)(t, 1 / o, r)), t
    }

    function u(t, e, [n, r, s], u, l) {
        ! function(t, e = 0, n = 1, r = .5, s, u = t, l = t) {
            i.percent.test(e) && (e = parseFloat(e), e = (0, o.mix)(l.min, l.max, e / 100) - l.min);
            if ("number" != typeof e) return;
            let c = (0, o.mix)(u.min, u.max, r);
            t === u && (c -= e), t.min = a(t.min, e, n, c, s), t.max = a(t.max, e, n, c, s)
        }(t, e[n], e[r], e[s], e.scale, u, l)
    }
    const l = ["x", "scaleX", "originX"],
        c = ["y", "scaleY", "originY"];

    function p(t, e, n, r) {
        u(t.x, e, l, null == n ? void 0 : n.x, null == r ? void 0 : r.x), u(t.y, e, c, null == n ? void 0 : n.y, null == r ? void 0 : r.y)
    }
})), n.register("acPfR", (function(e, r) {
    t(e.exports, "isDeltaZero", (function() {
        return s
    })), t(e.exports, "boxEquals", (function() {
        return a
    })), t(e.exports, "aspectRatio", (function() {
        return u
    }));
    var o = n("Og3HR");

    function i(t) {
        return 0 === t.translate && 1 === t.scale
    }

    function s(t) {
        return i(t.x) && i(t.y)
    }

    function a(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
    }

    function u(t) {
        return (0, o.calcLength)(t.x) / (0, o.calcLength)(t.y)
    }
})), n.register("7rPZX", (function(e, r) {
    t(e.exports, "NodeStack", (function() {
        return i
    }));
    var o = n("hPqTy");
    class i {
        add(t) {
            (0, o.addUniqueItem)(this.members, t), t.scheduleRender()
        }
        remove(t) {
            if ((0, o.removeItem)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                const t = this.members[this.members.length - 1];
                t && this.promote(t)
            }
        }
        relegate(t) {
            const e = this.members.findIndex((e => t === e));
            if (0 === e) return !1;
            let n;
            for (let t = e; t >= 0; t--) {
                const e = this.members[t];
                if (!1 !== e.isPresent) {
                    n = e;
                    break
                }
            }
            return !!n && (this.promote(n), !0)
        }
        promote(t, e) {
            var n;
            const r = this.lead;
            if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
                r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0);
                const {
                    crossfade: o
                } = t.options;
                !1 === o && r.hide()
            }
        }
        exitAnimationComplete() {
            this.members.forEach((t => {
                var e, n, r, o, i;
                null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (i = null === (r = t.resumingFrom) || void 0 === r ? void 0 : (o = r.options).onExitComplete) || void 0 === i || i.call(o)
            }))
        }
        scheduleRender() {
            this.members.forEach((t => {
                t.instance && t.scheduleRender(!1)
            }))
        }
        removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
        constructor() {
            this.members = []
        }
    }
})), n.register("5OBAZ", (function(e, n) {
    function r(t, e, n) {
        let r = "";
        const o = t.x.translate / e.x,
            i = t.y.translate / e.y;
        if ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `), 1 === e.x && 1 === e.y || (r += `scale(${1/e.x}, ${1/e.y}) `), n) {
            const {
                rotate: t,
                rotateX: e,
                rotateY: o
            } = n;
            t && (r += `rotate(${t}deg) `), e && (r += `rotateX(${e}deg) `), o && (r += `rotateY(${o}deg) `)
        }
        const s = t.x.scale * e.x,
            a = t.y.scale * e.y;
        return 1 === s && 1 === a || (r += `scale(${s}, ${a})`), r || "none"
    }
    t(e.exports, "buildProjectionTransform", (function() {
        return r
    }))
})), n.register("ce5Os", (function(e, r) {
    t(e.exports, "FlatTree", (function() {
        return s
    }));
    var o = n("hPqTy"),
        i = n("4ztPm");
    class s {
        add(t) {
            (0, o.addUniqueItem)(this.children, t), this.isDirty = !0
        }
        remove(t) {
            (0, o.removeItem)(this.children, t), this.isDirty = !0
        }
        forEach(t) {
            this.isDirty && this.children.sort(i.compareByDepth), this.isDirty = !1, this.children.forEach(t)
        }
        constructor() {
            this.children = [], this.isDirty = !1
        }
    }
})), n.register("4ztPm", (function(e, n) {
    t(e.exports, "compareByDepth", (function() {
        return r
    }));
    const r = (t, e) => t.depth - e.depth
})), n.register("h7naM", (function(e, r) {
    t(e.exports, "DocumentProjectionNode", (function() {
        return s
    }));
    var o = n("645Ce"),
        i = n("f3KHs");
    const s = (0, o.createProjectionNode)({
        attachResizeListener: (t, e) => (0, i.addDomEvent)(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    })
}));