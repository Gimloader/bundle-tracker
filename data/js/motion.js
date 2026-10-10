import {
    a as e,
    n as t,
    o as n,
    r
} from "./rolldown-runtime.js";
import {
    t as i
} from "./react-1.js";
var a = n(i(), 1),
    o = (0, a.createContext)({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: `never`
    }),
    s = (0, a.createContext)({});

function c() {
    return (0, a.useContext)(s).visualElement
}
var l = (0, a.createContext)(null),
    u = typeof document < `u`,
    d = u ? a.useLayoutEffect : a.useEffect,
    f = (0, a.createContext)({
        strict: !1
    });

function p(e, t, n, r) {
    let i = c(),
        s = (0, a.useContext)(f),
        u = (0, a.useContext)(l),
        p = (0, a.useContext)(o).reducedMotion,
        m = (0, a.useRef)();
    r = r || s.renderer, !m.current && r && (m.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceId: u ? u.id : void 0,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: p
    }));
    let h = m.current;
    return d(() => {
        h && h.render()
    }), (window.HandoffAppearAnimations ? d : a.useEffect)(() => {
        h && h.animationState && h.animationState.animateChanges()
    }), h
}

function m(e) {
    return typeof e == `object` && Object.prototype.hasOwnProperty.call(e, `current`)
}

function h(e, t, n) {
    return (0, a.useCallback)(r => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == `function` ? n(r) : m(n) && (n.current = r))
    }, [t])
}

function g(e) {
    return typeof e == `string` || Array.isArray(e)
}

function _(e) {
    return typeof e == `object` && typeof e.start == `function`
}
var v = [`initial`, `animate`, `exit`, `whileHover`, `whileDrag`, `whileTap`, `whileFocus`, `whileInView`];

function y(e) {
    return _(e.animate) || v.some(t => g(e[t]))
}

function b(e) {
    return !!(y(e) || e.variants)
}

function x(e, t) {
    if (y(e)) {
        let {
            initial: t,
            animate: n
        } = e;
        return {
            initial: t === !1 || g(t) ? t : void 0,
            animate: g(n) ? n : void 0
        }
    }
    return e.inherit === !1 ? {} : t
}

function S(e) {
    let {
        initial: t,
        animate: n
    } = x(e, (0, a.useContext)(s));
    return (0, a.useMemo)(() => ({
        initial: t,
        animate: n
    }), [C(t), C(n)])
}

function C(e) {
    return Array.isArray(e) ? e.join(` `) : e
}
var w = e => ({
        isEnabled: t => e.some(e => !!t[e])
    }),
    T = {
        measureLayout: w([`layout`, `layoutId`, `drag`]),
        animation: w([`animate`, `exit`, `variants`, `whileHover`, `whileTap`, `whileFocus`, `whileDrag`, `whileInView`]),
        exit: w([`exit`]),
        drag: w([`drag`, `dragControls`]),
        focus: w([`whileFocus`]),
        hover: w([`whileHover`, `onHoverStart`, `onHoverEnd`]),
        tap: w([`whileTap`, `onTap`, `onTapStart`, `onTapCancel`]),
        pan: w([`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`]),
        inView: w([`whileInView`, `onViewportEnter`, `onViewportLeave`])
    };

function ee(e) {
    for (let t in e) t === `projectionNodeConstructor` ? T.projectionNodeConstructor = e[t] : T[t].Component = e[t]
}

function E(e) {
    let t = (0, a.useRef)(null);
    return t.current === null && (t.current = e()), t.current
}
var D = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    },
    te = 1;

function ne() {
    return E(() => {
        if (D.hasEverUpdated) return te++
    })
}
var O = (0, a.createContext)({}),
    re = class extends a.Component {
        getSnapshotBeforeUpdate() {
            let {
                visualElement: e,
                props: t
            } = this.props;
            return e && e.setProps(t), null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    },
    ie = (0, a.createContext)({}),
    ae = Symbol.for(`motionComponentSymbol`);

function oe({
    preloadedFeatures: e,
    createVisualElement: t,
    projectionNodeConstructor: n,
    useRender: r,
    useVisualState: i,
    Component: c
}) {
    e && ee(e);

    function l(l, d) {
        let m = {
                ...(0, a.useContext)(o),
                ...l,
                layoutId: se(l)
            },
            {
                isStatic: g
            } = m,
            _ = null,
            v = S(l),
            y = g ? void 0 : ne(),
            b = i(l, g);
        if (!g && u) {
            v.visualElement = p(c, b, m, t);
            let r = (0, a.useContext)(f).strict,
                i = (0, a.useContext)(ie);
            v.visualElement && (_ = v.visualElement.loadFeatures(m, r, e, y, n || T.projectionNodeConstructor, i))
        }
        return a.createElement(re, {
            visualElement: v.visualElement,
            props: m
        }, _, a.createElement(s.Provider, {
            value: v
        }, r(c, l, y, h(b, v.visualElement, d), b, g, v.visualElement)))
    }
    let d = (0, a.forwardRef)(l);
    return d[ae] = c, d
}

function se({
    layoutId: e
}) {
    let t = (0, a.useContext)(O).id;
    return t && e !== void 0 ? t + `-` + e : e
}

function ce(e) {
    function t(t, n = {}) {
        return oe(e(t, n))
    }
    if (typeof Proxy > `u`) return t;
    let n = new Map;
    return new Proxy(t, {
        get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r))
    })
}
var le = [`animate`, `circle`, `defs`, `desc`, `ellipse`, `g`, `image`, `line`, `filter`, `marker`, `mask`, `metadata`, `path`, `pattern`, `polygon`, `polyline`, `rect`, `stop`, `switch`, `symbol`, `svg`, `text`, `tspan`, `use`, `view`];

function ue(e) {
    return typeof e != `string` || e.includes(`-`) ? !1 : !!(le.indexOf(e) > -1 || /[A-Z]/.test(e))
}
var de = {};

function fe(e) {
    Object.assign(de, e)
}
var pe = [`transformPerspective`, `x`, `y`, `z`, `translateX`, `translateY`, `translateZ`, `scale`, `scaleX`, `scaleY`, `rotate`, `rotateX`, `rotateY`, `rotateZ`, `skew`, `skewX`, `skewY`],
    k = new Set(pe);

function me(e, {
    layout: t,
    layoutId: n
}) {
    return k.has(e) || e.startsWith(`origin`) || (t || n !== void 0) && (!!de[e] || e === `opacity`)
}
var A = e => !!(e != null && e.getVelocity),
    he = {
        x: `translateX`,
        y: `translateY`,
        z: `translateZ`,
        transformPerspective: `perspective`
    },
    ge = (e, t) => pe.indexOf(e) - pe.indexOf(t);

function _e({
    transform: e,
    transformKeys: t
}, {
    enableHardwareAcceleration: n = !0,
    allowTransformNone: r = !0
}, i, a) {
    let o = ``;
    t.sort(ge);
    for (let n of t) o += `${he[n]||n}(${e[n]}) `;
    return n && !e.z && (o += `translateZ(0)`), o = o.trim(), a ? o = a(e, i ? `` : o) : r && i && (o = `none`), o
}

function ve(e) {
    return e.startsWith(`--`)
}
var ye = (e, t) => t && typeof e == `number` ? t.transform(e) : e,
    be = (e, t, n) => Math.min(Math.max(n, e), t),
    j = {
        test: e => typeof e == `number`,
        parse: parseFloat,
        transform: e => e
    },
    xe = {
        ...j,
        transform: e => be(0, 1, e)
    },
    Se = {
        ...j,
        default: 1
    },
    Ce = e => Math.round(e * 1e5) / 1e5,
    we = /(-)?([\d]*\.?[\d])+/g,
    Te = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
    Ee = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

function De(e) {
    return typeof e == `string`
}
var Oe = e => ({
        test: t => De(t) && t.endsWith(e) && t.split(` `).length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    M = Oe(`deg`),
    N = Oe(`%`),
    P = Oe(`px`),
    ke = Oe(`vh`),
    Ae = Oe(`vw`),
    je = {
        ...N,
        parse: e => N.parse(e) / 100,
        transform: e => N.transform(e * 100)
    },
    Me = {
        ...j,
        transform: Math.round
    },
    Ne = {
        borderWidth: P,
        borderTopWidth: P,
        borderRightWidth: P,
        borderBottomWidth: P,
        borderLeftWidth: P,
        borderRadius: P,
        radius: P,
        borderTopLeftRadius: P,
        borderTopRightRadius: P,
        borderBottomRightRadius: P,
        borderBottomLeftRadius: P,
        width: P,
        maxWidth: P,
        height: P,
        maxHeight: P,
        size: P,
        top: P,
        right: P,
        bottom: P,
        left: P,
        padding: P,
        paddingTop: P,
        paddingRight: P,
        paddingBottom: P,
        paddingLeft: P,
        margin: P,
        marginTop: P,
        marginRight: P,
        marginBottom: P,
        marginLeft: P,
        rotate: M,
        rotateX: M,
        rotateY: M,
        rotateZ: M,
        scale: Se,
        scaleX: Se,
        scaleY: Se,
        scaleZ: Se,
        skew: M,
        skewX: M,
        skewY: M,
        distance: P,
        translateX: P,
        translateY: P,
        translateZ: P,
        x: P,
        y: P,
        z: P,
        perspective: P,
        transformPerspective: P,
        opacity: xe,
        originX: je,
        originY: je,
        originZ: P,
        zIndex: Me,
        fillOpacity: xe,
        strokeOpacity: xe,
        numOctaves: Me
    };

function Pe(e, t, n, r) {
    let {
        style: i,
        vars: a,
        transform: o,
        transformKeys: s,
        transformOrigin: c
    } = e;
    s.length = 0;
    let l = !1,
        u = !1,
        d = !0;
    for (let e in t) {
        let n = t[e];
        if (ve(e)) {
            a[e] = n;
            continue
        }
        let r = Ne[e],
            f = ye(n, r);
        if (k.has(e)) {
            if (l = !0, o[e] = f, s.push(e), !d) continue;
            n !== (r.default || 0) && (d = !1)
        } else e.startsWith(`origin`) ? (u = !0, c[e] = f) : i[e] = f
    }
    if (t.transform || (l || r ? i.transform = _e(e, n, d, r) : i.transform && (i.transform = `none`)), u) {
        let {
            originX: e = `50%`,
            originY: t = `50%`,
            originZ: n = 0
        } = c;
        i.transformOrigin = `${e} ${t} ${n}`
    }
}
var Fe = () => ({
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
});

function Ie(e, t, n) {
    for (let r in t) !A(t[r]) && !me(r, n) && (e[r] = t[r])
}

function Le({
    transformTemplate: e
}, t, n) {
    return (0, a.useMemo)(() => {
        let r = Fe();
        return Pe(r, t, {
            enableHardwareAcceleration: !n
        }, e), Object.assign({}, r.vars, r.style)
    }, [t])
}

function Re(e, t, n) {
    let r = e.style || {},
        i = {};
    return Ie(i, r, e), Object.assign(i, Le(e, t, n)), e.transformValues ? e.transformValues(i) : i
}

function ze(e, t, n) {
    let r = {},
        i = Re(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = `none`, i.touchAction = e.drag === !0 ? `none` : `pan-${e.drag===`x`?`y`:`x`}`), r.style = i, r
}
var Be = [`animate`, `exit`, `variants`, `whileHover`, `whileTap`, `whileFocus`, `whileDrag`, `whileInView`],
    Ve = [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
    He = [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
    Ue = new Set([`initial`, `style`, `values`, `variants`, `transition`, `transformTemplate`, `transformValues`, `custom`, `inherit`, `layout`, `layoutId`, `layoutDependency`, `layoutScroll`, `layoutRoot`, `onLayoutAnimationStart`, `onLayoutAnimationComplete`, `onLayoutMeasure`, `onBeforeLayoutMeasure`, `onAnimationStart`, `onAnimationComplete`, `onUpdate`, `onDragStart`, `onDrag`, `onDragEnd`, `onMeasureDragConstraints`, `onDirectionLock`, `onDragTransitionEnd`, `drag`, `dragControls`, `dragListener`, `dragConstraints`, `dragDirectionLock`, `dragSnapToOrigin`, `_dragX`, `_dragY`, `dragElastic`, `dragMomentum`, `dragPropagation`, `dragTransition`, `onHoverStart`, `onHoverEnd`, `whileInView`, `onViewportEnter`, `onViewportLeave`, `viewport`, ...Ve, ...Be, ...He]);

function We(e) {
    return Ue.has(e)
}

function Ge(e) {
    var t = {};
    return function(n) {
        return t[n] === void 0 && (t[n] = e(n)), t[n]
    }
}
var Ke = t((() => {})),
    qe = r({
        default: () => Ye
    }),
    Je, Ye, Xe = t((() => {
        Ke(), Je = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ye = Ge(function(e) {
            return Je.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91
        })
    })),
    Ze = e => !We(e);

function Qe(e) {
    e && (Ze = t => t.startsWith(`on`) ? !We(t) : e(t))
}
try {
    Qe((Xe(), e(qe)).default)
} catch {}

function $e(e, t, n) {
    let r = {};
    for (let i in e)(i !== `values` || typeof e.values != `object`) && (Ze(i) || n === !0 && We(i) || !t && !We(i) || e.draggable && i.startsWith(`onDrag`)) && (r[i] = e[i]);
    return r
}

function et(e, t, n) {
    return typeof e == `string` ? e : P.transform(t + n * e)
}

function tt(e, t, n) {
    return `${et(t,e.x,e.width)} ${et(n,e.y,e.height)}`
}
var nt = {
        offset: `stroke-dashoffset`,
        array: `stroke-dasharray`
    },
    rt = {
        offset: `strokeDashoffset`,
        array: `strokeDasharray`
    };

function it(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    let a = i ? nt : rt;
    e[a.offset] = P.transform(-r);
    let o = P.transform(t),
        s = P.transform(n);
    e[a.array] = `${o} ${s}`
}

function at(e, {
    attrX: t,
    attrY: n,
    originX: r,
    originY: i,
    pathLength: a,
    pathSpacing: o = 1,
    pathOffset: s = 0,
    ...c
}, l, u, d) {
    if (Pe(e, c, l, d), u) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    let {
        attrs: f,
        style: p,
        dimensions: m
    } = e;
    f.transform && (m && (p.transform = f.transform), delete f.transform), m && (r !== void 0 || i !== void 0 || p.transform) && (p.transformOrigin = tt(m, r === void 0 ? .5 : r, i === void 0 ? .5 : i)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), a !== void 0 && it(f, a, o, s, !1)
}
var ot = () => ({
        ...Fe(),
        attrs: {}
    }),
    st = e => typeof e == `string` && e.toLowerCase() === `svg`;

function ct(e, t, n, r) {
    let i = (0, a.useMemo)(() => {
        let n = ot();
        return at(n, t, {
            enableHardwareAcceleration: !1
        }, st(r), e.transformTemplate), {
            ...n.attrs,
            style: {
                ...n.style
            }
        }
    }, [t]);
    if (e.style) {
        let t = {};
        Ie(t, e.style, e), i.style = {
            ...t,
            ...i.style
        }
    }
    return i
}

function lt(e = !1) {
    return (t, n, r, i, {
        latestValues: o
    }, s) => {
        let c = (ue(t) ? ct : ze)(n, o, s, t),
            l = {
                ...$e(n, typeof t == `string`, e),
                ...c,
                ref: i
            },
            {
                children: u
            } = n,
            d = (0, a.useMemo)(() => A(u) ? u.get() : u, [u]);
        return r && (l[`data-projection-id`] = r), (0, a.createElement)(t, {
            ...l,
            children: d
        })
    }
}
var ut = e => e.replace(/([a-z])([A-Z])/g, `$1-$2`).toLowerCase();

function dt(e, {
    style: t,
    vars: n
}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (let t in n) e.style.setProperty(t, n[t])
}
var ft = new Set([`baseFrequency`, `diffuseConstant`, `kernelMatrix`, `kernelUnitLength`, `keySplines`, `keyTimes`, `limitingConeAngle`, `markerHeight`, `markerWidth`, `numOctaves`, `targetX`, `targetY`, `surfaceScale`, `specularConstant`, `specularExponent`, `stdDeviation`, `tableValues`, `viewBox`, `gradientTransform`, `pathLength`, `startOffset`, `textLength`, `lengthAdjust`]);

function pt(e, t, n, r) {
    dt(e, t, void 0, r);
    for (let n in t.attrs) e.setAttribute(ft.has(n) ? n : ut(n), t.attrs[n])
}

function mt(e, t) {
    let {
        style: n
    } = e, r = {};
    for (let i in n)(A(n[i]) || t.style && A(t.style[i]) || me(i, e)) && (r[i] = n[i]);
    return r
}

function ht(e, t) {
    let n = mt(e, t);
    for (let r in e)
        if (A(e[r]) || A(t[r])) {
            let t = r === `x` || r === `y` ? `attr` + r.toUpperCase() : r;
            n[t] = e[r]
        } return n
}

function gt(e, t, n, r = {}, i = {}) {
    return typeof t == `function` && (t = t(n === void 0 ? e.custom : n, r, i)), typeof t == `string` && (t = e.variants && e.variants[t]), typeof t == `function` && (t = t(n === void 0 ? e.custom : n, r, i)), t
}
var _t = e => Array.isArray(e),
    vt = e => !!(e && typeof e == `object` && e.mix && e.toValue),
    yt = e => _t(e) ? e[e.length - 1] || 0 : e;

function bt(e) {
    let t = A(e) ? e.get() : e;
    return vt(t) ? t.toValue() : t
}

function xt({
    scrapeMotionValuesFromProps: e,
    createRenderState: t,
    onMount: n
}, r, i, a) {
    let o = {
        latestValues: Ct(r, i, a, e),
        renderState: t()
    };
    return n && (o.mount = e => n(r, e, o)), o
}
var St = e => (t, n) => {
    let r = (0, a.useContext)(s),
        i = (0, a.useContext)(l),
        o = () => xt(e, t, r, i);
    return n ? o() : E(o)
};

function Ct(e, t, n, r) {
    let i = {},
        a = r(e, {});
    for (let e in a) i[e] = bt(a[e]);
    let {
        initial: o,
        animate: s
    } = e, c = y(e), l = b(e);
    t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
    let u = n ? n.initial === !1 : !1;
    u = u || o === !1;
    let d = u ? s : o;
    return d && typeof d != `boolean` && !_(d) && (Array.isArray(d) ? d : [d]).forEach(t => {
        let n = gt(e, t);
        if (!n) return;
        let {
            transitionEnd: r,
            transition: a,
            ...o
        } = n;
        for (let e in o) {
            let t = o[e];
            if (Array.isArray(t)) {
                let e = u ? t.length - 1 : 0;
                t = t[e]
            }
            t !== null && (i[e] = t)
        }
        for (let e in r) i[e] = r[e]
    }), i
}
var wt = {
        useVisualState: St({
            scrapeMotionValuesFromProps: ht,
            createRenderState: ot,
            onMount: (e, t, {
                renderState: n,
                latestValues: r
            }) => {
                try {
                    n.dimensions = typeof t.getBBox == `function` ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
                at(n, r, {
                    enableHardwareAcceleration: !1
                }, st(t.tagName), e.transformTemplate), pt(t, n)
            }
        })
    },
    Tt = {
        useVisualState: St({
            scrapeMotionValuesFromProps: mt,
            createRenderState: Fe
        })
    };

function Et(e, {
    forwardMotionProps: t = !1
}, n, r, i) {
    return {
        ...ue(e) ? wt : Tt,
        preloadedFeatures: n,
        useRender: lt(t),
        createVisualElement: r,
        projectionNodeConstructor: i,
        Component: e
    }
}
var F;
(function(e) {
    e.Animate = `animate`, e.Hover = `whileHover`, e.Tap = `whileTap`, e.Drag = `whileDrag`, e.Focus = `whileFocus`, e.InView = `whileInView`, e.Exit = `exit`
})(F || (F = {}));

function Dt(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}

function Ot(e, t, n, r) {
    (0, a.useEffect)(() => {
        let i = e.current;
        if (n && i) return Dt(i, t, n, r)
    }, [e, t, n, r])
}

function kt({
    whileFocus: e,
    visualElement: t
}) {
    let {
        animationState: n
    } = t, r = (0, a.useCallback)(() => {
        n && n.setActive(F.Focus, !0)
    }, [n]), i = (0, a.useCallback)(() => {
        n && n.setActive(F.Focus, !1)
    }, [n]);
    Ot(t, `focus`, e ? r : void 0), Ot(t, `blur`, e ? i : void 0)
}
var At = e => e.pointerType === `mouse` ? typeof e.button != `number` || e.button <= 0 : e.isPrimary !== !1;

function jt(e, t = `page`) {
    return {
        point: {
            x: e[t + `X`],
            y: e[t + `Y`]
        }
    }
}
var Mt = e => t => At(t) && e(t, jt(t));

function I(e, t, n, r) {
    return Dt(e, t, Mt(n), r)
}

function Nt(e, t, n, r) {
    return Ot(e, t, n && Mt(n), r)
}

function Pt(e) {
    let t = null;
    return () => t === null && (t = e, () => {
        t = null
    })
}
var Ft = Pt(`dragHorizontal`),
    It = Pt(`dragVertical`);

function Lt(e) {
    let t = !1;
    if (e === `y`) t = It();
    else if (e === `x`) t = Ft();
    else {
        let e = Ft(),
            n = It();
        e && n ? t = () => {
            e(), n()
        } : (e && e(), n && n())
    }
    return t
}

function Rt() {
    let e = Lt(!0);
    return !e || (e(), !1)
}

function zt(e, t, n, r) {
    return (i, a) => {
        i.type === `touch` || Rt() || (n && e.animationState && e.animationState.setActive(F.Hover, t), r && r(i, a))
    }
}

function Bt({
    onHoverStart: e,
    onHoverEnd: t,
    whileHover: n,
    visualElement: r
}) {
    Nt(r, `pointerenter`, (0, a.useMemo)(() => e || n ? zt(r, !0, !!n, e) : void 0, [e, !!n, r]), {
        passive: !e
    }), Nt(r, `pointerleave`, (0, a.useMemo)(() => t || n ? zt(r, !1, !!n, t) : void 0, [e, !!n, r]), {
        passive: !t
    })
}
var Vt = (e, t) => t ? e === t || Vt(e, t.parentElement) : !1;

function Ht(e) {
    return (0, a.useEffect)(() => () => e(), [])
}
var Ut = (e, t) => n => t(e(n)),
    Wt = (...e) => e.reduce(Ut);

function Gt({
    onTap: e,
    onTapStart: t,
    onTapCancel: n,
    whileTap: r,
    visualElement: i,
    ...o
}) {
    let s = e || t || n || r,
        c = (0, a.useRef)(!1),
        l = (0, a.useRef)(null),
        u = {
            passive: !(t || e || n || o.onPointerDown)
        };

    function d() {
        l.current && l.current(), l.current = null
    }

    function f() {
        return d(), c.current = !1, i.getProps().whileTap && i.animationState && i.animationState.setActive(F.Tap, !1), !Rt()
    }

    function p(e, t) {
        var n, r, a, o;
        f() && (Vt(i.current, e.target) ? (o = (a = i.getProps()).onTap) == null || o.call(a, e, t) : (r = (n = i.getProps()).onTapCancel) == null || r.call(n, e, t))
    }

    function m(e, t) {
        var n, r;
        f() && ((r = (n = i.getProps()).onTapCancel) == null || r.call(n, e, t))
    }
    let h = (0, a.useCallback)((e, t) => {
        var n;
        if (d(), c.current) return;
        c.current = !0, l.current = Wt(I(window, `pointerup`, p, u), I(window, `pointercancel`, m, u));
        let r = i.getProps();
        r.whileTap && i.animationState && i.animationState.setActive(F.Tap, !0), (n = r.onTapStart) == null || n.call(r, e, t)
    }, [!!t, i]);
    Nt(i, `pointerdown`, s ? h : void 0, u), Ht(d)
}
var Kt = new WeakMap,
    qt = new WeakMap,
    Jt = e => {
        let t = Kt.get(e.target);
        t && t(e)
    },
    Yt = e => {
        e.forEach(Jt)
    };

function Xt({
    root: e,
    ...t
}) {
    let n = e || document;
    qt.has(n) || qt.set(n, {});
    let r = qt.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(Yt, {
        root: e,
        ...t
    })), r[i]
}

function Zt(e, t, n) {
    let r = Xt(t);
    return Kt.set(e, n), r.observe(e), () => {
        Kt.delete(e), r.unobserve(e)
    }
}

function Qt({
    visualElement: e,
    whileInView: t,
    onViewportEnter: n,
    onViewportLeave: r,
    viewport: i = {}
}) {
    let o = (0, a.useRef)({
            hasEnteredView: !1,
            isInView: !1
        }),
        s = !!(t || n || r);
    i.once && o.current.hasEnteredView && (s = !1), (typeof IntersectionObserver > `u` ? tn : en)(s, o.current, e, i)
}
var $t = {
    some: 0,
    all: 1
};

function en(e, t, n, {
    root: r,
    margin: i,
    amount: o = `some`,
    once: s
}) {
    (0, a.useEffect)(() => {
        if (!e || !n.current) return;
        let a = {
            root: r == null ? void 0 : r.current,
            rootMargin: i,
            threshold: typeof o == `number` ? o : $t[o]
        };
        return Zt(n.current, a, e => {
            let {
                isIntersecting: r
            } = e;
            if (t.isInView === r || (t.isInView = r, s && !r && t.hasEnteredView)) return;
            r && (t.hasEnteredView = !0), n.animationState && n.animationState.setActive(F.InView, r);
            let i = n.getProps(),
                a = r ? i.onViewportEnter : i.onViewportLeave;
            a && a(e)
        })
    }, [e, r, i, o])
}

function tn(e, t, n, {
    fallback: r = !0
}) {
    (0, a.useEffect)(() => {
        e && r && requestAnimationFrame(() => {
            t.hasEnteredView = !0;
            let {
                onViewportEnter: e
            } = n.getProps();
            e && e(null), n.animationState && n.animationState.setActive(F.InView, !0)
        })
    }, [e])
}
var L = e => t => (e(t), null),
    nn = {
        inView: L(Qt),
        tap: L(Gt),
        focus: L(kt),
        hover: L(Bt)
    };

function rn() {
    let e = (0, a.useContext)(l);
    if (e === null) return [!0, null];
    let {
        isPresent: t,
        onExitComplete: n,
        register: r
    } = e, i = (0, a.useId)();
    return (0, a.useEffect)(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0]
}

function an() {
    return on((0, a.useContext)(l))
}

function on(e) {
    return e === null || e.isPresent
}

function sn(e, t) {
    if (!Array.isArray(t)) return !1;
    let n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}
var cn = e => /^\-?\d*\.?\d+$/.test(e),
    ln = e => /^0[^.\s]+$/.test(e),
    R = {
        delta: 0,
        timestamp: 0
    },
    un = 1 / 60 * 1e3,
    dn = typeof performance < `u` ? () => performance.now() : () => Date.now(),
    fn = typeof window < `u` ? e => window.requestAnimationFrame(e) : e => setTimeout(() => e(dn()), un);

function pn(e) {
    let t = [],
        n = [],
        r = 0,
        i = !1,
        a = !1,
        o = new WeakSet,
        s = {
            schedule: (e, a = !1, s = !1) => {
                let c = s && i,
                    l = c ? t : n;
                return a && o.add(e), l.indexOf(e) === -1 && (l.push(e), c && i && (r = t.length)), e
            },
            cancel: e => {
                let t = n.indexOf(e);
                t !== -1 && n.splice(t, 1), o.delete(e)
            },
            process: c => {
                if (i) a = !0;
                else {
                    if (i = !0, [t, n] = [n, t], n.length = 0, r = t.length, r)
                        for (let n = 0; n < r; n++) {
                            let r = t[n];
                            r(c), o.has(r) && (s.schedule(r), e())
                        }
                    i = !1, a && (a = !1, s.process(c))
                }
            }
        };
    return s
}
var mn = 40,
    hn = !0,
    gn = !1,
    _n = !1,
    vn = [`read`, `update`, `preRender`, `render`, `postRender`],
    yn = vn.reduce((e, t) => (e[t] = pn(() => gn = !0), e), {}),
    z = vn.reduce((e, t) => {
        let n = yn[t];
        return e[t] = (e, t = !1, r = !1) => (gn || Cn(), n.schedule(e, t, r)), e
    }, {}),
    B = vn.reduce((e, t) => (e[t] = yn[t].cancel, e), {}),
    bn = vn.reduce((e, t) => (e[t] = () => yn[t].process(R), e), {}),
    xn = e => yn[e].process(R),
    Sn = e => {
        gn = !1, R.delta = hn ? un : Math.max(Math.min(e - R.timestamp, mn), 1), R.timestamp = e, _n = !0, vn.forEach(xn), _n = !1, gn && (hn = !1, fn(Sn))
    },
    Cn = () => {
        gn = !0, hn = !0, _n || fn(Sn)
    };

function wn(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function Tn(e, t) {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}

function En([...e], t, n) {
    let r = t < 0 ? e.length + t : t;
    if (r >= 0 && r < e.length) {
        let r = n < 0 ? e.length + n : n,
            [i] = e.splice(t, 1);
        e.splice(r, 0, i)
    }
    return e
}
var Dn = class {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return wn(this.subscriptions, e), () => Tn(this.subscriptions, e)
    }
    notify(e, t, n) {
        let r = this.subscriptions.length;
        if (r) {
            if (r === 1) this.subscriptions[0](e, t, n);
            else
                for (let i = 0; i < r; i++) {
                    let r = this.subscriptions[i];
                    r && r(e, t, n)
                }
        }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
};

function On(e, t) {
    return t ? 1e3 / t * e : 0
}
var kn = e => !isNaN(parseFloat(e)),
    An = class {
        constructor(e, t = {}) {
            this.version = `8.5.2`, this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (e, t = !0) => {
                this.prev = this.current, this.current = e;
                let {
                    delta: n,
                    timestamp: r
                } = R;
                this.lastUpdated !== r && (this.timeDelta = n, this.lastUpdated = r, z.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
            }, this.scheduleVelocityCheck = () => z.postRender(this.velocityCheck), this.velocityCheck = ({
                timestamp: e
            }) => {
                e !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
            }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = kn(this.current), this.owner = t.owner
        }
        onChange(e) {
            return this.on(`change`, e)
        }
        on(e, t) {
            this.events[e] || (this.events[e] = new Dn);
            let n = this.events[e].add(t);
            return e === `change` ? () => {
                n(), z.read(() => {
                    this.events.change.getSize() || this.stop()
                })
            } : n
        }
        clearListeners() {
            for (let e in this.events) this.events[e].clear()
        }
        attach(e, t) {
            this.passiveEffect = e, this.stopPassiveEffect = t
        }
        set(e, t = !0) {
            !t || !this.passiveEffect ? this.updateAndNotify(e, t) : this.passiveEffect(e, this.updateAndNotify)
        }
        setWithVelocity(e, t, n) {
            this.set(t), this.prev = e, this.timeDelta = n
        }
        jump(e) {
            this.updateAndNotify(e), this.prev = e, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        get() {
            return this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            return this.canTrackVelocity ? On(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
        }
        start(e) {
            return this.stop(), new Promise(t => {
                this.hasAnimated = !0, this.animation = e(t) || null, this.events.animationStart && this.events.animationStart.notify()
            }).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
            })
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
    };

function V(e, t) {
    return new An(e, t)
}
var jn = (e, t) => n => !!(De(n) && Ee.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
    Mn = (e, t, n) => r => {
        if (!De(r)) return r;
        let [i, a, o, s] = r.match(we);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(a),
            [n]: parseFloat(o),
            alpha: s === void 0 ? 1 : parseFloat(s)
        }
    },
    Nn = e => be(0, 255, e),
    Pn = {
        ...j,
        transform: e => Math.round(Nn(e))
    },
    H = {
        test: jn(`rgb`, `red`),
        parse: Mn(`red`, `green`, `blue`),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => `rgba(` + Pn.transform(e) + `, ` + Pn.transform(t) + `, ` + Pn.transform(n) + `, ` + Ce(xe.transform(r)) + `)`
    };

function Fn(e) {
    let t = ``,
        n = ``,
        r = ``,
        i = ``;
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
var In = {
        test: jn(`#`),
        parse: Fn,
        transform: H.transform
    },
    Ln = {
        test: jn(`hsl`, `hue`),
        parse: Mn(`hue`, `saturation`, `lightness`),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => `hsla(` + Math.round(e) + `, ` + N.transform(Ce(t)) + `, ` + N.transform(Ce(n)) + `, ` + Ce(xe.transform(r)) + `)`
    },
    U = {
        test: e => H.test(e) || In.test(e) || Ln.test(e),
        parse: e => H.test(e) ? H.parse(e) : Ln.test(e) ? Ln.parse(e) : In.parse(e),
        transform: e => De(e) ? e : e.hasOwnProperty(`red`) ? H.transform(e) : Ln.transform(e)
    },
    Rn = "${c}",
    zn = "${n}";

function Bn(e) {
    var t, n;
    return isNaN(e) && De(e) && (((t = e.match(we)) == null ? void 0 : t.length) || 0) + (((n = e.match(Te)) == null ? void 0 : n.length) || 0) > 0
}

function Vn(e) {
    typeof e == `number` && (e = `${e}`);
    let t = [],
        n = 0,
        r = 0,
        i = e.match(Te);
    i && (n = i.length, e = e.replace(Te, Rn), t.push(...i.map(U.parse)));
    let a = e.match(we);
    return a && (r = a.length, e = e.replace(we, zn), t.push(...a.map(j.parse))), {
        values: t,
        numColors: n,
        numNumbers: r,
        tokenised: e
    }
}

function Hn(e) {
    return Vn(e).values
}

function Un(e) {
    let {
        values: t,
        numColors: n,
        tokenised: r
    } = Vn(e), i = t.length;
    return e => {
        let t = r;
        for (let r = 0; r < i; r++) t = t.replace(r < n ? Rn : zn, r < n ? U.transform(e[r]) : Ce(e[r]));
        return t
    }
}
var Wn = e => typeof e == `number` ? 0 : e;

function Gn(e) {
    let t = Hn(e);
    return Un(e)(t.map(Wn))
}
var W = {
        test: Bn,
        parse: Hn,
        createTransformer: Un,
        getAnimatableNone: Gn
    },
    Kn = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);

function qn(e) {
    let [t, n] = e.slice(0, -1).split(`(`);
    if (t === `drop-shadow`) return e;
    let [r] = n.match(we) || [];
    if (!r) return e;
    let i = n.replace(r, ``),
        a = +!!Kn.has(t);
    return r !== n && (a *= 100), t + `(` + a + i + `)`
}
var Jn = /([a-z-]*)\(.*?\)/g,
    Yn = {
        ...W,
        getAnimatableNone: e => {
            let t = e.match(Jn);
            return t ? t.map(qn).join(` `) : e
        }
    },
    Xn = {
        ...Ne,
        color: U,
        backgroundColor: U,
        outlineColor: U,
        fill: U,
        stroke: U,
        borderColor: U,
        borderTopColor: U,
        borderRightColor: U,
        borderBottomColor: U,
        borderLeftColor: U,
        filter: Yn,
        WebkitFilter: Yn
    },
    Zn = e => Xn[e];

function Qn(e, t) {
    var n;
    let r = Zn(e);
    return r !== Yn && (r = W), (n = r.getAnimatableNone) == null ? void 0 : n.call(r, t)
}
var $n = e => t => t.test(e),
    er = [j, P, N, M, Ae, ke, {
        test: e => e === `auto`,
        parse: e => e
    }],
    tr = e => er.find($n(e)),
    nr = [...er, U, W],
    rr = e => nr.find($n(e));

function ir(e) {
    let t = {};
    return e.values.forEach((e, n) => t[n] = e.get()), t
}

function ar(e) {
    let t = {};
    return e.values.forEach((e, n) => t[n] = e.getVelocity()), t
}

function or(e, t, n) {
    let r = e.getProps();
    return gt(r, t, n === void 0 ? r.custom : n, ir(e), ar(e))
}

function sr(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, V(n))
}

function cr(e, t) {
    let n = or(e, t),
        {
            transitionEnd: r = {},
            transition: i = {},
            ...a
        } = n ? e.makeTargetAnimatable(n, !1) : {};
    a = {
        ...a,
        ...r
    };
    for (let t in a) sr(e, t, yt(a[t]))
}

function lr(e, t, n) {
    let r = Object.keys(t).filter(t => !e.hasValue(t)),
        i = r.length;
    if (i)
        for (let a = 0; a < i; a++) {
            let i = r[a],
                o = t[i],
                s = null;
            Array.isArray(o) && (s = o[0]), s === null && (s = n[i] ?? e.readValue(i) ?? t[i]), s != null && (typeof s == `string` && (cn(s) || ln(s)) ? s = parseFloat(s) : !rr(s) && W.test(o) && (s = Qn(i, o)), e.addValue(i, V(s, {
                owner: e
            })), n[i] === void 0 && (n[i] = s), s !== null && e.setBaseTarget(i, s))
        }
}

function ur(e, t) {
    if (t) return (t[e] || t.default || t).from
}

function dr(e, t, n) {
    var r;
    let i = {};
    for (let a in e) {
        let e = ur(a, t);
        i[a] = e === void 0 ? (r = n.getValue(a)) == null ? void 0 : r.get() : e
    }
    return i
}

function fr(e) {
    return !!(A(e) && e.add)
}
var pr = `data-` + ut(`framerAppearId`),
    mr = function() {},
    hr = function() {},
    gr = e => e * 1e3,
    _r = {
        current: !1
    },
    vr = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    yr = e => t => 1 - e(1 - t),
    br = e => e * e,
    xr = yr(br),
    Sr = vr(br),
    G = (e, t, n) => -n * e + n * t + e;

function Cr(e, t, n) {
    return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function wr({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        a = 0,
        o = 0;
    if (!t) i = a = o = n;
    else {
        let r = n < .5 ? n * (1 + t) : n + t - n * t,
            s = 2 * n - r;
        i = Cr(s, r, e + 1 / 3), a = Cr(s, r, e), o = Cr(s, r, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(a * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
var Tr = (e, t, n) => {
        let r = e * e;
        return Math.sqrt(Math.max(0, n * (t * t - r) + r))
    },
    Er = [In, H, Ln],
    Dr = e => Er.find(t => t.test(e));

function Or(e) {
    let t = Dr(e);
    `${e}`;
    let n = t.parse(e);
    return t === Ln && (n = wr(n)), n
}
var kr = (e, t) => {
    let n = Or(e),
        r = Or(t),
        i = {
            ...n
        };
    return e => (i.red = Tr(n.red, r.red, e), i.green = Tr(n.green, r.green, e), i.blue = Tr(n.blue, r.blue, e), i.alpha = G(n.alpha, r.alpha, e), H.transform(i))
};

function Ar(e, t) {
    return typeof e == `number` ? n => G(e, t, n) : U.test(e) ? kr(e, t) : Nr(e, t)
}
var jr = (e, t) => {
        let n = [...e],
            r = n.length,
            i = e.map((e, n) => Ar(e, t[n]));
        return e => {
            for (let t = 0; t < r; t++) n[t] = i[t](e);
            return n
        }
    },
    Mr = (e, t) => {
        let n = {
                ...e,
                ...t
            },
            r = {};
        for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ar(e[i], t[i]));
        return e => {
            for (let t in r) n[t] = r[t](e);
            return n
        }
    },
    Nr = (e, t) => {
        let n = W.createTransformer(t),
            r = Vn(e),
            i = Vn(t);
        return r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? Wt(jr(r.values, i.values), n) : (`${e}${t}`, n => `${n>0?t:e}`)
    },
    Pr = (e, t, n) => {
        let r = t - e;
        return r === 0 ? 1 : (n - e) / r
    },
    Fr = (e, t) => n => G(e, t, n);

function Ir(e) {
    return typeof e == `number` ? Fr : typeof e == `string` ? U.test(e) ? kr : Nr : Array.isArray(e) ? jr : typeof e == `object` ? Mr : Fr
}

function Lr(e, t, n) {
    let r = [],
        i = n || Ir(e[0]),
        a = e.length - 1;
    for (let n = 0; n < a; n++) {
        let a = i(e[n], e[n + 1]);
        t && (a = Wt(Array.isArray(t) ? t[n] : t, a)), r.push(a)
    }
    return r
}

function Rr(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: i
} = {}) {
    let a = e.length;
    t.length, !r || !Array.isArray(r) || (r.length, a - 1), e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
    let o = Lr(t, r, i),
        s = o.length,
        c = t => {
            let n = 0;
            if (s > 1)
                for (; n < e.length - 2 && !(t < e[n + 1]); n++);
            let r = Pr(e[n], e[n + 1], t);
            return o[n](r)
        };
    return n ? t => c(be(e[0], e[a - 1], t)) : c
}
var zr = e => e,
    Br = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    Vr = 1e-7,
    Hr = 12;

function Ur(e, t, n, r, i) {
    let a, o, s = 0;
    do o = t + (n - t) / 2, a = Br(o, r, i) - e, a > 0 ? n = o : t = o; while (Math.abs(a) > Vr && ++s < Hr);
    return o
}

function Wr(e, t, n, r) {
    if (e === t && n === r) return zr;
    let i = t => Ur(t, 0, 1, e, n);
    return e => e === 0 || e === 1 ? e : Br(i(e), t, r)
}
var Gr = e => 1 - Math.sin(Math.acos(e)),
    Kr = yr(Gr),
    qr = vr(Kr),
    Jr = Wr(.33, 1.53, .69, .99),
    Yr = yr(Jr),
    Xr = {
        linear: zr,
        easeIn: br,
        easeInOut: Sr,
        easeOut: xr,
        circIn: Gr,
        circInOut: qr,
        circOut: Kr,
        backIn: Yr,
        backInOut: vr(Yr),
        backOut: Jr,
        anticipate: e => (e *= 2) < 1 ? .5 * Yr(e) : .5 * (2 - 2 ** (-10 * (e - 1)))
    },
    Zr = e => {
        if (Array.isArray(e)) {
            e.length;
            let [t, n, r, i] = e;
            return Wr(t, n, r, i)
        }
        return typeof e == `string` ? (Xr[e], `${e}`, Xr[e]) : e
    },
    Qr = e => Array.isArray(e) && typeof e[0] != `number`;

function $r(e, t) {
    return e.map(() => t || Sr).splice(0, e.length - 1)
}

function ei(e) {
    let t = e.length;
    return e.map((e, n) => n === 0 ? 0 : n / (t - 1))
}

function ti(e, t) {
    return e.map(e => e * t)
}

function ni({
    keyframes: e,
    ease: t = Sr,
    times: n,
    duration: r = 300
}) {
    e = [...e];
    let i = Qr(t) ? t.map(Zr) : Zr(t),
        a = {
            done: !1,
            value: e[0]
        },
        o = ti(n && n.length === e.length ? n : ei(e), r);

    function s() {
        return Rr(o, e, {
            ease: Array.isArray(i) ? i : $r(e, i)
        })
    }
    let c = s();
    return {
        next: e => (a.value = c(e), a.done = e >= r, a),
        flipTarget: () => {
            e.reverse(), c = s()
        }
    }
}
var ri = .001,
    ii = .01,
    ai = .05;

function oi({
    duration: e = 800,
    bounce: t = .25,
    velocity: n = 0,
    mass: r = 1
}) {
    let i, a, o = 1 - t;
    o = be(ai, 1, o), e = be(ii, 10, e / 1e3), o < 1 ? (i = t => {
        let r = t * o,
            i = r * e,
            a = r - n,
            s = li(t, o),
            c = Math.exp(-i);
        return ri - a / s * c
    }, a = t => {
        let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = li(t ** 2, o);
        return (-i(t) + ri > 0 ? -1 : 1) * ((a - s) * c) / l
    }) : (i = t => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = t => Math.exp(-t * e) * ((n - t) * (e * e)));
    let s = 5 / e,
        c = ci(i, a, s);
    if (e *= 1e3, isNaN(c)) return {
        stiffness: 100,
        damping: 10,
        duration: e
    };
    {
        let t = c ** 2 * r;
        return {
            stiffness: t,
            damping: o * 2 * Math.sqrt(r * t),
            duration: e
        }
    }
}
var si = 12;

function ci(e, t, n) {
    let r = n;
    for (let n = 1; n < si; n++) r -= e(r) / t(r);
    return r
}

function li(e, t) {
    return e * Math.sqrt(1 - t * t)
}
var ui = [`duration`, `bounce`],
    di = [`stiffness`, `damping`, `mass`];

function fi(e, t) {
    return t.some(t => e[t] !== void 0)
}

function pi(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!fi(e, di) && fi(e, ui)) {
        let n = oi(e);
        t = {
            ...t,
            ...n,
            velocity: 0,
            mass: 1
        }, t.isResolvedFromDuration = !0
    }
    return t
}
var mi = 5;

function hi({
    keyframes: e,
    restDelta: t,
    restSpeed: n,
    ...r
}) {
    let i = e[0],
        a = e[e.length - 1],
        o = {
            done: !1,
            value: i
        },
        {
            stiffness: s,
            damping: c,
            mass: l,
            velocity: u,
            duration: d,
            isResolvedFromDuration: f
        } = pi(r),
        p = gi,
        m = u ? -(u / 1e3) : 0,
        h = c / (2 * Math.sqrt(s * l));

    function g() {
        let e = a - i,
            r = Math.sqrt(s / l) / 1e3,
            o = Math.abs(e) < 5;
        if (n || (n = o ? .01 : 2), t || (t = o ? .005 : .5), h < 1) {
            let t = li(r, h);
            p = n => {
                let i = Math.exp(-h * r * n);
                return a - i * ((m + h * r * e) / t * Math.sin(t * n) + e * Math.cos(t * n))
            }
        } else if (h === 1) p = t => a - Math.exp(-r * t) * (e + (m + r * e) * t);
        else {
            let t = r * Math.sqrt(h * h - 1);
            p = n => {
                let i = Math.exp(-h * r * n),
                    o = Math.min(t * n, 300);
                return a - i * ((m + h * r * e) * Math.sinh(o) + t * e * Math.cosh(o)) / t
            }
        }
    }
    return g(), {
        next: e => {
            let r = p(e);
            if (f) o.done = e >= d;
            else {
                let i = m;
                if (e !== 0) {
                    if (h < 1) {
                        let t = Math.max(0, e - mi);
                        i = On(r - p(t), e - t)
                    } else i = 0
                }
                let s = Math.abs(i) <= n,
                    c = Math.abs(a - r) <= t;
                o.done = s && c
            }
            return o.value = o.done ? a : r, o
        },
        flipTarget: () => {
            m = -m, [i, a] = [a, i], g()
        }
    }
}
hi.needsInterpolation = (e, t) => typeof e == `string` || typeof t == `string`;
var gi = e => 0;

function _i({
    keyframes: e = [0],
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 350,
    restDelta: i = .5,
    modifyTarget: a
}) {
    let o = e[0],
        s = {
            done: !1,
            value: o
        },
        c = n * t,
        l = o + c,
        u = a === void 0 ? l : a(l);
    return u !== l && (c = u - o), {
        next: e => {
            let t = -c * Math.exp(-e / r);
            return s.done = !(t > i || t < -i), s.value = s.done ? u : u + t, s
        },
        flipTarget: () => {}
    }
}
var vi = {
    decay: _i,
    keyframes: ni,
    tween: ni,
    spring: hi
};

function yi(e, t, n = 0) {
    return e - t - n
}

function bi(e, t = 0, n = 0, r = !0) {
    return r ? yi(t + -e, t, n) : t - (e - t) + n
}

function xi(e, t, n, r) {
    return r ? e >= t + n : e <= -n
}
var Si = e => {
    let t = ({
        delta: t
    }) => e(t);
    return {
        start: () => z.update(t, !0),
        stop: () => B.update(t)
    }
};

function Ci({
    duration: e,
    driver: t = Si,
    elapsed: n = 0,
    repeat: r = 0,
    repeatType: i = `loop`,
    repeatDelay: a = 0,
    keyframes: o,
    autoplay: s = !0,
    onPlay: c,
    onStop: l,
    onComplete: u,
    onRepeat: d,
    onUpdate: f,
    type: p = `keyframes`,
    ...m
}) {
    var h, g;
    let _ = n,
        v, y = 0,
        b = e,
        x = !1,
        S = !0,
        C, w = vi[o.length > 2 ? `keyframes` : p] || ni,
        T = o[0],
        ee = o[o.length - 1],
        E = {
            done: !1,
            value: T
        };
    (g = (h = w).needsInterpolation) != null && g.call(h, T, ee) && (C = Rr([0, 100], [T, ee], {
        clamp: !1
    }), o = [0, 100]);
    let D = w({
        ...m,
        duration: e,
        keyframes: o
    });

    function te() {
        y++, i === `reverse` ? (S = y % 2 == 0, n = bi(n, b, a, S)) : (n = yi(n, b, a), i === `mirror` && D.flipTarget()), x = !1, d && d()
    }

    function ne() {
        v && v.stop(), u && u()
    }

    function O(e) {
        S || (e = -e), n += e, x || (E = D.next(Math.max(0, n)), C && (E.value = C(E.value)), x = S ? E.done : n <= 0), f && f(E.value), x && (y === 0 && (b = b === void 0 ? n : b), y < r ? xi(n, b, a, S) && te() : ne())
    }

    function re() {
        c && c(), v = t(O), v.start()
    }
    return s && re(), {
        stop: () => {
            l && l(), v && v.stop()
        },
        set currentTime(e) {
            n = _, O(e)
        },
        sample: t => {
            n = _;
            let r = e && typeof e == `number` ? Math.max(e * .5, 50) : 50,
                i = 0;
            for (O(0); i <= t;) {
                let e = t - i;
                O(Math.min(e, r)), i += r
            }
            return E
        }
    }
}

function wi(e) {
    return !e || Array.isArray(e) || typeof e == `string` && Ei[e]
}
var Ti = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    Ei = {
        linear: `linear`,
        ease: `ease`,
        easeIn: `ease-in`,
        easeOut: `ease-out`,
        easeInOut: `ease-in-out`,
        circIn: Ti([0, .65, .55, 1]),
        circOut: Ti([.55, 0, 1, .45]),
        backIn: Ti([.31, .01, .66, -.59]),
        backOut: Ti([.33, 1.53, .69, .99])
    };

function Di(e) {
    if (e) return Array.isArray(e) ? Ti(e) : Ei[e]
}

function Oi(e, t, n, {
    delay: r = 0,
    duration: i,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s,
    times: c
} = {}) {
    return e.animate({
        [t]: n,
        offset: c
    }, {
        delay: r,
        duration: i,
        easing: Di(s),
        fill: `both`,
        iterations: a + 1,
        direction: o === `reverse` ? `alternate` : `normal`
    })
}
var ki = {
        waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`)
    },
    Ai = {},
    ji = {};
for (let e in ki) ji[e] = () => (Ai[e] === void 0 && (Ai[e] = ki[e]()), Ai[e]);

function Mi(e, {
    repeat: t,
    repeatType: n = `loop`
}) {
    return e[t && n !== `loop` && t % 2 == 1 ? 0 : e.length - 1]
}
var Ni = new Set([`opacity`]),
    Pi = 10;

function Fi(e, t, {
    onUpdate: n,
    onComplete: r,
    ...i
}) {
    if (!(ji.waapi() && Ni.has(t) && !i.repeatDelay && i.repeatType !== `mirror` && i.damping !== 0)) return !1;
    let {
        keyframes: a,
        duration: o = 300,
        elapsed: s = 0,
        ease: c
    } = i;
    if (i.type === `spring` || !wi(i.ease)) {
        if (i.repeat === 1 / 0) return;
        let e = Ci({
                ...i,
                elapsed: 0
            }),
            t = {
                done: !1,
                value: a[0]
            },
            n = [],
            r = 0;
        for (; !t.done && r < 2e4;) t = e.sample(r), n.push(t.value), r += Pi;
        a = n, o = r - Pi, c = `linear`
    }
    let l = Oi(e.owner.current, t, a, {
        ...i,
        delay: -s,
        duration: o,
        ease: c
    });
    return l.onfinish = () => {
        e.set(Mi(a, i)), r && r()
    }, {
        get currentTime() {
            return l.currentTime || 0
        },
        set currentTime(e) {
            l.currentTime = e
        },
        stop: () => {
            let {
                currentTime: t
            } = l;
            if (t) {
                let n = Ci({
                    ...i,
                    autoplay: !1
                });
                e.setWithVelocity(n.sample(t - Pi).value, n.sample(t).value, Pi)
            }
            z.update(() => l.cancel())
        }
    }
}

function Ii(e, t) {
    let n = performance.now(),
        r = ({
            timestamp: i
        }) => {
            let a = i - n;
            a >= t && (B.read(r), e(a - t))
        };
    return z.read(r, !0), () => B.read(r)
}

function Li({
    keyframes: e,
    elapsed: t,
    onUpdate: n,
    onComplete: r
}) {
    let i = () => {
        n && n(e[e.length - 1]), r && r()
    };
    return t ? {
        stop: Ii(i, -t)
    } : i()
}

function Ri({
    keyframes: e,
    velocity: t = 0,
    min: n,
    max: r,
    power: i = .8,
    timeConstant: a = 750,
    bounceStiffness: o = 500,
    bounceDamping: s = 10,
    restDelta: c = 1,
    modifyTarget: l,
    driver: u,
    onUpdate: d,
    onComplete: f,
    onStop: p
}) {
    let m = e[0],
        h;

    function g(e) {
        return n !== void 0 && e < n || r !== void 0 && e > r
    }

    function _(e) {
        return n === void 0 ? r : r === void 0 || Math.abs(n - e) < Math.abs(r - e) ? n : r
    }

    function v(e) {
        h == null || h.stop(), h = Ci({
            keyframes: [0, 1],
            velocity: 0,
            ...e,
            driver: u,
            onUpdate: t => {
                var n;
                d == null || d(t), (n = e.onUpdate) == null || n.call(e, t)
            },
            onComplete: f,
            onStop: p
        })
    }

    function y(e) {
        v({
            type: `spring`,
            stiffness: o,
            damping: s,
            restDelta: c,
            ...e
        })
    }
    if (g(m)) y({
        velocity: t,
        keyframes: [m, _(m)]
    });
    else {
        let e = i * t + m;
        l !== void 0 && (e = l(e));
        let r = _(e),
            o = r === n ? -1 : 1,
            s, u;
        v({
            type: `decay`,
            keyframes: [m, 0],
            velocity: t,
            timeConstant: a,
            power: i,
            restDelta: c,
            modifyTarget: l,
            onUpdate: g(e) ? e => {
                s = u, u = e, t = On(e - s, R.delta), (o === 1 && e > r || o === -1 && e < r) && y({
                    keyframes: [e, r],
                    velocity: t
                })
            } : void 0
        })
    }
    return {
        stop: () => h == null ? void 0 : h.stop()
    }
}
var K = () => ({
        type: `spring`,
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    }),
    zi = e => ({
        type: `spring`,
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    Bi = () => ({
        type: `keyframes`,
        ease: `linear`,
        duration: .3
    }),
    Vi = {
        type: `keyframes`,
        duration: .8
    },
    Hi = {
        x: K,
        y: K,
        z: K,
        rotate: K,
        rotateX: K,
        rotateY: K,
        rotateZ: K,
        scaleX: zi,
        scaleY: zi,
        scale: zi,
        opacity: Bi,
        backgroundColor: Bi,
        color: Bi,
        default: zi
    },
    Ui = (e, {
        keyframes: t
    }) => t.length > 2 ? Vi : (Hi[e] || Hi.default)(t[1]),
    Wi = (e, t) => e !== `zIndex` && !!(typeof t == `number` || Array.isArray(t) || typeof t == `string` && W.test(t) && !t.startsWith(`url(`));

function Gi({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: a,
    repeatType: o,
    repeatDelay: s,
    from: c,
    elapsed: l,
    ...u
}) {
    return !!Object.keys(u).length
}

function Ki(e) {
    return e === 0 || typeof e == `string` && parseFloat(e) === 0 && e.indexOf(` `) === -1
}

function qi(e) {
    return typeof e == `number` ? 0 : Qn(``, e)
}

function Ji(e, t) {
    return e[t] || e.default || e
}

function Yi(e, t, n, r) {
    let i = Wi(t, n),
        a = r.from === void 0 ? e.get() : r.from;
    return a === `none` && i && typeof n == `string` ? a = Qn(t, n) : Ki(a) && typeof n == `string` ? a = qi(n) : !Array.isArray(n) && Ki(n) && typeof a == `string` && (n = qi(a)), Array.isArray(n) ? (n[0] === null && (n[0] = a), n) : [a, n]
}
var Xi = (e, t, n, r = {}) => i => {
    let a = Ji(r, e) || {},
        o = a.delay || r.delay || 0,
        {
            elapsed: s = 0
        } = r;
    s -= gr(o);
    let c = Yi(t, e, n, a),
        l = c[0],
        u = c[c.length - 1],
        d = Wi(e, l),
        f = Wi(e, u);
    `${e}${l}${u}${l}${l}${u}`;
    let p = {
        keyframes: c,
        velocity: t.getVelocity(),
        ...a,
        elapsed: s,
        onUpdate: e => {
            t.set(e), a.onUpdate && a.onUpdate(e)
        },
        onComplete: () => {
            i(), a.onComplete && a.onComplete()
        }
    };
    if (!d || !f || _r.current || a.type === !1) return Li(p);
    if (a.type === `inertia`) return Ri(p);
    Gi(a) || (p = {
        ...p,
        ...Ui(e, p)
    }), p.duration && (p.duration = gr(p.duration)), p.repeatDelay && (p.repeatDelay = gr(p.repeatDelay));
    let m = t.owner,
        h = m && m.current;
    if (m && h instanceof HTMLElement && !(m != null && m.getProps().onUpdate)) {
        let n = Fi(t, e, p);
        if (n) return n
    }
    return Ci(p)
};

function Zi(e, t, n = {}) {
    e.notify(`AnimationStart`, t);
    let r;
    if (Array.isArray(t)) {
        let i = t.map(t => Qi(e, t, n));
        r = Promise.all(i)
    } else r = typeof t == `string` ? Qi(e, t, n) : $i(e, typeof t == `function` ? or(e, t, n.custom) : t, n);
    return r.then(() => e.notify(`AnimationComplete`, t))
}

function Qi(e, t, n = {}) {
    var r;
    let i = or(e, t, n.custom),
        {
            transition: a = e.getDefaultTransition() || {}
        } = i || {};
    n.transitionOverride && (a = n.transitionOverride);
    let o = i ? () => $i(e, i, n) : () => Promise.resolve(),
        s = (r = e.variantChildren) != null && r.size ? (r = 0) => {
            let {
                delayChildren: i = 0,
                staggerChildren: o,
                staggerDirection: s
            } = a;
            return ea(e, t, i + r, o, s, n)
        } : () => Promise.resolve(),
        {
            when: c
        } = a;
    if (c) {
        let [e, t] = c === `beforeChildren` ? [o, s] : [s, o];
        return e().then(t)
    }
    return Promise.all([o(), s(n.delay)])
}

function $i(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: i
} = {}) {
    var a;
    let {
        transition: o = e.getDefaultTransition(),
        transitionEnd: s,
        ...c
    } = e.makeTargetAnimatable(t), l = e.getValue(`willChange`);
    r && (o = r);
    let u = [],
        d = i && ((a = e.animationState) == null ? void 0 : a.getState()[i]);
    for (let t in c) {
        let r = e.getValue(t),
            i = c[t];
        if (!r || i === void 0 || d && na(d, t)) continue;
        let a = {
            delay: n,
            elapsed: 0,
            ...o
        };
        if (window.HandoffAppearAnimations && !r.hasAnimated) {
            let n = e.getProps()[pr];
            n && (a.elapsed = window.HandoffAppearAnimations(n, t, r, z))
        }
        let s = r.start(Xi(t, r, i, e.shouldReduceMotion && k.has(t) ? {
            type: !1
        } : a));
        fr(l) && (l.add(t), s = s.then(() => l.remove(t))), u.push(s)
    }
    return Promise.all(u).then(() => {
        s && cr(e, s)
    })
}

function ea(e, t, n = 0, r = 0, i = 1, a) {
    let o = [],
        s = (e.variantChildren.size - 1) * r,
        c = i === 1 ? (e = 0) => e * r : (e = 0) => s - e * r;
    return Array.from(e.variantChildren).sort(ta).forEach((e, r) => {
        e.notify(`AnimationStart`, t), o.push(Qi(e, t, {
            ...a,
            delay: n + c(r)
        }).then(() => e.notify(`AnimationComplete`, t)))
    }), Promise.all(o)
}

function ta(e, t) {
    return e.sortNodePosition(t)
}

function na({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    let r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}
var ra = [F.Animate, F.InView, F.Focus, F.Hover, F.Tap, F.Drag, F.Exit],
    ia = [...ra].reverse(),
    aa = ra.length;

function oa(e) {
    return t => Promise.all(t.map(({
        animation: t,
        options: n
    }) => Zi(e, t, n)))
}

function sa(e) {
    let t = oa(e),
        n = la(),
        r = !0,
        i = (t, n) => {
            let r = or(e, n);
            if (r) {
                let {
                    transition: e,
                    transitionEnd: n,
                    ...i
                } = r;
                t = {
                    ...t,
                    ...i,
                    ...n
                }
            }
            return t
        };

    function a(n) {
        t = n(e)
    }

    function o(a, o) {
        let s = e.getProps(),
            c = e.getVariantContext(!0) || {},
            l = [],
            u = new Set,
            d = {},
            f = 1 / 0;
        for (let t = 0; t < aa; t++) {
            let p = ia[t],
                m = n[p],
                h = s[p] === void 0 ? c[p] : s[p],
                v = g(h),
                y = p === o ? m.isActive : null;
            y === !1 && (f = t);
            let b = h === c[p] && h !== s[p] && v;
            if (b && r && e.manuallyAnimateOnMount && (b = !1), m.protectedKeys = {
                    ...d
                }, !m.isActive && y === null || !h && !m.prevProp || _(h) || typeof h == `boolean`) continue;
            let x = ca(m.prevProp, h),
                S = x || p === o && m.isActive && !b && v || t > f && v,
                C = Array.isArray(h) ? h : [h],
                w = C.reduce(i, {});
            y === !1 && (w = {});
            let {
                prevResolvedValues: T = {}
            } = m, ee = {
                ...T,
                ...w
            }, E = e => {
                S = !0, u.delete(e), m.needsAnimating[e] = !0
            };
            for (let e in ee) {
                let t = w[e],
                    n = T[e];
                d.hasOwnProperty(e) || (t === n ? t !== void 0 && u.has(e) ? E(e) : m.protectedKeys[e] = !0 : _t(t) && _t(n) ? !sn(t, n) || x ? E(e) : m.protectedKeys[e] = !0 : t === void 0 ? u.add(e) : E(e))
            }
            m.prevProp = h, m.prevResolvedValues = w, m.isActive && (d = {
                ...d,
                ...w
            }), r && e.blockInitialAnimation && (S = !1), S && !b && l.push(...C.map(e => ({
                animation: e,
                options: {
                    type: p,
                    ...a
                }
            })))
        }
        if (u.size) {
            let t = {};
            u.forEach(n => {
                let r = e.getBaseTarget(n);
                r !== void 0 && (t[n] = r)
            }), l.push({
                animation: t
            })
        }
        let p = !!l.length;
        return r && s.initial === !1 && !e.manuallyAnimateOnMount && (p = !1), r = !1, p ? t(l) : Promise.resolve()
    }

    function s(t, r, i) {
        var a;
        if (n[t].isActive === r) return Promise.resolve();
        (a = e.variantChildren) == null || a.forEach(e => {
            var n;
            return (n = e.animationState) == null ? void 0 : n.setActive(t, r)
        }), n[t].isActive = r;
        let s = o(i, t);
        for (let e in n) n[e].protectedKeys = {};
        return s
    }
    return {
        animateChanges: o,
        setActive: s,
        setAnimateFunction: a,
        getState: () => n
    }
}

function ca(e, t) {
    return typeof t == `string` ? t !== e : Array.isArray(t) ? !sn(t, e) : !1
}

function q(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function la() {
    return {
        [F.Animate]: q(!0),
        [F.InView]: q(),
        [F.Hover]: q(),
        [F.Tap]: q(),
        [F.Drag]: q(),
        [F.Focus]: q(),
        [F.Exit]: q()
    }
}
var ua = {
        animation: L(({
            visualElement: e,
            animate: t
        }) => {
            e.animationState || (e.animationState = sa(e)), _(t) && (0, a.useEffect)(() => t.subscribe(e), [t])
        }),
        exit: L(e => {
            let {
                custom: t,
                visualElement: n
            } = e, [r, i] = rn(), o = (0, a.useContext)(l);
            (0, a.useEffect)(() => {
                n.isPresent = r;
                let e = n.animationState && n.animationState.setActive(F.Exit, !r, {
                    custom: o && o.custom || t
                });
                e && !r && e.then(i)
            }, [r])
        })
    },
    da = (e, t) => Math.abs(e - t);

function fa(e, t) {
    let n = da(e.x, t.x),
        r = da(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
var pa = class {
    constructor(e, t, {
        transformPagePoint: n
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                let e = ga(this.lastMoveEventInfo, this.history),
                    t = this.startEvent !== null,
                    n = fa(e.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!t && !n) return;
                let {
                    point: r
                } = e, {
                    timestamp: i
                } = R;
                this.history.push({
                    ...r,
                    timestamp: i
                });
                let {
                    onStart: a,
                    onMove: o
                } = this.handlers;
                t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e)
            }, this.handlePointerMove = (e, t) => {
                this.lastMoveEvent = e, this.lastMoveEventInfo = ma(t, this.transformPagePoint), z.update(this.updatePoint, !0)
            }, this.handlePointerUp = (e, t) => {
                if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                let {
                    onEnd: n,
                    onSessionEnd: r
                } = this.handlers, i = ga(e.type === `pointercancel` ? this.lastMoveEventInfo : ma(t, this.transformPagePoint), this.history);
                this.startEvent && n && n(e, i), r && r(e, i)
            }, !At(e)) return;
        this.handlers = t, this.transformPagePoint = n;
        let r = ma(jt(e), this.transformPagePoint),
            {
                point: i
            } = r,
            {
                timestamp: a
            } = R;
        this.history = [{
            ...i,
            timestamp: a
        }];
        let {
            onSessionStart: o
        } = t;
        o && o(e, ga(r, this.history)), this.removeListeners = Wt(I(window, `pointermove`, this.handlePointerMove), I(window, `pointerup`, this.handlePointerUp), I(window, `pointercancel`, this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(), B.update(this.updatePoint)
    }
};

function ma(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function ha(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function ga({
    point: e
}, t) {
    return {
        point: e,
        delta: ha(e, va(t)),
        offset: ha(e, _a(t)),
        velocity: ya(t, .1)
    }
}

function _a(e) {
    return e[0]
}

function va(e) {
    return e[e.length - 1]
}

function ya(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null,
        i = va(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > gr(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    let a = (i.timestamp - r.timestamp) / 1e3;
    if (a === 0) return {
        x: 0,
        y: 0
    };
    let o = {
        x: (i.x - r.x) / a,
        y: (i.y - r.y) / a
    };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}

function J(e) {
    return e.max - e.min
}

function ba(e, t = 0, n = .01) {
    return Math.abs(e - t) <= n
}

function xa(e, t, n, r = .5) {
    e.origin = r, e.originPoint = G(t.min, t.max, e.origin), e.scale = J(n) / J(t), (ba(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = G(n.min, n.max, e.origin) - e.originPoint, (ba(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}

function Sa(e, t, n, r) {
    xa(e.x, t.x, n.x, r == null ? void 0 : r.originX), xa(e.y, t.y, n.y, r == null ? void 0 : r.originY)
}

function Ca(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + J(t)
}

function wa(e, t, n) {
    Ca(e.x, t.x, n.x), Ca(e.y, t.y, n.y)
}

function Ta(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + J(t)
}

function Ea(e, t, n) {
    Ta(e.x, t.x, n.x), Ta(e.y, t.y, n.y)
}

function Da(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? G(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? G(n, e, r.max) : Math.min(e, n)), e
}

function Oa(e, t, n) {
    return {
        min: t === void 0 ? void 0 : e.min + t,
        max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
    }
}

function ka(e, {
    top: t,
    left: n,
    bottom: r,
    right: i
}) {
    return {
        x: Oa(e.x, n, i),
        y: Oa(e.y, t, r)
    }
}

function Aa(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function ja(e, t) {
    return {
        x: Aa(e.x, t.x),
        y: Aa(e.y, t.y)
    }
}

function Ma(e, t) {
    let n = .5,
        r = J(e),
        i = J(t);
    return i > r ? n = Pr(t.min, t.max - r, e.min) : r > i && (n = Pr(e.min, e.max - i, t.min)), be(0, 1, n)
}

function Na(e, t) {
    let n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
var Pa = .35;

function Fa(e = Pa) {
    return e === !1 ? e = 0 : e === !0 && (e = Pa), {
        x: Ia(e, `left`, `right`),
        y: Ia(e, `top`, `bottom`)
    }
}

function Ia(e, t, n) {
    return {
        min: La(e, t),
        max: La(e, n)
    }
}

function La(e, t) {
    return typeof e == `number` ? e : e[t] || 0
}
var Ra = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    za = () => ({
        x: Ra(),
        y: Ra()
    }),
    Ba = () => ({
        min: 0,
        max: 0
    }),
    Y = () => ({
        x: Ba(),
        y: Ba()
    });

function X(e) {
    return [e(`x`), e(`y`)]
}

function Va({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function Ha({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function Ua(e, t) {
    if (!t) return e;
    let n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function Wa(e) {
    return e === void 0 || e === 1
}

function Ga({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !Wa(e) || !Wa(t) || !Wa(n)
}

function Z(e) {
    return Ga(e) || Ka(e) || e.z || e.rotate || e.rotateX || e.rotateY
}

function Ka(e) {
    return qa(e.x) || qa(e.y)
}

function qa(e) {
    return e && e !== `0%`
}

function Ja(e, t, n) {
    return n + t * (e - n)
}

function Ya(e, t, n, r, i) {
    return i !== void 0 && (e = Ja(e, i, r)), Ja(e, n, r) + t
}

function Xa(e, t = 0, n = 1, r, i) {
    e.min = Ya(e.min, t, n, r, i), e.max = Ya(e.max, t, n, r, i)
}

function Za(e, {
    x: t,
    y: n
}) {
    Xa(e.x, t.translate, t.scale, t.originPoint), Xa(e.y, n.translate, n.scale, n.originPoint)
}

function Qa(e, t, n, r = !1) {
    var i, a;
    let o = n.length;
    if (!o) return;
    t.x = t.y = 1;
    let s, c;
    for (let l = 0; l < o; l++) s = n[l], c = s.projectionDelta, ((a = (i = s.instance) == null ? void 0 : i.style) == null ? void 0 : a.display) !== `contents` && (r && s.options.layoutScroll && s.scroll && s !== s.root && ro(e, {
        x: -s.scroll.offset.x,
        y: -s.scroll.offset.y
    }), c && (t.x *= c.x.scale, t.y *= c.y.scale, Za(e, c)), r && Z(s.latestValues) && ro(e, s.latestValues));
    t.x = $a(t.x), t.y = $a(t.y)
}

function $a(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}

function Q(e, t) {
    e.min += t, e.max += t
}

function eo(e, t, [n, r, i]) {
    let a = t[i] === void 0 ? .5 : t[i],
        o = G(e.min, e.max, a);
    Xa(e, t[n], t[r], o, t.scale)
}
var to = [`x`, `scaleX`, `originX`],
    no = [`y`, `scaleY`, `originY`];

function ro(e, t) {
    eo(e.x, t, to), eo(e.y, t, no)
}

function io(e, t) {
    return Va(Ua(e.getBoundingClientRect(), t))
}

function ao(e, t, n) {
    let r = io(e, n),
        {
            scroll: i
        } = t;
    return i && (Q(r.x, i.offset.x), Q(r.y, i.offset.y)), r
}
var oo = new WeakMap,
    so = class {
        constructor(e) {
            this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                x: 0,
                y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Y(), this.visualElement = e
        }
        start(e, {
            snapToCursor: t = !1
        } = {}) {
            if (this.visualElement.isPresent === !1) return;
            let n = e => {
                    this.stopAnimation(), t && this.snapToCursor(jt(e, `page`).point)
                },
                r = (e, t) => {
                    var n;
                    let {
                        drag: r,
                        dragPropagation: i,
                        onDragStart: a
                    } = this.getProps();
                    r && !i && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Lt(r), !this.openGlobalLock) || (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), X(e => {
                        var t, n;
                        let r = this.getAxisMotionValue(e).get() || 0;
                        if (N.test(r)) {
                            let i = (n = (t = this.visualElement.projection) == null ? void 0 : t.layout) == null ? void 0 : n.layoutBox[e];
                            i && (r = J(i) * (parseFloat(r) / 100))
                        }
                        this.originPoint[e] = r
                    }), a == null || a(e, t), (n = this.visualElement.animationState) == null || n.setActive(F.Drag, !0))
                },
                i = (e, t) => {
                    let {
                        dragPropagation: n,
                        dragDirectionLock: r,
                        onDirectionLock: i,
                        onDrag: a
                    } = this.getProps();
                    if (!n && !this.openGlobalLock) return;
                    let {
                        offset: o
                    } = t;
                    r && this.currentDirection === null ? (this.currentDirection = lo(o), this.currentDirection !== null && (i == null || i(this.currentDirection))) : (this.updateAxis(`x`, t.point, o), this.updateAxis(`y`, t.point, o), this.visualElement.render(), a == null || a(e, t))
                },
                a = (e, t) => this.stop(e, t);
            this.panSession = new pa(e, {
                onSessionStart: n,
                onStart: r,
                onMove: i,
                onSessionEnd: a
            }, {
                transformPagePoint: this.visualElement.getTransformPagePoint()
            })
        }
        stop(e, t) {
            let n = this.isDragging;
            if (this.cancel(), !n) return;
            let {
                velocity: r
            } = t;
            this.startAnimation(r);
            let {
                onDragEnd: i
            } = this.getProps();
            i == null || i(e, t)
        }
        cancel() {
            var e, t;
            this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), (e = this.panSession) == null || e.end(), this.panSession = void 0;
            let {
                dragPropagation: n
            } = this.getProps();
            !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), (t = this.visualElement.animationState) == null || t.setActive(F.Drag, !1)
        }
        updateAxis(e, t, n) {
            let {
                drag: r
            } = this.getProps();
            if (!n || !co(e, r, this.currentDirection)) return;
            let i = this.getAxisMotionValue(e),
                a = this.originPoint[e] + n[e];
            this.constraints && this.constraints[e] && (a = Da(a, this.constraints[e], this.elastic[e])), i.set(a)
        }
        resolveConstraints() {
            let {
                dragConstraints: e,
                dragElastic: t
            } = this.getProps(), {
                layout: n
            } = this.visualElement.projection || {}, r = this.constraints;
            e && m(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = e && n ? ka(n.layoutBox, e) : !1, this.elastic = Fa(t), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && X(e => {
                this.getAxisMotionValue(e) && (this.constraints[e] = Na(n.layoutBox[e], this.constraints[e]))
            })
        }
        resolveRefConstraints() {
            let {
                dragConstraints: e,
                onMeasureDragConstraints: t
            } = this.getProps();
            if (!e || !m(e)) return !1;
            let n = e.current,
                {
                    projection: r
                } = this.visualElement;
            if (!r || !r.layout) return !1;
            let i = ao(n, r.root, this.visualElement.getTransformPagePoint()),
                a = ja(r.layout.layoutBox, i);
            if (t) {
                let e = t(Ha(a));
                this.hasMutatedConstraints = !!e, e && (a = Va(e))
            }
            return a
        }
        startAnimation(e) {
            let {
                drag: t,
                dragMomentum: n,
                dragElastic: r,
                dragTransition: i,
                dragSnapToOrigin: a,
                onDragTransitionEnd: o
            } = this.getProps(), s = this.constraints || {}, c = X(o => {
                if (!co(o, t, this.currentDirection)) return;
                let c = (s == null ? void 0 : s[o]) || {};
                a && (c = {
                    min: 0,
                    max: 0
                });
                let l = r ? 200 : 1e6,
                    u = r ? 40 : 1e7,
                    d = {
                        type: `inertia`,
                        velocity: n ? e[o] : 0,
                        bounceStiffness: l,
                        bounceDamping: u,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...i,
                        ...c
                    };
                return this.startAxisValueAnimation(o, d)
            });
            return Promise.all(c).then(o)
        }
        startAxisValueAnimation(e, t) {
            let n = this.getAxisMotionValue(e);
            return n.start(Xi(e, n, 0, t))
        }
        stopAnimation() {
            X(e => this.getAxisMotionValue(e).stop())
        }
        getAxisMotionValue(e) {
            var t;
            let n = `_drag` + e.toUpperCase();
            return this.visualElement.getProps()[n] || this.visualElement.getValue(e, ((t = this.visualElement.getProps().initial) == null ? void 0 : t[e]) || 0)
        }
        snapToCursor(e) {
            X(t => {
                let {
                    drag: n
                } = this.getProps();
                if (!co(t, n, this.currentDirection)) return;
                let {
                    projection: r
                } = this.visualElement, i = this.getAxisMotionValue(t);
                if (r && r.layout) {
                    let {
                        min: n,
                        max: a
                    } = r.layout.layoutBox[t];
                    i.set(e[t] - G(n, a, .5))
                }
            })
        }
        scalePositionWithinConstraints() {
            var e;
            if (!this.visualElement.current) return;
            let {
                drag: t,
                dragConstraints: n
            } = this.getProps(), {
                projection: r
            } = this.visualElement;
            if (!m(n) || !r || !this.constraints) return;
            this.stopAnimation();
            let i = {
                x: 0,
                y: 0
            };
            X(e => {
                let t = this.getAxisMotionValue(e);
                if (t) {
                    let n = t.get();
                    i[e] = Ma({
                        min: n,
                        max: n
                    }, this.constraints[e])
                }
            });
            let {
                transformTemplate: a
            } = this.visualElement.getProps();
            this.visualElement.current.style.transform = a ? a({}, ``) : `none`, (e = r.root) == null || e.updateScroll(), r.updateLayout(), this.resolveConstraints(), X(e => {
                if (!co(e, t, null)) return;
                let n = this.getAxisMotionValue(e),
                    {
                        min: r,
                        max: a
                    } = this.constraints[e];
                n.set(G(r, a, i[e]))
            })
        }
        addListeners() {
            var e;
            if (!this.visualElement.current) return;
            oo.set(this.visualElement, this);
            let t = this.visualElement.current,
                n = I(t, `pointerdown`, e => {
                    let {
                        drag: t,
                        dragListener: n = !0
                    } = this.getProps();
                    t && n && this.start(e)
                }),
                r = () => {
                    let {
                        dragConstraints: e
                    } = this.getProps();
                    m(e) && (this.constraints = this.resolveRefConstraints())
                },
                {
                    projection: i
                } = this.visualElement,
                a = i.addEventListener(`measure`, r);
            i && !i.layout && ((e = i.root) == null || e.updateScroll(), i.updateLayout()), r();
            let o = Dt(window, `resize`, () => this.scalePositionWithinConstraints()),
                s = i.addEventListener(`didUpdate`, (({
                    delta: e,
                    hasLayoutChanged: t
                }) => {
                    this.isDragging && t && (X(t => {
                        let n = this.getAxisMotionValue(t);
                        n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate))
                    }), this.visualElement.render())
                }));
            return () => {
                o(), n(), a(), s == null || s()
            }
        }
        getProps() {
            let e = this.visualElement.getProps(),
                {
                    drag: t = !1,
                    dragDirectionLock: n = !1,
                    dragPropagation: r = !1,
                    dragConstraints: i = !1,
                    dragElastic: a = Pa,
                    dragMomentum: o = !0
                } = e;
            return {
                ...e,
                drag: t,
                dragDirectionLock: n,
                dragPropagation: r,
                dragConstraints: i,
                dragElastic: a,
                dragMomentum: o
            }
        }
    };

function co(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function lo(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = `y` : Math.abs(e.x) > t && (n = `x`), n
}

function uo(e) {
    let {
        dragControls: t,
        visualElement: n
    } = e, r = E(() => new so(n));
    (0, a.useEffect)(() => t && t.subscribe(r), [r, t]), (0, a.useEffect)(() => r.addListeners(), [r])
}

function fo({
    onPan: e,
    onPanStart: t,
    onPanEnd: n,
    onPanSessionStart: r,
    visualElement: i
}) {
    let s = e || t || n || r,
        c = (0, a.useRef)(null),
        {
            transformPagePoint: l
        } = (0, a.useContext)(o),
        u = {
            onSessionStart: r,
            onStart: t,
            onMove: e,
            onEnd: (e, t) => {
                c.current = null, n && n(e, t)
            }
        };
    (0, a.useEffect)(() => {
        c.current !== null && c.current.updateHandlers(u)
    });

    function d(e) {
        c.current = new pa(e, u, {
            transformPagePoint: l
        })
    }
    Nt(i, `pointerdown`, s && d), Ht(() => c.current && c.current.end())
}
var po = {
    pan: L(fo),
    drag: L(uo)
};

function mo(e) {
    return typeof e == `string` && e.startsWith(`var(--`)
}
var ho = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

function go(e) {
    let t = ho.exec(e);
    if (!t) return [, ];
    let [, n, r] = t;
    return [n, r]
}

function _o(e, t, n = 1) {
    `${e}`;
    let [r, i] = go(e);
    if (!r) return;
    let a = window.getComputedStyle(t).getPropertyValue(r);
    return a ? a.trim() : mo(i) ? _o(i, t, n + 1) : i
}

function vo(e, {
    ...t
}, n) {
    let r = e.current;
    if (!(r instanceof Element)) return {
        target: t,
        transitionEnd: n
    };
    n && (n = {
        ...n
    }), e.values.forEach(e => {
        let t = e.get();
        if (!mo(t)) return;
        let n = _o(t, r);
        n && e.set(n)
    });
    for (let e in t) {
        let i = t[e];
        if (!mo(i)) continue;
        let a = _o(i, r);
        a && (t[e] = a, n && n[e] === void 0 && (n[e] = i))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
var yo = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, `x`, `y`]),
    bo = e => yo.has(e),
    xo = e => Object.keys(e).some(bo),
    So = e => e === j || e === P,
    Co;
(function(e) {
    e.width = `width`, e.height = `height`, e.left = `left`, e.right = `right`, e.top = `top`, e.bottom = `bottom`
})(Co || (Co = {}));
var wo = (e, t) => parseFloat(e.split(`, `)[t]),
    To = (e, t) => (n, {
        transform: r
    }) => {
        if (r === `none` || !r) return 0;
        let i = r.match(/^matrix3d\((.+)\)$/);
        if (i) return wo(i[1], t);
        {
            let t = r.match(/^matrix\((.+)\)$/);
            return t ? wo(t[1], e) : 0
        }
    },
    Eo = new Set([`x`, `y`, `z`]),
    Do = pe.filter(e => !Eo.has(e));

function Oo(e) {
    let t = [];
    return Do.forEach(n => {
        let r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)))
    }), t.length && e.render(), t
}
var ko = {
        width: ({
            x: e
        }, {
            paddingLeft: t = `0`,
            paddingRight: n = `0`
        }) => e.max - e.min - parseFloat(t) - parseFloat(n),
        height: ({
            y: e
        }, {
            paddingTop: t = `0`,
            paddingBottom: n = `0`
        }) => e.max - e.min - parseFloat(t) - parseFloat(n),
        top: (e, {
            top: t
        }) => parseFloat(t),
        left: (e, {
            left: t
        }) => parseFloat(t),
        bottom: ({
            y: e
        }, {
            top: t
        }) => parseFloat(t) + (e.max - e.min),
        right: ({
            x: e
        }, {
            left: t
        }) => parseFloat(t) + (e.max - e.min),
        x: To(4, 13),
        y: To(5, 14)
    },
    Ao = (e, t, n) => {
        let r = t.measureViewportBox(),
            i = t.current,
            a = getComputedStyle(i),
            {
                display: o
            } = a,
            s = {};
        o === `none` && t.setStaticValue(`display`, e.display || `block`), n.forEach(e => {
            s[e] = ko[e](r, a)
        }), t.render();
        let c = t.measureViewportBox();
        return n.forEach(n => {
            let r = t.getValue(n);
            r && r.jump(s[n]), e[n] = ko[n](c, a)
        }), e
    },
    jo = (e, t, n = {}, r = {}) => {
        t = {
            ...t
        }, r = {
            ...r
        };
        let i = Object.keys(t).filter(bo),
            a = [],
            o = !1,
            s = [];
        if (i.forEach(i => {
                let c = e.getValue(i);
                if (!e.hasValue(i)) return;
                let l = n[i],
                    u = tr(l),
                    d = t[i],
                    f;
                if (_t(d)) {
                    let e = d.length,
                        t = +(d[0] === null);
                    l = d[t], u = tr(l);
                    for (let n = t; n < e; n++) f ? tr(d[n]) : f = tr(d[n])
                } else f = tr(d);
                if (u !== f) {
                    if (So(u) && So(f)) {
                        let e = c.get();
                        typeof e == `string` && c.set(parseFloat(e)), typeof d == `string` ? t[i] = parseFloat(d) : Array.isArray(d) && f === P && (t[i] = d.map(parseFloat))
                    } else u != null && u.transform && f != null && f.transform && (l === 0 || d === 0) ? l === 0 ? c.set(f.transform(l)) : t[i] = u.transform(d) : (o || (a = Oo(e), o = !0), s.push(i), r[i] = r[i] === void 0 ? t[i] : r[i], c.jump(d))
                }
            }), s.length) {
            let n = s.indexOf(`height`) >= 0 ? window.pageYOffset : null,
                i = Ao(t, e, s);
            return a.length && a.forEach(([t, n]) => {
                e.getValue(t).set(n)
            }), e.render(), u && n !== null && window.scrollTo({
                top: n
            }), {
                target: i,
                transitionEnd: r
            }
        }
        return {
            target: t,
            transitionEnd: r
        }
    };

function Mo(e, t, n, r) {
    return xo(t) ? jo(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
var No = (e, t, n, r) => {
        let i = vo(e, t, r);
        return t = i.target, r = i.transitionEnd, Mo(e, t, n, r)
    },
    Po = {
        current: null
    },
    Fo = {
        current: !1
    };

function Io() {
    if (Fo.current = !0, u) {
        if (window.matchMedia) {
            let e = window.matchMedia(`(prefers-reduced-motion)`),
                t = () => Po.current = e.matches;
            e.addListener(t), t()
        } else Po.current = !1
    }
}

function Lo(e, t, n) {
    let {
        willChange: r
    } = t;
    for (let i in t) {
        let a = t[i],
            o = n[i];
        if (A(a)) e.addValue(i, a), fr(r) && r.add(i);
        else if (A(o)) e.addValue(i, V(a, {
            owner: e
        })), fr(r) && r.remove(i);
        else if (o !== a) {
            if (e.hasValue(i)) {
                let t = e.getValue(i);
                !t.hasAnimated && t.set(a)
            } else {
                let t = e.getStaticValue(i);
                e.addValue(i, V(t === void 0 ? a : t, {
                    owner: e
                }))
            }
        }
    }
    for (let r in n) t[r] === void 0 && e.removeValue(r);
    return t
}
var Ro = Object.keys(T),
    zo = Ro.length,
    Bo = [`AnimationStart`, `AnimationComplete`, `Update`, `BeforeLayoutMeasure`, `LayoutMeasure`, `LayoutAnimationStart`, `LayoutAnimationComplete`],
    Vo = class {
        constructor({
            parent: e,
            props: t,
            reducedMotionConfig: n,
            visualState: r
        }, i = {}) {
            this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify(`Update`, this.latestValues), this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }, this.scheduleRender = () => z.render(this.render, !1, !0);
            let {
                latestValues: a,
                renderState: o
            } = r;
            this.latestValues = a, this.baseTarget = {
                ...a
            }, this.initialValues = t.initial ? {
                ...a
            } : {}, this.renderState = o, this.parent = e, this.props = t, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = n, this.options = i, this.isControllingVariants = y(t), this.isVariantNode = b(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
            let {
                willChange: s,
                ...c
            } = this.scrapeMotionValuesFromProps(t, {});
            for (let e in c) {
                let t = c[e];
                a[e] !== void 0 && A(t) && (t.set(a[e], !1), fr(s) && s.add(e))
            }
        }
        scrapeMotionValuesFromProps(e, t) {
            return {}
        }
        mount(e) {
            var t;
            this.current = e, this.projection && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = (t = this.parent) == null ? void 0 : t.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), Fo.current || Io(), this.shouldReduceMotion = this.reducedMotionConfig === `never` ? !1 : this.reducedMotionConfig === `always` || Po.current, this.parent && this.parent.children.add(this), this.setProps(this.props)
        }
        unmount() {
            var e, t, n;
            (e = this.projection) == null || e.unmount(), B.update(this.notifyUpdate), B.render(this.render), this.valueSubscriptions.forEach(e => e()), (t = this.removeFromVariantTree) == null || t.call(this), (n = this.parent) == null || n.children.delete(this);
            for (let e in this.events) this.events[e].clear();
            this.current = null
        }
        bindToMotionValue(e, t) {
            let n = k.has(e),
                r = t.on(`change`, t => {
                    this.latestValues[e] = t, this.props.onUpdate && z.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
                }),
                i = t.on(`renderRequest`, this.scheduleRender);
            this.valueSubscriptions.set(e, () => {
                r(), i()
            })
        }
        sortNodePosition(e) {
            return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
        }
        loadFeatures({
            children: e,
            ...t
        }, n, r, i, o, s) {
            let c = [];
            for (let e = 0; e < zo; e++) {
                let n = Ro[e],
                    {
                        isEnabled: r,
                        Component: i
                    } = T[n];
                r(t) && i && c.push((0, a.createElement)(i, {
                    key: n,
                    ...t,
                    visualElement: this
                }))
            }
            if (!this.projection && o) {
                this.projection = new o(i, this.latestValues, this.parent && this.parent.projection);
                let {
                    layoutId: e,
                    layout: n,
                    drag: r,
                    dragConstraints: a,
                    layoutScroll: c,
                    layoutRoot: l
                } = t;
                this.projection.setOptions({
                    layoutId: e,
                    layout: n,
                    alwaysMeasureLayout: !!r || a && m(a),
                    visualElement: this,
                    scheduleRender: () => this.scheduleRender(),
                    animationType: typeof n == `string` ? n : `both`,
                    initialPromotionConfig: s,
                    layoutScroll: c,
                    layoutRoot: l
                })
            }
            return c
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.options, this.props)
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Y()
        }
        getStaticValue(e) {
            return this.latestValues[e]
        }
        setStaticValue(e, t) {
            this.latestValues[e] = t
        }
        makeTargetAnimatable(e, t = !0) {
            return this.makeTargetAnimatableFromInstance(e, this.props, t)
        }
        setProps(e) {
            (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender();
            let t = this.props;
            this.props = e;
            for (let t = 0; t < Bo.length; t++) {
                let n = Bo[t];
                this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                let r = e[`on` + n];
                r && (this.propEventSubscriptions[n] = this.on(n, r))
            }
            this.prevMotionValues = Lo(this, this.scrapeMotionValuesFromProps(e, t), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
            return this.props
        }
        getVariant(e) {
            var t;
            return (t = this.props.variants) == null ? void 0 : t[e]
        }
        getDefaultTransition() {
            return this.props.transition
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint
        }
        getClosestVariantNode() {
            var e;
            return this.isVariantNode ? this : (e = this.parent) == null ? void 0 : e.getClosestVariantNode()
        }
        getVariantContext(e = !1) {
            var t, n;
            if (e) return (t = this.parent) == null ? void 0 : t.getVariantContext();
            if (!this.isControllingVariants) {
                let e = ((n = this.parent) == null ? void 0 : n.getVariantContext()) || {};
                return this.props.initial !== void 0 && (e.initial = this.props.initial), e
            }
            let r = {};
            for (let e = 0; e < Uo; e++) {
                let t = Ho[e],
                    n = this.props[t];
                (g(n) || n === !1) && (r[t] = n)
            }
            return r
        }
        addVariantChild(e) {
            var t;
            let n = this.getClosestVariantNode();
            if (n) return (t = n.variantChildren) == null || t.add(e), () => n.variantChildren.delete(e)
        }
        addValue(e, t) {
            t !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, t)), this.values.set(e, t), this.latestValues[e] = t.get()
        }
        removeValue(e) {
            var t;
            this.values.delete(e), (t = this.valueSubscriptions.get(e)) == null || t(), this.valueSubscriptions.delete(e), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
        }
        hasValue(e) {
            return this.values.has(e)
        }
        getValue(e, t) {
            if (this.props.values && this.props.values[e]) return this.props.values[e];
            let n = this.values.get(e);
            return n === void 0 && t !== void 0 && (n = V(t, {
                owner: this
            }), this.addValue(e, n)), n
        }
        readValue(e) {
            return this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.readValueFromInstance(this.current, e, this.options)
        }
        setBaseTarget(e, t) {
            this.baseTarget[e] = t
        }
        getBaseTarget(e) {
            var t;
            let {
                initial: n
            } = this.props, r = typeof n == `string` || typeof n == `object` ? (t = gt(this.props, n)) == null ? void 0 : t[e] : void 0;
            if (n && r !== void 0) return r;
            let i = this.getBaseTargetFromProps(this.props, e);
            return i !== void 0 && !A(i) ? i : this.initialValues[e] !== void 0 && r === void 0 ? void 0 : this.baseTarget[e]
        }
        on(e, t) {
            return this.events[e] || (this.events[e] = new Dn), this.events[e].add(t)
        }
        notify(e, ...t) {
            var n;
            (n = this.events[e]) == null || n.notify(...t)
        }
    },
    Ho = [`initial`, ...ra],
    Uo = Ho.length,
    Wo = class extends Vo {
        sortInstanceNodePosition(e, t) {
            return e.compareDocumentPosition(t) & 2 ? 1 : -1
        }
        getBaseTargetFromProps(e, t) {
            var n;
            return (n = e.style) == null ? void 0 : n[t]
        }
        removeValueFromRenderState(e, {
            vars: t,
            style: n
        }) {
            delete t[e], delete n[e]
        }
        makeTargetAnimatableFromInstance({
            transition: e,
            transitionEnd: t,
            ...n
        }, {
            transformValues: r
        }, i) {
            let a = dr(n, e || {}, this);
            if (r && (t && (t = r(t)), n && (n = r(n)), a && (a = r(a))), i) {
                lr(this, n, a);
                let e = No(this, n, a, t);
                t = e.transitionEnd, n = e.target
            }
            return {
                transition: e,
                transitionEnd: t,
                ...n
            }
        }
    };

function Go(e) {
    return window.getComputedStyle(e)
}
var Ko = class extends Wo {
        readValueFromInstance(e, t) {
            if (k.has(t)) {
                let e = Zn(t);
                return e && e.default || 0
            } {
                let n = Go(e),
                    r = (ve(t) ? n.getPropertyValue(t) : n[t]) || 0;
                return typeof r == `string` ? r.trim() : r
            }
        }
        measureInstanceViewportBox(e, {
            transformPagePoint: t
        }) {
            return io(e, t)
        }
        build(e, t, n, r) {
            Pe(e, t, n, r.transformTemplate)
        }
        scrapeMotionValuesFromProps(e, t) {
            return mt(e, t)
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            let {
                children: e
            } = this.props;
            A(e) && (this.childSubscription = e.on(`change`, e => {
                this.current && (this.current.textContent = `${e}`)
            }))
        }
        renderInstance(e, t, n, r) {
            dt(e, t, n, r)
        }
    },
    qo = class extends Wo {
        constructor() {
            super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(e, t) {
            return e[t]
        }
        readValueFromInstance(e, t) {
            var n;
            return k.has(t) ? ((n = Zn(t)) == null ? void 0 : n.default) || 0 : (t = ft.has(t) ? t : ut(t), e.getAttribute(t))
        }
        measureInstanceViewportBox() {
            return Y()
        }
        scrapeMotionValuesFromProps(e, t) {
            return ht(e, t)
        }
        build(e, t, n, r) {
            at(e, t, n, this.isSVGTag, r.transformTemplate)
        }
        renderInstance(e, t, n, r) {
            pt(e, t, n, r)
        }
        mount(e) {
            this.isSVGTag = st(e.tagName), super.mount(e)
        }
    },
    Jo = (e, t) => ue(e) ? new qo(t, {
        enableHardwareAcceleration: !1
    }) : new Ko(t, {
        enableHardwareAcceleration: !0
    });

function Yo(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
var Xo = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == `string`) {
                if (P.test(e)) e = parseFloat(e);
                else return e
            }
            return `${Yo(e,t.target.x)}% ${Yo(e,t.target.y)}%`
        }
    },
    Zo = `_$css`,
    Qo = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            let r = e,
                i = e.includes(`var(`),
                a = [];
            i && (e = e.replace(ho, e => (a.push(e), Zo)));
            let o = W.parse(e);
            if (o.length > 5) return r;
            let s = W.createTransformer(e),
                c = typeof o[0] == `number` ? 0 : 1,
                l = n.x.scale * t.x,
                u = n.y.scale * t.y;
            o[0 + c] /= l, o[1 + c] /= u;
            let d = G(l, u, .5);
            typeof o[2 + c] == `number` && (o[2 + c] /= d), typeof o[3 + c] == `number` && (o[3 + c] /= d);
            let f = s(o);
            if (i) {
                let e = 0;
                f = f.replace(Zo, () => {
                    let t = a[e];
                    return e++, t
                })
            }
            return f
        }
    },
    $o = class extends a.Component {
        componentDidMount() {
            let {
                visualElement: e,
                layoutGroup: t,
                switchLayoutGroup: n,
                layoutId: r
            } = this.props, {
                projection: i
            } = e;
            fe(ts), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener(`animationComplete`, () => {
                this.safeToRemove()
            }), i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove()
            })), D.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(e) {
            let {
                layoutDependency: t,
                visualElement: n,
                drag: r,
                isPresent: i
            } = this.props, a = n.projection;
            return a && (a.isPresent = i, r || e.layoutDependency !== t || t === void 0 ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || z.postRender(() => {
                var e;
                (e = a.getStack()) != null && e.members.length || this.safeToRemove()
            }))), null
        }
        componentDidUpdate() {
            let {
                projection: e
            } = this.props.visualElement;
            e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove())
        }
        componentWillUnmount() {
            let {
                visualElement: e,
                layoutGroup: t,
                switchLayoutGroup: n
            } = this.props, {
                projection: r
            } = e;
            r && (r.scheduleCheckAfterUnmount(), t != null && t.group && t.group.remove(r), n != null && n.deregister && n.deregister(r))
        }
        safeToRemove() {
            let {
                safeToRemove: e
            } = this.props;
            e == null || e()
        }
        render() {
            return null
        }
    };

function es(e) {
    let [t, n] = rn(), r = (0, a.useContext)(O);
    return a.createElement($o, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: (0, a.useContext)(ie),
        isPresent: t,
        safeToRemove: n
    })
}
var ts = {
        borderRadius: {
            ...Xo,
            applyTo: [`borderTopLeftRadius`, `borderTopRightRadius`, `borderBottomLeftRadius`, `borderBottomRightRadius`]
        },
        borderTopLeftRadius: Xo,
        borderTopRightRadius: Xo,
        borderBottomLeftRadius: Xo,
        borderBottomRightRadius: Xo,
        boxShadow: Qo
    },
    ns = {
        measureLayout: es
    };

function rs(e, t, n = {}) {
    let r = A(e) ? e : V(e);
    return r.start(Xi(``, r, t, n)), {
        stop: () => r.stop(),
        isAnimating: () => r.isAnimating()
    }
}
var is = [`TopLeft`, `TopRight`, `BottomLeft`, `BottomRight`],
    as = is.length,
    os = e => typeof e == `string` ? parseFloat(e) : e,
    ss = e => typeof e == `number` || P.test(e);

function cs(e, t, n, r, i, a) {
    i ? (e.opacity = G(0, n.opacity === void 0 ? 1 : n.opacity, us(r)), e.opacityExit = G(t.opacity === void 0 ? 1 : t.opacity, 0, ds(r))) : a && (e.opacity = G(t.opacity === void 0 ? 1 : t.opacity, n.opacity === void 0 ? 1 : n.opacity, r));
    for (let i = 0; i < as; i++) {
        let a = `border${is[i]}Radius`,
            o = ls(t, a),
            s = ls(n, a);
        (o !== void 0 || s !== void 0) && (o || (o = 0), s || (s = 0), o === 0 || s === 0 || ss(o) === ss(s) ? (e[a] = Math.max(G(os(o), os(s), r), 0), (N.test(s) || N.test(o)) && (e[a] += `%`)) : e[a] = s)
    }(t.rotate || n.rotate) && (e.rotate = G(t.rotate || 0, n.rotate || 0, r))
}

function ls(e, t) {
    return e[t] === void 0 ? e.borderRadius : e[t]
}
var us = fs(0, .5, Kr),
    ds = fs(.5, .95, zr);

function fs(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Pr(e, t, r))
}

function ps(e, t) {
    e.min = t.min, e.max = t.max
}

function $(e, t) {
    ps(e.x, t.x), ps(e.y, t.y)
}

function ms(e, t, n, r, i) {
    return e -= t, e = Ja(e, 1 / n, r), i !== void 0 && (e = Ja(e, 1 / i, r)), e
}

function hs(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
    if (N.test(t) && (t = parseFloat(t), t = G(o.min, o.max, t / 100) - o.min), typeof t != `number`) return;
    let s = G(a.min, a.max, r);
    e === a && (s -= t), e.min = ms(e.min, t, n, s, i), e.max = ms(e.max, t, n, s, i)
}

function gs(e, t, [n, r, i], a, o) {
    hs(e, t[n], t[r], t[i], t.scale, a, o)
}
var _s = [`x`, `scaleX`, `originX`],
    vs = [`y`, `scaleY`, `originY`];

function ys(e, t, n, r) {
    gs(e.x, t, _s, n == null ? void 0 : n.x, r == null ? void 0 : r.x), gs(e.y, t, vs, n == null ? void 0 : n.y, r == null ? void 0 : r.y)
}

function bs(e) {
    return e.translate === 0 && e.scale === 1
}

function xs(e) {
    return bs(e.x) && bs(e.y)
}

function Ss(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}

function Cs(e) {
    return J(e.x) / J(e.y)
}
var ws = class {
    constructor() {
        this.members = []
    }
    add(e) {
        wn(this.members, e), e.scheduleRender()
    }
    remove(e) {
        if (Tn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e)
        }
    }
    relegate(e) {
        let t = this.members.findIndex(t => e === t);
        if (t === 0) return !1;
        let n;
        for (let e = t; e >= 0; e--) {
            let t = this.members[e];
            if (t.isPresent !== !1) {
                n = t;
                break
            }
        }
        return n ? (this.promote(n), !0) : !1
    }
    promote(e, t) {
        var n;
        let r = this.lead;
        if (e !== r && (this.prevLead = r, this.lead = e, e.show(), r)) {
            r.instance && r.scheduleRender(), e.scheduleRender(), e.resumeFrom = r, t && (e.resumeFrom.preserveOpacity = !0), r.snapshot && (e.snapshot = r.snapshot, e.snapshot.latestValues = r.animationValues || r.latestValues), (n = e.root) != null && n.isUpdating && (e.isLayoutDirty = !0);
            let {
                crossfade: i
            } = e.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            var t, n, r, i, a;
            (n = (t = e.options).onExitComplete) == null || n.call(t), (a = (r = e.resumingFrom) == null ? void 0 : (i = r.options).onExitComplete) == null || a.call(i)
        })
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
};

function Ts(e, t, n) {
    let r = ``,
        i = e.x.translate / t.x,
        a = e.y.translate / t.y;
    if ((i || a) && (r = `translate3d(${i}px, ${a}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        let {
            rotate: e,
            rotateX: t,
            rotateY: i
        } = n;
        e && (r += `rotate(${e}deg) `), t && (r += `rotateX(${t}deg) `), i && (r += `rotateY(${i}deg) `)
    }
    let o = e.x.scale * t.x,
        s = e.y.scale * t.y;
    return (o !== 1 || s !== 1) && (r += `scale(${o}, ${s})`), r || `none`
}
var Es = (e, t) => e.depth - t.depth,
    Ds = class {
        constructor() {
            this.children = [], this.isDirty = !1
        }
        add(e) {
            wn(this.children, e), this.isDirty = !0
        }
        remove(e) {
            Tn(this.children, e), this.isDirty = !0
        }
        forEach(e) {
            this.isDirty && this.children.sort(Es), this.isDirty = !1, this.children.forEach(e)
        }
    },
    Os = [``, `X`, `Y`, `Z`],
    ks = 1e3,
    As = 0;

function js({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i
}) {
    return class {
        constructor(e, n = {}, r = t == null ? void 0 : t()) {
            this.id = As++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.nodes.forEach(Ps), this.nodes.forEach(zs), this.nodes.forEach(Bs)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = e, this.latestValues = n, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, e && this.root.registerPotentialNode(e, this);
            for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Ds)
        }
        addEventListener(e, t) {
            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new Dn), this.eventHandlers.get(e).add(t)
        }
        notifyListeners(e, ...t) {
            let n = this.eventHandlers.get(e);
            n == null || n.notify(...t)
        }
        hasListeners(e) {
            return this.eventHandlers.has(e)
        }
        registerPotentialNode(e, t) {
            this.potentialNodes.set(e, t)
        }
        mount(t, n = !1) {
            var r;
            if (this.instance) return;
            this.isSVG = t instanceof SVGElement && t.tagName !== `svg`, this.instance = t;
            let {
                layoutId: i,
                layout: a,
                visualElement: o
            } = this.options;
            if (o && !o.current && o.mount(t), this.root.nodes.add(this), (r = this.parent) == null || r.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (a || i) && (this.isLayoutDirty = !0), e) {
                let n, r = () => this.root.updateBlockedByResize = !1;
                e(t, () => {
                    this.root.updateBlockedByResize = !0, n && n(), n = Ii(r, 250), D.hasAnimatedSinceResize && (D.hasAnimatedSinceResize = !1, this.nodes.forEach(Rs))
                })
            }
            i && this.root.registerSharedNode(i, this), this.options.animate !== !1 && o && (i || a) && this.addEventListener(`didUpdate`, ({
                delta: e,
                hasLayoutChanged: t,
                hasRelativeTargetChanged: n,
                layout: r
            }) => {
                var i, a, s;
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                let c = this.options.transition ?? o.getDefaultTransition() ?? qs,
                    {
                        onLayoutAnimationStart: l,
                        onLayoutAnimationComplete: u
                    } = o.getProps(),
                    d = !this.targetLayout || !Ss(this.targetLayout, r) || n,
                    f = !t && n;
                if (this.options.layoutRoot || (i = this.resumeFrom) != null && i.instance || f || t && (d || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, f);
                    let t = {
                        ...Ji(c, `layout`),
                        onPlay: l,
                        onComplete: u
                    };
                    (o.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t)
                } else !t && this.animationProgress === 0 && Rs(this), this.isLead() && ((s = (a = this.options).onExitComplete) == null || s.call(a));
                this.targetLayout = r
            })
        }
        unmount() {
            var e, t;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), (e = this.getStack()) == null || e.remove(this), (t = this.parent) == null || t.children.delete(this), this.instance = void 0, B.preRender(this.updateProjection)
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
            var e;
            return this.isAnimationBlocked || ((e = this.parent) == null ? void 0 : e.isTreeAnimationBlocked()) || !1
        }
        startUpdate() {
            var e;
            this.isUpdateBlocked() || (this.isUpdating = !0, (e = this.nodes) == null || e.forEach(Vs), this.animationId++)
        }
        getTransformTemplate() {
            var e;
            return (e = this.options.visualElement) == null ? void 0 : e.getProps().transformTemplate
        }
        willUpdate(e = !0) {
            var t, n, r;
            if (this.root.isUpdateBlocked()) {
                (n = (t = this.options).onExitComplete) == null || n.call(t);
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
                let t = this.path[e];
                t.shouldResetTransform = !0, t.updateScroll(`snapshot`), t.options.layoutRoot && t.willUpdate(!1)
            }
            let {
                layoutId: i,
                layout: a
            } = this.options;
            (i !== void 0 || a) && (this.prevTransformTemplateValue = (r = this.getTransformTemplate()) == null ? void 0 : r(this.latestValues, ``), this.updateSnapshot(), e && this.notifyListeners(`willUpdate`))
        }
        didUpdate() {
            this.isUpdateBlocked() ? (this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Is)) : this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Js), this.potentialNodes.clear()), this.nodes.forEach(Ls), this.nodes.forEach(Ms), this.nodes.forEach(Ns), this.clearAllSnapshots(), bn.update(), bn.preRender(), bn.render())
        }
        clearAllSnapshots() {
            this.nodes.forEach(Fs), this.sharedNodes.forEach(Hs)
        }
        scheduleUpdateProjection() {
            z.preRender(this.updateProjection, !1, !0)
        }
        scheduleCheckAfterUnmount() {
            z.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure())
        }
        updateLayout() {
            var e;
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
            let t = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = Y(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners(`measure`, this.layout.layoutBox), (e = this.options.visualElement) == null || e.notify(`LayoutMeasure`, this.layout.layoutBox, t == null ? void 0 : t.layoutBox)
        }
        updateScroll(e = `measure`) {
            let t = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && (this.scroll = {
                animationId: this.root.animationId,
                phase: e,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            var e;
            if (!i) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
                n = this.projectionDelta && !xs(this.projectionDelta),
                r = (e = this.getTransformTemplate()) == null ? void 0 : e(this.latestValues, ``),
                a = r !== this.prevTransformTemplateValue;
            t && (n || Z(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(e = !0) {
            let t = this.measurePageBox(),
                n = this.removeElementScroll(t);
            return e && (n = this.removeTransform(n)), Xs(n), {
                animationId: this.root.animationId,
                measuredBox: t,
                layoutBox: n,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            let {
                visualElement: e
            } = this.options;
            if (!e) return Y();
            let t = e.measureViewportBox(),
                {
                    scroll: n
                } = this.root;
            return n && (Q(t.x, n.offset.x), Q(t.y, n.offset.y)), t
        }
        removeElementScroll(e) {
            let t = Y();
            $(t, e);
            for (let n = 0; n < this.path.length; n++) {
                let r = this.path[n],
                    {
                        scroll: i,
                        options: a
                    } = r;
                if (r !== this.root && i && a.layoutScroll) {
                    if (i.isRoot) {
                        $(t, e);
                        let {
                            scroll: n
                        } = this.root;
                        n && (Q(t.x, -n.offset.x), Q(t.y, -n.offset.y))
                    }
                    Q(t.x, i.offset.x), Q(t.y, i.offset.y)
                }
            }
            return t
        }
        applyTransform(e, t = !1) {
            let n = Y();
            $(n, e);
            for (let e = 0; e < this.path.length; e++) {
                let r = this.path[e];
                !t && r.options.layoutScroll && r.scroll && r !== r.root && ro(n, {
                    x: -r.scroll.offset.x,
                    y: -r.scroll.offset.y
                }), Z(r.latestValues) && ro(n, r.latestValues)
            }
            return Z(this.latestValues) && ro(n, this.latestValues), n
        }
        removeTransform(e) {
            var t;
            let n = Y();
            $(n, e);
            for (let e = 0; e < this.path.length; e++) {
                let r = this.path[e];
                if (!r.instance || !Z(r.latestValues)) continue;
                Ga(r.latestValues) && r.updateSnapshot();
                let i = Y();
                $(i, r.measurePageBox()), ys(n, r.latestValues, (t = r.snapshot) == null ? void 0 : t.layoutBox, i)
            }
            return Z(this.latestValues) && ys(n, this.latestValues), n
        }
        setTargetDelta(e) {
            this.targetDelta = e, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection()
        }
        setOptions(e) {
            this.options = {
                ...this.options,
                ...e,
                crossfade: e.crossfade === void 0 || e.crossfade
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        resolveTargetDelta() {
            var e;
            let t = this.getLead();
            if (this.isProjectionDirty || (this.isProjectionDirty = t.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = t.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
            let {
                layout: n,
                layoutId: r
            } = this.options;
            if (this.layout && (n || r)) {
                if (!this.targetDelta && !this.relativeTarget) {
                    let e = this.getClosestProjectingParent();
                    e && e.layout ? (this.relativeParent = e, this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), Ea(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), $(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = Y(), this.targetWithTransforms = Y()), this.relativeTarget && this.relativeTargetOrigin && (e = this.relativeParent) != null && e.target ? wa(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : $(this.target, this.layout.layoutBox), Za(this.target, this.targetDelta)) : $(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    let e = this.getClosestProjectingParent();
                    e && !!e.resumingFrom == !!this.resumingFrom && !e.options.layoutScroll && e.target ? (this.relativeParent = e, this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), Ea(this.relativeTargetOrigin, this.target, e.target), $(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Ga(this.parent.latestValues) || Ka(this.parent.latestValues))) return (this.parent.relativeTarget || this.parent.targetDelta || this.parent.options.layoutRoot) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
        }
        calcProjection() {
            var e;
            let {
                isProjectionDirty: t,
                isTransformDirty: n
            } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            let r = this.getLead(),
                i = !!this.resumingFrom || this !== r,
                a = !0;
            if (t && (a = !1), i && n && (a = !1), a) return;
            let {
                layout: o,
                layoutId: s
            } = this.options;
            if (this.isTreeAnimating = !!((e = this.parent) != null && e.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(o || s)) return;
            $(this.layoutCorrected, this.layout.layoutBox), Qa(this.layoutCorrected, this.treeScale, this.path, i);
            let {
                target: c
            } = r;
            if (!c) return;
            this.projectionDelta || (this.projectionDelta = za(), this.projectionDeltaWithTransform = za());
            let l = this.treeScale.x,
                u = this.treeScale.y,
                d = this.projectionTransform;
            Sa(this.projectionDelta, this.layoutCorrected, c, this.latestValues), this.projectionTransform = Ts(this.projectionDelta, this.treeScale), (this.projectionTransform !== d || this.treeScale.x !== l || this.treeScale.y !== u) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners(`projectionUpdate`, c))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(e = !0) {
            var t, n, r;
            (n = (t = this.options).scheduleRender) == null || n.call(t), e && ((r = this.getStack()) == null || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(e, t = !1) {
            var n, r;
            let i = this.snapshot,
                a = (i == null ? void 0 : i.latestValues) || {},
                o = {
                    ...this.latestValues
                },
                s = za();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
            let c = Y(),
                l = (i == null ? void 0 : i.source) !== ((n = this.layout) == null ? void 0 : n.source),
                u = (((r = this.getStack()) == null ? void 0 : r.members.length) || 0) <= 1,
                d = !(!l || u || this.options.crossfade !== !0 || this.path.some(Ks));
            this.animationProgress = 0, this.mixTargetDelta = t => {
                var n;
                let r = t / 1e3;
                Us(s.x, e.x, r), Us(s.y, e.y, r), this.setTargetDelta(s), this.relativeTarget && this.relativeTargetOrigin && this.layout && (n = this.relativeParent) != null && n.layout && (Ea(c, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Gs(this.relativeTarget, this.relativeTargetOrigin, c, r)), l && (this.animationValues = o, cs(o, a, this.latestValues, r, d, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = r
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(e) {
            var t, n;
            this.notifyListeners(`animationStart`), (t = this.currentAnimation) == null || t.stop(), this.resumingFrom && ((n = this.resumingFrom.currentAnimation) == null || n.stop()), this.pendingAnimation && (B.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = z.update(() => {
                D.hasAnimatedSinceResize = !0, this.currentAnimation = rs(0, ks, {
                    ...e,
                    onUpdate: t => {
                        var n;
                        this.mixTargetDelta(t), (n = e.onUpdate) == null || n.call(e, t)
                    },
                    onComplete: () => {
                        var t;
                        (t = e.onComplete) == null || t.call(e), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            var e;
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), (e = this.getStack()) == null || e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners(`animationComplete`)
        }
        finishAnimation() {
            var e;
            this.currentAnimation && ((e = this.mixTargetDelta) == null || e.call(this, ks), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            let e = this.getLead(),
                {
                    targetWithTransforms: t,
                    target: n,
                    layout: r,
                    latestValues: i
                } = e;
            if (t && n && r) {
                if (this !== e && this.layout && r && Zs(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                    n = this.target || Y();
                    let t = J(this.layout.layoutBox.x);
                    n.x.min = e.target.x.min, n.x.max = n.x.min + t;
                    let r = J(this.layout.layoutBox.y);
                    n.y.min = e.target.y.min, n.y.max = n.y.min + r
                }
                $(t, n), ro(t, i), Sa(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
            }
        }
        registerSharedNode(e, t) {
            var n, r, i;
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new ws), this.sharedNodes.get(e).add(t), t.promote({
                transition: (n = t.options.initialPromotionConfig) == null ? void 0 : n.transition,
                preserveFollowOpacity: (i = (r = t.options.initialPromotionConfig) == null ? void 0 : r.shouldPreserveFollowOpacity) == null ? void 0 : i.call(r, t)
            })
        }
        isLead() {
            let e = this.getStack();
            return !e || e.lead === this
        }
        getLead() {
            var e;
            let {
                layoutId: t
            } = this.options;
            return t && ((e = this.getStack()) == null ? void 0 : e.lead) || this
        }
        getPrevLead() {
            var e;
            let {
                layoutId: t
            } = this.options;
            return t ? (e = this.getStack()) == null ? void 0 : e.prevLead : void 0
        }
        getStack() {
            let {
                layoutId: e
            } = this.options;
            if (e) return this.root.sharedNodes.get(e)
        }
        promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: n
        } = {}) {
            let r = this.getStack();
            r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
                transition: t
            })
        }
        relegate() {
            let e = this.getStack();
            return e ? e.relegate(this) : !1
        }
        resetRotation() {
            let {
                visualElement: e
            } = this.options;
            if (!e) return;
            let t = !1,
                {
                    latestValues: n
                } = e;
            if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (t = !0), !t) return;
            let r = {};
            for (let t = 0; t < Os.length; t++) {
                let i = `rotate` + Os[t];
                n[i] && (r[i] = n[i], e.setStaticValue(i, 0))
            }
            e == null || e.render();
            for (let t in r) e.setStaticValue(t, r[t]);
            e.scheduleRender()
        }
        getProjectionStyles(e = {}) {
            let t = {};
            if (!this.instance || this.isSVG) return t;
            if (this.isVisible) t.visibility = ``;
            else return {
                visibility: `hidden`
            };
            let n = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, t.opacity = ``, t.pointerEvents = bt(e.pointerEvents) || ``, t.transform = n ? n(this.latestValues, ``) : `none`, t;
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
                let t = {};
                return this.options.layoutId && (t.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, t.pointerEvents = bt(e.pointerEvents) || ``), this.hasProjected && !Z(this.latestValues) && (t.transform = n ? n({}, ``) : `none`, this.hasProjected = !1), t
            }
            let i = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(), t.transform = Ts(this.projectionDeltaWithTransform, this.treeScale, i), n && (t.transform = n(i, t.transform));
            let {
                x: a,
                y: o
            } = this.projectionDelta;
            t.transformOrigin = `${a.origin*100}% ${o.origin*100}% 0`, t.opacity = r.animationValues ? r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : r === this ? i.opacity === void 0 ? `` : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
            for (let e in de) {
                if (i[e] === void 0) continue;
                let {
                    correct: n,
                    applyTo: a
                } = de[e], o = t.transform === `none` ? i[e] : n(i[e], r);
                if (a) {
                    let e = a.length;
                    for (let n = 0; n < e; n++) t[a[n]] = o
                } else t[e] = o
            }
            return this.options.layoutId && (t.pointerEvents = r === this ? bt(e.pointerEvents) || `` : `none`), t
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(e => {
                var t;
                return (t = e.currentAnimation) == null ? void 0 : t.stop()
            }), this.root.nodes.forEach(Is), this.root.sharedNodes.clear()
        }
    }
}

function Ms(e) {
    e.updateLayout()
}

function Ns(e) {
    var t, n, r;
    let i = ((t = e.resumeFrom) == null ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && i && e.hasListeners(`didUpdate`)) {
        let {
            layoutBox: t,
            measuredBox: n
        } = e.layout, {
            animationType: r
        } = e.options, a = i.source !== e.layout.source;
        r === `size` ? X(e => {
            let n = a ? i.measuredBox[e] : i.layoutBox[e],
                r = J(n);
            n.min = t[e].min, n.max = n.min + r
        }) : Zs(r, i.layoutBox, t) && X(e => {
            let n = a ? i.measuredBox[e] : i.layoutBox[e],
                r = J(t[e]);
            n.max = n.min + r
        });
        let o = za();
        Sa(o, t, i.layoutBox);
        let s = za();
        a ? Sa(s, e.applyTransform(n, !0), i.measuredBox) : Sa(s, t, i.layoutBox);
        let c = !xs(o),
            l = !1;
        if (!e.resumeFrom) {
            let n = e.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
                let {
                    snapshot: r,
                    layout: a
                } = n;
                if (r && a) {
                    let o = Y();
                    Ea(o, i.layoutBox, r.layoutBox);
                    let s = Y();
                    Ea(s, t, a.layoutBox), Ss(o, s) || (l = !0), n.options.layoutRoot && (e.relativeTarget = s, e.relativeTargetOrigin = o, e.relativeParent = n)
                }
            }
        }
        e.notifyListeners(`didUpdate`, {
            layout: t,
            snapshot: i,
            delta: s,
            layoutDelta: o,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: l
        })
    } else e.isLead() && ((r = (n = e.options).onExitComplete) == null || r.call(n));
    e.options.transition = void 0
}

function Ps(e) {
    e.isProjectionDirty || (e.isProjectionDirty = !!(e.parent && e.parent.isProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = !!(e.parent && e.parent.isTransformDirty))
}

function Fs(e) {
    e.clearSnapshot()
}

function Is(e) {
    e.clearMeasurements()
}

function Ls(e) {
    let {
        visualElement: t
    } = e.options;
    t != null && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`), e.resetTransform()
}

function Rs(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0
}

function zs(e) {
    e.resolveTargetDelta()
}

function Bs(e) {
    e.calcProjection()
}

function Vs(e) {
    e.resetRotation()
}

function Hs(e) {
    e.removeLeadSnapshot()
}

function Us(e, t, n) {
    e.translate = G(t.translate, 0, n), e.scale = G(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function Ws(e, t, n, r) {
    e.min = G(t.min, n.min, r), e.max = G(t.max, n.max, r)
}

function Gs(e, t, n, r) {
    Ws(e.x, t.x, n.x, r), Ws(e.y, t.y, n.y, r)
}

function Ks(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
var qs = {
    duration: .45,
    ease: [.4, 0, .1, 1]
};

function Js(e, t) {
    let n = e.root;
    for (let t = e.path.length - 1; t >= 0; t--)
        if (e.path[t].instance) {
            n = e.path[t];
            break
        } let r = (n && n !== e.root ? n.instance : document).querySelector(`[data-projection-id="${t}"]`);
    r && e.mount(r, !0)
}

function Ys(e) {
    e.min = Math.round(e.min), e.max = Math.round(e.max)
}

function Xs(e) {
    Ys(e.x), Ys(e.y)
}

function Zs(e, t, n) {
    return e === `position` || e === `preserve-aspect` && !ba(Cs(t), Cs(n), .2)
}
var Qs = js({
        attachResizeListener: (e, t) => Dt(e, `resize`, t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    $s = {
        current: void 0
    },
    ec = js({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!$s.current) {
                let e = new Qs(0, {});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), $s.current = e
            }
            return $s.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t === void 0 ? `none` : t
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === `fixed`
    }),
    tc = {
        ...ua,
        ...nn,
        ...po,
        ...ns
    },
    nc = ce((e, t) => Et(e, t, tc, Jo, ec));
export {
    d as _, br as a, V as c, z as d, an as f, E as g, O as h, G as i, En as l, A as m, rs as n, hr as o, Ht as p, Rr as r, mr as s, nc as t, B as u, l as v, o as y
};