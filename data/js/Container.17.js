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
c.register('9aZ6t', function(d, e) {
    a(d.exports, 'motion', function() {
        return _o;
    });
    c('1MuOh');
    var f = c('sSf0H'),
        g = c('rRxsR'),
        h = c('h2/7x'),
        i = c('4Q+71'),
        j = c('zJ74K'),
        k = c('3bted'),
        l = c('KqpiS'),
        m = c('zCt7h');
    const n = {
            ...i.animations,
            ...h.gestureAnimations,
            ...j.drag,
            ...l.layoutFeatures
        },
        _o = (0, f.createMotionProxy)((a, d) => (0, g.createDomMotionConfig)(a, d, n, k.createDomVisualElement, m.HTMLProjectionNode));
}), c.register('1MuOh', function(d, e) {
    a(d.exports, 'createMotionComponent', function() {
        return _u;
    });
    var f = c('O0Kav'),
        g = (f = c('O0Kav'), c('gqmh2')),
        h = c('UfWUR'),
        i = c('3wPIA'),
        j = c('I5Fre'),
        k = c('xp4Zf'),
        l = c('Dc1Y7'),
        m = c('MR6yZ'),
        n = c('VgdbE'),
        o = c('37vCj'),
        p = c('P/tpU'),
        q = c('rfxbl'),
        r = c('Knpd/'),
        s = c('X3Zcn'),
        t = c('cYji0');

    function _u({
        preloadedFeatures: v,
        createVisualElement: w,
        projectionNodeConstructor: x,
        useRender: y,
        useVisualState: z,
        Component: A
    }) {
        v && (0, m.loadFeatures)(v);
        const B = (0, f.forwardRef)(function(C, D) {
            const E = {
                    ...(0, f.useContext)(g.MotionConfigContext),
                    ...C,
                    layoutId: _v(C)
                },
                {
                    isStatic: F
                } = E;
            let G = null;
            const H = (0, k.useCreateMotionContext)(C),
                I = F ? void 0 : (0, o.useProjectionId)(),
                J = z(C, F);
            if (!F && n.isBrowser) {
                H.visualElement = (0, i.useVisualElement)(A, J, E, w);
                const K = (0, f.useContext)(r.LazyContext).strict,
                    L = (0, f.useContext)(s.SwitchLayoutGroupContext);
                H.visualElement && (G = H.visualElement.loadFeatures(E, K, v, I, x || l.featureDefinitions.projectionNodeConstructor, L));
            }
            return f.createElement(q.VisualElementHandler, {
                visualElement: H.visualElement,
                props: E
            }, G, f.createElement(h.MotionContext.Provider, {
                value: H
            }, y(A, C, I, (0, j.useMotionRef)(J, H.visualElement, D), J, F, H.visualElement)));
        });
        return B[t.motionComponentSymbol] = A, B;
    }

    function _v({
        layoutId: w
    }) {
        const x = (0, f.useContext)(p.LayoutGroupContext).id;
        return x && void 0 !== w ? x + '-' + w : w;
    }
}), c.register('gqmh2', function(d, e) {
    a(d.exports, 'MotionConfigContext', function() {
        return _f;
    });
    const _f = (0, c('O0Kav').createContext)({
        transformPagePoint: a => a,
        isStatic: !1,
        reducedMotion: 'never'
    });
}), c.register('UfWUR', function(d, e) {
    a(d.exports, 'MotionContext', function() {
        return _g;
    }), a(d.exports, 'useVisualElementContext', function() {
        return _h;
    });
    var f = c('O0Kav');
    const _g = (0, f.createContext)({});

    function _h() {
        return (0, f.useContext)(_g).visualElement;
    }
}), c.register('3wPIA', function(d, e) {
    a(d.exports, 'useVisualElement', function() {
        return _l;
    });
    var f = c('O0Kav'),
        g = c('8y9OL'),
        h = c('UfWUR'),
        i = c('FEEJX'),
        j = c('Knpd/'),
        k = c('gqmh2');

    function _l(m, n, o, p) {
        const q = (0, h.useVisualElementContext)(),
            r = (0, f.useContext)(j.LazyContext),
            s = (0, f.useContext)(g.PresenceContext),
            t = (0, f.useContext)(k.MotionConfigContext).reducedMotion,
            u = (0, f.useRef)();
        p = p || r.renderer, !u.current && p && (u.current = p(m, {
            visualState: n,
            parent: q,
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
}), c.register('8y9OL', function(d, e) {
    a(d.exports, 'PresenceContext', function() {
        return _f;
    });
    const _f = (0, c('O0Kav').createContext)(null);
}), c.register('FEEJX', function(d, e) {
    a(d.exports, 'useIsomorphicLayoutEffect', function() {
        return _g;
    });
    var f = c('O0Kav');
    const _g = c('VgdbE').isBrowser ? f.useLayoutEffect : f.useEffect;
}), c.register('VgdbE', function(d, e) {
    a(d.exports, 'isBrowser', function() {
        return _f;
    });
    const _f = 'undefined' != typeof document;
}), c.register('Knpd/', function(d, e) {
    a(d.exports, 'LazyContext', function() {
        return _f;
    });
    const _f = (0, c('O0Kav').createContext)({
        strict: !1
    });
}), c.register('I5Fre', function(d, e) {
    a(d.exports, 'useMotionRef', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('48KIK');

    function _h(i, j, k) {
        return (0, f.useCallback)(e => {
            e && i.mount && i.mount(e), j && (e ? j.mount(e) : j.unmount()), k && ('function' == typeof k ? k(e) : (0, g.isRefObject)(k) && (k.current = e));
        }, [j]);
    }
}), c.register('48KIK', function(d, e) {
    function f(g) {
        return 'object' == typeof g && Object.prototype.hasOwnProperty.call(g, 'current');
    }
    a(d.exports, 'isRefObject', function() {
        return f;
    });
}), c.register('xp4Zf', function(d, e) {
    a(d.exports, 'useCreateMotionContext', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('UfWUR'),
        h = c('sUXWC');

    function _i(j) {
        const {
            initial: k,
            animate: l
        } = (0, h.getCurrentTreeVariants)(j, (0, f.useContext)(g.MotionContext));
        return (0, f.useMemo)(() => ({
            initial: k,
            animate: l
        }), [
            _j(k),
            _j(l)
        ]);
    }

    function _j(k) {
        return Array.isArray(k) ? k.join(' ') : k;
    }
}), c.register('sUXWC', function(d, e) {
    a(d.exports, 'getCurrentTreeVariants', function() {
        return _h;
    });
    var f = c('vBQ6t'),
        g = c('OQ0Ff');

    function _h(i, j) {
        if ((0, g.isControllingVariants)(i)) {
            const {
                initial: k,
                animate: l
            } = i;
            return {
                initial: !1 === k || (0, f.isVariantLabel)(k) ? k : void 0,
                animate: (0, f.isVariantLabel)(l) ? l : void 0
            };
        }
        return !1 !== i.inherit ? j : {};
    }
}), c.register('vBQ6t', function(d, e) {
    function f(g) {
        return 'string' == typeof g || Array.isArray(g);
    }
    a(d.exports, 'isVariantLabel', function() {
        return f;
    });
}), c.register('OQ0Ff', function(d, e) {
    a(d.exports, 'isControllingVariants', function() {
        return _i;
    }), a(d.exports, 'isVariantNode', function() {
        return _j;
    });
    var f = c('PKBm2'),
        g = c('vBQ6t');
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
        return (0, f.isAnimationControls)(j.animate) || h.some(d => (0, g.isVariantLabel)(j[d]));
    }

    function _j(k) {
        return Boolean(_i(k) || k.variants);
    }
}), c.register('PKBm2', function(d, e) {
    function f(g) {
        return 'object' == typeof g && 'function' == typeof g.start;
    }
    a(d.exports, 'isAnimationControls', function() {
        return f;
    });
}), c.register('Dc1Y7', function(d, e) {
    a(d.exports, 'featureDefinitions', function() {
        return _g;
    });
    const f = a => ({
            isEnabled: d => a.some(a => !!d[a])
        }),
        _g = {
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
}), c.register('MR6yZ', function(d, e) {
    a(d.exports, 'loadFeatures', function() {
        return _g;
    });
    var f = c('Dc1Y7');

    function _g(h) {
        for (const i in h)
            'projectionNodeConstructor' === i ? f.featureDefinitions.projectionNodeConstructor = h[i] : f.featureDefinitions[i].Component = h[i];
    }
}), c.register('37vCj', function(d, e) {
    a(d.exports, 'useProjectionId', function() {
        return _i;
    });
    var f = c('lnHFO'),
        g = c('rPNs5');
    let h = 1;

    function _i() {
        return (0, f.useConstant)(() => {
            if (g.globalProjectionState.hasEverUpdated)
                return h++;
        });
    }
}), c.register('lnHFO', function(d, e) {
    a(d.exports, 'useConstant', function() {
        return _g;
    });
    var f = c('O0Kav');

    function _g(h) {
        const i = (0, f.useRef)(null);
        return null === i.current && (i.current = h()), i.current;
    }
}), c.register('rPNs5', function(d, e) {
    a(d.exports, 'globalProjectionState', function() {
        return _f;
    });
    const _f = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };
}), c.register('P/tpU', function(d, e) {
    a(d.exports, 'LayoutGroupContext', function() {
        return _f;
    });
    const _f = (0, c('O0Kav').createContext)({});
}), c.register('rfxbl', function(d, e) {
    a(d.exports, 'VisualElementHandler', function() {
        return _g;
    });
    var f = c('O0Kav');
    class _g extends b(f).Component {
        getSnapshotBeforeUpdate() {
            const {
                visualElement: h,
                props: i
            } = this.props;
            return h && h.setProps(i), null;
        }
        componentDidUpdate() {}
        render() {
            return this.props.children;
        }
    }
}), c.register('X3Zcn', function(d, e) {
    a(d.exports, 'SwitchLayoutGroupContext', function() {
        return _f;
    });
    const _f = (0, c('O0Kav').createContext)({});
}), c.register('cYji0', function(d, e) {
    a(d.exports, 'motionComponentSymbol', function() {
        return _f;
    });
    const _f = Symbol.for('motionComponentSymbol');
}), c.register('sSf0H', function(d, e) {
    a(d.exports, 'createMotionProxy', function() {
        return _g;
    });
    var f = c('1MuOh');

    function _g(h) {
        function i(j, k = {}) {
            return (0, f.createMotionComponent)(h(j, k));
        }
        if ('undefined' == typeof Proxy)
            return i;
        const j = new Map();
        return new Proxy(i, {
            get: (h, e) => (j.has(e) || j.set(e, i(e)), j.get(e))
        });
    }
}), c.register('rRxsR', function(d, e) {
    a(d.exports, 'createDomMotionConfig', function() {
        return _j;
    });
    var f = c('+rOAO'),
        g = c('43cJr'),
        h = c('Yp1A7'),
        i = c('bD/ct');

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
}), c.register('+rOAO', function(d, e) {
    a(d.exports, 'isSVGComponent', function() {
        return _g;
    });
    var f = c('NM2P+');

    function _g(h) {
        return 'string' == typeof h && !h.includes('-') && !!(f.lowercaseSVGElements.indexOf(h) > -1 || /[A-Z]/.test(h));
    }
}), c.register('NM2P+', function(d, e) {
    a(d.exports, 'lowercaseSVGElements', function() {
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
}), c.register('43cJr', function(d, e) {
    a(d.exports, 'createUseRender', function() {
        return _l;
    });
    var f = c('O0Kav'),
        g = c('/f2Bk'),
        h = c('tvUn5'),
        i = c('+rOAO'),
        j = c('sl53r'),
        k = c('5kiwO');

    function _l(m = !1) {
        return (d, c, e, _l, {
            latestValues: n
        }, _s) => {
            const o = ((0, i.isSVGComponent)(d) ? j.useSVGProps : g.useHTMLProps)(c, n, _s, d),
                p = {
                    ...(0, h.filterProps)(c, 'string' == typeof d, m),
                    ...o,
                    ref: _l
                },
                {
                    children: q
                } = c,
                r = (0, f.useMemo)(() => (0, k.isMotionValue)(q) ? q.get() : q, [q]);
            return e && (p['data-projection-id'] = e), (0, f.createElement)(d, {
                ...p,
                children: r
            });
        };
    }
}), c.register('/f2Bk', function(d, e) {
    a(d.exports, 'copyRawValuesOnly', function() {
        return _k;
    }), a(d.exports, 'useHTMLProps', function() {
        return _m;
    });
    var f = c('O0Kav'),
        g = c('90/id'),
        h = c('5kiwO'),
        i = c('GgYBA'),
        j = c('IH8mx');

    function _k(l, m, n) {
        for (const o in m)
            (0, h.isMotionValue)(m[o]) || (0, g.isForcedMotionValue)(o, n) || (l[o] = m[o]);
    }

    function l(m, n, o) {
        const p = {};
        return _k(p, m.style || {}, m), Object.assign(p, function({
            transformTemplate: q
        }, r, s) {
            return (0, f.useMemo)(() => {
                const t = (0, j.createHtmlRenderState)();
                return (0, i.buildHTMLStyles)(t, r, {
                    enableHardwareAcceleration: !s
                }, q), Object.assign({}, t.vars, t.style);
            }, [r]);
        }(m, n, o)), m.transformValues ? m.transformValues(p) : p;
    }

    function _m(n, o, p) {
        const q = {},
            r = l(n, o, p);
        return n.drag && !1 !== n.dragListener && (q.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = 'none', r.touchAction = !0 === n.drag ? 'none' : 'pan-' + ('x' === n.drag ? 'y' : 'x')), q.style = r, q;
    }
}), c.register('90/id', function(d, e) {
    a(d.exports, 'isForcedMotionValue', function() {
        return _h;
    });
    var f = c('R1SzX'),
        g = c('f0Vrc');

    function _h(i, {
        layout: j,
        layoutId: k
    }) {
        return g.transformProps.has(i) || i.startsWith('origin') || (j || void 0 !== k) && (!!f.scaleCorrectors[i] || 'opacity' === i);
    }
}), c.register('R1SzX', function(d, e) {
    a(d.exports, 'scaleCorrectors', function() {
        return _f;
    }), a(d.exports, 'addScaleCorrector', function() {
        return _g;
    });
    const _f = {};

    function _g(h) {
        Object.assign(_f, h);
    }
}), c.register('f0Vrc', function(d, e) {
    a(d.exports, 'transformPropOrder', function() {
        return _f;
    }), a(d.exports, 'transformProps', function() {
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
        ],
        _g = new Set(_f);
}), c.register('5kiwO', function(d, e) {
    a(d.exports, 'isMotionValue', function() {
        return _f;
    });
    const _f = a => !!(null == a ? void 0 : a.getVelocity);
}), c.register('GgYBA', function(d, e) {
    a(d.exports, 'buildHTMLStyles', function() {
        return _k;
    });
    var f = c('ggY3Z'),
        g = c('gOVDS'),
        h = c('f0Vrc'),
        i = c('w/ZDQ'),
        j = c('iBimf');

    function _k(l, m, n, o) {
        const {
            style: p,
            vars: q,
            transform: r,
            transformKeys: _s,
            transformOrigin: t
        } = l;
        _s.length = 0;
        let u = !1,
            v = !1,
            w = !0;
        for (const x in m) {
            const y = m[x];
            if ((0, g.isCSSVariable)(x)) {
                q[x] = y;
                continue;
            }
            const z = j.numberValueTypes[x],
                A = (0, i.getValueAsType)(y, z);
            if (h.transformProps.has(x)) {
                if (u = !0, r[x] = A, _s.push(x), !w)
                    continue;
                y !== (z.default || 0) && (w = !1);
            } else
                x.startsWith('origin') ? (v = !0, t[x] = A) : p[x] = A;
        }
        if (m.transform || (u || o ? p.transform = (0, f.buildTransform)(x, n, w, o) : p.transform && (p.transform = 'none')), v) {
            const {
                originX: y = '50%',
                originY: z = '50%',
                originZ: A = 0
            } = t;
            p.transformOrigin = `${ y } ${ z } ${ A }`;
        }
    }
}), c.register('ggY3Z', function(d, e) {
    a(d.exports, 'buildTransform', function() {
        return _i;
    });
    var f = c('f0Vrc');
    const g = {
            x: 'translateX',
            y: 'translateY',
            z: 'translateZ',
            transformPerspective: 'perspective'
        },
        h = (a, d) => f.transformPropOrder.indexOf(a) - f.transformPropOrder.indexOf(d);

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
            p += `${ g[q] || q }(${ j[q] }) `;
        return q && !j.z && (p += 'translateZ(0)'), p = p.trim(), o ? p = o(j, n ? '' : p) : m && n && (p = 'none'), p;
    }
}), c.register('gOVDS', function(d, e) {
    function f(g) {
        return g.startsWith('--');
    }
    a(d.exports, 'isCSSVariable', function() {
        return f;
    });
}), c.register('w/ZDQ', function(d, e) {
    a(d.exports, 'getValueAsType', function() {
        return _f;
    });
    const _f = (a, d) => d && 'number' == typeof a ? d.transform(a) : a;
}), c.register('iBimf', function(d, e) {
    a(d.exports, 'numberValueTypes', function() {
        return _i;
    });
    var f = c('Si/bj'),
        g = c('q1g+Z'),
        h = c('BJ2OU');
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
}), c.register('Si/bj', function(d, e) {
    a(d.exports, 'number', function() {
        return _g;
    }), a(d.exports, 'alpha', function() {
        return _h;
    }), a(d.exports, 'scale', function() {
        return _i;
    });
    var f = c('w+DYP');
    const _g = {
            test: a => 'number' == typeof a,
            parse: parseFloat,
            transform: a => a
        },
        _h = {
            ..._g,
            transform: a => (0, f.clamp)(0, 1, a)
        },
        _i = {
            ..._g,
            default: 1
        };
}), c.register('w+DYP', function(d, e) {
    a(d.exports, 'clamp', function() {
        return _f;
    });
    const _f = (a, d, e) => Math.min(Math.max(e, a), d);
}), c.register('q1g+Z', function(d, e) {
    a(d.exports, 'degrees', function() {
        return _h;
    }), a(d.exports, 'percent', function() {
        return _i;
    }), a(d.exports, 'px', function() {
        return _j;
    }), a(d.exports, 'vh', function() {
        return _k;
    }), a(d.exports, 'vw', function() {
        return _l;
    }), a(d.exports, 'progressPercentage', function() {
        return _m;
    });
    var f = c('Rpr/w');
    const g = a => ({
            test: d => (0, f.isString)(d) && d.endsWith(a) && 1 === d.split(' ').length,
            parse: parseFloat,
            transform: d => `${ d }${ a }`
        }),
        _h = g('deg'),
        _i = g('%'),
        _j = g('px'),
        _k = g('vh'),
        _l = g('vw'),
        _m = {
            ..._i,
            parse: a => _i.parse(a) / 100,
            transform: a => _i.transform(100 * a)
        };
}), c.register('Rpr/w', function(d, e) {
    a(d.exports, 'sanitize', function() {
        return _f;
    }), a(d.exports, 'floatRegex', function() {
        return _g;
    }), a(d.exports, 'colorRegex', function() {
        return _h;
    }), a(d.exports, 'singleColorRegex', function() {
        return _i;
    }), a(d.exports, 'isString', function() {
        return _j;
    });
    const _f = a => Math.round(100000 * a) / 100000,
        _g = /(-)?([\d]*\.?[\d])+/g,
        _h = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        _i = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

    function _j(k) {
        return 'string' == typeof k;
    }
}), c.register('BJ2OU', function(d, e) {
    a(d.exports, 'int', function() {
        return _f;
    });
    const _f = {
        ...c('Si/bj').number,
        transform: Math.round
    };
}), c.register('IH8mx', function(d, e) {
    a(d.exports, 'createHtmlRenderState', function() {
        return _f;
    });
    const _f = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
    });
}), c.register('tvUn5', function(d, e) {
    a(d.exports, 'filterProps', function() {
        return _i;
    });
    var f = c('UkOFp');
    let g = a => !(0, f.isValidMotionProp)(a);
    try {
        (_h = c('aRx0f').default) && (g = a => a.startsWith('on') ? !(0, f.isValidMotionProp)(a) : _h(a));
    } catch (a) {}
    var _h;

    function _i(j, k, l) {
        const m = {};
        for (const n in j)
            'values' === n && 'object' == typeof j.values || (g(n) || !0 === l && (0, f.isValidMotionProp)(n) || !k && !(0, f.isValidMotionProp)(n) || j.draggable && n.startsWith('onDrag')) && (m[n] = j[n]);
        return m;
    }
}), c.register('UkOFp', function(d, e) {
    a(d.exports, 'isValidMotionProp', function() {
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
}), c.register('aRx0f', function(d, e) {
    a(d.exports, 'default', function() {
        return _h;
    });
    var f = c('+Oxgh'),
        g = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        _h = (0, f.default)(function(i) {
            return g.test(i) || 111 === i.charCodeAt(0) && 110 === i.charCodeAt(1) && i.charCodeAt(2) < 91;
        });
}), c.register('+Oxgh', function(d, e) {
    a(d.exports, 'default', function() {
        return _f;
    });
    var _f = function(g) {
        var h = {};
        return function(i) {
            return void 0 === h[i] && (h[i] = g(i)), h[i];
        };
    };
}), c.register('sl53r', function(d, e) {
    a(d.exports, 'useSVGProps', function() {
        return _k;
    });
    var f = c('O0Kav'),
        g = c('/f2Bk'),
        h = c('NRfno'),
        i = c('tyfEJ'),
        j = c('460Vw');

    function _k(l, m, n, o) {
        const p = (0, f.useMemo)(() => {
            const q = (0, i.createSvgRenderState)();
            return (0, h.buildSVGAttrs)(q, m, {
                enableHardwareAcceleration: !1
            }, (0, j.isSVGTag)(o), l.transformTemplate), {
                ...q.attrs,
                style: {
                    ...q.style
                }
            };
        }, [m]);
        if (l.style) {
            const q = {};
            (0, g.copyRawValuesOnly)(q, l.style, l), p.style = {
                ...q,
                ...p.style
            };
        }
        return p;
    }
}), c.register('NRfno', function(d, e) {
    a(d.exports, 'buildSVGAttrs', function() {
        return _i;
    });
    var f = c('GgYBA'),
        g = c('/7JcF'),
        h = c('uIU2I');

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
            return void(j.style.viewBox && (j.attrs.viewBox = j.style.viewBox));
        j.attrs = j.style, j.style = {};
        const {
            attrs: v,
            style: w,
            dimensions: x
        } = j;
        v.transform && (x && (w.transform = v.transform), delete v.transform), x && (void 0 !== m || void 0 !== n || w.transform) && (w.transformOrigin = (0, g.calcSVGTransformOrigin)(x, void 0 !== m ? m : 0.5, void 0 !== n ? n : 0.5)), void 0 !== k && (v.x = k), void 0 !== l && (v.y = l), void 0 !== o && (0, h.buildSVGPath)(v, o, p, q, !1);
    }
}), c.register('/7JcF', function(d, e) {
    a(d.exports, 'calcSVGTransformOrigin', function() {
        return _h;
    });
    var f = c('q1g+Z');

    function g(h, i, j) {
        return 'string' == typeof h ? h : f.px.transform(i + j * h);
    }

    function _h(i, j, k) {
        return `${ g(j, i.x, i.width) } ${ g(k, i.y, i.height) }`;
    }
}), c.register('uIU2I', function(d, e) {
    a(d.exports, 'buildSVGPath', function() {
        return _i;
    });
    var f = c('q1g+Z');
    const g = {
            offset: 'stroke-dashoffset',
            array: 'stroke-dasharray'
        },
        h = {
            offset: 'strokeDashoffset',
            array: 'strokeDasharray'
        };

    function _i(j, k, l = 1, m = 0, n = !0) {
        j.pathLength = 1;
        const o = n ? g : h;
        j[o.offset] = f.px.transform(-m);
        const p = f.px.transform(k),
            q = f.px.transform(l);
        j[o.array] = `${ p } ${ q }`;
    }
}), c.register('tyfEJ', function(d, e) {
    a(d.exports, 'createSvgRenderState', function() {
        return _g;
    });
    var f = c('IH8mx');
    const _g = () => ({
        ...(0, f.createHtmlRenderState)(),
        attrs: {}
    });
}), c.register('460Vw', function(d, e) {
    a(d.exports, 'isSVGTag', function() {
        return _f;
    });
    const _f = a => 'string' == typeof a && 'svg' === a.toLowerCase();
}), c.register('Yp1A7', function(d, e) {
    a(d.exports, 'svgMotionConfig', function() {
        return _l;
    });
    var f = c('3pTL8'),
        g = c('InToH'),
        h = c('y6THr'),
        i = c('tyfEJ'),
        j = c('NRfno'),
        k = c('460Vw');
    const _l = {
        useVisualState: (0, h.makeUseVisualState)({
            scrapeMotionValuesFromProps: g.scrapeMotionValuesFromProps,
            createRenderState: i.createSvgRenderState,
            onMount: (a, d, {
                renderState: m,
                latestValues: n
            }) => {
                try {
                    m.dimensions = 'function' == typeof d.getBBox ? d.getBBox() : d.getBoundingClientRect();
                } catch (a) {
                    m.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                }
                (0, j.buildSVGAttrs)(m, n, {
                    enableHardwareAcceleration: !1
                }, (0, k.isSVGTag)(d.tagName), a.transformTemplate), (0, f.renderSVG)(d, m);
            }
        })
    };
}), c.register('3pTL8', function(d, e) {
    a(d.exports, 'renderSVG', function() {
        return _i;
    });
    var f = c('TOJ1Y'),
        g = c('8rImb'),
        h = c('rFCRc');

    function _i(j, k, l, m) {
        (0, g.renderHTML)(j, k, void 0, m);
        for (const n in k.attrs)
            j.setAttribute(h.camelCaseAttributes.has(n) ? n : (0, f.camelToDash)(n), k.attrs[n]);
    }
}), c.register('TOJ1Y', function(d, e) {
    a(d.exports, 'camelToDash', function() {
        return _f;
    });
    const _f = a => a.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}), c.register('8rImb', function(d, e) {
    function f(g, {
        style: h,
        vars: i
    }, j, k) {
        Object.assign(g.style, h, k && k.getProjectionStyles(j));
        for (const l in i)
            g.style.setProperty(l, i[l]);
    }
    a(d.exports, 'renderHTML', function() {
        return f;
    });
}), c.register('rFCRc', function(d, e) {
    a(d.exports, 'camelCaseAttributes', function() {
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
}), c.register('InToH', function(d, e) {
    a(d.exports, 'scrapeMotionValuesFromProps', function() {
        return _h;
    });
    var f = c('5kiwO'),
        g = c('X1d3v');

    function _h(i, j) {
        const k = (0, g.scrapeMotionValuesFromProps)(i, j);
        for (const l in i)
            if ((0, f.isMotionValue)(i[l]) || (0, f.isMotionValue)(j[l])) {
                k['x' === l || 'y' === l ? 'attr' + l.toUpperCase() : l] = i[l];
            }
        return k;
    }
}), c.register('X1d3v', function(d, e) {
    a(d.exports, 'scrapeMotionValuesFromProps', function() {
        return _h;
    });
    var f = c('90/id'),
        g = c('5kiwO');

    function _h(i, j) {
        const {
            style: k
        } = i, l = {};
        for (const m in k)
            ((0, g.isMotionValue)(k[m]) || j.style && (0, g.isMotionValue)(j.style[m]) || (0, f.isForcedMotionValue)(m, i)) && (l[m] = k[m]);
        return l;
    }
}), c.register('y6THr', function(d, e) {
    a(d.exports, 'makeUseVisualState', function() {
        return _n;
    });
    var f = c('O0Kav'),
        g = c('PKBm2'),
        h = c('8y9OL'),
        i = c('SEZiK'),
        j = c('lnHFO'),
        k = c('yhsVg'),
        l = c('UfWUR'),
        m = c('OQ0Ff');
    const _n = a => (d, c) => {
        const o = (0, f.useContext)(l.MotionContext),
            p = (0, f.useContext)(h.PresenceContext),
            q = () => function({
                scrapeMotionValuesFromProps: r,
                createRenderState: s,
                onMount: t
            }, u, v, w) {
                const x = {
                    latestValues: _o(u, v, w, r),
                    renderState: s()
                };
                return t && (x.mount = r => t(u, r, x)), x;
            }(a, d, o, p);
        return c ? q() : (0, j.useConstant)(q);
    };

    function _o(p, q, r, s) {
        const t = {},
            u = s(p, {});
        for (const v in u)
            t[v] = (0, k.resolveMotionValue)(u[v]);
        let {
            initial: w,
            animate: x
        } = v;
        const y = (0, m.isControllingVariants)(v),
            z = (0, m.isVariantNode)(v);
        q && z && !y && !1 !== v.inherit && (void 0 === w && (w = q.initial), void 0 === x && (x = q.animate));
        let A = !!r && !1 === r.initial;
        A = A || !1 === w;
        const B = A ? x : w;
        if (B && 'boolean' != typeof B && !(0, g.isAnimationControls)(B)) {
            (Array.isArray(B) ? B : [B]).forEach(q => {
                const C = (0, i.resolveVariantFromProps)(v, q);
                if (!C)
                    return;
                const {
                    transitionEnd: D,
                    transition: E,
                    ...F
                } = C;
                for (const G in F) {
                    let H = F[G];
                    if (Array.isArray(H)) {
                        H = H[A ? H.length - 1 : 0];
                    }
                    null !== H && (t[G] = H);
                }
                for (const H in D)
                    t[H] = D[H];
            });
        }
        return t;
    }
}), c.register('SEZiK', function(d, e) {
    function f(g, h, i, j = {}, k = {}) {
        return 'function' == typeof h && (h = h(void 0 !== i ? i : g.custom, j, k)), 'string' == typeof h && (h = g.variants && g.variants[h]), 'function' == typeof h && (h = h(void 0 !== i ? i : g.custom, j, k)), h;
    }
    a(d.exports, 'resolveVariantFromProps', function() {
        return f;
    });
}), c.register('yhsVg', function(d, e) {
    a(d.exports, 'resolveMotionValue', function() {
        return _h;
    });
    var f = c('yoR1v'),
        g = c('5kiwO');

    function _h(i) {
        const j = (0, g.isMotionValue)(i) ? i.get() : i;
        return (0, f.isCustomValue)(j) ? j.toValue() : j;
    }
}), c.register('yoR1v', function(d, e) {
    a(d.exports, 'isCustomValue', function() {
        return _g;
    }), a(d.exports, 'resolveFinalValueInKeyframes', function() {
        return _h;
    });
    var f = c('+GT45');
    const _g = a => Boolean(a && 'object' == typeof a && a.mix && a.toValue),
        _h = a => (0, f.isKeyframesTarget)(a) ? a[a.length - 1] || 0 : a;
}), c.register('+GT45', function(d, e) {
    a(d.exports, 'isKeyframesTarget', function() {
        return _f;
    });
    const _f = a => Array.isArray(a);
}), c.register('bD/ct', function(d, e) {
    a(d.exports, 'htmlMotionConfig', function() {
        return _i;
    });
    var f = c('y6THr'),
        g = c('X1d3v'),
        h = c('IH8mx');
    const _i = {
        useVisualState: (0, f.makeUseVisualState)({
            scrapeMotionValuesFromProps: g.scrapeMotionValuesFromProps,
            createRenderState: h.createHtmlRenderState
        })
    };
}), c.register('h2/7x', function(d, e) {
    a(d.exports, 'gestureAnimations', function() {
        return _k;
    });
    var f = c('fBuIa'),
        g = c('0yOE2'),
        h = c('H1ADR'),
        i = c('tr3tg'),
        j = c('RCxNM');
    const _k = {
        inView: (0, j.makeRenderlessComponent)(i.useViewport),
        tap: (0, j.makeRenderlessComponent)(h.useTapGesture),
        focus: (0, j.makeRenderlessComponent)(f.useFocusGesture),
        hover: (0, j.makeRenderlessComponent)(g.useHoverGesture)
    };
}), c.register('fBuIa', function(d, e) {
    a(d.exports, 'useFocusGesture', function() {
        return _i;
    });
    var f = c('PHlxx'),
        g = c('1B077'),
        h = c('O0Kav');

    function _i({
        whileFocus: j,
        visualElement: k
    }) {
        const {
            animationState: l
        } = k, m = (0, h.useCallback)(() => {
            l && l.setActive(f.AnimationType.Focus, !0);
        }, [l]), n = (0, h.useCallback)(() => {
            l && l.setActive(f.AnimationType.Focus, !1);
        }, [l]);
        (0, g.useDomEvent)(k, 'focus', j ? m : void 0), (0, g.useDomEvent)(k, 'blur', j ? n : void 0);
    }
}), c.register('PHlxx', function(d, e) {
    var f, g;
    a(d.exports, 'AnimationType', function() {
        return f;
    }), (g = f || (f = {})).Animate = 'animate', g.Hover = 'whileHover', g.Tap = 'whileTap', g.Drag = 'whileDrag', g.Focus = 'whileFocus', g.InView = 'whileInView', g.Exit = 'exit';
}), c.register('1B077', function(d, e) {
    a(d.exports, 'addDomEvent', function() {
        return _g;
    }), a(d.exports, 'useDomEvent', function() {
        return _h;
    });
    var f = c('O0Kav');

    function _g(h, i, j, k = {
        passive: !0
    }) {
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
}), c.register('0yOE2', function(d, e) {
    a(d.exports, 'useHoverGesture', function() {
        return _k;
    });
    var f = c('PHlxx'),
        g = c('g5DRr'),
        h = c('oMd64'),
        i = c('O0Kav');

    function j(k, l, m, n) {
        return (g, i) => {
            'touch' === g.type || (0, h.isDragActive)() || (m && k.animationState && k.animationState.setActive(f.AnimationType.Hover, l), n && n(g, i));
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
        ]), {
            passive: !l
        }), (0, g.usePointerEvent)(o, 'pointerleave', (0, i.useMemo)(() => m || n ? j(o, !1, Boolean(n), m) : void 0, [
            l,
            Boolean(n),
            o
        ]), {
            passive: !m
        });
    }
}), c.register('g5DRr', function(d, e) {
    a(d.exports, 'addPointerEvent', function() {
        return _h;
    }), a(d.exports, 'usePointerEvent', function() {
        return _i;
    });
    var f = c('1B077'),
        g = c('yA6hE');

    function _h(i, j, k, l) {
        return (0, f.addDomEvent)(i, j, (0, g.addPointerInfo)(k), l);
    }

    function _i(j, k, l, m) {
        return (0, f.useDomEvent)(j, k, l && (0, g.addPointerInfo)(l), m);
    }
}), c.register('yA6hE', function(d, e) {
    a(d.exports, 'extractEventInfo', function() {
        return _g;
    }), a(d.exports, 'addPointerInfo', function() {
        return _h;
    });
    var f = c('DQUG+');

    function _g(h, i = 'page') {
        return {
            point: {
                x: h[i + 'X'],
                y: h[i + 'Y']
            }
        };
    }
    const _h = a => d => (0, f.isPrimaryPointer)(d) && a(d, _g(d));
}), c.register('DQUG+', function(d, e) {
    a(d.exports, 'isPrimaryPointer', function() {
        return _f;
    });
    const _f = a => 'mouse' === a.pointerType ? 'number' != typeof a.button || a.button <= 0 : !1 !== a.isPrimary;
}), c.register('oMd64', function(d, e) {
    function f(g) {
        let h = null;
        return () => {
            const i = () => {
                h = null;
            };
            return null === h && (h = g, i);
        };
    }
    a(d.exports, 'getGlobalLock', function() {
        return _i;
    }), a(d.exports, 'isDragActive', function() {
        return _j;
    });
    const g = f('dragHorizontal'),
        h = f('dragVertical');

    function _i(j) {
        let k = !1;
        if ('y' === j)
            k = h();
        else if ('x' === j)
            k = g();
        else {
            const l = g(),
                m = h();
            l && m ? k = () => {
                l(), m();
            } : (l && l(), m && m());
        }
        return k;
    }

    function _j() {
        const k = _i(!0);
        return !k || (k(), !1);
    }
}), c.register('H1ADR', function(d, e) {
    a(d.exports, 'useTapGesture', function() {
        return _m;
    });
    var f = c('O0Kav'),
        g = c('Y/zr0'),
        h = c('g5DRr'),
        i = c('kGged'),
        j = c('PHlxx'),
        k = c('oMd64'),
        l = c('8v5Ry');

    function _m({
        onTap: n,
        onTapStart: o,
        onTapCancel: p,
        whileTap: q,
        visualElement: r,
        ...s
    }) {
        const t = n || o || p || q,
            u = (0, f.useRef)(!1),
            v = (0, f.useRef)(null),
            w = {
                passive: !(o || n || p || s.onPointerDown)
            };

        function x() {
            v.current && v.current(), v.current = null;
        }

        function y() {
            x(), u.current = !1;
            return r.getProps().whileTap && r.animationState && r.animationState.setActive(j.AnimationType.Tap, !1), !(0, k.isDragActive)();
        }

        function z(A, B) {
            var C, D, E, F;
            y() && ((0, g.isNodeOrChild)(r.current, A.target) ? null === (F = (E = r.getProps()).onTap) || void 0 === F || F.call(E, A, B) : null === (D = (C = r.getProps()).onTapCancel) || void 0 === D || D.call(C, A, B));
        }

        function A(B, C) {
            var D, E;
            y() && (null === (E = (D = r.getProps()).onTapCancel) || void 0 === E || E.call(D, B, C));
        }
        const B = (0, f.useCallback)((n, o) => {
            var C;
            if (x(), u.current)
                return;
            u.current = !0, v.current = (0, l.pipe)((0, h.addPointerEvent)(window, 'pointerup', z, w), (0, h.addPointerEvent)(window, 'pointercancel', A, w));
            const D = r.getProps();
            D.whileTap && r.animationState && r.animationState.setActive(j.AnimationType.Tap, !0), null === (C = D.onTapStart) || void 0 === C || C.call(D, n, o);
        }, [
            Boolean(o),
            r
        ]);
        (0, h.usePointerEvent)(r, 'pointerdown', t ? B : void 0, w), (0, i.useUnmountEffect)(x);
    }
}), c.register('Y/zr0', function(d, e) {
    a(d.exports, 'isNodeOrChild', function() {
        return _f;
    });
    const _f = (a, d) => !!d && (a === d || _f(a, d.parentElement));
}), c.register('kGged', function(d, e) {
    a(d.exports, 'useUnmountEffect', function() {
        return _g;
    });
    var f = c('O0Kav');

    function _g(h) {
        return (0, f.useEffect)(() => () => h(), []);
    }
}), c.register('8v5Ry', function(d, e) {
    a(d.exports, 'pipe', function() {
        return _g;
    });
    const f = (a, d) => e => d(a(e)),
        _g = (...a) => a.reduce(f);
}), c.register('tr3tg', function(d, e) {
    a(d.exports, 'useViewport', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('PHlxx'),
        h = c('go55H');

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
        ('undefined' == typeof IntersectionObserver ? _r : _k)(p, o.current, j, n);
    }
    const j = {
        some: 0,
        all: 1
    };

    function _k(l, m, n, {
        root: o,
        margin: p,
        amount: q = 'some',
        once: _r
    }) {
        (0, f.useEffect)(() => {
            if (!l || !n.current)
                return;
            const s = {
                root: null == o ? void 0 : o.current,
                rootMargin: p,
                threshold: 'number' == typeof q ? q : j[q]
            };
            return (0, h.observeIntersection)(n.current, s, l => {
                const {
                    isIntersecting: t
                } = l;
                if (m.isInView === t)
                    return;
                if (m.isInView = t, _r && !t && m.hasEnteredView)
                    return;
                t && (m.hasEnteredView = !0), n.animationState && n.animationState.setActive(g.AnimationType.InView, t);
                const u = n.getProps(),
                    v = t ? u.onViewportEnter : u.onViewportLeave;
                v && v(l);
            });
        }, [
            l,
            o,
            p,
            q
        ]);
    }

    function l(m, n, o, {
        fallback: p = !0
    }) {
        (0, f.useEffect)(() => {
            m && p && requestAnimationFrame(() => {
                n.hasEnteredView = !0;
                const {
                    onViewportEnter: q
                } = o.getProps();
                q && q(null), o.animationState && o.animationState.setActive(g.AnimationType.InView, !0);
            });
        }, [m]);
    }
}), c.register('go55H', function(d, e) {
    a(d.exports, 'observeIntersection', function() {
        return _j;
    });
    const f = new WeakMap(),
        g = new WeakMap(),
        h = a => {
            const i = f.get(a.target);
            i && i(a);
        },
        i = a => {
            a.forEach(h);
        };

    function _j(k, l, m) {
        const n = function({
            root: o,
            ...p
        }) {
            const q = o || document;
            g.has(q) || g.set(q, {});
            const r = g.get(q),
                s = JSON.stringify(p);
            return r[s] || (r[s] = new IntersectionObserver(i, {
                root: o,
                ...p
            })), r[s];
        }(l);
        return f.set(k, m), n.observe(k), () => {
            f.delete(k), n.unobserve(k);
        };
    }
}), c.register('RCxNM', function(d, e) {
    a(d.exports, 'makeRenderlessComponent', function() {
        return _f;
    });
    const _f = a => d => (a(d), null);
}), c.register('4Q+71', function(d, e) {
    a(d.exports, 'animations', function() {
        return _m;
    });
    var f = c('O0Kav'),
        g = c('PKBm2'),
        h = c('hxGRM'),
        i = c('8y9OL'),
        j = c('6PZ6z'),
        k = c('PHlxx'),
        l = c('RCxNM');
    const _m = {
        animation: (0, l.makeRenderlessComponent)(({
            visualElement: n,
            animate: o
        }) => {
            n.animationState || (n.animationState = (0, j.createAnimationState)(n)), (0, g.isAnimationControls)(o) && (0, f.useEffect)(() => o.subscribe(n), [o]);
        }),
        exit: (0, l.makeRenderlessComponent)(n => {
            const {
                custom: p,
                visualElement: q
            } = n, [r, s] = (0, h.usePresence)(), t = (0, f.useContext)(i.PresenceContext);
            (0, f.useEffect)(() => {
                q.isPresent = r;
                const u = q.animationState && q.animationState.setActive(k.AnimationType.Exit, !r, {
                    custom: t && t.custom || p
                });
                u && !r && u.then(s);
            }, [r]);
        })
    };
}), c.register('hxGRM', function(d, e) {
    a(d.exports, 'usePresence', function() {
        return _h;
    }), a(d.exports, 'useIsPresent', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('8y9OL');

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
        (0, f.useEffect)(() => l(m), []);
        return !j && k ? [
            !1,
            () => k && k(m)
        ] : [!0];
    }

    function _i() {
        return null === (a = (0, f.useContext)(g.PresenceContext)) || a.isPresent;
        var j;
    }
}), c.register('6PZ6z', function(d, e) {
    a(d.exports, 'variantPriorityOrder', function() {
        return _m;
    }), a(d.exports, 'createAnimationState', function() {
        return _p;
    });
    var f = c('PKBm2'),
        g = c('+GT45'),
        h = c('n1OO9'),
        i = c('oZ4GI'),
        j = c('vBQ6t'),
        k = c('PHlxx'),
        l = c('qp7C4');
    const _m = [
            k.AnimationType.Animate,
            k.AnimationType.InView,
            k.AnimationType.Focus,
            k.AnimationType.Hover,
            k.AnimationType.Tap,
            k.AnimationType.Drag,
            k.AnimationType.Exit
        ],
        n = [..._m].reverse(),
        o = _m.length;

    function _p(q) {
        let r = function(s) {
            return r => Promise.all(r.map(({
                animation: t,
                options: u
            }) => (0, i.animateVisualElement)(s, t, u)));
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
        const u = (r, s) => {
            const v = (0, l.resolveVariant)(q, s);
            if (v) {
                const {
                    transition: w,
                    transitionEnd: x,
                    ...y
                } = v;
                r = {
                    ...r,
                    ...y,
                    ...x
                };
            }
            return r;
        };

        function v(w, x) {
            const y = q.getProps(),
                z = q.getVariantContext(!0) || {},
                _A = [],
                B = new Set();
            let C = {},
                D = 1 / 0;
            for (let E = 0; E < o; E++) {
                const F = n[E],
                    G = s[F],
                    H = void 0 !== y[F] ? y[F] : z[F],
                    I = (0, j.isVariantLabel)(H),
                    J = F === x ? G.isActive : null;
                !1 === J && (D = E);
                let K = H === z[F] && H !== y[F] && I;
                if (K && t && q.manuallyAnimateOnMount && (K = !1), G.protectedKeys = {
                        ...C
                    }, !G.isActive && null === J || !H && !G.prevProp || (0, f.isAnimationControls)(H) || 'boolean' == typeof H)
                    continue;
                const L = _q(G.prevProp, H);
                let M = L || F === x && G.isActive && !K && I || E > D && I;
                const N = Array.isArray(H) ? H : [H];
                let O = N.reduce(u, {});
                !1 === J && (O = {});
                const {
                    prevResolvedValues: P = {}
                } = G, Q = {
                    ...P,
                    ...O
                }, R = q => {
                    M = !0, B.delete(q), G.needsAnimating[q] = !0;
                };
                for (const S in Q) {
                    const T = O[S],
                        U = P[S];
                    C.hasOwnProperty(S) || (T !== U ? (0, g.isKeyframesTarget)(T) && (0, g.isKeyframesTarget)(U) ? !(0, h.shallowCompare)(T, U) || L ? R(S) : G.protectedKeys[S] = !0 : void 0 !== T ? R(S) : B.add(S) : void 0 !== T && B.has(S) ? R(S) : G.protectedKeys[S] = !0);
                }
                G.prevProp = H, G.prevResolvedValues = O, G.isActive && (C = {
                    ...C,
                    ...O
                }), t && S.blockInitialAnimation && (M = !1), M && !K && _A.push(...N.map(S => ({
                    animation: S,
                    options: {
                        type: F,
                        ...w
                    }
                })));
            }
            if (B.size) {
                const F = {};
                B.forEach(s => {
                    const G = q.getBaseTarget(s);
                    void 0 !== G && (F[s] = G);
                }), _A.push({
                    animation: F
                });
            }
            let F = Boolean(_A.length);
            return t && !1 === y.initial && !q.manuallyAnimateOnMount && (F = !1), t = !1, F ? E(_A) : Promise.resolve();
        }
        return {
            animateChanges: v,
            setActive: function(w, x, y) {
                var z;
                if (s[w].isActive === x)
                    return Promise.resolve();
                null === (z = q.variantChildren) || void 0 === z || z.forEach(q => {
                    var A;
                    return null === (A = q.animationState) || void 0 === A ? void 0 : A.setActive(w, x);
                }), s[w].isActive = x;
                const A = v(y, w);
                for (const B in s)
                    s[B].protectedKeys = {};
                return A;
            },
            setAnimateFunction: function(w) {
                r = w(q);
            },
            getState: () => s
        };
    }

    function _q(r, s) {
        return 'string' == typeof s ? s !== r : !!Array.isArray(s) && !(0, h.shallowCompare)(s, r);
    }

    function r(s = !1) {
        return {
            isActive: s,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        };
    }
}), c.register('n1OO9', function(d, e) {
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
    a(d.exports, 'shallowCompare', function() {
        return f;
    });
}), c.register('oZ4GI', function(d, e) {
    a(d.exports, 'animateVisualElement', function() {
        return _m;
    });
    var f = c('cqoRc'),
        g = c('qp7C4'),
        h = c('f0Vrc'),
        i = c('KRQzt'),
        j = c('G+XpI'),
        k = c('MDgvk'),
        l = c('yVkz9');

    function _m(n, o, p = {}) {
        let q;
        if (n.notify('AnimationStart', o), Array.isArray(o)) {
            const r = o.map(o => _n(n, o, p));
            q = Promise.all(r);
        } else if ('string' == typeof o)
            q = _n(n, o, p);
        else {
            const r = 'function' == typeof o ? (0, g.resolveVariant)(n, o, p.custom) : o;
            q = _o(n, r, p);
        }
        return q.then(() => n.notify('AnimationComplete', o));
    }

    function _n(o, p, q = {}) {
        var r;
        const s = (0, g.resolveVariant)(o, p, q.custom);
        let {
            transition: t = o.getDefaultTransition() || {}
        } = s || {};
        q.transitionOverride && (t = q.transitionOverride);
        const u = s ? () => _o(o, s, q) : () => Promise.resolve(),
            v = (null === (r = o.variantChildren) || void 0 === r ? void 0 : r.size) ? (w = 0) => {
                const {
                    delayChildren: x = 0,
                    staggerChildren: y,
                    staggerDirection: z
                } = t;
                return function(A, B, C = 0, D = 0, E = 1, F) {
                    const G = [],
                        H = (A.variantChildren.size - 1) * D,
                        I = 1 === E ? (J = 0) => J * D : (K = 0) => H - K * D;
                    return Array.from(K.variantChildren).sort(_x).forEach((K, D) => {
                        K.notify('AnimationStart', B), G.push(_n(K, B, {
                            ...F,
                            delay: C + I(D)
                        }).then(() => K.notify('AnimationComplete', B)));
                    }), Promise.all(G);
                }(o, p, x + w, y, z, q);
            } : () => Promise.resolve(),
            {
                when: x
            } = t;
        if (x) {
            const [y, z] = 'beforeChildren' === x ? [
                u,
                v
            ] : [
                v,
                u
            ];
            return y().then(z);
        }
        return Promise.all([
            u(),
            v(q.delay)
        ]);
    }

    function _o(p, q, {
        delay: r = 0,
        transitionOverride: s,
        type: t
    } = {}) {
        var u;
        let {
            transition: v = p.getDefaultTransition(),
            transitionEnd: w,
            ..._x
        } = p.makeTargetAnimatable(q);
        const y = p.getValue('willChange');
        s && (v = s);
        const z = [],
            A = t && (null === (u = p.animationState) || void 0 === u ? void 0 : u.getState()[t]);
        for (const B in _x) {
            const C = p.getValue(B),
                D = _x[B];
            if (!C || void 0 === D || A && _q(A, B))
                continue;
            const E = {
                delay: r,
                elapsed: 0,
                ...v
            };
            if (window.HandoffAppearAnimations && !C.hasAnimated) {
                const F = p.getProps()[j.optimizedAppearDataAttribute];
                F && (E.elapsed = window.HandoffAppearAnimations(F, B, C, l.sync));
            }
            let F = C.start((0, k.createMotionValueAnimation)(B, C, D, p.shouldReduceMotion && h.transformProps.has(B) ? {
                type: !1
            } : E));
            (0, i.isWillChangeMotionValue)(y) && (y.add(B), F = F.then(() => y.remove(B))), z.push(F);
        }
        return Promise.all(z).then(() => {
            w && (0, f.setTarget)(p, w);
        });
    }

    function p(q, r) {
        return q.sortNodePosition(r);
    }

    function _q({
        protectedKeys: r,
        needsAnimating: s
    }, t) {
        const u = r.hasOwnProperty(t) && !0 !== s[t];
        return s[t] = !1, u;
    }
}), c.register('cqoRc', function(d, e) {
    a(d.exports, 'setTarget', function() {
        return _o;
    }), a(d.exports, 'checkTargetForNewValues', function() {
        return _p;
    }), a(d.exports, 'getOrigin', function() {
        return _r;
    });
    var f = c('zK19l'),
        g = c('EOvFc'),
        h = c('yoR1v'),
        i = c('EErEc'),
        j = c('cXn24'),
        k = c('Fl6w0'),
        l = c('IRlZ1'),
        m = c('qp7C4');

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
            n(p, v, (0, h.resolveFinalValueInKeyframes)(u[v]));
        }
    }

    function _p(q, r, s) {
        var t, u;
        const v = Object.keys(r).filter(r => !q.hasValue(r)),
            w = v.length;
        if (w)
            for (let x = 0; x < w; x++) {
                const y = v[x],
                    z = r[y];
                let A = null;
                Array.isArray(z) && (A = z[0]), null === A && (A = null !== (u = null !== (t = s[y]) && void 0 !== t ? t : q.readValue(y)) && void 0 !== u ? u : r[y]), null != A && ('string' == typeof A && ((0, f.isNumericalString)(A) || (0, g.isZeroValueString)(A)) ? A = parseFloat(A) : !(0, l.findValueType)(A) && j.complex.test(z) && (A = (0, k.getAnimatableNone)(y, z)), q.addValue(y, (0, i.motionValue)(A, {
                    owner: q
                })), void 0 === s[y] && (s[y] = A), null !== A && q.setBaseTarget(y, A));
            }
    }

    function q(r, s) {
        if (!s)
            return;
        return (s[r] || s.default || s).from;
    }

    function _r(s, t, u) {
        var v;
        const w = {};
        for (const x in s) {
            const y = q(x, t);
            w[x] = void 0 !== y ? y : null === (v = u.getValue(x)) || void 0 === v ? void 0 : v.get();
        }
        return w;
    }
}), c.register('zK19l', function(d, e) {
    a(d.exports, 'isNumericalString', function() {
        return _f;
    });
    const _f = a => /^\-?\d*\.?\d+$/.test(a);
}), c.register('EOvFc', function(d, e) {
    a(d.exports, 'isZeroValueString', function() {
        return _f;
    });
    const _f = a => /^0[^.\s]+$/.test(a);
}), c.register('EErEc', function(d, e) {
    a(d.exports, 'motionValue', function() {
        return _k;
    });
    var f = c('Gbwhq'),
        g = c('yVkz9'),
        h = c('kvgGm'),
        i = c('IPVV3');
    class j {
        onChange(k) {
            return this.on('change', k);
        }
        on(k, l) {
            this.events[k] || (this.events[k] = new(0, h.SubscriptionManager)());
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
            return this.stop(), new Promise(d => {
                this.hasAnimated = !0, this.animation = k(d) || null, this.events.animationStart && this.events.animationStart.notify();
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
            this.version = '8.5.2', this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (k, n = !0) => {
                this.prev = this.current, this.current = k;
                const {
                    delta: o,
                    timestamp: p
                } = f.frameData;
                this.lastUpdated !== p && (this.timeDelta = o, this.lastUpdated = p, g.sync.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), n && this.events.renderRequest && this.events.renderRequest.notify(this.current);
            }, this.scheduleVelocityCheck = () => g.sync.postRender(this.velocityCheck), this.velocityCheck = ({
                timestamp: o
            }) => {
                o !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
            }, this.hasAnimated = !1, this.prev = this.current = o, this.canTrackVelocity = (m = this.current, !isNaN(parseFloat(m))), this.owner = n.owner;
        }
    }

    function _k(l, m) {
        return new j(l, m);
    }
}), c.register('Gbwhq', function(d, e) {
    a(d.exports, 'frameData', function() {
        return _f;
    });
    const _f = {
        delta: 0,
        timestamp: 0
    };
}), c.register('yVkz9', function(d, e) {
    a(d.exports, 'sync', function() {
        return _n;
    }), a(d.exports, 'cancelSync', function() {
        return _o;
    }), a(d.exports, 'flushSync', function() {
        return _p;
    });
    var f = c('S1QhP'),
        g = c('wbTgJ'),
        h = c('Gbwhq');
    let i = !0,
        j = !1,
        k = !1;
    const l = [
            'read',
            'update',
            'preRender',
            'render',
            'postRender'
        ],
        m = l.reduce((a, d) => (a[d] = (0, g.createRenderStep)(() => j = !0), a), {}),
        _n = l.reduce((a, d) => {
            const o = m[d];
            return a[d] = (a, p = !1, q = !1) => (j || _s(), o.schedule(a, p, q)), a;
        }, {}),
        _o = l.reduce((a, d) => (a[d] = m[d].cancel, a), {}),
        _p = l.reduce((a, d) => (a[d] = () => m[d].process(h.frameData), a), {}),
        q = a => m[a].process(h.frameData),
        r = a => {
            j = !1, h.frameData.delta = i ? f.defaultTimestep : Math.max(Math.min(a - h.frameData.timestamp, 40), 1), h.frameData.timestamp = a, k = !0, l.forEach(q), k = !1, j && (i = !1, (0, f.onNextFrame)(r));
        },
        _s = () => {
            j = !0, i = !0, k || (0, f.onNextFrame)(r);
        };
}), c.register('S1QhP', function(d, e) {
    a(d.exports, 'defaultTimestep', function() {
        return _f;
    }), a(d.exports, 'onNextFrame', function() {
        return _h;
    });
    const _f = 1 / 60 * 1000,
        g = 'undefined' != typeof performance ? () => performance.now() : () => Date.now(),
        _h = 'undefined' != typeof window ? a => window.requestAnimationFrame(a) : a => setTimeout(() => a(g()), _f);
}), c.register('wbTgJ', function(d, e) {
    function f(g) {
        let h = [],
            i = [],
            j = 0,
            k = !1,
            l = !1;
        const m = new WeakSet(),
            n = {
                schedule: (g, o = !1, p = !1) => {
                    const q = p && k,
                        r = q ? h : i;
                    return o && m.add(g), -1 === r.indexOf(g) && (r.push(g), q && k && (j = h.length)), g;
                },
                cancel: g => {
                    const q = i.indexOf(g); -
                    1 !== q && i.splice(q, 1), m.delete(g);
                },
                process: _j => {
                    if (k)
                        o = !0;
                    else {
                        if (k = !0, [q, r] = [
                                r,
                                q
                            ], r.length = 0, j = q.length, j)
                            for (let s = 0; s < j; s++) {
                                const t = q[s];
                                t(_j), m.has(t) && (p.schedule(t), g());
                            }
                        k = !1, o && (o = !1, p.process(_j));
                    }
                }
            };
        return p;
    }
    a(d.exports, 'createRenderStep', function() {
        return f;
    });
}), c.register('kvgGm', function(d, e) {
    a(d.exports, 'SubscriptionManager', function() {
        return _g;
    });
    var f = c('ONYWP');
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
}), c.register('ONYWP', function(d, e) {
    function f(g, h) {
        -1 === g.indexOf(h) && g.push(h);
    }

    function g(h, i) {
        const j = h.indexOf(i);
        j > -1 && h.splice(j, 1);
    }

    function h([...a], i, j) {
        const k = i < 0 ? a.length + i : i;
        if (k >= 0 && k < a.length) {
            const l = j < 0 ? a.length + j : j,
                [m] = a.splice(i, 1);
            a.splice(l, 0, m);
        }
        return a;
    }
    a(d.exports, 'addUniqueItem', function() {
        return f;
    }), a(d.exports, 'removeItem', function() {
        return g;
    }), a(d.exports, 'moveItem', function() {
        return h;
    });
}), c.register('IPVV3', function(d, e) {
    function f(g, h) {
        return h ? g * (1000 / h) : 0;
    }
    a(d.exports, 'velocityPerSecond', function() {
        return f;
    });
}), c.register('cXn24', function(d, e) {
    a(d.exports, 'analyseComplexValue', function() {
        return _k;
    }), a(d.exports, 'complex', function() {
        return _o;
    });
    var f = c('R6x70'),
        g = c('Si/bj'),
        h = c('Rpr/w');
    const i = '${c}',
        _j = '${n}';

    function _k(l) {
        'number' == typeof l && (l = `${ l }`);
        const m = [];
        let n = 0,
            o = 0;
        const p = l.match(h.colorRegex);
        p && (n = p.length, l = l.replace(h.colorRegex, i), m.push(...p.map(f.color.parse)));
        const q = l.match(h.floatRegex);
        return q && (o = q.length, l = l.replace(h.floatRegex, _j), m.push(...q.map(g.number.parse))), {
            values: m,
            numColors: n,
            numNumbers: o,
            tokenised: l
        };
    }

    function l(m) {
        return _k(m).values;
    }

    function m(n) {
        const {
            values: o,
            numColors: p,
            tokenised: q
        } = _k(n), r = o.length;
        return n => {
            let s = q;
            for (let t = 0; t < r; t++)
                s = s.replace(t < p ? i : _j, t < p ? f.color.transform(n[t]) : (0, h.sanitize)(n[t]));
            return s;
        };
    }
    const n = a => 'number' == typeof a ? 0 : a;
    const _o = {
        test: function(p) {
            var q, r;
            return isNaN(p) && (0, h.isString)(p) && ((null === (q = p.match(h.floatRegex)) || void 0 === q ? void 0 : q.length) || 0) + ((null === (r = p.match(h.colorRegex)) || void 0 === r ? void 0 : r.length) || 0) > 0;
        },
        parse: l,
        createTransformer: m,
        getAnimatableNone: function(p) {
            const q = l(p);
            return m(p)(q.map(n));
        }
    };
}), c.register('R6x70', function(d, e) {
    a(d.exports, 'color', function() {
        return _j;
    });
    var f = c('Rpr/w'),
        g = c('j6Eac'),
        h = c('sEt+E'),
        i = c('VXz5x');
    const _j = {
        test: a => i.rgba.test(a) || g.hex.test(a) || h.hsla.test(a),
        parse: a => i.rgba.test(a) ? i.rgba.parse(a) : h.hsla.test(a) ? h.hsla.parse(a) : g.hex.parse(a),
        transform: a => (0, f.isString)(a) ? a : a.hasOwnProperty('red') ? i.rgba.transform(a) : h.hsla.transform(a)
    };
}), c.register('j6Eac', function(d, e) {
    a(d.exports, 'hex', function() {
        return _g;
    });
    var f = c('VXz5x');
    const _g = {
        test: (0, c('maW76').isColorString)('#'),
        parse: function(h) {
            let i = '',
                j = '',
                k = '',
                l = '';
            return h.length > 5 ? (i = h.substring(1, 3), j = h.substring(3, 5), k = h.substring(5, 7), l = h.substring(7, 9)) : (i = h.substring(1, 2), j = h.substring(2, 3), k = h.substring(3, 4), l = h.substring(4, 5), i += i, j += j, k += k, l += l), {
                red: parseInt(i, 16),
                green: parseInt(j, 16),
                blue: parseInt(k, 16),
                alpha: l ? parseInt(l, 16) / 255 : 1
            };
        },
        transform: f.rgba.transform
    };
}), c.register('VXz5x', function(d, e) {
    a(d.exports, 'rgba', function() {
        return _k;
    });
    var f = c('w+DYP'),
        g = c('Si/bj'),
        h = c('Rpr/w'),
        i = c('maW76');
    const j = {
            ...g.number,
            transform: a => Math.round((a => (0, f.clamp)(0, 255, a))(a))
        },
        _k = {
            test: (0, i.isColorString)('rgb', 'red'),
            parse: (0, i.splitColor)('red', 'green', 'blue'),
            transform: ({
                red: l,
                green: m,
                blue: n,
                alpha: o = 1
            }) => 'rgba(' + j.transform(l) + ', ' + j.transform(m) + ', ' + j.transform(n) + ', ' + (0, h.sanitize)(g.alpha.transform(o)) + ')'
        };
}), c.register('maW76', function(d, e) {
    a(d.exports, 'isColorString', function() {
        return _g;
    }), a(d.exports, 'splitColor', function() {
        return _h;
    });
    var f = c('Rpr/w');
    const _g = (a, d) => c => Boolean((0, f.isString)(c) && f.singleColorRegex.test(c) && c.startsWith(a) || d && Object.prototype.hasOwnProperty.call(c, d)),
        _h = (a, d, c) => e => {
            if (!(0, f.isString)(e))
                return e;
            const [i, j, k, l] = e.match(f.floatRegex);
            return {
                [a]: parseFloat(i),
                [d]: parseFloat(j),
                [c]: parseFloat(k),
                alpha: void 0 !== l ? parseFloat(l) : 1
            };
        };
}), c.register('sEt+E', function(d, e) {
    a(d.exports, 'hsla', function() {
        return _j;
    });
    var f = c('Si/bj'),
        g = c('q1g+Z'),
        h = c('Rpr/w'),
        i = c('maW76');
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
}), c.register('Fl6w0', function(d, e) {
    a(d.exports, 'getAnimatableNone', function() {
        return _i;
    });
    var f = c('cXn24'),
        g = c('yTctN'),
        h = c('zbl4M');

    function _i(j, k) {
        var l;
        let m = (0, h.getDefaultValueType)(j);
        return m !== g.filter && (m = f.complex), null === (l = m.getAnimatableNone) || void 0 === l ? void 0 : l.call(m, k);
    }
}), c.register('yTctN', function(d, e) {
    a(d.exports, 'filter', function() {
        return _k;
    });
    var f = c('cXn24'),
        g = c('Rpr/w');
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
    const j = /([a-z-]*)\(.*?\)/g,
        _k = {
            ...f.complex,
            getAnimatableNone: a => {
                const l = a.match(j);
                return l ? l.map(i).join(' ') : a;
            }
        };
}), c.register('zbl4M', function(d, e) {
    a(d.exports, 'getDefaultValueType', function() {
        return _i;
    });
    var f = c('R6x70'),
        g = c('yTctN');
    const h = {
            ...c('iBimf').numberValueTypes,
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
        },
        _i = a => h[a];
}), c.register('IRlZ1', function(d, e) {
    a(d.exports, 'findValueType', function() {
        return _k;
    });
    var f = c('R6x70'),
        g = c('cXn24'),
        h = c('nkJHZ'),
        i = c('VQIOd');
    const j = [
            ...h.dimensionValueTypes,
            f.color,
            g.complex
        ],
        _k = a => j.find((0, i.testValueType)(a));
}), c.register('nkJHZ', function(d, e) {
    a(d.exports, 'dimensionValueTypes', function() {
        return _j;
    }), a(d.exports, 'findDimensionValueType', function() {
        return _k;
    });
    var f = c('Si/bj'),
        g = c('q1g+Z'),
        h = c('VQIOd'),
        i = c('S+M/J');
    const _j = [
            f.number,
            g.px,
            g.percent,
            g.degrees,
            g.vw,
            g.vh,
            i.auto
        ],
        _k = a => _j.find((0, h.testValueType)(a));
}), c.register('VQIOd', function(d, e) {
    a(d.exports, 'testValueType', function() {
        return _f;
    });
    const _f = a => d => d.test(a);
}), c.register('S+M/J', function(d, e) {
    a(d.exports, 'auto', function() {
        return _f;
    });
    const _f = {
        test: a => 'auto' === a,
        parse: a => a
    };
}), c.register('qp7C4', function(d, e) {
    a(d.exports, 'resolveVariant', function() {
        return _g;
    });
    var f = c('SEZiK');

    function _g(h, i, j) {
        const k = h.getProps();
        return (0, f.resolveVariantFromProps)(k, i, void 0 !== j ? j : k.custom, function(l) {
            const m = {};
            return l.values.forEach((l, j) => m[j] = l.get()), m;
        }(h), function(l) {
            const m = {};
            return l.values.forEach((l, j) => m[j] = l.getVelocity()), m;
        }(h));
    }
}), c.register('KRQzt', function(d, e) {
    a(d.exports, 'isWillChangeMotionValue', function() {
        return _g;
    });
    var f = c('5kiwO');

    function _g(h) {
        return Boolean((0, f.isMotionValue)(h) && h.add);
    }
}), c.register('G+XpI', function(d, e) {
    a(d.exports, 'optimizedAppearDataAttribute', function() {
        return _f;
    });
    const _f = 'data-' + (0, c('TOJ1Y').camelToDash)('framerAppearId');
}), c.register('MDgvk', function(d, e) {
    a(d.exports, 'createMotionValueAnimation', function() {
        return _q;
    });
    var f = c('4CEZy'),
        g = c('MGOnd'),
        h = c('DWVwS'),
        i = c('j1iAC'),
        j = c('Tp4oN'),
        k = c('UUYPi'),
        l = c('ikohJ'),
        m = c('mgu+x'),
        n = c('19M7M'),
        o = c('NUlJJ'),
        p = c('BHJjl');
    const _q = (a, d, c, r = {}) => _q => {
        const s = (0, p.getValueTransition)(r, a) || {},
            t = s.delay || r.delay || 0;
        let {
            elapsed: u = 0
        } = r;
        u -= (0, g.secondsToMilliseconds)(t);
        const v = (0, o.getKeyframes)(d, a, c, s),
            w = v[0],
            x = v[v.length - 1],
            y = (0, n.isAnimatable)(a, w),
            z = (0, n.isAnimatable)(a, x);
        (0, f.warning)(y === z, `You are trying to animate ${ a } from "${ w }" to "${ x }". ${ w } is not an animatable value - to enable this animation set ${ w } to a value animatable to ${ x } via the \`style\` property.`);
        let A = {
            keyframes: v,
            velocity: d.getVelocity(),
            ...s,
            elapsed: u,
            onUpdate: a => {
                d.set(a), s.onUpdate && s.onUpdate(a);
            },
            onComplete: () => {
                _q(), s.onComplete && s.onComplete();
            }
        };
        if (!y || !z || h.instantAnimationState.current || !1 === s.type)
            return (0, j.createInstantAnimation)(A);
        if ('inertia' === s.type)
            return (0, l.inertia)(A);
        (0, p.isTransitionDefined)(s) || (A = {
            ...A,
            ...(0, m.getDefaultTransition)(a, A)
        }), A.duration && (A.duration = (0, g.secondsToMilliseconds)(A.duration)), A.repeatDelay && (A.repeatDelay = (0, g.secondsToMilliseconds)(A.repeatDelay));
        const B = d.owner,
            C = B && B.current;
        if (B && C instanceof HTMLElement && !(null == B ? void 0 : B.getProps().onUpdate)) {
            const D = (0, i.createAcceleratedAnimation)(d, a, A);
            if (D)
                return D;
        }
        return (0, k.animate)(A);
    };
}), c.register('4CEZy', function(d, e) {
    a(d.exports, 'warning', function() {
        return _f;
    }), a(d.exports, 'invariant', function() {
        return _g;
    });
    var _f = function() {},
        _g = function() {};
}), c.register('MGOnd', function(d, e) {
    a(d.exports, 'secondsToMilliseconds', function() {
        return _f;
    });
    const _f = a => 1000 * a;
}), c.register('DWVwS', function(d, e) {
    a(d.exports, 'instantAnimationState', function() {
        return _f;
    });
    const _f = {
        current: !1
    };
}), c.register('j1iAC', function(d, e) {
    a(d.exports, 'createAcceleratedAnimation', function() {
        return _m;
    });
    var f = c('yVkz9'),
        g = c('UUYPi'),
        h = c('yJffY'),
        i = c('rpy3u'),
        j = c('d+A+H'),
        k = c('GhMDk');
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
                x = w.sample(z), y.push(x.value), z += 10;
            s = y, t = z - 10, v = 'linear';
        }
        const w = (0, h.animateStyle)(n.owner.current, o, s, {
            ...r,
            delay: -u,
            duration: t,
            ease: v
        });
        return w.onfinish = () => {
            n.set((0, k.getFinalKeyframe)(s, r)), q && q();
        }, {
            get currentTime() {
                return w.currentTime || 0;
            },
            set currentTime(x) {
                w.currentTime = x;
            },
            stop: () => {
                const {
                    currentTime: x
                } = w;
                if (x) {
                    const y = (0, g.animate)({
                        ...r,
                        autoplay: !1
                    });
                    n.setWithVelocity(y.sample(x - 10).value, y.sample(x).value, 10);
                }
                f.sync.update(() => w.cancel());
            }
        };
    }
}), c.register('UUYPi', function(d, e) {
    a(d.exports, 'animate', function() {
        return _n;
    });
    var f = c('kIV6b'),
        g = c('YjI7/'),
        h = c('oJlU4'),
        i = c('yVkz9'),
        j = c('ffkTp');
    const k = {
        decay: h.decay,
        keyframes: f.keyframes,
        tween: f.keyframes,
        spring: g.spring
    };

    function l(m, n, o = 0) {
        return m - n - o;
    }
    const m = a => {
        const n = ({
            delta: o
        }) => a(o);
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
        let H, I, J = 0,
            K = o,
            L = !1,
            M = !0;
        const N = k[v.length > 2 ? 'keyframes' : C] || f.keyframes,
            O = v[0],
            P = v[v.length - 1];
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
        ], {
            clamp: !1
        }), v = [
            0,
            100
        ]);
        const R = N({
            ...D,
            duration: o,
            keyframes: v
        });

        function S() {
            J++, 'reverse' === t ? (M = J % 2 == 0, r = function(T, U = 0, V = 0, W = !0) {
                return W ? l(U + -T, U, V) : U - (T - U) + V;
            }(r, K, u, M)) : (r = l(r, K, u), 'mirror' === t && R.flipTarget()), L = !1, A && A();
        }

        function T(U) {
            M || (U = -U), r += U, L || (Q = R.next(Math.max(0, r)), I && (Q.value = I(Q.value)), L = M ? Q.done : r <= 0), B && B(Q.value), L && (0 === J && (K = void 0 !== K ? K : r), J < s ? function(V, W, X, Y) {
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
            sample: p => {
                r = G;
                const U = o && 'number' == typeof o ? Math.max(0.5 * o, 50) : 50;
                let V = 0;
                for (T(0); V <= p;) {
                    const W = p - V;
                    T(Math.min(W, U)), V += U;
                }
                return Q;
            }
        };
    }
}), c.register('kIV6b', function(d, e) {
    a(d.exports, 'keyframes', function() {
        return _i;
    });
    var f = c('+umMK'),
        g = c('ffkTp'),
        h = c('rkmxv');

    function _i({
        keyframes: j,
        ease: k = f.easeInOut,
        times: l,
        duration: m = 300
    }) {
        j = [...j];
        const n = (0, h.isEasingArray)(k) ? k.map(h.easingDefinitionToFunction) : (0, h.easingDefinitionToFunction)(k),
            o = {
                done: !1,
                value: j[0]
            },
            p = function(q, r) {
                return q.map(q => q * r);
            }(l && l.length === j.length ? l : function(q) {
                const r = q.length;
                return q.map((q, l) => 0 !== l ? l / (r - 1) : 0);
            }(j), m);

        function q() {
            return (0, g.interpolate)(p, j, {
                ease: Array.isArray(n) ? n : (k = j, l = n, k.map(() => l || f.easeInOut).splice(0, k.length - 1))
            });
            var r, s;
        }
        let r = q();
        return {
            next: j => (o.value = r(j), o.done = j >= m, o),
            flipTarget: () => {
                j.reverse(), r = q();
            }
        };
    }
}), c.register('+umMK', function(d, e) {
    a(d.exports, 'easeIn', function() {
        return _h;
    }), a(d.exports, 'easeOut', function() {
        return _i;
    }), a(d.exports, 'easeInOut', function() {
        return _j;
    });
    var f = c('7DoPW'),
        g = c('1aRHv');
    const _h = a => a * a,
        _i = (0, g.reverseEasing)(_h),
        _j = (0, f.mirrorEasing)(_h);
}), c.register('7DoPW', function(d, e) {
    a(d.exports, 'mirrorEasing', function() {
        return _f;
    });
    const _f = a => d => d <= 0.5 ? a(2 * d) / 2 : (2 - a(2 * (1 - d))) / 2;
}), c.register('1aRHv', function(d, e) {
    a(d.exports, 'reverseEasing', function() {
        return _f;
    });
    const _f = a => d => 1 - a(1 - d);
}), c.register('ffkTp', function(d, e) {
    a(d.exports, 'interpolate', function() {
        return _p;
    });
    var f = c('4CEZy'),
        g = c('R6x70'),
        h = c('w+DYP'),
        i = c('xfQpQ'),
        j = c('XKwNy'),
        k = c('8s9ty'),
        l = c('8v5Ry'),
        m = c('HSgBL');
    const n = (a, d) => c => (0, i.mix)(a, d, c);

    function o(p, q, r) {
        const s = [],
            t = r || ('number' == typeof(h = p[0]) ? n : 'string' == typeof h ? g.color.test(h) ? j.mixColor : k.mixComplex : Array.isArray(h) ? k.mixArray : 'object' == typeof h ? k.mixObject : n);
        var u;
        const v = p.length - 1;
        for (let w = 0; w < v; w++) {
            let x = t(p[w], p[w + 1]);
            if (q) {
                const y = Array.isArray(q) ? q[w] : q;
                x = (0, l.pipe)(y, x);
            }
            s.push(x);
        }
        return s;
    }

    function _p(q, r, {
        clamp: s = !0,
        ease: t,
        mixer: u
    } = {}) {
        const v = q.length;
        (0, f.invariant)(v === r.length, 'Both input and output ranges must be the same length'), (0, f.invariant)(!t || !Array.isArray(t) || t.length === v - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.'), q[0] > q[v - 1] && (q = [...q].reverse(), r = [...r].reverse());
        const w = o(r, t, u),
            x = w.length,
            y = r => {
                let z = 0;
                if (x > 1)
                    for (; z < q.length - 2 && !(r < q[z + 1]); z++);
                const A = (0, m.progress)(q[z], q[z + 1], r);
                return w[z](A);
            };
        return s ? r => y((0, h.clamp)(q[0], q[v - 1], r)) : y;
    }
}), c.register('xfQpQ', function(d, e) {
    a(d.exports, 'mix', function() {
        return _f;
    });
    const _f = (a, d, e) => -e * a + e * d + a;
}), c.register('XKwNy', function(d, e) {
    a(d.exports, 'mixColor', function() {
        return _o;
    });
    var f = c('xfQpQ'),
        g = c('4CEZy'),
        h = c('XIS1I'),
        i = c('j6Eac'),
        j = c('VXz5x'),
        k = c('sEt+E');
    const l = (a, d, c) => {
            const m = a * a;
            return Math.sqrt(Math.max(0, c * (d * d - m) + m));
        },
        m = [
            i.hex,
            j.rgba,
            k.hsla
        ];

    function n(o) {
        const p = (c = o, m.find(o => o.test(c)));
        var q;
        (0, g.invariant)(Boolean(p), `'${ o }' is not an animatable color. Use the equivalent color code instead.`);
        let r = p.parse(o);
        return p === k.hsla && (r = (0, h.hslaToRgba)(r)), r;
    }
    const _o = (a, d) => {
        const p = n(a),
            q = n(d),
            r = {
                ...p
            };
        return a => (r.red = l(p.red, q.red, a), r.green = l(p.green, q.green, a), r.blue = l(p.blue, q.blue, a), r.alpha = (0, f.mix)(p.alpha, q.alpha, a), j.rgba.transform(r));
    };
}), c.register('XIS1I', function(d, e) {
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
        let l = 0,
            m = 0,
            n = 0;
        if (i /= 100) {
            const o = j < 0.5 ? j * (1 + i) : j + i - j * i,
                p = 2 * j - o;
            l = f(p, o, h + 1 / 3), m = f(p, o, h), n = f(p, o, h - 1 / 3);
        } else
            l = m = n = j;
        return {
            red: Math.round(255 * l),
            green: Math.round(255 * m),
            blue: Math.round(255 * n),
            alpha: k
        };
    }
    a(d.exports, 'hslaToRgba', function() {
        return g;
    });
}), c.register('8s9ty', function(d, e) {
    a(d.exports, 'mixComplex', function() {
        return _o;
    }), a(d.exports, 'mixArray', function() {
        return _m;
    }), a(d.exports, 'mixObject', function() {
        return _n;
    });
    var f = c('xfQpQ'),
        g = c('XKwNy'),
        h = c('8v5Ry'),
        i = c('4CEZy'),
        j = c('R6x70'),
        k = c('cXn24');

    function l(m, n) {
        return 'number' == typeof m ? c => (0, f.mix)(m, n, c) : j.color.test(m) ? (0, g.mixColor)(m, n) : _o(m, n);
    }
    const _m = (a, d) => {
            const n = [...a],
                o = n.length,
                p = a.map((a, n) => l(a, d[n]));
            return a => {
                for (let q = 0; q < o; q++)
                    n[q] = p[q](a);
                return n;
            };
        },
        _n = (a, d) => {
            const o = {
                    ...a,
                    ...d
                },
                p = {};
            for (const q in o)
                void 0 !== a[q] && void 0 !== d[q] && (p[q] = l(a[q], d[q]));
            return a => {
                for (const r in p)
                    o[r] = p[r](a);
                return o;
            };
        },
        _o = (a, d) => {
            const p = k.complex.createTransformer(d),
                q = (0, k.analyseComplexValue)(a),
                r = (0, k.analyseComplexValue)(d);
            return q.numColors === r.numColors && q.numNumbers >= r.numNumbers ? (0, h.pipe)(_m(q.values, r.values), p) : ((0, i.warning)(!0, `Complex values '${ a }' and '${ d }' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), p => `${ p > 0 ? d : a }`);
        };
}), c.register('HSgBL', function(d, e) {
    a(d.exports, 'progress', function() {
        return _f;
    });
    const _f = (a, d, e) => {
        const g = d - a;
        return 0 === g ? 1 : (e - a) / g;
    };
}), c.register('rkmxv', function(d, e) {
    a(d.exports, 'easingDefinitionToFunction', function() {
        return _n;
    }), a(d.exports, 'isEasingArray', function() {
        return _o;
    });
    var f = c('4CEZy'),
        g = c('96zCq'),
        h = c('pssvf'),
        i = c('+umMK'),
        j = c('7vk+e'),
        k = c('FOfoq'),
        l = c('Xdje0');
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
        },
        _n = a => {
            if (Array.isArray(a)) {
                (0, f.invariant)(4 === a.length, 'Cubic bezier arrays must contain four numerical values.');
                const [o, p, q, r] = a;
                return (0, g.cubicBezier)(o, p, q, r);
            }
            return 'string' == typeof a ? ((0, f.invariant)(void 0 !== m[a], `Invalid easing type '${ a }'`), m[a]) : a;
        },
        _o = a => Array.isArray(a) && 'number' != typeof a[0];
}), c.register('96zCq', function(d, e) {
    a(d.exports, 'cubicBezier', function() {
        return _h;
    });
    var f = c('pssvf');
    const g = (a, d, c) => (((1 - 3 * c + 3 * d) * a + (3 * c - 6 * d)) * a + 3 * d) * a;

    function _h(i, j, k, l) {
        if (i === j && k === l)
            return f.noop;
        const m = j => function(n, o, p, q, r) {
            let s, t, u = 0;
            do {
                t = o + (p - o) / 2, s = g(t, q, r) - n, s > 0 ? p = t : o = t;
            } while (Math.abs(s) > 1e-7 && ++u < 12);
            return t;
        }(j, 0, 1, i, k);
        return i => 0 === i || 1 === i ? i : g(m(i), j, l);
    }
}), c.register('pssvf', function(d, e) {
    a(d.exports, 'noop', function() {
        return _f;
    });
    const _f = a => a;
}), c.register('7vk+e', function(d, e) {
    a(d.exports, 'circIn', function() {
        return _h;
    }), a(d.exports, 'circOut', function() {
        return _i;
    }), a(d.exports, 'circInOut', function() {
        return _j;
    });
    var f = c('7DoPW'),
        g = c('1aRHv');
    const _h = a => 1 - Math.sin(Math.acos(a)),
        _i = (0, g.reverseEasing)(_h),
        _j = (0, f.mirrorEasing)(_i);
}), c.register('FOfoq', function(d, e) {
    a(d.exports, 'backOut', function() {
        return _i;
    }), a(d.exports, 'backIn', function() {
        return _j;
    }), a(d.exports, 'backInOut', function() {
        return _k;
    });
    var f = c('96zCq'),
        g = c('7DoPW'),
        h = c('1aRHv');
    const _i = (0, f.cubicBezier)(0.33, 1.53, 0.69, 0.99),
        _j = (0, h.reverseEasing)(_i),
        _k = (0, g.mirrorEasing)(_j);
}), c.register('Xdje0', function(d, e) {
    a(d.exports, 'anticipate', function() {
        return _g;
    });
    var f = c('FOfoq');
    const _g = a => (a *= 2) < 1 ? 0.5 * (0, f.backIn)(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)));
}), c.register('YjI7/', function(d, e) {
    a(d.exports, 'spring', function() {
        return _k;
    });
    var f = c('HNsGd'),
        g = c('IPVV3');
    const h = [
            'duration',
            'bounce'
        ],
        i = [
            'stiffness',
            'damping',
            'mass'
        ];

    function j(k, l) {
        return l.some(l => void 0 !== k[l]);
    }

    function _k({
        keyframes: l,
        restDelta: m,
        restSpeed: n,
        ...o
    }) {
        let p = l[0],
            q = l[l.length - 1];
        const r = {
                done: !1,
                value: p
            },
            {
                stiffness: s,
                damping: t,
                mass: u,
                velocity: v,
                duration: w,
                isResolvedFromDuration: x
            } = function(y) {
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
        let y = _l,
            z = v ? -v / 1000 : 0;
        const A = t / (2 * Math.sqrt(s * u));

        function B() {
            const C = q - p,
                D = Math.sqrt(s / u) / 1000,
                E = Math.abs(C) < 5;
            if (n || (n = E ? 0.01 : 2), m || (m = E ? 0.005 : 0.5), A < 1) {
                const F = (0, f.calcAngularFreq)(D, A);
                y = n => {
                    const G = Math.exp(-A * D * n);
                    return q - G * ((z + A * D * C) / F * Math.sin(F * n) + C * Math.cos(F * n));
                };
            } else if (1 === A)
                y = m => q - Math.exp(-D * m) * (C + (z + D * C) * m);
            else {
                const F = D * Math.sqrt(A * A - 1);
                y = n => {
                    const G = Math.exp(-A * D * n),
                        H = Math.min(F * n, 300);
                    return q - G * ((z + A * D * C) * Math.sinh(H) + F * C * Math.cosh(H)) / F;
                };
            }
        }
        return B(), {
            next: l => {
                const C = y(l);
                if (x)
                    r.done = l >= w;
                else {
                    let D = z;
                    if (0 !== l)
                        if (A < 1) {
                            const E = Math.max(0, l - 5);
                            D = (0, g.velocityPerSecond)(C - y(E), l - E);
                        } else
                            D = 0;
                    const E = Math.abs(D) <= n,
                        F = Math.abs(q - C) <= m;
                    r.done = E && F;
                }
                return r.value = r.done ? q : C, r;
            },
            flipTarget: () => {
                z = -z, [C, D] = [
                    D,
                    C
                ], B();
            }
        };
    }
    _k.needsInterpolation = (a, d) => 'string' == typeof a || 'string' == typeof d;
    const _l = a => 0;
}), c.register('HNsGd', function(d, e) {
    a(d.exports, 'findSpring', function() {
        return _i;
    }), a(d.exports, 'calcAngularFreq', function() {
        return _j;
    });
    var f = c('4CEZy'),
        g = c('w+DYP');
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
        p = (0, g.clamp)(0.05, 1, p), j = (0, g.clamp)(0.01, 10, j / 1000), p < 1 ? (n = k => {
            const q = k * p,
                r = q * j,
                s = q - l,
                t = _j(k, p),
                u = Math.exp(-r);
            return h - s / t * u;
        }, o = k => {
            const q = k * p * j,
                r = q * l + l,
                s = Math.pow(p, 2) * Math.pow(k, 2) * j,
                t = Math.exp(-q),
                u = _j(Math.pow(k, 2), p);
            return (-n(k) + h > 0 ? -1 : 1) * ((r - s) * t) / u;
        }) : (n = k => Math.exp(-k * j) * ((k - l) * j + 1) - 0.001, o = k => Math.exp(-k * j) * (j * j * (l - k)));
        const q = function(r, s, t) {
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
                stiffness: r,
                damping: 2 * p * Math.sqrt(m * r),
                duration: j
            };
        }
    }

    function _j(k, l) {
        return k * Math.sqrt(1 - l * l);
    }
}), c.register('oJlU4', function(d, e) {
    function f({
        keyframes: g = [0],
        velocity: h = 0,
        power: i = 0.8,
        timeConstant: j = 350,
        restDelta: k = 0.5,
        modifyTarget: l
    }) {
        const m = g[0],
            n = {
                done: !1,
                value: m
            };
        let o = i * h;
        const p = m + o,
            q = void 0 === l ? p : l(p);
        return q !== p && (o = q - m), {
            next: g => {
                const r = -o * Math.exp(-g / j);
                return n.done = !(r > k || r < -k), n.value = n.done ? q : q + r, n;
            },
            flipTarget: () => {}
        };
    }
    a(d.exports, 'decay', function() {
        return f;
    });
}), c.register('yJffY', function(d, e) {
    a(d.exports, 'animateStyle', function() {
        return _g;
    });
    var f = c('rpy3u');

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
}), c.register('rpy3u', function(d, e) {
    function f(g) {
        return !g || Array.isArray(g) || 'string' == typeof g && _l[g];
    }
    a(d.exports, 'isWaapiSupportedEasing', function() {
        return f;
    }), a(d.exports, 'mapEasingToNativeEasing', function() {
        return _m;
    });
    const g = ([h, i, j, k]) => `cubic-bezier(${ h }, ${ i }, ${ j }, ${ k })`,
        _l = {
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

    function _m(n) {
        if (n)
            return Array.isArray(n) ? g(n) : _l[n];
    }
}), c.register('d+A+H', function(d, e) {
    a(d.exports, 'supports', function() {
        return _h;
    });
    const f = {
            waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate')
        },
        g = {},
        _h = {};
    for (const i in f)
        _h[i] = () => (void 0 === g[i] && (g[i] = f[i]()), g[i]);
}), c.register('GhMDk', function(d, e) {
    function f(g, {
        repeat: h,
        repeatType: i = 'loop'
    }) {
        return g[h && 'loop' !== i && h % 2 == 1 ? 0 : g.length - 1];
    }
    a(d.exports, 'getFinalKeyframe', function() {
        return f;
    });
}), c.register('Tp4oN', function(d, e) {
    a(d.exports, 'createInstantAnimation', function() {
        return _g;
    });
    var f = c('Kdxza');

    function _g({
        keyframes: h,
        elapsed: i,
        onUpdate: j,
        onComplete: k
    }) {
        const l = () => {
            j && j(h[h.length - 1]), k && k();
        };
        return i ? {
            stop: (0, f.delay)(l, -i)
        } : l();
    }
}), c.register('Kdxza', function(d, e) {
    a(d.exports, 'delay', function() {
        return _g;
    });
    var f = c('yVkz9');

    function _g(h, i) {
        const j = performance.now(),
            k = ({
                timestamp: l
            }) => {
                const m = l - j;
                m >= i && (f.cancelSync.read(k), h(m - i));
            };
        return f.sync.read(k, !0), () => f.cancelSync.read(k);
    }
}), c.register('ikohJ', function(d, e) {
    a(d.exports, 'inertia', function() {
        return _i;
    });
    var f = c('UUYPi'),
        g = c('IPVV3'),
        h = c('Gbwhq');

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
                onUpdate: k => {
                    var D;
                    null == u || u(k), null === (D = C.onUpdate) || void 0 === D || D.call(C, k);
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
            const E = A(D),
                F = E === l ? -1 : 1;
            let G, H;
            const I = D => {
                G = H, H = D, k = (0, g.velocityPerSecond)(D - G, h.frameData.delta), (1 === F && D > E || -1 === F && D < E) && C({
                    keyframes: [
                        D,
                        E
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
                onUpdate: z(D) ? I : void 0
            });
        }
        return {
            stop: () => null == y ? void 0 : y.stop()
        };
    }
}), c.register('mgu+x', function(d, e) {
    a(d.exports, 'getDefaultTransition', function() {
        return _k;
    });
    const f = () => ({
            type: 'spring',
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }),
        g = a => ({
            type: 'spring',
            stiffness: 550,
            damping: 0 === a ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        }),
        h = () => ({
            type: 'keyframes',
            ease: 'linear',
            duration: 0.3
        }),
        i = {
            type: 'keyframes',
            duration: 0.8
        },
        j = {
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
        },
        _k = (a, {
            keyframes: l
        }) => {
            if (l.length > 2)
                return i;
            return (j[a] || j.default)(l[1]);
        };
}), c.register('19M7M', function(d, e) {
    a(d.exports, 'isAnimatable', function() {
        return _g;
    });
    var f = c('cXn24');
    const _g = (a, d) => 'zIndex' !== a && (!('number' != typeof d && !Array.isArray(d)) || !('string' != typeof d || !f.complex.test(d) || d.startsWith('url(')));
}), c.register('NUlJJ', function(d, e) {
    a(d.exports, 'getKeyframes', function() {
        return _i;
    });
    var f = c('Fl6w0'),
        g = c('19M7M'),
        h = c('BHJjl');

    function _i(j, k, l, m) {
        const n = (0, g.isAnimatable)(k, l);
        let o = void 0 !== m.from ? m.from : j.get();
        return 'none' === o && n && 'string' == typeof l ? o = (0, f.getAnimatableNone)(k, l) : (0, h.isZero)(o) && 'string' == typeof l ? o = (0, h.getZeroUnit)(l) : !Array.isArray(l) && (0, h.isZero)(l) && 'string' == typeof o && (l = (0, h.getZeroUnit)(o)), Array.isArray(l) ? (null === l[0] && (l[0] = o), l) : [
            o,
            l
        ];
    }
}), c.register('BHJjl', function(d, e) {
    a(d.exports, 'isTransitionDefined', function() {
        return _g;
    }), a(d.exports, 'isZero', function() {
        return _n;
    }), a(d.exports, 'getZeroUnit', function() {
        return _o;
    }), a(d.exports, 'getValueTransition', function() {
        return _p;
    });
    var f = c('Fl6w0');

    function _g({
        when: h,
        delay: i,
        delayChildren: j,
        staggerChildren: k,
        staggerDirection: l,
        repeat: m,
        repeatType: _n,
        repeatDelay: _o,
        from: _p,
        elapsed: q,
        ...r
    }) {
        return !!Object.keys(r).length;
    }

    function h(i) {
        return 0 === i || 'string' == typeof i && 0 === parseFloat(i) && -1 === i.indexOf(' ');
    }

    function i(j) {
        return 'number' == typeof j ? 0 : (0, f.getAnimatableNone)('', j);
    }

    function j(k, l) {
        return k[l] || k.default || k;
    }
}), c.register('zJ74K', function(d, e) {
    a(d.exports, 'drag', function() {
        return _i;
    });
    var f = c('vpmE0'),
        g = c('2miwd'),
        h = c('RCxNM');
    const _i = {
        pan: (0, h.makeRenderlessComponent)(g.usePanGesture),
        drag: (0, h.makeRenderlessComponent)(f.useDrag)
    };
}), c.register('vpmE0', function(d, e) {
    a(d.exports, 'useDrag', function() {
        return _i;
    });
    var f = c('O0Kav'),
        g = c('+Fs3s'),
        h = c('lnHFO');

    function _i(j) {
        const {
            dragControls: k,
            visualElement: l
        } = j, m = (0, h.useConstant)(() => new(0, g.VisualElementDragControls)(l));
        (0, f.useEffect)(() => k && k.subscribe(m), [
            m,
            k
        ]), (0, f.useEffect)(() => m.addListeners(), [m]);
    }
}), c.register('+Fs3s', function(d, e) {
    a(d.exports, 'VisualElementDragControls', function() {
        return _x;
    });
    var f = c('4CEZy'),
        g = c('t6hSh'),
        h = c('oMd64'),
        i = c('48KIK'),
        j = c('g5DRr'),
        k = c('/mzVb'),
        l = c('PHlxx'),
        m = c('x055D'),
        n = c('rcGC9'),
        o = c('Bg7Bj'),
        p = c('yA6hE'),
        q = c('CcPI4'),
        r = c('1B077'),
        s = c('6edh7'),
        t = c('xfQpQ'),
        u = c('q1g+Z'),
        v = c('MDgvk');
    const w = new WeakMap();
    class _x {
        start(y, {
            snapToCursor: z = !1
        } = {}) {
            if (!1 === this.visualElement.isPresent)
                return;
            this.panSession = new(0, g.PanSession)(y, {
                onSessionStart: y => {
                    this.stopAnimation(), z && this.snapToCursor((0, p.extractEventInfo)(y, 'page').point);
                },
                onStart: (y, z) => {
                    var A;
                    const {
                        drag: B,
                        dragPropagation: C,
                        onDragStart: D
                    } = this.getProps();
                    (!B || C || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = (0, h.getGlobalLock)(B), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), (0, n.eachAxis)(y => {
                        var E, F;
                        let G = this.getAxisMotionValue(y).get() || 0;
                        if (u.percent.test(G)) {
                            const H = null === (F = null === (E = this.visualElement.projection) || void 0 === E ? void 0 : E.layout) || void 0 === F ? void 0 : F.layoutBox[y];
                            if (H) {
                                G = (0, s.calcLength)(H) * (parseFloat(G) / 100);
                            }
                        }
                        this.originPoint[y] = G;
                    }), null == D || D(y, z), null === (A = this.visualElement.animationState) || void 0 === A || A.setActive(l.AnimationType.Drag, !0));
                },
                onMove: (y, z) => {
                    const {
                        dragPropagation: A,
                        dragDirectionLock: B,
                        onDirectionLock: C,
                        onDrag: D
                    } = this.getProps();
                    if (!A && !this.openGlobalLock)
                        return;
                    const {
                        offset: E
                    } = z;
                    if (B && null === this.currentDirection)
                        return this.currentDirection = function(F, G = 10) {
                            let H = null;
                            Math.abs(F.y) > G ? H = 'y' : Math.abs(F.x) > G && (H = 'x');
                            return H;
                        }(E), void(null !== this.currentDirection && (null == C || C(this.currentDirection)));
                    this.updateAxis('x', z.point, E), this.updateAxis('y', z.point, E), this.visualElement.render(), null == D || D(y, z);
                },
                onSessionEnd: (y, z) => this.stop(y, z)
            }, {
                transformPagePoint: this.visualElement.getTransformPagePoint()
            });
        }
        stop(y, z) {
            const A = this.isDragging;
            if (this.cancel(), !A)
                return;
            const {
                velocity: B
            } = z;
            this.startAnimation(B);
            const {
                onDragEnd: C
            } = this.getProps();
            null == C || C(y, z);
        }
        cancel() {
            var y, z;
            this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (y = this.panSession) || void 0 === y || y.end(), this.panSession = void 0;
            const {
                dragPropagation: A
            } = this.getProps();
            !A && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (z = this.visualElement.animationState) || void 0 === z || z.setActive(l.AnimationType.Drag, !1);
        }
        updateAxis(y, z, A) {
            const {
                drag: B
            } = this.getProps();
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
            } = this.getProps(), {
                layout: A
            } = this.visualElement.projection || {}, B = this.constraints;
            y && (0, i.isRefObject)(y) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!y || !A) && (0, k.calcRelativeConstraints)(A.layoutBox, y), this.elastic = (0, k.resolveDragElastic)(z), B !== this.constraints && A && this.constraints && !this.hasMutatedConstraints && (0, n.eachAxis)(y => {
                this.getAxisMotionValue(y) && (this.constraints[y] = (0, k.rebaseAxisConstraints)(A.layoutBox[y], this.constraints[y]));
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
            const {
                projection: B
            } = this.visualElement;
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
            } = this.getProps(), F = this.constraints || {}, G = (0, n.eachAxis)(E => {
                if (!_y(E, z, this.currentDirection))
                    return;
                let H = (null == F ? void 0 : F[E]) || {};
                D && (H = {
                    min: 0,
                    max: 0
                });
                const I = B ? 200 : 1000000,
                    J = B ? 40 : 10000000,
                    K = {
                        type: 'inertia',
                        velocity: A ? y[E] : 0,
                        bounceStiffness: I,
                        bounceDamping: J,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...C,
                        ...H
                    };
                return this.startAxisValueAnimation(E, K);
            });
            return Promise.all(G).then(E);
        }
        startAxisValueAnimation(y, z) {
            const A = this.getAxisMotionValue(y);
            return A.start((0, v.createMotionValueAnimation)(y, A, 0, z));
        }
        stopAnimation() {
            (0, n.eachAxis)(a => this.getAxisMotionValue(a).stop());
        }
        getAxisMotionValue(y) {
            var z;
            const A = '_drag' + y.toUpperCase(),
                B = this.visualElement.getProps()[A];
            return B || this.visualElement.getValue(y, (null === (z = this.visualElement.getProps().initial) || void 0 === z ? void 0 : z[y]) || 0);
        }
        snapToCursor(y) {
            (0, n.eachAxis)(d => {
                const {
                    drag: z
                } = this.getProps();
                if (!_y(d, z, this.currentDirection))
                    return;
                const {
                    projection: A
                } = this.visualElement, B = this.getAxisMotionValue(d);
                if (A && A.layout) {
                    const {
                        min: C,
                        max: D
                    } = A.layout.layoutBox[d];
                    B.set(y[d] - (0, t.mix)(C, D, 0.5));
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
            } = this.getProps(), {
                projection: B
            } = this.visualElement;
            if (!(0, i.isRefObject)(A) || !B || !this.constraints)
                return;
            this.stopAnimation();
            const C = {
                x: 0,
                y: 0
            };
            (0, n.eachAxis)(y => {
                const D = this.getAxisMotionValue(y);
                if (D) {
                    const E = D.get();
                    C[y] = (0, k.calcOrigin)({
                        min: E,
                        max: E
                    }, this.constraints[y]);
                }
            });
            const {
                transformTemplate: D
            } = this.visualElement.getProps();
            this.visualElement.current.style.transform = D ? D({}, '') : 'none', null === (y = B.root) || void 0 === y || y.updateScroll(), B.updateLayout(), this.resolveConstraints(), (0, n.eachAxis)(y => {
                if (!_y(y, z, null))
                    return;
                const E = this.getAxisMotionValue(y),
                    {
                        min: F,
                        max: G
                    } = this.constraints[y];
                E.set((0, t.mix)(F, G, C[y]));
            });
        }
        addListeners() {
            var y;
            if (!this.visualElement.current)
                return;
            w.set(this.visualElement, this);
            const z = this.visualElement.current,
                A = (0, j.addPointerEvent)(z, 'pointerdown', y => {
                    const {
                        drag: B,
                        dragListener: C = !0
                    } = this.getProps();
                    B && C && this.start(y);
                }),
                B = () => {
                    const {
                        dragConstraints: C
                    } = this.getProps();
                    (0, i.isRefObject)(C) && (this.constraints = this.resolveRefConstraints());
                },
                {
                    projection: C
                } = this.visualElement,
                D = C.addEventListener('measure', B);
            C && !C.layout && (null === (y = C.root) || void 0 === y || y.updateScroll(), C.updateLayout()), B();
            const E = (0, r.addDomEvent)(window, 'resize', () => this.scalePositionWithinConstraints()),
                F = C.addEventListener('didUpdate', ({
                    delta: G,
                    hasLayoutChanged: H
                }) => {
                    this.isDragging && H && ((0, n.eachAxis)(H => {
                        const I = this.getAxisMotionValue(H);
                        I && (this.originPoint[H] += G[H].translate, I.set(I.get() + G[H].translate));
                    }), this.visualElement.render());
                });
            return () => {
                E(), A(), D(), null == F || F();
            };
        }
        getProps() {
            const y = this.visualElement.getProps(),
                {
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
}), c.register('t6hSh', function(d, e) {
    a(d.exports, 'PanSession', function() {
        return _n;
    });
    var f = c('yA6hE'),
        g = c('yVkz9'),
        h = c('MGOnd'),
        i = c('g5DRr'),
        j = c('8v5Ry'),
        k = c('wvTV3'),
        l = c('Gbwhq'),
        m = c('DQUG+');
    class _n {
        updateHandlers(o) {
            this.handlers = o;
        }
        end() {
            this.removeListeners && this.removeListeners(), g.cancelSync.update(this.updatePoint);
        }
        constructor(o, p, {
            transformPagePoint: q
        } = {}) {
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                    if (!this.lastMoveEvent || !this.lastMoveEventInfo)
                        return;
                    const r = _q(this.lastMoveEventInfo, this.history),
                        s = null !== this.startEvent,
                        t = (0, k.distance2D)(r.offset, {
                            x: 0,
                            y: 0
                        }) >= 3;
                    if (!s && !t)
                        return;
                    const {
                        point: u
                    } = r, {
                        timestamp: v
                    } = l.frameData;
                    this.history.push({
                        ...u,
                        timestamp: v
                    });
                    const {
                        onStart: w,
                        onMove: x
                    } = this.handlers;
                    s || (w && w(this.lastMoveEvent, r), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, r);
                }, this.handlePointerMove = (o, p) => {
                    this.lastMoveEvent = o, this.lastMoveEventInfo = _o(p, this.transformPagePoint), g.sync.update(this.updatePoint, !0);
                }, this.handlePointerUp = (o, p) => {
                    if (this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo)
                        return;
                    const {
                        onEnd: r,
                        onSessionEnd: s
                    } = this.handlers, t = _q('pointercancel' === o.type ? this.lastMoveEventInfo : _o(p, this.transformPagePoint), this.history);
                    this.startEvent && r && r(o, t), s && s(o, t);
                }, !(0, m.isPrimaryPointer)(o))
                return;
            this.handlers = p, this.transformPagePoint = q;
            const r = _o((0, f.extractEventInfo)(o), this.transformPagePoint),
                {
                    point: s
                } = r,
                {
                    timestamp: t
                } = l.frameData;
            this.history = [{
                ...s,
                timestamp: t
            }];
            const {
                onSessionStart: u
            } = p;
            u && u(o, _q(r, this.history)), this.removeListeners = (0, j.pipe)((0, i.addPointerEvent)(window, 'pointermove', this.handlePointerMove), (0, i.addPointerEvent)(window, 'pointerup', this.handlePointerUp), (0, i.addPointerEvent)(window, 'pointercancel', this.handlePointerUp));
        }
    }

    function _o(p, q) {
        return q ? {
            point: q(p.point)
        } : p;
    }

    function p(q, r) {
        return {
            x: q.x - r.x,
            y: q.y - r.y
        };
    }

    function _q({
        point: r
    }, s) {
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
        let w = u.length - 1,
            x = null;
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
}), c.register('wvTV3', function(d, e) {
    a(d.exports, 'distance2D', function() {
        return _g;
    });
    const f = (a, d) => Math.abs(a - d);

    function _g(h, i) {
        const j = f(h.x, i.x),
            k = f(h.y, i.y);
        return Math.sqrt(j ** 2 + k ** 2);
    }
}), c.register('/mzVb', function(d, e) {
    a(d.exports, 'applyConstraints', function() {
        return _j;
    }), a(d.exports, 'calcRelativeConstraints', function() {
        return _l;
    }), a(d.exports, 'calcViewportConstraints', function() {
        return _n;
    }), a(d.exports, 'calcOrigin', function() {
        return _o;
    }), a(d.exports, 'rebaseAxisConstraints', function() {
        return _p;
    }), a(d.exports, 'defaultElastic', function() {
        return _q;
    }), a(d.exports, 'resolveDragElastic', function() {
        return _r;
    });
    var f = c('HSgBL'),
        g = c('6edh7'),
        h = c('w+DYP'),
        i = c('xfQpQ');

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
        let p = o.min - n.min,
            q = o.max - n.max;
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
        const s = (0, g.calcLength)(p),
            t = (0, g.calcLength)(q);
        return t > s ? r = (0, f.progress)(q.min, q.max - s, p.min) : s > t && (r = (0, f.progress)(p.min, p.max - t, q.min)), (0, h.clamp)(0, 1, r);
    }

    function _p(q, r) {
        const s = {};
        return void 0 !== r.min && (s.min = r.min - q.min), void 0 !== r.max && (s.max = r.max - q.min), s;
    }
    const _q = 0.35;

    function _r(s = t) {
        return !1 === s ? s = 0 : !0 === s && (s = t), {
            x: _s(s, 'left', 'right'),
            y: _s(s, 'top', 'bottom')
        };
    }

    function _s(t, u, v) {
        return {
            min: _t(t, u),
            max: _t(t, v)
        };
    }

    function _t(u, v) {
        return 'number' == typeof u ? u : u[v] || 0;
    }
}), c.register('6edh7', function(d, e) {
    a(d.exports, 'calcLength', function() {
        return _g;
    }), a(d.exports, 'isNear', function() {
        return _h;
    }), a(d.exports, 'calcBoxDelta', function() {
        return _j;
    }), a(d.exports, 'calcRelativeBox', function() {
        return _l;
    }), a(d.exports, 'calcRelativePosition', function() {
        return _n;
    });
    var f = c('xfQpQ');

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
}), c.register('x055D', function(d, e) {
    a(d.exports, 'createDelta', function() {
        return _f;
    }), a(d.exports, 'createBox', function() {
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
        }),
        _g = () => ({
            x: {
                min: 0,
                max: 0
            },
            y: {
                min: 0,
                max: 0
            }
        });
}), c.register('rcGC9', function(d, e) {
    function f(g) {
        return [
            g('x'),
            g('y')
        ];
    }
    a(d.exports, 'eachAxis', function() {
        return f;
    });
}), c.register('Bg7Bj', function(d, e) {
    a(d.exports, 'measureViewportBox', function() {
        return _h;
    }), a(d.exports, 'measurePageBox', function() {
        return _i;
    });
    var f = c('CcPI4'),
        g = c('T/uCS');

    function _h(i, j) {
        return (0, f.convertBoundingBoxToBox)((0, f.transformBoxPoints)(i.getBoundingClientRect(), j));
    }

    function _i(j, k, l) {
        const m = _h(j, l),
            {
                scroll: n
            } = k;
        return n && ((0, g.translateAxis)(m.x, n.offset.x), (0, g.translateAxis)(m.y, n.offset.y)), m;
    }
}), c.register('CcPI4', function(d, e) {
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
            }),
            l = j({
                x: i.right,
                y: i.bottom
            });
        return {
            top: k.y,
            left: k.x,
            bottom: l.y,
            right: l.x
        };
    }
    a(d.exports, 'convertBoundingBoxToBox', function() {
        return f;
    }), a(d.exports, 'convertBoxToBoundingBox', function() {
        return g;
    }), a(d.exports, 'transformBoxPoints', function() {
        return h;
    });
}), c.register('T/uCS', function(d, e) {
    a(d.exports, 'scalePoint', function() {
        return _h;
    }), a(d.exports, 'applyBoxDelta', function() {
        return _k;
    }), a(d.exports, 'applyTreeDeltas', function() {
        return _l;
    }), a(d.exports, 'transformBox', function() {
        return _r;
    }), a(d.exports, 'translateAxis', function() {
        return _n;
    });
    var f = c('xfQpQ'),
        g = c('42aU0');

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
        if (!s)
            return;
        let t, u;
        n.x = n.y = 1;
        for (let v = 0; v < s; v++)
            t = o[v], u = t.projectionDelta, 'contents' !== (null === (r = null === (q = t.instance) || void 0 === q ? void 0 : q.style) || void 0 === r ? void 0 : r.display) && (p && t.options.layoutScroll && t.scroll && t !== t.root && _r(m, {
                x: -t.scroll.offset.x,
                y: -t.scroll.offset.y
            }), u && (n.x *= u.x.scale, n.y *= u.y.scale, _k(m, u)), p && (0, g.hasTransform)(t.latestValues) && _r(m, t.latestValues));
        n.x = v(n.x), n.y = v(n.y);
    }

    function m(n) {
        return Number.isInteger(n) || n > 1.0000000000001 || n < 0.999999999999 ? n : 1;
    }

    function _n(o, p) {
        o.min = o.min + p, o.max = o.max + p;
    }

    function o(p, q, [r, s, t]) {
        const u = void 0 !== q[t] ? q[t] : 0.5,
            v = (0, f.mix)(p.min, p.max, u);
        j(p, q[r], q[s], v, q.scale);
    }
    const p = [
            'x',
            'scaleX',
            'originX'
        ],
        q = [
            'y',
            'scaleY',
            'originY'
        ];

    function _r(s, t) {
        o(s.x, t, p), o(s.y, t, q);
    }
}), c.register('42aU0', function(d, e) {
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
    a(d.exports, 'hasScale', function() {
        return g;
    }), a(d.exports, 'hasTransform', function() {
        return h;
    }), a(d.exports, 'has2DTranslate', function() {
        return _i;
    });
}), c.register('2miwd', function(d, e) {
    a(d.exports, 'usePanGesture', function() {
        return _k;
    });
    var f = c('O0Kav'),
        g = c('gqmh2'),
        h = c('kGged'),
        i = c('g5DRr'),
        j = c('t6hSh');

    function _k({
        onPan: l,
        onPanStart: m,
        onPanEnd: n,
        onPanSessionStart: o,
        visualElement: p
    }) {
        const q = l || m || n || o,
            r = (0, f.useRef)(null),
            {
                transformPagePoint: s
            } = (0, f.useContext)(g.MotionConfigContext),
            t = {
                onSessionStart: o,
                onStart: m,
                onMove: l,
                onEnd: (l, m) => {
                    r.current = null, n && n(l, m);
                }
            };
        (0, f.useEffect)(() => {
            null !== r.current && r.current.updateHandlers(t);
        }), (0, i.usePointerEvent)(p, 'pointerdown', q && function(u) {
            r.current = new(0, j.PanSession)(u, t, {
                transformPagePoint: s
            });
        }), (0, h.useUnmountEffect)(() => r.current && r.current.end());
    }
}), c.register('3bted', function(d, e) {
    a(d.exports, 'createDomVisualElement', function() {
        return _i;
    });
    var f = c('wX5FW'),
        g = c('c9zWQ'),
        h = c('+rOAO');
    const _i = (a, d) => (0, h.isSVGComponent)(a) ? new(0, g.SVGVisualElement)(d, {
        enableHardwareAcceleration: !1
    }) : new(0, f.HTMLVisualElement)(d, {
        enableHardwareAcceleration: !0
    });
}), c.register('wX5FW', function(d, e) {
    a(d.exports, 'HTMLVisualElement', function() {
        return _o;
    });
    var f = c('GgYBA'),
        g = c('gOVDS'),
        h = c('f0Vrc'),
        i = c('X1d3v'),
        j = c('8rImb'),
        k = c('zbl4M'),
        l = c('Bg7Bj'),
        m = c('Pl2xJ'),
        n = c('5kiwO');
    class _o extends m.DOMVisualElement {
        readValueFromInstance(p, q) {
            if (h.transformProps.has(q)) {
                const r = (0, k.getDefaultValueType)(q);
                return r && r.default || 0;
            } {
                const r = (c = p, window.getComputedStyle(c)),
                    s = ((0, g.isCSSVariable)(q) ? r.getPropertyValue(q) : r[q]) || 0;
                return 'string' == typeof s ? s.trim() : s;
            }
            var r;
        }
        measureInstanceViewportBox(p, {
            transformPagePoint: q
        }) {
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
            const {
                children: p
            } = this.props;
            (0, n.isMotionValue)(p) && (this.childSubscription = p.on('change', p => {
                this.current && (this.current.textContent = `${ p }`);
            }));
        }
        renderInstance(p, q, r, s) {
            (0, j.renderHTML)(p, q, r, s);
        }
    }
}), c.register('Pl2xJ', function(d, e) {
    a(d.exports, 'DOMVisualElement', function() {
        return _i;
    });
    var f = c('cqoRc'),
        g = c('aKF6u'),
        h = c('bwYCE');
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
        }, {
            transformValues: m
        }, n) {
            let o = (0, f.getOrigin)(l, j || {}, this);
            if (m && (k && (k = m(k)), l && (l = m(l)), o && (o = m(o))), n) {
                (0, f.checkTargetForNewValues)(this, l, o);
                const p = (0, g.parseDomVariant)(this, l, o, k);
                k = p.transitionEnd, l = p.target;
            }
            return {
                transition: j,
                transitionEnd: k,
                ...l
            };
        }
    }
}), c.register('aKF6u', function(d, e) {
    a(d.exports, 'parseDomVariant', function() {
        return _h;
    });
    var f = c('tX6Yh'),
        g = c('Z4y7f');
    const _h = (a, d, c, e) => {
        const i = (0, f.resolveCSSVariables)(a, d, e);
        return d = i.target, e = i.transitionEnd, (0, g.unitConversion)(a, d, c, e);
    };
}), c.register('tX6Yh', function(d, e) {
    a(d.exports, 'cssVariableRegex', function() {
        return _h;
    }), a(d.exports, 'resolveCSSVariables', function() {
        return _n;
    });
    var f = c('4CEZy');

    function g(h) {
        return 'string' == typeof h && h.startsWith('var(--');
    }
    const _h = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

    function i(j, k, l = 1) {
        (0, f.invariant)(l <= 4, `Max CSS variable fallback depth detected in property "${ j }". This may indicate a circular fallback dependency.`);
        const [m, _n] = function(o) {
            const p = _h.exec(o);
            if (!p)
                return [, ];
            const [, q, r] = p;
            return [
                q,
                r
            ];
        }(j);
        if (!m)
            return;
        const o = window.getComputedStyle(k).getPropertyValue(m);
        return o ? o.trim() : g(_n) ? i(_n, k, l + 1) : _n;
    }

    function j(k, {
        ...l
    }, m) {
        const n = k.current;
        if (!(n instanceof Element))
            return {
                target: l,
                transitionEnd: m
            };
        m && (m = {
            ...m
        }), k.values.forEach(k => {
            const o = k.get();
            if (!g(o))
                return;
            const p = i(o, n);
            p && k.set(p);
        });
        for (const o in l) {
            const p = l[o];
            if (!g(p))
                continue;
            const q = i(p, n);
            q && (l[o] = q, m && void 0 === m[o] && (m[o] = p));
        }
        return {
            target: l,
            transitionEnd: m
        };
    }
}), c.register('Z4y7f', function(d, e) {
    a(d.exports, 'unitConversion', function() {
        return _M;
    });
    var f = c('+GT45'),
        g = c('4CEZy'),
        h = c('f0Vrc'),
        i = c('nkJHZ'),
        j = c('VgdbE'),
        k = c('Si/bj'),
        l = c('q1g+Z');
    const m = new Set([
            'width',
            'height',
            'top',
            'left',
            'right',
            'bottom',
            'x',
            'y'
        ]),
        n = a => m.has(a),
        o = a => a === k.number || a === l.px;
    var p, q;
    (q = p || (p = {})).width = 'width', q.height = 'height', q.left = 'left', q.right = 'right', q.top = 'top', q.bottom = 'bottom';
    const r = (a, d) => parseFloat(a.split(', ')[d]),
        s = (a, d) => (c, {
            transform: t
        }) => {
            if ('none' === t || !t)
                return 0;
            const u = t.match(/^matrix3d\((.+)\)$/);
            if (u)
                return r(u[1], d);
            {
                const v = t.match(/^matrix\((.+)\)$/);
                return v ? r(v[1], a) : 0;
            }
        },
        u = new Set([
            'x',
            'y',
            'z'
        ]),
        v = h.transformPropOrder.filter(a => !u.has(a));
    const w = {
            width: ({
                x: x
            }, {
                paddingLeft: y = '0',
                paddingRight: z = '0'
            }) => x.max - x.min - parseFloat(y) - parseFloat(z),
            height: ({
                y: A
            }, {
                paddingTop: B = '0',
                paddingBottom: C = '0'
            }) => A.max - A.min - parseFloat(B) - parseFloat(C),
            top: (A, {
                top: D
            }) => parseFloat(D),
            left: (A, {
                left: E
            }) => parseFloat(E),
            bottom: ({
                y: F
            }, {
                top: G
            }) => parseFloat(G) + (F.max - F.min),
            right: ({
                x: H
            }, {
                left: I
            }) => parseFloat(I) + (H.max - H.min),
            x: s(4, 13),
            y: s(5, 14)
        },
        J = (H, I, K = {}, L = {}) => {
            I = {
                ...I
            }, L = {
                ...L
            };
            const M = Object.keys(I).filter(n);
            let N = [],
                O = !1;
            const P = [];
            if (M.forEach(M => {
                    const Q = H.getValue(M);
                    if (!H.hasValue(M))
                        return;
                    let R = K[M],
                        S = (0, i.findDimensionValueType)(R);
                    const T = I[M];
                    let U;
                    if ((0, f.isKeyframesTarget)(T)) {
                        const V = T.length,
                            W = null === T[0] ? 1 : 0;
                        R = T[W], S = (0, i.findDimensionValueType)(R);
                        for (let X = W; X < V; X++)
                            U ? (0, g.invariant)((0, i.findDimensionValueType)(T[X]) === U, 'All keyframes must be of the same type') : (U = (0, i.findDimensionValueType)(T[X]), (0, g.invariant)(U === S || o(S) && o(U), 'Keyframes must be of the same dimension as the current value'));
                    } else
                        U = (0, i.findDimensionValueType)(T);
                    if (S !== U)
                        if (o(S) && o(U)) {
                            const V = Q.get();
                            'string' == typeof V && Q.set(parseFloat(V)), 'string' == typeof T ? I[M] = parseFloat(T) : Array.isArray(T) && U === l.px && (I[M] = T.map(parseFloat));
                        } else
                            (null == S ? void 0 : S.transform) && (null == U ? void 0 : U.transform) && (0 === R || 0 === T) ? 0 === R ? Q.set(U.transform(R)) : I[M] = S.transform(T) : (O || (N = function(V) {
                                const W = [];
                                return v.forEach(K => {
                                    const X = V.getValue(K);
                                    void 0 !== X && (W.push([
                                        K,
                                        X.get()
                                    ]), X.set(K.startsWith('scale') ? 1 : 0));
                                }), W.length && V.render(), W;
                            }(H), O = !0), P.push(M), L[M] = void 0 !== L[M] ? L[M] : I[M], Q.jump(T));
                }), P.length) {
                const Q = P.indexOf('height') >= 0 ? window.pageYOffset : null,
                    R = ((H, I, Q) => {
                        const S = I.measureViewportBox(),
                            T = I.current,
                            U = getComputedStyle(T),
                            {
                                display: V
                            } = U,
                            W = {};
                        'none' === V && I.setStaticValue('display', H.display || 'block'), Q.forEach(H => {
                            W[H] = w[H](S, U);
                        }), I.render();
                        const X = I.measureViewportBox();
                        return Q.forEach(Q => {
                            const Y = I.getValue(Q);
                            Y && Y.jump(W[Q]), H[Q] = w[Q](X, U);
                        }), H;
                    })(I, H, P);
                return N.length && N.forEach(([S, T]) => {
                    H.getValue(S).set(T);
                }), H.render(), j.isBrowser && null !== T && window.scrollTo({
                    top: T
                }), {
                    target: R,
                    transitionEnd: L
                };
            }
            return {
                target: I,
                transitionEnd: L
            };
        };

    function _M(N, O, P, Q) {
        return (N => Object.keys(N).some(n))(O) ? J(N, O, P, Q) : {
            target: O,
            transitionEnd: Q
        };
    }
}), c.register('bwYCE', function(d, e) {
    a(d.exports, 'VisualElement', function() {
        return _z;
    });
    var f = c('yVkz9');
    c('4CEZy');
    var g = c('O0Kav'),
        h = c('Dc1Y7'),
        i = c('x055D'),
        j = c('48KIK'),
        k = c('B9Q2S'),
        l = c('9c8B9'),
        m = c('kvgGm'),
        n = c('EErEc'),
        o = c('KRQzt'),
        p = c('5kiwO'),
        q = c('f0Vrc'),
        r = c('6PZ6z'),
        s = c('OQ0Ff'),
        t = c('vBQ6t'),
        u = c('elFvN'),
        v = c('SEZiK');
    const w = Object.keys(h.featureDefinitions),
        x = w.length,
        y = [
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
            this.current = A, this.projection && this.projection.mount(A), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (B = this.parent) || void 0 === B ? void 0 : B.addVariantChild(this)), this.values.forEach((A, B) => this.bindToMotionValue(B, A)), l.hasReducedMotionListener.current || (0, k.initPrefersReducedMotion)(), this.shouldReduceMotion = 'never' !== this.reducedMotionConfig && ('always' === this.reducedMotionConfig || l.prefersReducedMotion.current), this.parent && this.parent.children.add(this), this.setProps(this.props);
        }
        unmount() {
            var A, B, C;
            null === (A = this.projection) || void 0 === A || A.unmount(), f.cancelSync.update(this.notifyUpdate), f.cancelSync.render(this.render), this.valueSubscriptions.forEach(A => A()), null === (B = this.removeFromVariantTree) || void 0 === B || B.call(this), null === (C = this.parent) || void 0 === C || C.children.delete(this);
            for (const D in this.events)
                this.events[D].clear();
            this.current = null;
        }
        bindToMotionValue(A, B) {
            const C = q.transformProps.has(A),
                D = B.on('change', B => {
                    this.latestValues[A] = B, this.props.onUpdate && f.sync.update(this.notifyUpdate, !1, !0), C && this.projection && (this.projection.isTransformDirty = !0);
                }),
                E = B.on('renderRequest', this.scheduleRender);
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
                const J = w[I],
                    {
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
                this.projection = new F(E, this.latestValues, this.parent && this.parent.projection);
                const {
                    layoutId: J,
                    layout: K,
                    drag: L,
                    dragConstraints: M,
                    layoutScroll: N,
                    layoutRoot: O
                } = B;
                this.projection.setOptions({
                    layoutId: J,
                    layout: K,
                    alwaysMeasureLayout: Boolean(L) || M && (0, j.isRefObject)(M),
                    visualElement: this,
                    scheduleRender: () => this.scheduleRender(),
                    animationType: 'string' == typeof K ? K : 'both',
                    initialPromotionConfig: G,
                    layoutScroll: N,
                    layoutRoot: O
                });
            }
            return H;
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
            const D = {};
            for (let E = 0; E < _B; E++) {
                const F = _A[E],
                    G = this.props[F];
                ((0, t.isVariantLabel)(G) || !1 === G) && (D[F] = G);
            }
            return D;
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
            return void 0 === C && void 0 !== B && (C = (0, n.motionValue)(B, {
                owner: this
            }), this.addValue(A, C)), C;
        }
        readValue(A) {
            return void 0 === this.latestValues[A] && this.current ? this.readValueFromInstance(this.current, A, this.options) : this.latestValues[A];
        }
        setBaseTarget(A, B) {
            this.baseTarget[A] = B;
        }
        getBaseTarget(A) {
            var B;
            const {
                initial: C
            } = this.props, D = 'string' == typeof C || 'object' == typeof C ? null === (B = (0, v.resolveVariantFromProps)(this.props, C)) || void 0 === B ? void 0 : B[A] : void 0;
            if (C && void 0 !== D)
                return D;
            const E = this.getBaseTargetFromProps(this.props, A);
            return void 0 === E || (0, p.isMotionValue)(E) ? void 0 !== this.initialValues[A] && void 0 === D ? void 0 : this.baseTarget[A] : E;
        }
        on(A, B) {
            return this.events[A] || (this.events[A] = new(0, m.SubscriptionManager)()), this.events[A].add(B);
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
            this.latestValues = F, this.baseTarget = {
                ...F
            }, this.initialValues = B.initial ? {
                ...F
            } : {}, this.renderState = G, this.parent = A, this.props = B, this.depth = A ? A.depth + 1 : 0, this.reducedMotionConfig = C, this.options = E, this.isControllingVariants = (0, s.isControllingVariants)(B), this.isVariantNode = (0, s.isVariantNode)(B), this.isVariantNode && (this.variantChildren = new Set()), this.manuallyAnimateOnMount = Boolean(A && A.current);
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
        ],
        _B = _A.length;
}), c.register('B9Q2S', function(d, e) {
    a(d.exports, 'initPrefersReducedMotion', function() {
        return _h;
    });
    var f = c('VgdbE'),
        g = c('9c8B9');

    function _h() {
        if (g.hasReducedMotionListener.current = !0, f.isBrowser)
            if (window.matchMedia) {
                const i = window.matchMedia('(prefers-reduced-motion)'),
                    j = () => g.prefersReducedMotion.current = i.matches;
                i.addListener(j), j();
            } else
                g.prefersReducedMotion.current = !1;
    }
}), c.register('9c8B9', function(d, e) {
    a(d.exports, 'prefersReducedMotion', function() {
        return _f;
    }), a(d.exports, 'hasReducedMotionListener', function() {
        return _g;
    });
    const _f = {
            current: null
        },
        _g = {
            current: !1
        };
}), c.register('elFvN', function(d, e) {
    a(d.exports, 'updateMotionValuesFromProps', function() {
        return _i;
    });
    var f = c('KRQzt'),
        g = c('EErEc'),
        h = c('5kiwO');

    function _i(j, k, l) {
        const {
            willChange: m
        } = k;
        for (const n in k) {
            const o = k[n],
                p = l[n];
            if ((0, h.isMotionValue)(o))
                j.addValue(n, o), (0, f.isWillChangeMotionValue)(m) && m.add(n);
            else if ((0, h.isMotionValue)(p))
                j.addValue(n, (0, g.motionValue)(o, {
                    owner: j
                })), (0, f.isWillChangeMotionValue)(m) && m.remove(n);
            else if (p !== o)
                if (j.hasValue(n)) {
                    const q = j.getValue(n);
                    !q.hasAnimated && q.set(o);
                } else {
                    const q = j.getStaticValue(n);
                    j.addValue(n, (0, g.motionValue)(void 0 !== q ? q : o, {
                        owner: j
                    }));
                }
        }
        for (const o in l)
            void 0 === k[o] && j.removeValue(o);
        return k;
    }
}), c.register('c9zWQ', function(d, e) {
    a(d.exports, 'SVGVisualElement', function() {
        return _p;
    });
    var f = c('InToH'),
        g = c('Pl2xJ'),
        h = c('NRfno'),
        i = c('TOJ1Y'),
        j = c('rFCRc'),
        k = c('f0Vrc'),
        l = c('3pTL8'),
        m = c('zbl4M'),
        n = c('x055D'),
        o = c('460Vw');
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
}), c.register('KqpiS', function(d, e) {
    a(d.exports, 'layoutFeatures', function() {
        return _f;
    });
    const _f = {
        measureLayout: c('Tx+X3').MeasureLayout
    };
}), c.register('Tx+X3', function(d, e) {
    a(d.exports, 'MeasureLayout', function() {
        return _p;
    });
    var f = c('yVkz9'),
        g = c('O0Kav'),
        h = c('hxGRM'),
        i = c('P/tpU'),
        j = c('X3Zcn'),
        k = c('rPNs5'),
        l = c('khnV6'),
        m = c('gg7uw'),
        n = c('R1SzX');
    class o extends b(g).Component {
        componentDidMount() {
            const {
                visualElement: p,
                layoutGroup: q,
                switchLayoutGroup: r,
                layoutId: s
            } = this.props, {
                projection: t
            } = p;
            (0, n.addScaleCorrector)(_q), t && (q.group && q.group.add(t), r && r.register && s && r.register(t), t.root.didUpdate(), t.addEventListener('animationComplete', () => {
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
            const {
                projection: p
            } = this.props.visualElement;
            p && (p.root.didUpdate(), !p.currentAnimation && p.isLead() && this.safeToRemove());
        }
        componentWillUnmount() {
            const {
                visualElement: p,
                layoutGroup: q,
                switchLayoutGroup: r
            } = this.props, {
                projection: s
            } = p;
            s && (s.scheduleCheckAfterUnmount(), (null == q ? void 0 : q.group) && q.group.remove(s), (null == r ? void 0 : r.deregister) && r.deregister(s));
        }
        safeToRemove() {
            const {
                safeToRemove: p
            } = this.props;
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
    const _q = {
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
}), c.register('khnV6', function(d, e) {
    a(d.exports, 'correctBorderRadius', function() {
        return _h;
    });
    var f = c('q1g+Z');

    function g(h, i) {
        return i.max === i.min ? 0 : h / (i.max - i.min) * 100;
    }
    const _h = {
        correct: (a, d) => {
            if (!d.target)
                return a;
            if ('string' == typeof a) {
                if (!f.px.test(a))
                    return a;
                a = parseFloat(a);
            }
            return `${ g(a, d.target.x) }% ${ g(a, d.target.y) }%`;
        }
    };
}), c.register('gg7uw', function(d, e) {
    a(d.exports, 'correctBoxShadow', function() {
        return _j;
    });
    var f = c('tX6Yh'),
        g = c('xfQpQ'),
        h = c('cXn24');
    const i = '_$css',
        _j = {
            correct: (a, {
                treeScale: k,
                projectionDelta: l
            }) => {
                const m = a,
                    n = a.includes('var('),
                    o = [];
                n && (a = a.replace(f.cssVariableRegex, a => (o.push(a), i)));
                const p = h.complex.parse(a);
                if (p.length > 5)
                    return m;
                const q = h.complex.createTransformer(a),
                    r = 'number' != typeof p[0] ? 1 : 0,
                    s = l.x.scale * k.x,
                    t = l.y.scale * k.y;
                p[0 + r] /= s, p[1 + r] /= t;
                const u = (0, g.mix)(s, t, 0.5);
                'number' == typeof p[2 + r] && (p[2 + r] /= u), 'number' == typeof p[3 + r] && (p[3 + r] /= u);
                let v = q(p);
                if (n) {
                    let w = 0;
                    v = v.replace(i, () => {
                        const x = o[w];
                        return w++, x;
                    });
                }
                return v;
            }
        };
}), c.register('zCt7h', function(d, e) {
    a(d.exports, 'HTMLProjectionNode', function() {
        return _i;
    });
    var f = c('3/5hZ'),
        g = c('WOefq');
    const h = {
            current: void 0
        },
        _i = (0, f.createProjectionNode)({
            measureScroll: a => ({
                x: a.scrollLeft,
                y: a.scrollTop
            }),
            defaultParent: () => {
                if (!h.current) {
                    const j = new(0, g.DocumentProjectionNode)(0, {});
                    j.mount(window), j.setOptions({
                        layoutScroll: !0
                    }), h.current = j;
                }
                return h.current;
            },
            resetTransform: (a, d) => {
                a.style.transform = void 0 !== d ? d : 'none';
            },
            checkIsScrollRoot: a => Boolean('fixed' === window.getComputedStyle(a).position)
        });
}), c.register('3/5hZ', function(d, e) {
    a(d.exports, 'createProjectionNode', function() {
        return _C;
    });
    var f = c('yVkz9'),
        g = c('I7f6M'),
        h = c('kvgGm'),
        i = c('oLmcK'),
        j = c('JHhfg'),
        k = c('T/uCS'),
        l = c('6edh7'),
        m = c('pU0UH'),
        n = c('x055D'),
        o = c('BHJjl'),
        p = c('9cJ8c'),
        q = c('DJrA0'),
        r = c('R1SzX'),
        s = c('1iXZz'),
        t = c('rcGC9'),
        u = c('42aU0'),
        v = c('9Kyb0'),
        w = c('yhsVg'),
        x = c('rPNs5'),
        y = c('Kdxza'),
        z = c('xfQpQ');
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
                return this.eventHandlers.has(I) || this.eventHandlers.set(I, new(0, h.SubscriptionManager)()), this.eventHandlers.get(I).add(J);
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
                        this.root.updateBlockedByResize = !0, O && O(), O = (0, y.delay)(P, 250), x.globalProjectionState.hasAnimatedSinceResize && (x.globalProjectionState.hasAnimatedSinceResize = !1, this.nodes.forEach(_J));
                    });
                }
                L && this.root.registerSharedNode(L, this), !1 !== this.options.animate && N && (L || M) && this.addEventListener('didUpdate', ({
                    delta: O,
                    hasLayoutChanged: P,
                    hasRelativeTargetChanged: Q,
                    layout: R
                }) => {
                    var S, T, U, V, W;
                    if (this.isTreeAnimationBlocked())
                        return this.target = void 0, void(this.relativeTarget = void 0);
                    const X = null !== (T = null !== (S = this.options.transition) && void 0 !== S ? S : N.getDefaultTransition()) && void 0 !== T ? T : _R,
                        {
                            onLayoutAnimationStart: Y,
                            onLayoutAnimationComplete: Z
                        } = N.getProps(),
                        $ = !this.targetLayout || !(0, p.boxEquals)(this.targetLayout, R) || Q,
                        ab = !P && Q;
                    if (this.options.layoutRoot || (null === (U = this.resumeFrom) || void 0 === U ? void 0 : U.instance) || ab || P && ($ || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(O, ab);
                        const bb = {
                            ...(0, o.getValueTransition)(X, 'layout'),
                            onPlay: Y,
                            onComplete: Z
                        };
                        (N.shouldReduceMotion || this.options.layoutRoot) && (bb.delay = 0, bb.type = !1), this.startAnimation(bb);
                    } else
                        P || 0 !== this.animationProgress || _J(this), this.isLead() && (null === (W = (V = this.options).onExitComplete) || void 0 === W || W.call(V));
                    this.targetLayout = R;
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
                this.isUpdateBlocked() || (this.isUpdating = !0, null === (I = this.nodes) || void 0 === I || I.forEach(_M), this.animationId++);
            }
            getTransformTemplate() {
                var I;
                return null === (I = this.options.visualElement) || void 0 === I ? void 0 : I.getProps().transformTemplate;
            }
            willUpdate(I = !0) {
                var J, K, L;
                if (this.root.isUpdateBlocked())
                    return void(null === (K = (J = this.options).onExitComplete) || void 0 === K || K.call(J));
                if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
                    return;
                this.isLayoutDirty = !0;
                for (let M = 0; M < this.path.length; M++) {
                    const N = this.path[M];
                    N.shouldResetTransform = !0, N.updateScroll('snapshot'), N.options.layoutRoot && N.willUpdate(!1);
                }
                const {
                    layoutId: N,
                    layout: O
                } = this.options;
                (void 0 !== N || O) && (this.prevTransformTemplateValue = null === (L = this.getTransformTemplate()) || void 0 === L ? void 0 : L(this.latestValues, ''), this.updateSnapshot(), M && this.notifyListeners('willUpdate'));
            }
            didUpdate() {
                if (this.isUpdateBlocked())
                    return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(_H);
                this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(_S), this.potentialNodes.clear()), this.nodes.forEach(_I), this.nodes.forEach(_D), this.nodes.forEach(_E), this.clearAllSnapshots(), f.flushSync.update(), f.flushSync.preRender(), f.flushSync.render());
            }
            clearAllSnapshots() {
                this.nodes.forEach(_G), this.sharedNodes.forEach(_N);
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
                const J = this.isLayoutDirty || this.shouldResetTransform,
                    K = this.projectionDelta && !(0, p.isDeltaZero)(this.projectionDelta),
                    L = null === (I = this.getTransformTemplate()) || void 0 === I ? void 0 : I(this.latestValues, ''),
                    M = L !== this.prevTransformTemplateValue;
                J && (K || (0, u.hasTransform)(this.latestValues) || M) && (H(this.instance, L), this.shouldResetTransform = !1, this.scheduleRender());
            }
            measure(I = !0) {
                const J = this.measurePageBox();
                let K = this.removeElementScroll(J);
                var L;
                return I && (K = this.removeTransform(K)), _T((L = K).x), _T(L.y), {
                    animationId: this.root.animationId,
                    measuredBox: J,
                    layoutBox: K,
                    latestValues: {},
                    source: this.id
                };
            }
            measurePageBox() {
                const {
                    visualElement: I
                } = this.options;
                if (!I)
                    return (0, n.createBox)();
                const J = I.measureViewportBox(),
                    {
                        scroll: K
                    } = this.root;
                return K && ((0, k.translateAxis)(J.x, K.offset.x), (0, k.translateAxis)(J.y, K.offset.y)), J;
            }
            removeElementScroll(I) {
                const J = (0, n.createBox)();
                (0, j.copyBoxInto)(J, I);
                for (let K = 0; K < this.path.length; K++) {
                    const L = this.path[K],
                        {
                            scroll: M,
                            options: N
                        } = L;
                    if (L !== this.root && M && N.layoutScroll) {
                        if (M.isRoot) {
                            (0, j.copyBoxInto)(J, I);
                            const {
                                scroll: O
                            } = this.root;
                            O && ((0, k.translateAxis)(J.x, -O.offset.x), (0, k.translateAxis)(J.y, -O.offset.y));
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
                    const N = (0, n.createBox)(),
                        O = M.measurePageBox();
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
                    if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = (0, n.createBox)(), this.targetWithTransforms = (0, n.createBox)()), this.relativeTarget && this.relativeTargetOrigin && (null === (I = this.relativeParent) || void 0 === I ? void 0 : I.target) ? (0, l.calcRelativeBox)(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : (0, j.copyBoxInto)(this.target, this.layout.layoutBox), (0, k.applyBoxDelta)(this.target, this.targetDelta)) : (0, j.copyBoxInto)(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                        this.attemptToResolveRelativeTarget = !1;
                        const M = this.getClosestProjectingParent();
                        M && Boolean(M.resumingFrom) === Boolean(this.resumingFrom) && !M.options.layoutScroll && M.target ? (this.relativeParent = M, this.relativeTarget = (0, n.createBox)(), this.relativeTargetOrigin = (0, n.createBox)(), (0, l.calcRelativePosition)(this.relativeTargetOrigin, this.target, M.target), (0, j.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
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
                const L = this.getLead(),
                    M = Boolean(this.resumingFrom) || this !== L;
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
                const {
                    target: Q
                } = L;
                if (!Q)
                    return;
                this.projectionDelta || (this.projectionDelta = (0, n.createDelta)(), this.projectionDeltaWithTransform = (0, n.createDelta)());
                const R = this.treeScale.x,
                    S = this.treeScale.y,
                    T = this.projectionTransform;
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
                const M = this.snapshot,
                    N = (null == M ? void 0 : M.latestValues) || {},
                    O = {
                        ...this.latestValues
                    },
                    P = (0, n.createDelta)();
                this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !J;
                const Q = (0, n.createBox)(),
                    R = (null == M ? void 0 : M.source) !== (null === (K = this.layout) || void 0 === K ? void 0 : K.source),
                    S = ((null === (L = this.getStack()) || void 0 === L ? void 0 : L.members.length) || 0) <= 1,
                    T = Boolean(R && !S && !0 === this.options.crossfade && !this.path.some(_Q));
                this.animationProgress = 0, this.mixTargetDelta = J => {
                    var U;
                    const V = J / 1000;
                    var W, X, Y, Z;
                    _O(P.x, I.x, V), _O(P.y, I.y, V), this.setTargetDelta(P), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (U = this.relativeParent) || void 0 === U ? void 0 : U.layout) && ((0, l.calcRelativePosition)(Q, this.layout.layoutBox, this.relativeParent.layout.layoutBox), W = this.relativeTarget, X = this.relativeTargetOrigin, Y = Q, Z = V, _P(W.x, X.x, Y.x, Z), _P(W.y, X.y, Y.y, Z)), R && (this.animationValues = O, (0, i.mixValues)(O, N, this.latestValues, V, T, S)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = V;
                }, this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
            }
            startAnimation(I) {
                var J, K;
                this.notifyListeners('animationStart'), null === (J = this.currentAnimation) || void 0 === J || J.stop(), this.resumingFrom && (null === (K = this.resumingFrom.currentAnimation) || void 0 === K || K.stop()), this.pendingAnimation && (f.cancelSync.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = f.sync.update(() => {
                    x.globalProjectionState.hasAnimatedSinceResize = !0, this.currentAnimation = (0, g.animate)(0, 1000, {
                        ...I,
                        onUpdate: J => {
                            var L;
                            this.mixTargetDelta(J), null === (L = I.onUpdate) || void 0 === L || L.call(I, J);
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
                    if (this !== I && this.layout && L && _U(this.options.animationType, this.layout.layoutBox, L.layoutBox)) {
                        K = this.target || (0, n.createBox)();
                        const N = (0, l.calcLength)(this.layout.layoutBox.x);
                        K.x.min = I.target.x.min, K.x.max = K.x.min + N;
                        const O = (0, l.calcLength)(this.layout.layoutBox.y);
                        K.y.min = I.target.y.min, K.y.max = K.y.min + O;
                    }
                    (0, j.copyBoxInto)(J, K), (0, k.transformBox)(J, M), (0, l.calcBoxDelta)(this.projectionDeltaWithTransform, this.layoutCorrected, J, M);
                }
            }
            registerSharedNode(I, J) {
                var K, L, M;
                this.sharedNodes.has(I) || this.sharedNodes.set(I, new(0, q.NodeStack)());
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
                const {
                    layoutId: J
                } = this.options;
                return J && (null === (I = this.getStack()) || void 0 === I ? void 0 : I.lead) || this;
            }
            getPrevLead() {
                var I;
                const {
                    layoutId: J
                } = this.options;
                return J ? null === (I = this.getStack()) || void 0 === I ? void 0 : I.prevLead : void 0;
            }
            getStack() {
                const {
                    layoutId: I
                } = this.options;
                if (I)
                    return this.root.sharedNodes.get(I);
            }
            promote({
                needsReset: I,
                transition: J,
                preserveFollowOpacity: K
            } = {}) {
                const L = this.getStack();
                L && L.promote(this, K), I && (this.projectionDelta = void 0, this.needsReset = !0), J && this.setOptions({
                    transition: J
                });
            }
            relegate() {
                const I = this.getStack();
                return !!I && I.relegate(this);
            }
            resetRotation() {
                const {
                    visualElement: I
                } = this.options;
                if (!I)
                    return;
                let J = !1;
                const {
                    latestValues: K
                } = I;
                if ((K.rotate || K.rotateX || K.rotateY || K.rotateZ) && (J = !0), !J)
                    return;
                const L = {};
                for (let M = 0; M < A.length; M++) {
                    const N = 'rotate' + A[M];
                    K[N] && (L[N] = K[N], I.setStaticValue(N, 0));
                }
                null == I || I.render();
                for (const N in L)
                    I.setStaticValue(N, L[N]);
                I.scheduleRender();
            }
            getProjectionStyles(I = {}) {
                var J, K;
                const L = {};
                if (!this.instance || this.isSVG)
                    return L;
                if (!this.isVisible)
                    return {
                        visibility: 'hidden'
                    };
                L.visibility = '';
                const M = this.getTransformTemplate();
                if (this.needsReset)
                    return this.needsReset = !1, L.opacity = '', L.pointerEvents = (0, w.resolveMotionValue)(I.pointerEvents) || '', L.transform = M ? M(this.latestValues, '') : 'none', L;
                const N = this.getLead();
                if (!this.projectionDelta || !this.layout || !N.target) {
                    const O = {};
                    return this.options.layoutId && (O.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, O.pointerEvents = (0, w.resolveMotionValue)(I.pointerEvents) || ''), this.hasProjected && !(0, u.hasTransform)(this.latestValues) && (O.transform = M ? M({}, '') : 'none', this.hasProjected = !1), O;
                }
                const O = N.animationValues || N.latestValues;
                this.applyTransformsToTarget(), L.transform = (0, s.buildProjectionTransform)(this.projectionDeltaWithTransform, this.treeScale, O), M && (L.transform = M(O, L.transform));
                const {
                    x: P,
                    y: Q
                } = this.projectionDelta;
                L.transformOrigin = `${ 100 * P.origin }% ${ 100 * Q.origin }% 0`, N.animationValues ? L.opacity = N === this ? null !== (K = null !== (J = O.opacity) && void 0 !== J ? J : this.latestValues.opacity) && void 0 !== K ? K : 1 : this.preserveOpacity ? this.latestValues.opacity : O.opacityExit : L.opacity = N === this ? void 0 !== O.opacity ? O.opacity : '' : void 0 !== O.opacityExit ? O.opacityExit : 0;
                for (const R in r.scaleCorrectors) {
                    if (void 0 === O[R])
                        continue;
                    const {
                        correct: S,
                        applyTo: T
                    } = r.scaleCorrectors[R], U = 'none' === L.transform ? O[R] : S(O[R], N);
                    if (T) {
                        const V = T.length;
                        for (let W = 0; W < V; W++)
                            L[T[W]] = U;
                    } else
                        L[R] = U;
                }
                return this.options.layoutId && (L.pointerEvents = N === this ? (0, w.resolveMotionValue)(R.pointerEvents) || '' : 'none'), L;
            }
            clearSnapshot() {
                this.resumeFrom = this.snapshot = void 0;
            }
            resetTree() {
                this.root.nodes.forEach(D => {
                    var I;
                    return null === (I = D.currentAnimation) || void 0 === I ? void 0 : I.stop();
                }), this.root.nodes.forEach(_H), this.root.sharedNodes.clear();
            }
            constructor(I, J = {}, K = null == E ? void 0 : E()) {
                this.id = B++, this.animationId = 0, this.children = new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                    x: 1,
                    y: 1
                }, this.eventHandlers = new Map(), this.potentialNodes = new Map(), this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
                }, this.updateProjection = () => {
                    this.nodes.forEach(_F), this.nodes.forEach(_K), this.nodes.forEach(_L);
                }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map(), this.elementId = I, this.latestValues = J, this.root = K ? K.root || K : this, this.path = K ? [
                    ...K.path,
                    K
                ] : [], this.parent = K, this.depth = K ? K.depth + 1 : 0, I && this.root.registerPotentialNode(I, this);
                for (let L = 0; L < this.path.length; L++)
                    this.path[L].shouldResetTransform = !0;
                this.root === this && (this.nodes = new(0, v.FlatTree)());
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
            } = F.layout, {
                animationType: M
            } = F.options, N = J.source !== F.layout.source;
            'size' === M ? (0, t.eachAxis)(F => {
                const O = N ? J.measuredBox[F] : J.layoutBox[F],
                    P = (0, l.calcLength)(O);
                O.min = K[F].min, O.max = O.min + P;
            }) : _U(M, J.layoutBox, K) && (0, t.eachAxis)(F => {
                const O = N ? J.measuredBox[F] : J.layoutBox[F],
                    P = (0, l.calcLength)(K[F]);
                O.max = O.min + P;
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
                delta: P,
                layoutDelta: O,
                hasLayoutChanged: Q,
                hasRelativeTargetChanged: R
            });
        } else
            F.isLead() && (null === (I = (H = F.options).onExitComplete) || void 0 === I || I.call(H));
        F.options.transition = void 0;
    }

    function _F(G) {
        G.isProjectionDirty || (G.isProjectionDirty = Boolean(G.parent && G.parent.isProjectionDirty)), G.isTransformDirty || (G.isTransformDirty = Boolean(G.parent && G.parent.isTransformDirty));
    }

    function _G(H) {
        H.clearSnapshot();
    }

    function _H(I) {
        I.clearMeasurements();
    }

    function _I(J) {
        const {
            visualElement: K
        } = J.options;
        (null == K ? void 0 : K.getProps().onBeforeLayoutMeasure) && K.notify('BeforeLayoutMeasure'), J.resetTransform();
    }

    function _J(K) {
        K.finishAnimation(), K.targetDelta = K.relativeTarget = K.target = void 0;
    }

    function _K(L) {
        L.resolveTargetDelta();
    }

    function _L(M) {
        M.calcProjection();
    }

    function _M(N) {
        N.resetRotation();
    }

    function _N(O) {
        O.removeLeadSnapshot();
    }

    function _O(P, Q, R) {
        P.translate = (0, z.mix)(Q.translate, 0, R), P.scale = (0, z.mix)(Q.scale, 1, R), P.origin = Q.origin, P.originPoint = Q.originPoint;
    }

    function _P(Q, R, S, T) {
        Q.min = (0, z.mix)(R.min, S.min, T), Q.max = (0, z.mix)(R.max, S.max, T);
    }

    function _Q(R) {
        return R.animationValues && void 0 !== R.animationValues.opacityExit;
    }
    const _R = {
        duration: 0.45,
        ease: [
            0.4,
            0,
            0.1,
            1
        ]
    };

    function _S(T, U) {
        let V = T.root;
        for (let W = T.path.length - 1; W >= 0; W--)
            if (Boolean(T.path[W].instance)) {
                V = T.path[W];
                break;
            }
        const X = (V && V !== T.root ? V.instance : document).querySelector(`[data-projection-id="${ W }"]`);
        X && T.mount(X, !0);
    }

    function _T(U) {
        U.min = Math.round(U.min), U.max = Math.round(U.max);
    }

    function _U(V, W, X) {
        return 'position' === V || 'preserve-aspect' === V && !(0, l.isNear)((0, p.aspectRatio)(W), (0, p.aspectRatio)(X), 0.2);
    }
}), c.register('I7f6M', function(d, e) {
    a(d.exports, 'animate', function() {
        return _i;
    });
    var f = c('MDgvk'),
        g = c('EErEc'),
        h = c('5kiwO');

    function _i(j, k, l = {}) {
        const m = (0, h.isMotionValue)(j) ? j : (0, g.motionValue)(j);
        return m.start((0, f.createMotionValueAnimation)('', m, k, l)), {
            stop: () => m.stop(),
            isAnimating: () => m.isAnimating()
        };
    }
}), c.register('oLmcK', function(d, e) {
    a(d.exports, 'mixValues', function() {
        return _o;
    });
    var f = c('7vk+e'),
        g = c('HSgBL'),
        h = c('xfQpQ'),
        i = c('pssvf'),
        j = c('q1g+Z');
    const k = [
            'TopLeft',
            'TopRight',
            'BottomLeft',
            'BottomRight'
        ],
        l = k.length,
        m = a => 'string' == typeof a ? parseFloat(a) : a,
        n = a => 'number' == typeof a || j.px.test(a);

    function _o(p, q, r, s, t, u) {
        t ? (p.opacity = (0, h.mix)(0, void 0 !== r.opacity ? r.opacity : 1, _q(s)), p.opacityExit = (0, h.mix)(void 0 !== q.opacity ? q.opacity : 1, 0, _r(s))) : u && (p.opacity = (0, h.mix)(void 0 !== q.opacity ? q.opacity : 1, void 0 !== r.opacity ? r.opacity : 1, s));
        for (let v = 0; v < l; v++) {
            const w = `border${ k[v] }Radius`;
            let x = _p(q, w),
                y = _p(r, w);
            if (void 0 === x && void 0 === y)
                continue;
            x || (x = 0), y || (y = 0);
            0 === x || 0 === y || n(x) === n(y) ? (p[w] = Math.max((0, h.mix)(m(x), m(y), s), 0), (j.percent.test(y) || j.percent.test(x)) && (p[w] += '%')) : p[w] = y;
        }
        (q.rotate || r.rotate) && (p.rotate = (0, h.mix)(q.rotate || 0, r.rotate || 0, s));
    }

    function _p(q, r) {
        return void 0 !== q[r] ? q[r] : q.borderRadius;
    }
    const _q = _s(0, 0.5, f.circOut),
        _r = _s(0.5, 0.95, i.noop);

    function _s(t, u, v) {
        return e => e < t ? 0 : e > u ? 1 : v((0, g.progress)(t, u, e));
    }
}), c.register('JHhfg', function(d, e) {
    function f(g, h) {
        g.min = h.min, g.max = h.max;
    }

    function g(h, i) {
        f(h.x, i.x), f(h.y, i.y);
    }
    a(d.exports, 'copyBoxInto', function() {
        return g;
    });
}), c.register('pU0UH', function(d, e) {
    a(d.exports, 'removeBoxTransforms', function() {
        return _m;
    });
    var f = c('xfQpQ'),
        g = c('q1g+Z'),
        h = c('T/uCS');

    function i(j, k, l, m, n) {
        return j -= k, j = (0, h.scalePoint)(j, 1 / l, m), void 0 !== n && (j = (0, h.scalePoint)(j, 1 / n, m)), j;
    }

    function j(k, l, [m, n, o], p, q) {
        ! function(r, s = 0, t = 1, u = 0.5, v, w = x, y = z) {
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
        ],
        l = [
            'y',
            'scaleY',
            'originY'
        ];

    function _m(n, o, p, q) {
        j(n.x, o, k, null == p ? void 0 : p.x, null == q ? void 0 : q.x), j(n.y, o, l, null == p ? void 0 : p.y, null == q ? void 0 : q.y);
    }
}), c.register('9cJ8c', function(d, e) {
    a(d.exports, 'isDeltaZero', function() {
        return _h;
    }), a(d.exports, 'boxEquals', function() {
        return _i;
    }), a(d.exports, 'aspectRatio', function() {
        return _j;
    });
    var f = c('6edh7');

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
}), c.register('DJrA0', function(d, e) {
    a(d.exports, 'NodeStack', function() {
        return _g;
    });
    var f = c('ONYWP');
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
            const i = this.members.findIndex(i => h === i);
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
                const {
                    crossfade: l
                } = h.options;
                !1 === l && k.hide();
            }
        }
        exitAnimationComplete() {
            this.members.forEach(a => {
                var h, i, j, k, l;
                null === (i = (h = a.options).onExitComplete) || void 0 === i || i.call(h), null === (l = null === (j = a.resumingFrom) || void 0 === j ? void 0 : (k = j.options).onExitComplete) || void 0 === l || l.call(k);
            });
        }
        scheduleRender() {
            this.members.forEach(a => {
                a.instance && a.scheduleRender(!1);
            });
        }
        removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
        constructor() {
            this.members = [];
        }
    }
}), c.register('1iXZz', function(d, e) {
    function f(g, h, i) {
        let j = '';
        const k = g.x.translate / h.x,
            l = g.y.translate / h.y;
        if ((k || l) && (j = `translate3d(${ k }px, ${ l }px, 0) `), 1 === h.x && 1 === h.y || (j += `scale(${ 1 / h.x }, ${ 1 / h.y }) `), i) {
            const {
                rotate: m,
                rotateX: n,
                rotateY: o
            } = i;
            m && (j += `rotate(${ m }deg) `), n && (j += `rotateX(${ n }deg) `), o && (j += `rotateY(${ o }deg) `);
        }
        const m = g.x.scale * h.x,
            n = g.y.scale * h.y;
        return 1 === m && 1 === n || (j += `scale(${ m }, ${ n })`), j || 'none';
    }
    a(d.exports, 'buildProjectionTransform', function() {
        return f;
    });
}), c.register('9Kyb0', function(d, e) {
    a(d.exports, 'FlatTree', function() {
        return _h;
    });
    var f = c('ONYWP'),
        g = c('QojFC');
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
}), c.register('QojFC', function(d, e) {
    a(d.exports, 'compareByDepth', function() {
        return _f;
    });
    const _f = (a, d) => a.depth - d.depth;
}), c.register('WOefq', function(d, e) {
    a(d.exports, 'DocumentProjectionNode', function() {
        return _h;
    });
    var f = c('3/5hZ'),
        g = c('1B077');
    const _h = (0, f.createProjectionNode)({
        attachResizeListener: (a, d) => (0, g.addDomEvent)(a, 'resize', d),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    });
});