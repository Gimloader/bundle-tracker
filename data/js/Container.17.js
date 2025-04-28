function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('TwXYL', function(b, c) {
    _t(b.exports, 'motion', function() {
        return _m;
    });
    a('BGgmK');
    var d = a('F5IFH'),
        e = a('EcO0q'),
        f = a('58vMu'),
        g = a('+z5E/'),
        h = a('0wjX7'),
        i = a('otibr'),
        j = a('c9U3V'),
        k = a('0Pplj');
    const l = {
            ...g.animations,
            ...f.gestureAnimations,
            ...h.drag,
            ...j.layoutFeatures
        },
        _m = (0, d.createMotionProxy)((_t, b) => (0, e.createDomMotionConfig)(_t, b, l, i.createDomVisualElement, k.HTMLProjectionNode));
}), a.register('BGgmK', function(b, c) {
    _t(b.exports, 'createMotionComponent', function() {
        return _s;
    });
    var d = a('LEQ5w'),
        e = (d = a('LEQ5w'), a('v1rLj')),
        f = a('0vHho'),
        g = a('xPRM7'),
        h = a('nOQjK'),
        i = a('OJaC2'),
        j = a('pcj8H'),
        k = a('JCaj/'),
        l = a('qHL48'),
        m = a('agf6t'),
        n = a('OelFa'),
        o = a('tgQWr'),
        p = a('AZ3oc'),
        q = a('LKtGq'),
        r = a('oMVNx');

    function _s({
        preloadedFeatures: _t,
        createVisualElement: u,
        projectionNodeConstructor: v,
        useRender: w,
        useVisualState: x,
        Component: y
    }) {
        _t && (0, k.loadFeatures)(_t);
        const z = (0, d.forwardRef)(function(A, B) {
            const C = {
                    ...(0, d.useContext)(e.MotionConfigContext),
                    ...A,
                    layoutId: _s(A)
                },
                {
                    isStatic: D
                } = C;
            let E = null;
            const F = (0, i.useCreateMotionContext)(A),
                G = D ? void 0 : (0, m.useProjectionId)(),
                H = x(A, D);
            if (!D && l.isBrowser) {
                F.visualElement = (0, g.useVisualElement)(y, H, C, u);
                const I = (0, d.useContext)(p.LazyContext).strict,
                    J = (0, d.useContext)(q.SwitchLayoutGroupContext);
                F.visualElement && (E = F.visualElement.loadFeatures(C, I, _t, G, v || j.featureDefinitions.projectionNodeConstructor, J));
            }
            return d.createElement(o.VisualElementHandler, {
                visualElement: F.visualElement,
                props: C
            }, E, d.createElement(f.MotionContext.Provider, {
                value: F
            }, w(y, A, G, (0, h.useMotionRef)(H, F.visualElement, B), H, D, F.visualElement)));
        });
        return z[r.motionComponentSymbol] = y, z;
    }

    function _s({
        layoutId: t
    }) {
        const u = (0, d.useContext)(n.LayoutGroupContext).id;
        return u && void 0 !== t ? u + '-' + t : t;
    }
}), a.register('v1rLj', function(b, c) {
    _k(b.exports, 'MotionConfigContext', function() {
        return _d;
    });
    const _d = (0, a('LEQ5w').createContext)({
        transformPagePoint: _k => _k,
        isStatic: !1,
        reducedMotion: 'never'
    });
}), a.register('0vHho', function(b, c) {
    _k(b.exports, 'MotionContext', function() {
        return _e;
    }), _k(b.exports, 'useVisualElementContext', function() {
        return _f;
    });
    var d = a('LEQ5w');
    const _e = (0, d.createContext)({});

    function _f() {
        return (0, d.useContext)(_e).visualElement;
    }
}), a.register('xPRM7', function(b, c) {
    _k(b.exports, 'useVisualElement', function() {
        return _j;
    });
    var d = a('LEQ5w'),
        e = a('iTk+S'),
        f = a('0vHho'),
        g = a('wiv5g'),
        h = a('AZ3oc'),
        i = a('v1rLj');

    function _j(_k, l, m, n) {
        const o = (0, f.useVisualElementContext)(),
            p = (0, d.useContext)(h.LazyContext),
            q = (0, d.useContext)(e.PresenceContext),
            r = (0, d.useContext)(i.MotionConfigContext).reducedMotion,
            s = (0, d.useRef)();
        n = n || p.renderer, !s.current && n && (s.current = n(_k, {
            visualState: l,
            parent: o,
            props: m,
            presenceId: q ? q.id : void 0,
            blockInitialAnimation: !!q && !1 === q.initial,
            reducedMotionConfig: r
        }));
        const t = s.current;
        (0, g.useIsomorphicLayoutEffect)(() => {
            t && t.render();
        });
        return (window.HandoffAppearAnimations ? g.useIsomorphicLayoutEffect : d.useEffect)(() => {
            t && t.animationState && t.animationState.animateChanges();
        }), t;
    }
}), a.register('iTk+S', function(b, c) {
    _g(b.exports, 'PresenceContext', function() {
        return _d;
    });
    const _d = (0, a('LEQ5w').createContext)(null);
}), a.register('wiv5g', function(b, c) {
    _g(b.exports, 'useIsomorphicLayoutEffect', function() {
        return _e;
    });
    var d = a('LEQ5w');
    const _e = a('qHL48').isBrowser ? d.useLayoutEffect : d.useEffect;
}), a.register('qHL48', function(b, c) {
    _g(b.exports, 'isBrowser', function() {
        return _d;
    });
    const _d = 'undefined' != typeof document;
}), a.register('AZ3oc', function(b, c) {
    _g(b.exports, 'LazyContext', function() {
        return _d;
    });
    const _d = (0, a('LEQ5w').createContext)({
        strict: !1
    });
}), a.register('nOQjK', function(b, c) {
    _g(b.exports, 'useMotionRef', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('HO4qX');

    function _f(_g, h, i) {
        return (0, d.useCallback)(c => {
            c && _g.mount && _g.mount(c), h && (c ? h.mount(c) : h.unmount()), i && ('function' == typeof i ? i(c) : (0, e.isRefObject)(i) && (i.current = c));
        }, [h]);
    }
}), a.register('HO4qX', function(b, c) {
    function d(e) {
        return 'object' == typeof e && Object.prototype.hasOwnProperty.call(e, 'current');
    }
    _h(b.exports, 'isRefObject', function() {
        return _c;
    });
}), a.register('OJaC2', function(b, _c) {
    _h(b.exports, 'useCreateMotionContext', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('0vHho'),
        f = a('ks3R/');

    function _g(_h) {
        const {
            initial: i,
            animate: j
        } = (0, f.getCurrentTreeVariants)(_h, (0, d.useContext)(e.MotionContext));
        return (0, d.useMemo)(() => ({
            initial: i,
            animate: j
        }), [
            _g(i),
            _g(j)
        ]);
    }

    function _g(h) {
        return Array.isArray(h) ? h.join(' ') : h;
    }
}), a.register('ks3R/', function(b, c) {
    _g(b.exports, 'getCurrentTreeVariants', function() {
        return _f;
    });
    var d = a('ab59j'),
        e = a('m41Qf');

    function _f(_g, h) {
        if ((0, e.isControllingVariants)(_g)) {
            const {
                initial: i,
                animate: j
            } = _g;
            return {
                initial: !1 === i || (0, d.isVariantLabel)(i) ? i : void 0,
                animate: (0, d.isVariantLabel)(j) ? j : void 0
            };
        }
        return !1 !== _g.inherit ? h : {};
    }
}), a.register('ab59j', function(b, c) {
    function d(e) {
        return 'string' == typeof e || Array.isArray(e);
    }
    _h(b.exports, 'isVariantLabel', function() {
        return _c;
    });
}), a.register('m41Qf', function(b, _c) {
    _h(b.exports, 'isControllingVariants', function() {
        return _g;
    }), _h(b.exports, 'isVariantNode', function() {
        return _g;
    });
    var d = a('TnYPu'),
        e = a('ab59j');
    const f = [
        'initial',
        'animate',
        'exit',
        'whileHover',
        'whileDrag',
        'whileTap',
        'whileFocus',
        'whileInView'
    ];

    function _g(_h) {
        return (0, d.isAnimationControls)(_h.animate) || f.some(b => (0, e.isVariantLabel)(_h[b]));
    }

    function _g(h) {
        return Boolean(_g(h) || h.variants);
    }
}), a.register('TnYPu', function(b, c) {
    function d(e) {
        return 'object' == typeof e && 'function' == typeof e.start;
    }
    _f(b.exports, 'isAnimationControls', function() {
        return _d;
    });
}), a.register('pcj8H', function(b, c) {
    _f(b.exports, 'featureDefinitions', function() {
        return _e;
    });
    const _d = _f => ({
            isEnabled: b => _f.some(_f => !!b[_f])
        }),
        _e = {
            measureLayout: _d([
                'layout',
                'layoutId',
                'drag'
            ]),
            animation: _d([
                'animate',
                'exit',
                'variants',
                'whileHover',
                'whileTap',
                'whileFocus',
                'whileDrag',
                'whileInView'
            ]),
            exit: _d(['exit']),
            drag: _d([
                'drag',
                'dragControls'
            ]),
            focus: _d(['whileFocus']),
            hover: _d([
                'whileHover',
                'onHoverStart',
                'onHoverEnd'
            ]),
            tap: _d([
                'whileTap',
                'onTap',
                'onTapStart',
                'onTapCancel'
            ]),
            pan: _d([
                'onPan',
                'onPanStart',
                'onPanSessionStart',
                'onPanEnd'
            ]),
            inView: _d([
                'whileInView',
                'onViewportEnter',
                'onViewportLeave'
            ])
        };
}), a.register('JCaj/', function(b, c) {
    _f(b.exports, 'loadFeatures', function() {
        return _e;
    });
    var d = a('pcj8H');

    function _e(_f) {
        for (const g in _f)
            'projectionNodeConstructor' === g ? d.featureDefinitions.projectionNodeConstructor = _f[g] : d.featureDefinitions[g].Component = _f[g];
    }
}), a.register('agf6t', function(b, c) {
    _f(b.exports, 'useProjectionId', function() {
        return _g;
    });
    var d = a('mk5EJ'),
        e = a('sZKWT');
    let f = 1;

    function _g() {
        return (0, d.useConstant)(() => {
            if (e.globalProjectionState.hasEverUpdated)
                return f++;
        });
    }
}), a.register('mk5EJ', function(b, c) {
    _f(b.exports, 'useConstant', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f) {
        const g = (0, d.useRef)(null);
        return null === g.current && (g.current = _f()), g.current;
    }
}), a.register('sZKWT', function(b, c) {
    _f(b.exports, 'globalProjectionState', function() {
        return _d;
    });
    const _d = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };
}), a.register('OelFa', function(b, c) {
    _f(b.exports, 'LayoutGroupContext', function() {
        return _d;
    });
    const _d = (0, a('LEQ5w').createContext)({});
}), a.register('tgQWr', function(b, c) {
    _f(b.exports, 'VisualElementHandler', function() {
        return _e;
    });
    var d = a('LEQ5w');
    class _e extends _g(d).Component {
        getSnapshotBeforeUpdate() {
            const {
                visualElement: _f,
                props: _g
            } = this.props;
            return _f && _f.setProps(_g), null;
        }
        componentDidUpdate() {}
        render() {
            return this.props.children;
        }
    }
}), a.register('LKtGq', function(b, c) {
    _f(b.exports, 'SwitchLayoutGroupContext', function() {
        return _d;
    });
    const _d = (0, a('LEQ5w').createContext)({});
}), a.register('oMVNx', function(b, c) {
    _f(b.exports, 'motionComponentSymbol', function() {
        return _d;
    });
    const _d = Symbol.for('motionComponentSymbol');
}), a.register('F5IFH', function(b, c) {
    _f(b.exports, 'createMotionProxy', function() {
        return _e;
    });
    var d = a('BGgmK');

    function _e(_f) {
        function g(h, i = {}) {
            return (0, d.createMotionComponent)(_f(h, i));
        }
        if ('undefined' == typeof Proxy)
            return b;
        const g = new Map();
        return new Proxy(b, {
            get: (_f, c) => (g.has(c) || g.set(c, b(c)), g.get(c))
        });
    }
}), a.register('EcO0q', function(b, c) {
    _i(b.exports, 'createDomMotionConfig', function() {
        return _h;
    });
    var d = a('4jXtH'),
        e = a('vekcl'),
        f = a('g/6W9'),
        g = a('dX3/C');

    function _h(_i, {
        forwardMotionProps: j = !1
    }, k, l, m) {
        return {
            ...(0, d.isSVGComponent)(_i) ? f.svgMotionConfig : g.htmlMotionConfig,
            preloadedFeatures: k,
            useRender: (0, e.createUseRender)(j),
            createVisualElement: l,
            projectionNodeConstructor: m,
            Component: _i
        };
    }
}), a.register('4jXtH', function(b, c) {
    _f(b.exports, 'isSVGComponent', function() {
        return _e;
    });
    var d = a('r9eZm');

    function _e(_f) {
        return 'string' == typeof _f && !_f.includes('-') && !!(d.lowercaseSVGElements.indexOf(_f) > -1 || /[A-Z]/.test(_f));
    }
}), a.register('r9eZm', function(b, c) {
    _k(b.exports, 'lowercaseSVGElements', function() {
        return _d;
    });
    const _d = [
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
}), a.register('vekcl', function(b, c) {
    _k(b.exports, 'createUseRender', function() {
        return _j;
    });
    var d = a('LEQ5w'),
        e = a('4oHzy'),
        f = a('0kncF'),
        g = a('4jXtH'),
        h = a('XFNvl'),
        i = a('C2TrH');

    function _j(_k = !1) {
        return (b, a, c, _j, {
            latestValues: l
        }, _q) => {
            const m = ((0, g.isSVGComponent)(b) ? h.useSVGProps : e.useHTMLProps)(a, l, _q, b),
                n = {
                    ...(0, f.filterProps)(a, 'string' == typeof b, _k),
                    ...m,
                    ref: _j
                },
                {
                    children: o
                } = a,
                p = (0, d.useMemo)(() => (0, i.isMotionValue)(o) ? o.get() : o, [o]);
            return c && (n['data-projection-id'] = c), (0, d.createElement)(b, {
                ...n,
                children: p
            });
        };
    }
}), a.register('4oHzy', function(b, c) {
    _j(b.exports, 'copyRawValuesOnly', function() {
        return _i;
    }), _j(b.exports, 'useHTMLProps', function() {
        return _i;
    });
    var d = a('LEQ5w'),
        e = a('y7Nih'),
        f = a('C2TrH'),
        g = a('WFS9m'),
        h = a('qzHtV');

    function _i(_j, k, l) {
        for (const m in k)
            (0, f.isMotionValue)(k[m]) || (0, e.isForcedMotionValue)(m, l) || (_j[m] = k[m]);
    }

    function i(j, k, l) {
        const m = {};
        return _i(m, j.style || {}, j), Object.assign(m, function({
            transformTemplate: n
        }, o, p) {
            return (0, d.useMemo)(() => {
                const q = (0, h.createHtmlRenderState)();
                return (0, g.buildHTMLStyles)(q, o, {
                    enableHardwareAcceleration: !p
                }, n), Object.assign({}, q.vars, q.style);
            }, [o]);
        }(j, k, l)), j.transformValues ? j.transformValues(m) : m;
    }

    function _i(j, k, l) {
        const m = {},
            n = _o(j, k, l);
        return j.drag && !1 !== j.dragListener && (m.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = 'none', n.touchAction = !0 === j.drag ? 'none' : 'pan-' + ('x' === j.drag ? 'y' : 'x')), m.style = n, m;
    }
}), a.register('y7Nih', function(b, c) {
    _g(b.exports, 'isForcedMotionValue', function() {
        return _f;
    });
    var d = a('WAwCf'),
        e = a('7PZBl');

    function _f(_g, {
        layout: h,
        layoutId: i
    }) {
        return e.transformProps.has(_g) || _g.startsWith('origin') || (h || void 0 !== i) && (!!d.scaleCorrectors[_g] || 'opacity' === _g);
    }
}), a.register('WAwCf', function(b, c) {
    _f(b.exports, 'scaleCorrectors', function() {
        return _d;
    }), _f(b.exports, 'addScaleCorrector', function() {
        return _e;
    });
    const _d = {};

    function _e(_f) {
        Object.assign(_d, _f);
    }
}), a.register('7PZBl', function(b, c) {
    _j(b.exports, 'transformPropOrder', function() {
        return _d;
    }), _j(b.exports, 'transformProps', function() {
        return _e;
    });
    const _d = [
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
        _e = new Set(_d);
}), a.register('C2TrH', function(b, c) {
    _j(b.exports, 'isMotionValue', function() {
        return _d;
    });
    const _d = _j => !!(null == _j ? void 0 : _j.getVelocity);
}), a.register('WFS9m', function(b, c) {
    _j(b.exports, 'buildHTMLStyles', function() {
        return _i;
    });
    var d = a('HIqO+'),
        e = a('mCG0O'),
        f = a('7PZBl'),
        g = a('CW6ri'),
        h = a('tsyk/');

    function _i(_j, k, l, m) {
        const {
            style: n,
            vars: _o,
            transform: p,
            transformKeys: _q,
            transformOrigin: r
        } = _j;
        _q.length = 0;
        let s = !1,
            t = !1,
            u = !0;
        for (const v in k) {
            const w = k[v];
            if ((0, e.isCSSVariable)(v)) {
                _o[v] = w;
                continue;
            }
            const x = h.numberValueTypes[v],
                y = (0, g.getValueAsType)(w, x);
            if (f.transformProps.has(v)) {
                if (s = !0, p[v] = y, _q.push(v), !u)
                    continue;
                w !== (x.default || 0) && (u = !1);
            } else
                v.startsWith('origin') ? (t = !0, r[v] = y) : n[v] = y;
        }
        if (k.transform || (s || m ? n.transform = (0, d.buildTransform)(v, l, u, m) : n.transform && (n.transform = 'none')), t) {
            const {
                originX: w = '50%',
                originY: x = '50%',
                originZ: y = 0
            } = r;
            n.transformOrigin = `${ w } ${ x } ${ y }`;
        }
    }
}), a.register('HIqO+', function(b, c) {
    _h(b.exports, 'buildTransform', function() {
        return _g;
    });
    var d = a('7PZBl');
    const e = {
            x: 'translateX',
            y: 'translateY',
            z: 'translateZ',
            transformPerspective: 'perspective'
        },
        f = (_h, b) => d.transformPropOrder.indexOf(_h) - d.transformPropOrder.indexOf(b);

    function _g({
        transform: _h,
        transformKeys: i
    }, {
        enableHardwareAcceleration: j = !0,
        allowTransformNone: k = !0
    }, l, m) {
        let n = '';
        i.sort(f);
        for (const o of i)
            n += `${ e[o] || o }(${ _h[o] }) `;
        return o && !_h.z && (n += 'translateZ(0)'), n = n.trim(), m ? n = m(_h, l ? '' : n) : k && l && (n = 'none'), n;
    }
}), a.register('mCG0O', function(b, c) {
    function d(e) {
        return e.startsWith('--');
    }
    _i(b.exports, 'isCSSVariable', function() {
        return _d;
    });
}), a.register('CW6ri', function(b, c) {
    _i(b.exports, 'getValueAsType', function() {
        return _d;
    });
    const _d = (_i, b) => b && 'number' == typeof _i ? b.transform(_i) : _i;
}), a.register('tsyk/', function(b, c) {
    _i(b.exports, 'numberValueTypes', function() {
        return _g;
    });
    var d = a('kMJJk'),
        e = a('QJEVi'),
        f = a('9FhGj');
    const _g = {
        borderWidth: e.px,
        borderTopWidth: e.px,
        borderRightWidth: e.px,
        borderBottomWidth: e.px,
        borderLeftWidth: e.px,
        borderRadius: e.px,
        radius: e.px,
        borderTopLeftRadius: e.px,
        borderTopRightRadius: e.px,
        borderBottomRightRadius: e.px,
        borderBottomLeftRadius: e.px,
        width: e.px,
        maxWidth: e.px,
        height: e.px,
        maxHeight: e.px,
        size: e.px,
        top: e.px,
        right: e.px,
        bottom: e.px,
        left: e.px,
        padding: e.px,
        paddingTop: e.px,
        paddingRight: e.px,
        paddingBottom: e.px,
        paddingLeft: e.px,
        margin: e.px,
        marginTop: e.px,
        marginRight: e.px,
        marginBottom: e.px,
        marginLeft: e.px,
        rotate: e.degrees,
        rotateX: e.degrees,
        rotateY: e.degrees,
        rotateZ: e.degrees,
        scale: d.scale,
        scaleX: d.scale,
        scaleY: d.scale,
        scaleZ: d.scale,
        skew: e.degrees,
        skewX: e.degrees,
        skewY: e.degrees,
        distance: e.px,
        translateX: e.px,
        translateY: e.px,
        translateZ: e.px,
        x: e.px,
        y: e.px,
        z: e.px,
        perspective: e.px,
        transformPerspective: e.px,
        opacity: d.alpha,
        originX: e.progressPercentage,
        originY: e.progressPercentage,
        originZ: e.px,
        zIndex: f.int,
        fillOpacity: d.alpha,
        strokeOpacity: d.alpha,
        numOctaves: f.int
    };
}), a.register('kMJJk', function(b, c) {
    _i(b.exports, 'number', function() {
        return _e;
    }), _i(b.exports, 'alpha', function() {
        return _f;
    }), _i(b.exports, 'scale', function() {
        return _g;
    });
    var d = a('0fBPo');
    const _e = {
            test: _i => 'number' == typeof _i,
            parse: parseFloat,
            transform: _i => _i
        },
        _f = {
            ..._e,
            transform: _i => (0, d.clamp)(0, 1, _i)
        },
        _g = {
            ..._e,
            default: 1
        };
}), a.register('0fBPo', function(b, c) {
    _i(b.exports, 'clamp', function() {
        return _d;
    });
    const _d = (_i, b, c) => Math.min(Math.max(c, _i), b);
}), a.register('QJEVi', function(b, c) {
    _i(b.exports, 'degrees', function() {
        return _f;
    }), _i(b.exports, 'percent', function() {
        return _g;
    }), _i(b.exports, 'px', function() {
        return _h;
    }), _i(b.exports, 'vh', function() {
        return _i;
    }), _i(b.exports, 'vw', function() {
        return _j;
    }), _i(b.exports, 'progressPercentage', function() {
        return _k;
    });
    var d = a('ospG0');
    const e = _i => ({
            test: b => (0, d.isString)(b) && b.endsWith(_i) && 1 === b.split(' ').length,
            parse: parseFloat,
            transform: b => `${ b }${ _i }`
        }),
        _f = e('deg'),
        _g = e('%'),
        _h = e('px'),
        _i = e('vh'),
        _j = e('vw'),
        _k = {
            ..._g,
            parse: _i => _g.parse(_i) / 100,
            transform: _i => _g.transform(100 * _i)
        };
}), a.register('ospG0', function(b, c) {
    _i(b.exports, 'sanitize', function() {
        return _d;
    }), _i(b.exports, 'floatRegex', function() {
        return _e;
    }), _i(b.exports, 'colorRegex', function() {
        return _f;
    }), _i(b.exports, 'singleColorRegex', function() {
        return _g;
    }), _i(b.exports, 'isString', function() {
        return _h;
    });
    const _d = _i => Math.round(100000 * _i) / 100000,
        _e = /(-)?([\d]*\.?[\d])+/g,
        _f = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        _g = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

    function _h(_i) {
        return 'string' == typeof _i;
    }
}), a.register('9FhGj', function(b, c) {
    _h(b.exports, 'int', function() {
        return _d;
    });
    const _d = {
        ...a('kMJJk').number,
        transform: Math.round
    };
}), a.register('qzHtV', function(b, c) {
    _h(b.exports, 'createHtmlRenderState', function() {
        return _d;
    });
    const _d = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
    });
}), a.register('0kncF', function(b, c) {
    _h(b.exports, 'filterProps', function() {
        return _g;
    });
    var d = a('Jbkt/');
    let e = _h => !(0, d.isValidMotionProp)(_h);
    try {
        (_f = a('H9p1I').default) && (e = _h => _h.startsWith('on') ? !(0, d.isValidMotionProp)(_h) : _f(_h));
    } catch (_h) {}
    var _f;

    function _g(_h, i, j) {
        const k = {};
        for (const l in _h)
            'values' === l && 'object' == typeof _h.values || (e(l) || !0 === j && (0, d.isValidMotionProp)(l) || !i && !(0, d.isValidMotionProp)(l) || _h.draggable && l.startsWith('onDrag')) && (k[l] = _h[l]);
        return k;
    }
}), a.register('Jbkt/', function(b, c) {
    _f(b.exports, 'isValidMotionProp', function() {
        return _e;
    });
    const d = new Set([
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

    function _e(_f) {
        return d.has(_f);
    }
}), a.register('H9p1I', function(b, c) {
    _g(b.exports, 'default', function() {
        return _f;
    });
    var d = a('V9c9g'),
        e = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        _f = (0, d.default)(function(_g) {
            return e.test(_g) || 111 === _g.charCodeAt(0) && 110 === _g.charCodeAt(1) && _g.charCodeAt(2) < 91;
        });
}), a.register('V9c9g', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = function(_e) {
        var f = {};
        return function(g) {
            return void 0 === f[g] && (f[g] = _e(g)), f[g];
        };
    };
}), a.register('XFNvl', function(b, c) {
    _j(b.exports, 'useSVGProps', function() {
        return _i;
    });
    var d = a('LEQ5w'),
        e = a('4oHzy'),
        f = a('rDnRx'),
        g = a('E5htp'),
        h = a('o8/0J');

    function _i(_j, k, l, m) {
        const n = (0, d.useMemo)(() => {
            const o = (0, g.createSvgRenderState)();
            return (0, f.buildSVGAttrs)(o, k, {
                enableHardwareAcceleration: !1
            }, (0, h.isSVGTag)(m), _j.transformTemplate), {
                ...o.attrs,
                style: {
                    ...o.style
                }
            };
        }, [k]);
        if (_j.style) {
            const o = {};
            (0, e.copyRawValuesOnly)(o, _j.style, _j), n.style = {
                ...o,
                ...n.style
            };
        }
        return n;
    }
}), a.register('rDnRx', function(b, c) {
    _h(b.exports, 'buildSVGAttrs', function() {
        return _g;
    });
    var d = a('WFS9m'),
        e = a('yCkT0'),
        f = a('dmAqi');

    function _g(_h, {
        attrX: i,
        attrY: j,
        originX: k,
        originY: l,
        pathLength: m,
        pathSpacing: n = 1,
        pathOffset: o = 0,
        ...p
    }, q, r, s) {
        if ((0, d.buildHTMLStyles)(_h, p, q, s), r)
            return void(_h.style.viewBox && (_h.attrs.viewBox = _h.style.viewBox));
        _h.attrs = _h.style, _h.style = {};
        const {
            attrs: t,
            style: u,
            dimensions: v
        } = _h;
        t.transform && (v && (u.transform = t.transform), delete t.transform), v && (void 0 !== k || void 0 !== l || u.transform) && (u.transformOrigin = (0, e.calcSVGTransformOrigin)(v, void 0 !== k ? k : 0.5, void 0 !== l ? l : 0.5)), void 0 !== i && (t.x = i), void 0 !== j && (t.y = j), void 0 !== m && (0, f.buildSVGPath)(t, m, n, o, !1);
    }
}), a.register('yCkT0', function(b, c) {
    _f(b.exports, 'calcSVGTransformOrigin', function() {
        return _e;
    });
    var d = a('QJEVi');

    function e(_f, g, h) {
        return 'string' == typeof _f ? _f : d.px.transform(g + h * _f);
    }

    function _e(f, g, h) {
        return `${ _e(g, f.x, f.width) } ${ _e(h, f.y, f.height) }`;
    }
}), a.register('dmAqi', function(b, c) {
    _h(b.exports, 'buildSVGPath', function() {
        return _g;
    });
    var d = a('QJEVi');
    const _e = {
            offset: 'stroke-dashoffset',
            array: 'stroke-dasharray'
        },
        f = {
            offset: 'strokeDashoffset',
            array: 'strokeDasharray'
        };

    function _g(_h, i, j = 1, k = 0, l = !0) {
        _h.pathLength = 1;
        const m = l ? _e : f;
        _h[m.offset] = d.px.transform(-k);
        const n = d.px.transform(i),
            o = d.px.transform(j);
        _h[m.array] = `${ n } ${ o }`;
    }
}), a.register('E5htp', function(b, c) {
    _h(b.exports, 'createSvgRenderState', function() {
        return _e;
    });
    var d = a('qzHtV');
    const _e = () => ({
        ...(0, d.createHtmlRenderState)(),
        attrs: {}
    });
}), a.register('o8/0J', function(b, c) {
    _h(b.exports, 'isSVGTag', function() {
        return _d;
    });
    const _d = _h => 'string' == typeof _h && 'svg' === _h.toLowerCase();
}), a.register('g/6W9', function(b, c) {
    _h(b.exports, 'svgMotionConfig', function() {
        return _j;
    });
    var d = a('c80RH'),
        e = a('pOQ3J'),
        f = a('T7Ae6'),
        g = a('E5htp'),
        h = a('rDnRx'),
        i = a('o8/0J');
    const _j = {
        useVisualState: (0, f.makeUseVisualState)({
            scrapeMotionValuesFromProps: e.scrapeMotionValuesFromProps,
            createRenderState: g.createSvgRenderState,
            onMount: (_h, b, {
                renderState: k,
                latestValues: l
            }) => {
                try {
                    k.dimensions = 'function' == typeof b.getBBox ? b.getBBox() : b.getBoundingClientRect();
                } catch (_h) {
                    k.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                }
                (0, h.buildSVGAttrs)(k, l, {
                    enableHardwareAcceleration: !1
                }, (0, i.isSVGTag)(b.tagName), _h.transformTemplate), (0, d.renderSVG)(b, k);
            }
        })
    };
}), a.register('c80RH', function(b, c) {
    _h(b.exports, 'renderSVG', function() {
        return _g;
    });
    var d = a('JcCk6'),
        e = a('ZjOMe'),
        f = a('/X+QF');

    function _g(_h, i, j, k) {
        (0, e.renderHTML)(_h, i, void 0, k);
        for (const l in i.attrs)
            _h.setAttribute(f.camelCaseAttributes.has(l) ? l : (0, d.camelToDash)(l), i.attrs[l]);
    }
}), a.register('JcCk6', function(b, c) {
    _e(b.exports, 'camelToDash', function() {
        return _d;
    });
    const _d = _e => _e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}), a.register('ZjOMe', function(b, c) {
    function d(_e, {
        style: f,
        vars: g
    }, h, i) {
        Object.assign(_e.style, f, i && i.getProjectionStyles(h));
        for (const j in g)
            _e.style.setProperty(j, g[j]);
    }
    _g(b.exports, 'renderHTML', function() {
        return _d;
    });
}), a.register('/X+QF', function(b, c) {
    _g(b.exports, 'camelCaseAttributes', function() {
        return _d;
    });
    const _d = new Set([
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
}), a.register('pOQ3J', function(b, c) {
    _g(b.exports, 'scrapeMotionValuesFromProps', function() {
        return _f;
    });
    var d = a('C2TrH'),
        e = a('N20hs');

    function _f(_g, h) {
        const i = (0, e.scrapeMotionValuesFromProps)(_g, h);
        for (const j in _g)
            if ((0, d.isMotionValue)(_g[j]) || (0, d.isMotionValue)(h[j])) {
                i['x' === j || 'y' === j ? 'attr' + j.toUpperCase() : j] = _g[j];
            }
        return i;
    }
}), a.register('N20hs', function(b, c) {
    _g(b.exports, 'scrapeMotionValuesFromProps', function() {
        return _f;
    });
    var d = a('y7Nih'),
        e = a('C2TrH');

    function _f(_g, h) {
        const {
            style: i
        } = _g, j = {};
        for (const k in i)
            ((0, e.isMotionValue)(i[k]) || h.style && (0, e.isMotionValue)(h.style[k]) || (0, d.isForcedMotionValue)(k, _g)) && (j[k] = i[k]);
        return j;
    }
}), a.register('T7Ae6', function(b, c) {
    _p(b.exports, 'makeUseVisualState', function() {
        return _l;
    });
    var d = a('LEQ5w'),
        e = a('TnYPu'),
        f = a('iTk+S'),
        g = a('5lhmK'),
        h = a('mk5EJ'),
        i = a('DYacx'),
        j = a('0vHho'),
        k = a('m41Qf');
    const _l = _p => (b, a) => {
        const m = (0, d.useContext)(j.MotionContext),
            n = (0, d.useContext)(f.PresenceContext),
            o = () => function({
                scrapeMotionValuesFromProps: _p,
                createRenderState: q,
                onMount: r
            }, s, t, u) {
                const v = {
                    latestValues: _m(s, t, u, _p),
                    renderState: q()
                };
                return r && (v.mount = _p => r(s, _p, v)), v;
            }(_n, b, m, n);
        return a ? o() : (0, h.useConstant)(o);
    };

    function _m(_n, o, p, q) {
        const r = {},
            s = q(_n, {});
        for (const t in s)
            r[t] = (0, i.resolveMotionValue)(s[t]);
        let {
            initial: u,
            animate: v
        } = t;
        const w = (0, k.isControllingVariants)(t),
            x = (0, k.isVariantNode)(t);
        o && x && !w && !1 !== t.inherit && (void 0 === u && (u = o.initial), void 0 === v && (v = o.animate));
        let y = !!p && !1 === p.initial;
        y = y || !1 === u;
        const z = y ? v : u;
        if (z && 'boolean' != typeof z && !(0, e.isAnimationControls)(z)) {
            (Array.isArray(z) ? z : [z]).forEach(o => {
                const A = (0, g.resolveVariantFromProps)(t, o);
                if (!A)
                    return;
                const {
                    transitionEnd: B,
                    transition: C,
                    ...D
                } = A;
                for (const E in D) {
                    let F = D[E];
                    if (Array.isArray(F)) {
                        F = F[y ? F.length - 1 : 0];
                    }
                    null !== F && (r[E] = F);
                }
                for (const F in B)
                    r[F] = B[F];
            });
        }
        return r;
    }
}), a.register('5lhmK', function(b, c) {
    function d(e, f, g, h = {}, i = {}) {
        return 'function' == typeof f && (f = f(void 0 !== g ? g : e.custom, h, i)), 'string' == typeof f && (f = e.variants && e.variants[f]), 'function' == typeof f && (f = f(void 0 !== g ? g : e.custom, h, i)), f;
    }
    _g(b.exports, 'resolveVariantFromProps', function() {
        return _c;
    });
}), a.register('DYacx', function(b, _c) {
    _g(b.exports, 'resolveMotionValue', function() {
        return _f;
    });
    var d = a('nAn7C'),
        e = a('C2TrH');

    function _f(_g) {
        const h = (0, e.isMotionValue)(_g) ? _g.get() : _g;
        return (0, d.isCustomValue)(h) ? h.toValue() : h;
    }
}), a.register('nAn7C', function(b, c) {
    _h(b.exports, 'isCustomValue', function() {
        return _e;
    }), _h(b.exports, 'resolveFinalValueInKeyframes', function() {
        return _f;
    });
    var d = a('S7EbY');
    const _e = _h => Boolean(_h && 'object' == typeof _h && _h.mix && _h.toValue),
        _f = _h => (0, d.isKeyframesTarget)(_h) ? _h[_h.length - 1] || 0 : _h;
}), a.register('S7EbY', function(b, c) {
    _h(b.exports, 'isKeyframesTarget', function() {
        return _d;
    });
    const _d = _h => Array.isArray(_h);
}), a.register('dX3/C', function(b, c) {
    _h(b.exports, 'htmlMotionConfig', function() {
        return _g;
    });
    var d = a('T7Ae6'),
        e = a('N20hs'),
        f = a('qzHtV');
    const _g = {
        useVisualState: (0, d.makeUseVisualState)({
            scrapeMotionValuesFromProps: e.scrapeMotionValuesFromProps,
            createRenderState: f.createHtmlRenderState
        })
    };
}), a.register('58vMu', function(b, c) {
    _h(b.exports, 'gestureAnimations', function() {
        return _i;
    });
    var d = a('Tz9Fv'),
        e = a('fpxSr'),
        f = a('KEm0K'),
        g = a('9mGOE'),
        h = a('RaUzi');
    const _i = {
        inView: (0, h.makeRenderlessComponent)(g.useViewport),
        tap: (0, h.makeRenderlessComponent)(f.useTapGesture),
        focus: (0, h.makeRenderlessComponent)(d.useFocusGesture),
        hover: (0, h.makeRenderlessComponent)(e.useHoverGesture)
    };
}), a.register('Tz9Fv', function(b, c) {
    _h(b.exports, 'useFocusGesture', function() {
        return _g;
    });
    var d = a('fUuad'),
        e = a('s2HUL'),
        f = a('LEQ5w');

    function _g({
        whileFocus: _h,
        visualElement: i
    }) {
        const {
            animationState: j
        } = i, k = (0, f.useCallback)(() => {
            j && j.setActive(d.AnimationType.Focus, !0);
        }, [j]), l = (0, f.useCallback)(() => {
            j && j.setActive(d.AnimationType.Focus, !1);
        }, [j]);
        (0, e.useDomEvent)(i, 'focus', _h ? k : void 0), (0, e.useDomEvent)(i, 'blur', _h ? l : void 0);
    }
}), a.register('fUuad', function(b, c) {
    var d, e;
    _f(b.exports, 'AnimationType', function() {
        return d;
    }), (e = d || (d = {})).Animate = 'animate', e.Hover = 'whileHover', e.Tap = 'whileTap', e.Drag = 'whileDrag', e.Focus = 'whileFocus', e.InView = 'whileInView', e.Exit = 'exit';
}), a.register('s2HUL', function(b, c) {
    _f(b.exports, 'addDomEvent', function() {
        return _e;
    }), _f(b.exports, 'useDomEvent', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f, g, h, i = {
        passive: !0
    }) {
        return _f.addEventListener(g, h, i), () => _f.removeEventListener(g, h);
    }

    function _e(f, g, h, i) {
        (0, d.useEffect)(() => {
            const j = f.current;
            if (h && j)
                return _e(j, g, h, i);
        }, [
            f,
            g,
            h,
            i
        ]);
    }
}), a.register('fpxSr', function(b, c) {
    _i(b.exports, 'useHoverGesture', function() {
        return _h;
    });
    var d = a('fUuad'),
        _e = a('TrKgG'),
        f = a('JvBgU'),
        g = a('LEQ5w');

    function h(_i, j, k, l) {
        return (_e, g) => {
            'touch' === _e.type || (0, f.isDragActive)() || (k && _i.animationState && _i.animationState.setActive(d.AnimationType.Hover, j), l && l(_e, g));
        };
    }

    function _h({
        onHoverStart: i,
        onHoverEnd: j,
        whileHover: k,
        visualElement: l
    }) {
        (0, _e.usePointerEvent)(l, 'pointerenter', (0, g.useMemo)(() => i || k ? _h(l, !0, Boolean(k), i) : void 0, [
            i,
            Boolean(k),
            l
        ]), {
            passive: !i
        }), (0, _e.usePointerEvent)(l, 'pointerleave', (0, g.useMemo)(() => j || k ? _h(l, !1, Boolean(k), j) : void 0, [
            i,
            Boolean(k),
            l
        ]), {
            passive: !j
        });
    }
}), a.register('TrKgG', function(b, c) {
    _g(b.exports, 'addPointerEvent', function() {
        return _f;
    }), _g(b.exports, 'usePointerEvent', function() {
        return _f;
    });
    var d = a('s2HUL'),
        e = a('RElBZ');

    function _f(_g, h, i, j) {
        return (0, d.addDomEvent)(_g, h, (0, e.addPointerInfo)(i), j);
    }

    function _f(g, h, i, j) {
        return (0, d.useDomEvent)(g, h, i && (0, e.addPointerInfo)(i), j);
    }
}), a.register('RElBZ', function(b, c) {
    _f(b.exports, 'extractEventInfo', function() {
        return _e;
    }), _f(b.exports, 'addPointerInfo', function() {
        return _e;
    });
    var d = a('56zXf');

    function _e(_f, g = 'page') {
        return {
            point: {
                x: _f[g + 'X'],
                y: _f[g + 'Y']
            }
        };
    }
    const _e = _e => b => (0, d.isPrimaryPointer)(b) && _e(b, _e(b));
}), a.register('56zXf', function(b, c) {
    _e(b.exports, 'isPrimaryPointer', function() {
        return _d;
    });
    const _d = _e => 'mouse' === _e.pointerType ? 'number' != typeof _e.button || _e.button <= 0 : !1 !== _e.isPrimary;
}), a.register('JvBgU', function(b, c) {
    function d(_e) {
        let f = null;
        return () => {
            const g = () => {
                f = null;
            };
            return null === f && (f = _e, g);
        };
    }
    _g(b.exports, 'getGlobalLock', function() {
        return _f;
    }), _g(b.exports, 'isDragActive', function() {
        return _f;
    });
    const d = _c('dragHorizontal'),
        _e = _c('dragVertical');

    function _f(_g) {
        let h = !1;
        if ('y' === _g)
            h = _e();
        else if ('x' === _g)
            h = d();
        else {
            const i = d(),
                j = _e();
            i && j ? h = () => {
                i(), j();
            } : (i && i(), j && j());
        }
        return h;
    }

    function _f() {
        const g = _f(!0);
        return !g || (g(), !1);
    }
}), a.register('KEm0K', function(b, _c) {
    _l(b.exports, 'useTapGesture', function() {
        return _k;
    });
    var d = a('LEQ5w'),
        e = a('ICRkV'),
        _f = a('TrKgG'),
        g = a('6qem0'),
        _h = a('fUuad'),
        i = a('JvBgU'),
        j = a('yz8o3');

    function _k({
        onTap: _l,
        onTapStart: m,
        onTapCancel: n,
        whileTap: o,
        visualElement: p,
        ...q
    }) {
        const r = _l || m || n || o,
            s = (0, d.useRef)(!1),
            t = (0, d.useRef)(null),
            u = {
                passive: !(m || _l || n || q.onPointerDown)
            };

        function v() {
            t.current && t.current(), t.current = null;
        }

        function v() {
            _z(), s.current = !1;
            return p.getProps().whileTap && p.animationState && p.animationState.setActive(_h.AnimationType.Tap, !1), !(0, i.isDragActive)();
        }

        function v(w, x) {
            var y, z, A, B;
            _A() && ((0, e.isNodeOrChild)(p.current, w.target) ? null === (B = (A = p.getProps()).onTap) || void 0 === B || B.call(A, w, x) : null === (z = (y = p.getProps()).onTapCancel) || void 0 === z || z.call(y, w, x));
        }

        function v(w, x) {
            var y, z;
            _A() && (null === (z = (y = p.getProps()).onTapCancel) || void 0 === z || z.call(y, w, x));
        }
        const v = (0, d.useCallback)((_l, m) => {
            var w;
            if (_z(), s.current)
                return;
            s.current = !0, t.current = (0, j.pipe)((0, _f.addPointerEvent)(window, 'pointerup', _B, u), (0, _f.addPointerEvent)(window, 'pointercancel', _E, u));
            const x = p.getProps();
            x.whileTap && p.animationState && p.animationState.setActive(_h.AnimationType.Tap, !0), null === (w = x.onTapStart) || void 0 === w || w.call(x, _l, m);
        }, [
            Boolean(m),
            p
        ]);
        (0, _f.usePointerEvent)(p, 'pointerdown', r ? v : void 0, u), (0, g.useUnmountEffect)(_z);
    }
}), a.register('ICRkV', function(b, c) {
    _f(b.exports, 'isNodeOrChild', function() {
        return _d;
    });
    const _d = (_f, b) => !!b && (_f === b || _d(_f, b.parentElement));
}), a.register('6qem0', function(b, c) {
    _f(b.exports, 'useUnmountEffect', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f) {
        return (0, d.useEffect)(() => () => _f(), []);
    }
}), a.register('yz8o3', function(b, c) {
    _h(b.exports, 'pipe', function() {
        return _e;
    });
    const d = (_h, b) => c => b(_h(c)),
        _e = (..._h) => _h.reduce(d);
}), a.register('9mGOE', function(b, c) {
    _h(b.exports, 'useViewport', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('fUuad'),
        f = a('8AwCC');

    function _g({
        visualElement: _h,
        whileInView: i,
        onViewportEnter: j,
        onViewportLeave: k,
        viewport: l = {}
    }) {
        const m = (0, d.useRef)({
            hasEnteredView: !1,
            isInView: !1
        });
        let n = Boolean(i || j || k);
        l.once && m.current.hasEnteredView && (n = !1);
        ('undefined' == typeof IntersectionObserver ? _o : _h)(n, m.current, _h, l);
    }
    const g = {
        some: 0,
        all: 1
    };

    function _h(i, j, k, {
        root: l,
        margin: m,
        amount: n = 'some',
        once: _o
    }) {
        (0, d.useEffect)(() => {
            if (!i || !k.current)
                return;
            const p = {
                root: null == l ? void 0 : l.current,
                rootMargin: m,
                threshold: 'number' == typeof n ? n : g[n]
            };
            return (0, f.observeIntersection)(k.current, p, i => {
                const {
                    isIntersecting: q
                } = i;
                if (j.isInView === q)
                    return;
                if (j.isInView = q, _o && !q && j.hasEnteredView)
                    return;
                q && (j.hasEnteredView = !0), k.animationState && k.animationState.setActive(e.AnimationType.InView, q);
                const r = k.getProps(),
                    s = q ? r.onViewportEnter : r.onViewportLeave;
                s && s(i);
            });
        }, [
            i,
            l,
            m,
            n
        ]);
    }

    function h(i, j, k, {
        fallback: l = !0
    }) {
        (0, d.useEffect)(() => {
            i && l && requestAnimationFrame(() => {
                j.hasEnteredView = !0;
                const {
                    onViewportEnter: m
                } = k.getProps();
                m && m(null), k.animationState && k.animationState.setActive(e.AnimationType.InView, !0);
            });
        }, [i]);
    }
}), a.register('8AwCC', function(b, c) {
    _i(b.exports, 'observeIntersection', function() {
        return _h;
    });
    const d = new WeakMap(),
        e = new WeakMap(),
        f = _i => {
            const g = d.get(_i.target);
            g && g(_i);
        },
        g = _i => {
            _i.forEach(f);
        };

    function _h(_i, j, k) {
        const l = function({
            root: m,
            ...n
        }) {
            const o = m || document;
            e.has(o) || e.set(o, {});
            const p = e.get(o),
                q = JSON.stringify(n);
            return p[q] || (p[q] = new IntersectionObserver(g, {
                root: m,
                ...n
            })), p[q];
        }(j);
        return d.set(_i, k), l.observe(_i), () => {
            d.delete(_i), l.unobserve(_i);
        };
    }
}), a.register('RaUzi', function(b, c) {
    _l(b.exports, 'makeRenderlessComponent', function() {
        return _d;
    });
    const _d = _l => b => (_l(b), null);
}), a.register('+z5E/', function(b, c) {
    _l(b.exports, 'animations', function() {
        return _k;
    });
    var d = a('LEQ5w'),
        e = a('TnYPu'),
        f = a('FytBL'),
        g = a('iTk+S'),
        h = a('GE6bk'),
        i = a('fUuad'),
        j = a('RaUzi');
    const _k = {
        animation: (0, j.makeRenderlessComponent)(({
            visualElement: _l,
            animate: m
        }) => {
            _l.animationState || (_l.animationState = (0, h.createAnimationState)(_l)), (0, e.isAnimationControls)(m) && (0, d.useEffect)(() => m.subscribe(_l), [m]);
        }),
        exit: (0, j.makeRenderlessComponent)(_l => {
            const {
                custom: n,
                visualElement: o
            } = _l, [p, q] = (0, f.usePresence)(), r = (0, d.useContext)(g.PresenceContext);
            (0, d.useEffect)(() => {
                o.isPresent = p;
                const s = o.animationState && o.animationState.setActive(i.AnimationType.Exit, !p, {
                    custom: r && r.custom || n
                });
                s && !p && s.then(q);
            }, [p]);
        })
    };
}), a.register('FytBL', function(b, c) {
    _g(b.exports, 'usePresence', function() {
        return _f;
    }), _g(b.exports, 'useIsPresent', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('iTk+S');

    function _f() {
        const _g = (0, d.useContext)(e.PresenceContext);
        if (null === _g)
            return [
                !0,
                null
            ];
        const {
            isPresent: h,
            onExitComplete: i,
            register: j
        } = _g, k = (0, d.useId)();
        (0, d.useEffect)(() => j(k), []);
        return !h && i ? [
            !1,
            () => i && i(k)
        ] : [!0];
    }

    function _f() {
        return null === (_g = (0, d.useContext)(e.PresenceContext)) || _g.isPresent;
        var _g;
    }
}), a.register('GE6bk', function(b, c) {
    _o(b.exports, 'variantPriorityOrder', function() {
        return _k;
    }), _o(b.exports, 'createAnimationState', function() {
        return _n;
    });
    var d = a('TnYPu'),
        e = a('S7EbY'),
        f = a('87OIv'),
        g = a('n1Lfr'),
        h = a('ab59j'),
        i = a('fUuad'),
        j = a('eMPCT');
    const _k = [
            i.AnimationType.Animate,
            i.AnimationType.InView,
            i.AnimationType.Focus,
            i.AnimationType.Hover,
            i.AnimationType.Tap,
            i.AnimationType.Drag,
            i.AnimationType.Exit
        ],
        l = [..._k].reverse(),
        m = _k.length;

    function _n(_o) {
        let p = function(q) {
            return p => Promise.all(p.map(({
                animation: r,
                options: s
            }) => (0, g.animateVisualElement)(q, r, s)));
        }(_o);
        const q = {
            [i.AnimationType.Animate]: _y(!0),
            [i.AnimationType.InView]: _y(),
            [i.AnimationType.Hover]: _y(),
            [i.AnimationType.Tap]: _y(),
            [i.AnimationType.Drag]: _y(),
            [i.AnimationType.Focus]: _y(),
            [i.AnimationType.Exit]: _y()
        };
        let r = !0;
        const s = (p, q) => {
            const t = (0, j.resolveVariant)(_o, q);
            if (t) {
                const {
                    transition: u,
                    transitionEnd: v,
                    ...w
                } = t;
                p = {
                    ...p,
                    ...w,
                    ...v
                };
            }
            return p;
        };

        function t(u, v) {
            const w = _o.getProps(),
                x = _o.getVariantContext(!0) || {},
                _y = [],
                _z = new Set();
            let _A = {},
                _B = 1 / 0;
            for (let C = 0; C < m; C++) {
                const D = l[C],
                    _E = q[D],
                    F = void 0 !== w[D] ? w[D] : x[D],
                    G = (0, h.isVariantLabel)(F),
                    H = D === v ? _E.isActive : null;
                !1 === H && (_B = C);
                let I = F === x[D] && F !== w[D] && G;
                if (I && r && _o.manuallyAnimateOnMount && (I = !1), _E.protectedKeys = {
                        ..._A
                    }, !_E.isActive && null === H || !F && !_E.prevProp || (0, d.isAnimationControls)(F) || 'boolean' == typeof F)
                    continue;
                const J = _n(_E.prevProp, F);
                let K = J || D === v && _E.isActive && !I && G || C > _B && G;
                const L = Array.isArray(F) ? F : [F];
                let M = L.reduce(s, {});
                !1 === H && (M = {});
                const {
                    prevResolvedValues: N = {}
                } = _E, O = {
                    ...N,
                    ...M
                }, P = _o => {
                    K = !0, _z.delete(_o), _E.needsAnimating[_o] = !0;
                };
                for (const Q in O) {
                    const R = M[Q],
                        S = N[Q];
                    _A.hasOwnProperty(Q) || (R !== S ? (0, e.isKeyframesTarget)(R) && (0, e.isKeyframesTarget)(S) ? !(0, f.shallowCompare)(R, S) || J ? P(Q) : _E.protectedKeys[Q] = !0 : void 0 !== R ? P(Q) : _z.add(Q) : void 0 !== R && _z.has(Q) ? P(Q) : _E.protectedKeys[Q] = !0);
                }
                _E.prevProp = F, _E.prevResolvedValues = M, _E.isActive && (_A = {
                    ..._A,
                    ...M
                }), r && Q.blockInitialAnimation && (K = !1), K && !I && _y.push(...L.map(Q => ({
                    animation: Q,
                    options: {
                        type: D,
                        ...u
                    }
                })));
            }
            if (_z.size) {
                const D = {};
                _z.forEach(q => {
                    const E = _o.getBaseTarget(q);
                    void 0 !== E && (D[q] = E);
                }), _y.push({
                    animation: D
                });
            }
            let D = Boolean(_y.length);
            return r && !1 === w.initial && !_o.manuallyAnimateOnMount && (D = !1), r = !1, D ? C(_y) : Promise.resolve();
        }
        return {
            animateChanges: _n,
            setActive: function(t, u, v) {
                var w;
                if (q[t].isActive === u)
                    return Promise.resolve();
                null === (w = _o.variantChildren) || void 0 === w || w.forEach(_o => {
                    var x;
                    return null === (x = _o.animationState) || void 0 === x ? void 0 : x.setActive(t, u);
                }), q[t].isActive = u;
                const x = _n(v, t);
                for (const y in q)
                    q[y].protectedKeys = {};
                return x;
            },
            setAnimateFunction: function(t) {
                p = t(_o);
            },
            getState: () => q
        };
    }

    function _n(o, p) {
        return 'string' == typeof p ? p !== o : !!Array.isArray(p) && !(0, f.shallowCompare)(p, o);
    }

    function n(o = !1) {
        return {
            isActive: o,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        };
    }
}), a.register('87OIv', function(b, c) {
    function d(e, f) {
        if (!Array.isArray(f))
            return !1;
        const g = f.length;
        if (g !== e.length)
            return !1;
        for (let h = 0; h < g; h++)
            if (f[h] !== e[h])
                return !1;
        return !0;
    }
    _l(b.exports, 'shallowCompare', function() {
        return _c;
    });
}), a.register('n1Lfr', function(b, _c) {
    _l(b.exports, 'animateVisualElement', function() {
        return _k;
    });
    var d = a('Cq6Dd'),
        e = a('eMPCT'),
        f = a('7PZBl'),
        g = a('3+t5y'),
        h = a('SV4mq'),
        i = a('LO9i0'),
        j = a('bGU5Z');

    function _k(_l, m, n = {}) {
        let o;
        if (_l.notify('AnimationStart', m), Array.isArray(m)) {
            const p = m.map(m => _k(_l, m, n));
            o = Promise.all(p);
        } else if ('string' == typeof m)
            o = _k(_l, m, n);
        else {
            const p = 'function' == typeof m ? (0, e.resolveVariant)(_l, m, n.custom) : m;
            o = _k(_l, p, n);
        }
        return o.then(() => _l.notify('AnimationComplete', m));
    }

    function _k(l, m, n = {}) {
        var o;
        const p = (0, e.resolveVariant)(l, m, n.custom);
        let {
            transition: q = l.getDefaultTransition() || {}
        } = p || {};
        n.transitionOverride && (q = n.transitionOverride);
        const r = p ? () => _k(l, p, n) : () => Promise.resolve(),
            s = (null === (o = l.variantChildren) || void 0 === o ? void 0 : o.size) ? (t = 0) => {
                const {
                    delayChildren: u = 0,
                    staggerChildren: v,
                    staggerDirection: w
                } = q;
                return function(x, y, z = 0, A = 0, B = 1, C) {
                    const D = [],
                        E = (x.variantChildren.size - 1) * A,
                        F = 1 === B ? (G = 0) => G * A : (H = 0) => E - H * A;
                    return Array.from(H.variantChildren).sort(_t).forEach((H, A) => {
                        H.notify('AnimationStart', y), D.push(_k(H, y, {
                            ...C,
                            delay: z + F(A)
                        }).then(() => H.notify('AnimationComplete', y)));
                    }), Promise.all(D);
                }(l, m, u + t, v, w, n);
            } : () => Promise.resolve(),
            {
                when: u
            } = q;
        if (u) {
            const [v, w] = 'beforeChildren' === u ? [
                r,
                s
            ] : [
                s,
                r
            ];
            return v().then(w);
        }
        return Promise.all([
            r(),
            s(n.delay)
        ]);
    }

    function _k(l, m, {
        delay: n = 0,
        transitionOverride: o,
        type: p
    } = {}) {
        var q;
        let {
            transition: r = l.getDefaultTransition(),
            transitionEnd: s,
            ..._t
        } = l.makeTargetAnimatable(m);
        const u = l.getValue('willChange');
        o && (r = o);
        const v = [],
            w = p && (null === (q = l.animationState) || void 0 === q ? void 0 : q.getState()[p]);
        for (const x in _t) {
            const y = l.getValue(x),
                z = _t[x];
            if (!y || void 0 === z || w && _k(w, x))
                continue;
            const A = {
                delay: n,
                elapsed: 0,
                ...r
            };
            if (window.HandoffAppearAnimations && !y.hasAnimated) {
                const B = l.getProps()[h.optimizedAppearDataAttribute];
                B && (A.elapsed = window.HandoffAppearAnimations(B, x, y, j.sync));
            }
            let B = y.start((0, i.createMotionValueAnimation)(x, y, z, l.shouldReduceMotion && f.transformProps.has(x) ? {
                type: !1
            } : A));
            (0, g.isWillChangeMotionValue)(u) && (u.add(x), B = B.then(() => u.remove(x))), v.push(B);
        }
        return Promise.all(v).then(() => {
            s && (0, d.setTarget)(l, s);
        });
    }

    function k(l, m) {
        return l.sortNodePosition(m);
    }

    function _k({
        protectedKeys: l,
        needsAnimating: m
    }, n) {
        const o = l.hasOwnProperty(n) && !0 !== m[n];
        return m[n] = !1, o;
    }
}), a.register('Cq6Dd', function(b, c) {
    _m(b.exports, 'setTarget', function() {
        return _l;
    }), _m(b.exports, 'checkTargetForNewValues', function() {
        return _l;
    }), _m(b.exports, 'getOrigin', function() {
        return _l;
    });
    var d = a('cmWTT'),
        e = a('YBk+9'),
        f = a('nAn7C'),
        g = a('dssd5'),
        h = a('bzHq3'),
        i = a('PWnNV'),
        j = a('qlvBI'),
        k = a('eMPCT');

    function l(_m, n, o) {
        _m.hasValue(n) ? _m.getValue(n).set(o) : _m.addValue(n, (0, g.motionValue)(o));
    }

    function _l(m, n) {
        const o = (0, k.resolveVariant)(m, n);
        let {
            transitionEnd: p = {},
            transition: q = {},
            ...r
        } = o ? m.makeTargetAnimatable(o, !1) : {};
        r = {
            ...r,
            ...p
        };
        for (const s in r) {
            _s(m, s, (0, f.resolveFinalValueInKeyframes)(r[s]));
        }
    }

    function _l(m, n, o) {
        var p, q;
        const r = Object.keys(n).filter(n => !m.hasValue(n)),
            _s = r.length;
        if (_s)
            for (let t = 0; t < _s; t++) {
                const u = r[t],
                    v = n[u];
                let w = null;
                Array.isArray(v) && (w = v[0]), null === w && (w = null !== (q = null !== (p = o[u]) && void 0 !== p ? p : m.readValue(u)) && void 0 !== q ? q : n[u]), null != w && ('string' == typeof w && ((0, d.isNumericalString)(w) || (0, e.isZeroValueString)(w)) ? w = parseFloat(w) : !(0, j.findValueType)(w) && h.complex.test(v) && (w = (0, i.getAnimatableNone)(u, v)), m.addValue(u, (0, g.motionValue)(w, {
                    owner: m
                })), void 0 === o[u] && (o[u] = w), null !== w && m.setBaseTarget(u, w));
            }
    }

    function l(m, n) {
        if (!n)
            return;
        return (n[m] || n.default || n).from;
    }

    function _l(m, n, o) {
        var p;
        const q = {};
        for (const r in m) {
            const s = _o(r, n);
            q[r] = void 0 !== s ? s : null === (p = o.getValue(r)) || void 0 === p ? void 0 : p.get();
        }
        return q;
    }
}), a.register('cmWTT', function(b, c) {
    _i(b.exports, 'isNumericalString', function() {
        return _d;
    });
    const _d = _i => /^\-?\d*\.?\d+$/.test(_i);
}), a.register('YBk+9', function(b, c) {
    _i(b.exports, 'isZeroValueString', function() {
        return _d;
    });
    const _d = _i => /^0[^.\s]+$/.test(_i);
}), a.register('dssd5', function(b, c) {
    _i(b.exports, 'motionValue', function() {
        return _i;
    });
    var d = a('5umpH'),
        e = a('bGU5Z'),
        f = a('bCV3Z'),
        g = a('bMMqa');
    class h {
        onChange(_i) {
            return this.on('change', _i);
        }
        on(i, j) {
            this.events[i] || (this.events[i] = new(0, f.SubscriptionManager)());
            const k = this.events[i].add(j);
            return 'change' === i ? () => {
                k(), e.sync.read(() => {
                    this.events.change.getSize() || this.stop();
                });
            } : k;
        }
        clearListeners() {
            for (const i in this.events)
                this.events[i].clear();
        }
        attach(i, j) {
            this.passiveEffect = i, this.stopPassiveEffect = j;
        }
        set(i, j = !0) {
            j && this.passiveEffect ? this.passiveEffect(i, this.updateAndNotify) : this.updateAndNotify(i, j);
        }
        setWithVelocity(i, j, k) {
            this.set(j), this.prev = i, this.timeDelta = k;
        }
        jump(i) {
            this.updateAndNotify(i), this.prev = i, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
            return this.current;
        }
        getPrevious() {
            return this.prev;
        }
        getVelocity() {
            return this.canTrackVelocity ? (0, g.velocityPerSecond)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
        }
        start(i) {
            return this.stop(), new Promise(b => {
                this.hasAnimated = !0, this.animation = i(b) || null, this.events.animationStart && this.events.animationStart.notify();
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
        constructor(i, j = {}) {
            var k;
            this.version = '8.5.2', this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (i, l = !0) => {
                this.prev = this.current, this.current = i;
                const {
                    delta: m,
                    timestamp: n
                } = d.frameData;
                this.lastUpdated !== n && (this.timeDelta = m, this.lastUpdated = n, e.sync.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), l && this.events.renderRequest && this.events.renderRequest.notify(this.current);
            }, this.scheduleVelocityCheck = () => e.sync.postRender(this.velocityCheck), this.velocityCheck = ({
                timestamp: m
            }) => {
                m !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
            }, this.hasAnimated = !1, this.prev = this.current = m, this.canTrackVelocity = (k = this.current, !isNaN(parseFloat(k))), this.owner = l.owner;
        }
    }

    function _i(j, k) {
        return new h(j, k);
    }
}), a.register('5umpH', function(b, c) {
    _e(b.exports, 'frameData', function() {
        return _d;
    });
    const _d = {
        delta: 0,
        timestamp: 0
    };
}), a.register('bGU5Z', function(b, c) {
    _e(b.exports, 'sync', function() {
        return _l;
    }), _e(b.exports, 'cancelSync', function() {
        return _m;
    }), _e(b.exports, 'flushSync', function() {
        return _n;
    });
    var d = a('RxW6z'),
        e = a('qt100'),
        f = a('5umpH');
    let g = !0,
        h = !1,
        i = !1;
    const j = [
            'read',
            'update',
            'preRender',
            'render',
            'postRender'
        ],
        k = j.reduce((_e, b) => (_e[b] = (0, e.createRenderStep)(() => h = !0), _e), {}),
        _l = j.reduce((_e, b) => {
            const m = k[b];
            return _e[b] = (_e, n = !1, o = !1) => (h || _q(), m.schedule(_e, n, o)), _e;
        }, {}),
        _m = j.reduce((_e, b) => (_e[b] = k[b].cancel, _e), {}),
        _n = j.reduce((_e, b) => (_e[b] = () => k[b].process(f.frameData), _e), {}),
        _o = _e => k[_e].process(f.frameData),
        p = _e => {
            h = !1, f.frameData.delta = g ? d.defaultTimestep : Math.max(Math.min(_e - f.frameData.timestamp, 40), 1), f.frameData.timestamp = _e, i = !0, j.forEach(_o), i = !1, h && (g = !1, (0, d.onNextFrame)(p));
        },
        _q = () => {
            h = !0, g = !0, i || (0, d.onNextFrame)(p);
        };
}), a.register('RxW6z', function(b, c) {
    _e(b.exports, 'defaultTimestep', function() {
        return _d;
    }), _e(b.exports, 'onNextFrame', function() {
        return _f;
    });
    const _d = 1 / 60 * 1000,
        e = 'undefined' != typeof performance ? () => performance.now() : () => Date.now(),
        _f = 'undefined' != typeof window ? _e => window.requestAnimationFrame(_e) : _e => setTimeout(() => _e(e()), _d);
}), a.register('qt100', function(b, c) {
    function d(_e) {
        let f = [],
            g = [],
            h = 0,
            i = !1,
            j = !1;
        const k = new WeakSet(),
            l = {
                schedule: (_e, m = !1, n = !1) => {
                    const o = n && i,
                        p = o ? f : g;
                    return m && k.add(_e), -1 === p.indexOf(_e) && (p.push(_e), o && i && (h = f.length)), _e;
                },
                cancel: _e => {
                    const o = g.indexOf(_e); -
                    1 !== o && g.splice(o, 1), k.delete(_e);
                },
                process: _h => {
                    if (i)
                        m = !0;
                    else {
                        if (i = !0, [o, p] = [
                                p,
                                o
                            ], p.length = 0, h = o.length, h)
                            for (let q = 0; q < h; q++) {
                                const r = o[q];
                                r(_h), k.has(r) && (n.schedule(r), _e());
                            }
                        i = !1, m && (m = !1, n.process(_h));
                    }
                }
            };
        return n;
    }
    _f(b.exports, 'createRenderStep', function() {
        return _c;
    });
}), a.register('bCV3Z', function(b, _c) {
    _f(b.exports, 'SubscriptionManager', function() {
        return _e;
    });
    var d = a('IwX4G');
    class _e {
        add(_f) {
            return (0, d.addUniqueItem)(this.subscriptions, _f), () => (0, d.removeItem)(this.subscriptions, _f);
        }
        notify(f, g, h) {
            const i = this.subscriptions.length;
            if (i)
                if (1 === i)
                    this.subscriptions[0](f, g, h);
                else
                    for (let j = 0; j < i; j++) {
                        const k = this.subscriptions[j];
                        k && k(f, g, h);
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
}), a.register('IwX4G', function(b, c) {
    function d(e, f) {
        -1 === e.indexOf(f) && e.push(f);
    }

    function d(e, f) {
        const g = e.indexOf(f);
        g > -1 && e.splice(g, 1);
    }

    function d([..._e], e, f) {
        const g = e < 0 ? _e.length + e : e;
        if (g >= 0 && g < _e.length) {
            const h = f < 0 ? _e.length + f : f,
                [i] = _e.splice(e, 1);
            _e.splice(h, 0, i);
        }
        return _e;
    }
    _e(b.exports, 'addUniqueItem', function() {
        return _d;
    }), _e(b.exports, 'removeItem', function() {
        return _d;
    }), _e(b.exports, 'moveItem', function() {
        return _e;
    });
}), a.register('bMMqa', function(b, c) {
    function _d(_e, f) {
        return f ? _e * (1000 / f) : 0;
    }
    _j(b.exports, 'velocityPerSecond', function() {
        return _c;
    });
}), a.register('bzHq3', function(b, _c) {
    _j(b.exports, 'analyseComplexValue', function() {
        return _i;
    }), _j(b.exports, 'complex', function() {
        return _j;
    });
    var _d = a('Ta3mW'),
        _e = a('kMJJk'),
        f = a('ospG0');
    const g = '${c}',
        _h = '${n}';

    function _i(_j) {
        'number' == typeof _j && (_j = `${ _j }`);
        const k = [];
        let l = 0,
            m = 0;
        const n = _j.match(f.colorRegex);
        n && (l = n.length, _j = _j.replace(f.colorRegex, g), k.push(...n.map(_d.color.parse)));
        const o = _j.match(f.floatRegex);
        return o && (m = o.length, _j = _j.replace(f.floatRegex, _h), k.push(...o.map(_e.number.parse))), {
            values: k,
            numColors: l,
            numNumbers: m,
            tokenised: _j
        };
    }

    function i(j) {
        return _i(j).values;
    }

    function i(j) {
        const {
            values: k,
            numColors: l,
            tokenised: m
        } = _i(j), n = k.length;
        return j => {
            let o = m;
            for (let p = 0; p < n; p++)
                o = o.replace(p < l ? g : _h, p < l ? _d.color.transform(j[p]) : (0, f.sanitize)(j[p]));
            return o;
        };
    }
    const i = _k => 'number' == typeof _k ? 0 : _k;
    const _j = {
        test: function(_k) {
            var l, m;
            return isNaN(_k) && (0, f.isString)(_k) && ((null === (l = _k.match(f.floatRegex)) || void 0 === l ? void 0 : l.length) || 0) + ((null === (m = _k.match(f.colorRegex)) || void 0 === m ? void 0 : m.length) || 0) > 0;
        },
        parse: _j,
        createTransformer: _k,
        getAnimatableNone: function(k) {
            const l = _j(k);
            return _k(k)(l.map(i));
        }
    };
}), a.register('Ta3mW', function(b, c) {
    _f(b.exports, 'color', function() {
        return _h;
    });
    var d = a('ospG0'),
        e = a('snZZX'),
        f = a('MrQ9F'),
        g = a('Ya/W+');
    const _h = {
        test: _f => g.rgba.test(_f) || e.hex.test(_f) || f.hsla.test(_f),
        parse: _f => g.rgba.test(_f) ? g.rgba.parse(_f) : f.hsla.test(_f) ? f.hsla.parse(_f) : e.hex.parse(_f),
        transform: _f => (0, d.isString)(_f) ? _f : _f.hasOwnProperty('red') ? g.rgba.transform(_f) : f.hsla.transform(_f)
    };
}), a.register('snZZX', function(b, c) {
    _f(b.exports, 'hex', function() {
        return _e;
    });
    var d = a('Ya/W+');
    const _e = {
        test: (0, a('xrLeR').isColorString)('#'),
        parse: function(_f) {
            let g = '',
                h = '',
                i = '',
                j = '';
            return _f.length > 5 ? (g = _f.substring(1, 3), h = _f.substring(3, 5), i = _f.substring(5, 7), j = _f.substring(7, 9)) : (g = _f.substring(1, 2), h = _f.substring(2, 3), i = _f.substring(3, 4), j = _f.substring(4, 5), g += g, h += h, i += i, j += j), {
                red: parseInt(g, 16),
                green: parseInt(h, 16),
                blue: parseInt(i, 16),
                alpha: j ? parseInt(j, 16) / 255 : 1
            };
        },
        transform: d.rgba.transform
    };
}), a.register('Ya/W+', function(b, c) {
    _j(b.exports, 'rgba', function() {
        return _i;
    });
    var d = a('0fBPo'),
        e = a('kMJJk'),
        f = a('ospG0'),
        g = a('xrLeR');
    const h = {
            ...e.number,
            transform: _j => Math.round((_j => (0, d.clamp)(0, 255, _j))(_j))
        },
        _i = {
            test: (0, g.isColorString)('rgb', 'red'),
            parse: (0, g.splitColor)('red', 'green', 'blue'),
            transform: ({
                red: _j,
                green: k,
                blue: l,
                alpha: m = 1
            }) => 'rgba(' + h.transform(_j) + ', ' + h.transform(k) + ', ' + h.transform(l) + ', ' + (0, f.sanitize)(e.alpha.transform(m)) + ')'
        };
}), a.register('xrLeR', function(b, c) {
    _i(b.exports, 'isColorString', function() {
        return _e;
    }), _i(b.exports, 'splitColor', function() {
        return _f;
    });
    var d = a('ospG0');
    const _e = (_i, b) => a => Boolean((0, d.isString)(a) && d.singleColorRegex.test(a) && a.startsWith(_i) || b && Object.prototype.hasOwnProperty.call(a, b)),
        _f = (_i, b, a) => c => {
            if (!(0, d.isString)(c))
                return c;
            const [g, h, i, j] = c.match(d.floatRegex);
            return {
                [_i]: parseFloat(g),
                [b]: parseFloat(h),
                [a]: parseFloat(i),
                alpha: void 0 !== j ? parseFloat(j) : 1
            };
        };
}), a.register('MrQ9F', function(b, c) {
    _i(b.exports, 'hsla', function() {
        return _h;
    });
    var d = a('kMJJk'),
        e = a('QJEVi'),
        f = a('ospG0'),
        g = a('xrLeR');
    const _h = {
        test: (0, g.isColorString)('hsl', 'hue'),
        parse: (0, g.splitColor)('hue', 'saturation', 'lightness'),
        transform: ({
            hue: _i,
            saturation: j,
            lightness: k,
            alpha: l = 1
        }) => 'hsla(' + Math.round(_i) + ', ' + e.percent.transform((0, f.sanitize)(j)) + ', ' + e.percent.transform((0, f.sanitize)(k)) + ', ' + (0, f.sanitize)(d.alpha.transform(l)) + ')'
    };
}), a.register('PWnNV', function(b, c) {
    _h(b.exports, 'getAnimatableNone', function() {
        return _g;
    });
    var d = a('bzHq3'),
        e = a('L3Rec'),
        f = a('/xMHo');

    function _g(_h, i) {
        var j;
        let k = (0, f.getDefaultValueType)(_h);
        return k !== e.filter && (k = d.complex), null === (j = k.getAnimatableNone) || void 0 === j ? void 0 : j.call(k, i);
    }
}), a.register('L3Rec', function(b, c) {
    _h(b.exports, 'filter', function() {
        return _h;
    });
    var d = a('bzHq3'),
        e = a('ospG0');
    const f = new Set([
        'brightness',
        'contrast',
        'saturate',
        'opacity'
    ]);

    function g(_h) {
        const [i, j] = _h.slice(0, -1).split('(');
        if ('drop-shadow' === i)
            return _h;
        const [k] = j.match(e.floatRegex) || [];
        if (!k)
            return _h;
        const l = j.replace(k, '');
        let m = f.has(i) ? 1 : 0;
        return k !== j && (m *= 100), i + '(' + m + l + ')';
    }
    const g = /([a-z-]*)\(.*?\)/g,
        _h = {
            ...d.complex,
            getAnimatableNone: _f => {
                const i = _f.match(g);
                return i ? i.map(_g).join(' ') : _f;
            }
        };
}), a.register('/xMHo', function(b, c) {
    _f(b.exports, 'getDefaultValueType', function() {
        return _g;
    });
    var d = a('Ta3mW'),
        e = a('L3Rec');
    const f = {
            ...a('tsyk/').numberValueTypes,
            color: d.color,
            backgroundColor: d.color,
            outlineColor: d.color,
            fill: d.color,
            stroke: d.color,
            borderColor: d.color,
            borderTopColor: d.color,
            borderRightColor: d.color,
            borderBottomColor: d.color,
            borderLeftColor: d.color,
            filter: e.filter,
            WebkitFilter: e.filter
        },
        _g = _f => f[_f];
}), a.register('qlvBI', function(b, c) {
    _f(b.exports, 'findValueType', function() {
        return _i;
    });
    var d = a('Ta3mW'),
        e = a('bzHq3'),
        f = a('C+c3u'),
        g = a('7VM4O');
    const h = [
            ...f.dimensionValueTypes,
            d.color,
            e.complex
        ],
        _i = _f => h.find((0, g.testValueType)(_f));
}), a.register('C+c3u', function(b, c) {
    _f(b.exports, 'dimensionValueTypes', function() {
        return _h;
    }), _f(b.exports, 'findDimensionValueType', function() {
        return _i;
    });
    var d = a('kMJJk'),
        e = a('QJEVi'),
        f = a('7VM4O'),
        g = a('TLz+H');
    const _h = [
            d.number,
            e.px,
            e.percent,
            e.degrees,
            e.vw,
            e.vh,
            g.auto
        ],
        _i = _f => _h.find((0, f.testValueType)(_f));
}), a.register('7VM4O', function(b, c) {
    _f(b.exports, 'testValueType', function() {
        return _d;
    });
    const _d = _f => b => b.test(_f);
}), a.register('TLz+H', function(b, c) {
    _f(b.exports, 'auto', function() {
        return _d;
    });
    const _d = {
        test: _f => 'auto' === _f,
        parse: _f => _f
    };
}), a.register('eMPCT', function(b, c) {
    _f(b.exports, 'resolveVariant', function() {
        return _e;
    });
    var d = a('5lhmK');

    function _e(_f, g, h) {
        const i = _f.getProps();
        return (0, d.resolveVariantFromProps)(i, g, void 0 !== h ? h : i.custom, function(j) {
            const k = {};
            return j.values.forEach((j, h) => k[h] = j.get()), k;
        }(_f), function(j) {
            const k = {};
            return j.values.forEach((j, h) => k[h] = j.getVelocity()), k;
        }(_f));
    }
}), a.register('3+t5y', function(b, c) {
    _f(b.exports, 'isWillChangeMotionValue', function() {
        return _e;
    });
    var d = a('C2TrH');

    function _e(_f) {
        return Boolean((0, d.isMotionValue)(_f) && _f.add);
    }
}), a.register('SV4mq', function(b, c) {
    _l(b.exports, 'optimizedAppearDataAttribute', function() {
        return _d;
    });
    const _d = 'data-' + (0, a('JcCk6').camelToDash)('framerAppearId');
}), a.register('LO9i0', function(b, c) {
    _l(b.exports, 'createMotionValueAnimation', function() {
        return _o;
    });
    var d = a('t3uQw'),
        e = a('Y/u17'),
        f = a('PM9c6'),
        g = a('EAn+W'),
        h = a('NHiFx'),
        i = a('6dC6i'),
        _j = a('ySonW'),
        _k = a('LDRSq'),
        l = a('cXqEd'),
        m = a('uyM0U'),
        n = a('JraMW');
    const _o = (_l, b, a, p = {}) => _o => {
        const q = (0, n.getValueTransition)(p, _l) || {},
            r = q.delay || p.delay || 0;
        let {
            elapsed: s = 0
        } = p;
        s -= (0, e.secondsToMilliseconds)(r);
        const t = (0, m.getKeyframes)(b, _l, a, q),
            u = t[0],
            v = t[t.length - 1],
            w = (0, l.isAnimatable)(_l, u),
            x = (0, l.isAnimatable)(_l, v);
        (0, d.warning)(w === x, `You are trying to animate ${ _l } from "${ u }" to "${ v }". ${ u } is not an animatable value - to enable this animation set ${ u } to a value animatable to ${ v } via the \`style\` property.`);
        let y = {
            keyframes: t,
            velocity: b.getVelocity(),
            ...q,
            elapsed: s,
            onUpdate: _l => {
                b.set(_l), q.onUpdate && q.onUpdate(_l);
            },
            onComplete: () => {
                _o(), q.onComplete && q.onComplete();
            }
        };
        if (!w || !x || f.instantAnimationState.current || !1 === q.type)
            return (0, h.createInstantAnimation)(y);
        if ('inertia' === q.type)
            return (0, _j.inertia)(y);
        (0, n.isTransitionDefined)(q) || (y = {
            ...y,
            ...(0, _k.getDefaultTransition)(_l, y)
        }), y.duration && (y.duration = (0, e.secondsToMilliseconds)(y.duration)), y.repeatDelay && (y.repeatDelay = (0, e.secondsToMilliseconds)(y.repeatDelay));
        const z = b.owner,
            A = z && z.current;
        if (z && A instanceof HTMLElement && !(null == z ? void 0 : z.getProps().onUpdate)) {
            const B = (0, g.createAcceleratedAnimation)(b, _l, y);
            if (B)
                return B;
        }
        return (0, i.animate)(y);
    };
}), a.register('t3uQw', function(b, c) {
    _l(b.exports, 'warning', function() {
        return _d;
    }), _l(b.exports, 'invariant', function() {
        return _e;
    });
    var _d = function() {},
        _e = function() {};
}), a.register('Y/u17', function(b, c) {
    _l(b.exports, 'secondsToMilliseconds', function() {
        return _d;
    });
    const _d = _l => 1000 * _l;
}), a.register('PM9c6', function(b, c) {
    _l(b.exports, 'instantAnimationState', function() {
        return _d;
    });
    const _d = {
        current: !1
    };
}), a.register('EAn+W', function(b, c) {
    _l(b.exports, 'createAcceleratedAnimation', function() {
        return _k;
    });
    var d = a('bGU5Z'),
        e = a('6dC6i'),
        f = a('VUuYN'),
        g = a('Hng+n'),
        h = a('8uXaE'),
        i = a('o5a27');
    const j = new Set(['opacity']);

    function _k(_l, m, {
        onUpdate: n,
        onComplete: o,
        ...p
    }) {
        if (!(h.supports.waapi() && j.has(m) && !p.repeatDelay && 'mirror' !== p.repeatType && 0 !== p.damping))
            return !1;
        let {
            keyframes: q,
            duration: r = 300,
            elapsed: s = 0,
            ease: t
        } = p;
        if ('spring' === p.type || !(0, g.isWaapiSupportedEasing)(p.ease)) {
            if (p.repeat === 1 / 0)
                return;
            const u = (0, e.animate)({
                ...p,
                elapsed: 0
            });
            let v = {
                done: !1,
                value: q[0]
            };
            const w = [];
            let x = 0;
            for (; !v.done && x < 20000;)
                v = u.sample(x), w.push(v.value), x += 10;
            q = w, r = x - 10, t = 'linear';
        }
        const u = (0, f.animateStyle)(_l.owner.current, m, q, {
            ...p,
            delay: -s,
            duration: r,
            ease: t
        });
        return u.onfinish = () => {
            _l.set((0, i.getFinalKeyframe)(q, p)), o && o();
        }, {
            get currentTime() {
                return u.currentTime || 0;
            },
            set currentTime(v) {
                u.currentTime = v;
            },
            stop: () => {
                const {
                    currentTime: v
                } = u;
                if (v) {
                    const w = (0, e.animate)({
                        ...p,
                        autoplay: !1
                    });
                    _l.setWithVelocity(w.sample(v - 10).value, w.sample(v).value, 10);
                }
                d.sync.update(() => u.cancel());
            }
        };
    }
}), a.register('6dC6i', function(b, c) {
    _k(b.exports, 'animate', function() {
        return _k;
    });
    var d = a('VC3gR'),
        e = a('y1h4o'),
        f = a('XzqD1'),
        g = a('bGU5Z'),
        h = a('vb5fo');
    const i = {
        decay: f.decay,
        keyframes: d.keyframes,
        tween: d.keyframes,
        spring: e.spring
    };

    function j(_k, l, m = 0) {
        return _k - l - m;
    }
    const j = _l => {
        const k = ({
            delta: l
        }) => _l(l);
        return {
            start: () => g.sync.update(l, !0),
            stop: () => g.cancelSync.update(l)
        };
    };

    function _k({
        duration: _l,
        driver: m = n,
        elapsed: o = 0,
        repeat: p = 0,
        repeatType: q = 'loop',
        repeatDelay: r = 0,
        keyframes: s,
        autoplay: t = !0,
        onPlay: u,
        onStop: v,
        onComplete: w,
        onRepeat: x,
        onUpdate: y,
        type: z = 'keyframes',
        ...A
    }) {
        var B, C;
        const D = o;
        let E, F, G = 0,
            H = _l,
            I = !1,
            J = !0;
        const K = i[s.length > 2 ? 'keyframes' : z] || d.keyframes,
            L = s[0],
            M = s[s.length - 1];
        let N = {
            done: !1,
            value: L
        };
        (null === (C = (B = K).needsInterpolation) || void 0 === C ? void 0 : C.call(B, L, M)) && (F = (0, h.interpolate)([
            0,
            100
        ], [
            L,
            M
        ], {
            clamp: !1
        }), s = [
            0,
            100
        ]);
        const O = K({
            ...A,
            duration: _l,
            keyframes: s
        });

        function P() {
            G++, 'reverse' === q ? (J = G % 2 == 0, o = function(Q, R = 0, S = 0, T = !0) {
                return T ? _o(R + -Q, R, S) : R - (Q - R) + S;
            }(o, H, r, J)) : (o = _o(o, H, r), 'mirror' === q && O.flipTarget()), I = !1, x && x();
        }

        function P(Q) {
            J || (Q = -Q), o += Q, I || (N = O.next(Math.max(0, o)), F && (N.value = F(N.value)), I = J ? N.done : o <= 0), y && y(N.value), I && (0 === G && (H = void 0 !== H ? H : o), G < p ? function(R, S, T, U) {
                return U ? R >= S + T : R <= -T;
            }(o, H, r, J) && _A() : (E && E.stop(), w && w()));
        }
        return t && (u && u(), E = m(_A), E.start()), {
            stop: () => {
                v && v(), E && E.stop();
            },
            set currentTime(P) {
                o = D, _A(P);
            },
            sample: m => {
                o = D;
                const P = _l && 'number' == typeof _l ? Math.max(0.5 * _l, 50) : 50;
                let Q = 0;
                for (_A(0); Q <= m;) {
                    const R = m - Q;
                    _A(Math.min(R, P)), Q += P;
                }
                return N;
            }
        };
    }
}), a.register('VC3gR', function(b, c) {
    _h(b.exports, 'keyframes', function() {
        return _g;
    });
    var d = a('hLflR'),
        e = a('vb5fo'),
        f = a('4G+zF');

    function _g({
        keyframes: _h,
        ease: i = d.easeInOut,
        times: j,
        duration: k = 300
    }) {
        _h = [..._h];
        const l = (0, f.isEasingArray)(i) ? i.map(f.easingDefinitionToFunction) : (0, f.easingDefinitionToFunction)(i),
            m = {
                done: !1,
                value: _h[0]
            },
            n = function(o, p) {
                return o.map(o => o * p);
            }(j && j.length === _h.length ? j : function(o) {
                const p = o.length;
                return o.map((o, j) => 0 !== j ? j / (p - 1) : 0);
            }(_h), k);

        function _o() {
            return (0, e.interpolate)(n, _h, {
                ease: Array.isArray(l) ? l : (i = _h, j = l, i.map(() => j || d.easeInOut).splice(0, i.length - 1))
            });
            var p, q;
        }
        let o = _j();
        return {
            next: _h => (m.value = o(_h), m.done = _h >= k, m),
            flipTarget: () => {
                _h.reverse(), o = _j();
            }
        };
    }
}), a.register('hLflR', function(b, c) {
    _n(b.exports, 'easeIn', function() {
        return _f;
    }), _n(b.exports, 'easeOut', function() {
        return _g;
    }), _n(b.exports, 'easeInOut', function() {
        return _h;
    });
    var d = a('Fnl87'),
        e = a('lJSh9');
    const _f = _n => _n * _n,
        _g = (0, e.reverseEasing)(_f),
        _h = (0, d.mirrorEasing)(_f);
}), a.register('Fnl87', function(b, c) {
    _n(b.exports, 'mirrorEasing', function() {
        return _d;
    });
    const _d = _n => b => b <= 0.5 ? _n(2 * b) / 2 : (2 - _n(2 * (1 - b))) / 2;
}), a.register('lJSh9', function(b, c) {
    _n(b.exports, 'reverseEasing', function() {
        return _d;
    });
    const _d = _n => b => 1 - _n(1 - b);
}), a.register('vb5fo', function(b, c) {
    _n(b.exports, 'interpolate', function() {
        return _m;
    });
    var d = a('t3uQw'),
        e = a('Ta3mW'),
        f = a('0fBPo'),
        g = a('V0v4j'),
        h = a('zzchV'),
        i = a('69j4O'),
        _j = a('yz8o3'),
        k = a('VmyBT');
    const l = (_n, b) => a => (0, g.mix)(_n, b, a);

    function m(_n, o, p) {
        const q = [],
            r = p || ('number' == typeof(f = _n[0]) ? l : 'string' == typeof f ? e.color.test(f) ? h.mixColor : i.mixComplex : Array.isArray(f) ? i.mixArray : 'object' == typeof f ? i.mixObject : l);
        var s;
        const t = _n.length - 1;
        for (let u = 0; u < t; u++) {
            let v = r(_n[u], _n[u + 1]);
            if (o) {
                const w = Array.isArray(o) ? o[u] : o;
                v = (0, _j.pipe)(w, v);
            }
            q.push(v);
        }
        return q;
    }

    function _m(n, o, {
        clamp: p = !0,
        ease: q,
        mixer: r
    } = {}) {
        const s = n.length;
        (0, d.invariant)(s === o.length, 'Both input and output ranges must be the same length'), (0, d.invariant)(!q || !Array.isArray(q) || q.length === s - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.'), n[0] > n[s - 1] && (n = [...n].reverse(), o = [...o].reverse());
        const t = _l(o, q, r),
            u = t.length,
            v = o => {
                let w = 0;
                if (u > 1)
                    for (; w < n.length - 2 && !(o < n[w + 1]); w++);
                const x = (0, k.progress)(n[w], n[w + 1], o);
                return t[w](x);
            };
        return p ? o => v((0, f.clamp)(n[0], n[s - 1], o)) : v;
    }
}), a.register('V0v4j', function(b, c) {
    _m(b.exports, 'mix', function() {
        return _d;
    });
    const _d = (_m, b, c) => -c * _m + c * b + _m;
}), a.register('zzchV', function(b, c) {
    _m(b.exports, 'mixColor', function() {
        return _l;
    });
    var d = a('V0v4j'),
        e = a('t3uQw'),
        f = a('UlEAr'),
        g = a('snZZX'),
        h = a('Ya/W+'),
        i = a('MrQ9F');
    const j = (_m, b, a) => {
            const k = _m * _m;
            return Math.sqrt(Math.max(0, a * (b * b - k) + k));
        },
        k = [
            g.hex,
            h.rgba,
            i.hsla
        ];

    function l(_m) {
        const n = (a = _m, k.find(_m => _m.test(a)));
        var o;
        (0, e.invariant)(Boolean(n), `'${ _m }' is not an animatable color. Use the equivalent color code instead.`);
        let p = n.parse(_m);
        return n === i.hsla && (p = (0, f.hslaToRgba)(p)), p;
    }
    const _l = (_e, b) => {
        const m = _k(_e),
            n = _k(b),
            o = {
                ...m
            };
        return _e => (o.red = j(m.red, n.red, _e), o.green = j(m.green, n.green, _e), o.blue = j(m.blue, n.blue, _e), o.alpha = (0, d.mix)(m.alpha, n.alpha, _e), h.rgba.transform(o));
    };
}), a.register('UlEAr', function(b, c) {
    function d(_e, f, g) {
        return g < 0 && (g += 1), g > 1 && (g -= 1), g < 1 / 6 ? _e + 6 * (f - _e) * g : g < 0.5 ? f : g < 2 / 3 ? _e + (f - _e) * (2 / 3 - g) * 6 : _e;
    }

    function d({
        hue: e,
        saturation: f,
        lightness: g,
        alpha: h
    }) {
        e /= 360, g /= 100;
        let i = 0,
            j = 0,
            k = 0;
        if (f /= 100) {
            const l = g < 0.5 ? g * (1 + f) : g + f - g * f,
                m = 2 * g - l;
            i = _c(m, l, e + 1 / 3), j = _c(m, l, e), k = _c(m, l, e - 1 / 3);
        } else
            i = j = k = g;
        return {
            red: Math.round(255 * i),
            green: Math.round(255 * j),
            blue: Math.round(255 * k),
            alpha: h
        };
    }
    _k(b.exports, 'hslaToRgba', function() {
        return _d;
    });
}), a.register('69j4O', function(b, _c) {
    _k(b.exports, 'mixComplex', function() {
        return _l;
    }), _k(b.exports, 'mixArray', function() {
        return _j;
    }), _k(b.exports, 'mixObject', function() {
        return _k;
    });
    var _d = a('V0v4j'),
        e = a('zzchV'),
        f = a('yz8o3'),
        g = a('t3uQw'),
        h = a('Ta3mW'),
        i = a('bzHq3');

    function j(_k, l) {
        return 'number' == typeof _k ? a => (0, _d.mix)(_k, l, a) : h.color.test(_k) ? (0, e.mixColor)(_k, l) : _l(_k, l);
    }
    const _j = (_g, b) => {
            const k = [..._g],
                l = k.length,
                m = _g.map((_g, k) => _j(_g, b[k]));
            return _g => {
                for (let n = 0; n < l; n++)
                    k[n] = m[n](_g);
                return k;
            };
        },
        _k = (_g, b) => {
            const l = {
                    ..._g,
                    ...b
                },
                m = {};
            for (const n in l)
                void 0 !== _g[n] && void 0 !== b[n] && (m[n] = _j(_g[n], b[n]));
            return _g => {
                for (const o in m)
                    l[o] = m[o](_g);
                return l;
            };
        },
        _l = (_g, b) => {
            const m = i.complex.createTransformer(b),
                n = (0, i.analyseComplexValue)(_g),
                o = (0, i.analyseComplexValue)(b);
            return n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? (0, f.pipe)(_j(n.values, o.values), m) : ((0, g.warning)(!0, `Complex values '${ _g }' and '${ b }' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), m => `${ m > 0 ? b : _g }`);
        };
}), a.register('VmyBT', function(b, c) {
    _g(b.exports, 'progress', function() {
        return _d;
    });
    const _d = (_g, b, c) => {
        const e = b - _g;
        return 0 === e ? 1 : (c - _g) / e;
    };
}), a.register('4G+zF', function(b, c) {
    _g(b.exports, 'easingDefinitionToFunction', function() {
        return _l;
    }), _g(b.exports, 'isEasingArray', function() {
        return _m;
    });
    var d = a('t3uQw'),
        e = a('p3izf'),
        f = a('9orVC'),
        g = a('hLflR'),
        h = a('yUhV8'),
        i = a('VZW6Y'),
        _j = a('6IQf/');
    const k = {
            linear: f.noop,
            easeIn: g.easeIn,
            easeInOut: g.easeInOut,
            easeOut: g.easeOut,
            circIn: h.circIn,
            circInOut: h.circInOut,
            circOut: h.circOut,
            backIn: i.backIn,
            backInOut: i.backInOut,
            backOut: i.backOut,
            anticipate: _j.anticipate
        },
        _l = _g => {
            if (Array.isArray(_g)) {
                (0, d.invariant)(4 === _g.length, 'Cubic bezier arrays must contain four numerical values.');
                const [m, n, o, p] = _g;
                return (0, e.cubicBezier)(m, n, o, p);
            }
            return 'string' == typeof _g ? ((0, d.invariant)(void 0 !== k[_g], `Invalid easing type '${ _g }'`), k[_g]) : _g;
        },
        _m = _g => Array.isArray(_g) && 'number' != typeof _g[0];
}), a.register('p3izf', function(b, c) {
    _g(b.exports, 'cubicBezier', function() {
        return _f;
    });
    var d = a('9orVC');
    const e = (_g, b, a) => (((1 - 3 * a + 3 * b) * _g + (3 * a - 6 * b)) * _g + 3 * b) * _g;

    function _f(_g, h, i, j) {
        if (_g === h && i === j)
            return d.noop;
        const k = h => function(l, m, n, o, p) {
            let q, r, s = 0;
            do {
                r = m + (n - m) / 2, q = e(r, o, p) - l, q > 0 ? n = r : m = r;
            } while (Math.abs(q) > 1e-7 && ++s < 12);
            return r;
        }(h, 0, 1, _g, i);
        return _g => 0 === _g || 1 === _g ? _g : e(k(_g), h, j);
    }
}), a.register('9orVC', function(b, c) {
    _i(b.exports, 'noop', function() {
        return _d;
    });
    const _d = _i => _i;
}), a.register('yUhV8', function(b, c) {
    _i(b.exports, 'circIn', function() {
        return _f;
    }), _i(b.exports, 'circOut', function() {
        return _g;
    }), _i(b.exports, 'circInOut', function() {
        return _h;
    });
    var d = a('Fnl87'),
        e = a('lJSh9');
    const _f = _i => 1 - Math.sin(Math.acos(_i)),
        _g = (0, e.reverseEasing)(_f),
        _h = (0, d.mirrorEasing)(_g);
}), a.register('VZW6Y', function(b, c) {
    _i(b.exports, 'backOut', function() {
        return _g;
    }), _i(b.exports, 'backIn', function() {
        return _h;
    }), _i(b.exports, 'backInOut', function() {
        return _i;
    });
    var d = a('p3izf'),
        e = a('Fnl87'),
        f = a('lJSh9');
    const _g = (0, d.cubicBezier)(0.33, 1.53, 0.69, 0.99),
        _h = (0, f.reverseEasing)(_g),
        _i = (0, e.mirrorEasing)(_h);
}), a.register('6IQf/', function(b, c) {
    _i(b.exports, 'anticipate', function() {
        return _e;
    });
    var d = a('VZW6Y');
    const _e = _i => (_i *= 2) < 1 ? 0.5 * (0, d.backIn)(_i) : 0.5 * (2 - Math.pow(2, -10 * (_i - 1)));
}), a.register('y1h4o', function(b, c) {
    _i(b.exports, 'spring', function() {
        return _h;
    });
    var d = a('NvFuJ'),
        e = a('bMMqa');
    const f = [
            'duration',
            'bounce'
        ],
        g = [
            'stiffness',
            'damping',
            'mass'
        ];

    function h(_i, j) {
        return j.some(j => void 0 !== _i[j]);
    }

    function _h({
        keyframes: i,
        restDelta: j,
        restSpeed: k,
        ...l
    }) {
        let m = i[0],
            n = i[i.length - 1];
        const o = {
                done: !1,
                value: m
            },
            {
                stiffness: p,
                damping: q,
                mass: r,
                velocity: s,
                duration: t,
                isResolvedFromDuration: u
            } = function(v) {
                let w = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...v
                };
                if (!_g(v, g) && _g(v, f)) {
                    const x = (0, d.findSpring)(v);
                    w = {
                        ...w,
                        ...x,
                        velocity: 0,
                        mass: 1
                    }, w.isResolvedFromDuration = !0;
                }
                return w;
            }(l);
        let v = _h,
            w = s ? -s / 1000 : 0;
        const x = q / (2 * Math.sqrt(p * r));

        function y() {
            const z = n - m,
                A = Math.sqrt(p / r) / 1000,
                B = Math.abs(z) < 5;
            if (k || (k = B ? 0.01 : 2), j || (j = B ? 0.005 : 0.5), x < 1) {
                const C = (0, d.calcAngularFreq)(A, x);
                v = k => {
                    const D = Math.exp(-x * A * k);
                    return n - D * ((w + x * A * z) / C * Math.sin(C * k) + z * Math.cos(C * k));
                };
            } else if (1 === x)
                v = j => n - Math.exp(-A * j) * (z + (w + A * z) * j);
            else {
                const C = A * Math.sqrt(x * x - 1);
                v = k => {
                    const D = Math.exp(-x * A * k),
                        E = Math.min(C * k, 300);
                    return n - D * ((w + x * A * z) * Math.sinh(E) + C * z * Math.cosh(E)) / C;
                };
            }
        }
        return _x(), {
            next: i => {
                const y = v(i);
                if (u)
                    o.done = i >= t;
                else {
                    let z = w;
                    if (0 !== i)
                        if (x < 1) {
                            const A = Math.max(0, i - 5);
                            z = (0, e.velocityPerSecond)(y - v(A), i - A);
                        } else
                            z = 0;
                    const A = Math.abs(z) <= k,
                        B = Math.abs(n - y) <= j;
                    o.done = A && B;
                }
                return o.value = o.done ? n : y, o;
            },
            flipTarget: () => {
                w = -w, [y, z] = [
                    z,
                    y
                ], _x();
            }
        };
    }
    _m.needsInterpolation = (_h, b) => 'string' == typeof _h || 'string' == typeof b;
    const _h = _h => 0;
}), a.register('NvFuJ', function(b, c) {
    _h(b.exports, 'findSpring', function() {
        return _g;
    }), _h(b.exports, 'calcAngularFreq', function() {
        return _g;
    });
    var d = a('t3uQw'),
        e = a('0fBPo');
    const f = 0.001;

    function _g({
        duration: _h = 800,
        bounce: i = 0.25,
        velocity: j = 0,
        mass: k = 1
    }) {
        let l, _m;
        (0, d.warning)(_h <= 10000, 'Spring duration must be 10 seconds or less');
        let n = 1 - i;
        n = (0, e.clamp)(0.05, 1, n), _h = (0, e.clamp)(0.01, 10, _h / 1000), n < 1 ? (l = i => {
            const o = i * n,
                p = o * _h,
                q = o - j,
                r = _g(i, n),
                s = Math.exp(-p);
            return f - q / r * s;
        }, _m = i => {
            const o = i * n * _h,
                p = o * j + j,
                q = Math.pow(n, 2) * Math.pow(i, 2) * _h,
                r = Math.exp(-o),
                s = _g(Math.pow(i, 2), n);
            return (-l(i) + f > 0 ? -1 : 1) * ((p - q) * r) / s;
        }) : (l = i => Math.exp(-i * _h) * ((i - j) * _h + 1) - 0.001, _m = i => Math.exp(-i * _h) * (_h * _h * (j - i)));
        const o = function(p, q, r) {
            let s = r;
            for (let t = 1; t < 12; t++)
                s -= p(s) / q(s);
            return s;
        }(l, _m, 5 / _h);
        if (_h *= 1000, isNaN(o))
            return {
                stiffness: 100,
                damping: 10,
                duration: _h
            };
        {
            const p = Math.pow(o, 2) * k;
            return {
                stiffness: p,
                damping: 2 * n * Math.sqrt(k * p),
                duration: _h
            };
        }
    }

    function _g(h, i) {
        return h * Math.sqrt(1 - i * i);
    }
}), a.register('XzqD1', function(b, c) {
    function d({
        keyframes: e = [0],
        velocity: f = 0,
        power: g = 0.8,
        timeConstant: h = 350,
        restDelta: i = 0.5,
        modifyTarget: j
    }) {
        const k = e[0],
            l = {
                done: !1,
                value: k
            };
        let m = g * f;
        const n = k + m,
            o = void 0 === j ? n : j(n);
        return o !== n && (m = o - k), {
            next: e => {
                const p = -m * Math.exp(-e / h);
                return l.done = !(p > i || p < -i), l.value = l.done ? o : o + p, l;
            },
            flipTarget: () => {}
        };
    }
    _f(b.exports, 'decay', function() {
        return _c;
    });
}), a.register('VUuYN', function(b, _c) {
    _f(b.exports, 'animateStyle', function() {
        return _e;
    });
    var d = a('Hng+n');

    function _e(_f, g, h, {
        delay: i = 0,
        duration: j,
        repeat: k = 0,
        repeatType: l = 'loop',
        ease: m,
        times: n
    } = {}) {
        return _f.animate({
            [g]: h,
            offset: n
        }, {
            delay: i,
            duration: j,
            easing: (0, d.mapEasingToNativeEasing)(m),
            fill: 'both',
            iterations: k + 1,
            direction: 'reverse' === l ? 'alternate' : 'normal'
        });
    }
}), a.register('Hng+n', function(b, c) {
    function d(e) {
        return !e || Array.isArray(e) || 'string' == typeof e && _i[e];
    }
    _e(b.exports, 'isWaapiSupportedEasing', function() {
        return _h;
    }), _e(b.exports, 'mapEasingToNativeEasing', function() {
        return _j;
    });
    const d = ([_e, f, g, _h]) => `cubic-bezier(${ _e }, ${ f }, ${ g }, ${ _h })`,
        _i = {
            linear: 'linear',
            ease: 'ease',
            easeIn: 'ease-in',
            easeOut: 'ease-out',
            easeInOut: 'ease-in-out',
            circIn: d([
                0,
                0.65,
                0.55,
                1
            ]),
            circOut: d([
                0.55,
                0,
                1,
                0.45
            ]),
            backIn: d([
                0.31,
                0.01,
                0.66,
                -0.59
            ]),
            backOut: d([
                0.33,
                1.53,
                0.69,
                0.99
            ])
        };

    function _j(k) {
        if (k)
            return Array.isArray(k) ? d(k) : _i[k];
    }
}), a.register('8uXaE', function(b, c) {
    _g(b.exports, 'supports', function() {
        return _f;
    });
    const d = {
            waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate')
        },
        e = {},
        _f = {};
    for (const _g in d)
        _f[_g] = () => (void 0 === e[_g] && (e[_g] = d[_g]()), e[_g]);
}), a.register('o5a27', function(b, c) {
    function d(e, {
        repeat: f,
        repeatType: g = 'loop'
    }) {
        return e[f && 'loop' !== g && f % 2 == 1 ? 0 : e.length - 1];
    }
    _f(b.exports, 'getFinalKeyframe', function() {
        return _c;
    });
}), a.register('NHiFx', function(b, _c) {
    _f(b.exports, 'createInstantAnimation', function() {
        return _e;
    });
    var d = a('PqBuc');

    function _e({
        keyframes: _f,
        elapsed: g,
        onUpdate: h,
        onComplete: i
    }) {
        const j = () => {
            h && h(_f[_f.length - 1]), i && i();
        };
        return g ? {
            stop: (0, d.delay)(j, -g)
        } : j();
    }
}), a.register('PqBuc', function(b, c) {
    _f(b.exports, 'delay', function() {
        return _e;
    });
    var d = a('bGU5Z');

    function _e(_f, g) {
        const h = performance.now(),
            i = ({
                timestamp: j
            }) => {
                const k = j - h;
                k >= g && (d.cancelSync.read(i), _f(k - g));
            };
        return d.sync.read(i, !0), () => d.cancelSync.read(i);
    }
}), a.register('ySonW', function(b, c) {
    _h(b.exports, 'inertia', function() {
        return _g;
    });
    var d = a('6dC6i'),
        e = a('bMMqa'),
        f = a('5umpH');

    function _g({
        keyframes: _h,
        velocity: i = 0,
        min: j,
        max: k,
        power: l = 0.8,
        timeConstant: m = 750,
        bounceStiffness: n = 500,
        bounceDamping: o = 10,
        restDelta: p = 1,
        modifyTarget: q,
        driver: r,
        onUpdate: s,
        onComplete: t,
        onStop: u
    }) {
        const v = _h[0];
        let w;

        function x(y) {
            return void 0 !== j && y < j || void 0 !== k && y > k;
        }

        function x(y) {
            return void 0 === j ? k : void 0 === k || Math.abs(j - y) < Math.abs(k - y) ? j : k;
        }

        function x(y) {
            null == w || w.stop(), w = (0, d.animate)({
                keyframes: [
                    0,
                    1
                ],
                velocity: 0,
                ...y,
                driver: r,
                onUpdate: i => {
                    var z;
                    null == s || s(i), null === (z = y.onUpdate) || void 0 === z || z.call(y, i);
                },
                onComplete: t,
                onStop: u
            });
        }

        function _x(y) {
            _u({
                type: 'spring',
                stiffness: n,
                damping: o,
                restDelta: p,
                ...y
            });
        }
        if (_s(v))
            _v({
                velocity: i,
                keyframes: [
                    v,
                    _t(v)
                ]
            });
        else {
            let x = l * i + v;
            void 0 !== q && (x = q(x));
            const y = _t(x),
                z = y === j ? -1 : 1;
            let A, B;
            const C = x => {
                A = B, B = x, i = (0, e.velocityPerSecond)(x - A, f.frameData.delta), (1 === z && x > y || -1 === z && x < y) && _v({
                    keyframes: [
                        x,
                        y
                    ],
                    velocity: i
                });
            };
            _u({
                type: 'decay',
                keyframes: [
                    v,
                    0
                ],
                velocity: i,
                timeConstant: m,
                power: l,
                restDelta: p,
                modifyTarget: q,
                onUpdate: _s(x) ? C : void 0
            });
        }
        return {
            stop: () => null == w ? void 0 : w.stop()
        };
    }
}), a.register('LDRSq', function(b, c) {
    _h(b.exports, 'getDefaultTransition', function() {
        return _i;
    });
    const d = () => ({
            type: 'spring',
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }),
        e = _h => ({
            type: 'spring',
            stiffness: 550,
            damping: 0 === _h ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        }),
        f = () => ({
            type: 'keyframes',
            ease: 'linear',
            duration: 0.3
        }),
        g = {
            type: 'keyframes',
            duration: 0.8
        },
        h = {
            x: d,
            y: d,
            z: d,
            rotate: d,
            rotateX: d,
            rotateY: d,
            rotateZ: d,
            scaleX: e,
            scaleY: e,
            scale: e,
            opacity: f,
            backgroundColor: f,
            color: f,
            default: e
        },
        _i = (_h, {
            keyframes: j
        }) => {
            if (j.length > 2)
                return g;
            return (h[_h] || h.default)(j[1]);
        };
}), a.register('cXqEd', function(b, c) {
    _h(b.exports, 'isAnimatable', function() {
        return _e;
    });
    var d = a('bzHq3');
    const _e = (_h, b) => 'zIndex' !== _h && (!('number' != typeof b && !Array.isArray(b)) || !('string' != typeof b || !d.complex.test(b) || b.startsWith('url(')));
}), a.register('uyM0U', function(b, c) {
    _h(b.exports, 'getKeyframes', function() {
        return _g;
    });
    var d = a('PWnNV'),
        e = a('cXqEd'),
        f = a('JraMW');

    function _g(_h, i, j, k) {
        const l = (0, e.isAnimatable)(i, j);
        let m = void 0 !== k.from ? k.from : _h.get();
        return 'none' === m && l && 'string' == typeof j ? m = (0, d.getAnimatableNone)(i, j) : (0, f.isZero)(m) && 'string' == typeof j ? m = (0, f.getZeroUnit)(j) : !Array.isArray(j) && (0, f.isZero)(j) && 'string' == typeof m && (j = (0, f.getZeroUnit)(m)), Array.isArray(j) ? (null === j[0] && (j[0] = m), j) : [
            m,
            j
        ];
    }
}), a.register('JraMW', function(b, c) {
    _f(b.exports, 'isTransitionDefined', function() {
        return _e;
    }), _f(b.exports, 'isZero', function() {
        return _l;
    }), _f(b.exports, 'getZeroUnit', function() {
        return _m;
    }), _f(b.exports, 'getValueTransition', function() {
        return _n;
    });
    var d = a('PWnNV');

    function _e({
        when: _f,
        delay: g,
        delayChildren: h,
        staggerChildren: i,
        staggerDirection: j,
        repeat: k,
        repeatType: _l,
        repeatDelay: _m,
        from: _n,
        elapsed: o,
        ...p
    }) {
        return !!Object.keys(p).length;
    }

    function e(f) {
        return 0 === f || 'string' == typeof f && 0 === parseFloat(f) && -1 === f.indexOf(' ');
    }

    function e(f) {
        return 'number' == typeof f ? 0 : (0, d.getAnimatableNone)('', f);
    }

    function e(f, g) {
        return f[g] || f.default || f;
    }
}), a.register('0wjX7', function(b, c) {
    _h(b.exports, 'drag', function() {
        return _g;
    });
    var d = a('YzZLf'),
        e = a('OJE1g'),
        f = a('RaUzi');
    const _g = {
        pan: (0, f.makeRenderlessComponent)(e.usePanGesture),
        drag: (0, f.makeRenderlessComponent)(d.useDrag)
    };
}), a.register('YzZLf', function(b, c) {
    _h(b.exports, 'useDrag', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('+paLR'),
        f = a('mk5EJ');

    function _g(_h) {
        const {
            dragControls: i,
            visualElement: j
        } = _h, k = (0, f.useConstant)(() => new(0, e.VisualElementDragControls)(j));
        (0, d.useEffect)(() => i && i.subscribe(k), [
            k,
            i
        ]), (0, d.useEffect)(() => k.addListeners(), [k]);
    }
}), a.register('+paLR', function(b, c) {
    _w(b.exports, 'VisualElementDragControls', function() {
        return _v;
    });
    var d = a('t3uQw'),
        e = a('+yxhM'),
        f = a('JvBgU'),
        g = a('HO4qX'),
        h = a('TrKgG'),
        i = a('jkhzy'),
        j = a('fUuad'),
        k = a('DDuaW'),
        l = a('zo9nd'),
        m = a('lpVzc'),
        n = a('RElBZ'),
        o = a('M5fRc'),
        p = a('s2HUL'),
        q = a('tJpLq'),
        r = a('V0v4j'),
        _s = a('QJEVi'),
        _t = a('LO9i0');
    const _u = new WeakMap();
    class _v {
        start(_w, {
            snapToCursor: x = !1
        } = {}) {
            if (!1 === this.visualElement.isPresent)
                return;
            this.panSession = new(0, e.PanSession)(_w, {
                onSessionStart: _w => {
                    this.stopAnimation(), x && this.snapToCursor((0, n.extractEventInfo)(_w, 'page').point);
                },
                onStart: (_w, x) => {
                    var y;
                    const {
                        drag: z,
                        dragPropagation: A,
                        onDragStart: B
                    } = this.getProps();
                    (!z || A || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = (0, f.getGlobalLock)(z), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), (0, l.eachAxis)(_w => {
                        var C, D;
                        let E = this.getAxisMotionValue(_w).get() || 0;
                        if (_s.percent.test(E)) {
                            const F = null === (D = null === (C = this.visualElement.projection) || void 0 === C ? void 0 : C.layout) || void 0 === D ? void 0 : D.layoutBox[_w];
                            if (F) {
                                E = (0, q.calcLength)(F) * (parseFloat(E) / 100);
                            }
                        }
                        this.originPoint[_w] = E;
                    }), null == B || B(_w, x), null === (y = this.visualElement.animationState) || void 0 === y || y.setActive(j.AnimationType.Drag, !0));
                },
                onMove: (_w, x) => {
                    const {
                        dragPropagation: y,
                        dragDirectionLock: z,
                        onDirectionLock: A,
                        onDrag: B
                    } = this.getProps();
                    if (!y && !this.openGlobalLock)
                        return;
                    const {
                        offset: C
                    } = x;
                    if (z && null === this.currentDirection)
                        return this.currentDirection = function(D, E = 10) {
                            let F = null;
                            Math.abs(D.y) > E ? F = 'y' : Math.abs(D.x) > E && (F = 'x');
                            return F;
                        }(C), void(null !== this.currentDirection && (null == A || A(this.currentDirection)));
                    this.updateAxis('x', x.point, C), this.updateAxis('y', x.point, C), this.visualElement.render(), null == B || B(_w, x);
                },
                onSessionEnd: (_w, x) => this.stop(_w, x)
            }, {
                transformPagePoint: this.visualElement.getTransformPagePoint()
            });
        }
        stop(w, x) {
            const y = this.isDragging;
            if (this.cancel(), !y)
                return;
            const {
                velocity: z
            } = x;
            this.startAnimation(z);
            const {
                onDragEnd: A
            } = this.getProps();
            null == A || A(w, x);
        }
        cancel() {
            var w, x;
            this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (w = this.panSession) || void 0 === w || w.end(), this.panSession = void 0;
            const {
                dragPropagation: y
            } = this.getProps();
            !y && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (x = this.visualElement.animationState) || void 0 === x || x.setActive(j.AnimationType.Drag, !1);
        }
        updateAxis(w, x, y) {
            const {
                drag: z
            } = this.getProps();
            if (!y || !_w(w, z, this.currentDirection))
                return;
            const A = this.getAxisMotionValue(w);
            let B = this.originPoint[w] + y[w];
            this.constraints && this.constraints[w] && (B = (0, i.applyConstraints)(B, this.constraints[w], this.elastic[w])), A.set(B);
        }
        resolveConstraints() {
            const {
                dragConstraints: w,
                dragElastic: x
            } = this.getProps(), {
                layout: y
            } = this.visualElement.projection || {}, z = this.constraints;
            w && (0, g.isRefObject)(w) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!w || !y) && (0, i.calcRelativeConstraints)(y.layoutBox, w), this.elastic = (0, i.resolveDragElastic)(x), z !== this.constraints && y && this.constraints && !this.hasMutatedConstraints && (0, l.eachAxis)(w => {
                this.getAxisMotionValue(w) && (this.constraints[w] = (0, i.rebaseAxisConstraints)(y.layoutBox[w], this.constraints[w]));
            });
        }
        resolveRefConstraints() {
            const {
                dragConstraints: w,
                onMeasureDragConstraints: x
            } = this.getProps();
            if (!w || !(0, g.isRefObject)(w))
                return !1;
            const y = w.current;
            (0, d.invariant)(null !== y, 'If `dragConstraints` is set as a React ref, that ref must be passed to another component\'s `ref` prop.');
            const {
                projection: z
            } = this.visualElement;
            if (!z || !z.layout)
                return !1;
            const A = (0, m.measurePageBox)(y, z.root, this.visualElement.getTransformPagePoint());
            let B = (0, i.calcViewportConstraints)(z.layout.layoutBox, A);
            if (x) {
                const C = x((0, o.convertBoxToBoundingBox)(B));
                this.hasMutatedConstraints = !!C, C && (B = (0, o.convertBoundingBoxToBox)(C));
            }
            return B;
        }
        startAnimation(w) {
            const {
                drag: x,
                dragMomentum: y,
                dragElastic: z,
                dragTransition: A,
                dragSnapToOrigin: B,
                onDragTransitionEnd: C
            } = this.getProps(), D = this.constraints || {}, E = (0, l.eachAxis)(C => {
                if (!_w(C, x, this.currentDirection))
                    return;
                let F = (null == D ? void 0 : D[C]) || {};
                B && (F = {
                    min: 0,
                    max: 0
                });
                const G = z ? 200 : 1000000,
                    H = z ? 40 : 10000000,
                    I = {
                        type: 'inertia',
                        velocity: y ? w[C] : 0,
                        bounceStiffness: G,
                        bounceDamping: H,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...A,
                        ...F
                    };
                return this.startAxisValueAnimation(C, I);
            });
            return Promise.all(E).then(C);
        }
        startAxisValueAnimation(w, x) {
            const y = this.getAxisMotionValue(w);
            return y.start((0, _t.createMotionValueAnimation)(w, y, 0, x));
        }
        stopAnimation() {
            (0, l.eachAxis)(_w => this.getAxisMotionValue(_w).stop());
        }
        getAxisMotionValue(_w) {
            var x;
            const y = '_drag' + _w.toUpperCase(),
                z = this.visualElement.getProps()[y];
            return z || this.visualElement.getValue(_w, (null === (x = this.visualElement.getProps().initial) || void 0 === x ? void 0 : x[_w]) || 0);
        }
        snapToCursor(w) {
            (0, l.eachAxis)(b => {
                const {
                    drag: x
                } = this.getProps();
                if (!_w(b, x, this.currentDirection))
                    return;
                const {
                    projection: y
                } = this.visualElement, z = this.getAxisMotionValue(b);
                if (y && y.layout) {
                    const {
                        min: A,
                        max: B
                    } = y.layout.layoutBox[b];
                    z.set(w[b] - (0, r.mix)(A, B, 0.5));
                }
            });
        }
        scalePositionWithinConstraints() {
            var w;
            if (!this.visualElement.current)
                return;
            const {
                drag: x,
                dragConstraints: y
            } = this.getProps(), {
                projection: z
            } = this.visualElement;
            if (!(0, g.isRefObject)(y) || !z || !this.constraints)
                return;
            this.stopAnimation();
            const A = {
                x: 0,
                y: 0
            };
            (0, l.eachAxis)(w => {
                const B = this.getAxisMotionValue(w);
                if (B) {
                    const C = B.get();
                    A[w] = (0, i.calcOrigin)({
                        min: C,
                        max: C
                    }, this.constraints[w]);
                }
            });
            const {
                transformTemplate: B
            } = this.visualElement.getProps();
            this.visualElement.current.style.transform = B ? B({}, '') : 'none', null === (w = z.root) || void 0 === w || w.updateScroll(), z.updateLayout(), this.resolveConstraints(), (0, l.eachAxis)(w => {
                if (!_w(w, x, null))
                    return;
                const C = this.getAxisMotionValue(w),
                    {
                        min: D,
                        max: E
                    } = this.constraints[w];
                C.set((0, r.mix)(D, E, A[w]));
            });
        }
        addListeners() {
            var w;
            if (!this.visualElement.current)
                return;
            _u.set(this.visualElement, this);
            const x = this.visualElement.current,
                y = (0, h.addPointerEvent)(x, 'pointerdown', w => {
                    const {
                        drag: z,
                        dragListener: A = !0
                    } = this.getProps();
                    z && A && this.start(w);
                }),
                z = () => {
                    const {
                        dragConstraints: A
                    } = this.getProps();
                    (0, g.isRefObject)(A) && (this.constraints = this.resolveRefConstraints());
                },
                {
                    projection: A
                } = this.visualElement,
                B = A.addEventListener('measure', z);
            A && !A.layout && (null === (w = A.root) || void 0 === w || w.updateScroll(), A.updateLayout()), z();
            const C = (0, p.addDomEvent)(window, 'resize', () => this.scalePositionWithinConstraints()),
                D = A.addEventListener('didUpdate', ({
                    delta: E,
                    hasLayoutChanged: F
                }) => {
                    this.isDragging && F && ((0, l.eachAxis)(F => {
                        const G = this.getAxisMotionValue(F);
                        G && (this.originPoint[F] += E[F].translate, G.set(G.get() + E[F].translate));
                    }), this.visualElement.render());
                });
            return () => {
                C(), y(), B(), null == D || D();
            };
        }
        getProps() {
            const w = this.visualElement.getProps(),
                {
                    drag: x = !1,
                    dragDirectionLock: y = !1,
                    dragPropagation: z = !1,
                    dragConstraints: A = !1,
                    dragElastic: B = i.defaultElastic,
                    dragMomentum: C = !0
                } = w;
            return {
                ...w,
                drag: x,
                dragDirectionLock: y,
                dragPropagation: z,
                dragConstraints: A,
                dragElastic: B,
                dragMomentum: C
            };
        }
        constructor(w) {
            this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                x: 0,
                y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, k.createBox)(), this.visualElement = w;
        }
    }

    function _w(x, y, z) {
        return !(!0 !== y && y !== x || null !== z && z !== x);
    }
}), a.register('+yxhM', function(b, c) {
    _m(b.exports, 'PanSession', function() {
        return _l;
    });
    var d = a('RElBZ'),
        e = a('bGU5Z'),
        f = a('Y/u17'),
        g = a('TrKgG'),
        h = a('yz8o3'),
        i = a('SasHo'),
        j = a('5umpH'),
        k = a('56zXf');
    class _l {
        updateHandlers(_m) {
            this.handlers = _m;
        }
        end() {
            this.removeListeners && this.removeListeners(), e.cancelSync.update(this.updatePoint);
        }
        constructor(m, n, {
            transformPagePoint: o
        } = {}) {
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                    if (!this.lastMoveEvent || !this.lastMoveEventInfo)
                        return;
                    const p = _m(this.lastMoveEventInfo, this.history),
                        q = null !== this.startEvent,
                        r = (0, i.distance2D)(p.offset, {
                            x: 0,
                            y: 0
                        }) >= 3;
                    if (!q && !r)
                        return;
                    const {
                        point: s
                    } = p, {
                        timestamp: t
                    } = j.frameData;
                    this.history.push({
                        ...s,
                        timestamp: t
                    });
                    const {
                        onStart: u,
                        onMove: v
                    } = this.handlers;
                    q || (u && u(this.lastMoveEvent, p), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, p);
                }, this.handlePointerMove = (m, n) => {
                    this.lastMoveEvent = m, this.lastMoveEventInfo = _m(n, this.transformPagePoint), e.sync.update(this.updatePoint, !0);
                }, this.handlePointerUp = (m, n) => {
                    if (this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo)
                        return;
                    const {
                        onEnd: p,
                        onSessionEnd: q
                    } = this.handlers, r = _m('pointercancel' === m.type ? this.lastMoveEventInfo : _m(n, this.transformPagePoint), this.history);
                    this.startEvent && p && p(m, r), q && q(m, r);
                }, !(0, k.isPrimaryPointer)(m))
                return;
            this.handlers = n, this.transformPagePoint = o;
            const p = _m((0, d.extractEventInfo)(m), this.transformPagePoint),
                {
                    point: q
                } = p,
                {
                    timestamp: r
                } = j.frameData;
            this.history = [{
                ...q,
                timestamp: r
            }];
            const {
                onSessionStart: s
            } = n;
            s && s(m, _m(p, this.history)), this.removeListeners = (0, h.pipe)((0, g.addPointerEvent)(window, 'pointermove', this.handlePointerMove), (0, g.addPointerEvent)(window, 'pointerup', this.handlePointerUp), (0, g.addPointerEvent)(window, 'pointercancel', this.handlePointerUp));
        }
    }

    function _m(n, o) {
        return o ? {
            point: o(n.point)
        } : n;
    }

    function m(n, o) {
        return {
            x: n.x - o.x,
            y: n.y - o.y
        };
    }

    function _m({
        point: n
    }, o) {
        return {
            point: n,
            delta: _h(n, _m(o)),
            offset: _h(n, _m(o)),
            velocity: _m(o, 0.1)
        };
    }

    function _m(n) {
        return n[0];
    }

    function _m(n) {
        return n[n.length - 1];
    }

    function _m(n, o) {
        if (n.length < 2)
            return {
                x: 0,
                y: 0
            };
        let p = n.length - 1,
            q = null;
        const r = _i(n);
        for (; p >= 0 && (q = n[p], !(r.timestamp - q.timestamp > (0, f.secondsToMilliseconds)(o)));)
            p--;
        if (!q)
            return {
                x: 0,
                y: 0
            };
        const s = (r.timestamp - q.timestamp) / 1000;
        if (0 === s)
            return {
                x: 0,
                y: 0
            };
        const t = {
            x: (r.x - q.x) / s,
            y: (r.y - q.y) / s
        };
        return t.x === 1 / 0 && (t.x = 0), t.y === 1 / 0 && (t.y = 0), t;
    }
}), a.register('SasHo', function(b, c) {
    _f(b.exports, 'distance2D', function() {
        return _e;
    });
    const d = (_f, b) => Math.abs(_f - b);

    function _e(_f, g) {
        const h = d(_f.x, g.x),
            i = d(_f.y, g.y);
        return Math.sqrt(h ** 2 + i ** 2);
    }
}), a.register('jkhzy', function(b, c) {
    _i(b.exports, 'applyConstraints', function() {
        return _h;
    }), _i(b.exports, 'calcRelativeConstraints', function() {
        return _h;
    }), _i(b.exports, 'calcViewportConstraints', function() {
        return _h;
    }), _i(b.exports, 'calcOrigin', function() {
        return _h;
    }), _i(b.exports, 'rebaseAxisConstraints', function() {
        return _h;
    }), _i(b.exports, 'defaultElastic', function() {
        return _h;
    }), _i(b.exports, 'resolveDragElastic', function() {
        return _i;
    });
    var d = a('VmyBT'),
        e = a('tJpLq'),
        f = a('0fBPo'),
        g = a('V0v4j');

    function _h(_i, {
        min: j,
        max: k
    }, l) {
        return void 0 !== j && _i < j ? _i = l ? (0, g.mix)(j, _i, l.min) : Math.max(_i, j) : void 0 !== k && _i > k && (_i = l ? (0, g.mix)(k, _i, l.max) : Math.min(_i, k)), _i;
    }

    function h(i, j, k) {
        return {
            min: void 0 !== j ? i.min + j : void 0,
            max: void 0 !== k ? i.max + k - (i.max - i.min) : void 0
        };
    }

    function _h(i, {
        top: j,
        left: k,
        bottom: l,
        right: m
    }) {
        return {
            x: _e(i.x, k, m),
            y: _e(i.y, j, l)
        };
    }

    function h(i, j) {
        let k = j.min - i.min,
            l = j.max - i.max;
        return j.max - j.min < i.max - i.min && ([m, n] = [
            n,
            m
        ]), {
            min: m,
            max: n
        };
    }

    function _h(i, j) {
        return {
            x: _e(i.x, j.x),
            y: _e(i.y, j.y)
        };
    }

    function _h(i, j) {
        let k = 0.5;
        const l = (0, e.calcLength)(i),
            m = (0, e.calcLength)(j);
        return m > l ? k = (0, d.progress)(j.min, j.max - l, i.min) : l > m && (k = (0, d.progress)(i.min, i.max - m, j.min)), (0, f.clamp)(0, 1, k);
    }

    function _h(i, j) {
        const k = {};
        return void 0 !== j.min && (k.min = j.min - i.min), void 0 !== j.max && (k.max = j.max - i.min), k;
    }
    const _h = 0.35;

    function _i(j = k) {
        return !1 === j ? j = 0 : !0 === j && (j = k), {
            x: _i(j, 'left', 'right'),
            y: _i(j, 'top', 'bottom')
        };
    }

    function _i(j, k, l) {
        return {
            min: _i(j, k),
            max: _i(j, l)
        };
    }

    function _i(j, k) {
        return 'number' == typeof j ? j : j[k] || 0;
    }
}), a.register('tJpLq', function(b, c) {
    _f(b.exports, 'calcLength', function() {
        return _e;
    }), _f(b.exports, 'isNear', function() {
        return _e;
    }), _f(b.exports, 'calcBoxDelta', function() {
        return _e;
    }), _f(b.exports, 'calcRelativeBox', function() {
        return _e;
    }), _f(b.exports, 'calcRelativePosition', function() {
        return _e;
    });
    var d = a('V0v4j');

    function _e(_f) {
        return _f.max - _f.min;
    }

    function _e(f, g = 0, h = 0.01) {
        return Math.abs(f - g) <= h;
    }

    function e(f, g, h, i = 0.5) {
        f.origin = i, f.originPoint = (0, d.mix)(g.min, g.max, f.origin), f.scale = _e(h) / _e(g), (_f(f.scale, 1, 0.0001) || isNaN(f.scale)) && (f.scale = 1), f.translate = (0, d.mix)(h.min, h.max, f.origin) - f.originPoint, (_f(f.translate) || isNaN(f.translate)) && (f.translate = 0);
    }

    function _e(f, g, h, i) {
        _f(f.x, g.x, h.x, null == i ? void 0 : i.originX), _f(f.y, g.y, h.y, null == i ? void 0 : i.originY);
    }

    function _e(f, g, h) {
        f.min = h.min + g.min, f.max = f.min + _e(g);
    }

    function _e(f, g, h) {
        _f(f.x, g.x, h.x), _f(f.y, g.y, h.y);
    }

    function _e(f, g, h) {
        f.min = g.min - h.min, f.max = f.min + _e(g);
    }

    function _e(f, g, h) {
        _p(f.x, g.x, h.x), _p(f.y, g.y, h.y);
    }
}), a.register('DDuaW', function(b, c) {
    _e(b.exports, 'createDelta', function() {
        return _d;
    }), _e(b.exports, 'createBox', function() {
        return _e;
    });
    const _d = () => ({
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
        _e = () => ({
            x: {
                min: 0,
                max: 0
            },
            y: {
                min: 0,
                max: 0
            }
        });
}), a.register('zo9nd', function(b, c) {
    function d(_e) {
        return [
            _e('x'),
            _e('y')
        ];
    }
    _g(b.exports, 'eachAxis', function() {
        return _c;
    });
}), a.register('lpVzc', function(b, _c) {
    _g(b.exports, 'measureViewportBox', function() {
        return _f;
    }), _g(b.exports, 'measurePageBox', function() {
        return _f;
    });
    var d = a('M5fRc'),
        _e = a('cq1zW');

    function _f(_g, h) {
        return (0, d.convertBoundingBoxToBox)((0, d.transformBoxPoints)(_g.getBoundingClientRect(), h));
    }

    function _f(g, h, i) {
        const j = _f(g, i),
            {
                scroll: k
            } = h;
        return k && ((0, _e.translateAxis)(j.x, k.offset.x), (0, _e.translateAxis)(j.y, k.offset.y)), j;
    }
}), a.register('M5fRc', function(b, c) {
    function d({
        top: e,
        left: f,
        right: g,
        bottom: h
    }) {
        return {
            x: {
                min: f,
                max: g
            },
            y: {
                min: e,
                max: h
            }
        };
    }

    function d({
        x: e,
        y: f
    }) {
        return {
            top: f.min,
            right: e.max,
            bottom: f.max,
            left: e.min
        };
    }

    function d(e, f) {
        if (!f)
            return e;
        const g = f({
                x: e.left,
                y: e.top
            }),
            h = f({
                x: e.right,
                y: e.bottom
            });
        return {
            top: g.y,
            left: g.x,
            bottom: h.y,
            right: h.x
        };
    }
    _g(b.exports, 'convertBoundingBoxToBox', function() {
        return _c;
    }), _g(b.exports, 'convertBoxToBoundingBox', function() {
        return _d;
    }), _g(b.exports, 'transformBoxPoints', function() {
        return _e;
    });
}), a.register('cq1zW', function(b, _c) {
    _g(b.exports, 'scalePoint', function() {
        return _f;
    }), _g(b.exports, 'applyBoxDelta', function() {
        return _f;
    }), _g(b.exports, 'applyTreeDeltas', function() {
        return _f;
    }), _g(b.exports, 'transformBox', function() {
        return _h;
    }), _g(b.exports, 'translateAxis', function() {
        return _f;
    });
    var _d = a('V0v4j'),
        _e = a('h7ozb');

    function _f(_g, h, i) {
        return i + h * (_g - i);
    }

    function f(g, h, i, j, k) {
        return void 0 !== k && (g = _l(g, k, j)), _l(g, i, j) + h;
    }

    function f(g, h = 0, i = 1, j, k) {
        g.min = _m(g.min, h, i, j, k), g.max = _m(g.max, h, i, j, k);
    }

    function _f(g, {
        x: h,
        y: i
    }) {
        _n(g.x, h.translate, h.scale, h.originPoint), _n(g.y, i.translate, i.scale, i.originPoint);
    }

    function _f(g, h, i, j = !1) {
        var k, _l;
        const _m = i.length;
        if (!_m)
            return;
        let _n, o;
        h.x = h.y = 1;
        for (let _p = 0; _p < _m; _p++)
            _n = i[_p], o = _n.projectionDelta, 'contents' !== (null === (_l = null === (k = _n.instance) || void 0 === k ? void 0 : k.style) || void 0 === _l ? void 0 : _l.display) && (j && _n.options.layoutScroll && _n.scroll && _n !== _n.root && _h(g, {
                x: -_n.scroll.offset.x,
                y: -_n.scroll.offset.y
            }), o && (h.x *= o.x.scale, h.y *= o.y.scale, _i(g, o)), j && (0, _e.hasTransform)(_n.latestValues) && _h(g, _n.latestValues));
        h.x = _p(h.x), h.y = _p(h.y);
    }

    function f(g) {
        return Number.isInteger(g) || g > 1.0000000000001 || g < 0.999999999999 ? g : 1;
    }

    function _f(g, h) {
        g.min = g.min + h, g.max = g.max + h;
    }

    function f(g, h, [i, j, k]) {
        const l = void 0 !== h[k] ? h[k] : 0.5,
            m = (0, _d.mix)(g.min, g.max, l);
        _h(g, h[i], h[j], m, h.scale);
    }
    const f = [
            'x',
            'scaleX',
            'originX'
        ],
        g = [
            'y',
            'scaleY',
            'originY'
        ];

    function _h(i, j) {
        _r(i.x, j, f), _r(i.y, j, g);
    }
}), a.register('h7ozb', function(b, c) {
    function d(e) {
        return void 0 === e || 1 === e;
    }

    function d({
        scale: e,
        scaleX: f,
        scaleY: g
    }) {
        return !_c(e) || !_c(f) || !_c(g);
    }

    function d(e) {
        return _d(e) || _d(e) || e.z || e.rotate || e.rotateX || e.rotateY;
    }

    function _d(e) {
        return _d(e.x) || _d(e.y);
    }

    function _d(e) {
        return e && '0%' !== e;
    }
    _j(b.exports, 'hasScale', function() {
        return _d;
    }), _j(b.exports, 'hasTransform', function() {
        return _e;
    }), _j(b.exports, 'has2DTranslate', function() {
        return _f;
    });
}), a.register('OJE1g', function(b, _c) {
    _j(b.exports, 'usePanGesture', function() {
        return _i;
    });
    var _d = a('LEQ5w'),
        _e = a('v1rLj'),
        _f = a('6qem0'),
        g = a('TrKgG'),
        _h = a('+yxhM');

    function _i({
        onPan: _j,
        onPanStart: k,
        onPanEnd: l,
        onPanSessionStart: m,
        visualElement: n
    }) {
        const o = _j || k || l || m,
            p = (0, _d.useRef)(null),
            {
                transformPagePoint: q
            } = (0, _d.useContext)(_e.MotionConfigContext),
            _r = {
                onSessionStart: m,
                onStart: k,
                onMove: _j,
                onEnd: (_j, k) => {
                    p.current = null, l && l(_j, k);
                }
            };
        (0, _d.useEffect)(() => {
            null !== p.current && p.current.updateHandlers(_r);
        }), (0, g.usePointerEvent)(n, 'pointerdown', o && function(s) {
            p.current = new(0, _h.PanSession)(s, _r, {
                transformPagePoint: q
            });
        }), (0, _f.useUnmountEffect)(() => p.current && p.current.end());
    }
}), a.register('otibr', function(b, c) {
    _n(b.exports, 'createDomVisualElement', function() {
        return _g;
    });
    var d = a('hxjv5'),
        e = a('x8+iP'),
        f = a('4jXtH');
    const _g = (_n, b) => (0, f.isSVGComponent)(_n) ? new(0, e.SVGVisualElement)(b, {
        enableHardwareAcceleration: !1
    }) : new(0, d.HTMLVisualElement)(b, {
        enableHardwareAcceleration: !0
    });
}), a.register('hxjv5', function(b, c) {
    _n(b.exports, 'HTMLVisualElement', function() {
        return _m;
    });
    var d = a('WFS9m'),
        e = a('mCG0O'),
        f = a('7PZBl'),
        g = a('N20hs'),
        h = a('ZjOMe'),
        i = a('/xMHo'),
        j = a('lpVzc'),
        k = a('Wae7y'),
        l = a('C2TrH');
    class _m extends k.DOMVisualElement {
        readValueFromInstance(_n, o) {
            if (f.transformProps.has(o)) {
                const p = (0, i.getDefaultValueType)(o);
                return p && p.default || 0;
            } {
                const p = (a = _n, window.getComputedStyle(a)),
                    q = ((0, e.isCSSVariable)(o) ? p.getPropertyValue(o) : p[o]) || 0;
                return 'string' == typeof q ? q.trim() : q;
            }
            var p;
        }
        measureInstanceViewportBox(n, {
            transformPagePoint: o
        }) {
            return (0, j.measureViewportBox)(n, o);
        }
        build(n, o, p, q) {
            (0, d.buildHTMLStyles)(n, o, p, q.transformTemplate);
        }
        scrapeMotionValuesFromProps(n, o) {
            return (0, g.scrapeMotionValuesFromProps)(n, o);
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            const {
                children: n
            } = this.props;
            (0, l.isMotionValue)(n) && (this.childSubscription = n.on('change', n => {
                this.current && (this.current.textContent = `${ n }`);
            }));
        }
        renderInstance(n, o, p, q) {
            (0, h.renderHTML)(n, o, p, q);
        }
    }
}), a.register('Wae7y', function(b, c) {
    _h(b.exports, 'DOMVisualElement', function() {
        return _g;
    });
    var d = a('Cq6Dd'),
        e = a('MsJgB'),
        f = a('aWKTh');
    class _g extends f.VisualElement {
        sortInstanceNodePosition(_h, i) {
            return 2 & _h.compareDocumentPosition(i) ? 1 : -1;
        }
        getBaseTargetFromProps(h, i) {
            var j;
            return null === (j = h.style) || void 0 === j ? void 0 : j[i];
        }
        removeValueFromRenderState(h, {
            vars: i,
            style: j
        }) {
            delete i[h], delete j[h];
        }
        makeTargetAnimatableFromInstance({
            transition: h,
            transitionEnd: i,
            ...j
        }, {
            transformValues: k
        }, l) {
            let m = (0, d.getOrigin)(j, h || {}, this);
            if (k && (i && (i = k(i)), j && (j = k(j)), m && (m = k(m))), l) {
                (0, d.checkTargetForNewValues)(this, j, m);
                const n = (0, e.parseDomVariant)(this, j, m, i);
                i = n.transitionEnd, j = n.target;
            }
            return {
                transition: h,
                transitionEnd: i,
                ...j
            };
        }
    }
}), a.register('MsJgB', function(b, c) {
    _f(b.exports, 'parseDomVariant', function() {
        return _f;
    });
    var d = a('TZPPW'),
        e = a('RTknu');
    const _f = (_f, b, a, c) => {
        const g = (0, d.resolveCSSVariables)(_f, b, c);
        return b = g.target, c = g.transitionEnd, (0, e.unitConversion)(_f, b, a, c);
    };
}), a.register('TZPPW', function(b, c) {
    _f(b.exports, 'cssVariableRegex', function() {
        return _e;
    }), _f(b.exports, 'resolveCSSVariables', function() {
        return _k;
    });
    var d = a('t3uQw');

    function e(_f) {
        return 'string' == typeof _f && _f.startsWith('var(--');
    }
    const _e = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

    function f(g, h, i = 1) {
        (0, d.invariant)(i <= 4, `Max CSS variable fallback depth detected in property "${ g }". This may indicate a circular fallback dependency.`);
        const [j, _k] = function(l) {
            const m = _e.exec(l);
            if (!m)
                return [, ];
            const [, n, o] = m;
            return [
                n,
                o
            ];
        }(g);
        if (!j)
            return;
        const l = window.getComputedStyle(h).getPropertyValue(j);
        return l ? l.trim() : _e(_k) ? f(_k, h, i + 1) : _k;
    }

    function f(g, {
        ...h
    }, i) {
        const j = g.current;
        if (!(j instanceof Element))
            return {
                target: h,
                transitionEnd: i
            };
        i && (i = {
            ...i
        }), g.values.forEach(g => {
            const k = g.get();
            if (!_e(k))
                return;
            const l = _g(k, j);
            l && g.set(l);
        });
        for (const k in h) {
            const l = h[k];
            if (!_e(l))
                continue;
            const m = _g(l, j);
            m && (h[k] = m, i && void 0 === i[k] && (i[k] = l));
        }
        return {
            target: h,
            transitionEnd: i
        };
    }
}), a.register('RTknu', function(b, c) {
    _v(b.exports, 'unitConversion', function() {
        return _K;
    });
    var d = a('S7EbY'),
        _e = a('t3uQw'),
        f = a('7PZBl'),
        _g = a('C+c3u'),
        h = a('qHL48'),
        i = a('kMJJk'),
        j = a('QJEVi');
    const k = new Set([
            'width',
            'height',
            'top',
            'left',
            'right',
            'bottom',
            'x',
            'y'
        ]),
        l = _v => k.has(_v),
        m = _v => _v === i.number || _v === j.px;
    var n, o;
    (o = n || (n = {})).width = 'width', o.height = 'height', o.left = 'left', o.right = 'right', o.top = 'top', o.bottom = 'bottom';
    const p = (_v, b) => parseFloat(_v.split(', ')[b]),
        q = (_v, b) => (a, {
            transform: r
        }) => {
            if ('none' === r || !r)
                return 0;
            const s = r.match(/^matrix3d\((.+)\)$/);
            if (s)
                return p(s[1], b);
            {
                const t = r.match(/^matrix\((.+)\)$/);
                return t ? p(t[1], _v) : 0;
            }
        },
        s = new Set([
            'x',
            'y',
            'z'
        ]),
        t = f.transformPropOrder.filter(_v => !s.has(_v));
    const u = {
            width: ({
                x: _v
            }, {
                paddingLeft: w = '0',
                paddingRight: x = '0'
            }) => _v.max - _v.min - parseFloat(w) - parseFloat(x),
            height: ({
                y: y
            }, {
                paddingTop: z = '0',
                paddingBottom: A = '0'
            }) => y.max - y.min - parseFloat(z) - parseFloat(A),
            top: (y, {
                top: B
            }) => parseFloat(B),
            left: (y, {
                left: C
            }) => parseFloat(C),
            bottom: ({
                y: D
            }, {
                top: E
            }) => parseFloat(E) + (D.max - D.min),
            right: ({
                x: F
            }, {
                left: G
            }) => parseFloat(G) + (F.max - F.min),
            x: q(4, 13),
            y: q(5, 14)
        },
        H = (F, G, I = {}, J = {}) => {
            G = {
                ...G
            }, J = {
                ...J
            };
            const K = Object.keys(G).filter(l);
            let L = [],
                M = !1;
            const N = [];
            if (K.forEach(K => {
                    const O = F.getValue(K);
                    if (!F.hasValue(K))
                        return;
                    let P = I[K],
                        Q = (0, _g.findDimensionValueType)(P);
                    const R = G[K];
                    let S;
                    if ((0, d.isKeyframesTarget)(R)) {
                        const T = R.length,
                            U = null === R[0] ? 1 : 0;
                        P = R[U], Q = (0, _g.findDimensionValueType)(P);
                        for (let V = U; V < T; V++)
                            S ? (0, _e.invariant)((0, _g.findDimensionValueType)(R[V]) === S, 'All keyframes must be of the same type') : (S = (0, _g.findDimensionValueType)(R[V]), (0, _e.invariant)(S === Q || m(Q) && m(S), 'Keyframes must be of the same dimension as the current value'));
                    } else
                        S = (0, _g.findDimensionValueType)(R);
                    if (Q !== S)
                        if (m(Q) && m(S)) {
                            const T = O.get();
                            'string' == typeof T && O.set(parseFloat(T)), 'string' == typeof R ? G[K] = parseFloat(R) : Array.isArray(R) && S === j.px && (G[K] = R.map(parseFloat));
                        } else
                            (null == Q ? void 0 : Q.transform) && (null == S ? void 0 : S.transform) && (0 === P || 0 === R) ? 0 === P ? O.set(S.transform(P)) : G[K] = Q.transform(R) : (M || (L = function(T) {
                                const U = [];
                                return t.forEach(I => {
                                    const V = T.getValue(I);
                                    void 0 !== V && (U.push([
                                        I,
                                        V.get()
                                    ]), V.set(I.startsWith('scale') ? 1 : 0));
                                }), U.length && T.render(), U;
                            }(F), M = !0), N.push(K), J[K] = void 0 !== J[K] ? J[K] : G[K], O.jump(R));
                }), N.length) {
                const O = N.indexOf('height') >= 0 ? window.pageYOffset : null,
                    P = ((F, G, O) => {
                        const Q = G.measureViewportBox(),
                            R = G.current,
                            S = getComputedStyle(R),
                            {
                                display: T
                            } = S,
                            U = {};
                        'none' === T && G.setStaticValue('display', F.display || 'block'), O.forEach(F => {
                            U[F] = u[F](Q, S);
                        }), G.render();
                        const V = G.measureViewportBox();
                        return O.forEach(O => {
                            const W = G.getValue(O);
                            W && W.jump(U[O]), F[O] = u[O](V, S);
                        }), F;
                    })(G, F, N);
                return L.length && L.forEach(([Q, R]) => {
                    F.getValue(Q).set(R);
                }), F.render(), h.isBrowser && null !== R && window.scrollTo({
                    top: R
                }), {
                    target: P,
                    transitionEnd: J
                };
            }
            return {
                target: G,
                transitionEnd: J
            };
        };

    function _K(L, M, N, O) {
        return (L => Object.keys(L).some(l))(M) ? H(L, M, N, O) : {
            target: M,
            transitionEnd: O
        };
    }
}), a.register('aWKTh', function(b, c) {
    _y(b.exports, 'VisualElement', function() {
        return _x;
    });
    var d = a('bGU5Z');
    a('t3uQw');
    var e = a('LEQ5w'),
        f = a('pcj8H'),
        g = a('DDuaW'),
        h = a('HO4qX'),
        i = a('YpO3F'),
        j = a('GxLjn'),
        k = a('bCV3Z'),
        l = a('dssd5'),
        m = a('3+t5y'),
        n = a('C2TrH'),
        o = a('7PZBl'),
        p = a('GE6bk'),
        q = a('m41Qf'),
        r = a('ab59j'),
        s = a('1jMeS'),
        t = a('5lhmK');
    const u = Object.keys(f.featureDefinitions),
        v = u.length,
        w = [
            'AnimationStart',
            'AnimationComplete',
            'Update',
            'BeforeLayoutMeasure',
            'LayoutMeasure',
            'LayoutAnimationStart',
            'LayoutAnimationComplete'
        ];
    class _x {
        scrapeMotionValuesFromProps(_y, z) {
            return {};
        }
        mount(y) {
            var z;
            this.current = y, this.projection && this.projection.mount(y), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (z = this.parent) || void 0 === z ? void 0 : z.addVariantChild(this)), this.values.forEach((y, z) => this.bindToMotionValue(z, y)), j.hasReducedMotionListener.current || (0, i.initPrefersReducedMotion)(), this.shouldReduceMotion = 'never' !== this.reducedMotionConfig && ('always' === this.reducedMotionConfig || j.prefersReducedMotion.current), this.parent && this.parent.children.add(this), this.setProps(this.props);
        }
        unmount() {
            var y, z, A;
            null === (y = this.projection) || void 0 === y || y.unmount(), d.cancelSync.update(this.notifyUpdate), d.cancelSync.render(this.render), this.valueSubscriptions.forEach(y => y()), null === (z = this.removeFromVariantTree) || void 0 === z || z.call(this), null === (A = this.parent) || void 0 === A || A.children.delete(this);
            for (const B in this.events)
                this.events[B].clear();
            this.current = null;
        }
        bindToMotionValue(y, z) {
            const A = o.transformProps.has(y),
                B = z.on('change', z => {
                    this.latestValues[y] = z, this.props.onUpdate && d.sync.update(this.notifyUpdate, !1, !0), A && this.projection && (this.projection.isTransformDirty = !0);
                }),
                C = z.on('renderRequest', this.scheduleRender);
            this.valueSubscriptions.set(y, () => {
                B(), C();
            });
        }
        sortNodePosition(y) {
            return this.current && this.sortInstanceNodePosition && this.type === y.type ? this.sortInstanceNodePosition(this.current, y.current) : 0;
        }
        loadFeatures({
            children: y,
            ...z
        }, A, B, C, D, E) {
            const F = [];
            for (let G = 0; G < v; G++) {
                const H = u[G],
                    {
                        isEnabled: I,
                        Component: J
                    } = f.featureDefinitions[H];
                I(z) && J && F.push((0, e.createElement)(J, {
                    key: H,
                    ...z,
                    visualElement: this
                }));
            }
            if (!this.projection && D) {
                this.projection = new D(C, this.latestValues, this.parent && this.parent.projection);
                const {
                    layoutId: H,
                    layout: I,
                    drag: J,
                    dragConstraints: K,
                    layoutScroll: L,
                    layoutRoot: M
                } = z;
                this.projection.setOptions({
                    layoutId: H,
                    layout: I,
                    alwaysMeasureLayout: Boolean(J) || K && (0, h.isRefObject)(K),
                    visualElement: this,
                    scheduleRender: () => this.scheduleRender(),
                    animationType: 'string' == typeof I ? I : 'both',
                    initialPromotionConfig: E,
                    layoutScroll: L,
                    layoutRoot: M
                });
            }
            return F;
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.options, this.props);
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, g.createBox)();
        }
        getStaticValue(y) {
            return this.latestValues[y];
        }
        setStaticValue(y, z) {
            this.latestValues[y] = z;
        }
        makeTargetAnimatable(y, z = !0) {
            return this.makeTargetAnimatableFromInstance(y, this.props, z);
        }
        setProps(y) {
            (y.transformTemplate || this.props.transformTemplate) && this.scheduleRender();
            const z = this.props;
            this.props = y;
            for (let A = 0; A < w.length; A++) {
                const B = w[A];
                this.propEventSubscriptions[B] && (this.propEventSubscriptions[B](), delete this.propEventSubscriptions[B]);
                const C = y['on' + B];
                C && (this.propEventSubscriptions[B] = this.on(B, C));
            }
            this.prevMotionValues = (0, s.updateMotionValuesFromProps)(this, this.scrapeMotionValuesFromProps(y, A), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
            return this.props;
        }
        getVariant(y) {
            var z;
            return null === (z = this.props.variants) || void 0 === z ? void 0 : z[y];
        }
        getDefaultTransition() {
            return this.props.transition;
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
            var y;
            return this.isVariantNode ? this : null === (y = this.parent) || void 0 === y ? void 0 : y.getClosestVariantNode();
        }
        getVariantContext(y = !1) {
            var z, A;
            if (y)
                return null === (z = this.parent) || void 0 === z ? void 0 : z.getVariantContext();
            if (!this.isControllingVariants) {
                const B = (null === (A = this.parent) || void 0 === A ? void 0 : A.getVariantContext()) || {};
                return void 0 !== this.props.initial && (B.initial = this.props.initial), B;
            }
            const B = {};
            for (let C = 0; C < _z; C++) {
                const D = _y[C],
                    E = this.props[D];
                ((0, r.isVariantLabel)(E) || !1 === E) && (B[D] = E);
            }
            return B;
        }
        addVariantChild(y) {
            var z;
            const A = this.getClosestVariantNode();
            if (A)
                return null === (z = A.variantChildren) || void 0 === z || z.add(y), () => A.variantChildren.delete(y);
        }
        addValue(y, z) {
            z !== this.values.get(y) && (this.removeValue(y), this.bindToMotionValue(y, z)), this.values.set(y, z), this.latestValues[y] = z.get();
        }
        removeValue(y) {
            var z;
            this.values.delete(y), null === (z = this.valueSubscriptions.get(y)) || void 0 === z || z(), this.valueSubscriptions.delete(y), delete this.latestValues[y], this.removeValueFromRenderState(y, this.renderState);
        }
        hasValue(y) {
            return this.values.has(y);
        }
        getValue(y, z) {
            if (this.props.values && this.props.values[y])
                return this.props.values[y];
            let A = this.values.get(y);
            return void 0 === A && void 0 !== z && (A = (0, l.motionValue)(z, {
                owner: this
            }), this.addValue(y, A)), A;
        }
        readValue(y) {
            return void 0 === this.latestValues[y] && this.current ? this.readValueFromInstance(this.current, y, this.options) : this.latestValues[y];
        }
        setBaseTarget(y, z) {
            this.baseTarget[y] = z;
        }
        getBaseTarget(y) {
            var z;
            const {
                initial: A
            } = this.props, B = 'string' == typeof A || 'object' == typeof A ? null === (z = (0, t.resolveVariantFromProps)(this.props, A)) || void 0 === z ? void 0 : z[y] : void 0;
            if (A && void 0 !== B)
                return B;
            const C = this.getBaseTargetFromProps(this.props, y);
            return void 0 === C || (0, n.isMotionValue)(C) ? void 0 !== this.initialValues[y] && void 0 === B ? void 0 : this.baseTarget[y] : C;
        }
        on(y, z) {
            return this.events[y] || (this.events[y] = new(0, k.SubscriptionManager)()), this.events[y].add(z);
        }
        notify(y, ...b) {
            var z;
            null === (z = this.events[y]) || void 0 === z || z.notify(...b);
        }
        constructor({
            parent: y,
            props: z,
            reducedMotionConfig: A,
            visualState: B
        }, C = {}) {
            this.current = null, this.children = new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map(), this.isPresent = !0, this.valueSubscriptions = new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify('Update', this.latestValues), this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
            }, this.scheduleRender = () => d.sync.render(this.render, !1, !0);
            const {
                latestValues: D,
                renderState: E
            } = B;
            this.latestValues = D, this.baseTarget = {
                ...D
            }, this.initialValues = z.initial ? {
                ...D
            } : {}, this.renderState = E, this.parent = y, this.props = z, this.depth = y ? y.depth + 1 : 0, this.reducedMotionConfig = A, this.options = C, this.isControllingVariants = (0, q.isControllingVariants)(z), this.isVariantNode = (0, q.isVariantNode)(z), this.isVariantNode && (this.variantChildren = new Set()), this.manuallyAnimateOnMount = Boolean(y && y.current);
            const {
                willChange: F,
                ...G
            } = this.scrapeMotionValuesFromProps(z, {});
            for (const H in G) {
                const I = G[H];
                void 0 !== D[H] && (0, n.isMotionValue)(I) && (I.set(D[H], !1), (0, m.isWillChangeMotionValue)(F) && F.add(H));
            }
        }
    }
    const _y = [
            'initial',
            ...p.variantPriorityOrder
        ],
        _z = _y.length;
}), a.register('YpO3F', function(b, c) {
    _g(b.exports, 'initPrefersReducedMotion', function() {
        return _f;
    });
    var d = a('qHL48'),
        e = a('GxLjn');

    function _f() {
        if (e.hasReducedMotionListener.current = !0, d.isBrowser)
            if (window.matchMedia) {
                const _g = window.matchMedia('(prefers-reduced-motion)'),
                    h = () => e.prefersReducedMotion.current = _g.matches;
                _g.addListener(h), h();
            } else
                e.prefersReducedMotion.current = !1;
    }
}), a.register('GxLjn', function(b, c) {
    _h(b.exports, 'prefersReducedMotion', function() {
        return _d;
    }), _h(b.exports, 'hasReducedMotionListener', function() {
        return _e;
    });
    const _d = {
            current: null
        },
        _e = {
            current: !1
        };
}), a.register('1jMeS', function(b, c) {
    _h(b.exports, 'updateMotionValuesFromProps', function() {
        return _g;
    });
    var d = a('3+t5y'),
        e = a('dssd5'),
        f = a('C2TrH');

    function _g(_h, i, j) {
        const {
            willChange: k
        } = i;
        for (const l in i) {
            const m = i[l],
                n = j[l];
            if ((0, f.isMotionValue)(m))
                _h.addValue(l, m), (0, d.isWillChangeMotionValue)(k) && k.add(l);
            else if ((0, f.isMotionValue)(n))
                _h.addValue(l, (0, e.motionValue)(m, {
                    owner: _h
                })), (0, d.isWillChangeMotionValue)(k) && k.remove(l);
            else if (n !== m)
                if (_h.hasValue(l)) {
                    const o = _h.getValue(l);
                    !o.hasAnimated && o.set(m);
                } else {
                    const o = _h.getStaticValue(l);
                    _h.addValue(l, (0, e.motionValue)(void 0 !== o ? o : m, {
                        owner: _h
                    }));
                }
        }
        for (const m in j)
            void 0 === i[m] && _h.removeValue(m);
        return i;
    }
}), a.register('x8+iP', function(b, c) {
    _o(b.exports, 'SVGVisualElement', function() {
        return _n;
    });
    var d = a('pOQ3J'),
        e = a('Wae7y'),
        f = a('rDnRx'),
        g = a('JcCk6'),
        h = a('/X+QF'),
        i = a('7PZBl'),
        j = a('c80RH'),
        k = a('/xMHo'),
        l = a('DDuaW'),
        m = a('o8/0J');
    class _n extends e.DOMVisualElement {
        getBaseTargetFromProps(_o, p) {
            return _o[p];
        }
        readValueFromInstance(o, p) {
            var q;
            return i.transformProps.has(p) ? (null === (q = (0, k.getDefaultValueType)(p)) || void 0 === q ? void 0 : q.default) || 0 : (p = h.camelCaseAttributes.has(p) ? p : (0, g.camelToDash)(p), o.getAttribute(p));
        }
        measureInstanceViewportBox() {
            return (0, l.createBox)();
        }
        scrapeMotionValuesFromProps(o, p) {
            return (0, d.scrapeMotionValuesFromProps)(o, p);
        }
        build(o, p, q, r) {
            (0, f.buildSVGAttrs)(o, p, q, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(o, p, q, r) {
            (0, j.renderSVG)(o, p, q, r);
        }
        mount(o) {
            this.isSVGTag = (0, m.isSVGTag)(o.tagName), super.mount(o);
        }
        constructor() {
            super(...arguments), this.isSVGTag = !1;
        }
    }
}), a.register('c9U3V', function(b, c) {
    _n(b.exports, 'layoutFeatures', function() {
        return _d;
    });
    const _d = {
        measureLayout: a('6+bdg').MeasureLayout
    };
}), a.register('6+bdg', function(b, c) {
    _n(b.exports, 'MeasureLayout', function() {
        return _n;
    });
    var d = a('bGU5Z'),
        e = a('LEQ5w'),
        f = a('FytBL'),
        g = a('OelFa'),
        h = a('LKtGq'),
        i = a('sZKWT'),
        j = a('ZAAzn'),
        k = a('N3Nsc'),
        l = a('WAwCf');
    class m extends _o(e).Component {
        componentDidMount() {
            const {
                visualElement: _n,
                layoutGroup: _o,
                switchLayoutGroup: p,
                layoutId: q
            } = this.props, {
                projection: r
            } = _n;
            (0, l.addScaleCorrector)(_n), r && (_o.group && _o.group.add(r), p && p.register && q && p.register(r), r.root.didUpdate(), r.addEventListener('animationComplete', () => {
                this.safeToRemove();
            }), r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove()
            })), i.globalProjectionState.hasEverUpdated = !0;
        }
        getSnapshotBeforeUpdate(n) {
            const {
                layoutDependency: o,
                visualElement: p,
                drag: q,
                isPresent: r
            } = this.props, s = p.projection;
            return s ? (s.isPresent = r, q || n.layoutDependency !== o || void 0 === o ? s.willUpdate() : this.safeToRemove(), n.isPresent !== r && (r ? s.promote() : s.relegate() || d.sync.postRender(() => {
                var t;
                (null === (t = s.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove();
            })), null) : null;
        }
        componentDidUpdate() {
            const {
                projection: n
            } = this.props.visualElement;
            n && (n.root.didUpdate(), !n.currentAnimation && n.isLead() && this.safeToRemove());
        }
        componentWillUnmount() {
            const {
                visualElement: n,
                layoutGroup: o,
                switchLayoutGroup: p
            } = this.props, {
                projection: q
            } = n;
            q && (q.scheduleCheckAfterUnmount(), (null == o ? void 0 : o.group) && o.group.remove(q), (null == p ? void 0 : p.deregister) && p.deregister(q));
        }
        safeToRemove() {
            const {
                safeToRemove: n
            } = this.props;
            null == n || n();
        }
        render() {
            return null;
        }
    }

    function _n(o) {
        const [p, q] = (0, f.usePresence)(), r = (0, e.useContext)(g.LayoutGroupContext);
        return _b(e).createElement(m, {
            ...o,
            layoutGroup: r,
            switchLayoutGroup: (0, e.useContext)(h.SwitchLayoutGroupContext),
            isPresent: p,
            safeToRemove: q
        });
    }
    const _n = {
        borderRadius: {
            ...j.correctBorderRadius,
            applyTo: [
                'borderTopLeftRadius',
                'borderTopRightRadius',
                'borderBottomLeftRadius',
                'borderBottomRightRadius'
            ]
        },
        borderTopLeftRadius: j.correctBorderRadius,
        borderTopRightRadius: j.correctBorderRadius,
        borderBottomLeftRadius: j.correctBorderRadius,
        borderBottomRightRadius: j.correctBorderRadius,
        boxShadow: k.correctBoxShadow
    };
}), a.register('ZAAzn', function(_b, c) {
    _f(_b.exports, 'correctBorderRadius', function() {
        return _e;
    });
    var d = a('QJEVi');

    function e(_f, g) {
        return g.max === g.min ? 0 : _f / (g.max - g.min) * 100;
    }
    const _e = {
        correct: (_u, _b) => {
            if (!_b.target)
                return _u;
            if ('string' == typeof _u) {
                if (!d.px.test(_u))
                    return _u;
                _u = parseFloat(_u);
            }
            return `${ _e(_u, _b.target.x) }% ${ _e(_u, _b.target.y) }%`;
        }
    };
}), a.register('N3Nsc', function(b, c) {
    _u(b.exports, 'correctBoxShadow', function() {
        return _h;
    });
    var d = a('TZPPW'),
        _e = a('V0v4j'),
        f = a('bzHq3');
    const g = '_$css',
        _h = {
            correct: (_u, {
                treeScale: i,
                projectionDelta: j
            }) => {
                const k = _u,
                    l = _u.includes('var('),
                    m = [];
                l && (_u = _u.replace(d.cssVariableRegex, _u => (m.push(_u), g)));
                const n = f.complex.parse(_u);
                if (n.length > 5)
                    return k;
                const o = f.complex.createTransformer(_u),
                    p = 'number' != typeof n[0] ? 1 : 0,
                    q = j.x.scale * i.x,
                    r = j.y.scale * i.y;
                n[0 + p] /= q, n[1 + p] /= r;
                const s = (0, _e.mix)(q, r, 0.5);
                'number' == typeof n[2 + p] && (n[2 + p] /= s), 'number' == typeof n[3 + p] && (n[3 + p] /= s);
                let t = o(n);
                if (l) {
                    let _u = 0;
                    t = t.replace(g, () => {
                        const v = m[_u];
                        return _u++, v;
                    });
                }
                return t;
            }
        };
}), a.register('0Pplj', function(b, c) {
    _h(b.exports, 'HTMLProjectionNode', function() {
        return _g;
    });
    var d = a('nsSFZ'),
        e = a('5Tvuu');
    const f = {
            current: void 0
        },
        _g = (0, d.createProjectionNode)({
            measureScroll: _h => ({
                x: _h.scrollLeft,
                y: _h.scrollTop
            }),
            defaultParent: () => {
                if (!f.current) {
                    const _h = new(0, e.DocumentProjectionNode)(0, {});
                    _h.mount(window), _h.setOptions({
                        layoutScroll: !0
                    }), f.current = _h;
                }
                return f.current;
            },
            resetTransform: (_B, b) => {
                _B.style.transform = void 0 !== b ? b : 'none';
            },
            checkIsScrollRoot: _B => Boolean('fixed' === window.getComputedStyle(_B).position)
        });
}), a.register('nsSFZ', function(b, c) {
    _B(b.exports, 'createProjectionNode', function() {
        return _A;
    });
    var d = a('bGU5Z'),
        e = a('Lwb9P'),
        f = a('bCV3Z'),
        g = a('N4/ra'),
        h = a('319/5'),
        i = a('cq1zW'),
        j = a('tJpLq'),
        k = a('AbM9T'),
        l = a('DDuaW'),
        m = a('JraMW'),
        n = a('1OsXk'),
        o = a('i31a5'),
        p = a('WAwCf'),
        q = a('t3pNS'),
        r = a('zo9nd'),
        s = a('h7ozb'),
        t = a('LFNiN'),
        u = a('DYacx'),
        v = a('sZKWT'),
        w = a('PqBuc'),
        x = a('V0v4j');
    const y = [
        '',
        'X',
        'Y',
        'Z'
    ];
    let z = 0;

    function _A({
        attachResizeListener: _B,
        defaultParent: C,
        measureScroll: D,
        checkIsScrollRoot: E,
        resetTransform: F
    }) {
        return class {
            addEventListener(G, H) {
                return this.eventHandlers.has(G) || this.eventHandlers.set(G, new(0, f.SubscriptionManager)()), this.eventHandlers.get(G).add(H);
            }
            notifyListeners(G, ...C) {
                const H = this.eventHandlers.get(G);
                null == H || H.notify(...C);
            }
            hasListeners(G) {
                return this.eventHandlers.has(G);
            }
            registerPotentialNode(G, H) {
                this.potentialNodes.set(G, H);
            }
            mount(G, H = !1) {
                var I;
                if (this.instance)
                    return;
                this.isSVG = G instanceof SVGElement && 'svg' !== G.tagName, this.instance = G;
                const {
                    layoutId: J,
                    layout: K,
                    visualElement: L
                } = this.options;
                if (L && !L.current && L.mount(G), this.root.nodes.add(this), null === (I = this.parent) || void 0 === I || I.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), H && (K || J) && (this.isLayoutDirty = !0), _B) {
                    let M;
                    const N = () => this.root.updateBlockedByResize = !1;
                    _B(G, () => {
                        this.root.updateBlockedByResize = !0, M && M(), M = (0, w.delay)(N, 250), v.globalProjectionState.hasAnimatedSinceResize && (v.globalProjectionState.hasAnimatedSinceResize = !1, this.nodes.forEach(_A));
                    });
                }
                J && this.root.registerSharedNode(J, this), !1 !== this.options.animate && L && (J || K) && this.addEventListener('didUpdate', ({
                    delta: M,
                    hasLayoutChanged: N,
                    hasRelativeTargetChanged: O,
                    layout: P
                }) => {
                    var Q, R, S, T, U;
                    if (this.isTreeAnimationBlocked())
                        return this.target = void 0, void(this.relativeTarget = void 0);
                    const V = null !== (R = null !== (Q = this.options.transition) && void 0 !== Q ? Q : L.getDefaultTransition()) && void 0 !== R ? R : _A,
                        {
                            onLayoutAnimationStart: W,
                            onLayoutAnimationComplete: X
                        } = L.getProps(),
                        Y = !this.targetLayout || !(0, n.boxEquals)(this.targetLayout, P) || O,
                        Z = !N && O;
                    if (this.options.layoutRoot || (null === (S = this.resumeFrom) || void 0 === S ? void 0 : S.instance) || Z || N && (Y || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(M, Z);
                        const $ = {
                            ...(0, m.getValueTransition)(V, 'layout'),
                            onPlay: W,
                            onComplete: X
                        };
                        (L.shouldReduceMotion || this.options.layoutRoot) && ($.delay = 0, $.type = !1), this.startAnimation($);
                    } else
                        N || 0 !== this.animationProgress || _A(this), this.isLead() && (null === (U = (T = this.options).onExitComplete) || void 0 === U || U.call(T));
                    this.targetLayout = P;
                });
            }
            unmount() {
                var G, H;
                this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (G = this.getStack()) || void 0 === G || G.remove(this), null === (H = this.parent) || void 0 === H || H.children.delete(this), this.instance = void 0, d.cancelSync.preRender(this.updateProjection);
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
                var G;
                return this.isAnimationBlocked || (null === (G = this.parent) || void 0 === G ? void 0 : G.isTreeAnimationBlocked()) || !1;
            }
            startUpdate() {
                var G;
                this.isUpdateBlocked() || (this.isUpdating = !0, null === (G = this.nodes) || void 0 === G || G.forEach(_A), this.animationId++);
            }
            getTransformTemplate() {
                var G;
                return null === (G = this.options.visualElement) || void 0 === G ? void 0 : G.getProps().transformTemplate;
            }
            willUpdate(G = !0) {
                var H, I, J;
                if (this.root.isUpdateBlocked())
                    return void(null === (I = (H = this.options).onExitComplete) || void 0 === I || I.call(H));
                if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
                    return;
                this.isLayoutDirty = !0;
                for (let K = 0; K < this.path.length; K++) {
                    const L = this.path[K];
                    L.shouldResetTransform = !0, L.updateScroll('snapshot'), L.options.layoutRoot && L.willUpdate(!1);
                }
                const {
                    layoutId: L,
                    layout: M
                } = this.options;
                (void 0 !== L || M) && (this.prevTransformTemplateValue = null === (J = this.getTransformTemplate()) || void 0 === J ? void 0 : J(this.latestValues, ''), this.updateSnapshot(), K && this.notifyListeners('willUpdate'));
            }
            didUpdate() {
                if (this.isUpdateBlocked())
                    return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(_A);
                this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(_B), this.potentialNodes.clear()), this.nodes.forEach(_A), this.nodes.forEach(_A), this.nodes.forEach(_A), this.clearAllSnapshots(), d.flushSync.update(), d.flushSync.preRender(), d.flushSync.render());
            }
            clearAllSnapshots() {
                this.nodes.forEach(_A), this.sharedNodes.forEach(_A);
            }
            scheduleUpdateProjection() {
                d.sync.preRender(this.updateProjection, !1, !0);
            }
            scheduleCheckAfterUnmount() {
                d.sync.postRender(() => {
                    this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
                });
            }
            updateSnapshot() {
                !this.snapshot && this.instance && (this.snapshot = this.measure());
            }
            updateLayout() {
                var G;
                if (!this.instance)
                    return;
                if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty))
                    return;
                if (this.resumeFrom && !this.resumeFrom.instance)
                    for (let H = 0; H < this.path.length; H++) {
                        this.path[H].updateScroll();
                    }
                const H = this.layout;
                this.layout = this.measure(!1), this.layoutCorrected = (0, l.createBox)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners('measure', this.layout.layoutBox), null === (G = this.options.visualElement) || void 0 === G || G.notify('LayoutMeasure', this.layout.layoutBox, null == H ? void 0 : H.layoutBox);
            }
            updateScroll(G = 'measure') {
                let H = Boolean(this.options.layoutScroll && this.instance);
                this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === G && (H = !1), H && (this.scroll = {
                    animationId: this.root.animationId,
                    phase: G,
                    isRoot: E(this.instance),
                    offset: D(this.instance)
                });
            }
            resetTransform() {
                var G;
                if (!F)
                    return;
                const H = this.isLayoutDirty || this.shouldResetTransform,
                    I = this.projectionDelta && !(0, n.isDeltaZero)(this.projectionDelta),
                    J = null === (G = this.getTransformTemplate()) || void 0 === G ? void 0 : G(this.latestValues, ''),
                    K = J !== this.prevTransformTemplateValue;
                H && (I || (0, s.hasTransform)(this.latestValues) || K) && (F(this.instance, J), this.shouldResetTransform = !1, this.scheduleRender());
            }
            measure(G = !0) {
                const H = this.measurePageBox();
                let I = this.removeElementScroll(H);
                var J;
                return G && (I = this.removeTransform(I)), _B((J = I).x), _B(J.y), {
                    animationId: this.root.animationId,
                    measuredBox: H,
                    layoutBox: I,
                    latestValues: {},
                    source: this.id
                };
            }
            measurePageBox() {
                const {
                    visualElement: G
                } = this.options;
                if (!G)
                    return (0, l.createBox)();
                const H = G.measureViewportBox(),
                    {
                        scroll: I
                    } = this.root;
                return I && ((0, i.translateAxis)(H.x, I.offset.x), (0, i.translateAxis)(H.y, I.offset.y)), H;
            }
            removeElementScroll(G) {
                const H = (0, l.createBox)();
                (0, h.copyBoxInto)(H, G);
                for (let I = 0; I < this.path.length; I++) {
                    const J = this.path[I],
                        {
                            scroll: K,
                            options: L
                        } = J;
                    if (J !== this.root && K && L.layoutScroll) {
                        if (K.isRoot) {
                            (0, h.copyBoxInto)(H, G);
                            const {
                                scroll: M
                            } = this.root;
                            M && ((0, i.translateAxis)(H.x, -M.offset.x), (0, i.translateAxis)(H.y, -M.offset.y));
                        }
                        (0, i.translateAxis)(H.x, K.offset.x), (0, i.translateAxis)(H.y, K.offset.y);
                    }
                }
                return H;
            }
            applyTransform(G, H = !1) {
                const I = (0, l.createBox)();
                (0, h.copyBoxInto)(I, G);
                for (let J = 0; J < this.path.length; J++) {
                    const K = this.path[J];
                    !H && K.options.layoutScroll && K.scroll && K !== K.root && (0, i.transformBox)(I, {
                        x: -K.scroll.offset.x,
                        y: -K.scroll.offset.y
                    }), (0, s.hasTransform)(K.latestValues) && (0, i.transformBox)(I, K.latestValues);
                }
                return (0, s.hasTransform)(this.latestValues) && (0, i.transformBox)(I, this.latestValues), I;
            }
            removeTransform(G) {
                var H;
                const I = (0, l.createBox)();
                (0, h.copyBoxInto)(I, G);
                for (let J = 0; J < this.path.length; J++) {
                    const K = this.path[J];
                    if (!K.instance)
                        continue;
                    if (!(0, s.hasTransform)(K.latestValues))
                        continue;
                    (0, s.hasScale)(K.latestValues) && K.updateSnapshot();
                    const L = (0, l.createBox)(),
                        M = K.measurePageBox();
                    (0, h.copyBoxInto)(L, M), (0, k.removeBoxTransforms)(I, K.latestValues, null === (H = K.snapshot) || void 0 === H ? void 0 : H.layoutBox, L);
                }
                return (0, s.hasTransform)(this.latestValues) && (0, k.removeBoxTransforms)(I, this.latestValues), I;
            }
            setTargetDelta(G) {
                this.targetDelta = G, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection();
            }
            setOptions(G) {
                this.options = {
                    ...this.options,
                    ...G,
                    crossfade: void 0 === G.crossfade || G.crossfade
                };
            }
            clearMeasurements() {
                this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
            }
            resolveTargetDelta() {
                var G;
                const H = this.getLead();
                if (this.isProjectionDirty || (this.isProjectionDirty = H.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = H.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
                    return;
                const {
                    layout: I,
                    layoutId: J
                } = this.options;
                if (this.layout && (I || J)) {
                    if (!this.targetDelta && !this.relativeTarget) {
                        const K = this.getClosestProjectingParent();
                        K && K.layout ? (this.relativeParent = K, this.relativeTarget = (0, l.createBox)(), this.relativeTargetOrigin = (0, l.createBox)(), (0, j.calcRelativePosition)(this.relativeTargetOrigin, this.layout.layoutBox, K.layout.layoutBox), (0, h.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
                    }
                    if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = (0, l.createBox)(), this.targetWithTransforms = (0, l.createBox)()), this.relativeTarget && this.relativeTargetOrigin && (null === (G = this.relativeParent) || void 0 === G ? void 0 : G.target) ? (0, j.calcRelativeBox)(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : (0, h.copyBoxInto)(this.target, this.layout.layoutBox), (0, i.applyBoxDelta)(this.target, this.targetDelta)) : (0, h.copyBoxInto)(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                        this.attemptToResolveRelativeTarget = !1;
                        const K = this.getClosestProjectingParent();
                        K && Boolean(K.resumingFrom) === Boolean(this.resumingFrom) && !K.options.layoutScroll && K.target ? (this.relativeParent = K, this.relativeTarget = (0, l.createBox)(), this.relativeTargetOrigin = (0, l.createBox)(), (0, j.calcRelativePosition)(this.relativeTargetOrigin, this.target, K.target), (0, h.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
                    }
                }
            }
            getClosestProjectingParent() {
                if (this.parent && !(0, s.hasScale)(this.parent.latestValues) && !(0, s.has2DTranslate)(this.parent.latestValues))
                    return (this.parent.relativeTarget || this.parent.targetDelta || this.parent.options.layoutRoot) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent();
            }
            calcProjection() {
                var G;
                const {
                    isProjectionDirty: H,
                    isTransformDirty: I
                } = this;
                this.isProjectionDirty = this.isTransformDirty = !1;
                const J = this.getLead(),
                    K = Boolean(this.resumingFrom) || this !== J;
                let L = !0;
                if (H && (L = !1), K && I && (L = !1), L)
                    return;
                const {
                    layout: M,
                    layoutId: N
                } = this.options;
                if (this.isTreeAnimating = Boolean((null === (G = this.parent) || void 0 === G ? void 0 : G.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !M && !N)
                    return;
                (0, h.copyBoxInto)(this.layoutCorrected, this.layout.layoutBox), (0, i.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, K);
                const {
                    target: O
                } = J;
                if (!O)
                    return;
                this.projectionDelta || (this.projectionDelta = (0, l.createDelta)(), this.projectionDeltaWithTransform = (0, l.createDelta)());
                const P = this.treeScale.x,
                    Q = this.treeScale.y,
                    R = this.projectionTransform;
                (0, j.calcBoxDelta)(this.projectionDelta, this.layoutCorrected, O, this.latestValues), this.projectionTransform = (0, q.buildProjectionTransform)(this.projectionDelta, this.treeScale), this.projectionTransform === R && this.treeScale.x === P && this.treeScale.y === Q || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners('projectionUpdate', O));
            }
            hide() {
                this.isVisible = !1;
            }
            show() {
                this.isVisible = !0;
            }
            scheduleRender(G = !0) {
                var H, I, J;
                null === (I = (H = this.options).scheduleRender) || void 0 === I || I.call(H), G && (null === (J = this.getStack()) || void 0 === J || J.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
            }
            setAnimationOrigin(G, H = !1) {
                var I, J;
                const K = this.snapshot,
                    L = (null == K ? void 0 : K.latestValues) || {},
                    M = {
                        ...this.latestValues
                    },
                    N = (0, l.createDelta)();
                this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !H;
                const O = (0, l.createBox)(),
                    P = (null == K ? void 0 : K.source) !== (null === (I = this.layout) || void 0 === I ? void 0 : I.source),
                    Q = ((null === (J = this.getStack()) || void 0 === J ? void 0 : J.members.length) || 0) <= 1,
                    R = Boolean(P && !Q && !0 === this.options.crossfade && !this.path.some(_A));
                this.animationProgress = 0, this.mixTargetDelta = H => {
                    var S;
                    const T = H / 1000;
                    var U, V, W, X;
                    _A(N.x, G.x, T), _A(N.y, G.y, T), this.setTargetDelta(N), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (S = this.relativeParent) || void 0 === S ? void 0 : S.layout) && ((0, j.calcRelativePosition)(O, this.layout.layoutBox, this.relativeParent.layout.layoutBox), U = this.relativeTarget, V = this.relativeTargetOrigin, W = O, X = T, _A(U.x, V.x, W.x, X), _A(U.y, V.y, W.y, X)), P && (this.animationValues = M, (0, g.mixValues)(M, L, this.latestValues, T, R, Q)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
                }, this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
            }
            startAnimation(G) {
                var H, I;
                this.notifyListeners('animationStart'), null === (H = this.currentAnimation) || void 0 === H || H.stop(), this.resumingFrom && (null === (I = this.resumingFrom.currentAnimation) || void 0 === I || I.stop()), this.pendingAnimation && (d.cancelSync.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = d.sync.update(() => {
                    v.globalProjectionState.hasAnimatedSinceResize = !0, this.currentAnimation = (0, e.animate)(0, 1000, {
                        ...G,
                        onUpdate: H => {
                            var J;
                            this.mixTargetDelta(H), null === (J = G.onUpdate) || void 0 === J || J.call(G, H);
                        },
                        onComplete: () => {
                            var J;
                            null === (J = G.onComplete) || void 0 === J || J.call(G), this.completeAnimation();
                        }
                    }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
                });
            }
            completeAnimation() {
                var G;
                this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (G = this.getStack()) || void 0 === G || G.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners('animationComplete');
            }
            finishAnimation() {
                var G;
                this.currentAnimation && (null === (G = this.mixTargetDelta) || void 0 === G || G.call(this, 1000), this.currentAnimation.stop()), this.completeAnimation();
            }
            applyTransformsToTarget() {
                const G = this.getLead();
                let {
                    targetWithTransforms: H,
                    target: I,
                    layout: J,
                    latestValues: K
                } = G;
                if (H && I && J) {
                    if (this !== G && this.layout && J && _B(this.options.animationType, this.layout.layoutBox, J.layoutBox)) {
                        I = this.target || (0, l.createBox)();
                        const L = (0, j.calcLength)(this.layout.layoutBox.x);
                        I.x.min = G.target.x.min, I.x.max = I.x.min + L;
                        const M = (0, j.calcLength)(this.layout.layoutBox.y);
                        I.y.min = G.target.y.min, I.y.max = I.y.min + M;
                    }
                    (0, h.copyBoxInto)(H, I), (0, i.transformBox)(H, K), (0, j.calcBoxDelta)(this.projectionDeltaWithTransform, this.layoutCorrected, H, K);
                }
            }
            registerSharedNode(G, H) {
                var I, J, K;
                this.sharedNodes.has(G) || this.sharedNodes.set(G, new(0, o.NodeStack)());
                this.sharedNodes.get(G).add(H), H.promote({
                    transition: null === (I = H.options.initialPromotionConfig) || void 0 === I ? void 0 : I.transition,
                    preserveFollowOpacity: null === (K = null === (J = H.options.initialPromotionConfig) || void 0 === J ? void 0 : J.shouldPreserveFollowOpacity) || void 0 === K ? void 0 : K.call(J, H)
                });
            }
            isLead() {
                const G = this.getStack();
                return !G || G.lead === this;
            }
            getLead() {
                var G;
                const {
                    layoutId: H
                } = this.options;
                return H && (null === (G = this.getStack()) || void 0 === G ? void 0 : G.lead) || this;
            }
            getPrevLead() {
                var G;
                const {
                    layoutId: H
                } = this.options;
                return H ? null === (G = this.getStack()) || void 0 === G ? void 0 : G.prevLead : void 0;
            }
            getStack() {
                const {
                    layoutId: G
                } = this.options;
                if (G)
                    return this.root.sharedNodes.get(G);
            }
            promote({
                needsReset: G,
                transition: H,
                preserveFollowOpacity: I
            } = {}) {
                const J = this.getStack();
                J && J.promote(this, I), G && (this.projectionDelta = void 0, this.needsReset = !0), H && this.setOptions({
                    transition: H
                });
            }
            relegate() {
                const G = this.getStack();
                return !!G && G.relegate(this);
            }
            resetRotation() {
                const {
                    visualElement: G
                } = this.options;
                if (!G)
                    return;
                let H = !1;
                const {
                    latestValues: I
                } = G;
                if ((I.rotate || I.rotateX || I.rotateY || I.rotateZ) && (H = !0), !H)
                    return;
                const J = {};
                for (let K = 0; K < y.length; K++) {
                    const L = 'rotate' + y[K];
                    I[L] && (J[L] = I[L], G.setStaticValue(L, 0));
                }
                null == G || G.render();
                for (const L in J)
                    G.setStaticValue(L, J[L]);
                G.scheduleRender();
            }
            getProjectionStyles(G = {}) {
                var H, I;
                const J = {};
                if (!this.instance || this.isSVG)
                    return J;
                if (!this.isVisible)
                    return {
                        visibility: 'hidden'
                    };
                J.visibility = '';
                const K = this.getTransformTemplate();
                if (this.needsReset)
                    return this.needsReset = !1, J.opacity = '', J.pointerEvents = (0, u.resolveMotionValue)(G.pointerEvents) || '', J.transform = K ? K(this.latestValues, '') : 'none', J;
                const L = this.getLead();
                if (!this.projectionDelta || !this.layout || !L.target) {
                    const M = {};
                    return this.options.layoutId && (M.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, M.pointerEvents = (0, u.resolveMotionValue)(G.pointerEvents) || ''), this.hasProjected && !(0, s.hasTransform)(this.latestValues) && (M.transform = K ? K({}, '') : 'none', this.hasProjected = !1), M;
                }
                const M = L.animationValues || L.latestValues;
                this.applyTransformsToTarget(), J.transform = (0, q.buildProjectionTransform)(this.projectionDeltaWithTransform, this.treeScale, M), K && (J.transform = K(M, J.transform));
                const {
                    x: N,
                    y: O
                } = this.projectionDelta;
                J.transformOrigin = `${ 100 * N.origin }% ${ 100 * O.origin }% 0`, L.animationValues ? J.opacity = L === this ? null !== (I = null !== (H = M.opacity) && void 0 !== H ? H : this.latestValues.opacity) && void 0 !== I ? I : 1 : this.preserveOpacity ? this.latestValues.opacity : M.opacityExit : J.opacity = L === this ? void 0 !== M.opacity ? M.opacity : '' : void 0 !== M.opacityExit ? M.opacityExit : 0;
                for (const P in p.scaleCorrectors) {
                    if (void 0 === M[P])
                        continue;
                    const {
                        correct: Q,
                        applyTo: R
                    } = p.scaleCorrectors[P], S = 'none' === J.transform ? M[P] : Q(M[P], L);
                    if (R) {
                        const T = R.length;
                        for (let U = 0; U < T; U++)
                            J[R[U]] = S;
                    } else
                        J[P] = S;
                }
                return this.options.layoutId && (J.pointerEvents = L === this ? (0, u.resolveMotionValue)(P.pointerEvents) || '' : 'none'), J;
            }
            clearSnapshot() {
                this.resumeFrom = this.snapshot = void 0;
            }
            resetTree() {
                this.root.nodes.forEach(_B => {
                    var G;
                    return null === (G = _B.currentAnimation) || void 0 === G ? void 0 : G.stop();
                }), this.root.nodes.forEach(_A), this.root.sharedNodes.clear();
            }
            constructor(G, H = {}, I = null == C ? void 0 : C()) {
                this.id = z++, this.animationId = 0, this.children = new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                    x: 1,
                    y: 1
                }, this.eventHandlers = new Map(), this.potentialNodes = new Map(), this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
                }, this.updateProjection = () => {
                    this.nodes.forEach(_A), this.nodes.forEach(_A), this.nodes.forEach(_A);
                }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map(), this.elementId = G, this.latestValues = H, this.root = I ? I.root || I : this, this.path = I ? [
                    ...I.path,
                    I
                ] : [], this.parent = I, this.depth = I ? I.depth + 1 : 0, G && this.root.registerPotentialNode(G, this);
                for (let J = 0; J < this.path.length; J++)
                    this.path[J].shouldResetTransform = !0;
                this.root === this && (this.nodes = new(0, t.FlatTree)());
            }
        };
    }

    function _A(B) {
        B.updateLayout();
    }

    function _A(B) {
        var C, D, E;
        const F = (null === (C = B.resumeFrom) || void 0 === C ? void 0 : C.snapshot) || B.snapshot;
        if (B.isLead() && B.layout && F && B.hasListeners('didUpdate')) {
            const {
                layoutBox: G,
                measuredBox: H
            } = B.layout, {
                animationType: I
            } = B.options, J = F.source !== B.layout.source;
            'size' === I ? (0, r.eachAxis)(B => {
                const K = J ? F.measuredBox[B] : F.layoutBox[B],
                    L = (0, j.calcLength)(K);
                K.min = G[B].min, K.max = K.min + L;
            }) : _B(I, F.layoutBox, G) && (0, r.eachAxis)(B => {
                const K = J ? F.measuredBox[B] : F.layoutBox[B],
                    L = (0, j.calcLength)(G[B]);
                K.max = K.min + L;
            });
            const K = (0, l.createDelta)();
            (0, j.calcBoxDelta)(K, G, F.layoutBox);
            const L = (0, l.createDelta)();
            J ? (0, j.calcBoxDelta)(L, B.applyTransform(H, !0), F.measuredBox) : (0, j.calcBoxDelta)(L, G, F.layoutBox);
            const M = !(0, n.isDeltaZero)(K);
            let N = !1;
            if (!B.resumeFrom) {
                const O = B.getClosestProjectingParent();
                if (O && !O.resumeFrom) {
                    const {
                        snapshot: P,
                        layout: Q
                    } = O;
                    if (P && Q) {
                        const R = (0, l.createBox)();
                        (0, j.calcRelativePosition)(R, F.layoutBox, P.layoutBox);
                        const S = (0, l.createBox)();
                        (0, j.calcRelativePosition)(S, G, Q.layoutBox), (0, n.boxEquals)(R, S) || (N = !0), O.options.layoutRoot && (B.relativeTarget = S, B.relativeTargetOrigin = R, B.relativeParent = O);
                    }
                }
            }
            B.notifyListeners('didUpdate', {
                layout: G,
                snapshot: F,
                delta: L,
                layoutDelta: K,
                hasLayoutChanged: M,
                hasRelativeTargetChanged: N
            });
        } else
            B.isLead() && (null === (E = (D = B.options).onExitComplete) || void 0 === E || E.call(D));
        B.options.transition = void 0;
    }

    function _A(B) {
        B.isProjectionDirty || (B.isProjectionDirty = Boolean(B.parent && B.parent.isProjectionDirty)), B.isTransformDirty || (B.isTransformDirty = Boolean(B.parent && B.parent.isTransformDirty));
    }

    function _A(B) {
        B.clearSnapshot();
    }

    function _A(B) {
        B.clearMeasurements();
    }

    function _A(B) {
        const {
            visualElement: C
        } = B.options;
        (null == C ? void 0 : C.getProps().onBeforeLayoutMeasure) && C.notify('BeforeLayoutMeasure'), B.resetTransform();
    }

    function _A(B) {
        B.finishAnimation(), B.targetDelta = B.relativeTarget = B.target = void 0;
    }

    function _A(B) {
        B.resolveTargetDelta();
    }

    function _A(B) {
        B.calcProjection();
    }

    function _A(B) {
        B.resetRotation();
    }

    function _A(B) {
        B.removeLeadSnapshot();
    }

    function _A(B, C, D) {
        B.translate = (0, x.mix)(C.translate, 0, D), B.scale = (0, x.mix)(C.scale, 1, D), B.origin = C.origin, B.originPoint = C.originPoint;
    }

    function _A(B, C, D, E) {
        B.min = (0, x.mix)(C.min, D.min, E), B.max = (0, x.mix)(C.max, D.max, E);
    }

    function _A(B) {
        return B.animationValues && void 0 !== B.animationValues.opacityExit;
    }
    const _A = {
        duration: 0.45,
        ease: [
            0.4,
            0,
            0.1,
            1
        ]
    };

    function _B(C, D) {
        let E = C.root;
        for (let F = C.path.length - 1; F >= 0; F--)
            if (Boolean(C.path[F].instance)) {
                E = C.path[F];
                break;
            }
        const G = (E && E !== C.root ? E.instance : document).querySelector(`[data-projection-id="${ F }"]`);
        G && C.mount(G, !0);
    }

    function _B(C) {
        C.min = Math.round(C.min), C.max = Math.round(C.max);
    }

    function _B(C, D, E) {
        return 'position' === C || 'preserve-aspect' === C && !(0, j.isNear)((0, n.aspectRatio)(D), (0, n.aspectRatio)(E), 0.2);
    }
}), a.register('Lwb9P', function(b, c) {
    _h(b.exports, 'animate', function() {
        return _g;
    });
    var d = a('LO9i0'),
        e = a('dssd5'),
        f = a('C2TrH');

    function _g(_h, i, j = {}) {
        const k = (0, f.isMotionValue)(_h) ? _h : (0, e.motionValue)(_h);
        return k.start((0, d.createMotionValueAnimation)('', k, i, j)), {
            stop: () => k.stop(),
            isAnimating: () => k.isAnimating()
        };
    }
}), a.register('N4/ra', function(b, c) {
    _n(b.exports, 'mixValues', function() {
        return _m;
    });
    var d = a('yUhV8'),
        e = a('VmyBT'),
        f = a('V0v4j'),
        g = a('9orVC'),
        h = a('QJEVi');
    const i = [
            'TopLeft',
            'TopRight',
            'BottomLeft',
            'BottomRight'
        ],
        j = i.length,
        k = _n => 'string' == typeof _n ? parseFloat(_n) : _n,
        l = _n => 'number' == typeof _n || h.px.test(_n);

    function _m(_n, o, p, q, r, s) {
        r ? (_n.opacity = (0, f.mix)(0, void 0 !== p.opacity ? p.opacity : 1, _m(q)), _n.opacityExit = (0, f.mix)(void 0 !== o.opacity ? o.opacity : 1, 0, _n(q))) : s && (_n.opacity = (0, f.mix)(void 0 !== o.opacity ? o.opacity : 1, void 0 !== p.opacity ? p.opacity : 1, q));
        for (let t = 0; t < j; t++) {
            const u = `border${ i[t] }Radius`;
            let v = _m(o, u),
                w = _m(p, u);
            if (void 0 === v && void 0 === w)
                continue;
            v || (v = 0), w || (w = 0);
            0 === v || 0 === w || l(v) === l(w) ? (_n[u] = Math.max((0, f.mix)(k(v), k(w), q), 0), (h.percent.test(w) || h.percent.test(v)) && (_n[u] += '%')) : _n[u] = w;
        }
        (o.rotate || p.rotate) && (_n.rotate = (0, f.mix)(o.rotate || 0, p.rotate || 0, q));
    }

    function _m(n, o) {
        return void 0 !== n[o] ? n[o] : n.borderRadius;
    }
    const _m = _o(0, 0.5, d.circOut),
        _n = _o(0.5, 0.95, g.noop);

    function _o(p, q, r) {
        return c => c < p ? 0 : c > q ? 1 : r((0, e.progress)(p, q, c));
    }
}), a.register('319/5', function(b, c) {
    function d(e, f) {
        e.min = f.min, e.max = f.max;
    }

    function d(e, f) {
        _c(e.x, f.x), _c(e.y, f.y);
    }
    _h(b.exports, 'copyBoxInto', function() {
        return _d;
    });
}), a.register('AbM9T', function(b, _c) {
    _h(b.exports, 'removeBoxTransforms', function() {
        return _i;
    });
    var _d = a('V0v4j'),
        e = a('QJEVi'),
        f = a('cq1zW');

    function g(_h, i, j, k, l) {
        return _h -= i, _h = (0, f.scalePoint)(_h, 1 / j, k), void 0 !== l && (_h = (0, f.scalePoint)(_h, 1 / l, k)), _h;
    }

    function g(h, i, [j, k, l], m, n) {
        ! function(o, p = 0, q = 1, r = 0.5, s, t = u, v = w) {
            e.percent.test(p) && (p = parseFloat(p), p = (0, _d.mix)(v.min, v.max, p / 100) - v.min);
            if ('number' != typeof p)
                return;
            let x = (0, _d.mix)(t.min, t.max, r);
            w === t && (x -= p), w.min = _e(w.min, p, q, x, s), w.max = _e(w.max, p, q, x, s);
        }(h, i[j], i[k], i[l], i.scale, m, n);
    }
    const g = [
            'x',
            'scaleX',
            'originX'
        ],
        h = [
            'y',
            'scaleY',
            'originY'
        ];

    function _i(j, k, l, m) {
        _e(j.x, k, g, null == l ? void 0 : l.x, null == m ? void 0 : m.x), _e(j.y, k, h, null == l ? void 0 : l.y, null == m ? void 0 : m.y);
    }
}), a.register('1OsXk', function(b, c) {
    _f(b.exports, 'isDeltaZero', function() {
        return _e;
    }), _f(b.exports, 'boxEquals', function() {
        return _e;
    }), _f(b.exports, 'aspectRatio', function() {
        return _e;
    });
    var d = a('tJpLq');

    function e(_f) {
        return 0 === _f.translate && 1 === _f.scale;
    }

    function _e(f) {
        return _e(f.x) && _e(f.y);
    }

    function _e(f, g) {
        return f.x.min === g.x.min && f.x.max === g.x.max && f.y.min === g.y.min && f.y.max === g.y.max;
    }

    function _e(f) {
        return (0, d.calcLength)(f.x) / (0, d.calcLength)(f.y);
    }
}), a.register('i31a5', function(b, c) {
    _f(b.exports, 'NodeStack', function() {
        return _e;
    });
    var d = a('IwX4G');
    class _e {
        add(_f) {
            (0, d.addUniqueItem)(this.members, _f), _f.scheduleRender();
        }
        remove(f) {
            if ((0, d.removeItem)(this.members, f), f === this.prevLead && (this.prevLead = void 0), f === this.lead) {
                const g = this.members[this.members.length - 1];
                g && this.promote(g);
            }
        }
        relegate(f) {
            const g = this.members.findIndex(g => f === g);
            if (0 === g)
                return !1;
            let h;
            for (let i = g; i >= 0; i--) {
                const j = this.members[i];
                if (!1 !== j.isPresent) {
                    h = j;
                    break;
                }
            }
            return !!h && (this.promote(h), !0);
        }
        promote(f, g) {
            var h;
            const i = this.lead;
            if (f !== i && (this.prevLead = i, this.lead = f, f.show(), i)) {
                i.instance && i.scheduleRender(), f.scheduleRender(), f.resumeFrom = i, g && (f.resumeFrom.preserveOpacity = !0), i.snapshot && (f.snapshot = i.snapshot, f.snapshot.latestValues = i.animationValues || i.latestValues), (null === (h = f.root) || void 0 === h ? void 0 : h.isUpdating) && (f.isLayoutDirty = !0);
                const {
                    crossfade: j
                } = f.options;
                !1 === j && i.hide();
            }
        }
        exitAnimationComplete() {
            this.members.forEach(_e => {
                var f, g, h, i, j;
                null === (g = (f = _e.options).onExitComplete) || void 0 === g || g.call(f), null === (j = null === (h = _e.resumingFrom) || void 0 === h ? void 0 : (i = h.options).onExitComplete) || void 0 === j || j.call(i);
            });
        }
        scheduleRender() {
            this.members.forEach(_e => {
                _e.instance && _e.scheduleRender(!1);
            });
        }
        removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
        constructor() {
            this.members = [];
        }
    }
}), a.register('t3pNS', function(b, c) {
    function d(_e, f, g) {
        let h = '';
        const i = _e.x.translate / f.x,
            j = _e.y.translate / f.y;
        if ((i || j) && (h = `translate3d(${ i }px, ${ j }px, 0) `), 1 === f.x && 1 === f.y || (h += `scale(${ 1 / f.x }, ${ 1 / f.y }) `), g) {
            const {
                rotate: k,
                rotateX: l,
                rotateY: m
            } = g;
            k && (h += `rotate(${ k }deg) `), l && (h += `rotateX(${ l }deg) `), m && (h += `rotateY(${ m }deg) `);
        }
        const k = _e.x.scale * f.x,
            l = _e.y.scale * f.y;
        return 1 === k && 1 === l || (h += `scale(${ k }, ${ l })`), h || 'none';
    }
    _g(b.exports, 'buildProjectionTransform', function() {
        return _c;
    });
}), a.register('LFNiN', function(b, _c) {
    _g(b.exports, 'FlatTree', function() {
        return _f;
    });
    var d = a('IwX4G'),
        e = a('ga4H+');
    class _f {
        add(_g) {
            (0, d.addUniqueItem)(this.children, _g), this.isDirty = !0;
        }
        remove(g) {
            (0, d.removeItem)(this.children, g), this.isDirty = !0;
        }
        forEach(g) {
            this.isDirty && this.children.sort(e.compareByDepth), this.isDirty = !1, this.children.forEach(g);
        }
        constructor() {
            this.children = [], this.isDirty = !1;
        }
    }
}), a.register('ga4H+', function(b, c) {
    t(b.exports, 'compareByDepth', function() {
        return _d;
    });
    const _d = (t, b) => t.depth - b.depth;
}), a.register('5Tvuu', function(b, c) {
    t(b.exports, 'DocumentProjectionNode', function() {
        return _f;
    });
    var d = a('nsSFZ'),
        e = a('s2HUL');
    const _f = (0, d.createProjectionNode)({
        attachResizeListener: (t, b) => (0, e.addDomEvent)(t, 'resize', b),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    });
});