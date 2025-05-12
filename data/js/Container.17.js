function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function (d, e) {
    a(d.exports, 'motion', function () {
        return _o;
    });
    c('.....');
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    const n = {
            ...i.animations,
            ...h.gestureAnimations,
            ...j.drag,
            ...l.layoutFeatures
        }, _o = (0, f.createMotionProxy)((p, q) => (0, g.createDomMotionConfig)(p, q, n, k.createDomVisualElement, m.HTMLProjectionNode));
}), c.register('.....', function (d, e) {
    a(d.exports, 'createMotionComponent', function () {
        return _u;
    });
    var f = c('.....'), g = (f = c('.....'), c('.....')), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....');
    function _u({
        preloadedFeatures: v,
        createVisualElement: w,
        projectionNodeConstructor: x,
        useRender: y,
        useVisualState: z,
        Component: A
    }) {
        v && (0, m.loadFeatures)(v);
        const B = (0, f.forwardRef)(function (C, D) {
            const E = {
                    ...(0, f.useContext)(g.MotionConfigContext),
                    ...C,
                    layoutId: _w(C)
                }, {isStatic: F} = E;
            let G = null;
            const H = (0, k.useCreateMotionContext)(C), I = F ? void 0 : (0, o.useProjectionId)(), J = z(C, F);
            if (!F && n.isBrowser) {
                H.visualElement = (0, i.useVisualElement)(A, J, E, w);
                const K = (0, f.useContext)(r.LazyContext).strict, L = (0, f.useContext)(s.SwitchLayoutGroupContext);
                H.visualElement && (G = H.visualElement.loadFeatures(E, K, v, I, x || l.featureDefinitions.projectionNodeConstructor, L));
            }
            return f.createElement(q.VisualElementHandler, {
                visualElement: H.visualElement,
                props: E
            }, G, f.createElement(h.MotionContext.Provider, { value: H }, K(A, C, I, (0, j.useMotionRef)(J, H.visualElement, D), J, F, H.visualElement)));
        });
        return B[t.motionComponentSymbol] = A, B;
    }
    function _w({layoutId: x}) {
        const y = (0, f.useContext)(p.LayoutGroupContext).id;
        return y && void 0 !== x ? y + '-' + x : x;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'MotionConfigContext', function () {
        return _f;
    });
    const _f = (0, c('.....').createContext)({
        transformPagePoint: g => g,
        isStatic: !1,
        reducedMotion: 'never'
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'MotionContext', function () {
        return _g;
    }), a(d.exports, 'useVisualElementContext', function () {
        return _h;
    });
    var f = c('.....');
    const _g = (0, f.createContext)({});
    function _h() {
        return (0, f.useContext)(_g).visualElement;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'useVisualElement', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    function _l(m, n, o, p) {
        const q = (0, h.useVisualElementContext)(), r = (0, f.useContext)(j.LazyContext), s = (0, f.useContext)(g.PresenceContext), t = (0, f.useContext)(k.MotionConfigContext).reducedMotion, u = (0, f.useRef)();
        p = p || r.renderer, !u.current && p && (u.current = p(m, {
            visualState: n,
            parent: _l,
            props: o,
            presenceId: s ? s.id : void 0,
            blockInitialAnimation: !!s && !1 === s.initial,
            reducedMotionConfig: t
        }));
        const v = u.current;
        (0, i.useIsomorphicLayoutEffect)(() => {
            v && v.render();
        });
        return (window.HandoffAppearAnimations ? i.useIsomorphicLayoutEffect : f.useEffect)(() => {
            v && v.animationState && v.animationState.animateChanges();
        }), v;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'PresenceContext', function () {
        return _f;
    });
    const _f = (0, c('.....').createContext)(null);
}), c.register('.....', function (d, e) {
    a(d.exports, 'useIsomorphicLayoutEffect', function () {
        return _g;
    });
    var f = c('.....');
    const _g = c('.....').isBrowser ? f.useLayoutEffect : f.useEffect;
}), c.register('.....', function (d, e) {
    a(d.exports, 'isBrowser', function () {
        return _f;
    });
    const _f = 'undefined' != typeof document;
}), c.register('.....', function (d, e) {
    a(d.exports, 'LazyContext', function () {
        return _f;
    });
    const _f = (0, c('.....').createContext)({ strict: !1 });
}), c.register('.....', function (d, e) {
    a(d.exports, 'useMotionRef', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, j, k) {
        return (0, f.useCallback)(l => {
            l && i.mount && i.mount(l), j && (l ? j.mount(l) : j.unmount()), k && ('function' == typeof k ? k(l) : (0, g.isRefObject)(k) && (k.current = l));
        }, [j]);
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return 'object' == typeof g && Object.prototype.hasOwnProperty.call(g, 'current');
    }
    a(d.exports, 'isRefObject', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'useCreateMotionContext', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j) {
        const {
            initial: k,
            animate: l
        } = (0, h.getCurrentTreeVariants)(j, (0, f.useContext)(g.MotionContext));
        return (0, f.useMemo)(() => ({
            initial: k,
            animate: l
        }), [
            _l(k),
            _l(l)
        ]);
    }
    function _l(m) {
        return Array.isArray(m) ? m.join(' ') : m;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'getCurrentTreeVariants', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, j) {
        if ((0, g.isControllingVariants)(i)) {
            const {
                initial: k,
                animate: l
            } = i;
            return {
                initial: !1 === j || (0, f.isVariantLabel)(j) ? j : void 0,
                animate: (0, f.isVariantLabel)(l) ? l : void 0
            };
        }
        return !1 !== i.inherit ? j : {};
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return 'string' == typeof g || Array.isArray(g);
    }
    a(d.exports, 'isVariantLabel', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'isControllingVariants', function () {
        return _i;
    }), a(d.exports, 'isVariantNode', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....');
    const h = [
        'initial',
        'animate',
        'exit',
        'whileHover',
        'whileDrag',
        'whileTap',
        'whileFocus',
        'whileInView'
    ];
    function _i(j) {
        return (0, f.isAnimationControls)(j.animate) || h.some(k => (0, g.isVariantLabel)(j[k]));
    }
    function _j(k) {
        return Boolean(_i(k) || k.variants);
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return 'object' == typeof g && 'function' == typeof g.start;
    }
    a(d.exports, 'isAnimationControls', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'featureDefinitions', function () {
        return _g;
    });
    const f = g => ({ isEnabled: h => g.some(i => !!h[i]) }), _g = {
            measureLayout: f([
                'layout',
                'layoutId',
                'drag'
            ]),
            animation: f([
                'animate',
                'exit',
                'variants',
                'whileHover',
                'whileTap',
                'whileFocus',
                'whileDrag',
                'whileInView'
            ]),
            exit: f(['exit']),
            drag: f([
                'drag',
                'dragControls'
            ]),
            focus: f(['whileFocus']),
            hover: f([
                'whileHover',
                'onHoverStart',
                'onHoverEnd'
            ]),
            tap: f([
                'whileTap',
                'onTap',
                'onTapStart',
                'onTapCancel'
            ]),
            pan: f([
                'onPan',
                'onPanStart',
                'onPanSessionStart',
                'onPanEnd'
            ]),
            inView: f([
                'whileInView',
                'onViewportEnter',
                'onViewportLeave'
            ])
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'loadFeatures', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h) {
        for (const i in h)
            'projectionNodeConstructor' === i ? f.featureDefinitions.projectionNodeConstructor = h[i] : f.featureDefinitions[i].Component = h[i];
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'useProjectionId', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    let h = 1;
    function _i() {
        return (0, f.useConstant)(() => {
            if (g.globalProjectionState.hasEverUpdated)
                return h++;
        });
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'useConstant', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h) {
        const i = (0, f.useRef)(null);
        return null === i.current && (i.current = h()), i.current;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'globalProjectionState', function () {
        return _f;
    });
    const _f = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'LayoutGroupContext', function () {
        return _f;
    });
    const _f = (0, c('.....').createContext)({});
}), c.register('.....', function (d, e) {
    a(d.exports, 'VisualElementHandler', function () {
        return _g;
    });
    var f = c('.....');
    class _g extends b(f).Component {
        getSnapshotBeforeUpdate() {
            const {
                visualElement: h,
                props: i
            } = this.props;
            return h && h.setProps(i), null;
        }
        componentDidUpdate() {
        }
        render() {
            return this.props.children;
        }
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'SwitchLayoutGroupContext', function () {
        return _f;
    });
    const _f = (0, c('.....').createContext)({});
}), c.register('.....', function (d, e) {
    a(d.exports, 'motionComponentSymbol', function () {
        return _f;
    });
    const _f = Symbol.for('motionComponentSymbol');
}), c.register('.....', function (d, e) {
    a(d.exports, 'createMotionProxy', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h) {
        function i(j, k = {}) {
            return (0, f.createMotionComponent)(h(j, k));
        }
        if ('undefined' == typeof Proxy)
            return i;
        const j = new Map();
        return new Proxy(i, { get: (k, l) => (j.has(l) || j.set(l, i(l)), j.get(l)) });
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'createDomMotionConfig', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    function _j(k, {
        forwardMotionProps: l = !1
    }, m, n, o) {
        return {
            ...(0, f.isSVGComponent)(k) ? h.svgMotionConfig : i.htmlMotionConfig,
            preloadedFeatures: m,
            useRender: (0, g.createUseRender)(l),
            createVisualElement: n,
            projectionNodeConstructor: o,
            Component: k
        };
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'isSVGComponent', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h) {
        return 'string' == typeof h && !h.includes('-') && !!(f.lowercaseSVGElements.indexOf(h) > -1 || /[A-Z]/.test(h));
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'lowercaseSVGElements', function () {
        return _f;
    });
    const _f = [
        'animate',
        'circle',
        'defs',
        'desc',
        'ellipse',
        'g',
        'image',
        'line',
        'filter',
        'marker',
        'mask',
        'metadata',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'rect',
        'stop',
        'switch',
        'symbol',
        'svg',
        'text',
        'tspan',
        'use',
        'view'
    ];
}), c.register('.....', function (d, e) {
    a(d.exports, 'createUseRender', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    function _l(m = !1) {
        return (n, o, p, q, {latestValues: r}, s) => {
            const t = ((0, i.isSVGComponent)(n) ? j.useSVGProps : g.useHTMLProps)(o, r, s, n), u = {
                    ...(0, h.filterProps)(o, 'string' == typeof n, m),
                    ...t,
                    ref: q
                }, {children: v} = o, w = (0, f.useMemo)(() => (0, k.isMotionValue)(v) ? v.get() : v, [v]);
            return p && (u['data-projection-id'] = p), (0, f.createElement)(n, {
                ...u,
                children: w
            });
        };
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'copyRawValuesOnly', function () {
        return _k;
    }), a(d.exports, 'useHTMLProps', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    function _k(l, m, n) {
        for (const o in m)
            (0, h.isMotionValue)(m[o]) || (0, g.isForcedMotionValue)(o, n) || (l[o] = m[o]);
    }
    function m(n, o, p) {
        const q = {};
        return _k(q, n.style || {}, n), Object.assign(q, function ({transformTemplate: r}, s, t) {
            return (0, f.useMemo)(() => {
                const u = (0, j.createHtmlRenderState)();
                return (0, i.buildHTMLStyles)(u, s, { enableHardwareAcceleration: !t }, r), Object.assign({}, u.vars, u.style);
            }, [s]);
        }(n, o, p)), n.transformValues ? n.transformValues(q) : q;
    }
    function _o(p, q, r) {
        const s = {}, t = m(p, q, r);
        return p.drag && !1 !== p.dragListener && (s.draggable = !1, t.userSelect = t.WebkitUserSelect = t.WebkitTouchCallout = 'none', t.touchAction = !0 === p.drag ? 'none' : 'pan-' + ('x' === p.drag ? 'y' : 'x')), s.style = t, s;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'isForcedMotionValue', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, {
        layout: j,
        layoutId: k
    }) {
        return g.transformProps.has(i) || i.startsWith('origin') || (j || void 0 !== k) && (!!f.scaleCorrectors[i] || 'opacity' === i);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'scaleCorrectors', function () {
        return _f;
    }), a(d.exports, 'addScaleCorrector', function () {
        return _g;
    });
    const _f = {};
    function _g(h) {
        Object.assign(_f, h);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'transformPropOrder', function () {
        return _f;
    }), a(d.exports, 'transformProps', function () {
        return _g;
    });
    const _f = [
            'transformPerspective',
            'x',
            'y',
            'z',
            'translateX',
            'translateY',
            'translateZ',
            'scale',
            'scaleX',
            'scaleY',
            'rotate',
            'rotateX',
            'rotateY',
            'rotateZ',
            'skew',
            'skewX',
            'skewY'
        ], _g = new Set(_f);
}), c.register('.....', function (d, e) {
    a(d.exports, 'isMotionValue', function () {
        return _f;
    });
    const _f = g => !!(null == g ? void 0 : g.getVelocity);
}), c.register('.....', function (d, e) {
    a(d.exports, 'buildHTMLStyles', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    function _k(l, m, n, o) {
        const {
            style: p,
            vars: q,
            transform: r,
            transformKeys: s,
            transformOrigin: t
        } = l;
        s.length = 0;
        let u = !1, v = !1, w = !0;
        for (const x in m) {
            const y = m[l];
            if ((0, g.isCSSVariable)(l)) {
                q[l] = n;
                continue;
            }
            const z = j.numberValueTypes[l], A = (0, i.getValueAsType)(n, o);
            if (h.transformProps.has(l)) {
                if (u = !0, r[l] = A, s.push(l), !w)
                    continue;
                n !== (o.default || 0) && (w = !1);
            } else
                l.startsWith('origin') ? (v = !0, t[l] = A) : _k[l] = A;
        }
        if (m.transform || (u || o ? _k.transform = (0, A.buildTransform)(l, n, w, o) : _k.transform && (_k.transform = 'none')), v) {
            const {
                originX: B = '50%',
                originY: C = '50%',
                originZ: D = 0
            } = t;
            _k.transformOrigin = `${ B } ${ C } ${ D }`;
        }
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'buildTransform', function () {
        return _i;
    });
    var f = c('.....');
    const g = {
            x: 'translateX',
            y: 'translateY',
            z: 'translateZ',
            transformPerspective: 'perspective'
        }, h = (i, j) => f.transformPropOrder.indexOf(i) - f.transformPropOrder.indexOf(j);
    function _i({
        transform: j,
        transformKeys: k
    }, {
        enableHardwareAcceleration: l = !0,
        allowTransformNone: m = !0
    }, n, o) {
        let p = '';
        k.sort(h);
        for (const q of k)
            p += `${ g[l] || l }(${ j[l] }) `;
        return l && !j.z && (p += 'translateZ(0)'), p = p.trim(), o ? p = o(j, n ? '' : p) : m && n && (p = 'none'), p;
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return g.startsWith('--');
    }
    a(d.exports, 'isCSSVariable', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'getValueAsType', function () {
        return _f;
    });
    const _f = (g, h) => h && 'number' == typeof g ? h.transform(g) : g;
}), c.register('.....', function (d, e) {
    a(d.exports, 'numberValueTypes', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const _i = {
        borderWidth: g.px,
        borderTopWidth: g.px,
        borderRightWidth: g.px,
        borderBottomWidth: g.px,
        borderLeftWidth: g.px,
        borderRadius: g.px,
        radius: g.px,
        borderTopLeftRadius: g.px,
        borderTopRightRadius: g.px,
        borderBottomRightRadius: g.px,
        borderBottomLeftRadius: g.px,
        width: g.px,
        maxWidth: g.px,
        height: g.px,
        maxHeight: g.px,
        size: g.px,
        top: g.px,
        right: g.px,
        bottom: g.px,
        left: g.px,
        padding: g.px,
        paddingTop: g.px,
        paddingRight: g.px,
        paddingBottom: g.px,
        paddingLeft: g.px,
        margin: g.px,
        marginTop: g.px,
        marginRight: g.px,
        marginBottom: g.px,
        marginLeft: g.px,
        rotate: g.degrees,
        rotateX: g.degrees,
        rotateY: g.degrees,
        rotateZ: g.degrees,
        scale: f.scale,
        scaleX: f.scale,
        scaleY: f.scale,
        scaleZ: f.scale,
        skew: g.degrees,
        skewX: g.degrees,
        skewY: g.degrees,
        distance: g.px,
        translateX: g.px,
        translateY: g.px,
        translateZ: g.px,
        x: g.px,
        y: g.px,
        z: g.px,
        perspective: g.px,
        transformPerspective: g.px,
        opacity: f.alpha,
        originX: g.progressPercentage,
        originY: g.progressPercentage,
        originZ: g.px,
        zIndex: h.int,
        fillOpacity: f.alpha,
        strokeOpacity: f.alpha,
        numOctaves: h.int
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'number', function () {
        return _g;
    }), a(d.exports, 'alpha', function () {
        return _h;
    }), a(d.exports, 'scale', function () {
        return _i;
    });
    var f = c('.....');
    const _g = {
            test: h => 'number' == typeof h,
            parse: parseFloat,
            transform: h => h
        }, _h = {
            ..._g,
            transform: i => (0, f.clamp)(0, 1, i)
        }, _i = {
            ..._g,
            default: 1
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'clamp', function () {
        return _f;
    });
    const _f = (g, h, i) => Math.min(Math.max(i, g), h);
}), c.register('.....', function (d, e) {
    a(d.exports, 'degrees', function () {
        return _h;
    }), a(d.exports, 'percent', function () {
        return _i;
    }), a(d.exports, 'px', function () {
        return _j;
    }), a(d.exports, 'vh', function () {
        return _k;
    }), a(d.exports, 'vw', function () {
        return _l;
    }), a(d.exports, 'progressPercentage', function () {
        return _m;
    });
    var f = c('.....');
    const g = h => ({
            test: i => (0, f.isString)(i) && i.endsWith(h) && 1 === i.split(' ').length,
            parse: parseFloat,
            transform: i => `${ i }${ h }`
        }), _h = g('deg'), _i = g('%'), _j = g('px'), _k = g('vh'), _l = g('vw'), _m = {
            ..._i,
            parse: n => _i.parse(n) / 100,
            transform: n => _i.transform(100 * n)
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'sanitize', function () {
        return _f;
    }), a(d.exports, 'floatRegex', function () {
        return _g;
    }), a(d.exports, 'colorRegex', function () {
        return _h;
    }), a(d.exports, 'singleColorRegex', function () {
        return _i;
    }), a(d.exports, 'isString', function () {
        return _j;
    });
    const _f = g => Math.round(100000 * g) / 100000, _g = /(-)?([\d]*\.?[\d])+/g, _h = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, _i = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
    function _j(k) {
        return 'string' == typeof k;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'int', function () {
        return _f;
    });
    const _f = {
        ...c('.....').number,
        transform: Math.round
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'createHtmlRenderState', function () {
        return _f;
    });
    const _f = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'filterProps', function () {
        return _i;
    });
    var f = c('.....');
    let g = h => !(0, f.isValidMotionProp)(h);
    try {
        (_h = c('.....').default) && (g = h => h.startsWith('on') ? !(0, f.isValidMotionProp)(h) : _h(h));
    } catch (a) {
    }
    var _h;
    function _i(j, k, l) {
        const m = {};
        for (const n in j)
            'values' === n && 'object' == typeof j.values || (g(n) || !0 === l && (0, f.isValidMotionProp)(n) || !k && !(0, f.isValidMotionProp)(n) || j.draggable && n.startsWith('onDrag')) && (m[n] = j[n]);
        return m;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'isValidMotionProp', function () {
        return _g;
    });
    const f = new Set([
        'initial',
        'style',
        'values',
        'variants',
        'transition',
        'transformTemplate',
        'transformValues',
        'custom',
        'inherit',
        'layout',
        'layoutId',
        'layoutDependency',
        'layoutScroll',
        'layoutRoot',
        'onLayoutAnimationStart',
        'onLayoutAnimationComplete',
        'onLayoutMeasure',
        'onBeforeLayoutMeasure',
        'onAnimationStart',
        'onAnimationComplete',
        'onUpdate',
        'onDragStart',
        'onDrag',
        'onDragEnd',
        'onMeasureDragConstraints',
        'onDirectionLock',
        'onDragTransitionEnd',
        'drag',
        'dragControls',
        'dragListener',
        'dragConstraints',
        'dragDirectionLock',
        'dragSnapToOrigin',
        '_dragX',
        '_dragY',
        'dragElastic',
        'dragMomentum',
        'dragPropagation',
        'dragTransition',
        'onHoverStart',
        'onHoverEnd',
        'whileInView',
        'onViewportEnter',
        'onViewportLeave',
        'viewport',
        'whileTap',
        'onTap',
        'onTapStart',
        'onTapCancel',
        'animate',
        'exit',
        'variants',
        'whileHover',
        'whileTap',
        'whileFocus',
        'whileDrag',
        'whileInView',
        'onPan',
        'onPanStart',
        'onPanSessionStart',
        'onPanEnd'
    ]);
    function _g(h) {
        return f.has(h);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, _h = (0, f.default)(function (i) {
            return g.test(i) || 111 === i.charCodeAt(0) && 110 === i.charCodeAt(1) && i.charCodeAt(2) < 91;
        });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = function (g) {
        var h = {};
        return function (i) {
            return void 0 === h[i] && (h[i] = g(i)), h[i];
        };
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'useSVGProps', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    function _k(l, m, n, o) {
        const p = (0, f.useMemo)(() => {
            const q = (0, i.createSvgRenderState)();
            return (0, h.buildSVGAttrs)(q, m, { enableHardwareAcceleration: !1 }, (0, j.isSVGTag)(o), l.transformTemplate), {
                ...q.attrs,
                style: { ...q.style }
            };
        }, [m]);
        if (l.style) {
            const q = {};
            (0, g.copyRawValuesOnly)(m, l.style, l), _k.style = {
                ...m,
                ..._k.style
            };
        }
        return _k;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'buildSVGAttrs', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j, {
        attrX: k,
        attrY: l,
        originX: m,
        originY: n,
        pathLength: o,
        pathSpacing: p = 1,
        pathOffset: q = 0,
        ...r
    }, s, t, u) {
        if ((0, f.buildHTMLStyles)(j, r, s, u), t)
            return void (j.style.viewBox && (j.attrs.viewBox = j.style.viewBox));
        j.attrs = j.style, j.style = {};
        const {
            attrs: v,
            style: w,
            dimensions: x
        } = j;
        v.transform && (x && (w.transform = v.transform), delete v.transform), x && (void 0 !== m || void 0 !== n || w.transform) && (w.transformOrigin = (0, g.calcSVGTransformOrigin)(x, void 0 !== m ? m : 0.5, void 0 !== n ? n : 0.5)), void 0 !== k && (v.x = k), void 0 !== l && (v.y = l), void 0 !== o && (0, h.buildSVGPath)(v, o, p, q, !1);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'calcSVGTransformOrigin', function () {
        return _h;
    });
    var f = c('.....');
    function g(h, i, j) {
        return 'string' == typeof h ? h : f.px.transform(i + j * h);
    }
    function _h(i, j, k) {
        return `${ g(j, i.x, i.width) } ${ g(k, i.y, i.height) }`;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'buildSVGPath', function () {
        return _i;
    });
    var f = c('.....');
    const g = {
            offset: 'stroke-dashoffset',
            array: 'stroke-dasharray'
        }, h = {
            offset: 'strokeDashoffset',
            array: 'strokeDasharray'
        };
    function _i(j, k, l = 1, m = 0, n = !0) {
        j.pathLength = 1;
        const o = n ? g : h;
        j[o.offset] = f.px.transform(-m);
        const p = f.px.transform(k), q = f.px.transform(l);
        j[o.array] = `${ p } ${ q }`;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'createSvgRenderState', function () {
        return _g;
    });
    var f = c('.....');
    const _g = () => ({
        ...(0, f.createHtmlRenderState)(),
        attrs: {}
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'isSVGTag', function () {
        return _f;
    });
    const _f = g => 'string' == typeof g && 'svg' === g.toLowerCase();
}), c.register('.....', function (d, e) {
    a(d.exports, 'svgMotionConfig', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    const _l = {
        useVisualState: (0, h.makeUseVisualState)({
            scrapeMotionValuesFromProps: g.scrapeMotionValuesFromProps,
            createRenderState: i.createSvgRenderState,
            onMount: (m, n, {
                renderState: o,
                latestValues: p
            }) => {
                try {
                    o.dimensions = 'function' == typeof n.getBBox ? n.getBBox() : n.getBoundingClientRect();
                } catch (m) {
                    o.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                }
                (0, j.buildSVGAttrs)(o, p, { enableHardwareAcceleration: !1 }, (0, k.isSVGTag)(n.tagName), m.transformTemplate), (0, f.renderSVG)(n, o);
            }
        })
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'renderSVG', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j, k, l, m) {
        (0, g.renderHTML)(j, k, void 0, m);
        for (const n in k.attrs)
            j.setAttribute(h.camelCaseAttributes.has(l) ? l : (0, f.camelToDash)(l), k.attrs[l]);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'camelToDash', function () {
        return _f;
    });
    const _f = g => g.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}), c.register('.....', function (d, e) {
    function f(g, {
        style: h,
        vars: i
    }, j, k) {
        Object.assign(g.style, h, k && k.getProjectionStyles(j));
        for (const l in i)
            g.style.setProperty(h, i[h]);
    }
    a(l.exports, 'renderHTML', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'camelCaseAttributes', function () {
        return _f;
    });
    const _f = new Set([
        'baseFrequency',
        'diffuseConstant',
        'kernelMatrix',
        'kernelUnitLength',
        'keySplines',
        'keyTimes',
        'limitingConeAngle',
        'markerHeight',
        'markerWidth',
        'numOctaves',
        'targetX',
        'targetY',
        'surfaceScale',
        'specularConstant',
        'specularExponent',
        'stdDeviation',
        'tableValues',
        'viewBox',
        'gradientTransform',
        'pathLength',
        'startOffset',
        'textLength',
        'lengthAdjust'
    ]);
}), c.register('.....', function (d, e) {
    a(d.exports, 'scrapeMotionValuesFromProps', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, j) {
        const k = (0, g.scrapeMotionValuesFromProps)(i, j);
        for (const l in i)
            if ((0, f.isMotionValue)(i[l]) || (0, f.isMotionValue)(j[l])) {
                k['x' === l || 'y' === l ? 'attr' + l.toUpperCase() : l] = i[l];
            }
        return k;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'scrapeMotionValuesFromProps', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, j) {
        const {style: k} = i, l = {};
        for (const m in k)
            ((0, g.isMotionValue)(k[_h]) || j.style && (0, g.isMotionValue)(j.style[_h]) || (0, f.isForcedMotionValue)(_h, i)) && (l[_h] = k[_h]);
        return l;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'makeUseVisualState', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    const _n = o => (p, q) => {
        const r = (0, f.useContext)(l.MotionContext), s = (0, f.useContext)(h.PresenceContext), t = () => function ({
                scrapeMotionValuesFromProps: u,
                createRenderState: v,
                onMount: w
            }, x, y, z) {
                const A = {
                    latestValues: _o(x, y, z, u),
                    renderState: v()
                };
                return w && (A.mount = B => w(x, B, A)), A;
            }(o, p, r, s);
        return q ? t() : (0, j.useConstant)(t);
    };
    function _o(p, q, r, s) {
        const t = {}, u = s(p, {});
        for (const v in u)
            t[p] = (0, k.resolveMotionValue)(u[p]);
        let {
            initial: w,
            animate: x
        } = p;
        const y = (0, m.isControllingVariants)(p), z = (0, m.isVariantNode)(p);
        q && _o && !y && !1 !== p.inherit && (void 0 === w && (w = q.initial), void 0 === x && (x = q.animate));
        let A = !!r && !1 === r.initial;
        A = A || !1 === w;
        const B = A ? x : w;
        if (B && 'boolean' != typeof B && !(0, g.isAnimationControls)(B)) {
            (Array.isArray(B) ? B : [B]).forEach(C => {
                const D = (0, i.resolveVariantFromProps)(p, C);
                if (!D)
                    return;
                const {
                    transitionEnd: E,
                    transition: F,
                    ...G
                } = D;
                for (const H in G) {
                    let I = G[H];
                    if (Array.isArray(I)) {
                        I = I[A ? I.length - 1 : 0];
                    }
                    null !== I && (t[H] = I);
                }
                for (const I in E)
                    t[I] = E[I];
            });
        }
        return t;
    }
}), c.register('.....', function (d, e) {
    function f(g, h, i, j = {}, k = {}) {
        return 'function' == typeof h && (h = h(void 0 !== i ? i : g.custom, j, k)), 'string' == typeof h && (h = g.variants && g.variants[h]), 'function' == typeof h && (h = h(void 0 !== i ? i : g.custom, j, k)), h;
    }
    a(d.exports, 'resolveVariantFromProps', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'resolveMotionValue', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i) {
        const j = (0, g.isMotionValue)(i) ? i.get() : i;
        return (0, f.isCustomValue)(j) ? j.toValue() : j;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'isCustomValue', function () {
        return _g;
    }), a(d.exports, 'resolveFinalValueInKeyframes', function () {
        return _h;
    });
    var f = c('.....');
    const _g = h => Boolean(h && 'object' == typeof h && h.mix && h.toValue), _h = i => (0, f.isKeyframesTarget)(i) ? i[i.length - 1] || 0 : i;
}), c.register('.....', function (d, e) {
    a(d.exports, 'isKeyframesTarget', function () {
        return _f;
    });
    const _f = g => Array.isArray(g);
}), c.register('.....', function (d, e) {
    a(d.exports, 'htmlMotionConfig', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const _i = {
        useVisualState: (0, f.makeUseVisualState)({
            scrapeMotionValuesFromProps: g.scrapeMotionValuesFromProps,
            createRenderState: h.createHtmlRenderState
        })
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'gestureAnimations', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    const _k = {
        inView: (0, j.makeRenderlessComponent)(i.useViewport),
        tap: (0, j.makeRenderlessComponent)(h.useTapGesture),
        focus: (0, j.makeRenderlessComponent)(f.useFocusGesture),
        hover: (0, j.makeRenderlessComponent)(g.useHoverGesture)
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'useFocusGesture', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i({
        whileFocus: j,
        visualElement: k
    }) {
        const {animationState: l} = k, m = (0, h.useCallback)(() => {
                l && l.setActive(f.AnimationType.Focus, !0);
            }, [l]), n = (0, h.useCallback)(() => {
                l && l.setActive(f.AnimationType.Focus, !1);
            }, [l]);
        (0, g.useDomEvent)(k, 'focus', j ? m : void 0), (0, g.useDomEvent)(k, 'blur', j ? _i : void 0);
    }
}), c.register('.....', function (d, e) {
    var f, g;
    a(d.exports, 'AnimationType', function () {
        return f;
    }), (g = f || (f = {})).Animate = 'animate', g.Hover = 'whileHover', g.Tap = 'whileTap', g.Drag = 'whileDrag', g.Focus = 'whileFocus', g.InView = 'whileInView', g.Exit = 'exit';
}), c.register('.....', function (d, e) {
    a(d.exports, 'addDomEvent', function () {
        return _g;
    }), a(d.exports, 'useDomEvent', function () {
        return _h;
    });
    var f = c('.....');
    function _g(h, i, j, k = { passive: !0 }) {
        return h.addEventListener(i, j, k), () => h.removeEventListener(i, j);
    }
    function _h(i, j, k, l) {
        (0, f.useEffect)(() => {
            const m = i.current;
            if (k && m)
                return _g(m, j, k, l);
        }, [
            i,
            j,
            k,
            l
        ]);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'useHoverGesture', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    function j(k, l, m, n) {
        return (o, p) => {
            'touch' === o.type || (0, h.isDragActive)() || (m && k.animationState && k.animationState.setActive(f.AnimationType.Hover, l), n && n(o, p));
        };
    }
    function _k({
        onHoverStart: l,
        onHoverEnd: m,
        whileHover: n,
        visualElement: o
    }) {
        (0, g.usePointerEvent)(o, 'pointerenter', (0, i.useMemo)(() => l || n ? j(o, !0, Boolean(n), l) : void 0, [
            l,
            Boolean(n),
            o
        ]), { passive: !l }), (0, g.usePointerEvent)(o, 'pointerleave', (0, i.useMemo)(() => m || n ? j(o, !1, Boolean(n), m) : void 0, [
            l,
            Boolean(n),
            o
        ]), { passive: !m });
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'addPointerEvent', function () {
        return _h;
    }), a(d.exports, 'usePointerEvent', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, j, k, l) {
        return (0, f.addDomEvent)(i, j, (0, g.addPointerInfo)(k), l);
    }
    function _i(j, k, l, m) {
        return (0, f.useDomEvent)(j, k, l && (0, g.addPointerInfo)(l), m);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'extractEventInfo', function () {
        return _g;
    }), a(d.exports, 'addPointerInfo', function () {
        return _h;
    });
    var f = c('.....');
    function _g(h, i = 'page') {
        return {
            point: {
                x: h[i + 'X'],
                y: h[i + 'Y']
            }
        };
    }
    const _h = i => j => (0, f.isPrimaryPointer)(j) && i(j, _g(j));
}), c.register('.....', function (d, e) {
    a(d.exports, 'isPrimaryPointer', function () {
        return _f;
    });
    const _f = g => 'mouse' === g.pointerType ? 'number' != typeof g.button || g.button <= 0 : !1 !== g.isPrimary;
}), c.register('.....', function (d, e) {
    function f(g) {
        let h = null;
        return () => {
            const i = () => {
                h = null;
            };
            return null === h && (h = g, i);
        };
    }
    a(d.exports, 'getGlobalLock', function () {
        return _i;
    }), a(d.exports, 'isDragActive', function () {
        return _l;
    });
    const g = f('dragHorizontal'), h = f('dragVertical');
    function _i(j) {
        let k = !1;
        if ('y' === j)
            k = h();
        else if ('x' === j)
            k = g();
        else {
            const l = g(), m = h();
            j && m ? k = () => {
                j(), m();
            } : (j && j(), m && m());
        }
        return k;
    }
    function _l() {
        const m = _i(!0);
        return !m || (m(), !1);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'useTapGesture', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    function _m({
        onTap: n,
        onTapStart: o,
        onTapCancel: p,
        whileTap: q,
        visualElement: r,
        ...s
    }) {
        const t = n || o || p || q, u = (0, f.useRef)(!1), v = (0, f.useRef)(null), w = { passive: !(o || n || p || s.onPointerDown) };
        function x() {
            v.current && v.current(), v.current = null;
        }
        function y() {
            x(), u.current = !1;
            return r.getProps().whileTap && r.animationState && r.animationState.setActive(j.AnimationType.Tap, !1), !(0, k.isDragActive)();
        }
        function z(A, B) {
            var C, D, E, F;
            y() && ((0, g.isNodeOrChild)(r.current, A.target) ? null === (F = (E = r.getProps()).onTap) || void 0 === F || F.call(E, A, B) : null === (q = (p = r.getProps()).onTapCancel) || void 0 === q || q.call(p, A, B));
        }
        function E(F, G) {
            var H, I;
            y() && (null === (q = (p = r.getProps()).onTapCancel) || void 0 === q || q.call(p, F, G));
        }
        const H = (0, E.useCallback)((I, J) => {
            var K;
            if (x(), u.current)
                return;
            u.current = !0, v.current = (0, l.pipe)((0, F.addPointerEvent)(window, 'pointerup', z, w), (0, F.addPointerEvent)(window, 'pointercancel', E, w));
            const L = r.getProps();
            L.whileTap && r.animationState && r.animationState.setActive(j.AnimationType.Tap, !0), null === (K = L.onTapStart) || void 0 === K || K.call(L, I, J);
        }, [
            Boolean(o),
            r
        ]);
        (0, F.usePointerEvent)(r, 'pointerdown', t ? H : void 0, w), (0, i.useUnmountEffect)(x);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'isNodeOrChild', function () {
        return _f;
    });
    const _f = (g, h) => !!h && (g === h || _f(g, h.parentElement));
}), c.register('.....', function (d, e) {
    a(d.exports, 'useUnmountEffect', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h) {
        return (0, f.useEffect)(() => () => h(), []);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'pipe', function () {
        return _g;
    });
    const f = (g, h) => i => h(g(i)), _g = (...a) => a.reduce(f);
}), c.register('.....', function (d, e) {
    a(d.exports, 'useViewport', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i({
        visualElement: j,
        whileInView: k,
        onViewportEnter: l,
        onViewportLeave: m,
        viewport: n = {}
    }) {
        const o = (0, f.useRef)({
            hasEnteredView: !1,
            isInView: !1
        });
        let p = Boolean(k || l || m);
        n.once && o.current.hasEnteredView && (p = !1);
        ('undefined' == typeof IntersectionObserver ? _m : _l)(p, o.current, j, n);
    }
    const k = {
        some: 0,
        all: 1
    };
    function _l(m, n, o, {
        root: p,
        margin: q,
        amount: r = 'some',
        once: s
    }) {
        (0, f.useEffect)(() => {
            if (!m || !o.current)
                return;
            const t = {
                root: null == p ? void 0 : p.current,
                rootMargin: q,
                threshold: 'number' == typeof r ? r : k[r]
            };
            return (0, o.observeIntersection)(o.current, t, u => {
                const {isIntersecting: v} = u;
                if (n.isInView === v)
                    return;
                if (n.isInView = v, s && !v && n.hasEnteredView)
                    return;
                v && (n.hasEnteredView = !0), o.animationState && o.animationState.setActive(g.AnimationType.InView, v);
                const w = o.getProps(), x = v ? w.onViewportEnter : w.onViewportLeave;
                x && x(u);
            });
        }, [
            m,
            p,
            q,
            r
        ]);
    }
    function _m(n, o, p, {
        fallback: q = !0
    }) {
        (0, f.useEffect)(() => {
            n && q && requestAnimationFrame(() => {
                o.hasEnteredView = !0;
                const {onViewportEnter: r} = p.getProps();
                r && r(null), p.animationState && p.animationState.setActive(g.AnimationType.InView, !0);
            });
        }, [n]);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'observeIntersection', function () {
        return _j;
    });
    const f = new WeakMap(), g = new WeakMap(), h = i => {
            const j = f.get(i.target);
            j && j(i);
        }, i = j => {
            j.forEach(h);
        };
    function _j(k, l, m) {
        const n = function ({
            root: o,
            ...p
        }) {
            const q = o || document;
            g.has(q) || g.set(q, {});
            const r = g.get(q), s = JSON.stringify(p);
            return r[s] || (r[s] = new IntersectionObserver(i, {
                root: o,
                ...p
            })), r[s];
        }(l);
        return f.set(k, m), n.observe(k), () => {
            f.delete(k), n.unobserve(k);
        };
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'makeRenderlessComponent', function () {
        return _f;
    });
    const _f = g => h => (g(h), null);
}), c.register('.....', function (d, e) {
    a(d.exports, 'animations', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    const _m = {
        animation: (0, l.makeRenderlessComponent)(({
            visualElement: n,
            animate: o
        }) => {
            n.animationState || (n.animationState = (0, j.createAnimationState)(n)), (0, g.isAnimationControls)(o) && (0, f.useEffect)(() => o.subscribe(n), [o]);
        }),
        exit: (0, l.makeRenderlessComponent)(n => {
            const {
                    custom: o,
                    visualElement: p
                } = n, [q, r] = (0, h.usePresence)(), s = (0, f.useContext)(i.PresenceContext);
            (0, f.useEffect)(() => {
                p.isPresent = q;
                const t = p.animationState && p.animationState.setActive(k.AnimationType.Exit, !q, { custom: s && s.custom || o });
                t && !q && t.then(r);
            }, [q]);
        })
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'usePresence', function () {
        return _h;
    }), a(d.exports, 'useIsPresent', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....');
    function _h() {
        const i = (0, f.useContext)(g.PresenceContext);
        if (null === i)
            return [
                !0,
                null
            ];
        const {
                isPresent: j,
                onExitComplete: k,
                register: l
            } = i, m = (0, f.useId)();
        (0, f.useEffect)(() => l(_h), []);
        return !j && k ? [
            !1,
            () => k && k(_h)
        ] : [!0];
    }
    function _n() {
        return null === (i = (0, f.useContext)(g.PresenceContext)) || i.isPresent;
        var o;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'variantPriorityOrder', function () {
        return _m;
    }), a(d.exports, 'createAnimationState', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    const _m = [
            k.AnimationType.Animate,
            k.AnimationType.InView,
            k.AnimationType.Focus,
            k.AnimationType.Hover,
            k.AnimationType.Tap,
            k.AnimationType.Drag,
            k.AnimationType.Exit
        ], n = [..._m].reverse(), o = _m.length;
    function _p(q) {
        let r = function (s) {
            return t => Promise.all(t.map(({
                animation: u,
                options: v
            }) => (0, i.animateVisualElement)(s, u, v)));
        }(q);
        const s = {
            [k.AnimationType.Animate]: _A(!0),
            [k.AnimationType.InView]: _A(),
            [k.AnimationType.Hover]: _A(),
            [k.AnimationType.Tap]: _A(),
            [k.AnimationType.Drag]: _A(),
            [k.AnimationType.Focus]: _A(),
            [k.AnimationType.Exit]: _A()
        };
        let t = !0;
        const u = (v, w) => {
            const x = (0, l.resolveVariant)(q, w);
            if (x) {
                const {
                    transition: y,
                    transitionEnd: z,
                    ...A
                } = x;
                v = {
                    ...v,
                    ...A,
                    ...z
                };
            }
            return v;
        };
        function v(w, x) {
            const y = q.getProps(), z = q.getVariantContext(!0) || {}, _A = [], B = new Set();
            let C = {}, D = 1 / 0;
            for (let E = 0; E < o; E++) {
                const F = n[E], G = s[F], H = void 0 !== y[F] ? y[F] : v[F], I = (0, j.isVariantLabel)(H), J = F === x ? G.isActive : null;
                !1 === J && (D = E);
                let K = H === v[F] && H !== y[F] && I;
                if (K && t && q.manuallyAnimateOnMount && (K = !1), G.protectedKeys = { ...C }, !G.isActive && null === J || !H && !G.prevProp || (0, f.isAnimationControls)(H) || 'boolean' == typeof H)
                    continue;
                const L = _J(G.prevProp, H);
                let M = L || F === x && G.isActive && !K && I || E > D && I;
                const N = Array.isArray(H) ? H : [H];
                let O = N.reduce(u, {});
                !1 === J && (O = {});
                const {
                        prevResolvedValues: P = {}
                    } = G, Q = {
                        ...P,
                        ...O
                    }, R = S => {
                        M = !0, B.delete(S), G.needsAnimating[S] = !0;
                    };
                for (const S in Q) {
                    const T = O[q], U = P[q];
                    C.hasOwnProperty(q) || (E !== U ? (0, g.isKeyframesTarget)(E) && (0, g.isKeyframesTarget)(U) ? !(0, h.shallowCompare)(E, U) || L ? R(q) : G.protectedKeys[q] = !0 : void 0 !== E ? R(q) : B.add(q) : void 0 !== E && B.has(q) ? R(q) : G.protectedKeys[q] = !0);
                }
                G.prevProp = H, G.prevResolvedValues = O, G.isActive && (C = {
                    ...C,
                    ...O
                }), t && q.blockInitialAnimation && (M = !1), M && !K && _A.push(...N.map(V => ({
                    animation: V,
                    options: {
                        type: F,
                        ...w
                    }
                })));
            }
            if (B.size) {
                const R = {};
                B.forEach(S => {
                    const T = q.getBaseTarget(S);
                    void 0 !== T && (E[S] = T);
                }), _A.push({ animation: E });
            }
            let S = Boolean(_A.length);
            return t && !1 === y.initial && !q.manuallyAnimateOnMount && (S = !1), t = !1, S ? E(_A) : Promise.resolve();
        }
        return {
            animateChanges: v,
            setActive: function (N, O, P) {
                var Q;
                if (U[N].isActive === O)
                    return Promise.resolve();
                null === (Q = q.variantChildren) || void 0 === Q || Q.forEach(R => {
                    var S;
                    return null === (S = R.animationState) || void 0 === S ? void 0 : S.setActive(N, O);
                }), U[N].isActive = O;
                const R = v(P, N);
                for (const S in U)
                    U[S].protectedKeys = {};
                return R;
            },
            setAnimateFunction: function (N) {
                r = N(q);
            },
            getState: () => U
        };
    }
    function _J(K, L) {
        return 'string' == typeof L ? L !== K : !!Array.isArray(L) && !(0, h.shallowCompare)(L, K);
    }
    function K(L = !1) {
        return {
            isActive: L,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        };
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        if (!Array.isArray(h))
            return !1;
        const i = h.length;
        if (i !== g.length)
            return !1;
        for (let j = 0; j < i; j++)
            if (h[j] !== g[j])
                return !1;
        return !0;
    }
    a(d.exports, 'shallowCompare', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'animateVisualElement', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    function _m(n, o, p = {}) {
        let q;
        if (n.notify('AnimationStart', o), Array.isArray(o)) {
            const r = o.map(s => _p(n, s, p));
            q = Promise.all(r);
        } else if ('string' == typeof o)
            q = _p(n, o, p);
        else {
            const s = 'function' == typeof o ? (0, g.resolveVariant)(n, o, p.custom) : o;
            q = _v(n, s, p);
        }
        return q.then(() => n.notify('AnimationComplete', o));
    }
    function _p(q, r, s = {}) {
        var t;
        const u = (0, g.resolveVariant)(q, r, s.custom);
        let {
            transition: v = q.getDefaultTransition() || {}
        } = u || {};
        s.transitionOverride && (v = s.transitionOverride);
        const w = u ? () => _v(q, u, s) : () => Promise.resolve(), x = (null === (t = q.variantChildren) || void 0 === t ? void 0 : t.size) ? (y = 0) => {
                const {
                    delayChildren: z = 0,
                    staggerChildren: A,
                    staggerDirection: B
                } = v;
                return function (C, D, E = 0, F = 0, G = 1, H) {
                    const I = [], J = (C.variantChildren.size - 1) * F, K = 1 === G ? (L = 0) => L * F : (L = 0) => J - L * F;
                    return Array.from(C.variantChildren).sort(_F).forEach((L, M) => {
                        L.notify('AnimationStart', D), I.push(_p(L, D, {
                            ...H,
                            delay: E + K(M)
                        }).then(() => L.notify('AnimationComplete', D)));
                    }), Promise.all(I);
                }(q, r, z + y, A, B, s);
            } : () => Promise.resolve(), {when: y} = v;
        if (y) {
            const [z, A] = 'beforeChildren' === y ? [
                w,
                x
            ] : [
                x,
                w
            ];
            return z().then(A);
        }
        return Promise.all([
            w(),
            x(s.delay)
        ]);
    }
    function _v(w, x, {
        delay: y = 0,
        transitionOverride: z,
        type: A
    } = {}) {
        var B;
        let {
            transition: C = w.getDefaultTransition(),
            transitionEnd: D,
            ...E
        } = w.makeTargetAnimatable(x);
        const F = w.getValue('willChange');
        z && (C = z);
        const G = [], H = A && (null === (_m = w.animationState) || void 0 === _m ? void 0 : _m.getState()[A]);
        for (const I in E) {
            const J = w.getValue(x), K = E[x];
            if (!z || void 0 === K || H && _G(H, x))
                continue;
            const L = {
                delay: y,
                elapsed: 0,
                ...C
            };
            if (window.HandoffAppearAnimations && !z.hasAnimated) {
                const M = w.getProps()[x.optimizedAppearDataAttribute];
                y && (A.elapsed = window.HandoffAppearAnimations(y, x, z, l.sync));
            }
            let N = z.start((0, y.createMotionValueAnimation)(x, z, K, w.shouldReduceMotion && h.transformProps.has(x) ? { type: !1 } : A));
            (0, w.isWillChangeMotionValue)(F) && (F.add(x), N = N.then(() => F.remove(x))), G.push(N);
        }
        return Promise.all(G).then(() => {
            D && (0, K.setTarget)(w, D);
        });
    }
    function _F(G, H) {
        return G.sortNodePosition(H);
    }
    function _G({
        protectedKeys: H,
        needsAnimating: I
    }, J) {
        const K = H.hasOwnProperty(J) && !0 !== I[J];
        return I[J] = !1, K;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'setTarget', function () {
        return _o;
    }), a(d.exports, 'checkTargetForNewValues', function () {
        return _r;
    }), a(d.exports, 'getOrigin', function () {
        return _z;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    function n(o, p, q) {
        o.hasValue(p) ? o.getValue(p).set(q) : o.addValue(p, (0, i.motionValue)(q));
    }
    function _o(p, q) {
        const r = (0, m.resolveVariant)(p, q);
        let {
            transitionEnd: s = {},
            transition: t = {},
            ...u
        } = r ? p.makeTargetAnimatable(r, !1) : {};
        u = {
            ...u,
            ...s
        };
        for (const v in u) {
            n(p, q, (0, h.resolveFinalValueInKeyframes)(u[q]));
        }
    }
    function _r(s, t, u) {
        var v, w;
        const x = Object.keys(t).filter(y => !s.hasValue(y)), y = x.length;
        if (n)
            for (let z = 0; z < n; z++) {
                const A = x[z], B = t[n];
                let C = null;
                Array.isArray(_r) && (C = _r[0]), null === C && (C = null !== (w = null !== (v = u[n]) && void 0 !== v ? v : s.readValue(n)) && void 0 !== w ? w : t[n]), null != C && ('string' == typeof C && ((0, f.isNumericalString)(C) || (0, g.isZeroValueString)(C)) ? C = parseFloat(C) : !(0, l.findValueType)(C) && j.complex.test(_r) && (C = (0, k.getAnimatableNone)(n, _r)), s.addValue(n, (0, i.motionValue)(C, { owner: s })), void 0 === u[n] && (u[n] = C), null !== C && s.setBaseTarget(n, C));
            }
    }
    function y(z, A) {
        if (!A)
            return;
        return (A[z] || A.default || A).from;
    }
    function _z(A, B, C) {
        var D;
        const E = {};
        for (const F in A) {
            const G = y(F, B);
            E[F] = void 0 !== A ? A : null === (D = C.getValue(F)) || void 0 === D ? void 0 : D.get();
        }
        return E;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'isNumericalString', function () {
        return _f;
    });
    const _f = g => /^\-?\d*\.?\d+$/.test(g);
}), c.register('.....', function (d, e) {
    a(d.exports, 'isZeroValueString', function () {
        return _f;
    });
    const _f = g => /^0[^.\s]+$/.test(g);
}), c.register('.....', function (d, e) {
    a(d.exports, 'motionValue', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    class j {
        onChange(k) {
            return this.on('change', k);
        }
        on(k, l) {
            this.events[k] || (this.events[k] = new (0, h.SubscriptionManager)());
            const m = this.events[k].add(l);
            return 'change' === k ? () => {
                m(), g.sync.read(() => {
                    this.events.change.getSize() || this.stop();
                });
            } : m;
        }
        clearListeners() {
            for (const k in this.events)
                this.events[k].clear();
        }
        attach(k, l) {
            this.passiveEffect = k, this.stopPassiveEffect = l;
        }
        set(k, l = !0) {
            l && this.passiveEffect ? this.passiveEffect(k, this.updateAndNotify) : this.updateAndNotify(k, l);
        }
        setWithVelocity(k, l, m) {
            this.set(l), this.prev = k, this.timeDelta = m;
        }
        jump(k) {
            this.updateAndNotify(k), this.prev = k, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
            return this.current;
        }
        getPrevious() {
            return this.prev;
        }
        getVelocity() {
            return this.canTrackVelocity ? (0, i.velocityPerSecond)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
        }
        start(k) {
            return this.stop(), new Promise(l => {
                this.hasAnimated = !0, this.animation = k(l) || null, this.events.animationStart && this.events.animationStart.notify();
            }).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
            });
        }
        stop() {
            this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
        }
        isAnimating() {
            return !!this.animation;
        }
        clearAnimation() {
            this.animation = null;
        }
        destroy() {
            this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
        }
        constructor(k, l = {}) {
            var m;
            this.version = '8.5.2', this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (n, o = !0) => {
                this.prev = this.current, this.current = n;
                const {
                    delta: p,
                    timestamp: q
                } = f.frameData;
                this.lastUpdated !== q && (this.timeDelta = p, this.lastUpdated = q, g.sync.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
            }, this.scheduleVelocityCheck = () => g.sync.postRender(this.velocityCheck), this.velocityCheck = ({timestamp: n}) => {
                n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
            }, this.hasAnimated = !1, this.prev = this.current = k, this.canTrackVelocity = (m = this.current, !isNaN(parseFloat(m))), this.owner = l.owner;
        }
    }
    function _k(l, m) {
        return new j(l, m);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'frameData', function () {
        return _f;
    });
    const _f = {
        delta: 0,
        timestamp: 0
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'sync', function () {
        return _n;
    }), a(d.exports, 'cancelSync', function () {
        return _o;
    }), a(d.exports, 'flushSync', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    let i = !0, j = !1, k = !1;
    const l = [
            'read',
            'update',
            'preRender',
            'render',
            'postRender'
        ], m = l.reduce((n, o) => (n[o] = (0, g.createRenderStep)(() => j = !0), n), {}), _n = l.reduce((o, p) => {
            const q = m[p];
            return o[p] = (r, s = !1, t = !1) => (j || _s(), q.schedule(r, s, t)), o;
        }, {}), _o = l.reduce((p, q) => (p[q] = m[q].cancel, p), {}), _p = l.reduce((q, r) => (q[r] = () => m[r].process(h.frameData), q), {}), q = r => m[r].process(h.frameData), r = s => {
            j = !1, h.frameData.delta = i ? f.defaultTimestep : Math.max(Math.min(s - h.frameData.timestamp, 40), 1), h.frameData.timestamp = s, k = !0, l.forEach(q), k = !1, j && (i = !1, (0, f.onNextFrame)(r));
        }, _s = () => {
            j = !0, i = !0, k || (0, f.onNextFrame)(r);
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'defaultTimestep', function () {
        return _f;
    }), a(d.exports, 'onNextFrame', function () {
        return _h;
    });
    const _f = 1 / 60 * 1000, g = 'undefined' != typeof performance ? () => performance.now() : () => Date.now(), _h = 'undefined' != typeof window ? i => window.requestAnimationFrame(i) : i => setTimeout(() => i(g()), _f);
}), c.register('.....', function (d, e) {
    function f(g) {
        let h = [], i = [], j = 0, k = !1, l = !1;
        const m = new WeakSet(), n = {
                schedule: (o, p = !1, q = !1) => {
                    const r = q && k, s = r ? h : i;
                    return p && m.add(o), -1 === s.indexOf(o) && (s.push(o), r && k && (j = h.length)), o;
                },
                cancel: o => {
                    const p = i.indexOf(o);
                    -1 !== p && i.splice(p, 1), m.delete(o);
                },
                process: o => {
                    if (k)
                        l = !0;
                    else {
                        if (k = !0, [p, q] = [
                                q,
                                p
                            ], q.length = 0, j = p.length, j)
                            for (let r = 0; r < j; r++) {
                                const s = p[r];
                                s(o), m.has(s) && (n.schedule(s), g());
                            }
                        k = !1, l && (l = !1, n.process(o));
                    }
                }
            };
        return n;
    }
    a(d.exports, 'createRenderStep', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'SubscriptionManager', function () {
        return _g;
    });
    var f = c('.....');
    class _g {
        add(h) {
            return (0, f.addUniqueItem)(this.subscriptions, h), () => (0, f.removeItem)(this.subscriptions, h);
        }
        notify(h, i, j) {
            const k = this.subscriptions.length;
            if (k)
                if (1 === k)
                    this.subscriptions[0](h, i, j);
                else
                    for (let l = 0; l < k; l++) {
                        const m = this.subscriptions[l];
                        m && m(h, i, j);
                    }
        }
        getSize() {
            return this.subscriptions.length;
        }
        clear() {
            this.subscriptions.length = 0;
        }
        constructor() {
            this.subscriptions = [];
        }
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        -1 === g.indexOf(h) && g.push(h);
    }
    function g(h, i) {
        const j = h.indexOf(i);
        j > -1 && h.splice(j, 1);
    }
    function i([...a], j, k) {
        const l = j < 0 ? a.length + j : j;
        if (f >= 0 && f < a.length) {
            const m = k < 0 ? a.length + k : k, [n] = a.splice(j, 1);
            a.splice(f, 0, n);
        }
        return a;
    }
    a(d.exports, 'addUniqueItem', function () {
        return f;
    }), a(d.exports, 'removeItem', function () {
        return g;
    }), a(d.exports, 'moveItem', function () {
        return i;
    });
}), c.register('.....', function (d, e) {
    function f(g, h) {
        return h ? g * (1000 / h) : 0;
    }
    a(d.exports, 'velocityPerSecond', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'analyseComplexValue', function () {
        return _k;
    }), a(d.exports, 'complex', function () {
        return _v;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const i = '${c}', j = '${n}';
    function _k(l) {
        'number' == typeof l && (l = `${ l }`);
        const m = [];
        let n = 0, o = 0;
        const p = l.match(h.colorRegex);
        _k && (n = _k.length, l = l.replace(h.colorRegex, i), m.push(..._k.map(f.color.parse)));
        const q = l.match(h.floatRegex);
        return q && (o = q.length, l = l.replace(h.floatRegex, j), m.push(...q.map(g.number.parse))), {
            values: m,
            numColors: n,
            numNumbers: o,
            tokenised: l
        };
    }
    function o(p) {
        return _k(p).values;
    }
    function p(q) {
        const {
                values: r,
                numColors: s,
                tokenised: t
            } = _k(q), u = r.length;
        return v => {
            let w = t;
            for (let x = 0; x < u; x++)
                w = w.replace(x < s ? i : j, x < s ? f.color.transform(v[x]) : (0, h.sanitize)(v[x]));
            return w;
        };
    }
    const u = v => 'number' == typeof v ? 0 : v;
    const _v = {
        test: function (w) {
            var x, y;
            return isNaN(w) && (0, h.isString)(w) && ((null === (x = w.match(h.floatRegex)) || void 0 === x ? void 0 : x.length) || 0) + ((null === (y = w.match(h.colorRegex)) || void 0 === y ? void 0 : y.length) || 0) > 0;
        },
        parse: o,
        createTransformer: p,
        getAnimatableNone: function (w) {
            const x = o(w);
            return p(w)(x.map(u));
        }
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'color', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const _j = {
        test: k => i.rgba.test(k) || g.hex.test(k) || h.hsla.test(k),
        parse: k => i.rgba.test(k) ? i.rgba.parse(k) : h.hsla.test(k) ? h.hsla.parse(k) : g.hex.parse(k),
        transform: k => (0, f.isString)(k) ? k : k.hasOwnProperty('red') ? i.rgba.transform(k) : h.hsla.transform(k)
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'hex', function () {
        return _g;
    });
    var f = c('.....');
    const _g = {
        test: (0, c('.....').isColorString)('#'),
        parse: function (h) {
            let i = '', j = '', k = '', l = '';
            return h.length > 5 ? (i = h.substring(1, 3), j = h.substring(3, 5), k = h.substring(5, 7), l = h.substring(7, 9)) : (i = h.substring(1, 2), j = h.substring(2, 3), k = h.substring(3, 4), l = h.substring(4, 5), i += i, j += j, k += k, l += l), {
                red: parseInt(i, 16),
                green: parseInt(j, 16),
                blue: parseInt(k, 16),
                alpha: l ? parseInt(l, 16) / 255 : 1
            };
        },
        transform: f.rgba.transform
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'rgba', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const j = {
            ...g.number,
            transform: k => Math.round((l => (0, f.clamp)(0, 255, l))(k))
        }, _k = {
            test: (0, i.isColorString)('rgb', 'red'),
            parse: (0, i.splitColor)('red', 'green', 'blue'),
            transform: ({
                red: l,
                green: m,
                blue: n,
                alpha: o = 1
            }) => 'rgba(' + j.transform(l) + ', ' + j.transform(m) + ', ' + j.transform(n) + ', ' + (0, h.sanitize)(g.alpha.transform(o)) + ')'
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'isColorString', function () {
        return _g;
    }), a(d.exports, 'splitColor', function () {
        return _h;
    });
    var f = c('.....');
    const _g = (h, i) => j => Boolean((0, f.isString)(j) && f.singleColorRegex.test(j) && j.startsWith(h) || i && Object.prototype.hasOwnProperty.call(j, i)), _h = (i, j, k) => l => {
            if (!(0, f.isString)(l))
                return l;
            const [m, n, o, p] = l.match(f.floatRegex);
            return {
                [i]: parseFloat(m),
                [j]: parseFloat(n),
                [k]: parseFloat(o),
                alpha: void 0 !== p ? parseFloat(p) : 1
            };
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'hsla', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const _j = {
        test: (0, i.isColorString)('hsl', 'hue'),
        parse: (0, i.splitColor)('hue', 'saturation', 'lightness'),
        transform: ({
            hue: k,
            saturation: l,
            lightness: m,
            alpha: n = 1
        }) => 'hsla(' + Math.round(k) + ', ' + g.percent.transform((0, h.sanitize)(l)) + ', ' + g.percent.transform((0, h.sanitize)(m)) + ', ' + (0, h.sanitize)(f.alpha.transform(n)) + ')'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'getAnimatableNone', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j, k) {
        var l;
        let m = (0, h.getDefaultValueType)(j);
        return m !== g.filter && (m = f.complex), null === (l = m.getAnimatableNone) || void 0 === l ? void 0 : l.call(m, k);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'filter', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....');
    const h = new Set([
        'brightness',
        'contrast',
        'saturate',
        'opacity'
    ]);
    function i(j) {
        const [k, l] = j.slice(0, -1).split('(');
        if ('drop-shadow' === k)
            return j;
        const [m] = l.match(g.floatRegex) || [];
        if (!m)
            return j;
        const n = l.replace(m, '');
        let o = h.has(k) ? 1 : 0;
        return m !== l && (o *= 100), k + '(' + o + n + ')';
    }
    const k = /([a-z-]*)\(.*?\)/g, _l = {
            ...n.complex,
            getAnimatableNone: m => {
                const n = m.match(k);
                return n ? n.map(i).join(' ') : m;
            }
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'getDefaultValueType', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    const h = {
            ...c('.....').numberValueTypes,
            color: f.color,
            backgroundColor: f.color,
            outlineColor: f.color,
            fill: f.color,
            stroke: f.color,
            borderColor: f.color,
            borderTopColor: f.color,
            borderRightColor: f.color,
            borderBottomColor: f.color,
            borderLeftColor: f.color,
            filter: g.filter,
            WebkitFilter: g.filter
        }, _i = j => h[j];
}), c.register('.....', function (d, e) {
    a(d.exports, 'findValueType', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const j = [
            ...h.dimensionValueTypes,
            f.color,
            g.complex
        ], _k = l => j.find((0, i.testValueType)(l));
}), c.register('.....', function (d, e) {
    a(d.exports, 'dimensionValueTypes', function () {
        return _j;
    }), a(d.exports, 'findDimensionValueType', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const _j = [
            f.number,
            g.px,
            g.percent,
            g.degrees,
            g.vw,
            g.vh,
            i.auto
        ], _k = l => _j.find((0, h.testValueType)(l));
}), c.register('.....', function (d, e) {
    a(d.exports, 'testValueType', function () {
        return _f;
    });
    const _f = g => h => h.test(g);
}), c.register('.....', function (d, e) {
    a(d.exports, 'auto', function () {
        return _f;
    });
    const _f = {
        test: g => 'auto' === g,
        parse: g => g
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'resolveVariant', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i, j) {
        const k = h.getProps();
        return (0, f.resolveVariantFromProps)(k, i, void 0 !== j ? j : k.custom, function (l) {
            const m = {};
            return l.values.forEach((n, o) => m[o] = n.get()), m;
        }(h), function (l) {
            const m = {};
            return l.values.forEach((n, o) => m[o] = n.getVelocity()), m;
        }(h));
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'isWillChangeMotionValue', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h) {
        return Boolean((0, f.isMotionValue)(h) && h.add);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'optimizedAppearDataAttribute', function () {
        return _f;
    });
    const _f = 'data-' + (0, c('.....').camelToDash)('framerAppearId');
}), c.register('.....', function (d, e) {
    a(d.exports, 'createMotionValueAnimation', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    const _q = (r, s, t, u = {}) => v => {
        const w = (0, p.getValueTransition)(u, r) || {}, x = w.delay || u.delay || 0;
        let {
            elapsed: y = 0
        } = u;
        y -= (0, g.secondsToMilliseconds)(x);
        const z = (0, o.getKeyframes)(s, r, t, w), A = z[0], B = z[z.length - 1], C = (0, n.isAnimatable)(r, A), D = (0, n.isAnimatable)(r, B);
        (0, f.warning)(C === D, `You are trying to animate ${ r } from "${ A }" to "${ B }". ${ A } is not an animatable value - to enable this animation set ${ A } to a value animatable to ${ B } via the \`style\` property.`);
        let E = {
            keyframes: z,
            velocity: s.getVelocity(),
            ...w,
            elapsed: y,
            onUpdate: F => {
                s.set(F), w.onUpdate && w.onUpdate(F);
            },
            onComplete: () => {
                v(), w.onComplete && w.onComplete();
            }
        };
        if (!C || !D || h.instantAnimationState.current || !1 === w.type)
            return (0, j.createInstantAnimation)(E);
        if ('inertia' === w.type)
            return (0, l.inertia)(E);
        (0, p.isTransitionDefined)(w) || (E = {
            ...E,
            ...(0, m.getDefaultTransition)(r, E)
        }), E.duration && (E.duration = (0, g.secondsToMilliseconds)(E.duration)), E.repeatDelay && (E.repeatDelay = (0, g.secondsToMilliseconds)(E.repeatDelay));
        const F = s.owner, G = F && F.current;
        if (F && G instanceof HTMLElement && !(null == F ? void 0 : F.getProps().onUpdate)) {
            const H = (0, i.createAcceleratedAnimation)(s, r, E);
            if (H)
                return H;
        }
        return (0, k.animate)(E);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'warning', function () {
        return _f;
    }), a(d.exports, 'invariant', function () {
        return _g;
    });
    var _f = function () {
        }, _g = function () {
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'secondsToMilliseconds', function () {
        return _f;
    });
    const _f = g => 1000 * g;
}), c.register('.....', function (d, e) {
    a(d.exports, 'instantAnimationState', function () {
        return _f;
    });
    const _f = { current: !1 };
}), c.register('.....', function (d, e) {
    a(d.exports, 'createAcceleratedAnimation', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    const l = new Set(['opacity']);
    function _m(n, o, {
        onUpdate: p,
        onComplete: q,
        ...r
    }) {
        if (!(j.supports.waapi() && l.has(o) && !r.repeatDelay && 'mirror' !== r.repeatType && 0 !== r.damping))
            return !1;
        let {
            keyframes: s,
            duration: t = 300,
            elapsed: u = 0,
            ease: v
        } = r;
        if ('spring' === r.type || !(0, i.isWaapiSupportedEasing)(r.ease)) {
            if (r.repeat === 1 / 0)
                return;
            const w = (0, g.animate)({
                ...r,
                elapsed: 0
            });
            let x = {
                done: !1,
                value: s[0]
            };
            const y = [];
            let z = 0;
            for (; !x.done && z < 20000;)
                x = n.sample(z), p.push(x.value), z += 10;
            s = p, t = z - 10, v = 'linear';
        }
        const y = (0, h.animateStyle)(n.owner.current, o, s, {
            ...r,
            delay: -u,
            duration: t,
            ease: v
        });
        return y.onfinish = () => {
            n.set((0, k.getFinalKeyframe)(s, r)), q && q();
        }, {
            get currentTime() {
                return y.currentTime || 0;
            },
            set currentTime(z) {
                y.currentTime = z;
            },
            stop: () => {
                const {currentTime: z} = y;
                if (z) {
                    const A = (0, g.animate)({
                        ...r,
                        autoplay: !1
                    });
                    n.setWithVelocity(A.sample(z - 10).value, A.sample(z).value, 10);
                }
                f.sync.update(() => y.cancel());
            }
        };
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'animate', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    const k = {
        decay: h.decay,
        keyframes: f.keyframes,
        tween: f.keyframes,
        spring: g.spring
    };
    function l(m, n, o = 0) {
        return m - n - o;
    }
    const m = n => {
        const o = ({delta: p}) => n(p);
        return {
            start: () => i.sync.update(o, !0),
            stop: () => i.cancelSync.update(o)
        };
    };
    function _n({
        duration: o,
        driver: p = q,
        elapsed: r = 0,
        repeat: s = 0,
        repeatType: t = 'loop',
        repeatDelay: u = 0,
        keyframes: v,
        autoplay: w = !0,
        onPlay: x,
        onStop: y,
        onComplete: z,
        onRepeat: A,
        onUpdate: B,
        type: C = 'keyframes',
        ...D
    }) {
        var E, F;
        const G = r;
        let H, I, J = 0, K = o, L = !1, M = !0;
        const N = k[v.length > 2 ? 'keyframes' : C] || f.keyframes, O = v[0], P = v[v.length - 1];
        let Q = {
            done: !1,
            value: O
        };
        (null === (F = (E = N).needsInterpolation) || void 0 === F ? void 0 : F.call(E, O, P)) && (I = (0, j.interpolate)([
            0,
            100
        ], [
            O,
            P
        ], { clamp: !1 }), v = [
            0,
            100
        ]);
        const R = N({
            ...D,
            duration: o,
            keyframes: v
        });
        function S() {
            J++, 'reverse' === t ? (M = J % 2 == 0, r = function (T, U = 0, V = 0, W = !0) {
                return W ? l(U + -T, U, V) : U - (T - U) + V;
            }(r, K, u, M)) : (r = l(r, K, u), 'mirror' === t && R.flipTarget()), L = !1, A && A();
        }
        function T(U) {
            M || (U = -U), r += U, L || (Q = R.next(Math.max(0, r)), I && (Q.value = I(Q.value)), L = M ? Q.done : r <= 0), B && B(Q.value), L && (0 === J && (K = void 0 !== K ? K : r), J < s ? function (V, W, X, Y) {
                return Y ? V >= W + X : V <= -X;
            }(r, K, u, M) && S() : (H && H.stop(), z && z()));
        }
        return w && (x && x(), H = p(T), H.start()), {
            stop: () => {
                y && y(), H && H.stop();
            },
            set currentTime(U) {
                r = G, T(U);
            },
            sample: U => {
                r = G;
                const V = o && 'number' == typeof o ? Math.max(0.5 * o, 50) : 50;
                let W = 0;
                for (T(0); W <= U;) {
                    const X = U - W;
                    T(Math.min(X, V)), W += V;
                }
                return Q;
            }
        };
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'keyframes', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i({
        keyframes: j,
        ease: k = f.easeInOut,
        times: l,
        duration: m = 300
    }) {
        j = [...j];
        const n = (0, h.isEasingArray)(k) ? k.map(h.easingDefinitionToFunction) : (0, h.easingDefinitionToFunction)(k), o = {
                done: !1,
                value: j[0]
            }, p = function (q, r) {
                return q.map(s => s * r);
            }(l && l.length === j.length ? l : function (q) {
                const r = q.length;
                return q.map((s, t) => 0 !== t ? t / (r - 1) : 0);
            }(j), m);
        function q() {
            return (0, g.interpolate)(p, j, { ease: Array.isArray(_i) ? _i : (k = j, l = _i, k.map(() => l || f.easeInOut).splice(0, k.length - 1)) });
            var r, s;
        }
        let t = q();
        return {
            next: u => (o.value = t(u), o.done = u >= m, o),
            flipTarget: () => {
                j.reverse(), t = q();
            }
        };
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'easeIn', function () {
        return _h;
    }), a(d.exports, 'easeOut', function () {
        return _i;
    }), a(d.exports, 'easeInOut', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....');
    const _h = i => i * i, _i = (0, g.reverseEasing)(_h), _j = (0, f.mirrorEasing)(_h);
}), c.register('.....', function (d, e) {
    a(d.exports, 'mirrorEasing', function () {
        return _f;
    });
    const _f = g => h => h <= 0.5 ? g(2 * h) / 2 : (2 - g(2 * (1 - h))) / 2;
}), c.register('.....', function (d, e) {
    a(d.exports, 'reverseEasing', function () {
        return _f;
    });
    const _f = g => h => 1 - g(1 - h);
}), c.register('.....', function (d, e) {
    a(d.exports, 'interpolate', function () {
        return _u;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    const n = (o, p) => q => (0, i.mix)(o, p, q);
    function o(p, q, r) {
        const s = [], t = r || ('number' == typeof (h = p[0]) ? n : 'string' == typeof h ? g.color.test(h) ? j.mixColor : k.mixComplex : Array.isArray(h) ? k.mixArray : 'object' == typeof h ? k.mixObject : n);
        var u;
        const v = p.length - 1;
        for (let w = 0; w < v; w++) {
            let x = t(p[w], p[w + 1]);
            if (q) {
                const y = Array.isArray(q) ? q[w] : q;
                x = (0, l.pipe)(p, x);
            }
            s.push(x);
        }
        return s;
    }
    function _u(v, w, {
        clamp: x = !0,
        ease: y,
        mixer: z
    } = {}) {
        const A = v.length;
        (0, t.invariant)(A === w.length, 'Both input and output ranges must be the same length'), (0, t.invariant)(!y || !Array.isArray(y) || y.length === A - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.'), v[0] > v[A - 1] && (v = [...v].reverse(), w = [...w].reverse());
        const B = o(w, y, z), C = B.length, D = E => {
                let F = 0;
                if (C > 1)
                    for (; F < v.length - 2 && !(E < v[F + 1]); F++);
                const G = (0, m.progress)(v[F], v[F + 1], E);
                return B[F](G);
            };
        return x ? E => D((0, u.clamp)(v[0], v[A - 1], E)) : D;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'mix', function () {
        return _f;
    });
    const _f = (g, h, i) => -i * g + i * h + g;
}), c.register('.....', function (d, e) {
    a(d.exports, 'mixColor', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    const l = (m, n, o) => {
            const p = m * m;
            return Math.sqrt(Math.max(0, o * (n * n - p) + p));
        }, m = [
            i.hex,
            j.rgba,
            k.hsla
        ];
    function n(o) {
        const p = (c = o, m.find(q => q.test(c)));
        var q;
        (0, g.invariant)(Boolean(p), `'${ o }' is not an animatable color. Use the equivalent color code instead.`);
        let r = p.parse(o);
        return p === k.hsla && (r = (0, h.hslaToRgba)(r)), r;
    }
    const _q = (r, s) => {
        const t = n(r), u = n(s), v = { ...t };
        return w => (v.red = l(t.red, u.red, w), v.green = l(t.green, u.green, w), v.blue = l(t.blue, u.blue, w), v.alpha = (0, f.mix)(t.alpha, u.alpha, w), j.rgba.transform(v));
    };
}), c.register('.....', function (d, e) {
    function f(g, h, i) {
        return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? g + 6 * (h - g) * i : i < 0.5 ? h : i < 2 / 3 ? g + (h - g) * (2 / 3 - i) * 6 : g;
    }
    function g({
        hue: h,
        saturation: i,
        lightness: j,
        alpha: k
    }) {
        h /= 360, j /= 100;
        let l = 0, m = 0, n = 0;
        if (i /= 100) {
            const o = j < 0.5 ? j * (1 + i) : j + i - j * i, p = 2 * j - k;
            l = f(p, k, h + 1 / 3), m = f(p, k, h), n = f(p, k, h - 1 / 3);
        } else
            l = m = n = j;
        return {
            red: Math.round(255 * l),
            green: Math.round(255 * m),
            blue: Math.round(255 * n),
            alpha: k
        };
    }
    a(d.exports, 'hslaToRgba', function () {
        return g;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'mixComplex', function () {
        return _o;
    }), a(d.exports, 'mixArray', function () {
        return _m;
    }), a(d.exports, 'mixObject', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    function l(m, n) {
        return 'number' == typeof m ? o => (0, f.mix)(m, n, o) : j.color.test(m) ? (0, g.mixColor)(m, n) : _o(m, n);
    }
    const _m = (n, o) => {
            const p = [...n], q = p.length, r = n.map((s, t) => l(s, o[t]));
            return s => {
                for (let t = 0; t < q; t++)
                    p[t] = r[t](s);
                return p;
            };
        }, _n = (o, p) => {
            const q = {
                    ...o,
                    ...p
                }, r = {};
            for (const s in q)
                void 0 !== o[s] && void 0 !== p[s] && (r[s] = l(o[s], p[s]));
            return t => {
                for (const u in r)
                    q[u] = r[u](t);
                return q;
            };
        }, _o = (p, q) => {
            const r = k.complex.createTransformer(q), s = (0, k.analyseComplexValue)(p), t = (0, k.analyseComplexValue)(q);
            return s.numColors === t.numColors && s.numNumbers >= t.numNumbers ? (0, h.pipe)(_m(s.values, t.values), r) : ((0, i.warning)(!0, `Complex values '${ p }' and '${ q }' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), u => `${ u > 0 ? q : p }`);
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'progress', function () {
        return _f;
    });
    const _f = (g, h, i) => {
        const j = h - g;
        return 0 === j ? 1 : (i - g) / j;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'easingDefinitionToFunction', function () {
        return _n;
    }), a(d.exports, 'isEasingArray', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    const m = {
            linear: h.noop,
            easeIn: i.easeIn,
            easeInOut: i.easeInOut,
            easeOut: i.easeOut,
            circIn: j.circIn,
            circInOut: j.circInOut,
            circOut: j.circOut,
            backIn: k.backIn,
            backInOut: k.backInOut,
            backOut: k.backOut,
            anticipate: l.anticipate
        }, _n = o => {
            if (Array.isArray(o)) {
                (0, f.invariant)(4 === o.length, 'Cubic bezier arrays must contain four numerical values.');
                const [p, q, r, s] = o;
                return (0, g.cubicBezier)(p, q, r, s);
            }
            return 'string' == typeof o ? ((0, f.invariant)(void 0 !== m[o], `Invalid easing type '${ o }'`), m[o]) : o;
        }, _o = p => Array.isArray(p) && 'number' != typeof p[0];
}), c.register('.....', function (d, e) {
    a(d.exports, 'cubicBezier', function () {
        return _h;
    });
    var f = c('.....');
    const g = (h, i, j) => (((1 - 3 * j + 3 * i) * h + (3 * j - 6 * i)) * h + 3 * i) * h;
    function _h(i, j, k, l) {
        if (i === j && k === l)
            return f.noop;
        const m = n => function (o, p, q, r, s) {
            let t, u, v = 0;
            do {
                u = p + (q - p) / 2, t = g(u, r, s) - o, t > 0 ? q = u : p = u;
            } while (Math.abs(t) > 1e-7 && ++v < 12);
            return u;
        }(n, 0, 1, i, k);
        return n => 0 === n || 1 === n ? n : g(_h(n), j, l);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'noop', function () {
        return _f;
    });
    const _f = g => g;
}), c.register('.....', function (d, e) {
    a(d.exports, 'circIn', function () {
        return _h;
    }), a(d.exports, 'circOut', function () {
        return _i;
    }), a(d.exports, 'circInOut', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....');
    const _h = i => 1 - Math.sin(Math.acos(i)), _i = (0, g.reverseEasing)(_h), _j = (0, f.mirrorEasing)(_i);
}), c.register('.....', function (d, e) {
    a(d.exports, 'backOut', function () {
        return _i;
    }), a(d.exports, 'backIn', function () {
        return _j;
    }), a(d.exports, 'backInOut', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const _i = (0, f.cubicBezier)(0.33, 1.53, 0.69, 0.99), _j = (0, h.reverseEasing)(_i), _k = (0, g.mirrorEasing)(_j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'anticipate', function () {
        return _g;
    });
    var f = c('.....');
    const _g = h => (h *= 2) < 1 ? 0.5 * (0, f.backIn)(h) : 0.5 * (2 - Math.pow(2, -10 * (h - 1)));
}), c.register('.....', function (d, e) {
    a(d.exports, 'spring', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....');
    const h = [
            'duration',
            'bounce'
        ], i = [
            'stiffness',
            'damping',
            'mass'
        ];
    function j(k, l) {
        return l.some(m => void 0 !== k[m]);
    }
    function _k({
        keyframes: l,
        restDelta: m,
        restSpeed: n,
        ...o
    }) {
        let p = l[0], q = l[l.length - 1];
        const r = {
                done: !1,
                value: p
            }, {
                stiffness: s,
                damping: t,
                mass: u,
                velocity: v,
                duration: w,
                isResolvedFromDuration: x
            } = function (y) {
                let z = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...y
                };
                if (!j(y, i) && j(y, h)) {
                    const A = (0, f.findSpring)(y);
                    z = {
                        ...z,
                        ...A,
                        velocity: 0,
                        mass: 1
                    }, z.isResolvedFromDuration = !0;
                }
                return z;
            }(o);
        let y = _y, z = v ? -v / 1000 : 0;
        const A = t / (2 * Math.sqrt(s * u));
        function B() {
            const C = q - p, D = Math.sqrt(s / u) / 1000, E = Math.abs(l) < 5;
            if (n || (n = E ? 0.01 : 2), m || (m = E ? 0.005 : 0.5), A < 1) {
                const F = (0, f.calcAngularFreq)(o, A);
                y = G => {
                    const H = Math.exp(-A * o * G);
                    return q - H * ((z + A * o * l) / m * Math.sin(m * G) + l * Math.cos(m * G));
                };
            } else if (1 === A)
                y = G => q - Math.exp(-o * G) * (l + (z + o * l) * G);
            else {
                const G = o * Math.sqrt(A * A - 1);
                y = H => {
                    const I = Math.exp(-A * o * H), J = Math.min(m * H, 300);
                    return q - I * ((z + A * o * l) * Math.sinh(J) + m * l * Math.cosh(J)) / m;
                };
            }
        }
        return B(), {
            next: H => {
                const I = y(H);
                if (x)
                    r.done = H >= w;
                else {
                    let J = z;
                    if (0 !== H)
                        if (A < 1) {
                            const K = Math.max(0, H - 5);
                            J = (0, E.velocityPerSecond)(I - y(K), H - K);
                        } else
                            J = 0;
                    const L = Math.abs(J) <= n, M = Math.abs(q - I) <= K;
                    r.done = L && M;
                }
                return r.value = r.done ? q : I, r;
            },
            flipTarget: () => {
                z = -z, [H, I] = [
                    I,
                    H
                ], B();
            }
        };
    }
    _k.needsInterpolation = (y, z) => 'string' == typeof y || 'string' == typeof z;
    const _y = z => 0;
}), c.register('.....', function (d, e) {
    a(d.exports, 'findSpring', function () {
        return _i;
    }), a(d.exports, 'calcAngularFreq', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....');
    const h = 0.001;
    function _i({
        duration: j = 800,
        bounce: k = 0.25,
        velocity: l = 0,
        mass: m = 1
    }) {
        let n, o;
        (0, f.warning)(j <= 10000, 'Spring duration must be 10 seconds or less');
        let p = 1 - k;
        p = (0, g.clamp)(0.05, 1, p), j = (0, g.clamp)(0.01, 10, j / 1000), p < 1 ? (n = q => {
            const r = q * p, s = r * j, t = r - l, u = _l(q, p), v = Math.exp(-s);
            return h - t / u * v;
        }, o = q => {
            const r = q * p * j, s = r * l + l, t = Math.pow(p, 2) * Math.pow(q, 2) * j, u = Math.exp(-r), v = _l(Math.pow(q, 2), p);
            return (-n(q) + h > 0 ? -1 : 1) * ((s - t) * u) / v;
        }) : (n = q => Math.exp(-q * j) * ((q - l) * j + 1) - 0.001, o = q => Math.exp(-q * j) * (j * j * (l - q)));
        const q = function (r, s, t) {
            let u = t;
            for (let v = 1; v < 12; v++)
                u -= r(u) / s(u);
            return u;
        }(n, o, 5 / j);
        if (j *= 1000, isNaN(q))
            return {
                stiffness: 100,
                damping: 10,
                duration: j
            };
        {
            const r = Math.pow(q, 2) * m;
            return {
                stiffness: k,
                damping: 2 * p * Math.sqrt(m * k),
                duration: j
            };
        }
    }
    function _l(m, n) {
        return m * Math.sqrt(1 - n * n);
    }
}), c.register('.....', function (d, e) {
    function f({
        keyframes: g = [0],
        velocity: h = 0,
        power: i = 0.8,
        timeConstant: j = 350,
        restDelta: k = 0.5,
        modifyTarget: l
    }) {
        const m = g[0], n = {
                done: !1,
                value: m
            };
        let o = i * h;
        const p = m + o, q = void 0 === l ? p : l(p);
        return q !== p && (o = q - m), {
            next: r => {
                const s = -o * Math.exp(-r / j);
                return n.done = !(s > k || s < -k), n.value = n.done ? q : q + s, n;
            },
            flipTarget: () => {
            }
        };
    }
    a(d.exports, 'decay', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'animateStyle', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i, j, {
        delay: k = 0,
        duration: l,
        repeat: m = 0,
        repeatType: n = 'loop',
        ease: o,
        times: p
    } = {}) {
        return h.animate({
            [i]: j,
            offset: p
        }, {
            delay: k,
            duration: l,
            easing: (0, f.mapEasingToNativeEasing)(o),
            fill: 'both',
            iterations: m + 1,
            direction: 'reverse' === n ? 'alternate' : 'normal'
        });
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return !g || Array.isArray(g) || 'string' == typeof g && _h[g];
    }
    a(d.exports, 'isWaapiSupportedEasing', function () {
        return f;
    }), a(d.exports, 'mapEasingToNativeEasing', function () {
        return _i;
    });
    const g = ([h, i, j, k]) => `cubic-bezier(${ h }, ${ i }, ${ j }, ${ k })`, _h = {
            linear: 'linear',
            ease: 'ease',
            easeIn: 'ease-in',
            easeOut: 'ease-out',
            easeInOut: 'ease-in-out',
            circIn: g([
                0,
                0.65,
                0.55,
                1
            ]),
            circOut: g([
                0.55,
                0,
                1,
                0.45
            ]),
            backIn: g([
                0.31,
                0.01,
                0.66,
                -0.59
            ]),
            backOut: g([
                0.33,
                1.53,
                0.69,
                0.99
            ])
        };
    function _i(j) {
        if (j)
            return Array.isArray(j) ? g(j) : _h[j];
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'supports', function () {
        return _h;
    });
    const f = { waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate') }, g = {}, _h = {};
    for (const i in f)
        _h[i] = () => (void 0 === g[i] && (g[i] = f[i]()), g[i]);
}), c.register('.....', function (d, e) {
    function f(g, {
        repeat: h,
        repeatType: i = 'loop'
    }) {
        return g[h && 'loop' !== i && h % 2 == 1 ? 0 : g.length - 1];
    }
    a(d.exports, 'getFinalKeyframe', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'createInstantAnimation', function () {
        return _g;
    });
    var f = c('.....');
    function _g({
        keyframes: h,
        elapsed: i,
        onUpdate: j,
        onComplete: k
    }) {
        const l = () => {
            j && j(h[h.length - 1]), k && k();
        };
        return i ? { stop: (0, f.delay)(_g, -i) } : _g();
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'delay', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i) {
        const j = performance.now(), k = ({timestamp: l}) => {
                const m = l - j;
                m >= i && (f.cancelSync.read(k), h(m - i));
            };
        return f.sync.read(k, !0), () => f.cancelSync.read(k);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'inertia', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i({
        keyframes: j,
        velocity: k = 0,
        min: l,
        max: m,
        power: n = 0.8,
        timeConstant: o = 750,
        bounceStiffness: p = 500,
        bounceDamping: q = 10,
        restDelta: r = 1,
        modifyTarget: s,
        driver: t,
        onUpdate: u,
        onComplete: v,
        onStop: w
    }) {
        const x = j[0];
        let y;
        function z(A) {
            return void 0 !== l && A < l || void 0 !== m && A > m;
        }
        function A(B) {
            return void 0 === l ? m : void 0 === m || Math.abs(l - B) < Math.abs(m - B) ? l : m;
        }
        function B(C) {
            null == y || y.stop(), y = (0, f.animate)({
                keyframes: [
                    0,
                    1
                ],
                velocity: 0,
                ...C,
                driver: t,
                onUpdate: D => {
                    var E;
                    null == u || u(D), null === (E = C.onUpdate) || void 0 === E || E.call(C, D);
                },
                onComplete: v,
                onStop: w
            });
        }
        function C(D) {
            B({
                type: 'spring',
                stiffness: p,
                damping: q,
                restDelta: r,
                ...D
            });
        }
        if (z(x))
            C({
                velocity: k,
                keyframes: [
                    x,
                    A(x)
                ]
            });
        else {
            let D = n * k + x;
            void 0 !== s && (D = s(D));
            const E = A(D), F = m === l ? -1 : 1;
            let G, H;
            const I = J => {
                G = H, H = J, k = (0, g.velocityPerSecond)(J - G, h.frameData.delta), (1 === F && J > m || -1 === F && J < m) && C({
                    keyframes: [
                        J,
                        m
                    ],
                    velocity: k
                });
            };
            B({
                type: 'decay',
                keyframes: [
                    x,
                    0
                ],
                velocity: k,
                timeConstant: o,
                power: n,
                restDelta: r,
                modifyTarget: s,
                onUpdate: z(D) ? t : void 0
            });
        }
        return { stop: () => null == y ? void 0 : y.stop() };
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'getDefaultTransition', function () {
        return _k;
    });
    const f = () => ({
            type: 'spring',
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }), g = h => ({
            type: 'spring',
            stiffness: 550,
            damping: 0 === h ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        }), h = () => ({
            type: 'keyframes',
            ease: 'linear',
            duration: 0.3
        }), i = {
            type: 'keyframes',
            duration: 0.8
        }, j = {
            x: f,
            y: f,
            z: f,
            rotate: f,
            rotateX: f,
            rotateY: f,
            rotateZ: f,
            scaleX: g,
            scaleY: g,
            scale: g,
            opacity: h,
            backgroundColor: h,
            color: h,
            default: g
        }, _k = (l, {keyframes: m}) => {
            if (m.length > 2)
                return i;
            return (j[l] || j.default)(m[1]);
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'isAnimatable', function () {
        return _g;
    });
    var f = c('.....');
    const _g = (h, i) => 'zIndex' !== h && (!('number' != typeof i && !Array.isArray(i)) || !('string' != typeof i || !f.complex.test(i) || i.startsWith('url(')));
}), c.register('.....', function (d, e) {
    a(d.exports, 'getKeyframes', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j, k, l, m) {
        const n = (0, g.isAnimatable)(k, l);
        let o = void 0 !== m.from ? m.from : j.get();
        return 'none' === o && _i && 'string' == typeof l ? o = (0, f.getAnimatableNone)(k, l) : (0, h.isZero)(o) && 'string' == typeof l ? o = (0, h.getZeroUnit)(l) : !Array.isArray(l) && (0, h.isZero)(l) && 'string' == typeof o && (l = (0, h.getZeroUnit)(o)), Array.isArray(l) ? (null === l[0] && (l[0] = o), l) : [
            o,
            l
        ];
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'isTransitionDefined', function () {
        return _g;
    }), a(d.exports, 'isZero', function () {
        return _h;
    }), a(d.exports, 'getZeroUnit', function () {
        return _i;
    }), a(d.exports, 'getValueTransition', function () {
        return _j;
    });
    var f = c('.....');
    function _g({
        when: h,
        delay: i,
        delayChildren: j,
        staggerChildren: k,
        staggerDirection: l,
        repeat: m,
        repeatType: n,
        repeatDelay: o,
        from: p,
        elapsed: q,
        ...r
    }) {
        return !!Object.keys(r).length;
    }
    function _h(i) {
        return 0 === i || 'string' == typeof i && 0 === parseFloat(i) && -1 === i.indexOf(' ');
    }
    function _i(j) {
        return 'number' == typeof j ? 0 : (0, f.getAnimatableNone)('', j);
    }
    function _j(k, l) {
        return k[l] || k.default || k;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'drag', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const _i = {
        pan: (0, h.makeRenderlessComponent)(g.usePanGesture),
        drag: (0, h.makeRenderlessComponent)(f.useDrag)
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'useDrag', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j) {
        const {
                dragControls: k,
                visualElement: l
            } = j, m = (0, h.useConstant)(() => new (0, g.VisualElementDragControls)(l));
        (0, f.useEffect)(() => k && k.subscribe(m), [
            m,
            k
        ]), (0, f.useEffect)(() => m.addListeners(), [m]);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'VisualElementDragControls', function () {
        return _x;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....');
    const w = new WeakMap();
    class _x {
        start(y, {
            snapToCursor: z = !1
        } = {}) {
            if (!1 === this.visualElement.isPresent)
                return;
            this.panSession = new (0, g.PanSession)(y, {
                onSessionStart: A => {
                    this.stopAnimation(), z && this.snapToCursor((0, p.extractEventInfo)(A, 'page').point);
                },
                onStart: (A, B) => {
                    var C;
                    const {
                        drag: D,
                        dragPropagation: E,
                        onDragStart: F
                    } = this.getProps();
                    (!D || E || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = (0, h.getGlobalLock)(D), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), (0, n.eachAxis)(G => {
                        var H, I;
                        let J = this.getAxisMotionValue(G).get() || 0;
                        if (u.percent.test(J)) {
                            const K = null === (I = null === (H = this.visualElement.projection) || void 0 === H ? void 0 : H.layout) || void 0 === I ? void 0 : I.layoutBox[G];
                            if (K) {
                                J = (0, s.calcLength)(K) * (parseFloat(J) / 100);
                            }
                        }
                        this.originPoint[G] = J;
                    }), null == F || F(A, B), null === (C = this.visualElement.animationState) || void 0 === C || C.setActive(l.AnimationType.Drag, !0));
                },
                onMove: (A, B) => {
                    const {
                        dragPropagation: C,
                        dragDirectionLock: D,
                        onDirectionLock: E,
                        onDrag: F
                    } = this.getProps();
                    if (!C && !this.openGlobalLock)
                        return;
                    const {offset: G} = B;
                    if (D && null === this.currentDirection)
                        return this.currentDirection = function (H, I = 10) {
                            let J = null;
                            Math.abs(H.y) > I ? J = 'y' : Math.abs(H.x) > I && (J = 'x');
                            return J;
                        }(G), void (null !== this.currentDirection && (null == E || E(this.currentDirection)));
                    this.updateAxis('x', B.point, G), this.updateAxis('y', B.point, G), this.visualElement.render(), null == F || F(A, B);
                },
                onSessionEnd: (A, B) => this.stop(A, B)
            }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
        }
        stop(y, z) {
            const A = this.isDragging;
            if (this.cancel(), !A)
                return;
            const {velocity: B} = z;
            this.startAnimation(B);
            const {onDragEnd: C} = this.getProps();
            null == C || C(y, z);
        }
        cancel() {
            var y, z;
            this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (y = this.panSession) || void 0 === y || y.end(), this.panSession = void 0;
            const {dragPropagation: A} = this.getProps();
            !A && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (z = this.visualElement.animationState) || void 0 === z || z.setActive(l.AnimationType.Drag, !1);
        }
        updateAxis(y, z, A) {
            const {drag: B} = this.getProps();
            if (!A || !_y(y, B, this.currentDirection))
                return;
            const C = this.getAxisMotionValue(y);
            let D = this.originPoint[y] + A[y];
            this.constraints && this.constraints[y] && (D = (0, k.applyConstraints)(D, this.constraints[y], this.elastic[y])), C.set(D);
        }
        resolveConstraints() {
            const {
                    dragConstraints: y,
                    dragElastic: z
                } = this.getProps(), {layout: A} = this.visualElement.projection || {}, B = this.constraints;
            y && (0, i.isRefObject)(y) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!y || !A) && (0, k.calcRelativeConstraints)(A.layoutBox, y), this.elastic = (0, k.resolveDragElastic)(z), B !== this.constraints && A && this.constraints && !this.hasMutatedConstraints && (0, n.eachAxis)(C => {
                this.getAxisMotionValue(C) && (this.constraints[C] = (0, k.rebaseAxisConstraints)(A.layoutBox[C], this.constraints[C]));
            });
        }
        resolveRefConstraints() {
            const {
                dragConstraints: y,
                onMeasureDragConstraints: z
            } = this.getProps();
            if (!y || !(0, i.isRefObject)(y))
                return !1;
            const A = y.current;
            (0, f.invariant)(null !== A, 'If `dragConstraints` is set as a React ref, that ref must be passed to another component\'s `ref` prop.');
            const {projection: B} = this.visualElement;
            if (!B || !B.layout)
                return !1;
            const C = (0, o.measurePageBox)(A, B.root, this.visualElement.getTransformPagePoint());
            let D = (0, k.calcViewportConstraints)(B.layout.layoutBox, C);
            if (z) {
                const E = z((0, q.convertBoxToBoundingBox)(D));
                this.hasMutatedConstraints = !!E, E && (D = (0, q.convertBoundingBoxToBox)(E));
            }
            return D;
        }
        startAnimation(y) {
            const {
                    drag: z,
                    dragMomentum: A,
                    dragElastic: B,
                    dragTransition: C,
                    dragSnapToOrigin: D,
                    onDragTransitionEnd: E
                } = this.getProps(), F = this.constraints || {}, G = (0, n.eachAxis)(H => {
                    if (!_y(H, z, this.currentDirection))
                        return;
                    let I = (null == F ? void 0 : F[H]) || {};
                    D && (I = {
                        min: 0,
                        max: 0
                    });
                    const J = B ? 200 : 1000000, K = B ? 40 : 10000000, L = {
                            type: 'inertia',
                            velocity: A ? y[H] : 0,
                            bounceStiffness: J,
                            bounceDamping: K,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...C,
                            ...I
                        };
                    return this.startAxisValueAnimation(H, L);
                });
            return Promise.all(G).then(E);
        }
        startAxisValueAnimation(y, z) {
            const A = this.getAxisMotionValue(y);
            return A.start((0, v.createMotionValueAnimation)(y, A, 0, z));
        }
        stopAnimation() {
            (0, n.eachAxis)(y => this.getAxisMotionValue(y).stop());
        }
        getAxisMotionValue(y) {
            var z;
            const A = '_drag' + y.toUpperCase(), B = this.visualElement.getProps()[A];
            return B || this.visualElement.getValue(y, (null === (z = this.visualElement.getProps().initial) || void 0 === z ? void 0 : z[y]) || 0);
        }
        snapToCursor(y) {
            (0, n.eachAxis)(z => {
                const {drag: A} = this.getProps();
                if (!_y(z, A, this.currentDirection))
                    return;
                const {projection: B} = this.visualElement, C = this.getAxisMotionValue(z);
                if (B && B.layout) {
                    const {
                        min: D,
                        max: E
                    } = B.layout.layoutBox[z];
                    C.set(y[z] - (0, t.mix)(D, E, 0.5));
                }
            });
        }
        scalePositionWithinConstraints() {
            var y;
            if (!this.visualElement.current)
                return;
            const {
                    drag: z,
                    dragConstraints: A
                } = this.getProps(), {projection: B} = this.visualElement;
            if (!(0, i.isRefObject)(A) || !B || !this.constraints)
                return;
            this.stopAnimation();
            const C = {
                x: 0,
                y: 0
            };
            (0, n.eachAxis)(D => {
                const E = this.getAxisMotionValue(D);
                if (E) {
                    const F = E.get();
                    C[D] = (0, k.calcOrigin)({
                        min: F,
                        max: F
                    }, this.constraints[D]);
                }
            });
            const {transformTemplate: D} = this.visualElement.getProps();
            this.visualElement.current.style.transform = D ? D({}, '') : 'none', null === (y = B.root) || void 0 === y || y.updateScroll(), B.updateLayout(), this.resolveConstraints(), (0, n.eachAxis)(E => {
                if (!_y(E, z, null))
                    return;
                const F = this.getAxisMotionValue(E), {
                        min: G,
                        max: H
                    } = this.constraints[E];
                F.set((0, t.mix)(G, H, C[E]));
            });
        }
        addListeners() {
            var y;
            if (!this.visualElement.current)
                return;
            w.set(this.visualElement, this);
            const z = this.visualElement.current, A = (0, j.addPointerEvent)(z, 'pointerdown', B => {
                    const {
                        drag: C,
                        dragListener: D = !0
                    } = this.getProps();
                    C && D && this.start(B);
                }), B = () => {
                    const {dragConstraints: C} = this.getProps();
                    (0, i.isRefObject)(C) && (this.constraints = this.resolveRefConstraints());
                }, {projection: C} = this.visualElement, D = C.addEventListener('measure', B);
            C && !C.layout && (null === (y = C.root) || void 0 === y || y.updateScroll(), C.updateLayout()), B();
            const E = (0, r.addDomEvent)(window, 'resize', () => this.scalePositionWithinConstraints()), F = C.addEventListener('didUpdate', ({
                    delta: G,
                    hasLayoutChanged: H
                }) => {
                    this.isDragging && H && ((0, n.eachAxis)(I => {
                        const J = this.getAxisMotionValue(I);
                        J && (this.originPoint[I] += G[I].translate, J.set(J.get() + G[I].translate));
                    }), this.visualElement.render());
                });
            return () => {
                E(), A(), D(), null == F || F();
            };
        }
        getProps() {
            const y = this.visualElement.getProps(), {
                    drag: z = !1,
                    dragDirectionLock: A = !1,
                    dragPropagation: B = !1,
                    dragConstraints: C = !1,
                    dragElastic: D = k.defaultElastic,
                    dragMomentum: E = !0
                } = y;
            return {
                ...y,
                drag: z,
                dragDirectionLock: A,
                dragPropagation: B,
                dragConstraints: C,
                dragElastic: D,
                dragMomentum: E
            };
        }
        constructor(y) {
            this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                x: 0,
                y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, m.createBox)(), this.visualElement = y;
        }
    }
    function _y(z, A, B) {
        return !(!0 !== A && A !== z || null !== B && B !== z);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'PanSession', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    class _n {
        updateHandlers(o) {
            this.handlers = o;
        }
        end() {
            this.removeListeners && this.removeListeners(), g.cancelSync.update(this.updatePoint);
        }
        constructor(o, p, {transformPagePoint: q} = {}) {
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                    if (!this.lastMoveEvent || !this.lastMoveEventInfo)
                        return;
                    const r = _q(this.lastMoveEventInfo, this.history), s = null !== this.startEvent, t = (0, k.distance2D)(r.offset, {
                            x: 0,
                            y: 0
                        }) >= 3;
                    if (!s && !t)
                        return;
                    const {point: u} = r, {timestamp: v} = l.frameData;
                    this.history.push({
                        ...u,
                        timestamp: v
                    });
                    const {
                        onStart: w,
                        onMove: x
                    } = this.handlers;
                    s || (w && w(this.lastMoveEvent, r), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, r);
                }, this.handlePointerMove = (r, s) => {
                    this.lastMoveEvent = r, this.lastMoveEventInfo = _o(s, this.transformPagePoint), g.sync.update(this.updatePoint, !0);
                }, this.handlePointerUp = (r, s) => {
                    if (this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo)
                        return;
                    const {
                            onEnd: t,
                            onSessionEnd: u
                        } = this.handlers, v = _q('pointercancel' === r.type ? this.lastMoveEventInfo : _o(s, this.transformPagePoint), this.history);
                    this.startEvent && t && t(r, v), u && u(r, v);
                }, !(0, m.isPrimaryPointer)(o))
                return;
            this.handlers = p, this.transformPagePoint = q;
            const r = _o((0, f.extractEventInfo)(o), this.transformPagePoint), {point: s} = r, {timestamp: t} = l.frameData;
            this.history = [{
                    ...s,
                    timestamp: t
                }];
            const {onSessionStart: u} = p;
            u && u(o, _q(r, this.history)), this.removeListeners = (0, j.pipe)((0, i.addPointerEvent)(window, 'pointermove', this.handlePointerMove), (0, i.addPointerEvent)(window, 'pointerup', this.handlePointerUp), (0, i.addPointerEvent)(window, 'pointercancel', this.handlePointerUp));
        }
    }
    function _o(p, q) {
        return q ? { point: q(p.point) } : p;
    }
    function p(q, r) {
        return {
            x: q.x - r.x,
            y: q.y - r.y
        };
    }
    function _q({point: r}, s) {
        return {
            point: r,
            delta: p(r, _s(s)),
            offset: p(r, _r(s)),
            velocity: _t(s, 0.1)
        };
    }
    function _r(s) {
        return s[0];
    }
    function _s(t) {
        return t[t.length - 1];
    }
    function _t(u, v) {
        if (u.length < 2)
            return {
                x: 0,
                y: 0
            };
        let w = u.length - 1, x = null;
        const y = _s(u);
        for (; w >= 0 && (x = u[w], !(y.timestamp - x.timestamp > (0, h.secondsToMilliseconds)(v)));)
            w--;
        if (!x)
            return {
                x: 0,
                y: 0
            };
        const z = (y.timestamp - x.timestamp) / 1000;
        if (0 === z)
            return {
                x: 0,
                y: 0
            };
        const A = {
            x: (y.x - x.x) / z,
            y: (y.y - x.y) / z
        };
        return A.x === 1 / 0 && (A.x = 0), A.y === 1 / 0 && (A.y = 0), A;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'distance2D', function () {
        return _g;
    });
    const f = (g, h) => Math.abs(g - h);
    function _g(h, i) {
        const j = f(h.x, i.x), k = f(h.y, i.y);
        return Math.sqrt(j ** 2 + _g ** 2);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'applyConstraints', function () {
        return _j;
    }), a(d.exports, 'calcRelativeConstraints', function () {
        return _l;
    }), a(d.exports, 'calcViewportConstraints', function () {
        return _n;
    }), a(d.exports, 'calcOrigin', function () {
        return _o;
    }), a(d.exports, 'rebaseAxisConstraints', function () {
        return _r;
    }), a(d.exports, 'defaultElastic', function () {
        return _t;
    }), a(d.exports, 'resolveDragElastic', function () {
        return _u;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    function _j(k, {
        min: l,
        max: m
    }, n) {
        return void 0 !== l && k < l ? k = n ? (0, i.mix)(l, k, n.min) : Math.max(k, l) : void 0 !== m && k > m && (k = n ? (0, i.mix)(m, k, n.max) : Math.min(k, m)), k;
    }
    function k(l, m, n) {
        return {
            min: void 0 !== m ? l.min + m : void 0,
            max: void 0 !== n ? l.max + n - (l.max - l.min) : void 0
        };
    }
    function _l(m, {
        top: n,
        left: o,
        bottom: p,
        right: q
    }) {
        return {
            x: k(m.x, o, q),
            y: k(m.y, n, p)
        };
    }
    function m(n, o) {
        let p = o.min - n.min, q = o.max - n.max;
        return o.max - o.min < n.max - n.min && ([r, s] = [
            s,
            r
        ]), {
            min: r,
            max: s
        };
    }
    function _n(o, p) {
        return {
            x: m(o.x, p.x),
            y: m(o.y, p.y)
        };
    }
    function _o(p, q) {
        let r = 0.5;
        const s = (0, g.calcLength)(p), t = (0, g.calcLength)(q);
        return t > s ? r = (0, f.progress)(q.min, q.max - s, p.min) : s > t && (r = (0, f.progress)(p.min, p.max - t, q.min)), (0, h.clamp)(0, 1, r);
    }
    function _r(s, t) {
        const u = {};
        return void 0 !== t.min && (u.min = t.min - s.min), void 0 !== t.max && (u.max = t.max - s.min), u;
    }
    const _t = 0.35;
    function _u(v = w) {
        return !1 === v ? v = 0 : !0 === v && (v = w), {
            x: _v(v, 'left', 'right'),
            y: _v(v, 'top', 'bottom')
        };
    }
    function _v(w, x, y) {
        return {
            min: _w(w, x),
            max: _w(w, y)
        };
    }
    function _w(x, y) {
        return 'number' == typeof x ? x : x[y] || 0;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'calcLength', function () {
        return _g;
    }), a(d.exports, 'isNear', function () {
        return _h;
    }), a(d.exports, 'calcBoxDelta', function () {
        return _j;
    }), a(d.exports, 'calcRelativeBox', function () {
        return _l;
    }), a(d.exports, 'calcRelativePosition', function () {
        return _n;
    });
    var f = c('.....');
    function _g(h) {
        return h.max - h.min;
    }
    function _h(i, j = 0, k = 0.01) {
        return Math.abs(i - j) <= k;
    }
    function i(j, k, l, m = 0.5) {
        j.origin = m, j.originPoint = (0, f.mix)(k.min, k.max, j.origin), j.scale = _g(l) / _g(k), (_h(j.scale, 1, 0.0001) || isNaN(j.scale)) && (j.scale = 1), j.translate = (0, f.mix)(l.min, l.max, j.origin) - j.originPoint, (_h(j.translate) || isNaN(j.translate)) && (j.translate = 0);
    }
    function _j(k, l, m, n) {
        i(k.x, l.x, m.x, null == n ? void 0 : n.originX), i(k.y, l.y, m.y, null == n ? void 0 : n.originY);
    }
    function k(l, m, n) {
        l.min = n.min + m.min, l.max = l.min + _g(m);
    }
    function _l(m, n, o) {
        k(m.x, n.x, o.x), k(m.y, n.y, o.y);
    }
    function m(n, o, p) {
        n.min = o.min - p.min, n.max = n.min + _g(o);
    }
    function _n(o, p, q) {
        m(o.x, p.x, q.x), m(o.y, p.y, q.y);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'createDelta', function () {
        return _f;
    }), a(d.exports, 'createBox', function () {
        return _g;
    });
    const _f = () => ({
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
        }), _g = () => ({
            x: {
                min: 0,
                max: 0
            },
            y: {
                min: 0,
                max: 0
            }
        });
}), c.register('.....', function (d, e) {
    function f(g) {
        return [
            g('x'),
            g('y')
        ];
    }
    a(d.exports, 'eachAxis', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'measureViewportBox', function () {
        return _h;
    }), a(d.exports, 'measurePageBox', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, j) {
        return (0, f.convertBoundingBoxToBox)((0, f.transformBoxPoints)(i.getBoundingClientRect(), j));
    }
    function _i(j, k, l) {
        const m = _h(j, l), {scroll: n} = k;
        return n && ((0, g.translateAxis)(m.x, n.offset.x), (0, g.translateAxis)(m.y, n.offset.y)), m;
    }
}), c.register('.....', function (d, e) {
    function f({
        top: g,
        left: h,
        right: i,
        bottom: j
    }) {
        return {
            x: {
                min: h,
                max: i
            },
            y: {
                min: g,
                max: j
            }
        };
    }
    function g({
        x: h,
        y: i
    }) {
        return {
            top: i.min,
            right: h.max,
            bottom: i.max,
            left: h.min
        };
    }
    function h(i, j) {
        if (!j)
            return i;
        const k = j({
                x: i.left,
                y: i.top
            }), l = j({
                x: i.right,
                y: i.bottom
            });
        return {
            top: k.y,
            left: k.x,
            bottom: f.y,
            right: f.x
        };
    }
    a(d.exports, 'convertBoundingBoxToBox', function () {
        return f;
    }), a(d.exports, 'convertBoxToBoundingBox', function () {
        return g;
    }), a(d.exports, 'transformBoxPoints', function () {
        return h;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'scalePoint', function () {
        return _h;
    }), a(d.exports, 'applyBoxDelta', function () {
        return _k;
    }), a(d.exports, 'applyTreeDeltas', function () {
        return _l;
    }), a(d.exports, 'transformBox', function () {
        return _w;
    }), a(d.exports, 'translateAxis', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, j, k) {
        return k + j * (i - k);
    }
    function i(j, k, l, m, n) {
        return void 0 !== n && (j = _h(j, n, m)), _h(j, l, m) + k;
    }
    function j(k, l = 0, m = 1, n, o) {
        k.min = i(k.min, l, m, n, o), k.max = i(k.max, l, m, n, o);
    }
    function _k(l, {
        x: m,
        y: n
    }) {
        j(l.x, m.translate, m.scale, m.originPoint), j(l.y, n.translate, n.scale, n.originPoint);
    }
    function _l(m, n, o, p = !1) {
        var q, r;
        const s = o.length;
        if (!i)
            return;
        let t, u;
        n.x = n.y = 1;
        for (let v = 0; v < i; v++)
            t = o[v], u = t.projectionDelta, 'contents' !== (null === (_h = null === (q = t.instance) || void 0 === q ? void 0 : q.style) || void 0 === _h ? void 0 : _h.display) && (p && t.options.layoutScroll && t.scroll && t !== t.root && _w(m, {
                x: -t.scroll.offset.x,
                y: -t.scroll.offset.y
            }), u && (n.x *= u.x.scale, n.y *= u.y.scale, _k(m, u)), p && (0, g.hasTransform)(t.latestValues) && _w(m, t.latestValues));
        n.x = v(n.x), n.y = v(n.y);
    }
    function p(q) {
        return Number.isInteger(q) || q > 1.0000000000001 || q < 0.999999999999 ? q : 1;
    }
    function _q(r, s) {
        r.min = r.min + s, r.max = r.max + s;
    }
    function r(s, t, [u, v, w]) {
        const x = void 0 !== t[w] ? t[w] : 0.5, y = (0, q.mix)(s.min, s.max, _h);
        j(s, t[u], t[v], i, t.scale);
    }
    const u = [
            'x',
            'scaleX',
            'originX'
        ], v = [
            'y',
            'scaleY',
            'originY'
        ];
    function _w(x, y) {
        r(x.x, y, u), r(x.y, y, v);
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return void 0 === g || 1 === g;
    }
    function g({
        scale: h,
        scaleX: i,
        scaleY: j
    }) {
        return !f(h) || !f(i) || !f(j);
    }
    function h(i) {
        return g(i) || _i(i) || i.z || i.rotate || i.rotateX || i.rotateY;
    }
    function _i(j) {
        return _j(j.x) || _j(j.y);
    }
    function _j(k) {
        return k && '0%' !== k;
    }
    a(d.exports, 'hasScale', function () {
        return g;
    }), a(d.exports, 'hasTransform', function () {
        return h;
    }), a(d.exports, 'has2DTranslate', function () {
        return _i;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'usePanGesture', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    function _k({
        onPan: l,
        onPanStart: m,
        onPanEnd: n,
        onPanSessionStart: o,
        visualElement: p
    }) {
        const q = l || m || n || o, r = (0, f.useRef)(null), {transformPagePoint: s} = (0, f.useContext)(g.MotionConfigContext), t = {
                onSessionStart: o,
                onStart: m,
                onMove: l,
                onEnd: (u, v) => {
                    r.current = null, n && n(u, v);
                }
            };
        (0, f.useEffect)(() => {
            null !== r.current && r.current.updateHandlers(t);
        }), (0, i.usePointerEvent)(p, 'pointerdown', q && function (u) {
            r.current = new (0, j.PanSession)(u, t, { transformPagePoint: s });
        }), (0, h.useUnmountEffect)(() => r.current && r.current.end());
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'createDomVisualElement', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const _i = (j, k) => (0, h.isSVGComponent)(j) ? new (0, g.SVGVisualElement)(k, { enableHardwareAcceleration: !1 }) : new (0, f.HTMLVisualElement)(k, { enableHardwareAcceleration: !0 });
}), c.register('.....', function (d, e) {
    a(d.exports, 'HTMLVisualElement', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    class _o extends m.DOMVisualElement {
        readValueFromInstance(p, q) {
            if (h.transformProps.has(q)) {
                const r = (0, k.getDefaultValueType)(q);
                return r && r.default || 0;
            }
            {
                const s = (c = r, window.getComputedStyle(c)), t = ((0, g.isCSSVariable)(q) ? s.getPropertyValue(q) : s[q]) || 0;
                return 'string' == typeof t ? t.trim() : t;
            }
            var u;
        }
        measureInstanceViewportBox(p, {transformPagePoint: q}) {
            return (0, l.measureViewportBox)(p, q);
        }
        build(p, q, r, s) {
            (0, f.buildHTMLStyles)(p, q, r, s.transformTemplate);
        }
        scrapeMotionValuesFromProps(p, q) {
            return (0, i.scrapeMotionValuesFromProps)(p, q);
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            const {children: p} = this.props;
            (0, n.isMotionValue)(p) && (this.childSubscription = p.on('change', q => {
                this.current && (this.current.textContent = `${ q }`);
            }));
        }
        renderInstance(p, q, r, s) {
            (0, j.renderHTML)(p, q, r, s);
        }
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'DOMVisualElement', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    class _i extends h.VisualElement {
        sortInstanceNodePosition(j, k) {
            return 2 & j.compareDocumentPosition(k) ? 1 : -1;
        }
        getBaseTargetFromProps(j, k) {
            var l;
            return null === (l = j.style) || void 0 === l ? void 0 : l[k];
        }
        removeValueFromRenderState(j, {
            vars: k,
            style: l
        }) {
            delete k[j], delete l[j];
        }
        makeTargetAnimatableFromInstance({
            transition: j,
            transitionEnd: k,
            ...l
        }, {transformValues: m}, n) {
            let o = (0, f.getOrigin)(l, j || {}, this);
            if (m && (k && (k = m(k)), l && (l = m(l)), o && (o = m(o))), n) {
                (0, f.checkTargetForNewValues)(this, l, o);
                const p = (0, g.parseDomVariant)(this, l, o, k);
                k = p.transitionEnd, l = p.target;
            }
            return {
                transition: p,
                transitionEnd: k,
                ...l
            };
        }
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'parseDomVariant', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    const _h = (i, j, k, l) => {
        const m = (0, f.resolveCSSVariables)(i, j, l);
        return j = m.target, l = m.transitionEnd, (0, g.unitConversion)(i, j, k, l);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'cssVariableRegex', function () {
        return _h;
    }), a(d.exports, 'resolveCSSVariables', function () {
        return _k;
    });
    var f = c('.....');
    function g(h) {
        return 'string' == typeof h && h.startsWith('var(--');
    }
    const _h = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
    function i(j, k, l = 1) {
        (0, f.invariant)(l <= 4, `Max CSS variable fallback depth detected in property "${ j }". This may indicate a circular fallback dependency.`);
        const [m, n] = function (o) {
            const p = _h.exec(o);
            if (!p)
                return [,];
            const [, q, r] = p;
            return [
                q,
                r
            ];
        }(j);
        if (!m)
            return;
        const o = window.getComputedStyle(k).getPropertyValue(m);
        return o ? o.trim() : g(n) ? i(n, k, l + 1) : n;
    }
    function _k(l, {...m}, n) {
        const o = l.current;
        if (!(o instanceof Element))
            return {
                target: m,
                transitionEnd: n
            };
        n && (n = { ...n }), l.values.forEach(p => {
            const q = p.get();
            if (!g(q))
                return;
            const r = i(q, o);
            r && p.set(r);
        });
        for (const p in m) {
            const q = m[l];
            if (!g(q))
                continue;
            const r = i(q, o);
            r && (m[l] = r, n && void 0 === n[l] && (n[l] = q));
        }
        return {
            target: m,
            transitionEnd: n
        };
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'unitConversion', function () {
        return _x;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    const m = new Set([
            'width',
            'height',
            'top',
            'left',
            'right',
            'bottom',
            'x',
            'y'
        ]), n = o => m.has(o), o = p => p === k.number || p === l.px;
    var p, q;
    (q = p || (p = {})).width = 'width', q.height = 'height', q.left = 'left', q.right = 'right', q.top = 'top', q.bottom = 'bottom';
    const r = (s, t) => parseFloat(s.split(', ')[t]), s = (t, u) => (v, {transform: w}) => {
            if ('none' === w || !w)
                return 0;
            const x = w.match(/^matrix3d\((.+)\)$/);
            if (x)
                return r(x[1], u);
            {
                const y = w.match(/^matrix\((.+)\)$/);
                return y ? r(y[1], t) : 0;
            }
        }, t = new Set([
            'x',
            'y',
            'z'
        ]), u = h.transformPropOrder.filter(v => !t.has(v));
    const v = {
            width: ({x: w}, {
                paddingLeft: x = '0',
                paddingRight: y = '0'
            }) => w.max - w.min - parseFloat(x) - parseFloat(y),
            height: ({y: w}, {
                paddingTop: x = '0',
                paddingBottom: y = '0'
            }) => w.max - w.min - parseFloat(x) - parseFloat(y),
            top: (w, {top: x}) => parseFloat(x),
            left: (w, {left: x}) => parseFloat(x),
            bottom: ({y: w}, {top: x}) => parseFloat(x) + (w.max - w.min),
            right: ({x: w}, {left: x}) => parseFloat(x) + (w.max - w.min),
            x: s(4, 13),
            y: s(5, 14)
        }, w = (x, y, z = {}, A = {}) => {
            y = { ...y }, A = { ...A };
            const B = Object.keys(y).filter(n);
            let C = [], D = !1;
            const E = [];
            if (B.forEach(F => {
                    const G = x.getValue(F);
                    if (!x.hasValue(F))
                        return;
                    let H = z[F], I = (0, i.findDimensionValueType)(H);
                    const J = y[F];
                    let K;
                    if ((0, f.isKeyframesTarget)(J)) {
                        const L = J.length, M = null === J[0] ? 1 : 0;
                        H = J[M], I = (0, i.findDimensionValueType)(H);
                        for (let N = M; N < L; N++)
                            K ? (0, g.invariant)((0, i.findDimensionValueType)(J[N]) === K, 'All keyframes must be of the same type') : (K = (0, i.findDimensionValueType)(J[N]), (0, g.invariant)(K === I || o(I) && o(K), 'Keyframes must be of the same dimension as the current value'));
                    } else
                        K = (0, i.findDimensionValueType)(J);
                    if (I !== K)
                        if (o(I) && o(K)) {
                            const N = G.get();
                            'string' == typeof N && G.set(parseFloat(N)), 'string' == typeof J ? M[F] = parseFloat(J) : Array.isArray(J) && K === l.px && (M[F] = J.map(parseFloat));
                        } else
                            (null == I ? void 0 : I.transform) && (null == K ? void 0 : K.transform) && (0 === H || 0 === J) ? 0 === H ? G.set(K.transform(H)) : M[F] = I.transform(J) : (D || (C = function (O) {
                                const P = [];
                                return u.forEach(Q => {
                                    const R = O.getValue(Q);
                                    void 0 !== R && (P.push([
                                        Q,
                                        R.get()
                                    ]), R.set(Q.startsWith('scale') ? 1 : 0));
                                }), P.length && O.render(), P;
                            }(N), D = !0), E.push(F), A[F] = void 0 !== A[F] ? A[F] : M[F], G.jump(J));
                }), E.length) {
                const F = E.indexOf('height') >= 0 ? window.pageYOffset : null, G = ((H, I, J) => {
                        const K = I.measureViewportBox(), L = I.current, M = getComputedStyle(L), {display: N} = M, O = {};
                        'none' === N && I.setStaticValue('display', H.display || 'block'), J.forEach(P => {
                            O[P] = v[P](K, M);
                        }), I.render();
                        const P = I.measureViewportBox();
                        return J.forEach(Q => {
                            const R = I.getValue(Q);
                            R && R.jump(O[Q]), H[Q] = v[Q](P, M);
                        }), H;
                    })(y, x, E);
                return C.length && C.forEach(([H, I]) => {
                    x.getValue(H).set(I);
                }), x.render(), j.isBrowser && null !== F && window.scrollTo({ top: F }), {
                    target: G,
                    transitionEnd: A
                };
            }
            return {
                target: y,
                transitionEnd: A
            };
        };
    function _x(y, z, A, B) {
        return (C => Object.keys(C).some(n))(z) ? w(y, z, A, B) : {
            target: z,
            transitionEnd: B
        };
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'VisualElement', function () {
        return _z;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....');
    const w = Object.keys(h.featureDefinitions), x = w.length, y = [
            'AnimationStart',
            'AnimationComplete',
            'Update',
            'BeforeLayoutMeasure',
            'LayoutMeasure',
            'LayoutAnimationStart',
            'LayoutAnimationComplete'
        ];
    class _z {
        scrapeMotionValuesFromProps(A, B) {
            return {};
        }
        mount(A) {
            var B;
            this.current = A, this.projection && this.projection.mount(A), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (B = this.parent) || void 0 === B ? void 0 : B.addVariantChild(this)), this.values.forEach((C, D) => this.bindToMotionValue(D, C)), l.hasReducedMotionListener.current || (0, k.initPrefersReducedMotion)(), this.shouldReduceMotion = 'never' !== this.reducedMotionConfig && ('always' === this.reducedMotionConfig || l.prefersReducedMotion.current), this.parent && this.parent.children.add(this), this.setProps(this.props);
        }
        unmount() {
            var A, B, C;
            null === (A = this.projection) || void 0 === A || A.unmount(), f.cancelSync.update(this.notifyUpdate), f.cancelSync.render(this.render), this.valueSubscriptions.forEach(D => D()), null === (B = this.removeFromVariantTree) || void 0 === B || B.call(this), null === (C = this.parent) || void 0 === C || C.children.delete(this);
            for (const D in this.events)
                this.events[D].clear();
            this.current = null;
        }
        bindToMotionValue(A, B) {
            const C = q.transformProps.has(A), D = B.on('change', E => {
                    this.latestValues[A] = E, this.props.onUpdate && f.sync.update(this.notifyUpdate, !1, !0), C && this.projection && (this.projection.isTransformDirty = !0);
                }), E = B.on('renderRequest', this.scheduleRender);
            this.valueSubscriptions.set(A, () => {
                D(), E();
            });
        }
        sortNodePosition(A) {
            return this.current && this.sortInstanceNodePosition && this.type === A.type ? this.sortInstanceNodePosition(this.current, A.current) : 0;
        }
        loadFeatures({
            children: A,
            ...B
        }, C, D, E, F, G) {
            const H = [];
            for (let I = 0; I < x; I++) {
                const J = w[I], {
                        isEnabled: K,
                        Component: L
                    } = h.featureDefinitions[J];
                K(B) && L && H.push((0, g.createElement)(L, {
                    key: J,
                    ...B,
                    visualElement: this
                }));
            }
            if (!this.projection && F) {
                this.projection = new F(L, this.latestValues, this.parent && this.parent.projection);
                const {
                    layoutId: M,
                    layout: N,
                    drag: O,
                    dragConstraints: P,
                    layoutScroll: Q,
                    layoutRoot: R
                } = B;
                this.projection.setOptions({
                    layoutId: I,
                    layout: N,
                    alwaysMeasureLayout: Boolean(O) || P && (0, j.isRefObject)(P),
                    visualElement: this,
                    scheduleRender: () => this.scheduleRender(),
                    animationType: 'string' == typeof N ? N : 'both',
                    initialPromotionConfig: G,
                    layoutScroll: Q,
                    layoutRoot: R
                });
            }
            return R;
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.options, this.props);
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, i.createBox)();
        }
        getStaticValue(A) {
            return this.latestValues[A];
        }
        setStaticValue(A, B) {
            this.latestValues[A] = B;
        }
        makeTargetAnimatable(A, B = !0) {
            return this.makeTargetAnimatableFromInstance(A, this.props, B);
        }
        setProps(A) {
            (A.transformTemplate || this.props.transformTemplate) && this.scheduleRender();
            const B = this.props;
            this.props = A;
            for (let C = 0; C < y.length; C++) {
                const D = y[C];
                this.propEventSubscriptions[D] && (this.propEventSubscriptions[D](), delete this.propEventSubscriptions[D]);
                const E = A['on' + D];
                E && (this.propEventSubscriptions[D] = this.on(D, E));
            }
            this.prevMotionValues = (0, u.updateMotionValuesFromProps)(this, this.scrapeMotionValuesFromProps(A, C), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
            return this.props;
        }
        getVariant(A) {
            var B;
            return null === (B = this.props.variants) || void 0 === B ? void 0 : B[A];
        }
        getDefaultTransition() {
            return this.props.transition;
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
            var A;
            return this.isVariantNode ? this : null === (A = this.parent) || void 0 === A ? void 0 : A.getClosestVariantNode();
        }
        getVariantContext(A = !1) {
            var B, C;
            if (A)
                return null === (B = this.parent) || void 0 === B ? void 0 : B.getVariantContext();
            if (!this.isControllingVariants) {
                const D = (null === (C = this.parent) || void 0 === C ? void 0 : C.getVariantContext()) || {};
                return void 0 !== this.props.initial && (D.initial = this.props.initial), D;
            }
            const E = {};
            for (let F = 0; F < _B; F++) {
                const G = _A[F], H = this.props[G];
                ((0, t.isVariantLabel)(H) || !1 === H) && (E[G] = H);
            }
            return E;
        }
        addVariantChild(A) {
            var B;
            const C = this.getClosestVariantNode();
            if (C)
                return null === (B = C.variantChildren) || void 0 === B || B.add(A), () => C.variantChildren.delete(A);
        }
        addValue(A, B) {
            B !== this.values.get(A) && (this.removeValue(A), this.bindToMotionValue(A, B)), this.values.set(A, B), this.latestValues[A] = B.get();
        }
        removeValue(A) {
            var B;
            this.values.delete(A), null === (B = this.valueSubscriptions.get(A)) || void 0 === B || B(), this.valueSubscriptions.delete(A), delete this.latestValues[A], this.removeValueFromRenderState(A, this.renderState);
        }
        hasValue(A) {
            return this.values.has(A);
        }
        getValue(A, B) {
            if (this.props.values && this.props.values[A])
                return this.props.values[A];
            let C = this.values.get(A);
            return void 0 === C && void 0 !== B && (C = (0, n.motionValue)(B, { owner: this }), this.addValue(A, C)), C;
        }
        readValue(A) {
            return void 0 === this.latestValues[A] && this.current ? this.readValueFromInstance(this.current, A, this.options) : this.latestValues[A];
        }
        setBaseTarget(A, B) {
            this.baseTarget[A] = B;
        }
        getBaseTarget(A) {
            var B;
            const {initial: C} = this.props, D = 'string' == typeof C || 'object' == typeof C ? null === (B = (0, v.resolveVariantFromProps)(this.props, C)) || void 0 === B ? void 0 : B[A] : void 0;
            if (C && void 0 !== D)
                return D;
            const E = this.getBaseTargetFromProps(this.props, A);
            return void 0 === E || (0, p.isMotionValue)(E) ? void 0 !== this.initialValues[A] && void 0 === D ? void 0 : this.baseTarget[A] : E;
        }
        on(A, B) {
            return this.events[A] || (this.events[A] = new (0, m.SubscriptionManager)()), this.events[A].add(B);
        }
        notify(A, ...d) {
            var B;
            null === (B = this.events[A]) || void 0 === B || B.notify(...d);
        }
        constructor({
            parent: A,
            props: B,
            reducedMotionConfig: C,
            visualState: D
        }, E = {}) {
            this.current = null, this.children = new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map(), this.isPresent = !0, this.valueSubscriptions = new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify('Update', this.latestValues), this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
            }, this.scheduleRender = () => f.sync.render(this.render, !1, !0);
            const {
                latestValues: F,
                renderState: G
            } = D;
            this.latestValues = F, this.baseTarget = { ...F }, this.initialValues = B.initial ? { ...F } : {}, this.renderState = G, this.parent = A, this.props = B, this.depth = A ? A.depth + 1 : 0, this.reducedMotionConfig = C, this.options = E, this.isControllingVariants = (0, s.isControllingVariants)(B), this.isVariantNode = (0, s.isVariantNode)(B), this.isVariantNode && (this.variantChildren = new Set()), this.manuallyAnimateOnMount = Boolean(A && A.current);
            const {
                willChange: H,
                ...I
            } = this.scrapeMotionValuesFromProps(B, {});
            for (const J in I) {
                const K = I[J];
                void 0 !== F[J] && (0, p.isMotionValue)(K) && (K.set(F[J], !1), (0, o.isWillChangeMotionValue)(H) && H.add(J));
            }
        }
    }
    const _A = [
            'initial',
            ...r.variantPriorityOrder
        ], _B = _A.length;
}), c.register('.....', function (d, e) {
    a(d.exports, 'initPrefersReducedMotion', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h() {
        if (g.hasReducedMotionListener.current = !0, f.isBrowser)
            if (window.matchMedia) {
                const i = window.matchMedia('(prefers-reduced-motion)'), j = () => g.prefersReducedMotion.current = i.matches;
                i.addListener(j), j();
            } else
                g.prefersReducedMotion.current = !1;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'prefersReducedMotion', function () {
        return _f;
    }), a(d.exports, 'hasReducedMotionListener', function () {
        return _g;
    });
    const _f = { current: null }, _g = { current: !1 };
}), c.register('.....', function (d, e) {
    a(d.exports, 'updateMotionValuesFromProps', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j, k, l) {
        const {willChange: m} = k;
        for (const n in k) {
            const o = k[_i], p = l[_i];
            if ((0, h.isMotionValue)(o))
                j.addValue(_i, o), (0, f.isWillChangeMotionValue)(m) && m.add(_i);
            else if ((0, h.isMotionValue)(p))
                j.addValue(_i, (0, g.motionValue)(o, { owner: j })), (0, f.isWillChangeMotionValue)(m) && m.remove(_i);
            else if (p !== o)
                if (j.hasValue(_i)) {
                    const q = j.getValue(_i);
                    !k.hasAnimated && k.set(o);
                } else {
                    const r = j.getStaticValue(_i);
                    j.addValue(_i, (0, g.motionValue)(void 0 !== k ? k : o, { owner: j }));
                }
        }
        for (const s in l)
            void 0 === k[s] && j.removeValue(s);
        return k;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'SVGVisualElement', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    class _p extends g.DOMVisualElement {
        getBaseTargetFromProps(q, r) {
            return q[r];
        }
        readValueFromInstance(q, r) {
            var s;
            return k.transformProps.has(r) ? (null === (s = (0, m.getDefaultValueType)(r)) || void 0 === s ? void 0 : s.default) || 0 : (r = j.camelCaseAttributes.has(r) ? r : (0, i.camelToDash)(r), q.getAttribute(r));
        }
        measureInstanceViewportBox() {
            return (0, n.createBox)();
        }
        scrapeMotionValuesFromProps(q, r) {
            return (0, f.scrapeMotionValuesFromProps)(q, r);
        }
        build(q, r, s, t) {
            (0, h.buildSVGAttrs)(q, r, s, this.isSVGTag, t.transformTemplate);
        }
        renderInstance(q, r, s, t) {
            (0, l.renderSVG)(q, r, s, t);
        }
        mount(q) {
            this.isSVGTag = (0, o.isSVGTag)(q.tagName), super.mount(q);
        }
        constructor() {
            super(...arguments), this.isSVGTag = !1;
        }
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'layoutFeatures', function () {
        return _f;
    });
    const _f = { measureLayout: c('.....').MeasureLayout };
}), c.register('.....', function (d, e) {
    a(d.exports, 'MeasureLayout', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    class o extends b(g).Component {
        componentDidMount() {
            const {
                    visualElement: p,
                    layoutGroup: q,
                    switchLayoutGroup: r,
                    layoutId: s
                } = this.props, {projection: t} = p;
            (0, n.addScaleCorrector)(_r), t && (q.group && q.group.add(t), r && r.register && s && r.register(t), t.root.didUpdate(), t.addEventListener('animationComplete', () => {
                this.safeToRemove();
            }), t.setOptions({
                ...t.options,
                onExitComplete: () => this.safeToRemove()
            })), k.globalProjectionState.hasEverUpdated = !0;
        }
        getSnapshotBeforeUpdate(p) {
            const {
                    layoutDependency: q,
                    visualElement: r,
                    drag: s,
                    isPresent: t
                } = this.props, u = r.projection;
            return u ? (u.isPresent = t, s || p.layoutDependency !== q || void 0 === q ? u.willUpdate() : this.safeToRemove(), p.isPresent !== t && (t ? u.promote() : u.relegate() || f.sync.postRender(() => {
                var v;
                (null === (v = u.getStack()) || void 0 === v ? void 0 : v.members.length) || this.safeToRemove();
            })), null) : null;
        }
        componentDidUpdate() {
            const {projection: p} = this.props.visualElement;
            p && (p.root.didUpdate(), !p.currentAnimation && p.isLead() && this.safeToRemove());
        }
        componentWillUnmount() {
            const {
                    visualElement: p,
                    layoutGroup: q,
                    switchLayoutGroup: r
                } = this.props, {projection: s} = p;
            s && (s.scheduleCheckAfterUnmount(), (null == q ? void 0 : q.group) && q.group.remove(s), (null == r ? void 0 : r.deregister) && r.deregister(s));
        }
        safeToRemove() {
            const {safeToRemove: p} = this.props;
            null == p || p();
        }
        render() {
            return null;
        }
    }
    function _p(q) {
        const [r, s] = (0, h.usePresence)(), t = (0, g.useContext)(i.LayoutGroupContext);
        return b(g).createElement(o, {
            ...q,
            layoutGroup: t,
            switchLayoutGroup: (0, g.useContext)(j.SwitchLayoutGroupContext),
            isPresent: r,
            safeToRemove: s
        });
    }
    const _r = {
        borderRadius: {
            ...l.correctBorderRadius,
            applyTo: [
                'borderTopLeftRadius',
                'borderTopRightRadius',
                'borderBottomLeftRadius',
                'borderBottomRightRadius'
            ]
        },
        borderTopLeftRadius: l.correctBorderRadius,
        borderTopRightRadius: l.correctBorderRadius,
        borderBottomLeftRadius: l.correctBorderRadius,
        borderBottomRightRadius: l.correctBorderRadius,
        boxShadow: m.correctBoxShadow
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'correctBorderRadius', function () {
        return _h;
    });
    var f = c('.....');
    function g(h, i) {
        return i.max === i.min ? 0 : h / (i.max - i.min) * 100;
    }
    const _h = {
        correct: (i, j) => {
            if (!j.target)
                return i;
            if ('string' == typeof i) {
                if (!f.px.test(i))
                    return i;
                i = parseFloat(i);
            }
            return `${ g(i, j.target.x) }% ${ g(i, j.target.y) }%`;
        }
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'correctBoxShadow', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const i = '_$css', _j = {
            correct: (k, {
                treeScale: l,
                projectionDelta: m
            }) => {
                const n = k, o = k.includes('var('), p = [];
                o && (k = k.replace(f.cssVariableRegex, q => (p.push(q), i)));
                const q = h.complex.parse(k);
                if (q.length > 5)
                    return n;
                const r = h.complex.createTransformer(k), s = 'number' != typeof q[0] ? 1 : 0, t = m.x.scale * l.x, u = m.y.scale * l.y;
                q[0 + s] /= t, q[1 + s] /= u;
                const v = (0, g.mix)(t, u, 0.5);
                'number' == typeof q[2 + s] && (q[2 + s] /= v), 'number' == typeof q[3 + s] && (q[3 + s] /= v);
                let w = r(q);
                if (o) {
                    let x = 0;
                    w = w.replace(i, () => {
                        const y = p[x];
                        return x++, y;
                    });
                }
                return w;
            }
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'HTMLProjectionNode', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....');
    const h = { current: void 0 }, _i = (0, f.createProjectionNode)({
            measureScroll: j => ({
                x: j.scrollLeft,
                y: j.scrollTop
            }),
            defaultParent: () => {
                if (!h.current) {
                    const j = new (0, g.DocumentProjectionNode)(0, {});
                    j.mount(window), j.setOptions({ layoutScroll: !0 }), h.current = j;
                }
                return h.current;
            },
            resetTransform: (j, k) => {
                j.style.transform = void 0 !== k ? k : 'none';
            },
            checkIsScrollRoot: j => Boolean('fixed' === window.getComputedStyle(j).position)
        });
}), c.register('.....', function (d, e) {
    a(d.exports, 'createProjectionNode', function () {
        return _C;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....'), w = c('.....'), x = c('.....'), y = c('.....'), z = c('.....');
    const A = [
        '',
        'X',
        'Y',
        'Z'
    ];
    let B = 0;
    function _C({
        attachResizeListener: D,
        defaultParent: E,
        measureScroll: F,
        checkIsScrollRoot: G,
        resetTransform: H
    }) {
        return class {
            addEventListener(I, J) {
                return this.eventHandlers.has(I) || this.eventHandlers.set(I, new (0, h.SubscriptionManager)()), this.eventHandlers.get(I).add(J);
            }
            notifyListeners(I, ...E) {
                const J = this.eventHandlers.get(I);
                null == J || J.notify(...E);
            }
            hasListeners(I) {
                return this.eventHandlers.has(I);
            }
            registerPotentialNode(I, J) {
                this.potentialNodes.set(I, J);
            }
            mount(I, J = !1) {
                var K;
                if (this.instance)
                    return;
                this.isSVG = I instanceof SVGElement && 'svg' !== I.tagName, this.instance = I;
                const {
                    layoutId: L,
                    layout: M,
                    visualElement: N
                } = this.options;
                if (N && !N.current && N.mount(I), this.root.nodes.add(this), null === (K = this.parent) || void 0 === K || K.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), J && (M || L) && (this.isLayoutDirty = !0), D) {
                    let O;
                    const P = () => this.root.updateBlockedByResize = !1;
                    D(I, () => {
                        this.root.updateBlockedByResize = !0, O && O(), O = (0, y.delay)(P, 250), x.globalProjectionState.hasAnimatedSinceResize && (x.globalProjectionState.hasAnimatedSinceResize = !1, this.nodes.forEach(_$));
                    });
                }
                L && this.root.registerSharedNode(L, this), !1 !== this.options.animate && N && (L || M) && this.addEventListener('didUpdate', ({
                    delta: P,
                    hasLayoutChanged: Q,
                    hasRelativeTargetChanged: R,
                    layout: S
                }) => {
                    var T, U, V, W, X;
                    if (this.isTreeAnimationBlocked())
                        return this.target = void 0, void (this.relativeTarget = void 0);
                    const Y = null !== (U = null !== (T = this.options.transition) && void 0 !== T ? T : N.getDefaultTransition()) && void 0 !== U ? U : _hb, {
                            onLayoutAnimationStart: Z,
                            onLayoutAnimationComplete: $
                        } = N.getProps(), ab = !this.targetLayout || !(0, p.boxEquals)(this.targetLayout, S) || R, bb = !Q && R;
                    if (this.options.layoutRoot || (null === (V = this.resumeFrom) || void 0 === V ? void 0 : V.instance) || bb || Q && (ab || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(P, bb);
                        const cb = {
                            ...(0, o.getValueTransition)(Y, 'layout'),
                            onPlay: Z,
                            onComplete: $
                        };
                        (N.shouldReduceMotion || this.options.layoutRoot) && (cb.delay = 0, cb.type = !1), this.startAnimation(cb);
                    } else
                        cb || 0 !== this.animationProgress || _$(this), this.isLead() && (null === (X = (W = this.options).onExitComplete) || void 0 === X || X.call(W));
                    this.targetLayout = S;
                });
            }
            unmount() {
                var I, J;
                this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (I = this.getStack()) || void 0 === I || I.remove(this), null === (J = this.parent) || void 0 === J || J.children.delete(this), this.instance = void 0, f.cancelSync.preRender(this.updateProjection);
            }
            blockUpdate() {
                this.updateManuallyBlocked = !0;
            }
            unblockUpdate() {
                this.updateManuallyBlocked = !1;
            }
            isUpdateBlocked() {
                return this.updateManuallyBlocked || this.updateBlockedByResize;
            }
            isTreeAnimationBlocked() {
                var I;
                return this.isAnimationBlocked || (null === (I = this.parent) || void 0 === I ? void 0 : I.isTreeAnimationBlocked()) || !1;
            }
            startUpdate() {
                var I;
                this.isUpdateBlocked() || (this.isUpdating = !0, null === (I = this.nodes) || void 0 === I || I.forEach(_cb), this.animationId++);
            }
            getTransformTemplate() {
                var I;
                return null === (I = this.options.visualElement) || void 0 === I ? void 0 : I.getProps().transformTemplate;
            }
            willUpdate(I = !0) {
                var J, K, L;
                if (this.root.isUpdateBlocked())
                    return void (null === (K = (J = this.options).onExitComplete) || void 0 === K || K.call(J));
                if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
                    return;
                this.isLayoutDirty = !0;
                for (let M = 0; M < this.path.length; M++) {
                    const N = this.path[M];
                    N.shouldResetTransform = !0, N.updateScroll('snapshot'), N.options.layoutRoot && N.willUpdate(!1);
                }
                const {
                    layoutId: O,
                    layout: P
                } = this.options;
                (void 0 !== O || P) && (this.prevTransformTemplateValue = null === (L = this.getTransformTemplate()) || void 0 === L ? void 0 : L(this.latestValues, ''), this.updateSnapshot(), M && this.notifyListeners('willUpdate'));
            }
            didUpdate() {
                if (this.isUpdateBlocked())
                    return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(_X);
                this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(_ib), this.potentialNodes.clear()), this.nodes.forEach(_Y), this.nodes.forEach(_D), this.nodes.forEach(_E), this.clearAllSnapshots(), f.flushSync.update(), f.flushSync.preRender(), f.flushSync.render());
            }
            clearAllSnapshots() {
                this.nodes.forEach(_W), this.sharedNodes.forEach(_db);
            }
            scheduleUpdateProjection() {
                f.sync.preRender(this.updateProjection, !1, !0);
            }
            scheduleCheckAfterUnmount() {
                f.sync.postRender(() => {
                    this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
                });
            }
            updateSnapshot() {
                !this.snapshot && this.instance && (this.snapshot = this.measure());
            }
            updateLayout() {
                var I;
                if (!this.instance)
                    return;
                if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty))
                    return;
                if (this.resumeFrom && !this.resumeFrom.instance)
                    for (let J = 0; J < this.path.length; J++) {
                        this.path[J].updateScroll();
                    }
                const J = this.layout;
                this.layout = this.measure(!1), this.layoutCorrected = (0, n.createBox)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners('measure', this.layout.layoutBox), null === (I = this.options.visualElement) || void 0 === I || I.notify('LayoutMeasure', this.layout.layoutBox, null == J ? void 0 : J.layoutBox);
            }
            updateScroll(I = 'measure') {
                let J = Boolean(this.options.layoutScroll && this.instance);
                this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === I && (J = !1), J && (this.scroll = {
                    animationId: this.root.animationId,
                    phase: I,
                    isRoot: G(this.instance),
                    offset: F(this.instance)
                });
            }
            resetTransform() {
                var I;
                if (!H)
                    return;
                const J = this.isLayoutDirty || this.shouldResetTransform, K = this.projectionDelta && !(0, p.isDeltaZero)(this.projectionDelta), L = null === (I = this.getTransformTemplate()) || void 0 === I ? void 0 : I(this.latestValues, ''), M = L !== this.prevTransformTemplateValue;
                J && (K || (0, u.hasTransform)(this.latestValues) || M) && (H(this.instance, L), this.shouldResetTransform = !1, this.scheduleRender());
            }
            measure(I = !0) {
                const J = this.measurePageBox();
                let K = this.removeElementScroll(J);
                var L;
                return I && (K = this.removeTransform(K)), _kb((L = K).x), _kb(L.y), {
                    animationId: this.root.animationId,
                    measuredBox: J,
                    layoutBox: K,
                    latestValues: {},
                    source: this.id
                };
            }
            measurePageBox() {
                const {visualElement: I} = this.options;
                if (!I)
                    return (0, n.createBox)();
                const J = I.measureViewportBox(), {scroll: K} = this.root;
                return K && ((0, k.translateAxis)(J.x, K.offset.x), (0, k.translateAxis)(J.y, K.offset.y)), J;
            }
            removeElementScroll(I) {
                const J = (0, n.createBox)();
                (0, j.copyBoxInto)(J, I);
                for (let K = 0; K < this.path.length; K++) {
                    const L = this.path[K], {
                            scroll: M,
                            options: N
                        } = L;
                    if (L !== this.root && M && N.layoutScroll) {
                        if (M.isRoot) {
                            (0, j.copyBoxInto)(J, I);
                            const {scroll: O} = this.root;
                            K && ((0, k.translateAxis)(J.x, -K.offset.x), (0, k.translateAxis)(J.y, -K.offset.y));
                        }
                        (0, k.translateAxis)(J.x, M.offset.x), (0, k.translateAxis)(J.y, M.offset.y);
                    }
                }
                return J;
            }
            applyTransform(I, J = !1) {
                const K = (0, n.createBox)();
                (0, j.copyBoxInto)(K, I);
                for (let L = 0; L < this.path.length; L++) {
                    const M = this.path[L];
                    !J && M.options.layoutScroll && M.scroll && M !== M.root && (0, k.transformBox)(K, {
                        x: -M.scroll.offset.x,
                        y: -M.scroll.offset.y
                    }), (0, u.hasTransform)(M.latestValues) && (0, k.transformBox)(K, M.latestValues);
                }
                return (0, u.hasTransform)(this.latestValues) && (0, k.transformBox)(K, this.latestValues), K;
            }
            removeTransform(I) {
                var J;
                const K = (0, n.createBox)();
                (0, j.copyBoxInto)(K, I);
                for (let L = 0; L < this.path.length; L++) {
                    const M = this.path[L];
                    if (!M.instance)
                        continue;
                    if (!(0, u.hasTransform)(M.latestValues))
                        continue;
                    (0, u.hasScale)(M.latestValues) && M.updateSnapshot();
                    const N = (0, n.createBox)(), O = M.measurePageBox();
                    (0, j.copyBoxInto)(N, O), (0, m.removeBoxTransforms)(K, M.latestValues, null === (J = M.snapshot) || void 0 === J ? void 0 : J.layoutBox, N);
                }
                return (0, u.hasTransform)(this.latestValues) && (0, m.removeBoxTransforms)(K, this.latestValues), K;
            }
            setTargetDelta(I) {
                this.targetDelta = I, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection();
            }
            setOptions(I) {
                this.options = {
                    ...this.options,
                    ...I,
                    crossfade: void 0 === I.crossfade || I.crossfade
                };
            }
            clearMeasurements() {
                this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
            }
            resolveTargetDelta() {
                var I;
                const J = this.getLead();
                if (this.isProjectionDirty || (this.isProjectionDirty = J.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = J.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
                    return;
                const {
                    layout: K,
                    layoutId: L
                } = this.options;
                if (this.layout && (K || L)) {
                    if (!this.targetDelta && !this.relativeTarget) {
                        const M = this.getClosestProjectingParent();
                        M && M.layout ? (this.relativeParent = M, this.relativeTarget = (0, n.createBox)(), this.relativeTargetOrigin = (0, n.createBox)(), (0, l.calcRelativePosition)(this.relativeTargetOrigin, this.layout.layoutBox, M.layout.layoutBox), (0, j.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
                    }
                    if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = (0, n.createBox)(), this.targetWithTransforms = (0, n.createBox)()), this.relativeTarget && this.relativeTargetOrigin && (null === (M = this.relativeParent) || void 0 === M ? void 0 : M.target) ? (0, l.calcRelativeBox)(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : (0, j.copyBoxInto)(this.target, this.layout.layoutBox), (0, k.applyBoxDelta)(this.target, this.targetDelta)) : (0, j.copyBoxInto)(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                        this.attemptToResolveRelativeTarget = !1;
                        const N = this.getClosestProjectingParent();
                        N && Boolean(N.resumingFrom) === Boolean(this.resumingFrom) && !N.options.layoutScroll && N.target ? (this.relativeParent = N, this.relativeTarget = (0, n.createBox)(), this.relativeTargetOrigin = (0, n.createBox)(), (0, l.calcRelativePosition)(this.relativeTargetOrigin, this.target, N.target), (0, j.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
                    }
                }
            }
            getClosestProjectingParent() {
                if (this.parent && !(0, u.hasScale)(this.parent.latestValues) && !(0, u.has2DTranslate)(this.parent.latestValues))
                    return (this.parent.relativeTarget || this.parent.targetDelta || this.parent.options.layoutRoot) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent();
            }
            calcProjection() {
                var I;
                const {
                    isProjectionDirty: J,
                    isTransformDirty: K
                } = this;
                this.isProjectionDirty = this.isTransformDirty = !1;
                const L = this.getLead(), M = Boolean(this.resumingFrom) || this !== L;
                let N = !0;
                if (J && (N = !1), M && K && (N = !1), N)
                    return;
                const {
                    layout: O,
                    layoutId: P
                } = this.options;
                if (this.isTreeAnimating = Boolean((null === (I = this.parent) || void 0 === I ? void 0 : I.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !O && !P)
                    return;
                (0, j.copyBoxInto)(this.layoutCorrected, this.layout.layoutBox), (0, k.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, M);
                const {target: Q} = L;
                if (!Q)
                    return;
                this.projectionDelta || (this.projectionDelta = (0, n.createDelta)(), this.projectionDeltaWithTransform = (0, n.createDelta)());
                const R = this.treeScale.x, S = this.treeScale.y, T = this.projectionTransform;
                (0, l.calcBoxDelta)(this.projectionDelta, this.layoutCorrected, Q, this.latestValues), this.projectionTransform = (0, s.buildProjectionTransform)(this.projectionDelta, this.treeScale), this.projectionTransform === T && this.treeScale.x === R && this.treeScale.y === S || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners('projectionUpdate', Q));
            }
            hide() {
                this.isVisible = !1;
            }
            show() {
                this.isVisible = !0;
            }
            scheduleRender(I = !0) {
                var J, K, L;
                null === (K = (J = this.options).scheduleRender) || void 0 === K || K.call(J), I && (null === (L = this.getStack()) || void 0 === L || L.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
            }
            setAnimationOrigin(I, J = !1) {
                var K, L;
                const M = this.snapshot, N = (null == M ? void 0 : M.latestValues) || {}, O = { ...this.latestValues }, P = (0, n.createDelta)();
                this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !J;
                const Q = (0, n.createBox)(), R = (null == M ? void 0 : M.source) !== (null === (K = this.layout) || void 0 === K ? void 0 : K.source), S = ((null === (L = this.getStack()) || void 0 === L ? void 0 : L.members.length) || 0) <= 1, T = Boolean(R && !S && !0 === this.options.crossfade && !this.path.some(_gb));
                this.animationProgress = 0, this.mixTargetDelta = U => {
                    var V;
                    const W = U / 1000;
                    var X, Y, Z, $;
                    _eb(P.x, I.x, W), _eb(P.y, I.y, W), this.setTargetDelta(P), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (V = this.relativeParent) || void 0 === V ? void 0 : V.layout) && ((0, l.calcRelativePosition)(Q, this.layout.layoutBox, this.relativeParent.layout.layoutBox), X = this.relativeTarget, Y = this.relativeTargetOrigin, Z = Q, $ = W, _fb(X.x, Y.x, Z.x, $), _fb(X.y, Y.y, Z.y, $)), R && (this.animationValues = O, (0, i.mixValues)(O, N, this.latestValues, W, T, S)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = W;
                }, this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
            }
            startAnimation(I) {
                var J, K;
                this.notifyListeners('animationStart'), null === (J = this.currentAnimation) || void 0 === J || J.stop(), this.resumingFrom && (null === (K = this.resumingFrom.currentAnimation) || void 0 === K || K.stop()), this.pendingAnimation && (f.cancelSync.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = f.sync.update(() => {
                    x.globalProjectionState.hasAnimatedSinceResize = !0, this.currentAnimation = (0, g.animate)(0, 1000, {
                        ...I,
                        onUpdate: L => {
                            var M;
                            this.mixTargetDelta(L), null === (M = I.onUpdate) || void 0 === M || M.call(I, L);
                        },
                        onComplete: () => {
                            var L;
                            null === (L = I.onComplete) || void 0 === L || L.call(I), this.completeAnimation();
                        }
                    }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
                });
            }
            completeAnimation() {
                var I;
                this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (I = this.getStack()) || void 0 === I || I.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners('animationComplete');
            }
            finishAnimation() {
                var I;
                this.currentAnimation && (null === (I = this.mixTargetDelta) || void 0 === I || I.call(this, 1000), this.currentAnimation.stop()), this.completeAnimation();
            }
            applyTransformsToTarget() {
                const I = this.getLead();
                let {
                    targetWithTransforms: J,
                    target: K,
                    layout: L,
                    latestValues: M
                } = I;
                if (J && K && L) {
                    if (this !== I && this.layout && L && _lb(this.options.animationType, this.layout.layoutBox, L.layoutBox)) {
                        K = this.target || (0, n.createBox)();
                        const N = (0, l.calcLength)(this.layout.layoutBox.x);
                        K.x.min = I.target.x.min, K.x.max = K.x.min + J;
                        const O = (0, l.calcLength)(this.layout.layoutBox.y);
                        K.y.min = I.target.y.min, K.y.max = K.y.min + L;
                    }
                    (0, j.copyBoxInto)(J, K), (0, k.transformBox)(J, M), (0, l.calcBoxDelta)(this.projectionDeltaWithTransform, this.layoutCorrected, J, M);
                }
            }
            registerSharedNode(I, J) {
                var K, L, M;
                this.sharedNodes.has(I) || this.sharedNodes.set(I, new (0, q.NodeStack)());
                this.sharedNodes.get(I).add(J), J.promote({
                    transition: null === (K = J.options.initialPromotionConfig) || void 0 === K ? void 0 : K.transition,
                    preserveFollowOpacity: null === (M = null === (L = J.options.initialPromotionConfig) || void 0 === L ? void 0 : L.shouldPreserveFollowOpacity) || void 0 === M ? void 0 : M.call(L, J)
                });
            }
            isLead() {
                const I = this.getStack();
                return !I || I.lead === this;
            }
            getLead() {
                var I;
                const {layoutId: J} = this.options;
                return J && (null === (I = this.getStack()) || void 0 === I ? void 0 : I.lead) || this;
            }
            getPrevLead() {
                var I;
                const {layoutId: J} = this.options;
                return J ? null === (I = this.getStack()) || void 0 === I ? void 0 : I.prevLead : void 0;
            }
            getStack() {
                const {layoutId: I} = this.options;
                if (I)
                    return this.root.sharedNodes.get(I);
            }
            promote({
                needsReset: I,
                transition: J,
                preserveFollowOpacity: K
            } = {}) {
                const L = this.getStack();
                L && L.promote(this, K), I && (this.projectionDelta = void 0, this.needsReset = !0), J && this.setOptions({ transition: J });
            }
            relegate() {
                const I = this.getStack();
                return !!I && I.relegate(this);
            }
            resetRotation() {
                const {visualElement: I} = this.options;
                if (!I)
                    return;
                let J = !1;
                const {latestValues: K} = I;
                if ((K.rotate || K.rotateX || K.rotateY || K.rotateZ) && (J = !0), !J)
                    return;
                const L = {};
                for (let M = 0; M < A.length; M++) {
                    const N = 'rotate' + A[M];
                    K[N] && (L[N] = K[N], I.setStaticValue(N, 0));
                }
                null == I || I.render();
                for (const O in L)
                    I.setStaticValue(M, L[M]);
                I.scheduleRender();
            }
            getProjectionStyles(I = {}) {
                var J, K;
                const L = {};
                if (!this.instance || this.isSVG)
                    return L;
                if (!this.isVisible)
                    return { visibility: 'hidden' };
                L.visibility = '';
                const M = this.getTransformTemplate();
                if (this.needsReset)
                    return this.needsReset = !1, L.opacity = '', L.pointerEvents = (0, w.resolveMotionValue)(I.pointerEvents) || '', L.transform = M ? M(this.latestValues, '') : 'none', L;
                const N = this.getLead();
                if (!this.projectionDelta || !this.layout || !N.target) {
                    const O = {};
                    return this.options.layoutId && (O.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, O.pointerEvents = (0, w.resolveMotionValue)(I.pointerEvents) || ''), this.hasProjected && !(0, u.hasTransform)(this.latestValues) && (O.transform = M ? M({}, '') : 'none', this.hasProjected = !1), O;
                }
                const P = N.animationValues || N.latestValues;
                this.applyTransformsToTarget(), L.transform = (0, s.buildProjectionTransform)(this.projectionDeltaWithTransform, this.treeScale, P), M && (L.transform = M(P, L.transform));
                const {
                    x: Q,
                    y: R
                } = this.projectionDelta;
                L.transformOrigin = `${ 100 * Q.origin }% ${ 100 * R.origin }% 0`, N.animationValues ? L.opacity = N === this ? null !== (K = null !== (O = P.opacity) && void 0 !== O ? O : this.latestValues.opacity) && void 0 !== K ? K : 1 : this.preserveOpacity ? this.latestValues.opacity : P.opacityExit : L.opacity = N === this ? void 0 !== P.opacity ? P.opacity : '' : void 0 !== P.opacityExit ? P.opacityExit : 0;
                for (const S in r.scaleCorrectors) {
                    if (void 0 === P[S])
                        continue;
                    const {
                            correct: T,
                            applyTo: U
                        } = r.scaleCorrectors[S], V = 'none' === L.transform ? P[S] : T(P[S], N);
                    if (U) {
                        const W = U.length;
                        for (let X = 0; X < W; X++)
                            L[U[X]] = V;
                    } else
                        L[W] = V;
                }
                return this.options.layoutId && (L.pointerEvents = N === this ? (0, w.resolveMotionValue)(W.pointerEvents) || '' : 'none'), L;
            }
            clearSnapshot() {
                this.resumeFrom = this.snapshot = void 0;
            }
            resetTree() {
                this.root.nodes.forEach(I => {
                    var J;
                    return null === (J = I.currentAnimation) || void 0 === J ? void 0 : J.stop();
                }), this.root.nodes.forEach(_X), this.root.sharedNodes.clear();
            }
            constructor(I, J = {}, K = null == E ? void 0 : E()) {
                this.id = B++, this.animationId = 0, this.children = new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                    x: 1,
                    y: 1
                }, this.eventHandlers = new Map(), this.potentialNodes = new Map(), this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
                }, this.updateProjection = () => {
                    this.nodes.forEach(_V), this.nodes.forEach(_ab), this.nodes.forEach(_bb);
                }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map(), this.elementId = I, this.latestValues = J, this.root = K ? K.root || K : this, this.path = K ? [
                    ...K.path,
                    K
                ] : [], this.parent = K, this.depth = K ? K.depth + 1 : 0, I && this.root.registerPotentialNode(I, this);
                for (let L = 0; L < this.path.length; L++)
                    this.path[L].shouldResetTransform = !0;
                this.root === this && (this.nodes = new (0, v.FlatTree)());
            }
        };
    }
    function _D(E) {
        E.updateLayout();
    }
    function _E(F) {
        var G, H, I;
        const J = (null === (G = F.resumeFrom) || void 0 === G ? void 0 : G.snapshot) || F.snapshot;
        if (F.isLead() && F.layout && J && F.hasListeners('didUpdate')) {
            const {
                    layoutBox: K,
                    measuredBox: L
                } = F.layout, {animationType: M} = F.options, N = J.source !== F.layout.source;
            'size' === M ? (0, t.eachAxis)(O => {
                const P = N ? J.measuredBox[O] : J.layoutBox[O], Q = (0, l.calcLength)(P);
                P.min = K[O].min, P.max = P.min + Q;
            }) : _lb(M, J.layoutBox, K) && (0, t.eachAxis)(O => {
                const P = N ? J.measuredBox[O] : J.layoutBox[O], Q = (0, l.calcLength)(K[O]);
                P.max = P.min + Q;
            });
            const O = (0, n.createDelta)();
            (0, l.calcBoxDelta)(O, K, J.layoutBox);
            const P = (0, n.createDelta)();
            N ? (0, l.calcBoxDelta)(P, F.applyTransform(L, !0), J.measuredBox) : (0, l.calcBoxDelta)(P, K, J.layoutBox);
            const Q = !(0, p.isDeltaZero)(O);
            let R = !1;
            if (!F.resumeFrom) {
                const S = F.getClosestProjectingParent();
                if (S && !S.resumeFrom) {
                    const {
                        snapshot: T,
                        layout: U
                    } = S;
                    if (T && U) {
                        const V = (0, n.createBox)();
                        (0, l.calcRelativePosition)(V, J.layoutBox, T.layoutBox);
                        const W = (0, n.createBox)();
                        (0, l.calcRelativePosition)(W, K, U.layoutBox), (0, p.boxEquals)(V, W) || (R = !0), S.options.layoutRoot && (F.relativeTarget = W, F.relativeTargetOrigin = V, F.relativeParent = S);
                    }
                }
            }
            F.notifyListeners('didUpdate', {
                layout: K,
                snapshot: J,
                delta: W,
                layoutDelta: V,
                hasLayoutChanged: Q,
                hasRelativeTargetChanged: R
            });
        } else
            F.isLead() && (null === (T = (S = F.options).onExitComplete) || void 0 === T || T.call(S));
        F.options.transition = void 0;
    }
    function _V(W) {
        W.isProjectionDirty || (W.isProjectionDirty = Boolean(W.parent && W.parent.isProjectionDirty)), W.isTransformDirty || (W.isTransformDirty = Boolean(W.parent && W.parent.isTransformDirty));
    }
    function _W(X) {
        X.clearSnapshot();
    }
    function _X(Y) {
        Y.clearMeasurements();
    }
    function _Y(Z) {
        const {visualElement: $} = Z.options;
        (null == $ ? void 0 : $.getProps().onBeforeLayoutMeasure) && $.notify('BeforeLayoutMeasure'), Z.resetTransform();
    }
    function _$(ab) {
        ab.finishAnimation(), ab.targetDelta = ab.relativeTarget = ab.target = void 0;
    }
    function _ab(bb) {
        bb.resolveTargetDelta();
    }
    function _bb(cb) {
        cb.calcProjection();
    }
    function _cb(db) {
        db.resetRotation();
    }
    function _db(eb) {
        eb.removeLeadSnapshot();
    }
    function _eb(fb, gb, hb) {
        fb.translate = (0, z.mix)(gb.translate, 0, hb), fb.scale = (0, z.mix)(gb.scale, 1, hb), fb.origin = gb.origin, fb.originPoint = gb.originPoint;
    }
    function _fb(gb, hb, ib, jb) {
        gb.min = (0, z.mix)(hb.min, ib.min, jb), gb.max = (0, z.mix)(hb.max, ib.max, jb);
    }
    function _gb(hb) {
        return hb.animationValues && void 0 !== hb.animationValues.opacityExit;
    }
    const _hb = {
        duration: 0.45,
        ease: [
            0.4,
            0,
            0.1,
            1
        ]
    };
    function _ib(jb, kb) {
        let lb = jb.root;
        for (let mb = jb.path.length - 1; mb >= 0; mb--)
            if (Boolean(jb.path[mb].instance)) {
                lb = jb.path[mb];
                break;
            }
        const nb = (lb && lb !== jb.root ? lb.instance : document).querySelector(`[data-projection-id="${ mb }"]`);
        nb && jb.mount(nb, !0);
    }
    function _kb(lb) {
        lb.min = Math.round(lb.min), lb.max = Math.round(lb.max);
    }
    function _lb(mb, nb, ob) {
        return 'position' === mb || 'preserve-aspect' === mb && !(0, l.isNear)((0, p.aspectRatio)(nb), (0, p.aspectRatio)(ob), 0.2);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'animate', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j, k, l = {}) {
        const m = (0, h.isMotionValue)(j) ? j : (0, g.motionValue)(j);
        return m.start((0, f.createMotionValueAnimation)('', m, k, l)), {
            stop: () => m.stop(),
            isAnimating: () => m.isAnimating()
        };
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'mixValues', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    const k = [
            'TopLeft',
            'TopRight',
            'BottomLeft',
            'BottomRight'
        ], l = k.length, m = n => 'string' == typeof n ? parseFloat(n) : n, n = o => 'number' == typeof o || j.px.test(o);
    function _o(p, q, r, s, t, u) {
        t ? (p.opacity = (0, h.mix)(0, void 0 !== r.opacity ? r.opacity : 1, _r(s)), p.opacityExit = (0, h.mix)(void 0 !== q.opacity ? q.opacity : 1, 0, _s(s))) : u && (p.opacity = (0, h.mix)(void 0 !== q.opacity ? q.opacity : 1, void 0 !== r.opacity ? r.opacity : 1, s));
        for (let v = 0; v < l; v++) {
            const w = `border${ k[v] }Radius`;
            let x = _q(q, u), y = _q(r, u);
            if (void 0 === x && void 0 === y)
                continue;
            x || (x = 0), y || (y = 0);
            0 === x || 0 === y || n(x) === n(y) ? (p[u] = Math.max((0, h.mix)(m(x), m(y), s), 0), (j.percent.test(y) || j.percent.test(x)) && (p[u] += '%')) : p[u] = y;
        }
        (q.rotate || r.rotate) && (p.rotate = (0, h.mix)(q.rotate || 0, r.rotate || 0, s));
    }
    function _q(r, s) {
        return void 0 !== r[s] ? r[s] : r.borderRadius;
    }
    const _r = _t(0, 0.5, f.circOut), _s = _t(0.5, 0.95, i.noop);
    function _t(u, v, w) {
        return x => x < u ? 0 : x > v ? 1 : w((0, w.progress)(u, v, x));
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        g.min = h.min, g.max = h.max;
    }
    function g(h, i) {
        f(h.x, i.x), f(h.y, i.y);
    }
    a(d.exports, 'copyBoxInto', function () {
        return g;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'removeBoxTransforms', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function i(j, k, l, m, n) {
        return j -= k, j = (0, h.scalePoint)(j, 1 / l, m), void 0 !== n && (j = (0, h.scalePoint)(j, 1 / n, m)), j;
    }
    function j(k, l, [m, n, o], p, q) {
        !function (r, s = 0, t = 1, u = 0.5, v, w = x, y = z) {
            g.percent.test(s) && (s = parseFloat(s), s = (0, f.mix)(y.min, y.max, s / 100) - y.min);
            if ('number' != typeof s)
                return;
            let A = (0, f.mix)(w.min, w.max, u);
            z === w && (A -= s), z.min = i(z.min, s, t, A, v), z.max = i(z.max, s, t, A, v);
        }(k, l[m], l[n], l[o], l.scale, p, q);
    }
    const k = [
            'x',
            'scaleX',
            'originX'
        ], l = [
            'y',
            'scaleY',
            'originY'
        ];
    function _m(n, o, p, q) {
        j(n.x, o, k, null == p ? void 0 : p.x, null == q ? void 0 : q.x), j(n.y, o, l, null == p ? void 0 : p.y, null == q ? void 0 : q.y);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'isDeltaZero', function () {
        return _h;
    }), a(d.exports, 'boxEquals', function () {
        return _i;
    }), a(d.exports, 'aspectRatio', function () {
        return _j;
    });
    var f = c('.....');
    function g(h) {
        return 0 === h.translate && 1 === h.scale;
    }
    function _h(i) {
        return g(i.x) && g(i.y);
    }
    function _i(j, k) {
        return j.x.min === k.x.min && j.x.max === k.x.max && j.y.min === k.y.min && j.y.max === k.y.max;
    }
    function _j(k) {
        return (0, f.calcLength)(k.x) / (0, f.calcLength)(k.y);
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'NodeStack', function () {
        return _g;
    });
    var f = c('.....');
    class _g {
        add(h) {
            (0, f.addUniqueItem)(this.members, h), h.scheduleRender();
        }
        remove(h) {
            if ((0, f.removeItem)(this.members, h), h === this.prevLead && (this.prevLead = void 0), h === this.lead) {
                const i = this.members[this.members.length - 1];
                i && this.promote(i);
            }
        }
        relegate(h) {
            const i = this.members.findIndex(j => h === j);
            if (0 === i)
                return !1;
            let j;
            for (let k = i; k >= 0; k--) {
                const l = this.members[k];
                if (!1 !== l.isPresent) {
                    j = l;
                    break;
                }
            }
            return !!j && (this.promote(j), !0);
        }
        promote(h, i) {
            var j;
            const k = this.lead;
            if (h !== k && (this.prevLead = k, this.lead = h, h.show(), k)) {
                k.instance && k.scheduleRender(), h.scheduleRender(), h.resumeFrom = k, i && (h.resumeFrom.preserveOpacity = !0), k.snapshot && (h.snapshot = k.snapshot, h.snapshot.latestValues = k.animationValues || k.latestValues), (null === (j = h.root) || void 0 === j ? void 0 : j.isUpdating) && (h.isLayoutDirty = !0);
                const {crossfade: l} = h.options;
                !1 === l && k.hide();
            }
        }
        exitAnimationComplete() {
            this.members.forEach(h => {
                var i, j, k, l, m;
                null === (j = (i = h.options).onExitComplete) || void 0 === j || j.call(i), null === (m = null === (k = h.resumingFrom) || void 0 === k ? void 0 : (l = k.options).onExitComplete) || void 0 === m || m.call(l);
            });
        }
        scheduleRender() {
            this.members.forEach(h => {
                h.instance && h.scheduleRender(!1);
            });
        }
        removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
        constructor() {
            this.members = [];
        }
    }
}), c.register('.....', function (d, e) {
    function f(g, h, i) {
        let j = '';
        const k = g.x.translate / h.x, l = g.y.translate / h.y;
        if ((k || l) && (j = `translate3d(${ k }px, ${ l }px, 0) `), 1 === h.x && 1 === h.y || (j += `scale(${ 1 / h.x }, ${ 1 / h.y }) `), i) {
            const {
                rotate: m,
                rotateX: n,
                rotateY: o
            } = i;
            g && (j += `rotate(${ g }deg) `), h && (j += `rotateX(${ h }deg) `), o && (j += `rotateY(${ o }deg) `);
        }
        const p = g.x.scale * h.x, q = g.y.scale * h.y;
        return 1 === p && 1 === q || (j += `scale(${ p }, ${ q })`), j || 'none';
    }
    m(n.exports, 'buildProjectionTransform', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'FlatTree', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    class _h {
        add(i) {
            (0, f.addUniqueItem)(this.children, i), this.isDirty = !0;
        }
        remove(i) {
            (0, f.removeItem)(this.children, i), this.isDirty = !0;
        }
        forEach(i) {
            this.isDirty && this.children.sort(g.compareByDepth), this.isDirty = !1, this.children.forEach(i);
        }
        constructor() {
            this.children = [], this.isDirty = !1;
        }
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'compareByDepth', function () {
        return _f;
    });
    const _f = (g, h) => g.depth - h.depth;
}), c.register('.....', function (d, e) {
    a(d.exports, 'DocumentProjectionNode', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    const _h = (0, f.createProjectionNode)({
        attachResizeListener: (i, j) => (0, g.addDomEvent)(i, 'resize', j),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    });
});